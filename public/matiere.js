/* ═══════════════════════════════════════════════════════════════
   POLYMATES — matiere.js : la matière courante, partagée par tout le site.

   Le site était entièrement pensé pour les mathématiques. Plutôt que de
   dupliquer chaque page par matière, ce module introduit une dimension
   « matière » que toutes les pages consultent :

     · MB_MAT.id / .nom / .couleur   → la matière en cours
     · MB_MAT.lien("tree.html")      → un lien qui conserve la matière
     · MB_MAT.contenu()              → { themes, structure, arbre } de la matière
     · MB_MAT.etatVide(hôte, titre)  → panneau « rien ici pour l'instant »

   Les données de chaque matière s'enregistrent dans window.CONTENU_PAR_MATIERE
   (voir contenu.js pour les maths, contenu-physique-chimie.js pour la PC).

   Usage : <script src="matiere.js"></script> AVANT les scripts de la page.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const DEFAUT = "mathematiques";
  const CLE    = "mb_matiere";

  /* Catalogue unique : matieres.html s'en sert pour ses boutons, et les
     autres pages pour afficher le nom et la couleur de la matière. */
  /* `accueil` : chaque matière ouvre sur sa propre page. Les matières
     scientifiques partagent l'interface sombre (app.html) ; le français et
     l'histoire-géographie ont la leur, sur papier (humanites.html). */
  const MATIERES = [
    { id:"mathematiques",   nom:"Mathématiques",       icone:"📐", couleur:"#7ac8a0", ouverte:true,
      accueil:"app.html",
      desc:"Arbre des connaissances, cours animés, tutoriels, exercices et annales." },
    { id:"physique-chimie", nom:"Physique-Chimie",     icone:"🧪", couleur:"#7ab4c8", ouverte:true,
      accueil:"app.html",
      desc:"Matière, mouvements, énergie et signaux : cours, exercices et annales." },
    { id:"francais",        nom:"Français",            icone:"📖", couleur:"#a07ac8", ouverte:true,
      accueil:"humanites.html",
      desc:"Langue, littérature et expression écrite." },
    { id:"histoire-geo",    nom:"Histoire-Géographie", icone:"🌍", couleur:"#c8a07a", ouverte:true,
      accueil:"histoire.html",
      desc:"Repères historiques, cartes et enjeux du monde actuel." },
    { id:"anglais",         nom:"Anglais",             icone:"🗣️", couleur:"#c8b97a", ouverte:false,
      accueil:"app.html",
      desc:"Vocabulaire, grammaire et compréhension orale et écrite." },
    { id:"svt",             nom:"SVT",                 icone:"🧬", couleur:"#c87a9a", ouverte:false,
      accueil:"app.html",
      desc:"Sciences de la vie et de la Terre." },
  ];

  /* ── Quelle matière ? l'URL prime, sinon le dernier choix, sinon maths ── */
  function resoudre() {
    let id = null;
    try { id = new URLSearchParams(location.search).get("matiere"); } catch (_) {}
    if (!id) { try { id = localStorage.getItem(CLE); } catch (_) {} }
    const m = MATIERES.find(x => x.id === id && x.ouverte);
    return m || MATIERES.find(x => x.id === DEFAUT);
  }

  const courante = resoudre();
  try { localStorage.setItem(CLE, courante.id); } catch (_) {}

  /* ── Liens qui conservent la matière (le hash reste en fin d'URL) ── */
  function lien(href) {
    if (!href || /^(https?:|mailto:|#)/.test(href)) return href;
    if (courante.id === DEFAUT) return href;              // maths : URL propre
    const [base, hash] = String(href).split("#");
    const sep = base.includes("?") ? "&" : "?";
    return base + sep + "matiere=" + encodeURIComponent(courante.id) + (hash ? "#" + hash : "");
  }

  /* ── Contenu de la matière (thèmes, chapitres, arbre) ── */
  function registre() { return window.CONTENU_PAR_MATIERE || {}; }
  function contenu()  { return registre()[courante.id] || {}; }

  /* Les pages existantes lisent THEME_CONTENT et CHAPTER_STRUCTURE comme des
     variables globales. On les branche sur la matière courante via des
     accesseurs : le code appelant n'a pas besoin de changer, et l'ordre de
     chargement des fichiers de contenu n'a plus d'importance. */
  try {
    Object.defineProperty(window, "THEME_CONTENT", {
      configurable: true, get() { return contenu().themes || {}; }
    });
    Object.defineProperty(window, "CHAPTER_STRUCTURE", {
      configurable: true, get() { return contenu().structure || []; }
    });
  } catch (_) { /* propriété déjà définie : sans conséquence */ }

  /* ── Panneau « aucun contenu pour cette matière » ── */
  function etatVide(hote, titre, texte) {
    const el = typeof hote === "string" ? document.querySelector(hote) : hote;
    if (!el) return;
    el.innerHTML =
      `<div style="max-width:560px;margin:4rem auto;padding:2.2rem;text-align:center;
                   background:#111110;border:1px solid rgba(255,255,255,.13);
                   border-top:2px solid ${courante.couleur};border-radius:16px;">
         <div style="font-size:2rem;margin-bottom:.8rem">${courante.icone}</div>
         <div style="font-family:'Playfair Display',Georgia,serif;font-size:1.35rem;margin-bottom:.6rem">
           ${titre || "Rien ici pour l'instant"}
         </div>
         <p style="color:rgba(240,236,224,.55);font-size:.9rem;line-height:1.7">
           ${texte || ("Cette section n'a pas encore de contenu en " + courante.nom +
                       ". La structure est en place : le contenu viendra s'y ajouter.")}
         </p>
         <a href="${lien(courante.accueil || "app.html")}" style="display:inline-block;margin-top:1.4rem;color:${courante.couleur};
            font-size:.86rem;text-decoration:none">← Retour à l'accueil ${courante.nom}</a>
       </div>`;
  }

  window.MB_MAT = {
    id: courante.id, nom: courante.nom, icone: courante.icone,
    couleur: courante.couleur, accueil: courante.accueil || "app.html", defaut: DEFAUT,
    est(id) { return courante.id === id; },
    estMaths() { return courante.id === DEFAUT; },
    liste() { return MATIERES.slice(); },
    info(id) { return MATIERES.find(m => m.id === id) || null; },
    lien, contenu, etatVide,
    /* Réécrit tous les liens internes d'une page pour conserver la matière. */
    propager(racine) {
      if (courante.id === DEFAUT) return;
      (racine || document).querySelectorAll('a[href]').forEach(a => {
        const h = a.getAttribute("href");
        if (h && !/^(https?:|mailto:|#|javascript:)/.test(h) && !/matiere=/.test(h)) {
          a.setAttribute("href", lien(h));
        }
      });
    },
  };
})();
