/* MathBase — patch-filtre-chapitre.js
   Ajoute un filtre par CHAPITRE aux séances d'entraînement.

   Quatre retouches, vérifiées avant écriture et toutes réversibles
   (sauvegarde horodatée de chaque fichier modifié) :

   1. server.js  — la route /exercises accepte le paramètre `chapitre`.
      Elle filtrait déjà sur level, subject, difficulty et type ; il manquait
      seulement cette clause.
   2. app.html   — un bloc « CHAPITRE » entre le niveau et la difficulté.
      Une liste déroulante, pas des boutons : il y a une soixantaine de
      chapitres, groupés par matière comme dans le catalogue.
   3. script.js  — mémorise le chapitre choisi, le transmet à la requête,
      remplit la liste au moment d'ouvrir la séance, et l'applique aussi au
      repli hors ligne.
   4. style.css  — l'habillage de la liste, aligné sur les boutons existants.

   La liste est bâtie sur CHAPTER_STRUCTURE : elle propose donc les chapitres
   dans l'ordre du catalogue, groupés par matière. Un chapitre sans exercice
   reste proposé ; le message d'erreur existant signale alors qu'il n'y a rien
   pour ces filtres.

   ── USAGE ────────────────────────────────────────────────────────────────
     node patch-filtre-chapitre.js              # simulation
     node patch-filtre-chapitre.js --execute    # applique
   Option : --dossier "chemin/public"           (sinon localisé automatiquement)
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
    console.error(`✗ Plusieurs ${nom} trouvés — précisez avec --dossier :`);
    t.forEach(f => console.error("   " + f)); process.exit(1);
  }
  return null;
}

const fServer = unique("server.js"), fApp = unique("app.html"),
      fScript = unique("script.js"), fCss = unique("style.css");
const manquants = [["server.js", fServer], ["app.html", fApp],
                   ["script.js", fScript], ["style.css", fCss]].filter(x => !x[1]);
if (manquants.length) {
  console.error("✗ Fichiers introuvables : " + manquants.map(x => x[0]).join(", "));
  console.error(`  Lancez depuis le dossier du projet, ou passez --dossier "chemin".`);
  process.exit(1);
}
[["server.js", fServer], ["app.html", fApp], ["script.js", fScript], ["style.css", fCss]]
  .forEach(([n, f]) => console.log(`${n.padEnd(10)} : ${f}`));
console.log("");
if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");
const modifs = [];

/* ═══ 1. server.js : filtrer sur le chapitre ═══ */
{
  const src = fs.readFileSync(fServer, "utf8");
  /* la marque la plus sûre est la clause elle-même : la destructuration peut
     varier, mais « AND chapitre = » n'existe que si le patch est passé */
  if (src.includes("AND chapitre = ")) {
    console.log("· server.js : filtre chapitre déjà présent.");
  } else {
    const a1 = `  const { level, subject, difficulty, type } = req.query;`;
    const a2 = `  if (difficulty) { query += \` AND difficulty = $\${i++}\`; params.push(difficulty); }`;
    if (!src.includes(a1) || !src.includes(a2)) {
      console.error("✗ server.js : route /exercises introuvable."); process.exit(1);
    }
    let out = src.replace(a1, `  const { level, subject, difficulty, type, chapitre } = req.query;`);
    /* remplacement par FONCTION : avec une chaîne, « $$ » serait interprété
       comme un « $ » littéral et les repères $1, $2 de la requête SQL
       seraient silencieusement corrompus. */
    out = out.replace(a2, () => a2 + `
  if (chapitre)   { query += \` AND chapitre = $\${i++}\`;   params.push(chapitre); }`);
    modifs.push({ f: fServer, avant: src, apres: out, quoi: "paramètre `chapitre` sur /exercises" });
  }
}

/* ═══ 2. app.html : le bloc de filtre ═══ */
{
  const src = fs.readFileSync(fApp, "utf8");
  if (src.includes("seance-chapitre")) console.log("· app.html : filtre chapitre déjà en place.");
  else {
    const ancre = `        <div class="seance-config-block">
          <p class="seance-section-label">DIFFICULTÉ</p>`;
    if (!src.includes(ancre)) { console.error("✗ app.html : bloc DIFFICULTÉ introuvable."); process.exit(1); }
    const bloc = `        <div class="seance-config-block">
          <p class="seance-section-label">CHAPITRE</p>
          <select class="seance-chapitre" id="seance-chapitre" onchange="selectChapitre(this.value)">
            <option value="">Tous les chapitres</option>
          </select>
        </div>

` + ancre;
    modifs.push({ f: fApp, avant: src, apres: src.replace(ancre, bloc),
                  quoi: "bloc CHAPITRE dans les filtres" });
  }
}

