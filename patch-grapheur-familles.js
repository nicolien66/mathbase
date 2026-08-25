/* POLYMATES — patch-grapheur-familles.js

   Deux ajouts, sans réécrire aucun fichier :

   A. app.html  — charge grapheur.js (une ligne, après ui.js).

   B. tree.html — la page d'un chapitre passe sur deux colonnes : le menu
      actuel (en-tête, notions, cartes de section) glisse à gauche, et une
      colonne de droite liste les FAMILLES D'EXERCICES du chapitre, avec
      leur effectif. Cliquer une famille ouvre l'espace exercices filtré
      dessus.

      Aucune modification du serveur : les familles sont déduites de
      GET /exercises?chapitre=…&matiere=…, qui renvoie déjà la colonne
      `famille` de chaque exercice. Le regroupement se fait côté client.

   Chaque bloc est repéré par son texte exact et remplacé une seule fois.
   Si un ancrage a changé, le script s'arrête sans rien écrire plutôt que
   d'abîmer le fichier.

   Usage :
     node patch-grapheur-familles.js              # simulation
     node patch-grapheur-familles.js --execute    # applique
   Options : --dossier "public"
*/
"use strict";
const fs = require("fs"), path = require("path");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const gv = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] && !ARGS[i + 1].startsWith("--") ? ARGS[i + 1] : d; };
const DOSSIER = gv("--dossier", fs.existsSync("public/tree.html") ? "public" : ".");

console.log(`Dossier : ${path.resolve(DOSSIER)}`);
if (!EXECUTE) console.log("\n=== SIMULATION — ajoutez --execute pour appliquer ===");

const travaux = [];   // { fichier, avant, apres, etapes[] }
let stop = false;

function charger(nom) {
  const p = path.join(DOSSIER, nom);
  if (!fs.existsSync(p)) { console.error(`✗ ${nom} introuvable dans ${DOSSIER}.`); process.exit(1); }
  return { p, src: fs.readFileSync(p, "utf8") };
}

/* Remplacement unique et vérifié : on refuse d'agir dans le doute. */
function remplacer(etat, ancre, nouveau, libelle, marqueur) {
  if (stop) return etat;
  if (etat.src.includes(marqueur)) {
    console.log(`  · ${libelle} — déjà en place`);
    etat.deja++;
    return etat;
  }
  const n = etat.src.split(ancre).length - 1;
  if (n === 0) {
    console.error(`✗ ${libelle} : ancrage introuvable dans ${etat.nom}. Patch interrompu.`);
    stop = true; return etat;
  }
  if (n > 1) {
    console.error(`✗ ${libelle} : ancrage présent ${n} fois, trop ambigu. Patch interrompu.`);
    stop = true; return etat;
  }
  etat.src = etat.src.replace(ancre, nouveau);
  etat.faits.push(libelle);
  return etat;
}

/* ══════════════════════════════════════════════════════════════════════
   A. app.html — charger le grapheur
   ══════════════════════════════════════════════════════════════════════ */
const app = charger("app.html");
let A = { nom: "app.html", src: app.src, faits: [], deja: 0 };
console.log("\napp.html");
A = remplacer(A,
  '<script src="ui.js" defer></script>',
  '<script src="ui.js" defer></script>\n<script src="grapheur.js" defer></script>',
  "chargement de grapheur.js",
  'src="grapheur.js"');

/* ══════════════════════════════════════════════════════════════════════
   B. tree.html — colonne de gauche + familles à droite
   ══════════════════════════════════════════════════════════════════════ */
const tree = charger("tree.html");
let T = { nom: "tree.html", src: tree.src, faits: [], deja: 0 };
console.log("\ntree.html");

