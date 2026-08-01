/* MathBase — generer-fractions.js
   Porte chaque famille du chapitre « Fractions » à 100 exercices.

   Même moteur que generer-decimaux.js, mais l'arithmétique est ici RATIONNELLE
   et exacte : tout est calculé en entiers avec PGCD/PPCM, jamais en flottant.
   Les corrigés sont produits par le calcul, pas rédigés.

   · 20 faciles / 30 moyens / 50 difficiles par famille (plus de difficiles).
   · Le script compte l'existant par difficulté et ne comble que le manque.
   · Tirage déterministe (graine) + déduplication : rejouable sans doublon.
   · Famille « Comparer » : AUCUN énoncé n'indique le dénominateur à utiliser.
     La méthode apparaît seulement dans le corrigé, et pas toujours la même.

   Usage :
     node generer-fractions.js --apercu                 # hors base
     node generer-fractions.js --apercu "Comparer"      # échantillons
     $env:DATABASE_URL = "postgresql://..."
     node generer-fractions.js                          # simulation
     node generer-fractions.js --execute                # applique
   Options : --cible N (100) · --graine N (20260730)
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260730);
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };

/* ── tirage déterministe ── */
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];
const melange = t => { const c = [...t]; for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(alea() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; } return c; };

/* ── rationnels exacts ── */
const pgcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };
const ppcm = (a, b) => a / pgcd(a, b) * b;
function red(n, d) { if (d < 0) { n = -n; d = -d; } const g = pgcd(n, d); return [n / g, d / g]; }
const sg = n => String(n).replace("-", "\u2212");
const fr = (n, d) => n === 0 ? "0" : d === 1 ? sg(n) : `${sg(n)}/${d}`;
const frP = (n, d) => n < 0 ? `(${fr(n, d)})` : fr(n, d);
const estRed = (n, d) => pgcd(n, d) === 1;
const simp = (n, d) => { const [a, b] = red(n, d); return (a !== n || b !== d) ? ` = ${fr(a, b)}` : ""; };
/* numérateur premier avec d (évite des opérandes non réduites comme 4/2) */
function numCop(d, max) {
  const ok = []; for (let i = 1; i <= max; i++) if (pgcd(i, d) === 1) ok.push(i);
  return ok.length ? pick(ok) : 1;
}

/* fraction irréductible tirée au sort */
function frac(nMax, dMin, dMax, propre) {
  for (let i = 0; i < 60; i++) { const d = ri(dMin, dMax), n = ri(1, propre ? d - 1 : nMax);
    if (d > 1 && n > 0 && pgcd(n, d) === 1) return [n, d]; }
  return [1, 2];
}

/* ── étapes d'une somme / différence ── */
function pasSomme(n1, d1, n2, d2, sgn) {
  const op = sgn > 0 ? "+" : "−";
  const m = ppcm(d1, d2), k1 = m / d1, k2 = m / d2;
  const num = n1 * k1 + sgn * n2 * k2;
  let s = `${fr(n1, d1)} ${op} ${fr(n2, d2)}`;
  if (d1 !== d2) {
    const conv = [];
    if (k1 > 1) conv.push(`${fr(n1, d1)} = ${fr(n1 * k1, m)}`);
    if (k2 > 1) conv.push(`${fr(n2, d2)} = ${fr(n2 * k2, m)}`);
    s = `Dénominateur commun ${m} : ${conv.join(" et ")}.\n${fr(n1 * k1, m)} ${op} ${fr(n2 * k2, m)} = ${fr(num, m)}`;
  } else s += ` = ${fr(num, m)}`;
  const [rn, rd] = red(num, m);
  if (rn !== num || rd !== m) s += `\nOn simplifie : ${fr(num, m)} = ${fr(rn, rd)}.`;
  else s += ".";
  return { s, n: rn, d: rd, bn: num, bd: m };
}
function pasProduit(n1, d1, n2, d2) {
  const num = n1 * n2, den = d1 * d2, [rn, rd] = red(num, den);
  let s = `${frP(n1, d1)} × ${frP(n2, d2)} = ${fr(num, den)}`;
  if (rn !== num || rd !== den) s += `\nOn simplifie par ${pgcd(num, den)} : ${fr(num, den)} = ${fr(rn, rd)}.`;
  else s += ".";
  return { s, n: rn, d: rd };
}
function pasQuotient(n1, d1, n2, d2) {
  const num = n1 * d2, den = d1 * n2, [rn, rd] = red(num, den);
  let s = `Diviser par ${fr(n2, d2)} revient à multiplier par son inverse ${fr(d2, n2)} :\n`
        + `${frP(n1, d1)} ÷ ${frP(n2, d2)} = ${frP(n1, d1)} × ${fr(d2, n2)} = ${fr(num, den)}`;
  if (rn !== num || rd !== den) s += `\nOn simplifie : ${fr(num, den)} = ${fr(rn, rd)}.`;
  else s += ".";
  return { s, n: rn, d: rd };
}

const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam","Zoé","Ilan"];

/* ══════════ FABRIQUES DE MODÈLES ══════════
   config.tir() rend [n1,d1,n2,d2] respectant la contrainte de la famille. */
function banqueSomme(cfg) {
  const sgn = cfg.sgn, op = sgn > 0 ? "+" : "−";
  const verbe = cfg.simpl ? "Calcule et simplifie" : "Calcule";
  return [
  { d:"F", g(){ const [a,b,c,e]=cfg.tir(); const r=pasSomme(a,b,c,e,sgn);
    return { q:`${verbe} : ${fr(a,b)} ${op} ${fr(c,e)}.`, s:r.s }; } },
  { d:"F", g(){ const [a,b,c,e]=cfg.tir(); const r=pasSomme(a,b,c,e,sgn);
    return { q:`Effectue : ${fr(a,b)} ${op} ${fr(c,e)}.`, s:r.s }; } },
  { d:"M", g(){ const [a,b,c,e]=cfg.tir(); const r=pasSomme(a,b,c,e,sgn);
    return { q:`${verbe} : ${fr(a,b)} ${op} ${fr(c,e)}. Le résultat est-il irréductible ?`,
             s:`${r.s}\nRésultat : ${fr(r.n,r.d)}${estRed(r.n,r.d)?", irréductible":""}.` }; } },
  { d:"M", g(){ const [a,b,c,e]=cfg.tir(); const r=pasSomme(a,b,c,e,sgn);
    return { q:`Complète : ${fr(a,b)} ${op} … = ${fr(r.n,r.d)}.`,
             s:`Le terme manquant est ${fr(c,e)}.\nVérification : ${r.s}` }; } },
  { d:"M", g(){ const [a,b,c,e]=cfg.tir(); const r=pasSomme(a,b,c,e,sgn);
    const el=pick(PRENOMS);
    /* erreur classique : additionner aussi les dénominateurs. Avec b === e il
       fallait bien écrire b + e, sinon la « faute » donnait le bon résultat. */
    return { q:`${el} écrit : ${fr(a,b)} ${op} ${fr(c,e)} = ${fr(a+sgn*c, b+e)}. Explique son erreur et donne le bon résultat.`,
             s:`${el} a additionné les numérateurs ET les dénominateurs, ce qui n'est pas permis.\n${r.s}` }; } },
  { d:"D", g(){ const [a,b,c,e]=cfg.tir(), [f,h]=cfg.tir(); const r1=pasSomme(a,b,c,e,sgn);
    const r2=pasSomme(r1.n,r1.d,f,h,sgn);
    return { q:`${verbe} : ${fr(a,b)} ${op} ${fr(c,e)} ${op} ${fr(f,h)}.`,
             s:`On calcule de gauche à droite.\n${r1.s}\nPuis ${fr(r1.n,r1.d)} ${op} ${fr(f,h)} :\n${r2.s}` }; } },
  { d:"D", g(){ const [a,b,c,e]=cfg.tir(); const r=pasSomme(a,b,c,e,sgn);
    return { q:`Complète : … ${op} ${fr(c,e)} = ${fr(r.n,r.d)}.`,
             s:`Le terme manquant est ${fr(a,b)}.\nVérification : ${r.s}` }; } },
  { d:"D", g(){ const [a,b,c,e]=cfg.tir(), [f,h]=cfg.tir(); const r1=pasSomme(a,b,c,e,sgn), r2=pasSomme(f,h,c,e,sgn);
    const c1=r1.n*r2.d, c2=r2.n*r1.d;
    return { q:`Compare les résultats de ${fr(a,b)} ${op} ${fr(c,e)} et de ${fr(f,h)} ${op} ${fr(c,e)}.`,
             s:`Premier calcul : ${r1.s}\nSecond calcul : ${r2.s}\nOn compare ${fr(r1.n,r1.d)} et ${fr(r2.n,r2.d)} : ${c1===c2?`ils sont égaux`:`${fr(r1.n,r1.d)} ${c1>c2?">":"<"} ${fr(r2.n,r2.d)}`}.` }; } },
  { d:"D", g(){ const [a,b,c,e]=cfg.tir(); const r=pasSomme(a,b,c,e,sgn);
    const un=r.n*1-r.d, cmp1=un>0?"supérieur":un<0?"inférieur":"égal";
    return { q:`${verbe} : ${fr(a,b)} ${op} ${fr(c,e)}, puis compare le résultat à 1.`,
             s:`${r.s}\nOn compare ${fr(r.n,r.d)} à 1 : le numérateur ${r.n} est ${un>0?"plus grand que":un<0?"plus petit que":"égal à"} le dénominateur ${r.d}, donc le résultat est ${cmp1} à 1.` }; } },
  { d:"D", g(){ const [a,b,c,e]=cfg.tir(); const r=pasSomme(a,b,c,e,sgn);
    const el=pick(PRENOMS), n2=ri(2,6);
    return { q:`${verbe} : ${fr(a,b)} ${op} ${fr(c,e)}, puis multiplie le résultat par ${n2}.`,
             s:`${r.s}\nPuis ${fr(r.n,r.d)} × ${n2} = ${fr(r.n*n2,r.d)}${simp(r.n*n2,r.d)}.` }; } },
  ];
}
function banqueProduit(cfg) {
  const verbe = "Calcule et simplifie";
  return [
  { d:"F", g(){ const [a,b,c,e]=cfg.tir(); return { q:`Calcule : ${frP(a,b)} × ${frP(c,e)}.`, s:pasProduit(a,b,c,e).s }; } },
  { d:"F", g(){ const [a,b,c,e]=cfg.tir(); return { q:`${verbe} : ${frP(a,b)} × ${frP(c,e)}.`, s:pasProduit(a,b,c,e).s }; } },
  { d:"M", g(){ const [a,b,c,e]=cfg.tir(); const r=pasProduit(a,b,c,e);
    return { q:`${verbe} : ${frP(a,b)} × ${frP(c,e)}. Donne le signe du résultat avant de calculer.`,
             s:`Signe : ${(a<0)!==(c<0)?"les deux facteurs sont de signes contraires, le produit est négatif":"les deux facteurs sont de même signe, le produit est positif"}.\n${r.s}` }; } },
  { d:"M", g(){ const [a,b,c,e]=cfg.tir(); const r=pasProduit(a,b,c,e);
    return { q:`Complète : ${frP(a,b)} × … = ${fr(r.n,r.d)}.`, s:`Le facteur manquant est ${fr(c,e)}.\nVérification : ${r.s}` }; } },
  { d:"M", g(){ const [a,b,c,e]=cfg.tir(), k=ri(2,9); const r=pasProduit(a,b,c,e);
    return { q:`${verbe} : ${frP(a,b)} × ${frP(c,e)} × ${k}.`,
             s:`${r.s}\nPuis ${fr(r.n,r.d)} × ${k} = ${fr(r.n*k,r.d)}${simp(r.n*k,r.d)}.` }; } },
  { d:"D", g(){ const [a,b,c,e]=cfg.tir(), [f,h]=cfg.tir(); const r1=pasProduit(a,b,c,e), r2=pasProduit(r1.n,r1.d,f,h);
    return { q:`${verbe} : ${frP(a,b)} × ${frP(c,e)} × ${frP(f,h)}.`, s:`${r1.s}\nPuis :\n${r2.s}` }; } },
  { d:"D", g(){ const [a,b,c,e]=cfg.tir(); const r=pasProduit(a,b,c,e);
    return { q:`Complète : … × ${frP(c,e)} = ${fr(r.n,r.d)}.`, s:`Le facteur manquant est ${fr(a,b)}.\nVérification : ${r.s}` }; } },
  { d:"D", g(){ const [a,b,c,e]=cfg.tir(); const r=pasProduit(a,b,c,e); const el=pick(PRENOMS);
    return { q:`${el} affirme que ${frP(a,b)} × ${frP(c,e)} est ${Math.abs(r.n)/r.d>Math.abs(a)/b?"plus petit":"plus grand"} que ${frP(a,b)}. A-t-il raison ?`,
             s:`${r.s}\nOn compare ${fr(r.n,r.d)} et ${fr(a,b)} : ${Math.abs(r.n*b)>Math.abs(a*r.d)?`${fr(r.n,r.d)} est le plus grand en valeur absolue`:`${fr(a,b)} est le plus grand en valeur absolue`}. ${el} a donc tort.` }; } },
  { d:"D", g(){ const [a,b,c,e]=cfg.tir(); const r=pasProduit(a,b,c,e); const k=ri(12,60);
    const v=r.n*k/r.d;
    if(!Number.isInteger(v)) return null;
    return { q:`${verbe} : ${frP(a,b)} × ${frP(c,e)}, puis calcule cette fraction de ${k}.`,
             s:`${r.s}\nPuis ${fr(r.n,r.d)} de ${k} : ${k} ÷ ${r.d} × ${r.n} = ${v}.` }; } },
  { d:"D", g(){ const [a,b,c,e]=cfg.tir(); const r=pasProduit(a,b,c,e);
    return { q:`Écris ${frP(a,b)} × ${frP(c,e)} sous forme irréductible, puis donne son inverse.`,
             s:`${r.s}\nL'inverse de ${fr(r.n,r.d)} est ${fr(r.d,r.n)}${r.n<0?` (soit ${fr(-r.d,-r.n)})`:""}.` }; } },
  ];
}

