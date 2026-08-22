/* ════════════════════════════════════════════════════════════════
   POLYMATES — CONTENU : PHYSIQUE-CHIMIE

   Même forme que contenu.js (mathématiques) :
     · structure → les chapitres regroupés par thème (filtres, sélecteurs)
     · arbre     → l'arbre des connaissances (tree.html)
     · themes    → le cours rédigé de chaque chapitre

   La structure et l'arbre suivent les quatre thèmes du programme de cycle 4.
   `themes` est volontairement vide pour l'instant : les pages savent l'afficher
   comme « contenu à venir » sans rien casser. Pour rédiger un chapitre, il
   suffit d'ajouter une entrée dans THEMES sur le modèle de contenu.js :

     "Masse volumique": {
       lecon:{ definitions:[…], proprietes:[…], exemples:[…] },
       methodes:{ etapes:[…], erreurs:[…] },
       exemple:{ enonce:"…", etapes:[…] },
       problemes:[ { enonce:"…", solution:"…" } ]
     }
   ════════════════════════════════════════════════════════════════ */
(function () {

/* ── Les quatre thèmes du programme et leurs chapitres ── */
const STRUCTURE = [
  /* ── COLLÈGE (cycle 4) ───────────────────────────────────────────────────
     `niveaux` indique à quels niveaux appartient un groupe de chapitres : la
     page exercices n'affiche, sous un filtre de niveau, que les chapitres de
     ce niveau. Sans cette clé, les chapitres du collège apparaissaient aussi
     sous le bouton « Lycée ». */
  {
    "subject": "MATIÈRE",
    "color": "#7ab4c8",
    "niveaux": ["college"],
    "chapters": [
      "États et changements d'état",
      "Masse, volume et masse volumique",
      "Mélanges et solutions",
      "Transformations chimiques",
      "Atomes, molécules et ions",
      "Combustions",
      "Acides, bases et pH"
    ]
  },
  {
    "subject": "MOUVEMENTS ET INTERACTIONS",
    "color": "#c8a07a",
    "niveaux": ["college"],
    "chapters": [
      "Décrire un mouvement",
      "Vitesse",
      "Forces et interactions",
      "Poids et masse",
      "Gravitation"
    ]
  },
  {
    "subject": "ÉNERGIE",
    "color": "#e8a87c",
    "niveaux": ["college"],
    "chapters": [
      "Formes et sources d'énergie",
      "Conversions et conservation",
      "Circuits électriques",
      "Tension et intensité",
      "Loi d'Ohm",
      "Puissance et énergie électrique",
      "Sécurité électrique"
    ]
  },
  {
    "subject": "SIGNAUX",
    "color": "#a07ac8",
    "niveaux": ["college"],
    "chapters": [
      "Lumière et vision",
      "Signaux lumineux",
      "Signaux sonores",
      "Signaux et communication"
    ]
  },

  /* ── LYCÉE : seconde (tronc commun) + spécialité physique-chimie ──────────
     Les quatre thèmes du programme du lycée. Les intitulés sont distincts de
     ceux du collège, sinon les exercices des deux niveaux tomberaient dans la
     même carte de chapitre. */
  {
    "subject": "CONSTITUTION ET TRANSFORMATIONS DE LA MATIÈRE — LYCÉE",
    "color": "#7ab4c8",
    "niveaux": ["lycee"],
    "chapters": [
      "Corps purs, mélanges et espèces chimiques (2nde)",
      "Entités chimiques, mole et quantité de matière",
      "Solutions aqueuses, concentration et dosage par étalonnage",
      "Transformations physiques, chimiques et nucléaires (2nde)",
      "Schéma de Lewis, géométrie et polarité des molécules",
      "Cohésion de la matière et dissolution",
      "Suivi d'une transformation : avancement et réactif limitant",
      "Molécules organiques : familles fonctionnelles et nomenclature",
      "Spectroscopie IR et analyse de molécules",
      "Synthèse organique et rendement",
      "Énergies de liaison, combustions et énergie de réaction",
      "Cinétique chimique, catalyse et temps de demi-réaction",
      "Acides, bases, pH et titrages",
      "Oxydoréduction, piles et électrolyse",
      "Évolution spontanée : quotient de réaction et équilibre",
      "Stratégie de synthèse, mécanismes et polymères"
    ]
  },
  {
    "subject": "MOUVEMENT ET INTERACTIONS — LYCÉE",
    "color": "#c8a07a",
    "niveaux": ["lycee"],
    "chapters": [
      "Référentiel, trajectoire et vitesse (2nde)",
      "Forces, interactions et principe d'inertie (2nde)",
      "Vecteur vitesse et variation du vecteur vitesse",
      "Lois de Newton et quantité de mouvement",
      "Mouvement dans un champ de pesanteur uniforme",
      "Mouvement dans un champ électrique uniforme",
      "Satellites, planètes et lois de Kepler",
      "Statique des fluides : pression et poussée d'Archimède",
      "Écoulement d'un fluide et débit"
    ]
  },
  {
    "subject": "L'ÉNERGIE : CONVERSIONS ET TRANSFERTS — LYCÉE",
    "color": "#e8a87c",
    "niveaux": ["lycee"],
    "chapters": [
      "Énergie cinétique, potentielle et mécanique (2nde)",
      "Travail d'une force et théorème de l'énergie cinétique",
      "Circuits électriques : loi des mailles et modèle du générateur",
      "Puissance, énergie électrique et rendement",
      "Premier principe de la thermodynamique",
      "Transferts thermiques et capacité thermique",
      "Bilans énergétiques et évolution d'une température"
    ]
  },
  {
    "subject": "ONDES ET SIGNAUX — LYCÉE",
    "color": "#a07ac8",
    "niveaux": ["lycee"],
    "chapters": [
      "Émission et perception d'un son (2nde)",
      "Lentilles minces et formation des images (2nde)",
      "Lumière : spectres, photon et niveaux d'énergie",
      "Ondes mécaniques : célérité, période et longueur d'onde",
      "Intensité sonore et niveau d'intensité",
      "Diffraction et interférences",
      "Effet Doppler",
      "Lunette astronomique et instruments d'optique",
      "Circuit RC, capteurs et signaux électriques"
    ]
  }
];

/* ── Arbre des connaissances (même format que celui des maths) ──
   `notions` reste vide tant que les cours ne sont pas rédigés : l'arbre est
   navigable, chaque chapitre existe, et le contenu viendra s'y greffer. */
const ARBRE = [
  { id:'matiere', label:'Matière', color:'#7ab4c8',
    subs:[
      { label:"États et changements d'état",     notions:[] },
      { label:"Masse, volume et masse volumique", notions:[] },
      { label:"Mélanges et solutions",            notions:[] },
      { label:"Transformations chimiques",        notions:[] },
      { label:"Atomes, molécules et ions",        notions:[] },
      { label:"Combustions",                      notions:[] },
      { label:"Acides, bases et pH",              notions:[] },
    ]
  },
  { id:'mouvements', label:'Mouvements et interactions', color:'#c8a07a',
    subs:[
      { label:"Décrire un mouvement",   notions:[] },
      { label:"Vitesse",                notions:[] },
      { label:"Forces et interactions", notions:[] },
      { label:"Poids et masse",         notions:[] },
      { label:"Gravitation",            notions:[] },
    ]
  },
  { id:'energie', label:'Énergie', color:'#e8a87c',
    subs:[
      { label:"Formes et sources d'énergie",    notions:[] },
      { label:"Conversions et conservation",    notions:[] },
      { label:"Circuits électriques",           notions:[] },
      { label:"Tension et intensité",           notions:[] },
      { label:"Loi d'Ohm",                      notions:[] },
      { label:"Puissance et énergie électrique", notions:[] },
      { label:"Sécurité électrique",            notions:[] },
    ]
  },
  { id:'signaux', label:'Signaux', color:'#a07ac8',
    subs:[
      { label:"Lumière et vision",        notions:[] },
      { label:"Signaux lumineux",         notions:[] },
      { label:"Signaux sonores",          notions:[] },
      { label:"Signaux et communication", notions:[] },
    ]
  }
];

/* ── Cours rédigés : à remplir chapitre par chapitre ── */
const THEMES = {};

if (typeof window !== 'undefined') {
  window.CONTENU_PAR_MATIERE = window.CONTENU_PAR_MATIERE || {};
  window.CONTENU_PAR_MATIERE["physique-chimie"] = {
    themes: THEMES,
    structure: STRUCTURE,
    arbre: ARBRE,
  };
}

})();
