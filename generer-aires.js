/* MathBase — generer-aires.js
   Chapitre « Aires » : 100 exercices par famille, sur 6 familles.

   Les deux familles « Aire et périmètre d'un triangle quelconque » et
   « Aire et périmètre d'un cercle » sont CRÉÉES ici, par insertion.

   Chaque famille traite désormais l'AIRE ET LE PÉRIMÈTRE, conformément aux
   renommages. Deux exigences en découlent :

   · Triangle rectangle — le périmètre réclame l'hypoténuse. Les côtés sont
     donc tirés parmi des triplets pythagoriciens (éventuellement mis à
     l'échelle), pour que l'hypoténuse tombe juste. Un côté de 6 et 9 cm,
     comme dans l'ancien énoncé, donnerait √117 : inutilisable ici.
   · Triangle quelconque — les trois côtés ET la hauteur doivent être
     COHÉRENTS. Un triangle est bâti en accolant deux triangles rectangles
     partageant la hauteur : base = p + q, côtés = les deux hypoténuses.
     Tirer des côtés et une hauteur au hasard donnerait une figure impossible.

   Le cercle donne la valeur exacte en fonction de π, puis l'arrondi.
   Le reste est calculé en décimaux exacts (entier + nombre de décimales).

   · 20 faciles / 30 moyens / 50 difficiles par famille.
   · Pas de famille « Cours ». Problèmes inclus (--exclure-problemes).

   Usage :
     node generer-aires.js --apercu
     node generer-aires.js --apercu "Aire et périmètre d'un cercle"
     $env:DATABASE_URL = "postgresql://..."
     node generer-aires.js            # simulation
     node generer-aires.js --execute  # applique
   Options : --cible N (100) · --graine N (20260805) · --exclure-problemes
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const EXCLURE_PB = ARGS.includes("--exclure-problemes");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260805);
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];

/* ══ décimaux exacts : valeur = m × 10^(−e) ══ */
const grp = s => s.length >= 5 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : s;
function fmt(m, e) {
  const neg = m < 0; m = Math.abs(m);
  let s = String(m).padStart(e + 1, "0");
  let ip = s.slice(0, s.length - e), dp = e ? s.slice(s.length - e) : "";
  dp = dp.replace(/0+$/, "");
  return (neg ? "\u2212" : "") + grp(ip) + (dp ? "," + dp : "");
}
const D = (m, e = 0) => ({ m, e });
const resc = (x, e) => ({ m: x.m * Math.pow(10, e - x.e), e });
const add = (a, b) => { const e = Math.max(a.e, b.e); return { m: resc(a, e).m + resc(b, e).m, e }; };
const sub = (a, b) => { const e = Math.max(a.e, b.e); return { m: resc(a, e).m - resc(b, e).m, e }; };
const mul = (a, b) => ({ m: a.m * b.m, e: a.e + b.e });
const div2 = x => x.m % 2 === 0 ? { m: x.m / 2, e: x.e } : { m: x.m * 5, e: x.e + 1 };
const S = x => fmt(x.m, x.e);
const num = x => x.m / Math.pow(10, x.e);
/* longueur « jolie » : entier, ou un chiffre après la virgule */
const long1 = (a, b) => pick([D(ri(a, b)), D(ri(a * 10, b * 10), 1)]);

/* arrondi au centième, pour les valeurs faisant intervenir π */
const arr2 = v => (Math.round(v * 100) / 100).toFixed(2).replace(".", ",");
/* coefficient devant π, sous forme exacte */
const coefPi = x => S(x) + "π";

/* ══ triangles quelconques exacts ══ */
const TRIPLETS = [[3,4,5],[5,12,13],[6,8,10],[7,24,25],[8,15,17],[9,12,15],[9,40,41],[10,24,26],
  [12,16,20],[12,35,37],[14,48,50],[15,20,25],[15,36,39],[16,30,34],[18,24,30],[20,21,29],
  [20,48,52],[21,28,35],[24,32,40],[27,36,45],[30,40,50],[33,44,55],[40,42,58],[16,63,65]];
const PAR_H = {};
TRIPLETS.forEach(([a, b, c]) => { [[a, b], [b, a]].forEach(([leg, h]) => { (PAR_H[h] = PAR_H[h] || []).push([leg, c]); }); });
const HAUTEURS = Object.keys(PAR_H).map(Number).filter(h => PAR_H[h].length >= 2).sort((a, b) => a - b);
/* un triangle : base = p+q, côtés c1 et c2, hauteur h relative à la base */
function triangle(iso) {
  for (let t = 0; t < 60; t++) {
    const h = pick(HAUTEURS), L = PAR_H[h];
    const [p, c1] = pick(L), [q, c2] = iso ? [p, c1] : pick(L);
    if (!iso && p === q) continue;
    const base = p + q;
    if (base > 90 || c1 > 70 || c2 > 70) continue;
    return { h, base, p, q, c1, c2, aire: base * h / 2, perim: base + c1 + c2 };
  }
  return { h: 12, base: 14, p: 5, q: 9, c1: 13, c2: 15, aire: 84, perim: 42 };
}
/* triangle rectangle : triplet, éventuellement mis à l'échelle */
function rectangle3() {
  const [a, b, c] = pick(TRIPLETS), k = pick([1, 1, 1, 0.5]);
  const A = k === 1 ? D(a) : D(a * 5, 1), B = k === 1 ? D(b) : D(b * 5, 1), C = k === 1 ? D(c) : D(c * 5, 1);
  return { A, B, C, aire: div2(mul(A, B)), perim: add(add(A, B), C) };
}

const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];
const PIECES = [["chambre","moquette"],["salon","parquet"],["bureau","lino"],["salle de jeux","tapis"],
  ["couloir","moquette"],["véranda","carrelage"]];

/* ══════════ FAMILLES ══════════ */
const FAMILLES = {};

