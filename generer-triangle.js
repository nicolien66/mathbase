/* Polymates — generer-triangle.js
   Porte à 100 exercices les familles du chapitre « Géométrie du triangle ».

   ── PARTICULARITÉ ────────────────────────────────────────────────────────
   Ce générateur sait CRÉER une famille qui n'existe pas encore. Une famille
   n'étant qu'une valeur de colonne, elle naît avec ses premiers exercices :
   « Types de triangle », demandée mais absente de la base, est donc produite
   ici de toutes pièces (voir A_CREER).

   Comme pour les autres chapitres de géométrie, CHAQUE exercice porte une
   FIGURE (widget figures.js), avec son codage : traits d'égalité sur les
   côtés de même longueur, petit carré de l'angle droit, arcs des angles
   marqués. Les exercices qui s'y prêtent posent une seconde question sur la
   nature du triangle ou sur la propriété employée.

   Les mesures sont exactes : la somme des angles vaut toujours 180°, et les
   triangles isocèles ou équilatéraux sont construits à partir de leurs
   angles, jamais approchés.

   · Répartition pour 100 : 20 faciles, 30 moyens, 50 difficiles.

   ── USAGE ────────────────────────────────────────────────────────────────
     node generer-triangle.js --apercu
     node generer-triangle.js --apercu "types"
     $env:DATABASE_URL = "postgresql://..."
     node generer-triangle.js            # simulation
     node generer-triangle.js --execute
*/

"use strict";
const fs = require("fs");

const ARGS    = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260818);
const REPARTITION = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };
const iCh = ARGS.indexOf("--chapitre");
const FILTRE = (iCh >= 0 && ARGS[iCh + 1] && !ARGS[iCh + 1].startsWith("--"))
  ? "%" + ARGS[iCh + 1] + "%" : "%g%om%trie du triangle%";

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

/* Options d'angles toutes différentes. */
function optionsAngle(bon, candidats) {
  const vus = new Set([bon]); const out = [bon];
  for (const c of candidats) {
    if (c > 0 && c < 180 && !vus.has(c)) { vus.add(c); out.push(c); }
    if (out.length === 4) break;
  }
  let k = 5;
  while (out.length < 4) {
    for (const c of [bon + k, bon - k])
      if (out.length < 4 && c > 0 && c < 180 && !vus.has(c)) { vus.add(c); out.push(c); }
    k += 7;
  }
  return melange(out).map(x => x + "°");
}

/* ═══════════════ CONSTRUCTION D'UN TRIANGLE ═══════════════
   On part des TROIS ANGLES (dont la somme vaut 180° par construction) et on
   place les sommets par la loi des sinus : la figure dessinée correspond donc
   exactement aux mesures de l'énoncé. */
function triangleDepuisAngles(A, B, noms) {
  const C = 180 - A - B;
  /* Côtés proportionnels aux sinus des angles opposés. */
  const c = Math.sin(rad(C));          // AB
  const b = Math.sin(rad(B));          // AC
  const PA = [0, 0];
  const PB = [c, 0];
  const PC = [b * Math.cos(rad(A)), -b * Math.sin(rad(A))];
  /* Mise à l'échelle et centrage dans le cadre. */
  const xs = [PA[0], PB[0], PC[0]], ys = [PA[1], PB[1], PC[1]];
  const minx = Math.min(...xs), maxx = Math.max(...xs);
  const miny = Math.min(...ys), maxy = Math.max(...ys);
  const k = Math.min((L - 130) / (maxx - minx || 1), (H - 110) / (maxy - miny || 1));
  const dx = (L - (maxx - minx) * k) / 2 - minx * k;
  const dy = (H - (maxy - miny) * k) / 2 - miny * k;
  const P = p => [p[0] * k + dx, p[1] * k + dy];
  return { pts: [P(PA), P(PB), P(PC)], angles: [A, B, C], noms: noms || ["A", "B", "C"] };
}

