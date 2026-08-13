/* Polymates — generer-proportionnalite.js
   Porte chaque famille du chapitre « Proportionnalité » à 100 exercices.

   ── CE QUI EST PARTICULIER À CE CHAPITRE ─────────────────────────────────
   · « Reconnaître la proportionnalité » alterne DEUX formes : des tableaux
     à examiner et des énoncés en TEXTE (situation décrite en mots). Les
     deux sont produits en proportion équilibrée à chaque niveau.
   · TOUT exercice comportant un tableau utilise le tableau INTERACTIF
     (widget tableau.js) : l'élève complète les cases directement, et la
     correction se fait localement, sans passer par l'IA.
   · « Le produit en croix » demande d'ÉCRIRE LE CALCUL avant le résultat.
     Le calcul entre dans la note : le widget vérifie qu'il donne la bonne
     valeur ET qu'il s'appuie sur les nombres du tableau — une valeur juste
     sans calcul écrit ne vaut que la moitié des points.
   · Répartition pour 100 : 20 faciles, 30 moyens, 50 difficiles.
   · Tous les nombres sont construits pour tomber juste : les coefficients
     sont choisis de sorte qu'aucune valeur ne soit approchée.

   ── USAGE ────────────────────────────────────────────────────────────────
     node generer-proportionnalite.js --apercu
     node generer-proportionnalite.js --apercu "Reconnaître"
     $env:DATABASE_URL = "postgresql://..."
     node generer-proportionnalite.js            # simulation
     node generer-proportionnalite.js --execute
*/

"use strict";
const fs = require("fs");

const ARGS    = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260813);
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

/* ── Nombres : on travaille en centièmes entiers pour rester exact. ── */
const arr2 = x => Math.round(x * 100) / 100;
const fr = x => {
  const v = arr2(x);
  return (Number.isInteger(v) ? String(v) : String(v).replace(".", ",")).replace("-", "−");
};

/* Contextes : chaque situation porte ses deux grandeurs et son unité. */
const CONTEXTES = [
  { obj: "pommes",    g1: "Masse (kg)",      g2: "Prix (€)",        pu: [2.4, 3.5, 1.8, 4.2] },
  { obj: "essence",   g1: "Volume (L)",      g2: "Prix (€)",        pu: [1.7, 1.9, 2.1] },
  { obj: "tissu",     g1: "Longueur (m)",    g2: "Prix (€)",        pu: [6, 8.5, 12] },
  { obj: "carnets",   g1: "Nombre",          g2: "Prix (€)",        pu: [1.5, 2.5, 3] },
  { obj: "farine",    g1: "Nombre de parts", g2: "Farine (g)",      pu: [45, 60, 75, 120] },
  { obj: "peinture",  g1: "Surface (m²)",    g2: "Peinture (L)",    pu: [0.25, 0.4, 0.5] },
  { obj: "sirop",     g1: "Eau (cL)",        g2: "Sirop (cL)",      pu: [0.2, 0.25, 0.5] },
];

/* ── Fabrique d'un tableau interactif ──
   `lignes` : [{ entete, cellules }] où null = case à compléter.
   `attendus` : { "i,j": valeur } pour chaque case vide. */
function tableauInteractif(o) {
  const rep = { cellules: o.attendus };
  if (o.choix) rep.choix = o.choixReponse;
  if (o.calcul) rep.calcul = o.calculAttendu;
  const p = { widget: "tableau", titre: o.titre, lignes: o.lignes, reponse: rep };
  if (o.choix) p.choix = o.choix;
  if (o.calcul) p.calcul = o.calcul;
  return p;
}

/* ═══════════════ RECONNAÎTRE LA PROPORTIONNALITÉ ═══════════════
   Deux formes en alternance : tableau interactif, ou énoncé en texte. */

