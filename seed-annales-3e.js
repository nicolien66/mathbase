/* ═══════════════════════════════════════════════════════════════
   MathBase — seed-annales-3e.js
   Ajoute 20 sujets d'évaluation ORIGINAUX de 3ème à la table
   « annales » : arithmétique (nombres premiers, PGCD), puissances
   et écriture scientifique, racines carrées et équations produit,
   équations, calcul littéral et identités, fonctions, fonctions
   linéaires et affines, pourcentages et évolutions, grandeurs
   composées, statistiques, probabilités, Pythagore (réciproque et
   contraposée), Thalès et réciproque, trigonométrie, triangles
   semblables, translation et rotation, homothétie, sphère et
   boule, volumes et sections — plus un brevet blanc complet.

   Usage :
     railway run node seed-annales-3e.js
     ou : DATABASE_URL=postgres://... node seed-annales-3e.js
   Idempotent : un sujet déjà présent (titre + classe) est ignoré.
   ═══════════════════════════════════════════════════════════════ */
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const CLASSE = "3ème";
const YEAR = 2026;

const A = (title, exam, subject, duration, content, questions) =>
  ({ title, exam, year: YEAR, level: "college", classe: CLASSE, subject, duration, content, questions });

const ANNALES_3E = [

  /* ── NOMBRES & CALCULS ───────────────────────────────────── */
  A("Arithmétique : nombres premiers et fractions irréductibles", "Contrôle", "Arithmétique", 55,
    "Contrôle — Nombres premiers, décomposition en facteurs premiers, PGCD, fractions irréductibles.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Les nombres 97 et 91 sont-ils premiers ? Justifie.",
        solution: "97 : il n'est divisible ni par 2, ni par 3, ni par 5, ni par 7 (et 11² = 121 > 97) → 97 est premier.\n91 = 7 × 13 → 91 n'est pas premier." },
      { enonce: "Exercice 2 — Décompose en produit de facteurs premiers :\na) 360\nb) 84",
        solution: "a) 360 = 2³ × 3² × 5\nb) 84 = 2² × 3 × 7" },
      { enonce: "Exercice 3 — À l'aide des décompositions de l'exercice 2, détermine le PGCD de 360 et 84.",
        solution: "Facteurs communs avec le plus petit exposant : 2² et 3.\nPGCD(360 ; 84) = 2² × 3 = 12." },
      { enonce: "Exercice 4 — Rends la fraction 360/84 irréductible.",
        solution: "On divise numérateur et dénominateur par leur PGCD, 12 :\n360/84 = 30/7." },
      { enonce: "Exercice 5 — Une association dispose de 168 barres de céréales et 120 briques de jus. Elle veut préparer des sachets tous identiques, sans reste.\nQuel est le nombre maximal de sachets ? Donne la composition d'un sachet.",
        solution: "Nombre maximal de sachets = PGCD(168 ; 120) = 24 (168 = 24 × 7 et 120 = 24 × 5).\n24 sachets, contenant chacun 7 barres et 5 briques de jus." },
    ]),

  A("Puissances de 10 et écriture scientifique", "Évaluation", "Puissances", 50,
    "Évaluation — Formules sur les puissances de 10, écriture scientifique, ordres de grandeur.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Donne l'écriture décimale :\na) 10⁻⁵\nb) 4,7 × 10⁶",
        solution: "a) 0,000 01\nb) 4 700 000" },
      { enonce: "Exercice 2 — Donne le résultat sous forme d'une puissance de 10 :\na) 10³ × 10⁻⁷\nb) 10⁻² ÷ 10⁻⁶\nc) (10⁻³)²",
        solution: "a) 10³⁺⁽⁻⁷⁾ = 10⁻⁴\nb) 10⁻²⁻⁽⁻⁶⁾ = 10⁴\nc) 10⁻³ˣ² = 10⁻⁶" },
      { enonce: "Exercice 3 — Donne l'écriture scientifique :\na) 305 000 000\nb) 0,000 072",
        solution: "a) 3,05 × 10⁸\nb) 7,2 × 10⁻⁵" },
      { enonce: "Exercice 4 — Calcule et donne le résultat en écriture décimale :\n(2 × 10⁵) × (3 × 10⁻⁸)",
        solution: "2 × 3 = 6 et 10⁵ × 10⁻⁸ = 10⁻³.\nRésultat : 6 × 10⁻³ = 0,006." },
      { enonce: "Exercice 5 — La lumière parcourt 3 × 10⁸ mètres par seconde. Elle met environ 500 secondes pour aller du Soleil à la Terre.\nCalcule la distance Soleil–Terre et donne-la en écriture scientifique.",
        solution: "d = 3 × 10⁸ × 500 = 3 × 5 × 10⁸ × 10² = 15 × 10¹⁰ = 1,5 × 10¹¹ m\n(soit 150 millions de kilomètres)." },
    ]),

  A("Racines carrées et équations x² = a", "Contrôle", "Équations", 50,
    "Contrôle — Racines carrées, équations du type x² = a, équations produit nul.\n\nDurée : 50 minutes — Calculatrice autorisée pour l'exercice 1c.",
    [
      { enonce: "Exercice 1 — Calcule :\na) √49 et √81\nb) √(36/25)\nc) une valeur approchée de √2 au centième",
        solution: "a) √49 = 7 et √81 = 9.\nb) √(36/25) = 6/5 = 1,2.\nc) √2 ≈ 1,41." },
      { enonce: "Exercice 2 — Résous les équations :\na) x² = 64\nb) x² = 17\nc) x² = −9",
        solution: "a) x = 8 ou x = −8.\nb) x = √17 ou x = −√17.\nc) Aucune solution : un carré n'est jamais négatif." },
      { enonce: "Exercice 3 — Résous les équations produit nul :\na) (x − 4)(x + 7) = 0\nb) (2x − 10)(3x + 6) = 0",
        solution: "Un produit est nul si et seulement si l'un de ses facteurs est nul.\na) x − 4 = 0 ou x + 7 = 0 → x = 4 ou x = −7.\nb) 2x − 10 = 0 ou 3x + 6 = 0 → x = 5 ou x = −2." },
      { enonce: "Exercice 4 — Un terrain carré a une aire de 225 m².\nQuelle est la longueur de son côté ?",
        solution: "côté = √225 = 15 m." },
    ]),

  A("Équations du premier degré et mise en équation", "Contrôle", "Équations", 55,
    "Contrôle — Résolution d'équations, vérification d'une solution, problèmes.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Le nombre 5 est-il solution de l'équation 3x − 4 = 2x + 1 ? Justifie.",
        solution: "3×5 − 4 = 11 et 2×5 + 1 = 11.\nLes deux membres sont égaux : oui, 5 est solution." },
      { enonce: "Exercice 2 — Résous :\na) 7x − 9 = 4x + 15\nb) 4(x + 2) = x − 7",
        solution: "a) 3x = 24 → x = 8.\nb) 4x + 8 = x − 7 → 3x = −15 → x = −5." },
      { enonce: "Exercice 3 — Résous : −2x + 11 = 3.",
        solution: "−2x = 3 − 11 = −8, donc x = 4." },
      { enonce: "Exercice 4 — Dans 6 ans, Théa aura le triple de l'âge qu'elle avait il y a 10 ans.\nEn notant x son âge actuel, écris une équation puis trouve l'âge de Théa.",
        solution: "x + 6 = 3(x − 10) → x + 6 = 3x − 30 → 36 = 2x → x = 18.\nThéa a 18 ans (vérification : dans 6 ans, 24 ans = 3 × 8, et 8 = 18 − 10 ✓)." },
    ]),

  A("Calcul littéral : développer et factoriser", "Contrôle", "Calcul littéral", 55,
    "Contrôle — Développements (double distributivité, carrés remarquables), factorisations (facteur commun, a² − b²).\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Développe et réduis :\na) 4(3x − 7)\nb) (x + 6)(x − 2)\nc) (3x + 2)(2x + 5)",
        solution: "a) 12x − 28\nb) x² − 2x + 6x − 12 = x² + 4x − 12\nc) 6x² + 15x + 4x + 10 = 6x² + 19x + 10" },
      { enonce: "Exercice 2 — Développe à l'aide des identités remarquables :\na) (x + 5)²\nb) (x − 3)²\nc) (x + 4)(x − 4)",
        solution: "a) x² + 10x + 25\nb) x² − 6x + 9\nc) x² − 16" },
      { enonce: "Exercice 3 — Factorise :\na) 9x + 27\nb) x² − 25\nc) 4x² − 49",
        solution: "a) 9(x + 3)\nb) x² − 5² = (x + 5)(x − 5)\nc) (2x)² − 7² = (2x + 7)(2x − 7)" },
      { enonce: "Exercice 4 — Factorise en repérant le facteur commun :\nA = (x + 1)(2x − 3) + (x + 1)(x + 8)",
        solution: "Le facteur commun est (x + 1) :\nA = (x + 1)[(2x − 3) + (x + 8)] = (x + 1)(3x + 5)." },
    ]),

  /* ── FONCTIONS ───────────────────────────────────────────── */
  A("Notion de fonction : images et antécédents", "Évaluation", "Fonctions", 50,
    "Évaluation — Vocabulaire des fonctions, calcul d'images et recherche d'antécédents.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — On considère la fonction f définie par f(x) = 3x − 5.\nCalcule f(4), f(−2) et f(0).",
        solution: "f(4) = 12 − 5 = 7\nf(−2) = −6 − 5 = −11\nf(0) = −5" },
      { enonce: "Exercice 2 — Avec la même fonction f :\na) Quelle est l'image de 4 par f ?\nb) Détermine l'antécédent de 10 par f.",
        solution: "a) L'image de 4 est f(4) = 7.\nb) On résout 3x − 5 = 10 → 3x = 15 → x = 5. L'antécédent de 10 est 5." },
      { enonce: "Exercice 3 — Soit g la fonction définie par g(x) = x² + 1.\na) Calcule g(3).\nb) Détermine le ou les antécédents de 5 par g.",
        solution: "a) g(3) = 9 + 1 = 10.\nb) x² + 1 = 5 → x² = 4 → x = 2 ou x = −2 : 5 a deux antécédents, 2 et −2." },
      { enonce: "Exercice 4 — Un tableau de valeurs d'une fonction h donne : h(2) = 9 et h(5) = 9.\nQue peut-on dire du nombre 9 pour la fonction h ?",
        solution: "9 possède (au moins) deux antécédents par h : 2 et 5.\nDeux nombres différents peuvent avoir la même image." },
    ]),

  A("Fonctions linéaires et affines", "Contrôle", "Fonctions", 55,
    "Contrôle — Reconnaître, calculer et utiliser les fonctions linéaires et affines.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Pour chaque fonction, indique si elle est linéaire, affine (non linéaire) ou ni l'une ni l'autre :\nf(x) = −3x ; g(x) = 2x + 7 ; h(x) = 5 ; k(x) = x²",
        solution: "f est linéaire (forme ax, avec a = −3).\ng est affine (forme ax + b, avec a = 2 et b = 7).\nh est affine constante (a = 0, b = 5).\nk n'est ni linéaire ni affine (x² n'est pas de la forme ax + b)." },
      { enonce: "Exercice 2 — Soit f la fonction linéaire définie par f(x) = 4x.\na) Calcule f(2,5).\nb) Détermine l'antécédent de −12.",
        solution: "a) f(2,5) = 10.\nb) 4x = −12 → x = −3." },
      { enonce: "Exercice 3 — Soit g la fonction affine définie par g(x) = 2x − 6.\na) Calcule g(0). Comment s'appelle ce nombre pour la droite représentant g ?\nb) Résous g(x) = 0. Qu'en déduit-on pour la droite ?",
        solution: "a) g(0) = −6 : c'est l'ordonnée à l'origine.\nb) 2x − 6 = 0 → x = 3 : la droite coupe l'axe des abscisses au point d'abscisse 3." },
      { enonce: "Exercice 4 — f est une fonction linéaire telle que f(5) = 35.\nDétermine l'expression de f(x).",
        solution: "f(x) = ax avec a = 35 ÷ 5 = 7.\nDonc f(x) = 7x." },
      { enonce: "Exercice 5 — Un club de natation propose un abonnement annuel de 12 € puis 1,50 € par séance.\na) Exprime le prix payé p(x) pour x séances.\nb) Combien paie-t-on pour 10 séances ?",
        solution: "a) p(x) = 1,5x + 12 (fonction affine).\nb) p(10) = 15 + 12 = 27 €." },
    ]),

  /* ── PROPORTIONNALITÉ & GRANDEURS ────────────────────────── */
  A("Pourcentages et évolutions", "Contrôle", "Proportionnalité", 50,
    "Contrôle — Coefficient multiplicateur, évolutions successives, taux d'évolution.\n\nDurée : 50 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Donne le coefficient multiplicateur associé à :\na) une augmentation de 20 %\nb) une baisse de 35 %",
        solution: "a) 1 + 20/100 = 1,2.\nb) 1 − 35/100 = 0,65." },
      { enonce: "Exercice 2 — Un loyer de 150 € augmente de 12 %.\nCalcule le nouveau loyer en utilisant le coefficient multiplicateur.",
        solution: "150 × 1,12 = 168 €." },
      { enonce: "Exercice 3 — Le prix d'un article passe de 80 € à 92 €.\nCalcule le pourcentage d'augmentation.",
        solution: "Augmentation : 92 − 80 = 12 €.\n12 ÷ 80 = 0,15, soit une hausse de 15 %." },
      { enonce: "Exercice 4 — Un article subit une baisse de 20 % puis une baisse de 30 %.\nLa baisse totale est-elle de 50 % ? Justifie avec les coefficients multiplicateurs.",
        solution: "0,8 × 0,7 = 0,56 : le prix final vaut 56 % du prix initial.\nLa baisse totale est donc de 44 %, et non de 50 %." },
    ]),

  A("Grandeurs composées et conversions", "Évaluation", "Grandeurs et mesures", 50,
    "Évaluation — Vitesses, débits, masses volumiques : calculs et conversions d'unités.\n\nDurée : 50 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Compare les vitesses suivantes en les convertissant en km/h :\n5 m/s ; 21,6 km/h ; 1 km en 3 min",
        solution: "5 m/s = 5 × 3 600 m/h = 18 000 m/h = 18 km/h.\n1 km en 3 min → 20 km en 60 min = 20 km/h.\nClassement : 18 km/h < 20 km/h < 21,6 km/h." },
      { enonce: "Exercice 2 — Un train parcourt 150 km en 1 h 15 min.\nCalcule sa vitesse moyenne en km/h.",
        solution: "1 h 15 min = 1,25 h.\nv = 150 ÷ 1,25 = 120 km/h." },
      { enonce: "Exercice 3 — Un robinet a un débit de 12 L/min.\nQuel volume d'eau, en litres puis en m³, s'écoule en 1 heure ?",
        solution: "12 × 60 = 720 L.\n720 L = 720 dm³ = 0,72 m³." },
      { enonce: "Exercice 4 — Une pierre de 250 cm³ a une masse de 675 g.\nCalcule sa masse volumique en g/cm³ puis en kg/m³.",
        solution: "675 ÷ 250 = 2,7 g/cm³.\n2,7 g/cm³ = 2 700 kg/m³ (1 g/cm³ = 1 000 kg/m³)." },
    ]),

  /* ── STATISTIQUES & PROBABILITÉS ─────────────────────────── */
  A("Statistiques : moyenne, médiane, étendue", "Contrôle", "Statistiques", 55,
    "Contrôle — Indicateurs d'une série statistique, moyenne pondérée, regroupement en classes.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — On considère la série : 7 ; 9 ; 12 ; 12 ; 15 ; 17 ; 19.\nCalcule la moyenne, la médiane et l'étendue.",
        solution: "Moyenne : (7+9+12+12+15+17+19) ÷ 7 = 91 ÷ 7 = 13.\nMédiane : 7 valeurs ordonnées → la 4ᵉ : 12.\nÉtendue : 19 − 7 = 12." },
      { enonce: "Exercice 2 — Détermine la médiane de la série : 6 ; 8 ; 10 ; 13 ; 14 ; 18.",
        solution: "6 valeurs (nombre pair) : médiane = (10 + 13) ÷ 2 = 11,5." },
      { enonce: "Exercice 3 — Dans une classe de 25 élèves, le temps d'écran quotidien est : 1 h pour 8 élèves, 2 h pour 12 élèves et 3 h pour 5 élèves.\nCalcule le temps d'écran moyen.",
        solution: "(1×8 + 2×12 + 3×5) ÷ 25 = (8 + 24 + 15) ÷ 25 = 47 ÷ 25 = 1,88 h." },
      { enonce: "Exercice 4 — On a regroupé 20 durées de trajet (en min) en classes : [0 ; 10[ : 4 trajets ; [10 ; 20[ : 9 trajets ; [20 ; 30[ : 7 trajets.\na) Quelle est la classe la plus fréquente ?\nb) Calcule la fréquence de cette classe en pourcentage.",
        solution: "a) La classe [10 ; 20[ (9 trajets).\nb) 9 ÷ 20 = 0,45, soit 45 %." },
    ]),

  A("Calculer une probabilité", "Contrôle", "Probabilités", 55,
    "Contrôle — Probabilités simples, événement contraire, expérience à deux épreuves, lien fréquence-probabilité.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Un sac opaque contient 180 billes : 45 rouges, 60 bleues, 30 vertes et le reste de billes jaunes. On tire une bille au hasard.\na) Combien y a-t-il de billes jaunes ?\nb) Calcule p(rouge), p(jaune) et p(« ne pas tirer une verte »).",
        solution: "a) 180 − (45 + 60 + 30) = 45 billes jaunes.\nb) p(rouge) = 45/180 = 1/4 ; p(jaune) = 45/180 = 1/4 ;\np(pas verte) = 150/180 = 5/6." },
      { enonce: "Exercice 2 — On lance deux pièces équilibrées.\na) Écris toutes les issues possibles.\nb) Calcule la probabilité d'obtenir deux « face ».\nc) Calcule la probabilité d'obtenir au moins un « face ».",
        solution: "a) PP, PF, FP, FF (4 issues équiprobables).\nb) p(FF) = 1/4.\nc) p(au moins un face) = 3/4 (toutes les issues sauf PP)." },
      { enonce: "Exercice 3 — On lance 400 fois une punaise : elle retombe pointe en l'air 240 fois.\nQuelle estimation peut-on donner de la probabilité que la punaise retombe pointe en l'air ?",
        solution: "Fréquence observée : 240 ÷ 400 = 0,6.\nOn estime la probabilité à environ 0,6 (la fréquence se stabilise vers la probabilité quand on répète l'expérience)." },
      { enonce: "Exercice 4 — La probabilité qu'il pleuve demain est estimée à 0,15.\nQuelle est la probabilité qu'il ne pleuve pas ?",
        solution: "p(événement contraire) = 1 − 0,15 = 0,85." },
    ]),

  /* ── GÉOMÉTRIE ───────────────────────────────────────────── */
  A("Théorème de Pythagore : réciproque et contraposée", "Contrôle", "Géométrie", 55,
    "Contrôle — Démontrer qu'un triangle est rectangle ou non, calculer une longueur, rédiger une démonstration.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Énonce la réciproque du théorème de Pythagore, puis explique à quoi sert la contraposée.",
        solution: "Réciproque : si, dans un triangle, le carré du plus grand côté est égal à la somme des carrés des deux autres, alors le triangle est rectangle.\nContraposée : si cette égalité n'est pas vérifiée, alors le triangle n'est pas rectangle — elle sert à démontrer qu'un triangle n'est PAS rectangle." },
      { enonce: "Exercice 2 — Le triangle KLM vérifie KL = 9 cm, LM = 12 cm et KM = 15 cm.\nDémontre que KLM est rectangle et précise en quel sommet.",
        solution: "KM² = 225 ; KL² + LM² = 81 + 144 = 225.\nKM² = KL² + LM² : d'après la réciproque du théorème de Pythagore, KLM est rectangle en L." },
      { enonce: "Exercice 3 — Un triangle a des côtés de 6 cm, 7 cm et 10 cm.\nEst-il rectangle ? Rédige la démonstration.",
        solution: "10² = 100 et 6² + 7² = 36 + 49 = 85.\n100 ≠ 85 : d'après la contraposée du théorème de Pythagore, le triangle n'est pas rectangle." },
      { enonce: "Exercice 4 — Le triangle ABC est rectangle en A, avec AB = 2,1 cm et AC = 7,2 cm.\nCalcule BC.",
        solution: "BC² = 2,1² + 7,2² = 4,41 + 51,84 = 56,25.\nBC = √56,25 = 7,5 cm." },
      { enonce: "Exercice 5 — Pour vérifier qu'un angle de mur est droit, un maçon mesure 60 cm sur un côté, 80 cm sur l'autre, et trouve 100 cm entre les deux repères.\nL'angle est-il droit ? Justifie.",
        solution: "100² = 10 000 et 60² + 80² = 3 600 + 6 400 = 10 000.\nÉgalité vérifiée : d'après la réciproque du théorème de Pythagore, l'angle est droit." },
    ]),

  A("Théorème de Thalès et sa réciproque", "Contrôle", "Géométrie", 55,
    "Contrôle — Configurations de Thalès (triangle et « papillon »), calcul de longueurs, réciproque.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Les droites (AB) et (CD) sont parallèles et les droites (AC) et (BD) se coupent en O.\nOn donne OA = 4 cm, OB = 6 cm et OC = 10 cm. Calcule OD.",
        solution: "D'après le théorème de Thalès (configuration croisée) : OA/OC = OB/OD.\nOD = (OB × OC) ÷ OA = (6 × 10) ÷ 4 = 15 cm." },
      { enonce: "Exercice 2 — Dans le triangle ABC, D ∈ [AB] et E ∈ [AC] avec (DE) // (BC).\nOn donne AD = 5, DB = 3 et AE = 7,5. Calcule AC.",
        solution: "AB = AD + DB = 8.\nAD/AB = AE/AC, donc AC = (AE × AB) ÷ AD = (7,5 × 8) ÷ 5 = 12." },
      { enonce: "Exercice 3 — Les droites (AC) et (BD) se coupent en O, avec A et B d'un côté de O, C et D de l'autre.\nOn donne OA = 3, OC = 7,5, OB = 4 et OD = 10. Les droites (AB) et (CD) sont-elles parallèles ?",
        solution: "OA/OC = 3/7,5 = 0,4 et OB/OD = 4/10 = 0,4.\nLes quotients sont égaux et les points sont alignés dans le même ordre : d'après la réciproque du théorème de Thalès, (AB) // (CD)." },
      { enonce: "Exercice 4 — Au soleil, un bâton vertical de 1,2 m projette une ombre de 0,8 m. Au même moment, un arbre projette une ombre de 5,6 m.\nCalcule la hauteur de l'arbre.",
        solution: "Les rayons du soleil forment une configuration de Thalès :\nhauteur = (1,2 × 5,6) ÷ 0,8 = 8,4 m." },
    ]),

  A("Trigonométrie : sinus, cosinus, tangente", "Contrôle", "Trigonométrie", 55,
    "Contrôle — Calculer une longueur ou un angle dans un triangle rectangle avec sin, cos, tan.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Dans un triangle rectangle, rappelle les trois formules de trigonométrie pour un angle aigu.",
        solution: "sin(angle) = opposé ÷ hypoténuse\ncos(angle) = adjacent ÷ hypoténuse\ntan(angle) = opposé ÷ adjacent" },
      { enonce: "Exercice 2 — Le triangle ABC est rectangle en B. On donne AB = 5 cm et l'angle  = 50°.\nCalcule BC, arrondi au dixième.",
        solution: "BC est le côté opposé à  et AB le côté adjacent :\ntan(50°) = BC ÷ AB, donc BC = 5 × tan(50°) ≈ 6,0 cm." },
      { enonce: "Exercice 3 — Dans un triangle rectangle, le côté opposé à un angle de 35° mesure 4,2 cm.\nCalcule l'hypoténuse, arrondie au dixième.",
        solution: "sin(35°) = 4,2 ÷ hypoténuse, donc hypoténuse = 4,2 ÷ sin(35°) ≈ 7,3 cm." },
      { enonce: "Exercice 4 — Dans un triangle rectangle, le côté opposé à l'angle x̂ mesure 6 cm et le côté adjacent 8 cm.\nCalcule la mesure de x̂, arrondie au degré.",
        solution: "tan(x̂) = 6 ÷ 8 = 0,75.\nx̂ = tan⁻¹(0,75) ≈ 37°." },
      { enonce: "Exercice 5 — Une rampe d'accès s'élève de 1,5 m pour une avancée horizontale de 12 m.\nCalcule l'angle que fait la rampe avec l'horizontale, arrondi au degré.",
        solution: "tan(angle) = 1,5 ÷ 12 = 0,125.\nangle = tan⁻¹(0,125) ≈ 7°." },
    ]),

  A("Triangles semblables", "Évaluation", "Géométrie", 50,
    "Évaluation — Démontrer que deux triangles sont semblables, utiliser le rapport de similitude.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Quand dit-on que deux triangles sont semblables ?",
        solution: "Deux triangles sont semblables lorsque leurs angles sont deux à deux de même mesure.\n(Il suffit de vérifier deux paires d'angles égaux : la troisième l'est automatiquement.)" },
      { enonce: "Exercice 2 — Un premier triangle a deux angles de 35° et 80°. Un second a deux angles de 65° et 35°.\nCes triangles sont-ils semblables ? Justifie.",
        solution: "Premier triangle : troisième angle = 180 − (35 + 80) = 65°.\nSes angles sont 35°, 80°, 65° ; ceux du second sont 65°, 35° et 180 − 100 = 80°.\nMêmes mesures d'angles : les triangles sont semblables." },
      { enonce: "Exercice 3 — Un triangle a des côtés de 4 cm, 6 cm et 9 cm ; un autre des côtés de 10 cm, 15 cm et 22,5 cm.\nSont-ils semblables ? Donne le rapport de similitude.",
        solution: "10/4 = 2,5 ; 15/6 = 2,5 ; 22,5/9 = 2,5.\nLes côtés sont proportionnels : les triangles sont semblables, de rapport 2,5." },
      { enonce: "Exercice 4 — Deux triangles sont semblables de rapport 1,5. Un côté du petit triangle mesure 8 cm.\nQuelle est la longueur du côté correspondant du grand triangle ?",
        solution: "8 × 1,5 = 12 cm." },
    ]),

  A("Translation et rotation", "Évaluation", "Géométrie", 45,
    "Évaluation — Transformer une figure par translation ou rotation, propriétés de conservation.\n\nDurée : 45 minutes — Matériel : règle, compas, rapporteur.",
    [
      { enonce: "Exercice 1 — Cite les grandeurs conservées par une translation et par une rotation.",
        solution: "Toutes deux conservent les longueurs, les mesures d'angles, les aires, l'alignement et le parallélisme." },
      { enonce: "Exercice 2 — Sur un quadrillage, une translation correspond au déplacement « 4 carreaux vers la droite et 1 carreau vers le bas ».\nQuelle est l'image du point M(−2 ; 3) ?",
        solution: "M'(−2 + 4 ; 3 − 1) = M'(2 ; 2)." },
      { enonce: "Exercice 3 — Quelle est l'image du point A(3 ; 0) par la rotation de centre O (origine du repère) et d'angle 90° dans le sens inverse des aiguilles d'une montre ?",
        solution: "A'(0 ; 3) : le point tourne d'un quart de tour autour de O, la distance OA = 3 est conservée." },
      { enonce: "Exercice 4 — ABCDEF est un hexagone régulier de centre O.\na) Quelle est la mesure de l'angle AÔB ?\nb) Quelle rotation transforme le sommet A en le sommet B ?",
        solution: "a) 360 ÷ 6 = 60°.\nb) La rotation de centre O et d'angle 60° (dans le sens qui amène A sur B)." },
    ]),

  A("Homothétie", "Contrôle", "Géométrie", 50,
    "Contrôle — Reconnaître et utiliser une homothétie, effet sur les longueurs et les aires.\n\nDurée : 50 minutes — Matériel : règle.",
    [
      { enonce: "Exercice 1 — Qu'est-ce qu'une homothétie ? Que se passe-t-il selon que le rapport k est supérieur à 1, compris entre 0 et 1, ou négatif ?",
        solution: "Une homothétie est définie par un centre O et un rapport k : elle transforme chaque point M en un point M' aligné avec O et M, tel que OM' = |k| × OM.\nk > 1 : agrandissement ; 0 < k < 1 : réduction ; k < 0 : l'image est de l'autre côté du centre (et « retournée »)." },
      { enonce: "Exercice 2 — On applique l'homothétie de centre O et de rapport 2,5 au point A, avec OA = 3 cm.\nOù se trouve l'image A' ?",
        solution: "A' est sur la demi-droite [OA), avec OA' = 2,5 × 3 = 7,5 cm." },
      { enonce: "Exercice 3 — Un triangle d'aire 5 cm² est transformé par une homothétie de rapport 3.\na) Par combien les longueurs sont-elles multipliées ?\nb) Quelle est l'aire du triangle image ?",
        solution: "a) Les longueurs sont multipliées par 3.\nb) Les aires sont multipliées par 3² = 9 : aire image = 5 × 9 = 45 cm²." },
      { enonce: "Exercice 4 — B' est l'image de B par une homothétie de centre O, avec OB = 4 cm et OB' = 10 cm.\nQuel est le rapport de l'homothétie si B' appartient à [OB) ? Et si B' est de l'autre côté de O ?",
        solution: "10 ÷ 4 = 2,5.\nSi B' ∈ [OB) : k = 2,5. Si B' est de l'autre côté de O : k = −2,5." },
    ]),

  /* ── GRANDEURS & MESURES (ESPACE) ────────────────────────── */
  A("Sphère et boule", "Contrôle", "Grandeurs et mesures", 55,
    "Contrôle — Aire d'une sphère, volume d'une boule, effet d'un agrandissement.\nFormules : A = 4πr² et V = (4/3)πr³.\n\nDurée : 55 minutes — Calculatrice autorisée (touche π).",
    [
      { enonce: "Exercice 1 — Une sphère a pour rayon 6 cm.\nCalcule son aire : valeur exacte puis arrondi au centième.",
        solution: "A = 4π × 6² = 144π ≈ 452,39 cm²." },
      { enonce: "Exercice 2 — Calcule le volume de la boule de rayon 6 cm : valeur exacte puis arrondi au centième.",
        solution: "V = (4/3)π × 6³ = (4/3)π × 216 = 288π ≈ 904,78 cm³." },
      { enonce: "Exercice 3 — Calcule le volume d'une boule de rayon 3 cm (valeur exacte et arrondi au centième).",
        solution: "V = (4/3)π × 27 = 36π ≈ 113,10 cm³." },
      { enonce: "Exercice 4 — On double le rayon d'une boule.\nPar combien son aire est-elle multipliée ? Et son volume ?",
        solution: "Agrandissement de rapport 2 : l'aire est multipliée par 2² = 4 et le volume par 2³ = 8.\n(Vérification avec les exercices 2 et 3 : 288π = 8 × 36π ✓.)" },
    ]),

  A("Volumes et sections de solides", "Contrôle", "Grandeurs et mesures", 55,
    "Contrôle — Volumes usuels et assemblages, sections planes, effet d'une réduction.\n\nDurée : 55 minutes — Calculatrice autorisée (touche π).",
    [
      { enonce: "Exercice 1 — Calcule le volume d'un cylindre de rayon 5 cm et de hauteur 8 cm (valeur exacte et arrondi au centième).",
        solution: "V = π × 5² × 8 = 200π ≈ 628,32 cm³." },
      { enonce: "Exercice 2 — Un flacon est formé d'un cylindre de rayon 3 cm et de hauteur 10 cm, surmonté d'une demi-boule de même rayon.\nCalcule son volume total (valeur exacte et arrondi au centième).",
        solution: "Cylindre : π × 9 × 10 = 90π.\nDemi-boule : (1/2) × (4/3)π × 27 = 18π.\nTotal : 90π + 18π = 108π ≈ 339,29 cm³." },
      { enonce: "Exercice 3 — Donne la nature de la section :\na) d'un cylindre par un plan parallèle à ses bases\nb) d'un cylindre par un plan parallèle à son axe\nc) d'une sphère par un plan",
        solution: "a) Un disque de même rayon que les bases.\nb) Un rectangle.\nc) Un cercle (un « grand cercle » si le plan passe par le centre)." },
      { enonce: "Exercice 4 — Un cône de hauteur 12 cm est posé pointe en bas. On le remplit d'eau jusqu'à mi-hauteur.\nQuelle fraction du volume du cône l'eau occupe-t-elle ? Justifie.",
        solution: "Le volume d'eau est un cône réduit de rapport 1/2.\nLes volumes sont multipliés par (1/2)³ = 1/8 : l'eau occupe 1/8 du volume total." },
    ]),

  /* ── BREVET BLANC ────────────────────────────────────────── */
  A("Brevet blanc de mathématiques", "Brevet", "Toutes notions", 120,
    "Brevet blanc — Ce sujet comporte 7 exercices indépendants qui peuvent être traités dans l'ordre de son choix.\nLa qualité de la rédaction, la clarté des raisonnements et le soin apporté aux justifications seront pris en compte.\n\nDurée : 2 heures — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 (4 points) — Questionnaire rapide\na) Donne l'écriture scientifique de 0,000 47.\nb) Calcule √64.\nc) Donne le résultat de 10³ × 10⁴ sous forme d'une puissance de 10.",
        solution: "a) 4,7 × 10⁻⁴\nb) 8\nc) 10⁷" },
      { enonce: "Exercice 2 (3 points) — Arithmétique\na) Décompose 126 et 90 en produits de facteurs premiers.\nb) Rends la fraction 126/90 irréductible.",
        solution: "a) 126 = 2 × 3² × 7 et 90 = 2 × 3² × 5.\nb) PGCD = 2 × 3² = 18, donc 126/90 = 7/5." },
      { enonce: "Exercice 3 (3 points) — Fonctions\nOn considère la fonction f définie par f(x) = 2x − 3.\na) Calcule f(5).\nb) Détermine l'antécédent de 9 par f.",
        solution: "a) f(5) = 10 − 3 = 7.\nb) 2x − 3 = 9 → 2x = 12 → x = 6." },
      { enonce: "Exercice 4 (4 points) — Géométrie : Pythagore et trigonométrie\nLe triangle ABC est rectangle en A, avec AB = 8 cm et AC = 15 cm.\na) Calcule BC.\nb) Calcule la mesure de l'angle B̂, arrondie au degré.",
        solution: "a) BC² = 64 + 225 = 289, donc BC = √289 = 17 cm.\nb) tan(B̂) = AC ÷ AB = 15 ÷ 8 = 1,875, donc B̂ = tan⁻¹(1,875) ≈ 62°." },
      { enonce: "Exercice 5 (3 points) — Théorème de Thalès\nDans le triangle ABC, D ∈ [AB] et E ∈ [AC] avec (DE) // (BC).\nOn donne AD = 6, AB = 9 et AE = 8. Calcule AC.",
        solution: "AD/AB = AE/AC, donc AC = (8 × 9) ÷ 6 = 12." },
      { enonce: "Exercice 6 (1,5 point) — Probabilités\nUn sac contient 5 boules rouges, 3 noires et 2 blanches, indiscernables au toucher. On tire une boule au hasard.\nCalcule la probabilité de tirer une boule noire.",
        solution: "10 boules en tout : p(noire) = 3/10." },
      { enonce: "Exercice 7 (1,5 point) — Pourcentages\nUn blouson coûte 240 €. Il est soldé à −25 %.\nCalcule son prix soldé.",
        solution: "240 × 0,75 = 180 €." },
    ]),
];

/* ── insertion idempotente ── */
async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("✗ DATABASE_URL manquant. Lance : railway run node seed-annales-3e.js");
    process.exit(1);
  }
  let added = 0, skipped = 0;
  for (const a of ANNALES_3E) {
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
