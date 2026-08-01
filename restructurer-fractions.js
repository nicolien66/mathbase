/* MathBase — restructurer-fractions.js
   Chapitre « Fractions » : suppressions, renommage et fusions de familles.

   ── OPÉRATIONS DEMANDÉES ─────────────────────────────────────────────────
   1. SUPPRIMER  « Comparer à l'aide de… »
   2. SUPPRIMER  « Lire une fraction »
   3. SUPPRIMER  « Comparer avec le même numérateur »
   4. RENOMMER   « Entier moins une fraction » → « Opérations entiers et fractions »
   5. FUSIONNER  les 3 familles de comparaison restantes → « Comparaison »
   6. FUSIONNER  « Différence de fractions » + « Soustraire deux fractions »
                 → « Différence de fractions »

   ── POURQUOI LE SCRIPT NE DEVINE PAS L'ÉTAPE 5 ───────────────────────────
   Deux des familles supprimées contiennent le mot « comparer ». Après les
   suppressions, le script liste les familles de comparaison encore présentes
   et les fusionne SEULEMENT s'il en trouve exactement 3. Sinon il s'arrête et
   affiche ce qu'il a trouvé : à vous de confirmer avec --familles-comparaison
   "nom1" "nom2" "nom3". C'est volontaire : une fusion mal ciblée est bien plus
   coûteuse à défaire qu'un aller-retour.

   Les comparaisons de libellés ignorent casse, accents et ponctuation ; il
   suffit donc que le nom soit approximativement celui attendu.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node restructurer-fractions.js --inventaire   # ne fait que lister
     node restructurer-fractions.js                # simulation des opérations
     node restructurer-fractions.js --execute      # applique (+ sauvegarde JSON)
   Options :
     --familles-comparaison "A" "B" "C"   désigne explicitement les familles à fusionner
     --garder-supprimes                   ne supprime rien, déplace vers « À trier »
*/

"use strict";
const fs = require("fs");
const { Pool } = require("pg");

const ARGS       = process.argv.slice(2);
const EXECUTE    = ARGS.includes("--execute");
const INVENTAIRE = ARGS.includes("--inventaire");
const GARDER     = ARGS.includes("--garder-supprimes");
function listeApres(drapeau) {
  const i = ARGS.indexOf(drapeau); if (i < 0) return null;
  const out = []; for (let j = i + 1; j < ARGS.length && !ARGS[j].startsWith("--"); j++) out.push(ARGS[j]);
  return out.length ? out : null;
}
const COMPARAISON_FORCEE = listeApres("--familles-comparaison");

if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
/* Reconnaissance par MOTS ENTIERS : « comparer une fraction a » ne doit pas
   attraper « comparer une fraction avec un entier » (« a » n'est pas « avec »). */
function commencePar(nom, prefixe) {
  const a = cle(nom).split(" "), b = cle(prefixe).split(" ");
  return b.every((mot, i) => a[i] === mot);
}

/* préfixes des familles à supprimer */
const A_SUPPRIMER = [
  "comparer a l aide de",
  "lire une fraction",
  "comparer avec le meme numerateur",
  "comparer une fraction a",
];
const RENOMMAGE = { depuis: "entier moins une fraction", vers: "Opérations entiers et fractions" };
const FUSION_DIFF = { depuis: ["difference de fractions", "soustraire deux fractions"],
                      vers: "Différence de fractions" };
/* « fusionner les 3 familles de comparaison » et « renommer comparer avec un
   dénominateur commun en comparer » désignent la même famille d'arrivée : toutes
   les familles de comparaison encore présentes après les suppressions y sont
   regroupées. Surchargeable par --cible-comparaison "Autre nom". */
const CIBLE_COMPARAISON = (listeApres("--cible-comparaison") || ["Comparer"])[0];

const maj = (t, ch, def) => { const c = new Map();
  t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
  return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };

