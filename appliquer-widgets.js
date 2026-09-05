/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — appliquer-widgets.js

   Écrit le champ `interactif` sur les questions d'annales qui peuvent être
   traitées dans un widget plutôt que rédigées au clavier.

   Ce que fait le champ : la page Examen (via examen-widgets.js) monte le
   plateau correspondant au-dessus du brouillon. Sans ce champ, la question
   reste en réponse rédigée — rien ne casse.

   ── D'OÙ VIENNENT CES DONNÉES ─────────────────────────────────────────────
   Des PDF officiels eux-mêmes. Les formules affines y sont typographiées par
   LaTeX sur deux lignes — « f : x 2x 20 » d'un côté, « 7→ + » de l'autre — et
   l'extraction ordinaire perd les opérateurs. Elles ont été reconstruites en
   regroupant les mots par ligne de base, puis les valeurs attendues calculées
   à partir des coefficients et des abscisses du tableau de l'énoncé.
   Deux entrées ont été vérifiées à la main contre le sujet source.

   ── SÉCURITÉ ──────────────────────────────────────────────────────────────
   Par défaut le script ne modifie RIEN : il liste ce qu'il ferait. L'écriture
   exige --appliquer, et sauvegarde d'abord les questions d'origine.

   ── USAGE (PowerShell) ────────────────────────────────────────────────────
     node appliquer-widgets.js              # liste seulement
     node appliquer-widgets.js --appliquer  # écrit en base
     node appliquer-widgets.js --retirer    # enlève tous les champs interactif
*/

"use strict";
const fs = require("fs");
const { Pool } = require("pg");

const APPLIQUER = process.argv.includes("--appliquer");
const RETIRER   = process.argv.includes("--retirer");

const CATALOGUE = [
  {
    fichier: "Brevet_Amerique_du_Sud_novembre_2002.pdf",
    exercice: "Problème",
    interactif: {
      widget: "tableau",
      titre: "Complète le tableau de valeurs",
      lignes: [
        { entete: "Nombre de boîtes expédiées", cellules: [50, 100, 120, 150, 200] },
        { entete: "f(x) = 2,25x", cellules: [null, null, null, null, null] },
        { entete: "g(x) = 2x + 30", cellules: [null, null, null, null, null] }
      ],
      reponse: { cellules: {
        "1,0": 112.5,
        "1,1": 225,
        "1,2": 270,
        "1,3": 337.5,
        "1,4": 450,
        "2,0": 130,
        "2,1": 230,
        "2,2": 270,
        "2,3": 330,
        "2,4": 430
      } }
    }
  },
  {
    fichier: "Brevet_AntillesGuyane_septembre_2007.pdf",
    exercice: "Problème",
    interactif: {
      widget: "tableau",
      titre: "Complète le tableau de valeurs",
      lignes: [
        { entete: "Nombre de séances", cellules: [10, 17, 30] },
        { entete: "t(x) = 1,2x", cellules: [null, null, null] },
        { entete: "c(x) = 0,9x + 8", cellules: [null, null, null] }
      ],
      reponse: { cellules: {
        "1,0": 12,
        "1,1": 20.4,
        "1,2": 36,
        "2,0": 17,
        "2,1": 23.3,
        "2,2": 35
      } }
    }
  },
  {
    fichier: "Brevet_Antilles_juin_2006.pdf",
    exercice: "Problème",
    interactif: {
      widget: "tableau",
      titre: "Complète le tableau de valeurs",
      lignes: [
        { entete: "Durée (en minutes)", cellules: [30, 45, 60, 90] },
        { entete: "f(x) = 0,3x + 19", cellules: [null, null, null, null] },
        { entete: "g(x) = 0,2x + 29", cellules: [null, null, null, null] }
      ],
      reponse: { cellules: {
        "1,0": 28,
        "1,1": 32.5,
        "1,2": 37,
        "1,3": 46,
        "2,0": 35,
        "2,1": 38,
        "2,2": 41,
        "2,3": 47
      } }
    }
  },
  {
    fichier: "Brevet_Groupement_Est_3_28_juin_2005.pdf",
    exercice: "Problème",
    interactif: {
      widget: "tableau",
      titre: "Complète le tableau de valeurs",
      lignes: [
        { entete: "Nombre de spectacles", cellules: [4, 9, 15] },
        { entete: "s(x) = 8x", cellules: [null, null, null] },
        { entete: "p(x) = 4x + 20", cellules: [null, null, null] }
      ],
      reponse: { cellules: {
        "1,0": 32,
        "1,1": 72,
        "1,2": 120,
        "2,0": 36,
        "2,1": 56,
        "2,2": 80
      } }
    }
  },
  {
    fichier: "Brevet_Lyon_1_juin_2002.pdf",
    exercice: "Problème",
    interactif: {
      widget: "tableau",
      titre: "Complète le tableau de valeurs",
      lignes: [
        { entete: "Nombre de bouteilles", cellules: [1, 5, 15] },
        { entete: "f(x) = 7,5x", cellules: [null, null, null] },
        { entete: "g(x) = 6x + 18", cellules: [null, null, null] }
      ],
      reponse: { cellules: {
        "1,0": 7.5,
        "1,1": 37.5,
        "1,2": 112.5,
        "2,0": 24,
        "2,1": 48,
        "2,2": 108
      } }
    }
  },
  {
    fichier: "Brevet_NouvelleCaledonie_mars_2007_2006.pdf",
    exercice: "Problème",
    interactif: {
      widget: "tableau",
      titre: "Complète le tableau de valeurs",
      lignes: [
        { entete: "Nombre de traversées", cellules: [5, 12, 18] },
        { entete: "A(x) = 1200x", cellules: [null, null, null] },
        { entete: "B(x) = 700x + 5000", cellules: [null, null, null] }
      ],
      reponse: { cellules: {
        "1,0": 6000,
        "1,1": 14400,
        "1,2": 21600,
        "2,0": 8500,
        "2,1": 13400,
        "2,2": 17600
      } }
    }
  },
  {
    fichier: "Brevet_Polynesie_juin_2006.pdf",
    exercice: "Problème",
    interactif: {
      widget: "tableau",
      titre: "Complète le tableau de valeurs",
      lignes: [
        { entete: "Nombre de tricots vendus", cellules: [10, 50, 100, 150, 250] },
        { entete: "f(x) = 1000x", cellules: [null, null, null, null, null] },
        { entete: "g(x) = 700x + 20000", cellules: [null, null, null, null, null] }
      ],
      reponse: { cellules: {
        "1,0": 10000,
        "1,1": 50000,
        "1,2": 100000,
        "1,3": 150000,
        "1,4": 250000,
        "2,0": 27000,
        "2,1": 55000,
        "2,2": 90000,
        "2,3": 125000,
        "2,4": 195000
      } }
    }
  }
];