/* ══════════ FAMILLES ══════════ */
const FAMILLES = {};

/* — sommes et différences — */
FAMILLES["Additionner avec le même dénominateur"] = banqueSomme({ sgn:1, simpl:false,
  tir(){ const d=ri(3,20); return [numCop(d,d-1),d,numCop(d,d-1),d]; } });
FAMILLES["Additionner avec des dénominateurs multiples"] = banqueSomme({ sgn:1, simpl:true,
  tir(){ const d=ri(2,9), k=ri(2,5), D2=d*k; return [numCop(d,d*2),d,numCop(D2,D2-1),D2]; } });
FAMILLES["Somme de dénominateurs quelconques"] = banqueSomme({ sgn:1, simpl:true,
  tir(){ for(let i=0;i<40;i++){ const b=ri(2,9),e=ri(2,11); if(pgcd(b,e)===1&&b!==e) return [numCop(b,b*2),b,numCop(e,e*2),e]; } return [2,3,3,5]; } });
FAMILLES["Somme avec un relatif"] = banqueSomme({ sgn:1, simpl:true,
  tir(){ const [a,b]=frac(9,2,12), [c,e]=frac(9,2,12); return [pick([-1,1])*a,b,pick([-1,1,1])*c,e]; } });
FAMILLES["Différence de fractions"] = banqueSomme({ sgn:-1, simpl:true,
  tir(){ const b=ri(2,9), k=pick([1,2,3,4]), e=pick([b*k, ri(2,11)]);
         const n1=numCop(b,b*2), n2=numCop(e,e*2);
         /* on place la plus grande en premier : une différence de fractions
            reste positive, ce qui convient aux niveaux facile et moyen */
         return n1*e >= n2*b ? [n1,b,n2,e] : [n2,e,n1,b]; } });

/* — opérations avec un entier — */
FAMILLES["Opérations entiers et fractions"] = [
{ d:"F", g(){ const k=ri(2,9), [n,d]=frac(9,2,12,true); const r=pasSomme(k,1,n,d,-1);
  return { q:`Calcule : ${k} − ${fr(n,d)}.`, s:`${k} = ${fr(k*d,d)}.\n${fr(k*d,d)} − ${fr(n,d)} = ${fr(k*d-n,d)}${simp(k*d-n,d)}.` }; } },
{ d:"F", g(){ const k=ri(2,9), [n,d]=frac(9,2,12,true);
  return { q:`Calcule : ${k} + ${fr(n,d)}.`, s:`${k} = ${fr(k*d,d)}.\n${fr(k*d,d)} + ${fr(n,d)} = ${fr(k*d+n,d)}${simp(k*d+n,d)}.` }; } },
{ d:"M", g(){ const k=ri(2,9), [n,d]=frac(11,2,12);
  return { q:`Calcule et simplifie : ${k} × ${fr(n,d)}.`,
           s:`${k} × ${fr(n,d)} = ${fr(k*n,d)}${simp(k*n,d)}.` }; } },
{ d:"M", g(){ const k=ri(2,9), [n,d]=frac(11,2,12);
  return { q:`Calcule et simplifie : ${fr(n,d)} ÷ ${k}.`,
           s:`Diviser par ${k} revient à multiplier par ${fr(1,k)} :\n${fr(n,d)} ÷ ${k} = ${fr(n,d*k)}${simp(n,d*k)}.` }; } },
{ d:"M", g(){ const k=ri(2,9), [n,d]=frac(9,2,12,true);
  return { q:`Complète : ${k} − … = ${fr(k*d-n,d)}.`,
           s:`Le terme manquant est ${fr(n,d)}.\nVérification : ${fr(k*d,d)} − ${fr(n,d)} = ${fr(k*d-n,d)}.` }; } },
{ d:"D", g(){ const k=ri(2,9), [n,d]=frac(9,2,12,true), [n2,d2]=frac(9,2,12,true);
  const r1=k*d-n, r2=pasSomme(r1,d,n2,d2,-1);
  return { q:`Calcule : ${k} − ${fr(n,d)} − ${fr(n2,d2)}.`,
           s:`${k} − ${fr(n,d)} : ${fr(k*d,d)} − ${fr(n,d)} = ${fr(r1,d)}${simp(r1,d)}.\nPuis ${fr(...red(r1,d))} − ${fr(n2,d2)} :\n${pasSomme(...red(r1,d),n2,d2,-1).s}` }; } },
{ d:"D", g(){ const k=ri(2,6), [n,d]=frac(11,2,9);
  return { q:`Calcule : ${k} × ${fr(n,d)} − ${fr(n,d)}.`,
           s:`${k} × ${fr(n,d)} = ${fr(k*n,d)}.\n${fr(k*n,d)} − ${fr(n,d)} = ${fr(k*n-n,d)}${simp(k*n-n,d)}.\nOn pouvait aussi factoriser : (${k} − 1) × ${fr(n,d)} = ${k-1} × ${fr(n,d)}.` }; } },
{ d:"D", g(){ const k=ri(2,9), [n,d]=frac(11,3,12);
  return { q:`Calcule : ${k} ÷ ${fr(n,d)}.`,
           s:`Diviser par ${fr(n,d)} revient à multiplier par son inverse ${fr(d,n)} :\n${k} × ${fr(d,n)} = ${fr(k*d,n)}${simp(k*d,n)}.` }; } },
{ d:"D", g(){ const k=ri(2,5), [n,d]=frac(9,2,10,true), [n2,d2]=frac(9,2,10,true);
  const r=pasSomme(n,d,n2,d2,1);
  return { q:`Calcule : ${k} − (${fr(n,d)} + ${fr(n2,d2)}).`,
           s:`On commence par la parenthèse.\n${r.s}\nPuis ${k} − ${fr(r.n,r.d)} : ${fr(k*r.d,r.d)} − ${fr(r.n,r.d)} = ${fr(k*r.d-r.n,r.d)}${simp(k*r.d-r.n,r.d)}.` }; } },
{ d:"D", g(){ const k=ri(2,9), [n,d]=frac(9,2,12,true); const el=pick(PRENOMS);
  return { q:`${el} écrit : ${k} − ${fr(n,d)} = ${fr(k-n,d)}. Explique son erreur et donne le bon résultat.`,
           s:`${el} a soustrait ${n} de ${k} sans convertir l'entier en fraction.\n${k} = ${fr(k*d,d)}, donc ${k} − ${fr(n,d)} = ${fr(k*d-n,d)}${simp(k*d-n,d)}.` }; } },
];

/* — produits et quotients — */
FAMILLES["Produit de fractions"] = banqueProduit({ tir(){ const [a,b]=frac(9,2,11), [c,e]=frac(9,2,11); return [a,b,c,e]; } });
FAMILLES["Produit avec un signe"] = banqueProduit({ tir(){ const [a,b]=frac(9,2,11), [c,e]=frac(9,2,11);
  const s1=pick([-1,-1,1]), s2=pick([-1,1,1]); return [s1*a,b,s2*c,e]; } });
FAMILLES["Quotient de fractions"] = [
{ d:"F", g(){ const [a,b]=frac(9,2,9),[c,e]=frac(9,2,9); return { q:`Calcule : ${frP(a,b)} ÷ ${frP(c,e)}.`, s:pasQuotient(a,b,c,e).s }; } },
{ d:"F", g(){ const [a,b]=frac(9,2,9),[c,e]=frac(9,2,9); return { q:`Calcule et simplifie : ${frP(a,b)} ÷ ${frP(c,e)}.`, s:pasQuotient(a,b,c,e).s }; } },
{ d:"M", g(){ const [a,b]=frac(9,2,9),k=ri(2,9); return { q:`Calcule et simplifie : ${fr(a,b)} ÷ ${k}.`,
  s:`Diviser par ${k} revient à multiplier par ${fr(1,k)} :\n${fr(a,b)} ÷ ${k} = ${fr(a,b*k)}${simp(a,b*k)}.` }; } },
{ d:"M", g(){ const [c,e]=frac(9,2,9),k=ri(2,9); return { q:`Calcule et simplifie : ${k} ÷ ${fr(c,e)}.`,
  s:`L'inverse de ${fr(c,e)} est ${fr(e,c)}.\n${k} × ${fr(e,c)} = ${fr(k*e,c)}${simp(k*e,c)}.` }; } },
{ d:"M", g(){ const [a,b]=frac(9,2,9),[c,e]=frac(9,2,9); const r=pasQuotient(a,b,c,e);
  return { q:`Calcule ${frP(a,b)} ÷ ${frP(c,e)}, puis dis si le résultat est plus grand ou plus petit que ${fr(a,b)}.`,
    s:`${r.s}\nDiviser par ${fr(c,e)} ${c<e?"(inférieur à 1) donne un résultat PLUS GRAND":"(supérieur à 1) donne un résultat PLUS PETIT"} que ${fr(a,b)}.` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,9),[c,e]=frac(9,2,9); const r=pasQuotient(a,b,c,e);
  return { q:`Complète : ${frP(a,b)} ÷ … = ${fr(r.n,r.d)}.`, s:`Le diviseur manquant est ${fr(c,e)}.\nVérification : ${r.s}` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,9),[c,e]=frac(9,2,9),[f,h]=frac(9,2,9);
  const r1=pasQuotient(a,b,c,e), r2=pasProduit(r1.n,r1.d,f,h);
  return { q:`Calcule : ${frP(a,b)} ÷ ${frP(c,e)} × ${frP(f,h)}.`,
    s:`On calcule de gauche à droite.\n${r1.s}\nPuis :\n${r2.s}` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,9),[c,e]=frac(9,2,9);
  const r1=pasQuotient(a,b,c,e), r2=pasQuotient(c,e,a,b);
  return { q:`Calcule ${frP(a,b)} ÷ ${frP(c,e)} et ${frP(c,e)} ÷ ${frP(a,b)}. Quel lien unit les deux résultats ?`,
    s:`${r1.s}\n${r2.s}\nLes deux résultats sont inverses l'un de l'autre : ${fr(r1.n,r1.d)} × ${fr(r2.n,r2.d)} = 1.` }; } },
{ d:"D", g(){ const [c,e]=frac(9,2,9); const el=pick(PRENOMS);
  return { q:`${el} calcule ${fr(1,1)} ÷ ${fr(c,e)} et trouve ${fr(c,e)}. Explique son erreur.`,
    s:`Diviser 1 par ${fr(c,e)}, c'est multiplier 1 par l'inverse de ${fr(c,e)} : 1 ÷ ${fr(c,e)} = ${fr(e,c)}${simp(e,c)}. ${el} a recopié la fraction au lieu de l'inverser.` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,9),[c,e]=frac(9,2,9); const r=pasQuotient(a,b,c,e);
  const un=r.n-r.d;
  return { q:`Calcule ${frP(a,b)} ÷ ${frP(c,e)}, puis compare le résultat à 1.`,
    s:`${r.s}\n${fr(r.n,r.d)} est ${un>0?"supérieur":un<0?"inférieur":"égal"} à 1.` }; } },
];

