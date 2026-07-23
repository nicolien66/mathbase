/* Diagnostic : repère les entrées des tables statiques dont l'indice dépasse
   la fin du tableau `questions` en base, et mesure l'écart de découpage.

   Lecture seule — ne modifie rien.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node check-indices.js
*/

const { Pool } = require("pg");
const path = require("path");

const SEED = path.resolve("./seed-figures-desc.js");
const { DESC, DESC_INCERTAIN, DESC_RECUEILS } = (() => {
  const fs = require("fs");
  const src = fs.readFileSync(SEED, "utf8");
  const grab = (name) => {
    const a = src.indexOf(`const ${name} = {`);
    if (a < 0) return {};
    const b = src.indexOf("\n};", a) + 3;
    const sandbox = {};
    new Function("o", src.slice(a, b).replace(`const ${name} =`, "Object.assign(o,")
      .replace(/\};\s*$/, "});"))(sandbox);
    return sandbox;
  };
  return { DESC: grab("DESC"), DESC_INCERTAIN: grab("DESC_INCERTAIN"),
           DESC_RECUEILS: grab("DESC_RECUEILS") };
})();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const STATIC = {};
for (const t of [DESC, DESC_INCERTAIN])                 // recueils exclus
  for (const [f, by] of Object.entries(t))
    STATIC[f] = Object.assign({}, STATIC[f], by);

async function main() {
  let horsLimites = 0, ok = 0, absents = 0;
  const details = [];

  for (const [file, byIdx] of Object.entries(STATIC)) {
    const { rows } = await pool.query(
      "SELECT questions FROM annales WHERE image_url = $1 LIMIT 1",
      ["annales-pdf/" + file]);
    if (!rows.length) { absents++; continue; }

    let qs = rows[0].questions;
    if (typeof qs === "string") qs = JSON.parse(qs || "[]");
    if (!Array.isArray(qs)) { absents++; continue; }

    const idx = Object.keys(byIdx).map(Number).sort((a, b) => a - b);
    const dehors = idx.filter(i => !qs[i]);
    ok += idx.length - dehors.length;
    if (dehors.length) {
      horsLimites += dehors.length;
      details.push({ fichier: file, en_base: qs.length,
                     indice_max_attendu: Math.max(...idx), hors_limites: dehors.join(",") });
    }
  }

  console.log(`\nEntrées statiques appliquées      : ${ok}`);
  console.log(`Entrées ignorées (hors limites)   : ${horsLimites}`);
  console.log(`Sujets absents de la base         : ${absents}\n`);

  if (details.length) {
    console.log("Sujets concernés (le tableau `questions` est plus court que prévu) :");
    console.table(details);
    console.log("\nSi `en_base` est très inférieur à `indice_max_attendu`, le découpage");
    console.log("de ce sujet diffère : les descriptions posées dessus sont à vérifier.");
  } else {
    console.log("Aucun écart : tous les indices tombent dans les limites.");
  }

  await pool.end();
}

main().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
