/* Polymates — generer-relatifs.js
   Porte chaque famille du chapitre « Nombres relatifs » à 100 exercices.

   ── PRINCIPE ─────────────────────────────────────────────────────────────
   Les énoncés sont PRODUITS à partir de modèles paramétrés, et chaque
   corrigé est CALCULÉ, jamais recopié : le script ne peut pas se tromper
   de résultat. Toute l'arithmétique reste en entiers (mantisse + nombre de
   décimales) pour qu'aucune erreur de virgule flottante ne soit possible.

   · Répartition visée pour 100 : 20 faciles, 30 moyens, 50 difficiles
     (plus de difficiles que de faciles, comme demandé).
   · Les suites d'opérations s'allongent avec la difficulté : 2 termes en
     facile, 3 ou 4 en moyen, 5 ou 6 en difficile.
   · La famille « Règle des signes en chaîne » mêle produits ET quotients ;
     les divisions sont choisies pour tomber juste.
   · « Distance entre deux points » produit des exercices INTERACTIFS : un
     axe gradué sur lequel l'élève place les points (widget axe.js), corrigé
     localement, sans appel au correcteur IA.
   · Le script COMPTE d'abord ce qui existe par difficulté et ne complète que
     le manque : les exercices écrits à la main sont conservés.
   · Tirage déterministe (graine fixe) et déduplication par énoncé : le
     script est rejouable sans créer de doublon.

   ── USAGE ────────────────────────────────────────────────────────────────
     node generer-relatifs.js --apercu             # hors base : stats + échantillons
     node generer-relatifs.js --apercu "Distance"  # échantillon d'une famille
     $env:DATABASE_URL = "postgresql://..."
     node generer-relatifs.js                      # simulation sur la base
     node generer-relatifs.js --execute            # applique
   Options : --cible N (défaut 100) · --graine N (défaut 20260810)
*/

"use strict";
const fs = require("fs");

/* ═══════════════ ARGUMENTS ═══════════════ */
const ARGS    = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (nom, def) => { const i = ARGS.indexOf(nom); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : def; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260810);
const REPARTITION = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };

/* ═══════════════ TIRAGE DÉTERMINISTE ═══════════════ */
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

/* Entier relatif non nul dans [-n ; n]. */
const rel = n => { let v = 0; while (v === 0) v = ri(-n, n); return v; };

/* ═══════════════ ÉCRITURE DES RELATIFS ═══════════════
   Le signe « moins » typographique (−) est utilisé partout, comme dans les
   manuels. Un relatif négatif s'écrit entre parenthèses derrière un
   opérateur : 5 + (−3), jamais 5 + −3. */
const S = n => (n < 0 ? "−" + Math.abs(n) : String(n));
const par = n => (n < 0 ? "(" + S(n) + ")" : String(n));
/* Écriture « signée » utilisée en début de somme algébrique : (+5) ou (−3). */
const sgn = n => "(" + (n < 0 ? "−" : "+") + Math.abs(n) + ")";

/* Décimaux exacts : mantisse entière + nombre de décimales. */
function dec(m, e) { return { m, e }; }
function fmtDec(d) {
  const neg = d.m < 0, m = Math.abs(d.m);
  let s = String(m).padStart(d.e + 1, "0");
  const ip = s.slice(0, s.length - d.e), dp = d.e ? s.slice(s.length - d.e) : "";
  let t = dp ? ip + "," + dp.replace(/0+$/, "") : ip;
  if (t.endsWith(",")) t = t.slice(0, -1);
  return (neg ? "−" : "") + t;
}
const decAlea = (max, e) => { let m = 0; while (m === 0) m = ri(-max, max); return dec(m, e); };

/* ═══════════════ OUTILS DE RÉDACTION ═══════════════ */
/* Suite d'additions et de soustractions : rend l'énoncé ET le détail. */
function suiteAddSous(termes) {
  // termes[0] est le premier nombre ; les suivants portent leur opérateur.
  let enonce = S(termes[0].v);
  let total = termes[0].v;
  const etapes = [];
  for (let i = 1; i < termes.length; i++) {
    const t = termes[i];
    enonce += " " + t.op + " " + par(t.v);
    total = t.op === "+" ? total + t.v : total - t.v;
    etapes.push(total);
  }
  return { enonce, total, etapes };
}

/* Détail pas à pas d'une suite : on montre chaque résultat intermédiaire. */
function detailSuite(termes, etapes) {
  const lignes = [];
  let courant = S(termes[0].v);
  for (let i = 1; i < termes.length; i++) {
    const t = termes[i];
    lignes.push(courant + " " + t.op + " " + par(t.v) + " = " + S(etapes[i - 1]));
    courant = S(etapes[i - 1]);
  }
  return lignes.join("\n");
}

/* Nombre de termes selon la difficulté : la ligne de calcul s'allonge. */
const nbTermes = d => d === "F" ? 2 : d === "M" ? ri(3, 4) : ri(5, 6);

/* ═══════════════ MODÈLES PAR FAMILLE ═══════════════
   Chaque modèle rend { content, solution } et reçoit la difficulté.
   `interactif` est optionnel : il porte le plateau du widget. */