/* — comparaison (aucune indication de dénominateur dans l'énoncé) — */
FAMILLES["Comparer"] = [
{ d:"F", g(){ const d=ri(3,15), a=ri(1,d-1); let b=ri(1,d-1); if(b===a) b=(a%(d-1))+1;
  return { q:`Compare ${fr(a,d)} et ${fr(b,d)}.`,
           s:`Les dénominateurs sont égaux : la plus grande fraction est celle qui a le plus grand numérateur.\n${a>b?`${fr(a,d)} > ${fr(b,d)}`:`${fr(a,d)} < ${fr(b,d)}`}.` }; } },
{ d:"F", g(){ const n=ri(2,9); let d1=ri(3,15), d2=ri(3,15); if(d1===d2) d2=d1+ri(1,4);
  return { q:`Compare ${fr(n,d1)} et ${fr(n,d2)}.`,
           s:`Les numérateurs sont égaux : plus le dénominateur est grand, plus les parts sont petites.\n${d1<d2?`${fr(n,d1)} > ${fr(n,d2)}`:`${fr(n,d1)} < ${fr(n,d2)}`}.` }; } },
{ d:"M", g(){ const b=ri(2,7), k=ri(2,5), e=b*k, a=numCop(b,b*2), c=numCop(e,e*2);
  if(a*e===c*b) return null;
  return { q:`Compare ${fr(a,b)} et ${fr(c,e)}.`,
           s:`${e} est un multiple de ${b} : ${fr(a,b)} = ${fr(a*k,e)}.\nOn compare ${fr(a*k,e)} et ${fr(c,e)} : ${a*k>c?`${fr(a,b)} > ${fr(c,e)}`:`${fr(a,b)} < ${fr(c,e)}`}.` }; } },
{ d:"M", g(){ const [a,b]=frac(9,2,12); const c=pick([1,1,2]);
  if(a===b*c) return null;
  return { q:`La fraction ${fr(a,b)} est-elle inférieure, égale ou supérieure à ${c} ?`,
           s:`On compare le numérateur ${a} et ${c===1?`le dénominateur ${b}`:`${c} × ${b} = ${c*b}`}.\n${a>c*b?`${a} > ${c*b} donc ${fr(a,b)} > ${c}`:`${a} < ${c*b} donc ${fr(a,b)} < ${c}`}.` }; } },
{ d:"M", g(){ let b=ri(2,9), e=ri(2,11); if(pgcd(b,e)!==1||b===e) return null;
  const a=numCop(b,b*2), c=numCop(e,e*2); if(a*e===c*b) return null;
  return { q:`Compare ${fr(a,b)} et ${fr(c,e)}.`,
           s:`On multiplie en croix : ${a} × ${e} = ${a*e} et ${c} × ${b} = ${c*b}.\n${a*e>c*b?`${a*e} > ${c*b} donc ${fr(a,b)} > ${fr(c,e)}`:`${a*e} < ${c*b} donc ${fr(a,b)} < ${fr(c,e)}`}.` }; } },
{ d:"D", g(){ const t=[frac(9,2,9),frac(9,2,9),frac(9,2,9)];
  const v=t.map(([n,d])=>({t:fr(n,d),v:n/d,n,d}));
  if(new Set(v.map(x=>x.n/x.d)).size<3) return null;
  const tri=[...v].sort((x,y)=>x.v-y.v);
  const m=t.reduce((s,[,d])=>ppcm(s,d),1);
  return { q:`Range dans l'ordre croissant : ${v.map(x=>x.t).join(" ; ")}.`,
           s:`Dénominateur commun ${m} : ${v.map(x=>`${x.t} = ${fr(x.n*(m/x.d),m)}`).join(" · ")}.\nDonc ${tri.map(x=>x.t).join(" < ")}.` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,11); const s1=pick([-1,1]), [c,e]=frac(9,2,11), s2=pick([-1,1]);
  if(s1===s2 && a*e===c*b) return null;
  const v1=s1*a/b, v2=s2*c/e; if(v1===v2) return null;
  return { q:`Compare ${fr(s1*a,b)} et ${fr(s2*c,e)}.`,
           s:`${s1!==s2?`Un nombre négatif est toujours inférieur à un nombre positif.`:`Les deux fractions sont de même signe : on multiplie en croix (${a} × ${e} = ${a*e} et ${c} × ${b} = ${c*b})${s1<0?`, puis on inverse la conclusion car elles sont négatives`:``}.`}\n${v1>v2?`${fr(s1*a,b)} > ${fr(s2*c,e)}`:`${fr(s1*a,b)} < ${fr(s2*c,e)}`}.` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,9); const dec=ri(1,9)/10;
  const v=a/b; if(v===dec) return null;
  const decTxt=String(dec).replace(".",",");
  return { q:`Compare ${fr(a,b)} et ${decTxt}.`,
           s:`${decTxt} = ${fr(dec*10,10)}${simp(dec*10,10)}.\nOn multiplie en croix : ${a} × 10 = ${a*10} et ${dec*10} × ${b} = ${dec*10*b}.\n${v>dec?`${fr(a,b)} > ${decTxt}`:`${fr(a,b)} < ${decTxt}`}.` }; } },
{ d:"D", g(){ const b=ri(3,9), a=b-1, e=ri(3,9)+b, c=e-1;
  if(b===e) return null;
  return { q:`Compare ${fr(a,b)} et ${fr(c,e)}.`,
           s:`Chaque fraction vaut 1 moins une part : ${fr(a,b)} = 1 − ${fr(1,b)} et ${fr(c,e)} = 1 − ${fr(1,e)}.\nComme ${fr(1,b)} ${b<e?">":"<"} ${fr(1,e)}, on retire davantage à ${b<e?fr(a,b):fr(c,e)} : ${a*e>c*b?`${fr(a,b)} > ${fr(c,e)}`:`${fr(a,b)} < ${fr(c,e)}`}.` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,9),[c,e]=frac(9,2,9);
  if(a*e===c*b || a<=c) return null;   // l'argument « a > c » doit au moins être vrai
  const el=pick(PRENOMS);
  return { q:`${el} affirme que ${fr(a,b)} > ${fr(c,e)} parce que ${a} > ${c}. A-t-il raison ?`,
           s:`Le raisonnement est faux : on ne peut pas comparer deux fractions sur leurs seuls numérateurs quand les dénominateurs diffèrent.\nEn multipliant en croix : ${a} × ${e} = ${a*e} et ${c} × ${b} = ${c*b}, donc ${a*e>c*b?`${fr(a,b)} > ${fr(c,e)} : la conclusion était juste, mais pas la justification`:`${fr(a,b)} < ${fr(c,e)} : ${el} a tort`}.` }; } },
];

/* — simplification, fractions égales — */
FAMILLES["Simplifier des fractions"] = [
{ d:"F", g(){ const [n,d]=frac(9,2,9), k=ri(2,6);
  return { q:`Simplifie : ${fr(n*k,d*k)}.`, s:`${n*k} et ${d*k} sont tous deux divisibles par ${k} : ${fr(n*k,d*k)} = ${fr(n,d)}.` }; } },
{ d:"F", g(){ const [n,d]=frac(9,2,9), k=ri(2,5), [n2,d2]=frac(9,2,9), k2=ri(2,5);
  return { q:`Simplifie : a) ${fr(n*k,d*k)} b) ${fr(n2*k2,d2*k2)}`,
           s:`a) ${fr(n*k,d*k)} = ${fr(n,d)} (on divise par ${k}).\nb) ${fr(n2*k2,d2*k2)} = ${fr(n2,d2)} (on divise par ${k2}).` }; } },
{ d:"M", g(){ const [n,d]=frac(9,2,9), k=ri(6,15);
  return { q:`Rends irréductible la fraction ${fr(n*k,d*k)}.`,
           s:`Le PGCD de ${n*k} et ${d*k} est ${pgcd(n*k,d*k)}.\n${fr(n*k,d*k)} = ${fr(n,d)}, qui est irréductible.` }; } },
{ d:"M", g(){ const [n,d]=frac(9,2,9), k=ri(2,4);
  return { q:`Simplifie ${fr(n*k*2,d*k*2)} en plusieurs étapes.`,
           s:`On divise d'abord par 2 : ${fr(n*k*2,d*k*2)} = ${fr(n*k,d*k)}.\nPuis par ${k} : ${fr(n*k,d*k)} = ${fr(n,d)}.\nOn aurait pu diviser directement par ${2*k}.` }; } },
{ d:"M", g(){ const [n,d]=frac(9,2,9), k=ri(2,6);
  return { q:`La fraction ${fr(n*k,d*k)} est-elle irréductible ? Justifie.`,
           s:`Non : ${n*k} et ${d*k} ont pour PGCD ${pgcd(n*k,d*k)}, différent de 1.\nForme irréductible : ${fr(n,d)}.` }; } },
{ d:"D", g(){ const [n,d]=frac(11,3,13), k=ri(7,18);
  return { q:`Rends irréductible : ${fr(n*k,d*k)}.`,
           s:`PGCD(${n*k} ; ${d*k}) = ${pgcd(n*k,d*k)}.\n${fr(n*k,d*k)} = ${fr(n,d)}.` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,9), k1=ri(2,6), k2=ri(2,6);
  return { q:`Ces deux fractions sont-elles égales : ${fr(n*k1,d*k1)} et ${fr(n*k2,d*k2)} ?`,
           s:`${fr(n*k1,d*k1)} = ${fr(n,d)} et ${fr(n*k2,d*k2)} = ${fr(n,d)}.\nElles ont la même forme irréductible : elles sont donc ÉGALES.` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,9), k=ri(2,6), [n2,d2]=frac(9,2,9), k2=ri(2,6);
  if(n*d2===n2*d) return null;
  return { q:`Ces deux fractions sont-elles égales : ${fr(n*k,d*k)} et ${fr(n2*k2,d2*k2)} ?`,
           s:`${fr(n*k,d*k)} = ${fr(n,d)} et ${fr(n2*k2,d2*k2)} = ${fr(n2,d2)}.\nLes formes irréductibles diffèrent : les fractions ne sont PAS égales.` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,9), k=ri(3,9);
  return { q:`Trouve tous les diviseurs communs de ${n*k} et ${d*k}, puis simplifie ${fr(n*k,d*k)}.`,
           s:`PGCD(${n*k} ; ${d*k}) = ${k}. Les diviseurs communs sont les diviseurs de ${k} : ${[...Array(k)].map((_,i)=>i+1).filter(x=>k%x===0).join(" ; ")}.\nEn divisant par ${k} : ${fr(n*k,d*k)} = ${fr(n,d)}.` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,9), k=ri(2,6); const el=pick(PRENOMS);
  return { q:`${el} simplifie ${fr(n*k,d*k)} en ${fr(n*k-k,d*k-k)} « en retirant ${k} en haut et en bas ». Explique l'erreur.`,
           s:`On ne simplifie pas en SOUSTRAYANT, mais en DIVISANT numérateur et dénominateur par un même nombre.\n${fr(n*k,d*k)} = ${fr(n,d)} (division par ${k}).` }; } },
];
FAMILLES["Fractions égales"] = [
{ d:"F", g(){ const [n,d]=frac(9,2,9), k=ri(2,6);
  return { q:`Complète : ${fr(n,d)} = …/${d*k}.`, s:`On multiplie le dénominateur par ${k}, donc aussi le numérateur : ${fr(n,d)} = ${fr(n*k,d*k)}.` }; } },
{ d:"F", g(){ const [n,d]=frac(9,2,9), k=ri(2,6);
  return { q:`Complète : ${fr(n,d)} = ${n*k}/… .`, s:`Le numérateur a été multiplié par ${k}, donc le dénominateur aussi : ${fr(n,d)} = ${fr(n*k,d*k)}.` }; } },
{ d:"M", g(){ const [n,d]=frac(9,2,9), k=ri(2,6);
  return { q:`Complète : ${fr(n*k,d*k)} = …/${d}.`, s:`On divise haut et bas par ${k} : ${fr(n*k,d*k)} = ${fr(n,d)}.` }; } },
{ d:"M", g(){ const [n,d]=frac(9,2,9), k1=ri(2,5), k2=ri(2,5);
  return { q:`Complète : ${fr(n,d)} = ${n*k1}/… = …/${d*k2}.`,
           s:`${fr(n,d)} = ${fr(n*k1,d*k1)} = ${fr(n*k2,d*k2)}.` }; } },
{ d:"M", g(){ const [n,d]=frac(9,2,9), k=ri(2,6);
  return { q:`Ces fractions sont-elles égales : ${fr(n,d)} et ${fr(n*k,d*k)} ?`,
           s:`Oui : on passe de l'une à l'autre en multipliant haut et bas par ${k}.` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,9), m=ppcm(d,ri(2,9));
  const k=m/d;
  return { q:`Écris ${fr(n,d)} avec le dénominateur ${m}.`,
           s:`${m} ÷ ${d} = ${k}, donc on multiplie haut et bas par ${k} : ${fr(n,d)} = ${fr(n*k,m)}.` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,9),[n2,d2]=frac(9,2,9); if(d===d2) return null;
  const m=ppcm(d,d2);
  return { q:`Écris ${fr(n,d)} et ${fr(n2,d2)} avec le même dénominateur.`,
           s:`Le plus petit dénominateur commun est ${m}.\n${fr(n,d)} = ${fr(n*(m/d),m)} et ${fr(n2,d2)} = ${fr(n2*(m/d2),m)}.` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,9), k=ri(2,6);
  return { q:`Trouve trois fractions égales à ${fr(n,d)}.`,
           s:`On multiplie haut et bas par le même nombre : ${fr(n*2,d*2)} ; ${fr(n*3,d*3)} ; ${fr(n*k+ (k===2||k===3?n*3:0), d*k + (k===2||k===3?d*3:0))}.\nToutes se simplifient en ${fr(n,d)}.` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,9), k=ri(2,6), manque=n*k;
  return { q:`Complète : ${fr(n,d)} = ${manque}/… , puis vérifie en simplifiant.`,
           s:`${manque} = ${n} × ${k}, donc le dénominateur est ${d} × ${k} = ${d*k}.\nVérification : ${fr(manque,d*k)} = ${fr(n,d)}.` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,9), k=ri(2,6); const el=pick(PRENOMS);
  return { q:`${el} écrit ${fr(n,d)} = ${fr(n+k,d+k)}. A-t-il raison ? Justifie.`,
           s:`Non. Pour obtenir une fraction égale, il faut MULTIPLIER (ou diviser) haut et bas par un même nombre, pas ajouter.\n${fr(n+k,d+k)} se simplifie en ${fr(...red(n+k,d+k))}, différent de ${fr(n,d)}.` }; } },
];

