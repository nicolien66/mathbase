/* MathBase — generer-decimaux.js
   Porte chaque famille du chapitre « Entiers & décimaux » à 100 exercices.

   ── PRINCIPE ─────────────────────────────────────────────────────────────
   Écrire 1 500 énoncés à la main est irréaliste : ce script les PRODUIT à
   partir de modèles paramétrés, et surtout il CALCULE chaque corrigé au lieu
   de le recopier. Toute l'arithmétique se fait en entiers (mantisse + nombre
   de décimales), donc aucune erreur de virgule flottante n'est possible :
   0,1 + 0,2 y vaut exactement 0,3.

   · Répartition visée pour 100 : 20 faciles, 30 moyens, 50 difficiles
     (plus de difficiles que de faciles, comme demandé).
   · Le script COMPTE d'abord ce qui existe déjà par difficulté et ne complète
     que le manque : les 165 exercices écrits à la main sont conservés.
   · Tirage aléatoire déterministe (graine fixe) : deux exécutions produisent
     les mêmes énoncés, et la déduplication par énoncé rend le script
     rejouable sans créer de doublon.

   ── USAGE ────────────────────────────────────────────────────────────────
     node generer-decimaux.js --apercu            # hors base : stats + échantillons
     node generer-decimaux.js --apercu "Encadrer" # échantillon d'une famille
     $env:DATABASE_URL = "postgresql://..."
     node generer-decimaux.js                     # simulation sur la base
     node generer-decimaux.js --execute           # applique
   Options : --cible N (défaut 100) · --graine N (défaut 20260729)
*/

"use strict";
const fs = require("fs");

/* ═══════════════ ARGUMENTS ═══════════════ */
const ARGS    = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (nom, def) => { const i = ARGS.indexOf(nom); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : def; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260729);
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
const ri   = (a, b) => a + Math.floor(alea() * (b - a + 1));          // entier dans [a ; b]
const pick = t => t[Math.floor(alea() * t.length)];
const melange = t => { const c = [...t]; for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(alea() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; } return c; };

/* ═══════════════ DÉCIMAUX EXACTS ═══════════════ */
function groupe(s) { return s.length >= 4 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : s; }
function fmt(m, e, trim) {
  const neg = m < 0; m = Math.abs(m);
  let s = String(m).padStart(e + 1, "0");
  let ip = s.slice(0, s.length - e), dp = e ? s.slice(s.length - e) : "";
  if (trim) dp = dp.replace(/0+$/, "");
  return (neg ? "−" : "") + groupe(ip) + (dp ? "," + dp : "");
}
const D    = (m, e = 0) => ({ m, e });
const resc = (x, e) => ({ m: x.m * Math.pow(10, e - x.e), e });
const add  = (a, b) => { const e = Math.max(a.e, b.e); return { m: resc(a, e).m + resc(b, e).m, e }; };
const sub  = (a, b) => { const e = Math.max(a.e, b.e); return { m: resc(a, e).m - resc(b, e).m, e }; };
const mul  = (a, b) => ({ m: a.m * b.m, e: a.e + b.e });
const p10  = (x, k) => { const e = x.e - k; return e >= 0 ? { m: x.m, e } : { m: x.m * Math.pow(10, -e), e: 0 }; };
const cmp  = (a, b) => { const e = Math.max(a.e, b.e); return resc(a, e).m - resc(b, e).m; };
const S    = (x, trim = true) => fmt(x.m, x.e, trim);
function to2(x) { const a = arrondi(x, -2), k = a.e - 2; return k <= 0 ? resc(a, 2) : D(a.m / Math.pow(10, k), 2); }
const S2   = x => fmt(to2(x).m, 2, false);            // format monétaire, arrondi au centime
const exactC = x => cmp(x, arrondi(x, -2)) === 0;     // le montant tombe-t-il juste au centime ?
const EQC  = x => exactC(x) ? "=" : "≈";
const NOTE = x => exactC(x) ? "" : " (arrondi au centime)";
const dec  = (m, e) => D(m, e);
/* décimal aléatoire à `e` décimales, partie entière dans [a ; b] */
function rd(a, b, e) { return D(ri(a * Math.pow(10, e), b * Math.pow(10, e) + Math.pow(10, e) - 1), e); }

/* nombre de décimales nécessaires pour que n ÷ d tombe juste (−1 si illimité) */
function decNec(n, d) { for (let e = 0; e <= 6; e++) if ((n * Math.pow(10, e)) % d === 0) return e; return -1; }

/* rangs : nom → exposant */
const RANGS = [
  { n: "millions", k: 6 }, { n: "centaines de mille", k: 5 }, { n: "dizaines de mille", k: 4 },
  { n: "milliers", k: 3 }, { n: "centaines", k: 2 }, { n: "dizaines", k: 1 }, { n: "unités", k: 0 },
  { n: "dixièmes", k: -1 }, { n: "centièmes", k: -2 }, { n: "millièmes", k: -3 },
];
const rangNom = k => RANGS.find(r => r.k === k).n;
const singulier = { "millions": "millions", "milliers": "milliers", "centaines": "centaines",
  "dizaines": "dizaines", "unités": "unités", "dixièmes": "dixièmes", "centièmes": "centièmes",
  "millièmes": "millièmes", "centaines de mille": "centaines de mille", "dizaines de mille": "dizaines de mille" };
/* chiffre et nombre du rang k dans le décimal x */
function chiffreDe(x, k) { const p = k + x.e; return Math.floor(x.m / Math.pow(10, p)) % 10; }
function nombreDe(x, k)  { const p = k + x.e; return Math.floor(x.m / Math.pow(10, p)); }

/* encadrement au rang k */
function encadre(x, k) {
  const p = k + x.e, u = Math.pow(10, p);
  const bas = Math.floor(x.m / u) * u;
  return { bas: { m: bas, e: x.e }, haut: { m: bas + u, e: x.e }, exact: x.m % u === 0 };
}
/* arrondi au rang k (au plus proche, 5 vers le haut) */
function arrondi(x, k) {
  const p = k + x.e, u = Math.pow(10, p);
  const bas = Math.floor(x.m / u) * u, reste = x.m - bas;
  return { m: reste * 2 >= u ? bas + u : bas, e: x.e };
}
const troncature = (x, k) => { const u = Math.pow(10, k + x.e); return { m: Math.floor(x.m / u) * u, e: x.e }; };
/* affichage d'un décimal avec exactement `d` décimales */
const avec = (x, d) => fmt(resc(x, d).m, d, false);

/* chaîne ordonnée « a < b = c < d » */
function chaine(items, sens) {
  const t = [...items].sort((a, b) => sens === "c" ? cmp(a.x, b.x) : cmp(b.x, a.x));
  let out = t[0].t;
  for (let i = 1; i < t.length; i++)
    out += (cmp(t[i].x, t[i - 1].x) === 0 ? " = " : (sens === "c" ? " < " : " > ")) + t[i].t;
  return out;
}

/* ═══════════════ NOMBRES EN LETTRES ═══════════════ */
const U = ["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze",
  "treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];
const TT = { 20:"vingt", 30:"trente", 40:"quarante", 50:"cinquante", 60:"soixante" };
function deuxCh(n) {
  if (n < 20) return U[n];
  if (n < 70) { const d = Math.floor(n / 10) * 10, u = n % 10;
    return u === 0 ? TT[d] : u === 1 ? TT[d] + " et un" : TT[d] + "-" + U[u]; }
  if (n < 80) { const u = n - 60; return u === 11 ? "soixante et onze" : "soixante-" + U[u]; }
  const u = n - 80; return u === 0 ? "quatre-vingt" : "quatre-vingt-" + U[u];
}
function troisCh(n, plur) {
  if (n < 100) { let s = deuxCh(n); if (n === 80 && plur) s += "s"; return s; }
  const c = Math.floor(n / 100), r = n % 100;
  let s = (c === 1 ? "cent" : U[c] + " cent");
  if (r === 0) { if (c > 1 && plur) s += "s"; return s; }
  return s + " " + troisCh(r, plur);
}
function enLettres(n) {
  if (n === 0) return "zéro";
  const p = [], md = Math.floor(n / 1e9), mi = Math.floor(n % 1e9 / 1e6),
        ml = Math.floor(n % 1e6 / 1000), u = n % 1000;
  if (md) p.push(troisCh(md, true) + " milliard" + (md > 1 ? "s" : ""));
  if (mi) p.push(troisCh(mi, true) + " million" + (mi > 1 ? "s" : ""));
  if (ml) p.push(ml === 1 ? "mille" : troisCh(ml, false) + " mille");
  if (u)  p.push(troisCh(u, true));
  return p.join(" ");
}

/* ═══════════════ CONTEXTES ═══════════════ */
const OBJETS = [["stylo","stylos"],["cahier","cahiers"],["carreau","carreaux"],["clou","clous"],
  ["bille","billes"],["timbre","timbres"],["boulon","boulons"],["trombone","trombones"],
  ["jeton","jetons"],["dominos","dominos"],["crayon","crayons"],["aimant","aimants"]];
const LIVRES = ["un roman","une bande dessinée","un dictionnaire","un recueil de poèmes","un atlas",
  "un livre de cuisine","un guide de voyage","une biographie","un album illustré","un manga",
  "un livre d'histoire","un carnet de croquis"];
const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];
const VILLES  = ["Brest","Nîmes","Vichy","Auray","Dole","Riom","Foix","Gap","Albi","Sète","Vannes","Millau"];

/* ═══════════════ MODÈLES PAR FAMILLE ═══════════════
   Chaque modèle : { d, g } où g() renvoie { q: énoncé, s: corrigé }. */

