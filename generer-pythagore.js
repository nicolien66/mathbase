/* Polymates — generer-pythagore.js
   Porte à 100 exercices les familles du chapitre « Théorème de Pythagore ».

   ── EXIGENCE PARTICULIÈRE ────────────────────────────────────────────────
   Dans « Démontrer avec la contraposée », LA MOITIÉ des situations portent
   sur un triangle qui N'EST PAS rectangle. L'élève ne peut donc pas deviner
   la conclusion : il doit vraiment comparer a² + b² et c². La proportion est
   contrôlée par un test, pas laissée au hasard du tirage.

   ── FIGURES ──────────────────────────────────────────────────────────────
   Chaque exercice porte une figure (widget figures.js).
   Un choix important : dans les familles où l'on doit DÉMONTRER qu'un
   triangle est rectangle ou non, le triangle est dessiné À MAIN LEVÉE, avec
   la mention « figure non à l'échelle ». Le dessiner fidèlement reviendrait
   à donner la réponse : l'angle droit se verrait. Là où l'angle droit est
   une DONNÉE de l'énoncé, il est au contraire codé par le petit carré.

   ── EXACTITUDE ───────────────────────────────────────────────────────────
   Les longueurs viennent de triplets pythagoriciens et de leurs multiples :
   les résultats tombent juste, sans racine approchée. Les triangles non
   rectangles sont obtenus en modifiant un côté, puis vérifiés : l'inégalité
   triangulaire est respectée, et a² + b² ≠ c².

   · Répartition pour 100 : 20 faciles, 30 moyens, 50 difficiles.

   ── USAGE ────────────────────────────────────────────────────────────────
     node generer-pythagore.js --apercu
     node generer-pythagore.js --apercu "contraposée"
     $env:DATABASE_URL = "postgresql://..."
     node generer-pythagore.js            # simulation
     node generer-pythagore.js --execute
*/

"use strict";
const fs = require("fs");

const ARGS    = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260819);
const REPARTITION = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };
const iCh = ARGS.indexOf("--chapitre");
const FILTRE = (iCh >= 0 && ARGS[iCh + 1] && !ARGS[iCh + 1].startsWith("--"))
  ? "%" + ARGS[iCh + 1] + "%" : "%pythagore%";

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

const L = 440, H = 300;
const rad = d => d * Math.PI / 180;
const fr = x => (Number.isInteger(x) ? String(x) : String(Math.round(x * 100) / 100).replace(".", ","));

/* ── Triplets pythagoriciens primitifs, et leurs multiples ── */
const TRIPLETS = [
  [3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29],
  [9, 40, 41], [12, 35, 37], [28, 45, 53], [11, 60, 61], [16, 63, 65],
  [33, 56, 65], [48, 55, 73], [13, 84, 85], [36, 77, 85], [39, 80, 89],
];
function triplet(d) {
  const base = d === "F" ? pick(TRIPLETS.slice(0, 5)) : pick(TRIPLETS);
  /* Le niveau facile a besoin de variété : quelques multiples de plus, tout
     en gardant des nombres maniables (5 triplets × 6 multiples = 30 cas). */
  const k = d === "F" ? pick([1, 2, 3, 4, 5, 6]) : d === "M" ? pick([1, 2, 3, 4])
          : pick([1, 2, 3, 4, 5, 6, 7]);
  return base.map(x => x * k);
}
/* Options numériques toutes distinctes. */
function optionsNum(bon, ecarts, suffixe) {
  const vus = new Set([bon]); const out = [bon];
  for (const e of melange(ecarts)) {
    const c = Math.round((bon + e) * 100) / 100;
    if (c > 0 && !vus.has(c)) { vus.add(c); out.push(c); }
    if (out.length === 4) break;
  }
  let k = 1;
  while (out.length < 4) { const c = bon + k; if (c > 0 && !vus.has(c)) { vus.add(c); out.push(c); } k++; }
  return melange(out).map(x => fr(x) + (suffixe || ""));
}

/* ── Figures ──────────────────────────────────────────────────────────────
   `triangleRectangle` : l'angle droit est une donnée, on le code.
   `triangleMainLevee` : la nature est justement la question, on ne dessine
   donc pas à l'échelle et on le dit. */
function triangleRectangle(a, b, noms, etiquettes) {
  /* Cathètes a et b, dessinées à l'échelle : l'angle droit est réel. */
  const k = Math.min((L - 150) / Math.max(a, b), (H - 120) / Math.max(a, b));
  const A = [90, H - 70];                          // sommet de l'angle droit
  const B = [A[0] + a * k, A[1]];
  const C = [A[0], A[1] - b * k];
  const el = [
    { t: "polygone", pts: [A, B, C] },
    { t: "angledroit", s: A, a: B, b: C },
    { t: "point", x: A[0], y: A[1], nom: noms[0], pos: "bas" },
    { t: "point", x: B[0], y: B[1], nom: noms[1], pos: "bas" },
    { t: "point", x: C[0], y: C[1], nom: noms[2], pos: "haut" },
  ];
  (etiquettes || []).forEach(e => el.push({ t: "texte", x: e.x, y: e.y, s: e.s }));
  return { el, A, B, C };
}
function positionsRectangle(A, B, C) {
  return {
    ab: { x: (A[0] + B[0]) / 2, y: A[1] + 20 },        // sous la base
    ac: { x: A[0] - 24, y: (A[1] + C[1]) / 2 },        // à gauche
    bc: { x: (B[0] + C[0]) / 2 + 24, y: (B[1] + C[1]) / 2 },
  };
}
function triangleMainLevee(noms, longueurs) {
  /* Forme volontairement quelconque : elle ne renseigne sur rien. */
  const A = [90, H - 80], B = [L - 80, H - 60], C = [200, 60];
  const el = [
    { t: "polygone", pts: [A, B, C] },
    { t: "point", x: A[0], y: A[1], nom: noms[0], pos: "bas" },
    { t: "point", x: B[0], y: B[1], nom: noms[1], pos: "bas" },
    { t: "point", x: C[0], y: C[1], nom: noms[2], pos: "haut" },
    { t: "texte", x: (A[0] + B[0]) / 2, y: A[1] + 24, s: longueurs.ab },
    { t: "texte", x: (A[0] + C[0]) / 2 - 30, y: (A[1] + C[1]) / 2, s: longueurs.ac },
    { t: "texte", x: (B[0] + C[0]) / 2 + 32, y: (B[1] + C[1]) / 2, s: longueurs.bc },
    { t: "texte", x: L / 2, y: H - 12, s: "figure non à l'échelle" },
  ];
  return el;
}

