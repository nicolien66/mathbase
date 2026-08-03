/* MathBase — generer-volumes.js
   Chapitre « Volumes » (ex-« Géométrie dans l'espace ») :
   renomme le chapitre côté base, puis crée une famille par solide du collège.

   ── LES SEPT FAMILLES ────────────────────────────────────────────────────
     Volume d'un cube            a³                       6ᵉ
     Volume d'un pavé droit      L × l × h                6ᵉ
     Volume d'un prisme droit    aire de base × h         5ᵉ
     Volume d'un cylindre        π r² h                   5ᵉ
     Volume d'une pyramide       (aire de base × h) ÷ 3   4ᵉ
     Volume d'un cône            (π r² h) ÷ 3             4ᵉ
     Volume d'une boule          (4/3) π r³               3ᵉ
   Cent exercices par famille, en 20 faciles / 30 moyens / 50 difficiles.

   ── ARITHMÉTIQUE ─────────────────────────────────────────────────────────
   Tout est calculé en décimaux exacts (entier + nombre de décimales) : en
   flottant, 0,1 × 0,2 donne 0,020000000000000004, ce qui finirait dans un
   corrigé. Les volumes faisant intervenir π sont donnés sous forme EXACTE
   (« 45π cm³ ») puis arrondis, jamais avec un signe = sur une valeur approchée.

   ⚠ Deux chapitres voisins traitent déjà ces solides : « Prisme droit et
   cylindre » et « Pyramides et cônes ». Le rapport de simulation le rappelle ;
   c'est à vous de décider si vous les conservez.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node generer-volumes.js --apercu
     node generer-volumes.js
     node generer-volumes.js --execute
   Options : --cible N (100) · --graine N (20260811) · --nom "Volumes"
             --garder-familles   ne supprime pas les familles existantes
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU = ARGS.includes("--apercu");
const GARDER = ARGS.includes("--garder-familles");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const txtOpt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] && !ARGS[i + 1].startsWith("--") ? ARGS[i + 1] : d; };
const CIBLE = opt("--cible", 100);
const GRAINE = opt("--graine", 20260811);
const NOUVEAU = txtOpt("--nom", "Volumes");
const ANCIEN_MOTIF = "espace";

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];

/* ═══ DÉCIMAUX EXACTS ═══ */
const grp = s => s.length >= 5 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : s;
function fmt(m, e) {
  let s = String(Math.abs(m)).padStart(e + 1, "0");
  let ip = s.slice(0, s.length - e), dp = e ? s.slice(s.length - e) : "";
  dp = dp.replace(/0+$/, "");
  return (m < 0 ? "\u2212" : "") + grp(ip) + (dp ? "," + dp : "");
}
const D = (m, e = 0) => ({ m, e });
const resc = (x, e) => ({ m: x.m * Math.pow(10, e - x.e), e });
const add = (a, b) => { const e = Math.max(a.e, b.e); return { m: resc(a, e).m + resc(b, e).m, e }; };
const sub = (a, b) => { const e = Math.max(a.e, b.e); return { m: resc(a, e).m - resc(b, e).m, e }; };
const mul = (a, b) => ({ m: a.m * b.m, e: a.e + b.e });
const S = x => fmt(x.m, x.e);
const num = x => x.m / Math.pow(10, x.e);
const div3 = x => { /* division exacte par 3, quand elle tombe juste */
  if (x.m % 3 === 0) return { m: x.m / 3, e: x.e };
  return { m: x.m * 10 / 3, e: x.e + 1 };
};
const estDiv3 = x => x.m % 3 === 0 || (x.m * 10) % 3 === 0;
const arr2 = v => (Math.round(v * 100) / 100).toFixed(2).replace(".", ",");

/* longueurs « jolies » : entières, ou un chiffre après la virgule */
const L = (a, b) => pick([D(ri(a, b)), D(ri(a * 10, b * 10), 1)]);
const Lent = (a, b) => D(ri(a, b));
const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];
const UNI = ["cm", "dm", "m"];
const cube = u => u + "³";

/* ═══ FABRIQUE COMMUNE ═══
   Chaque solide fournit : sa formule, un tirage de dimensions, le calcul du
   volume et le détail du calcul. Les douze modèles sont ensuite les mêmes
   pour tous — c'est ce qui garantit une progression homogène d'une famille
   à l'autre, et ce qui rend le tout maintenable. */