/* ── Suite d'additions et de soustractions ── */
const M_SUITE = [
  function (d) {
    const n = nbTermes(d), amp = d === "F" ? 12 : d === "M" ? 20 : 40;
    const termes = [{ v: rel(amp) }];
    for (let i = 1; i < n; i++) termes.push({ op: pick(["+", "−"]), v: rel(amp) });
    const r = suiteAddSous(termes);
    return {
      content: "Calcule en détaillant chaque étape :\n" + r.enonce + " = …",
      solution: detailSuite(termes, r.etapes) + "\nRésultat : " + S(r.total),
    };
  },
  function (d) {
    const n = nbTermes(d), amp = d === "F" ? 12 : d === "M" ? 25 : 45;
    const termes = [{ v: rel(amp) }];
    for (let i = 1; i < n; i++) termes.push({ op: pick(["+", "−"]), v: rel(amp) });
    const r = suiteAddSous(termes);
    /* Regroupement astucieux : positifs d'un côté, négatifs de l'autre. */
    const signes = termes.map((t, i) => i === 0 ? t.v : (t.op === "+" ? t.v : -t.v));
    const pos = signes.filter(v => v > 0), neg = signes.filter(v => v < 0);
    const sp = pos.reduce((a, b) => a + b, 0), sn = neg.reduce((a, b) => a + b, 0);
    return {
      content: "Calcule astucieusement en regroupant les termes de même signe :\n" +
               r.enonce + " = …",
      solution: "On regroupe : positifs " + (pos.length ? pos.map(S).join(" + ") : "aucun") +
        " = " + S(sp) + "\nNégatifs " + (neg.length ? neg.map(S).join(" ") : "aucun") +
        " = " + S(sn) + "\nPuis " + S(sp) + " + " + par(sn) + " = " + S(sp + sn) +
        "\nRésultat : " + S(r.total),
    };
  },
  function (d) {
    if (d === "F") return null;    // le contexte n'a de sens qu'à partir du moyen
    const n = d === "M" ? 3 : ri(4, 5);
    const debut = ri(-8, 5);
    const varis = []; for (let i = 0; i < n; i++) varis.push(rel(d === "M" ? 9 : 14));
    let t = debut; const etapes = [];
    varis.forEach(v => { t += v; etapes.push(t); });
    const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    return {
      content: "La température est de " + S(debut) + " °C. " +
        varis.map((v, i) => "Le " + jours[i] + " elle " +
          (v > 0 ? "monte de " + v : "baisse de " + Math.abs(v)) + " °C").join(", ") +
        ".\nQuelle température fait-il à la fin ?",
      solution: varis.map((v, i) =>
        S(i === 0 ? debut : etapes[i - 1]) + " " + (v > 0 ? "+ " + v : "− " + Math.abs(v)) +
        " = " + S(etapes[i])).join("\n") +
        "\nRésultat : " + S(etapes[etapes.length - 1]) + " °C",
    };
  },
];

/* ── Simplifier une opération ── */
const M_SIMPLIFIER = [
  function (d) {
    const n = d === "F" ? 2 : d === "M" ? 3 : ri(4, 5);
    const termes = [{ v: rel(d === "F" ? 10 : 20) }];
    for (let i = 1; i < n; i++) termes.push({ op: pick(["+", "−"]), v: rel(d === "F" ? 10 : 20) });
    /* Écriture non simplifiée : 5 − (−3) + (+7) */
    let brut = S(termes[0].v);
    termes.slice(1).forEach(t => { brut += " " + t.op + " " + sgn(t.v); });
    const r = suiteAddSous(termes);
    /* Simplification : deux signes identiques donnent +, deux contraires −. */
    let simple = S(termes[0].v);
    termes.slice(1).forEach(t => {
      const plus = (t.op === "+") === (t.v > 0);
      simple += (plus ? " + " : " − ") + Math.abs(t.v);
    });
    return {
      content: "Simplifie l'écriture, puis calcule :\n" + brut + " = …",
      solution: "Deux signes identiques donnent un +, deux signes contraires donnent un −.\n" +
        brut + "\n= " + simple + "\n= " + S(r.total),
    };
  },
  function (d) {
    const n = d === "F" ? 2 : d === "M" ? 3 : 4;
    const termes = [{ v: rel(15) }];
    for (let i = 1; i < n; i++) termes.push({ op: "−", v: rel(15) });
    let brut = S(termes[0].v);
    termes.slice(1).forEach(t => { brut += " − " + sgn(t.v); });
    const r = suiteAddSous(termes);
    return {
      content: "Transforme chaque soustraction en addition, puis calcule :\n" + brut + " = …",
      solution: "Soustraire un nombre revient à ajouter son opposé.\n" +
        brut + "\n= " + S(termes[0].v) + " " +
        termes.slice(1).map(t => "+ " + par(-t.v)).join(" ") +
        "\n= " + S(r.total),
    };
  },
];

/* Fabrique l'axe : les bornes s'ajustent aux points à placer, en gardant
   l'origine visible et deux graduations de marge de chaque côté. Un axe
   trop large rendrait les points serrés et difficiles à viser. */
function bornesAxe(valeurs, opts, points) {
  const vs = valeurs.concat([0]);
  const min = Math.min(...vs) - 2, max = Math.max(...vs) + 2;

  /* Le NOMBRE D'ÉTIQUETTES dépend de la difficulté : les traits de graduation
     restent tous tracés, mais les nombres écrits se raréfient, si bien que
     l'élève doit compter les graduations au lieu de lire une valeur toute
     faite. En difficile, deux repères seulement : l'origine et une borne. */
  const d = opts.difficulte;
  const p = { widget: "axe", min, max, pas: 1,
              fixes: [{ nom: "O", x: 0 }], placer: points.map(x => x.nom),
              reponse: { points } };

  if (d === "D") {
    /* Deux repères : 0, et la borne la plus éloignée des points à placer —
       de sorte qu'aucun point ne tombe sur un nombre déjà écrit. */
    const loin = Math.abs(min) > Math.abs(max) ? min : max;
    p.reperes = [0, loin];
  } else if (d === "M") {
    /* Un repère tous les cinq, plus l'origine. */
    const r = [0];
    for (let v = min; v <= max; v++) if (v !== 0 && v % 5 === 0) r.push(v);
    p.reperes = r;
  } else {
    p.etiquettes = 1;                    // facile : toutes les valeurs écrites
  }

  /* Aucun repère ne doit tomber sur un point à placer : la valeur serait déjà
     écrite sous le point, et il n'y aurait plus rien à chercher. On garde
     toujours au moins un repère pour que l'axe reste lisible. */
  if (Array.isArray(p.reperes)) {
    const aPlacer = points.map(x => x.x);
    const nets = p.reperes.filter(r => !aPlacer.includes(r));
    if (nets.length) p.reperes = nets;
    else {
      /* Cas limite : tous les repères sont occupés. On en prend un ailleurs. */
      for (let v = min; v <= max; v++)
        if (!aPlacer.includes(v)) { p.reperes = [v]; break; }
    }
  }
  return p;
}

