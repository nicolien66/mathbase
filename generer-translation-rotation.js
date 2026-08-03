/* MathBase — generer-translation-rotation.js
   Chapitre « Translation et rotation » : refonte complète.

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. SUPPRIME toutes les familles existantes du chapitre.
   2. Crée « Cours » : 32 questions sur le vecteur, le glissement, le centre
      et l'angle de rotation, les propriétés conservées, et ce qui distingue
      ces transformations des symétries.
   3. Crée « Rotation et translation » : 250 exercices dans l'espace
      quadrillage — 100 translations, 100 rotations, 50 composées.
      L'élève trace ou colorie l'image finale de la figure.

   ── LES FORMULES ─────────────────────────────────────────────────────────
   Repère écran : x vers la droite, y vers le BAS. Une rotation « horaire »
   telle que l'élève la voit s'écrit donc (x, y) ↦ (a − (y − b), b + (x − a)).

     translation de vecteur (u, v)
        nœud et case : (x, y) ↦ (x + u, y + v)
     rotation de centre (a, b), quart de tour horaire
        nœud : (x, y) ↦ (a − y + b,  b + x − a)
        case : (x, y) ↦ (a + b − y − 1,  b − a + x)
     demi-tour : (x, y) ↦ (2a − x, 2b − y) pour un nœud — c'est la symétrie
        centrale, ce que le vérificateur contrôle explicitement.

   Le décalage d'une demi-case explique le « −1 » : une case est repérée par
   son coin, mais c'est son CENTRE qui tourne. Toutes ces formules ont été
   vérifiées avant d'être codées.

   ── PRÉREQUIS ────────────────────────────────────────────────────────────
   quadrillage.js dans public/ dans la version qui dessine les vecteurs et les
   arcs de rotation, et l'application branchée par patch-interactif.js.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node generer-translation-rotation.js --apercu
     node generer-translation-rotation.js
     node generer-translation-rotation.js --execute
   Options : --graine N (20260809) · --garder-familles
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU = ARGS.includes("--apercu");
const GARDER = ARGS.includes("--garder-familles");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const GRAINE = opt("--graine", 20260809);
const N_TRANS = opt("--translations", 100);
const N_ROT   = opt("--rotations", 100);
const N_MIX   = opt("--composees", 50);

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

const COLS = 12, ROWS = 12;

/* ═══ TRANSFORMATIONS ═══ */
const trNode = (n, T) => [n[0] + T.u, n[1] + T.v];
const trCase = (c, T) => [c[0] + T.u, c[1] + T.v];
/* 270° horaire = 90° antihoraire, et réciproquement : on ramène tout à un
   quart de tour avant d'appliquer la formule. */
function quart(R) {
  if (R.angle === 180) return null;
  const h = R.sens === "horaire";
  return R.angle === 270 ? !h : h;
}
function rotNode(n, R) {
  const dx = n[0] - R.x, dy = n[1] - R.y;
  const h = quart(R);
  if (h === null) return [R.x - dx, R.y - dy];
  return h ? [R.x - dy, R.y + dx] : [R.x + dy, R.y - dx];
}
function rotCase(c, R) {
  const cx = c[0] + 0.5, cy = c[1] + 0.5, dx = cx - R.x, dy = cy - R.y;
  const h = quart(R);
  const p = h === null ? [R.x - dx, R.y - dy]
    : (h ? [R.x - dy, R.y + dx] : [R.x + dy, R.y - dx]);
  return [p[0] - 0.5, p[1] - 0.5];
}
const appliqueN = (n, T) => T.type === "t" ? trNode(n, T) : rotNode(n, T);
const appliqueC = (c, T) => T.type === "t" ? trCase(c, T) : rotCase(c, T);

const okCase = c => c[0] >= 0 && c[0] < COLS && c[1] >= 0 && c[1] < ROWS;
const okNode = n => n[0] >= 0 && n[0] <= COLS && n[1] >= 0 && n[1] <= ROWS;

