/* MathBase — generer-figures.js
   Renomme « Les parallélogrammes » en « Figures », supprime toutes ses
   familles, et crée « Reconnaître une figure » : une FIGURE PLANE dessinée,
   puis une question sur elle.

   Même principe que le chapitre « Solides » : la figure n'est jamais nommée
   dans l'énoncé, c'est à l'élève de la reconnaître. Trois axes de question :
     · dénombrement — côtés, sommets, diagonales, axes de symétrie ;
     · propriétés   — côtés égaux, parallèles, angles droits, diagonales ;
     · vocabulaire  — « peut-on employer le mot X pour cette figure ? ».

   Le troisième axe est le plus riche, parce qu'il fait travailler les
   INCLUSIONS : un carré est aussi un rectangle, un losange, un
   parallélogramme et un quadrilatère. C'est là que les élèves trébuchent.

   ── UNE CONVENTION À CONNAÎTRE ───────────────────────────────────────────
   Le mot « trapèze » a deux définitions concurrentes au collège : « au moins
   deux côtés parallèles » (inclusive, tout parallélogramme est alors un
   trapèze) ou « exactement deux » (exclusive). Les corrigés retiennent la
   seconde, la plus répandue en France, mais SIGNALENT l'existence de l'autre
   plutôt que de trancher en silence.

   ── CONTRÔLE ─────────────────────────────────────────────────────────────
   Le nombre de diagonales d'un polygone à n côtés vaut n(n−3)/2. Le script
   vérifie la table avec cette formule avant toute génération.

   ── PRÉREQUIS ────────────────────────────────────────────────────────────
   solides.js à jour dans public/ — il dessine aussi les figures planes — et
   l'affichage branché par patch-solides-affichage.js. Aucun patch nouveau.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node generer-figures.js --apercu
     node generer-figures.js
     node generer-figures.js --execute
   Options : --cible N (300) · --graine N (20260813) · --nom "Figures"
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const txtOpt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] && !ARGS[i + 1].startsWith("--") ? ARGS[i + 1] : d; };
const CIBLE = opt("--cible", 300);
const GRAINE = opt("--graine", 20260813);
const CHAP = txtOpt("--nom", "Figures");
const FAMILLE = "Reconnaître une figure";
const ANCIEN = "les parallelogrammes";

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const pick = t => t[Math.floor(alea() * t.length)];
const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/* ═══ LES TREIZE FIGURES ═══
   cotes / som : nombre de côtés et de sommets · diag : diagonales
   egaux : description des côtés de même longueur
   paral : paires de côtés parallèles · droits : angles droits
   axes : axes de symétrie · centre : centre de symétrie */
