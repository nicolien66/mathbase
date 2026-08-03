/* MathBase — generer-symetrie-centrale.js
   Chapitre « Symétrie centrale » : refonte complète.

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. SUPPRIME toutes les familles existantes du chapitre.
   2. Crée « Cours » : 30 questions sur le centre de symétrie, le demi-tour,
      les propriétés conservées et la distinction d'avec la symétrie axiale.
   3. Crée « Construction des symétries » : 200 figures à compléter dans
      l'espace quadrillage — coloriages et tracés.

   ── LA DIFFÉRENCE AVEC LA SYMÉTRIE AXIALE ────────────────────────────────
   Le repère n'est plus une droite mais un POINT. Le centre O est le milieu du
   segment joignant un point et son image :
        nœud  (x, y) ↦ (2a − x, 2b − y)
        case  (x, y) ↦ (2a − x − 1, 2b − y − 1)
   Le « −1 » porte cette fois sur les DEUX coordonnées, alors qu'en symétrie
   axiale il ne touchait que l'axe perpendiculaire. Les formules ont été
   vérifiées sur le milieu avant d'être codées.

   Conséquence pédagogique : la symétrie centrale est un demi-tour, elle
   conserve l'orientation, contrairement à la symétrie axiale. Une figure et
   son image « pointent » dans des directions opposées.

   ── PRÉREQUIS ────────────────────────────────────────────────────────────
   quadrillage.js dans public/ (version affichant le centre) et l'application
   branchée par patch-interactif.js.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node generer-symetrie-centrale.js --apercu
     node generer-symetrie-centrale.js
     node generer-symetrie-centrale.js --execute
   Options : --figures N (200) · --graine N (20260808) · --garder-familles
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU = ARGS.includes("--apercu");
const GARDER = ARGS.includes("--garder-familles");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const FIGURES = opt("--figures", 200);
const GRAINE = opt("--graine", 20260808);

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];

const cleC = c => c[0] + "," + c[1];
const cleS = s => { const a = s[0], b = s[1];
  return (a[0] < b[0] || (a[0] === b[0] && a[1] <= b[1]))
    ? `${a[0]},${a[1]}|${b[0]},${b[1]}` : `${b[0]},${b[1]}|${a[0]},${a[1]}`; };

/* ═══ SYMÉTRIE CENTRALE ═══ O est le milieu de [M M'] */
const symNode = (n, C) => [2 * C.x - n[0], 2 * C.y - n[1]];
const symCase = (c, C) => [2 * C.x - c[0] - 1, 2 * C.y - c[1] - 1];

const COLS = 12, ROWS = 10;
/* La figure de départ occupe le demi-plan situé à gauche du centre : son
   image tombe alors entièrement à droite, et les deux ne se chevauchent pas. */
const dansCases = (c, C) => c[0] >= 0 && c[0] < C.x && c[1] >= 0 && c[1] < ROWS;
const dansNodes = (n, C) => n[0] >= 0 && n[0] <= C.x && n[1] >= 0 && n[1] <= ROWS;