/* ═══ FORMES ═══ (compactes : leur image doit tenir dans la grille) */
function formeCases(x0, y0, ampleur) {
  const G = ampleur === "grande";
  const type = pick(G ? ["rect", "escalier", "creux", "chemin"]
                      : ["rect", "escalier", "L", "T", "diagonale", "chemin"]);
  const out = new Set(), poser = c => out.add(cleC(c));
  if (type === "rect") { const w = ri(G ? 3 : 2, G ? 4 : 3), h = ri(G ? 3 : 2, G ? 4 : 3);
    for (let i = 0; i < w; i++) for (let j = 0; j < h; j++) poser([x0 + i, y0 + j]); }
  else if (type === "escalier") { const n = ri(G ? 4 : 3, G ? 4 : 3);
    for (let k = 0; k < n; k++) for (let j = 0; j <= k; j++) poser([x0 + k, y0 + j]); }
  else if (type === "L") { const a = ri(3, 4), b = ri(2, 3);
    for (let j = 0; j < a; j++) poser([x0, y0 + j]);
    for (let i = 1; i < b; i++) poser([x0 + i, y0 + a - 1]); }
  else if (type === "T") { const w = ri(3, 4);
    for (let i = 0; i < w; i++) poser([x0 + i, y0]);
    for (let j = 1; j < ri(2, 3); j++) poser([x0 + (w >> 1), y0 + j]); }
  else if (type === "creux") { const w = ri(3, 4), h = ri(3, 4);
    for (let i = 0; i < w; i++) for (let j = 0; j < h; j++)
      if (i === 0 || j === 0 || i === w - 1 || j === h - 1) poser([x0 + i, y0 + j]); }
  else if (type === "diagonale") { const n = ri(3, 4);
    for (let k = 0; k < n; k++) { poser([x0 + k, y0 + k]); if (alea() > .5) poser([x0 + k + 1, y0 + k]); } }
  else { let c = [x0, y0];
    for (let k = 0; k < ri(G ? 8 : 5, G ? 11 : 7); k++) { poser(c);
      const d = pick([[1, 0], [0, 1], [1, 1], [0, -1]]); c = [c[0] + d[0], c[1] + d[1]]; } }
  const l = [...out].map(k => k.split(",").map(Number));
  return l.length >= 4 ? l : null;
}
function formeSegments(x0, y0, ampleur) {
  const G = ampleur === "grande";
  const type = pick(G ? ["brisee", "zigzag", "maison", "quadri"]
                      : ["brisee", "triangle", "quadri", "zigzag", "fleche", "maison"]);
  const pts = [];
  if (type === "triangle") { const w = ri(2, 3), h = ri(2, 3);
    pts.push([x0, y0], [x0 + w, y0], [x0 + ri(0, w), y0 + h], [x0, y0]); }
  else if (type === "quadri") { const w = ri(2, 3), h = ri(2, 3);
    pts.push([x0, y0], [x0 + w, y0], [x0 + w - ri(0, 1), y0 + h], [x0 + ri(0, 1), y0 + h], [x0, y0]); }
  else if (type === "maison") { const w = ri(2, 3), h = ri(2, 3);
    pts.push([x0, y0 + h], [x0, y0 + 1], [x0 + Math.ceil(w / 2), y0],
             [x0 + w, y0 + 1], [x0 + w, y0 + h], [x0, y0 + h]); }
  else if (type === "zigzag") { let p = [x0, y0]; pts.push(p);
    for (let k = 0; k < ri(G ? 4 : 3, G ? 6 : 4); k++) {
      p = [p[0] + ri(1, 2), p[1] + (k % 2 ? -1 : 1) * ri(1, 2)]; pts.push(p); } }
  else if (type === "fleche") { const w = ri(2, 3);
    pts.push([x0, y0 + 1], [x0 + w, y0 + 1], [x0 + w - 1, y0], [x0 + w, y0 + 1], [x0 + w - 1, y0 + 2]); }
  else { let p = [x0, y0]; pts.push(p);
    for (let k = 0; k < ri(G ? 4 : 3, G ? 6 : 4); k++) {
      const d = pick([[1, 1], [1, -1], [2, 0], [0, 2], [1, 2]]);
      p = [p[0] + d[0], p[1] + (alea() > .5 ? d[1] : -d[1])]; pts.push(p); } }
  const segs = [], uniq = new Map();
  for (let i = 0; i < pts.length - 1; i++) {
    if (cleC(pts[i]) === cleC(pts[i + 1])) return null;
    uniq.set(cleS([pts[i], pts[i + 1]]), [pts[i], pts[i + 1]]);
  }
  const l = [...uniq.values()];
  return l.length >= 3 ? l : null;
}