/* — forme TABLEAU — */
function reconnaitreTableau(d) {
  const c = pick(CONTEXTES);
  const k = pick(c.pu);
  const n = d === "F" ? 3 : d === "M" ? 4 : 5;
  const xs = [];
  while (xs.length < n) { const v = ri(1, d === "D" ? 12 : 8); if (!xs.includes(v)) xs.push(v); }
  xs.sort((a, b) => a - b);
  const proportionnel = alea() < 0.5;
  const ys = xs.map(x => arr2(x * k));
  if (!proportionnel) {
    /* On casse la proportionnalité sur UNE colonne, en lui donnant un AUTRE
       coefficient simple — et non en ajoutant un écart quelconque. Sans cela,
       le quotient de cette colonne tomberait sur des décimales infinies
       (6 ÷ 17 = 0,352941…) que l'élève ne pourrait pas écrire dans la case. */
    const i = ri(1, n - 1);
    const autres = c.pu.filter(v => v !== k);
    const k2 = autres.length ? pick(autres) : arr2(k + pick([0.5, 1, -0.5]));
    ys[i] = arr2(xs[i] * k2);
    if (ys[i] <= 0) ys[i] = arr2(xs[i] * (k + 1));
  }
  /* Chaque quotient est alors exact : c'est k, ou k2 sur la colonne modifiée. */
  const rapports = xs.map((x, i) => arr2(ys[i] / x));
  return {
    content: "Ce tableau est-il un tableau de proportionnalité ?\n" +
      "Complète la ligne des quotients, puis réponds à la question.",
    solution: (proportionnel
      ? "Tous les quotients valent " + fr(k) + " : le tableau EST proportionnel, " +
        "de coefficient " + fr(k) + "."
      : "Les quotients ne sont pas tous égaux (" + rapports.map(fr).join(" ; ") +
        ") : le tableau N'EST PAS proportionnel."),
    interactif: tableauInteractif({
      titre: c.g1 + " et " + c.g2 + " pour des " + c.obj,
      lignes: [
        { entete: c.g1, cellules: xs },
        { entete: c.g2, cellules: ys },
        { entete: "Quotient", cellules: xs.map(() => null) },
      ],
      attendus: Object.fromEntries(rapports.map((r, j) => ["2," + j, r])),
      choix: { question: "Ce tableau est-il proportionnel ?", options: ["Oui", "Non"] },
      choixReponse: proportionnel ? "Oui" : "Non",
    }),
  };
}

/* — forme TEXTE — */
const SITUATIONS = [
  { p: true,  t: (a, b) => "Un lot de " + a + " cahiers coûte " + fr(b) + " €. Un lot de " +
      (a * 2) + " cahiers coûte " + fr(b * 2) + " €.\nLe prix est-il proportionnel au nombre de cahiers ? Justifie.",
    s: (a, b) => "En doublant le nombre de cahiers, le prix double aussi : " + fr(b) + " × 2 = " +
      fr(b * 2) + " €.\nLe prix EST proportionnel au nombre de cahiers." },
  { p: false, t: (a, b) => "Un abonnement coûte " + fr(b) + " € par mois, avec " + fr(a) +
      " € de frais d'inscription payés une seule fois.\nLe montant total est-il proportionnel au nombre de mois ? Justifie.",
    s: (a, b) => "Pour 1 mois : " + fr(a + b) + " €. Pour 2 mois : " + fr(a + 2 * b) + " €.\n" +
      "Le montant ne double pas, à cause des frais fixes de " + fr(a) + " €.\n" +
      "Le montant N'EST PAS proportionnel au nombre de mois." },
  { p: true,  pre: d => { const b = pick([2, 3, 4, 5]); return [b * pick([50, 60, 70, 80, 90, 100]), b]; },
    t: (a, b) => "Une voiture roule à vitesse constante et parcourt " + a +
      " km en " + b + " h.\nLa distance parcourue est-elle proportionnelle à la durée ? Justifie.",
    s: (a, b) => "À vitesse constante, la distance est le produit de la vitesse par la durée : " +
      a + " ÷ " + b + " = " + fr(a / b) + " km/h.\nLa distance EST proportionnelle à la durée." },
  { p: false, t: (a) => "Le côté d'un carré mesure " + a + " cm.\nL'aire du carré est-elle " +
      "proportionnelle à la longueur du côté ? Justifie.",
    s: (a) => "Pour un côté de " + a + " cm, l'aire vaut " + (a * a) + " cm². " +
      "En doublant le côté (" + (a * 2) + " cm), l'aire devient " + (a * a * 4) + " cm², " +
      "soit quatre fois plus et non deux fois.\nL'aire N'EST PAS proportionnelle au côté." },
  { p: false, t: (a) => "Un enfant a " + a + " ans et mesure environ " + (70 + a * 6) +
      " cm.\nLa taille est-elle proportionnelle à l'âge ? Justifie.",
    s: (a) => "À la naissance (0 an), la taille n'est pas nulle : elle vaut environ 50 cm. " +
      "Or dans une situation proportionnelle, à 0 correspond toujours 0.\n" +
      "La taille N'EST PAS proportionnelle à l'âge." },
  { p: true,  pre: d => { const a = pick([2, 3, 4, 5]); return [a, a * pick([2, 3, 4, 5])]; },
    t: (a, b) => "Pour préparer une boisson, on mélange " + a + " cL de sirop " +
      "avec " + b + " cL d'eau, en gardant toujours les mêmes proportions.\n" +
      "La quantité d'eau est-elle proportionnelle à celle de sirop ? Justifie.",
    s: (a, b) => "Le rapport reste constant : " + b + " ÷ " + a + " = " + fr(b / a) +
      ".\nLa quantité d'eau EST proportionnelle à celle de sirop." },
  { p: false, t: (a) => "Un taxi facture " + fr(a) + " € de prise en charge, puis 1,20 € " +
      "par kilomètre.\nLe prix de la course est-il proportionnel à la distance ? Justifie.",
    s: (a) => "Pour 0 km, le prix vaut déjà " + fr(a) + " € : il n'est pas nul.\n" +
      "Le prix N'EST PAS proportionnel à la distance." },
];

