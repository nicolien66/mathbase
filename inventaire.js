/* MathBase — inventaire.js
   Inventaire en LECTURE SEULE d'un chapitre : familles, effectifs, répartition
   des difficultés, type, classe, et tous les énoncés témoins avec leur corrigé.

   Générique : utilisable pour n'importe quel chapitre, maintenant ou plus tard.
   C'est cette sortie qui me permet d'écrire un générateur calé sur le style
   réellement présent en base.

   Ne modifie RIEN.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node inventaire.js --chapitre "Repérage temps & durées"
     node inventaire.js --chapitre "temps"        # recherche partielle
     node inventaire.js --liste                   # tous les chapitres
   Options :
     --tous-les-enonces   affiche tous les exercices, pas un par famille
*/

"use strict";
const { Pool } = require("pg");

const ARGS = process.argv.slice(2);
const LISTE = ARGS.includes("--liste");
const TOUS = ARGS.includes("--tous-les-enonces");
const iC = ARGS.indexOf("--chapitre");
const DEMANDE = iC >= 0 && ARGS[iC + 1] && !ARGS[iC + 1].startsWith("--") ? ARGS[iC + 1] : null;

if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
if (!LISTE && !DEMANDE) {
  console.error('Usage : node inventaire.js --chapitre "Nom du chapitre"');
  console.error('        node inventaire.js --liste');
  process.exit(1);
}
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const cle = t => String(t || "").replace(/²/g, "2").replace(/³/g, "3")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const maj = (t, ch, def) => { const c = new Map();
  t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
  return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
const plat = t => String(t || "").replace(/\s+/g, " ").trim();

(async () => {
  if (LISTE) {
    const { rows } = await pool.query(
      `SELECT COALESCE(chapitre,'(sans chapitre)') AS chapitre, count(*)::int AS n,
              count(DISTINCT famille)::int AS familles
         FROM exercises GROUP BY 1 ORDER BY 1`);
    console.log(`${rows.length} chapitre(s) en base :`);
    console.table(rows);
    console.log(`Total : ${rows.reduce((s, r) => s + r.n, 0)} exercice(s).`);
    await pool.end(); return;
  }

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, solution, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE $1 ORDER BY id`, [`%${DEMANDE}%`]);
  /* si la recherche partielle ramène plusieurs chapitres, on demande de préciser */
  const chapitres = [...new Set(brut.map(r => r.chapitre))];
  if (!brut.length) {
    console.log(`Aucun exercice pour un chapitre contenant « ${DEMANDE} ».`);
    const { rows: tous } = await pool.query(`SELECT DISTINCT chapitre FROM exercises ORDER BY 1`);
    console.log("Chapitres existants :", tous.map(t => t.chapitre).join(" | "));
    await pool.end(); return;
  }
  if (chapitres.length > 1) {
    console.log(`Plusieurs chapitres correspondent à « ${DEMANDE} » :`);
    chapitres.forEach(c => console.log(`   - ${c} (${brut.filter(r => r.chapitre === c).length} exercice(s))`));
    console.log("Relancez en donnant le nom complet.");
    await pool.end(); return;
  }

  const rows = brut, CHAPITRE = chapitres[0];
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).`);
  console.log(`Colonnes majoritaires : classe ${maj(rows, "classe", "?")} · matière ${maj(rows, "subject", "?")} · niveau ${maj(rows, "level", "?")}\n`);

  const groupes = new Map();
  rows.forEach(r => { const k = cle(r.famille) || "(sans famille)";
    if (!groupes.has(k)) groupes.set(k, { nom: r.famille || "(sans famille)", items: [] });
    groupes.get(k).items.push(r); });

  const inv = [...groupes.values()].map(g => {
    const d = { Facile: 0, Moyen: 0, Difficile: 0 };
    g.items.forEach(i => { if (d[i.difficulty] !== undefined) d[i.difficulty]++; });
    return { famille: g.nom, n: g.items.length, F: d.Facile, M: d.Moyen, D: d.Difficile,
             type: maj(g.items, "type", ""), classe: maj(g.items, "classe", "") };
  }).sort((a, b) => a.famille.localeCompare(b.famille, "fr"));
  console.log("Familles présentes :");
  console.table(inv);

  const pbs = inv.filter(i => i.type === "probleme");
  console.log(pbs.length
    ? `${pbs.length} famille(s) de type « probleme » : ${pbs.map(p => `« ${p.famille} »`).join(", ")}.`
    : "Aucune famille de type « probleme ».");

  console.log(`\n${TOUS ? "TOUS les énoncés" : "Un énoncé par famille"}, avec le corrigé :`);
  [...groupes.values()].sort((a, b) => a.nom.localeCompare(b.nom, "fr")).forEach(g => {
    console.log(`\n══ ${g.nom} ══`);
    (TOUS ? g.items : g.items.slice(0, 1)).forEach(e => {
      console.log(`\n[${e.difficulty || "?"}] (${e.type || "?"}) ${plat(e.content).slice(0, 300)}`);
      console.log(`  → ${plat(e.solution).slice(0, 300)}`);
    });
    if (!TOUS && g.items.length > 1) console.log(`  (${g.items.length - 1} autre(s) exercice(s) dans cette famille — --tous-les-enonces pour les voir)`);
  });

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