/* B1. Styles des deux colonnes et de la liste des familles. */
const CSS_ANCRE = "/* — cartes de section — */";
const CSS_NOUVEAU = `/* — chapitre : le menu à gauche, les familles d'exercices à droite —
   La colonne de droite est collante : en faisant défiler les cartes de
   section, on garde sous les yeux les types d'exercices du chapitre. */
.theme-layout{display:grid;grid-template-columns:minmax(0,1fr) 296px;gap:1.5rem;align-items:start}
.theme-layout .theme-hero{margin-top:0}
.theme-layout .sections-grid{grid-template-columns:repeat(2,1fr)}
.familles-box{position:sticky;top:1.2rem;background:var(--surface);border:1px solid var(--border);
  border-left:3px solid var(--tc,#c8b97a);border-radius:14px;padding:1.05rem 1.15rem}
.familles-title{font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);
  font-family:var(--mono);margin-bottom:.5rem;display:flex;align-items:center;gap:.5rem}
.familles-count{margin-left:auto;color:var(--tc,#c8b97a)}
.famille-item{display:flex;align-items:baseline;gap:.6rem;width:100%;text-align:left;
  background:none;border:none;border-top:1px solid var(--border);color:var(--text);
  font:inherit;font-size:.82rem;line-height:1.4;padding:.62rem .2rem;cursor:pointer;
  transition:color .18s,padding-left .18s}
.famille-item:first-of-type{border-top:none}
.famille-item:hover{color:var(--tc,#c8b97a);padding-left:.45rem}
.famille-nb{margin-left:auto;font-family:var(--mono);font-size:.7rem;color:var(--muted);flex:none}
.familles-vide{font-size:.8rem;color:var(--muted);line-height:1.6;padding-top:.3rem}
@media(max-width:980px){
  .theme-layout{grid-template-columns:1fr}
  .familles-box{position:static}
  .theme-layout .sections-grid{grid-template-columns:repeat(2,1fr)}
}

/* — cartes de section — */`;
T = remplacer(T, CSS_ANCRE, CSS_NOUVEAU, "styles des deux colonnes", ".theme-layout{");

/* B2. Ouverture de la mise en page : tout ce qui suivait passe à gauche. */
const OUV_ANCRE = `  <button class="back-btn" onclick="showPage('tree')">← Retour à l'arbre</button>
  <div class="theme-hero" id="theme-hero">`;
const OUV_NOUVEAU = `  <button class="back-btn" onclick="showPage('tree')">← Retour à l'arbre</button>
  <div class="theme-layout">
  <div class="theme-col-main">
  <div class="theme-hero" id="theme-hero">`;
T = remplacer(T, OUV_ANCRE, OUV_NOUVEAU, "colonne de gauche (ouverture)", 'class="theme-layout"');

/* B3. Fermeture : on referme la colonne, puis on ajoute celle de droite. */
const FERM_ANCRE = `      <div class="section-card-go">Composer →</div>
    </div>
  </div>
</div>`;
const FERM_NOUVEAU = `      <div class="section-card-go">Composer →</div>
    </div>
  </div>
  </div>
  <aside class="theme-col-side" id="theme-familles"></aside>
  </div>
</div>`;
T = remplacer(T, FERM_ANCRE, FERM_NOUVEAU, "colonne de droite (fermeture)", 'id="theme-familles"');

