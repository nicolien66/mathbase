/* Polymates — generer-angles.js
   Porte à 100 exercices les familles du chapitre « Angles et parallélisme ».

   ── CE QUI EST PRODUIT ───────────────────────────────────────────────────
   CHAQUE exercice porte une FIGURE (widget figures.js) : deux droites
   coupées par une sécante, un angle codé, un croisement. Aucun énoncé n'est
   purement textuel — la situation se lit sur le dessin.

   Les exercices qui s'y prêtent posent une SECONDE QUESTION : « comment
   s'appelle la paire d'angles marquée ? » (correspondants, alternes-
   internes, alternes-externes, opposés par le sommet…). La note est la
   moyenne des deux questions, si bien que reconnaître la configuration
   compte autant que la conclusion.

   Le codage géométrique est posé par le widget : arcs des angles marqués,
   chevrons du parallélisme, petit carré de l'angle droit.

   · Répartition pour 100 : 20 faciles, 30 moyens, 50 difficiles.

   ── USAGE ────────────────────────────────────────────────────────────────
     node generer-angles.js --apercu
     node generer-angles.js --apercu "correspondants"
     $env:DATABASE_URL = "postgresql://..."
     node generer-angles.js            # simulation
     node generer-angles.js --execute
*/

"use strict";
const fs = require("fs");

const ARGS    = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
/* Le chapitre visé. « %angle% » attrapait aussi « Géométrie du TRIANGLE » et
   « TRIANGLEs semblables » : on cible désormais le libellé complet. */
const iCh = ARGS.indexOf("--chapitre");
const FILTRE = (iCh >= 0 && ARGS[iCh + 1] && !ARGS[iCh + 1].startsWith("--"))
  ? "%" + ARGS[iCh + 1] + "%" : "%angles et parall%";
const GRAINE = opt("--graine", 20260817);
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

/* Options d'angles toutes DIFFÉRENTES : proposer deux fois la même valeur
   trahirait la bonne réponse (90° revenait souvent en double avec 180−m). */
function optionsAngle(bon, candidats) {
  const vus = new Set([bon]);
  const out = [bon];
  for (const c of candidats) {
    if (c > 0 && c < 180 && !vus.has(c)) { vus.add(c); out.push(c); }
    if (out.length === 4) break;
  }
  let k = 5;
  while (out.length < 4) {
    for (const c of [bon + k, bon - k]) {
      if (out.length < 4 && c > 0 && c < 180 && !vus.has(c)) { vus.add(c); out.push(c); }
    }
    k += 7;
  }
  return melange(out).map(x => x + "°");
}

const L = 440, H = 300;
const rad = d => d * Math.PI / 180;

/* ═══════════════ CONSTRUCTION DE LA FIGURE TYPE ═══════════════
   Deux droites (d₁) et (d₂) de même direction (ou non), coupées par une
   sécante (s). Les points d'intersection sont I et J.

   `paires` décrit les couples d'angles remarquables, avec pour chacun sa
   position autour de I et de J. Un angle est repéré par la bissectrice de
   son secteur, ce qui permet de placer son arc et son étiquette. */
function figureSecante(o) {
  const angD = o.angD;                      // direction des deux droites
  const angS = o.angS;                      // direction de la sécante
  const u = [Math.cos(rad(angD)), -Math.sin(rad(angD))];
  const w = [Math.cos(rad(angS)), -Math.sin(rad(angS))];
  const cx = L / 2, cy = H / 2;
  const I = [cx - w[0] * 55, cy - w[1] * 55];
  const J = [cx + w[0] * 55, cy + w[1] * 55];

  const el = [
    { t: "droite", a: I, b: [I[0] + u[0] * 60, I[1] + u[1] * 60] },
    { t: "droite", a: J, b: [J[0] + u[0] * 60, J[1] + u[1] * 60] },
    { t: "droite", a: I, b: J },
    { t: "point", x: I[0], y: I[1], nom: "I", pos: "gauche" },
    { t: "point", x: J[0], y: J[1], nom: "J", pos: "droite" },
    { t: "texte", x: I[0] + u[0] * 150, y: I[1] + u[1] * 150 - 12, s: "(d₁)" },
    { t: "texte", x: J[0] + u[0] * 150, y: J[1] + u[1] * 150 - 12, s: "(d₂)" },
    { t: "texte", x: J[0] + w[0] * 75, y: J[1] + w[1] * 75 + 4, s: "(s)" },
  ];
  if (o.parallele) {
    el.push({ t: "chevrons", a: [I[0] - u[0] * 75, I[1] - u[1] * 75],
              b: [I[0] + u[0] * 75, I[1] + u[1] * 75], n: 1 });
    el.push({ t: "chevrons", a: [J[0] - u[0] * 75, J[1] - u[1] * 75],
              b: [J[0] + u[0] * 75, J[1] + u[1] * 75], n: 1 });
  }
  return { el, I, J, u, w };
}