const M_DIVISER = [
{ d:"F", g(){ const a=rd(11,99,pick([0,1]));
  return { q:`Calcule : ${S(a)} ÷ 10 puis ${S(a)} ÷ 100.`,
           s:`${S(a)} ÷ 10 = ${S(p10(a,-1))} (la virgule recule d'un rang).\n${S(a)} ÷ 100 = ${S(p10(a,-2))} (elle recule de deux rangs).` }; } },
{ d:"F", g(){ const a=rd(2,999,pick([0,0,1])), k=pick([1,2]);
  return { q:`Calcule : ${S(a)} ÷ ${groupe(String(Math.pow(10,k)))}.`,
           s:`${S(a)} ÷ ${groupe(String(Math.pow(10,k)))} = ${S(p10(a,-k))} : la virgule recule de ${k} rang${k>1?"s":""}.` }; } },
{ d:"F", g(){ const a=rd(100,9999,0);
  return { q:`Calcule : ${S(a)} ÷ 10.`, s:`${S(a)} ÷ 10 = ${S(p10(a,-1))}.` }; } },
{ d:"M", g(){ const a=rd(1,99,0),b=rd(10,999,1),c=rd(1,99,2);
  return { q:`Calcule : ${S(a)} ÷ 1000 ; ${S(b)} ÷ 100 ; ${S(c)} ÷ 10.`,
           s:`${S(a)} ÷ 1000 = ${S(p10(a,-3))} · ${S(b)} ÷ 100 = ${S(p10(b,-2))} · ${S(c)} ÷ 10 = ${S(p10(c,-1))}.` }; } },
{ d:"M", g(){ const a=rd(10,999,pick([0,1])),k1=pick([1,2,3]),b=rd(2,99,0),k2=pick([1,2,3]);
  return { q:`Complète : ${S(a)} ÷ … = ${S(p10(a,-k1))} et ${S(b)} ÷ … = ${S(p10(b,-k2))}.`,
           s:`${S(a)} ÷ ${groupe(String(Math.pow(10,k1)))} = ${S(p10(a,-k1))} (virgule reculée de ${k1} rang${k1>1?"s":""}).\n${S(b)} ÷ ${groupe(String(Math.pow(10,k2)))} = ${S(p10(b,-k2))}.` }; } },
{ d:"M", g(){ const o=pick(OBJETS),n=pick([10,100,1000]),u=rd(1,99,pick([0,1])),tot=p10(u,Math.log10(n));
  return { q:`Un lot de ${groupe(String(n))} ${o[1]} identiques pèse ${S(tot)} g. Quelle est la masse d'un ${o[0]} ?`,
           s:`${S(tot)} ÷ ${groupe(String(n))} = ${S(u)}. Un ${o[0]} pèse ${S(u)} g.` }; } },
{ d:"D", g(){ const a=rd(2,999,pick([0,1])),ks=melange([1,1,2,2,3]).slice(0,3),tot=ks.reduce((s,k)=>s+k,0);
  const etapes=[]; let cur=a; ks.forEach(k=>{cur=p10(cur,-k); etapes.push(S(cur));});
  return { q:`Calcule ${S(a)} ÷ ${Math.pow(10,ks[0])} ÷ ${Math.pow(10,ks[1])} ÷ ${Math.pow(10,ks[2])}, puis écris ce calcul sous la forme d'une seule division.`,
           s:`Étapes : ${etapes.join(" puis ")}.\nAu total la virgule recule de ${ks.join(" + ")} = ${tot} rangs : cela revient à diviser par ${groupe(String(Math.pow(10,tot)))}, soit ${S(a)} ÷ ${groupe(String(Math.pow(10,tot)))} = ${S(p10(a,-tot))}.` }; } },
{ d:"D", g(){ const a=rd(2,99,0),k1=pick([2,3]),b=rd(10,999,pick([1,2])),k2=pick([1,2]),c=rd(2,99,1),k3=pick([2,3]);
  return { q:`Complète : ${S(a)} ÷ … = ${S(p10(a,-k1))} ; … ÷ ${groupe(String(Math.pow(10,k2)))} = ${S(b)} ; ${S(c)} ÷ … = ${S(p10(c,-k3))}.`,
           s:`${S(a)} ÷ ${groupe(String(Math.pow(10,k1)))} = ${S(p10(a,-k1))} · ${S(p10(b,k2))} ÷ ${groupe(String(Math.pow(10,k2)))} = ${S(b)} · ${S(c)} ÷ ${groupe(String(Math.pow(10,k3)))} = ${S(p10(c,-k3))}.` }; } },
{ d:"D", g(){ const base=rd(11,99,0);
  const items=[{t:`${S(base)} ÷ 100`,x:p10(base,-2)},{t:`${S(p10(base,-1))} ÷ 10`,x:p10(base,-2)},
    {t:`${S(p10(base,1))} ÷ 1000`,x:p10(base,-2)},{t:`${S(p10(base,-2))} ÷ 10`,x:p10(base,-3)}];
  return { q:`Range dans l'ordre croissant : ${items.map(i=>i.t).join(" ; ")}.`,
           s:`${items.map(i=>`${i.t} = ${S(i.x)}`).join(" · ")}.\nDonc ${chaine(items,"c")} : les trois premiers sont égaux.` }; } },
{ d:"D", g(){ const a=rd(2,999,pick([0,1])),k=pick([1,2,3]),z="0,"+"0".repeat(k-1)+"1";
  return { q:`Vrai ou faux : « diviser par ${groupe(String(Math.pow(10,k)))} revient à multiplier par ${z} ». Justifie sur l'exemple de ${S(a)}.`,
           s:`VRAI. ${S(a)} ÷ ${groupe(String(Math.pow(10,k)))} = ${S(p10(a,-k))} et ${S(a)} × ${z} = ${S(p10(a,-k))} : les deux opérations reculent la virgule de ${k} rang${k>1?"s":""}.` }; } },
{ d:"D", g(){ const n=pick([100,1000]),prix=rd(12,499,0),u=p10(prix,-Math.log10(n));
  return { q:`Une bobine de ${groupe(String(n))} m de fil coûte ${S2(prix)} €. Calcule le prix de 1 m, puis celui de 10 m.`,
           s:`1 m : ${S2(prix)} ÷ ${groupe(String(n))} = ${S(u)} €.\n10 m : ${S(u)} × 10 = ${S(p10(u,1))} €.` }; } },
];

const M_MULTIPLIER = [
{ d:"F", g(){ const a=rd(1,9,pick([1,2]));
  return { q:`Calcule : ${S(a)} × 10 puis ${S(a)} × 100.`,
           s:`${S(a)} × 10 = ${S(p10(a,1))} (la virgule avance d'un rang).\n${S(a)} × 100 = ${S(p10(a,2))} (elle avance de deux rangs).` }; } },
{ d:"F", g(){ const a=rd(0,99,pick([1,2])),k=pick([1,2,3]);
  return { q:`Calcule : ${S(a)} × ${groupe(String(Math.pow(10,k)))}.`,
           s:`${S(a)} × ${groupe(String(Math.pow(10,k)))} = ${S(p10(a,k))} : la virgule avance de ${k} rang${k>1?"s":""}${a.e<k?", on complète par des zéros":""}.` }; } },
{ d:"F", g(){ const a=rd(2,99,0),k=pick([2,3]);
  return { q:`Calcule : ${S(a)} × ${groupe(String(Math.pow(10,k)))}.`,
           s:`${S(a)} × ${groupe(String(Math.pow(10,k)))} = ${S(p10(a,k))} : on ajoute ${k} zéros.` }; } },
{ d:"M", g(){ const a=rd(0,9,3),b=rd(1,99,2),c=rd(0,9,1);
  return { q:`Calcule : ${S(a)} × 1000 ; ${S(b)} × 10 ; ${S(c)} × 100.`,
           s:`${S(a)} × 1000 = ${S(p10(a,3))} · ${S(b)} × 10 = ${S(p10(b,1))} · ${S(c)} × 100 = ${S(p10(c,2))}.` }; } },
{ d:"M", g(){ const a=rd(1,99,pick([1,2])),k1=pick([1,2,3]),b=rd(1,99,pick([1,2])),k2=pick([2,3]);
  return { q:`Complète : ${S(a)} × … = ${S(p10(a,k1))} et … × ${groupe(String(Math.pow(10,k2)))} = ${S(b)}.`,
           s:`${S(a)} × ${groupe(String(Math.pow(10,k1)))} = ${S(p10(a,k1))} et ${S(p10(b,-k2))} × ${groupe(String(Math.pow(10,k2)))} = ${S(b)}.` }; } },
{ d:"M", g(){ const p=rd(1,19,2),o=pick(OBJETS);
  return { q:`Un ${o[0]} coûte ${S2(p)} €. Combien coûtent 10 ${o[1]} ? Et 100 ${o[1]} ?`,
           s:`10 ${o[1]} : ${S2(p)} × 10 = ${S2(p10(p,1))} €.\n100 ${o[1]} : ${S2(p)} × 100 = ${S2(p10(p,2))} €.` }; } },
{ d:"D", g(){ const a=rd(0,9,3),k1=pick([1,2]),k2=pick([2,3]);
  return { q:`Calcule ${S(a)} × ${groupe(String(Math.pow(10,k1)))} × ${groupe(String(Math.pow(10,k2)))}, puis écris ce calcul sous la forme d'une seule multiplication.`,
           s:`${S(a)} × ${groupe(String(Math.pow(10,k1)))} = ${S(p10(a,k1))}, puis × ${groupe(String(Math.pow(10,k2)))} = ${S(p10(a,k1+k2))}.\nAu total la virgule avance de ${k1} + ${k2} = ${k1+k2} rangs : ${S(a)} × ${groupe(String(Math.pow(10,k1+k2)))} = ${S(p10(a,k1+k2))}.` }; } },
{ d:"D", g(){ const a=rd(1,99,pick([0,1])),k1=pick([2,3]),b=rd(1,9,2),k2=pick([3,4]),c=rd(1,99,1),k3=pick([3,4]);
  return { q:`Complète : … × ${groupe(String(Math.pow(10,k1)))} = ${S(a)} ; ${S(b)} × … = ${S(p10(b,k2))} ; ${S(c)} × … = ${S(p10(c,k3))}.`,
           s:`${S(p10(a,-k1))} × ${groupe(String(Math.pow(10,k1)))} = ${S(a)} · ${S(b)} × ${groupe(String(Math.pow(10,k2)))} = ${S(p10(b,k2))} · ${S(c)} × ${groupe(String(Math.pow(10,k3)))} = ${S(p10(c,k3))}.` }; } },
{ d:"D", g(){ const base=rd(11,99,0);
  const items=[{t:`${S(p10(base,-2))} × 1000`,x:p10(base,1)},{t:`${S(base)} × 10`,x:p10(base,1)},
    {t:`${S(p10(base,-1))} × 100`,x:p10(base,1)},{t:`${S(p10(base,-3))} × 1000`,x:base}];
  return { q:`Range dans l'ordre décroissant : ${items.map(i=>i.t).join(" ; ")}.`,
           s:`${items.map(i=>`${i.t} = ${S(i.x)}`).join(" · ")}.\nDonc ${chaine(items,"d")}.` }; } },
{ d:"D", g(){ const n=ri(15,950),u=pick([["micron","mm",3],["milligramme","g",3],["millilitre","L",3]]);
  const v=p10(D(n,0),-u[2]);
  return { q:`Un ${u[0]} vaut 0,001 ${u[1]}. Exprime ${groupe(String(n))} ${u[0]}s en ${u[1]}, puis explique le déplacement de la virgule.`,
           s:`${groupe(String(n))} × 0,001 = ${S(v)} ${u[1]}. Multiplier par 0,001 revient à diviser par 1000 : la virgule recule de 3 rangs.` }; } },
{ d:"D", g(){ const a=rd(1,99,pick([1,2])),k1=pick([2,3]),k2=pick([1,2]);
  const r=p10(a,k1-k2);
  return { q:`Sans poser d'opération, calcule ${S(a)} × ${groupe(String(Math.pow(10,k1)))} ÷ ${groupe(String(Math.pow(10,k2)))}, puis explique à quelle opération unique cela revient.`,
           s:`${S(a)} × ${groupe(String(Math.pow(10,k1)))} = ${S(p10(a,k1))}, puis ÷ ${groupe(String(Math.pow(10,k2)))} = ${S(r)}.\nLa virgule avance de ${k1} rangs puis recule de ${k2} : au total elle avance de ${k1-k2} rang${k1-k2>1?"s":""}, ce qui revient à multiplier par ${groupe(String(Math.pow(10,k1-k2)))}.` }; } },
];

