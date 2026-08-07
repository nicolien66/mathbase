/* MathBase — patch-figures.js
   Objectif : que le correcteur VOIE les graphiques et diagrammes des exercices
   (chapitre « Gestion des données », famille « Analyse des données »), au lieu
   de n'en recevoir qu'une description textuelle.

   ── COMMENT ÇA MARCHE ────────────────────────────────────────────────────
   Le mécanisme existant ne joint une image que pour les ANNALES : `pages`
   + `annale_url` → renderPageImage() rasterise la page du PDF. Les exercices
   du chapitre n'ont pas de PDF, donc jamais d'image.

   On ajoute le chaînon manquant :
     1. colonne `figure` (source SVG du graphique) sur la table exercises ;
     2. la figure est affichée à l'élève sous l'énoncé, via le sanitiseur déjà
        utilisé pour les annales (aucun script, aucune ressource externe) ;
     3. au moment de corriger, le NAVIGATEUR rasterise ce SVG en PNG (canvas)
        et l'envoie avec la copie ;
     4. le serveur valide ce PNG et le joint au message multimodal Mistral,
        avec une consigne adaptée : « l'image jointe est le graphique ».

   Rasteriser côté navigateur évite d'ajouter une dépendance native au serveur
   (node-canvas ne sait pas lire le SVG sans librsvg). Le SVG étant sans
   ressource externe, le canvas n'est pas « tainted » : toDataURL fonctionne.
   Si la rasterisation échoue, on retombe silencieusement sur le mode texte.

   ── SÛRETÉ ───────────────────────────────────────────────────────────────
   · Sauvegarde horodatée de chaque fichier modifié.
   · Chaque modification est ancrée sur une chaîne existante ; si l'ancre est
     absente (fichier déjà modifié ou différent), l'étape est signalée et
     ignorée — le script ne casse rien et peut être relancé.
   · Simulation par défaut.

   Usage, à la racine du projet (là où se trouvent server.js et script.js) :
     node patch-figures.js              # simulation : liste ce qui serait fait
     node patch-figures.js --execute    # applique
*/

"use strict";
const fs = require("fs");
const path = require("path");

const EXECUTE = process.argv.includes("--execute");
const RACINE = process.cwd();

/* ═══════════ FRAGMENTS À INSÉRER ═══════════ */

/* 1. server.js — colonne `figure` */
const ANCRE_COL = "await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS type TEXT DEFAULT 'exercice'`);";
const AJOUT_COL = `  /* Figure d'un exercice (graphique, diagramme, schéma) au format SVG.
     Affichée à l'élève, et rasterisée en PNG par le navigateur pour être
     JOINTE au correcteur : il doit voir le graphique, pas le deviner. */
  await pool.query(\`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS figure TEXT\`);
`;

/* 2. server.js — validation du PNG reçu (inséré avant la route de correction) */
const ANCRE_VALID = "/* ── CORRIGER UNE RÉPONSE (séance) ── */";
const AJOUT_VALID = `/* Le navigateur nous renvoie la figure de l'exercice rasterisée en PNG.
   On n'accepte qu'un data-URL PNG de taille raisonnable : cette chaîne part
   telle quelle vers l'API, elle ne doit être ni un lien externe (SSRF) ni un
   pavé de plusieurs mégaoctets (rejet de l'API). */
const FIGURE_PNG_MAX = 2 * 1024 * 1024;          // ~2 Mo de data-URL
function validerFigurePng(u) {
  if (typeof u !== "string") return null;
  if (!/^data:image\\/png;base64,[A-Za-z0-9+/=]+$/.test(u)) return null;
  if (u.length > FIGURE_PNG_MAX) {
    console.warn("[figure] PNG trop lourd (" + Math.round(u.length / 1024) + " Ko) — ignoré.");
    return null;
  }
  return u;
}

`;

/* 3. server.js — joindre la figure aux images de la correction */
const ANCRE_JOINDRE = "  const avecImage = images.length > 0;";
const AJOUT_JOINDRE = `  /* Figure de l'exercice (graphique/diagramme rasterisé par le navigateur).
     Ajoutée APRÈS le garde-fou de poids des pages, et seulement si le total
     reste sous la limite : sans quoi la consigne annoncerait à l'IA une image
     qui aurait été retirée. Les deux sources peuvent coexister. */
  let figurePng = validerFigurePng(req.body.figure_png);
  if (figurePng && poids + figurePng.length > 5 * 1024 * 1024) {
    console.warn("[figure] total trop lourd — graphique non joint.");
    figurePng = null;
  }
  if (figurePng) { images.push(figurePng); console.log("[figure] graphique joint à la correction."); }

`;