/* Marque un angle : un arc autour du sommet, dans la direction donnée. */
function marqueAngle(el, sommet, dir, nom, r) {
  const R = r || 26;
  const a = Math.atan2(-dir[1], dir[0]) * 180 / Math.PI;
  el.push({ t: "arc", c: sommet, r: R, de: a - 17, a: a + 17 });
  el.push({ t: "texte", x: sommet[0] + dir[0] * (R + 16),
            y: sommet[1] + dir[1] * (R + 16) + 4, s: nom });
}
/* Direction d'un secteur, combinaison des deux directions de droites. */
const dir = (u, w, su, sw) => {
  const x = u[0] * su + w[0] * sw, y = u[1] * su + w[1] * sw;
  const n = Math.hypot(x, y) || 1;
  return [x / n, y / n];
};

/* ═══════════════ LES PAIRES D'ANGLES ═══════════════
   Chaque configuration est décrite par les deux secteurs marqués et par la
   relation qui unit les angles quand les droites sont parallèles. */
const CONFIGS = [
  { nom: "Angles correspondants",
    /* Même côté de la sécante, même côté de chaque droite. */
    sI: [+1, +1], sJ: [+1, +1],
    egaux: true,
    dit: "Ces deux angles sont situés du MÊME CÔTÉ de la sécante (s), " +
         "l'un au-dessus de (d₁), l'autre au-dessus de (d₂) : ce sont des angles CORRESPONDANTS." },
  { nom: "Angles alternes-internes",
    /* De part et d'autre de la sécante, tous deux entre les deux droites. */
    sI: [+1, +1], sJ: [-1, -1],
    egaux: true,
    dit: "Ces deux angles sont situés de PART ET D'AUTRE de la sécante (s), " +
         "et tous les deux ENTRE (d₁) et (d₂) : ce sont des angles ALTERNES-INTERNES." },
  { nom: "Angles alternes-externes",
    /* De part et d'autre de la sécante, tous deux à l'extérieur. */
    sI: [-1, -1], sJ: [+1, +1],
    egaux: true,
    dit: "Ces deux angles sont situés de PART ET D'AUTRE de la sécante (s), " +
         "et tous les deux À L'EXTÉRIEUR de la bande formée par (d₁) et (d₂) : " +
         "ce sont des angles ALTERNES-EXTERNES." },
];

const TOUTES_OPTIONS = ["Angles correspondants", "Angles alternes-internes",
                        "Angles alternes-externes", "Angles opposés par le sommet"];

/* Construit la figure complète d'une configuration. */
function figureConfig(cfg, o) {
  const f = figureSecante(o);
  const el = f.el;
  marqueAngle(el, f.I, dir(f.u, f.w, cfg.sI[0], cfg.sI[1]), o.nomI || "x̂");
  marqueAngle(el, f.J, dir(f.u, f.w, cfg.sJ[0], cfg.sJ[1]), o.nomJ || "ŷ");
  return el;
}

/* ═══════════════ ANGLES CORRESPONDANTS ═══════════════ */
function exoConfig(d, cfgVoulue) {
  const cfg = cfgVoulue || pick(CONFIGS);
  const angD = ri(-18, 18), angS = angD + ri(55, 110);
  const mesure = ri(28, 152);
  const el = figureConfig(cfg, { angD, angS, parallele: true, nomI: "x̂", nomJ: "ŷ" });
  el.push({ t: "texte", x: 60, y: 26, s: "x̂ = " + mesure + "°" });

  const q1 = {
    question: "Les droites (d₁) et (d₂) sont parallèles. Quelle est la mesure de ŷ ?",
    options: optionsAngle(mesure, [180 - mesure, mesure > 90 ? mesure - 20 : mesure + 20, 90]),
    reponse: { choix: mesure + "°" },
  };
  const q2 = {
    question: "Comment s'appelle cette paire d'angles ?",
    options: melange(TOUTES_OPTIONS),
    reponse: { choix: cfg.nom },
  };
  return {
    content: "Sur la figure, (d₁) et (d₂) sont parallèles et x̂ mesure " + mesure + "°.",
    solution: cfg.dit + "\n" +
      "Propriété : si deux droites parallèles sont coupées par une sécante, " +
      "les angles " + cfg.nom.toLowerCase().replace("angles ", "") + " sont ÉGAUX.\n" +
      "Donc ŷ = x̂ = " + mesure + "°.",
    interactif: {
      widget: "figure",
      figure: { largeur: L, hauteur: H, elements: el },
      questions: [q1, q2],
      description: "deux droites parallèles coupées par une sécante, deux angles marqués",
    },
  };
}

