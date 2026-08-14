/* Polymates — reorganise-geometrie.js
   Renomme une famille du chapitre de géométrie.

        Vocabulaire du cercle  →  Vocabulaire des figures

   Le nouveau nom est plus large que l'ancien, et c'est voulu : la famille
   accueille désormais le vocabulaire du cercle (centre, rayon, diamètre,
   corde, arc) MAIS AUSSI celui des polygones et des solides (côtés,
   sommets, arêtes, diagonales).

   Aucune suppression, aucune fusion : ce script ne fait que renommer.

   Sécurité : simulation par défaut, sauvegarde JSON avant écriture.

   Usage :
     $env:DATABASE_URL = "postgresql://..."
     node reorganise-geometrie.js              # simulation
     node reorganise-geometrie.js --libelles   # + libellés exacts
     node reorganise-geometrie.js --execute
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const cle = t => String(t || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
  .split(" ").map(m => m.replace(/s$/, "")).join(" ");
const VIDES = new Set(["le","la","l","un","une","de","du","d","en","et","sur","avec","a","au","aux","dan","pour","par"]);
const mots = t => new Set(cle(t).split(" ").filter(m => m && !VIDES.has(m)));
function memeEnsemble(a, b) {
  const A = mots(a), B = mots(b);
  if (A.size !== B.size) return false;
  for (const m of A) if (!B.has(m)) return false;
  return true;
}
function proximite(a, b) {
  const A = mots(a), B = mots(b);
  let c = 0; A.forEach(m => { if (B.has(m)) c++; });
  return c / Math.max(1, new Set([...A, ...B]).size);
}

const RENOMMAGES = [
  { avant: ["Vocabulaire du cercle", "Le vocabulaire du cercle",
            "Vocabulaire des cercles", "Vocabulaire cercle"],
    apres: "Vocabulaire des figures" },
];

function nouveauNom(f) {
  const k = cle(f);
  for (const r of RENOMMAGES) {
    if (cle(r.apres) === k) return null;              // déjà renommée
    if (r.avant.some(n => cle(n) === k || memeEnsemble(n, f))) return r.apres;
  }
  return null;
}

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows } = await pool.query(
    `SELECT id, title, chapitre, famille FROM exercises
      WHERE chapitre ILIKE '%g%om%trie%' ORDER BY id`);
  if (!rows.length) {
    console.log("Aucun exercice dans un chapitre de géométrie.");
    await pool.end(); return;
  }
  console.log(`${rows.length} exercice(s) dans le(s) chapitre(s) de géométrie.\n`);

  const avant = {};
  rows.forEach(r => { const k = (r.chapitre || "?") + " · " + (r.famille || "(sans famille)");
    avant[k] = (avant[k] || 0) + 1; });
  console.log("Familles avant :");
  console.table(Object.entries(avant).sort((a, b) => b[1] - a[1])
    .map(([k, n]) => ({ chapitre: k.split(" · ")[0], famille: k.split(" · ")[1], n })));

  const presents = [...new Set(rows.map(r => r.famille).filter(Boolean))];
  const introuvables = RENOMMAGES.filter(r =>
    !presents.some(n => r.avant.some(v => cle(v) === cle(n) || memeEnsemble(v, n))));
  if (introuvables.length) {
    console.log("\n⚠ Familles à renommer mais absentes :");
    introuvables.forEach(r => {
      console.log("   · " + r.avant[0]);
      presents.map(n => ({ n, p: proximite(r.avant[0], n) }))
        .filter(x => x.p >= 0.34).sort((a, b) => b.p - a.p).slice(0, 3)
        .forEach(x => console.log("       ressemble à « " + x.n + " » (" +
          Math.round(x.p * 100) + " %) — dites-le-moi si c'est la bonne"));
    });
  }

  if (process.argv.includes("--libelles")) {
    console.log("\nLibellés exacts présents :");
    presents.sort().forEach(n => console.log("   " + JSON.stringify(n)));
  }

  const aRenommer = rows.filter(r => nouveauNom(r.famille));
  console.log(`\n→ à renommer : ${aRenommer.length} exercice(s)`);
  const pr = {};
  aRenommer.forEach(r => { const k = r.famille + " ⇒ " + nouveauNom(r.famille);
    pr[k] = (pr[k] || 0) + 1; });
  Object.entries(pr).forEach(([k, n]) => console.log(`   · ${k} : ${n}`));

  if (!EXECUTE) {
    console.log("\n(simulation — relancez avec --execute)");
    await pool.end(); return;
  }
  if (!aRenommer.length) { console.log("\nRien à renommer."); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `geometrie-avant-renommage-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(rows, null, 2), "utf8");
  console.log(`\nSauvegarde : ${nom}`);

  for (const r of RENOMMAGES) {
    const ids = aRenommer.filter(x => nouveauNom(x.famille) === r.apres).map(x => x.id);
    if (!ids.length) continue;
    const q = await pool.query("UPDATE exercises SET famille = $1 WHERE id = ANY($2)", [r.apres, ids]);
    console.log(`${q.rowCount} exercice(s) → « ${r.apres} »`);
  }

  const { rows: bilan } = await pool.query(
    `SELECT chapitre, COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre ILIKE '%g%om%trie%'
      GROUP BY 1,2 ORDER BY n DESC, famille`);
  console.log("\nFamilles après (base) :");
  console.table(bilan);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
