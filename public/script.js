/* ── CURSEUR PERSONNALISÉ ── */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

document.addEventListener('mouseover', e => {
  if (e.target.closest('a,button,select,input,textarea,.exercise-card,.modal-close')) {
    cursor.style.width  = '5px'; cursor.style.height = '5px';
    cursorRing.style.width = '46px'; cursorRing.style.height = '46px';
    cursorRing.style.borderColor = 'rgba(200,185,122,0.6)';
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.closest('a,button,select,input,textarea,.exercise-card,.modal-close')) {
    cursor.style.width  = '8px'; cursor.style.height = '8px';
    cursorRing.style.width = '32px'; cursorRing.style.height = '32px';
    cursorRing.style.borderColor = 'rgba(200,185,122,0.45)';
  }
});

let currentFilter = "";
let LOADED_EXERCISES = [];   // dernier lot chargé (pour la vue chapitre)

/* ── Matière courante ──────────────────────────────────────────────────────
   Tout le contenu (exercices, problèmes, annales) est cloisonné par matière :
   on ne veut pas voir des exercices de maths dans l'espace physique-chimie.
   Ces deux aides ajoutent la matière aux requêtes et aux créations. */
function matiereCourante() {
  if (!window.MB_MAT) {
    /* Sans ce module, tout retomberait silencieusement sur les mathématiques
       et l'espace d'une autre matière afficherait du contenu de maths. On le
       signale au lieu de le masquer. */
    console.error("[Polymates] matiere.js n'est pas chargé : la matière ne peut pas être déterminée.");
    if (!window._mbAlerteMatiere) {
      window._mbAlerteMatiere = true;
      setTimeout(() => { try {
        showToast("Fichier matiere.js absent : le site retombe sur les mathématiques.", "error");
      } catch (_) {} }, 800);
    }
    return "mathematiques";
  }
  return MB_MAT.id;
}
function avecMatiere(url) {
  return url + (url.includes("?") ? "&" : "?") + "matiere=" + encodeURIComponent(matiereCourante());
}
/* Les banques de démonstration (DEMO_EXERCISES, DEMO_ANNALES) sont des
   contenus de mathématiques. Hors maths, elles ne doivent rien fournir :
   mieux vaut un espace vide qu'un espace rempli d'une autre matière. */
function demoDispo() { return matiereCourante() === "mathematiques"; }
let currentChapter = null;
let pendingExercise = null;

/* ══════════════════════════════════════
   MODE DÉMO — banque intégrée
   Si le serveur (Express + PostgreSQL + Mistral) n'est pas joignable,
   le site bascule sur cette banque locale : la navigation, les séances
   et une correction automatique simple restent disponibles.
══════════════════════════════════════ */
let DEMO_MODE = false;

const DEMO_EXERCISES = [
  { id:1,  title:"Multiplier un décimal par 100", level:"college", subject:"Arithmétique", difficulty:"Facile", classe:"6ème", chapitre:"Entiers & décimaux",
    content:"Calcule : 3,47 × 100.\nExplique comment se déplace la virgule.",
    solution:"3,47 × 100 = 347. La virgule se déplace de 2 rangs vers la droite.", keys:["347"] },
  { id:2,  title:"Placer une fraction sur un partage", level:"college", subject:"Arithmétique", difficulty:"Facile", classe:"6ème", chapitre:"Fractions",
    content:"Un gâteau est coupé en 8 parts égales. Léa en mange 3.\nQuelle fraction du gâteau a-t-elle mangée ? Quelle fraction reste-t-il ?",
    solution:"Léa a mangé 3/8 du gâteau. Il reste 8/8 − 3/8 = 5/8.", keys:["5/8"] },
  { id:3,  title:"Simplifier une fraction", level:"college", subject:"Arithmétique", difficulty:"Moyen", classe:"5ème", chapitre:"Fractions",
    content:"Simplifie la fraction 18/24 le plus possible.",
    solution:"18/24 = 3/4 (on divise le numérateur et le dénominateur par 6).", keys:["3/4"] },
  { id:4,  title:"Addition de nombres relatifs", level:"college", subject:"Arithmétique", difficulty:"Facile", classe:"5ème", chapitre:"Nombres relatifs",
    content:"Calcule : (−7) + (+3) puis (−4) + (−5).",
    solution:"(−7) + (+3) = −4 et (−4) + (−5) = −9.", keys:["-4","−4"] },
  { id:5,  title:"Règle des signes", level:"college", subject:"Arithmétique", difficulty:"Moyen", classe:"4ème", chapitre:"Nombres relatifs",
    content:"Calcule : (−3) × (−6) puis (−20) ÷ 4.",
    solution:"(−3) × (−6) = +18 (moins par moins donne plus) et (−20) ÷ 4 = −5.", keys:["18"] },
  { id:6,  title:"Puissances de 10", level:"college", subject:"Arithmétique", difficulty:"Facile", classe:"4ème", chapitre:"Puissances",
    content:"Écris 10⁵ sous forme d'un nombre entier, puis écris 2³ × 2² sous la forme d'une seule puissance de 2.",
    solution:"10⁵ = 100 000 et 2³ × 2² = 2⁵ = 32.", keys:["100000","100 000","2^5"] },
  { id:7,  title:"Tableau de proportionnalité", level:"college", subject:"Arithmétique", difficulty:"Moyen", classe:"4ème", chapitre:"Proportionnalité",
    content:"3 kg de pommes coûtent 7,50 €.\nCombien coûtent 5 kg de pommes ?",
    solution:"1 kg coûte 7,50 ÷ 3 = 2,50 €. Donc 5 kg coûtent 2,50 × 5 = 12,50 €.", keys:["12.5","12,50","12.50"] },
  { id:8,  title:"Calculer un pourcentage", level:"college", subject:"Arithmétique", difficulty:"Facile", classe:"4ème", chapitre:"Pourcentages",
    content:"Un jean coûte 60 €. Il est soldé à −30 %.\nCalcule le montant de la réduction, puis le nouveau prix.",
    solution:"Réduction : 60 × 30/100 = 18 €. Nouveau prix : 60 − 18 = 42 €.", keys:["42"] },
  { id:9,  title:"Vitesse moyenne", level:"college", subject:"Arithmétique", difficulty:"Moyen", classe:"4ème", chapitre:"Vitesse, distance et temps",
    content:"Un cycliste parcourt 45 km en 1 h 30 min.\nQuelle est sa vitesse moyenne en km/h ?",
    solution:"1 h 30 = 1,5 h. v = d ÷ t = 45 ÷ 1,5 = 30 km/h.", keys:["30"] },
  { id:10, title:"Décomposition en facteurs premiers", level:"college", subject:"Arithmétique", difficulty:"Difficile", classe:"3ème", chapitre:"Arithmétique",
    content:"Décompose 84 en produit de facteurs premiers, puis donne le PGCD de 84 et 60.",
    solution:"84 = 2² × 3 × 7. 60 = 2² × 3 × 5. PGCD(84, 60) = 2² × 3 = 12.", keys:["12"] },
  { id:11, title:"Priorités opératoires", level:"college", subject:"Algèbre", difficulty:"Facile", classe:"5ème", chapitre:"Enchaînement d'opérations",
    content:"Calcule en respectant les priorités : 7 + 3 × (8 − 5).",
    solution:"7 + 3 × (8 − 5) = 7 + 3 × 3 = 7 + 9 = 16.", keys:["16"] },
  { id:12, title:"Réduire une expression", level:"college", subject:"Algèbre", difficulty:"Moyen", classe:"4ème", chapitre:"Calcul littéral",
    content:"Réduis l'expression : A = 5x + 3 − 2x + 7.",
    solution:"A = 5x − 2x + 3 + 7 = 3x + 10.", keys:["3x+10"] },
  { id:13, title:"Développer avec la distributivité", level:"college", subject:"Algèbre", difficulty:"Moyen", classe:"3ème", chapitre:"Calcul littéral",
    content:"Développe et réduis : B = 4(2x − 3) + 5x.",
    solution:"B = 8x − 12 + 5x = 13x − 12.", keys:["13x-12","13x−12"] },
  { id:14, title:"Équation du premier degré", level:"college", subject:"Algèbre", difficulty:"Moyen", classe:"3ème", chapitre:"Équations du 1er degré",
    content:"Résous l'équation : 3x + 5 = 20.",
    solution:"3x = 20 − 5 = 15, donc x = 15 ÷ 3 = 5.", keys:["x=5","5"] },
  { id:15, title:"Équation avec x des deux côtés", level:"college", subject:"Algèbre", difficulty:"Difficile", classe:"3ème", chapitre:"Équations du 1er degré",
    content:"Résous l'équation : 7x − 4 = 3x + 12.",
    solution:"7x − 3x = 12 + 4, soit 4x = 16, donc x = 4.", keys:["x=4","4"] },
  { id:16, title:"Somme des angles d'un triangle", level:"college", subject:"Géométrie", difficulty:"Facile", classe:"5ème", chapitre:"Géométrie du triangle",
    content:"Dans un triangle ABC, l'angle A mesure 48° et l'angle B mesure 63°.\nCalcule la mesure de l'angle C.",
    solution:"C = 180 − (48 + 63) = 180 − 111 = 69°.", keys:["69"] },
  { id:17, title:"Théorème de Pythagore", level:"college", subject:"Géométrie", difficulty:"Moyen", classe:"4ème", chapitre:"Théorème de Pythagore",
    content:"Un triangle ABC est rectangle en A, avec AB = 6 cm et AC = 8 cm.\nCalcule la longueur de l'hypoténuse BC.",
    solution:"BC² = AB² + AC² = 36 + 64 = 100, donc BC = √100 = 10 cm.", keys:["10"] },
  { id:18, title:"Réciproque de Pythagore", level:"college", subject:"Géométrie", difficulty:"Difficile", classe:"4ème", chapitre:"Théorème de Pythagore",
    content:"Un triangle a des côtés de 5 cm, 12 cm et 13 cm.\nEst-il rectangle ? Justifie.",
    solution:"13² = 169 et 5² + 12² = 25 + 144 = 169. Comme 13² = 5² + 12², le triangle est rectangle (réciproque de Pythagore).", keys:["oui","rectangle"] },
  { id:19, title:"Théorème de Thalès", level:"college", subject:"Géométrie", difficulty:"Difficile", classe:"3ème", chapitre:"Théorème de Thalès",
    content:"Dans un triangle ABC, M est sur [AB], N est sur [AC] et (MN) // (BC).\nOn donne AM = 3 cm, AB = 9 cm et BC = 12 cm. Calcule MN.",
    solution:"D'après Thalès : MN/BC = AM/AB = 3/9 = 1/3. Donc MN = 12 × 1/3 = 4 cm.", keys:["4"] },
  { id:20, title:"Cosinus d'un angle", level:"college", subject:"Géométrie", difficulty:"Difficile", classe:"3ème", chapitre:"Trigonométrie",
    content:"Dans un triangle rectangle, l'hypoténuse mesure 10 cm et le côté adjacent à l'angle x mesure 5 cm.\nCalcule cos(x), puis donne la mesure de l'angle x.",
    solution:"cos(x) = 5/10 = 0,5, donc x = 60°.", keys:["60"] },
  { id:21, title:"Image par une fonction", level:"college", subject:"Analyse", difficulty:"Facile", classe:"3ème", chapitre:"Notions de fonctions",
    content:"Soit f la fonction définie par f(x) = 3x − 2.\nCalcule l'image de 4 par f, puis l'antécédent de 10.",
    solution:"f(4) = 3×4 − 2 = 10. Antécédent de 10 : 3x − 2 = 10 donne x = 4.", keys:["10"] },
  { id:22, title:"Fonction linéaire et proportionnalité", level:"college", subject:"Analyse", difficulty:"Moyen", classe:"3ème", chapitre:"Fonction linéaire",
    content:"g est une fonction linéaire telle que g(2) = 7.\nDétermine le coefficient a, puis calcule g(6).",
    solution:"a = 7/2 = 3,5, donc g(x) = 3,5x et g(6) = 21.", keys:["21"] },
  { id:23, title:"Probabilité avec un dé", level:"college", subject:"Probabilités", difficulty:"Facile", classe:"3ème", chapitre:"Probabilités simples",
    content:"On lance un dé équilibré à 6 faces.\nQuelle est la probabilité d'obtenir un multiple de 3 ?",
    solution:"Les multiples de 3 sont 3 et 6 : P = 2/6 = 1/3.", keys:["1/3","2/6"] },
  { id:24, title:"Moyenne et médiane", level:"college", subject:"Statistiques", difficulty:"Moyen", classe:"3ème", chapitre:"Indicateurs de position",
    content:"Voici les notes d'un élève : 8 ; 11 ; 12 ; 14 ; 15.\nCalcule la moyenne, puis donne la médiane de la série.",
    solution:"Moyenne = (8+11+12+14+15)/5 = 60/5 = 12. Médiane = 12 (3ᵉ valeur sur 5).", keys:["12"] },
  { id:25, title:"Périmètre et aire d'un rectangle", level:"primaire", subject:"Géométrie", difficulty:"Facile", classe:"CM2", chapitre:"Périmètres et aires",
    content:"Un rectangle mesure 7 cm de longueur et 4 cm de largeur.\nCalcule son périmètre puis son aire.",
    solution:"Périmètre = 2 × (7 + 4) = 22 cm. Aire = 7 × 4 = 28 cm².", keys:["28"] },
  { id:26, title:"Fractions de quantité", level:"primaire", subject:"Arithmétique", difficulty:"Moyen", classe:"CM2", chapitre:"Fractions",
    content:"Dans une classe de 28 élèves, 3/4 mangent à la cantine.\nCombien d'élèves mangent à la cantine ?",
    solution:"28 ÷ 4 = 7 et 7 × 3 = 21 élèves.", keys:["21"] },
  { id:27, title:"Développer une identité remarquable", level:"lycee", subject:"Algèbre", difficulty:"Moyen", classe:"2nde", chapitre:"Calcul littéral",
    content:"Développe : (x + 5)² puis factorise : x² − 49.",
    solution:"(x + 5)² = x² + 10x + 25 et x² − 49 = (x − 7)(x + 7).", keys:["x^2+10x+25","x²+10x+25"] },
  /* ── PROBLÈMES (énoncés longs, plusieurs étapes) ── */
  { id:101, type:"probleme", title:"La fête d'anniversaire", level:"college", subject:"Arithmétique", difficulty:"Moyen", classe:"6ème", chapitre:"Fractions",
    content:"Pour son anniversaire, Sofia commande 3 pizzas identiques, chacune coupée en 8 parts égales.\nSes invités mangent les 3/4 de la première pizza, la moitié de la deuxième, et 5 parts de la troisième.\n\n1) Combien de parts ont été mangées en tout ?\n2) Quelle fraction du total des 3 pizzas cela représente-t-il ?\n3) Sofia veut garder au moins une pizza entière (8 parts) pour le lendemain. A-t-elle assez de restes ?",
    solution:"1) 3/4 de 8 = 6 parts, 1/2 de 8 = 4 parts, plus 5 parts : 6 + 4 + 5 = 15 parts mangées.\n2) Total : 24 parts. Fraction mangée : 15/24 = 5/8.\n3) Restes : 24 − 15 = 9 parts ≥ 8, donc oui, il reste de quoi faire une pizza entière (et une part en plus).", keys:["15","5/8","9"] },
  { id:102, type:"probleme", title:"Le budget du voyage scolaire", level:"college", subject:"Arithmétique", difficulty:"Moyen", classe:"5ème", chapitre:"Proportionnalité",
    content:"Une classe de 24 élèves organise un voyage. Le car coûte 480 € au total, à partager équitablement entre les élèves.\nLa nuit d'auberge coûte 27 € par élève, et les visites 13 € par élève.\n\n1) Quel est le prix du car par élève ?\n2) Quel est le coût total du voyage pour un élève ?\n3) La coopérative offre une réduction de 20 % sur le coût total par élève. Combien chaque élève paiera-t-il finalement ?",
    solution:"1) 480 ÷ 24 = 20 € par élève.\n2) 20 + 27 + 13 = 60 € par élève.\n3) Réduction : 20 % de 60 = 12 €. Prix final : 60 − 12 = 48 €.", keys:["20","60","48"] },
  { id:103, type:"probleme", title:"Le terrain de M. Ba", level:"college", subject:"Géométrie", difficulty:"Difficile", classe:"4ème", chapitre:"Théorème de Pythagore",
    content:"M. Ba possède un terrain rectangulaire de 60 m de long et 25 m de large.\nIl veut tracer une allée en ligne droite reliant deux coins opposés du terrain, puis clôturer tout le tour du terrain.\n\n1) Calcule la longueur de l'allée diagonale.\n2) Calcule le périmètre du terrain à clôturer.\n3) Le grillage coûte 8,50 € le mètre et se vend par rouleaux de 25 m. Combien de rouleaux faut-il acheter, et pour quel prix total ?",
    solution:"1) Diagonale² = 60² + 25² = 3600 + 625 = 4225, donc diagonale = √4225 = 65 m.\n2) Périmètre = 2 × (60 + 25) = 170 m.\n3) 170 ÷ 25 = 6,8 → il faut 7 rouleaux, soit 7 × 25 = 175 m, pour 175 × 8,50 = 1487,50 €.", keys:["65","170","7","1487,50"] },
  { id:104, type:"probleme", title:"L'abonnement de streaming", level:"college", subject:"Algèbre", difficulty:"Moyen", classe:"4ème", chapitre:"Équations du 1er degré",
    content:"Deux formules d'abonnement à une plateforme de musique :\n— Formule A : 5 € par mois, plus 0,50 € par album téléchargé.\n— Formule B : 11 € par mois, albums illimités.\n\nOn note x le nombre d'albums téléchargés dans le mois.\n\n1) Exprime le prix mensuel de la formule A en fonction de x.\n2) Résous l'équation qui traduit « les deux formules coûtent le même prix ».\n3) À partir de combien d'albums par mois la formule B devient-elle plus intéressante ?",
    solution:"1) Prix A = 5 + 0,5x.\n2) 5 + 0,5x = 11 → 0,5x = 6 → x = 12.\n3) Pour x > 12 albums, la formule B est plus avantageuse (au 13ème album, A coûte 11,50 € > 11 €).", keys:["5 + 0,5x","12","13"] },
  { id:105, type:"probleme", title:"La citerne de récupération", level:"college", subject:"Géométrie", difficulty:"Difficile", classe:"3ème", chapitre:"Longueur",
    content:"Une citerne cylindrique de rayon 0,6 m et de hauteur 1,5 m récupère l'eau de pluie d'un toit de 45 m².\nOn rappelle que 1 mm de pluie tombée correspond à 1 L d'eau par m² de toit.\n\n1) Calcule le volume de la citerne en m³ (arrondi au centième), puis en litres.\n2) Lors d'un orage, il tombe 28 mm de pluie. Quel volume d'eau, en litres, arrive dans la citerne ?\n3) La citerne était déjà remplie à moitié avant l'orage. Déborde-t-elle ? Justifie.",
    solution:"1) V = π × 0,6² × 1,5 = π × 0,54 ≈ 1,70 m³, soit environ 1700 L.\n2) 28 mm × 45 m² = 28 × 45 = 1260 L.\n3) Avant l'orage : 1700 ÷ 2 = 850 L. Après : 850 + 1260 = 2110 L > 1700 L → oui, la citerne déborde (d'environ 410 L).", keys:["1,70","1700","1260","déborde"] },
  { id:106, type:"probleme", title:"Le tournoi de basket", level:"college", subject:"Arithmétique", difficulty:"Moyen", classe:"3ème", chapitre:"Arithmétique",
    content:"Un club veut répartir 90 filles et 126 garçons en équipes mixtes toutes identiques : même nombre de filles et même nombre de garçons dans chaque équipe, sans laisser personne de côté.\n\n1) Décompose 90 et 126 en produits de facteurs premiers.\n2) Quel est le plus grand nombre d'équipes possible ?\n3) Donne alors la composition d'une équipe.",
    solution:"1) 90 = 2 × 3² × 5 et 126 = 2 × 3² × 7.\n2) Le plus grand diviseur commun est 2 × 3² = 18 → 18 équipes.\n3) Chaque équipe compte 90 ÷ 18 = 5 filles et 126 ÷ 18 = 7 garçons.", keys:["18","5","7"] },
];

/* ── BANQUE D'ANNALES (démo locale) ── */
const DEMO_ANNALES = [
  {
    id: 1, title: "Brevet blanc — Mathématiques", exam: "Brevet", year: 2025,
    level: "college", classe: "3ème", subject: "Toutes notions", duration: 120,
    content: "Ce sujet comporte 4 exercices indépendants.\nLe candidat traite les exercices dans l'ordre de son choix.\nLa qualité de la rédaction et le soin apporté aux justifications seront pris en compte.\n\nDurée : 2 heures — Calculatrice autorisée.",
    image_url: null,
    solution: null,
    questions: [
      { enonce: "Exercice 1 (5 points) — Calcul et fractions\nCalculer et donner le résultat sous forme d'une fraction irréductible :\nA = 3/4 + 2/3 × 5/6.", solution: "On applique la priorité : 2/3 × 5/6 = 10/18 = 5/9.\nPuis A = 3/4 + 5/9 = 27/36 + 20/36 = 47/36 (déjà irréductible)." },
      { enonce: "Exercice 2 (5 points) — Théorème de Pythagore\nUn triangle ABC est tel que AB = 6 cm, AC = 8 cm et BC = 10 cm.\nDémontrer que ABC est rectangle et préciser en quel sommet.", solution: "BC² = 100 ; AB² + AC² = 36 + 64 = 100.\nComme BC² = AB² + AC², d'après la réciproque du théorème de Pythagore, ABC est rectangle en A." },
      { enonce: "Exercice 3 (5 points) — Équation\nRésoudre l'équation : 5x − 7 = 2x + 8.", solution: "5x − 2x = 8 + 7 → 3x = 15 → x = 5.\nVérification : 5×5−7 = 18 et 2×5+8 = 18. ✓" },
      { enonce: "Exercice 4 (5 points) — Pourcentages\nUn article coûte 80 €. Il subit une hausse de 15 %, puis une baisse de 15 %.\nQuel est son prix final ? Est-il égal au prix de départ ?", solution: "Après hausse : 80 × 1,15 = 92 €.\nAprès baisse : 92 × 0,85 = 78,20 €.\nLe prix final (78,20 €) est inférieur au prix de départ : les deux variations ne se compensent pas." }
    ]
  },
  {
    id: 2, title: "Contrôle — Calcul littéral et équations", exam: "Contrôle", year: 2025,
    level: "college", classe: "4ème", subject: "Algèbre", duration: 55,
    content: "Contrôle de mathématiques — Chapitre : calcul littéral et équations.\nToutes les réponses doivent être justifiées.\n\nDurée : 55 minutes — Calculatrice autorisée.",
    image_url: null,
    solution: null,
    questions: [
      { enonce: "Exercice 1 — Développer et réduire :\nA = 3(2x + 5) − 2(x − 4).", solution: "A = 6x + 15 − 2x + 8 = 4x + 23." },
      { enonce: "Exercice 2 — Factoriser :\nB = 5x + 15   et   C = x² − 9.", solution: "B = 5(x + 3).\nC = x² − 3² = (x + 3)(x − 3)." },
      { enonce: "Exercice 3 — Résoudre :\n4x + 3 = 2x + 11.", solution: "2x = 8 → x = 4." }
    ]
  },
  {
    id: 3, title: "Devoir surveillé — Géométrie dans l'espace", exam: "DS", year: 2024,
    level: "college", classe: "4ème", subject: "Géométrie", duration: 60,
    content: "Devoir surveillé — Prismes, cylindres et volumes.\nLes constructions doivent être faites aux instruments.\n\nDurée : 1 heure.",
    image_url: null,
    solution: null,
    questions: [
      { enonce: "Exercice 1 — Un cylindre a pour rayon 5 cm et hauteur 12 cm.\nCalculer son volume (valeur arrondie au cm³, π ≈ 3,14).", solution: "V = π × r² × h = 3,14 × 25 × 12 = 942 cm³." },
      { enonce: "Exercice 2 — Un prisme droit a pour base un triangle rectangle de côtés 3 cm et 4 cm, et une hauteur de 10 cm.\nCalculer son volume.", solution: "Aire de la base = (3 × 4)/2 = 6 cm². Volume = 6 × 10 = 60 cm³." }
    ]
  }
];


function normalizeAnswer(s){
  return (s||"").toLowerCase().replace(/\s+/g,"").replace(/,/g,".").replace(/×/g,"*").replace(/−/g,"-");
}

/* Correction locale (mode démo) : compare la réponse aux clés attendues. */
function demoCorrect(ex, answer){
  const norm = normalizeAnswer(answer);
  const hit  = (ex.keys||[]).some(k => norm.includes(normalizeAnswer(k)));
  if (hit) return {
    verdict:"correct",
    analyse:"Ta réponse contient le bon résultat — bien joué. (Correction automatique locale : lance le serveur Polymates pour une analyse détaillée de ton raisonnement par l'IA.)",
    demarche: ex.solution || "—",
    solution: ex.solution || "—"
  };
  return {
    verdict:"incorrect",
    analyse:"Je ne retrouve pas le résultat attendu dans ta copie. Compare ton brouillon avec la démarche ci-dessous pour repérer l'étape qui diffère. (Correction automatique locale : lance le serveur Polymates pour une analyse détaillée par l'IA.)",
    demarche: ex.solution || "—",
    solution: ex.solution || "—"
  };
}

/* ── BIBLIOTHÈQUE D'EXERCICES ──
   La carte « Exercices » du tiroir d'accueil ouvre la bibliothèque, comme
   dans la première version : frises → chapitre → familles (« Voir → ») →
   liste des exercices. C'est la même vue que la page principale, sans le
   carrousel, avec l'ancien titre et le compteur. Tout autre accès à la vue
   « browse » (menu, liens) ramène à la page principale. */