(async () => {
  const { rows: brut } = await pool.query(
    `SELECT id, title, content, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%raction%' ORDER BY id`);
  const rows = brut.filter(r => cle(r.chapitre).includes("fraction"));
  if (!rows.length) { console.log("Aucun exercice dans un chapitre « Fractions »."); await pool.end(); return; }
  const CHAPITRE = maj(rows, "chapitre", "Fractions");
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
      console.log(`\n■ ${g.nom}  [${e.difficulty || "?"}]\n  ${String(e.content).replace(/\s+/g, " ").slice(0, 220)}`);
    });
    await pool.end(); return;
  }

  const plan = { supprimer: [], renommer: [], fusionner: [] };

  /* ── 1-3. SUPPRESSIONS ── */
  const supprimes = new Set();
  A_SUPPRIMER.forEach(pref => {
    const t = [...groupes.values()].filter(g => commencePar(g.nom, pref));
    if (!t.length) { console.log(`\n· Suppression sans objet : aucune famille ne commence par « ${pref} ».`); return; }
    t.forEach(g => {
      console.log(`\n→ SUPPRESSION de « ${g.nom} » : ${g.items.length} exercice(s)${GARDER ? " (déplacés vers « À trier »)" : ""}.`);
      plan.supprimer.push({ nom: g.nom, ids: g.items.map(i => i.id) });
      supprimes.add(cle(g.nom));
    });
  });

  /* ── 4. RENOMMAGE ── */
  {
    const t = [...groupes.values()].filter(g => !supprimes.has(cle(g.nom)) && commencePar(g.nom, RENOMMAGE.depuis));
    if (!t.length) console.log(`\n· Renommage sans objet : « ${RENOMMAGE.depuis} » introuvable.`);
    t.forEach(g => {
      console.log(`\n→ « ${g.nom} » devient « ${RENOMMAGE.vers} » (${g.items.length} exercice(s)).`);
      plan.renommer.push({ ids: g.items.map(i => i.id), vers: RENOMMAGE.vers, source: g.nom });
    });
  }

  /* ── 5. FUSION DES COMPARAISONS ── */
  let candidates;
  if (COMPARAISON_FORCEE) {
    const voulues = COMPARAISON_FORCEE.map(cle);
    candidates = [...groupes.values()].filter(g => voulues.includes(cle(g.nom)));
    const absentes = COMPARAISON_FORCEE.filter(n => !candidates.some(g => cle(g.nom) === cle(n)));
    if (absentes.length) { console.error(`\n✗ Familles introuvables : ${absentes.join(" | ")}`); await pool.end(); process.exit(1); }
  } else {
    candidates = [...groupes.values()].filter(g =>
      !supprimes.has(cle(g.nom)) && /compar/.test(cle(g.nom)) && cle(g.nom) !== cle(CIBLE_COMPARAISON));
  }
  console.log(`\nFamilles de comparaison détectées (${candidates.length}) :`);
  candidates.forEach(g => console.log(`   - ${g.nom} (${g.items.length} exercice(s))`));
  if (!candidates.length) {
    console.log("· Aucune famille de comparaison à regrouper.");
  } else if (!COMPARAISON_FORCEE && candidates.length > 4) {
    console.error(`\n✗ ARRÊT : ${candidates.length} familles de comparaison, c'est plus que prévu.`);
    console.error(`  Désignez-les explicitement : --familles-comparaison "nom1" "nom2" …`);
    await pool.end(); process.exit(1);
  }
  candidates.forEach(g => plan.fusionner.push({ ids: g.items.map(i => i.id), vers: CIBLE_COMPARAISON, source: g.nom }));
  if (candidates.length) console.log(`→ Regroupées dans « ${CIBLE_COMPARAISON} ».`);

  /* ── 6. FUSION DES DIFFÉRENCES ── */
  {
    const t = [...groupes.values()].filter(g =>
      !supprimes.has(cle(g.nom)) && FUSION_DIFF.depuis.some(p => commencePar(g.nom, p)));
    if (t.length < 2) console.log(`\n· Fusion « différence » : ${t.length} famille(s) trouvée(s) seulement.`);
    t.forEach(g => {
      if (cle(g.nom) !== cle(FUSION_DIFF.vers))
        console.log(`\n→ « ${g.nom} » rejoint « ${FUSION_DIFF.vers} » (${g.items.length} exercice(s)).`);
      plan.fusionner.push({ ids: g.items.map(i => i.id), vers: FUSION_DIFF.vers, source: g.nom });
    });
  }

  /* ── CONTRÔLE : indications de dénominateur dans la famille « Comparer » ── */
  const INDICE = /d[ée]nominateur\s+(commun\s+)?\d+|au\s+d[ée]nominateur|m[êe]me\s+d[ée]nominateur|r[ée]dui|mettre\s+au|multiplie[rz]?\s+par\s+\d+/i;
  const suspects = candidates.flatMap(g => g.items
    .filter(i => INDICE.test(String(i.content)))
    .map(i => ({ id: i.id, famille: g.nom, enonce: String(i.content).replace(/\s+/g, " ").slice(0, 90) })));
  if (suspects.length) {
    console.log(`\n⚠ ${suspects.length} énoncé(s) de la future famille « ${CIBLE_COMPARAISON} » indiquent le dénominateur à utiliser :`);
    console.table(suspects);
    console.log("  Le script ne les réécrit pas (une reformulation automatique d'énoncé est trop risquée).");
    console.log("  Les exercices que je générerai ensuite n'en donneront aucune : « Compare 3/4 et 5/6. » et rien de plus.");
  } else if (candidates.length) {
    console.log(`\n✔ Aucun énoncé de « ${CIBLE_COMPARAISON} » n'indique le dénominateur à utiliser.`);
  }

  /* ── RÉSUMÉ ── */
  const nSup = plan.supprimer.reduce((s, x) => s + x.ids.length, 0);
  const nFus = plan.fusionner.reduce((s, x) => s + x.ids.length, 0);
  const nRen = plan.renommer.reduce((s, x) => s + x.ids.length, 0);
  console.log(`\nRésumé : ${nSup} exercice(s) supprimé(s) · ${nRen} renommé(s) · ${nFus} fusionné(s).`);
  console.log(`Le chapitre passerait de ${rows.length} à ${rows.length - (GARDER ? 0 : nSup)} exercice(s).`);

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  /* ── ÉCRITURE ── */
  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `fractions-avant-restructuration-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde intégrale du chapitre : ${nom}`);
  console.log("  (elle contient les exercices supprimés : la suppression est réversible.)");

  for (const s of plan.supprimer) {
    if (GARDER) {
      await pool.query("UPDATE exercises SET famille = 'À trier' WHERE id = ANY($1)", [s.ids]);
      console.log(`${s.ids.length} exercice(s) de « ${s.nom} » déplacés vers « À trier ».`);
    } else {
      const r = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [s.ids]);
      console.log(`${r.rowCount} exercice(s) supprimé(s) : « ${s.nom} ».`);
    }
  }
  for (const r of plan.renommer) {
    const res = await pool.query("UPDATE exercises SET famille = $1 WHERE id = ANY($2)", [r.vers, r.ids]);
    console.log(`${res.rowCount} exercice(s) : « ${r.source} » → « ${r.vers} ».`);
  }
  for (const f of plan.fusionner) {
    const res = await pool.query("UPDATE exercises SET famille = $1 WHERE id = ANY($2)", [f.vers, f.ids]);
    console.log(`${res.rowCount} exercice(s) : « ${f.source} » → « ${f.vers} ».`);
  }

  /* renumérotation des titres dans les familles touchées */
  const touchees = [...new Set([...plan.renommer, ...plan.fusionner].map(x => x.vers))];
  for (const fam of touchees) {
    const { rows: ex } = await pool.query(
      "SELECT id FROM exercises WHERE chapitre = $1 AND famille = $2 ORDER BY id", [CHAPITRE, fam]);
    let n = 0;
    for (const e of ex) { n++; await pool.query("UPDATE exercises SET title = $1 WHERE id = $2", [`${fam} ${n}`, e.id]); }
    console.log(`« ${fam} » : ${n} titre(s) renumérotés.`);
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAPITRE]);
  console.log("\nFamilles après restructuration :");
  console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