/* Dessine le triangle : polygone, sommets nommés, codages demandés. */
function figureTriangle(T, o) {
  o = o || {};
  const el = [{ t: "polygone", pts: T.pts, marques: o.marques || [] }];
  T.pts.forEach((p, i) => {
    const centre = [(T.pts[0][0] + T.pts[1][0] + T.pts[2][0]) / 3,
                    (T.pts[0][1] + T.pts[1][1] + T.pts[2][1]) / 3];
    el.push({ t: "point", x: p[0], y: p[1], nom: T.noms[i],
              pos: p[1] < centre[1] ? "haut" : "bas" });
  });
  /* Angle droit : petit carré au sommet concerné. */
  if (o.angleDroit !== undefined) {
    const i = o.angleDroit;
    el.push({ t: "angledroit", s: T.pts[i], a: T.pts[(i + 1) % 3], b: T.pts[(i + 2) % 3] });
  }
  /* Mesures écrites à côté des sommets. */
  (o.mesures || []).forEach(({ i, texte }) => {
    const centre = [(T.pts[0][0] + T.pts[1][0] + T.pts[2][0]) / 3,
                    (T.pts[0][1] + T.pts[1][1] + T.pts[2][1]) / 3];
    const dx = T.pts[i][0] - centre[0], dy = T.pts[i][1] - centre[1];
    const n = Math.hypot(dx, dy) || 1;
    el.push({ t: "texte", x: T.pts[i][0] - dx / n * 34, y: T.pts[i][1] - dy / n * 34 + 5,
              s: texte });
  });
  return el;
}

/* ═══════════════ TRIANGLE QUELCONQUE (somme des angles) ═══════════════ */
const M_QUELCONQUE = [
  function (d) {
    const A = ri(30, 80), B = ri(30, 180 - A - 25);
    const C = 180 - A - B;
    if (C < 20 || C > 130) return null;
    const T = triangleDepuisAngles(A, B, ["A", "B", "C"]);
    const el = figureTriangle(T, { mesures: [{ i: 0, texte: A + "°" }, { i: 1, texte: B + "°" }] });
    return {
      content: "Dans le triangle ABC, Â = " + A + "° et B̂ = " + B + "°.\n" +
        "Quelle est la mesure de l'angle Ĉ ?",
      solution: "La somme des angles d'un triangle vaut toujours 180°.\n" +
        "Ĉ = 180° − " + A + "° − " + B + "° = " + C + "°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de Ĉ ?",
            options: optionsAngle(C, [180 - C, A + B, 90]),
            reponse: { choix: C + "°" } },
          { question: "Combien vaut la somme des angles d'un triangle ?",
            options: melange(["180°", "360°", "90°", "270°"]),
            reponse: { choix: "180°" } },
        ],
        description: "un triangle ABC dont deux angles sont donnés",
      },
    };
  },
  /* Nature du triangle déduite des angles (moyen et difficile). */
  function (d) {
    if (d === "F") return null;
    const type = pick(["rectangle", "isocele", "quelconque", "equilateral"]);
    let A, B;
    if (type === "rectangle")        { A = 90; B = ri(25, 64); }
    else if (type === "isocele")     { A = ri(30, 75); B = A; }
    else if (type === "equilateral") { A = 60; B = 60; }
    else                             { A = ri(35, 75); B = ri(40, 80);
                                       if (A === B || A === 90 || B === 90 || 180 - A - B === A ||
                                           180 - A - B === B || 180 - A - B === 90) return null; }
    const C = 180 - A - B;
    if (C < 18) return null;
    const T = triangleDepuisAngles(A, B, ["A", "B", "C"]);
    const el = figureTriangle(T, {
      mesures: [{ i: 0, texte: A + "°" }, { i: 1, texte: B + "°" }, { i: 2, texte: C + "°" }] });
    const nom = type === "rectangle" ? "Rectangle" : type === "isocele" ? "Isocèle"
              : type === "equilateral" ? "Équilatéral" : "Quelconque";
    return {
      content: "Les trois angles du triangle ABC sont donnés sur la figure.\n" +
        "Quelle est la nature de ce triangle ?",
      solution: "Vérification : " + A + "° + " + B + "° + " + C + "° = 180°.\n" +
        (type === "rectangle" ? "Un angle mesure 90° : le triangle est RECTANGLE."
         : type === "equilateral" ? "Les trois angles valent 60° : le triangle est ÉQUILATÉRAL."
         : type === "isocele" ? "Deux angles sont égaux (" + A + "°) : le triangle est ISOCÈLE."
         : "Aucun angle ne vaut 90°, et aucun angle n'est égal à un autre : " +
           "le triangle est QUELCONQUE."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la nature de ce triangle ?",
            options: melange(["Rectangle", "Isocèle", "Équilatéral", "Quelconque"]),
            reponse: { choix: nom } },
        ],
        description: "un triangle dont les trois angles sont donnés",
      },
    };
  },
  /* Angle extérieur / raisonnement en deux temps (difficile). */
  function (d) {
    if (d !== "D") return null;
    const A = ri(35, 75), B = ri(35, 75);
    const C = 180 - A - B;
    if (C < 25 || C > 110) return null;
    const T = triangleDepuisAngles(A, B, ["A", "B", "C"]);
    const el = figureTriangle(T, { mesures: [{ i: 0, texte: A + "°" }, { i: 1, texte: B + "°" }] });
    return {
      content: "Dans le triangle ABC, Â = " + A + "° et B̂ = " + B + "°.\n" +
        "Quelle est la mesure de l'angle EXTÉRIEUR en C, c'est-à-dire l'angle " +
        "adjacent à Ĉ le long du prolongement d'un côté ?",
      solution: "D'abord Ĉ : 180° − " + A + "° − " + B + "° = " + C + "°.\n" +
        "L'angle extérieur en C et Ĉ sont adjacents et forment un angle plat : " +
        "ils sont supplémentaires.\n" +
        "Angle extérieur = 180° − " + C + "° = " + (180 - C) + "°.\n" +
        "On remarque que " + (180 - C) + "° = " + A + "° + " + B + "° : l'angle extérieur " +
        "vaut la somme des deux angles non adjacents.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de l'angle extérieur en C ?",
            options: optionsAngle(180 - C, [C, 90, A + 10]),
            reponse: { choix: (180 - C) + "°" } },
          { question: "À quoi est égal cet angle extérieur ?",
            options: melange(["À la somme des deux autres angles", "À l'angle Ĉ",
                              "À 90° moins Ĉ", "À la moitié de 180°"]),
            reponse: { choix: "À la somme des deux autres angles" } },
        ],
        description: "un triangle ABC avec deux angles donnés",
      },
    };
  },
];