const F = [
{ id: "triangle_quelconque", nom: "un triangle quelconque", classe: "6ème",
  cotes: 3, som: 3, axes: 0, centre: false, paral: 0, droits: 0,
  egaux: "aucun côté de même longueur",
  indice: "trois côtés, tous de longueurs différentes, et aucun angle droit" },
{ id: "triangle_isocele", nom: "un triangle isocèle", classe: "6ème",
  cotes: 3, som: 3, axes: 1, centre: false, paral: 0, droits: 0,
  egaux: "deux côtés de même longueur",
  indice: "trois côtés dont deux de même longueur" },
{ id: "triangle_equilateral", nom: "un triangle équilatéral", classe: "6ème",
  cotes: 3, som: 3, axes: 3, centre: false, paral: 0, droits: 0,
  egaux: "trois côtés de même longueur",
  indice: "trois côtés de même longueur et trois angles de 60°" },
{ id: "triangle_rectangle", nom: "un triangle rectangle", classe: "6ème",
  cotes: 3, som: 3, axes: 0, centre: false, paral: 0, droits: 1,
  egaux: "aucun côté de même longueur",
  indice: "trois côtés et un angle droit" },
{ id: "carre", nom: "un carré", classe: "6ème",
  cotes: 4, som: 4, axes: 4, centre: true, paral: 2, droits: 4,
  egaux: "quatre côtés de même longueur",
  diagonales: "de même longueur, perpendiculaires, et elles se coupent en leur milieu",
  indice: "quatre côtés égaux et quatre angles droits" },
{ id: "rectangle", nom: "un rectangle", classe: "6ème",
  cotes: 4, som: 4, axes: 2, centre: true, paral: 2, droits: 4,
  egaux: "des côtés égaux deux à deux",
  diagonales: "de même longueur et elles se coupent en leur milieu, mais elles ne sont pas perpendiculaires",
  indice: "quatre angles droits et des côtés égaux deux à deux" },
{ id: "losange", nom: "un losange", classe: "6ème",
  cotes: 4, som: 4, axes: 2, centre: true, paral: 2, droits: 0,
  egaux: "quatre côtés de même longueur",
  diagonales: "perpendiculaires et elles se coupent en leur milieu, mais elles n'ont pas la même longueur",
  indice: "quatre côtés de même longueur, sans angle droit" },
{ id: "parallelogramme", nom: "un parallélogramme", classe: "5ème",
  cotes: 4, som: 4, axes: 0, centre: true, paral: 2, droits: 0,
  egaux: "des côtés égaux deux à deux",
  diagonales: "se coupent en leur milieu, sans être ni perpendiculaires ni de même longueur",
  indice: "deux paires de côtés parallèles, sans angle droit ni côtés tous égaux" },
{ id: "trapeze", nom: "un trapèze", classe: "5ème",
  cotes: 4, som: 4, axes: 0, centre: false, paral: 1, droits: 0,
  egaux: "aucun côté de même longueur",
  diagonales: "n'ont aucune propriété particulière",
  indice: "une seule paire de côtés parallèles" },
{ id: "trapeze_rectangle", nom: "un trapèze rectangle", classe: "5ème",
  cotes: 4, som: 4, axes: 0, centre: false, paral: 1, droits: 2,
  egaux: "aucun côté de même longueur",
  diagonales: "n'ont aucune propriété particulière",
  indice: "une paire de côtés parallèles et deux angles droits" },
{ id: "pentagone_regulier", nom: "un pentagone régulier", classe: "6ème",
  cotes: 5, som: 5, axes: 5, centre: false, paral: 0, droits: 0,
  egaux: "cinq côtés de même longueur",
  indice: "cinq côtés de même longueur et cinq angles égaux" },
{ id: "hexagone_regulier", nom: "un hexagone régulier", classe: "6ème",
  cotes: 6, som: 6, axes: 6, centre: true, paral: 3, droits: 0,
  egaux: "six côtés de même longueur",
  indice: "six côtés de même longueur, parallèles deux à deux" },
{ id: "cercle", nom: "un cercle", classe: "6ème",
  cotes: 0, som: 0, axes: Infinity, centre: true, paral: 0, droits: 0,
  egaux: "aucun côté", polygone: false,
  indice: "tous ses points sont à la même distance de son centre" },
];
F.forEach(f => { if (f.polygone === undefined) f.polygone = true;
  f.diag = f.polygone ? f.cotes * (f.cotes - 3) / 2 : 0; });

/* contrôle de la table par la formule des diagonales */
{
  const faux = F.filter(f => f.polygone && f.diag !== f.cotes * (f.cotes - 3) / 2);
  if (faux.length) { console.error("✗ Table incohérente :", faux.map(f => f.id).join(", ")); process.exit(1); }
}

const nb = n => n === 0 ? "aucun" : String(n);
const axesTxt = f => f.axes === Infinity ? "une infinité d'axes de symétrie"
  : f.axes === 0 ? "aucun axe de symétrie"
  : `${f.axes} axe${f.axes > 1 ? "s" : ""} de symétrie`;

/* ═══ VOCABULAIRE ═══ Les inclusions sont le cœur du sujet : un carré EST
   un rectangle, un losange, un parallélogramme et un quadrilatère. */
