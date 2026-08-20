/* ═══════════════════════════════════════════════════════════════
   POLYMATES — francais-progres.js
   La mémoire de l'atelier : ce qui a été lu, réussi, manqué.

   Tout tient en local (localStorage), par élève. Aucun réseau : l'atelier
   fonctionne hors ligne, et rien ne part ailleurs.

     MB_FR.etat()                      → l'objet complet
     MB_FR.luChapitre(themeId, chapId) → marque un cours comme lu
     MB_FR.estLu(themeId, chapId)      → vrai / faux
     MB_FR.noteExercice(chapId, juste) → enregistre une réponse
     MB_FR.noteDictee(fiche)           → enregistre une dictée corrigée
     MB_FR.faute(mot, attendu, type, chapId) → dépose une faute au carnet
     MB_FR.aReviser(n)                 → les n fautes dues aujourd'hui
     MB_FR.revue(mot, reussi)          → met à jour une faute révisée
     MB_FR.serie()                     → { jours, dernier } la série de jours
     MB_FR.stats()                     → chiffres pour le tableau de bord

   Répétition espacée : une faute revient après 1, 3, 7, 16 puis 35 jours
   si elle est réussie ; le compteur retombe à zéro dès qu'elle est ratée.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const PALIERS = [1, 3, 7, 16, 35];   /* en jours */
  const VERSION = 1;

  function cle() {
    let qui = "invite";
    try {
      const u = window.MB_AUTH && MB_AUTH.user && MB_AUTH.user();
      if (u && u.pseudo) qui = String(u.pseudo).toLowerCase().replace(/[^a-z0-9]+/g, "-");
    } catch (_) {}
    return "mb_francais_" + qui;
  }

  const VIDE = {
    v: VERSION,
    lus: {},            /* "theme/chapitre" → date ISO */
    exercices: {},      /* chapitreId → { faits, justes } */
    dictees: [],        /* { id, titre, date, score, mots, fautes } */
    carnet: {},         /* mot → { attendu, type, chapitre, palier, du, vus, ratés } */
    jours: [],          /* dates ISO des jours de travail, la plus récente en tête */
  };

  function charger() {
    try {
      const brut = localStorage.getItem(cle());
      if (!brut) return JSON.parse(JSON.stringify(VIDE));
      const e = JSON.parse(brut);
      /* Un état écrit par une version antérieure est complété, pas jeté. */
      return Object.assign(JSON.parse(JSON.stringify(VIDE)), e);
    } catch (_) { return JSON.parse(JSON.stringify(VIDE)); }
  }

  let etat = charger();

  function ecrire() {
    try { localStorage.setItem(cle(), JSON.stringify(etat)); } catch (_) {}
    window.dispatchEvent(new CustomEvent("mb-francais-progres"));
  }

  /* ── Dates : on ne travaille qu'en jours pleins, sans fuseau ── */
  function jour(d) {
    const x = d ? new Date(d) : new Date();
    return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") +
           "-" + String(x.getDate()).padStart(2, "0");
  }
  function plus(jours) {
    const x = new Date();
    x.setDate(x.getDate() + jours);
    return jour(x);
  }
  function ecart(a, b) {
    return Math.round((new Date(b) - new Date(a)) / 86400000);
  }

  /* Chaque action marque la journée : c'est ce qui nourrit la série. */
  function pointer() {
    const h = jour();
    if (etat.jours[0] !== h) etat.jours.unshift(h);
    if (etat.jours.length > 400) etat.jours.length = 400;
  }

  /* ── Cours lus ── */
  function luChapitre(themeId, chapId) {
    etat.lus[themeId + "/" + chapId] = new Date().toISOString();
    pointer(); ecrire();
  }
  function estLu(themeId, chapId) {
    return !!etat.lus[themeId + "/" + chapId];
  }

  /* ── Exercices ── */
  function noteExercice(chapId, juste) {
    const c = etat.exercices[chapId] || (etat.exercices[chapId] = { faits: 0, justes: 0 });
    c.faits++; if (juste) c.justes++;
    pointer(); ecrire();
  }
  function scoreChapitre(chapId) {
    const c = etat.exercices[chapId];
    if (!c || !c.faits) return null;
    return Math.round(100 * c.justes / c.faits);
  }

  /* ── Dictées ── */
  function noteDictee(fiche) {
    etat.dictees.unshift(Object.assign({ date: new Date().toISOString() }, fiche));
    if (etat.dictees.length > 60) etat.dictees.length = 60;
    pointer(); ecrire();
  }

  /* ── Le carnet de fautes ──────────────────────────────────────
     Une faute est rangée sous le mot attendu : deux erreurs sur le même
     mot ne font qu'une entrée, mais le compteur monte. */
  function faute(ecrit, attendu, type, chapitre) {
    const k = String(attendu).toLowerCase();
    const f = etat.carnet[k] || (etat.carnet[k] = {
      attendu: attendu, palier: -1, du: jour(), vus: 0, ratés: 0, erreurs: []
    });
    f.type = type || f.type;
    f.chapitre = chapitre || f.chapitre;
    f.ratés++;
    f.palier = -1;                 /* on repart de zéro */
    f.du = jour();                 /* à revoir aujourd'hui */
    if (ecrit && f.erreurs.indexOf(ecrit) < 0) {
      f.erreurs.unshift(ecrit);
      if (f.erreurs.length > 4) f.erreurs.length = 4;
    }
    ecrire();
  }

  function aReviser(n) {
    const h = jour();
    const dus = Object.keys(etat.carnet)
      .map(k => Object.assign({ mot: k }, etat.carnet[k]))
      .filter(f => ecart(f.du, h) >= 0)
      .sort((a, b) => (b.ratés - a.ratés) || a.du.localeCompare(b.du));
    return n ? dus.slice(0, n) : dus;
  }

  function revue(mot, reussi) {
    const f = etat.carnet[String(mot).toLowerCase()];
    if (!f) return;
    f.vus++;
    if (reussi) {
      f.palier = Math.min(f.palier + 1, PALIERS.length - 1);
      f.du = plus(PALIERS[f.palier]);
      /* Cinq réussites d'affilée au dernier palier : le mot est acquis. */
      if (f.palier === PALIERS.length - 1 && f.vus - f.ratés >= 5) {
        delete etat.carnet[String(mot).toLowerCase()];
      }
    } else {
      f.ratés++; f.palier = -1; f.du = jour();
    }
    pointer(); ecrire();
  }

  function oublier(mot) {
    delete etat.carnet[String(mot).toLowerCase()];
    ecrire();
  }

  /* ── La série : jours consécutifs de travail ── */
  function serie() {
    if (!etat.jours.length) return { jours: 0, dernier: null };
    const h = jour();
    const d = etat.jours[0];
    const depuis = ecart(d, h);
    if (depuis > 1) return { jours: 0, dernier: d };   /* la série est rompue */
    let n = 1;
    for (let i = 1; i < etat.jours.length; i++) {
      if (ecart(etat.jours[i], etat.jours[i - 1]) === 1) n++; else break;
    }
    return { jours: n, dernier: d };
  }

  /* ── Tableau de bord ── */
  function stats() {
    const ex = Object.values(etat.exercices);
    const faits = ex.reduce((n, c) => n + c.faits, 0);
    const justes = ex.reduce((n, c) => n + c.justes, 0);
    const d = etat.dictees;
    return {
      lus: Object.keys(etat.lus).length,
      exFaits: faits,
      exJustes: justes,
      exTaux: faits ? Math.round(100 * justes / faits) : null,
      dictees: d.length,
      dicteeMoyenne: d.length
        ? Math.round(d.reduce((n, x) => n + (x.score || 0), 0) / d.length) : null,
      dicteeMeilleure: d.length ? Math.max.apply(null, d.map(x => x.score || 0)) : null,
      carnet: Object.keys(etat.carnet).length,
      aReviser: aReviser().length,
      serie: serie().jours,
    };
  }

  function reinitialiser() {
    etat = JSON.parse(JSON.stringify(VIDE));
    ecrire();
  }

  /* Un même onglet ne suffit pas : si l'élève travaille dans deux fenêtres,
     on relit l'état quand l'autre écrit. */
  window.addEventListener("storage", e => {
    if (e.key === cle()) { etat = charger(); window.dispatchEvent(new CustomEvent("mb-francais-progres")); }
  });

  window.MB_FR = {
    etat: () => etat,
    luChapitre, estLu,
    noteExercice, scoreChapitre,
    noteDictee, dictees: () => etat.dictees.slice(),
    faute, aReviser, revue, oublier, carnet: () => etat.carnet,
    serie, stats, reinitialiser,
    jour, PALIERS,
  };
})();