/* ═══ UNE FIGURE + SA TRANSFORMATION ═══ */
const VECTEURS = [[3,0],[4,0],[5,0],[0,3],[0,4],[-3,0],[0,-3],[3,2],[2,3],[4,3],[3,-2],[-3,2],[-2,-3],[4,-3],[-4,3]];
const CENTRES = [{x:6,y:6},{x:5,y:6},{x:6,y:5},{x:7,y:6},{x:6,y:7}];
/* 270° dans un sens équivaut à 90° dans l'autre, mais l'énoncé n'est pas le
   même : l'élève doit savoir lire les deux formulations. */
const ANGLES = [{angle:90,sens:"horaire"},{angle:90,sens:"antihoraire"},
                {angle:180,sens:"horaire"},{angle:270,sens:"horaire"},{angle:270,sens:"antihoraire"}];

function tirerTransfo(kind) {
  if (kind === "t") { const v = pick(VECTEURS); return { type: "t", u: v[0], v: v[1] }; }
  const c = pick(CENTRES), a = pick(ANGLES);
  return { type: "r", x: c.x, y: c.y, angle: a.angle, sens: a.sens, nom: "O" };
}
/* repère affiché : le vecteur est matérialisé par une flèche posée dans un
   coin dégagé, de façon à ne pas recouvrir la figure */
function repereDe(T, occupe) {
  if (T.type !== "t") return { type: "r", x: T.x, y: T.y, angle: T.angle, sens: T.sens, nom: "O" };
  /* On cherche un emplacement où la flèche tienne ENTIÈREMENT dans la grille
     et ne recouvre pas la figure. On balaie tous les nœuds en partant des
     bords, puis on se contente du premier emplacement valide même s'il
     chevauche : une flèche hors cadre serait invisible, ce qui est pire. */
  const candidats = [];
  for (let y = 0; y <= ROWS; y++) for (let x = 0; x <= COLS; x++) {
    const de = [x, y], vers = [x + T.u, y + T.v];
    if (!okNode(de) || !okNode(vers)) continue;
    const bord = Math.min(x, COLS - x, y, ROWS - y);          // priorité aux bords
    const gene = occupe.has(cleC(de)) || occupe.has(cleC(vers)) ? 1 : 0;
    candidats.push({ de, vers, score: gene * 100 + bord });
  }
  if (!candidats.length) return { type: "t", de: [0, 0], vers: [T.u, T.v], nom: "v" };
  candidats.sort((a, b) => a.score - b.score);
  const c = candidats[0];
  return { type: "t", de: c.de, vers: c.vers, nom: "v" };
}

function figure(geste, kinds, ampleur) {
  for (let essai = 0; essai < 200; essai++) {
    const Ts = kinds.map(tirerTransfo);
    const x0 = ri(1, COLS - 5), y0 = ri(1, ROWS - 5);
    if (geste === "cases") {
      const f = formeCases(x0, y0, ampleur);
      if (!f || !f.every(okCase)) continue;
      let cur = f, etapes = [];
      for (const T of Ts) { cur = cur.map(c => appliqueC(c, T));
        if (!cur.every(okCase)) { cur = null; break; } etapes.push(cur); }
      if (!cur) continue;
      if (new Set(cur.map(cleC)).size !== cur.length) continue;
      /* départ et arrivée ne doivent pas se recouvrir : sinon la consigne
         devient illisible et la correction ambiguë */
      const dep = new Set(f.map(cleC));
      if (cur.some(c => dep.has(cleC(c)))) continue;
      return { Ts, fixe: { cases: f, segments: [] }, reponse: { cases: cur, segments: [] } };
    } else {
      const f = formeSegments(x0, y0, ampleur);
      if (!f || !f.every(s => s.every(okNode))) continue;
      let cur = f;
      for (const T of Ts) { cur = cur.map(s => [appliqueN(s[0], T), appliqueN(s[1], T)]);
        if (!cur.every(s => s.every(okNode))) { cur = null; break; } }
      if (!cur) continue;
      if (new Set(cur.map(cleS)).size !== cur.length) continue;
      const dep = new Set(f.map(cleS));
      if (cur.some(s => dep.has(cleS(s)))) continue;
      return { Ts, fixe: { cases: [], segments: f }, reponse: { cases: [], segments: cur } };
    }
  }
  return null;
}

