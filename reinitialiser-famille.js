/* Polymates — reinitialiser-famille.js
   Retire les exercices GÉNÉRÉS d'une famille, pour que le générateur puisse
   les reconstruire avec ses réglages actuels.

   ── POURQUOI ─────────────────────────────────────────────────────────────
   Les générateurs ne complètent que le manque : une famille déjà à 100
   n'est plus touchée, même si les modèles ont changé depuis. Pour appliquer
   de nouveaux réglages (graduations allégées, plateau interactif, énoncés
   revus), il faut d'abord faire de la place.

   ── CE QUI EST SUPPRIMÉ ──────────────────────────────────────────────────
   Par défaut, SEULS les exercices portant un plateau interactif : ce sont
   ceux qu'un générateur a produits. Les exercices écrits à la main, qui n'en
   ont pas, sont conservés.
     --tout        supprime tous les exercices de la famille
     --sans-plateau  supprime au contraire ceux qui n'ont PAS de plateau

   Sauvegarde JSON systématique avant toute suppression.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node reinitialiser-famille.js "Distance entre deux points"
     node reinitialiser-famille.js "Distance entre deux points" --execute
     puis : node generer-relatifs.js --execute
*/

const fs = require("fs");
const { Pool } = require("pg");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const TOUT = ARGS.includes("--tout");
const SANS = ARGS.includes("--sans-plateau");
const CIBLE = ARGS.find(a => !a.startsWith("--"));

if (!CIBLE) {
  console.error("✗ Indiquez la famille : node reinitialiser-famille.js \"Distance entre deux points\"");
  process.exit(1);
}
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

/* Correspondance souple : articles, accents et pluriels ignorés. */
const cle = t => String(t || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
  .split(" ").map(m => m.replace(/s$/, "")).join(" ");
const VIDES = new Set(["le","la","l","un","une","de","du","d","en","et","sur","avec","a","au","aux","pour","par"]);
const mots = t => new Set(cle(t).split(" ").filter(m => m && !VIDES.has(m)));
function memeEnsemble(a, b) {
  const A = mots(a), B = mots(b);
  if (A.size !== B.size) return false;
  for (const m of A) if (!B.has(m)) return false;
  return true;
}

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows } = await pool.query(
    `SELECT id, title, chapitre, famille, difficulty,
            /* La colonne est de type JSONB : on la compare en la coulant en
               texte, ce qui fonctionne quel que soit son type réel. */
            (interactif IS NOT NULL AND interactif::text NOT IN ('null', '', '{}')) AS plateau
       FROM exercises WHERE famille IS NOT NULL ORDER BY id`);

  const dansFamille = rows.filter(r => cle(r.famille) === cle(CIBLE) || memeEnsemble(r.famille, CIBLE));
  if (!dansFamille.length) {
    console.log(`Aucun exercice dans la famille « ${CIBLE} ».`);
    const proches = [...new Set(rows.map(r => r.famille))]
      .filter(n => cle(n).includes(cle(CIBLE).split(" ")[0]));
    if (proches.length) {
      console.log("Familles approchantes :");
      proches.slice(0, 8).forEach(n => console.log("   " + JSON.stringify(n)));
    }
    await pool.end(); return;
  }

  const chap = dansFamille[0].chapitre;
  const avecPlateau = dansFamille.filter(r => r.plateau).length;
  console.log(`Famille « ${dansFamille[0].famille} » (chapitre « ${chap} ») : ` +
    `${dansFamille.length} exercice(s), dont ${avecPlateau} avec plateau interactif.\n`);

  const cibles = TOUT ? dansFamille
    : SANS ? dansFamille.filter(r => !r.plateau)
    : dansFamille.filter(r => r.plateau);

  if (!cibles.length) {
    console.log("Rien à supprimer avec ce filtre." +
      (avecPlateau === 0 ? " (Aucun exercice ne porte de plateau : utilisez --tout.)" : ""));
    await pool.end(); return;
  }

  const parDiff = {};
  cibles.forEach(r => { const d = r.difficulty || "(non classé)"; parDiff[d] = (parDiff[d] || 0) + 1; });
  console.log(`→ à supprimer : ${cibles.length} exercice(s)`);
  Object.entries(parDiff).forEach(([d, n]) => console.log(`   · ${d} : ${n}`));
  console.log(`→ conservés : ${dansFamille.length - cibles.length} exercice(s)` +
    (TOUT ? "" : " (écrits à la main, sans plateau)"));

  if (!EXECUTE) {
    console.log("\n(simulation — relancez avec --execute, puis relancez le générateur)");
    await pool.end(); return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `famille-avant-reinitialisation-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(
    await (async () => (await pool.query(
      "SELECT * FROM exercises WHERE id = ANY($1)", [cibles.map(x => x.id)])).rows)(), null, 2), "utf8");
  console.log(`\nSauvegarde : ${nom}`);

  const r = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [cibles.map(x => x.id)]);
  console.log(`${r.rowCount} exercice(s) supprimé(s)`);

  const { rows: reste } = await pool.query(
    `SELECT count(*)::int AS n FROM exercises WHERE chapitre = $1 AND famille = $2`,
    [chap, dansFamille[0].famille]);
  console.log(`Il reste ${reste[0].n} exercice(s) dans la famille.`);
  console.log("\nRelancez maintenant le générateur du chapitre pour la remplir à nouveau :");
  console.log("  node generer-relatifs.js --execute");

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
