/* MathBase — generer-affine.js
   Chapitre « Fonction affine » : 100 exercices par famille d'EXERCICES.

   EXCLUSIONS :
     · « Cours » — pas d'objectif chiffré, traitée par cours-affine.js ;
     · toute famille de type « probleme » (ici « Le forfait téléphonique »),
       conformément à la consigne « se limiter aux exercices ».
     L'exclusion des problèmes se fait sur le TYPE lu en base, pas sur une
     liste de noms : une future famille-problème sera écartée d'elle-même.

   Arithmétique rationnelle exacte (PGCD, jamais de flottant) : les fonctions
   affines produisent souvent des antécédents et des coefficients directeurs
   fractionnaires (3x + 7 = 10 donne 1, mais 3x + 7 = 9 donne 2/3). Chaque
   résultat est calculé, puis écrit en décimal quand c'est exact, en fraction
   irréductible sinon.

   · 20 faciles / 30 moyens / 50 difficiles par famille.
   · Tirage déterministe + déduplication : rejouable sans doublon.

   Usage :
     node generer-affine.js --apercu
     node generer-affine.js --apercu "Identifier a et b"
     $env:DATABASE_URL = "postgresql://..."
     node generer-affine.js            # simulation
     node generer-affine.js --execute  # applique
   Options : --cible N (100) · --graine N (20260802) · --inclure-problemes
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const INCLURE_PB = ARGS.includes("--inclure-problemes");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260802);
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };
const EXCLUES = ["cours"];

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];

/* ══ rationnels exacts ══ */
const pgcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };
function R(n, d) { if (d < 0) { n = -n; d = -d; } const g = pgcd(n, d); return [n / g, d / g]; }
const I  = n => [n, 1];
const addR = (x, y) => R(x[0] * y[1] + y[0] * x[1], x[1] * y[1]);
const subR = (x, y) => R(x[0] * y[1] - y[0] * x[1], x[1] * y[1]);
const mulR = (x, y) => R(x[0] * y[0], x[1] * y[1]);
const divR = (x, y) => R(x[0] * y[1], x[1] * y[0]);
const negR = x => [-x[0], x[1]];
const absR = x => [Math.abs(x[0]), x[1]];
const egal = (x, y) => x[0] * y[1] === y[0] * x[1];
const estNul = x => x[0] === 0;
const cmpR = (x, y) => x[0] * y[1] - y[0] * x[1];

const nb = n => String(n).replace("-", "\u2212");
function estDec(d) { while (d % 2 === 0) d /= 2; while (d % 5 === 0) d /= 5; return d === 1; }
function nbr(x) {
  const [n, d] = R(x[0], x[1]);
  if (d === 1) return nb(n);
  if (estDec(d)) return String(Number((n / d).toFixed(10))).replace(".", ",").replace("-", "\u2212");
  return `${nb(n)}/${d}`;
}
/* parenthèses autour d'un négatif, pour les insertions dans un calcul */
const parR = x => x[0] < 0 ? `(${nbr(x)})` : nbr(x);
const parN = n => n < 0 ? `(${nb(n)})` : nb(n);
const signeDe = x => x[0] < 0 ? "\u2212" : "+";

/* écriture de ax + b */
function expr(a, b) {
  let ta;
  if (egal(a, I(1))) ta = "x";
  else if (egal(a, I(-1))) ta = "\u2212x";
  else if (estNul(a)) ta = "";
  else ta = `${nbr(a)}x`;
  if (estNul(a)) return nbr(b);
  if (estNul(b)) return ta;
  return `${ta} ${signeDe(b)} ${nbr(absR(b))}`;
}