const M_ENCADRER = [
{ d:"F", g(){ const x=rd(1,99,pick([1,2])); if(x.m%Math.pow(10,x.e)===0) x.m++;
  const e=encadre(x,0);
  return { q:`Encadre ${S(x)} par deux nombres entiers consécutifs.`,
           s:`${S(e.bas)} < ${S(x)} < ${S(e.haut)}.` }; } },
{ d:"F", g(){ const x=rd(1,99,2); if(x.m%10===0) x.m++;
  const e=encadre(x,-1);
  return { q:`Encadre ${S(x)} au dixième.`, s:`${avec(e.bas,1)} < ${S(x)} < ${avec(e.haut,1)}.` }; } },
{ d:"F", g(){ const x=rd(1,999,1); if(x.m%10===0) x.m++;
  const e=encadre(x,0);
  return { q:`Encadre ${S(x)} à l'unité.`, s:`${S(e.bas)} < ${S(x)} < ${S(e.haut)}.` }; } },
{ d:"M", g(){ const x=rd(1,99,3); if(x.m%10===0)x.m++; if(x.m%100===0)x.m+=3;
  const c=encadre(x,-2), d1=encadre(x,-1);
  return { q:`Encadre ${S(x)} au centième, puis au dixième.`,
           s:`Au centième : ${avec(c.bas,2)} < ${S(x)} < ${avec(c.haut,2)}.\nAu dixième : ${avec(d1.bas,1)} < ${S(x)} < ${avec(d1.haut,1)}.` }; } },
{ d:"M", g(){ const x=rd(0,9,4); if(x.m%10===0)x.m++;
  const e=encadre(x,-3);
  return { q:`Encadre ${S(x)} au millième.`, s:`${avec(e.bas,3)} < ${S(x)} < ${avec(e.haut,3)}.` }; } },
{ d:"M", g(){ const x=rd(11,99,1); if(x.m%10===0)x.m++;
  const u=encadre(x,0), d1=encadre(x,1);
  return { q:`Encadre ${S(x)} à l'unité, puis à la dizaine.`,
           s:`À l'unité : ${S(u.bas)} < ${S(x)} < ${S(u.haut)}.\nÀ la dizaine : ${S(d1.bas)} < ${S(x)} < ${S(d1.haut)}.` }; } },
{ d:"D", g(){ const n=ri(2,9), x=D(n*1000-ri(1,9),3);
  const c=encadre(x,-2), d1=encadre(x,-1);
  return { q:`Encadre ${S(x)} au centième puis au dixième. Que remarques-tu sur la borne supérieure ?`,
           s:`Au centième : ${avec(c.bas,2)} < ${S(x)} < ${avec(c.haut,2)}.\nAu dixième : ${avec(d1.bas,1)} < ${S(x)} < ${avec(d1.haut,1)}.\nDans les deux cas la borne supérieure est l'entier ${n} : le nombre en est tout proche.` }; } },
{ d:"D", g(){ const e=pick([1,2]), a=rd(1,49,e), b={m:a.m+Math.pow(10,0),e:a.e};
  const bb=D(a.m+1,a.e+1===0?1:a.e), inf=D(a.m,a.e), sup=D(a.m+1,a.e);
  const liste=[]; for(let i=1;i<=9;i++) liste.push(avec(D(inf.m*10+i,inf.e+1),inf.e+1));
  return { q:`Trouve tous les nombres décimaux à ${inf.e+1} chiffre${inf.e+1>1?"s":""} après la virgule x tels que ${avec(inf,inf.e)} < x < ${avec(sup,inf.e)}.`,
           s:`${liste.join(" ; ")}. Il y en a 9.` }; } },
{ d:"D", g(){ const a=rd(1,49,1), b=D(a.m+1,1), c=ri(1,9);
  return { q:`Un nombre x vérifie ${avec(a,1)} < x < ${avec(b,1)}. Donne un encadrement de x + ${c}, puis de 10x.`,
           s:`On ajoute ${c} aux deux bornes : ${avec(add(a,D(c)),1)} < x + ${c} < ${avec(add(b,D(c)),1)}.\nOn multiplie les deux bornes par 10 : ${S(p10(a,1))} < 10x < ${S(p10(b,1))}.` }; } },
{ d:"D", g(){ const d0=pick([3,6,7,9,11,12]), n=ri(20,200); if(n%d0===0) return this.g();
  const q10=Math.floor(n*10/d0);
  return { q:`Encadre le quotient ${n} ÷ ${d0} par deux entiers consécutifs, puis au dixième.`,
           s:`${d0} × ${Math.floor(n/d0)} = ${d0*Math.floor(n/d0)} et ${d0} × ${Math.floor(n/d0)+1} = ${d0*(Math.floor(n/d0)+1)}, donc ${Math.floor(n/d0)} < ${n} ÷ ${d0} < ${Math.floor(n/d0)+1}.\nAu dixième : ${avec(D(q10,1),1)} < ${n} ÷ ${d0} < ${avec(D(q10+1,1),1)}.` }; } },
{ d:"D", g(){ const x=rd(1,49,3); if(x.m%10===0)x.m++; if(x.m%100===0)x.m+=7;
  const u=encadre(x,0),d1=encadre(x,-1),c=encadre(x,-2);
  return { q:`Encadre ${S(x)} à l'unité, au dixième, puis au centième.`,
           s:`À l'unité : ${S(u.bas)} < ${S(x)} < ${S(u.haut)}.\nAu dixième : ${avec(d1.bas,1)} < ${S(x)} < ${avec(d1.haut,1)}.\nAu centième : ${avec(c.bas,2)} < ${S(x)} < ${avec(c.haut,2)}.` }; } },
{ d:"D", g(){ const a=rd(1,49,1), b=D(a.m+1,1), mil=D(a.m*10+5,2);
  return { q:`On sait que ${avec(a,1)} < n < ${avec(b,1)}. Peut-on en déduire l'arrondi de n au dixième ? Justifie.`,
           s:`Non. Le milieu de l'intervalle est ${avec(mil,2)} : si n < ${avec(mil,2)} l'arrondi est ${avec(a,1)}, si n > ${avec(mil,2)} il vaut ${avec(b,1)}. L'encadrement ne suffit pas à trancher.` }; } },
];

const M_CHIFFRE = [
{ d:"F", g(){ const x=rd(1000,9999,0), rs=melange([2,1,0]).slice(0,2);
  return { q:`Dans ${S(x)} : quel est le chiffre des ${rangNom(rs[0])} ? Quel est le chiffre des ${rangNom(rs[1])} ?`,
           s:`Chiffre des ${rangNom(rs[0])} : ${chiffreDe(x,rs[0])}. Chiffre des ${rangNom(rs[1])} : ${chiffreDe(x,rs[1])}.` }; } },
{ d:"F", g(){ const x=rd(10,99,2), rs=melange([-1,-2,0,1]).slice(0,2);
  return { q:`Dans ${S(x)} : donne le chiffre des ${rangNom(rs[0])}, puis le chiffre des ${rangNom(rs[1])}.`,
           s:`Chiffre des ${rangNom(rs[0])} : ${chiffreDe(x,rs[0])}. Chiffre des ${rangNom(rs[1])} : ${chiffreDe(x,rs[1])}.` }; } },
{ d:"F", g(){ const x=rd(100,999,1), r=pick([2,1,0,-1]);
  return { q:`Dans ${S(x)} : quel est le chiffre des ${rangNom(r)} ?`, s:`Le chiffre des ${rangNom(r)} est ${chiffreDe(x,r)}.` }; } },
{ d:"M", g(){ const x=rd(1000,9999,0), r=pick([2,1]);
  if(nombreDe(x,r)===chiffreDe(x,r)) return null;   // sinon les deux réponses coïncident
  return { q:`Dans ${S(x)} : donne le chiffre des ${rangNom(r)}, puis le nombre de ${rangNom(r)}.`,
           s:`Chiffre des ${rangNom(r)} : ${chiffreDe(x,r)}. Nombre de ${rangNom(r)} : ${groupe(String(nombreDe(x,r)))} (on lit tout ce qui se trouve à gauche de ce rang, ce rang compris).` }; } },
{ d:"M", g(){ const x=rd(10000,99999,0), rs=melange([3,1,2]).slice(0,2);
  return { q:`Dans ${S(x)} : donne le nombre de ${rangNom(rs[0])}, puis le nombre de ${rangNom(rs[1])}.`,
           s:`Nombre de ${rangNom(rs[0])} : ${groupe(String(nombreDe(x,rs[0])))}. Nombre de ${rangNom(rs[1])} : ${groupe(String(nombreDe(x,rs[1])))}.` }; } },
{ d:"M", g(){ const x=rd(1,9,3), r=pick([-1,-2]);
  if(nombreDe(x,r)===chiffreDe(x,r)) return null;
  return { q:`Dans ${S(x)} : donne le chiffre des ${rangNom(r)}, puis le nombre de ${rangNom(r)}.`,
           s:`Chiffre des ${rangNom(r)} : ${chiffreDe(x,r)}. Nombre de ${rangNom(r)} : ${groupe(String(nombreDe(x,r)))}.` }; } },
{ d:"D", g(){ const x=rd(10000,99999,0), rs=melange([1,3,2]).slice(0,2);
  return { q:`Dans ${S(x)} : donne le chiffre des ${rangNom(rs[0])}, le nombre de ${rangNom(rs[0])}, le chiffre des ${rangNom(rs[1])} et le nombre de ${rangNom(rs[1])}.`,
           s:`Chiffre des ${rangNom(rs[0])} : ${chiffreDe(x,rs[0])} · nombre de ${rangNom(rs[0])} : ${groupe(String(nombreDe(x,rs[0])))}.\nChiffre des ${rangNom(rs[1])} : ${chiffreDe(x,rs[1])} · nombre de ${rangNom(rs[1])} : ${groupe(String(nombreDe(x,rs[1])))}.` }; } },
{ d:"D", g(){ const x=rd(1,9,3);
  return { q:`Dans ${S(x)} : donne le nombre de dixièmes, le nombre de centièmes et le nombre de millièmes.`,
           s:`Nombre de dixièmes : ${groupe(String(nombreDe(x,-1)))} · nombre de centièmes : ${groupe(String(nombreDe(x,-2)))} · nombre de millièmes : ${groupe(String(nombreDe(x,-3)))}.` }; } },
{ d:"D", g(){ const nb=ri(12,98), ch=nb%10, r=pick([2,3]);
  const bas=nb*Math.pow(10,r), haut=bas+Math.pow(10,r)-1, ex=bas+ri(1,Math.pow(10,r)-1);
  return { q:`Trouve un nombre entier dont le chiffre des ${rangNom(r)} est ${ch} et le nombre de ${rangNom(r)} est ${nb}.`,
           s:`Le nombre de ${rangNom(r)} vaut ${nb}, donc le nombre est compris entre ${groupe(String(bas))} et ${groupe(String(haut))} ; son chiffre des ${rangNom(r)} y est bien ${ch}. Par exemple ${groupe(String(ex))} (toute réponse de cet intervalle convient).` }; } },
{ d:"D", g(){ const x=rd(1000,9999,0), r=pick([1,2]);
  return { q:`Vrai ou faux : « dans ${S(x)}, le nombre de ${rangNom(r)} est ${chiffreDe(x,r)} ». Justifie et corrige si nécessaire.`,
           s:`FAUX. ${chiffreDe(x,r)} est le CHIFFRE des ${rangNom(r)}. Le NOMBRE de ${rangNom(r)} est ${groupe(String(nombreDe(x,r)))}, car ${S(x)} = ${groupe(String(nombreDe(x,r)))} × ${groupe(String(Math.pow(10,r)))} + ${x.m-nombreDe(x,r)*Math.pow(10,r)}.` }; } },
{ d:"D", g(){ const c=ri(12,98),d0=ri(0,9),u=ri(0,9), n=c*100+d0*10+u;
  return { q:`Écris le nombre qui possède ${c} centaines, ${d0} dizaine${d0>1?"s":""} et ${u} unité${u>1?"s":""}. Donne ensuite son nombre de dizaines.`,
           s:`${c} × 100 + ${d0} × 10 + ${u} = ${groupe(String(n))}. Son nombre de dizaines est ${groupe(String(Math.floor(n/10)))}.` }; } },
{ d:"D", g(){ const x=rd(1,99,1);
  return { q:`Dans ${S(x)} : combien y a-t-il de dixièmes en tout ? Et combien de centièmes ?`,
           s:`${S(x)} = ${groupe(String(nombreDe(x,-1)))} dixièmes = ${groupe(String(nombreDe(x,-2)))} centièmes.` }; } },
];