function reconnaitreTexte(d) {
  const s = pick(SITUATIONS);
  /* Certaines situations comportent une division : leurs nombres sont
     construits pour que le quotient tombe juste, sinon le corrigé afficherait
     une valeur arrondie et donc fausse. */
  let a, b;
  if (s.pre) { [a, b] = s.pre(d); }
  else {
    a = d === "F" ? ri(2, 6) : d === "M" ? ri(3, 12) : ri(4, 20);
    b = d === "F" ? ri(2, 8) : ri(3, 15);
  }
  const enonce = s.t(a, b);
  return {
    content: enonce,
    solution: s.s(a, b) + "\n\nRappel : une situation est proportionnelle si l'on passe " +
      "d'une grandeur à l'autre en multipliant toujours par le même nombre.",
  };
}

const M_RECONNAITRE = [
  d => reconnaitreTableau(d),
  d => reconnaitreTexte(d),
  /* Un troisième modèle en texte, pour équilibrer les deux formes. */
  d => reconnaitreTexte(d),
];

/* ═══════════════ LE PRODUIT EN CROIX ═══════════════
   L'élève écrit d'abord le calcul, puis la valeur. */
const M_CROIX = [
  function (d) {
    const c = pick(CONTEXTES);
    const k = pick(c.pu);
    let a = ri(2, d === "F" ? 6 : 12);
    let b = a; while (b === a) b = ri(2, d === "F" ? 8 : 15);
    const ya = arr2(a * k);
    const yb = arr2(b * k);
    return {
      content: "Complète le tableau par le produit en croix.\n" +
        "Écris d'abord le calcul qui donne la valeur manquante, puis complète la case.",
      solution: "Produit en croix : " + fr(ya) + " × " + b + " ÷ " + a + " = " + fr(yb) + "\n" +
        "La valeur manquante est " + fr(yb) + ".\n" +
        "(On peut aussi passer par le coefficient : " + fr(ya) + " ÷ " + a + " = " + fr(k) +
        ", puis " + fr(k) + " × " + b + " = " + fr(yb) + ".)",
      interactif: tableauInteractif({
        titre: c.g1 + " et " + c.g2,
        lignes: [
          { entete: c.g1, cellules: [a, b] },
          { entete: c.g2, cellules: [ya, null] },
        ],
        attendus: { "1,1": yb },
        calcul: { consigne: "Écris le calcul du produit en croix (il compte dans la note)." },
        calculAttendu: { valeur: yb, doitContenir: [ya, b, a] },
      }),
    };
  },
  function (d) {
    if (d === "F") return null;
    /* La case manquante n'est pas au même endroit : il faut adapter le calcul. */
    const c = pick(CONTEXTES);
    const k = pick(c.pu);
    const a = ri(2, 9);
    let b = a; while (b === a) b = ri(2, 14);
    const ya = arr2(a * k), yb = arr2(b * k);
    return {
      content: "Il manque une valeur dans la première ligne du tableau.\n" +
        "Écris d'abord le calcul qui permet de la trouver, puis complète la case.",
      solution: "Produit en croix : " + a + " × " + fr(yb) + " ÷ " + fr(ya) + " = " + fr(b) + "\n" +
        "La valeur manquante est " + fr(b) + ".",
      interactif: tableauInteractif({
        titre: c.g1 + " et " + c.g2,
        lignes: [
          { entete: c.g1, cellules: [a, null] },
          { entete: c.g2, cellules: [ya, yb] },
        ],
        attendus: { "0,1": b },
        calcul: { consigne: "Écris le calcul du produit en croix (il compte dans la note)." },
        calculAttendu: { valeur: b, doitContenir: [a, yb, ya] },
      }),
    };
  },
  function (d) {
    if (d !== "D") return null;
    /* Deux valeurs manquantes : le produit en croix s'applique deux fois. */
    const c = pick(CONTEXTES);
    const k = pick(c.pu);
    const xs = []; while (xs.length < 4) { const v = ri(2, 15); if (!xs.includes(v)) xs.push(v); }
    xs.sort((x, y) => x - y);
    const ys = xs.map(x => arr2(x * k));
    return {
      content: "Complète les deux cases manquantes de ce tableau de proportionnalité.\n" +
        "Écris d'abord le calcul qui donne la première valeur manquante.",
      solution: "Coefficient : " + fr(ys[0]) + " ÷ " + xs[0] + " = " + fr(k) + "\n" +
        "Produit en croix pour la 2ᵉ colonne : " + fr(ys[0]) + " × " + xs[1] + " ÷ " + xs[0] +
        " = " + fr(ys[1]) + "\n" +
        "Pour la 4ᵉ colonne : " + fr(ys[0]) + " × " + xs[3] + " ÷ " + xs[0] + " = " + fr(ys[3]) +
        "\nValeurs manquantes : " + fr(ys[1]) + " et " + fr(ys[3]) + ".",
      interactif: tableauInteractif({
        titre: c.g1 + " et " + c.g2,
        lignes: [
          { entete: c.g1, cellules: xs },
          { entete: c.g2, cellules: [ys[0], null, ys[2], null] },
        ],
        attendus: { "1,1": ys[1], "1,3": ys[3] },
        calcul: { consigne: "Écris le calcul du produit en croix pour la 2ᵉ colonne (il compte dans la note)." },
        calculAttendu: { valeur: ys[1], doitContenir: [ys[0], xs[1], xs[0]] },
      }),
    };
  },
];