let bibliotheque = false;
let garderBibliotheque = false;
function rubriqueActive() { return bibliotheque ? "entrainement" : rubrique; }
function ouvrirBibliotheque() {
  bibliotheque = true; garderBibliotheque = true;
  showView("browse");
}
function quitterBibliotheque() {
  bibliotheque = false;
  showView("browse");
}
/* « ← Tous les chapitres » : on revient là d'où l'on venait. */
function retourChapitres() {
  garderBibliotheque = bibliotheque;
  showView("browse");
}

function showView(name, tabName) {
  /* L'ancien accueil n'est plus une vue : c'est un tiroir posé sur la page
     principale. Toute navigation le referme ; « home » l'ouvre. */
  if (name === "home") { name = "browse"; setTimeout(ouvrirAccueil, 0); }
  else fermerAccueil();
  if (name === "browse" && !garderBibliotheque) bibliotheque = false;
  garderBibliotheque = false;
  const vb = document.getElementById("view-browse");
  if (vb) vb.classList.toggle("mode-bibliotheque", bibliotheque);
  document.body.classList.toggle("vue-principale", name === "browse" && !bibliotheque);
  rangerAnnales(name === "browse" && rubriqueActive() === "annales" ? "browse" : "annales");
  // Blindage : fermer toute surcouche/modal restée ouverte (sinon elle masque la page en noir)
  document.querySelectorAll(".modal-overlay, .annale-modal").forEach(m => m.classList.remove("open"));
  document.body.style.overflow = "";
  document.querySelectorAll(".view").forEach(v => { v.classList.remove("active"); v.style.display = ""; });
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  const target = document.getElementById("view-" + name);
  if (!target) { console.warn("Vue introuvable :", name); return; }
  target.classList.add("active");
  const tab = tabName || name;
  document.querySelector(`.tab[data-tab="${tab}"]`)?.classList.add("active");
  if (name === "browse") { appliquerRubrique(); loadExercises(); }
  if (name === "chapter") renderChapterView();
  if (name === "add") initAddView();
  if (name === "seance") resetSeanceWelcome();
  if (name === "annales") loadAnnales();
  window.scrollTo(0, 0);
}

/* ── SÉANCE : deux modes — entraînement (exercices) ou problèmes ── */
let seanceMode = "exercice";
/* Lance une séance ciblée. Appelé par le tableau de bord au moyen d'un lien
   app.html#entrainement?chapitre=…&famille=…&classe=… : une page distincte ne
   peut pas appeler une fonction de celle-ci, l'URL est le seul canal.
   Le ciblage est volontairement remis à zéro à chaque appel, pour qu'une
   séance lancée depuis le menu ordinaire ne traîne pas le filtre précédent. */
function seanceCiblee(opts) {
  const o = opts || {};
  setSeanceMode("exercice");

  /* ORDRE CRITIQUE : showView("seance") appelle resetSeanceWelcome, qui
     reconstruit la liste des chapitres et se termine par selectChapitre("").
     Poser le ciblage AVANT reviendrait à le faire effacer aussitôt — c'est
     ce qui renvoyait l'élève sur l'écran de configuration. */
  showView("seance", "entrainement");

  seanceChapitre = o.chapitre || "";
  seanceFamille  = o.famille  || "";
  seanceClasse   = o.classe   || "";
  seanceCible    = true;

  /* La liste déroulante ne contient que les chapitres du niveau courant : si
     le chapitre visé n'y figure pas, on l'y ajoute plutôt que de laisser
     l'élève devant un menu qui contredit la séance qu'il vient de lancer. */
  const sel = document.getElementById("seance-chapitre");
  if (sel && seanceChapitre) {
    if (![...sel.options].some(x => x.value === seanceChapitre)) {
      const opt = document.createElement("option");
      opt.value = opt.textContent = seanceChapitre;
      sel.appendChild(opt);
    }
    sel.value = seanceChapitre;
  }

  /* Un ciblage explicite vaut consentement : on démarre sans faire repasser
     l'élève par l'écran de configuration qu'il vient justement de contourner. */
  if (seanceChapitre || seanceFamille) startSeance();
}

/* Lecture du ciblage éventuel présent dans l'URL, au chargement. */
function lireCiblageUrl() {
  const h = window.location.hash || "";
  const q = h.indexOf("?");
  if (q === -1) return null;
  const p = new URLSearchParams(h.slice(q + 1));
  if (!p.get("chapitre") && !p.get("famille")) return null;
  return { chapitre: p.get("chapitre") || "", famille: p.get("famille") || "",
           classe: p.get("classe") || "" };
}

function openSeance(mode) {
  /* Une ouverture ordinaire efface tout ciblage résiduel. */
  seanceFamille = ""; seanceClasse = ""; seanceCible = false;
  // Le type se choisit désormais dans l'écran de configuration.
  setSeanceMode(mode === "probleme" ? "probleme" : "exercice");
  showView("seance", "entrainement");
}

/* Bascule entre séance d'exercices d'application et séance de problèmes. */
function setSeanceMode(mode) {
  seanceMode = mode === "probleme" ? "probleme" : "exercice";
  const be = document.getElementById("st-exercice");
  const bp = document.getElementById("st-probleme");
  if (be) be.classList.toggle("active", seanceMode === "exercice");
  if (bp) bp.classList.toggle("active", seanceMode === "probleme");

  const title = document.getElementById("seance-hero-title");
  const sub   = document.getElementById("seance-hero-sub");
  if (!title || !sub) return;
  if (seanceMode === "probleme") {
    title.innerHTML = "Séance de<br><em>problèmes.</em>";
    sub.textContent = "Des énoncés longs, en plusieurs étapes — prends le temps de raisonner, l'IA corrige ta démarche.";
  } else {
    title.innerHTML = "Séance<br><em>d'entraînement.</em>";
    sub.textContent = "Choisis ton type de séance et ton niveau — l'IA corrige chacune de tes réponses.";
  }
}

function setFilter(btn, level) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = level;
  loadExercises();
}

const LEVEL_LABELS = { primaire:"Primaire", college:"Collège", lycee:"Lycée", universite:"Université" };

function exerciseCard(ex) {
  const card = document.createElement("div");
  card.className = "exercise-card";
  card.onclick = () => openModal(ex);
  const levelLabel = LEVEL_LABELS[ex.level] || ex.level;
  const diffTag    = ex.difficulty ? `<span class="tag tag-${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>` : "";
  const subjectTag = ex.subject    ? `<span class="tag tag-subject">${escapeHtml(ex.subject)}</span>` : "";
  const classeTag  = ex.classe     ? `<span class="tag tag-classe">${escapeHtml(ex.classe)}</span>` : "";
  card.innerHTML = `
    <div class="card-tags"><span class="tag tag-${ex.level}">${levelLabel}</span>${diffTag}${subjectTag}</div>
    <div class="card-title">${escapeHtml(ex.title)}</div>
    <div class="card-preview">${escapeHtml(ex.content)}</div>
    ${classeTag ? `<div class="card-tags">${classeTag}</div>` : ""}
    <div class="card-footer"><span>#${String(ex.id).padStart(3,'0')}</span><span class="card-arrow">Voir →</span></div>`;
  return card;
}

/* Catalogue : une CARTE cliquable par chapitre, les chapitres d'une
   même matière alignés en colonnes sur une seule ligne (grille fluide).
   Tous les chapitres de l'arbre sont montrés, même sans exercice. */
function renderByChapter(data) {
  LOADED_EXERCISES = data;
  const list  = document.getElementById("list");
  const empty = document.getElementById("empty-state");
  const badge = document.getElementById("total-num");   /* compteur retiré de la page */
  if (badge) badge.textContent = data.length;
  empty.style.display = "none";
  list.innerHTML = "";

  const byChap = new Map();
  data.forEach(ex => {
    const key = ex.chapitre || "Sans chapitre";
    if (!byChap.has(key)) byChap.set(key, []);
    byChap.get(key).push(ex);
  });

  /* Chaque groupe de chapitres porte un `niveaux` (["college"], ["lycee"]…).
     Sous un filtre de niveau, on ne montre que les groupes de ce niveau :
     sans cela, le bouton « Lycée » affichait aussi tous les chapitres du
     collège, vides. Un groupe hors niveau n'est pas perdu pour autant : s'il
     contient des exercices du niveau demandé (un exercice de lycée rangé dans
     un chapitre de collège, par exemple), ces chapitres-là restent visibles.
     Un groupe sans `niveaux` reste affiché partout. */
  const catalogue = (typeof CHAPTER_STRUCTURE !== "undefined") ? CHAPTER_STRUCTURE : (window.CHAPTER_STRUCTURE || []);
  const structure = [];
  catalogue.forEach(m => {
    const chapitres = m.chapters || [];
    const duNiveau = !currentFilter || !m.niveaux || m.niveaux.includes(currentFilter);
    const gardes = duNiveau ? chapitres : chapitres.filter(c => byChap.has(c));
    if (gardes.length) structure.push(Object.assign({}, m, { chapters: gardes }));
  });

  const known = new Set();
  structure.forEach(m => m.chapters.forEach(c => known.add(c)));

  const frag = document.createDocumentFragment();

  function chapterCardEl(chap, exs, color) {
    const n  = exs.length;
    const ne = exs.filter(e => (e.type || "exercice") === "exercice").length;
    const np = exs.filter(e => (e.type || "exercice") === "probleme").length;
    const card = document.createElement("div");
    card.className = "chapx-card" + (n ? "" : " chapx-empty");
    card.style.setProperty("--sc", color || "#c8b97a");
    const detail = n
      ? `<span>✏️ ${ne}</span><span>🧩 ${np}</span>`
      : `à venir`;
    card.innerHTML = `
      <div class="chapx-name">${escapeHtml(chap)}</div>
      <div class="chapx-count">${detail}</div>
      <div class="chapx-go">${n ? "Voir le chapitre →" : "Aucun exercice"}</div>`;
    if (n) card.onclick = () => openChapter(chap);
    return card;
  }

  /* Une frise trop longue pour l'écran coulisse : on la fait glisser à la
     souris ou au doigt, à la molette, ou avec les flèches ‹ › des bords.
     Un glissement ne déclenche pas l'ouverture de la notion survolée. */
  function coulissante(ligne) {
    const cadre = document.createElement("div");
    cadre.className = "fx-cadre";
    const g = document.createElement("button"), d = document.createElement("button");
    g.type = d.type = "button";
    g.className = "fx-defile gauche"; d.className = "fx-defile droite";
    g.innerHTML = "&#8249;"; d.innerHTML = "&#8250;";
    g.setAttribute("aria-label", "Faire défiler vers la gauche"); d.setAttribute("aria-label", "Faire défiler vers la droite");
    g.onclick = () => ligne.scrollBy({ left: -ligne.clientWidth * 0.8, behavior: "smooth" });
    d.onclick = () => ligne.scrollBy({ left:  ligne.clientWidth * 0.8, behavior: "smooth" });
    cadre.append(g, ligne, d);

    const maj = () => {
      const max = ligne.scrollWidth - ligne.clientWidth;
      cadre.classList.toggle("deborde", max > 2);
      cadre.classList.toggle("au-debut", ligne.scrollLeft <= 2);
      cadre.classList.toggle("a-la-fin", ligne.scrollLeft >= max - 2);
    };
    ligne.addEventListener("scroll", maj, { passive: true });
    window.addEventListener("resize", maj);
    requestAnimationFrame(maj);

    /* molette verticale → défilement horizontal, tant que la frise peut bouger */
    ligne.addEventListener("wheel", e => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = ligne.scrollWidth - ligne.clientWidth;
      if ((e.deltaY < 0 && ligne.scrollLeft <= 0) || (e.deltaY > 0 && ligne.scrollLeft >= max)) return;
      e.preventDefault();
      ligne.scrollLeft += e.deltaY;
    }, { passive: false });

    /* glisser à la souris (le toucher défile nativement) */
    let depart = null, bouge = false;
    ligne.addEventListener("pointerdown", e => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      depart = { x: e.clientX, gauche: ligne.scrollLeft }; bouge = false;
    });
    window.addEventListener("pointermove", e => {
      if (!depart) return;
      const dx = e.clientX - depart.x;
      if (!bouge && Math.abs(dx) > 5) { bouge = true; ligne.classList.add("glisse"); }
      if (bouge) ligne.scrollLeft = depart.gauche - dx;
    });
    window.addEventListener("pointerup", () => {
      if (!depart) return;
      depart = null;
      setTimeout(() => ligne.classList.remove("glisse"), 0);
    });
    /* un glissement n'est pas un clic */
    ligne.addEventListener("click", e => { if (bouge) { e.stopPropagation(); e.preventDefault(); bouge = false; } }, true);
    return cadre;
  }

  /* Chaque grande idée est une frise : une ligne, une station par
     chapitre, dans l'ordre de la progression. */
  function frise(titre, desc, couleur, chapitres) {
    const section = document.createElement("section");
    section.className = "fx";
    section.style.setProperty("--sc", couleur || "#c8b97a");
    const total = chapitres.reduce((n, c) => n + (byChap.get(c) || []).length, 0);
    section.innerHTML =
      `<div class="fx-tete"><span class="fx-titre">${escapeHtml(titre)}</span>` +
      (desc ? `<span class="fx-desc">${escapeHtml(desc)}</span>` : "") +
      `<span class="fx-total">${chapitres.length} chapitre${chapitres.length > 1 ? "s" : ""} · ${total} exercice${total > 1 ? "s" : ""}</span></div>`;
    const ligne = document.createElement("div");
    ligne.className = "fx-ligne";
    const piste = document.createElement("div");
    piste.className = "fx-piste";
    piste.style.setProperty("--n", chapitres.length);
    ligne.appendChild(piste);
    chapitres.forEach((chap, i) => {
      const exs = byChap.get(chap) || [];
      const n = exs.length;
      const st = document.createElement(n ? "button" : "div");
      st.className = "fx-station" + (n ? "" : " fx-vide");
      if (n) { st.type = "button"; st.onclick = () => openChapter(chap); st.title = "Ouvrir « " + chap + " »"; }
      st.innerHTML =
        `<span class="fx-num">${i + 1}</span>` +
        `<span class="fx-point"></span>` +
        `<span class="fx-nom">${escapeHtml(chap)}</span>` +
        `<span class="fx-compte">${n ? n + " exercice" + (n > 1 ? "s" : "") : "à venir"}</span>`;
      piste.appendChild(st);
    });
    section.appendChild(coulissante(ligne));
    return section;
  }

  list.classList.add("fx-liste");

  /* Collège : les chapitres sont cassés, chaque famille est rangée sous une
     notion de l'une des six grandes idées (GRANDES_IDEES, dans contenu.js). */
  const idees = (typeof GRANDES_IDEES !== "undefined" && (!window.MB_MAT || MB_MAT.estMaths())) ? GRANDES_IDEES : null;
  const avecIdees = idees && (!currentFilter || currentFilter === "college" || currentFilter === "primaire");
  if (idees) {
    /* ces chapitres ne s'affichent plus en tant que tels, où que ce soit */
    idees.forEach(g => g.notions.forEach(n => n.familles.forEach(([c]) => known.add(c))));
  }
  if (avecIdees) {
    const cleEx = ex => (ex.chapitre || "") + "|" + normaliseTitre((ex.famille && String(ex.famille).trim()) || ex.title || "");
    const parCle = new Map();
    data.forEach(ex => { const k = cleEx(ex); if (!parCle.has(k)) parCle.set(k, []); parCle.get(k).push(ex); });
    idees.forEach(g => frag.appendChild(friseIdee(g, parCle)));
  }

  function friseIdee(g, parCle) {
    const section = document.createElement("section");
    section.className = "fx";
    section.style.setProperty("--sc", g.color);
    const compte = n => n.familles.reduce((s, [c, f]) => s + (parCle.get(c + "|" + normaliseTitre(f)) || []).length, 0);
    /* une notion sans aucun exercice n'est pas affichée (elle réapparaît dès qu'elle en reçoit) */
    /* COURS et TUTORIEL : les frises comptent les ressources, plus les exercices. */
    const enCours = rubriqueActive() === "cours" || rubriqueActive() === "tutoriel";
    const nbCours = n => rubriqueActive() === "tutoriel" ? tutosDeNotion(n).length : coursDeNotion(n).cours.length;
    const unite = k => rubriqueActive() === "tutoriel" ? k + " tutoriel" + (k > 1 ? "s" : "") : k + " cours";
    const notions = g.notions.filter(n => compte(n) > 0 || (enCours && nbCours(n) > 0));
    const total = notions.reduce((s, n) => s + compte(n), 0);
    section.innerHTML =
      `<div class="fx-tete"><span class="fx-titre">${escapeHtml(g.nom)}</span>` +
      `<span class="fx-desc">${escapeHtml(g.desc)}</span>` +
      `<span class="fx-total">${notions.length} notion${notions.length > 1 ? "s" : ""} · ${enCours
        ? unite(notions.reduce((k, n) => k + nbCours(n), 0))
        : total + " exercice" + (total > 1 ? "s" : "")}</span></div>`;
    const ligne = document.createElement("div");
    ligne.className = "fx-ligne";
    const piste = document.createElement("div");
    piste.className = "fx-piste";
    piste.style.setProperty("--n", notions.length);
    ligne.appendChild(piste);
    notions.forEach((n, i) => {
      const nbEx = compte(n), nbC = enCours ? nbCours(n) : 0;
      const nb = enCours ? (nbC || nbEx) : nbEx;   /* en COURS, une notion sans cours mène au chapitre entier */
      const st = document.createElement(nb ? "button" : "div");
      /* la première notion de chaque classe porte l'étiquette de la classe */
      const nouvelleClasse = n.classe && (i === 0 || notions[i - 1].classe !== n.classe);
      st.className = "fx-station" + (nb ? "" : " fx-vide") + (nouvelleClasse && i ? " fx-rupture" : "");
      if (nb) { st.type = "button"; st.onclick = () => openNotion(g, n); st.title = n.familles.length + " famille" + (n.familles.length > 1 ? "s" : "") + " d'exercices"; }
      st.innerHTML =
        `<span class="fx-classe${nouvelleClasse ? "" : " fx-classe-suite"}">${escapeHtml(n.classe || "")}</span><span class="fx-point"></span>` +
        `<span class="fx-nom">${escapeHtml(n.nom)}</span>` +
        `<span class="fx-compte">${enCours
          ? (nbC ? unite(nbC) : "voir le chapitre")
          : (nb ? nb + " exercice" + (nb > 1 ? "s" : "") : "à venir")}</span>`;
      piste.appendChild(st);
    });
    section.appendChild(coulissante(ligne));
    return section;
  }

  structure.forEach(mat => {
    if (idees && (mat.niveaux || []).some(n => n === "college" || n === "primaire")) return;
    frag.appendChild(frise(mat.subject, mat.desc, mat.color, mat.chapters));
  });

  // intitulés hors-arbre → section « Autres »
  const extras = [...byChap.keys()].filter(k => !known.has(k));
  if (extras.length) frag.appendChild(frise("AUTRES", "Chapitres sans catégorie.", "#9b8fb0", extras));

  list.appendChild(frag);
}

/* ── VUE D'UN CHAPITRE : la liste de ses exercices ── */
let currentFiltre = null;   /* quand une notion est ouverte : ex => true si l'exercice en fait partie */
let currentClasse = "";     /* la classe de la notion ouverte (6e, 5e…) */

function openNotion(idee, notion) {
  if (rubriqueActive() === "cours") { ouvrirCoursNotion(notion); return; }
  if (rubriqueActive() === "tutoriel") { ouvrirTutosNotion(notion); return; }
  FAMILLES_COCHEES = new Set();
  const cles = new Set(notion.familles.map(([c, f]) => c + "|" + normaliseTitre(f)));
  currentFiltre = ex => cles.has((ex.chapitre || "") + "|" + normaliseTitre((ex.famille && String(ex.famille).trim()) || ex.title || ""));
  currentChapter = notion.nom;
  currentClasse = notion.classe || "";
  chapterMode = "exercice";
  showView("chapter");
}

function openChapter(chap) {
  if (rubriqueActive() === "cours") { ouvrirCoursChapitre(chap); return; }
  if (rubriqueActive() === "tutoriel") { ouvrirTutosChapitre(chap); return; }
  FAMILLES_COCHEES = new Set();
  currentFiltre = null;
  currentClasse = "";
  currentChapter = chap;
  chapterMode = "exercice";
  showView("chapter");
}

let chapterMode = "exercice";   // "exercice" | "probleme"

function setChapterMode(mode) {
  chapterMode = (mode === "probleme") ? "probleme" : "exercice";
  document.getElementById("chapswitch-ex").classList.toggle("active", chapterMode === "exercice");
  document.getElementById("chapswitch-pb").classList.toggle("active", chapterMode === "probleme");
  renderChapterView();
}


/* ── Page d'une famille d'exercices ── */
let FAMILLES = {};

function ouvrirFamille(cle) {
  const g = FAMILLES[cle];
  if (!g) return;
  document.getElementById("famille-title").textContent = g.titre;
  const mot = chapterMode === "probleme" ? "problème" : "exercice";
  document.getElementById("famille-sub").textContent =
    g.items.length + " " + mot + (g.items.length > 1 ? "s" : "") + " \u00b7 " + currentChapter + (currentClasse ? " \u00b7 " + currentClasse : "");
  const liste = document.getElementById("famille-list");
  liste.innerHTML = "";
  g.items.forEach(ex => liste.appendChild(exerciseCard(ex)));
  showView("famille", "browse");
}

function retourChapitre() { showView("chapter", "browse"); }

function renderChapterView() {
  const all = LOADED_EXERCISES.filter(ex => currentFiltre ? currentFiltre(ex) : (ex.chapitre || "Sans chapitre") === currentChapter);
  const exos = all.filter(ex => (ex.type || "exercice") === "exercice");
  const pbs  = all.filter(ex => (ex.type || "exercice") === "probleme");

  document.getElementById("chapter-title").textContent = currentChapter;
  document.getElementById("chapcount-ex").textContent = exos.length;
  document.getElementById("chapcount-pb").textContent = pbs.length;

  const shown = (chapterMode === "probleme") ? pbs : exos;
  const wordSing = chapterMode === "probleme" ? "problème" : "exercice d'entraînement";
  const wordPlur = chapterMode === "probleme" ? "problèmes" : "exercices d'entraînement";
  document.getElementById("chapter-sub").textContent =
    (currentClasse ? currentClasse + " · " : "") + shown.length + " " + (shown.length > 1 ? wordPlur : wordSing) + (currentFiltre ? " dans cette notion" : " dans ce chapitre");

  const grid = document.getElementById("chapter-list");
  grid.innerHTML = "";
  if (!shown.length) {
    const label = chapterMode === "probleme" ? "problème" : "exercice d'entraînement";
    grid.innerHTML = `<div class="chap-placeholder">Aucun ${label} pour ce chapitre — pour l'instant !</div>`;
    FAMILLES = {};
    majLancement();
    return;
  }
  // Regroupement par type d'exercice : les énoncés portant le même titre
  // relèvent de la même technique, on les présente ensemble.
  const groupes = new Map();
  shown.forEach(ex => {
    // La famille vient de la base ; à défaut on la déduit du titre.
    const brut = (ex.famille && String(ex.famille).trim()) || ex.title || "Sans titre";
    const cle = normaliseTitre(brut);
    if (!groupes.has(cle)) groupes.set(cle, { titre: brut, items: [] });
    groupes.get(cle).items.push(ex);
  });

  // Les familles les plus fournies d'abord, puis par ordre alphabétique.
  const ordonnes = [...groupes.values()].sort((a, b) =>
    b.items.length - a.items.length || a.titre.localeCompare(b.titre, "fr"));

  /* Chaque famille est une ligne à cocher : on choisit les familles à
     travailler, puis « Lancer la séance » ouvre une séance d'entraînement
     sur ces familles uniquement. Les coches survivent au passage
     Entraînement ↔ Problèmes, et sont remises à zéro à chaque notion. */
  FAMILLES = {};
  if (bibliotheque) {
    /* Bibliothèque : chaque famille ouvre la page qui liste ses exercices. */
    ordonnes.forEach(g => {
      const cle = normaliseTitre(g.titre);
      FAMILLES[cle] = g;
      const tete = document.createElement("button");
      tete.className = "chap-group-head";
      tete.innerHTML =
        `<span class="chap-group-title">${escapeHtml(g.titre)}</span>
         <span class="chap-group-count">${g.items.length}</span>
         <span class="chap-group-go">Voir →</span>`;
      tete.onclick = () => ouvrirFamille(cle);
      grid.appendChild(tete);
    });
    majLancement();
    return;
  }
  ordonnes.forEach(g => {
    const cle = normaliseTitre(g.titre);
    FAMILLES[cle] = g;
    const ligne = document.createElement("label");
    ligne.className = "chap-group-head chap-group-coche" + (FAMILLES_COCHEES.has(cle) ? " cochee" : "");
    ligne.innerHTML =
      `<input type="checkbox" class="chap-group-case"${FAMILLES_COCHEES.has(cle) ? " checked" : ""}>
       <span class="chap-group-title">${escapeHtml(g.titre)}</span>
       <span class="chap-group-count">${g.items.length}</span>`;
    ligne.querySelector("input").onchange = e => {
      if (e.target.checked) FAMILLES_COCHEES.add(cle); else FAMILLES_COCHEES.delete(cle);
      ligne.classList.toggle("cochee", e.target.checked);
      majLancement();
    };
    grid.appendChild(ligne);
  });
  majLancement();
}

/* ── Séance sur les familles cochées ── */
let FAMILLES_COCHEES = new Set();

/* Seules comptent les familles cochées ET présentes dans la vue affichée. */
function famillesCochees() {
  return Object.keys(FAMILLES).filter(c => FAMILLES_COCHEES.has(c)).map(c => FAMILLES[c]);
}

function majLancement() {
  const barre = document.getElementById("chapter-launch");
  if (!barre) return;
  const total = Object.keys(FAMILLES).length;
  barre.hidden = total === 0 || bibliotheque;
  const choix = famillesCochees();
  const nbEx = choix.reduce((n, g) => n + g.items.length, 0);
  document.getElementById("chap-launch-txt").textContent = choix.length
    ? choix.length + " famille" + (choix.length > 1 ? "s" : "") + " cochée" + (choix.length > 1 ? "s" : "") +
      " · " + nbEx + " exercice" + (nbEx > 1 ? "s" : "")
    : "Coche les familles à travailler";
  document.getElementById("chap-launch-all").textContent =
    choix.length === total ? "Tout décocher" : "Tout cocher";
  document.getElementById("chap-launch-btn").disabled = !choix.length;
}

