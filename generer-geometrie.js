/* Polymates — generer-geometrie.js
   Porte à 100 exercices les familles de reconnaissance du chapitre de géométrie.

   ── CE QUI EST PRODUIT ───────────────────────────────────────────────────
   Des exercices À FIGURE (widget figures.js) : l'élève regarde un dessin et
   répond à une question à choix. La correction est locale, sans IA.

   · « Droite, segment, demi-droite » : reconnaître le type d'objet tracé.
     Le dessin porte le codage qui le distingue — un segment s'arrête à ses
     extrémités, une demi-droite est fléchée d'un seul côté, une droite des
     deux.
   · « Vocabulaire des figures » : centre, rayon, diamètre, corde, arc, mais
     aussi côtés, sommets, arêtes et diagonales des polygones et des solides.
   · « Droites perpendiculaires et parallèles » : reconnaître la position de
     deux droites. Pour le parallélisme, les énoncés s'appuient sur la
     propriété « deux droites perpendiculaires à une même droite sont
     parallèles entre elles », lisible sur le codage des angles droits.

   Le CODAGE GÉOMÉTRIQUE est posé par le widget : petit carré de l'angle
   droit, traits d'égalité, chevrons du parallélisme.

   · Répartition pour 100 : 20 faciles, 30 moyens, 50 difficiles.

   ── USAGE ────────────────────────────────────────────────────────────────
     node generer-geometrie.js --apercu
     node generer-geometrie.js --apercu "vocabulaire"
     $env:DATABASE_URL = "postgresql://..."
     node generer-geometrie.js            # simulation
     node generer-geometrie.js --execute
*/

"use strict";
const fs = require("fs");

const ARGS    = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260816);
const REPARTITION = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };

function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
let alea = mulberry32(GRAINE);
const ri   = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];
const melange = t => { const r = t.slice();
  for (let i = r.length - 1; i > 0; i--) { const j = ri(0, i); [r[i], r[j]] = [r[j], r[i]]; }
  return r; };

const L = 420, H = 260;
const NOMS = "ABCDEFGHIJKLMNOPRSTUV".split("");
const deuxNoms = () => { const m = melange(NOMS); return [m[0], m[1], m[2], m[3]]; };
const rad = d => d * Math.PI / 180;

/* ═══════════════ DROITE, SEGMENT, DEMI-DROITE ═══════════════ */
const TYPES = [
  { t: "segment",    nom: "Segment",
    dit: (a, b) => "Le trait s'arrête à ses deux extrémités : c'est le segment [" + a + b + "].",
    note: (a, b) => "[" + a + b + "]" },
  { t: "demidroite", nom: "Demi-droite",
    dit: (a, b) => "Le trait part de " + a + " et se prolonge indéfiniment vers " + b +
      " (la flèche l'indique) : c'est la demi-droite [" + a + b + ").",
    note: (a, b) => "[" + a + b + ")" },
  { t: "droite",     nom: "Droite",
    dit: (a, b) => "Le trait se prolonge indéfiniment des deux côtés (deux flèches) : " +
      "c'est la droite (" + a + b + ").",
    note: (a, b) => "(" + a + b + ")" },
];

function traitAlea() {
  /* Un trait bien dans le cadre, ni trop court ni vertical par hasard. */
  const ang = rad(ri(-40, 40) + (alea() < 0.5 ? 0 : 180));
  const cx = L / 2 + ri(-40, 40), cy = H / 2 + ri(-40, 40);
  const d = ri(60, 95);
  return [[cx - Math.cos(ang) * d, cy - Math.sin(ang) * d],
          [cx + Math.cos(ang) * d, cy + Math.sin(ang) * d]];
}

