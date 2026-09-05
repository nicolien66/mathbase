/* POLYMATES — audit-sous-questions.js
   Passe le découpage en sous-questions sur TOUTES les annales en base et dit,
   sujet par sujet, combien de questions chaque exercice produit. Lecture
   seule : ne modifie rien.

   C'est ce rapport qui évite de relire les sujets un par un — il désigne
   directement les exercices qui restent en un seul bloc alors que leur
   énoncé est long, c'est-à-dire ceux où l'élève n'aurait qu'un seul cadre
   pour plusieurs questions.

   ── USAGE (PowerShell) ────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node audit-sous-questions.js                 # les cas douteux seulement
     node audit-sous-questions.js --tout          # tous les exercices
     node audit-sous-questions.js --sujet Liban   # un sujet (recherche partielle)
     node audit-sous-questions.js --texte         # + l'énoncé des cas douteux
*/

"use strict";
const { Pool } = require("pg");
const SQ = require("./public/sous-questions.js");

const ARGS   = process.argv.slice(2);
const TOUT   = ARGS.includes("--tout");
const TEXTE  = ARGS.includes("--texte");
const iSujet = ARGS.indexOf("--sujet");
const SUJET  = iSujet !== -1 ? ARGS[iSujet + 1] : null;

/* Un exercice est « douteux » s'il n'est pas découpé alors que son énoncé est
   assez long pour contenir plusieurs questions : c'est le cas qui prive
   l'élève d'espaces de réponse. */
const SEUIL_LONG = 320;   // caractères

if (!process.env.DATABASE_URL) {
  console.error("✗ DATABASE_URL manquant.");
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

function questionsDe(a) {
  const q = a.questions;
  if (Array.isArray(q)) return q;
  try { return JSON.parse(q || "[]"); } catch { return []; }
}

function enonceDe(q) {
  return String(q.enonce_correction || q.enonce || "");
}

function libelle(q, i) {
  const first = enonceDe(q).split("\n")[0].replace(/\s+/g, " ").trim();
  const m = first.match(/^(Exercice|Question|Problème)\s*n?[°o]?\s*(\d+)?/i);
  return m ? m[0] : "Exercice " + (i + 1);
}

(async () => {
  const { rows } = await pool.query(
    "SELECT id, title, questions FROM annales ORDER BY title"
  );

  let nbSujets = 0, nbEx = 0, nbDecoupes = 0, nbQuestions = 0;
  const douteux = [];

  for (const a of rows) {
    if (SUJET && !String(a.title || "").toLowerCase().includes(SUJET.toLowerCase())) continue;
    nbSujets++;
    const qs = questionsDe(a);
    const lignes = [];

    qs.forEach((q, i) => {
      nbEx++;
      const texte = enonceDe(q);
      const d = SQ.diagnostic(texte);
      if (d.sousQuestions > 0) { nbDecoupes++; nbQuestions += d.sousQuestions; }
      else nbQuestions += 1;

      const suspect = d.sousQuestions === 0 && texte.length >= SEUIL_LONG;
      if (suspect) douteux.push({ sujet: a.title, ex: libelle(q, i), taille: texte.length, texte });

      if (TOUT || suspect) {
        lignes.push(
          "   " + (suspect ? "⚠ " : "  ")
          + libelle(q, i).padEnd(14)
          + String(d.sousQuestions || 1).padStart(2) + " question(s)"
          + "   " + String(texte.length).padStart(5) + " car."
          + (d.ecartes ? "   " + d.ecartes + " marqueur(s) écarté(s)" : "")
          + (d.labels.length ? "   " + d.labels.join(" ") : "")
        );
      }
    });

    if (lignes.length) {
      console.log("\n▤ " + a.title);
      lignes.forEach(l => console.log(l));
    }
  }

  console.log("\n═══════════════════════════════════════════════════════");
  console.log("  Sujets analysés        : " + nbSujets);
  console.log("  Exercices              : " + nbEx);
  console.log("  Exercices découpés     : " + nbDecoupes
    + " (" + (nbEx ? Math.round(100 * nbDecoupes / nbEx) : 0) + " %)");
  console.log("  Espaces de réponse     : " + nbQuestions);
  console.log("  Restés en un seul bloc");
  console.log("  malgré un énoncé long  : " + douteux.length + "  ← à regarder");
  console.log("═══════════════════════════════════════════════════════");

  if (TEXTE && douteux.length) {
    console.log("\n── Énoncés des cas douteux ────────────────────────────");
    douteux.forEach(d => {
      console.log("\n▤ " + d.sujet + " — " + d.ex + " (" + d.taille + " car.)");
      console.log(d.texte.split("\n").map(l => "   │ " + l).join("\n"));
    });
  }

  await pool.end();
})().catch(e => { console.error("✗ " + e.message); process.exit(1); });