/* 4. server.js — consigne adaptée selon la nature de l'image jointe */
const ANCRE_SOURCE_DEB = "  const sourceCtx = avecImage";
const ANCRE_SOURCE_FIN = "tu ne disposes PAS de l'image du sujet. Tu travailles sur une extraction textuelle imparfaite.`;";
const AJOUT_SOURCE = `  const nbPages = images.length - (figurePng ? 1 : 0);
  const sourceCtx = nbPages > 0
    ? \`\\n\\nSOURCE PRINCIPALE : \${nbPages === 1 ? "l'image jointe est la page" : "les images jointes sont les pages"} du sujet officiel où se trouve cet exercice. C'est exactement ce que l'élève a sous les yeux. Lis-y l'énoncé exact, les figures, les codages (angles droits, égalités de longueurs), les valeurs portées sur les dessins et les tableaux. FAIS-EN TA RÉFÉRENCE : en cas de désaccord entre l'image et le texte reproduit ci-dessous, l'IMAGE a raison — le texte provient d'une extraction automatique imparfaite. La page peut contenir d'autres exercices : ne corrige que celui indiqué par le titre.\${figurePng ? " La DERNIÈRE image jointe est le graphique de l'exercice." : ""}\`
    : figurePng
      ? \`\\n\\nSOURCE PRINCIPALE : l'image jointe est le GRAPHIQUE (ou diagramme, ou tableau) de cet exercice — exactement celui que l'élève a sous les yeux. Lis-y toi-même les valeurs : hauteurs des barres, graduations des axes, légendes, secteurs, effectifs. FAIS-EN TA RÉFÉRENCE : si une lecture graphique de l'élève te semble fausse, vérifie-la sur l'image avant de le corriger. Si une valeur est illisible ou ambiguë sur le graphique, dis-le et ne pénalise pas l'élève pour cette ambiguïté.\`
      : \`\\n\\nAttention : tu ne disposes PAS de l'image du sujet. Tu travailles sur une extraction textuelle imparfaite.\`;`;

/* 5. script.js — sanitiseur partagé + rasterisation */
const ANCRE_SANIT = `function annaleFigure(fig) {`;
const AJOUT_SANIT = `/* Sanitiseur commun aux figures d'annales et aux figures d'exercices.
   Ces figures ne contiennent que des tracés : on rejette tout ce qui pourrait
   exécuter du script ou charger une ressource externe. Renvoie le SVG ou "". */
function figureSvgSafe(fig) {
  if (!fig || typeof fig !== "string") return "";
  const s = fig.trim();
  if (s.indexOf("<svg") !== 0) return "";
  if (/<\\s*script|\\son\\w+\\s*=|javascript:|<\\s*foreignObject|(?:xlink:)?href\\s*=|src\\s*=/i.test(s)) return "";
  const ok = /^<svg[^>]*>(?:\\s*<(?:line|polyline|polygon|path|circle|ellipse|rect|g|text|tspan)\\b[^>]*\\/?>|\\s*<\\/(?:g|text|tspan|svg)>|[^<]*)*$/i;
  return ok.test(s) ? s : "";
}

/* Rasterise le SVG d'un exercice en PNG (data-URL), pour l'envoyer au
   correcteur. Le SVG n'ayant aucune ressource externe, le canvas reste
   exploitable (non « tainted »). Renvoie null si quoi que ce soit échoue :
   la correction repart alors en mode texte, sans bloquer l'élève. */
function figureEnPng(fig, largeur) {
  let svg = figureSvgSafe(fig);
  if (!svg || typeof document === "undefined") return Promise.resolve(null);
  // Chargé dans une balise <img>, un SVG DOIT porter son xmlns, sinon le
  // navigateur refuse le document (contrairement au SVG inséré dans le DOM,
  // qui s'affiche sans). On l'ajoute s'il manque.
  if (!/\sxmlns\s*=/.test(svg.slice(0, svg.indexOf(">") + 1)))
    svg = svg.replace(/^<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"');
  return new Promise(resolve => {
    try {
      const fini = setTimeout(() => resolve(null), 4000);   // jamais bloquer
      const img = new Image();
      img.onload = () => {
        try {
          const L = largeur || 900;
          const ratio = img.height && img.width ? img.height / img.width : 0.66;
          const cv = document.createElement("canvas");
          cv.width  = L;
          cv.height = Math.max(1, Math.round(L * ratio));
          const ctx = cv.getContext("2d");
          ctx.fillStyle = "#fff";                            // fond blanc : un
          ctx.fillRect(0, 0, cv.width, cv.height);           // PNG transparent
          ctx.drawImage(img, 0, 0, cv.width, cv.height);     // se lit mal
          clearTimeout(fini);
          resolve(cv.toDataURL("image/png"));
        } catch (e) { clearTimeout(fini); resolve(null); }
      };
      img.onerror = () => { clearTimeout(fini); resolve(null); };
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    } catch (e) { resolve(null); }
  });
}

`;