/* ═══════════════ TRIANGLE ISOCÈLE ═══════════════ */
const M_ISOCELE = [
  /* Angle au sommet connu → angles à la base. */
  function (d) {
    /* L'angle au sommet doit être PAIR pour que les angles à la base soient
       entiers : (180 − sommet) ÷ 2. On tire donc parmi les pairs. */
    const sommet = d === "F" ? 2 * ri(10, 60) : 2 * ri(8, 70);
    const base = (180 - sommet) / 2;
    if (!Number.isInteger(base)) return null;
    const T = triangleDepuisAngles(base, base, ["A", "B", "C"]);
    const el = figureTriangle(T, { marques: [0, 0, 0],
      mesures: [{ i: 2, texte: sommet + "°" }] });
    /* Les deux côtés égaux portent un trait chacun : [CA] et [CB]. */
    el.push({ t: "segment", a: T.pts[2], b: T.pts[0], marques: 1 });
    el.push({ t: "segment", a: T.pts[2], b: T.pts[1], marques: 1 });
    return {
      content: "Le triangle ABC est isocèle en C, et l'angle au sommet Ĉ mesure " +
        sommet + "°.\nQuelle est la mesure des angles à la base ?",
      solution: "Dans un triangle isocèle, les deux angles à la base sont ÉGAUX " +
        "(codage : les deux côtés [CA] et [CB] portent le même trait).\n" +
        "Leur somme vaut 180° − " + sommet + "° = " + (180 - sommet) + "°.\n" +
        "Chacun mesure donc " + (180 - sommet) + "° ÷ 2 = " + base + "°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de chaque angle à la base ?",
            options: optionsAngle(base, [180 - sommet, sommet, 90]),
            reponse: { choix: base + "°" } },
          { question: "Que peut-on dire des angles à la base d'un triangle isocèle ?",
            options: melange(["Ils sont égaux", "Ils sont supplémentaires",
                              "Ils valent 60°", "Ils sont complémentaires"]),
            reponse: { choix: "Ils sont égaux" } },
        ],
        description: "un triangle isocèle en C, angle au sommet donné",
      },
    };
  },
  /* Angle à la base connu → angle au sommet. */
  function (d) {
    if (d === "F") return null;
    const base = ri(25, 80);
    const sommet = 180 - 2 * base;
    if (sommet < 15) return null;
    const T = triangleDepuisAngles(base, base, ["A", "B", "C"]);
    const el = figureTriangle(T, { mesures: [{ i: 0, texte: base + "°" }] });
    el.push({ t: "segment", a: T.pts[2], b: T.pts[0], marques: 1 });
    el.push({ t: "segment", a: T.pts[2], b: T.pts[1], marques: 1 });
    return {
      content: "Le triangle ABC est isocèle en C, et Â = " + base + "°.\n" +
        "Quelle est la mesure de l'angle au sommet Ĉ ?",
      solution: "Le triangle étant isocèle en C, B̂ = Â = " + base + "°.\n" +
        "Ĉ = 180° − " + base + "° − " + base + "° = " + sommet + "°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de Ĉ ?",
            options: optionsAngle(sommet, [base, 180 - base, 90]),
            reponse: { choix: sommet + "°" } },
          { question: "Comment le codage indique-t-il que le triangle est isocèle ?",
            options: melange(["Deux côtés portent le même trait", "Un angle droit est marqué",
                              "Les trois côtés sont codés", "Des chevrons sont tracés"]),
            reponse: { choix: "Deux côtés portent le même trait" } },
        ],
        description: "un triangle isocèle en C, angle à la base donné",
      },
    };
  },
  /* Cas particulier : l'équilatéral (difficile). */
  function (d) {
    if (d !== "D") return null;
    const T = triangleDepuisAngles(60, 60, ["A", "B", "C"]);
    const el = figureTriangle(T, {});
    /* Les trois côtés portent le même codage. */
    el.push({ t: "segment", a: T.pts[0], b: T.pts[1], marques: 1 });
    el.push({ t: "segment", a: T.pts[1], b: T.pts[2], marques: 1 });
    el.push({ t: "segment", a: T.pts[2], b: T.pts[0], marques: 1 });
    return {
      content: "Sur cette figure, les trois côtés portent le même codage.\n" +
        "Quelle est la mesure de chaque angle ?",
      solution: "Les trois côtés sont de même longueur : le triangle est ÉQUILATÉRAL.\n" +
        "Il est donc isocèle « des trois côtés » : ses trois angles sont égaux.\n" +
        "180° ÷ 3 = 60°. Chaque angle mesure 60°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de chaque angle ?",
            options: melange(["60°", "45°", "90°", "30°"]),
            reponse: { choix: "60°" } },
          { question: "Quelle est la nature de ce triangle ?",
            options: melange(["Équilatéral", "Isocèle sans plus", "Rectangle", "Quelconque"]),
            reponse: { choix: "Équilatéral" } },
        ],
        description: "un triangle dont les trois côtés portent le même codage",
      },
    };
  },
];

