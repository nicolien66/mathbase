/* MathBase — patch-figure-catalogue.js
   Dans l'onglet Exercices, un exercice interactif affiche désormais SA FIGURE
   à la place de son énoncé.

   ── POURQUOI CE PATCH ────────────────────────────────────────────────────
   patch-interactif.js ajoutait la figure APRÈS l'énoncé, en gardant le texte.
   Pour ces exercices, le texte n'apporte rien au catalogue : c'est la figure
   qu'on vient regarder. Le bloc « Énoncé » est donc remplacé par un bloc
   « Figure » contenant le seul quadrillage — sans la réponse, sans consigne.

   Le texte n'est pas perdu pour autant : il reste en base, et la séance
   d'entraînement continue de l'afficher au-dessus du plateau. Seule la vue
   catalogue change.

   Les exercices sans champ `interactif` gardent exactement leur affichage.

   ── PRÉREQUIS ────────────────────────────────────────────────────────────
   patch-interactif.js déjà appliqué (le patch le vérifie et le signale sinon),
   et quadrillage.js à jour dans public/.

   ── USAGE ────────────────────────────────────────────────────────────────
     node patch-figure-catalogue.js              # simulation
     node patch-figure-catalogue.js --execute    # applique
   Options :
     --dossier "chemin/public"   si la localisation automatique échoue
     --garder-enonce             conserve le texte au-dessus de la figure
*/

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const GARDER = ARGS.includes("--garder-enonce");
const iD = ARGS.indexOf("--dossier");
const DOSSIER = iD >= 0 && ARGS[iD + 1] ? ARGS[iD + 1] : null;

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
function unique(nom) {
  if (DOSSIER) { const p = path.join(DOSSIER, nom); return fs.existsSync(p) ? p : null; }
  const t = cherche(process.cwd(), nom);
  if (t.length === 1) return t[0];
  if (t.length > 1) {
    console.error(`✗ Plusieurs ${nom} trouvés — précisez avec --dossier :`);
    t.forEach(f => console.error("   " + f)); process.exit(1);
  }
  return null;
}

const fScript = unique("script.js");
if (!fScript) {
  console.error("✗ script.js introuvable.");
  console.error(`  Lancez depuis le dossier du projet, ou passez --dossier "chemin".`);
  process.exit(1);
}
console.log(`script.js : ${fScript}\n`);
const src = fs.readFileSync(fScript, "utf8");

if (!src.includes("apercuInteractif")) {
  console.error("✗ patch-interactif.js n'a pas été appliqué à ce fichier.");
  console.error("  Lancez-le d'abord : node patch-interactif.js --execute");
  process.exit(1);
}
if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

/* ── on remplace le corps de apercuInteractif ── */
const deb = src.indexOf("function apercuInteractif(ex) {");
if (deb < 0) { console.error("✗ fonction apercuInteractif() introuvable."); process.exit(1); }
/* fin de la fonction : appariement d'accolades, en respectant chaînes et gabarits */
let i = src.indexOf("{", deb), prof = 0, chaine = null, ech = false, fin = -1;
for (; i < src.length; i++) {
  const c = src[i];
  if (ech) { ech = false; continue; }
  if (c === "\\") { ech = true; continue; }
  if (chaine) { if (c === chaine) chaine = null; continue; }
  if (c === '"' || c === "'" || c === "`") { chaine = c; continue; }
  if (c === "{") prof++;
  else if (c === "}") { prof--; if (prof === 0) { fin = i + 1; break; } }
}
if (fin < 0) { console.error("✗ fin de apercuInteractif() introuvable."); process.exit(1); }

const ancien = src.slice(deb, fin);
const dejaFait = ancien.includes("remplaceEnonce");
if (dejaFait) { console.log("· script.js : la figure remplace déjà l'énoncé.\nRien à faire."); process.exit(0); }

const neuf = `function apercuInteractif(ex) {
  const params = litInteractif(ex);
  if (!params) return;
  const contenu = document.getElementById("modal-content");
  if (!contenu) return;

  /* On cherche le bloc « Énoncé » par son intitulé : c'est plus robuste que
     de compter les sections, dont le nombre varie selon les exercices. */
  const remplaceEnonce = ${GARDER ? "false" : "true"};
  let cible = null;
  contenu.querySelectorAll(".modal-section").forEach(sec => {
    const lab = sec.querySelector(".modal-section-label");
    if (lab && lab.textContent.trim().toLowerCase().indexOf("nonc") >= 0) cible = sec;
  });

  const boite = document.createElement("div");
  if (cible && remplaceEnonce) {
    /* la figure PREND LA PLACE du texte : au catalogue, c'est elle qu'on
       vient regarder. L'énoncé reste en base et s'affiche en séance. */
    const lab = cible.querySelector(".modal-section-label");
    if (lab) lab.textContent = "Figure";
    const txt = cible.querySelector(".modal-section-text");
    if (txt) txt.remove();
    cible.appendChild(boite);
  } else {
    const bloc = document.createElement("div");
    bloc.className = "modal-section";
    bloc.innerHTML = '<div class="modal-section-label">Figure</div>';
    bloc.appendChild(boite);
    const secs = contenu.querySelectorAll(".modal-section");
    const apres = cible || secs[secs.length - 1];
    if (apres && apres.parentNode) apres.parentNode.insertBefore(bloc, apres.nextSibling);
    else contenu.appendChild(bloc);
  }
  MB_QUADRILLAGE.installerApercu(params, boite);
}`;

const out = src.slice(0, deb) + neuf + src.slice(fin);

console.log("Modification prévue :");
console.log(`   → script.js : la figure ${GARDER ? "s'ajoute sous" : "remplace"} l'énoncé pour les exercices interactifs`);
try { new vm.Script(out); }
catch (e) { console.error(`\n✗ Résultat invalide : ${e.message}\nAucune modification écrite.`); process.exit(1); }
console.log("\n✔ Le fichier obtenu est syntaxiquement valide.");
console.log(`   script.js : ${src.length} → ${out.length} caractères`);

if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); process.exit(0); }

const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
fs.writeFileSync(`${fScript}.avant-figure-${stamp}`, src, "utf8");
fs.writeFileSync(fScript, out, "utf8");
console.log(`\nscript.js mis à jour (sauvegarde : ${path.basename(fScript)}.avant-figure-${stamp}).`);
console.log("Poussez sur GitHub, puis rechargez la page avec Ctrl+F5.");
