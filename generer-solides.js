/* MathBase — generer-solides.js
   Fusionne « Prisme droit et cylindre » et « Pyramides et cônes » dans un
   chapitre « Solides », supprime toutes les familles, et crée une famille
   « Reconnaître un solide » : une FIGURE, puis une question sur ce solide.

   ── LE PRINCIPE ──────────────────────────────────────────────────────────
   Chaque exercice affiche un solide dessiné en perspective cavalière, sans
   aucune étiquette : le solide n'est jamais nommé, ni dans l'énoncé ni sur la
   figure. C'est à l'élève de le reconnaître avant de répondre.

   Neuf solides sont traités, dont trois qu'aucun des deux chapitres fusionnés
   ne couvrait : le cube et le pavé droit (6ᵉ), la boule (3ᵉ). S'y ajoutent le
   tétraèdre et le prisme à base hexagonale, sans quoi « compter les faces »
   se réduirait à deux ou trois cas.

   Aucune question de volume : le chapitre « Volumes » s'en charge.
   Les questions portent sur la reconnaissance, le dénombrement des faces,
   arêtes et sommets, la nature des faces, les patrons, et le vocabulaire.

   ── CONTRÔLE DE LA TABLE ─────────────────────────────────────────────────
   Les nombres de faces, arêtes et sommets vérifient la relation d'Euler
   F + S − A = 2 pour les six polyèdres. Le script la recontrôle au démarrage
   et s'arrête si elle est mise en défaut : une table fausse produirait 300
   exercices faux.

   ── PRÉREQUIS ────────────────────────────────────────────────────────────
   solides.js dans public/ et l'affichage branché par patch-solides-affichage.js.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node generer-solides.js --apercu
     node generer-solides.js
     node generer-solides.js --execute
   Options : --cible N (300) · --graine N (20260812) · --nom "Solides"
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const txtOpt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] && !ARGS[i + 1].startsWith("--") ? ARGS[i + 1] : d; };
const CIBLE = opt("--cible", 300);
const GRAINE = opt("--graine", 20260812);
const CHAP = txtOpt("--nom", "Solides");
const FAMILLE = "Reconnaître un solide";
const A_FUSIONNER = ["prisme droit et cylindre", "pyramides et cones"];

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];
const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/* ═══ LES NEUF SOLIDES ═══ */
const S = [
{ id: "cube", nom: "un cube", det: "le cube", classe: "6ème", poly: true,
  F: 6, A: 12, Som: 8, planes: 6,
  faces: "6 carrés", base: "un carré", famille: "prisme",
  patron: "6 carrés identiques",
  indice: "toutes ses faces sont des carrés de même côté" },
{ id: "pave", nom: "un pavé droit", det: "le pavé droit", classe: "6ème", poly: true,
  F: 6, A: 12, Som: 8, planes: 6,
  faces: "6 rectangles", base: "un rectangle", famille: "prisme",
  patron: "6 rectangles, égaux deux à deux",
  indice: "ses faces sont des rectangles et ses arêtes se coupent à angle droit" },
{ id: "prisme_triangulaire", nom: "un prisme droit à base triangulaire",
  det: "le prisme droit à base triangulaire", classe: "5ème", poly: true,
  F: 5, A: 9, Som: 6, planes: 5,
  faces: "2 triangles et 3 rectangles", base: "un triangle", famille: "prisme",
  patron: "2 triangles et 3 rectangles",
  indice: "il a deux faces triangulaires parallèles reliées par des rectangles" },
{ id: "prisme_hexagonal", nom: "un prisme droit à base hexagonale",
  det: "le prisme droit à base hexagonale", classe: "5ème", poly: true,
  F: 8, A: 18, Som: 12, planes: 8,
  faces: "2 hexagones et 6 rectangles", base: "un hexagone", famille: "prisme",
  patron: "2 hexagones et 6 rectangles",
  indice: "ses deux bases sont des hexagones, reliées par six rectangles" },
{ id: "pyramide_carree", nom: "une pyramide à base carrée",
  det: "la pyramide à base carrée", classe: "4ème", poly: true,
  F: 5, A: 8, Som: 5, planes: 5,
  faces: "1 carré et 4 triangles", base: "un carré", famille: "pyramide",
  patron: "1 carré et 4 triangles",
  indice: "toutes ses faces latérales se rejoignent en un même sommet" },
{ id: "pyramide_triangulaire", nom: "un tétraèdre", det: "le tétraèdre",
  classe: "4ème", poly: true,
  F: 4, A: 6, Som: 4, planes: 4,
  faces: "4 triangles", base: "un triangle", famille: "pyramide",
  patron: "4 triangles",
  indice: "c'est une pyramide dont la base est elle aussi un triangle" },
{ id: "cylindre", nom: "un cylindre de révolution", det: "le cylindre",
  classe: "5ème", poly: false, planes: 2, courbes: 1, Som: 0,
  faces: "2 disques et une surface courbe", base: "un disque", famille: "revolution",
  patron: "2 disques et 1 rectangle",
  indice: "ses deux bases sont des disques parallèles de même rayon",
  engendre: "un rectangle qui tourne autour d'un de ses côtés" },
{ id: "cone", nom: "un cône de révolution", det: "le cône", classe: "4ème",
  poly: false, planes: 1, courbes: 1, Som: 1,
  faces: "1 disque et une surface courbe", base: "un disque", famille: "revolution",
  patron: "1 disque et 1 secteur circulaire",
  indice: "une base en forme de disque et un sommet unique",
  engendre: "un triangle rectangle qui tourne autour d'un côté de l'angle droit" },
{ id: "boule", nom: "une boule", det: "la boule", classe: "3ème",
  poly: false, planes: 0, courbes: 1, Som: 0,
  faces: "aucune face plane", base: "aucune base", famille: "revolution",
  patron: "aucun patron plan",
  indice: "tous ses points sont à la même distance de son centre",
  engendre: "un demi-disque qui tourne autour de son diamètre" },
];