/* deux décimaux « piégeux » : même partie entière, longueurs décimales différentes */
function paireProche() {
  const ent = ri(0, 19), a = D(ent * 100 + ri(1, 99), 2), b = D(ent * 10 + ri(0, 9), 1);
  return cmp(a, b) === 0 ? paireProche() : [a, b];
}
const M_COMPARER = [
{ d:"F", g(){ const [a,b]=paireProche();
  return { q:`Compare ${S(a)} et ${S(b)} en utilisant le symbole < ou >.`,
           s:`Les parties entières sont égales. On complète : ${avec(a,2)} et ${avec(b,2)}, donc ${chaine([{t:S(a),x:a},{t:S(b),x:b}],"c")}.` }; } },
{ d:"F", g(){ const e=ri(1,9),a=D(e*100+ri(1,9),2),b=D(e*100+ri(10,99),2);
  return { q:`Compare ${S(a)} et ${S(b)}.`,
           s:`On compare rang par rang : ${chaine([{t:S(a),x:a},{t:S(b),x:b}],"c")}.` }; } },
{ d:"M", g(){ const a=rd(1,29,1);
  return { q:`Compare ${S(a)} et ${avec(a,2)}, puis ${S(p10(a,-1))} et ${avec(p10(a,-1),3)}. Que conclus-tu ?`,
           s:`${S(a)} = ${avec(a,2)} et ${S(p10(a,-1))} = ${avec(p10(a,-1),3)}. Ajouter des zéros à la fin de la partie décimale ne change pas le nombre.` }; } },
{ d:"M", g(){ const n=ri(11,89),a=D(n,2),b=D(Math.floor(n/10),1);
  return { q:`Compare ${groupe(String(n))}/100 et ${Math.floor(n/10)}/10.`,
           s:`${groupe(String(n))}/100 = ${S(a)} et ${Math.floor(n/10)}/10 = ${S(b)}. Donc ${chaine([{t:`${groupe(String(n))}/100`,x:a},{t:`${Math.floor(n/10)}/10`,x:b}],"c")}.` }; } },
{ d:"M", g(){ const a=rd(1,49,2),k=pick([1,2]);
  return { q:`Compare ${S(p10(a,-k))} × ${groupe(String(Math.pow(10,k)))} et ${S(p10(a,k))} ÷ ${groupe(String(Math.pow(10,k)))}.`,
           s:`${S(p10(a,-k))} × ${groupe(String(Math.pow(10,k)))} = ${S(a)} et ${S(p10(a,k))} ÷ ${groupe(String(Math.pow(10,k)))} = ${S(a)} : les deux résultats sont ÉGAUX.` }; } },
{ d:"D", g(){ const g1=D(ri(5,9),1), p=D(ri(1000,1999),4);
  return { q:`Vrai ou faux : « un nombre qui a plus de chiffres après la virgule est plus grand ». Teste avec ${S(g1)} et ${S(p)}.`,
           s:`FAUX. ${S(p)} possède 4 chiffres après la virgule et ${S(g1)} un seul, pourtant ${S(g1)} > ${S(p)}. On compare rang par rang, on ne compte pas les chiffres.` }; } },
{ d:"D", g(){ const e=ri(2,9), a=D(e*1000+ri(1,9),3), b=D(e*100+ri(1,9),2);
  return { q:`Compare ${S(a)} et ${S(b)}, puis intercale un décimal entre les deux.`,
           s:`${avec(a,3)} et ${avec(b,3)} : ${chaine([{t:S(a),x:a},{t:S(b),x:b}],"c")}.\nEntre les deux on peut placer par exemple ${avec(D(Math.floor((resc(a,4).m+resc(b,4).m)/2),4),4)}.` }; } },
{ d:"D", g(){ const kg=rd(1,3,2), g0=ri(200,999);
  const gk=D(g0,0), gkKg=D(g0,3);
  return { q:`Compare la masse ${S(kg)} kg et la masse ${groupe(String(g0))} g.`,
           s:`${groupe(String(g0))} g = ${S(gkKg)} kg. Donc ${chaine([{t:`${S(kg)} kg`,x:kg},{t:`${groupe(String(g0))} g`,x:gkKg}],"c")}.` }; } },
{ d:"D", g(){ const lim=rd(2,9,1), ok=D(lim.m*10-ri(1,9),2), ko=D(lim.m*10+ri(1,9),2);
  const v=pick(["un pont","une passerelle","un plancher","une remorque"]);
  return { q:`${v.charAt(0).toUpperCase()+v.slice(1)} supporte au maximum ${S(lim)} t. Un premier véhicule pèse ${S(ok)} t, un second ${S(ko)} t. Lequel peut passer ?`,
           s:`On complète à deux décimales : la limite vaut ${avec(lim,2)}.\n${S(ok)} < ${avec(lim,2)} : le premier passe. ${S(ko)} > ${avec(lim,2)} : le second ne passe pas.` }; } },
{ d:"D", g(){ const a=rd(1,49,2), b=D(a.m,3);
  const c=D(a.m*10+ri(1,9),3);
  return { q:`Compare ${S(a)} et ${avec(c,3)}, puis explique l'erreur d'un élève qui répond « ${S(a)} est plus grand car il y a moins de chiffres ».`,
           s:`${avec(a,3)} < ${avec(c,3)} : c'est ${avec(c,3)} le plus grand. Le nombre de chiffres après la virgule ne dit rien sur la taille du nombre ; il faut comparer rang par rang.` }; } },
];

const M_RANGER = [
{ d:"F", g(){ const e=ri(1,9), t=melange([D(e*100+ri(0,9),2),D(e*100+ri(10,99),2),D(e*10+ri(0,9),1),D(e*100+ri(10,99),2)]);
  const it=t.map(x=>({t:S(x),x}));
  return { q:`Range dans l'ordre croissant : ${it.map(i=>i.t).join(" ; ")}.`, s:`${chaine(it,"c")}.` }; } },
{ d:"F", g(){ const t=melange([rd(0,2,1),rd(0,2,2),rd(0,2,1),rd(0,2,2)]);
  const it=t.map(x=>({t:S(x),x}));
  return { q:`Range dans l'ordre décroissant : ${it.map(i=>i.t).join(" ; ")}.`, s:`${chaine(it,"d")}.` }; } },
{ d:"M", g(){ const e=ri(1,9), t=melange([D(e*1000+ri(0,999),3),D(e*100+ri(0,99),2),D(e*10+ri(0,9),1),D(e*1000+ri(0,999),3)]);
  const it=t.map(x=>({t:S(x),x}));
  return { q:`Range dans l'ordre croissant : ${it.map(i=>i.t).join(" ; ")}.`,
           s:`On complète tout à 3 décimales : ${it.map(i=>avec(i.x,3)).join(" ; ")}.\nDonc ${chaine(it,"c")}.` }; } },
{ d:"M", g(){ const noms=melange(PRENOMS).slice(0,5), base=ri(2,4);
  const v=melange([D(base*100+ri(0,99),2),D(base*10+ri(0,9),1),D(base*100+ri(0,99),2),D(base*10+ri(0,9),1),D(base*100+ri(0,99),2)]);
  const it=v.map((x,i)=>({t:`${noms[i]} : ${S(x)} m`,x}));
  return { q:`Cinq élèves ont sauté en longueur : ${it.map(i=>i.t).join(" ; ")}. Classe ces sauts du meilleur au moins bon.`,
           s:`${chaine(it,"d")}.` }; } },
{ d:"M", g(){ const t=melange([rd(0,1,1),rd(0,1,2),rd(0,1,3),rd(0,1,2)]);
  const it=t.map(x=>({t:S(x),x}));
  return { q:`Range dans l'ordre décroissant : ${it.map(i=>i.t).join(" ; ")}.`, s:`${chaine(it,"d")}.` }; } },
{ d:"D", g(){ const e=ri(2,9), d1=ri(1,8);
  const t=melange([D(e*10+d1,1),D(e*100+d1*10,2),D(e*100+ri(0,9),2),D(e*1000+ri(0,99),3),D(e*100+d1*10+ri(1,9),2)]);
  const it=t.map(x=>({t:S(x),x}));
  return { q:`Range dans l'ordre croissant : ${it.map(i=>i.t).join(" ; ")}.`,
           s:`En complétant à 3 décimales : ${it.map(i=>avec(i.x,3)).join(" ; ")}.\nDonc ${chaine(it,"c")}${it.some((a,i)=>it.some((b,j)=>i<j&&cmp(a.x,b.x)===0))?" (attention : deux de ces écritures désignent le même nombre)":""}.` }; } },
{ d:"D", g(){ const e=ri(2,8);
  const t=melange([D(e,0),D(e*1000-1,3),D(e*100+ri(1,9),2),D(e*1000-ri(2,20),3),D(e*1000+ri(1,9),3)]);
  const it=t.map(x=>({t:S(x),x}));
  return { q:`Range dans l'ordre croissant : ${it.map(i=>i.t).join(" ; ")}.`,
           s:`${it.map(i=>avec(i.x,3)).join(" ; ")} une fois complétés à 3 décimales.\nDonc ${chaine(it,"c")}.` }; } },
{ d:"D", g(){ const n1=ri(3,8), n2=ri(41,49), n3=ri(41,49);
  const it=[{t:`${n1}/10`,x:D(n1,1)},{t:`0,${n2}`,x:D(n2,2)},{t:`${n3}/100`,x:D(n3,2)},{t:`0,${n1}`,x:D(n1,1)}];
  return { q:`Range dans l'ordre croissant : ${it.map(i=>i.t).join(" ; ")}.`,
           s:`${n1}/10 = ${S(D(n1,1))} et ${n3}/100 = ${S(D(n3,2))}.\nDonc ${chaine(it,"c")}.` }; } },
{ d:"D", g(){ const b=rd(11,89,1);
  const it=[{t:S(b),x:b},{t:`${S(p10(b,1))} ÷ 100`,x:p10(b,-1)},{t:`${S(p10(b,-1))} × 10`,x:b},{t:`${S(p10(b,2))} ÷ 1000`,x:p10(b,-1)}];
  return { q:`Range dans l'ordre décroissant : ${it.map(i=>i.t).join(" ; ")}.`,
           s:`${it.map(i=>`${i.t} = ${S(i.x)}`).join(" · ")}.\nDonc ${chaine(it,"d")}.` }; } },
{ d:"D", g(){ const a=rd(1,2,2), g1=ri(700,999), b=rd(1,2,2), g2=ri(1000,1400);
  const it=[{t:`${S(a)} kg`,x:a},{t:`${groupe(String(g1))} g`,x:D(g1,3)},{t:`${S(b)} kg`,x:b},{t:`${groupe(String(g2))} g`,x:D(g2,3)}];
  return { q:`Range ces masses dans l'ordre croissant : ${it.map(i=>i.t).join(" ; ")}.`,
           s:`On convertit tout en kilogrammes : ${groupe(String(g1))} g = ${S(D(g1,3))} kg et ${groupe(String(g2))} g = ${S(D(g2,3))} kg.\nDonc ${chaine(it,"c")}.` }; } },
];

