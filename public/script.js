/* ── CURSEUR PERSONNALISÉ ── */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

document.addEventListener('mouseover', e => {
  if (e.target.closest('a,button,select,input,textarea,.exercise-card,.modal-close')) {
    cursor.style.width  = '5px'; cursor.style.height = '5px';
    cursorRing.style.width = '46px'; cursorRing.style.height = '46px';
    cursorRing.style.borderColor = 'rgba(200,185,122,0.6)';
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.closest('a,button,select,input,textarea,.exercise-card,.modal-close')) {
    cursor.style.width  = '8px'; cursor.style.height = '8px';
    cursorRing.style.width = '32px'; cursorRing.style.height = '32px';
    cursorRing.style.borderColor = 'rgba(200,185,122,0.45)';
  }
});

let currentFilter = "";
let pendingExercise = null;

/* ══════════════════════════════════════
   MODE DÉMO — banque intégrée
   Si le serveur (Express + PostgreSQL + Mistral) n'est pas joignable,
   le site bascule sur cette banque locale : la navigation, les séances
   et une correction automatique simple restent disponibles.
══════════════════════════════════════ */
let DEMO_MODE = false;

const DEMO_EXERCISES = [
  { id:1,  title:"Multiplier un décimal par 100", level:"college", subject:"Arithmétique", difficulty:"Facile", classe:"6ème", chapitre:"Entiers & décimaux",
    content:"Calcule : 3,47 × 100.\nExplique comment se déplace la virgule.",
    solution:"3,47 × 100 = 347. La virgule se déplace de 2 rangs vers la droite.", keys:["347"] },
  { id:2,  title:"Placer une fraction sur un partage", level:"college", subject:"Arithmétique", difficulty:"Facile", classe:"6ème", chapitre:"Fractions",
    content:"Un gâteau est coupé en 8 parts égales. Léa en mange 3.\nQuelle fraction du gâteau a-t-elle mangée ? Quelle fraction reste-t-il ?",
    solution:"Léa a mangé 3/8 du gâteau. Il reste 8/8 − 3/8 = 5/8.", keys:["5/8"] },
  { id:3,  title:"Simplifier une fraction", level:"college", subject:"Arithmétique", difficulty:"Moyen", classe:"5ème", chapitre:"Fractions",
    content:"Simplifie la fraction 18/24 le plus possible.",
    solution:"18/24 = 3/4 (on divise le numérateur et le dénominateur par 6).", keys:["3/4"] },
  { id:4,  title:"Addition de nombres relatifs", level:"college", subject:"Arithmétique", difficulty:"Facile", classe:"5ème", chapitre:"Nombres relatifs",
    content:"Calcule : (−7) + (+3) puis (−4) + (−5).",
    solution:"(−7) + (+3) = −4 et (−4) + (−5) = −9.", keys:["-4","−4"] },
  { id:5,  title:"Règle des signes", level:"college", subject:"Arithmétique", difficulty:"Moyen", classe:"4ème", chapitre:"Nombres relatifs",
    content:"Calcule : (−3) × (−6) puis (−20) ÷ 4.",
    solution:"(−3) × (−6) = +18 (moins par moins donne plus) et (−20) ÷ 4 = −5.", keys:["18"] },
  { id:6,  title:"Puissances de 10", level:"college", subject:"Arithmétique", difficulty:"Facile", classe:"4ème", chapitre:"Puissances",
    content:"Écris 10⁵ sous forme d'un nombre entier, puis écris 2³ × 2² sous la forme d'une seule puissance de 2.",
    solution:"10⁵ = 100 000 et 2³ × 2² = 2⁵ = 32.", keys:["100000","100 000","2^5"] },
  { id:7,  title:"Tableau de proportionnalité", level:"college", subject:"Arithmétique", difficulty:"Moyen", classe:"4ème", chapitre:"Proportionnalité",
    content:"3 kg de pommes coûtent 7,50 €.\nCombien coûtent 5 kg de pommes ?",
    solution:"1 kg coûte 7,50 ÷ 3 = 2,50 €. Donc 5 kg coûtent 2,50 × 5 = 12,50 €.", keys:["12.5","12,50","12.50"] },
  { id:8,  title:"Calculer un pourcentage", level:"college", subject:"Arithmétique", difficulty:"Facile", classe:"4ème", chapitre:"Pourcentages",
    content:"Un jean coûte 60 €. Il est soldé à −30 %.\nCalcule le montant de la réduction, puis le nouveau prix.",
    solution:"Réduction : 60 × 30/100 = 18 €. Nouveau prix : 60 − 18 = 42 €.", keys:["42"] },
  { id:9,  title:"Vitesse moyenne", level:"college", subject:"Arithmétique", difficulty:"Moyen", classe:"4ème", chapitre:"Vitesse, distance et temps",
    content:"Un cycliste parcourt 45 km en 1 h 30 min.\nQuelle est sa vitesse moyenne en km/h ?",
    solution:"1 h 30 = 1,5 h. v = d ÷ t = 45 ÷ 1,5 = 30 km/h.", keys:["30"] },
  { id:10, title:"Décomposition en facteurs premiers", level:"college", subject:"Arithmétique", difficulty:"Difficile", classe:"3ème", chapitre:"Arithmétique",
    content:"Décompose 84 en produit de facteurs premiers, puis donne le PGCD de 84 et 60.",
    solution:"84 = 2² × 3 × 7. 60 = 2² × 3 × 5. PGCD(84, 60) = 2² × 3 = 12.", keys:["12"] },
  { id:11, title:"Priorités opératoires", level:"college", subject:"Algèbre", difficulty:"Facile", classe:"5ème", chapitre:"Enchaînement d'opérations",
    content:"Calcule en respectant les priorités : 7 + 3 × (8 − 5).",
    solution:"7 + 3 × (8 − 5) = 7 + 3 × 3 = 7 + 9 = 16.", keys:["16"] },
  { id:12, title:"Réduire une expression", level:"college", subject:"Algèbre", difficulty:"Moyen", classe:"4ème", chapitre:"Calcul littéral",
    content:"Réduis l'expression : A = 5x + 3 − 2x + 7.",
    solution:"A = 5x − 2x + 3 + 7 = 3x + 10.", keys:["3x+10"] },
  { id:13, title:"Développer avec la distributivité", level:"college", subject:"Algèbre", difficulty:"Moyen", classe:"3ème", chapitre:"Développement et factorisation",
    content:"Développe et réduis : B = 4(2x − 3) + 5x.",
    solution:"B = 8x − 12 + 5x = 13x − 12.", keys:["13x-12","13x−12"] },
  { id:14, title:"Équation du premier degré", level:"college", subject:"Algèbre", difficulty:"Moyen", classe:"3ème", chapitre:"Équations du 1er degré",
    content:"Résous l'équation : 3x + 5 = 20.",
    solution:"3x = 20 − 5 = 15, donc x = 15 ÷ 3 = 5.", keys:["x=5","5"] },
  { id:15, title:"Équation avec x des deux côtés", level:"college", subject:"Algèbre", difficulty:"Difficile", classe:"3ème", chapitre:"Équations du 1er degré",
    content:"Résous l'équation : 7x − 4 = 3x + 12.",
    solution:"7x − 3x = 12 + 4, soit 4x = 16, donc x = 4.", keys:["x=4","4"] },
  { id:16, title:"Somme des angles d'un triangle", level:"college", subject:"Géométrie", difficulty:"Facile", classe:"5ème", chapitre:"Géométrie du triangle",
    content:"Dans un triangle ABC, l'angle A mesure 48° et l'angle B mesure 63°.\nCalcule la mesure de l'angle C.",
    solution:"C = 180 − (48 + 63) = 180 − 111 = 69°.", keys:["69"] },
  { id:17, title:"Théorème de Pythagore", level:"college", subject:"Géométrie", difficulty:"Moyen", classe:"4ème", chapitre:"Théorème de Pythagore",
    content:"Un triangle ABC est rectangle en A, avec AB = 6 cm et AC = 8 cm.\nCalcule la longueur de l'hypoténuse BC.",
    solution:"BC² = AB² + AC² = 36 + 64 = 100, donc BC = √100 = 10 cm.", keys:["10"] },
  { id:18, title:"Réciproque de Pythagore", level:"college", subject:"Géométrie", difficulty:"Difficile", classe:"4ème", chapitre:"Théorème de Pythagore",
    content:"Un triangle a des côtés de 5 cm, 12 cm et 13 cm.\nEst-il rectangle ? Justifie.",
    solution:"13² = 169 et 5² + 12² = 25 + 144 = 169. Comme 13² = 5² + 12², le triangle est rectangle (réciproque de Pythagore).", keys:["oui","rectangle"] },
  { id:19, title:"Théorème de Thalès", level:"college", subject:"Géométrie", difficulty:"Difficile", classe:"3ème", chapitre:"Théorème de Thalès",
    content:"Dans un triangle ABC, M est sur [AB], N est sur [AC] et (MN) // (BC).\nOn donne AM = 3 cm, AB = 9 cm et BC = 12 cm. Calcule MN.",
    solution:"D'après Thalès : MN/BC = AM/AB = 3/9 = 1/3. Donc MN = 12 × 1/3 = 4 cm.", keys:["4"] },
  { id:20, title:"Cosinus d'un angle", level:"college", subject:"Géométrie", difficulty:"Difficile", classe:"3ème", chapitre:"Trigonométrie",
    content:"Dans un triangle rectangle, l'hypoténuse mesure 10 cm et le côté adjacent à l'angle x mesure 5 cm.\nCalcule cos(x), puis donne la mesure de l'angle x.",
    solution:"cos(x) = 5/10 = 0,5, donc x = 60°.", keys:["60"] },
  { id:21, title:"Image par une fonction", level:"college", subject:"Analyse", difficulty:"Facile", classe:"3ème", chapitre:"Notions de fonctions",
    content:"Soit f la fonction définie par f(x) = 3x − 2.\nCalcule l'image de 4 par f, puis l'antécédent de 10.",
    solution:"f(4) = 3×4 − 2 = 10. Antécédent de 10 : 3x − 2 = 10 donne x = 4.", keys:["10"] },
  { id:22, title:"Fonction linéaire et proportionnalité", level:"college", subject:"Analyse", difficulty:"Moyen", classe:"3ème", chapitre:"Fonction linéaire",
    content:"g est une fonction linéaire telle que g(2) = 7.\nDétermine le coefficient a, puis calcule g(6).",
    solution:"a = 7/2 = 3,5, donc g(x) = 3,5x et g(6) = 21.", keys:["21"] },
  { id:23, title:"Probabilité avec un dé", level:"college", subject:"Probabilités", difficulty:"Facile", classe:"3ème", chapitre:"Probabilités simples",
    content:"On lance un dé équilibré à 6 faces.\nQuelle est la probabilité d'obtenir un multiple de 3 ?",
    solution:"Les multiples de 3 sont 3 et 6 : P = 2/6 = 1/3.", keys:["1/3","2/6"] },
  { id:24, title:"Moyenne et médiane", level:"college", subject:"Statistiques", difficulty:"Moyen", classe:"3ème", chapitre:"Indicateurs de position",
    content:"Voici les notes d'un élève : 8 ; 11 ; 12 ; 14 ; 15.\nCalcule la moyenne, puis donne la médiane de la série.",
    solution:"Moyenne = (8+11+12+14+15)/5 = 60/5 = 12. Médiane = 12 (3ᵉ valeur sur 5).", keys:["12"] },
  { id:25, title:"Périmètre et aire d'un rectangle", level:"primaire", subject:"Géométrie", difficulty:"Facile", classe:"CM2", chapitre:"Périmètres et aires",
    content:"Un rectangle mesure 7 cm de longueur et 4 cm de largeur.\nCalcule son périmètre puis son aire.",
    solution:"Périmètre = 2 × (7 + 4) = 22 cm. Aire = 7 × 4 = 28 cm².", keys:["28"] },
  { id:26, title:"Fractions de quantité", level:"primaire", subject:"Arithmétique", difficulty:"Moyen", classe:"CM2", chapitre:"Fractions",
    content:"Dans une classe de 28 élèves, 3/4 mangent à la cantine.\nCombien d'élèves mangent à la cantine ?",
    solution:"28 ÷ 4 = 7 et 7 × 3 = 21 élèves.", keys:["21"] },
  { id:27, title:"Développer une identité remarquable", level:"lycee", subject:"Algèbre", difficulty:"Moyen", classe:"2nde", chapitre:"Développement et factorisation",
    content:"Développe : (x + 5)² puis factorise : x² − 49.",
    solution:"(x + 5)² = x² + 10x + 25 et x² − 49 = (x − 7)(x + 7).", keys:["x^2+10x+25","x²+10x+25"] },
  { id:28, title:"Résoudre une inéquation", level:"college", subject:"Algèbre", difficulty:"Difficile", classe:"4ème", chapitre:"Inéquations",
    content:"Résous l'inéquation : −2x + 6 > 0.\nAttention au sens de l'inégalité !",
    solution:"−2x > −6, on divise par −2 (négatif) donc on inverse : x < 3.", keys:["x<3","x < 3"] },
];

