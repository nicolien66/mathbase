/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — permis.js : cours et entraînement au permis (voiture, piéton)

   Une seule page (permis.html?permis=voiture|pieton). Les données viennent de
   permis/permis-<id>*.js (voir permis/FORMAT-PERMIS.md), les panneaux de
   permis/panneaux.js.

   · Cours : chapitres groupés par thème, panneaux dessinés dans le texte.
   · S'entraîner : par thème, par chapitre, par panneau, série rapide ou
     « mes erreurs » — correction et explication après chaque question.
   · Examen blanc : comme le vrai — questions tirées dans tous les thèmes,
     temps limité par question, pas de retour en arrière, correction à la fin.
   · Mémoire locale : chapitres lus, dernière réponse à chaque question,
     historique des examens blancs.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const PERMIS = {
    voiture: {
      nom: "Permis de voiture", sous: "Code de la route · permis B", icone: "🚗", couleur: "#c87a7a",
      fichiers: ["permis/permis-voiture-1.js", "permis/permis-voiture-2.js"],
      intro: "Tout le programme de l'examen théorique général (le « code »), rangé selon ses dix thèmes officiels. Lis le cours, entraîne-toi thème par thème, puis passe des examens blancs dans les conditions du jour J.",
      examen: { nb: 40, seuil: 35, chrono: 20, nom: "Examen blanc du code",
        regle: "40 questions tirées dans les dix thèmes, 20 secondes par question, pas de retour en arrière. Réussi à partir de 35 bonnes réponses, comme à l'examen." },
      themes: {
        L: "Dispositions légales en matière de circulation routière", C: "Le conducteur", R: "La route",
        U: "Les autres usagers de la route", D: "Réglementation générale et divers", P: "Premiers secours",
        A: "Prendre et quitter son véhicule", M: "Éléments mécaniques liés à la sécurité",
        S: "Équipements de sécurité des véhicules", E: "Environnement",
      },
    },
    pieton: {
      nom: "Permis piéton", sous: "Se déplacer seul en sécurité", icone: "🚸", couleur: "#7ac8b4",
      fichiers: ["permis/permis-pieton.js"],
      intro: "Pour apprendre à aller seul à l'école, chez un copain ou au parc sans danger. Lis chaque leçon, entraîne-toi avec les questions, puis passe le test : si tu as presque tout juste, tu es prêt !",
      examen: { nb: 15, seuil: 12, chrono: 0, nom: "Test du permis piéton",
        regle: "15 questions sur toutes les leçons, sans limite de temps. Le test est réussi à partir de 12 bonnes réponses." },
      themes: null,   // un thème par chapitre : on reprend leurs titres
    },
    mer: {
      nom: "Code de la mer", sous: "Permis plaisance · option côtière", icone: "⛵", couleur: "#7a9ec8",
      fichiers: ["permis/permis-mer.js"],
      intro: "Toute la théorie de l'option côtière du permis bateau : balisage, règles de barre et de route, feux et signaux, météo, sécurité, réglementation. Lis le cours, entraîne-toi, puis passe l'examen blanc.",
      examen: { nb: 30, seuil: 25, chrono: 0, nom: "Examen blanc du code de la mer",
        regle: "30 questions tirées dans tous les thèmes. Comme à l'examen, il faut au moins 25 bonnes réponses (5 erreurs au maximum)." },
      themes: null,   // définis dans le fichier de données
    },
    caces: {
      nom: "CACES", sous: "Préparation au test théorique", icone: "🏗️", couleur: "#d4c46a",
      fichiers: ["permis/permis-caces.js"],
      intro: "Uniquement ce qu'il faut pour réussir le QCM du test théorique : le tronc commun (réglementation, responsabilités, sécurité) puis les connaissances propres aux chariots, aux nacelles et aux engins de chantier.",
      examen: { nb: 40, seuil: 28, chrono: 0, nom: "QCM d'évaluation blanc",
        regle: "40 questions tirées dans tous les thèmes, sans limite de temps. Réussi à partir de 28 bonnes réponses (70 %). Le barème exact du vrai test dépend de l'organisme testeur." },
      themes: null,
    },
    haccp: {
      nom: "Hygiène alimentaire (HACCP)", sous: "Préparation au QCM d'évaluation", icone: "🧼", couleur: "#82d2a0",
      fichiers: ["permis/permis-haccp.js"],
      intro: "Tout ce que demande le QCM d'évaluation de la formation hygiène alimentaire en restauration : microbes, dangers, températures, nettoyage, traçabilité, allergènes, réglementation et méthode HACCP.",
      examen: { nb: 30, seuil: 24, chrono: 0, nom: "QCM d'évaluation blanc",
        regle: "30 questions tirées dans tous les thèmes, sans limite de temps. Réussi à partir de 24 bonnes réponses (80 %). Le seuil exact dépend de l'organisme de formation." },
      themes: null,
    },
  };
  const LETTRES = "ABCD";
  const SERIE = 20;            // nombre de questions d'une série d'entraînement

  const $ = id => document.getElementById(id);
  const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  const melange = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const normalise = t => String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  const params = new URLSearchParams(location.search);
  const permisId = params.get("permis") || "";
  const CFG = PERMIS[permisId];

  let D = null;                 // { chapitres, questions }
  let THEMES = [];              // [{ code, nom, chapitres:[], questions:[] }]
  let MEMO = { lus: {}, dernier: null, stats: {}, examens: [] };
  let vueCourante = "accueil", chapCourant = null;
  let SESSION = null;           // la série ou l'examen en cours
  let minuteur = null;

  /* ── mémoire locale ── */
  function cleMemo() {
    const u = window.MB_AUTH && MB_AUTH.user();
    return "mb_permis_" + permisId + "_" + (u ? (u.id || u.email || "anon") : "anon");
  }
  function chargerMemo() {
    try { const m = JSON.parse(localStorage.getItem(cleMemo())); if (m && typeof m === "object") MEMO = Object.assign({ lus: {}, dernier: null, stats: {}, examens: [] }, m); } catch (_) {}
  }
  function sauverMemo() { try { localStorage.setItem(cleMemo(), JSON.stringify(MEMO)); } catch (_) {} }

  let toastT;
  function toast(t) { const e = $("toast"); e.textContent = t; e.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => e.classList.remove("on"), 2400); }

  function dessinerMenu() {
    $("som-menu").innerHTML = Object.entries(PERMIS).map(([id, p]) =>
      `<a href="permis.html?permis=${id}" class="${id === permisId ? "actif" : ""}"><span class="m-ic">${p.icone}</span>${esc(p.nom)}</a>`).join("");
    $("som-switch").onclick = e => { e.stopPropagation(); $("som-menu").classList.toggle("on"); };
    document.addEventListener("click", () => $("som-menu").classList.remove("on"));
  }

  /* ── chargement ── */
  function erreur(html) { $("vue-accueil").innerHTML = `<div class="erreur">${html}</div>`; $("som-liste").innerHTML = ""; }
  dessinerMenu();
  if (!CFG) {
    erreur(`<p style="font-family:var(--serif);font-size:1.4rem;margin-bottom:1rem">Quel permis ?</p>` +
      Object.entries(PERMIS).map(([id, p]) => `<a class="btn" style="margin:.25rem" href="permis.html?permis=${id}">${p.icone} ${esc(p.nom)}</a>`).join(""));
    return;
  }
  document.documentElement.style.setProperty("--sc", CFG.couleur);
  document.title = "Polymates — " + CFG.nom;
  $("som-icone").textContent = CFG.icone;
  $("som-nom").textContent = CFG.nom;
  $("som-sous").textContent = CFG.sous;
  $("fil").innerHTML = `<b>${esc(CFG.nom)}</b>`;
  $("vue-accueil").innerHTML = `<div class="vide">Chargement…</div>`;

  (function charger(i) {
    if (i >= CFG.fichiers.length) {
      D = window.PERMIS_COURS && window.PERMIS_COURS[permisId];
      return D && D.chapitres.length ? demarrer() : erreur("Le cours est introuvable.");
    }
    const s = document.createElement("script");
    s.src = CFG.fichiers[i];
    s.onload = () => charger(i + 1);
    s.onerror = () => erreur(`<p>Le fichier <code>${esc(CFG.fichiers[i])}</code> n'a pas pu être chargé.</p>`);
    document.head.appendChild(s);
  })(0);

  /* ── démarrage ── */
  function demarrer() {
    let num = 0;
    D.chapitres.forEach(c => { c.num = ++num; });
    const parCode = new Map();
    D.chapitres.forEach(c => {
      const noms = CFG.themes || D.themes;
      if (!parCode.has(c.theme)) parCode.set(c.theme, { code: c.theme, nom: (noms && noms[c.theme]) || c.titre, chapitres: [], questions: [] });
      parCode.get(c.theme).chapitres.push(c);
    });
    /* ordre des thèmes : celui de la configuration, sinon celui des chapitres */
    const noms = CFG.themes || D.themes;
    const ordre = noms ? Object.keys(noms).concat([...parCode.keys()].filter(k => !(k in noms))) : [...parCode.keys()];
    THEMES = ordre.filter(k => parCode.has(k)).map(k => parCode.get(k));
    const chapDe = new Map(D.chapitres.map(c => [c.id, c]));
    D.questions.forEach(q => {
      q.chap = chapDe.get(q.chapitre) || null;
      const t = q.chap && THEMES.find(x => x.code === q.chap.theme);
      if (t) t.questions.push(q);
    });
    const avecPanneaux = D.questions.some(q => q.panneau) || D.chapitres.some(c => (c.panneaux || []).length);
    if (!avecPanneaux) { const o = document.querySelector('.som-onglet[data-vue="panneaux"]'); if (o) o.remove(); }
    if (permisId === "mer") { const o = document.querySelector('.som-onglet[data-vue="panneaux"]'); if (o) o.textContent = "Balisage"; }
    chargerMemo();
    dessinerSommaire();
    majProgression();
    brancher();
    router();
  }

  const chapParId = id => D.chapitres.find(c => c.id === id) || null;
  const themeDe = code => THEMES.find(t => t.code === code);
  const regroupe = () => THEMES.some(t => t.chapitres.length > 1);   // sommaire par thème, ou liste simple
  const etatQ = q => MEMO.stats[q.id];
  const erreurs = () => D.questions.filter(q => etatQ(q) && etatQ(q).dernier === false);
  const maitrise = qs => { const vues = qs.filter(q => etatQ(q)); return { vues: vues.length, ok: vues.filter(q => etatQ(q).dernier).length, total: qs.length }; };

  /* ── sommaire ── */
  function dessinerSommaire() {
    const chap = c => `<button class="chap${MEMO.lus[c.id] ? " lu" : ""}" type="button" data-chap="${esc(c.id)}">
        <span class="coche">✓</span><span class="ct">${esc(c.titre)}</span><span class="cd">${c.num}</span></button>`;
    $("som-liste").innerHTML = regroupe()
      ? THEMES.map((t, i) => `<div class="partie" data-pi="${i}">
          <button class="partie-tete" type="button"><span class="num">${esc(t.code)}</span><span class="pt">${esc(t.nom)}</span>
          <span class="fait">${t.chapitres.filter(c => MEMO.lus[c.id]).length}/${t.chapitres.length}</span><span class="chev">›</span></button>
          <div class="partie-chaps">${t.chapitres.map(chap).join("")}</div></div>`).join("")
      : `<div class="partie ouverte" data-pi="0"><div class="partie-chaps" style="display:block">${D.chapitres.map(chap).join("")}</div></div>`;
    $("som-liste").querySelectorAll(".partie-tete").forEach(b => b.onclick = () => b.parentElement.classList.toggle("ouverte"));
    $("som-liste").querySelectorAll("[data-chap]").forEach(b => b.onclick = () => { location.hash = b.dataset.chap; fermerSommaire(); });
    const p = $("som-liste").querySelector('.partie[data-pi="0"]'); if (p) p.classList.add("ouverte");
  }
  function majSommaire() {
    $("som-liste").querySelectorAll("[data-chap]").forEach(b => {
      b.classList.toggle("actif", !!chapCourant && b.dataset.chap === chapCourant.id);
      b.classList.toggle("lu", !!MEMO.lus[b.dataset.chap]);
    });
    if (regroupe()) THEMES.forEach((t, i) => {
      const el = $("som-liste").querySelector(`.partie[data-pi="${i}"] .fait`);
      if (el) el.textContent = t.chapitres.filter(c => MEMO.lus[c.id]).length + "/" + t.chapitres.length;
    });
    if (chapCourant && regroupe()) {
      const i = THEMES.findIndex(t => t.code === chapCourant.theme);
      const p = $("som-liste").querySelector(`.partie[data-pi="${i}"]`); if (p) p.classList.add("ouverte");
      const a = $("som-liste").querySelector(".chap.actif"); if (a) a.scrollIntoView({ block: "nearest" });
    }
  }
  function majProgression() {
    const n = D.chapitres.filter(c => MEMO.lus[c.id]).length, t = D.chapitres.length;
    $("som-progres-n").textContent = n + " / " + t;
    $("som-progres-b").style.width = Math.round(100 * n / t) + "%";
  }

  /* ── navigation ── */
  function montrer(vue) {
    vueCourante = vue;
    document.querySelectorAll(".vue").forEach(v => v.classList.toggle("on", v.id === "vue-" + vue));
    document.querySelectorAll(".som-onglet").forEach(b => b.classList.toggle("on", b.dataset.vue === vue));
    $("btn-lu").style.display = vue === "chapitre" ? "" : "none";
    document.body.classList.toggle("en-examen", vue === "quiz" && SESSION && SESSION.mode === "examen");
    window.scrollTo({ top: 0, behavior: "auto" });
    majBarreLecture();
  }
  function quitterSession() { arreterChrono(); SESSION = null; }

  function router() {
    const h = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    if (vueCourante === "quiz" && SESSION && h !== "quiz") {
      if (!SESSION.fini && SESSION.i > 0 && !confirm("Quitter la série en cours ? Tes réponses ne seront pas comptées.")) { history.replaceState(null, "", "#quiz"); return; }
      quitterSession();
    }
    if (h === "quiz") { if (SESSION) { montrer("quiz"); return; } location.replace("#accueil"); return; }
    chapCourant = null;
    if (!h || h === "accueil") { dessinerAccueil(); montrer("accueil"); }
    else if (h === "entrainement") { dessinerEntrainement(); montrer("entrainement"); }
    else if (h === "panneaux") { dessinerPanneaux(); montrer("panneaux"); }
    else if (h === "resultat" && SESSION_FINIE) { montrer("resultat"); }
    else if (h.startsWith("recherche=")) { $("cherche").value = h.slice(10); rechercher(h.slice(10)); montrer("recherche"); }
    else {
      const [id, sec] = h.split("/");
      const c = chapParId(id);
      if (!c) { location.replace("#accueil"); return; }
      ouvrirChapitre(c, sec);
      return;
    }
    $("fil").innerHTML = `<b>${esc(CFG.nom)}</b>` + ({ entrainement: " · s'entraîner", panneaux: permisId === "mer" ? " · balisage" : " · panneaux", resultat: " · résultat", recherche: " · recherche" }[vueCourante] || "");
    majSommaire();
  }
  window.addEventListener("hashchange", router);

  /* ── accueil ── */
  function dessinerAccueil() {
    const lus = D.chapitres.filter(c => MEMO.lus[c.id]).length;
    const m = maitrise(D.questions);
    const derniers = MEMO.examens.slice(-12);
    const reussis = MEMO.examens.filter(e => e.ok >= e.seuil).length;
    const suivant = D.chapitres.find(c => !MEMO.lus[c.id]);
    const err = erreurs().length;
    const ex = CFG.examen;
    $("vue-accueil").innerHTML = `
      <div class="acc-tete">
        <div class="acc-eyebrow">${esc(CFG.sous)}</div>
        <h1>${esc(CFG.nom)}<em>.</em></h1>
        <p class="acc-intro">${esc(CFG.intro)}</p>
      </div>
      <div class="actions-permis">
        <button class="action principale" type="button" id="go-examen">
          <span class="a-ic">⏱</span><span class="a-t">${esc(ex.nom)}</span>
          <span class="a-d">${esc(ex.regle)}</span>
          <span class="a-n">${ex.nb} QUESTIONS · RÉUSSITE À ${ex.seuil}</span></button>
        <button class="action" type="button" id="go-serie">
          <span class="a-ic">⚡</span><span class="a-t">Série rapide</span>
          <span class="a-d">${SERIE} questions au hasard, avec la correction après chaque réponse.</span>
          <span class="a-n">${D.questions.length} QUESTIONS DANS LA BANQUE</span></button>
        <button class="action" type="button" id="go-erreurs" ${err ? "" : "disabled"}>
          <span class="a-ic">↺</span><span class="a-t">Revoir mes erreurs</span>
          <span class="a-d">${err ? "Les questions ratées la dernière fois que tu les as vues." : "Rien à revoir pour l'instant : chaque erreur viendra se ranger ici."}</span>
          <span class="a-n">${err} QUESTION${err > 1 ? "S" : ""}</span></button>
      </div>
      <div class="acc-stats">
        <div class="stat"><div class="n">${lus} / ${D.chapitres.length}</div><div class="l">${permisId === "pieton" ? "leçons lues" : "chapitres lus"}</div></div>
        <div class="stat"><div class="n">${m.vues}</div><div class="l">questions vues</div></div>
        <div class="stat"><div class="n">${m.vues ? Math.round(100 * m.ok / m.vues) + " %" : "—"}</div><div class="l">de bonnes réponses</div></div>
        <div class="stat"><div class="n">${MEMO.examens.length ? reussis + " / " + MEMO.examens.length : "—"}</div><div class="l">${permisId === "pieton" ? "tests réussis" : (permisId === "caces" || permisId === "haccp" ? "QCM blancs réussis" : "examens blancs réussis")}</div></div>
      </div>
      ${derniers.length ? `<div class="bloc" style="margin-top:0"><h2><span class="ic">📈</span>Tes derniers ${permisId === "pieton" ? "tests" : "examens blancs"}</h2>
        <div class="histo-ex">${derniers.map(e => `<div class="h${e.ok >= e.seuil ? " ok" : ""}" style="height:${Math.max(6, Math.round(100 * e.ok / e.nb))}%" title="${e.ok} / ${e.nb} — ${new Date(e.date).toLocaleDateString("fr-FR")}"></div>`).join("")}</div>
        <div class="histo-legende"><span>${new Date(derniers[0].date).toLocaleDateString("fr-FR")}</span><span>dernier : ${derniers[derniers.length - 1].ok} / ${derniers[derniers.length - 1].nb}</span></div></div>` : ""}
      ${suivant ? `<a class="reprendre" href="#${esc(suivant.id)}"><div><div class="r-l">${lus ? "Leçon suivante" : "Commencer le cours"}</div>
        <div class="r-t">${suivant.num}. ${esc(suivant.titre)}</div></div><span class="r-go">Lire →</span></a>` : ""}
      ${(regroupe() ? THEMES : [{ code: "", nom: "", chapitres: D.chapitres }]).map(t => `<div class="acc-partie">
        ${regroupe() ? `<h2><span class="pn">${esc(t.code)}</span>${esc(t.nom)}<span class="pf">${t.chapitres.filter(c => MEMO.lus[c.id]).length} / ${t.chapitres.length} lus</span></h2>` : ""}
        <div class="acc-grille">${t.chapitres.map(c => {
          const nq = D.questions.filter(q => q.chapitre === c.id).length;
          return `<button class="carte${MEMO.lus[c.id] ? " lu" : ""}" type="button" data-go="${esc(c.id)}">
            <span class="c-num">${permisId === "pieton" ? "LEÇON" : "CHAPITRE"} ${c.num}</span><span class="c-titre">${esc(c.titre)}</span>
            <span class="c-meta"><span>${Number(c.duree) || 15} min</span><span>${nq} questions</span></span></button>`; }).join("")}</div>
      </div>`).join("")}`;
    $("vue-accueil").querySelectorAll("[data-go]").forEach(b => b.onclick = () => location.hash = b.dataset.go);
    $("go-examen").onclick = lancerExamen;
    $("go-serie").onclick = () => lancerSerie(melange(D.questions).slice(0, SERIE), "Série rapide");
    $("go-erreurs").onclick = () => lancerSerie(melange(erreurs()), "Mes erreurs", "erreurs");
  }

  /* ── chapitre ── */
  function ouvrirChapitre(c, sec) {
    chapCourant = c;
    MEMO.dernier = c.id; sauverMemo();
    dessinerChapitre(c);
    montrer("chapitre");
    majSommaire();
    const t = themeDe(c.theme);
    $("fil").innerHTML = `<b>${esc(CFG.nom)}</b>${regroupe() && t ? " · " + esc(t.nom) : ""} · ${esc(c.titre)}`;
    if (sec !== undefined) { const el = document.getElementById("s-" + sec); if (el) setTimeout(() => el.scrollIntoView({ block: "start" }), 30); }
  }
  function dessinerPanneauxDans(racine) {
    racine.querySelectorAll(".panneau[data-code]").forEach(s => { s.innerHTML = PANNEAU(s.dataset.code); s.title = NOM_PANNEAU(s.dataset.code); s.setAttribute("aria-label", NOM_PANNEAU(s.dataset.code)); });
  }
  function dessinerChapitre(c) {
    const i = D.chapitres.indexOf(c), prev = D.chapitres[i - 1], next = D.chapitres[i + 1];
    const qs = D.questions.filter(q => q.chapitre === c.id);
    const m = maitrise(qs);
    const t = themeDe(c.theme);
    majBoutonLu();
    $("vue-chapitre").innerHTML = `
      <div class="ch-tete">
        <div class="ch-partie">${regroupe() && t ? "Thème " + esc(t.code) + " · " + esc(t.nom) : (permisId === "pieton" ? "Leçon " + c.num : "")}</div>
        <h1>${c.num}. ${esc(c.titre)}</h1>
        <div class="ch-meta"><span>⏱ ${Number(c.duree) || 15} min</span><span>${(c.sections || []).length} parties</span><span>${qs.length} questions d'entraînement</span>${m.vues ? `<span>${m.ok} / ${m.vues} réussies</span>` : ""}</div>
      </div>
      ${(c.objectifs || []).length ? `<div class="objectifs"><h3>${permisId === "pieton" ? "Dans cette leçon, tu vas apprendre" : "Objectifs"}</h3><ol>${c.objectifs.map(o => `<li>${esc(o)}</li>`).join("")}</ol></div>` : ""}
      <div class="plan"><h3>Plan</h3><ol>${(c.sections || []).map((s, k) => `<li><a href="#${esc(c.id)}/${k}">${esc(s.titre)}</a></li>`).join("")}
        ${(c.panneaux || []).length ? `<li><a href="#${esc(c.id)}/panneaux">Les panneaux du chapitre</a></li>` : ""}
        ${(c.points_cles || []).length ? `<li><a href="#${esc(c.id)}/cles">${permisId === "pieton" ? "Les règles d'or" : "Points clés"}</a></li>` : ""}</ol></div>
      ${(c.sections || []).map((s, k) => `<section class="section" id="s-${k}"><h2><span class="sn">${String(k + 1).padStart(2, "0")}</span>${esc(s.titre)}</h2><div class="cours">${s.contenu}</div></section>`).join("")}
      ${(c.panneaux || []).length ? `<div class="bloc" id="s-panneaux"><h2><span class="ic">⚠</span>Les panneaux du chapitre</h2>
        <div class="galerie">${c.panneaux.map(p => `<figure><div class="pan">${PANNEAU(p)}</div><figcaption><b>${esc(String(p).split(":")[0])}</b>${esc(NOM_PANNEAU(p))}</figcaption></figure>`).join("")}</div></div>` : ""}
      ${(c.points_cles || []).length ? `<div class="bloc" id="s-cles"><h2><span class="ic">◆</span>${permisId === "pieton" ? "Les règles d'or" : "Points clés à retenir"}</h2><ul class="cles">${c.points_cles.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>` : ""}
      ${qs.length ? `<div class="bloc" style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap"><div style="flex:1;min-width:220px"><h2 style="margin-bottom:.3rem"><span class="ic">✔</span>Vérifie que tu as compris</h2>
        <p style="color:var(--muted);font-size:.9rem">${qs.length} questions sur ce chapitre, avec la correction après chaque réponse.</p></div>
        <button class="btn plein" id="go-chap">S'entraîner sur ce chapitre →</button></div>` : ""}
      <div class="nav-chap">
        ${prev ? `<a href="#${esc(prev.id)}" class="prec"><span class="nl">← Précédent</span><span class="nt">${prev.num}. ${esc(prev.titre)}</span></a>` : `<a href="#accueil" class="prec"><span class="nl">← Accueil</span><span class="nt fin">Retour à l'accueil du permis</span></a>`}
        ${next ? `<a href="#${esc(next.id)}" class="suiv"><span class="nl">Suivant →</span><span class="nt">${next.num}. ${esc(next.titre)}</span></a>` : `<a href="#accueil" class="suiv"><span class="nl">Fin du cours</span><span class="nt fin">Passer ${permisId === "pieton" ? "le test" : "un examen blanc"} →</span></a>`}
      </div>`;
    dessinerPanneauxDans($("vue-chapitre"));
    if (qs.length) $("go-chap").onclick = () => lancerSerie(melange(qs), "Chapitre " + c.num + " · " + c.titre);
  }
  function majBoutonLu() {
    if (!chapCourant) return;
    const lu = !!MEMO.lus[chapCourant.id];
    $("btn-lu").textContent = lu ? "✓ Lu" : "Marquer comme lu";
    $("btn-lu").className = "btn" + (lu ? " lu" : "");
  }
  function basculerLu() {
    if (!chapCourant) return;
    if (MEMO.lus[chapCourant.id]) delete MEMO.lus[chapCourant.id];
    else { MEMO.lus[chapCourant.id] = Date.now(); toast("Chapitre marqué comme lu."); }
    sauverMemo(); majBoutonLu(); majSommaire(); majProgression();
  }

  /* ── page « S'entraîner » ── */
  function dessinerEntrainement() {
    const err = erreurs();
    $("vue-entrainement").innerHTML = `
      <div class="acc-tete"><div class="acc-eyebrow">${esc(CFG.nom)}</div><h1>S'<em>entraîner</em></h1>
        <p class="acc-intro">Choisis un thème : ${SERIE} questions tirées au hasard, avec la correction et l'explication après chaque réponse. La barre verte montre la part des questions du thème que tu as réussies la dernière fois.</p></div>
      <div class="actions-permis" style="margin-top:0">
        <button class="action principale" type="button" id="e-examen"><span class="a-ic">⏱</span><span class="a-t">${esc(CFG.examen.nom)}</span><span class="a-n">${CFG.examen.nb} QUESTIONS</span></button>
        <button class="action" type="button" id="e-serie"><span class="a-ic">⚡</span><span class="a-t">Série rapide</span><span class="a-n">${SERIE} QUESTIONS, TOUS THÈMES</span></button>
        <button class="action" type="button" id="e-erreurs" ${err.length ? "" : "disabled"}><span class="a-ic">↺</span><span class="a-t">Mes erreurs</span><span class="a-n">${err.length} À REVOIR</span></button>
      </div>
      <h2 style="font-family:var(--serif);font-size:1.3rem;margin:0 0 .8rem">Par ${regroupe() ? "thème" : "leçon"}</h2>
      <div class="themes">${THEMES.map(t => { const m = maitrise(t.questions); return `<button class="theme" type="button" data-theme="${esc(t.code)}">
        <span class="t-code">${esc(regroupe() ? t.code : String(t.chapitres[0].num))}</span>
        <span style="flex:1"><span class="t-nom">${esc(t.nom)}</span><span class="t-bar"><i style="width:${t.questions.length ? Math.round(100 * m.ok / t.questions.length) : 0}%"></i></span></span>
        <span class="t-n">${t.questions.length} q.</span></button>`; }).join("")}</div>`;
    $("e-examen").onclick = lancerExamen;
    $("e-serie").onclick = () => lancerSerie(melange(D.questions).slice(0, SERIE), "Série rapide");
    $("e-erreurs").onclick = () => lancerSerie(melange(err), "Mes erreurs", "erreurs");
    $("vue-entrainement").querySelectorAll("[data-theme]").forEach(b => b.onclick = () => {
      const t = themeDe(b.dataset.theme);
      /* on sert d'abord ce qui n'a jamais été vu ou a été raté */
      const prio = melange(t.questions.filter(q => !etatQ(q) || !etatQ(q).dernier)), reste = melange(t.questions.filter(q => etatQ(q) && etatQ(q).dernier));
      lancerSerie(prio.concat(reste).slice(0, SERIE), (regroupe() ? t.code + " · " : "") + t.nom);
    });
  }

  /* ── page « Panneaux » ── */
  const FAMILLES = [
    ["Intersections et priorités", c => /^AB/.test(c)],
    ["Danger", c => /^A\d/.test(c)],
    ["Interdiction", c => /^B(0|1|2|3|6|14)(?!\d)/.test(c) && !/^B3[134]/.test(c) || c === "B3" || c === "B2a" || c === "B2b" || c === "B2c"],
    ["Fin d'interdiction", c => /^B3[134]/.test(c)],
    ["Obligation", c => /^B2[125]/.test(c) && !/^B2[abc]$/.test(c)],
    ["Indication", c => /^C\d/.test(c)],
    ["Agglomération et zones", c => /^(EB|ZONE)/.test(c)],
    ["Feux", c => /^FEU/.test(c)],
    ["Marquages au sol", c => /^(LIGNE|PASSAGE)/.test(c)],
    ["Balisage maritime", c => /^MER_/.test(c)],
  ];
  function dessinerPanneaux() {
    const usage = new Map();   // code de base → { code affiché, questions }
    const note = (code, q) => { const base = String(code).split(":")[0]; if (!usage.has(base)) usage.set(base, { code, qs: [] }); if (q) usage.get(base).qs.push(q); };
    D.chapitres.forEach(c => (c.panneaux || []).forEach(p => note(p)));
    D.questions.forEach(q => { if (q.panneau) note(q.panneau, q); });
    const codes = [...usage.keys()];
    $("vue-panneaux").innerHTML = `
      <div class="acc-tete"><div class="acc-eyebrow">${esc(CFG.nom)}</div><h1>${permisId === "mer" ? "Le <em>balisage</em>" : "Les <em>panneaux</em>"}</h1>
        <p class="acc-intro">${permisId === "mer" ? "Les " + codes.length + " marques de balisage du cours. Clique sur une marque pour répondre aux questions qui la montrent." : "Les " + codes.length + " panneaux, feux et marquages du cours. Clique sur un panneau pour répondre aux questions qui le montrent."}</p></div>
      ${FAMILLES.map(([nom, f]) => { const l = codes.filter(f); if (!l.length) return ""; return `<h2 style="font-family:var(--serif);font-size:1.2rem;margin:1.6rem 0 .7rem">${esc(nom)}</h2>
        <div class="galerie">${l.map(k => { const u = usage.get(k); return `<figure ${u.qs.length ? `data-pan="${esc(k)}" style="cursor:pointer" title="${u.qs.length} question(s)"` : ""}><div class="pan">${PANNEAU(u.code)}</div>
          <figcaption><b>${esc(k)}${u.qs.length ? " · " + u.qs.length + " q." : ""}</b>${esc(NOM_PANNEAU(u.code))}</figcaption></figure>`; }).join("")}</div>`; }).join("")}`;
    $("vue-panneaux").querySelectorAll("[data-pan]").forEach(f => f.onclick = () => {
      const u = usage.get(f.dataset.pan);
      lancerSerie(melange(u.qs), "Panneau " + f.dataset.pan);
    });
  }

  /* ══ Séries et examen ══ */
  function lancerSerie(questions, titre, mode) {
    if (!questions.length) { toast("Aucune question à proposer."); return; }
    SESSION = { mode: mode || "serie", titre, questions, i: 0, reponses: [], fini: false };
    afficherQuestion();
    if (location.hash !== "#quiz") location.hash = "quiz"; else montrer("quiz");
  }
  function tirageExamen() {
    const nb = Math.min(CFG.examen.nb, D.questions.length);
    const total = D.questions.length;
    /* quotas proportionnels à la taille de chaque thème, au moins 1 par thème */
    let quotas = THEMES.map(t => ({ t, n: Math.max(1, Math.round(nb * t.questions.length / total)) }));
    let somme = quotas.reduce((s, x) => s + x.n, 0);
    while (somme > nb) { const x = quotas.filter(q => q.n > 1).sort((a, b) => b.n - a.n)[0]; x.n--; somme--; }
    while (somme < nb) { const x = quotas.slice().sort((a, b) => (b.t.questions.length - b.n * total / nb) - (a.t.questions.length - a.n * total / nb))[0]; x.n++; somme++; }
    return melange(quotas.flatMap(x => melange(x.t.questions).slice(0, x.n)));
  }
  function lancerExamen() {
    SESSION = { mode: "examen", titre: CFG.examen.nom, questions: tirageExamen(), i: 0, reponses: [], fini: false };
    afficherQuestion();
    if (location.hash !== "#quiz") location.hash = "quiz"; else montrer("quiz");
  }

  /* Ordre d'affichage des propositions. Les banques de questions placent
     souvent la bonne réponse en premier : on mélange donc à chaque affichage,
     sauf les paires Oui / Non (qu'on garde dans cet ordre) ; des réponses
     chiffrées sont rangées par ordre croissant. Renvoie, pour chaque position
     affichée, l'indice d'origine de la proposition. */
  function ordreOptions(q) {
    const idx = q.options.map((_, k) => k);
    if (q.options.length === 2 && q.options.some(o => /^(oui|non)\b/i.test(String(o).trim()))) return idx;
    const nombre = o => { const m = String(o).trim().replace(",", ".").match(/^[-+]?\d+(\.\d+)?/); return m ? parseFloat(m[0]) : NaN; };
    if (q.options.every(o => !isNaN(nombre(o)))) return idx.sort((a, b) => nombre(q.options[a]) - nombre(q.options[b]));
    return melange(idx);
  }

  function arreterChrono() { if (minuteur) { clearInterval(minuteur); minuteur = null; } }

  function afficherQuestion() {
    arreterChrono();
    const S = SESSION, q = S.questions[S.i], n = S.questions.length;
    const examen = S.mode === "examen";
    const t = q.chap && themeDe(q.chap.theme);
    const plusieurs = q.bonnes.length > 1;
    S.choix = new Set(); S.valide = false;
    S.ordres = S.ordres || [];
    const ordre = S.ordres[S.i] = ordreOptions(q);
    $("vue-quiz").innerHTML = `<div class="exam">
      <div class="ex-haut">
        <div><div class="ex-theme">${esc(S.titre)}${!examen && t && regroupe() ? " · " + esc(t.code) : ""}</div>
        <div class="ex-num">Question <b>${S.i + 1}</b> / ${n}</div></div>
        <button class="btn ex-quitter" id="q-quitter">Quitter</button>
      </div>
      ${n <= 60 ? `<div class="ex-progres">${S.questions.map((_, k) => {
        const r = S.reponses[k];
        return `<i class="${k === S.i ? "cours" : r ? (examen ? "fait" : (r.ok ? "ok" : "ko")) : ""}"></i>`; }).join("")}</div>` : ""}
      ${examen && CFG.examen.chrono ? `<div class="chrono" id="chrono"><i id="chrono-b"></i></div><div class="chrono-txt" id="chrono-t">${CFG.examen.chrono} s</div>` : ""}
      <div class="q-carte">
        ${q.panneau || q.situation ? `<div class="q-scene">${q.panneau ? `<div class="q-pan" title="${esc(NOM_PANNEAU(q.panneau))}">${PANNEAU(q.panneau)}</div>` : ""}
          ${q.situation ? `<div class="q-situation">${esc(q.situation)}</div>` : ""}</div>` : ""}
        <div class="q-corps">
          <div class="q-texte">${esc(q.q)}</div>
          <div class="q-aide">${examen ? "UNE OU PLUSIEURS RÉPONSES POSSIBLES" : (plusieurs ? "PLUSIEURS RÉPONSES SONT JUSTES" : "UNE OU PLUSIEURS RÉPONSES POSSIBLES")}</div>
          <div class="q-opts">${ordre.map((k, pos) => `<button class="q-opt" type="button" data-k="${k}"><span class="lettre-opt">${LETTRES[pos]}</span><span>${esc(q.options[k])}</span></button>`).join("")}</div>
          <div id="q-verdict"></div>
          <div class="q-pied">
            <span class="raccourcis">Touches ${LETTRES.slice(0, q.options.length).split("").join(" ")} pour choisir · Entrée pour valider</span>
            <span class="esp"></span>
            <button class="btn plein" id="q-valider" ${examen ? "" : "disabled"}>Valider</button>
          </div>
        </div>
      </div></div>`;
    $("vue-quiz").querySelectorAll(".q-opt").forEach(b => b.onclick = () => basculerChoix(Number(b.dataset.k)));
    $("q-valider").onclick = () => S.valide ? suivante() : valider(false);
    $("q-quitter").onclick = () => { location.hash = "accueil"; };
    if (examen && CFG.examen.chrono) demarrerChrono(CFG.examen.chrono);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function basculerChoix(k) {
    const S = SESSION;
    if (!S || S.valide) return;
    const q = S.questions[S.i];
    if (k >= q.options.length) return;
    S.choix.has(k) ? S.choix.delete(k) : S.choix.add(k);
    $("vue-quiz").querySelectorAll(".q-opt").forEach(b => b.classList.toggle("choisie", S.choix.has(Number(b.dataset.k))));
    if (S.mode !== "examen") $("q-valider").disabled = S.choix.size === 0;
  }

  function demarrerChrono(sec) {
    const debut = Date.now();
    const barre = $("chrono-b"), txt = $("chrono-t"), boite = $("chrono");
    minuteur = setInterval(() => {
      const reste = Math.max(0, sec - (Date.now() - debut) / 1000);
      barre.style.transform = `scaleX(${reste / sec})`;
      txt.textContent = Math.ceil(reste) + " s";
      boite.classList.toggle("urgent", reste <= 5);
      if (reste <= 0) { arreterChrono(); valider(true); }
    }, 100);
  }

  function estJuste(q, choix) {
    const b = new Set(q.bonnes);
    return choix.size === b.size && [...choix].every(k => b.has(k));
  }

  function valider(tempsEcoule) {
    const S = SESSION;
    if (!S || S.valide) return;
    arreterChrono();
    const q = S.questions[S.i];
    const ok = estJuste(q, S.choix);
    S.reponses[S.i] = { choix: [...S.choix].sort(), ok, tempsEcoule: !!tempsEcoule };
    S.valide = true;
    /* mémoire de la question (examen compris) */
    const st = MEMO.stats[q.id] || { v: 0, ok: 0 };
    st.v++; if (ok) st.ok++; st.dernier = ok; MEMO.stats[q.id] = st; sauverMemo();

    if (S.mode === "examen") { suivante(); return; }

    /* entraînement : correction tout de suite */
    $("vue-quiz").querySelectorAll(".q-opt").forEach(b => {
      const k = Number(b.dataset.k), bon = q.bonnes.includes(k), pris = S.choix.has(k);
      b.disabled = true;
      b.classList.remove("choisie");
      if (bon && pris) b.classList.add("juste");
      else if (!bon && pris) b.classList.add("faux");
      else if (bon) b.classList.add("oubli");
    });
    const bonnes = S.ordres[S.i].map((k, pos) => q.bonnes.includes(k) ? LETTRES[pos] : null).filter(Boolean).join(", ");
    $("q-verdict").innerHTML = `<div class="verdict ${ok ? "ok" : "ko"}"><b class="titre">${ok ? (permisId === "pieton" ? "Bravo, c'est juste !" : "Bonne réponse") : "Réponse " + (q.bonnes.length > 1 ? "attendue : " : "attendue : ") + bonnes}</b>
      ${esc(q.explication)}
      ${q.chap ? `<br><a class="lien-cours" href="#${esc(q.chap.id)}">Revoir le cours : ${esc(q.chap.titre)} →</a>` : ""}</div>`;
    const btn = $("q-valider");
    btn.disabled = false;
    btn.textContent = S.i + 1 < S.questions.length ? "Question suivante →" : "Voir mon résultat →";
    btn.focus();
    const seg = $("vue-quiz").querySelectorAll(".ex-progres i")[S.i];
    if (seg) seg.className = ok ? "ok" : "ko";
  }

  function suivante() {
    const S = SESSION;
    if (S.i + 1 < S.questions.length) { S.i++; afficherQuestion(); return; }
    terminer();
  }

  let SESSION_FINIE = null;
  function terminer() {
    const S = SESSION;
    S.fini = true; arreterChrono();
    const ok = S.reponses.filter(r => r && r.ok).length, n = S.questions.length;
    if (S.mode === "examen") {
      MEMO.examens.push({ date: Date.now(), ok, nb: n, seuil: CFG.examen.seuil });
      MEMO.examens = MEMO.examens.slice(-50);
      sauverMemo();
    }
    SESSION_FINIE = S;
    dessinerResultat(S);
    SESSION = null;
    location.hash = "resultat";
  }

  function dessinerResultat(S) {
    const n = S.questions.length, ok = S.reponses.filter(r => r && r.ok).length;
    const examen = S.mode === "examen";
    const seuil = examen ? CFG.examen.seuil * n / CFG.examen.nb : Math.ceil(n * .8);
    const reussi = ok >= seuil;
    /* par thème */
    const parTheme = new Map();
    S.questions.forEach((q, k) => {
      const code = q.chap ? q.chap.theme : "?";
      if (!parTheme.has(code)) parTheme.set(code, { ok: 0, n: 0 });
      const x = parTheme.get(code); x.n++; if (S.reponses[k] && S.reponses[k].ok) x.ok++;
    });
    const fautes = S.questions.map((q, k) => ({ q, k, r: S.reponses[k] })).filter(x => !x.r || !x.r.ok);
    const ligneRevue = ({ q, k, r }) => `<details class="revue"${!r || !r.ok ? "" : ""}>
      <summary><span class="rv-n">${k + 1}</span><span class="rv-ok">${r && r.ok ? "✅" : "❌"}</span><span class="rv-q">${esc(q.q)}</span></summary>
      <div class="rv-corps">
        ${q.panneau || q.situation ? `<div style="display:flex;gap:.9rem;align-items:center;margin-bottom:.7rem">${q.panneau ? `<div class="q-pan" style="width:70px;height:70px">${PANNEAU(q.panneau)}</div>` : ""}<div class="q-situation" style="font-size:.9rem">${esc(q.situation || "")}</div></div>` : ""}
        <div class="q-opts">${((S.ordres && S.ordres[k]) || q.options.map((_, j) => j)).map((j, pos) => { const bon = q.bonnes.includes(j), pris = r && r.choix.includes(j);
          return `<div class="q-opt ${bon && pris ? "juste" : !bon && pris ? "faux" : bon ? "oubli" : ""}"><span class="lettre-opt">${LETTRES[pos]}</span><span>${esc(q.options[j])}</span></div>`; }).join("")}</div>
        ${r && r.tempsEcoule ? `<p style="font-family:var(--mono);font-size:.66rem;color:var(--amber);margin-top:.5rem">TEMPS ÉCOULÉ</p>` : ""}
        <div class="verdict ${r && r.ok ? "ok" : "ko"}" style="margin-top:.7rem">${esc(q.explication)}${q.chap ? `<br><a class="lien-cours" href="#${esc(q.chap.id)}">Revoir : ${esc(q.chap.titre)} →</a>` : ""}</div>
      </div></details>`;
    $("vue-resultat").innerHTML = `
      <div class="bilan-tete">
        <div class="acc-eyebrow">${esc(S.titre)}</div>
        <div class="res-score">${ok}<small> / ${n}</small></div>
        ${examen ? `<div class="res-statut ${reussi ? "ok" : "ko"}">${reussi ? (permisId === "pieton" ? "Test réussi" : "Examen réussi") : (permisId === "pieton" ? "Encore un effort" : "Examen non réussi")}</div>
          <p class="res-sous">${reussi ? (permisId === "pieton" ? "Bravo, tu connais les règles pour te déplacer en sécurité !" : "Tu as atteint le seuil de " + CFG.examen.seuil + " bonnes réponses.") : "Il fallait au moins " + CFG.examen.seuil + " bonnes réponses. Revois les questions ratées ci-dessous."}</p>`
          : `<p class="res-sous">${ok === n ? "Sans faute !" : fautes.length + " erreur" + (fautes.length > 1 ? "s" : "") + " — elles sont ajoutées à « Mes erreurs » pour que tu les retravailles."}</p>`}
      </div>
      <div class="actions-permis" style="margin-top:0">
        ${examen ? `<button class="action principale" type="button" id="r-examen"><span class="a-ic">⏱</span><span class="a-t">Nouvel ${permisId === "pieton" ? "essai" : "examen blanc"}</span><span class="a-n">${CFG.examen.nb} NOUVELLES QUESTIONS</span></button>` : ""}
        ${fautes.length ? `<button class="action${examen ? "" : " principale"}" type="button" id="r-fautes"><span class="a-ic">↺</span><span class="a-t">Retravailler ces erreurs</span><span class="a-n">${fautes.length} QUESTION${fautes.length > 1 ? "S" : ""}, AVEC CORRECTION</span></button>` : ""}
        <button class="action" type="button" id="r-accueil"><span class="a-ic">⌂</span><span class="a-t">Retour à l'accueil</span><span class="a-n">${esc(CFG.nom.toUpperCase())}</span></button>
      </div>
      ${parTheme.size > 1 ? `<div class="bloc"><h2><span class="ic">▤</span>Résultat par ${regroupe() ? "thème" : "leçon"}</h2><div class="par-theme">${[...parTheme.entries()].map(([code, x]) => {
        const t = themeDe(code);
        return `<div class="pt-ligne"><span class="c">${esc(regroupe() ? code : (t ? t.chapitres[0].num : code))}</span><span class="b"><i style="width:${Math.round(100 * x.ok / x.n)}%"></i></span><span class="n">${x.ok} / ${x.n}</span><span class="nom">${esc(t ? t.nom : code)}</span></div>`; }).join("")}</div></div>` : ""}
      <div class="bloc"><h2><span class="ic">✎</span>Correction</h2>
        <label style="display:flex;gap:.5rem;align-items:center;font-size:.86rem;color:var(--muted);margin-bottom:.9rem"><input type="checkbox" id="r-tout"> Afficher aussi les bonnes réponses</label>
        <div id="r-liste">${(fautes.length ? fautes : []).map(ligneRevue).join("") || `<p style="color:var(--green)">Aucune erreur. 🎉</p>`}</div></div>`;
    const tout = S.questions.map((q, k) => ({ q, k, r: S.reponses[k] }));
    $("r-tout").onchange = e => { $("r-liste").innerHTML = (e.target.checked ? tout : fautes).map(ligneRevue).join("") || `<p style="color:var(--green)">Aucune erreur. 🎉</p>`; dessinerPanneauxDans($("r-liste")); };
    if ($("r-examen")) $("r-examen").onclick = lancerExamen;
    if ($("r-fautes")) $("r-fautes").onclick = () => lancerSerie(fautes.map(x => x.q), "Mes erreurs de cette série", "erreurs");
    $("r-accueil").onclick = () => { location.hash = "accueil"; };
    /* la première erreur est ouverte */
    const d = $("r-liste").querySelector("details"); if (d) d.open = true;
  }

  /* ── recherche dans le cours ── */
  const texteDe = html => String(html).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  function extrait(texte, q, marge) {
    const i = normalise(texte).indexOf(normalise(q));
    if (i < 0) return esc(texte.slice(0, 2 * marge)) + (texte.length > 2 * marge ? "…" : "");
    const d = Math.max(0, i - marge), f = Math.min(texte.length, i + q.length + marge);
    return (d ? "…" : "") + esc(texte.slice(d, i)) + "<mark>" + esc(texte.slice(i, i + q.length)) + "</mark>" + esc(texte.slice(i + q.length, f)) + (f < texte.length ? "…" : "");
  }
  function rechercher(q) {
    q = String(q || "").trim();
    const vue = $("vue-recherche");
    if (q.length < 2) { vue.innerHTML = `<div class="vide">Tape au moins deux lettres.</div>`; return; }
    const nq = normalise(q), res = [];
    D.chapitres.forEach(c => {
      if (normalise(c.titre).includes(nq)) res.push({ c, ou: "Titre", t: c.titre, x: esc((c.objectifs || [])[0] || ""), s: 5 });
      (c.sections || []).forEach((s, k) => {
        const txt = texteDe(s.contenu);
        if (normalise(s.titre).includes(nq)) res.push({ c, sec: k, ou: "Partie", t: s.titre, x: esc(txt.slice(0, 160)), s: 4 });
        else if (normalise(txt).includes(nq)) res.push({ c, sec: k, ou: "Dans le cours", t: s.titre, x: extrait(txt, q, 90), s: 2 });
      });
      (c.points_cles || []).forEach(p => { if (normalise(p).includes(nq)) res.push({ c, sec: "cles", ou: "Point clé", t: c.titre, x: extrait(p, q, 110), s: 3 }); });
    });
    res.sort((a, b) => b.s - a.s || a.c.num - b.c.num);
    const vus = new Set(), u = res.filter(r => { const k = r.c.id + "|" + (r.sec ?? "") + "|" + r.t; if (vus.has(k)) return false; vus.add(k); return true; }).slice(0, 50);
    vue.innerHTML = `<div class="res-tete" style="text-align:left;padding:0 0 1rem;font-family:var(--mono);font-size:.66rem;color:var(--muted)">${u.length || "Aucun"} résultat${u.length > 1 ? "s" : ""} pour « ${esc(q)} »</div>` +
      u.map(r => `<button class="res" type="button" data-go="${esc(r.c.id)}${r.sec !== undefined ? "/" + r.sec : ""}"><div class="r-ou">${esc(r.ou)} · chapitre ${r.c.num}</div><div class="r-t">${esc(r.t)}</div><div class="r-x">${r.x}</div></button>`).join("");
    vue.querySelectorAll("[data-go]").forEach(b => b.onclick = () => location.hash = b.dataset.go);
  }

  /* ── divers ── */
  function majBarreLecture() {
    const d = document.documentElement, max = d.scrollHeight - d.clientHeight;
    $("lecture-barre").style.width = (vueCourante === "chapitre" && max > 0 ? Math.min(100, 100 * d.scrollTop / max) : 0) + "%";
  }
  function fermerSommaire() { document.body.classList.remove("som-ouvert"); }

  function brancher() {
    $("btn-lu").onclick = basculerLu;
    $("haut-menu").onclick = () => document.body.classList.toggle("som-ouvert");
    $("voile").onclick = fermerSommaire;
    document.querySelectorAll(".som-onglet").forEach(b => b.onclick = () => { location.hash = b.dataset.vue; fermerSommaire(); });
    let tempo;
    $("cherche").addEventListener("input", e => {
      clearTimeout(tempo);
      const q = e.target.value.trim();
      tempo = setTimeout(() => {
        if (q.length >= 2) location.hash = "recherche=" + encodeURIComponent(q);
        else if (!q && vueCourante === "recherche") location.hash = "accueil";
      }, 300);
    });
    window.addEventListener("scroll", majBarreLecture, { passive: true });
    window.addEventListener("beforeunload", e => { if (SESSION && !SESSION.fini && SESSION.i > 0) { e.preventDefault(); e.returnValue = ""; } });
    document.addEventListener("keydown", e => {
      if (e.target.matches("input, textarea, select") || e.ctrlKey || e.metaKey || e.altKey) return;
      if (vueCourante === "quiz" && SESSION) {
        const k = "abcd".indexOf(e.key.toLowerCase()), n = "1234".indexOf(e.key);
        if (k >= 0 || n >= 0) { e.preventDefault(); const pos = k >= 0 ? k : n, o = SESSION.ordres && SESSION.ordres[SESSION.i]; if (o && pos < o.length) basculerChoix(o[pos]); return; }
        if (e.key === "Enter") { e.preventDefault(); const b = $("q-valider"); if (b && !b.disabled) b.click(); return; }
        return;
      }
      if (e.key === "/") { e.preventDefault(); $("cherche").focus(); return; }
      if (vueCourante === "chapitre" && chapCourant) {
        const i = D.chapitres.indexOf(chapCourant);
        if (e.key === "ArrowRight" && D.chapitres[i + 1]) location.hash = D.chapitres[i + 1].id;
        if (e.key === "ArrowLeft" && D.chapitres[i - 1]) location.hash = D.chapitres[i - 1].id;
        if (e.key === "l" || e.key === "L") basculerLu();
      }
    });
  }
})();
