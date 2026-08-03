/* MathBase — generer-homothetie.js
   Chapitre « Homothéties » : refonte complète.

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. SUPPRIME toutes les familles existantes du chapitre.
   2. Crée « Cours » : 32 questions sur le centre, le rapport, l'agrandissement
      et la réduction, l'effet sur les longueurs et les aires.
   3. Crée « Construction des homothéties » : 200 exercices dans l'espace
      quadrillage — tracés de lignes brisées et coloriages de figures.

   Repère affiché : le centre O seul, marqué d'un point. Aucune flèche, aucun
   signe supplémentaire — le rapport est donné dans l'énoncé.

   ── LA CONTRAINTE PROPRE À L'HOMOTHÉTIE ──────────────────────────────────
   Pour un NŒUD, l'image est immédiate : (x, y) ↦ O + k(x − O). Elle tombe sur
   un nœud dès que k est entier.

   Pour une CASE, il faut transformer ses DEUX coins : une case devient alors
   un BLOC de k×k cases. C'est la seule écriture exacte, et c'est aussi la
   bonne idée mathématique — une homothétie de rapport 2 multiplie les aires
   par 4. Traiter la case comme un point unique donnerait des images à cheval
   sur le quadrillage, impossibles à colorier.

   Les rapports employés :
     tracés     k ∈ {2, 3, −1, −2, 1/2, −1/2}   (les demis exigent des écarts
                 pairs au centre, ce qui est vérifié à la construction)
     coloriages k ∈ {2, 3, −2}                  (agrandissements en blocs)
   Le rapport −1 est la symétrie centrale : les énoncés le signalent.

   ── PRÉREQUIS ────────────────────────────────────────────────────────────
   quadrillage.js dans public/ et l'application branchée par patch-interactif.js.
   Aucune modification du widget n'est nécessaire : le centre est déjà géré.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node generer-homothetie.js --apercu
     node generer-homothetie.js
     node generer-homothetie.js --execute
   Options : --figures N (200) · --graine N (20260810) · --garder-familles
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU = ARGS.includes("--apercu");
const GARDER = ARGS.includes("--garder-familles");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const FIGURES = opt("--figures", 200);
const GRAINE = opt("--graine", 20260810);

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

const COLS = 14, ROWS = 14;
const okNode = n => n[0] >= 0 && n[0] <= COLS && n[1] >= 0 && n[1] <= ROWS;
const okCase = c => c[0] >= 0 && c[0] < COLS && c[1] >= 0 && c[1] < ROWS;

/* ═══ HOMOTHÉTIE ═══ */
const homNode = (n, O, k) => [O.x + k * (n[0] - O.x), O.y + k * (n[1] - O.y)];
/* une case devient un bloc de |k|×|k| cases : on transforme ses deux coins */
function homCase(c, O, k) {
  const A = homNode([c[0], c[1]], O, k), B = homNode([c[0] + 1, c[1] + 1], O, k);
  const x0 = Math.min(A[0], B[0]), y0 = Math.min(A[1], B[1]), n = Math.abs(k);
  const out = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) out.push([x0 + i, y0 + j]);
  return out;
}