/* ═══════════════ TRIANGLE RECTANGLE ═══════════════ */
const M_RECTANGLE = [
  function (d) {
    const A = d === "F" ? ri(20, 70) : ri(15, 74);
    const autre = 90 - A;
    const T = triangleDepuisAngles(90, A, ["A", "B", "C"]);
    const el = figureTriangle(T, { angleDroit: 0,
      mesures: [{ i: 1, texte: A + "°" }] });
    return {
      content: "Le triangle ABC est rectangle en A, et B̂ = " + A + "°.\n" +
        "Quelle est la mesure de l'angle Ĉ ?",
      solution: "Dans un triangle rectangle, les deux angles aigus sont COMPLÉMENTAIRES : " +
        "leur somme vaut 90°.\n" +
        "Ĉ = 90° − " + A + "° = " + autre + "°.\n" +
        "(Vérification : 90° + " + A + "° + " + autre + "° = 180°.)",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de Ĉ ?",
            options: optionsAngle(autre, [A, 180 - A, 90]),
            reponse: { choix: autre + "°" } },
          { question: "Que peut-on dire des deux angles aigus d'un triangle rectangle ?",
            options: melange(["Ils sont complémentaires", "Ils sont supplémentaires",
                              "Ils sont égaux", "Ils valent 60°"]),
            reponse: { choix: "Ils sont complémentaires" } },
        ],
        description: "un triangle rectangle en A, angle B donné",
      },
    };
  },
  /* Rectangle isocèle. */
  function (d) {
    if (d === "F") return null;
    const T = triangleDepuisAngles(90, 45, ["A", "B", "C"]);
    const el = figureTriangle(T, { angleDroit: 0 });
    el.push({ t: "segment", a: T.pts[0], b: T.pts[1], marques: 1 });
    el.push({ t: "segment", a: T.pts[0], b: T.pts[2], marques: 1 });
    return {
      content: "Le triangle ABC est rectangle en A, et les deux côtés de l'angle droit " +
        "portent le même codage.\nQuelles sont les mesures des angles B̂ et Ĉ ?",
      solution: "Le triangle est rectangle ET isocèle en A.\n" +
        "Les angles B̂ et Ĉ sont donc égaux, et leur somme vaut 180° − 90° = 90°.\n" +
        "Chacun mesure 90° ÷ 2 = 45°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de B̂ et de Ĉ ?",
            options: melange(["45°", "60°", "30°", "90°"]),
            reponse: { choix: "45°" } },
          { question: "Quelle est la nature exacte de ce triangle ?",
            options: melange(["Rectangle isocèle", "Rectangle seulement",
                              "Équilatéral", "Isocèle non rectangle"]),
            reponse: { choix: "Rectangle isocèle" } },
        ],
        description: "un triangle rectangle isocèle en A",
      },
    };
  },
  /* Reconnaître si un triangle est rectangle à partir des angles (difficile). */
  function (d) {
    if (d !== "D") return null;
    const rect = alea() < 0.5;
    const A = rect ? 90 : ri(60, 85);
    const B = rect ? ri(20, 69) : ri(30, 175 - A - 20);
    const C = 180 - A - B;
    if (C < 18) return null;
    const T = triangleDepuisAngles(A, B, ["A", "B", "C"]);
    const el = figureTriangle(T, {
      mesures: [{ i: 0, texte: A + "°" }, { i: 1, texte: B + "°" }] });
    return {
      content: "Dans le triangle ABC, Â = " + A + "° et B̂ = " + B + "°.\n" +
        "Ce triangle est-il rectangle ?",
      solution: "On calcule le troisième angle : Ĉ = 180° − " + A + "° − " + B + "° = " + C + "°.\n" +
        "Les trois angles sont " + A + "°, " + B + "° et " + C + "°.\n" +
        (rect || C === 90
          ? "L'un d'eux vaut 90° : le triangle EST rectangle."
          : "Aucun ne vaut 90° : le triangle N'EST PAS rectangle."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Ce triangle est-il rectangle ?",
            options: ["Oui", "Non"],
            reponse: { choix: (rect || C === 90) ? "Oui" : "Non" } },
          { question: "Quelle est la mesure de Ĉ ?",
            options: optionsAngle(C, [A, B, 90]),
            reponse: { choix: C + "°" } },
        ],
        description: "un triangle avec deux angles donnés",
      },
    };
  },
];

