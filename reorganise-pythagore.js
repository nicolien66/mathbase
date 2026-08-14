/* Polymates — reorganise-pythagore.js
   Supprime quatre familles du chapitre « Théorème de Pythagore ».

        Démontrer avec la réciproque
        L'hypoténuse
        La réciproque
        Prouver qu'un triangle n'est pas rectangle

   ⚠ ATTENTION PARTICULIÈRE
   « Démontrer avec la CONTRAPOSÉE » doit SURVIVRE : elle ne diffère de
   « Démontrer avec la RÉCIPROQUE » que par un mot. La comparaison souple
   employée dans les autres chapitres les confondrait, puisque « réciproque »
   et « contraposée » seraient tous deux réduits à un mot porteur unique.
   Le second niveau de correspondance est donc désactivé pour ces libellés :
   seule l'égalité exacte les distingue.
   De même, « Prouver qu'un triangle n'est pas rectangle » ne doit pas
   entraîner la suppression d'une famille voisine parlant de triangle
   rectangle : chaque variante est écrite explicitement.

   Aucune fusion, aucun renommage : ce script ne fait que supprimer.

   Sécurité : simulation par défaut, sauvegarde JSON avant écriture.

   Usage :
     $env:DATABASE_URL = "postgresql://..."
     node reorganise-pythagore.js              # simulation
     node reorganise-pythagore.js --libelles   # + libellés exacts
     node reorganise-pythagore.js --execute
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
const VIDES = new Set(["le","la","l","un","une","de","du","d","en","et","sur","avec","a","au","aux","dan","pour","par","que","qu"]);
const mots = t => new Set(cle(t).split(" ").filter(m => m && !VIDES.has(m)));
function proximite(a, b) {
  const A = mots(a), B = mots(b);
  let c = 0; A.forEach(m => { if (B.has(m)) c++; });
  return c / Math.max(1, new Set([...A, ...B]).size);
}

/* ── Familles à supprimer : chaque graphie est écrite en toutes lettres ──
   Aucune comparaison souple ici : « réciproque » et « contraposée » sont
   trop proches pour qu'on puisse se permettre d'approximer. */
const GROUPES = [
  { nom: "Démontrer avec la réciproque", variantes: [
      "Démontrer avec la réciproque", "Démontrer avec la réciproque de Pythagore",
      "Demontrer avec la reciproque", "Démontrer par la réciproque" ] },
  { nom: "L'hypoténuse", variantes: [
      "L'hypoténuse", "L'hypothénuse", "Hypoténuse", "Hypothénuse",
      "Calculer l'hypoténuse", "Calculer l'hypothénuse" ] },
  { nom: "La réciproque", variantes: [
      "La réciproque", "Réciproque", "La réciproque de Pythagore",
      "Réciproque du théorème de Pythagore", "La réciproque du théorème" ] },
  { nom: "Prouver qu'un triangle n'est pas rectangle", variantes: [
      "Prouver qu'un triangle n'est pas rectangle",
      "Prouver qu'un triangle n'est pas rectangle.",
      "Montrer qu'un triangle n'est pas rectangle",
      "Prouver que le triangle n'est pas rectangle" ] },
];

const CLES = new Set(GROUPES.flatMap(g => g.variantes).map(cle));
/* Filet de sécurité : ces libellés ne doivent JAMAIS être supprimés. */
const PROTEGES = new Set([
  "Démontrer avec la contraposée", "La contraposée", "Contraposée",
  "Démontrer avec la contraposee",
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
      WHERE chapitre ILIKE '%pythagore%' ORDER BY id`);
  if (!rows.length) {
    console.log("Aucun exercice dans le chapitre « Théorème de Pythagore ».");
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

  const survivants = presents.filter(n => !aSupprimer(n));
  const contra = survivants.filter(n => /contrapos/i.test(n));
  if (contra.length) console.log(`\n✓ Conservée comme prévu : « ${contra.join(" », « ")} »`);

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
  const nom = `pythagore-avant-suppression-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(rows, null, 2), "utf8");
  console.log(`\nSauvegarde : ${nom}`);

  const r = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [cibles.map(x => x.id)]);
  console.log(`${r.rowCount} exercice(s) supprimé(s)`);

  const { rows: bilan } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre ILIKE '%pythagore%' GROUP BY 1 ORDER BY n DESC, famille`);
  console.log("\nFamilles après (base) :");
  console.table(bilan);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