if (!process.env.DATABASE_URL) { console.error("\u2717 DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL,
                        ssl: { rejectUnauthorized: false } });

const questionsDe = a => {
  if (Array.isArray(a.questions)) return a.questions;
  try { return JSON.parse(a.questions || "[]"); } catch { return []; }
};

/* Le nom du PDF vit dans image_url : les titres ont \u00e9t\u00e9 r\u00e9\u00e9crits par l'IA
   au d\u00e9p\u00f4t et ne sont pas fiables pour cibler une annale. */
const correspond = (a, f) => String(a.image_url || "").endsWith(f);

/* Rep\u00e8re la question vis\u00e9e par son intitul\u00e9 : \u00ab Probl\u00e8me \u00bb, \u00ab Exercice 3 \u00bb.
   On compare sans accents ni casse, l'extraction \u00e9tant capricieuse. */
const nu = s => String(s || "").toLowerCase().normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

function trouveQuestion(qs, intitule) {
  const cible = nu(intitule);
  let i = qs.findIndex(q => nu(String(q.enonce_correction || q.enonce || "").slice(0, 40)).startsWith(cible));
  if (i === -1) i = qs.findIndex(q => nu(String(q.enonce_correction || q.enonce || "")).includes(cible));
  return i;
}

(async () => {
  const { rows } = await pool.query("SELECT id, title, image_url, questions FROM annales");
  console.log("Annales en base : " + rows.length);

  if (RETIRER) {
    let n = 0;
    for (const a of rows) {
      const qs = questionsDe(a);
      if (!qs.some(q => q.interactif)) continue;
      qs.forEach(q => { delete q.interactif; });
      if (APPLIQUER) await pool.query("UPDATE annales SET questions = $1 WHERE id = $2",
                                      [JSON.stringify(qs), a.id]);
      n++;
    }
    console.log((APPLIQUER ? "\u2713 " : "\u00e0 nettoyer : ") + n + " annale(s).");
    await pool.end();
    return;
  }

  const plan = [];
  const rates = [];
  for (const e of CATALOGUE) {
    const a = rows.find(r => correspond(r, e.fichier));
    if (!a) { rates.push(e.fichier + "  \u2014 annale absente de la base"); continue; }
    const qs = questionsDe(a);
    const i = trouveQuestion(qs, e.exercice);
    if (i === -1) { rates.push(e.fichier + "  \u2014 \u00ab " + e.exercice + " \u00bb introuvable parmi " + qs.length + " questions"); continue; }
    plan.push({ a, qs, i, e });
  }

  console.log("\n\u00c0 \u00e9quiper : " + plan.length + " question(s)");
  plan.forEach(p => {
    const l = p.e.interactif.lignes;
    console.log("\n  \u25a4 " + p.a.title + "  \u2014 " + p.e.exercice + "  (question " + (p.i + 1) + ")");
    console.log("    widget " + p.e.interactif.widget + " : " + l.length + " lignes, "
      + Object.keys(p.e.interactif.reponse.cellules).length + " cases attendues");
    l.forEach(L => console.log("      " + L.entete.padEnd(28)
      + L.cellules.map(c => c === null ? "__" : c).join("  ")));
  });

  if (rates.length) {
    console.log("\n\u26a0 " + rates.length + " non appari\u00e9e(s) :");
    rates.forEach(r => console.log("    " + r));
  }

  if (!APPLIQUER) {
    console.log("\n  Rien n'a \u00e9t\u00e9 \u00e9crit. Relance avec --appliquer pour agir.");
    await pool.end();
    return;
  }

  const horodatage = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
  const nom = "sauvegarde-questions-" + horodatage + ".json";
  fs.writeFileSync(nom, JSON.stringify(plan.map(p => ({ id: p.a.id, questions: p.qs })), null, 2));
  console.log("\n\u2713 Sauvegarde : " + nom);

  for (const p of plan) {
    p.qs[p.i].interactif = p.e.interactif;
    await pool.query("UPDATE annales SET questions = $1 WHERE id = $2",
                     [JSON.stringify(p.qs), p.a.id]);
  }
  console.log("\u2713 " + plan.length + " question(s) \u00e9quip\u00e9e(s).");
  await pool.end();
})().catch(e => { console.error("\u2717 " + e.message); process.exit(1); });
