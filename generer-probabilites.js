/* MathBase — generer-probabilites.js
   Chapitre « Probabilités » → « Bases des probabilités ».
   Crée une famille « Cours » et porte chaque famille existante à 100 exercices.

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. RENOMME le chapitre en « Bases des probabilités » (côté base ; le côté
      affichage est traité par patch-contenu-probas.js).
   2. Crée « Cours » : 34 questions sur les définitions du programme —
      expérience aléatoire, issue, univers, événement, événement contraire,
      équiprobabilité, encadrement de P(A), somme des probabilités.
   3. Complète les 16 familles existantes à 100 exercices chacune, en
      s'inspirant de leur TITRE et des énoncés déjà présents.

   Répartition 20 faciles / 30 moyens / 50 difficiles : plus de difficiles
   que de faciles, comme demandé.

   ── LA FAMILLE « De la fréquence à la probabilité » ───────────────────────
   Elle reçoit un traitement particulier. Les énoncés disent toujours
   ESTIMER, jamais « calculer » : une fréquence ne donne jamais la valeur
   exacte d'une probabilité. Et une bonne moitié des exercices présente des
   séries COURTES — 10, 20, 30 essais — en demandant si l'on peut
   raisonnablement conclure. La réponse est non : sur peu d'essais, la
   fréquence fluctue trop. D'autres modèles font varier le nombre d'essais
   sur une même expérience pour montrer la fréquence se stabiliser.

   ── ARITHMÉTIQUE ─────────────────────────────────────────────────────────
   Toutes les probabilités sont des fractions RÉDUITES calculées par pgcd, et
   l'écriture décimale n'est donnée que lorsqu'elle est exacte : 1/3 n'est
   jamais écrit 0,33.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node generer-probabilites.js --apercu
     node generer-probabilites.js
     node generer-probabilites.js --execute
   Options : --cible N (100) · --graine N (20260815) · --nom "Bases des probabilités"
             --garder-nom   ne renomme pas le chapitre
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU = ARGS.includes("--apercu");
const GARDER_NOM = ARGS.includes("--garder-nom");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const txtOpt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] && !ARGS[i + 1].startsWith("--") ? ARGS[i + 1] : d; };
const CIBLE = opt("--cible", 100);
const GRAINE = opt("--graine", 20260815);
const NOUVEAU = txtOpt("--nom", "Bases des probabilités");

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];

/* ═══ FRACTIONS EXACTES ═══ */
const pgcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };
const R = (n, d) => { const g = pgcd(n, d); return { n: n / g, d: d / g }; };
const fr = (n, d) => { const r = R(n, d); return r.d === 1 ? String(r.n) : `${r.n}/${r.d}`; };
function dec(n, d) {                          /* décimale seulement si exacte */
  const r = R(n, d); let m = r.d;
  while (m % 2 === 0) m /= 2; while (m % 5 === 0) m /= 5;
  if (m !== 1) return null;
  return String(r.n / r.d).replace(".", ",");
}
/* « 3/10 » suivi de sa décimale quand elle existe */
const frd = (n, d) => { const x = dec(n, d); return fr(n, d) + (x && fr(n, d) !== x ? ` = ${x}` : ""); };
const simpl = (n, d) => { const r = R(n, d);
  return (r.n !== n ? `${n}/${d} = ${fr(n, d)}` : fr(n, d)); };
const virg = x => String(x).replace(".", ",");

const LIB = { F: "Facile", M: "Moyen", D: "Difficile" };
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];
const COUL = [["rouge","rouges"],["bleue","bleues"],["verte","vertes"],["jaune","jaunes"],
              ["noire","noires"],["blanche","blanches"],["orange","oranges"],["violette","violettes"]];

/* ═══ LES FAMILLES ═══ chaque entrée fournit ses modèles ═══ */
const FAM = {};

/* ── Probabilité simple ── sac de billes */
FAM["Probabilité simple"] = () => {
  const M = [];
  const sac = (min, max) => { const c = [...COUL]; const a = c.splice(ri(0, c.length - 1), 1)[0];
    const b = c.splice(ri(0, c.length - 1), 1)[0];
    return { a, b, na: ri(min, max), nb: ri(min, max) }; };
  M.push({ d: "F", g() { const s = sac(2, 9), t = s.na + s.nb;
    return { q: `Un sac contient ${s.na} billes ${s.a[1]} et ${s.nb} billes ${s.b[1]}, indiscernables au toucher. Quelle est la probabilité de tirer une bille ${s.b[0]} ?`,
             s: `${t} billes en tout : p = ${simpl(s.nb, t)}.` }; } });
  M.push({ d: "F", g() { const s = sac(2, 9), t = s.na + s.nb;
    return { q: `Un sac contient ${s.na} billes ${s.a[1]} et ${s.nb} billes ${s.b[1]}. On en tire une au hasard. Quelle est la probabilité qu'elle soit ${s.a[0]} ?`,
             s: `${s.na} + ${s.nb} = ${t} billes. p = ${simpl(s.na, t)}.` }; } });
  M.push({ d: "F", g() { const n = ri(3, 12), t = ri(n + 2, n + 15);
    return { q: `Un sac contient ${t} billes, dont ${n} sont rouges. Quelle est la probabilité de tirer une bille rouge ?`,
             s: `p = ${simpl(n, t)}.` }; } });
  M.push({ d: "M", g() { const s = sac(3, 12), t = s.na + s.nb;
    return { q: `Un sac contient ${s.na} billes ${s.a[1]} et ${s.nb} billes ${s.b[1]}. Calcule la probabilité de tirer : a) une bille ${s.a[0]} b) une bille qui n'est pas ${s.a[0]}`,
             s: `${t} billes en tout.\na) ${simpl(s.na, t)}\nb) ${simpl(s.nb, t)}, ou bien 1 − ${fr(s.na, t)} = ${fr(s.nb, t)}.` }; } });
  M.push({ d: "M", g() { const c = [...COUL], a = c.splice(ri(0, 5), 1)[0], b = c.splice(ri(0, 4), 1)[0], e = c.splice(ri(0, 3), 1)[0];
    const na = ri(2, 8), nb = ri(2, 8), ne = ri(2, 8), t = na + nb + ne;
    return { q: `Un sac contient ${na} billes ${a[1]}, ${nb} ${b[1]} et ${ne} ${e[1]}. Quelle est la probabilité de tirer une bille ${b[0]} ?`,
             s: `${na} + ${nb} + ${ne} = ${t} billes. p = ${simpl(nb, t)}.` }; } });
  M.push({ d: "M", g() { const t = pick([10, 20, 25, 50]), n = ri(1, t - 1);
    return { q: `Un sac contient ${t} billes dont ${n} vertes. Donne la probabilité de tirer une bille verte sous forme de fraction simplifiée, puis en écriture décimale si c'est possible.`,
             s: `p = ${simpl(n, t)}${dec(n, t) ? `, soit ${dec(n, t)}` : `. Cette fraction n'a pas d'écriture décimale exacte.`}` }; } });
  M.push({ d: "D", g() { const s = sac(3, 15), t = s.na + s.nb, k = ri(1, 5);
    return { q: `Un sac contient ${s.na} billes ${s.a[1]} et ${s.nb} billes ${s.b[1]}. On ajoute ${k} billes ${s.a[1]}. Comment évolue la probabilité de tirer une bille ${s.a[0]} ?`,
             s: `Avant : ${simpl(s.na, t)}.\nAprès : ${simpl(s.na + k, t + k)}.\nLa probabilité AUGMENTE : on a ajouté des billes favorables.` }; } });
  M.push({ d: "D", g() { const na = ri(3, 10), nb = ri(3, 10), t = na + nb;
    return { q: `Un sac contient ${na} billes rouges et ${nb} bleues. Combien faut-il ajouter de billes rouges pour que la probabilité de tirer une rouge atteigne 1/2 ?`,
             s: `Il faut autant de rouges que de bleues : ${nb} − ${na} = ${nb - na}.\n${nb > na ? `En ajoutant ${nb - na} billes rouges, on obtient ${nb} rouges sur ${2 * nb}, soit 1/2.`
               : nb === na ? `Aucune : la probabilité vaut déjà ${fr(na, t)} = 1/2.` : `Il y a déjà plus de rouges que de bleues : la probabilité dépasse 1/2, on ne peut pas y revenir en AJOUTANT des rouges.`}` }; } });
  M.push({ d: "D", g() { const na = ri(2, 9), nb = ri(2, 9), t = na + nb; const el = pick(PRENOMS);
    return { q: `Un sac contient ${na} billes rouges et ${nb} bleues. ${el} annonce que la probabilité de tirer une rouge vaut ${fr(na, nb)}. Explique son erreur.`,
             s: `${el} a comparé les rouges aux BLEUES au lieu de les comparer au TOTAL.\nUne probabilité s'écrit favorables ÷ total : p = ${simpl(na, t)}.` }; } });
  M.push({ d: "D", g() { const na = ri(2, 9), nb = ri(2, 9), ne = ri(2, 9), t = na + nb + ne;
    return { q: `Un sac contient ${na} billes rouges, ${nb} bleues et ${ne} vertes. Vérifie que la somme des probabilités des trois couleurs vaut 1.`,
             s: `p(rouge) = ${fr(na, t)}, p(bleue) = ${fr(nb, t)}, p(verte) = ${fr(ne, t)}.\nSomme : (${na} + ${nb} + ${ne}) ÷ ${t} = ${t}/${t} = 1. C'est toujours le cas quand on a listé TOUTES les issues.` }; } });
  M.push({ d: "D", g() { const t = pick([12, 15, 18, 20, 24]), n = ri(2, t - 2);
    return { q: `Dans un sac de ${t} billes, la probabilité de tirer une bille noire vaut ${fr(n, t)}. Combien y a-t-il de billes noires ?`,
             s: `${fr(n, t)} de ${t}, c'est ${R(n, t).n} × (${t} ÷ ${R(n, t).d}) = ${n} billes noires.` }; } });
  M.push({ d: "D", g() { const na = ri(3, 12), nb = ri(3, 12), t = na + nb;
    return { q: `Un sac contient ${na} billes rouges et ${nb} bleues. On retire une bille bleue. La probabilité de tirer une rouge augmente-t-elle ou diminue-t-elle ?`,
             s: `Avant : ${simpl(na, t)}. Après : ${simpl(na, t - 1)}.\nElle AUGMENTE : le nombre de rouges ne change pas, mais le total diminue.` }; } });
  return M;
};

/* ── Probabilité avec un dé ── */
FAM["Probabilité avec un dé"] = () => {
  const M = [];
  /* le dé n'a pas toujours 6 faces : sans cette variation, les questions
     faciles s'épuisent avant d'atteindre le quota */
  const DES = [4, 6, 8, 10, 12, 20];
  M.push({ d: "F", g() { const n = pick(DES), k = ri(1, n);
    return { q: `On lance un dé équilibré à ${n} faces. Quelle est la probabilité d'obtenir ${k} ?`, s: `p = 1/${n}.` }; } });
  M.push({ d: "F", g() { const n = pick(DES), pair = alea() > .5, fav = [];
    for (let i = 1; i <= n; i++) if ((i % 2 === 0) === pair) fav.push(i);
    return { q: `On lance un dé équilibré à ${n} faces. Quelle est la probabilité d'obtenir un nombre ${pair ? "pair" : "impair"} ?`,
             s: `Issues favorables : ${fav.join(", ")} → p = ${simpl(fav.length, n)}.` }; } });
  M.push({ d: "F", g() { const n = pick(DES), k = ri(1, n - 1), fav = [];
    for (let i = 1; i <= n; i++) if (i > k) fav.push(i);
    return { q: `On lance un dé équilibré à ${n} faces. Quelle est la probabilité d'obtenir un nombre strictement supérieur à ${k} ?`,
             s: `Issues favorables : ${fav.join(", ")} → p = ${simpl(fav.length, n)}.` }; } });
  M.push({ d: "M", g() { const n = pick([8, 10, 12, 20]), k = ri(1, n);
    return { q: `On lance un dé équilibré à ${n} faces, numérotées de 1 à ${n}. Quelle est la probabilité d'obtenir ${k} ?`,
             s: `p = 1/${n}.` }; } });
  M.push({ d: "M", g() { const m = pick([2, 3, 4]), fav = [];
    for (let i = 1; i <= 6; i++) if (i % m === 0) fav.push(i);
    return { q: `On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un multiple de ${m} ?`,
             s: `Multiples de ${m} entre 1 et 6 : ${fav.join(", ")} → p = ${simpl(fav.length, 6)}.` }; } });
  M.push({ d: "M", g() { const n = pick([10, 12, 20]), m = pick([3, 4, 5]), fav = [];
    for (let i = 1; i <= n; i++) if (i % m === 0) fav.push(i);
    return { q: `On lance un dé équilibré à ${n} faces. Quelle est la probabilité d'obtenir un multiple de ${m} ?`,
             s: `Multiples de ${m} de 1 à ${n} : ${fav.join(", ")} → p = ${simpl(fav.length, n)}.` }; } });
  M.push({ d: "D", g() { const a = ri(1, 3), b = ri(4, 6), fav = [];
    for (let i = 1; i <= 6; i++) if (i >= a && i <= b) fav.push(i);
    return { q: `On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre compris entre ${a} et ${b} inclus ?`,
             s: `Issues favorables : ${fav.join(", ")} → p = ${simpl(fav.length, 6)}.` }; } });
  M.push({ d: "D", g() { const prem = [2, 3, 5];
    return { q: `On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre premier ?`,
             s: `Nombres premiers de 1 à 6 : ${prem.join(", ")}. Attention, 1 n'est pas premier.\np = ${simpl(3, 6)}.` }; } });
  M.push({ d: "D", g() { const n = pick([12, 20]), fav = [];
    for (let i = 1; i <= n; i++) { let p = i > 1; for (let j = 2; j * j <= i; j++) if (i % j === 0) p = false; if (p) fav.push(i); }
    return { q: `On lance un dé équilibré à ${n} faces. Quelle est la probabilité d'obtenir un nombre premier ?`,
             s: `Nombres premiers de 1 à ${n} : ${fav.join(", ")} → ${fav.length} issues.\np = ${simpl(fav.length, n)}.` }; } });
  M.push({ d: "D", g() { const el = pick(PRENOMS), k = ri(1, 6);
    return { q: `${el} lance un dé équilibré et obtient ${k} trois fois de suite. Il en conclut que le prochain lancer a moins de chances de donner ${k}. Qu'en penses-tu ?`,
             s: `Il a tort. Le dé n'a pas de mémoire : chaque lancer est indépendant des précédents.\nLa probabilité d'obtenir ${k} reste 1/6 à chaque fois.` }; } });
  M.push({ d: "D", g() { const fav = [1, 2, 3, 4, 6];
    return { q: `On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un diviseur de 12 ?`,
             s: `Diviseurs de 12 parmi 1 à 6 : ${fav.join(", ")} — seul 5 n'en est pas un.\np = ${simpl(5, 6)}.` }; } });
  M.push({ d: "D", g() { const n = pick([6, 10, 12]);
    return { q: `On lance un dé équilibré à ${n} faces. Quelle est la probabilité d'obtenir un nombre supérieur ou égal à 1 ? Et la probabilité d'obtenir 0 ?`,
             s: `Toutes les ${n} faces conviennent : p = 1, c'est un événement CERTAIN.\nAucune face ne porte 0 : p = 0, c'est un événement IMPOSSIBLE.` }; } });
  return M;
};