/* ═══ FORMES ═══ */
function formeSegments(x0, y0, ampleur, pas) {
  const G = ampleur === "grande";
  const P = pas || 1;
  const type = pick(G ? ["brisee", "zigzag", "maison", "quadri"]
                      : ["brisee", "triangle", "quadri", "zigzag", "fleche", "maison"]);
  const pts = [];
  if (type === "triangle") { const w = ri(1, 2), h = ri(1, 2);
    pts.push([x0, y0], [x0 + w*P, y0], [x0 + ri(0, w)*P, y0 + h*P], [x0, y0]); }
  else if (type === "quadri") { const w = ri(1, 2), h = ri(1, 2);
    pts.push([x0, y0], [x0 + w*P, y0], [x0 + w*P, y0 + h*P], [x0, y0 + h*P], [x0, y0]); }
  else if (type === "maison") { const w = 2, h = ri(1, 2);
    pts.push([x0, y0 + h*P], [x0, y0 + P], [x0 + P, y0], [x0 + w*P, y0 + P], [x0 + w*P, y0 + h*P], [x0, y0 + h*P]); }
  else if (type === "zigzag") { let p = [x0, y0]; pts.push(p);
    for (let k = 0; k < ri(G ? 4 : 3, G ? 5 : 4); k++) {
      p = [p[0] + P, p[1] + (k % 2 ? -P : P)]; pts.push(p); } }
  else if (type === "fleche") {
    pts.push([x0, y0 + P], [x0 + 2*P, y0 + P], [x0 + P, y0], [x0 + 2*P, y0 + P], [x0 + P, y0 + 2*P]); }
  else { let p = [x0, y0]; pts.push(p);
    for (let k = 0; k < ri(G ? 4 : 3, G ? 5 : 4); k++) {
      const d = pick([[1, 1], [1, -1], [2, 0], [0, 2], [1, 0], [0, 1]]);
      p = [p[0] + d[0]*P, p[1] + (alea() > .5 ? d[1] : -d[1])*P]; pts.push(p); } }
  const uniq = new Map();
  for (let i = 0; i < pts.length - 1; i++) {
    if (cleC(pts[i]) === cleC(pts[i + 1])) return null;
    uniq.set(cleS([pts[i], pts[i + 1]]), [pts[i], pts[i + 1]]);
  }
  const l = [...uniq.values()];
  return l.length >= 3 ? l : null;
}
function formeCases(x0, y0, ampleur) {
  const G = ampleur === "grande";
  const type = pick(["rect", "L", "T", "escalier", "diagonale"]);
  const out = new Set(), poser = c => out.add(cleC(c));
  if (type === "rect") { const w = ri(1, G ? 3 : 2), h = ri(1, G ? 3 : 2);
    for (let i = 0; i < w; i++) for (let j = 0; j < h; j++) poser([x0 + i, y0 + j]); }
  else if (type === "L") { const a = ri(2, 3);
    for (let j = 0; j < a; j++) poser([x0, y0 + j]);
    poser([x0 + 1, y0 + a - 1]); }
  else if (type === "T") {
    for (let i = 0; i < 3; i++) poser([x0 + i, y0]); poser([x0 + 1, y0 + 1]); }
  else if (type === "escalier") { const n = ri(2, G ? 3 : 2);
    for (let k = 0; k < n; k++) for (let j = 0; j <= k; j++) poser([x0 + k, y0 + j]); }
  else { const n = ri(2, 3);
    for (let k = 0; k < n; k++) poser([x0 + k, y0 + k]); }
  const l = [...out].map(k => k.split(",").map(Number));
  return l.length >= 2 && l.length <= (G ? 9 : 6) ? l : null;
}

/* ═══ RAPPORTS ═══ */
const RAP_SEG = [2, 3, -1, -2, 0.5, -0.5];
const RAP_CASE = [2, 3, -2];
const CENTRES = [{x:7,y:7},{x:6,y:7},{x:7,y:6},{x:6,y:6},{x:8,y:7},{x:7,y:8}];
const rapTxt = k => k === 0.5 ? "1/2" : k === -0.5 ? "\u22121/2"
  : (k < 0 ? "\u2212" + (-k) : String(k));

/* ═══ UNE FIGURE ═══ */
function figure(geste, ampleur, kVise) {
  for (let essai = 0; essai < 300; essai++) {
    const O = pick(CENTRES);
    const k = kVise !== undefined ? kVise
      : pick(geste === "cases" ? RAP_CASE : RAP_SEG);
    const demi = Math.abs(k) === 0.5;
    /* rapport demi : la figure est bâtie de deux en deux à partir d'un point
       dont l'écart au centre est pair, ce qui garantit des images sur les nœuds */
    const x0 = demi ? O.x + 2 * ri(-3, 3) : ri(1, COLS - 4);
    const y0 = demi ? O.y + 2 * ri(-3, 3) : ri(1, ROWS - 4);
    if (demi && (x0 < 0 || x0 > COLS || y0 < 0 || y0 > ROWS)) continue;

    if (geste === "segments") {
      const f = formeSegments(x0, y0, ampleur, demi ? 2 : 1);
      if (!f || !f.every(s => s.every(okNode))) continue;
      if (demi && !f.every(s => s.every(p =>
        (p[0] - O.x) % 2 === 0 && (p[1] - O.y) % 2 === 0))) continue;
      const img = f.map(s => [homNode(s[0], O, k), homNode(s[1], O, k)]);
      if (!img.every(s => s.every(okNode))) continue;
      if (new Set(img.map(cleS)).size !== img.length) continue;
      const dep = new Set(f.map(cleS));
      if (img.some(s => dep.has(cleS(s)))) continue;
      /* le centre ne doit pas tomber sur la figure : l'énoncé deviendrait confus */
      if (f.some(s => s.some(p => p[0] === O.x && p[1] === O.y))) continue;
      return { O, k, fixe: { cases: [], segments: f }, reponse: { cases: [], segments: img } };
    }

    const f = formeCases(x0, y0, ampleur);
    if (!f || !f.every(okCase)) continue;
    const img = [];
    const vus = new Set();
    for (const c of f) for (const b of homCase(c, O, k)) {
      if (vus.has(cleC(b))) continue; vus.add(cleC(b)); img.push(b);
    }
    if (!img.every(okCase)) continue;
    if (img.length > 40) continue;                    // reste raisonnable à colorier
    const dep = new Set(f.map(cleC));
    if (img.some(c => dep.has(cleC(c)))) continue;
    return { O, k, fixe: { cases: f, segments: [] }, reponse: { cases: img, segments: [] } };
  }
  return null;
}

