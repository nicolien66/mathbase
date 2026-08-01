/* MathBase — generer-lineaire.js
   Chapitre « Fonction linéaire » : 100 exercices par famille.
   La famille « Cours » est EXCLUE (pas d'objectif chiffré).

   Arithmétique exacte en rationnels : les coefficients d'une fonction linéaire
   ne tombent pas toujours juste (f(4) = 10 donne 2,5 ; f(3) = 7 donne 7/3).
   Le script calcule chaque coefficient, chaque image et chaque antécédent, et
   choisit l'écriture décimale quand elle est exacte, la fraction irréductible
   sinon. Les conversions monétaires non exactes sont notées « ≈ … (arrondi au
   centime) », jamais « = ».

   · 20 faciles / 30 moyens / 50 difficiles par famille.
   · Tirage déterministe + déduplication : rejouable sans doublon.

   Usage :
     node generer-lineaire.js --apercu
     node generer-lineaire.js --apercu "Le taux de change"
     $env:DATABASE_URL = "postgresql://..."
     node generer-lineaire.js            # simulation
     node generer-lineaire.js --execute  # applique
   Options : --cible N (100) · --graine N (20260801)
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260801);
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };
const EXCLUES = ["cours"];

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];

/* ── rationnels exacts ── */
const pgcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };
function R(n, d) { if (d < 0) { n = -n; d = -d; } const g = pgcd(n, d); return [n / g, d / g]; }
const mulR = (x, y) => R(x[0] * y[0], x[1] * y[1]);
const divR = (x, y) => R(x[0] * y[1], x[1] * y[0]);
const egal = (x, y) => x[0] * y[1] === y[0] * x[1];
const nb = n => String(n).replace("-", "\u2212");
/* le dénominateur ne contient-il que des 2 et des 5 ? (écriture décimale exacte) */
function estDec(d) { while (d % 2 === 0) d /= 2; while (d % 5 === 0) d /= 5; return d === 1; }
function nbr(x) {
  const [n, d] = R(x[0], x[1]);
  if (d === 1) return nb(n);
  if (estDec(d)) return String(Number((n / d).toFixed(10))).replace(".", ",").replace("-", "\u2212");
  return `${nb(n)}/${d}`;
}
const I = n => [n, 1];
/* décimal « 1,08 » → rationnel exact, sans passer par un flottant.
   `dec` est donné en CHAÎNE pour conserver un éventuel zéro initial. */
function Dc(ent, dec) {
  const txt = String(dec), p = Math.pow(10, txt.length), d = Number(txt);
  return R(ent * p + (ent < 0 ? -d : d), p);
}
const euros = x => { const c = R(x[0] * 100, x[1]);
  const exact = c[1] === 1;
  const v = (x[0] / x[1]).toFixed(2).replace(".", ",").replace("-", "\u2212");
  return { exact, txt: v, signe: exact ? "=" : "≈", note: exact ? "" : " (arrondi au centime)" }; };

const LETTRES = ["f", "g", "h", "u", "v", "p"];
const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];
const DEVISES = [["dollar","dollars",[1,"08"]],["franc suisse","francs suisses",[0,"96"]],
  ["livre sterling","livres sterling",[0,"85"]],["dollar canadien","dollars canadiens",[1,"47"]],
  ["zloty","zlotys",[4,"31"]],["real","reals",[5,"62"]]];
/* en français, une valeur strictement inférieure à 2 laisse le nom au singulier */
const accord = (x, sing, plur) => (x[0] / x[1] < 2 ? sing : plur);

/* ══════════ FAMILLES ══════════ */
const FAMILLES = {};

