/* Polymates — generer-thales.js
   Crée et remplit les quatre familles du chapitre « Théorème de Thalès ».

   ── LES QUATRE FAMILLES ──────────────────────────────────────────────────
   · Triangles semblables — deux triangles côte à côte. Deux formes :
       a) le second est un agrandissement du premier, des mesures manquent :
          l'élève doit DIRE que les triangles sont semblables, puis calculer ;
       b) toutes les mesures sont données : il doit PROUVER la similitude.
   · Triangles imbriqués — la configuration de Thalès où le petit triangle
     est à l'intérieur du grand : on cherche les longueurs manquantes.
   · Triangles opposés — même but, mais en configuration « papillon ».
   · Démonstration avec la réciproque de Thalès — les deux configurations,
     avec pour but de montrer l'égalité des rapports, donc le parallélisme.

   ── LES FIGURES ──────────────────────────────────────────────────────────
   Toutes les situations sont dessinées (widget figures.js). Le codage suit
   ce qui est DONNÉ : les chevrons du parallélisme n'apparaissent que
   lorsqu'il est une hypothèse. Dans la famille « réciproque », ils sont
   absents — c'est justement ce qu'il faut démontrer.

   ── EXACTITUDE ───────────────────────────────────────────────────────────
   Les rapports sont des fractions choisies pour que toutes les longueurs
   tombent juste : aucune valeur n'est arrondie.

   ── PARTICULARITÉ ────────────────────────────────────────────────────────
   Ce générateur sait travailler sur un chapitre VIDE : après la suppression
   totale, le libellé du chapitre n'existe plus en base, il est donc recréé.

   ── USAGE ────────────────────────────────────────────────────────────────
     node generer-thales.js --apercu
     node generer-thales.js --apercu "imbriqu"
     $env:DATABASE_URL = "postgresql://..."
     node generer-thales.js                              # simulation
     node generer-thales.js --execute
     node generer-thales.js --chapitre "Théorème de Thalès" --execute
*/

"use strict";
const fs = require("fs");

const ARGS    = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260820);
const REPARTITION = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };
const iCh = ARGS.indexOf("--chapitre");
const CHAPITRE_VOULU = (iCh >= 0 && ARGS[iCh + 1] && !ARGS[iCh + 1].startsWith("--"))
  ? ARGS[iCh + 1] : "Théorème de Thalès";

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

const L = 460, H = 300;
const fr = x => (Number.isInteger(x) ? String(x) : String(Math.round(x * 100) / 100).replace(".", ","));
/* Un rapport s'écrit en FRACTION IRRÉDUCTIBLE, jamais en décimal arrondi :
   3/8 vaut 0,375, et l'afficher « 0,38 » rendrait le corrigé faux — deux
   rapports différents pourraient même s'arrondir à la même valeur, ce qui
   ruinerait toute comparaison. */
function pgcd(a, b) { a = Math.abs(a); b = Math.abs(b);
  while (b) { const t = a % b; a = b; b = t; } return a || 1; }
function fraction(num, den) {
  const g = pgcd(num, den);
  const n = num / g, d = den / g;
  return d === 1 ? String(n) : n + "/" + d;
}

function optionsNum(bon, ecarts, suffixe) {
  const vus = new Set([bon]); const out = [bon];
  for (const e of melange(ecarts)) {
    const c = Math.round((bon + e) * 100) / 100;
    if (c > 0 && !vus.has(c)) { vus.add(c); out.push(c); }
    if (out.length === 4) break;
  }
  let k = 1;
  while (out.length < 4) { const c = Math.round((bon + k) * 100) / 100;
    if (c > 0 && !vus.has(c)) { vus.add(c); out.push(c); } k++; }
  return melange(out).map(x => fr(x) + (suffixe || ""));
}

/* ── Rapports d'agrandissement qui laissent tout entier ──
   On choisit le rapport p/q et des longueurs multiples de q. */
const RAPPORTS = [[2,1],[3,1],[4,1],[3,2],[5,2],[5,3],[4,3],[7,4],[5,4],[7,2],[8,3]];

/* Triplet de côtés formant un vrai triangle, multiples de q. */
function cotes(d, q) {
  for (let essai = 0; essai < 80; essai++) {
    const m = d === "F" ? ri(1, 3) : d === "M" ? ri(1, 5) : ri(1, 7);
    const a = q * m, b = q * (m + ri(1, 3)), c = q * (m + ri(1, 4));
    const t = [a, b, c].sort((x, y) => x - y);
    if (t[0] + t[1] > t[2]) return t;      // inégalité triangulaire
  }
  return null;
}

/* ═══════════════ FIGURES ═══════════════ */