function normalizeAnswer(s){
  return (s||"").toLowerCase().replace(/\s+/g,"").replace(/,/g,".").replace(/×/g,"*").replace(/−/g,"-");
}

/* Correction locale (mode démo) : compare la réponse aux clés attendues. */
function demoCorrect(ex, answer){
  const norm = normalizeAnswer(answer);
  const hit  = (ex.keys||[]).some(k => norm.includes(normalizeAnswer(k)));
  if (hit) return {
    verdict:"correct",
    analyse:"Ta réponse contient le bon résultat — bien joué. (Correction automatique locale : lance le serveur MathBase pour une analyse détaillée de ton raisonnement par l'IA.)",
    demarche: ex.solution || "—",
    solution: ex.solution || "—"
  };
  return {
    verdict:"incorrect",
    analyse:"Je ne retrouve pas le résultat attendu dans ta copie. Compare ton brouillon avec la démarche ci-dessous pour repérer l'étape qui diffère. (Correction automatique locale : lance le serveur MathBase pour une analyse détaillée par l'IA.)",
    demarche: ex.solution || "—",
    solution: ex.solution || "—"
  };
}

function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById("view-" + name).classList.add("active");
  const tabMap = { browse: 0, seance: 1, add: 2 };
  document.querySelectorAll(".tab")[tabMap[name]]?.classList.add("active");
  if (name === "browse") loadExercises();
  if (name === "add") backToInput();
  if (name === "seance") resetSeanceWelcome();
}

