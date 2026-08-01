/* MathBase — restructurer-longueur.js
   Chapitre « Longueur » : suppression d'une famille et préparation des
   quatre nouvelles familles de surfaces et de volumes.

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. Affiche l'inventaire du chapitre (familles, effectifs, difficultés,
      type, un énoncé témoin par famille).
   2. SUPPRIME la famille « Périmètre d'un triangle ».
   3. Repère les familles de LONGUEUR qui serviront de modèle aux nouvelles
      familles (« comparer… » et « convertir… ») et affiche TOUS leurs
      énoncés, pas seulement un témoin : ce sont eux que je dois décliner
      au carré et au cube.

   Les quatre nouvelles familles — « Comparer des surfaces », « Convertir des
   surfaces », « Comparer des volumes », « Convertir des volumes » — ne sont
   PAS créées ici : une famille n'existe que par les exercices qu'elle
   contient. Elles naîtront avec les 100 exercices que le générateur y
   insérera, calqués sur leurs homologues de longueur.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node restructurer-longueur.js --inventaire   # ne fait que lister
     node restructurer-longueur.js                # simulation
     node restructurer-longueur.js --execute      # applique (+ sauvegarde)
   Option : --garder-triangle   ne supprime pas « Périmètre d'un triangle »
*/

"use strict";
const fs = require("fs");
const { Pool } = require("pg");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const INVENTAIRE = ARGS.includes("--inventaire");
const GARDER = ARGS.includes("--garder-triangle");
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const sing = m => m.replace(/s$/, "");
function commencePar(nom, prefixe) {
  const a = cle(nom).split(" ").map(sing), b = cle(prefixe).split(" ").map(sing);
  return b.every((mot, i) => a[i] === mot);
}
const A_SUPPRIMER = "perimetre d un triangle";
/* familles de longueur à décliner en surfaces et en volumes */
const MODELES = ["comparer", "convertir"];

const maj = (t, ch, def) => { const c = new Map();
  t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
  return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };

(async () => {
  if (!EXECUTE && !INVENTAIRE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, solution, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%ongueur%' ORDER BY id`);
  const rows = brut.filter(r => cle(r.chapitre).includes("longueur"));
  if (!rows.length) {
    console.log("Chapitre « Longueur » introuvable.");
    console.log("Chapitres approchants :", [...new Set(brut.map(r => r.chapitre))].join(" | ") || "(aucun)");
    await pool.end(); return;
  }
  const CHAPITRE = maj(rows, "chapitre", "Longueur");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  /* ── INVENTAIRE ── */
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

  /* familles servant de modèle aux surfaces et volumes */
  const aDecliner = [...groupes.values()].filter(g => MODELES.some(m => commencePar(g.nom, m)));
  console.log(`\nFamilles de longueur à décliner (${aDecliner.length}) :`);
  if (aDecliner.length) {
    aDecliner.forEach(g => console.log(`   - ${g.nom} (${g.items.length} exercice(s), type ${maj(g.items, "type", "?")})`));
    console.log("\nTOUS leurs énoncés — ce sont eux que je transposerai au carré et au cube :");
    aDecliner.forEach(g => {
      console.log(`\n══ ${g.nom} ══`);
      g.items.forEach(e => {
        console.log(`\n[${e.difficulty || "?"}] ${String(e.content).replace(/\s+/g, " ")}`);
        console.log(`  → ${String(e.solution || "").replace(/\s+/g, " ").slice(0, 200)}`);
      });
    });
  } else {
    console.log("   (aucune : vérifiez les libellés « comparer… » / « convertir… » ci-dessus)");
  }

  if (INVENTAIRE) {
    console.log("\n\nUn énoncé par famille (pour caler le style des futurs exercices) :");
    [...groupes.values()].sort((a, b) => a.nom.localeCompare(b.nom, "fr")).forEach(g => {
      const e = g.items[0];
      console.log(`\n■ ${g.nom}  [${e.difficulty || "?"}] (${maj(g.items, "type", "?")})\n  ${String(e.content).replace(/\s+/g, " ").slice(0, 240)}`);
    });
    await pool.end(); return;
  }

  /* ── SUPPRESSION ── */
  const aSupprimer = [];
  const cibles = [...groupes.values()].filter(g => commencePar(g.nom, A_SUPPRIMER));
  if (!cibles.length) console.log(`\n· Suppression sans objet : « ${A_SUPPRIMER} » introuvable.`);
  cibles.forEach(g => {
    if (GARDER) { console.log(`\n· « ${g.nom} » conservée (--garder-triangle).`); return; }
    console.log(`\n→ SUPPRESSION de « ${g.nom} » : ${g.items.length} exercice(s).`);
    aSupprimer.push(...g.items.map(i => i.id));
  });

  console.log(`\nRésumé : ${aSupprimer.length} exercice(s) supprimé(s).`);
  console.log(`Le chapitre passerait de ${rows.length} à ${rows.length - aSupprimer.length} exercice(s).`);
  console.log(`\nLes 4 familles « Comparer/Convertir des surfaces/volumes » seront créées`);
  console.log(`par generer-longueur.js, en y insérant leurs 100 exercices.`);

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `longueur-avant-restructuration-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde intégrale du chapitre : ${nom}`);
  console.log("  (elle contient les exercices supprimés : l'opération est réversible.)");

  if (aSupprimer.length) {
    const res = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [aSupprimer]);
    console.log(`${res.rowCount} exercice(s) supprimé(s).`);
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAPITRE]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
