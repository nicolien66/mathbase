/* MathBase — cours-fonctions.js
   Chapitre « Notions de fonctions » : création de la famille « Cours ».

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. Affiche l'inventaire du chapitre (familles, effectifs, difficultés,
      un énoncé témoin par famille) — c'est cette sortie qui me permettra
      d'écrire ensuite le générateur des 100 exercices par famille.
   2. Insère la famille « Cours » : 32 questions de cours couvrant la
      définition, le vocabulaire, les notations, image et antécédent, les
      trois représentations (formule, tableau, courbe) et les confusions
      classiques. Pas d'objectif chiffré ici : la couverture prime.
      Elles ont été rédigées à partir du seul titre du chapitre, sans
      reprendre les cours animés.

   Idempotent : une question déjà présente (comparaison souple) est ignorée.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node cours-fonctions.js --inventaire   # ne fait que lister
     node cours-fonctions.js                # simulation
     node cours-fonctions.js --execute      # applique (+ sauvegarde JSON)
*/

"use strict";
const fs = require("fs");
const { Pool } = require("pg");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const INVENTAIRE = ARGS.includes("--inventaire");
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const FAMILLE = "Cours";

/* ═══ QUESTIONS DE COURS ═══  [difficulté, question, réponse attendue] */
const COURS = [

/* — définition et vocabulaire — */
["Facile", "Qu'appelle-t-on une fonction ?",
 "Une fonction est un procédé qui, à chaque nombre d'un ensemble de départ, associe UN SEUL nombre. C'est cette unicité qui fait la fonction : un nombre de départ ne peut pas avoir deux résultats."],
["Facile", "Comment lit-on l'écriture f(x) ?",
 "On lit « f de x ». Ce n'est pas un produit : f(x) désigne le résultat obtenu en appliquant la fonction f au nombre x."],
["Facile", "Dans l'écriture f(x) = 3x − 2, comment appelle-t-on x ?",
 "x est la variable de la fonction : c'est le nombre de départ, celui auquel on applique le procédé. On l'appelle aussi l'antécédent."],
["Facile", "Qu'appelle-t-on l'image d'un nombre par une fonction ?",
 "L'image d'un nombre est le résultat obtenu quand on lui applique la fonction. Si f(4) = 10, alors 10 est l'image de 4 par f."],
["Facile", "Qu'appelle-t-on un antécédent d'un nombre par une fonction ?",
 "Un antécédent d'un nombre y est un nombre de départ dont l'image est y. Si f(4) = 10, alors 4 est un antécédent de 10 par f."],
["Facile", "Que signifie l'égalité f(5) = 12 ?",
 "Elle se lit de deux façons : l'image de 5 par f est 12, et 5 est un antécédent de 12 par f."],
["Facile", "Comment note-t-on « la fonction f associe à x le nombre 4x + 1 » ?",
 "Deux écritures équivalentes : f : x ↦ 4x + 1, ou bien f(x) = 4x + 1. La flèche ↦ se lit « associe à »."],
["Facile", "Combien d'images un nombre peut-il avoir par une fonction ?",
 "Une seule. C'est la condition même pour parler de fonction : à un nombre de départ correspond un unique résultat."],
["Facile", "Un nombre peut-il avoir plusieurs antécédents par une fonction ?",
 "Oui. Rien ne l'interdit : plusieurs nombres de départ peuvent donner le même résultat. Il peut aussi n'en avoir aucun."],
["Facile", "Comment calcule-t-on l'image d'un nombre quand on connaît l'expression de la fonction ?",
 "On remplace la variable par ce nombre dans l'expression, puis on effectue le calcul. Pour f(x) = 3x − 2, l'image de 4 est f(4) = 3 × 4 − 2 = 10."],
["Facile", "Qu'est-ce qu'un tableau de valeurs d'une fonction ?",
 "C'est un tableau à deux lignes : la première donne des valeurs de la variable, la seconde les images correspondantes. Il ne décrit la fonction que pour les nombres qui y figurent."],
["Facile", "Qu'est-ce que la courbe représentative d'une fonction f ?",
 "C'est l'ensemble des points de coordonnées (x ; f(x)) : l'abscisse est le nombre de départ, l'ordonnée son image."],
["Facile", "Sur la courbe d'une fonction, que représentent l'abscisse et l'ordonnée d'un point ?",
 "L'abscisse est un antécédent, l'ordonnée est son image. Le point (3 ; 7) de la courbe traduit f(3) = 7."],
["Facile", "Quelles sont les trois façons de décrire une fonction ?",
 "Par une expression algébrique (une formule), par un tableau de valeurs, ou par une courbe représentative. Un programme de calcul en est une quatrième formulation, en français."],

/* — lecture et méthodes — */
["Moyen", "Comment lit-on graphiquement l'image de 3 par une fonction ?",
 "On part de 3 sur l'axe des abscisses, on monte (ou on descend) jusqu'à la courbe, puis on lit l'ordonnée du point atteint : c'est l'image de 3."],
["Moyen", "Comment lit-on graphiquement les antécédents de 5 par une fonction ?",
 "On trace la droite horizontale d'équation y = 5, puis on lit les abscisses de tous ses points d'intersection avec la courbe. Il peut y en avoir plusieurs, ou aucun."],
["Moyen", "Quelle est la différence entre une image et un antécédent ?",
 "L'image est le résultat, l'antécédent est le nombre de départ. On calcule une image directement en remplaçant la variable ; on cherche un antécédent en résolvant une équation."],
["Moyen", "Comment détermine-t-on un antécédent de 10 par la fonction f(x) = 3x − 2 ?",
 "On résout l'équation f(x) = 10, c'est-à-dire 3x − 2 = 10, donc 3x = 12 et x = 4. L'antécédent de 10 est 4."],
["Moyen", "Que représente f(0) et comment le lit-on sur la courbe ?",
 "f(0) est l'image de 0. Sur la courbe, c'est l'ordonnée du point d'intersection avec l'axe des ordonnées."],
["Moyen", "Comment trouve-t-on les antécédents de 0 par une fonction ?",
 "On résout l'équation f(x) = 0. Graphiquement, ce sont les abscisses des points d'intersection de la courbe avec l'axe des abscisses."],
["Moyen", "Comment traduit-on un programme de calcul par une fonction ?",
 "On appelle x le nombre de départ, puis on écrit chaque étape du programme sous forme d'expression. « Choisir un nombre, le multiplier par 5, retirer 3 » devient f(x) = 5x − 3."],
["Moyen", "Comment vérifie-t-on qu'un point appartient à la courbe représentative de f ?",
 "On calcule l'image de son abscisse et on la compare à son ordonnée. Le point A(2 ; 7) appartient à la courbe de f si et seulement si f(2) = 7."],
["Moyen", "Pourquoi f(x) ne se lit-il pas comme un produit ?",
 "Parce que f n'est pas un nombre mais le nom d'un procédé. Les parenthèses indiquent à quel nombre on l'applique. Écrire f × x n'aurait aucun sens."],
["Moyen", "Que peut-on lire dans un tableau de valeurs, et que ne peut-on pas en déduire ?",
 "On y lit les images des nombres qui y figurent. On ne peut rien affirmer des autres nombres : le tableau ne donne qu'un échantillon, pas la fonction entière."],
["Moyen", "Une courbe quelconque tracée dans un repère représente-t-elle toujours une fonction ?",
 "Non. Il faut qu'aucune droite verticale ne la coupe deux fois : sinon un même nombre aurait deux images, ce qui contredit la définition."],
["Moyen", "Que signifie « f est définie sur l'intervalle [0 ; 10] » ?",
 "Cela signifie que le procédé n'est appliqué qu'aux nombres compris entre 0 et 10 : hors de cet intervalle, la fonction ne donne pas d'image."],

/* — approfondissements et confusions classiques — */
["Difficile", "Pourquoi dit-on « UN antécédent » mais « L'image » ?",
 "Parce que l'image est unique par définition de la fonction, alors que les antécédents peuvent être plusieurs. L'article traduit cette dissymétrie."],
["Difficile", "Une courbe peut-elle couper deux fois l'axe des abscisses ? Deux fois l'axe des ordonnées ?",
 "L'axe des abscisses : oui, cela signifie simplement que 0 a deux antécédents. L'axe des ordonnées : non, car cela donnerait deux images à 0, ce qui est impossible pour une fonction."],
["Difficile", "Comment reconnaît-on graphiquement qu'un nombre n'a aucun antécédent ?",
 "La droite horizontale passant par ce nombre sur l'axe des ordonnées ne rencontre jamais la courbe."],
["Difficile", "Quelle différence fait-on entre les écritures f(x) = 2x et y = 2x ?",
 "Les deux décrivent la même relation. f(x) = 2x insiste sur la fonction et permet d'écrire f(3) = 6 ; y = 2x est l'équation de sa courbe et met les deux coordonnées sur le même plan."],
["Difficile", "Un tableau donne l'image 4 pour le nombre 2, puis l'image 9 pour ce même nombre 2. Peut-il provenir d'une fonction ?",
 "Non. Un nombre ne peut avoir qu'une seule image : ce tableau ne peut pas être celui d'une fonction."],
["Difficile", "Peut-on toujours retrouver l'expression d'une fonction à partir de sa courbe ?",
 "Non. La courbe permet de lire des images et des antécédents avec la précision du dessin, mais elle ne livre pas l'expression algébrique. On ne peut la conjecturer que si la forme de la courbe est reconnaissable."],
];

