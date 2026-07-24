/* MathBase — seed-automatismes.js
   Ajoute les questions d'automatismes (« Question 1 », « Question 2 »…) que
   l'import initial ignorait, car il ne reconnaissait que « Exercice N » et
   « PROBLÈME ».

   Concerne les sujets au format 2024-2026 (Partie 1 — automatismes, 6 points
   sur 20) : sans elles, l'épreuve démarrait directement aux exercices.

   POINT DÉLICAT : sur la plupart de ces sujets, les automatismes viennent EN
   TÊTE. Les insérer décale donc les questions déjà en base. Le script
   reconstruit le tableau complet et REPORTE les données existantes
   (réponses, figure_desc, solution…) à leur nouvel indice, d'après une table
   de correspondance calculée par alignement des deux découpages.

   Sécurité : simulation par défaut, sauvegarde avant écriture, idempotent
   (un sujet déjà migré est détecté et ignoré).

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node seed-automatismes.js              # simulation
     node seed-automatismes.js --execute    # applique
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");
const PREFIX  = process.env.URL_PREFIX || "annales-pdf/";
const DATA    = "./automatismes-data.json";

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

  let majs = 0, ajoutees = 0, deja = 0, absents = 0, refus = 0;
  const sauvegarde = [], exemples = [];

  for (const [f, info] of Object.entries(data)) {
    const { rows } = await pool.query(
      "SELECT id, questions FROM annales WHERE image_url = ANY($1) LIMIT 1",
      [[PREFIX + f, PREFIX + norm(f)]]);
    if (!rows.length) { absents++; continue; }

    let qs = rows[0].questions;
    if (typeof qs === "string") { try { qs = JSON.parse(qs || "[]"); } catch { continue; } }
    if (!Array.isArray(qs)) { absents++; continue; }

    // Déjà migré ? (le tableau a déjà la taille cible)
    if (qs.length >= info.total) { deja++; continue; }

    // Le tableau doit correspondre exactement au découpage d'origine,
    // sinon le report d'indices serait faux : on s'abstient.
    const attendu = Object.keys(info.remap).length;
    if (qs.length !== attendu) {
      refus++;
      console.warn(`  ⚠ ${f} ignoré : ${qs.length} question(s) en base, ${attendu} attendue(s).`);
      continue;
    }

    // Reconstruction : tableau vide de la taille cible.
    const neuf = new Array(info.total).fill(null);

    // 1. report des questions existantes à leur nouvel indice
    for (const [ancien, nouveau] of Object.entries(info.remap)) {
      const q = qs[Number(ancien)];
      if (!q) continue;
      const copie = Object.assign({}, q);
      const pg = info.pages_all[String(nouveau)];
      if (pg) { copie.pages = pg; copie.pages_total = info.pages_total; }
      neuf[Number(nouveau)] = copie;
    }

    // 2. insertion des automatismes
    for (const [idx, q] of Object.entries(info.nouveaux)) {
      const copie = Object.assign({}, q, { pages_total: info.pages_total });
      neuf[Number(idx)] = copie;
      ajoutees++;
    }

    if (neuf.some(x => x === null)) {
      refus++;
      console.warn(`  ⚠ ${f} ignoré : trou détecté dans le tableau reconstruit.`);
      continue;
    }

    majs++;
    if (exemples.length < 6)
      exemples.push(`${f} : ${qs.length} → ${neuf.length} questions (+${neuf.length - qs.length})`);

    if (EXECUTE) {
      sauvegarde.push({ id: rows[0].id, image_url: PREFIX + f, questions_avant: qs });
      await pool.query("UPDATE annales SET questions = $1 WHERE id = $2",
                       [JSON.stringify(neuf), rows[0].id]);
    }
  }

  if (EXECUTE && sauvegarde.length) {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const nom = `annales-avant-automatismes-${stamp}.json`;
    fs.writeFileSync(nom, JSON.stringify(sauvegarde, null, 2), "utf8");
    console.log(`Sauvegarde de l'état antérieur : ${nom}\n`);
  }

  console.log(`Sujets ${EXECUTE ? "migrés" : "à migrer"}        : ${majs}`);
  console.log(`Questions ${EXECUTE ? "ajoutées" : "à ajouter"}  : ${ajoutees}`);
  console.log(`Déjà migrés                    : ${deja}`);
  console.log(`Ignorés (découpage divergent)  : ${refus}`);
  console.log(`Introuvables en base           : ${absents}`);
  if (exemples.length) { console.log("\nExemples :"); exemples.forEach(e => console.log("   " + e)); }
  if (!EXECUTE) console.log("\n(simulation — relancez avec --execute)");

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