/* ═══ CONTRÔLE D'EULER, avant toute génération ═══ */
{
  const faux = S.filter(s => s.poly && s.F + s.Som - s.A !== 2);
  if (faux.length) {
    console.error("✗ Table incohérente — la relation d'Euler F + S − A = 2 est violée :");
    faux.forEach(s => console.error(`   ${s.id} : ${s.F} + ${s.Som} − ${s.A} = ${s.F + s.Som - s.A}`));
    process.exit(1);
  }
}

/* ═══ VOCABULAIRE ═══
   Pour chaque mot : à quels solides il s'applique, et pourquoi. C'est ce qui
   permet de poser « peut-on employer ce mot pour ce solide ? », question qui
   vaut aussi bien pour un oui que pour un non. */
const VOC = [
  { mot: "polyèdre", art: "un", ou: ["cube","pave","prisme_triangulaire","prisme_hexagonal","pyramide_carree","pyramide_triangulaire"],
    oui: o => `Oui. Un polyèdre est un solide dont toutes les faces sont des polygones plans : ici ${o.faces}.`,
    non: o => `Non. Un polyèdre n'a que des faces planes, or ce solide possède une surface courbe.` },
  { mot: "prisme droit", art: "un", ou: ["cube","pave","prisme_triangulaire","prisme_hexagonal"],
    oui: o => `Oui. Un prisme droit a deux bases identiques et parallèles, reliées par des faces rectangulaires : ici deux ${o.base.replace(/^une? /, "")}s.`,
    non: o => `Non. ${o.famille === "pyramide" ? "Ses faces latérales se rejoignent en un sommet unique au lieu de relier deux bases." : "Il n'a pas deux bases polygonales reliées par des rectangles."}` },
  { mot: "pyramide", art: "une", ou: ["pyramide_carree","pyramide_triangulaire"],
    oui: o => `Oui. Une pyramide a une base et des faces latérales triangulaires qui se rejoignent en un sommet unique : ici ${o.F - 1} triangles.`,
    non: o => `Non. ${o.famille === "prisme" ? "Ses faces latérales relient deux bases au lieu de converger vers un sommet." : "Ce solide n'a pas de faces latérales triangulaires."}` },
  { mot: "solide de révolution", art: "un", ou: ["cylindre","cone","boule"],
    oui: o => `Oui. Il s'obtient en faisant tourner une figure plane autour d'un axe : ${o.engendre}.`,
    non: o => `Non. Toutes ses faces sont planes ; aucune rotation d'une figure plane ne l'engendre.` },
  { mot: "base", art: "une", ou: ["cube","pave","prisme_triangulaire","prisme_hexagonal","pyramide_carree","pyramide_triangulaire","cylindre","cone"],
    oui: o => `Oui. Sa base est ${o.base}.${o.famille === "prisme" || o.id === "cylindre" ? " Il en a même deux, parallèles et identiques." : ""}`,
    non: o => `Non. La boule n'a aucune face plane : on ne peut désigner aucune partie comme sa base.` },
  { mot: "arête", art: "une", ou: ["cube","pave","prisme_triangulaire","prisme_hexagonal","pyramide_carree","pyramide_triangulaire"],
    oui: o => `Oui. Une arête est le segment où deux faces se rejoignent : ce solide en compte ${o.A}.`,
    non: o => `Non. Une arête est un SEGMENT. ${o.id === "boule" ? "La boule n'a aucun bord." : "Les bords de ce solide sont des cercles, pas des segments."}` },
  { mot: "sommet", art: "un", ou: ["cube","pave","prisme_triangulaire","prisme_hexagonal","pyramide_carree","pyramide_triangulaire","cone"],
    oui: o => o.poly ? `Oui. Un sommet est un point où plusieurs arêtes se rejoignent : ce solide en compte ${o.Som}.`
      : `Oui, un seul : sa pointe, où se rejoignent toutes les génératrices.`,
    non: o => `Non. ${o.id === "boule" ? "Tous les points de la boule jouent le même rôle : aucun n'est un sommet." : "Ses deux bases sont des cercles, sans aucun point anguleux."}` },
  { mot: "sommet principal", art: "un", ou: ["pyramide_carree","pyramide_triangulaire","cone"],
    oui: o => `Oui. C'est le point où se rejoignent toutes les faces latérales${o.id === "cone" ? ", la pointe du solide" : `, opposé à la base ; les ${o.Som - 1} autres sommets sont ceux de la base`}.`,
    non: o => `Non. ${o.famille === "prisme" ? "Dans un prisme, tous les sommets jouent le même rôle : aucun n'est privilégié." : "Ce solide n'a aucun sommet."}` },
  { mot: "face latérale", art: "une", ou: ["cube","pave","prisme_triangulaire","prisme_hexagonal","pyramide_carree","pyramide_triangulaire"],
    oui: o => o.famille === "prisme" ? `Oui. Ce sont les ${o.F - 2} faces rectangulaires qui relient les deux bases.`
      : `Oui. Ce sont les ${o.F - 1} triangles qui relient la base au sommet principal.`,
    non: o => `Non. ${o.id === "boule" ? "La boule n'a aucune face." : "Sa surface latérale est courbe : ce n'est pas une face plane."}` },
  { mot: "génératrice", art: "une", ou: ["cylindre","cone"],
    oui: o => o.id === "cone" ? `Oui. C'est un segment joignant le sommet à un point du cercle de base ; toutes ont la même longueur.`
      : `Oui. C'est un segment joignant un point d'une base au point correspondant de l'autre ; toutes ont la même longueur, égale à la hauteur.`,
    non: o => `Non. Ce mot désigne le segment qui engendre une surface courbe par rotation, ce qui ne concerne pas ce solide.` },
  { mot: "hauteur", art: "une", ou: ["cube","pave","prisme_triangulaire","prisme_hexagonal","pyramide_carree","pyramide_triangulaire","cylindre","cone"],
    oui: o => o.famille === "pyramide" || o.id === "cone"
      ? `Oui. C'est le segment mené du sommet principal perpendiculairement à la base. Il est intérieur au solide, ce n'est pas une arête.`
      : `Oui. C'est la distance entre les deux bases, mesurée perpendiculairement.`,
    non: o => `Non. Sans base ni sommet, la boule n'a pas de hauteur : on parle de son rayon ou de son diamètre.` },
  { mot: "rayon", art: "un", ou: ["cylindre","cone","boule"],
    oui: o => o.id === "boule" ? `Oui. C'est la distance du centre à n'importe quel point de la surface.`
      : `Oui. C'est le rayon du disque de base.`,
    non: o => `Non. Ce solide n'a ni disque ni surface sphérique : aucune de ses parties n'est un cercle.` },
  { mot: "centre", art: "un", ou: ["boule"],
    oui: o => `Oui. C'est le point équidistant de tous les points de la surface, ce qui définit la boule.`,
    /* Ne pas confondre le centre d'une boule — point équidistant de toute la
       surface — avec un centre de symétrie, que plusieurs solides possèdent. */
    non: o => `Non, pas au sens du centre d'une boule, c'est-à-dire d'un point équidistant de tous les points de la surface. `
      + (["cube","pave","prisme_hexagonal"].indexOf(o.id) >= 0
        ? `Ce solide possède bien un centre de SYMÉTRIE, mais c'est une autre notion.`
        : `Ce solide n'a d'ailleurs pas non plus de centre de symétrie.`) },
  { mot: "face courbe", art: "une", ou: ["cylindre","cone","boule"],
    oui: o => `Oui. ${o.id === "boule" ? "Sa surface est entièrement courbe." : "Sa surface latérale est courbe, ce qui l'empêche d'être un polyèdre."}`,
    non: o => `Non. Toutes ses faces sont planes : ${o.faces}. C'est un polyèdre.` },
];