const maj = (t, ch, def) => { const c = new Map();
  t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
  return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };

(async () => {
  if (!EXECUTE && !INVENTAIRE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%onction%' ORDER BY id`);
  const rows = brut.filter(r => { const c = cle(r.chapitre);
    return c.includes("notion") && c.includes("fonction"); });
  if (!rows.length) {
    console.log("Chapitre « Notions de fonctions » introuvable.");
    console.log("Chapitres approchants :", [...new Set(brut.map(r => r.chapitre))].join(" | ") || "(aucun)");
    await pool.end(); return;
  }
  const CHAPITRE = maj(rows, "chapitre", "Notions de fonctions");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  /* ── INVENTAIRE ── */
  const groupes = new Map();
  rows.forEach(r => { const k = cle(r.famille) || "(sans famille)";
    if (!groupes.has(k)) groupes.set(k, { nom: r.famille || "(sans famille)", items: [] });
    groupes.get(k).items.push(r); });
  const inv = [...groupes.values()].map(g => {
    const d = { Facile: 0, Moyen: 0, Difficile: 0 };
    g.items.forEach(i => { if (d[i.difficulty] !== undefined) d[i.difficulty]++; });
    return { famille: g.nom, n: g.items.length, F: d.Facile, M: d.Moyen, D: d.Difficile,
             type: maj(g.items, "type", ""), classe: maj(g.items, "classe", "") };
  }).sort((a, b) => a.famille.localeCompare(b.famille, "fr"));
  console.log("Familles présentes :");
  console.table(inv);

  if (INVENTAIRE) {
    console.log("\nUn énoncé par famille (pour caler le style des futurs exercices) :");
    [...groupes.values()].sort((a, b) => a.nom.localeCompare(b.nom, "fr")).forEach(g => {
      const e = g.items[0];
      console.log(`\n■ ${g.nom}  [${e.difficulty || "?"}]\n  ${String(e.content).replace(/\s+/g, " ").slice(0, 240)}`);
    });
    await pool.end(); return;
  }

  /* ── FAMILLE « COURS » ── */
  const modele = {
    level:   maj(rows, "level",   "college"),
    subject: maj(rows, "subject", "Analyse"),
    classe:  maj(rows, "classe",  "3ème"),
    type:    maj(rows, "type",    "exercice"),
  };
  const dejaCours = rows.filter(r => cle(r.famille) === cle(FAMILLE));
  const contenus = new Set(rows.map(r => cle(r.content)));
  let num = 0; dejaCours.forEach(r => { const m = String(r.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });

  const aInserer = [];
  COURS.forEach(([diff, q, s]) => {
    if (contenus.has(cle(q))) return;
    contenus.add(cle(q)); num++;
    aInserer.push({ title: `${FAMILLE} ${num}`, content: q, solution: s, difficulty: diff,
      level: modele.level, subject: modele.subject, classe: modele.classe,
      chapitre: CHAPITRE, type: modele.type, famille: FAMILLE });
  });

  const d = {}; aInserer.forEach(e => { d[e.difficulty] = (d[e.difficulty] || 0) + 1; });
  console.log(`\nFamille « ${FAMILLE} » : ${dejaCours.length} question(s) déjà présente(s), ${aInserer.length} à insérer.`);
  console.log(`Répartition : Facile ${d.Facile || 0} · Moyen ${d.Moyen || 0} · Difficile ${d.Difficile || 0}`);
  console.log(`Colonnes reprises du chapitre : classe ${modele.classe} · matière ${modele.subject} · type ${modele.type}`);

  if (!EXECUTE) {
    console.log("\nTrois premières questions :");
    aInserer.slice(0, 3).forEach(e => console.log(`\n  [${e.difficulty}] ${e.content}\n  → ${e.solution}`));
    console.log("\n(simulation — relancez avec --execute)");
    await pool.end(); return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `fonctions-avant-cours-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : ${nom}`);

  for (const e of aInserer) {
    await pool.query(
      `INSERT INTO exercises
         (title, content, level, subject, difficulty, solution, classe, chapitre, type, famille)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [e.title, e.content, e.level, e.subject, e.difficulty, e.solution,
       e.classe, e.chapitre, e.type, e.famille]);
  }
  console.log(`${aInserer.length} question(s) de cours insérée(s).`);

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAPITRE]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