function toutCocherFamilles() {
  const tout = famillesCochees().length === Object.keys(FAMILLES).length;
  Object.keys(FAMILLES).forEach(c => tout ? FAMILLES_COCHEES.delete(c) : FAMILLES_COCHEES.add(c));
  renderChapterView();
}

/* Lance la séance directement sur les exercices des familles cochées : la
   séance ordinaire ne sait filtrer que sur UNE famille, on lui fournit donc
   la liste toute prête, mélangée, puis on ouvre le livre. */
function lancerSeanceFamilles() {
  const exos = famillesCochees().flatMap(g => g.items);
  if (!exos.length) { showToast("Coche au moins une famille.", "error"); return; }
  setSeanceMode(chapterMode === "probleme" ? "probleme" : "exercice");
  showView("seance", "entrainement");
  seanceCible = true;
  seanceExercises = [...exos].sort(() => Math.random() - 0.5);
  seanceHistory = seanceExercises.map(() => null);
  seanceIndex = 0; seanceMax = 0;
  seanceCorrect = 0; seanceWrong = 0; seanceSkipped = 0;
  document.getElementById("seance-welcome").style.display = "none";
  document.getElementById("seance-session").style.display = "";
  paintAll();
}

/* Deux titres ne différant que par la casse, les accents, la ponctuation ou
   un numéro final (« Thalès 1 », « Thalès 2 ») désignent le même type. */
function normaliseTitre(t) {
  return String(t || "Sans titre")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s*(n[°o]\s*)?\d+\s*$/, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim() || "sans titre";
}

/* ═══════════════════════════════════════════
   ANNALES & CONTRÔLES — banque + séance d'examen
   ═══════════════════════════════════════════ */
let LOADED_ANNALES = [];
let annaleExamFilter = "";
let EXAM = null;
let examTimer = null;

function annaleFigure(fig) {
  if (!fig || typeof fig !== "string" || fig.indexOf("<svg") !== 0) return "";
  // sécurité : ces figures ne contiennent que des tracés ; on rejette tout
  // ce qui pourrait exécuter du script (gestionnaires on…, balise script, href/src).
  if (/<\s*script|\son\w+\s*=|javascript:|<\s*foreignObject|(?:xlink:)?href\s*=|src\s*=/i.test(fig)) return "";
  const ok = /^<svg[^>]*>(?:\s*<(?:line|polyline|polygon|path|circle|ellipse|rect|g|text|tspan)\b[^>]*\/?>|\s*<\/(?:g|text|tspan|svg)>|[^<]*)*$/i;
  if (!ok.test(fig)) return "";
  return `<div class="annale-fig">${fig}</div>`;
}
function nl2br(t) { return escapeHtml(t == null ? "" : t).replace(/\n/g, "<br>"); }

/* Libellé court d'une question : « Exercice 3 », « Problème »…
   L'élève lit le sujet sur le PDF officiel ; le texte extrait n'est jamais
   affiché (il ne sert qu'au correcteur, via enonce_correction). */
function qLabel(q, i) {
  if (q && q._label) return q._label;
  // Les PDF composés en LaTeX rendent les petites capitales lettre par lettre :
  // « E XERCICE 1 », « P ROBLÈME ». On recolle avant d'analyser.
  const first = String((q && q.enonce) || "").split("\n")[0]
    .replace(/\s+/g, " ")
    .replace(/\b([A-ZÀ-Þ])\s+([A-ZÀ-Þ]{2,})/g, "$1$2")
    .trim();
  // Automatismes (format 2024+) : « Question 6 », et non « Exercice 6 ».
  const mq = first.match(/^Question\s*n?[°o]?\s*(\d+)/i);
  if (mq) return "Question " + mq[1];
  const m = first.match(/^Exercice\s*n?[°o]?\s*(\d+)/i);
  if (m) return "Exercice " + m[1];
  if (/^probl[èe]me/i.test(first)) return "Problème";
  if (/^(Premi[èe]re|Deuxi[èe]me|Troisi[èe]me)\s+partie/i.test(first))
    return first.match(/^\S+\s+partie/i)[0];
  return "Exercice " + (i + 1);
}

function annaleQuestions(a) {
  const q = a.questions;
  if (Array.isArray(q)) return q;
  try { return JSON.parse(q || "[]"); } catch { return []; }
}

async function loadAnnales() {
  try {
    const res = await MB_AUTH.apiFetch(avecMatiere("/annales"));
    if (!res.ok) throw new Error();
    LOADED_ANNALES = await res.json();
    DEMO_MODE = false;
  } catch {
    DEMO_MODE = true;
    LOADED_ANNALES = demoDispo() ? DEMO_ANNALES.map(a => ({ ...a })) : [];
  }
  renderAnnales();
}

function annaleBadges(a) {
  return `<div class="annale-badges">
    <span class="annale-badge exam">${escapeHtml(a.exam || "Sujet")}</span>
    ${a.year ? `<span class="annale-badge">${a.year}</span>` : ""}
    ${a.classe ? `<span class="annale-badge">${escapeHtml(a.classe)}</span>` : ""}
  </div>`;
}
function annaleMeta(a) {
  const qs = annaleQuestions(a);
  const isPdf = !!(a.image_url && /\.pdf(\?|$)/i.test(a.image_url));
  const bits = [];
  if (a.duration) bits.push(`⏱ ${a.duration} min`);
  bits.push(isPdf ? "\ud83d\udcc4 Sujet PDF" : `${qs.length} exercice${qs.length > 1 ? "s" : ""}`);
  if (a.subject) bits.push(escapeHtml(a.subject));
  return bits.join(" · ");
}

function renderAnnales() {
  const fl = document.getElementById("annales-filters");
  const exams = [...new Set(LOADED_ANNALES.map(a => a.exam).filter(Boolean))];
  fl.innerHTML = "";
  const mkBtn = (label, val) => {
    const b = document.createElement("button");
    b.className = "filter-btn" + (annaleExamFilter === val ? " active" : "");
    b.textContent = label;
    b.onclick = () => { annaleExamFilter = val; renderAnnales(); };
    return b;
  };
  fl.appendChild(mkBtn("Tous", ""));
  exams.forEach(e => fl.appendChild(mkBtn(e, e)));

  const grid = document.getElementById("annales-grid");
  grid.innerHTML = "";
  const list = LOADED_ANNALES.filter(a => !annaleExamFilter || a.exam === annaleExamFilter);
  if (!list.length) {
    grid.innerHTML = `<div class="chap-placeholder">Aucune annale pour l'instant — ajoute des sujets depuis l'onglet Ajouter !</div>`;
    return;
  }
  list.forEach(a => {
    const card = document.createElement("div");
    card.className = "annale-card";
    card.innerHTML = `
      ${annaleBadges(a)}
      <div class="annale-title">${escapeHtml(a.title)}</div>
      <div class="annale-meta">${annaleMeta(a)}</div>
      <div class="annale-actions">
        <button class="annale-btn" data-act="voir">Consulter le sujet</button>
        <button class="annale-btn primary" data-act="composer">⏱ Composer →</button>
      </div>`;
    card.querySelector('[data-act="voir"]').onclick = (e) => { e.stopPropagation(); openAnnale(a.id); };
    card.querySelector('[data-act="composer"]').onclick = (e) => { e.stopPropagation(); startExamen(a.id); };
    card.onclick = () => openAnnale(a.id);
    grid.appendChild(card);
  });
}

