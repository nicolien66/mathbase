/* MathBase — generer-statistiques.js
   Chapitre « Statistiques » : ne conserve que six familles, et porte chacune
   à 100 exercices.

   ── LES SIX FAMILLES ─────────────────────────────────────────────────────
     Calculer l'étendue
     Calculer une moyenne
     Moyenne pondérée
     Fréquence
     Médiane d'une série impaire
     Médiane d'une série paire
   Toutes les autres familles du chapitre sont SUPPRIMÉES. Pas de famille
   « Cours » ici, comme demandé.

   Répartition 20 faciles / 30 moyens / 50 difficiles : plus de difficiles
   que de faciles.

   ── ARITHMÉTIQUE ─────────────────────────────────────────────────────────
   Les séries sont construites pour que les moyennes tombent juste : la somme
   est choisie divisible par l'effectif. Lorsqu'un modèle demande un arrondi,
   il le dit explicitement et le corrigé écrit « ≈ », jamais « = ».

   Les deux familles de médiane sont volontairement distinctes, parce que la
   méthode l'est : sur un effectif IMPAIR la médiane est une valeur de la
   série ; sur un effectif PAIR c'est la demi-somme des deux valeurs
   centrales, qui n'appartient généralement pas à la série. C'est là que les
   élèves se trompent, et chaque famille insiste sur son cas.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node generer-statistiques.js --apercu
     node generer-statistiques.js --apercu "Moyenne pondérée"
     node generer-statistiques.js
     node generer-statistiques.js --execute
   Options : --cible N (100) · --graine N (20260816) · --garder-familles
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU = ARGS.includes("--apercu");
const GARDER = ARGS.includes("--garder-familles");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE = opt("--cible", 100);
const GRAINE = opt("--graine", 20260816);
const CHAP_MOTIF = "statistique";

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];

/* ═══ DÉCIMAUX EXACTS ═══ */
const grp = s => s.length >= 5 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : s;
function fmt(m, e) {
  const neg = m < 0; m = Math.abs(m);
  let s = String(m).padStart(e + 1, "0");
  let ip = s.slice(0, s.length - e), dp = e ? s.slice(s.length - e) : "";
  dp = dp.replace(/0+$/, "");
  return (neg ? "\u2212" : "") + grp(ip) + (dp ? "," + dp : "");
}
const D = (m, e = 0) => ({ m, e });
const S = x => fmt(x.m, x.e);
const num = x => x.m / Math.pow(10, x.e);
/* n ÷ d exact, si l'écriture décimale existe */
function divExacte(n, d) {
  if (!d) return null;
  for (let e = 0; e <= 4; e++) { const v = n * Math.pow(10, e); if (v % d === 0) return D(v / d, e); }
  return null;
}
const arr = (v, k) => { const p = Math.pow(10, k); return String(Math.round(v * p) / p).replace(".", ","); };
const virg = x => String(x).replace(".", ",");
const pgcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };
const fr = (n, d) => { const g = pgcd(n, d); return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`; };

const LIB = { F: "Facile", M: "Moyen", D: "Difficile" };
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];
/* contextes : [sujet, unité, phrase d'introduction, plage de valeurs] */
const CTX = [
  { q: "les notes obtenues par un élève", u: "", intro: "Voici les notes d'un élève", min: 4, max: 20 },
  { q: "les tailles d'un groupe d'élèves", u: " cm", intro: "Voici les tailles, en centimètres", min: 145, max: 185 },
  { q: "les températures relevées", u: " °C", intro: "Voici les températures relevées, en degrés", min: 2, max: 32 },
  { q: "le nombre de livres empruntés", u: "", intro: "Voici le nombre de livres empruntés chaque jour", min: 3, max: 40 },
  { q: "les temps de trajet", u: " min", intro: "Voici les temps de trajet, en minutes", min: 8, max: 55 },
  { q: "les points marqués", u: " points", intro: "Voici les points marqués à chaque match", min: 5, max: 45 },
  { q: "les masses des colis", u: " kg", intro: "Voici les masses des colis, en kilogrammes", min: 2, max: 30 },
  { q: "les âges des participants", u: " ans", intro: "Voici les âges des participants", min: 9, max: 60 },
];
const liste = l => l.join(" ; ");

/* série de n valeurs dont la somme est divisible par n : la moyenne tombe juste */
function serieMoyenne(n, c) {
  for (let t = 0; t < 400; t++) {
    const l = Array.from({ length: n }, () => ri(c.min, c.max));
    if (l.reduce((a, b) => a + b, 0) % n === 0) return l;
  }
  const l = Array.from({ length: n }, () => ri(c.min, c.max));
  l[0] += (n - l.reduce((a, b) => a + b, 0) % n) % n;
  return l;
}
const serie = (n, c) => Array.from({ length: n }, () => ri(c.min, c.max));
const somme = l => l.reduce((a, b) => a + b, 0);

/* ═══ LES SIX FAMILLES ═══ */
const FAM = {};

/* ── Calculer l'étendue ── */
FAM["Calculer l'étendue"] = () => {
  const M = [];
  M.push({ d: "F", g() { const c = pick(CTX), l = serie(ri(5, 8), c);
    return { q: `${c.intro} : ${liste(l)}. Calcule l'étendue de cette série.`,
             s: `Valeur maximale : ${Math.max(...l)}${c.u} · valeur minimale : ${Math.min(...l)}${c.u}.\nÉtendue : ${Math.max(...l)} − ${Math.min(...l)} = ${Math.max(...l) - Math.min(...l)}${c.u}.` }; } });
  M.push({ d: "F", g() { const c = pick(CTX), l = serie(ri(6, 10), c);
    return { q: `${c.intro} : ${liste(l)}. Quelle est la plus grande valeur ? la plus petite ? l'étendue ?`,
             s: `Plus grande : ${Math.max(...l)}${c.u}. Plus petite : ${Math.min(...l)}${c.u}.\nÉtendue : ${Math.max(...l) - Math.min(...l)}${c.u}.` }; } });
  M.push({ d: "F", g() { const c = pick(CTX), a = ri(c.min, c.max - 10), b = a + ri(5, 25);
    return { q: `Dans une série, la plus petite valeur est ${a}${c.u} et la plus grande ${b}${c.u}. Quelle est l'étendue ?`,
             s: `Étendue : ${b} − ${a} = ${b - a}${c.u}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), l = serie(ri(8, 12), c);
    return { q: `${c.intro} : ${liste(l)}. Calcule l'étendue de cette série.`,
             s: `On repère les extrêmes : maximum ${Math.max(...l)}${c.u}, minimum ${Math.min(...l)}${c.u}.\nÉtendue : ${Math.max(...l)} − ${Math.min(...l)} = ${Math.max(...l) - Math.min(...l)}${c.u}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), a = ri(c.min, c.max - 15), e = ri(6, 25);
    return { q: `Une série a une étendue de ${e}${c.u} et sa plus petite valeur est ${a}${c.u}. Quelle est sa plus grande valeur ?`,
             s: `L'étendue est la différence entre les extrêmes.\nPlus grande valeur : ${a} + ${e} = ${a + e}${c.u}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), l = serie(ri(6, 9), c), k = ri(3, 10);
    return { q: `${c.intro} : ${liste(l)}. On ajoute ${k}${c.u} à chaque valeur. Que devient l'étendue ?`,
             s: `Avant : ${Math.max(...l)} − ${Math.min(...l)} = ${Math.max(...l) - Math.min(...l)}${c.u}.\nAprès : ${Math.max(...l) + k} − ${Math.min(...l) + k} = ${Math.max(...l) - Math.min(...l)}${c.u}.\nL'étendue ne change PAS : les deux extrêmes se décalent de la même quantité.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serie(ri(9, 14), c);
    const l2 = [...l, ri(c.min, c.max)];
    return { q: `${c.intro} : ${liste(l)}. Une nouvelle valeur, ${l2[l2.length - 1]}${c.u}, s'ajoute à la série. L'étendue change-t-elle ?`,
             s: `Avant : ${Math.max(...l) - Math.min(...l)}${c.u}.\nAprès : ${Math.max(...l2)} − ${Math.min(...l2)} = ${Math.max(...l2) - Math.min(...l2)}${c.u}.\n${Math.max(...l2) - Math.min(...l2) === Math.max(...l) - Math.min(...l) ? "Elle ne change pas : la nouvelle valeur est comprise entre les extrêmes." : "Elle AUGMENTE : la nouvelle valeur est plus extrême que les précédentes."}` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serie(ri(7, 10), c), k = ri(2, 3);
    return { q: `${c.intro} : ${liste(l)}. On multiplie chaque valeur par ${k}. Que devient l'étendue ?`,
             s: `Avant : ${Math.max(...l) - Math.min(...l)}${c.u}.\nAprès : ${Math.max(...l) * k} − ${Math.min(...l) * k} = ${(Math.max(...l) - Math.min(...l)) * k}${c.u}.\nL'étendue est multipliée par ${k}, comme toutes les valeurs.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), a = serie(ri(6, 8), c), b = serie(ri(6, 8), c);
    const ea = Math.max(...a) - Math.min(...a), eb = Math.max(...b) - Math.min(...b);
    if (ea === eb) return null;
    return { q: `Deux groupes ont été mesurés.\nGroupe A : ${liste(a)}\nGroupe B : ${liste(b)}\nQuel groupe présente les valeurs les plus dispersées ?`,
             s: `Étendue de A : ${Math.max(...a)} − ${Math.min(...a)} = ${ea}${c.u}.\nÉtendue de B : ${Math.max(...b)} − ${Math.min(...b)} = ${eb}${c.u}.\nLe groupe ${ea > eb ? "A" : "B"} est le plus dispersé.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serie(ri(8, 12), c); const el = pick(PRENOMS);
    return { q: `${c.intro} : ${liste(l)}. ${el} annonce une étendue de ${Math.max(...l)}${c.u}. Explique son erreur.`,
             s: `${el} a donné la valeur MAXIMALE, pas l'étendue.\nL'étendue est une DIFFÉRENCE : ${Math.max(...l)} − ${Math.min(...l)} = ${Math.max(...l) - Math.min(...l)}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serie(ri(8, 11), c);
    const sansExtreme = l.filter(x => x !== Math.max(...l));
    if (!sansExtreme.length) return null;
    return { q: `${c.intro} : ${liste(l)}. On retire la valeur la plus grande. De combien l'étendue diminue-t-elle ?`,
             s: `Avant : ${Math.max(...l)} − ${Math.min(...l)} = ${Math.max(...l) - Math.min(...l)}${c.u}.\nAprès : ${Math.max(...sansExtreme)} − ${Math.min(...sansExtreme)} = ${Math.max(...sansExtreme) - Math.min(...sansExtreme)}${c.u}.\nDiminution : ${(Math.max(...l) - Math.min(...l)) - (Math.max(...sansExtreme) - Math.min(...sansExtreme))}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), e = ri(5, 20), a = ri(c.min, c.max - e);
    return { q: `Une série a une étendue de ${e}${c.u}. Deux valeurs suffisent-elles à la déterminer entièrement ? Justifie.`,
             s: `Non. L'étendue ne renseigne que sur l'écart entre les extrêmes : ${a}${c.u} et ${a + e}${c.u} conviennent, mais ${a + 1}${c.u} et ${a + e + 1}${c.u} aussi.\nElle mesure la DISPERSION, pas les valeurs elles-mêmes.` }; } });
  return M;
};

/* ── Calculer une moyenne ── */
FAM["Calculer une moyenne"] = () => {
  const M = [];
  M.push({ d: "F", g() { const c = pick(CTX), n = ri(4, 6), l = serieMoyenne(n, c), s = somme(l);
    return { q: `${c.intro} : ${liste(l)}. Calcule la moyenne de cette série.`,
             s: `Somme : ${l.join(" + ")} = ${s}.\nMoyenne : ${s} ÷ ${n} = ${S(divExacte(s, n))}${c.u}.` }; } });
  M.push({ d: "F", g() { const c = pick(CTX), n = ri(3, 5), l = serieMoyenne(n, c), s = somme(l);
    return { q: `${c.intro} : ${liste(l)}. Quelle est la moyenne ?`,
             s: `${s} ÷ ${n} = ${S(divExacte(s, n))}${c.u}.` }; } });
  M.push({ d: "F", g() { const c = pick(CTX), n = ri(4, 8), m = ri(c.min + 2, c.max - 2);
    return { q: `Une série de ${n} valeurs a une somme de ${n * m}${c.u}. Quelle est sa moyenne ?`,
             s: `${n * m} ÷ ${n} = ${m}${c.u}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), n = ri(6, 10), l = serieMoyenne(n, c), s = somme(l);
    return { q: `${c.intro} : ${liste(l)}. Calcule la moyenne de cette série.`,
             s: `Somme des ${n} valeurs : ${s}.\nMoyenne : ${s} ÷ ${n} = ${S(divExacte(s, n))}${c.u}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), n = ri(5, 8), l = serie(n, c), s = somme(l);
    if (s % n === 0) return null;
    return { q: `${c.intro} : ${liste(l)}. Calcule la moyenne, arrondie au dixième.`,
             s: `Somme : ${s}. Effectif : ${n}.\nMoyenne : ${s} ÷ ${n} ≈ ${arr(s / n, 1)}${c.u}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), n = ri(4, 7), m = ri(c.min + 3, c.max - 3);
    return { q: `Une série de ${n} valeurs a une moyenne de ${m}${c.u}. Quelle est la somme de ces valeurs ?`,
             s: `Somme = moyenne × effectif = ${m} × ${n} = ${m * n}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), n = ri(5, 8), l = serieMoyenne(n, c), s = somme(l);
    const nouvelle = ri(c.min, c.max);
    return { q: `${c.intro} : ${liste(l)}. Une nouvelle valeur, ${nouvelle}${c.u}, s'ajoute. Comment évolue la moyenne ?`,
             s: `Avant : ${s} ÷ ${n} = ${S(divExacte(s, n))}${c.u}.\nAprès : ${s + nouvelle} ÷ ${n + 1} ${divExacte(s + nouvelle, n + 1) ? `= ${S(divExacte(s + nouvelle, n + 1))}` : `≈ ${arr((s + nouvelle) / (n + 1), 2)}`}${c.u}.\nElle ${nouvelle > s / n ? "AUGMENTE : la nouvelle valeur dépasse l'ancienne moyenne" : nouvelle < s / n ? "DIMINUE : la nouvelle valeur est inférieure à l'ancienne moyenne" : "ne change pas : la nouvelle valeur est égale à la moyenne"}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), n = ri(4, 7), m = ri(c.min + 3, c.max - 5), cible = m + ri(1, 4);
    return { q: `Après ${n} mesures, la moyenne est de ${m}${c.u}. Quelle valeur faut-il obtenir à la mesure suivante pour que la moyenne atteigne ${cible}${c.u} ?`,
             s: `Somme actuelle : ${m} × ${n} = ${m * n}.\nSomme visée sur ${n + 1} valeurs : ${cible} × ${n + 1} = ${cible * (n + 1)}.\nValeur nécessaire : ${cible * (n + 1)} − ${m * n} = ${cible * (n + 1) - m * n}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), n = ri(5, 8), l = serieMoyenne(n, c), s = somme(l), k = ri(2, 5);
    return { q: `${c.intro} : ${liste(l)}. On ajoute ${k}${c.u} à chaque valeur. Que devient la moyenne ?`,
             s: `Avant : ${S(divExacte(s, n))}${c.u}.\nAprès : ${S(divExacte(s + k * n, n))}${c.u}, soit ${S(divExacte(s, n))} + ${k}.\nAjouter la même quantité à toutes les valeurs revient à l'ajouter à la moyenne.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), a = ri(4, 7), b = ri(4, 7), ma = ri(c.min + 3, c.max - 3), mb = ri(c.min + 3, c.max - 3);
    const s = ma * a + mb * b, t = a + b;
    return { q: `Un premier groupe de ${a} valeurs a une moyenne de ${ma}${c.u}, un second de ${b} valeurs une moyenne de ${mb}${c.u}. Quelle est la moyenne de l'ensemble ?`,
             s: `Somme du premier : ${ma} × ${a} = ${ma * a}. Du second : ${mb} × ${b} = ${mb * b}.\nMoyenne d'ensemble : ${s} ÷ ${t} ${divExacte(s, t) ? `= ${S(divExacte(s, t))}` : `≈ ${arr(s / t, 2)}`}${c.u}.\nCe n'est PAS la moyenne des deux moyennes, sauf si les effectifs sont égaux.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), n = ri(5, 8), l = serieMoyenne(n, c), s = somme(l); const el = pick(PRENOMS);
    const faux = arr((Math.max(...l) + Math.min(...l)) / 2, 1);
    return { q: `${c.intro} : ${liste(l)}. ${el} calcule la moyenne en faisant (${Math.max(...l)} + ${Math.min(...l)}) ÷ 2 = ${faux}${c.u}. Explique son erreur.`,
             s: `${el} n'a utilisé que les deux valeurs extrêmes : les autres comptent aussi.\nMoyenne : ${s} ÷ ${n} = ${S(divExacte(s, n))}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), n = ri(5, 7), l = serieMoyenne(n, c), s = somme(l);
    const manquant = l[l.length - 1], reste = l.slice(0, -1);
    return { q: `Une série de ${n} valeurs a une moyenne de ${S(divExacte(s, n))}${c.u}. On connaît ${n - 1} d'entre elles : ${liste(reste)}. Retrouve la valeur manquante.`,
             s: `Somme totale : ${S(divExacte(s, n))} × ${n} = ${s}.\nSomme connue : ${somme(reste)}.\nValeur manquante : ${s} − ${somme(reste)} = ${manquant}${c.u}.` }; } });
  return M;
};

/* ── Moyenne pondérée ── */
FAM["Moyenne pondérée"] = () => {
  const M = [];
  /* table valeur/effectif dont la moyenne tombe juste */
  /* Les valeurs d'un tableau d'effectifs doivent etre DISTINCTES : une meme
     valeur figurant deux fois avec deux effectifs differents n'a pas de sens,
     ses occurrences se cumuleraient. On les construit donc strictement
     croissantes. */
  function table(k, c) {
    for (let t = 0; t < 500; t++) {
      const v = [], e = [];
      let x = ri(c.min, Math.max(c.min + 1, c.max - k * 3));
      for (let i = 0; i < k; i++) { v.push(x); e.push(ri(1, 9)); x += ri(1, 3); }
      if (new Set(v).size !== k) continue;
      const N = somme(e), S0 = v.reduce((a, y, i) => a + y * e[i], 0);
      if (S0 % N === 0) return { v, e, N, S: S0 };
    }
    return null;
  }
  const tab = t => t.v.map((x, i) => `${x} (×${t.e[i]})`).join(" · ");
  const detail = t => t.v.map((x, i) => `${x} × ${t.e[i]}`).join(" + ");

  M.push({ d: "F", g() { const c = pick(CTX), t = table(3, c); if (!t) return null;
    return { q: `${c.intro}, avec leurs effectifs : ${tab(t)}. Calcule la moyenne de cette série.`,
             s: `Somme pondérée : ${detail(t)} = ${t.S}.\nEffectif total : ${t.e.join(" + ")} = ${t.N}.\nMoyenne : ${t.S} ÷ ${t.N} = ${S(divExacte(t.S, t.N))}${c.u}.` }; } });
  M.push({ d: "F", g() { const c = pick(CTX), t = table(3, c); if (!t) return null;
    return { q: `Une série comporte les valeurs ${t.v.join(", ")}${c.u}, avec pour effectifs respectifs ${t.e.join(", ")}. Quel est l'effectif total ?`,
             s: `${t.e.join(" + ")} = ${t.N}.` }; } });
  M.push({ d: "F", g() { const c = pick(CTX), t = table(3, c); if (!t) return null;
    return { q: `${c.intro} : la valeur ${t.v[0]}${c.u} apparaît ${t.e[0]} fois, ${t.v[1]}${c.u} apparaît ${t.e[1]} fois et ${t.v[2]}${c.u} apparaît ${t.e[2]} fois. Calcule la moyenne.`,
             s: `Somme : ${detail(t)} = ${t.S}.\nEffectif : ${t.N}.\nMoyenne : ${t.S} ÷ ${t.N} = ${S(divExacte(t.S, t.N))}${c.u}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), t = table(ri(4, 5), c); if (!t) return null;
    return { q: `${c.intro}, avec leurs effectifs : ${tab(t)}. Calcule la moyenne de cette série.`,
             s: `Somme pondérée : ${detail(t)} = ${t.S}.\nEffectif total : ${t.N}.\nMoyenne : ${t.S} ÷ ${t.N} = ${S(divExacte(t.S, t.N))}${c.u}.` }; } });
  M.push({ d: "M", g() { const n1 = ri(2, 4), n2 = ri(2, 4), n3 = ri(1, 3);
    const a = ri(6, 18), b = ri(6, 18), d = ri(6, 18);
    const S0 = a * n1 + b * n2 + d * n3, N = n1 + n2 + n3;
    return { q: `Un élève obtient ${a} en devoir (coefficient ${n1}), ${b} en interrogation (coefficient ${n2}) et ${d} à l'oral (coefficient ${n3}). Calcule sa moyenne${S0 % N ? ", arrondie au dixième" : ""}.`,
             s: `Somme pondérée : ${a} × ${n1} + ${b} × ${n2} + ${d} × ${n3} = ${S0}.\nSomme des coefficients : ${n1} + ${n2} + ${n3} = ${N}.\nMoyenne : ${S0} ÷ ${N} ${S0 % N === 0 ? `= ${S0 / N}` : `≈ ${arr(S0 / N, 1)}`}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), t = table(3, c); if (!t) return null;
    return { q: `${c.intro}, avec leurs effectifs : ${tab(t)}. Pourquoi la moyenne n'est-elle pas simplement (${t.v.join(" + ")}) ÷ ${t.v.length} ?`,
             s: `Parce que les valeurs n'ont pas le même poids : ${t.v[0]}${c.u} compte ${t.e[0]} fois, pas une seule.\nMoyenne simple : ${arr(somme(t.v) / t.v.length, 2)} — fausse ici.\nMoyenne pondérée : ${t.S} ÷ ${t.N} = ${S(divExacte(t.S, t.N))}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), t = table(ri(4, 6), c); if (!t) return null;
    return { q: `${c.intro}, avec leurs effectifs : ${tab(t)}. Calcule l'effectif total, puis la moyenne de la série.`,
             s: `Effectif total : ${t.e.join(" + ")} = ${t.N}.\nSomme pondérée : ${detail(t)} = ${t.S}.\nMoyenne : ${t.S} ÷ ${t.N} = ${S(divExacte(t.S, t.N))}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), t = table(3, c); if (!t) return null;
    const k = ri(2, 4);
    return { q: `${c.intro}, avec leurs effectifs : ${tab(t)}. On multiplie tous les effectifs par ${k}. La moyenne change-t-elle ?`,
             s: `Nouvelle somme pondérée : ${t.S} × ${k} = ${t.S * k}. Nouvel effectif : ${t.N} × ${k} = ${t.N * k}.\nMoyenne : ${t.S * k} ÷ ${t.N * k} = ${S(divExacte(t.S, t.N))}${c.u}.\nElle ne change PAS : seules les PROPORTIONS comptent.` }; } });
  M.push({ d: "D", g() { const a = ri(8, 16), b = ri(8, 16), n1 = ri(1, 3), n2 = ri(1, 3);
    const cible = ri(10, 15), n3 = ri(1, 3);
    const need = cible * (n1 + n2 + n3) - a * n1 - b * n2;
    if (need < 0 || need > 20 * n3 || need % n3 !== 0) return null;
    return { q: `Un élève a ${a} (coefficient ${n1}) et ${b} (coefficient ${n2}). Quelle note doit-il obtenir à un devoir de coefficient ${n3} pour atteindre une moyenne de ${cible} ?`,
             s: `Somme visée : ${cible} × ${n1 + n2 + n3} = ${cible * (n1 + n2 + n3)}.\nSomme actuelle : ${a} × ${n1} + ${b} × ${n2} = ${a * n1 + b * n2}.\nIl lui faut ${cible * (n1 + n2 + n3)} − ${a * n1 + b * n2} = ${need} points pondérés, soit ${need} ÷ ${n3} = ${need / n3} au devoir.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), t = table(4, c); if (!t) return null; const el = pick(PRENOMS);
    const faux = arr(somme(t.v) / t.v.length, 2);
    return { q: `${c.intro}, avec leurs effectifs : ${tab(t)}. ${el} calcule (${t.v.join(" + ")}) ÷ ${t.v.length} = ${faux}${c.u}. Explique son erreur.`,
             s: `${el} a ignoré les effectifs : il a traité chaque valeur comme si elle n'apparaissait qu'une fois.\nIl faut PONDÉRER : ${detail(t)} = ${t.S}, puis diviser par l'effectif total ${t.N}.\nMoyenne : ${S(divExacte(t.S, t.N))}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), t = table(3, c); if (!t) return null;
    return { q: `${c.intro}, avec leurs effectifs : ${tab(t)}. Compare la moyenne pondérée à la valeur la plus fréquente.`,
             s: `Moyenne pondérée : ${t.S} ÷ ${t.N} = ${S(divExacte(t.S, t.N))}${c.u}.\nValeur la plus fréquente : ${t.v[t.e.indexOf(Math.max(...t.e))]}${c.u}, avec ${Math.max(...t.e)} occurrences.\nCe sont deux indicateurs différents : la moyenne tient compte de TOUTES les valeurs, la plus fréquente n'en désigne qu'une.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), t = table(4, c); if (!t) return null;
    const i = ri(0, t.v.length - 1), k = ri(2, 5);
    const e2 = [...t.e]; e2[i] += k;
    const S2 = t.v.reduce((a, x, j) => a + x * e2[j], 0), N2 = somme(e2);
    return { q: `${c.intro}, avec leurs effectifs : ${tab(t)}. On ajoute ${k} valeurs supplémentaires égales à ${t.v[i]}${c.u}. Que devient la moyenne ?`,
             s: `Nouvelle somme : ${t.S} + ${k} × ${t.v[i]} = ${S2}. Nouvel effectif : ${t.N} + ${k} = ${N2}.\nMoyenne : ${S2} ÷ ${N2} ${divExacte(S2, N2) ? `= ${S(divExacte(S2, N2))}` : `≈ ${arr(S2 / N2, 2)}`}${c.u}, contre ${S(divExacte(t.S, t.N))}${c.u} auparavant.` }; } });
  return M;
};

/* ── Fréquence ── */
FAM["Fréquence"] = () => {
  const M = [];
  const CAT = [["rouge","rouges"],["bleu","bleus"],["vert","verts"],["jaune","jaunes"]];
  M.push({ d: "F", g() { const t = pick([10, 20, 25, 50]), n = ri(2, t - 2);
    const c = pick(CAT);
    return { q: `Dans un groupe de ${t} objets, ${n} sont ${c[1]}. Calcule la fréquence des objets ${c[1]}.`,
             s: `Fréquence = effectif ÷ effectif total = ${n} ÷ ${t} = ${virg(n / t)}, soit ${fr(n, t)}.` }; } });
  M.push({ d: "F", g() { const t = pick([20, 25, 40, 50]), n = ri(2, t - 2);
    return { q: `Sur ${t} élèves, ${n} pratiquent un sport. Quelle est la fréquence de cet effectif ? Exprime-la en pourcentage.`,
             s: `${n} ÷ ${t} = ${virg(n / t)}, soit ${virg(Math.round(n / t * 10000) / 100)} %.` }; } });
  M.push({ d: "F", g() { const t = pick([20, 40, 50, 100, 200]), f = pick([0.2, 0.25, 0.4, 0.5]);
    const n = f * t;
    if (!Number.isInteger(Math.round(n * 1000) / 1000)) return null;
    return { q: `Dans une série de ${t} valeurs, une catégorie a une fréquence de ${virg(f)}. Quel est son effectif ?`,
             s: `Effectif = fréquence × effectif total = ${virg(f)} × ${t} = ${Math.round(n)}.` }; } });
  M.push({ d: "M", g() { const a = ri(4, 15), b = ri(4, 15), c2 = ri(4, 15), t = a + b + c2;
    return { q: `Une enquête donne trois réponses : ${a} « oui », ${b} « non » et ${c2} « sans avis ». Calcule la fréquence de chaque réponse, arrondie au centième.`,
             s: `Effectif total : ${a} + ${b} + ${c2} = ${t}.\nOui : ${a} ÷ ${t} ≈ ${arr(a / t, 2)}\nNon : ${b} ÷ ${t} ≈ ${arr(b / t, 2)}\nSans avis : ${c2} ÷ ${t} ≈ ${arr(c2 / t, 2)}` }; } });
  M.push({ d: "M", g() { const t = pick([25, 40, 50, 200]), n = ri(5, t - 5);
    return { q: `Sur ${t} personnes interrogées, ${n} répondent « oui ». Donne la fréquence sous forme décimale, puis en pourcentage.`,
             s: `${n} ÷ ${t} = ${virg(Math.round(n / t * 10000) / 10000)}, soit ${virg(Math.round(n / t * 10000) / 100)} %.` }; } });
  M.push({ d: "M", g() { const a = ri(10, 30), b = ri(10, 30), t = a + b;
    return { q: `Un groupe compte ${a} filles et ${b} garçons. Vérifie que la somme des deux fréquences vaut 1.`,
             s: `Total : ${t}.\nFilles : ${a} ÷ ${t} ≈ ${arr(a / t, 3)}. Garçons : ${b} ÷ ${t} ≈ ${arr(b / t, 3)}.\nSomme : (${a} + ${b}) ÷ ${t} = ${t}/${t} = 1. C'est toujours le cas.` }; } });
  M.push({ d: "D", g() { const cats = [["A", ri(5, 20)], ["B", ri(5, 20)], ["C", ri(5, 20)], ["D", ri(5, 20)]];
    const t = cats.reduce((s, x) => s + x[1], 0);
    return { q: `Une série se répartit ainsi : ${cats.map(x => `${x[0]} : ${x[1]}`).join(" · ")}. Calcule les quatre fréquences en pourcentage, arrondies au dixième, et vérifie leur somme.`,
             s: `Effectif total : ${t}.\n${cats.map(x => `${x[0]} : ${x[1]} ÷ ${t} ≈ ${arr(x[1] / t * 100, 1)} %`).join("\n")}\nSomme ≈ ${arr(cats.reduce((s, x) => s + Math.round(x[1] / t * 1000) / 10, 0), 1)} % — 100 % à l'arrondi près.` }; } });
  M.push({ d: "D", g() { const t1 = ri(20, 40), n1 = ri(5, t1 - 5), t2 = ri(60, 200), n2 = ri(10, t2 - 10);
    return { q: `Deux groupes sont étudiés. Dans le premier, ${n1} personnes sur ${t1} sont concernées ; dans le second, ${n2} sur ${t2}. Dans quel groupe la proportion est-elle la plus forte ?`,
             s: `Premier : ${n1} ÷ ${t1} ≈ ${arr(n1 / t1, 3)}. Second : ${n2} ÷ ${t2} ≈ ${arr(n2 / t2, 3)}.\nLa proportion est plus forte dans le ${n1 / t1 > n2 / t2 ? "premier" : "second"} groupe.\nComparer les EFFECTIFS seuls induirait en erreur : les groupes n'ont pas la même taille.` }; } });
  M.push({ d: "D", g() { const t = pick([100, 200, 300, 400]), f = pick([0.15, 0.24, 0.35, 0.6]);
    /* effectif multiple de 100 : le produit tombe juste, on n'ecrit donc
       jamais un arrondi derriere un signe egal */
    return { q: `Dans une série de ${t} valeurs, une catégorie représente ${virg(f * 100)} %. Combien d'individus cela fait-il ?`,
             s: `${virg(f * 100)} % de ${t} = ${virg(f)} × ${t} = ${Math.round(f * t * 100) / 100} individus.` }; } });
  M.push({ d: "D", g() { const t = ri(20, 50), n = ri(5, t - 5); const el = pick(PRENOMS);
    return { q: `Sur ${t} personnes, ${n} sont concernées. ${el} annonce une fréquence de ${n}. Explique son erreur.`,
             s: `${el} a donné l'EFFECTIF, pas la fréquence.\nUne fréquence est un quotient, toujours compris entre 0 et 1 : ${n} ÷ ${t} ≈ ${arr(n / t, 3)}, soit ${arr(n / t * 100, 1)} %.` }; } });
  M.push({ d: "D", g() { const a = ri(8, 20), b = ri(8, 20), c2 = ri(8, 20), t = a + b + c2, k = ri(2, 4);
    return { q: `Une série compte ${a}, ${b} et ${c2} individus dans trois catégories. On multiplie tous les effectifs par ${k}. Les fréquences changent-elles ?`,
             s: `Avant : ${a} ÷ ${t} ≈ ${arr(a / t, 3)}.\nAprès : ${a * k} ÷ ${t * k} ≈ ${arr(a / t, 3)}.\nElles ne changent PAS : une fréquence mesure une PROPORTION, pas un effectif.` }; } });
  M.push({ d: "D", g() { const t = pick([100, 200, 300, 400]), f1 = pick([0.2, 0.25, 0.3]), f2 = pick([0.1, 0.15, 0.4]);
    const f3 = Math.round((1 - f1 - f2) * 100) / 100;
    if (f3 <= 0) return null;
    return { q: `Une série de ${t} valeurs se répartit en trois catégories, de fréquences ${virg(f1)} et ${virg(f2)} pour les deux premières. Quelle est la fréquence de la troisième, et son effectif ?`,
             s: `La somme des fréquences vaut 1 : ${virg(f3)} pour la troisième.\nEffectif : ${virg(f3)} × ${t} = ${Math.round(f3 * t)}.` }; } });
  return M;
};

/* ── Médiane d'une série impaire ── */
FAM["Médiane d'une série impaire"] = () => {
  const M = [];
  const serieImp = (n, c) => { const l = []; while (l.length < n) { const v = ri(c.min, c.max); if (!l.includes(v)) l.push(v); } return l; };
  const med = l => { const t = [...l].sort((a, b) => a - b); return { t, v: t[(t.length - 1) / 2], r: (t.length + 1) / 2 }; };

  M.push({ d: "F", g() { const c = pick(CTX), l = serieImp(5, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Détermine la médiane de cette série.`,
             s: `On range dans l'ordre croissant : ${liste(m.t)}.\nL'effectif est ${l.length}, un nombre IMPAIR : la médiane est la valeur du milieu, la ${m.r}e.\nMédiane : ${m.v}${c.u}.` }; } });
  M.push({ d: "F", g() { const c = pick(CTX), l = serieImp(5, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Range ces valeurs dans l'ordre croissant, puis donne la médiane.`,
             s: `Ordre croissant : ${liste(m.t)}.\nMédiane : la ${m.r}e valeur, soit ${m.v}${c.u}.` }; } });
  M.push({ d: "F", g() { const c = pick(CTX), l = serieImp(7, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Quelle est la médiane ?`,
             s: `Série triée : ${liste(m.t)}.\n${l.length} valeurs, effectif impair : la médiane est la ${m.r}e, soit ${m.v}${c.u}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), l = serieImp(9, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Détermine la médiane de cette série.`,
             s: `Ordre croissant : ${liste(m.t)}.\nEffectif ${l.length}, impair : la médiane est la (${l.length} + 1) ÷ 2 = ${m.r}e valeur.\nMédiane : ${m.v}${c.u}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), l = serieImp(7, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Combien de valeurs sont inférieures à la médiane ? Combien lui sont supérieures ?`,
             s: `Série triée : ${liste(m.t)}. Médiane : ${m.v}${c.u}.\n${(l.length - 1) / 2} valeurs lui sont inférieures et ${(l.length - 1) / 2} supérieures.\nLa médiane partage la série en deux moitiés de même effectif.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), l = serieImp(9, c), m = med(l), s = somme(l);
    return { q: `${c.intro} : ${liste(l)}. Compare la médiane et la moyenne de cette série.`,
             s: `Médiane : ${m.v}${c.u} (${m.r}e valeur de la série triée).\nMoyenne : ${s} ÷ ${l.length} ${divExacte(s, l.length) ? `= ${S(divExacte(s, l.length))}` : `≈ ${arr(s / l.length, 2)}`}${c.u}.\n${Math.abs(s / l.length - m.v) < 0.01 ? "Elles coïncident ici." : s / l.length > m.v ? "La moyenne est plus grande : quelques valeurs élevées la tirent vers le haut." : "La moyenne est plus petite : quelques valeurs faibles la tirent vers le bas."}` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serieImp(11, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Détermine la médiane, puis dis ce qu'elle signifie concrètement.`,
             s: `Ordre croissant : ${liste(m.t)}.\nMédiane : ${m.v}${c.u}, la ${m.r}e valeur sur ${l.length}.\nCela signifie qu'au moins la moitié des valeurs lui sont inférieures ou égales, et au moins la moitié supérieures ou égales.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serieImp(7, c), m = med(l);
    const grand = Math.max(...l) + ri(20, 60);
    const l2 = [...l.slice(0, -1), grand], m2 = med(l2);
    return { q: `${c.intro} : ${liste(l)}. On remplace la plus grande valeur par ${grand}${c.u}. Que devient la médiane ? Et la moyenne ?`,
             s: `Médiane avant : ${m.v}${c.u}. Après : ${m2.v}${c.u}.\n${m.v === m2.v ? "Elle ne change PAS" : "Elle change peu"} : la médiane dépend du RANG, pas de la valeur des extrêmes.\nLa moyenne, elle, passe de ${arr(somme(l) / l.length, 2)} à ${arr(somme(l2) / l2.length, 2)}${c.u} : elle est bien plus sensible aux valeurs extrêmes.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serieImp(9, c), m = med(l); const el = pick(PRENOMS);
    return { q: `${c.intro} : ${liste(l)}. ${el} annonce une médiane de ${l[(l.length - 1) / 2]}${c.u} sans avoir trié la série. A-t-il raison ?`,
             s: `${l[(l.length - 1) / 2] === m.v ? "Par chance, oui — mais sa méthode est fausse." : "Non."}\nIl faut TOUJOURS trier avant : la médiane est la valeur du milieu de la série ORDONNÉE.\nSérie triée : ${liste(m.t)} → médiane ${m.v}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serieImp(7, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Quelle valeur faudrait-il ajouter pour que la médiane reste ${m.v}${c.u} ? Quel serait alors l'effectif ?`,
             s: `L'effectif passerait à ${l.length + 1}, un nombre PAIR : la médiane deviendrait la demi-somme des ${l.length / 2 | 0}e et ${(l.length / 2 | 0) + 1}e valeurs.\nSérie triée : ${liste(m.t)}. En ajoutant une valeur égale à ${m.v}${c.u}, les deux valeurs centrales vaudraient ${m.v} et ${m.v}, dont la demi-somme est bien ${m.v}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serieImp(11, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Détermine la médiane et l'étendue, puis dis ce que chacune apprend.`,
             s: `Triée : ${liste(m.t)}.\nMédiane : ${m.v}${c.u} — elle situe le CENTRE de la série.\nÉtendue : ${Math.max(...l)} − ${Math.min(...l)} = ${Math.max(...l) - Math.min(...l)}${c.u} — elle mesure la DISPERSION.\nCe sont deux informations complémentaires.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), n = pick([5, 7, 9, 11, 13]);
    return { q: `Une série comporte ${n} valeurs rangées dans l'ordre croissant. Quel est le rang de la médiane ? Explique la formule.`,
             s: `Rang : (${n} + 1) ÷ 2 = ${(n + 1) / 2}.\nAvec un effectif impair, il y a autant de valeurs avant qu'après : ${(n - 1) / 2} de chaque côté.` }; } });
  return M;
};

/* ── Médiane d'une série paire ── */
FAM["Médiane d'une série paire"] = () => {
  const M = [];
  const serieP = (n, c) => { const l = []; while (l.length < n) { const v = ri(c.min, c.max); if (!l.includes(v)) l.push(v); } return l; };
  const med = l => { const t = [...l].sort((a, b) => a - b), n = t.length;
    const a = t[n / 2 - 1], b = t[n / 2];
    return { t, a, b, v: divExacte(a + b, 2), r1: n / 2, r2: n / 2 + 1 }; };

  M.push({ d: "F", g() { const c = pick(CTX), l = serieP(4, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Détermine la médiane de cette série.`,
             s: `Ordre croissant : ${liste(m.t)}.\nL'effectif est ${l.length}, un nombre PAIR : la médiane est la demi-somme des deux valeurs centrales, les ${m.r1}e et ${m.r2}e.\nMédiane : (${m.a} + ${m.b}) ÷ 2 = ${S(m.v)}${c.u}.` }; } });
  M.push({ d: "F", g() { const c = pick(CTX), l = serieP(6, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Range les valeurs dans l'ordre croissant, puis calcule la médiane.`,
             s: `Ordre croissant : ${liste(m.t)}.\nValeurs centrales : ${m.a} et ${m.b}.\nMédiane : (${m.a} + ${m.b}) ÷ 2 = ${S(m.v)}${c.u}.` }; } });
  M.push({ d: "F", g() { const c = pick(CTX), l = serieP(6, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Quelle est la médiane ?`,
             s: `Triée : ${liste(m.t)}.\nEffectif pair : médiane = (${m.a} + ${m.b}) ÷ 2 = ${S(m.v)}${c.u}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), l = serieP(8, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Détermine la médiane de cette série.`,
             s: `Ordre croissant : ${liste(m.t)}.\nEffectif ${l.length}, pair : on prend les ${m.r1}e et ${m.r2}e valeurs, soit ${m.a} et ${m.b}.\nMédiane : (${m.a} + ${m.b}) ÷ 2 = ${S(m.v)}${c.u}.` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), l = serieP(6, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. La médiane appartient-elle à la série ? Justifie.`,
             s: `Triée : ${liste(m.t)}. Médiane : (${m.a} + ${m.b}) ÷ 2 = ${S(m.v)}${c.u}.\n${m.t.includes(num(m.v)) ? "Ici oui, par coïncidence." : "Non, et c'est fréquent avec un effectif PAIR : la médiane est une demi-somme, qui ne figure pas nécessairement parmi les valeurs."}` }; } });
  M.push({ d: "M", g() { const c = pick(CTX), l = serieP(8, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Combien de valeurs se trouvent de part et d'autre de la médiane ?`,
             s: `Triée : ${liste(m.t)}. Médiane : ${S(m.v)}${c.u}.\n${l.length / 2} valeurs en dessous et ${l.length / 2} au-dessus : la médiane partage la série en deux moitiés égales.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serieP(10, c), m = med(l), s = somme(l);
    return { q: `${c.intro} : ${liste(l)}. Compare la médiane et la moyenne.`,
             s: `Triée : ${liste(m.t)}.\nMédiane : (${m.a} + ${m.b}) ÷ 2 = ${S(m.v)}${c.u}.\nMoyenne : ${s} ÷ ${l.length} ${divExacte(s, l.length) ? `= ${S(divExacte(s, l.length))}` : `≈ ${arr(s / l.length, 2)}`}${c.u}.\n${s / l.length > num(m.v) ? "La moyenne dépasse la médiane : des valeurs élevées la tirent vers le haut." : s / l.length < num(m.v) ? "La moyenne est inférieure à la médiane : des valeurs faibles la tirent vers le bas." : "Les deux coïncident."}` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serieP(6, c), m = med(l);
    const nouvelle = ri(c.min, c.max);
    const l2 = [...l, nouvelle], t2 = [...l2].sort((a, b) => a - b);
    return { q: `${c.intro} : ${liste(l)}. On ajoute la valeur ${nouvelle}${c.u}. Comment détermine-t-on la médiane maintenant ?`,
             s: `L'effectif passe de ${l.length} à ${l2.length}, donc de PAIR à IMPAIR.\nSérie triée : ${liste(t2)}.\nLa médiane est désormais une seule valeur, la ${(l2.length + 1) / 2}e : ${t2[(l2.length - 1) / 2]}${c.u}.\nAvant, c'était la demi-somme de ${m.a} et ${m.b}, soit ${S(m.v)}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serieP(8, c), m = med(l); const el = pick(PRENOMS);
    return { q: `${c.intro} : ${liste(l)}. ${el} annonce que la médiane est ${m.a}${c.u}. Explique son erreur.`,
             s: `${el} n'a retenu qu'UNE des deux valeurs centrales.\nAvec un effectif PAIR, la médiane est leur demi-somme : (${m.a} + ${m.b}) ÷ 2 = ${S(m.v)}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serieP(10, c), m = med(l);
    return { q: `${c.intro} : ${liste(l)}. Détermine la médiane et l'étendue de cette série.`,
             s: `Triée : ${liste(m.t)}.\nMédiane : (${m.a} + ${m.b}) ÷ 2 = ${S(m.v)}${c.u}.\nÉtendue : ${Math.max(...l)} − ${Math.min(...l)} = ${Math.max(...l) - Math.min(...l)}${c.u}.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), n = pick([4, 6, 8, 10, 12]);
    return { q: `Une série comporte ${n} valeurs rangées dans l'ordre croissant. Quels sont les rangs des deux valeurs centrales ? Comment obtient-on la médiane ?`,
             s: `Rangs : ${n / 2} et ${n / 2 + 1}.\nMédiane = demi-somme de ces deux valeurs.\nAvec un effectif PAIR, aucune valeur n'occupe seule le milieu : il faut donc en prendre deux.` }; } });
  M.push({ d: "D", g() { const c = pick(CTX), l = serieP(6, c), m = med(l);
    const grand = Math.max(...l) + ri(30, 80);
    const l2 = [...l.slice(0, -1), grand], m2 = med(l2);
    return { q: `${c.intro} : ${liste(l)}. On remplace la plus grande valeur par ${grand}${c.u}. Que deviennent la médiane et la moyenne ?`,
             s: `Médiane avant : ${S(m.v)}${c.u}. Après : ${S(m2.v)}${c.u}.\nMoyenne avant : ${arr(somme(l) / l.length, 2)}${c.u}. Après : ${arr(somme(l2) / l2.length, 2)}${c.u}.\nLa médiane bouge peu ou pas : elle ne dépend que des valeurs CENTRALES. La moyenne, elle, est très sensible aux valeurs extrêmes.` }; } });
  return M;
};

/* ═══ MOTEUR ═══ */
function genererFamille(nom, deja, cible) {
  const fabrique = FAM[nom];
  if (!fabrique) return null;
  const M = fabrique();
  const quota = { F: Math.round(cible * REPART.F), M: Math.round(cible * REPART.M) };
  quota.D = cible - quota.F - quota.M;
  const besoin = { F: Math.max(0, quota.F - (deja.F || 0)),
                   M: Math.max(0, quota.M - (deja.M || 0)),
                   D: Math.max(0, quota.D - (deja.D || 0)) };
  const vus = new Set(), out = [];
  for (const d of ["F", "M", "D"]) {
    const dispo = M.filter(m => m.d === d);
    if (!dispo.length) { if (besoin[d]) console.warn(`  ⚠ ${nom} / ${LIB[d]} : aucun modèle.`); continue; }
    let reste = besoin[d], essais = 0;
    while (reste > 0 && essais < besoin[d] * 600 + 12000) {
      essais++;
      let r; try { r = pick(dispo).g(); } catch (e) { continue; }
      if (!r || !r.q || !r.s) continue;
      const k = cle(r.q);
      if (vus.has(k)) continue;
      vus.add(k);
      out.push({ difficulty: LIB[d], content: r.q, solution: r.s });
      reste--;
    }
    if (reste > 0) console.warn(`  ⚠ ${nom} / ${LIB[d]} : ${reste} manquant(s).`);
  }
  return out;
}

/* ═══ APERÇU ═══ */
if (APERCU) {
  alea = mulberry32(GRAINE);
  const lignes = [];
  Object.keys(FAM).forEach(nom => {
    const ex = genererFamille(nom, {}, CIBLE);
    const d = {}; ex.forEach(e => d[e.difficulty] = (d[e.difficulty] || 0) + 1);
    lignes.push({ famille: nom, total: ex.length, Facile: d.Facile || 0,
                  Moyen: d.Moyen || 0, Difficile: d.Difficile || 0, modeles: FAM[nom]().length });
  });
  console.log(`Chapitre « Statistiques » — ${lignes.length} familles conservées\n`);
  console.table(lignes);
  console.log(`Total : ${lignes.reduce((s, l) => s + l.total, 0)} exercices. Aucune famille « Cours ».`);
  const f = ARGS[ARGS.indexOf("--apercu") + 1];
  if (f && !f.startsWith("--")) {
    const nom = Object.keys(FAM).find(x => cle(x) === cle(f));
    if (nom) { alea = mulberry32(GRAINE);
      const ex = genererFamille(nom, {}, CIBLE);
      console.log(`\n══ ${nom} ══`);
      ["Facile", "Moyen", "Difficile"].forEach(d =>
        ex.filter(e => e.difficulty === d).slice(0, 2).forEach(e =>
          console.log(`\n[${d}] ${e.content}\n  → ${e.solution.replace(/\n/g, "\n    ")}`)));
    } else console.log(`\n⚠ Famille « ${f} » inconnue.`);
  }
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
       FROM exercises WHERE chapitre ILIKE $1 ORDER BY id`, [`%${CHAP_MOTIF}%`]);
  const rows = brut.filter(r => cle(r.chapitre) === "statistiques");
  if (!rows.length) {
    console.log("Chapitre « Statistiques » introuvable.");
    console.log("Chapitres approchants :", [...new Set(brut.map(r => r.chapitre))].join(" | ") || "(aucun)");
    await pool.end(); return;
  }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAP = maj(rows, "chapitre", "Statistiques");
  console.log(`Chapitre « ${CHAP} » : ${rows.length} exercice(s).\n`);

  const parFam = new Map();
  rows.forEach(r => { const k = r.famille || "(sans famille)";
    if (!parFam.has(k)) parFam.set(k, []); parFam.get(k).push(r); });
  const garde = new Set(Object.keys(FAM).map(cle));
  const conservees = [...parFam.keys()].filter(k => garde.has(cle(k)));
  const supprimees = [...parFam.keys()].filter(k => !garde.has(cle(k)));

  console.log("Familles en place :");
  console.table([...parFam.entries()].map(([famille, l]) => ({
    famille, n: l.length, sort: garde.has(cle(famille)) ? "conservée" : "SUPPRIMÉE" })));

  const aSupprimer = supprimees.reduce((s, k) => s.concat(parFam.get(k).map(x => x.id)), []);
  alea = mulberry32(GRAINE);
  const aInserer = [], rapport = [];
  for (const nom of Object.keys(FAM)) {
    const exist = conservees.find(k => cle(k) === cle(nom));
    const items = exist ? parFam.get(exist) : [];
    const deja = { F: 0, M: 0, D: 0 };
    items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M" : i.difficulty === "Difficile" ? "D" : null; if (d) deja[d]++; });
    const neufs = genererFamille(nom, deja, CIBLE);
    const src = items.length ? items : rows;
    const mod = { level: maj(src, "level", "college"), subject: maj(src, "subject", "Statistiques"),
                  classe: maj(src, "classe", "4ème"), type: items.length ? maj(items, "type", "exercice") : "exercice" };
    let num2 = 0; items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num2 = Math.max(num2, +m[1]); });
    const nomFinal = exist || nom;
    neufs.forEach(e => { num2++; aInserer.push({ title: `${nomFinal} ${num2}`, content: e.content, solution: e.solution,
      difficulty: e.difficulty, level: mod.level, subject: mod.subject, classe: mod.classe,
      chapitre: CHAP, type: mod.type, famille: nomFinal }); });
    rapport.push({ famille: nomFinal, avant: items.length, ajoutes: neufs.length,
                   apres: items.length + neufs.length, note: exist ? "" : "NOUVELLE" });
  }
  console.log("\nÀ créer ou compléter :");
  console.table(rapport);
  console.log(`Suppression : ${aSupprimer.length} exercice(s) dans ${supprimees.length} famille(s)`);
  console.log(`Insertion : ${aInserer.length} exercice(s)`);

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`statistiques-avant-refonte-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : statistiques-avant-refonte-${stamp}.json`);

  if (aSupprimer.length && !GARDER) {
    const r = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [aSupprimer]);
    console.log(`${r.rowCount} exercice(s) supprimé(s).`);
  }
  const LOT = 200;
  for (let i = 0; i < aInserer.length; i += LOT) {
    const lot = aInserer.slice(i, i + LOT), par = [];
    lot.forEach(e => par.push(e.title, e.content, e.level, e.subject, e.difficulty,
      e.solution, e.classe, e.chapitre, e.type, e.famille));
    await pool.query(
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution,
         classe, chapitre, type, famille)
       VALUES ${lot.map((_, j) => { const b = j * 10;
         return `($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},$${b+9},$${b+10})`;
       }).join(",")}`, par);
    console.log(`  ${Math.min(i + LOT, aInserer.length)} / ${aInserer.length}`);
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAP]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