function banque(solide) {
  const { nom, art, artUn, formule, tire, vol, detail, dims, pi, cle } = solide;
  const M = [];
  const u = () => pick(UNI);

  /* — trois modèles faciles : application directe — */
  M.push({ d: "F", g() { const p = tire("petite"), U = u(), v = vol(p);
    return { q: `Calcule le volume ${artUn} ${nom} ${dims(p, U)}.`,
             s: `${formule}\n${detail(p, U, v)}` }; } });
  M.push({ d: "F", g() { const p = tire("petite"), U = u(), v = vol(p);
    return { q: `${dims(p, U, true)} Quel est son volume ?`,
             s: `${formule}\n${detail(p, U, v)}` }; } });
  M.push({ d: "F", g() { const p = tire("petite"), U = u(), v = vol(p);
    return { q: `Quelle formule donne le volume ${artUn} ${nom} ? Applique-la ${dims(p, U)}.`,
             s: `${formule}\n${detail(p, U, v)}` }; } });

  /* — trois moyens : décimaux, unités, retour en arrière — */
  M.push({ d: "M", g() { const p = tire("moyenne"), U = u(), v = vol(p);
    return { q: `Calcule le volume ${artUn} ${nom} ${dims(p, U)}.`,
             s: `${formule}\n${detail(p, U, v)}` }; } });
  M.push({ d: "M", g() { const p = tire("moyenne"), v = vol(p);
    if (pi) return null;
    return { q: `Calcule le volume ${artUn} ${nom} ${dims(p, "dm")}, puis exprime-le en litres.`,
             s: `${formule}\n${detail(p, "dm", v)}\n1 dm³ = 1 L, donc le volume vaut ${S(v)} L.` }; } });
  M.push({ d: "M", g() { const p = tire("moyenne"), U = u(), v = vol(p);
    return { q: `Un solide a la forme ${artUn} ${nom} ${dims(p, U)}. Calcule son volume, puis dis s'il dépasse ${S(D(Math.ceil(num(v) / 10) * 10))} ${cube(U)}.`,
             s: `${formule}\n${detail(p, U, v)}\n${num(v) > Math.ceil(num(v) / 10) * 10 ? "Oui" : "Non"}, ${S(v)} ${pi ? "" : cube(U) + " "}${num(v) > Math.ceil(num(v) / 10) * 10 ? "dépasse" : "ne dépasse pas"} ${S(D(Math.ceil(num(v) / 10) * 10))} ${cube(U)}.` }; } });

  /* — six difficiles — */
  M.push({ d: "D", g() { const p = tire("grande"), U = u(), v = vol(p);
    return { q: `Calcule le volume ${artUn} ${nom} ${dims(p, U)}. Donne le résultat ${pi ? "sous forme exacte, puis arrondi au centième" : "en " + cube(U)}.`,
             s: `${formule}\n${detail(p, U, v)}` }; } });
  M.push({ d: "D", g() { const p = tire("moyenne"), U = u(), v = vol(p), k = ri(2, 3);
    const p2 = solide.echelle(p, k), v2 = vol(p2);
    return { q: `Un ${nom} ${dims(p, U)} voit toutes ses dimensions multipliées par ${k}. Que devient son volume ?`,
             s: `Avant : ${detail(p, U, v)}\nAprès : ${detail(p2, U, v2)}\nLe volume est multiplié par ${k} × ${k} × ${k} = ${k * k * k} : trois dimensions sont concernées, pas une seule.` }; } });
  M.push({ d: "D", g() { const p = tire("moyenne"), U = u(), v = vol(p), n = ri(2, 6);
    return { q: `On remplit une caisse avec ${n} solides identiques ayant la forme ${artUn} ${nom} ${dims(p, U)}. Quel volume occupent-ils ?`,
             s: `Volume d'un solide : ${detail(p, U, v)}\nPour ${n} solides : ${pi ? `${n} × ${S(v)}π = ${S(mul(D(n), v))}π ${cube(U)} ≈ ${arr2(num(mul(D(n), v)) * Math.PI)} ${cube(U)}` : `${n} × ${S(v)} = ${S(mul(D(n), v))} ${cube(U)}`}.` }; } });
  M.push({ d: "D", g() { const p = tire("moyenne"), U = u(), v = vol(p);
    const el = pick(PRENOMS), faux = solide.faux(p);
    if (!faux) return null;
    return { q: `Pour le volume ${artUn} ${nom} ${dims(p, U)}, ${el} annonce ${faux.valeur} ${cube(U)}. Explique son erreur.`,
             s: `${faux.explication}\n${formule}\n${detail(p, U, v)}` }; } });
  M.push({ d: "D", g() { const p = tire("moyenne"), v = vol(p);
    if (pi) return null;
    const prix = ri(3, 25);
    return { q: `Un réservoir a la forme ${artUn} ${nom} ${dims(p, "dm")}. On le remplit d'un liquide vendu ${prix} € le litre. Quel est le prix du remplissage ?`,
             s: `${formule}\n${detail(p, "dm", v)}\n1 dm³ = 1 L, soit ${S(v)} L.\nPrix : ${S(v)} × ${prix} = ${S(mul(v, D(prix)))} €.` }; } });
  M.push({ d: "D", g() { const p = tire("moyenne"), U = u(), v = vol(p);
    return { q: `Le volume ${artUn} ${nom} vaut ${pi ? S(v) + "π" : S(v)} ${cube(U)}. ${solide.question(p, U)}`,
             s: `${formule}\n${solide.reponseInverse(p, U, v)}` }; } });

  return M.filter(Boolean);
}

