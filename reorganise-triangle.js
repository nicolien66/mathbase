/* Polymates — reorganise-triangle.js
   Réorganise les familles du chapitre « Géométrie du triangle ».

   1. SUPPRIME :
        Inégalité triangulaire
        Somme des angles d'un triangle

   2. FUSIONNE :
        Les angles d'un triangle isocèle
          + Triangle isocèle : angle au sommet      → « Triangle isocèle »

   3. RENOMME :
        Triangle rectangle isocèle  →  Triangle rectangle
        Somme des angles            →  Triangle quelconque

   ⚠ LECTURE DE LA CONSIGNE
   La demande disait « supprime […] somme des angles » puis « renomme somme
   des angles en triangle quelconque » : les deux à la fois étaient
   impossibles. Or la base contient DEUX familles voisines —
   « Somme des angles d'un triangle » et « Somme des angles ». J'ai donc
   supprimé la première et renommé la seconde. Si vous vouliez l'inverse,
   il suffit d'échanger les deux libellés dans A_SUPPRIMER et RENOMMAGES
   ci-dessous. La simulation montre le résultat avant toute écriture.

   Une quatrième famille, « Types de triangle », est demandée : elle n'est
   pas créée ici. Une famille n'existe que par les exercices qui la portent,
   c'est donc le générateur (generer-triangle.js) qui la fera naître.

   Sécurité : simulation par défaut, sauvegarde JSON avant écriture.

   Usage :
     $env:DATABASE_URL = "postgresql://..."
     node reorganise-triangle.js              # simulation
     node reorganise-triangle.js --libelles   # + libellés exacts
     node reorganise-triangle.js --execute
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

/* ── 1. Suppressions ── */
const A_SUPPRIMER = [
  "Inégalité triangulaire", "L'inégalité triangulaire", "Inégalités triangulaires",
  "Somme des angles d'un triangle", "La somme des angles d'un triangle",
];

/* ── 2. Fusions ── */
const FUSIONS = [
  { cible: "Triangle isocèle", sources: [
      "Les angles d'un triangle isocèle", "Angles d'un triangle isocèle",
      "Triangle isocèle : angle au sommet", "Triangle isocèle angle au sommet",
      "Triangle isocèle" ] },
];

/* ── 3. Renommages ── */
const RENOMMAGES = [
  { avant: ["Triangle rectangle isocèle", "Le triangle rectangle isocèle"],
    apres: "Triangle rectangle" },
  { avant: ["Somme des angles", "La somme des angles"],
    apres: "Triangle quelconque" },
];

const CLES_SUPPR = A_SUPPRIMER.map(cle);
FUSIONS.forEach(f => { f._cles = f.sources.map(cle); });

/* Destination : null = supprimer, sinon le nom final.
   L'ordre compte : « Somme des angles d'un triangle » (à supprimer) et
   « Somme des angles » (à renommer) ne diffèrent que par deux mots, la
   correspondance EXACTE est donc évaluée avant toute comparaison souple. */