/* Deux triangles côte à côte, de mêmes proportions. */
function deuxTriangles(t1, t2, noms1, noms2, etiq1, etiq2) {
  /* Forme commune, tracée deux fois à des échelles différentes. */
  const forme = (t, x0, y0, ech) => {
    const [a, b, c] = t;
    /* Coordonnées par la loi des cosinus, sur le côté a en base. */
    const cosB = (a * a + c * c - b * b) / (2 * a * c);
    const A = [x0, y0];
    const B = [x0 + a * ech, y0];
    const C = [x0 + c * cosB * ech, y0 - c * Math.sqrt(Math.max(0, 1 - cosB * cosB)) * ech];
    return [A, B, C];
  };
  const ech1 = 62 / Math.max(...t1), ech2 = 62 / Math.max(...t2);
  const P1 = forme(t1, 40, H - 70, ech1);
  const P2 = forme(t2, 250, H - 70, ech2);
  const el = [];
  [[P1, noms1, etiq1], [P2, noms2, etiq2]].forEach(([P, noms, etiq]) => {
    el.push({ t: "polygone", pts: P });
    const cx = (P[0][0] + P[1][0] + P[2][0]) / 3, cy = (P[0][1] + P[1][1] + P[2][1]) / 3;
    P.forEach((p, i) => el.push({ t: "point", x: p[0], y: p[1], nom: noms[i],
      pos: p[1] < cy ? "haut" : "bas" }));
    /* Étiquettes au milieu de chaque côté, poussées vers l'extérieur. */
    [[0,1],[1,2],[2,0]].forEach(([i, j], k) => {
      if (!etiq[k]) return;
      const mx = (P[i][0] + P[j][0]) / 2, my = (P[i][1] + P[j][1]) / 2;
      const dx = mx - cx, dy = my - cy, n = Math.hypot(dx, dy) || 1;
      el.push({ t: "texte", x: mx + dx / n * 20, y: my + dy / n * 20 + 4, s: etiq[k] });
    });
  });
  return el;
}

/* Configuration de Thalès « imbriquée » : M sur [AB], N sur [AC], (MN)//(BC). */
function figureImbriquee(k, etiq, parallele) {
  const A = [L / 2 - 30, 40];
  const B = [70, H - 60], C = [L - 70, H - 60];
  const M = [A[0] + (B[0] - A[0]) * k, A[1] + (B[1] - A[1]) * k];
  const N = [A[0] + (C[0] - A[0]) * k, A[1] + (C[1] - A[1]) * k];
  const el = [
    { t: "segment", a: A, b: B }, { t: "segment", a: A, b: C },
    { t: "segment", a: B, b: C }, { t: "segment", a: M, b: N },
    { t: "point", x: A[0], y: A[1], nom: "A", pos: "haut" },
    { t: "point", x: B[0], y: B[1], nom: "B", pos: "bas" },
    { t: "point", x: C[0], y: C[1], nom: "C", pos: "bas" },
    { t: "point", x: M[0], y: M[1], nom: "M", pos: "gauche" },
    { t: "point", x: N[0], y: N[1], nom: "N", pos: "droite" },
  ];
  if (parallele) {
    el.push({ t: "chevrons", a: M, b: N, n: 1 });
    el.push({ t: "chevrons", a: B, b: C, n: 1 });
  }
  /* Étiquettes : segments AM, MB, AN, NC, MN, BC. */
  const mil = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  const pose = (p, q, s, dx, dy) => { if (!s) return;
    const m = mil(p, q); el.push({ t: "texte", x: m[0] + dx, y: m[1] + dy, s: s }); };
  pose(A, M, etiq.AM, -22, 0); pose(M, B, etiq.MB, -22, 0);
  pose(A, N, etiq.AN, 22, 0);  pose(N, C, etiq.NC, 22, 0);
  pose(M, N, etiq.MN, 0, -8);  pose(B, C, etiq.BC, 0, 22);
  return el;
}

/* Configuration « papillon » : (BM) et (CN) se coupent en A. */
function figurePapillon(k, etiq, parallele) {
  const A = [L / 2, H / 2];
  const B = [A[0] - 130, A[1] + 78], C = [A[0] + 120, A[1] + 82];
  const M = [A[0] + (A[0] - B[0]) * k, A[1] + (A[1] - B[1]) * k];
  const N = [A[0] + (A[0] - C[0]) * k, A[1] + (A[1] - C[1]) * k];
  const el = [
    { t: "segment", a: B, b: M }, { t: "segment", a: C, b: N },
    { t: "segment", a: B, b: C }, { t: "segment", a: M, b: N },
    { t: "point", x: A[0], y: A[1], nom: "A", pos: "droite" },
    { t: "point", x: B[0], y: B[1], nom: "B", pos: "bas" },
    { t: "point", x: C[0], y: C[1], nom: "C", pos: "bas" },
    { t: "point", x: M[0], y: M[1], nom: "M", pos: "haut" },
    { t: "point", x: N[0], y: N[1], nom: "N", pos: "haut" },
  ];
  if (parallele) {
    el.push({ t: "chevrons", a: B, b: C, n: 1 });
    el.push({ t: "chevrons", a: M, b: N, n: 1 });
  }
  const mil = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  const pose = (p, q, s, dx, dy) => { if (!s) return;
    const m = mil(p, q); el.push({ t: "texte", x: m[0] + dx, y: m[1] + dy, s: s }); };
  pose(A, B, etiq.AB, -18, 10); pose(A, M, etiq.AM, -18, -6);
  pose(A, C, etiq.AC, 18, 12);  pose(A, N, etiq.AN, 18, -6);
  pose(B, C, etiq.BC, 0, 24);   pose(M, N, etiq.MN, 0, -12);
  return el;
}