/* ═══ LES MODÈLES DE QUESTION ═══
   Trois axes seulement : dénombrer, énoncer une propriété, éprouver un mot
   du vocabulaire. La figure est toujours affichée ; l'énoncé n'y renvoie
   que par « ce solide », sans jamais le nommer. */
const MOD = [];

/* — A. dénombrement — */
MOD.push({ d: "F", g: o => o.poly ? ({ q: `Combien ce solide a-t-il de faces ?`,
  s: `${o.F} faces : ${o.faces}.` }) : null });
MOD.push({ d: "F", g: o => o.poly ? ({ q: `Combien ce solide a-t-il de sommets ?`,
  s: `${o.Som} sommets.` }) : null });
MOD.push({ d: "F", g: o => o.poly ? ({ q: `Combien ce solide a-t-il d'arêtes ?`,
  s: `${o.A} arêtes.` }) : null });
MOD.push({ d: "M", g: o => o.poly ? ({ q: `Donne le nombre de faces, d'arêtes et de sommets de ce solide.`,
  s: `Faces : ${o.F} · Arêtes : ${o.A} · Sommets : ${o.Som}.` }) : null });
MOD.push({ d: "M", g: o => !o.poly ? ({ q: `Combien ce solide a-t-il de faces planes ?`,
  s: `${o.planes === 0 ? "Aucune" : o.planes} face${o.planes > 1 ? "s" : ""} plane${o.planes > 1 ? "s" : ""}${o.planes ? ` : ${o.base}${o.planes > 1 ? " et sa jumelle" : ""}` : ""}. Le reste de sa surface est courbe.` }) : null });
