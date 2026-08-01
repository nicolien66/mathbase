/* MathBase — generer-fonctions.js
   Chapitre « Notions de fonctions » : 100 exercices par famille.
   La famille « Cours » est volontairement EXCLUE (pas d'objectif chiffré).

   Même moteur que generer-fractions.js. Les corrigés sont calculés :
   toutes les images, tous les antécédents et toutes les racines carrées
   sont obtenus par le calcul, jamais recopiés. Les paramètres sont choisis
   pour que les résultats tombent juste ; les rares antécédents fractionnaires
   sont écrits sous forme irréductible.

   · 20 faciles / 30 moyens / 50 difficiles par famille.
   · Tirage déterministe + déduplication : rejouable sans doublon.

   Usage :
     node generer-fonctions.js --apercu                      # hors base
     node generer-fonctions.js --apercu "Le tableau mystère"
     $env:DATABASE_URL = "postgresql://..."
     node generer-fonctions.js                               # simulation
     node generer-fonctions.js --execute                     # applique
   Options : --cible N (100) · --graine N (20260731)
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260731);
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };
const EXCLUES = ["cours"];               // familles laissées telles quelles

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];

/* ── écriture des nombres et des expressions ── */
const pgcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };
const nb = n => String(n).replace("-", "\u2212");            // vrai signe moins
const par = n => n < 0 ? `(${nb(n)})` : nb(n);               // parenthèses si négatif
const fr = (n, d) => { if (d < 0) { n = -n; d = -d; } const g = pgcd(n, d); n /= g; d /= g;
  return d === 1 ? nb(n) : `${nb(n)}/${d}`; };
const plus = b => b >= 0 ? `+ ${b}` : `\u2212 ${-b}`;
/* a x + b (a jamais égal à ±1 dans les tirages, pour une écriture nette) */
const affine = (a, b) => b === 0 ? `${nb(a)}x` : `${nb(a)}x ${plus(b)}`;
const carre  = (a, b) => `${a === 1 ? "x²" : `${nb(a)}x²`}${b === 0 ? "" : ` ${plus(b)}`}`;
const LETTRES = ["f", "g", "h", "u", "v", "p"];
const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];

/* tirages : a ∈ ±[2..9] pour éviter « 1x », b ∈ [−12..12] */
const tirA = () => pick([-9,-8,-7,-6,-5,-4,-3,-2,2,3,4,5,6,7,8,9]);
const tirAp = () => ri(2, 9);
const tirB = () => { let b = ri(-12, 12); return b === 0 ? 5 : b; };

/* ── calculs affichés ── */
function imgAffine(F, a, b, n) {
  const v = a * n + b;
  const l1 = `${F}(${nb(n)}) = ${nb(a)} × ${par(n)}${b === 0 ? "" : ` ${plus(b)}`}`;
  const l2 = b === 0 ? `${nb(v)}` : `${nb(a * n)} ${plus(b)} = ${nb(v)}`;
  return { v, s: `${l1} = ${l2}` };
}
function imgCarre(G, a, b, n) {
  const v = a * n * n + b;
  const l1 = `${G}(${nb(n)}) = ${a === 1 ? "" : `${nb(a)} × `}${par(n)}²${b === 0 ? "" : ` ${plus(b)}`}`;
  const car = `${par(n)}² = ${n * n}`;
  return { v, s: `${l1}\nOn calcule d'abord le carré : ${car}${n < 0 ? " (le carré d'un nombre négatif est positif)" : ""}.\n${F0(a, n, b, v)}` };
  function F0(a, n, b, v) {
    const t = a === 1 ? `${n * n}` : `${nb(a)} × ${n * n} = ${nb(a * n * n)}`;
    return b === 0 ? `Donc ${G}(${nb(n)}) = ${nb(v)}.` : `${a === 1 ? "" : t + ", puis "}${nb(a * n * n)} ${plus(b)} = ${nb(v)}. Donc ${G}(${nb(n)}) = ${nb(v)}.`;
  }
}
function antAffine(F, a, b, y) {
  const num = y - b;
  const entier = num % a === 0;
  const x = entier ? num / a : null;
  const s = `On résout ${F}(x) = ${nb(y)}, c'est-à-dire ${affine(a, b)} = ${nb(y)}.\n`
    + `${nb(a)}x = ${nb(y)} ${b >= 0 ? `\u2212 ${b}` : `+ ${-b}`} = ${nb(num)}\n`
    + `x = ${nb(num)} ÷ ${nb(a)} = ${entier ? nb(x) : fr(num, a)}\n`
    + `L'antécédent de ${nb(y)} par ${F} est ${entier ? nb(x) : fr(num, a)}.`;
  return { x: entier ? x : null, txt: entier ? nb(x) : fr(num, a), s };
}