/* ── consultation d'un sujet (avec corrigés dépliables) ── */
function openAnnale(id) {
  const a = LOADED_ANNALES.find(x => x.id === id);
  if (!a) return;
  const qs = annaleQuestions(a);
  const isPdf = !!(a.image_url && /\.pdf(\?|$)/i.test(a.image_url));

  /* Si l'énoncé d'un exercice commence par « Exercice … », cette première
     ligne devient l'en-tête de l'exercice sur la copie. */
  const exHead = (q, i) => {
    const lines = String(q.enonce || "").split("\n");
    if (/^\s*exercice/i.test(lines[0] || "")) {
      return { head: lines[0].trim(), body: lines.slice(1).join("\n") };
    }
    return { head: "Exercice " + (i + 1), body: q.enonce };
  };

  const meta = [];
  if (a.exam) meta.push(escapeHtml(a.exam));
  if (a.year) meta.push(a.year);
  if (a.classe) meta.push("Classe de " + escapeHtml(a.classe));
  if (a.subject) meta.push(escapeHtml(a.subject));
  if (a.duration) meta.push("Dur\u00e9e : " + a.duration + " min");

  document.getElementById("annale-detail").classList.add("as-sheet");
  document.getElementById("annale-detail").innerHTML = `
    <div class="annale-toolbar no-print">
      ${annaleBadges(a)}
      <div class="annale-toolbar-btns">
        ${isPdf
          ? `<a class="annale-btn" href="${escapeHtml(a.image_url)}" target="_blank" rel="noopener">\ud83d\udda8 Ouvrir / Imprimer le PDF</a>`
          : `<button class="annale-btn" onclick="window.print()">\ud83d\udda8 Imprimer / PDF</button>`}
        <button class="annale-btn primary" onclick="closeAnnale(); startExamen(${a.id})">\u23f1 Composer \u2192</button>
        ${estAdmin() ? `<button class="annale-btn danger" onclick="deleteAnnale(${a.id})" title="R\u00e9serv\u00e9 aux administrateurs">\ud83d\uddd1 Supprimer</button>` : ""}
      </div>
    </div>
    <div class="annale-sheet">
      <div class="sheet-band"><span>Coll\u00e8ge Polymates</span><span>\u00c9valuation de math\u00e9matiques</span></div>
      <div class="sheet-title">${escapeHtml(a.title)}</div>
      <div class="sheet-meta">${meta.join(" \u00b7 ")}</div>
      <div class="sheet-fields">
        <span>NOM : \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026</span>
        <span>Pr\u00e9nom : \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026</span>
        <span>Note : \u2026\u2026 / 20</span>
      </div>
      <div class="sheet-note">La qualit\u00e9 de la r\u00e9daction et la pr\u00e9sentation des calculs seront prises en compte dans la notation.</div>
      ${isPdf
        ? `<iframe class="annale-pdf" src="${escapeHtml(a.image_url)}#view=FitH" title="Sujet PDF"></iframe>`
        : (a.image_url ? `<img class="annale-img" src="${escapeHtml(a.image_url)}" alt="Sujet complet">` : "")}
      ${a.content ? `<div class="sheet-content">${nl2br(a.content)}</div>` : ""}
      ${qs.map((q, i) => {
        // Sujet PDF : on n'affiche que le numéro et un espace pour rédiger.
        // Le texte extrait du PDF n'est jamais montré à l'élève.
        const { head, body } = exHead(q, i);
        const titre = isPdf ? qLabel(q, i) : head;
        return `
        <div class="sheet-ex">
          <div class="sheet-ex-head"><span>${escapeHtml(titre)}</span><span class="sheet-pts">\u2026\u2026 pts</span></div>
          ${isPdf
            ? `<div class="sheet-ex-body" style="min-height:5.5rem;border-bottom:1px dashed rgba(0,0,0,.18)"></div>`
            : `<div class="sheet-ex-body">${nl2br(body)}</div>`}
          ${q.solution ? `<details class="annale-q-sol no-print"><summary>Voir le corrig\u00e9</summary><div>${nl2br(q.solution)}</div></details>` : ""}
        </div>`;
      }).join("")}
      <div class="sheet-foot">\u2014 Fin du sujet \u2014</div>
    </div>
    <div class="exam-start-row no-print">
      <button class="annale-btn primary big" onclick="closeAnnale(); startExamen(${a.id})">\u23f1 Composer cet examen \u2192</button>
    </div>`;
  document.getElementById("annale-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeAnnale() {
  document.getElementById("annale-modal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ── EXAMEN : ① choix ── */
async function openExamen() {
  showView("examen", "examen");
  examPhase("choice");
  if (!LOADED_ANNALES.length) await loadAnnales();
  renderExamenChoice();
}
function examPhase(ph) {
  ["choice", "sujet", "run", "done"].forEach(x => {
    document.getElementById("examen-" + x).style.display = (x === ph) ? "" : "none";
  });
  window.scrollTo(0, 0);
}
function renderExamenChoice() {
  const grid = document.getElementById("examen-choice-grid");
  grid.innerHTML = "";
  if (!LOADED_ANNALES.length) {
    grid.innerHTML = `<div class="chap-placeholder">Aucune annale disponible — ajoute des sujets depuis l'onglet Ajouter !</div>`;
    return;
  }
  LOADED_ANNALES.forEach(a => {
    const card = document.createElement("div");
    card.className = "annale-card";
    card.innerHTML = `
      ${annaleBadges(a)}
      <div class="annale-title">${escapeHtml(a.title)}</div>
      <div class="annale-meta">${annaleMeta(a)}</div>
      <div class="annale-actions">
        <button class="annale-btn primary">Composer ce sujet →</button>
      </div>`;
    card.onclick = () => startExamen(a.id);
    grid.appendChild(card);
  });
}

/* ── DÉCOUPAGE EN SOUS-QUESTIONS ─────────────────────────────────
   L'élève traite « 1. », « 2. », « 4. a. »… une par une plutôt que l'exercice
   entier, chacune avec son espace de réponse.

   Le découpage lui-même vit dans sous-questions.js, parce que l'audit en
   ligne de commande (audit-sous-questions.js) doit exécuter exactement le
   même code : deux copies divergeraient au premier correctif. */
function parseSousQuestions(texte) {
  if (!window.MB_SQ) {
    console.error("[Polymates] sous-questions.js n'est pas chargé : "
      + "les exercices d'annale ne seront pas découpés en questions.");
    return null;
  }
  return MB_SQ.parse(texte);
}

/* Développe la liste des exercices en une liste de sous-questions. */
function expanserQuestions(qs) {
  const out = [];
  qs.forEach((q, i) => {
    // Le texte de l'énoncé est dans enonce_correction (questions migrées) ou,
    // pour la majorité des exercices importés, directement dans enonce.
    const source = q.enonce_correction || q.enonce || "";
    const dec = source ? parseSousQuestions(source) : null;
    const base = qLabel(q, i);
    /* Widgets posés à l'analyse : chacun vise UNE sous-question par son
       label (« 2. a. »). Sans sous-questions, le widget vaut pour l'exercice. */
    const ws = Array.isArray(q.widgets) ? q.widgets : [];
    const nl = l => String(l || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
    const widgetDe = label => { const w = ws.find(x => nl(x.question) === nl(label)); return w ? w.interactif : null; };
    if (!dec) {
      const w0 = ws.find(x => !x.question) || ws[0];
      out.push(Object.assign({}, q, { _label: base, _exercice: base }, w0 ? { interactif: w0.interactif } : {}));
      return;
    }
    dec.items.forEach(sq => {
      const wi = widgetDe(sq.label);
      out.push(Object.assign({}, q, wi ? { interactif: wi } : {}, {
        _label: base + " \u00b7 question " + sq.label,
        _exercice: base,
        // Contexte complet de l'exercice + la sous-question précise :
        // le correcteur a besoin des deux pour juger.
        enonce_correction: (dec.preambule ? dec.preambule + "\n\n" : "")
                           + "Question " + sq.label + " " + sq.texte,
      }));
    });
  });
  return out;
}

/* ── EXAMEN : ② le sujet en entier d'abord ── */
function startExamen(id) {
  const a = LOADED_ANNALES.find(x => x.id === id);
  if (!a) return;
  lancerExamen(a);
}
/* Recommencer le sujet en cours (annale publiée ou sujet en test). */
function relancerExamen() { if (EXAM && EXAM.annale) lancerExamen(EXAM.annale); }

function lancerExamen(a) {
  clearTimeout(MEMO.minuteur);
  const brutes = annaleQuestions(a);
  /* Un sujet en test arrive par une URL blob:, sans extension .pdf. */
  const isPdf = !!(a.image_url && (a.test || /\.pdf(\?|$)/i.test(a.image_url)));
  if (!brutes.length && !isPdf) { showToast("Ce sujet n'a pas encore de questions détaillées.", "error"); return; }
  // On compose sous-question par sous-question.
  const qs = expanserQuestions(brutes);
  clearInterval(examTimer);
  EXAM = { annale: a, qs, brutes, pdf: isPdf, index: 0, answers: Array(qs.length).fill(null), start: null };
  showView("examen", "examen");
  examPhase("sujet");
  const notice = isPdf
    ? `Prends d'abord connaissance du sujet <strong>en entier</strong>, comme le jour de l'épreuve. Quand tu es prêt·e, lance le chronomètre : tu composeras sur une <strong>copie unique</strong> (à l'écran ou sur papier), le sujet restant affiché à côté de ta rédaction.`
    : `Prends d'abord connaissance du sujet <strong>en entier</strong>, comme le jour de l'épreuve. Quand tu es prêt·e, lance le chronomètre — tu traiteras ensuite les questions une par une.`;
  document.getElementById("examen-sujet-body").innerHTML = (a.test
      ? `<div class="exam-test-bandeau">Mode test administrateur — ce sujet n'est pas encore publié.
           Les élèves ne le voient pas.</div>` : "") + `
    <div class="annale-paper-head">
      ${annaleBadges(a)}
      <h2>${escapeHtml(a.title)}</h2>
      <div class="annale-meta">${annaleMeta(a)}</div>
    </div>
    <div class="exam-notice">${notice}</div>
    ${isPdf
      ? `<iframe class="annale-pdf" src="${escapeHtml(a.image_url)}#view=FitH" title="Sujet PDF"></iframe>`
      : (a.image_url ? `<img class="annale-img" src="${escapeHtml(a.image_url)}" alt="Sujet complet">` : "")}
    <div class="annale-content">${nl2br(a.content)}</div>
    ${isPdf
      ? `<div class="exam-notice">Ce sujet comporte ${brutes.length} exercice(s) : ${
            brutes.map((q, i) => escapeHtml(qLabel(q, i))).join(" \u00b7 ")
          }, soit ${qs.length} question(s) \u00e0 traiter une par une. Tout l'\u00e9nonc\u00e9 se trouve dans le PDF ci-dessus.</div>`
      : qs.map(q => `<div class="annale-q"><div class="annale-q-enonce">${nl2br(q.enonce)}</div>${annaleFigure(q.figure)}</div>`).join("")}`;
  /* Sujet déjà commencé : proposer de reprendre là où l'élève s'était arrêté. */
  if (!a.test && qs.length) listerEnCours().then(liste => {
    const s = liste.find(x => Number(x.annale_id) === Number(a.id));
    if (!s || !EXAM || EXAM.annale !== a) return;
    const faites = (s.reponses || []).filter(r => r && !r.skipped).length;
    const zone = document.getElementById("examen-sujet-body");
    zone.insertAdjacentHTML("afterbegin", `<div class="exam-reprise">
      <div><strong>Tu as déjà commencé ce sujet</strong> ${quandLisible(s.updated_at)} :
        ${faites} question${faites > 1 ? "s" : ""} traitée${faites > 1 ? "s" : ""} sur ${s.nb_questions || qs.length}, ${dureeLisible(s.temps_sec)} au chrono.</div>
      <div class="exam-reprise-actions">
        <button class="annale-btn primary" onclick="reprendreExamen(${Number(a.id)})">Reprendre où j'en étais →</button>
        <button class="annale-btn" onclick="this.closest('.exam-reprise').remove()">Recommencer à zéro</button>
      </div></div>`);
  });
}

/* ── EXAMEN : ③ question par question ── */
function beginEpreuve(reprise) {
  /* Reprise d'une épreuve mémorisée : le chronomètre repart du temps déjà passé. */
  EXAM.start = Date.now() - ((reprise && reprise.temps_sec) || 0) * 1000;
  clearInterval(examTimer);
  examTimer = setInterval(() => {
    const el = document.getElementById("exam-chrono");
    if (!el || !EXAM) return;
    const sec = Math.floor((Date.now() - EXAM.start) / 1000);
    el.textContent = String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0");
    if (EXAM.annale.duration && sec === EXAM.annale.duration * 60)
      showToast("⏱ Temps réglementaire écoulé — tu peux continuer pour t'entraîner.", "error");
  }, 1000);
  document.getElementById("exam-run-title").textContent = EXAM.annale.title;
  examPhase("run");
  if (EXAM.pdf && !EXAM.qs.length) paintExamPdf(); else paintExamQuestion();
  memoriserExamen(true);
}

/* Mode « copie unique » pour les sujets officiels PDF */
function paintExamPdf() {
  document.getElementById("exam-progress").textContent = "Composition sur sujet officiel — copie unique";
  document.getElementById("exam-enonce").innerHTML = `
    <iframe class="annale-pdf" style="height:58vh;margin-top:0" src="${escapeHtml(EXAM.annale.image_url)}#view=FitH" title="Sujet PDF"></iframe>
    <div class="exam-notice" style="margin-top:0.9rem">Le sujet reste affiché ci-dessus pendant toute l'épreuve. Rédige tes réponses exercice par exercice dans ta copie (numérote-les), ou compose sur papier et sers-toi de la zone comme brouillon.</div>`;
  const ta = document.getElementById("exam-answer");
  ta.value = ""; ta.readOnly = false;
  ta.placeholder = "Exercice 1 : …\nExercice 2 : …";
  document.getElementById("exam-feedback").innerHTML = "";
  document.getElementById("exam-actions").style.display = "none";
  const next = document.getElementById("exam-next");
  next.style.display = "";
  next.textContent = "Terminer l\u2019\u00e9preuve \u2192";
}

/* Le barème est écrit dans le sujet lui-même : « Exercice 3 (5 points) ».
   On le lit une fois par question ; à défaut, le serveur notera sur 4. */
function baremeQuestion(q) {
  const txt = (q.enonce_correction || "") + " " + (q.enonce || "");
  const m = txt.match(/\((\s*\d+(?:[.,]\d+)?)\s*points?\s*\)/i);
  if (!m) return null;
  const n = parseFloat(m[1].replace(",", "."));
  return Number.isFinite(n) && n > 0 && n <= 20 ? n : null;
}

/* ── Les deux parties d'un sujet ──
   Beaucoup de sujets s'organisent en une partie « questions » (exercices
   courts, QCM, calculs) et une partie « problèmes » (situations longues).
   Quand AUCUN barème n'est lisible, on ne peut pas deviner le poids de
   chaque exercice — mais on sait que ces deux parties comptent chacune pour
   la moitié de l'épreuve. C'est plus juste qu'une pondération uniforme, qui
   ferait peser un problème long autant qu'une question de deux lignes. */
function partieDe(q) {
  const txt = ((q._label || "") + " " + (q.enonce || "") + " " +
               (q.enonce_correction || "")).slice(0, 400)
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  /* Le mot doit TITRER la section, pas apparaître au fil du texte :
     « ce problème se résout par une équation » n'annonce aucune partie.
     On exige donc « problème » en tête, éventuellement précédé de
     « partie », et suivi d'un numéro, d'un tiret ou d'un deux-points. */
  const tete = txt.replace(/^[\s\u2014\-:.]+/, "").slice(0, 60);
  if (/^(partie\s*[a-z0-9]*\s*[:\-\u2014]?\s*)?probleme\b/.test(tete)) return "probleme";
  return "question";
}

/* Répartit les questions en deux parties, et donne le poids de chacune.
   Renvoie null si le sujet n'a pas deux parties distinctes : on retombe
   alors sur la pondération uniforme. */
function poidsParParties(qs) {
  const parts = qs.map(partieDe);
  const nbProb = parts.filter(p => p === "probleme").length;
  const nbQues = parts.length - nbProb;
  if (!nbProb || !nbQues) return null;
  /* Chaque partie vaut 10 points sur 20, répartis également entre ses
     questions. */
  return qs.map((q, i) => parts[i] === "probleme" ? 10 / nbProb : 10 / nbQues);
}

/* ── Navigation : bandeau des questions ──
   L'élève doit pouvoir revenir sur une question passée. Chaque pastille
   montre l'état, et l'on peut cliquer n'importe laquelle. */
function examNavHTML() {
  const cases = EXAM.qs.map((q, i) => {
    const a = EXAM.answers[i];
    const etat = !a ? "vierge" : a.skipped ? "passee" : "faite";
    const titre = !a ? "pas encore traitée" : a.skipped ? "passée — à reprendre" : "déjà validée";
    const ici = i === EXAM.index ? " ici" : "";
    return `<button type="button" class="exam-nav-case ${etat}${ici}" data-go="${i}"
      title="Question ${i + 1} — ${titre}">${i + 1}</button>`;
  }).join("");
  const restantes = EXAM.answers.filter(a => !a || a.skipped).length;
  return `<div class="exam-nav">
      <div class="exam-nav-cases">${cases}</div>
      ${restantes ? `<div class="exam-nav-info">${restantes} question${restantes > 1 ? "s" : ""}
        encore à traiter — clique un numéro pour y revenir.</div>` : ""}
    </div>`;
}

function allerQuestion(i) {
  if (!EXAM || i < 0 || i >= EXAM.qs.length) return;
  EXAM.index = i;
  memoriserExamen();
  paintExamQuestion();
  window.scrollTo(0, 0);
}

function paintExamQuestion() {
  const q = EXAM.qs[EXAM.index];
  const saved = EXAM.answers[EXAM.index];
  const label = qLabel(q, EXAM.index);
  document.getElementById("exam-progress").textContent = `${label} \u2014 ${EXAM.index + 1} / ${EXAM.qs.length}`;
  const pdfBar = EXAM.pdf && EXAM.annale.image_url
    ? `<details class="exam-pdf-bar" open><summary>\ud83d\udcc4 Sujet officiel (PDF) \u2014 clique pour masquer/afficher</summary>`
      + `<iframe class="annale-pdf" style="height:52vh;margin-top:0.6rem" src="${escapeHtml(EXAM.annale.image_url)}#view=FitH" title="Sujet PDF"></iframe>`
      + `<div class="exam-notice" style="margin-top:0.5rem">Le sujet complet (avec les figures) reste consultable ici. Ci-dessous, r\u00e9dige seulement la question demand\u00e9e.</div></details>`
    : "";
  // Sujet PDF : uniquement le numéro de l'exercice et le PDF. Le texte extrait
  // reste en base pour le correcteur (enonce_correction) mais n'est pas affiché.
  const titreQ = `<div class="exam-q-title" style="font-family:'Playfair Display',Georgia,serif;`
    + `font-size:1.35rem;margin:.9rem 0 .3rem">${escapeHtml(label)}</div>`
    + `<div class="exam-notice" style="margin-top:0">Traite <strong>uniquement</strong> cette question dans le sujet ci-dessus, puis r\u00e9dige ta r\u00e9ponse.</div>`;
  const bar = baremeQuestion(q);
  const baremeHTML = bar
    ? `<div class="exam-bareme">Cette question vaut <strong>${String(bar).replace(".", ",")} point${bar > 1 ? "s" : ""}</strong> au barème du sujet.</div>`
    : "";
  document.getElementById("exam-enonce").innerHTML = examNavHTML() + (EXAM.pdf
    ? pdfBar + titreQ + baremeHTML
    : pdfBar + nl2br(q.enonce) + annaleFigure(q.figure) + baremeHTML);
  document.querySelectorAll("[data-go]").forEach(b => {
    b.onclick = () => allerQuestion(Number(b.dataset.go));
  });
  const ta = document.getElementById("exam-answer");
  /* Une question PASSÉE reste ouverte : c'est tout l'intérêt d'y revenir.
     Une question déjà validée, elle, est figée — on ne se corrige pas après
     avoir vu le corrigé. */
  const figee = !!(saved && !saved.skipped);
  ta.value = saved ? saved.answer : "";
  ta.readOnly = figee;
  ta.placeholder = "R\u00e9ponse \u00e0 la question " + (q._label || "").replace(/^.*\u00b7 question /, "") + " \u2026";
  /* Widget de la question, s'il y en a un : tableau à compléter, axe gradué,
     diagramme… En son absence, la page reste en réponse rédigée. */
  if (window.MB_EXAM_WIDGET) {
    const pose = MB_EXAM_WIDGET.monter(q, { corrige: figee });
    const lab = document.getElementById("exam-answer-label");
    if (!pose && lab) lab.textContent = "Ta réponse (rédige comme sur ta copie)";
  }
  document.getElementById("exam-feedback").innerHTML = (saved && saved.result) ? examFeedbackHTML(saved.result) : "";
  document.getElementById("exam-actions").style.display = figee ? "none" : "";
  const next = document.getElementById("exam-next");
  next.style.display = figee ? "" : "none";
  const restantes = EXAM.answers.filter(a => !a || a.skipped).length;
  const derniere = EXAM.index >= EXAM.qs.length - 1;
  next.textContent = derniere
    ? (restantes ? "Terminer malgré " + restantes + " question(s) non traitée(s) →" : "Terminer l'épreuve →")
    : "Question suivante →";
}

async function submitExamAnswer() {
  const ta = document.getElementById("exam-answer");
  /* Quand la question porte un widget, la construction EST une partie de la
     réponse : exiger en plus du texte bloquerait un « complète le tableau »
     qui ne demande aucune rédaction. */
  const plateau = window.MB_EXAM_WIDGET ? MB_EXAM_WIDGET.lire() : null;
  const answer = ta.value.trim();
  if (!answer && !plateau) { showToast("Rédige ta réponse avant de valider.", "error"); return; }
  const q = EXAM.qs[EXAM.index];
  /* Le correcteur ne voit que du texte : on lui joint un résumé de la
     construction, sans quoi il jugerait une réponse vide. */
  const resumePlateau = plateau && window.MB_EXAM_WIDGET ? MB_EXAM_WIDGET.resume() : "";
  const pseudoEx = {
    title: EXAM.annale.title + " \u2014 " + (q._label || ("question " + (EXAM.index + 1))),
    // enonce_correction : texte complet du sujet, non affiché à l'élève
    // (il lit le PDF) mais indispensable au correcteur pour comprendre la question.
    content: q.enonce_correction || q.enonce,
    solution: q.solution || null,
    // La figure du sujet n'est pas visible par le correcteur : on lui transmet
    // sa description textuelle, en FILET DE SÉCURITÉ seulement.
    figure_desc: q.figure_desc || null,
    // Source principale : le serveur rasterise ces pages du PDF et les joint à
    // l'appel, pour que le correcteur voie réellement la figure.
    pages: Array.isArray(q.pages) ? q.pages : null,
    annale_url: EXAM.annale.pdf_serveur || EXAM.annale.image_url || null,
    /* Le barème du sujet : le correcteur note dessus plutôt que d'inventer
       une échelle. */
    bareme: baremeQuestion(q),
  };
  const btn = document.getElementById("exam-validate");
  btn.disabled = true;
  document.getElementById("exam-feedback").innerHTML = `<div class="exam-loading">Le correcteur lit ta copie…</div>`;
  let result;
  try {
    if (DEMO_MODE) {
      await new Promise(r => setTimeout(r, 600));
      result = { verdict: "partial", analyse: "Mode démo : compare ta réponse au corrigé ci-dessous — le serveur Polymates fournira une correction détaillée de ta démarche.", solution: q.solution || "—" };
    } else {
      const envoi = resumePlateau
        ? (answer ? answer + "\n\n" + resumePlateau : resumePlateau)
        : answer;
      const res = await MB_AUTH.apiFetch("/exercises/correct", { method: "POST", body: JSON.stringify({ exercise: pseudoEx, answer: envoi }) });
      if (!res.ok) {
        // On récupère le message réel du serveur au lieu de le perdre.
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || ("HTTP " + res.status));
      }
      result = await res.json();
      if (result.error) throw new Error(result.error);
    }
  } catch (e) {
    console.error("[correction] échec :", e && e.message);
    result = { verdict: "partial", analyse: "Correction indisponible pour l'instant — compare ta copie avec le corrigé. (Détail : " + ((e && e.message) || "erreur inconnue") + ")", solution: q.solution || "—" };
  }
  btn.disabled = false;
  EXAM.answers[EXAM.index] = { answer, result, skipped: false };
  memoriserExamen(true);
  paintExamQuestion();
}

function noteTexte(r) {
  if (!r || r.note === null || r.note === undefined) return "";
  const n = String(r.note).replace(".", ",");
  const b = String(r.bareme).replace(".", ",");
  return n + " / " + b;
}

function examFeedbackHTML(r) {
  const v = ["correct", "partial", "incorrect"].includes(r.verdict) ? r.verdict : "partial";
  const lab = v === "correct" ? "✔ Correct" : v === "incorrect" ? "✘ À revoir" : "± Partiellement juste";
  const note = noteTexte(r);
  const noteHTML = note
    ? `<div class="exam-note ${v}">${note}${r.bareme_du_sujet === false
        ? ` <span class="exam-note-sur">barème estimé</span>` : ""}</div>`
    : "";
  const redac = r.redaction
    ? `<div class="exam-redaction"><strong>Rédaction —</strong> ${escapeHtml(r.redaction)}</div>` : "";
  const sol = r.solution || r.demarche;
  // Correction faite sans la figure du sujet : sur un exercice de géométrie,
  // l'analyse peut être à côté de la plaque. On le dit plutôt que de le cacher.
  const sansFigure = r.figure_vue === false
    ? `<div class="exam-sans-figure">⚠ Le correcteur n'a pas pu voir la figure du sujet : sur un exercice
       de géométrie, fie-toi au corrigé plutôt qu'à l'analyse de ta démarche.</div>`
    : "";
  return `<div class="exam-verdict-ligne"><span class="exam-verdict ${v}">${lab}</span>${noteHTML}</div>
    ${sansFigure}
    ${r.analyse ? `<div class="exam-analyse">${nl2br(r.analyse)}</div>` : ""}
    ${redac}
    ${sol ? `<details class="annale-q-sol" open><summary>Corrigé</summary><div>${nl2br(sol)}</div></details>` : ""}`;
}

function skipExamQuestion() {
  const ta = document.getElementById("exam-answer");
  EXAM.answers[EXAM.index] = { answer: ta.value.trim(), result: null, skipped: true };
  nextExamQuestion();
}

function nextExamQuestion() {
  if (EXAM.index >= EXAM.qs.length - 1) { finishExam(); return; }
  EXAM.index++;
  memoriserExamen();
  paintExamQuestion();
  window.scrollTo(0, 0);
}

/* ── EXAMEN : ④ bilan ── */
function finishExam() {
  clearInterval(examTimer);
  /* Arrivé au bilan : le sujet n'est plus « en cours ». */
  if (EXAM && EXAM.annale && !EXAM.annale.test) oublierExamen(EXAM.annale.id, true);
  examPhase("done");
  /* Bilan « copie unique » : réservé aux sujets PDF dont les questions n'ont
     PAS été découpées. Dès qu'il y a des questions, on passe au bilan noté —
     sans cette précaution, la quasi-totalité des annales y échappait. */
  if (EXAM.pdf && !EXAM.qs.length) {
    const copie = (document.getElementById("exam-answer").value || "").trim();
    const elapsedP = EXAM.start ? Math.round((Date.now() - EXAM.start) / 60000) : 0;
    document.getElementById("examen-done-body").innerHTML = `
      <div class="annale-paper-head">
        <h2>\u00c9preuve termin\u00e9e !</h2>
        <div class="annale-meta">${escapeHtml(EXAM.annale.title)} \u00b7 ${elapsedP} min au chrono${EXAM.annale.duration ? ` (\u00e9preuve officielle : ${EXAM.annale.duration} min)` : ""}</div>
      </div>
      <div class="exam-notice">Tu as compos\u00e9 sur un <strong>sujet officiel</strong> : compare maintenant ta copie au sujet, exercice par exercice, comme le ferait un correcteur.</div>
      ${copie ? `<details class="annale-q-sol" open><summary>Ta copie</summary><div>${nl2br(copie)}</div></details>` : ""}
      <div class="exam-start-row">
        <a class="annale-btn" href="${escapeHtml(EXAM.annale.image_url)}" target="_blank" rel="noopener">\ud83d\udcc4 Revoir le sujet (PDF)</a>
        <button class="annale-btn" onclick="relancerExamen()">\u21bb Recommencer ce sujet</button>
        <button class="annale-btn primary" onclick="showView('annales')">Retour aux annales \u2192</button>
      </div>`;
    return;
  }
  /* ── Bilan noté ──
     On additionne les notes obtenues et les barèmes correspondants. Une
     question passée compte 0 sur son barème : c'est ce que ferait un
     correcteur devant une copie où elle manque.

     LE BARÈME MANQUANT — attention à la pondération. Quand le sujet indique
     « (20 points) » pour certains exercices et rien pour d'autres, leur
     donner 4 par défaut fausse tout : un exercice de 20 points pèserait
     autant qu'un de 4. On estime donc les manquants par la MOYENNE des
     barèmes réellement lus. Si aucun n'est lisible, tous valent 4 : la
     pondération est alors uniforme, ce qui est neutre et honnête. */
  const barsLus = EXAM.qs.map(baremeQuestion).filter(b => b !== null);
  const barDefaut = barsLus.length
    ? Math.round(barsLus.reduce((x, y) => x + y, 0) / barsLus.length * 2) / 2
    : 4;
  const barEstimes = EXAM.qs.length - barsLus.length;

  /* Aucun barème lisible : si le sujet se divise en questions et problèmes,
     chaque partie pèse 10 points sur 20. Sinon, pondération uniforme. */
  const poidsParties = barsLus.length ? null : poidsParParties(EXAM.qs);
  const nbProblemes = poidsParties
    ? EXAM.qs.filter(q => partieDe(q) === "probleme").length : 0;

  let obtenu = 0, total = 0, notees = 0;
  const lignes = EXAM.qs.map((q, i) => {
    const a = EXAM.answers[i];
    const bar = baremeQuestion(q)
      || (poidsParties ? poidsParties[i]
          : (a && a.result && a.result.bareme_du_sujet ? a.result.bareme : barDefaut));
    /* Le correcteur a noté sur SON barème (celui du sujet, ou 4 à défaut).
       Le poids retenu ici peut être différent — 2,5 pour une question, 5 pour
       un problème. On convertit donc la note en PART DE RÉUSSITE, qu'on
       applique au poids : sans cela, un 4/4 compterait 4 points sur un poids
       de 2,5, et la note dépasserait 20. */
    const noteBrute = (a && a.result && typeof a.result.note === "number") ? a.result.note : null;
    const barCorrecteur = (a && a.result && a.result.bareme) || bar;
    const note = noteBrute === null ? null
      : Math.round(noteBrute / barCorrecteur * bar * 100) / 100;
    total += bar;
    if (note !== null) { obtenu += note; notees++; }
    const traitee = a && !a.skipped;
    const cls = !traitee ? "skip"
      : note === null ? "partial"
      : note / bar >= 0.8 ? "correct" : note / bar >= 0.35 ? "partial" : "incorrect";
    const arr = x => String(Math.round(x * 10) / 10).replace(".", ",");
    const etat = !traitee ? "non traitée — 0 / " + arr(bar)
      : note === null ? "corrigée sans note"
      : arr(note) + " / " + arr(bar);
    const detail = traitee ? `
      <details class="exam-bilan-detail">
        <summary>Revoir ma réponse et la correction</summary>
        <div class="exam-bilan-copie"><strong>Ta réponse</strong><div>${nl2br(escapeHtml(a.answer || "—"))}</div></div>
        ${a.result ? examFeedbackHTML(a.result) : ""}
      </details>` : "";
    return `<div class="exam-bilan-ligne ${cls}">
        <div class="exam-bilan-tete">
          <span class="exam-bilan-q">${escapeHtml(qLabel(q, i))}</span>
          <span class="exam-bilan-note ${cls}">${etat}</span>
        </div>${detail}
      </div>`;
  }).join("");

  const elapsed = EXAM.start ? Math.round((Date.now() - EXAM.start) / 60000) : 0;
  const sur20 = total ? Math.round(obtenu / total * 20 * 2) / 2 : null;
  const nonTraitees = EXAM.answers.filter(a => !a || a.skipped).length;

  document.getElementById("examen-done-body").innerHTML = `
    <div class="annale-paper-head">
      <h2>Épreuve terminée</h2>
      <div class="annale-meta">${escapeHtml(EXAM.annale.title)} · ${elapsed} min au chrono${EXAM.annale.duration ? ` (épreuve officielle : ${EXAM.annale.duration} min)` : ""}</div>
    </div>
    <div class="exam-bilan-note-globale">
      <div class="exam-bilan-chiffre">${String(Math.round(obtenu * 10) / 10).replace(".", ",")} <span>/ ${String(Math.round(total * 10) / 10).replace(".", ",")}</span></div>
      ${sur20 !== null ? `<div class="exam-bilan-sur20">soit ${String(sur20).replace(".", ",")} / 20</div>` : ""}
    </div>
    ${nonTraitees ? `<div class="exam-notice">${nonTraitees} question${nonTraitees > 1 ? "s n'ont" : " n'a"} pas été traitée${nonTraitees > 1 ? "s" : ""} : elle${nonTraitees > 1 ? "s comptent" : " compte"} pour zéro, comme sur une vraie copie.</div>` : ""}
    ${notees < EXAM.qs.length - nonTraitees ? `<div class="exam-notice">Certaines questions n'ont pas pu être notées : la note globale ne porte que sur celles qui l'ont été.</div>` : ""}
    ${poidsParties
      ? `<div class="exam-notice">Le sujet n'indique pas de barème. Il a été découpé en deux parties comptant chacune pour 10 points sur 20 : ${EXAM.qs.length - nbProblemes} question${EXAM.qs.length - nbProblemes > 1 ? "s" : ""} d'un côté, ${nbProblemes} problème${nbProblemes > 1 ? "s" : ""} de l'autre.</div>`
      : barEstimes ? `<div class="exam-notice">Le sujet n'indique pas de barème pour ${barEstimes} question${barEstimes > 1 ? "s" : ""} : ${barEstimes > 1 ? "elles ont été comptées" : "elle a été comptée"} sur ${String(barDefaut).replace(".", ",")} point${barDefaut > 1 ? "s" : ""}${barsLus.length ? ", la moyenne des barèmes du sujet" : ""}. La note sur 20 en dépend.</div>` : ""}
    <div class="exam-bilan-liste">${lignes}</div>
    <div class="exam-start-row">
      <button class="annale-btn" onclick="relancerExamen()">↻ Recommencer ce sujet</button>
      <button class="annale-btn primary" onclick="showView('annales')">Retour aux annales →</button>
    </div>
    ${blocSignalement()}`;
  brancherSignalement();
}

/* ── SIGNALER UN PROBLÈME SUR UN EXERCICE D'ENTRAÎNEMENT ──
   Même dispositif que pour les annales, mais rattaché à l'exercice courant :
   l'élève est le seul à voir qu'un énoncé est ambigu ou qu'un corrigé se
   trompe. Le formulaire s'ouvre dans la modale, sans quitter la séance. */
function ouvrirSignalementExercice() {
  /* L'exercice courant de la séance : ces variables sont déclarées plus bas
     dans le fichier, mais les déclarations `let` de haut niveau sont visibles
     partout dans le module. */
  const ex = (typeof seanceExercises !== "undefined" && Array.isArray(seanceExercises))
    ? seanceExercises[seanceIndex] : null;
  if (!ex) { showToast("Aucun exercice en cours.", "error"); return; }

  /* La modale de la séance s'ouvre par « modal-overlay » — c'est ce que fait
     openModal(). Viser un élément « modal » inexistant ne produisait rien. */
  const contenu = document.getElementById("modal-content");
  const overlay = document.getElementById("modal-overlay");
  if (!contenu || !overlay) return;
  contenu.innerHTML = `
    <div class="modal-section">
      <div class="modal-section-label">Signaler une erreur</div>
      <div class="sig-modal">
        <p class="sig-intro">« ${escapeHtml(ex.title || "cet exercice")} »<br>
          Énoncé ambigu, corrigé faux, figure absente, calcul qui ne tombe pas juste…
          Dis-le : c'est ainsi que l'exercice sera corrigé.</p>
        <div class="sig-champ">
          <label for="sigx-type">De quoi s'agit-il ?</label>
          <select id="sigx-type">
            <option value="enonce">L'énoncé est ambigu ou incomplet</option>
            <option value="solution">Le corrigé me paraît faux</option>
            <option value="correction">La correction de ma réponse est injuste</option>
            <option value="figure">La figure est absente ou fausse</option>
            <option value="plateau">Le plateau interactif ne fonctionne pas</option>
            <option value="autre">Autre chose</option>
          </select>
        </div>
        <div class="sig-champ">
          <label for="sigx-message">Explique en quelques mots</label>
          <textarea id="sigx-message" rows="4"
            placeholder="Par exemple : « le corrigé annonce 12 mais je trouve 14 »"></textarea>
        </div>
        <div class="sig-actions">
          <button class="btn-primary" id="sigx-envoyer">Envoyer</button>
          <span class="sig-etat" id="sigx-etat"></span>
        </div>
      </div>
    </div>`;
  overlay.classList.add("open");

  document.getElementById("sigx-envoyer").onclick = async () => {
    const message = (document.getElementById("sigx-message").value || "").trim();
    const etat = document.getElementById("sigx-etat");
    if (message.length < 5) {
      etat.textContent = "Décris le problème en quelques mots.";
      etat.className = "sig-etat erreur";
      return;
    }
    const btn = document.getElementById("sigx-envoyer");
    btn.disabled = true;
    etat.textContent = "Envoi…"; etat.className = "sig-etat";
    try {
      if (DEMO_MODE) { await new Promise(r => setTimeout(r, 400)); }
      else {
        const res = await MB_AUTH.apiFetch("/signalements", {
          method: "POST",
          body: JSON.stringify({
            exercise_id: ex.id,
            exercise_titre: ex.title,
            chapitre: ex.chapitre || null,
            famille: ex.famille || null,
            type: document.getElementById("sigx-type").value,
            message
          })
        });
        const d = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(d.error || ("HTTP " + res.status));
      }
      document.querySelector(".sig-modal").innerHTML =
        `<div class="sig-merci">Merci — ton signalement a bien été transmis.</div>`;
    } catch (e) {
      btn.disabled = false;
      etat.textContent = "Envoi impossible : " + ((e && e.message) || "erreur inconnue");
      etat.className = "sig-etat erreur";
    }
  };
}

/* ── SIGNALER UN PROBLÈME ──
   Après la note, l'élève est le mieux placé pour dire ce qui cloche : un
   énoncé illisible, une figure absente, une correction qui lui paraît fausse.
   Aucun diagnostic automatique ne repère qu'une question est
   incompréhensible ; lui, si. */
function blocSignalement() {
  const questions = EXAM.qs.map((q, i) =>
    `<option value="${escapeHtml(qLabel(q, i))}">${escapeHtml(qLabel(q, i))}</option>`).join("");
  return `
    <details class="sig-bloc" id="sig-bloc">
      <summary>Un problème sur ce sujet ? Signale-le</summary>
      <p class="sig-intro">Énoncé coupé, figure absente, correction qui te paraît fausse,
        note incompréhensible… Dis-le ici : c'est ainsi que le sujet sera corrigé.</p>
      <div class="sig-champ">
        <label for="sig-question">Où ?</label>
        <select id="sig-question">
          <option value="">Le sujet en général</option>
          ${questions}
        </select>
      </div>
      <div class="sig-champ">
        <label for="sig-type">De quoi s'agit-il ?</label>
        <select id="sig-type">
          <option value="enonce">L'énoncé est illisible, coupé ou incompréhensible</option>
          <option value="figure">Une figure ou une annexe manque</option>
          <option value="correction">La correction me paraît fausse</option>
          <option value="note">La note ne me paraît pas juste</option>
          <option value="autre">Autre chose</option>
        </select>
      </div>
      <div class="sig-champ">
        <label for="sig-message">Explique en quelques mots</label>
        <textarea id="sig-message" rows="4"
          placeholder="Par exemple : « à l'exercice 3, la figure du triangle n'apparaît pas »"></textarea>
      </div>
      <div class="sig-actions">
        <button class="annale-btn primary" id="sig-envoyer">Envoyer</button>
        <span class="sig-etat" id="sig-etat"></span>
      </div>
    </details>`;
}

function brancherSignalement() {
  const btn = document.getElementById("sig-envoyer");
  if (!btn) return;
  btn.onclick = async () => {
    const message = (document.getElementById("sig-message").value || "").trim();
    const etat = document.getElementById("sig-etat");
    if (message.length < 5) {
      etat.textContent = "Décris le problème en quelques mots.";
      etat.className = "sig-etat erreur";
      return;
    }
    btn.disabled = true;
    etat.textContent = "Envoi…"; etat.className = "sig-etat";
    try {
      if (DEMO_MODE) {
        await new Promise(r => setTimeout(r, 400));
      } else {
        const res = await MB_AUTH.apiFetch("/signalements", {
          method: "POST",
          body: JSON.stringify({
            annale_id: EXAM.annale.id,
            annale_titre: EXAM.annale.title,
            question: document.getElementById("sig-question").value || null,
            type: document.getElementById("sig-type").value,
            message
          })
        });
        const d = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(d.error || ("HTTP " + res.status));
      }
      document.getElementById("sig-bloc").innerHTML =
        `<div class="sig-merci">Merci — ton signalement a bien été transmis.
         Il sera examiné, et le sujet corrigé si besoin.</div>`;
    } catch (e) {
      btn.disabled = false;
      etat.textContent = "Envoi impossible : " + ((e && e.message) || "erreur inconnue");
      etat.className = "sig-etat erreur";
    }
  };
}

async function loadExercises() {
  const list = document.getElementById("list");
  const empty = document.getElementById("empty-state");
  list.innerHTML = Array(6).fill(0).map(() => `<div class="skeleton"><div class="skel-line" style="height:16px;width:55%"></div><div class="skel-line" style="height:20px;width:85%"></div><div class="skel-line" style="height:14px;width:92%"></div><div class="skel-line" style="height:14px;width:70%"></div></div>`).join("");
  empty.style.display = "none";
  let url = "/exercises";
  if (currentFilter) url += "?level=" + currentFilter;
  url = avecMatiere(url);
  try {
    const res = await MB_AUTH.apiFetch(url);
    if (!res.ok) throw new Error();
    const data = await res.json();
    renderByChapter(data);
  } catch {
    // Serveur injoignable → mode démo local
    DEMO_MODE = true;
    const data = demoDispo()
      ? DEMO_EXERCISES.filter(ex => !currentFilter || ex.level === currentFilter)
      : [];
    renderByChapter(data);
    showToast(demoDispo()
      ? "Mode démo : banque locale (serveur non connecté)."
      : "Mode démo : aucun exercice local en " + MB_MAT.nom + ".", "info");
  }
}

/* ══════════════════════════════════════════════════════════════════════════
   AJOUTER : exercice / problème / annale
   ══════════════════════════════════════════════════════════════════════════ */
/* Matières où l'on n'ajoute plus que des annales : les panneaux « exercice »
   et « problème » n'y sont plus proposés, la banque se remplit à partir des
   sujets déposés en PDF, que l'IA découpe en exercices.
   Pour étendre la règle à une autre matière, ajoute son identifiant ici. */
const AJOUT_ANNALES_SEULEMENT = ["mathematiques", "physique-chimie"];
function annalesSeulement() {
  return AJOUT_ANNALES_SEULEMENT.includes(matiereCourante());
}

let ADD_TYPE = annalesSeulement() ? "annale" : "exercice";
let AN_FILE = null;      // PDF de l'annale
let AN_IMAGES = [];      // ou bien : images PNG/JPEG, une par page, dans l'ordre
let PB_FILES = [];       // PDF joints au problème

/* Prépare la vue « Ajouter » à chaque ouverture : dans les matières
   restreintes, on masque le sélecteur de type et on n'affiche que l'annale. */
function initAddView() {
  const restreint = annalesSeulement();
  const sw = document.getElementById("add-type-switch");
  if (sw) sw.style.display = restreint ? "none" : "";
  const sub = document.getElementById("add-sub");
  if (sub && restreint) {
    sub.textContent = "Tu as un sujet de brevet, de contrôle ou de DS ? Envoie-le en PDF ou en photos (PNG) : "
                    + "après relecture par l'équipe, il rejoindra la banque d'annales.";
  }
  const head = document.querySelector("#view-add .form-page-header h1");
  if (head && restreint) head.innerHTML = "Ajouter un<br><em>sujet.</em>";
  const page = document.querySelector("#view-add .form-page");
  if (page) page.classList.toggle("an-mode", restreint);
  if (restreint) { setAddType("annale"); etatAnnale(); return; }
  backToInput();
}

function setAddType(t) {
  if (annalesSeulement()) t = "annale";   // seul type ouvert dans ces matières
  ADD_TYPE = t;
  ["exercice", "probleme", "annale"].forEach(k => {
    const b = document.getElementById("tb-" + k);
    if (b) b.classList.toggle("active", k === t);
  });
  const aff = (id, on) => { const e = document.getElementById(id); if (e) e.style.display = on ? "block" : "none"; };
  aff("step-input",   t === "exercice");
  aff("pane-probleme", t === "probleme");
  aff("pane-annale",  t === "annale");
  aff("step-result",  false);
}

function litFichier(f) {
  return new Promise((ok, ko) => {
    const r = new FileReader();
    r.onload = () => ok(String(r.result).split(",")[1]);
    r.onerror = () => ko(new Error("Lecture impossible."));
    r.readAsDataURL(f);
  });
}

function brancheDepot(zoneId, inputId, multiple) {
  const zone = document.getElementById(zoneId), input = document.getElementById(inputId);
  if (!zone || !input) return;
  const prendre = liste => {
    /* Ajout d'un sujet : un PDF, ou des images (une par page). */
    if (!multiple) { prendreSujet([...liste]); input.value = ""; return; }
    const pdfs = [...liste].filter(f => /pdf$/i.test(f.type) || /\.pdf$/i.test(f.name));
    if (!pdfs.length) { showToast("Dépose un fichier PDF.", "error"); return; }
    if (multiple) PB_FILES = pdfs; else AN_FILE = pdfs[0];
    const cible = document.getElementById(multiple ? "pb-list" : "an-list");
    if (!multiple) { puceAnnale(pdfs[0]); return; }
    cible.innerHTML = pdfs.map(f =>
      `<div class="dz-file">▤ ${escapeHtml(f.name)} <span>${Math.round(f.size / 1024)} Ko</span></div>`).join("");
  };
  input.onchange = e => prendre(e.target.files);
  ["dragenter", "dragover"].forEach(ev => zone.addEventListener(ev, e => {
    e.preventDefault(); zone.classList.add("over");
  }));
  ["dragleave", "drop"].forEach(ev => zone.addEventListener(ev, e => {
    e.preventDefault(); zone.classList.remove("over");
  }));
  zone.addEventListener("drop", e => prendre(e.dataTransfer.files));
}

/* ── Annale : dépôt du PDF puis analyse ── */
/* ── AJOUT D'UN SUJET (tout compte connecté) ──
   L'élève dépose seulement le PDF et ses informations : le sujet part en
   attente. Le découpage, l'analyse par l'IA, le test et la publication se font
   dans l'administration (admin-sujets.html). */
function sujetPret() { return !!AN_FILE || AN_IMAGES.length > 0; }

function etatAnnale() {
  const btn = document.getElementById("an-btn");
  if (btn) btn.disabled = !sujetPret();
  chargerMesDepots();
}

/* Fichiers déposés pour un sujet : un PDF remplace tout ; des images
   s'ajoutent aux précédentes (on peut déposer les pages en plusieurs fois). */
function prendreSujet(fichiers) {
  const estPdf = f => /pdf$/i.test(f.type) || /\.pdf$/i.test(f.name);
  const estImage = f => /^image\/(png|jpeg)$/i.test(f.type) || /\.(png|jpe?g)$/i.test(f.name);
  const pdf = fichiers.find(estPdf);
  const images = fichiers.filter(estImage);
  if (!pdf && !images.length) { showToast("Dépose un PDF ou des images PNG.", "error"); return; }
  if (pdf) {
    if (images.length) showToast("Un PDF a été choisi : les images déposées en même temps sont ignorées.", "info");
    AN_IMAGES = []; AN_FILE = pdf; puceAnnale(pdf); return;
  }
  AN_FILE = null;
  AN_IMAGES = AN_IMAGES.concat(images.sort((a, b) => a.name.localeCompare(b.name, "fr", { numeric: true })));
  puceImages();
}

/* Les images choisies, numérotées comme les pages du futur PDF. */
function puceImages() {
  const cible = document.getElementById("an-list");
  document.getElementById("an-drop").classList.toggle("rempli", AN_IMAGES.length > 0);
  const btn = document.getElementById("an-btn");
  if (btn) btn.disabled = !sujetPret();
  if (!AN_IMAGES.length) { cible.innerHTML = ""; return; }
  cible.innerHTML = `<div class="an-images" onclick="event.stopPropagation()">
      ${AN_IMAGES.map((f, i) => `<div class="an-image">
        <img src="${URL.createObjectURL(f)}" alt="Page ${i + 1}">
        <span class="an-image-n">p. ${i + 1}</span>
        <button type="button" class="an-fichier-x" aria-label="Retirer cette page" onclick="event.stopPropagation(); retirerImage(${i})">✕</button>
      </div>`).join("")}
      <button type="button" class="an-image-plus" onclick="event.stopPropagation(); document.getElementById('an-file').click()">＋<span>page</span></button>
    </div>
    <div class="an-images-info">${AN_IMAGES.length} image${AN_IMAGES.length > 1 ? "s" : ""} · elles seront assemblées en un PDF de
      ${AN_IMAGES.length} page${AN_IMAGES.length > 1 ? "s" : ""}, dans cet ordre.</div>`;
}
function retirerImage(i) { AN_IMAGES.splice(i, 1); puceImages(); }

/* Assemble des images en un PDF, une image par page, sans bibliothèque :
   chaque image est redessinée en JPEG (taille maîtrisée) puis insérée telle
   quelle dans le PDF (filtre DCTDecode). Tout le reste du circuit — lecture,
   analyse, examen — fonctionne ensuite exactement comme pour un PDF. */
async function imagesEnPdf(fichiers) {
  const MAX = 1800;                                  // côté le plus long, en pixels
  const pages = [];
  for (const f of fichiers) {
    const url = URL.createObjectURL(f);
    const img = await new Promise((ok, ko) => { const i = new Image(); i.onload = () => ok(i); i.onerror = () => ko(new Error("Image illisible : " + f.name)); i.src = url; });
    const k = Math.min(1, MAX / Math.max(img.naturalWidth, img.naturalHeight));
    const w = Math.max(1, Math.round(img.naturalWidth * k)), h = Math.max(1, Math.round(img.naturalHeight * k));
    const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
    const ctx = cv.getContext("2d"); ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h); ctx.drawImage(img, 0, 0, w, h);
    URL.revokeObjectURL(url);
    const blob = await new Promise(ok => cv.toBlob(ok, "image/jpeg", 0.88));
    pages.push({ w, h, jpeg: new Uint8Array(await blob.arrayBuffer()) });
  }
  const enc = new TextEncoder(), morceaux = [], offsets = [];
  let pos = 0;
  const ecrire = x => { const b = typeof x === "string" ? enc.encode(x) : x; morceaux.push(b); pos += b.length; };
  const objet = (n, corps, flux) => {
    offsets[n] = pos;
    ecrire(n + " 0 obj\n" + corps + "\n");
    if (flux) { ecrire("stream\n"); ecrire(flux); ecrire("\nendstream\n"); }
    ecrire("endobj\n");
  };
  ecrire("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n");
  const n = pages.length, kids = [];
  pages.forEach((p, i) => kids.push((3 + i * 3) + " 0 R"));
  objet(1, "<< /Type /Catalog /Pages 2 0 R >>");
  objet(2, "<< /Type /Pages /Count " + n + " /Kids [" + kids.join(" ") + "] >>");
  pages.forEach((p, i) => {
    const pw = 595, ph = Math.round(595 * p.h / p.w);         // largeur A4 en points
    const o = 3 + i * 3;
    const contenu = enc.encode("q " + pw + " 0 0 " + ph + " 0 0 cm /Im0 Do Q");
    objet(o, "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + pw + " " + ph + "] /Resources << /XObject << /Im0 " + (o + 1) + " 0 R >> >> /Contents " + (o + 2) + " 0 R >>");
    objet(o + 1, "<< /Type /XObject /Subtype /Image /Width " + p.w + " /Height " + p.h + " /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length " + p.jpeg.length + " >>", p.jpeg);
    objet(o + 2, "<< /Length " + contenu.length + " >>", contenu);
  });
  const xref = pos, total = 3 + n * 3;
  let table = "xref\n0 " + total + "\n0000000000 65535 f \n";
  for (let i = 1; i < total; i++) table += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
  ecrire(table + "trailer\n<< /Size " + total + " /Root 1 0 R >>\nstartxref\n" + xref + "\n%%EOF\n");
  const sortie = new Uint8Array(pos); let k = 0;
  morceaux.forEach(b => { sortie.set(b, k); k += b.length; });
  return sortie;
}
function enBase64(octets) {
  let s = "";
  for (let i = 0; i < octets.length; i += 0x8000) s += String.fromCharCode.apply(null, octets.subarray(i, i + 0x8000));
  return btoa(s);
}

/* Puce du PDF choisi : nom, taille, nombre de pages (lu par pdf.js). */
function puceAnnale(f) {
  const cible = document.getElementById("an-list");
  document.getElementById("an-drop").classList.toggle("rempli", !!f);
  const btn = document.getElementById("an-btn");
  if (btn) btn.disabled = !sujetPret();
  if (!f) { cible.innerHTML = ""; return; }
  cible.innerHTML = `<div class="an-fichier" onclick="event.stopPropagation()">
      <span class="an-fichier-ico">PDF</span>
      <span class="an-fichier-nom">${escapeHtml(f.name)}</span>
      <span class="an-fichier-info" id="an-fichier-info">${Math.round(f.size / 1024)} Ko</span>
      <button type="button" class="an-fichier-x" aria-label="Retirer le fichier" onclick="event.stopPropagation(); retirerAnnale()">✕</button>
    </div>`;
  if (window.pdfjsLib) f.arrayBuffer()
    .then(buf => pdfjsLib.getDocument({ data: buf }).promise)
    .then(doc => { const i = document.getElementById("an-fichier-info");
      if (i && AN_FILE === f) i.textContent = Math.round(f.size / 1024) + " Ko · " + doc.numPages + " page" + (doc.numPages > 1 ? "s" : ""); })
    .catch(() => {});
}
function retirerAnnale() {
  AN_FILE = null; AN_IMAGES = [];
  const inp = document.getElementById("an-file"); if (inp) inp.value = "";
  puceAnnale(null);
}
function nouvelleAnnale() {
  retirerAnnale();
  ["an-title", "an-year", "an-duration", "an-commentaire"].forEach(id => { const e = document.getElementById(id); if (e) e.value = ""; });
  document.getElementById("an-progress").style.display = "none";
  document.querySelector("#pane-annale .an-form").classList.remove("termine");
}

async function envoyerAnnale() {
  if (!sujetPret()) { showToast("Dépose d'abord le sujet (PDF ou images).", "error"); return; }
  const zone = document.getElementById("an-progress");
  const btn = document.getElementById("an-btn");
  btn.disabled = true;
  zone.style.display = "block";
  zone.innerHTML = `<div class="an-encours"><div class="ai-spinner"></div><div>
      <div class="an-encours-titre">Envoi du sujet…</div></div></div>`;
  try {
    const val = id => (document.getElementById(id) || {}).value || "";
    const res = await MB_AUTH.apiFetch("/depots", {
      method: "POST",
      body: JSON.stringify({
        ...(AN_FILE
          ? { nom: AN_FILE.name, pdf_base64: await litFichier(AN_FILE) }
          : { nom: AN_IMAGES[0].name.replace(/\.(png|jpe?g)$/i, "") + ".pdf",
              pdf_base64: enBase64(await imagesEnPdf(AN_IMAGES)), depuis_images: AN_IMAGES.length }),
        matiere: matiereCourante(),
        title: val("an-title").trim() || null, exam: val("an-exam") || null, classe: val("an-classe") || null,
        year: val("an-year") || null, duration: val("an-duration") || null, commentaire: val("an-commentaire").trim() || null,
      }),
    });
    const d = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(d.error || ("HTTP " + res.status));
    document.querySelector("#pane-annale .an-form").classList.add("termine");
    zone.innerHTML = `
      <div class="an-ok"><span class="an-ok-ico">✓</span><div>
        <div class="an-ok-titre">Merci, ton sujet est envoyé.</div>
        <div class="an-ok-sous">Il est en attente de validation : l'équipe le relit, le prépare et le teste
          avant de le publier dans les annales.</div></div></div>
      <div class="form-actions">
        <button class="btn-ghost" onclick="nouvelleAnnale()">Envoyer un autre sujet</button>
        <button class="btn-ai" onclick="showView('annales')">Voir les annales →</button>
      </div>`;
    AN_FILE = null; AN_IMAGES = [];
    chargerMesDepots();
  } catch (e) {
    zone.innerHTML = `<div class="an-erreur"><b>Envoi impossible</b><span>${escapeHtml(e.message || "erreur inconnue")}</span></div>`;
    btn.disabled = !sujetPret();
  }
}

/* État des sujets que l'élève a envoyés. */
const ETATS_DEPOT = {
  en_attente: "En attente de validation", lu: "En cours de préparation", analyse: "En cours de préparation",
  teste: "En cours de préparation", publie: "Publié", refuse: "Refusé",
};
async function chargerMesDepots() {
  const hote = document.getElementById("an-mes");
  if (!hote || DEMO_MODE || (window.MB_AUTH && MB_AUTH.isDemo && MB_AUTH.isDemo())) return;
  try {
    const res = await MB_AUTH.apiFetch("/depots/mes");
    if (!res.ok) return;
    const liste = await res.json();
    hote.hidden = !liste.length;
    document.getElementById("an-mes-liste").innerHTML = liste.map(d => `
      <li><span class="an-mes-titre">${escapeHtml(d.title || d.nom_fichier)}</span>
        <span class="an-mes-date">${new Date(d.created_at).toLocaleDateString("fr-FR")}</span>
        <span class="an-etat ${d.statut}">${ETATS_DEPOT[d.statut] || d.statut}</span>
        ${d.statut === "refuse" && d.motif_refus ? `<span class="an-mes-motif">${escapeHtml(d.motif_refus)}</span>` : ""}</li>`).join("");
  } catch (_) {}
}

/* ── Problème : vérification qu'il s'agit bien d'un problème ── */
async function verifierProbleme() {
  const titre = document.getElementById("pb-title").value.trim();
  const enonce = document.getElementById("pb-content").value.trim();
  if (enonce.length < 40) { showToast("Rédige d'abord l'énoncé du problème.", "error"); return; }
  const zone = document.getElementById("pb-verdict");
  zone.style.display = "block";
  zone.innerHTML = `<div class="ai-loading"><span class="spinner"></span> Analyse de l'énoncé…</div>`;
  try {
    const res = await MB_AUTH.apiFetch("/problemes/verifier", {
      method: "POST", body: JSON.stringify({ titre, enonce }),
    });
    const d = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(d.error || ("HTTP " + res.status));

    const ok = !!d.est_probleme;
    zone.innerHTML =
      `<div class="${ok ? "ai-ok" : "ai-warn"}">${ok
        ? "C'est bien un problème."
        : "Cela ressemble davantage à un exercice d'application."}</div>
       <p class="ai-just">${escapeHtml(d.justification || "")}</p>
       ${d.notions && d.notions.length
          ? `<div class="ai-stats">Notions : ${d.notions.map(escapeHtml).join(" · ")}</div>` : ""}
       ${!ok && d.conseil ? `<p class="ai-just"><strong>Piste :</strong> ${escapeHtml(d.conseil)}</p>` : ""}
       <div class="form-actions">
         <button class="btn-ghost" onclick="document.getElementById('pb-verdict').style.display='none'">Modifier</button>
         <button class="btn-ai" onclick="enregistrerProbleme(${ok})">
           ${ok ? "Enregistrer le problème" : "Enregistrer quand même"} →</button>
       </div>`;
    PB_VERDICT = d;
  } catch (e) {
    zone.innerHTML = `<div class="ai-err">Vérification impossible : ${escapeHtml(e.message || "")}</div>`;
  }
}



/* Extraction du texte d'un PDF dans le navigateur (pdf.js chargé depuis un CDN).
   Évite de dépendre d'une bibliothèque installée sur le serveur. */
async function extraireTextePdf(file) {
  if (!window.pdfjsLib) return null;
  const buf = await file.arrayBuffer();
  const doc = await pdfjsLib.getDocument({ data: buf }).promise;
  const pages = [];
  for (let n = 1; n <= doc.numPages; n++) {
    const page = await doc.getPage(n);
    const tc = await page.getTextContent();
    // Regroupement par ligne d'après la position verticale des fragments.
    const lignes = new Map();
    for (const it of tc.items) {
      const y = Math.round(it.transform[5]);
      if (!lignes.has(y)) lignes.set(y, []);
      lignes.get(y).push({ x: it.transform[4], s: it.str });
    }
    pages.push([...lignes.keys()].sort((a, b) => b - a)
      .map(y => lignes.get(y).sort((a, b) => a.x - b.x).map(o => o.s).join(" ")
        .replace(/\s+/g, " ").trim())
      .filter(Boolean).join("\n"));
  }
  return pages;
}

/* ── Relecture avant enregistrement : énoncé à gauche, PDF à droite ── */
function ouvrirRelecture(d) {
  const ok = !!d.est_probleme;
  document.getElementById("rv-title").value = d.titre
    || document.getElementById("pb-title").value.trim() || "";
  document.getElementById("rv-content").value = d.enonce || "";
  document.getElementById("rv-verdict").innerHTML =
    (ok ? "\u25cf Vrai problème" : "\u25b2 Ressemble à un exercice d'application")
    + " \u00b7 " + (d.pages_total || "?") + " page(s)"
    + (d.classe ? " \u00b7 " + escapeHtml(d.classe) : "")
    + (d.notions && d.notions.length ? " \u00b7 " + d.notions.map(escapeHtml).join(", ") : "");
  document.getElementById("rv-hint").textContent =
    (d.justification || "") +
    " Relis l'énoncé : l'extraction d'un PDF est imparfaite. Compare avec le document de droite, " +
    "corrige ce qui manque, puis confirme.";
  const cadre = document.getElementById("rv-pdf");
  cadre.src = d.image_url ? ("/" + String(d.image_url).replace(/^\/+/, "") + "#view=FitH") : "about:blank";
  document.getElementById("pb-review").classList.add("open");
  document.body.style.overflow = "hidden";
}

function fermerRelecture() {
  document.getElementById("pb-review").classList.remove("open");
  document.getElementById("rv-pdf").src = "about:blank";
  document.body.style.overflow = "";
}

/* Confirmation : on reprend le texte relu par l'utilisateur, pas celui de l'IA. */
async function confirmerProbleme() {
  const titre  = document.getElementById("rv-title").value.trim();
  const enonce = document.getElementById("rv-content").value.trim();
  if (!titre)  { showToast("Donne un titre au problème.", "error"); return; }
  if (enonce.length < 40) { showToast("L'énoncé est trop court.", "error"); return; }
  document.getElementById("pb-title").value = titre;
  document.getElementById("pb-content").value = enonce;
  fermerRelecture();
  await enregistrerProbleme();
}

let PB_VERDICT = null;
let PB_PDF = null;          // { image_url, figure_desc } du PDF analysé

/* Dépôt d'un problème en PDF : le texte est extrait et remis en forme,
   le PDF reste attaché pour ses figures et annexes. */
async function analyserProblemePdf() {
  if (!PB_FILES.length) { showToast("Dépose d'abord un PDF.", "error"); return; }
  const zone = document.getElementById("pb-verdict");
  zone.style.display = "block";
  zone.innerHTML = `<div class="ai-loading"><span class="spinner"></span>
    Lecture du PDF, remise en forme de l'énoncé et description des figures…</div>`;
  try {
    const f = PB_FILES[0];
    const res = await MB_AUTH.apiFetch("/problemes/depuis-pdf", {
      method: "POST",
      body: JSON.stringify({
        nom: f.name,
        pdf_base64: await litFichier(f),
        pages_texte: await extraireTextePdf(f).catch(() => null),
      }),
    });
    const d = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(d.error || ("HTTP " + res.status));

    if (d.titre && !document.getElementById("pb-title").value.trim())
      document.getElementById("pb-title").value = d.titre;
    document.getElementById("pb-content").value = d.enonce;
    if (d.classe) { const e = document.getElementById("pb-classe"); if (e) e.value = d.classe; }
    PB_PDF = { image_url: d.image_url, figure_desc: d.figures || null };
    PB_VERDICT = d;

    zone.style.display = "none";
    ouvrirRelecture(d);
  } catch (e) {
    zone.innerHTML = `<div class="ai-err">Analyse impossible : ${escapeHtml(e.message || "")}</div>`;
  }
}

async function enregistrerProbleme() {
  const titre = document.getElementById("pb-title").value.trim();
  const enonce = document.getElementById("pb-content").value.trim();
  if (!titre) { showToast("Donne un titre au problème.", "error"); return; }
  const d = PB_VERDICT || {};
  try {
    const res = await MB_AUTH.apiFetch("/exercises", {
      method: "POST",
      body: JSON.stringify({
        title: titre, content: enonce, type: "probleme", matiere: matiereCourante(),
        level: "college", classe: d.classe || document.getElementById("pb-classe").value,
        subject: document.getElementById("pb-subject").value,
        difficulty: d.difficulte || "Moyen",
        chapitre: (d.notions && d.notions[0]) || null,
        solution: null,
        image_url:   PB_PDF ? PB_PDF.image_url   : null,
        figure_desc: PB_PDF ? PB_PDF.figure_desc : null,
      }),
    });
    if (!res.ok) throw new Error();
    showToast("Problème ajouté.", "success");
    PB_FILES = []; PB_VERDICT = null; PB_PDF = null;
    document.getElementById("pb-title").value = "";
    document.getElementById("pb-content").value = "";
    document.getElementById("pb-list").innerHTML = "";
    document.getElementById("pb-verdict").style.display = "none";
    showView("browse");
  } catch { showToast("Erreur lors de l'ajout.", "error"); }
}

document.addEventListener("DOMContentLoaded", () => {
  brancheDepot("an-drop", "an-file", false);
  brancheDepot("pb-drop", "pb-files", true);
  // Les libellés qui annonçaient « exercice, problème ou annale » deviennent
  // faux là où seule l'annale reste ouverte : on les recale au chargement.
  if (annalesSeulement()) {
    const d = document.getElementById("home-add-desc");
    if (d) d.textContent = "Envoyer le PDF d'un sujet : après relecture, il rejoint la banque d'annales.";
    const b = document.getElementById("empty-add-btn");
    if (b) b.textContent = "Ajouter une annale →";
  }
  /* Séance lancée depuis le tableau de bord : le ciblage voyage dans l'URL.
     Différé d'un tour de boucle pour que le catalogue et les filtres soient
     construits avant que startSeance ne les lise. */
  const cible = lireCiblageUrl();
  if (cible) setTimeout(() => seanceCiblee(cible), 0);
  else ouvrirDepuisUrl();
});

/* L'arbre des connaissances renvoie ici avec ?vue=… et parfois ?chapitre=…
   Exemples : app.html?vue=annales, app.html?vue=exercices&chapitre=Thalès */
function ouvrirDepuisUrl() {
  const p = new URLSearchParams(location.search);
  const vue = p.get("vue");
  if (!vue) return;
  const chapitre = p.get("chapitre");
  // On laisse la page finir de se construire avant de changer de vue.
  setTimeout(() => {
    if (vue === "annales") { showView("annales"); return; }
    if (vue === "exercices" || vue === "browse") {
      showView("browse");
      // S'il existe un champ de recherche, on le pré-remplit avec le chapitre.
      if (chapitre) {
        const champ = document.querySelector('#browse input[type="search"], #browse input[type="text"]');
        if (champ) {
          champ.value = chapitre;
          champ.dispatchEvent(new Event("input", { bubbles: true }));
          showToast("Filtré sur « " + chapitre + " »", "success");
        }
      }
    }
  }, 120);
}


async function analyseExercise() {
  const title   = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  if (!title || !content) { showToast("Le titre et l'énoncé sont obligatoires.", "error"); return; }
  pendingExercise = { title, content, level: document.getElementById("level").value, subject: document.getElementById("subject").value, difficulty: document.getElementById("difficulty").value, solution: null };   // plus de champ Solution : la correction IA suffit
  document.getElementById("step-input").style.display = "none";
  document.getElementById("step-result").style.display = "block";
  document.getElementById("ai-loading").style.display = "flex";
  document.getElementById("ai-doublon").style.display = "none";
  document.getElementById("ai-suggestions").style.display = "none";
  try {
    const res  = await MB_AUTH.apiFetch("/exercises/analyse", { method:"POST", body: JSON.stringify({title,content}) });
    const data = await res.json();
    document.getElementById("ai-loading").style.display = "none";
    if (data.doublon) {
      document.getElementById("ai-doublon").style.display = "block";
      document.getElementById("ai-doublon-detail").innerHTML = `<strong>Raison :</strong> ${escapeHtml(data.doublon_raison||"Contenu très similaire.")}${data.doublon_id?`<br><strong>Exercice similaire :</strong> #${String(data.doublon_id).padStart(3,'0')}`:""}`;
    } else {
      document.getElementById("ai-suggestions").style.display = "block";
      document.getElementById("ai-classe").textContent    = data.classe    || "Non détecté";
      document.getElementById("ai-chapitre").textContent  = data.chapitre  || "Non détecté";
      document.getElementById("ai-difficulte").textContent = data.suggestion_difficulte || pendingExercise.difficulty;
      document.getElementById("ai-classe-input").value   = data.classe    || "";
      document.getElementById("ai-chapitre-input").value = data.chapitre  || "";
      pendingExercise.difficulty = data.suggestion_difficulte || pendingExercise.difficulty;
      pendingExercise.type = (data.type === "probleme") ? "probleme" : "exercice";
      // Type d'exercice détecté : sert au regroupement dans les chapitres.
      pendingExercise.famille = data.famille || null;
      const champFam = document.getElementById("ai-famille");
      if (champFam) champFam.textContent = data.famille || "Non détecté";
      const saisieFam = document.getElementById("ai-famille-input");
      if (saisieFam) saisieFam.value = data.famille || "";
    }
  } catch { document.getElementById("ai-loading").style.display="none"; showToast("Erreur lors de l'analyse IA.","error"); backToInput(); }
}

async function confirmAdd() {
  if (!pendingExercise) return;
  pendingExercise.classe   = document.getElementById("ai-classe-input").value.trim()   || document.getElementById("ai-classe").textContent;
  pendingExercise.chapitre = document.getElementById("ai-chapitre-input").value.trim() || document.getElementById("ai-chapitre").textContent;
  // La famille peut être corrigée à la main avant enregistrement.
  const famSaisie = document.getElementById("ai-famille-input");
  const famVue    = document.getElementById("ai-famille");
  const fam = (famSaisie && famSaisie.value.trim())
    || (famVue && famVue.textContent !== "Non détecté" ? famVue.textContent.trim() : "");
  pendingExercise.famille = fam || null;
  await submitExercise(pendingExercise);
}

async function forceAdd() {
  if (!pendingExercise) return;
  await submitExercise(pendingExercise);
}

async function submitExercise(data) {
  try {
    data = Object.assign({}, data, { matiere: matiereCourante() });
    const res = await MB_AUTH.apiFetch("/exercises", { method:"POST", body:JSON.stringify(data) });
    if (!res.ok) throw new Error();
    pendingExercise = null;
    showToast("Exercice ajouté avec succès !", "success");
    showView("browse");
  } catch { showToast("Erreur lors de l'ajout.", "error"); }
}

function backToInput() {
  // Dans les matières réservées aux annales, le formulaire « exercice »
  // n'existe plus : on ne le fait jamais réapparaître.
  document.getElementById("step-input").style.display = annalesSeulement() ? "none" : "block";
  document.getElementById("step-result").style.display = "none";
}

function openModal(ex) {
  const levelLabel = LEVEL_LABELS[ex.level] || ex.level;
  const diffTag    = ex.difficulty ? `<span class="tag tag-${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>` : "";
  const subjectTag = ex.subject    ? `<span class="tag tag-subject">${ex.subject}</span>` : "";
  const classeTag  = ex.classe     ? `<span class="tag tag-classe">${ex.classe}</span>` : "";
  const chapTag    = ex.chapitre   ? `<span class="tag tag-chapitre">${ex.chapitre}</span>` : "";
  const solutionHtml = ex.solution ? `<div class="modal-section"><div class="modal-section-label solution-toggle" onclick="toggleSolution(this)"><span>Solution</span><span class="solution-toggle-arrow">▼ Afficher</span></div><div class="solution-body"><div class="modal-section-text">${escapeHtml(ex.solution)}</div></div></div>` : "";
  const classHtml = (ex.classe||ex.chapitre) ? `<div class="modal-section"><div class="modal-section-label">Classification IA</div><div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.3rem">${classeTag}${chapTag}</div></div>` : "";
  document.getElementById("modal-content").innerHTML = `
    <div class="modal-tags"><span class="tag tag-${ex.level}">${levelLabel}</span>${diffTag}${subjectTag}</div>
    <div class="modal-title">${escapeHtml(ex.title)}</div>
    ${classHtml}
    <div class="modal-section"><div class="modal-section-label">Énoncé</div><div class="modal-section-text">${escapeHtml(ex.content)}</div></div>
    ${solutionHtml}
    ${estAdmin() ? `<div class="modal-delete-zone"><button class="btn-delete" onclick="deleteExercise(${ex.id})" title="R\u00e9serv\u00e9 aux administrateurs">Supprimer cet exercice</button></div>` : ""}`;
  document.getElementById("modal-overlay").classList.add("open");
  apercuInteractif(ex);
}

/* ═══ EXERCICES INTERACTIFS ═══
   Le champ `interactif` décrit un plateau : { widget, …, reponse }.
   Deux usages, volontairement séparés :
     · au CATALOGUE, on montre seulement la figure à compléter (aperçu figé) ;
     · en SÉANCE, l'élève construit sa réponse sur le plateau, et la
       correction est locale — la réponse attendue est connue, la comparaison
       est exacte, aucun appel au correcteur IA n'est nécessaire. */
function litInteractif(ex) {
  let p = ex && ex.interactif;
  if (!p) return null;
  if (typeof p === "string") { try { p = JSON.parse(p); } catch (e) { return null; } }
  return (p && p.widget === "quadrillage" && window.MB_QUADRILLAGE) ? p : null;
}

/* FIGURE : reconnaissance sur une figure géométrique, corrigée localement. */
function litFigure(ex) {
  let p = ex && ex.interactif;
  if (!p) return null;
  if (typeof p === "string") { try { p = JSON.parse(p); } catch (e) { return null; } }
  return (p && p.widget === "figure" && window.MB_FIGURE) ? p : null;
}

function apercuFigure(ex) {
  const params = litFigure(ex);
  if (!params) return false;
  const contenu = document.getElementById("modal-content");
  if (!contenu) return false;
  let cible = null;
  contenu.querySelectorAll(".modal-section").forEach(sec => {
    const lab = sec.querySelector(".modal-section-label");
    if (lab && lab.textContent.trim().toLowerCase().indexOf("nonc") >= 0) cible = sec;
  });
  const boite = document.createElement("div");
  if (cible) {
    const lab = cible.querySelector(".modal-section-label");
    if (lab) lab.textContent = "Figure";
    const txt = cible.querySelector(".modal-section-text");
    if (txt) txt.remove();
    cible.appendChild(boite);
  } else {
    const b = document.createElement("div");
    b.className = "modal-section";
    b.innerHTML = '<div class="modal-section-label">Figure</div>';
    b.appendChild(boite);
    contenu.appendChild(b);
  }
  MB_FIGURE.installerApercu(params, boite);
  return true;
}

/* TABLEAU : plateau à compléter, corrigé localement (les valeurs attendues
   sont connues, la comparaison est exacte à 10⁻⁶ près). */
function litTableau(ex) {
  let p = ex && ex.interactif;
  if (!p) return null;
  if (typeof p === "string") { try { p = JSON.parse(p); } catch (e) { return null; } }
  return (p && p.widget === "tableau" && window.MB_TABLEAU) ? p : null;
}

function apercuTableau(ex) {
  const params = litTableau(ex);
  if (!params) return false;
  const contenu = document.getElementById("modal-content");
  if (!contenu) return false;
  const boite = document.createElement("div");
  let cible = null;
  contenu.querySelectorAll(".modal-section").forEach(sec => {
    const lab = sec.querySelector(".modal-section-label");
    if (lab && lab.textContent.trim().toLowerCase().indexOf("nonc") >= 0) cible = sec;
  });
  if (cible) cible.appendChild(boite);
  else {
    const b = document.createElement("div");
    b.className = "modal-section";
    b.innerHTML = '<div class="modal-section-label">Tableau</div>';
    b.appendChild(boite);
    contenu.appendChild(b);
  }
  MB_TABLEAU.installerApercu(params, boite);
  return true;
}

/* AXE GRADUÉ : plateau de placement de points, corrigé localement comme le
   quadrillage — la réponse attendue est connue, la comparaison est exacte. */
function litAxe(ex) {
  let p = ex && ex.interactif;
  if (!p) return null;
  if (typeof p === "string") { try { p = JSON.parse(p); } catch (e) { return null; } }
  return (p && p.widget === "axe" && window.MB_AXE) ? p : null;
}

/* place l'axe dans la modale, à la place de l'énoncé */
function apercuAxe(ex) {
  const params = litAxe(ex);
  if (!params) return false;
  const contenu = document.getElementById("modal-content");
  if (!contenu) return false;
  let cible = null;
  contenu.querySelectorAll(".modal-section").forEach(sec => {
    const lab = sec.querySelector(".modal-section-label");
    if (lab && lab.textContent.trim().toLowerCase().indexOf("nonc") >= 0) cible = sec;
  });
  const boite = document.createElement("div");
  if (cible) {
    const lab = cible.querySelector(".modal-section-label");
    if (lab) lab.textContent = "Axe gradué";
    const txt = cible.querySelector(".modal-section-text");
    if (txt) txt.remove();
    cible.appendChild(boite);
  } else {
    const b = document.createElement("div");
    b.className = "modal-section";
    b.innerHTML = '<div class="modal-section-label">Axe gradué</div>';
    b.appendChild(boite);
    contenu.appendChild(b);
  }
  MB_AXE.installerApercu(params, boite);
  return true;
}

/* Figures de SOLIDES : une image, pas un plateau. L'élève répond dans son
   brouillon et la correction reste celle de l'IA. */
function litSolide(ex) {
  let p = ex && ex.interactif;
  if (!p) return null;
  if (typeof p === "string") { try { p = JSON.parse(p); } catch (e) { return null; } }
  return (p && p.widget === "solide" && window.MB_SOLIDES) ? p : null;
}

/* place la figure dans la modale, à la place de l'énoncé */
function apercuSolide(ex) {
  const params = litSolide(ex);
  if (!params) return false;
  const contenu = document.getElementById("modal-content");
  if (!contenu) return false;
  let cible = null;
  contenu.querySelectorAll(".modal-section").forEach(sec => {
    const lab = sec.querySelector(".modal-section-label");
    if (lab && lab.textContent.trim().toLowerCase().indexOf("nonc") >= 0) cible = sec;
  });
  const boite = document.createElement("div");
  if (cible) {
    const lab = cible.querySelector(".modal-section-label");
    if (lab) lab.textContent = "Figure";
    const txt = cible.querySelector(".modal-section-text");
    if (txt) txt.remove();
    cible.appendChild(boite);
  } else {
    const b = document.createElement("div");
    b.className = "modal-section";
    b.innerHTML = '<div class="modal-section-label">Figure</div>';
    b.appendChild(boite);
    contenu.appendChild(b);
  }
  MB_SOLIDES.installer(params, boite);
  return true;
}

/* ═══ DIAGRAMMES ═══
   Un champ `reponse` distingue les deux usages : présent, l'exercice est une
   CONSTRUCTION corrigée localement ; absent, c'est une LECTURE dont la
   réponse est rédigée au brouillon et corrigée par l'IA. */
function litDiagramme(ex) {
  let p = ex && ex.interactif;
  if (!p) return null;
  if (typeof p === "string") { try { p = JSON.parse(p); } catch (e) { return null; } }
  return (p && p.widget === "diagramme" && window.MB_DIAGRAMME) ? p : null;
}
const estConstruction = p => !!(p && p.reponse);

function apercuDiagramme(ex) {
  const params = litDiagramme(ex);
  if (!params) return false;
  const contenu = document.getElementById("modal-content");
  if (!contenu) return false;
  let cible = null;
  contenu.querySelectorAll(".modal-section").forEach(function (sec) {
    const lab = sec.querySelector(".modal-section-label");
    if (lab && lab.textContent.trim().toLowerCase().indexOf("nonc") >= 0) cible = sec;
  });
  const boite = document.createElement("div");
  if (cible && !estConstruction(params)) {
    const lab = cible.querySelector(".modal-section-label");
    if (lab) lab.textContent = "Diagramme";
    cible.appendChild(boite);
  } else {
    const b = document.createElement("div");
    b.className = "modal-section";
    b.innerHTML = '<div class="modal-section-label">Repr\u00e9sentation attendue</div>';
    b.appendChild(boite);
    const secs = contenu.querySelectorAll(".modal-section");
    const apres = cible || secs[secs.length - 1];
    if (apres && apres.parentNode) apres.parentNode.insertBefore(b, apres.nextSibling);
    else contenu.appendChild(b);
  }
  MB_DIAGRAMME.installerApercu(estConstruction(params)
    ? Object.assign({}, params, { valeurs: params.reponse.valeurs, type: params.reponse.type })
    : params, boite);
  return true;
}

let plateauDiagramme = null;
function diagrammeSeance(ex) {
  const ancien = document.getElementById("mbd-seance");
  if (ancien) ancien.remove();
  plateauDiagramme = null;
  const params = litDiagramme(ex);
  if (!params) return false;
  const zone = document.getElementById("page-answer");
  const ta = document.getElementById("session-answer");
  const label = document.getElementById("page-answer-label");
  const boite = document.createElement("div");
  boite.id = "mbd-seance";
  if (estConstruction(params)) {
    if (ta) ta.style.display = "none";
    if (label) label.textContent = "Construis la repr\u00e9sentation";
    zone.appendChild(boite);
    plateauDiagramme = MB_DIAGRAMME.installer(params, boite);
    const v = boite.querySelector('[data-a="valider"]');
    if (v) v.style.display = "none";
  } else {
    if (ta) ta.style.display = "";
    boite.style.marginBottom = "0.8rem";
    zone.insertBefore(boite, zone.firstChild);
    MB_DIAGRAMME.installerApercu(params, boite);
  }
  return true;
}

function corrigerDiagramme(ex) {
  const params = litDiagramme(ex);
  if (!params || !estConstruction(params) || !plateauDiagramme) return null;
  const inst = plateauDiagramme.instance();
  const r = MB_DIAGRAMME.verifier(inst.lire(), params.reponse);
  inst.corriger(params.reponse);
  const nom = (MB_DIAGRAMME.NOM_TYPE[params.reponse.type] || "la repr\u00e9sentation attendue").toLowerCase();
  if (!r.bonType) return {
    verdict: "incorrect",
    analyse: "La repr\u00e9sentation choisie ne convient pas ici : il fallait construire " + nom + ".",
    demarche: "Une \u00e9volution dans le temps appelle un graphique ; une r\u00e9partition \u00e0 un instant donn\u00e9 appelle un diagramme.",
    solution: ex.solution || "", score: 0 };
  const b = [];
  if (r.justes) b.push(r.justes + " valeur" + (r.justes > 1 ? "s" : "") + " juste" + (r.justes > 1 ? "s" : ""));
  if (r.manques) b.push(r.manques + " manquante" + (r.manques > 1 ? "s" : ""));
  if (r.faux) b.push(r.faux + " incorrecte" + (r.faux > 1 ? "s" : ""));
  return {
    verdict: r.ok ? "correct" : (r.score >= 0.6 ? "partial" : "incorrect"),
    analyse: r.ok ? "Ta repr\u00e9sentation est exacte."
      : "Sur " + r.attendus + " valeur" + (r.attendus > 1 ? "s" : "") + " attendue" +
        (r.attendus > 1 ? "s" : "") + " : " + (b.join(", ") || "rien de pos\u00e9") + ".",
    demarche: "On reporte chaque donn\u00e9e de l'\u00e9nonc\u00e9 sur le rep\u00e8re, en respectant la graduation.",
    solution: ex.solution || "", score: r.score };
}

function apercuInteractif(ex) {
  if (apercuDiagramme(ex)) return;
  if (apercuFigure(ex)) return;
  if (apercuTableau(ex)) return;
  if (apercuAxe(ex)) return;
  if (apercuSolide(ex)) return;
  const params = litInteractif(ex);
  if (!params) return;
  const contenu = document.getElementById("modal-content");
  if (!contenu) return;

  /* On cherche le bloc « Énoncé » par son intitulé : c'est plus robuste que
     de compter les sections, dont le nombre varie selon les exercices. */
  const remplaceEnonce = true;
  let cible = null;
  contenu.querySelectorAll(".modal-section").forEach(sec => {
    const lab = sec.querySelector(".modal-section-label");
    if (lab && lab.textContent.trim().toLowerCase().indexOf("nonc") >= 0) cible = sec;
  });

  const boite = document.createElement("div");
  if (cible && remplaceEnonce) {
    /* la figure PREND LA PLACE du texte : au catalogue, c'est elle qu'on
       vient regarder. L'énoncé reste en base et s'affiche en séance. */
    const lab = cible.querySelector(".modal-section-label");
    if (lab) lab.textContent = "Figure";
    const txt = cible.querySelector(".modal-section-text");
    if (txt) txt.remove();
    cible.appendChild(boite);
  } else {
    const bloc = document.createElement("div");
    bloc.className = "modal-section";
    bloc.innerHTML = '<div class="modal-section-label">Figure</div>';
    bloc.appendChild(boite);
    const secs = contenu.querySelectorAll(".modal-section");
    const apres = cible || secs[secs.length - 1];
    if (apres && apres.parentNode) apres.parentNode.insertBefore(bloc, apres.nextSibling);
    else contenu.appendChild(bloc);
  }
  MB_QUADRILLAGE.installerApercu(params, boite);
}

/* Plateau de séance : monté dans la zone de brouillon, qui est masquée.
   Renseigne seanceHistory au même format que le correcteur IA. */
let plateauSeance = null;
let plateauAxe = null;
let plateauTableau = null;
let plateauFigure = null;
function plateauInteractif(ex, hist) {
  if (diagrammeSeance(ex)) {
    if (hist && hist.result && plateauDiagramme) {
      const pd = litDiagramme(ex);
      if (pd && pd.reponse) plateauDiagramme.instance().corriger(pd.reponse);
    }
    return;
  }

  /* Figure : le plateau s'ajoute au-dessus du brouillon, que l'élève garde
     pour justifier sa réponse (le codage qui l'a mis sur la voie). */
  const ancienF = document.getElementById("mbf-seance");
  if (ancienF) ancienF.remove();
  plateauFigure = null;
  const pfig = litFigure(ex);
  if (pfig) {
    const zone = document.getElementById("page-answer");
    const ta = document.getElementById("session-answer");
    const label = document.getElementById("page-answer-label");
    if (ta) ta.style.display = "";
    if (label) label.textContent = "Lis la figure, puis rédige ta réponse";
    const boite = document.createElement("div");
    boite.id = "mbf-seance";
    boite.style.marginBottom = "1rem";
    zone.insertBefore(boite, ta || zone.firstChild);
    /* La figure est affichée SEULE : plus de questions à choix sous le dessin.
       L'élève lit la figure et rédige sa réponse dans le brouillon, comme sur
       une copie. La correction revient donc au correcteur habituel. */
    MB_FIGURE.installerApercu(pfig, boite, { papier: true });
    return;
  }

  /* Tableau : le plateau s'ajoute AU-DESSUS du brouillon. L'élève complète
     les cases, et peut encore rédiger une justification en dessous. */
  const ancienT = document.getElementById("mbt-seance");
  if (ancienT) ancienT.remove();
  plateauTableau = null;
  const pt = litTableau(ex);
  if (pt) {
    const zone = document.getElementById("page-answer");
    const label = document.getElementById("page-answer-label");
    if (label) label.textContent = "Complète le tableau";
    const boite = document.createElement("div");
    boite.id = "mbt-seance";
    boite.style.marginBottom = "1rem";
    zone.insertBefore(boite, zone.firstChild);
    plateauTableau = MB_TABLEAU.installer(pt, boite, { papier: true });   // page de séance
    if (hist && hist.result) plateauTableau.instance().corriger(pt.reponse);
    return;
  }

  /* Axe gradué : le plateau s'ajoute AU-DESSUS du brouillon, sans le masquer.
     Placer les points ne suffit pas — l'énoncé demande aussi une distance, une
     abscisse ou une comparaison, que l'élève doit pouvoir rédiger. */
  const ancienA = document.getElementById("mba-seance");
  if (ancienA) ancienA.remove();
  plateauAxe = null;
  const pa = litAxe(ex);
  if (pa) {
    const zone = document.getElementById("page-answer");
    const ta = document.getElementById("session-answer");
    const label = document.getElementById("page-answer-label");
    if (ta) ta.style.display = "";                       // le brouillon reste
    if (label) label.textContent = "Place les points, puis rédige ta réponse";
    const boite = document.createElement("div");
    boite.id = "mba-seance";
    boite.style.marginBottom = "1rem";
    zone.insertBefore(boite, ta || zone.firstChild);
    plateauAxe = MB_AXE.installer(pa, boite, { papier: true });   // page de séance : fond beige
    if (hist && hist.result) plateauAxe.instance().corriger(pa.reponse);
    return;
  }

  /* Solide : on affiche la figure au-dessus du brouillon, sans masquer
     celui-ci — c'est là que l'élève rédige sa réponse. */
  const ancienS = document.getElementById("mbs-seance");
  if (ancienS) ancienS.remove();
  const ps = litSolide(ex);
  if (ps) {
    const zone = document.getElementById("page-answer");
    const ta = document.getElementById("session-answer");
    if (ta) ta.style.display = "";
    const boite = document.createElement("div");
    boite.id = "mbs-seance";
    boite.style.marginBottom = "0.8rem";
    zone.insertBefore(boite, zone.firstChild);
    MB_SOLIDES.installer(ps, boite, { papier: true });   // page de séance : fond beige
    return;
  }

  const zone = document.getElementById("page-answer");
  const ta = document.getElementById("session-answer");
  const label = document.getElementById("page-answer-label");
  const ancien = document.getElementById("mbq-seance");
  if (ancien) ancien.remove();
  plateauSeance = null;

  const params = litInteractif(ex);
  if (!params) { if (ta) ta.style.display = ""; return; }

  if (ta) ta.style.display = "none";
  label.textContent = hist && (hist.result || hist.skipped) ? "Ta construction" : "Construis la figure";
  const boite = document.createElement("div");
  boite.id = "mbq-seance";
  zone.appendChild(boite);
  plateauSeance = MB_QUADRILLAGE.installer(params, boite, { papier: true });

  /* le bouton « Valider » du plateau fait double emploi avec « Corriger » */
  const v = boite.querySelector('[data-a="valider"]');
  if (v) v.style.display = "none";
  if (hist && hist.result && plateauSeance.instance)
    plateauSeance.instance().corriger(params.reponse);
}

/* Correction locale d'un exercice interactif : renvoie le même objet que
   la route /exercises/correct, pour que la page de droite ne change pas. */
function corrigerInteractif(ex) {
  /* Tableau : correction locale, sans appel au correcteur IA. */
  const pt = litTableau(ex);
  if (pt && plateauTableau) {
    const inst = plateauTableau.instance();
    const r = MB_TABLEAU.verifier(inst.lire(), pt.reponse);
    inst.corriger(pt.reponse);
    const m = [];
    if (r.justes) m.push(r.justes + " case" + (r.justes > 1 ? "s" : "") + " juste" + (r.justes > 1 ? "s" : ""));
    if (r.faux) m.push(r.faux + " erreur" + (r.faux > 1 ? "s" : ""));
    if (r.vides) m.push(r.vides + " case" + (r.vides > 1 ? "s" : "") + " laissée" + (r.vides > 1 ? "s" : "") + " vide" + (r.vides > 1 ? "s" : ""));
    if (r.choixOk === false) m.push("la réponse à la question est fausse");
    if (r.calcul && !r.calcul.ok) m.push("le calcul écrit : " + r.calcul.raison);
    return {
      verdict: r.ok ? "correct" : (r.score >= 0.6 ? "partial" : "incorrect"),
      analyse: r.ok
        ? "Tableau complété correctement" + (r.calcul ? ", et le calcul est bien posé." : ".")
        : "Résultat : " + (m.join(", ") || "rien de rempli") + ".",
      demarche: pt.calcul
        ? "Dans un tableau de proportionnalité, on passe d'une colonne à l'autre en multipliant par le coefficient, ou on utilise le produit en croix : le produit des diagonales est le même."
        : "On complète le tableau colonne par colonne, en gardant le même rapport entre les deux lignes.",
      solution: ex.solution || "",
      score: r.score
    };
  }

  /* Axe gradué : correction locale, sans appel au correcteur IA. */
  const pa = litAxe(ex);
  if (pa && plateauAxe) {
    const inst = plateauAxe.instance();
    const r = MB_AXE.verifier(inst.lire(), pa.reponse);
    inst.corriger(pa.reponse);
    const m = [];
    if (r.justes) m.push(r.justes + " bien placé" + (r.justes > 1 ? "s" : ""));
    if (r.manques) m.push(r.manques + " oubli" + (r.manques > 1 ? "s" : ""));
    if (r.faux) m.push(r.faux + " mal placé" + (r.faux > 1 ? "s" : ""));

    /* La réponse rédigée compte aussi : placer les points ne répond pas à la
       question posée (une distance, une abscisse, une comparaison). Quand la
       valeur attendue est connue, on la cherche dans le brouillon. */
    let ecrit = null;
    if (pa.attendu && typeof pa.attendu.valeur === "number") {
      const ta = document.getElementById("session-answer");
      const txt = (ta && ta.value) || "";
      const nums = (txt.match(/-?−?\d+(?:[.,]\d+)?/g) || [])
        .map(x => Number(x.replace("−", "-").replace(",", ".")));
      ecrit = nums.some(n => Math.abs(n - pa.attendu.valeur) < 1e-6);
      if (!txt.trim()) ecrit = null;                    // rien d'écrit
    }

    const parts = 1 + (ecrit === null ? 0 : 1);
    const score = (r.score + (ecrit === true ? 1 : 0)) / parts;
    const ok = r.ok && ecrit !== false;

    return {
      verdict: ok ? "correct" : (score >= 0.6 ? "partial" : "incorrect"),
      analyse: (r.ok
        ? "Chaque point est sur la bonne graduation."
        : "Sur " + r.attendus + " point" + (r.attendus > 1 ? "s" : "") + " attendu" +
          (r.attendus > 1 ? "s" : "") + " : " + (m.join(", ") || "rien de placé") + ".") +
        (ecrit === true ? " Ta réponse rédigée est juste."
         : ecrit === false ? " En revanche, la valeur que tu as écrite ne correspond pas."
         : pa.attendu ? " Pense à écrire ta réponse dans le brouillon : elle fait partie de la note." : ""),
      demarche: "Sur une droite graduée, l'abscisse se lit en comptant les graduations " +
        "depuis l'origine : vers la droite pour les positifs, vers la gauche pour les négatifs.",
      solution: ex.solution || "",
      score: score
    };
  }

  const params = litInteractif(ex);
  if (!params || !plateauSeance) return null;
  const inst = plateauSeance.instance();
  const r = MB_QUADRILLAGE.verifier(inst.lire(), params.reponse);
  inst.corriger(params.reponse);
  const morceaux = [];
  if (r.justes) morceaux.push(r.justes + " élément" + (r.justes > 1 ? "s" : "") + " juste" + (r.justes > 1 ? "s" : ""));
  if (r.manques) morceaux.push(r.manques + " oubli" + (r.manques > 1 ? "s" : ""));
  if (r.faux) morceaux.push(r.faux + " en trop");
  return {
    verdict: r.ok ? "correct" : (r.score >= 0.6 ? "partial" : "incorrect"),
    analyse: r.ok
      ? "Ta construction est exacte : chaque élément est au bon endroit."
      : "Sur " + r.attendus + " élément" + (r.attendus > 1 ? "s" : "") + " attendu" +
        (r.attendus > 1 ? "s" : "") + " : " + (morceaux.join(", ") || "rien de posé") + ".",
    demarche: "Chaque point a son image de l'autre côté de l'axe, à la même distance : " +
      "l'axe est la médiatrice du segment qui joint un point et son image.",
    solution: ex.solution || "",
    score: r.score
  };
}

/* Le bouton de suppression n'apparaît que pour un administrateur connecté :
   la route serveur exige de toute façon ce rôle. */
function estAdmin() {
  try { return !!(window.MB_AUTH && MB_AUTH.isAdmin() && !MB_AUTH.isDemo()); }
  catch { return false; }
}

async function deleteAnnale(id) {
  const a = LOADED_ANNALES.find(x => x.id === id);
  const nom = a ? a.title : "ce sujet";
  if (!confirm("Supprimer d\u00e9finitivement \u00ab " + nom + " \u00bb ?\n\nLe sujet et ses questions seront retir\u00e9s de la base. Le fichier PDF, lui, n'est pas supprim\u00e9.")) return;
  try {
    const res = await MB_AUTH.apiFetch("/annales/" + id, { method: "DELETE" });
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      throw new Error(d.error || ("HTTP " + res.status));
    }
    closeAnnale();
    showToast("Sujet supprim\u00e9.", "success");
    LOADED_ANNALES = LOADED_ANNALES.filter(x => x.id !== id);
    if (typeof loadAnnales === "function") loadAnnales();
    else if (typeof renderAnnales === "function") renderAnnales(LOADED_ANNALES);
  } catch (e) {
    showToast("Suppression impossible" + (e && e.message ? " : " + e.message : "."), "error");
  }
}

