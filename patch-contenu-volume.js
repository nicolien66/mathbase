/* MathBase — patch-contenu-volume.js
   Renomme le chapitre « Géométrie dans l'espace » en « Volumes » dans
   contenu.js : la liste CHAPTER_STRUCTURE et la clé de l'entrée de cours.

   Le rattachement d'un chapitre à un domaine et son intitulé vivent dans ce
   fichier, pas en base. Le renommage côté exercices est fait séparément par
   generer-volumes.js.

   Sauvegarde horodatée avant écriture, contrôle de syntaxe, idempotent.

   ── USAGE ────────────────────────────────────────────────────────────────
     node patch-contenu-volume.js              # simulation
     node patch-contenu-volume.js --execute    # applique
   Options :
     --fichier "chemin\\contenu.js"   si la localisation automatique échoue
     --nom "Volume"                   pour un autre intitulé (défaut « Volumes »)
*/

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const iF = ARGS.indexOf("--fichier");
const iN = ARGS.indexOf("--nom");
const DEMANDE = iF >= 0 && ARGS[iF + 1] ? ARGS[iF + 1] : "contenu.js";
const NOUVEAU = iN >= 0 && ARGS[iN + 1] ? ARGS[iN + 1] : "Volumes";
const ANCIEN = "Géométrie dans l'espace";

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
let cible = DEMANDE;
if (!fs.existsSync(cible)) {
  const t = cherche(process.cwd(), "contenu.js");
  if (t.length === 1) { cible = t[0]; console.log(`contenu.js localisé : ${cible}\n`); }
  else if (t.length > 1) {
    console.error("✗ Plusieurs contenu.js — précisez avec --fichier :");
    t.forEach(f => console.error("   " + f)); process.exit(1);
  } else { console.error(`✗ contenu.js introuvable sous ${process.cwd()}.`); process.exit(1); }
}

const avant = fs.readFileSync(cible, "utf8");
console.log(`Fichier : ${path.resolve(cible)} (${avant.length} caractères)\n`);
if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

if (avant.includes(`"${NOUVEAU}"`) && !avant.includes(`"${ANCIEN}"`)) {
  console.log(`· Le chapitre s'appelle déjà « ${NOUVEAU} ».\nRien à faire.`);
  process.exit(0);
}
if (!avant.includes(`"${ANCIEN}"`)) {
  console.error(`✗ « ${ANCIEN} » introuvable dans ce fichier.`);
  process.exit(1);
}

/* Deux occurrences seulement : la clé de l'entrée de cours et la ligne de
   CHAPTER_STRUCTURE. On les remplace toutes, la chaîne est sans ambiguïté. */
const src = avant.split(`"${ANCIEN}"`).join(`"${NOUVEAU}"`);
const n = avant.split(`"${ANCIEN}"`).length - 1;
console.log(`Occurrences remplacées : ${n}`);

let S = null;
try { const box = { window: undefined }; vm.createContext(box);
  new vm.Script(src + "\n;__S = typeof CHAPTER_STRUCTURE !== 'undefined' ? CHAPTER_STRUCTURE : null;")
    .runInContext(box);
  S = box.__S;
} catch (e) { console.error(`\n✗ Résultat invalide : ${e.message}\nAucune modification écrite.`); process.exit(1); }
console.log("✔ Le fichier obtenu est syntaxiquement valide.");
if (S) {
  const g = S.find(d => d.subject === "GÉOMÉTRIE");
  console.log(`   GÉOMÉTRIE contient « ${NOUVEAU} » : ${g.chapters.includes(NOUVEAU) ? "oui" : "NON"}`);
  console.log(`   GÉOMÉTRIE contient « ${ANCIEN} » : ${g.chapters.includes(ANCIEN) ? "OUI (problème)" : "non"}`);
  console.log(`   Chapitres de GÉOMÉTRIE : ${g.chapters.length}`);
}
console.log(`\nTaille : ${avant.length} → ${src.length} caractères.`);
if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); process.exit(0); }

const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
fs.writeFileSync(`${cible}.avant-volume-${stamp}`, avant, "utf8");
fs.writeFileSync(cible, src, "utf8");
console.log(`\nSauvegarde : ${path.basename(cible)}.avant-volume-${stamp}`);
console.log(`${cible} mis à jour.`);
console.log(`\nLancez ensuite generer-volumes.js pour renommer le chapitre côté base.`);
