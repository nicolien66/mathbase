/* Polymates — generer-trigonometrie.js
   Porte à 100 exercices les familles du chapitre « Trigonométrie ».

   ── CHAQUE SITUATION A SA FIGURE ─────────────────────────────────────────
   Tous les exercices portent un triangle rectangle dessiné (widget
   figures.js), avec l'angle droit codé par le petit carré et l'angle de
   travail marqué par son arc. Les longueurs connues sont écrites le long
   des côtés ; celle qu'on cherche porte un point d'interrogation.

   ── L'EXACTITUDE, LE VRAI PROBLÈME DE CE CHAPITRE ────────────────────────
   Contrairement à Pythagore, la trigonométrie tombe rarement juste : un
   cosinus est presque toujours irrationnel. Deux partis pris :
     · pour CALCULER UNE LONGUEUR, on part de triplets pythagoriciens, si
       bien que les trois côtés sont entiers et les rapports exacts — le
       corrigé donne alors une valeur juste, pas un arrondi ;
     · pour CALCULER UN ANGLE, la mesure est arrondie au degré, ce que
       l'énoncé annonce explicitement, et le corrigé montre la touche à
       utiliser sur la calculatrice.
   Le triangle DESSINÉ correspond aux mesures : ses angles sont recalculés
   à partir des côtés, jamais approximés à l'œil.

   · Répartition pour 100 : 20 faciles, 30 moyens, 50 difficiles.

   ── USAGE ────────────────────────────────────────────────────────────────
     node generer-trigonometrie.js --apercu
     node generer-trigonometrie.js --apercu "angle"
     $env:DATABASE_URL = "postgresql://..."
     node generer-trigonometrie.js            # simulation
     node generer-trigonometrie.js --execute
*/

"use strict";
const fs = require("fs");

const ARGS    = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260821);
const REPARTITION = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };
const iCh = ARGS.indexOf("--chapitre");
const FILTRE = (iCh >= 0 && ARGS[iCh + 1] && !ARGS[iCh + 1].startsWith("--"))
  ? "%" + ARGS[iCh + 1] + "%" : "%trigo%";

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
const fr = x => (Number.isInteger(x) ? String(x)
  : String(Math.round(x * 100) / 100).replace(".", ","));
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

/* ── Triplets pythagoriciens : les trois côtés sont entiers, donc les
      rapports trigonométriques sont exacts. ── */
const TRIPLETS = [
  [3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29],
  [9, 40, 41], [12, 35, 37], [28, 45, 53], [11, 60, 61], [33, 56, 65],
];
function triplet(d) {
  const base = d === "F" ? pick(TRIPLETS.slice(0, 4)) : pick(TRIPLETS);
  const k = d === "F" ? pick([1, 2, 3]) : d === "M" ? pick([1, 2, 3, 4]) : pick([1, 2, 3, 4, 5]);
  return base.map(x => x * k);
}

/* ── Figure : triangle rectangle en A, angle marqué en B ──
      Les côtés sont dessinés à l'échelle, l'angle est donc réel. */