const M_ARRONDIR = [
{ d:"F", g(){ const x=rd(1,99,2);
  return { q:`Arrondis ${S(x)} à l'unité.`,
           s:`Le chiffre des dixièmes est ${chiffreDe(x,-1)}, ${chiffreDe(x,-1)>=5?"supérieur ou égal à 5 : on arrondit au-dessus":"inférieur à 5 : on garde la partie entière"}. ${S(x)} ≈ ${S(arrondi(x,0))}.` }; } },
{ d:"F", g(){ const x=rd(1,99,2);
  return { q:`Arrondis ${S(x)} au dixième.`,
           s:`Le chiffre des centièmes est ${chiffreDe(x,-2)}, ${chiffreDe(x,-2)>=5?"donc on augmente le dixième":"donc on garde le dixième"}. ${S(x)} ≈ ${avec(arrondi(x,-1),1)}.` }; } },
{ d:"F", g(){ const x=rd(100,9999,0), k=pick([1,2]);
  return { q:`Arrondis ${S(x)} à la ${k===1?"dizaine":"centaine"}.`,
           s:`Le chiffre des ${rangNom(k-1)} est ${chiffreDe(x,k-1)}, donc ${S(x)} ≈ ${S(arrondi(x,k))}.` }; } },
{ d:"M", g(){ const x=rd(1,99,3);
  return { q:`Arrondis ${S(x)} au centième, puis au dixième.`,
           s:`Au centième : le chiffre suivant est ${chiffreDe(x,-3)}, donc ${S(x)} ≈ ${avec(arrondi(x,-2),2)}.\nAu dixième : le chiffre des centièmes est ${chiffreDe(x,-2)}, donc ${S(x)} ≈ ${avec(arrondi(x,-1),1)}.` }; } },
{ d:"M", g(){ const x=rd(1,99,2);
  return { q:`Donne la troncature à l'unité de ${S(x)}, puis son arrondi à l'unité.`,
           s:`Troncature : on coupe après les unités, on obtient ${S(troncature(x,0))}. Arrondi : le chiffre des dixièmes est ${chiffreDe(x,-1)}, donc ${S(arrondi(x,0))}.${cmp(troncature(x,0),arrondi(x,0))!==0?" Les deux résultats diffèrent.":" Ici les deux coïncident."}` }; } },
{ d:"M", g(){ const n=ri(2,9), x=D(n*100-ri(1,4),1);
  return { q:`Arrondis ${S(x)} à l'unité, puis à la dizaine.`,
           s:`À l'unité : ${S(x)} ≈ ${S(arrondi(x,0))}. À la dizaine : ${S(x)} ≈ ${S(arrondi(x,1))}.` }; } },
{ d:"D", g(){ const a=ri(1,8), b=ri(0,8), x=D(a*1000+b*100+4*10+ri(5,9),4);
  return { q:`Arrondis ${S(x)} au millième, au centième, puis au dixième. Attention au piège.`,
           s:`Au millième : ${S(x)} ≈ ${avec(arrondi(x,-3),3)}.\nAu centième : le chiffre des millièmes est ${chiffreDe(x,-3)}, donc ${S(x)} ≈ ${avec(arrondi(x,-2),2)}.\nAu dixième : ${S(x)} ≈ ${avec(arrondi(x,-1),1)}.\nPiège : il ne faut PAS arrondir en cascade à partir du résultat au millième, mais toujours repartir du nombre de départ.` }; } },
{ d:"D", g(){ const a=rd(1,49,1);
  return { q:`L'arrondi au dixième d'un nombre est ${avec(a,1)}. Entre quelles valeurs ce nombre se situe-t-il ?`,
           s:`Il est compris entre ${avec(D(a.m*10-5,2),2)} et ${avec(D(a.m*10+5,2),2)} : ${avec(D(a.m*10-5,2),2)} ≤ n < ${avec(D(a.m*10+5,2),2)}.` }; } },
{ d:"D", g(){ const d0=pick([3,6,7,9,11]), n=ri(10,90); if(n%d0===0) return this.g();
  const q100=Math.floor(n*100/d0);
  return { q:`Calcule ${n} ÷ ${d0}, puis donne une valeur approchée au centième par défaut et par excès.`,
           s:`${n} ÷ ${d0} ≈ ${avec(D(Math.floor(n*10000/d0),4),4)}…\nPar défaut : ${avec(D(q100,2),2)}. Par excès : ${avec(D(q100+1,2),2)}.\nDonc ${avec(D(q100,2),2)} < ${n} ÷ ${d0} < ${avec(D(q100+1,2),2)}.` }; } },
{ d:"D", g(){ const x=rd(10,99,3), v=pick(VILLES);
  return { q:`Un article coûte ${S(x)} €. Donne le prix arrondi au centime, puis à l'euro. Lequel le commerçant utilise-t-il pour afficher son prix ?`,
           s:`Au centime : ${avec(arrondi(x,-2),2)} €. À l'euro : ${S(arrondi(x,0))} €.\nLe commerçant affiche le prix au centime, car c'est la plus petite unité de monnaie : ${avec(arrondi(x,-2),2)} €.` }; } },
{ d:"D", g(){ const n=ri(10000,99999), v=pick(VILLES);
  return { q:`La population de ${v} est de ${groupe(String(n))} habitants. Donne l'arrondi au millier, à la centaine, puis à la dizaine.`,
           s:`Au millier : ${S(arrondi(D(n),3))}. À la centaine : ${S(arrondi(D(n),2))}. À la dizaine : ${S(arrondi(D(n),1))}.` }; } },
{ d:"D", g(){ const a=ri(1,8), x=D(a*10000+4*1000+ri(0,9)*100+ri(50,99),4);
  return { q:`Vrai ou faux : « arrondir ${S(x)} au dixième donne ${avec(D(a*10+5,1),1)} ». Justifie.`,
           s:`FAUX. Pour arrondir au dixième on regarde le chiffre des centièmes : c'est ${chiffreDe(x,-2)}, donc ${S(x)} ≈ ${avec(arrondi(x,-1),1)}. L'erreur consiste à arrondir d'abord au centième puis au dixième.` }; } },
];

const M_ECRIRE = [
{ d:"F", g(){ const n=ri(1001,9999);
  return { q:`Écris en chiffres : ${enLettres(n)}.`, s:`${groupe(String(n))}.` }; } },
{ d:"F", g(){ const n=ri(100,999)*100;
  return { q:`Écris en chiffres : ${enLettres(n)}.`, s:`${groupe(String(n))}.` }; } },
{ d:"F", g(){ const n=ri(10000,99999);
  return { q:`Écris en chiffres : ${enLettres(n)}.`, s:`${groupe(String(n))}.` }; } },
{ d:"M", g(){ const n=ri(100000,999999);
  return { q:`Écris en chiffres : ${enLettres(n)}.`,
           s:`${groupe(String(n))}.${String(n).includes("0")?" Les rangs non cités sont remplis par des zéros.":""}` }; } },
{ d:"M", g(){ const n=ri(2,99)*1000000+ri(1,999)*1000;
  return { q:`Écris en chiffres : ${enLettres(n)}.`, s:`${groupe(String(n))}.` }; } },
{ d:"M", g(){ const n=ri(10000,99999);
  return { q:`Écris en chiffres : ${enLettres(n)}, puis donne son nombre de milliers.`,
           s:`${groupe(String(n))}. Nombre de milliers : ${groupe(String(Math.floor(n/1000)))}.` }; } },
{ d:"D", g(){ const n=ri(2,9)*1000000+ri(1,9)*100000+ri(0,99)*1000+ri(1,9)*100;
  return { q:`Écris en chiffres : ${enLettres(n)}.`, s:`${groupe(String(n))}.` }; } },
{ d:"D", g(){ const n=ri(100,999)*1000000+ri(1,99)*1000+ri(1,9);
  return { q:`Écris en chiffres : ${enLettres(n)}.`,
           s:`${groupe(String(n))}. Les rangs non cités (centaines de mille, centaines, dizaines) sont remplis par des zéros.` }; } },
{ d:"D", g(){ const u=ri(1,9), c=ri(10,99);
  return { q:`Écris en chiffres : ${U[u]} unité${u>1?"s":""} et ${enLettres(c)} centièmes.`,
           s:`${S(D(u*100+c,2))}.` }; } },
{ d:"D", g(){ const d0=ri(1,9), m=ri(1,9);
  return { q:`Écris en chiffres : ${U[d0]} dizaine${d0>1?"s":""} et ${U[m]} millième${m>1?"s":""}.`,
           s:`${S(D(d0*10000+m,3))} : il n'y a ni dixièmes ni centièmes, on écrit des zéros à ces rangs.` }; } },
{ d:"D", g(){ const n=ri(1,9)*1000000000+ri(1,9)*100000000;
  return { q:`Écris en chiffres : ${enLettres(n)}. Combien ce nombre possède-t-il de chiffres ?`,
           s:`${groupe(String(n))}. Il possède ${String(n).length} chiffres.` }; } },
{ d:"D", g(){ const n=ri(10000,99999);
  return { q:`Écris en chiffres : ${enLettres(n)}, puis donne le chiffre des centaines et le nombre de centaines.`,
           s:`${groupe(String(n))}. Chiffre des centaines : ${Math.floor(n/100)%10}. Nombre de centaines : ${groupe(String(Math.floor(n/100)))}.` }; } },
];

const M_INTERCALER = [
{ d:"F", g(){ const a=ri(1,29), b=a+1;
  return { q:`Intercale un nombre décimal entre ${a} et ${b}.`,
           s:`Par exemple ${S(D(a*10+ri(1,9),1))}, car ${a} < ce nombre < ${b}. Toute réponse strictement comprise entre ${a} et ${b} convient.` }; } },
{ d:"F", g(){ const a=rd(1,29,1), b=D(a.m+1,1);
  return { q:`Intercale un nombre décimal entre ${avec(a,1)} et ${avec(b,1)}.`,
           s:`On descend au centième : par exemple ${avec(D(a.m*10+5,2),2)}, car ${avec(a,2)} < ${avec(D(a.m*10+5,2),2)} < ${avec(b,2)}.` }; } },
{ d:"M", g(){ const a=rd(0,9,1), b=D(a.m+1,1);
  return { q:`Intercale deux nombres décimaux entre ${avec(a,1)} et ${avec(b,1)}.`,
           s:`Par exemple ${avec(D(a.m*10+ri(1,4),2),2)} et ${avec(D(a.m*10+ri(5,9),2),2)}, car ${avec(a,2)} < ces deux nombres < ${avec(b,2)}.` }; } },
{ d:"M", g(){ const a=rd(1,29,2), b=D(a.m+1,2);
  return { q:`Intercale un nombre décimal entre ${avec(a,2)} et ${avec(b,2)}.`,
           s:`Ces deux nombres sont consécutifs au centième : il faut descendre au millième. Par exemple ${avec(D(a.m*10+5,3),3)}, car ${avec(a,3)} < ${avec(D(a.m*10+5,3),3)} < ${avec(b,3)}.` }; } },
{ d:"M", g(){ const a=rd(1,29,1), b=D(a.m+1,1), mil=D(a.m*10+5,2);
  return { q:`Intercale entre ${avec(a,1)} et ${avec(b,1)} un décimal plus proche de ${avec(b,1)} que de ${avec(a,1)}.`,
           s:`Le milieu vaut ${avec(mil,2)} : il faut le dépasser. Par exemple ${avec(D(a.m*10+ri(6,9),2),2)}.` }; } },
{ d:"D", g(){ const a=rd(1,29,2), b=D(a.m+1,2);
  return { q:`Intercale trois nombres décimaux entre ${avec(a,2)} et ${avec(b,2)}.`,
           s:`Il faut aller jusqu'aux millièmes : ${avec(D(a.m*10+1,3),3)} ; ${avec(D(a.m*10+5,3),3)} ; ${avec(D(a.m*10+9,3),3)} conviennent, car ${avec(a,3)} < ces trois nombres < ${avec(b,3)}.` }; } },
{ d:"D", g(){ const n=ri(2,9), a=D(n*1000-1,3);
  return { q:`Intercale un nombre décimal entre ${avec(a,3)} et ${n}.`,
           s:`${n} s'écrit ${avec(D(n*1000,3),3)} : ces deux nombres sont consécutifs au millième. On descend au dix-millième : par exemple ${avec(D(n*10000-5,4),4)}.` }; } },
{ d:"D", g(){ const a=rd(1,29,2), b=D(a.m+1,2);
  return { q:`Combien existe-t-il de nombres décimaux à trois chiffres après la virgule strictement compris entre ${avec(a,2)} et ${avec(b,2)} ?`,
           s:`Ce sont ${avec(D(a.m*10+1,3),3)} ; ${avec(D(a.m*10+2,3),3)} ; … ; ${avec(D(a.m*10+9,3),3)} : il y en a 9.` }; } },
{ d:"D", g(){ const a=rd(1,29,1), b=D(a.m+1,1);
  return { q:`Peut-on toujours intercaler un décimal entre deux décimaux différents ? Justifie avec ${avec(a,1)} et ${avec(b,1)}.`,
           s:`Oui. Il suffit d'ajouter un rang après la virgule : entre ${avec(a,3)} et ${avec(b,3)} on trouve par exemple ${avec(D(a.m*100+50,3),3)}. On peut recommencer indéfiniment : entre deux décimaux distincts il en existe toujours une infinité d'autres.` }; } },
{ d:"D", g(){ const n1=ri(1,8), n2=n1+1;
  return { q:`Intercale un nombre décimal entre ${n1}/10 et ${n2}/10, puis écris-le sous forme de fraction décimale.`,
           s:`${n1}/10 = ${S(D(n1,1))} et ${n2}/10 = ${S(D(n2,1))}. Par exemple ${avec(D(n1*10+5,2),2)}, qui s'écrit ${n1*10+5}/100.` }; } },
];

