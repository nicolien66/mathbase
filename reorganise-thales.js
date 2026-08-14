/* Polymates — reorganise-thales.js
   Supprime TOUTES les familles du chapitre « Théorème de Thalès ».

   Le chapitre est vidé pour être reconstruit par generer-thales.js autour de
   quatre familles nouvelles :
        Triangles semblables
        Triangles imbriqués
        Triangles opposés
        Démonstration avec la réciproque de Thalès

   ⚠ CONSÉQUENCE À CONNAÎTRE
   Le chapitre n'existe que par les exercices qui le portent : une fois le
   dernier supprimé, le libellé « Théorème de Thalès » disparaît de la base.
   Le script l'affiche donc avant de terminer, et generer-thales.js sait le
   recréer même en partant de zéro (option --chapitre).

   Sécurité : simulation par défaut, sauvegarde JSON avant écriture. La
   suppression est totale : cette sauvegarde est le seul recours.

   Usage :
     $env:DATABASE_URL = "postgresql://..."
     node reorganise-thales.js              # simulation
     node reorganise-thales.js --execute
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows } = await pool.query(
    `SELECT id, title, chapitre, famille, level, classe, subject, type
       FROM exercises WHERE chapitre ILIKE '%thal%' ORDER BY id`);
  if (!rows.length) {
    console.log("Aucun exercice dans un chapitre de Thalès — rien à supprimer.");
    console.log("generer-thales.js peut créer le chapitre de toutes pièces.");
    await pool.end(); return;
  }

  const chapitres = [...new Set(rows.map(r => r.chapitre))];
  console.log(`${rows.length} exercice(s) dans : ${chapitres.map(c => "« " + c + " »").join(", ")}\n`);

  const avant = {};
  rows.forEach(r => { const f = r.famille || "(sans famille)"; avant[f] = (avant[f] || 0) + 1; });
  console.log("Familles avant :");
  console.table(Object.entries(avant).sort((a, b) => b[1] - a[1]).map(([famille, n]) => ({ famille, n })));

  /* Les réglages du chapitre, à reprendre lors de la reconstruction. */
  const maj = (ch, def) => { const c = new Map();
    rows.forEach(r => { const v = r[ch]; if (v) c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const reglages = { chapitre: maj("chapitre", "Théorème de Thalès"),
                     level: maj("level", "college"), classe: maj("classe", "3ème"),
                     subject: maj("subject", "Géométrie"), type: maj("type", "exercice") };

  console.log(`\n→ à supprimer : ${rows.length} exercice(s) — la totalité du chapitre`);
  console.log("\n⚠ Le chapitre disparaîtra entièrement de la base.");
  console.log("  Réglages à réutiliser pour le reconstruire :");
  console.table([reglages]);

  if (!EXECUTE) {
    console.log("(simulation — relancez avec --execute, puis lancez generer-thales.js)");
    await pool.end(); return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `thales-avant-suppression-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(rows, null, 2), "utf8");
  console.log(`\nSauvegarde : ${nom}`);

  const r = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [rows.map(x => x.id)]);
  console.log(`${r.rowCount} exercice(s) supprimé(s) — le chapitre est vide.`);
  console.log(`\nÉtape suivante :\n  node generer-thales.js --chapitre "${reglages.chapitre}"`);

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