function figureTriangle(o) {
  /* o = { adj, opp, hyp, angleEn, etiq:{AB,AC,BC}, marqueAngle } */
  const ech = Math.min((L - 170) / Math.max(o.adj, o.opp), (H - 120) / Math.max(o.adj, o.opp));
  const A = [100, H - 70];                       // sommet de l'angle droit
  const B = [A[0] + o.adj * ech, A[1]];          // le long du côté adjacent
  const C = [A[0], A[1] - o.opp * ech];
  const el = [
    { t: "polygone", pts: [A, B, C] },
    { t: "angledroit", s: A, a: B, b: C },
    { t: "point", x: A[0], y: A[1], nom: "A", pos: "bas" },
    { t: "point", x: B[0], y: B[1], nom: "B", pos: "bas" },
    { t: "point", x: C[0], y: C[1], nom: "C", pos: "haut" },
  ];
  /* Arc marquant l'angle de travail. */
  if (o.marqueAngle) {
    const S = o.marqueAngle === "B" ? B : C;
    const P1 = o.marqueAngle === "B" ? A : A;
    const P2 = o.marqueAngle === "B" ? C : B;
    const dir = (p, q) => { const dx = q[0] - p[0], dy = q[1] - p[1];
      const n = Math.hypot(dx, dy) || 1; return [dx / n, dy / n]; };
    const u = dir(S, P1), v = dir(S, P2);
    const bis = [(u[0] + v[0]) / 2, (u[1] + v[1]) / 2];
    const nb = Math.hypot(bis[0], bis[1]) || 1;
    const a = Math.atan2(-bis[1] / nb, bis[0] / nb) * 180 / Math.PI;
    el.push({ t: "arc", c: S, r: 30, de: a - 20, a: a + 20 });
    el.push({ t: "texte", x: S[0] + bis[0] / nb * 48, y: S[1] + bis[1] / nb * 48 + 4,
              s: o.mesureAngle ? o.mesureAngle : "?" });
  }
  /* Étiquettes des côtés, poussées vers l'extérieur. */
  const cx = (A[0] + B[0] + C[0]) / 3, cy = (A[1] + B[1] + C[1]) / 3;
  [[A, B, o.etiq.AB], [A, C, o.etiq.AC], [B, C, o.etiq.BC]].forEach(([p, q, s]) => {
    if (!s) return;
    const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
    const dx = mx - cx, dy = my - cy, n = Math.hypot(dx, dy) || 1;
    el.push({ t: "texte", x: mx + dx / n * 26, y: my + dy / n * 26 + 4, s: s });
  });
  return el;
}

/* Les trois rapports, du point de vue de l'angle en B du triangle
   rectangle en A : adjacent = AB, opposé = AC, hypoténuse = BC. */
const RAPPORTS = [
  { nom: "cosinus", court: "cos", num: "adjacent", den: "hypoténuse",
    formule: "cos = adjacent / hypoténuse" },
  { nom: "sinus", court: "sin", num: "opposé", den: "hypoténuse",
    formule: "sin = opposé / hypoténuse" },
  { nom: "tangente", court: "tan", num: "opposé", den: "adjacent",
    formule: "tan = opposé / adjacent" },
];

/* ═══════════════ CHOISIR LA BONNE FORMULE ═══════════════ */
const M_CHOISIR = [
  function (d) {
    const [adj, opp, hyp] = triplet(d);
    const r = pick(RAPPORTS);
    /* On donne les deux côtés qu'exige le rapport, on cache le troisième. */
    const etiq = { AB: "", AC: "", BC: "" };
    if (r.court === "cos") { etiq.AB = adj + " cm"; etiq.BC = hyp + " cm"; etiq.AC = "?"; }
    else if (r.court === "sin") { etiq.AC = opp + " cm"; etiq.BC = hyp + " cm"; etiq.AB = "?"; }
    else { etiq.AC = opp + " cm"; etiq.AB = adj + " cm"; etiq.BC = "?"; }
    const el = figureTriangle({ adj, opp, hyp, etiq, marqueAngle: "B" });
    return {
      content: "Le triangle ABC est rectangle en A. On veut calculer l'angle marqué en B, " +
        "à partir des deux longueurs données.\nQuel rapport trigonométrique faut-il utiliser ?",
      solution: "Par rapport à l'angle en B :\n" +
        "  · le côté [AB] lui est ADJACENT,\n" +
        "  · le côté [AC] lui est OPPOSÉ,\n" +
        "  · le côté [BC] est l'HYPOTÉNUSE.\n" +
        "Ici on connaît " + (r.court === "cos" ? "l'adjacent et l'hypoténuse"
          : r.court === "sin" ? "l'opposé et l'hypoténuse" : "l'opposé et l'adjacent") +
        " : c'est donc le " + r.nom.toUpperCase() + " qu'il faut employer.\n" +
        r.formule,
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        description: "un triangle rectangle en A, deux longueurs données, angle marqué en B",
      },
    };
  },
  /* Nommer les côtés par rapport à l'angle (facile et moyen). */
  function (d) {
    if (d === "D") return null;
    const [adj, opp, hyp] = triplet(d);
    const cherche = pick(["adjacent", "opposé", "hypoténuse"]);
    const bon = cherche === "adjacent" ? "[AB]" : cherche === "opposé" ? "[AC]" : "[BC]";
    const el = figureTriangle({ adj, opp, hyp, marqueAngle: "B",
      etiq: { AB: "", AC: "", BC: "" } });
    return {
      content: "Le triangle ABC est rectangle en A, et l'angle marqué est celui en B.\n" +
        "Quel côté est " + (cherche === "hypoténuse" ? "l'" : "le côté ") + cherche +
        (cherche === "hypoténuse" ? "" : " à cet angle") + " ?",
      solution: "Par rapport à l'angle en B :\n" +
        "  · [AB] est le côté ADJACENT (il touche l'angle sans être l'hypoténuse),\n" +
        "  · [AC] est le côté OPPOSÉ (il est en face de l'angle),\n" +
        "  · [BC] est l'HYPOTÉNUSE (elle est en face de l'angle droit).\n" +
        "Réponse : " + bon + ".",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        description: "un triangle rectangle en A, angle marqué en B",
      },
    };
  },
];

