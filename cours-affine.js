/* MathBase — cours-affine.js
   Chapitre « Fonction affine » : création de la famille « Cours ».

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. Affiche l'inventaire du chapitre : familles, effectifs, difficultés,
      TYPE de chaque famille (exercice / probleme) et un énoncé témoin.
      La colonne « type » importe ici : vous m'avez demandé de limiter la
      génération aux familles d'EXERCICES, en laissant les problèmes de côté.
      L'inventaire signale donc explicitement les familles de type probleme.
   2. Insère la famille « Cours » : 33 questions couvrant la définition,
      le coefficient directeur, l'ordonnée à l'origine, la représentation
      graphique, la détermination de a et b, le sens de variation, le lien
      avec les fonctions linéaires et les confusions classiques.
      Pas d'objectif chiffré : la couverture prime.
      Rédigées à partir du seul titre du chapitre, sans reprendre les cours
      animés.

   Idempotent : une question déjà présente est ignorée, et les questions
   proches d'un énoncé existant sont signalées avant insertion.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node cours-affine.js --inventaire   # ne fait que lister
     node cours-affine.js                # simulation
     node cours-affine.js --execute      # applique (+ sauvegarde JSON)
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

/* ═══ QUESTIONS DE COURS ═══  [difficulté, question, réponse] */
const COURS = [

/* — définition et vocabulaire — */
["Facile", "Qu'est-ce qu'une fonction affine ?",
 "C'est une fonction qui, à tout nombre x, associe le nombre ax + b, où a et b sont deux nombres fixés."],
["Facile", "Dans f(x) = ax + b, comment appelle-t-on a et b ?",
 "a est le coefficient directeur, b l'ordonnée à l'origine."],
["Facile", "Comment calcule-t-on l'image d'un nombre par une fonction affine ?",
 "On remplace x par ce nombre puis on effectue le calcul. Pour f(x) = 3x − 2, l'image de 4 est 3 × 4 − 2 = 10."],
["Facile", "Que vaut f(0) pour une fonction affine f(x) = ax + b ?",
 "f(0) = a × 0 + b = b. L'image de 0 est toujours l'ordonnée à l'origine."],
["Facile", "Quelle est la représentation graphique d'une fonction affine ?",
 "C'est une droite. Elle passe par l'origine seulement si b = 0."],
["Facile", "Où la droite d'une fonction affine coupe-t-elle l'axe des ordonnées ?",
 "Au point de coordonnées (0 ; b), puisque f(0) = b. C'est ce qui donne son nom à l'ordonnée à l'origine."],
["Facile", "Combien de points faut-il pour tracer la droite d'une fonction affine ?",
 "Deux suffisent. On prend souvent (0 ; b), immédiat, et un second point obtenu en calculant une autre image."],
["Facile", "Toute fonction linéaire est-elle affine ?",
 "Oui : une fonction linéaire f(x) = ax est le cas particulier b = 0. La réciproque est fausse."],
["Facile", "La fonction définie par f(x) = 5 est-elle affine ?",
 "Oui, avec a = 0 et b = 5. C'est une fonction constante ; sa représentation est une droite horizontale."],
["Facile", "Comment écrit-on une fonction affine avec la notation « flèche » ?",
 "f : x ↦ ax + b. Par exemple f : x ↦ 3x − 2."],
["Facile", "Comment détermine-t-on un antécédent par une fonction affine ?",
 "On résout l'équation ax + b = y. Pour f(x) = 3x − 2, l'antécédent de 10 vérifie 3x − 2 = 10, donc 3x = 12 et x = 4."],
["Facile", "Que représente le coefficient directeur a sur la droite ?",
 "Il indique de combien l'ordonnée varie quand x augmente de 1. Si a = 3, l'image augmente de 3 chaque fois que x augmente de 1."],

/* — méthodes — */
["Moyen", "Comment détermine-t-on a et b à partir de deux images connues ?",
 "Le coefficient directeur est le quotient de la différence des images par la différence des antécédents. On reporte ensuite a dans l'une des deux égalités pour obtenir b."],
["Moyen", "f est affine, f(1) = 5 et f(3) = 11. Comment trouve-t-on son coefficient directeur ?",
 "a = (11 − 5) ÷ (3 − 1) = 6 ÷ 2 = 3. On a donc f(x) = 3x + b, et f(1) = 5 donne 3 + b = 5, soit b = 2."],
["Moyen", "Comment lit-on graphiquement le coefficient directeur d'une droite ?",
 "On part d'un point de la droite, on avance de 1 vers la droite, et on lit le déplacement vertical : c'est a, positif si l'on monte, négatif si l'on descend."],
["Moyen", "Comment lit-on graphiquement l'ordonnée à l'origine ?",
 "C'est l'ordonnée du point où la droite coupe l'axe des ordonnées."],
["Moyen", "Comment reconnaît-on qu'une fonction affine est croissante ou décroissante ?",
 "Elle est croissante si a > 0, décroissante si a < 0, et constante si a = 0. Seul le signe du coefficient directeur intervient."],
["Moyen", "Deux fonctions affines ont le même coefficient directeur mais des ordonnées à l'origine différentes. Que dire de leurs droites ?",
 "Elles sont parallèles et distinctes : même inclinaison, mais elles coupent l'axe des ordonnées en deux points différents."],
["Moyen", "Comment vérifie-t-on qu'un point appartient à la droite de f(x) = ax + b ?",
 "On calcule l'image de son abscisse et on la compare à son ordonnée. A(2 ; 7) appartient à la droite de f(x) = 3x + 1 car 3 × 2 + 1 = 7."],
["Moyen", "Comment reconnaît-on dans un tableau qu'une fonction peut être affine ?",
 "On vérifie que pour des écarts égaux entre les antécédents, les écarts entre les images sont eux aussi égaux. Ce rapport constant est le coefficient directeur."],
["Moyen", "Une fonction affine traduit-elle une situation de proportionnalité ?",
 "Seulement si b = 0, c'est-à-dire si elle est linéaire. Dès que b ≠ 0, les images ne sont pas proportionnelles aux antécédents."],
["Moyen", "Que représente l'abscisse du point où la droite coupe l'axe des abscisses ?",
 "C'est le nombre dont l'image est 0. On l'obtient en résolvant ax + b = 0, ce qui donne x = −b ÷ a lorsque a ≠ 0."],
["Moyen", "Comment traduit-on un abonnement à prix fixe plus tarif horaire par une fonction affine ?",
 "Le prix fixe est l'ordonnée à l'origine b, le tarif par unité est le coefficient directeur a. Un abonnement de 15 € plus 2 € par séance donne f(x) = 2x + 15."],

/* — approfondissements et confusions — */
["Difficile", "Pourquoi l'ordonnée à l'origine porte-t-elle ce nom ?",
 "Parce que c'est l'ordonnée du point de la droite situé à l'abscisse 0, c'est-à-dire au niveau de l'origine des abscisses. Ce point a pour coordonnées (0 ; b)."],
["Difficile", "Deux points d'une droite suffisent-ils toujours à déterminer la fonction affine ?",
 "Oui, à condition qu'ils aient des abscisses différentes. Deux points de même abscisse ne définiraient pas une fonction, car ce nombre aurait deux images."],
["Difficile", "Un nombre peut-il avoir plusieurs antécédents par une fonction affine ?",
 "Si a ≠ 0, non : l'équation ax + b = y a une solution unique. Si a = 0, la fonction est constante : le nombre b a une infinité d'antécédents, et tout autre nombre n'en a aucun."],
["Difficile", "Si f est affine, a-t-on f(x + y) = f(x) + f(y) ?",
 "Non en général. f(x + y) = a(x + y) + b = ax + ay + b, alors que f(x) + f(y) = ax + ay + 2b. Les deux ne coïncident que si b = 0, donc si f est linéaire."],
["Difficile", "Que devient l'image par une fonction affine si l'on double le nombre de départ ?",
 "Elle ne double pas, sauf si b = 0. f(2x) = 2ax + b, alors que le double de l'image vaut 2ax + 2b. L'écart est exactement b."],
["Difficile", "Comment retrouve-t-on b lorsque l'on connaît a et une seule image ?",
 "On reporte dans l'expression. Si a = 4 et f(3) = 10, alors 4 × 3 + b = 10, donc 12 + b = 10 et b = −2."],
["Difficile", "Deux droites de coefficients directeurs différents peuvent-elles ne jamais se couper ?",
 "Non. Des coefficients différents donnent des inclinaisons différentes : les droites finissent toujours par se croiser, en un point unique."],
["Difficile", "Comment détermine-t-on graphiquement le point d'intersection de deux droites, et que représente-t-il ?",
 "On lit les coordonnées du point commun. Son abscisse est le nombre qui a la même image par les deux fonctions : c'est la solution de l'équation f(x) = g(x)."],
["Difficile", "Une fonction affine peut-elle avoir une représentation verticale ?",
 "Non. Une droite verticale attribuerait plusieurs images à un même nombre, ce qui contredit la définition d'une fonction. La droite d'une fonction affine n'est jamais verticale."],
["Difficile", "Quelle différence y a-t-il entre f(x) = ax + b et l'équation y = ax + b ?",
 "Les deux décrivent la même relation. La première insiste sur la fonction et permet d'écrire f(3) ; la seconde est l'équation de la droite qui la représente."],
];