/* ═══ TEXTES ═══ */
function methode(k, geste, nDep, nImg) {
  const agr = Math.abs(k) > 1;
  const base = `Pour chaque point M, on place M' sur la droite (OM) tel que OM' = ${Math.abs(k) === 0.5 ? "OM ÷ 2" : Math.abs(k) + " × OM"}` +
    (k < 0 ? `, mais de l'AUTRE côté de O : le rapport est négatif.` : `, du même côté que M.`);
  const effet = k === -1
    ? `\nUn rapport de \u22121 donne exactement la symétrie de centre O : la figure garde sa taille et fait un demi-tour.`
    : `\nLes longueurs sont ${agr ? "multipliées" : "divisées"} par ${Math.abs(k) === 0.5 ? 2 : Math.abs(k)}` +
      `, et les aires par ${Math.abs(k) === 0.5 ? 4 : Math.abs(k) * Math.abs(k)}.`;
  const fin = geste === "cases"
    ? `\nChaque case de départ devient un carré de ${Math.abs(k)} × ${Math.abs(k)} = ${Math.abs(k) * Math.abs(k)} cases : ${nDep} case${nDep > 1 ? "s" : ""} donnent ${nImg} cases coloriées.`
    : `\nOn construit l'image de chaque sommet, puis on relie dans le même ordre (${nImg} segments). L'image est parallèle à la figure de départ : une homothétie ne change pas les directions.`;
  return base + effet + fin;
}

/* ═══ CONSTRUCTION ═══ */
const REPART = { Facile: 0.20, Moyen: 0.30, Difficile: 0.50 };
/* Une échelle unique pour les deux gestes, sinon les coloriages — dont
   l'image compte beaucoup de cases — monopolisent le niveau difficile.
   On mesure la CHARGE DE TRAVAIL : nombre d'éléments à reporter, plus une
   majoration pour les rapports qui demandent un vrai calcul. */
function charge(taille, geste, k) {
  const base = geste === "segments" ? taille : taille / 2.5;
  const a = Math.abs(k);
  const bonus = (a === 3 ? 2 : 0) + (a === 0.5 ? 2 : 0) + (k < 0 ? 1.5 : 0);
  return base + bonus;
}
const DIFF = (taille, geste, k) => { const c = charge(taille, geste, k);
  return c <= 4.5 ? "Facile" : c <= 6.5 ? "Moyen" : "Difficile"; };

