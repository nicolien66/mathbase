/* ═══════════════════════════════════════════════════════════════
   POLYMATES — francais-atelier.js : le mobilier commun des pages.

   Chaque salle de l'atelier appelle MB_ATELIER.installer("dictee") :
   la page reçoit alors ses onglets de reliure, son bandeau, son garde-fou
   de matière, et les quelques outils que toutes partagent (échappement,
   mise en forme, mélange aléatoire).
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const SALLES = [
    { id:"accueil",    page:"francais.html",            nom:"Accueil",      ico:"🏠" },
    { id:"cours",      page:"francais-cours.html",      nom:"Cours",        ico:"📖" },
    { id:"exercices",  page:"francais-exercices.html",  nom:"Exercices",    ico:"✏️" },
    { id:"dictee",     page:"francais-dictee.html",     nom:"Dictées",      ico:"🎧" },
    { id:"conjugueur", page:"francais-conjugueur.html", nom:"Conjugueur",   ico:"🔤" },
    { id:"memento",    page:"francais-memento.html",    nom:"Mémento",      ico:"📋" },
  ];

  /* ── Outils partagés ───────────────────────────────────────── */
  function ech(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  /* *mot* met en valeur ; ✓ et ✗ prennent leur couleur. */
  function fmt(t) {
    return ech(t)
      .replace(/\*([^*]+)\*/g, '<b class="saillant">$1</b>')
      .replace(/✓/g, '<span class="juste">✓</span>')
      .replace(/✗/g, '<span class="faux">✗</span>');
  }
  function el(balise, classe, html) {
    const e = document.createElement(balise);
    if (classe) e.className = classe;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function melange(tableau) {
    const t = tableau.slice();
    for (let i = t.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [t[i], t[j]] = [t[j], t[i]];
    }
    return t;
  }
  /* Comparaison souple : la casse, les espaces et l'apostrophe ne comptent
     pas — les accents, eux, comptent toujours. C'est du français. */
  function pareil(a, b) {
    const n = s => String(s || "").trim().toLowerCase()
      .replace(/[’‘`]/g, "'").replace(/\s+/g, " ")
      .replace(/[.!?;:]+$/, "");
    return n(a) === n(b);
  }
  function lien(page) {
    return (window.MB_MAT && MB_MAT.lien) ? MB_MAT.lien(page) : page;
  }

  /* ── La barre de navigation ─────────────────────────────────
     Une entrée par salle, avec son icône et son nom en clair ; l'onglet
     de la page courante est souligné. Un lien « Matières » ramène au
     choix de matière. */
  function rubans(salleActive) {
    const nav = el("nav", "fr-nav");
    nav.setAttribute("aria-label", "Navigation du français");
    const inner = el("div", "fr-nav-inner");
    SALLES.forEach(s => {
      const a = document.createElement("a");
      a.className = "fr-onglet";
      a.href = lien(s.page);
      a.innerHTML = '<span class="ico" aria-hidden="true">' + s.ico + '</span><span>' + ech(s.nom) + '</span>';
      if (s.id === salleActive) a.setAttribute("aria-current", "page");
      inner.appendChild(a);
    });
    const m = document.createElement("a");
    m.className = "fr-onglet retour"; m.href = "matieres.html"; m.textContent = "↩ Matières";
    inner.appendChild(m);
    nav.appendChild(inner);
    return nav;
  }

  /* ── L'en-tête compact d'une page ───────────────────────────
     Un titre, une ligne, et les boutons d'action à droite. Remplace
     les longs préambules. */
  function entete(titre, sous, actions, fil) {
    const e = el("div");
    if (fil && fil.length) {
      const f = el("div", "fil-ariane");
      fil.forEach((x, i) => {
        if (i) f.appendChild(el("i", null, "›"));
        if (x.href) { const a = document.createElement("a"); a.href = x.href; a.textContent = x.nom; if (x.onclick) a.onclick = ev => { ev.preventDefault(); x.onclick(); }; f.appendChild(a); }
        else f.appendChild(el("span", null, ech(x.nom)));
      });
      e.appendChild(f);
    }
    const h = el("div", "entete");
    const g = el("div");
    g.appendChild(el("h1", null, titre));
    if (sous) g.appendChild(el("p", "entete-sous", ech(sous)));
    h.appendChild(g);
    if (actions && actions.length) {
      const ac = el("div", "entete-actions");
      actions.forEach(x => {
        const b = document.createElement(x.href ? "a" : "button");
        b.className = "btn" + (x.classe ? " " + x.classe : "");
        if (x.href) b.href = x.href; else b.type = "button";
        if (x.onclick) b.onclick = x.onclick;
        b.textContent = x.nom;
        ac.appendChild(b);
      });
      h.appendChild(ac);
    }
    e.appendChild(h);
    return e;
  }

  /* ── Installation ──────────────────────────────────────────── */
  function installer(salleActive, options) {
    options = options || {};

    /* Une autre matière arrivée ici par un lien ancien repart chez elle. */
    if (window.MB_MAT && MB_MAT.id !== "francais") {
      location.replace(lien(MB_MAT.accueil) || "matieres.html");
      return false;
    }
    document.body.setAttribute("data-matiere", "francais");

    const ancre = document.getElementById("rubans");
    if (ancre) ancre.replaceWith(rubans(salleActive));

    const lecteur = document.getElementById("lecteur");
    if (lecteur) {
      const u = window.MB_AUTH && MB_AUTH.user && MB_AUTH.user();
      if (u && u.pseudo) lecteur.textContent = u.pseudo;
    }
    const sortir = document.getElementById("sortir");
    if (sortir) sortir.onclick = () => MB_AUTH.logout();

    if (window.MB_MAT && MB_MAT.propager) MB_MAT.propager(document);
    return true;
  }

  /* Un lien vers un chapitre précis du cours, tel que le produisent les
     corrections de dictée et les explications d'exercice. */
  function lienChapitre(chapId) {
    const themes = window.FRANCAIS_THEMES || [];
    for (const t of themes) {
      if (t.chapitres.some(c => c.id === chapId)) {
        return lien("francais-cours.html") +
          (lien("francais-cours.html").indexOf("#") >= 0 ? "" : "#" + t.id + "/" + chapId);
      }
    }
    return lien("francais-cours.html");
  }
  function nomChapitre(chapId) {
    const themes = window.FRANCAIS_THEMES || [];
    for (const t of themes) {
      const c = t.chapitres.find(x => x.id === chapId);
      if (c) return c.nom;
    }
    return null;
  }

  window.MB_ATELIER = {
    SALLES, installer, rubans, entete, lien, lienChapitre, nomChapitre,
    ech, fmt, el, melange, pareil,
  };
})();