/* ── Distance entre deux points (INTERACTIF : axe gradué) ── */
const M_DISTANCE = [
  /* Placer deux points puis lire la distance. */
  function (d) {
    const amp = d === "F" ? 8 : d === "M" ? 10 : 12;
    let a = rel(amp), b = rel(amp);
    if (d === "F") { if (a < 0) a = -a; if (b < 0) b = -b; }           // même signe, positifs
    else if (d === "M") { a = -Math.abs(a); b = Math.abs(b); }          // signes contraires
    while (a === b) b = rel(amp);
    const dist = Math.abs(a - b);
    return {
      content: "Place les points A d'abscisse " + S(a) + " et B d'abscisse " + S(b) +
        " sur l'axe gradué, puis donne la distance AB.",
      solution: "AB = |" + S(a) + " − " + par(b) + "| = " + dist + " unités.",
      interactif: Object.assign(
        bornesAxe([a, b], { difficulte: d }, [{ nom: "A", x: a }, { nom: "B", x: b }]),
        { attendu: { valeur: dist, libelle: "AB" } }),
    };
  },
  /* Trois points : distances à comparer (moyen et difficile). */
  function (d) {
    if (d === "F") return null;
    const amp = d === "M" ? 10 : 14;
    const xs = [];
    while (xs.length < 3) { const v = rel(amp); if (!xs.includes(v)) xs.push(v); }
    const [a, b, c] = xs;
    return {
      content: "Place les points A(" + S(a) + "), B(" + S(b) + ") et C(" + S(c) +
        ") sur l'axe gradué, puis indique lequel des segments [AB] ou [BC] est le plus long.",
      solution: "AB = " + Math.abs(a - b) + " et BC = " + Math.abs(b - c) + " : " +
        (Math.abs(a - b) === Math.abs(b - c) ? "les deux segments ont la même longueur."
          : "le segment [" + (Math.abs(a - b) > Math.abs(b - c) ? "AB" : "BC") + "] est le plus long."),
      interactif: bornesAxe([a, b, c], { difficulte: d },
        [{ nom: "A", x: a }, { nom: "B", x: b }, { nom: "C", x: c }]),
    };
  },
  /* Point à trouver à partir d'une distance (difficile). */
  function (d) {
    if (d !== "D") return null;
    const a = rel(9), k = ri(3, 8);
    const b = alea() < 0.5 ? a + k : a - k;
    return {
      content: "Le point A a pour abscisse " + S(a) + ". Le point B est à " + k +
        " unités de A, du côté " + (b > a ? "des abscisses croissantes" : "des abscisses décroissantes") +
        ".\nPlace A et B sur l'axe, puis donne l'abscisse de B.",
      solution: "B a pour abscisse " + S(a) + (b > a ? " + " : " − ") + k + " = " + S(b) + ".",
      interactif: Object.assign(
        bornesAxe([a, b], { difficulte: d }, [{ nom: "A", x: a }, { nom: "B", x: b }]),
        { attendu: { valeur: b, libelle: "abscisse de B" } }),
    };
  },
];

/* ── Priorité des relatifs ── */
const M_PRIORITE = [
  function (d) {
    const a = rel(d === "F" ? 8 : 12), b = rel(9), c = rel(d === "F" ? 6 : 11);
    if (d === "F") {
      return {
        content: "Calcule en respectant les priorités :\n" + S(a) + " + " + par(b) + " × " + par(c) + " = …",
        solution: "La multiplication est prioritaire.\n" + par(b) + " × " + par(c) + " = " + S(b * c) +
          "\n" + S(a) + " + " + par(b * c) + " = " + S(a + b * c),
      };
    }
    const e = rel(7);
    if (d === "M") {
      return {
        content: "Calcule en respectant les priorités :\n" +
          S(a) + " − " + par(b) + " × " + par(c) + " + " + par(e) + " = …",
        solution: par(b) + " × " + par(c) + " = " + S(b * c) +
          "\n" + S(a) + " − " + par(b * c) + " = " + S(a - b * c) +
          "\n" + S(a - b * c) + " + " + par(e) + " = " + S(a - b * c + e),
      };
    }
    const f = rel(6);
    return {
      content: "Calcule en respectant les priorités :\n" +
        "(" + S(a) + " + " + par(b) + ") × " + par(c) + " − " + par(e) + " × " + par(f) + " = …",
      solution: "On commence par la parenthèse.\n" + S(a) + " + " + par(b) + " = " + S(a + b) +
        "\n" + par(a + b) + " × " + par(c) + " = " + S((a + b) * c) +
        "\n" + par(e) + " × " + par(f) + " = " + S(e * f) +
        "\n" + S((a + b) * c) + " − " + par(e * f) + " = " + S((a + b) * c - e * f),
    };
  },
  /* Quotient puis somme : la division tombe juste par construction. */
  function (d) {
    const q = rel(d === "F" ? 6 : 9), b = rel(d === "F" ? 5 : 8);
    const a = q * b;                        // a ÷ b = q, exact
    const c = rel(d === "F" ? 8 : 15);
    if (d === "D") {
      const q2 = rel(7), b2 = rel(6), a2 = q2 * b2;
      return {
        content: "Calcule :\n" + par(a) + " ÷ " + par(b) + " + " + par(a2) + " ÷ " + par(b2) +
          " − " + par(c) + " = …",
        solution: par(a) + " ÷ " + par(b) + " = " + S(q) +
          "\n" + par(a2) + " ÷ " + par(b2) + " = " + S(q2) +
          "\n" + S(q) + " + " + par(q2) + " = " + S(q + q2) +
          "\n" + S(q + q2) + " − " + par(c) + " = " + S(q + q2 - c),
      };
    }
    return {
      content: "Calcule le quotient, puis la somme :\n" +
        par(a) + " ÷ " + par(b) + " + " + par(c) + " = …",
      solution: "Le quotient est prioritaire.\n" + par(a) + " ÷ " + par(b) + " = " + S(q) +
        "\n" + S(q) + " + " + par(c) + " = " + S(q + c),
    };
  },
];

