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
    cursor.style.width  = '5px';
    cursor.style.height = '5px';
    cursorRing.style.width  = '46px';
    cursorRing.style.height = '46px';
    cursorRing.style.borderColor = 'rgba(200,185,122,0.6)';
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.closest('a,button,select,input,textarea,.exercise-card,.modal-close')) {
    cursor.style.width  = '8px';
    cursor.style.height = '8px';
    cursorRing.style.width  = '32px';
    cursorRing.style.height = '32px';
    cursorRing.style.borderColor = 'rgba(200,185,122,0.45)';
  }
});

/* ── ÉTAT GLOBAL ── */
let currentFilter = "";

/* ── NAVIGATION ENTRE VUES ── */
function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

  document.getElementById("view-" + name).classList.add("active");

  const tabMap = { browse: 0, add: 1 };
  document.querySelectorAll(".tab")[tabMap[name]]?.classList.add("active");

  if (name === "browse") loadExercises();
}

/* ── FILTRE ── */
function setFilter(btn, level) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = level;
  loadExercises();
}

/* ── LABELS LISIBLES ── */
const LEVEL_LABELS = {
  primaire:   "Primaire",
  college:    "Collège",
  lycee:      "Lycée",
  universite: "Université"
};

/* ── CHARGER ET AFFICHER LES EXERCICES ── */
async function loadExercises() {
  const list  = document.getElementById("list");
  const empty = document.getElementById("empty-state");
  const badge = document.getElementById("total-num");

  // Skeleton loaders
  list.innerHTML = Array(6).fill(0).map(() => `
    <div class="skeleton">
      <div class="skel-line" style="height:16px;width:55%"></div>
      <div class="skel-line" style="height:20px;width:85%"></div>
      <div class="skel-line" style="height:14px;width:92%"></div>
      <div class="skel-line" style="height:14px;width:70%"></div>
    </div>
  `).join("");
  empty.style.display = "none";

  let url = "/exercises";
  if (currentFilter) url += "?level=" + currentFilter;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Erreur serveur");
    const data = await res.json();

    badge.textContent = data.length;
    list.innerHTML = "";

    if (data.length === 0) {
      empty.style.display = "block";
      return;
    }

    data.forEach(ex => {
      const card = document.createElement("div");
      card.className = "exercise-card";
      card.onclick = () => openModal(ex);

      const levelLabel = LEVEL_LABELS[ex.level] || ex.level;
      const diffTag    = ex.difficulty ? `<span class="tag tag-${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>` : "";
      const subjectTag = ex.subject    ? `<span class="tag tag-subject">${ex.subject}</span>` : "";

      card.innerHTML = `
        <div class="card-tags">
          <span class="tag tag-${ex.level}">${levelLabel}</span>
          ${diffTag}
          ${subjectTag}
        </div>
        <div class="card-title">${escapeHtml(ex.title)}</div>
        <div class="card-preview">${escapeHtml(ex.content)}</div>
        <div class="card-footer">
          <span>#${String(ex.id).padStart(3,'0')}</span>
          <span class="card-arrow">Voir →</span>
        </div>
      `;

      list.appendChild(card);
    });

  } catch (err) {
    list.innerHTML = "";
    showToast("Erreur de connexion au serveur.", "error");
  }
}

/* ── AJOUTER UN EXERCICE ── */
async function addExercise() {
  const title      = document.getElementById("title").value.trim();
  const content    = document.getElementById("content").value.trim();
  const solution   = document.getElementById("solution").value.trim();
  const level      = document.getElementById("level").value;
  const subject    = document.getElementById("subject").value;
  const difficulty = document.getElementById("difficulty").value;

  if (!title || !content) {
    showToast("Le titre et l'énoncé sont obligatoires.", "error");
    return;
  }

  try {
    const res = await fetch("/exercises", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, level, subject, difficulty, solution: solution || null })
    });

    if (!res.ok) throw new Error();

    // Reset
    document.getElementById("title").value    = "";
    document.getElementById("content").value  = "";
    document.getElementById("solution").value = "";

    showToast("Exercice ajouté avec succès !", "success");
    showView("browse");

  } catch {
    showToast("Erreur lors de l'ajout.", "error");
  }
}

/* ── MODAL DÉTAIL ── */
function openModal(ex) {
  const levelLabel = LEVEL_LABELS[ex.level] || ex.level;
  const diffTag    = ex.difficulty ? `<span class="tag tag-${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>` : "";
  const subjectTag = ex.subject    ? `<span class="tag tag-subject">${ex.subject}</span>` : "";

  const solutionHtml = ex.solution ? `
    <div class="modal-section">
      <div class="modal-section-label solution-toggle" onclick="toggleSolution(this)">
        <span>Solution</span>
        <span class="solution-toggle-arrow">▼ Afficher</span>
      </div>
      <div class="solution-body">
        <div class="modal-section-text">${escapeHtml(ex.solution)}</div>
      </div>
    </div>
  ` : "";

  document.getElementById("modal-content").innerHTML = `
    <div class="modal-tags">
      <span class="tag tag-${ex.level}">${levelLabel}</span>
      ${diffTag}
      ${subjectTag}
    </div>
    <div class="modal-title">${escapeHtml(ex.title)}</div>
    <div class="modal-section">
      <div class="modal-section-label">Énoncé</div>
      <div class="modal-section-text">${escapeHtml(ex.content)}</div>
    </div>
    ${solutionHtml}
    <div class="modal-delete-zone">
      <button class="btn-delete" onclick="deleteExercise(${ex.id})">Supprimer cet exercice</button>
    </div>
  `;

  document.getElementById("modal-overlay").classList.add("open");
}

/* ── SUPPRIMER UN EXERCICE ── */
async function deleteExercise(id) {
  if (!confirm("Supprimer définitivement cet exercice ?")) return;

  try {
    const res = await fetch("/exercises/" + id, { method: "DELETE" });
    if (!res.ok) throw new Error();

    closeModal();
    showToast("Exercice supprimé.", "success");
    loadExercises();

  } catch {
    showToast("Erreur lors de la suppression.", "error");
  }
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

function toggleSolution(el) {
  const body  = el.parentElement.querySelector(".solution-body");
  const arrow = el.querySelector(".solution-toggle-arrow");
  body.classList.toggle("open");
  arrow.textContent = body.classList.contains("open") ? "▲ Masquer" : "▼ Afficher";
}

/* ── TOAST ── */
function showToast(msg, type = "info") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast " + type + " show";
  setTimeout(() => t.classList.remove("show"), 3500);
}

/* ── SÉCURITÉ XSS ── */
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ── INIT ── */
loadExercises();
