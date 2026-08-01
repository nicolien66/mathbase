/* MathBase — patch-contenu.js
   Modifie contenu.js : le rattachement d'un chapitre à un domaine n'est pas
   en base, il vit dans la constante CHAPTER_STRUCTURE de ce fichier.

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. Déplace le chapitre « Aires » du domaine NOMBRES vers GÉOMÉTRIE.
      Il prend la place de « Périmètres et aires » dans la liste, ce qui le
      situe naturellement parmi les chapitres de mesure.
   2. Retire « Périmètres et aires » de GÉOMÉTRIE.
   3. Supprime l'entrée de cours « Périmètres et aires » (leçon, tutoriel,
      exercices témoins) par appariement des accolades, en respectant les
      chaînes de caractères et les échappements.

   Le fichier n'est PAS modifié tant que --execute n'est pas passé, et une
   sauvegarde horodatée est écrite avant toute écriture.

   ── USAGE ────────────────────────────────────────────────────────────────
     node patch-contenu.js                    # simulation, affiche le diff
     node patch-contenu.js --execute          # applique (+ sauvegarde)
   Option : --fichier chemin/contenu.js       (défaut : ./contenu.js)
*/

"use strict";
const fs = require("fs");
const path = require("path");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const iF = ARGS.indexOf("--fichier");
const FICHIER = iF >= 0 && ARGS[iF + 1] ? ARGS[iF + 1] : "contenu.js";

/* contenu.js n'est pas forcément à la racine : on le cherche dans
   l'arborescence courante plutôt que d'abandonner. */
function cherche(racine, cible, prof = 0) {
  if (prof > 4) return [];
  let out = [];
  let entrees; try { entrees = fs.readdirSync(racine, { withFileTypes: true }); } catch (e) { return []; }
  for (const e of entrees) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    const p = path.join(racine, e.name);
    if (e.isFile() && e.name === cible) out.push(p);
    else if (e.isDirectory()) out = out.concat(cherche(p, cible, prof + 1));
  }
  return out;
}
let cible = FICHIER;
if (!fs.existsSync(cible)) {
  const trouves = cherche(process.cwd(), "contenu.js");
  if (trouves.length === 1) {
    cible = trouves[0];
    console.log(`contenu.js localisé : ${cible}\n`);
  } else if (trouves.length > 1) {
    console.error(`✗ Plusieurs contenu.js trouvés — précisez lequel avec --fichier :`);
    trouves.forEach(f => console.error(`   ${f}`));
    process.exit(1);
  } else {
    console.error(`✗ Fichier introuvable : ${path.resolve(FICHIER)}`);
    console.error(`  Aucun contenu.js sous ${process.cwd()} (4 niveaux explorés).`);
    console.error(`  Passez le chemin : node patch-contenu.js --fichier "chemin\\vers\\contenu.js"`);
    process.exit(1);
  }
}
let src = fs.readFileSync(cible, "utf8");
const avant = src;
console.log(`Fichier : ${path.resolve(cible)} (${src.length} caractères)\n`);
if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

/* ── repérage d'un bloc « subject » dans CHAPTER_STRUCTURE ── */
function blocDomaine(texte, nom) {
  const i = texte.indexOf(`"subject": "${nom}"`);
  if (i < 0) return null;
  const deb = texte.indexOf(`"chapters": [`, i);
  const fin = texte.indexOf("]", deb);
  if (deb < 0 || fin < 0) return null;
  return { deb, fin, corps: texte.slice(deb, fin) };
}

/* ── 1 & 2. déplacement dans CHAPTER_STRUCTURE ── */
const geo = blocDomaine(src, "GÉOMÉTRIE");
const nom = blocDomaine(src, "NOMBRES");
if (!geo || !nom) { console.error("✗ Blocs NOMBRES ou GÉOMÉTRIE introuvables."); process.exit(1); }

let etapes = [];
if (!geo.corps.includes('"Périmètres et aires"')) {
  console.log("· « Périmètres et aires » absent de GÉOMÉTRIE (déjà retiré ?).");
} else {
  /* on remplace sur place : « Périmètres et aires » cède sa ligne à « Aires » */
  const nouveauGeo = geo.corps.replace(/(\s*)"Périmètres et aires",?/,
    (m, blancs) => geo.corps.includes('"Aires"') ? "" : `${blancs}"Aires",`);
  src = src.slice(0, geo.deb) + nouveauGeo + src.slice(geo.fin);
  etapes.push(geo.corps.includes('"Aires"')
    ? "« Périmètres et aires » retiré de GÉOMÉTRIE"
    : "« Périmètres et aires » remplacé par « Aires » dans GÉOMÉTRIE");
}