/* ── Produits de relatifs ── */
const M_PRODUITS = [
  function (d) {
    if (d === "F") {
      const a = rel(9), b = rel(9);
      return {
        content: "Calcule : " + par(a) + " × " + par(b) + " = …",
        solution: "Signes " + (a > 0 === (b > 0) ? "identiques" : "contraires") +
          " : le produit est " + (a * b > 0 ? "positif" : "négatif") + ".\n" +
          Math.abs(a) + " × " + Math.abs(b) + " = " + Math.abs(a * b) +
          "\nRésultat : " + S(a * b),
      };
    }
    const n = d === "M" ? 3 : ri(4, 5);
    const fs_ = []; for (let i = 0; i < n; i++) fs_.push(rel(d === "M" ? 7 : 9));
    const prod = fs_.reduce((a, b) => a * b, 1);
    const neg = fs_.filter(v => v < 0).length;
    return {
      content: "Calcule : " + fs_.map(par).join(" × ") + " = …",
      solution: "Il y a " + neg + " facteur" + (neg > 1 ? "s" : "") + " négatif" +
        (neg > 1 ? "s" : "") + " : ce nombre est " + (neg % 2 === 0 ? "pair" : "impair") +
        ", donc le produit est " + (prod > 0 ? "positif" : "négatif") + ".\n" +
        fs_.map(v => Math.abs(v)).join(" × ") + " = " + Math.abs(prod) +
        "\nRésultat : " + S(prod),
    };
  },
  /* Produit avec un décimal, pour les niveaux moyen et difficile. */
  function (d) {
    if (d === "F") return null;
    const x = decAlea(d === "M" ? 45 : 125, 1);   // ex. −4,5
    const k = rel(d === "M" ? 8 : 12);
    const m = x.m * k;                             // mantisse exacte
    const p = dec(m, x.e);
    return {
      content: "Calcule : " + par(fmtDec(x)) + " × " + par(k) + " = …",
      solution: "Signes " + ((x.m > 0) === (k > 0) ? "identiques" : "contraires") +
        " : le produit est " + (m > 0 ? "positif" : "négatif") + ".\n" +
        fmtDec(dec(Math.abs(x.m), x.e)) + " × " + Math.abs(k) + " = " +
        fmtDec(dec(Math.abs(m), x.e)) + "\nRésultat : " + fmtDec(p),
    };
  },
];

/* ── Règle des signes en chaîne (produits ET quotients) ── */
const M_CHAINE = [
  function (d) {
    /* Chaîne de × et de ÷ mêlés. Pour qu'aucune division ne tombe sur une
       fraction, le diviseur est TIRÉ PARMI LES DIVISEURS du résultat courant :
       la chaîne reste entière du début à la fin. */
    const n = d === "F" ? 2 : d === "M" ? 3 : ri(4, 5);
    const depart = rel(d === "F" ? 6 : 9);
    const chaine = [];
    let val = depart;

    for (let i = 0; i < n; i++) {
      const veutDiviser = alea() < 0.45 && Math.abs(val) > 1;
      if (veutDiviser) {
        const divs = [];
        for (let k = 2; k <= Math.min(12, Math.abs(val)); k++) if (val % k === 0) divs.push(k);
        if (divs.length) {
          const v = pick(divs) * (alea() < 0.5 ? -1 : 1);
          chaine.push({ op: "÷", v }); val = val / v;
          continue;
        }
      }
      const v = rel(d === "F" ? 5 : 7);
      chaine.push({ op: "×", v }); val = val * v;
    }

    /* Rédaction et détail, recalculés de gauche à droite. */
    let expr = S(depart), courant = depart;
    const detail = [];
    chaine.forEach(t => {
      expr += " " + t.op + " " + par(t.v);
      const avant = courant;
      courant = t.op === "×" ? courant * t.v : courant / t.v;
      detail.push(S(avant) + " " + t.op + " " + par(t.v) + " = " + S(courant));
    });

    const nbNeg = (depart < 0 ? 1 : 0) + chaine.filter(t => t.v < 0).length;
    const nbDiv = chaine.filter(t => t.op === "÷").length;

    return {
      content: "Calcule en appliquant la règle des signes :\n" + expr + " = …",
      solution: "La règle des signes vaut pour les produits comme pour les quotients.\n" +
        "Facteurs négatifs : " + nbNeg + " (nombre " + (nbNeg % 2 === 0 ? "pair" : "impair") +
        "), donc le résultat est " + (courant > 0 ? "positif" : "négatif") + ".\n" +
        detail.join("\n") + "\nRésultat : " + S(courant),
      _div: nbDiv,
    };
  },
  /* Chaîne à trou : retrouver le facteur manquant (moyen et difficile). */
  function (d) {
    if (d === "F") return null;
    const a = rel(8), b = rel(7);
    const prod = a * b;
    const op = alea() < 0.5 ? "×" : "÷";
    if (op === "×") {
      return {
        content: "Complète : " + par(a) + " × … = " + S(prod),
        solution: "Le résultat est " + (prod > 0 ? "positif" : "négatif") + " et " + S(a) +
          " est " + (a > 0 ? "positif" : "négatif") + " : le facteur manquant est " +
          (b > 0 ? "positif" : "négatif") + ".\n" + Math.abs(prod) + " ÷ " + Math.abs(a) +
          " = " + Math.abs(b) + "\nFacteur manquant : " + S(b),
      };
    }
    return {
      content: "Complète : " + par(prod) + " ÷ … = " + S(a),
      solution: "Le quotient est " + (a > 0 ? "positif" : "négatif") + " et " + S(prod) +
        " est " + (prod > 0 ? "positif" : "négatif") + " : le diviseur est " +
        (b > 0 ? "positif" : "négatif") + ".\n" + Math.abs(prod) + " ÷ " + Math.abs(a) +
        " = " + Math.abs(b) + "\nDiviseur manquant : " + S(b),
    };
  },
];