/* ═══════════════ CALCULER UNE LONGUEUR ═══════════════ */
const M_LONGUEUR = [
  function (d) {
    const [adj, opp, hyp] = triplet(d);
    const r = pick(RAPPORTS);
    /* L'angle en B est connu par sa mesure arrondie, mais la longueur se
       calcule à partir du rapport EXACT, donc le résultat est entier. */
    const angle = Math.round(Math.atan2(opp, adj) * 180 / Math.PI);
    let etiq, cherchee, valeur, detail;
    if (r.court === "cos") {
      etiq = { AB: "?", BC: hyp + " cm", AC: "" }; cherchee = "AB"; valeur = adj;
      detail = "cos(B) = AB / BC, donc AB = BC × cos(B) = " + hyp + " × " +
        adj + "/" + hyp + " = " + adj + " cm.";
    } else if (r.court === "sin") {
      etiq = { AC: "?", BC: hyp + " cm", AB: "" }; cherchee = "AC"; valeur = opp;
      detail = "sin(B) = AC / BC, donc AC = BC × sin(B) = " + hyp + " × " +
        opp + "/" + hyp + " = " + opp + " cm.";
    } else {
      etiq = { AC: "?", AB: adj + " cm", BC: "" }; cherchee = "AC"; valeur = opp;
      detail = "tan(B) = AC / AB, donc AC = AB × tan(B) = " + adj + " × " +
        opp + "/" + adj + " = " + opp + " cm.";
    }
    const el = figureTriangle({ adj, opp, hyp, etiq, marqueAngle: "B",
      mesureAngle: angle + "°" });
    return {
      content: "Le triangle ABC est rectangle en A. L'angle en B mesure environ " + angle + "°.\n" +
        (r.court === "cos" ? "On donne BC = " + hyp + " cm. Calcule AB."
         : r.court === "sin" ? "On donne BC = " + hyp + " cm. Calcule AC."
         : "On donne AB = " + adj + " cm. Calcule AC."),
      solution: "Par rapport à l'angle en B, on connaît " +
        (r.court === "tan" ? "l'adjacent" : "l'hypoténuse") + " et l'on cherche " +
        (r.court === "cos" ? "l'adjacent" : "l'opposé") + " : on emploie le " + r.nom + ".\n" +
        r.formule + "\n" + detail + "\n" +
        "Les trois côtés étant " + adj + ", " + opp + " et " + hyp + " cm, le rapport " +
        "tombe juste : le résultat est exact.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        description: "un triangle rectangle en A, angle et une longueur donnés",
      },
    };
  },
  /* Longueur en situation concrète (difficile). */
  function (d) {
    if (d !== "D") return null;
    const [adj, opp, hyp] = triplet(d);
    const angle = Math.round(Math.atan2(opp, adj) * 180 / Math.PI);
    const scene = pick([
      { t: "Une échelle appuyée contre un mur forme un angle de " + angle +
           "° avec le sol. Son pied est à " + adj + " m du mur.",
        q: "Quelle est la longueur de l'échelle ?", r: hyp, u: " m",
        d: "cos(" + angle + "°) = distance au mur / longueur, donc longueur = " +
           adj + " ÷ cos(" + angle + "°) = " + hyp + " m." },
      { t: "Un toit forme un angle de " + angle + "° avec l'horizontale. " +
           "Sa base horizontale mesure " + adj + " m.",
        q: "Quelle est la hauteur du toit ?", r: opp, u: " m",
        d: "tan(" + angle + "°) = hauteur / base, donc hauteur = " + adj + " × tan(" +
           angle + "°) = " + opp + " m." },
      { t: "Un câble tendu depuis le sol fait un angle de " + angle +
           "° avec l'horizontale et mesure " + hyp + " m.",
        q: "À quelle hauteur est-il accroché ?", r: opp, u: " m",
        d: "sin(" + angle + "°) = hauteur / câble, donc hauteur = " + hyp + " × sin(" +
           angle + "°) = " + opp + " m." },
    ]);
    const el = figureTriangle({ adj, opp, hyp, marqueAngle: "B", mesureAngle: angle + "°",
      etiq: { AB: adj + " m", AC: "?", BC: "" } });
    return {
      content: scene.t + "\n" + scene.q,
      solution: "La situation forme un triangle rectangle dont l'angle connu vaut " +
        angle + "°.\n" + scene.d + "\n" +
        "(Les trois côtés valent " + adj + ", " + opp + " et " + hyp + " m : " +
        "les rapports tombent juste.)",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        description: "un triangle rectangle représentant la situation",
      },
    };
  },
];