/* ═══ LES SEPT SOLIDES ═══ */
const SOLIDES = [];

/* — cube — */
SOLIDES.push({
  famille: "Volume d'un cube", classe: "6ème",
  nom: "cube", art: "le", artUn: "d'un", pi: false,
  formule: "Volume d'un cube : V = a × a × a = a³, où a est la longueur de l'arête.",
  tire: t => ({ a: t === "petite" ? Lent(2, 9) : t === "moyenne" ? L(2, 12) : L(3, 20) }),
  vol: p => mul(mul(p.a, p.a), p.a),
  dims: (p, U, phrase) => phrase ? `Un cube a une arête de ${S(p.a)} ${U}.` : `d'arête ${S(p.a)} ${U}`,
  detail: (p, U, v) => `V = ${S(p.a)} × ${S(p.a)} × ${S(p.a)} = ${S(v)} ${cube(U)}.`,
  echelle: (p, k) => ({ a: mul(p.a, D(k)) }),
  faux: p => ({ valeur: S(mul(mul(p.a, p.a), D(6))), explication: "Ce nombre est l'AIRE totale des 6 faces, pas le volume. L'aire se mesure en unités carrées, le volume en unités cubes." }),
  question: () => "Quelle est la longueur de son arête ?",
  reponseInverse: (p, U, v) => `On cherche le nombre dont le cube vaut ${S(v)} : c'est ${S(p.a)}, car ${S(p.a)} × ${S(p.a)} × ${S(p.a)} = ${S(v)}.\nL'arête mesure ${S(p.a)} ${U}.`
});

/* — pavé droit — */
SOLIDES.push({
  famille: "Volume d'un pavé droit", classe: "6ème",
  nom: "pavé droit", art: "le", artUn: "d'un", pi: false,
  formule: "Volume d'un pavé droit : V = L × l × h (longueur × largeur × hauteur).",
  tire: t => t === "petite" ? { L: Lent(3, 9), l: Lent(2, 6), h: Lent(2, 5) }
    : t === "moyenne" ? { L: L(3, 12), l: L(2, 8), h: L(2, 6) }
    : { L: L(4, 20), l: L(3, 12), h: L(2, 10) },
  vol: p => mul(mul(p.L, p.l), p.h),
  dims: (p, U, phrase) => phrase
    ? `Un pavé droit mesure ${S(p.L)} ${U} de longueur, ${S(p.l)} ${U} de largeur et ${S(p.h)} ${U} de hauteur.`
    : `de dimensions ${S(p.L)} ${U} × ${S(p.l)} ${U} × ${S(p.h)} ${U}`,
  detail: (p, U, v) => `V = ${S(p.L)} × ${S(p.l)} × ${S(p.h)} = ${S(mul(p.L, p.l))} × ${S(p.h)} = ${S(v)} ${cube(U)}.`,
  echelle: (p, k) => ({ L: mul(p.L, D(k)), l: mul(p.l, D(k)), h: mul(p.h, D(k)) }),
  faux: p => ({ valeur: S(add(add(p.L, p.l), p.h)), explication: "Ce nombre est la somme des trois dimensions. Un volume s'obtient en les MULTIPLIANT, pas en les additionnant." }),
  question: (p, U) => `Sa longueur mesure ${S(p.L)} ${U} et sa largeur ${S(p.l)} ${U}. Quelle est sa hauteur ?`,
  reponseInverse: (p, U, v) => `Aire de la base : ${S(p.L)} × ${S(p.l)} = ${S(mul(p.L, p.l))} ${U}².\nHauteur : ${S(v)} ÷ ${S(mul(p.L, p.l))} = ${S(p.h)} ${U}.`
});