MOD.push({ d: "M", g: o => o.famille === "prisme" ? ({ q: `Combien ce solide a-t-il de faces latérales ?`,
  s: `${o.F - 2} faces latérales rectangulaires, auxquelles s'ajoutent les 2 bases : ${o.F} faces en tout.` })
  : o.famille === "pyramide" ? ({ q: `Combien ce solide a-t-il de faces latérales ?`,
  s: `${o.F - 1} faces latérales triangulaires, plus la base : ${o.F} faces en tout.` }) : null });
MOD.push({ d: "D", g: o => o.poly ? ({
  q: `Compte les faces, les arêtes et les sommets de ce solide, puis vérifie la relation F + S \u2212 A = 2.`,
  s: `Faces : ${o.F} · Sommets : ${o.Som} · Arêtes : ${o.A}.\n${o.F} + ${o.Som} \u2212 ${o.A} = ${o.F + o.Som - o.A} : la relation est vérifiée, comme pour tout polyèdre convexe.` }) : null });
MOD.push({ d: "D", g: o => o.poly ? ({
  q: `Ce solide a ${o.F} faces et ${o.A} arêtes. Retrouve son nombre de sommets sans les compter sur la figure.`,
  s: `La relation F + S \u2212 A = 2 donne S = 2 + A \u2212 F = 2 + ${o.A} \u2212 ${o.F} = ${o.Som}.\nVérification sur la figure : on compte bien ${o.Som} sommets.` }) : null });
