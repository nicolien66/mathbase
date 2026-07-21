/* ═══════════════════════════════════════════════════════════════
   MathBase — seed-exercices-3e.js
   Ajoute 104 exercices ORIGINAUX et INDÉPENDANTS de 3ème à la
   table « exercises » (un exercice = une tâche ciblée + corrigé) :
   arithmétique (nombres premiers, PGCD), puissances et écriture
   scientifique, racines carrées et équations (1er degré, x² = a,
   produit nul), développement et factorisation (identités),
   fonctions (notion, linéaires, affines), pourcentages et
   évolutions, grandeurs composées, statistiques, probabilités
   (dont deux épreuves), Pythagore, Thalès, trigonométrie
   (sin/cos/tan), triangles semblables, homothéties, translation
   et rotation, géométrie dans l'espace (sphère et boule).
   Les problèmes (type "probleme") alimentent l'onglet Problèmes.

   Usage :
     railway run node seed-exercices-3e.js
     ou : DATABASE_URL=postgres://... node seed-exercices-3e.js
   Idempotent : un exercice déjà présent (titre + classe) est ignoré.
   ═══════════════════════════════════════════════════════════════ */
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const CLASSE = "3ème";
const LEVEL = "college";

/* E(chapitre, subject, difficulty, type, title, content, solution) */
const E = (chapitre, subject, difficulty, type, title, content, solution) =>
  ({ chapitre, subject, difficulty, type, title, content, solution });

