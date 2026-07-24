/* MathBase — check-manquants.js
   Compare, pour chaque sujet, le nombre de questions attendu (d'après le
   découpage du PDF) et le nombre réellement en base. Nomme ce qui manque.
   Lecture seule.

   Usage : $env:DATABASE_URL = "..." ; node check-manquants.js
*/

const fs = require("fs");
const { Pool } = require("pg");

const PREFIX = process.env.URL_PREFIX || "annales-pdf/";
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
const norm = n => n.replace(/-/g, "_").replace(/_+/g, "_");

const lire = f => fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : null;

(async () => {
  const pages = lire("./pages-data.json");          // attendu : découpage de référence
  const probs = lire("./problemes-data.json");      // blocs PROBLÈME extraits
  if (!pages) { console.error("✗ pages-data.json introuvable."); process.exit(1); }

  const manquants = [], complets = [], absents = [];
  let totalManquant = 0;

  for (const [f, info] of Object.entries(pages)) {
    const attendu = Object.keys(info.questions).length;
    const { rows } = await pool.query(
      "SELECT questions FROM annales WHERE image_url = ANY($1) LIMIT 1",
      [[PREFIX + f, PREFIX + norm(f)]]);
    if (!rows.length) { absents.push(f); continue; }

    let qs = rows[0].questions;
    if (typeof qs === "string") { try { qs = JSON.parse(qs || "[]"); } catch { continue; } }
    if (!Array.isArray(qs)) continue;

    if (qs.length >= attendu) { complets.push(f); continue; }

    const ecart = attendu - qs.length;
    totalManquant += ecart;
    const aProbleme = probs && probs[f]
      ? probs[f].some(b => b.index >= qs.length) : false;
    manquants.push({ fichier: f, en_base: qs.length, attendu, manque: ecart,
                     probleme_dispo: aProbleme ? "oui" : "non" });
  }

  console.log("\nSujets complets                :", complets.length);
  console.log("Sujets incomplets              :", manquants.length);
  console.log("Questions manquantes au total  :", totalManquant);
  console.log("Sujets introuvables en base    :", absents.length);

  if (manquants.length) {
    manquants.sort((a, b) => b.manque - a.manque);
    console.log("\n──── Sujets incomplets ────");
    console.table(manquants.slice(0, 40));
    if (manquants.length > 40) console.log(`… et ${manquants.length - 40} autre(s)`);
    console.log("\nprobleme_dispo = oui → le bloc PROBLÈME existe dans problemes-data.json");
    console.log("mais n'a pas été inséré (seed-problemes.js a refusé par prudence).");
  }

  fs.writeFileSync("manquants.json", JSON.stringify(manquants, null, 2), "utf8");
  console.log("\nDétail écrit dans manquants.json");
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