/* Suppression d'un exercice : action d'administrateur. Le contrôle réel est
   au serveur ; ce qui suit ne fait qu'éviter d'afficher une action vouée à
   échouer, et remonte le motif exact quand elle échoue tout de même. */
async function deleteExercise(id) {
  if (!estAdmin()) { showToast("Action r\u00e9serv\u00e9e aux administrateurs.", "error"); return; }
  if (!confirm("Supprimer d\u00e9finitivement cet exercice ?\n\nIl dispara\u00eetra de la banque et des s\u00e9ances. Cette action est irr\u00e9versible.")) return;
  try {
    /* apiFetch et non fetch : sans le jeton, le serveur refuse désormais. */
    const res = await MB_AUTH.apiFetch("/exercises/" + id, { method: "DELETE" });
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      throw new Error(d.error || ("HTTP " + res.status));
    }
    closeModal(); showToast("Exercice supprim\u00e9.", "success"); loadExercises();
  } catch (e) {
    showToast("Suppression impossible" + (e && e.message ? " : " + e.message : "."), "error");
  }
}

function closeModal() { document.getElementById("modal-overlay").classList.remove("open"); }
function toggleSolution(el) {
  const body = el.parentElement.querySelector(".solution-body");
  const arrow = el.querySelector(".solution-toggle-arrow");
  body.classList.toggle("open");
  arrow.textContent = body.classList.contains("open") ? "▲ Masquer" : "▼ Afficher";
}
function showToast(msg, type="info") {
  const t = document.getElementById("toast");
  t.textContent = msg; t.className = "toast "+type+" show";
  setTimeout(() => t.classList.remove("show"), 3500);
}
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