MOD.push({ d: "D", g: o => o.poly ? ({ q: `Combien d'arêtes partent en moyenne de chaque sommet de ce solide ?`,
  s: (() => { const v = (2 * o.A) / o.Som;
    return Number.isInteger(v)
      ? `Chaque arête relie 2 sommets : 2 × ${o.A} ÷ ${o.Som} = ${v} arêtes par sommet.`
      : `2 × ${o.A} ÷ ${o.Som} = ${v.toFixed(2).replace(".", ",")} en moyenne. Le compte n'est pas le même partout : le sommet principal en réunit davantage que ceux de la base.`; })() }) : null });

/* Les dénombrements ci-dessus ne concernent que les polyèdres ; sans ces
   trois modèles, le quota de questions faciles ne peut être atteint pour le
   cylindre, le cône et la boule. */
MOD.push({ d: "F", g: o => !o.poly ? ({ q: `Combien ce solide a-t-il de sommets ?`,
  s: o.Som === 0 ? `Aucun. Sa surface ne présente aucun point anguleux.`
    : `Un seul : sa pointe, où se rejoignent toutes les génératrices.` }) : null });
MOD.push({ d: "F", g: o => !o.poly ? ({ q: `Combien ce solide a-t-il d'arêtes ?`,
  s: `Aucune. Une arête est un segment où deux faces planes se rejoignent ; ${o.id === "boule" ? "la boule n'a ni face plane ni bord" : "les bords de ce solide sont des cercles, pas des segments"}.` }) : null });
MOD.push({ d: "F", g: o => !o.poly ? ({ q: `Combien de faces planes et combien de surfaces courbes ce solide possède-t-il ?`,
  s: `${o.planes === 0 ? "Aucune" : o.planes} face${o.planes > 1 ? "s" : ""} plane${o.planes > 1 ? "s" : ""} et 1 surface courbe.` }) : null });
MOD.push({ d: "F", g: o => ({ q: `Ce solide est-il un polyèdre ?`,
  s: o.poly ? `Oui : toutes ses faces sont des polygones plans (${o.faces}).`
            : `Non : il possède une surface courbe. C'est un solide de révolution.` }) });

MOD.push({ d: "F", g: o => ({ q: `Ce solide possède-t-il des faces planes ? Combien ?`,
  s: o.poly ? `Oui, ${o.F} faces, toutes planes : ${o.faces}.`
    : o.planes === 0 ? `Aucune. Sa surface est entièrement courbe.`
    : `Oui, ${o.planes} : ${o.base}${o.planes > 1 ? " et sa jumelle" : ""}. Le reste est une surface courbe.` }) });
MOD.push({ d: "F", g: o => o.base !== "aucune base" ? ({ q: `Combien ce solide a-t-il de bases ?`,
  s: o.famille === "prisme" || o.id === "cylindre" ? `Deux, parallèles et identiques : ${o.base} chacune.`
    : `Une seule : ${o.base}.` }) : ({ q: `Ce solide a-t-il une base ?`,
  s: `Non. Aucune partie de sa surface n'est plane : la boule n'a pas de base.` }) });

/* — B. propriétés — */
MOD.push({ d: "F", g: o => ({ q: `Quelle est la nature des faces de ce solide ?`,
  s: o.poly ? `Ses faces sont : ${o.faces}.` : `${o.faces.charAt(0).toUpperCase() + o.faces.slice(1)}.` }) });
MOD.push({ d: "F", g: o => o.base !== "aucune base" ? ({ q: `Quelle est la forme de la base de ce solide ?`,
  s: `Sa base est ${o.base}.` }) : null });
