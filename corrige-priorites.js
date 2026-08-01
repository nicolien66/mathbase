/* MathBase — corrige-priorites.js
   Reclasse les exercices sur la priorité de la multiplication déjà en base :
     chapitre : « Priorités opératoires »  ->  « Enchaînement d'opérations »
     famille  : « Appliquer la priorité … » ->  « Priorité de la multiplication »

   Ne touche qu'aux exercices dont le titre commence par « Priorité de la
   multiplication » : aucun autre contenu n'est modifié.

   Sécurité : simulation par défaut, sauvegarde avant écriture.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node corrige-priorites.js              # simulation
     node corrige-priorites.js --execute    # applique
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE  = process.argv.includes("--execute");
const CHAPITRE = "Enchaînement d'opérations";
const FAMILLE  = "Priorité de la multiplication";

if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows } = await pool.query(
    `SELECT id, title, chapitre, famille FROM exercises
      WHERE title ILIKE 'Priorité de la multiplication%'
         OR chapitre ILIKE '%priorit%op%'
      ORDER BY id`);

  if (!rows.length) { console.log("Aucun exercice concerné."); await pool.end(); return; }

  const aFaire = rows.filter(r => r.chapitre !== CHAPITRE || r.famille !== FAMILLE);
  console.log(`${rows.length} exercice(s) trouvé(s), ${aFaire.length} à reclasser.`);
  if (aFaire.length) {
    console.log("\nAvant :");
    console.table(aFaire.slice(0, 5).map(r =>
      ({ id: r.id, titre: r.title.slice(0, 42), chapitre: r.chapitre, famille: r.famille })));
    console.log(`Après : chapitre « ${CHAPITRE} » · famille « ${FAMILLE} »`);
  }

  if (!EXECUTE || !aFaire.length) {
    if (!EXECUTE) console.log("\n(simulation — relancez avec --execute)");
    await pool.end();
    return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `exercices-avant-reclassement-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(rows, null, 2), "utf8");
  console.log(`\nSauvegarde : ${nom}`);

  const ids = aFaire.map(r => r.id);
  const res = await pool.query(
    `UPDATE exercises SET chapitre = $1, famille = $2 WHERE id = ANY($3)`,
    [CHAPITRE, FAMILLE, ids]);
  console.log(`${res.rowCount} exercice(s) reclassé(s).`);

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