/* ── Carré ── */
FAMILLES["Aire et périmètre d'un carré"] = [
{ d:"F", g(){ const c=long1(2,12);
  return { q:`Calcule l'aire et le périmètre d'un carré de côté ${S(c)} cm.`,
           s:`Aire : A = ${S(c)} × ${S(c)} = ${S(mul(c,c))} cm².\nPérimètre : P = 4 × ${S(c)} = ${S(mul(D(4),c))} cm.` }; } },
{ d:"F", g(){ const c=long1(2,15);
  return { q:`Un carré a pour côté ${S(c)} cm. Calcule son périmètre.`,
           s:`P = 4 × ${S(c)} = ${S(mul(D(4),c))} cm.` }; } },
{ d:"F", g(){ const c=long1(2,15);
  return { q:`Calcule l'aire d'un carré de côté ${S(c)} cm.`,
           s:`A = ${S(c)} × ${S(c)} = ${S(mul(c,c))} cm².` }; } },
{ d:"M", g(){ const c=long1(3,20);
  return { q:`Calcule l'aire et le périmètre d'un carré de côté ${S(c)} cm.`,
           s:`A = ${S(c)}² = ${S(mul(c,c))} cm².\nP = 4 × ${S(c)} = ${S(mul(D(4),c))} cm.\nAttention aux unités : l'aire est en cm², le périmètre en cm.` }; } },
{ d:"M", g(){ const c=ri(3,25), p=4*c;
  return { q:`Le périmètre d'un carré vaut ${p} cm. Calcule la longueur de son côté, puis son aire.`,
           s:`Côté : ${p} ÷ 4 = ${c} cm.\nAire : ${c} × ${c} = ${c*c} cm².` }; } },
{ d:"M", g(){ const c=ri(2,15);
  return { q:`Un carré a une aire de ${c*c} cm². Quelle est la longueur de son côté ? Quel est son périmètre ?`,
           s:`On cherche le nombre dont le carré vaut ${c*c} : c'est ${c}, car ${c} × ${c} = ${c*c}.\nCôté : ${c} cm. Périmètre : 4 × ${c} = ${4*c} cm.` }; } },
{ d:"D", g(){ const c=long1(3,15);
  const c2=mul(c,D(2));
  return { q:`On double le côté d'un carré de ${S(c)} cm. Que deviennent son périmètre et son aire ?`,
           s:`Avant : P = ${S(mul(D(4),c))} cm et A = ${S(mul(c,c))} cm².\nAprès (côté ${S(c2)} cm) : P = ${S(mul(D(4),c2))} cm et A = ${S(mul(c2,c2))} cm².\nLe périmètre est doublé, mais l'aire est multipliée par 4.` }; } },
{ d:"D", g(){ const c=long1(4,20), prix=ri(12,45);
  return { q:`Un carreau carré de ${S(c)} cm de côté coûte ${prix} € le m². Calcule son aire en cm², puis en m².`,
           s:`A = ${S(mul(c,c))} cm².\n1 m² = 10 000 cm², donc ${S(mul(c,c))} cm² = ${S({m:mul(c,c).m,e:mul(c,c).e+4})} m².` }; } },
{ d:"D", g(){ const c=ri(3,20);
  return { q:`Un carré a le même nombre pour son aire et pour son périmètre. Vérifie que ${c===4?"c'est":"ce n'est pas"} le cas pour un côté de ${c} cm, puis trouve le bon côté.`,
           s:`Pour un côté de ${c} cm : A = ${c*c} et P = ${4*c}. ${c*c===4*c?"Les deux coïncident.":"Les deux diffèrent."}\nOn cherche c tel que c × c = 4 × c, donc c = 4.\nLe carré de côté 4 cm a une aire de 16 cm² et un périmètre de 16 cm.` }; } },
{ d:"D", g(){ const c=long1(3,12), n=ri(2,6);
  return { q:`On accole ${n} carrés identiques de ${S(c)} cm de côté pour former une bande. Calcule l'aire et le périmètre de la bande.`,
           s:`Aire : ${n} × ${S(mul(c,c))} = ${S(mul(D(n),mul(c,c)))} cm².\nLa bande est un rectangle de ${S(mul(D(n),c))} cm sur ${S(c)} cm.\nPérimètre : 2 × (${S(mul(D(n),c))} + ${S(c)}) = ${S(mul(D(2),add(mul(D(n),c),c)))} cm.` }; } },
{ d:"D", g(){ const c=long1(4,18); const el=pick(PRENOMS);
  return { q:`${el} calcule le périmètre d'un carré de ${S(c)} cm de côté et trouve ${S(mul(c,c))} cm. Explique son erreur.`,
           s:`${el} a calculé l'AIRE. Le périmètre est la longueur du contour : on additionne les quatre côtés.\nP = 4 × ${S(c)} = ${S(mul(D(4),c))} cm, et A = ${S(mul(c,c))} cm².` }; } },
{ d:"D", g(){ const c=ri(4,20), d=ri(1,3);
  return { q:`Un carré a un côté de ${c} cm. On l'agrandit de ${d} cm de chaque côté. De combien son aire augmente-t-elle ?`,
           s:`Avant : ${c} × ${c} = ${c*c} cm². Après : ${c+d} × ${c+d} = ${(c+d)*(c+d)} cm².\nAugmentation : ${(c+d)*(c+d)} − ${c*c} = ${(c+d)*(c+d)-c*c} cm².` }; } },
];