MOD.push({ d: "M", g: o => ({ q: `Ce solide a-t-il deux faces parallèles et superposables ?`,
  s: o.famille === "prisme" ? `Oui : ses deux bases, deux ${o.base.replace(/^une? /, "")}s identiques et parallèles. C'est la définition même du prisme droit.`
    : o.id === "cylindre" ? `Oui : ses deux bases sont des disques parallèles de même rayon. Mais ce n'est pas un prisme, car sa surface latérale est courbe.`
    : `Non. ${o.famille === "pyramide" ? "Une pyramide n'a qu'une seule base ; les autres faces convergent vers un sommet." : "Ce solide n'a pas deux faces planes identiques."}` }) });
MOD.push({ d: "M", g: o => o.poly ? ({ q: `Toutes les faces de ce solide ont-elles la même forme ?`,
  s: / et /.test(o.faces) ? `Non : ${o.faces}. Deux formes différentes coexistent.`
    : `Oui : ${o.faces}.` }) : null });
MOD.push({ d: "M", g: o => ({ q: `Ce solide possède-t-il une surface courbe ?`,
  s: o.poly ? `Non : toutes ses faces sont planes (${o.faces}).` : `Oui : ${o.id === "boule" ? "sa surface l'est entièrement" : "sa surface latérale l'est"}, ce qui l'empêche d'être un polyèdre.` }) });
MOD.push({ d: "M", g: o => o.poly ? ({ q: `Ce solide a-t-il des faces rectangulaires ? Si oui, combien ?`,
  s: /rectangle/.test(o.faces)
    ? `Oui : ${(o.faces.match(/(\d+) rectangles?/) || [0, "plusieurs"])[1]} faces rectangulaires. Ses faces sont : ${o.faces}.`
    : o.id === "cube" ? `Oui, ses 6 faces. Ce sont des carrés, et un carré est un rectangle particulier dont les quatre côtés sont égaux.`
    : `Non. Ses faces sont : ${o.faces}.` }) : null });
MOD.push({ d: "D", g: o => !o.poly ? ({ q: `La rotation de quelle figure plane engendre ce solide ?`,
  s: `${o.engendre.charAt(0).toUpperCase() + o.engendre.slice(1)}. C'est pourquoi on parle de solide de RÉVOLUTION.` }) : null });
MOD.push({ d: "D", g: o => ({ q: `À quelle famille ce solide appartient-il : prismes, pyramides, ou solides de révolution ?`,
  s: o.famille === "prisme" ? `Aux PRISMES DROITS : deux bases identiques et parallèles, reliées par des faces rectangulaires.`
    : o.famille === "pyramide" ? `Aux PYRAMIDES : une base, et des faces latérales triangulaires convergeant vers un sommet unique.`
    : `Aux SOLIDES DE RÉVOLUTION : sa surface est courbe et il s'obtient par rotation d'une figure plane.` }) });
MOD.push({ d: "D", g: o => o.poly ? ({ q: `Ce solide a ${o.F} faces. Est-ce suffisant pour l'identifier avec certitude ?`,
  s: (() => { const j = S.filter(x => x.poly && x.F === o.F && x.id !== o.id);
    return j.length ? `Non. ${j.map(x => x.nom.charAt(0).toUpperCase() + x.nom.slice(1)).join(" et ")} en ${j.length > 1 ? "ont" : "a"} aussi ${o.F}.\nIl faut regarder la NATURE des faces : ici ${o.faces}.`
      : `Oui, parmi les solides du programme : aucun autre n'a exactement ${o.F} faces.\nSes faces sont : ${o.faces}.`; })() }) : null });

/* — C. vocabulaire : le mot convient-il à ce solide ? — */
VOC.forEach(v => {
  MOD.push({ d: "M", g: o => {
    const convient = v.ou.indexOf(o.id) >= 0;
    return { q: `Peut-on employer le mot « ${v.mot} » pour décrire ce solide ? Justifie.`,
             s: convient ? v.oui(o) : v.non(o) };
  } });
});
VOC.forEach(v => {
  MOD.push({ d: "D", g: o => {
    const convient = v.ou.indexOf(o.id) >= 0;
    return { q: `Vrai ou faux : « ce solide possède ${v.art} ${v.mot} ». Justifie.`,
             s: (convient ? "VRAI. " : "FAUX. ") + (convient ? v.oui(o) : v.non(o)).replace(/^(Oui|Non)[.,] ?/, "") };
  } });
});

