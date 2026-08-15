/* Polymates — reorganise-trigonometrie.js
   Supprime deux familles du chapitre « Trigonométrie ».

        La définition du cosinus
        Les trois formules

   ⚠ ATTENTION PARTICULIÈRE
   « La définition du cosinus » ne doit pas entraîner la suppression d'une
   famille voisine parlant de cosinus — « Calculer un cosinus », « Cosinus
   et longueur », etc. La comparaison souple employée ailleurs pourrait les
   confondre : ici, seules les graphies exactes comptent, et une liste de
   libellés protégés interdit toute suppression accidentelle.

   Aucune fusion, aucun renommage : ce script ne fait que supprimer.

   Sécurité : simulation par défaut, sauvegarde JSON avant écriture.

   Usage :
     $env:DATABASE_URL = "postgresql://..."
     node reorganise-trigonometrie.js              # simulation
     node reorganise-trigonometrie.js --libelles   # + libellés exacts
     node reorganise-trigonometrie.js --execute
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
function proximite(a, b) {
  const A = mots(a), B = mots(b);
  let c = 0; A.forEach(m => { if (B.has(m)) c++; });
  return c / Math.max(1, new Set([...A, ...B]).size);
}

const GROUPES = [
  { nom: "La définition du cosinus", variantes: [
      "La définition du cosinus", "Définition du cosinus", "La definition du cosinus",
      "Le cosinus : définition", "Définir le cosinus" ] },
  { nom: "Les trois formules", variantes: [
      "Les trois formules", "Trois formules", "Les 3 formules",
      "Les trois formules de trigonométrie", "Les trois formules trigonométriques" ] },
];

const CLES = new Set(GROUPES.flatMap(g => g.variantes).map(cle));
/* Ces libellés ne doivent JAMAIS partir, même s'ils parlent de cosinus
   ou de formule. */
const PROTEGES = new Set([
  "Calculer un cosinus", "Cosinus et longueur", "Le cosinus d'un angle",
  "Calculer une longueur avec le cosinus", "Calculer un angle",
  "Sinus", "Tangente", "Choisir la bonne formule", "Formule à choisir",
].map(cle));

function aSupprimer(f) {
  const k = cle(f);
  if (PROTEGES.has(k)) return false;
  return CLES.has(k);
}

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows } = await pool.query(
    `SELECT id, title, chapitre, famille FROM exercises
      WHERE chapitre ILIKE '%trigo%' ORDER BY id`);
  if (!rows.length) {
    console.log("Aucun exercice dans le chapitre « Trigonométrie ».");
    await pool.end(); return;
  }
  console.log(`${rows.length} exercice(s) dans le chapitre.\n`);

  const avant = {};
  rows.forEach(r => { const f = r.famille || "(sans famille)"; avant[f] = (avant[f] || 0) + 1; });
  console.log("Familles avant :");
  console.table(Object.entries(avant).sort((a, b) => b[1] - a[1]).map(([famille, n]) => ({ famille, n })));

  const presents = [...new Set(rows.map(r => r.famille).filter(Boolean))];
  const introuvables = GROUPES.filter(g =>
    !presents.some(n => g.variantes.some(v => cle(v) === cle(n))));
  if (introuvables.length) {
    console.log("\n⚠ Familles demandées mais absentes du chapitre :");
    introuvables.forEach(g => {
      console.log("   · " + g.nom);
      presents.map(n => ({ n, p: proximite(g.nom, n) }))
        .filter(x => x.p >= 0.4).sort((a, b) => b.p - a.p).slice(0, 2)
        .forEach(x => console.log("       ressemble à « " + x.n + " » (" +
          Math.round(x.p * 100) + " %) — dites-le-moi si c'est la bonne"));
    });
  }

  if (process.argv.includes("--libelles")) {
    console.log("\nLibellés exacts présents :");
    presents.sort().forEach(n => console.log("   " + JSON.stringify(n)));
  }

  const cibles = rows.filter(r => aSupprimer(r.famille));
  console.log(`\n→ à supprimer : ${cibles.length} exercice(s) sur ${rows.length}`);
  const pf = {}; cibles.forEach(r => { pf[r.famille] = (pf[r.famille] || 0) + 1; });
  Object.entries(pf).forEach(([f, n]) => console.log(`   · ${f} : ${n}`));

  const gardes = presents.filter(n => !aSupprimer(n) && /cosinus|formule/i.test(n));
  if (gardes.length) console.log(`\n✓ Conservées (elles parlent de cosinus ou de formule sans être visées) :\n   · ` +
    gardes.join("\n   · "));

  const apres = {};
  rows.forEach(r => { if (aSupprimer(r.famille)) return;
    const f = r.famille || "(sans famille)"; apres[f] = (apres[f] || 0) + 1; });
  console.log("\nFamilles après :");
  console.table(Object.entries(apres).sort((a, b) => b[1] - a[1]).map(([famille, n]) => ({ famille, n })));

  if (!EXECUTE) {
    console.log(`\n(simulation — ${cibles.length} suppression(s) ; relancez avec --execute)`);
    await pool.end(); return;
  }
  if (!cibles.length) { console.log("\nRien à supprimer."); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `trigonometrie-avant-suppression-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(rows, null, 2), "utf8");
  console.log(`\nSauvegarde : ${nom}`);

  const r = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [cibles.map(x => x.id)]);
  console.log(`${r.rowCount} exercice(s) supprimé(s)`);

  const { rows: apresLignes } = await pool.query(
    "SELECT famille FROM exercises WHERE chapitre ILIKE '%trigo%'");
  const c = new Map();
  apresLignes.forEach(r2 => { const f = r2.famille || "(sans famille)"; c.set(f, (c.get(f) || 0) + 1); });
  console.log("\nFamilles après (base) :");
  console.table([...c.entries()].sort((a, b) => b[1] - a[1]).map(([famille, n]) => ({ famille, n })));
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