const M_CORRESPONDANTS = [
  d => exoConfig(d, CONFIGS[0]),
  /* Prouver le parallélisme À PARTIR de l'égalité des angles (réciproque). */
  function (d) {
    if (d === "F") return null;
    const cfg = pick(CONFIGS);
    const angD = ri(-18, 18), angS = angD + ri(55, 110);
    const egaux = alea() < 0.6;
    const m1 = ri(35, 145);
    const m2 = egaux ? m1 : m1 + pick([-25, -15, 15, 25]);
    const el = figureConfig(cfg, { angD, angS, parallele: false, nomI: "x̂", nomJ: "ŷ" });
    el.push({ t: "texte", x: 60, y: 24, s: "x̂ = " + m1 + "°" });
    el.push({ t: "texte", x: L - 70, y: H - 12, s: "ŷ = " + m2 + "°" });
    return {
      content: "Sur la figure, x̂ = " + m1 + "° et ŷ = " + m2 + "°.\n" +
        "Les droites (d₁) et (d₂) sont-elles parallèles ?",
      solution: cfg.dit + "\n" +
        "Réciproque : si deux angles " + cfg.nom.toLowerCase().replace("angles ", "") +
        " sont égaux, alors les deux droites sont parallèles.\n" +
        (egaux
          ? "Ici x̂ = ŷ = " + m1 + "° : les droites SONT parallèles."
          : "Ici x̂ = " + m1 + "° et ŷ = " + m2 + "° : les angles ne sont pas égaux, " +
            "donc les droites NE SONT PAS parallèles."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Les droites (d₁) et (d₂) sont-elles parallèles ?",
            options: ["Oui", "Non", "On ne peut pas savoir"],
            reponse: { choix: egaux ? "Oui" : "Non" } },
          { question: "Comment s'appelle cette paire d'angles ?",
            options: melange(TOUTES_OPTIONS), reponse: { choix: cfg.nom } },
        ],
        description: "deux droites coupées par une sécante, deux angles mesurés",
      },
    };
  },
  /* Angle supplémentaire : le côté opposé sur la même droite. */
  function (d) {
    if (d !== "D") return null;
    const angD = ri(-18, 18), angS = angD + ri(55, 110);
    const m = ri(35, 145);
    const f = figureSecante({ angD, angS, parallele: true });
    const el = f.el;
    marqueAngle(el, f.I, dir(f.u, f.w, +1, +1), "x̂");
    marqueAngle(el, f.J, dir(f.u, f.w, -1, +1), "ẑ");
    el.push({ t: "texte", x: 60, y: 24, s: "x̂ = " + m + "°" });
    return {
      content: "Sur la figure, (d₁) et (d₂) sont parallèles et x̂ mesure " + m + "°.\n" +
        "Quelle est la mesure de ẑ ?",
      solution: "x̂ et l'angle correspondant en J sont égaux : cet angle mesure " + m + "°.\n" +
        "Or ẑ et cet angle sont adjacents et forment un angle plat : ils sont SUPPLÉMENTAIRES.\n" +
        "ẑ = 180° − " + m + "° = " + (180 - m) + "°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de ẑ ?",
            options: optionsAngle(180 - m, [m, 90, m > 90 ? m - 25 : m + 25]),
            reponse: { choix: (180 - m) + "°" } },
          { question: "Quelle relation lie ẑ et l'angle correspondant à x̂ ?",
            options: melange(["Ils sont supplémentaires", "Ils sont égaux",
                              "Ils sont complémentaires", "Ils sont opposés par le sommet"]),
            reponse: { choix: "Ils sont supplémentaires" } },
        ],
        description: "deux parallèles coupées par une sécante, angles x et z marqués",
      },
    };
  },
];

/* ═══════════════ ALTERNES-INTERNES ═══════════════ */
const M_ALTERNES = [
  d => exoConfig(d, CONFIGS[1]),
  d => (d === "F" ? null : exoConfig(d, CONFIGS[2])),
  /* Reconnaître la configuration, sans calcul. */
  function (d) {
    const cfg = pick(CONFIGS);
    const angD = ri(-18, 18), angS = angD + ri(55, 110);
    const el = figureConfig(cfg, { angD, angS, parallele: alea() < 0.5, nomI: "â", nomJ: "b̂" });
    return {
      content: "Observe la position des deux angles marqués sur la figure.",
      solution: cfg.dit,
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Comment s'appelle cette paire d'angles ?",
            options: melange(TOUTES_OPTIONS), reponse: { choix: cfg.nom } },
        ],
        description: "deux droites coupées par une sécante, deux angles marqués",
      },
    };
  },
];