/* ══════════════════════════════════════
   SÉANCE — État global
══════════════════════════════════════ */
let seanceLevel  = "";
let seanceDiff   = "";
let seanceChapitre = "";
/* Ciblage venu du tableau de bord : « travailler ce chapitre », « travailler
   cette famille ». Vides en usage normal, ils ne changent alors rien. */
let seanceFamille = "";
let seanceClasse  = "";
/* Vrai quand la séance vient du tableau de bord. Elle doit alors couvrir tout
   ce que le tableau de bord affichait, sans les filtres incidents de l'écran
   de configuration — type, niveau, difficulté — que l'élève n'a pas choisis
   pour cette séance-là. */
let seanceCible   = false;
let seanceExercises  = [];
let seanceIndex      = 0;
let seanceCorrect    = 0;
let seanceWrong      = 0;
let seanceSkipped    = 0;
let seanceHistory    = [];   // par exercice : { answer, result, skipped } ou null
let seanceMax        = 0;    // exercice le plus loin atteint
let isTurning        = false;

function resetSeanceWelcome() {
  remplirChapitres();
  document.getElementById("seance-welcome").style.display = "";
  document.getElementById("seance-session").style.display = "none";
  document.getElementById("seance-results").style.display = "none";
}

function selectLevel(btn, level) {
  document.querySelectorAll(".seance-level-card").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  seanceLevel = level;
  remplirChapitres();   // les chapitres proposés suivent le niveau
}

