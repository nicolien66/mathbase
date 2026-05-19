/* ── CURSEUR PERSONNALISÉ ── */
// Clé Mistral chargée depuis le serveur
let MISTRAL_KEY = "";
fetch("/config").then(r => r.json()).then(d => { MISTRAL_KEY = d.mistralKey; }).catch(() => {});
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

async function loadExercises() {
  const list = document.getElementById("list");
  const empty = document.getElementById("empty-state");
  const badge = document.getElementById("total-num");
  list.innerHTML = Array(6).fill(0).map(() => `<div class="skeleton"><div class="skel-line" style="height:16px;width:55%"></div><div class="skel-line" style="height:20px;width:85%"></div><div class="skel-line" style="height:14px;width:92%"></div><div class="skel-line" style="height:14px;width:70%"></div></div>`).join("");
  empty.style.display = "none";
  let url = "/exercises";
  if (currentFilter) url += "?level=" + currentFilter;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    const data = await res.json();
    badge.textContent = data.length;
    list.innerHTML = "";
    if (data.length === 0) { empty.style.display = "block"; return; }
    data.forEach(ex => {
      const card = document.createElement("div");
      card.className = "exercise-card";
      card.onclick = () => openModal(ex);
      const levelLabel = LEVEL_LABELS[ex.level] || ex.level;
      const diffTag    = ex.difficulty ? `<span class="tag tag-${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>` : "";
      const subjectTag = ex.subject    ? `<span class="tag tag-subject">${ex.subject}</span>` : "";
      const classeTag  = ex.classe     ? `<span class="tag tag-classe">${ex.classe}</span>` : "";
      const chapTag    = ex.chapitre   ? `<span class="tag tag-chapitre">${ex.chapitre}</span>` : "";
      card.innerHTML = `
        <div class="card-tags"><span class="tag tag-${ex.level}">${levelLabel}</span>${diffTag}${subjectTag}</div>
        <div class="card-title">${escapeHtml(ex.title)}</div>
        <div class="card-preview">${escapeHtml(ex.content)}</div>
        ${classeTag||chapTag ? `<div class="card-tags">${classeTag}${chapTag}</div>` : ""}
        <div class="card-footer"><span>#${String(ex.id).padStart(3,'0')}</span><span class="card-arrow">Voir →</span></div>`;
      list.appendChild(card);
    });
  } catch { list.innerHTML = ""; showToast("Erreur de connexion au serveur.", "error"); }
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

    const res = await fetch(url);
    if (!res.ok) throw new Error();
    const data = await res.json();

    if (!data.length) {
      showToast("Aucun exercice trouvé pour ces filtres.", "error");
      return;
    }

    // Mélange aléatoire
    seanceExercises = [...data].sort(() => Math.random() - 0.5);
    seanceIndex   = 0;
    seanceCorrect = 0;
    seanceWrong   = 0;
    seanceSkipped = 0;

    document.getElementById("seance-welcome").style.display = "none";
    document.getElementById("seance-session").style.display = "";
    renderExercise();

  } catch {
    showToast("Erreur de connexion au serveur.", "error");
  } finally {
    btn.disabled = false;
    label.style.display = "";
    spinner.style.display = "none";
  }
}

function renderExercise() {
  const ex    = seanceExercises[seanceIndex];
  const total = seanceExercises.length;

  // Progression
  const pct = ((seanceIndex) / total) * 100;
  document.getElementById("session-progress-fill").style.width = pct + "%";
  document.getElementById("session-progress-label").textContent = `${seanceIndex + 1} / ${total}`;

  // Scores
  document.getElementById("score-correct").textContent = `✓ ${seanceCorrect}`;
  document.getElementById("score-wrong").textContent   = `✗ ${seanceWrong}`;
  document.getElementById("score-skip").textContent    = `→ ${seanceSkipped}`;

  // Tags
  const levelLabel = LEVEL_LABELS[ex.level] || ex.level;
  const diffTag    = ex.difficulty ? `<span class="tag tag-${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>` : "";
  const subjectTag = ex.subject    ? `<span class="tag tag-subject">${ex.subject}</span>` : "";
  const classeTag  = ex.classe     ? `<span class="tag tag-classe">${ex.classe}</span>` : "";
  const chapTag    = ex.chapitre   ? `<span class="tag tag-chapitre">${ex.chapitre}</span>` : "";
  document.getElementById("session-card-tags").innerHTML =
    `<span class="tag tag-${ex.level}">${levelLabel}</span>${diffTag}${subjectTag}${classeTag}${chapTag}`;

  document.getElementById("session-card-num").textContent     = `#${String(ex.id).padStart(3,"0")}`;
  document.getElementById("session-card-title").textContent   = ex.title;
  document.getElementById("session-card-content").textContent = ex.content;

  // Reset
  document.getElementById("session-answer").value = "";
  document.getElementById("session-answer-zone").style.display = "";
  document.getElementById("session-feedback").style.display    = "none";
  document.getElementById("session-feedback-loading").style.display = "flex";
  document.getElementById("session-feedback-result").style.display  = "none";
}