function genererFigures(n) {
  const quota = { Facile: Math.round(n * REPART.Facile), Moyen: Math.round(n * REPART.Moyen) };
  quota.Difficile = n - quota.Facile - quota.Moyen;
  const vues = new Set(), vivier = { Facile: [], Moyen: [], Difficile: [] };
  const viser = { Facile: "petite", Moyen: "petite", Difficile: "grande" };
  let essais = 0;
  while (essais < n * 1200) {
    essais++;
    const manquants = ["Difficile", "Moyen", "Facile"].filter(d => vivier[d].length < quota[d] * 3);
    if (!manquants.length) break;
    const visee = manquants[essais % manquants.length];
    const geste = essais % 2 === 0 ? "cases" : "segments";
    /* on fait tourner les rapports : sans cela, ceux qui passent le plus
       facilement les contrôles de place accaparent presque tout le lot */
    const rapports = geste === "cases" ? RAP_CASE : RAP_SEG;
    const k = rapports[Math.floor(essais / 2) % rapports.length];
    const f = figure(geste, viser[visee], k); if (!f) continue;
    const e = JSON.stringify([f.O, f.k, f.fixe]); if (vues.has(e)) continue;
    vues.add(e);
    const taille = geste === "cases" ? f.reponse.cases.length : f.fixe.segments.length;
    vivier[DIFF(taille, geste, k)].push({ f, geste, taille, k });
  }
  const choisis = [];
  const usage = new Map();                       // combien de fois chaque rapport
  const prendre = (d, m) => {
    const dispo = vivier[d];
    for (let i = 0; i < m; i++) {
      const geste = i % 2 === 0 ? "segments" : "cases";
      let pool = dispo.filter(x => x.geste === geste && !x.pris);
      if (!pool.length) pool = dispo.filter(x => !x.pris);
      if (!pool.length) break;
      /* à difficulté et geste égaux, on prend le rapport le moins servi */
      pool.sort((a, b) => (usage.get(a.k) || 0) - (usage.get(b.k) || 0));
      const el = pool[0];
      el.pris = true;
      usage.set(el.k, (usage.get(el.k) || 0) + 1);
      choisis.push(Object.assign(el, { d }));
    }
  };
  ["Difficile", "Moyen", "Facile"].forEach(d => prendre(d, quota[d]));
  if (choisis.length < n) {
    const reste = ["Difficile", "Moyen", "Facile"].sort((a, b) => vivier[b].length - vivier[a].length);
    for (const d of reste) { if (choisis.length >= n) break; prendre(d, n - choisis.length); }
  }

  return choisis.slice(0, n).map(({ f, geste, d }) => {
    const nDep = geste === "cases" ? f.fixe.cases.length : f.fixe.segments.length;
    const nImg = geste === "cases" ? f.reponse.cases.length : f.reponse.segments.length;
    const quoi = geste === "cases" ? "Colorie les cases de l'image" : "Trace l'image";
    const enTete = geste === "cases"
      ? "La figure grise est dessinée sur le quadrillage."
      : "La ligne brisée grise est tracée sur le quadrillage.";
    return {
      geste, difficulty: d,
      content: `${enTete} ${quoi} de cette figure par l'homothétie de centre O et de rapport ${rapTxt(f.k)}.`,
      solution: methode(f.k, geste, nDep, nImg),
      interactif: { widget: "quadrillage", COLS, ROWS, geste,
        axe: { type: "c", x: f.O.x, y: f.O.y, nom: "O" },
        fixe: f.fixe, reponse: f.reponse }
    };
  });
}