/* ── Ranger des relatifs ── */
const M_RANGER = [
  function (d) {
    const n = d === "F" ? 4 : d === "M" ? 5 : ri(6, 7);
    const amp = d === "F" ? 12 : d === "M" ? 25 : 60;
    const vals = [];
    while (vals.length < n) { const v = rel(amp); if (!vals.includes(v)) vals.push(v); }
    const croissant = alea() < 0.5;
    const tri = [...vals].sort((a, b) => croissant ? a - b : b - a);
    return {
      content: "Range ces nombres dans l'ordre " + (croissant ? "croissant" : "décroissant") +
        " :\n" + vals.map(S).join(" ; "),
      solution: "Sur une droite graduée, un nombre est d'autant plus petit qu'il est à gauche.\n" +
        "Entre deux négatifs, le plus petit est celui dont la distance à zéro est la plus grande.\n" +
        tri.map(S).join(croissant ? " < " : " > "),
    };
  },
  function (d) {
    if (d === "F") return null;
    const e = d === "M" ? 1 : 2;
    const n = d === "M" ? 4 : 5;
    const vals = [];
    while (vals.length < n) { const v = decAlea(d === "M" ? 95 : 850, e);
      if (!vals.some(x => x.m === v.m)) vals.push(v); }
    const tri = [...vals].sort((a, b) => a.m - b.m);
    return {
      content: "Range ces nombres dans l'ordre croissant :\n" + vals.map(fmtDec).join(" ; "),
      solution: "On compare d'abord les signes : tout négatif est plus petit que tout positif.\n" +
        tri.map(fmtDec).join(" < "),
    };
  },
  function (d) {
    if (d !== "D") return null;
    const a = rel(20), b = rel(20);
    const vals = [a, -a, b, -b].filter((v, i, t) => t.indexOf(v) === i);
    const tri = [...vals].sort((x, y) => x - y);
    return {
      content: "Range dans l'ordre croissant les nombres suivants et leurs opposés :\n" +
        S(a) + " ; " + S(b) + " ; l'opposé de " + S(a) + " ; l'opposé de " + S(b),
      solution: "L'opposé de " + S(a) + " est " + S(-a) + " et celui de " + S(b) + " est " + S(-b) + ".\n" +
        tri.map(S).join(" < "),
    };
  },
];

/* ── L'opposé d'un nombre ── */
const M_OPPOSE = [
  function (d) {
    const v = d === "F" ? rel(40) : d === "M" ? rel(120) : rel(950);
    const tour = pick([
      "Donne l'opposé de " + S(v) + ".",
      "Quel est l'opposé de " + S(v) + " ?",
      "Écris l'opposé du nombre " + S(v) + ".",
      "Le nombre " + S(v) + " est l'opposé de quel nombre ?",
    ]);
    return {
      content: tour,
      solution: "Deux nombres opposés ont la même distance à zéro et des signes contraires.\n" +
        "L'opposé de " + S(v) + " est " + S(-v) + ".",
    };
  },
  function (d) {
    if (d === "F") return null;
    const x = decAlea(d === "M" ? 95 : 1250, d === "M" ? 1 : 2);
    return {
      content: "Donne l'opposé de " + fmtDec(x) + ", puis calcule la somme du nombre et de son opposé.",
      solution: "L'opposé de " + fmtDec(x) + " est " + fmtDec(dec(-x.m, x.e)) + ".\n" +
        "La somme d'un nombre et de son opposé vaut toujours 0.",
    };
  },
  function (d) {
    if (d !== "D") return null;
    const a = rel(12), b = rel(12);
    return {
      content: "Compare l'opposé de la somme et la somme des opposés :\n" +
        "a = " + S(a) + " et b = " + S(b) + ".\n" +
        "Calcule l'opposé de (a + b), puis (−a) + (−b). Que remarques-tu ?",
      solution: "a + b = " + S(a) + " + " + par(b) + " = " + S(a + b) +
        ", son opposé est " + S(-(a + b)) + ".\n" +
        "(−a) + (−b) = " + par(-a) + " + " + par(-b) + " = " + S(-a - b) + ".\n" +
        "Les deux résultats sont égaux : l'opposé d'une somme est la somme des opposés.",
    };
  },
];

/* ── Quotients de relatifs ── */
const M_QUOTIENTS = [
  function (d) {
    /* Le dividende est construit comme un multiple du diviseur : le quotient
       est entier par construction, jamais approché. */
    const q = rel(d === "F" ? 6 : d === "M" ? 9 : 12);
    const b = rel(d === "F" ? 5 : d === "M" ? 8 : 11);
    const a = q * b;
    return {
      content: "Calcule : " + par(a) + " ÷ " + par(b) + " = …",
      solution: "Signes " + ((a > 0) === (b > 0) ? "identiques" : "contraires") +
        " : le quotient est " + (q > 0 ? "positif" : "négatif") + ".\n" +
        Math.abs(a) + " ÷ " + Math.abs(b) + " = " + Math.abs(q) +
        "\nRésultat : " + S(q),
    };
  },
  function (d) {
    if (d === "F") return null;
    const q = rel(7), b = rel(6), a = q * b;
    const c = rel(d === "M" ? 8 : 14);
    return {
      content: "Calcule : " + par(a) + " ÷ " + par(b) + " × " + par(c) + " = …",
      solution: "On calcule de gauche à droite.\n" +
        par(a) + " ÷ " + par(b) + " = " + S(q) + "\n" +
        S(q) + " × " + par(c) + " = " + S(q * c) +
        "\nRésultat : " + S(q * c),
    };
  },
  function (d) {
    if (d !== "D") return null;
    const q = rel(9), b = rel(7), a = q * b;
    return {
      content: "Le quotient de deux nombres relatifs vaut " + S(q) + ". Le diviseur est " + S(b) +
        ".\nQuel est le dividende ?",
      solution: "Si a ÷ " + par(b) + " = " + S(q) + ", alors a = " + S(q) + " × " + par(b) + ".\n" +
        "Signes " + ((q > 0) === (b > 0) ? "identiques" : "contraires") + " : a est " +
        (a > 0 ? "positif" : "négatif") + ".\nDividende : " + S(a),
    };
  },
];

/* ── Problèmes en contexte ──
   Ces familles portent le nom d'une situation : on garde la situation et on
   fait varier les nombres, comme dans l'exercice d'origine. */
function pbContexte(titre, fabrique) { return fabrique; }

