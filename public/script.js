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
  { id:13, title:"Développer avec la distributivité", level:"college", subject:"Algèbre", difficulty:"Moyen", classe:"3ème", chapitre:"Développement et factorisation",
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
  { id:27, title:"Développer une identité remarquable", level:"lycee", subject:"Algèbre", difficulty:"Moyen", classe:"2nde", chapitre:"Développement et factorisation",
    content:"Développe : (x + 5)² puis factorise : x² − 49.",
    solution:"(x + 5)² = x² + 10x + 25 et x² − 49 = (x − 7)(x + 7).", keys:["x^2+10x+25","x²+10x+25"] },
  { id:28, title:"Résoudre une inéquation", level:"college", subject:"Algèbre", difficulty:"Difficile", classe:"4ème", chapitre:"Inéquations",
    content:"Résous l'inéquation : −2x + 6 > 0.\nAttention au sens de l'inégalité !",
    solution:"−2x > −6, on divise par −2 (négatif) donc on inverse : x < 3.", keys:["x<3","x < 3"] },
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
    analyse:"Ta réponse contient le bon résultat — bien joué. (Correction automatique locale : lance le serveur MathBase pour une analyse détaillée de ton raisonnement par l'IA.)",
    demarche: ex.solution || "—",
    solution: ex.solution || "—"
  };
  return {
    verdict:"incorrect",
    analyse:"Je ne retrouve pas le résultat attendu dans ta copie. Compare ton brouillon avec la démarche ci-dessous pour repérer l'étape qui diffère. (Correction automatique locale : lance le serveur MathBase pour une analyse détaillée par l'IA.)",
    demarche: ex.solution || "—",
    solution: ex.solution || "—"
  };
}

function showView(name, tabName) {
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
  if (name === "browse") loadExercises();
  if (name === "chapter") renderChapterView();
  if (name === "add") backToInput();
  if (name === "seance") resetSeanceWelcome();
  if (name === "annales") loadAnnales();
  window.scrollTo(0, 0);
}

/* ── SÉANCE : deux modes — entraînement (exercices) ou problèmes ── */
let seanceMode = "exercice";
function openSeance(mode) {
  seanceMode = mode === "probleme" ? "probleme" : "exercice";
  const title = document.getElementById("seance-hero-title");
  const sub   = document.getElementById("seance-hero-sub");
  if (seanceMode === "probleme") {
    title.innerHTML = "Séance de<br><em>problèmes.</em>";
    sub.textContent = "Des énoncés longs, en plusieurs étapes — prends le temps de raisonner, l'IA corrige ta démarche.";
  } else {
    title.innerHTML = "Séance<br><em>d'entraînement.</em>";
    sub.textContent = "Choisis ton niveau — l'IA pose les exercices de MathBase et corrige chacune de tes réponses.";
  }
  showView("seance", seanceMode === "probleme" ? "probleme" : "entrainement");
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
  const badge = document.getElementById("total-num");
  badge.textContent = data.length;
  empty.style.display = "none";
  list.innerHTML = "";

  const byChap = new Map();
  data.forEach(ex => {
    const key = ex.chapitre || "Sans chapitre";
    if (!byChap.has(key)) byChap.set(key, []);
    byChap.get(key).push(ex);
  });

  const structure = (typeof CHAPTER_STRUCTURE !== "undefined") ? CHAPTER_STRUCTURE : (window.CHAPTER_STRUCTURE || []);
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

  structure.forEach(mat => {
    const section = document.createElement("div");
    section.className = "chapx-subject";
    section.innerHTML = `<div class="chapx-subject-head" style="--sc:${mat.color||'#c8b97a'}">${escapeHtml(mat.subject)}</div>`;
    const row = document.createElement("div");
    row.className = "chapx-row";
    mat.chapters.forEach(chap => row.appendChild(chapterCardEl(chap, byChap.get(chap) || [], mat.color)));
    section.appendChild(row);
    frag.appendChild(section);
  });

  // intitulés hors-arbre → section « Autres »
  const extras = [...byChap.keys()].filter(k => !known.has(k));
  if (extras.length) {
    const section = document.createElement("div");
    section.className = "chapx-subject";
    section.innerHTML = `<div class="chapx-subject-head" style="--sc:#9b8fb0">Autres</div>`;
    const row = document.createElement("div");
    row.className = "chapx-row";
    extras.forEach(chap => row.appendChild(chapterCardEl(chap, byChap.get(chap), "#9b8fb0")));
    section.appendChild(row);
    frag.appendChild(section);
  }

  list.appendChild(frag);
}

