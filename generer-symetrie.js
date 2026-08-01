/* MathBase — generer-symetrie.js
   Chapitre « Symétrie axiale » : refonte complète.

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. SUPPRIME toutes les familles existantes du chapitre.
   2. Crée la famille « Cours » : 30 questions sur la médiatrice, l'axe, les
      propriétés conservées, les axes des figures usuelles. Sans objectif
      chiffré, la couverture prime.
   3. Crée la famille « Construction des symétries » : 200 figures à compléter
      dans l'espace quadrillage interactif — 100 coloriages, 100 tracés.

   ── PRÉREQUIS ────────────────────────────────────────────────────────────
   La colonne `interactif` doit exister. Le script la crée au besoin :
       ALTER TABLE exercises ADD COLUMN IF NOT EXISTS interactif JSONB
   Il faut aussi que l'application sache l'afficher : voir patch-interactif.js,
   qui dépose quadrillage.js et branche le rendu.

   ── LES 200 FIGURES ──────────────────────────────────────────────────────
   Chacune est construite puis RÉFLÉCHIE par calcul : la réponse n'est jamais
   saisie à la main. Quatre axes (vertical, horizontal, et les deux bords selon
   la parité), sept familles de formes, et un contrôle d'unicité qui garantit
   200 figures réellement différentes.

   ⚠ Attention au repérage : une case se repère par son coin haut-gauche, un
   nœud par sa position. La symétrie d'une case autour d'un axe vertical
   d'abscisse a s'écrit x ↦ 2a − x − 1, celle d'un nœud x ↦ 2a − x. Le « −1 »
   fait toute la différence, et c'est l'erreur classique de ce genre de code.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node generer-symetrie.js --apercu          # hors base
     node generer-symetrie.js                   # simulation
     node generer-symetrie.js --execute         # applique
   Options : --figures N (200) · --graine N (20260807) · --garder-familles
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU = ARGS.includes("--apercu");
const GARDER = ARGS.includes("--garder-familles");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const FIGURES = opt("--figures", 200);
const GRAINE = opt("--graine", 20260807);

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

/* ═══ SYMÉTRIES ═══ le « −1 » des cases vient du repérage par le coin */
const symCase = (c, A) => A.type === "v" ? [2 * A.x - c[0] - 1, c[1]] : [c[0], 2 * A.y - c[1] - 1];
const symNode = (n, A) => A.type === "v" ? [2 * A.x - n[0], n[1]] : [n[0], 2 * A.y - n[1]];

const COLS = 12, ROWS = 10;
/* côté « départ » de l'axe, où l'on dessine la figure d'origine */
function zone(A) {
  return A.type === "v"
    ? { cx: [0, A.x - 1], cy: [0, ROWS - 1], nx: [0, A.x], ny: [0, ROWS] }
    : { cx: [0, COLS - 1], cy: [0, A.y - 1], nx: [0, COLS], ny: [0, A.y] };
}
const dansCases = (c, A) => { const z = zone(A);
  return c[0] >= z.cx[0] && c[0] <= z.cx[1] && c[1] >= z.cy[0] && c[1] <= z.cy[1]; };
const dansNodes = (n, A) => { const z = zone(A);
  return n[0] >= z.nx[0] && n[0] <= z.nx[1] && n[1] >= z.ny[0] && n[1] <= z.ny[1]; };

