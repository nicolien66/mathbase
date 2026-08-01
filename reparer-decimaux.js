/* MathBase — reparer-decimaux.js
   Suite et correction de `enrichir-decimaux.js` (chapitre « Entiers & décimaux »).

   ── CE QUI S'EST MAL PASSÉ AU PREMIER PASSAGE ────────────────────────────
   La reconnaissance des familles se faisait par mots-clés. Or :
     · « Écrire un grand nombre en chiffres » contient le mot « chiffre » :
       elle a capté le lot destiné à « Chiffre et nombre » et l'a consommé,
       si bien que « Chiffre et nombre » n'a rien reçu (10 doublons).
     · « Comparer deux décimaux » a de même vidé le lot commun avant
       « Ranger des décimaux », restée à 1 exercice.
   Ce script REPLACE les 10 énoncés mal rangés dans « Chiffre et nombre »,
   puis donne à chaque famille restante son propre lot.

   Ici plus de mots-clés : la correspondance famille → lot est EXACTE
   (comparaison souple sur casse/accents/ponctuation, mais égalité stricte).

   ── CE QU'IL FAIT ────────────────────────────────────────────────────────
   1. Déplace vers « Chiffre et nombre » les 10 exercices insérés par erreur
      dans « Écrire un grand nombre en chiffres », et les renumérote.
   2. Renomme « Multiplier par 10, 100, 1 » en « Multiplier par 10,100,1000
      etc... » — le libellé a été tronqué par la déduction automatique depuis
      le titre (le « 000 » final a été pris pour un numéro d'exercice), exactement
      le même défaut que « Diviser par 10 et ». Passez --garder-multiplier
      pour conserver le libellé actuel.
   3. Insère 90 énoncés (10 par famille, 2 faciles / 3 moyens / 5 difficiles)
      dans les 9 familles encore incomplètes.

   Colonnes level / subject / classe / type recopiées depuis les exercices
   déjà présents dans chaque famille. Idempotent : relancer ne duplique rien.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node reparer-decimaux.js              # simulation
     node reparer-decimaux.js --execute    # applique
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");
const GARDER_MULT = process.argv.includes("--garder-multiplier");
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const cle = t => String(t || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/* ═══ 1. LES 10 ÉNONCÉS À DÉPLACER ═══
   Ils ont été insérés dans « Écrire un grand nombre en chiffres » alors
   qu'ils relèvent de « Chiffre et nombre ». Repérés par leur énoncé. */
const SOURCE_MAL_RANGEE = "Écrire un grand nombre en chiffres";
const CIBLE_DEPLACEMENT = "Chiffre et nombre";
const A_DEPLACER = [
  "Dans 4 736 : quel est le chiffre des centaines ? Quel est le chiffre des dizaines ?",
  "Dans 58,26 : donne le chiffre des dixièmes, puis le chiffre des unités.",
  "Dans 3 407 : donne le chiffre des centaines, puis le nombre de centaines.",
  "Dans 92 615 : donne le nombre de milliers, puis le nombre de dizaines.",
  "Dans 7,483 : donne le chiffre des centièmes, puis le nombre de centièmes.",
  "Dans 45 032 : donne le chiffre des dizaines, le nombre de dizaines, le chiffre des milliers et le nombre de milliers.",
  "Dans 6,205 : donne le nombre de dixièmes, le nombre de centièmes et le nombre de millièmes.",
  "Trouve un nombre entier dont le chiffre des centaines est 7 et le nombre de centaines est 37.",
  "Vrai ou faux : « dans 8 250, le nombre de dizaines est 5 ». Justifie et corrige si nécessaire.",
  "Écris le nombre qui possède 47 centaines, 6 dizaines et 8 unités. Donne ensuite son nombre de dizaines.",
].map(cle);

/* ═══ 2. RENOMMAGE ═══ */
const RENOMMAGE_MULT = { depuis: "Multiplier par 10, 100, 1",
                         vers:   "Multiplier par 10,100,1000 etc..." };