/* ═══ FORMES EN CASES ═══ */
function formeCases(C, ampleur) {
  const G = ampleur === "grande";
  const type = pick(G ? ["rect", "escalier", "creux", "chemin", "diagonale"]
                      : ["rect", "escalier", "L", "T", "diagonale", "chemin", "creux"]);
  const out = new Set(), poser = c => { if (dansCases(c, C)) out.add(cleC(c)); };
  const x0 = ri(0, Math.max(0, C.x - 5)), y0 = ri(0, Math.max(0, ROWS - 5));

  if (type === "rect") { const w = ri(G ? 3 : 2, G ? 5 : 4), h = ri(G ? 3 : 2, G ? 5 : 4);
    for (let i = 0; i < w; i++) for (let j = 0; j < h; j++) poser([x0 + i, y0 + j]); }
  else if (type === "escalier") { const n = ri(G ? 4 : 3, G ? 5 : 4);
    for (let k = 0; k < n; k++) for (let j = 0; j <= k; j++) poser([x0 + k, y0 + j]); }
  else if (type === "L") { const a = ri(3, 4), b = ri(2, 3);
    for (let j = 0; j < a; j++) poser([x0, y0 + j]);
    for (let i = 1; i < b; i++) poser([x0 + i, y0 + a - 1]); }
  else if (type === "T") { const w = ri(3, 4);
    for (let i = 0; i < w; i++) poser([x0 + i, y0]);
    for (let j = 1; j < ri(2, 3); j++) poser([x0 + (w >> 1), y0 + j]); }
  else if (type === "diagonale") { const n = ri(3, 5);
    for (let k = 0; k < n; k++) { poser([x0 + k, y0 + k]); if (alea() > .5) poser([x0 + k, y0 + k + 1]); } }
  else if (type === "creux") { const w = ri(G ? 4 : 3, G ? 5 : 4), h = ri(G ? 4 : 3, G ? 5 : 4);
    for (let i = 0; i < w; i++) for (let j = 0; j < h; j++)
      if (i === 0 || j === 0 || i === w - 1 || j === h - 1) poser([x0 + i, y0 + j]); }
  else { let c = [x0, y0];
    for (let k = 0; k < ri(G ? 9 : 5, G ? 14 : 8); k++) { poser(c);
      const d = pick([[1, 0], [0, 1], [1, 1], [0, -1], [1, -1]]);
      c = [c[0] + d[0], c[1] + d[1]]; } }

  const cases = [...out].map(k => k.split(",").map(Number));
  return cases.length >= 4 ? cases : null;
}

/* ═══ FORMES EN SEGMENTS ═══ */
function formeSegments(C, ampleur) {
  const G = ampleur === "grande";
  const type = pick(G ? ["brisee", "zigzag", "maison", "quadri", "etoile"]
                      : ["brisee", "triangle", "quadri", "zigzag", "fleche", "maison", "etoile"]);
  const segs = [], pts = [];
  const x0 = ri(0, Math.max(0, C.x - 5)), y0 = ri(0, Math.max(0, ROWS - 5));
  const ok = p => dansNodes(p, C);
  const relier = liste => { for (let i = 0; i < liste.length - 1; i++) {
    if (!ok(liste[i]) || !ok(liste[i + 1])) return false;
    if (cleC(liste[i]) === cleC(liste[i + 1])) return false;
    segs.push([liste[i], liste[i + 1]]); } return true; };

  if (type === "triangle") { const w = ri(2, 4), h = ri(2, 4);
    pts.push([x0, y0], [x0 + w, y0], [x0 + ri(0, w), y0 + h], [x0, y0]); }
  else if (type === "quadri") { const w = ri(2, 4), h = ri(2, 3);
    pts.push([x0, y0], [x0 + w, y0], [x0 + w - ri(0, 1), y0 + h], [x0 + ri(0, 1), y0 + h], [x0, y0]); }
  else if (type === "maison") { const w = ri(2, 3), h = ri(2, 3);
    pts.push([x0, y0 + h], [x0, y0 + 1], [x0 + Math.ceil(w / 2), y0],
             [x0 + w, y0 + 1], [x0 + w, y0 + h], [x0, y0 + h]); }
  else if (type === "zigzag") { let p = [x0, y0]; pts.push(p);
    for (let k = 0; k < ri(G ? 5 : 3, G ? 7 : 5); k++) {
      p = [p[0] + ri(1, 2), p[1] + (k % 2 ? -ri(1, 2) : ri(1, 2))]; pts.push(p); } }
  else if (type === "fleche") { const w = ri(2, 3);
    pts.push([x0, y0 + 1], [x0 + w, y0 + 1], [x0 + w - 1, y0], [x0 + w, y0 + 1], [x0 + w - 1, y0 + 2]); }
  else if (type === "etoile") { const w = ri(2, 3);
    pts.push([x0, y0], [x0 + w, y0 + w], [x0, y0 + w], [x0 + w, y0], [x0, y0]); }
  else { let p = [x0, y0]; pts.push(p);
    for (let k = 0; k < ri(G ? 5 : 3, G ? 8 : 5); k++) {
      const d = pick([[1, 1], [1, -1], [2, 0], [0, 2], [1, 2], [2, 1]]);
      p = [p[0] + d[0], p[1] + (alea() > .5 ? d[1] : -d[1])]; pts.push(p); } }

  if (!relier(pts)) return null;
  const uniq = new Map(); segs.forEach(s => uniq.set(cleS(s), s));
  const liste = [...uniq.values()];
  return liste.length >= 3 ? liste : null;
}