/* ═══ TEXTES ═══ */
/* L'angle s'exprime en DEGRÉS, comme dans les énoncés officiels. Le sens
   reste indispensable : 90° horaire et 90° antihoraire ne donnent pas la même
   image. Pour 180° il n'a aucune importance, on ne le mentionne donc pas. */
const sensTxt = R => R.angle === 180
  ? "d'angle 180°"
  : `d'angle ${R.angle}° dans le sens ${R.sens === "horaire" ? "des aiguilles d'une montre" : "inverse des aiguilles d'une montre"}`;
const vectTxt = T => `(${T.u >= 0 ? T.u : "\u2212" + (-T.u)} ; ${T.v >= 0 ? T.v : "\u2212" + (-T.v)})`;
function decritTransfo(T) {
  return T.type === "t"
    ? `la translation de vecteur v, représenté par la flèche`
    : `la rotation de centre O et ${sensTxt(T)}`;
}
function methodeTransfo(T, geste) {
  if (T.type === "t")
    return `Chaque point glisse de la même façon : ${Math.abs(T.u)} case${Math.abs(T.u) > 1 ? "s" : ""} vers la ${T.u >= 0 ? "droite" : "gauche"}` +
      (T.u === 0 ? "" : " et ") + `${Math.abs(T.v)} vers le ${T.v >= 0 ? "bas" : "haut"}, comme l'indique la flèche. La figure garde la même forme, la même taille et la même orientation.`;
  if (T.angle === 180)
    return `Rotation de 180° autour de O, soit un demi-tour : chaque point M a une image M' telle que O soit le MILIEU de [MM']. C'est aussi la symétrie de centre O.`;
  return `Rotation de ${T.angle}° autour de O dans le sens ${T.sens === "horaire" ? "des aiguilles d'une montre" : "inverse des aiguilles d'une montre"}, soit un quart de tour : chaque point reste à la même distance de O, et la figure pivote d'un angle droit.`;
}

/* ═══ CONSTRUCTION DES EXERCICES ═══ */
const REPART = { Facile: 0.20, Moyen: 0.30, Difficile: 0.50 };
const DIFF = (n, geste) => geste === "segments"
  ? (n <= 3 ? "Facile" : n <= 5 ? "Moyen" : "Difficile")
  : (n <= 5 ? "Facile" : n <= 8 ? "Moyen" : "Difficile");