/* ══════════ FAMILLES ══════════ */
const FAMILLES = {};

FAMILLES["Calculer une image"] = [
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(1,9); const r=imgAffine(F,a,b,n);
  return { q:`Soit ${F} la fonction définie par ${F}(x) = ${affine(a,b)}. Calcule ${F}(${n}).`, s:r.s }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(); const r0=imgAffine(F,a,b,0),r1=imgAffine(F,a,b,1);
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Calcule ${F}(0) puis ${F}(1).`, s:`${r0.s}\n${r1.s}` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(2,12); const r=imgAffine(F,a,b,n);
  return { q:`On donne ${F}(x) = ${affine(a,b)}. Quelle est l'image de ${n} par ${F} ?`, s:`${r.s}\nL'image de ${n} est ${nb(r.v)}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(2,9),m=ri(10,20);
  const r1=imgAffine(F,a,b,n),r2=imgAffine(F,a,b,m);
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Calcule ${F}(${n}) et ${F}(${m}).`, s:`${r1.s}\n${r2.s}` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),b=ri(1,9),n=ri(1,9);
  const v=a*(n+b);
  return { q:`Soit ${F}(x) = ${nb(a)}(x + ${b}). Calcule ${F}(${n}).`,
           s:`${F}(${n}) = ${nb(a)} × (${n} + ${b}) = ${nb(a)} × ${n+b} = ${nb(v)}.\nLa parenthèse se calcule en premier.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),xs=[ri(-3,-1),0,ri(1,5)];
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Recopie et complète le tableau de valeurs pour x = ${xs.map(nb).join(" ; ")}.`,
           s:xs.map(x=>`${F}(${nb(x)}) = ${nb(a*x+b)}`).join(" · ")+"." }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(); const r=imgAffine(F,a,b,0);
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Calcule ${F}(0) et explique ce que ce nombre représente sur la courbe de ${F}.`,
           s:`${r.s}\n${F}(0) = ${nb(b)} est l'ordonnée du point d'intersection de la courbe avec l'axe des ordonnées.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(2,9); const r=imgAffine(F,a,b,n);
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Calcule ${F}(${n}), puis dis si le point A(${n} ; ${nb(r.v+ri(1,3))}) appartient à la courbe de ${F}.`,
           s:`${r.s}\nLe point de la courbe d'abscisse ${n} a pour ordonnée ${nb(r.v)}. Comme ${nb(r.v)} ≠ ${nb(r.v+1)}…, il faut comparer : A n'appartient à la courbe que si son ordonnée vaut ${nb(r.v)}. Ici ce n'est pas le cas, donc A n'appartient PAS à la courbe.` }; } },
{ d:"D", g(){ const F="f",G="g",a=tirAp(),b=tirB(),c=tirAp(),e=tirB(),n=ri(1,9);
  const r1=imgAffine(F,a,b,n),r2=imgAffine(G,c,e,n);
  return { q:`On donne ${F}(x) = ${affine(a,b)} et ${G}(x) = ${affine(c,e)}. Compare ${F}(${n}) et ${G}(${n}).`,
           s:`${r1.s}\n${r2.s}\n${r1.v===r2.v?`Les deux images sont égales à ${nb(r1.v)}.`:`${nb(r1.v)} ${r1.v>r2.v?">":"<"} ${nb(r2.v)}, donc ${F}(${n}) ${r1.v>r2.v?">":"<"} ${G}(${n}).`}` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(1,9)*5/10;
  const x=Number(n.toFixed(1)), v=a*x+b;
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Calcule ${F}(${String(x).replace(".",",")}).`,
           s:`${F}(${String(x).replace(".",",")}) = ${nb(a)} × ${String(x).replace(".",",")} ${plus(b)} = ${String(a*x).replace(".",",")} ${plus(b)} = ${String(Number(v.toFixed(2))).replace(".",",")}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(2,6);
  const v1=a*n+b, v2=a*(2*n)+b;
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Calcule ${F}(${n}) et ${F}(${2*n}). L'image double-t-elle quand le nombre double ?`,
           s:`${F}(${n}) = ${nb(v1)} et ${F}(${2*n}) = ${nb(v2)}.\n${2*v1===v2?`Ici ${nb(v2)} = 2 × ${nb(v1)} : l'image double, car ${b===0?"la fonction est de la forme ax":"le terme constant est nul"}.`:`2 × ${nb(v1)} = ${nb(2*v1)} ≠ ${nb(v2)} : l'image NE double PAS, à cause du terme constant ${plus(b)}.`}` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(2,9); const el=pick(PRENOMS);
  const r=imgAffine(F,a,b,n), faux=a+n*1+b;
  return { q:`Soit ${F}(x) = ${affine(a,b)}. ${el} calcule ${F}(${n}) et trouve ${nb(faux)}. Explique son erreur.`,
           s:`${el} a additionné ${a} et ${n} au lieu de les multiplier : dans ${affine(a,b)}, le nombre ${a} MULTIPLIE la variable.\n${r.s}` }; } },
];

