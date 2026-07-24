/* MathBase — split-deux-sujets.js
   Sépare les PDF qui contiennent PLUSIEURS sujets (2 ou 3) en annales distinctes.

   Ces fichiers sont des extraits de recueils annuels : chacun enchaîne les
   sujets de plusieurs sessions, et certains sont mal nommés. Sans cette
   scission, une dizaine de sujets complets restent invisibles pour les élèves.

   Pour chaque fichier :
     1. découpe le PDF en autant de fichiers que de sujets (public/annales-pdf/)
     2. la ligne existante devient le PREMIER sujet (titre corrigé)
     3. une nouvelle ligne est créée pour chaque sujet suivant
     4. les figure_desc sont conservées et les `pages` RENUMÉROTÉES sur le
        nouveau PDF (sinon le correcteur enverrait des pages inexistantes)
     5. les pages écartées (annexe orpheline, index, page vide) sont ignorées
     6. l'ancien PDF est conservé : rien n'est supprimé

   Prérequis : npm install pdf-lib
   Sécurité : simulation par défaut, sauvegarde avant écriture, idempotent.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node split-deux-sujets.js              # simulation
     node split-deux-sujets.js --execute    # applique
*/

const fs   = require("fs");
const path = require("path");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");
const PREFIX  = process.env.URL_PREFIX || "annales-pdf/";
const DATA    = "./deux-sujets-plan.json";
const DOSSIER = process.env.PDF_DIR || path.join(__dirname, "public", "annales-pdf");

if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
if (!fs.existsSync(DATA))      { console.error("✗ Fichier introuvable :", DATA); process.exit(1); }
if (!fs.existsSync(DOSSIER)) {
  console.error("✗ Dossier PDF introuvable :", DOSSIER);
  console.error('  Précisez-le avec $env:PDF_DIR = "chemin"');
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
const norm = n => n.replace(/-/g, "_").replace(/_+/g, "_");

async function decouper(source, cible, p1, p2) {
  const { PDFDocument } = require("pdf-lib");
  const src = await PDFDocument.load(fs.readFileSync(source));
  const out = await PDFDocument.create();
  const idx = [];
  for (let i = p1; i <= p2 && i <= src.getPageCount(); i++) idx.push(i - 1);
  const pages = await out.copyPages(src, idx);
  pages.forEach(pg => out.addPage(pg));
  fs.writeFileSync(cible, await out.save());
  return idx.length;
}

(async () => {
  const plan = JSON.parse(fs.readFileSync(DATA, "utf8"));
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  let traites = 0, deja = 0, ignores = 0, crees = 0;
  const sauvegarde = [];

  for (const [f, info] of Object.entries(plan)) {
    const source = path.join(DOSSIER, f);
    if (!fs.existsSync(source)) { console.warn(`  ⚠ PDF absent : ${f}`); ignores++; continue; }

    const { rows } = await pool.query(
      "SELECT * FROM annales WHERE image_url = ANY($1) LIMIT 1",
      [[PREFIX + f, PREFIX + norm(f)]]);
    if (!rows.length) { console.warn(`  ⚠ absent de la base : ${f}`); ignores++; continue; }
    const a = rows[0];

    // Déjà scindé ? (le dernier sujet existe déjà)
    const dernier = info.sujets[info.sujets.length - 1];
    const dejaLa = await pool.query(
      "SELECT id FROM annales WHERE image_url = $1 LIMIT 1", [PREFIX + dernier.fichier]);
    if (dejaLa.rows.length) { deja++; continue; }

    let qs = a.questions;
    if (typeof qs === "string") { try { qs = JSON.parse(qs || "[]"); } catch { continue; } }
    if (!Array.isArray(qs)) { ignores++; continue; }

    const tousBlocs = [].concat.apply([], info.sujets.map(s => s.blocs));
    const maxBloc = Math.max.apply(null, tousBlocs);
    if (qs.length <= maxBloc) {
      console.warn(`  ⚠ ${f} ignoré : ${qs.length} question(s) en base, ${maxBloc + 1} attendue(s).`);
      ignores++; continue;
    }

    console.log(`  ${f}`);
    if (info.ignorer && info.ignorer.length)
      console.log(`     page(s) écartée(s) : ${info.ignorer.join(", ")}`);

    // Jeux de questions, avec pages renumérotées sur le nouveau PDF
    const jeux = info.sujets.map(s => ({
      s,
      titre: "Brevet — " + s.titre,
      questions: s.blocs.map((bi, k) => {
        const q = Object.assign({}, qs[bi] || {});
        const pg = s.pages_par_bloc[String(k)];
        if (pg && pg.length) q.pages = pg;
        q.pages_total = s.pages_pdf[1] - s.pages_pdf[0] + 1;
        return q;
      }),
    }));

    jeux.forEach((j, i) => console.log(
      `     [${i + 1}] ${String(j.questions.length).padStart(2)} question(s) → ${j.s.fichier}` +
      ` (p${j.s.pages_pdf.join("-")})  « ${j.s.titre} »`));

    if (EXECUTE) {
      for (const j of jeux) {
        const n = await decouper(source, path.join(DOSSIER, j.s.fichier),
                                 j.s.pages_pdf[0], j.s.pages_pdf[1]);
        console.log(`         PDF écrit : ${j.s.fichier} (${n} page(s))`);
      }
      sauvegarde.push({ id: a.id, image_url: a.image_url, title: a.title, questions_avant: qs });

      const p0 = jeux[0];
      await pool.query(
        "UPDATE annales SET questions = $1, image_url = $2, title = $3 WHERE id = $4",
        [JSON.stringify(p0.questions), PREFIX + p0.s.fichier, p0.titre, a.id]);

      for (const j of jeux.slice(1)) {
        await pool.query(
          `INSERT INTO annales (title, exam, year, level, classe, subject, duration,
                                content, image_url, solution, questions)
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
          [j.titre, a.exam, a.year, a.level, a.classe, a.subject, a.duration,
           a.content, PREFIX + j.s.fichier, a.solution, JSON.stringify(j.questions)]);
        crees++;
      }
    } else {
      crees += jeux.length - 1;
    }
    traites++;
  }

  if (EXECUTE && sauvegarde.length) {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const nom = `annales-avant-scission-${stamp}.json`;
    fs.writeFileSync(nom, JSON.stringify(sauvegarde, null, 2), "utf8");
    console.log(`\nSauvegarde de l'état antérieur : ${nom}`);
  }

  console.log(`\nFichiers ${EXECUTE ? "scindés" : "à scinder"}   : ${traites}`);
  console.log(`Nouvelles annales ${EXECUTE ? "créées" : "à créer"} : ${crees}`);
  console.log(`Déjà scindés                 : ${deja}`);
  console.log(`Ignorés                      : ${ignores}`);
  if (!EXECUTE) console.log("\n(simulation — relancez avec --execute)");
  console.log("\nLes anciens PDF sont conservés : supprimez-les une fois le résultat vérifié.");

  await pool.end();
})().catch(e => {
  console.error("Erreur :", e.message);
  if (/pdf-lib|Cannot find module/.test(e.message))
    console.error("→ Lancez d'abord : npm install pdf-lib");
  process.exit(1);
});