/* image d'un entier n, avec les étapes */
function image(F, a, b, n) {
  const prod = mulR(a, I(n)), v = addR(prod, b);
  if (estNul(b)) return { v, s: `${F}(${nb(n)}) = ${nbr(a)} × ${parN(n)} = ${nbr(v)}` };
  const l1 = `${F}(${nb(n)}) = ${nbr(a)} × ${parN(n)} ${signeDe(b)} ${nbr(absR(b))}`;
  return { v, s: `${l1} = ${nbr(prod)} ${signeDe(b)} ${nbr(absR(b))} = ${nbr(v)}` };
}
/* antécédent de y, avec les étapes */
function antecedent(F, a, b, y) {
  const num = subR(y, b), x = divR(num, a);
  const s = `On résout ${F}(x) = ${nbr(y)}, c'est-à-dire ${expr(a, b)} = ${nbr(y)}.\n`
    + `${nbr(a)}x = ${nbr(y)} ${b[0] >= 0 ? "\u2212" : "+"} ${nbr(absR(b))} = ${nbr(num)}\n`
    + `x = ${nbr(num)} ÷ ${parR(a)} = ${nbr(x)}\n`
    + `L'antécédent de ${nbr(y)} par ${F} est ${nbr(x)}.`;
  return { x, s };
}

const LETTRES = ["f", "g", "h", "u", "v", "p"];
const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];
/* coefficient directeur non nul, ordonnée à l'origine non nulle par défaut */
const tirA = () => pick([-9,-8,-7,-6,-5,-4,-3,-2,2,3,4,5,6,7,8,9]);
const tirB = () => { const b = ri(-12, 12); return b === 0 ? pick([3,-4,5,-7]) : b; };

/* ══════════ FAMILLES ══════════ */
const FAMILLES = {};