const M_TYPES = [
  /* Un seul objet à identifier. */
  function (d) {
    const T = d === "F" ? pick(TYPES) : pick(TYPES);
    const [A, B] = deuxNoms();
    const [a, b] = traitAlea();
    const el = [{ t: T.t, a: a, b: b },
                { t: "point", x: a[0], y: a[1], nom: A, pos: "haut" }];
    /* Le second point n'est marqué que s'il appartient à l'objet. */
    if (T.t !== "droite") el.push({ t: "point", x: b[0], y: b[1], nom: B, pos: "bas" });
    else el.push({ t: "point", x: b[0], y: b[1], nom: B, pos: "bas" });
    return {
      content: "Observe la figure : de quel objet s'agit-il ?",
      solution: T.dit(A, B) + "\nOn le note " + T.note(A, B) + ".",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        question: "De quel objet s'agit-il ?",
        options: TYPES.map(x => x.nom),
        reponse: { choix: T.nom },
        description: "un trait passant par les points " + A + " et " + B,
      },
    };
  },
  /* Notation à retrouver. */
  function (d) {
    if (d === "F") return null;
    const T = pick(TYPES);
    const [A, B] = deuxNoms();
    const [a, b] = traitAlea();
    const el = [{ t: T.t, a: a, b: b },
                { t: "point", x: a[0], y: a[1], nom: A, pos: "haut" },
                { t: "point", x: b[0], y: b[1], nom: B, pos: "bas" }];
    const options = melange(["[" + A + B + "]", "[" + A + B + ")", "(" + A + B + ")", "[" + B + A + ")"]);
    return {
      content: "Observe la figure : quelle est la bonne notation ?",
      solution: T.dit(A, B) + "\nLa notation correcte est " + T.note(A, B) + ".",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        question: "Quelle notation correspond à cette figure ?",
        options: options,
        reponse: { choix: T.note(A, B) },
        description: "un trait passant par " + A + " et " + B,
      },
    };
  },
  /* Trois objets sur la même figure (difficile). */
  function (d) {
    if (d !== "D") return null;
    const [A, B, C, D2] = deuxNoms();
    const ordre = melange(TYPES);
    const el = [];
    const y = [70, 130, 190];
    ordre.forEach((T, i) => {
      const a = [70, y[i]], b = [330, y[i]];
      el.push({ t: T.t, a: a, b: b });
      el.push({ t: "point", x: a[0], y: a[1], nom: NOMS[i * 2], pos: "gauche" });
      el.push({ t: "point", x: b[0], y: b[1], nom: NOMS[i * 2 + 1], pos: "droite" });
      el.push({ t: "texte", x: 40, y: y[i] + 5, s: (i + 1) + "." });
    });
    const cherche = pick(TYPES);
    const rang = ordre.findIndex(x => x.nom === cherche.nom) + 1;
    return {
      content: "Trois objets sont tracés. Lequel est " +
        (cherche.nom === "Segment" ? "un segment" :
         cherche.nom === "Droite" ? "une droite" : "une demi-droite") + " ?",
      solution: "Le numéro " + rang + ".\n" + cherche.dit(NOMS[(rang - 1) * 2], NOMS[(rang - 1) * 2 + 1]) +
        "\nRappel : le segment s'arrête à ses extrémités, la demi-droite porte une flèche " +
        "d'un seul côté, la droite en porte deux.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        question: "Lequel de ces trois objets est " +
          (cherche.nom === "Segment" ? "un segment" :
           cherche.nom === "Droite" ? "une droite" : "une demi-droite") + " ?",
        options: ["1", "2", "3"],
        reponse: { choix: String(rang) },
        description: "trois traits numérotés de 1 à 3",
      },
    };
  },
];

/* ═══════════════ VOCABULAIRE DES FIGURES ═══════════════ */

/* — le cercle et son vocabulaire — */
function figureCercle(quoi) {
  const O = [L / 2, H / 2], r = 85;
  const a1 = rad(ri(20, 70)), a2 = rad(ri(150, 210));
  const A = [O[0] + r * Math.cos(a1), O[1] - r * Math.sin(a1)];
  const B = [O[0] + r * Math.cos(a2), O[1] - r * Math.sin(a2)];
  const Cp = [O[0] - r, O[1]], Dp = [O[0] + r, O[1]];
  const el = [{ t: "cercle", c: O, r: r },
              { t: "point", x: O[0], y: O[1], nom: "O", pos: "bas" }];
  if (quoi === "rayon") {
    el.push({ t: "segment", a: O, b: A }, { t: "point", x: A[0], y: A[1], nom: "A", pos: "haut" });
  } else if (quoi === "diametre") {
    el.push({ t: "segment", a: Cp, b: Dp },
            { t: "point", x: Cp[0], y: Cp[1], nom: "C", pos: "gauche" },
            { t: "point", x: Dp[0], y: Dp[1], nom: "D", pos: "droite" });
  } else if (quoi === "corde") {
    el.push({ t: "segment", a: A, b: B },
            { t: "point", x: A[0], y: A[1], nom: "A", pos: "haut" },
            { t: "point", x: B[0], y: B[1], nom: "B", pos: "gauche" });
  } else if (quoi === "arc") {
    /* Angles tirés au hasard : un arc toujours identique ne produirait qu'un
       seul exercice, la déduplication éliminant tous les autres. */
    const de = ri(10, 60), fin = de + ri(70, 150);
    el.push({ t: "arc", c: O, r: r, de: de, a: fin },
            { t: "point", x: O[0] + r * Math.cos(rad(de)), y: O[1] - r * Math.sin(rad(de)), nom: "A", pos: "droite" },
            { t: "point", x: O[0] + r * Math.cos(rad(fin)), y: O[1] - r * Math.sin(rad(fin)), nom: "B", pos: "gauche" });
  }
  return el;
}