const VOC = [
{ mot: "polygone", art: "un",
  ou: ["triangle_quelconque","triangle_isocele","triangle_equilateral","triangle_rectangle",
       "carre","rectangle","losange","parallelogramme","trapeze","trapeze_rectangle",
       "pentagone_regulier","hexagone_regulier"],
  oui: f => `Oui. Un polygone est une figure fermée délimitée par des segments : celle-ci en a ${f.cotes}.`,
  non: f => `Non. Un polygone est délimité par des SEGMENTS ; le cercle est une ligne courbe.` },
{ mot: "quadrilatère", art: "un",
  ou: ["carre","rectangle","losange","parallelogramme","trapeze","trapeze_rectangle"],
  oui: f => `Oui. Un quadrilatère est un polygone à 4 côtés, ce qui est le cas ici.`,
  non: f => `Non. Un quadrilatère a 4 côtés ; cette figure en a ${f.polygone ? f.cotes : "aucun, c'est une ligne courbe"}.` },
{ mot: "triangle", art: "un",
  ou: ["triangle_quelconque","triangle_isocele","triangle_equilateral","triangle_rectangle"],
  oui: f => `Oui. Un triangle est un polygone à 3 côtés, ce qui est le cas ici.`,
  non: f => `Non. Un triangle a 3 côtés ; cette figure en a ${f.polygone ? f.cotes : "aucun"}.` },
{ mot: "parallélogramme", art: "un",
  ou: ["carre","rectangle","losange","parallelogramme"],
  oui: f => `Oui. Un parallélogramme a ses côtés parallèles deux à deux, ce qui est le cas ici.${f.id !== "parallelogramme" ? ` ${f.nom.charAt(0).toUpperCase() + f.nom.slice(1)} est un parallélogramme PARTICULIER.` : ""}`,
  non: f => `Non. ${f.paral === 1 ? "Cette figure n'a qu'UNE paire de côtés parallèles ; il en faudrait deux." : "Cette figure n'a aucune paire de côtés parallèles."}` },
{ mot: "losange", art: "un",
  ou: ["carre","losange"],
  oui: f => `Oui. Un losange a ses quatre côtés de même longueur, ce qui est le cas ici.${f.id === "carre" ? " Un carré est un losange particulier, qui a en plus quatre angles droits." : ""}`,
  non: f => `Non. Un losange a ses 4 côtés de même longueur ; cette figure a ${f.egaux}.` },
{ mot: "rectangle", art: "un",
  ou: ["carre","rectangle"],
  oui: f => `Oui. Un rectangle a quatre angles droits, ce qui est le cas ici.${f.id === "carre" ? " Un carré est un rectangle particulier, dont les quatre côtés sont égaux." : ""}`,
  non: f => `Non. Un rectangle a 4 angles droits ; cette figure en a ${nb(f.droits)}.` },
{ mot: "carré", art: "un",
  ou: ["carre"],
  oui: f => `Oui. Quatre côtés de même longueur ET quatre angles droits : c'est la définition du carré.`,
  non: f => `Non. Il faudrait à la fois 4 côtés égaux et 4 angles droits ; cette figure a ${f.egaux} et ${nb(f.droits)} angle${f.droits > 1 ? "s" : ""} droit${f.droits > 1 ? "s" : ""}.` },
{ mot: "trapèze", art: "un",
  ou: ["trapeze","trapeze_rectangle"],
  oui: f => `Oui. Un trapèze a une paire de côtés parallèles, ce qui est le cas ici.`,
  non: f => f.paral >= 2
    ? `Avec la définition retenue ici — exactement deux côtés parallèles — non : cette figure en a ${f.paral} paires.\n(Certains manuels définissent le trapèze par « AU MOINS deux côtés parallèles » ; avec cette convention, tout parallélogramme serait un trapèze. Les deux usages existent.)`
    : `Non. Un trapèze a deux côtés parallèles ; cette figure n'en a aucun.` },
{ mot: "régulier", art: "un côté",
  ou: ["carre","triangle_equilateral","pentagone_regulier","hexagone_regulier"],
  oui: f => `Oui. Un polygone régulier a tous ses côtés de même longueur ET tous ses angles égaux, ce qui est le cas ici.`,
  non: f => `Non. Il faudrait tous les côtés égaux et tous les angles égaux ; cette figure a ${f.egaux}.` },
{ mot: "isocèle", art: "un côté",
  ou: ["triangle_isocele","triangle_equilateral"],
  oui: f => `Oui. Un triangle isocèle a au moins deux côtés de même longueur.${f.id === "triangle_equilateral" ? " Un triangle équilatéral l'est même trois fois : il est isocèle en chacun de ses sommets." : ""}`,
  non: f => `Non. Ce mot ne s'emploie que pour un triangle ayant deux côtés de même longueur ; ${f.cotes === 3 ? "celui-ci a " + f.egaux : "cette figure n'est pas un triangle"}.` },
{ mot: "diagonale", art: "une",
  ou: ["carre","rectangle","losange","parallelogramme","trapeze","trapeze_rectangle",
       "pentagone_regulier","hexagone_regulier"],
  oui: f => `Oui. Une diagonale joint deux sommets non consécutifs : cette figure en a ${f.diag}.`,
  non: f => f.polygone
    ? `Non. Un triangle n'a pas de diagonale : ses trois sommets sont deux à deux consécutifs.`
    : `Non. Le cercle n'a pas de sommet, donc pas de diagonale.` },
{ mot: "angle droit", art: "un",
  ou: ["carre","rectangle","triangle_rectangle","trapeze_rectangle"],
  oui: f => `Oui. Cette figure en a ${f.droits}.`,
  non: f => `Non. Cette figure n'a aucun angle droit.` },
{ mot: "axe de symétrie", art: "un",
  ou: ["triangle_isocele","triangle_equilateral","carre","rectangle","losange",
       "pentagone_regulier","hexagone_regulier","cercle"],
  oui: f => `Oui : cette figure a ${axesTxt(f)}.`,
  non: f => `Non. En la pliant, on ne peut jamais superposer exactement les deux moitiés.` },
{ mot: "centre de symétrie", art: "un",
  ou: ["carre","rectangle","losange","parallelogramme","hexagone_regulier","cercle"],
  oui: f => `Oui. Un demi-tour autour de ce point laisse la figure inchangée.${f.id === "parallelogramme" ? " C'est le point d'intersection de ses diagonales." : ""}`,
  non: f => `Non. Aucun demi-tour ne laisse cette figure inchangée.${f.axes ? ` Elle possède pourtant ${axesTxt(f)} : les deux notions sont distinctes.` : ""}` },
{ mot: "côtés parallèles", art: "des",
  ou: ["carre","rectangle","losange","parallelogramme","trapeze","trapeze_rectangle","hexagone_regulier"],
  oui: f => `Oui : ${f.paral} paire${f.paral > 1 ? "s" : ""} de côtés parallèles.`,
  non: f => `Non. ${f.polygone ? "Aucun de ses côtés n'est parallèle à un autre." : "Le cercle n'a pas de côté."}` },
];