/* ═══ 3. LOTS D'ÉNONCÉS — correspondance EXACTE avec le libellé de famille ═══
   [difficulté, énoncé, corrigé] · F = Facile · M = Moyen · D = Difficile */
const LOTS = {

"Écrire un grand nombre en chiffres": [
  ["F", "Écris en chiffres : trois mille quatre cent douze.",
        "3 412."],
  ["F", "Écris en chiffres : vingt-cinq mille six cents.",
        "25 600."],
  ["M", "Écris en chiffres : quatre cent sept mille quatre-vingts.",
        "407 080. Attention au rang des centaines, vide : on écrit un zéro."],
  ["M", "Écris en chiffres : douze millions trois cent mille.",
        "12 300 000."],
  ["M", "Écris en chiffres : soixante-quinze mille neuf cent quatre.",
        "75 904."],
  ["D", "Écris en chiffres : deux millions cinq cent mille trois cents.",
        "2 500 300."],
  ["D", "Écris en chiffres : quatre-vingt-dix mille neuf cent quatre-vingts, puis quatre-vingt mille neuf cent quatre-vingt-dix.",
        "90 980 ; puis 80 990. Les deux nombres utilisent les mêmes mots dans un ordre différent."],
  ["D", "Écris en chiffres : trois cent six millions quarante mille sept.",
        "306 040 007. Les rangs non cités (centaines de mille, centaines, dizaines) sont remplis par des zéros."],
  ["D", "Écris en chiffres : cinq unités et douze centièmes, puis trois dizaines et quatre millièmes.",
        "5,12 ; puis 30,004."],
  ["D", "Écris en chiffres : un milliard deux cents millions. Combien ce nombre possède-t-il de chiffres ?",
        "1 200 000 000. Il possède 10 chiffres."],
],

"Ranger des décimaux": [
  ["F", "Range dans l'ordre croissant : 6,7 ; 6,07 ; 6,77 ; 6,2.",
        "6,07 < 6,2 < 6,7 < 6,77."],
  ["F", "Range dans l'ordre décroissant : 1,5 ; 0,9 ; 1,05 ; 0,95.",
        "1,5 > 1,05 > 0,95 > 0,9."],
  ["M", "Range dans l'ordre croissant : 9,4 ; 9,39 ; 9,401 ; 9,04.",
        "En complétant par des zéros : 9,040 < 9,390 < 9,400 < 9,401. Donc 9,04 < 9,39 < 9,4 < 9,401."],
  ["M", "Range dans l'ordre décroissant : 0,3 ; 0,03 ; 0,303 ; 0,33.",
        "0,33 > 0,303 > 0,3 > 0,03."],
  ["M", "Cinq élèves ont sauté 3,45 m ; 3,5 m ; 3,08 m ; 3,4 m et 3,54 m. Classe ces sauts du meilleur au moins bon.",
        "3,54 > 3,5 > 3,45 > 3,4 > 3,08."],
  ["D", "Range dans l'ordre croissant : 7,5 ; 7,05 ; 7,50 ; 7,005 ; 7,55.",
        "7,005 < 7,05 < 7,5 = 7,50 < 7,55. Attention : 7,5 et 7,50 sont le même nombre."],
  ["D", "Range dans l'ordre croissant : 2 ; 1,999 ; 2,01 ; 1,99 ; 2,001.",
        "1,99 < 1,999 < 2 < 2,001 < 2,01."],
  ["D", "Range dans l'ordre croissant : 5/10 ; 0,45 ; 48/100 ; 0,5.",
        "5/10 = 0,5 et 48/100 = 0,48. Donc 0,45 < 48/100 < 5/10 = 0,5."],
  ["D", "Range dans l'ordre décroissant : 8,2 ; 82 ÷ 100 ; 0,82 × 10 ; 820 ÷ 1000.",
        "82 ÷ 100 = 0,82 · 0,82 × 10 = 8,2 · 820 ÷ 1000 = 0,82.\nDonc 8,2 = 0,82 × 10 > 82 ÷ 100 = 820 ÷ 1000."],
  ["D", "Range ces masses dans l'ordre croissant : 1,2 kg ; 950 g ; 1,05 kg ; 1 100 g.",
        "On convertit tout en kilogrammes : 950 g = 0,95 kg et 1 100 g = 1,1 kg.\n0,95 kg < 1,05 kg < 1,1 kg < 1,2 kg, soit 950 g < 1,05 kg < 1 100 g < 1,2 kg."],
],

"Intercaler un décimal": [
  ["F", "Intercale un nombre décimal entre 2 et 3.",
        "Par exemple 2,5, car 2 < 2,5 < 3. (Toute réponse strictement comprise entre 2 et 3 convient.)"],
  ["F", "Intercale un nombre décimal entre 4,1 et 4,2.",
        "Par exemple 4,15, car 4,10 < 4,15 < 4,20."],
  ["M", "Intercale deux nombres décimaux entre 0,3 et 0,4.",
        "Par exemple 0,31 et 0,35, car 0,30 < 0,31 < 0,35 < 0,40."],
  ["M", "Intercale un nombre décimal entre 7,89 et 7,9.",
        "7,9 = 7,90, il faut donc descendre aux millièmes : par exemple 7,895, car 7,890 < 7,895 < 7,900."],
  ["M", "Intercale un nombre décimal entre 5,6 et 5,7 qui soit plus proche de 5,7 que de 5,6.",
        "Il faut dépasser le milieu 5,65 : par exemple 5,68."],
  ["D", "Intercale trois nombres décimaux entre 3,4 et 3,41.",
        "Il faut aller jusqu'aux millièmes : 3,401 ; 3,405 ; 3,409 conviennent, car 3,400 < 3,401 < 3,405 < 3,409 < 3,410."],
  ["D", "Intercale un nombre décimal entre 0,999 et 1.",
        "1 = 1,000, donc on descend aux dix-millièmes : par exemple 0,9995."],
  ["D", "Combien existe-t-il de nombres décimaux à trois chiffres après la virgule strictement compris entre 6,42 et 6,43 ?",
        "Ce sont 6,421 ; 6,422 ; … ; 6,429 : il y en a 9."],
  ["D", "Peut-on toujours intercaler un décimal entre deux décimaux différents ? Justifie avec 2,7 et 2,71.",
        "Oui. Il suffit d'ajouter un rang après la virgule : entre 2,700 et 2,710 on trouve par exemple 2,705. On peut recommencer indéfiniment : entre deux décimaux distincts, il y en a toujours une infinité d'autres."],
  ["D", "Intercale un nombre décimal entre 3/10 et 4/10, puis écris-le sous forme de fraction décimale.",
        "3/10 = 0,3 et 4/10 = 0,4. Par exemple 0,35, qui s'écrit 35/100."],
],

"Addition posée de décimaux": [
  ["F", "Pose et calcule : 12,4 + 3,7.",
        "12,4 + 3,7 = 16,1 (on aligne les virgules l'une sous l'autre)."],
  ["F", "Pose et calcule : 8,25 + 4,3.",
        "On écrit 4,3 = 4,30 pour aligner les rangs : 8,25 + 4,30 = 12,55."],
  ["M", "Pose et calcule : 45,6 + 7,84.",
        "45,60 + 7,84 = 53,44."],
  ["M", "Pose et calcule : 0,97 + 12 + 3,5.",
        "0,97 + 12,00 + 3,50 = 16,47."],
  ["M", "Pose et calcule : 129,08 + 76,9.",
        "129,08 + 76,90 = 205,98."],
  ["D", "Pose et calcule : 3,456 + 27,8 + 0,09.",
        "3,456 + 27,800 + 0,090 = 31,346."],
  ["D", "Complète l'égalité : 5,4 + … = 12,05.",
        "Le terme manquant est 12,05 − 5,40 = 6,65. Vérification : 5,40 + 6,65 = 12,05."],
  ["D", "Un élève pose 8,7 + 0,45 en alignant les chiffres par la droite et trouve 1,32. Explique son erreur et donne le bon résultat.",
        "Il a additionné les rangs deux à deux sans tenir compte de leur valeur. Il faut aligner les VIRGULES : 8,70 + 0,45 = 9,15."],
  ["D", "Donne un ordre de grandeur de 0,125 + 0,875 + 1,5, puis calcule la somme exacte.",
        "Ordre de grandeur : environ 0 + 1 + 1,5 = 2,5. Calcul exact : 0,125 + 0,875 = 1, puis 1 + 1,5 = 2,5."],
  ["D", "Additionne 14,7 m ; 3,45 m et 80 cm. Donne le résultat en mètres.",
        "80 cm = 0,80 m. Puis 14,70 + 3,45 + 0,80 = 18,95 m."],
],

"Soustraction posée de décimaux": [
  ["F", "Pose et calcule : 15,8 − 4,3.",
        "15,8 − 4,3 = 11,5."],
  ["F", "Pose et calcule : 9,75 − 2,4.",
        "9,75 − 2,40 = 7,35."],
  ["M", "Pose et calcule : 23,4 − 8,67.",
        "23,40 − 8,67 = 14,73."],
  ["M", "Pose et calcule : 100 − 37,5.",
        "100,0 − 37,5 = 62,5."],
  ["M", "Pose et calcule : 7 − 0,85.",
        "7,00 − 0,85 = 6,15."],
  ["D", "Pose et calcule : 52,03 − 9,876.",
        "52,030 − 9,876 = 42,154."],
  ["D", "Complète l'égalité : 18,2 − … = 9,45.",
        "Le terme manquant est 18,20 − 9,45 = 8,75. Vérification : 18,20 − 8,75 = 9,45."],
  ["D", "Calcule 12 − 8,6, puis vérifie ton résultat par une addition.",
        "12,0 − 8,6 = 3,4. Vérification : 3,4 + 8,6 = 12."],
  ["D", "Calcule 45,6 − 12,8 − 3,45 en détaillant les étapes.",
        "45,60 − 12,80 = 32,80, puis 32,80 − 3,45 = 29,35."],
  ["D", "Dans une planche de 2,5 m, on coupe un morceau de 87 cm puis un morceau de 1,2 m. Quelle longueur reste-t-il, en mètres ?",
        "87 cm = 0,87 m. 2,50 − 0,87 = 1,63, puis 1,63 − 1,20 = 0,43. Il reste 0,43 m, soit 43 cm."],
],

"Multiplication de décimaux": [
  ["F", "Pose et calcule : 4,2 × 3.",
        "42 × 3 = 126, et il y a 1 chiffre après la virgule : 4,2 × 3 = 12,6."],
  ["F", "Pose et calcule : 1,25 × 4.",
        "125 × 4 = 500, et il y a 2 chiffres après la virgule : 1,25 × 4 = 5."],
  ["M", "Pose et calcule : 6,4 × 2,5.",
        "64 × 25 = 1 600, et il y a 1 + 1 = 2 chiffres après la virgule : 6,4 × 2,5 = 16."],
  ["M", "Pose et calcule : 0,7 × 0,8.",
        "7 × 8 = 56, et il y a 1 + 1 = 2 chiffres après la virgule : 0,7 × 0,8 = 0,56."],
  ["M", "Pose et calcule : 12,5 × 1,2.",
        "125 × 12 = 1 500, et il y a 1 + 1 = 2 chiffres après la virgule : 12,5 × 1,2 = 15."],
  ["D", "Pose et calcule : 3,45 × 2,08.",
        "345 × 208 = 71 760, et il y a 2 + 2 = 4 chiffres après la virgule : 3,45 × 2,08 = 7,176."],
  ["D", "Sachant que 27 × 34 = 918, donne sans poser d'opération : 2,7 × 3,4 ; 0,27 × 34 ; 2,7 × 0,034.",
        "2,7 × 3,4 = 9,18 (2 chiffres après la virgule) · 0,27 × 34 = 9,18 (2 chiffres) · 2,7 × 0,034 = 0,0918 (4 chiffres)."],
  ["D", "Calcule 0,05 × 0,04, puis explique le nombre de zéros du résultat.",
        "5 × 4 = 20, et il y a 2 + 2 = 4 chiffres après la virgule : 0,0020, soit 0,002. Le zéro final ne compte pas dans l'écriture du nombre."],
  ["D", "Un élève trouve 5,6 comme résultat de 0,8 × 0,7. Contrôle sa réponse.",
        "Les deux facteurs sont inférieurs à 1, donc le produit doit être inférieur à 0,8 : la réponse 5,6 est impossible. 8 × 7 = 56 avec 2 chiffres après la virgule, donc 0,8 × 0,7 = 0,56."],
  ["D", "Calcule l'aire d'un rectangle de 4,5 cm de longueur et 2,8 cm de largeur.",
        "45 × 28 = 1 260, avec 1 + 1 = 2 chiffres après la virgule : 4,5 × 2,8 = 12,6. L'aire vaut 12,6 cm²."],
],

"Division décimale": [
  ["F", "Calcule 12,6 ÷ 3.",
        "12,6 ÷ 3 = 4,2."],
  ["F", "Calcule 7,5 ÷ 5.",
        "7,5 ÷ 5 = 1,5."],
  ["M", "Pose et calcule 9 ÷ 4.",
        "9 ÷ 4 = 2,25. On abaisse un zéro après la virgule pour poursuivre la division."],
  ["M", "Pose et calcule 13,2 ÷ 8.",
        "13,2 ÷ 8 = 1,65."],
  ["M", "Calcule 4,5 ÷ 0,5.",
        "On multiplie les deux nombres par 10 : 4,5 ÷ 0,5 = 45 ÷ 5 = 9."],
  ["D", "Pose et calcule 7,26 ÷ 1,2.",
        "On multiplie les deux nombres par 10 : 7,26 ÷ 1,2 = 72,6 ÷ 12 = 6,05."],
  ["D", "Calcule 1 ÷ 3 et donne une valeur approchée du quotient au centième. Que remarques-tu ?",
        "1 ÷ 3 = 0,333… La division ne s'arrête jamais : le quotient n'est pas un nombre décimal. Au centième : 1 ÷ 3 ≈ 0,33."],
  ["D", "Pose et calcule 25 ÷ 8, puis vérifie ton résultat par une multiplication.",
        "25 ÷ 8 = 3,125. Vérification : 3,125 × 8 = 25."],
  ["D", "Cinq personnes se partagent équitablement 32,50 €. Quelle est la part de chacune ?",
        "32,50 ÷ 5 = 6,50. Chacune reçoit 6,50 €."],
  ["D", "Combien de bouteilles de 0,75 L peut-on remplir avec 12 L ? Reste-t-il du liquide ?",
        "12 ÷ 0,75 = 1 200 ÷ 75 = 16. On remplit exactement 16 bouteilles et il ne reste rien."],
],

"La monnaie du libraire": [
  ["F", "Un livre coûte 12,50 €. Tu paies avec un billet de 20 €. Combien le libraire te rend-il ?",
        "20 − 12,50 = 7,50. Il rend 7,50 €."],
  ["F", "Tu achètes deux cahiers à 3,20 € l'unité. Quel est le prix total ?",
        "3,20 × 2 = 6,40. Le total est de 6,40 €."],
  ["M", "Un client achète trois livres à 8,90 €, 12,50 € et 6,75 €. Calcule le total, puis la monnaie rendue sur 30 €.",
        "Total : 8,90 + 12,50 + 6,75 = 28,15 €. Monnaie : 30 − 28,15 = 1,85 €."],
  ["M", "Un roman coûte 14,90 € et un marque-page 2,35 €. Le client paie avec 20 €. Quelle monnaie le libraire rend-il ?",
        "Total : 14,90 + 2,35 = 17,25 €. Monnaie : 20 − 17,25 = 2,75 €."],
  ["M", "Le libraire rend 4,60 € sur un billet de 10 €. Quel était le prix de l'achat ?",
        "10 − 4,60 = 5,40. L'achat coûtait 5,40 €."],
  ["D", "Un client achète 4 bandes dessinées à 11,95 €. Donne d'abord un ordre de grandeur du total, puis calcule-le et la monnaie rendue sur 50 €.",
        "Ordre de grandeur : 12 × 4 = 48 €. Total exact : 11,95 × 4 = 47,80 €. Monnaie : 50 − 47,80 = 2,20 €."],
  ["D", "Pour un achat de 36,70 €, le client donne 50 €. Détaille la monnaie rendue avec le moins de billets et de pièces possible.",
        "50 − 36,70 = 13,30 €, soit un billet de 10 €, une pièce de 2 €, une pièce de 1 €, une pièce de 20 centimes et une pièce de 10 centimes."],
  ["D", "Un achat s'élève à 17,45 €. Le client donne un billet de 20 € puis ajoute 45 centimes. Combien le libraire rend-il ?",
        "Le client donne 20 + 0,45 = 20,45 €. Monnaie : 20,45 − 17,45 = 3 € exactement (un seul billet à rendre)."],
  ["D", "Un dictionnaire coûte 24,90 €. Un client en achète trois et le libraire lui rend 25,30 €. Quelle somme le client avait-il donnée ?",
        "Prix des trois dictionnaires : 24,90 × 3 = 74,70 €. Somme donnée : 74,70 + 25,30 = 100 €."],
  ["D", "En fin de journée la caisse contient 348,60 €, alors que le fond de caisse du matin était de 75 €. Quelle est la recette ? Si elle provient de 12 ventes identiques, quel est le prix d'une vente ?",
        "Recette : 348,60 − 75 = 273,60 €. Prix d'une vente : 273,60 ÷ 12 = 22,80 €."],
],

"Le plein de carburant": [
  ["F", "Le carburant coûte 1,85 € le litre. Quel est le prix de 10 litres ?",
        "1,85 × 10 = 18,50. Dix litres coûtent 18,50 €."],
  ["F", "Un automobiliste fait le plein avec 40 litres à 1,70 € le litre. Combien paie-t-il ?",
        "1,70 × 40 = 68. Il paie 68 €."],
  ["M", "Calcule le prix d'un plein de 45 litres à 1,92 € le litre.",
        "1,92 × 45 = 86,40. Le plein coûte 86,40 €."],
  ["M", "Un plein de 50 litres a coûté 73,50 €. Quel est le prix d'un litre ?",
        "73,50 ÷ 50 = 1,47. Le litre coûte 1,47 €."],
  ["M", "Le réservoir contient encore 12,5 L et peut en contenir 55. Combien de litres faut-il ajouter pour faire le plein ? Quel en sera le prix à 1,80 € le litre ?",
        "55 − 12,5 = 42,5 L à ajouter. Prix : 1,80 × 42,5 = 76,50 €."],
  ["D", "Une voiture consomme 6,2 L aux 100 km. Quelle quantité de carburant faut-il pour 250 km ? Quel en est le coût à 1,75 € le litre, arrondi au centime ?",
        "Pour 250 km : 6,2 × 2,5 = 15,5 L. Coût : 15,5 × 1,75 = 27,125 €, soit environ 27,13 € arrondi au centime."],
  ["D", "Un automobiliste met pour 40 € de carburant à 1,60 € le litre. Combien de litres a-t-il pris ?",
        "40 ÷ 1,60 = 400 ÷ 16 = 25. Il a pris 25 litres."],
  ["D", "Le prix du litre passe de 1,78 € à 1,85 €. Quel est le surcoût pour un plein de 45 litres ?",
        "Hausse par litre : 1,85 − 1,78 = 0,07 €. Surcoût : 0,07 × 45 = 3,15 €."],
  ["D", "Une voiture parcourt 100 km en consommant 5,8 L. Estime le coût du carburant pour 1 000 km, à 1,90 € le litre.",
        "Pour 1 000 km : 5,8 × 10 = 58 L. Coût : 58 × 1,90 = 110,20 €."],
  ["D", "Le réservoir contient 60 L et la voiture consomme 7,5 L aux 100 km. Quelle distance peut-elle parcourir avec un plein ? Combien coûte ce plein à 1,72 € le litre ?",
        "60 ÷ 7,5 = 8, soit 8 × 100 = 800 km d'autonomie. Prix du plein : 60 × 1,72 = 103,20 €."],
],

};

