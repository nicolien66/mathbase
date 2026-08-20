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
    { id:"accueil",    page:"francais.html",            nom:"L'atelier",     marque:"❦" },
    { id:"cours",      page:"francais-cours.html",      nom:"Le cours",      marque:"¶" },
    { id:"exercices",  page:"francais-exercices.html",  nom:"Exercices",     marque:"✎" },
    { id:"dictee",     page:"francais-dictee.html",     nom:"Dictées",       marque:"☙" },
    { id:"conjugueur", page:"francais-conjugueur.html", nom:"Conjugueur",    marque:"⁂" },
    { id:"memento",    page:"francais-memento.html",    nom:"Mémento",       marque:"☞" },
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

  /* ── Les onglets de reliure ────────────────────────────────── */
  function rubans(salleActive, large) {
    const nav = el("nav", "rubans" + (large ? " large" : ""));
    nav.setAttribute("aria-label", "Les salles de l'atelier");
    SALLES.forEach(s => {
      const a = document.createElement("a");
      a.className = "ruban";
      a.href = lien(s.page);
      a.innerHTML = '<span class="marque" aria-hidden="true">' + s.marque + '</span>' +
                    '<span>' + ech(s.nom) + '</span>';
      if (s.id === salleActive) a.setAttribute("aria-current", "page");
      nav.appendChild(a);
    });
    return nav;
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
    if (ancre) ancre.replaceWith(rubans(salleActive, options.large));

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
    SALLES, installer, rubans, lien, lienChapitre, nomChapitre,
    ech, fmt, el, melange, pareil,
  };
})();
