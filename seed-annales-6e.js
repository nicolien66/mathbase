/* ═══════════════════════════════════════════════════════════════
   MathBase — seed-annales-6e.js
   Ajoute 23 sujets d'évaluation ORIGINAUX de 6ème à la table
   « annales », couvrant tout le programme : numération, décimaux,
   opérations, divisions, fractions, proportionnalité, pourcentages,
   gestion de données, grandeurs & mesures, volumes, bilan.

   Usage :
     railway run node seed-annales-6e.js        (env Railway)
     DATABASE_URL=postgres://... node seed-annales-6e.js
   Le script est idempotent : un sujet déjà présent (même titre,
   même classe) n'est pas réinséré.
   ═══════════════════════════════════════════════════════════════ */
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const CLASSE = "6ème";
const YEAR = 2026;

const A = (title, exam, subject, duration, content, questions) =>
  ({ title, exam, year: YEAR, level: "college", classe: CLASSE, subject, duration, content, questions });

const ANNALES_6E = [

  /* ── NOMBRES ENTIERS ─────────────────────────────────────── */
  A("Les grands nombres entiers", "Évaluation", "Numération", 45,
    "Évaluation — Lire, écrire et comparer les nombres entiers.\nCompétences : utiliser les grands nombres, les ranger, les arrondir.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Écris les nombres suivants en chiffres :\na) trois millions quarante-deux mille sept cents\nb) soixante millions cinq cents\nc) huit milliards deux cent mille",
        solution: "a) 3 042 700\nb) 60 000 500\nc) 8 000 200 000" },
      { enonce: "Exercice 2 — Dans le nombre 4 785 213 :\na) Quel est le chiffre des dizaines de mille ?\nb) Quel est le nombre de dizaines de mille ?",
        solution: "a) Le chiffre des dizaines de mille est 8.\nb) Le nombre de dizaines de mille est 478 (car 4 785 213 = 478 × 10 000 + 5 213)." },
      { enonce: "Exercice 3 — Range les nombres suivants dans l'ordre croissant :\n987 654 ; 1 002 003 ; 998 765 ; 987 546",
        solution: "987 546 < 987 654 < 998 765 < 1 002 003" },
      { enonce: "Exercice 4 — La distance moyenne de la Terre à la Lune est d'environ 384 400 km.\na) Écris ce nombre en lettres.\nb) Arrondis-le à la centaine de mille.",
        solution: "a) Trois cent quatre-vingt-quatre mille quatre cents.\nb) 384 400 est plus proche de 400 000 que de 300 000 : arrondi à la centaine de mille → 400 000 km." },
    ]),

  A("Multiples, diviseurs et critères de divisibilité", "Évaluation", "Numération", 50,
    "Évaluation — Multiples, diviseurs, critères de divisibilité par 2, 3, 5, 9 et 10.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Donne la liste des cinq premiers multiples non nuls de 7.",
        solution: "7 ; 14 ; 21 ; 28 ; 35." },
      { enonce: "Exercice 2 — Pour chacun des nombres 348 et 2 730, indique s'il est divisible par 2, par 3, par 5, par 9 et par 10. Justifie avec les critères de divisibilité.",
        solution: "348 : chiffre des unités 8 → divisible par 2 ; 3 + 4 + 8 = 15 → divisible par 3 (15 est multiple de 3) mais pas par 9 ; ne se termine ni par 0 ni par 5 → pas divisible par 5 ni par 10.\n2 730 : se termine par 0 → divisible par 2, par 5 et par 10 ; 2 + 7 + 3 + 0 = 12 → divisible par 3, pas par 9." },
      { enonce: "Exercice 3 — Vrai ou faux ? Justifie chaque réponse.\na) 6 est un diviseur de 84.\nb) 91 est un multiple de 7.",
        solution: "a) Vrai : 84 = 6 × 14, le reste de la division est 0.\nb) Vrai : 7 × 13 = 91." },
      { enonce: "Exercice 4 — Écris la liste de tous les diviseurs de 36.",
        solution: "1 ; 2 ; 3 ; 4 ; 6 ; 9 ; 12 ; 18 ; 36 (soit 9 diviseurs).\nOn les trouve par paires : 1×36, 2×18, 3×12, 4×9, 6×6." },
    ]),

  A("Division euclidienne", "Contrôle", "Calculs", 50,
    "Contrôle — Vocabulaire et technique de la division euclidienne, problèmes.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — On donne l'égalité : 173 = 15 × 11 + 8.\nDonne le dividende, le diviseur, le quotient et le reste de la division euclidienne correspondante. Vérifie que cette égalité traduit bien une division euclidienne.",
        solution: "Dividende : 173 ; diviseur : 15 ; quotient : 11 ; reste : 8.\nC'est bien une division euclidienne car le reste (8) est strictement inférieur au diviseur (15)." },
      { enonce: "Exercice 2 — Pose et effectue les divisions euclidiennes suivantes :\na) 947 ÷ 26\nb) 608 ÷ 19",
        solution: "a) 947 = 26 × 36 + 11 → quotient 36, reste 11.\nb) 608 = 19 × 32 + 0 → quotient 32, reste 0 (608 est divisible par 19)." },
      { enonce: "Exercice 3 — 250 élèves partent en sortie scolaire dans des cars de 55 places.\nCombien de cars faut-il réserver ?",
        solution: "250 = 55 × 4 + 30 : avec 4 cars, il reste 30 élèves sans place.\nIl faut donc réserver 5 cars." },
      { enonce: "Exercice 4 — Un producteur range 138 œufs dans des boîtes de 12.\nCombien de boîtes pleines obtient-il ? Combien d'œufs restent en dehors ?",
        solution: "138 = 12 × 11 + 6.\nIl remplit 11 boîtes et il reste 6 œufs." },
    ]),

  /* ── NOMBRES DÉCIMAUX ────────────────────────────────────── */
  A("Comparer et ranger des nombres décimaux", "Évaluation", "Nombres décimaux", 45,
    "Évaluation — Comparaison et rangement de nombres décimaux.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Complète avec <, > ou = :\na) 7,4 … 7,38\nb) 12,05 … 12,5\nc) 3,60 … 3,6",
        solution: "a) 7,4 > 7,38 (4 dixièmes > 3 dixièmes)\nb) 12,05 < 12,5 (0 dixième < 5 dixièmes)\nc) 3,60 = 3,6 (le zéro final ne change pas la valeur)" },
      { enonce: "Exercice 2 — Range dans l'ordre décroissant :\n8,31 ; 8,29 ; 8,309 ; 8,3",
        solution: "8,31 > 8,309 > 8,3 > 8,29" },
      { enonce: "Exercice 3 — Aux essais de saut à la perche, quatre athlètes ont franchi :\nAnna 1,08 m ; Bilal 1,1 m ; Chloé 1,085 m ; Dario 1,18 m.\nRange ces performances de la plus petite à la plus grande. Qui a sauté le plus haut ?",
        solution: "1,08 < 1,085 < 1,1 < 1,18.\nC'est Dario qui a sauté le plus haut (1,18 m)." },
      { enonce: "Exercice 4 — Inès affirme : « 5,17 > 5,2 parce que 17 > 2. » A-t-elle raison ? Explique.",
        solution: "Non. On compare chiffre par chiffre après la virgule : 5,17 a 1 dixième et 5,2 en a 2.\nComme 1 < 2, on a 5,17 < 5,2. On ne compare pas « 17 » et « 2 » comme des entiers." },
    ]),

  A("Encadrer, intercaler et valeurs approchées", "Évaluation", "Nombres décimaux", 45,
    "Évaluation — Encadrements, intercalation et valeurs approchées de nombres décimaux.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Encadre le nombre 7,384 :\na) à l'unité\nb) au dixième\nc) au centième",
        solution: "a) 7 < 7,384 < 8\nb) 7,3 < 7,384 < 7,4\nc) 7,38 < 7,384 < 7,39" },
      { enonce: "Exercice 2 — Intercale un nombre décimal :\na) 4,5 < … < 4,6\nb) 12,07 < … < 12,08",
        solution: "a) Par exemple 4,55 (toute valeur entre 4,5 et 4,6 convient).\nb) Par exemple 12,075." },
      { enonce: "Exercice 3 — Pour le nombre 15,468, donne :\na) sa valeur approchée au dixième par défaut\nb) sa valeur approchée au dixième par excès\nc) son arrondi au dixième",
        solution: "a) 15,4\nb) 15,5\nc) 15,5 (car le chiffre suivant, 6, est ≥ 5)" },
      { enonce: "Exercice 4 — Arrondis 26,349 :\na) à l'unité\nb) au dixième\nc) au centième",
        solution: "a) 26 (car 3 < 5)\nb) 26,3 (car 4 < 5)\nc) 26,35 (car 9 ≥ 5)" },
    ]),

  A("Addition et soustraction de nombres décimaux", "Contrôle", "Calculs", 45,
    "Contrôle — Additionner et soustraire des nombres décimaux, en calcul mental et en calcul posé.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Calcule de tête :\na) 4,8 + 0,2\nb) 7,5 + 1,9\nc) 10 − 2,7\nd) 6,4 − 0,15",
        solution: "a) 5\nb) 9,4\nc) 7,3\nd) 6,25" },
      { enonce: "Exercice 2 — Pose et effectue :\na) 47,86 + 128,9\nb) 235,4 − 78,63",
        solution: "a) 47,86 + 128,90 = 176,76\nb) 235,40 − 78,63 = 156,77\n(On aligne les virgules et on complète avec des zéros.)" },
      { enonce: "Exercice 3 — Lucie achète un livre à 12,90 € et un cahier à 3,45 €. Elle paie avec un billet de 20 €.\nCombien la caissière doit-elle lui rendre ?",
        solution: "Dépense : 12,90 + 3,45 = 16,35 €.\nMonnaie rendue : 20 − 16,35 = 3,65 €." },
      { enonce: "Exercice 4 — Un triangle a des côtés de 5,6 cm, 7,25 cm et 6,4 cm.\nCalcule son périmètre.",
        solution: "P = 5,6 + 7,25 + 6,4 = 19,25 cm." },
    ]),

  A("Multiplier et diviser par 10, 100, 1 000, 0,1 et 0,01", "Évaluation", "Calculs", 40,
    "Évaluation — Multiplications et divisions par 10, 100, 1 000, 0,1 et 0,01.\n\nDurée : 40 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Calcule :\na) 3,7 × 10\nb) 0,45 × 100\nc) 6,2 × 1 000\nd) 8,15 × 0,1\ne) 240 × 0,01",
        solution: "a) 37\nb) 45\nc) 6 200\nd) 0,815\ne) 2,4" },
      { enonce: "Exercice 2 — Calcule :\na) 53 ÷ 10\nb) 7,8 ÷ 100\nc) 4 500 ÷ 1 000",
        solution: "a) 5,3\nb) 0,078\nc) 4,5" },
      { enonce: "Exercice 3 — Complète chaque égalité par 10, 100, 1 000, 0,1 ou 0,01 :\na) 6,3 × … = 630\nb) 82 × … = 0,82",
        solution: "a) 6,3 × 100 = 630\nb) 82 × 0,01 = 0,82" },
      { enonce: "Exercice 4 — Un paquet de feuilles pèse 2,5 kg.\nQuelle est la masse de 100 paquets identiques ?",
        solution: "2,5 × 100 = 250 kg." },
    ]),

  A("Multiplication de décimaux et ordre de grandeur", "Contrôle", "Calculs", 50,
    "Contrôle — Poser une multiplication de nombres décimaux et estimer un ordre de grandeur.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Donne un ordre de grandeur du produit 41,7 × 5,9, puis calcule sa valeur exacte.",
        solution: "Ordre de grandeur : 40 × 6 = 240.\nValeur exacte : 41,7 × 5,9 = 246,03 (cohérent avec l'ordre de grandeur)." },
      { enonce: "Exercice 2 — Pose et effectue :\na) 6,25 × 3,4\nb) 18,3 × 0,52",
        solution: "a) 6,25 × 3,4 = 21,25 (625 × 34 = 21 250, puis 3 chiffres après la virgule → 21,250)\nb) 18,3 × 0,52 = 9,516" },
      { enonce: "Exercice 3 — Pour carreler une terrasse de 12,5 m², un artisan facture 23,80 € le m².\nQuel est le montant total des travaux ?",
        solution: "12,5 × 23,80 = 297,50 €." },
      { enonce: "Exercice 4 — Vrai ou faux : « Quand on multiplie un nombre, le résultat est toujours plus grand. » Justifie avec un exemple.",
        solution: "Faux. Multiplier par un nombre inférieur à 1 diminue le résultat.\nExemple : 8 × 0,5 = 4, et 4 < 8." },
    ]),

  A("Division décimale", "Évaluation", "Calculs", 50,
    "Évaluation — Poser une division décimale, donner une valeur approchée d'un quotient.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Pose et effectue :\na) 74,4 ÷ 6\nb) 9,45 ÷ 5",
        solution: "a) 74,4 ÷ 6 = 12,4\nb) 9,45 ÷ 5 = 1,89" },
      { enonce: "Exercice 2 — Effectue la division 47 ÷ 8 en poursuivant après la virgule jusqu'à obtenir un reste nul.",
        solution: "47 ÷ 8 = 5,875 (en effet 8 × 5,875 = 47)." },
      { enonce: "Exercice 3 — Donne la valeur approchée au centième du quotient 25 ÷ 7.",
        solution: "25 ÷ 7 = 3,5714… ≈ 3,57 au centième." },
      { enonce: "Exercice 4 — Un ruban de 15,6 m est découpé en 8 morceaux de même longueur.\nQuelle est la longueur d'un morceau ?",
        solution: "15,6 ÷ 8 = 1,95 m." },
    ]),

  A("Priorités des opérations", "Contrôle", "Calculs", 50,
    "Contrôle — Priorités opératoires : enchaîner des calculs avec ou sans parenthèses.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Pour chaque expression, indique la première opération à effectuer :\na) 7 + 5 × 3\nb) (8 − 2) × 4",
        solution: "a) La multiplication 5 × 3 (priorité de la multiplication sur l'addition).\nb) La soustraction 8 − 2 (les parenthèses sont prioritaires)." },
      { enonce: "Exercice 2 — Calcule en détaillant les étapes :\nA = 24 − 3 × 5\nB = (14 + 6) ÷ 4\nC = 36 ÷ 6 + 2 × 7",
        solution: "A = 24 − 15 = 9\nB = 20 ÷ 4 = 5\nC = 6 + 14 = 20" },
      { enonce: "Exercice 3 — Place des parenthèses dans l'expression 5 + 3 × 4 pour que le résultat soit 32.",
        solution: "(5 + 3) × 4 = 8 × 4 = 32." },
      { enonce: "Exercice 4 — Au restaurant, une famille commande 3 menus à 8 € et 2 desserts à 2,50 €.\nÉcris le calcul en une seule expression, puis calcule la dépense totale.",
        solution: "3 × 8 + 2 × 2,50 = 24 + 5 = 29 €." },
    ]),

  /* ── FRACTIONS ───────────────────────────────────────────── */
  A("Comprendre la notion de fraction", "Évaluation", "Fractions", 45,
    "Évaluation — Nommer, représenter et interpréter une fraction.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Dans la fraction 3/8, comment s'appellent le nombre 3 et le nombre 8 ? Comment se lit cette fraction ?",
        solution: "3 est le numérateur, 8 est le dénominateur.\nElle se lit « trois huitièmes »." },
      { enonce: "Exercice 2 — Un disque est partagé en 6 parts égales ; 4 parts sont coloriées.\nQuelle fraction du disque est coloriée ? Peut-on la simplifier ?",
        solution: "La fraction coloriée est 4/6.\nOn peut la simplifier par 2 : 4/6 = 2/3." },
      { enonce: "Exercice 3 — Pour chaque fraction, dis si elle est inférieure, égale ou supérieure à 1 :\n7/5 ; 3/4 ; 9/9",
        solution: "7/5 > 1 (numérateur > dénominateur)\n3/4 < 1 (numérateur < dénominateur)\n9/9 = 1 (numérateur = dénominateur)" },
      { enonce: "Exercice 4 — Calcule les 3/4 de 28.",
        solution: "28 ÷ 4 = 7, puis 7 × 3 = 21.\nLes 3/4 de 28 valent 21." },
    ]),

  A("Fractions et demi-droite graduée", "Évaluation", "Fractions", 45,
    "Évaluation — Repérer, décomposer et encadrer des fractions sur une demi-droite graduée.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Sur une demi-droite graduée, l'unité est partagée en 5 parts égales.\na) Où placer les fractions 2/5 et 7/5 ?\nb) Le point A se trouve 3 graduations après 0 et le point B 8 graduations après 0. Donne leurs abscisses.",
        solution: "a) 2/5 se place 2 graduations après 0 ; 7/5 se place 2 graduations après 1 (car 7/5 = 1 + 2/5).\nb) A a pour abscisse 3/5 et B a pour abscisse 8/5." },
      { enonce: "Exercice 2 — Décompose la fraction 13/4 sous la forme d'un entier plus une fraction inférieure à 1, puis encadre-la entre deux entiers consécutifs.",
        solution: "13/4 = 12/4 + 1/4 = 3 + 1/4.\nDonc 3 < 13/4 < 4." },
      { enonce: "Exercice 3 — Sur une demi-droite graduée en cinquièmes, un point se trouve 3 graduations après le nombre 2.\nQuelle est son abscisse ?",
        solution: "2 + 3/5 = 10/5 + 3/5 = 13/5." },
      { enonce: "Exercice 4 — Compare 9/4 et 2. Justifie.",
        solution: "9/4 = 8/4 + 1/4 = 2 + 1/4.\nDonc 9/4 > 2." },
    ]),

  A("Ajouter et comparer des fractions", "Contrôle", "Fractions", 50,
    "Contrôle — Additionner des fractions de même dénominateur ou de dénominateurs multiples, comparer des fractions.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Effectue :\na) 2/7 + 3/7\nb) 5/9 + 7/9 (simplifie le résultat)",
        solution: "a) 2/7 + 3/7 = 5/7\nb) 5/9 + 7/9 = 12/9 = 4/3 (simplification par 3)" },
      { enonce: "Exercice 2 — Effectue en mettant au même dénominateur :\na) 1/2 + 3/8\nb) 2/3 + 5/12",
        solution: "a) 1/2 = 4/8, donc 4/8 + 3/8 = 7/8\nb) 2/3 = 8/12, donc 8/12 + 5/12 = 13/12" },
      { enonce: "Exercice 3 — Compare en justifiant :\na) 5/4 et 7/8\nb) 3/7 et 3/5",
        solution: "a) 5/4 > 1 (numérateur > dénominateur) et 7/8 < 1, donc 5/4 > 7/8.\nb) Même numérateur : la fraction dont le dénominateur est le plus petit est la plus grande, donc 3/5 > 3/7." },
      { enonce: "Exercice 4 — Tom mange 1/4 d'une pizza et Léa en mange 3/8.\nQuelle fraction de la pizza ont-ils mangée à eux deux ? Quelle fraction reste-t-il ?",
        solution: "1/4 = 2/8, donc ensemble : 2/8 + 3/8 = 5/8.\nIl reste 8/8 − 5/8 = 3/8 de la pizza." },
    ]),

  A("Multiplier une fraction par un nombre", "Évaluation", "Fractions", 45,
    "Évaluation — Utiliser une fraction comme opérateur et comme quotient.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Calcule :\na) 3/5 × 20\nb) 2/3 × 18\nc) 7/4 × 8",
        solution: "a) 20 ÷ 5 = 4, puis 4 × 3 = 12\nb) 18 ÷ 3 = 6, puis 6 × 2 = 12\nc) 8 ÷ 4 = 2, puis 2 × 7 = 14" },
      { enonce: "Exercice 2 — Écris sous forme décimale en calculant le quotient :\na) 3/4\nb) 7/5",
        solution: "a) 3 ÷ 4 = 0,75\nb) 7 ÷ 5 = 1,4" },
      { enonce: "Exercice 3 — Dans une classe de 27 élèves, les 2/3 viennent au collège à vélo.\nCombien d'élèves viennent à vélo ?",
        solution: "27 ÷ 3 = 9, puis 9 × 2 = 18.\n18 élèves viennent à vélo." },
      { enonce: "Exercice 4 — Un jardinier plante des tulipes sur les 3/8 d'un massif de 56 m².\nQuelle surface est plantée de tulipes ?",
        solution: "56 ÷ 8 = 7, puis 7 × 3 = 21.\nLa surface plantée est de 21 m²." },
    ]),

  /* ── PROPORTIONNALITÉ & POURCENTAGES ─────────────────────── */
  A("Reconnaître une situation de proportionnalité", "Évaluation", "Proportionnalité", 45,
    "Évaluation — Reconnaître si deux grandeurs sont proportionnelles.\n\nDurée : 45 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Chez un primeur, le kilogramme de tomates coûte 2,50 €.\nQuel est le prix de 2 kg ? de 3,5 kg ? Ces grandeurs sont-elles proportionnelles ?",
        solution: "2 kg : 2 × 2,50 = 5 €. 3,5 kg : 3,5 × 2,50 = 8,75 €.\nOui : le prix est proportionnel à la masse (on multiplie toujours par 2,50)." },
      { enonce: "Exercice 2 — Pour chaque situation, dis si les grandeurs sont proportionnelles :\na) la taille d'un enfant et son âge\nb) le prix payé et le nombre de baguettes achetées (au même prix l'unité)\nc) le périmètre d'un carré et la longueur de son côté\nd) l'aire d'un carré et la longueur de son côté",
        solution: "a) Non : on ne grandit pas du même nombre de centimètres chaque année.\nb) Oui : prix = nombre × prix unitaire.\nc) Oui : périmètre = 4 × côté.\nd) Non : pour un côté de 1, 2, 3, l'aire vaut 1, 4, 9 — elle n'est pas multipliée par un nombre fixe." },
      { enonce: "Exercice 3 — Le tableau donne la masse de farine selon le nombre de gâteaux :\n4 gâteaux → 10 kg ; 6 gâteaux → 15 kg ; 9 gâteaux → 22,5 kg.\nCe tableau est-il un tableau de proportionnalité ? Justifie.",
        solution: "10 ÷ 4 = 2,5 ; 15 ÷ 6 = 2,5 ; 22,5 ÷ 9 = 2,5.\nLe quotient est constant (2,5) : oui, c'est un tableau de proportionnalité, de coefficient 2,5." },
      { enonce: "Exercice 4 — Maria vend ses œufs 1,80 € les 6 et 2,70 € les 9. Elle propose aussi 4,20 € les 12.\nLe prix est-il proportionnel au nombre d'œufs sur ces trois offres ?",
        solution: "1,80 ÷ 6 = 0,30 ; 2,70 ÷ 9 = 0,30 ; mais 4,20 ÷ 12 = 0,35.\nLes deux premières offres correspondent à 0,30 € l'œuf, la troisième à 0,35 € : le prix n'est pas proportionnel au nombre d'œufs sur l'ensemble des trois offres." },
    ]),

  A("Résoudre un problème de proportionnalité", "Contrôle", "Proportionnalité", 55,
    "Contrôle — Méthodes multiplicative et additive, coefficient de proportionnalité, échelle.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — 3 kg de pommes coûtent 5,40 €.\nCombien coûtent 9 kg de pommes ? (méthode multiplicative)",
        solution: "9 kg = 3 kg × 3, donc le prix est aussi multiplié par 3 :\n5,40 × 3 = 16,20 €." },
      { enonce: "Exercice 2 — 5 cahiers coûtent 6 € et 3 cahiers coûtent 3,60 €.\nCombien coûtent 8 cahiers ? (méthode additive)",
        solution: "8 = 5 + 3, donc le prix de 8 cahiers est la somme :\n6 + 3,60 = 9,60 €." },
      { enonce: "Exercice 3 — 4 baguettes coûtent 4,80 €.\na) Calcule le coefficient de proportionnalité (prix d'une baguette).\nb) Déduis-en le prix de 11 baguettes.",
        solution: "a) 4,80 ÷ 4 = 1,20 € la baguette.\nb) 11 × 1,20 = 13,20 €." },
      { enonce: "Exercice 4 — Un plan est à l'échelle 1/200 (1 cm sur le plan représente 200 cm dans la réalité).\na) Un couloir mesure 4,5 cm sur le plan. Quelle est sa longueur réelle en mètres ?\nb) Un mur mesure 12 m dans la réalité. Quelle est sa longueur sur le plan ?",
        solution: "a) 4,5 × 200 = 900 cm = 9 m.\nb) 12 m = 1 200 cm, et 1 200 ÷ 200 = 6 cm sur le plan." },
    ]),

  A("Proportionnalité et représentation graphique", "Évaluation", "Proportionnalité", 45,
    "Évaluation — Reconnaître graphiquement une situation de proportionnalité.\n\nDurée : 45 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Complète la propriété du cours :\n« Une situation de proportionnalité est représentée par des points … avec … du repère. »",
        solution: "« … des points alignés avec l'origine du repère. »" },
      { enonce: "Exercice 2 — Sur un graphique, le prix des cerises est donné par les points (1 kg ; 4 €), (2 kg ; 8 €) et (3 kg ; 12 €).\nCette situation est-elle proportionnelle ? Si oui, donne le prix d'un kilogramme.",
        solution: "4 ÷ 1 = 8 ÷ 2 = 12 ÷ 3 = 4 : les points sont alignés avec l'origine.\nOui, c'est une situation de proportionnalité : 4 € le kilogramme." },
      { enonce: "Exercice 3 — Un plombier facture 25 € par heure de travail plus 30 € de déplacement.\na) Combien coûte une intervention de 1 h ? de 2 h ?\nb) Le prix est-il proportionnel à la durée ? Que peut-on dire du graphique ?",
        solution: "a) 1 h : 25 + 30 = 55 €. 2 h : 50 + 30 = 80 €.\nb) 80 ≠ 2 × 55 : le prix n'est pas proportionnel à la durée.\nLe graphique est une droite qui ne passe pas par l'origine (elle « démarre » à 30 €)." },
      { enonce: "Exercice 4 — Un cycliste roule à la vitesse constante de 60 km/h. La distance parcourue est proportionnelle à la durée.\nQuelle distance parcourt-il en 1 h 30 min ?",
        solution: "1 h 30 min = 1,5 h.\nDistance : 60 × 1,5 = 90 km." },
    ]),

  A("Les pourcentages", "Évaluation", "Proportionnalité", 45,
    "Évaluation — Appliquer un pourcentage.\n\nDurée : 45 minutes — Calculatrice autorisée pour l'exercice 3.",
    [
      { enonce: "Exercice 1 — Calcule de tête :\na) 20 % de 45 €\nb) 50 % de 68\nc) 10 % de 235",
        solution: "a) 45 ÷ 5 = 9 €\nb) 68 ÷ 2 = 34\nc) 235 ÷ 10 = 23,5" },
      { enonce: "Exercice 2 — Dans une classe de 25 élèves, 60 % sont demi-pensionnaires.\nCombien d'élèves sont demi-pensionnaires ?",
        solution: "60 % de 25 = 25 × 60 ÷ 100 = 15.\n15 élèves sont demi-pensionnaires." },
      { enonce: "Exercice 3 — Un blouson coûte 120 €. Le magasin accorde une remise de 15 %.\na) Calcule le montant de la remise.\nb) Quel est le prix payé ?",
        solution: "a) 120 × 15 ÷ 100 = 18 € de remise.\nb) 120 − 18 = 102 €." },
      { enonce: "Exercice 4 — Compare 25 % de 80 et 80 % de 25. Que remarques-tu ?",
        solution: "25 % de 80 = 20 et 80 % de 25 = 20.\nLes deux résultats sont égaux : a % de b = b % de a." },
    ]),

  /* ── GESTION DE DONNÉES ──────────────────────────────────── */
  A("Organiser des données dans un tableau", "Évaluation", "Gestion de données", 45,
    "Évaluation — Construire et lire des tableaux d'effectifs, tableaux à double entrée.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Voici les résultats de 20 lancers d'un dé :\n1 ; 3 ; 3 ; 5 ; 6 ; 2 ; 4 ; 3 ; 1 ; 6 ; 6 ; 2 ; 5 ; 3 ; 4 ; 6 ; 1 ; 3 ; 2 ; 6\nConstruis le tableau des effectifs (nombre de fois où chaque face est sortie).",
        solution: "Face 1 : 3 fois ; face 2 : 3 fois ; face 3 : 5 fois ; face 4 : 2 fois ; face 5 : 2 fois ; face 6 : 5 fois.\nVérification : 3 + 3 + 5 + 2 + 2 + 5 = 20 lancers. ✓" },
      { enonce: "Exercice 2 — À partir du tableau de l'exercice 1 :\na) Quelles faces sont sorties le plus souvent ?\nb) Combien de lancers ont donné un résultat pair ?",
        solution: "a) Les faces 3 et 6, sorties 5 fois chacune.\nb) Faces paires : 2 (3 fois) + 4 (2 fois) + 6 (5 fois) = 10 lancers." },
      { enonce: "Exercice 3 — Dans un club, les inscriptions au foot et au basket sont :\n6ème : 14 au foot, 9 au basket — 5ème : 11 au foot, 16 au basket.\nConstruis un tableau à double entrée avec les totaux par ligne et par colonne.",
        solution: "            Foot   Basket   Total\n6ème         14       9       23\n5ème         11      16       27\nTotal        25      25       50" },
      { enonce: "Exercice 4 — À partir du tableau de l'exercice 3, combien d'élèves le club compte-t-il en tout ? Combien d'élèves de 5ème font du basket ?",
        solution: "Le club compte 50 élèves en tout.\n16 élèves de 5ème font du basket." },
    ]),

  A("Représentations graphiques : diagrammes", "Évaluation", "Gestion de données", 45,
    "Évaluation — Construire et interpréter des diagrammes en bâtons et circulaires.\n\nDurée : 45 minutes — Matériel : règle et rapporteur.",
    [
      { enonce: "Exercice 1 — Voici les températures relevées à midi pendant une semaine :\nlundi 4 °C ; mardi 6 °C ; mercredi 3 °C ; jeudi 7 °C ; vendredi 5 °C.\nConstruis le diagramme en bâtons correspondant (1 cm pour 1 °C).",
        solution: "On trace un axe horizontal avec les jours et un axe vertical gradué de 0 à 7 °C.\nHauteurs des bâtons : lundi 4 cm, mardi 6 cm, mercredi 3 cm, jeudi 7 cm, vendredi 5 cm." },
      { enonce: "Exercice 2 — À partir des données de l'exercice 1 :\na) Quel jour a-t-il fait le plus chaud ?\nb) Quel est l'écart de température entre le jour le plus chaud et le jour le plus froid ?",
        solution: "a) Jeudi (7 °C).\nb) 7 − 3 = 4 °C d'écart (entre jeudi et mercredi)." },
      { enonce: "Exercice 3 — Un collégien dort 9 h par jour. On veut représenter sa journée de 24 h par un diagramme circulaire.\nQuel angle correspond au sommeil ?",
        solution: "24 h correspondent à 360°, donc 1 h correspond à 360 ÷ 24 = 15°.\nSommeil : 9 × 15 = 135°." },
      { enonce: "Exercice 4 — Quel type de diagramme choisirais-tu pour représenter :\na) l'évolution de la taille d'une plante semaine après semaine ?\nb) la répartition des élèves d'un collège selon leur moyen de transport ?",
        solution: "a) Un graphique en courbe (il montre une évolution dans le temps).\nb) Un diagramme circulaire (il montre une répartition d'un tout)." },
    ]),

  /* ── GRANDEURS & MESURES ─────────────────────────────────── */
  A("Nombres décimaux et unités de grandeurs", "Évaluation", "Grandeurs et mesures", 45,
    "Évaluation — Convertir des unités de longueur, de masse et de contenance avec des nombres décimaux.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Convertis :\na) 3,5 km en m\nb) 47 cm en m\nc) 5,2 m en cm",
        solution: "a) 3,5 km = 3 500 m\nb) 47 cm = 0,47 m\nc) 5,2 m = 520 cm" },
      { enonce: "Exercice 2 — Convertis :\na) 0,45 kg en g\nb) 6 781,2 cg en g\nc) 2,3 t en kg",
        solution: "a) 0,45 kg = 450 g\nb) 6 781,2 cg = 67,812 g\nc) 2,3 t = 2 300 kg" },
      { enonce: "Exercice 3 — Convertis :\na) 1,5 L en cL\nb) 250 mL en L",
        solution: "a) 1,5 L = 150 cL\nb) 250 mL = 0,25 L" },
      { enonce: "Exercice 4 — Une bouteille contient 1,5 L de jus de fruits. On la vide dans des verres de 25 cL.\nCombien de verres peut-on remplir ?",
        solution: "1,5 L = 150 cL, et 150 ÷ 25 = 6.\nOn peut remplir 6 verres." },
    ]),

  A("Les volumes", "Contrôle", "Grandeurs et mesures", 50,
    "Contrôle — Conversions d'unités de volume, volume du pavé droit et du cube.\n\nDurée : 50 minutes — Calculatrice autorisée pour l'exercice 4.",
    [
      { enonce: "Exercice 1 — Convertis :\na) 3 m³ en cm³\nb) 4 500 cm³ en dm³ puis en litres\nc) 2,7 dm³ en cm³",
        solution: "a) 1 m³ = 1 000 000 cm³, donc 3 m³ = 3 000 000 cm³.\nb) 4 500 cm³ = 4,5 dm³ = 4,5 L (1 dm³ = 1 L).\nc) 2,7 dm³ = 2 700 cm³." },
      { enonce: "Exercice 2 — Calcule le volume d'un pavé droit de dimensions 8 cm, 5 cm et 3 cm.",
        solution: "V = 8 × 5 × 3 = 120 cm³." },
      { enonce: "Exercice 3 — Calcule le volume d'un cube d'arête 4 cm.",
        solution: "V = 4 × 4 × 4 = 64 cm³." },
      { enonce: "Exercice 4 — Un aquarium a la forme d'un pavé droit de 60 cm de longueur, 30 cm de largeur et 40 cm de hauteur.\na) Calcule son volume en cm³ puis en litres.\nb) On le remplit aux 3/4. Quel volume d'eau contient-il ?",
        solution: "a) V = 60 × 30 × 40 = 72 000 cm³ = 72 dm³ = 72 L.\nb) 72 ÷ 4 = 18, puis 18 × 3 = 54. Il contient 54 L d'eau." },
    ]),

  /* ── BILAN ───────────────────────────────────────────────── */
  A("Bilan de début d'année — Révisions générales", "Bilan", "Toutes notions", 60,
    "Évaluation diagnostique de début d'année — Ce bilan couvre la numération, le calcul, les fractions, les mesures et la résolution de problèmes.\nRéponds au maximum de questions : ce bilan sert à repérer tes points forts et tes points à travailler.\n\nDurée : 60 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Numération\na) Écris 2 054 300 en lettres.\nb) Compare 4,58 et 4,6.",
        solution: "a) Deux millions cinquante-quatre mille trois cents.\nb) 4,58 < 4,6 (5 dixièmes < 6 dixièmes)." },
      { enonce: "Exercice 2 — Calculs posés\na) 356,4 + 78,25\nb) 45 × 23\nc) 156 ÷ 12",
        solution: "a) 356,40 + 78,25 = 434,65\nb) 45 × 23 = 1 035\nc) 156 ÷ 12 = 13" },
      { enonce: "Exercice 3 — Fractions\nCalcule les 3/4 de 24.",
        solution: "24 ÷ 4 = 6, puis 6 × 3 = 18." },
      { enonce: "Exercice 4 — Mesures\nCalcule le périmètre d'un rectangle de longueur 7,5 cm et de largeur 4,2 cm.",
        solution: "P = 2 × (7,5 + 4,2) = 2 × 11,7 = 23,4 cm." },
      { enonce: "Exercice 5 — Problème\nSamir achète 3 classeurs à 4,20 € l'un. Il paie avec un billet de 20 €.\nCombien lui rend-on ?",
        solution: "Dépense : 3 × 4,20 = 12,60 €.\nMonnaie : 20 − 12,60 = 7,40 €." },
    ]),
];

/* ── insertion idempotente ── */
async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("✗ DATABASE_URL manquant. Lance : railway run node seed-annales-6e.js");
    process.exit(1);
  }
  let added = 0, skipped = 0;
  for (const a of ANNALES_6E) {
    const { rows } = await pool.query(
      "SELECT id FROM annales WHERE title = $1 AND classe = $2 LIMIT 1",
      [a.title, a.classe]
    );
    if (rows.length) { skipped++; console.log("· déjà présent :", a.title); continue; }
    await pool.query(
      `INSERT INTO annales (title, exam, year, level, classe, subject, duration, content, image_url, solution, questions)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [a.title, a.exam, a.year, a.level, a.classe, a.subject, a.duration, a.content,
       null, null, JSON.stringify(a.questions)]
    );
    added++;
    console.log("✓ ajouté :", a.title, `(${a.questions.length} exercices)`);
  }
  console.log(`\nTerminé : ${added} sujet(s) ajouté(s), ${skipped} déjà présent(s).`);
  await pool.end();
}

main().catch(err => { console.error("Erreur :", err.message); process.exit(1); });