/* — écriture décimale, encadrement, inverse — */
FAMILLES["Écriture décimale d'une fraction"] = [
{ d:"F", g(){ const d=pick([2,4,5,10]), n=ri(1,3*d);
  return { q:`Donne l'écriture décimale de ${fr(n,d)}.`, s:`${fr(n,d)} = ${n} ÷ ${d} = ${String(n/d).replace(".",",")}.` }; } },
{ d:"F", g(){ const d1=pick([2,5,10]), n1=ri(1,2*d1), d2=pick([4,20,25]), n2=ri(1,2*d2);
  return { q:`Donne l'écriture décimale : a) ${fr(n1,d1)} b) ${fr(n2,d2)}`,
           s:`a) ${n1} ÷ ${d1} = ${String(n1/d1).replace(".",",")}\nb) ${n2} ÷ ${d2} = ${String(n2/d2).replace(".",",")}` }; } },
{ d:"M", g(){ const d=pick([8,16,40,50]), n=ri(1,2*d);
  return { q:`Donne l'écriture décimale de ${fr(n,d)}.`, s:`${n} ÷ ${d} = ${String(n/d).replace(".",",")}.` }; } },
{ d:"M", g(){ const dec=ri(11,99)/100;
  return { q:`Écris ${String(dec).replace(".",",")} sous forme de fraction irréductible.`,
           s:`${String(dec).replace(".",",")} = ${fr(dec*100,100)} = ${fr(...red(dec*100,100))}.` }; } },
{ d:"M", g(){ const d=pick([3,6,7,9]), n=ri(1,2*d); if(n%d===0) return null;
  return { q:`La fraction ${fr(n,d)} a-t-elle une écriture décimale exacte ?`,
           s:`Non : ${n} ÷ ${d} ≈ ${(n/d).toFixed(4).replace(".",",")}… la division ne s'arrête pas. ${fr(n,d)} n'est pas un nombre décimal.` }; } },
{ d:"D", g(){ const d=pick([3,7,9,11]), n=ri(1,2*d); if(n%d===0) return null;
  return { q:`Donne une valeur approchée de ${fr(n,d)} au centième, par défaut puis par excès.`,
           s:`${n} ÷ ${d} ≈ ${(n/d).toFixed(5).replace(".",",")}…\nPar défaut : ${(Math.floor(n/d*100)/100).toFixed(2).replace(".",",")}. Par excès : ${((Math.floor(n/d*100)+1)/100).toFixed(2).replace(".",",")}.` }; } },
{ d:"D", g(){ const d=pick([2,4,5,8,10]), n=ri(1,3*d), d2=pick([3,6,7]), n2=ri(1,2*d2);
  if(n2%d2===0) return null;
  return { q:`Parmi ${fr(n,d)} et ${fr(n2,d2)}, laquelle est un nombre décimal ? Justifie.`,
           s:`${fr(n,d)} = ${String(n/d).replace(".",",")} : c'est un nombre décimal.\n${fr(n2,d2)} ≈ ${(n2/d2).toFixed(4).replace(".",",")}… : la division ne s'arrête pas, ce n'est pas un décimal.` }; } },
{ d:"D", g(){ const d=pick([4,5,8,20,25]), n=ri(1,3*d), k=ri(2,9);
  return { q:`Donne l'écriture décimale de ${fr(n,d)}, puis celle de ${fr(n,d*k)} si elle existe.`,
           s:`${fr(n,d)} = ${String(n/d).replace(".",",")}.\n${fr(n,d*k)} = ${fr(n,d)} ÷ ${k} = ${Number.isInteger(n/(d*k)*1000000)?String(n/(d*k)).replace(".",","):`${(n/(d*k)).toFixed(5).replace(".",",")}…`}${[2,4,5,8,10,16,20,25].includes(k)||k===1?"":" (division qui peut ne pas s'arrêter selon k)"}.` }; } },
{ d:"D", g(){ const dec=ri(101,999)/1000;
  return { q:`Écris ${String(dec).replace(".",",")} sous forme de fraction irréductible, puis donne son dénominateur.`,
           s:`${String(dec).replace(".",",")} = ${fr(Math.round(dec*1000),1000)} = ${fr(...red(Math.round(dec*1000),1000))}.\nDénominateur : ${red(Math.round(dec*1000),1000)[1]}.` }; } },
{ d:"D", g(){ const d=pick([2,4,5,8]), n=ri(1,2*d), d2=pick([2,4,5,10]), n2=ri(1,2*d2);
  const v=n/d+n2/d2;
  return { q:`Calcule ${fr(n,d)} + ${fr(n2,d2)} en passant par les écritures décimales, puis vérifie avec les fractions.`,
           s:`${fr(n,d)} = ${String(n/d).replace(".",",")} et ${fr(n2,d2)} = ${String(n2/d2).replace(".",",")}.\nSomme : ${String(Number(v.toFixed(6))).replace(".",",")}.\nAvec les fractions : ${pasSomme(n,d,n2,d2,1).s}` }; } },
];
FAMILLES["Encadrer une fraction"] = [
{ d:"F", g(){ const d=ri(2,9), q0=ri(1,9), n=q0*d+ri(1,d-1);
  return { q:`Encadre ${fr(n,d)} entre deux entiers consécutifs.`,
           s:`${n} = ${d} × ${q0} + ${n-q0*d}, donc ${q0} < ${fr(n,d)} < ${q0+1}.` }; } },
{ d:"F", g(){ const d=ri(2,9), q0=ri(1,9), n=q0*d+ri(1,d-1);
  return { q:`Entre quels entiers consécutifs se situe ${fr(n,d)} ?`,
           s:`${d} × ${q0} = ${q0*d} et ${d} × ${q0+1} = ${(q0+1)*d}. Comme ${q0*d} < ${n} < ${(q0+1)*d} : ${q0} < ${fr(n,d)} < ${q0+1}.` }; } },
{ d:"M", g(){ const d=ri(3,12), q0=ri(2,12), n=q0*d+ri(1,d-1);
  return { q:`Encadre ${fr(n,d)} entre deux entiers consécutifs, puis dis de quel entier elle est la plus proche.`,
           s:`${q0} < ${fr(n,d)} < ${q0+1}.\nLe reste est ${n-q0*d} sur ${d} : ${(n-q0*d)*2>d?`elle est plus proche de ${q0+1}`:(n-q0*d)*2<d?`elle est plus proche de ${q0}`:`elle est à égale distance des deux`}.` }; } },
{ d:"M", g(){ const d=ri(3,10), q0=ri(1,9), n=q0*d+ri(1,d-1);
  return { q:`Encadre ${fr(n,d)} au dixième.`,
           s:`${fr(n,d)} = ${(n/d).toFixed(4).replace(".",",")}…\nDonc ${(Math.floor(n/d*10)/10).toFixed(1).replace(".",",")} < ${fr(n,d)} < ${((Math.floor(n/d*10)+1)/10).toFixed(1).replace(".",",")}.` }; } },
{ d:"M", g(){ const d=ri(2,9), n=ri(1,d-1);
  return { q:`Encadre ${fr(n,d)} entre deux entiers consécutifs.`,
           s:`${fr(n,d)} est inférieure à 1 car ${n} < ${d}, et supérieure à 0 : 0 < ${fr(n,d)} < 1.` }; } },
{ d:"D", g(){ const d=ri(3,12), q0=ri(2,15), n=q0*d+ri(1,d-1);
  return { q:`Encadre ${fr(n,d)} entre deux entiers consécutifs, puis écris-la sous la forme d'un entier plus une fraction inférieure à 1.`,
           s:`${n} = ${d} × ${q0} + ${n-q0*d}, donc ${q0} < ${fr(n,d)} < ${q0+1}.\n${fr(n,d)} = ${q0} + ${fr(n-q0*d,d)}.` }; } },
{ d:"D", g(){ const d=ri(3,10), q0=ri(1,9), n=q0*d+ri(1,d-1);
  return { q:`Encadre ${fr(n,d)} au centième.`,
           s:`${fr(n,d)} = ${(n/d).toFixed(5).replace(".",",")}…\nDonc ${(Math.floor(n/d*100)/100).toFixed(2).replace(".",",")} < ${fr(n,d)} < ${((Math.floor(n/d*100)+1)/100).toFixed(2).replace(".",",")}.` }; } },
{ d:"D", g(){ const d=ri(3,9), q0=ri(1,8), n=q0*d+ri(1,d-1), d2=ri(3,9), q2=q0, n2=q2*d2+ri(1,d2-1);
  if(n*d2===n2*d) return null;
  return { q:`Encadre ${fr(n,d)} et ${fr(n2,d2)} entre deux entiers consécutifs, puis compare-les.`,
           s:`Les deux sont comprises entre ${q0} et ${q0+1} : l'encadrement ne suffit pas à les départager.\nEn multipliant en croix : ${n} × ${d2} = ${n*d2} et ${n2} × ${d} = ${n2*d}, donc ${n*d2>n2*d?`${fr(n,d)} > ${fr(n2,d2)}`:`${fr(n,d)} < ${fr(n2,d2)}`}.` }; } },
{ d:"D", g(){ const d=ri(3,9), q0=ri(1,9), n=q0*d+ri(1,d-1);
  return { q:`Encadre ${fr(n,d)} entre deux entiers, puis encadre son double.`,
           s:`${q0} < ${fr(n,d)} < ${q0+1}.\nEn doublant les bornes : ${2*q0} < ${fr(2*n,d)}${simp(2*n,d)} < ${2*(q0+1)}.` }; } },
{ d:"D", g(){ const d=ri(3,9), q0=ri(1,9), n=q0*d+ri(1,d-1); const el=pick(PRENOMS);
  return { q:`${el} affirme que ${fr(n,d)} est comprise entre ${q0+1} et ${q0+2}. A-t-il raison ?`,
           s:`Non. ${d} × ${q0} = ${q0*d} et ${d} × ${q0+1} = ${(q0+1)*d} ; comme ${q0*d} < ${n} < ${(q0+1)*d}, le bon encadrement est ${q0} < ${fr(n,d)} < ${q0+1}.` }; } },
];
FAMILLES["L'inverse d'un nombre"] = [
{ d:"F", g(){ const k=ri(2,12); return { q:`Donne l'inverse de ${k}.`, s:`L'inverse de ${k} est ${fr(1,k)}, car ${k} × ${fr(1,k)} = 1.` }; } },
{ d:"F", g(){ const [n,d]=frac(9,2,11); return { q:`Donne l'inverse de ${fr(n,d)}.`, s:`On échange numérateur et dénominateur : l'inverse de ${fr(n,d)} est ${fr(d,n)}.` }; } },
{ d:"M", g(){ const k=ri(2,9), [n,d]=frac(9,2,11);
  return { q:`Donne l'inverse de : a) ${k} b) ${fr(-n,d)}`,
           s:`a) ${fr(1,k)}\nb) ${fr(-d,n)} : l'inverse d'un nombre négatif est négatif.` }; } },
{ d:"M", g(){ const [n,d]=frac(9,2,11);
  return { q:`Vérifie que ${fr(d,n)} est bien l'inverse de ${fr(n,d)}.`,
           s:`${fr(n,d)} × ${fr(d,n)} = ${fr(n*d,d*n)} = 1. C'est donc bien l'inverse.` }; } },
{ d:"M", g(){ const k=ri(2,9);
  return { q:`Quel nombre faut-il multiplier par ${fr(1,k)} pour obtenir 1 ?`,
           s:`Il faut son inverse, c'est-à-dire ${k}, car ${fr(1,k)} × ${k} = 1.` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,11);
  return { q:`Donne l'inverse de ${fr(n,d)}, puis l'inverse de cet inverse.`,
           s:`L'inverse de ${fr(n,d)} est ${fr(d,n)}. L'inverse de ${fr(d,n)} est ${fr(n,d)} : on retrouve le nombre de départ.` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,11);
  return { q:`L'inverse de ${fr(n,d)} est-il plus grand ou plus petit que ${fr(n,d)} ? Justifie.`,
           s:`L'inverse est ${fr(d,n)}. ${n<d?`Comme ${fr(n,d)} < 1, son inverse est > 1 : l'inverse est PLUS GRAND.`:`Comme ${fr(n,d)} > 1, son inverse est < 1 : l'inverse est PLUS PETIT.`}` }; } },
{ d:"D", g(){ const [n,d]=frac(9,2,11), k=ri(2,9);
  return { q:`Calcule l'inverse de ${fr(n,d)} × ${k}.`,
           s:`${fr(n,d)} × ${k} = ${fr(n*k,d)}${simp(n*k,d)}.\nSon inverse est ${fr(...red(d,n*k))}.` }; } },
{ d:"D", g(){ const el=pick(PRENOMS), [n,d]=frac(9,2,11);
  return { q:`${el} affirme que l'inverse de ${fr(n,d)} est ${fr(-n,d)}. Explique la confusion.`,
           s:`${fr(-n,d)} est l'OPPOSÉ de ${fr(n,d)} : leur somme vaut 0.\nL'INVERSE est ${fr(d,n)} : leur produit vaut 1.` }; } },
{ d:"D", g(){ return { q:`Existe-t-il un nombre qui n'a pas d'inverse ? Justifie.`,
           s:`Oui : 0. Aucun nombre multiplié par 0 ne donne 1, puisque 0 × n = 0 quel que soit n. Tous les autres nombres ont un inverse.` }; } },
];