/* ── Probabilité d'un événement ── */
FAM["Probabilité d'un événement"] = () => {
  const M = [];
  M.push({ d: "F", g() { const k = ri(2, 5), fav = [];
    for (let i = 1; i <= 6; i++) if (i <= k) fav.push(i);
    return { q: `On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre inférieur ou égal à ${k} ?`,
             s: `Issues favorables : ${fav.join(" et ")}. p = ${simpl(fav.length, 6)}.` }; } });
  M.push({ d: "F", g() { const t = ri(8, 20), n = ri(2, t - 2);
    return { q: `Une urne contient ${t} jetons dont ${n} gagnants. Quelle est la probabilité de l'événement « tirer un jeton gagnant » ?`,
             s: `p = ${simpl(n, t)}.` }; } });
  M.push({ d: "F", g() { const jours = ri(2, 6);
    return { q: `On choisit au hasard un jour de la semaine. Quelle est la probabilité de l'événement « tomber sur un jour de week-end » ?`,
             s: `2 jours favorables (samedi et dimanche) sur 7. p = 2/7.` }; } });
  M.push({ d: "M", g() { const n = ri(20, 40), a = ri(5, 15);
    return { q: `Dans une classe de ${n} élèves, ${a} sont demi-pensionnaires. On interroge un élève au hasard. Quelle est la probabilité de l'événement « l'élève est demi-pensionnaire » ?`,
             s: `p = ${simpl(a, n)}.` }; } });
  M.push({ d: "M", g() { const t = pick([26]), v = 6;
    return { q: `On choisit au hasard une lettre de l'alphabet. Quelle est la probabilité de l'événement « la lettre est une voyelle » ? (a, e, i, o, u, y)`,
             s: `6 voyelles sur 26 lettres. p = ${simpl(6, 26)}.` }; } });
  M.push({ d: "M", g() { const n = ri(30, 60), a = ri(10, 25), b = ri(5, 15);
    if (a + b > n) return null;
    return { q: `Dans un groupe de ${n} personnes, ${a} pratiquent le football et ${b} le tennis, sans qu'aucune ne pratique les deux. On en choisit une au hasard. Quelle est la probabilité de l'événement « la personne pratique un de ces deux sports » ?`,
             s: `${a} + ${b} = ${a + b} personnes favorables sur ${n}.\np = ${simpl(a + b, n)}.` }; } });
  M.push({ d: "D", g() { const n = ri(1, 30);
    return { q: `On choisit au hasard un nombre entier entre 1 et 30. Quelle est la probabilité de l'événement « le nombre est un multiple de 3 ou de 5 » ?`,
             s: `Multiples de 3 : 10 nombres. Multiples de 5 : 6 nombres.\nLes multiples de 15 sont comptés deux fois : 15 et 30, soit 2 nombres.\nFavorables : 10 + 6 − 2 = 14. p = ${simpl(14, 30)}.` }; } });
  M.push({ d: "D", g() { const t = ri(10, 25), a = ri(2, 6), b = ri(2, 6);
    if (a + b >= t) return null;
    return { q: `Une urne contient ${t} boules : ${a} portent la lettre A, ${b} la lettre B, les autres la lettre C. Quelle est la probabilité de l'événement « ne pas tirer un C » ?`,
             s: `Boules C : ${t} − ${a} − ${b} = ${t - a - b}.\nNe pas tirer un C : ${a} + ${b} = ${a + b} favorables. p = ${simpl(a + b, t)}.\nOn pouvait aussi faire 1 − ${fr(t - a - b, t)} = ${fr(a + b, t)}.` }; } });
  M.push({ d: "D", g() { const n = ri(20, 36), a = ri(8, 16);
    return { q: `Dans une classe de ${n} élèves, ${a} sont des filles. On interroge un élève au hasard. Compare la probabilité de l'événement « c'est une fille » et celle de son contraire.`,
             s: `p(fille) = ${simpl(a, n)}.\np(garçon) = ${simpl(n - a, n)}, soit 1 − ${fr(a, n)}.\n${a > n - a ? "L'événement « c'est une fille » est le plus probable." : a < n - a ? "L'événement « c'est un garçon » est le plus probable." : "Les deux sont également probables."}` }; } });
  M.push({ d: "D", g() { const t = ri(12, 30);
    return { q: `Une urne contient ${t} boules numérotées de 1 à ${t}. Quelle est la probabilité de l'événement « obtenir un nombre à deux chiffres » ?`,
             s: `Les nombres à deux chiffres vont de 10 à ${t}, soit ${t - 9} boules.\np = ${simpl(t - 9, t)}.` }; } });
  M.push({ d: "D", g() { const el = pick(PRENOMS), t = ri(10, 20), n = ri(2, t - 2);
    return { q: `Une urne contient ${t} boules dont ${n} noires. ${el} affirme que la probabilité de tirer une boule noire vaut ${virg(Math.round(n / t * 100))} %. A-t-il raison ?`,
             s: `p = ${simpl(n, t)}${dec(n, t) ? ` = ${dec(n, t)}` : ""}, soit ${virg(Math.round(n / t * 1000) / 10)} %.\n${Math.abs(Math.round(n / t * 100) - n / t * 100) < 0.05 ? "Oui, sa valeur est exacte." : "Sa valeur est arrondie : elle est proche, mais pas exacte."}` }; } });
  M.push({ d: "D", g() { const t = ri(10, 24), n = ri(1, t - 1);
    return { q: `Un événement a une probabilité de ${fr(n, t)}. Est-il plus probable ou moins probable que son contraire ?`,
             s: `Son contraire a pour probabilité 1 − ${fr(n, t)} = ${fr(t - n, t)}.\n${n > t - n ? `${fr(n, t)} > ${fr(t - n, t)} : l'événement est PLUS probable que son contraire.` : n < t - n ? `${fr(n, t)} < ${fr(t - n, t)} : l'événement est MOINS probable que son contraire.` : `Les deux valent 1/2 : ils sont également probables.`}` }; } });
  return M;
};

/* ── Les issues d'une expérience ── */
FAM["Les issues d'une expérience"] = () => {
  const M = [];
  M.push({ d: "F", g() { const o = pick(["une pièce de monnaie équilibrée", "une pièce de 1 € équilibrée", "un jeton à deux faces équilibré"]);
    return { q: `On lance ${o}. Quelles sont les issues possibles ? Quelle est la probabilité de chacune ?`,
             s: `Deux issues : pile et face. Chacune a une probabilité de 1/2.` }; } });
  M.push({ d: "F", g() { const n = ri(3, 9), o = pick(["cartes", "jetons", "tickets", "étiquettes"]);
    return { q: `On tire au hasard ${o.slice(0, -1)} parmi ${n} ${o} tous différents. Combien y a-t-il d'issues ? Quelle est la probabilité de chacune ?`,
             s: `${n} issues, une par ${o.slice(0, -1)}. Chacune a une probabilité de 1/${n}.` }; } });
  M.push({ d: "F", g() { const n = pick([6, 8, 10, 12, 20]);
    return { q: `On lance un dé équilibré à ${n} faces. Combien y a-t-il d'issues ? Quelle est la probabilité de chacune ?`,
             s: `${n} issues, les nombres de 1 à ${n}. Chacune a une probabilité de 1/${n}.` }; } });
  M.push({ d: "F", g() { const c = [...COUL].slice(0, ri(3, 5));
    return { q: `Une roue équilibrée comporte ${c.length} secteurs identiques de couleurs différentes : ${c.map(x => x[0]).join(", ")}. Quelles sont les issues ? Quelle est la probabilité de chacune ?`,
             s: `${c.length} issues, une par couleur. Chacune a une probabilité de 1/${c.length}, car les secteurs sont identiques.` }; } });
  M.push({ d: "M", g() { const n = ri(3, 8);
    return { q: `Une urne contient ${n} boules de couleurs toutes différentes. On en tire une au hasard. Quel est l'univers de cette expérience ? Combien compte-t-il d'issues ?`,
             s: `L'univers est l'ensemble des ${n} couleurs possibles : il compte ${n} issues.\nChacune a une probabilité de 1/${n}.` }; } });
  M.push({ d: "M", g() { const n = pick([4, 6, 8, 10, 12, 20]);
    return { q: `On lance une pièce puis un dé à ${n} faces. Combien cette expérience compte-t-elle d'issues ?`,
             s: `Pour chacune des 2 faces de la pièce, le dé offre ${n} possibilités.\n2 × ${n} = ${2 * n} issues.` }; } });
  M.push({ d: "M", g() { const a = ri(2, 5), b = ri(2, 5);
    return { q: `Un menu propose ${a} entrées et ${b} plats. On choisit une entrée et un plat au hasard. Combien y a-t-il d'issues ?`,
             s: `Pour chacune des ${a} entrées, ${b} plats sont possibles.\n${a} × ${b} = ${a * b} issues.` }; } });
  M.push({ d: "M", g() { const na = ri(2, 5), nb = ri(2, 5);
    return { q: `Un sac contient ${na} boules rouges et ${nb} bleues, indiscernables au toucher. Si l'on s'intéresse seulement à la COULEUR obtenue, combien y a-t-il d'issues ? Sont-elles équiprobables ?`,
             s: `2 issues : rouge et bleue.\nElles ne sont PAS équiprobables : p(rouge) = ${simpl(na, na + nb)} et p(bleue) = ${simpl(nb, na + nb)}${na === nb ? " — ici elles le sont, car il y a autant de boules de chaque couleur" : ""}.` }; } });
  M.push({ d: "D", g() { const n = ri(2, 4);
    return { q: `On lance ${n} pièces de monnaie équilibrées. Combien y a-t-il d'issues ? Sont-elles équiprobables ?`,
             s: `Chaque pièce a 2 résultats possibles : ${Array(n).fill("2").join(" × ")} = ${Math.pow(2, n)} issues.\nElles sont équiprobables : chacune a une probabilité de 1/${Math.pow(2, n)}.` }; } });
  M.push({ d: "D", g() { const n = pick([4, 6, 8]);
    return { q: `On lance deux dés à ${n} faces et on note la SOMME obtenue. Combien y a-t-il d'issues ? Sont-elles équiprobables ?`,
             s: `Les sommes vont de 2 à ${2 * n}, soit ${2 * n - 1} issues.\nElles ne sont PAS équiprobables : la somme ${n + 1} s'obtient de ${n} façons, la somme 2 d'une seule.\nOn ne peut donc pas écrire p = 1/${2 * n - 1}.` }; } });
  M.push({ d: "D", g() { const n = pick([2, 3]), m = pick([4, 6]);
    return { q: `On lance ${n === 2 ? "deux" : "trois"} dés à ${m} faces. Combien y a-t-il d'issues si l'on note les résultats DANS L'ORDRE ?`,
             s: `${Array(n).fill(m).join(" × ")} = ${Math.pow(m, n)} issues équiprobables.\nChacune a une probabilité de 1/${Math.pow(m, n)}.` }; } });
  M.push({ d: "D", g() { const n = ri(3, 6);
    return { q: `Une expérience a ${n} issues équiprobables. Quelle est la probabilité de chacune ? Que vaut leur somme ?`,
             s: `Chaque issue a une probabilité de 1/${n}.\nSomme : ${n} × 1/${n} = 1. La somme des probabilités de toutes les issues vaut toujours 1.` }; } });
  M.push({ d: "D", g() { const el = pick(PRENOMS);
    return { q: `${el} affirme : « il y a deux issues à un match de football, gagner ou perdre, donc la probabilité de gagner est 1/2 ». Que penses-tu de ce raisonnement ?`,
             s: `Deux erreurs. D'abord, le match nul est une troisième issue oubliée.\nEnsuite et surtout, ces issues ne sont pas ÉQUIPROBABLES : la formule favorables ÷ total ne s'applique qu'à des issues qui ont toutes la même chance de se produire.` }; } });
  M.push({ d: "D", g() { const na = ri(2, 6), nb = ri(2, 6), ne = ri(2, 6);
    return { q: `Un sac contient ${na} boules rouges, ${nb} bleues et ${ne} vertes. Décris l'univers de l'expérience « tirer une boule et noter sa couleur », puis donne la probabilité de chaque issue.`,
             s: `Univers : { rouge ; bleue ; verte }, soit 3 issues.\np(rouge) = ${simpl(na, na + nb + ne)}, p(bleue) = ${simpl(nb, na + nb + ne)}, p(verte) = ${simpl(ne, na + nb + ne)}.\nLeur somme vaut 1.` }; } });
  M.push({ d: "D", g() { const n = pick([6, 10, 12]);
    return { q: `On lance un dé à ${n} faces truqué. Peut-on affirmer que chaque issue a une probabilité de 1/${n} ?`,
             s: `Non. La formule favorables ÷ total suppose l'ÉQUIPROBABILITÉ, c'est-à-dire un dé équilibré.\nSur un dé truqué, seule l'expérience — un grand nombre de lancers — permet d'estimer les probabilités.` }; } });
  return M;
};

