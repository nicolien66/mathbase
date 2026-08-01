/* MathBase — patch-interactif.js
   Branche les exercices interactifs dans l'application.

   Trois retouches, toutes vérifiées avant écriture et toutes réversibles
   (sauvegarde horodatée de chaque fichier modifié) :

   1. server.js  — ajoute la colonne `interactif JSONB` dans initDB().
      La route /exercises fait déjà « SELECT * » : la colonne remontera seule,
      aucune modification de route n'est nécessaire.
   2. app.html   — charge quadrillage.js avant script.js.
   3. script.js  — deux branchements DISTINCTS :
        · catalogue (openModal)   → APERÇU statique de la figure à compléter,
          sans interaction : on regarde, on ne joue pas ;
        · séance (paintLeft)      → PLATEAU interactif à la place du brouillon,
          avec correction locale immédiate (aucun appel à l'IA : la réponse
          est connue, la comparaison est exacte).

   quadrillage.js doit être déposé à côté de script.js (même dossier public).
   Le script vérifie sa présence et le signale s'il manque.

   ── USAGE ────────────────────────────────────────────────────────────────
     node patch-interactif.js              # simulation
     node patch-interactif.js --execute    # applique
   Option : --dossier "chemin/public"      (sinon localisé automatiquement)
*/

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const iD = ARGS.indexOf("--dossier");
const DOSSIER = iD >= 0 && ARGS[iD + 1] ? ARGS[iD + 1] : null;

/* ── localisation des fichiers ── */
function cherche(racine, cible, prof = 0) {
  if (prof > 4) return [];
  let out = [];
  let ents; try { ents = fs.readdirSync(racine, { withFileTypes: true }); } catch (e) { return []; }
  for (const e of ents) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    const p = path.join(racine, e.name);
    if (e.isFile() && e.name === cible) out.push(p);
    else if (e.isDirectory()) out = out.concat(cherche(p, cible, prof + 1));
  }
  return out;
}
function unique(nom, dossier) {
  if (dossier) { const p = path.join(dossier, nom); return fs.existsSync(p) ? p : null; }
  const t = cherche(process.cwd(), nom);
  if (t.length === 1) return t[0];
  if (t.length > 1) {
    console.error(`✗ Plusieurs ${nom} trouvés — précisez avec --dossier :`);
    t.forEach(f => console.error("   " + f));
    process.exit(1);
  }
  return null;
}

const fServer = unique("server.js", DOSSIER);
const fApp    = unique("app.html", DOSSIER);
const fScript = unique("script.js", DOSSIER);
if (!fServer || !fApp || !fScript) {
  console.error("✗ Fichiers introuvables :");
  if (!fServer) console.error("   server.js");
  if (!fApp) console.error("   app.html");
  if (!fScript) console.error("   script.js");
  console.error(`  Lancez depuis le dossier du projet, ou passez --dossier "chemin".`);
  process.exit(1);
}
console.log(`server.js  : ${fServer}`);
console.log(`app.html   : ${fApp}`);
console.log(`script.js  : ${fScript}\n`);

const dossierFront = path.dirname(fApp);
const fWidget = path.join(dossierFront, "quadrillage.js");
if (!fs.existsSync(fWidget)) {
  console.log(`⚠ quadrillage.js absent de ${dossierFront}`);
  console.log(`  Déposez-le à côté de app.html avant d'appliquer le patch.\n`);
}

if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");
const modifs = [];

/* ═══ 1. server.js : la colonne ═══ */
{
  const src = fs.readFileSync(fServer, "utf8");
  const marque = `ADD COLUMN IF NOT EXISTS interactif`;
  if (src.includes(marque)) console.log("· server.js : colonne « interactif » déjà déclarée.");
  else {
    const ancre = `await pool.query(\`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS type TEXT DEFAULT 'exercice'\`);`;
    if (!src.includes(ancre)) { console.error("✗ server.js : point d'insertion introuvable."); process.exit(1); }
    const ajout = ancre + `
  /* Exercices interactifs : { widget, params…, reponse } décrivant le plateau
     et la réponse attendue. La route /exercises fait un SELECT *, la colonne
     est donc servie sans autre modification. */
  await pool.query(\`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS interactif JSONB\`);`;
    modifs.push({ f: fServer, avant: src, apres: src.replace(ancre, ajout),
                  quoi: "colonne interactif JSONB" });
  }
}