/* B4. Alimentation de la colonne de droite à l'ouverture d'un chapitre. */
const JS_ANCRE = `  notionsEl.innerHTML = html;
  showPage('theme');
}`;
const JS_NOUVEAU = `  notionsEl.innerHTML = html;
  showPage('theme');
  chargerFamilles(label, color);
}

/* ─── FAMILLES D'EXERCICES DU CHAPITRE ───────────────────────────
   Les familles ne sont pas stockées à part : chaque exercice porte la
   sienne. On récupère donc les exercices du chapitre et on les regroupe
   ici, ce qui évite d'ajouter une route au serveur.

   Un jeton d'appel protège de l'ordre d'arrivée des réponses : en
   cliquant vite d'un chapitre à l'autre, la réponse la plus lente ne
   doit pas écraser l'affichage du chapitre réellement ouvert. */
let demandeFamilles = 0;

async function chargerFamilles(chapitre, couleur){
  const hote = document.getElementById('theme-familles');
  if (!hote) return;
  const jeton = ++demandeFamilles;

  hote.style.setProperty('--tc', couleur || '#c8b97a');
  hote.innerHTML = '<div class="familles-box">' +
    '<div class="familles-title">Types d\\'exercices</div>' +
    '<p class="familles-vide">Chargement…</p></div>';

  const matiere = (window.MB_MAT && MB_MAT.id) || 'mathematiques';
  let lignes = [], panne = false;
  try {
    const res = await MB_AUTH.apiFetch('/exercises?chapitre=' + encodeURIComponent(chapitre) +
                                       '&matiere=' + encodeURIComponent(matiere));
    if (res.ok) lignes = await res.json(); else panne = true;
  } catch (_) { panne = true; }
  if (jeton !== demandeFamilles) return;   // un autre chapitre a été ouvert entre-temps

  const compte = new Map();
  lignes.forEach(e => {
    const f = (e.famille || '').trim();
    if (f) compte.set(f, (compte.get(f) || 0) + 1);
  });
  const familles = [...compte.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'fr'));

  const boite = document.createElement('div');
  boite.className = 'familles-box';

  const titre = document.createElement('div');
  titre.className = 'familles-title';
  titre.innerHTML = 'Types d\\'exercices<span class="familles-count"></span>';
  titre.querySelector('.familles-count').textContent = familles.length || '';
  boite.appendChild(titre);

  if (!familles.length){
    const p = document.createElement('p');
    p.className = 'familles-vide';
    p.textContent = panne
      ? "Impossible de récupérer les exercices pour l'instant."
      : lignes.length
        ? "Les exercices de ce chapitre n'ont pas encore de type renseigné."
        : "Aucun exercice n'est encore rattaché à ce chapitre.";
    boite.appendChild(p);
  } else {
    familles.forEach(([nom, n]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'famille-item';
      b.title = "Voir ces exercices";
      const l = document.createElement('span');
      l.textContent = nom;
      const nb = document.createElement('span');
      nb.className = 'famille-nb';
      nb.textContent = n;
      b.append(l, nb);
      /* L'espace exercices pré-remplit sa recherche avec le libellé reçu :
         on lui passe la famille plutôt que le chapitre. */
      b.onclick = () => {
        location.href = 'app.html?vue=exercices&chapitre=' + encodeURIComponent(nom);
      };
      boite.appendChild(b);
    });
  }

  hote.innerHTML = '';
  hote.appendChild(boite);
}`;
T = remplacer(T, JS_ANCRE, JS_NOUVEAU, "chargement des familles", "function chargerFamilles");

/* ══════════════════════════════════════════════════════════════════════
   Compte rendu et écriture
   ══════════════════════════════════════════════════════════════════════ */
if (stop) process.exit(1);

[A, T].forEach(e => {
  if (e.faits.length) {
    console.log(`\n${e.nom} : ${e.faits.length} modification(s)`);
    e.faits.forEach(f => console.log("  · " + f));
  }
});

const total = A.faits.length + T.faits.length;
if (!total) { console.log("\nRien à faire : tout est déjà en place."); process.exit(0); }

if (!EXECUTE) {
  console.log(`\nSimulation terminée (${total} modification(s) prêtes).`);
  console.log("Relancez avec --execute pour écrire les fichiers.");
  process.exit(0);
}

const horo = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
[[app.p, A], [tree.p, T]].forEach(([p, e]) => {
  if (!e.faits.length) return;
  const sauve = p.replace(/\.html$/, "_html") + ".avant-grapheur-" + horo;
  fs.writeFileSync(sauve, fs.readFileSync(p, "utf8"), "utf8");
  fs.writeFileSync(p, e.src, "utf8");
  console.log(`✓ ${e.nom} modifié — sauvegarde : ${path.basename(sauve)}`);
});
console.log("\nÀ ne pas oublier : déposer grapheur.js dans le même dossier.");