/* ── L'événement contraire ── */
FAM["L'événement contraire"] = () => {
  const M = [];
  M.push({ d: "F", g() { const n = ri(1, 11), d = 12;
    return { q: `La probabilité d'un événement A est ${fr(n, d)}. Quelle est la probabilité de l'événement contraire ?`,
             s: `p(contraire de A) = 1 − ${fr(n, d)} = ${simpl(d - n, d)}.` }; } });
  M.push({ d: "F", g() { const x = ri(1, 99) / 100;
    return { q: `La probabilité d'un événement A est ${virg(x)}. Calcule la probabilité de son contraire.`,
             s: `1 − ${virg(x)} = ${virg(Math.round((1 - x) * 100) / 100)}.` }; } });
  M.push({ d: "F", g() { const d = pick([5, 8, 10, 20]), n = ri(1, d - 1);
    return { q: `Un événement a une probabilité de ${fr(n, d)}. Quelle est celle de son contraire ?`,
             s: `1 − ${fr(n, d)} = ${simpl(d - n, d)}.` }; } });
  M.push({ d: "M", g() { const t = ri(8, 20), n = ri(2, t - 2);
    return { q: `Une urne contient ${t} boules dont ${n} rouges. Quelle est la probabilité de NE PAS tirer une boule rouge ? Donne les deux méthodes.`,
             s: `Directement : ${t} − ${n} = ${t - n} boules non rouges, p = ${simpl(t - n, t)}.\nPar le contraire : 1 − ${fr(n, t)} = ${fr(t - n, t)}.` }; } });
  M.push({ d: "M", g() { const fav = [5, 6];
    return { q: `On lance un dé équilibré à 6 faces. Quelle est la probabilité de ne pas obtenir un nombre supérieur ou égal à 5 ?`,
             s: `L'événement contraire est « obtenir 5 ou 6 », de probabilité ${simpl(2, 6)}.\np = 1 − 1/3 = 2/3.` }; } });
  M.push({ d: "M", g() { const x = pick([0.15, 0.25, 0.4, 0.62, 0.78]);
    return { q: `La probabilité qu'il pleuve demain est estimée à ${virg(x)}. Quelle est la probabilité qu'il ne pleuve pas ?`,
             s: `1 − ${virg(x)} = ${virg(Math.round((1 - x) * 100) / 100)}.` }; } });
  M.push({ d: "D", g() { const d = pick([9, 15, 16, 25]), n = ri(2, d - 2);
    return { q: `Un événement A a pour probabilité ${fr(n, d)}. Calcule p(contraire de A), puis vérifie que la somme des deux vaut 1.`,
             s: `p(contraire de A) = 1 − ${fr(n, d)} = ${simpl(d - n, d)}.\nVérification : ${fr(n, d)} + ${fr(d - n, d)} = ${d}/${d} = 1.` }; } });
  M.push({ d: "D", g() { const t = ri(15, 30), n = ri(3, 8);
    return { q: `Une urne contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité de ne pas tirer un multiple de ${n} ?`,
             s: `Multiples de ${n} de 1 à ${t} : ${Math.floor(t / n)} jetons.\np(multiple) = ${simpl(Math.floor(t / n), t)}, donc p(pas multiple) = 1 − ${fr(Math.floor(t / n), t)} = ${simpl(t - Math.floor(t / n), t)}.` }; } });
  M.push({ d: "D", g() { const el = pick(PRENOMS), n = ri(1, 9), d = 10;
    return { q: `${el} affirme que si p(A) = ${fr(n, d)}, alors p(contraire de A) = ${fr(d, n)}. Explique son erreur.`,
             s: `${el} a inversé la fraction au lieu de la soustraire à 1.\n${fr(d, n)} ${d / n > 1 ? "dépasse d'ailleurs 1, ce qui est impossible pour une probabilité" : "n'a aucune raison d'être la bonne valeur"}.\np(contraire de A) = 1 − ${fr(n, d)} = ${simpl(d - n, d)}.` }; } });
  M.push({ d: "D", g() { const a = pick([0.2, 0.35, 0.5, 0.7]);
    return { q: `Un événement et son contraire peuvent-ils avoir la même probabilité ? Si oui, laquelle ?`,
             s: `Oui, lorsque chacun vaut 0,5 : leur somme fait bien 1.\nC'est le cas de « pile » et « face » avec une pièce équilibrée.` }; } });
  M.push({ d: "D", g() { const t = ri(20, 40), a = ri(5, 12), b = ri(5, 12);
    if (a + b >= t) return null;
    return { q: `Dans un groupe de ${t} personnes, ${a} portent des lunettes et ${b} des lentilles, sans cumul. Quelle est la probabilité qu'une personne choisie au hasard ne porte ni l'un ni l'autre ?`,
             s: `Personnes concernées : ${a} + ${b} = ${a + b}, de probabilité ${simpl(a + b, t)}.\nL'événement contraire : 1 − ${fr(a + b, t)} = ${simpl(t - a - b, t)}.` }; } });
  M.push({ d: "D", g() { const n = ri(1, 7), d = 8;
    return { q: `On sait que p(contraire de A) = ${fr(n, d)}. Quelle est la probabilité de A ?`,
             s: `p(A) = 1 − ${fr(n, d)} = ${simpl(d - n, d)}.\nLa relation fonctionne dans les deux sens : chacun est le contraire de l'autre.` }; } });
  return M;
};

/* ── La somme des probabilités ── */
FAM["La somme des probabilités"] = () => {
  const M = [];
  const deux = () => { const a = ri(10, 60) / 100, b = ri(10, Math.round((0.9 - a) * 100)) / 100;
    return { a: Math.round(a * 100) / 100, b: Math.round(b * 100) / 100 }; };
  M.push({ d: "F", g() { const { a, b } = deux();
    return { q: `Un sac contient des jetons rouges, bleus et verts. On sait que p(rouge) = ${virg(a)} et p(bleu) = ${virg(b)}. Calcule p(vert).`,
             s: `La somme des probabilités vaut 1 : p(vert) = 1 − ${virg(a)} − ${virg(b)} = ${virg(Math.round((1 - a - b) * 100) / 100)}.` }; } });
  M.push({ d: "F", g() { const d = pick([8, 10, 12]), a = ri(1, d - 2), b = ri(1, d - a - 1);
    return { q: `Une expérience a trois issues A, B et C. On sait que p(A) = ${fr(a, d)} et p(B) = ${fr(b, d)}. Calcule p(C).`,
             s: `p(C) = 1 − ${fr(a, d)} − ${fr(b, d)} = ${simpl(d - a - b, d)}.` }; } });
  M.push({ d: "F", g() { const a = ri(20, 70) / 100;
    return { q: `Une expérience n'a que deux issues. La première a une probabilité de ${virg(Math.round(a * 100) / 100)}. Quelle est celle de la seconde ?`,
             s: `1 − ${virg(Math.round(a * 100) / 100)} = ${virg(Math.round((1 - a) * 100) / 100)}.` }; } });
  M.push({ d: "M", g() { const { a, b } = deux(), c = Math.round((1 - a - b) * 100) / 100;
    return { q: `Une roue a trois secteurs. p(rouge) = ${virg(a)}, p(bleu) = ${virg(b)} et p(vert) = ${virg(c)}. Vérifie que ces valeurs sont cohérentes.`,
             s: `${virg(a)} + ${virg(b)} + ${virg(c)} = ${virg(Math.round((a + b + c) * 100) / 100)}.\nLa somme vaut 1 : les valeurs sont cohérentes.` }; } });
  M.push({ d: "M", g() { const a = ri(20, 45) / 100, b = ri(20, 45) / 100, c = ri(20, 45) / 100;
    const s = Math.round((a + b + c) * 100) / 100;
    if (Math.abs(s - 1) < 0.01) return null;
    return { q: `Un élève annonce : p(A) = ${virg(a)}, p(B) = ${virg(b)}, p(C) = ${virg(c)} pour les trois seules issues d'une expérience. Ces valeurs sont-elles possibles ?`,
             s: `Somme : ${virg(a)} + ${virg(b)} + ${virg(c)} = ${virg(s)}.\nCe n'est pas 1 : ces valeurs sont IMPOSSIBLES. La somme des probabilités de toutes les issues vaut toujours 1.` }; } });
  M.push({ d: "M", g() { const d = pick([10, 20]), a = ri(2, 6), b = ri(2, 6), c = d - a - b;
    if (c < 1) return null;
    return { q: `Une urne contient des boules de trois couleurs. p(rouge) = ${fr(a, d)} et p(verte) = ${fr(c, d)}. Quelle est la probabilité de tirer une boule bleue ?`,
             s: `p(bleue) = 1 − ${fr(a, d)} − ${fr(c, d)} = ${simpl(b, d)}.` }; } });
  M.push({ d: "D", g() { const a = ri(15, 40) / 100, b = ri(15, 40) / 100;
    const c = Math.round((1 - a - b) * 100) / 100;
    if (c <= 0) return null;
    return { q: `Une expérience a quatre issues A, B, C et D. On sait que p(A) = ${virg(a)}, p(B) = ${virg(b)}, et que C et D sont équiprobables. Calcule p(C).`,
             s: `p(C) + p(D) = 1 − ${virg(a)} − ${virg(b)} = ${virg(c)}.\nComme C et D sont équiprobables : p(C) = ${virg(c)} ÷ 2 = ${virg(Math.round(c / 2 * 1000) / 1000)}.` }; } });
  M.push({ d: "D", g() { const d = pick([12, 15, 20]), a = ri(2, 5), b = ri(2, 5);
    return { q: `Une urne contient ${d} boules. ${a} sont rouges, ${b} sont bleues, les autres vertes. Calcule les trois probabilités et vérifie que leur somme vaut 1.`,
             s: `Vertes : ${d} − ${a} − ${b} = ${d - a - b}.\np(rouge) = ${fr(a, d)}, p(bleue) = ${fr(b, d)}, p(verte) = ${fr(d - a - b, d)}.\nSomme : (${a} + ${b} + ${d - a - b}) ÷ ${d} = ${d}/${d} = 1.` }; } });
  M.push({ d: "D", g() { const el = pick(PRENOMS), a = 0.5, b = 0.3, c = 0.4;
    return { q: `${el} propose pour les trois issues d'une expérience : ${virg(a)} ; ${virg(b)} ; ${virg(c)}. Explique pourquoi c'est impossible, puis corrige la troisième valeur.`,
             s: `Somme : ${virg(a)} + ${virg(b)} + ${virg(c)} = ${virg(a + b + c)}, ce qui dépasse 1.\nLa troisième valeur devrait être 1 − ${virg(a)} − ${virg(b)} = ${virg(Math.round((1 - a - b) * 100) / 100)}.` }; } });
  M.push({ d: "D", g() { const k = ri(3, 6);
    return { q: `Une expérience a ${k} issues équiprobables. Sans calculer chaque probabilité, explique pourquoi chacune vaut 1/${k}.`,
             s: `Les ${k} issues ont la même probabilité p, et leur somme vaut 1.\nDonc ${k} × p = 1, d'où p = 1/${k}.` }; } });
  M.push({ d: "D", g() { const a = ri(25, 45) / 100;
    return { q: `Dans une expérience à deux issues, la première est deux fois plus probable que la seconde. Quelles sont les deux probabilités ?`,
             s: `Si la seconde vaut p, la première vaut 2p, et 2p + p = 1.\n3p = 1, donc p = 1/3.\nLes probabilités sont 2/3 et 1/3.` }; } });
  M.push({ d: "D", g() { const d = pick([10, 20, 25]), a = ri(2, 6), b = ri(2, 6), c = ri(2, 6);
    const reste = d - a - b - c;
    if (reste < 1) return null;
    return { q: `Une urne contient ${d} boules de quatre couleurs : ${a} rouges, ${b} bleues, ${c} vertes et le reste en jaune. Calcule p(jaune) de deux façons.`,
             s: `Directement : ${d} − ${a} − ${b} − ${c} = ${reste} boules jaunes, p = ${simpl(reste, d)}.\nPar la somme : 1 − ${fr(a, d)} − ${fr(b, d)} − ${fr(c, d)} = ${fr(reste, d)}.` }; } });
  return M;
};

/* ── L'échelle des probabilités ── */
FAM["L'échelle des probabilités"] = () => {
  const M = [];
  M.push({ d: "F", g() {
    return { q: `On lance un dé à 6 faces. Donne la probabilité : a) d'obtenir un nombre inférieur à 7 b) d'obtenir 0`,
             s: `a) 1 : c'est un événement certain. b) 0 : c'est un événement impossible.` }; } });
  M.push({ d: "F", g() { const x = pick([0, 0.1, 0.5, 0.9, 1]);
    return { q: `Un événement a une probabilité de ${virg(x)}. Est-il impossible, peu probable, aussi probable qu'improbable, très probable, ou certain ?`,
             s: x === 0 ? `IMPOSSIBLE : il ne peut pas se produire.` : x === 1 ? `CERTAIN : il se produit à coup sûr.`
               : x === 0.5 ? `Aussi probable qu'improbable : il a autant de chances de se produire que de ne pas se produire.`
               : x < 0.5 ? `PEU PROBABLE : sa probabilité est proche de 0.` : `TRÈS PROBABLE : sa probabilité est proche de 1.` }; } });
  M.push({ d: "F", g() { const t = ri(8, 20), n = ri(1, 2);
    return { q: `Une urne contient ${t} boules dont ${n} noire${n > 1 ? "s" : ""}. L'événement « tirer une boule noire » est-il probable ou peu probable ?`,
             s: `p = ${simpl(n, t)}${dec(n, t) ? ` = ${dec(n, t)}` : ""}, une valeur proche de 0 : l'événement est PEU PROBABLE.` }; } });
  M.push({ d: "M", g() { const vals = [0, ri(1, 3) / 10, 0.5, ri(7, 9) / 10, 1];
    return { q: `Range ces probabilités de la moins probable à la plus probable : ${[...vals].sort(() => alea() - 0.5).map(virg).join(" ; ")}`,
             s: `${vals.map(virg).join(" < ")}.\n0 marque l'impossible, 1 le certain, 0,5 l'équilibre entre les deux.` }; } });
  M.push({ d: "M", g() { const x = pick([-0.2, 1.4, 2, 1.01]);
    return { q: `Un élève annonce une probabilité de ${virg(x)}. Est-ce possible ?`,
             s: `Non. Une probabilité est toujours comprise entre 0 et 1 : 0 ≤ p ≤ 1.\n${x < 0 ? "Une valeur négative n'a aucun sens." : "Une valeur supérieure à 1 dépasse la certitude, ce qui est impossible."}` }; } });
  M.push({ d: "M", g() { const t = ri(10, 20);
    return { q: `Une urne contient ${t} boules, toutes rouges. Quelle est la probabilité de tirer une boule rouge ? Et une boule verte ?`,
             s: `Rouge : ${t}/${t} = 1, événement CERTAIN.\nVerte : 0/${t} = 0, événement IMPOSSIBLE.` }; } });
  M.push({ d: "D", g() { const a = ri(1, 4) / 10, b = ri(6, 9) / 10;
    return { q: `Deux événements ont pour probabilités ${virg(a)} et ${virg(b)}. Lequel est le plus probable ? De combien leurs chances diffèrent-elles ?`,
             s: `${virg(b)} > ${virg(a)} : le second est le plus probable.\nÉcart : ${virg(Math.round((b - a) * 10) / 10)}.` }; } });
  M.push({ d: "D", g() { const d = pick([4, 5, 8, 10]), n = ri(1, d - 1);
    return { q: `Place la probabilité ${fr(n, d)} sur l'échelle de 0 à 1, et dis si l'événement est plutôt probable ou plutôt improbable.`,
             s: `${fr(n, d)}${dec(n, d) ? ` = ${dec(n, d)}` : ""}.\n${n / d > 0.5 ? `Cette valeur dépasse 0,5 : l'événement est plutôt PROBABLE.` : n / d < 0.5 ? `Cette valeur est inférieure à 0,5 : l'événement est plutôt IMPROBABLE.` : `Cette valeur vaut exactement 0,5 : les deux issues sont également probables.`}` }; } });
  M.push({ d: "D", g() {
    return { q: `Donne un exemple d'événement de probabilité 0 et un exemple de probabilité 1, avec un dé à 6 faces.`,
             s: `Probabilité 0 : « obtenir 7 » — aucune face ne le permet, c'est impossible.\nProbabilité 1 : « obtenir un nombre entre 1 et 6 » — toutes les faces conviennent, c'est certain.` }; } });
  M.push({ d: "D", g() { const el = pick(PRENOMS);
    return { q: `${el} dit : « cet événement a une probabilité de 0, donc il ne se produira jamais ». A-t-il raison ?`,
             s: `Oui, dans le cadre du collège : une probabilité de 0 désigne un événement IMPOSSIBLE.\nAttention toutefois à ne pas confondre avec un événement simplement très rare, dont la probabilité est petite mais non nulle.` }; } });
  M.push({ d: "D", g() { const t = ri(50, 200), n = ri(1, 3);
    return { q: `Une tombola compte ${t} billets, dont ${n} gagnant${n > 1 ? "s" : ""}. Où se situe la probabilité de gagner sur l'échelle de 0 à 1 ?`,
             s: `p = ${simpl(n, t)}${dec(n, t) ? ` = ${dec(n, t)}` : ` ≈ ${virg(Math.round(n / t * 1000) / 1000)}`}.\nUne valeur très proche de 0 : l'événement est très peu probable, sans être impossible.` }; } });
  M.push({ d: "D", g() { const x = pick([0.02, 0.48, 0.52, 0.97]);
    return { q: `Un événement a une probabilité de ${virg(x)}. Que peut-on dire de son contraire sur l'échelle des probabilités ?`,
             s: `p(contraire) = 1 − ${virg(x)} = ${virg(Math.round((1 - x) * 100) / 100)}.\n${x < 0.5 ? "L'événement est peu probable, son contraire est donc très probable." : "L'événement est probable, son contraire l'est donc peu."} Les deux se répondent : leur somme vaut toujours 1.` }; } });
  return M;
};