/* — prisme droit — base triangulaire rectangle, pour une aire exacte — */
SOLIDES.push({
  famille: "Volume d'un prisme droit", classe: "5ème",
  nom: "prisme droit", art: "le", artUn: "d'un", pi: false,
  formule: "Volume d'un prisme droit : V = aire de la base × hauteur.",
  tire: t => { const g = t === "grande";
    const b = t === "petite" ? Lent(2, 8) : L(2, g ? 14 : 10);
    const hb = t === "petite" ? D(ri(2, 8) * 2) : D(ri(2, g ? 12 : 8) * 2);   // pair : l'aire tombe juste
    return { b, hb, h: t === "petite" ? Lent(2, 9) : L(2, g ? 15 : 10) }; },
  vol: p => mul(mul(mul(p.b, p.hb), D(5, 1)), p.h),
  dims: (p, U, phrase) => phrase
    ? `Un prisme droit a pour base un triangle rectangle dont les côtés de l'angle droit mesurent ${S(p.b)} ${U} et ${S(p.hb)} ${U}. Sa hauteur est de ${S(p.h)} ${U}.`
    : `de base un triangle rectangle de côtés ${S(p.b)} ${U} et ${S(p.hb)} ${U}, et de hauteur ${S(p.h)} ${U}`,
  detail: (p, U, v) => `Aire de la base : (${S(p.b)} × ${S(p.hb)}) ÷ 2 = ${S(mul(mul(p.b, p.hb), D(5, 1)))} ${U}².\nV = ${S(mul(mul(p.b, p.hb), D(5, 1)))} × ${S(p.h)} = ${S(v)} ${cube(U)}.`,
  echelle: (p, k) => ({ b: mul(p.b, D(k)), hb: mul(p.hb, D(k)), h: mul(p.h, D(k)) }),
  faux: p => ({ valeur: S(mul(mul(p.b, p.hb), p.h)), explication: "L'aire de la base est celle d'un TRIANGLE : il fallait diviser par 2. Ce nombre correspondrait à un pavé droit." }),
  question: (p, U) => `L'aire de sa base vaut ${S(mul(mul(p.b, p.hb), D(5, 1)))} ${U}². Quelle est sa hauteur ?`,
  reponseInverse: (p, U, v) => `Hauteur : ${S(v)} ÷ ${S(mul(mul(p.b, p.hb), D(5, 1)))} = ${S(p.h)} ${U}.`
});