/* ═══════════════ CALCULER UNE LONGUEUR ═══════════════ */
const M_LONGUEUR = [
  /* L'hypoténuse à partir des deux côtés de l'angle droit. */
  function (d) {
    const [a, b, c] = triplet(d);
    const noms = ["A", "B", "C"];
    const T = triangleRectangle(a, b, noms);
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.ab.x, y: p.ab.y, s: a + " cm" });
    T.el.push({ t: "texte", x: p.ac.x, y: p.ac.y, s: b + " cm" });
    return {
      content: "Le triangle ABC est rectangle en A, avec AB = " + a + " cm et AC = " + b + " cm.\n" +
        "Calcule la longueur de l'hypoténuse [BC].",
      solution: "Le triangle est rectangle en A : l'hypoténuse est [BC].\n" +
        "D'après le théorème de Pythagore : BC² = AB² + AC²\n" +
        "BC² = " + a + "² + " + b + "² = " + (a * a) + " + " + (b * b) + " = " + (c * c) + "\n" +
        "BC = √" + (c * c) + " = " + c + " cm.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: "Quelle est la longueur de [BC] ?",
            options: optionsNum(c, [a + b - c, 2, -2, 5], " cm"),
            reponse: { choix: c + " cm" } },
          { question: "Quel côté est l'hypoténuse ?",
            options: melange(["[BC]", "[AB]", "[AC]"]),
            reponse: { choix: "[BC]" } },
        ],
        description: "un triangle rectangle en A, deux côtés donnés",
      },
    };
  },
  /* Un côté de l'angle droit à partir de l'hypoténuse. */
  function (d) {
    if (d === "F") return null;
    const [a, b, c] = triplet(d);
    const noms = ["A", "B", "C"];
    const T = triangleRectangle(a, b, noms);
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.ab.x, y: p.ab.y, s: a + " cm" });
    T.el.push({ t: "texte", x: p.bc.x, y: p.bc.y, s: c + " cm" });
    return {
      content: "Le triangle ABC est rectangle en A, avec AB = " + a + " cm et BC = " + c + " cm.\n" +
        "Calcule la longueur AC.",
      solution: "L'hypoténuse est [BC] (côté opposé à l'angle droit).\n" +
        "D'après le théorème de Pythagore : BC² = AB² + AC²\n" +
        "Donc AC² = BC² − AB² = " + (c * c) + " − " + (a * a) + " = " + (b * b) + "\n" +
        "AC = √" + (b * b) + " = " + b + " cm.\n" +
        "Attention : ici on SOUSTRAIT, car le côté cherché n'est pas l'hypoténuse.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: "Quelle est la longueur AC ?",
            options: optionsNum(b, [c - a, a, 3, -3], " cm"),
            reponse: { choix: b + " cm" } },
          { question: "Quelle opération faut-il faire ?",
            options: melange(["Une soustraction de carrés", "Une addition de carrés",
                              "Une multiplication", "Une division"]),
            reponse: { choix: "Une soustraction de carrés" } },
        ],
        description: "un triangle rectangle en A, hypoténuse et un côté donnés",
      },
    };
  },
  /* Situation concrète (difficile). */
  function (d) {
    if (d !== "D") return null;
    const [a, b, c] = triplet(d);
    const scene = pick([
      { t: "Une échelle est appuyée contre un mur. Son pied est à " + a +
           " m du mur et son sommet atteint " + b + " m de hauteur.",
        q: "Quelle est la longueur de l'échelle ?", r: c, u: " m" },
      { t: "Un mât vertical de " + b + " m est maintenu par un câble tendu " +
           "depuis un point du sol situé à " + a + " m du pied du mât.",
        q: "Quelle est la longueur du câble ?", r: c, u: " m" },
      { t: "Un terrain rectangulaire mesure " + a + " m sur " + b + " m.",
        q: "Quelle est la longueur de sa diagonale ?", r: c, u: " m" },
    ]);
    const T = triangleRectangle(a, b, ["A", "B", "C"]);
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.ab.x, y: p.ab.y, s: a + " m" });
    T.el.push({ t: "texte", x: p.ac.x, y: p.ac.y, s: b + " m" });
    return {
      content: scene.t + "\n" + scene.q,
      solution: "La situation forme un triangle rectangle dont les côtés de l'angle droit " +
        "mesurent " + a + " m et " + b + " m.\n" +
        "D'après le théorème de Pythagore : longueur² = " + a + "² + " + b + "² = " +
        (a * a) + " + " + (b * b) + " = " + (c * c) + "\n" +
        "longueur = √" + (c * c) + " = " + c + " m.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: scene.q,
            options: optionsNum(c, [a + b - c, 2, -2, 4], scene.u),
            reponse: { choix: c + scene.u } },
        ],
        description: "un triangle rectangle représentant la situation",
      },
    };
  },
];