/* ═══ MODÈLES ═══ */
const MOD = [];

/* — A. dénombrement — */
MOD.push({ d: "F", g: f => f.polygone ? ({ q: `Combien cette figure a-t-elle de côtés ?`,
  s: `${f.cotes} côtés.` }) : ({ q: `Combien cette figure a-t-elle de côtés ?`,
  s: `Aucun. Le cercle est une ligne courbe, pas un polygone.` }) });
MOD.push({ d: "F", g: f => f.polygone ? ({ q: `Combien cette figure a-t-elle de sommets ?`,
  s: `${f.som} sommets.` }) : ({ q: `Combien cette figure a-t-elle de sommets ?`,
  s: `Aucun. Le cercle ne présente aucun point anguleux.` }) });
MOD.push({ d: "M", g: f => f.polygone ? ({ q: `Combien cette figure a-t-elle de diagonales ?`,
  s: f.diag === 0 ? `Aucune. Dans un triangle, les trois sommets sont deux à deux consécutifs : il n'y a pas de diagonale.`
    : `${f.diag} diagonales. Pour un polygone à n côtés, on en compte n(n − 3) ÷ 2, soit ${f.cotes}(${f.cotes} − 3) ÷ 2 = ${f.diag}.` }) : null });
MOD.push({ d: "F", g: f => ({ q: `Donne le nombre de côtés et de sommets de cette figure.`,
  s: f.polygone ? `Côtés : ${f.cotes} · Sommets : ${f.som}.\nDans un polygone, ces deux nombres sont toujours égaux.`
    : `Le cercle n'a ni côté ni sommet : ce n'est pas un polygone.` }) });