const M_TEMPERATURE = [
  function (d) {
    const t1 = ri(-24, -2), v = ri(3, d === "F" ? 8 : 18);
    if (d === "F") {
      return {
        content: "La température d'un congélateur est de " + S(t1) + " °C. On le règle et elle " +
          "augmente de " + v + " °C.\nQuelle est la nouvelle température ?",
        solution: S(t1) + " + " + v + " = " + S(t1 + v) + "\nLa température est de " + S(t1 + v) + " °C.",
      };
    }
    const t2 = ri(-30, -5);
    if (d === "M") {
      return {
        content: "Un congélateur est à " + S(t1) + " °C, un autre à " + S(t2) + " °C.\n" +
          "Lequel est le plus froid, et quel écart de température les sépare ?",
        solution: "Le plus froid est celui à " + S(Math.min(t1, t2)) + " °C.\n" +
          "Écart : |" + S(t1) + " − " + par(t2) + "| = " + Math.abs(t1 - t2) + " °C.",
      };
    }
    const etapes = [ri(-9, -3), ri(2, 7), ri(-6, -2)];
    let t = t1; const suite = [];
    etapes.forEach(e => { t += e; suite.push(t); });
    return {
      content: "Un congélateur est à " + S(t1) + " °C. Au cours de la journée, la température " +
        "baisse de " + Math.abs(etapes[0]) + " °C, puis monte de " + etapes[1] + " °C lors d'une " +
        "ouverture, puis baisse encore de " + Math.abs(etapes[2]) + " °C.\n" +
        "Quelle est la température finale ? De combien a-t-elle varié en tout ?",
      solution: S(t1) + " − " + Math.abs(etapes[0]) + " = " + S(suite[0]) + "\n" +
        S(suite[0]) + " + " + etapes[1] + " = " + S(suite[1]) + "\n" +
        S(suite[1]) + " − " + Math.abs(etapes[2]) + " = " + S(suite[2]) + "\n" +
        "Température finale : " + S(suite[2]) + " °C.\n" +
        "Variation totale : " + S(suite[2]) + " − " + par(t1) + " = " + S(suite[2] - t1) + " °C.",
    };
  },
];

const M_ASCENSEUR = [
  function (d) {
    const dep = ri(-9, -1), mont = ri(2, d === "F" ? 9 : 14);
    if (d === "F") {
      return {
        content: "Un ascenseur est au niveau " + S(dep) + " du parking. Il monte de " + mont +
          " étages.\nÀ quel niveau arrive-t-il ?",
        solution: S(dep) + " + " + mont + " = " + S(dep + mont) +
          "\nIl arrive au niveau " + S(dep + mont) + ".",
      };
    }
    if (d === "M") {
      const desc = ri(2, 9);
      return {
        content: "Un ascenseur part du niveau " + S(dep) + ", monte de " + mont +
          " étages, puis descend de " + desc + " étages.\nÀ quel niveau se trouve-t-il ? " +
          "Combien d'étages a-t-il parcourus en tout ?",
        solution: S(dep) + " + " + mont + " = " + S(dep + mont) + "\n" +
          S(dep + mont) + " − " + desc + " = " + S(dep + mont - desc) +
          "\nIl est au niveau " + S(dep + mont - desc) + ".\n" +
          "Étages parcourus : " + mont + " + " + desc + " = " + (mont + desc) + ".",
      };
    }
    const arr = ri(3, 18);
    return {
      content: "Un ascenseur relie le niveau " + S(dep) + " du parking au " + arr +
        "ᵉ étage. Il s'arrête à mi-parcours.\nÀ quel niveau s'arrête-t-il, sachant que " +
        "les étages sont régulièrement espacés ? Combien de niveaux séparent le départ de l'arrivée ?",
      solution: "Nombre de niveaux : " + arr + " − " + par(dep) + " = " + (arr - dep) + ".\n" +
        "La moitié vaut " + ((arr - dep) / 2 === Math.floor((arr - dep) / 2)
          ? (arr - dep) / 2 : ((arr - dep) / 2).toFixed(1).replace(".", ","))
        + ", donc l'arrêt se fait au niveau " + S(dep) + " + " + ((arr - dep) / 2) + " = " +
        (Number.isInteger((arr - dep) / 2) ? S(dep + (arr - dep) / 2)
          : String(dep + (arr - dep) / 2).replace(".", ",").replace("-", "−")) + ".",
    };
  },
];

const M_BANQUE = [
  function (d) {
    const solde = ri(-180, 120);
    if (d === "F") {
      const op = ri(20, 150) * (alea() < 0.5 ? 1 : -1);
      return {
        content: "Le compte en banque de Léa affiche " + S(solde) + " €. Elle " +
          (op > 0 ? "dépose " + op : "retire " + Math.abs(op)) + " €.\nQuel est le nouveau solde ?",
        solution: S(solde) + " " + (op > 0 ? "+ " + op : "− " + Math.abs(op)) + " = " + S(solde + op) +
          "\nLe solde est de " + S(solde + op) + " €.",
      };
    }
    const n = d === "M" ? 3 : 5;
    const ops = []; for (let i = 0; i < n; i++) ops.push(ri(15, 120) * (alea() < 0.5 ? 1 : -1));
    let t = solde; const suite = [];
    ops.forEach(o => { t += o; suite.push(t); });
    return {
      content: "Le compte de Léa affiche " + S(solde) + " €. Elle effectue les opérations " +
        "suivantes : " + ops.map(o => (o > 0 ? "+" : "−") + Math.abs(o) + " €").join(", ") + ".\n" +
        "Quel est le solde final ?" + (d === "D" ? " Le compte a-t-il été à découvert ?" : ""),
      solution: ops.map((o, i) =>
        S(i === 0 ? solde : suite[i - 1]) + " " + (o > 0 ? "+ " + o : "− " + Math.abs(o)) +
        " = " + S(suite[i])).join("\n") +
        "\nSolde final : " + S(suite[n - 1]) + " €." +
        (d === "D" ? "\nLe compte " + (suite.some(x => x < 0) || solde < 0
          ? "a été à découvert" : "n'a jamais été à découvert") + "." : ""),
    };
  },
];

