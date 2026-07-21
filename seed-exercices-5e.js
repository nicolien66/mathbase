/* ═══════════════════════════════════════════════════════════════
   MathBase — seed-exercices-5e.js
   Ajoute 94 exercices ORIGINAUX et INDÉPENDANTS de 5ème à la
   table « exercises » (un exercice = une tâche ciblée + corrigé) :
   nombres relatifs, fractions, calcul littéral, priorités,
   proportionnalité et ratios, pourcentages, statistiques,
   organisation des données, probabilités, symétrie centrale,
   angles et parallélisme, triangle, parallélogrammes, périmètres
   et aires (disque), prisme et cylindre, durées.
   Les problèmes (type "probleme") alimentent l'onglet Problèmes.

   Usage :
     railway run node seed-exercices-5e.js
     ou : DATABASE_URL=postgres://... node seed-exercices-5e.js
   Idempotent : un exercice déjà présent (titre + classe) est ignoré.
   ═══════════════════════════════════════════════════════════════ */
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const CLASSE = "5ème";
const LEVEL = "college";

/* E(chapitre, subject, difficulty, type, title, content, solution) */
const E = (chapitre, subject, difficulty, type, title, content, solution) =>
  ({ chapitre, subject, difficulty, type, title, content, solution });

const EXOS_5E = [

  /* ═══ NOMBRES RELATIFS ═══ */
  E("Nombres relatifs","Arithmétique","Facile","exercice","Comparer deux relatifs",
    "Compare −8,4 et −8,04 en justifiant.",
    "8,4 > 8,04, donc pour les négatifs : −8,4 < −8,04\n(le plus éloigné de zéro est le plus petit)."),
  E("Nombres relatifs","Arithmétique","Facile","exercice","Ranger des relatifs",
    "Range dans l'ordre croissant : 5 ; −3 ; −7,5 ; 0 ; 2,1.",
    "−7,5 < −3 < 0 < 2,1 < 5."),
  E("Nombres relatifs","Arithmétique","Facile","exercice","L'opposé d'un nombre",
    "Donne l'opposé de −12, puis l'opposé de 4,7.",
    "L'opposé de −12 est 12 ; l'opposé de 4,7 est −4,7."),
  E("Nombres relatifs","Arithmétique","Facile","exercice","Additionner deux nombres de même signe",
    "Calcule : (−6) + (−9).",
    "(−6) + (−9) = −15 (on ajoute les distances à zéro, on garde le signe)."),
  E("Nombres relatifs","Arithmétique","Moyen","exercice","Additionner deux nombres de signes contraires",
    "Calcule :\na) (−13) + (+5)\nb) (+9,5) + (−4)",
    "a) −8 (le signe est celui de −13, le plus éloigné de zéro)\nb) +5,5"),
  E("Nombres relatifs","Arithmétique","Moyen","exercice","Transformer une soustraction",
    "Transforme en addition puis calcule : (−7) − (−3).",
    "(−7) − (−3) = (−7) + (+3) = −4."),
  E("Nombres relatifs","Arithmétique","Moyen","exercice","Suite d'additions et de soustractions",
    "Calcule de gauche à droite : 8 − 15 + 4 − 2.",
    "8 − 15 = −7 ; −7 + 4 = −3 ; −3 − 2 = −5.\nRésultat : −5."),
  E("Nombres relatifs","Arithmétique","Moyen","exercice","Abscisses relatives",
    "Sur une droite graduée d'unité 1 cm, où se placent les points A(−2,5) et B(1,5) ?\nLequel est à gauche de l'origine ?",
    "A se place 2,5 unités à gauche de 0 ; B se place 1,5 unité à droite.\nA est à gauche de l'origine (abscisse négative)."),
  E("Nombres relatifs","Arithmétique","Moyen","exercice","Distance entre deux points (signes contraires)",
    "Sur une droite graduée, A a pour abscisse −4,2 et B a pour abscisse 3,3.\nCalcule la distance AB.",
    "Abscisses de signes contraires : AB = 4,2 + 3,3 = 7,5."),
  E("Nombres relatifs","Arithmétique","Difficile","exercice","Distance entre deux points (même signe)",
    "Sur une droite graduée, C a pour abscisse −9,1 et D a pour abscisse −2,6.\nCalcule la distance CD.",
    "Abscisses de même signe : CD = 9,1 − 2,6 = 6,5."),
  E("Nombres relatifs","Arithmétique","Moyen","probleme","La température du congélateur",
    "En tombant en panne, un congélateur passe de −18 °C à 4 °C.\nDe combien de degrés la température a-t-elle augmenté ?",
    "4 − (−18) = 4 + 18 = 22.\nLa température a augmenté de 22 °C."),
  E("Nombres relatifs","Arithmétique","Moyen","probleme","L'ascenseur du parking",
    "Malik prend l'ascenseur au 3ᵉ étage et descend au 2ᵉ sous-sol (niveau −2).\nCombien de niveaux a-t-il descendus ?",
    "3 − (−2) = 5.\nIl a descendu 5 niveaux."),
  E("Nombres relatifs","Arithmétique","Difficile","probleme","Le compte en banque",
    "Le compte de Jade affiche un solde de −25,40 €. Elle dépose 60 €.\nQuel est le nouveau solde ?",
    "−25,40 + 60 = +34,60 €."),
  E("Nombres relatifs","Arithmétique","Difficile","exercice","Calculer astucieusement",
    "Calcule en regroupant astucieusement : (−7) + 12 + (−3) + 7.",
    "(−7) + 7 = 0, il reste 12 + (−3) = 9.\nRésultat : 9."),

  /* ═══ FRACTIONS ═══ */
  E("Fractions","Arithmétique","Facile","exercice","Fractions égales",
    "Complète : 3/4 = …/12.",
    "12 = 4 × 3, donc 3/4 = 9/12."),
  E("Fractions","Arithmétique","Facile","exercice","Simplifier des fractions",
    "Simplifie au maximum :\na) 24/40\nb) 18/27",
    "a) 24/40 = 3/5 (division par 8).\nb) 18/27 = 2/3 (division par 9)."),
  E("Fractions","Arithmétique","Moyen","exercice","Comparer avec un dénominateur commun",
    "Écris 2/3 et 7/12 avec le dénominateur 12, puis compare-les.",
    "2/3 = 8/12.\n8/12 > 7/12, donc 2/3 > 7/12."),
  E("Fractions","Arithmétique","Moyen","exercice","Comparer avec le même numérateur",
    "Compare 5/6 et 5/9 en justifiant.",
    "Même numérateur : la fraction au dénominateur le plus petit est la plus grande.\nDonc 5/6 > 5/9."),
  E("Fractions","Arithmétique","Facile","exercice","Additionner avec le même dénominateur",
    "Calcule et simplifie : 5/8 + 7/8.",
    "5/8 + 7/8 = 12/8 = 3/2."),
  E("Fractions","Arithmétique","Moyen","exercice","Additionner avec des dénominateurs multiples",
    "Calcule : 3/4 + 5/8.",
    "3/4 = 6/8, donc 6/8 + 5/8 = 11/8."),
  E("Fractions","Arithmétique","Moyen","exercice","Soustraire deux fractions",
    "Calcule et simplifie : 7/5 − 9/10.",
    "7/5 = 14/10, donc 14/10 − 9/10 = 5/10 = 1/2."),
  E("Fractions","Arithmétique","Moyen","exercice","Entier moins une fraction",
    "Calcule : 3 − 4/7.",
    "3 = 21/7, donc 21/7 − 4/7 = 17/7."),
  E("Fractions","Arithmétique","Difficile","exercice","Comparer à l'aide de 1",
    "Compare 11/12 et 13/12 sans les mettre au même dénominateur… puis explique pourquoi c'était déjà fait !",
    "11/12 < 1 (numérateur < dénominateur) et 13/12 > 1.\nDonc 11/12 < 13/12 — et elles avaient déjà le même dénominateur, la comparaison des numérateurs suffisait."),
  E("Fractions","Arithmétique","Moyen","probleme","Les brioches du goûter",
    "Tom mange les 3/8 d'une brioche et Ana en mange le quart.\nQuelle fraction de la brioche ont-ils mangée ? Quelle fraction reste-t-il ?",
    "1/4 = 2/8, donc 3/8 + 2/8 = 5/8 mangés.\nIl reste 8/8 − 5/8 = 3/8 de la brioche."),
  E("Fractions","Arithmétique","Difficile","probleme","La randonnée en deux étapes",
    "Le matin, des randonneurs parcourent 1/6 du sentier ; l'après-midi, ils en parcourent les 3/4.\nQuelle fraction du sentier ont-ils parcourue ? Quelle fraction reste-t-il ?",
    "1/6 = 2/12 et 3/4 = 9/12 : 2/12 + 9/12 = 11/12 parcourus.\nIl reste 1/12 du sentier."),
  E("Fractions","Arithmétique","Difficile","exercice","Fraction d'une fraction",
    "Calcule les 3/4 des 2/3 de 60.",
    "2/3 de 60 = 40, puis 3/4 de 40 = 30."),

  /* ═══ CALCUL LITTÉRAL ═══ */
  E("Calcul littéral","Algèbre","Facile","exercice","Simplifier une écriture littérale",
    "Simplifie les écritures :\na) 7 × a\nb) b × b\nc) 3 × (x + 5)",
    "a) 7a\nb) b²\nc) 3(x + 5)"),
  E("Calcul littéral","Algèbre","Facile","exercice","Calculer la valeur d'une expression",
    "Calcule 2x + 9 pour x = 4.",
    "2 × 4 + 9 = 8 + 9 = 17."),
  E("Calcul littéral","Algèbre","Moyen","exercice","Valeur avec un nombre décimal",
    "Calcule 6x − 4 pour x = 1,5.",
    "6 × 1,5 − 4 = 9 − 4 = 5."),
  E("Calcul littéral","Algèbre","Moyen","exercice","Réduire une expression",
    "Réduis : 5x + 8 + 2x − 3.",
    "5x + 2x + 8 − 3 = 7x + 5."),
  E("Calcul littéral","Algèbre","Moyen","exercice","Réduire avec des x²",
    "Réduis : 3x² + 4x − x² + x.",
    "3x² − x² + 4x + x = 2x² + 5x."),
  E("Calcul littéral","Algèbre","Moyen","exercice","Développer avec la distributivité",
    "Développe :\na) 4(2x + 7)\nb) 6(3 − x)",
    "a) 8x + 28\nb) 18 − 6x"),
  E("Calcul littéral","Algèbre","Moyen","exercice","Développer x(x + …)",
    "Développe : x(x + 9).",
    "x² + 9x."),
  E("Calcul littéral","Algèbre","Difficile","exercice","Factoriser",
    "Factorise :\na) 10x + 15\nb) 8a − 12",
    "a) 10x + 15 = 5(2x + 3)\nb) 8a − 12 = 4(2a − 3)"),
  E("Calcul littéral","Algèbre","Difficile","exercice","Tester une égalité",
    "L'égalité 3x + 2 = x + 10 est-elle vérifiée pour x = 4 ? pour x = 1 ?",
    "Pour x = 4 : 3×4 + 2 = 14 et 4 + 10 = 14 → vérifiée.\nPour x = 1 : 5 et 11 → non vérifiée."),
  E("Calcul littéral","Algèbre","Difficile","probleme","Le programme de calcul",
    "Programme : « Choisir un nombre ; le multiplier par 5 ; soustraire 7. »\n1) Applique-le au nombre 6.\n2) Écris l'expression obtenue pour un nombre n.\n3) Applique-le au nombre 3,2.",
    "1) 6 × 5 = 30, puis 30 − 7 = 23.\n2) 5n − 7.\n3) 5 × 3,2 − 7 = 16 − 7 = 9."),

  /* ═══ ENCHAÎNEMENT D'OPÉRATIONS ═══ */
  E("Enchaînement d'opérations","Algèbre","Facile","exercice","Priorité de la multiplication",
    "Calcule : 28 − 5 × 4.",
    "28 − 20 = 8."),
  E("Enchaînement d'opérations","Algèbre","Moyen","exercice","Le rôle des parenthèses",
    "Calcule : (28 − 5) × 4.",
    "23 × 4 = 92."),
  E("Enchaînement d'opérations","Algèbre","Moyen","exercice","Division et multiplication",
    "Calcule : 36 ÷ 4 + 6 × 2.",
    "9 + 12 = 21."),
  E("Enchaînement d'opérations","Algèbre","Difficile","exercice","Expression à étages",
    "Calcule en détaillant : 45 − (12 − 5) × 3.",
    "45 − 7 × 3 = 45 − 21 = 24."),

  /* ═══ PROPORTIONNALITÉ ═══ */
  E("Proportionnalité","Arithmétique","Facile","exercice","Reconnaître la proportionnalité",
    "Le tableau donne : 4 → 18 et 10 → 45.\nEst-ce un tableau de proportionnalité ? Justifie.",
    "18 ÷ 4 = 4,5 et 45 ÷ 10 = 4,5.\nQuotient constant : oui, coefficient 4,5."),
  E("Proportionnalité","Arithmétique","Moyen","exercice","Le produit en croix",
    "3 kg de raisin coûtent 8,10 €.\nCombien coûtent 7 kg ?",
    "(7 × 8,10) ÷ 3 = 56,70 ÷ 3 = 18,90 €."),
  E("Proportionnalité","Arithmétique","Moyen","exercice","Coefficient de proportionnalité",
    "Dans une situation de proportionnalité, 12 a pour image 30.\n1) Quel est le coefficient ?\n2) Quelle est l'image de 7 ?",
    "1) 30 ÷ 12 = 2,5.\n2) 7 × 2,5 = 17,5."),
  E("Proportionnalité","Arithmétique","Moyen","exercice","Le retour à l'unité",
    "6 stylos identiques coûtent 7,20 €.\nCombien coûtent 9 stylos ?",
    "Un stylo : 7,20 ÷ 6 = 1,20 €.\n9 stylos : 9 × 1,20 = 10,80 €."),
  E("Proportionnalité","Arithmétique","Difficile","exercice","Utiliser une échelle de carte",
    "Sur une carte à l'échelle 1/25 000, deux hameaux sont distants de 4 cm.\nQuelle est la distance réelle, en kilomètres ?",
    "4 × 25 000 = 100 000 cm = 1 000 m = 1 km."),
  E("Proportionnalité","Arithmétique","Difficile","exercice","Partager selon un ratio",
    "Partage 63 € entre Lina et Sam selon le ratio 2 : 5.",
    "2 + 5 = 7 parts ; 63 ÷ 7 = 9 € par part.\nLina : 2 × 9 = 18 € ; Sam : 5 × 9 = 45 €."),
  E("Proportionnalité","Arithmétique","Moyen","probleme","Le sirop à diluer",
    "Pour préparer une boisson, on mélange 1 volume de sirop avec 7 volumes d'eau.\nAvec 25 cL de sirop, quel volume d'eau faut-il ? Quel volume de boisson obtient-on ?",
    "Eau : 7 × 25 = 175 cL.\nBoisson : 25 + 175 = 200 cL = 2 L."),
  E("Proportionnalité","Arithmétique","Difficile","probleme","La photo agrandie",
    "Une photo de 10 cm sur 15 cm est agrandie proportionnellement : sa largeur devient 25 cm.\n1) Quel est le coefficient d'agrandissement ?\n2) Quelle est la nouvelle longueur ?",
    "1) 25 ÷ 10 = 2,5.\n2) 15 × 2,5 = 37,5 cm."),

  /* ═══ POURCENTAGES ═══ */
  E("Pourcentages","Arithmétique","Facile","exercice","Pourcentages de tête",
    "Calcule de tête :\na) 50 % de 62\nb) 25 % de 480\nc) 10 % de 73",
    "a) 62 ÷ 2 = 31\nb) 480 ÷ 4 = 120\nc) 73 ÷ 10 = 7,3"),
  E("Pourcentages","Arithmétique","Moyen","exercice","Appliquer un pourcentage",
    "Calcule 45 % de 300.",
    "300 × 45 ÷ 100 = 135."),
  E("Pourcentages","Arithmétique","Moyen","exercice","Exprimer en pourcentage",
    "Dans une classe de 30 élèves, il y a 18 filles.\nQuel pourcentage de la classe cela représente-t-il ?",
    "18 ÷ 30 = 0,6, soit 60 %."),
  E("Pourcentages","Arithmétique","Difficile","probleme","La hausse du ticket",
    "Un ticket de bus coûte 2,50 €. Son prix augmente de 8 %.\nCalcule le nouveau prix.",
    "Hausse : 2,50 × 8 ÷ 100 = 0,20 €.\nNouveau prix : 2,50 + 0,20 = 2,70 €."),

  /* ═══ STATISTIQUES ═══ */
  E("Statistiques","Statistiques","Facile","exercice","Effectif total",
    "Un sondage donne les effectifs : cinéma 11, sport 9, lecture 5.\nCalcule l'effectif total.",
    "11 + 9 + 5 = 25 personnes interrogées."),
  E("Statistiques","Statistiques","Moyen","exercice","Moyenne simple",
    "Calcule la moyenne de la série : 12 ; 15 ; 9 ; 14 ; 10.",
    "Somme : 12 + 15 + 9 + 14 + 10 = 60.\nMoyenne : 60 ÷ 5 = 12."),
  E("Statistiques","Statistiques","Moyen","exercice","Moyenne pondérée",
    "Nour a obtenu 8 à un devoir de coefficient 1 et 14 à un devoir de coefficient 3.\nCalcule sa moyenne.",
    "(8 × 1 + 14 × 3) ÷ (1 + 3) = (8 + 42) ÷ 4 = 50 ÷ 4 = 12,5."),
  E("Statistiques","Statistiques","Moyen","exercice","Calculer une fréquence",
    "Dans un club de 40 adhérents, 12 sont des collégiens.\nCalcule la fréquence des collégiens, en écriture décimale puis en pourcentage.",
    "12 ÷ 40 = 0,3, soit 30 %."),
  E("Statistiques","Statistiques","Difficile","exercice","Retrouver une valeur manquante",
    "La moyenne de quatre notes est 13. Trois d'entre elles sont 11, 12 et 15.\nQuelle est la quatrième note ?",
    "Somme des quatre notes : 4 × 13 = 52.\nQuatrième note : 52 − (11 + 12 + 15) = 52 − 38 = 14."),
  E("Statistiques","Statistiques","Difficile","probleme","Le relevé de pluie",
    "On a relevé les hauteurs de pluie de quatre semaines : 12 mm, 8 mm, 20 mm et 0 mm.\n1) Calcule la hauteur totale.\n2) Calcule la hauteur moyenne par semaine.",
    "1) 12 + 8 + 20 + 0 = 40 mm.\n2) 40 ÷ 4 = 10 mm par semaine (le 0 compte dans la moyenne !)."),

  /* ═══ ORGANISATION DES DONNÉES ═══ */
  E("Organisation des données","Statistiques","Facile","exercice","Lire un tableau à double entrée",
    "Un tableau indique : 6ᵉ → 15 externes et 10 demi-pensionnaires ; 5ᵉ → 12 externes et 13 demi-pensionnaires.\n1) Combien de demi-pensionnaires en 5ᵉ ?\n2) Combien d'externes en tout ?",
    "1) 13 demi-pensionnaires.\n2) 15 + 12 = 27 externes."),
  E("Organisation des données","Statistiques","Moyen","exercice","Lire un diagramme circulaire",
    "Sur un diagramme circulaire, le secteur « bus » occupe 180°.\nQuelle part des élèves prend le bus ? Exprime-la en fraction et en pourcentage.",
    "180° sur 360°, soit 1/2 des élèves : 50 %."),
  E("Organisation des données","Statistiques","Moyen","exercice","Compléter un tableau",
    "Un tableau de ventes indique : matin 34, après-midi 51, total … .\nComplète le total, puis calcule l'écart entre l'après-midi et le matin.",
    "Total : 34 + 51 = 85 ventes.\nÉcart : 51 − 34 = 17 ventes."),

  /* ═══ PROBABILITÉS ═══ */
  E("Probabilités","Probabilités","Facile","exercice","Les issues d'une expérience",
    "On lance une pièce de monnaie équilibrée.\nQuelles sont les issues possibles ? Quelle est la probabilité de chacune ?",
    "Deux issues : pile et face.\nChacune a une probabilité de 1/2."),
  E("Probabilités","Probabilités","Facile","exercice","Probabilité avec un dé",
    "On lance un dé équilibré à 6 faces.\nQuelle est la probabilité d'obtenir 3 ?",
    "p = 1/6."),
  E("Probabilités","Probabilités","Moyen","exercice","Probabilité d'un événement",
    "On lance un dé équilibré à 6 faces.\nQuelle est la probabilité d'obtenir un nombre inférieur ou égal à 2 ?",
    "Issues favorables : 1 et 2.\np = 2/6 = 1/3."),
  E("Probabilités","Probabilités","Moyen","exercice","Tirage dans une urne",
    "Une urne contient 5 boules rouges, 3 bleues et 2 jaunes, indiscernables au toucher.\nCalcule :\na) p(tirer une bleue)\nb) p(ne pas tirer une jaune)",
    "10 boules en tout.\na) 3/10.\nb) 8/10 = 4/5."),
  E("Probabilités","Probabilités","Moyen","exercice","L'échelle des probabilités",
    "On lance un dé à 6 faces. Donne la probabilité :\na) d'obtenir un nombre inférieur à 7\nb) d'obtenir 0",
    "a) 1 : c'est un événement certain.\nb) 0 : c'est un événement impossible."),
  E("Probabilités","Probabilités","Difficile","probleme","La roue de la kermesse",
    "Une roue comporte 12 secteurs identiques, dont 3 sont gagnants.\nQuelle est la probabilité de gagner ? Donne le résultat sous forme de fraction simplifiée.",
    "p = 3/12 = 1/4."),

  /* ═══ SYMÉTRIE CENTRALE ═══ */
  E("Symétrie centrale","Géométrie","Facile","exercice","Définition du symétrique",
    "Quand dit-on que M' est le symétrique de M par rapport à un point O ?",
    "M' est le symétrique de M par rapport à O lorsque O est le milieu du segment [MM']."),
  E("Symétrie centrale","Géométrie","Moyen","exercice","Les propriétés de conservation",
    "Cite quatre propriétés conservées par la symétrie centrale.",
    "Elle conserve les longueurs, les mesures d'angles, les aires et le parallélisme (ainsi que l'alignement)."),
  E("Symétrie centrale","Géométrie","Moyen","exercice","Image d'un segment",
    "Un segment [AB] mesure 6,2 cm. Quelle est la longueur de son image [A'B'] par une symétrie centrale ? Pourquoi ?",
    "A'B' = 6,2 cm : la symétrie centrale conserve les longueurs."),
  E("Symétrie centrale","Géométrie","Moyen","exercice","Centre de symétrie d'une figure",
    "Un parallélogramme possède-t-il un centre de symétrie ? Et un triangle équilatéral ? Justifie.",
    "Le parallélogramme : oui, le point d'intersection de ses diagonales.\nLe triangle équilatéral : non (il a des axes de symétrie, mais pas de centre)."),
  E("Symétrie centrale","Géométrie","Difficile","exercice","Symétrique dans un repère",
    "Dans un repère d'origine O, quelles sont les coordonnées du symétrique de M(4 ; −1) par rapport à O ?",
    "La symétrie de centre O change le signe des deux coordonnées : M'(−4 ; 1)."),

  /* ═══ ANGLES ET PARALLÉLISME ═══ */
  E("Angles et parallélisme","Géométrie","Facile","exercice","Complémentaires et supplémentaires",
    "1) Quel est le complémentaire d'un angle de 28° ?\n2) Quel est le supplémentaire d'un angle de 112° ?",
    "1) 90 − 28 = 62°.\n2) 180 − 112 = 68°."),
  E("Angles et parallélisme","Géométrie","Moyen","exercice","Angles opposés par le sommet",
    "Deux droites sécantes forment un angle de 54°.\nQuelle est la mesure de l'angle opposé par le sommet ?",
    "54° : deux angles opposés par le sommet sont égaux."),
  E("Angles et parallélisme","Géométrie","Moyen","exercice","Angles alternes-internes",
    "Deux droites parallèles sont coupées par une sécante. Un angle mesure 105°.\nQuelle est la mesure de son alterne-interne ? Justifie.",
    "105° : lorsque les droites sont parallèles, deux angles alternes-internes sont égaux."),
  E("Angles et parallélisme","Géométrie","Difficile","exercice","Prouver un parallélisme",
    "Deux droites sont coupées par une sécante.\na) Deux angles alternes-internes mesurent 76° et 76°. Les droites sont-elles parallèles ?\nb) Et si les angles mesurent 90° et 88° ?",
    "a) Oui : angles alternes-internes égaux → droites parallèles (réciproque).\nb) Non : 90° ≠ 88°, les droites ne sont pas parallèles."),
  E("Angles et parallélisme","Géométrie","Difficile","exercice","Déduire un angle",
    "Deux droites parallèles sont coupées par une sécante. Un angle mesure 131°.\nDonne la mesure de son angle correspondant, puis celle de son supplémentaire.",
    "Correspondant : 131° (droites parallèles).\nSupplémentaire : 180 − 131 = 49°."),

  /* ═══ GÉOMÉTRIE DU TRIANGLE ═══ */
  E("Géométrie du triangle","Géométrie","Facile","exercice","Somme des angles",
    "Dans un triangle, deux angles mesurent 90° et 37°.\nCalcule le troisième.",
    "180 − (90 + 37) = 53°."),
  E("Géométrie du triangle","Géométrie","Moyen","exercice","Triangle constructible ?",
    "Peut-on construire un triangle de côtés 6 cm, 8 cm et 15 cm ? Justifie.",
    "6 + 8 = 14 < 15 : l'inégalité triangulaire n'est pas respectée.\nLe triangle n'est pas constructible."),
  E("Géométrie du triangle","Géométrie","Moyen","exercice","Triangle isocèle : angle au sommet",
    "Dans un triangle isocèle, les deux angles à la base mesurent 55° chacun.\nCalcule l'angle au sommet.",
    "180 − 2 × 55 = 180 − 110 = 70°."),
  E("Géométrie du triangle","Géométrie","Difficile","exercice","Triangle rectangle isocèle",
    "Donne la mesure des trois angles d'un triangle rectangle et isocèle. Justifie.",
    "Un angle droit : 90°. Les deux autres sont égaux : (180 − 90) ÷ 2 = 45° chacun.\nAngles : 90°, 45°, 45°."),

  /* ═══ LES PARALLÉLOGRAMMES ═══ */
  E("Les parallélogrammes","Géométrie","Facile","exercice","Propriétés du parallélogramme",
    "Cite trois propriétés d'un parallélogramme.",
    "Ses côtés opposés sont parallèles et de même longueur ; ses diagonales se coupent en leur milieu ; ses angles opposés sont égaux ; il possède un centre de symétrie."),
  E("Les parallélogrammes","Géométrie","Moyen","exercice","Périmètre d'un parallélogramme",
    "Un parallélogramme a des côtés de 7 cm et 4,5 cm.\nCalcule son périmètre.",
    "P = 2 × (7 + 4,5) = 2 × 11,5 = 23 cm."),
  E("Les parallélogrammes","Géométrie","Moyen","exercice","Parallélogrammes particuliers",
    "Quel parallélogramme a quatre angles droits ? Quatre côtés égaux ? Les deux à la fois ?",
    "Quatre angles droits : le rectangle.\nQuatre côtés égaux : le losange.\nLes deux : le carré."),

  /* ═══ PÉRIMÈTRES ET AIRES ═══ */
  E("Périmètres et aires","Géométrie","Facile","exercice","Aire d'un parallélogramme",
    "Calcule l'aire d'un parallélogramme de base 9 cm et de hauteur 5 cm.",
    "A = 9 × 5 = 45 cm²."),
  E("Périmètres et aires","Géométrie","Moyen","exercice","Aire d'un triangle",
    "Calcule l'aire d'un triangle de base 12 cm et de hauteur 7 cm.",
    "A = (12 × 7) ÷ 2 = 42 cm²."),
  E("Périmètres et aires","Géométrie","Moyen","exercice","Périmètre et aire d'un disque",
    "Un disque a pour rayon 4 cm. Donne la valeur exacte puis l'arrondi au centième :\na) de son périmètre\nb) de son aire",
    "a) P = 2π × 4 = 8π ≈ 25,13 cm.\nb) A = π × 4² = 16π ≈ 50,27 cm²."),
  E("Périmètres et aires","Géométrie","Difficile","probleme","La pelouse et le bassin",
    "Un jardin carré de 10 m de côté contient un bassin circulaire de 2 m de rayon.\nCalcule l'aire de la pelouse (jardin sans le bassin), arrondie au centième.",
    "Jardin : 10 × 10 = 100 m². Bassin : π × 2² = 4π m².\nPelouse : 100 − 4π ≈ 87,43 m²."),

  /* ═══ PRISME DROIT ET CYLINDRE ═══ */
  E("Prisme droit et cylindre","Géométrie","Facile","exercice","Volumes et contenances",
    "Convertis :\na) 3,5 dm³ en litres\nb) 1 200 cm³ en litres",
    "a) 3,5 dm³ = 3,5 L (1 dm³ = 1 L).\nb) 1 200 cm³ = 1,2 dm³ = 1,2 L."),
  E("Prisme droit et cylindre","Géométrie","Moyen","exercice","Volume d'un prisme droit",
    "Un prisme droit a une base d'aire 18 cm² et une hauteur de 7 cm.\nCalcule son volume.",
    "V = aire de la base × hauteur = 18 × 7 = 126 cm³."),
  E("Prisme droit et cylindre","Géométrie","Moyen","exercice","Volume d'un cylindre",
    "Un cylindre a pour rayon 2 cm et pour hauteur 9 cm.\nDonne la valeur exacte de son volume, puis l'arrondi au centième.",
    "V = π × 2² × 9 = 36π ≈ 113,10 cm³."),
  E("Prisme droit et cylindre","Géométrie","Difficile","probleme","L'aquarium cylindrique",
    "Un aquarium cylindrique a un rayon de 10 cm et une hauteur de 30 cm.\nCalcule son volume en cm³ (valeur exacte puis arrondi au centième), puis sa contenance en litres (arrondie au centième).",
    "V = π × 10² × 30 = 3 000π ≈ 9 424,78 cm³.\n9 424,78 cm³ ≈ 9,42 L."),

  /* ═══ REPÉRAGE TEMPS & DURÉES ═══ */
  E("Repérage temps & durées","Arithmétique","Moyen","exercice","Heures décimales",
    "Convertis 2,4 h en heures et minutes.",
    "0,4 h = 0,4 × 60 = 24 min.\n2,4 h = 2 h 24 min (attention : pas 2 h 40 !)."),
  E("Repérage temps & durées","Arithmétique","Moyen","probleme","L'arrivée du bus",
    "Un bus part à 9 h 52 et son trajet dure 45 minutes.\nÀ quelle heure arrive-t-il ?",
    "9 h 52 + 8 min = 10 h, puis + 37 min = 10 h 37.\nLe bus arrive à 10 h 37."),
];

/* ── insertion idempotente ── */
async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("✗ DATABASE_URL manquant. Lance : railway run node seed-exercices-5e.js");
    process.exit(1);
  }
  let added = 0, skipped = 0;
  for (const e of EXOS_5E) {
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
