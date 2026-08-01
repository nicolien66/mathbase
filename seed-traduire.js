/* MathBase — seed-traduire.js
   Ajoute une série d'exercices « Traduire par une expression » : l'élève
   transforme un énoncé rédigé en une expression numérique, puis la calcule.
   Difficulté croissante : une opération nommée en Facile, deux opérations
   avec parenthèses nécessaires en Moyen, imbrications en Difficile.

   Idempotent : un exercice déjà présent (même titre et même énoncé) est ignoré.
   Simulation par défaut.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node seed-traduire.js              # simulation
     node seed-traduire.js --execute    # ajoute
*/

const { Pool } = require("pg");
const EXECUTE = process.argv.includes("--execute");
if (!process.env.DATABASE_URL) { console.error("\u2717 DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const EXOS = [
 {
  "title": "Traduire par une expression 1",
  "content": "Dans une salle, il y a 8 rangées de 12 chaises, et 5 chaises supplémentaires au fond. Écris le calcul en une seule expression, puis calcule le nombre de chaises.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 2",
  "content": "Un paquet contient 12 billes rouges et 11 billes bleues. Léo achète 3 paquets identiques. Écris le calcul en une seule expression, puis calcule le nombre total de billes.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 3",
  "content": "Jade achète 7 croissants à 0,50 € pièce et une baguette à 1,20 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 4",
  "content": "Un paquet contient 4 billes rouges et 11 billes bleues. Lina achète 5 paquets identiques. Écris le calcul en une seule expression, puis calcule le nombre total de billes.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 5",
  "content": "Un paquet contient 8 billes rouges et 2 billes bleues. Adam achète 6 paquets identiques. Écris le calcul en une seule expression, puis calcule le nombre total de billes.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 6",
  "content": "Un paquet contient 12 billes rouges et 4 billes bleues. Adam achète 5 paquets identiques. Écris le calcul en une seule expression, puis calcule le nombre total de billes.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 7",
  "content": "Léo achète 8 stylos à 1,50 € l'un et un cahier à 3,50 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 8",
  "content": "Dans une salle, il y a 9 rangées de 8 chaises, et 5 chaises supplémentaires au fond. Écris le calcul en une seule expression, puis calcule le nombre de chaises.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 9",
  "content": "Ruben achète 7 paquets de gâteaux à 8,00 € l'un et une bouteille de jus à 0,90 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 10",
  "content": "Ruben range 5 livres sur chacune des 6 étagères d'une bibliothèque, plus 6 livres sur son bureau. Écris le calcul en une seule expression, puis calcule le nombre total de livres.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 11",
  "content": "Dans une salle, il y a 5 rangées de 6 chaises, et 11 chaises supplémentaires au fond. Écris le calcul en une seule expression, puis calcule le nombre de chaises.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 12",
  "content": "Dans une salle, il y a 7 rangées de 6 chaises, et 2 chaises supplémentaires au fond. Écris le calcul en une seule expression, puis calcule le nombre de chaises.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 13",
  "content": "Ilan achète 5 croissants à 1,80 € pièce et une baguette à 1,20 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 14",
  "content": "Dans une salle, il y a 2 rangées de 12 chaises, et 9 chaises supplémentaires au fond. Écris le calcul en une seule expression, puis calcule le nombre de chaises.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 15",
  "content": "Malo achète 4 paquets de gâteaux à 7,00 € l'un et une bouteille de jus à 1,00 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 16",
  "content": "Hugo achète 5 croissants à 0,50 € pièce et une baguette à 1,20 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 17",
  "content": "Ruben achète 7 paquets de gâteaux à 4,50 € l'un et une bouteille de jus à 0,75 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 18",
  "content": "Manon achète 8 paquets de gâteaux à 5,00 € l'un et une bouteille de jus à 1,20 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 19",
  "content": "Dans une salle, il y a 4 rangées de 12 chaises, et 8 chaises supplémentaires au fond. Écris le calcul en une seule expression, puis calcule le nombre de chaises.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 20",
  "content": "Malo achète 5 stylos à 1,50 € l'un et un cahier à 7,00 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 21",
  "content": "Léo achète 2 stylos à 0,80 € l'un et un cahier à 4,50 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 22",
  "content": "Yanis achète 4 stylos à 0,80 € l'un et un cahier à 4,50 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 23",
  "content": "Un paquet contient 12 billes rouges et 2 billes bleues. Adam achète 7 paquets identiques. Écris le calcul en une seule expression, puis calcule le nombre total de billes.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 24",
  "content": "Lina achète 8 paquets de gâteaux à 4,00 € l'un et une bouteille de jus à 1,20 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 25",
  "content": "Sarah achète 2 paquets de gâteaux à 4,50 € l'un et une bouteille de jus à 2,00 €. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 26",
  "content": "Une salle compte 8 rangées de 12 places et 8 rangées de 9 places. Écris le calcul en une seule expression, puis calcule le nombre de places.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 27",
  "content": "Tom achète 3 cahiers à 7,00 € l'un et 9 classeurs à 7,00 € l'un. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 28",
  "content": "Lina parcourt 3 km à pied puis 7 trajets de 8 km à vélo. Écris le calcul en une seule expression, puis calcule la distance totale.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 29",
  "content": "Nora achète 6 places de cinéma à 4,50 € l'une et 6 boissons à 1,20 € l'une. Écris le calcul en une seule expression, puis calcule le total.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 30",
  "content": "Gaspard paie avec un billet de 50,00 € l'achat de 9 paquets de riz à 3,50 € l'un. Écris le calcul en une seule expression, puis calcule la somme qui lui est rendue.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 31",
  "content": "Nora commande 9 menus composés d'un sandwich à 3,50 € et d'une boisson à 1,80 €. Écris le calcul en une seule expression, puis calcule le montant de la commande.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 32",
  "content": "Lina commande 7 menus composés d'un sandwich à 4,50 € et d'une boisson à 0,50 €. Écris le calcul en une seule expression, puis calcule le montant de la commande.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 33",
  "content": "Une salle compte 9 rangées de 3 places et 3 rangées de 12 places. Écris le calcul en une seule expression, puis calcule le nombre de places.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 34",
  "content": "Un lot comprend 7 gâteaux et 6 bonbons. Noah achète 9 lots, puis 10 gâteaux de plus. Écris le calcul en une seule expression, puis calcule le nombre de friandises.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 35",
  "content": "Jade paie avec un billet de 50,00 € l'achat de 2 paquets de riz à 4,00 € l'un. Écris le calcul en une seule expression, puis calcule la somme qui lui est rendue.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 36",
  "content": "Tom achète 7 cahiers à 3,00 € l'un et 9 classeurs à 3,00 € l'un. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 37",
  "content": "Léo parcourt 7 km à pied puis 8 trajets de 8 km à vélo. Écris le calcul en une seule expression, puis calcule la distance totale.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 38",
  "content": "Sarah paie avec un billet de 50,00 € l'achat de 7 paquets de riz à 8,00 € l'un. Écris le calcul en une seule expression, puis calcule la somme qui lui est rendue.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 39",
  "content": "Jade achète 3 places de cinéma à 8,00 € l'une et 4 boissons à 2,50 € l'une. Écris le calcul en une seule expression, puis calcule le total.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 40",
  "content": "Ilan paie avec un billet de 50,00 € l'achat de 6 paquets de riz à 8,00 € l'un. Écris le calcul en une seule expression, puis calcule la somme qui lui est rendue.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 41",
  "content": "Un lot comprend 5 gâteaux et 9 bonbons. Sarah achète 3 lots, puis 5 gâteaux de plus. Écris le calcul en une seule expression, puis calcule le nombre de friandises.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 42",
  "content": "Malo achète 4 cahiers à 2,50 € l'un et 6 classeurs à 6,00 € l'un. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 43",
  "content": "Un lot comprend 4 gâteaux et 12 bonbons. Inès achète 10 lots, puis 9 gâteaux de plus. Écris le calcul en une seule expression, puis calcule le nombre de friandises.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 44",
  "content": "Léo parcourt 8 km à pied puis 3 trajets de 2 km à vélo. Écris le calcul en une seule expression, puis calcule la distance totale.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 45",
  "content": "Un lot comprend 2 gâteaux et 9 bonbons. Lina achète 6 lots, puis 6 gâteaux de plus. Écris le calcul en une seule expression, puis calcule le nombre de friandises.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 46",
  "content": "Un lot comprend 7 gâteaux et 9 bonbons. Adam achète 8 lots, puis 6 gâteaux de plus. Écris le calcul en une seule expression, puis calcule le nombre de friandises.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 47",
  "content": "Tom paie avec un billet de 50,00 € l'achat de 3 paquets de riz à 6,00 € l'un. Écris le calcul en une seule expression, puis calcule la somme qui lui est rendue.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 48",
  "content": "Gaspard parcourt 8 km à pied puis 11 trajets de 6 km à vélo. Écris le calcul en une seule expression, puis calcule la distance totale.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 49",
  "content": "Yanis commande 8 menus composés d'un sandwich à 3,00 € et d'une boisson à 1,50 €. Écris le calcul en une seule expression, puis calcule le montant de la commande.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 50",
  "content": "Une salle compte 5 rangées de 2 places et 10 rangées de 2 places. Écris le calcul en une seule expression, puis calcule le nombre de places.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 51",
  "content": "Camille commande 8 menus composés d'un sandwich à 4,50 € et d'une boisson à 0,60 €. Écris le calcul en une seule expression, puis calcule le montant de la commande.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 52",
  "content": "Tom achète 4 cahiers à 5,00 € l'un et 6 classeurs à 3,50 € l'un. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 53",
  "content": "Léo achète 4 cahiers à 2,00 € l'un et 8 classeurs à 2,00 € l'un. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 54",
  "content": "Une salle compte 6 rangées de 7 places et 8 rangées de 5 places. Écris le calcul en une seule expression, puis calcule le nombre de places.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 55",
  "content": "Hugo commande 9 menus composés d'un sandwich à 6,00 € et d'une boisson à 1,80 €. Écris le calcul en une seule expression, puis calcule le montant de la commande.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 56",
  "content": "Manon paie avec un billet de 50,00 € l'achat de 9 paquets de riz à 2,00 € l'un. Écris le calcul en une seule expression, puis calcule la somme qui lui est rendue.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 57",
  "content": "Inès commande 9 menus composés d'un sandwich à 6,00 € et d'une boisson à 2,50 €. Écris le calcul en une seule expression, puis calcule le montant de la commande.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 58",
  "content": "Nora parcourt 7 km à pied puis 2 trajets de 7 km à vélo. Écris le calcul en une seule expression, puis calcule la distance totale.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 59",
  "content": "Sarah achète 7 cahiers à 4,00 € l'un et 8 classeurs à 2,00 € l'un. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 60",
  "content": "Nora achète 5 cahiers à 4,50 € l'un et 5 classeurs à 2,50 € l'un. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 61",
  "content": "Une salle compte 7 rangées de 10 places et 9 rangées de 12 places. Écris le calcul en une seule expression, puis calcule le nombre de places.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 62",
  "content": "Tom achète 6 cahiers à 6,00 € l'un et 2 classeurs à 6,00 € l'un. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 63",
  "content": "Un lot comprend 5 gâteaux et 7 bonbons. Manon achète 9 lots, puis 7 gâteaux de plus. Écris le calcul en une seule expression, puis calcule le nombre de friandises.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 64",
  "content": "Camille achète 3 places de cinéma à 8,00 € l'une et 7 boissons à 0,50 € l'une. Écris le calcul en une seule expression, puis calcule le total.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 65",
  "content": "Une salle compte 10 rangées de 3 places et 8 rangées de 10 places. Écris le calcul en une seule expression, puis calcule le nombre de places.",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 66",
  "content": "Un car transporte 3 groupes de 12 élèves, plus 5 accompagnateurs. Chaque personne paie 4,50 € d'entrée. Écris le calcul en une seule expression, puis calcule le montant total des entrées.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 67",
  "content": "Une école commande 3 lots de 5 cahiers à 0,50 € le cahier, puis bénéficie d'une réduction de 6,00 €. Écris le calcul en une seule expression, puis calcule le montant payé.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 68",
  "content": "Une école commande 7 lots de 4 cahiers à 1,80 € le cahier, puis bénéficie d'une réduction de 3,50 €. Écris le calcul en une seule expression, puis calcule le montant payé.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 69",
  "content": "Noah achète 5 boîtes contenant chacune 11 yaourts, et en consomme 5. Écris le calcul en une seule expression, puis calcule le nombre de yaourts restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 70",
  "content": "Un coffret contient 3 figurines et 3 cartes. Hugo achète 6 coffrets, et son frère en achète 4. Écris le calcul en une seule expression, puis calcule le nombre total d'objets.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 71",
  "content": "Un coffret contient 10 figurines et 6 cartes. Noah achète 5 coffrets, et son frère en achète 4. Écris le calcul en une seule expression, puis calcule le nombre total d'objets.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 72",
  "content": "Malo organise un goûter : elle prévoit une part de gâteau à 1,50 € et une boisson à 0,90 € pour chacun des 2 invités. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 73",
  "content": "Dans un jardin, Inès plante 4 rangées de 9 salades et 10 rangées de 7 carottes, puis retire 9 plants abîmés. Écris le calcul en une seule expression, puis calcule le nombre de plants restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 74",
  "content": "Chloé loue 3 vélos à 2,50 € l'heure pendant 2 heures. Écris le calcul en une seule expression, puis calcule le coût de la location.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 75",
  "content": "Sarah loue 4 vélos à 2,50 € l'heure pendant 4 heures. Écris le calcul en une seule expression, puis calcule le coût de la location.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 76",
  "content": "Un car transporte 4 groupes de 5 élèves, plus 4 accompagnateurs. Chaque personne paie 3,00 € d'entrée. Écris le calcul en une seule expression, puis calcule le montant total des entrées.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 77",
  "content": "Lina paie avec un billet de 100,00 € l'achat de 8 pantalons à 15,00 € l'un et 2 tee-shirts à 4,00 € l'un. Écris le calcul en une seule expression, puis calcule la somme rendue.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 78",
  "content": "Hugo achète 5 livres à 8,00 € l'un et 3 magazines à 0,60 € l'un, puis paie 4,00 € de frais de port. Écris le calcul en une seule expression, puis calcule le total.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 79",
  "content": "Un car transporte 9 groupes de 6 élèves, plus 5 accompagnateurs. Chaque personne paie 5,00 € d'entrée. Écris le calcul en une seule expression, puis calcule le montant total des entrées.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 80",
  "content": "Inès achète 5 boîtes contenant chacune 10 yaourts, et en consomme 2. Écris le calcul en une seule expression, puis calcule le nombre de yaourts restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 81",
  "content": "Dans un jardin, Elsa plante 9 rangées de 6 salades et 5 rangées de 7 carottes, puis retire 4 plants abîmés. Écris le calcul en une seule expression, puis calcule le nombre de plants restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 82",
  "content": "Un car transporte 9 groupes de 9 élèves, plus 5 accompagnateurs. Chaque personne paie 2,00 € d'entrée. Écris le calcul en une seule expression, puis calcule le montant total des entrées.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 83",
  "content": "Hugo achète 7 livres à 4,00 € l'un et 2 magazines à 2,00 € l'un, puis paie 6,00 € de frais de port. Écris le calcul en une seule expression, puis calcule le total.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 84",
  "content": "Tom organise un goûter : elle prévoit une part de gâteau à 1,80 € et une boisson à 0,75 € pour chacun des 4 invités. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 85",
  "content": "Dans un jardin, Maya plante 3 rangées de 8 salades et 10 rangées de 9 carottes, puis retire 7 plants abîmés. Écris le calcul en une seule expression, puis calcule le nombre de plants restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 86",
  "content": "Une école commande 10 lots de 10 cahiers à 0,50 € le cahier, puis bénéficie d'une réduction de 3,00 €. Écris le calcul en une seule expression, puis calcule le montant payé.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 87",
  "content": "Sarah loue 4 vélos à 3,00 € l'heure pendant 6 heures. Écris le calcul en une seule expression, puis calcule le coût de la location.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 88",
  "content": "Une école commande 4 lots de 6 cahiers à 0,50 € le cahier, puis bénéficie d'une réduction de 8,00 €. Écris le calcul en une seule expression, puis calcule le montant payé.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 89",
  "content": "Lina achète 5 livres à 4,50 € l'un et 4 magazines à 0,60 € l'un, puis paie 5,00 € de frais de port. Écris le calcul en une seule expression, puis calcule le total.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 90",
  "content": "Sarah paie avec un billet de 100,00 € l'achat de 2 pantalons à 30,00 € l'un et 7 tee-shirts à 3,50 € l'un. Écris le calcul en une seule expression, puis calcule la somme rendue.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 91",
  "content": "Un coffret contient 2 figurines et 2 cartes. Chloé achète 2 coffrets, et son frère en achète 10. Écris le calcul en une seule expression, puis calcule le nombre total d'objets.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 92",
  "content": "Gaspard paie avec un billet de 100,00 € l'achat de 5 pantalons à 30,00 € l'un et 4 tee-shirts à 3,50 € l'un. Écris le calcul en une seule expression, puis calcule la somme rendue.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 93",
  "content": "Chloé loue 3 vélos à 2,50 € l'heure pendant 3 heures. Écris le calcul en une seule expression, puis calcule le coût de la location.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 94",
  "content": "Malo organise un goûter : elle prévoit une part de gâteau à 0,80 € et une boisson à 0,50 € pour chacun des 6 invités. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 95",
  "content": "Nora achète 6 livres à 6,00 € l'un et 6 magazines à 2,00 € l'un, puis paie 4,50 € de frais de port. Écris le calcul en une seule expression, puis calcule le total.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 96",
  "content": "Un car transporte 8 groupes de 5 élèves, plus 3 accompagnateurs. Chaque personne paie 5,00 € d'entrée. Écris le calcul en une seule expression, puis calcule le montant total des entrées.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 97",
  "content": "Chloé achète 2 boîtes contenant chacune 4 yaourts, et en consomme 8. Écris le calcul en une seule expression, puis calcule le nombre de yaourts restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 98",
  "content": "Un coffret contient 10 figurines et 4 cartes. Maya achète 8 coffrets, et son frère en achète 3. Écris le calcul en une seule expression, puis calcule le nombre total d'objets.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 99",
  "content": "Gaspard loue 7 vélos à 4,00 € l'heure pendant 6 heures. Écris le calcul en une seule expression, puis calcule le coût de la location.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 100",
  "content": "Léo organise un goûter : elle prévoit une part de gâteau à 1,00 € et une boisson à 2,00 € pour chacun des 5 invités. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 101",
  "content": "Yanis organise un goûter : elle prévoit une part de gâteau à 0,90 € et une boisson à 1,80 € pour chacun des 6 invités. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 102",
  "content": "Une école commande 10 lots de 7 cahiers à 2,00 € le cahier, puis bénéficie d'une réduction de 4,00 €. Écris le calcul en une seule expression, puis calcule le montant payé.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 103",
  "content": "Dans un jardin, Noah plante 8 rangées de 4 salades et 2 rangées de 9 carottes, puis retire 7 plants abîmés. Écris le calcul en une seule expression, puis calcule le nombre de plants restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 104",
  "content": "Un car transporte 8 groupes de 4 élèves, plus 9 accompagnateurs. Chaque personne paie 2,00 € d'entrée. Écris le calcul en une seule expression, puis calcule le montant total des entrées.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 105",
  "content": "Un car transporte 8 groupes de 12 élèves, plus 9 accompagnateurs. Chaque personne paie 2,50 € d'entrée. Écris le calcul en une seule expression, puis calcule le montant total des entrées.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 106",
  "content": "Maya organise un goûter : elle prévoit une part de gâteau à 0,50 € et une boisson à 1,50 € pour chacun des 5 invités. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 107",
  "content": "Tom achète 4 livres à 5,00 € l'un et 2 magazines à 2,00 € l'un, puis paie 4,00 € de frais de port. Écris le calcul en une seule expression, puis calcule le total.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 108",
  "content": "Ruben achète 5 boîtes contenant chacune 11 yaourts, et en consomme 5. Écris le calcul en une seule expression, puis calcule le nombre de yaourts restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 109",
  "content": "Un coffret contient 7 figurines et 3 cartes. Jade achète 2 coffrets, et son frère en achète 9. Écris le calcul en une seule expression, puis calcule le nombre total d'objets.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 110",
  "content": "Sarah paie avec un billet de 100,00 € l'achat de 8 pantalons à 12,00 € l'un et 4 tee-shirts à 2,00 € l'un. Écris le calcul en une seule expression, puis calcule la somme rendue.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 111",
  "content": "Une école commande 8 lots de 5 cahiers à 0,60 € le cahier, puis bénéficie d'une réduction de 7,00 €. Écris le calcul en une seule expression, puis calcule le montant payé.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 112",
  "content": "Nora loue 8 vélos à 7,00 € l'heure pendant 4 heures. Écris le calcul en une seule expression, puis calcule le coût de la location.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 113",
  "content": "Un coffret contient 3 figurines et 3 cartes. Camille achète 10 coffrets, et son frère en achète 3. Écris le calcul en une seule expression, puis calcule le nombre total d'objets.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 114",
  "content": "Ruben loue 6 vélos à 3,00 € l'heure pendant 3 heures. Écris le calcul en une seule expression, puis calcule le coût de la location.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 115",
  "content": "Un car transporte 10 groupes de 12 élèves, plus 4 accompagnateurs. Chaque personne paie 5,00 € d'entrée. Écris le calcul en une seule expression, puis calcule le montant total des entrées.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 116",
  "content": "Camille achète 6 boîtes contenant chacune 5 yaourts, et en consomme 10. Écris le calcul en une seule expression, puis calcule le nombre de yaourts restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 117",
  "content": "Un coffret contient 9 figurines et 6 cartes. Noah achète 10 coffrets, et son frère en achète 6. Écris le calcul en une seule expression, puis calcule le nombre total d'objets.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 118",
  "content": "Une école commande 4 lots de 4 cahiers à 0,90 € le cahier, puis bénéficie d'une réduction de 6,00 €. Écris le calcul en une seule expression, puis calcule le montant payé.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 119",
  "content": "Inès achète 5 boîtes contenant chacune 8 yaourts, et en consomme 4. Écris le calcul en une seule expression, puis calcule le nombre de yaourts restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 120",
  "content": "Gaspard achète 5 livres à 6,00 € l'un et 7 magazines à 2,50 € l'un, puis paie 3,50 € de frais de port. Écris le calcul en une seule expression, puis calcule le total.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 121",
  "content": "Un car transporte 2 groupes de 12 élèves, plus 2 accompagnateurs. Chaque personne paie 8,00 € d'entrée. Écris le calcul en une seule expression, puis calcule le montant total des entrées.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 122",
  "content": "Dans un jardin, Camille plante 5 rangées de 9 salades et 6 rangées de 11 carottes, puis retire 8 plants abîmés. Écris le calcul en une seule expression, puis calcule le nombre de plants restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 123",
  "content": "Dans un jardin, Ruben plante 2 rangées de 11 salades et 5 rangées de 5 carottes, puis retire 9 plants abîmés. Écris le calcul en une seule expression, puis calcule le nombre de plants restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 124",
  "content": "Nora achète 5 boîtes contenant chacune 11 yaourts, et en consomme 2. Écris le calcul en une seule expression, puis calcule le nombre de yaourts restants.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 125",
  "content": "Un car transporte 6 groupes de 9 élèves, plus 3 accompagnateurs. Chaque personne paie 2,50 € d'entrée. Écris le calcul en une seule expression, puis calcule le montant total des entrées.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 126",
  "content": "Noah organise un goûter : elle prévoit une part de gâteau à 1,20 € et une boisson à 0,50 € pour chacun des 6 invités. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 127",
  "content": "Hugo organise un goûter : elle prévoit une part de gâteau à 1,00 € et une boisson à 2,00 € pour chacun des 2 invités. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 128",
  "content": "Une école commande 10 lots de 10 cahiers à 2,00 € le cahier, puis bénéficie d'une réduction de 3,00 €. Écris le calcul en une seule expression, puis calcule le montant payé.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 129",
  "content": "Un coffret contient 10 figurines et 9 cartes. Jade achète 7 coffrets, et son frère en achète 8. Écris le calcul en une seule expression, puis calcule le nombre total d'objets.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 },
 {
  "title": "Traduire par une expression 130",
  "content": "Gaspard organise un goûter : elle prévoit une part de gâteau à 2,00 € et une boisson à 1,80 € pour chacun des 6 invités. Écris le calcul en une seule expression, puis calcule la dépense.",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Traduire par une expression",
  "type": "exercice"
 }
];

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION \u2014 ajoutez --execute pour ins\u00e9rer ===\n");
  let ajoutes = 0, deja = 0;
  for (const e of EXOS) {
    const { rows } = await pool.query(
      "SELECT id FROM exercises WHERE title = $1 AND content = $2 LIMIT 1", [e.title, e.content]);
    if (rows.length) { deja++; continue; }
    if (EXECUTE) {
      await pool.query(
        `INSERT INTO exercises (title, content, level, subject, difficulty, solution, classe, chapitre, type, famille)
         VALUES ($1,$2,$3,$4,$5,NULL,$6,$7,$8,$9)`,
        [e.title, e.content, e.level, e.subject, e.difficulty, e.classe, e.chapitre, e.type, e.famille]);
    }
    ajoutes++;
  }
  const parNiveau = EXOS.reduce((a, e) => (a[e.difficulty] = (a[e.difficulty] || 0) + 1, a), {});
  console.log(`Exercices ${EXECUTE ? "ajout\u00e9s" : "\u00e0 ajouter"} : ${ajoutes}`);
  console.log(`D\u00e9j\u00e0 pr\u00e9sents          : ${deja}`);
  console.log("R\u00e9partition          :", JSON.stringify(parNiveau));
  if (!EXECUTE) console.log("\n(simulation \u2014 relancez avec --execute)");
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