/* ── Rectangle ── */
FAMILLES["Aire et périmètre d'un rectangle"] = [
{ d:"F", g(){ const L=long1(4,15), l=long1(2,8);
  return { q:`Calcule l'aire et le périmètre d'un rectangle de longueur ${S(L)} cm et de largeur ${S(l)} cm.`,
           s:`Aire : A = ${S(L)} × ${S(l)} = ${S(mul(L,l))} cm².\nPérimètre : P = 2 × (${S(L)} + ${S(l)}) = 2 × ${S(add(L,l))} = ${S(mul(D(2),add(L,l)))} cm.` }; } },
{ d:"F", g(){ const L=long1(5,20), l=long1(2,9);
  return { q:`Calcule l'aire d'un rectangle de longueur ${S(L)} cm et de largeur ${S(l)} cm.`,
           s:`A = ${S(L)} × ${S(l)} = ${S(mul(L,l))} cm².` }; } },
{ d:"F", g(){ const L=long1(5,20), l=long1(2,9);
  return { q:`Calcule le périmètre d'un rectangle de longueur ${S(L)} cm et de largeur ${S(l)} cm.`,
           s:`P = 2 × (${S(L)} + ${S(l)}) = ${S(mul(D(2),add(L,l)))} cm.` }; } },
{ d:"M", g(){ const L=long1(6,25), l=long1(3,12);
  return { q:`Un rectangle mesure ${S(L)} cm sur ${S(l)} cm. Calcule son aire et son périmètre.`,
           s:`A = ${S(L)} × ${S(l)} = ${S(mul(L,l))} cm².\nP = 2 × (${S(L)} + ${S(l)}) = ${S(mul(D(2),add(L,l)))} cm.` }; } },
{ d:"M", g(){ const L=ri(6,20), l=ri(2,5);
  return { q:`L'aire d'un rectangle vaut ${L*l} cm² et sa largeur ${l} cm. Calcule sa longueur, puis son périmètre.`,
           s:`Longueur : ${L*l} ÷ ${l} = ${L} cm.\nPérimètre : 2 × (${L} + ${l}) = ${2*(L+l)} cm.` }; } },
{ d:"M", g(){ const L=ri(6,20), l=ri(2,8), p=2*(L+l);
  return { q:`Le périmètre d'un rectangle vaut ${p} cm et sa longueur ${L} cm. Calcule sa largeur, puis son aire.`,
           s:`Demi-périmètre : ${p} ÷ 2 = ${L+l} cm.\nLargeur : ${L+l} − ${L} = ${l} cm.\nAire : ${L} × ${l} = ${L*l} cm².` }; } },
{ d:"D", g(){ const L=long1(6,20), l=long1(3,10);
  return { q:`Un rectangle mesure ${S(L)} cm sur ${S(l)} cm. Un carré a le même périmètre. Quel est son côté ? Quelle est son aire ?`,
           s:`Périmètre du rectangle : 2 × (${S(L)} + ${S(l)}) = ${S(mul(D(2),add(L,l)))} cm.\nCôté du carré : ${S(mul(D(2),add(L,l)))} ÷ 4 = ${S(div2(div2(mul(D(2),add(L,l)))))} cm.\nAire du carré : ${S(mul(div2(div2(mul(D(2),add(L,l)))),div2(div2(mul(D(2),add(L,l))))))} cm², contre ${S(mul(L,l))} cm² pour le rectangle.\nÀ périmètre égal, le carré a la plus grande aire.` }; } },
{ d:"D", g(){ const L=ri(8,25), l=ri(3,7);
  return { q:`Un rectangle de ${L} cm sur ${l} cm est partagé en deux rectangles identiques dans le sens de la longueur. Calcule l'aire et le périmètre de chacun.`,
           s:`Chaque moitié mesure ${L} cm sur ${l/2===Math.floor(l/2)?l/2:S(div2(D(l)))} cm.\nAire : ${L} × ${S(div2(D(l)))} = ${S(mul(D(L),div2(D(l))))} cm², soit la moitié de ${L*l} cm².\nPérimètre : 2 × (${L} + ${S(div2(D(l)))}) = ${S(mul(D(2),add(D(L),div2(D(l)))))} cm.` }; } },
{ d:"D", g(){ const L=long1(5,15), l=long1(2,8), k=ri(2,4);
  const L2=mul(L,D(k)), l2=mul(l,D(k));
  return { q:`On agrandit un rectangle de ${S(L)} cm sur ${S(l)} cm en multipliant ses dimensions par ${k}. Que deviennent son périmètre et son aire ?`,
           s:`Avant : P = ${S(mul(D(2),add(L,l)))} cm, A = ${S(mul(L,l))} cm².\nAprès (${S(L2)} cm sur ${S(l2)} cm) : P = ${S(mul(D(2),add(L2,l2)))} cm, A = ${S(mul(L2,l2))} cm².\nLe périmètre est multiplié par ${k}, l'aire par ${k} × ${k} = ${k*k}.` }; } },
{ d:"D", g(){ const L=ri(8,20), l=ri(3,7), c=ri(1,Math.min(l,L)-1);
  return { q:`Dans un rectangle de ${L} cm sur ${l} cm, on découpe un carré de ${c} cm de côté dans un coin. Quelle est l'aire de la figure restante ?`,
           s:`Aire du rectangle : ${L} × ${l} = ${L*l} cm².\nAire du carré : ${c} × ${c} = ${c*c} cm².\nAire restante : ${L*l} − ${c*c} = ${L*l-c*c} cm².` }; } },
{ d:"D", g(){ const L=long1(6,18), l=long1(3,9); const el=pick(PRENOMS);
  const faux=add(L,l);
  return { q:`${el} calcule le périmètre d'un rectangle de ${S(L)} cm sur ${S(l)} cm et trouve ${S(faux)} cm. Explique son erreur.`,
           s:`${el} n'a additionné que deux côtés. Un rectangle en a quatre : deux longueurs et deux largeurs.\nP = 2 × (${S(L)} + ${S(l)}) = ${S(mul(D(2),add(L,l)))} cm.` }; } },
{ d:"D", g(){ const L=ri(10,30), l=ri(4,9), prix=ri(8,30);
  return { q:`Un panneau rectangulaire mesure ${L} dm sur ${l} dm. Calcule son aire en dm² puis en m², et son prix à ${prix} € le m².`,
           s:`A = ${L} × ${l} = ${L*l} dm².\n1 m² = 100 dm², donc ${L*l} dm² = ${S(D(L*l,2))} m².\nPrix : ${S(D(L*l,2))} × ${prix} = ${S(mul(D(L*l,2),D(prix)))} €.` }; } },
];

