/* MathBase — restructurer-aires.js
   Chapitre « Aires » : nettoyage des familles, et suppression du chapitre
   « Périmètres et aires », redondant.

   ⚠ À LANCER APRÈS patch-contenu.js, qui déplace « Aires » dans GÉOMÉTRIE et
   retire « Périmètres et aires » de la structure. Ce rattachement vit dans
   contenu.js, pas en base : ce script-ci ne s'occupe que des exercices.

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. Inventorie le chapitre « Aires » ET le chapitre « Périmètres et aires ».
   2. SUPPRIME la famille « Convertir des aires ».
   3. RENOMME les familles d'aires pour y intégrer le périmètre :
        « Aire d'un rectangle » → « Aire et périmètre d'un rectangle »
      La règle ne s'applique qu'aux familles dont le nom commence par
      « Aire … ». Les familles à nom narratif (les problèmes) sont laissées
      telles quelles et signalées : « Aire et périmètre du carrelage » n'aurait
      aucun sens. Dites-le moi si vous voulez les renommer aussi.
   4. SUPPRIME tous les exercices du chapitre « Périmètres et aires ».
      L'option --deplacer-perimetres les rattache au chapitre « Aires »
      plutôt que de les effacer, si vous préférez les récupérer.

   Les deux nouvelles familles — « Aire et périmètre d'un triangle quelconque »
   et « Aire et périmètre d'un cercle » — ne sont pas créées ici : elles
   naîtront avec les 100 exercices que le générateur y insérera.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node restructurer-aires.js --inventaire   # ne fait que lister
     node restructurer-aires.js                # simulation
     node restructurer-aires.js --execute      # applique (+ sauvegarde)
   Options :
     --deplacer-perimetres   déplace au lieu de supprimer
     --garder-convertir      ne supprime pas « Convertir des aires »
*/

"use strict";
const fs = require("fs");
const { Pool } = require("pg");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const INVENTAIRE = ARGS.includes("--inventaire");
const DEPLACER = ARGS.includes("--deplacer-perimetres");
const GARDER_CONV = ARGS.includes("--garder-convertir");
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const sing = m => m.replace(/s$/, "");
function commencePar(nom, prefixe) {
  const a = cle(nom).split(" ").map(sing), b = cle(prefixe).split(" ").map(sing);
  return b.every((mot, i) => a[i] === mot);
}
const CHAP_AIRES = "aires";
const CHAP_PERIM = "perimetres et aires";
const A_SUPPRIMER = "convertir des aires";

const maj = (t, ch, def) => { const c = new Map();
  t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
  return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };

/* « Aire d'un rectangle » → « Aire et périmètre d'un rectangle ».
   Seul le SINGULIER est traité : « Aires composées » deviendrait
   « Aire et périmètre composées », qui ne veut rien dire. Les pluriels sont
   signalés pour que vous choisissiez vous-même la formulation. */
function ajoutePerimetre(nom) {
  if (/p[ée]rim[èe]tre/i.test(nom)) return null;                 // déjà fait
  const m = String(nom).match(/^Aire(\s.*)$/i);                  // « Aire » suivi d'un espace
  if (!m) return null;
  return `Aire et périmètre${m[1]}`;
}
const estPluriel = nom => /^Aires\b/i.test(String(nom)) && !/p[ée]rim[èe]tre/i.test(nom);

function tableau(items) {
  const groupes = new Map();
  items.forEach(r => { const k = cle(r.famille) || "(sans famille)";
    if (!groupes.has(k)) groupes.set(k, { nom: r.famille || "(sans famille)", items: [] });
    groupes.get(k).items.push(r); });
  return groupes;
}