MOD.push({ d: "M", g: f => ({ q: `Combien cette figure a-t-elle d'axes de symétrie ?`,
  s: `${axesTxt(f).charAt(0).toUpperCase() + axesTxt(f).slice(1)}.${f.axes === Infinity ? " Toute droite passant par le centre en est un." : ""}` }) });
MOD.push({ d: "M", g: f => f.polygone ? ({ q: `Combien de côtés de cette figure ont la même longueur ?`,
  s: `Elle a ${f.egaux}.` }) : null });
MOD.push({ d: "D", g: f => f.polygone && f.cotes >= 4 ? ({
  q: `Cette figure a ${f.cotes} côtés. Calcule son nombre de diagonales avec la formule n(n − 3) ÷ 2, puis vérifie sur le dessin.`,
  s: `${f.cotes} × (${f.cotes} − 3) ÷ 2 = ${f.cotes} × ${f.cotes - 3} ÷ 2 = ${f.diag}.\nOn compte bien ${f.diag} diagonales sur la figure.` }) : null });

/* — B. propriétés — */
MOD.push({ d: "F", g: f => ({ q: `Cette figure a-t-elle des angles droits ? Combien ?`,
  s: f.droits ? `Oui, ${f.droits} angle${f.droits > 1 ? "s" : ""} droit${f.droits > 1 ? "s" : ""}.` : `Non, aucun.` }) });
MOD.push({ d: "F", g: f => ({ q: `Cette figure a-t-elle des côtés parallèles ? Combien de paires ?`,
  s: f.paral ? `Oui : ${f.paral} paire${f.paral > 1 ? "s" : ""} de côtés parallèles.`
    : f.polygone ? `Non, aucune paire de côtés parallèles.` : `Non : le cercle n'a pas de côté.` }) });
MOD.push({ d: "M", g: f => f.polygone ? ({ q: `Tous les côtés de cette figure ont-ils la même longueur ?`,
  s: /^(quatre|trois|cinq|six)/.test(f.egaux) && !/deux à deux/.test(f.egaux)
    ? `Oui : ${f.egaux}.` : `Non : elle a ${f.egaux}.` }) : null });
MOD.push({ d: "M", g: f => f.diagonales ? ({ q: `Que peut-on dire des diagonales de cette figure ?`,
  s: `Elles ${f.diagonales}.` }) : null });
MOD.push({ d: "M", g: f => ({ q: `Cette figure possède-t-elle un centre de symétrie ?`,
  s: f.centre ? `Oui. Un demi-tour autour de ce point la laisse inchangée.`
    : `Non. Aucun demi-tour ne la laisse inchangée.` }) });