/* 6. script.js — annaleFigure réutilise le sanitiseur (plus de logique dupliquée) */
const ANCIEN_ANNALE = `  if (!fig || typeof fig !== "string" || fig.indexOf("<svg") !== 0) return "";
  // sécurité : ces figures ne contiennent que des tracés ; on rejette tout
  // ce qui pourrait exécuter du script (gestionnaires on…, balise script, href/src).
  if (/<\\s*script|\\son\\w+\\s*=|javascript:|<\\s*foreignObject|(?:xlink:)?href\\s*=|src\\s*=/i.test(fig)) return "";
  const ok = /^<svg[^>]*>(?:\\s*<(?:line|polyline|polygon|path|circle|ellipse|rect|g|text|tspan)\\b[^>]*\\/?>|\\s*<\\/(?:g|text|tspan|svg)>|[^<]*)*$/i;
  if (!ok.test(fig)) return "";
  return \`<div class="annale-fig">\${fig}</div>\`;`;
const NOUVEAU_ANNALE = `  const svg = figureSvgSafe(fig);
  return svg ? \`<div class="annale-fig">\${svg}</div>\` : "";`;

/* 7. script.js — afficher la figure sous l'énoncé de la séance */
const ANCRE_PAINT = `  document.getElementById("session-card-content").textContent = ex.content;`;
const AJOUT_PAINT = `
  /* Figure de l'exercice (graphique, diagramme) : insérée juste sous l'énoncé.
     Le conteneur est créé à la volée, inutile de toucher app.html. */
  const zoneEnonce = document.getElementById("session-card-content");
  let boiteFig = document.getElementById("session-card-figure");
  if (!boiteFig && zoneEnonce) {
    boiteFig = document.createElement("div");
    boiteFig.id = "session-card-figure";
    boiteFig.className = "annale-fig";
    zoneEnonce.insertAdjacentElement("afterend", boiteFig);
  }
  if (boiteFig) {
    const svgEx = figureSvgSafe(ex.figure);
    boiteFig.innerHTML = svgEx;
    boiteFig.style.display = svgEx ? "" : "none";
  }`;

/* 8. script.js — joindre le PNG à la requête de correction */
const ANCIEN_POST = `      const res = await MB_AUTH.apiFetch("/exercises/correct", {
        method: "POST",
        body: JSON.stringify({ exercise: ex, answer })
      });`;
const NOUVEAU_POST = `      // Le correcteur doit VOIR le graphique : on le rasterise avant l'envoi.
      const figurePng = await figureEnPng(ex.figure);
      const res = await MB_AUTH.apiFetch("/exercises/correct", {
        method: "POST",
        body: JSON.stringify({ exercise: ex, answer, figure_png: figurePng })
      });`;

/* ═══════════ MOTEUR DE PATCH ═══════════ */
const etapes = [
  { f: "server.js", nom: "colonne `figure` sur exercises",
    marque: "ADD COLUMN IF NOT EXISTS figure TEXT",
    ancre: ANCRE_COL, mode: "apres", texte: AJOUT_COL },
  { f: "server.js", nom: "validation du PNG reçu",
    marque: "function validerFigurePng",
    ancre: ANCRE_VALID, mode: "avant", texte: AJOUT_VALID },
  { f: "server.js", nom: "figure jointe aux images de correction",
    marque: "const figurePng = validerFigurePng(req.body.figure_png)",
    ancre: ANCRE_JOINDRE, mode: "avant", texte: AJOUT_JOINDRE },
  { f: "server.js", nom: "consigne adaptée à la nature de l'image",
    marque: "l'image jointe est le GRAPHIQUE",
    mode: "bloc", debut: ANCRE_SOURCE_DEB, fin: ANCRE_SOURCE_FIN, texte: AJOUT_SOURCE },
  { f: "script.js", nom: "annaleFigure réutilise le sanitiseur",
    marque: "return svg ? `<div class=\"annale-fig\">${svg}</div>` : \"\";",
    mode: "remplace", ancien: ANCIEN_ANNALE, texte: NOUVEAU_ANNALE },
  { f: "script.js", nom: "sanitiseur partagé + rasterisation SVG→PNG",
    marque: "function figureSvgSafe",
    ancre: ANCRE_SANIT, mode: "avant", texte: AJOUT_SANIT },
  { f: "script.js", nom: "affichage de la figure sous l'énoncé",
    marque: 'id = "session-card-figure"',
    ancre: ANCRE_PAINT, mode: "apres", texte: AJOUT_PAINT },
  { f: "script.js", nom: "envoi du PNG avec la copie",
    marque: "figure_png: figurePng",
    mode: "remplace", ancien: ANCIEN_POST, texte: NOUVEAU_POST },
];