const CERCLE_Q = [
  { quoi: "rayon",     nom: "Un rayon",
    dit: "Le segment [OA] joint le centre O à un point du cercle : c'est un RAYON." },
  { quoi: "diametre",  nom: "Un diamètre",
    dit: "Le segment [CD] joint deux points du cercle EN PASSANT PAR le centre : c'est un DIAMÈTRE. " +
         "Il mesure le double d'un rayon." },
  { quoi: "corde",     nom: "Une corde",
    dit: "Le segment [AB] joint deux points du cercle sans passer par le centre : c'est une CORDE." },
  { quoi: "arc",       nom: "Un arc de cercle",
    dit: "La portion de cercle comprise entre A et B est un ARC de cercle." },
];

/* — polygones : côtés, sommets, diagonales — */
function polygoneRegulier(n, r, cx, cy, depart) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = rad(depart + i * 360 / n);
    pts.push([cx + r * Math.cos(a), cy - r * Math.sin(a)]);
  }
  return pts;
}
/* Options numériques toutes DIFFÉRENTES : proposer deux fois la même valeur
   trahirait la bonne réponse et fausserait la question. */
function optionsNum(bon, ecarts, suffixe) {
  const vus = new Set([bon]);
  const out = [bon];
  for (const e of melange(ecarts)) {
    const c = bon + e;
    if (c > 0 && !vus.has(c)) { vus.add(c); out.push(c); }
    if (out.length === 4) break;
  }
  let k = 1;
  while (out.length < 4) { const c = bon + k; if (!vus.has(c) && c > 0) { vus.add(c); out.push(c); } k++; }
  return melange(out).map(x => x + (suffixe || ""));
}

const NOMS_POLY = { 3: "triangle", 4: "quadrilatère", 5: "pentagone", 6: "hexagone", 8: "octogone" };
/* Nombre de diagonales d'un polygone à n côtés : n(n−3)/2. */
const nbDiagonales = n => n * (n - 3) / 2;

/* — solides : arêtes, sommets, faces — */
const SOLIDES = {
  "cube":        { sommets: 8,  aretes: 12, faces: 6 },
  "pavé droit":  { sommets: 8,  aretes: 12, faces: 6 },
  "pyramide à base carrée": { sommets: 5, aretes: 8, faces: 5 },
  "tétraèdre":   { sommets: 4,  aretes: 6,  faces: 4 },
  "prisme droit à base triangulaire": { sommets: 6, aretes: 9, faces: 5 },
};
/* Dessin en perspective cavalière, uniquement pour cube et pavé. */
function figurePave() {
  const x = 120, y = 80, w = 150, h = 100, dx = 45, dy = -32;
  const A = [x, y + h], B = [x + w, y + h], C = [x + w, y], D = [x, y];
  const A2 = [A[0] + dx, A[1] + dy], B2 = [B[0] + dx, B[1] + dy];
  const C2 = [C[0] + dx, C[1] + dy], D2 = [D[0] + dx, D[1] + dy];
  const seg = (a, b, p) => ({ t: "segment", a: a, b: b, style: p ? "pointille" : undefined });
  return [seg(A, B), seg(B, C), seg(C, D), seg(D, A),
          seg(B, B2), seg(C, C2), seg(D, D2), seg(A, A2, true),
          seg(A2, B2, true), seg(A2, D2, true), seg(B2, C2), seg(C2, D2)];
}