(async () => {
  if (!EXECUTE && !INVENTAIRE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, solution, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%aire%' ORDER BY id`);
  const aires = brut.filter(r => cle(r.chapitre) === CHAP_AIRES);
  const perim = brut.filter(r => cle(r.chapitre) === CHAP_PERIM);

  if (!aires.length && !perim.length) {
    console.log("Aucun exercice dans « Aires » ni « Périmètres et aires ».");
    console.log("Chapitres approchants :", [...new Set(brut.map(r => r.chapitre))].join(" | ") || "(aucun)");
    await pool.end(); return;
  }
  const CHAPITRE = aires.length ? maj(aires, "chapitre", "Aires") : "Aires";
  console.log(`Chapitre « ${CHAPITRE} » : ${aires.length} exercice(s).`);
  console.log(`Chapitre « Périmètres et aires » : ${perim.length} exercice(s).\n`);

  const gAires = tableau(aires), gPerim = tableau(perim);
  const inv = g => [...g.values()].map(x => {
    const d = { Facile: 0, Moyen: 0, Difficile: 0 };
    x.items.forEach(i => { if (d[i.difficulty] !== undefined) d[i.difficulty]++; });
    return { famille: x.nom, n: x.items.length, F: d.Facile, M: d.Moyen, D: d.Difficile,
             type: maj(x.items, "type", ""), classe: maj(x.items, "classe", "") };
  }).sort((a, b) => a.famille.localeCompare(b.famille, "fr"));

  console.log("Familles du chapitre « Aires » :");
  console.table(inv(gAires));
  if (perim.length) { console.log("Familles du chapitre « Périmètres et aires » (à supprimer) :"); console.table(inv(gPerim)); }

  if (INVENTAIRE) {
    console.log("\nUn énoncé par famille du chapitre « Aires » :");
    [...gAires.values()].sort((a, b) => a.nom.localeCompare(b.nom, "fr")).forEach(x => {
      const e = x.items[0];
      console.log(`\n■ ${x.nom}  [${e.difficulty || "?"}] (${maj(x.items, "type", "?")})\n  ${String(e.content).replace(/\s+/g, " ").slice(0, 240)}`);
      console.log(`  → ${String(e.solution || "").replace(/\s+/g, " ").slice(0, 180)}`);
    });
    if (perim.length) {
      console.log("\n\nUn énoncé par famille de « Périmètres et aires » (pour ne rien perdre d'utile) :");
      [...gPerim.values()].sort((a, b) => a.nom.localeCompare(b.nom, "fr")).forEach(x => {
        const e = x.items[0];
        console.log(`\n□ ${x.nom}  [${e.difficulty || "?"}]\n  ${String(e.content).replace(/\s+/g, " ").slice(0, 200)}`);
      });
    }
    await pool.end(); return;
  }

  const aSupprimer = [], renommages = [], intouchees = [];

  /* ── 2. suppression de « Convertir des aires » ── */
  const conv = [...gAires.values()].filter(x => commencePar(x.nom, A_SUPPRIMER));
  if (!conv.length) console.log(`\n· Suppression sans objet : « ${A_SUPPRIMER} » introuvable.`);
  conv.forEach(x => {
    if (GARDER_CONV) { console.log(`\n· « ${x.nom} » conservée (--garder-convertir).`); return; }
    console.log(`\n→ SUPPRESSION de « ${x.nom} » : ${x.items.length} exercice(s).`);
    aSupprimer.push(...x.items.map(i => i.id));
  });

  /* ── 3. ajout de « et périmètre » ── */
  console.log("");
  [...gAires.values()].forEach(x => {
    if (conv.some(c => c.nom === x.nom) && !GARDER_CONV) return;   // supprimée
    const neuf = ajoutePerimetre(x.nom);
    if (neuf) { console.log(`→ « ${x.nom} » devient « ${neuf} » (${x.items.length} exercice(s)).`);
                renommages.push({ ids: x.items.map(i => i.id), vers: neuf, source: x.nom }); }
    else intouchees.push(x.nom + (estPluriel(x.nom) ? "   ← au pluriel : formulation à choisir" : ""));
  });
  if (intouchees.length) {
    console.log(`\n⚠ Familles NON renommées (nom narratif ou déjà à jour) :`);
    intouchees.forEach(f => console.log(`   - ${f}`));
    console.log(`   « Aire et périmètre du carrelage » n'aurait pas de sens : dites-le moi si`);
    console.log(`   vous voulez malgré tout les renommer.`);
  }

  /* ── 4. chapitre « Périmètres et aires » ── */
  if (perim.length) {
    if (DEPLACER) console.log(`\n→ ${perim.length} exercice(s) de « Périmètres et aires » RATTACHÉS au chapitre « ${CHAPITRE} ».`);
    else { console.log(`\n→ SUPPRESSION du chapitre « Périmètres et aires » : ${perim.length} exercice(s).`);
           aSupprimer.push(...perim.map(r => r.id)); }
  }

  console.log(`\nRésumé : ${aSupprimer.length} exercice(s) supprimé(s) · ${renommages.reduce((s, r) => s + r.ids.length, 0)} renommé(s)`
    + (DEPLACER && perim.length ? ` · ${perim.length} déplacé(s)` : ""));
  console.log(`\nLes familles « Aire et périmètre d'un triangle quelconque » et`);
  console.log(`« Aire et périmètre d'un cercle » seront créées par generer-aires.js.`);

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nomF = `aires-avant-restructuration-${stamp}.json`;
  fs.writeFileSync(nomF, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde des deux chapitres : ${nomF}`);
  console.log("  (elle contient les exercices supprimés : l'opération est réversible.)");

  if (DEPLACER && perim.length) {
    const res = await pool.query("UPDATE exercises SET chapitre = $1 WHERE id = ANY($2)",
      [CHAPITRE, perim.map(r => r.id)]);
    console.log(`${res.rowCount} exercice(s) rattachés à « ${CHAPITRE} ».`);
  }
  if (aSupprimer.length) {
    const res = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [aSupprimer]);
    console.log(`${res.rowCount} exercice(s) supprimé(s).`);
  }
  for (const r of renommages) {
    const res = await pool.query("UPDATE exercises SET famille = $1 WHERE id = ANY($2)", [r.vers, r.ids]);
    console.log(`${res.rowCount} exercice(s) : « ${r.source} » → « ${r.vers} ».`);
  }
  /* renumérotation des titres dans les familles renommées */
  for (const r of renommages) {
    const { rows: ex } = await pool.query(
      "SELECT id FROM exercises WHERE chapitre = $1 AND famille = $2 ORDER BY id", [CHAPITRE, r.vers]);
    let n = 0;
    for (const e of ex) { n++; await pool.query("UPDATE exercises SET title = $1 WHERE id = $2", [`${r.vers} ${n}`, e.id]); }
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAPITRE]);
  console.log("\nFamilles après :"); console.table(apres);
  const { rows: reste } = await pool.query(
    `SELECT count(*)::int AS n FROM exercises WHERE chapitre ILIKE 'Périmètres et aires'`);
  console.log(`Exercices restants dans « Périmètres et aires » : ${reste[0].n}`);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
