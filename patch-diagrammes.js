/* MathBase — patch-diagrammes.js
   Branche le widget des DIAGRAMMES dans l'application.

   Deux usages coexistent dans le même chapitre, distingués par la présence
   d'un champ `reponse` dans le paramétrage :

     Analyse de données — le diagramme est TRACÉ, l'élève le lit et répond
       dans son brouillon. Correction par l'IA, comme un exercice ordinaire.
     Construction       — le plateau est VIDE, l'élève le remplit. Correction
       LOCALE et immédiate : la réponse attendue est connue, la comparaison
       est exacte, aucun appel réseau n'est nécessaire.

   Au catalogue, la lecture remplace l'énoncé par le diagramme ; la
   construction l'ajoute SOUS l'énoncé, qui porte la situation à représenter
   et ne peut donc pas disparaître.

   PRÉREQUIS : diagrammes.js dans public/, et patch-interactif.js appliqué.

   USAGE :
     node patch-diagrammes.js              # simulation
     node patch-diagrammes.js --execute
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

function cherche(r, c, p) {
  p = p || 0;
  if (p > 4) return [];
  let o = [], e;
  try { e = fs.readdirSync(r, { withFileTypes: true }); } catch (x) { return []; }
  for (const t of e) {
    if (t.name === "node_modules" || t.name.startsWith(".")) continue;
    const q = path.join(r, t.name);
    if (t.isFile() && t.name === c) o.push(q);
    else if (t.isDirectory()) o = o.concat(cherche(q, c, p + 1));
  }
  return o;
}
function unique(nom) {
  if (DOSSIER) { const p = path.join(DOSSIER, nom); return fs.existsSync(p) ? p : null; }
  const t = cherche(process.cwd(), nom);
  if (t.length === 1) return t[0];
  if (t.length > 1) {
    console.error("\u2717 Plusieurs " + nom + " \u2014 pr\u00e9cisez avec --dossier :");
    t.forEach(f => console.error("   " + f)); process.exit(1);
  }
  return null;
}

const fApp = unique("app.html"), fScript = unique("script.js");
if (!fApp || !fScript) {
  console.error("\u2717 app.html ou script.js introuvable.");
  console.error("  Lancez depuis le dossier du projet, ou passez --dossier \"chemin\".");
  process.exit(1);
}
console.log("app.html  : " + fApp);
console.log("script.js : " + fScript + "\n");
const dossierFront = path.dirname(fApp);
if (!fs.existsSync(path.join(dossierFront, "diagrammes.js")))
  console.log("\u26a0 diagrammes.js absent de " + dossierFront + " \u2014 d\u00e9posez-le avant d'appliquer.\n");
if (!EXECUTE) console.log("=== SIMULATION \u2014 ajoutez --execute pour appliquer ===\n");
const modifs = [];

/* 1. app.html */
{
  const src = fs.readFileSync(fApp, "utf8");
  if (/src=["']diagrammes\.js["']/.test(src)) console.log("\u00b7 app.html : diagrammes.js d\u00e9j\u00e0 charg\u00e9.");
  else {
    const ancre = '<script src="script.js"></script>';
    if (!src.includes(ancre)) { console.error("\u2717 app.html : balise script.js introuvable."); process.exit(1); }
    modifs.push({ f: fApp, avant: src,
      apres: src.replace(ancre, '<script src="diagrammes.js"></script>\n' + ancre),
      quoi: "chargement de diagrammes.js" });
  }
}

/* 2. script.js */
{
  const src = fs.readFileSync(fScript, "utf8");
  if (src.includes("MB_DIAGRAMME")) console.log("\u00b7 script.js : diagrammes d\u00e9j\u00e0 branch\u00e9s.");
  else {
    if (!src.includes("function apercuInteractif")) {
      console.error("\u2717 script.js : patch-interactif.js n'a pas \u00e9t\u00e9 appliqu\u00e9.");
      console.error("  Lancez-le d'abord : node patch-interactif.js --execute");
      process.exit(1);
    }
    const a1 = "function apercuInteractif(ex) {";
    if (!src.includes(a1)) { console.error("\u2717 script.js : apercuInteractif() introuvable."); process.exit(1); }
    const BLOC = `/* ═══ DIAGRAMMES ═══
   Un champ \`reponse\` distingue les deux usages : présent, l'exercice est une
   CONSTRUCTION corrigée localement ; absent, c'est une LECTURE dont la
   réponse est rédigée au brouillon et corrigée par l'IA. */
function litDiagramme(ex) {
  let p = ex && ex.interactif;
  if (!p) return null;
  if (typeof p === "string") { try { p = JSON.parse(p); } catch (e) { return null; } }
  return (p && p.widget === "diagramme" && window.MB_DIAGRAMME) ? p : null;
}
const estConstruction = p => !!(p && p.reponse);

function apercuDiagramme(ex) {
  const params = litDiagramme(ex);
  if (!params) return false;
  const contenu = document.getElementById("modal-content");
  if (!contenu) return false;
  let cible = null;
  contenu.querySelectorAll(".modal-section").forEach(function (sec) {
    const lab = sec.querySelector(".modal-section-label");
    if (lab && lab.textContent.trim().toLowerCase().indexOf("nonc") >= 0) cible = sec;
  });
  const boite = document.createElement("div");
  if (cible && !estConstruction(params)) {
    const lab = cible.querySelector(".modal-section-label");
    if (lab) lab.textContent = "Diagramme";
    cible.appendChild(boite);
  } else {
    const b = document.createElement("div");
    b.className = "modal-section";
    b.innerHTML = '<div class="modal-section-label">Repr\\u00e9sentation attendue</div>';
    b.appendChild(boite);
    const secs = contenu.querySelectorAll(".modal-section");
    const apres = cible || secs[secs.length - 1];
    if (apres && apres.parentNode) apres.parentNode.insertBefore(b, apres.nextSibling);
    else contenu.appendChild(b);
  }
  MB_DIAGRAMME.installerApercu(estConstruction(params)
    ? Object.assign({}, params, { valeurs: params.reponse.valeurs, type: params.reponse.type })
    : params, boite);
  return true;
}

let plateauDiagramme = null;
function diagrammeSeance(ex) {
  const ancien = document.getElementById("mbd-seance");
  if (ancien) ancien.remove();
  plateauDiagramme = null;
  const params = litDiagramme(ex);
  if (!params) return false;
  const zone = document.getElementById("page-answer");
  const ta = document.getElementById("session-answer");
  const label = document.getElementById("page-answer-label");
  const boite = document.createElement("div");
  boite.id = "mbd-seance";
  if (estConstruction(params)) {
    if (ta) ta.style.display = "none";
    if (label) label.textContent = "Construis la repr\\u00e9sentation";
    zone.appendChild(boite);
    plateauDiagramme = MB_DIAGRAMME.installer(params, boite);
    const v = boite.querySelector('[data-a="valider"]');
    if (v) v.style.display = "none";
  } else {
    if (ta) ta.style.display = "";
    boite.style.marginBottom = "0.8rem";
    zone.insertBefore(boite, zone.firstChild);
    MB_DIAGRAMME.installerApercu(params, boite);
  }
  return true;
}

function corrigerDiagramme(ex) {
  const params = litDiagramme(ex);
  if (!params || !estConstruction(params) || !plateauDiagramme) return null;
  const inst = plateauDiagramme.instance();
  const r = MB_DIAGRAMME.verifier(inst.lire(), params.reponse);
  inst.corriger(params.reponse);
  const nom = (MB_DIAGRAMME.NOM_TYPE[params.reponse.type] || "la repr\\u00e9sentation attendue").toLowerCase();
  if (!r.bonType) return {
    verdict: "incorrect",
    analyse: "La repr\\u00e9sentation choisie ne convient pas ici : il fallait construire " + nom + ".",
    demarche: "Une \\u00e9volution dans le temps appelle un graphique ; une r\\u00e9partition \\u00e0 un instant donn\\u00e9 appelle un diagramme.",
    solution: ex.solution || "", score: 0 };
  const b = [];
  if (r.justes) b.push(r.justes + " valeur" + (r.justes > 1 ? "s" : "") + " juste" + (r.justes > 1 ? "s" : ""));
  if (r.manques) b.push(r.manques + " manquante" + (r.manques > 1 ? "s" : ""));
  if (r.faux) b.push(r.faux + " incorrecte" + (r.faux > 1 ? "s" : ""));
  return {
    verdict: r.ok ? "correct" : (r.score >= 0.6 ? "partial" : "incorrect"),
    analyse: r.ok ? "Ta repr\\u00e9sentation est exacte."
      : "Sur " + r.attendus + " valeur" + (r.attendus > 1 ? "s" : "") + " attendue" +
        (r.attendus > 1 ? "s" : "") + " : " + (b.join(", ") || "rien de pos\\u00e9") + ".",
    demarche: "On reporte chaque donn\\u00e9e de l'\\u00e9nonc\\u00e9 sur le rep\\u00e8re, en respectant la graduation.",
    solution: ex.solution || "", score: r.score };
}

function apercuInteractif(ex) {
  if (apercuDiagramme(ex)) return;`;
    let out = src.replace(a1, BLOC);

    const a2 = "function plateauInteractif(ex, hist) {";
    if (!out.includes(a2)) { console.error("\u2717 script.js : plateauInteractif() introuvable."); process.exit(1); }
    out = out.replace(a2, `function plateauInteractif(ex, hist) {
  if (diagrammeSeance(ex)) {
    if (hist && hist.result && plateauDiagramme) {
      const pd = litDiagramme(ex);
      if (pd && pd.reponse) plateauDiagramme.instance().corriger(pd.reponse);
    }
    return;
  }
`);

    const a3 = "  /* Exercice interactif : la correction est locale et imm\u00e9diate. */";
    if (!out.includes(a3)) { console.error("\u2717 script.js : submitAnswer() non branch\u00e9."); process.exit(1); }
    out = out.replace(a3, `  /* Construction d'un diagramme : correction locale, comme le quadrillage. */
  const exD = seanceExercises[seanceIndex];
  const pD = litDiagramme(exD);
  if (pD && pD.reponse) {
    const result = corrigerDiagramme(exD);
    if (!result) return;
    seanceHistory[seanceIndex] = { answer: "(construction)", result, skipped: false };
    if (seanceIndex > seanceMax) seanceMax = seanceIndex;
    document.getElementById("page-answer").classList.add("locked");
    document.getElementById("page-answer-label").textContent = "Ta repr\\u00e9sentation";
    const bcD = document.getElementById("btn-correct");
    if (bcD) bcD.disabled = true;
    showTutor("result", result);
    paintNav();
    return;
  }

` + a3);

    modifs.push({ f: fScript, avant: src, apres: out,
                  quoi: "lecture, construction et correction locale des diagrammes" });
  }
}

if (!modifs.length) { console.log("\nRien \u00e0 faire : les diagrammes sont d\u00e9j\u00e0 branch\u00e9s."); process.exit(0); }
console.log("Modifications pr\u00e9vues :");
modifs.forEach(m => console.log("   \u2192 " + path.basename(m.f) + " : " + m.quoi));
let souci = 0;
for (const m of modifs) {
  if (!m.f.endsWith(".js")) continue;
  try { new vm.Script(m.apres); }
  catch (e) { console.error("\n\u2717 " + path.basename(m.f) + " : JavaScript invalide \u2014 " + e.message); souci++; }
}
if (souci) { console.error("\nAucune modification \u00e9crite."); process.exit(1); }
console.log("\n\u2714 Les fichiers obtenus sont syntaxiquement valides.");
modifs.forEach(m => console.log("   " + path.basename(m.f) + " : " + m.avant.length + " \u2192 " + m.apres.length + " caract\u00e8res"));
if (!EXECUTE) { console.log("\n(simulation \u2014 relancez avec --execute)"); process.exit(0); }

const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
modifs.forEach(m => {
  fs.writeFileSync(m.f + ".avant-diagrammes-" + stamp, m.avant, "utf8");
  fs.writeFileSync(m.f, m.apres, "utf8");
  console.log(path.basename(m.f) + " mis \u00e0 jour (sauvegarde : " + path.basename(m.f) + ".avant-diagrammes-" + stamp + ").");
});
console.log("\nPoussez sur GitHub, puis rechargez la page avec Ctrl+F5.");