FAMILLES["Déterminer un antécédent"] = [
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),k=ri(1,9),y=a*k+b;
  return { q:`Avec ${F}(x) = ${affine(a,b)}, détermine l'antécédent de ${nb(y)}.`, s:antAffine(F,a,b,y).s }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),k=ri(2,12),y=a*k+b;
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Quel nombre a pour image ${nb(y)} ?`, s:antAffine(F,a,b,y).s }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),k=ri(1,9),b=tirB(),y=a*k+b;
  return { q:`On donne ${F}(x) = ${affine(a,b)}. Résous l'équation ${F}(x) = ${nb(y)}.`, s:antAffine(F,a,b,y).s }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),k=ri(1,9),b=-a*k;
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Détermine l'antécédent de 0.`,
           s:`${antAffine(F,a,b,0).s}\nGraphiquement, c'est l'abscisse du point où la courbe coupe l'axe des abscisses.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),k=ri(-9,-1),y=a*k+b;
  return { q:`Avec ${F}(x) = ${affine(a,b)}, détermine l'antécédent de ${nb(y)}.`, s:antAffine(F,a,b,y).s }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),k=ri(1,9),y=a*k+b;
  const r=imgAffine(F,a,b,k);
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Détermine l'antécédent de ${nb(y)}, puis vérifie ton résultat en calculant son image.`,
           s:`${antAffine(F,a,b,y).s}\nVérification : ${r.s}` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=pick([-9,-7,-5,-4,-3,-2]),b=tirB(),k=ri(1,9),y=a*k+b;
  return { q:`Avec ${F}(x) = ${affine(a,b)}, détermine l'antécédent de ${nb(y)}.`,
           s:`${antAffine(F,a,b,y).s}\nAttention au signe : on divise par un nombre négatif.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),y=b+ri(1,a-1); if(a<2) return null;
  const r=antAffine(F,a,b,y); if(r.x!==null) return null;
  return { q:`Avec ${F}(x) = ${affine(a,b)}, détermine l'antécédent de ${nb(y)}.`,
           s:`${r.s}\nL'antécédent n'est pas un nombre entier : on le laisse sous forme de fraction irréductible.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB();
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Quel est l'antécédent de ${nb(b)} ?`,
           s:`${antAffine(F,a,b,b).s}\nC'est logique : ${F}(0) = ${nb(b)}, donc 0 est bien l'antécédent de ${nb(b)}.` }; } },
{ d:"D", g(){ const a=tirAp(),b=tirB(),c=tirAp(),e=tirB();
  if(a===c) return null;
  const num=e-b, den=a-c; if(num%den!==0) return null;
  const x=num/den;
  return { q:`On donne f(x) = ${affine(a,b)} et g(x) = ${affine(c,e)}. Pour quelle valeur de x ces deux fonctions ont-elles la même image ?`,
           s:`On résout f(x) = g(x) : ${affine(a,b)} = ${affine(c,e)}.\n${nb(a)}x ${nb(-c)>=0?"":""}${plus(-c)}x = ${nb(e)} ${plus(-b)} soit ${nb(den)}x = ${nb(num)}.\nx = ${nb(num)} ÷ ${nb(den)} = ${nb(x)}.\nVérification : f(${nb(x)}) = ${nb(a*x+b)} et g(${nb(x)}) = ${nb(c*x+e)}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),k=ri(1,9),y=a*k+b; const el=pick(PRENOMS);
  const faux=a*y+b;
  return { q:`Avec ${F}(x) = ${affine(a,b)}, ${el} cherche l'antécédent de ${nb(y)} et calcule ${F}(${nb(y)}) = ${nb(faux)}. Explique son erreur.`,
           s:`${el} a calculé une IMAGE alors qu'on demandait un ANTÉCÉDENT. Chercher un antécédent, c'est résoudre une équation, pas remplacer x.\n${antAffine(F,a,b,y).s}` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),k=ri(1,9),y=a*k+b,k2=ri(1,9),y2=a*k2+b;
  if(k===k2) return null;
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Détermine les antécédents de ${nb(y)} et de ${nb(y2)}.`,
           s:`${antAffine(F,a,b,y).s}\n${antAffine(F,a,b,y2).s}\nChaque nombre n'a ici qu'un seul antécédent : la fonction est affine.` }; } },
];

FAMILLES["Image d'un nombre négatif"] = [
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(-9,-1); const r=imgAffine(F,a,b,n);
  return { q:`Avec ${F}(x) = ${affine(a,b)}, calcule ${F}(${nb(n)}).`, s:r.s }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),b=ri(-12,-1),n=ri(-9,-1); const r=imgAffine(F,a,b,n);
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Quelle est l'image de ${nb(n)} par ${F} ?`, s:`${r.s}\nL'image de ${nb(n)} est ${nb(r.v)}.` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(); const r1=imgAffine(F,a,b,-1),r2=imgAffine(F,a,b,-2);
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Calcule ${F}(\u22121) et ${F}(\u22122).`, s:`${r1.s}\n${r2.s}` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=pick([-9,-8,-7,-6,-5,-4,-3,-2]),b=tirB(),n=ri(-9,-1);
  const r=imgAffine(F,a,b,n);
  return { q:`Avec ${F}(x) = ${affine(a,b)}, calcule ${F}(${nb(n)}).`,
           s:`${r.s}\nAttention : le produit de deux nombres négatifs est positif.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(1,9);
  const r1=imgAffine(F,a,b,n),r2=imgAffine(F,a,b,-n);
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Calcule ${F}(${n}) et ${F}(${nb(-n)}), puis compare-les.`,
           s:`${r1.s}\n${r2.s}\n${nb(r1.v)} ${r1.v>r2.v?">":"<"} ${nb(r2.v)} : les deux images sont différentes, elles ne sont pas opposées${r1.v===-r2.v?"":" (car le terme constant ne change pas de signe)"}.` }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),xs=[ri(-9,-6),ri(-5,-3),ri(-2,-1)];
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Complète le tableau de valeurs pour x = ${xs.map(nb).join(" ; ")}.`,
           s:xs.map(x=>`${F}(${nb(x)}) = ${nb(a)} × ${par(x)} ${plus(b)} = ${nb(a*x+b)}`).join("\n") }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirA(),b=tirB(),n=ri(-12,-1); const r=imgAffine(F,a,b,n);
  return { q:`Avec ${F}(x) = ${affine(a,b)}, calcule ${F}(${nb(n)}) en détaillant les signes.`, s:r.s }; } },
{ d:"D", g(){ const G=pick(LETTRES),a=1,b=tirB(),n=ri(-9,-2); const r=imgCarre(G,a,b,n);
  return { q:`Soit ${G}(x) = ${carre(a,b)}. Calcule ${G}(${nb(n)}).`, s:r.s }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(-9,-1); const el=pick(PRENOMS);
  const r=imgAffine(F,a,b,n), faux=-(a*Math.abs(n))+b;
  if(faux===r.v) return null;
  return { q:`Avec ${F}(x) = ${affine(a,b)}, ${el} calcule ${F}(${nb(n)}) et oublie les parenthèses autour de ${nb(n)}. Quelle erreur cela provoque-t-il ?`,
           s:`Sans parenthèses, le signe moins se perd dans le calcul. Il faut écrire ${nb(a)} × ${par(n)}.\n${r.s}` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(-9,-1);
  const r=imgAffine(F,a,b,n), k=a*n+b;
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Calcule ${F}(${nb(n)}), puis détermine l'antécédent de ce résultat.`,
           s:`${r.s}\n${antAffine(F,a,b,k).s}\nOn retrouve bien le nombre de départ.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(1,9);
  const v1=a*(-n)+b, v2=-(a*n+b);
  return { q:`Soit ${F}(x) = ${affine(a,b)}. Compare ${F}(${nb(-n)}) et ${nb(-1)} × ${F}(${n}).`,
           s:`${F}(${nb(-n)}) = ${nb(v1)}.\n${nb(-1)} × ${F}(${n}) = ${nb(-1)} × ${nb(a*n+b)} = ${nb(v2)}.\n${v1===v2?`Ici les deux résultats coïncident.`:`${nb(v1)} ≠ ${nb(v2)} : prendre l'image de l'opposé n'est PAS la même chose que prendre l'opposé de l'image.`}` }; } },
];

FAMILLES["La notation « flèche »"] = [
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB();
  return { q:`On donne ${F} : x ↦ ${affine(a,b)}. 1) Écris ${F}(x). 2) Quelle est l'image de 0 ?`,
           s:`1) ${F}(x) = ${affine(a,b)}.\n2) ${imgAffine(F,a,b,0).s}` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB();
  return { q:`Écris avec la notation « flèche » la fonction ${F} définie par ${F}(x) = ${affine(a,b)}.`,
           s:`${F} : x ↦ ${affine(a,b)}. La flèche ↦ se lit « associe à ».` }; } },
{ d:"F", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(1,9);
  return { q:`Soit ${F} : x ↦ ${affine(a,b)}. Calcule ${F}(${n}).`, s:imgAffine(F,a,b,n).s }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(-9,-1);
  return { q:`Soit ${F} : x ↦ ${affine(a,b)}. Calcule l'image de ${nb(n)}.`, s:imgAffine(F,a,b,n).s }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),k=ri(1,9),y=a*k+b;
  return { q:`Soit ${F} : x ↦ ${affine(a,b)}. Détermine l'antécédent de ${nb(y)}.`, s:antAffine(F,a,b,y).s }; } },
{ d:"M", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB();
  return { q:`Traduis en une phrase la notation ${F} : x ↦ ${affine(a,b)}.`,
           s:`La fonction ${F} associe à tout nombre x le nombre ${affine(a,b)} : on multiplie x par ${a}, puis on ${b>=0?`ajoute ${b}`:`retire ${-b}`}.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=ri(1,9);
  return { q:`Voici un programme de calcul : « Choisir un nombre, le multiplier par ${a}, puis ${pick([`ajouter ${b}`,`retrancher ${b}`])} ». Écris la fonction correspondante avec la notation « flèche ».`,
           s:`On appelle x le nombre choisi. Si le programme ajoute ${b} : ${F} : x ↦ ${affine(a,b)}. S'il retranche ${b} : ${F} : x ↦ ${affine(a,-b)}.\nChaque étape du programme devient une opération dans l'expression.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(1,9),k=ri(1,9),y=a*k+b;
  return { q:`Soit ${F} : x ↦ ${affine(a,b)}. 1) Calcule ${F}(${n}). 2) Détermine l'antécédent de ${nb(y)}. 3) Que vaut ${F}(0) ?`,
           s:`1) ${imgAffine(F,a,b,n).s}\n2) ${antAffine(F,a,b,y).s}\n3) ${imgAffine(F,a,b,0).s}` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(); const el=pick(PRENOMS);
  return { q:`${el} écrit « ${F} = ${affine(a,b)} » au lieu de « ${F} : x ↦ ${affine(a,b)} ». Pourquoi cette écriture est-elle incorrecte ?`,
           s:`${F} est le NOM de la fonction, pas un nombre : on ne peut pas l'égaler à une expression. On écrit soit ${F} : x ↦ ${affine(a,b)}, soit ${F}(x) = ${affine(a,b)}, qui précise à quel nombre le procédé s'applique.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=ri(1,9);
  return { q:`Soit ${F} : x ↦ ${nb(a)}(x + ${b}). Développe l'expression, puis calcule l'image de ${ri(1,9)} des deux façons pour vérifier.`,
           s:`${nb(a)}(x + ${b}) = ${nb(a)}x + ${a*b}, donc ${F} : x ↦ ${affine(a,a*b)}.\nLes deux écritures donnent la même image : la forme développée et la forme factorisée décrivent la même fonction.` }; } },
{ d:"D", g(){ const F=pick(LETTRES),a=tirAp(),b=tirB(),n=ri(2,6);
  return { q:`Soit ${F} : x ↦ ${affine(a,b)}. Compare l'image de ${n} et l'image de ${n+1}. De combien l'image augmente-t-elle quand x augmente de 1 ?`,
           s:`${F}(${n}) = ${nb(a*n+b)} et ${F}(${n+1}) = ${nb(a*(n+1)+b)}.\nDifférence : ${nb(a*(n+1)+b)} \u2212 ${nb(a*n+b)} = ${nb(a)}. L'image augmente de ${nb(a)} : c'est le coefficient devant x.` }; } },
];