/* ═══════════════ QUATRIÈME PROPORTIONNELLE ═══════════════ */
const M_QUATRIEME = [
  function (d) {
    const c = pick(CONTEXTES);
    const k = pick(c.pu);
    const a = ri(2, d === "F" ? 6 : 12);
    let b = a; while (b === a) b = ri(2, 18);
    const ya = arr2(a * k), yb = arr2(b * k);
    return {
      content: "Complète ce tableau de proportionnalité.",
      solution: "Coefficient : " + fr(ya) + " ÷ " + a + " = " + fr(k) + "\n" +
        fr(k) + " × " + b + " = " + fr(yb) + "\nValeur manquante : " + fr(yb) + ".",
      interactif: tableauInteractif({
        titre: c.g1 + " et " + c.g2,
        lignes: [
          { entete: c.g1, cellules: [a, b] },
          { entete: c.g2, cellules: [ya, null] },
        ],
        attendus: { "1,1": yb },
      }),
    };
  },
  function (d) {
    if (d === "F") return null;
    const c = pick(CONTEXTES);
    const k = pick(c.pu);
    const n = d === "M" ? 4 : 5;
    const xs = []; while (xs.length < n) { const v = ri(1, 16); if (!xs.includes(v)) xs.push(v); }
    xs.sort((a, b) => a - b);
    const ys = xs.map(x => arr2(x * k));
    /* On laisse la première colonne complète : elle donne le coefficient. */
    const vides = [];
    while (vides.length < (d === "M" ? 2 : 3)) {
      const j = ri(1, n - 1); if (!vides.includes(j)) vides.push(j);
    }
    return {
      content: "Complète ce tableau de proportionnalité.",
      solution: "Coefficient : " + fr(ys[0]) + " ÷ " + xs[0] + " = " + fr(k) + "\n" +
        vides.sort((a, b) => a - b).map(j =>
          fr(k) + " × " + xs[j] + " = " + fr(ys[j])).join("\n"),
      interactif: tableauInteractif({
        titre: c.g1 + " et " + c.g2,
        lignes: [
          { entete: c.g1, cellules: xs },
          { entete: c.g2, cellules: ys.map((y, j) => vides.includes(j) ? null : y) },
        ],
        attendus: Object.fromEntries(vides.map(j => ["1," + j, ys[j]])),
      }),
    };
  },
];