/* ═══ UNE FIGURE ═══
   Le centre est un NŒUD du quadrillage : les images de cases retombent alors
   exactement sur des cases. */
const CENTRES = [{ x: 6, y: 5 }, { x: 6, y: 4 }, { x: 5, y: 5 }, { x: 7, y: 5 }, { x: 6, y: 6 }];
function figure(geste, ampleur) {
  for (let essai = 0; essai < 120; essai++) {
    const c0 = pick(CENTRES), C = { type: "c", x: c0.x, y: c0.y, nom: "O" };
    if (geste === "cases") {
      const f = formeCases(C, ampleur); if (!f) continue;
      const rep = f.map(x => symCase(x, C));
      if (rep.some(p => p[0] < 0 || p[0] >= COLS || p[1] < 0 || p[1] >= ROWS)) continue;
      if (new Set(rep.map(cleC)).size !== rep.length) continue;
      return { C, fixe: { cases: f, segments: [] }, reponse: { cases: rep, segments: [] } };
    } else {
      const s = formeSegments(C, ampleur); if (!s) continue;
      const rep = s.map(x => [symNode(x[0], C), symNode(x[1], C)]);
      if (rep.some(g => g.some(p => p[0] < 0 || p[0] > COLS || p[1] < 0 || p[1] > ROWS))) continue;
      if (new Set(rep.map(cleS)).size !== rep.length) continue;
      return { C, fixe: { cases: [], segments: s }, reponse: { cases: [], segments: rep } };
    }
  }
  return null;
}
const empreinte = f => `${f.C.x},${f.C.y}#` +
  f.fixe.cases.map(cleC).sort().join(";") + "#" + f.fixe.segments.map(cleS).sort().join(";");

/* Répartition 20 / 30 / 50, avec une échelle propre à chaque geste : reporter
   6 segments demande bien plus de travail que colorier 6 cases. */
const REPART = { Facile: 0.20, Moyen: 0.30, Difficile: 0.50 };
const DIFF = (n, geste) => geste === "segments"
  ? (n <= 3 ? "Facile" : n <= 5 ? "Moyen" : "Difficile")
  : (n <= 5 ? "Facile" : n <= 8 ? "Moyen" : "Difficile");

function genererFigures(n) {
  const quota = { Facile: Math.round(n * REPART.Facile), Moyen: Math.round(n * REPART.Moyen) };
  quota.Difficile = n - quota.Facile - quota.Moyen;
  const vues = new Set(), vivier = { Facile: [], Moyen: [], Difficile: [] };
  const viser = { Facile: "petite", Moyen: "petite", Difficile: "grande" };
  const objectif = d => quota[d] * 3;
  let essais = 0;
  while (essais < n * 900) {
    essais++;
    const manquants = ["Difficile", "Moyen", "Facile"].filter(d => vivier[d].length < objectif(d));
    if (!manquants.length) break;
    const visee = manquants[essais % manquants.length];
    const geste = essais % 2 === 0 ? "cases" : "segments";
    const f = figure(geste, viser[visee]); if (!f) continue;
    const e = empreinte(f); if (vues.has(e)) continue;
    vues.add(e);
    const taille = geste === "cases" ? f.fixe.cases.length : f.fixe.segments.length;
    vivier[DIFF(taille, geste)].push({ f, geste, taille });
  }

  const choisis = [];
  const prendre = (d, k) => {
    const dispo = vivier[d];
    const cases = dispo.filter(x => x.geste === "cases");
    const segs = dispo.filter(x => x.geste === "segments");
    for (let i = 0; i < k; i++) {
      const pref = i % 2 === 0 ? cases : segs;
      const src = pref.length ? pref : (cases.length ? cases : segs);
      if (!src.length) break;
      choisis.push(Object.assign(src.shift(), { d }));
    }
  };
  ["Difficile", "Moyen", "Facile"].forEach(d => prendre(d, quota[d]));
  if (choisis.length < n) {
    const reste = ["Difficile", "Moyen", "Facile"].sort((a, b) => vivier[b].length - vivier[a].length);
    for (const d of reste) { if (choisis.length >= n) break; prendre(d, n - choisis.length); }
  }

  return choisis.slice(0, n).map(({ f, geste, taille, d }) => ({
    geste, difficulty: d,
    content: geste === "cases"
      ? `La figure grise est dessinée d'un côté du point O. Colorie les cases qui complètent la figure par symétrie centrale de centre O.`
      : `La ligne brisée grise est tracée d'un côté du point O. Trace son symétrique par rapport à O en reliant les nœuds du quadrillage.`,
    solution: geste === "cases"
      ? `Chaque case a son image de l'autre côté de O, à la même distance : O est le milieu du segment qui joint une case et son image. La figure complète compte ${taille * 2} cases et admet O pour centre de symétrie.`
      : `Chaque sommet M a une image M' telle que O soit le MILIEU de [MM']. On construit les images des ${taille + 1} sommets, puis on les relie dans le même ordre (${taille} segments). La figure obtenue est celle de départ après un demi-tour autour de O.`,
    interactif: { widget: "quadrillage", COLS, ROWS, geste,
      axe: f.C, fixe: f.fixe, reponse: f.reponse }
  }));
}