const maj = (t, ch, def) => { const c = new Map();
  t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
  return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };

(async () => {
  if (!EXECUTE && !INVENTAIRE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%ffine%' ORDER BY id`);
  const rows = brut.filter(r => cle(r.chapitre).includes("affine"));
  if (!rows.length) {
    console.log("Chapitre « Fonction affine » introuvable.");
    console.log("Chapitres approchants :", [...new Set(brut.map(r => r.chapitre))].join(" | ") || "(aucun)");
    await pool.end(); return;
  }
  const CHAPITRE = maj(rows, "chapitre", "Fonction affine");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  /* ── INVENTAIRE ── */
  const groupes = new Map();
  rows.forEach(r => { const k = cle(r.famille) || "(sans famille)";
    if (!groupes.has(k)) groupes.set(k, { nom: r.famille || "(sans famille)", items: [] });
    groupes.get(k).items.push(r); });
  const inv = [...groupes.values()].map(g => {
    const d = { Facile: 0, Moyen: 0, Difficile: 0 };
    g.items.forEach(i => { if (d[i.difficulty] !== undefined) d[i.difficulty]++; });
    const type = maj(g.items, "type", "");
    return { famille: g.nom, n: g.items.length, F: d.Facile, M: d.Moyen, D: d.Difficile,
             type, aGenerer: type === "probleme" ? "non (problème)" : "oui",
             classe: maj(g.items, "classe", "") };
  }).sort((a, b) => a.famille.localeCompare(b.famille, "fr"));
  console.log("Familles présentes :");
  console.table(inv);

  const pbs = inv.filter(i => i.type === "probleme");
  if (pbs.length) {
    console.log(`\n${pbs.length} famille(s) de type « probleme » : ${pbs.map(p => `« ${p.famille} »`).join(", ")}.`);
    console.log("  Elles seront LAISSÉES DE CÔTÉ par le générateur, comme demandé.");
  } else {
    console.log("\nAucune famille de type « probleme » : le générateur les traitera toutes.");
  }

  if (INVENTAIRE) {
    console.log("\nUn énoncé par famille (pour caler le style des futurs exercices) :");
    [...groupes.values()].sort((a, b) => a.nom.localeCompare(b.nom, "fr")).forEach(g => {
      const e = g.items[0];
      console.log(`\n■ ${g.nom}  [${e.difficulty || "?"}] (${maj(g.items, "type", "?")})\n  ${String(e.content).replace(/\s+/g, " ").slice(0, 240)}`);
    });
    await pool.end(); return;
  }

  /* ── FAMILLE « COURS » ── */
  const modele = {
    level:   maj(rows, "level",   "college"),
    subject: maj(rows, "subject", "Analyse"),
    classe:  maj(rows, "classe",  "3ème"),
    type:    "exercice",
  };
  const mots = t => new Set(cle(t).split(" ").filter(m => m.length > 3));
  const recouvre = (a, b) => { const A = mots(a), B = mots(b);
    const i = [...A].filter(m => B.has(m)).length; return i / (A.size + B.size - i); };
  const proches = [];
  COURS.forEach(([, q]) => rows.forEach(r => {
    if (recouvre(q, r.content) >= 0.5 && cle(q) !== cle(r.content))
      proches.push({ id: r.id, existant: String(r.content).replace(/\s+/g, " ").slice(0, 70),
                     nouvelle: q.slice(0, 70) }); }));
  if (proches.length) {
    console.log("\n⚠ Questions proches d'un énoncé déjà présent (insérées quand même, à arbitrer) :");
    console.table(proches);
  }

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
  const nom = `affine-avant-cours-${stamp}.json`;
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