/* ── Probabilité sur une roue ── */
FAM["Probabilité sur une roue"] = () => {
  const M = [];
  M.push({ d: "F", g() { const t = pick([8, 10, 12, 16, 20]), n = ri(1, t - 1);
    return { q: `Une roue équilibrée comporte ${t} secteurs identiques, dont ${n} rouges. Quelle est la probabilité d'obtenir un secteur rouge ?`,
             s: `p = ${simpl(n, t)}.` }; } });
  M.push({ d: "F", g() { const t = pick([6, 8, 12]), n = ri(1, 3);
    return { q: `Une roue équilibrée a ${t} secteurs identiques dont ${n} gagnant${n > 1 ? "s" : ""}. Quelle est la probabilité de gagner ?`,
             s: `p = ${simpl(n, t)}.` }; } });
  M.push({ d: "F", g() { const t = pick([10, 20]), n = ri(2, t - 2);
    return { q: `Une roue équilibrée comporte ${t} secteurs identiques, dont ${n} bleus. Quelle est la probabilité de NE PAS obtenir un secteur bleu ?`,
             s: `Secteurs non bleus : ${t} − ${n} = ${t - n}. p = ${simpl(t - n, t)}.` }; } });
  M.push({ d: "M", g() { const t = pick([12, 15, 18, 20]), a = ri(2, 6), b = ri(2, 6);
    if (a + b >= t) return null;
    return { q: `Une roue équilibrée a ${t} secteurs identiques : ${a} rouges, ${b} bleus et le reste en vert. Calcule : a) p(rouge) b) p(vert)`,
             s: `Verts : ${t} − ${a} − ${b} = ${t - a - b}.\na) ${simpl(a, t)}\nb) ${simpl(t - a - b, t)}` }; } });
  M.push({ d: "M", g() { const t = pick([8, 12, 16]), n = t / 2;
    return { q: `Une roue équilibrée comporte ${t} secteurs identiques, numérotés de 1 à ${t}. Quelle est la probabilité d'obtenir un numéro pair ?`,
             s: `Numéros pairs : ${n} secteurs sur ${t}. p = ${simpl(n, t)}.` }; } });
  M.push({ d: "M", g() { const t = pick([10, 12, 20]), n = ri(2, 5), lot = ri(2, 10);
    return { q: `Une roue équilibrée a ${t} secteurs identiques dont ${n} gagnants. Sur ${lot * t} parties, combien de fois peut-on espérer gagner ?`,
             s: `p(gagner) = ${simpl(n, t)}.\nSur ${lot * t} parties : ${lot * t} × ${fr(n, t)} = ${lot * n} fois environ.\nC'est une espérance, pas une certitude : le hasard peut donner un peu plus ou un peu moins.` }; } });
  M.push({ d: "D", g() { const t = pick([12, 16, 20, 24]), a = ri(2, 5), b = ri(2, 5), c = ri(2, 5);
    if (a + b + c >= t) return null;
    return { q: `Une roue équilibrée comporte ${t} secteurs identiques : ${a} rouges, ${b} bleus, ${c} verts et le reste en jaune. Quelle couleur est la plus probable ?`,
             s: `Jaunes : ${t} − ${a} − ${b} − ${c} = ${t - a - b - c}.\np(rouge) = ${fr(a, t)}, p(bleu) = ${fr(b, t)}, p(vert) = ${fr(c, t)}, p(jaune) = ${fr(t - a - b - c, t)}.\nLa plus probable est celle qui compte le plus de secteurs : ${[["rouge", a], ["bleu", b], ["vert", c], ["jaune", t - a - b - c]].sort((x, y) => y[1] - x[1])[0][0]}.` }; } });
  M.push({ d: "D", g() { const t = pick([8, 12]), n = ri(2, 4);
    return { q: `Une roue équilibrée a ${t} secteurs identiques dont ${n} gagnants. Combien faudrait-il de secteurs gagnants pour que la probabilité de gagner atteigne 1/2 ?`,
             s: `Il en faudrait la moitié : ${t} ÷ 2 = ${t / 2}.\nIl faudrait donc en ajouter ${t / 2 - n}.` }; } });
  M.push({ d: "D", g() { const t = pick([10, 12, 20]);
    return { q: `Une roue comporte ${t} secteurs qui ne sont PAS de même taille. Peut-on calculer la probabilité d'un secteur avec la formule favorables ÷ total ?`,
             s: `Non. Cette formule exige l'ÉQUIPROBABILITÉ, donc des secteurs identiques.\nIci, un grand secteur a plus de chances d'être atteint qu'un petit : la probabilité dépend de l'ANGLE de chaque secteur, pas de leur nombre.` }; } });
  M.push({ d: "D", g() { const t = pick([12, 18, 24]), a = t / 3;
    return { q: `Une roue équilibrée comporte ${t} secteurs identiques. Un tiers d'entre eux sont rouges. Combien y a-t-il de secteurs rouges ? Quelle est la probabilité d'obtenir un rouge ?`,
             s: `${t} ÷ 3 = ${a} secteurs rouges.\np = ${simpl(a, t)} = 1/3.` }; } });
  M.push({ d: "D", g() { const t = pick([8, 10, 12]), el = pick(PRENOMS);
    return { q: `${el} joue à une roue de ${t} secteurs identiques dont 1 gagnant. Il a perdu ${t - 1} fois de suite et pense que la prochaine partie sera forcément gagnante. Que lui répondre ?`,
             s: `Il a tort. Chaque tour est INDÉPENDANT des précédents : la roue ne garde pas trace des parties passées.\nLa probabilité de gagner reste 1/${t} à chaque tour.` }; } });
  M.push({ d: "D", g() { const t = pick([10, 20]), n = ri(2, 5), prix = ri(1, 4), gain = ri(3, 10);
    return { q: `Une roue de ${t} secteurs identiques compte ${n} secteurs gagnants. Une partie coûte ${prix} € et un gain rapporte ${gain} €. Sur ${t * 10} parties, quel est le bilan attendu ?`,
             s: `Dépense : ${t * 10} × ${prix} = ${t * 10 * prix} €.\nGains attendus : ${t * 10} × ${fr(n, t)} = ${n * 10} parties gagnantes, soit ${n * 10} × ${gain} = ${n * 10 * gain} €.\nBilan : ${n * 10 * gain} − ${t * 10 * prix} = ${n * 10 * gain - t * 10 * prix} € — ${n * 10 * gain - t * 10 * prix >= 0 ? "favorable au joueur" : "défavorable au joueur"}.` }; } });
  return M;
};

/* ── Tirage dans une urne ── */
FAM["Tirage dans une urne"] = () => {
  const M = [];
  const urne = () => { const c = [...COUL]; const a = c.splice(ri(0, 5), 1)[0], b = c.splice(ri(0, 4), 1)[0], e = c.splice(ri(0, 3), 1)[0];
    return { a, b, e, na: ri(2, 8), nb: ri(2, 8), ne: ri(2, 8) }; };
  M.push({ d: "F", g() { const u = urne(), t = u.na + u.nb + u.ne;
    return { q: `Une urne contient ${u.na} boules ${u.a[1]}, ${u.nb} ${u.b[1]} et ${u.ne} ${u.e[1]}, indiscernables au toucher. Quelle est la probabilité de tirer une boule ${u.b[0]} ?`,
             s: `${t} boules en tout. p = ${simpl(u.nb, t)}.` }; } });
  M.push({ d: "F", g() { const u = urne(), t = u.na + u.nb + u.ne;
    return { q: `Une urne contient ${u.na} boules ${u.a[1]}, ${u.nb} ${u.b[1]} et ${u.ne} ${u.e[1]}. Quelle couleur a le plus de chances d'être tirée ?`,
             s: `${t} boules. p(${u.a[0]}) = ${fr(u.na, t)}, p(${u.b[0]}) = ${fr(u.nb, t)}, p(${u.e[0]}) = ${fr(u.ne, t)}.\nLa plus probable est ${[[u.a[0], u.na], [u.b[0], u.nb], [u.e[0], u.ne]].sort((x, y) => y[1] - x[1])[0][0]}.` }; } });
  M.push({ d: "F", g() { const u = urne(), t = u.na + u.nb + u.ne;
    return { q: `Une urne contient ${t} boules dont ${u.na} ${u.a[1]}. Quelle est la probabilité de tirer une boule qui n'est pas ${u.a[0]} ?`,
             s: `${t} − ${u.na} = ${t - u.na} boules. p = ${simpl(t - u.na, t)}.` }; } });
  M.push({ d: "M", g() { const u = urne(), t = u.na + u.nb + u.ne;
    return { q: `Une urne contient ${u.na} boules ${u.a[1]}, ${u.nb} ${u.b[1]} et ${u.ne} ${u.e[1]}, indiscernables au toucher. Calcule : a) p(tirer une ${u.b[0]}) b) p(ne pas tirer une ${u.e[0]})`,
             s: `${t} boules en tout.\na) ${simpl(u.nb, t)}\nb) ${simpl(t - u.ne, t)}, ou 1 − ${fr(u.ne, t)} = ${fr(t - u.ne, t)}.` }; } });
  M.push({ d: "M", g() { const u = urne(), t = u.na + u.nb + u.ne;
    return { q: `Une urne contient ${u.na} boules ${u.a[1]}, ${u.nb} ${u.b[1]} et ${u.ne} ${u.e[1]}. Quelle est la probabilité de tirer une boule ${u.a[0]} ou ${u.b[0]} ?`,
             s: `Favorables : ${u.na} + ${u.nb} = ${u.na + u.nb} boules sur ${t}.\np = ${simpl(u.na + u.nb, t)}.` }; } });
  M.push({ d: "M", g() { const u = urne(), t = u.na + u.nb + u.ne, k = ri(2, 5);
    return { q: `Une urne contient ${u.na} boules ${u.a[1]}, ${u.nb} ${u.b[1]} et ${u.ne} ${u.e[1]}. On retire ${Math.min(k, u.na - 1)} boules ${u.a[1]}. Que devient la probabilité de tirer une boule ${u.a[0]} ?`,
             s: (() => { const r = Math.min(k, u.na - 1);
               return `Avant : ${simpl(u.na, t)}.\nAprès : ${u.na - r} boules ${u.a[1]} sur ${t - r}, soit ${simpl(u.na - r, t - r)}.\nLa probabilité DIMINUE.`; })() }; } });
  M.push({ d: "D", g() { const u = urne(), t = u.na + u.nb + u.ne;
    return { q: `Une urne contient ${u.na} boules ${u.a[1]}, ${u.nb} ${u.b[1]} et ${u.ne} ${u.e[1]}. Combien faut-il ajouter de boules ${u.b[1]} pour que la probabilité d'en tirer une atteigne 1/2 ?`,
             s: (() => { const autres = u.na + u.ne, k = autres - u.nb;
               return k > 0
                 ? `Il faut autant de ${u.b[1]} que d'autres boules : ${autres} − ${u.nb} = ${k} à ajouter.\nOn aurait alors ${autres} boules ${u.b[1]} sur ${2 * autres}, soit 1/2.`
                 : `Il y a déjà ${u.nb} boules ${u.b[1]} pour ${autres} autres : la probabilité vaut ${fr(u.nb, t)}, ${u.nb === autres ? "exactement 1/2" : "déjà supérieure à 1/2"}.`; })() }; } });
  M.push({ d: "D", g() { const t = pick([12, 16, 20, 24]), n = t / 4;
    return { q: `Une urne contient ${t} boules. Un quart d'entre elles sont noires. Combien y en a-t-il ? Quelle est la probabilité d'en tirer une ?`,
             s: `${t} ÷ 4 = ${n} boules noires.\np = ${simpl(n, t)} = 1/4.` }; } });
  M.push({ d: "D", g() { const u = urne(), t = u.na + u.nb + u.ne; const el = pick(PRENOMS);
    return { q: `Une urne contient ${u.na} boules ${u.a[1]} et ${u.nb} ${u.b[1]}. ${el} dit : « il y a deux couleurs, donc la probabilité de tirer une ${u.a[0]} est 1/2 ». Que lui répondre ?`,
             s: `Les deux issues ne sont pas ÉQUIPROBABLES : il n'y a pas le même nombre de boules de chaque couleur.\np(${u.a[0]}) = ${simpl(u.na, u.na + u.nb)}${u.na === u.nb ? " — qui vaut bien 1/2 ici, mais par hasard, pas parce qu'il y a deux couleurs" : ""}.` }; } });
  M.push({ d: "D", g() { const t = pick([10, 20, 25]), n = ri(2, t - 2);
    return { q: `Dans une urne de ${t} boules, la probabilité de tirer une boule blanche est ${fr(n, t)}. Combien y a-t-il de boules blanches, et combien d'autres couleurs ?`,
             s: `Boules blanches : ${n}.\nAutres : ${t} − ${n} = ${t - n}, de probabilité ${simpl(t - n, t)}.` }; } });
  M.push({ d: "D", g() { const u = urne(), t = u.na + u.nb + u.ne;
    return { q: `Une urne contient ${u.na} boules ${u.a[1]}, ${u.nb} ${u.b[1]} et ${u.ne} ${u.e[1]}. On veut que le tirage d'une ${u.e[0]} devienne certain. Que faut-il faire ?`,
             s: `Un événement certain a une probabilité de 1 : il faudrait que TOUTES les boules soient ${u.e[1]}.\nIl faut donc retirer les ${u.na + u.nb} autres boules, ou les remplacer par des ${u.e[1]}.` }; } });
  M.push({ d: "D", g() { const u = urne(), t = u.na + u.nb + u.ne, n = ri(20, 60);
    return { q: `Une urne contient ${u.na} boules ${u.a[1]} sur ${t}. On effectue ${n * t} tirages avec remise. Combien de boules ${u.a[1]} peut-on espérer obtenir ?`,
             s: `p(${u.a[0]}) = ${fr(u.na, t)}.\nSur ${n * t} tirages : ${n * t} × ${fr(u.na, t)} = ${n * u.na} environ.\nCe n'est qu'une estimation : le hasard fait fluctuer le résultat réel autour de cette valeur.` }; } });
  return M;
};

