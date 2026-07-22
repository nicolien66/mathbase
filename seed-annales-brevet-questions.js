/* MathBase — seed-annales-brevet-questions.js
   Remplit le champ « questions » des 327 sujets officiels du Brevet à partir
   du texte extrait des PDF (exercices découpés + figures SVG reconstruites),
   ce qui active le mode examen question par question avec correction IA.
   Prérequis : brevet-questions.json dans le même dossier, sujets déjà insérés
   par seed-annales-brevet.js. Usage : DATABASE_URL=... node seed-annales-brevet-questions.js */
const { Pool } = require("pg");
const fs = require("fs");
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

async function main() {
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant"); process.exit(1); }
  const data = JSON.parse(fs.readFileSync(__dirname + "/brevet-questions.json", "utf8"));
  let updated = 0, missing = 0, kept = 0;
  const { rows } = await pool.query(
    "SELECT id, image_url, questions FROM annales WHERE image_url LIKE 'annales-pdf/%'");
  for (const r of rows) {
    const file = r.image_url.replace("annales-pdf/", "");
    const qs = data[file];
    if (!qs) { missing++; continue; }
    const already = Array.isArray(r.questions) ? r.questions.length
      : (typeof r.questions === "string" ? (JSON.parse(r.questions || "[]") || []).length : 0);
    if (already > 0) { kept++; continue; }   // idempotent : ne pas écraser
    await pool.query("UPDATE annales SET questions = $1 WHERE id = $2",
      [JSON.stringify(qs.map(q => ({ enonce: q.enonce, solution: null, figure: q.figure || null }))), r.id]);
    updated++;
  }
  console.log(`Terminé : ${updated} sujet(s) mis à jour, ${kept} déjà remplis, ${missing} sans extraction.`);
  await pool.end();
}
main().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
