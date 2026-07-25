/* MathBase — supprime-sans-pdf.js
   Supprime les annales qui n'ont aucun PDF associé (image_url vide ou nulle).

   Ce sont les fiches générées : « Les grands nombres entiers »,
   « Fractions et demi-droite graduée »… par opposition aux annales de brevet
   importées, qui pointent toutes vers un fichier PDF.

   Sécurité : simulation par défaut. Une sauvegarde JSON COMPLÈTE des lignes
   (questions comprises) est écrite avant toute suppression, ce qui permet de
   les réinsérer si besoin.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node supprime-sans-pdf.js              # simulation
     node supprime-sans-pdf.js --execute    # supprime
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");

if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour supprimer ===\n");

  const { rows } = await pool.query(
    "SELECT * FROM annales WHERE image_url IS NULL OR btrim(image_url) = '' ORDER BY id");

  if (!rows.length) { console.log("Aucune annale sans PDF. Rien à faire."); await pool.end(); return; }

  console.log(`${rows.length} annale(s) sans PDF :\n`);
  rows.slice(0, 30).forEach(a => {
    let n = a.questions;
    if (typeof n === "string") { try { n = JSON.parse(n || "[]"); } catch { n = []; } }
    console.log(`  [${String(a.id).padStart(3)}] ${(a.title || "(sans titre)").slice(0, 56)}` +
                `  — ${Array.isArray(n) ? n.length : 0} question(s)`);
  });
  if (rows.length > 30) console.log(`  … et ${rows.length - 30} autre(s)`);

  const { rows: reste } = await pool.query(
    "SELECT count(*)::int AS n FROM annales WHERE image_url IS NOT NULL AND btrim(image_url) <> ''");
  console.log(`\nAnnales conservées (avec PDF) : ${reste[0].n}`);

  if (!EXECUTE) {
    console.log("\n[simulation] DELETE FROM annales WHERE image_url IS NULL OR btrim(image_url) = '';");
    await pool.end();
    return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `annales-sans-pdf-supprimees-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(rows, null, 2), "utf8");
  console.log(`\nSauvegarde complète : ${nom}`);

  const del = await pool.query(
    "DELETE FROM annales WHERE image_url IS NULL OR btrim(image_url) = ''");
  console.log(`${del.rowCount} annale(s) supprimée(s).`);
  console.log(`Réinsertion possible depuis ${nom} en cas d'erreur.`);

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