/* ── Triangle rectangle ── */
FAMILLES["Aire et périmètre d'un triangle rectangle"] = [
{ d:"F", g(){ const t=rectangle3();
  return { q:`Un triangle rectangle a ses deux côtés de l'angle droit qui mesurent ${S(t.A)} cm et ${S(t.B)} cm, et son hypoténuse ${S(t.C)} cm. Calcule son aire et son périmètre.`,
           s:`Aire : A = (${S(t.A)} × ${S(t.B)}) ÷ 2 = ${S(t.aire)} cm².\nPérimètre : P = ${S(t.A)} + ${S(t.B)} + ${S(t.C)} = ${S(t.perim)} cm.` }; } },
{ d:"F", g(){ const t=rectangle3();
  return { q:`Calcule l'aire d'un triangle rectangle dont les côtés de l'angle droit mesurent ${S(t.A)} cm et ${S(t.B)} cm.`,
           s:`A = (${S(t.A)} × ${S(t.B)}) ÷ 2 = ${S(mul(t.A,t.B))} ÷ 2 = ${S(t.aire)} cm².` }; } },
{ d:"F", g(){ const t=rectangle3();
  return { q:`Un triangle rectangle a pour côtés ${S(t.A)} cm, ${S(t.B)} cm et ${S(t.C)} cm. Calcule son périmètre.`,
           s:`P = ${S(t.A)} + ${S(t.B)} + ${S(t.C)} = ${S(t.perim)} cm.` }; } },
{ d:"M", g(){ const t=rectangle3();
  return { q:`Un triangle rectangle a ses côtés de l'angle droit de ${S(t.A)} cm et ${S(t.B)} cm, et une hypoténuse de ${S(t.C)} cm. Calcule son aire et son périmètre.`,
           s:`Aire : la base et la hauteur sont les deux côtés de l'angle droit.\nA = (${S(t.A)} × ${S(t.B)}) ÷ 2 = ${S(t.aire)} cm².\nPérimètre : P = ${S(t.A)} + ${S(t.B)} + ${S(t.C)} = ${S(t.perim)} cm.` }; } },
{ d:"M", g(){ const t=rectangle3();
  return { q:`Vérifie que le triangle de côtés ${S(t.A)} cm, ${S(t.B)} cm et ${S(t.C)} cm est rectangle, puis calcule son aire.`,
           s:`On compare : ${S(t.A)}² + ${S(t.B)}² = ${S(mul(t.A,t.A))} + ${S(mul(t.B,t.B))} = ${S(add(mul(t.A,t.A),mul(t.B,t.B)))}, et ${S(t.C)}² = ${S(mul(t.C,t.C))}.\nLes deux sont égaux : d'après la réciproque du théorème de Pythagore, le triangle est rectangle.\nA = (${S(t.A)} × ${S(t.B)}) ÷ 2 = ${S(t.aire)} cm².` }; } },
{ d:"M", g(){ const t=rectangle3();
  return { q:`Un triangle rectangle a une aire de ${S(t.aire)} cm² et un côté de l'angle droit de ${S(t.A)} cm. Calcule l'autre côté de l'angle droit.`,
           s:`A = (base × hauteur) ÷ 2, donc base × hauteur = 2 × ${S(t.aire)} = ${S(mul(D(2),t.aire))}.\nAutre côté : ${S(mul(D(2),t.aire))} ÷ ${S(t.A)} = ${S(t.B)} cm.` }; } },
{ d:"D", g(){ const t=rectangle3();
  return { q:`Un triangle rectangle a pour côtés ${S(t.A)} cm, ${S(t.B)} cm et ${S(t.C)} cm. Calcule son aire et son périmètre, puis compare son aire à celle du carré de même périmètre.`,
           s:`A = ${S(t.aire)} cm² et P = ${S(t.perim)} cm.\nCarré de même périmètre : côté ${S(div2(div2(t.perim)))} cm, aire ${S(mul(div2(div2(t.perim)),div2(div2(t.perim))))} cm².\nLe carré a une aire bien plus grande, à périmètre égal.` }; } },
{ d:"D", g(){ const t=rectangle3();
  return { q:`Deux triangles rectangles identiques de côtés ${S(t.A)} cm et ${S(t.B)} cm sont accolés par leur hypoténuse. Quelle figure obtient-on ? Quelle est son aire ?`,
           s:`On obtient un rectangle de ${S(t.A)} cm sur ${S(t.B)} cm.\nAire : ${S(t.A)} × ${S(t.B)} = ${S(mul(t.A,t.B))} cm², soit le double de ${S(t.aire)} cm².` }; } },
{ d:"D", g(){ const t=rectangle3();
  return { q:`Un triangle rectangle a pour côtés ${S(t.A)} cm, ${S(t.B)} cm et ${S(t.C)} cm. Calcule la hauteur issue de l'angle droit, sachant que l'aire ne change pas selon la base choisie.`,
           s:`Aire : A = (${S(t.A)} × ${S(t.B)}) ÷ 2 = ${S(t.aire)} cm².\nEn prenant l'hypoténuse comme base : A = (${S(t.C)} × h) ÷ 2, donc h = 2 × ${S(t.aire)} ÷ ${S(t.C)} = ${arr2(2*num(t.aire)/num(t.C))} cm environ.` }; } },
{ d:"D", g(){ const t=rectangle3(); const el=pick(PRENOMS);
  return { q:`${el} calcule l'aire du triangle rectangle de côtés ${S(t.A)} cm et ${S(t.B)} cm et trouve ${S(mul(t.A,t.B))} cm². Explique son erreur.`,
           s:`${el} a oublié de diviser par 2 : il a calculé l'aire du RECTANGLE formé par deux exemplaires du triangle.\nA = (${S(t.A)} × ${S(t.B)}) ÷ 2 = ${S(t.aire)} cm².` }; } },
{ d:"D", g(){ const t=rectangle3(), n=ri(2,5);
  return { q:`Combien de triangles rectangles de côtés ${S(t.A)} cm et ${S(t.B)} cm faut-il pour recouvrir un rectangle de ${S(mul(t.A,D(n)))} cm sur ${S(t.B)} cm ?`,
           s:`Aire du rectangle : ${S(mul(t.A,D(n)))} × ${S(t.B)} = ${S(mul(mul(t.A,D(n)),t.B))} cm².\nAire d'un triangle : ${S(t.aire)} cm².\n${S(mul(mul(t.A,D(n)),t.B))} ÷ ${S(t.aire)} = ${2*n} triangles.` }; } },
{ d:"D", g(){ const t=rectangle3();
  return { q:`Un triangle rectangle a un périmètre de ${S(t.perim)} cm et des côtés de l'angle droit de ${S(t.A)} cm et ${S(t.B)} cm. Retrouve la longueur de l'hypoténuse, puis vérifie-la par le théorème de Pythagore.`,
           s:`Hypoténuse : ${S(t.perim)} − ${S(t.A)} − ${S(t.B)} = ${S(t.C)} cm.\nVérification : ${S(t.A)}² + ${S(t.B)}² = ${S(add(mul(t.A,t.A),mul(t.B,t.B)))} et ${S(t.C)}² = ${S(mul(t.C,t.C))}. C'est cohérent.` }; } },
];

