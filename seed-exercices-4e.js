/* ═══════════════════════════════════════════════════════════════
   MathBase — seed-exercices-4e.js
   Ajoute 99 exercices ORIGINAUX et INDÉPENDANTS de 4ème à la
   table « exercises » (un exercice = une tâche ciblée + corrigé) :
   relatifs (4 opérations), fractions (4 opérations et priorités),
   puissances et écriture scientifique, arithmétique, priorités,
   calcul littéral (double distributivité), équations,
   proportionnalité et vitesses, pourcentages, statistiques,
   probabilités, Pythagore, Thalès, cosinus, translation et
   rotation, pyramides et cônes.
   Les problèmes (type "probleme") alimentent l'onglet Problèmes.

   Usage :
     railway run node seed-exercices-4e.js
     ou : DATABASE_URL=postgres://... node seed-exercices-4e.js
   Idempotent : un exercice déjà présent (titre + classe) est ignoré.
   ═══════════════════════════════════════════════════════════════ */
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const CLASSE = "4ème";
const LEVEL = "college";

/* E(chapitre, subject, difficulty, type, title, content, solution) */
const E = (chapitre, subject, difficulty, type, title, content, solution) =>
  ({ chapitre, subject, difficulty, type, title, content, solution });

const EXOS_4E = [

  /* ═══ NOMBRES RELATIFS ═══ */
  E("Nombres relatifs","Arithmétique","Facile","exercice","Sommes de relatifs",
    "Calcule :\na) (−11) + (−7)\nb) (+9) + (−14)",
    "a) −18\nb) −5"),
  E("Nombres relatifs","Arithmétique","Facile","exercice","Simplifier une soustraction",
    "Simplifie l'écriture puis calcule : (+6) − (−8).",
    "(+6) − (−8) = 6 + 8 = 14."),
  E("Nombres relatifs","Arithmétique","Moyen","exercice","Suite d'opérations",
    "Calcule de gauche à droite : −3 + 9 − 12 + 5.",
    "−3 + 9 = 6 ; 6 − 12 = −6 ; −6 + 5 = −1.\nRésultat : −1."),
  E("Nombres relatifs","Arithmétique","Facile","exercice","Produit de deux négatifs",
    "Calcule : (−6) × (−7).",
    "+42 : le produit de deux nombres négatifs est positif."),
  E("Nombres relatifs","Arithmétique","Facile","exercice","Produit de signes contraires",
    "Calcule : 8 × (−9).",
    "−72 : le produit de deux nombres de signes contraires est négatif."),
  E("Nombres relatifs","Arithmétique","Moyen","exercice","La règle des signes en chaîne",
    "Sans calculer, donne le signe de (−4) × 5 × (−3) × (−2), puis calcule.",
    "Trois facteurs négatifs (nombre impair) : le produit est négatif.\n(−4) × 5 = −20 ; (−3) × (−2) = 6 ; −20 × 6 = −120."),
  E("Nombres relatifs","Arithmétique","Moyen","exercice","Quotients de relatifs",
    "Calcule :\na) (−63) ÷ 9\nb) (−48) ÷ (−6)",
    "a) −7\nb) +8"),
  E("Nombres relatifs","Arithmétique","Moyen","exercice","Produits de décimaux relatifs",
    "Calcule :\na) (−2,5) × 4\nb) (−0,5) × (−12)",
    "a) −10\nb) +6"),
  E("Nombres relatifs","Arithmétique","Difficile","exercice","Priorités avec des relatifs",
    "Calcule : 7 − 4 × (−3).",
    "La multiplication est prioritaire : 4 × (−3) = −12.\n7 − (−12) = 7 + 12 = 19."),
  E("Nombres relatifs","Arithmétique","Difficile","exercice","Quotient puis somme",
    "Calcule : (−36) ÷ (−4) + (−15).",
    "(−36) ÷ (−4) = 9, puis 9 + (−15) = −6."),
  E("Nombres relatifs","Arithmétique","Moyen","probleme","Les points du quiz",
    "Dans un quiz, une bonne réponse rapporte 4 points et une mauvaise en enlève 2.\nInès donne 7 bonnes réponses et 5 mauvaises. Quel est son score ?",
    "7 × 4 + 5 × (−2) = 28 − 10 = 18 points."),
  E("Nombres relatifs","Arithmétique","Difficile","probleme","La dette partagée",
    "Six amis se partagent équitablement une dette de 84 €.\nQuel nombre relatif représente la part de chacun ?",
    "(−84) ÷ 6 = −14 : chacun doit 14 € (part de −14 €)."),

  /* ═══ FRACTIONS ═══ */
  E("Fractions","Arithmétique","Facile","exercice","Simplifier des fractions",
    "Simplifie au maximum :\na) 36/48\nb) 25/45",
    "a) 36/48 = 3/4 (division par 12).\nb) 25/45 = 5/9 (division par 5)."),
  E("Fractions","Arithmétique","Moyen","exercice","Somme de dénominateurs quelconques",
    "Calcule : 2/3 + 3/5.",
    "Dénominateur commun 15 : 10/15 + 9/15 = 19/15."),
  E("Fractions","Arithmétique","Moyen","exercice","Différence de fractions",
    "Calcule et simplifie : 5/4 − 7/12.",
    "5/4 = 15/12, donc 15/12 − 7/12 = 8/12 = 2/3."),
  E("Fractions","Arithmétique","Moyen","exercice","Somme avec un relatif",
    "Calcule : −3/8 + 1/2.",
    "1/2 = 4/8, donc −3/8 + 4/8 = 1/8."),
  E("Fractions","Arithmétique","Facile","exercice","Produit de fractions",
    "Calcule : (3/7) × (2/5).",
    "(3 × 2)/(7 × 5) = 6/35."),
  E("Fractions","Arithmétique","Moyen","exercice","Produit avec un signe",
    "Calcule et simplifie : (−5/6) × (3/10).",
    "−15/60 = −1/4 (un seul facteur négatif : résultat négatif)."),
  E("Fractions","Arithmétique","Moyen","exercice","L'inverse d'un nombre",
    "Donne l'inverse de :\na) 9\nb) −4/7",
    "a) 1/9\nb) −7/4"),
  E("Fractions","Arithmétique","Moyen","exercice","Quotient de fractions",
    "Calcule et simplifie : (3/4) ÷ (9/8).",
    "Diviser, c'est multiplier par l'inverse : (3/4) × (8/9) = 24/36 = 2/3."),
  E("Fractions","Arithmétique","Difficile","exercice","Priorités avec des fractions",
    "Calcule : 1/2 + 1/3 × 3/4.",
    "Multiplication d'abord : 1/3 × 3/4 = 3/12 = 1/4.\n1/2 + 1/4 = 2/4 + 1/4 = 3/4."),
  E("Fractions","Arithmétique","Difficile","exercice","Expression avec parenthèses",
    "Calcule : (2/3 − 1/6) × 4/5.",
    "2/3 = 4/6, donc 4/6 − 1/6 = 3/6 = 1/2.\n(1/2) × (4/5) = 4/10 = 2/5."),
  E("Fractions","Arithmétique","Moyen","probleme","Le terrain partagé",
    "Sur un terrain, le potager occupe les 2/5 de la surface et les fleurs en occupent le quart.\nQuelle fraction du terrain est occupée ? Quelle fraction reste libre ?",
    "2/5 = 8/20 et 1/4 = 5/20 : 8/20 + 5/20 = 13/20 occupés.\nIl reste 7/20 du terrain."),
  E("Fractions","Arithmétique","Difficile","probleme","Les sachets de café",
    "Un torréfacteur répartit 9/2 kg de café en sachets de 3/8 kg.\nCombien de sachets remplit-il ?",
    "(9/2) ÷ (3/8) = (9/2) × (8/3) = 72/6 = 12 sachets."),

  /* ═══ PUISSANCES ═══ */
  E("Puissances","Arithmétique","Facile","exercice","Calculer une puissance",
    "Calcule :\na) 3⁴\nb) 2⁶",
    "a) 3 × 3 × 3 × 3 = 81\nb) 64"),
  E("Puissances","Arithmétique","Facile","exercice","Puissances d'un nombre négatif",
    "Calcule :\na) (−2)⁴\nb) (−2)⁵",
    "a) +16 (exposant pair)\nb) −32 (exposant impair)"),
  E("Puissances","Arithmétique","Moyen","exercice","Le signe d'une puissance",
    "Sans calculer, donne le signe de (−7)⁸ et de (−3)¹¹.",
    "(−7)⁸ est positif (exposant pair) ; (−3)¹¹ est négatif (exposant impair)."),
  E("Puissances","Arithmétique","Moyen","exercice","Exposant négatif",
    "Donne l'écriture décimale de 5⁻².",
    "5⁻² = 1/5² = 1/25 = 0,04."),
  E("Puissances","Arithmétique","Moyen","exercice","(−6)² ou −6² ?",
    "Calcule (−6)² puis −6². Explique la différence.",
    "(−6)² = (−6) × (−6) = 36.\n−6² = −(6 × 6) = −36 : sans parenthèses, la puissance ne porte que sur 6."),
  E("Puissances","Arithmétique","Moyen","exercice","Puissances de 10",
    "Donne l'écriture décimale de 10⁶ et de 10⁻⁴.",
    "10⁶ = 1 000 000 ; 10⁻⁴ = 0,000 1."),
  E("Puissances","Arithmétique","Moyen","exercice","Produit et quotient de puissances de 10",
    "Donne le résultat sous forme d'une puissance de 10 :\na) 10⁴ × 10⁵\nb) 10⁸ ÷ 10²",
    "a) 10⁴⁺⁵ = 10⁹\nb) 10⁸⁻² = 10⁶"),
  E("Puissances","Arithmétique","Difficile","exercice","Écriture scientifique",
    "Donne l'écriture scientifique de :\na) 62 500 000\nb) 0,009 3",
    "a) 6,25 × 10⁷\nb) 9,3 × 10⁻³"),
  E("Puissances","Arithmétique","Difficile","exercice","Priorités avec des puissances",
    "Calcule : 5 × 3², puis (5 × 3)². Compare.",
    "5 × 3² = 5 × 9 = 45.\n(5 × 3)² = 15² = 225.\nLes résultats sont différents : la puissance est prioritaire sur la multiplication."),
  E("Puissances","Arithmétique","Difficile","probleme","Les bactéries qui doublent",
    "Une bactérie se divise en deux chaque heure. On part d'une seule bactérie.\nCombien y en a-t-il au bout de 10 heures ? Écris le calcul avec une puissance.",
    "Le nombre double 10 fois : 2¹⁰ = 1 024 bactéries."),

  /* ═══ ARITHMÉTIQUE ═══ */
  E("Arithmétique","Arithmétique","Facile","exercice","Critères de divisibilité",
    "Le nombre 522 est-il divisible par 2 ? par 3 ? par 9 ? par 5 ? Justifie.",
    "Par 2 : oui (pair). Par 3 : 5 + 2 + 2 = 9, oui. Par 9 : oui (somme 9).\nPar 5 : non (ne se termine ni par 0 ni par 5)."),
  E("Arithmétique","Arithmétique","Moyen","exercice","Tous les diviseurs",
    "Écris la liste de tous les diviseurs de 45.",
    "1 ; 3 ; 5 ; 9 ; 15 ; 45 (paires : 1×45, 3×15, 5×9)."),
  E("Arithmétique","Arithmétique","Moyen","exercice","Plus petit multiple commun",
    "Quel est le plus petit multiple commun (non nul) de 8 et 12 ?",
    "Multiples de 8 : 8, 16, 24… Multiples de 12 : 12, 24…\nLe plus petit multiple commun est 24."),
  E("Arithmétique","Arithmétique","Difficile","probleme","Les guirlandes synchronisées",
    "Deux guirlandes clignotent ensemble à l'instant 0. La première clignote toutes les 6 secondes, la seconde toutes les 10 secondes.\nAu bout de combien de temps clignotent-elles à nouveau ensemble ?",
    "On cherche le plus petit multiple commun de 6 et 10.\nMultiples de 6 : 6, 12, 18, 24, 30… ; de 10 : 10, 20, 30…\nElles clignotent ensemble au bout de 30 secondes."),

  /* ═══ ENCHAÎNEMENT D'OPÉRATIONS ═══ */
  E("Enchaînement d'opérations","Algèbre","Facile","exercice","Priorité de la multiplication",
    "Calcule : 60 − 6 × 7.",
    "60 − 42 = 18."),
  E("Enchaînement d'opérations","Algèbre","Moyen","exercice","Parenthèses imbriquées",
    "Calcule : 100 − [4 × (9 + 6)].",
    "9 + 6 = 15 ; 4 × 15 = 60 ; 100 − 60 = 40."),
  E("Enchaînement d'opérations","Algèbre","Difficile","exercice","Quotient de deux expressions",
    "Calcule : (18 + 6) ÷ (10 − 4).",
    "24 ÷ 6 = 4."),

  /* ═══ CALCUL LITTÉRAL ═══ */
  E("Calcul littéral","Algèbre","Facile","exercice","Réduire une expression",
    "Réduis : 9x + 4 − 3x + 6.",
    "9x − 3x + 4 + 6 = 6x + 10."),
  E("Calcul littéral","Algèbre","Moyen","exercice","Réduire avec des x²",
    "Réduis : 5x² − 2x + x² + 7x.",
    "5x² + x² − 2x + 7x = 6x² + 5x."),
  E("Calcul littéral","Algèbre","Moyen","exercice","Distributivité simple",
    "Développe :\na) 7(2x − 3)\nb) −3(4x + 5)",
    "a) 14x − 21\nb) −12x − 15"),
  E("Calcul littéral","Algèbre","Moyen","exercice","Développer 2x(3x + 4)",
    "Développe : 2x(3x + 4).",
    "2x × 3x + 2x × 4 = 6x² + 8x."),
  E("Calcul littéral","Algèbre","Difficile","exercice","Double distributivité",
    "Développe et réduis : (x + 4)(x + 6).",
    "x² + 6x + 4x + 24 = x² + 10x + 24."),
  E("Calcul littéral","Algèbre","Difficile","exercice","Double distributivité avec signes",
    "Développe et réduis : (3x − 2)(x + 5).",
    "3x² + 15x − 2x − 10 = 3x² + 13x − 10."),
  E("Calcul littéral","Algèbre","Moyen","exercice","Supprimer des parenthèses",
    "Réduis : (7x + 3) − (2x − 8).",
    "7x + 3 − 2x + 8 = 5x + 11\n(le « − » devant la parenthèse change chaque signe)."),
  E("Calcul littéral","Algèbre","Difficile","exercice","Factoriser",
    "Factorise :\na) 15x + 20\nb) x² + 6x",
    "a) 5(3x + 4)\nb) x(x + 6)"),
  E("Calcul littéral","Algèbre","Moyen","exercice","Tester une égalité",
    "L'égalité 6x − 1 = 4x + 7 est-elle vérifiée pour x = 4 ?",
    "6×4 − 1 = 23 et 4×4 + 7 = 23.\nOui, elle est vérifiée pour x = 4."),
  E("Calcul littéral","Algèbre","Difficile","probleme","L'aire du panneau",
    "Un panneau rectangulaire a pour largeur 5 m et pour longueur (x + 3) m.\n1) Exprime son aire en fonction de x, sous forme développée.\n2) Calcule cette aire pour x = 4.",
    "1) A = 5(x + 3) = 5x + 15.\n2) A = 5 × 4 + 15 = 35 m²."),

  /* ═══ ÉQUATIONS ═══ */
  E("Équations","Algèbre","Facile","exercice","Équation d'addition",
    "Résous : x + 13 = 5.",
    "x = 5 − 13 = −8."),
  E("Équations","Algèbre","Facile","exercice","Équation de multiplication",
    "Résous : 6x = −54.",
    "x = −54 ÷ 6 = −9."),
  E("Équations","Algèbre","Moyen","exercice","Équation en deux étapes",
    "Résous : 4x + 7 = 31.",
    "4x = 31 − 7 = 24, donc x = 6."),
  E("Équations","Algèbre","Moyen","exercice","L'inconnue des deux côtés",
    "Résous : 9x − 4 = 5x + 16.",
    "9x − 5x = 16 + 4 → 4x = 20 → x = 5."),
  E("Équations","Algèbre","Moyen","exercice","Équation avec parenthèses",
    "Résous : 2(x + 5) = 26.",
    "2x + 10 = 26 → 2x = 16 → x = 8."),
  E("Équations","Algèbre","Difficile","exercice","Coefficient négatif",
    "Résous : 5 − 3x = 20.",
    "−3x = 20 − 5 = 15, donc x = 15 ÷ (−3) = −5."),
  E("Équations","Algèbre","Moyen","probleme","Le nombre mystère",
    "« Je pense à un nombre, je le multiplie par 3, j'ajoute 8 et je trouve 29. »\nÉcris une équation et trouve ce nombre.",
    "3x + 8 = 29 → 3x = 21 → x = 7."),
  E("Équations","Algèbre","Difficile","probleme","Les âges de Paul et Zoé",
    "Paul a 4 ans de plus que Zoé. La somme de leurs âges est 30 ans.\nÉcris une équation et trouve l'âge de chacun.",
    "Zoé : x ; Paul : x + 4.\nx + (x + 4) = 30 → 2x = 26 → x = 13.\nZoé a 13 ans et Paul 17 ans."),

  /* ═══ PROPORTIONNALITÉ ═══ */
  E("Proportionnalité","Arithmétique","Facile","exercice","Reconnaître la proportionnalité",
    "Le tableau donne : 5 → 12 et 15 → 36.\nEst-ce un tableau de proportionnalité ? Justifie.",
    "12 ÷ 5 = 2,4 et 36 ÷ 15 = 2,4.\nQuotient constant : oui, coefficient 2,4."),
  E("Proportionnalité","Arithmétique","Moyen","exercice","Vitesse moyenne",
    "Une voiture parcourt 210 km en 3 h 30 min.\nCalcule sa vitesse moyenne en km/h.",
    "3 h 30 min = 3,5 h.\nv = 210 ÷ 3,5 = 60 km/h."),
  E("Proportionnalité","Arithmétique","Moyen","exercice","Calculer une distance",
    "Un camion roule à 85 km/h pendant 2 h 24 min.\nQuelle distance parcourt-il ? (2 h 24 min = 2,4 h)",
    "d = 85 × 2,4 = 204 km."),
  E("Proportionnalité","Arithmétique","Difficile","exercice","Calculer une durée",
    "Combien de temps faut-il pour parcourir 36 km à la vitesse de 24 km/h ?",
    "t = 36 ÷ 24 = 1,5 h = 1 h 30 min."),
  E("Proportionnalité","Arithmétique","Moyen","probleme","Le coureur régulier",
    "Un coureur parcourt 400 m en 80 secondes, à vitesse constante.\n1) Calcule sa vitesse en m/s.\n2) Convertis-la en km/h.",
    "1) 400 ÷ 80 = 5 m/s.\n2) 5 × 3 600 = 18 000 m/h = 18 km/h."),
  E("Proportionnalité","Arithmétique","Difficile","probleme","La maquette au 1/24",
    "Une voiture de 4,2 m est reproduite en maquette à l'échelle 1/24.\nQuelle est la longueur de la maquette, en centimètres ?",
    "4,2 ÷ 24 = 0,175 m = 17,5 cm."),

  /* ═══ POURCENTAGES ═══ */
  E("Pourcentages","Arithmétique","Facile","exercice","Appliquer un pourcentage",
    "Calcule 40 % de 85.",
    "85 × 40 ÷ 100 = 34."),
  E("Pourcentages","Arithmétique","Moyen","exercice","Calculer une remise",
    "Un jean coûte 72 €. Il est soldé à −15 %.\nCalcule la remise, puis le prix soldé.",
    "Remise : 72 × 15 ÷ 100 = 10,80 €.\nPrix soldé : 72 − 10,80 = 61,20 €."),
  E("Pourcentages","Arithmétique","Moyen","exercice","Calculer une augmentation",
    "Un abonnement de 250 € augmente de 6 %.\nCalcule le nouveau prix.",
    "Augmentation : 250 × 6 ÷ 100 = 15 €.\nNouveau prix : 250 + 15 = 265 €."),
  E("Pourcentages","Arithmétique","Difficile","probleme","Le comparateur de soldes",
    "L'article A coûte 60 € soldé à −30 % ; l'article B coûte 55 € soldé à −20 %.\nLequel est le moins cher après remise ?",
    "A : 60 − 18 = 42 €. B : 55 − 11 = 44 €.\nL'article A est le moins cher."),

  /* ═══ STATISTIQUES ═══ */
  E("Statistiques","Statistiques","Facile","exercice","Calculer l'étendue",
    "Calcule l'étendue de la série : 3 ; 7 ; 8 ; 12 ; 15.",
    "Étendue = 15 − 3 = 12."),
  E("Statistiques","Statistiques","Moyen","exercice","Calculer une moyenne",
    "Calcule la moyenne de la série : 45 ; 52 ; 38 ; 41 ; 49.",
    "Somme : 45 + 52 + 38 + 41 + 49 = 225.\nMoyenne : 225 ÷ 5 = 45."),
  E("Statistiques","Statistiques","Moyen","exercice","Médiane d'une série impaire",
    "Détermine la médiane de la série : 5 ; 9 ; 11 ; 14 ; 20.",
    "5 valeurs ordonnées : la médiane est la 3ᵉ valeur, soit 11."),
  E("Statistiques","Statistiques","Moyen","exercice","Médiane d'une série paire",
    "Détermine la médiane de la série : 7 ; 8 ; 10 ; 15 ; 16 ; 19.",
    "6 valeurs : médiane = (10 + 15) ÷ 2 = 12,5."),
  E("Statistiques","Statistiques","Difficile","probleme","La moyenne de l'équipe",
    "Quatre joueurs d'une équipe marquent en moyenne 12 points chacun. Un cinquième joueur marque 22 points.\nQuelle est la moyenne des cinq joueurs ?",
    "Total des quatre : 4 × 12 = 48 points.\nMoyenne de l'équipe : (48 + 22) ÷ 5 = 70 ÷ 5 = 14 points."),

  /* ═══ PROBABILITÉS ═══ */
  E("Probabilités","Probabilités","Facile","exercice","Probabilité sur une roue",
    "Une roue équilibrée comporte 10 secteurs identiques, dont 3 rouges.\nQuelle est la probabilité d'obtenir un secteur rouge ?",
    "p = 3/10."),
  E("Probabilités","Probabilités","Moyen","exercice","L'événement contraire",
    "La probabilité d'un événement A est 7/12.\nQuelle est la probabilité de l'événement contraire ?",
    "p(contraire de A) = 1 − 7/12 = 5/12."),
  E("Probabilités","Probabilités","Moyen","exercice","Le jeu de 32 cartes",
    "On tire une carte au hasard dans un jeu de 32 cartes.\nCalcule :\na) p(tirer un roi)\nb) p(tirer un trèfle)",
    "a) 4/32 = 1/8.\nb) 8/32 = 1/4."),
  E("Probabilités","Probabilités","Moyen","exercice","La somme des probabilités",
    "Un sac contient des jetons rouges, bleus et verts. On sait que p(rouge) = 0,45 et p(bleu) = 0,3.\nCalcule p(vert).",
    "La somme des probabilités vaut 1 :\np(vert) = 1 − 0,45 − 0,3 = 0,25."),
  E("Probabilités","Probabilités","Difficile","probleme","Les jetons numérotés",
    "Un sac contient 20 jetons numérotés de 1 à 20. On en tire un au hasard.\nQuelle est la probabilité d'obtenir un multiple de 4 ? (fraction simplifiée)",
    "Multiples de 4 entre 1 et 20 : 4, 8, 12, 16, 20 → 5 jetons.\np = 5/20 = 1/4."),

  /* ═══ THÉORÈME DE PYTHAGORE ═══ */
  E("Théorème de Pythagore","Géométrie","Facile","exercice","L'hypoténuse",
    "Dans un triangle rectangle, comment s'appelle le côté opposé à l'angle droit ? Quelle est sa particularité ?",
    "C'est l'hypoténuse : c'est le plus long des trois côtés."),
  E("Théorème de Pythagore","Géométrie","Moyen","exercice","Calculer l'hypoténuse",
    "Un triangle rectangle a ses côtés de l'angle droit qui mesurent 5 cm et 12 cm.\nCalcule l'hypoténuse.",
    "hyp² = 5² + 12² = 25 + 144 = 169.\nhyp = √169 = 13 cm."),
  E("Théorème de Pythagore","Géométrie","Moyen","exercice","Calculer un côté de l'angle droit",
    "Dans un triangle rectangle, l'hypoténuse mesure 25 cm et un côté de l'angle droit mesure 7 cm.\nCalcule le troisième côté.",
    "côté² = 25² − 7² = 625 − 49 = 576.\ncôté = √576 = 24 cm."),
  E("Théorème de Pythagore","Géométrie","Difficile","exercice","La réciproque",
    "Un triangle a des côtés de 12 cm, 16 cm et 20 cm.\nEst-il rectangle ? Justifie.",
    "20² = 400 et 12² + 16² = 144 + 256 = 400.\nÉgalité vérifiée : d'après la réciproque du théorème de Pythagore, le triangle est rectangle (hypoténuse de 20 cm)."),
  E("Théorème de Pythagore","Géométrie","Difficile","exercice","Prouver qu'un triangle n'est pas rectangle",
    "Un triangle a des côtés de 5 cm, 8 cm et 9 cm.\nEst-il rectangle ? Justifie.",
    "9² = 81 et 5² + 8² = 25 + 64 = 89.\n81 ≠ 89 : le triangle n'est pas rectangle."),
  E("Théorème de Pythagore","Géométrie","Difficile","probleme","Le fil du mât",
    "Un fil de 10 m est tendu du sommet d'un mât vertical jusqu'au sol, à 8 m du pied du mât.\nCalcule la hauteur du mât.",
    "h² = 10² − 8² = 100 − 64 = 36.\nh = √36 = 6 m."),

  /* ═══ THÉORÈME DE THALÈS ═══ */
  E("Théorème de Thalès","Géométrie","Moyen","exercice","Calculer une longueur avec Thalès",
    "Dans le triangle ABC, D ∈ [AB] et E ∈ [AC] avec (DE) // (BC).\nOn donne AD = 4, AB = 10 et AC = 15. Calcule AE.",
    "AD/AB = AE/AC, donc AE = (4 × 15) ÷ 10 = 6."),
  E("Théorème de Thalès","Géométrie","Moyen","exercice","Calculer le côté parallèle",
    "Même configuration : AD = 4, AB = 10 et BC = 12,5.\nCalcule DE.",
    "AD/AB = DE/BC, donc DE = (4 × 12,5) ÷ 10 = 5."),
  E("Théorème de Thalès","Géométrie","Difficile","exercice","La réciproque de Thalès",
    "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec AM = 6, AB = 9, AN = 8 et AC = 12.\nLes droites (MN) et (BC) sont-elles parallèles ?",
    "AM/AB = 6/9 = 2/3 et AN/AC = 8/12 = 2/3.\nQuotients égaux, points alignés dans le même ordre : (MN) // (BC) d'après la réciproque du théorème de Thalès."),
  E("Théorème de Thalès","Géométrie","Difficile","probleme","L'ombre du lampadaire",
    "Au même moment, un poteau de 1 m projette une ombre de 1,6 m et un lampadaire projette une ombre de 8 m.\nCalcule la hauteur du lampadaire.",
    "Configuration de Thalès (rayons du soleil parallèles) :\nhauteur = (1 × 8) ÷ 1,6 = 5 m."),

  /* ═══ TRIGONOMÉTRIE ═══ */
  E("Trigonométrie","Géométrie","Facile","exercice","La définition du cosinus",
    "Dans un triangle rectangle, donne la formule du cosinus d'un angle aigu.",
    "cos(angle) = côté adjacent ÷ hypoténuse."),
  E("Trigonométrie","Géométrie","Moyen","exercice","Calculer un angle avec le cosinus",
    "Dans un triangle rectangle, le côté adjacent à un angle aigu mesure 6 cm et l'hypoténuse 7,5 cm.\nCalcule le cosinus de cet angle, puis sa mesure arrondie au degré.",
    "cos = 6 ÷ 7,5 = 0,8.\nangle = cos⁻¹(0,8) ≈ 37°."),
  E("Trigonométrie","Géométrie","Difficile","exercice","Calculer un côté avec le cosinus",
    "Dans un triangle rectangle, l'hypoténuse mesure 12 cm et un angle aigu mesure 40°.\nCalcule le côté adjacent à cet angle, arrondi au dixième.",
    "adjacent = 12 × cos(40°) ≈ 12 × 0,766 ≈ 9,2 cm."),

  /* ═══ TRANSLATION ET ROTATION ═══ */
  E("Translation et rotation","Géométrie","Facile","exercice","Les propriétés des transformations",
    "Cite trois grandeurs conservées par une translation et par une rotation.",
    "Elles conservent les longueurs, les mesures d'angles et les aires (ainsi que l'alignement et le parallélisme)."),
  E("Translation et rotation","Géométrie","Moyen","exercice","Image d'un point sur quadrillage",
    "Une translation correspond au déplacement « 2 carreaux à droite, 3 carreaux en bas ».\nQuelle est l'image du point P(1 ; 4) ?",
    "P'(1 + 2 ; 4 − 3) = P'(3 ; 1)."),
  E("Translation et rotation","Géométrie","Moyen","exercice","Image d'un segment par rotation",
    "Un segment de 5,4 cm est transformé par une rotation.\nQuelle est la longueur de son image ? Pourquoi ?",
    "5,4 cm : la rotation conserve les longueurs."),

  /* ═══ PYRAMIDES ET CÔNES ═══ */
  E("Pyramides et cônes","Géométrie","Facile","exercice","Décrire une pyramide",
    "Une pyramide a une base carrée.\nCombien a-t-elle de faces, d'arêtes et de sommets ?",
    "5 faces (1 carré + 4 triangles), 8 arêtes et 5 sommets."),
  E("Pyramides et cônes","Géométrie","Moyen","exercice","Volume d'une pyramide",
    "Une pyramide a une base d'aire 24 cm² et une hauteur de 10 cm.\nCalcule son volume.",
    "V = (1/3) × 24 × 10 = 80 cm³."),
  E("Pyramides et cônes","Géométrie","Moyen","exercice","Volume d'un cône",
    "Un cône de révolution a un rayon de 5 cm et une hauteur de 6 cm.\nDonne la valeur exacte de son volume, puis l'arrondi au centième.",
    "V = (1/3) × π × 5² × 6 = 50π ≈ 157,08 cm³."),
  E("Pyramides et cônes","Géométrie","Difficile","probleme","Le tas de sable",
    "Un tas de sable a la forme d'un cône de rayon 1,5 m et de hauteur 2 m.\nCalcule son volume (valeur exacte puis arrondi au centième).",
    "V = (1/3) × π × 1,5² × 2 = 1,5π ≈ 4,71 m³."),
];

/* ── insertion idempotente ── */
async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("✗ DATABASE_URL manquant. Lance : railway run node seed-exercices-4e.js");
    process.exit(1);
  }
  let added = 0, skipped = 0;
  for (const e of EXOS_4E) {
    const { rows } = await pool.query(
      "SELECT id FROM exercises WHERE title = $1 AND classe = $2 LIMIT 1",
      [e.title, CLASSE]
    );
    if (rows.length) { skipped++; console.log("· déjà présent :", e.title); continue; }
    await pool.query(
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution, classe, chapitre, type)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [e.title, e.content, LEVEL, e.subject, e.difficulty, e.solution, CLASSE, e.chapitre, e.type]
    );
    added++;
    console.log(`✓ ajouté [${e.chapitre} · ${e.difficulty}] :`, e.title);
  }
  console.log(`\nTerminé : ${added} exercice(s) ajouté(s), ${skipped} déjà présent(s).`);
  await pool.end();
}

main().catch(err => { console.error("Erreur :", err.message); process.exit(1); });