/* Les figures ne sont PAS transmises au correcteur : l'énoncé doit donc
   porter lui-même toutes les mesures. Cette fonction fabrique la phrase de
   données à partir des ÉTIQUETTES de la figure — texte et dessin ne peuvent
   ainsi pas diverger. */
function donnees(paires) {
  const dits = paires.filter(([, v]) => v !== null && v !== undefined && v !== "?" && v !== "");
  if (!dits.length) return "";
  return "On donne : " + dits.map(([n, v]) => n + " = " + v).join(", ") + ".";
}

/* ═══════════════ TRIANGLES SEMBLABLES ═══════════════ */
const M_SEMBLABLES = [
  /* (a) Le second triangle est un agrandissement : mesures à compléter. */
  function (d) {
    const [p, q] = pick(RAPPORTS);
    const t1 = cotes(d, q);
    if (!t1) return null;
    const t2 = t1.map(x => x * p / q);
    if (t2.some(x => !Number.isInteger(x))) return null;
    /* On cache deux des trois mesures du second triangle. */
    const cache = melange([0, 1, 2]).slice(0, 2).sort();
    const etiq2 = t2.map((x, i) => cache.includes(i) ? "?" : x + " cm");
    const el = deuxTriangles(t1, t2, ["A", "B", "C"], ["D", "E", "F"],
      t1.map(x => x + " cm"), etiq2);
    const facteur = fraction(p, q);
    return {
      content: "Le triangle DEF est un agrandissement du triangle ABC : chaque longueur " +
        "y est multipliée par " + facteur + ".\n" +
        "Dans ABC : AB = " + t1[0] + " cm, BC = " + t1[1] + " cm, CA = " + t1[2] + " cm.\n" +
        "Dans DEF : " + ["DE", "EF", "FD"].map((n, i) =>
          n + " = " + (cache.includes(i) ? "?" : t2[i] + " cm")).join(", ") + ".\n" +
        "Que peut-on dire de ces deux triangles ? Calcule ensuite les longueurs manquantes.",
      solution: "Les longueurs de DEF s'obtiennent en multipliant celles de ABC par un même " +
        "nombre (" + facteur + ") : les deux triangles sont SEMBLABLES.\n" +
        "Ce nombre est le rapport d'agrandissement, ou coefficient d'agrandissement.\n" +
        cache.map(i => t1[i] + " × " + p + " ÷ " + q + " = " + t2[i] + " cm").join("\n") +
        "\nLes longueurs manquantes valent " + cache.map(i => t2[i] + " cm").join(" et ") + ".",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Que peut-on dire de ces deux triangles ?",
            options: melange(["Ils sont semblables", "Ils sont égaux",
                              "Ils sont rectangles", "On ne peut rien dire"]),
            reponse: { choix: "Ils sont semblables" } },
          { question: "Quelle est la plus petite des longueurs manquantes ?",
            options: optionsNum(Math.min(...cache.map(i => t2[i])),
              [1, -1, 2, t1[cache[0]]], " cm"),
            reponse: { choix: Math.min(...cache.map(i => t2[i])) + " cm" } },
        ],
        description: "deux triangles côte à côte, le second agrandissement du premier",
      },
    };
  },
  /* (b) Toutes les mesures sont données : prouver la similitude. */
  function (d) {
    if (d === "F") return null;
    const [p, q] = pick(RAPPORTS);
    const t1 = cotes(d, q);
    if (!t1) return null;
    const semblables = alea() < 0.55;
    let t2 = t1.map(x => x * p / q);
    if (t2.some(x => !Number.isInteger(x))) return null;
    if (!semblables) {
      /* On casse la proportion sur UN côté seulement. */
      const i = ri(0, 2);
      t2 = t2.slice();
      t2[i] = t2[i] + pick([-2, -1, 1, 2]);
      if (t2[i] <= 0) return null;
      const s = t2.slice().sort((a, b) => a - b);
      if (s[0] + s[1] <= s[2]) return null;          // triangle impossible
      if (t2.every((x, j) => x * t1[0] === t1[j] * t2[0])) return null;
    }
    const el = deuxTriangles(t1, t2, ["A", "B", "C"], ["D", "E", "F"],
      t1.map(x => x + " cm"), t2.map(x => x + " cm"));
    const rapports = t2.map((x, i) => x + "/" + t1[i]);
    const facteur = fraction(p, q);
    return {
      content: "Dans le triangle ABC : AB = " + t1[0] + " cm, BC = " + t1[1] +
        " cm, CA = " + t1[2] + " cm.\n" +
        "Dans le triangle DEF : DE = " + t2[0] + " cm, EF = " + t2[1] + " cm, FD = " +
        t2[2] + " cm.\n" +
        "Ces deux triangles sont-ils semblables ? Justifie en comparant les rapports.",
      solution: "Deux triangles sont semblables si leurs côtés sont proportionnels, " +
        "c'est-à-dire si les trois rapports sont ÉGAUX.\n" +
        rapports.map((r, i) => "  " + r + " = " + fraction(t2[i], t1[i])).join("\n") + "\n" +
        (semblables
          ? "Les trois rapports valent " + facteur + " : les triangles SONT semblables."
          : "Les rapports ne sont pas tous égaux : les triangles NE SONT PAS semblables."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Ces deux triangles sont-ils semblables ?",
            options: ["Oui", "Non"],
            reponse: { choix: semblables ? "Oui" : "Non" } },
          { question: "Que faut-il comparer pour le savoir ?",
            options: melange(["Les rapports des côtés correspondants",
                              "Les sommes des côtés", "Les différences des côtés",
                              "Les périmètres"]),
            reponse: { choix: "Les rapports des côtés correspondants" } },
        ],
        description: "deux triangles côte à côte, toutes les longueurs données",
      },
    };
  },
];

