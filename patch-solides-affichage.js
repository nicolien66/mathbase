/* MathBase — patch-solides-affichage.js
   Branche l'affichage des figures de SOLIDES dans l'application.

   Les exercices du chapitre « Solides » portent un champ
       interactif = { widget: "solide", type: "cube" }
   Il ne s'agit pas d'un plateau : l'élève ne construit rien, il regarde une
   figure et répond dans son brouillon. La correction reste donc celle de
   l'IA, contrairement aux exercices sur quadrillage.

   Trois retouches :
   1. app.html   — charge solides.js avant script.js.
   2. script.js  — au CATALOGUE, la figure remplace l'énoncé, comme pour le
                   quadrillage ; en SÉANCE, elle s'affiche au-dessus du
                   brouillon, qui reste disponible pour répondre.
   3. rien côté serveur : la colonne `interactif` existe déjà et la route
      /exercises fait un SELECT *.

   solides.js doit être déposé à côté de script.js.

   ── USAGE ────────────────────────────────────────────────────────────────
     node patch-solides-affichage.js              # simulation
     node patch-solides-affichage.js --execute    # applique
   Option : --dossier "chemin/public"
*/

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const iD = ARGS.indexOf("--dossier");
const DOSSIER = iD >= 0 && ARGS[iD + 1] ? ARGS[iD + 1] : null;

function cherche(racine, cible, prof = 0) {
  if (prof > 4) return [];
  let out = [];
  let ents; try { ents = fs.readdirSync(racine, { withFileTypes: true }); } catch (e) { return []; }
  for (const e of ents) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    const p = path.join(racine, e.name);
    if (e.isFile() && e.name === cible) out.push(p);
    else if (e.isDirectory()) out = out.concat(cherche(p, cible, prof + 1));
  }
  return out;
}
function unique(nom) {
  if (DOSSIER) { const p = path.join(DOSSIER, nom); return fs.existsSync(p) ? p : null; }
  const t = cherche(process.cwd(), nom);
  if (t.length === 1) return t[0];
  if (t.length > 1) {
    console.error(`✗ Plusieurs ${nom} — précisez avec --dossier :`);
    t.forEach(f => console.error("   " + f)); process.exit(1);
  }
  return null;
}

const fApp = unique("app.html"), fScript = unique("script.js");
if (!fApp || !fScript) {
  console.error("✗ app.html ou script.js introuvable.");
  console.error(`  Lancez depuis le dossier du projet, ou passez --dossier "chemin".`);
  process.exit(1);
}
console.log(`app.html  : ${fApp}`);
console.log(`script.js : ${fScript}\n`);
const dossierFront = path.dirname(fApp);
if (!fs.existsSync(path.join(dossierFront, "solides.js")))
  console.log(`⚠ solides.js absent de ${dossierFront} — déposez-le avant d'appliquer.\n`);

if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");
const modifs = [];