const fichiers = {};
function lire(f) {
  if (fichiers[f] === undefined) {
    const p = path.join(RACINE, f);
    if (!fs.existsSync(p)) { fichiers[f] = null; return null; }
    fichiers[f] = fs.readFileSync(p, "utf8");
  }
  return fichiers[f];
}

console.log(EXECUTE ? "=== APPLICATION DU PATCH ===\n" : "=== SIMULATION — ajoutez --execute pour appliquer ===\n");

const bilan = [];
let bloquantes = 0;
for (const e of etapes) {
  let src = lire(e.f);
  if (src === null) { bilan.push({ fichier: e.f, etape: e.nom, etat: "fichier introuvable" }); bloquantes++; continue; }
  if (src.includes(e.marque)) { bilan.push({ fichier: e.f, etape: e.nom, etat: "déjà en place" }); continue; }

  let nouveau = null;
  if (e.mode === "remplace") {
    if (!src.includes(e.ancien)) { bilan.push({ fichier: e.f, etape: e.nom, etat: "ANCRE INTROUVABLE" }); bloquantes++; continue; }
    nouveau = src.replace(e.ancien, e.texte);
  } else if (e.mode === "bloc") {
    const i = src.indexOf(e.debut), j = src.indexOf(e.fin);
    if (i < 0 || j < 0 || j < i) { bilan.push({ fichier: e.f, etape: e.nom, etat: "ANCRE INTROUVABLE" }); bloquantes++; continue; }
    nouveau = src.slice(0, i) + e.texte + src.slice(j + e.fin.length);
  } else {
    const i = src.indexOf(e.ancre);
    if (i < 0) { bilan.push({ fichier: e.f, etape: e.nom, etat: "ANCRE INTROUVABLE" }); bloquantes++; continue; }
    if (src.indexOf(e.ancre, i + 1) >= 0) { bilan.push({ fichier: e.f, etape: e.nom, etat: "ancre ambiguë (×2)" }); bloquantes++; continue; }
    nouveau = e.mode === "avant"
      ? src.slice(0, i) + e.texte + src.slice(i)
      : src.slice(0, i + e.ancre.length) + "\n" + e.texte + src.slice(i + e.ancre.length);
  }
  fichiers[e.f] = nouveau;
  bilan.push({ fichier: e.f, etape: e.nom, etat: "à appliquer" });
}

console.table(bilan);

/* Contrôle de syntaxe avant d'écrire quoi que ce soit. */
let syntaxeKO = 0;
for (const f of Object.keys(fichiers)) {
  if (fichiers[f] === null) continue;
  try { new (require("vm").Script)(fichiers[f], { filename: f }); console.log(`Syntaxe OK : ${f}`); }
  catch (err) { console.error(`✗ Syntaxe cassée dans ${f} : ${err.message}`); syntaxeKO++; }
}
if (syntaxeKO) { console.error("\nAucune écriture : le résultat ne compile pas."); process.exit(1); }
if (bloquantes) console.log(`\n⚠ ${bloquantes} étape(s) non appliquée(s) — voir « ANCRE INTROUVABLE » ci-dessus.`);

if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); process.exit(0); }

const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
for (const f of Object.keys(fichiers)) {
  if (fichiers[f] === null) continue;
  const p = path.join(RACINE, f);
  const original = fs.readFileSync(p, "utf8");
  if (original === fichiers[f]) continue;
  fs.copyFileSync(p, `${p}.avant-figures-${stamp}.bak`);
  fs.writeFileSync(p, fichiers[f], "utf8");
  console.log(`${f} modifié (sauvegarde : ${path.basename(p)}.avant-figures-${stamp}.bak)`);
}
console.log("\nTerminé. Redémarrez le serveur : la colonne `figure` est créée au démarrage.");
