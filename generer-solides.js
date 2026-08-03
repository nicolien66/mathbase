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

/* ═══ LES MODÈLES DE QUESTION ═══
   Chaque modèle reçoit un solide et rend { d, q, s }. La figure est toujours
   affichée par le widget : l'énoncé n'y renvoie que par « ce solide ». */
const MOD = [];

/* — reconnaissance — */
MOD.push({ d: "F", g: o => ({ q: `Quel est le nom de ce solide ?`,
  s: `C'est ${o.nom} : ${o.indice}.` }) });
MOD.push({ d: "F", g: o => ({ q: `Nomme ce solide, puis dis s'il s'agit d'un polyèdre.`,
  s: `C'est ${o.nom}.\n${o.poly ? "C'est un POLYÈDRE : toutes ses faces sont planes." :
    "Ce n'est PAS un polyèdre : il possède une surface courbe. C'est un solide de révolution."}` }) });
MOD.push({ d: "M", g: o => ({ q: `Ce solide est-il un polyèdre ? Justifie.`,
  s: o.poly ? `Oui. Un polyèdre est un solide dont toutes les faces sont des polygones plans, ce qui est le cas ici : ${o.faces}.`
            : `Non. Un polyèdre n'a que des faces planes ; celui-ci possède une surface courbe. C'est ${o.nom}, un solide de révolution.` }) });

/* — dénombrements, polyèdres seulement — */
MOD.push({ d: "F", g: o => o.poly ? ({ q: `Combien ce solide a-t-il de faces ?`,
  s: `${o.F} faces : ${o.faces}.` }) : null });
MOD.push({ d: "F", g: o => o.poly ? ({ q: `Combien ce solide a-t-il de sommets ?`,
  s: `${o.Som} sommets.` }) : null });
MOD.push({ d: "M", g: o => o.poly ? ({ q: `Combien ce solide a-t-il d'arêtes ?`,
  s: `${o.A} arêtes.` }) : null });
MOD.push({ d: "M", g: o => o.poly ? ({ q: `Donne le nombre de faces, d'arêtes et de sommets de ce solide.`,
  s: `Faces : ${o.F} · Arêtes : ${o.A} · Sommets : ${o.Som}.` }) : null });
MOD.push({ d: "D", g: o => o.poly ? ({
  q: `Compte les faces, les arêtes et les sommets de ce solide, puis vérifie la relation F + S − A = 2.`,
  s: `Faces : ${o.F} · Sommets : ${o.Som} · Arêtes : ${o.A}.\n${o.F} + ${o.Som} − ${o.A} = ${o.F + o.Som - o.A} : la relation est vérifiée, comme pour tout polyèdre convexe.` }) : null });
MOD.push({ d: "D", g: o => o.poly ? ({
  q: `Ce solide a ${o.F} faces et ${o.A} arêtes. Retrouve son nombre de sommets sans le compter sur la figure.`,
  s: `On utilise la relation F + S − A = 2, donc S = 2 + A − F = 2 + ${o.A} − ${o.F} = ${o.Som}.\nVérification sur la figure : on compte bien ${o.Som} sommets.` }) : null });

/* — faces planes des solides de révolution — */
MOD.push({ d: "M", g: o => !o.poly ? ({ q: `Combien ce solide a-t-il de faces planes ?`,
  s: `${o.planes === 0 ? "Aucune" : o.planes} face${o.planes > 1 ? "s" : ""} plane${o.planes > 1 ? "s" : ""}${o.planes ? " : " + o.base.replace("un ", "un ") + (o.planes > 1 ? ", et une seconde identique" : "") : ""}. Le reste est une surface courbe.` }) : null });
MOD.push({ d: "D", g: o => !o.poly ? ({ q: `Ce solide est engendré par la rotation d'une figure plane. Laquelle ?`,
  s: `${o.nom.charAt(0).toUpperCase() + o.nom.slice(1)} est engendré par ${o.engendre}. C'est pourquoi on parle de solide de RÉVOLUTION.` }) : null });