/* — fraction d'une quantité / d'une fraction / d'une figure — */
FAMILLES["Fraction d'une quantité"] = [
{ d:"F", g(){ const d=ri(2,9), n=ri(1,d-1), q0=d*ri(2,15);
  return { q:`Calcule les ${fr(n,d)} de ${q0}.`, s:`${q0} ÷ ${d} = ${q0/d}, puis ${q0/d} × ${n} = ${q0/d*n}.` }; } },
{ d:"F", g(){ const d=pick([2,3,4,5]), q0=d*ri(3,20);
  return { q:`Calcule ${d===2?"la moitié":d===3?"le tiers":d===4?"le quart":"le cinquième"} de ${q0}.`,
           s:`${q0} ÷ ${d} = ${q0/d}.` }; } },
{ d:"M", g(){ const d=ri(2,9), n=ri(1,d-1), q0=d*ri(3,20);
  return { q:`Un article coûte ${q0} €. Calcule les ${fr(n,d)} de ce prix.`,
           s:`${q0} ÷ ${d} = ${q0/d} €, puis × ${n} : ${q0/d*n} €.` }; } },
{ d:"M", g(){ const d=ri(2,9), n=ri(1,d-1), q0=d*ri(3,20);
  return { q:`Calcule les ${fr(n,d)} de ${q0}, puis la part restante.`,
           s:`Les ${fr(n,d)} : ${q0} ÷ ${d} × ${n} = ${q0/d*n}.\nIl reste ${q0} − ${q0/d*n} = ${q0-q0/d*n}, soit les ${fr(d-n,d)}${simp(d-n,d)} du total.` }; } },
{ d:"M", g(){ const d=ri(2,9), n=ri(1,d-1), q0=d*ri(3,20);
  return { q:`Les ${fr(n,d)} d'un nombre valent ${q0/d*n}. Quel est ce nombre ?`,
           s:`Une part vaut ${q0/d*n} ÷ ${n} = ${q0/d}. Le nombre entier vaut ${q0/d} × ${d} = ${q0}.` }; } },
{ d:"D", g(){ const d=ri(2,9), n=ri(1,d-1), q0=d*ri(4,25), d2=ri(2,7);
  if((q0/d*n)%d2!==0) return null;
  const NOM={2:"la moitié",3:"le tiers",4:"le quart",5:"le cinquième",6:"le sixième",7:"le septième"};
  return { q:`Calcule les ${fr(n,d)} de ${q0}, puis ${NOM[d2]} du résultat.`,
           s:`${q0} ÷ ${d} × ${n} = ${q0/d*n}.\nPuis ${q0/d*n} ÷ ${d2} = ${q0/d*n/d2}.` }; } },
{ d:"D", g(){ const d=ri(2,9), n=ri(1,d-1), q0=d*ri(4,25);
  return { q:`Dans une classe de ${q0} élèves, les ${fr(n,d)} font de l'allemand. Combien d'élèves cela représente-t-il ? Combien n'en font pas ?`,
           s:`${q0} ÷ ${d} × ${n} = ${q0/d*n} élèves font de l'allemand.\n${q0} − ${q0/d*n} = ${q0-q0/d*n} élèves n'en font pas.` }; } },
{ d:"D", g(){ const d=ri(2,6), n=ri(1,d-1), q0=d*ri(4,20), d2=ri(2,6), n2=ri(1,d2-1);
  const r1=q0/d*n; if(r1%d2!==0) return null;
  return { q:`Calcule les ${fr(n,d)} de ${q0}, puis les ${fr(n2,d2)} de ce résultat.`,
           s:`${q0} ÷ ${d} × ${n} = ${r1}.\n${r1} ÷ ${d2} × ${n2} = ${r1/d2*n2}.` }; } },
{ d:"D", g(){ const d=ri(2,9), n=ri(1,d-1), q0=d*ri(4,25);
  return { q:`Les ${fr(n,d)} d'une somme valent ${q0/d*n} €. Quelle est cette somme, et combien valent les ${fr(d-n,d)} restants ?`,
           s:`Une part : ${q0/d*n} ÷ ${n} = ${q0/d} €. La somme totale : ${q0/d} × ${d} = ${q0} €.\nLes ${fr(d-n,d)} restants : ${q0/d} × ${d-n} = ${q0-q0/d*n} €.` }; } },
{ d:"D", g(){ const d=ri(2,9), n=ri(1,d-1), q0=d*ri(4,20); const el=pick(PRENOMS);
  return { q:`${el} calcule les ${fr(n,d)} de ${q0} en faisant ${q0} × ${d} ÷ ${n}. Explique son erreur.`,
           s:`Il a inversé les deux opérations. Il faut DIVISER par le dénominateur ${d} et MULTIPLIER par le numérateur ${n} :\n${q0} ÷ ${d} = ${q0/d}, puis × ${n} = ${q0/d*n}.` }; } },
];
FAMILLES["Fraction d'une fraction"] = [
{ d:"F", g(){ const d1=ri(2,5),n1=ri(1,d1-1),d2=ri(2,5),n2=ri(1,d2-1),q0=d1*d2*ri(2,6);
  return { q:`Calcule les ${fr(n1,d1)} des ${fr(n2,d2)} de ${q0}.`,
           s:`Les ${fr(n2,d2)} de ${q0} : ${q0} ÷ ${d2} × ${n2} = ${q0/d2*n2}.\nPuis les ${fr(n1,d1)} : ${q0/d2*n2} ÷ ${d1} × ${n1} = ${q0/d2*n2/d1*n1}.` }; } },
{ d:"F", g(){ const d1=ri(2,5),n1=ri(1,d1-1),d2=ri(2,5),n2=ri(1,d2-1);
  const r=pasProduit(n1,d1,n2,d2);
  return { q:`Quelle fraction représente les ${fr(n1,d1)} des ${fr(n2,d2)} ?`,
           s:`« les … des … » se traduit par une multiplication.\n${r.s}` }; } },
{ d:"M", g(){ const d1=ri(2,6),n1=ri(1,d1-1),d2=ri(2,6),n2=ri(1,d2-1),q0=d1*d2*ri(2,8);
  const r=pasProduit(n1,d1,n2,d2);
  return { q:`Calcule les ${fr(n1,d1)} des ${fr(n2,d2)} de ${q0}, de deux façons.`,
           s:`En deux temps : ${q0} ÷ ${d2} × ${n2} = ${q0/d2*n2}, puis ÷ ${d1} × ${n1} = ${q0/d2*n2/d1*n1}.\nEn une fois : ${r.s}\nPuis ${fr(r.n,r.d)} de ${q0} = ${q0/r.d*r.n}.` }; } },
{ d:"M", g(){ const d1=ri(2,6),n1=ri(1,d1-1),d2=ri(2,6),n2=ri(1,d2-1);
  const r=pasProduit(n1,d1,n2,d2);
  return { q:`Les ${fr(n2,d2)} d'un terrain sont cultivés ; on plante des tomates sur les ${fr(n1,d1)} de cette partie. Quelle fraction du terrain porte des tomates ?`,
           s:`${r.s}\nLes tomates occupent ${fr(r.n,r.d)} du terrain.` }; } },
{ d:"M", g(){ const d1=ri(2,6),n1=ri(1,d1-1),d2=ri(2,6),n2=ri(1,d2-1);
  const r=pasProduit(n1,d1,n2,d2);
  return { q:`Compare les ${fr(n1,d1)} des ${fr(n2,d2)} et les ${fr(n2,d2)} des ${fr(n1,d1)}.`,
           s:`Les deux valent ${fr(r.n,r.d)} : la multiplication est commutative, l'ordre n'a pas d'importance.` }; } },
{ d:"D", g(){ const d1=ri(2,5),n1=ri(1,d1-1),d2=ri(2,5),n2=ri(1,d2-1),d3=ri(2,4),n3=ri(1,d3-1);
  const r1=pasProduit(n1,d1,n2,d2), r2=pasProduit(r1.n,r1.d,n3,d3);
  return { q:`Calcule les ${fr(n1,d1)} des ${fr(n2,d2)} des ${fr(n3,d3)}.`,
           s:`${r1.s}\nPuis :\n${r2.s}` }; } },
{ d:"D", g(){ const d1=ri(2,6),n1=ri(1,d1-1),d2=ri(2,6),n2=ri(1,d2-1),q0=d1*d2*ri(3,10);
  const r=pasProduit(n1,d1,n2,d2);
  return { q:`Les ${fr(n1,d1)} des ${fr(n2,d2)} d'une somme valent ${q0/(d1*d2)*n1*n2} €. Quelle est cette somme ?`,
           s:`${r.s}\nLa fraction cherchée est ${fr(r.n,r.d)}. Une part vaut ${q0/(d1*d2)*n1*n2} ÷ ${r.n} = ${q0/r.d} €, donc la somme est ${q0/r.d} × ${r.d} = ${q0} €.` }; } },
{ d:"D", g(){ const d2=ri(2,6),n2=ri(1,d2-1),d1=ri(2,6),n1=ri(1,d1-1);
  const r=pasProduit(n1,d1,n2,d2);
  return { q:`Les ${fr(n2,d2)} d'un groupe sont des filles ; parmi elles, les ${fr(n1,d1)} portent des lunettes. Quelle fraction du groupe cela représente-t-il ? Et quelle fraction du groupe est constituée de filles sans lunettes ?`,
           s:`Filles à lunettes : ${r.s}\nFilles sans lunettes : ${pasProduit(d1-n1,d1,n2,d2).s}` }; } },
{ d:"D", g(){ const d1=ri(2,6),n1=ri(1,d1-1),d2=ri(2,6),n2=ri(1,d2-1);
  const r=pasProduit(n1,d1,n2,d2);
  return { q:`Les ${fr(n1,d1)} des ${fr(n2,d2)} d'un nombre sont-ils plus grands ou plus petits que ce nombre ? Justifie.`,
           s:`${r.s}\nComme ${fr(r.n,r.d)} < 1, le résultat est PLUS PETIT que le nombre de départ : prendre une fraction inférieure à 1 d'une quantité la diminue.` }; } },
{ d:"D", g(){ const d1=ri(2,6),n1=ri(1,d1-1),d2=ri(2,6),n2=ri(1,d2-1); const el=pick(PRENOMS);
  const r=pasProduit(n1,d1,n2,d2);
  return { q:`${el} calcule les ${fr(n1,d1)} des ${fr(n2,d2)} en additionnant les deux fractions. Explique son erreur.`,
           s:`« des » signifie MULTIPLIER, pas additionner.\n${r.s}\n(La somme ${pasSomme(n1,d1,n2,d2,1).n}/${pasSomme(n1,d1,n2,d2,1).d} n'a rien à voir avec la réponse.)` }; } },
];
FAMILLES["Fraction d'une figure"] = [
{ d:"F", g(){ const d=ri(4,12), n=ri(1,d-1), f=pick(["disque","rectangle","carré","triangle"]);
  return { q:`Un ${f} est partagé en ${d} parts égales ; ${n} part${n>1?"s sont coloriées":" est coloriée"}. Quelle fraction du ${f} est coloriée ?`,
           s:`${fr(n,d)}${simp(n,d)} du ${f} est colorié${estRed(n,d)?"":" (soit "+fr(...red(n,d))+" après simplification)"}.` }; } },
{ d:"F", g(){ const d=ri(4,12), n=ri(1,d-1), f=pick(["disque","rectangle","carré"]);
  return { q:`Un ${f} est partagé en ${d} parts égales ; ${n} sont coloriées. Quelle fraction n'est PAS coloriée ?`,
           s:`${d} − ${n} = ${d-n} parts ne sont pas coloriées, soit ${fr(d-n,d)}${simp(d-n,d)}.` }; } },
{ d:"M", g(){ const d=ri(6,16), n=ri(2,d-2);
  return { q:`Une bande est partagée en ${d} parts égales ; ${n} sont coloriées. Donne la fraction coloriée sous forme irréductible.`,
           s:`${fr(n,d)} = ${fr(...red(n,d))}${estRed(n,d)?" (déjà irréductible)":""}.` }; } },
{ d:"M", g(){ const k=ri(2,4), d=ri(3,6), n=ri(1,d-1);
  return { q:`Un rectangle est partagé en ${d} bandes égales, et chaque bande en ${k} cases égales. ${n*k} cases sont coloriées. Quelle fraction du rectangle est coloriée ?`,
           s:`Il y a ${d} × ${k} = ${d*k} cases en tout, ${n*k} sont coloriées : ${fr(n*k,d*k)} = ${fr(n,d)}.` }; } },
{ d:"M", g(){ const d=ri(4,12), n=ri(1,d-1), tot=d*ri(2,6);
  return { q:`Une figure est partagée en ${d} parts égales, dont ${n} sont coloriées. Si la figure a une aire de ${tot} cm², quelle est l'aire coloriée ?`,
           s:`Une part : ${tot} ÷ ${d} = ${tot/d} cm². Aire coloriée : ${tot/d} × ${n} = ${tot/d*n} cm².` }; } },
{ d:"D", g(){ const d=ri(6,12), n1=ri(1,3), n2=ri(1,3); if(n1+n2>=d) return null;
  return { q:`Un disque est partagé en ${d} parts égales : ${n1} sont bleues, ${n2} sont rouges, les autres sont blanches. Donne la fraction de chaque couleur, sous forme irréductible.`,
           s:`Bleu : ${fr(n1,d)}${simp(n1,d)}. Rouge : ${fr(n2,d)}${simp(n2,d)}. Blanc : ${fr(d-n1-n2,d)}${simp(d-n1-n2,d)}.\nVérification : ${fr(n1,d)} + ${fr(n2,d)} + ${fr(d-n1-n2,d)} = ${fr(d,d)} = 1.` }; } },
{ d:"D", g(){ const d=ri(4,10), n=ri(1,d-1), k=ri(2,5);
  return { q:`Une figure est partagée en ${d} parts égales, ${n} sont coloriées. On repartage chaque part en ${k}. Combien de petites parts sont coloriées, et quelle fraction cela représente-t-il ?`,
           s:`${n} × ${k} = ${n*k} petites parts coloriées sur ${d} × ${k} = ${d*k}.\n${fr(n*k,d*k)} = ${fr(n,d)} : la fraction n'a pas changé.` }; } },
{ d:"D", g(){ const d1=ri(3,6), n1=ri(1,d1-1), d2=ri(3,6), n2=ri(1,d2-1);
  if(n1*d2===n2*d1) return null;
  return { q:`Une première figure est partagée en ${d1} parts dont ${n1} coloriées, une seconde en ${d2} parts dont ${n2} coloriées. Laquelle est la plus coloriée ?`,
           s:`On compare ${fr(n1,d1)} et ${fr(n2,d2)} : ${n1} × ${d2} = ${n1*d2} et ${n2} × ${d1} = ${n2*d1}.\n${n1*d2>n2*d1?`La première (${fr(n1,d1)} > ${fr(n2,d2)})`:`La seconde (${fr(n2,d2)} > ${fr(n1,d1)})`} est la plus coloriée.` }; } },
{ d:"D", g(){ const d=ri(4,10), n=ri(1,d-1), tot=d*ri(3,10);
  return { q:`Les ${fr(n,d)} d'une figure sont coloriés, ce qui correspond à ${tot/d*n} cm². Quelle est l'aire totale de la figure ?`,
           s:`Une part : ${tot/d*n} ÷ ${n} = ${tot/d} cm². Aire totale : ${tot/d} × ${d} = ${tot} cm².` }; } },
{ d:"D", g(){ const d=ri(4,10), n=ri(1,d-1); const el=pick(PRENOMS);
  return { q:`Une figure est partagée en parts NON égales : ${n} des ${d} parts sont coloriées. ${el} annonce que ${fr(n,d)} de la figure est colorié. A-t-il raison ?`,
           s:`Non. Une fraction ne décrit un partage que si les parts sont ÉGALES. Ici on ne peut pas conclure que la portion coloriée vaut ${fr(n,d)}.` }; } },
];