/* ═══ FORMES EN CASES ═══ */
function formeCases(A, ampleur) {
  const z = zone(A), lC = z.cx[1] - z.cx[0] + 1, hC = z.cy[1] - z.cy[0] + 1;
  const G = ampleur === "grande";              // pilote la taille, donc la difficulté
  const type = pick(G ? ["rect", "escalier", "creux", "chemin", "diagonale"]
                      : ["rect", "escalier", "L", "T", "diagonale", "chemin", "creux"]);
  const out = new Set(), poser = c => { if (dansCases(c, A)) out.add(cleC(c)); };
  const x0 = z.cx[0] + ri(0, Math.max(0, lC - 4)), y0 = z.cy[0] + ri(0, Math.max(0, hC - 4));

  if (type === "rect") { const w = ri(G ? 3 : 2, Math.min(G ? 5 : 4, lC)), h = ri(G ? 3 : 2, Math.min(G ? 5 : 4, hC));
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

/* ═══ FORMES EN SEGMENTS ═══ (nœuds) */
function formeSegments(A, ampleur) {
  const z = zone(A);
  const G = ampleur === "grande";
  const type = pick(G ? ["brisee", "zigzag", "maison", "quadri", "etoile"]
                      : ["brisee", "triangle", "quadri", "zigzag", "fleche", "maison", "etoile"]);
  const segs = [], pts = [];
  const x0 = z.nx[0] + ri(0, Math.max(0, z.nx[1] - z.nx[0] - 4));
  const y0 = z.ny[0] + ri(0, Math.max(0, z.ny[1] - z.ny[0] - 4));
  const ok = p => dansNodes(p, A);
  const relier = liste => { for (let i = 0; i < liste.length - 1; i++) {
    if (!ok(liste[i]) || !ok(liste[i + 1])) return false;
    if (cleC(liste[i]) === cleC(liste[i + 1])) return false;
    segs.push([liste[i], liste[i + 1]]); } return true; };

  if (type === "triangle") { const w = ri(2, 4), h = ri(2, 4);
    pts.push([x0, y0], [x0 + w, y0], [x0 + ri(0, w), y0 + h], [x0, y0]); }
  else if (type === "quadri") { const w = ri(2, 4), h = ri(2, 3);
    pts.push([x0, y0], [x0 + w, y0], [x0 + w - ri(0, 1), y0 + h], [x0 + ri(0, 1), y0 + h], [x0, y0]); }
  else if (type === "maison") { const w = ri(2, 3), h = ri(2, 3);
    pts.push([x0, y0 + h], [x0, y0 + 1], [x0 + (w / 2 === (w >> 1) ? w / 2 : (w + 1) / 2), y0],
             [x0 + w, y0 + 1], [x0 + w, y0 + h], [x0, y0 + h]); }
  else if (type === "zigzag") { let p = [x0, y0]; pts.push(p);
    for (let k = 0; k < ri(G ? 5 : 3, G ? 7 : 5); k++) { p = [p[0] + ri(1, 2), p[1] + (k % 2 ? -ri(1, 2) : ri(1, 2))]; pts.push(p); } }
  else if (type === "fleche") { const w = ri(2, 3);
    pts.push([x0, y0 + 1], [x0 + w, y0 + 1], [x0 + w - 1, y0], [x0 + w, y0 + 1], [x0 + w - 1, y0 + 2]); }
  else if (type === "etoile") { const w = ri(2, 3);
    pts.push([x0, y0], [x0 + w, y0 + w], [x0, y0 + w], [x0 + w, y0], [x0, y0]); }
  else { let p = [x0, y0]; pts.push(p);
    for (let k = 0; k < ri(G ? 5 : 3, G ? 8 : 5); k++) { const d = pick([[1, 1], [1, -1], [2, 0], [0, 2], [1, 2], [2, 1]]);
      p = [p[0] + d[0], p[1] + (alea() > .5 ? d[1] : -d[1])]; pts.push(p); } }

  if (!relier(pts)) return null;
  const uniq = new Map(); segs.forEach(s => uniq.set(cleS(s), s));
  const liste = [...uniq.values()];
  return liste.length >= 3 ? liste : null;
}

/* ═══ UNE FIGURE COMPLÈTE ═══ */
const AXES = [{ type: "v", x: 6 }, { type: "v", x: 5 }, { type: "h", y: 5 }, { type: "h", y: 4 }];
function figure(geste, ampleur) {
  for (let essai = 0; essai < 120; essai++) {
    const A = pick(AXES);
    if (geste === "cases") {
      const c = formeCases(A, ampleur); if (!c) continue;
      const rep = c.map(x => symCase(x, A));
      if (rep.some(p => p[0] < 0 || p[0] >= COLS || p[1] < 0 || p[1] >= ROWS)) continue;
      if (new Set(rep.map(cleC)).size !== rep.length) continue;
      return { A, fixe: { cases: c, segments: [] }, reponse: { cases: rep, segments: [] } };
    } else {
      const s = formeSegments(A, ampleur); if (!s) continue;
      const rep = s.map(x => [symNode(x[0], A), symNode(x[1], A)]);
      if (rep.some(g => g.some(p => p[0] < 0 || p[0] > COLS || p[1] < 0 || p[1] > ROWS))) continue;
      if (new Set(rep.map(cleS)).size !== rep.length) continue;
      return { A, fixe: { cases: [], segments: s }, reponse: { cases: [], segments: rep } };
    }
  }
  return null;
}
/* empreinte : deux figures identiques à l'axe près comptent pour une seule */
const empreinte = f => f.A.type + (f.A.x !== undefined ? f.A.x : f.A.y) + "#" +
  f.fixe.cases.map(cleC).sort().join(";") + "#" + f.fixe.segments.map(cleS).sort().join(";");

/* Répartition visée : 20 % faciles, 30 % moyens, 50 % difficiles, comme dans
   les autres chapitres. La difficulté d'une construction tient au NOMBRE
   d'éléments à reporter : on la pilote donc par la taille de la figure, et
   l'on tire les figures dans l'ordre des quotas à remplir. */
const REPART = { Facile: 0.20, Moyen: 0.30, Difficile: 0.50 };
/* Échelle propre à chaque geste : reporter 6 segments demande bien plus de
   travail que colorier 6 cases, la même taille ne vaut donc pas la même
   difficulté. Sans cette distinction, le vivier des tracés difficiles reste
   vide et la sélection bascule sur les coloriages. */
const DIFF = (n, geste) => geste === "segments"
  ? (n <= 3 ? "Facile" : n <= 5 ? "Moyen" : "Difficile")
  : (n <= 5 ? "Facile" : n <= 8 ? "Moyen" : "Difficile");

function genererFigures(n) {
  /* On constitue d'abord un VIVIER de figures uniques, puis on sélectionne
     pour approcher les quotas. Filtrer à la volée rejetait tant de tirages
     que le compte n'était jamais atteint. */
  const quota = { Facile: Math.round(n * REPART.Facile), Moyen: Math.round(n * REPART.Moyen) };
  quota.Difficile = n - quota.Facile - quota.Moyen;

  const vues = new Set(), vivier = { Facile: [], Moyen: [], Difficile: [] };
  const viser = { Facile: "petite", Moyen: "petite", Difficile: "grande" };
  const objectif = d => quota[d] * 3;              // marge pour pouvoir choisir
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

  /* sélection : le quota de chaque niveau, en équilibrant coloriages et tracés ;
     ce qui manque à un niveau est repris sur le plus fourni. */
  const choisis = [];
  const prendre = (d, k) => {
    const dispo = vivier[d];
    const cases = dispo.filter(x => x.geste === "cases");
    const segs  = dispo.filter(x => x.geste === "segments");
    for (let i = 0; i < k; i++) {
      const src = (i % 2 === 0 ? cases : segs).length ? (i % 2 === 0 ? cases : segs)
                : (cases.length ? cases : segs);
      if (!src.length) break;
      choisis.push(Object.assign(src.shift(), { d }));
    }
  };
  ["Difficile", "Moyen", "Facile"].forEach(d => prendre(d, quota[d]));
  if (choisis.length < n) {
    const reste = ["Difficile", "Moyen", "Facile"].sort((a, b) => vivier[b].length - vivier[a].length);
    for (const d of reste) { if (choisis.length >= n) break; prendre(d, n - choisis.length); }
  }

  return choisis.slice(0, n).map(({ f, geste, taille, d }) => {
    const axeTxt = f.A.type === "v" ? "verticale" : "horizontale";
    return {
      geste, difficulty: d,
      content: geste === "cases"
        ? `La figure grise est dessinée d'un côté de la droite (d), ${axeTxt}. Colorie les cases qui complètent la figure par symétrie axiale d'axe (d).`
        : `La ligne brisée grise est tracée d'un côté de la droite (d), ${axeTxt}. Trace son symétrique par rapport à (d) en reliant les nœuds du quadrillage.`,
      solution: geste === "cases"
        ? `Chaque case coloriée a son image de l'autre côté de (d), à la même distance de l'axe et alignée avec elle perpendiculairement à (d). La figure complète compte ${taille * 2} cases et admet (d) pour axe de symétrie.`
        : `Chaque sommet de la ligne brisée a son image de l'autre côté de (d), à égale distance de l'axe : (d) est la médiatrice du segment joignant un point et son image. On relie ensuite les images dans le même ordre (${taille} segments).`,
      interactif: { widget: "quadrillage", COLS, ROWS, geste,
        axe: f.A, fixe: f.fixe, reponse: f.reponse }
    };
  });
}

/* ═══ QUESTIONS DE COURS ═══ */
const COURS = [
["Facile","Qu'appelle-t-on la médiatrice d'un segment ?",
 "C'est la droite perpendiculaire à ce segment et qui passe par son milieu."],
["Facile","Quelle est la propriété caractéristique des points de la médiatrice d'un segment ?",
 "Un point appartient à la médiatrice d'un segment si et seulement s'il est à égale distance des deux extrémités de ce segment."],
["Facile","Que signifie « deux figures sont symétriques par rapport à une droite (d) » ?",
 "Cela signifie qu'en pliant la feuille le long de (d), les deux figures se superposent exactement. (d) s'appelle l'axe de symétrie."],
["Facile","Comment construit-on le symétrique d'un point M par rapport à une droite (d) ?",
 "On trace la perpendiculaire à (d) passant par M, puis on reporte de l'autre côté la même distance : (d) coupe [MM'] en son milieu, perpendiculairement."],
["Facile","Quel lien y a-t-il entre l'axe de symétrie et le segment joignant un point à son symétrique ?",
 "L'axe est la MÉDIATRICE de ce segment : il le coupe en son milieu et perpendiculairement."],
["Facile","Que devient un point situé sur l'axe de symétrie ?",
 "Il est son propre symétrique : il ne bouge pas. On dit qu'il est invariant."],
["Facile","Le symétrique d'un segment est-il un segment ?",
 "Oui, et de même longueur. La symétrie axiale conserve les longueurs."],
["Facile","Le symétrique d'une droite est-il une droite ?",
 "Oui. La symétrie axiale transforme une droite en une droite."],
["Facile","Le symétrique d'un cercle est-il un cercle ?",
 "Oui, de même rayon. Le centre du nouveau cercle est le symétrique du centre du premier."],
["Facile","Que conserve la symétrie axiale ?",
 "Les longueurs, les mesures d'angles, les aires, l'alignement, le parallélisme, les milieux. Elle conserve tout, sauf l'orientation."],
["Facile","Combien d'axes de symétrie possède un carré ?",
 "Quatre : les deux médiatrices des côtés et les deux diagonales."],
["Facile","Combien d'axes de symétrie possède un rectangle non carré ?",
 "Deux : les médiatrices de ses côtés. Attention, ses diagonales n'en sont pas."],
["Moyen","Combien d'axes de symétrie possède un triangle équilatéral ? un triangle isocèle non équilatéral ?",
 "Le triangle équilatéral en a trois, une par sommet. Le triangle isocèle non équilatéral n'en a qu'un : la médiatrice de sa base."],
["Moyen","Un triangle quelconque a-t-il un axe de symétrie ?",
 "Non, aucun. Dès qu'un triangle possède un axe de symétrie, il est isocèle."],
["Moyen","Combien d'axes de symétrie possède un losange non carré ?",
 "Deux : ses diagonales. Elles sont perpendiculaires et se coupent en leur milieu."],
["Moyen","Un parallélogramme quelconque a-t-il un axe de symétrie ?",
 "Non. Il possède un centre de symétrie, ce qui est différent : c'est la symétrie centrale, pas la symétrie axiale."],
["Moyen","Combien d'axes de symétrie possède un cercle ?",
 "Une infinité : toute droite passant par son centre est un axe de symétrie."],
["Moyen","Comment construire la médiatrice d'un segment à la règle et au compas ?",
 "On trace deux arcs de même rayon centrés sur chaque extrémité, assez grands pour se couper en deux points. La droite qui joint ces deux points est la médiatrice."],
["Moyen","Comment construire la médiatrice d'un segment à la règle graduée et à l'équerre ?",
 "On mesure le segment, on marque son milieu, puis on trace la perpendiculaire au segment en ce point."],
["Moyen","Comment reconnaître qu'une droite est un axe de symétrie d'une figure ?",
 "En pliant mentalement la figure le long de cette droite : les deux parties doivent se superposer exactement, point par point."],
["Moyen","Le symétrique d'un angle de 40° mesure-t-il aussi 40° ?",
 "Oui. La symétrie axiale conserve les mesures d'angles."],
["Moyen","Si M' est le symétrique de M par rapport à (d), quel est le symétrique de M' ?",
 "C'est M lui-même. Appliquer deux fois la même symétrie axiale ramène au point de départ."],
["Moyen","Deux points symétriques par rapport à une droite sont-ils toujours à la même distance de cette droite ?",
 "Oui, c'est la définition même : l'axe coupe le segment qui les joint en son milieu, donc ils en sont équidistants."],
["Difficile","Pourquoi dit-on que la symétrie axiale « renverse » la figure ?",
 "Parce qu'elle inverse le sens de parcours : un triangle dont les sommets se lisent dans le sens des aiguilles d'une montre a une image qui se lit dans l'autre sens. C'est la seule chose que la symétrie ne conserve pas."],
["Difficile","Les diagonales d'un rectangle non carré sont-elles des axes de symétrie ? Justifie.",
 "Non. En pliant le rectangle le long d'une diagonale, les deux moitiés ne se superposent pas : les côtés n'ont pas la même longueur. C'est une erreur fréquente."],
["Difficile","Une figure peut-elle avoir exactement deux axes de symétrie perpendiculaires ? Donne un exemple.",
 "Oui : le rectangle non carré (les médiatrices de ses côtés) et le losange non carré (ses diagonales) en sont deux exemples."],
["Difficile","Comment retrouver l'axe de symétrie quand on connaît une figure et son image ?",
 "On joint un point à son image et on construit la médiatrice de ce segment : c'est l'axe. Un seul couple de points suffit, et l'on peut vérifier avec un second."],
["Difficile","Le symétrique du milieu d'un segment est-il le milieu du segment image ?",
 "Oui. La symétrie axiale conserve les milieux, comme elle conserve l'alignement et les longueurs."],
["Difficile","Un polygone à cinq côtés peut-il avoir cinq axes de symétrie ?",
 "Oui, si c'est un pentagone régulier : chaque axe passe par un sommet et par le milieu du côté opposé."],
["Difficile","Si une figure a deux axes de symétrie sécants, que peut-on dire du point d'intersection ?",
 "C'est un centre de symétrie de la figure. Deux symétries axiales d'axes perpendiculaires enchaînées équivalent à une symétrie centrale de centre leur point d'intersection."],
];

/* ═══ APERÇU ═══ */
if (APERCU) {
  alea = mulberry32(GRAINE);
  const figs = genererFigures(FIGURES);
  const parG = {}, parD = {};
  figs.forEach(f => { parG[f.geste] = (parG[f.geste] || 0) + 1;
    parD[f.difficulty] = (parD[f.difficulty] || 0) + 1; });
  console.log(`Famille « Cours » : ${COURS.length} questions.`);
  const dc = {}; COURS.forEach(c => dc[c[0]] = (dc[c[0]] || 0) + 1);
  console.log(`  Facile ${dc.Facile || 0} · Moyen ${dc.Moyen || 0} · Difficile ${dc.Difficile || 0}\n`);
  console.log(`Famille « Construction des symétries » : ${figs.length} figures.`);
  console.log(`  Coloriages ${parG.cases || 0} · Tracés ${parG.segments || 0}`);
  console.log(`  Facile ${parD.Facile || 0} · Moyen ${parD.Moyen || 0} · Difficile ${parD.Difficile || 0}`);
  const axes = {}; figs.forEach(f => { const a = f.interactif.axe;
    const k = a.type === "v" ? "verticale x=" + a.x : "horizontale y=" + a.y;
    axes[k] = (axes[k] || 0) + 1; });
  console.log("  Axes :", Object.entries(axes).map(([k, v]) => `${k} (${v})`).join(" · "));
  console.log("\nExemple de coloriage :");
  const c = figs.find(f => f.geste === "cases");
  console.log("  " + c.content);
  console.log("  cases de départ :", JSON.stringify(c.interactif.fixe.cases));
  console.log("  réponse         :", JSON.stringify(c.interactif.reponse.cases));
  console.log("\nExemple de tracé :");
  const s = figs.find(f => f.geste === "segments");
  console.log("  " + s.content);
  console.log("  segments départ :", JSON.stringify(s.interactif.fixe.segments));
  console.log("  réponse         :", JSON.stringify(s.interactif.reponse.segments));
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
  const rows = brut.filter(r => { const c = cle(r.chapitre); return c.includes("symetrie") && c.includes("axiale"); });
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = rows.length ? maj(rows, "chapitre", "Symétrie axiale") : "Symétrie axiale";
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s) en place.`);

  if (rows.length) {
    const g = new Map();
    rows.forEach(r => { const k = r.famille || "(sans famille)";
      g.set(k, (g.get(k) || 0) + 1); });
    console.log("\nFamilles à supprimer :");
    console.table([...g.entries()].map(([famille, n]) => ({ famille, n })));
  }

  alea = mulberry32(GRAINE);
  const figs = genererFigures(FIGURES);
  const modele = { level: maj(rows, "level", "college"), subject: maj(rows, "subject", "Géométrie"),
                   classe: maj(rows, "classe", "6ème") };
  console.log(`\nÀ créer :`);
  console.table([
    { famille: "Cours", n: COURS.length, note: "questions de cours" },
    { famille: "Construction des symétries", n: figs.length,
      note: `${figs.filter(f => f.geste === "cases").length} coloriages · ${figs.filter(f => f.geste === "segments").length} tracés` }]);
  console.log(`Colonnes reprises : classe ${modele.classe} · matière ${modele.subject} · niveau ${modele.level}`);

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`symetrie-avant-refonte-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : symetrie-avant-refonte-${stamp}.json`);

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
    const lot = figs.slice(i, i + T), vals = [], par = [];
    lot.forEach((f, j) => { const b = j * 10;
      vals.push(`($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},'exercice','Construction des symétries',$${b+9}::jsonb)`
        .replace(`$${b+9}::jsonb`, `$${b+9}::jsonb`));
      par.push(`Construction des symétries ${i + j + 1}`, f.content, modele.level, modele.subject,
               f.difficulty, f.solution, modele.classe, CHAPITRE, JSON.stringify(f.interactif));
    });
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
