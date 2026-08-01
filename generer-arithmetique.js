/* MathBase — generer-arithmetique.js
   Chapitre « Arithmétique » : 100 exercices par famille, sur les 14 familles.

   Pas de famille « Cours » ici, comme demandé.

   ⚠ PROBLÈMES INCLUS PAR DÉFAUT. La consigne « se limiter aux exercices »
   avait été donnée pour le chapitre « Fonction affine » seulement ; ici vous
   n'avez signalé qu'une différence (pas de famille Cours), donc les 5 familles
   de type « probleme » sont traitées comme les autres — c'était déjà le cas
   pour les décimaux et les fractions. Ajoutez --exclure-problemes pour les
   laisser de côté.

   ⚠ FAMILLE « PGCD par décomposition » : aucun énoncé ne donne la
   décomposition en facteurs premiers ni ne demande de décomposer. On lit
   « Détermine le PGCD de 84 et 60. » et rien de plus ; la décomposition
   apparaît uniquement dans le corrigé, où elle sert de méthode.

   Tout est calculé (PGCD, PPCM, décompositions, listes de diviseurs,
   primalité, divisions euclidiennes) : aucun résultat n'est écrit à la main.

   · 20 faciles / 30 moyens / 50 difficiles par famille.
   · Tirage déterministe + déduplication : rejouable sans doublon.

   Usage :
     node generer-arithmetique.js --apercu
     node generer-arithmetique.js --apercu "PGCD par décomposition"
     $env:DATABASE_URL = "postgresql://..."
     node generer-arithmetique.js            # simulation
     node generer-arithmetique.js --execute  # applique
   Options : --cible N (100) · --graine N (20260803) · --exclure-problemes
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const EXCLURE_PB = ARGS.includes("--exclure-problemes");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260803);
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];
const melange = t => { const c = [...t]; for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(alea() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; } return c; };

/* ══ noyau arithmétique ══ */
const facteurs = n => { const f = []; let m = n;
  for (let p = 2; p * p <= m; p++) { let e = 0; while (m % p === 0) { m /= p; e++; } if (e) f.push([p, e]); }
  if (m > 1) f.push([m, 1]); return f; };
const EXP = { 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷" };
const dec = n => n === 1 ? "1" : facteurs(n).map(([p, e]) => e === 1 ? String(p) : `${p}${EXP[e] || "^" + e}`).join(" × ");
const decPlat = n => facteurs(n).flatMap(([p, e]) => Array(e).fill(p)).join(" × ");
const div = n => { const d = []; for (let i = 1; i * i <= n; i++) if (n % i === 0) { d.push(i); if (i !== n / i) d.push(n / i); } return d.sort((a, b) => a - b); };
const prem = n => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
const pg = (a, b) => { while (b) { [a, b] = [b, a % b]; } return a; };
const pp = (a, b) => a / pg(a, b) * b;
const som = n => String(n).split("").reduce((s, c) => s + +c, 0);
const grp = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
/* PGCD commun aux facteurs, écrit en clair */
function pgcdDetail(a, b) {
  const fa = facteurs(a), fb = facteurs(b);
  const communs = fa.filter(([p]) => fb.some(([q]) => q === p))
    .map(([p, e]) => [p, Math.min(e, fb.find(([q]) => q === p)[1])]);
  const txt = communs.length
    ? communs.map(([p, e]) => e === 1 ? String(p) : `${p}${EXP[e] || "^" + e}`).join(" × ")
    : "aucun facteur commun";
  const v = pg(a, b);
  return `${a} = ${dec(a)} et ${b} = ${dec(b)}.\nOn garde les facteurs communs avec leur plus petit exposant : `
    + (communs.length ? `${txt} = ${v}.` : `il n'y en a pas, donc PGCD = 1.`)
    + `\nPGCD(${a} ; ${b}) = ${v}.`;
}
/* nombres « composés » agréables */
const nbCompose = (min, max) => { for (let i = 0; i < 200; i++) { const n = ri(min, max); if (!prem(n) && n > 1) return n; } return 12; };
const nbFacile  = () => pick([12,18,20,24,28,30,36,40,42,45,48,50,54,56,60,63,66,70,72,75,80,84,88,90,96]);
const nbMoyen   = () => pick([84,90,96,100,108,112,120,126,132,140,144,150,156,160,168,175,180,189,196,198,200,210,216,225,240]);

const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];

/* ══════════ FAMILLES ══════════ */
const FAMILLES = {};

/* ── Critères de divisibilité ── */
FAMILLES["Critères de divisibilité"] = [
{ d:"F", g(){ const n=ri(100,999);
  return { q:`Le nombre ${n} est-il divisible par 5 ? par 2 ? par 3 ? Justifie.`,
           s:`Par 5 : le chiffre des unités est ${n%10}, donc ${n%5===0?"OUI":"NON"} (il faudrait 0 ou 5).\nPar 2 : le chiffre des unités est ${n%10===0||n%2===0?"pair, donc OUI":"impair, donc NON"}.\nPar 3 : la somme des chiffres vaut ${som(n)}, ${n%3===0?`multiple de 3, donc OUI`:`pas multiple de 3, donc NON`}.` }; } },
{ d:"F", g(){ const n=ri(100,999);
  return { q:`Le nombre ${n} est-il divisible par 10 ? par 2 ?`,
           s:`Par 10 : il se termine par ${n%10}, donc ${n%10===0?"OUI":"NON"} (il faudrait un 0).\nPar 2 : ${n%2===0?"le dernier chiffre est pair, donc OUI":"le dernier chiffre est impair, donc NON"}.` }; } },
{ d:"F", g(){ const n=ri(100,999);
  return { q:`Le nombre ${n} est-il divisible par 3 ?`,
           s:`Somme des chiffres : ${String(n).split("").join(" + ")} = ${som(n)}.\n${som(n)} ${n%3===0?"est":"n'est pas"} un multiple de 3, donc ${n} ${n%3===0?"EST":"n'est PAS"} divisible par 3.` }; } },
{ d:"M", g(){ const n=ri(1000,9999);
  return { q:`Le nombre ${grp(n)} est-il divisible par 9 ?`,
           s:`Somme des chiffres : ${String(n).split("").join(" + ")} = ${som(n)}.\n${som(n)} ${n%9===0?"est":"n'est pas"} un multiple de 9, donc ${grp(n)} ${n%9===0?"EST":"n'est PAS"} divisible par 9.` }; } },
{ d:"M", g(){ const n=ri(1000,9999);
  return { q:`Le nombre ${grp(n)} est-il divisible par 4 ?`,
           s:`On regarde les deux derniers chiffres : ${String(n).slice(-2)}.\n${+String(n).slice(-2)} ${n%4===0?"est":"n'est pas"} un multiple de 4, donc ${grp(n)} ${n%4===0?"EST":"n'est PAS"} divisible par 4.` }; } },
{ d:"M", g(){ const n=ri(1000,9999);
  return { q:`Le nombre ${grp(n)} est-il divisible par 3 ? par 9 ?`,
           s:`Somme des chiffres : ${som(n)}.\nPar 3 : ${n%3===0?"OUI":"NON"}. Par 9 : ${n%9===0?"OUI":"NON"}.\n${n%3===0&&n%9!==0?"Un nombre divisible par 3 ne l'est pas forcément par 9.":n%9===0?"Tout nombre divisible par 9 l'est aussi par 3.":"Il n'est divisible ni par 3 ni par 9."}` }; } },
{ d:"M", g(){ const base=ri(10,98), c=ri(0,9), n=base*10+c;
  const bons=[]; for(let k=0;k<=9;k++) if((base*10+k)%3===0) bons.push(k);
  return { q:`Quels chiffres peut-on écrire à la place de … pour que ${base}… soit divisible par 3 ?`,
           s:`La somme des chiffres de ${base} vaut ${som(base)}. Il faut que ${som(base)} + … soit un multiple de 3.\nLes chiffres possibles sont : ${bons.join(" ; ")}.` }; } },
{ d:"D", g(){ const n=ri(100,999);
  return { q:`Le nombre ${n} est-il divisible par 6 ? Justifie sans poser la division.`,
           s:`Un nombre est divisible par 6 s'il l'est à la fois par 2 et par 3.\nPar 2 : ${n%2===0?"OUI":"NON"} (dernier chiffre ${n%10}).\nPar 3 : somme des chiffres ${som(n)}, ${n%3===0?"OUI":"NON"}.\nDonc ${n} ${n%6===0?"EST":"n'est PAS"} divisible par 6.` }; } },
{ d:"D", g(){ const n=ri(1000,9999);
  return { q:`Parmi 2, 3, 4, 5, 9 et 10, par lesquels ${grp(n)} est-il divisible ?`,
           s:[2,3,4,5,9,10].map(k=>`par ${k} : ${n%k===0?"oui":"non"}`).join(" · ")+`.\nRappel : par 4 on regarde les deux derniers chiffres, par 3 et 9 la somme des chiffres (${som(n)}).` }; } },
{ d:"D", g(){ const base=ri(100,988), bons=[]; for(let k=0;k<=9;k++) if((base*10+k)%9===0) bons.push(k);
  return { q:`Quel chiffre faut-il écrire à la place de … pour que ${base}… soit divisible par 9 ?`,
           s:`La somme des chiffres de ${base} vaut ${som(base)}. Il faut que ${som(base)} + … soit un multiple de 9.\n${bons.length?`Le chiffre cherché est ${bons.join(" ou ")}.`:`Aucun chiffre ne convient.`}` }; } },
{ d:"D", g(){ const n=ri(100,999); const el=pick(PRENOMS);
  return { q:`${el} affirme : « ${n} est divisible par 4, donc il est divisible par 2 ». Le raisonnement est-il correct ? Et la réciproque ?`,
           s:`Le raisonnement est CORRECT : 4 = 2 × 2, donc tout multiple de 4 est un multiple de 2.\nLa réciproque est FAUSSE : 6 est divisible par 2 mais pas par 4.\nPour ${n} : divisible par 4 ? ${n%4===0?"oui":"non"} · par 2 ? ${n%2===0?"oui":"non"}.` }; } },
{ d:"D", g(){ const n=ri(100,999);
  return { q:`Le nombre ${n} est-il divisible par 15 ? Justifie.`,
           s:`15 = 3 × 5, et 3 et 5 n'ont pas de facteur commun : il faut donc être divisible par 3 ET par 5.\nPar 3 : somme des chiffres ${som(n)}, ${n%3===0?"oui":"non"}. Par 5 : dernier chiffre ${n%10}, ${n%5===0?"oui":"non"}.\nDonc ${n} ${n%15===0?"EST":"n'est PAS"} divisible par 15.` }; } },
];