/* ═══════════════ ANGLES OPPOSÉS PAR LE SOMMET ═══════════════ */
const M_OPPOSES = [
  function (d) {
    const a1 = ri(-25, 25), a2 = a1 + ri(45, 110);
    const u = [Math.cos(rad(a1)), -Math.sin(rad(a1))];
    const v = [Math.cos(rad(a2)), -Math.sin(rad(a2))];
    const O = [L / 2, H / 2];
    const m = ri(25, 155);
    const el = [
      { t: "droite", a: O, b: [O[0] + u[0] * 50, O[1] + u[1] * 50] },
      { t: "droite", a: O, b: [O[0] + v[0] * 50, O[1] + v[1] * 50] },
      { t: "point", x: O[0], y: O[1], nom: "O", pos: "bas" },
    ];
    marqueAngle(el, O, dir(u, v, +1, +1), "x̂", 30);
    marqueAngle(el, O, dir(u, v, -1, -1), "ŷ", 30);
    el.push({ t: "texte", x: 60, y: 24, s: "x̂ = " + m + "°" });
    return {
      content: "Deux droites se coupent en O. L'angle x̂ mesure " + m + "°.\n" +
        "Quelle est la mesure de ŷ ?",
      solution: "x̂ et ŷ sont OPPOSÉS PAR LE SOMMET : ils ont le même sommet O et " +
        "leurs côtés sont dans le prolongement l'un de l'autre.\n" +
        "Deux angles opposés par le sommet ont la même mesure.\n" +
        "ŷ = " + m + "°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de ŷ ?",
            options: optionsAngle(m, [180 - m, 90, m > 90 ? m - 30 : m + 30]),
            reponse: { choix: m + "°" } },
          { question: "Comment s'appelle cette paire d'angles ?",
            options: melange(TOUTES_OPTIONS),
            reponse: { choix: "Angles opposés par le sommet" } },
        ],
        description: "deux droites sécantes en O, angles opposés marqués",
      },
    };
  },
  /* Angles adjacents supplémentaires au même croisement. */
  function (d) {
    if (d === "F") return null;
    const a1 = ri(-25, 25), a2 = a1 + ri(45, 110);
    const u = [Math.cos(rad(a1)), -Math.sin(rad(a1))];
    const v = [Math.cos(rad(a2)), -Math.sin(rad(a2))];
    const O = [L / 2, H / 2];
    const m = ri(25, 155);
    const el = [
      { t: "droite", a: O, b: [O[0] + u[0] * 50, O[1] + u[1] * 50] },
      { t: "droite", a: O, b: [O[0] + v[0] * 50, O[1] + v[1] * 50] },
      { t: "point", x: O[0], y: O[1], nom: "O", pos: "bas" },
    ];
    marqueAngle(el, O, dir(u, v, +1, +1), "x̂", 30);
    marqueAngle(el, O, dir(u, v, -1, +1), "t̂", 30);
    el.push({ t: "texte", x: 60, y: 24, s: "x̂ = " + m + "°" });
    return {
      content: "Deux droites se coupent en O, et x̂ mesure " + m + "°.\n" +
        "Quelle est la mesure de t̂ ?",
      solution: "x̂ et t̂ sont ADJACENTS et leurs côtés extérieurs forment une droite : " +
        "ensemble ils forment un angle plat.\n" +
        "Ils sont donc SUPPLÉMENTAIRES : t̂ = 180° − " + m + "° = " + (180 - m) + "°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de t̂ ?",
            options: optionsAngle(180 - m, [m, 90, m > 90 ? m - 25 : m + 25]),
            reponse: { choix: (180 - m) + "°" } },
          { question: "Quelle relation lie x̂ et t̂ ?",
            options: melange(["Ils sont supplémentaires", "Ils sont égaux",
                              "Ils sont complémentaires", "Ils sont opposés par le sommet"]),
            reponse: { choix: "Ils sont supplémentaires" } },
        ],
        description: "deux droites sécantes, deux angles adjacents marqués",
      },
    };
  },
];

