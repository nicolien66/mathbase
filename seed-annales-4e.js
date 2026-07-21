/* ═══════════════════════════════════════════════════════════════
   MathBase — seed-annales-4e.js
   Ajoute 22 sujets d'évaluation ORIGINAUX de 4ème à la table
   « annales » : relatifs (4 opérations), fractions (4 opérations
   et priorités), puissances et écriture scientifique, multiples
   et diviseurs, calcul littéral (double distributivité, factori-
   sation), équations, Pythagore, Thalès, cosinus, transformations,
   pyramides et cônes, proportionnalité et vitesse, statistiques
   (médiane, étendue), probabilités, bilan.

   Usage :
     railway run node seed-annales-4e.js
     ou : DATABASE_URL=postgres://... node seed-annales-4e.js
   Idempotent : un sujet déjà présent (titre + classe) est ignoré.
   ═══════════════════════════════════════════════════════════════ */
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const CLASSE = "4ème";
const YEAR = 2026;

const A = (title, exam, subject, duration, content, questions) =>
  ({ title, exam, year: YEAR, level: "college", classe: CLASSE, subject, duration, content, questions });

const ANNALES_4E = [

  /* ── NOMBRES RELATIFS ────────────────────────────────────── */
  A("Addition et soustraction de nombres relatifs", "Évaluation", "Nombres relatifs", 50,
    "Évaluation — Sommes, différences et suites d'opérations avec des nombres relatifs.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Calcule :\nA = (−7) + (−12)\nB = (+15) + (−9)\nC = (−4,8) + (+2,3)",
        solution: "A = −19\nB = +6\nC = −2,5" },
      { enonce: "Exercice 2 — Simplifie l'écriture puis calcule :\na) (+8) − (−5)\nb) (−6) − (+11)",
        solution: "a) 8 + 5 = 13\nb) −6 − 11 = −17" },
      { enonce: "Exercice 3 — Calcule la suite d'opérations :\nD = −5 + 12 − 8 + 3 − 7",
        solution: "−5 + 12 = 7 ; 7 − 8 = −1 ; −1 + 3 = 2 ; 2 − 7 = −5.\nD = −5." },
      { enonce: "Exercice 4 — À l'aube, le thermomètre indiquait −6 °C. En milieu d'après-midi, il indique 9 °C.\nDe combien de degrés la température a-t-elle varié ?",
        solution: "Variation = 9 − (−6) = 9 + 6 = 15.\nLa température a augmenté de 15 °C." },
    ]),

  A("Multiplication et division de nombres relatifs", "Contrôle", "Nombres relatifs", 50,
    "Contrôle — Règle des signes, produits, quotients et priorités opératoires avec des relatifs.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Calcule :\na) (−5) × (−8)\nb) (−7) × 6\nc) 9 × (−4)\nd) (−3) × (−2) × (−5)",
        solution: "a) +40 (deux facteurs négatifs)\nb) −42\nc) −36\nd) −30 (trois facteurs négatifs : le produit est négatif)" },
      { enonce: "Exercice 2 — Calcule les quotients :\na) (−56) ÷ 7\nb) (−72) ÷ (−9)\nc) 45 ÷ (−5)",
        solution: "a) −8\nb) +8\nc) −9" },
      { enonce: "Exercice 3 — Sans calculer, donne le signe du produit (−2) × (−3) × (−4) × (−5), puis calcule-le.",
        solution: "Quatre facteurs négatifs : nombre pair de signes « − », le produit est positif.\n(−2)×(−3) = 6 ; (−4)×(−5) = 20 ; 6 × 20 = 120." },
      { enonce: "Exercice 4 — Calcule en respectant les priorités :\nE = −4 + 3 × (−6)\nF = (−20) ÷ (−4) − 7",
        solution: "E = −4 + (−18) = −22\nF = 5 − 7 = −2" },
    ]),

  /* ── FRACTIONS ───────────────────────────────────────────── */
  A("Fractions égales et simplification", "Évaluation", "Fractions", 45,
    "Évaluation — Simplifier une fraction, reconnaître des fractions égales, produit en croix.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Simplifie au maximum :\na) 24/36\nb) 45/60\nc) 84/126",
        solution: "a) 24/36 = 2/3 (division par 12)\nb) 45/60 = 3/4 (division par 15)\nc) 84/126 = 2/3 (division par 42)" },
      { enonce: "Exercice 2 — Complète chaque égalité :\na) 3/7 = …/28\nb) 5/9 = 35/…",
        solution: "a) 28 = 7 × 4, donc 3/7 = 12/28.\nb) 35 = 5 × 7, donc 5/9 = 35/63." },
      { enonce: "Exercice 3 — À l'aide du produit en croix, dis si les fractions sont égales :\na) 4/6 et 10/15\nb) 5/8 et 7/11",
        solution: "a) 4 × 15 = 60 et 6 × 10 = 60 : produits en croix égaux, les fractions sont égales.\nb) 5 × 11 = 55 et 8 × 7 = 56 : produits différents, les fractions ne sont pas égales." },
      { enonce: "Exercice 4 — Donne la fraction irréductible égale à 90/126.",
        solution: "90 = 18 × 5 et 126 = 18 × 7.\n90/126 = 5/7, qui est irréductible." },
    ]),

  A("Addition et soustraction de fractions", "Contrôle", "Fractions", 55,
    "Contrôle — Sommes et différences de fractions de dénominateurs quelconques, avec des relatifs.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Trouve le plus petit multiple commun :\na) des nombres 4 et 6\nb) des nombres 5 et 10",
        solution: "a) 12 (multiples de 4 : 4, 8, 12… ; multiples de 6 : 6, 12…)\nb) 10." },
      { enonce: "Exercice 2 — Calcule :\nA = 3/4 + 5/6\nB = 7/10 − 2/15",
        solution: "A : dénominateur commun 12 → 9/12 + 10/12 = 19/12.\nB : dénominateur commun 30 → 21/30 − 4/30 = 17/30." },
      { enonce: "Exercice 3 — Calcule et simplifie :\nC = −2/3 + 1/6",
        solution: "−2/3 = −4/6, donc C = −4/6 + 1/6 = −3/6 = −1/2." },
      { enonce: "Exercice 4 — Malik a lu 2/5 de son roman lundi et 1/3 mardi.\nQuelle fraction du roman a-t-il lue ? Quelle fraction lui reste-t-il à lire ?",
        solution: "Dénominateur commun 15 : 6/15 + 5/15 = 11/15 du roman lu.\nIl reste 15/15 − 11/15 = 4/15 à lire." },
    ]),

  A("Multiplication et division de fractions", "Contrôle", "Fractions", 55,
    "Contrôle — Produits, inverses et quotients de fractions, avec des relatifs.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Sans calculer, donne le signe de chaque produit :\na) (−3/4) × (5/7)\nb) (−2/9) × (−3/5)",
        solution: "a) Négatif (un seul facteur négatif).\nb) Positif (deux facteurs négatifs)." },
      { enonce: "Exercice 2 — Calcule et simplifie :\na) (2/3) × (5/7)\nb) (−3/8) × (4/9)",
        solution: "a) 10/21.\nb) −12/72 = −1/6." },
      { enonce: "Exercice 3 — Donne l'inverse de chaque nombre :\na) 5\nb) 3/7\nc) −2",
        solution: "a) 1/5\nb) 7/3\nc) −1/2" },
      { enonce: "Exercice 4 — Calcule (diviser, c'est multiplier par l'inverse) :\na) (4/5) ÷ (2/3)\nb) (−5/6) ÷ (10/9)",
        solution: "a) (4/5) × (3/2) = 12/10 = 6/5.\nb) (−5/6) × (9/10) = −45/60 = −3/4." },
      { enonce: "Exercice 5 — Un pichet contient 3/4 de litre de jus. On le sert dans des verres de 1/8 de litre.\nCombien de verres peut-on remplir ?",
        solution: "(3/4) ÷ (1/8) = (3/4) × 8 = 24/4 = 6.\nOn peut remplir 6 verres." },
    ]),

  A("Fractions : priorités et calculs enchaînés", "Évaluation", "Fractions", 55,
    "Évaluation — Enchaîner les quatre opérations sur les fractions en respectant les priorités.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Calcule :\nG = 1/2 + 3/4 × 2/3",
        solution: "Priorité à la multiplication : 3/4 × 2/3 = 6/12 = 1/2.\nG = 1/2 + 1/2 = 1." },
      { enonce: "Exercice 2 — Calcule :\nH = (2/5 + 1/5) × 5/9",
        solution: "Parenthèses d'abord : 2/5 + 1/5 = 3/5.\nH = (3/5) × (5/9) = 15/45 = 1/3." },
      { enonce: "Exercice 3 — Calcule :\nK = 7/6 − 2/3 ÷ 4",
        solution: "Priorité à la division : (2/3) ÷ 4 = 2/12 = 1/6.\nK = 7/6 − 1/6 = 6/6 = 1." },
      { enonce: "Exercice 4 — Dans un club, les 3/4 des 2/3 des adhérents participent au tournoi.\nQuelle fraction des adhérents participe au tournoi ?",
        solution: "(3/4) × (2/3) = 6/12 = 1/2.\nLa moitié des adhérents participe au tournoi." },
    ]),

  /* ── PUISSANCES ──────────────────────────────────────────── */
  A("Puissances d'un nombre relatif", "Contrôle", "Puissances", 50,
    "Contrôle — Puissances d'exposant positif ou négatif, signe d'une puissance, priorités.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Calcule :\na) 2⁵\nb) (−3)⁴\nc) (−2)³\nd) 7¹",
        solution: "a) 32\nb) 81 (exposant pair : résultat positif)\nc) −8 (exposant impair : résultat négatif)\nd) 7" },
      { enonce: "Exercice 2 — Sans calculer, donne le signe de :\na) (−4)⁶\nb) (−9)⁵",
        solution: "a) Positif : l'exposant 6 est pair.\nb) Négatif : l'exposant 5 est impair." },
      { enonce: "Exercice 3 — Donne l'écriture décimale :\na) 2⁻³\nb) 10⁻²",
        solution: "a) 2⁻³ = 1/2³ = 1/8 = 0,125.\nb) 10⁻² = 1/100 = 0,01." },
      { enonce: "Exercice 4 — Explique la différence entre (−5)² et −5², puis calcule chacun.",
        solution: "(−5)² = (−5) × (−5) = 25.\n−5² = −(5 × 5) = −25 : sans parenthèses, la puissance ne porte que sur 5." },
      { enonce: "Exercice 5 — Calcule en respectant les priorités :\na) 3 × 2⁴\nb) 2³ + 4²",
        solution: "a) Les puissances sont prioritaires : 3 × 16 = 48.\nb) 8 + 16 = 24." },
    ]),

  A("Puissances de 10 et écriture scientifique", "Contrôle", "Puissances", 50,
    "Contrôle — Calculs avec les puissances de 10, écriture scientifique d'un nombre.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Donne l'écriture décimale :\na) 10⁴\nb) 10⁻³\nc) 3,2 × 10⁵\nd) 7,5 × 10⁻⁴",
        solution: "a) 10 000\nb) 0,001\nc) 320 000\nd) 0,000 75" },
      { enonce: "Exercice 2 — Donne le résultat sous la forme d'une puissance de 10 :\na) 10⁵ × 10³\nb) 10⁷ ÷ 10⁴\nc) (10²)³",
        solution: "a) 10⁵⁺³ = 10⁸\nb) 10⁷⁻⁴ = 10³\nc) 10²ˣ³ = 10⁶" },
      { enonce: "Exercice 3 — Donne l'écriture scientifique :\na) 45 800 000\nb) 0,000 62",
        solution: "a) 4,58 × 10⁷\nb) 6,2 × 10⁻⁴\n(Écriture a × 10ⁿ avec 1 ≤ a < 10.)" },
      { enonce: "Exercice 4 — Range dans l'ordre croissant :\n9,1 × 10⁵ ; 2,3 × 10⁶ ; 8,7 × 10⁵",
        solution: "Même exposant pour 8,7 × 10⁵ et 9,1 × 10⁵ : on compare 8,7 < 9,1.\n8,7 × 10⁵ < 9,1 × 10⁵ < 2,3 × 10⁶ (exposant 6 > exposant 5)." },
    ]),

  /* ── MULTIPLES & DIVISEURS ───────────────────────────────── */
  A("Multiples et diviseurs d'un nombre", "Évaluation", "Nombres et calculs", 45,
    "Évaluation — Multiples, diviseurs, critères de divisibilité, problème de partage.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Vrai ou faux ? Justifie.\na) 8 divise 96.\nb) 7 est un multiple de 63.\nc) 132 est divisible par 6.",
        solution: "a) Vrai : 96 = 8 × 12.\nb) Faux : c'est 63 qui est un multiple de 7 (63 = 7 × 9).\nc) Vrai : 132 est pair et 1 + 3 + 2 = 6 est divisible par 3, donc 132 est divisible par 6." },
      { enonce: "Exercice 2 — Donne six multiples différents de 15.",
        solution: "Par exemple : 15 ; 30 ; 45 ; 60 ; 75 ; 90 (et 0 est aussi un multiple de 15)." },
      { enonce: "Exercice 3 — Écris la liste de tous les diviseurs de 28.",
        solution: "1 ; 2 ; 4 ; 7 ; 14 ; 28 (paires : 1×28, 2×14, 4×7)." },
      { enonce: "Exercice 4 — Un fleuriste dispose de 84 roses et 63 tulipes. Il veut composer des bouquets tous identiques, sans qu'il reste de fleurs.\nQuel est le plus grand nombre de bouquets possible ? Donne alors la composition d'un bouquet.",
        solution: "Le plus grand diviseur commun de 84 et 63 est 21 (84 = 21 × 4 et 63 = 21 × 3).\n21 bouquets, chacun composé de 4 roses et 3 tulipes." },
    ]),

  /* ── CALCUL LITTÉRAL ─────────────────────────────────────── */
  A("Calcul littéral : réduire et développer", "Contrôle", "Calcul littéral", 55,
    "Contrôle — Réduction, distributivité simple et double, suppression de parenthèses.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Réduis :\na) 7x + 3 − 2x + 8\nb) 4x² + 3x − x² + 5x",
        solution: "a) 5x + 11\nb) 3x² + 8x" },
      { enonce: "Exercice 2 — Développe puis réduis (distributivité simple) :\na) 5(3x − 4)\nb) −2(4x + 7)\nc) 3x(2x − 5)",
        solution: "a) 15x − 20\nb) −8x − 14\nc) 6x² − 15x" },
      { enonce: "Exercice 3 — Développe puis réduis (double distributivité) :\na) (x + 3)(x + 5)\nb) (2x − 1)(x + 4)",
        solution: "a) x² + 5x + 3x + 15 = x² + 8x + 15\nb) 2x² + 8x − x − 4 = 2x² + 7x − 4" },
      { enonce: "Exercice 4 — Supprime les parenthèses puis réduis :\nA = (5x + 2) − (3x − 7)",
        solution: "A = 5x + 2 − 3x + 7 = 2x + 9\n(Un signe « − » devant une parenthèse change le signe de chaque terme.)" },
    ]),

  A("Factoriser une expression littérale", "Évaluation", "Calcul littéral", 50,
    "Évaluation — Repérer un facteur commun et factoriser.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Pour chaque expression, indique le facteur commun aux deux termes :\na) 6x + 6y\nb) 5x² + 3x",
        solution: "a) Le facteur commun est 6.\nb) Le facteur commun est x (5x² = x × 5x et 3x = x × 3)." },
      { enonce: "Exercice 2 — Factorise :\na) 7x + 21\nb) 12x − 18\nc) x² + 9x",
        solution: "a) 7(x + 3)\nb) 6(2x − 3) (6 est le plus grand facteur commun)\nc) x(x + 9)" },
      { enonce: "Exercice 3 — Factorise l'expression :\nB = 3(x + 2) + x(x + 2)",
        solution: "Le facteur commun est (x + 2) :\nB = (x + 2)(3 + x)." },
      { enonce: "Exercice 4 — Vérifie ta factorisation de 12x − 18 en développant le résultat.",
        solution: "6(2x − 3) = 6 × 2x − 6 × 3 = 12x − 18. ✓" },
    ]),

  A("Tester une égalité", "Évaluation", "Équations", 45,
    "Évaluation — Tester si une égalité est vérifiée pour une valeur donnée.\n\nDurée : 45 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — On considère l'égalité 5x − 2 = 3x + 8.\nEst-elle vérifiée pour x = 5 ? pour x = 2 ?",
        solution: "Pour x = 5 : 5×5 − 2 = 23 et 3×5 + 8 = 23 → vérifiée.\nPour x = 2 : 10 − 2 = 8 et 6 + 8 = 14 → non vérifiée." },
      { enonce: "Exercice 2 — L'égalité x² = 4x − 4 est-elle vérifiée pour x = 2 ? pour x = 3 ?",
        solution: "Pour x = 2 : 2² = 4 et 4×2 − 4 = 4 → vérifiée.\nPour x = 3 : 9 et 12 − 4 = 8 → non vérifiée." },
      { enonce: "Exercice 3 — Un rectangle a pour largeur x cm et pour longueur (x + 5) cm. Son périmètre est 38 cm.\nMontre que x = 7 convient.",
        solution: "Périmètre = 2(x + x + 5) = 2(2x + 5).\nPour x = 7 : 2 × (14 + 5) = 2 × 19 = 38 cm. ✓" },
    ]),

  A("Résoudre une équation du premier degré", "Contrôle", "Équations", 55,
    "Contrôle — Résolution d'équations et mise en équation d'un problème.\n\nDurée : 55 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Résous :\na) x + 9 = 4\nb) 7x = −42\nc) x/5 = 3",
        solution: "a) x = 4 − 9 = −5\nb) x = −42 ÷ 7 = −6\nc) x = 3 × 5 = 15" },
      { enonce: "Exercice 2 — Résous l'équation 4x − 5 = 2x + 9 puis vérifie ta solution.",
        solution: "4x − 2x = 9 + 5 → 2x = 14 → x = 7.\nVérification : 4×7 − 5 = 23 et 2×7 + 9 = 23. ✓" },
      { enonce: "Exercice 3 — Résous : 3(x − 2) = x + 10.",
        solution: "3x − 6 = x + 10 → 3x − x = 10 + 6 → 2x = 16 → x = 8." },
      { enonce: "Exercice 4 — Lina possède x billes. Sami en possède le double de Lina, et Noé en possède 5 de plus que Lina. À eux trois, ils ont 65 billes.\nÉcris une équation puis trouve le nombre de billes de chacun.",
        solution: "x + 2x + (x + 5) = 65 → 4x + 5 = 65 → 4x = 60 → x = 15.\nLina a 15 billes, Sami 30 et Noé 20 (15 + 30 + 20 = 65 ✓)." },
    ]),

  /* ── GÉOMÉTRIE ───────────────────────────────────────────── */
  A("Théorème de Pythagore", "Contrôle", "Géométrie", 55,
    "Contrôle — Calculer une longueur avec le théorème de Pythagore, démontrer qu'un triangle est rectangle avec sa réciproque.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Le triangle ABC est rectangle en A, avec AB = 6 cm et AC = 8 cm.\nCalcule BC.",
        solution: "D'après le théorème de Pythagore : BC² = AB² + AC² = 36 + 64 = 100.\nBC = √100 = 10 cm." },
      { enonce: "Exercice 2 — Le triangle RST est rectangle en S. Son hypoténuse RT mesure 13 cm et RS = 5 cm.\nCalcule ST.",
        solution: "RT² = RS² + ST², donc ST² = 13² − 5² = 169 − 25 = 144.\nST = √144 = 12 cm." },
      { enonce: "Exercice 3 — Les triangles suivants sont-ils rectangles ? Justifie avec la réciproque du théorème de Pythagore.\na) côtés de 20 cm, 21 cm et 29 cm\nb) côtés de 7 cm, 9 cm et 11 cm",
        solution: "a) 29² = 841 et 20² + 21² = 400 + 441 = 841. Égalité vérifiée : le triangle est rectangle (hypoténuse de 29 cm).\nb) 11² = 121 et 7² + 9² = 49 + 81 = 130. 121 ≠ 130 : le triangle n'est pas rectangle." },
      { enonce: "Exercice 4 — Une échelle de 6,5 m est appuyée contre un mur vertical. Son pied est posé à 2,5 m du mur.\nÀ quelle hauteur du sol l'échelle touche-t-elle le mur ?",
        solution: "Le mur, le sol et l'échelle forment un triangle rectangle.\nh² = 6,5² − 2,5² = 42,25 − 6,25 = 36, donc h = √36 = 6 m." },
    ]),

  A("Théorème de Thalès", "Contrôle", "Géométrie", 55,
    "Contrôle — Configuration de Thalès dans un triangle : calcul de longueurs et parallélisme.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Dans le triangle ABC, D est un point de [AB] et E un point de [AC] tels que (DE) soit parallèle à (BC).\nOn donne AD = 3 cm, AB = 7,5 cm et AC = 10 cm. Calcule AE.",
        solution: "D'après le théorème de Thalès : AD/AB = AE/AC.\nAE = (AD × AC) ÷ AB = (3 × 10) ÷ 7,5 = 4 cm." },
      { enonce: "Exercice 2 — Avec la même figure, on donne BC = 6 cm.\nCalcule DE.",
        solution: "AD/AB = DE/BC, donc DE = (3 × 6) ÷ 7,5 = 18 ÷ 7,5 = 2,4 cm." },
      { enonce: "Exercice 3 — Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec AM = 4, AB = 10, AN = 6 et AC = 15.\nLes droites (MN) et (BC) sont-elles parallèles ? Justifie.",
        solution: "AM/AB = 4/10 = 0,4 et AN/AC = 6/15 = 0,4.\nLes quotients sont égaux et les points sont alignés dans le même ordre : d'après la réciproque du théorème de Thalès, (MN) // (BC)." },
      { enonce: "Exercice 4 — Même configuration avec AM/AB = 5/12 et AN/AC = 4/9.\nLes droites (MN) et (BC) sont-elles parallèles ?",
        solution: "5/12 ≈ 0,417 et 4/9 ≈ 0,444 : les quotients sont différents (5 × 9 = 45 ≠ 12 × 4 = 48).\nLes droites ne sont pas parallèles." },
    ]),

  A("Cosinus d'un angle aigu", "Évaluation", "Géométrie", 50,
    "Évaluation — Utiliser le cosinus dans un triangle rectangle : calculer un angle ou une longueur.\n\nDurée : 50 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Dans un triangle rectangle, rappelle la définition du cosinus d'un angle aigu.",
        solution: "cos(angle) = (côté adjacent à l'angle) ÷ (hypoténuse)." },
      { enonce: "Exercice 2 — Le triangle ABC est rectangle en B, avec AB = 4,8 cm et AC = 6 cm.\nCalcule cos(Â), puis la mesure de l'angle  arrondie au degré.",
        solution: "AC est l'hypoténuse et AB le côté adjacent à Â.\ncos(Â) = 4,8 ÷ 6 = 0,8, donc  = arccos(0,8) ≈ 37°." },
      { enonce: "Exercice 3 — Dans un triangle rectangle, l'hypoténuse mesure 10 cm et un angle aigu mesure 60°.\nCalcule la longueur du côté adjacent à cet angle.",
        solution: "adjacent = hypoténuse × cos(60°) = 10 × 0,5 = 5 cm." },
      { enonce: "Exercice 4 — Dans un triangle rectangle, le côté adjacent à un angle de 35° mesure 7 cm.\nCalcule la longueur de l'hypoténuse, arrondie au dixième.",
        solution: "hypoténuse = adjacent ÷ cos(35°) = 7 ÷ cos(35°) ≈ 7 ÷ 0,819 ≈ 8,5 cm." },
    ]),

  A("Translation, rotation et triangles égaux", "Évaluation", "Géométrie", 50,
    "Évaluation — Transformations du plan et triangles égaux (isométriques).\n\nDurée : 50 minutes — Matériel : règle, compas, rapporteur.",
    [
      { enonce: "Exercice 1 — Cite trois grandeurs conservées par une translation.\nQue peut-on dire de l'image d'une droite par une translation ?",
        solution: "La translation conserve les longueurs, les mesures d'angles et les aires (ainsi que l'alignement et le parallélisme).\nL'image d'une droite est une droite qui lui est parallèle." },
      { enonce: "Exercice 2 — Sur un quadrillage, la translation qui transforme A en B correspond au déplacement « 3 carreaux vers la droite et 2 carreaux vers le haut ».\nQuelle est l'image du point M(1 ; 1) par cette translation ?",
        solution: "M'(1 + 3 ; 1 + 2) = M'(4 ; 3)." },
      { enonce: "Exercice 3 — On applique à un segment [AB] de 5 cm une rotation de centre O et d'angle 90°.\nQuelle est la longueur de son image [A'B'] ? Pourquoi ?",
        solution: "A'B' = 5 cm : la rotation conserve les longueurs." },
      { enonce: "Exercice 4 — Deux triangles ont un côté de même longueur (5 cm) compris entre deux angles respectivement égaux (40° et 60°).\nQue peut-on en conclure ? Justifie.",
        solution: "Ils sont égaux (isométriques) : deux triangles qui ont un côté égal compris entre deux angles égaux sont égaux.\nLeurs autres côtés et leur troisième angle (80°) sont donc deux à deux égaux." },
    ]),

  A("Pyramides et cônes : volumes", "Contrôle", "Grandeurs et mesures", 55,
    "Contrôle — Volume de la pyramide et du cône de révolution.\nFormule : V = (1/3) × aire de la base × hauteur.\n\nDurée : 55 minutes — Calculatrice autorisée (π ≈ 3,14 ou touche π).",
    [
      { enonce: "Exercice 1 — Calcule le volume d'une pyramide dont la base est un carré de côté 9 cm et dont la hauteur mesure 10 cm.",
        solution: "Aire de la base : 9 × 9 = 81 cm².\nV = (1/3) × 81 × 10 = 270 cm³." },
      { enonce: "Exercice 2 — Calcule le volume d'un cône de révolution de rayon 4 cm et de hauteur 9 cm.\nDonne la valeur exacte puis l'arrondi au centième.",
        solution: "Aire de la base : π × 4² = 16π cm².\nV = (1/3) × 16π × 9 = 48π ≈ 150,80 cm³." },
      { enonce: "Exercice 3 — Une pyramide SABCD a pour base un rectangle de 5 cm sur 7 cm et pour hauteur 12 cm.\nCalcule son volume.",
        solution: "Aire de la base : 5 × 7 = 35 cm².\nV = (1/3) × 35 × 12 = 140 cm³." },
      { enonce: "Exercice 4 — Un cornet de glace a la forme d'un cône de rayon 3 cm et de hauteur 10 cm. On veut y verser 100 mL de glace fondue.\nLe cornet peut-il tout contenir ? Justifie. (1 cm³ = 1 mL)",
        solution: "V = (1/3) × π × 3² × 10 = 30π ≈ 94,25 cm³, soit environ 94 mL.\n94 mL < 100 mL : le cornet ne peut pas tout contenir, il déborderait." },
    ]),

  /* ── PROPORTIONNALITÉ ────────────────────────────────────── */
  A("Proportionnalité : vitesse, pourcentages, agrandissement", "Contrôle", "Proportionnalité", 55,
    "Contrôle — Vitesse moyenne, pourcentages, agrandissement-réduction.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — Une voiture parcourt 180 km en 2 h 30 min.\nCalcule sa vitesse moyenne en km/h.",
        solution: "2 h 30 min = 2,5 h.\nv = 180 ÷ 2,5 = 72 km/h." },
      { enonce: "Exercice 2 — Un train roule à la vitesse moyenne de 90 km/h pendant 40 minutes.\nQuelle distance parcourt-il ?",
        solution: "40 min = 40/60 h = 2/3 h.\nd = 90 × 2/3 = 60 km." },
      { enonce: "Exercice 3 — Un manteau coûte 84 €. Le magasin applique une remise de 25 %.\nCalcule le montant de la remise puis le prix soldé.",
        solution: "Remise : 84 × 25 ÷ 100 = 21 €.\nPrix soldé : 84 − 21 = 63 €." },
      { enonce: "Exercice 4 — Un rectangle de 4 cm sur 7 cm est agrandi avec le coefficient 2,5.\na) Donne les dimensions du rectangle agrandi.\nb) Par combien le périmètre est-il multiplié ? Et l'aire ? Vérifie par le calcul.",
        solution: "a) 4 × 2,5 = 10 cm et 7 × 2,5 = 17,5 cm.\nb) Le périmètre est multiplié par 2,5 : il passe de 22 cm à 55 cm.\nL'aire est multipliée par 2,5² = 6,25 : elle passe de 28 cm² à 175 cm² (28 × 6,25 = 175 ✓)." },
    ]),

  /* ── STATISTIQUES & PROBABILITÉS ─────────────────────────── */
  A("Statistiques : moyenne, médiane et étendue", "Contrôle", "Statistiques", 55,
    "Contrôle — Moyenne simple et pondérée, médiane, étendue, fréquences.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    [
      { enonce: "Exercice 1 — On considère la série : 5 ; 8 ; 8 ; 11 ; 13.\nCalcule la moyenne, l'étendue et la médiane de cette série.",
        solution: "Moyenne : (5 + 8 + 8 + 11 + 13) ÷ 5 = 45 ÷ 5 = 9.\nÉtendue : 13 − 5 = 8.\nMédiane : la série est ordonnée, 5 valeurs → la 3ᵉ : 8." },
      { enonce: "Exercice 2 — Détermine la médiane et l'étendue de la série : 4 ; 6 ; 9 ; 10 ; 12 ; 13.",
        solution: "6 valeurs (nombre pair) : la médiane est entre la 3ᵉ et la 4ᵉ valeur : (9 + 10) ÷ 2 = 9,5.\nÉtendue : 13 − 4 = 9." },
      { enonce: "Exercice 3 — Elias a obtenu 9 (coefficient 2), 13 (coefficient 3) et 16 (coefficient 5).\nCalcule sa moyenne pondérée.",
        solution: "(9×2 + 13×3 + 16×5) ÷ (2 + 3 + 5) = (18 + 39 + 80) ÷ 10 = 137 ÷ 10 = 13,7." },
      { enonce: "Exercice 4 — Dans une classe de 25 élèves, 5 élèves ont obtenu la note 10.\nQuelle est la fréquence de cette note, en pourcentage ?",
        solution: "5 ÷ 25 = 0,2, soit 20 %." },
    ]),

  A("Probabilités", "Évaluation", "Probabilités", 50,
    "Évaluation — Calculer des probabilités, utiliser l'événement contraire.\n\nDurée : 50 minutes — Sans calculatrice.",
    [
      { enonce: "Exercice 1 — Une roue équilibrée comporte 8 secteurs identiques numérotés de 1 à 8. On la fait tourner.\nCalcule la probabilité d'obtenir :\na) le numéro 6\nb) un numéro pair\nc) un multiple de 3",
        solution: "a) 1/8\nb) 4/8 = 1/2 (numéros 2, 4, 6, 8)\nc) 2/8 = 1/4 (numéros 3 et 6)" },
      { enonce: "Exercice 2 — La probabilité qu'un événement A se réalise est 3/11.\nQuelle est la probabilité de l'événement contraire de A ?",
        solution: "p(contraire de A) = 1 − 3/11 = 8/11." },
      { enonce: "Exercice 3 — Un sac contient 4 jetons jaunes, 6 rouges et 10 verts, indiscernables au toucher. On tire un jeton au hasard.\nCalcule la probabilité de tirer :\na) un jeton rouge\nb) un jeton qui n'est pas vert",
        solution: "20 jetons en tout.\na) 6/20 = 3/10\nb) (4 + 6)/20 = 10/20 = 1/2" },
      { enonce: "Exercice 4 — On tire une carte au hasard dans un jeu de 32 cartes.\nCalcule la probabilité de tirer :\na) un as\nb) un cœur",
        solution: "a) 4/32 = 1/8 (il y a 4 as)\nb) 8/32 = 1/4 (il y a 8 cœurs)" },
    ]),

  /* ── BILAN ───────────────────────────────────────────────── */
  A("Bilan semestriel — Révisions 4ème", "Bilan", "Toutes notions", 60,
    "Bilan semestriel — Ce sujet balaye les notions clés de l'année : relatifs, fractions, calcul littéral, équations, Pythagore, puissances.\n\nDurée : 60 minutes — Calculatrice autorisée pour l'exercice 5.",
    [
      { enonce: "Exercice 1 — Relatifs\nCalcule : (−9) × (−4) + (−6).",
        solution: "(−9) × (−4) = 36, puis 36 + (−6) = 30." },
      { enonce: "Exercice 2 — Fractions\nCalcule : 5/6 − 3/4.",
        solution: "Dénominateur commun 12 : 10/12 − 9/12 = 1/12." },
      { enonce: "Exercice 3 — Calcul littéral\nDéveloppe et réduis : (x + 2)(x + 7).",
        solution: "x² + 7x + 2x + 14 = x² + 9x + 14." },
      { enonce: "Exercice 4 — Équation\nRésous : 6x + 4 = 34.",
        solution: "6x = 30, donc x = 5." },
      { enonce: "Exercice 5 — Théorème de Pythagore\nUn triangle est rectangle et ses côtés de l'angle droit mesurent 9 cm et 12 cm.\nCalcule la longueur de l'hypoténuse.",
        solution: "hyp² = 9² + 12² = 81 + 144 = 225.\nHypoténuse = √225 = 15 cm." },
      { enonce: "Exercice 6 — Puissances\nDonne l'écriture scientifique de 0,003 05.",
        solution: "0,003 05 = 3,05 × 10⁻³." },
    ]),
];

/* ── insertion idempotente ── */
async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("✗ DATABASE_URL manquant. Lance : railway run node seed-annales-4e.js");
    process.exit(1);
  }
  let added = 0, skipped = 0;
  for (const a of ANNALES_4E) {
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