function setFilter(btn, level) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = level;
  loadExercises();
}

const LEVEL_LABELS = { primaire:"Primaire", college:"Collège", lycee:"Lycée", universite:"Université" };

function exerciseCard(ex) {
  const card = document.createElement("div");
  card.className = "exercise-card";
  card.onclick = () => openModal(ex);
  const levelLabel = LEVEL_LABELS[ex.level] || ex.level;
  const diffTag    = ex.difficulty ? `<span class="tag tag-${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>` : "";
  const subjectTag = ex.subject    ? `<span class="tag tag-subject">${escapeHtml(ex.subject)}</span>` : "";
  const classeTag  = ex.classe     ? `<span class="tag tag-classe">${escapeHtml(ex.classe)}</span>` : "";
  card.innerHTML = `
    <div class="card-tags"><span class="tag tag-${ex.level}">${levelLabel}</span>${diffTag}${subjectTag}</div>
    <div class="card-title">${escapeHtml(ex.title)}</div>
    <div class="card-preview">${escapeHtml(ex.content)}</div>
    ${classeTag ? `<div class="card-tags">${classeTag}</div>` : ""}
    <div class="card-footer"><span>#${String(ex.id).padStart(3,'0')}</span><span class="card-arrow">Voir →</span></div>`;
  return card;
}

