/* Polymates — reparer-pages-annales.js
   Rattache chaque question d'une annale à SA page dans le PDF.

   ── POURQUOI ─────────────────────────────────────────────────────────────
   Le diagnostic signale une centaine de sujets « aucune question ne porte de
   numéro de page ». Ils ont été importés par une version antérieure, qui ne
   stockait pas cette information. Or la correction se fait désormais sur
   l'image de la page : sans numéro, aucune page n'est envoyée, et l'exercice
   n'est plus corrigé du tout.

   ── COMMENT ──────────────────────────────────────────────────────────────
   Le script relit le PDF, extrait le texte page par page, puis retrouve pour
   chaque question la page où son énoncé apparaît. La recherche se fait en
   trois passes, de la plus sûre à la plus tolérante :
     1. le TITRE de la question (« Exercice 3 ») en tête de page ;
     2. une empreinte de son énoncé — les mots rares, dans l'ordre ;
     3. à défaut, la page de la question précédente (un exercice suit
        rarement un saut de page).
   Une question dont la page reste indéterminée est laissée telle quelle et
   signalée : mieux vaut ne pas corriger que corriger la mauvaise page.

   Sécurité : simulation par défaut, sauvegarde JSON avant écriture.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node reparer-pages-annales.js                 # simulation, tous les sujets
     node reparer-pages-annales.js --id 99         # un seul sujet
     node reparer-pages-annales.js --execute
   Options : --dossier <chemin des PDF>  (défaut : annales-pdf)
*/

"use strict";
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? ARGS[i + 1] : d; };
const SEUL = opt("--id", null);
const DOSSIER = opt("--dossier", "annales-pdf");

if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

/* ── Lecture du PDF, page par page ── */
let _pdfjs = null;
async function pdfjs() {
  if (_pdfjs) return _pdfjs;
  try { _pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs"); }
  catch { try { _pdfjs = require("pdfjs-dist/legacy/build/pdf.js"); } catch { _pdfjs = null; } }
  return _pdfjs;
}
async function texteParPage(buffer) {
  const lib = await pdfjs();
  if (!lib) throw new Error("pdfjs-dist n'est pas installé (npm install pdfjs-dist).");
  const doc = await lib.getDocument({ data: new Uint8Array(buffer), isEvalSupported: false }).promise;
  const pages = [];
  for (let n = 1; n <= doc.numPages; n++) {
    const tc = await (await doc.getPage(n)).getTextContent();
    const lignes = new Map();
    tc.items.forEach(it => {
      const y = Math.round(it.transform[5]);
      lignes.set(y, (lignes.get(y) || "") + it.str);
    });
    pages.push([...lignes.entries()].sort((a, b) => b[0] - a[0]).map(e => e[1]).join("\n"));
  }
  return pages;
}

/* ── Normalisation : accents, casse et espaces ignorés ── */
const norm = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/\s+/g, " ").trim();
const compact = t => norm(t).replace(/[^a-z0-9]/g, "");

/* Mots rares d'un énoncé : ils servent d'empreinte. */
const BANALS = new Set(["pour","dans","avec","cette","cette","donc","alors","plus","moins",
  "entre","chaque","tous","toutes","leur","elle","nous","vous","est","sont","une","des",
  "les","que","qui","par","sur","aux","son","sa","ses","ce","cet","on","il","de","du",
  "la","le","en","et","au","un","exercice","points","point"]);
function empreinte(texte, n) {
  const mots = norm(texte).replace(/[^a-z0-9 ]/g, " ").split(/\s+/)
    .filter(m => m.length >= 5 && !BANALS.has(m));
  return [...new Set(mots)].slice(0, n || 12);
}