/* ═══════════════ POURCENTAGES ═══════════════ */
const M_POURCENT = [
  function (d) {
    const p = d === "F" ? pick([10, 20, 25, 50]) : pick([5, 12, 15, 18, 30, 35, 60, 75]);
    const base = d === "F" ? pick([40, 60, 80, 120, 200]) : ri(2, 40) * 10;
    const v = arr2(base * p / 100);
    return {
      content: "Calcule " + p + " % de " + base + ".",
      solution: "Prendre " + p + " % revient à multiplier par " + fr(p / 100) + ".\n" +
        base + " × " + p + " ÷ 100 = " + fr(v) + "\nRésultat : " + fr(v) + ".",
    };
  },
  function (d) {
    if (d === "F") return null;
    const p = pick([5, 10, 15, 20, 25, 30, 40]);
    const base = ri(2, 60) * 10;
    const hausse = alea() < 0.5;
    const v = arr2(base * (hausse ? 1 + p / 100 : 1 - p / 100));
    return {
      content: "Un article coûte " + base + " €. Son prix " +
        (hausse ? "augmente" : "baisse") + " de " + p + " %.\nQuel est le nouveau prix ?",
      solution: "Variation : " + base + " × " + p + " ÷ 100 = " + fr(base * p / 100) + " €\n" +
        "Nouveau prix : " + base + (hausse ? " + " : " − ") + fr(base * p / 100) + " = " + fr(v) + " €\n" +
        "(Plus rapidement : × " + fr(hausse ? 1 + p / 100 : 1 - p / 100) + ".)",
    };
  },
  function (d) {
    if (d !== "D") return null;
    const base = ri(2, 40) * 10;
    const p = pick([10, 20, 25, 40, 50]);
    const apres = arr2(base * (1 + p / 100));
    return {
      content: "Un prix passe de " + base + " € à " + fr(apres) + " €.\n" +
        "Quel est le pourcentage d'augmentation ?",
      solution: "Augmentation : " + fr(apres) + " − " + base + " = " + fr(apres - base) + " €\n" +
        "Pourcentage : " + fr(apres - base) + " ÷ " + base + " × 100 = " + p + " %\n" +
        "Le prix a augmenté de " + p + " %.",
    };
  },
];

/* ═══════════════ VITESSE MOYENNE ═══════════════ */
const M_VITESSE = [
  function (d) {
    const v = d === "F" ? pick([20,25,30,35,40,45,50,60,70,80]) : pick([45,55,65,70,85,90,95,110,120,130]);
    const t = d === "F" ? pick([2, 3, 4, 5, 6]) : pick([1.5, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7]);
    const dkm = arr2(v * t);
    return {
      content: "Un véhicule roule à " + v + " km/h pendant " + fr(t) + " h.\n" +
        "Quelle distance parcourt-il ?",
      solution: "La distance est proportionnelle à la durée.\n" +
        v + " × " + fr(t) + " = " + fr(dkm) + "\nDistance : " + fr(dkm) + " km.",
    };
  },
  function (d) {
    if (d === "F") return null;
    const v = pick([40, 45, 50, 60, 70, 80, 90, 100, 120]);
    const t = pick([2, 3, 4, 5, 6, 7]);
    const dkm = v * t;
    return {
      content: "Un train parcourt " + dkm + " km en " + t + " h.\n" +
        "Quelle est sa vitesse moyenne ? Complète le tableau.",
      solution: "Vitesse : " + dkm + " ÷ " + t + " = " + v + " km/h.\n" +
        "En 1 h, il parcourt donc " + v + " km.",
      interactif: tableauInteractif({
        titre: "Distance et durée",
        lignes: [
          { entete: "Durée (h)",    cellules: [1, t] },
          { entete: "Distance (km)", cellules: [null, dkm] },
        ],
        attendus: { "1,0": v },
      }),
    };
  },
  function (d) {
    if (d !== "D") return null;
    const v = pick([50, 60, 70, 75, 80, 90, 100, 110, 120]);
    const dkm = v * pick([2, 3, 4, 5, 6]);
    const t = dkm / v;
    const min = t * 60;
    return {
      content: "Un automobiliste parcourt " + dkm + " km à la vitesse moyenne de " + v + " km/h.\n" +
        "Combien de temps met-il ? Donne la réponse en heures, puis en minutes.",
      solution: "Durée : " + dkm + " ÷ " + v + " = " + fr(t) + " h\n" +
        "En minutes : " + fr(t) + " × 60 = " + fr(min) + " min.",
    };
  },
];