/* ═══════════════ TRIANGLES IMBRIQUÉS ═══════════════ */
const M_IMBRIQUES = [
  function (d) {
    const [p, q] = pick(RAPPORTS.filter(([a, b]) => a > b));
    const k = q / p;                                    // AM/AB = AN/AC = MN/BC
    const AB = p * (d === "F" ? ri(1, 3) : ri(1, 6));
    const AC = p * (d === "F" ? ri(1, 3) : ri(1, 6));
    const BC = p * (d === "F" ? ri(1, 3) : ri(1, 6));
    const AM = AB * k, AN = AC * k, MN = BC * k;
    if (![AM, AN, MN].every(Number.isInteger)) return null;
    const s = [AB, AC, BC].sort((a, b) => a - b);
    if (s[0] + s[1] <= s[2]) return null;
    /* On donne AM, AB, AN et on cherche AC ; ou on donne AB, AM, BC et on cherche MN. */
    const cherche = d === "F" ? "AN" : pick(["AN", "MN"]);
    const etiq = cherche === "AN"
      ? { AM: "AM = " + AM, MB: "MB = " + (AB - AM), AN: "AN = ?", NC: "NC = " + (AC - AN) }
      : { AM: "AM = " + AM, MB: "MB = " + (AB - AM), MN: "MN = ?", BC: "BC = " + BC };
    const el = figureImbriquee(k, etiq, true);
    const rep = cherche === "AN" ? AN : MN;
    return {
      content: "Le point M appartient à [AB], le point N à [AC], et les droites (MN) et " +
        "(BC) sont parallèles (le codage l'indique sur la figure).\n" +
        (cherche === "AN"
          ? "On donne AM = " + AM + " cm, MB = " + (AB - AM) + " cm et NC = " + (AC - AN) +
            " cm.\nCalcule AN."
          : "On donne AM = " + AM + " cm, MB = " + (AB - AM) + " cm et BC = " + BC +
            " cm.\nCalcule MN."),
      solution: "Les points A, M, B et A, N, C sont alignés, et (MN) ∥ (BC) : " +
        "on est dans la configuration du théorème de Thalès.\n" +
        "Les rapports sont égaux : AM/AB = AN/AC = MN/BC.\n" +
        "AB = AM + MB = " + AM + " + " + (AB - AM) + " = " + AB + " cm, donc AM/AB = " +
        AM + "/" + AB + " = " + fraction(AM, AB) + ".\n" +
        (cherche === "AN"
          ? "AC = AN + NC, et AN/AC = " + fraction(AM, AB) + " : AN = " + AN + " cm."
          : "MN = BC × " + q + " ÷ " + p + " = " + BC + " × " + q + " ÷ " + p + " = " + MN + " cm."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: cherche === "AN" ? "Quelle est la longueur AN ?" : "Quelle est la longueur MN ?",
            options: optionsNum(rep, [1, -1, 2, -2, 3], " cm"),
            reponse: { choix: rep + " cm" } },
          { question: "Quel théorème s'applique ici ?",
            options: melange(["Le théorème de Thalès", "Le théorème de Pythagore",
                              "La réciproque de Thalès", "Le théorème des milieux"]),
            reponse: { choix: "Le théorème de Thalès" } },
        ],
        description: "deux triangles imbriqués, (MN) parallèle à (BC)",
      },
    };
  },
  /* Deux longueurs à trouver (difficile). */
  function (d) {
    if (d !== "D") return null;
    const [p, q] = pick(RAPPORTS.filter(([a, b]) => a > b));
    const k = q / p;
    const AB = p * ri(1, 5), AC = p * ri(1, 5), BC = p * ri(1, 5);
    const AM = AB * k, AN = AC * k, MN = BC * k;
    if (![AM, AN, MN].every(Number.isInteger)) return null;
    const s = [AB, AC, BC].sort((a, b) => a - b);
    if (s[0] + s[1] <= s[2]) return null;
    const el = figureImbriquee(k, { AM: "AM = " + AM, MB: "MB = " + (AB - AM),
      AN: "AN = ?", MN: "MN = ?", BC: "BC = " + BC, NC: "NC = " + (AC - AN) }, true);
    return {
      content: "Les droites (MN) et (BC) sont parallèles.\n" +
        "On donne AM = " + AM + " cm, MB = " + (AB - AM) + " cm, NC = " + (AC - AN) +
        " cm et BC = " + BC + " cm.\nCalcule AN, puis MN.",
      solution: "AB = " + AM + " + " + (AB - AM) + " = " + AB + " cm.\n" +
        "D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC, et AM/AB = " +
        AM + "/" + AB + " = " + fraction(AM, AB) + ".\n" +
        "AC = AN + NC, avec AN/AC = " + fraction(AM, AB) + " : on trouve AN = " + AN + " cm.\n" +
        "MN = BC × " + q + " ÷ " + p + " = " + MN + " cm.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la longueur AN ?",
            options: optionsNum(AN, [1, -1, 2, -2], " cm"), reponse: { choix: AN + " cm" } },
          { question: "Quelle est la longueur MN ?",
            options: optionsNum(MN, [1, -1, 2, -2], " cm"), reponse: { choix: MN + " cm" } },
        ],
        description: "deux triangles imbriqués, deux longueurs à trouver",
      },
    };
  },
];