/* ═══════════════ DÉMONTRER AVEC LA CONTRAPOSÉE ═══════════════
   La moitié des situations portent sur un triangle NON rectangle. */
function tripletFausse(d) {
  /* On part d'un triplet, puis on modifie le plus grand côté. Le triangle
     reste constructible (inégalité triangulaire) mais n'est plus rectangle. */
  for (let essai = 0; essai < 60; essai++) {
    const [a, b, c] = triplet(d);
    const delta = pick([-3, -2, -1, 1, 2, 3]);
    const c2 = c + delta;
    if (c2 <= Math.max(a, b)) continue;         // triangle impossible
    if (c2 >= a + b) continue;                  // inégalité triangulaire
    if (a * a + b * b === c2 * c2) continue;    // resterait rectangle
    return [a, b, c2];
  }
  return null;
}

function exoContraposee(d, rectangle) {
  const t = rectangle ? triplet(d) : tripletFausse(d);
  if (!t) return null;
  const [a, b, c] = t;
  const s1 = a * a + b * b, s2 = c * c;
  const el = triangleMainLevee(["A", "B", "C"],
    { ab: a + " cm", ac: b + " cm", bc: c + " cm" });
  return {
    content: "Dans le triangle ABC : AB = " + a + " cm, AC = " + b + " cm et BC = " + c + " cm.\n" +
      "Ce triangle est-il rectangle ? Justifie.",
    solution: "Le plus grand côté est [BC] : s'il y avait un angle droit, ce serait en A.\n" +
      "On compare les deux membres :\n" +
      "AB² + AC² = " + a + "² + " + b + "² = " + (a * a) + " + " + (b * b) + " = " + s1 + "\n" +
      "BC² = " + c + "² = " + s2 + "\n" +
      (rectangle
        ? "Les deux résultats sont ÉGAUX. D'après la RÉCIPROQUE du théorème de Pythagore, " +
          "le triangle ABC EST rectangle en A."
        : "Les deux résultats sont DIFFÉRENTS (" + s1 + " ≠ " + s2 + "). " +
          "D'après la CONTRAPOSÉE du théorème de Pythagore, le triangle ABC " +
          "N'EST PAS rectangle."),
    _rectangle: rectangle,
    interactif: {
      widget: "figure",
      figure: { largeur: L, hauteur: H, elements: el },
      questions: [
        { question: "Ce triangle est-il rectangle ?",
          options: ["Oui", "Non"],
          reponse: { choix: rectangle ? "Oui" : "Non" } },
        { question: "Quel énoncé permet de conclure ?",
          options: melange(["La réciproque du théorème de Pythagore",
                            "La contraposée du théorème de Pythagore",
                            "Le théorème de Pythagore lui-même",
                            "Le théorème de Thalès"]),
          reponse: { choix: rectangle ? "La réciproque du théorème de Pythagore"
                                      : "La contraposée du théorème de Pythagore" } },
      ],
      description: "un triangle ABC à main levée, trois longueurs données",
    },
  };
}

/* Alternance stricte : un exercice sur deux porte sur un triangle non
   rectangle. On ne s'en remet pas au hasard, la proportion est imposée. */