/* ═══ 2. app.html : charger le widget ═══ */
{
  const src = fs.readFileSync(fApp, "utf8");
  if (/src=["']quadrillage\.js["']/.test(src)) console.log("· app.html : quadrillage.js déjà chargé.");
  else {
    const ancre = `<script src="script.js"></script>`;
    if (!src.includes(ancre)) { console.error("✗ app.html : balise script.js introuvable."); process.exit(1); }
    modifs.push({ f: fApp, avant: src,
      apres: src.replace(ancre, `<script src="quadrillage.js"></script>\n` + ancre),
      quoi: "chargement de quadrillage.js" });
  }
}

/* ═══ 3. script.js : aperçu au catalogue, plateau en séance ═══ */
{
  const src = fs.readFileSync(fScript, "utf8");
  if (src.includes("MB_QUADRILLAGE")) console.log("· script.js : rendu interactif déjà branché.");
  else {
    /* 3a — catalogue : aperçu statique en fin de openModal() */
    const ancreModal = `  document.getElementById("modal-overlay").classList.add("open");
}`;
    /* 3b — séance : plateau à la place du brouillon, en fin de paintLeft() */
    const ancreLeft = `    label.textContent = "Ton brouillon";
    if (btnCorrect) btnCorrect.disabled = false;
  }
}`;
    if (!src.includes(ancreModal)) { console.error("✗ script.js : fin de openModal() introuvable."); process.exit(1); }
    if (!src.includes(ancreLeft))  { console.error("✗ script.js : fin de paintLeft() introuvable."); process.exit(1); }

    const bloc = `  document.getElementById("modal-overlay").classList.add("open");
  apercuInteractif(ex);
}

/* ═══ EXERCICES INTERACTIFS ═══
   Le champ \`interactif\` décrit un plateau : { widget, …, reponse }.
   Deux usages, volontairement séparés :
     · au CATALOGUE, on montre seulement la figure à compléter (aperçu figé) ;
     · en SÉANCE, l'élève construit sa réponse sur le plateau, et la
       correction est locale — la réponse attendue est connue, la comparaison
       est exacte, aucun appel au correcteur IA n'est nécessaire. */
function litInteractif(ex) {
  let p = ex && ex.interactif;
  if (!p) return null;
  if (typeof p === "string") { try { p = JSON.parse(p); } catch (e) { return null; } }
  return (p && p.widget === "quadrillage" && window.MB_QUADRILLAGE) ? p : null;
}

function apercuInteractif(ex) {
  const params = litInteractif(ex);
  if (!params) return;
  const contenu = document.getElementById("modal-content");
  const bloc = document.createElement("div");
  bloc.className = "modal-section";
  bloc.innerHTML = '<div class="modal-section-label">Figure</div>';
  const boite = document.createElement("div");
  bloc.appendChild(boite);
  const sections = contenu.querySelectorAll(".modal-section");
  const cible = sections[sections.length - 1];
  if (cible && cible.parentNode) cible.parentNode.insertBefore(bloc, cible.nextSibling);
  else contenu.appendChild(bloc);
  MB_QUADRILLAGE.installerApercu(params, boite);
}

/* Plateau de séance : monté dans la zone de brouillon, qui est masquée.
   Renseigne seanceHistory au même format que le correcteur IA. */
let plateauSeance = null;
function plateauInteractif(ex, hist) {
  const zone = document.getElementById("page-answer");
  const ta = document.getElementById("session-answer");
  const label = document.getElementById("page-answer-label");
  const ancien = document.getElementById("mbq-seance");
  if (ancien) ancien.remove();
  plateauSeance = null;

  const params = litInteractif(ex);
  if (!params) { if (ta) ta.style.display = ""; return; }

  if (ta) ta.style.display = "none";
  label.textContent = hist && (hist.result || hist.skipped) ? "Ta construction" : "Construis la figure";
  const boite = document.createElement("div");
  boite.id = "mbq-seance";
  zone.appendChild(boite);
  plateauSeance = MB_QUADRILLAGE.installer(params, boite);

  /* le bouton « Valider » du plateau fait double emploi avec « Corriger » */
  const v = boite.querySelector('[data-a="valider"]');
  if (v) v.style.display = "none";
  if (hist && hist.result && plateauSeance.instance)
    plateauSeance.instance().corriger(params.reponse);
}

/* Correction locale d'un exercice interactif : renvoie le même objet que
   la route /exercises/correct, pour que la page de droite ne change pas. */
function corrigerInteractif(ex) {
  const params = litInteractif(ex);
  if (!params || !plateauSeance) return null;
  const inst = plateauSeance.instance();
  const r = MB_QUADRILLAGE.verifier(inst.lire(), params.reponse);
  inst.corriger(params.reponse);
  const morceaux = [];
  if (r.justes) morceaux.push(r.justes + " élément" + (r.justes > 1 ? "s" : "") + " juste" + (r.justes > 1 ? "s" : ""));
  if (r.manques) morceaux.push(r.manques + " oubli" + (r.manques > 1 ? "s" : ""));
  if (r.faux) morceaux.push(r.faux + " en trop");
  return {
    verdict: r.ok ? "correct" : (r.score >= 0.6 ? "partial" : "incorrect"),
    analyse: r.ok
      ? "Ta construction est exacte : chaque élément est au bon endroit."
      : "Sur " + r.attendus + " élément" + (r.attendus > 1 ? "s" : "") + " attendu" +
        (r.attendus > 1 ? "s" : "") + " : " + (morceaux.join(", ") || "rien de posé") + ".",
    demarche: "Chaque point a son image de l'autre côté de l'axe, à la même distance : " +
      "l'axe est la médiatrice du segment qui joint un point et son image.",
    solution: ex.solution || "",
    score: r.score
  };
}`;
    let out = src.replace(ancreModal, bloc);
    out = out.replace(ancreLeft, ancreLeft.slice(0, -1) + `  plateauInteractif(ex, hist);
}`);

    /* 3c — submitAnswer : court-circuiter l'IA pour les exercices interactifs */
    const ancreSubmit = `async function submitAnswer() {
  const ta     = document.getElementById("session-answer");
  const answer = ta.value.trim();
  if (!answer) { showToast("Écris ton brouillon avant de corriger.", "error"); return; }
  if (isTurning) return;`;
    if (!out.includes(ancreSubmit)) { console.error("✗ script.js : début de submitAnswer() introuvable."); process.exit(1); }
    out = out.replace(ancreSubmit, `async function submitAnswer() {
  const ta     = document.getElementById("session-answer");
  if (isTurning) return;

  /* Exercice interactif : la correction est locale et immédiate. */
  const exI = seanceExercises[seanceIndex];
  if (litInteractif(exI)) {
    const result = corrigerInteractif(exI);
    if (!result) return;
    seanceHistory[seanceIndex] = { answer: "(construction)", result, skipped: false };
    if (seanceIndex > seanceMax) seanceMax = seanceIndex;
    document.getElementById("page-answer").classList.add("locked");
    document.getElementById("page-answer-label").textContent = "Ta construction";
    const bc = document.getElementById("btn-correct");
    if (bc) bc.disabled = true;
    showTutor("result", result);
    paintNav();
    return;
  }

  const answer = ta.value.trim();
  if (!answer) { showToast("Écris ton brouillon avant de corriger.", "error"); return; }`);

    modifs.push({ f: fScript, avant: src, apres: out,
                  quoi: "aperçu au catalogue, plateau et correction locale en séance" });
  }
}

/* ═══ CONTRÔLES ═══ */
if (!modifs.length) { console.log("\nRien à faire : l'application est déjà branchée."); process.exit(0); }
console.log("Modifications prévues :");
modifs.forEach(m => console.log(`   → ${path.basename(m.f)} : ${m.quoi}`));

let souci = 0;
for (const m of modifs) {
  if (m.f.endsWith(".html")) continue;                 // pas du JS pur
  try { new vm.Script(m.apres); }
  catch (e) { console.error(`\n✗ ${path.basename(m.f)} : le résultat n'est pas du JavaScript valide.`);
              console.error(`  ${e.message}`); souci++; }
}
if (souci) { console.error("\nAucune modification écrite."); process.exit(1); }
console.log("\n✔ Les fichiers obtenus sont syntaxiquement valides.");
modifs.forEach(m => console.log(`   ${path.basename(m.f)} : ${m.avant.length} → ${m.apres.length} caractères`));

if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); process.exit(0); }

const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
modifs.forEach(m => {
  fs.writeFileSync(`${m.f}.avant-interactif-${stamp}`, m.avant, "utf8");
  fs.writeFileSync(m.f, m.apres, "utf8");
  console.log(`${path.basename(m.f)} mis à jour (sauvegarde : ${path.basename(m.f)}.avant-interactif-${stamp}).`);
});
console.log("\nRedémarrez le serveur, puis rechargez la page avec Ctrl+F5.");
if (!fs.existsSync(fWidget))
  console.log(`⚠ N'oubliez pas de déposer quadrillage.js dans ${dossierFront}`);