const EXOS_3E = [

  /* ═══ ARITHMÉTIQUE ═══ */
  E("Arithmétique","Arithmétique","Facile","exercice","Premier ou non ?",
    "Les nombres 51 et 53 sont-ils premiers ? Justifie.",
    "51 = 3 × 17 : il n'est pas premier.\n53 n'est divisible ni par 2, ni par 3, ni par 5, ni par 7 (et 11² > 53) : 53 est premier."),
  E("Arithmétique","Arithmétique","Moyen","exercice","Décomposer 140",
    "Décompose 140 en produit de facteurs premiers.",
    "140 = 2 × 70 = 2 × 2 × 35 = 2² × 5 × 7."),
  E("Arithmétique","Arithmétique","Moyen","exercice","Décomposer 198",
    "Décompose 198 en produit de facteurs premiers.",
    "198 = 2 × 99 = 2 × 9 × 11 = 2 × 3² × 11."),
  E("Arithmétique","Arithmétique","Moyen","exercice","PGCD par décomposition",
    "On donne 60 = 2² × 3 × 5 et 84 = 2² × 3 × 7.\nDétermine le PGCD de 60 et 84.",
    "Facteurs communs avec le plus petit exposant : 2² et 3.\nPGCD(60 ; 84) = 2² × 3 = 12."),
  E("Arithmétique","Arithmétique","Difficile","exercice","Fraction irréductible",
    "Rends la fraction 60/84 irréductible.",
    "On divise par le PGCD, 12 : 60/84 = 5/7."),
  E("Arithmétique","Arithmétique","Facile","exercice","Critères de divisibilité",
    "Le nombre 3 570 est-il divisible par 2 ? par 3 ? par 5 ?",
    "Par 2 : oui (il est pair). Par 3 : 3 + 5 + 7 + 0 = 15, oui.\nPar 5 : oui (il se termine par 0)."),
  E("Arithmétique","Arithmétique","Moyen","probleme","Les lots identiques",
    "Un magasin veut composer des lots tous identiques avec 96 stylos et 72 gommes, sans reste.\nQuel est le nombre maximal de lots ? Quelle est la composition d'un lot ?",
    "PGCD(96 ; 72) = 24 (96 = 24 × 4 et 72 = 24 × 3).\n24 lots, contenant chacun 4 stylos et 3 gommes."),
  E("Arithmétique","Arithmétique","Difficile","probleme","Le dallage parfait",
    "On veut paver un rectangle de 180 cm sur 132 cm avec des dalles carrées identiques, les plus grandes possible, sans découpe.\n1) Quelle est la taille d'une dalle ?\n2) Combien de dalles faut-il ?",
    "1) Côté = PGCD(180 ; 132) = 12 cm.\n2) 180 ÷ 12 = 15 et 132 ÷ 12 = 11 : il faut 15 × 11 = 165 dalles."),

  /* ═══ PUISSANCES ═══ */
  E("Puissances","Arithmétique","Facile","exercice","Écritures décimales",
    "Donne l'écriture décimale de 10⁻⁶ et de 8,1 × 10⁴.",
    "10⁻⁶ = 0,000 001 ; 8,1 × 10⁴ = 81 000."),
  E("Puissances","Arithmétique","Moyen","exercice","Formules sur les puissances de 10",
    "Donne le résultat sous forme d'une puissance de 10 :\na) 10⁻³ × 10⁷\nb) 10⁻⁵ ÷ 10⁻²\nc) (10⁴)³",
    "a) 10⁻³⁺⁷ = 10⁴\nb) 10⁻⁵⁻⁽⁻²⁾ = 10⁻³\nc) 10⁴ˣ³ = 10¹²"),
  E("Puissances","Arithmétique","Moyen","exercice","Écriture scientifique",
    "Donne l'écriture scientifique de :\na) 7 020 000\nb) 0,000 58",
    "a) 7,02 × 10⁶\nb) 5,8 × 10⁻⁴"),
  E("Puissances","Arithmétique","Moyen","exercice","Comparer en écriture scientifique",
    "Compare 3,9 × 10⁷ et 1,2 × 10⁸.",
    "Les exposants diffèrent : 8 > 7, donc 1,2 × 10⁸ > 3,9 × 10⁷\n(1,2 × 10⁸ = 12 × 10⁷, et 12 > 3,9)."),
  E("Puissances","Arithmétique","Difficile","exercice","Produit en écriture scientifique",
    "Calcule et donne le résultat en écriture scientifique :\n(4 × 10⁻³) × (2 × 10⁹)",
    "4 × 2 = 8 et 10⁻³ × 10⁹ = 10⁶.\nRésultat : 8 × 10⁶."),
  E("Puissances","Arithmétique","Difficile","exercice","Quotient en écriture scientifique",
    "Calcule et donne le résultat en écriture scientifique :\n(9 × 10⁵) ÷ (3 × 10⁻²)",
    "9 ÷ 3 = 3 et 10⁵ ÷ 10⁻² = 10⁷.\nRésultat : 3 × 10⁷."),
  E("Puissances","Arithmétique","Moyen","probleme","Les globules rouges",
    "Le sang contient environ 5 × 10⁶ globules rouges par mm³. On prélève 2 × 10³ mm³ de sang.\nCombien de globules rouges ce prélèvement contient-il ? (écriture scientifique)",
    "(5 × 10⁶) × (2 × 10³) = 10 × 10⁹ = 10¹⁰ = 1 × 10¹⁰ globules rouges."),
  E("Puissances","Arithmétique","Difficile","probleme","L'étoile à 4 années-lumière",
    "La lumière parcourt environ 9,5 × 10¹² km en un an. Une étoile se situe à 4 années-lumière.\nCalcule cette distance en kilomètres (écriture scientifique).",
    "4 × 9,5 × 10¹² = 38 × 10¹² = 3,8 × 10¹³ km."),

  /* ═══ ÉQUATIONS (et racines carrées) ═══ */
  E("Équations","Algèbre","Facile","exercice","Racines carrées simples",
    "Calcule : √36 ; √100 ; √1.",
    "√36 = 6 ; √100 = 10 ; √1 = 1."),
  E("Équations","Algèbre","Moyen","exercice","Racine d'un produit et d'un quotient",
    "Calcule :\na) √(49 × 4)\nb) √(9/16)",
    "a) √196 = 14 (ou √49 × √4 = 7 × 2 = 14).\nb) 3/4."),
  E("Équations","Algèbre","Moyen","exercice","Équations du type x² = a",
    "Résous :\na) x² = 81\nb) x² = 5\nc) x² = −4",
    "a) x = 9 ou x = −9.\nb) x = √5 ou x = −√5.\nc) Aucune solution : un carré n'est jamais négatif."),
  E("Équations","Algèbre","Moyen","exercice","Équation du premier degré",
    "Résous : 8x − 3 = 29.",
    "8x = 32, donc x = 4."),
  E("Équations","Algèbre","Moyen","exercice","L'inconnue des deux côtés",
    "Résous : 7x + 2 = 3x − 18.",
    "7x − 3x = −18 − 2 → 4x = −20 → x = −5."),
  E("Équations","Algèbre","Difficile","exercice","Équation avec parenthèses",
    "Résous : 4(x − 3) = 2x + 6.",
    "4x − 12 = 2x + 6 → 2x = 18 → x = 9."),
  E("Équations","Algèbre","Moyen","exercice","Vérifier une solution",
    "Le nombre −2 est-il solution de l'équation x² + 3x + 2 = 0 ?",
    "(−2)² + 3 × (−2) + 2 = 4 − 6 + 2 = 0.\nOui, −2 est solution."),
  E("Équations","Algèbre","Difficile","exercice","Équation produit nul",
    "Résous : (x + 6)(2x − 5) = 0.",
    "Un produit est nul si l'un de ses facteurs est nul :\nx + 6 = 0 → x = −6, ou 2x − 5 = 0 → x = 2,5.\nDeux solutions : −6 et 2,5."),
  E("Équations","Algèbre","Moyen","probleme","Le rectangle de périmètre 54",
    "Un rectangle a pour largeur x cm et pour longueur (x + 7) cm. Son périmètre vaut 54 cm.\nÉcris une équation et trouve ses dimensions.",
    "2(x + x + 7) = 54 → 4x + 14 = 54 → 4x = 40 → x = 10.\nLargeur 10 cm, longueur 17 cm."),
  E("Équations","Algèbre","Difficile","probleme","Le carré d'aire 121",
    "Un carré a une aire de 121 cm².\nÉcris une équation et trouve la longueur de son côté.",
    "x² = 121, avec x > 0.\nx = √121 = 11 cm."),

  /* ═══ DÉVELOPPEMENT ET FACTORISATION ═══ */
  E("Développement et factorisation","Algèbre","Facile","exercice","Distributivité simple",
    "Développe : 6(4x − 5).",
    "24x − 30."),
  E("Développement et factorisation","Algèbre","Moyen","exercice","Double distributivité",
    "Développe et réduis : (x + 8)(x − 3).",
    "x² − 3x + 8x − 24 = x² + 5x − 24."),
  E("Développement et factorisation","Algèbre","Moyen","exercice","L'identité (a + b)²",
    "Développe : (x + 7)².",
    "x² + 2 × 7 × x + 7² = x² + 14x + 49."),
  E("Développement et factorisation","Algèbre","Moyen","exercice","L'identité (a − b)²",
    "Développe : (2x − 3)².",
    "(2x)² − 2 × 2x × 3 + 3² = 4x² − 12x + 9."),
  E("Développement et factorisation","Algèbre","Moyen","exercice","L'identité (a + b)(a − b)",
    "Développe : (x + 9)(x − 9).",
    "x² − 81."),
  E("Développement et factorisation","Algèbre","Difficile","exercice","Factoriser avec un facteur commun",
    "Factorise : 21x² + 14x.",
    "21x² + 14x = 7x × 3x + 7x × 2 = 7x(3x + 2)."),
  E("Développement et factorisation","Algèbre","Difficile","exercice","Factoriser avec a² − b²",
    "Factorise :\na) x² − 64\nb) 9x² − 25",
    "a) x² − 8² = (x + 8)(x − 8).\nb) (3x)² − 5² = (3x + 5)(3x − 5)."),
  E("Développement et factorisation","Algèbre","Difficile","probleme","Le calcul malin",
    "Calcule 102 × 98 sans poser la multiplication, à l'aide d'une identité remarquable.",
    "102 × 98 = (100 + 2)(100 − 2) = 100² − 2² = 10 000 − 4 = 9 996."),

  /* ═══ NOTIONS DE FONCTIONS ═══ */
  E("Notions de fonctions","Analyse","Facile","exercice","Calculer une image",
    "Soit f la fonction définie par f(x) = 4x + 1.\nCalcule f(3).",
    "f(3) = 4 × 3 + 1 = 13."),
  E("Notions de fonctions","Analyse","Moyen","exercice","Image d'un nombre négatif",
    "Avec f(x) = 4x + 1, calcule f(−2).",
    "f(−2) = 4 × (−2) + 1 = −8 + 1 = −7."),
  E("Notions de fonctions","Analyse","Moyen","exercice","Déterminer un antécédent",
    "Avec f(x) = 4x + 1, détermine l'antécédent de 21.",
    "On résout 4x + 1 = 21 → 4x = 20 → x = 5.\nL'antécédent de 21 est 5."),
  E("Notions de fonctions","Analyse","Moyen","exercice","Une fonction avec un carré",
    "Soit g(x) = x² − 3.\na) Calcule g(4).\nb) Détermine les antécédents de 6.",
    "a) g(4) = 16 − 3 = 13.\nb) x² − 3 = 6 → x² = 9 → x = 3 ou x = −3."),
  E("Notions de fonctions","Analyse","Moyen","exercice","La notation « flèche »",
    "On donne f : x ↦ 5x − 2.\n1) Écris f(x).\n2) Quelle est l'image de 0 ?",
    "1) f(x) = 5x − 2.\n2) f(0) = −2."),
  E("Notions de fonctions","Analyse","Difficile","probleme","Le tableau mystère",
    "Un tableau de valeurs donne h(1) = 4 et h(3) = 4.\nQue peut-on dire du nombre 4 pour la fonction h ? Un nombre peut-il avoir plusieurs antécédents ?",
    "4 possède au moins deux antécédents : 1 et 3.\nOui : un nombre peut avoir plusieurs antécédents (mais un nombre n'a qu'une seule image)."),

  /* ═══ FONCTION LINÉAIRE ═══ */
  E("Fonction linéaire","Analyse","Facile","exercice","Reconnaître une fonction linéaire",
    "Parmi f(x) = −2x et g(x) = 3x + 1, laquelle est linéaire ? Pourquoi ?",
    "f est linéaire : elle est de la forme ax (a = −2).\ng est affine mais pas linéaire à cause du « + 1 »."),
  E("Fonction linéaire","Analyse","Moyen","exercice","Image et antécédent",
    "Soit f(x) = 6x.\na) Calcule f(1,5).\nb) Détermine l'antécédent de −30.",
    "a) f(1,5) = 9.\nb) 6x = −30 → x = −5."),
  E("Fonction linéaire","Analyse","Moyen","exercice","Déterminer le coefficient",
    "f est une fonction linéaire telle que f(4) = 10.\nDétermine f(x).",
    "a = 10 ÷ 4 = 2,5, donc f(x) = 2,5x."),
  E("Fonction linéaire","Analyse","Moyen","exercice","Fonction linéaire et proportionnalité",
    "Quel lien y a-t-il entre fonction linéaire et proportionnalité ? Que peut-on dire de sa représentation graphique ?",
    "Une fonction linéaire f(x) = ax modélise une situation de proportionnalité de coefficient a.\nSa représentation graphique est une droite qui passe par l'origine du repère."),
  E("Fonction linéaire","Analyse","Difficile","probleme","Le taux de change",
    "Un euro vaut 1,08 dollar. On note f la fonction qui à un montant en euros associe sa valeur en dollars.\n1) Donne l'expression de f(x).\n2) Convertis 250 €.",
    "1) f(x) = 1,08x (fonction linéaire).\n2) f(250) = 1,08 × 250 = 270 $."),

  /* ═══ FONCTION AFFINE ═══ */
  E("Fonction affine","Analyse","Facile","exercice","Identifier a et b",
    "Soit g(x) = −3x + 7.\nDonne le coefficient directeur et l'ordonnée à l'origine.",
    "Coefficient directeur : a = −3. Ordonnée à l'origine : b = 7."),
  E("Fonction affine","Analyse","Moyen","exercice","Calculer des images",
    "Avec g(x) = −3x + 7, calcule g(0) et g(2).",
    "g(0) = 7 (c'est l'ordonnée à l'origine).\ng(2) = −6 + 7 = 1."),
  E("Fonction affine","Analyse","Moyen","exercice","Antécédent par une fonction affine",
    "Avec g(x) = −3x + 7, détermine l'antécédent de −5.",
    "−3x + 7 = −5 → −3x = −12 → x = 4."),
  E("Fonction affine","Analyse","Difficile","exercice","Déterminer une fonction affine",
    "f est une fonction affine telle que f(0) = 2 et f(3) = 11.\nDétermine f(x).",
    "b = f(0) = 2.\na = (11 − 2) ÷ (3 − 0) = 3.\nDonc f(x) = 3x + 2."),
  E("Fonction affine","Analyse","Difficile","probleme","Le forfait téléphonique",
    "Un forfait coûte 15 € par mois, plus 0,05 € par minute d'appel.\n1) Exprime le prix mensuel p(x) pour x minutes.\n2) Calcule le prix pour 120 minutes.",
    "1) p(x) = 0,05x + 15 (fonction affine).\n2) p(120) = 6 + 15 = 21 €."),

  /* ═══ POURCENTAGES ═══ */
  E("Pourcentages","Arithmétique","Facile","exercice","Coefficients multiplicateurs",
    "Donne le coefficient multiplicateur associé à :\na) une hausse de 35 %\nb) une baisse de 12 %",
    "a) 1 + 0,35 = 1,35.\nb) 1 − 0,12 = 0,88."),
  E("Pourcentages","Arithmétique","Moyen","exercice","Appliquer une baisse",
    "Un vélo coûte 480 €. Son prix baisse de 25 %.\nCalcule le nouveau prix avec le coefficient multiplicateur.",
    "480 × 0,75 = 360 €."),
  E("Pourcentages","Arithmétique","Moyen","exercice","Calculer un taux d'évolution",
    "Une action passe de 50 € à 58 €.\nCalcule le pourcentage d'augmentation.",
    "(58 − 50) ÷ 50 = 8 ÷ 50 = 0,16, soit +16 %."),
  E("Pourcentages","Arithmétique","Difficile","exercice","Hausse puis baisse de 10 %",
    "Un prix augmente de 10 % puis baisse de 10 %.\nRevient-il à sa valeur initiale ? Justifie avec les coefficients.",
    "1,1 × 0,9 = 0,99 : le prix final vaut 99 % du prix initial.\nNon : il a globalement baissé de 1 %."),
  E("Pourcentages","Arithmétique","Difficile","probleme","Du HT au TTC",
    "Un ordinateur coûte 240 € hors taxes. La TVA est de 20 %.\nCalcule le prix TTC.",
    "240 × 1,20 = 288 € TTC."),

  /* ═══ PROPORTIONNALITÉ (GRANDEURS COMPOSÉES) ═══ */
  E("Proportionnalité","Arithmétique","Moyen","exercice","Vitesse moyenne",
    "Un cycliste parcourt 27 km en 1 h 30 min.\nCalcule sa vitesse moyenne en km/h.",
    "1 h 30 min = 1,5 h.\nv = 27 ÷ 1,5 = 18 km/h."),
  E("Proportionnalité","Arithmétique","Moyen","exercice","Convertir des m/s en km/h",
    "Convertis 15 m/s en km/h.",
    "15 × 3 600 = 54 000 m/h = 54 km/h."),
  E("Proportionnalité","Arithmétique","Moyen","exercice","Calculer un débit",
    "Un robinet remplit 90 L en 6 minutes.\n1) Calcule son débit en L/min.\n2) Quel volume s'écoule en 1 heure ?",
    "1) 90 ÷ 6 = 15 L/min.\n2) 15 × 60 = 900 L."),
  E("Proportionnalité","Arithmétique","Difficile","exercice","Masse volumique",
    "Un objet de 200 cm³ a une masse de 540 g.\nCalcule sa masse volumique en g/cm³.",
    "540 ÷ 200 = 2,7 g/cm³."),
  E("Proportionnalité","Arithmétique","Difficile","probleme","La moyenne sur tout le trajet",
    "Une voiture parcourt 60 km à 90 km/h, puis 20 km à 60 km/h.\n1) Calcule la durée de chaque partie.\n2) Calcule la vitesse moyenne sur l'ensemble du trajet.",
    "1) 60 ÷ 90 = 2/3 h = 40 min ; 20 ÷ 60 = 1/3 h = 20 min.\n2) 80 km en 1 h : vitesse moyenne 80 km/h."),

  /* ═══ STATISTIQUES ═══ */
  E("Statistiques","Statistiques","Facile","exercice","Calculer l'étendue",
    "Calcule l'étendue de la série : 11 ; 15 ; 22 ; 8 ; 19.",
    "Étendue = 22 − 8 = 14."),
  E("Statistiques","Statistiques","Moyen","exercice","Calculer la moyenne",
    "Calcule la moyenne de la série : 11 ; 15 ; 22 ; 8 ; 19.",
    "Somme : 11 + 15 + 22 + 8 + 19 = 75.\nMoyenne : 75 ÷ 5 = 15."),
  E("Statistiques","Statistiques","Moyen","exercice","Déterminer la médiane",
    "Détermine la médiane de la série : 11 ; 15 ; 22 ; 8 ; 19.",
    "Série ordonnée : 8 ; 11 ; 15 ; 19 ; 22.\n5 valeurs : la médiane est la 3ᵉ, soit 15."),
  E("Statistiques","Statistiques","Moyen","exercice","Moyenne pondérée",
    "Lila a obtenu 10 (coefficient 2), 15 (coefficient 3) et 8 (coefficient 5).\nCalcule sa moyenne pondérée.",
    "(10×2 + 15×3 + 8×5) ÷ 10 = (20 + 45 + 40) ÷ 10 = 105 ÷ 10 = 10,5."),
  E("Statistiques","Statistiques","Difficile","exercice","L'effet d'une nouvelle valeur",
    "On ajoute la valeur 27 à la série 8 ; 11 ; 15 ; 19 ; 22.\nCalcule la nouvelle moyenne.",
    "Nouvelle somme : 75 + 27 = 102.\nNouvelle moyenne : 102 ÷ 6 = 17."),
  E("Statistiques","Statistiques","Difficile","probleme","La note corrigée",
    "La moyenne des 25 élèves d'une classe au brevet blanc est 11,2. On s'aperçoit qu'un 0 saisi par erreur était en réalité un 20.\nCalcule la vraie moyenne de la classe.",
    "Somme initiale : 25 × 11,2 = 280.\nSomme corrigée : 280 − 0 + 20 = 300.\nVraie moyenne : 300 ÷ 25 = 12."),

  /* ═══ PROBABILITÉS ═══ */
  E("Probabilités","Probabilités","Facile","exercice","Probabilité simple",
    "Un sac contient 7 billes vertes et 3 billes rouges, indiscernables au toucher.\nQuelle est la probabilité de tirer une bille rouge ?",
    "10 billes en tout : p = 3/10."),
  E("Probabilités","Probabilités","Moyen","exercice","L'événement contraire",
    "La probabilité d'un événement A est 0,64.\nCalcule la probabilité de son contraire.",
    "1 − 0,64 = 0,36."),
  E("Probabilités","Probabilités","Moyen","exercice","Deux pièces de monnaie",
    "On lance deux pièces équilibrées.\nQuelle est la probabilité d'obtenir deux « pile » ?",
    "Issues : PP, PF, FP, FF (équiprobables).\np(PP) = 1/4."),
  E("Probabilités","Probabilités","Moyen","exercice","Dé et pièce",
    "On lance un dé à 6 faces puis une pièce.\n1) Combien y a-t-il d'issues ?\n2) Quelle est la probabilité d'obtenir « 6 puis face » ?",
    "1) 6 × 2 = 12 issues.\n2) p = 1/12."),
  E("Probabilités","Probabilités","Difficile","exercice","De la fréquence à la probabilité",
    "On lance 500 fois une punaise : elle retombe pointe en l'air 320 fois.\nQuelle estimation donner de la probabilité de cet événement ?",
    "Fréquence : 320 ÷ 500 = 0,64.\nOn estime la probabilité à environ 0,64."),
  E("Probabilités","Probabilités","Difficile","probleme","Deux tirages avec remise",
    "Une urne contient 2 boules rouges et 3 bleues. On tire une boule, on la remet, puis on tire à nouveau.\nQuelle est la probabilité d'obtenir deux boules rouges ?",
    "À chaque tirage, p(rouge) = 2/5.\np(deux rouges) = (2/5) × (2/5) = 4/25."),

  /* ═══ THÉORÈME DE PYTHAGORE ═══ */
  E("Théorème de Pythagore","Géométrie","Moyen","exercice","Calculer l'hypoténuse",
    "Un triangle rectangle a ses côtés de l'angle droit qui mesurent 9 cm et 40 cm.\nCalcule l'hypoténuse.",
    "hyp² = 9² + 40² = 81 + 1 600 = 1 681.\nhyp = √1 681 = 41 cm."),
  E("Théorème de Pythagore","Géométrie","Moyen","exercice","Calculer un côté de l'angle droit",
    "Dans un triangle rectangle, l'hypoténuse mesure 6,5 cm et un côté de l'angle droit mesure 2,5 cm.\nCalcule le troisième côté.",
    "côté² = 6,5² − 2,5² = 42,25 − 6,25 = 36.\ncôté = √36 = 6 cm."),
  E("Théorème de Pythagore","Géométrie","Difficile","exercice","Démontrer avec la réciproque",
    "Un triangle a des côtés de 28 cm, 45 cm et 53 cm.\nDémontre qu'il est rectangle.",
    "53² = 2 809 et 28² + 45² = 784 + 2 025 = 2 809.\nÉgalité vérifiée : d'après la réciproque du théorème de Pythagore, le triangle est rectangle."),
  E("Théorème de Pythagore","Géométrie","Difficile","exercice","Démontrer avec la contraposée",
    "Un triangle a des côtés de 8 cm, 13 cm et 15 cm.\nEst-il rectangle ? Rédige la démonstration.",
    "15² = 225 et 8² + 13² = 64 + 169 = 233.\n225 ≠ 233 : d'après la contraposée du théorème de Pythagore, le triangle n'est pas rectangle."),
  E("Théorème de Pythagore","Géométrie","Difficile","probleme","La diagonale de l'écran",
    "Un écran rectangulaire mesure 48 cm de large et 36 cm de haut.\nCalcule la longueur de sa diagonale.",
    "d² = 48² + 36² = 2 304 + 1 296 = 3 600.\nd = √3 600 = 60 cm."),

  /* ═══ THÉORÈME DE THALÈS ═══ */
  E("Théorème de Thalès","Géométrie","Moyen","exercice","Thalès dans un triangle",
    "Dans le triangle ABC, D ∈ [AB] et E ∈ [AC] avec (DE) // (BC).\nOn donne AD = 5, AB = 8 et AC = 12. Calcule AE.",
    "AD/AB = AE/AC, donc AE = (5 × 12) ÷ 8 = 7,5."),
  E("Théorème de Thalès","Géométrie","Moyen","exercice","Thalès en configuration « papillon »",
    "Les droites (AB) et (CD) sont parallèles ; (AC) et (BD) se coupent en O.\nOn donne OA = 3, OB = 4,5 et OC = 8. Calcule OD.",
    "OA/OC = OB/OD, donc OD = (4,5 × 8) ÷ 3 = 12."),
  E("Théorème de Thalès","Géométrie","Difficile","exercice","La réciproque de Thalès",
    "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec AM = 4, AB = 6, AN = 6 et AC = 9.\nLes droites (MN) et (BC) sont-elles parallèles ?",
    "AM/AB = 4/6 = 2/3 et AN/AC = 6/9 = 2/3.\nQuotients égaux, points alignés dans le même ordre : (MN) // (BC)."),
  E("Théorème de Thalès","Géométrie","Difficile","exercice","Des droites non parallèles",
    "Même configuration avec AM/AB = 5/8 et AN/AC = 7/11.\nLes droites sont-elles parallèles ?",
    "5 × 11 = 55 et 8 × 7 = 56 : les produits en croix diffèrent, donc 5/8 ≠ 7/11.\nLes droites ne sont pas parallèles."),
  E("Théorème de Thalès","Géométrie","Difficile","probleme","La hauteur du sapin",
    "Au même instant, un bâton de 1,5 m projette une ombre de 2 m et un sapin projette une ombre de 12 m.\nCalcule la hauteur du sapin.",
    "Configuration de Thalès (rayons du soleil parallèles) :\nhauteur = (1,5 × 12) ÷ 2 = 9 m."),

  /* ═══ TRIGONOMÉTRIE ═══ */
  E("Trigonométrie","Géométrie","Facile","exercice","Les trois formules",
    "Dans un triangle rectangle, écris les formules du sinus, du cosinus et de la tangente d'un angle aigu.",
    "sin = opposé ÷ hypoténuse\ncos = adjacent ÷ hypoténuse\ntan = opposé ÷ adjacent"),
  E("Trigonométrie","Géométrie","Moyen","exercice","Calculer un angle avec le sinus",
    "Dans un triangle rectangle, le côté opposé à un angle aigu mesure 4,5 cm et l'hypoténuse 7,5 cm.\nCalcule le sinus de cet angle, puis sa mesure arrondie au degré.",
    "sin = 4,5 ÷ 7,5 = 0,6.\nangle = sin⁻¹(0,6) ≈ 37°."),
  E("Trigonométrie","Géométrie","Moyen","exercice","Calculer une longueur avec le sinus",
    "Dans un triangle rectangle, l'hypoténuse mesure 14 cm et un angle aigu mesure 30°.\nCalcule le côté opposé à cet angle.",
    "opposé = 14 × sin(30°) = 14 × 0,5 = 7 cm."),
  E("Trigonométrie","Géométrie","Moyen","exercice","Calculer une longueur avec la tangente",
    "Dans un triangle rectangle, le côté adjacent à un angle de 55° mesure 9 cm.\nCalcule le côté opposé, arrondi au dixième.",
    "opposé = 9 × tan(55°) ≈ 9 × 1,428 ≈ 12,9 cm."),
  E("Trigonométrie","Géométrie","Difficile","exercice","Calculer un angle avec la tangente",
    "Dans un triangle rectangle, le côté opposé à l'angle x̂ mesure 5 cm et le côté adjacent 12 cm.\nCalcule x̂, arrondi au degré.",
    "tan(x̂) = 5/12.\nx̂ = tan⁻¹(5/12) ≈ 23°."),
  E("Trigonométrie","Géométrie","Difficile","probleme","L'angle de la rampe",
    "Une rampe d'accès s'élève de 90 cm pour une avancée horizontale de 6 m.\nCalcule l'angle de la rampe avec l'horizontale, arrondi au degré.",
    "tan(angle) = 0,9 ÷ 6 = 0,15.\nangle = tan⁻¹(0,15) ≈ 9°."),

  /* ═══ TRIANGLES SEMBLABLES ═══ */
  E("Triangles semblables","Géométrie","Facile","exercice","Définition",
    "Quand dit-on que deux triangles sont semblables ?",
    "Lorsque leurs angles sont deux à deux de même mesure.\n(Deux paires d'angles égaux suffisent : la troisième l'est automatiquement.)"),
  E("Triangles semblables","Géométrie","Moyen","exercice","Vérifier avec les angles",
    "Un triangle a des angles de 50° et 60° ; un autre a des angles de 70° et 50°.\nSont-ils semblables ?",
    "Premier : troisième angle = 180 − 110 = 70° → angles 50°, 60°, 70°.\nSecond : troisième angle = 180 − 120 = 60° → angles 70°, 50°, 60°.\nMêmes trois mesures : les triangles sont semblables."),
  E("Triangles semblables","Géométrie","Moyen","exercice","Vérifier avec les côtés",
    "Un triangle a des côtés de 6, 9 et 12 cm ; un autre de 8, 12 et 16 cm.\nSont-ils semblables ? Donne le rapport.",
    "8/6 = 12/9 = 16/12 = 4/3.\nCôtés proportionnels : triangles semblables, de rapport 4/3."),
  E("Triangles semblables","Géométrie","Difficile","exercice","Calculer un côté",
    "Deux triangles sont semblables de rapport 2,4. Un côté du petit triangle mesure 5 cm.\nCalcule le côté correspondant du grand triangle.",
    "5 × 2,4 = 12 cm."),

  /* ═══ HOMOTHÉTIES ═══ */
  E("Homothéties","Géométrie","Facile","exercice","L'effet d'une homothétie",
    "Une figure est transformée par une homothétie de rapport 3.\nQue deviennent les longueurs ? Les angles ?",
    "Les longueurs sont multipliées par 3 ; les mesures d'angles sont conservées."),
  E("Homothéties","Géométrie","Moyen","exercice","Déterminer le rapport",
    "M' est l'image de M par une homothétie de centre O, avec OM = 2 cm et OM' = 7 cm, M' étant sur la demi-droite [OM).\nQuel est le rapport de l'homothétie ?",
    "k = OM' ÷ OM = 7 ÷ 2 = 3,5."),
  E("Homothéties","Géométrie","Moyen","exercice","L'effet sur les aires",
    "Un triangle d'aire 3 cm² est transformé par une homothétie de rapport 4.\nQuelle est l'aire du triangle image ?",
    "Les aires sont multipliées par 4² = 16.\nAire image : 3 × 16 = 48 cm²."),
  E("Homothéties","Géométrie","Difficile","exercice","Un rapport négatif",
    "Que se passe-t-il pour une figure transformée par une homothétie de rapport −2 ?",
    "L'image se trouve de l'autre côté du centre, « retournée » (demi-tour), et les longueurs sont multipliées par 2."),

  /* ═══ TRANSLATION ET ROTATION ═══ */
  E("Translation et rotation","Géométrie","Facile","exercice","Image par une translation",
    "Une translation correspond au déplacement « 5 carreaux à droite, 2 carreaux en bas ».\nQuelle est l'image du point A(0 ; 3) ?",
    "A'(0 + 5 ; 3 − 2) = A'(5 ; 1)."),
  E("Translation et rotation","Géométrie","Moyen","exercice","La rotation de 180°",
    "À quelle transformation déjà connue correspond une rotation de 180° autour d'un point O ?",
    "À la symétrie centrale de centre O."),
  E("Translation et rotation","Géométrie","Moyen","exercice","Le pentagone régulier",
    "ABCDE est un pentagone régulier de centre O.\nQuelle rotation de centre O transforme le sommet A en le sommet B ?",
    "L'angle au centre vaut 360 ÷ 5 = 72°.\nC'est la rotation de centre O et d'angle 72° (dans le sens qui amène A sur B)."),

  /* ═══ GÉOMÉTRIE DANS L'ESPACE ═══ */
  E("Géométrie dans l'espace","Géométrie","Facile","exercice","Aire d'une sphère",
    "Calcule l'aire d'une sphère de rayon 3 cm (valeur exacte puis arrondi au centième).\nFormule : A = 4πr².",
    "A = 4π × 9 = 36π ≈ 113,10 cm²."),
  E("Géométrie dans l'espace","Géométrie","Moyen","exercice","Volume d'une boule",
    "Calcule le volume d'une boule de rayon 3 cm (valeur exacte puis arrondi au centième).\nFormule : V = (4/3)πr³.",
    "V = (4/3)π × 27 = 36π ≈ 113,10 cm³.\n(Amusant : pour r = 3, l'aire en cm² et le volume en cm³ ont la même valeur !)"),
  E("Géométrie dans l'espace","Géométrie","Moyen","exercice","Sections de solides",
    "Quelle est la nature de la section :\na) d'un cube par un plan parallèle à une face ?\nb) d'une sphère par un plan ?",
    "a) Un carré identique à la face.\nb) Un cercle (un grand cercle si le plan passe par le centre)."),
  E("Géométrie dans l'espace","Géométrie","Difficile","exercice","Agrandir une boule",
    "On triple le rayon d'une boule.\nPar combien son volume est-il multiplié ?",
    "Par 3³ = 27."),
  E("Géométrie dans l'espace","Géométrie","Difficile","probleme","La grande et la petite boule",
    "Une boule a un rayon de 6 cm, une autre un rayon de 3 cm.\nCombien de fois le volume de la grande contient-il celui de la petite ? Justifie sans calculer les volumes.",
    "Le rayon est multiplié par 2, donc le volume est multiplié par 2³ = 8.\nLa grande boule a un volume 8 fois plus grand."),
];

/* ── insertion idempotente ── */
async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("✗ DATABASE_URL manquant. Lance : railway run node seed-exercices-3e.js");
    process.exit(1);
  }
  let added = 0, skipped = 0;
  for (const e of EXOS_3E) {
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