/* ═══════════════ PROUVER UN PARALLÉLISME ═══════════════ */
const M_PROUVER = [
  function (d) {
    const cfg = pick(CONFIGS);
    const angD = ri(-18, 18), angS = angD + ri(55, 110);
    const egaux = alea() < 0.55;
    const m1 = ri(35, 145);
    const m2 = egaux ? m1 : m1 + pick([-30, -18, 18, 30]);
    const el = figureConfig(cfg, { angD, angS, parallele: false, nomI: "x̂", nomJ: "ŷ" });
    el.push({ t: "texte", x: 58, y: 24, s: "x̂ = " + m1 + "°" });
    el.push({ t: "texte", x: L - 68, y: H - 12, s: "ŷ = " + m2 + "°" });
    return {
      content: "Sur la figure, x̂ = " + m1 + "° et ŷ = " + m2 + "°.\n" +
        "Peut-on affirmer que (d₁) et (d₂) sont parallèles ?",
      solution: cfg.dit + "\n" +
        "Réciproque : si deux angles " + cfg.nom.toLowerCase().replace("angles ", "") +
        " sont ÉGAUX, alors les droites sont parallèles.\n" +
        (egaux ? "Ici les deux angles mesurent " + m1 + "° : (d₁) ∥ (d₂)."
               : "Ici " + m1 + "° ≠ " + m2 + "° : on ne peut pas conclure au parallélisme, " +
                 "et les droites ne le sont donc pas."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "(d₁) et (d₂) sont-elles parallèles ?",
            options: ["Oui, elles sont parallèles", "Non, elles ne le sont pas"],
            reponse: { choix: egaux ? "Oui, elles sont parallèles" : "Non, elles ne le sont pas" } },
          { question: "Sur quelle paire d'angles s'appuie le raisonnement ?",
            options: melange(TOUTES_OPTIONS), reponse: { choix: cfg.nom } },
        ],
        description: "deux droites coupées par une sécante, angles mesurés",
      },
    };
  },
  /* Par les perpendiculaires à une même droite. */
  function (d) {
    if (d === "F") return null;
    const angD = ri(-15, 15);
    const u = [Math.cos(rad(angD)), -Math.sin(rad(angD))];
    const p = [-u[1], u[0]];
    const cx = L / 2, cy = H / 2;
    const P1 = [cx - p[0] * 60, cy - p[1] * 60], P2 = [cx + p[0] * 60, cy + p[1] * 60];
    const el = [
      { t: "droite", a: P1, b: [P1[0] + u[0] * 50, P1[1] + u[1] * 50] },
      { t: "droite", a: P2, b: [P2[0] + u[0] * 50, P2[1] + u[1] * 50] },
      { t: "droite", a: P1, b: P2 },
      { t: "angledroit", s: P1, a: [P1[0] + u[0] * 40, P1[1] + u[1] * 40],
        b: [P1[0] + p[0] * 40, P1[1] + p[1] * 40] },
      { t: "angledroit", s: P2, a: [P2[0] + u[0] * 40, P2[1] + u[1] * 40],
        b: [P2[0] - p[0] * 40, P2[1] - p[1] * 40] },
      { t: "texte", x: P1[0] + u[0] * 150, y: P1[1] + u[1] * 150 - 12, s: "(d₁)" },
      { t: "texte", x: P2[0] + u[0] * 150, y: P2[1] + u[1] * 150 - 12, s: "(d₂)" },
      { t: "texte", x: cx + p[0] * 110 + 22, y: cy + p[1] * 110, s: "(s)" },
    ];
    return {
      content: "Sur la figure, les deux angles droits sont codés : (d₁) ⊥ (s) et (d₂) ⊥ (s).\n" +
        "Que peut-on en déduire ?",
      solution: "Propriété : si deux droites sont perpendiculaires à une MÊME droite, " +
        "alors elles sont parallèles entre elles.\n" +
        "Ici (d₁) ⊥ (s) et (d₂) ⊥ (s), donc (d₁) ∥ (d₂).\n" +
        "On peut aussi le voir avec les angles : les deux angles droits sont " +
        "correspondants et égaux, ce qui prouve le parallélisme.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Que peut-on déduire pour (d₁) et (d₂) ?",
            options: ["Elles sont parallèles", "Elles sont perpendiculaires",
                      "Elles sont sécantes", "On ne peut rien conclure"],
            reponse: { choix: "Elles sont parallèles" } },
          { question: "Les deux angles droits marqués forment une paire d'angles…",
            options: melange(TOUTES_OPTIONS), reponse: { choix: "Angles correspondants" } },
        ],
        description: "deux droites perpendiculaires à une même sécante",
      },
    };
  },
  /* Chaîne de raisonnement (difficile). */
  function (d) {
    if (d !== "D") return null;
    const cfg = pick([CONFIGS[0], CONFIGS[1]]);
    const angD = ri(-15, 15), angS = angD + ri(60, 105);
    const m = ri(40, 140);
    const el = figureConfig(cfg, { angD, angS, parallele: false, nomI: "x̂", nomJ: "ŷ" });
    el.push({ t: "texte", x: 58, y: 24, s: "x̂ = " + m + "°" });
    el.push({ t: "texte", x: L - 78, y: H - 12, s: "ŷ = " + (180 - m) + "°" });
    return {
      content: "Sur la figure, x̂ = " + m + "° et ŷ = " + (180 - m) + "°.\n" +
        "Les droites (d₁) et (d₂) sont-elles parallèles ? Justifie.",
      solution: cfg.dit + "\n" +
        "Pour que les droites soient parallèles, ces deux angles devraient être ÉGAUX.\n" +
        "Or " + m + "° ≠ " + (180 - m) + "°" +
        (m === 90 ? "" : " (leur somme vaut 180°, ce qui n'est pas le critère ici)") + ".\n" +
        (m === 90 ? "Cas particulier : les deux angles valent 90°, ils sont donc égaux " +
                    "et les droites SONT parallèles."
                  : "Les droites NE SONT donc PAS parallèles.") + "\n" +
        "Attention : deux angles supplémentaires ne prouvent rien pour des angles " +
        cfg.nom.toLowerCase().replace("angles ", "") + " — c'est l'égalité qu'il faut.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "(d₁) et (d₂) sont-elles parallèles ?",
            options: ["Oui", "Non"],
            reponse: { choix: m === 90 ? "Oui" : "Non" } },
          { question: "Comment s'appelle cette paire d'angles ?",
            options: melange(TOUTES_OPTIONS), reponse: { choix: cfg.nom } },
        ],
        description: "deux droites coupées par une sécante, angles supplémentaires",
      },
    };
  },
];


