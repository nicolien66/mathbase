/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — kholleur.js
   La page du Khôlleur : un problème long par chapitre, travaillé en trois
   temps (réfléchir avec le khôlleur → faire valider son plan → rédiger).

   Tout ce qui touche à la solution reste au serveur : cette page ne reçoit
   que l'énoncé, l'historique du chat et, une fois la copie rendue, la
   correction et le corrigé. Il n'y a donc rien à cacher côté navigateur.

   Liens profonds :
     kholleur.html?id=12            ouvre directement la khôlle n° 12
     kholleur.html?chapitre=Thalès  n'affiche que ce chapitre du catalogue
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const $   = id => document.getElementById(id);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g,
    c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const M   = window.MB_MAT;
  const A   = window.MB_AUTH;

  const params = new URLSearchParams(location.search);

  /* ── État ────────────────────────────────────────────────────────────── */
  let KHOLLES  = [];        // catalogue : [{ id, title, chapitre, classe, level, duree, etat, note }]
  let filtreNiveau = "";
  let chapitreCible = params.get("chapitre") || "";
  let K = null;             // khôlle ouverte : { kholle, session, corrige }
  let chronoTimer = null;
  let envoiEnCours = false;

  /* ── Matières couvertes ─────────────────────────────────────────────── */
  if (!M || !["mathematiques", "physique-chimie"].includes(M.id)) {
    document.querySelector(".kh-wrap").innerHTML = "";
    M && M.etatVide(".kh-wrap", "Pas de khôlles en " + M.nom,
      "Le Khôlleur ne propose pour l'instant que des khôlles de mathématiques et de physique-chimie.");
    return;
  }
  $("kh-hero-matiere").textContent = M.nom;
  document.title = "Polymates — Le Khôlleur · " + M.nom;

  /* ── Sans serveur (démo) : rien à faire ici ────────────────────────── */
  if (A && A.isDemo && A.isDemo()) {
    $("kh-catalogue").innerHTML =
      '<div class="kh-vide">Le Khôlleur a besoin d\'un compte connecté au serveur : la session de démonstration ne permet pas de dialoguer avec lui.<br><a href="index.html" style="color:var(--accent)">Se connecter</a></div>';
    return;
  }

  async function api(url, opts) {
    const res = await A.apiFetch(url, opts);
    let data = null;
    try { data = await res.json(); } catch (_) {}
    if (!res.ok) {
      const e = new Error((data && (data.message || data.error)) || ("Erreur " + res.status));
      e.status = res.status; e.data = data;
      throw e;
    }
    return data;
  }

  /* ═══════════════════════════════════════════════════════════════════
     CATALOGUE
     ═══════════════════════════════════════════════════════════════════ */
  function niveauDuGroupe(g) {
    const n = g.niveaux || [];
    if (n.includes("lycee")) return "lycee";
    return "college";                       // primaire + collège vont ensemble
  }

  function etatBadge(k) {
    if (!k.etat) return "";
    if (k.etat === "redige") {
      const faible = k.note != null && k.note < 10;
      return '<span class="kh-etat kh-etat-redige' + (faible ? " kh-faible" : "") + '">'
           + (k.note != null ? k.note + "/20" : "Rendue") + "</span>";
    }
    if (k.etat === "valide") return '<span class="kh-etat kh-etat-valide">Plan validé</span>';
    return '<span class="kh-etat kh-etat-reflexion">En cours</span>';
  }

  function rendreCatalogue() {
    const structure = (M.contenu().structure || []);
    const parChapitre = {};
    KHOLLES.forEach(k => { (parChapitre[k.chapitre] = parChapitre[k.chapitre] || []).push(k); });
    $("kh-total").textContent = KHOLLES.length;

    const cible = $("kh-filtre-cible");
    if (chapitreCible) {
      cible.hidden = false;
      cible.innerHTML = "Chapitre : <b>" + esc(chapitreCible) + "</b> · <a href=\"#\" id=\"kh-tout\">tout voir</a>";
      $("kh-tout").onclick = e => { e.preventDefault(); chapitreCible = ""; rendreCatalogue(); };
    } else cible.hidden = true;

    let html = "";
    for (const g of structure) {
      if (filtreNiveau && niveauDuGroupe(g) !== filtreNiveau) continue;
      const chapitres = (g.chapters || []).filter(c => !chapitreCible || c === chapitreCible);
      if (!chapitres.length) continue;
      html += '<div class="kh-theme" style="--tc:' + esc(g.color || "var(--accent)") + '">'
            + '<div class="kh-theme-t"><i></i>' + esc(g.subject) + "</div><div class=\"kh-liste\">";
      for (const c of chapitres) {
        const liste = parChapitre[c] || [];
        if (!liste.length) {
          html += '<div class="kh-carte kh-avenir"><div class="kh-carte-chap">' + esc(c) + "</div>"
                + '<div class="kh-carte-titre">Khôlle à venir</div>'
                + '<div class="kh-carte-pied">Pas encore de sujet pour ce chapitre.</div></div>';
          continue;
        }
        for (const k of liste) {
          html += '<button class="kh-carte" data-id="' + k.id + '">'
                + '<div class="kh-carte-chap">' + esc(c) + "</div>"
                + '<div class="kh-carte-titre">' + esc(k.title) + "</div>"
                + '<div class="kh-carte-pied"><span>' + esc(k.classe || (k.level === "lycee" ? "Lycée" : "Collège")) + "</span>"
                + "<span>⏱ " + (k.duree || 25) + " min</span>" + etatBadge(k) + "</div></button>";
        }
      }
      html += "</div></div>";
    }
    /* Chapitres hors structure (renommés depuis) : on les montre quand même. */
    const connus = new Set(structure.flatMap(g => g.chapters || []));
    const orphelins = KHOLLES.filter(k => !connus.has(k.chapitre) && (!chapitreCible || k.chapitre === chapitreCible));
    if (orphelins.length && !filtreNiveau) {
      html += '<div class="kh-theme"><div class="kh-theme-t"><i></i>Autres</div><div class="kh-liste">';
      for (const k of orphelins) {
        html += '<button class="kh-carte" data-id="' + k.id + '"><div class="kh-carte-chap">' + esc(k.chapitre || "Sans chapitre")
              + '</div><div class="kh-carte-titre">' + esc(k.title) + '</div><div class="kh-carte-pied"><span>⏱ '
              + (k.duree || 25) + " min</span>" + etatBadge(k) + "</div></button>";
      }
      html += "</div></div>";
    }
    $("kh-catalogue").innerHTML = html || '<div class="kh-vide">Aucune khôlle pour ce filtre.</div>';
    $("kh-catalogue").querySelectorAll(".kh-carte[data-id]").forEach(b => b.onclick = () => ouvrir(Number(b.dataset.id)));
  }

  async function chargerCatalogue() {
    try {
      KHOLLES = await api("/kholles?matiere=" + encodeURIComponent(M.id));
      rendreCatalogue();
    } catch (e) {
      $("kh-catalogue").innerHTML = '<div class="kh-vide">Impossible de charger les khôlles : ' + esc(e.message) + "</div>";
    }
  }

  $("kh-filtres").querySelectorAll(".kh-filtre").forEach(b => b.onclick = () => {
    $("kh-filtres").querySelectorAll(".kh-filtre").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    filtreNiveau = b.dataset.niveau || "";
    rendreCatalogue();
  });

  /* ═══════════════════════════════════════════════════════════════════
     SÉANCE
     ═══════════════════════════════════════════════════════════════════ */
  function montrer(vue) {
    $("vue-catalogue").hidden = vue !== "catalogue";
    $("vue-seance").hidden    = vue !== "seance";
    window.scrollTo({ top: 0 });
    if (vue === "catalogue") { clearInterval(chronoTimer); chronoTimer = null; }
  }

  async function ouvrir(id) {
    try {
      K = await api("/kholles/" + id);
    } catch (e) {
      alert("Impossible d'ouvrir cette khôlle : " + e.message);
      return;
    }
    const url = new URL(location.href);
    url.searchParams.set("id", id);
    history.replaceState(null, "", url);
    rendreSeance();
    montrer("seance");
  }

  function rendreSeance() {
    const k = K.kholle, s = K.session;
    $("kh-titre").textContent = k.title;
    $("kh-chip-chap").textContent = k.chapitre || "";
    $("kh-chip-classe").textContent = k.classe || (k.level === "lycee" ? "Lycée" : "Collège");
    $("kh-chip-duree").textContent = "⏱ " + (k.duree || 25) + " min";
    $("kh-enonce").textContent = k.content;
    $("kh-notions").innerHTML = (k.notions || []).map(n => '<span class="kh-notion">' + esc(n) + "</span>").join("");
    $("kh-cout").textContent = A.isAdmin() ? "" : "1 crédit par message · 2 pour la correction";
    rendreThermo();
    rendreChat();
    rendreRedaction();
    rendreResultat();
    lancerChrono();
  }

  /* Thermomètre : froid / tiède / chaud, jamais plus précis que ça. */
  function rendreThermo() {
    const s = K.session;
    const p = s ? Number(s.proximite) || 0 : 0;
    const nb = K.kholle.nb_indices || 3;
    let mot = "—", couleur = "var(--muted)";
    if (s && s.etat === "redige")      { mot = "Terminé"; couleur = "var(--accent2)"; }
    else if (s && s.etat === "valide") { mot = "✅ Validé"; couleur = "var(--accent)"; }
    else if (!s || !(s.messages || []).length) { mot = "—"; }
    else if (p < 25)  { mot = "🧊 Froid"; couleur = "var(--primaire)"; }
    else if (p < 55)  { mot = "🌤 Tiède"; couleur = "var(--accent)"; }
    else if (p < 80)  { mot = "🔥 Chaud"; couleur = "var(--danger)"; }
    else              { mot = "🔥 Brûlant"; couleur = "var(--danger)"; }
    $("kh-thermo-mot").textContent = mot;
    $("kh-thermo-mot").style.color = couleur;
    $("kh-jauge").style.width = (s && s.etat !== "reflexion" ? 100 : p) + "%";
    $("kh-indices").textContent = "Indices : " + (s ? s.indices_donnes || 0 : 0) + " / " + nb;
    $("kh-etat-txt").textContent = !s ? "Pas encore commencé"
      : s.etat === "redige" ? "Copie rendue"
      : s.etat === "valide" ? "Plan validé — à rédiger"
      : "Réflexion en cours";
  }

  function bulle(m) {
    if (m.role === "eleve") return '<div class="kh-msg kh-msg-eleve">' + esc(m.texte) + "</div>";
    return '<div class="kh-msg kh-msg-kholleur' + (m.indice ? " kh-msg-indice" : "") + '">'
         + '<span class="kh-msg-tag">' + (m.indice ? "💡 Indice" : "Khôlleur") + "</span>" + esc(m.texte) + "</div>";
  }

  function rendreChat() {
    const s = K.session;
    const fil = $("kh-fil");
    const msgs = s ? (s.messages || []) : [];
    let html = "";
    if (!msgs.length) {
      html += '<div class="kh-msg kh-msg-kholleur"><span class="kh-msg-tag">Khôlleur</span>'
            + "Lis bien le problème, prends une feuille de brouillon, puis dis-moi par quoi tu comptes commencer et pourquoi. "
            + "Je ne te donnerai pas la réponse : je te dirai si tu chauffes, et je pourrai te lâcher quelques indices si tu bloques.</div>";
    }
    html += msgs.map(bulle).join("");
    if (s && s.etat !== "reflexion") {
      html += '<div class="kh-msg-valide">✅ Plan validé — tu peux rédiger ta copie ci-dessous.</div>';
    }
    if (s && s.etat === "redige") {
      html += '<div class="kh-msg-systeme">La khôlle est terminée. Recommence-la pour en discuter à nouveau.</div>';
    }
    fil.innerHTML = html;
    fil.scrollTop = fil.scrollHeight;
    const fini = s && s.etat === "redige";
    $("kh-saisie").style.display = fini ? "none" : "";
    $("kh-suggestions").style.display = fini ? "none" : "";
  }

  function rendreRedaction() {
    const s = K.session;
    const carte = $("kh-redaction");
    const ouvert = s && (s.etat === "valide" || s.etat === "redige");
    carte.classList.toggle("kh-verrou", !ouvert);
    $("kh-verrou").hidden = !!ouvert;
    if (s && s.etat === "redige") {
      $("kh-copie").value = s.reponse || "";
      $("kh-copie").disabled = true;
      $("kh-rendre").style.display = "none";
      $("kh-copie-aide").textContent = "Ta copie, telle que tu l'as rendue.";
    } else {
      $("kh-copie").disabled = false;
      $("kh-rendre").style.display = "";
      $("kh-copie-aide").textContent = "Tu rédiges seul : le khôlleur ne relit pas ta copie avant la correction.";
    }
  }

  function rendreResultat() {
    const s = K.session;
    const bloc = $("kh-resultat");
    if (!s || s.etat !== "redige" || !s.correction) { bloc.hidden = true; return; }
    const c = s.correction;
    const pts = c.points || {};
    bloc.hidden = false;
    bloc.innerHTML =
      '<div class="kh-card-t">📋 Copie corrigée</div>'
      + '<div class="kh-note kh-note-' + esc(c.verdict) + '"><b>' + esc(c.note) + '</b><span>/ 20 · '
      + (c.resultat_juste ? "résultat final juste" : "résultat final à revoir") + "</span></div>"
      + '<div class="kh-bareme">'
      + "<div><b>" + esc(pts.raisonnement) + " / 12</b><span>Raisonnement et exactitude</span></div>"
      + "<div><b>" + esc(pts.redaction) + " / 5</b><span>Rédaction</span></div>"
      + "<div><b>" + esc(pts.critique) + " / 3</b><span>Regard critique</span></div></div>"
      + '<div class="kh-bloc"><div class="kh-bloc-t">Appréciation</div><p>' + esc(c.appreciation) + "</p></div>"
      + (c.lecture ? '<div class="kh-bloc"><div class="kh-bloc-t">Ce que tu as fait</div><p>' + esc(c.lecture) + "</p></div>" : "")
      + ((c.erreurs || []).length
          ? '<div class="kh-bloc kh-bloc-erreur"><div class="kh-bloc-t">Erreurs relevées</div><ul>'
            + c.erreurs.map(e => "<li>" + esc(e) + "</li>").join("") + "</ul></div>"
          : '<div class="kh-bloc"><div class="kh-bloc-t">Erreurs relevées</div><p>Aucune erreur relevée.</p></div>')
      + (K.corrige ? '<details class="kh-details"><summary>Voir le corrigé modèle</summary><div class="kh-corrige">' + esc(K.corrige) + "</div></details>" : "")
      + '<div class="kh-actions"><button class="kh-btn-sec" id="kh-recommencer">↺ Recommencer cette khôlle</button>'
      + '<button class="kh-btn-sec" id="kh-autre">Choisir une autre khôlle</button></div>';
    $("kh-recommencer").onclick = recommencer;
    $("kh-autre").onclick = retourCatalogue;
    bloc.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* Chrono : depuis le premier message, pour que le temps ne file pas
     pendant que l'élève lit l'énoncé. */
  function lancerChrono() {
    clearInterval(chronoTimer);
    const el = $("kh-chrono");
    const tick = () => {
      const s = K && K.session;
      if (!s || !s.created_at) { el.textContent = "00:00"; el.classList.remove("kh-depasse"); return; }
      const fin = s.etat === "redige" && s.updated_at ? new Date(s.updated_at) : new Date();
      const sec = Math.max(0, Math.floor((fin - new Date(s.created_at)) / 1000));
      const mm = String(Math.floor(sec / 60)).padStart(2, "0"), ss = String(sec % 60).padStart(2, "0");
      el.textContent = mm + ":" + ss;
      el.classList.toggle("kh-depasse", sec > (K.kholle.duree || 25) * 60);
    };
    tick();
    chronoTimer = setInterval(tick, 1000);
  }

  /* ── Envoi d'un message au khôlleur ─────────────────────────────────── */
  async function envoyer() {
    if (envoiEnCours) return;
    const ta = $("kh-message");
    const texte = ta.value.trim();
    if (!texte) return;
    envoiEnCours = true;
    $("kh-envoyer").disabled = true;
    $("kh-chat-erreur").hidden = true;

    /* Affichage optimiste : le message de l'élève et une bulle d'attente. */
    const fil = $("kh-fil");
    fil.insertAdjacentHTML("beforeend", bulle({ role: "eleve", texte }));
    fil.insertAdjacentHTML("beforeend", '<div class="kh-msg kh-msg-kholleur kh-msg-attente" id="kh-attente">Le khôlleur réfléchit…</div>');
    fil.scrollTop = fil.scrollHeight;
    ta.value = "";

    try {
      const r = await api("/kholles/" + K.kholle.id + "/chat", {
        method: "POST", body: JSON.stringify({ message: texte }) });
      const avant = K.session ? K.session.etat : "reflexion";
      K.session = r.session;
      rendreThermo(); rendreChat(); rendreRedaction();
      if (avant === "reflexion" && r.session.etat === "valide") {
        $("kh-redaction").scrollIntoView({ behavior: "smooth", block: "center" });
      }
      const carte = KHOLLES.find(x => x.id === K.kholle.id);
      if (carte) carte.etat = r.session.etat;
      if (!chronoTimer) lancerChrono();
    } catch (e) {
      const att = $("kh-attente"); if (att) att.remove();
      ta.value = texte;
      const err = $("kh-chat-erreur");
      err.hidden = false;
      err.innerHTML = e.status === 402
        ? "Ta tirelire est vide. <a href=\"" + M.lien("compte.html") + "\">Recharger depuis mon compte →</a>"
        : esc(e.message);
    } finally {
      envoiEnCours = false;
      $("kh-envoyer").disabled = false;
      ta.focus();
    }
  }

  $("kh-envoyer").onclick = envoyer;
  $("kh-message").addEventListener("keydown", e => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); envoyer(); }
  });
  $("kh-suggestions").querySelectorAll(".kh-sugg").forEach(b => b.onclick = () => {
    const ta = $("kh-message");
    const t = b.dataset.txt;
    if (/\?$/.test(t)) { ta.value = t; envoyer(); }
    else { ta.value = t; ta.focus(); ta.setSelectionRange(t.length, t.length); }
  });

  /* ── Rendre sa copie ────────────────────────────────────────────────── */
  async function rendre() {
    const texte = $("kh-copie").value.trim();
    const err = $("kh-copie-erreur");
    err.hidden = true;
    if (texte.length < 30) { err.hidden = false; err.textContent = "Ta copie est trop courte pour être corrigée."; return; }
    if (!confirm("Rendre ta copie ? Tu ne pourras plus la modifier ensuite.")) return;
    const btn = $("kh-rendre");
    btn.disabled = true;
    btn.innerHTML = '<span class="ai-icon">✦</span> Correction en cours…';
    try {
      const r = await api("/kholles/" + K.kholle.id + "/reponse", {
        method: "POST", body: JSON.stringify({ reponse: texte }) });
      K.session = r.session; K.corrige = r.corrige;
      const carte = KHOLLES.find(x => x.id === K.kholle.id);
      if (carte) { carte.etat = "redige"; carte.note = r.session.note; }
      rendreThermo(); rendreChat(); rendreRedaction(); rendreResultat(); lancerChrono();
    } catch (e) {
      err.hidden = false;
      err.innerHTML = e.status === 402
        ? "Ta tirelire est vide. <a href=\"" + M.lien("compte.html") + "\">Recharger depuis mon compte →</a>"
        : esc(e.message);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<span class="ai-icon">✦</span> Rendre ma copie';
    }
  }
  $("kh-rendre").onclick = rendre;

  /* ── Recommencer / revenir ──────────────────────────────────────────── */
  async function recommencer() {
    if (!confirm("Recommencer cette khôlle ? La conversation et ta copie seront effacées (ta note reste dans ta progression).")) return;
    try {
      await api("/kholles/" + K.kholle.id + "/reset", { method: "POST" });
      K = await api("/kholles/" + K.kholle.id);
      const carte = KHOLLES.find(x => x.id === K.kholle.id);
      if (carte) { carte.etat = null; carte.note = null; }
      $("kh-copie").value = "";
      rendreSeance();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) { alert("Impossible de recommencer : " + e.message); }
  }

  function retourCatalogue() {
    const url = new URL(location.href);
    url.searchParams.delete("id");
    history.replaceState(null, "", url);
    K = null;
    rendreCatalogue();
    montrer("catalogue");
  }
  $("kh-retour").onclick = retourCatalogue;

  /* ── Démarrage ──────────────────────────────────────────────────────── */
  (async () => {
    await chargerCatalogue();
    const id = Number(params.get("id"));
    if (id) ouvrir(id);
  })();
})();