const M_VOCABULAIRE = [
  /* Cercle : nommer l'élément tracé. */
  function (d) {
    const q = pick(CERCLE_Q);
    return {
      content: "Sur cette figure, comment s'appelle l'élément tracé en plus du cercle ?",
      solution: q.dit,
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: figureCercle(q.quoi) },
        question: "Comment s'appelle l'élément tracé ?",
        options: CERCLE_Q.map(x => x.nom),
        reponse: { choix: q.nom },
        description: "un cercle de centre O",
      },
    };
  },
  /* Polygone : compter côtés ou sommets. */
  function (d) {
    const n = d === "F" ? pick([3, 4]) : pick([4, 5, 6, 8]);
    const quoi = pick(["côtés", "sommets"]);
    const pts = polygoneRegulier(n, 80, L / 2, H / 2, ri(0, 60));
    const el = [{ t: "polygone", pts: pts }];
    pts.forEach((p, i) => el.push({ t: "point", x: p[0], y: p[1], nom: NOMS[i],
      pos: p[1] < H / 2 ? "haut" : "bas" }));
    return {
      content: "Combien cette figure a-t-elle de " + quoi + " ?",
      solution: "C'est un " + NOMS_POLY[n] + " : il a " + n + " côtés et " + n + " sommets.\n" +
        "Dans un polygone, le nombre de côtés est toujours égal au nombre de sommets.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        question: "Combien cette figure a-t-elle de " + quoi + " ?",
        options: optionsNum(n, [-1, 1, 2, 3]),
        reponse: { choix: String(n) },
        description: "un polygone à " + n + " côtés",
      },
    };
  },
  /* Diagonales d'un polygone. */
  function (d) {
    if (d === "F") return null;
    const n = d === "M" ? pick([4, 5]) : pick([5, 6, 8]);
    const pts = polygoneRegulier(n, 80, L / 2, H / 2, ri(0, 60));
    const el = [{ t: "polygone", pts: pts }];
    pts.forEach((p, i) => el.push({ t: "point", x: p[0], y: p[1], nom: NOMS[i],
      pos: p[1] < H / 2 ? "haut" : "bas" }));
    /* On trace les diagonales issues d'un seul sommet, pour appuyer le calcul. */
    for (let i = 2; i < n - 1; i++)
      el.push({ t: "segment", a: pts[0], b: pts[i], style: "pointille" });
    const nd = nbDiagonales(n);
    return {
      content: "Combien ce polygone a-t-il de diagonales au total ?",
      solution: "Une diagonale joint deux sommets NON voisins.\n" +
        "De chaque sommet partent " + (n - 3) + " diagonales, et il y a " + n + " sommets : " +
        n + " × " + (n - 3) + " = " + (n * (n - 3)) + ".\n" +
        "Chaque diagonale étant comptée deux fois, on divise par 2 : " +
        (n * (n - 3)) + " ÷ 2 = " + nd + ".\n" +
        "Ce " + NOMS_POLY[n] + " a " + nd + " diagonales.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        question: "Combien ce polygone a-t-il de diagonales ?",
        options: optionsNum(nd, [1, -1, 2, -2, 3]),
        reponse: { choix: String(nd) },
        description: "un polygone à " + n + " côtés, avec les diagonales issues d'un sommet",
      },
    };
  },
  /* Solide : arêtes, sommets, faces. */
  function (d) {
    if (d === "F") return null;
    const nom = pick(["cube", "pavé droit"]);
    const s = SOLIDES[nom];
    const quoi = pick(["arêtes", "sommets", "faces"]);
    const bon = quoi === "arêtes" ? s.aretes : quoi === "sommets" ? s.sommets : s.faces;
    return {
      content: "Ce solide est un " + nom + ". Combien a-t-il de " + quoi + " ?",
      solution: "Un " + nom + " a " + s.sommets + " sommets, " + s.aretes + " arêtes et " +
        s.faces + " faces.\nSur la figure, les arêtes cachées sont en pointillés : " +
        "il ne faut pas les oublier dans le compte.\nRéponse : " + bon + " " + quoi + ".",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: figurePave() },
        question: "Combien ce solide a-t-il de " + quoi + " ?",
        options: optionsNum(bon, [2, -2, 4, -4, 1]),
        reponse: { choix: String(bon) },
        description: "un " + nom + " en perspective cavalière",
      },
    };
  },
  /* Cercle : question de relation (difficile). */
  function (d) {
    if (d !== "D") return null;
    const r = ri(2, 9);
    const O = [L / 2, H / 2], R = 85;
    const el = [{ t: "cercle", c: O, r: R },
                { t: "segment", a: [O[0] - R, O[1]], b: [O[0] + R, O[1]] },
                { t: "point", x: O[0], y: O[1], nom: "O", pos: "bas" },
                { t: "point", x: O[0] - R, y: O[1], nom: "C", pos: "gauche" },
                { t: "point", x: O[0] + R, y: O[1], nom: "D", pos: "droite" },
                { t: "texte", x: O[0], y: O[1] + 40, s: "rayon = " + r + " cm" }];
    return {
      content: "Le rayon de ce cercle mesure " + r + " cm. Quelle est la longueur du segment [CD] ?",
      solution: "[CD] passe par le centre O : c'est un DIAMÈTRE.\n" +
        "Un diamètre mesure le double du rayon : " + r + " × 2 = " + (r * 2) + " cm.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        question: "Quelle est la longueur de [CD] ?",
        options: optionsNum(r * 2, [-r, r * 2, 2, -2, 4], " cm"),
        reponse: { choix: String(r * 2) + " cm" },
        description: "un cercle de centre O et de diamètre [CD]",
      },
    };
  },
];

