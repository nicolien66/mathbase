/* ═══════════════════════════════════════════════════════════════
   MathBase — seed-annales-5e.js
   Ajoute 20 sujets d'évaluation ORIGINAUX de 5ème à la table
   « annales » : nombres relatifs, fractions, calcul littéral,
   proportionnalité, ratios, pourcentages & échelles, statistiques,
   probabilités, coordonnées, symétrie centrale, angles, triangles,
   aires & périmètres, volumes, durées.

   Usage :
     railway run node seed-annales-5e.js
     ou : DATABASE_URL=postgres://... node seed-annales-5e.js
   Idempotent : un sujet déjà présent (titre + classe) est ignoré.
   ═══════════════════════════════════════════════════════════════ */
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const CLASSE = "5ème";
const YEAR = 2026;

const A = (title, exam, subject, duration, content, questions) =>
  ({ title, exam, year: YEAR, level: "college", classe: CLASSE, subject, duration, content, questions });

const ANNALES_5E = [

  /* ── NOMBRES RELATIFS ────────────────────────────────────── */
  A("Nombres relatifs : comparer et repérer", "Évaluation", "Nombres et calculs", 45,
    "Évaluation — Repérer, comparer et ranger des nombres relatifs.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Range dans l'ordre croissant :\n−7 ; 3 ; −2,5 ; 0 ; −11 ; 4,8",
        solution: "−11 < −7 < −2,5 < 0 < 3 < 4,8\n(Entre deux négatifs, le plus petit est celui qui est le plus loin de zéro.)" },
      { enonce: "Exercice 2 —\na) Donne l'opposé de −6 puis l'opposé de 3,4.\nb) Compare −5,2 et −5,18.",
        solution: "a) L'opposé de −6 est 6 ; l'opposé de 3,4 est −3,4.\nb) 5,2 > 5,18 donc, pour les négatifs, −5,2 < −5,18." },
      { enonce: "Exercice 3 — Sur une droite graduée d'unité 1 cm, place les points A(−3), B(1,5) et C(−0,5).\nLequel de ces points est le plus proche de l'origine ?",
        solution: "A se place 3 unités à gauche de 0, B une unité et demie à droite, C une demi-unité à gauche.\nC est le plus proche de l'origine (distance 0,5)." },
      { enonce: "Exercice 4 — Ce matin, il faisait −4 °C. La température a augmenté de 9 °C dans la journée, puis a baissé de 7 °C dans la soirée.\nQuelle est la température finale ?",
        solution: "−4 + 9 = 5 °C dans la journée.\n5 − 7 = −2 °C le soir.\nLa température finale est −2 °C." },
    ]),

  A("Addition et soustraction de nombres relatifs", "Contrôle", "Nombres et calculs", 50,
    "Contrôle — Additionner et soustraire des nombres relatifs, enchaîner des calculs.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Effectue les sommes de nombres de même signe :\na) (−5) + (−8)\nb) (+7) + (+4)",
        solution: "a) (−5) + (−8) = −13\nb) (+7) + (+4) = +11" },
      { enonce: "Exercice 2 — Effectue les sommes de nombres de signes contraires :\na) (−9) + (+4)\nb) (+12) + (−7)\nc) (−3,5) + (+8)",
        solution: "a) −5 (le signe est celui de −9, le plus éloigné de zéro)\nb) +5\nc) +4,5" },
      { enonce: "Exercice 3 — Transforme chaque soustraction en addition puis calcule :\na) (−6) − (−10)\nb) (+5) − (+9)\nc) (−2,4) − (+3,6)",
        solution: "a) (−6) + (+10) = +4\nb) (+5) + (−9) = −4\nc) (−2,4) + (−3,6) = −6" },
      { enonce: "Exercice 4 — Calcule de gauche à droite :\n−4 + 7 − 10 + 3",
        solution: "−4 + 7 = 3 ; puis 3 − 10 = −7 ; puis −7 + 3 = −4.\nRésultat : −4." },
      { enonce: "Exercice 5 — Le compte de Nadia affiche 45,50 €. Elle dépense 60 €, puis reçoit un virement de 25,80 €.\nQuel est le solde final de son compte ?",
        solution: "45,50 − 60 = −14,50 € (le compte est à découvert).\n−14,50 + 25,80 = +11,30 €.\nLe solde final est 11,30 €." },
    ]),

  A("Distance entre deux points sur une droite graduée", "Évaluation", "Nombres et calculs", 45,
    "Évaluation — Calculer la distance entre deux points d'abscisses relatives.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Sur une droite graduée, on place A(3,2) et B(−1,4).\nCalcule la distance AB.",
        solution: "Les abscisses sont de signes contraires : AB = 3,2 + 1,4 = 4,6." },
      { enonce: "Exercice 2 — On place C(−5,7) et D(−1,2).\nCalcule la distance CD.",
        solution: "Les abscisses sont de même signe : CD = 5,7 − 1,2 = 4,5." },
      { enonce: "Exercice 3 — On place G(−7,1) et H(6,9).\nLequel de ces deux points est le plus éloigné de l'origine ? Justifie.",
        solution: "La distance de G à l'origine est 7,1 ; celle de H est 6,9.\n7,1 > 6,9 : c'est G qui est le plus éloigné de l'origine." },
      { enonce: "Exercice 4 — Un empereur romain a régné de l'an −27 à l'an 14.\nCombien d'années son règne a-t-il duré ?",
        solution: "Durée = 14 − (−27) = 14 + 27 = 41 années." },
    ]),

  /* ── FRACTIONS ───────────────────────────────────────────── */
  A("Simplifier et comparer des fractions", "Évaluation", "Fractions", 50,
    "Évaluation — Fractions égales, simplification, comparaison.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Simplifie au maximum :\na) 18/24\nb) 35/50\nc) 42/56",
        solution: "a) 18/24 = 3/4 (division par 6)\nb) 35/50 = 7/10 (division par 5)\nc) 42/56 = 3/4 (division par 14)" },
      { enonce: "Exercice 2 — Écris les fractions 5/6, 7/12 et 11/18 avec le dénominateur 36, puis range-les dans l'ordre croissant.",
        solution: "5/6 = 30/36 ; 7/12 = 21/36 ; 11/18 = 22/36.\n21/36 < 22/36 < 30/36, donc 7/12 < 11/18 < 5/6." },
      { enonce: "Exercice 3 — Compare en justifiant :\na) 4/9 et 5/9\nb) 7/3 et 7/5",
        solution: "a) Même dénominateur : 4/9 < 5/9.\nb) Même numérateur : la fraction au dénominateur le plus petit est la plus grande, donc 7/3 > 7/5." },
      { enonce: "Exercice 4 — Compare 5/8 et 3/4.",
        solution: "3/4 = 6/8, et 6/8 > 5/8, donc 3/4 > 5/8." },
    ]),

  A("Additionner et soustraire des fractions", "Contrôle", "Fractions", 50,
    "Contrôle — Addition et soustraction de fractions dont un dénominateur est multiple de l'autre.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Effectue :\na) 7/11 + 2/11\nb) 8/5 − 3/5",
        solution: "a) 7/11 + 2/11 = 9/11\nb) 8/5 − 3/5 = 5/5 = 1" },
      { enonce: "Exercice 2 — Effectue en mettant au même dénominateur, puis simplifie si possible :\na) 5/6 + 7/18\nb) 9/4 − 5/8",
        solution: "a) 5/6 = 15/18, donc 15/18 + 7/18 = 22/18 = 11/9.\nb) 9/4 = 18/8, donc 18/8 − 5/8 = 13/8." },
      { enonce: "Exercice 3 — Effectue :\na) 1 + 3/7\nb) 2 − 5/6",
        solution: "a) 1 = 7/7, donc 7/7 + 3/7 = 10/7.\nb) 2 = 12/6, donc 12/6 − 5/6 = 7/6." },
      { enonce: "Exercice 4 — Pour une recette, Zoé verse 1/4 de litre de lait et 3/8 de litre de crème.\nQuel volume total de liquide a-t-elle versé ?",
        solution: "1/4 = 2/8, donc 2/8 + 3/8 = 5/8 de litre." },
    ]),

  /* ── CALCUL LITTÉRAL ─────────────────────────────────────── */
  A("Calcul littéral : réduire, développer, factoriser", "Contrôle", "Calcul littéral", 55,
    "Contrôle — Simplifier une écriture, réduire, développer, factoriser, tester une égalité.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Simplifie les écritures :\na) 3 × x\nb) x × x\nc) 5 × (a + 2)",
        solution: "a) 3x\nb) x²\nc) 5(a + 2)" },
      { enonce: "Exercice 2 — Réduis les expressions :\na) 4x + 7 + 3x − 2\nb) 6a − 2a + 9",
        solution: "a) 4x + 3x + 7 − 2 = 7x + 5\nb) 4a + 9" },
      { enonce: "Exercice 3 — Développe puis réduis :\na) 3(2x + 5)\nb) 7(4 − x)\nc) k(k + 3)",
        solution: "a) 6x + 15\nb) 28 − 7x\nc) k² + 3k" },
      { enonce: "Exercice 4 — Factorise :\na) 6x + 10\nb) 9a − 12",
        solution: "a) 6x + 10 = 2(3x + 5)\nb) 9a − 12 = 3(3a − 4)" },
      { enonce: "Exercice 5 — On considère l'égalité 4x + 1 = 2x + 7.\nTeste-la pour x = 3 puis pour x = 5. Est-elle vérifiée dans chaque cas ?",
        solution: "Pour x = 3 : 4×3 + 1 = 13 et 2×3 + 7 = 13 → égalité vérifiée.\nPour x = 5 : 4×5 + 1 = 21 et 2×5 + 7 = 17 → égalité non vérifiée." },
    ]),

  A("Expressions littérales et programmes de calcul", "Évaluation", "Calcul littéral", 50,
    "Évaluation — Produire une expression littérale, calculer sa valeur, utiliser un programme de calcul.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Exprime en fonction des lettres données :\na) le périmètre d'un carré de côté c\nb) le périmètre d'un rectangle de longueur L et de largeur l",
        solution: "a) P = 4c\nb) P = 2(L + l)" },
      { enonce: "Exercice 2 — Calcule la valeur de l'expression 5x − 3 :\na) pour x = 4\nb) pour x = 0,5",
        solution: "a) 5 × 4 − 3 = 17\nb) 5 × 0,5 − 3 = 2,5 − 3 = −0,5" },
      { enonce: "Exercice 3 — Programme de calcul : « Choisir un nombre ; le multiplier par 3 ; ajouter 8. »\na) Applique le programme au nombre 6.\nb) Écris l'expression obtenue si le nombre choisi est n.\nc) Applique le programme au nombre 2,5.",
        solution: "a) 6 × 3 = 18, puis 18 + 8 = 26.\nb) 3n + 8.\nc) 3 × 2,5 + 8 = 7,5 + 8 = 15,5." },
      { enonce: "Exercice 4 — Un rectangle a pour largeur x cm et pour longueur (x + 4) cm.\na) Exprime son aire en fonction de x.\nb) Calcule cette aire pour x = 3.",
        solution: "a) A = x(x + 4).\nb) A = 3 × 7 = 21 cm²." },
    ]),

  /* ── PROPORTIONNALITÉ / RATIOS / POURCENTAGES ────────────── */
  A("Proportionnalité et produit en croix", "Contrôle", "Proportionnalité", 55,
    "Contrôle — Reconnaître un tableau de proportionnalité, utiliser le produit en croix.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Le tableau donne le prix selon la masse : 3 kg → 7,50 € et 8 kg → 20 €.\nCe tableau est-il un tableau de proportionnalité ? Justifie.",
        solution: "7,50 ÷ 3 = 2,50 et 20 ÷ 8 = 2,50.\nLe coefficient est constant (2,50 €/kg) : oui, c'est un tableau de proportionnalité." },
      { enonce: "Exercice 2 — 5 briques identiques pèsent 12,5 kg.\nCombien pèsent 8 briques ? (utilise le produit en croix)",
        solution: "Masse = (8 × 12,5) ÷ 5 = 100 ÷ 5 = 20 kg." },
      { enonce: "Exercice 3 — 7 poules mangent 4,9 kg de grain par semaine.\nQuelle masse de grain faut-il prévoir chaque semaine pour 12 poules ?",
        solution: "Masse = (12 × 4,9) ÷ 7 = 58,8 ÷ 7 = 8,4 kg." },
      { enonce: "Exercice 4 — Une recette pour 6 personnes demande 450 g de farine.\nQuelle masse de farine faut-il pour 8 personnes ?",
        solution: "(8 × 450) ÷ 6 = 3 600 ÷ 6 = 600 g." },
    ]),

  A("Les ratios", "Évaluation", "Proportionnalité", 45,
    "Évaluation — Utiliser la notion de ratio pour partager une quantité.\n\nDurée : 45 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Awa et Théo se partagent 42 cartes selon le ratio 3 : 4.\nCombien de cartes reçoit chacun ?",
        solution: "3 + 4 = 7 parts, et 42 ÷ 7 = 6 cartes par part.\nAwa reçoit 3 × 6 = 18 cartes et Théo 4 × 6 = 24 cartes." },
      { enonce: "Exercice 2 — Dans une ville de 120 000 habitants, le ratio « moins de 25 ans : 25 ans ou plus » est de 1 : 3.\nCombien y a-t-il d'habitants dans chaque catégorie ?",
        solution: "1 + 3 = 4 parts, et 120 000 ÷ 4 = 30 000 par part.\nMoins de 25 ans : 30 000 ; 25 ans ou plus : 3 × 30 000 = 90 000." },
      { enonce: "Exercice 3 — Une peinture verte s'obtient en mélangeant du bleu et du jaune dans le ratio 2 : 3.\nQuelles quantités de chaque couleur faut-il pour obtenir 15 L de peinture ?",
        solution: "2 + 3 = 5 parts, et 15 ÷ 5 = 3 L par part.\nBleu : 2 × 3 = 6 L ; jaune : 3 × 3 = 9 L." },
      { enonce: "Exercice 4 — Le ratio 12 : 18 est-il égal au ratio 2 : 3 ? Justifie.",
        solution: "12 ÷ 6 = 2 et 18 ÷ 6 = 3 : en divisant les deux termes par 6, on obtient 2 : 3.\nOui, ces deux ratios sont égaux." },
    ]),

  A("Pourcentages et échelles", "Contrôle", "Proportionnalité", 50,
    "Contrôle — Calculer un pourcentage, utiliser une échelle.\n\nDurée : 50 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Calcule :\na) 35 % de 60\nb) 8 % de 250",
        solution: "a) 60 × 35 ÷ 100 = 21\nb) 250 × 8 ÷ 100 = 20" },
      { enonce: "Exercice 2 — Un collège compte 480 élèves, dont 45 % de filles.\nCombien y a-t-il de filles ? de garçons ?",
        solution: "Filles : 480 × 45 ÷ 100 = 216.\nGarçons : 480 − 216 = 264." },
      { enonce: "Exercice 3 — Une carte est à l'échelle 1/50 000.\na) Deux villages sont séparés de 3 cm sur la carte. Quelle est la distance réelle en kilomètres ?\nb) Une route mesure 6 km. Quelle longueur a-t-elle sur la carte ?",
        solution: "a) 3 × 50 000 = 150 000 cm = 1 500 m = 1,5 km.\nb) 6 km = 600 000 cm, et 600 000 ÷ 50 000 = 12 cm." },
      { enonce: "Exercice 4 — Le prix d'un jeu vidéo est de 65 €. Il augmente de 20 %.\nQuel est son nouveau prix ?",
        solution: "Augmentation : 65 × 20 ÷ 100 = 13 €.\nNouveau prix : 65 + 13 = 78 €." },
    ]),

  /* ── STATISTIQUES & PROBABILITÉS ─────────────────────────── */
  A("Effectifs, fréquences et moyennes", "Contrôle", "Statistiques", 55,
    "Contrôle — Calculer des effectifs, des fréquences, des moyennes simples et pondérées.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Voici les notes de Selma : 8 ; 12 ; 12 ; 15 ; 9 ; 16.\nCalcule sa moyenne.",
        solution: "Somme : 8 + 12 + 12 + 15 + 9 + 16 = 72.\nMoyenne : 72 ÷ 6 = 12." },
      { enonce: "Exercice 2 — Mattéo a eu 10 à un devoir de coefficient 2 et 14 à un devoir de coefficient 3.\nCalcule sa moyenne pondérée.",
        solution: "(10 × 2 + 14 × 3) ÷ (2 + 3) = (20 + 42) ÷ 5 = 62 ÷ 5 = 12,4." },
      { enonce: "Exercice 3 — Dans une classe de 25 élèves, 10 préfèrent le football.\nCalcule la fréquence de cette réponse, en écriture décimale puis en pourcentage.",
        solution: "Fréquence : 10 ÷ 25 = 0,4, soit 40 %." },
      { enonce: "Exercice 4 — Une bibliothèque de 30 livres contient 12 policiers, 9 bandes dessinées, 6 romans et 3 documentaires.\nCalcule la fréquence de chaque catégorie en pourcentage. Vérifie que le total fait 100 %.",
        solution: "Policiers : 12/30 = 40 % ; BD : 9/30 = 30 % ; romans : 6/30 = 20 % ; documentaires : 3/30 = 10 %.\nTotal : 40 + 30 + 20 + 10 = 100 %. ✓" },
    ]),

  A("Lire et représenter des données", "Évaluation", "Statistiques", 45,
    "Évaluation — Lire, interpréter et construire des diagrammes.\n\nDurée : 45 minutes — Matériel : règle et rapporteur.",
    [
      { enonce: "Exercice 1 — Un glacier note ses ventes : lundi 14, mardi 18, mercredi 9, jeudi 21, vendredi 23.\na) Construis le diagramme en bâtons.\nb) Quel jour a-t-il vendu le plus de glaces ?\nc) Combien de glaces a-t-il vendues sur les cinq jours ?",
        solution: "a) Un bâton par jour, hauteurs 14, 18, 9, 21 et 23.\nb) Vendredi (23 glaces).\nc) 14 + 18 + 9 + 21 + 23 = 85 glaces." },
      { enonce: "Exercice 2 — Sur la courbe des températures d'une journée, on lit 8 °C à 6 h (minimum) et 19 °C à 14 h (maximum).\nQuel est l'écart entre la température maximale et la température minimale ?",
        solution: "19 − 8 = 11 °C d'écart." },
      { enonce: "Exercice 3 — Dans une classe de 24 élèves, la moitié vient en bus, un quart à vélo et un quart à pied. On représente ces données par un diagramme circulaire.\na) Calcule l'effectif de chaque catégorie.\nb) Donne l'angle de chaque secteur.",
        solution: "a) Bus : 24 ÷ 2 = 12 élèves ; vélo : 24 ÷ 4 = 6 ; à pied : 6.\nb) Bus : 360 ÷ 2 = 180° ; vélo : 360 ÷ 4 = 90° ; à pied : 90°." },
    ]),

  A("Calculer une probabilité", "Évaluation", "Probabilités", 50,
    "Évaluation — Vocabulaire des expériences aléatoires, calcul de probabilités simples.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — On lance un dé équilibré à 6 faces.\na) Pourquoi dit-on que c'est une expérience aléatoire ?\nb) Combien d'issues possède cette expérience ?",
        solution: "a) On ne peut pas prévoir le résultat à l'avance, mais on connaît toutes les issues possibles.\nb) 6 issues : 1, 2, 3, 4, 5 et 6." },
      { enonce: "Exercice 2 — Toujours avec ce dé, calcule la probabilité :\na) d'obtenir 5\nb) d'obtenir un nombre pair\nc) d'obtenir au moins 5\nd) d'obtenir 7",
        solution: "a) 1/6\nb) 3/6 = 1/2 (issues 2, 4, 6)\nc) 2/6 = 1/3 (issues 5 et 6)\nd) 0 : c'est un événement impossible." },
      { enonce: "Exercice 3 — Une urne contient 3 boules rouges, 5 boules vertes et 2 boules bleues, indiscernables au toucher. On tire une boule au hasard.\nCalcule la probabilité de tirer :\na) une boule rouge\nb) une boule verte\nc) une boule qui n'est pas bleue",
        solution: "10 boules en tout.\na) 3/10\nb) 5/10 = 1/2\nc) 8/10 = 4/5" },
      { enonce: "Exercice 4 — On écrit chaque lettre du mot COLLEGE sur un papier, on mélange et on tire un papier au hasard.\nCalcule la probabilité de tirer :\na) la lettre L\nb) la lettre E\nc) une voyelle",
        solution: "Le mot COLLEGE compte 7 lettres : C, O, L, L, E, G, E.\na) 2/7\nb) 2/7\nc) voyelles O, E, E → 3/7" },
    ]),

  /* ── GÉOMÉTRIE ───────────────────────────────────────────── */
  A("Repères et coordonnées", "Évaluation", "Géométrie", 45,
    "Évaluation — Lire et placer des points dans un repère orthogonal.\n\nDurée : 45 minutes — Matériel : règle.",
    [
      { enonce: "Exercice 1 — Dans un repère orthogonal d'unité 1 carreau, place les points :\nA(2 ; 3), B(−1 ; 4), C(−3 ; −2) et D(0 ; −4).",
        solution: "A : 2 vers la droite, 3 vers le haut. B : 1 vers la gauche, 4 vers le haut.\nC : 3 vers la gauche, 2 vers le bas. D : sur l'axe des ordonnées, 4 vers le bas.\n(La première coordonnée est l'abscisse, la seconde l'ordonnée.)" },
      { enonce: "Exercice 2 — Parmi les points de l'exercice 1, lequel appartient à l'axe des ordonnées ? Pourquoi ?",
        solution: "D(0 ; −4), car son abscisse est nulle." },
      { enonce: "Exercice 3 — On donne A(1 ; 1), B(4 ; 1) et C(5 ; 3).\nQuelles sont les coordonnées du point D pour que ABCD soit un parallélogramme ?",
        solution: "Pour aller de B à A, on se déplace de 3 vers la gauche. On applique le même déplacement de C vers D :\nD(5 − 3 ; 3) = D(2 ; 3)." },
      { enonce: "Exercice 4 — Quelles sont les coordonnées du symétrique du point M(3 ; −2) par rapport à l'origine du repère ?",
        solution: "La symétrie de centre O change le signe des deux coordonnées : M'(−3 ; 2)." },
    ]),

  A("Symétrie centrale : construction et propriétés", "Contrôle", "Géométrie", 50,
    "Contrôle — Construire le symétrique d'un point ou d'une figure, utiliser les propriétés de conservation.\n\nDurée : 50 minutes — Matériel : règle et compas.",
    [
      { enonce: "Exercice 1 — Explique comment construire le symétrique A' d'un point A par rapport à un point O, puis effectue la construction.",
        solution: "On trace la demi-droite [AO) au-delà de O, puis on reporte la longueur OA de l'autre côté de O.\nA' est le point tel que O soit le milieu du segment [AA']." },
      { enonce: "Exercice 2 — Cite trois grandeurs conservées par la symétrie centrale.",
        solution: "La symétrie centrale conserve les longueurs, les mesures d'angles et les aires (elle conserve aussi l'alignement et le parallélisme)." },
      { enonce: "Exercice 3 — Un triangle ABC vérifie AB = 4 cm, BC = 5,3 cm et l'angle en B mesure 40°. On construit son symétrique A'B'C' par rapport à un point O.\nDonne, sans mesurer, la longueur A'B', la longueur B'C' et la mesure de l'angle en B'.",
        solution: "Par conservation des longueurs et des angles :\nA'B' = 4 cm ; B'C' = 5,3 cm ; l'angle en B' mesure 40°." },
      { enonce: "Exercice 4 —\na) Parmi les lettres majuscules H, N, O, S, A et T, lesquelles possèdent un centre de symétrie ?\nb) Où se trouve le centre de symétrie d'un parallélogramme ?",
        solution: "a) H, N, O et S possèdent un centre de symétrie ; A et T n'en ont pas (elles ont un axe de symétrie).\nb) Au point d'intersection de ses diagonales." },
    ]),

  A("Angles : complémentaires, supplémentaires, parallélisme", "Contrôle", "Géométrie", 55,
    "Contrôle — Angles opposés par le sommet, complémentaires, supplémentaires, alternes-internes et correspondants.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 —\na) Quelle est la mesure du complémentaire d'un angle de 37° ?\nb) Quelle est la mesure du supplémentaire d'un angle de 65° ?",
        solution: "a) 90 − 37 = 53°.\nb) 180 − 65 = 115°." },
      { enonce: "Exercice 2 — Deux droites sécantes forment un angle de 48°.\nQuelle est la mesure de l'angle opposé par le sommet ? Justifie.",
        solution: "48° : deux angles opposés par le sommet ont la même mesure." },
      { enonce: "Exercice 3 — Deux droites parallèles sont coupées par une sécante. L'un des angles formés mesure 72°.\nQuelle est la mesure de son angle alterne-interne ? de son angle correspondant ? Justifie.",
        solution: "Quand les droites sont parallèles, les angles alternes-internes sont égaux, et les angles correspondants aussi.\nAlterne-interne : 72° ; correspondant : 72°." },
      { enonce: "Exercice 4 — Deux droites sont coupées par une sécante.\na) Deux angles alternes-internes mesurent 95° et 95°. Les droites sont-elles parallèles ?\nb) Deux angles alternes-internes mesurent 80° et 85°. Les droites sont-elles parallèles ?",
        solution: "a) Oui : si deux angles alternes-internes sont égaux, alors les droites sont parallèles.\nb) Non : 80° ≠ 85°, les droites ne sont pas parallèles." },
    ]),

  A("Triangles : somme des angles et inégalité triangulaire", "Contrôle", "Géométrie", 55,
    "Contrôle — Somme des angles d'un triangle, constructibilité, triangles particuliers.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Dans un triangle, deux angles mesurent 52° et 71°.\nCalcule la mesure du troisième angle.",
        solution: "La somme des angles d'un triangle vaut 180°.\n180 − (52 + 71) = 180 − 123 = 57°." },
      { enonce: "Exercice 2 — Un triangle ABC est isocèle en A et son angle au sommet A mesure 46°.\nCalcule la mesure des deux angles à la base.",
        solution: "Les angles à la base d'un triangle isocèle sont égaux.\n(180 − 46) ÷ 2 = 134 ÷ 2 = 67° chacun." },
      { enonce: "Exercice 3 — Les triangles suivants sont-ils constructibles ? Justifie avec l'inégalité triangulaire.\na) côtés de 4 cm, 7 cm et 12 cm\nb) côtés de 5 cm, 6 cm et 9 cm",
        solution: "a) 4 + 7 = 11 < 12 : le triangle n'est pas constructible.\nb) On vérifie avec le plus grand côté : 5 + 6 = 11 > 9 : le triangle est constructible." },
      { enonce: "Exercice 4 — Quelle est la mesure de chaque angle d'un triangle équilatéral ? Justifie.",
        solution: "Les trois angles sont égaux et leur somme vaut 180°.\n180 ÷ 3 = 60° chacun." },
    ]),

  /* ── GRANDEURS & MESURES ─────────────────────────────────── */
  A("Périmètres et aires", "Contrôle", "Grandeurs et mesures", 55,
    "Contrôle — Aires des figures usuelles (triangle, parallélogramme, disque), figures complexes, conversions d'unités d'aire.\n\nDurée : 55 minutes — Calculatrice autorisée (π ≈ 3,14 ou touche π).",
    [
      { enonce: "Exercice 1 — Calcule :\na) l'aire d'un parallélogramme de base 8 cm et de hauteur 4,5 cm\nb) l'aire d'un triangle de base 9 cm et de hauteur 6 cm",
        solution: "a) A = 8 × 4,5 = 36 cm².\nb) A = (9 × 6) ÷ 2 = 27 cm²." },
      { enonce: "Exercice 2 — Un disque a pour rayon 5 cm.\nDonne la valeur exacte puis la valeur approchée au centième :\na) de son périmètre\nb) de son aire",
        solution: "a) P = 2 × π × 5 = 10π ≈ 31,42 cm.\nb) A = π × 5² = 25π ≈ 78,54 cm²." },
      { enonce: "Exercice 3 — Un jardin rectangulaire de 12 m sur 7 m contient une terrasse carrée de 3 m de côté.\nCalcule l'aire de la pelouse (jardin sans la terrasse).",
        solution: "Aire du jardin : 12 × 7 = 84 m². Aire de la terrasse : 3 × 3 = 9 m².\nAire de la pelouse : 84 − 9 = 75 m²." },
      { enonce: "Exercice 4 — Effectue les conversions :\na) 3,2 m² en cm²\nb) 45 000 m² en hectares",
        solution: "a) 1 m² = 10 000 cm², donc 3,2 m² = 32 000 cm².\nb) 1 ha = 10 000 m², donc 45 000 m² = 4,5 ha." },
    ]),

  A("Volumes : pavé, prisme et cylindre", "Contrôle", "Grandeurs et mesures", 55,
    "Contrôle — Volumes des solides usuels et conversions volume/contenance.\n\nDurée : 55 minutes — Calculatrice autorisée (π ≈ 3,14 ou touche π).",
    [
      { enonce: "Exercice 1 — Effectue les conversions :\na) 2,5 m³ en dm³ puis en litres\nb) 640 cm³ en litres",
        solution: "a) 2,5 m³ = 2 500 dm³ = 2 500 L (1 dm³ = 1 L).\nb) 640 cm³ = 0,64 dm³ = 0,64 L." },
      { enonce: "Exercice 2 — Un prisme droit a une base d'aire 14 cm² et une hauteur de 9 cm.\nCalcule son volume.",
        solution: "V = aire de la base × hauteur = 14 × 9 = 126 cm³." },
      { enonce: "Exercice 3 — Un cylindre a pour rayon 3 cm et pour hauteur 10 cm.\nDonne la valeur exacte de son volume, puis sa valeur approchée au centième.",
        solution: "V = π × 3² × 10 = 90π ≈ 282,74 cm³." },
      { enonce: "Exercice 4 — Un aquarium en forme de pavé droit mesure 25 cm × 12 cm × 8 cm.\nCalcule son volume en cm³ puis en litres.",
        solution: "V = 25 × 12 × 8 = 2 400 cm³ = 2,4 dm³ = 2,4 L." },
    ]),

  A("Convertir et calculer avec des durées", "Évaluation", "Grandeurs et mesures", 45,
    "Évaluation — Conversions de durées et calculs d'horaires.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Convertis :\na) 2 h 35 min en minutes\nb) 400 s en minutes et secondes\nc) 3,5 h en heures et minutes",
        solution: "a) 2 × 60 + 35 = 155 min.\nb) 400 = 6 × 60 + 40, soit 6 min 40 s.\nc) 3,5 h = 3 h + 0,5 × 60 min = 3 h 30 min." },
      { enonce: "Exercice 2 — Yanis affirme que 1,25 h = 1 h 25 min. A-t-il raison ? Explique.",
        solution: "Non : 0,25 h = 0,25 × 60 = 15 min.\nDonc 1,25 h = 1 h 15 min (et non 1 h 25 min)." },
      { enonce: "Exercice 3 — Un train part à 9 h 48 et le trajet dure 2 h 37.\nÀ quelle heure arrive-t-il ?",
        solution: "9 h 48 + 2 h = 11 h 48, puis 11 h 48 + 37 min = 12 h 25.\nLe train arrive à 12 h 25." },
      { enonce: "Exercice 4 — Une course comporte quatre étapes : 12 min 40 s, 15 min 25 s, 9 min 50 s et 11 min 5 s.\nCalcule la durée totale de la course.",
        solution: "Secondes : 40 + 25 + 50 + 5 = 120 s = 2 min.\nMinutes : 12 + 15 + 9 + 11 = 47 min, plus les 2 min : 49 min.\nDurée totale : 49 minutes." },
    ]),

  /* ── BILAN ───────────────────────────────────────────────── */
  A("Bilan semestriel — Révisions 5ème", "Bilan", "Toutes notions", 60,
    "Bilan semestriel — Ce sujet balaye les notions clés de l'année : relatifs, fractions, calcul littéral, proportionnalité, géométrie.\n\nDurée : 60 minutes — Calculatrice autorisée pour l'exercice 4.",
    [
      { enonce: "Exercice 1 — Relatifs\nCalcule : (−8) + (+3) − (−6).",
        solution: "(−8) + (+3) = −5, puis −5 − (−6) = −5 + 6 = +1." },
      { enonce: "Exercice 2 — Fractions\nCalcule et simplifie : 3/4 + 5/12.",
        solution: "3/4 = 9/12, donc 9/12 + 5/12 = 14/12 = 7/6." },
      { enonce: "Exercice 3 — Calcul littéral\nDéveloppe et réduis : 5(2x − 3) + 4x.",
        solution: "10x − 15 + 4x = 14x − 15." },
      { enonce: "Exercice 4 — Proportionnalité\n9 cahiers identiques coûtent 22,50 €. Combien coûtent 4 cahiers ?",
        solution: "Prix d'un cahier : 22,50 ÷ 9 = 2,50 €.\nPrix de 4 cahiers : 4 × 2,50 = 10 €." },
      { enonce: "Exercice 5 — Géométrie\nDans un triangle, deux angles mesurent 34° et 90°. Calcule le troisième angle. Que peut-on dire de ce triangle ?",
        solution: "180 − (34 + 90) = 56°.\nLe triangle possède un angle droit : il est rectangle." },
    ]),
];

/* ── insertion idempotente ── */
async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("✗ DATABASE_URL manquant. Lance : railway run node seed-annales-5e.js");
    process.exit(1);
  }
  let added = 0, skipped = 0;
  for (const a of ANNALES_5E) {
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