/* ═══ 3. script.js : mémoriser, remplir, transmettre ═══ */
{
  const src = fs.readFileSync(fScript, "utf8");
  if (src.includes("seanceChapitre")) console.log("· script.js : filtre chapitre déjà branché.");
  else {
    const aVar = `let seanceLevel  = "";
let seanceDiff   = "";`;
    const aSel = `function selectDiff(btn, diff) {`;
    const aUrl = `    if (seanceDiff)  params.append("difficulty", seanceDiff);`;
    const aDemo = `        (!seanceLevel || ex.level === seanceLevel) &&
        (!seanceDiff  || ex.difficulty === seanceDiff));`;
    const aReset = `function resetSeanceWelcome() {
  document.getElementById("seance-welcome").style.display = "";`;
    const aVide = `    if (!data.length) {
      showToast("Aucun exercice trouvé pour ces filtres.", "error");
      return;
    }`;
    for (const [n, a] of [["déclaration", aVar], ["selectDiff", aSel], ["requête", aUrl],
                          ["repli démo", aDemo], ["reset", aReset], ["message vide", aVide]])
      if (!src.includes(a)) { console.error(`✗ script.js : ancre « ${n} » introuvable.`); process.exit(1); }

    let out = src;
    out = out.replace(aVar, `let seanceLevel  = "";
let seanceDiff   = "";
let seanceChapitre = "";`);

    out = out.replace(aSel, `/* Filtre par chapitre : la liste est bâtie sur CHAPTER_STRUCTURE, donc dans
   l'ordre du catalogue et groupée par matière. On la remplit à l'ouverture de
   la séance, une seule fois. */
function remplirChapitres() {
  const sel = document.getElementById("seance-chapitre");
  if (!sel || sel.dataset.rempli) return;
  const structure = (typeof CHAPTER_STRUCTURE !== "undefined")
    ? CHAPTER_STRUCTURE : (window.CHAPTER_STRUCTURE || []);
  structure.forEach(m => {
    if (!m.chapters || !m.chapters.length) return;
    const grp = document.createElement("optgroup");
    grp.label = m.subject;
    m.chapters.forEach(c => {
      const o = document.createElement("option");
      o.value = c; o.textContent = c;
      grp.appendChild(o);
    });
    sel.appendChild(grp);
  });
  sel.dataset.rempli = "1";
}

function selectChapitre(chapitre) {
  seanceChapitre = chapitre || "";
}

function selectDiff(btn, diff) {`);

    out = out.replace(aUrl, aUrl + `
    if (seanceChapitre) params.append("chapitre", seanceChapitre);`);

    out = out.replace(aDemo, `        (!seanceLevel || ex.level === seanceLevel) &&
        (!seanceChapitre || ex.chapitre === seanceChapitre) &&
        (!seanceDiff  || ex.difficulty === seanceDiff));`);

    out = out.replace(aReset, `function resetSeanceWelcome() {
  remplirChapitres();
  document.getElementById("seance-welcome").style.display = "";`);

    /* message d'erreur : nommer le chapitre, sinon on cherche en vain */
    out = out.replace(aVide, `    if (!data.length) {
      showToast(seanceChapitre
        ? "Aucun exercice dans « " + seanceChapitre + " » pour ces filtres."
        : "Aucun exercice trouvé pour ces filtres.", "error");
      return;
    }`);

    modifs.push({ f: fScript, avant: src, apres: out,
                  quoi: "mémorisation, remplissage et transmission du chapitre" });
  }
}

/* ═══ 4. style.css : habillage de la liste ═══ */
{
  const src = fs.readFileSync(fCss, "utf8");
  if (src.includes(".seance-chapitre")) console.log("· style.css : habillage déjà présent.");
  else {
    const bloc = `

/* ── Filtre par chapitre (séance d'entraînement) ──
   Reprend l'habillage des boutons de difficulté : même bordure, même rayon,
   même accent à l'ouverture. La flèche est dessinée en fond pour éviter
   l'apparence native, très différente d'un système à l'autre. */
.seance-chapitre {
  width: 100%;
  max-width: 420px;
  font-family: var(--sans);
  font-size: 0.92rem;
  font-weight: 300;
  color: var(--text);
  background-color: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.7rem 2.4rem 0.7rem 1rem;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, var(--muted) 50%),
                    linear-gradient(135deg, var(--muted) 50%, transparent 50%);
  background-position: calc(100% - 18px) 52%, calc(100% - 13px) 52%;
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
  transition: border-color 0.16s, color 0.16s;
}
.seance-chapitre:hover { border-color: var(--border2); }
.seance-chapitre:focus {
  outline: none;
  border-color: var(--accent);
  background-image: linear-gradient(45deg, transparent 50%, var(--accent) 50%),
                    linear-gradient(135deg, var(--accent) 50%, transparent 50%);
}
.seance-chapitre:focus-visible { outline: 2px solid var(--accent2); outline-offset: 2px; }
.seance-chapitre option  { background: var(--surface2); color: var(--text); }
.seance-chapitre optgroup {
  background: var(--surface);
  color: var(--accent-dim);
  font-family: var(--mono);
  font-size: 0.78rem;
  font-style: normal;
  letter-spacing: 0.06em;
}
`;
    modifs.push({ f: fCss, avant: src, apres: src + bloc, quoi: "habillage de la liste déroulante" });
  }
}

/* ═══ CONTRÔLES ═══ */
if (!modifs.length) { console.log("\nRien à faire : le filtre est déjà en place."); process.exit(0); }
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
  fs.writeFileSync(`${m.f}.avant-filtre-${stamp}`, m.avant, "utf8");
  fs.writeFileSync(m.f, m.apres, "utf8");
  console.log(`${path.basename(m.f)} mis à jour (sauvegarde : ${path.basename(m.f)}.avant-filtre-${stamp}).`);
});
console.log("\nRedémarrez le serveur, puis rechargez la page avec Ctrl+F5.");
