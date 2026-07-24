/* MathBase — check-origine.js
   Identifie les sujets sans PDF et cherche à en déterminer l'origine :
   sujets importés dont le fichier manque, ou sujets générés sans fichier.
   Lecture seule.

   Usage : $env:DATABASE_URL = "..." ; node check-origine.js
*/

const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const DIR = process.env.PDF_DIR || path.join(__dirname, "public", "annales-pdf");

// Traces caractéristiques d'un texte extrait d'un PDF (par opposition à rédigé).
const EXTRAIT = /(A\.\s*P\.\s*M\.\s*E\.\s*P\.|L['’]int[ée]grale\s+\d{4}|Brevet des coll[èe]ges\s+\d)/;

(async () => {
  const { rows } = await pool.query(
    "SELECT id, title, image_url, questions FROM annales ORDER BY id");

  const sansUrl = [], urlFantome = [], avecFichier = [];
  for (const a of rows) {
    let qs = a.questions;
    if (typeof qs === "string") { try { qs = JSON.parse(qs || "[]"); } catch { qs = []; } }
    if (!Array.isArray(qs)) qs = [];

    const texte = qs.map(q => (q && (q.enonce_correction || q.enonce)) || "").join(" ");
    const extrait = EXTRAIT.test(texte);
    const info = { id: a.id, titre: (a.title || "").slice(0, 46), questions: qs.length,
                   texte_extrait_pdf: extrait ? "oui" : "non" };

    if (!a.image_url) { sansUrl.push(info); continue; }
    const f = path.join(DIR, path.basename(a.image_url));
    if (fs.existsSync(f)) avecFichier.push(info);
    else urlFantome.push(Object.assign({ fichier: path.basename(a.image_url).slice(0, 44) }, info));
  }

  console.log("\nSujets en base                    :", rows.length);
  console.log("  · avec un PDF présent           :", avecFichier.length);
  console.log("  · image_url renseignée, PDF absent :", urlFantome.length);
  console.log("  · aucune image_url              :", sansUrl.length);

  if (sansUrl.length) {
    console.log("\n──── Sans image_url (probablement générés) ────");
    console.table(sansUrl.slice(0, 20));
    if (sansUrl.length > 20) console.log(`… et ${sansUrl.length - 20} autre(s)`);
  }
  if (urlFantome.length) {
    console.log("\n──── image_url pointant vers un PDF absent ────");
    console.table(urlFantome.slice(0, 25));
    if (urlFantome.length > 25) console.log(`… et ${urlFantome.length - 25} autre(s)`);
    const ext = urlFantome.filter(x => x.texte_extrait_pdf === "oui").length;
    console.log(`\nParmi eux, ${ext} ont un texte portant les traces d'une extraction PDF`);
    console.log(`(donc importés d'un vrai sujet), et ${urlFantome.length - ext} n'en ont pas`);
    console.log("(donc vraisemblablement rédigés ou générés).");
  }

  fs.writeFileSync("origine-sujets.json",
    JSON.stringify({ sansUrl, urlFantome, avecFichier: avecFichier.length }, null, 2), "utf8");
  console.log("\nDétail écrit dans origine-sujets.json");
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
