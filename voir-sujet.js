/* Inspecte les questions d'un sujet en base : nombre, et pour chacune le début
   de l'énoncé + la présence d'une figure_desc. Lecture seule.

   Usage (PowerShell) :
     node voir-sujet.js Brevet_Liban_mai_2008.pdf
     node voir-sujet.js                        (statistiques globales)
*/

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const PREFIX = process.env.URL_PREFIX || "annales-pdf/";
const file = process.argv[2];

function texte(q) {
  for (const k of ["enonce", "enonce_html", "question", "texte", "text",
                   "consigne", "intitule", "statement", "content"]) {
    if (typeof q[k] === "string" && q[k].trim()) {
      return q[k].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    }
  }
  return JSON.stringify(q);
}

async function globalStats() {
  const q1 = await pool.query("SELECT count(*)::int AS n FROM annales");
  const q2 = await pool.query(
    "SELECT count(*)::int AS total, " +
    "count(*) FILTER (WHERE q ? 'figure_desc')::int AS avec " +
    "FROM annales a, jsonb_array_elements(a.questions::jsonb) q");
  console.log("\nSujets en base        :", q1.rows[0].n);
  console.log("Exercices au total    :", q2.rows[0].total);
  console.log("Avec une figure_desc  :", q2.rows[0].avec);
  console.log("\nPour détailler un sujet : node voir-sujet.js <nom-du-fichier.pdf>");
}

async function unSujet(f) {
  const { rows } = await pool.query(
    "SELECT questions FROM annales WHERE image_url = $1 LIMIT 1", [PREFIX + f]);
  if (!rows.length) {
    console.log("Sujet introuvable :", PREFIX + f);
    return;
  }
  let qs = rows[0].questions;
  if (typeof qs === "string") qs = JSON.parse(qs || "[]");

  console.log("\n" + f);
  console.log("Nombre de questions :", qs.length, "\n");
  qs.forEach((q, i) => {
    const marque = q && q.figure_desc ? "[FIG]" : "     ";
    console.log(`  ${marque} [${i}] ${texte(q || {}).slice(0, 95)}`);
  });
  console.log("\n[FIG] = une description de figure est enregistrée.");
}

(async () => {
  try {
    if (file) await unSujet(file);
    else await globalStats();
  } catch (e) {
    console.error("Erreur :", e.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
})();