/* ── Triangle quelconque (NOUVELLE) ── */
FAMILLES["Aire et périmètre d'un triangle quelconque"] = [
{ d:"F", g(){ const t=triangle(false);
  return { q:`Un triangle a une base de ${t.base} cm et une hauteur relative à cette base de ${t.h} cm. Ses deux autres côtés mesurent ${t.c1} cm et ${t.c2} cm. Calcule son aire et son périmètre.`,
           s:`Aire : A = (${t.base} × ${t.h}) ÷ 2 = ${t.base*t.h} ÷ 2 = ${t.aire} cm².\nPérimètre : P = ${t.base} + ${t.c1} + ${t.c2} = ${t.perim} cm.` }; } },
{ d:"F", g(){ const t=triangle(false);
  return { q:`Calcule l'aire d'un triangle de base ${t.base} cm et de hauteur ${t.h} cm.`,
           s:`A = (${t.base} × ${t.h}) ÷ 2 = ${t.aire} cm².` }; } },
{ d:"F", g(){ const t=triangle(false);
  return { q:`Un triangle a pour côtés ${t.base} cm, ${t.c1} cm et ${t.c2} cm. Calcule son périmètre.`,
           s:`P = ${t.base} + ${t.c1} + ${t.c2} = ${t.perim} cm.` }; } },
{ d:"M", g(){ const t=triangle(false);
  return { q:`Un triangle a pour côtés ${t.base} cm, ${t.c1} cm et ${t.c2} cm. La hauteur relative au côté de ${t.base} cm mesure ${t.h} cm. Calcule son aire et son périmètre.`,
           s:`Aire : A = (${t.base} × ${t.h}) ÷ 2 = ${t.aire} cm².\nPérimètre : P = ${t.base} + ${t.c1} + ${t.c2} = ${t.perim} cm.\nLa hauteur ne sert qu'à l'aire ; le périmètre n'utilise que les côtés.` }; } },
{ d:"M", g(){ const t=triangle(true);
  return { q:`Un triangle isocèle a une base de ${t.base} cm et deux côtés égaux de ${t.c1} cm. Sa hauteur relative à la base mesure ${t.h} cm. Calcule son aire et son périmètre.`,
           s:`Aire : A = (${t.base} × ${t.h}) ÷ 2 = ${t.aire} cm².\nPérimètre : P = ${t.base} + 2 × ${t.c1} = ${t.perim} cm.` }; } },
{ d:"M", g(){ const t=triangle(false);
  return { q:`L'aire d'un triangle vaut ${t.aire} cm² et sa base ${t.base} cm. Calcule la hauteur relative à cette base.`,
           s:`A = (base × hauteur) ÷ 2, donc base × hauteur = 2 × ${t.aire} = ${2*t.aire}.\nHauteur : ${2*t.aire} ÷ ${t.base} = ${t.h} cm.` }; } },
{ d:"D", g(){ const t=triangle(false);
  return { q:`Un triangle a pour côtés ${t.base} cm, ${t.c1} cm et ${t.c2} cm, et une hauteur de ${t.h} cm relative au côté de ${t.base} cm. Calcule son aire, son périmètre, puis la hauteur relative au côté de ${t.c1} cm.`,
           s:`A = (${t.base} × ${t.h}) ÷ 2 = ${t.aire} cm² et P = ${t.perim} cm.\nL'aire ne dépend pas du côté choisi comme base : A = (${t.c1} × h) ÷ 2 = ${t.aire}, donc h = ${2*t.aire} ÷ ${t.c1} = ${Number.isInteger(2*t.aire/t.c1)?2*t.aire/t.c1:arr2(2*t.aire/t.c1)} cm${Number.isInteger(2*t.aire/t.c1)?"":" environ"}.` }; } },
{ d:"D", g(){ const t=triangle(false);
  return { q:`Un triangle de base ${t.base} cm et de hauteur ${t.h} cm a une aire de ${t.aire} cm². On double sa base sans changer sa hauteur. Que devient son aire ?`,
           s:`Nouvelle aire : (${2*t.base} × ${t.h}) ÷ 2 = ${2*t.aire} cm².\nL'aire double, car elle est proportionnelle à la base lorsque la hauteur ne change pas.` }; } },
{ d:"D", g(){ const t=triangle(false);
  return { q:`Vérifie que le triangle de côtés ${t.base} cm, ${t.c1} cm et ${t.c2} cm est constructible, puis calcule son périmètre.`,
           s:`Inégalité triangulaire : chaque côté doit être inférieur à la somme des deux autres.\n${t.base} < ${t.c1} + ${t.c2} = ${t.c1+t.c2} ✔ · ${t.c1} < ${t.base+t.c2} ✔ · ${t.c2} < ${t.base+t.c1} ✔\nLe triangle est constructible. P = ${t.perim} cm.` }; } },
{ d:"D", g(){ const t=triangle(false);
  return { q:`Un triangle a une aire de ${t.aire} cm². Un rectangle de même base ${t.base} cm et de même hauteur ${t.h} cm a quelle aire ? Quel rapport entre les deux ?`,
           s:`Rectangle : ${t.base} × ${t.h} = ${t.base*t.h} cm².\nTriangle : ${t.aire} cm².\nLe triangle a exactement la MOITIÉ de l'aire du rectangle : c'est le sens du « ÷ 2 » dans la formule.` }; } },
{ d:"D", g(){ const t=triangle(false); const el=pick(PRENOMS);
  return { q:`${el} calcule l'aire du triangle de côtés ${t.base} cm, ${t.c1} cm et ${t.c2} cm en faisant (${t.base} × ${t.c1}) ÷ 2 = ${t.base*t.c1/2}. Explique son erreur, sachant que la hauteur relative à la base vaut ${t.h} cm.`,
           s:`${el} a pris un CÔTÉ pour la hauteur. La hauteur est la distance du sommet à la base, perpendiculairement : ici ${t.h} cm.\nA = (${t.base} × ${t.h}) ÷ 2 = ${t.aire} cm².` }; } },
{ d:"D", g(){ const t=triangle(false), n=ri(2,4);
  return { q:`Un terrain triangulaire a une base de ${t.base} m, une hauteur de ${t.h} m et des côtés de ${t.c1} m et ${t.c2} m. Calcule son aire, puis le coût d'une clôture à ${n*10} € le mètre.`,
           s:`Aire : (${t.base} × ${t.h}) ÷ 2 = ${t.aire} m².\nPérimètre : ${t.base} + ${t.c1} + ${t.c2} = ${t.perim} m.\nClôture : ${t.perim} × ${n*10} = ${t.perim*n*10} €.` }; } },
];