/* ═══════════════ TRIANGLES OPPOSÉS (papillon) ═══════════════ */
const M_OPPOSES = [
  function (d) {
    const [p, q] = pick(RAPPORTS.filter(([a, b]) => a > b));
    const k = q / p;
    const AB = p * (d === "F" ? ri(1, 3) : ri(1, 6));
    const AC = p * (d === "F" ? ri(1, 3) : ri(1, 6));
    const BC = p * (d === "F" ? ri(1, 3) : ri(1, 6));
    const AM = AB * k, AN = AC * k, MN = BC * k;
    if (![AM, AN, MN].every(Number.isInteger)) return null;
    const s = [AB, AC, BC].sort((a, b) => a - b);
    if (s[0] + s[1] <= s[2]) return null;
    const cherche = d === "F" ? "MN" : pick(["MN", "AN"]);
    const etiq = cherche === "MN"
      ? { AB: "AB = " + AB, AM: "AM = " + AM, BC: "BC = " + BC, MN: "MN = ?" }
      : { AB: "AB = " + AB, AM: "AM = " + AM, AC: "AC = " + AC, AN: "AN = ?" };
    const el = figurePapillon(k, etiq, true);
    const rep = cherche === "MN" ? MN : AN;
    return {
      content: "Les points B, A, M sont alignés, ainsi que C, A, N. " +
        "Les droites (BC) et (MN) sont parallèles.\n" +
        (cherche === "MN"
          ? "On donne AB = " + AB + " cm, AM = " + AM + " cm et BC = " + BC + " cm.\nCalcule MN."
          : "On donne AB = " + AB + " cm, AM = " + AM + " cm et AC = " + AC + " cm.\nCalcule AN."),
      solution: "Les deux droites se coupent en A et (BC) ∥ (MN) : c'est la configuration " +
        "« papillon » du théorème de Thalès.\n" +
        "Les rapports sont égaux : AM/AB = AN/AC = MN/BC.\n" +
        "AM/AB = " + AM + "/" + AB + " = " + fraction(AM, AB) + "\n" +
        (cherche === "MN"
          ? "MN = BC × " + q + " ÷ " + p + " = " + BC + " × " + q + " ÷ " + p + " = " + MN + " cm."
          : "AN = AC × " + q + " ÷ " + p + " = " + AC + " × " + q + " ÷ " + p + " = " + AN + " cm."),
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: cherche === "MN" ? "Quelle est la longueur MN ?" : "Quelle est la longueur AN ?",
            options: optionsNum(rep, [1, -1, 2, -2, 3], " cm"),
            reponse: { choix: rep + " cm" } },
          { question: "Comment appelle-t-on cette configuration ?",
            options: melange(["Configuration papillon", "Triangles imbriqués",
                              "Triangle rectangle", "Triangles superposés"]),
            reponse: { choix: "Configuration papillon" } },
        ],
        description: "deux triangles opposés par le sommet A, (BC) parallèle à (MN)",
      },
    };
  },
  /* Deux longueurs, et le rapport à nommer (difficile). */
  function (d) {
    if (d !== "D") return null;
    const [p, q] = pick(RAPPORTS.filter(([a, b]) => a > b));
    const k = q / p;
    const AB = p * ri(1, 5), AC = p * ri(1, 5), BC = p * ri(1, 5);
    const AM = AB * k, AN = AC * k, MN = BC * k;
    if (![AM, AN, MN].every(Number.isInteger)) return null;
    const s = [AB, AC, BC].sort((a, b) => a - b);
    if (s[0] + s[1] <= s[2]) return null;
    const el = figurePapillon(k, { AB: "AB = " + AB, AM: "AM = " + AM,
      AC: "AC = " + AC, AN: "AN = ?", BC: "BC = " + BC, MN: "MN = ?" }, true);
    return {
      content: "Configuration papillon : B, A, M alignés, C, A, N alignés, et (BC) ∥ (MN).\n" +
        "On donne AB = " + AB + " cm, AM = " + AM + " cm, AC = " + AC + " cm et BC = " +
        BC + " cm.\nCalcule AN et MN.",
      solution: "D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC.\n" +
        "Le rapport vaut AM/AB = " + AM + "/" + AB + " = " + fraction(AM, AB) + ".\n" +
        "AN = AC × " + q + " ÷ " + p + " = " + AN + " cm.\n" +
        "MN = BC × " + q + " ÷ " + p + " = " + MN + " cm.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Quelle est la longueur AN ?",
            options: optionsNum(AN, [1, -1, 2, -2], " cm"), reponse: { choix: AN + " cm" } },
          { question: "Quelle est la longueur MN ?",
            options: optionsNum(MN, [1, -1, 2, -2], " cm"), reponse: { choix: MN + " cm" } },
        ],
        description: "configuration papillon, deux longueurs à trouver",
      },
    };
  },
];