FAMILLES["Déterminer le coefficient"] = [
{ d:"F", g(){ const F=pick(LETTRES),a=ri(2,9),k=ri(2,9),y=a*k;
  return { q:`${F} est une fonction linéaire telle que ${F}(${k}) = ${y}. Détermine ${F}(x).`,
           s:`Le coefficient vaut a = ${y} ÷ ${k} = ${a}.\nDonc ${F}(x) = ${a}x.` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=ri(2,9),k=ri(2,9),y=-a*k;
  return { q:`${F} est une fonction linéaire telle que ${F}(${k}) = ${nb(y)}. Détermine son coefficient.`,
           s:`a = ${nb(y)} ÷ ${k} = ${nb(-a)}.\nDonc ${F}(x) = ${nb(-a)}x.` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=ri(2,9),k=ri(2,9);
  return { q:`Une fonction linéaire ${F} vérifie ${F}(${k}) = ${a*k}. Quelle est l'image de 1 par ${F} ?`,
           s:`a = ${a*k} ÷ ${k} = ${a}, donc ${F}(x) = ${a}x et ${F}(1) = ${a}.\nL'image de 1 est toujours le coefficient.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),k=pick([2,4,5,8]),y=ri(3,49); const a=R(y,k);
  if(a[1]===1||!estDec(a[1])) return null;
  return { q:`${F} est une fonction linéaire telle que ${F}(${k}) = ${y}. Détermine ${F}(x).`,
           s:`a = ${y} ÷ ${k} = ${nbr(a)}.\nDonc ${F}(x) = ${nbr(a)}x.\nLe coefficient n'est pas entier, ce qui est parfaitement possible.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),k=pick([3,6,7,9,11]),y=ri(2,40); const a=R(y,k);
  if(a[1]===1||estDec(a[1])) return null;
  return { q:`${F} est une fonction linéaire telle que ${F}(${k}) = ${y}. Détermine ${F}(x).`,
           s:`a = ${y} ÷ ${k} = ${nbr(a)}.\nDonc ${F}(x) = ${nbr(a)}x.\nLe quotient ne tombe pas juste : on garde la fraction irréductible.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=ri(2,9),k1=ri(2,5),k2=ri(6,12);
  return { q:`Un tableau donne ${F}(${k1}) = ${a*k1} et ${F}(${k2}) = ${a*k2}. Montre que ${F} peut être linéaire et donne son coefficient.`,
           s:`${a*k1} ÷ ${k1} = ${a} et ${a*k2} ÷ ${k2} = ${a}.\nLes deux quotients sont égaux : la situation est proportionnelle, de coefficient ${a}. Donc ${F}(x) = ${a}x.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=ri(2,9),k=ri(2,9);
  return { q:`La droite représentant la fonction linéaire ${F} passe par le point A(${k} ; ${a*k}). Détermine ${F}(x).`,
           s:`Un point de la droite donne directement le coefficient : a = ${a*k} ÷ ${k} = ${a}.\nDonc ${F}(x) = ${a}x. La droite passe aussi par l'origine, comme toute fonction linéaire.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=ri(2,9),k1=ri(2,5),k2=ri(6,12),ecart=ri(1,5);
  return { q:`Un tableau donne ${F}(${k1}) = ${a*k1} et ${F}(${k2}) = ${a*k2+ecart}. ${F} peut-elle être linéaire ?`,
           s:`${a*k1} ÷ ${k1} = ${a}, mais ${a*k2+ecart} ÷ ${k2} = ${nbr(R(a*k2+ecart,k2))}.\nLes quotients diffèrent : la situation n'est PAS proportionnelle, donc ${F} n'est pas linéaire.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=ri(2,9),k=ri(2,9),m=ri(3,15);
  return { q:`${F} est linéaire et ${F}(${k}) = ${a*k}. Calcule ${F}(${m}), puis l'antécédent de ${a*m*2}.`,
           s:`a = ${a*k} ÷ ${k} = ${a}, donc ${F}(x) = ${a}x.\n${F}(${m}) = ${a} × ${m} = ${a*m}.\nAntécédent de ${a*m*2} : x = ${a*m*2} ÷ ${a} = ${m*2}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=ri(2,9),k=ri(2,9); const el=pick(PRENOMS);
  return { q:`${F} est linéaire et ${F}(${k}) = ${a*k}. ${el} annonce que le coefficient vaut ${nbr(R(k,a*k))}. Explique son erreur.`,
           s:`${el} a divisé l'antécédent par l'image. C'est l'inverse : le coefficient est l'IMAGE divisée par l'ANTÉCÉDENT.\na = ${a*k} ÷ ${k} = ${a}, donc ${F}(x) = ${a}x.` }; } },
{ d:"D", g(){ const t=pick([5,8,12,15,20,25,30]),sens=pick(["augmentation","diminution"]);
  const coef=sens==="augmentation"?R(100+t,100):R(100-t,100);
  return { q:`Une ${sens} de ${t} % est modélisée par une fonction linéaire. Quel est son coefficient ?`,
           s:`${sens==="augmentation"?`Augmenter de ${t} %, c'est multiplier par 1 + ${t}/100 = ${nbr(coef)}`:`Diminuer de ${t} %, c'est multiplier par 1 − ${t}/100 = ${nbr(coef)}`}.\nLa fonction est x ↦ ${nbr(coef)}x.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=ri(2,9),k=ri(2,6),q0=ri(2,9);
  return { q:`${F} est linéaire. On sait que ${F}(${k}) = ${a*k}. Que vaut ${F}(${k*q0}) ?`,
           s:`${k*q0} = ${q0} × ${k}. Par proportionnalité, l'image est multipliée par ${q0} elle aussi :\n${F}(${k*q0}) = ${q0} × ${a*k} = ${a*k*q0}.\n(On peut aussi passer par a = ${a} et calculer ${a} × ${k*q0}.)` }; } },
];

FAMILLES["Image et antécédent"] = [
{ d:"F", g(){ const F=pick(LETTRES),a=ri(2,9),n=ri(2,12);
  return { q:`Soit ${F}(x) = ${a}x. Calcule ${F}(${n}).`, s:`${F}(${n}) = ${a} × ${n} = ${a*n}.` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=ri(2,9),k=ri(2,12);
  return { q:`Soit ${F}(x) = ${a}x. Détermine l'antécédent de ${a*k}.`,
           s:`On résout ${a}x = ${a*k}, donc x = ${a*k} ÷ ${a} = ${k}.` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=ri(2,9),n=ri(2,9);
  return { q:`Soit ${F}(x) = ${a}x. Calcule ${F}(${nb(-n)}).`,
           s:`${F}(${nb(-n)}) = ${a} × (${nb(-n)}) = ${nb(-a*n)}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=ri(2,9),n=pick([Dc(1,5),Dc(2,5),Dc(0,5),Dc(3,5),Dc(0,25)]);
  const v=mulR(I(a),n);
  return { q:`Soit ${F}(x) = ${a}x. Calcule ${F}(${nbr(n)}).`,
           s:`${F}(${nbr(n)}) = ${a} × ${nbr(n)} = ${nbr(v)}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=ri(2,9),k=ri(2,12);
  return { q:`Soit ${F}(x) = ${a}x. Détermine l'antécédent de ${nb(-a*k)}.`,
           s:`On résout ${a}x = ${nb(-a*k)}, donc x = ${nb(-a*k)} ÷ ${a} = ${nb(-k)}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=ri(2,9),n=pick([Dc(1,5),Dc(2,5),Dc(0,5)]),k=ri(2,12);
  return { q:`Soit ${F}(x) = ${a}x. a) Calcule ${F}(${nbr(n)}). b) Détermine l'antécédent de ${nb(-a*k)}.`,
           s:`a) ${F}(${nbr(n)}) = ${a} × ${nbr(n)} = ${nbr(mulR(I(a),n))}.\nb) ${a}x = ${nb(-a*k)}, donc x = ${nb(-k)}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=ri(2,9),y=ri(2,40); const x=R(y,a);
  if(x[1]===1) return null;
  return { q:`Soit ${F}(x) = ${a}x. Détermine l'antécédent de ${y}.`,
           s:`On résout ${a}x = ${y}, donc x = ${y} ÷ ${a} = ${nbr(x)}.\nL'antécédent n'est pas entier : on ${estDec(x[1])?"donne son écriture décimale":"le laisse en fraction irréductible"}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=ri(2,9),n=ri(2,12);
  return { q:`Soit ${F}(x) = ${a}x. Calcule ${F}(${n}), puis détermine l'antécédent du résultat obtenu.`,
           s:`${F}(${n}) = ${a*n}.\nAntécédent de ${a*n} : x = ${a*n} ÷ ${a} = ${n}.\nOn retrouve le nombre de départ : image et antécédent sont deux lectures d'une même égalité.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=pick([-9,-8,-7,-6,-5,-4,-3,-2]),n=ri(2,9);
  return { q:`Soit ${F}(x) = ${nb(a)}x. Calcule ${F}(${nb(-n)}) et détermine l'antécédent de ${nb(a*n)}.`,
           s:`${F}(${nb(-n)}) = ${nb(a)} × (${nb(-n)}) = ${nb(-a*n)} : le produit de deux négatifs est positif.\nAntécédent de ${nb(a*n)} : x = ${nb(a*n)} ÷ ${nb(a)} = ${n}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),an=ri(2,9),ad=pick([3,4,5,6,8]);
  if(pgcd(an,ad)!==1) return null;
  const a=[an,ad],k=ri(2,9),y=mulR(a,I(k*ad));
  return { q:`Soit ${F}(x) = ${nbr(a)}x. Calcule ${F}(${k*ad}), puis détermine l'antécédent de ${nbr(y)}.`,
           s:`${F}(${k*ad}) = ${nbr(a)} × ${k*ad} = ${nbr(mulR(a,I(k*ad)))}.\nAntécédent de ${nbr(y)} : x = ${nbr(y)} ÷ ${nbr(a)} = ${nbr(divR(y,a))}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=ri(2,9),k=ri(2,12); const el=pick(PRENOMS);
  return { q:`Soit ${F}(x) = ${a}x. ${el} cherche l'antécédent de ${a*k} et calcule ${a} × ${a*k} = ${a*a*k}. Explique son erreur.`,
           s:`${el} a calculé une image au lieu d'un antécédent. Pour un antécédent, on résout une équation :\n${a}x = ${a*k}, donc x = ${a*k} ÷ ${a} = ${k}. On DIVISE par le coefficient.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=ri(2,9),n=ri(2,9);
  return { q:`Soit ${F}(x) = ${a}x. Compare ${F}(${n}) et ${n}. Pour quelles valeurs de x a-t-on ${F}(x) > x ?`,
           s:`${F}(${n}) = ${a*n} et ${n} : ${a*n} > ${n}.\nPlus généralement ${a}x > x équivaut à ${a-1}x > 0, soit x > 0. L'image dépasse le nombre pour tout x strictement positif (et lui est inférieure pour x négatif).` }; } },
];

FAMILLES["Le taux de change"] = [
{ d:"F", g(){ const [s,p,[e,c]]=pick(DEVISES),t=Dc(e,c),F=pick(LETTRES),m=ri(20,900);
  const v=mulR(t,I(m)),E=euros(v);
  return { q:`Un euro vaut ${nbr(t)} ${accord(t,s,p)}. On note ${F} la fonction qui à un montant en euros associe sa valeur en ${p}. 1) Donne l'expression de ${F}(x). 2) Convertis ${m} €.`,
           s:`1) ${F}(x) = ${nbr(t)}x.\n2) ${F}(${m}) = ${nbr(t)} × ${m} ${E.signe} ${E.txt} ${p}${E.note}.` }; } },
{ d:"F", g(){ const [s,p,[e,c]]=pick(DEVISES),t=Dc(e,c),m=ri(20,900);
  const E=euros(mulR(t,I(m)));
  return { q:`Un euro vaut ${nbr(t)} ${accord(t,s,p)}. Combien obtient-on avec ${m} € ?`,
           s:`${nbr(t)} × ${m} ${E.signe} ${E.txt} ${p}${E.note}.` }; } },
{ d:"F", g(){ const [s,p,[e,c]]=pick(DEVISES),t=Dc(e,c);
  return { q:`Un euro vaut ${nbr(t)} ${accord(t,s,p)}. La conversion des euros vers les ${p} est-elle une situation de proportionnalité ? Donne son coefficient.`,
           s:`Oui : chaque euro donne toujours ${nbr(t)} ${accord(t,s,p)}, donc le montant converti est proportionnel au montant de départ. Le coefficient est ${nbr(t)}, et la fonction est x ↦ ${nbr(t)}x.` }; } },
{ d:"M", g(){ const [s,p,[e,c]]=pick(DEVISES),t=Dc(e,c),m=ri(50,2000);
  const v=divR(I(m),t),E=euros(v);
  return { q:`Un euro vaut ${nbr(t)} ${accord(t,s,p)}. Combien d'euros faut-il pour obtenir ${m} ${p} ?`,
           s:`On cherche l'antécédent de ${m} : ${nbr(t)}x = ${m}, donc x = ${m} ÷ ${nbr(t)} ${E.signe} ${E.txt} €${E.note}.\nOn DIVISE par le taux pour revenir aux euros.` }; } },
{ d:"M", g(){ const [s,p,[e,c]]=pick(DEVISES),t=Dc(e,c),m1=ri(50,500),m2=ri(50,500);
  const E1=euros(mulR(t,I(m1))),E2=euros(mulR(t,I(m2)));
  return { q:`Un euro vaut ${nbr(t)} ${accord(t,s,p)}. Convertis ${m1} € puis ${m2} €.`,
           s:`${m1} € : ${nbr(t)} × ${m1} ${E1.signe} ${E1.txt} ${p}${E1.note}.\n${m2} € : ${nbr(t)} × ${m2} ${E2.signe} ${E2.txt} ${p}${E2.note}.` }; } },
{ d:"M", g(){ const [s,p,[e,c]]=pick(DEVISES),t=Dc(e,c),m=ri(20,300);
  const E=euros(mulR(t,I(m*2)));
  return { q:`Un euro vaut ${nbr(t)} ${accord(t,s,p)}. Sachant que ${m} € donnent ${euros(mulR(t,I(m))).txt} ${p}, combien donnent ${m*2} € ? Réponds sans repasser par le taux.`,
           s:`Le double d'un montant donne le double en ${p} : c'est une situation de proportionnalité.\n2 × ${euros(mulR(t,I(m))).txt} ${E.signe} ${E.txt} ${p}.` }; } },
{ d:"D", g(){ const [s,p,[e,c]]=pick(DEVISES),t=Dc(e,c),m=ri(100,900),F=pick(LETTRES);
  const v=mulR(t,I(m)),E=euros(v),retour=euros(divR(v,t));
  return { q:`Un euro vaut ${nbr(t)} ${accord(t,s,p)}. On convertit ${m} € en ${p}, puis on reconvertit la somme obtenue en euros. Que retrouve-t-on ? Justifie.`,
           s:`Aller : ${nbr(t)} × ${m} ${E.signe} ${E.txt} ${p}.\nRetour : on divise par ${nbr(t)}, ce qui redonne ${retour.txt} €.\nMultiplier par ${nbr(t)} puis diviser par ${nbr(t)} ramène au point de départ : les deux fonctions linéaires sont réciproques, leurs coefficients sont inverses l'un de l'autre.` }; } },
{ d:"D", g(){ const [s,p,[e,c]]=pick(DEVISES),t=Dc(e,c),m=ri(200,2000);
  const v=divR(I(m),t),E=euros(v);
  return { q:`Un euro vaut ${nbr(t)} ${accord(t,s,p)}. Un article est affiché ${m} ${p}. Donne son prix en euros, arrondi au centime.`,
           s:`${m} ÷ ${nbr(t)} ${E.signe} ${E.txt} €${E.note}.` }; } },
{ d:"D", g(){ const [s,p,[e,c]]=pick(DEVISES),t=Dc(e,c),m=ri(100,800); const el=pick(PRENOMS);
  const juste=euros(divR(I(m),t)),faux=euros(mulR(t,I(m)));
  return { q:`Un euro vaut ${nbr(t)} ${accord(t,s,p)}. ${el} veut convertir ${m} ${p} en euros et multiplie par ${nbr(t)}, ce qui donne ${faux.txt}. Explique son erreur.`,
           s:`On multiplie par ${nbr(t)} pour aller des euros vers les ${p}. Dans l'autre sens, il faut DIVISER.\n${m} ÷ ${nbr(t)} ${juste.signe} ${juste.txt} €${juste.note}.\n${t[0]>t[1]?`Un contrôle rapide : comme un euro vaut plus d'un ${s}, le montant en euros doit être PLUS PETIT que ${m}.`:`Un contrôle rapide : comme un euro vaut moins d'un ${s}, le montant en euros doit être PLUS GRAND que ${m}.`}` }; } },
{ d:"D", g(){ const [s,p,[e,c]]=pick(DEVISES),t1=Dc(e,c),h=ri(2,9),t2=R(t1[0]*t1[1]+0,t1[1]);
  const t2b=R(t1[0]*100+h,t1[1]*100),m=ri(200,900);
  const E1=euros(mulR(t1,I(m))),E2=euros(mulR(t2b,I(m)));
  return { q:`Le taux passe de ${nbr(t1)} à ${nbr(t2b)} ${p} pour un euro. Quel écart cela fait-il sur une conversion de ${m} € ?`,
           s:`Avant : ${nbr(t1)} × ${m} ${E1.signe} ${E1.txt} ${p}.\nAprès : ${nbr(t2b)} × ${m} ${E2.signe} ${E2.txt} ${p}.\nÉcart : ${euros(mulR(R(t2b[0]*t1[1]-t1[0]*t2b[1],t1[1]*t2b[1]),I(m))).txt} ${p}.` }; } },
{ d:"D", g(){ const [s,p,[e,c]]=pick(DEVISES),t=Dc(e,c),F=pick(LETTRES);
  return { q:`Un euro vaut ${nbr(t)} ${accord(t,s,p)}. On note ${F} la conversion des euros vers les ${p}. Quelle fonction décrit la conversion inverse ? Quel est le lien entre les deux coefficients ?`,
           s:`${F}(x) = ${nbr(t)}x, donc la conversion inverse est x ↦ x ÷ ${nbr(t)}, c'est-à-dire la fonction linéaire de coefficient ${nbr(divR(I(1),t))}.\nLes deux coefficients sont inverses l'un de l'autre : leur produit vaut 1.` }; } },
];

FAMILLES["Reconnaître une fonction linéaire"] = [
{ d:"F", g(){ const a=ri(2,9),b=ri(1,9),c=ri(2,9);
  return { q:`Parmi f(x) = ${nb(-a)}x et g(x) = ${c}x + ${b}, laquelle est linéaire ? Pourquoi ?`,
           s:`C'est f. Une fonction linéaire s'écrit ax : ici f(x) = ${nb(-a)}x avec a = ${nb(-a)}.\ng possède le terme constant + ${b}, elle est affine mais pas linéaire (g(0) = ${b} ≠ 0).` }; } },
{ d:"F", g(){ const a=ri(2,9),b=ri(1,9);
  return { q:`La fonction définie par f(x) = ${a}x ${pick(["+","−"])} ${b} est-elle linéaire ? Justifie.`,
           s:`Non : elle comporte un terme constant, donc f(0) ≠ 0. Elle est affine mais pas linéaire. Seules les fonctions de la forme ax sont linéaires.` }; } },
{ d:"F", g(){ const a=ri(2,9);
  return { q:`La fonction définie par f(x) = ${a}x est-elle linéaire ? Quel est son coefficient ?`,
           s:`Oui, elle est de la forme ax. Son coefficient est ${a}.` }; } },
{ d:"M", g(){ const k=ri(2,9);
  return { q:`La fonction définie par f(x) = x/${k} est-elle linéaire ?`,
           s:`Oui. Diviser par ${k}, c'est multiplier par ${nbr(R(1,k))} : f(x) = ${nbr(R(1,k))}x. Elle est linéaire, de coefficient ${nbr(R(1,k))}.` }; } },
{ d:"M", g(){ const k=ri(2,9);
  return { q:`La fonction définie par f(x) = ${k}/x est-elle linéaire ?`,
           s:`Non. Ici x est au dénominateur : on ne multiplie pas x par un nombre fixe. De plus f(0) n'existe même pas. Ce n'est pas une fonction linéaire.` }; } },
{ d:"M", g(){ const a=ri(2,9),k1=ri(2,5),k2=ri(6,12);
  return { q:`Un tableau donne f(${k1}) = ${a*k1} et f(${k2}) = ${a*k2}. Cette fonction peut-elle être linéaire ?`,
           s:`${a*k1} ÷ ${k1} = ${a} et ${a*k2} ÷ ${k2} = ${a} : les quotients image ÷ antécédent sont égaux.\nLa situation est proportionnelle : f peut être linéaire, de coefficient ${a}.` }; } },
{ d:"M", g(){ const a=ri(2,9),k1=ri(2,5),k2=ri(6,12),e=ri(1,6);
  return { q:`Un tableau donne f(${k1}) = ${a*k1} et f(${k2}) = ${a*k2+e}. Cette fonction peut-elle être linéaire ?`,
           s:`${a*k1} ÷ ${k1} = ${a} mais ${a*k2+e} ÷ ${k2} = ${nbr(R(a*k2+e,k2))}.\nLes quotients diffèrent : la situation n'est pas proportionnelle, f n'est pas linéaire.` }; } },
{ d:"D", g(){ const a=ri(2,9),b=ri(1,9),k=ri(2,9);
  return { q:`Trie ces fonctions en linéaires et non linéaires : f(x) = ${a}x, g(x) = x², h(x) = x/${k}, u(x) = ${b}x ${pick(["+","−"])} ${b}.`,
           s:`Linéaires : f (coefficient ${a}) et h (coefficient ${nbr(R(1,k))}, car x/${k} = ${nbr(R(1,k))}x).\nNon linéaires : g, car x n'est pas multiplié par un nombre fixe ; u, à cause du terme constant.` }; } },
{ d:"D", g(){ const a=ri(2,6),b=ri(1,9);
  return { q:`La fonction définie par f(x) = ${a}(x + ${b}) est-elle linéaire ? Et g(x) = ${a}(${b}x) ?`,
           s:`f : on développe, f(x) = ${a}x + ${a*b}. Le terme constant ${a*b} l'empêche d'être linéaire (elle est affine).\ng : g(x) = ${a*b}x, elle EST linéaire, de coefficient ${a*b}.` }; } },
{ d:"D", g(){ const a=ri(2,9);
  return { q:`Une droite passe par l'origine et par le point A(1 ; ${a}). Représente-t-elle une fonction linéaire ? Laquelle ?`,
           s:`Oui : une droite passant par l'origine est la représentation d'une fonction linéaire.\nLe coefficient se lit sur A : a = ${a} ÷ 1 = ${a}, donc f(x) = ${a}x.` }; } },
{ d:"D", g(){ const b=ri(1,9),a=ri(2,9);
  return { q:`Une droite passe par les points B(0 ; ${b}) et C(1 ; ${a+b}). Représente-t-elle une fonction linéaire ?`,
           s:`Non. Elle coupe l'axe des ordonnées en ${b}, donc f(0) = ${b} ≠ 0 : elle ne passe pas par l'origine.\nC'est la représentation d'une fonction affine, f(x) = ${a}x + ${b}.` }; } },
{ d:"D", g(){ const el=pick(PRENOMS),k=ri(2,9);
  return { q:`${el} affirme que toute fonction vérifiant f(0) = 0 est linéaire. A-t-il raison ?`,
           s:`Non. La condition f(0) = 0 est nécessaire mais pas suffisante. Par exemple f(x) = x² vérifie f(0) = 0 sans être linéaire : f(1) = 1 et f(2) = 4, or 1 ÷ 1 = 1 et 4 ÷ 2 = 2, les quotients diffèrent.` }; } },
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
  console.log(`Total : ${total} énoncés sur ${lignes.length} famille(s). La famille « Cours » est exclue.`);
  process.exit(0);
}

(async () => {
  const { Pool } = require("pg");
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%onction%' ORDER BY id`);
  const rows = brut.filter(r => { const c = cle(r.chapitre); return c.includes("lineaire") && c.includes("fonction"); });
  if (!rows.length) { console.log("Chapitre introuvable."); await pool.end(); return; }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(rows, "chapitre", "Fonction linéaire");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  const parFam = new Map();
  rows.forEach(r => { if (!r.famille) return; const k = cle(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

  const vus = new Set(rows.map(r => cle(r.content)));
  const aInserer = [], rapport = [], inconnues = [];
  const CANON = {}; Object.keys(FAMILLES).forEach(f => { CANON[cle(f)] = f; });

  for (const [k, g] of parFam) {
    if (EXCLUES.includes(k)) { rapport.push({ famille: g.nom, avant: g.items.length, ajoutes: 0, apres: g.items.length, note: "exclue" }); continue; }
    const canon = CANON[k];
    if (!canon) { inconnues.push(g.nom); continue; }
    const dej = { F: 0, M: 0, D: 0 };
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M" : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919);
    const neufs = genererFamille(canon, besoinsDepuis(dej), vus);
    const mod = { level: maj(g.items, "level", "college"), subject: maj(g.items, "subject", "Analyse"),
                  classe: maj(g.items, "classe", "3ème"), type: maj(g.items, "type", "exercice") };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content, solution: e.solution,
      difficulty: LIBELLE[e.d], level: mod.level, subject: mod.subject, classe: mod.classe,
      chapitre: CHAPITRE, type: mod.type, famille: g.nom }); });
    rapport.push({ famille: g.nom, avant: g.items.length, ajoutes: neufs.length, apres: g.items.length + neufs.length, note: mod.type });
  }
  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));
  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`lineaire-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : lineaire-avant-generation-${stamp}.json`);
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