/* ═══ QUESTIONS DE COURS ═══ */
const COURS = [
["Facile","Qu'appelle-t-on le symétrique d'un point M par rapport à un point O ?",
 "C'est le point M' tel que O soit le MILIEU du segment [MM']."],
["Facile","Comment construit-on le symétrique d'un point M par rapport à un point O ?",
 "On trace la demi-droite [MO), puis on reporte au-delà de O la même distance : OM' = OM. Les points M, O et M' sont alignés."],
["Facile","Que signifie « deux figures sont symétriques par rapport à un point O » ?",
 "Cela signifie qu'en faisant tourner l'une d'un demi-tour autour de O, elle se superpose exactement à l'autre."],
["Facile","À quelle transformation la symétrie centrale correspond-elle ?",
 "À un demi-tour, c'est-à-dire une rotation d'un angle de 180° autour du centre."],
["Facile","Que devient le centre O par la symétrie de centre O ?",
 "Il est son propre symétrique : c'est le seul point invariant de la transformation."],
["Facile","Le symétrique d'un segment par rapport à un point est-il un segment ?",
 "Oui, et de même longueur. La symétrie centrale conserve les longueurs."],
["Facile","Le symétrique d'une droite par rapport à un point est-il une droite ?",
 "Oui, et elle est PARALLÈLE à la droite de départ. C'est une propriété propre à la symétrie centrale."],
["Facile","Le symétrique d'un cercle par rapport à un point est-il un cercle ?",
 "Oui, de même rayon. Son centre est le symétrique du centre du cercle de départ."],
["Facile","Que conserve la symétrie centrale ?",
 "Les longueurs, les mesures d'angles, les aires, l'alignement, le parallélisme, les milieux — et aussi l'orientation, contrairement à la symétrie axiale."],
["Facile","Qu'appelle-t-on un centre de symétrie d'une figure ?",
 "C'est un point O tel que la figure soit son propre symétrique par la symétrie de centre O : un demi-tour autour de O la laisse inchangée."],
["Facile","Le parallélogramme a-t-il un centre de symétrie ?",
 "Oui : le point d'intersection de ses diagonales."],
["Facile","Combien de centres de symétrie une figure peut-elle avoir ?",
 "Au plus un, sauf pour une figure illimitée comme une droite. Un polygone n'en a jamais deux."],
["Moyen","Quelle est la différence entre symétrie axiale et symétrie centrale ?",
 "La symétrie axiale se fait par rapport à une DROITE et retourne la figure comme un miroir ; la symétrie centrale se fait par rapport à un POINT et fait faire un demi-tour. La première inverse l'orientation, la seconde la conserve."],
["Moyen","Comment retrouver le centre de symétrie quand on connaît une figure et son image ?",
 "On joint un point à son image : le milieu de ce segment est le centre. Un seul couple suffit, et l'on peut vérifier avec un second."],
["Moyen","Si M' est le symétrique de M par rapport à O, quel est le symétrique de M' ?",
 "C'est M. Appliquer deux fois la même symétrie centrale ramène au point de départ."],
["Moyen","Le rectangle a-t-il un centre de symétrie ? Et des axes ?",
 "Oui aux deux : son centre est le point d'intersection des diagonales, et il possède deux axes, les médiatrices de ses côtés."],
["Moyen","Le triangle équilatéral a-t-il un centre de symétrie ?",
 "Non. Il possède trois axes de symétrie, mais aucun centre : un demi-tour le laisse pointe en bas."],
["Moyen","Quelles figures usuelles possèdent à la fois un centre et des axes de symétrie ?",
 "Le carré (centre et 4 axes), le rectangle (centre et 2 axes), le losange (centre et 2 axes), le cercle (centre et une infinité d'axes)."],
["Moyen","Comment construire le symétrique d'un segment [AB] par rapport à O ?",
 "On construit A' symétrique de A, puis B' symétrique de B, et l'on trace [A'B']. Il est parallèle à [AB] et de même longueur."],
["Moyen","Pourquoi une droite et son image par une symétrie centrale sont-elles parallèles ?",
 "Parce qu'un demi-tour conserve les directions : la droite image a la même inclinaison, et elle ne peut recouper la première que si elle passe par le centre — auquel cas les deux sont confondues."],
["Moyen","Le symétrique d'un angle de 55° par rapport à un point mesure-t-il aussi 55° ?",
 "Oui. La symétrie centrale conserve les mesures d'angles."],
["Moyen","Comment reconnaître qu'un point est le centre de symétrie d'une figure ?",
 "En faisant tourner mentalement la figure d'un demi-tour autour de ce point : elle doit se superposer exactement à elle-même."],
["Difficile","Pourquoi dit-on que la symétrie centrale conserve l'orientation, contrairement à la symétrie axiale ?",
 "Parce qu'un demi-tour ne retourne pas la figure : un triangle dont les sommets se lisent dans le sens des aiguilles d'une montre garde ce sens après symétrie centrale, alors qu'une symétrie axiale l'inverse."],
["Difficile","Deux symétries axiales d'axes perpendiculaires enchaînées, à quoi cela équivaut-il ?",
 "À une symétrie centrale, de centre le point d'intersection des deux axes."],
["Difficile","Une figure ayant deux axes de symétrie perpendiculaires possède-t-elle un centre de symétrie ?",
 "Oui : leur point d'intersection. C'est le cas du rectangle, du losange et du carré."],
["Difficile","Le losange non carré possède-t-il un centre de symétrie ? Où se trouve-t-il ?",
 "Oui, au point d'intersection de ses diagonales, qui est aussi leur milieu commun."],
["Difficile","Un triangle peut-il avoir un centre de symétrie ?",
 "Non, jamais. Un demi-tour transformerait chaque sommet en un autre sommet, ce qui est impossible avec un nombre impair de sommets."],
["Difficile","Le symétrique du milieu d'un segment par une symétrie centrale est-il le milieu du segment image ?",
 "Oui. La symétrie centrale conserve les milieux, comme l'alignement et les longueurs."],
["Difficile","Si O est le milieu de [AB], que peut-on dire de A et B ?",
 "Ils sont symétriques l'un de l'autre par rapport à O. C'est exactement la définition de la symétrie centrale."],
["Difficile","Une figure peut-elle avoir un centre de symétrie sans avoir d'axe de symétrie ? Donne un exemple.",
 "Oui : le parallélogramme quelconque. Ses diagonales se coupent en leur milieu, qui est son centre, mais il n'a aucun axe de symétrie."],
];