function destination(famille) {
  if (!famille) return famille;
  const k = cle(famille);

  if (CLES_SUPPR.includes(k)) return null;
  for (const r of RENOMMAGES) {
    if (r.avant.some(n => cle(n) === k)) return r.apres;
    if (cle(r.apres) === k) return r.apres;            // déjà renommée
  }
  const f = FUSIONS.find(x => x._cles.includes(k));
  if (f) return f.cible;

  /* Second niveau, seulement si aucune correspondance exacte n'a été trouvée
     et si le libellé ne risque pas de collision avec un voisin très proche. */
  if (A_SUPPRIMER.some(n => memeEnsemble(n, famille))) return null;
  const g = FUSIONS.find(x => x.sources.some(n => memeEnsemble(n, famille)));
  if (g) return g.cible;
  for (const r of RENOMMAGES) {
    if (r.avant.some(n => memeEnsemble(n, famille))) return r.apres;
  }
  return famille;
}

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows } = await pool.query(
    `SELECT id, title, chapitre, famille FROM exercises
      WHERE chapitre ILIKE '%triangle%' AND chapitre NOT ILIKE '%semblable%' ORDER BY id`);
  if (!rows.length) {
    console.log("Aucun exercice dans le chapitre « Géométrie du triangle ».");
    await pool.end(); return;
  }
  console.log(`${rows.length} exercice(s) dans le chapitre.\n`);

  const avant = {};
  rows.forEach(r => { const f = r.famille || "(sans famille)"; avant[f] = (avant[f] || 0) + 1; });
  console.log("Familles avant :");
  console.table(Object.entries(avant).sort((a, b) => b[1] - a[1]).map(([famille, n]) => ({ famille, n })));

  const presents = [...new Set(rows.map(r => r.famille).filter(Boolean))];
  const attendus = A_SUPPRIMER.slice(0, 1).concat(["Somme des angles d'un triangle"])
    .map(n => ({ nom: n, variantes: [n] }))
    .concat(FUSIONS.flatMap(f => f.sources.slice(0, 3).map(n => ({ nom: n, variantes: [n] }))))
    .concat(RENOMMAGES.map(r => ({ nom: r.avant[0], variantes: r.avant })));
  const introuvables = attendus.filter(g =>
    !presents.some(n => g.variantes.some(v => cle(v) === cle(n))));
  if (introuvables.length) {
    console.log("\n⚠ Familles demandées mais absentes :");
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

  const cibles    = rows.filter(r => destination(r.famille) === null);
  const aDeplacer = rows.filter(r => { const d = destination(r.famille);
    return d !== null && d !== r.famille; });

  console.log(`\n→ à supprimer : ${cibles.length} exercice(s)`);
  const pf = {}; cibles.forEach(r => { pf[r.famille] = (pf[r.famille] || 0) + 1; });
  Object.entries(pf).forEach(([f, n]) => console.log(`   · ${f} : ${n}`));

  console.log(`\n→ regroupements et renommages : ${aDeplacer.length} exercice(s)`);
  const pd = {};
  aDeplacer.forEach(r => { const k = r.famille + " ⇒ " + destination(r.famille);
    pd[k] = (pd[k] || 0) + 1; });
  Object.entries(pd).sort().forEach(([k, n]) => console.log(`   · ${k} : ${n}`));

  const apres = {};
  rows.forEach(r => {
    const d = destination(r.famille);
    if (d === null) return;
    const f = d || "(sans famille)";
    apres[f] = (apres[f] || 0) + 1;
  });
  console.log("\nFamilles après :");
  console.table(Object.entries(apres).sort((a, b) => b[1] - a[1]).map(([famille, n]) => ({ famille, n })));
  console.log("La famille « Types de triangle » naîtra avec generer-triangle.js.");

  if (!EXECUTE) {
    console.log(`\n(simulation — ${cibles.length} suppression(s) et ${aDeplacer.length} déplacement(s) ; relancez avec --execute)`);
    await pool.end(); return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `triangle-avant-reorganisation-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(rows, null, 2), "utf8");
  console.log(`\nSauvegarde : ${nom}`);

  if (cibles.length) {
    const r = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [cibles.map(x => x.id)]);
    console.log(`${r.rowCount} exercice(s) supprimé(s)`);
  }
  const parCible = new Map();
  aDeplacer.forEach(r => { const d = destination(r.famille);
    if (!parCible.has(d)) parCible.set(d, []); parCible.get(d).push(r.id); });
  for (const [d, ids] of parCible) {
    const q = await pool.query("UPDATE exercises SET famille = $1 WHERE id = ANY($2)", [d, ids]);
    console.log(`${q.rowCount} exercice(s) → « ${d} »`);
  }

  const { rows: bilan } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre ILIKE '%triangle%' AND chapitre NOT ILIKE '%semblable%'
      GROUP BY 1 ORDER BY n DESC, famille`);
  console.log("\nFamilles après (base) :");
  console.table(bilan);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