/* additions / soustractions posées */
const M_ADDITION = [
{ d:"F", g(){ const a=rd(1,49,1),b=rd(1,9,1);
  return { q:`Pose et calcule : ${S(a)} + ${S(b)}.`, s:`${S(a)} + ${S(b)} = ${S(add(a,b))} (on aligne les virgules l'une sous l'autre).` }; } },
{ d:"F", g(){ const a=rd(1,49,2),b=rd(1,9,1);
  return { q:`Pose et calcule : ${S(a)} + ${S(b)}.`,
           s:`On écrit ${S(b)} = ${avec(b,2)} pour aligner les rangs : ${avec(a,2)} + ${avec(b,2)} = ${avec(add(a,b),2)}.` }; } },
{ d:"F", g(){ const a=rd(10,99,1),b=rd(1,9,1);
  return { q:`Pose et calcule : ${S(a)} + ${S(b)}.`, s:`${S(a)} + ${S(b)} = ${S(add(a,b))}.` }; } },
{ d:"M", g(){ const a=rd(10,99,1),b=rd(1,9,2);
  return { q:`Pose et calcule : ${S(a)} + ${S(b)}.`, s:`${avec(a,2)} + ${avec(b,2)} = ${avec(add(a,b),2)}.` }; } },
{ d:"M", g(){ const a=rd(0,1,2),b=rd(2,29,0),c=rd(1,9,1);
  return { q:`Pose et calcule : ${S(a)} + ${S(b)} + ${S(c)}.`,
           s:`${avec(a,2)} + ${avec(b,2)} + ${avec(c,2)} = ${avec(add(add(a,b),c),2)}.` }; } },
{ d:"M", g(){ const a=rd(100,999,2),b=rd(10,99,1);
  return { q:`Pose et calcule : ${S(a)} + ${S(b)}.`, s:`${avec(a,2)} + ${avec(b,2)} = ${avec(add(a,b),2)}.` }; } },
{ d:"D", g(){ const a=rd(1,9,3),b=rd(10,99,1),c=rd(0,0,2);
  const c2=D(ri(1,99),2);
  return { q:`Pose et calcule : ${S(a)} + ${S(b)} + ${S(c2)}.`,
           s:`${avec(a,3)} + ${avec(b,3)} + ${avec(c2,3)} = ${avec(add(add(a,b),c2),3)}.` }; } },
{ d:"D", g(){ const a=rd(1,49,1),r=rd(5,99,2);
  const t=add(a,r);
  return { q:`Complète l'égalité : ${S(a)} + … = ${avec(t,2)}.`,
           s:`Le terme manquant est ${avec(t,2)} − ${avec(a,2)} = ${avec(r,2)}. Vérification : ${avec(a,2)} + ${avec(r,2)} = ${avec(t,2)}.` }; } },
{ d:"D", g(){ const a=rd(1,9,1),b=rd(0,0,2); const b2=D(ri(10,99),2);
  return { q:`Un élève pose ${S(a)} + ${S(b2)} en alignant les chiffres par la droite et trouve ${S(D(a.m*100+b2.m,2))}. Explique son erreur et donne le bon résultat.`,
           s:`Il a additionné les chiffres sans tenir compte de leur valeur. Il faut aligner les VIRGULES : ${avec(a,2)} + ${avec(b2,2)} = ${avec(add(a,b2),2)}.` }; } },
{ d:"D", g(){ const a=rd(0,0,3),b=rd(0,0,3); const a2=D(ri(100,499),3), b2=D(1000-a2.m,3), c=rd(1,9,1);
  return { q:`Donne un ordre de grandeur de ${S(a2)} + ${S(b2)} + ${S(c)}, puis calcule la somme exacte.`,
           s:`Ordre de grandeur : environ 0 + 1 + ${S(arrondi(c,0))} = ${S(add(D(1),arrondi(c,0)))}.\nCalcul exact : ${S(a2)} + ${S(b2)} = 1, puis 1 + ${S(c)} = ${S(add(D(1),c))}.` }; } },
{ d:"D", g(){ const m1=rd(10,29,1), m2=rd(1,9,2), cm=ri(5,95);
  const tot=add(add(m1,m2),D(cm,2));
  return { q:`Additionne ${S(m1)} m ; ${S(m2)} m et ${cm} cm. Donne le résultat en mètres.`,
           s:`${cm} cm = ${avec(D(cm,2),2)} m. Puis ${avec(m1,2)} + ${avec(m2,2)} + ${avec(D(cm,2),2)} = ${avec(tot,2)} m.` }; } },
];

const M_SOUSTRACTION = [
{ d:"F", g(){ const a=rd(10,99,1),b=rd(1,9,1); const [g1,p]=cmp(a,b)>0?[a,b]:[b,a];
  return { q:`Pose et calcule : ${S(g1)} − ${S(p)}.`, s:`${S(g1)} − ${S(p)} = ${S(sub(g1,p))}.` }; } },
{ d:"F", g(){ const a=rd(5,99,2),b=rd(1,4,1);
  return { q:`Pose et calcule : ${S(a)} − ${S(b)}.`, s:`${avec(a,2)} − ${avec(b,2)} = ${avec(sub(a,b),2)}.` }; } },
{ d:"F", g(){ const a=rd(10,99,1),b=rd(1,9,0);
  return { q:`Pose et calcule : ${S(a)} − ${S(b)}.`, s:`${avec(a,1)} − ${avec(b,1)} = ${S(sub(a,b))}.` }; } },
{ d:"M", g(){ const a=rd(10,99,1),b=rd(1,9,2);
  return { q:`Pose et calcule : ${S(a)} − ${S(b)}.`, s:`${avec(a,2)} − ${avec(b,2)} = ${avec(sub(a,b),2)}.` }; } },
{ d:"M", g(){ const a=pick([100,200,50,500,1000]),b=rd(10,49,1);
  return { q:`Pose et calcule : ${a} − ${S(b)}.`, s:`${avec(D(a),1)} − ${avec(b,1)} = ${S(sub(D(a),b))}.` }; } },
{ d:"M", g(){ const a=ri(2,9),b=rd(0,0,2); const b2=D(ri(5,99),2);
  return { q:`Pose et calcule : ${a} − ${S(b2)}.`, s:`${avec(D(a),2)} − ${avec(b2,2)} = ${avec(sub(D(a),b2),2)}.` }; } },
{ d:"D", g(){ const a=rd(20,99,2),b=rd(1,19,3);
  return { q:`Pose et calcule : ${S(a)} − ${S(b)}.`, s:`${avec(a,3)} − ${avec(b,3)} = ${avec(sub(a,b),3)}.` }; } },
{ d:"D", g(){ const a=rd(10,49,1),r=rd(1,9,2); const d0=sub(a,r);
  return { q:`Complète l'égalité : ${S(a)} − … = ${avec(d0,2)}.`,
           s:`Le terme manquant est ${avec(a,2)} − ${avec(d0,2)} = ${avec(r,2)}. Vérification : ${avec(a,2)} − ${avec(r,2)} = ${avec(d0,2)}.` }; } },
{ d:"D", g(){ const a=ri(10,50),b=rd(1,9,1); const r=sub(D(a),b);
  return { q:`Calcule ${a} − ${S(b)}, puis vérifie ton résultat par une addition.`,
           s:`${avec(D(a),1)} − ${S(b)} = ${S(r)}. Vérification : ${S(r)} + ${S(b)} = ${S(add(r,b))}.` }; } },
{ d:"D", g(){ const a=rd(30,99,1),b=rd(1,19,1),c=rd(1,9,2);
  return { q:`Calcule ${S(a)} − ${S(b)} − ${S(c)} en détaillant les étapes.`,
           s:`${avec(a,2)} − ${avec(b,2)} = ${avec(sub(a,b),2)}, puis ${avec(sub(a,b),2)} − ${avec(c,2)} = ${avec(sub(sub(a,b),c),2)}.` }; } },
{ d:"D", g(){ const tot=rd(2,5,1), cm=ri(20,80), m2=rd(1,1,1);
  const reste=sub(sub(tot,D(cm,2)),m2);
  return { q:`Dans une planche de ${S(tot)} m, on coupe un morceau de ${cm} cm puis un morceau de ${S(m2)} m. Quelle longueur reste-t-il, en mètres ?`,
           s:`${cm} cm = ${avec(D(cm,2),2)} m.\n${avec(tot,2)} − ${avec(D(cm,2),2)} = ${avec(sub(tot,D(cm,2)),2)}, puis ${avec(sub(tot,D(cm,2)),2)} − ${avec(m2,2)} = ${avec(reste,2)} m.` }; } },
];

const M_MULTIPLICATION = [
{ d:"F", g(){ const a=rd(1,9,1),b=ri(2,9); const p=mul(a,D(b));
  return { q:`Pose et calcule : ${S(a)} × ${b}.`,
           s:`${a.m} × ${b} = ${groupe(String(a.m*b))}, et il y a 1 chiffre après la virgule : ${S(a)} × ${b} = ${S(p)}.` }; } },
{ d:"F", g(){ const a=rd(1,9,2),b=ri(2,9); const p=mul(a,D(b));
  return { q:`Pose et calcule : ${S(a)} × ${b}.`,
           s:`${a.m} × ${b} = ${groupe(String(a.m*b))}, et il y a 2 chiffres après la virgule : ${S(a)} × ${b} = ${S(p)}.` }; } },
{ d:"F", g(){ const a=rd(10,49,1),b=ri(2,5); const p=mul(a,D(b));
  return { q:`Pose et calcule : ${S(a)} × ${b}.`, s:`${a.m} × ${b} = ${groupe(String(a.m*b))} ; avec 1 chiffre après la virgule : ${S(p)}.` }; } },
{ d:"M", g(){ const a=rd(1,9,1),b=rd(1,9,1); const p=mul(a,b);
  return { q:`Pose et calcule : ${S(a)} × ${S(b)}.`,
           s:`${a.m} × ${b.m} = ${groupe(String(a.m*b.m))}, et il y a 1 + 1 = 2 chiffres après la virgule : ${S(a)} × ${S(b)} = ${S(p)}.` }; } },
{ d:"M", g(){ const a=D(ri(1,9),1),b=D(ri(1,9),1); const p=mul(a,b);
  return { q:`Pose et calcule : 0,${a.m} × 0,${b.m}.`,
           s:`${a.m} × ${b.m} = ${a.m*b.m}, et il y a 1 + 1 = 2 chiffres après la virgule : 0,${a.m} × 0,${b.m} = ${avec(p,2)}.` }; } },
{ d:"M", g(){ const a=rd(10,49,1),b=rd(1,3,1); const p=mul(a,b);
  return { q:`Pose et calcule : ${S(a)} × ${S(b)}.`,
           s:`${a.m} × ${b.m} = ${groupe(String(a.m*b.m))} ; 1 + 1 = 2 chiffres après la virgule : ${S(p)}.` }; } },
{ d:"D", g(){ const a=rd(1,9,2),b=rd(1,9,2); const p=mul(a,b);
  return { q:`Pose et calcule : ${S(a)} × ${S(b)}.`,
           s:`${a.m} × ${b.m} = ${groupe(String(a.m*b.m))}, et il y a 2 + 2 = 4 chiffres après la virgule : ${S(a)} × ${S(b)} = ${S(p)}.` }; } },
{ d:"D", g(){ const u=ri(11,49),v=ri(11,49); const pr=u*v;
  return { q:`Sachant que ${u} × ${v} = ${groupe(String(pr))}, donne sans poser d'opération : ${S(D(u,1))} × ${S(D(v,1))} ; ${S(D(u,2))} × ${v} ; ${S(D(u,1))} × ${S(D(v,3))}.`,
           s:`${S(D(u,1))} × ${S(D(v,1))} = ${S(D(pr,2))} (2 chiffres après la virgule)\n${S(D(u,2))} × ${v} = ${S(D(pr,2))} (2 chiffres)\n${S(D(u,1))} × ${S(D(v,3))} = ${S(D(pr,4))} (4 chiffres).` }; } },
{ d:"D", g(){ const a=D(ri(2,9),2),b=D(ri(2,9),2); const p=mul(a,b);
  return { q:`Calcule ${avec(a,2)} × ${avec(b,2)}, puis explique le nombre de zéros du résultat.`,
           s:`${a.m} × ${b.m} = ${a.m*b.m}, et il y a 2 + 2 = 4 chiffres après la virgule : ${avec(p,4)}, soit ${S(p)}. Les zéros viennent des rangs vides entre la virgule et les chiffres significatifs.` }; } },
{ d:"D", g(){ const a=D(ri(2,9),1),b=D(ri(2,9),1); const p=mul(a,b);
  return { q:`Un élève trouve ${S(D(a.m*b.m,1))} comme résultat de ${avec(a,1)} × ${avec(b,1)}. Contrôle sa réponse.`,
           s:`Les deux facteurs sont inférieurs à 1, donc le produit doit être inférieur à ${avec(a,1)} : la réponse ${S(D(a.m*b.m,1))} est impossible.\n${a.m} × ${b.m} = ${a.m*b.m} avec 2 chiffres après la virgule : ${avec(a,1)} × ${avec(b,1)} = ${avec(p,2)}.` }; } },
{ d:"D", g(){ const L=rd(2,9,1),l=rd(1,5,1); const A=mul(L,l);
  return { q:`Calcule l'aire d'un rectangle de ${S(L)} cm de longueur et ${S(l)} cm de largeur.`,
           s:`${L.m} × ${l.m} = ${groupe(String(L.m*l.m))}, avec 1 + 1 = 2 chiffres après la virgule : ${S(L)} × ${S(l)} = ${S(A)}. L'aire vaut ${S(A)} cm².` }; } },
];