/* ═══ APERÇU ═══ */
if (APERCU) {
  alea = mulberry32(GRAINE);
  const figs = genererFigures(FIGURES);
  const parG = {}, parD = {};
  figs.forEach(f => { parG[f.geste] = (parG[f.geste] || 0) + 1;
    parD[f.difficulty] = (parD[f.difficulty] || 0) + 1; });
  const dc = {}; COURS.forEach(c => dc[c[0]] = (dc[c[0]] || 0) + 1);
  console.log(`Famille « Cours » : ${COURS.length} questions.`);
  console.log(`  Facile ${dc.Facile || 0} · Moyen ${dc.Moyen || 0} · Difficile ${dc.Difficile || 0}\n`);
  console.log(`Famille « Construction des symétries » : ${figs.length} figures.`);
  console.log(`  Coloriages ${parG.cases || 0} · Tracés ${parG.segments || 0}`);
  console.log(`  Facile ${parD.Facile || 0} · Moyen ${parD.Moyen || 0} · Difficile ${parD.Difficile || 0}`);
  const ctr = {}; figs.forEach(f => { const c = f.interactif.axe;
    ctr[`O(${c.x} ; ${c.y})`] = (ctr[`O(${c.x} ; ${c.y})`] || 0) + 1; });
  console.log("  Centres :", Object.entries(ctr).map(([k, v]) => `${k} (${v})`).join(" · "));
  const c = figs.find(f => f.geste === "cases"), s = figs.find(f => f.geste === "segments");
  console.log("\nExemple de coloriage :\n  " + c.content);
  console.log("  centre  :", JSON.stringify({ x: c.interactif.axe.x, y: c.interactif.axe.y }));
  console.log("  départ  :", JSON.stringify(c.interactif.fixe.cases));
  console.log("  réponse :", JSON.stringify(c.interactif.reponse.cases));
  console.log("\nExemple de tracé :\n  " + s.content);
  console.log("  départ  :", JSON.stringify(s.interactif.fixe.segments));
  console.log("  réponse :", JSON.stringify(s.interactif.reponse.segments));
  process.exit(0);
}

