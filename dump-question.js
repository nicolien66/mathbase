/* MathBase — dump-question.js
   Affiche le contenu BRUT d'une question d'annale (tous ses champs), pour
   diagnostiquer le découpage en sous-questions. Lecture seule.

   Usage (PowerShell) :
     node dump-question.js Brevet_0_B_2026_DV.pdf 9
     node dump-question.js Brevet_0_B_2026_DV.pdf        (résumé de toutes)
*/

const { Pool } = require("pg");

const PREFIX = process.env.URL_PREFIX || "annales-pdf/";
const fichier = process.argv[2];
const index   = process.argv[3];

if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
if (!fichier) { console.error("Usage : node dump-question.js <fichier.pdf> [index]"); process.exit(1); }

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
const norm = n => n.replace(/-/g, "_").replace(/_+/g, "_");

(async () => {
  const { rows } = await pool.query(
    "SELECT questions FROM annales WHERE image_url = ANY($1) LIMIT 1",
    [[PREFIX + fichier, PREFIX + norm(fichier)]]);
  if (!rows.length) { console.log("Sujet introuvable :", PREFIX + fichier); return; }

  let qs = rows[0].questions;
  if (typeof qs === "string") qs = JSON.parse(qs || "[]");

  if (index === undefined) {
    console.log(`\n${qs.length} question(s) :\n`);
    qs.forEach((q, i) => {
      const champs = Object.keys(q || {}).join(", ");
      const src = (q && (q.enonce_correction || q.enonce) || "").replace(/\s+/g, " ");
      const lignes = String((q && (q.enonce_correction || q.enonce)) || "").split("\n").length;
      console.log(`[${String(i).padStart(2)}] ${lignes} ligne(s) | champs: ${champs}`);
      console.log(`     ${src.slice(0, 100)}`);
    });
    console.log("\nPour le détail : node dump-question.js " + fichier + " <index>");
    return;
  }

  const q = qs[Number(index)];
  if (!q) { console.log("Index hors limites (0 à " + (qs.length - 1) + ")"); return; }

  console.log("\n=== Question " + index + " — champs présents ===");
  for (const [k, v] of Object.entries(q)) {
    const t = typeof v === "string" ? `${v.length} caractères` : JSON.stringify(v);
    console.log(`  ${k} : ${t}`);
  }
  const src = q.enonce_correction || q.enonce || "";
  console.log("\n=== Texte utilisé pour le découpage (" +
              (q.enonce_correction ? "enonce_correction" : "enonce") + ") ===");
  console.log("--- début ---");
  console.log(src);
  console.log("--- fin ---");
  console.log("\nNombre de lignes :", src.split("\n").length);
  const marqueurs = src.split("\n").filter(l => /^\s*(\d{1,2}|[a-h])\s*[.)]\s+\S/.test(l));
  console.log("Lignes ressemblant à une sous-question :", marqueurs.length);
  marqueurs.slice(0, 12).forEach(l => console.log("   " + JSON.stringify(l.slice(0, 80))));

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
