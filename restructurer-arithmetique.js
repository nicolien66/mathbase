/* MathBase — restructurer-arithmetique.js
   Chapitre « Arithmétique » : suppression d'une famille et nettoyage des
   énoncés de la famille « PGCD par décompositions ».

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. Affiche l'inventaire du chapitre (familles, effectifs, difficultés,
      type, un énoncé témoin) — c'est cette sortie qui me permettra d'écrire
      ensuite le générateur des 100 exercices par famille.
   2. SUPPRIME la famille « Multiples d'un nombre ».
   3. Dans « PGCD par décompositions », repère les énoncés qui SOUFFLENT la
      décomposition en facteurs premiers et les retire, puisque l'élève doit
      la faire lui-même. Sont considérés comme tels les énoncés qui :
        · donnent une décomposition toute faite (« 84 = 2² × 3 × 7 ») ;
        · demandent explicitement de décomposer avant de conclure ;
        · fournissent les facteurs premiers des nombres.
      Le simple mot « PGCD » ne déclenche rien.
      Les exercices retirés sont remplacés par les 100 générés ensuite, qui
      ne comportent aucune indication : « Détermine le PGCD de 84 et 60. »
      et rien de plus.

   Aucune réécriture automatique d'énoncé : elle casserait le corrigé, qui
   s'appuie sur l'indication. On retire, on ne reformule pas.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node restructurer-arithmetique.js --inventaire   # ne fait que lister
     node restructurer-arithmetique.js                # simulation
     node restructurer-arithmetique.js --execute      # applique (+ sauvegarde)
   Options :
     --garder-indications   signale les énoncés fautifs sans les retirer
     --garder-multiples     ne supprime pas « Multiples d'un nombre »
*/

"use strict";
const fs = require("fs");
const { Pool } = require("pg");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const INVENTAIRE = ARGS.includes("--inventaire");
const GARDER_IND = ARGS.includes("--garder-indications");
const GARDER_MULT = ARGS.includes("--garder-multiples");
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
/* comparaison par mots entiers, tolérante au singulier/pluriel :
   « PGCD par décomposition » et « …décompositions » désignent la même famille. */
const sing = m => m.replace(/s$/, "");
function commencePar(nom, prefixe) {
  const a = cle(nom).split(" ").map(sing), b = cle(prefixe).split(" ").map(sing);
  return b.every((mot, i) => a[i] === mot);
}
const A_SUPPRIMER = "multiples d un nombre";
const FAMILLE_PGCD = "pgcd par decomposition";

/* Un énoncé « souffle » la décomposition s'il la donne ou la réclame. */
const INDICATIONS = [
  { nom: "décomposition fournie",      re: /\d+\s*=\s*\d+\s*(?:[²³^]|\*\*)?\s*×/ },
  { nom: "consigne de décomposer",     re: /d[ée]compos/i },
  { nom: "facteurs premiers cités",    re: /facteurs?\s+premiers?/i },
  { nom: "exposants soufflés",         re: /plus\s+petits?\s+exposants?/i },
];
const souffle = t => INDICATIONS.filter(i => i.re.test(String(t)));

const maj = (t, ch, def) => { const c = new Map();
  t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
  return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };

(async () => {
  if (!EXECUTE && !INVENTAIRE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, solution, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%rithm%' ORDER BY id`);
  const rows = brut.filter(r => cle(r.chapitre).includes("arithmetique"));
  if (!rows.length) {
    console.log("Chapitre « Arithmétique » introuvable.");
    console.log("Chapitres approchants :", [...new Set(brut.map(r => r.chapitre))].join(" | ") || "(aucun)");
    await pool.end(); return;
  }
  const CHAPITRE = maj(rows, "chapitre", "Arithmétique");
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

  if (INVENTAIRE) {
    console.log("\nUn énoncé par famille (pour caler le style des futurs exercices) :");
    [...groupes.values()].sort((a, b) => a.nom.localeCompare(b.nom, "fr")).forEach(g => {
      const e = g.items[0];
      console.log(`\n■ ${g.nom}  [${e.difficulty || "?"}] (${maj(g.items, "type", "?")})\n  ${String(e.content).replace(/\s+/g, " ").slice(0, 240)}`);
    });
    await pool.end(); return;
  }

  const aSupprimer = [];

  /* ── 1. SUPPRESSION DE « Multiples d'un nombre » ── */
  const cibles = [...groupes.values()].filter(g => commencePar(g.nom, A_SUPPRIMER));
  if (!cibles.length) console.log(`\n· Suppression sans objet : « ${A_SUPPRIMER} » introuvable.`);
  cibles.forEach(g => {
    if (GARDER_MULT) { console.log(`\n· « ${g.nom} » conservée (--garder-multiples).`); return; }
    console.log(`\n→ SUPPRESSION de « ${g.nom} » : ${g.items.length} exercice(s).`);
    aSupprimer.push(...g.items.map(i => i.id));
  });

  /* ── 2. NETTOYAGE DE « PGCD par décompositions » ── */
  const gp = [...groupes.values()].find(g => commencePar(g.nom, FAMILLE_PGCD));
  if (!gp) {
    console.log(`\n⚠ Famille « ${FAMILLE_PGCD} » introuvable — vérifiez son libellé dans l'inventaire ci-dessus.`);
  } else {
    const fautifs = gp.items.map(e => ({ e, motifs: souffle(e.content) })).filter(x => x.motifs.length);
    console.log(`\nFamille « ${gp.nom} » : ${gp.items.length} exercice(s), ${fautifs.length} avec indication.`);
    if (fautifs.length) {
      console.table(fautifs.map(x => ({ id: x.e.id, motif: x.motifs.map(m => m.nom).join(" + "),
        enonce: String(x.e.content).replace(/\s+/g, " ").slice(0, 80) })));
      if (GARDER_IND) {
        console.log("  Conservés (--garder-indications). À reformuler à la main si besoin.");
      } else {
        console.log("  → RETIRÉS : l'élève doit décomposer lui-même.");
        console.log("  Ils seront remplacés par les 100 exercices générés ensuite, sans indication.");
        aSupprimer.push(...fautifs.map(x => x.e.id));
      }
    } else {
      console.log("  ✔ Aucun énoncé ne souffle la décomposition.");
    }
  }

  console.log(`\nRésumé : ${aSupprimer.length} exercice(s) supprimé(s).`);
  console.log(`Le chapitre passerait de ${rows.length} à ${rows.length - aSupprimer.length} exercice(s).`);

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `arithmetique-avant-restructuration-${stamp}.json`;
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
