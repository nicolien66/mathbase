/* MathBase — audit-annales.js
   Vérifie que chaque question d'annale dispose de ce dont l'IA a besoin
   pour corriger. Lecture seule : ne modifie rien.

   Le correcteur (/exercises/correct) construit son prompt avec :
     content      <- enonce_correction || enonce   (INDISPENSABLE)
     figure_desc  <- description de la figure       (critique en géométrie)
     solution     <- corrigé officiel               (facultatif, améliore la note)

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node audit-annales.js
     node audit-annales.js > audit.txt     (pour garder le rapport)
*/

const fs = require("fs");
const { Pool } = require("pg");

if (!process.env.DATABASE_URL) {
  console.error("✗ DATABASE_URL manquant (Railway : DATABASE_PUBLIC_URL).");
  process.exit(1);
}
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Libellé de substitution posé par la migration : ne constitue PAS un énoncé.
const PLACEHOLDER = /reporte-toi au sujet PDF/i;

// Vocabulaire indiquant qu'une figure est probablement nécessaire.
const GEO = /(triangle|rectangle|carr[ée]|losange|parall[ée]logramme|trap[eè]ze|cercle|diam[eè]tre|rayon|c[ôo]ne|cylindre|sph[eè]re|pyramide|prisme|pav[ée]|cube|segment|droite|angle|align[ée]|parall[eè]le|perpendiculaire|isoc[eè]le|[ée]quilat[ée]ral|thal[eè]s|pythagore|trigonom|rep[eè]re|graphique|sch[ée]ma|figure|ci-contre|ci-dessous)/i;

function texteCorrection(q) {
  const t = (q && (q.enonce_correction || q.enonce)) || "";
  return String(t).replace(/\s+/g, " ").trim();
}

(async () => {
  const { rows } = await pool.query(
    "SELECT id, title, image_url, questions FROM annales ORDER BY id");

  let nbQ = 0, sansTexte = 0, texteCourt = 0, avecFig = 0, sansFigGeo = 0, avecSol = 0;
  const sansQuestions = [], sansPdf = [], bloquants = [], figManquantes = [];

  for (const a of rows) {
    let qs = a.questions;
    if (typeof qs === "string") { try { qs = JSON.parse(qs || "[]"); } catch { qs = []; } }
    if (!Array.isArray(qs)) qs = [];

    if (!a.image_url) sansPdf.push(a.title || a.id);
    if (!qs.length) { sansQuestions.push(a.title || ("id " + a.id)); continue; }

    qs.forEach((q, i) => {
      nbQ++;
      const t = texteCorrection(q);

      // 1. Bloquant : rien d'exploitable, ou seulement le libellé de renvoi au PDF
      if (!t || PLACEHOLDER.test(t) || t.length < 25) {
        if (!t) sansTexte++; else texteCourt++;
        if (bloquants.length < 40)
          bloquants.push(`${a.title || a.id} [${i}] : « ${t.slice(0, 60) || "(vide)"} »`);
        return;
      }

      // 2. Figure attendue mais absente
      if (q.figure_desc) avecFig++;
      else if (GEO.test(t)) {
        sansFigGeo++;
        if (figManquantes.length < 25)
          figManquantes.push(`${a.title || a.id} [${i}] : ${t.slice(0, 70)}…`);
      }

      if (q.solution) avecSol++;
    });
  }

  const pct = (n) => nbQ ? ((100 * n) / nbQ).toFixed(1) + " %" : "—";

  console.log("\n══════════ AUDIT DES ANNALES ══════════\n");
  console.log("Sujets en base                  :", rows.length);
  console.log("Questions au total              :", nbQ);
  console.log("");
  console.log("Corrigeables par l'IA           :", nbQ - sansTexte - texteCourt,
              "(" + pct(nbQ - sansTexte - texteCourt) + ")");
  console.log("  · sans aucun énoncé           :", sansTexte);
  console.log("  · énoncé absent ou trop court :", texteCourt);
  console.log("");
  console.log("Avec description de figure      :", avecFig, "(" + pct(avecFig) + ")");
  console.log("  · géométrie SANS figure_desc  :", sansFigGeo);
  console.log("Avec corrigé officiel           :", avecSol, "(" + pct(avecSol) + ")");
  console.log("");
  console.log("Sujets sans aucune question     :", sansQuestions.length);
  console.log("Sujets sans fichier (image_url) :", sansPdf.length);

  if (bloquants.length) {
    console.log("\n──── BLOQUANT : l'IA ne peut pas corriger ces questions ────");
    bloquants.forEach(x => console.log("  " + x));
    console.log("  (le champ enonce_correction est probablement manquant)");
  }
  if (sansQuestions.length) {
    console.log("\n──── Sujets sans question (inutilisables en mode examen) ────");
    sansQuestions.slice(0, 25).forEach(x => console.log("  " + x));
    if (sansQuestions.length > 25) console.log(`  … et ${sansQuestions.length - 25} autre(s)`);
  }
  if (figManquantes.length) {
    console.log("\n──── Géométrie sans description de figure (correction dégradée) ────");
    figManquantes.forEach(x => console.log("  " + x));
  }

  const rapport = { date: new Date().toISOString(), sujets: rows.length, questions: nbQ,
                    sansTexte, texteCourt, avecFig, sansFigGeo, avecSol,
                    sujetsSansQuestions: sansQuestions, sujetsSansFichier: sansPdf,
                    bloquants, figuresManquantes: figManquantes };
  fs.writeFileSync("audit-annales.json", JSON.stringify(rapport, null, 2), "utf8");
  console.log("\nRapport détaillé écrit dans audit-annales.json");

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