/* Filtre par chapitre : la liste est bâtie sur CHAPTER_STRUCTURE, donc dans
   l'ordre du catalogue et groupée par matière. On la remplit à l'ouverture de
   la séance, une seule fois. */
function remplirChapitres() {
  const sel = document.getElementById("seance-chapitre");
  if (!sel) return;
  /* La liste dépend du niveau choisi : on la reconstruit à chaque changement
     plutôt que de la figer une fois pour toutes. */
  if (sel.dataset.niveau === (seanceLevel || "")) return;
  const choix = sel.value;
  sel.innerHTML = '<option value="">Tous les chapitres</option>';
  const catalogue = (typeof CHAPTER_STRUCTURE !== "undefined")
    ? CHAPTER_STRUCTURE : (window.CHAPTER_STRUCTURE || []);
  const structure = catalogue.filter(m =>
    !seanceLevel || !m.niveaux || m.niveaux.includes(seanceLevel));
  structure.forEach(m => {
    if (!m.chapters || !m.chapters.length) return;
    const grp = document.createElement("optgroup");
    grp.label = m.subject;
    m.chapters.forEach(c => {
      const o = document.createElement("option");
      o.value = c; o.textContent = c;
      grp.appendChild(o);
    });
    sel.appendChild(grp);
  });
  sel.dataset.niveau = seanceLevel || "";
  /* On garde le chapitre sélectionné s'il existe encore à ce niveau. */
  if (choix && [...sel.options].some(o => o.value === choix)) sel.value = choix;
  else selectChapitre("");
}

function selectChapitre(chapitre) {
  seanceChapitre = chapitre || "";
}

function selectDiff(btn, diff) {
  document.querySelectorAll(".seance-diff-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  seanceDiff = diff;
}

async function startSeance() {
  const btn     = document.getElementById("seance-start-btn");
  const label   = document.getElementById("seance-start-label");
  const spinner = document.getElementById("seance-start-spinner");
  btn.disabled = true;
  label.style.display = "none";
  spinner.style.display = "block";

  try {
    let url = "/exercises";
    const params = new URLSearchParams();
    params.append("matiere", matiereCourante());
    /* Séance ciblée : ni type, ni niveau, ni difficulté. Le tableau de bord
       compte exercices ET problèmes, sans distinction de niveau ; filtrer ici
       ferait apparaître moins d'exercices que le compteur n'en annonçait. */
    if (!seanceCible) {
      params.append("type", seanceMode);
      if (seanceLevel) params.append("level", seanceLevel);
      if (seanceDiff)  params.append("difficulty", seanceDiff);
    }
    if (seanceChapitre) params.append("chapitre", seanceChapitre);
    if (seanceFamille)  params.append("famille",  seanceFamille);
    if (seanceClasse)   params.append("classe",   seanceClasse);
    /* On ne veut que ce qui reste à travailler : le serveur écarte les
       exercices déjà réussis, sauf si toute leur famille l'est. */
    params.append("nonReussis", "1");
    url += "?" + params.toString();

    let data;
    try {
      const res = await MB_AUTH.apiFetch(url);
      if (!res.ok) throw new Error();
      data = await res.json();
      DEMO_MODE = false;
    } catch {
      DEMO_MODE = true;
      data = (demoDispo() ? DEMO_EXERCISES : []).filter(ex =>
        (seanceCible || (ex.type || "exercice") === seanceMode) &&
        (seanceCible || !seanceLevel || ex.level === seanceLevel) &&
        (!seanceChapitre || ex.chapitre === seanceChapitre) &&
        (!seanceFamille  || (seanceFamille === "(sans famille)"
                             ? !ex.famille : ex.famille === seanceFamille)) &&
        (!seanceClasse   || ex.classe   === seanceClasse) &&
        (seanceCible || !seanceDiff || ex.difficulty === seanceDiff));
    }

    if (!data.length && !seanceCible && seanceMode === "probleme") {
      showToast("Aucun problème disponible pour ces filtres — ajoute-en depuis l'onglet Ajouter !", "error");
      return;
    }

    if (!data.length) {
      /* Un ciblage venu du tableau de bord mérite un message précis : dire
         « aucun exercice » alors que l'élève voyait un compteur non nul
         donnerait l'impression d'une panne. */
      const cadre = seanceClasse ? " en " + seanceClasse : "";
      showToast(seanceFamille
        ? "Tu as déjà réussi tous les exercices de « " + seanceFamille + " »" + cadre + "."
        : seanceChapitre
        ? "Rien à travailler dans « " + seanceChapitre + " »" + cadre
          + " : tout est déjà réussi, ou aucun exercice n'y est rattaché."
        : "Aucun exercice trouvé pour ces filtres.", "error");
      return;
    }

    // Mélange aléatoire
    seanceExercises = [...data].sort(() => Math.random() - 0.5);
    seanceHistory = seanceExercises.map(() => null);
    seanceIndex   = 0;
    seanceMax     = 0;
    seanceCorrect = 0;
    seanceWrong   = 0;
    seanceSkipped = 0;

    document.getElementById("seance-welcome").style.display = "none";
    document.getElementById("seance-session").style.display = "";
    paintAll();

  } catch {
    showToast("Erreur de connexion au serveur.", "error");
  } finally {
    btn.disabled = false;
    label.style.display = "";
    spinner.style.display = "none";
  }
}

/* ── PEINDRE LE LIVRE ──
   paintLeft : énoncé + brouillon de l'élève (page gauche)
   paintRight: réaction du tuteur (page droite)
   paintNav  : barre de progression, score, boutons feuilleter
   Les peintures sont séparées pour pouvoir rafraîchir une page pendant
   qu'elle est cachée par le feuillet qui se tourne (pas de clignotement). */

function paintLeft() {
  const ex   = seanceExercises[seanceIndex];
  const hist = seanceHistory[seanceIndex];

  const levelLabel = LEVEL_LABELS[ex.level] || ex.level;
  const diffTag    = ex.difficulty ? `<span class="tag tag-${ex.difficulty.toLowerCase()}">${ex.difficulty}</span>` : "";
  const subjectTag = ex.subject    ? `<span class="tag tag-subject">${ex.subject}</span>` : "";
  const classeTag  = ex.classe     ? `<span class="tag tag-classe">${ex.classe}</span>` : "";
  const chapTag    = ex.chapitre   ? `<span class="tag tag-chapitre">${ex.chapitre}</span>` : "";
  document.getElementById("session-card-tags").innerHTML =
    `<span class="tag tag-${ex.level}">${levelLabel}</span>${diffTag}${subjectTag}${classeTag}${chapTag}`;

  document.getElementById("left-folio").textContent          = `#${String(ex.id).padStart(3, "0")}`;
  document.getElementById("session-card-title").textContent  = ex.title;
  document.getElementById("session-card-content").textContent = ex.content;

  const ta    = document.getElementById("session-answer");
  const zone  = document.getElementById("page-answer");
  const label = document.getElementById("page-answer-label");
  const answered = hist && (hist.result || hist.skipped);

  const btnCorrect = document.getElementById("btn-correct");
  if (answered) {
    ta.value    = hist.answer || "";
    ta.readOnly = true;
    zone.classList.add("locked");
    label.textContent = hist.skipped ? "Exercice passé" : "Ce que tu as écrit";
    if (btnCorrect) btnCorrect.disabled = true;
  } else {
    ta.value    = hist && hist.answer ? hist.answer : "";
    ta.readOnly = false;
    zone.classList.remove("locked");
    label.textContent = "Ton brouillon";
    if (btnCorrect) btnCorrect.disabled = false;
  }
  plateauInteractif(ex, hist);
}

function paintRight() {
  const hist = seanceHistory[seanceIndex];
  showTutor(
    hist && hist.result ? "result"
    : hist && hist.skipped ? "skipped"
    : "empty",
    hist && hist.result
  );
}

function showTutor(state, result) {
  ["tutor-empty", "tutor-loading", "tutor-skipped", "tutor-result"].forEach(id => {
    document.getElementById(id).style.display = "none";
  });
  document.getElementById("tutor-" + state).style.display = state === "result" ? "block" : "flex";

  if (state === "result" && result) {
    const verdictMap = {
      correct:   { label: "Bonne réponse",          cls: "correct"   },
      partial:   { label: "Presque — à peaufiner",  cls: "partial"   },
      incorrect: { label: "Réponse à revoir",       cls: "incorrect" }
    };
    const v = verdictMap[result.verdict] || verdictMap.incorrect;
    const verdict = document.getElementById("tutor-verdict");
    verdict.textContent = v.label;
    verdict.className   = `tutor-verdict ${v.cls}`;

    document.getElementById("tutor-analyse").textContent  = result.analyse  || "—";
    document.getElementById("tutor-demarche").textContent = result.demarche || "—";
    document.getElementById("tutor-solution").textContent = result.solution || "—";
  }
}

function paintNav() {
  const total = seanceExercises.length;
  const hist  = seanceHistory[seanceIndex];
  const answered = hist && (hist.result || hist.skipped);
  const isLast   = seanceIndex === total - 1;

  document.getElementById("session-progress-fill").style.width =
    (((answered ? seanceIndex + 1 : seanceIndex) / total) * 100) + "%";
  document.getElementById("session-progress-label").textContent = `${seanceIndex + 1} / ${total}`;

  updateScoreboard();

  // Précédent
  document.getElementById("book-prev").disabled = seanceIndex === 0;

  // Suivant : visible seulement une fois l'exercice traité
  const next = document.getElementById("book-next");
  if (answered) {
    next.style.visibility = "visible";
    next.querySelector(".bpb-arrow").textContent = isLast ? "✦" : "→";
    next.childNodes[0].nodeValue = isLast ? "Voir les résultats " : "Page suivante ";
  } else {
    next.style.visibility = "hidden";
  }
}

function updateScoreboard() {
  let c = 0, w = 0, s = 0;
  seanceHistory.forEach(h => {
    if (!h) return;
    if (h.skipped) { s++; }
    else if (h.result) {
      if (h.result.verdict === "correct" || h.result.verdict === "partial") c++;
      else w++;
    }
  });
  seanceCorrect = c; seanceWrong = w; seanceSkipped = s;
  document.getElementById("score-correct").textContent = `✓ ${c}`;
  document.getElementById("score-wrong").textContent   = `✗ ${w}`;
  document.getElementById("score-skip").textContent    = `→ ${s}`;
}

function paintAll() {
  paintLeft();
  paintRight();
  paintNav();
}

/* ── TOURNER LA PAGE ──
   Un feuillet de parchemin pivote sur la reliure. La page cachée au départ
   est repeinte à t=0, la page cachée en 2ᵉ moitié est repeinte au milieu. */
function goTo(target, direction) {
  if (isTurning || target < 0 || target >= seanceExercises.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = window.matchMedia("(max-width: 860px)").matches;

  if (reduce) { seanceIndex = target; paintAll(); return; }

  if (mobile) {
    const spread = document.getElementById("book-spread");
    spread.classList.add("fading");
    setTimeout(() => {
      seanceIndex = target; paintAll();
      requestAnimationFrame(() => spread.classList.remove("fading"));
    }, 180);
    return;
  }

  isTurning = true;
  const leaf = document.getElementById("page-leaf");
  leaf.className = "page-leaf show";
  void leaf.offsetWidth; // reflow

  seanceIndex = target;
  // page cachée dès le début par le feuillet
  if (direction === "next") paintRight(); else paintLeft();

  const from = direction === "next" ? 0 : -180;
  const to   = direction === "next" ? -180 : 0;
  const anim = leaf.animate(
    [{ transform: `rotateY(${from}deg)` }, { transform: `rotateY(${to}deg)` }],
    { duration: 660, easing: "cubic-bezier(.62,.04,.34,1)" }
  );

  // au milieu, le feuillet couvre l'autre page : on la repeint
  setTimeout(() => {
    if (direction === "next") paintLeft(); else paintRight();
    paintNav();
  }, 350);

  anim.onfinish = () => { leaf.className = "page-leaf"; isTurning = false; };
}

/* ── MÉMOIRE DE L'ÉLÈVE ──────────────────────────────────────────────────
   Chaque tentative corrigée est enregistrée côté serveur, sous le compte
   connecté. Un exercice « réussi » (verdict correct) ne sera plus tiré en
   séance tant que sa famille n'est pas bouclée.

   Choix assumé : « partial » ne compte PAS comme réussi. Une réponse à moitié
   juste mérite d'être revue, et l'écarter du tirage priverait l'élève de
   l'exercice qu'il maîtrise justement le moins.

   L'échec de l'enregistrement n'interrompt jamais la séance : perdre une
   ligne de statistique est moins grave que bloquer un élève au milieu de son
   travail. */
async function enregistrerProgression(ex, result) {
  if (!ex || !ex.id || !result || DEMO_MODE) return;
  try {
    await MB_AUTH.apiFetch("/progression", {
      method: "POST",
      body: JSON.stringify({
        exercise_id: ex.id,
        reussi: result.verdict === "correct",
        note: typeof result.note === "number" ? result.note : null,
      }),
    });
  } catch (e) {
    console.warn("Progression non enregistrée :", e.message);
  }
}

async function submitAnswer() {
  const ta     = document.getElementById("session-answer");
  if (isTurning) return;

  /* Construction d'un diagramme : correction locale, comme le quadrillage. */
  const exD = seanceExercises[seanceIndex];
  const pD = litDiagramme(exD);
  if (pD && pD.reponse) {
    const result = corrigerDiagramme(exD);
    if (!result) return;
    seanceHistory[seanceIndex] = { answer: "(construction)", result, skipped: false };
    enregistrerProgression(exD, result);
    if (seanceIndex > seanceMax) seanceMax = seanceIndex;
    document.getElementById("page-answer").classList.add("locked");
    document.getElementById("page-answer-label").textContent = "Ta repr\u00e9sentation";
    const bcD = document.getElementById("btn-correct");
    if (bcD) bcD.disabled = true;
    showTutor("result", result);
    paintNav();
    return;
  }

  /* Exercice interactif : la correction est locale et immédiate. */
  const exI = seanceExercises[seanceIndex];
  if (litInteractif(exI)) {
    const result = corrigerInteractif(exI);
    if (!result) return;
    seanceHistory[seanceIndex] = { answer: "(construction)", result, skipped: false };
    enregistrerProgression(exI, result);
    if (seanceIndex > seanceMax) seanceMax = seanceIndex;
    document.getElementById("page-answer").classList.add("locked");
    document.getElementById("page-answer-label").textContent = "Ta construction";
    const bc = document.getElementById("btn-correct");
    if (bc) bc.disabled = true;
    showTutor("result", result);
    paintNav();
    return;
  }

  const answer = ta.value.trim();
  if (!answer) { showToast("Écris ton brouillon avant de corriger.", "error"); return; }

  const ex  = seanceExercises[seanceIndex];
  const btn = document.getElementById("btn-correct");
  btn.disabled = true;
  showTutor("loading");

  try {
    let result;
    if (DEMO_MODE) {
      await new Promise(r => setTimeout(r, 650)); // le tuteur "lit" la copie
      result = demoCorrect(ex, answer);
    } else {
      // apiFetch ajoute le jeton Bearer : sans lui la route renvoie 401
      const res = await MB_AUTH.apiFetch("/exercises/correct", {
        method: "POST",
        body: JSON.stringify({ exercise: ex, answer })
      });
      if (!res.ok) throw new Error("Erreur serveur (" + res.status + ")");
      result = await res.json();
      if (result.error) throw new Error(result.error);
    }

    // Enregistrer dans l'historique (relisible plus tard) et dans la mémoire du compte
    seanceHistory[seanceIndex] = { answer, result, skipped: false };
    enregistrerProgression(ex, result);
    if (seanceIndex > seanceMax) seanceMax = seanceIndex;

    // Verrouiller le brouillon, afficher la correction
    ta.readOnly = true;
    document.getElementById("page-answer").classList.add("locked");
    document.getElementById("page-answer-label").textContent = "Ce que tu as écrit";
    showTutor("result", result);
    paintNav();

  } catch (err) {
    showToast("Erreur lors de la correction : " + (err.message || ""), "error");
    showTutor("empty");
    btn.disabled = false;
  }
}

function skipExercise() {
  if (isTurning) return;
  const ta = document.getElementById("session-answer");
  seanceHistory[seanceIndex] = { answer: ta.value.trim(), result: null, skipped: true };
  if (seanceIndex > seanceMax) seanceMax = seanceIndex;

  if (seanceIndex >= seanceExercises.length - 1) {
    paintAll();
    showResults();
  } else {
    goTo(seanceIndex + 1, "next");
  }
}

function nextExercise() {
  if (isTurning) return;
  const isLast = seanceIndex >= seanceExercises.length - 1;
  if (isLast) { showResults(); return; }
  goTo(seanceIndex + 1, "next");
}

function prevExercise() {
  if (isTurning || seanceIndex === 0) return;
  goTo(seanceIndex - 1, "prev");
}

function showResults() {
  document.getElementById("seance-session").style.display  = "none";
  document.getElementById("seance-results").style.display  = "";

  const total    = seanceExercises.length;
  const answered = seanceCorrect + seanceWrong;
  const pct      = answered > 0 ? Math.round((seanceCorrect / answered) * 100) : 0;

  document.getElementById("results-score").textContent = pct + "%";

  let title, sub;
  if (pct >= 80) {
    title = "Excellent travail,\n<em>séance terminée.</em>";
    sub   = "Tu maîtrises bien ces exercices. Continue ainsi !";
  } else if (pct >= 50) {
    title = "Bon effort,\n<em>séance terminée.</em>";
    sub   = "Tu progresses bien. Quelques points à retravailler.";
  } else {
    title = "Continue à pratiquer,\n<em>séance terminée.</em>";
    sub   = "La régularité paie. Recommence pour t'améliorer.";
  }
  document.getElementById("results-title").innerHTML = title.replace("\n","<br>");
  document.getElementById("results-sub").textContent  = sub;
  document.getElementById("results-detail").textContent =
    `Tu as traité ${total} exercice${total>1?"s":""} avec ${seanceCorrect} bonne${seanceCorrect>1?"s":""} réponse${seanceCorrect>1?"s":""}.`;

  document.getElementById("res-correct").textContent = seanceCorrect;
  document.getElementById("res-wrong").textContent   = seanceWrong;
  document.getElementById("res-skip").textContent    = seanceSkipped;

  // Barre de progression à 100%
  document.getElementById("session-progress-fill").style.width = "100%";
}

function restartSeance() {
  resetSeanceWelcome();
}

/* ── Le Khôlleur ──────────────────────────────────────────────────────────
   Les anciens accès « Problèmes » (barre de navigation, séance, chapitre)
   mènent désormais à kholleur.html. Le chapitre courant est transmis pour que
   la page n'affiche que ses khôlles. */
function ouvrirKholleur(chapitre) {
  let href = "kholleur.html";
  if (chapitre) href += "?chapitre=" + encodeURIComponent(chapitre);
  location.href = window.MB_MAT ? MB_MAT.lien(href) : href;
}

/* ═══════════════════════════════════════════════════════════════════════
   RUBRIQUES DE LA PAGE EXERCICES : COURS · ENTRAÎNEMENT · ANNALES
   Un carrousel, entre le titre et les niveaux, choisit ce que les frises
   ouvrent :
     · COURS        → un clic sur un chapitre propose les cours qui s'y
                      rattachent (les familles du chapitre ↔ celles du cours) ;
     · ENTRAÎNEMENT → les familles à cocher, puis « Lancer la séance » ;
     · ANNALES      → la banque de sujets remplace les frises.
   ═══════════════════════════════════════════════════════════════════════ */
const RUBRIQUES = [
  { id: "cours",        titre: "COURS",
    sous: "Choisis un chapitre : les cours qui s'y rattachent s'affichent." },
  { id: "tutoriel",     titre: "TUTORIEL",
    sous: "Choisis un chapitre : son tutoriel interactif s'affiche, avec les étapes à manipuler." },
  { id: "entrainement", titre: "ENTRAÎNEMENT",
    sous: "Choisis un chapitre, coche les familles à travailler, puis lance ta séance." },
  { id: "annales",      titre: "ANNALES",
    sous: "Brevets, contrôles et devoirs surveillés, avec leur corrigé." },
];
/* Les index de cours et de tutoriels ne couvrent que les mathématiques :
   ailleurs (physique-chimie), seules ENTRAÎNEMENT et ANNALES sont proposées. */
if (window.MB_MAT && !MB_MAT.estMaths()) {
  for (let k = RUBRIQUES.length - 1; k >= 0; k--)
    if (RUBRIQUES[k].id === "cours" || RUBRIQUES[k].id === "tutoriel") RUBRIQUES.splice(k, 1);
}
let rubrique = "entrainement";

function rangRubrique(id) { return RUBRIQUES.findIndex(r => r.id === id); }

function tournerRubrique(pas) {
  const i = rangRubrique(rubrique), n = RUBRIQUES.length;
  choisirRubrique(RUBRIQUES[(i + pas + n) % n].id, pas);
}

function choisirRubrique(id, sens) {
  if (id === rubrique) return;
  rubrique = id;
  dessinerCarrousel(sens || 0);
  appliquerRubrique();
  if (rubrique !== "annales" && LOADED_EXERCISES.length) renderByChapter(LOADED_EXERCISES);
}

/* Trois titres visibles : le précédent, le courant (au centre), le suivant. */
function dessinerCarrousel(sens) {
  const piste = document.getElementById("rb-piste");
  if (!piste) return;
  const i = rangRubrique(rubrique), n = RUBRIQUES.length;
  piste.innerHTML = "";
  /* Avec deux rubriques seulement, la voisine n'est montrée qu'une fois. */
  const places = n >= 3 ? [[-1, "rb-cote"], [0, "rb-centre"], [1, "rb-cote"]]
                        : n === 2 ? [[null], [0, "rb-centre"], [1, "rb-cote"]] : [[null], [0, "rb-centre"], [null]];
  places.forEach(([d, cls]) => {
    if (d === null) { piste.appendChild(document.createElement("span")); return; }
    const r = RUBRIQUES[(i + d + n) % n];
    const b = document.createElement("button");
    b.type = "button";
    b.className = "rb-item " + cls;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", d === 0 ? "true" : "false");
    b.textContent = r.titre;
    if (d) b.onclick = () => tournerRubrique(d);
    piste.appendChild(b);
  });
  piste.classList.remove("rb-de-droite", "rb-de-gauche");
  if (sens) { void piste.offsetWidth; piste.classList.add(sens > 0 ? "rb-de-droite" : "rb-de-gauche"); }
  const pts = document.getElementById("rb-points");
  pts.innerHTML = RUBRIQUES.map((r, k) =>
    `<button type="button" class="rb-point${k === i ? " actif" : ""}" aria-label="${r.titre}" onclick="choisirRubrique('${r.id}', ${k > i ? 1 : -1})"></button>`).join("");
}

/* Ce que montre la page selon la rubrique. */
/* Titre de la vue : page principale, ou bibliothèque (titre de la première version). */
const TITRES_VUE = {
  principale:   { tag: "Polymates", h1: "<em>Mathématiques.</em>" },
  bibliotheque: { tag: "Bibliothèque d'exercices", h1: "Exercices de<br><em>mathématiques.</em>",
                  sous: "Explore, filtre et résous des exercices classés par niveau — du primaire à l'université." },
};
function appliquerRubrique() {
  const ann = rubriqueActive() === "annales";
  const vue = document.getElementById("view-browse");
  if (!vue) return;
  const t = TITRES_VUE[bibliotheque ? "bibliotheque" : "principale"];
  vue.querySelector(".browse-hero .hero-tag").textContent = t.tag;
  vue.querySelector(".browse-hero h1").innerHTML = t.h1;
  vue.querySelector(".filter-section").style.display = ann ? "none" : "";
  vue.querySelector(".grid-section").style.display = ann ? "none" : "";
  document.getElementById("browse-annales").hidden = !ann;
  const sous = vue.querySelector(".browse-hero .hero-sub");
  const r = RUBRIQUES[rangRubrique(rubrique)];
  if (sous) sous.textContent = bibliotheque ? t.sous : (r ? r.sous : "");
  if (ann) { rangerAnnales("browse"); loadAnnales(); choisirOngletAnnales(ongletAnnales); }
}

/* La banque de sujets (filtres + grille) n'existe qu'une fois : on la
   déplace entre la vue « Annales » du menu et la rubrique ANNALES. */
function rangerAnnales(ou) {
  const filtres = document.getElementById("annales-filters");
  const grille = document.getElementById("annales-grid");
  const hote = ou === "browse"
    ? document.getElementById("browse-annales")
    : document.querySelector("#view-annales .annales-page");
  if (!filtres || !grille || !hote || grille.parentNode === hote) return;
  hote.append(filtres, grille);
  const enc = ou === "browse" && ongletAnnales === "encours";
  filtres.style.display = enc ? "none" : "";
  grille.style.display = enc ? "none" : "";
}

/* ── Rubrique COURS ── */
function indexCours() { return window.COURS_INDEX || []; }

/* Les cours d'une notion : ceux des mêmes chapitres qui travaillent au moins
   une des familles de la notion. Les chapitres concernés sont aussi rendus,
   pour proposer le chapitre entier (vue d'ensemble, bilan). */
function coursDeNotion(notion) {
  const fam = new Set(notion.familles.map(([c, f]) => c + "|" + normaliseTitre(f)));
  const chapitres = [...new Set(notion.familles.map(([c]) => c))];
  const cours = indexCours().filter(l => chapitres.includes(l.chapter) && !l.bilan && l.competence &&
    (l.familles || []).some(f => fam.has(l.chapter + "|" + normaliseTitre(f))));
  return { cours, chapitres };
}

function ouvrirCoursNotion(notion) {
  const { cours, chapitres } = coursDeNotion(notion);
  afficherCours(notion.nom, notion.classe || "", cours, chapitres);
}

function ouvrirCoursChapitre(chap) {
  const cours = indexCours().filter(l => l.chapter === chap && !l.bilan && l.competence);
  afficherCours(chap, "", cours, [chap]);
}

function afficherCours(titre, classe, cours, chapitres) {
  document.getElementById("cours-title").textContent = titre;
  document.getElementById("cours-sub").textContent =
    (classe ? classe + " · " : "") + (cours.length
      ? cours.length + " cours en lien avec ce chapitre"
      : "Pas encore de cours ciblé : le chapitre entier reste disponible");
  const lien = t => (window.MB_MAT ? MB_MAT.lien("cours.html?open=" + encodeURIComponent(t)) : "cours.html?open=" + encodeURIComponent(t));
  const hote = document.getElementById("cours-list");
  let h = "";
  if (cours.length) {
    h += '<div class="cours-grille">' + cours.map(l =>
      `<a class="cours-carte" href="${lien(l.title)}">
         <span class="cours-meta">${escapeHtml(l.level || "")}${l.duration ? " · " + escapeHtml(l.duration) : ""}</span>
         <span class="cours-titre">${escapeHtml(l.title)}</span>
         <span class="cours-desc">${escapeHtml(l.desc || "")}</span>
         <span class="cours-go">Ouvrir le cours →</span>
       </a>`).join("") + "</div>";
  }
  const chaps = chapitres.filter(c => indexCours().some(l => l.chapter === c));
  if (chaps.length) {
    h += '<p class="cours-section">Revoir le chapitre en entier</p><div class="cours-chapitres">' +
      chaps.map(c => `<a class="cours-chap" href="${lien(c)}">${escapeHtml(c)} <span>vue d'ensemble · bilan →</span></a>`).join("") + "</div>";
  }
  if (!h) h = '<div class="chap-placeholder">Aucun cours pour ce chapitre — pour l\'instant !</div>';
  hote.innerHTML = h;
  showView("cours", "browse");
}

/* ── Rubrique TUTORIEL ──
   Un tutoriel par chapitre (tutoriels.html), découpé en parties qui portent
   les mêmes noms que les cours. Pour une notion : les tutoriels de ses
   chapitres, avec en évidence les parties qui la concernent. */
function indexTutos() { return window.TUTOS_INDEX || []; }
const TUTO_ALIAS = { "Aires et figures": "Aires" };   /* chapitre d'exercices → titre du tutoriel */
function tutoDuChapitre(chap) {
  const t = TUTO_ALIAS[chap] || chap;
  return indexTutos().find(x => normaliseTitre(x.titre) === normaliseTitre(t)) || null;
}
function tutosDeNotion(notion) {
  const chapitres = [...new Set(notion.familles.map(([c]) => c))];
  return chapitres.map(tutoDuChapitre).filter(Boolean);
}
function ouvrirTutosNotion(notion) {
  const parties = new Set(coursDeNotion(notion).cours.map(l => normaliseTitre(l.title)));
  afficherTutos(notion.nom, notion.classe || "", tutosDeNotion(notion), parties);
}
function ouvrirTutosChapitre(chap) {
  const t = tutoDuChapitre(chap);
  afficherTutos(chap, "", t ? [t] : [], new Set());
}
function afficherTutos(titre, classe, tutos, parties) {
  document.getElementById("cours-title").textContent = titre;
  document.getElementById("cours-sub").textContent = (classe ? classe + " · " : "") + (tutos.length
    ? tutos.length + " tutoriel" + (tutos.length > 1 ? "s" : "") + " interactif" + (tutos.length > 1 ? "s" : "") + " en lien avec ce chapitre"
    : "Pas encore de tutoriel pour ce chapitre");
  const lien = t => { const h = "tutoriel.html?ch=" + encodeURIComponent(t.id) + "&title=" + encodeURIComponent(t.titre);
    return window.MB_MAT ? MB_MAT.lien(h) : h; };
  const hote = document.getElementById("cours-list");
  hote.innerHTML = tutos.length
    ? '<div class="tuto-liste">' + tutos.map(t => {
        const cibles = t.parties.filter(p => parties.has(normaliseTitre(p)));
        return `<a class="tuto-carte" href="${lien(t)}">
          <span class="tuto-tete"><span class="tuto-icone">▶</span>
            <span><span class="cours-meta">Tutoriel interactif · ${t.etapes} étape${t.etapes > 1 ? "s" : ""}</span>
            <span class="cours-titre">${escapeHtml(t.titre)}</span></span></span>
          ${t.parties.length ? '<span class="tuto-parties">' + t.parties.map((p, k) =>
            `<span class="tuto-partie${cibles.includes(p) ? " cible" : ""}">${k + 1}. ${escapeHtml(p)}</span>`).join("") + "</span>" : ""}
          ${cibles.length ? `<span class="tuto-note">En surbrillance : ${cibles.length > 1 ? "les parties" : "la partie"} de cette notion</span>` : ""}
          <span class="cours-go">Lancer le tutoriel →</span>
        </a>`; }).join("") + "</div>"
    : '<div class="chap-placeholder">Aucun tutoriel pour ce chapitre — pour l\'instant !</div>';
  showView("cours", "browse");
}

/* Carrousel : glisser au doigt ou à la souris, flèches du clavier. */
(function initCarrousel() {
  const f = document.getElementById("rb-fenetre");
  if (!f) return;
  let x0 = null;
  f.addEventListener("pointerdown", e => { x0 = e.clientX; });
  f.addEventListener("pointerup", e => {
    if (x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) tournerRubrique(dx < 0 ? 1 : -1);
  });
  f.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { e.preventDefault(); tournerRubrique(1); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); tournerRubrique(-1); }
  });
  dessinerCarrousel(0);
})();