const M_DIVISION = [
{ d:"F", g(){ const q0=rd(1,9,1),d0=ri(2,9); const n=mul(q0,D(d0));
  return { q:`Calcule ${S(n)} ÷ ${d0}.`, s:`${S(n)} ÷ ${d0} = ${S(q0)}.` }; } },
{ d:"F", g(){ const q0=rd(1,9,1),d0=pick([2,4,5]); const n=mul(q0,D(d0));
  return { q:`Calcule ${S(n)} ÷ ${d0}.`, s:`${S(n)} ÷ ${d0} = ${S(q0)} (on vérifie : ${S(q0)} × ${d0} = ${S(n)}).` }; } },
{ d:"F", g(){ const q0=rd(10,49,1),d0=ri(2,5); const n=mul(q0,D(d0));
  return { q:`Calcule ${S(n)} ÷ ${d0}.`, s:`${S(n)} ÷ ${d0} = ${S(q0)}.` }; } },
{ d:"M", g(){ const d0=pick([4,8,5,25,2]),n=ri(3,49), e=decNec(n,d0); if(e<0||e>3) return null;
  const q0=D(n*Math.pow(10,e)/d0,e);
  return { q:`Pose et calcule ${n} ÷ ${d0}.`,
           s:`${n} ÷ ${d0} = ${S(q0)}. On abaisse des zéros après la virgule pour poursuivre la division${e?` : il en faut ${e}`:""}.\nVérification : ${S(q0)} × ${d0} = ${n}.` }; } },
{ d:"M", g(){ const q0=rd(1,9,2),d0=ri(2,9); const n=mul(q0,D(d0));
  return { q:`Pose et calcule ${S(n)} ÷ ${d0}.`, s:`${S(n)} ÷ ${d0} = ${S(q0)}.` }; } },
{ d:"M", g(){ const q0=ri(2,19),d0=D(ri(2,9),1); const n=mul(D(q0),d0);
  return { q:`Calcule ${S(n)} ÷ ${avec(d0,1)}.`,
           s:`On multiplie les deux nombres par 10 : ${S(n)} ÷ ${avec(d0,1)} = ${S(p10(n,1))} ÷ ${d0.m} = ${q0}.` }; } },
{ d:"D", g(){ const q0=rd(1,9,2),d0=rd(1,3,1); const n=mul(q0,d0);
  return { q:`Pose et calcule ${S(n)} ÷ ${S(d0)}.`,
           s:`On multiplie les deux nombres par 10 : ${S(n)} ÷ ${S(d0)} = ${S(p10(n,1))} ÷ ${d0.m} = ${S(q0)}.` }; } },
{ d:"D", g(){ const d0=pick([3,6,7,9]),n=ri(1,20); if(n%d0===0) return this.g();
  return { q:`Calcule ${n} ÷ ${d0} et donne une valeur approchée du quotient au centième. Que remarques-tu ?`,
           s:`${n} ÷ ${d0} ≈ ${avec(D(Math.floor(n*100000/d0),5),5)}… La division ne s'arrête pas : le quotient n'est pas un nombre décimal.\nAu centième : ${n} ÷ ${d0} ≈ ${avec(arrondi(D(Math.floor(n*100000/d0),5),-2),2)}.` }; } },
{ d:"D", g(){ const d0=pick([8,16,4,32,25]),n=ri(5,60), e=decNec(n,d0); if(e<0) return null;
  const q0=D(n*Math.pow(10,e)/d0,e);
  return { q:`Pose et calcule ${n} ÷ ${d0}, puis vérifie ton résultat par une multiplication.`,
           s:`${n} ÷ ${d0} = ${S(q0)} : la division s'arrête après ${e} décimale${e>1?"s":""}.\nVérification : ${S(q0)} × ${d0} = ${n}.` }; } },
{ d:"D", g(){ const p=ri(2,9), part=D(ri(150,999),2); const tot=mul(part,D(p));
  return { q:`${p} personnes se partagent équitablement ${S2(tot)} €. Quelle est la part de chacune ?`,
           s:`${S2(tot)} ÷ ${p} = ${S2(part)}. Chacune reçoit ${S2(part)} €.` }; } },
{ d:"D", g(){ const cap=D(pick([25,50,75,125,250]),3), nb=ri(8,40); const tot=mul(cap,D(nb));
  return { q:`Combien de bouteilles de ${S(cap)} L peut-on remplir avec ${S(tot)} L ? Reste-t-il du liquide ?`,
           s:`${S(tot)} ÷ ${S(cap)} = ${groupe(String(resc(tot,3).m))} ÷ ${cap.m} = ${nb}. On remplit exactement ${nb} bouteilles et il ne reste rien.` }; } },
];

/* plus petit billet permettant de payer le montant x et de recevoir de la monnaie */
const BILLETS = [5, 10, 20, 50, 100, 200];
const billetPour = x => BILLETS.find(b => cmp(D(b), x) > 0) || 500;

const M_MONNAIE = [
{ d:"F", g(){ const p=D(ri(300,1899),2), b=billetPour(p);
  return { q:`${LIVRES[ri(0,LIVRES.length-1)].replace(/^un(e?) /,m=>m.charAt(0).toUpperCase()+m.slice(1))} coûte ${S2(p)} €. Tu paies avec un billet de ${b} €. Combien le libraire te rend-il ?`,
           s:`${b} − ${S2(p)} = ${S2(sub(D(b),p))}. Il rend ${S2(sub(D(b),p))} €.` }; } },
{ d:"F", g(){ const p=D(ri(150,899),2), n=ri(2,5);
  return { q:`Tu achètes ${n} carnets à ${S2(p)} € l'unité. Quel est le prix total ?`,
           s:`${S2(p)} × ${n} = ${S2(mul(p,D(n)))}. Le total est de ${S2(mul(p,D(n)))} €.` }; } },
{ d:"F", g(){ const p=D(ri(500,1499),2), r=D(ri(50,499),2);
  return { q:`Un client achète un livre à ${S2(p)} € et donne ${S2(add(p,r))} €. Quelle monnaie le libraire rend-il ?`,
           s:`${S2(add(p,r))} − ${S2(p)} = ${S2(r)}. Il rend ${S2(r)} €.` }; } },
{ d:"M", g(){ const a=D(ri(500,1499),2),b=D(ri(500,1499),2),c=D(ri(300,999),2);
  const t=add(add(a,b),c), n=billetPour(t);
  return { q:`Un client achète trois livres à ${S2(a)} €, ${S2(b)} € et ${S2(c)} €. Calcule le total, puis la monnaie rendue sur ${n} €.`,
           s:`Total : ${S2(a)} + ${S2(b)} + ${S2(c)} = ${S2(t)} €.\nMonnaie : ${n} − ${S2(t)} = ${S2(sub(D(n),t))} €.` }; } },
{ d:"M", g(){ const a=D(ri(900,1899),2),b=D(ri(100,499),2);
  const t=add(a,b), n=billetPour(t);
  return { q:`Un roman coûte ${S2(a)} € et un marque-page ${S2(b)} €. Le client paie avec ${n} €. Quelle monnaie le libraire rend-il ?`,
           s:`Total : ${S2(a)} + ${S2(b)} = ${S2(t)} €. Monnaie : ${n} − ${S2(t)} = ${S2(sub(D(n),t))} €.` }; } },
{ d:"M", g(){ const r=D(ri(50,899),2), b=pick([10,20]);
  return { q:`Le libraire rend ${S2(r)} € sur un billet de ${b} €. Quel était le prix de l'achat ?`,
           s:`${b} − ${S2(r)} = ${S2(sub(D(b),r))}. L'achat coûtait ${S2(sub(D(b),r))} €.` }; } },
{ d:"D", g(){ const p=D(ri(500,1499),2), n=ri(3,6);
  const t=mul(p,D(n)), b=billetPour(t);
  return { q:`Un client achète ${n} bandes dessinées à ${S2(p)} € l'unité. Donne d'abord un ordre de grandeur du total, puis calcule-le et la monnaie rendue sur ${b} €.`,
           s:`Ordre de grandeur : ${S(arrondi(p,0))} × ${n} = ${S(mul(arrondi(p,0),D(n)))} €.\nTotal exact : ${S2(p)} × ${n} = ${S2(t)} €. Monnaie : ${b} − ${S2(t)} = ${S2(sub(D(b),t))} €.` }; } },
{ d:"D", g(){ const p=D(ri(1200,4899),2), b=billetPour(p);
  const r=sub(D(b),p); let c=resc(r,2).m; const coup=[[5000,"un billet de 50 €"],[2000,"un billet de 20 €"],[1000,"un billet de 10 €"],[500,"un billet de 5 €"],[200,"une pièce de 2 €"],[100,"une pièce de 1 €"],[50,"une pièce de 50 centimes"],[20,"une pièce de 20 centimes"],[10,"une pièce de 10 centimes"],[5,"une pièce de 5 centimes"],[2,"une pièce de 2 centimes"],[1,"une pièce de 1 centime"]];
  const det=[]; coup.forEach(([v,nom])=>{ let k=Math.floor(c/v); if(k>0){ det.push((k>1?k+" ":"")+(k>1?nom.replace(/^un[e]? /,"").replace(/^(billet|pièce)/,"$1s"):nom)); c-=k*v; } });
  return { q:`Pour un achat de ${S2(p)} €, le client donne ${b} €. Détaille la monnaie rendue avec le moins de billets et de pièces possible.`,
           s:`${b} − ${S2(p)} = ${S2(r)} €, soit ${det.join(", ")}.` }; } },
{ d:"D", g(){ const p=D(ri(1000,2499),2), sup=D(ri(5,95),2);
  const donne=add(add(p,D(0)),sup); const billet=Math.ceil(resc(p,2).m/500)*5;
  const total=add(D(billet),sup); const rendu=sub(total,p);
  return { q:`Un achat s'élève à ${S2(p)} €. Le client donne un billet de ${billet} € puis ajoute ${S2(sup)} €. Combien le libraire rend-il ?`,
           s:`Le client donne ${billet} + ${S2(sup)} = ${S2(total)} €.\nMonnaie : ${S2(total)} − ${S2(p)} = ${S2(rendu)} €.` }; } },
{ d:"D", g(){ const p=D(ri(1500,2999),2), n=ri(2,4);
  const t=mul(p,D(n)); const b=Math.ceil(resc(t,2).m/5000)*50; const r=sub(D(b),t);
  return { q:`Un dictionnaire coûte ${S2(p)} €. Un client en achète ${n} et le libraire lui rend ${S2(r)} €. Quelle somme le client avait-il donnée ?`,
           s:`Prix des ${n} dictionnaires : ${S2(p)} × ${n} = ${S2(t)} €.\nSomme donnée : ${S2(t)} + ${S2(r)} = ${S2(add(t,r))} €.` }; } },
{ d:"D", g(){ const fond=pick([50,75,100]), vente=D(ri(800,3499),2), n=ri(8,15);
  const rec=mul(vente,D(n)); const caisse=add(rec,D(fond));
  return { q:`En fin de journée la caisse contient ${S2(caisse)} €, alors que le fond de caisse du matin était de ${fond} €. Quelle est la recette ? Si elle provient de ${n} ventes identiques, quel est le prix d'une vente ?`,
           s:`Recette : ${S2(caisse)} − ${fond} = ${S2(rec)} €.\nPrix d'une vente : ${S2(rec)} ÷ ${n} = ${S2(vente)} €.` }; } },
];