/* ═══════════════ COMPLÉMENTAIRES ET SUPPLÉMENTAIRES ═══════════════ */
const M_COMPSUPP = [
  /* Deux angles adjacents formant un angle droit ou un angle plat. */
  function (d) {
    const droit = alea() < 0.5;
    const m = droit ? ri(10, 80) : ri(20, 160);
    const autre = (droit ? 90 : 180) - m;
    const O = [L / 2, H / 2 + 40];
    const base = [1, 0];
    /* Le côté commun sépare les deux angles. */
    const total = droit ? 90 : 180;
    const a1 = rad(0), a2 = rad(m), a3 = rad(total);
    const R = 105;
    const P = a => [O[0] + R * Math.cos(a), O[1] - R * Math.sin(a)];
    const el = [
      { t: "segment", a: O, b: P(a1) },
      { t: "segment", a: O, b: P(a2) },
      { t: "segment", a: O, b: P(a3) },
      { t: "point", x: O[0], y: O[1], nom: "O", pos: "bas" },
      { t: "point", x: P(a1)[0], y: P(a1)[1], nom: "A", pos: "droite" },
      { t: "point", x: P(a2)[0], y: P(a2)[1], nom: "B", pos: "haut" },
      { t: "point", x: P(a3)[0], y: P(a3)[1], nom: "C", pos: "gauche" },
    ];
    marqueAngle(el, O, [Math.cos(a2 / 2), -Math.sin(a2 / 2)], "x̂", 34);
    marqueAngle(el, O, [Math.cos((a2 + a3) / 2), -Math.sin((a2 + a3) / 2)], "ŷ", 34);
    if (droit) el.push({ t: "angledroit", s: O, a: P(a1), b: P(a3) });
    el.push({ t: "texte", x: 62, y: 26, s: "x̂ = " + m + "°" });
    return {
      content: "Sur la figure, les angles x̂ et ŷ sont adjacents et " +
        (droit ? "forment ensemble un angle droit" : "forment ensemble un angle plat") +
        ".\nx̂ mesure " + m + "°. Quelle est la mesure de ŷ ?",
      solution: (droit
        ? "Deux angles dont la somme vaut 90° sont COMPLÉMENTAIRES.\n" +
          "ŷ = 90° − " + m + "° = " + autre + "°."
        : "Deux angles dont la somme vaut 180° sont SUPPLÉMENTAIRES.\n" +
          "ŷ = 180° − " + m + "° = " + autre + "°."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de ŷ ?",
            options: optionsAngle(autre, [m, droit ? 180 - m : 90 - m > 0 ? 90 - m : 90, 90]),
            reponse: { choix: autre + "°" } },
          { question: "Comment s'appellent ces deux angles ?",
            options: melange(["Complémentaires", "Supplémentaires",
                              "Opposés par le sommet", "Correspondants"]),
            reponse: { choix: droit ? "Complémentaires" : "Supplémentaires" } },
        ],
        description: droit ? "deux angles adjacents formant un angle droit"
                           : "deux angles adjacents formant un angle plat",
      },
    };
  },
  /* Reconnaître la relation à partir de deux mesures données. */
  function (d) {
    if (d === "F") return null;
    const type = pick(["comp", "supp", "ni"]);
    const m1 = ri(15, 80);
    const m2 = type === "comp" ? 90 - m1 : type === "supp" ? 180 - m1 : m1 + pick([15, 25, 35]);
    if (m2 <= 0 || m2 >= 180) return null;
    const O1 = [L / 4 + 10, H / 2 + 40], O2 = [3 * L / 4 - 10, H / 2 + 40];
    const el = [];
    [[O1, m1, "x̂"], [O2, m2, "ŷ"]].forEach(([O, m, nom]) => {
      const R = 78;
      const A = [O[0] + R, O[1]];
      const B = [O[0] + R * Math.cos(rad(m)), O[1] - R * Math.sin(rad(m))];
      el.push({ t: "segment", a: O, b: A }, { t: "segment", a: O, b: B },
               { t: "point", x: O[0], y: O[1], nom: "", pos: "bas" });
      marqueAngle(el, O, [Math.cos(rad(m / 2)), -Math.sin(rad(m / 2))], nom, 30);
      el.push({ t: "texte", x: O[0], y: O[1] + 28, s: m + "°" });
    });
    const somme = m1 + m2;
    return {
      content: "Deux angles sont représentés : x̂ = " + m1 + "° et ŷ = " + m2 + "°.\n" +
        "Quelle relation lie ces deux angles ?",
      solution: "On calcule leur somme : " + m1 + "° + " + m2 + "° = " + somme + "°.\n" +
        (somme === 90 ? "La somme vaut 90° : les angles sont COMPLÉMENTAIRES."
         : somme === 180 ? "La somme vaut 180° : les angles sont SUPPLÉMENTAIRES."
         : "La somme ne vaut ni 90° ni 180° : les angles ne sont ni complémentaires " +
           "ni supplémentaires."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle relation lie ces deux angles ?",
            options: melange(["Complémentaires", "Supplémentaires", "Aucune des deux"]),
            reponse: { choix: somme === 90 ? "Complémentaires"
                            : somme === 180 ? "Supplémentaires" : "Aucune des deux" } },
          { question: "Combien vaut la somme des deux angles ?",
            options: optionsAngle(somme > 179 ? 180 : somme, [90, 180, somme + 10, somme - 10])
                       .concat(somme === 180 ? [] : []),
            reponse: { choix: (somme > 179 ? 180 : somme) + "°" } },
        ],
        description: "deux angles mesurés séparément",
      },
    };
  },
  /* Le complémentaire ou le supplémentaire à trouver (difficile). */
  function (d) {
    if (d !== "D") return null;
    const comp = alea() < 0.5;
    const m = comp ? ri(10, 80) : ri(15, 165);
    const r = (comp ? 90 : 180) - m;
    const O = [L / 2, H / 2 + 40], R = 105;
    const A = [O[0] + R, O[1]];
    const B = [O[0] + R * Math.cos(rad(m)), O[1] - R * Math.sin(rad(m))];
    const el = [{ t: "segment", a: O, b: A }, { t: "segment", a: O, b: B },
                { t: "point", x: O[0], y: O[1], nom: "O", pos: "bas" }];
    marqueAngle(el, O, [Math.cos(rad(m / 2)), -Math.sin(rad(m / 2))], "x̂", 36);
    el.push({ t: "texte", x: 62, y: 26, s: "x̂ = " + m + "°" });
    return {
      content: "L'angle x̂ mesure " + m + "°.\nQuelle est la mesure de son angle " +
        (comp ? "complémentaire" : "supplémentaire") + " ?",
      solution: "Deux angles " + (comp ? "COMPLÉMENTAIRES ont pour somme 90°"
                                       : "SUPPLÉMENTAIRES ont pour somme 180°") + ".\n" +
        (comp ? "90" : "180") + "° − " + m + "° = " + r + "°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de cet angle ?",
            options: optionsAngle(r, [m, comp ? 180 - m : 90 - m > 0 ? 90 - m : 90, 90]),
            reponse: { choix: r + "°" } },
          { question: "Que vaut la somme de deux angles " +
              (comp ? "complémentaires" : "supplémentaires") + " ?",
            options: melange(["90°", "180°", "360°", "45°"]),
            reponse: { choix: comp ? "90°" : "180°" } },
        ],
        description: "un angle de " + m + " degrés",
      },
    };
  },
];

