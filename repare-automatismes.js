/* MathBase — repare-automatismes.js
   Répare les parties « automatismes » incomplètes.

   Cause : la détection des en-têtes exigeait que la ligne se termine juste
   après le numéro (« Question 6 »). Or la mise en page fait parfois déborder
   du texte sur cette ligne (étiquettes de figure), si bien que certaines
   questions n'ont pas été reconnues : leur texte a été absorbé par la question
   précédente. Résultat : 8 questions manquantes sur 4 sujets.

   Ce script reconstruit INTÉGRALEMENT le bloc d'automatismes de ces sujets à
   partir du PDF, et conserve les exercices existants (avec leurs figure_desc,
   solutions, etc.) en les repositionnant à la suite.

   Sécurité : simulation par défaut, sauvegarde avant écriture, idempotent.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node repare-automatismes.js              # simulation
     node repare-automatismes.js --execute    # applique
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");
const PREFIX  = process.env.URL_PREFIX || "annales-pdf/";
const DATA    = "./reparation-automatismes.json";

if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
if (!fs.existsSync(DATA))      { console.error("✗ Fichier introuvable :", DATA); process.exit(1); }

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
const norm = n => n.replace(/-/g, "_").replace(/_+/g, "_");

(async () => {
  const data = JSON.parse(fs.readFileSync(DATA, "utf8"));
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  let majs = 0, deja = 0, refus = 0, ajoutees = 0;
  const sauvegarde = [];

  for (const [f, info] of Object.entries(data)) {
    const { rows } = await pool.query(
      "SELECT id, questions FROM annales WHERE image_url = ANY($1) LIMIT 1",
      [[PREFIX + f, PREFIX + norm(f)]]);
    if (!rows.length) { console.warn(`  ⚠ absent de la base : ${f}`); refus++; continue; }

    let qs = rows[0].questions;
    if (typeof qs === "string") { try { qs = JSON.parse(qs || "[]"); } catch { continue; } }
    if (!Array.isArray(qs)) { refus++; continue; }

    if (qs.length === info.total) { deja++; continue; }        // déjà réparé

    const attendu = info.anciens_autos + info.nb_exos;
    if (qs.length !== attendu) {
      console.warn(`  ⚠ ${f} ignoré : ${qs.length} question(s) en base, ${attendu} attendue(s).`);
      refus++; continue;
    }

    // Exercices conservés tels quels, repositionnés après les automatismes.
    const exos = qs.slice(info.anciens_autos).map((q, k) => {
      const copie = Object.assign({}, q);
      const pg = info.pages_exos[String(k)];
      if (pg) { copie.pages = pg; copie.pages_total = info.pages_total; }
      return copie;
    });

    const neuf = info.automatismes.concat(exos);
    console.log(`  ${f}`);
    console.log(`     ${qs.length} → ${neuf.length} questions ` +
                `(${info.anciens_autos} → ${info.automatismes.length} automatismes, ${exos.length} exercices)`);
    ajoutees += neuf.length - qs.length;
    majs++;

    if (EXECUTE) {
      sauvegarde.push({ id: rows[0].id, image_url: PREFIX + f, questions_avant: qs });
      await pool.query("UPDATE annales SET questions = $1 WHERE id = $2",
                       [JSON.stringify(neuf), rows[0].id]);
    }
  }

  if (EXECUTE && sauvegarde.length) {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const nom = `annales-avant-reparation-${stamp}.json`;
    fs.writeFileSync(nom, JSON.stringify(sauvegarde, null, 2), "utf8");
    console.log(`\nSauvegarde de l'état antérieur : ${nom}`);
  }

  console.log(`\nSujets ${EXECUTE ? "réparés" : "à réparer"}   : ${majs}`);
  console.log(`Questions récupérées   : ${ajoutees}`);
  console.log(`Déjà réparés           : ${deja}`);
  console.log(`Ignorés                : ${refus}`);
  if (!EXECUTE) console.log("\n(simulation — relancez avec --execute)");

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