/* — priorités et parenthèses — */
FAMILLES["Priorités avec des fractions"] = [
{ d:"F", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const p=pasProduit(c,e,f,h), r=pasSomme(a,b,p.n,p.d,1);
  return { q:`Calcule : ${fr(a,b)} + ${fr(c,e)} × ${fr(f,h)}.`,
           s:`La multiplication est prioritaire.\n${p.s}\nPuis ${fr(a,b)} + ${fr(p.n,p.d)} :\n${r.s}` }; } },
{ d:"F", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const p=pasProduit(c,e,f,h), r=pasSomme(a,b,p.n,p.d,-1);
  return { q:`Calcule : ${fr(a,b)} − ${fr(c,e)} × ${fr(f,h)}.`,
           s:`La multiplication d'abord.\n${p.s}\nPuis ${fr(a,b)} − ${fr(p.n,p.d)} :\n${r.s}` }; } },
{ d:"M", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),k=ri(2,6);
  const p=pasProduit(c,e,k,1), r=pasSomme(a,b,p.n,p.d,1);
  return { q:`Calcule : ${fr(a,b)} + ${k} × ${fr(c,e)}.`,
           s:`${k} × ${fr(c,e)} = ${fr(k*c,e)}${simp(k*c,e)}.\nPuis :\n${r.s}` }; } },
{ d:"M", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const q0=pasQuotient(c,e,f,h), r=pasSomme(a,b,q0.n,q0.d,1);
  return { q:`Calcule : ${fr(a,b)} + ${fr(c,e)} ÷ ${fr(f,h)}.`,
           s:`La division est prioritaire.\n${q0.s}\nPuis :\n${r.s}` }; } },
{ d:"M", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const p1=pasProduit(a,b,c,e), p2=pasProduit(c,e,f,h), r=pasSomme(p1.n,p1.d,p2.n,p2.d,1);
  return { q:`Calcule : ${fr(a,b)} × ${fr(c,e)} + ${fr(c,e)} × ${fr(f,h)}.`,
           s:`Les deux produits d'abord.\n${p1.s}\n${p2.s}\nPuis :\n${r.s}` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const p=pasProduit(c,e,f,h), r=pasSomme(a,b,p.n,p.d,1); const el=pick(PRENOMS);
  const faux=pasSomme(a,b,c,e,1), fauxP=pasProduit(faux.n,faux.d,f,h);
  return { q:`${el} calcule ${fr(a,b)} + ${fr(c,e)} × ${fr(f,h)} de gauche à droite et trouve ${fr(fauxP.n,fauxP.d)}. Explique son erreur et donne le bon résultat.`,
           s:`Il a additionné avant de multiplier, alors que la multiplication est prioritaire.\n${p.s}\nPuis :\n${r.s}` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7),k=ri(2,5);
  const p=pasProduit(c,e,f,h), r1=pasSomme(a,b,p.n,p.d,1), p2=pasProduit(r1.n,r1.d,k,1);
  return { q:`Calcule : (${fr(a,b)} + ${fr(c,e)} × ${fr(f,h)}) × ${k}.`,
           s:`Dans la parenthèse, la multiplication d'abord.\n${p.s}\n${r1.s}\nPuis × ${k} :\n${p2.s}` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const p1=pasProduit(a,b,c,e), p2=pasProduit(f,h,c,e), r=pasSomme(p1.n,p1.d,p2.n,p2.d,-1);
  return { q:`Calcule : ${fr(a,b)} × ${fr(c,e)} − ${fr(f,h)} × ${fr(c,e)}.`,
           s:`${p1.s}\n${p2.s}\n${r.s}\nOn pouvait factoriser par ${fr(c,e)} : (${fr(a,b)} − ${fr(f,h)}) × ${fr(c,e)}.` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),k=ri(2,6);
  const p=pasProduit(c,e,k,1), q0=pasQuotient(a,b,p.n,p.d);
  return { q:`Calcule : ${fr(a,b)} ÷ (${fr(c,e)} × ${k}).`,
           s:`La parenthèse d'abord : ${p.s}\nPuis :\n${q0.s}` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const p=pasProduit(a,b,c,e), r=pasSomme(p.n,p.d,f,h,-1);
  return { q:`Calcule : ${fr(a,b)} × ${fr(c,e)} − ${fr(f,h)}, puis compare le résultat à 0.`,
           s:`${p.s}\n${r.s}\nLe résultat ${fr(r.n,r.d)} est ${r.n>0?"positif":r.n<0?"négatif":"nul"}.` }; } },
];
FAMILLES["Expression avec parenthèses"] = [
{ d:"F", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const s1=pasSomme(a,b,c,e,-1), p=pasProduit(s1.n,s1.d,f,h);
  return { q:`Calcule : (${fr(a,b)} − ${fr(c,e)}) × ${fr(f,h)}.`, s:`La parenthèse d'abord.\n${s1.s}\nPuis :\n${p.s}` }; } },
{ d:"F", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const s1=pasSomme(a,b,c,e,1), p=pasProduit(s1.n,s1.d,f,h);
  return { q:`Calcule : (${fr(a,b)} + ${fr(c,e)}) × ${fr(f,h)}.`, s:`La parenthèse d'abord.\n${s1.s}\nPuis :\n${p.s}` }; } },
{ d:"M", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),k=ri(2,6);
  const s1=pasSomme(a,b,c,e,1), p=pasProduit(s1.n,s1.d,k,1);
  return { q:`Calcule : ${k} × (${fr(a,b)} + ${fr(c,e)}).`, s:`${s1.s}\nPuis × ${k} :\n${p.s}` }; } },
{ d:"M", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const s1=pasSomme(a,b,c,e,1), q0=pasQuotient(s1.n,s1.d,f,h);
  return { q:`Calcule : (${fr(a,b)} + ${fr(c,e)}) ÷ ${fr(f,h)}.`, s:`${s1.s}\nPuis :\n${q0.s}` }; } },
{ d:"M", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),k=ri(2,5);
  const s1=pasSomme(k,1,a,b,-1), p=pasProduit(s1.n,s1.d,c,e);
  return { q:`Calcule : (${k} − ${fr(a,b)}) × ${fr(c,e)}.`,
           s:`${k} = ${fr(k*b,b)}, donc ${fr(k*b,b)} − ${fr(a,b)} = ${fr(k*b-a,b)}${simp(k*b-a,b)}.\nPuis :\n${pasProduit(...red(k*b-a,b),c,e).s}` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7),[g2,i2]=frac(9,2,7);
  const s1=pasSomme(a,b,c,e,1), s2=pasSomme(f,h,g2,i2,-1), p=pasProduit(s1.n,s1.d,s2.n,s2.d);
  return { q:`Calcule : (${fr(a,b)} + ${fr(c,e)}) × (${fr(f,h)} − ${fr(g2,i2)}).`,
           s:`Première parenthèse :\n${s1.s}\nSeconde parenthèse :\n${s2.s}\nPuis :\n${p.s}` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const s1=pasSomme(a,b,c,e,-1), q0=pasQuotient(s1.n,s1.d,f,h);
  return { q:`Calcule : (${fr(a,b)} − ${fr(c,e)}) ÷ ${fr(f,h)}.`, s:`${s1.s}\nPuis :\n${q0.s}` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7);
  const s1=pasSomme(a,b,c,e,1), p1=pasProduit(s1.n,s1.d,f,h);
  const pa=pasProduit(a,b,f,h), pb=pasProduit(c,e,f,h), s2=pasSomme(pa.n,pa.d,pb.n,pb.d,1);
  return { q:`Calcule (${fr(a,b)} + ${fr(c,e)}) × ${fr(f,h)} de deux façons : avec la parenthèse d'abord, puis en distribuant.`,
           s:`Avec la parenthèse :\n${s1.s}\n${p1.s}\nEn distribuant :\n${pa.s}\n${pb.s}\n${s2.s}\nLes deux méthodes donnent ${fr(p1.n,p1.d)}.` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7),k=ri(2,5);
  const s1=pasSomme(a,b,c,e,1), p=pasProduit(s1.n,s1.d,f,h), r=pasSomme(p.n,p.d,k,1,1);
  return { q:`Calcule : (${fr(a,b)} + ${fr(c,e)}) × ${fr(f,h)} + ${k}.`,
           s:`${s1.s}\n${p.s}\nPuis + ${k} :\n${r.s}` }; } },
{ d:"D", g(){ const [a,b]=frac(9,2,7),[c,e]=frac(9,2,7),[f,h]=frac(9,2,7); const el=pick(PRENOMS);
  const s1=pasSomme(a,b,c,e,-1), p=pasProduit(s1.n,s1.d,f,h);
  const faux=pasProduit(c,e,f,h), fauxR=pasSomme(a,b,faux.n,faux.d,-1);
  return { q:`${el} calcule (${fr(a,b)} − ${fr(c,e)}) × ${fr(f,h)} en oubliant la parenthèse et trouve ${fr(fauxR.n,fauxR.d)}. Donne le bon résultat.`,
           s:`Sans la parenthèse, il a fait la multiplication d'abord. Or la parenthèse est prioritaire.\n${s1.s}\n${p.s}` }; } },
];

