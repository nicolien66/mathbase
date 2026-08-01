/* MathBase — cours-lineaire.js
   Chapitre « Fonction linéaire » : la famille « Fonction linéaire et
   proportionnalité » devient « Cours », et reçoit les questions de cours.

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. Affiche l'inventaire du chapitre (familles, effectifs, difficultés, un
      énoncé témoin par famille) — c'est cette sortie qui me permettra
      d'écrire ensuite le générateur des 100 exercices par famille.
   2. Renomme « Fonction linéaire et proportionnalité » en « Cours »
      (reconnaissance par mots entiers, insensible à la casse et aux accents).
   3. Insère 32 questions de cours : définition, coefficient, lien avec la
      proportionnalité, f(0) = 0, représentation graphique, distinction
      linéaire/affine, coefficients multiplicateurs et pourcentages.
      Pas d'objectif chiffré : la couverture prime.
      Rédigées à partir du seul titre du chapitre, sans reprendre les cours
      animés.

   ⚠ Signalé dans le rapport : les exercices déjà présents dans la famille
   renommée sont des exercices de CALCUL, pas des questions de cours. Le
   script ne les déplace pas de lui-même ; l'option --sortir-calculs "Nom"
   permet de les envoyer vers une autre famille si vous le souhaitez.

   Idempotent : une question déjà présente est ignorée.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node cours-lineaire.js --inventaire   # ne fait que lister
     node cours-lineaire.js                # simulation
     node cours-lineaire.js --execute      # applique (+ sauvegarde JSON)
*/

"use strict";
const fs = require("fs");
const { Pool } = require("pg");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const INVENTAIRE = ARGS.includes("--inventaire");
const SORTIR = (() => { const i = ARGS.indexOf("--sortir-calculs");
  return i >= 0 && ARGS[i + 1] && !ARGS[i + 1].startsWith("--") ? ARGS[i + 1] : null; })();

if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
function commencePar(nom, prefixe) {
  const a = cle(nom).split(" "), b = cle(prefixe).split(" ");
  return b.every((mot, i) => a[i] === mot);
}
const SOURCE = "fonction lineaire et proportionnalite";
const FAMILLE = "Cours";