FAMILLES["Identifier a et b"] = [
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB();
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Donne le coefficient directeur et l'ordonnée à l'origine.`,
           s:`Coefficient directeur : a = ${nb(a)}.\nOrdonnée à l'origine : b = ${nb(b)}.` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB();
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Que vaut ${F}(0) ?`,
           s:`${F}(0) = ${nb(a)} × 0 ${signeDe(I(b))} ${nb(Math.abs(b))} = ${nb(b)}.\nL'image de 0 est toujours l'ordonnée à l'origine.` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB();
  return { q:`Pour ${F}(x) = ${expr(I(a),I(b))}, identifie a et b.`,
           s:`a = ${nb(a)} et b = ${nb(b)}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirA(),b=tirB();
  return { q:`Soit ${F}(x) = ${nb(b)} ${a<0?"\u2212":"+"} ${Math.abs(a)}x. Donne le coefficient directeur et l'ordonnée à l'origine.`,
           s:`On réordonne : ${F}(x) = ${expr(I(a),I(b))}.\nCoefficient directeur : a = ${nb(a)}. Ordonnée à l'origine : b = ${nb(b)}.\nL'ordre d'écriture ne change rien : a est toujours le nombre qui multiplie x.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirA();
  return { q:`Soit ${F}(x) = ${expr(I(a),I(0))}. Donne a et b. Cette fonction a-t-elle une particularité ?`,
           s:`a = ${nb(a)} et b = 0.\nComme b = 0, ${F} est une fonction LINÉAIRE : sa droite passe par l'origine.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),b=tirB();
  return { q:`Soit ${F}(x) = ${nb(b)}. Cette fonction est-elle affine ? Donne a et b.`,
           s:`Oui, avec a = 0 et b = ${nb(b)}.\nC'est une fonction CONSTANTE : sa représentation est une droite horizontale.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=pick([2,3,4,5,6]),c=ri(1,9);
  return { q:`Soit ${F}(x) = ${a}(x + ${c}). Développe, puis donne le coefficient directeur et l'ordonnée à l'origine.`,
           s:`${a}(x + ${c}) = ${a}x + ${a*c}.\nCoefficient directeur : a = ${a}. Ordonnée à l'origine : b = ${a*c}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),k=pick([2,4,5]);
  return { q:`Soit ${F}(x) = (${expr(I(a),I(b))}) ÷ ${k}. Donne le coefficient directeur et l'ordonnée à l'origine.`,
           s:`On divise chaque terme par ${k} : ${F}(x) = ${expr(R(a,k),R(b,k))}.\nCoefficient directeur : a = ${nbr(R(a,k))}. Ordonnée à l'origine : b = ${nbr(R(b,k))}.` }; } },
{ d:"D", g(){ const a=tirA(),b1=tirB(); let b2=tirB(); if(b2===b1) b2=b1+ri(1,5);
  return { q:`On donne f(x) = ${expr(I(a),I(b1))} et g(x) = ${expr(I(a),I(b2))}. Que peut-on dire de leurs représentations graphiques ?`,
           s:`Les deux ont le même coefficient directeur ${nb(a)} : leurs droites sont PARALLÈLES.\nElles sont distinctes car les ordonnées à l'origine diffèrent (${nb(b1)} et ${nb(b2)}) : elles coupent l'axe des ordonnées en deux points différents.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB();
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. La fonction est-elle croissante ou décroissante ? Justifie.`,
           s:`Le coefficient directeur vaut ${nb(a)}, ${a>0?"positif":"négatif"} : la fonction est ${a>0?"CROISSANTE":"DÉCROISSANTE"}.\nSeul le signe de a intervient ; l'ordonnée à l'origine ${nb(b)} n'a aucune influence sur le sens de variation.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(); const el=pick(PRENOMS);
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. ${el} annonce que le coefficient directeur est ${nb(b)}. Explique son erreur.`,
           s:`${el} a confondu les deux nombres. Le coefficient directeur est celui qui MULTIPLIE x, soit ${nb(a)} ; ${nb(b)} est l'ordonnée à l'origine, c'est-à-dire ${F}(0).` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB();
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Donne les coordonnées du point où sa droite coupe l'axe des ordonnées. Cette droite passe-t-elle par l'origine ?`,
           s:`Le point a pour coordonnées (0 ; ${nb(b)}), puisque ${F}(0) = ${nb(b)}.\nComme ${nb(b)} ≠ 0, la droite ne passe PAS par l'origine : ${F} est affine mais pas linéaire.` }; } },
];

FAMILLES["Calculer des images"] = [
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),n=ri(2,9);
  return { q:`Avec ${F}(x) = ${expr(I(a),I(b))}, calcule ${F}(0) et ${F}(${n}).`,
           s:`${F}(0) = ${nb(b)}.\n${image(F,I(a),I(b),n).s}` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),n=ri(2,12);
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Calcule ${F}(${n}).`, s:image(F,I(a),I(b),n).s }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),n=ri(1,9);
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Quelle est l'image de ${n} par ${F} ?`,
           s:`${image(F,I(a),I(b),n).s}\nL'image de ${n} est ${nbr(addR(mulR(I(a),I(n)),I(b)))}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),n=ri(-9,-1);
  return { q:`Avec ${F}(x) = ${expr(I(a),I(b))}, calcule ${F}(${nb(n)}).`,
           s:`${image(F,I(a),I(b),n).s}\nAttention aux signes : on multiplie ${nb(a)} par ${parN(n)}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),xs=[ri(-5,-2),0,ri(1,6)];
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Complète le tableau de valeurs pour x = ${xs.map(nb).join(" ; ")}.`,
           s:xs.map(x=>`${F}(${nb(x)}) = ${nbr(addR(mulR(I(a),I(x)),I(b)))}`).join(" · ")+"." }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=pick([2,4,6,8,-2,-4,-6]),b=tirB(),n=pick([R(1,2),R(3,2),R(5,2),R(1,4)]);
  const v=addR(mulR(I(a),n),I(b));
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Calcule ${F}(${nbr(n)}).`,
           s:`${F}(${nbr(n)}) = ${nb(a)} × ${nbr(n)} ${signeDe(I(b))} ${nb(Math.abs(b))} = ${nbr(mulR(I(a),n))} ${signeDe(I(b))} ${nb(Math.abs(b))} = ${nbr(v)}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),n=ri(1,5),m=ri(6,12);
  const v1=addR(mulR(I(a),I(n)),I(b)),v2=addR(mulR(I(a),I(m)),I(b));
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Calcule ${F}(${n}) et ${F}(${m}), puis compare-les.`,
           s:`${image(F,I(a),I(b),n).s}\n${image(F,I(a),I(b),m).s}\n${nbr(v1)} ${cmpR(v1,v2)>0?">":"<"} ${nbr(v2)} : la fonction est ${a>0?"croissante, la plus grande image correspond au plus grand nombre":"décroissante, la plus grande image correspond au plus petit nombre"}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),n=ri(1,8);
  const v1=addR(mulR(I(a),I(n)),I(b)),v2=addR(mulR(I(a),I(n+1)),I(b));
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Calcule ${F}(${n}) et ${F}(${n+1}). De combien l'image varie-t-elle quand x augmente de 1 ?`,
           s:`${F}(${n}) = ${nbr(v1)} et ${F}(${n+1}) = ${nbr(v2)}.\nVariation : ${nbr(v2)} \u2212 ${nbr(v1)} = ${nbr(subR(v2,v1))}, c'est-à-dire le coefficient directeur ${nb(a)}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),n=ri(1,9),ecart=pick([1,2,3,-1,-2]);
  const v=addR(mulR(I(a),I(n)),I(b));
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Le point A(${n} ; ${nbr(addR(v,I(ecart)))}) appartient-il à la droite de ${F} ?`,
           s:`${image(F,I(a),I(b),n).s}\nLe point de la droite d'abscisse ${n} a pour ordonnée ${nbr(v)}, or A a pour ordonnée ${nbr(addR(v,I(ecart)))}.\nComme ${nbr(v)} ≠ ${nbr(addR(v,I(ecart)))}, A n'appartient PAS à la droite.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),n=ri(2,6);
  const v1=addR(mulR(I(a),I(n)),I(b)),v2=addR(mulR(I(a),I(2*n)),I(b));
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Calcule ${F}(${n}) et ${F}(${2*n}). L'image double-t-elle quand le nombre double ?`,
           s:`${F}(${n}) = ${nbr(v1)} et ${F}(${2*n}) = ${nbr(v2)}.\n2 × ${nbr(v1)} = ${nbr(mulR(I(2),v1))} ≠ ${nbr(v2)} : l'image NE double PAS.\nL'écart vaut exactement ${nb(b)}, l'ordonnée à l'origine : c'est elle qui empêche la proportionnalité.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),n=ri(-9,-2); const el=pick(PRENOMS);
  const juste=addR(mulR(I(a),I(n)),I(b)), faux=addR(mulR(I(a),I(-n)),I(b));
  if(egal(juste,faux)) return null;
  return { q:`Avec ${F}(x) = ${expr(I(a),I(b))}, ${el} calcule ${F}(${nb(n)}) et trouve ${nbr(faux)}. Explique son erreur.`,
           s:`${el} a perdu le signe moins : il a calculé ${F}(${-n}) au lieu de ${F}(${nb(n)}).\n${image(F,I(a),I(b),n).s}` }; } },
{ d:"D", g(){ const F=pick(LETTRES),an=ri(1,5),ad=pick([2,3,4,5]),b=tirB(),k=ri(1,6);
  if(pgcd(an,ad)!==1) return null;
  const a=[an,ad],n=ad*k;
  return { q:`Soit ${F}(x) = ${expr(a,I(b))}. Calcule ${F}(${n}).`,
           s:`${F}(${n}) = ${nbr(a)} × ${n} ${signeDe(I(b))} ${nb(Math.abs(b))} = ${nbr(mulR(a,I(n)))} ${signeDe(I(b))} ${nb(Math.abs(b))} = ${nbr(addR(mulR(a,I(n)),I(b)))}.\nOn a choisi un multiple de ${ad} pour que le produit tombe juste.` }; } },
];

FAMILLES["Antécédent par une fonction affine"] = [
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),k=ri(1,9);
  const y=addR(mulR(I(a),I(k)),I(b));
  return { q:`Avec ${F}(x) = ${expr(I(a),I(b))}, détermine l'antécédent de ${nbr(y)}.`,
           s:antecedent(F,I(a),I(b),y).s }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB();
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Quel nombre a pour image ${nb(b)} ?`,
           s:`${antecedent(F,I(a),I(b),I(b)).s}\nC'est cohérent : ${F}(0) = ${nb(b)}, l'ordonnée à l'origine est l'image de 0.` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),k=ri(2,9);
  const y=addR(mulR(I(a),I(k)),I(b));
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Résous l'équation ${F}(x) = ${nbr(y)}.`,
           s:antecedent(F,I(a),I(b),y).s }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),k=ri(-9,-1);
  const y=addR(mulR(I(a),I(k)),I(b));
  return { q:`Avec ${F}(x) = ${expr(I(a),I(b))}, détermine l'antécédent de ${nbr(y)}.`,
           s:antecedent(F,I(a),I(b),y).s }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirA(),b=tirB();
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Détermine l'antécédent de 0.`,
           s:`${antecedent(F,I(a),I(b),I(0)).s}\nGraphiquement, c'est l'abscisse du point où la droite coupe l'axe des abscisses.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),k=ri(1,9);
  const y=addR(mulR(I(a),I(k)),I(b));
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Détermine l'antécédent de ${nbr(y)}, puis vérifie en calculant son image.`,
           s:`${antecedent(F,I(a),I(b),y).s}\nVérification : ${image(F,I(a),I(b),k).s}` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),y=I(ri(-15,15));
  const x=divR(subR(y,I(b)),I(a));
  if(x[1]===1) return null;
  return { q:`Avec ${F}(x) = ${expr(I(a),I(b))}, détermine l'antécédent de ${nbr(y)}.`,
           s:`${antecedent(F,I(a),I(b),y).s}\nL'antécédent n'est pas entier : on ${estDec(x[1])?"donne son écriture décimale":"le laisse en fraction irréductible"}.` }; } },
{ d:"D", g(){ const a1=tirA(),b1=tirB(); let a2=tirA(); if(a2===a1) a2=a1+pick([1,-1,2]);
  const b2=tirB(); if(a1===a2) return null;
  const x=divR(subR(I(b2),I(b1)),I(a1-a2));
  return { q:`On donne f(x) = ${expr(I(a1),I(b1))} et g(x) = ${expr(I(a2),I(b2))}. Pour quelle valeur de x ces deux fonctions ont-elles la même image ?`,
           s:`On résout f(x) = g(x) : ${expr(I(a1),I(b1))} = ${expr(I(a2),I(b2))}.\n${nb(a1)}x ${a2<0?"+":"\u2212"} ${Math.abs(a2)}x = ${nb(b2)} ${b1>=0?"\u2212":"+"} ${Math.abs(b1)}, soit ${nb(a1-a2)}x = ${nb(b2-b1)}.\nx = ${nb(b2-b1)} ÷ ${nb(a1-a2)} = ${nbr(x)}.\nVérification : f(${nbr(x)}) = ${nbr(addR(mulR(I(a1),x),I(b1)))} et g(${nbr(x)}) = ${nbr(addR(mulR(I(a2),x),I(b2)))}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),k=ri(1,9); const el=pick(PRENOMS);
  const y=addR(mulR(I(a),I(k)),I(b));
  const faux=addR(mulR(I(a),y),I(b));
  return { q:`Avec ${F}(x) = ${expr(I(a),I(b))}, ${el} cherche l'antécédent de ${nbr(y)} et calcule ${F}(${nbr(y)}) = ${nbr(faux)}. Explique son erreur.`,
           s:`${el} a calculé une IMAGE alors qu'on demandait un ANTÉCÉDENT. Chercher un antécédent, c'est résoudre une équation.\n${antecedent(F,I(a),I(b),y).s}` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=pick([-9,-8,-7,-6,-5,-4,-3,-2]),b=tirB(),k=ri(1,9);
  const y=addR(mulR(I(a),I(k)),I(b));
  return { q:`Avec ${F}(x) = ${expr(I(a),I(b))}, détermine l'antécédent de ${nbr(y)}.`,
           s:`${antecedent(F,I(a),I(b),y).s}\nAttention : on divise par un coefficient négatif.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),n=ri(1,9);
  const v=addR(mulR(I(a),I(n)),I(b));
  return { q:`Soit ${F}(x) = ${expr(I(a),I(b))}. Calcule ${F}(${n}), puis détermine l'antécédent du résultat obtenu.`,
           s:`${image(F,I(a),I(b),n).s}\n${antecedent(F,I(a),I(b),v).s}\nOn retrouve le nombre de départ : image et antécédent sont deux lectures de la même égalité.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),an=ri(1,5),ad=pick([2,3,4]),b=tirB(),k=ri(1,6);
  if(pgcd(an,ad)!==1) return null;
  const a=[an,ad],y=addR(mulR(a,I(ad*k)),I(b));
  return { q:`Soit ${F}(x) = ${expr(a,I(b))}. Détermine l'antécédent de ${nbr(y)}.`,
           s:antecedent(F,a,I(b),y).s }; } },
];