/* ═══════════════ DÉMONSTRATION AVEC LA RÉCIPROQUE ═══════════════
   Le parallélisme est la CONCLUSION : il n'est donc pas codé sur la figure. */
const M_RECIPROQUE = [
  function (d) {
    const papillon = alea() < 0.5;
    const [p, q] = pick(RAPPORTS.filter(([a, b]) => a > b));
    const k = q / p;
    const AB = p * (d === "F" ? ri(1, 3) : ri(1, 6));
    const AC = p * (d === "F" ? ri(1, 4) : ri(1, 6));
    let AM = AB * k, AN = AC * k;
    if (![AM, AN].every(Number.isInteger)) return null;
    const proportionnel = alea() < 0.55;
    if (!proportionnel) {
      AN = AN + pick([-2, -1, 1, 2]);
      if (AN <= 0 || AN >= AC) return null;
      if (AM * AC === AN * AB) return null;
    }
    const etiq = papillon
      ? { AB: "AB = " + AB, AM: "AM = " + AM, AC: "AC = " + AC, AN: "AN = " + AN }
      : { AM: "AM = " + AM, MB: "MB = " + (AB - AM), AN: "AN = " + AN, NC: "NC = " + (AC - AN) };
    const el = papillon ? figurePapillon(k, etiq, false) : figureImbriquee(k, etiq, false);
    const r1 = AM / AB, r2 = AN / AC;
    return {
      content: (papillon
        ? "Les points B, A, M sont alignés, ainsi que C, A, N.\n" +
          "On donne AB = " + AB + " cm, AM = " + AM + " cm, AC = " + AC + " cm et AN = " +
          AN + " cm."
        : "Le point M appartient à [AB] et le point N à [AC].\n" +
          "On donne AM = " + AM + " cm, MB = " + (AB - AM) + " cm, AN = " + AN +
          " cm et NC = " + (AC - AN) + " cm,\nd'où AB = " + AB + " cm et AC = " +
          AC + " cm.") +
        "\nLes droites (BC) et (MN) sont-elles parallèles ?",
      solution: "On compare les deux rapports :\n" +
        "AM/AB = " + AM + "/" + AB + " = " + fraction(AM, AB) + "\n" +
        "AN/AC = " + AN + "/" + AC + " = " + fraction(AN, AC) + "\n" +
        "(Par produits en croix : " + AM + " × " + AC + " = " + (AM * AC) + " et " +
        AN + " × " + AB + " = " + (AN * AB) + ".)\n" +
        (proportionnel
          ? "Les deux rapports sont ÉGAUX, et les points sont dans le même ordre sur les " +
            "deux droites.\nD'après la RÉCIPROQUE du théorème de Thalès, (MN) ∥ (BC).\n" +
            "Les triangles AMN et ABC sont donc semblables, de rapport " + fraction(AM, AB) + "."
          : "Les deux rapports sont DIFFÉRENTS (" + fraction(AM, AB) + " ≠ " + fraction(AN, AC) + ").\n" +
            "La réciproque du théorème de Thalès ne s'applique pas : (MN) et (BC) " +
            "NE SONT PAS parallèles, et les triangles ne sont pas semblables."),
      _para: proportionnel,
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Les droites (MN) et (BC) sont-elles parallèles ?",
            options: ["Oui", "Non"],
            reponse: { choix: proportionnel ? "Oui" : "Non" } },
          { question: "Sur quel énoncé s'appuie la conclusion ?",
            options: melange(["La réciproque du théorème de Thalès",
                              "Le théorème de Thalès", "Le théorème de Pythagore",
                              "La réciproque de Pythagore"]),
            reponse: { choix: "La réciproque du théorème de Thalès" } },
        ],
        description: papillon ? "configuration papillon, parallélisme à démontrer"
                              : "triangles imbriqués, parallélisme à démontrer",
      },
    };
  },
  /* Conclure sur la similitude des triangles (moyen et difficile). */
  function (d) {
    if (d === "F") return null;
    const papillon = alea() < 0.5;
    const [p, q] = pick(RAPPORTS.filter(([a, b]) => a > b));
    const k = q / p;
    const AB = p * ri(1, 5), AC = p * ri(1, 5);
    const AM = AB * k, AN = AC * k;
    if (![AM, AN].every(Number.isInteger)) return null;
    const etiq = papillon
      ? { AB: "AB = " + AB, AM: "AM = " + AM, AC: "AC = " + AC, AN: "AN = " + AN }
      : { AM: "AM = " + AM, MB: "MB = " + (AB - AM), AN: "AN = " + AN, NC: "NC = " + (AC - AN) };
    const el = papillon ? figurePapillon(k, etiq, false) : figureImbriquee(k, etiq, false);
    return {
      content: (papillon
        ? "Les points B, A, M sont alignés, ainsi que C, A, N.\n" +
          "On donne AB = " + AB + " cm, AM = " + AM + " cm, AC = " + AC +
          " cm et AN = " + AN + " cm."
        : "Le point M appartient à [AB] et le point N à [AC].\n" +
          "On donne AM = " + AM + " cm, MB = " + (AB - AM) + " cm, AN = " + AN +
          " cm et NC = " + (AC - AN) + " cm,\nd'où AB = " + AB + " cm et AC = " +
          AC + " cm.") + "\n" +
        "Démontre que les triangles AMN et ABC sont semblables, et qu'ils vérifient " +
        "la relation de Thalès.",
      solution: "AM/AB = " + AM + "/" + AB + " = " + fraction(AM, AB) + "\n" +
        "AN/AC = " + AN + "/" + AC + " = " + fraction(AN, AC) + "\n" +
        "Les deux rapports sont égaux, et les points sont dans le même ordre : " +
        "d'après la RÉCIPROQUE du théorème de Thalès, (MN) ∥ (BC).\n" +
        "Les deux triangles ont alors leurs angles deux à deux égaux (angles " +
        "correspondants) : ils sont SEMBLABLES, de rapport " + fraction(AM, AB) + ".\n" +
        "La relation de Thalès s'écrit donc : AM/AB = AN/AC = MN/BC = " + fraction(AM, AB) + ".",
      _para: true,
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        questions: [
          { question: "Que vaut le rapport de similitude ?",
            options: melange([fraction(AM, AB), fraction(AB, AM),
                              fraction(AM, AB + AM), fraction(AM * 2, AB)]),
            reponse: { choix: fraction(AM, AB) } },
          { question: "Que peut-on conclure des triangles AMN et ABC ?",
            options: melange(["Ils sont semblables", "Ils sont égaux",
                              "Ils sont rectangles", "On ne peut rien conclure"]),
            reponse: { choix: "Ils sont semblables" } },
        ],
        description: papillon ? "configuration papillon, similitude à démontrer"
                              : "triangles imbriqués, similitude à démontrer",
      },
    };
  },
];

