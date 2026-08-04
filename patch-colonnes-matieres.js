/* MathBase — patch-colonnes-matieres.js
   Dispose les MATIÈRES en colonnes côte à côte sur la page Exercices.

   ── LE PROBLÈME ──────────────────────────────────────────────────────────
   Aujourd'hui chaque matière occupe toute la largeur : ses chapitres
   s'étalent en grille puis reviennent à la ligne. GÉOMÉTRIE, avec ses treize
   chapitres, occupe plusieurs rangées à elle seule, si bien que PROBABILITÉS
   et STATISTIQUES se retrouvent tout en bas, hors de l'écran.

   ── LA SOLUTION ──────────────────────────────────────────────────────────
   Les six matières deviennent six COLONNES juxtaposées, chacune empilant ses
   chapitres verticalement. Rien n'est plus relégué en bas : la matière la
   plus fournie donne simplement la colonne la plus longue.

   Les cartes sont rendues plus compactes pour tenir dans une colonne étroite :
   hauteur minimale supprimée, marges réduites, et le libellé « Voir le
   chapitre → » n'apparaît qu'au survol, où il y a la place.

   Le nombre de colonnes s'adapte à la largeur : six au-delà de 1500 px,
   puis quatre, trois, deux, et une seule sur téléphone — où l'empilement
   vertical reste de toute façon le seul lisible.

   Aucune modification de script.js : la structure HTML produite s'y prête
   déjà, seul le style change.

   ── USAGE ────────────────────────────────────────────────────────────────
     node patch-colonnes-matieres.js              # simulation
     node patch-colonnes-matieres.js --execute
   Options :
     --dossier "chemin/public"
     --annuler        retire le bloc et rétablit la disposition d'origine
*/

"use strict";
const fs = require("fs");
const path = require("path");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const ANNULER = ARGS.includes("--annuler");
const iD = ARGS.indexOf("--dossier");
const DOSSIER = iD >= 0 && ARGS[iD + 1] ? ARGS[iD + 1] : null;

const DEBUT = "/* ═══ MATIÈRES EN COLONNES — patch-colonnes-matieres.js ═══ */";
const FIN   = "/* ═══ fin du bloc colonnes ═══ */";

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
let cible = DOSSIER ? path.join(DOSSIER, "style.css") : "style.css";
if (!fs.existsSync(cible)) {
  const t = cherche(process.cwd(), "style.css");
  if (t.length === 1) { cible = t[0]; console.log(`style.css localisé : ${cible}\n`); }
  else if (t.length > 1) {
    console.error("✗ Plusieurs style.css — précisez avec --dossier :");
    t.forEach(f => console.error("   " + f)); process.exit(1);
  } else { console.error(`✗ style.css introuvable sous ${process.cwd()}.`); process.exit(1); }
}

const avant = fs.readFileSync(cible, "utf8");
console.log(`Fichier : ${path.resolve(cible)} (${avant.length} caractères)\n`);
if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

const deja = avant.indexOf(DEBUT) >= 0;

if (ANNULER) {
  if (!deja) { console.log("Le bloc n'est pas présent : rien à annuler."); process.exit(0); }
  const i = avant.indexOf(DEBUT), j = avant.indexOf(FIN) + FIN.length;
  const src = avant.slice(0, i).replace(/\n+$/, "\n") + avant.slice(j).replace(/^\n+/, "\n");
  console.log("Opération : retrait du bloc, retour à la disposition d'origine.");
  console.log(`Taille : ${avant.length} → ${src.length} caractères.`);
  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); process.exit(0); }
  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`${cible}.avant-colonnes-${stamp}`, avant, "utf8");
  fs.writeFileSync(cible, src, "utf8");
  console.log(`\nSauvegarde : ${path.basename(cible)}.avant-colonnes-${stamp}\n${cible} mis à jour.`);
  process.exit(0);
}

if (deja) { console.log("· Le bloc est déjà présent.\nRien à faire."); process.exit(0); }

const BLOC = `

${DEBUT}
/* Les matières se placent côte à côte : chacune empile ses chapitres.
   Plus rien n'est relégué en bas de page, quelle que soit la taille de
   la matière la plus fournie. Le bloc est ajouté en fin de fichier pour
   l'emporter sur les règles d'origine, qu'il n'est pas nécessaire de
   modifier — retirable d'un seul geste avec --annuler. */
#list {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1.4rem;
  align-items: start;
}
.chapx-subject { margin-bottom: 0; min-width: 0; }
.chapx-subject-head {
  font-size: 0.66rem;
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
  padding-bottom: 0.45rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* les chapitres s'empilent dans la colonne de leur matière */
.chapx-row {
  grid-template-columns: minmax(0, 1fr);
  gap: 0.5rem;
}
.chapx-card {
  min-height: 0;
  padding: 0.7rem 0.75rem 0.65rem;
  gap: 0.25rem;
  border-radius: 9px;
}
.chapx-name { font-size: 0.82rem; line-height: 1.25; }
.chapx-count { font-size: 0.7rem; }
/* le libellé d'action prend trop de place dans une colonne étroite :
   on le réserve au survol, où il ne gêne plus la lecture */
.chapx-go {
  font-size: 0.62rem;
  max-height: 0;
  overflow: hidden;
  margin: 0;
  transition: max-height .18s ease, opacity .18s ease;
}
.chapx-card:hover .chapx-go { max-height: 1.4rem; }

@media (max-width: 1500px) { #list { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
@media (max-width: 1180px) { #list { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 860px)  { #list { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 560px)  {
  #list { grid-template-columns: minmax(0, 1fr); gap: 1.8rem; }
  .chapx-card { padding: 1rem 1.1rem; }
  .chapx-name { font-size: 0.9rem; }
  .chapx-go { max-height: 1.4rem; }
}
${FIN}
`;

console.log("Opération : ajout du bloc « matières en colonnes » en fin de style.css.");
console.log("   · 6 colonnes au-delà de 1500 px, puis 4, 3, 2, et 1 sur téléphone");
console.log("   · cartes compactées pour tenir dans une colonne étroite");
console.log("   · aucune modification de script.js ni de app.html");
const src = avant.replace(/\s*$/, "") + BLOC;

/* contrôle sommaire d'équilibre des accolades */
const o = (BLOC.match(/\{/g) || []).length, f = (BLOC.match(/\}/g) || []).length;
if (o !== f) { console.error(`\n✗ Bloc CSS déséquilibré : ${o} accolades ouvrantes, ${f} fermantes.`); process.exit(1); }
const oT = (src.match(/\{/g) || []).length, fT = (src.match(/\}/g) || []).length;
if (oT !== fT) { console.error(`\n✗ Fichier déséquilibré après ajout : ${oT} / ${fT}.`); process.exit(1); }
console.log(`\n✔ Bloc équilibré (${o} règles) · fichier équilibré (${oT} accolades de chaque côté).`);
console.log(`Taille : ${avant.length} → ${src.length} caractères.`);

if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); process.exit(0); }
const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
fs.writeFileSync(`${cible}.avant-colonnes-${stamp}`, avant, "utf8");
fs.writeFileSync(cible, src, "utf8");
console.log(`\nSauvegarde : ${path.basename(cible)}.avant-colonnes-${stamp}`);
console.log(`${cible} mis à jour.`);
console.log(`\nRechargez la page avec Ctrl+F5. Pour revenir en arrière :`);
console.log(`   node patch-colonnes-matieres.js --annuler --execute`);