/* ── Cercle (NOUVELLE) ── */
FAMILLES["Aire et périmètre d'un cercle"] = [
{ d:"F", g(){ const r=ri(2,12);
  return { q:`Un cercle a pour rayon ${r} cm. Donne la valeur exacte, puis l'arrondi au centième : a) de son périmètre b) de son aire`,
           s:`a) P = 2 × π × ${r} = ${coefPi(D(2*r))} cm ≈ ${arr2(2*Math.PI*r)} cm.\nb) A = π × ${r}² = ${coefPi(D(r*r))} cm² ≈ ${arr2(Math.PI*r*r)} cm².` }; } },
{ d:"F", g(){ const r=ri(2,15);
  return { q:`Calcule le périmètre d'un cercle de rayon ${r} cm. Donne la valeur exacte, puis l'arrondi au centième.`,
           s:`P = 2 × π × ${r} = ${coefPi(D(2*r))} cm ≈ ${arr2(2*Math.PI*r)} cm.` }; } },
{ d:"F", g(){ const r=ri(2,15);
  return { q:`Calcule l'aire d'un disque de rayon ${r} cm. Donne la valeur exacte, puis l'arrondi au centième.`,
           s:`A = π × ${r}² = ${coefPi(D(r*r))} cm² ≈ ${arr2(Math.PI*r*r)} cm².` }; } },
{ d:"M", g(){ const r=ri(2,12), d=2*r;
  return { q:`Un cercle a un diamètre de ${d} cm. Calcule son rayon, puis son périmètre et son aire (valeurs exactes et arrondis au centième).`,
           s:`Rayon : ${d} ÷ 2 = ${r} cm.\nP = π × ${d} = ${coefPi(D(d))} cm ≈ ${arr2(Math.PI*d)} cm.\nA = π × ${r}² = ${coefPi(D(r*r))} cm² ≈ ${arr2(Math.PI*r*r)} cm².` }; } },
{ d:"M", g(){ const r=ri(2,12);
  return { q:`Le périmètre d'un cercle vaut ${coefPi(D(2*r))} cm. Quel est son rayon ?`,
           s:`P = 2πr, donc 2r = ${2*r} et r = ${r} cm.` }; } },
{ d:"M", g(){ const r=ri(2,12);
  return { q:`L'aire d'un disque vaut ${coefPi(D(r*r))} cm². Quel est son rayon ?`,
           s:`A = πr², donc r² = ${r*r} et r = ${r} cm.` }; } },
{ d:"D", g(){ const r=ri(3,15);
  return { q:`Un disque a pour rayon ${r} cm. Calcule son périmètre et son aire (valeurs exactes puis arrondies au centième), et explique pourquoi les unités diffèrent.`,
           s:`P = ${coefPi(D(2*r))} cm ≈ ${arr2(2*Math.PI*r)} cm.\nA = ${coefPi(D(r*r))} cm² ≈ ${arr2(Math.PI*r*r)} cm².\nLe périmètre est une longueur (cm), l'aire une surface (cm²) : elles ne se comparent pas.` }; } },
{ d:"D", g(){ const r=ri(2,10);
  return { q:`On double le rayon d'un cercle de ${r} cm. Que deviennent son périmètre et son aire ?`,
           s:`Avant : P = ${coefPi(D(2*r))} cm, A = ${coefPi(D(r*r))} cm².\nAprès (rayon ${2*r} cm) : P = ${coefPi(D(4*r))} cm, A = ${coefPi(D(4*r*r))} cm².\nLe périmètre double, l'aire est multipliée par 4.` }; } },
{ d:"D", g(){ const c=ri(6,20), r=ri(1,Math.floor(c/2)-1);
  return { q:`Un carré de ${c} cm de côté contient un disque de ${r} cm de rayon. Calcule l'aire restante, arrondie au centième.`,
           s:`Aire du carré : ${c} × ${c} = ${c*c} cm².\nAire du disque : π × ${r}² = ${coefPi(D(r*r))} ≈ ${arr2(Math.PI*r*r)} cm².\nAire restante : ${c*c} − ${coefPi(D(r*r))} ≈ ${arr2(c*c-Math.PI*r*r)} cm².` }; } },
{ d:"D", g(){ const r=ri(3,15);
  return { q:`Calcule le périmètre d'un demi-cercle de rayon ${r} cm, diamètre compris. Donne la valeur exacte et l'arrondi au centième.`,
           s:`Demi-circonférence : (2 × π × ${r}) ÷ 2 = ${coefPi(D(r))} cm.\nIl faut ajouter le diamètre : ${2*r} cm.\nP = ${coefPi(D(r))} + ${2*r} ≈ ${arr2(Math.PI*r+2*r)} cm.` }; } },
{ d:"D", g(){ const r=ri(3,12); const el=pick(PRENOMS);
  return { q:`${el} calcule l'aire d'un disque de rayon ${r} cm en faisant 2 × π × ${r} et trouve ${coefPi(D(2*r))}. Explique son erreur.`,
           s:`${el} a utilisé la formule du PÉRIMÈTRE. L'aire s'obtient avec πr².\nA = π × ${r}² = ${coefPi(D(r*r))} cm² ≈ ${arr2(Math.PI*r*r)} cm², alors que P = ${coefPi(D(2*r))} cm.` }; } },
{ d:"D", g(){ const r=ri(2,10), prix=ri(10,40);
  return { q:`Une table ronde a un rayon de ${r} dm. Calcule son aire arrondie au centième, puis le prix d'un vernis à ${prix} € le m².`,
           s:`A = π × ${r}² = ${coefPi(D(r*r))} dm² ≈ ${arr2(Math.PI*r*r)} dm².\n1 m² = 100 dm², donc ${arr2(Math.PI*r*r)} dm² ≈ ${arr2(Math.PI*r*r/100)} m².\nPrix : ${arr2(Math.PI*r*r/100)} × ${prix} ≈ ${arr2(Math.PI*r*r/100*prix)} €.` }; } },
];

