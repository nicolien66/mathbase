/* ═══════════════════════════════════════════════════════════════
   MathBase — seed-exercices-6e.js
   Ajoute 82 exercices ORIGINAUX et INDÉPENDANTS de 6ème à la
   table « exercises » (un exercice = une tâche ciblée + corrigé),
   répartis sur tous les chapitres du programme :
   entiers & décimaux, fractions, proportionnalité, pourcentages,
   longueurs, aires, durées, arithmétique, priorités opératoires,
   géométrie, symétrie axiale, triangle, périmètres & aires,
   organisation des données. Les problèmes (type "probleme")
   alimentent aussi l'onglet Problèmes du site.

   Usage :
     railway run node seed-exercices-6e.js
     ou : DATABASE_URL=postgres://... node seed-exercices-6e.js
   Idempotent : un exercice déjà présent (titre + classe) est ignoré.
   ═══════════════════════════════════════════════════════════════ */
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const CLASSE = "6ème";
const LEVEL = "college";

/* E(chapitre, subject, difficulty, type, title, content, solution) */
const E = (chapitre, subject, difficulty, type, title, content, solution) =>
  ({ chapitre, subject, difficulty, type, title, content, solution });

const EXOS_6E = [

  /* ═══ ENTIERS & DÉCIMAUX ═══ */
  E("Entiers & décimaux","Arithmétique","Facile","exercice","Écrire un grand nombre en chiffres",
    "Écris en chiffres : « deux millions trois cent mille quarante ».",
    "2 300 040."),
  E("Entiers & décimaux","Arithmétique","Facile","exercice","Chiffre et nombre de centaines",
    "Dans le nombre 68 754 :\n1) Quel est le chiffre des centaines ?\n2) Quel est le nombre de centaines ?",
    "1) Le chiffre des centaines est 7.\n2) Le nombre de centaines est 687 (68 754 = 687 × 100 + 54)."),
  E("Entiers & décimaux","Arithmétique","Facile","exercice","Comparer deux décimaux",
    "Compare 9,08 et 9,3 en justifiant.",
    "On compare les dixièmes : 0 < 3, donc 9,08 < 9,3."),
  E("Entiers & décimaux","Arithmétique","Moyen","exercice","Ranger des décimaux",
    "Range dans l'ordre croissant : 6,4 ; 6,04 ; 6,44 ; 6,404.",
    "6,04 < 6,4 < 6,404 < 6,44\n(6,4 = 6,400, ce qui permet de comparer avec 6,404 et 6,44 = 6,440.)"),
  E("Entiers & décimaux","Arithmétique","Facile","exercice","Multiplier par 10, 100, 1 000",
    "Calcule :\na) 4,25 × 100\nb) 0,7 × 1 000\nc) 36 × 10",
    "a) 425\nb) 700\nc) 360"),
  E("Entiers & décimaux","Arithmétique","Facile","exercice","Diviser par 10 et 100",
    "Calcule :\na) 87 ÷ 10\nb) 3,5 ÷ 100",
    "a) 8,7\nb) 0,035"),
  E("Entiers & décimaux","Arithmétique","Moyen","exercice","Encadrer au dixième",
    "Encadre 5,732 entre deux nombres à un chiffre après la virgule.",
    "5,7 < 5,732 < 5,8."),
  E("Entiers & décimaux","Arithmétique","Moyen","exercice","Intercaler un décimal",
    "Donne un nombre décimal compris entre 2,4 et 2,5.",
    "Par exemple 2,45 (tout nombre strictement compris entre 2,4 et 2,5 convient : 2,41 ; 2,47…)."),
  E("Entiers & décimaux","Arithmétique","Moyen","exercice","Arrondir un décimal",
    "Arrondis 47,86 :\na) à l'unité\nb) au dixième",
    "a) 48 (car le chiffre des dixièmes, 8, est ≥ 5).\nb) 47,9 (car le chiffre des centièmes, 6, est ≥ 5)."),
  E("Entiers & décimaux","Arithmétique","Facile","exercice","Addition posée de décimaux",
    "Pose et effectue : 26,7 + 8,45.",
    "26,70 + 8,45 = 35,15 (on aligne les virgules)."),
  E("Entiers & décimaux","Arithmétique","Moyen","exercice","Soustraction posée de décimaux",
    "Pose et effectue : 60,2 − 17,85.",
    "60,20 − 17,85 = 42,35."),
  E("Entiers & décimaux","Arithmétique","Moyen","exercice","Multiplication de décimaux",
    "Pose et effectue : 7,3 × 2,4.",
    "73 × 24 = 1 752 ; avec 2 chiffres après la virgule au total : 7,3 × 2,4 = 17,52."),
  E("Entiers & décimaux","Arithmétique","Difficile","exercice","Division décimale",
    "Pose et effectue : 58,8 ÷ 7.",
    "58,8 ÷ 7 = 8,4 (vérification : 7 × 8,4 = 58,8)."),
  E("Entiers & décimaux","Arithmétique","Moyen","probleme","La monnaie du libraire",
    "Sacha achète deux bandes dessinées à 9,95 € l'une. Il paie avec un billet de 20 € et un billet de 10 €.\nCombien le libraire doit-il lui rendre ?",
    "Dépense : 2 × 9,95 = 19,90 €.\nMonnaie : 30 − 19,90 = 10,10 €."),
  E("Entiers & décimaux","Arithmétique","Difficile","probleme","Le plein de carburant",
    "Une automobiliste met 32,5 L de carburant à 1,68 € le litre.\nQuel est le montant payé ?",
    "32,5 × 1,68 = 54,60 €."),

  /* ═══ FRACTIONS ═══ */
  E("Fractions","Arithmétique","Facile","exercice","Lire une fraction",
    "Pour la fraction 5/9 :\n1) Comment se lit-elle ?\n2) Quel est son numérateur ? Son dénominateur ?",
    "1) « Cinq neuvièmes ».\n2) Numérateur : 5 ; dénominateur : 9."),
  E("Fractions","Arithmétique","Facile","exercice","Fraction d'une figure",
    "Un disque est partagé en 8 parts égales ; 3 parts sont coloriées.\nQuelle fraction du disque est coloriée ?",
    "3/8 du disque est colorié."),
  E("Fractions","Arithmétique","Moyen","exercice","Simplifier des fractions",
    "Simplifie :\na) 12/16\nb) 20/30",
    "a) 12/16 = 3/4 (division par 4).\nb) 20/30 = 2/3 (division par 10)."),
  E("Fractions","Arithmétique","Moyen","exercice","Comparer une fraction à 1",
    "Pour chaque fraction, dis si elle est inférieure, égale ou supérieure à 1 :\n11/8 ; 4/7 ; 6/6",
    "11/8 > 1 (numérateur > dénominateur)\n4/7 < 1\n6/6 = 1"),
  E("Fractions","Arithmétique","Facile","exercice","Fraction d'une quantité",
    "Calcule les 2/5 de 30.",
    "30 ÷ 5 = 6, puis 6 × 2 = 12."),
  E("Fractions","Arithmétique","Moyen","exercice","Additionner avec le même dénominateur",
    "Calcule : 4/9 + 3/9.",
    "4/9 + 3/9 = 7/9."),
  E("Fractions","Arithmétique","Moyen","exercice","Additionner avec des dénominateurs multiples",
    "Calcule et simplifie : 1/3 + 5/12.",
    "1/3 = 4/12, donc 4/12 + 5/12 = 9/12 = 3/4."),
  E("Fractions","Arithmétique","Moyen","exercice","Écriture décimale d'une fraction",
    "Donne l'écriture décimale :\na) 3/5\nb) 9/4",
    "a) 3 ÷ 5 = 0,6\nb) 9 ÷ 4 = 2,25"),
  E("Fractions","Arithmétique","Difficile","exercice","Encadrer une fraction",
    "Encadre 17/5 entre deux entiers consécutifs.",
    "17/5 = 15/5 + 2/5 = 3 + 2/5, donc 3 < 17/5 < 4."),
  E("Fractions","Arithmétique","Moyen","probleme","Le gâteau partagé",
    "Un gâteau est découpé en 12 parts égales. Lila en mange le quart et son frère en mange le tiers.\nCombien de parts reste-t-il ? Quelle fraction du gâteau cela représente-t-il ?",
    "Lila : 12 ÷ 4 = 3 parts. Son frère : 12 ÷ 3 = 4 parts.\nReste : 12 − 3 − 4 = 5 parts, soit 5/12 du gâteau."),
  E("Fractions","Arithmétique","Difficile","probleme","La jauge du réservoir",
    "Le réservoir d'une voiture contient 48 L quand il est plein. La jauge indique qu'il est rempli aux 5/8.\nQuel volume d'essence contient-il ? Combien de litres manquent pour le remplir ?",
    "5/8 de 48 : 48 ÷ 8 = 6, puis 6 × 5 = 30 L dans le réservoir.\nIl manque 48 − 30 = 18 L."),

  /* ═══ PROPORTIONNALITÉ ═══ */
  E("Proportionnalité","Arithmétique","Facile","exercice","Reconnaître un tableau de proportionnalité",
    "Le tableau donne : 2 kg → 7 € et 6 kg → 21 €.\nEst-ce un tableau de proportionnalité ? Justifie.",
    "7 ÷ 2 = 3,5 et 21 ÷ 6 = 3,5.\nLe quotient est constant : oui, c'est un tableau de proportionnalité (coefficient 3,5)."),
  E("Proportionnalité","Arithmétique","Moyen","exercice","Compléter un tableau de proportionnalité",
    "3 kg de poires coûtent 7,20 €.\nComplète : 5 kg → … €.",
    "Prix d'un kg : 7,20 ÷ 3 = 2,40 €.\n5 kg : 5 × 2,40 = 12 €."),
  E("Proportionnalité","Arithmétique","Facile","exercice","La règle de trois",
    "4 cahiers identiques coûtent 5 €.\nCombien coûtent 7 cahiers ?",
    "Prix de 7 cahiers = (7 × 5) ÷ 4 = 35 ÷ 4 = 8,75 €."),
  E("Proportionnalité","Arithmétique","Moyen","exercice","Coefficient de proportionnalité",
    "Dans une situation de proportionnalité, 6 a pour image 15.\n1) Quel est le coefficient de proportionnalité ?\n2) Quelle est l'image de 8 ?",
    "1) 15 ÷ 6 = 2,5.\n2) 8 × 2,5 = 20."),
  E("Proportionnalité","Arithmétique","Moyen","exercice","La méthode additive",
    "2 kg de cerises coûtent 5,60 € et 3 kg coûtent 8,40 €.\nSans calculer le prix d'un kilogramme, trouve le prix de 5 kg.",
    "5 = 2 + 3, donc prix de 5 kg = 5,60 + 8,40 = 14 €."),
  E("Proportionnalité","Arithmétique","Difficile","exercice","Utiliser une échelle",
    "Un plan est à l'échelle 1/100.\nUn couloir mesure 8,5 cm sur le plan. Quelle est sa longueur réelle, en mètres ?",
    "8,5 × 100 = 850 cm = 8,5 m."),
  E("Proportionnalité","Arithmétique","Moyen","probleme","La recette pour 9 personnes",
    "Une recette de riz au lait pour 6 personnes demande 240 g de riz.\nQuelle masse de riz faut-il pour 9 personnes ?",
    "(9 × 240) ÷ 6 = 2 160 ÷ 6 = 360 g."),
  E("Proportionnalité","Arithmétique","Difficile","probleme","Le tarif est-il proportionnel ?",
    "Une patinoire vend 5 tickets pour 12 € et 10 tickets pour 22 €.\nLe prix est-il proportionnel au nombre de tickets ? Justifie.",
    "12 ÷ 5 = 2,40 € le ticket, mais 22 ÷ 10 = 2,20 € le ticket.\nLes quotients sont différents : le prix n'est pas proportionnel au nombre de tickets."),

  /* ═══ POURCENTAGES ═══ */
  E("Pourcentages","Arithmétique","Facile","exercice","Pourcentages de tête",
    "Calcule de tête :\na) 50 % de 84\nb) 25 % de 84\nc) 10 % de 84",
    "a) 84 ÷ 2 = 42\nb) 84 ÷ 4 = 21\nc) 84 ÷ 10 = 8,4"),
  E("Pourcentages","Arithmétique","Moyen","exercice","Appliquer un pourcentage",
    "Calcule 30 % de 150.",
    "150 × 30 ÷ 100 = 45."),
  E("Pourcentages","Arithmétique","Moyen","exercice","Pourcentage d'une classe",
    "Dans une classe de 28 élèves, 75 % ont un animal de compagnie.\nCombien d'élèves ont un animal ?",
    "28 × 75 ÷ 100 = 21 élèves."),
  E("Pourcentages","Arithmétique","Difficile","probleme","La remise du magasin de sport",
    "Un ballon coûte 40 €. Le magasin accorde une remise de 15 %.\nCalcule le montant de la remise, puis le prix payé.",
    "Remise : 40 × 15 ÷ 100 = 6 €.\nPrix payé : 40 − 6 = 34 €."),

  /* ═══ LONGUEUR ═══ */
  E("Longueur","Arithmétique","Facile","exercice","Convertir des longueurs",
    "Convertis :\na) 7,3 km en m\nb) 84 cm en m\nc) 4,06 m en cm",
    "a) 7 300 m\nb) 0,84 m\nc) 406 cm"),
  E("Longueur","Arithmétique","Moyen","exercice","Comparer des longueurs",
    "Range dans l'ordre croissant : 0,9 km ; 950 m ; 9 500 dm.\n(Convertis d'abord dans la même unité.)",
    "0,9 km = 900 m et 9 500 dm = 950 m.\n900 m < 950 m = 950 m : donc 0,9 km < 950 m = 9 500 dm."),
  E("Longueur","Arithmétique","Moyen","probleme","Le ruban à partager",
    "Un ruban de 3,6 m est découpé en morceaux de 40 cm.\nCombien de morceaux obtient-on ?",
    "3,6 m = 360 cm, et 360 ÷ 40 = 9 morceaux."),
  E("Longueur","Géométrie","Facile","exercice","Périmètre d'un triangle",
    "Un triangle a des côtés de 4,2 cm, 3,8 cm et 5,5 cm.\nCalcule son périmètre.",
    "P = 4,2 + 3,8 + 5,5 = 13,5 cm."),

  /* ═══ AIRES ═══ */
  E("Aires","Géométrie","Facile","exercice","Convertir des aires",
    "Convertis :\na) 5 m² en cm²\nb) 320 dm² en m²",
    "a) 1 m² = 10 000 cm², donc 5 m² = 50 000 cm².\nb) 320 dm² = 3,2 m² (1 m² = 100 dm²)."),
  E("Aires","Géométrie","Facile","exercice","Aire d'un rectangle",
    "Calcule l'aire d'un rectangle de longueur 8,5 cm et de largeur 4 cm.",
    "A = 8,5 × 4 = 34 cm²."),
  E("Aires","Géométrie","Moyen","exercice","Aire d'un carré",
    "Calcule l'aire d'un carré de côté 7,5 cm.",
    "A = 7,5 × 7,5 = 56,25 cm²."),
  E("Aires","Géométrie","Moyen","exercice","Aire d'un triangle rectangle",
    "Un triangle rectangle a ses deux côtés de l'angle droit qui mesurent 6 cm et 9 cm.\nCalcule son aire.",
    "A = (6 × 9) ÷ 2 = 27 cm²."),
  E("Aires","Géométrie","Difficile","probleme","La chambre à moquette",
    "Une chambre rectangulaire mesure 4,2 m sur 3,5 m. On veut la recouvrir de moquette vendue 18 € le m².\n1) Calcule l'aire de la chambre.\n2) Calcule le prix de la moquette.",
    "1) 4,2 × 3,5 = 14,7 m².\n2) 14,7 × 18 = 264,60 €."),

  /* ═══ REPÉRAGE TEMPS & DURÉES ═══ */
  E("Repérage temps & durées","Arithmétique","Facile","exercice","Les unités de temps",
    "Complète :\n1 h = … min ; 1 min = … s ; 1 jour = … h",
    "1 h = 60 min ; 1 min = 60 s ; 1 jour = 24 h."),
  E("Repérage temps & durées","Arithmétique","Facile","exercice","Convertir des durées",
    "Convertis :\na) 3 h 20 min en minutes\nb) 150 min en heures et minutes",
    "a) 3 × 60 + 20 = 200 min.\nb) 150 = 2 × 60 + 30, soit 2 h 30 min."),
  E("Repérage temps & durées","Arithmétique","Moyen","exercice","Calculer une heure d'arrivée",
    "Un film commence à 10 h 35 et dure 1 h 50.\nÀ quelle heure se termine-t-il ?",
    "10 h 35 + 1 h = 11 h 35, puis + 50 min = 12 h 25."),
  E("Repérage temps & durées","Arithmétique","Moyen","exercice","Calculer une durée",
    "Un train part à 8 h 45 et arrive à 11 h 20.\nCombien de temps dure le trajet ?",
    "De 8 h 45 à 11 h : 2 h 15. De 11 h à 11 h 20 : 20 min.\nDurée totale : 2 h 35 min."),
  E("Repérage temps & durées","Arithmétique","Difficile","probleme","Le marathon en relais",
    "Trois coureurs se relaient : 58 min 40 s, puis 1 h 02 min 35 s, puis 55 min 50 s.\nCalcule la durée totale de la course.",
    "Secondes : 40 + 35 + 50 = 125 s = 2 min 5 s.\nMinutes : 58 + 62 + 55 = 175 min, plus 2 min = 177 min = 2 h 57 min.\nDurée totale : 2 h 57 min 5 s."),

  /* ═══ ARITHMÉTIQUE (multiples, divisions) ═══ */
  E("Arithmétique","Arithmétique","Facile","exercice","Multiples d'un nombre",
    "Donne les quatre premiers multiples non nuls de 9.",
    "9 ; 18 ; 27 ; 36."),
  E("Arithmétique","Arithmétique","Facile","exercice","Critères de divisibilité",
    "Le nombre 745 est-il divisible par 5 ? par 2 ? par 3 ? Justifie.",
    "Par 5 : oui, il se termine par 5.\nPar 2 : non, il est impair.\nPar 3 : 7 + 4 + 5 = 16, qui n'est pas multiple de 3 → non."),
  E("Arithmétique","Arithmétique","Moyen","exercice","Poser une division euclidienne",
    "Pose et effectue la division euclidienne de 823 par 25.",
    "823 = 25 × 32 + 23 → quotient 32, reste 23 (23 < 25 ✓)."),
  E("Arithmétique","Arithmétique","Moyen","exercice","Vocabulaire de la division euclidienne",
    "On donne : 194 = 12 × 16 + 2.\nDonne le dividende, le diviseur, le quotient et le reste.",
    "Dividende : 194 ; diviseur : 12 ; quotient : 16 ; reste : 2."),
  E("Arithmétique","Arithmétique","Moyen","probleme","Les œufs en boîtes",
    "Une fermière range 100 œufs dans des boîtes de 6.\nCombien de boîtes pleines obtient-elle ? Combien d'œufs restent ?",
    "100 = 6 × 16 + 4.\n16 boîtes pleines et 4 œufs restants."),
  E("Arithmétique","Arithmétique","Difficile","probleme","Les cars du voyage scolaire",
    "187 élèves partent en voyage dans des cars de 52 places.\nCombien de cars faut-il réserver ?",
    "187 = 52 × 3 + 31 : avec 3 cars, 31 élèves n'ont pas de place.\nIl faut réserver 4 cars."),

  /* ═══ ENCHAÎNEMENT D'OPÉRATIONS ═══ */
  E("Enchaînement d'opérations","Algèbre","Facile","exercice","Priorité de la multiplication",
    "Calcule : 9 + 6 × 4.",
    "La multiplication est prioritaire : 9 + 24 = 33."),
  E("Enchaînement d'opérations","Algèbre","Moyen","exercice","Calcul avec parenthèses",
    "Calcule : (9 + 6) × 4.",
    "Parenthèses d'abord : 15 × 4 = 60."),
  E("Enchaînement d'opérations","Algèbre","Moyen","exercice","Calculer en détaillant",
    "Calcule en détaillant les étapes : 50 − 2 × (3 + 7).",
    "50 − 2 × 10 = 50 − 20 = 30."),
  E("Enchaînement d'opérations","Algèbre","Moyen","exercice","Traduire par une expression",
    "Nora achète 4 stylos à 2 € l'un et un cahier à 3,50 €.\nÉcris le calcul en une seule expression, puis calcule la dépense.",
    "4 × 2 + 3,50 = 8 + 3,50 = 11,50 €."),
  E("Enchaînement d'opérations","Algèbre","Difficile","exercice","Le rôle des parenthèses",
    "Calcule :\na) 20 − 8 ÷ 4\nb) (20 − 8) ÷ 4\nQue remarques-tu ?",
    "a) 20 − 2 = 18.\nb) 12 ÷ 4 = 3.\nLes parenthèses changent l'ordre des calculs, donc le résultat."),

  /* ═══ GÉOMÉTRIE ═══ */
  E("Géométrie","Géométrie","Facile","exercice","Droite, segment, demi-droite",
    "Que désignent les notations (AB), [AB] et [AB) ?",
    "(AB) : la droite passant par A et B.\n[AB] : le segment d'extrémités A et B.\n[AB) : la demi-droite d'origine A passant par B."),
  E("Géométrie","Géométrie","Facile","exercice","Perpendiculaires et parallèles",
    "1) Que signifient les notations (d) ⊥ (d') et (d) // (d') ?\n2) Deux droites perpendiculaires à une même droite sont-elles parallèles entre elles ?",
    "1) (d) ⊥ (d') : les droites sont perpendiculaires ; (d) // (d') : elles sont parallèles.\n2) Oui : si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles."),
  E("Géométrie","Géométrie","Moyen","exercice","Le vocabulaire du cercle",
    "Un cercle de centre O a un rayon de 4,5 cm.\n1) Quelle est la longueur de son diamètre ?\n2) Comment s'appelle un segment joignant deux points du cercle sans passer par le centre ?",
    "1) Diamètre = 2 × 4,5 = 9 cm.\n2) Une corde."),
  E("Géométrie","Géométrie","Moyen","exercice","Décrire un cube",
    "Combien un cube possède-t-il de faces, d'arêtes et de sommets ?",
    "6 faces (carrées), 12 arêtes et 8 sommets."),
  E("Géométrie","Géométrie","Difficile","exercice","La longueur des arêtes d'un pavé",
    "Un pavé droit a pour dimensions 5 cm, 3 cm et 2 cm.\nCalcule la longueur totale de ses arêtes.",
    "Un pavé a 4 arêtes de chaque dimension : 4 × (5 + 3 + 2) = 4 × 10 = 40 cm."),

  /* ═══ SYMÉTRIE AXIALE ═══ */
  E("Symétrie axiale","Géométrie","Facile","exercice","Axes de symétrie des figures usuelles",
    "Combien d'axes de symétrie possèdent : un carré, un rectangle, un triangle équilatéral, un cercle ?",
    "Carré : 4 axes. Rectangle : 2 axes. Triangle équilatéral : 3 axes. Cercle : une infinité (tous ses diamètres)."),
  E("Symétrie axiale","Géométrie","Moyen","exercice","La propriété de la médiatrice",
    "Énonce la propriété caractéristique de la médiatrice d'un segment.",
    "La médiatrice d'un segment est la droite perpendiculaire à ce segment en son milieu.\nTout point de la médiatrice est à égale distance des deux extrémités du segment."),
  E("Symétrie axiale","Géométrie","Moyen","exercice","Construire un symétrique",
    "Explique comment construire au compas le symétrique A' d'un point A par rapport à une droite (d).",
    "On trace la perpendiculaire à (d) passant par A ; elle coupe (d) en H.\nOn reporte la longueur AH de l'autre côté : A' est tel que H soit le milieu de [AA']."),

  /* ═══ GÉOMÉTRIE DU TRIANGLE ═══ */
  E("Géométrie du triangle","Géométrie","Moyen","exercice","Somme des angles d'un triangle",
    "Dans un triangle, deux angles mesurent 48° et 63°.\nCalcule le troisième angle.",
    "180 − (48 + 63) = 180 − 111 = 69°."),
  E("Géométrie du triangle","Géométrie","Moyen","exercice","Inégalité triangulaire",
    "Peut-on construire un triangle de côtés 3 cm, 5 cm et 12 cm ? Justifie.",
    "3 + 5 = 8 < 12 : la somme des deux petits côtés est inférieure au grand côté.\nLe triangle n'est pas constructible."),
  E("Géométrie du triangle","Géométrie","Difficile","exercice","Les angles d'un triangle isocèle",
    "Un triangle est isocèle et son angle principal mesure 34°.\nCalcule la mesure de ses deux angles à la base.",
    "(180 − 34) ÷ 2 = 146 ÷ 2 = 73° chacun."),

  /* ═══ PÉRIMÈTRES ET AIRES ═══ */
  E("Périmètres et aires","Géométrie","Facile","exercice","Périmètre d'un rectangle",
    "Calcule le périmètre d'un rectangle de longueur 6,5 cm et de largeur 3,5 cm.",
    "P = 2 × (6,5 + 3,5) = 2 × 10 = 20 cm."),
  E("Périmètres et aires","Géométrie","Moyen","exercice","Du périmètre à l'aire",
    "Le périmètre d'un carré vaut 30 cm.\n1) Calcule la longueur de son côté.\n2) Calcule son aire.",
    "1) Côté = 30 ÷ 4 = 7,5 cm.\n2) Aire = 7,5 × 7,5 = 56,25 cm²."),
  E("Périmètres et aires","Géométrie","Difficile","probleme","Le potager clôturé",
    "Un potager rectangulaire mesure 9 m sur 6,5 m. On veut le clôturer avec un grillage à 4,20 € le mètre.\n1) Calcule le périmètre du potager.\n2) Calcule le prix du grillage.",
    "1) P = 2 × (9 + 6,5) = 31 m.\n2) 31 × 4,20 = 130,20 €."),

  /* ═══ ORGANISATION DES DONNÉES ═══ */
  E("Organisation des données","Statistiques","Facile","exercice","Lire un tableau",
    "Le tableau des inscrits d'un club indique : lundi 14, mercredi 22, samedi 31.\n1) Quel jour compte le plus d'inscrits ?\n2) Combien d'inscrits en tout ?",
    "1) Le samedi (31 inscrits).\n2) 14 + 22 + 31 = 67 inscrits."),
  E("Organisation des données","Statistiques","Moyen","exercice","Construire un tableau d'effectifs",
    "Voici les couleurs préférées relevées auprès de 15 élèves :\nbleu, rouge, bleu, vert, bleu, rouge, vert, bleu, rouge, bleu, vert, rouge, bleu, bleu, rouge.\nConstruis le tableau des effectifs.",
    "Bleu : 7 ; rouge : 5 ; vert : 3.\nVérification : 7 + 5 + 3 = 15. ✓"),
  E("Organisation des données","Statistiques","Moyen","exercice","Lire un diagramme en bâtons",
    "Sur un diagramme en bâtons, les hauteurs représentent les livres empruntés : BD 16, romans 11, documentaires 5.\n1) Quelle catégorie est la plus empruntée ?\n2) Combien de livres ont été empruntés en tout ?",
    "1) Les BD (16 emprunts).\n2) 16 + 11 + 5 = 32 livres."),
  E("Organisation des données","Statistiques","Moyen","exercice","Total et écart",
    "Un fleuriste a vendu 12 bouquets lundi, 19 mardi et 7 mercredi.\n1) Combien de bouquets en tout ?\n2) Quel est l'écart entre le meilleur et le moins bon jour ?",
    "1) 12 + 19 + 7 = 38 bouquets.\n2) 19 − 7 = 12 bouquets d'écart."),
  E("Organisation des données","Statistiques","Difficile","probleme","L'enquête de la cantine",
    "On interroge 120 élèves sur leur plat préféré : 45 choisissent les pâtes, 30 la pizza, 25 les frites et le reste répond « autre ».\n1) Combien d'élèves ont répondu « autre » ?\n2) Quel est le plat préféré ?\n3) Quelle fraction des élèves a choisi les pâtes ? (simplifie)",
    "1) 120 − (45 + 30 + 25) = 20 élèves.\n2) Les pâtes (45 votes).\n3) 45/120 = 3/8."),
];

/* ── insertion idempotente ── */
async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("✗ DATABASE_URL manquant. Lance : railway run node seed-exercices-6e.js");
    process.exit(1);
  }
  let added = 0, skipped = 0;
  for (const e of EXOS_6E) {
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