/* ═══ QUESTIONS DE COURS ═══ */
const COURS = [
["Facile","Qu'appelle-t-on une homothétie ?",
 "C'est une transformation qui agrandit ou réduit une figure à partir d'un point fixe, appelé centre, selon un nombre appelé rapport."],
["Facile","Que faut-il connaître pour définir une homothétie ?",
 "Deux choses : son centre et son rapport."],
["Facile","Comment construit-on l'image d'un point M par l'homothétie de centre O et de rapport 3 ?",
 "On trace la demi-droite [OM), puis on place M' sur cette demi-droite tel que OM' = 3 × OM."],
["Facile","Que devient le centre O par une homothétie de centre O ?",
 "Il est son propre image : c'est le seul point invariant, quel que soit le rapport."],
["Facile","Que se passe-t-il si le rapport est supérieur à 1 ?",
 "La figure est AGRANDIE, et son image se trouve du même côté du centre."],
["Facile","Que se passe-t-il si le rapport est compris entre 0 et 1 ?",
 "La figure est RÉDUITE, et son image se trouve du même côté du centre."],
["Facile","Que se passe-t-il si le rapport est négatif ?",
 "L'image se trouve de l'autre côté du centre, et la figure est retournée d'un demi-tour."],
["Facile","À quoi correspond une homothétie de rapport −1 ?",
 "À la symétrie centrale de centre O : la taille est conservée et la figure fait un demi-tour."],
["Facile","À quoi correspond une homothétie de rapport 1 ?",
 "À rien du tout : chaque point est sa propre image, la figure ne bouge pas."],
["Facile","L'homothétie conserve-t-elle les longueurs ?",
 "Non, sauf si le rapport vaut 1 ou −1. Les longueurs sont multipliées par la valeur absolue du rapport."],
["Facile","L'homothétie conserve-t-elle les angles ?",
 "Oui. C'est pour cela que l'image a exactement la même forme : seule la taille change."],
["Facile","Que devient une droite par une homothétie ?",
 "Une droite qui lui est PARALLÈLE. Les directions ne sont jamais modifiées."],
["Moyen","Par une homothétie de rapport 3, par combien l'aire est-elle multipliée ?",
 "Par 9, c'est-à-dire 3². Les aires sont multipliées par le CARRÉ du rapport, pas par le rapport."],
["Moyen","Par une homothétie de rapport 1/2, que deviennent les longueurs et les aires ?",
 "Les longueurs sont divisées par 2, et les aires par 4."],
["Moyen","Sur un quadrillage, que devient une case par une homothétie de rapport 2 ?",
 "Un carré de 2 × 2 = 4 cases. C'est la traduction visible du fait que les aires sont multipliées par 4."],
["Moyen","Comment reconnaît-on le rapport d'une homothétie à partir d'une figure et de son image ?",
 "On compare une longueur de l'image à la longueur correspondante de départ : leur quotient donne la valeur absolue du rapport. Le signe se lit sur la position, du même côté du centre ou non."],
["Moyen","Comment retrouver le centre d'une homothétie quand on connaît une figure et son image ?",
 "On joint chaque point à son image : toutes ces droites se coupent en un même point, qui est le centre."],
["Moyen","Une homothétie de rapport 2 puis une autre de rapport 3, de même centre, qu'obtient-on ?",
 "Une homothétie de même centre et de rapport 6 : les rapports se multiplient."],
["Moyen","L'image d'un cercle par une homothétie est-elle un cercle ?",
 "Oui. Son rayon est multiplié par la valeur absolue du rapport, et son centre est l'image du centre."],
["Moyen","Deux figures homothétiques ont-elles la même forme ?",
 "Oui. Elles ont les mêmes angles et des longueurs proportionnelles : on dit qu'elles sont semblables."],
["Moyen","Le milieu d'un segment a-t-il pour image le milieu du segment image ?",
 "Oui. L'homothétie conserve les milieux, l'alignement et le parallélisme."],
["Moyen","Une homothétie de rapport négatif conserve-t-elle la forme de la figure ?",
 "Oui. Elle la retourne d'un demi-tour et change éventuellement sa taille, mais les angles restent identiques."],
["Difficile","Pourquoi les aires sont-elles multipliées par le carré du rapport, et non par le rapport ?",
 "Parce qu'une aire se calcule à partir de deux longueurs. Si chacune est multipliée par k, leur produit l'est par k × k = k²."],
["Difficile","Une homothétie de rapport 2 double-t-elle le périmètre ? Et l'aire ?",
 "Le périmètre est bien doublé, car c'est une longueur. L'aire, elle, est multipliée par 4."],
["Difficile","Peut-on toujours passer d'une figure à une figure semblable par une seule homothétie ?",
 "Non. Deux figures semblables peuvent aussi différer par une rotation ou une symétrie : l'homothétie ne suffit que si elles ont la même orientation et des côtés parallèles."],
["Difficile","Quelle est la différence entre une homothétie de rapport −2 et une homothétie de rapport 2 ?",
 "Les deux multiplient les longueurs par 2, mais l'image de rapport −2 se trouve de l'autre côté du centre et se lit retournée."],
["Difficile","Une homothétie a-t-elle toujours un point invariant ?",
 "Oui, son centre — sauf pour le rapport 1, où tous les points le sont. C'est ce qui la distingue d'une translation, qui n'en a aucun."],
["Difficile","Comment enchaîner une homothétie de rapport 1/2 pour revenir à la figure de départ ?",
 "En appliquant ensuite une homothétie de même centre et de rapport 2, puisque 1/2 × 2 = 1."],
["Difficile","Sur un quadrillage, pourquoi un rapport de 1/2 n'est-il pas toujours constructible ?",
 "Parce que l'image d'un point doit retomber sur un nœud. Il faut que les écarts au centre soient pairs, sinon l'image tomberait au milieu d'une case."],
["Difficile","Une homothétie peut-elle transformer un carré en rectangle non carré ?",
 "Non. Elle conserve les angles et les proportions : un carré a toujours pour image un carré."],
["Difficile","Que peut-on dire de deux segments homothétiques l'un de l'autre ?",
 "Ils sont parallèles, et leurs longueurs sont proportionnelles dans le rapport de l'homothétie."],
["Difficile","Comment l'homothétie explique-t-elle les agrandissements de photographies ?",
 "Agrandir une image, c'est lui appliquer une homothétie : toutes les longueurs sont multipliées par un même nombre, les angles ne changent pas, et l'aire est multipliée par le carré de ce nombre."],
];