/* ── La chambre à moquette (problème) ── */
FAMILLES["La chambre à moquette"] = [
{ d:"F", g(){ const [p,rev]=pick(PIECES), L=long1(3,7), l=long1(2,5), prix=ri(9,35);
  return { q:`Une ${p} rectangulaire mesure ${S(L)} m sur ${S(l)} m. On veut la recouvrir de ${rev} vendu ${prix} € le m². 1) Calcule l'aire. 2) Calcule le prix.`,
           s:`1) A = ${S(L)} × ${S(l)} = ${S(mul(L,l))} m².\n2) Prix : ${S(mul(L,l))} × ${prix} = ${S(mul(mul(L,l),D(prix)))} €.` }; } },
{ d:"F", g(){ const [p]=pick(PIECES), L=long1(3,8), l=long1(2,6);
  return { q:`Une ${p} rectangulaire mesure ${S(L)} m sur ${S(l)} m. Calcule son aire.`,
           s:`A = ${S(L)} × ${S(l)} = ${S(mul(L,l))} m².` }; } },
{ d:"F", g(){ const [p]=pick(PIECES), L=long1(3,8), l=long1(2,6), prix=ri(4,12);
  return { q:`Une ${p} mesure ${S(L)} m sur ${S(l)} m. On pose une plinthe tout autour, à ${prix} € le mètre. Quelle longueur de plinthe faut-il ?`,
           s:`Périmètre : 2 × (${S(L)} + ${S(l)}) = ${S(mul(D(2),add(L,l)))} m.\nPrix : ${S(mul(D(2),add(L,l)))} × ${prix} = ${S(mul(mul(D(2),add(L,l)),D(prix)))} €.` }; } },
{ d:"M", g(){ const [p,rev]=pick(PIECES), L=long1(4,9), l=long1(3,7), prix=ri(12,40);
  return { q:`Une ${p} rectangulaire mesure ${S(L)} m sur ${S(l)} m. On veut la recouvrir de ${rev} vendu ${prix} € le m². 1) Calcule l'aire de la ${p}. 2) Calcule le prix du ${rev}.`,
           s:`1) ${S(L)} × ${S(l)} = ${S(mul(L,l))} m².\n2) ${S(mul(L,l))} × ${prix} = ${S(mul(mul(L,l),D(prix)))} €.` }; } },
{ d:"M", g(){ const [p,rev]=pick(PIECES), L=long1(4,8), l=long1(3,6), prix=ri(10,30), pl=ri(5,12);
  return { q:`Une ${p} mesure ${S(L)} m sur ${S(l)} m. On pose du ${rev} à ${prix} € le m² et une plinthe à ${pl} € le mètre. Calcule le coût total.`,
           s:`Aire : ${S(mul(L,l))} m² → ${S(mul(mul(L,l),D(prix)))} €.\nPérimètre : ${S(mul(D(2),add(L,l)))} m → ${S(mul(mul(D(2),add(L,l)),D(pl)))} €.\nTotal : ${S(add(mul(mul(L,l),D(prix)),mul(mul(D(2),add(L,l)),D(pl))))} €.` }; } },
{ d:"M", g(){ const [p,rev]=pick(PIECES), L=ri(4,9), l=ri(3,7), prix=ri(10,30);
  return { q:`Une ${p} de ${L} m sur ${l} m est recouverte de ${rev}. La facture s'élève à ${L*l*prix} €. Quel est le prix au m² ?`,
           s:`Aire : ${L} × ${l} = ${L*l} m².\nPrix au m² : ${L*l*prix} ÷ ${L*l} = ${prix} €.` }; } },
{ d:"D", g(){ const [p,rev]=pick(PIECES), L=long1(4,9), l=long1(3,7), prix=ri(12,40), c=long1(1,2);
  return { q:`Une ${p} rectangulaire mesure ${S(L)} m sur ${S(l)} m. Un placard carré de ${S(c)} m de côté occupe un coin et ne reçoit pas de ${rev}. Calcule l'aire à couvrir et le prix à ${prix} € le m².`,
           s:`Aire de la ${p} : ${S(mul(L,l))} m².\nAire du placard : ${S(mul(c,c))} m².\nÀ couvrir : ${S(mul(L,l))} − ${S(mul(c,c))} = ${S(sub(mul(L,l),mul(c,c)))} m².\nPrix : ${S(sub(mul(L,l),mul(c,c)))} × ${prix} = ${S(mul(sub(mul(L,l),mul(c,c)),D(prix)))} €.` }; } },
{ d:"D", g(){ const [p,rev]=pick(PIECES), L=long1(4,9), l=long1(3,7), prix=ri(12,35), perte=ri(5,15);
  return { q:`Une ${p} mesure ${S(L)} m sur ${S(l)} m. On achète ${perte} % de ${rev} en plus pour les chutes, à ${prix} € le m². Calcule l'aire à acheter, puis le prix.`,
           s:`Aire : ${S(mul(L,l))} m².\nAvec ${perte} % en plus : ${S(mul(L,l))} × ${(1+perte/100).toFixed(2).replace(".",",")} ≈ ${arr2(num(mul(L,l))*(1+perte/100))} m² (arrondi au centième).\nPrix : ${arr2(num(mul(L,l))*(1+perte/100))} × ${prix} ≈ ${arr2(num(mul(L,l))*(1+perte/100)*prix)} €.` }; } },
{ d:"D", g(){ const [p,rev]=pick(PIECES), L=long1(4,8), l=long1(3,6), lar=pick([2,4]);
  return { q:`Une ${p} mesure ${S(L)} m sur ${S(l)} m. Le ${rev} est vendu en rouleaux de ${lar} m de large. Quelle longueur de rouleau faut-il au minimum pour couvrir la largeur de ${S(l)} m ?`,
           s:`Il faut ${S(l)} ÷ ${lar} = ${arr2(num(l)/lar)} bandes, soit ${Math.ceil(num(l)/lar)} bandes entières.\nChaque bande mesure ${S(L)} m, donc il faut ${Math.ceil(num(l)/lar)} × ${S(L)} = ${arr2(Math.ceil(num(l)/lar)*num(L))} m de rouleau.` }; } },
{ d:"D", g(){ const [p,rev]=pick(PIECES), L=ri(4,9), l=ri(3,7), prix=ri(12,30), budget=ri(200,900);
  return { q:`Une ${p} de ${L} m sur ${l} m doit recevoir du ${rev} à ${prix} € le m². Le budget est de ${budget} €. Est-il suffisant ?`,
           s:`Aire : ${L} × ${l} = ${L*l} m².\nCoût : ${L*l} × ${prix} = ${L*l*prix} €.\n${L*l*prix<=budget?`${L*l*prix} € ≤ ${budget} € : le budget SUFFIT, il reste ${budget-L*l*prix} €.`:`${L*l*prix} € > ${budget} € : le budget NE suffit PAS, il manque ${L*l*prix-budget} €.`}` }; } },
{ d:"D", g(){ const [p,rev]=pick(PIECES), L=long1(4,8), l=long1(3,6); const el=pick(PRENOMS);
  return { q:`Pour une ${p} de ${S(L)} m sur ${S(l)} m, ${el} calcule la quantité de ${rev} en faisant 2 × (${S(L)} + ${S(l)}) = ${S(mul(D(2),add(L,l)))}. Explique son erreur.`,
           s:`${el} a calculé le PÉRIMÈTRE, qui sert pour les plinthes, pas pour le sol.\nLa surface à couvrir est l'AIRE : ${S(L)} × ${S(l)} = ${S(mul(L,l))} m².` }; } },
{ d:"D", g(){ const [p,rev]=pick(PIECES), L=ri(4,9), l=ri(3,7), prix1=ri(10,20), prix2=ri(21,35);
  return { q:`Une ${p} de ${L} m sur ${l} m peut recevoir un ${rev} à ${prix1} € le m² ou un modèle supérieur à ${prix2} € le m². Quelle est la différence de prix ?`,
           s:`Aire : ${L*l} m².\nPremier : ${L*l} × ${prix1} = ${L*l*prix1} €. Second : ${L*l} × ${prix2} = ${L*l*prix2} €.\nDifférence : ${L*l*prix2} − ${L*l*prix1} = ${L*l*(prix2-prix1)} €.` }; } },
];