/* ═══ BASE ═══ */
(async () => {
  const { Pool } = require("pg");
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%sym%trie%' ORDER BY id`);
  const rows = brut.filter(r => { const c = cle(r.chapitre); return c.includes("symetrie") && c.includes("centrale"); });
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = rows.length ? maj(rows, "chapitre", "Symétrie centrale") : "Symétrie centrale";
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s) en place.`);

  if (rows.length) {
    const g = new Map();
    rows.forEach(r => { const k = r.famille || "(sans famille)"; g.set(k, (g.get(k) || 0) + 1); });
    console.log("\nFamilles à supprimer :");
    console.table([...g.entries()].map(([famille, n]) => ({ famille, n })));
  }

  alea = mulberry32(GRAINE);
  const figs = genererFigures(FIGURES);
  const modele = { level: maj(rows, "level", "college"), subject: maj(rows, "subject", "Géométrie"),
                   classe: maj(rows, "classe", "5ème") };
  console.log("\nÀ créer :");
  console.table([
    { famille: "Cours", n: COURS.length, note: "questions de cours" },
    { famille: "Construction des symétries", n: figs.length,
      note: `${figs.filter(f => f.geste === "cases").length} coloriages · ${figs.filter(f => f.geste === "segments").length} tracés` }]);
  console.log(`Colonnes reprises : classe ${modele.classe} · matière ${modele.subject} · niveau ${modele.level}`);

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`symetrie-centrale-avant-refonte-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : symetrie-centrale-avant-refonte-${stamp}.json`);

  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS interactif JSONB`);
  console.log("Colonne « interactif » prête.");

  if (rows.length && !GARDER) {
    const res = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [rows.map(r => r.id)]);
    console.log(`${res.rowCount} exercice(s) supprimé(s).`);
  }

  let n = 0;
  for (const [diff, q, s] of COURS) {
    n++;
    await pool.query(
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution,
         classe, chapitre, type, famille)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,'exercice','Cours')`,
      [`Cours ${n}`, q, modele.level, modele.subject, diff, s, modele.classe, CHAPITRE]);
  }
  console.log(`${n} question(s) de cours insérée(s).`);

  const T = 50;
  for (let i = 0; i < figs.length; i += T) {
    const lot = figs.slice(i, i + T), par = [];
    lot.forEach((f, j) => par.push(
      `Construction des symétries ${i + j + 1}`, f.content, modele.level, modele.subject,
      f.difficulty, f.solution, modele.classe, CHAPITRE, JSON.stringify(f.interactif)));
    await pool.query(
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution,
         classe, chapitre, type, famille, interactif)
       VALUES ${lot.map((_, j) => { const b = j * 9;
         return `($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},'exercice','Construction des symétries',$${b+9}::jsonb)`;
       }).join(",")}`, par);
    console.log(`  ${Math.min(i + T, figs.length)} / ${figs.length}`);
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n,
            count(interactif)::int AS interactifs
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAPITRE]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