MOD.push({ d: "M", g: f => f.polygone && f.droits ? ({ q: `Deux côtés de cette figure sont-ils perpendiculaires ? Justifie.`,
  s: `Oui. Là où il y a un angle droit, les deux côtés qui le forment sont perpendiculaires : cette figure compte ${f.droits} angle${f.droits > 1 ? "s" : ""} droit${f.droits > 1 ? "s" : ""}.` })
  : f.polygone ? ({ q: `Deux côtés de cette figure sont-ils perpendiculaires ? Justifie.`,
  s: `Non. Aucun angle de cette figure n'est droit, donc aucun côté n'est perpendiculaire à un autre.` }) : null });
MOD.push({ d: "D", g: f => ({ q: `Cette figure a-t-elle plus d'axes de symétrie que de côtés ?`,
  s: f.axes === Infinity ? `Le cercle a une infinité d'axes et aucun côté : la comparaison n'a pas de sens ici.`
    : `Axes de symétrie : ${f.axes} · Côtés : ${f.cotes}.\n${f.axes > f.cotes ? "Plus." : f.axes === f.cotes ? "Autant — c'est le cas des polygones réguliers." : "Moins."}` }) });
MOD.push({ d: "D", g: f => f.polygone ? ({ q: `Décris cette figure par ses côtés et ses angles, sans la nommer.`,
  s: `Une description possible : ${f.cotes} côtés, ${f.egaux}, ${f.paral ? `${f.paral} paire${f.paral > 1 ? "s" : ""} de côtés parallèles` : "aucun côté parallèle"} et ${nb(f.droits)} angle${f.droits > 1 ? "s" : ""} droit${f.droits > 1 ? "s" : ""}.\nIl s'agit ${f.nom.startsWith("un ") ? "d'" + f.nom : "d'" + f.nom}.` }) : null });
/* Formulé sans nommer la figure : c'est à l'élève de conclure. */
MOD.push({ d: "D", g: f => f.polygone && f.cotes === 4 ? ({
  q: `Les côtés de cette figure sont-ils parallèles deux à deux ? Qu'en déduis-tu sur sa nature ?`,
  s: f.paral === 2 ? `Oui, elle a 2 paires de côtés parallèles.\nOn en déduit que c'est un parallélogramme${f.id !== "parallelogramme" ? ` — et même ${f.nom}, qui en est un cas particulier` : ""}.`
    : `Non : elle n'a qu'une seule paire de côtés parallèles.\nCe n'est donc pas un parallélogramme, mais ${f.nom}.` }) : null });

/* — C. vocabulaire — */
VOC.forEach(v => {
  MOD.push({ d: "M", g: f => {
    const ok = v.ou.indexOf(f.id) >= 0;
    return { q: `Peut-on employer le mot « ${v.mot} » pour décrire cette figure ? Justifie.`,
             s: ok ? v.oui(f) : v.non(f) }; } });
  MOD.push({ d: "D", g: f => {
    const ok = v.ou.indexOf(f.id) >= 0;
    return { q: `Vrai ou faux : « cette figure est ${v.art === "des" ? "une figure qui a des" : v.art} ${v.mot} ». Justifie.`,
             s: (ok ? "VRAI. " : "FAUX. ") + (ok ? v.oui(f) : v.non(f)).replace(/^(Oui|Non)[.,] ?/, "") }; } });
});

/* ═══ GÉNÉRATION ═══ */
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const LIB = { F: "Facile", M: "Moyen", D: "Difficile" };

function generer(n) {
  const quota = { F: Math.round(n * REPART.F), M: Math.round(n * REPART.M) };
  quota.D = n - quota.F - quota.M;
  const vus = new Set(), out = [];
  let tour = 0;
  for (const d of ["F", "M", "D"]) {
    const dispo = MOD.filter(m => m.d === d);
    let reste = quota[d], essais = 0;
    while (reste > 0 && essais < quota[d] * 500 + 9000) {
      essais++;
      const f = F[tour % F.length]; tour++;
      let r; try { r = pick(dispo).g(f); } catch (e) { continue; }
      if (!r || !r.q || !r.s) continue;
      const k = f.id + "|" + cle(r.q);
      if (vus.has(k)) continue;
      vus.add(k);
      out.push({ figure: f, difficulty: LIB[d], content: r.q, solution: r.s });
      reste--;
    }
    if (reste > 0) console.warn(`  ⚠ ${LIB[d]} : ${reste} manquant(s).`);
  }
  return out;
}

