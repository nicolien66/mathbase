/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — analyse.js
   L'Analyse des compétences, côté navigateur : accueil (démarrer, reprendre,
   fiches passées), séance (chat avec l'examinateur, carte des compétences
   qui se colore au fil des réponses), fiche finale (par thème, faiblesses
   puis forces). Toute la logique d'évaluation est au serveur.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  const $   = id => document.getElementById(id);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g,
    c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const M = window.MB_MAT, A = window.MB_AUTH;
  const ETIQ = { acquis: "acquis", fragile: "fragile", non_acquis: "non acquis" };

  if (!M || !["mathematiques", "physique-chimie"].includes(M.id)) {
    document.querySelector(".an-wrap").innerHTML = "";
    M && M.etatVide(".an-wrap", "Pas d'analyse en " + M.nom, "L'analyse des compétences n'existe que pour les mathématiques et la physique-chimie.");
    return;
  }
  $("an-hero-matiere").textContent = M.nom;
  document.title = "Polymates — Analyse des compétences · " + M.nom;
  if (A && A.isDemo && A.isDemo()) {
    $("vue-accueil").innerHTML = '<div class="an-vide">L\'analyse a besoin d\'un compte connecté au serveur.<br><a href="index.html" style="color:var(--accent)">Se connecter</a></div>';
    return;
  }

  let ACCUEIL = null, S = null, envoi = false;

  async function api(url, opts) {
    const res = await A.apiFetch(url, opts);
    let data = null; try { data = await res.json(); } catch (_) {}
    if (!res.ok) { const e = new Error((data && (data.message || data.error)) || ("Erreur " + res.status)); e.status = res.status; throw e; }
    return data;
  }
  function erreur(id, e) {
    const el = $(id); el.hidden = false;
    el.innerHTML = e.status === 402 ? "Ta tirelire est vide. <a href=\"" + M.lien("compte.html") + "\">Recharger depuis mon compte →</a>" : esc(e.message);
  }
  function montrer(vue) {
    ["accueil", "seance", "fiche"].forEach(v => { $("vue-" + v).hidden = v !== vue; });
    window.scrollTo({ top: 0 });
  }
  const dateFr = d => new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  /* ═══════════ ACCUEIL ═══════════ */
  async function chargerAccueil() {
    try { ACCUEIL = await api("/analyse?matiere=" + encodeURIComponent(M.id)); }
    catch (e) { erreur("an-accueil-erreur", e); return; }
    const sel = $("an-classe");
    sel.innerHTML = '<option value="">— choisis —</option>' + ACCUEIL.classes.map(c => "<option>" + esc(c) + "</option>").join("");
    if (ACCUEIL.classe_profil && ACCUEIL.classes.includes(ACCUEIL.classe_profil)) sel.value = ACCUEIL.classe_profil;
    perimetreTexte();
    const r = ACCUEIL.en_cours;
    $("an-reprise").hidden = !r;
    $("an-demarrer").hidden = !!r;
    if (r) $("an-reprise-txt").textContent = "Élève de " + r.classe + " · " + r.nb_questions + " question" + (r.nb_questions > 1 ? "s" : "") + " posée" + (r.nb_questions > 1 ? "s" : "") + " · dernière activité le " + dateFr(r.updated_at) + ".";
    const f = ACCUEIL.fiches;
    $("an-fiches").innerHTML = f.length ? f.map(x => {
      const c = x.compte || {};
      return '<button class="an-fiche-l" data-id="' + x.id + '"><b>' + esc(x.classe) + "</b>"
        + '<span class="an-pastilles"><i style="background:var(--accent2)" title="acquis"></i>' + (c.acquis || 0)
        + ' <i style="background:var(--accent)" title="fragile"></i>' + (c.fragile || 0)
        + ' <i style="background:var(--danger)" title="non acquis"></i>' + (c.non_acquis || 0) + "</span>"
        + "<small>" + dateFr(x.updated_at) + "</small></button>";
    }).join("") : '<span class="an-rien">Aucune fiche pour l\'instant.</span>';
    $("an-fiches").querySelectorAll("[data-id]").forEach(b => b.onclick = () => ouvrir(Number(b.dataset.id)));
  }
  function perimetreTexte() {
    const c = $("an-classe").value;
    const ordre = ["CM2", "6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale"];
    const i = ordre.indexOf(c);
    $("an-perim").innerHTML = i > 0
      ? "L'analyse portera sur le programme de <b>" + esc(c) + "</b>, comme si l'année était terminée."
      : "Choisis ta classe : l'analyse porte sur le programme de l'année.";
  }
  $("an-classe").onchange = perimetreTexte;

  $("an-commencer").onclick = async () => {
    const classe = $("an-classe").value;
    $("an-accueil-erreur").hidden = true;
    if (!classe) { erreur("an-accueil-erreur", new Error("Choisis d'abord ta classe.")); return; }
    const b = $("an-commencer"); b.disabled = true; b.innerHTML = '<span class="ai-icon">✦</span> Préparation…';
    try {
      const r = await api("/analyse/demarrer", { method: "POST", body: JSON.stringify({ matiere: M.id, classe }) });
      S = r.session; rendreSeance(); montrer("seance");
    } catch (e) { erreur("an-accueil-erreur", e); }
    finally { b.disabled = false; b.innerHTML = '<span class="ai-icon">✦</span> Commencer l\'analyse'; }
  };
  $("an-reprendre").onclick = () => ouvrir(ACCUEIL.en_cours.id);
  $("an-abandonner").onclick = async () => {
    if (!confirm("Abandonner l'analyse en cours ? Les réponses données seront perdues.")) return;
    try { await api("/analyse/" + ACCUEIL.en_cours.id, { method: "DELETE" }); chargerAccueil(); }
    catch (e) { erreur("an-accueil-erreur", e); }
  };

  async function ouvrir(id) {
    try { S = (await api("/analyse/" + id)).session; }
    catch (e) { alert(e.message); return; }
    if (S.etat === "terminee") { rendreFiche(); montrer("fiche"); }
    else { rendreSeance(); montrer("seance"); }
  }

  /* ═══════════ SÉANCE ═══════════ */
  function rendreSeance() {
    $("an-titre").textContent = "Analyse · élève de " + S.classe;
    $("an-cout").textContent = A.isAdmin() ? "" : "1 crédit par question · 3 pour la fiche";
    rendreCarte(); rendreFil();
  }
  function classeComp(e, id) {
    if (!e) return "";
    let c = e.etat || "";
    if (e.a_confirmer) c += " a_confirmer";
    if (e.suspect && !e.etat) c = "suspect";
    if (S.cible === id) c += " cible";
    return c;
  }
  function rendreCarte() {
    const perim = S.perimetre || [], etats = S.competences || {};
    const parTheme = {};
    perim.forEach(c => (parTheme[c.theme] = parTheme[c.theme] || []).push(c));
    $("an-carte").innerHTML = Object.keys(parTheme).map(t =>
      '<div class="an-theme"><div class="an-theme-t">' + esc(t) + '</div><div class="an-comps">'
      + parTheme[t].map(c => {
        const e = etats[c.id];
        const titre = c.classe + " · " + c.libelle + (e && e.etat ? " — " + ETIQ[e.etat] + (e.a_confirmer ? " (à confirmer)" : "") : e && e.suspect ? " — à vérifier" : "");
        return '<span class="an-comp ' + classeComp(e, c.id) + '" title="' + esc(titre) + '"></span>';
      }).join("") + "</div></div>").join("");
    const jugees = perim.filter(c => etats[c.id] && etats[c.id].etat && !etats[c.id].a_confirmer).length;
    $("an-prog-txt").textContent = jugees + " / " + perim.length + " compétences";
    $("an-prog-b").style.width = (perim.length ? 100 * jugees / perim.length : 0) + "%";
    $("an-nbq").textContent = S.nb_questions + " question" + (S.nb_questions > 1 ? "s" : "");
    const cible = perim.find(c => c.id === S.cible);
    $("an-cible-txt").innerHTML = cible ? "Question en cours : <b>" + esc(cible.libelle) + "</b> (" + esc(cible.classe) + ")" : "";
  }
  function bulle(m) {
    if (m.role === "eleve") return '<div class="an-msg an-msg-eleve">' + esc(m.texte) + "</div>";
    const ev = m.evaluation && m.evaluation.verdict;
    const tag = ev === "juste" ? "✔ Juste" : ev === "partiel" ? "◐ Partiel" : ev === "faux" ? "✘ Faux" : (m.question ? m.question.type === "cours" ? "Question de cours" : m.question.type === "probleme" ? "Petit problème" : "Exercice" : "Examinateur");
    let visuel = "";
    if (m.visuel && m.visuel.widget === "axe" && window.MB_AXE) {
      try { MB_AXE.injecterStyles && MB_AXE.injecterStyles(); visuel = '<div class="an-visuel">' + MB_AXE.apercu(m.visuel) + "</div>"; } catch (_) {}
    }
    /* Sessions anciennes : l'énoncé pouvait manquer dans le texte. */
    let enonce = "";
    if (m.question && m.question.enonce) {
      const extrait = m.question.enonce.replace(/\s+/g, " ").slice(0, 40).toLowerCase();
      if (!String(m.texte || "").replace(/\s+/g, " ").toLowerCase().includes(extrait)) enonce = '<div class="an-enonce">' + esc(m.question.enonce) + "</div>";
    }
    return '<div class="an-msg an-msg-ia"><span class="an-msg-tag ' + esc(ev || "") + '">' + tag + "</span>" + esc(m.texte) + enonce + visuel + "</div>";
  }
  function rendreFil() {
    const fil = $("an-fil");
    fil.innerHTML = (S.messages || []).map(bulle).join("")
      + (!S.cible && S.etat === "en_cours" ? '<div class="an-msg-fin">Toutes les compétences ont été évaluées : demande ta fiche.</div>' : "");
    fil.scrollTop = fil.scrollHeight;
    const fini = !S.cible || S.etat !== "en_cours";
    $("an-saisie").style.display = fini ? "none" : "";
    $("an-jsp").style.display = fini ? "none" : "";
  }

  async function envoyer(texteForce) {
    if (envoi) return;
    const ta = $("an-message");
    const texte = (texteForce || ta.value).trim();
    if (!texte) return;
    envoi = true; $("an-envoyer").disabled = true; $("an-chat-erreur").hidden = true;
    const fil = $("an-fil");
    fil.insertAdjacentHTML("beforeend", bulle({ role: "eleve", texte }) + '<div class="an-msg an-msg-ia an-msg-attente" id="an-attente">L\'examinateur évalue ta réponse…</div>');
    fil.scrollTop = fil.scrollHeight; ta.value = "";
    try {
      const r = await api("/analyse/" + S.id + "/tour", { method: "POST", body: JSON.stringify({ message: texte }) });
      S = r.session; rendreCarte(); rendreFil();
    } catch (e) {
      const att = $("an-attente"); if (att) att.remove();
      ta.value = texte; erreur("an-chat-erreur", e);
    } finally { envoi = false; $("an-envoyer").disabled = false; ta.focus(); }
  }
  $("an-envoyer").onclick = () => envoyer();
  $("an-jsp").onclick = () => envoyer("Je ne sais pas.");
  $("an-message").addEventListener("keydown", e => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); envoyer(); } });

  $("an-terminer").onclick = async () => {
    const n = Object.keys(S.competences || {}).length;
    if (!n) { alert("Réponds d'abord à quelques questions."); return; }
    if (S.cible && !confirm("Terminer maintenant ? La fiche sera établie sur les " + n + " compétences déjà évaluées ; les autres resteront à vérifier.")) return;
    const b = $("an-terminer"); b.disabled = true; b.textContent = "Rédaction de la fiche…";
    try {
      const r = await api("/analyse/" + S.id + "/terminer", { method: "POST" });
      S = r.session; rendreFiche(); montrer("fiche");
    } catch (e) { erreur("an-chat-erreur", e); }
    finally { b.disabled = false; b.textContent = "Terminer et voir ma fiche"; }
  };

  /* ═══════════ FICHE ═══════════ */
  function rendreFiche() {
    const b = S.bilan || {}, c = b.compte || {};
    const perim = S.perimetre || [];
    $("an-fiche-sous").textContent = M.nom + " · élève de " + S.classe + " · " + dateFr(S.updated_at) + " · " + S.nb_questions + " questions";
    $("an-compte").innerHTML =
      '<div class="c-acquis"><b>' + (c.acquis || 0) + "</b><span>acquis</span></div>"
      + '<div class="c-fragile"><b>' + (c.fragile || 0) + "</b><span>fragile</span></div>"
      + '<div class="c-non"><b>' + (c.non_acquis || 0) + "</b><span>non acquis</span></div>"
      + "<div><b>" + (c.non_evaluee || 0) + "</b><span>à vérifier</span></div>";
    $("an-synthese").textContent = b.synthese || "";
    $("an-priorites").innerHTML = (b.priorites || []).map(p => "<li>" + esc(p) + "</li>").join("") || "<li>Aucune priorité particulière.</li>";
    /* Les thèmes dans l'ordre du référentiel ; un thème sans entrée est signalé « à vérifier ». */
    const themesRef = [...new Set(perim.map(x => x.theme))];
    const parNom = {}; (b.themes || []).forEach(t => { parNom[t.theme] = t; });
    $("an-themes").innerHTML = themesRef.map(nom => {
      const t = parNom[nom];
      if (!t) return '<div class="an-card an-theme-card"><div class="an-theme-h"><h2>' + esc(nom) + '</h2><span class="an-niveau">à vérifier</span></div><div class="an-rien">Aucune compétence de ce thème n\'a été évaluée.</div></div>';
      const item = (f, force) => '<div class="an-item"><b>' + esc(f.libelle) + ' <span style="color:var(--muted);font-weight:300">(' + esc(f.classe) + ')</span>'
        + (force ? "" : '<span class="an-etat ' + esc(f.etat || "") + '">' + esc(ETIQ[f.etat] || "") + "</span>") + "</b>"
        + esc(f.constat) + (f.conseil ? '<span class="an-conseil">' + esc(f.conseil) + "</span>" : "") + "</div>";
      return '<div class="an-card an-theme-card ' + esc(t.niveau) + '"><div class="an-theme-h"><h2>' + esc(t.theme) + '</h2><span class="an-niveau">' + esc(t.niveau) + "</span></div>"
        + (t.commentaire ? '<div class="an-theme-c">' + esc(t.commentaire) + "</div>" : "")
        + '<div class="an-bloc-t faible">À consolider</div>' + (t.faiblesses.length ? t.faiblesses.map(f => item(f, false)).join("") : '<div class="an-rien">Rien à signaler.</div>')
        + '<div class="an-bloc-t force">Points d\'appui</div>' + (t.forces.length ? t.forces.map(f => item(f, true)).join("") : '<div class="an-rien">Pas encore de point d\'appui confirmé.</div>')
        + "</div>";
    }).join("");
  }
  $("an-nouvelle").onclick = async () => { await chargerAccueil(); montrer("accueil"); };
  $("an-retour").onclick = $("an-retour-2").onclick = async () => { await chargerAccueil(); montrer("accueil"); };

  chargerAccueil();
})();