const NOUVELLES = ["Aire et périmètre d'un triangle quelconque", "Aire et périmètre d'un cercle"];

/* ══════════ MOTEUR ══════════ */
const cle = t => String(t || "").replace(/²/g, "2").replace(/³/g, "3")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const sing = m => m.replace(/s$/, "");
const cleS = t => cle(t).split(" ").map(sing).join(" ");

function genererFamille(nom, besoins, vus) {
  const modeles = FAMILLES[nom], sortie = [];
  for (const d of ["F", "M", "D"]) {
    const dispo = modeles.filter(m => m.d === d);
    if (!dispo.length) continue;
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < besoins[d] * 500 + 12000) {
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
    lignes.push({ famille: nom, nouvelle: NOUVELLES.includes(nom) ? "oui" : "", total: ex.length,
                  Facile: n.F, Moyen: n.M, Difficile: n.D, modeles: FAMILLES[nom].length });
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
       FROM exercises WHERE chapitre ILIKE '%aire%' ORDER BY id`);
  const rows = brut.filter(r => cle(r.chapitre) === "aires");
  if (!rows.length) { console.log("Chapitre « Aires » introuvable."); await pool.end(); return; }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(rows, "chapitre", "Aires");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  const parFam = new Map();
  rows.forEach(r => { if (!r.famille) return; const k = cleS(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

  const vus = new Set(rows.map(r => cle(r.content)));
  const aInserer = [], rapport = [], inconnues = [];
  const CANON = {}; Object.keys(FAMILLES).forEach(f => { CANON[cleS(f)] = f; });

  const aTraiter = [...parFam.values()];
  NOUVELLES.forEach(n => { if (!parFam.has(cleS(n))) aTraiter.push({ nom: n, items: [], neuve: true }); });

  for (const g of aTraiter) {
    const type = g.items.length ? maj(g.items, "type", "exercice") : "exercice";
    if (type === "probleme" && EXCLURE_PB) {
      rapport.push({ famille: g.nom, type, avant: g.items.length, ajoutes: 0, apres: g.items.length, note: "exclue (problème)" }); continue; }
    const canon = CANON[cleS(g.nom)];
    if (!canon) { inconnues.push(g.nom); continue; }
    const dej = { F: 0, M: 0, D: 0 };
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M" : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919);
    const neufs = genererFamille(canon, besoinsDepuis(dej), vus);
    const source = g.items.length ? g.items : rows;
    const mod = { level: maj(source, "level", "college"), subject: maj(source, "subject", "Géométrie"),
                  classe: maj(source, "classe", "6ème"), type: g.items.length ? type : "exercice" };
    let num2 = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num2 = Math.max(num2, +m[1]); });
    neufs.forEach(e => { num2++; aInserer.push({ title: `${g.nom} ${num2}`, content: e.content, solution: e.solution,
      difficulty: LIBELLE[e.d], level: mod.level, subject: mod.subject, classe: mod.classe,
      chapitre: CHAPITRE, type: mod.type, famille: g.nom }); });
    rapport.push({ famille: g.nom, type: mod.type, avant: g.items.length, ajoutes: neufs.length,
                   apres: g.items.length + neufs.length, note: g.neuve ? "NOUVELLE" : "" });
  }
  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));
  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`aires-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : aires-avant-generation-${stamp}.json`);
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
