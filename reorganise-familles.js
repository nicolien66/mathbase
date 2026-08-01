/* MathBase — reorganise-familles.js
   Réorganise les familles du chapitre « Enchaînement des opérations ».

   1. Regroupe dans « Calcul avec parenthèses » :
        Le rôle des parenthèses · Calculer en détaillant · Expression à étages
        Quotient de 2 expressions · Parenthèses imbriquées
   2. Verse « Multiplications et divisions » dans « Priorité de la multiplication »,
      puis renomme cette famille « Priorité de la multiplication/division ».
   3. Une famille n'étant qu'une valeur de colonne, celles qui se retrouvent
      sans exercice disparaissent d'elles-mêmes : le script le vérifie et
      liste ce qui subsiste dans le chapitre.

   La correspondance ignore la casse, les accents et la ponctuation, afin de
   retrouver les libellés quelle que soit leur graphie exacte.

   Sécurité : simulation par défaut, sauvegarde avant écriture.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node reorganise-familles.js              # simulation
     node reorganise-familles.js --execute    # applique
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

/* Comparaison souple : casse, accents et ponctuation ignorés. */
const cle = t => String(t || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const VERS_PARENTHESES = [
  "Le rôle des parenthèses",
  "Calculer en détaillant",
  "Expression à étages",
  "Quotient de 2 expressions",
  "Quotient de deux expressions",   // variante réellement présente en base
  "Parenthèses imbriquées",
].map(cle);

const CIBLE_PAR = "Calcul avec parenthèses";
// Le libellé existe dans les deux sens selon les exercices.
const SOURCES_MD = ["Multiplications et divisions", "Division et multiplication",
                    "Divisions et multiplications", "Multiplication et division"].map(cle);
const CIBLE_MD  = cle("Priorité de la multiplication");
const NOM_MD    = "Priorité de la multiplication/division";

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  // Le chapitre peut être écrit « Enchaînement des/d'opérations » : on élargit.
  const { rows } = await pool.query(
    `SELECT id, title, chapitre, famille FROM exercises
      WHERE chapitre ILIKE '%encha%n%ment%op%rations%' ORDER BY id`);
  if (!rows.length) {
    console.log("Aucun exercice dans le chapitre « Enchaînement des opérations ».");
    await pool.end(); return;
  }
  console.log(`${rows.length} exercice(s) dans le chapitre.\n`);

  const avant = {};
  rows.forEach(r => { const f = r.famille || "(sans famille)"; avant[f] = (avant[f] || 0) + 1; });
  console.log("Familles avant :");
  console.table(Object.entries(avant).map(([famille, n]) => ({ famille, n })));

  const versPar = rows.filter(r => VERS_PARENTHESES.includes(cle(r.famille)));
  const versMD  = rows.filter(r => SOURCES_MD.includes(cle(r.famille)) || cle(r.famille) === CIBLE_MD);

  console.log(`\n→ vers « ${CIBLE_PAR} » : ${versPar.length} exercice(s)`);
  console.log(`→ vers « ${NOM_MD} » : ${versMD.length} exercice(s)`);

  if (!EXECUTE) {
    const apres = {};
    rows.forEach(r => {
      let f = r.famille || "(sans famille)";
      if (VERS_PARENTHESES.includes(cle(r.famille))) f = CIBLE_PAR;
      else if (SOURCES_MD.includes(cle(r.famille)) || cle(r.famille) === CIBLE_MD) f = NOM_MD;
      apres[f] = (apres[f] || 0) + 1;
    });
    console.log("\nFamilles après (simulation) :");
    console.table(Object.entries(apres).map(([famille, n]) => ({ famille, n })));
    console.log("\n(simulation — relancez avec --execute)");
    await pool.end(); return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `exercices-avant-reorganisation-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(rows, null, 2), "utf8");
  console.log(`\nSauvegarde : ${nom}`);

  if (versPar.length) {
    const r = await pool.query("UPDATE exercises SET famille = $1 WHERE id = ANY($2)",
      [CIBLE_PAR, versPar.map(x => x.id)]);
    console.log(`${r.rowCount} exercice(s) → « ${CIBLE_PAR} »`);
  }
  if (versMD.length) {
    const r = await pool.query("UPDATE exercises SET famille = $1 WHERE id = ANY($2)",
      [NOM_MD, versMD.map(x => x.id)]);
    console.log(`${r.rowCount} exercice(s) → « ${NOM_MD} »`);
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre ILIKE '%encha%n%ment%op%rations%'
      GROUP BY 1 ORDER BY n DESC`);
  console.log("\nFamilles après :");
  console.table(apres);
  console.log("Les familles devenues vides ont disparu (une famille n'existe " +
              "que par les exercices qui la portent).");

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