/* ═══════════════ TYPES DE TRIANGLE (famille créée) ═══════════════ */
const M_TYPES = [
  /* Reconnaître la nature D'APRÈS LE CODAGE seul, sans mesure écrite. */
  function (d) {
    const type = pick(["equilateral", "isocele", "rectangle", "rectangle-isocele", "quelconque"]);
    let A, B, marquesCotes = [], angleDroit;
    if (type === "equilateral")            { A = 60; B = 60; }
    else if (type === "isocele")           { A = ri(35, 75); B = A; }
    else if (type === "rectangle")         { A = 90; B = ri(25, 64); }
    else if (type === "rectangle-isocele") { A = 90; B = 45; }
    else { A = ri(40, 78); B = ri(45, 82);
           if (A === B || 180 - A - B === A || 180 - A - B === B ||
               A === 90 || B === 90 || 180 - A - B === 90) return null; }
    const C = 180 - A - B;
    if (C < 18) return null;
    const T = triangleDepuisAngles(A, B, ["A", "B", "C"]);
    const el = figureTriangle(T, { angleDroit: (type === "rectangle" ||
      type === "rectangle-isocele") ? 0 : undefined });
    /* Codage des côtés égaux — c'est lui qui porte l'information. */
    if (type === "equilateral") {
      el.push({ t: "segment", a: T.pts[0], b: T.pts[1], marques: 1 });
      el.push({ t: "segment", a: T.pts[1], b: T.pts[2], marques: 1 });
      el.push({ t: "segment", a: T.pts[2], b: T.pts[0], marques: 1 });
    } else if (type === "isocele") {
      el.push({ t: "segment", a: T.pts[2], b: T.pts[0], marques: 1 });
      el.push({ t: "segment", a: T.pts[2], b: T.pts[1], marques: 1 });
    } else if (type === "rectangle-isocele") {
      el.push({ t: "segment", a: T.pts[0], b: T.pts[1], marques: 1 });
      el.push({ t: "segment", a: T.pts[0], b: T.pts[2], marques: 1 });
    }
    const nom = type === "equilateral" ? "Équilatéral"
              : type === "isocele" ? "Isocèle"
              : type === "rectangle" ? "Rectangle"
              : type === "rectangle-isocele" ? "Rectangle isocèle" : "Quelconque";
    const dit = type === "equilateral"
        ? "Les TROIS côtés portent le même trait : ils ont la même longueur. " +
          "Le triangle est ÉQUILATÉRAL, et ses trois angles valent 60°."
      : type === "isocele"
        ? "DEUX côtés portent le même trait : ils ont la même longueur. " +
          "Le triangle est ISOCÈLE, et les angles à la base sont égaux."
      : type === "rectangle"
        ? "Le petit carré signale un ANGLE DROIT : le triangle est RECTANGLE."
      : type === "rectangle-isocele"
        ? "Le petit carré signale un angle droit, et les deux côtés de cet angle " +
          "portent le même trait : le triangle est RECTANGLE ISOCÈLE."
      : "Aucun angle droit n'est codé, et aucun côté ne porte de trait d'égalité : " +
        "le triangle est QUELCONQUE.";
    return {
      content: "Observe le codage de la figure : quelle est la nature de ce triangle ?",
      solution: dit,
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la nature de ce triangle ?",
            options: melange(["Équilatéral", "Isocèle", "Rectangle",
                              "Rectangle isocèle", "Quelconque"]),
            reponse: { choix: nom } },
        ],
        description: "un triangle avec son codage",
      },
    };
  },
  /* Nature déduite des angles, avec la propriété à nommer. */
  function (d) {
    if (d === "F") return null;
    const type = pick(["equilateral", "isocele", "rectangle", "quelconque"]);
    let A, B;
    if (type === "equilateral")   { A = 60; B = 60; }
    else if (type === "isocele")  { A = ri(30, 75); B = A; if (A === 60) return null; }
    else if (type === "rectangle"){ A = 90; B = ri(25, 64); if (B === 45) return null; }
    else { A = ri(40, 78); B = ri(45, 82);
           if (A === B || 180 - A - B === A || 180 - A - B === B ||
               A === 90 || B === 90 || 180 - A - B === 90) return null; }
    const C = 180 - A - B;
    if (C < 18) return null;
    const T = triangleDepuisAngles(A, B, ["A", "B", "C"]);
    const el = figureTriangle(T, {
      mesures: [{ i: 0, texte: A + "°" }, { i: 1, texte: B + "°" }, { i: 2, texte: C + "°" }] });
    const nom = type === "equilateral" ? "Équilatéral" : type === "isocele" ? "Isocèle"
              : type === "rectangle" ? "Rectangle" : "Quelconque";
    return {
      content: "Les trois angles du triangle sont donnés sur la figure.\n" +
        "Quelle est sa nature, et sur quoi te fondes-tu ?",
      solution: "Somme : " + A + "° + " + B + "° + " + C + "° = 180° (c'est toujours le cas).\n" +
        (type === "equilateral" ? "Les trois angles sont égaux à 60° : ÉQUILATÉRAL."
         : type === "isocele" ? "Deux angles sont égaux : ISOCÈLE."
         : type === "rectangle" ? "Un angle vaut 90° : RECTANGLE."
         : "Les trois angles sont différents et aucun ne vaut 90° : QUELCONQUE."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la nature de ce triangle ?",
            options: melange(["Équilatéral", "Isocèle", "Rectangle", "Quelconque"]),
            reponse: { choix: nom } },
          { question: "Sur quel indice te fondes-tu ?",
            options: melange(["Deux angles égaux", "Trois angles égaux",
                              "Un angle de 90°", "Trois angles différents"]),
            reponse: { choix: type === "equilateral" ? "Trois angles égaux"
                            : type === "isocele" ? "Deux angles égaux"
                            : type === "rectangle" ? "Un angle de 90°"
                            : "Trois angles différents" } },
        ],
        description: "un triangle dont les trois angles sont donnés",
      },
    };
  },
  /* Un triangle peut-il exister ? (difficile)
     On ne dessine PAS de triangle : ce serait montrer une figure qui
     contredit l'énoncé quand la réponse est « non ». On trace les deux
     demi-droites issues de A et de B — elles se rencontrent si et seulement
     si la somme des deux angles est inférieure à 180°, ce qui se voit. */
  function (d) {
    if (d !== "D") return null;
    const possible = alea() < 0.55;
    const A = ri(30, 88);
    const B = possible ? ri(25, 175 - A) : ri(180 - A, 178 - Math.floor(A / 3));
    if (B < 15 || B > 160) return null;

    const yBase = H - 80;
    const PA = [70, yBase], PB = [L - 70, yBase];
    const rA = [PA[0] + Math.cos(rad(A)) * 60, PA[1] - Math.sin(rad(A)) * 60];
    const rB = [PB[0] - Math.cos(rad(B)) * 60, PB[1] - Math.sin(rad(B)) * 60];
    const el = [
      { t: "segment", a: PA, b: PB },
      { t: "demidroite", a: PA, b: rA },
      { t: "demidroite", a: PB, b: rB },
      { t: "point", x: PA[0], y: PA[1], nom: "A", pos: "bas" },
      { t: "point", x: PB[0], y: PB[1], nom: "B", pos: "bas" },
      { t: "texte", x: PA[0] + 46, y: yBase - 14, s: A + "°" },
      { t: "texte", x: PB[0] - 46, y: yBase - 14, s: B + "°" },
    ];
    return {
      content: "Un élève affirme qu'il existe un triangle dont deux angles mesurent " +
        A + "° et " + B + "°.\nA-t-il raison ? Observe si les deux demi-droites se rencontrent.",
      solution: "La somme des trois angles d'un triangle vaut toujours 180°.\n" +
        "Ici les deux angles donnés totalisent déjà " + A + "° + " + B + "° = " + (A + B) + "°.\n" +
        (A + B < 180
          ? "Il reste " + (180 - A - B) + "° pour le troisième angle : le triangle EXISTE, " +
            "et l'on voit que les deux demi-droites finissent par se croiser."
          : "Leur somme atteint ou dépasse 180° : il ne reste rien pour le troisième angle. " +
            "Ce triangle N'EXISTE PAS, et les deux demi-droites s'écartent sans jamais se croiser."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Un tel triangle existe-t-il ?",
            options: ["Oui", "Non"],
            reponse: { choix: A + B < 180 ? "Oui" : "Non" } },
          { question: "Quel calcul permet de trancher ?",
            options: melange(["La somme des deux angles donnés", "Leur différence",
                              "Leur produit", "Leur moyenne"]),
            reponse: { choix: "La somme des deux angles donnés" } },
        ],
        description: "un segment [AB] et deux demi-droites formant les angles donnés",
      },
    };
  },
];