/* — cylindre — */
SOLIDES.push({
  famille: "Volume d'un cylindre", classe: "5ème",
  nom: "cylindre", art: "le", artUn: "d'un", pi: true,
  formule: "Volume d'un cylindre : V = π × r² × h, où r est le rayon de la base.",
  tire: t => ({ r: t === "petite" ? Lent(2, 6) : Lent(2, t === "grande" ? 12 : 9),
                h: t === "petite" ? Lent(3, 10) : Lent(3, t === "grande" ? 20 : 14) }),
  vol: p => mul(mul(p.r, p.r), p.h),
  dims: (p, U, phrase) => phrase
    ? `Un cylindre a un rayon de ${S(p.r)} ${U} et une hauteur de ${S(p.h)} ${U}.`
    : `de rayon ${S(p.r)} ${U} et de hauteur ${S(p.h)} ${U}`,
  detail: (p, U, v) => `V = π × ${S(p.r)}² × ${S(p.h)} = π × ${S(mul(p.r, p.r))} × ${S(p.h)} = ${S(v)}π ${cube(U)} ≈ ${arr2(num(v) * Math.PI)} ${cube(U)}.`,
  echelle: (p, k) => ({ r: mul(p.r, D(k)), h: mul(p.h, D(k)) }),
  faux: p => ({ valeur: S(mul(mul(D(2), p.r), p.h)) + "π", explication: "Ce calcul utilise le PÉRIMÈTRE de la base (2πr) au lieu de son AIRE (πr²)." }),
  question: (p, U) => `Son rayon mesure ${S(p.r)} ${U}. Quelle est sa hauteur ?`,
  reponseInverse: (p, U, v) => `Aire de la base : π × ${S(p.r)}² = ${S(mul(p.r, p.r))}π ${U}².\nHauteur : ${S(v)}π ÷ ${S(mul(p.r, p.r))}π = ${S(p.h)} ${U}.`
});

/* — pyramide — base carrée — */
SOLIDES.push({
  famille: "Volume d'une pyramide", classe: "4ème",
  nom: "pyramide", art: "la", artUn: "d'une", pi: false,
  formule: "Volume d'une pyramide : V = (aire de la base × hauteur) ÷ 3.",
  tire: t => { const c = t === "petite" ? Lent(2, 8) : Lent(2, t === "grande" ? 14 : 10);
    return { c, h: D(ri(1, t === "grande" ? 8 : 5) * 3) }; },   // hauteur multiple de 3 : division exacte
  vol: p => mul(mul(p.c, p.c), D(p.h.m / 3, p.h.e)),
  dims: (p, U, phrase) => phrase
    ? `Une pyramide a une base carrée de ${S(p.c)} ${U} de côté et une hauteur de ${S(p.h)} ${U}.`
    : `de base carrée de côté ${S(p.c)} ${U} et de hauteur ${S(p.h)} ${U}`,
  detail: (p, U, v) => `Aire de la base : ${S(p.c)} × ${S(p.c)} = ${S(mul(p.c, p.c))} ${U}².\nV = (${S(mul(p.c, p.c))} × ${S(p.h)}) ÷ 3 = ${S(mul(mul(p.c, p.c), p.h))} ÷ 3 = ${S(v)} ${cube(U)}.`,
  echelle: (p, k) => ({ c: mul(p.c, D(k)), h: mul(p.h, D(k)) }),
  faux: p => ({ valeur: S(mul(mul(p.c, p.c), p.h)), explication: "Il manque la division par 3. Ce nombre est le volume du PAVÉ de même base et de même hauteur : la pyramide en occupe le tiers." }),
  question: (p, U) => `Le côté de sa base mesure ${S(p.c)} ${U}. Quelle est sa hauteur ?`,
  reponseInverse: (p, U, v) => `Aire de la base : ${S(mul(p.c, p.c))} ${U}².\nOn remonte : hauteur = (3 × ${S(v)}) ÷ ${S(mul(p.c, p.c))} = ${S(p.h)} ${U}.`
});

/* — cône — */
SOLIDES.push({
  famille: "Volume d'un cône", classe: "4ème",
  nom: "cône", art: "le", artUn: "d'un", pi: true,
  formule: "Volume d'un cône : V = (π × r² × h) ÷ 3.",
  tire: t => ({ r: t === "petite" ? Lent(2, 6) : Lent(2, t === "grande" ? 12 : 9),
                h: D(ri(1, t === "grande" ? 7 : 5) * 3) }),
  vol: p => mul(mul(p.r, p.r), D(p.h.m / 3, p.h.e)),
  dims: (p, U, phrase) => phrase
    ? `Un cône a un rayon de base de ${S(p.r)} ${U} et une hauteur de ${S(p.h)} ${U}.`
    : `de rayon ${S(p.r)} ${U} et de hauteur ${S(p.h)} ${U}`,
  detail: (p, U, v) => `Aire de la base : π × ${S(p.r)}² = ${S(mul(p.r, p.r))}π ${U}².\nV = (${S(mul(p.r, p.r))}π × ${S(p.h)}) ÷ 3 = ${S(v)}π ${cube(U)} ≈ ${arr2(num(v) * Math.PI)} ${cube(U)}.`,
  echelle: (p, k) => ({ r: mul(p.r, D(k)), h: mul(p.h, D(k)) }),
  faux: p => ({ valeur: S(mul(mul(p.r, p.r), p.h)) + "π", explication: "Il manque la division par 3. Ce nombre est le volume du CYLINDRE de même base et de même hauteur : le cône en occupe le tiers." }),
  question: (p, U) => `Son rayon mesure ${S(p.r)} ${U}. Quelle est sa hauteur ?`,
  reponseInverse: (p, U, v) => `Aire de la base : ${S(mul(p.r, p.r))}π ${U}².\nHauteur = (3 × ${S(v)}π) ÷ ${S(mul(p.r, p.r))}π = ${S(p.h)} ${U}.`
});