/* ═══════════════════════════════════════════════════════════════════════
   TIROIR D'ACCUEIL
   La page principale des mathématiques est la page des frises. L'ancien
   accueil (tableau de bord, arbre, cours, tutoriels…) coulisse depuis la
   droite : onglet « ‹ Accueil » au bord droit de l'écran pour l'ouvrir,
   flèche « › » (ou Échap, ou glisser vers la droite) pour le refermer.
   ═══════════════════════════════════════════════════════════════════════ */
function ouvrirAccueil() {
  const t = document.getElementById("tiroir-accueil");
  if (!t || t.classList.contains("ouvert")) return;
  t.classList.add("ouvert");
  t.setAttribute("aria-hidden", "false");
  document.getElementById("tiroir-ouvrir").setAttribute("aria-expanded", "true");
  document.body.classList.add("tiroir-ouvert");
  document.getElementById("tiroir-contenu").scrollTop = 0;
  setTimeout(() => t.querySelector(".tiroir-fermer").focus({ preventScroll: true }), 50);
}
function fermerAccueil() {
  const t = document.getElementById("tiroir-accueil");
  if (!t || !t.classList.contains("ouvert")) return;
  t.classList.remove("ouvert");
  t.setAttribute("aria-hidden", "true");
  document.getElementById("tiroir-ouvrir").setAttribute("aria-expanded", "false");
  document.body.classList.remove("tiroir-ouvert");
}
(function initTiroir() {
  const t = document.getElementById("tiroir-accueil");
  if (!t) return;
  document.addEventListener("keydown", e => { if (e.key === "Escape") fermerAccueil(); });
  /* Glisser vers la droite referme le tiroir (au doigt surtout). */
  let x0 = null, y0 = 0;
  t.addEventListener("pointerdown", e => { x0 = e.clientX; y0 = e.clientY; });
  t.addEventListener("pointerup", e => {
    if (x0 === null) return;
    const dx = e.clientX - x0, dy = Math.abs(e.clientY - y0); x0 = null;
    if (dx > 90 && dx > dy * 2) fermerAccueil();
  });
  document.body.classList.toggle("vue-principale",
    !!document.querySelector("#view-browse.active"));
})();

/* ═══════════════════════════════════════════════════════════════════════
   MÉMOIRE DES ÉPREUVES EN COURS
   Pendant une épreuve, l'état est enregistré à chaque réponse et à chaque
   changement de question : la question courante, les réponses (corrigées
   ou passées) et le temps écoulé. Sur le serveur pour un compte connecté,
   dans le navigateur en mode démo. La rubrique ANNALES › En cours liste ces
   épreuves et permet de reprendre exactement où l'on s'était arrêté.
   ═══════════════════════════════════════════════════════════════════════ */
const MEMO = { cle: "mb_examens_en_cours", minuteur: null, cache: null };

function memoLocale() { return DEMO_MODE || !!(window.MB_AUTH && MB_AUTH.isDemo && MB_AUTH.isDemo()); }
function lireMemoLocale() { try { return JSON.parse(localStorage.getItem(MEMO.cle) || "{}"); } catch (_) { return {}; } }
function ecrireMemoLocale(o) { try { localStorage.setItem(MEMO.cle, JSON.stringify(o)); } catch (_) {} }

async function listerEnCours() {
  if (memoLocale()) {
    const m = lireMemoLocale();
    MEMO.cache = Object.values(m).filter(x => x.matiere === matiereCourante())
      .sort((a, b) => String(b.updated_at).localeCompare(String(a.updated_at)));
    return MEMO.cache;
  }
  try {
    const r = await MB_AUTH.apiFetch(avecMatiere("/examens/en-cours"));
    if (!r.ok) throw new Error();
    MEMO.cache = await r.json();
  } catch (_) { MEMO.cache = MEMO.cache || []; }
  return MEMO.cache;
}

function etatEpreuve() {
  return {
    question_index: EXAM.index, nb_questions: EXAM.qs.length, matiere: matiereCourante(),
    /* Les réponses sans le plateau de widget, qui ne se sérialise pas. */
    reponses: EXAM.answers.map(a => a ? { answer: a.answer || "", result: a.result || null, skipped: !!a.skipped } : null),
    temps_sec: Math.max(0, Math.round((Date.now() - EXAM.start) / 1000)),
  };
}

/* Enregistre l'épreuve courante (regroupe les appels rapprochés). */
function memoriserExamen(immediat) {
  if (!EXAM || !EXAM.annale || EXAM.annale.test || !EXAM.qs.length || !EXAM.start) return;
  clearTimeout(MEMO.minuteur);
  MEMO.minuteur = setTimeout(() => envoyerMemo(false), immediat ? 0 : 800);
}
async function envoyerMemo(enPartant) {
  if (!EXAM || !EXAM.annale || EXAM.annale.test || !EXAM.qs.length || !EXAM.start) return;
  const id = EXAM.annale.id, etat = etatEpreuve();
  if (memoLocale()) {
    const m = lireMemoLocale();
    const a = EXAM.annale;
    m[id] = Object.assign({ annale_id: id, title: a.title, exam: a.exam, year: a.year, classe: a.classe, duration: a.duration,
      created_at: (m[id] && m[id].created_at) || new Date().toISOString() }, etat, { updated_at: new Date().toISOString() });
    ecrireMemoLocale(m);
    return;
  }
  try {
    await MB_AUTH.apiFetch("/examens/" + id, { method: "PUT", body: JSON.stringify(etat), keepalive: !!enPartant });
  } catch (_) {}
}
/* L'élève ferme l'onglet ou change d'application en pleine épreuve. */
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden" && EXAM && EXAM.start &&
      document.getElementById("examen-run") && document.getElementById("examen-run").style.display !== "none")
    envoyerMemo(true);
});

async function oublierExamen(annaleId, terminee) {
  clearTimeout(MEMO.minuteur);
  if (memoLocale()) { const m = lireMemoLocale(); delete m[annaleId]; ecrireMemoLocale(m); return; }
  try {
    await MB_AUTH.apiFetch("/examens/" + annaleId + (terminee ? "/terminer" : ""), { method: terminee ? "POST" : "DELETE" });
  } catch (_) {}
}

/* Reprendre une épreuve mémorisée, à la question où l'élève s'était arrêté. */
async function reprendreExamen(annaleId) {
  if (!LOADED_ANNALES.length) await loadAnnales();
  const a = LOADED_ANNALES.find(x => Number(x.id) === Number(annaleId));
  const s = (await listerEnCours()).find(x => Number(x.annale_id) === Number(annaleId));
  if (!a) { showToast("Ce sujet n'est plus disponible.", "error"); return; }
  if (!s) { startExamen(a.id); return; }
  lancerExamen(a);
  const n = EXAM.qs.length;
  const rep = Array.isArray(s.reponses) ? s.reponses : [];
  EXAM.answers = Array.from({ length: n }, (_, i) => rep[i] || null);
  /* Le sujet a pu être modifié depuis : on reste dans les bornes. */
  EXAM.index = Math.min(Math.max(0, Number(s.question_index) || 0), Math.max(0, n - 1));
  beginEpreuve({ temps_sec: Number(s.temps_sec) || 0 });
  showToast("Reprise de l'épreuve : " + (EXAM.index + 1) + " / " + n, "info");
}

function dureeLisible(sec) {
  const m = Math.round((Number(sec) || 0) / 60);
  return m < 1 ? "moins d'une minute" : m < 60 ? m + " min" : Math.floor(m / 60) + " h " + String(m % 60).padStart(2, "0");
}
function quandLisible(d) {
  const t = new Date(d); if (isNaN(t)) return "";
  const min = Math.round((Date.now() - t) / 60000);
  if (min < 2) return "à l'instant";
  if (min < 60) return "il y a " + min + " min";
  if (min < 24 * 60) return "il y a " + Math.round(min / 60) + " h";
  return "le " + t.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
}

/* ── Rubrique ANNALES : onglets « Banque de sujets » / « En cours » ── */
let ongletAnnales = "banque";
function choisirOngletAnnales(o) {
  ongletAnnales = o === "encours" ? "encours" : "banque";
  document.querySelectorAll("#ann-onglets button").forEach(b => b.classList.toggle("on", b.dataset.o === ongletAnnales));
  const enc = ongletAnnales === "encours";
  const hote = document.getElementById("browse-annales");
  ["annales-filters", "annales-grid"].forEach(id => {
    const e = document.getElementById(id);
    if (e && e.parentNode === hote) e.style.display = enc ? "none" : "";
  });
  document.getElementById("ann-encours").hidden = !enc;
  if (enc) dessinerEnCours(); else majCompteEnCours();
}
async function majCompteEnCours() {
  const l = await listerEnCours();
  const b = document.getElementById("ann-encours-n");
  if (b) b.textContent = l.length ? l.length : "";
  return l;
}
async function dessinerEnCours() {
  const hote = document.getElementById("ann-encours");
  hote.innerHTML = `<div class="chap-placeholder">Chargement…</div>`;
  const l = await majCompteEnCours();
  if (!l.length) {
    hote.innerHTML = `<div class="ann-encours-vide">
      <div class="ann-encours-vide-t">Aucun sujet en cours</div>
      <p>Quand tu composes un sujet et que tu t'arrêtes avant la fin, il t'attend ici : tu reprendras à la question
        où tu t'étais arrêté, avec tes réponses et ton chronomètre.</p>
      <button class="annale-btn primary" onclick="choisirOngletAnnales('banque')">Choisir un sujet →</button></div>`;
    return;
  }
  hote.innerHTML = `<div class="ann-encours-liste">${l.map(s => {
    const n = Number(s.nb_questions) || (s.reponses || []).length || 1;
    const faites = (s.reponses || []).filter(r => r && !r.skipped).length;
    const passees = (s.reponses || []).filter(r => r && r.skipped).length;
    const pct = Math.round(100 * faites / n);
    return `<div class="ann-encours-carte">
      <div class="annale-badges">
        ${s.exam ? `<span class="annale-badge exam">${escapeHtml(s.exam)}</span>` : ""}
        ${s.year ? `<span class="annale-badge">${s.year}</span>` : ""}
        ${s.classe ? `<span class="annale-badge">${escapeHtml(s.classe)}</span>` : ""}
      </div>
      <div class="annale-title">${escapeHtml(s.title || "Sujet")}</div>
      <div class="ann-encours-barre"><i style="width:${pct}%"></i></div>
      <div class="ann-encours-meta">
        <span><b>${faites}</b> / ${n} questions traitées${passees ? ` · ${passees} passée${passees > 1 ? "s" : ""}` : ""}</span>
        <span>arrêté à la question ${Math.min(n, (Number(s.question_index) || 0) + 1)}</span>
        <span>⏱ ${dureeLisible(s.temps_sec)}${s.duration ? " / " + s.duration + " min" : ""}</span>
        <span>${quandLisible(s.updated_at)}</span>
      </div>
      <div class="annale-actions">
        <button class="annale-btn primary" onclick="reprendreExamen(${Number(s.annale_id)})">Reprendre →</button>
        <button class="annale-btn" onclick="abandonnerExamen(${Number(s.annale_id)})">Abandonner</button>
      </div></div>`;
  }).join("")}</div>`;
}
async function abandonnerExamen(annaleId) {
  if (!confirm("Abandonner ce sujet ? Tes réponses enregistrées seront effacées.")) return;
  await oublierExamen(annaleId, false);
  dessinerEnCours();
}

/* ── TEST D'UN SUJET DÉPOSÉ (administrateurs) ──
   Le sujet n'est pas publié : on le charge depuis l'administration, son PDF
   arrive par une requête authentifiée (pas d'URL publique), puis l'épreuve se
   déroule exactement comme pour une annale, correction comprise. */
async function testerDepot(id) {
  if (!(window.MB_AUTH && MB_AUTH.isAdmin && MB_AUTH.isAdmin())) {
    showToast("Le test d'un sujet déposé est réservé aux administrateurs.", "error");
    showView("browse"); return;
  }
  showView("examen", "examen");
  examPhase("choice");
  document.getElementById("examen-choice-grid").innerHTML =
    `<div class="chap-placeholder">Chargement du sujet en test…</div>`;
  try {
    const r = await MB_AUTH.apiFetch("/admin/depots/" + id + "/annale");
    const a = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(a.error || ("HTTP " + r.status));
    const p = await MB_AUTH.apiFetch("/admin/depots/" + id + "/pdf");
    if (!p.ok) throw new Error("PDF indisponible (HTTP " + p.status + ")");
    a.image_url = URL.createObjectURL(new Blob([await p.blob()], { type: "application/pdf" }));
    lancerExamen(a);
  } catch (e) {
    document.getElementById("examen-choice-grid").innerHTML =
      `<div class="chap-placeholder">Test impossible : ${escapeHtml(e.message)}</div>`;
  }
}

/* ── Liens profonds : app.html#vue ouvre directement une section ── */
function routeFromHash() {
  const h = (location.hash || "").replace("#", "");
  /* Test d'un sujet déposé, depuis l'administration : #test-depot=12 */
  if (/^test-depot=\d+$/.test(h)) { testerDepot(Number(h.split("=")[1])); return; }
  switch (h) {
    case "entrainement": openSeance("exercice"); break;
    case "probleme":
    case "problemes":    ouvrirKholleur(); break;   // les « Problèmes » sont devenus le Khôlleur
    case "examen":       openExamen(); break;
    case "annales":      showView("annales"); break;
    case "exercices":
    case "browse":       showView("browse"); break;
    case "ajouter":
    case "add":          showView("add"); break;
    case "seance":       openSeance("exercice"); break; // rétrocompat
    case "bibliotheque": ouvrirBibliotheque(); break;
    case "annales-en-cours": rubrique = "annales"; ongletAnnales = "encours"; showView("browse"); dessinerCarrousel(0); break;
    case "accueil":
    case "home":         showView("home"); break;      // la page principale, tiroir d'accueil ouvert
    default:             showView("browse");            // la page principale
  }
}
// Sécurité au démarrage : aucune surcouche ne doit masquer la page
document.querySelectorAll(".modal-overlay, .annale-modal").forEach(m => m.classList.remove("open"));

/* ── Habillage de l'accueil selon la matière consultée ──
   Le site sert plusieurs matières : le titre, la couleur d'accent et les
   liens internes suivent celle qui est ouverte. */
(function appliquerMatiere() {
  if (!window.MB_MAT) return;
  /* Chaque matière a son accueil. Le français et l'histoire-géographie ont
     leur propre page, sur papier : si on arrive ici par un lien direct, on
     les y renvoie plutôt que de leur servir une interface qui n'est pas la
     leur. */
  if (MB_MAT.accueil && MB_MAT.accueil !== "app.html") {
    location.replace(MB_MAT.lien(MB_MAT.accueil));
    return;
  }
  const tag = document.getElementById("home-tag");
  const nom = document.getElementById("home-matiere");
  if (tag) tag.textContent = "Polymates · " + MB_MAT.nom;
  if (nom) nom.textContent = MB_MAT.nom + ".";
  MB_MAT.propager(document);   // les liens conservent la matière
})();

routeFromHash();
window.addEventListener("hashchange", routeFromHash);