/* ═══ APERÇU ═══ */
if (APERCU) {
  alea = mulberry32(GRAINE);
  const figs = genererFigures(FIGURES);
  const g = {}, d = {}, kk = {};
  figs.forEach(f => { g[f.geste] = (g[f.geste] || 0) + 1;
    d[f.difficulty] = (d[f.difficulty] || 0) + 1;
    const m = f.content.match(/rapport (\S+)\./); if (m) kk[m[1]] = (kk[m[1]] || 0) + 1; });
  const dc = {}; COURS.forEach(c => dc[c[0]] = (dc[c[0]] || 0) + 1);
  console.log(`Famille « Cours » : ${COURS.length} questions.`);
  console.log(`  Facile ${dc.Facile || 0} · Moyen ${dc.Moyen || 0} · Difficile ${dc.Difficile || 0}\n`);
  console.log(`Famille « Construction des homothéties » : ${figs.length} exercices.`);
  console.log(`  Tracés ${g.segments || 0} · Coloriages ${g.cases || 0}`);
  console.log(`  Facile ${d.Facile || 0} · Moyen ${d.Moyen || 0} · Difficile ${d.Difficile || 0}`);
  console.log(`  Rapports : ${Object.entries(kk).map(([a, b]) => `${a} (${b})`).join(" · ")}`);
  const s = figs.find(f => f.geste === "segments"), c = figs.find(f => f.geste === "cases");
  console.log("\nExemple de tracé :\n  " + s.content);
  console.log("  centre  : " + JSON.stringify(s.interactif.axe));
  console.log("  départ  : " + JSON.stringify(s.interactif.fixe.segments));
  console.log("  réponse : " + JSON.stringify(s.interactif.reponse.segments));
  console.log("\nExemple de coloriage :\n  " + c.content);
  console.log("  départ  : " + JSON.stringify(c.interactif.fixe.cases));
  console.log("  réponse : " + JSON.stringify(c.interactif.reponse.cases));
  console.log("\n  " + c.solution.replace(/\n/g, "\n  "));
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
       FROM exercises WHERE chapitre ILIKE '%homoth%' ORDER BY id`);
  const rows = brut.filter(r => cle(r.chapitre).includes("homothetie"));
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = rows.length ? maj(rows, "chapitre", "Homothéties") : "Homothéties";
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s) en place.`);
  if (!rows.length) console.log("⚠ Chapitre vide. Chapitres approchants : " +
    ([...new Set(brut.map(r => r.chapitre))].join(" | ") || "(aucun)"));
  else {
    const g = new Map();
    rows.forEach(r => { const k = r.famille || "(sans famille)"; g.set(k, (g.get(k) || 0) + 1); });
    console.log("\nFamilles à supprimer :");
    console.table([...g.entries()].map(([famille, n]) => ({ famille, n })));
  }

  alea = mulberry32(GRAINE);
  const figs = genererFigures(FIGURES);
  const modele = { level: maj(rows, "level", "college"), subject: maj(rows, "subject", "Géométrie"),
                   classe: maj(rows, "classe", "3ème") };
  console.log("\nÀ créer :");
  console.table([
    { famille: "Cours", n: COURS.length, note: "questions de cours" },
    { famille: "Construction des homothéties", n: figs.length,
      note: `${figs.filter(f => f.geste === "segments").length} tracés · ${figs.filter(f => f.geste === "cases").length} coloriages` }]);
  console.log(`Colonnes reprises : classe ${modele.classe} · matière ${modele.subject} · niveau ${modele.level}`);

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`homothetie-avant-refonte-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : homothetie-avant-refonte-${stamp}.json`);
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

  const LOT = 50;
  for (let i = 0; i < figs.length; i += LOT) {
    const lot = figs.slice(i, i + LOT), par = [];
    lot.forEach((f, j) => par.push(
      `Construction des homothéties ${i + j + 1}`, f.content, modele.level, modele.subject,
      f.difficulty, f.solution, modele.classe, CHAPITRE, JSON.stringify(f.interactif)));
    await pool.query(
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution,
         classe, chapitre, type, famille, interactif)
       VALUES ${lot.map((_, j) => { const b = j * 9;
         return `($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},'exercice','Construction des homothéties',$${b+9}::jsonb)`;
       }).join(",")}`, par);
    console.log(`  ${Math.min(i + LOT, figs.length)} / ${figs.length}`);
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n,
            count(interactif)::int AS interactifs
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAPITRE]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