/* Regroupe les exercices par chapitre et affiche TOUS les chapitres de
   l'arbre — même ceux qui n'ont aucun exercice pour l'instant. */
function renderByChapter(data) {
  const list  = document.getElementById("list");
  const empty = document.getElementById("empty-state");
  const badge = document.getElementById("total-num");
  badge.textContent = data.length;
  empty.style.display = "none";
  list.innerHTML = "";

  // index des exercices par chapitre
  const byChap = new Map();
  data.forEach(ex => {
    const key = ex.chapitre || "Sans chapitre";
    if (!byChap.has(key)) byChap.set(key, []);
    byChap.get(key).push(ex);
  });

  // ordre officiel : matières → chapitres de l'arbre (structure partagée)
  const structure = (typeof CHAPTER_STRUCTURE !== "undefined") ? CHAPTER_STRUCTURE : (window.CHAPTER_STRUCTURE || []);
  const known = new Set();
  structure.forEach(m => m.chapters.forEach(c => known.add(c)));

  const frag = document.createDocumentFragment();

  structure.forEach(mat => {
    // chapitres de cette matière ayant au moins 1 exercice sous le filtre courant ? on affiche tout
    const matSection = document.createElement("div");
    matSection.className = "chap-subject";
    matSection.innerHTML = `<div class="chap-subject-head" style="--sc:${mat.color||'#c8b97a'}">${escapeHtml(mat.subject)}</div>`;
    const chapWrap = document.createElement("div");
    chapWrap.className = "chap-groups";

    mat.chapters.forEach(chap => {
      const exs = byChap.get(chap) || [];
      const block = document.createElement("div");
      block.className = "chap-block" + (exs.length ? "" : " chap-empty");
      block.innerHTML = `
        <div class="chap-head">
          <span class="chap-name">${escapeHtml(chap)}</span>
          <span class="chap-count">${exs.length ? exs.length + (exs.length>1?" exercices":" exercice") : "à venir"}</span>
        </div>`;
      const grid = document.createElement("div");
      grid.className = "chap-grid";
      if (exs.length) {
        exs.forEach(ex => grid.appendChild(exerciseCard(ex)));
      } else {
        const ph = document.createElement("div");
        ph.className = "chap-placeholder";
        ph.textContent = "Aucun exercice pour ce chapitre — pour l'instant !";
        grid.appendChild(ph);
      }
      block.appendChild(grid);
      chapWrap.appendChild(block);
    });

    matSection.appendChild(chapWrap);
    frag.appendChild(matSection);
  });

  // chapitres présents dans les données mais absents de l'arbre (ex. anciens intitulés)
  const extras = [...byChap.keys()].filter(k => !known.has(k));
  if (extras.length) {
    const matSection = document.createElement("div");
    matSection.className = "chap-subject";
    matSection.innerHTML = `<div class="chap-subject-head" style="--sc:#9b8fb0">Autres</div>`;
    const chapWrap = document.createElement("div");
    chapWrap.className = "chap-groups";
    extras.forEach(chap => {
      const exs = byChap.get(chap);
      const block = document.createElement("div");
      block.className = "chap-block";
      block.innerHTML = `<div class="chap-head"><span class="chap-name">${escapeHtml(chap)}</span><span class="chap-count">${exs.length}${exs.length>1?" exercices":" exercice"}</span></div>`;
      const grid = document.createElement("div");
      grid.className = "chap-grid";
      exs.forEach(ex => grid.appendChild(exerciseCard(ex)));
      block.appendChild(grid);
      chapWrap.appendChild(block);
    });
    matSection.appendChild(chapWrap);
    frag.appendChild(matSection);
  }

  list.appendChild(frag);
}

