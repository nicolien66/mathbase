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
  {
    "subject": "MATIÈRE",
    "color": "#7ab4c8",
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
    "chapters": [
      "Lumière et vision",
      "Signaux lumineux",
      "Signaux sonores",
      "Signaux et communication"
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
