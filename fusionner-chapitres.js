/* MathBase — fusionner-chapitres.js
   Fusionne les chapitres côté base :
       « Aires »  + « Figures »  →  « Aires et figures »
       « Volumes » + « Solides » →  « Volumes et solides »

   Aucun exercice n'est supprimé : seule la colonne `chapitre` est mise à
   jour. Toutes les familles des deux chapitres se retrouvent côte à côte
   dans le chapitre fusionné.

   À lancer APRÈS patch-contenu-fusions.js, qui fait la même chose côté
   affichage. L'ordre n'a pas d'importance fonctionnelle, mais tant que les
   deux ne sont pas passés, un chapitre peut apparaître vide ou absent.

   ── CONTRÔLE ─────────────────────────────────────────────────────────────
   Le script vérifie qu'aucune famille ne porte le même nom dans les deux
   chapitres à fusionner : ce serait une collision, deux ensembles distincts
   se retrouvant confondus. Il s'arrête si le cas se présente.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node fusionner-chapitres.js              # simulation
     node fusionner-chapitres.js --execute
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");

const FUSIONS = [
  { sources: ["Aires", "Figures"],   nouveau: "Aires et figures" },
  { sources: ["Volumes", "Solides"], nouveau: "Volumes et solides" },
];

const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

(async () => {
  const { Pool } = require("pg");
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: tous } = await pool.query(
    `SELECT id, chapitre, famille FROM exercises WHERE chapitre IS NOT NULL`);
  const parChapitre = new Map();
  tous.forEach(r => {
    if (!parChapitre.has(r.chapitre)) parChapitre.set(r.chapitre, []);
    parChapitre.get(r.chapitre).push(r);
  });

  let arret = false;
  const plan = [];

  for (const f of FUSIONS) {
    console.log(`\n══ ${f.nouveau} ══`);
    const presents = f.sources.concat([f.nouveau])
      .map(nom => ({ nom, lignes: parChapitre.get(nom) || [] }))
      .filter(x => x.lignes.length);

    if (!presents.length) { console.log("  Aucun exercice trouvé pour cette fusion."); continue; }

    const tableau = [];
    presents.forEach(p => {
      const fam = new Map();
      p.lignes.forEach(l => { const k = l.famille || "(sans famille)";
        fam.set(k, (fam.get(k) || 0) + 1); });
      [...fam.entries()].sort().forEach(([famille, n]) =>
        tableau.push({ chapitre: p.nom, famille, n }));
    });
    console.table(tableau);

    /* collision de familles : deux chapitres portant la même famille */
    const vues = new Map();
    presents.forEach(p => {
      const noms = new Set(p.lignes.map(l => cle(l.famille)));
      noms.forEach(k => {
        if (vues.has(k) && vues.get(k) !== p.nom) {
          console.error(`  ✗ Collision : la famille « ${p.lignes.find(l => cle(l.famille) === k).famille } » existe`);
          console.error(`    à la fois dans « ${vues.get(k)} » et « ${p.nom} ». La fusion les confondrait.`);
          arret = true;
        } else vues.set(k, p.nom);
      });
    });

    const aDeplacer = presents.filter(p => p.nom !== f.nouveau)
      .reduce((s, p) => s.concat(p.lignes.map(l => l.id)), []);
    const total = presents.reduce((s, p) => s + p.lignes.length, 0);
    console.log(`  ${aDeplacer.length} exercice(s) à rattacher · ${total} au total après fusion`);
    plan.push({ nouveau: f.nouveau, ids: aDeplacer, total });
  }

  if (arret) {
    console.error("\nAucune modification : résolvez les collisions de familles d'abord.");
    await pool.end(); process.exit(1);
  }
  if (!plan.some(p => p.ids.length)) {
    console.log("\nRien à faire : les fusions sont déjà effectuées.");
    await pool.end(); return;
  }
  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const { rows: sauve } = await pool.query(
    `SELECT id, title, chapitre, famille FROM exercises WHERE chapitre = ANY($1)`,
    [FUSIONS.reduce((s, f) => s.concat(f.sources, [f.nouveau]), [])]);
  fs.writeFileSync(`chapitres-avant-fusion-${stamp}.json`, JSON.stringify(sauve, null, 2), "utf8");
  console.log(`\nSauvegarde : chapitres-avant-fusion-${stamp}.json`);

  for (const p of plan) {
    if (!p.ids.length) continue;
    const r = await pool.query("UPDATE exercises SET chapitre = $1 WHERE id = ANY($2)", [p.nouveau, p.ids]);
    console.log(`${r.rowCount} exercice(s) rattachés à « ${p.nouveau} ».`);
  }

  console.log("\nÉtat après fusion :");
  for (const f of FUSIONS) {
    const { rows } = await pool.query(
      `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
         FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [f.nouveau]);
    if (!rows.length) continue;
    console.log(`\n══ ${f.nouveau} — ${rows.reduce((s, r) => s + r.n, 0)} exercices ══`);
    console.table(rows);
  }
  const { rows: restes } = await pool.query(
    `SELECT chapitre, count(*)::int AS n FROM exercises
      WHERE chapitre = ANY($1) GROUP BY 1`,
    [FUSIONS.reduce((s, f) => s.concat(f.sources), [])]);
  console.log(restes.length
    ? `\n⚠ Exercices restés dans les anciens chapitres : ${JSON.stringify(restes)}`
    : `\nAucun exercice ne reste dans les anciens chapitres.`);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