let _bascule = 0;
const M_CONTRAPOSEE = [
  function (d) {
    _bascule++;
    return exoContraposee(d, _bascule % 2 === 0);
  },
  /* Variante : le plus grand côté n'est pas nommé dans le même ordre. */
  function (d) {
    if (d === "F") return null;
    _bascule++;
    const rectangle = _bascule % 2 === 0;
    const t = rectangle ? triplet(d) : tripletFausse(d);
    if (!t) return null;
    const [a, b, c] = t;
    const s1 = a * a + b * b, s2 = c * c;
    const el = triangleMainLevee(["M", "N", "P"],
      { ab: c + " cm", ac: a + " cm", bc: b + " cm" });
    return {
      content: "Dans le triangle MNP : MN = " + c + " cm, MP = " + a + " cm et NP = " + b + " cm.\n" +
        "Le triangle MNP est-il rectangle ? Justifie ta réponse.",
      solution: "On repère d'abord le plus grand côté : [MN], qui mesure " + c + " cm.\n" +
        "Si le triangle était rectangle, l'angle droit serait au sommet opposé, c'est-à-dire P.\n" +
        "MP² + NP² = " + a + "² + " + b + "² = " + s1 + "\n" +
        "MN² = " + c + "² = " + s2 + "\n" +
        (rectangle
          ? "Il y a égalité : d'après la RÉCIPROQUE du théorème de Pythagore, " +
            "MNP EST rectangle en P."
          : "Il n'y a pas égalité (" + s1 + " ≠ " + s2 + ") : d'après la CONTRAPOSÉE, " +
            "MNP N'EST PAS rectangle."),
      _rectangle: rectangle,
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Le triangle MNP est-il rectangle ?",
            options: ["Oui", "Non"],
            reponse: { choix: rectangle ? "Oui" : "Non" } },
          { question: "Si le triangle était rectangle, où serait l'angle droit ?",
            options: melange(["En P", "En M", "En N"]),
            reponse: { choix: "En P" } },
        ],
        description: "un triangle MNP à main levée, trois longueurs données",
      },
    };
  },
  /* Situation concrète : vérifier une équerre (difficile). */
  function (d) {
    if (d !== "D") return null;
    _bascule++;
    const rectangle = _bascule % 2 === 0;
    const t = rectangle ? triplet(d) : tripletFausse(d);
    if (!t) return null;
    const [a, b, c] = t;
    const s1 = a * a + b * b, s2 = c * c;
    const el = triangleMainLevee(["A", "B", "C"],
      { ab: a + " cm", ac: b + " cm", bc: c + " cm" });
    return {
      content: "Un menuisier a découpé une pièce triangulaire ABC : AB = " + a +
        " cm, AC = " + b + " cm et BC = " + c + " cm.\n" +
        "Il affirme que l'angle en A est droit. A-t-il raison ?",
      solution: "On teste avec le plus grand côté, [BC].\n" +
        "AB² + AC² = " + (a * a) + " + " + (b * b) + " = " + s1 + "\n" +
        "BC² = " + s2 + "\n" +
        (rectangle
          ? "Les deux valeurs sont égales : par la RÉCIPROQUE du théorème de Pythagore, " +
            "l'angle en A EST bien droit. Le menuisier a raison."
          : "Les deux valeurs diffèrent : par la CONTRAPOSÉE du théorème de Pythagore, " +
            "l'angle en A N'EST PAS droit. Le menuisier se trompe."),
      _rectangle: rectangle,
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Le menuisier a-t-il raison ?",
            options: ["Oui, l'angle en A est droit", "Non, l'angle en A n'est pas droit"],
            reponse: { choix: rectangle ? "Oui, l'angle en A est droit"
                                        : "Non, l'angle en A n'est pas droit" } },
          { question: "Quel énoncé permet de conclure ?",
            options: melange(["La réciproque du théorème de Pythagore",
                              "La contraposée du théorème de Pythagore",
                              "Le théorème de Pythagore lui-même",
                              "Le théorème de Thalès"]),
            reponse: { choix: rectangle ? "La réciproque du théorème de Pythagore"
                                        : "La contraposée du théorème de Pythagore" } },
        ],
        description: "une pièce triangulaire à main levée, trois longueurs",
      },
    };
  },
];


/* ═══════════════ CALCULER UN CÔTÉ DE L'ANGLE DROIT ═══════════════
   L'angle droit est une DONNÉE : il est codé, et la figure est à l'échelle. */
const M_COTE = [
  function (d) {
    const [a, b, c] = triplet(d);
    const T = triangleRectangle(a, b, ["A", "B", "C"]);
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.ab.x, y: p.ab.y, s: a + " cm" });
    T.el.push({ t: "texte", x: p.bc.x, y: p.bc.y, s: c + " cm" });
    return {
      content: "Le triangle ABC est rectangle en A. On donne AB = " + a +
        " cm et BC = " + c + " cm.\nCalcule la longueur du côté [AC].",
      solution: "Le côté cherché n'est PAS l'hypoténuse : [BC] l'est, car elle est " +
        "opposée à l'angle droit.\n" +
        "D'après le théorème de Pythagore : BC² = AB² + AC²\n" +
        "Donc AC² = BC² − AB² = " + (c * c) + " − " + (a * a) + " = " + (b * b) + "\n" +
        "AC = √" + (b * b) + " = " + b + " cm.\n" +
        "On SOUSTRAIT : c'est la marque d'un côté de l'angle droit.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: "Quelle est la longueur AC ?",
            options: optionsNum(b, [c - a, c + a - b, 3, -3], " cm"),
            reponse: { choix: b + " cm" } },
          { question: "Quelle opération le théorème impose-t-il ici ?",
            options: melange(["Une soustraction de carrés", "Une addition de carrés",
                              "Une multiplication", "Une division"]),
            reponse: { choix: "Une soustraction de carrés" } },
        ],
        description: "un triangle rectangle en A, hypoténuse et un côté donnés",
      },
    };
  },
  /* L'angle droit n'est pas en A : il faut repérer l'hypoténuse. */
  function (d) {
    if (d === "F") return null;
    const [a, b, c] = triplet(d);
    const T = triangleRectangle(a, b, ["R", "S", "T"]);
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.ac.x, y: p.ac.y, s: b + " cm" });
    T.el.push({ t: "texte", x: p.bc.x, y: p.bc.y, s: c + " cm" });
    return {
      content: "Le triangle RST est rectangle en R. On donne RT = " + b +
        " cm et ST = " + c + " cm.\nCalcule RS.",
      solution: "L'angle droit est en R : l'hypoténuse est [ST], le côté opposé.\n" +
        "D'après le théorème de Pythagore : ST² = RS² + RT²\n" +
        "RS² = ST² − RT² = " + (c * c) + " − " + (b * b) + " = " + (a * a) + "\n" +
        "RS = √" + (a * a) + " = " + a + " cm.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: "Quelle est la longueur RS ?",
            options: optionsNum(a, [c - b, b, 2, -2], " cm"),
            reponse: { choix: a + " cm" } },
          { question: "Quel côté est l'hypoténuse ?",
            options: melange(["[ST]", "[RS]", "[RT]"]),
            reponse: { choix: "[ST]" } },
        ],
        description: "un triangle rectangle en R, deux longueurs données",
      },
    };
  },
  /* Deux étapes : hypoténuse puis côté (difficile). */
  function (d) {
    if (d !== "D") return null;
    const [a, b, c] = triplet(d);
    const k = pick([2, 3]);
    const T = triangleRectangle(a, b, ["A", "B", "C"]);
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.ab.x, y: p.ab.y, s: (a * k) + " cm" });
    T.el.push({ t: "texte", x: p.bc.x, y: p.bc.y, s: (c * k) + " cm" });
    return {
      content: "Le triangle ABC est rectangle en A, avec AB = " + (a * k) +
        " cm et BC = " + (c * k) + " cm.\nCalcule AC, puis le périmètre du triangle.",
      solution: "AC² = BC² − AB² = " + (c * k) * (c * k) + " − " + (a * k) * (a * k) +
        " = " + (b * k) * (b * k) + "\n" +
        "AC = √" + (b * k) * (b * k) + " = " + (b * k) + " cm\n" +
        "Périmètre = " + (a * k) + " + " + (b * k) + " + " + (c * k) + " = " +
        ((a + b + c) * k) + " cm.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: "Quelle est la longueur AC ?",
            options: optionsNum(b * k, [(c - a) * k, a * k, 4, -4], " cm"),
            reponse: { choix: (b * k) + " cm" } },
          { question: "Quel est le périmètre du triangle ?",
            options: optionsNum((a + b + c) * k, [-(b * k), c * k, 5, -5], " cm"),
            reponse: { choix: ((a + b + c) * k) + " cm" } },
        ],
        description: "un triangle rectangle en A, hypoténuse et un côté donnés",
      },
    };
  },
];