FAMILLES["Déterminer une fonction affine"] = [
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),x1=ri(2,9);
  const y1=addR(mulR(I(a),I(x1)),I(b));
  return { q:`${F} est une fonction affine telle que ${F}(0) = ${nb(b)} et ${F}(${x1}) = ${nbr(y1)}. Détermine ${F}(x).`,
           s:`${F}(0) donne directement l'ordonnée à l'origine : b = ${nb(b)}.\nPuis ${F}(${x1}) = ${nbr(y1)} donne a × ${x1} ${signeDe(I(b))} ${nb(Math.abs(b))} = ${nbr(y1)}, soit a × ${x1} = ${nbr(subR(y1,I(b)))} et a = ${nb(a)}.\nDonc ${F}(x) = ${expr(I(a),I(b))}.` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),x1=ri(1,9);
  const y1=addR(mulR(I(a),I(x1)),I(b));
  return { q:`${F} est affine, de coefficient directeur ${nb(a)}, et ${F}(${x1}) = ${nbr(y1)}. Détermine ${F}(x).`,
           s:`${F}(x) = ${nb(a)}x + b. On reporte : ${nb(a)} × ${x1} + b = ${nbr(y1)}, soit ${nbr(mulR(I(a),I(x1)))} + b = ${nbr(y1)}.\nDonc b = ${nbr(y1)} ${mulR(I(a),I(x1))[0]>=0?"\u2212":"+"} ${nbr(absR(mulR(I(a),I(x1))))} = ${nb(b)}.\nDonc ${F}(x) = ${expr(I(a),I(b))}.` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirA(),b=tirB();
  return { q:`${F} est affine, ${F}(0) = ${nb(b)} et ${F}(1) = ${nb(a+b)}. Détermine ${F}(x).`,
           s:`b = ${F}(0) = ${nb(b)}.\nQuand x augmente de 1, l'image varie de a : a = ${nb(a+b)} ${b>=0?"\u2212":"+"} ${Math.abs(b)} = ${nb(a)}.\nDonc ${F}(x) = ${expr(I(a),I(b))}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),x1=ri(1,4),x2=ri(5,10);
  const y1=addR(mulR(I(a),I(x1)),I(b)),y2=addR(mulR(I(a),I(x2)),I(b));
  return { q:`${F} est une fonction affine telle que ${F}(${x1}) = ${nbr(y1)} et ${F}(${x2}) = ${nbr(y2)}. Détermine ${F}(x).`,
           s:`a = (${nbr(y2)} \u2212 ${nbr(y1)}) ÷ (${x2} \u2212 ${x1}) = ${nbr(subR(y2,y1))} ÷ ${x2-x1} = ${nb(a)}.\nPuis ${F}(${x1}) = ${nbr(y1)} : ${nb(a)} × ${x1} + b = ${nbr(y1)}, donc b = ${nb(b)}.\nDonc ${F}(x) = ${expr(I(a),I(b))}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),x1=ri(-6,-1),x2=ri(1,6);
  const y1=addR(mulR(I(a),I(x1)),I(b)),y2=addR(mulR(I(a),I(x2)),I(b));
  return { q:`La droite représentant la fonction affine ${F} passe par A(${nb(x1)} ; ${nbr(y1)}) et B(${x2} ; ${nbr(y2)}). Détermine ${F}(x).`,
           s:`a = (${nbr(y2)} \u2212 ${nbr(y1)}) ÷ (${x2} \u2212 ${parN(x1)}) = ${nbr(subR(y2,y1))} ÷ ${x2-x1} = ${nb(a)}.\nAvec B : ${nb(a)} × ${x2} + b = ${nbr(y2)}, donc b = ${nb(b)}.\nDonc ${F}(x) = ${expr(I(a),I(b))}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),x1=ri(2,9);
  const y1=addR(mulR(I(a),I(x1)),I(b));
  return { q:`${F} est affine de coefficient directeur ${nb(a)} et sa droite passe par A(${x1} ; ${nbr(y1)}). Détermine ${F}(x), puis ${F}(0).`,
           s:`${nb(a)} × ${x1} + b = ${nbr(y1)}, donc b = ${nb(b)} et ${F}(x) = ${expr(I(a),I(b))}.\n${F}(0) = ${nb(b)}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),an=ri(1,9),ad=pick([2,3,4,5]),b=tirB(),x1=ri(1,4),x2=x1+ri(1,6);
  if(pgcd(an,ad)!==1) return null;
  const a=[an,ad];
  const y1=addR(mulR(a,I(x1)),I(b)),y2=addR(mulR(a,I(x2)),I(b));
  return { q:`${F} est une fonction affine telle que ${F}(${x1}) = ${nbr(y1)} et ${F}(${x2}) = ${nbr(y2)}. Détermine ${F}(x).`,
           s:`a = (${nbr(y2)} \u2212 ${nbr(y1)}) ÷ (${x2} \u2212 ${x1}) = ${nbr(subR(y2,y1))} ÷ ${x2-x1} = ${nbr(a)}.\nPuis ${nbr(a)} × ${x1} + b = ${nbr(y1)}, donc b = ${nb(b)}.\nDonc ${F}(x) = ${expr(a,I(b))}.\nLe coefficient directeur n'est pas entier, ce qui est parfaitement possible.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),x1=ri(1,4),x2=ri(5,10),n=ri(1,9);
  const y1=addR(mulR(I(a),I(x1)),I(b)),y2=addR(mulR(I(a),I(x2)),I(b));
  return { q:`${F} est affine, ${F}(${x1}) = ${nbr(y1)} et ${F}(${x2}) = ${nbr(y2)}. Détermine ${F}(x), puis calcule ${F}(${n}).`,
           s:`a = ${nbr(subR(y2,y1))} ÷ ${x2-x1} = ${nb(a)}, puis b = ${nb(b)} : ${F}(x) = ${expr(I(a),I(b))}.\n${image(F,I(a),I(b),n).s}` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),x1=ri(1,5);
  const y1=addR(mulR(I(a),I(x1)),I(b)),k=ri(1,9);
  const yc=addR(mulR(I(a),I(k)),I(b));
  return { q:`${F} est affine, ${F}(${x1}) = ${nbr(y1)} et son coefficient directeur vaut ${nb(a)}. Détermine ${F}(x), puis l'antécédent de ${nbr(yc)}.`,
           s:`${nb(a)} × ${x1} + b = ${nbr(y1)}, donc b = ${nb(b)} et ${F}(x) = ${expr(I(a),I(b))}.\n${antecedent(F,I(a),I(b),yc).s}` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b1=tirB(),b=tirB(),x1=ri(2,9);
  const y1=addR(mulR(I(a),I(x1)),I(b));
  return { q:`La droite de ${F} est parallèle à celle de la fonction x ↦ ${expr(I(a),I(b1))} et passe par A(${x1} ; ${nbr(y1)}). Détermine ${F}(x).`,
           s:`Deux droites parallèles ont le même coefficient directeur : a = ${nb(a)}.\nAvec A : ${nb(a)} × ${x1} + b = ${nbr(y1)}, donc b = ${nb(b)}.\nDonc ${F}(x) = ${expr(I(a),I(b))}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),x1=ri(1,4),x2=ri(5,10); const el=pick(PRENOMS);
  const y1=addR(mulR(I(a),I(x1)),I(b)),y2=addR(mulR(I(a),I(x2)),I(b));
  const faux=divR(subR(I(x2),I(x1)),subR(y2,y1));
  return { q:`${F} est affine, ${F}(${x1}) = ${nbr(y1)} et ${F}(${x2}) = ${nbr(y2)}. ${el} calcule a = (${x2} \u2212 ${x1}) ÷ (${nbr(y2)} \u2212 ${nbr(y1)}) = ${nbr(faux)}. Explique son erreur.`,
           s:`${el} a inversé le quotient. Le coefficient directeur est la variation des IMAGES divisée par la variation des ANTÉCÉDENTS.\na = ${nbr(subR(y2,y1))} ÷ ${x2-x1} = ${nb(a)}, puis b = ${nb(b)}.\nDonc ${F}(x) = ${expr(I(a),I(b))}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),x1=ri(1,5),x2=ri(6,11);
  const b=0;
  const y1=mulR(I(a),I(x1)),y2=mulR(I(a),I(x2));
  return { q:`${F} est affine, ${F}(${x1}) = ${nbr(y1)} et ${F}(${x2}) = ${nbr(y2)}. Détermine ${F}(x). Cette fonction a-t-elle une particularité ?`,
           s:`a = ${nbr(subR(y2,y1))} ÷ ${x2-x1} = ${nb(a)}, puis ${nb(a)} × ${x1} + b = ${nbr(y1)} donne b = 0.\nDonc ${F}(x) = ${expr(I(a),I(0))} : comme b = 0, ${F} est en fait LINÉAIRE et sa droite passe par l'origine.` }; } },
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
  console.log(`Total : ${total} énoncés sur ${lignes.length} famille(s).`);
  console.log(`Exclues : « Cours » et les familles de type « probleme ».`);
  process.exit(0);
}