/* ── Le jeu de 32 cartes ── */
FAM["Le jeu de 32 cartes"] = () => {
  const M = [];
  const HAUT = [["as", 4], ["roi", 4], ["dame", 4], ["valet", 4], ["dix", 4], ["neuf", 4], ["huit", 4], ["sept", 4]];
  const COULS = [["trèfle", 8], ["carreau", 8], ["cœur", 8], ["pique", 8]];
  M.push({ d: "F", g() { const h = pick(HAUT);
    return { q: `On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer un ${h[0]} ?`,
             s: `${h[1]} cartes favorables sur 32. p = ${simpl(h[1], 32)}.` }; } });
  M.push({ d: "F", g() { const c = pick(COULS);
    return { q: `On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer un ${c[0]} ?`,
             s: `${c[1]} cartes de ${c[0]} sur 32. p = ${simpl(c[1], 32)}.` }; } });
  M.push({ d: "F", g() { const h = pick(HAUT), c = pick(COULS);
    return { q: `On tire une carte au hasard dans un jeu de 32 cartes. Calcule : a) p(tirer un ${h[0]}) b) p(tirer un ${c[0]})`,
             s: `a) ${simpl(h[1], 32)}\nb) ${simpl(c[1], 32)}` }; } });
  M.push({ d: "M", g() { const h = pick(HAUT), c = pick(COULS);
    return { q: `On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer le ${h[0]} de ${c[0]} ?`,
             s: `Une seule carte convient. p = 1/32.` }; } });
  M.push({ d: "M", g() {
    return { q: `On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer une figure (roi, dame ou valet) ?`,
             s: `3 hauteurs × 4 couleurs = 12 figures. p = ${simpl(12, 32)}.` }; } });
  M.push({ d: "M", g() {
    return { q: `On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer une carte rouge (cœur ou carreau) ?`,
             s: `8 + 8 = 16 cartes rouges sur 32. p = ${simpl(16, 32)} = 1/2.` }; } });
  M.push({ d: "D", g() { const h = pick(HAUT), c = pick(COULS);
    return { q: `On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer un ${h[0]} OU un ${c[0]} ?`,
             s: `${h[1]} ${h[0]}s et ${c[1]} ${c[0]}s, mais le ${h[0]} de ${c[0]} est compté deux fois.\nFavorables : ${h[1]} + ${c[1]} − 1 = ${h[1] + c[1] - 1}. p = ${simpl(h[1] + c[1] - 1, 32)}.` }; } });
  M.push({ d: "D", g() { const c = pick(COULS);
    return { q: `On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de NE PAS tirer un ${c[0]} ?`,
             s: `p(${c[0]}) = ${simpl(c[1], 32)}, donc p(pas ${c[0]}) = 1 − 1/4 = ${simpl(24, 32)}.` }; } });
  M.push({ d: "D", g() {
    return { q: `On tire une carte au hasard dans un jeu de 32 cartes. Compare la probabilité de tirer un as et celle de tirer un pique.`,
             s: `p(as) = ${simpl(4, 32)} et p(pique) = ${simpl(8, 32)}.\n1/8 < 1/4 : tirer un pique est deux fois plus probable.` }; } });
  M.push({ d: "D", g() { const n = ri(2, 6);
    return { q: `On retire les ${n} premières cartes d'un jeu de 32, dont ${Math.min(n, 4)} as. On tire une carte parmi celles qui restent. Quelle est la probabilité d'obtenir un as ?`,
             s: `As restants : 4 − ${Math.min(n, 4)} = ${4 - Math.min(n, 4)}.\nCartes restantes : 32 − ${n} = ${32 - n}.\np = ${simpl(4 - Math.min(n, 4), 32 - n)}.` }; } });
  M.push({ d: "D", g() { const el = pick(PRENOMS);
    return { q: `${el} affirme que dans un jeu de 32 cartes, la probabilité de tirer un roi vaut 1/8 car il y a 8 hauteurs différentes. Son résultat est-il correct ? Et son raisonnement ?`,
             s: `Le RÉSULTAT est correct : p(roi) = ${simpl(4, 32)} = 1/8.\nLe RAISONNEMENT est acceptable ici, car les 8 hauteurs ont chacune 4 cartes : elles sont donc équiprobables. Mais il faut le vérifier, ce n'est pas toujours le cas.` }; } });
  M.push({ d: "D", g() { const c = pick(COULS);
    return { q: `On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer une figure de ${c[0]} ?`,
             s: `Figures de ${c[0]} : roi, dame, valet, soit 3 cartes.\np = ${simpl(3, 32)}.` }; } });
  return M;
};

/* ── Dé et pièce ── */
FAM["Dé et pièce"] = () => {
  const M = [];
  /* Le nombre de faces varie : sans cela, les énoncés se répètent trop vite
     et la famille ne peut pas atteindre 100 exercices distincts. */
  const DES = [4, 6, 8, 10, 12, 20];
  M.push({ d: "F", g() { const n = pick(DES), k = ri(1, n), f = pick(["pile", "face"]);
    return { q: `On lance un dé à ${n} faces puis une pièce. Quelle est la probabilité d'obtenir « ${k} puis ${f} » ?`,
             s: `${n} × 2 = ${2 * n} issues équiprobables. Une seule convient : p = 1/${2 * n}.` }; } });
  M.push({ d: "F", g() { const n = pick(DES);
    return { q: `On lance un dé à ${n} faces puis une pièce. Combien y a-t-il d'issues au total ?`,
             s: `Pour chacune des ${n} faces du dé, la pièce offre 2 possibilités.\n${n} × 2 = ${2 * n} issues.` }; } });
  M.push({ d: "F", g() { const n = pick(DES), k = ri(1, n), f = pick(["pile", "face"]);
    return { q: `On lance un dé à ${n} faces puis une pièce. 1) Combien y a-t-il d'issues ? 2) Quelle est la probabilité d'obtenir « ${k} puis ${f} » ?`,
             s: `1) ${n} × 2 = ${2 * n} issues. 2) p = 1/${2 * n}.` }; } });
  M.push({ d: "M", g() { const n = pick(DES), f = pick(["pile", "face"]);
    return { q: `On lance un dé à ${n} faces puis une pièce. Quelle est la probabilité d'obtenir un nombre pair puis ${f} ?`,
             s: `Nombres pairs de 1 à ${n} : ${n / 2} possibilités, chacune associée à ${f}.\n${n / 2} issues favorables sur ${2 * n} : p = ${simpl(n / 2, 2 * n)}.` }; } });
  M.push({ d: "M", g() { const n = pick(DES), k = ri(1, n);
    return { q: `On lance un dé à ${n} faces puis une pièce. Quelle est la probabilité d'obtenir ${k}, quel que soit le résultat de la pièce ?`,
             s: `2 issues favorables sur ${2 * n} : (${k} ; pile) et (${k} ; face).\np = ${simpl(2, 2 * n)} = 1/${n} — c'est bien la probabilité d'obtenir ${k} au dé.` }; } });
  M.push({ d: "M", g() { const n = pick([4, 8, 10]);
    return { q: `On lance un dé à ${n} faces puis une pièce. Combien y a-t-il d'issues ? Quelle est la probabilité de chacune ?`,
             s: `${n} × 2 = ${2 * n} issues équiprobables, chacune de probabilité 1/${2 * n}.` }; } });
  M.push({ d: "D", g() { const n = pick(DES), k = ri(2, n - 1), f = pick(["pile", "face"]);
    return { q: `On lance un dé à ${n} faces puis une pièce. Quelle est la probabilité d'obtenir un nombre supérieur ou égal à ${k} ET ${f} ?`,
             s: `Nombres ≥ ${k} : ${n - k + 1} possibilités, chacune associée à ${f}.\n${n - k + 1} issues favorables sur ${2 * n} : p = ${simpl(n - k + 1, 2 * n)}.` }; } });
  M.push({ d: "D", g() { const n = pick(DES), k = ri(1, n), f = pick(["pile", "face"]);
    return { q: `On lance un dé à ${n} faces puis une pièce. Quelle est la probabilité de NE PAS obtenir « ${k} puis ${f} » ?`,
             s: `p(${k} puis ${f}) = 1/${2 * n}.\nPar l'événement contraire : 1 − 1/${2 * n} = ${simpl(2 * n - 1, 2 * n)}.` }; } });
  M.push({ d: "D", g() { const n = pick(DES), m = pick([2, 3, 4]), f = pick(["pile", "face"]);
    const fav = []; for (let i = m; i <= n; i += m) fav.push(i);
    if (!fav.length) return null;
    return { q: `On lance un dé à ${n} faces puis une pièce. Dresse la liste des issues favorables à « obtenir un multiple de ${m} puis ${f} », puis calcule la probabilité.`,
             s: `Multiples de ${m} : ${fav.join(", ")}.\nIssues favorables : ${fav.map(x => `(${x} ; ${f})`).join(", ")}, soit ${fav.length} sur ${2 * n}.\np = ${simpl(fav.length, 2 * n)}.` }; } });
  M.push({ d: "D", g() { const el = pick(PRENOMS);
    return { q: `${el} affirme que la probabilité d'obtenir « 6 puis face » vaut 1/6 + 1/2. Explique son erreur.`,
             s: `Pour deux événements qui s'enchaînent, les probabilités se MULTIPLIENT, elles ne s'additionnent pas.\np = 1/6 × 1/2 = 1/12.\nSon calcul donnerait d'ailleurs 2/3, une valeur bien trop grande pour une issue unique sur 12.` }; } });
  M.push({ d: "D", g() {
    return { q: `On lance un dé à 6 faces puis une pièce. Quelle est la probabilité d'obtenir un nombre impair OU pile ?`,
             s: `Impairs : 1, 3, 5 → 6 issues (avec pile ou face).\nPile : 6 issues (avec chacune des 6 faces).\nComptées deux fois : (1;pile), (3;pile), (5;pile) → 3 issues.\nFavorables : 6 + 6 − 3 = 9 sur 12. p = ${simpl(9, 12)}.` }; } });
  M.push({ d: "D", g() {
    return { q: `On lance une pièce puis un dé à 6 faces. Le résultat de la pièce influence-t-il celui du dé ? Qu'est-ce que cela change pour le calcul ?`,
             s: `Non : les deux lancers sont INDÉPENDANTS.\nC'est ce qui autorise à multiplier les probabilités : p(pile puis 6) = 1/2 × 1/6 = 1/12.` }; } });
  return M;
};

/* ── Deux pièces de monnaie ── */
FAM["Deux pièces de monnaie"] = () => {
  const M = [];
  /* le nombre de pièces et la face visée varient : deux pièces seules ne
     donnent qu'une poignée d'énoncés distincts */
  const PIECES = ["pièces équilibrées", "pièces de 1 € équilibrées", "pièces de 2 € équilibrées", "jetons à deux faces équilibrés"];
  const NOM = n => n === 2 ? "deux" : n === 3 ? "trois" : "quatre";
  const face = () => pick([["pile", "P"], ["face", "F"]]);
  M.push({ d: "F", g() { const o = pick(PIECES), f = face();
    return { q: `On lance deux ${o}. Quelle est la probabilité d'obtenir deux « ${f[0]} » ?`,
             s: `Issues : PP, PF, FP, FF (équiprobables). p(${f[1]}${f[1]}) = 1/4.` }; } });
  M.push({ d: "F", g() { const o = pick(PIECES);
    return { q: `On lance deux ${o}. Quelles sont les issues possibles ?`,
             s: `Quatre issues équiprobables : PP, PF, FP et FF. Chacune a une probabilité de 1/4.` }; } });
  M.push({ d: "F", g() { const o = pick(PIECES);
    return { q: `On lance deux ${o}. Quelle est la probabilité d'obtenir deux résultats identiques ?`,
             s: `Issues favorables : PP et FF, soit 2 sur 4. p = ${simpl(2, 4)} = 1/2.` }; } });
  M.push({ d: "F", g() { const n = pick([2, 3, 4]), o = pick(PIECES);
    return { q: `On lance ${NOM(n)} ${o}. Combien y a-t-il d'issues possibles ?`,
             s: `${Array(n).fill("2").join(" × ")} = ${Math.pow(2, n)} issues équiprobables.` }; } });
  M.push({ d: "M", g() { const o = pick(PIECES), f = face();
    return { q: `On lance deux ${o}. Quelle est la probabilité d'obtenir exactement un « ${f[0]} » ?`,
             s: `Issues favorables : PF et FP, soit 2 sur 4.\np = ${simpl(2, 4)} = 1/2. Attention à ne pas oublier que l'ordre distingue ces deux issues.` }; } });
  M.push({ d: "M", g() { const o = pick(PIECES), f = face();
    return { q: `On lance deux ${o}. Quelle est la probabilité d'obtenir au moins un « ${f[0]} » ?`,
             s: `L'événement contraire est « aucun ${f[0]} », une seule issue sur 4, de probabilité 1/4.\np = 1 − 1/4 = ${simpl(3, 4)}.` }; } });
  M.push({ d: "M", g() { const n = pick([3, 4]), o = pick(PIECES), f = face();
    return { q: `On lance ${NOM(n)} ${o}. Quelle est la probabilité d'obtenir ${NOM(n)} fois « ${f[0]} » ?`,
             s: `${Math.pow(2, n)} issues équiprobables, une seule convient.\np = 1/${Math.pow(2, n)}.` }; } });
  M.push({ d: "M", g() { const el = pick(PRENOMS);
    return { q: `${el} affirme qu'il y a trois issues au lancer de deux pièces : deux piles, deux faces, ou un de chaque — donc que chacune vaut 1/3. Que lui répondre ?`,
             s: `Ces trois résultats existent bien, mais ils ne sont pas ÉQUIPROBABLES.\n« Un de chaque » s'obtient de deux façons (PF et FP), les deux autres d'une seule.\np(deux piles) = 1/4, p(deux faces) = 1/4, p(un de chaque) = 2/4 = 1/2.` }; } });
  M.push({ d: "D", g() { const n = pick([3, 4]), o = pick(PIECES), f = face();
    return { q: `On lance ${NOM(n)} ${o}. Combien y a-t-il d'issues ? Quelle est la probabilité d'obtenir ${NOM(n)} fois « ${f[0]} » ?`,
             s: `${Array(n).fill("2").join(" × ")} = ${Math.pow(2, n)} issues équiprobables.\np = 1/${Math.pow(2, n)}.` }; } });
  M.push({ d: "D", g() { const o = pick(PIECES), f = face();
    return { q: `On lance trois ${o}. Quelle est la probabilité d'obtenir exactement deux « ${f[0]} » ?`,
             s: `Sur 8 issues, trois conviennent : le « ${f[0]} » manquant peut être la première, la deuxième ou la troisième pièce.\np = 3/8.` }; } });
  M.push({ d: "D", g() { const o = pick(PIECES), f = face();
    return { q: `On lance quatre ${o}. Quelle est la probabilité d'obtenir au moins un « ${f[0]} » ?`,
             s: `L'événement contraire est « aucun ${f[0]} » : une seule issue sur 16, de probabilité 1/16.\np = 1 − 1/16 = ${simpl(15, 16)}.` }; } });
  M.push({ d: "D", g() {
    return { q: `On lance deux pièces équilibrées. Quelle est la probabilité de n'obtenir aucun « pile » ? Vérifie avec l'événement contraire.`,
             s: `Une seule issue favorable : FF. p = 1/4.\nContraire « au moins un pile » : 1 − 1/4 = 3/4, ce qui correspond bien à PP, PF et FP.` }; } });
  M.push({ d: "D", g() { const n = ri(20, 50);
    return { q: `On lance deux pièces équilibrées ${4 * n} fois. Combien de fois peut-on espérer obtenir « deux pile » ?`,
             s: `p(PP) = 1/4.\n${4 * n} × 1/4 = ${n} fois environ.\nC'est une espérance : le résultat réel fluctue autour de cette valeur.` }; } });
  M.push({ d: "D", g() {
    return { q: `On lance deux pièces, l'une équilibrée et l'autre truquée. Peut-on encore dire que les quatre issues sont équiprobables ?`,
             s: `Non. L'équiprobabilité des quatre issues suppose que CHAQUE pièce donne pile et face avec la même probabilité.\nAvec une pièce truquée, il faut connaître ses probabilités et les multiplier.` }; } });
  M.push({ d: "D", g() {
    return { q: `On lance deux pièces équilibrées. Montre que la somme des probabilités des quatre issues vaut 1.`,
             s: `Chaque issue a une probabilité de 1/4.\n1/4 + 1/4 + 1/4 + 1/4 = 4/4 = 1. C'est vrai pour toute expérience : la somme des probabilités de toutes les issues vaut 1.` }; } });
  return M;
};