/* — boule — */
SOLIDES.push({
  famille: "Volume d'une boule", classe: "3ème",
  nom: "boule", art: "la", artUn: "d'une", pi: true,
  formule: "Volume d'une boule : V = (4/3) × π × r³, où r est le rayon.",
  tire: t => { const rMax = t === "petite" ? 5 : t === "grande" ? 14 : 9;
    /* rayon multiple de 3 : la division par 3 de la formule tombe juste */
    return { r: D(ri(1, rMax) * 3), parDiam: alea() > 0.5 }; },
  vol: p => mul(mul(mul(p.r, p.r), D(p.r.m / 3, p.r.e)), D(4)),
  dims: (p, U, phrase) => p.parDiam
    ? (phrase ? `Une boule a un diamètre de ${S(mul(p.r, D(2)))} ${U}.`
              : `de diamètre ${S(mul(p.r, D(2)))} ${U}`)
    : (phrase ? `Une boule a un rayon de ${S(p.r)} ${U}.`
              : `de rayon ${S(p.r)} ${U}`),
  detail: (p, U, v) => (p.parDiam ? `Rayon : ${S(mul(p.r, D(2)))} ÷ 2 = ${S(p.r)} ${U}.\n` : "")
    + `${S(p.r)}³ = ${S(mul(mul(p.r, p.r), p.r))}.\nV = (4 ÷ 3) × π × ${S(mul(mul(p.r, p.r), p.r))} = ${S(v)}π ${cube(U)} ≈ ${arr2(num(v) * Math.PI)} ${cube(U)}.`,
  echelle: (p, k) => ({ r: mul(p.r, D(k)), parDiam: p.parDiam }),
  faux: p => ({ valeur: S(mul(mul(mul(p.r, p.r), p.r), D(4))) + "π", explication: "Le facteur est 4/3, pas 4 : il fallait aussi diviser par 3." }),
  question: (p, U) => "Quel est son rayon ?",
  reponseInverse: (p, U, v) => `On remonte : r³ = (3 × ${S(v)}) ÷ 4 = ${S(mul(mul(p.r, p.r), p.r))}, donc r = ${S(p.r)} ${U}.`
});

/* ═══ MOTEUR ═══ */
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };
const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

function genererFamille(solide, n) {
  const modeles = banque(solide), vus = new Set(), out = [];
  const quota = { F: Math.round(n * REPART.F), M: Math.round(n * REPART.M) };
  quota.D = n - quota.F - quota.M;
  for (const d of ["F", "M", "D"]) {
    const dispo = modeles.filter(m => m.d === d);
    if (!dispo.length) continue;
    let reste = quota[d], essais = 0;
    while (reste > 0 && essais < quota[d] * 400 + 8000) {
      essais++;
      let r; try { r = pick(dispo).g(); } catch (e) { continue; }
      if (!r || !r.q || !r.s) continue;
      const k = cle(r.q);
      if (vus.has(k)) continue;
      vus.add(k);
      out.push({ difficulty: LIBELLE[d], content: r.q, solution: r.s });
      reste--;
    }
    if (reste > 0) console.warn(`  ⚠ ${solide.famille} / ${LIBELLE[d]} : ${reste} manquant(s).`);
  }
  return out;
}
function toutGenerer() {
  alea = mulberry32(GRAINE);
  return SOLIDES.map(s => ({ solide: s, exos: genererFamille(s, CIBLE) }));
}