(async () => {
  const { Pool } = require("pg");
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%ffine%' ORDER BY id`);
  const rows = brut.filter(r => cle(r.chapitre).includes("affine"));
  if (!rows.length) { console.log("Chapitre introuvable."); await pool.end(); return; }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(rows, "chapitre", "Fonction affine");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  const parFam = new Map();
  rows.forEach(r => { if (!r.famille) return; const k = cle(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

  const vus = new Set(rows.map(r => cle(r.content)));
  const aInserer = [], rapport = [], inconnues = [];
  const CANON = {}; Object.keys(FAMILLES).forEach(f => { CANON[cle(f)] = f; });

  for (const [k, g] of parFam) {
    const type = maj(g.items, "type", "exercice");
    if (EXCLUES.includes(k)) {
      rapport.push({ famille: g.nom, type, avant: g.items.length, ajoutes: 0, apres: g.items.length, note: "exclue (cours)" }); continue; }
    if (type === "probleme" && !INCLURE_PB) {
      rapport.push({ famille: g.nom, type, avant: g.items.length, ajoutes: 0, apres: g.items.length, note: "exclue (problème)" }); continue; }
    const canon = CANON[k];
    if (!canon) { inconnues.push(g.nom); continue; }
    const dej = { F: 0, M: 0, D: 0 };
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M" : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919);
    const neufs = genererFamille(canon, besoinsDepuis(dej), vus);
    const mod = { level: maj(g.items, "level", "college"), subject: maj(g.items, "subject", "Analyse"),
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
  fs.writeFileSync(`affine-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : affine-avant-generation-${stamp}.json`);
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
