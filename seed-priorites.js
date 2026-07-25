/* MathBase — seed-priorites.js
   Ajoute une série d'exercices sur la priorité de la multiplication.
   Difficulté croissante : une seule opération prioritaire en Facile,
   deux à trois en Moyen, chaînes longues et parenthèses en Difficile.

   Idempotent : un exercice déjà présent (même titre et même énoncé) est ignoré.
   Simulation par défaut.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node seed-priorites.js              # simulation
     node seed-priorites.js --execute    # ajoute
*/

const { Pool } = require("pg");
const EXECUTE = process.argv.includes("--execute");
if (!process.env.DATABASE_URL) { console.error("\u2717 DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const EXOS = [
 {
  "title": "Priorité de la multiplication 1",
  "content": "Calculer en détaillant les étapes.\n\n9 × 9 + 9",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 2",
  "content": "Calculer en détaillant les étapes.\n\n4 × 9 + 12",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 3",
  "content": "Calculer en détaillant les étapes.\n\n3 × 9 + 6",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 4",
  "content": "Calculer en détaillant les étapes.\n\n3 × 2 + 11",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 5",
  "content": "Calculer en détaillant les étapes.\n\n9 + 4 × 11",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 6",
  "content": "Calculer en détaillant les étapes.\n\n10 + 3 × 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 7",
  "content": "Calculer en détaillant les étapes.\n\n5 + 5 × 11",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 8",
  "content": "Calculer en détaillant les étapes.\n\n9 × 7 + 9",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 9",
  "content": "Calculer en détaillant les étapes.\n\n125 - 5 × 12",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 10",
  "content": "Calculer en détaillant les étapes.\n\n9 + 2 × 12",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 11",
  "content": "Calculer en détaillant les étapes.\n\n9 + 6 × 8",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 12",
  "content": "Calculer en détaillant les étapes.\n\n37 - 7 × 5",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 13",
  "content": "Calculer en détaillant les étapes.\n\n2 + 3 × 11",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 14",
  "content": "Calculer en détaillant les étapes.\n\n8 × 3 - 6",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 15",
  "content": "Calculer en détaillant les étapes.\n\n3 + 2 × 12",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 16",
  "content": "Calculer en détaillant les étapes.\n\n5 × 5 - 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 17",
  "content": "Calculer en détaillant les étapes.\n\n8 + 8 × 8",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 18",
  "content": "Calculer en détaillant les étapes.\n\n137 - 5 × 12",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 19",
  "content": "Calculer en détaillant les étapes.\n\n45 - 3 × 6",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 20",
  "content": "Calculer en détaillant les étapes.\n\n2 × 8 + 3",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 21",
  "content": "Calculer en détaillant les étapes.\n\n5 + 3 × 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 22",
  "content": "Calculer en détaillant les étapes.\n\n9 × 9 + 4",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 23",
  "content": "Calculer en détaillant les étapes.\n\n9 × 5 - 4",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 24",
  "content": "Calculer en détaillant les étapes.\n\n12 × 8 - 3",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 25",
  "content": "Calculer en détaillant les étapes.\n\n21 - 5 × 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 26",
  "content": "Calculer en détaillant les étapes.\n\n11 × 6 + 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 27",
  "content": "Calculer en détaillant les étapes.\n\n4 + 120 ÷ 8 × 11",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 28",
  "content": "Calculer en détaillant les étapes.\n\n11 × 3 + 2 × 4",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 29",
  "content": "Calculer en détaillant les étapes.\n\n54 ÷ 9 + 2 × 14",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 30",
  "content": "Calculer en détaillant les étapes.\n\n7 + 15 × 6 - 8",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 31",
  "content": "Calculer en détaillant les étapes.\n\n3 + 15 ÷ 3 × 11",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 32",
  "content": "Calculer en détaillant les étapes.\n\n4 × 12 + 4 × 6",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 33",
  "content": "Calculer en détaillant les étapes.\n\n15 × 11 + 5 × 13",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 34",
  "content": "Calculer en détaillant les étapes.\n\n4 × 13 + 12 × 10",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 35",
  "content": "Calculer en détaillant les étapes.\n\n12 + 8 × 9 - 11",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 36",
  "content": "Calculer en détaillant les étapes.\n\n8 + 2 × 3 - 3",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 37",
  "content": "Calculer en détaillant les étapes.\n\n10 + 30 ÷ 6 × 13",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 38",
  "content": "Calculer en détaillant les étapes.\n\n48 ÷ 8 + 8 × 15",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 39",
  "content": "Calculer en détaillant les étapes.\n\n9 + 60 ÷ 6 × 4",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 40",
  "content": "Calculer en détaillant les étapes.\n\n12 ÷ 3 + 5 × 9",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 41",
  "content": "Calculer en détaillant les étapes.\n\n12 + 15 × 11 - 11",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 42",
  "content": "Calculer en détaillant les étapes.\n\n6 + 5 × 5 - 13",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 43",
  "content": "Calculer en détaillant les étapes.\n\n3 × 6 + 8 × 9",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 44",
  "content": "Calculer en détaillant les étapes.\n\n4 + 63 ÷ 9 × 12",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 45",
  "content": "Calculer en détaillant les étapes.\n\n130 ÷ 13 + 11 × 4",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 46",
  "content": "Calculer en détaillant les étapes.\n\n2 + 18 ÷ 2 × 7",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 47",
  "content": "Calculer en détaillant les étapes.\n\n6 + 4 ÷ 2 × 11",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 48",
  "content": "Calculer en détaillant les étapes.\n\n4 × 17 + 4 × 11 - 12 × 6",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 49",
  "content": "Calculer en détaillant les étapes.\n\n13 + 4 × 17 × 4 - 15 - 2",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 50",
  "content": "Calculer en détaillant les étapes.\n\n20 × 2 + 14 × 14 - 20 × 2",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 51",
  "content": "Calculer en détaillant les étapes.\n\n11 + 4 × 17 × 2 - 9 - 5",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 52",
  "content": "Calculer en détaillant les étapes.\n\n9 + 20 × 12 × 8 - 6 - 6",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 53",
  "content": "Calculer en détaillant les étapes.\n\n13 + 3 × 4 × 10 - 7 - 5",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 54",
  "content": "Calculer en détaillant les étapes.\n\n17 + 10 × 8 × 15 - 14 - 18",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 55",
  "content": "Calculer en détaillant les étapes.\n\n12 + 16 × 12 - 4 × 3 + 10",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 56",
  "content": "Calculer en détaillant les étapes.\n\n8 + 8 × 17 × 10 - 7 - 2",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 57",
  "content": "Calculer en détaillant les étapes.\n\n14 + 9 × 4 × 15 - 14 - 6",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 58",
  "content": "Calculer en détaillant les étapes.\n\n10 + 17 × 2 - 8 × 4 + 15",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 59",
  "content": "Calculer en détaillant les étapes.\n\n7 + 19 × 12 × 6 - 17 - 6",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 60",
  "content": "Calculer en détaillant les étapes.\n\n340 ÷ 17 + 4 × 9 - 16",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 61",
  "content": "Calculer en détaillant les étapes.\n\n133 ÷ 19 + 18 × 18 - 19",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 62",
  "content": "Calculer en détaillant les étapes.\n\n16 × 9 + 18 - 12 + 30 ÷ 5 - 32",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 63",
  "content": "Calculer en détaillant les étapes.\n\n24 × 8 × 5 × 3",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 64",
  "content": "Calculer en détaillant les étapes.\n\n29 + 31 - 36 + 24 + 25 × 2",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 65",
  "content": "Calculer en détaillant les étapes.\n\n25 ÷ 5 + 45 ÷ 9 × 12 - 45",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 66",
  "content": "Calculer en détaillant les étapes.\n\n6 ÷ 6 × 9 + 14",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 67",
  "content": "Calculer en détaillant les étapes.\n\n23 - 8 × 12 - 2 + 42 × 11",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 68",
  "content": "Calculer en détaillant les étapes.\n\n11 × 7 × 8 × 12",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 69",
  "content": "Calculer en détaillant les étapes.\n\n17 × 5 - 44 + 11",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 70",
  "content": "Calculer en détaillant les étapes.\n\n32 × 2 - 5 ÷ 5 × 9",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 71",
  "content": "Calculer en détaillant les étapes.\n\n6 × 10 - 4 × 11 + 2 × 9 × 11",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 72",
  "content": "Calculer en détaillant les étapes.\n\n34 + 4 × 11 + 7 ÷ 7",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 73",
  "content": "Calculer en détaillant les étapes.\n\n36 + 11 × 8 + 18 + 17",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 74",
  "content": "Calculer en détaillant les étapes.\n\n5 - 35 ÷ 5 + 39 ÷ 3",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 75",
  "content": "Calculer en détaillant les étapes.\n\n39 ÷ 3 × 8 - 5 + 20 ÷ 2",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 76",
  "content": "Calculer en détaillant les étapes.\n\n22 × 5 - 26 ÷ 2",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 77",
  "content": "Calculer en détaillant les étapes.\n\n24 + 17 × 8 - 32 - 14",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 78",
  "content": "Calculer en détaillant les étapes.\n\n12 ÷ 3 × 9 × 5 × 2 - 23",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 79",
  "content": "Calculer en détaillant les étapes.\n\n17 × 10 × 2 × 4",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 80",
  "content": "Calculer en détaillant les étapes.\n\n40 ÷ 5 × 11 × 2 × 12",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 81",
  "content": "Calculer en détaillant les étapes.\n\n8 - 44 + 25 × 2 × 2",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 82",
  "content": "Calculer en détaillant les étapes.\n\n31 × 7 - 45 ÷ 5 × 4 - 35",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 83",
  "content": "Calculer en détaillant les étapes.\n\n34 × 5 × 10 + 5 ÷ 5 + 33 × 9",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 84",
  "content": "Calculer en détaillant les étapes.\n\n9 ÷ 3 × 6 × 8 - 6 ÷ 2",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 85",
  "content": "Calculer en détaillant les étapes.\n\n37 × 8 - 5 × 11 + 2 - 18 - 35",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 86",
  "content": "Calculer en détaillant les étapes.\n\n38 × 10 ÷ 2 ÷ 2 - 10",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 87",
  "content": "Calculer en détaillant les étapes.\n\n38 - 32 + 40 - 32",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 88",
  "content": "Calculer en détaillant les étapes.\n\n39 × 4 + 2 × 2",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 89",
  "content": "Calculer en détaillant les étapes.\n\n40 × 7 × 7 - 38 × 6",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 90",
  "content": "Calculer en détaillant les étapes.\n\n36 × 4 - 2 × 3 ÷ 3",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 91",
  "content": "Calculer en détaillant les étapes.\n\n28 + 21 - 41 - 34 ÷ 2 + 41",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 92",
  "content": "Calculer en détaillant les étapes.\n\n8 - 15 ÷ 5 + 13 + 26",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 93",
  "content": "Calculer en détaillant les étapes.\n\n32 - 21 × 7 + 28 × 7 + 42",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 94",
  "content": "Calculer en détaillant les étapes.\n\n34 + 6 × 7 ÷ 7 + 5",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 95",
  "content": "Calculer en détaillant les étapes.\n\n32 × 6 - 19 - 13",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 96",
  "content": "Calculer en détaillant les étapes.\n\n15 - 35 ÷ 7 × 11 + 11 × 11",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 97",
  "content": "Calculer en détaillant les étapes.\n\n14 ÷ 7 × 11 × 7",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 98",
  "content": "Calculer en détaillant les étapes.\n\n24 - 28 ÷ 7 - 29 + 3 × 7",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 99",
  "content": "Calculer en détaillant les étapes.\n\n18 × 4 + 45 × 3 × 10",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 100",
  "content": "Calculer en détaillant les étapes.\n\n12 × 2 - 17 + 35 + 20",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 101",
  "content": "Calculer en détaillant les étapes.\n\n40 × 3 × 7 + 27 × 8 × 8 + 38",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 102",
  "content": "Calculer en détaillant les étapes.\n\n19 × 10 × 3 × 5",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 103",
  "content": "Calculer en détaillant les étapes.\n\n20 + 13 × 11 + 27 + 44",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 104",
  "content": "Calculer en détaillant les étapes.\n\n37 × 12 - 45 × 10 ÷ 5",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 105",
  "content": "Calculer en détaillant les étapes.\n\n24 - 32 + 9 + 42 - 41",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 106",
  "content": "Calculer en détaillant les étapes.\n\n18 × 10 × 3 × 3 - 22 × 4 + 40",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 107",
  "content": "Calculer en détaillant les étapes.\n\n14 × 11 + 2 + 9 + 6 - 42",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 108",
  "content": "Calculer en détaillant les étapes.\n\n28 × 12 + 42 + 10 ÷ 2 × 8 × 3",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 109",
  "content": "Calculer en détaillant les étapes.\n\n30 × 12 + 37 - 14 + 13 × 9",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 110",
  "content": "Calculer en détaillant les étapes.\n\n38 ÷ 2 + 31 × 7 × 6",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 111",
  "content": "Calculer en détaillant les étapes.\n\n29 × 4 × 6 - 35",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 112",
  "content": "Calculer en détaillant les étapes.\n\n4 × 5 × 10 + 18",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 113",
  "content": "Calculer en détaillant les étapes.\n\n26 × 6 × 3 - 33",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 114",
  "content": "Calculer en détaillant les étapes.\n\n12 ÷ 6 × 6 × 10 + 36",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 115",
  "content": "Calculer en détaillant les étapes.\n\n33 + 16 × 7 ÷ 7",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 116",
  "content": "Calculer en détaillant les étapes.\n\n19 × 7 × 7 ÷ 7 + 35 × 10",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 117",
  "content": "Calculer en détaillant les étapes.\n\n35 ÷ 7 + 9 + 6 + 16 × 5",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 118",
  "content": "Calculer en détaillant les étapes.\n\n40 × 9 + 25 + 10 ÷ 2",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 119",
  "content": "Calculer en détaillant les étapes.\n\n12 + 28 × 8 - 41 × 5 ÷ 5",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 120",
  "content": "Calculer en détaillant les étapes.\n\n13 × 5 × 8 - 13",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 121",
  "content": "Calculer en détaillant les étapes.\n\n26 × 6 ÷ 2 × 7 × 12 × 10",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 122",
  "content": "Calculer en détaillant les étapes.\n\n7 × 3 + 25 × 7 × 5 × 2 × 5",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 123",
  "content": "Calculer en détaillant les étapes.\n\n35 × 9 - 44 ÷ 2 - 10",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 124",
  "content": "Calculer en détaillant les étapes.\n\n26 + 34 × 7 × 3",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 125",
  "content": "Calculer en détaillant les étapes.\n\n12 × 12 ÷ 3 - 34",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 126",
  "content": "Calculer en détaillant les étapes.\n\n14 × 8 + 45 + 32 + 20 × 8 ÷ 8",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 127",
  "content": "Calculer en détaillant les étapes.\n\n30 × 5 × 9 + 8 ÷ 2 × 7",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 128",
  "content": "Calculer en détaillant les étapes.\n\n14 ÷ 7 + 30 × 6",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 129",
  "content": "Calculer en détaillant les étapes.\n\n10 × 5 × 11 + 8 × 10 × 8 - 7",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
  "type": "exercice"
 },
 {
  "title": "Priorité de la multiplication 130",
  "content": "Calculer en détaillant les étapes.\n\n18 × 6 × 3 ÷ 3 + 41 × 8 + 24",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Priorités opératoires",
  "famille": "Appliquer la priorité de la multiplication",
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