/* ═══ APERÇU ═══ */
if (APERCU) {
  const lots = toutGenerer();
  console.log(`Chapitre « ${NOUVEAU} » — ${lots.length} familles\n`);
  console.table(lots.map(({ solide, exos }) => {
    const d = {}; exos.forEach(e => d[e.difficulty] = (d[e.difficulty] || 0) + 1);
    return { famille: solide.famille, classe: solide.classe, total: exos.length,
             Facile: d.Facile || 0, Moyen: d.Moyen || 0, Difficile: d.Difficile || 0 };
  }));
  console.log(`TOTAL : ${lots.reduce((s, l) => s + l.exos.length, 0)} exercices.\n`);
  lots.forEach(({ solide, exos }) => {
    console.log(`══ ${solide.famille} ══`);
    const e = exos.find(x => x.difficulty === "Difficile") || exos[0];
    console.log(`[${e.difficulty}] ${e.content}`);
    console.log(`  → ${e.solution.replace(/\n/g, "\n    ")}\n`);
  });
  process.exit(0);
}

/* ═══ BASE ═══ */
(async () => {
  const { Pool } = require("pg");
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE $1 OR chapitre = $2 ORDER BY id`,
    [`%${ANCIEN_MOTIF}%`, NOUVEAU]);
  const anciens = brut.filter(r => cle(r.chapitre).includes("espace"));
  const deja = brut.filter(r => r.chapitre === NOUVEAU);
  console.log(`Chapitre « Géométrie dans l'espace » : ${anciens.length} exercice(s).`);
  console.log(`Chapitre « ${NOUVEAU} » : ${deja.length} exercice(s) déjà présent(s).\n`);

  const g = new Map();
  [...anciens, ...deja].forEach(r => { const k = r.famille || "(sans famille)";
    g.set(k, (g.get(k) || 0) + 1); });
  if (g.size) { console.log("Familles en place :"); console.table([...g.entries()].map(([famille, n]) => ({ famille, n }))); }

  const lots = toutGenerer();
  const total = lots.reduce((s, l) => s + l.exos.length, 0);
  console.log("À créer :");
  console.table(lots.map(({ solide, exos }) => ({ famille: solide.famille, classe: solide.classe, n: exos.length })));
  console.log(`Renommage : « Géométrie dans l'espace » → « ${NOUVEAU} » (${anciens.length} exercice(s))`);
  console.log(`Insertion : ${total} exercices sur ${lots.length} familles`);
  if (g.size && !GARDER) console.log(`Suppression : ${g.size} famille(s) existante(s) — --garder-familles pour les conserver`);
  console.log(`\n⚠ Les chapitres « Prisme droit et cylindre » et « Pyramides et cônes » traitent`);
  console.log(`  déjà ces solides. À vous de voir si vous les conservez.`);

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`volumes-avant-refonte-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : volumes-avant-refonte-${stamp}.json`);

  if (anciens.length) {
    const r = await pool.query("UPDATE exercises SET chapitre = $1 WHERE id = ANY($2)",
      [NOUVEAU, anciens.map(x => x.id)]);
    console.log(`${r.rowCount} exercice(s) rattachés à « ${NOUVEAU} ».`);
  }
  if (!GARDER) {
    const ids = [...anciens, ...deja].map(x => x.id);
    if (ids.length) {
      const r = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [ids]);
      console.log(`${r.rowCount} ancien(s) exercice(s) supprimé(s).`);
    }
  }

  const modele = { level: "college", subject: "Géométrie" };
  for (const { solide, exos } of lots) {
    const LOT = 50;
    for (let i = 0; i < exos.length; i += LOT) {
      const part = exos.slice(i, i + LOT), par = [];
      part.forEach((e, j) => par.push(
        `${solide.famille} ${i + j + 1}`, e.content, modele.level, modele.subject,
        e.difficulty, e.solution, solide.classe, NOUVEAU, solide.famille));
      await pool.query(
        `INSERT INTO exercises (title, content, level, subject, difficulty, solution,
           classe, chapitre, type, famille)
         VALUES ${part.map((_, j) => { const b = j * 9;
           return `($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},'exercice',$${b+9})`;
         }).join(",")}`, par);
    }
    console.log(`  ${solide.famille} : ${exos.length}`);
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [NOUVEAU]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