/* ── Deux tirages avec remise (problème) ── */
FAM["Deux tirages avec remise"] = () => {
  const M = [];
  const urne = () => ({ a: ri(2, 5), b: ri(2, 5) });
  M.push({ d: "F", g() { const u = urne(), t = u.a + u.b;
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. On tire une boule, on la remet, puis on tire à nouveau. Quelle est la probabilité d'obtenir deux boules rouges ?`,
             s: `À chaque tirage, p(rouge) = ${fr(u.a, t)}.\np(deux rouges) = ${fr(u.a, t)} × ${fr(u.a, t)} = ${simpl(u.a * u.a, t * t)}.` }; } });
  M.push({ d: "F", g() { const u = urne(), t = u.a + u.b;
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. On tire une boule et on la remet. Pourquoi la probabilité de tirer une rouge est-elle la même au second tirage ?`,
             s: `Parce que la boule est REMISE : l'urne retrouve sa composition initiale.\np(rouge) = ${fr(u.a, t)} aux deux tirages, qui sont indépendants.` }; } });
  M.push({ d: "F", g() { const u = urne(), t = u.a + u.b;
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. On effectue deux tirages avec remise. Quelle est la probabilité d'obtenir deux boules bleues ?`,
             s: `p(bleue) = ${fr(u.b, t)} à chaque tirage.\np = ${fr(u.b, t)} × ${fr(u.b, t)} = ${simpl(u.b * u.b, t * t)}.` }; } });
  M.push({ d: "M", g() { const u = urne(), t = u.a + u.b;
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. On tire deux fois avec remise. Quelle est la probabilité d'obtenir une rouge puis une bleue ?`,
             s: `p = ${fr(u.a, t)} × ${fr(u.b, t)} = ${simpl(u.a * u.b, t * t)}.` }; } });
  M.push({ d: "M", g() { const u = urne(), t = u.a + u.b;
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. On tire deux fois avec remise. Quelle est la probabilité d'obtenir deux boules de couleurs différentes ?`,
             s: `Deux cas : rouge puis bleue, ou bleue puis rouge.\n${fr(u.a, t)} × ${fr(u.b, t)} + ${fr(u.b, t)} × ${fr(u.a, t)} = ${simpl(2 * u.a * u.b, t * t)}.` }; } });
  M.push({ d: "M", g() { const u = urne(), t = u.a + u.b;
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. On tire deux fois avec remise. Quelle est la probabilité d'obtenir deux boules de même couleur ?`,
             s: `Deux rouges : ${simpl(u.a * u.a, t * t)}. Deux bleues : ${simpl(u.b * u.b, t * t)}.\nTotal : ${simpl(u.a * u.a + u.b * u.b, t * t)}.` }; } });
  M.push({ d: "D", g() { const u = urne(), t = u.a + u.b;
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. On tire deux fois avec remise. Quelle est la probabilité d'obtenir au moins une boule rouge ?`,
             s: `L'événement contraire est « aucune rouge », soit deux bleues : ${simpl(u.b * u.b, t * t)}.\np = 1 − ${fr(u.b * u.b, t * t)} = ${simpl(t * t - u.b * u.b, t * t)}.` }; } });
  M.push({ d: "D", g() { const u = urne(), t = u.a + u.b;
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. On tire trois fois avec remise. Quelle est la probabilité d'obtenir trois boules rouges ?`,
             s: `p = ${fr(u.a, t)} × ${fr(u.a, t)} × ${fr(u.a, t)} = ${simpl(u.a * u.a * u.a, t * t * t)}.` }; } });
  M.push({ d: "D", g() { const u = urne(), t = u.a + u.b;
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. Compare la probabilité d'obtenir deux rouges avec remise et la somme des deux probabilités individuelles.`,
             s: `Avec remise : ${fr(u.a, t)} × ${fr(u.a, t)} = ${simpl(u.a * u.a, t * t)}.\nLa somme ${fr(u.a, t)} + ${fr(u.a, t)} = ${simpl(2 * u.a, t)} n'a aucun sens ici : pour deux événements qui s'enchaînent, on MULTIPLIE.\nOn le voit d'ailleurs : le produit est plus PETIT, ce qui est logique — obtenir deux fois de suite est plus difficile.` }; } });
  M.push({ d: "D", g() { const u = urne(), t = u.a + u.b; const el = pick(PRENOMS);
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. ${el} tire une boule SANS la remettre, puis en tire une seconde. Le calcul est-il le même qu'avec remise ?`,
             s: `Non. Sans remise, la composition de l'urne change entre les deux tirages.\nAvec remise : p(deux rouges) = ${fr(u.a, t)} × ${fr(u.a, t)} = ${simpl(u.a * u.a, t * t)}.\nSans remise, le second tirage se ferait sur ${t - 1} boules dont ${u.a - 1} rouges — les tirages ne seraient plus indépendants.` }; } });
  M.push({ d: "D", g() { const u = urne(), t = u.a + u.b, n = ri(2, 6);
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. On tire ${n} fois avec remise. Quelle est la probabilité d'obtenir ${n} fois une boule rouge ?`,
             s: `p = (${fr(u.a, t)})^${n} = ${simpl(Math.pow(u.a, n), Math.pow(t, n))}.\nPlus on exige de répétitions, plus la probabilité devient petite.` }; } });
  M.push({ d: "D", g() { const u = urne(), t = u.a + u.b;
    return { q: `Une urne contient ${u.a} boules rouges et ${u.b} bleues. On tire deux fois avec remise. Vérifie que la somme des probabilités des quatre issues possibles vaut 1.`,
             s: `RR : ${fr(u.a * u.a, t * t)} · RB : ${fr(u.a * u.b, t * t)} · BR : ${fr(u.b * u.a, t * t)} · BB : ${fr(u.b * u.b, t * t)}.\nSomme : (${u.a * u.a} + ${u.a * u.b} + ${u.b * u.a} + ${u.b * u.b}) ÷ ${t * t} = ${t * t}/${t * t} = 1.` }; } });
  return M;
};

/* ── La roue de la kermesse (problème) ── */
FAM["La roue de la kermesse"] = () => {
  const M = [];
  M.push({ d: "F", g() { const t = pick([8, 12, 16, 20]), n = ri(1, t / 2);
    return { q: `Une roue de kermesse comporte ${t} secteurs identiques, dont ${n} sont gagnants. Quelle est la probabilité de gagner ? Donne le résultat sous forme de fraction simplifiée.`,
             s: `p = ${simpl(n, t)}.` }; } });
  M.push({ d: "F", g() { const t = pick([10, 12, 20]), n = ri(2, 5);
    return { q: `À la kermesse, une roue de ${t} secteurs identiques compte ${n} secteurs gagnants. Quelle est la probabilité de PERDRE ?`,
             s: `Secteurs perdants : ${t} − ${n} = ${t - n}. p = ${simpl(t - n, t)}.` }; } });
  M.push({ d: "F", g() { const t = pick([12, 16, 24]), n = t / 4;
    return { q: `Une roue de kermesse a ${t} secteurs identiques. Un quart sont gagnants. Combien y en a-t-il ? Quelle est la probabilité de gagner ?`,
             s: `${t} ÷ 4 = ${n} secteurs gagnants. p = ${simpl(n, t)} = 1/4.` }; } });
  M.push({ d: "M", g() { const t = pick([12, 15, 20]), a = ri(1, 3), b = ri(2, 5);
    if (a + b >= t) return null;
    return { q: `Une roue de kermesse comporte ${t} secteurs identiques : ${a} donnent un gros lot, ${b} un petit lot, les autres rien. Quelle est la probabilité de repartir avec un lot ?`,
             s: `Secteurs avec lot : ${a} + ${b} = ${a + b}.\np = ${simpl(a + b, t)}.` }; } });
  M.push({ d: "M", g() { const t = pick([10, 12, 20]), n = ri(2, 4), prix = ri(1, 3);
    return { q: `Une roue de kermesse a ${t} secteurs identiques dont ${n} gagnants. Une partie coûte ${prix} €. Combien peut-on espérer de parties gagnantes sur ${5 * t} tours ?`,
             s: `p(gagner) = ${simpl(n, t)}.\n${5 * t} × ${fr(n, t)} = ${5 * n} parties gagnantes environ, pour ${5 * t * prix} € dépensés.` }; } });
  M.push({ d: "M", g() { const t = pick([8, 12, 16]), n = ri(2, 4);
    return { q: `Une roue de kermesse a ${t} secteurs identiques dont ${n} gagnants. Combien faudrait-il de secteurs gagnants pour doubler la probabilité de gagner ?`,
             s: `p actuelle : ${simpl(n, t)}. Pour la doubler, il faut ${2 * n} secteurs gagnants${2 * n <= t ? `, soit ${n} de plus.` : ` — mais cela dépasserait les ${t} secteurs de la roue : impossible.`}` }; } });
  M.push({ d: "D", g() { const t = pick([12, 16, 20, 24]), a = ri(1, 2), b = ri(2, 4), c = ri(3, 6);
    if (a + b + c >= t) return null;
    return { q: `Une roue de kermesse comporte ${t} secteurs identiques : ${a} pour un gros lot, ${b} pour un lot moyen, ${c} pour un petit lot, le reste sans lot. 1) Quelle est la probabilité de gagner un lot ? 2) Quelle est celle de repartir les mains vides ?`,
             s: `1) ${a} + ${b} + ${c} = ${a + b + c} secteurs gagnants sur ${t} : p = ${simpl(a + b + c, t)}.\n2) 1 − ${fr(a + b + c, t)} = ${simpl(t - a - b - c, t)}.` }; } });
  M.push({ d: "D", g() { const t = pick([10, 20]), n = ri(2, 5), prix = ri(2, 4), gain = ri(5, 12);
    return { q: `Une roue de kermesse a ${t} secteurs identiques dont ${n} gagnants. Le tour coûte ${prix} € et un lot vaut ${gain} €. L'organisateur y gagne-t-il sur ${10 * t} tours ?`,
             s: `Recettes : ${10 * t} × ${prix} = ${10 * t * prix} €.\nLots distribués : ${10 * t} × ${fr(n, t)} = ${10 * n} lots, soit ${10 * n * gain} €.\nBilan : ${10 * t * prix} − ${10 * n * gain} = ${10 * t * prix - 10 * n * gain} € — ${10 * t * prix - 10 * n * gain > 0 ? "l'organisateur y gagne" : 10 * t * prix - 10 * n * gain < 0 ? "l'organisateur y perd" : "l'opération est équilibrée"}.` }; } });
  M.push({ d: "D", g() { const t = pick([12, 16, 20]), n = ri(2, 5); const el = pick(PRENOMS);
    return { q: `Une roue de kermesse a ${t} secteurs identiques dont ${n} gagnants. ${el} a joué ${t} fois sans jamais gagner et se dit victime d'une roue truquée. Que lui répondre ?`,
             s: `Rien ne le prouve. p(perdre) = ${simpl(t - n, t)} à chaque tour, et les tours sont indépendants.\nPerdre ${t} fois d'affilée reste possible : c'est peu probable, mais pas impossible. Il faudrait BEAUCOUP plus de tours pour soupçonner un truquage.` }; } });
  M.push({ d: "D", g() { const t = pick([12, 18, 24]), n = ri(3, 6);
    return { q: `Une roue de kermesse a ${t} secteurs identiques dont ${n} gagnants. On remplace 2 secteurs perdants par des gagnants. De combien la probabilité de gagner augmente-t-elle ?`,
             s: `Avant : ${simpl(n, t)}. Après : ${simpl(n + 2, t)}.\nAugmentation : ${fr(n + 2, t)} − ${fr(n, t)} = ${simpl(2, t)}.` }; } });
  M.push({ d: "D", g() { const t = pick([10, 20, 25]), n = ri(2, 6);
    return { q: `Une roue de kermesse a ${t} secteurs identiques dont ${n} gagnants. Exprime la probabilité de gagner en pourcentage.`,
             s: `p = ${simpl(n, t)}${dec(n, t) ? ` = ${dec(n, t)}` : ""}, soit ${virg(Math.round(n / t * 10000) / 100)} %.` }; } });
  M.push({ d: "D", g() { const t = pick([12, 16, 20]), n = ri(2, 5);
    return { q: `Une roue de kermesse a ${t} secteurs identiques dont ${n} gagnants. Les secteurs sont ensuite redessinés : les gagnants deviennent deux fois plus petits que les perdants. La probabilité de gagner change-t-elle ?`,
             s: `Oui, et la formule favorables ÷ total ne s'applique plus : les secteurs ne sont plus IDENTIQUES, donc les issues ne sont plus équiprobables.\nIl faudrait raisonner sur les ANGLES occupés par chaque type de secteur.` }; } });
  return M;
};

