/* MathBase — seed-problemes.js
   Ajoute en base les sections « PROBLÈME » que l'import initial a laissées de côté.

   Contexte : seed-annales-brevet-questions.js ne retenait que les blocs
   « Exercice N ». Sur les sujets d'avant 2012, le PROBLÈME final (12 points
   sur 36) n'a donc jamais été importé. Ce script le rattrape, avec sa
   description de figure quand elle existe.

   Sécurité : simulation par défaut. Rien n'est écrit sans --execute.
   Idempotent : n'ajoute qu'à la suite du tableau `questions`, et seulement si
   la longueur actuelle correspond exactement à l'indice attendu. Un sujet déjà
   complété est ignoré. Une sauvegarde JSON est écrite avant toute écriture.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node seed-problemes.js              # simulation
     node seed-problemes.js --execute    # applique
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");
const PREFIX  = process.env.URL_PREFIX || "annales-pdf/";
const DATA    = "./problemes-data.json";

if (!process.env.DATABASE_URL) {
  console.error("✗ DATABASE_URL manquant (Railway : prenez DATABASE_PUBLIC_URL).");
  process.exit(1);
}
if (/railway\.internal/.test(process.env.DATABASE_URL)) {
  console.error("✗ URL interne détectée : utilisez DATABASE_PUBLIC_URL depuis votre PC.");
  process.exit(1);
}
if (!fs.existsSync(DATA)) {
  console.error("✗ Fichier introuvable :", DATA);
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const norm = n => n.replace(/-/g, "_").replace(/_+/g, "_");

async function main() {
  const data = JSON.parse(fs.readFileSync(DATA, "utf8"));
  const fichiers = Object.keys(data);
  console.log(`${fichiers.length} sujet(s) porteurs d'un PROBLÈME dans le fichier de données.\n`);
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  let sujetsMaj = 0, ajouts = 0, dejaOk = 0, introuvables = 0, decales = 0;
  const sauvegarde = [];
  const exemples = [];

  for (const f of fichiers) {
    const urls = [PREFIX + f, PREFIX + norm(f)];
    const { rows } = await pool.query(
      "SELECT id, questions FROM annales WHERE image_url = ANY($1) LIMIT 1", [urls]);
    if (!rows.length) { introuvables++; continue; }

    let qs = rows[0].questions;
    if (typeof qs === "string") { try { qs = JSON.parse(qs || "[]"); } catch { continue; } }
    if (!Array.isArray(qs)) { introuvables++; continue; }

    // On n'ajoute que les blocs qui prolongent exactement le tableau existant.
    const aAjouter = data[f]
      .slice()
      .sort((a, b) => a.index - b.index)
      .filter(b => b.index >= qs.length);

    if (!aAjouter.length) { dejaOk++; continue; }
    if (aAjouter[0].index !== qs.length) {
      // Un écart signifie que le découpage diffère : on s'abstient plutôt que
      // de créer des trous ou de décaler les indices existants.
      decales++;
      continue;
    }

    const avant = qs.length;
    const nouveau = qs.slice();
    for (const b of aAjouter) {
      if (b.index !== nouveau.length) break;     // sécurité : pas de trou
      const q = { enonce: b.enonce };
      if (b.figure_desc) q.figure_desc = b.figure_desc;
      nouveau.push(q);
      ajouts++;
    }
    if (nouveau.length === avant) continue;

    sujetsMaj++;
    if (exemples.length < 5) {
      exemples.push(`${f} : ${avant} → ${nouveau.length} questions`);
    }

    if (EXECUTE) {
      sauvegarde.push({ id: rows[0].id, image_url: urls[0], questions_avant: qs });
      await pool.query("UPDATE annales SET questions = $1 WHERE id = $2",
                       [JSON.stringify(nouveau), rows[0].id]);
    }
  }

  if (EXECUTE && sauvegarde.length) {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const nom = `annales-avant-problemes-${stamp}.json`;
    fs.writeFileSync(nom, JSON.stringify(sauvegarde, null, 2), "utf8");
    console.log(`Sauvegarde de l'état antérieur : ${nom}\n`);
  }

  console.log(`Sujets ${EXECUTE ? "mis à jour" : "à mettre à jour"} : ${sujetsMaj}`);
  console.log(`Questions ${EXECUTE ? "ajoutées" : "à ajouter"}    : ${ajouts}`);
  console.log(`Déjà complets                  : ${dejaOk}`);
  console.log(`Introuvables en base           : ${introuvables}`);
  console.log(`Découpage divergent (ignorés)  : ${decales}`);
  if (exemples.length) {
    console.log("\nExemples :");
    exemples.forEach(e => console.log("   " + e));
  }
  if (!EXECUTE) console.log("\n(simulation — relancez avec --execute)");

  await pool.end();
}

main().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