/* ═══════════════ DÉDUIRE UN ANGLE ═══════════════
   Enchaîner deux propriétés pour atteindre un angle non marqué. */
const M_DEDUIRE = [
  function (d) {
    const angD = ri(-16, 16), angS = angD + ri(58, 108);
    const m = ri(30, 150);
    const f = figureSecante({ angD, angS, parallele: true });
    const el = f.el;
    marqueAngle(el, f.I, dir(f.u, f.w, +1, +1), "x̂");
    /* L'angle cherché est opposé par le sommet à l'angle correspondant. */
    marqueAngle(el, f.J, dir(f.u, f.w, -1, -1), "ẑ");
    el.push({ t: "texte", x: 62, y: 26, s: "x̂ = " + m + "°" });
    return {
      content: "Sur la figure, (d₁) et (d₂) sont parallèles et x̂ = " + m + "°.\n" +
        "Déduis-en la mesure de ẑ.",
      solution: "x̂ et ẑ sont ALTERNES-INTERNES : ils sont de part et d'autre de la " +
        "sécante et entre les deux droites.\n" +
        "Les droites étant parallèles, ces angles sont égaux.\n" +
        "ẑ = " + m + "°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de ẑ ?",
            options: optionsAngle(m, [180 - m, 90, m > 90 ? m - 25 : m + 25]),
            reponse: { choix: m + "°" } },
          { question: "Sur quelle paire d'angles s'appuie le raisonnement ?",
            options: melange(TOUTES_OPTIONS),
            reponse: { choix: "Angles alternes-internes" } },
        ],
        description: "deux parallèles coupées par une sécante, angles x et z",
      },
    };
  },
  /* Deux étapes : correspondants puis supplémentaires. */
  function (d) {
    if (d === "F") return null;
    const angD = ri(-16, 16), angS = angD + ri(58, 108);
    const m = ri(30, 150);
    const f = figureSecante({ angD, angS, parallele: true });
    const el = f.el;
    marqueAngle(el, f.I, dir(f.u, f.w, +1, +1), "x̂");
    marqueAngle(el, f.J, dir(f.u, f.w, -1, +1), "t̂");
    el.push({ t: "texte", x: 62, y: 26, s: "x̂ = " + m + "°" });
    return {
      content: "Sur la figure, (d₁) et (d₂) sont parallèles et x̂ = " + m + "°.\n" +
        "Déduis-en la mesure de t̂, en expliquant les deux étapes.",
      solution: "Étape 1 : l'angle correspondant à x̂ en J mesure aussi " + m + "° " +
        "(les droites sont parallèles).\n" +
        "Étape 2 : t̂ et cet angle sont adjacents et forment un angle plat, " +
        "ils sont donc SUPPLÉMENTAIRES.\n" +
        "t̂ = 180° − " + m + "° = " + (180 - m) + "°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de t̂ ?",
            options: optionsAngle(180 - m, [m, 90, m > 90 ? m - 25 : m + 25]),
            reponse: { choix: (180 - m) + "°" } },
          { question: "Quelle propriété intervient à la seconde étape ?",
            options: melange(["Angles supplémentaires", "Angles correspondants",
                              "Angles opposés par le sommet", "Angles complémentaires"]),
            reponse: { choix: "Angles supplémentaires" } },
        ],
        description: "deux parallèles coupées par une sécante, angles x et t",
      },
    };
  },
  /* Trois angles enchaînés (difficile). */
  function (d) {
    if (d !== "D") return null;
    const angD = ri(-14, 14), angS = angD + ri(60, 105);
    const m = ri(35, 145);
    const f = figureSecante({ angD, angS, parallele: true });
    const el = f.el;
    marqueAngle(el, f.I, dir(f.u, f.w, +1, +1), "x̂");
    marqueAngle(el, f.I, dir(f.u, f.w, -1, -1), "ŷ", 40);
    marqueAngle(el, f.J, dir(f.u, f.w, -1, +1), "ẑ");
    el.push({ t: "texte", x: 62, y: 26, s: "x̂ = " + m + "°" });
    return {
      content: "Sur la figure, (d₁) et (d₂) sont parallèles et x̂ = " + m + "°.\n" +
        "Détermine successivement ŷ puis ẑ.",
      solution: "ŷ est OPPOSÉ PAR LE SOMMET à x̂ : ŷ = " + m + "°.\n" +
        "ẑ et x̂ sont du même côté de la sécante, l'un au-dessus de (d₁), " +
        "l'autre en dessous de (d₂) : ils sont supplémentaires.\n" +
        "ẑ = 180° − " + m + "° = " + (180 - m) + "°.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la mesure de ŷ ?",
            options: optionsAngle(m, [180 - m, 90, m > 90 ? m - 30 : m + 30]),
            reponse: { choix: m + "°" } },
          { question: "Quelle est la mesure de ẑ ?",
            options: optionsAngle(180 - m, [m, 90, m > 90 ? m - 30 : m + 30]),
            reponse: { choix: (180 - m) + "°" } },
        ],
        description: "deux parallèles coupées par une sécante, trois angles marqués",
      },
    };
  },
];