const M_QUIZ = [
  function (d) {
    const bonnes = ri(4, 12), fausses = ri(2, 9);
    const pb = ri(2, 5), pf = -ri(1, 3);
    if (d === "F") {
      return {
        content: "Dans un quiz, chaque bonne réponse rapporte " + pb + " points et chaque mauvaise " +
          "réponse en fait perdre " + Math.abs(pf) + ".\nMax a " + bonnes + " bonnes réponses et " +
          fausses + " mauvaises. Quel est son score ?",
        solution: bonnes + " × " + pb + " = " + (bonnes * pb) + " points gagnés.\n" +
          fausses + " × " + par(pf) + " = " + S(fausses * pf) + " points perdus.\n" +
          (bonnes * pb) + " + " + par(fausses * pf) + " = " + S(bonnes * pb + fausses * pf) +
          "\nScore : " + S(bonnes * pb + fausses * pf) + " points.",
      };
    }
    if (d === "M") {
      const sansRep = ri(1, 5);
      return {
        content: "Dans un quiz de " + (bonnes + fausses + sansRep) + " questions, une bonne réponse " +
          "rapporte " + pb + " points, une mauvaise en fait perdre " + Math.abs(pf) +
          ", et une question sans réponse ne rapporte rien.\nMax a " + bonnes + " bonnes réponses et " +
          fausses + " mauvaises. Quel est son score ?",
        solution: bonnes + " × " + pb + " = " + (bonnes * pb) + "\n" +
          fausses + " × " + par(pf) + " = " + S(fausses * pf) + "\n" +
          sansRep + " × 0 = 0\n" +
          "Score : " + S(bonnes * pb + fausses * pf) + " points.",
      };
    }
    const score = ri(-12, 30);
    return {
      content: "Dans un quiz, une bonne réponse rapporte " + pb + " points et une mauvaise en fait " +
        "perdre " + Math.abs(pf) + ". Max a répondu à " + (bonnes + fausses) + " questions et " +
        "obtient " + S(bonnes * pb + fausses * pf) + " points.\nCombien a-t-il de bonnes réponses ?",
      solution: "Si toutes les réponses étaient bonnes : " + (bonnes + fausses) + " × " + pb +
        " = " + ((bonnes + fausses) * pb) + " points.\n" +
        "Chaque mauvaise réponse fait perdre " + pb + " + " + Math.abs(pf) + " = " +
        (pb - pf) + " points par rapport à ce maximum.\n" +
        "Écart : " + ((bonnes + fausses) * pb) + " − " + par(bonnes * pb + fausses * pf) + " = " +
        ((bonnes + fausses) * pb - (bonnes * pb + fausses * pf)) + "\n" +
        "Mauvaises réponses : " + ((bonnes + fausses) * pb - (bonnes * pb + fausses * pf)) +
        " ÷ " + (pb - pf) + " = " + fausses + "\n" +
        "Bonnes réponses : " + (bonnes + fausses) + " − " + fausses + " = " + bonnes + ".",
    };
  },
];

const M_DETTE = [
  function (d) {
    const dette = ri(2, 20) * ri(2, 9);       // dette divisible
    const parts = [2, 3, 4, 5, 6].filter(k => dette % k === 0);
    const n = parts.length ? pick(parts) : 2;
    const total = -dette;
    if (d === "F") {
      return {
        content: "Une dette de " + dette + " € est partagée équitablement entre " + n +
          " personnes.\nQuelle est la part de chacune ?",
        solution: "Une dette se note par un nombre négatif : " + S(total) + " €.\n" +
          S(total) + " ÷ " + n + " = " + S(total / n) +
          "\nChacune doit " + Math.abs(total / n) + " €.",
      };
    }
    if (d === "M") {
      const avoir = ri(20, 90);
      return {
        content: "Trois amis partagent équitablement une dette de " + dette + " €. " +
          "L'un d'eux possédait déjà " + avoir + " € sur son compte.\n" +
          "Quel est son solde après avoir payé sa part ?",
        solution: "Part de chacun : " + S(-dette) + " ÷ 3 = " +
          (dette % 3 === 0 ? S(-dette / 3) + " €" : "environ " + (-dette / 3).toFixed(2).replace(".", ",") + " €") +
          "\nSolde : " + avoir + " " + (dette % 3 === 0 ? "− " + (dette / 3) : "− " + (dette / 3).toFixed(2).replace(".", ",")) +
          " = " + (dette % 3 === 0 ? S(avoir - dette / 3) : String(avoir - dette / 3).replace(".", ",").replace("-", "−")) + " €.",
      };
    }
    const solde = ri(-60, 40);
    return {
      content: "Le compte de Léa affiche " + S(solde) + " €. Elle partage équitablement avec " +
        (n - 1) + " ami" + (n > 2 ? "s" : "") + " une dette de " + dette + " €.\n" +
        "Quel sera son solde une fois sa part payée ? Sera-t-elle à découvert ?",
      solution: "Part de chacun : " + S(total) + " ÷ " + n + " = " + S(total / n) + " €.\n" +
        "Nouveau solde : " + S(solde) + " + " + par(total / n) + " = " + S(solde + total / n) + " €.\n" +
        "Elle " + (solde + total / n < 0 ? "sera" : "ne sera pas") + " à découvert.",
    };
  },
];

/* ═══════════════ TABLE DES FAMILLES ═══════════════ */
const FAMILLES = {
  "Suite d'additions et de soustractions": M_SUITE,
  "Simplifier une opération":              M_SIMPLIFIER,
  "Distance entre deux points":            M_DISTANCE,
  "Priorité des relatifs":                 M_PRIORITE,
  "Produits de relatifs":                  M_PRODUITS,
  "Règle des signes en chaîne":            M_CHAINE,
  "Ranger des relatifs":                   M_RANGER,
  "L'opposé d'un nombre":                  M_OPPOSE,
  "Quotients de relatifs":                 M_QUOTIENTS,
  "La température du congélateur":         M_TEMPERATURE,
  "L'ascenseur du parking":                M_ASCENSEUR,
  "Le compte en banque":                   M_BANQUE,
  "Les points du quiz":                    M_QUIZ,
  "La dette partagée":                     M_DETTE,
};

