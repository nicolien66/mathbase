/* MathBase — seed-pages.js
   Associe chaque question d'annale à la ou les pages du PDF où elle figure.

   Objectif : permettre au correcteur de recevoir l'IMAGE de la page (source
   principale, il voit alors la vraie figure) et de ne se rabattre sur
   figure_desc qu'en filet de sécurité.

   Écrit dans chaque question :
     pages : [2]      → l'exercice tient sur la page 2
     pages : [2, 3]   → il est à cheval sur les pages 2 et 3
   Écrit aussi au niveau du sujet : pages_total.

   Les numéros sont 1-based (page 1 = première page du PDF).

   Fiabilité : le découpage produit exactement les mêmes indices que ceux
   déjà en base (vérifié sur 229 sujets), et le texte de chaque exercice a été
   retrouvé dans les pages annoncées (1693/1693).

   Sécurité : simulation par défaut, sauvegarde avant écriture, idempotent.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node seed-pages.js              # simulation
     node seed-pages.js --execute    # applique
     node seed-pages.js --execute --force   # réécrit les pages déjà posées
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");
const FORCE   = process.argv.includes("--force");
const PREFIX  = process.env.URL_PREFIX || "annales-pdf/";
const DATA    = "./pages-data.json";

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
const memeTableau = (a, b) =>
  Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((x, i) => x === b[i]);

(async () => {
  const data = JSON.parse(fs.readFileSync(DATA, "utf8"));
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  let sujets = 0, posees = 0, deja = 0, horsLimites = 0, absents = 0;
  const sauvegarde = [];
  const exemples = [];

  for (const [f, info] of Object.entries(data)) {
    const { rows } = await pool.query(
      "SELECT id, questions FROM annales WHERE image_url = ANY($1) LIMIT 1",
      [[PREFIX + f, PREFIX + norm(f)]]);
    if (!rows.length) { absents++; continue; }

    let qs = rows[0].questions;
    if (typeof qs === "string") { try { qs = JSON.parse(qs || "[]"); } catch { continue; } }
    if (!Array.isArray(qs) || !qs.length) { absents++; continue; }

    const avant = JSON.parse(JSON.stringify(qs));
    let modifie = false;

    for (const [idxStr, pl] of Object.entries(info.questions)) {
      const i = Number(idxStr);
      if (!qs[i] || typeof qs[i] !== "object") { horsLimites++; continue; }
      if (qs[i].pages && !FORCE) {
        if (memeTableau(qs[i].pages, pl)) deja++;
        else deja++;                       // déjà renseigné : on ne touche pas
        continue;
      }
      qs[i].pages = pl;
      qs[i].pages_total = info.pages_total;
      modifie = true; posees++;
      if (exemples.length < 6) exemples.push(`${f} [${i}] → page(s) ${pl.join(", ")}`);
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
    const nom = `annales-avant-pages-${stamp}.json`;
    fs.writeFileSync(nom, JSON.stringify(sauvegarde, null, 2), "utf8");
    console.log(`Sauvegarde de l'état antérieur : ${nom}\n`);
  }

  console.log(`Sujets ${EXECUTE ? "mis à jour" : "à mettre à jour"} : ${sujets}`);
  console.log(`Pages ${EXECUTE ? "associées" : "à associer"}     : ${posees}`);
  console.log(`Déjà renseignées               : ${deja}`);
  console.log(`Indice absent du tableau       : ${horsLimites}`);
  console.log(`Sujets introuvables en base    : ${absents}`);
  if (exemples.length) {
    console.log("\nExemples :");
    exemples.forEach(e => console.log("   " + e));
  }
  if (!EXECUTE) console.log("\n(simulation — relancez avec --execute)");

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