FAMILLES["Le tableau mystère"] = [
{ d:"F", g(){ const H=pick(LETTRES),x1=ri(1,5),x2=x1+ri(1,5),y=ri(2,12);
  return { q:`Un tableau de valeurs donne ${H}(${x1}) = ${y} et ${H}(${x2}) = ${y}. Que peut-on dire du nombre ${y} pour la fonction ${H} ? Un nombre peut-il avoir plusieurs antécédents ?`,
           s:`${y} possède au moins DEUX antécédents : ${x1} et ${x2}.\nOui, c'est permis : la définition d'une fonction impose l'unicité de l'IMAGE, pas celle des antécédents.` }; } },
{ d:"F", g(){ const H=pick(LETTRES),xs=[ri(-4,-1),ri(0,3),ri(4,8)],ys=[ri(1,20),ri(1,20),ri(1,20)];
  return { q:`Un tableau donne ${xs.map((x,i)=>`${H}(${nb(x)}) = ${ys[i]}`).join(", ")}. Quelle est l'image de ${nb(xs[1])} ? Quel est un antécédent de ${ys[2]} ?`,
           s:`L'image de ${nb(xs[1])} est ${ys[1]}.\nUn antécédent de ${ys[2]} est ${nb(xs[2])}.` }; } },
{ d:"F", g(){ const H=pick(LETTRES),x=ri(1,9),y=ri(1,20);
  return { q:`Un tableau donne ${H}(${x}) = ${y}. Écris cette information en utilisant le mot « image », puis le mot « antécédent ».`,
           s:`${y} est l'image de ${x} par ${H}. ${x} est un antécédent de ${y} par ${H}.` }; } },
{ d:"M", g(){ const H=pick(LETTRES),x=ri(1,6),y1=ri(1,10),y2=y1+ri(1,9);
  return { q:`Un tableau prétend donner ${H}(${x}) = ${y1} et ${H}(${x}) = ${y2}. Ce tableau peut-il être celui d'une fonction ?`,
           s:`Non. Le nombre ${x} y reçoit deux images différentes, ${y1} et ${y2}, alors qu'une fonction associe à chaque nombre UNE SEULE image. Ce tableau n'est pas celui d'une fonction.` }; } },
{ d:"M", g(){ const H=pick(LETTRES),xs=[ri(-3,0),ri(1,4),ri(5,9)],ys=[ri(1,20),ri(1,20),ri(1,20)],cherche=ri(21,40);
  return { q:`Un tableau donne ${xs.map((x,i)=>`${H}(${nb(x)}) = ${ys[i]}`).join(", ")}. Le nombre ${cherche} a-t-il un antécédent ?`,
           s:`Le tableau ne mentionne pas ${cherche} : on ne peut PAS conclure. Il n'a pas d'antécédent parmi les nombres du tableau, mais rien ne dit qu'il n'en a pas ailleurs — le tableau ne décrit qu'un échantillon.` }; } },
{ d:"M", g(){ const H=pick(LETTRES),x1=ri(1,4),x2=x1+ri(1,4),y=ri(2,15);
  return { q:`Un tableau donne ${H}(${x1}) = ${y} et ${H}(${x2}) = ${y}. Combien de fois la droite horizontale d'ordonnée ${y} coupe-t-elle la courbe de ${H} ?`,
           s:`Au moins deux fois : aux points d'abscisses ${x1} et ${x2}. Chaque antécédent de ${y} correspond à un point d'intersection.` }; } },
{ d:"D", g(){ const H=pick(LETTRES),a=tirAp(),b=tirB(),xs=[ri(1,3),ri(4,6),ri(7,9)];
  return { q:`Un tableau donne ${xs.map(x=>`${H}(${x}) = ${nb(a*x+b)}`).join(", ")}. Ces valeurs sont-elles compatibles avec ${H}(x) = ${affine(a,b)} ?`,
           s:xs.map(x=>`${H}(${x}) = ${nb(a)} × ${x} ${plus(b)} = ${nb(a*x+b)} ✔`).join("\n")+`\nLes trois valeurs correspondent : le tableau est compatible avec cette expression.` }; } },
{ d:"D", g(){ const H=pick(LETTRES),a=tirAp(),b=tirB(),x1=ri(1,4),x2=x1+ri(1,4),x3=ri(6,9);
  return { q:`Un tableau donne ${H}(${x1}) = ${nb(a*x1+b)} et ${H}(${x2}) = ${nb(a*x2+b)}. Peut-on en déduire ${H}(${x3}) ?`,
           s:`Non. Deux valeurs ne suffisent pas à déterminer une fonction : une infinité de fonctions passent par ces deux couples. Si l'on SAIT de plus que ${H} est affine, alors ${H}(x) = ${affine(a,b)} et ${H}(${x3}) = ${nb(a*x3+b)} — mais cette hypothèse doit être donnée.` }; } },
{ d:"D", g(){ const H=pick(LETTRES),x1=ri(1,3),x2=ri(4,6),x3=ri(7,9),y=ri(2,15);
  return { q:`Un tableau donne ${H}(${x1}) = ${y}, ${H}(${x2}) = ${y} et ${H}(${x3}) = ${y}. Que dire de la fonction ${H} sur ces trois nombres ? Est-ce contradictoire ?`,
           s:`Ces trois nombres ont la même image ${y} : ${y} a (au moins) trois antécédents.\nAucune contradiction : une fonction peut donner le même résultat à plusieurs nombres de départ. C'est le cas d'une fonction constante, par exemple.` }; } },
{ d:"D", g(){ const H=pick(LETTRES),a=tirAp(),b=tirB(),x1=ri(1,4),x2=x1+ri(1,4);
  const y1=a*x1+b,y2=a*x2+b;
  return { q:`Un tableau donne ${H}(${x1}) = ${nb(y1)} et ${H}(${x2}) = ${nb(y2)}. De combien l'image varie-t-elle lorsque x passe de ${x1} à ${x2} ?`,
           s:`Variation de l'image : ${nb(y2)} \u2212 ${nb(y1)} = ${nb(y2-y1)}.\nVariation de x : ${x2} \u2212 ${x1} = ${x2-x1}.\nL'image varie de ${nb(y2-y1)} lorsque x augmente de ${x2-x1}.` }; } },
{ d:"D", g(){ const H=pick(LETTRES),x=ri(1,6),y=ri(2,15); const el=pick(PRENOMS);
  return { q:`Un tableau donne ${H}(${x}) = ${y}. ${el} en conclut que ${H}(${x*2}) = ${y*2}. A-t-il raison ?`,
           s:`Non. Rien ne dit que doubler le nombre de départ double l'image : ce n'est vrai que pour certaines fonctions particulières. Le tableau ne donne aucune information sur ${H}(${x*2}).` }; } },
];