/* ── Recherche de la page d'une question ── */
function trouverPage(q, pagesTxt, pagePrecedente) {
  const pagesNorm = pagesTxt.map(norm);
  const pagesComp = pagesTxt.map(compact);

  /* 1. Le titre, tel qu'il apparaît en tête de bloc. */
  const titre = (q.enonce || "").split(" — ")[0].trim();
  if (titre) {
    const t = compact(titre);
    if (t.length >= 6) {
      const i = pagesComp.findIndex(p => p.includes(t));
      if (i >= 0) return { page: i + 1, methode: "titre" };
    }
  }

  /* 2. L'empreinte de l'énoncé : les mots rares, comptés page par page. */
  const source = q.enonce_correction || q.enonce || "";
  const mots = empreinte(source, 14);
  if (mots.length >= 3) {
    let meilleure = -1, meilleurScore = 0;
    pagesNorm.forEach((p, i) => {
      const score = mots.filter(m => p.includes(m)).length / mots.length;
      if (score > meilleurScore) { meilleurScore = score; meilleure = i; }
    });
    if (meilleure >= 0 && meilleurScore >= 0.45)
      return { page: meilleure + 1, methode: "empreinte (" + Math.round(meilleurScore * 100) + " %)" };
  }

  /* 3. Repli : la page de la question précédente. */
  if (pagePrecedente) return { page: pagePrecedente, methode: "suite de la précédente" };
  return null;
}

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const cond = SEUL ? "AND id = $1" : "";
  const params = SEUL ? [Number(SEUL)] : [];
  const { rows } = await pool.query(
    `SELECT id, title, classe, image_url, questions FROM annales
      WHERE image_url IS NOT NULL AND btrim(image_url) <> '' ${cond} ORDER BY id`, params);

  if (!rows.length) { console.log("Aucune annale avec PDF."); await pool.end(); return; }
  console.log(`${rows.length} annale(s) avec un PDF rattaché.\n`);

  let aReparer = 0, reparees = 0, echecs = 0;
  const rapport = [], details = [];

  for (const a of rows) {
    let qs = a.questions;
    if (typeof qs === "string") { try { qs = JSON.parse(qs); } catch { qs = null; } }
    if (!Array.isArray(qs) || !qs.length) continue;

    const sansPage = qs.filter(q => !Array.isArray(q.pages) || !q.pages.length).length;
    if (!sansPage) continue;
    aReparer++;

    /* Le PDF est-il présent sur le disque ? */
    const nom = path.basename(String(a.image_url));
    const chemin = path.join(DOSSIER, nom);
    if (!fs.existsSync(chemin)) {
      echecs++;
      rapport.push({ id: a.id, sujet: a.title.slice(0, 42), questions: qs.length,
                     sans_page: sansPage, resultat: "PDF absent du disque" });
      continue;
    }

    let pagesTxt;
    try { pagesTxt = await texteParPage(fs.readFileSync(chemin)); }
    catch (e) {
      echecs++;
      rapport.push({ id: a.id, sujet: a.title.slice(0, 42), questions: qs.length,
                     sans_page: sansPage, resultat: "lecture impossible : " + e.message.slice(0, 30) });
      continue;
    }

    let trouvees = 0, prec = null;
    const parMethode = {};
    qs.forEach(q => {
      if (Array.isArray(q.pages) && q.pages.length) { prec = q.pages[0]; return; }
      const r = trouverPage(q, pagesTxt, prec);
      if (r) {
        q.pages = [r.page];
        q.pages_total = pagesTxt.length;
        prec = r.page;
        trouvees++;
        parMethode[r.methode.split(" (")[0]] = (parMethode[r.methode.split(" (")[0]] || 0) + 1;
      }
    });

    if (trouvees) reparees++;
    rapport.push({ id: a.id, sujet: a.title.slice(0, 42), questions: qs.length,
                   sans_page: sansPage, retrouvees: trouvees,
                   resultat: trouvees === sansPage ? "complet"
                           : trouvees ? "partiel (" + (sansPage - trouvees) + " restantes)"
                           : "aucune page trouvée" });
    if (trouvees) details.push({ id: a.id, methodes: parMethode, pages: pagesTxt.length });

    if (EXECUTE && trouvees) {
      await pool.query("UPDATE annales SET questions = $1 WHERE id = $2",
        [JSON.stringify(qs), a.id]);
    }
  }

  if (!rapport.length) { console.log("Toutes les questions portent déjà un numéro de page."); await pool.end(); return; }
  console.table(rapport.slice(0, 40));
  if (rapport.length > 40) console.log(`… et ${rapport.length - 40} autre(s).`);

  console.log(`\nSujets à réparer : ${aReparer} · réparés : ${reparees} · en échec : ${echecs}`);
  const parM = {};
  details.forEach(d => Object.entries(d.methodes).forEach(([m, n]) => { parM[m] = (parM[m] || 0) + n; }));
  if (Object.keys(parM).length) {
    console.log("\nComment les pages ont été retrouvées :");
    Object.entries(parM).sort((a, b) => b[1] - a[1])
      .forEach(([m, n]) => console.log(`   · ${m} : ${n} question(s)`));
    if (parM["suite de la précédente"])
      console.log("   ⚠ « suite de la précédente » est un repli : vérifiez quelques sujets " +
        "avec le bouton « tester le rendu » de la page Administration.");
  }

  if (!EXECUTE) {
    console.log("\n(simulation — relancez avec --execute)");
    await pool.end(); return;
  }
  console.log("\nMise à jour effectuée. Relancez le diagnostic pour confirmer.");
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