/* — problèmes contextualisés — */
FAMILLES["La jauge du réservoir"] = [
{ d:"F", g(){ const d=ri(2,8), n=ri(1,d-1), C=d*ri(4,12);
  return { q:`Le réservoir d'une voiture contient ${C} L quand il est plein. La jauge indique qu'il est rempli aux ${fr(n,d)}. Quel volume contient-il ?`,
           s:`${C} ÷ ${d} = ${C/d} L par part, puis × ${n} : ${C/d*n} L.` }; } },
{ d:"F", g(){ const d=ri(2,8), n=ri(1,d-1), C=d*ri(4,12);
  return { q:`Un réservoir de ${C} L est rempli aux ${fr(n,d)}. Quelle fraction reste-t-il à remplir ?`,
           s:`${fr(d,d)} − ${fr(n,d)} = ${fr(d-n,d)}${simp(d-n,d)}.` }; } },
{ d:"M", g(){ const d=ri(2,8), n=ri(1,d-1), C=d*ri(4,12);
  return { q:`Le réservoir d'une voiture contient ${C} L quand il est plein. La jauge indique ${fr(n,d)}. Quel volume contient-il ? Combien de litres manquent pour le remplir ?`,
           s:`Contenu : ${C} ÷ ${d} × ${n} = ${C/d*n} L.\nManquants : ${C} − ${C/d*n} = ${C-C/d*n} L.` }; } },
{ d:"M", g(){ const d=ri(2,8), n=ri(1,d-1), C=d*ri(4,12), p=ri(150,199)/100;
  const v=C-C/d*n;
  return { q:`Un réservoir de ${C} L est rempli aux ${fr(n,d)}. Combien coûte le plein à ${p.toFixed(2).replace(".",",")} € le litre ?`,
           s:`Il manque ${C} − ${C/d*n} = ${v} L.\nCoût : ${v} × ${p.toFixed(2).replace(".",",")} = ${(v*p).toFixed(2).replace(".",",")} €.` }; } },
{ d:"M", g(){ const d=ri(2,8), n=ri(1,d-1), C=d*ri(4,12);
  return { q:`La jauge d'un réservoir indique ${fr(n,d)}, ce qui correspond à ${C/d*n} L. Quelle est la capacité totale du réservoir ?`,
           s:`Une part : ${C/d*n} ÷ ${n} = ${C/d} L. Capacité : ${C/d} × ${d} = ${C} L.` }; } },
{ d:"D", g(){ const d=ri(4,10), n=ri(2,d-1), C=d*ri(4,12), n2=ri(1,n-1);
  return { q:`Un réservoir de ${C} L est rempli aux ${fr(n,d)}. Après un trajet, la jauge indique ${fr(n2,d)}. Quel volume a été consommé ?`,
           s:`Avant : ${C/d*n} L. Après : ${C/d*n2} L.\nConsommé : ${C/d*n} − ${C/d*n2} = ${C/d*(n-n2)} L, soit ${fr(n-n2,d)}${simp(n-n2,d)} du réservoir.` }; } },
{ d:"D", g(){ const d=ri(3,8), n=ri(1,d-1), C=d*ri(4,12), aj=C/d;
  return { q:`Un réservoir de ${C} L est rempli aux ${fr(n,d)}. On ajoute ${aj} L. Quelle fraction du réservoir est alors remplie ?`,
           s:`Avant : ${C/d*n} L. Après : ${C/d*n} + ${aj} = ${C/d*n+aj} L.\nFraction : ${fr(C/d*n+aj,C)}${simp(C/d*n+aj,C)} du réservoir.` }; } },
{ d:"D", g(){ const d=ri(3,8), n=ri(1,d-1), C=d*ri(5,12), conso=ri(5,9);
  const v=C/d*n;
  return { q:`Un réservoir de ${C} L est rempli aux ${fr(n,d)}. La voiture consomme ${conso} L aux 100 km. Quelle distance peut-elle parcourir ?`,
           s:`Carburant disponible : ${C} ÷ ${d} × ${n} = ${v} L.\nDistance : ${v} ÷ ${conso} × 100 ≈ ${Math.round(v/conso*100)} km.` }; } },
{ d:"D", g(){ const d=ri(3,8), n=ri(1,d-1), C=d*ri(4,12);
  return { q:`Deux réservoirs de ${C} L sont remplis l'un aux ${fr(n,d)}, l'autre aux ${fr(d-n,d)}. Que vaut la somme des deux volumes ?`,
           s:`${C/d*n} L et ${C/d*(d-n)} L.\nSomme : ${C/d*n} + ${C/d*(d-n)} = ${C} L, soit exactement un réservoir plein (car ${fr(n,d)} + ${fr(d-n,d)} = 1).` }; } },
{ d:"D", g(){ const d=ri(3,8), n=ri(1,d-1), C=d*ri(4,12); const el=pick(PRENOMS);
  return { q:`${el} lit ${fr(n,d)} sur la jauge d'un réservoir de ${C} L et annonce qu'il manque ${C/d*n} L. Explique son erreur.`,
           s:`${C/d*n} L est le volume PRÉSENT, pas le volume manquant.\nIl manque ${C} − ${C/d*n} = ${C-C/d*n} L, soit ${fr(d-n,d)}${simp(d-n,d)} du réservoir.` }; } },
];

/* fabrique commune aux problèmes « deux parts d'un tout » */
function banqueDeuxParts(cfg) {
  const { intro, tout, reste, verbe } = cfg;   // verbe : mangée / occupée / parcourue…
  return [
  { d:"F", g(){ const [a,b]=frac(9,2,8,true),[c,e]=frac(9,2,8,true); const r=pasSomme(a,b,c,e,1);
    if(r.n>=r.d) return null;
    return { q:intro(fr(a,b),fr(c,e))+` Quelle fraction ${tout} cela représente-t-il ?`, s:r.s }; } },
  { d:"F", g(){ const d=ri(3,10), a=ri(1,d-2), c=ri(1,d-a-1);
    return { q:intro(fr(a,d),fr(c,d))+` Quelle fraction ${tout} cela fait-il en tout ?`,
             s:`${fr(a,d)} + ${fr(c,d)} = ${fr(a+c,d)}${simp(a+c,d)}.` }; } },
  { d:"M", g(){ const [a,b]=frac(9,2,8,true),[c,e]=frac(9,2,8,true); const r=pasSomme(a,b,c,e,1);
    if(r.n>=r.d) return null;
    return { q:intro(fr(a,b),fr(c,e))+` Quelle fraction ${tout} cela représente-t-il ? Quelle fraction ${reste} ?`,
             s:`${r.s}\nReste : ${fr(r.d,r.d)} − ${fr(r.n,r.d)} = ${fr(r.d-r.n,r.d)}${simp(r.d-r.n,r.d)}.` }; } },
  { d:"M", g(){ const [a,b]=frac(9,2,8,true),[c,e]=frac(9,2,8,true); const r=pasSomme(a,b,c,e,1);
    if(r.n>=r.d) return null;
    const Q=r.d*ri(2,9);
    return { q:intro(fr(a,b),fr(c,e))+` Si le tout vaut ${Q}, quelle quantité cela représente-t-il ?`,
             s:`${r.s}\n${Q} ÷ ${r.d} × ${r.n} = ${Q/r.d*r.n}.` }; } },
  { d:"M", g(){ const [a,b]=frac(9,2,8,true),[c,e]=frac(9,2,8,true);
    if(a*e===c*b) return null;
    return { q:intro(fr(a,b),fr(c,e))+` Qui en a pris le plus ?`,
             s:`On multiplie en croix : ${a} × ${e} = ${a*e} et ${c} × ${b} = ${c*b}.\n${a*e>c*b?`${fr(a,b)} > ${fr(c,e)} : c'est la première part la plus grande.`:`${fr(c,e)} > ${fr(a,b)} : c'est la seconde part la plus grande.`}` }; } },
  { d:"D", g(){ const [a,b]=frac(9,2,8,true),[c,e]=frac(9,2,8,true),[f,h]=frac(9,2,8,true);
    const r1=pasSomme(a,b,c,e,1); if(r1.n>=r1.d) return null;
    const r2=pasSomme(r1.n,r1.d,f,h,1); if(r2.n>=r2.d) return null;
    return { q:intro(fr(a,b),fr(c,e))+` Une troisième personne en prend ${fr(f,h)}. Quelle fraction ${reste} ?`,
             s:`${r1.s}\nPuis :\n${r2.s}\nReste : ${fr(r2.d,r2.d)} − ${fr(r2.n,r2.d)} = ${fr(r2.d-r2.n,r2.d)}${simp(r2.d-r2.n,r2.d)}.` }; } },
  { d:"D", g(){ const [a,b]=frac(9,2,8,true),[c,e]=frac(9,2,8,true); const r=pasSomme(a,b,c,e,1);
    if(r.n>=r.d) return null;
    return { q:intro(fr(a,b),fr(c,e))+` Quelle fraction ${reste} ? Cette part restante est-elle plus grande que ${fr(a,b)} ?`,
             s:`${r.s}\nReste : ${fr(r.d-r.n,r.d)}${simp(r.d-r.n,r.d)}.\nComparaison avec ${fr(a,b)} : ${(r.d-r.n)*b} contre ${a*r.d} en produits croisés, donc la part restante est ${(r.d-r.n)*b>a*r.d?"PLUS GRANDE":"PLUS PETITE"}.` }; } },
  { d:"D", g(){ const [a,b]=frac(9,2,8,true); const [c,e]=frac(9,2,8,true);
    const r=pasSomme(a,b,c,e,1); if(r.n>=r.d) return null;
    const Q=r.d*ri(2,8);
    return { q:intro(fr(a,b),fr(c,e))+` Le tout vaut ${Q}. Quelle quantité chacun a-t-il prise, et combien reste-t-il ?`,
             s:`Premier : ${Q} ÷ ${b} × ${a} = ${Q/b*a}. Second : ${Q} ÷ ${e} × ${c} = ${Q/e*c}.\nTotal pris : ${Q/b*a+Q/e*c}. Reste : ${Q} − ${Q/b*a+Q/e*c} = ${Q-(Q/b*a+Q/e*c)}, soit ${fr(r.d-r.n,r.d)}${simp(r.d-r.n,r.d)} du tout.` }; } },
  { d:"D", g(){ const [a,b]=frac(9,2,8,true); const r=pasSomme(a,b,a,b,1);
    return { q:intro(fr(a,b),fr(a,b))+` Quelle fraction ${tout} cela représente-t-il ? Le résultat dépasse-t-il 1 ?`,
             s:`${r.s}\n${r.n>=r.d?`Le résultat ${fr(r.n,r.d)} est supérieur ou égal à 1 : c'est impossible pour deux parts d'un même tout.`:`Le résultat ${fr(r.n,r.d)} reste inférieur à 1.`}` }; } },
  { d:"D", g(){ const [a,b]=frac(9,2,8,true),[c,e]=frac(9,2,8,true); const el=pick(PRENOMS);
    const r=pasSomme(a,b,c,e,1); if(r.n>=r.d) return null;
    return { q:intro(fr(a,b),fr(c,e))+` ${el} annonce ${fr(a+c,b+e)}. Explique son erreur et donne le bon résultat.`,
             s:`${el} a additionné les numérateurs entre eux et les dénominateurs entre eux, ce qui n'est pas permis.\n${r.s}` }; } },
  ];
}
FAMILLES["Le gâteau partagé"] = banqueDeuxParts({ verbe:"mangée",
  intro:(x,y)=>`Un gâteau est partagé : ${pick(PRENOMS)} en mange ${x} et son frère en mange ${y}.`,
  tout:"du gâteau", reste:"du gâteau reste-t-il" });