/* ── Les jetons numérotés (problème) ── */
FAM["Les jetons numérotés"] = () => {
  const M = [];
  const mult = (n, t) => { const l = []; for (let i = n; i <= t; i += n) l.push(i); return l; };
  M.push({ d: "F", g() { const t = pick([10, 12, 20]), n = pick([2, 3, 4, 5]);
    const f = mult(n, t);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. On en tire un au hasard. Quelle est la probabilité d'obtenir un multiple de ${n} ? (fraction simplifiée)`,
             s: `Multiples de ${n} entre 1 et ${t} : ${f.join(", ")} → ${f.length} jetons.\np = ${simpl(f.length, t)}.` }; } });
  M.push({ d: "F", g() { const t = pick([10, 20]), k = ri(2, t - 1);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité de tirer un numéro strictement supérieur à ${k} ?`,
             s: `Numéros favorables : de ${k + 1} à ${t}, soit ${t - k} jetons.\np = ${simpl(t - k, t)}.` }; } });
  M.push({ d: "F", g() { const t = pick([10, 12, 20]);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité de tirer un numéro pair ?`,
             s: `${t / 2} numéros pairs sur ${t}. p = ${simpl(t / 2, t)} = 1/2.` }; } });
  M.push({ d: "M", g() { const t = pick([20, 24, 30]), n = pick([3, 4, 6]);
    const f = mult(n, t);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité d'obtenir un multiple de ${n} ? (fraction simplifiée)`,
             s: `Multiples de ${n} : ${f.join(", ")} → ${f.length} jetons.\np = ${simpl(f.length, t)}.` }; } });
  M.push({ d: "M", g() { const t = pick([20, 30]);
    const f = []; for (let i = 1; i <= t; i++) { let p = i > 1; for (let j = 2; j * j <= i; j++) if (i % j === 0) p = false; if (p) f.push(i); }
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité de tirer un nombre premier ?`,
             s: `Nombres premiers jusqu'à ${t} : ${f.join(", ")} → ${f.length} jetons. Attention, 1 n'est pas premier.\np = ${simpl(f.length, t)}.` }; } });
  M.push({ d: "M", g() { const t = pick([20, 25, 30]);
    const f = []; for (let i = 1; i <= t; i++) if (Number.isInteger(Math.sqrt(i))) f.push(i);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité de tirer un carré parfait ?`,
             s: `Carrés parfaits : ${f.join(", ")} → ${f.length} jetons.\np = ${simpl(f.length, t)}.` }; } });
  M.push({ d: "M", g() { const t = pick([12, 15, 18, 20, 24, 30]), k = ri(2, t - 2);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité de tirer un numéro inférieur ou égal à ${k} ?`,
             s: `Numéros de 1 à ${k} : ${k} jetons.\np = ${simpl(k, t)}.` }; } });
  M.push({ d: "M", g() { const t = pick([12, 16, 20, 24, 30]), a = ri(2, Math.floor(t / 2)), b = ri(a + 1, t);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité de tirer un numéro compris entre ${a} et ${b} inclus ?`,
             s: `Numéros favorables : de ${a} à ${b}, soit ${b - a + 1} jetons.\np = ${simpl(b - a + 1, t)}.` }; } });
  M.push({ d: "D", g() { const t = pick([20, 30]), a = pick([2, 3]), b = pick([4, 5]);
    const A = mult(a, t), B = mult(b, t), AB = mult(a * b / pgcd(a, b), t);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité de tirer un multiple de ${a} OU de ${b} ?`,
             s: `Multiples de ${a} : ${A.length}. Multiples de ${b} : ${B.length}.\nComptés deux fois (multiples de ${a * b / pgcd(a, b)}) : ${AB.length}.\nFavorables : ${A.length} + ${B.length} − ${AB.length} = ${A.length + B.length - AB.length}.\np = ${simpl(A.length + B.length - AB.length, t)}.` }; } });
  M.push({ d: "D", g() { const t = pick([20, 24, 30]), n = pick([3, 4, 5]);
    const f = mult(n, t);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité de NE PAS tirer un multiple de ${n} ?`,
             s: `Multiples de ${n} : ${f.length} jetons, de probabilité ${simpl(f.length, t)}.\np = 1 − ${fr(f.length, t)} = ${simpl(t - f.length, t)}.` }; } });
  M.push({ d: "D", g() { const t = pick([20, 30, 40]);
    const f = []; for (let i = 1; i <= t; i++) if (i >= 10) f.push(i);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité de tirer un jeton dont le numéro a deux chiffres ?`,
             s: `Numéros de 10 à ${t} : ${f.length} jetons.\np = ${simpl(f.length, t)}.` }; } });
  M.push({ d: "D", g() { const t = pick([20, 30]), k = ri(3, 9);
    const f = []; for (let i = 1; i <= t; i++) if (String(i).includes(String(k))) f.push(i);
    if (!f.length) return null;
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. Quelle est la probabilité de tirer un numéro contenant le chiffre ${k} ?`,
             s: `Numéros favorables : ${f.join(", ")} → ${f.length} jetons.\np = ${simpl(f.length, t)}.` }; } });
  M.push({ d: "D", g() { const t = pick([20, 24]), n = pick([2, 3, 4]);
    const f = mult(n, t); const el = pick(PRENOMS);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. ${el} annonce que la probabilité de tirer un multiple de ${n} vaut 1/${n}. A-t-il raison ?`,
             s: `Multiples de ${n} : ${f.length} sur ${t}, soit ${simpl(f.length, t)}.\n${fr(f.length, t) === fr(1, n) ? `Il a raison ici, car ${n} divise ${t} : les multiples se répartissent régulièrement.` : `Il a tort : ${n} ne divise pas ${t}, la répartition n'est pas exactement régulière.`}` }; } });
  M.push({ d: "D", g() { const t = pick([20, 30]), k = ri(5, 15);
    return { q: `Un sac contient ${t} jetons numérotés de 1 à ${t}. On retire les jetons de 1 à ${k}. Quelle est la probabilité de tirer un numéro pair parmi ceux qui restent ?`,
             s: (() => { let p = 0; for (let i = k + 1; i <= t; i++) if (i % 2 === 0) p++;
               return `Jetons restants : ${t - k}, numérotés de ${k + 1} à ${t}.\nPairs parmi eux : ${p}.\np = ${simpl(p, t - k)}.`; })() }; } });
  return M;
};

/* ── De la fréquence à la probabilité ── traitement particulier ── */
FAM["De la fréquence à la probabilité"] = () => {
  const M = [];
  const EXP = [
    { obj: "une punaise", ev: "elle retombe pointe en l'air", verbe: "lance" },
    { obj: "un bouchon", ev: "il retombe sur le côté", verbe: "lance" },
    { obj: "un dé труqué", ev: "on obtient un 6", verbe: "lance" },
    { obj: "une roue mal équilibrée", ev: "elle s'arrête sur le rouge", verbe: "fait tourner" },
    { obj: "une graine", ev: "elle germe", verbe: "sème" },
  ].filter(x => !/труqué/.test(x.obj));
  EXP.push({ obj: "un dé truqué", ev: "on obtient un 6", verbe: "lance" });
  const pourcent = (a, b) => virg(Math.round(a / b * 10000) / 100);

  /* — séries LONGUES : l'estimation est légitime — */
  M.push({ d: "F", g() { const e = pick(EXP), n = pick([200, 400, 500, 800, 1000]), f = ri(Math.round(n * 0.25), Math.round(n * 0.75));
    return { q: `On ${e.verbe} ${n} fois ${e.obj} : ${e.ev} ${f} fois. Quelle estimation donner de la probabilité de cet événement ?`,
             s: `Fréquence : ${f} ÷ ${n} = ${virg(Math.round(f / n * 10000) / 10000)}.\nSur un grand nombre d'essais, la fréquence s'approche de la probabilité : on estime la probabilité à environ ${virg(Math.round(f / n * 1000) / 1000)}.` }; } });
  M.push({ d: "F", g() { const e = pick(EXP), n = pick([500, 1000, 2000]), f = Math.round(n * pick([0.2, 0.35, 0.4, 0.64, 0.75]));
    return { q: `On ${e.verbe} ${n} fois ${e.obj} : ${e.ev} ${f} fois. Estime la probabilité de cet événement, puis exprime-la en pourcentage.`,
             s: `Fréquence : ${f} ÷ ${n} = ${virg(f / n)}.\nOn estime la probabilité à environ ${virg(f / n)}, soit ${pourcent(f, n)} %.` }; } });
  M.push({ d: "F", g() { const n = pick([600, 1000]), f = Math.round(n * pick([0.3, 0.45, 0.52]));
    return { q: `Une usine teste ${n} pièces : ${f} sont conformes. Estime la probabilité qu'une pièce prise au hasard soit conforme.`,
             s: `Fréquence : ${f} ÷ ${n} = ${virg(f / n)}.\nOn estime la probabilité à environ ${virg(f / n)}. Le nombre d'essais étant grand, cette estimation est raisonnable.` }; } });

  /* — séries COURTES : on ne peut pas conclure — */
  M.push({ d: "M", g() { const e = pick(EXP), n = pick([10, 12, 15, 20]), f = ri(Math.round(n * 0.3), Math.round(n * 0.8));
    return { q: `On ${e.verbe} ${n} fois seulement ${e.obj} : ${e.ev} ${f} fois. Peut-on estimer la probabilité de cet événement à partir de ces résultats ?`,
             s: `La fréquence observée vaut ${f} ÷ ${n} = ${virg(Math.round(f / n * 1000) / 1000)}.\nMais ${n} essais, c'est BEAUCOUP TROP PEU pour estimer une probabilité : sur si peu de lancers, la fréquence fluctue énormément d'une série à l'autre.\nIl faudrait plusieurs centaines d'essais pour que la fréquence se stabilise et devienne une estimation fiable.` }; } });
  M.push({ d: "M", g() { const n = pick([8, 10, 20]), f = n;
    return { q: `On lance ${n} fois une pièce et on obtient ${f} fois « pile ». Peut-on estimer à 1 la probabilité d'obtenir pile ?`,
             s: `Non, certainement pas. La fréquence observée vaut ${f} ÷ ${n} = 1, mais cela ne prouve rien.\nSur ${n} lancers, une telle série est peu probable sans être impossible. Ce n'est qu'avec un GRAND nombre d'essais que la fréquence permet d'estimer une probabilité — ici 1/2 pour une pièce équilibrée.` }; } });
  M.push({ d: "M", g() { const e = pick(EXP), n = pick([10, 15, 20, 25]), f = ri(1, n - 1);
    return { q: `On ${e.verbe} ${n} fois ${e.obj} : ${e.ev} ${f} fois. Un élève affirme : « la probabilité de cet événement est donc ${fr(f, n)} ». Que lui répondre ?`,
             s: `Deux réserves.\nD'abord le mot : à partir d'une fréquence, on ne CALCULE jamais une probabilité, on l'ESTIME seulement.\nEnsuite le nombre d'essais : ${n} est bien trop faible. La fréquence ${virg(Math.round(f / n * 1000) / 1000)} pourrait être très différente sur une nouvelle série de ${n} essais.` }; } });

  /* — stabilisation : le cœur de la notion — */
  M.push({ d: "D", g() { const e = pick(EXP), p = pick([0.3, 0.4, 0.6, 0.7]);
    const n1 = 20, n2 = 200, n3 = 2000;
    const f1 = Math.round(n1 * (p + pick([-0.2, 0.15, -0.15, 0.2])));
    const f2 = Math.round(n2 * (p + pick([-0.05, 0.04, -0.03])));
    const f3 = Math.round(n3 * (p + pick([-0.01, 0.008])));
    return { q: `On ${e.verbe} ${e.obj} et l'on note combien de fois ${e.ev} :\n· sur ${n1} essais : ${f1} fois\n· sur ${n2} essais : ${f2} fois\n· sur ${n3} essais : ${f3} fois\nQue peut-on estimer de la probabilité de cet événement ?`,
             s: `Fréquences : ${virg(Math.round(f1 / n1 * 1000) / 1000)} · ${virg(Math.round(f2 / n2 * 1000) / 1000)} · ${virg(Math.round(f3 / n3 * 1000) / 1000)}.\nElles se STABILISENT autour de ${virg(p)} à mesure que le nombre d'essais augmente.\nOn estime donc la probabilité à environ ${virg(p)}. La série de ${n1} essais, à elle seule, n'aurait rien permis de conclure.` }; } });
  M.push({ d: "D", g() { const n = pick([10, 20]), m = pick([500, 1000, 2000]);
    return { q: `Deux élèves étudient le même dé truqué. Le premier fait ${n} lancers, le second ${m}. Lequel obtient la meilleure estimation de la probabilité d'obtenir un 6 ? Pourquoi ?`,
             s: `Le second, sans hésitation.\nPlus le nombre d'essais est grand, plus la fréquence observée s'approche de la probabilité : c'est la loi des grands nombres.\nSur ${n} lancers, la fréquence peut s'écarter très fortement de la vraie valeur ; sur ${m}, elle s'en approche nettement.` }; } });
  M.push({ d: "D", g() { const e = pick(EXP), n = pick([1000, 2000, 5000]), f = Math.round(n * pick([0.18, 0.42, 0.63]));
    return { q: `On ${e.verbe} ${n} fois ${e.obj} : ${e.ev} ${f} fois. Estime la probabilité de cet événement. Cette estimation donne-t-elle la valeur EXACTE de la probabilité ?`,
             s: `Fréquence : ${f} ÷ ${n} = ${virg(f / n)}. On estime la probabilité à environ ${virg(f / n)}.\nNon, ce n'est pas la valeur exacte. Une fréquence ne donne jamais la probabilité exacte : elle en fournit une ESTIMATION, d'autant meilleure que les essais sont nombreux.` }; } });
  M.push({ d: "D", g() { const n = pick([300, 600, 900]), f = Math.round(n / 6 + ri(-15, 15));
    return { q: `On lance ${n} fois un dé à 6 faces et l'on obtient ${f} fois la face 6. Estime la probabilité d'obtenir un 6, puis dis si cette expérience permet de conclure que le dé est équilibré.`,
             s: `Fréquence observée : ${f} ÷ ${n} = ${virg(Math.round(f / n * 1000) / 1000)}. On estime donc la probabilité à environ ${virg(Math.round(f / n * 1000) / 1000)}.\nPour un dé équilibré, on attendrait 1/6 ≈ 0,167.\nLes deux valeurs sont proches : rien ne permet d'affirmer que le dé est truqué. Attention toutefois, un écart faible ne PROUVE pas non plus qu'il est parfaitement équilibré.` }; } });
  M.push({ d: "D", g() { const n1 = pick([50, 100]), n2 = pick([1000, 5000]);
    return { q: `Sur ${n1} essais, une fréquence de 0,55 a été observée. Sur ${n2} essais de la même expérience, elle vaut 0,51. Quelle valeur retenir pour estimer la probabilité, et pourquoi ?`,
             s: `On retient 0,51, obtenue sur ${n2} essais.\nPlus le nombre d'essais est grand, plus la fréquence s'approche de la probabilité. La valeur issue de ${n1} essais est bien moins fiable.\nOn ESTIME donc la probabilité à environ 0,51 — sans jamais pouvoir affirmer que c'est sa valeur exacte.` }; } });
  M.push({ d: "D", g() { const e = pick(EXP), n = pick([5, 6, 8]), f = ri(1, n - 1);
    return { q: `On ${e.verbe} ${n} fois ${e.obj} : ${e.ev} ${f} fois. Peut-on estimer la probabilité de cet événement ? Combien d'essais faudrait-il ?`,
             s: `Non. Avec ${n} essais, la fréquence ${fr(f, n)} n'apprend pratiquement rien : une seule répétition différente changerait tout le résultat.\nIl faudrait plusieurs CENTAINES d'essais, voire des milliers, pour que la fréquence se stabilise et permette une estimation raisonnable.` }; } });
  M.push({ d: "D", g() { const n = pick([400, 800, 1200]), f = Math.round(n * pick([0.25, 0.5, 0.75]));
    return { q: `On ${pick(["lance", "teste"])} ${n} fois une expérience aléatoire : l'événement A se produit ${f} fois. 1) Calcule la fréquence de A. 2) Que peut-on en déduire sur la probabilité de A ?`,
             s: `1) ${f} ÷ ${n} = ${virg(f / n)}.\n2) On peut ESTIMER la probabilité de A à environ ${virg(f / n)}. Le nombre d'essais est grand, donc l'estimation est raisonnable — mais elle reste une estimation, jamais une valeur exacte.` }; } });
  return M;
};