/* ═══════════════ LE FIL DU MÂT ═══════════════
   Un mât vertical, un fil tendu depuis le sol : l'angle droit est au pied du
   mât, il est donc codé sur la figure. */
const M_MAT = [
  function (d) {
    const [a, b, c] = triplet(d);
    /* a = distance au sol, b = hauteur du mât, c = fil. */
    const T = triangleRectangle(a, b, ["P", "S", "M"]);
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.ab.x, y: p.ab.y, s: a + " m" });
    T.el.push({ t: "texte", x: p.ac.x, y: p.ac.y, s: b + " m" });
    T.el.push({ t: "texte", x: L / 2 + 40, y: 26, s: "M : sommet du mât" });
    return {
      content: "Un mât vertical [PM] mesure " + b + " m de haut. Un fil est tendu de son " +
        "sommet M jusqu'à un piquet S planté au sol, à " + a + " m du pied P.\n" +
        "Quelle est la longueur du fil ?",
      solution: "Le mât est vertical et le sol horizontal : le triangle PSM est rectangle en P " +
        "(l'angle droit est codé sur la figure).\n" +
        "D'après le théorème de Pythagore : SM² = PS² + PM²\n" +
        "SM² = " + a + "² + " + b + "² = " + (a * a) + " + " + (b * b) + " = " + (c * c) + "\n" +
        "SM = √" + (c * c) + " = " + c + " m.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: "Quelle est la longueur du fil ?",
            options: optionsNum(c, [a + b, a + b - c, 2, -2], " m"),
            reponse: { choix: c + " m" } },
          { question: "Où se trouve l'angle droit ?",
            options: melange(["Au pied du mât, en P", "Au sommet du mât, en M",
                              "Au piquet, en S"]),
            reponse: { choix: "Au pied du mât, en P" } },
        ],
        description: "un mât vertical, un fil tendu vers le sol, angle droit codé",
      },
    };
  },
  /* On connaît le fil, on cherche la hauteur ou la distance. */
  function (d) {
    if (d === "F") return null;
    const [a, b, c] = triplet(d);
    const chercheHauteur = alea() < 0.5;
    const T = triangleRectangle(a, b, ["P", "S", "M"]);
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.bc.x, y: p.bc.y, s: c + " m" });
    T.el.push({ t: "texte", x: chercheHauteur ? p.ab.x : p.ac.x,
                y: chercheHauteur ? p.ab.y : p.ac.y,
                s: (chercheHauteur ? a : b) + " m" });
    return {
      content: "Un fil de " + c + " m relie le sommet M d'un mât vertical à un piquet S " +
        "planté au sol.\n" + (chercheHauteur
          ? "Le piquet est à " + a + " m du pied P du mât. Quelle est la hauteur du mât ?"
          : "Le mât mesure " + b + " m. À quelle distance du pied se trouve le piquet ?"),
      solution: "Le triangle PSM est rectangle en P.\n" +
        "SM² = PS² + PM², donc le côté cherché s'obtient par une SOUSTRACTION.\n" +
        (chercheHauteur
          ? "PM² = " + (c * c) + " − " + (a * a) + " = " + (b * b) + "\nPM = " + b + " m."
          : "PS² = " + (c * c) + " − " + (b * b) + " = " + (a * a) + "\nPS = " + a + " m."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: chercheHauteur ? "Quelle est la hauteur du mât ?"
                                     : "À quelle distance se trouve le piquet ?",
            options: optionsNum(chercheHauteur ? b : a,
              [c - (chercheHauteur ? a : b), c, 3, -3], " m"),
            reponse: { choix: (chercheHauteur ? b : a) + " m" } },
          { question: "Quelle opération faut-il faire ?",
            options: melange(["Une soustraction de carrés", "Une addition de carrés",
                              "Une multiplication", "Une division"]),
            reponse: { choix: "Une soustraction de carrés" } },
        ],
        description: "un mât, un fil de longueur connue, angle droit codé",
      },
    };
  },
  /* Deux fils, ou un fil qui dépasse (difficile). */
  function (d) {
    if (d !== "D") return null;
    const [a, b, c] = triplet(d);
    const rab = pick([1, 2, 3]);
    const T = triangleRectangle(a, b, ["P", "S", "M"]);
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.ab.x, y: p.ab.y, s: a + " m" });
    T.el.push({ t: "texte", x: p.ac.x, y: p.ac.y, s: b + " m" });
    return {
      content: "Un mât vertical de " + b + " m est haubané par un fil allant de son sommet " +
        "à un piquet situé à " + a + " m du pied.\n" +
        "On prévoit " + rab + " m de fil supplémentaire pour les attaches. " +
        "Quelle longueur de fil faut-il commander ?",
      solution: "Longueur tendue : SM² = " + a + "² + " + b + "² = " + (c * c) + ", " +
        "donc SM = " + c + " m.\n" +
        "Avec les attaches : " + c + " + " + rab + " = " + (c + rab) + " m.\n" +
        "Il faut commander " + (c + rab) + " m de fil.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: "Quelle longueur de fil faut-il commander ?",
            options: optionsNum(c + rab, [-rab, a + b, 2, -2], " m"),
            reponse: { choix: (c + rab) + " m" } },
          { question: "Quelle est la longueur du fil tendu, sans les attaches ?",
            options: optionsNum(c, [rab, a + b, 3, -3], " m"),
            reponse: { choix: c + " m" } },
        ],
        description: "un mât haubané, angle droit codé au pied",
      },
    };
  },
];