FAMILLES["Les brioches du goûter"] = banqueDeuxParts({ verbe:"mangée",
  intro:(x,y)=>`Au goûter, ${pick(PRENOMS)} mange ${x} d'une brioche et ${pick(PRENOMS)} en mange ${y}.`,
  tout:"de la brioche", reste:"de la brioche reste-t-il" });
FAMILLES["Le terrain partagé"] = banqueDeuxParts({ verbe:"occupée",
  intro:(x,y)=>`Sur un terrain, le potager occupe ${x} de la surface et les fleurs en occupent ${y}.`,
  tout:"du terrain", reste:"du terrain reste libre" });
FAMILLES["La randonnée en deux étapes"] = banqueDeuxParts({ verbe:"parcourue",
  intro:(x,y)=>`Le matin, des randonneurs parcourent ${x} d'un sentier ; l'après-midi, ils en parcourent ${y}.`,
  tout:"du sentier", reste:"du sentier reste-t-il" });

FAMILLES["Les sachets de café"] = [
{ d:"F", g(){ const d=ri(2,8), n=ri(1,6), nb=ri(6,30); const tot=[n*nb,d];
  return { q:`Un torréfacteur répartit ${fr(n*nb,d)} kg de café en sachets de ${fr(n,d)} kg. Combien de sachets remplit-il ?`,
           s:`${fr(n*nb,d)} ÷ ${fr(n,d)} = ${fr(n*nb,d)} × ${fr(d,n)} = ${fr(n*nb*d,d*n)} = ${nb}. Il remplit ${nb} sachets.` }; } },
{ d:"F", g(){ const d=ri(2,8), n=ri(1,d-1), nb=ri(4,20);
  return { q:`Un torréfacteur remplit ${nb} sachets de ${fr(n,d)} kg. Quelle masse de café a-t-il utilisée ?`,
           s:`${nb} × ${fr(n,d)} = ${fr(nb*n,d)}${simp(nb*n,d)} kg.` }; } },
{ d:"M", g(){ const d=ri(2,8), n=ri(1,6), nb=ri(6,30);
  return { q:`Combien de sachets de ${fr(n,d)} kg peut-on remplir avec ${fr(n*nb,d)} kg de café ?`,
           s:`${fr(n*nb,d)} ÷ ${fr(n,d)} = ${fr(n*nb,d)} × ${fr(d,n)} = ${nb} sachets.` }; } },
{ d:"M", g(){ const d=ri(2,6), n=ri(1,5), nb=ri(5,20), p=ri(8,25);
  return { q:`Un torréfacteur remplit ${nb} sachets de ${fr(n,d)} kg, vendus ${p} € le kilo. Quelle est la recette ?`,
           s:`Masse totale : ${nb} × ${fr(n,d)} = ${fr(nb*n,d)}${simp(nb*n,d)} kg.\nRecette : ${fr(nb*n,d)} × ${p} = ${fr(nb*n*p,d)}${simp(nb*n*p,d)} €${(nb*n*p)%d===0?` = ${nb*n*p/d} €`:""}.` }; } },
{ d:"M", g(){ const d=ri(2,8), n=ri(1,6), nb=ri(6,25);
  return { q:`Avec ${fr(n*nb,d)} kg de café, un torréfacteur veut faire ${nb} sachets identiques. Quelle masse met-il dans chaque sachet ?`,
           s:`${fr(n*nb,d)} ÷ ${nb} = ${fr(n*nb,d*nb)} = ${fr(n,d)}${simp(n,d)} kg par sachet.` }; } },
{ d:"D", g(){ const d=ri(2,8), n=ri(1,6), nb=ri(6,25), reste=ri(1,n*2);
  const totN=n*nb+reste;
  return { q:`Un torréfacteur dispose de ${fr(totN,d)} kg de café et remplit des sachets de ${fr(n,d)} kg. Combien de sachets complets obtient-il, et que reste-t-il ?`,
           s:`${fr(totN,d)} ÷ ${fr(n,d)} = ${totN} ÷ ${n} = ${Math.floor(totN/n)} reste ${totN%n}.\nIl remplit ${Math.floor(totN/n)} sachets complets et il reste ${fr(totN%n,d)}${simp(totN%n,d)} kg.` }; } },
{ d:"D", g(){ const d=ri(2,6), n=ri(1,5), nb=ri(6,20), d2=ri(2,6), n2=ri(1,5);
  return { q:`Un torréfacteur remplit ${nb} sachets de ${fr(n,d)} kg. Il veut désormais des sachets de ${fr(n2,d2)} kg. Combien de sachets obtiendra-t-il avec la même masse totale ?`,
           s:`Masse totale : ${nb} × ${fr(n,d)} = ${fr(nb*n,d)}${simp(nb*n,d)} kg.\nNombre de sachets : ${fr(nb*n,d)} ÷ ${fr(n2,d2)} = ${fr(nb*n,d)} × ${fr(d2,n2)} = ${fr(nb*n*d2,d*n2)}${simp(nb*n*d2,d*n2)}${(nb*n*d2)%(d*n2)===0?` = ${nb*n*d2/(d*n2)} sachets`:` sachets, soit ${Math.floor(nb*n*d2/(d*n2))} sachets complets`}.` }; } },
{ d:"D", g(){ const d=ri(2,6), n=ri(1,5), nb=ri(6,20), p=ri(10,30);
  return { q:`Un torréfacteur achète ${fr(n*nb,d)} kg de café à ${p} € le kilo et le revend en sachets de ${fr(n,d)} kg au prix de ${p+ri(3,10)} € le sachet. Combien de sachets fait-il ?`,
           s:`${fr(n*nb,d)} ÷ ${fr(n,d)} = ${nb} sachets.` }; } },
{ d:"D", g(){ const d=ri(2,8), n=ri(1,6), nb=ri(6,25);
  return { q:`Un torréfacteur remplit ${nb} sachets de ${fr(n,d)} kg. Exprime la masse totale en kilogrammes, puis dis si elle dépasse ${Math.ceil(nb*n/d)} kg.`,
           s:`${nb} × ${fr(n,d)} = ${fr(nb*n,d)}${simp(nb*n,d)} kg.\n${nb*n/d>Math.ceil(nb*n/d)-0.0001&&nb*n%d===0?`Elle vaut exactement ${nb*n/d} kg.`:`${fr(nb*n,d)} ≈ ${(nb*n/d).toFixed(2).replace(".",",")} kg : elle ne dépasse pas ${Math.ceil(nb*n/d)} kg.`}` }; } },
{ d:"D", g(){ const d=ri(2,8), n=ri(1,6), nb=ri(6,25); const el=pick(PRENOMS);
  return { q:`${el} calcule le nombre de sachets de ${fr(n,d)} kg contenus dans ${fr(n*nb,d)} kg en multipliant les deux fractions. Explique son erreur.`,
           s:`Chercher « combien de fois ${fr(n,d)} tient dans ${fr(n*nb,d)} », c'est DIVISER, pas multiplier.\n${fr(n*nb,d)} ÷ ${fr(n,d)} = ${fr(n*nb,d)} × ${fr(d,n)} = ${nb} sachets.` }; } },
];

/* ══════════ MOTEUR ══════════ */
const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

function genererFamille(nom, besoins, vus) {
  const modeles = FAMILLES[nom], sortie = [];
  for (const d of ["F", "M", "D"]) {
    const dispo = modeles.filter(m => m.d === d);
    if (!dispo.length) continue;
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < besoins[d] * 300 + 6000) {
      essais++;
      let r; try { r = pick(dispo).g(); } catch (e) { continue; }
      if (!r || !r.q || !r.s) continue;
      const k = cle(r.q);
      if (vus.has(k)) continue;
      vus.add(k);
      sortie.push({ d, content: r.q, solution: r.s });
      reste--;
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

/* ══════════ APERÇU ══════════ */
if (APERCU) {
  const f = ARGS[ARGS.indexOf("--apercu") + 1];
  const dem = f && !f.startsWith("--") ? f : null;
  let total = 0; const lignes = [];
  for (const nom of Object.keys(FAMILLES)) {
    if (dem && cle(nom) !== cle(dem)) continue;
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

/* ══════════ BASE ══════════ */
(async () => {
  const { Pool } = require("pg");
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%raction%' ORDER BY id`);
  const rows = brut.filter(r => cle(r.chapitre).includes("fraction"));
  if (!rows.length) { console.log("Chapitre introuvable."); await pool.end(); return; }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(rows, "chapitre", "Fractions");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  const parFam = new Map();
  rows.forEach(r => { if (!r.famille) return; const k = cle(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

  const vus = new Set(rows.map(r => cle(r.content)));
  const aInserer = [], rapport = [], inconnues = [];
  const CANON = {}; Object.keys(FAMILLES).forEach(f => { CANON[cle(f)] = f; });

  for (const [k, g] of parFam) {
    const canon = CANON[k];
    if (!canon) { inconnues.push(g.nom); continue; }
    const dej = { F: 0, M: 0, D: 0 };
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M" : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919);
    const neufs = genererFamille(canon, besoinsDepuis(dej), vus);
    const mod = { level: maj(g.items, "level", "college"), subject: maj(g.items, "subject", "Arithmétique"),
                  classe: maj(g.items, "classe", "6ème"), type: maj(g.items, "type", "exercice") };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content, solution: e.solution,
      difficulty: LIBELLE[e.d], level: mod.level, subject: mod.subject, classe: mod.classe,
      chapitre: CHAPITRE, type: mod.type, famille: g.nom }); });
    rapport.push({ famille: g.nom, avant: g.items.length, ajoutes: neufs.length, apres: g.items.length + neufs.length, classe: mod.classe });
  }
  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));
  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`fractions-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : fractions-avant-generation-${stamp}.json`);
  const T = 200;
  for (let i = 0; i < aInserer.length; i += T) {
    const lot = aInserer.slice(i, i + T), vals = [], par = [];
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
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAPITRE]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