/* ═══ 1. app.html ═══ */
{
  const src = fs.readFileSync(fApp, "utf8");
  if (/src=["']solides\.js["']/.test(src)) console.log("· app.html : solides.js déjà chargé.");
  else {
    const ancre = `<script src="script.js"></script>`;
    if (!src.includes(ancre)) { console.error("✗ app.html : balise script.js introuvable."); process.exit(1); }
    modifs.push({ f: fApp, avant: src,
      apres: src.replace(ancre, `<script src="solides.js"></script>\n` + ancre),
      quoi: "chargement de solides.js" });
  }
}

/* ═══ 2. script.js ═══ */
{
  const src = fs.readFileSync(fScript, "utf8");
  if (src.includes("MB_SOLIDES")) console.log("· script.js : figures de solides déjà branchées.");
  else {
    if (!src.includes("function apercuInteractif")) {
      console.error("✗ script.js : patch-interactif.js n'a pas été appliqué.");
      console.error("  Lancez-le d'abord : node patch-interactif.js --execute");
      process.exit(1);
    }
    /* 2a — catalogue : on greffe la figure de solide sur le même point d'entrée */
    const a1 = `function apercuInteractif(ex) {`;
    const bloc1 = `/* Figures de SOLIDES : une image, pas un plateau. L'élève répond dans son
   brouillon et la correction reste celle de l'IA. */
function litSolide(ex) {
  let p = ex && ex.interactif;
  if (!p) return null;
  if (typeof p === "string") { try { p = JSON.parse(p); } catch (e) { return null; } }
  return (p && p.widget === "solide" && window.MB_SOLIDES) ? p : null;
}

/* place la figure dans la modale, à la place de l'énoncé */
function apercuSolide(ex) {
  const params = litSolide(ex);
  if (!params) return false;
  const contenu = document.getElementById("modal-content");
  if (!contenu) return false;
  let cible = null;
  contenu.querySelectorAll(".modal-section").forEach(sec => {
    const lab = sec.querySelector(".modal-section-label");
    if (lab && lab.textContent.trim().toLowerCase().indexOf("nonc") >= 0) cible = sec;
  });
  const boite = document.createElement("div");
  if (cible) {
    const lab = cible.querySelector(".modal-section-label");
    if (lab) lab.textContent = "Figure";
    const txt = cible.querySelector(".modal-section-text");
    if (txt) txt.remove();
    cible.appendChild(boite);
  } else {
    const b = document.createElement("div");
    b.className = "modal-section";
    b.innerHTML = '<div class="modal-section-label">Figure</div>';
    b.appendChild(boite);
    contenu.appendChild(b);
  }
  MB_SOLIDES.installer(params, boite);
  return true;
}

function apercuInteractif(ex) {
  if (apercuSolide(ex)) return;`;
    if (!src.includes(a1)) { console.error("✗ script.js : apercuInteractif() introuvable."); process.exit(1); }
    let out = src.replace(a1, bloc1);

    /* 2b — séance : la figure au-dessus du brouillon, qui reste utilisable */
    const a2 = `function plateauInteractif(ex, hist) {`;
    if (!out.includes(a2)) { console.error("✗ script.js : plateauInteractif() introuvable."); process.exit(1); }
    out = out.replace(a2, `function plateauInteractif(ex, hist) {
  /* Solide : on affiche la figure au-dessus du brouillon, sans masquer
     celui-ci — c'est là que l'élève rédige sa réponse. */
  const ancienS = document.getElementById("mbs-seance");
  if (ancienS) ancienS.remove();
  const ps = litSolide(ex);
  if (ps) {
    const zone = document.getElementById("page-answer");
    const ta = document.getElementById("session-answer");
    if (ta) ta.style.display = "";
    const boite = document.createElement("div");
    boite.id = "mbs-seance";
    boite.style.marginBottom = "0.8rem";
    zone.insertBefore(boite, zone.firstChild);
    MB_SOLIDES.installer(ps, boite);
    return;
  }
`);
    modifs.push({ f: fScript, avant: src, apres: out,
                  quoi: "figure de solide au catalogue et en séance" });
  }
}

/* ═══ CONTRÔLES ═══ */
if (!modifs.length) { console.log("\nRien à faire : l'affichage est déjà branché."); process.exit(0); }
console.log("Modifications prévues :");
modifs.forEach(m => console.log(`   → ${path.basename(m.f)} : ${m.quoi}`));
let souci = 0;
for (const m of modifs) {
  if (!m.f.endsWith(".js")) continue;
  try { new vm.Script(m.apres); }
  catch (e) { console.error(`\n✗ ${path.basename(m.f)} : JavaScript invalide — ${e.message}`); souci++; }
}
if (souci) { console.error("\nAucune modification écrite."); process.exit(1); }
console.log("\n✔ Les fichiers obtenus sont syntaxiquement valides.");
modifs.forEach(m => console.log(`   ${path.basename(m.f)} : ${m.avant.length} → ${m.apres.length} caractères`));
if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); process.exit(0); }

const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
modifs.forEach(m => {
  fs.writeFileSync(`${m.f}.avant-solides-${stamp}`, m.avant, "utf8");
  fs.writeFileSync(m.f, m.apres, "utf8");
  console.log(`${path.basename(m.f)} mis à jour (sauvegarde : ${path.basename(m.f)}.avant-solides-${stamp}).`);
});
console.log("\nPoussez sur GitHub, puis rechargez la page avec Ctrl+F5.");