/* ═══════════════ PERPENDICULAIRES ET PARALLÈLES ═══════════════ */
const M_POSITION = [
  /* Deux droites : perpendiculaires, parallèles ou sécantes quelconques. */
  function (d) {
    const cas = pick(["perp", "para", "secantes"]);
    const el = [];
    const cx = L / 2, cy = H / 2;
    let sol, bonne;
    if (cas === "perp") {
      const ang = ri(-25, 25);
      const u = [Math.cos(rad(ang)), -Math.sin(rad(ang))];
      const v = [-u[1], u[0]];
      el.push({ t: "droite", a: [cx, cy], b: [cx + u[0] * 50, cy + u[1] * 50] });
      el.push({ t: "droite", a: [cx, cy], b: [cx + v[0] * 50, cy + v[1] * 50] });
      el.push({ t: "angledroit", s: [cx, cy], a: [cx + u[0] * 40, cy + u[1] * 40],
                b: [cx + v[0] * 40, cy + v[1] * 40] });
      el.push({ t: "texte", x: cx + u[0] * 150, y: cy + u[1] * 150 - 10, s: "(d)" });
      el.push({ t: "texte", x: cx + v[0] * 120, y: cy + v[1] * 120 - 10, s: "(d')" });
      bonne = "Perpendiculaires";
      sol = "Le petit carré à l'intersection signale un ANGLE DROIT : les deux droites " +
            "sont PERPENDICULAIRES. On note (d) ⊥ (d').";
    } else if (cas === "para") {
      const ang = ri(-25, 25);
      const u = [Math.cos(rad(ang)), -Math.sin(rad(ang))];
      const p = [-u[1], u[0]];
      const A = [cx - p[0] * 45, cy - p[1] * 45], B = [cx + p[0] * 45, cy + p[1] * 45];
      el.push({ t: "droite", a: A, b: [A[0] + u[0] * 50, A[1] + u[1] * 50] });
      el.push({ t: "droite", a: B, b: [B[0] + u[0] * 50, B[1] + u[1] * 50] });
      el.push({ t: "chevrons", a: [A[0] - u[0] * 60, A[1] - u[1] * 60],
                b: [A[0] + u[0] * 60, A[1] + u[1] * 60], n: 1 });
      el.push({ t: "chevrons", a: [B[0] - u[0] * 60, B[1] - u[1] * 60],
                b: [B[0] + u[0] * 60, B[1] + u[1] * 60], n: 1 });
      bonne = "Parallèles";
      sol = "Les chevrons identiques sur les deux droites codent le PARALLÉLISME : " +
            "elles ne se coupent jamais. On note (d) ∥ (d').";
    } else {
      const a1 = ri(-30, 10), a2 = a1 + ri(35, 65);   // ni 0 ni 90 d'écart
      const u = [Math.cos(rad(a1)), -Math.sin(rad(a1))];
      const v = [Math.cos(rad(a2)), -Math.sin(rad(a2))];
      el.push({ t: "droite", a: [cx, cy], b: [cx + u[0] * 50, cy + u[1] * 50] });
      el.push({ t: "droite", a: [cx, cy], b: [cx + v[0] * 50, cy + v[1] * 50] });
      el.push({ t: "point", x: cx, y: cy, nom: "I", pos: "bas" });
      bonne = "Sécantes seulement";
      sol = "Les deux droites se coupent en I, mais aucun angle droit n'est codé : " +
            "elles sont SÉCANTES sans être perpendiculaires.";
    }
    return {
      content: "Observe la figure : quelle est la position relative de ces deux droites ?",
      solution: sol,
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        question: "Quelle est la position relative de ces deux droites ?",
        options: ["Perpendiculaires", "Parallèles", "Sécantes seulement"],
        reponse: { choix: bonne },
        description: "deux droites tracées dans un cadre",
      },
    };
  },
  /* LA PROPRIÉTÉ : deux droites perpendiculaires à une même troisième. */
  function (d) {
    if (d === "F") return null;
    const ang = ri(-18, 18);
    const u = [Math.cos(rad(ang)), -Math.sin(rad(ang))];   // direction de (d1) et (d2)
    const p = [-u[1], u[0]];                                // direction de (d3)
    const cx = L / 2, cy = H / 2;
    const P1 = [cx - p[0] * 55, cy - p[1] * 55];
    const P2 = [cx + p[0] * 55, cy + p[1] * 55];
    const el = [
      { t: "droite", a: P1, b: [P1[0] + u[0] * 40, P1[1] + u[1] * 40] },
      { t: "droite", a: P2, b: [P2[0] + u[0] * 40, P2[1] + u[1] * 40] },
      { t: "droite", a: P1, b: P2 },
      { t: "angledroit", s: P1, a: [P1[0] + u[0] * 40, P1[1] + u[1] * 40],
        b: [P1[0] + p[0] * 40, P1[1] + p[1] * 40] },
      { t: "angledroit", s: P2, a: [P2[0] + u[0] * 40, P2[1] + u[1] * 40],
        b: [P2[0] - p[0] * 40, P2[1] - p[1] * 40] },
      { t: "texte", x: P1[0] + u[0] * 130, y: P1[1] + u[1] * 130 - 12, s: "(d₁)" },
      { t: "texte", x: P2[0] + u[0] * 130, y: P2[1] + u[1] * 130 - 12, s: "(d₂)" },
      { t: "texte", x: cx + p[0] * 105 + 22, y: cy + p[1] * 105, s: "(d₃)" },
    ];
    return {
      content: "Sur cette figure, (d₁) et (d₂) sont toutes deux perpendiculaires à (d₃) " +
        "(les angles droits sont codés).\nQue peut-on en déduire pour (d₁) et (d₂) ?",
      solution: "Propriété : si deux droites sont perpendiculaires à une MÊME troisième droite, " +
        "alors elles sont PARALLÈLES entre elles.\n" +
        "Ici (d₁) ⊥ (d₃) et (d₂) ⊥ (d₃), donc (d₁) ∥ (d₂).\n" +
        "C'est le codage des deux angles droits qui permet de le conclure, " +
        "sans mesurer quoi que ce soit.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        question: "Que peut-on en déduire pour (d₁) et (d₂) ?",
        options: ["Elles sont parallèles", "Elles sont perpendiculaires",
                  "Elles sont sécantes", "On ne peut rien conclure"],
        reponse: { choix: "Elles sont parallèles" },
        description: "deux droites perpendiculaires à une même troisième",
      },
    };
  },
  /* Le piège : perpendiculaire à l'une de deux parallèles. */
  function (d) {
    if (d !== "D") return null;
    const ang = ri(-15, 15);
    const u = [Math.cos(rad(ang)), -Math.sin(rad(ang))];
    const p = [-u[1], u[0]];
    const cx = L / 2, cy = H / 2;
    const P1 = [cx - p[0] * 55, cy - p[1] * 55];
    const P2 = [cx + p[0] * 55, cy + p[1] * 55];
    const el = [
      { t: "droite", a: P1, b: [P1[0] + u[0] * 40, P1[1] + u[1] * 40] },
      { t: "droite", a: P2, b: [P2[0] + u[0] * 40, P2[1] + u[1] * 40] },
      { t: "chevrons", a: [P1[0] - u[0] * 70, P1[1] - u[1] * 70],
        b: [P1[0] + u[0] * 70, P1[1] + u[1] * 70], n: 1 },
      { t: "chevrons", a: [P2[0] - u[0] * 70, P2[1] - u[1] * 70],
        b: [P2[0] + u[0] * 70, P2[1] + u[1] * 70], n: 1 },
      { t: "droite", a: P1, b: P2 },
      { t: "angledroit", s: P1, a: [P1[0] + u[0] * 40, P1[1] + u[1] * 40],
        b: [P1[0] + p[0] * 40, P1[1] + p[1] * 40] },
      { t: "texte", x: P1[0] + u[0] * 130, y: P1[1] + u[1] * 130 - 12, s: "(d₁)" },
      { t: "texte", x: P2[0] + u[0] * 130, y: P2[1] + u[1] * 130 - 12, s: "(d₂)" },
      { t: "texte", x: cx + p[0] * 105 + 22, y: cy + p[1] * 105, s: "(d₃)" },
    ];
    return {
      content: "Les chevrons indiquent que (d₁) et (d₂) sont parallèles, et l'angle droit " +
        "que (d₃) est perpendiculaire à (d₁).\nQue peut-on dire de (d₃) et (d₂) ?",
      solution: "Propriété : si une droite est perpendiculaire à l'une de deux droites " +
        "parallèles, alors elle est perpendiculaire à l'autre.\n" +
        "Ici (d₁) ∥ (d₂) et (d₃) ⊥ (d₁), donc (d₃) ⊥ (d₂).\n" +
        "L'angle droit n'est codé qu'une fois sur la figure, mais la propriété " +
        "permet de l'affirmer aussi en bas.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        question: "Que peut-on dire de (d₃) et (d₂) ?",
        options: ["Elles sont perpendiculaires", "Elles sont parallèles",
                  "Elles sont sécantes sans être perpendiculaires", "On ne peut rien conclure"],
        reponse: { choix: "Elles sont perpendiculaires" },
        description: "deux droites parallèles coupées par une perpendiculaire",
      },
    };
  },
  /* Repérer, parmi plusieurs droites, celles qui sont parallèles. */
  function (d) {
    if (d === "F") return null;
    const ang = ri(-20, 20);
    const u = [Math.cos(rad(ang)), -Math.sin(rad(ang))];
    const p = [-u[1], u[0]];
    const cx = L / 2, cy = H / 2;
    const P1 = [cx - p[0] * 60, cy - p[1] * 60];
    const P2 = [cx + p[0] * 60, cy + p[1] * 60];
    /* (a) et (b) perpendiculaires à (c) : elles sont donc parallèles. */
    const el = [
      { t: "droite", a: P1, b: [P1[0] + u[0] * 40, P1[1] + u[1] * 40] },
      { t: "droite", a: P2, b: [P2[0] + u[0] * 40, P2[1] + u[1] * 40] },
      { t: "droite", a: P1, b: P2 },
      { t: "angledroit", s: P1, a: [P1[0] + u[0] * 40, P1[1] + u[1] * 40],
        b: [P1[0] + p[0] * 40, P1[1] + p[1] * 40] },
      { t: "angledroit", s: P2, a: [P2[0] + u[0] * 40, P2[1] + u[1] * 40],
        b: [P2[0] - p[0] * 40, P2[1] - p[1] * 40] },
      { t: "texte", x: P1[0] + u[0] * 135, y: P1[1] + u[1] * 135 - 12, s: "(a)" },
      { t: "texte", x: P2[0] + u[0] * 135, y: P2[1] + u[1] * 135 - 12, s: "(b)" },
      { t: "texte", x: cx + p[0] * 110 + 20, y: cy + p[1] * 110, s: "(c)" },
    ];
    return {
      content: "Trois droites sont tracées, avec leur codage.\n" +
        "Quelles affirmations sont vraies ? (plusieurs réponses)",
      solution: "Les deux angles droits montrent que (a) ⊥ (c) et (b) ⊥ (c).\n" +
        "Or deux droites perpendiculaires à une même droite sont parallèles entre elles : " +
        "(a) ∥ (b).\nLes affirmations vraies sont donc : (a) ⊥ (c), (b) ⊥ (c) et (a) ∥ (b).",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        question: "Quelles affirmations sont vraies ?",
        options: ["(a) ⊥ (c)", "(b) ⊥ (c)", "(a) ∥ (b)", "(a) ⊥ (b)"],
        multiple: true,
        reponse: { choix: ["(a) ⊥ (c)", "(b) ⊥ (c)", "(a) ∥ (b)"] },
        description: "trois droites avec deux angles droits codés",
      },
    };
  },
];

