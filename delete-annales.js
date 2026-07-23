/* Supprime de la table `annales` les sujets dont des figures restent non décrites.
   Conçu pour Railway (Postgres) — utilise la même dépendance `pg` que vos seeds.

   SÉCURITÉ : simulation par défaut. Rien n'est supprimé sans --execute.
   Une sauvegarde JSON des lignes est écrite avant toute suppression.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://postgres:MDP@xxx.proxy.rlwy.net:PORT/railway"
     node delete-annales.js                # simulation
     node delete-annales.js --execute      # supprime réellement

   ATTENTION : sur Railway, prenez DATABASE_PUBLIC_URL (domaine .proxy.rlwy.net)
   et non DATABASE_URL (postgres.railway.internal), qui n'est joignable que
   depuis l'intérieur du projet Railway. */

const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const EXECUTE  = process.argv.includes("--execute");
const LIST     = process.argv.find(a => a.startsWith("--list="))?.slice(7)
                 || "pdf-a-supprimer.txt";
const PREFIX   = process.env.URL_PREFIX || "annales-pdf/";

if (!process.env.DATABASE_URL) {
  console.error("✗ DATABASE_URL manquant.");
  console.error("  Railway → service Postgres → onglet Variables → DATABASE_PUBLIC_URL");
  process.exit(1);
}
if (/railway\.internal/.test(process.env.DATABASE_URL)) {
  console.error("✗ Vous utilisez l'URL interne (postgres.railway.internal).");
  console.error("  Elle n'est pas joignable depuis votre PC : prenez DATABASE_PUBLIC_URL.");
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },   // Railway impose TLS
});

// Normalisation identique à celle de la base : '-' -> '_', puis '__' -> '_'
const norm = n => n.replace(/-/g, "_").replace(/_+/g, "_");

function readList() {
  if (!fs.existsSync(LIST)) throw new Error(`Liste introuvable : ${LIST}`);
  const names = fs.readFileSync(LIST, "utf8")
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l && !l.startsWith("#"))
    .map(l => path.basename(l));                 // ignore le préfixe BREVET/
  const urls = new Set();
  for (const n of names) { urls.add(PREFIX + n); urls.add(PREFIX + norm(n)); }
  return { names, urls: [...urls] };
}

async function main() {
  const { names, urls } = readList();
  console.log(`${names.length} fichier(s) dans la liste, ${urls.length} image_url ciblée(s).\n`);

  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows } = await pool.query(
    "SELECT id, image_url FROM annales WHERE image_url = ANY($1)", [urls]);

  if (!rows.length) {
    console.log("Aucune ligne correspondante. Rien à faire.");
    console.log("(Vérifiez le préfixe : actuellement « " + PREFIX + " »,");
    console.log(" ajustable avec la variable d'environnement URL_PREFIX.)");
    await pool.end();
    return;
  }

  console.log(`${rows.length} ligne(s) trouvée(s) :`);
  for (const r of rows.slice(0, 30)) console.log("   ", r.image_url);
  if (rows.length > 30) console.log(`    … et ${rows.length - 30} autre(s)`);

  if (!EXECUTE) {
    console.log("\n[simulation] DELETE FROM annales WHERE image_url = ANY(...)");
    await pool.end();
    return;
  }

  const stamp  = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const backup = `annales-backup-${stamp}.json`;
  const full   = await pool.query(
    "SELECT * FROM annales WHERE image_url = ANY($1)", [urls]);
  fs.writeFileSync(backup, JSON.stringify(full.rows, null, 2), "utf8");
  console.log(`\nSauvegarde écrite : ${backup}`);

  const del = await pool.query(
    "DELETE FROM annales WHERE image_url = ANY($1)", [urls]);
  console.log(`${del.rowCount} ligne(s) supprimée(s).`);
  console.log(`Restauration possible depuis ${backup} en cas d'erreur.`);

  await pool.end();
}

main().catch(e => {
  console.error("Erreur :", e.message);
  if (/timeout|ENOTFOUND|ECONNREFUSED/i.test(e.message)) {
    console.error("→ Connexion impossible. Vérifiez que le TCP Proxy est actif :");
    console.error("  Railway → Postgres → Settings → Networking → Public Networking.");
  }
  process.exit(1);
});