/* ═══════════════ TABLE DES FAMILLES ═══════════════ */
const FAMILLES = {
  "Reconnaître la proportionnalité": M_RECONNAITRE,
  "Le produit en croix":             M_CROIX,
  "Quatrième proportionnelle":       M_QUATRIEME,
  "Pourcentages":                    M_POURCENT,
  "Vitesse moyenne":                 M_VITESSE,
};

/* Correspondance souple des libellés (leçon des chapitres précédents :
   un article ou un pluriel suffisait à faire échouer la correspondance). */
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
[["Reconnaitre la proportionnalité", "Reconnaître la proportionnalité"],
 ["Reconnaître une situation de proportionnalité", "Reconnaître la proportionnalité"],
 ["Produit en croix", "Le produit en croix"],
 ["La quatrième proportionnelle", "Quatrième proportionnelle"],
 ["Calculer une quatrième proportionnelle", "Quatrième proportionnelle"],
 ["Les pourcentages", "Pourcentages"],
 ["Appliquer un pourcentage", "Pourcentages"],
 ["La vitesse moyenne", "Vitesse moyenne"],
 ["Vitesses", "Vitesse moyenne"],
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

/* Clé de déduplication des ÉNONCÉS : on conserve chaque caractère, seuls les
   espaces et la casse sont uniformisés. (Une clé qui supprime la ponctuation
   confondrait des énoncés distincts — l'erreur commise sur les puissances.)
   Le plateau entre dans la clé : deux tableaux différents sous le même
   énoncé sont bien deux exercices distincts. */
const cleEnonce = e => (String(e.content).replace(/\s+/g, " ").trim().toLowerCase() +
  "|" + (e.interactif ? JSON.stringify(e.interactif.lignes) + JSON.stringify(e.interactif.reponse) : ""));

function genererFamille(nom, besoins, vus) {
  const modeles = FAMILLES[nom];
  const sortie = [];
  for (const d of ["F", "M", "D"]) {
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < reste * 400 + 4000) {
      essais++;
      const e = pick(modeles)(d);
      if (!e) continue;
      const k = cleEnonce(e);
      if (vus.has(k)) continue;
      vus.add(k);
      sortie.push({ d, content: e.content, solution: e.solution, interactif: e.interactif || null });
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
                  tableaux: ex.filter(e => e.interactif).length,
                  "avec calcul": ex.filter(e => e.interactif && e.interactif.calcul).length });
    if (cherche) {
      for (const d of ["F", "M", "D"]) {
        const e = ex.find(x => x.d === d);
        if (!e) continue;
        console.log("── " + nom + " · " + LIBELLE[d] + " ──");
        console.log(e.content);
        if (e.interactif) {
          console.log("   [tableau interactif]");
          e.interactif.lignes.forEach(L => console.log("     " + String(L.entete).padEnd(18) +
            L.cellules.map(c => (c === null ? "  ?  " : String(c).replace(".", ",")).padStart(7)).join("")));
          if (e.interactif.choix) console.log("     Q : " + e.interactif.choix.question +
            "  → " + e.interactif.reponse.choix);
          if (e.interactif.calcul) console.log("     calcul demandé (compte dans la note)");
        }
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
       FROM exercises WHERE chapitre ILIKE '%proportionnalit%' ORDER BY id`);
  if (!brut.length) { console.log("Chapitre « Proportionnalité » introuvable."); await pool.end(); return; }

  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(brut, "chapitre", "Proportionnalité");
  console.log(`Chapitre « ${CHAPITRE} » : ${brut.length} exercice(s) en base.\n`);

  const parFam = new Map();
  brut.forEach(r => { if (!r.famille) return; const k = cle(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

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
    const modele = { level: maj(g.items, "level", "college"), subject: maj(g.items, "subject", "Proportionnalité"),
                     classe: maj(g.items, "classe", "5ème"), type: maj(g.items, "type", "exercice") };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content,
      solution: e.solution, difficulty: LIBELLE[e.d], level: modele.level, subject: modele.subject,
      classe: modele.classe, chapitre: CHAPITRE, type: modele.type, famille: g.nom,
      interactif: e.interactif ? JSON.stringify(e.interactif) : null }); });
    rapport.push({ famille: g.nom, modele: canon, avant: g.items.length, ajoutes: neufs.length,
                   apres: g.items.length + neufs.length,
                   tableaux: neufs.filter(x => x.interactif).length });
  }

  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`proportionnalite-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : proportionnalite-avant-generation-${stamp}.json`);

  const T = 200;
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