async function submitAnswer() {
  const answer = document.getElementById("session-answer").value.trim();
  if (!answer) { showToast("Écris une réponse avant de corriger.", "error"); return; }

  const ex = seanceExercises[seanceIndex];

  // Afficher zone feedback / masquer zone réponse
  document.getElementById("session-answer-zone").style.display = "none";
  document.getElementById("session-feedback").style.display    = "";
  document.getElementById("session-feedback-loading").style.display = "flex";
  document.getElementById("session-feedback-result").style.display  = "none";

  try {
    const solutionCtx = ex.solution ? `\nSOLUTION OFFICIELLE : ${ex.solution}` : "";
    const prompt = `Tu es un tuteur en mathématiques bienveillant et pédagogue.\n\nEXERCICE : ${ex.title}\nÉNONCÉ : ${ex.content}${solutionCtx}\n\nRÉPONSE DE L'ÉLÈVE : ${answer}\n\nÉvalue la réponse et réponds UNIQUEMENT en JSON valide, sans markdown :\n{\n  "verdict": "correct" | "partial" | "incorrect",\n  "feedback": "explication courte et encourageante (2-3 phrases)",\n  "conseil": "une piste concrète pour progresser (1 phrase)"\n}`;

    const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${MISTRAL_KEY}`
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.1,
        max_tokens: 400
      })
    });

    if (!res.ok) throw new Error("Erreur API Mistral");
    const data  = await res.json();
    const raw   = data.choices[0].message.content;
    const clean = raw.replace(/```json|```/g, "").trim();
    const result = JSON.parse(clean);

    // Mettre à jour les scores
    if (result.verdict === "correct")   seanceCorrect++;
    else if (result.verdict === "partial") seanceCorrect++;   // compté comme correct
    else                               seanceWrong++;

    // Afficher le feedback
    const verdictMap = {
      correct:   { label: "✓ Bonne réponse !",      cls: "correct"   },
      partial:   { label: "◑ Partiellement correct", cls: "partial"   },
      incorrect: { label: "✗ Réponse incorrecte",    cls: "incorrect" }
    };
    const v = verdictMap[result.verdict] || verdictMap.incorrect;
    const banner = document.getElementById("feedback-verdict-banner");
    banner.textContent = v.label;
    banner.className = `feedback-verdict-banner ${v.cls}`;

    document.getElementById("feedback-text").textContent    = result.feedback;
    document.getElementById("feedback-conseil").textContent = result.conseil;

    const isLast = seanceIndex >= seanceExercises.length - 1;
    document.getElementById("session-next-btn").textContent =
      isLast ? "Voir les résultats →" : "Exercice suivant →";

    document.getElementById("session-feedback-loading").style.display = "none";
    document.getElementById("session-feedback-result").style.display  = "";

    // MàJ scores affichés
    document.getElementById("score-correct").textContent = `✓ ${seanceCorrect}`;
    document.getElementById("score-wrong").textContent   = `✗ ${seanceWrong}`;

  } catch(err) {
    showToast("Erreur lors de la correction IA : " + (err.message || ""), "error");
    document.getElementById("session-answer-zone").style.display = "";
    document.getElementById("session-feedback").style.display    = "none";
  }
}

function skipExercise() {
  seanceSkipped++;
  document.getElementById("score-skip").textContent = `→ ${seanceSkipped}`;
  nextExercise();
}

function nextExercise() {
  seanceIndex++;
  if (seanceIndex >= seanceExercises.length) {
    showResults();
  } else {
    renderExercise();
  }
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

loadExercises();