/* ═══════════════ TABLE DES FAMILLES ═══════════════ */
const FAMILLES = {
  "Droite, segment, demi-droite":          M_TYPES,
  "Vocabulaire des figures":               M_VOCABULAIRE,
  "Droites perpendiculaires et parallèles": M_POSITION,
};

const cle = t => String(t || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
  .split(" ").map(m => m.replace(/s$/, "")).join(" ");
const VIDES = new Set(["le","la","l","un","une","de","du","d","en","et","sur","avec","a","au","aux","pour","par"]);
const mots = t => new Set(cle(t).split(" ").filter(m => m && !VIDES.has(m)));
function memeEnsemble(a, b) {
  const A = mots(a), B = mots(b);
  if (A.size !== B.size) return false;
  for (const m of A) if (!B.has(m)) return false;
  return true;
}
const ALIAS = {};
Object.keys(FAMILLES).forEach(f => { ALIAS[cle(f)] = f; });
[["Droite segment demi-droite", "Droite, segment, demi-droite"],
 ["Droites segments demi-droites", "Droite, segment, demi-droite"],
 ["Segment demi-droite droite", "Droite, segment, demi-droite"],
 ["Vocabulaire du cercle", "Vocabulaire des figures"],
 ["Vocabulaire de la figure", "Vocabulaire des figures"],
 ["Perpendiculaires et parallèles", "Droites perpendiculaires et parallèles"],
 ["Perpendiculaire et parallèle", "Droites perpendiculaires et parallèles"],
 ["Droites parallèles et perpendiculaires", "Droites perpendiculaires et parallèles"],
].forEach(([a, c]) => { ALIAS[cle(a)] = c; });

function canonique(f) {
  const k = cle(f);
  if (ALIAS[k]) return ALIAS[k];
  return Object.keys(FAMILLES).find(n => memeEnsemble(n, f)) || null;
}

/* ═══════════════ GÉNÉRATION ═══════════════ */
function besoinsDepuis(dej) {
  const v = { F: Math.round(CIBLE * REPARTITION.F), M: Math.round(CIBLE * REPARTITION.M) };
  v.D = CIBLE - v.F - v.M;
  return { F: Math.max(0, v.F - dej.F), M: Math.max(0, v.M - dej.M), D: Math.max(0, v.D - dej.D) };
}
/* La figure entre dans la clé : deux dessins différents sous le même énoncé
   sont bien deux exercices distincts. */
const cleEx = e => String(e.content).replace(/\s+/g, " ").trim().toLowerCase() + "|" +
  JSON.stringify(e.interactif.figure.elements) + "|" + JSON.stringify(e.interactif.reponse);

function genererFamille(nom, besoins, vus) {
  const modeles = FAMILLES[nom];
  const sortie = [];
  for (const d of ["F", "M", "D"]) {
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < reste * 400 + 4000) {
      essais++;
      const e = pick(modeles)(d);
      if (!e) continue;
      const k = cleEx(e);
      if (vus.has(k)) continue;
      vus.add(k);
      sortie.push({ d, content: e.content, solution: e.solution, interactif: e.interactif });
      reste--;
    }
    if (reste > 0) console.warn(`  ⚠ ${nom} / ${LIBELLE[d]} : ${reste} énoncé(s) non produit(s).`);
  }
  return sortie;
}