async function loadExercises() {
  const list = document.getElementById("list");
  const empty = document.getElementById("empty-state");
  list.innerHTML = Array(6).fill(0).map(() => `<div class="skeleton"><div class="skel-line" style="height:16px;width:55%"></div><div class="skel-line" style="height:20px;width:85%"></div><div class="skel-line" style="height:14px;width:92%"></div><div class="skel-line" style="height:14px;width:70%"></div></div>`).join("");
  empty.style.display = "none";
  let url = "/exercises";
  if (currentFilter) url += "?level=" + currentFilter;
  try {
    const res = await MB_AUTH.apiFetch(url);
    if (!res.ok) throw new Error();
    const data = await res.json();
    renderByChapter(data);
  } catch {
    // Serveur injoignable → mode démo local
    DEMO_MODE = true;
    const data = DEMO_EXERCISES.filter(ex => !currentFilter || ex.level === currentFilter);
    renderByChapter(data);
    showToast("Mode démo : banque locale (serveur non connecté).", "info");
  }
}

async function analyseExercise() {
  const title   = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  if (!title || !content) { showToast("Le titre et l'énoncé sont obligatoires.", "error"); return; }
  pendingExercise = { title, content, level: document.getElementById("level").value, subject: document.getElementById("subject").value, difficulty: document.getElementById("difficulty").value, solution: document.getElementById("solution").value.trim() || null };
  document.getElementById("step-input").style.display = "none";
  document.getElementById("step-result").style.display = "block";
  document.getElementById("ai-loading").style.display = "flex";
  document.getElementById("ai-doublon").style.display = "none";
  document.getElementById("ai-suggestions").style.display = "none";
  try {
    const res  = await fetch("/exercises/analyse", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({title,content}) });
    const data = await res.json();
    document.getElementById("ai-loading").style.display = "none";
    if (data.doublon) {
      document.getElementById("ai-doublon").style.display = "block";
      document.getElementById("ai-doublon-detail").innerHTML = `<strong>Raison :</strong> ${escapeHtml(data.doublon_raison||"Contenu très similaire.")}${data.doublon_id?`<br><strong>Exercice similaire :</strong> #${String(data.doublon_id).padStart(3,'0')}`:""}`;
    } else {
      document.getElementById("ai-suggestions").style.display = "block";
      document.getElementById("ai-classe").textContent    = data.classe    || "Non détecté";
      document.getElementById("ai-chapitre").textContent  = data.chapitre  || "Non détecté";
      document.getElementById("ai-difficulte").textContent = data.suggestion_difficulte || pendingExercise.difficulty;
      document.getElementById("ai-classe-input").value   = data.classe    || "";
      document.getElementById("ai-chapitre-input").value = data.chapitre  || "";
      pendingExercise.difficulty = data.suggestion_difficulte || pendingExercise.difficulty;
    }
  } catch { document.getElementById("ai-loading").style.display="none"; showToast("Erreur lors de l'analyse IA.","error"); backToInput(); }
}

async function confirmAdd() {
  if (!pendingExercise) return;
  pendingExercise.classe   = document.getElementById("ai-classe-input").value.trim()   || document.getElementById("ai-classe").textContent;
  pendingExercise.chapitre = document.getElementById("ai-chapitre-input").value.trim() || document.getElementById("ai-chapitre").textContent;
  await submitExercise(pendingExercise);
}

async function forceAdd() {
  if (!pendingExercise) return;
  await submitExercise(pendingExercise);
}

async function submitExercise(data) {
  try {
    const res = await fetch("/exercises", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data) });
    if (!res.ok) throw new Error();
    pendingExercise = null;
    showToast("Exercice ajouté avec succès !", "success");
    showView("browse");
  } catch { showToast("Erreur lors de l'ajout.", "error"); }
}

function backToInput() {
  document.getElementById("step-input").style.display = "block";
  document.getElementById("step-result").style.display = "none";
}

function openModal(ex) {
  const levelLabel = LEVEL_LABELS[ex.level] || ex.level;
  const diffTag    = ex.difficulty ? `<span class="tag tag-${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>` : "";
  const subjectTag = ex.subject    ? `<span class="tag tag-subject">${ex.subject}</span>` : "";
  const classeTag  = ex.classe     ? `<span class="tag tag-classe">${ex.classe}</span>` : "";
  const chapTag    = ex.chapitre   ? `<span class="tag tag-chapitre">${ex.chapitre}</span>` : "";
  const solutionHtml = ex.solution ? `<div class="modal-section"><div class="modal-section-label solution-toggle" onclick="toggleSolution(this)"><span>Solution</span><span class="solution-toggle-arrow">▼ Afficher</span></div><div class="solution-body"><div class="modal-section-text">${escapeHtml(ex.solution)}</div></div></div>` : "";
  const classHtml = (ex.classe||ex.chapitre) ? `<div class="modal-section"><div class="modal-section-label">Classification IA</div><div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.3rem">${classeTag}${chapTag}</div></div>` : "";
  document.getElementById("modal-content").innerHTML = `
    <div class="modal-tags"><span class="tag tag-${ex.level}">${levelLabel}</span>${diffTag}${subjectTag}</div>
    <div class="modal-title">${escapeHtml(ex.title)}</div>
    ${classHtml}
    <div class="modal-section"><div class="modal-section-label">Énoncé</div><div class="modal-section-text">${escapeHtml(ex.content)}</div></div>
    ${solutionHtml}
    <div class="modal-delete-zone"><button class="btn-delete" onclick="deleteExercise(${ex.id})">Supprimer cet exercice</button></div>`;
  document.getElementById("modal-overlay").classList.add("open");
}