/* ═══════════════ CALCULER UN ANGLE ═══════════════ */
const M_ANGLE = [
  function (d) {
    const [adj, opp, hyp] = triplet(d);
    const r = pick(RAPPORTS);
    const angle = Math.round(Math.atan2(opp, adj) * 180 / Math.PI);
    const rapport = r.court === "cos" ? adj + "/" + hyp
                  : r.court === "sin" ? opp + "/" + hyp : opp + "/" + adj;
    const etiq = r.court === "cos" ? { AB: adj + " cm", BC: hyp + " cm", AC: "" }
               : r.court === "sin" ? { AC: opp + " cm", BC: hyp + " cm", AB: "" }
               : { AC: opp + " cm", AB: adj + " cm", BC: "" };
    const el = figureTriangle({ adj, opp, hyp, etiq, marqueAngle: "B" });
    return {
      content: "Le triangle ABC est rectangle en A.\n" +
        (r.court === "cos" ? "On donne AB = " + adj + " cm et BC = " + hyp + " cm."
         : r.court === "sin" ? "On donne AC = " + opp + " cm et BC = " + hyp + " cm."
         : "On donne AC = " + opp + " cm et AB = " + adj + " cm.") +
        "\nCalcule la mesure de l'angle en B, arrondie au degré.",
      solution: "On connaît " +
        (r.court === "cos" ? "l'adjacent et l'hypoténuse"
         : r.court === "sin" ? "l'opposé et l'hypoténuse" : "l'opposé et l'adjacent") +
        " : on emploie le " + r.nom + ".\n" +
        r.court + "(B) = " + rapport + "\n" +
        "On utilise la touche " + r.court + "⁻¹ de la calculatrice " +
        "(parfois notée « arc" + r.court + " ») :\n" +
        "B = " + r.court + "⁻¹(" + rapport + ") ≈ " + angle + "°.\n" +
        "L'arrondi est nécessaire : la mesure exacte n'est pas un nombre entier de degrés.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        description: "un triangle rectangle en A, deux longueurs données",
      },
    };
  },
  /* Les deux angles aigus (moyen et difficile). */
  function (d) {
    if (d === "F") return null;
    const [adj, opp, hyp] = triplet(d);
    const B = Math.round(Math.atan2(opp, adj) * 180 / Math.PI);
    const C = 90 - B;
    const el = figureTriangle({ adj, opp, hyp, marqueAngle: "B",
      etiq: { AB: adj + " cm", AC: opp + " cm", BC: hyp + " cm" } });
    return {
      content: "Le triangle ABC est rectangle en A, avec AB = " + adj + " cm, AC = " + opp +
        " cm et BC = " + hyp + " cm.\nCalcule les mesures des angles en B et en C, " +
        "arrondies au degré près.",
      solution: "Pour l'angle en B : tan(B) = AC / AB = " + opp + "/" + adj + ", " +
        "donc B = tan⁻¹(" + opp + "/" + adj + ") ≈ " + B + "°.\n" +
        "Les deux angles aigus d'un triangle rectangle sont COMPLÉMENTAIRES :\n" +
        "C = 90° − " + B + "° = " + C + "°.\n" +
        "(On peut vérifier : 90° + " + B + "° + " + C + "° = 180°.)",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        description: "un triangle rectangle en A, les trois longueurs données",
      },
    };
  },
  /* Angle en situation concrète (difficile). */
  function (d) {
    if (d !== "D") return null;
    const [adj, opp, hyp] = triplet(d);
    const angle = Math.round(Math.atan2(opp, adj) * 180 / Math.PI);
    const scene = pick([
      { t: "Une rampe d'accès s'élève de " + opp + " m sur une longueur horizontale de " +
           adj + " m.", q: "Quel angle fait-elle avec le sol ?",
        d: "tan(angle) = " + opp + "/" + adj + ", donc angle = tan⁻¹(" + opp + "/" + adj + ")" },
      { t: "Une échelle de " + hyp + " m a son pied posé à " + adj + " m du mur.",
        q: "Quel angle fait-elle avec le sol ?",
        d: "cos(angle) = " + adj + "/" + hyp + ", donc angle = cos⁻¹(" + adj + "/" + hyp + ")" },
      { t: "Un câble de " + hyp + " m est accroché à " + opp + " m de hauteur.",
        q: "Quel angle fait-il avec le sol ?",
        d: "sin(angle) = " + opp + "/" + hyp + ", donc angle = sin⁻¹(" + opp + "/" + hyp + ")" },
    ]);
    const el = figureTriangle({ adj, opp, hyp, marqueAngle: "B",
      etiq: { AB: adj + " m", AC: opp + " m", BC: hyp + " m" } });
    return {
      content: scene.t + "\n" + scene.q + " (arrondi au degré)",
      solution: "La situation forme un triangle rectangle.\n" + scene.d + " ≈ " + angle + "°.\n" +
        "On lit la valeur à la calculatrice, en mode degré, et on arrondit à l'unité.",
      interactif: {
        widget: "figure",
        figure: { largeur: L, hauteur: H, elements: el },
        description: "un triangle rectangle représentant la situation",
      },
    };
  },
];