/* Correspondance souple des libellés : casse, accents, ponctuation, pluriels. */
const cle = t => String(t || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
  .split(" ").map(m => m.replace(/s$/, "")).join(" ");

const ALIAS = {};
Object.keys(FAMILLES).forEach(f => { ALIAS[cle(f)] = f; });
/* Anciens libellés fusionnés : ils doivent pointer vers le nom retenu. */
[["Calculer astucieusement", "Suite d'additions et de soustractions"],
 ["Somme de relatifs", "Suite d'additions et de soustractions"],
 ["Suite d'opérations", "Suite d'additions et de soustractions"],
 ["Simplifier une soustraction", "Simplifier une opération"],
 ["Transformer une soustraction", "Simplifier une opération"],
 ["Distance entre deux points signes contraires", "Distance entre deux points"],
 ["Distance entre deux points même signe", "Distance entre deux points"],
 ["Quotient puis somme", "Priorité des relatifs"],
 ["Produits de deux négatifs", "Produits de relatifs"],
 ["Produits de signes contraires", "Produits de relatifs"],
 ["Règle des signes", "Règle des signes en chaîne"],
 /* Libellés réellement présents en base : l'article initial suffisait à faire
    échouer la correspondance, la famille restait alors sans générateur. */
 ["La règle des signes en chaîne", "Règle des signes en chaîne"],
 ["Priorités avec des relatifs", "Priorité des relatifs"],
 ["Priorité avec des relatifs", "Priorité des relatifs"],
 ["Quotient de relatifs", "Quotients de relatifs"],
 ["L'opposé d'un nombre", "L'opposé d'un nombre"],
 ["Opposé d'un nombre", "L'opposé d'un nombre"],
 ["Ranger les relatifs", "Ranger des relatifs"],
 ["Comparer et ranger des relatifs", "Ranger des relatifs"],
].forEach(([a, c]) => { ALIAS[cle(a)] = c; });

/* ═══════════════ GÉNÉRATION ═══════════════ */
function besoinsDepuis(dej) {
  const vise = { F: Math.round(CIBLE * REPARTITION.F),
                 M: Math.round(CIBLE * REPARTITION.M),
                 D: CIBLE - Math.round(CIBLE * REPARTITION.F) - Math.round(CIBLE * REPARTITION.M) };
  return { F: Math.max(0, vise.F - dej.F), M: Math.max(0, vise.M - dej.M), D: Math.max(0, vise.D - dej.D) };
}

function genererFamille(nom, besoins, vus) {
  const modeles = FAMILLES[nom];
  const sortie = [];
  for (const d of ["F", "M", "D"]) {
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < reste * 200 + 2000) {
      essais++;
      const m = pick(modeles);
      const e = m(d);
      if (!e) continue;                        // modèle non prévu pour cette difficulté
      const k = cle(e.content);
      if (vus.has(k)) continue;                // déduplication
      vus.add(k);
      sortie.push({ d, content: e.content, solution: e.solution, interactif: e.interactif || null });
      reste--;
    }
    if (reste > 0) console.warn(`  ⚠ ${nom} / ${LIBELLE[d]} : ${reste} énoncé(s) non produit(s) ` +
      `(les modèles ne peuvent pas offrir plus de variantes distinctes).`);
  }
  return sortie;
}

/* ═══════════════ APERÇU HORS BASE ═══════════════ */
if (APERCU) {
  const filtre = ARGS[ARGS.indexOf("--apercu") + 1];
  const cherche = filtre && !filtre.startsWith("--") ? cle(filtre) : null;
  console.log("=== APERÇU (aucune base contactée) ===\n");
  const lignes = [];
  for (const nom of Object.keys(FAMILLES)) {
    if (cherche && !cle(nom).includes(cherche)) continue;
    alea = mulberry32(GRAINE + nom.length * 7919);
    const ex = genererFamille(nom, besoinsDepuis({ F: 0, M: 0, D: 0 }), new Set());
    const n = { F: 0, M: 0, D: 0 }; ex.forEach(e => n[e.d]++);
    lignes.push({ famille: nom, total: ex.length, Facile: n.F, Moyen: n.M, Difficile: n.D,
                  interactifs: ex.filter(e => e.interactif).length, modeles: FAMILLES[nom].length });
    if (cherche) {
      for (const d of ["F", "M", "D"]) {
        const e = ex.find(x => x.d === d);
        if (!e) continue;
        console.log("── " + nom + " · " + LIBELLE[d] + " ──");
        console.log(e.content);
        console.log("   → " + e.solution.replace(/\n/g, "\n     "));
        if (e.interactif) console.log("   [axe interactif : " +
          e.interactif.placer.join(", ") + " sur [" + e.interactif.min + " ; " + e.interactif.max + "]]");
        console.log("");
      }
    }
  }
  console.table(lignes);
  process.exit(0);
}

/* ═══════════════ BASE ═══════════════ */
const { Pool } = require("pg");
if (!process.env.DATABASE_URL) {
  console.error("✗ DATABASE_URL manquant (ou lancez avec --apercu).");
  process.exit(1);
}
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, solution, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%relatif%' ORDER BY id`);
  const rows = brut;
  if (!rows.length) { console.log("Chapitre « Nombres relatifs » introuvable."); await pool.end(); return; }

  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(rows, "chapitre", "Nombres relatifs");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s) en base.\n`);

  const parFam = new Map();
  rows.forEach(r => { if (!r.famille) return; const k = cle(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

  const vusGlobal = new Set(rows.map(r => cle(r.content)));
  const aInserer = [], rapport = [], inconnues = [];

  for (const [k, g] of parFam) {
    const canon = ALIAS[k];
    if (!canon) { inconnues.push(g.nom); continue; }
    const dej = { F: 0, M: 0, D: 0 };
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M"
      : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919);
    const neufs = genererFamille(canon, besoinsDepuis(dej), vusGlobal);
    const modele = { level: maj(g.items, "level", "college"), subject: maj(g.items, "subject", "Arithmétique"),
                     classe: maj(g.items, "classe", "5ème"), type: maj(g.items, "type", "exercice") };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content, solution: e.solution,
      difficulty: LIBELLE[e.d], level: modele.level, subject: modele.subject, classe: modele.classe,
      chapitre: CHAPITRE, type: modele.type, famille: g.nom,
      interactif: e.interactif ? JSON.stringify(e.interactif) : null }); });
    rapport.push({ famille: g.nom, avant: g.items.length, ajoutes: neufs.length,
                   apres: g.items.length + neufs.length,
                   interactifs: neufs.filter(x => x.interactif).length });
  }

  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`relatifs-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : relatifs-avant-generation-${stamp}.json`);

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
