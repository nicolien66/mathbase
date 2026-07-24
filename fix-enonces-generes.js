/* MathBase — fix-enonces-generes.js
   Masque les énoncés générés automatiquement à partir des PDF.

   Pourquoi : l'élève travaille sur le sujet PDF officiel. Le texte extrait par
   OCR/pdftotext ne doit donc PAS lui être montré (mise en forme approximative,
   doublon du PDF). Il reste utile au correcteur, mais uniquement en coulisse.

   Ce que fait le script, pour chaque question insérée par seed-problemes.js :
     enonce            = libellé court et neutre (visible)
     enonce_correction = texte complet extrait   (jamais affiché)
     figure_desc       = inchangée

   L'identification est faite par comparaison exacte avec problemes-data.json :
   aucune question rédigée à la main n'est touchée.

   Sécurité : simulation par défaut. Sauvegarde JSON avant écriture.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node fix-enonces-generes.js              # simulation
     node fix-enonces-generes.js --execute    # applique
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");
const PREFIX  = process.env.URL_PREFIX || "annales-pdf/";
const DATA    = "./problemes-data.json";

if (!process.env.DATABASE_URL) {
  console.error("✗ DATABASE_URL manquant (Railway : DATABASE_PUBLIC_URL).");
  process.exit(1);
}
if (!fs.existsSync(DATA)) {
  console.error("✗ Fichier introuvable :", DATA);
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const norm = n => n.replace(/-/g, "_").replace(/_+/g, "_");
// Comparaison tolérante aux espaces : le texte a pu être re-sérialisé.
const cle = s => String(s || "").replace(/\s+/g, " ").trim();

async function main() {
  const data = JSON.parse(fs.readFileSync(DATA, "utf8"));
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  let sujets = 0, corrigees = 0, dejaOk = 0, nonTrouvees = 0;
  const sauvegarde = [];
  const exemples = [];

  for (const [f, items] of Object.entries(data)) {
    const { rows } = await pool.query(
      "SELECT id, questions FROM annales WHERE image_url = ANY($1) LIMIT 1",
      [[PREFIX + f, PREFIX + norm(f)]]);
    if (!rows.length) continue;

    let qs = rows[0].questions;
    if (typeof qs === "string") { try { qs = JSON.parse(qs || "[]"); } catch { continue; } }
    if (!Array.isArray(qs)) continue;

    const avant = JSON.parse(JSON.stringify(qs));
    let modifie = false;

    for (const it of items) {
      const q = qs[it.index];
      if (!q || typeof q !== "object") { nonTrouvees++; continue; }

      // Déjà migrée ?
      if (q.enonce_correction) { dejaOk++; continue; }

      // L'énoncé en base correspond-il bien au texte généré ?
      if (cle(q.enonce) !== cle(it.enonce_correction)) { nonTrouvees++; continue; }

      q.enonce_correction = it.enonce_correction;
      q.enonce = it.enonce;                 // libellé court
      if (it.figure_desc && !q.figure_desc) q.figure_desc = it.figure_desc;
      modifie = true; corrigees++;
      if (exemples.length < 5) exemples.push(`${f} [${it.index}] → « ${it.enonce} »`);
    }

    if (modifie) {
      sujets++;
      if (EXECUTE) {
        sauvegarde.push({ id: rows[0].id, image_url: PREFIX + f, questions_avant: avant });
        await pool.query("UPDATE annales SET questions = $1 WHERE id = $2",
                         [JSON.stringify(qs), rows[0].id]);
      }
    }
  }

  if (EXECUTE && sauvegarde.length) {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const nom = `annales-avant-masquage-${stamp}.json`;
    fs.writeFileSync(nom, JSON.stringify(sauvegarde, null, 2), "utf8");
    console.log(`Sauvegarde de l'état antérieur : ${nom}\n`);
  }

  console.log(`Sujets ${EXECUTE ? "modifiés" : "à modifier"}     : ${sujets}`);
  console.log(`Énoncés ${EXECUTE ? "masqués" : "à masquer"}     : ${corrigees}`);
  console.log(`Déjà masqués                  : ${dejaOk}`);
  console.log(`Non concordants (ignorés)     : ${nonTrouvees}`);
  if (exemples.length) {
    console.log("\nExemples :");
    exemples.forEach(e => console.log("   " + e));
  }
  if (!EXECUTE) console.log("\n(simulation — relancez avec --execute)");

  await pool.end();
}

main().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