FAMILLES["Une fonction avec un carré"] = [
{ d:"F", g(){ const G=pick(LETTRES),b=tirB(),n=ri(1,9); const r=imgCarre(G,1,b,n);
  return { q:`Soit ${G}(x) = ${carre(1,b)}. Calcule ${G}(${n}).`, s:r.s }; } },
{ d:"F", g(){ const G=pick(LETTRES),a=ri(2,5),b=tirB(),n=ri(1,7); const r=imgCarre(G,a,b,n);
  return { q:`Soit ${G}(x) = ${carre(a,b)}. Calcule ${G}(${n}).`, s:r.s }; } },
{ d:"F", g(){ const G=pick(LETTRES),b=tirB(); const r1=imgCarre(G,1,b,0),r2=imgCarre(G,1,b,1);
  return { q:`Soit ${G}(x) = ${carre(1,b)}. Calcule ${G}(0) et ${G}(1).`, s:`${r1.s}\n${r2.s}` }; } },
{ d:"M", g(){ const G=pick(LETTRES),b=tirB(),n=ri(-9,-1); const r=imgCarre(G,1,b,n);
  return { q:`Soit ${G}(x) = ${carre(1,b)}. Calcule ${G}(${nb(n)}).`, s:r.s }; } },
{ d:"M", g(){ const G=pick(LETTRES),b=tirB(),n=ri(1,9);
  return { q:`Soit ${G}(x) = ${carre(1,b)}. Calcule ${G}(${n}) et ${G}(${nb(-n)}). Que remarques-tu ?`,
           s:`${G}(${n}) = ${n*n} ${plus(b)} = ${nb(n*n+b)}.\n${G}(${nb(-n)}) = ${par(-n)}² ${plus(b)} = ${n*n} ${plus(b)} = ${nb(n*n+b)}.\nLes deux images sont ÉGALES : deux nombres opposés ont le même carré, donc la même image.` }; } },
{ d:"M", g(){ const G=pick(LETTRES),b=tirB(),k=ri(2,9),y=k*k+b;
  return { q:`Soit ${G}(x) = ${carre(1,b)}. Détermine les antécédents de ${nb(y)}.`,
           s:`On résout ${carre(1,b)} = ${nb(y)}, donc x² = ${nb(y)} ${plus(-b)} = ${k*k}.\nDeux nombres ont pour carré ${k*k} : ${k} et ${nb(-k)}.\nLes antécédents de ${nb(y)} sont ${k} et ${nb(-k)}.` }; } },
{ d:"D", g(){ const G=pick(LETTRES),b=tirB(),k=ri(2,9),y=k*k+b;
  return { q:`Soit ${G}(x) = ${carre(1,b)}. a) Calcule ${G}(${k}). b) Détermine les antécédents de ${nb(y)}.`,
           s:`a) ${G}(${k}) = ${k*k} ${plus(b)} = ${nb(y)}.\nb) x² = ${nb(y)} ${plus(-b)} = ${k*k}, donc x = ${k} ou x = ${nb(-k)}. Le nombre ${nb(y)} a DEUX antécédents.` }; } },
{ d:"D", g(){ const G=pick(LETTRES),b=ri(1,12),y=b-ri(1,9);
  return { q:`Soit ${G}(x) = ${carre(1,b)}. Le nombre ${nb(y)} a-t-il un antécédent par ${G} ?`,
           s:`On résout x² ${plus(b)} = ${nb(y)}, soit x² = ${nb(y-b)}.\nUn carré n'est jamais négatif : cette équation n'a aucune solution. ${nb(y)} n'a PAS d'antécédent par ${G}.` }; } },
{ d:"D", g(){ const G=pick(LETTRES),b=tirB();
  return { q:`Soit ${G}(x) = ${carre(1,b)}. Combien d'antécédents le nombre ${nb(b)} a-t-il ?`,
           s:`On résout x² ${plus(b)} = ${nb(b)}, soit x² = 0, donc x = 0.\nUn SEUL antécédent : 0. C'est le seul nombre dont le carré est nul.` }; } },
{ d:"D", g(){ const G=pick(LETTRES),b=tirB(),n=ri(-9,-2); const el=pick(PRENOMS);
  return { q:`Soit ${G}(x) = ${carre(1,b)}. ${el} calcule ${G}(${nb(n)}) et trouve ${nb(-(n*n)+b)}. Explique son erreur.`,
           s:`${el} a écrit ${nb(n)}² comme s'il fallait garder le signe moins. Or on élève ${nb(n)} tout entier au carré : ${par(n)}² = ${n*n}, un nombre POSITIF.\n${G}(${nb(n)}) = ${n*n} ${plus(b)} = ${nb(n*n+b)}.` }; } },
{ d:"D", g(){ const G=pick(LETTRES),a=ri(2,5),b=tirB(),k=ri(2,7),y=a*k*k+b;
  return { q:`Soit ${G}(x) = ${carre(a,b)}. Détermine les antécédents de ${nb(y)}.`,
           s:`On résout ${carre(a,b)} = ${nb(y)}, donc ${nb(a)}x² = ${nb(y-b)} et x² = ${nb(y-b)} ÷ ${a} = ${k*k}.\nx = ${k} ou x = ${nb(-k)}.` }; } },
{ d:"D", g(){ const G=pick(LETTRES),b=tirB(),n=ri(2,7);
  return { q:`Soit ${G}(x) = ${carre(1,b)}. Compare ${G}(${n}) et ${G}(${n+1}), puis explique pourquoi l'image augmente de plus en plus vite.`,
           s:`${G}(${n}) = ${nb(n*n+b)} et ${G}(${n+1}) = ${nb((n+1)*(n+1)+b)}.\nÉcart : ${nb((n+1)*(n+1)-n*n)}. En passant de ${n+1} à ${n+2}, l'écart serait ${nb((n+2)*(n+2)-(n+1)*(n+1))} : il grandit à chaque fois, car le carré croît de plus en plus vite.` }; } },
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
  const rows = brut.filter(r => { const c = cle(r.chapitre); return c.includes("notion") && c.includes("fonction"); });
  if (!rows.length) { console.log("Chapitre introuvable."); await pool.end(); return; }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(rows, "chapitre", "Notions de fonctions");
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
  fs.writeFileSync(`fonctions-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : fonctions-avant-generation-${stamp}.json`);
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