/* ═══════════════ LA DIAGONALE DE L'ÉCRAN ═══════════════
   Un écran rectangulaire : la diagonale le partage en deux triangles
   rectangles. L'angle droit est celui du rectangle, il est codé. */
const M_ECRAN = [
  function (d) {
    const [a, b, c] = triplet(d);
    const T = triangleRectangle(a, b, ["A", "B", "C"]);
    /* Le rectangle complet, avec sa diagonale. */
    const D = [T.B[0], T.C[1]];
    T.el.splice(1, 0, { t: "segment", a: T.B, b: D, style: "pointille" },
                       { t: "segment", a: T.C, b: D, style: "pointille" });
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.ab.x, y: p.ab.y, s: a + " cm" });
    T.el.push({ t: "texte", x: p.ac.x, y: p.ac.y, s: b + " cm" });
    const objet = pick(["un écran de télévision", "un écran d'ordinateur",
                        "une tablette", "un cadre photo", "un panneau"]);
    return {
      content: objet.charAt(0).toUpperCase() + objet.slice(1) + " rectangulaire mesure " +
        a + " cm de large et " + b + " cm de haut.\nQuelle est la longueur de sa diagonale ?",
      solution: "La diagonale partage le rectangle en deux triangles rectangles.\n" +
        "D'après le théorème de Pythagore : diagonale² = " + a + "² + " + b + "²\n" +
        "= " + (a * a) + " + " + (b * b) + " = " + (c * c) + "\n" +
        "diagonale = √" + (c * c) + " = " + c + " cm.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: "Quelle est la longueur de la diagonale ?",
            options: optionsNum(c, [a + b, a + b - c, 2, -2], " cm"),
            reponse: { choix: c + " cm" } },
          { question: "Pourquoi peut-on appliquer le théorème de Pythagore ?",
            options: melange(["Parce que les angles du rectangle sont droits",
                              "Parce que les côtés sont égaux",
                              "Parce que la diagonale est la plus longue",
                              "Parce que le rectangle est un carré"]),
            reponse: { choix: "Parce que les angles du rectangle sont droits" } },
        ],
        description: "un rectangle et sa diagonale, angle droit codé",
      },
    };
  },
  /* La diagonale est connue, on cherche un côté. */
  function (d) {
    if (d === "F") return null;
    const [a, b, c] = triplet(d);
    const T = triangleRectangle(a, b, ["A", "B", "C"]);
    const D = [T.B[0], T.C[1]];
    T.el.splice(1, 0, { t: "segment", a: T.B, b: D, style: "pointille" },
                       { t: "segment", a: T.C, b: D, style: "pointille" });
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.ab.x, y: p.ab.y, s: a + " cm" });
    T.el.push({ t: "texte", x: p.bc.x, y: p.bc.y, s: c + " cm" });
    return {
      content: "Un écran rectangulaire a une diagonale de " + c + " cm et une largeur de " +
        a + " cm.\nQuelle est sa hauteur ?",
      solution: "La diagonale est l'hypoténuse du triangle rectangle formé par la largeur " +
        "et la hauteur.\n" +
        "hauteur² = diagonale² − largeur² = " + (c * c) + " − " + (a * a) + " = " + (b * b) + "\n" +
        "hauteur = √" + (b * b) + " = " + b + " cm.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: "Quelle est la hauteur de l'écran ?",
            options: optionsNum(b, [c - a, c, 3, -3], " cm"),
            reponse: { choix: b + " cm" } },
          { question: "Que représente la diagonale dans le triangle rectangle ?",
            options: melange(["L'hypoténuse", "Un côté de l'angle droit",
                              "La hauteur", "La base"]),
            reponse: { choix: "L'hypoténuse" } },
        ],
        description: "un rectangle, diagonale et largeur données",
      },
    };
  },
  /* Aire et diagonale (difficile). */
  function (d) {
    if (d !== "D") return null;
    const [a, b, c] = triplet(d);
    const T = triangleRectangle(a, b, ["A", "B", "C"]);
    const D = [T.B[0], T.C[1]];
    T.el.splice(1, 0, { t: "segment", a: T.B, b: D, style: "pointille" },
                       { t: "segment", a: T.C, b: D, style: "pointille" });
    const p = positionsRectangle(T.A, T.B, T.C);
    T.el.push({ t: "texte", x: p.ab.x, y: p.ab.y, s: a + " cm" });
    T.el.push({ t: "texte", x: p.ac.x, y: p.ac.y, s: b + " cm" });
    return {
      content: "Un écran rectangulaire mesure " + a + " cm sur " + b + " cm.\n" +
        "Calcule la longueur de sa diagonale, puis son aire.",
      solution: "Diagonale² = " + a + "² + " + b + "² = " + (a * a) + " + " + (b * b) +
        " = " + (c * c) + "\nDiagonale = " + c + " cm.\n" +
        "Aire = " + a + " × " + b + " = " + (a * b) + " cm².\n" +
        "Attention à ne pas confondre : la diagonale s'obtient par Pythagore, " +
        "l'aire par un simple produit.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: T.el },
        questions: [
          { question: "Quelle est la longueur de la diagonale ?",
            options: optionsNum(c, [a + b, a * b > 200 ? 7 : a + 1, 2, -2], " cm"),
            reponse: { choix: c + " cm" } },
          { question: "Quelle est l'aire de l'écran ?",
            options: optionsNum(a * b, [a + b, c * c - a * b, 10, -10], " cm²"),
            reponse: { choix: (a * b) + " cm²" } },
        ],
        description: "un rectangle et sa diagonale, angle droit codé",
      },
    };
  },
];

