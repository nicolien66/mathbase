/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — examen-widgets.js

   Installe un widget dans l'espace de réponse de la page EXAMEN (annales).

   Pourquoi ce fichier : le mécanisme `interactif` existait déjà, mais
   uniquement pour la banque d'exercices, sur la page de séance. La page
   Examen, elle, n'offrait qu'un textarea — un exercice demandant de compléter
   un tableau ou de placer des points n'avait aucun moyen d'être traité.

   Le contrat est celui des autres widgets : une question porte un champ
   `interactif` = { widget, …params, reponse }. S'il est absent, la page se
   comporte exactement comme avant. Le widget ne remplace jamais le brouillon
   sans raison : pour un tableau ou un axe, l'énoncé demande presque toujours
   aussi une justification rédigée.

   Usage : <script src="examen-widgets.js"></script> AVANT script.js.
   ═══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";

  /* Chaque widget : le module global qui le porte, l'installateur, et si le
     brouillon écrit reste utile à côté. */
  const WIDGETS = {
    tableau:     { mod: "MB_TABLEAU",     brouillon: true,
                   label: "Complète le tableau, puis rédige ta réponse" },
    axe:         { mod: "MB_AXE",         brouillon: true,
                   label: "Place les points, puis rédige ta réponse" },
    diagramme:   { mod: "MB_DIAGRAMME",   brouillon: true,
                   label: "Construis le diagramme, puis rédige ta réponse" },
    quadrillage: { mod: "MB_QUADRILLAGE", brouillon: false,
                   label: "Construis la figure" },
    solide:      { mod: "MB_SOLIDES",     brouillon: true,
                   label: "Observe le solide, puis rédige ta réponse" },
    figure:      { mod: "MB_FIGURE",      brouillon: true,
                   label: "Observe la figure, puis rédige ta réponse" },
  };

  const BOITE = "mb-exam-widget";
  let courant = null;          // { nom, plateau, params }

  function lireParams(q) {
    let p = q && q.interactif;
    if (!p) return null;
    if (typeof p === "string") { try { p = JSON.parse(p); } catch (e) { return null; } }
    if (!p || !p.widget) return null;
    const def = WIDGETS[p.widget];
    /* Un widget déclaré mais non chargé ne doit pas faire disparaître la
       question : on retombe silencieusement sur le textarea. */
    if (!def || !global[def.mod]) return null;
    return p;
  }

  /* Monte le widget au-dessus du brouillon. Renvoie true si un widget a été
     installé, false si la question reste en réponse rédigée. */
  function monter(q, opts) {
    demonter();
    const params = lireParams(q);
    if (!params) return false;

    const def = WIDGETS[params.widget];
    const zone = document.getElementById("exam-answer-zone")
              || (document.getElementById("exam-answer") || {}).parentNode;
    const ta = document.getElementById("exam-answer");
    if (!zone) return false;

    const boite = document.createElement("div");
    boite.id = BOITE;
    boite.style.marginBottom = "1rem";
    zone.insertBefore(boite, ta || zone.firstChild);

    if (ta) ta.style.display = def.brouillon ? "" : "none";
    const lab = document.getElementById("exam-answer-label");
    if (lab) lab.textContent = def.label;

    const plateau = global[def.mod].installer(params, boite, { papier: false });
    courant = { nom: params.widget, plateau, params };

    /* Le bouton « Valider » interne ferait double emploi avec celui de
       l'examen, qui enregistre la réponse et fait avancer l'épreuve. */
    const v = boite.querySelector('[data-a="valider"]');
    if (v) v.style.display = "none";

    /* Question déjà corrigée : on rejoue la correction et on fige. */
    if (opts && opts.corrige && params.reponse && plateau && plateau.instance) {
      try { plateau.instance().corriger(params.reponse); } catch (e) {}
    }
    return true;
  }

  function demonter() {
    const b = document.getElementById(BOITE);
    if (b) b.remove();
    const ta = document.getElementById("exam-answer");
    if (ta) ta.style.display = "";
    courant = null;
  }

  /* État du plateau, à joindre à la réponse envoyée au correcteur. */
  function lire() {
    if (!courant || !courant.plateau || !courant.plateau.instance) return null;
    try { return { widget: courant.nom, etat: courant.plateau.instance().lire() }; }
    catch (e) { return null; }
  }

  /* Correction locale quand le widget sait vérifier lui-même. Renvoie null
     si la correction doit rester à la charge du correcteur habituel. */
  function corriger() {
    if (!courant || !courant.params.reponse) return null;
    const def = WIDGETS[courant.nom];
    const mod = global[def.mod];
    if (!mod || typeof mod.verifier !== "function") return null;
    const inst = courant.plateau.instance();
    const r = mod.verifier(inst.lire(), courant.params.reponse);
    inst.corriger(courant.params.reponse);
    return r;
  }

  /* Résumé lisible du plateau, pour que le correcteur IA sache ce que l'élève
     a construit quand le widget ne se vérifie pas seul. */
  function resume() {
    const l = lire();
    if (!l) return "";
    try { return "[" + l.widget + "] " + JSON.stringify(l.etat); }
    catch (e) { return ""; }
  }

  global.MB_EXAM_WIDGET = { monter, demonter, lire, corriger, resume, lireParams };
})(typeof globalThis !== "undefined" ? globalThis : this);