async function deleteExercise(id) {
  if (!confirm("Supprimer définitivement cet exercice ?")) return;
  try {
    const res = await fetch("/exercises/" + id, { method:"DELETE" });
    if (!res.ok) throw new Error();
    closeModal(); showToast("Exercice supprimé.", "success"); loadExercises();
  } catch { showToast("Erreur lors de la suppression.", "error"); }
}

function closeModal() { document.getElementById("modal-overlay").classList.remove("open"); }
function toggleSolution(el) {
  const body = el.parentElement.querySelector(".solution-body");
  const arrow = el.querySelector(".solution-toggle-arrow");
  body.classList.toggle("open");
  arrow.textContent = body.classList.contains("open") ? "▲ Masquer" : "▼ Afficher";
}
function showToast(msg, type="info") {
  const t = document.getElementById("toast");
  t.textContent = msg; t.className = "toast "+type+" show";
  setTimeout(() => t.classList.remove("show"), 3500);
}
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

/* ══════════════════════════════════════
   SÉANCE — État global
══════════════════════════════════════ */
let seanceLevel  = "";
let seanceDiff   = "";
let seanceExercises  = [];
let seanceIndex      = 0;
let seanceCorrect    = 0;
let seanceWrong      = 0;
let seanceSkipped    = 0;
let seanceHistory    = [];   // par exercice : { answer, result, skipped } ou null
let seanceMax        = 0;    // exercice le plus loin atteint
let isTurning        = false;

function resetSeanceWelcome() {
  document.getElementById("seance-welcome").style.display = "";
  document.getElementById("seance-session").style.display = "none";
  document.getElementById("seance-results").style.display = "none";
}

function selectLevel(btn, level) {
  document.querySelectorAll(".seance-level-card").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  seanceLevel = level;
}

function selectDiff(btn, diff) {
  document.querySelectorAll(".seance-diff-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  seanceDiff = diff;
}

async function startSeance() {
  const btn     = document.getElementById("seance-start-btn");
  const label   = document.getElementById("seance-start-label");
  const spinner = document.getElementById("seance-start-spinner");
  btn.disabled = true;
  label.style.display = "none";
  spinner.style.display = "block";

  try {
    let url = "/exercises";
    const params = new URLSearchParams();
    if (seanceLevel) params.append("level", seanceLevel);
    if (seanceDiff)  params.append("difficulty", seanceDiff);
    if ([...params].length) url += "?" + params.toString();

    let data;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error();
      data = await res.json();
      DEMO_MODE = false;
    } catch {
      DEMO_MODE = true;
      data = DEMO_EXERCISES.filter(ex =>
        (!seanceLevel || ex.level === seanceLevel) &&
        (!seanceDiff  || ex.difficulty === seanceDiff));
    }

    if (!data.length) {
      showToast("Aucun exercice trouvé pour ces filtres.", "error");
      return;
    }

    // Mélange aléatoire
    seanceExercises = [...data].sort(() => Math.random() - 0.5);
    seanceHistory = seanceExercises.map(() => null);
    seanceIndex   = 0;
    seanceMax     = 0;
    seanceCorrect = 0;
    seanceWrong   = 0;
    seanceSkipped = 0;

    document.getElementById("seance-welcome").style.display = "none";
    document.getElementById("seance-session").style.display = "";
    paintAll();

  } catch {
    showToast("Erreur de connexion au serveur.", "error");
  } finally {
    btn.disabled = false;
    label.style.display = "";
    spinner.style.display = "none";
  }
}

/* ── PEINDRE LE LIVRE ──
   paintLeft : énoncé + brouillon de l'élève (page gauche)
   paintRight: réaction du tuteur (page droite)
   paintNav  : barre de progression, score, boutons feuilleter
   Les peintures sont séparées pour pouvoir rafraîchir une page pendant
   qu'elle est cachée par le feuillet qui se tourne (pas de clignotement). */