/* ── Décomposer ── */
FAMILLES["Décomposer"] = [
{ d:"F", g(){ const n=nbFacile();
  return { q:`Décompose ${n} en produit de facteurs premiers.`,
           s:`On divise successivement par les nombres premiers : ${n} = ${decPlat(n)}.\nSoit ${n} = ${dec(n)}.` }; } },
{ d:"F", g(){ const n=pick([8,16,27,32,64,81,125,243]);
  return { q:`Décompose ${n} en produit de facteurs premiers.`,
           s:`${n} = ${decPlat(n)} = ${dec(n)}.` }; } },
{ d:"F", g(){ const n=nbFacile();
  return { q:`Écris ${n} sous forme d'un produit de facteurs premiers.`, s:`${n} = ${dec(n)}.` }; } },
{ d:"M", g(){ const n=nbMoyen();
  return { q:`Décompose ${n} en produit de facteurs premiers.`,
           s:`${n} = ${decPlat(n)}, soit ${n} = ${dec(n)}.` }; } },
{ d:"M", g(){ const a=nbFacile(); let b=nbFacile(); if(b===a) b=a+6;
  return { q:`Décompose ${a} et ${b} en produits de facteurs premiers.`,
           s:`${a} = ${dec(a)}\n${b} = ${dec(b)}` }; } },
{ d:"M", g(){ const n=nbMoyen();
  return { q:`Décompose ${n}, puis donne son plus grand diviseur premier.`,
           s:`${n} = ${dec(n)}.\nLe plus grand facteur premier est ${facteurs(n).slice(-1)[0][0]}.` }; } },
{ d:"M", g(){ const p=pick([11,13,17,19,23,29,31,37]);
  return { q:`Décompose ${p} en produit de facteurs premiers.`,
           s:`${p} est déjà un nombre PREMIER : sa décomposition se réduit à lui-même, ${p} = ${p}.\nOn vérifie qu'aucun premier inférieur à sa racine carrée ne le divise.` }; } },
{ d:"D", g(){ const n=ri(300,999); if(prem(n)) return null;
  return { q:`Décompose ${n} en produit de facteurs premiers.`,
           s:`${n} = ${decPlat(n)}, soit ${n} = ${dec(n)}.` }; } },
{ d:"D", g(){ const n=nbMoyen(), nd=div(n).length;
  return { q:`Décompose ${n}, puis déduis-en son nombre de diviseurs.`,
           s:`${n} = ${dec(n)}.\nOn ajoute 1 à chaque exposant et on multiplie : ${facteurs(n).map(([,e])=>e+1).join(" × ")} = ${nd}.\n${n} possède ${nd} diviseurs.` }; } },
{ d:"D", g(){ const k=ri(2,12), n=k*k;
  return { q:`Décompose ${n}, puis dis si c'est le carré d'un nombre entier.`,
           s:`${n} = ${dec(n)}.\nTous les exposants sont pairs, donc ${n} est un carré parfait : ${n} = ${k}².` }; } },
{ d:"D", g(){ const n=nbFacile();
  return { q:`Décompose ${n} et ${2*n}. Que remarques-tu ?`,
           s:`${n} = ${dec(n)}\n${2*n} = ${dec(2*n)}\nLa décomposition de ${2*n} est celle de ${n} avec un facteur 2 de plus : doubler un nombre revient à ajouter un 2 à sa décomposition.` }; } },
{ d:"D", g(){ const n=nbMoyen(); const el=pick(PRENOMS);
  const f=facteurs(n), faux=f.map(([p,e],i)=>i===0?[p,e+1]:[p,e]).map(([p,e])=>Math.pow(p,e)).reduce((a,b)=>a*b,1);
  return { q:`${el} propose ${faux} comme valeur du produit ${dec(n)}. Vérifie ce calcul.`,
           s:`On effectue : ${decPlat(n)} = ${n}.\nLe produit vaut ${n}, et non ${faux} : ${el} s'est trompé.` }; } },
];

/* ── Fraction irréductible ── */
FAMILLES["Fraction irréductible"] = [
{ d:"F", g(){ const k=ri(2,9), a=ri(2,9), b=ri(2,9); if(pg(a,b)!==1||a===b) return null;
  return { q:`Rends la fraction ${a*k}/${b*k} irréductible.`,
           s:`PGCD(${a*k} ; ${b*k}) = ${k}.\nOn divise haut et bas par ${k} : ${a*k}/${b*k} = ${a}/${b}.` }; } },
{ d:"F", g(){ const a=nbFacile(); let b=nbFacile(); if(a===b) return null;
  const g=pg(a,b);
  return { q:`Simplifie la fraction ${a}/${b}.`,
           s:`${pgcdDetail(a,b)}\nOn divise haut et bas par ${g} : ${a}/${b} = ${a/g}/${b/g}.` }; } },
{ d:"F", g(){ const k=ri(2,12), a=ri(2,11), b=a+ri(1,8);
  if(pg(a,b)!==1) return null;
  return { q:`Écris ${a*k}/${b*k} sous forme irréductible.`,
           s:`Le PGCD du numérateur et du dénominateur est ${k}.\n${a*k}/${b*k} = ${a}/${b}, qui est irréductible car PGCD(${a} ; ${b}) = 1.` }; } },
{ d:"M", g(){ const a=nbMoyen(); let b=nbMoyen(); if(a===b) return null;
  const g=pg(a,b);
  return { q:`Rends la fraction ${a}/${b} irréductible.`,
           s:`${pgcdDetail(a,b)}\n${a}/${b} = ${a/g}/${b/g}.` }; } },
{ d:"M", g(){ const a=ri(2,30), b=ri(2,30); if(pg(a,b)!==1||a===b) return null;
  return { q:`La fraction ${a}/${b} est-elle irréductible ? Justifie.`,
           s:`${a} = ${dec(a)} et ${b} = ${dec(b)} : aucun facteur premier commun.\nPGCD(${a} ; ${b}) = 1, donc la fraction EST irréductible.` }; } },
{ d:"M", g(){ const k=ri(4,12), a=ri(2,9), b=ri(2,9); if(pg(a,b)!==1||a===b) return null;
  return { q:`Simplifie ${a*k}/${b*k} en une seule étape, puis vérifie que le résultat est irréductible.`,
           s:`PGCD(${a*k} ; ${b*k}) = ${k}, donc ${a*k}/${b*k} = ${a}/${b}.\nVérification : PGCD(${a} ; ${b}) = 1, la fraction est bien irréductible.` }; } },
{ d:"D", g(){ const a=nbMoyen(); let b=nbMoyen(); if(a===b||pg(a,b)===1) return null;
  const g=pg(a,b);
  return { q:`Rends ${a}/${b} irréductible en détaillant la méthode.`,
           s:`${pgcdDetail(a,b)}\nOn divise numérateur et dénominateur par ${g} :\n${a} ÷ ${g} = ${a/g} et ${b} ÷ ${g} = ${b/g}, donc ${a}/${b} = ${a/g}/${b/g}.\nPGCD(${a/g} ; ${b/g}) = 1 : la fraction est irréductible.` }; } },
{ d:"D", g(){ const k=ri(2,6), a=ri(2,9), b=ri(2,9); if(pg(a,b)!==1||a===b) return null;
  const el=pick(PRENOMS);
  return { q:`${el} simplifie ${a*k*2}/${b*k*2} en ${a*k}/${b*k} et s'arrête là. A-t-il terminé ?`,
           s:`Non. ${a*k}/${b*k} peut encore se simplifier par ${k} : ${a*k}/${b*k} = ${a}/${b}.\nIl aurait pu diviser directement par le PGCD, ${2*k}.\nLa forme irréductible est ${a}/${b}.` }; } },
{ d:"D", g(){ const a=nbFacile(), b=nbFacile(); if(a===b) return null;
  const g=pg(a,b);
  return { q:`Simplifie ${a}/${b}, puis donne le PGCD du numérateur et du dénominateur de départ.`,
           s:`${pgcdDetail(a,b)}\n${a}/${b} = ${a/g}/${b/g}.\nLe PGCD cherché est ${g} : c'est exactement le nombre par lequel on a divisé.` }; } },
{ d:"D", g(){ const p=pick([7,11,13,17,19]), a=p*ri(2,7), b=p*ri(2,7); if(a===b) return null;
  const g=pg(a,b);
  return { q:`Rends ${a}/${b} irréductible.`,
           s:`${pgcdDetail(a,b)}\n${a}/${b} = ${a/g}/${b/g}.` }; } },
{ d:"D", g(){ const a=nbMoyen(); let b=nbMoyen(); if(a===b) return null;
  const g=pg(a,b);
  return { q:`Deux fractions ${a}/${b} et ${a/g}/${b/g} sont-elles égales ? Justifie.`,
           s:`${pgcdDetail(a,b)}\nEn divisant ${a}/${b} par ${g} en haut et en bas, on obtient exactement ${a/g}/${b/g}.\nLes deux fractions sont donc ÉGALES ; la seconde est la forme irréductible.` }; } },
{ d:"D", g(){ const n=ri(2,20), a=n, b=n*ri(2,9);
  return { q:`Simplifie ${a}/${b}. Que remarques-tu ?`,
           s:`PGCD(${a} ; ${b}) = ${a} car ${a} divise ${b}.\n${a}/${b} = 1/${b/a} : le numérateur devient 1.` }; } },
];

/* ── PGCD par décomposition (AUCUNE indication dans l'énoncé) ── */
FAMILLES["PGCD par décomposition"] = [
{ d:"F", g(){ const a=nbFacile(); let b=nbFacile(); if(a===b) return null;
  return { q:`Détermine le PGCD de ${a} et ${b}.`, s:pgcdDetail(a,b) }; } },
{ d:"F", g(){ const a=nbFacile(); let b=nbFacile(); if(a===b) return null;
  return { q:`Calcule PGCD(${a} ; ${b}).`, s:pgcdDetail(a,b) }; } },
{ d:"F", g(){ const k=ri(4,15), a=k*ri(2,7), b=k*ri(2,7); if(a===b) return null;
  return { q:`Quel est le plus grand diviseur commun à ${a} et ${b} ?`, s:pgcdDetail(a,b) }; } },
{ d:"M", g(){ const a=nbMoyen(); let b=nbMoyen(); if(a===b) return null;
  return { q:`Détermine le PGCD de ${a} et ${b}.`, s:pgcdDetail(a,b) }; } },
{ d:"M", g(){ const a=nbMoyen(); let b=nbMoyen(); if(a===b) return null;
  const g=pg(a,b);
  return { q:`Détermine le PGCD de ${a} et ${b}, puis rends la fraction ${a}/${b} irréductible.`,
           s:`${pgcdDetail(a,b)}\n${a}/${b} = ${a/g}/${b/g}.` }; } },
{ d:"M", g(){ const a=ri(20,99), b=ri(20,99); if(a===b||pg(a,b)!==1) return null;
  return { q:`Les nombres ${a} et ${b} sont-ils premiers entre eux ?`,
           s:`${pgcdDetail(a,b)}\nLeur PGCD vaut 1 : ils SONT premiers entre eux.` }; } },
{ d:"M", g(){ const a=ri(20,120), b=ri(20,120); if(a===b||pg(a,b)===1) return null;
  return { q:`Les nombres ${a} et ${b} sont-ils premiers entre eux ?`,
           s:`${pgcdDetail(a,b)}\nLeur PGCD vaut ${pg(a,b)}, différent de 1 : ils ne sont PAS premiers entre eux.` }; } },
{ d:"D", g(){ const a=ri(200,999), b=ri(200,999); if(a===b) return null;
  return { q:`Détermine le PGCD de ${a} et ${b}.`, s:pgcdDetail(a,b) }; } },
{ d:"D", g(){ const a=nbMoyen(), b=nbMoyen(), c=nbFacile(); if(a===b||b===c||a===c) return null;
  const g=pg(pg(a,b),c);
  return { q:`Détermine le PGCD de ${a}, ${b} et ${c}.`,
           s:`${a} = ${dec(a)}\n${b} = ${dec(b)}\n${c} = ${dec(c)}\nOn garde les facteurs communs aux TROIS nombres avec leur plus petit exposant.\nPGCD(${a} ; ${b} ; ${c}) = ${g}.` }; } },
{ d:"D", g(){ const a=nbMoyen(); let b=nbMoyen(); if(a===b) return null;
  const g=pg(a,b), l=pp(a,b);
  return { q:`Détermine le PGCD de ${a} et ${b}, puis vérifie que leur produit est égal au produit du PGCD et du PPCM.`,
           s:`${pgcdDetail(a,b)}\nPPCM(${a} ; ${b}) = ${l}.\nVérification : ${g} × ${l} = ${g*l} et ${a} × ${b} = ${a*b}. Les deux produits coïncident.` }; } },
{ d:"D", g(){ const a=nbMoyen(); let b=nbMoyen(); if(a===b) return null;
  const g=pg(a,b);
  return { q:`Détermine le PGCD de ${a} et ${b}, puis donne tous leurs diviseurs communs.`,
           s:`${pgcdDetail(a,b)}\nLes diviseurs communs sont exactement les diviseurs du PGCD : ${div(g).join(" ; ")}.` }; } },
{ d:"D", g(){ const a=nbFacile(); const b=a*ri(2,6);
  return { q:`Détermine le PGCD de ${a} et ${b}.`,
           s:`${pgcdDetail(a,b)}\nOn pouvait le voir directement : ${a} divise ${b}, donc le PGCD est ${a}.` }; } },
];