const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };

function majoritaire(lignes, champ, defaut) {
  const c = new Map();
  lignes.forEach(l => {
    const v = l[champ];
    if (v === null || v === undefined || String(v).trim() === "") return;
    c.set(v, (c.get(v) || 0) + 1);
  });
  return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : defaut;
}
function dernierNumero(lignes) {
  let max = 0;
  lignes.forEach(l => { const m = String(l.title || "").match(/(\d+)\s*$/); if (m) max = Math.max(max, +m[1]); });
  return max;
}

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, solution,
            classe, chapitre, type, famille
       FROM exercises
      WHERE chapitre ILIKE '%cimaux%' OR chapitre ILIKE '%decimaux%'
      ORDER BY id`);
  const rows = brut.filter(r => {
    const c = cle(r.chapitre);
    return c.includes("entier") && c.includes("decimaux");
  });
  if (!rows.length) { console.log("Chapitre introuvable."); await pool.end(); return; }

  const CHAPITRE = majoritaire(rows, "chapitre", "Entiers & décimaux");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  /* ── ÉTAPE 1 : déplacement des 10 énoncés mal rangés ── */
  const deplaces = rows.filter(r =>
    cle(r.famille) === cle(SOURCE_MAL_RANGEE) && A_DEPLACER.includes(cle(r.content)));

  const cibleAvant = rows.filter(r => cle(r.famille) === cle(CIBLE_DEPLACEMENT));
  let numCible = dernierNumero(cibleAvant);
  const majTitres = [];
  deplaces.forEach(r => {
    numCible++;
    majTitres.push({ id: r.id, title: `${CIBLE_DEPLACEMENT} ${numCible}` });
    r.famille = CIBLE_DEPLACEMENT;                  // état mis à jour en mémoire
    r.title   = `${CIBLE_DEPLACEMENT} ${numCible}`;
  });
  console.log(deplaces.length
    ? `→ ${deplaces.length} exercice(s) déplacé(s) de « ${SOURCE_MAL_RANGEE} » vers « ${CIBLE_DEPLACEMENT} ».`
    : `· Aucun exercice à déplacer (correction déjà appliquée).`);

  /* ── ÉTAPE 2 : renommage de la famille « Multiplier » tronquée ── */
  const renommages = [];
  if (!GARDER_MULT) {
    const k = cle(RENOMMAGE_MULT.depuis);
    const cibles = rows.filter(r => r.famille && cle(r.famille) === k);
    if (cibles.length) {
      console.log(`→ « ${RENOMMAGE_MULT.depuis} » devient « ${RENOMMAGE_MULT.vers} » (${cibles.length} exercice(s)).`);
      renommages.push({ ids: cibles.map(c => c.id), vers: RENOMMAGE_MULT.vers });
      cibles.forEach(c => { c.famille = RENOMMAGE_MULT.vers; });
    } else {
      console.log(`· Renommage « ${RENOMMAGE_MULT.depuis} » sans objet (déjà fait ou famille absente).`);
    }
  } else {
    console.log("· Renommage de la famille « Multiplier » désactivé (--garder-multiplier).");
  }

  /* ── ÉTAPE 3 : insertion des lots ── */
  const parFamille = new Map();
  rows.forEach(r => {
    if (!r.famille || !r.famille.trim()) return;
    const k = cle(r.famille);
    if (!parFamille.has(k)) parFamille.set(k, { nom: r.famille, items: [] });
    parFamille.get(k).items.push(r);
  });

  const contenus = new Set(rows.map(r => cle(r.content)));
  const aInserer = [], rapport = [], introuvables = [];

  for (const [nomLot, exos] of Object.entries(LOTS)) {
    const g = parFamille.get(cle(nomLot));
    if (!g) { introuvables.push(nomLot); continue; }
    const modele = {
      level:   majoritaire(g.items, "level",   "college"),
      subject: majoritaire(g.items, "subject", "Arithmétique"),
      classe:  majoritaire(g.items, "classe",  "6ème"),
      type:    majoritaire(g.items, "type",    "exercice"),
    };
    let num = dernierNumero(g.items), ajoutes = 0, doublons = 0;
    exos.forEach(([d, content, solution]) => {
      if (contenus.has(cle(content))) { doublons++; return; }
      contenus.add(cle(content));
      num++;
      aInserer.push({
        title: `${g.nom} ${num}`, content, solution, difficulty: LIBELLE[d],
        level: modele.level, subject: modele.subject, classe: modele.classe,
        chapitre: CHAPITRE, type: modele.type, famille: g.nom,
      });
      ajoutes++;
    });
    rapport.push({ famille: g.nom, avant: g.items.length, ajoutes, deja: doublons,
                   apres: g.items.length + ajoutes, type: modele.type });
  }

  console.log("\nEnrichissement prévu :");
  if (rapport.length) console.table(rapport); else console.log("  (rien)");
  const d = {};
  aInserer.forEach(e => { d[e.difficulty] = (d[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${d.Facile || 0} · Moyen ${d.Moyen || 0} · Difficile ${d.Difficile || 0}`);
  if (introuvables.length) {
    console.log("\n⚠ Lots sans famille correspondante en base :");
    introuvables.forEach(f => console.log("   - " + f));
  }

  if (!EXECUTE) {
    console.log("\n(simulation — relancez avec --execute)");
    await pool.end(); return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `decimaux-avant-reparation-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde de l'état antérieur : ${nom}`);

  for (const m of majTitres) {
    await pool.query("UPDATE exercises SET famille = $1, title = $2 WHERE id = $3",
      [CIBLE_DEPLACEMENT, m.title, m.id]);
  }
  if (majTitres.length) console.log(`${majTitres.length} exercice(s) reclassé(s) en « ${CIBLE_DEPLACEMENT} ».`);

  for (const r of renommages) {
    const res = await pool.query("UPDATE exercises SET famille = $1 WHERE id = ANY($2)", [r.vers, r.ids]);
    console.log(`${res.rowCount} exercice(s) → famille « ${r.vers} »`);
  }

  let n = 0;
  for (const e of aInserer) {
    await pool.query(
      `INSERT INTO exercises
         (title, content, level, subject, difficulty, solution, classe, chapitre, type, famille)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [e.title, e.content, e.level, e.subject, e.difficulty, e.solution,
       e.classe, e.chapitre, e.type, e.famille]);
    n++;
  }
  console.log(`${n} exercice(s) inséré(s).`);

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY n DESC, famille`, [CHAPITRE]);
  console.log("\nFamilles après :");
  console.table(apres);

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