/* ═══ QUESTIONS DE COURS ═══ */
const COURS = [
["Facile","Qu'appelle-t-on une expérience aléatoire ?",
 "C'est une expérience qui a plusieurs résultats possibles, et dont on ne peut pas prévoir lequel se produira."],
["Facile","Qu'appelle-t-on une issue d'une expérience aléatoire ?",
 "C'est un des résultats possibles de l'expérience. Par exemple, pour un dé à 6 faces : 1, 2, 3, 4, 5 ou 6."],
["Facile","Qu'appelle-t-on l'univers d'une expérience aléatoire ?",
 "C'est l'ensemble de toutes les issues possibles. Pour une pièce de monnaie : { pile ; face }."],
["Facile","Qu'appelle-t-on un événement ?",
 "C'est un ensemble d'issues. Par exemple « obtenir un nombre pair » avec un dé regroupe les issues 2, 4 et 6."],
["Facile","Entre quelles valeurs une probabilité est-elle toujours comprise ?",
 "Entre 0 et 1 : pour tout événement A, 0 ≤ P(A) ≤ 1."],
["Facile","Que signifie une probabilité égale à 0 ?",
 "L'événement est IMPOSSIBLE : il ne peut pas se produire. Par exemple obtenir 7 avec un dé à 6 faces."],
["Facile","Que signifie une probabilité égale à 1 ?",
 "L'événement est CERTAIN : il se produit à coup sûr. Par exemple obtenir un nombre inférieur à 7 avec un dé à 6 faces."],
["Facile","Que vaut la somme des probabilités de toutes les issues d'une expérience ?",
 "Elle vaut toujours 1, car l'une des issues se produit nécessairement."],
["Facile","Qu'appelle-t-on l'événement contraire d'un événement A ?",
 "C'est l'événement qui se produit exactement quand A ne se produit pas. On a P(contraire de A) = 1 − P(A)."],
["Facile","Que signifie « des issues équiprobables » ?",
 "Cela signifie qu'elles ont toutes la même probabilité de se produire, comme les faces d'un dé équilibré."],
["Facile","Comment calcule-t-on une probabilité dans une situation d'équiprobabilité ?",
 "P(A) = nombre d'issues favorables ÷ nombre total d'issues."],
["Facile","Une probabilité peut-elle valoir 1,5 ?",
 "Non, jamais. Une probabilité est comprise entre 0 et 1 : au-delà de 1, on dépasserait la certitude."],
["Moyen","Quelle est la condition indispensable pour utiliser la formule favorables ÷ total ?",
 "L'ÉQUIPROBABILITÉ : toutes les issues doivent avoir la même chance de se produire. Sinon, cette formule donne un résultat faux."],
["Moyen","Un dé truqué : peut-on utiliser la formule favorables ÷ total ?",
 "Non. Les faces n'ont plus la même probabilité : les issues ne sont pas équiprobables. Il faut estimer les probabilités par l'expérience."],
["Moyen","Qu'appelle-t-on la fréquence d'un événement lors d'une série d'essais ?",
 "C'est le quotient du nombre de fois où l'événement s'est produit par le nombre total d'essais."],
["Moyen","Quel lien y a-t-il entre fréquence et probabilité ?",
 "Lorsque le nombre d'essais devient grand, la fréquence observée se rapproche de la probabilité. C'est la loi des grands nombres. Elle permet d'ESTIMER une probabilité, jamais de la calculer exactement."],
["Moyen","Peut-on déterminer une probabilité exacte à partir d'une fréquence ?",
 "Non. Une fréquence ne donne qu'une ESTIMATION de la probabilité, d'autant plus fiable que le nombre d'essais est grand."],
["Moyen","Deux événements peuvent-ils avoir la même probabilité ?",
 "Oui. Par exemple « pile » et « face » avec une pièce équilibrée : chacun vaut 1/2."],
["Moyen","Que peut-on dire d'un événement dont la probabilité est proche de 0 ?",
 "Il est peu probable : il a peu de chances de se produire, sans être impossible pour autant."],
["Moyen","Comment calculer la probabilité d'un événement à partir de son contraire ?",
 "P(A) = 1 − P(contraire de A). C'est souvent plus rapide quand l'événement contraire compte moins d'issues."],
["Moyen","Qu'est-ce qu'un événement élémentaire ?",
 "C'est un événement qui ne contient qu'une seule issue, comme « obtenir 3 » avec un dé."],
["Moyen","Deux expériences successives sont-elles toujours indépendantes ?",
 "Non. Elles le sont si le résultat de la première ne modifie pas les probabilités de la seconde — c'est le cas d'un tirage AVEC remise, pas d'un tirage sans remise."],
["Difficile","Pourquoi la somme des probabilités de toutes les issues vaut-elle toujours 1 ?",
 "Parce qu'à chaque expérience, une issue et une seule se produit. L'événement « une des issues se réalise » est donc certain, et sa probabilité vaut 1."],
["Difficile","Un événement de probabilité très faible peut-il se produire ?",
 "Oui. Une probabilité faible signifie « rare », pas « impossible ». Seule une probabilité de 0 désigne un événement impossible."],
["Difficile","Après cinq « pile » consécutifs, la probabilité d'obtenir « face » augmente-t-elle ?",
 "Non. Les lancers sont indépendants : la pièce n'a pas de mémoire. La probabilité reste 1/2 à chaque lancer."],
["Difficile","Comment calcule-t-on la probabilité d'obtenir deux résultats successifs, comme « 6 puis pile » ?",
 "On MULTIPLIE les probabilités, à condition que les deux expériences soient indépendantes : 1/6 × 1/2 = 1/12."],
["Difficile","Quelle différence y a-t-il entre un tirage avec remise et un tirage sans remise ?",
 "Avec remise, la composition ne change pas : les tirages sont indépendants et les probabilités restent les mêmes. Sans remise, chaque tirage modifie le contenu et donc les probabilités suivantes."],
["Difficile","Pourquoi les trois résultats « deux piles », « deux faces », « un de chaque » ne sont-ils pas équiprobables ?",
 "Parce que « un de chaque » s'obtient de deux façons (PF et FP), alors que les deux autres n'en ont qu'une. Les probabilités sont 1/4, 1/4 et 1/2."],
["Difficile","Combien d'essais faut-il pour estimer correctement une probabilité par la fréquence ?",
 "Il n'y a pas de seuil précis, mais quelques dizaines d'essais ne suffisent jamais : il en faut plusieurs centaines, voire des milliers, pour que la fréquence se stabilise."],
["Difficile","Que signifie l'expression « la fréquence se stabilise » ?",
 "Qu'en augmentant le nombre d'essais, la fréquence observée varie de moins en moins et s'approche d'une valeur limite : la probabilité."],
["Difficile","Une roue dont les secteurs ne sont pas de même taille : comment calculer les probabilités ?",
 "Pas avec favorables ÷ total, car les issues ne sont pas équiprobables. Il faut raisonner sur l'ANGLE occupé par chaque secteur, rapporté à 360°."],
["Difficile","P(A) = 0,3 et P(B) = 0,8 pour deux événements d'une même expérience. Est-ce possible ?",
 "Oui, si A et B ne sont pas les seules issues, ou s'ils peuvent se produire ensemble. La contrainte « somme égale à 1 » porte sur toutes les ISSUES, pas sur deux événements quelconques."],
["Difficile","Pourquoi dit-on qu'une probabilité mesure une chance et non une certitude ?",
 "Parce qu'elle décrit ce qui se produit EN MOYENNE sur un grand nombre d'expériences. Sur une expérience isolée, elle ne permet aucune prédiction."],
["Difficile","Comment vérifier qu'un ensemble de probabilités proposé pour une expérience est cohérent ?",
 "Chaque valeur doit être comprise entre 0 et 1, et la somme des probabilités de toutes les issues doit valoir exactement 1."],
];

/* ═══ MOTEUR ═══ */
function genererFamille(nom, dejaPar, cible) {
  const fabrique = FAM[nom];
  if (!fabrique) return null;
  const M = fabrique();
  const quota = { F: Math.round(cible * REPART.F), M: Math.round(cible * REPART.M) };
  quota.D = cible - quota.F - quota.M;
  const besoin = { F: Math.max(0, quota.F - (dejaPar.F || 0)),
                   M: Math.max(0, quota.M - (dejaPar.M || 0)),
                   D: Math.max(0, quota.D - (dejaPar.D || 0)) };
  const vus = new Set(), out = [];
  for (const d of ["F", "M", "D"]) {
    const dispo = M.filter(m => m.d === d);
    if (!dispo.length) { if (besoin[d]) console.warn(`  ⚠ ${nom} / ${LIB[d]} : aucun modèle.`); continue; }
    let reste = besoin[d], essais = 0;
    while (reste > 0 && essais < besoin[d] * 500 + 9000) {
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
  const dc = {}; COURS.forEach(c => dc[c[0]] = (dc[c[0]] || 0) + 1);
  console.log(`Chapitre « ${NOUVEAU} »\n`);
  console.log(`Famille « Cours » : ${COURS.length} questions — Facile ${dc.Facile || 0} · Moyen ${dc.Moyen || 0} · Difficile ${dc.Difficile || 0}\n`);
  console.table(lignes);
  console.log(`Total : ${lignes.reduce((s, l) => s + l.total, 0)} exercices sur ${lignes.length} familles, plus ${COURS.length} questions de cours.`);
  const f = ARGS[ARGS.indexOf("--apercu") + 1];
  if (f && !f.startsWith("--")) {
    const nom = Object.keys(FAM).find(x => cle(x) === cle(f));
    if (nom) { alea = mulberry32(GRAINE);
      const ex = genererFamille(nom, {}, CIBLE);
      console.log(`\n══ ${nom} ══`);
      ["Facile", "Moyen", "Difficile"].forEach(d =>
        ex.filter(e => e.difficulty === d).slice(0, 3).forEach(e =>
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
       FROM exercises WHERE chapitre ILIKE '%probabilit%' ORDER BY id`);
  if (!brut.length) { console.log("Chapitre introuvable."); await pool.end(); return; }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const ACTUEL = maj(brut, "chapitre", "Probabilités");
  const CHAP = GARDER_NOM ? ACTUEL : NOUVEAU;
  console.log(`Chapitre « ${ACTUEL} » : ${brut.length} exercice(s).`);
  if (!GARDER_NOM && ACTUEL !== NOUVEAU) console.log(`Renommage : « ${ACTUEL} » → « ${NOUVEAU} »\n`);

  const parFam = new Map();
  brut.forEach(r => { const k = r.famille || "(sans famille)";
    if (!parFam.has(k)) parFam.set(k, []); parFam.get(k).push(r); });

  alea = mulberry32(GRAINE);
  const aInserer = [], rapport = [], inconnues = [];
  for (const [nom, items] of parFam) {
    if (!FAM[nom]) { inconnues.push(nom); continue; }
    const deja = { F: 0, M: 0, D: 0 };
    items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M" : i.difficulty === "Difficile" ? "D" : null; if (d) deja[d]++; });
    const neufs = genererFamille(nom, deja, CIBLE);
    const mod = { level: maj(items, "level", "college"), subject: maj(items, "subject", "Probabilités"),
                  classe: maj(items, "classe", "5ème"), type: maj(items, "type", "exercice") };
    let num = 0; items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${nom} ${num}`, content: e.content, solution: e.solution,
      difficulty: e.difficulty, level: mod.level, subject: mod.subject, classe: mod.classe,
      chapitre: CHAP, type: mod.type, famille: nom }); });
    rapport.push({ famille: nom, type: mod.type, avant: items.length, ajoutes: neufs.length, apres: items.length + neufs.length });
  }
  /* famille Cours */
  const dejaCours = parFam.get("Cours") || [];
  if (!dejaCours.length) {
    const mod = { level: maj(brut, "level", "college"), subject: maj(brut, "subject", "Probabilités"),
                  classe: maj(brut, "classe", "5ème") };
    COURS.forEach(([diff, q, s], i) => aInserer.push({ title: `Cours ${i + 1}`, content: q, solution: s,
      difficulty: diff, level: mod.level, subject: mod.subject, classe: mod.classe,
      chapitre: CHAP, type: "exercice", famille: "Cours" }));
    rapport.unshift({ famille: "Cours", type: "exercice", avant: 0, ajoutes: COURS.length, apres: COURS.length });
  } else console.log("· La famille « Cours » existe déjà : elle n'est pas recréée.");

  console.table(rapport);
  const dd = {}; aInserer.forEach(e => dd[e.difficulty] = (dd[e.difficulty] || 0) + 1);
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile || 0} · Moyen ${dd.Moyen || 0} · Difficile ${dd.Difficile || 0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`probabilites-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : probabilites-avant-generation-${stamp}.json`);

  if (!GARDER_NOM && ACTUEL !== NOUVEAU) {
    const r = await pool.query("UPDATE exercises SET chapitre = $1 WHERE chapitre = $2", [NOUVEAU, ACTUEL]);
    console.log(`${r.rowCount} exercice(s) rattachés à « ${NOUVEAU} ».`);
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