/* ── Plus petit multiple commun ── */
FAMILLES["Plus petit multiple commun"] = [
{ d:"F", g(){ const a=ri(2,12), b=ri(2,12); if(a===b) return null;
  return { q:`Quel est le plus petit multiple commun (non nul) de ${a} et ${b} ?`,
           s:`Multiples de ${a} : ${[1,2,3,4,5,6].map(k=>a*k).join(" ; ")} …\nMultiples de ${b} : ${[1,2,3,4,5,6].map(k=>b*k).join(" ; ")} …\nLe plus petit commun est ${pp(a,b)}.` }; } },
{ d:"F", g(){ const a=ri(2,10), b=ri(2,10); if(a===b) return null;
  return { q:`Calcule PPCM(${a} ; ${b}).`,
           s:`${a} = ${dec(a)} et ${b} = ${dec(b)}.\nOn prend tous les facteurs avec leur plus GRAND exposant : PPCM(${a} ; ${b}) = ${pp(a,b)}.` }; } },
{ d:"F", g(){ const a=ri(2,9), b=a*ri(2,5);
  return { q:`Quel est le plus petit multiple commun de ${a} et ${b} ?`,
           s:`${a} divise ${b}, donc tout multiple de ${b} est déjà un multiple de ${a}.\nPPCM(${a} ; ${b}) = ${b}.` }; } },
{ d:"M", g(){ const a=ri(6,30), b=ri(6,30); if(a===b) return null;
  return { q:`Détermine le PPCM de ${a} et ${b}.`,
           s:`${a} = ${dec(a)} et ${b} = ${dec(b)}.\nTous les facteurs, avec leur plus grand exposant : PPCM(${a} ; ${b}) = ${pp(a,b)}.` }; } },
{ d:"M", g(){ const a=ri(4,20), b=ri(4,20); if(a===b) return null;
  return { q:`Détermine le PPCM de ${a} et ${b}, puis vérifie que c'est bien un multiple des deux nombres.`,
           s:`PPCM(${a} ; ${b}) = ${pp(a,b)}.\nVérification : ${pp(a,b)} ÷ ${a} = ${pp(a,b)/a} et ${pp(a,b)} ÷ ${b} = ${pp(a,b)/b}, deux quotients entiers.` }; } },
{ d:"M", g(){ const a=ri(2,15), b=ri(2,15); if(a===b||pg(a,b)!==1) return null;
  return { q:`Détermine le PPCM de ${a} et ${b}.`,
           s:`${a} et ${b} sont premiers entre eux (PGCD = 1).\nDans ce cas le PPCM est simplement leur produit : ${a} × ${b} = ${a*b}.` }; } },
{ d:"D", g(){ const a=ri(20,90), b=ri(20,90); if(a===b) return null;
  return { q:`Détermine le PPCM de ${a} et ${b}.`,
           s:`${a} = ${dec(a)} et ${b} = ${dec(b)}.\nOn prend chaque facteur premier avec son plus grand exposant : PPCM(${a} ; ${b}) = ${pp(a,b)}.` }; } },
{ d:"D", g(){ const a=ri(6,40), b=ri(6,40); if(a===b) return null;
  return { q:`Calcule PGCD(${a} ; ${b}) et PPCM(${a} ; ${b}), puis compare leur produit à ${a} × ${b}.`,
           s:`PGCD(${a} ; ${b}) = ${pg(a,b)} et PPCM(${a} ; ${b}) = ${pp(a,b)}.\n${pg(a,b)} × ${pp(a,b)} = ${pg(a,b)*pp(a,b)}, or ${a} × ${b} = ${a*b}.\nLes deux produits sont ÉGAUX : c'est une propriété générale.` }; } },
{ d:"D", g(){ const a=ri(3,12), b=ri(3,12), c=ri(3,12); if(a===b||b===c||a===c) return null;
  return { q:`Détermine le plus petit multiple commun de ${a}, ${b} et ${c}.`,
           s:`On procède en deux temps : PPCM(${a} ; ${b}) = ${pp(a,b)}, puis PPCM(${pp(a,b)} ; ${c}) = ${pp(pp(a,b),c)}.\nPPCM(${a} ; ${b} ; ${c}) = ${pp(pp(a,b),c)}.` }; } },
{ d:"D", g(){ const a=ri(4,20), b=ri(4,20); if(a===b) return null;
  const m=pp(a,b);
  return { q:`Quels sont les trois plus petits multiples communs non nuls de ${a} et ${b} ?`,
           s:`Le plus petit est PPCM(${a} ; ${b}) = ${m}.\nLes multiples communs sont exactement les multiples du PPCM : ${m} ; ${2*m} ; ${3*m}.` }; } },
{ d:"D", g(){ const a=ri(4,20), b=ri(4,20); if(a===b) return null; const el=pick(PRENOMS);
  return { q:`${el} affirme que le PPCM de ${a} et ${b} est toujours leur produit ${a*b}. A-t-il raison ?`,
           s:`PPCM(${a} ; ${b}) = ${pp(a,b)}, alors que ${a} × ${b} = ${a*b}.\n${pp(a,b)===a*b?`Ici les deux coïncident, car ${a} et ${b} sont premiers entre eux — mais ce n'est pas une règle générale.`:`Les deux diffèrent : ${el} a tort. Le produit vaut PGCD × PPCM, soit ${pg(a,b)} × ${pp(a,b)}.`}` }; } },
{ d:"D", g(){ const a=ri(4,15), b=ri(4,15); if(a===b) return null;
  return { q:`Détermine le PPCM de ${a} et ${b}, puis celui de ${2*a} et ${2*b}.`,
           s:`PPCM(${a} ; ${b}) = ${pp(a,b)}.\nPPCM(${2*a} ; ${2*b}) = ${pp(2*a,2*b)}, c'est-à-dire le double du précédent : multiplier les deux nombres par 2 multiplie le PPCM par 2.` }; } },
];

/* ── Poser une division euclidienne ── */
FAMILLES["Poser une division euclidienne"] = [
{ d:"F", g(){ const b=ri(3,9), q=ri(11,99), r=ri(0,b-1), a=b*q+r;
  return { q:`Pose et effectue la division euclidienne de ${a} par ${b}.`,
           s:`${a} = ${b} × ${q} + ${r}\nQuotient : ${q}. Reste : ${r}.` }; } },
{ d:"F", g(){ const b=ri(2,9), q=ri(10,60), a=b*q;
  return { q:`Effectue la division euclidienne de ${a} par ${b}.`,
           s:`${a} = ${b} × ${q} + 0\nQuotient : ${q}. Reste : 0 — la division est exacte, ${b} divise ${a}.` }; } },
{ d:"F", g(){ const b=ri(3,9), q=ri(11,99), r=ri(1,b-1), a=b*q+r;
  return { q:`Donne le quotient et le reste de la division euclidienne de ${a} par ${b}.`,
           s:`${a} = ${b} × ${q} + ${r}, avec ${r} < ${b}.\nQuotient : ${q}. Reste : ${r}.` }; } },
{ d:"M", g(){ const b=ri(12,40), q=ri(10,60), r=ri(0,b-1), a=b*q+r;
  return { q:`Pose et effectue la division euclidienne de ${a} par ${b}.`,
           s:`${a} = ${b} × ${q} + ${r}\nQuotient : ${q}. Reste : ${r} (bien inférieur à ${b}).` }; } },
{ d:"M", g(){ const b=ri(12,40), q=ri(10,60), r=ri(0,b-1), a=b*q+r;
  return { q:`Effectue la division euclidienne de ${a} par ${b}, puis vérifie ton résultat.`,
           s:`${a} = ${b} × ${q} + ${r}.\nVérification : ${b} × ${q} = ${b*q}, puis ${b*q} + ${r} = ${a}. Et ${r} < ${b}.` }; } },
{ d:"M", g(){ const b=ri(7,25), q=ri(20,80), r=ri(0,b-1), a=b*q+r;
  return { q:`Dans la division euclidienne de ${a} par ${b}, quel est le reste ?`,
           s:`${a} = ${b} × ${q} + ${r}.\nLe reste est ${r}.` }; } },
{ d:"D", g(){ const b=ri(21,60), q=ri(30,180), r=ri(0,b-1), a=b*q+r;
  return { q:`Pose et effectue la division euclidienne de ${grp(a)} par ${b}.`,
           s:`${grp(a)} = ${b} × ${q} + ${r}\nQuotient : ${q}. Reste : ${r}.` }; } },
{ d:"D", g(){ const b=ri(7,30), q=ri(20,90), r=ri(1,b-1), a=b*q+r;
  return { q:`Effectue la division euclidienne de ${a} par ${b}. Combien faut-il ajouter à ${a} pour obtenir un multiple de ${b} ?`,
           s:`${a} = ${b} × ${q} + ${r}.\nIl manque ${b} − ${r} = ${b-r} pour atteindre le multiple suivant, ${b*(q+1)}.` }; } },
{ d:"D", g(){ const b=ri(7,30), q=ri(20,90), r=ri(1,b-1), a=b*q+r;
  return { q:`Effectue la division euclidienne de ${a} par ${b}. Quel est le plus grand multiple de ${b} inférieur ou égal à ${a} ?`,
           s:`${a} = ${b} × ${q} + ${r}.\nLe plus grand multiple de ${b} ne dépassant pas ${a} est ${b} × ${q} = ${b*q}.` }; } },
{ d:"D", g(){ const b=ri(6,20), q=ri(15,70), r=ri(0,b-1), a=b*q+r; const el=pick(PRENOMS);
  const rf=r+b;
  return { q:`${el} écrit : ${a} = ${b} × ${q-1} + ${rf}. L'égalité est-elle vraie ? Est-ce la division euclidienne de ${a} par ${b} ?`,
           s:`L'égalité est VRAIE : ${b} × ${q-1} = ${b*(q-1)} et ${b*(q-1)} + ${rf} = ${a}.\nMais ce n'est PAS la division euclidienne : le reste ${rf} n'est pas inférieur à ${b}.\nLa bonne écriture est ${a} = ${b} × ${q} + ${r}.` }; } },
{ d:"D", g(){ const b=ri(9,30), q=ri(20,90), a=b*q;
  return { q:`Effectue la division euclidienne de ${a} par ${b}, puis dis si ${b} est un diviseur de ${a}.`,
           s:`${a} = ${b} × ${q} + 0.\nLe reste est nul, donc ${b} EST un diviseur de ${a} (et ${q} aussi).` }; } },
{ d:"D", g(){ const b=ri(7,25), q=ri(20,80), r=ri(1,b-1), a=b*q+r;
  return { q:`Effectue la division euclidienne de ${a} par ${b}. Combien faut-il retrancher à ${a} pour obtenir un multiple de ${b} ?`,
           s:`${a} = ${b} × ${q} + ${r}.\nIl suffit de retrancher le reste : ${a} − ${r} = ${b*q}, qui est bien un multiple de ${b}.` }; } },
];

/* ── Premier ou non ? ── */
FAMILLES["Premier ou non ?"] = [
{ d:"F", g(){ const a=pick([51,57,91,111,119,121,143,169,187]), b=pick([53,59,61,67,71,73,79,83,89,97]);
  const da=div(a).find(x=>x>1);
  return { q:`Les nombres ${a} et ${b} sont-ils premiers ? Justifie.`,
           s:`${a} = ${dec(a)} : il est divisible par ${da}, donc il n'est PAS premier.\n${b} n'admet aucun diviseur autre que 1 et lui-même : il EST premier.` }; } },
{ d:"F", g(){ const n=pick([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
  return { q:`Le nombre ${n} est-il premier ?`,
           s:`Oui. ${n} n'a que deux diviseurs : 1 et ${n}.` }; } },
{ d:"F", g(){ const n=pick([4,6,8,9,10,14,15,21,22,25,26,33,35,39]);
  return { q:`Le nombre ${n} est-il premier ? Justifie.`,
           s:`Non : ${n} = ${dec(n)}. Il possède d'autres diviseurs que 1 et lui-même.\nSes diviseurs sont ${div(n).join(" ; ")}.` }; } },
{ d:"M", g(){ const n=ri(50,150);
  return { q:`Le nombre ${n} est-il premier ? Justifie ta réponse.`,
           s:prem(n)
             ? `On teste les nombres premiers jusqu'à la racine carrée de ${n} (environ ${Math.floor(Math.sqrt(n))}) : aucun ne divise ${n}.\n${n} EST premier.`
             : `${n} = ${dec(n)} : il est divisible par ${div(n)[1]}.\n${n} n'est PAS premier.` }; } },
{ d:"M", g(){ const a=ri(2,50);
  return { q:`Écris la liste des nombres premiers inférieurs à ${a<20?30:a}.`,
           s:`${Array.from({length:(a<20?30:a)-1},(_,i)=>i+2).filter(prem).join(" ; ")}.` }; } },
{ d:"M", g(){ const n=pick([2,3,5,7,11,13,17,19,23,29]);
  return { q:`Combien le nombre ${n} a-t-il de diviseurs ? Que peut-on en conclure ?`,
           s:`Ses diviseurs sont 1 et ${n} : il en a exactement 2.\nUn nombre ayant exactement deux diviseurs est PREMIER par définition.` }; } },
{ d:"D", g(){ const n=ri(100,300);
  return { q:`Le nombre ${n} est-il premier ? Justifie en indiquant les tests effectués.`,
           s:prem(n)
             ? `Il suffit de tester les premiers jusqu'à √${n} ≈ ${Math.floor(Math.sqrt(n))} : ${[2,3,5,7,11,13,17].filter(p=>p*p<=n).join(", ")}. Aucun ne divise ${n}.\n${n} EST premier.`
             : `${n} = ${dec(n)}, divisible par ${div(n)[1]} : il n'est PAS premier.` }; } },
{ d:"D", g(){ const p=pick([2,3,5,7,11,13]), n=p*p;
  return { q:`Le carré d'un nombre premier peut-il être premier ? Réponds à partir de l'exemple de ${p}² = ${n}.`,
           s:`Non. ${n} = ${dec(n)} admet ${p} comme diviseur, en plus de 1 et ${n} : il a ${div(n).length} diviseurs.\nLe carré d'un premier n'est jamais premier.` }; } },
{ d:"D", g(){ const el=pick(PRENOMS);
  return { q:`${el} affirme que 1 est un nombre premier. A-t-il raison ?`,
           s:`Non. Un nombre premier possède exactement DEUX diviseurs distincts, 1 et lui-même.\nOr 1 n'a qu'un seul diviseur : lui-même. Par convention et par cohérence, 1 n'est pas premier.` }; } },
{ d:"D", g(){ const n=pick([2]);
  return { q:`Existe-t-il un nombre premier pair ? Justifie.`,
           s:`Oui : 2. C'est le SEUL. Tout autre nombre pair est divisible par 2 en plus de 1 et de lui-même, donc il n'est pas premier.` }; } },
{ d:"D", g(){ const a=ri(100,400);
  const impairs=[];for(let k=a;k<a+40&&impairs.length<2;k++) if(prem(k)) impairs.push(k);
  if(impairs.length<2) return null;
  return { q:`Donne les deux plus petits nombres premiers supérieurs ou égaux à ${a}.`,
           s:`Ce sont ${impairs[0]} et ${impairs[1]}.\nOn teste les nombres un à un en écartant d'abord les multiples de 2, 3 et 5.` }; } },
{ d:"D", g(){ const n=ri(20,80);
  const somme=[];for(let p=2;p<=n/2;p++) if(prem(p)&&prem(n-p)){somme.push([p,n-p]);if(somme.length>=2)break;}
  if(n%2!==0||!somme.length) return null;
  return { q:`Écris ${n} comme somme de deux nombres premiers.`,
           s:somme.map(([a,b])=>`${n} = ${a} + ${b}`).join("\n")+`\n(Plusieurs décompositions sont souvent possibles.)` }; } },
];

/* ── Tous les diviseurs ── */
FAMILLES["Tous les diviseurs"] = [
{ d:"F", g(){ const n=nbFacile();
  return { q:`Écris la liste de tous les diviseurs de ${n}.`,
           s:`On cherche les couples dont le produit vaut ${n} : ${div(n).join(" ; ")}.\n${n} possède ${div(n).length} diviseurs.` }; } },
{ d:"F", g(){ const n=ri(10,60);
  return { q:`Donne tous les diviseurs de ${n}.`, s:`${div(n).join(" ; ")} — soit ${div(n).length} diviseurs.` }; } },
{ d:"F", g(){ const n=pick([16,25,36,49,64,81,100]);
  return { q:`Écris la liste des diviseurs de ${n}.`,
           s:`${div(n).join(" ; ")}.\n${n} est un carré parfait (${Math.sqrt(n)}²), il possède un nombre IMPAIR de diviseurs : ${div(n).length}.` }; } },
{ d:"M", g(){ const n=nbMoyen();
  return { q:`Écris la liste de tous les diviseurs de ${n}.`,
           s:`${div(n).join(" ; ")}.\nIl y en a ${div(n).length}.` }; } },
{ d:"M", g(){ const a=nbFacile(); let b=nbFacile(); if(a===b) return null;
  const c=div(a).filter(x=>b%x===0);
  return { q:`Donne les diviseurs communs à ${a} et ${b}.`,
           s:`Diviseurs de ${a} : ${div(a).join(" ; ")}\nDiviseurs de ${b} : ${div(b).join(" ; ")}\nCommuns : ${c.join(" ; ")}. Le plus grand est ${pg(a,b)}, c'est le PGCD.` }; } },
{ d:"M", g(){ const n=nbMoyen();
  return { q:`Combien ${n} a-t-il de diviseurs ?`,
           s:`${n} = ${dec(n)}.\nOn ajoute 1 à chaque exposant et on multiplie : ${facteurs(n).map(([,e])=>e+1).join(" × ")} = ${div(n).length}.` }; } },
{ d:"D", g(){ const n=ri(200,600);
  return { q:`Écris la liste de tous les diviseurs de ${n}.`,
           s:`${n} = ${dec(n)}.\nDiviseurs : ${div(n).join(" ; ")} — soit ${div(n).length} en tout.` }; } },
{ d:"D", g(){ const n=nbMoyen();
  return { q:`Écris tous les diviseurs de ${n} en les groupant par couples de produit ${n}.`,
           s:div(n).filter(d=>d*d<=n).map(d=>`${d} × ${n/d}`).join(" · ")+`.\nListe complète : ${div(n).join(" ; ")}.` }; } },
{ d:"D", g(){ const p=pick([2,3,5,7]), e=ri(3,6), n=Math.pow(p,e);
  return { q:`Écris la liste des diviseurs de ${n}.`,
           s:`${n} = ${dec(n)}.\nLes diviseurs sont les puissances de ${p} de 0 à ${e} : ${div(n).join(" ; ")}.\nIl y en a ${e} + 1 = ${e+1}.` }; } },
{ d:"D", g(){ const n=nbMoyen();
  return { q:`Quel est le plus grand diviseur de ${n} autre que ${n} lui-même ?`,
           s:`Diviseurs de ${n} : ${div(n).join(" ; ")}.\nLe plus grand diviseur strict est ${div(n)[div(n).length-2]}, c'est-à-dire ${n} ÷ ${div(n)[1]}.` }; } },
{ d:"D", g(){ const n=ri(20,120); const el=pick(PRENOMS);
  return { q:`${el} affirme que ${n} a autant de diviseurs que ${2*n}. Vérifie.`,
           s:`Diviseurs de ${n} : ${div(n).join(" ; ")} (${div(n).length}).\nDiviseurs de ${2*n} : ${div(2*n).join(" ; ")} (${div(2*n).length}).\n${div(n).length===div(2*n).length?"Ici les deux comptes coïncident, mais ce n'est pas une règle.":"Les comptes diffèrent : "+el+" a tort."}` }; } },
{ d:"D", g(){ const n=nbFacile();
  return { q:`Un nombre peut-il avoir un nombre impair de diviseurs ? Réponds en t'appuyant sur ${n} et sur un carré parfait.`,
           s:`Nombre de diviseurs de ${n} : ${div(n).length}${div(n).length%2===0?" (pair)":" (impair)"}.\nLes diviseurs se groupent par couples de produit ${n}, donc le total est PAIR — sauf si un diviseur est son propre partenaire, c'est-à-dire si le nombre est un carré parfait. Ainsi 36 a 9 diviseurs.` }; } },
];

/* ── Vocabulaire de la division euclidienne ── */
FAMILLES["Vocabulaire de la division euclidienne"] = [
{ d:"F", g(){ const b=ri(5,30), q=ri(5,40), r=ri(0,b-1), a=b*q+r;
  return { q:`On donne : ${a} = ${b} × ${q} + ${r}. Donne le dividende, le diviseur, le quotient et le reste.`,
           s:`Dividende : ${a}. Diviseur : ${b}. Quotient : ${q}. Reste : ${r}.` }; } },
{ d:"F", g(){ const b=ri(5,30), q=ri(5,40), r=ri(0,b-1), a=b*q+r;
  return { q:`Dans l'égalité ${a} = ${b} × ${q} + ${r}, quel nombre est le reste ? Quel nombre est le dividende ?`,
           s:`Le reste est ${r}, le dividende est ${a}.` }; } },
{ d:"F", g(){ const b=ri(5,20), q=ri(5,30), a=b*q;
  return { q:`On donne : ${a} = ${b} × ${q} + 0. Que peut-on dire de ${b} par rapport à ${a} ?`,
           s:`Le reste est nul, donc ${b} est un DIVISEUR de ${a}, et ${a} est un MULTIPLE de ${b}.` }; } },
{ d:"M", g(){ const b=ri(6,30), q=ri(5,40), r=ri(1,b-1), a=b*q+r;
  return { q:`On donne : ${a} = ${b} × ${q} + ${r}. Vérifie que cette écriture est bien celle d'une division euclidienne.`,
           s:`On contrôle deux choses.\nL'égalité : ${b} × ${q} = ${b*q}, puis ${b*q} + ${r} = ${a} ✔\nLa condition sur le reste : ${r} < ${b} ✔\nC'est donc bien la division euclidienne de ${a} par ${b}.` }; } },
{ d:"M", g(){ const b=ri(6,20), q=ri(5,30), r=ri(1,b-1), a=b*q+r;
  return { q:`Dans la division euclidienne de ${a} par ${b}, le quotient est ${q}. Quel est le reste ?`,
           s:`${b} × ${q} = ${b*q}, donc le reste est ${a} − ${b*q} = ${r}.\nOn vérifie que ${r} < ${b}.` }; } },
{ d:"M", g(){ const b=ri(6,25);
  return { q:`Quelles valeurs le reste peut-il prendre dans une division euclidienne par ${b} ?`,
           s:`Le reste est toujours un entier positif ou nul, strictement inférieur au diviseur.\nIci il peut valoir de 0 à ${b-1}, soit ${b} valeurs possibles.` }; } },
{ d:"D", g(){ const b=ri(6,25), q=ri(b+1,40), r=ri(0,b-1), a=b*q+r;   // q > b > r : l'échange reste licite
  return { q:`On donne : ${a} = ${b} × ${q} + ${r}. Écris l'égalité de la division euclidienne de ${a} par ${q}.`,
           s:`La multiplication est commutative : ${a} = ${q} × ${b} + ${r}.\nC'est bien la division euclidienne de ${a} par ${q}, car le reste ${r} est inférieur à ${q}.\nQuotient : ${b}. Reste : ${r}.` }; } },
{ d:"D", g(){ const b=ri(8,30), q=ri(10,40), r=b, a=b*q+r;
  return { q:`Peut-on écrire ${a} = ${b} × ${q} + ${r} comme division euclidienne de ${a} par ${b} ?`,
           s:`L'égalité est vraie (${b*q} + ${r} = ${a}), mais le reste ${r} n'est pas STRICTEMENT inférieur au diviseur ${b}.\nCe n'est donc pas la division euclidienne. La bonne écriture est ${a} = ${b} × ${q+1} + 0.` }; } },
{ d:"D", g(){ const b=ri(6,25), q=ri(5,40), r=ri(0,b-1), a=b*q+r;
  return { q:`On donne : ${a} = ${b} × ${q} + ${r}. Sans poser d'opération, dis si ${b} divise ${a}.`,
           s:`${r===0?`Le reste est nul : ${b} DIVISE ${a}.`:`Le reste vaut ${r}, non nul : ${b} ne divise PAS ${a}.`}` }; } },
{ d:"D", g(){ const b=ri(6,20), q=ri(5,30), r=ri(1,b-1), a=b*q+r;
  return { q:`Dans la division euclidienne de ${a} par ${b}, on trouve un reste de ${r}. Quel est le quotient ? Justifie par un calcul.`,
           s:`${a} − ${r} = ${b*q}, et ${b*q} ÷ ${b} = ${q}.\nLe quotient est ${q}, et l'on a bien ${a} = ${b} × ${q} + ${r}.` }; } },
{ d:"D", g(){ const b=ri(5,15), q=ri(5,30), r=ri(1,b-1), a=b*q+r; const el=pick(PRENOMS);
  return { q:`${el} écrit : ${a} = ${q} × ${b} + ${r} et affirme que le diviseur est ${q}. Que penses-tu de cette lecture ?`,
           s:`La multiplication étant commutative, l'égalité reste vraie. Mais le diviseur est celui par lequel on divise : dans la division de ${a} par ${b}, c'est ${b}, et ${q} est le quotient.\nLe critère décisif est le reste : ${r} doit être inférieur au diviseur, et ${r} < ${b}.` }; } },
{ d:"D", g(){ const b=ri(7,25), q=ri(10,40), r=ri(1,b-1), a=b*q+r;
  return { q:`On donne : ${a} = ${b} × ${q} + ${r}. Quel est le multiple de ${b} immédiatement inférieur à ${a} ? Et immédiatement supérieur ?`,
           s:`Inférieur : ${b} × ${q} = ${b*q}.\nSupérieur : ${b} × ${q+1} = ${b*(q+1)}.\nLe nombre ${a} se situe entre les deux, à ${r} au-dessus du premier.` }; } },
];

/* ══ PROBLÈMES ══ */
FAMILLES["Le dallage parfait"] = [
{ d:"F", g(){ const c=pick([6,8,10,12]), L=c*ri(6,15), l=c*ri(4,12); if(pg(L,l)!==c) return null;
  return { q:`On veut paver un rectangle de ${L} cm sur ${l} cm avec des dalles carrées identiques, les plus grandes possible, sans découpe. Quelle est la taille d'une dalle ?`,
           s:`Le côté de la dalle doit diviser ${L} et ${l} : c'est le PGCD.\n${pgcdDetail(L,l)}\nLes dalles mesurent ${c} cm de côté.` }; } },
{ d:"F", g(){ const c=pick([5,6,9,12]), L=c*ri(5,12), l=c*ri(3,10); if(pg(L,l)!==c) return null;
  return { q:`Un sol rectangulaire de ${L} cm sur ${l} cm est pavé de dalles carrées de ${c} cm de côté, sans découpe. Combien faut-il de dalles ?`,
           s:`${L} ÷ ${c} = ${L/c} dalles en longueur, ${l} ÷ ${c} = ${l/c} en largeur.\nTotal : ${L/c} × ${l/c} = ${L/c*l/c} dalles.` }; } },
{ d:"F", g(){ const c=pick([4,6,8]), L=c*ri(5,12), l=c*ri(3,9); if(pg(L,l)!==c) return null;
  return { q:`Peut-on paver un rectangle de ${L} cm sur ${l} cm avec des dalles carrées de ${c} cm de côté, sans découpe ?`,
           s:`Il faut que ${c} divise les deux dimensions : ${L} ÷ ${c} = ${L/c} et ${l} ÷ ${c} = ${l/c}, deux quotients entiers.\nOui, c'est possible : il faut ${L/c*l/c} dalles.` }; } },
{ d:"M", g(){ const c=pick([6,12,15,18]), L=c*ri(6,14), l=c*ri(4,11); if(pg(L,l)!==c) return null;
  return { q:`On veut paver un rectangle de ${L} cm sur ${l} cm avec des dalles carrées identiques, les plus grandes possible, sans découpe. 1) Quelle est la taille d'une dalle ? 2) Combien de dalles faut-il ?`,
           s:`1) Le côté doit diviser les deux dimensions : c'est le PGCD.\n${pgcdDetail(L,l)}\nLes dalles mesurent ${c} cm de côté.\n2) ${L/c} × ${l/c} = ${L/c*l/c} dalles.` }; } },
{ d:"M", g(){ const c=pick([7,9,11,14]), L=c*ri(5,12), l=c*ri(3,9); if(pg(L,l)!==c) return null;
  return { q:`Un rectangle de ${L} cm sur ${l} cm est pavé par des dalles carrées identiques les plus grandes possible. Quelle est l'aire d'une dalle ?`,
           s:`${pgcdDetail(L,l)}\nLe côté vaut ${c} cm, donc l'aire d'une dalle est ${c} × ${c} = ${c*c} cm².` }; } },
{ d:"M", g(){ const c=pick([8,10,12]), L=c*ri(6,12), l=c*ri(4,9); if(pg(L,l)!==c) return null;
  return { q:`On pave un rectangle de ${L} cm sur ${l} cm avec les plus grandes dalles carrées possibles. Combien y en a-t-il en longueur ? en largeur ?`,
           s:`${pgcdDetail(L,l)}\nCôté : ${c} cm. En longueur : ${L} ÷ ${c} = ${L/c}. En largeur : ${l} ÷ ${c} = ${l/c}.` }; } },
{ d:"D", g(){ const c=pick([12,15,16,18,20]), L=c*ri(7,15), l=c*ri(5,12); if(pg(L,l)!==c) return null;
  return { q:`On veut paver un rectangle de ${L} cm sur ${l} cm avec des dalles carrées identiques, les plus grandes possible, sans découpe. 1) Quelle est la taille d'une dalle ? 2) Combien de dalles faut-il ?`,
           s:`1) ${pgcdDetail(L,l)}\nLes dalles mesurent ${c} cm de côté.\n2) ${L/c} × ${l/c} = ${L/c*l/c} dalles.` }; } },
{ d:"D", g(){ const c=pick([9,12,14,15]), L=c*ri(6,13), l=c*ri(4,10); if(pg(L,l)!==c) return null;
  return { q:`Un rectangle de ${L} cm sur ${l} cm est pavé de dalles carrées identiques les plus grandes possible. Vérifie que l'aire totale est bien couverte.`,
           s:`${pgcdDetail(L,l)}\nCôté ${c} cm, soit ${L/c} × ${l/c} = ${L/c*l/c} dalles.\nAire des dalles : ${L/c*l/c} × ${c*c} = ${L*l} cm². Aire du rectangle : ${L} × ${l} = ${L*l} cm². Les deux coïncident.` }; } },
{ d:"D", g(){ const c=pick([10,12,16]), L=c*ri(6,12), l=c*ri(4,9); if(pg(L,l)!==c) return null;
  const petit=c/2;
  return { q:`Un rectangle de ${L} cm sur ${l} cm peut être pavé par des dalles de ${c} cm de côté. Peut-il l'être aussi par des dalles de ${petit} cm ? Combien en faudrait-il ?`,
           s:`${petit} divise ${c}, qui divise ${L} et ${l} : oui, c'est possible.\nIl faudrait ${L/petit} × ${l/petit} = ${L/petit*(l/petit)} dalles, soit 4 fois plus (chaque grande dalle se découpe en 4).` }; } },
{ d:"D", g(){ const c=pick([6,8,9,12]), L=c*ri(5,11), l=c*ri(3,8); if(pg(L,l)!==c) return null;
  const el=pick(PRENOMS), faux=c*2;
  return { q:`Pour paver un rectangle de ${L} cm sur ${l} cm, ${el} propose des dalles carrées de ${faux} cm de côté. Est-ce possible ?`,
           s:`Il faudrait que ${faux} divise ${L} et ${l}. Or ${L} ÷ ${faux} ${L%faux===0?`= ${L/faux}`:`n'est pas entier`} et ${l} ÷ ${faux} ${l%faux===0?`= ${l/faux}`:`n'est pas entier`}.\n${L%faux===0&&l%faux===0?`C'est possible, mais ce ne sont pas les plus grandes : le PGCD vaut ${c}.`:`Ce n'est PAS possible sans découpe. La plus grande taille est le PGCD, soit ${c} cm.`}` }; } },
{ d:"D", g(){ const c=pick([11,13,7]), L=c*ri(6,12), l=c*ri(4,9); if(pg(L,l)!==c) return null;
  return { q:`On pave un rectangle de ${L} cm sur ${l} cm avec les plus grandes dalles carrées possibles. Quelle est la longueur totale de joint le long d'un côté de ${L} cm ?`,
           s:`${pgcdDetail(L,l)}\nCôté de dalle : ${c} cm, donc ${L/c} dalles alignées et ${L/c-1} joints intérieurs sur ce côté.` }; } },
{ d:"D", g(){ const c=pick([8,10,12,15]), L=c*ri(6,12), l=c*ri(4,9); if(pg(L,l)!==c) return null;
  return { q:`Un rectangle de ${L} cm sur ${l} cm doit être pavé sans découpe par des dalles carrées identiques. Quelles tailles de dalles sont possibles ?`,
           s:`${pgcdDetail(L,l)}\nToutes les tailles possibles sont les diviseurs du PGCD : ${div(c).join(" ; ")} cm.\nLa plus grande est ${c} cm.` }; } },
];

FAMILLES["Les cars du voyage scolaire"] = [
{ d:"F", g(){ const p=ri(30,60), n=ri(100,400);
  const c=Math.ceil(n/p);
  return { q:`${n} élèves partent en voyage dans des cars de ${p} places. Combien de cars faut-il réserver ?`,
           s:`${n} = ${p} × ${Math.floor(n/p)} + ${n%p}.\n${n%p===0?`${Math.floor(n/p)} cars suffisent exactement.`:`${Math.floor(n/p)} cars sont pleins et il reste ${n%p} élèves : il faut donc ${c} cars.`}` }; } },
{ d:"F", g(){ const p=ri(20,55), c=ri(3,9), n=p*c;
  return { q:`${n} élèves partent dans des cars de ${p} places. Combien de cars faut-il ? Reste-t-il des places libres ?`,
           s:`${n} ÷ ${p} = ${c}, reste 0.\nIl faut ${c} cars, tous pleins : aucune place libre.` }; } },
{ d:"F", g(){ const p=ri(30,55), n=ri(80,300);
  return { q:`Un car contient ${p} places. Combien d'élèves peut-on transporter avec ${Math.ceil(n/p)} cars ?`,
           s:`${Math.ceil(n/p)} × ${p} = ${Math.ceil(n/p)*p} élèves au maximum.` }; } },
{ d:"M", g(){ const p=ri(30,55), n=ri(150,500);
  const c=Math.ceil(n/p);
  return { q:`${n} élèves partent en voyage dans des cars de ${p} places. Combien de cars faut-il réserver ? Combien de places resteront libres ?`,
           s:`${n} = ${p} × ${Math.floor(n/p)} + ${n%p}, donc il faut ${c} cars.\nCapacité totale : ${c} × ${p} = ${c*p} places.\nPlaces libres : ${c*p} − ${n} = ${c*p-n}.` }; } },
{ d:"M", g(){ const p=ri(30,55), n=ri(150,400), prix=ri(200,600);
  const c=Math.ceil(n/p);
  return { q:`${n} élèves partent dans des cars de ${p} places, loués ${prix} € l'unité. Quel est le coût total du transport ?`,
           s:`Nombre de cars : ${n} ÷ ${p} donne ${Math.floor(n/p)} reste ${n%p}, donc ${c} cars.\nCoût : ${c} × ${prix} = ${grp(c*prix)} €.` }; } },
{ d:"M", g(){ const p=ri(30,55), n=ri(150,400);
  const c=Math.ceil(n/p);
  return { q:`${n} élèves doivent voyager dans des cars de ${p} places. Combien de cars seront complets ?`,
           s:`${n} = ${p} × ${Math.floor(n/p)} + ${n%p}.\n${Math.floor(n/p)} cars seront complets${n%p?`, et un dernier car transportera ${n%p} élèves`:` et il n'y a pas de car partiel`}.` }; } },
{ d:"D", g(){ const p=ri(30,55), n=ri(200,600), acc=ri(4,12);
  const tot=n+acc, c=Math.ceil(tot/p);
  return { q:`${n} élèves et ${acc} accompagnateurs partent en voyage dans des cars de ${p} places. Combien de cars faut-il réserver ?`,
           s:`Nombre total de personnes : ${n} + ${acc} = ${tot}.\n${tot} = ${p} × ${Math.floor(tot/p)} + ${tot%p}, donc il faut ${c} cars.` }; } },
{ d:"D", g(){ const p=ri(30,55), n=ri(200,500), prix=ri(300,700);
  const c=Math.ceil(n/p);
  return { q:`${n} élèves partent dans des cars de ${p} places à ${prix} € le car. Quel est le coût total, et le coût par élève arrondi au centime ?`,
           s:`Cars : ${c}. Coût total : ${c} × ${prix} = ${grp(c*prix)} €.\nPar élève : ${grp(c*prix)} ÷ ${n} ≈ ${(c*prix/n).toFixed(2).replace(".",",")} €.` }; } },
{ d:"D", g(){ const p1=ri(30,45), p2=ri(46,60), n=ri(200,500);
  const c1=Math.ceil(n/p1), c2=Math.ceil(n/p2);
  return { q:`${n} élèves doivent partir. Un loueur propose des cars de ${p1} places, un autre des cars de ${p2} places. Combien de cars faut-il dans chaque cas ?`,
           s:`Avec ${p1} places : ${n} ÷ ${p1} donne ${Math.floor(n/p1)} reste ${n%p1}, donc ${c1} cars.\nAvec ${p2} places : ${n} ÷ ${p2} donne ${Math.floor(n/p2)} reste ${n%p2}, donc ${c2} cars.` }; } },
{ d:"D", g(){ const p=ri(30,55), n=ri(200,500); const el=pick(PRENOMS);
  const c=Math.ceil(n/p);
  return { q:`${n} élèves partent dans des cars de ${p} places. ${el} annonce qu'il faut ${Math.floor(n/p)} cars. A-t-il raison ?`,
           s:`${n} = ${p} × ${Math.floor(n/p)} + ${n%p}.\n${n%p===0?`Ici la division tombe juste : ${el} a raison, ${Math.floor(n/p)} cars suffisent.`:`Avec ${Math.floor(n/p)} cars, ${n%p} élèves resteraient à quai. Il faut arrondir au-dessus : ${c} cars. ${el} a tort.`}` }; } },
{ d:"D", g(){ const p=ri(30,55), c=ri(4,10), n=p*c-ri(1,p-1);
  return { q:`${n} élèves partent dans des cars de ${p} places. Combien d'élèves supplémentaires pourraient encore embarquer sans louer de car de plus ?`,
           s:`Cars nécessaires : ${n} ÷ ${p} donne ${Math.floor(n/p)} reste ${n%p}, donc ${Math.ceil(n/p)} cars.\nCapacité : ${Math.ceil(n/p)} × ${p} = ${Math.ceil(n/p)*p}. On peut encore prendre ${Math.ceil(n/p)*p-n} élèves.` }; } },
{ d:"D", g(){ const p=ri(30,50), n=ri(200,450);
  const c=Math.ceil(n/p), parCar=Math.floor(n/c), reste=n%c;
  return { q:`${n} élèves partent dans ${c} cars de ${p} places. Peut-on répartir les élèves équitablement ? Combien par car ?`,
           s:`${n} ÷ ${c} = ${parCar} reste ${reste}.\n${reste===0?`Oui : ${parCar} élèves par car exactement.`:`Presque : ${c-reste} cars auront ${parCar} élèves et ${reste} cars en auront ${parCar+1}.`}\nDans tous les cas on reste sous les ${p} places.` }; } },
];

FAMILLES["Les guirlandes synchronisées"] = [
{ d:"F", g(){ const a=ri(2,12), b=ri(2,12); if(a===b) return null;
  return { q:`Deux guirlandes clignotent ensemble à l'instant 0. La première clignote toutes les ${a} secondes, la seconde toutes les ${b} secondes. Au bout de combien de temps clignotent-elles à nouveau ensemble ?`,
           s:`On cherche le plus petit multiple commun de ${a} et ${b}.\nMultiples de ${a} : ${[1,2,3,4,5,6].map(k=>a*k).join(" ; ")} …\nMultiples de ${b} : ${[1,2,3,4,5,6].map(k=>b*k).join(" ; ")} …\nPPCM(${a} ; ${b}) = ${pp(a,b)} : elles clignotent ensemble toutes les ${pp(a,b)} secondes.` }; } },
{ d:"F", g(){ const a=ri(3,15), b=ri(3,15); if(a===b) return null;
  return { q:`Deux phares s'allument ensemble, puis l'un toutes les ${a} secondes et l'autre toutes les ${b} secondes. Après combien de secondes s'allument-ils de nouveau ensemble ?`,
           s:`PPCM(${a} ; ${b}) = ${pp(a,b)} secondes.` }; } },
{ d:"F", g(){ const a=ri(2,9), b=a*ri(2,4);
  return { q:`Une guirlande clignote toutes les ${a} secondes, une autre toutes les ${b} secondes. Elles démarrent ensemble. Quand se retrouvent-elles ?`,
           s:`${a} divise ${b}, donc chaque clignotement de la seconde coïncide déjà avec un clignotement de la première.\nPPCM(${a} ; ${b}) = ${b} : elles se retrouvent toutes les ${b} secondes.` }; } },
{ d:"M", g(){ const a=ri(4,20), b=ri(4,20); if(a===b) return null;
  const m=pp(a,b);
  return { q:`Deux guirlandes clignotent ensemble à l'instant 0, puis toutes les ${a} et ${b} secondes. Combien de fois clignotent-elles ensemble en une minute (instant 0 exclu) ?`,
           s:`PPCM(${a} ; ${b}) = ${m} secondes.\nEn 60 secondes : ${Math.floor(60/m)} coïncidence(s), aux instants ${Array.from({length:Math.floor(60/m)},(_,i)=>m*(i+1)).join(" ; ")} s.` }; } },
{ d:"M", g(){ const a=ri(5,25), b=ri(5,25); if(a===b) return null;
  return { q:`Deux clignotants se déclenchent ensemble, l'un toutes les ${a} secondes, l'autre toutes les ${b} secondes. Au bout de combien de temps se synchronisent-ils à nouveau ?`,
           s:`${a} = ${dec(a)} et ${b} = ${dec(b)}.\nOn prend chaque facteur avec son plus grand exposant : PPCM(${a} ; ${b}) = ${pp(a,b)} secondes.` }; } },
{ d:"M", g(){ const a=ri(6,20), b=ri(6,20); if(a===b) return null;
  const m=pp(a,b);
  return { q:`Deux guirlandes clignotent toutes les ${a} et ${b} secondes, ensemble au départ. Se retrouveront-elles au bout de ${2*m} secondes ?`,
           s:`Elles coïncident toutes les PPCM(${a} ; ${b}) = ${m} secondes.\n${2*m} = 2 × ${m} : oui, c'est bien un instant de coïncidence (le deuxième).` }; } },
{ d:"D", g(){ const a=ri(8,30), b=ri(8,30); if(a===b) return null;
  const m=pp(a,b);
  return { q:`Deux guirlandes clignotent ensemble à l'instant 0, puis toutes les ${a} et ${b} secondes. Combien de fois se retrouvent-elles ensemble en 10 minutes ?`,
           s:`PPCM(${a} ; ${b}) = ${m} secondes.\n10 minutes = 600 secondes : ${Math.floor(600/m)} coïncidences (instant 0 exclu).` }; } },
{ d:"D", g(){ const a=ri(4,15), b=ri(4,15), c=ri(4,15); if(a===b||b===c||a===c) return null;
  return { q:`Trois guirlandes clignotent ensemble à l'instant 0, puis toutes les ${a}, ${b} et ${c} secondes. Quand se retrouvent-elles toutes les trois ?`,
           s:`PPCM(${a} ; ${b}) = ${pp(a,b)}, puis PPCM(${pp(a,b)} ; ${c}) = ${pp(pp(a,b),c)}.\nElles se retrouvent toutes les ${pp(pp(a,b),c)} secondes.` }; } },
{ d:"D", g(){ const a=ri(6,25), b=ri(6,25); if(a===b) return null;
  const m=pp(a,b);
  return { q:`Deux guirlandes clignotent toutes les ${a} et ${b} secondes, ensemble au départ. Combien de fois chacune aura-t-elle clignoté lors de leur première coïncidence ?`,
           s:`Première coïncidence : PPCM(${a} ; ${b}) = ${m} secondes.\nLa première a clignoté ${m} ÷ ${a} = ${m/a} fois, la seconde ${m} ÷ ${b} = ${m/b} fois.` }; } },
{ d:"D", g(){ const a=ri(5,20), b=ri(5,20); if(a===b||pg(a,b)!==1) return null;
  return { q:`Deux guirlandes clignotent toutes les ${a} et ${b} secondes. Elles se retrouvent au bout de ${a*b} secondes. Pouvait-on le prévoir ?`,
           s:`${a} et ${b} sont premiers entre eux : PGCD(${a} ; ${b}) = 1.\nDans ce cas le PPCM est exactement le produit : ${a} × ${b} = ${a*b}. C'était donc prévisible.` }; } },
{ d:"D", g(){ const a=ri(6,24), b=ri(6,24); if(a===b) return null; const el=pick(PRENOMS);
  return { q:`Deux guirlandes clignotent toutes les ${a} et ${b} secondes. ${el} annonce qu'elles se retrouvent au bout de ${a*b} secondes. A-t-il raison ?`,
           s:`Le vrai délai est PPCM(${a} ; ${b}) = ${pp(a,b)} secondes.\n${pp(a,b)===a*b?`Ici cela coïncide avec ${a*b}, car les deux nombres sont premiers entre eux.`:`${a*b} est bien un instant de coïncidence, mais pas le PREMIER : ${el} n'a pas donné la bonne réponse, c'est ${pp(a,b)} s.`}` }; } },
{ d:"D", g(){ const a=ri(6,20), b=ri(6,20); if(a===b) return null;
  const m=pp(a,b);
  return { q:`Deux guirlandes clignotent toutes les ${a} et ${b} secondes, ensemble au départ. À quels instants coïncident-elles pendant les 3 premières minutes ?`,
           s:`PPCM(${a} ; ${b}) = ${m} s.\n180 secondes : coïncidences aux instants ${Array.from({length:Math.floor(180/m)},(_,i)=>m*(i+1)).join(" ; ")} s, soit ${Math.floor(180/m)} en tout.` }; } },
];

FAMILLES["Les lots identiques"] = [
{ d:"F", g(){ const g0=pick([6,8,12]), a=g0*ri(4,12), b=g0*ri(3,10); if(pg(a,b)!==g0) return null;
  return { q:`Un magasin veut composer des lots tous identiques avec ${a} stylos et ${b} gommes, sans reste. Quel est le nombre maximal de lots ?`,
           s:`Le nombre de lots doit diviser ${a} et ${b} : c'est le PGCD.\n${pgcdDetail(a,b)}\nOn peut faire au maximum ${g0} lots.` }; } },
{ d:"F", g(){ const g0=pick([5,9,10]), a=g0*ri(4,10), b=g0*ri(3,9); if(pg(a,b)!==g0) return null;
  return { q:`Avec ${a} billes et ${b} jetons, on forme ${g0} lots identiques sans reste. Que contient chaque lot ?`,
           s:`${a} ÷ ${g0} = ${a/g0} billes et ${b} ÷ ${g0} = ${b/g0} jetons par lot.` }; } },
{ d:"F", g(){ const g0=pick([4,6,8]), a=g0*ri(4,10), b=g0*ri(3,9); if(pg(a,b)!==g0) return null;
  return { q:`Peut-on répartir ${a} crayons et ${b} cahiers en ${g0} lots identiques sans reste ?`,
           s:`${a} ÷ ${g0} = ${a/g0} et ${b} ÷ ${g0} = ${b/g0}, deux quotients entiers : oui.\nChaque lot contient ${a/g0} crayons et ${b/g0} cahiers.` }; } },
{ d:"M", g(){ const g0=pick([8,12,15,18]), a=g0*ri(4,10), b=g0*ri(3,9); if(pg(a,b)!==g0) return null;
  return { q:`Un magasin veut composer des lots tous identiques avec ${a} stylos et ${b} gommes, sans reste. Quel est le nombre maximal de lots ? Quelle est la composition d'un lot ?`,
           s:`${pgcdDetail(a,b)}\nNombre maximal de lots : ${g0}.\nComposition : ${a/g0} stylos et ${b/g0} gommes.` }; } },
{ d:"M", g(){ const g0=pick([6,9,12,14]), a=g0*ri(4,10), b=g0*ri(3,9), c=g0*ri(2,7);
  if(pg(pg(a,b),c)!==g0) return null;
  return { q:`On veut faire des lots identiques avec ${a} billes, ${b} jetons et ${c} dés, sans reste. Combien de lots au maximum ?`,
           s:`Le nombre de lots divise les trois nombres.\n${a} = ${dec(a)}, ${b} = ${dec(b)}, ${c} = ${dec(c)}.\nPGCD des trois : ${g0}. On peut faire ${g0} lots, contenant ${a/g0} billes, ${b/g0} jetons et ${c/g0} dés.` }; } },
{ d:"M", g(){ const g0=pick([7,11,13]), a=g0*ri(4,9), b=g0*ri(3,8); if(pg(a,b)!==g0) return null;
  return { q:`Avec ${a} bonbons et ${b} chocolats, quel est le plus grand nombre de sachets identiques que l'on peut composer sans reste ?`,
           s:`${pgcdDetail(a,b)}\nOn peut faire ${g0} sachets, avec ${a/g0} bonbons et ${b/g0} chocolats chacun.` }; } },
{ d:"D", g(){ const g0=pick([12,15,16,18,20]), a=g0*ri(5,12), b=g0*ri(4,10); if(pg(a,b)!==g0) return null;
  return { q:`Un magasin veut composer des lots tous identiques avec ${a} stylos et ${b} gommes, sans reste. Quel est le nombre maximal de lots ? Quelle est la composition d'un lot ?`,
           s:`${pgcdDetail(a,b)}\nNombre maximal : ${g0} lots, contenant chacun ${a/g0} stylos et ${b/g0} gommes.\nVérification : ${g0} × ${a/g0} = ${a} et ${g0} × ${b/g0} = ${b}.` }; } },
{ d:"D", g(){ const g0=pick([10,12,14,16]), a=g0*ri(4,10), b=g0*ri(3,9); if(pg(a,b)!==g0) return null;
  return { q:`Avec ${a} stylos et ${b} gommes, quels nombres de lots identiques sans reste sont possibles ?`,
           s:`${pgcdDetail(a,b)}\nTous les nombres de lots possibles sont les diviseurs du PGCD : ${div(g0).join(" ; ")}.\nLe maximum est ${g0}.` }; } },
{ d:"D", g(){ const g0=pick([8,10,12]), a=g0*ri(4,10), b=g0*ri(3,9); if(pg(a,b)!==g0) return null;
  const el=pick(PRENOMS), faux=g0*2;
  return { q:`Avec ${a} stylos et ${b} gommes, ${el} affirme pouvoir faire ${faux} lots identiques sans reste. Vérifie.`,
           s:`${a} ÷ ${faux} ${a%faux===0?`= ${a/faux}`:`n'est pas entier`} et ${b} ÷ ${faux} ${b%faux===0?`= ${b/faux}`:`n'est pas entier`}.\n${a%faux===0&&b%faux===0?`C'est possible.`:`Impossible : ${faux} ne divise pas les deux quantités. Le maximum est le PGCD, ${g0}.`}` }; } },
{ d:"D", g(){ const g0=pick([9,12,15]), a=g0*ri(4,10), b=g0*ri(3,9), reste=ri(1,3);
  if(pg(a,b)!==g0) return null;
  return { q:`On dispose de ${a+reste} stylos et ${b} gommes. On veut des lots identiques en utilisant toutes les gommes et en acceptant de garder quelques stylos. Combien de lots au maximum, et combien de stylos restent ?`,
           s:`Si l'on met de côté ${reste} stylo(s), il en reste ${a}, et PGCD(${a} ; ${b}) = ${g0}.\nOn peut faire ${g0} lots de ${a/g0} stylos et ${b/g0} gommes, en gardant ${reste} stylo(s).` }; } },
{ d:"D", g(){ const g0=pick([6,8,9,12]), a=g0*ri(5,11), b=g0*ri(4,9); if(pg(a,b)!==g0) return null;
  return { q:`Avec ${a} stylos et ${b} gommes on compose le maximum de lots identiques. Combien d'objets contient chaque lot au total ?`,
           s:`${pgcdDetail(a,b)}\n${g0} lots, contenant ${a/g0} + ${b/g0} = ${a/g0+b/g0} objets chacun.\nVérification : ${g0} × ${a/g0+b/g0} = ${a+b} = ${a} + ${b}.` }; } },
{ d:"D", g(){ const g0=pick([10,12,15,18]), a=g0*ri(4,10), b=g0*ri(3,9); if(pg(a,b)!==g0) return null;
  return { q:`Un magasin compose le maximum de lots identiques avec ${a} stylos et ${b} gommes. Si chaque lot est vendu ${ri(3,9)} €, cela change-t-il le nombre de lots ?`,
           s:`Non : le nombre de lots ne dépend que des quantités.\n${pgcdDetail(a,b)}\nIl y a ${g0} lots, quel que soit le prix de vente.` }; } },
];

FAMILLES["Les œufs en boîtes"] = [
{ d:"F", g(){ const b=pick([6,10,12]), n=ri(50,200);
  return { q:`Une fermière range ${n} œufs dans des boîtes de ${b}. Combien de boîtes pleines obtient-elle ? Combien d'œufs restent ?`,
           s:`${n} = ${b} × ${Math.floor(n/b)} + ${n%b}.\n${Math.floor(n/b)} boîtes pleines et ${n%b} œuf(s) restant(s).` }; } },
{ d:"F", g(){ const b=pick([6,12]), q=ri(8,30), n=b*q;
  return { q:`Une fermière range ${n} œufs dans des boîtes de ${b}. Toutes les boîtes sont-elles pleines ?`,
           s:`${n} ÷ ${b} = ${q}, reste 0.\nOui : ${q} boîtes exactement, toutes pleines.` }; } },
{ d:"F", g(){ const b=pick([6,10,12]), q=ri(5,25);
  return { q:`Combien d'œufs contiennent ${q} boîtes de ${b} œufs ?`, s:`${q} × ${b} = ${q*b} œufs.` }; } },
{ d:"M", g(){ const b=pick([6,10,12,15]), n=ri(100,500);
  return { q:`Une fermière range ${n} œufs dans des boîtes de ${b}. Combien de boîtes pleines obtient-elle ? Combien d'œufs restent ?`,
           s:`${n} = ${b} × ${Math.floor(n/b)} + ${n%b}.\n${Math.floor(n/b)} boîtes pleines, reste ${n%b} œuf(s).` }; } },
{ d:"M", g(){ const b=pick([6,12]), n=ri(100,400);
  return { q:`Une fermière a ${n} œufs et des boîtes de ${b}. Combien d'œufs doit-elle ajouter pour remplir une boîte de plus ?`,
           s:`${n} = ${b} × ${Math.floor(n/b)} + ${n%b}.\n${n%b===0?`Toutes les boîtes sont pleines : il faudrait ${b} œufs de plus pour une boîte supplémentaire.`:`Il manque ${b} − ${n%b} = ${b-n%b} œuf(s).`}` }; } },
{ d:"M", g(){ const b=pick([6,10,12]), n=ri(100,400), prix=ri(2,5);
  return { q:`Une fermière range ${n} œufs dans des boîtes de ${b}, vendues ${prix} € chacune. Combien gagne-t-elle avec les boîtes pleines ?`,
           s:`${Math.floor(n/b)} boîtes pleines (reste ${n%b} œufs).\nRecette : ${Math.floor(n/b)} × ${prix} = ${Math.floor(n/b)*prix} €.` }; } },
{ d:"D", g(){ const b=pick([6,10,12,15,20]), n=ri(200,900);
  return { q:`Une fermière range ${n} œufs dans des boîtes de ${b}. Combien de boîtes pleines ? Combien d'œufs restent ? Combien de boîtes lui faut-il pour tout ranger ?`,
           s:`${n} = ${b} × ${Math.floor(n/b)} + ${n%b}.\nBoîtes pleines : ${Math.floor(n/b)}. Reste : ${n%b} œuf(s).\nPour tout ranger il faut ${Math.ceil(n/b)} boîtes${n%b?`, la dernière étant incomplète`:``}.` }; } },
{ d:"D", g(){ const b1=6, b2=12, n=ri(150,500);
  return { q:`Une fermière dispose de ${n} œufs. Vaut-il mieux des boîtes de ${b1} ou de ${b2} pour avoir le moins de reste ?`,
           s:`Avec des boîtes de ${b1} : ${Math.floor(n/b1)} boîtes, reste ${n%b1}.\nAvec des boîtes de ${b2} : ${Math.floor(n/b2)} boîtes, reste ${n%b2}.\n${n%b1<n%b2?`Les boîtes de ${b1} laissent moins de reste.`:n%b1>n%b2?`Les boîtes de ${b2} laissent moins de reste.`:`Les deux laissent le même reste.`}` }; } },
{ d:"D", g(){ const b=pick([6,12]), n=ri(200,600);
  return { q:`Une fermière range ${n} œufs dans des boîtes de ${b}. Combien de boîtes faut-il retirer pour n'avoir que des boîtes pleines, et combien d'œufs cela représente-t-il ?`,
           s:`${n} = ${b} × ${Math.floor(n/b)} + ${n%b}.\n${n%b===0?`Aucune : toutes les boîtes sont déjà pleines.`:`La dernière boîte, incomplète, contient ${n%b} œuf(s). En la retirant il reste ${Math.floor(n/b)} boîtes pleines, soit ${b*Math.floor(n/b)} œufs.`}` }; } },
{ d:"D", g(){ const b=pick([6,10,12]), n=ri(150,500); const el=pick(PRENOMS);
  return { q:`Avec ${n} œufs et des boîtes de ${b}, ${el} annonce ${Math.ceil(n/b)} boîtes pleines. Qu'en penses-tu ?`,
           s:`${n} = ${b} × ${Math.floor(n/b)} + ${n%b}.\n${n%b===0?`Ici ${el} a raison : la division tombe juste.`:`${el} a compté la dernière boîte, qui n'est pas pleine (elle contient ${n%b} œufs). Il n'y a que ${Math.floor(n/b)} boîtes PLEINES.`}` }; } },
{ d:"D", g(){ const b=pick([6,12]), q=ri(10,40), n=b*q+ri(1,b-1);
  return { q:`Une fermière veut que toutes ses boîtes de ${b} soient pleines. Elle a ${n} œufs. Combien doit-elle en retirer, ou en ajouter ?`,
           s:`${n} = ${b} × ${q} + ${n%b}.\nEn retirer : ${n%b} œuf(s), pour obtenir ${b*q}.\nEn ajouter : ${b-n%b} œuf(s), pour obtenir ${b*(q+1)}.` }; } },
{ d:"D", g(){ const b=pick([6,10,12]), n=ri(200,600), casse=ri(3,20);
  const restants=n-casse;
  return { q:`Une fermière ramasse ${n} œufs, mais ${casse} sont cassés. Elle range les autres dans des boîtes de ${b}. Combien de boîtes pleines obtient-elle ?`,
           s:`Œufs utilisables : ${n} − ${casse} = ${restants}.\n${restants} = ${b} × ${Math.floor(restants/b)} + ${restants%b}.\n${Math.floor(restants/b)} boîtes pleines, reste ${restants%b} œuf(s).` }; } },
];

/* ══════════ MOTEUR ══════════ */
const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const sing = m => m.replace(/s$/, "");
const cleS = t => cle(t).split(" ").map(sing).join(" ");

function genererFamille(nom, besoins, vus) {
  const modeles = FAMILLES[nom], sortie = [];
  for (const d of ["F", "M", "D"]) {
    const dispo = modeles.filter(m => m.d === d);
    if (!dispo.length) continue;
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < besoins[d] * 400 + 9000) {
      essais++;
      let r; try { r = pick(dispo).g(); } catch (e) { continue; }
      if (!r || !r.q || !r.s) continue;
      const k = cle(r.q);
      if (vus.has(k)) continue;
      vus.add(k); sortie.push({ d, content: r.q, solution: r.s }); reste--;
    }
    if (reste > 0) console.warn(`  ⚠ ${nom} / ${LIBELLE[d]} : ${reste} manquant(s).`);
  }
  return sortie;
}
function besoinsDepuis(ex) {
  const c = { F: Math.round(CIBLE * REPART.F), M: Math.round(CIBLE * REPART.M), D: 0 };
  c.D = CIBLE - c.F - c.M;
  return { F: Math.max(0, c.F - (ex.F || 0)), M: Math.max(0, c.M - (ex.M || 0)), D: Math.max(0, c.D - (ex.D || 0)) };
}

if (APERCU) {
  const f = ARGS[ARGS.indexOf("--apercu") + 1];
  const dem = f && !f.startsWith("--") ? f : null;
  let total = 0; const lignes = [];
  for (const nom of Object.keys(FAMILLES)) {
    if (dem && cleS(nom) !== cleS(dem)) continue;
    alea = mulberry32(GRAINE + nom.length * 7919);
    const ex = genererFamille(nom, besoinsDepuis({}), new Set());
    const n = { F: 0, M: 0, D: 0 }; ex.forEach(e => n[e.d]++);
    lignes.push({ famille: nom, total: ex.length, Facile: n.F, Moyen: n.M, Difficile: n.D, modeles: FAMILLES[nom].length });
    total += ex.length;
    if (dem) { console.log(`\n══ ${nom} ══`);
      ["F","M","D"].forEach(d => ex.filter(e => e.d === d).slice(0, 3).forEach(e =>
        console.log(`\n[${LIBELLE[d]}] ${e.content}\n  → ${e.solution.replace(/\n/g, "\n    ")}`))); }
  }
  console.log(""); console.table(lignes);
  console.log(`Total : ${total} énoncés sur ${lignes.length} famille(s).`);
  process.exit(0);
}

(async () => {
  const { Pool } = require("pg");
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%rithm%' ORDER BY id`);
  const rows = brut.filter(r => cle(r.chapitre).includes("arithmetique"));
  if (!rows.length) { console.log("Chapitre introuvable."); await pool.end(); return; }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(rows, "chapitre", "Arithmétique");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  const parFam = new Map();
  rows.forEach(r => { if (!r.famille) return; const k = cleS(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

  const vus = new Set(rows.map(r => cle(r.content)));
  const aInserer = [], rapport = [], inconnues = [];
  const CANON = {}; Object.keys(FAMILLES).forEach(f => { CANON[cleS(f)] = f; });

  for (const [k, g] of parFam) {
    const type = maj(g.items, "type", "exercice");
    if (type === "probleme" && EXCLURE_PB) {
      rapport.push({ famille: g.nom, type, avant: g.items.length, ajoutes: 0, apres: g.items.length, note: "exclue (problème)" }); continue; }
    const canon = CANON[k];
    if (!canon) { inconnues.push(g.nom); continue; }
    const dej = { F: 0, M: 0, D: 0 };
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M" : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919);
    const neufs = genererFamille(canon, besoinsDepuis(dej), vus);
    const mod = { level: maj(g.items, "level", "college"), subject: maj(g.items, "subject", "Arithmétique"),
                  classe: maj(g.items, "classe", "3ème"), type };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content, solution: e.solution,
      difficulty: LIBELLE[e.d], level: mod.level, subject: mod.subject, classe: mod.classe,
      chapitre: CHAPITRE, type: mod.type, famille: g.nom }); });
    rapport.push({ famille: g.nom, type, avant: g.items.length, ajoutes: neufs.length, apres: g.items.length + neufs.length, note: "" });
  }
  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));
  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`arithmetique-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : arithmetique-avant-generation-${stamp}.json`);
  const T = 200;
  for (let i = 0; i < aInserer.length; i += T) {
    const lot = aInserer.slice(i, i + T), vals = [], par2 = [];
    lot.forEach((e, j) => { const b = j * 10;
      vals.push(`($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},$${b+9},$${b+10})`);
      par2.push(e.title, e.content, e.level, e.subject, e.difficulty, e.solution, e.classe, e.chapitre, e.type, e.famille); });
    await pool.query(`INSERT INTO exercises
      (title, content, level, subject, difficulty, solution, classe, chapitre, type, famille)
      VALUES ${vals.join(",")}`, par2);
    console.log(`  ${Math.min(i + T, aInserer.length)} / ${aInserer.length}`);
  }
  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAPITRE]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