/* ═══ GÉNÉRATION ═══ */
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const LIB = { F: "Facile", M: "Moyen", D: "Difficile" };

function generer(n) {
  const quota = { F: Math.round(n * REPART.F), M: Math.round(n * REPART.M) };
  quota.D = n - quota.F - quota.M;
  const vus = new Set(), out = [];
  /* on fait tourner les solides pour que tous soient traités également */
  let tour = 0;
  for (const d of ["F", "M", "D"]) {
    const dispo = MOD.filter(m => m.d === d);
    let reste = quota[d], essais = 0;
    while (reste > 0 && essais < quota[d] * 500 + 9000) {
      essais++;
      const o = S[tour % S.length]; tour++;
      const m = pick(dispo);
      let r; try { r = m.g(o); } catch (e) { continue; }
      if (!r || !r.q || !r.s) continue;
      const k = o.id + "|" + cle(r.q);
      if (vus.has(k)) continue;
      vus.add(k);
      out.push({ solide: o, difficulty: LIB[d], content: r.q, solution: r.s });
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
  const parS = {}, parD = {};
  ex.forEach(e => { parS[e.solide.id] = (parS[e.solide.id] || 0) + 1;
    parD[e.difficulty] = (parD[e.difficulty] || 0) + 1; });
  console.log(`Chapitre « ${CHAP} » — famille « ${FAMILLE} » : ${ex.length} exercices.`);
  console.log(`  Facile ${parD.Facile || 0} · Moyen ${parD.Moyen || 0} · Difficile ${parD.Difficile || 0}\n`);
  console.table(S.map(s => ({ solide: s.id, nom: s.nom, classe: s.classe,
    polyedre: s.poly ? "oui" : "non", exercices: parS[s.id] || 0 })));
  console.log(`\nQuestions distinctes : ${MOD.length} modèles\n`);
  ["cube", "cylindre", "boule", "pyramide_triangulaire"].forEach(id => {
    const e = ex.find(x => x.solide.id === id);
    if (!e) return;
    console.log(`══ ${id} ══\n[${e.difficulty}] ${e.content}\n  → ${e.solution.replace(/\n/g, "\n    ")}\n`);
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
       FROM exercises WHERE chapitre ILIKE '%prisme%' OR chapitre ILIKE '%pyramide%'
                         OR chapitre ILIKE '%c%ne%' OR chapitre = $1 ORDER BY id`, [CHAP]);
  const vises = brut.filter(r => A_FUSIONNER.includes(cle(r.chapitre)) || r.chapitre === CHAP);
  const g = new Map();
  vises.forEach(r => { const k = `${r.chapitre} › ${r.famille || "(sans famille)"}`;
    g.set(k, (g.get(k) || 0) + 1); });
  console.log(`Chapitres à fusionner dans « ${CHAP} » : ${vises.length} exercice(s).`);
  if (g.size) console.table([...g.entries()].map(([ligne, n]) => ({ ligne, n })));
  else console.log("(aucun exercice trouvé dans ces chapitres)");

  alea = mulberry32(GRAINE);
  const ex = generer(CIBLE);
  const parS = {}; ex.forEach(e => parS[e.solide.id] = (parS[e.solide.id] || 0) + 1);
  console.log(`\nÀ créer : famille « ${FAMILLE} » — ${ex.length} exercices`);
  console.table(S.map(s => ({ solide: s.nom, classe: s.classe, n: parS[s.id] || 0 })));

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`solides-avant-fusion-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : solides-avant-fusion-${stamp}.json`);
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS interactif JSONB`);

  if (vises.length) {
    const r = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [vises.map(x => x.id)]);
    console.log(`${r.rowCount} exercice(s) supprimé(s) des chapitres fusionnés.`);
  }

  const LOT = 50;
  for (let i = 0; i < ex.length; i += LOT) {
    const part = ex.slice(i, i + LOT), par = [];
    part.forEach((e, j) => par.push(
      `${FAMILLE} ${i + j + 1}`, e.content, "college", "Géométrie", e.difficulty,
      e.solution, e.solide.classe, CHAP, FAMILLE,
      JSON.stringify({ widget: "solide", type: e.solide.id })));
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