/* ═══════════════ TABLE DES FAMILLES ═══════════════ */
const FAMILLES = {
  "Choisir la bonne formule": M_CHOISIR,
  "Calculer une longueur":    M_LONGUEUR,
  "Calculer un angle":        M_ANGLE,
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
[["Quelle formule choisir", "Choisir la bonne formule"],
 ["Choisir la formule", "Choisir la bonne formule"],
 ["Reconnaître les côtés", "Choisir la bonne formule"],
 ["Calculer un côté", "Calculer une longueur"],
 ["Calculer une distance", "Calculer une longueur"],
 ["Cosinus et longueur", "Calculer une longueur"],
 ["Calculer un cosinus", "Calculer un angle"],
 ["Trouver un angle", "Calculer un angle"],
 ["Calculer une mesure d'angle", "Calculer un angle"],
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
  const CHAPITRE = maj(brut, "chapitre", "Trigonométrie");
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
                     classe: maj(g.items, "classe", "3ème"), type: maj(g.items, "type", "exercice") };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content,
      solution: e.solution, difficulty: LIBELLE[e.d], level: modele.level, subject: modele.subject,
      classe: modele.classe, chapitre: g.items[0].chapitre, type: modele.type, famille: g.nom,
      interactif: JSON.stringify(e.interactif) }); });
    rapport.push({ famille: g.nom, modele: canon, avant: g.items.length,
                   ajoutes: neufs.length, apres: g.items.length + neufs.length });
  }

  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`trigonometrie-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : trigonometrie-avant-generation-${stamp}.json`);

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