/* — nature des faces, base — */
MOD.push({ d: "M", g: o => ({ q: `Quelle est la nature des faces de ce solide ?`,
  s: o.poly ? `Ses faces sont : ${o.faces}.` : `${o.faces.charAt(0).toUpperCase() + o.faces.slice(1)}.` }) });
MOD.push({ d: "M", g: o => o.base !== "aucune base" ? ({ q: `Quelle est la forme de la base de ce solide ?`,
  s: `Sa base est ${o.base}.` }) : null });
MOD.push({ d: "D", g: o => o.poly ? ({ q: `Ce solide a-t-il des faces rectangulaires ? Si oui, combien ?`,
  s: /rectangle/.test(o.faces) ? `Oui : ${o.faces.match(/(\d+) rectangles?/) ? o.faces.match(/(\d+) rectangles?/)[1] : "plusieurs"} faces rectangulaires.\nSes faces sont : ${o.faces}.`
    : (o.id === "cube" ? `Oui, ses 6 faces sont des carrés — et un carré EST un rectangle particulier, dont les quatre côtés ont la même longueur.`
    : `Non. Ses faces sont : ${o.faces}.`) }) : null });

/* — patrons — */
MOD.push({ d: "M", g: o => ({ q: `De quelles figures est composé le patron de ce solide ?`,
  s: o.poly ? `Son patron est composé de ${o.patron}.`
            : (o.id === "boule" ? `La boule n'a pas de patron plan : on ne peut pas l'aplatir sans la déformer. C'est ce qui rend les cartes du monde imparfaites.`
            : `Son patron est composé de ${o.patron}.`) }) });
MOD.push({ d: "D", g: o => o.poly ? ({ q: `Combien de figures faut-il découper pour construire le patron de ce solide ?`,
  s: `${o.F} figures, une par face : ${o.patron}.` }) : null });

/* — comparaisons et vocabulaire — */
let tourComp = 0;
MOD.push({ d: "D", g: o => { const cands = S.filter(x => x.id !== o.id && x.poly);
  const autre = cands[(tourComp++) % cands.length];
  if (!o.poly || !autre) return null;
  return { q: `Ce solide a-t-il plus ou moins de faces qu'${autre.nom} ?`,
    s: `Ce solide (${o.nom}) a ${o.F} faces ; ${autre.nom} en a ${autre.F}.\n${o.F > autre.F ? "Il en a donc PLUS." : o.F < autre.F ? "Il en a donc MOINS." : "Ils en ont AUTANT."}` }; } });
MOD.push({ d: "F", g: o => ({ q: `Qu'appelle-t-on une arête d'un solide ? Montre-en une sur ce solide.`,
  s: `Une arête est le segment où deux faces se rejoignent.\n${o.poly ? `Ce solide en compte ${o.A}.` : `Ici, les bords circulaires jouent ce rôle, mais ce ne sont pas des segments : ${o.nom} n'a pas d'arête au sens habituel.`}` }) });