/* ═══════════════ TABLE DES FAMILLES ═══════════════ */
const FAMILLES = {
  "Triangle quelconque":     M_QUELCONQUE,
  "Triangle isocèle":        M_ISOCELE,
  "Triangle rectangle":      M_RECTANGLE,
  "Types de triangle":       M_TYPES,
  "Triangle constructible ?": M_TYPES,
};

/* Familles à CRÉER si elles n'existent pas encore en base. Une famille n'est
   qu'une valeur de colonne : elle naît avec ses premiers exercices. */
const A_CREER = ["Types de triangle"];

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
[["Somme des angles", "Triangle quelconque"],
 ["Les angles d'un triangle isocèle", "Triangle isocèle"],
 ["Triangle isocèle : angle au sommet", "Triangle isocèle"],
 ["Triangle rectangle isocèle", "Triangle rectangle"],
 ["Type de triangle", "Types de triangle"],
 ["Nature d'un triangle", "Types de triangle"],
 ["Reconnaître un triangle", "Types de triangle"],
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
const cleEx = e => String(e.content).replace(/\s+/g, " ").trim().toLowerCase() + "|" +
  JSON.stringify(e.interactif.figure.elements) + "|" +
  JSON.stringify((e.interactif.questions || []).map(q => q.reponse));

function genererFamille(nom, besoins, vus) {
  const modeles = FAMILLES[nom];
  const sortie = [];
  for (const d of ["F", "M", "D"]) {
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < reste * 500 + 5000) {
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
                  figures: ex.filter(e => e.interactif).length,
                  "à créer": A_CREER.includes(nom) ? "oui" : "" });
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
    const { rows: d } = await pool.query(
      "SELECT DISTINCT chapitre FROM exercises WHERE chapitre IS NOT NULL ORDER BY 1");
    console.log("Chapitres existants :");
    d.forEach(r => console.log("   " + JSON.stringify(r.chapitre)));
    await pool.end(); return;
  }

  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(brut, "chapitre", "Géométrie du triangle");
  console.log(`Chapitre « ${CHAPITRE} » : ${brut.length} exercice(s) en base.\n`);

  const parFam = new Map();
  brut.forEach(r => { if (!r.famille) return; const k = cle(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

  /* Familles demandées mais absentes : on les crée. */
  A_CREER.forEach(nom => {
    if (!parFam.has(cle(nom))) {
      parFam.set(cle(nom), { nom: nom, items: [], creee: true });
      console.log(`+ Famille « ${nom} » absente de la base : elle sera CRÉÉE.`);
    }
  });

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
    const ref = g.items.length ? g.items : brut;
    const modele = { level: maj(ref, "level", "college"), subject: maj(ref, "subject", "Géométrie"),
                     classe: maj(ref, "classe", "5ème"), type: maj(ref, "type", "exercice"),
                     chapitre: g.items.length ? g.items[0].chapitre : CHAPITRE };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content,
      solution: e.solution, difficulty: LIBELLE[e.d], level: modele.level, subject: modele.subject,
      classe: modele.classe, chapitre: modele.chapitre, type: modele.type, famille: g.nom,
      interactif: JSON.stringify(e.interactif) }); });
    rapport.push({ famille: g.nom, modele: canon, avant: g.items.length,
                   ajoutes: neufs.length, apres: g.items.length + neufs.length,
                   nouvelle: g.creee ? "oui" : "" });
  }

  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`triangle-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : triangle-avant-generation-${stamp}.json`);

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