function genererLot(n, kinds, etiquette) {
  const quota = { Facile: Math.round(n * REPART.Facile), Moyen: Math.round(n * REPART.Moyen) };
  quota.Difficile = n - quota.Facile - quota.Moyen;
  const vues = new Set(), vivier = { Facile: [], Moyen: [], Difficile: [] };
  const viser = { Facile: "petite", Moyen: "petite", Difficile: "grande" };
  let essais = 0;
  while (essais < n * 900) {
    essais++;
    const manquants = ["Difficile", "Moyen", "Facile"].filter(d => vivier[d].length < quota[d] * 3);
    if (!manquants.length) break;
    const visee = manquants[essais % manquants.length];
    const geste = essais % 2 === 0 ? "cases" : "segments";
    const f = figure(geste, kinds, viser[visee]); if (!f) continue;
    const e = JSON.stringify([f.Ts, f.fixe]); if (vues.has(e)) continue;
    vues.add(e);
    const taille = geste === "cases" ? f.fixe.cases.length : f.fixe.segments.length;
    vivier[DIFF(taille, geste)].push({ f, geste, taille });
  }
  const choisis = [];
  const prendre = (d, k) => {
    const dispo = vivier[d], cases = dispo.filter(x => x.geste === "cases"),
          segs = dispo.filter(x => x.geste === "segments");
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

  return choisis.slice(0, n).map(({ f, geste, taille, d }) => {
    const occupe = new Set([...f.fixe.cases.map(cleC), ...f.reponse.cases.map(cleC),
      ...f.fixe.segments.flat().map(cleC), ...f.reponse.segments.flat().map(cleC)]);
    const reperes = f.Ts.map(T => repereDe(T, occupe));
    const quoi = geste === "cases" ? "Colorie les cases de l'image" : "Trace l'image";
    const enTete = geste === "cases" ? "La figure grise est dessinée sur le quadrillage."
                                     : "La ligne brisée grise est tracée sur le quadrillage.";
    const consigne = f.Ts.length === 1
      ? `${quoi} de cette figure par ${decritTransfo(f.Ts[0])}.`
      : `${quoi} obtenue en appliquant d'abord ${decritTransfo(f.Ts[0])}, puis ${decritTransfo(f.Ts[1])}.`;
    const methode = f.Ts.map((T, i) => (f.Ts.length > 1 ? `Étape ${i + 1} — ` : "") + methodeTransfo(T, geste)).join("\n");
    return {
      geste, difficulty: d, etiquette,
      content: `${enTete} ${consigne}`,
      solution: `${methode}\n${geste === "cases"
        ? `L'image compte ${taille} case${taille > 1 ? "s" : ""}, comme la figure de départ : ${f.Ts.length > 1 ? "ces transformations conservent" : (f.Ts[0].type === "t" ? "la translation conserve" : "la rotation conserve")} les longueurs et les aires.`
        : `On construit l'image de chaque sommet, puis on relie dans le même ordre (${taille} segment${taille > 1 ? "s" : ""}). Les longueurs sont conservées.`}`,
      interactif: { widget: "quadrillage", COLS, ROWS, geste,
        reperes, fixe: f.fixe, reponse: f.reponse }
    };
  });
}

/* ═══ QUESTIONS DE COURS ═══ */
const COURS = [
["Facile","Qu'appelle-t-on une translation ?",
 "C'est un glissement : tous les points de la figure se déplacent dans la même direction, dans le même sens et de la même longueur."],
["Facile","Par quoi une translation est-elle entièrement définie ?",
 "Par un vecteur, qui donne à la fois la direction, le sens et la longueur du glissement."],
["Facile","Qu'appelle-t-on une rotation ?",
 "C'est un pivotement autour d'un point fixe appelé centre, d'un angle donné et dans un sens donné."],
["Facile","Que faut-il préciser pour définir une rotation ?",
 "Trois choses : le centre, l'angle, et le sens de rotation (celui des aiguilles d'une montre ou l'inverse)."],
["Facile","Que devient le centre par une rotation ?",
 "Il est son propre image : c'est le seul point qui ne bouge pas."],
["Facile","Une translation possède-t-elle des points invariants ?",
 "Non, aucun — sauf si le vecteur est nul, auquel cas rien ne bouge. Tous les points glissent."],
["Facile","La translation conserve-t-elle les longueurs ?",
 "Oui. Elle conserve les longueurs, les angles, les aires, l'alignement, le parallélisme et l'orientation."],
["Facile","La rotation conserve-t-elle les longueurs ?",
 "Oui, comme la translation. Seule la position de la figure change, pas ses dimensions."],
["Facile","Que devient une droite par une translation ?",
 "Une droite qui lui est PARALLÈLE. La direction n'est jamais modifiée par un glissement."],
["Facile","Comment note-t-on le vecteur d'une translation qui déplace A en B ?",
 "On le note vecteur AB. Tous les points se déplacent alors exactement comme A s'est déplacé jusqu'à B."],
["Facile","Une rotation d'un demi-tour, à quoi correspond-elle ?",
 "À une symétrie centrale, de centre le centre de rotation. Un demi-tour vaut 180°."],
["Facile","Après une rotation d'un quart de tour, un segment horizontal devient-il horizontal ?",
 "Non, il devient vertical : un quart de tour fait pivoter toutes les directions d'un angle droit."],
["Moyen","Quelle différence y a-t-il entre une translation et une symétrie centrale ?",
 "La translation fait glisser la figure sans la retourner et n'a aucun point fixe. La symétrie centrale fait faire un demi-tour autour d'un point qui, lui, reste fixe."],
["Moyen","Comment construire l'image d'un point par une translation, sur un quadrillage ?",
 "On reproduit le déplacement du vecteur : on compte le même nombre de cases horizontalement puis verticalement, à partir du point."],
["Moyen","Comment vérifier qu'une figure est bien l'image d'une autre par une translation ?",
 "En joignant chaque point à son image : tous les segments obtenus doivent être parallèles, de même longueur et de même sens."],
["Moyen","Comment construire l'image d'un point par une rotation d'un quart de tour, sur un quadrillage ?",
 "On repère le déplacement du point par rapport au centre (tant de cases à droite, tant vers le bas), puis on échange ces deux nombres en changeant un signe selon le sens du pivotement."],
["Moyen","Deux translations enchaînées, qu'obtient-on ?",
 "Encore une translation, dont le vecteur est la somme des deux vecteurs."],
["Moyen","Une rotation de 90° puis une autre de 90° dans le même sens et de même centre, qu'obtient-on ?",
 "Une rotation de 180° autour de ce centre, c'est-à-dire une symétrie centrale."],
["Moyen","La translation conserve-t-elle l'orientation de la figure ?",
 "Oui. Une figure et son image se lisent dans le même sens : rien n'est retourné, contrairement à la symétrie axiale."],
["Moyen","Quatre rotations successives d'un quart de tour autour du même centre, qu'obtient-on ?",
 "La figure de départ : quatre quarts de tour font un tour complet, soit 360°."],
["Moyen","Que peut-on dire de la distance d'un point au centre après une rotation ?",
 "Elle est inchangée. Tous les points décrivent un arc de cercle centré sur le centre de rotation."],
["Moyen","Un quart de tour dans le sens des aiguilles d'une montre et un quart de tour dans l'autre sens donnent-ils le même résultat ?",
 "Non, sauf cas particuliers. Les deux images sont différentes : elles sont symétriques l'une de l'autre par rapport au centre."],
["Difficile","Pourquoi dit-on que translation et rotation sont des « déplacements » ?",
 "Parce qu'elles conservent les longueurs ET l'orientation : on peut passer de la figure à son image en la faisant glisser ou pivoter sur la feuille, sans jamais la retourner."],
["Difficile","Comment retrouver le vecteur d'une translation à partir d'une figure et de son image ?",
 "On joint un point à son image : ce segment orienté EST le vecteur. Un seul couple suffit, et l'on vérifie avec un second point."],
["Difficile","Comment retrouver le centre d'une rotation d'un demi-tour à partir d'une figure et de son image ?",
 "On joint un point à son image et l'on prend le milieu de ce segment : c'est le centre, puisqu'un demi-tour est une symétrie centrale."],
["Difficile","Une translation de vecteur nul, qu'est-ce que cela donne ?",
 "Rien ne bouge : chaque point est sa propre image. On parle de transformation identique."],
["Difficile","Peut-on toujours passer d'une figure à son image par translation en une seule rotation ?",
 "Non. Une translation de vecteur non nul n'a aucun point fixe, alors qu'une rotation en a toujours un, son centre. Ce sont deux transformations différentes."],
["Difficile","Après une rotation d'un quart de tour, l'aire de la figure change-t-elle ?",
 "Non. Toutes ces transformations conservent les aires : seule la position change."],
["Difficile","Une figure et son image par une rotation de 90° peuvent-elles se superposer sans bouger la feuille ?",
 "Oui, en faisant pivoter la figure d'un quart de tour. Il n'est jamais nécessaire de la retourner, contrairement à une symétrie axiale."],
["Difficile","Quel lien y a-t-il entre le sens de rotation et le résultat obtenu ?",
 "Un quart de tour horaire et un quart de tour antihoraire mènent à deux positions distinctes, séparées d'un demi-tour. Préciser le sens est donc indispensable."],
["Difficile","Enchaîner une translation puis une rotation donne-t-il le même résultat que la rotation puis la translation ?",
 "En général non : l'ordre compte. On obtient deux images différentes, sauf cas particuliers."],
["Difficile","Comment reconnaître, sur un quadrillage, si deux figures se déduisent par translation ou par rotation ?",
 "Si les deux figures ont la même orientation (mêmes directions de côtés), c'est une translation. Si elles sont pivotées l'une par rapport à l'autre, c'est une rotation."],
];

/* ═══ APERÇU ═══ */
function tout() {
  alea = mulberry32(GRAINE);
  const t = genererLot(N_TRANS, ["t"], "translation");
  const r = genererLot(N_ROT, ["r"], "rotation");
  const m = genererLot(N_MIX, [pick(["t", "r"]), pick(["t", "r"])], "composée")
    .map((e, i) => e);
  return { t, r, m, tous: [...t, ...r, ...m] };
}
if (APERCU) {
  alea = mulberry32(GRAINE);
  const T = genererLot(N_TRANS, ["t"], "translation");
  const R = genererLot(N_ROT, ["r"], "rotation");
  const M = genererLot(N_MIX, ["t", "r"], "composée");
  const stat = l => { const g = {}, d = {};
    l.forEach(x => { g[x.geste] = (g[x.geste] || 0) + 1; d[x.difficulty] = (d[x.difficulty] || 0) + 1; });
    return `${l.length} — coloriages ${g.cases || 0} · tracés ${g.segments || 0} — F ${d.Facile || 0} · M ${d.Moyen || 0} · D ${d.Difficile || 0}`; };
  const dc = {}; COURS.forEach(c => dc[c[0]] = (dc[c[0]] || 0) + 1);
  console.log(`Famille « Cours » : ${COURS.length} questions.`);
  console.log(`  Facile ${dc.Facile || 0} · Moyen ${dc.Moyen || 0} · Difficile ${dc.Difficile || 0}\n`);
  console.log("Famille « Rotation et translation » :");
  console.log("  Translations : " + stat(T));
  console.log("  Rotations    : " + stat(R));
  console.log("  Composées    : " + stat(M));
  console.log("  TOTAL        : " + (T.length + R.length + M.length));
  console.log("\nExemple de translation :\n  " + T[0].content);
  console.log("  repère  : " + JSON.stringify(T[0].interactif.reperes));
  console.log("\nExemple de rotation :\n  " + R[0].content);
  console.log("  repère  : " + JSON.stringify(R[0].interactif.reperes));
  console.log("\nExemple composé :\n  " + M[0].content);
  console.log("  repères : " + JSON.stringify(M[0].interactif.reperes));
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
       FROM exercises WHERE chapitre ILIKE '%translation%' OR chapitre ILIKE '%rotation%' ORDER BY id`);
  const rows = brut.filter(r => { const c = cle(r.chapitre);
    return c.includes("translation") && c.includes("rotation"); });
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = rows.length ? maj(rows, "chapitre", "Translation et rotation") : "Translation et rotation";
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s) en place.`);
  if (!rows.length) {
    console.log("⚠ Chapitre vide ou introuvable. Chapitres approchants :");
    console.log("  " + [...new Set(brut.map(r => r.chapitre))].join(" | "));
  } else {
    const g = new Map();
    rows.forEach(r => { const k = r.famille || "(sans famille)"; g.set(k, (g.get(k) || 0) + 1); });
    console.log("\nFamilles à supprimer :");
    console.table([...g.entries()].map(([famille, n]) => ({ famille, n })));
  }

  alea = mulberry32(GRAINE);
  const T = genererLot(N_TRANS, ["t"], "translation");
  const R = genererLot(N_ROT, ["r"], "rotation");
  const M = genererLot(N_MIX, ["t", "r"], "composée");
  const figs = [...T, ...R, ...M];
  const modele = { level: maj(rows, "level", "college"), subject: maj(rows, "subject", "Géométrie"),
                   classe: maj(rows, "classe", "5ème") };
  console.log("\nÀ créer :");
  console.table([
    { famille: "Cours", n: COURS.length, note: "questions de cours" },
    { famille: "Rotation et translation", n: figs.length,
      note: `${T.length} translations · ${R.length} rotations · ${M.length} composées` }]);
  console.log(`Colonnes reprises : classe ${modele.classe} · matière ${modele.subject} · niveau ${modele.level}`);

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`translation-rotation-avant-refonte-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : translation-rotation-avant-refonte-${stamp}.json`);
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
      `Rotation et translation ${i + j + 1}`, f.content, modele.level, modele.subject,
      f.difficulty, f.solution, modele.classe, CHAPITRE, JSON.stringify(f.interactif)));
    await pool.query(
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution,
         classe, chapitre, type, famille, interactif)
       VALUES ${lot.map((_, j) => { const b = j * 9;
         return `($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},'exercice','Rotation et translation',$${b+9}::jsonb)`;
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