/* ═══════════════ APERÇU ═══════════════ */
if (APERCU) {
  const f = ARGS[ARGS.indexOf("--apercu") + 1];
  const cherche = f && !f.startsWith("--") ? cle(f) : null;
  console.log("=== APERÇU (aucune base contactée) ===\n");
  const lignes = [];
  for (const nom of Object.keys(FAMILLES)) {
    if (cherche && !cle(nom).includes(cherche)) continue;
    alea = mulberry32(GRAINE + nom.length * 7919);
    const ex = genererFamille(nom, besoinsDepuis({ F: 0, M: 0, D: 0 }), new Set());
    const n = { F: 0, M: 0, D: 0 }; ex.forEach(e => n[e.d]++);
    lignes.push({ famille: nom, total: ex.length, Facile: n.F, Moyen: n.M, Difficile: n.D,
                  figures: ex.filter(e => e.interactif).length });
    if (cherche) {
      for (const d of ["F", "M", "D"]) {
        const e = ex.find(x => x.d === d);
        if (!e) continue;
        console.log("── " + nom + " · " + LIBELLE[d] + " ──");
        console.log(e.content);
        console.log("   [figure : " + e.interactif.description + "]");
        console.log("   Q : " + e.interactif.question);
        console.log("   Options : " + e.interactif.options.join(" | "));
        console.log("   Réponse : " + JSON.stringify(e.interactif.reponse.choix));
        console.log("   → " + e.solution.replace(/\n/g, "\n     ") + "\n");
      }
    }
  }
  console.table(lignes);
  process.exit(0);
}