MOD.push({ d: "F", g: o => ({ q: `Qu'appelle-t-on un sommet d'un solide ?`,
  s: `Un sommet est un point où plusieurs arêtes se rejoignent.\n${o.poly ? `Ce solide en compte ${o.Som}.` : (o.Som ? `${o.nom.charAt(0).toUpperCase() + o.nom.slice(1)} en possède un seul, sa pointe.` : `${o.nom.charAt(0).toUpperCase() + o.nom.slice(1)} n'en possède aucun.`)}` }) });
MOD.push({ d: "M", g: o => ({ q: `Qu'appelle-t-on une face d'un solide ? Combien ce solide en a-t-il de planes ?`,
  s: `Une face est une surface délimitée par des arêtes.\nCe solide a ${o.planes === 0 ? "aucune" : o.planes} face${o.planes > 1 ? "s" : ""} plane${o.planes > 1 ? "s" : ""}${o.poly ? "" : " ; le reste est une surface courbe"}.` }) });
MOD.push({ d: "D", g: o => ({ q: `Sur le dessin, certaines arêtes sont en pointillés. Pourquoi ?`,
  s: `Parce qu'elles sont CACHÉES : on ne les verrait pas si le solide était opaque. C'est la convention de la perspective cavalière.\n${o.poly ? `Ce solide a ${o.A} arêtes en tout, visibles et cachées confondues.` : `${o.nom.charAt(0).toUpperCase() + o.nom.slice(1)} n'ayant pas d'arête, les pointillés y marquent la partie cachée de sa surface courbe.`}` }) });
MOD.push({ d: "D", g: o => ({ q: `Ce solide est-il un prisme, une pyramide, ou un solide de révolution ? Justifie.`,
  s: o.famille === "prisme" ? `C'est un PRISME DROIT : deux bases identiques et parallèles, reliées par des faces rectangulaires. Ici, ${o.nom}.`
    : o.famille === "pyramide" ? `C'est une PYRAMIDE : une base, et des faces latérales triangulaires qui se rejoignent en un sommet unique. Ici, ${o.nom}.`
    : `C'est un SOLIDE DE RÉVOLUTION : il s'obtient en faisant tourner une figure plane autour d'un axe, et sa surface est courbe. Ici, ${o.nom}.` }) });
MOD.push({ d: "M", g: o => ({ q: `Ce solide a-t-il deux faces parallèles et identiques ?`,
  s: o.famille === "prisme" ? `Oui : ses deux bases, ${o.base === "un carré" ? "deux carrés" : o.base === "un rectangle" ? "deux rectangles" : o.base === "un triangle" ? "deux triangles" : "deux hexagones"} superposables et parallèles. C'est la définition même d'un prisme droit.`
    : o.id === "cylindre" ? `Oui : ses deux bases sont des disques parallèles de même rayon. Mais ce n'est pas un prisme, car sa surface latérale est courbe.`
    : `Non. ${o.nom.charAt(0).toUpperCase() + o.nom.slice(1)} n'a pas deux faces parallèles identiques.` }) });
MOD.push({ d: "D", g: o => ({ q: `Vrai ou faux : « tous les solides ont des arêtes ». Réponds en t'appuyant sur ce solide.`,
  s: `FAUX. ${o.poly ? `Ce solide en a bien ${o.A}, mais d'autres n'en ont aucune : la boule, par exemple, n'a ni arête ni sommet.`
    : `${o.nom.charAt(0).toUpperCase() + o.nom.slice(1)} en est justement un contre-exemple : sa surface est courbe.`}` }) });
MOD.push({ d: "D", g: o => o.poly ? ({ q: `Combien d'arêtes partent de chaque sommet de ce solide ?`,
  s: (() => { const parS = (2 * o.A) / o.Som;
    return Number.isInteger(parS)
      ? `Chaque arête relie 2 sommets, donc en tout : 2 × ${o.A} ÷ ${o.Som} = ${parS} arêtes par sommet.`
      : `Le compte n'est pas le même partout : 2 × ${o.A} ÷ ${o.Som} = ${(parS).toFixed(2).replace(".", ",")} en moyenne. Sur ce solide, le sommet principal en réunit davantage que ceux de la base.`; })() }) : null });
MOD.push({ d: "M", g: o => ({ q: `À quelle classe de solides celui-ci appartient-il : polyèdre ou solide de révolution ?`,
  s: o.poly ? `Un POLYÈDRE : toutes ses faces sont des polygones plans (${o.faces}).`
            : `Un SOLIDE DE RÉVOLUTION : sa surface est courbe, il ne peut donc pas être un polyèdre.` }) });

/* — faces latérales, éléments caractéristiques — */
MOD.push({ d: "M", g: o => o.famille === "prisme" ? ({ q: `Combien ce solide a-t-il de faces latérales, c'est-à-dire de faces qui ne sont pas des bases ?`,
  s: `${o.F - 2} faces latérales, toutes rectangulaires, plus les 2 bases : ${o.F} faces en tout.` })
  : o.famille === "pyramide" ? ({ q: `Combien ce solide a-t-il de faces latérales, c'est-à-dire de faces qui ne sont pas la base ?`,
  s: `${o.F - 1} faces latérales, toutes triangulaires, plus la base : ${o.F} faces en tout.` }) : null });
MOD.push({ d: "M", g: o => o.famille === "pyramide" ? ({ q: `Ce solide possède-t-il un sommet particulier ? Comment l'appelle-t-on ?`,
  s: `Oui : le SOMMET PRINCIPAL, le point où toutes les faces latérales se rejoignent. Les ${o.Som - 1} autres sommets sont ceux de la base.` }) : null });
MOD.push({ d: "D", g: o => o.famille === "pyramide" ? ({ q: `Qu'appelle-t-on la hauteur de ce solide ?`,
  s: `C'est le segment mené du sommet principal perpendiculairement à la base. Ce n'est pas une arête : elle est intérieure au solide.` }) : null });
MOD.push({ d: "D", g: o => o.id === "cone" ? ({ q: `Qu'appelle-t-on une génératrice de ce solide ?`,
  s: `C'est un segment joignant le sommet à un point du cercle de base. Toutes les génératrices d'un cône de révolution ont la même longueur.` }) : null });
MOD.push({ d: "M", g: o => o.famille === "prisme" || o.id === "cylindre" ? ({ q: `Qu'appelle-t-on la hauteur de ce solide ?`,
  s: `C'est la distance entre ses deux bases, mesurée perpendiculairement à celles-ci.${o.famille === "prisme" ? " Elle correspond à la longueur des arêtes latérales." : ""}` }) : null });
MOD.push({ d: "F", g: o => ({ q: `Ce solide peut-il rouler sur une table ? Justifie.`,
  s: o.poly ? `Non. ${o.nom.charAt(0).toUpperCase() + o.nom.slice(1)} n'a que des faces planes : il se pose, il ne roule pas.`
    : o.id === "boule" ? `Oui, dans toutes les directions : sa surface est entièrement courbe et sans aucune face plane.`
    : `Oui, mais dans une seule direction, en s'appuyant sur sa surface courbe.` }) });
MOD.push({ d: "D", g: o => o.poly ? ({ q: `Toutes les faces de ce solide ont-elles la même forme ?`,
  s: /et/.test(o.faces) ? `Non : ${o.faces}. Deux formes différentes coexistent.`
    : `Oui : ${o.faces}. C'est ce qui rend ce solide particulier.` }) : null });
MOD.push({ d: "D", g: o => o.poly && o.famille === "prisme" ? ({ q: `Les deux bases de ce solide sont-elles superposables ?`,
  s: `Oui. Dans un prisme droit, les deux bases sont identiques et parallèles ; ici, ce sont deux ${o.base.replace("un ", "").replace("une ", "")}s.` }) : null });
MOD.push({ d: "M", g: o => ({ q: `Sur combien de faces différentes peut-on poser ce solide à plat ?`,
  s: o.poly ? `Sur ses ${o.F} faces : elles sont toutes planes.`
    : o.planes === 0 ? `Sur aucune : ${o.nom} n'a pas de face plane.`
    : `Sur ${o.planes} face${o.planes > 1 ? "s" : ""} : ${o.base}${o.planes > 1 ? " et sa jumelle" : ""}. Le reste de sa surface est courbe.` }) });
MOD.push({ d: "D", g: o => ({ q: `Décris ce solide à quelqu'un qui ne le voit pas, sans le nommer.`,
  s: `Une description possible : ${o.indice}.
Il s'agit ${o.nom === "une boule" ? "d'" : "d'"}${o.nom}.` }) });
MOD.push({ d: "F", g: o => o.poly ? ({ q: `Ce solide a-t-il des faces courbes ?`,
  s: `Non, aucune : toutes ses faces sont planes (${o.faces}). C'est un polyèdre.` })
  : ({ q: `Ce solide a-t-il des faces courbes ?`,
  s: `Oui : sa surface latérale est courbe. C'est pourquoi ce n'est pas un polyèdre.` }) });
MOD.push({ d: "D", g: o => o.poly ? ({ q: `En comptant les arêtes une à une sur le dessin, combien en trouve-t-on de cachées ?`,
  s: `Le dessin en montre quelques-unes en pointillés, mais le solide en compte ${o.A} au total. Le nombre de pointillés dépend de l'angle de vue, pas du solide.` }) : null });
MOD.push({ d: "M", g: o => ({ q: `À quel niveau du collège étudie-t-on ce solide ?`,
  s: `${o.nom.charAt(0).toUpperCase() + o.nom.slice(1)} figure au programme de ${o.classe}.` }) });

/* — modèles difficiles applicables à TOUS les solides : sans eux, le quota
     de difficiles ne peut être atteint pour les solides de révolution — */
MOD.push({ d: "D", g: o => ({ q: `Un élève affirme que ce solide est un polyèdre parce qu'on peut le poser à plat. Que lui répondre ?`,
  s: `Pouvoir se poser à plat ne suffit pas : ${o.poly ? `ce solide EST bien un polyèdre, mais pour une autre raison — toutes ses faces sont planes (${o.faces}).`
    : `${o.nom} peut se poser sur ${o.planes ? "sa base" : "n'importe quel point"}, et pourtant ce n'est PAS un polyèdre : sa surface latérale est courbe.`}` }) });
MOD.push({ d: "D", g: o => ({ q: `Deux solides différents peuvent-ils avoir le même nombre de faces ? Cherche un exemple à partir de celui-ci.`,
  s: o.poly ? `Oui. Ce solide a ${o.F} faces${(() => { const j = S.filter(x => x.poly && x.F === o.F && x.id !== o.id);
      return j.length ? `, tout comme ${j.map(x => x.nom).join(" et ")}` : ""; })()}.
Le nombre de faces ne suffit donc pas à identifier un solide : il faut aussi regarder leur NATURE.`
    : `La question se pose surtout pour les polyèdres. ${o.nom.charAt(0).toUpperCase() + o.nom.slice(1)} n'a que ${o.planes === 0 ? "aucune" : o.planes} face${o.planes > 1 ? "s" : ""} plane${o.planes > 1 ? "s" : ""}, ce qui le distingue immédiatement des autres.` }) });
MOD.push({ d: "D", g: o => ({ q: `Si l'on double toutes les dimensions de ce solide, son nombre de faces change-t-il ?`,
  s: `Non. Agrandir un solide ne change ni le nombre de ses faces, ni celui de ses arêtes ou de ses sommets : seules les mesures changent, pas la forme.${o.poly ? ` Ce solide garde ses ${o.F} faces, ses ${o.A} arêtes et ses ${o.Som} sommets.` : ""}` }) });
MOD.push({ d: "D", g: o => ({ q: `Comment reconnaître ce solide sans le voir, à partir de sa seule description ?`,
  s: `Il suffit de savoir que ${o.indice}. C'est ${o.nom}${o.poly ? ` : ${o.F} faces, ${o.A} arêtes, ${o.Som} sommets` : ""}.` }) });
MOD.push({ d: "D", g: o => ({ q: `Pourquoi dessine-t-on ce solide en perspective plutôt qu'en vraie grandeur ?`,
  s: `Parce qu'un solide occupe l'espace et qu'une feuille est plane : on ne peut pas le représenter sans déformation. En perspective cavalière, la face avant garde sa vraie forme, les fuyantes sont réduites, et les arêtes cachées sont en pointillés.` }) });
MOD.push({ d: "D", g: o => ({ q: `Quelle question poserais-tu à un camarade pour lui faire deviner ce solide en une seule fois ?`,
  s: `Une bonne question porte sur ce qui le distingue de tous les autres. Par exemple : ${o.poly ? `« De quelle nature sont tes faces ? » — ici, ${o.faces}.` : `« Ta surface est-elle courbe, et combien as-tu de faces planes ? » — ici, ${o.planes === 0 ? "aucune" : o.planes}.`}
Il s'agit ${o.nom === "une boule" ? "d'" : "d'"}${o.nom}.` }) });

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