const nom2 = blocDomaine(src, "NOMBRES");
if (nom2 && nom2.corps.includes('"Aires"')) {
  const nouveauNom = nom2.corps.replace(/(\s*)"Aires",?/, "");
  src = src.slice(0, nom2.deb) + nouveauNom + src.slice(nom2.fin);
  etapes.push("« Aires » retiré de NOMBRES");
} else {
  console.log("· « Aires » absent de NOMBRES (déjà déplacé ?).");
}

/* ── 3. suppression de l'entrée de cours, par appariement d'accolades ── */
function supprimeEntree(texte, nomEntree) {
  const marque = `"${nomEntree}": {`;
  const i = texte.indexOf(marque);
  if (i < 0) return { texte, ok: false };
  let j = i + marque.length - 1, prof = 0, chaine = null, ech = false;
  for (; j < texte.length; j++) {
    const c = texte[j];
    if (ech) { ech = false; continue; }
    if (c === "\\") { ech = true; continue; }
    if (chaine) { if (c === chaine) chaine = null; continue; }
    if (c === '"' || c === "'" || c === "`") { chaine = c; continue; }
    if (c === "{") prof++;
    else if (c === "}") { prof--; if (prof === 0) break; }
  }
  if (prof !== 0) return { texte, ok: false };
  let fin = j + 1;
  while (fin < texte.length && /[\s,]/.test(texte[fin])) fin++;   // virgule et blancs
  let deb = i;
  while (deb > 0 && /[ \t]/.test(texte[deb - 1])) deb--;
  return { texte: texte.slice(0, deb) + texte.slice(fin), ok: true, taille: fin - deb };
}
const r = supprimeEntree(src, "Périmètres et aires");
if (r.ok) { src = r.texte; etapes.push(`entrée de cours « Périmètres et aires » supprimée (${r.taille} caractères)`); }
else console.log("· Entrée de cours « Périmètres et aires » introuvable (déjà supprimée ?).");

/* ── contrôle de syntaxe avant écriture ── */
console.log("Opérations :");
etapes.forEach(e => console.log("   → " + e));
if (!etapes.length) { console.log("   (aucune : le fichier est déjà à jour)"); process.exit(0); }

let vm;
try { vm = require("vm"); new vm.Script(src); }
catch (e) { console.error(`\n✗ Le résultat n'est pas du JavaScript valide : ${e.message}`);
            console.error("  Aucune modification n'a été écrite."); process.exit(1); }
console.log("\n✔ Le fichier obtenu est syntaxiquement valide.");

/* vérification sémantique : on exécute et on relit la structure */
try {
  const sandbox = { window: undefined };
  vm.createContext(sandbox);
  new vm.Script(src + "\n;__S = typeof CHAPTER_STRUCTURE !== 'undefined' ? CHAPTER_STRUCTURE : null;").runInContext(sandbox);
  const S = sandbox.__S;
  if (S) {
    const g = S.find(d => d.subject === "GÉOMÉTRIE"), n = S.find(d => d.subject === "NOMBRES");
    console.log(`   GÉOMÉTRIE contient « Aires » : ${g.chapters.includes("Aires") ? "oui" : "NON"}`);
    console.log(`   GÉOMÉTRIE contient « Périmètres et aires » : ${g.chapters.includes("Périmètres et aires") ? "OUI (problème)" : "non"}`);
    console.log(`   NOMBRES contient « Aires » : ${n.chapters.includes("Aires") ? "OUI (problème)" : "non"}`);
    console.log(`   Chapitres : NOMBRES ${n.chapters.length} · GÉOMÉTRIE ${g.chapters.length}`);
  }
} catch (e) { console.log(`   (contrôle sémantique impossible : ${e.message})`); }

console.log(`\nTaille : ${avant.length} → ${src.length} caractères.`);
if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); process.exit(0); }

const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
const sauve = `${cible}.avant-patch-${stamp}`;
fs.writeFileSync(sauve, avant, "utf8");
fs.writeFileSync(cible, src, "utf8");
console.log(`\nSauvegarde : ${sauve}`);
console.log(`${cible} mis à jour.`);