/* ═══════════════ BASE ═══════════════ */
const { Pool } = require("pg");
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant (ou --apercu)."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, solution, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%g_om_trie%' OR chapitre ILIKE '%geometrie%' ORDER BY id`);
  if (!brut.length) { console.log("Chapitre de géométrie introuvable."); await pool.end(); return; }

  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(brut, "chapitre", "Géométrie");
  console.log(`Chapitre « ${CHAPITRE} » : ${brut.length} exercice(s) en base.\n`);

  const parFam = new Map();
  brut.forEach(r => { if (!r.famille) return; const k = cle(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

  const vus = new Set();
  const aInserer = [], rapport = [], inconnues = [];

  for (const [, g] of parFam) {
    const canon = canonique(g.nom);
    if (!canon) { inconnues.push(g.nom); continue; }
    const dej = { F: 0, M: 0, D: 0 };
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M"
      : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919);
    const neufs = genererFamille(canon, besoinsDepuis(dej), vus);
    const modele = { level: maj(g.items, "level", "college"), subject: maj(g.items, "subject", "Géométrie"),
                     classe: maj(g.items, "classe", "6ème"), type: maj(g.items, "type", "exercice") };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content,
      solution: e.solution, difficulty: LIBELLE[e.d], level: modele.level, subject: modele.subject,
      classe: modele.classe, chapitre: g.items[0].chapitre, type: modele.type, famille: g.nom,
      interactif: JSON.stringify(e.interactif) }); });
    rapport.push({ famille: g.nom, modele: canon, avant: g.items.length,
                   ajoutes: neufs.length, apres: g.items.length + neufs.length,
                   figures: neufs.length });
  }

  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`geometrie-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : geometrie-avant-generation-${stamp}.json`);

  const T = 100;
  for (let i = 0; i < aInserer.length; i += T) {
    const lot = aInserer.slice(i, i + T);
    const vals = [], par_ = [];
    lot.forEach((e, j) => { const b = j * 11;
      vals.push(`($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},$${b+9},$${b+10},$${b+11})`);
      par_.push(e.title, e.content, e.level, e.subject, e.difficulty, e.solution, e.classe,
                e.chapitre, e.type, e.famille, e.interactif); });
    await pool.query(`INSERT INTO exercises
      (title, content, level, subject, difficulty, solution, classe, chapitre, type, famille, interactif)
      VALUES ${vals.join(",")}`, par_);
    console.log(`  ${Math.min(i + T, aInserer.length)} / ${aInserer.length}`);
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY n DESC, famille`, [CHAPITRE]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
