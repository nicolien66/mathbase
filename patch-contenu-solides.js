/* MathBase — patch-contenu-solides.js
   Fusionne « Prisme droit et cylindre » et « Pyramides et cônes » en un
   chapitre « Solides » dans contenu.js : la liste CHAPTER_STRUCTURE et les
   deux entrées de cours.

   La première entrée est renommée et conservée (sa leçon couvre déjà prismes
   et cylindres) ; la seconde est supprimée pour éviter le doublon. Son
   contenu n'est pas perdu : il reste dans la sauvegarde horodatée.

   Usage :
     node patch-contenu-solides.js              # simulation
     node patch-contenu-solides.js --execute
   Options : --fichier "chemin\contenu.js" · --nom "Solides"
*/
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const gv = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] && !ARGS[i + 1].startsWith("--") ? ARGS[i + 1] : d; };
const NOUVEAU = gv("--nom", "Solides");
const GARDE = "Prisme droit et cylindre";
const RETIRE = "Pyramides et cônes";

function cherche(r, c, p = 0) { if (p > 4) return [];
  let o = [], e; try { e = fs.readdirSync(r, { withFileTypes: true }); } catch (x) { return []; }
  for (const t of e) { if (t.name === "node_modules" || t.name.startsWith(".")) continue;
    const q = path.join(r, t.name);
    if (t.isFile() && t.name === c) o.push(q); else if (t.isDirectory()) o = o.concat(cherche(q, c, p + 1)); }
  return o; }
let cible = gv("--fichier", "contenu.js");
if (!fs.existsSync(cible)) { const t = cherche(process.cwd(), "contenu.js");
  if (t.length === 1) { cible = t[0]; console.log(`contenu.js localisé : ${cible}\n`); }
  else if (t.length > 1) { console.error("✗ Plusieurs contenu.js — précisez avec --fichier :");
    t.forEach(f => console.error("   " + f)); process.exit(1); }
  else { console.error(`✗ contenu.js introuvable sous ${process.cwd()}.`); process.exit(1); } }

const avant = fs.readFileSync(cible, "utf8");
console.log(`Fichier : ${path.resolve(cible)} (${avant.length} caractères)\n`);
if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");
if (avant.includes(`"${NOUVEAU}"`) && !avant.includes(`"${GARDE}"`)) {
  console.log(`· Le chapitre « ${NOUVEAU} » existe déjà.\nRien à faire.`); process.exit(0); }

let src = avant, etapes = [];
/* 1. renommer le chapitre conservé */
if (src.includes(`"${GARDE}"`)) {
  src = src.split(`"${GARDE}"`).join(`"${NOUVEAU}"`);
  etapes.push(`« ${GARDE} » renommé en « ${NOUVEAU} »`);
}
/* 2. supprimer son entrée de cours, par appariement d'accolades.
   Cet ordre est impératif : effacer d'abord la ligne de CHAPTER_STRUCTURE
   ferait disparaître la CLÉ de l'entrée et laisserait un « : { » orphelin. */
function supprime(t, nom) {
  const marque = `"${nom}": {`, i = t.indexOf(marque);
  if (i < 0) return { t, ok: false };
  let j = i + marque.length - 1, prof = 0, ch = null, ech = false;
  for (; j < t.length; j++) { const c = t[j];
    if (ech) { ech = false; continue; }
    if (c === "\\") { ech = true; continue; }
    if (ch) { if (c === ch) ch = null; continue; }
    if (c === '"' || c === "'" || c === "`") { ch = c; continue; }
    if (c === "{") prof++; else if (c === "}") { prof--; if (prof === 0) break; } }
  if (prof !== 0) return { t, ok: false };
  let fin = j + 1; while (fin < t.length && /[\s,]/.test(t[fin])) fin++;
  let deb = i; while (deb > 0 && /[ \t]/.test(t[deb - 1])) deb--;
  return { t: t.slice(0, deb) + t.slice(fin), ok: true, n: fin - deb }; }
const r = supprime(src, RETIRE);
if (r.ok) { src = r.t; etapes.push(`entrée de cours « ${RETIRE} » supprimée (${r.n} caractères)`); }

/* 3. retirer le chapitre de la liste : on exige une virgule ou un crochet
   fermant après le libellé, pour ne viser que la liste et rien d'autre. */
const ligne = new RegExp(`\\n\\s*"${RETIRE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s*(,|(?=\\s*\\]))`);
if (ligne.test(src)) { src = src.replace(ligne, ""); etapes.push(`« ${RETIRE} » retiré de la liste des chapitres`); }

if (!etapes.length) { console.log("Rien à faire."); process.exit(0); }
console.log("Opérations :"); etapes.forEach(e => console.log("   → " + e));
let S = null;
try { const box = { window: undefined }; vm.createContext(box);
  new vm.Script(src + "\n;__S = typeof CHAPTER_STRUCTURE !== 'undefined' ? CHAPTER_STRUCTURE : null;").runInContext(box);
  S = box.__S; }
catch (e) { console.error(`\n✗ Résultat invalide : ${e.message}\nAucune modification écrite.`); process.exit(1); }
console.log("\n✔ Le fichier obtenu est syntaxiquement valide.");
if (S) { const g = S.find(d => d.subject === "GÉOMÉTRIE");
  console.log(`   GÉOMÉTRIE contient « ${NOUVEAU} » : ${g.chapters.includes(NOUVEAU) ? "oui" : "NON"}`);
  console.log(`   « ${GARDE} » : ${g.chapters.includes(GARDE) ? "OUI (problème)" : "retiré"}`);
  console.log(`   « ${RETIRE} » : ${g.chapters.includes(RETIRE) ? "OUI (problème)" : "retiré"}`);
  console.log(`   Chapitres de GÉOMÉTRIE : ${g.chapters.length}`); }
console.log(`\nTaille : ${avant.length} → ${src.length} caractères.`);
if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); process.exit(0); }
const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
fs.writeFileSync(`${cible}.avant-solides-${stamp}`, avant, "utf8");
fs.writeFileSync(cible, src, "utf8");
console.log(`\nSauvegarde : ${path.basename(cible)}.avant-solides-${stamp}`);
console.log(`${cible} mis à jour.`);