function paintLeft() {
  const ex   = seanceExercises[seanceIndex];
  const hist = seanceHistory[seanceIndex];

  const levelLabel = LEVEL_LABELS[ex.level] || ex.level;
  const diffTag    = ex.difficulty ? `<span class="tag tag-${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>` : "";
  const subjectTag = ex.subject    ? `<span class="tag tag-subject">${ex.subject}</span>` : "";
  const classeTag  = ex.classe     ? `<span class="tag tag-classe">${ex.classe}</span>` : "";
  const chapTag    = ex.chapitre   ? `<span class="tag tag-chapitre">${ex.chapitre}</span>` : "";
  document.getElementById("session-card-tags").innerHTML =
    `<span class="tag tag-${ex.level}">${levelLabel}</span>${diffTag}${subjectTag}${classeTag}${chapTag}`;

  document.getElementById("left-folio").textContent          = `#${String(ex.id).padStart(3, "0")}`;
  document.getElementById("session-card-title").textContent  = ex.title;
  document.getElementById("session-card-content").textContent = ex.content;

  const ta    = document.getElementById("session-answer");
  const zone  = document.getElementById("page-answer");
  const label = document.getElementById("page-answer-label");
  const answered = hist && (hist.result || hist.skipped);

  const btnCorrect = document.getElementById("btn-correct");
  if (answered) {
    ta.value    = hist.answer || "";
    ta.readOnly = true;
    zone.classList.add("locked");
    label.textContent = hist.skipped ? "Exercice passé" : "Ce que tu as écrit";
    if (btnCorrect) btnCorrect.disabled = true;
  } else {
    ta.value    = hist && hist.answer ? hist.answer : "";
    ta.readOnly = false;
    zone.classList.remove("locked");
    label.textContent = "Ton brouillon";
    if (btnCorrect) btnCorrect.disabled = false;
  }
}

function paintRight() {
  const hist = seanceHistory[seanceIndex];
  showTutor(
    hist && hist.result ? "result"
    : hist && hist.skipped ? "skipped"
    : "empty",
    hist && hist.result
  );
}

function showTutor(state, result) {
  ["tutor-empty", "tutor-loading", "tutor-skipped", "tutor-result"].forEach(id => {
    document.getElementById(id).style.display = "none";
  });
  document.getElementById("tutor-" + state).style.display = state === "result" ? "block" : "flex";

  if (state === "result" && result) {
    const verdictMap = {
      correct:   { label: "Bonne réponse",          cls: "correct"   },
      partial:   { label: "Presque — à peaufiner",  cls: "partial"   },
      incorrect: { label: "Réponse à revoir",       cls: "incorrect" }
    };
    const v = verdictMap[result.verdict] || verdictMap.incorrect;
    const verdict = document.getElementById("tutor-verdict");
    verdict.textContent = v.label;
    verdict.className   = `tutor-verdict ${v.cls}`;

    document.getElementById("tutor-analyse").textContent  = result.analyse  || "—";
    document.getElementById("tutor-demarche").textContent = result.demarche || "—";
    document.getElementById("tutor-solution").textContent = result.solution || "—";
  }
}

function paintNav() {
  const total = seanceExercises.length;
  const hist  = seanceHistory[seanceIndex];
  const answered = hist && (hist.result || hist.skipped);
  const isLast   = seanceIndex === total - 1;

  document.getElementById("session-progress-fill").style.width =
    (((answered ? seanceIndex + 1 : seanceIndex) / total) * 100) + "%";
  document.getElementById("session-progress-label").textContent = `${seanceIndex + 1} / ${total}`;

  updateScoreboard();

  // Précédent
  document.getElementById("book-prev").disabled = seanceIndex === 0;

  // Suivant : visible seulement une fois l'exercice traité
  const next = document.getElementById("book-next");
  if (answered) {
    next.style.visibility = "visible";
    next.querySelector(".bpb-arrow").textContent = isLast ? "✦" : "→";
    next.childNodes[0].nodeValue = isLast ? "Voir les résultats " : "Page suivante ";
  } else {
    next.style.visibility = "hidden";
  }
}

function updateScoreboard() {
  let c = 0, w = 0, s = 0;
  seanceHistory.forEach(h => {
    if (!h) return;
    if (h.skipped) { s++; }
    else if (h.result) {
      if (h.result.verdict === "correct" || h.result.verdict === "partial") c++;
      else w++;
    }
  });
  seanceCorrect = c; seanceWrong = w; seanceSkipped = s;
  document.getElementById("score-correct").textContent = `✓ ${c}`;
  document.getElementById("score-wrong").textContent   = `✗ ${w}`;
  document.getElementById("score-skip").textContent    = `→ ${s}`;
}

function paintAll() {
  paintLeft();
  paintRight();
  paintNav();
}

/* ── TOURNER LA PAGE ──
   Un feuillet de parchemin pivote sur la reliure. La page cachée au départ
   est repeinte à t=0, la page cachée en 2ᵉ moitié est repeinte au milieu. */