/* ── VUE D'UN CHAPITRE : la liste de ses exercices ── */
function openChapter(chap) {
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

function renderChapterView() {
  const all = LOADED_EXERCISES.filter(ex => (ex.chapitre || "Sans chapitre") === currentChapter);
  const exos = all.filter(ex => (ex.type || "exercice") === "exercice");
  const pbs  = all.filter(ex => (ex.type || "exercice") === "probleme");

  document.getElementById("chapter-title").textContent = currentChapter;
  document.getElementById("chapcount-ex").textContent = exos.length;
  document.getElementById("chapcount-pb").textContent = pbs.length;

  const shown = (chapterMode === "probleme") ? pbs : exos;
  const wordSing = chapterMode === "probleme" ? "problème" : "exercice d'entraînement";
  const wordPlur = chapterMode === "probleme" ? "problèmes" : "exercices d'entraînement";
  document.getElementById("chapter-sub").textContent =
    shown.length + " " + (shown.length > 1 ? wordPlur : wordSing) + " dans ce chapitre";

  const grid = document.getElementById("chapter-list");
  grid.innerHTML = "";
  if (!shown.length) {
    const label = chapterMode === "probleme" ? "problème" : "exercice d'entraînement";
    grid.innerHTML = `<div class="chap-placeholder">Aucun ${label} pour ce chapitre — pour l'instant !</div>`;
    return;
  }
  shown.forEach(ex => grid.appendChild(exerciseCard(ex)));
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

function annaleQuestions(a) {
  const q = a.questions;
  if (Array.isArray(q)) return q;
  try { return JSON.parse(q || "[]"); } catch { return []; }
}

async function loadAnnales() {
  try {
    const res = await MB_AUTH.apiFetch("/annales");
    if (!res.ok) throw new Error();
    LOADED_ANNALES = await res.json();
    DEMO_MODE = false;
  } catch {
    DEMO_MODE = true;
    LOADED_ANNALES = DEMO_ANNALES.map(a => ({ ...a }));
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
      </div>
    </div>
    <div class="annale-sheet">
      <div class="sheet-band"><span>Coll\u00e8ge MathBase</span><span>\u00c9valuation de math\u00e9matiques</span></div>
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
        const { head, body } = exHead(q, i);
        return `
        <div class="sheet-ex">
          <div class="sheet-ex-head"><span>${escapeHtml(head)}</span><span class="sheet-pts">\u2026\u2026 pts</span></div>
          <div class="sheet-ex-body">${nl2br(body)}</div>
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

/* ── EXAMEN : ② le sujet en entier d'abord ── */
function startExamen(id) {
  const a = LOADED_ANNALES.find(x => x.id === id);
  if (!a) return;
  const qs = annaleQuestions(a);
  const isPdf = !!(a.image_url && /\.pdf(\?|$)/i.test(a.image_url));
  if (!qs.length && !isPdf) { showToast("Ce sujet n'a pas encore de questions détaillées.", "error"); return; }
  clearInterval(examTimer);
  EXAM = { annale: a, qs, pdf: isPdf, index: 0, answers: Array(qs.length).fill(null), start: null };
  showView("examen", "examen");
  examPhase("sujet");
  const notice = isPdf
    ? `Prends d'abord connaissance du sujet <strong>en entier</strong>, comme le jour de l'épreuve. Quand tu es prêt·e, lance le chronomètre : tu composeras sur une <strong>copie unique</strong> (à l'écran ou sur papier), le sujet restant affiché à côté de ta rédaction.`
    : `Prends d'abord connaissance du sujet <strong>en entier</strong>, comme le jour de l'épreuve. Quand tu es prêt·e, lance le chronomètre — tu traiteras ensuite les questions une par une.`;
  document.getElementById("examen-sujet-body").innerHTML = `
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
    ${qs.map(q => `<div class="annale-q"><div class="annale-q-enonce">${nl2br(q.enonce)}</div>${annaleFigure(q.figure)}</div>`).join("")}`;
}

/* ── EXAMEN : ③ question par question ── */
function beginEpreuve() {
  EXAM.start = Date.now();
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

function paintExamQuestion() {
  const q = EXAM.qs[EXAM.index];
  const saved = EXAM.answers[EXAM.index];
  document.getElementById("exam-progress").textContent = `Question ${EXAM.index + 1} / ${EXAM.qs.length}`;
  const pdfBar = EXAM.pdf && EXAM.annale.image_url
    ? `<details class="exam-pdf-bar" open><summary>\ud83d\udcc4 Sujet officiel (PDF) \u2014 clique pour masquer/afficher</summary>`
      + `<iframe class="annale-pdf" style="height:52vh;margin-top:0.6rem" src="${escapeHtml(EXAM.annale.image_url)}#view=FitH" title="Sujet PDF"></iframe>`
      + `<div class="exam-notice" style="margin-top:0.5rem">Le sujet complet (avec les figures) reste consultable ici. Ci-dessous, r\u00e9dige la question demand\u00e9e.</div></details>`
    : "";
  document.getElementById("exam-enonce").innerHTML = pdfBar + nl2br(q.enonce) + annaleFigure(q.figure);
  const ta = document.getElementById("exam-answer");
  ta.value = saved ? saved.answer : "";
  ta.readOnly = !!saved;
  document.getElementById("exam-feedback").innerHTML = (saved && saved.result) ? examFeedbackHTML(saved.result) : "";
  document.getElementById("exam-actions").style.display = saved ? "none" : "";
  const next = document.getElementById("exam-next");
  next.style.display = saved ? "" : "none";
  next.textContent = (EXAM.index >= EXAM.qs.length - 1) ? "Terminer l'épreuve →" : "Question suivante →";
}

async function submitExamAnswer() {
  const ta = document.getElementById("exam-answer");
  const answer = ta.value.trim();
  if (!answer) { showToast("Rédige ta réponse avant de valider.", "error"); return; }
  const q = EXAM.qs[EXAM.index];
  const pseudoEx = {
    title: EXAM.annale.title + " — question " + (EXAM.index + 1),
    // enonce_correction : texte complet du sujet, non affiché à l'élève
    // (il lit le PDF) mais indispensable au correcteur pour comprendre la question.
    content: q.enonce_correction || q.enonce,
    solution: q.solution || null,
    // La figure du sujet n'est pas visible par le correcteur : on lui transmet
    // sa description textuelle, sinon toute la géométrie est corrigée à l'aveugle.
    figure_desc: q.figure_desc || null,
  };
  const btn = document.getElementById("exam-validate");
  btn.disabled = true;
  document.getElementById("exam-feedback").innerHTML = `<div class="exam-loading">Le correcteur lit ta copie…</div>`;
  let result;
  try {
    if (DEMO_MODE) {
      await new Promise(r => setTimeout(r, 600));
      result = { verdict: "partial", analyse: "Mode démo : compare ta réponse au corrigé ci-dessous — le serveur MathBase fournira une correction détaillée de ta démarche.", solution: q.solution || "—" };
    } else {
      const res = await MB_AUTH.apiFetch("/exercises/correct", { method: "POST", body: JSON.stringify({ exercise: pseudoEx, answer }) });
      if (!res.ok) throw new Error();
      result = await res.json();
      if (result.error) throw new Error(result.error);
    }
  } catch {
    result = { verdict: "partial", analyse: "Correction indisponible pour l'instant — compare ta copie avec le corrigé.", solution: q.solution || "—" };
  }
  btn.disabled = false;
  EXAM.answers[EXAM.index] = { answer, result, skipped: false };
  paintExamQuestion();
}

function examFeedbackHTML(r) {
  const v = ["correct", "partial", "incorrect"].includes(r.verdict) ? r.verdict : "partial";
  const lab = v === "correct" ? "✔ Correct" : v === "incorrect" ? "✘ À revoir" : "± Partiellement juste";
  const sol = r.solution || r.demarche;
  return `<div class="exam-verdict ${v}">${lab}</div>
    ${r.analyse ? `<div class="exam-analyse">${nl2br(r.analyse)}</div>` : ""}
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
  paintExamQuestion();
  window.scrollTo(0, 0);
}

/* ── EXAMEN : ④ bilan ── */
function finishExam() {
  clearInterval(examTimer);
  examPhase("done");
  if (EXAM.pdf) {
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
        <button class="annale-btn" onclick="startExamen(${EXAM.annale.id})">\u21bb Recommencer ce sujet</button>
        <button class="annale-btn primary" onclick="showView('annales')">Retour aux annales \u2192</button>
      </div>`;
    return;
  }
  const ok      = EXAM.answers.filter(x => x && x.result && x.result.verdict === "correct").length;
  const partial = EXAM.answers.filter(x => x && x.result && x.result.verdict === "partial").length;
  const elapsed = EXAM.start ? Math.round((Date.now() - EXAM.start) / 60000) : 0;
  const rows = EXAM.qs.map((q, i) => {
    const a = EXAM.answers[i];
    const st = !a || a.skipped ? "— passée" :
      a.result.verdict === "correct" ? "✔ correcte" :
      a.result.verdict === "incorrect" ? "✘ à revoir" : "± partielle";
    const cls = !a || a.skipped ? "skip" : a.result.verdict;
    return `<div class="exam-recap-row"><span class="exam-recap-q">Question ${i + 1}</span><span class="exam-recap-st ${cls}">${st}</span></div>`;
  }).join("");
  document.getElementById("examen-done-body").innerHTML = `
    <div class="annale-paper-head">
      <h2>Épreuve terminée !</h2>
      <div class="annale-meta">${escapeHtml(EXAM.annale.title)} · ${elapsed} min au chrono${EXAM.annale.duration ? ` (épreuve officielle : ${EXAM.annale.duration} min)` : ""}</div>
    </div>
    <div class="exam-score">✔ ${ok} correcte${ok > 1 ? "s" : ""} · ± ${partial} partielle${partial > 1 ? "s" : ""} · sur ${EXAM.qs.length} questions</div>
    ${rows}
    <div class="exam-start-row">
      <button class="annale-btn" onclick="startExamen(${EXAM.annale.id})">↻ Recommencer ce sujet</button>
      <button class="annale-btn primary" onclick="showView('annales')">Retour aux annales →</button>
    </div>`;
}

async function loadExercises() {
  const list = document.getElementById("list");
  const empty = document.getElementById("empty-state");
  list.innerHTML = Array(6).fill(0).map(() => `<div class="skeleton"><div class="skel-line" style="height:16px;width:55%"></div><div class="skel-line" style="height:20px;width:85%"></div><div class="skel-line" style="height:14px;width:92%"></div><div class="skel-line" style="height:14px;width:70%"></div></div>`).join("");
  empty.style.display = "none";
  let url = "/exercises";
  if (currentFilter) url += "?level=" + currentFilter;
  try {
    const res = await MB_AUTH.apiFetch(url);
    if (!res.ok) throw new Error();
    const data = await res.json();
    renderByChapter(data);
  } catch {
    // Serveur injoignable → mode démo local
    DEMO_MODE = true;
    const data = DEMO_EXERCISES.filter(ex => !currentFilter || ex.level === currentFilter);
    renderByChapter(data);
    showToast("Mode démo : banque locale (serveur non connecté).", "info");
  }
}

async function analyseExercise() {
  const title   = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  if (!title || !content) { showToast("Le titre et l'énoncé sont obligatoires.", "error"); return; }
  pendingExercise = { title, content, level: document.getElementById("level").value, subject: document.getElementById("subject").value, difficulty: document.getElementById("difficulty").value, solution: document.getElementById("solution").value.trim() || null };
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
    }
  } catch { document.getElementById("ai-loading").style.display="none"; showToast("Erreur lors de l'analyse IA.","error"); backToInput(); }
}

async function confirmAdd() {
  if (!pendingExercise) return;
  pendingExercise.classe   = document.getElementById("ai-classe-input").value.trim()   || document.getElementById("ai-classe").textContent;
  pendingExercise.chapitre = document.getElementById("ai-chapitre-input").value.trim() || document.getElementById("ai-chapitre").textContent;
  await submitExercise(pendingExercise);
}

async function forceAdd() {
  if (!pendingExercise) return;
  await submitExercise(pendingExercise);
}

async function submitExercise(data) {
  try {
    const res = await MB_AUTH.apiFetch("/exercises", { method:"POST", body:JSON.stringify(data) });
    if (!res.ok) throw new Error();
    pendingExercise = null;
    showToast("Exercice ajouté avec succès !", "success");
    showView("browse");
  } catch { showToast("Erreur lors de l'ajout.", "error"); }
}

function backToInput() {
  document.getElementById("step-input").style.display = "block";
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
    <div class="modal-delete-zone"><button class="btn-delete" onclick="deleteExercise(${ex.id})">Supprimer cet exercice</button></div>`;
  document.getElementById("modal-overlay").classList.add("open");
}

async function deleteExercise(id) {
  if (!confirm("Supprimer définitivement cet exercice ?")) return;
  try {
    const res = await fetch("/exercises/" + id, { method:"DELETE" });
    if (!res.ok) throw new Error();
    closeModal(); showToast("Exercice supprimé.", "success"); loadExercises();
  } catch { showToast("Erreur lors de la suppression.", "error"); }
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
let seanceExercises  = [];
let seanceIndex      = 0;
let seanceCorrect    = 0;
let seanceWrong      = 0;
let seanceSkipped    = 0;
let seanceHistory    = [];   // par exercice : { answer, result, skipped } ou null
let seanceMax        = 0;    // exercice le plus loin atteint
let isTurning        = false;

function resetSeanceWelcome() {
  document.getElementById("seance-welcome").style.display = "";
  document.getElementById("seance-session").style.display = "none";
  document.getElementById("seance-results").style.display = "none";
}

function selectLevel(btn, level) {
  document.querySelectorAll(".seance-level-card").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  seanceLevel = level;
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
    params.append("type", seanceMode);
    if (seanceLevel) params.append("level", seanceLevel);
    if (seanceDiff)  params.append("difficulty", seanceDiff);
    url += "?" + params.toString();

    let data;
    try {
      const res = await MB_AUTH.apiFetch(url);
      if (!res.ok) throw new Error();
      data = await res.json();
      DEMO_MODE = false;
    } catch {
      DEMO_MODE = true;
      data = DEMO_EXERCISES.filter(ex =>
        (ex.type || "exercice") === seanceMode &&
        (!seanceLevel || ex.level === seanceLevel) &&
        (!seanceDiff  || ex.difficulty === seanceDiff));
    }

    if (!data.length && seanceMode === "probleme") {
      showToast("Aucun problème disponible pour ces filtres — ajoute-en depuis l'onglet Ajouter !", "error");
      return;
    }

    if (!data.length) {
      showToast("Aucun exercice trouvé pour ces filtres.", "error");
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

async function submitAnswer() {
  const ta     = document.getElementById("session-answer");
  const answer = ta.value.trim();
  if (!answer) { showToast("Écris ton brouillon avant de corriger.", "error"); return; }
  if (isTurning) return;

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

    // Enregistrer dans l'historique (relisible plus tard)
    seanceHistory[seanceIndex] = { answer, result, skipped: false };
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

/* ── Liens profonds : app.html#vue ouvre directement une section ── */
function routeFromHash() {
  const h = (location.hash || "").replace("#", "");
  switch (h) {
    case "entrainement": openSeance("exercice"); break;
    case "probleme":
    case "problemes":    openSeance("probleme"); break;
    case "examen":       openExamen(); break;
    case "annales":      showView("annales"); break;
    case "exercices":
    case "browse":       showView("browse"); break;
    case "ajouter":
    case "add":          showView("add"); break;
    case "seance":       openSeance("exercice"); break; // rétrocompat
    default:             showView("home");
  }
}
// Sécurité au démarrage : aucune surcouche ne doit masquer la page
document.querySelectorAll(".modal-overlay, .annale-modal").forEach(m => m.classList.remove("open"));
routeFromHash();
window.addEventListener("hashchange", routeFromHash);
