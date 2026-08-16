/* Polymates — detection-constructions.js
   Repère, parmi les questions d'annales, celles qui demandent un TRACÉ.

   ── POURQUOI UN MODULE À PART ────────────────────────────────────────────
   La détection sert à trois endroits : au diagnostic (combien de questions
   sont concernées, dans quels sujets), à la séance (afficher le bon plateau)
   et à la correction (savoir qu'on attend un dessin). Mieux vaut une seule
   règle, testée une fois, que trois variantes divergentes.

   ── CE QU'ON DISTINGUE ───────────────────────────────────────────────────
   Toutes les consignes de tracé ne demandent pas la même chose :
     · "geometrie"  — construire une figure, une médiatrice, un cercle, ou
                      compléter la figure d'une annexe → widget de tracé ;
     · "repere"     — placer des points, tracer une droite dans un repère →
                      le quadrillage existant convient mieux ;
     · "diagramme"  — construire un diagramme en barres, un histogramme ;
     · null         — aucune construction attendue.

   Le mot « construire » ne suffit pas : « construire un tableau » n'appelle
   aucun dessin, et « la construction de la phrase » encore moins. La règle
   croise donc un VERBE de tracé et un OBJET géométrique.

   Usage :
     const { detecter } = require("./detection-constructions.js");
     detecter("Construire la médiatrice de [AB].")  →  { type:"geometrie", … }
*/

"use strict";

const norm = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/\s+/g, " ");

/* ── Les verbes qui appellent un geste ── */
const VERBES = /\b(construi|trace|tracer|dessine|dessiner|place|placer|reporte|reporter|complete|completer|represente|representer|marque|marquer|joindre|relie|relier|prolonge|prolonger|hachure|hachurer|colorie|colorier)/;

/* ── Les objets qui se dessinent ── */
const OBJETS_GEO = /\b(figure|triangle|carre|rectangle|losange|parallelogramme|cercle|arc|segment|droite|demi-droite|mediatrice|bissectrice|hauteur|mediane|perpendiculaire|parallele|angle|axe de symetrie|symetrique|image du point|patron|solide|polygone|quadrilatere|trapeze|hexagone|pentagone|tangente|rayon|diametre|corde|point [a-z]\b)/;
const OBJETS_REPERE = /\b(repere|coordonnees|abscisse|ordonnee|courbe representative|graphique de la fonction|droite d'equation)/;
const OBJETS_DIAG = /\b(diagramme|histogramme|batons|camembert|secteurs|boite a moustaches|nuage de points|polygone des effectifs)/;

/* ── L'annexe : signe fort, l'élève dessine sur un document fourni ── */
const ANNEXE = /\b(annexe|document reponse|feuille annexe|a rendre avec la copie|ci-contre|sur la figure ci)/;

/* ── Ce qui ressemble à un tracé sans en être un ── */
const FAUX_AMIS = /\b(construire un tableau|completer le tableau|completer la phrase|completer l'egalite|completer les pointilles|construction de la phrase|tableau de proportionnalite|completer le programme)/;

function detecter(enonce) {
  const t = norm(enonce);
  if (!t) return { type: null, raison: "énoncé vide" };

  if (FAUX_AMIS.test(t)) return { type: null, raison: "faux ami (tableau, phrase…)" };

  const verbe = VERBES.test(t);
  const annexe = ANNEXE.test(t);

  /* Un diagramme d'abord : « construire un diagramme » est sans ambiguïté. */
  if (verbe && OBJETS_DIAG.test(t))
    return { type: "diagramme", raison: "verbe de tracé + diagramme", annexe };

  if (verbe && OBJETS_REPERE.test(t))
    return { type: "repere", raison: "verbe de tracé + repère", annexe };

  if (verbe && OBJETS_GEO.test(t))
    return { type: "geometrie", raison: "verbe de tracé + objet géométrique", annexe };

  /* Une annexe seule, avec un verbe de tracé, reste une construction : on ne
     sait pas quoi, mais on sait qu'il faut dessiner. */
  if (verbe && annexe)
    return { type: "geometrie", raison: "verbe de tracé sur une annexe", annexe: true };

  return { type: null, raison: verbe ? "verbe de tracé, mais aucun objet à dessiner"
                                     : "aucun verbe de tracé" };
}

/* Compte les questions concernées dans un sujet. */
function analyserSujet(questions) {
  const parType = { geometrie: 0, repere: 0, diagramme: 0 };
  let avecAnnexe = 0;
  const detail = [];
  (questions || []).forEach((q, i) => {
    const d = detecter((q.enonce_correction || "") + " " + (q.enonce || ""));
    if (d.type) {
      parType[d.type]++;
      if (d.annexe) avecAnnexe++;
      detail.push({ index: i, titre: String(q.enonce || "").split(" — ")[0], type: d.type,
                    annexe: !!d.annexe, pages: q.pages || [] });
    }
  });
  const total = parType.geometrie + parType.repere + parType.diagramme;
  return { total, parType, avecAnnexe, detail };
}

module.exports = { detecter, analyserSujet, norm };