function goTo(target, direction) {
  if (isTurning || target < 0 || target >= seanceExercises.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = window.matchMedia("(max-width: 860px)").matches;

  if (reduce) { seanceIndex = target; paintAll(); return; }

  if (mobile) {
    const spread = document.getElementById("book-spread");
    spread.classList.add("fading");
    setTimeout(() => {
      seanceIndex = target; paintAll();
      requestAnimationFrame(() => spread.classList.remove("fading"));
    }, 180);
    return;
  }

  isTurning = true;
  const leaf = document.getElementById("page-leaf");
  leaf.className = "page-leaf show";
  void leaf.offsetWidth; // reflow

  seanceIndex = target;
  // page cachée dès le début par le feuillet
  if (direction === "next") paintRight(); else paintLeft();

  const from = direction === "next" ? 0 : -180;
  const to   = direction === "next" ? -180 : 0;
  const anim = leaf.animate(
    [{ transform: `rotateY(${from}deg)` }, { transform: `rotateY(${to}deg)` }],
    { duration: 660, easing: "cubic-bezier(.62,.04,.34,1)" }
  );

  // au milieu, le feuillet couvre l'autre page : on la repeint
  setTimeout(() => {
    if (direction === "next") paintLeft(); else paintRight();
    paintNav();
  }, 350);

  anim.onfinish = () => { leaf.className = "page-leaf"; isTurning = false; };
}

async function submitAnswer() {
  const ta     = document.getElementById("session-answer");
  const answer = ta.value.trim();
  if (!answer) { showToast("Écris ton brouillon avant de corriger.", "error"); return; }
  if (isTurning) return;

  const ex  = seanceExercises[seanceIndex];
  const btn = document.getElementById("btn-correct");
  btn.disabled = true;
  showTutor("loading");

  try {
    let result;
    if (DEMO_MODE) {
      await new Promise(r => setTimeout(r, 650)); // le tuteur "lit" la copie
      result = demoCorrect(ex, answer);
    } else {
      const res = await fetch("/exercises/correct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exercise: ex, answer })
      });
      if (!res.ok) throw new Error("Erreur serveur (" + res.status + ")");
      result = await res.json();
      if (result.error) throw new Error(result.error);
    }

    // Enregistrer dans l'historique (relisible plus tard)
    seanceHistory[seanceIndex] = { answer, result, skipped: false };
    if (seanceIndex > seanceMax) seanceMax = seanceIndex;

    // Verrouiller le brouillon, afficher la correction
    ta.readOnly = true;
    document.getElementById("page-answer").classList.add("locked");
    document.getElementById("page-answer-label").textContent = "Ce que tu as écrit";
    showTutor("result", result);
    paintNav();

  } catch (err) {
    showToast("Erreur lors de la correction : " + (err.message || ""), "error");
    showTutor("empty");
    btn.disabled = false;
  }
}

function skipExercise() {
  if (isTurning) return;
  const ta = document.getElementById("session-answer");
  seanceHistory[seanceIndex] = { answer: ta.value.trim(), result: null, skipped: true };
  if (seanceIndex > seanceMax) seanceMax = seanceIndex;

  if (seanceIndex >= seanceExercises.length - 1) {
    paintAll();
    showResults();
  } else {
    goTo(seanceIndex + 1, "next");
  }
}

function nextExercise() {
  if (isTurning) return;
  const isLast = seanceIndex >= seanceExercises.length - 1;
  if (isLast) { showResults(); return; }
  goTo(seanceIndex + 1, "next");
}

function prevExercise() {
  if (isTurning || seanceIndex === 0) return;
  goTo(seanceIndex - 1, "prev");
}

function showResults() {
  document.getElementById("seance-session").style.display  = "none";
  document.getElementById("seance-results").style.display  = "";

  const total    = seanceExercises.length;
  const answered = seanceCorrect + seanceWrong;
  const pct      = answered > 0 ? Math.round((seanceCorrect / answered) * 100) : 0;

  document.getElementById("results-score").textContent = pct + "%";

  let title, sub;
  if (pct >= 80) {
    title = "Excellent travail,\n<em>séance terminée.</em>";
    sub   = "Tu maîtrises bien ces exercices. Continue ainsi !";
  } else if (pct >= 50) {
    title = "Bon effort,\n<em>séance terminée.</em>";
    sub   = "Tu progresses bien. Quelques points à retravailler.";
  } else {
    title = "Continue à pratiquer,\n<em>séance terminée.</em>";
    sub   = "La régularité paie. Recommence pour t'améliorer.";
  }
  document.getElementById("results-title").innerHTML = title.replace("\n","<br>");
  document.getElementById("results-sub").textContent  = sub;
  document.getElementById("results-detail").textContent =
    `Tu as traité ${total} exercice${total>1?"s":""} avec ${seanceCorrect} bonne${seanceCorrect>1?"s":""} réponse${seanceCorrect>1?"s":""}.`;

  document.getElementById("res-correct").textContent = seanceCorrect;
  document.getElementById("res-wrong").textContent   = seanceWrong;
  document.getElementById("res-skip").textContent    = seanceSkipped;

  // Barre de progression à 100%
  document.getElementById("session-progress-fill").style.width = "100%";
}

function restartSeance() {
  resetSeanceWelcome();
}

/* ── Liens profonds : app.html#seance ouvre directement la séance ── */
if (location.hash === "#seance") {
  showView("seance");
  loadExercises();
} else {
  loadExercises();
}