const M_CARBURANT = [
{ d:"F", g(){ const p=D(ri(150,199),2);
  return { q:`Le carburant coûte ${S2(p)} € le litre. Quel est le prix de 10 litres ?`,
           s:`${S2(p)} × 10 = ${S2(p10(p,1))}. Dix litres coûtent ${S2(p10(p,1))} €.` }; } },
{ d:"F", g(){ const p=D(ri(150,199),2), v=pick([20,30,40,50]);
  return { q:`Un automobiliste fait le plein avec ${v} litres à ${S2(p)} € le litre. Combien paie-t-il ?`,
           s:`${S2(p)} × ${v} = ${S2(mul(p,D(v)))}. Il paie ${S2(mul(p,D(v)))} €.` }; } },
{ d:"F", g(){ const p=D(ri(150,199),2);
  return { q:`Quel est le prix de 100 litres de carburant à ${S2(p)} € le litre ?`,
           s:`${S2(p)} × 100 = ${S2(p10(p,2))} €.` }; } },
{ d:"M", g(){ const p=D(ri(150,199),2), v=ri(35,60);
  return { q:`Calcule le prix d'un plein de ${v} litres à ${S2(p)} € le litre.`,
           s:`${S2(p)} × ${v} = ${S2(mul(p,D(v)))}. Le plein coûte ${S2(mul(p,D(v)))} €.` }; } },
{ d:"M", g(){ const p=D(ri(140,199),2), v=pick([25,50]); const t=mul(p,D(v));
  return { q:`Un plein de ${v} litres a coûté ${S2(t)} €. Quel est le prix d'un litre ?`,
           s:`${S2(t)} ÷ ${v} = ${S2(p)}. Le litre coûte ${S2(p)} €.` }; } },
{ d:"M", g(){ const cap=ri(45,65), reste=D(ri(50,250),1), p=D(pick([160,170,180,190,150]),2);
  const aj=sub(D(cap),reste); const prix=mul(p,aj);
  return { q:`Le réservoir contient encore ${S(reste)} L et peut en contenir ${cap}. Combien de litres faut-il ajouter pour faire le plein ? Quel en sera le prix à ${S2(p)} € le litre ?`,
           s:`${cap} − ${S(reste)} = ${S(aj)} L à ajouter.\nPrix : ${S2(p)} × ${S(aj)} ${EQC(prix)} ${S2(prix)} €${NOTE(prix)}.` }; } },
{ d:"D", g(){ const c=D(ri(45,89),1), km=pick([200,250,300,150]), p=D(pick([160,180,150,170]),2);
  const vol=mul(c,D(km,2)); const cout=mul(p,vol);
  return { q:`Une voiture consomme ${S(c)} L aux 100 km. Quelle quantité de carburant faut-il pour ${km} km ? Quel en est le coût à ${S2(p)} € le litre ?`,
           s:`Pour ${km} km : ${S(c)} × ${S(D(km,2))} = ${S(vol)} L.\nCoût : ${S(vol)} × ${S2(p)} ${EQC(cout)} ${S2(cout)} €${NOTE(cout)}.` }; } },
{ d:"D", g(){ const p=D(pick([160,150,200,125,175]),2), v=ri(15,40); const t=mul(p,D(v));
  return { q:`Un automobiliste met pour ${S2(t)} € de carburant à ${S2(p)} € le litre. Combien de litres a-t-il pris ?`,
           s:`${S2(t)} ÷ ${S2(p)} = ${groupe(String(resc(t,2).m))} ÷ ${resc(p,2).m} = ${v}. Il a pris ${v} litres.` }; } },
{ d:"D", g(){ const p1=D(ri(150,180),2), h=D(ri(3,12),2), v=ri(35,60);
  const p2=add(p1,h);
  return { q:`Le prix du litre passe de ${S2(p1)} € à ${S2(p2)} €. Quel est le surcoût pour un plein de ${v} litres ?`,
           s:`Hausse par litre : ${S2(p2)} − ${S2(p1)} = ${S2(h)} €.\nSurcoût : ${S2(h)} × ${v} = ${S2(mul(h,D(v)))} €.` }; } },
{ d:"D", g(){ const c=D(ri(45,89),1), p=D(pick([150,160,170,180,190]),2);
  const vol=p10(c,1); const cout=mul(vol,p);
  return { q:`Une voiture parcourt 100 km en consommant ${S(c)} L. Estime le coût du carburant pour 1 000 km, à ${S2(p)} € le litre.`,
           s:`Pour 1 000 km : ${S(c)} × 10 = ${S(vol)} L.\nCoût : ${S(vol)} × ${S2(p)} = ${S2(cout)} €.` }; } },
{ d:"D", g(){ const c=D(pick([50,60,75,80,40]),1), nb=ri(6,12); const cap=mul(c,D(nb));
  const p=D(pick([150,160,170,180]),2);
  return { q:`Le réservoir contient ${S(cap)} L et la voiture consomme ${S(c)} L aux 100 km. Quelle distance peut-elle parcourir avec un plein ? Combien coûte ce plein à ${S2(p)} € le litre ?`,
           s:`${S(cap)} ÷ ${S(c)} = ${nb}, soit ${nb} × 100 = ${groupe(String(nb*100))} km d'autonomie.\nPrix du plein : ${S(cap)} × ${S2(p)} ${EQC(mul(cap,p))} ${S2(mul(cap,p))} €${NOTE(mul(cap,p))}.` }; } },
];

/* ═══════════════ TABLE DES FAMILLES ═══════════════ */
const FAMILLES = {
  "Diviser par 10,100,1000 etc...":  M_DIVISER,
  "Multiplier par 10,100,1000 etc...": M_MULTIPLIER,
  "Encadrer":                        M_ENCADRER,
  "Chiffre et nombre":               M_CHIFFRE,
  "Comparer deux décimaux":          M_COMPARER,
  "Ranger des décimaux":             M_RANGER,
  "Arrondir un décimal":             M_ARRONDIR,
  "Écrire un grand nombre en chiffres": M_ECRIRE,
  "Intercaler un décimal":           M_INTERCALER,
  "Addition posée de décimaux":      M_ADDITION,
  "Soustraction posée de décimaux":  M_SOUSTRACTION,
  "Multiplication de décimaux":      M_MULTIPLICATION,
  "Division décimale":               M_DIVISION,
  "La monnaie du libraire":          M_MONNAIE,
  "Le plein de carburant":           M_CARBURANT,
};
/* libellés réellement rencontrés en base → famille canonique */
const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const ALIAS = {};
Object.keys(FAMILLES).forEach(f => { ALIAS[cle(f)] = f; });
[["diviser par 10 et","Diviser par 10,100,1000 etc..."],
 ["multiplier par 10 100 1","Multiplier par 10,100,1000 etc..."],
 ["multiplier par 10 100 1000","Multiplier par 10,100,1000 etc..."],
 ["encadrer au dixieme","Encadrer"],
 ["chiffre et nombre de centaines","Chiffre et nombre"]].forEach(([k,v]) => { ALIAS[k]=v; });

/* ═══════════════ MOTEUR ═══════════════ */
function genererFamille(nomCanon, besoins, dejaVus) {
  const modeles = FAMILLES[nomCanon];
  const sortie = [];
  for (const d of ["F", "M", "D"]) {
    const dispo = modeles.filter(m => m.d === d);
    if (!dispo.length) continue;
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < besoins[d] * 200 + 4000) {
      essais++;
      const m = pick(dispo);
      let r; try { r = m.g(); } catch (e) { continue; }
      if (!r || !r.q || !r.s) continue;
      const k = cle(r.q);
      if (dejaVus.has(k)) continue;
      dejaVus.add(k);
      sortie.push({ d, content: r.q, solution: r.s });
      reste--;
    }
    if (reste > 0) console.warn(`  ⚠ ${nomCanon} / ${LIBELLE[d]} : ${reste} énoncé(s) distinct(s) introuvable(s).`);
  }
  return sortie;
}
function besoinsDepuis(existants) {
  const cible = { F: Math.round(CIBLE * REPARTITION.F), M: Math.round(CIBLE * REPARTITION.M), D: 0 };
  cible.D = CIBLE - cible.F - cible.M;
  return { F: Math.max(0, cible.F - (existants.F || 0)),
           M: Math.max(0, cible.M - (existants.M || 0)),
           D: Math.max(0, cible.D - (existants.D || 0)) };
}

/* ═══════════════ MODE APERÇU (sans base) ═══════════════ */
if (APERCU) {
  const filtre = ARGS[ARGS.indexOf("--apercu") + 1];
  const demande = filtre && !filtre.startsWith("--") ? filtre : null;
  let total = 0; const lignes = [];
  for (const nom of Object.keys(FAMILLES)) {
    if (demande && cle(nom) !== cle(demande)) continue;
    alea = mulberry32(GRAINE + nom.length * 7919);
    const vus = new Set();
    const ex = genererFamille(nom, besoinsDepuis({}), vus);
    const n = { F: 0, M: 0, D: 0 }; ex.forEach(e => n[e.d]++);
    lignes.push({ famille: nom, total: ex.length, Facile: n.F, Moyen: n.M, Difficile: n.D,
                  modeles: FAMILLES[nom].length });
    total += ex.length;
    if (demande) {
      console.log(`\n══ ${nom} ══`);
      ["F","M","D"].forEach(d => { const s = ex.filter(e => e.d === d).slice(0, 3);
        s.forEach(e => console.log(`\n[${LIBELLE[d]}] ${e.content}\n  → ${e.solution.replace(/\n/g, "\n    ")}`)); });
    }
  }
  console.log("");
  console.table(lignes);
  console.log(`Total généré : ${total} énoncés (cible ${CIBLE} par famille).`);
  process.exit(0);
}

/* ═══════════════ MODE BASE ═══════════════ */
(async () => {
  const { Pool } = require("pg");
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%cimaux%' ORDER BY id`);
  const rows = brut.filter(r => { const c = cle(r.chapitre); return c.includes("entier") && c.includes("decimaux"); });
  if (!rows.length) { console.log("Chapitre introuvable."); await pool.end(); return; }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(rows, "chapitre", "Entiers & décimaux");
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
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M" : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919);
    const neufs = genererFamille(canon, besoinsDepuis(dej), vusGlobal);
    const modele = { level: maj(g.items, "level", "college"), subject: maj(g.items, "subject", "Arithmétique"),
                     classe: maj(g.items, "classe", "6ème"), type: maj(g.items, "type", "exercice") };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content, solution: e.solution,
      difficulty: LIBELLE[e.d], level: modele.level, subject: modele.subject, classe: modele.classe,
      chapitre: CHAPITRE, type: modele.type, famille: g.nom }); });
    rapport.push({ famille: g.nom, avant: g.items.length, ajoutes: neufs.length, apres: g.items.length + neufs.length });
  }

  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`decimaux-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : decimaux-avant-generation-${stamp}.json`);

  const T = 200;
  for (let i = 0; i < aInserer.length; i += T) {
    const lot = aInserer.slice(i, i + T);
    const vals = [], par = [];
    lot.forEach((e, j) => { const b = j * 10;
      vals.push(`($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},$${b+9},$${b+10})`);
      par.push(e.title, e.content, e.level, e.subject, e.difficulty, e.solution, e.classe, e.chapitre, e.type, e.famille); });
    await pool.query(`INSERT INTO exercises
      (title, content, level, subject, difficulty, solution, classe, chapitre, type, famille)
      VALUES ${vals.join(",")}`, par);
    console.log(`  ${Math.min(i + T, aInserer.length)} / ${aInserer.length}`);
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY n DESC, famille`, [CHAPITRE]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