/* ═══════════════ TABLE DES FAMILLES ═══════════════ */
const FAMILLES = {
  "Triangles semblables":                        M_SEMBLABLES,
  "Triangles imbriqués":                         M_IMBRIQUES,
  "Triangles opposés":                           M_OPPOSES,
  "Démonstration avec la réciproque de Thalès":  M_RECIPROQUE,
};
/* Toutes ces familles sont à créer : le chapitre a été vidé. */
const A_CREER = Object.keys(FAMILLES);

const cle = t => String(t || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
  .split(" ").map(m => m.replace(/s$/, "")).join(" ");
const ALIAS = {};
Object.keys(FAMILLES).forEach(f => { ALIAS[cle(f)] = f; });
[["Triangles emboîtés", "Triangles imbriqués"],
 ["Configuration papillon", "Triangles opposés"],
 ["Réciproque de Thalès", "Démonstration avec la réciproque de Thalès"],
].forEach(([a, c]) => { ALIAS[cle(a)] = c; });
function canonique(f) { return ALIAS[cle(f)] || null; }

/* ═══════════════ GÉNÉRATION ═══════════════ */
function besoinsDepuis(dej) {
  const v = { F: Math.round(CIBLE * REPARTITION.F), M: Math.round(CIBLE * REPARTITION.M) };
  v.D = CIBLE - v.F - v.M;
  return { F: Math.max(0, v.F - dej.F), M: Math.max(0, v.M - dej.M), D: Math.max(0, v.D - dej.D) };
}
const cleEx = e => String(e.content).replace(/\s+/g, " ").trim().toLowerCase() + "|" +
  JSON.stringify(e.interactif.figure.elements);

function genererFamille(nom, besoins, vus) {
  const modeles = FAMILLES[nom];
  const sortie = [];
  for (const d of ["F", "M", "D"]) {
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < reste * 600 + 6000) {
      essais++;
      const e = pick(modeles)(d);
      if (!e) continue;
      const k = cleEx(e);
      if (vus.has(k)) continue;
      vus.add(k);
      sortie.push({ d, content: e.content, solution: e.solution,
                    interactif: e.interactif, _para: e._para });
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
       FROM exercises WHERE chapitre ILIKE '%thal%' ORDER BY id`);

  /* Le chapitre peut être VIDE : il vient d'être supprimé en entier. On le
     recrée alors avec les réglages d'un chapitre de géométrie voisin. */
  let CHAPITRE = CHAPITRE_VOULU, modeleBase = null;
  if (brut.length) {
    const maj = (ch, def) => { const c = new Map();
      brut.forEach(r => { const v = r[ch]; if (v) c.set(v, (c.get(v) || 0) + 1); });
      return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
    CHAPITRE = maj("chapitre", CHAPITRE_VOULU);
    modeleBase = { level: maj("level", "college"), subject: maj("subject", "Géométrie"),
                   classe: maj("classe", "3ème"), type: maj("type", "exercice") };
    console.log(`Chapitre « ${CHAPITRE} » : ${brut.length} exercice(s) en base.\n`);
  } else {
    const { rows: voisins } = await pool.query(
      `SELECT level, subject, classe, type FROM exercises
        WHERE chapitre ILIKE '%pythagore%' OR chapitre ILIKE '%triangle%' LIMIT 50`);
    const maj = (ch, def) => { const c = new Map();
      voisins.forEach(r => { const v = r[ch]; if (v) c.set(v, (c.get(v) || 0) + 1); });
      return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
    modeleBase = { level: maj("level", "college"), subject: maj("subject", "Géométrie"),
                   classe: "3ème", type: maj("type", "exercice") };
    console.log(`Chapitre « ${CHAPITRE} » absent de la base : il sera CRÉÉ.`);
    console.log("Réglages repris des chapitres de géométrie voisins :");
    console.table([modeleBase]);
  }

  const parFam = new Map();
  brut.forEach(r => { if (!r.famille) return; const k = cle(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });
  A_CREER.forEach(nom => {
    if (!parFam.has(cle(nom))) {
      parFam.set(cle(nom), { nom: nom, items: [], creee: true });
      console.log(`+ Famille « ${nom} » : elle sera CRÉÉE.`);
    }
  });

  const vus = new Set(brut.map(r => String(r.content).replace(/\s+/g, " ").trim().toLowerCase() + "|"));
  const aInserer = [], rapport = [], inconnues = [];

  for (const [, g] of parFam) {
    const canon = canonique(g.nom);
    if (!canon) { inconnues.push(g.nom); continue; }
    const dej = { F: 0, M: 0, D: 0 };
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M"
      : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919);
    const neufs = genererFamille(canon, besoinsDepuis(dej), vus);
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content,
      solution: e.solution, difficulty: LIBELLE[e.d], level: modeleBase.level,
      subject: modeleBase.subject, classe: modeleBase.classe, chapitre: CHAPITRE,
      type: modeleBase.type, famille: g.nom,
      interactif: JSON.stringify(e.interactif) }); });
    rapport.push({ famille: g.nom, avant: g.items.length, ajoutes: neufs.length,
                   apres: g.items.length + neufs.length, nouvelle: g.creee ? "oui" : "" });
  }

  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  if (brut.length) {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    fs.writeFileSync(`thales-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
    console.log(`\nSauvegarde : thales-avant-generation-${stamp}.json`);
  }

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