/* ═══════════════ TABLE DES FAMILLES ═══════════════ */
const FAMILLES = {
  "Angles correspondants":        M_CORRESPONDANTS,
  "Angles alternes-internes":     M_ALTERNES,
  "Angles opposés par le sommet": M_OPPOSES,
  "Prouver un parallélisme":      M_PROUVER,
  "Complémentaires et supplémentaires": M_COMPSUPP,
  "Déduire un angle":             M_DEDUIRE,
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
[["Les angles correspondants", "Angles correspondants"],
 ["Angles alternes internes", "Angles alternes-internes"],
 ["Les angles alternes-internes", "Angles alternes-internes"],
 ["Angles alternes-externes", "Angles alternes-internes"],
 ["Angles opposés", "Angles opposés par le sommet"],
 ["Opposés par le sommet", "Angles opposés par le sommet"],
 ["Prouver le parallélisme", "Prouver un parallélisme"],
 ["Démontrer un parallélisme", "Prouver un parallélisme"],
 ["Prouver un parallélisme par angles correspondants", "Prouver un parallélisme"],
 ["Angles complémentaires et supplémentaires", "Complémentaires et supplémentaires"],
 ["Complémentaires supplémentaires", "Complémentaires et supplémentaires"],
 ["Déduire une mesure d'angle", "Déduire un angle"],
 ["Calculer un angle", "Déduire un angle"],
].forEach(([a, c]) => { ALIAS[cle(a)] = c; });

function canonique(f) {
  const k = cle(f);
  if (ALIAS[k]) return ALIAS[k];
  return Object.keys(FAMILLES).find(n => memeEnsemble(n, f)) || null;
}

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
const cleEx = e => String(e.content).replace(/\s+/g, " ").trim().toLowerCase() + "|" +
  JSON.stringify(e.interactif.figure.elements) + "|" +
  JSON.stringify((e.interactif.questions || []).map(q => q.reponse));

function genererFamille(nom, besoins, vus) {
  const modeles = FAMILLES[nom];
  const sortie = [];
  for (const d of ["F", "M", "D"]) {
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < reste * 400 + 4000) {
      essais++;
      const e = enrichirEnonce(pick(modeles)(d));
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
                  "2 questions": ex.filter(e => (e.interactif.questions || []).length > 1).length });
    if (cherche) {
      for (const d of ["F", "M", "D"]) {
        const e = ex.find(x => x.d === d);
        if (!e) continue;
        console.log("── " + nom + " · " + LIBELLE[d] + " ──");
        console.log(e.content);
        console.log("   [figure : " + e.interactif.description + "]");
        (e.interactif.questions || []).forEach((q, i) => {
          console.log("   Q" + (i + 1) + " : " + q.question);
          console.log("        " + q.options.join(" | ") + "  → " + JSON.stringify(q.reponse.choix));
        });
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
  const CHAPITRE = maj(brut, "chapitre", "Angles et parallélisme");
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
                     classe: maj(g.items, "classe", "5ème"), type: maj(g.items, "type", "exercice") };
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
  fs.writeFileSync(`angles-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : angles-avant-generation-${stamp}.json`);

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
