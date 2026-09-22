#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — seed-kholles.js
   Remplit la base d'une khôlle par chapitre, pour les mathématiques et la
   physique-chimie, en lisant la liste des chapitres dans public/contenu.js et
   public/contenu-physique-chimie.js (donc toujours à jour avec le site).

   USAGE (depuis la racine du projet, à côté de server.js) :
     DATABASE_URL="postgresql://…" MISTRAL_KEY="…" node seed-kholles.js
   Options :
     --matiere=mathematiques | physique-chimie   ne traiter qu'une matière
     --chapitre="Théorème de Thalès"             ne traiter qu'un chapitre
     --par-chapitre=2                            viser N khôlles par chapitre (défaut 1)
     --niveau=college | lycee                    ne traiter qu'un niveau
     --dry-run                                   générer et afficher sans rien écrire
     --modele=mistral-large-latest               modèle de génération

   Le script est idempotent : il ne génère que pour les chapitres qui n'ont
   pas encore atteint le nombre voulu. Il peut être relancé après une coupure.
   ═══════════════════════════════════════════════════════════════════════════ */
"use strict";

const path     = require("path");
const { Pool } = require("pg");
const KHOLLES  = require("./kholles");

const args = Object.fromEntries(process.argv.slice(2).map(a => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  return m ? [m[1], m[2] === undefined ? true : m[2]] : [a, true];
}));

const key = process.env.MISTRAL_KEY;
const url = process.env.DATABASE_URL;
if (!key) { console.error("MISTRAL_KEY manquante."); process.exit(1); }
if (!url && !args["dry-run"]) { console.error("DATABASE_URL manquante."); process.exit(1); }

const parChapitre = Math.max(1, Number(args["par-chapitre"]) || 1);
const modele      = args.modele || KHOLLES.MODELE_GENERATION;
const dryRun      = !!args["dry-run"];
const pause       = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const pool = url ? new Pool({ connectionString: url, ssl: { rejectUnauthorized: false } }) : null;

  let chapitres = KHOLLES.chargerChapitres(path.join(__dirname, "public"));
  if (args.matiere)  chapitres = chapitres.filter(c => c.matiere === args.matiere);
  if (args.niveau)   chapitres = chapitres.filter(c => c.level === args.niveau);
  if (args.chapitre) chapitres = chapitres.filter(c => c.chapitre === args.chapitre);
  if (!chapitres.length) { console.error("Aucun chapitre ne correspond aux options."); process.exit(1); }

  if (pool) {
    await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS kholle JSONB`);
    await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS type TEXT DEFAULT 'exercice'`);
    await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS matiere TEXT`);
    await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS famille TEXT`);
  }

  console.log(`${chapitres.length} chapitre(s) — objectif ${parChapitre} khôlle(s) par chapitre — modèle ${modele}${dryRun ? " — DRY RUN" : ""}`);
  let generees = 0, echecs = 0, dejaOk = 0;

  for (const c of chapitres) {
    let existants = [];
    if (pool) {
      const { rows } = await pool.query(
        `SELECT title FROM exercises WHERE type = 'kholle'
          AND COALESCE(matiere,'mathematiques') = $1 AND chapitre = $2`, [c.matiere, c.chapitre]);
      existants = rows.map(r => r.title);
    }
    if (existants.length >= parChapitre) { dejaOk++; continue; }

    for (let n = existants.length; n < parChapitre; n++) {
      process.stdout.write(`· ${c.matiere} / ${c.chapitre} (${c.level}) … `);
      try {
        const k = await KHOLLES.genererKholle({ key, ...c, existants, model: modele });
        if (dryRun) {
          console.log(`OK (non écrit) — « ${k.title} »`);
          console.log("    réponse : " + k.kholle.reponse_finale);
        } else {
          const ins = await pool.query(
            `INSERT INTO exercises (title, content, level, subject, difficulty, solution, classe, chapitre,
                                    matiere, type, famille, kholle)
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,'kholle','Khôlle',$10) RETURNING id`,
            [k.title, k.content, k.level, k.subject, k.difficulty, k.solution, k.classe, k.chapitre,
             k.matiere, JSON.stringify(k.kholle)]);
          console.log(`OK #${ins.rows[0].id} — « ${k.title} » (${k.classe}, ${k.kholle.duree} min)`);
        }
        existants.push(k.title);
        generees++;
      } catch (e) {
        echecs++;
        console.log("ÉCHEC : " + e.message);
      }
      await pause(800);   // ménage le quota de l'API
    }
  }

  console.log(`\nTerminé : ${generees} générée(s), ${echecs} échec(s), ${dejaOk} chapitre(s) déjà complet(s).`);
  if (pool) await pool.end();
})().catch(e => { console.error(e); process.exit(1); });