/* ═══ APERÇU ═══ */
if (APERCU) {
  alea = mulberry32(GRAINE);
  const ex = generer(CIBLE);
  const parF = {}, parD = {};
  ex.forEach(e => { parF[e.figure.id] = (parF[e.figure.id] || 0) + 1;
    parD[e.difficulty] = (parD[e.difficulty] || 0) + 1; });
  console.log(`Chapitre « ${CHAP} » — famille « ${FAMILLE} » : ${ex.length} exercices.`);
  console.log(`  Facile ${parD.Facile || 0} · Moyen ${parD.Moyen || 0} · Difficile ${parD.Difficile || 0}\n`);
  console.table(F.map(f => ({ figure: f.id, nom: f.nom, cotes: f.polygone ? f.cotes : "—",
    diagonales: f.polygone ? f.diag : "—", axes: f.axes === Infinity ? "∞" : f.axes,
    centre: f.centre ? "oui" : "non", exercices: parF[f.id] || 0 })));
  console.log(`\n${MOD.length} modèles de question · ${VOC.length} mots de vocabulaire\n`);
  ["carre", "trapeze", "cercle"].forEach(id => {
    ex.filter(e => e.figure.id === id).slice(0, 2).forEach(e =>
      console.log(`══ ${id} ══\n[${e.difficulty}] ${e.content}\n  → ${e.solution.replace(/\n/g, "\n    ")}\n`));
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
       FROM exercises WHERE chapitre ILIKE '%parall%' OR chapitre = $1 ORDER BY id`, [CHAP]);
  const vises = brut.filter(r => cle(r.chapitre) === ANCIEN || r.chapitre === CHAP);
  const g = new Map();
  vises.forEach(r => { const k = `${r.chapitre} › ${r.famille || "(sans famille)"}`;
    g.set(k, (g.get(k) || 0) + 1); });
  console.log(`À renommer en « ${CHAP} » puis vider : ${vises.length} exercice(s).`);
  if (g.size) console.table([...g.entries()].map(([ligne, n]) => ({ ligne, n })));

  alea = mulberry32(GRAINE);
  const ex = generer(CIBLE);
  const parF = {}; ex.forEach(e => parF[e.figure.id] = (parF[e.figure.id] || 0) + 1);
  console.log(`\nÀ créer : famille « ${FAMILLE} » — ${ex.length} exercices`);
  console.table(F.map(f => ({ figure: f.nom, classe: f.classe, n: parF[f.id] || 0 })));

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`figures-avant-refonte-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : figures-avant-refonte-${stamp}.json`);
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS interactif JSONB`);

  if (vises.length) {
    const r = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [vises.map(x => x.id)]);
    console.log(`${r.rowCount} exercice(s) supprimé(s).`);
  }

  const LOT = 50;
  for (let i = 0; i < ex.length; i += LOT) {
    const part = ex.slice(i, i + LOT), par = [];
    part.forEach((e, j) => par.push(
      `${FAMILLE} ${i + j + 1}`, e.content, "college", "Géométrie", e.difficulty,
      e.solution, e.figure.classe, CHAP, FAMILLE,
      JSON.stringify({ widget: "solide", type: e.figure.id })));
    await pool.query(
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution,
         classe, chapitre, type, famille, interactif)
       VALUES ${part.map((_, j) => { const b = j * 10;
         return `($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},'exercice',$${b+9},$${b+10}::jsonb)`;
       }).join(",")}`, par);
    console.log(`  ${Math.min(i + LOT, ex.length)} / ${ex.length}`);
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n,
            count(interactif)::int AS figures
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAP]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