/* ═══ QUESTIONS DE COURS ═══  [difficulté, question, réponse] */
const COURS = [

/* — définition et coefficient — */
["Facile", "Qu'est-ce qu'une fonction linéaire ?",
 "C'est une fonction qui, à tout nombre x, associe le nombre ax, où a est un nombre fixé. Autrement dit, elle se contente de multiplier par un même nombre."],
["Facile", "Comment appelle-t-on le nombre a dans f(x) = ax ?",
 "On l'appelle le coefficient de la fonction linéaire. C'est aussi le coefficient de proportionnalité de la situation."],
["Facile", "Comment calcule-t-on l'image d'un nombre par une fonction linéaire ?",
 "On multiplie ce nombre par le coefficient a. Pour f(x) = 3x, l'image de 5 est f(5) = 3 × 5 = 15."],
["Facile", "Que vaut f(0) pour n'importe quelle fonction linéaire ?",
 "f(0) = a × 0 = 0. L'image de 0 est toujours 0, quel que soit le coefficient."],
["Facile", "Comment écrit-on une fonction linéaire avec la notation « flèche » ?",
 "f : x ↦ ax. Par exemple f : x ↦ 4x pour la fonction linéaire de coefficient 4."],
["Facile", "Quelle est la représentation graphique d'une fonction linéaire ?",
 "C'est une droite qui passe par l'origine du repère."],
["Facile", "Pourquoi la droite d'une fonction linéaire passe-t-elle par l'origine ?",
 "Parce que f(0) = 0 : le point de coordonnées (0 ; 0) appartient toujours à la droite."],
["Facile", "Combien de points suffit-il pour tracer la représentation graphique d'une fonction linéaire ?",
 "Deux, et l'un est connu d'avance : l'origine. Il suffit donc de calculer une seule image pour obtenir un second point."],
["Facile", "La fonction définie par f(x) = 3x + 1 est-elle linéaire ?",
 "Non. À cause du terme constant + 1, elle est affine mais pas linéaire : f(0) = 1 et non 0."],
["Facile", "Comment détermine-t-on le coefficient a si l'on sait que f(4) = 12 ?",
 "On divise l'image par l'antécédent : a = 12 ÷ 4 = 3. La fonction est donc f(x) = 3x."],
["Facile", "Que devient l'image d'un nombre par une fonction linéaire si l'on double ce nombre ?",
 "Elle double aussi : f(2x) = a × 2x = 2 × ax = 2 f(x). C'est la marque de la proportionnalité."],

/* — méthodes — */
["Moyen", "Comment reconnaît-on dans un tableau que la situation relève d'une fonction linéaire ?",
 "On calcule le quotient de chaque image par son antécédent. Si tous ces quotients sont égaux, la situation est linéaire et ce quotient commun est le coefficient a."],
["Moyen", "Un tableau donne f(2) = 6 et f(5) = 15. Ces valeurs sont-elles compatibles avec une fonction linéaire ?",
 "6 ÷ 2 = 3 et 15 ÷ 5 = 3 : les deux quotients coïncident, donc oui, avec f(x) = 3x."],
["Moyen", "Comment détermine-t-on un antécédent par une fonction linéaire ?",
 "On résout l'équation ax = y, d'où x = y ÷ a. Pour f(x) = 5x, l'antécédent de 35 est 35 ÷ 5 = 7."],
["Moyen", "Quelle fonction traduit une augmentation de 15 % ?",
 "La fonction linéaire x ↦ 1,15x. Augmenter de 15 %, c'est multiplier par 1 + 0,15 = 1,15."],
["Moyen", "Quelle fonction traduit une diminution de 20 % ?",
 "La fonction linéaire x ↦ 0,8x. Diminuer de 20 %, c'est multiplier par 1 − 0,20 = 0,8."],
["Moyen", "Comment passe-t-on d'un pourcentage à un coefficient multiplicateur ?",
 "Pour une hausse de t %, le coefficient est 1 + t/100 ; pour une baisse de t %, il est 1 − t/100. Une hausse de 30 % donne 1,3, une baisse de 30 % donne 0,7."],
["Moyen", "Que peut-on dire de la droite selon le signe du coefficient a ?",
 "Si a > 0 la droite monte de gauche à droite, si a < 0 elle descend. Si a = 0 la fonction est nulle et la droite est confondue avec l'axe des abscisses."],
["Moyen", "Comment lit-on graphiquement le coefficient d'une fonction linéaire ?",
 "On part d'un point de la droite, on avance de 1 vers la droite : le déplacement vertical obtenu vaut a (vers le haut si a est positif, vers le bas s'il est négatif)."],
["Moyen", "Comment vérifie-t-on qu'un point appartient à la droite de la fonction linéaire f(x) = ax ?",
 "On multiplie son abscisse par a et on compare à son ordonnée. Le point A(3 ; 12) appartient à la droite de f(x) = 4x car 4 × 3 = 12."],
["Moyen", "Quelle différence fait-on entre une fonction linéaire et une fonction affine ?",
 "Une fonction affine s'écrit f(x) = ax + b. Elle est linéaire dans le seul cas b = 0. Toute fonction linéaire est donc affine, mais l'inverse est faux."],
["Moyen", "Deux fonctions linéaires différentes peuvent-elles avoir la même représentation graphique ?",
 "Non. La droite est entièrement déterminée par le coefficient a : deux coefficients différents donnent deux droites différentes."],
["Moyen", "Une situation de proportionnalité peut-elle être décrite autrement que par une fonction linéaire ?",
 "Non, les deux notions se recouvrent : toute situation de proportionnalité se traduit par une fonction linéaire, et réciproquement."],

/* — approfondissements — */
["Difficile", "Si f est linéaire, a-t-on f(x + y) = f(x) + f(y) ?",
 "Oui. f(x + y) = a(x + y) = ax + ay = f(x) + f(y). Cette propriété est fausse pour une fonction affine avec b ≠ 0."],
["Difficile", "Une augmentation de 10 % suivie d'une diminution de 10 % ramène-t-elle au prix de départ ?",
 "Non. Cela revient à multiplier par 1,1 puis par 0,9, donc par 0,99 : le prix final est inférieur de 1 % au prix initial."],
["Difficile", "Comment retrouve-t-on le coefficient à partir de deux points de la droite ?",
 "Un seul point autre que l'origine suffit : a = y ÷ x. Avec deux points, on peut aussi calculer la différence des ordonnées divisée par la différence des abscisses, ce qui redonne le même nombre."],
["Difficile", "Applique une fonction linéaire, puis une autre. Le résultat est-il encore linéaire ?",
 "Oui. Multiplier par a puis par a' revient à multiplier par a × a' : on obtient la fonction linéaire de coefficient a × a'. C'est ce qui justifie 1,1 × 0,9 = 0,99 pour deux pourcentages successifs."],
["Difficile", "Un tableau où l'image de 0 vaut 0 traduit-il forcément une fonction linéaire ?",
 "Non. C'est une condition nécessaire, pas suffisante : il faut encore que tous les quotients image ÷ antécédent soient égaux. Une fonction comme x ↦ x² vérifie aussi f(0) = 0 sans être linéaire."],
["Difficile", "Tout nombre a-t-il un antécédent par une fonction linéaire ?",
 "Si a ≠ 0, oui, et il est unique : x = y ÷ a. Si a = 0, la fonction est nulle : seul 0 a des antécédents, et il en a une infinité."],
["Difficile", "Une fonction linéaire peut-elle avoir un coefficient négatif ? Que devient alors la proportionnalité ?",
 "Oui, rien ne l'interdit : f(x) = −3x est linéaire. La proportionnalité subsiste, avec un coefficient négatif ; la droite descend et les images changent de signe par rapport aux antécédents."],
["Difficile", "Pourquoi la représentation d'une fonction affine avec b ≠ 0 ne passe-t-elle pas par l'origine ?",
 "Parce que f(0) = b, différent de 0 : la droite coupe l'axe des ordonnées au point (0 ; b) et non à l'origine. C'est ce qui la distingue graphiquement d'une fonction linéaire."],
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
    return c.includes("lineaire") && c.includes("fonction"); });
  if (!rows.length) {
    console.log("Chapitre « Fonction linéaire » introuvable.");
    console.log("Chapitres approchants :", [...new Set(brut.map(r => r.chapitre))].join(" | ") || "(aucun)");
    await pool.end(); return;
  }
  const CHAPITRE = maj(rows, "chapitre", "Fonction linéaire");
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

  /* ── RENOMMAGE ── */
  const aRenommer = [...groupes.values()].filter(g => commencePar(g.nom, SOURCE) && cle(g.nom) !== cle(FAMILLE));
  const dejaCours = [...groupes.values()].filter(g => cle(g.nom) === cle(FAMILLE));
  const anciens = aRenommer.flatMap(g => g.items);
  if (aRenommer.length) {
    aRenommer.forEach(g => console.log(`\n→ « ${g.nom} » devient « ${FAMILLE} » (${g.items.length} exercice(s)).`));
    console.log(`\n⚠ Ces ${anciens.length} exercice(s) sont des exercices de CALCUL, pas des questions de cours :`);
    console.table(anciens.map(e => ({ id: e.id, difficulte: e.difficulty,
      enonce: String(e.content).replace(/\s+/g, " ").slice(0, 80) })));
    console.log(SORTIR
      ? `  Ils seront déplacés vers « ${SORTIR} » (option --sortir-calculs).`
      : `  Ils restent dans « ${FAMILLE} ». Pour les déplacer : --sortir-calculs "Nom de famille".`);
  } else {
    console.log(`\n· Renommage sans objet : « ${SOURCE} » introuvable (déjà fait ?).`);
  }

  /* ── QUESTIONS DE COURS ── */
  const modele = {
    level:   maj(rows, "level",   "college"),
    subject: maj(rows, "subject", "Analyse"),
    classe:  maj(rows, "classe",  "3ème"),
    type:    maj(rows, "type",    "exercice"),
  };
  const contenus = new Set(rows.map(r => cle(r.content)));
  let num = 0;
  [...dejaCours.flatMap(g => g.items), ...(SORTIR ? [] : anciens)].forEach(r => {
    const m = String(r.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });

  /* quasi-doublons : deux questions de cours peuvent porter sur le même point
     sans être identiques au caractère près. On compare les ensembles de mots. */
  const mots = t => new Set(cle(t).split(" ").filter(m => m.length > 3));
  /* indice de Jaccard : rapporter à la seule plus petite question ferait
     ressortir toute question courte incluse dans une longue. */
  const recouvre = (a, b) => { const A = mots(a), B = mots(b);
    const inter = [...A].filter(m => B.has(m)).length;
    return inter / (A.size + B.size - inter); };
  const proches = [];
  COURS.forEach(([, q]) => rows.forEach(r => {
    if (recouvre(q, r.content) >= 0.5 && cle(q) !== cle(r.content))
      proches.push({ id: r.id, existant: String(r.content).replace(/\s+/g, " ").slice(0, 70),
                     nouvelle: q.slice(0, 70) }); }));
  if (proches.length) {
    console.log("\n⚠ Questions proches d'un énoncé déjà présent (insérées quand même, à arbitrer) :");
    console.table(proches);
  }

  const aInserer = [];
  COURS.forEach(([diff, q, s]) => {
    if (contenus.has(cle(q))) return;
    contenus.add(cle(q)); num++;
    aInserer.push({ title: `${FAMILLE} ${num}`, content: q, solution: s, difficulty: diff,
      level: modele.level, subject: modele.subject, classe: modele.classe,
      chapitre: CHAPITRE, type: modele.type, famille: FAMILLE });
  });
  const d = {}; aInserer.forEach(e => { d[e.difficulty] = (d[e.difficulty] || 0) + 1; });
  console.log(`\nFamille « ${FAMILLE} » : ${aInserer.length} question(s) de cours à insérer.`);
  console.log(`Répartition : Facile ${d.Facile || 0} · Moyen ${d.Moyen || 0} · Difficile ${d.Difficile || 0}`);
  console.log(`Colonnes reprises du chapitre : classe ${modele.classe} · matière ${modele.subject} · type ${modele.type}`);

  if (!EXECUTE) {
    console.log("\nTrois premières questions :");
    aInserer.slice(0, 3).forEach(e => console.log(`\n  [${e.difficulty}] ${e.content}\n  → ${e.solution}`));
    console.log("\n(simulation — relancez avec --execute)");
    await pool.end(); return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `lineaire-avant-cours-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : ${nom}`);

  if (anciens.length) {
    const cible = SORTIR || FAMILLE;
    const res = await pool.query("UPDATE exercises SET famille = $1 WHERE id = ANY($2)",
      [cible, anciens.map(e => e.id)]);
    console.log(`${res.rowCount} exercice(s) → famille « ${cible} ».`);
  }
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
