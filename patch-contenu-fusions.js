/* MathBase — patch-contenu-fusions.js
   Deux fusions dans contenu.js :
       « Aires »  + « Figures »  →  « Aires et figures »
       « Volumes » + « Solides » →  « Volumes et solides »

   Pour chacune : le chapitre PRINCIPAL est renommé et conserve sa leçon, le
   chapitre ABSORBÉ disparaît de la liste et son entrée de cours est retirée.

   ⚠ La leçon du chapitre absorbé n'est plus affichée. Elle n'est pas perdue
   pour autant : la sauvegarde horodatée écrite avant toute modification la
   contient intégralement, et vous pouvez en recopier les passages utiles dans
   la leçon conservée. Le script signale la taille de ce qui est retiré.

   L'ordre des opérations est impératif : on supprime d'abord les ENTRÉES de
   cours par appariement d'accolades, ensuite les lignes de CHAPTER_STRUCTURE,
   et seulement à la fin on renomme. Dans l'autre sens, la suppression de la
   ligne effacerait la CLÉ de l'entrée et laisserait un « : { » orphelin.

   ── USAGE ────────────────────────────────────────────────────────────────
     node patch-contenu-fusions.js              # simulation
     node patch-contenu-fusions.js --execute    # applique
   Option : --fichier "chemin\\contenu.js"
*/

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const iF = ARGS.indexOf("--fichier");

/* principal (conservé et renommé) · absorbé (retiré) · nouveau nom */
const FUSIONS = [
  { principal: "Aires",   absorbe: "Figures", nouveau: "Aires et figures" },
  { principal: "Volumes", absorbe: "Solides", nouveau: "Volumes et solides" },
];

function cherche(r, c, p = 0) {
  if (p > 4) return [];
  let o = [], e;
  try { e = fs.readdirSync(r, { withFileTypes: true }); } catch (x) { return []; }
  for (const t of e) {
    if (t.name === "node_modules" || t.name.startsWith(".")) continue;
    const q = path.join(r, t.name);
    if (t.isFile() && t.name === c) o.push(q);
    else if (t.isDirectory()) o = o.concat(cherche(q, c, p + 1));
  }
  return o;
}
let cible = iF >= 0 && ARGS[iF + 1] ? ARGS[iF + 1] : "contenu.js";
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

/* suppression d'une entrée de cours, par appariement d'accolades */
function supprimeEntree(t, nom) {
  const marque = `"${nom}": {`, i = t.indexOf(marque);
  if (i < 0) return { t, ok: false };
  let j = i + marque.length - 1, prof = 0, ch = null, ech = false;
  for (; j < t.length; j++) {
    const c = t[j];
    if (ech) { ech = false; continue; }
    if (c === "\\") { ech = true; continue; }
    if (ch) { if (c === ch) ch = null; continue; }
    if (c === '"' || c === "'" || c === "`") { ch = c; continue; }
    if (c === "{") prof++;
    else if (c === "}") { prof--; if (prof === 0) break; }
  }
  if (prof !== 0) return { t, ok: false };
  let fin = j + 1; while (fin < t.length && /[\s,]/.test(t[fin])) fin++;
  let deb = i; while (deb > 0 && /[ \t]/.test(t[deb - 1])) deb--;
  return { t: t.slice(0, deb) + t.slice(fin), ok: true, n: fin - deb };
}
const echap = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

let src = avant;
const etapes = [];
let rienAFaire = 0;

for (const f of FUSIONS) {
  if (src.includes(`"${f.nouveau}"`)) { console.log(`· « ${f.nouveau} » existe déjà.`); rienAFaire++; continue; }
  if (!src.includes(`"${f.principal}"`)) {
    console.log(`⚠ « ${f.principal} » introuvable — fusion ignorée.`); rienAFaire++; continue;
  }
  /* 1. entrée de cours du chapitre absorbé */
  const r = supprimeEntree(src, f.absorbe);
  if (r.ok) { src = r.t; etapes.push(`leçon de « ${f.absorbe} » retirée (${r.n} caractères — voir la sauvegarde)`); }
  /* 2. ligne du sommaire */
  const ligne = new RegExp(`\\n\\s*"${echap(f.absorbe)}"\\s*(,|(?=\\s*\\]))`);
  if (ligne.test(src)) { src = src.replace(ligne, ""); etapes.push(`« ${f.absorbe} » retiré du sommaire`); }
  /* 3. renommage du chapitre principal */
  const n = src.split(`"${f.principal}"`).length - 1;
  src = src.split(`"${f.principal}"`).join(`"${f.nouveau}"`);
  etapes.push(`« ${f.principal} » renommé en « ${f.nouveau} » (${n} occurrence${n > 1 ? "s" : ""})`);
}

if (!etapes.length) { console.log("\nRien à faire : les fusions sont déjà effectuées."); process.exit(0); }
console.log("Opérations :");
etapes.forEach(e => console.log("   → " + e));

let S = null;
try {
  const box = { window: undefined }; vm.createContext(box);
  new vm.Script(src + "\n;__S = typeof CHAPTER_STRUCTURE !== 'undefined' ? CHAPTER_STRUCTURE : null;").runInContext(box);
  S = box.__S;
} catch (e) {
  console.error(`\n✗ Résultat invalide : ${e.message}\nAucune modification écrite.`); process.exit(1);
}
console.log("\n✔ Le fichier obtenu est syntaxiquement valide.");
if (S) {
  const g = S.find(d => d.subject === "GÉOMÉTRIE");
  const n = S.find(d => d.subject === "NOMBRES");
  FUSIONS.forEach(f => {
    const ou = [g, n].find(d => d && d.chapters.includes(f.nouveau));
    console.log(`   « ${f.nouveau} » : ${ou ? "présent dans " + ou.subject : "ABSENT"}`);
    [g, n].forEach(d => { if (d && d.chapters.includes(f.absorbe)) console.log(`   ⚠ « ${f.absorbe} » encore dans ${d.subject}`); });
  });
  console.log(`   Chapitres : GÉOMÉTRIE ${g.chapters.length} · NOMBRES ${n.chapters.length}`);
  console.log(`   ${g.chapters.join(" | ")}`);
}
console.log(`\nTaille : ${avant.length} → ${src.length} caractères.`);
if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); process.exit(0); }

const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
fs.writeFileSync(`${cible}.avant-fusions-${stamp}`, avant, "utf8");
fs.writeFileSync(cible, src, "utf8");
console.log(`\nSauvegarde : ${path.basename(cible)}.avant-fusions-${stamp}`);
console.log(`${cible} mis à jour.`);
console.log(`\nLancez ensuite fusionner-chapitres.js pour la partie base de données.`);