/* ═══════════════ TABLE DES FAMILLES ═══════════════ */
const FAMILLES = {
  "Calculer une longueur":         M_LONGUEUR,
  "Démontrer avec la contraposée": M_CONTRAPOSEE,
  "Calculer un côté de l'angle droit": M_COTE,
  "Le fil du mât":                 M_MAT,
  "La diagonale de l'écran":       M_ECRAN,
};

const cle = t => String(t || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
  .split(" ").map(m => m.replace(/s$/, "")).join(" ");
const ALIAS = {};
Object.keys(FAMILLES).forEach(f => { ALIAS[cle(f)] = f; });
[["Calculer un côté", "Calculer une longueur"],
 ["Calculer une distance", "Calculer une longueur"],
 ["La contraposée", "Démontrer avec la contraposée"],
 ["Démontrer avec la contraposee", "Démontrer avec la contraposée"],
 ["Calculer un coté de l'angle droit", "Calculer un côté de l'angle droit"],
 ["Le fil du mat", "Le fil du mât"],
 ["La diagonale de l'ecran", "La diagonale de l'écran"],
].forEach(([a, c]) => { ALIAS[cle(a)] = c; });
/* Pas de comparaison souple ici : « contraposée » et « réciproque » se
   ressemblent trop pour qu'on puisse approximer sans risque. */
function canonique(f) { return ALIAS[cle(f)] || null; }

/* ── REPORT DES QUESTIONS DU WIDGET DANS L'ÉNONCÉ ──
   Les questions à choix ne sont plus affichées sous la figure : celles qui
   n'existaient que dans le widget devenaient invisibles pour l'élève comme
   pour le correcteur. On les recopie donc dans l'énoncé lorsqu'elles n'y
   figurent pas déjà. Poser la question ne donne pas la réponse : les
   exercices de reconnaissance gardent tout leur objet. */
function _motsCles(t) {
  return String(t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(m => m.length > 4);
}
/* Les OBJETS d'une question : [BC], AN, ŷ, Ĉ, (d₁)… C'est sur eux que se
   joue la comparaison, bien plus sûrement que sur les mots. « Calcule AN »
   pose déjà « Quelle est la longueur AN ? », tandis que « x̂ mesure 52° » ne
   pose pas « Quelle est la mesure de ŷ ? » — seul l'objet les distingue. */
function _objets(t) {
  const s = String(t);
  const out = new Set();
  (s.match(/\[[A-Z]+\]|\([A-Za-z][\u2080-\u2089]?\)|\b[A-Z]{2,3}\b/g) || [])
    .forEach(x => out.add(x));
  /* Lettres surmontées d'un accent circonflexe, mais ISOLÉES : x̂, ŷ, Ĉ.
     Sans cette précaution, le « ô » de « côté » passerait pour un nom
     d'angle et fausserait toute la comparaison. */
  (s.normalize("NFD").match(/(?<![A-Za-z])[A-Za-z]\u0302(?![A-Za-z])/g) || [])
    .forEach(x => out.add(x.normalize("NFC")));
  return [...out];
}
/* Mots interrogatifs : ils ne disent rien du contenu de la question. */
const _VIDES_Q = new Set(["quelle", "quels", "quelles", "combien", "comment",
  "pourquoi", "chaque", "cette", "alors", "ensuite", "donne"]);

/* Questions CONCEPTUELLES : elles portent sur une notion, non sur une valeur.
   « Quelle relation lie ẑ et x̂ ? » nomme des objets déjà cités, mais ne
   demande pas leur mesure : le raccourci par les objets ne s'y applique pas. */
const _CONCEPT = /relation|appelle|nature|théorème|propriété|configuration|énoncé|opération|indice|somme des angles|permet de conclure|te fondes|s'agit-il|intervient|existe|raisonnement/i;

function _dejaPosee(question, contenu) {
  const txt = String(contenu);
  const obj = _CONCEPT.test(question) ? [] : _objets(question);
  if (obj.length) {
    /* La question porte sur des objets nommés : elle est déjà posée si
       l'énoncé les mentionne tous. */
    return obj.every(o => txt.includes(o));
  }
  const mots = _motsCles(question).filter(m => !_VIDES_Q.has(m));
  if (!mots.length) return true;
  const t = txt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return mots.every(m => new RegExp("\\b" + m).test(t));
}
function enrichirEnonce(e) {
  if (!e || !e.interactif) return e;
  const qs = Array.isArray(e.interactif.questions) ? e.interactif.questions
           : (e.interactif.question ? [{ question: e.interactif.question }] : []);
  const manquantes = qs.map(q => q && q.question).filter(Boolean)
                       .filter(q => !_dejaPosee(q, e.content));
  if (!manquantes.length) return e;
  e.content = e.content.replace(/\s+$/, "") + "\n" +
    (manquantes.length === 1 ? manquantes[0]
      : manquantes.map((q, i) => (i + 1) + ". " + q).join("\n"));
  return e;
}

/* ═══════════════ GÉNÉRATION ═══════════════ */
function besoinsDepuis(dej) {
  const v = { F: Math.round(CIBLE * REPARTITION.F), M: Math.round(CIBLE * REPARTITION.M) };
  v.D = CIBLE - v.F - v.M;
  return { F: Math.max(0, v.F - dej.F), M: Math.max(0, v.M - dej.M), D: Math.max(0, v.D - dej.D) };
}
const cleEx = e => String(e.content).replace(/\s+/g, " ").trim().toLowerCase();

function genererFamille(nom, besoins, vus) {
  const modeles = FAMILLES[nom];
  const sortie = [];
  for (const d of ["F", "M", "D"]) {
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < reste * 500 + 5000) {
      essais++;
      const e = enrichirEnonce(pick(modeles)(d));
      if (!e) continue;
      const k = cleEx(e);
      if (vus.has(k)) continue;
      vus.add(k);
      sortie.push({ d, content: e.content, solution: e.solution,
                    interactif: e.interactif, _rectangle: e._rectangle });
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
    alea = mulberry32(GRAINE + nom.length * 7919); _bascule = 0;
    const ex = genererFamille(nom, besoinsDepuis({ F: 0, M: 0, D: 0 }), new Set());
    const n = { F: 0, M: 0, D: 0 }; ex.forEach(e => n[e.d]++);
    const nonRect = ex.filter(e => e._rectangle === false).length;
    lignes.push({ famille: nom, total: ex.length, Facile: n.F, Moyen: n.M, Difficile: n.D,
                  figures: ex.filter(e => e.interactif).length,
                  "non rectangles": ex.some(e => e._rectangle !== undefined) ? nonRect : "" });
    if (cherche) {
      for (const d of ["F", "M", "D"]) {
        const e = ex.find(x => x.d === d);
        if (!e) continue;
        console.log("── " + nom + " · " + LIBELLE[d] + " ──");
        console.log(e.content);
        console.log("   [figure : " + e.interactif.description + "]");
        (e.interactif.questions || []).forEach((q, i) =>
          console.log("   Q" + (i + 1) + " : " + q.question + "\n        " +
            q.options.join(" | ") + "  → " + JSON.stringify(q.reponse.choix)));
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
       FROM exercises WHERE chapitre ILIKE $1 ORDER BY id`, [FILTRE]);
  if (!brut.length) {
    console.log("Aucun chapitre ne correspond à « " + FILTRE + " ».");
    const { rows: dispo } = await pool.query(
      "SELECT DISTINCT chapitre FROM exercises WHERE chapitre IS NOT NULL ORDER BY 1");
    console.log("Chapitres existants :");
    dispo.forEach(r => console.log("   " + JSON.stringify(r.chapitre)));
    await pool.end(); return;
  }

  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(brut, "chapitre", "Théorème de Pythagore");
  console.log(`Chapitre « ${CHAPITRE} » : ${brut.length} exercice(s) en base.\n`);

  const parFam = new Map();
  brut.forEach(r => { if (!r.famille) return; const k = cle(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

  const vus = new Set(brut.map(r => cleEx(r)));
  const aInserer = [], rapport = [], inconnues = [];

  for (const [, g] of parFam) {
    const canon = canonique(g.nom);
    if (!canon) { inconnues.push(g.nom); continue; }
    const dej = { F: 0, M: 0, D: 0 };
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M"
      : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919); _bascule = 0;
    const neufs = genererFamille(canon, besoinsDepuis(dej), vus);
    const modele = { level: maj(g.items, "level", "college"), subject: maj(g.items, "subject", "Géométrie"),
                     classe: maj(g.items, "classe", "4ème"), type: maj(g.items, "type", "exercice") };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content,
      solution: e.solution, difficulty: LIBELLE[e.d], level: modele.level, subject: modele.subject,
      classe: modele.classe, chapitre: g.items[0].chapitre, type: modele.type, famille: g.nom,
      interactif: JSON.stringify(e.interactif) }); });
    const nonRect = neufs.filter(e => e._rectangle === false).length;
    rapport.push({ famille: g.nom, modele: canon, avant: g.items.length, ajoutes: neufs.length,
                   apres: g.items.length + neufs.length,
                   "non rectangles": neufs.some(e => e._rectangle !== undefined) ? nonRect : "" });
  }

  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`pythagore-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : pythagore-avant-generation-${stamp}.json`);

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
