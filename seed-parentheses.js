/* MathBase — seed-parentheses.js
   Ajoute une série d'exercices sur le calcul avec parenthèses.
   Tous comportent au moins une paire de parenthèses, avec les quatre
   opérations. Difficulté croissante : une parenthèse en Facile, deux
   groupes en Moyen, parenthèses imbriquées et lignes longues en Difficile.

   Idempotent : un exercice déjà présent (même titre et même énoncé) est ignoré.
   Simulation par défaut.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node seed-parentheses.js              # simulation
     node seed-parentheses.js --execute    # ajoute
*/

const { Pool } = require("pg");
const EXECUTE = process.argv.includes("--execute");
if (!process.env.DATABASE_URL) { console.error("\u2717 DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const EXOS = [
 {
  "title": "Calcul avec parenthèses 1",
  "content": "Calculer en détaillant les étapes.\n\n5 + (12 + 10) × 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 2",
  "content": "Calculer en détaillant les étapes.\n\n5 + (9 + 11) × 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 3",
  "content": "Calculer en détaillant les étapes.\n\n(25 - 9) × 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 4",
  "content": "Calculer en détaillant les étapes.\n\n2 × (5 + 16)",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 5",
  "content": "Calculer en détaillant les étapes.\n\n14 + (10 + 7) × 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 6",
  "content": "Calculer en détaillant les étapes.\n\n(16 - 12) × 3",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 7",
  "content": "Calculer en détaillant les étapes.\n\n(27 - 16) × 4",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 8",
  "content": "Calculer en détaillant les étapes.\n\n(13 + 16) × 8",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 9",
  "content": "Calculer en détaillant les étapes.\n\n(14 + 20) ÷ 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 10",
  "content": "Calculer en détaillant les étapes.\n\n18 + (17 + 8) × 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 11",
  "content": "Calculer en détaillant les étapes.\n\n10 × (17 + 18)",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 12",
  "content": "Calculer en détaillant les étapes.\n\n(3 + 18) ÷ 7",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 13",
  "content": "Calculer en détaillant les étapes.\n\n(6 + 17) × 5",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 14",
  "content": "Calculer en détaillant les étapes.\n\n(33 - 17) × 10",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 15",
  "content": "Calculer en détaillant les étapes.\n\n(19 + 18) × 9",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 16",
  "content": "Calculer en détaillant les étapes.\n\n(23 - 8) × 6",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 17",
  "content": "Calculer en détaillant les étapes.\n\n(5 - 3) × 4",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 18",
  "content": "Calculer en détaillant les étapes.\n\n(8 + 10) ÷ 9",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 19",
  "content": "Calculer en détaillant les étapes.\n\n(19 + 3) × 6",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 20",
  "content": "Calculer en détaillant les étapes.\n\n(16 + 18) ÷ 2",
  "level": "college",
  "classe": "6ème",
  "subject": "Arithmétique",
  "difficulty": "Facile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 21",
  "content": "Calculer en détaillant les étapes.\n\n25 × 17 - (4 + 22)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 22",
  "content": "Calculer en détaillant les étapes.\n\n5 × (8 × 25 - 15)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 23",
  "content": "Calculer en détaillant les étapes.\n\n2 × (4 + 2) + 16 × 20",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 24",
  "content": "Calculer en détaillant les étapes.\n\n(21 + 8) × 9 - 5",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 25",
  "content": "Calculer en détaillant les étapes.\n\n(19 + 10) × (23 + 22)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 26",
  "content": "Calculer en détaillant les étapes.\n\n(2 + 12) × (23 + 20)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 27",
  "content": "Calculer en détaillant les étapes.\n\n(28 ÷ 7) + 17 × 20",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 28",
  "content": "Calculer en détaillant les étapes.\n\n(4 + 15) × 23 + 7",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 29",
  "content": "Calculer en détaillant les étapes.\n\n(18 + 15 × 14) × 6",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 30",
  "content": "Calculer en détaillant les étapes.\n\n(14 + 4) - 2",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 31",
  "content": "Calculer en détaillant les étapes.\n\n2 × (2 × 18 - 17)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 32",
  "content": "Calculer en détaillant les étapes.\n\n(12 + 5) × (17 + 16)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 33",
  "content": "Calculer en détaillant les étapes.\n\n6 × (20 × 18 - 8)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 34",
  "content": "Calculer en détaillant les étapes.\n\n(21 + 9 × 23) × 24",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 35",
  "content": "Calculer en détaillant les étapes.\n\n3 × (8 × 22 - 7)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 36",
  "content": "Calculer en détaillant les étapes.\n\n(22 + 8) × (17 + 24)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 37",
  "content": "Calculer en détaillant les étapes.\n\n(22 + 18) × (8 + 18)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 38",
  "content": "Calculer en détaillant les étapes.\n\n(14 + 10 × 15) × 19",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 39",
  "content": "Calculer en détaillant les étapes.\n\n11 × (7 × 13 - 7)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 40",
  "content": "Calculer en détaillant les étapes.\n\n15 × (11 × 16 - 7)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 41",
  "content": "Calculer en détaillant les étapes.\n\n5 + (18 + 18) × 10 - 5",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 42",
  "content": "Calculer en détaillant les étapes.\n\n(9 + 2 × 4) × 16",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 43",
  "content": "Calculer en détaillant les étapes.\n\n19 × 23 - (7 + 2)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 44",
  "content": "Calculer en détaillant les étapes.\n\n(42 ÷ 2) + 20 × 19",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 45",
  "content": "Calculer en détaillant les étapes.\n\n(39 ÷ 3) + 25 × 8",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 46",
  "content": "Calculer en détaillant les étapes.\n\n(23 + 19 × 6) × 5",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 47",
  "content": "Calculer en détaillant les étapes.\n\n7 × (5 + 23) + 3 × 13",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 48",
  "content": "Calculer en détaillant les étapes.\n\n18 × 12 - (10 + 20)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 49",
  "content": "Calculer en détaillant les étapes.\n\n(7 + 10 × 10) × 4",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 50",
  "content": "Calculer en détaillant les étapes.\n\n(10 + 15) × 2 - 3",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 51",
  "content": "Calculer en détaillant les étapes.\n\n11 × 5 - (5 + 23)",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 52",
  "content": "Calculer en détaillant les étapes.\n\n(12 + 16) × 21 - 22",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 53",
  "content": "Calculer en détaillant les étapes.\n\n(14 + 12 × 21) × 8",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 54",
  "content": "Calculer en détaillant les étapes.\n\n(28 ÷ 7) + 23 × 13",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 55",
  "content": "Calculer en détaillant les étapes.\n\n(14 + 11) × 13 - 3",
  "level": "college",
  "classe": "5ème",
  "subject": "Arithmétique",
  "difficulty": "Moyen",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 56",
  "content": "Calculer en détaillant les étapes.\n\n(11 × (12 + 11) + 5) - 11",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 57",
  "content": "Calculer en détaillant les étapes.\n\n5 × (19 + 3 × (7 + 5))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 58",
  "content": "Calculer en détaillant les étapes.\n\n15 + (20 × (6 + 13) - 15) × 14",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 59",
  "content": "Calculer en détaillant les étapes.\n\n2 × (7 + 19 × (19 + 19))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 60",
  "content": "Calculer en détaillant les étapes.\n\n10 × (19 + 17) + 15 × (10 + 12) - 6",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 61",
  "content": "Calculer en détaillant les étapes.\n\n(3 × (9 + 18) + 6) - 14",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 62",
  "content": "Calculer en détaillant les étapes.\n\n13 × (13 + 16 × (16 + 19 × 17))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 63",
  "content": "Calculer en détaillant les étapes.\n\n((15 + 6) × (17 + 2)) - 13 × 18",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 64",
  "content": "Calculer en détaillant les étapes.\n\n((13 + 19) × (10 + 6)) - 5 × 2",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 65",
  "content": "Calculer en détaillant les étapes.\n\n20 + (3 × (14 + 14) - 19) × 18",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 66",
  "content": "Calculer en détaillant les étapes.\n\n((14 + 12) × (19 + 10)) - 11 × 3",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 67",
  "content": "Calculer en détaillant les étapes.\n\n19 × ((11 + 13) × 6 ÷ 6)",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 68",
  "content": "Calculer en détaillant les étapes.\n\n7 × (13 + 19 × (18 + 2))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 69",
  "content": "Calculer en détaillant les étapes.\n\n(5 + 18 × 2) × 13 - 4 × 13 + 11",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 70",
  "content": "Calculer en détaillant les étapes.\n\n((9 + 6) × (5 + 12)) - 17 × 5",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 71",
  "content": "Calculer en détaillant les étapes.\n\n(5 + 13 × 17) × 17 - 5 × 19 + 18",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 72",
  "content": "Calculer en détaillant les étapes.\n\n13 + (4 × (4 + 4) - 17) × 11",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 73",
  "content": "Calculer en détaillant les étapes.\n\n(12 × (15 + 18) + 19) - 12",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 74",
  "content": "Calculer en détaillant les étapes.\n\n(((16 + 9) × 13) + 13) × 15 - 20",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 75",
  "content": "Calculer en détaillant les étapes.\n\n20 + (6 × (15 + 10) - 12) × 5",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 76",
  "content": "Calculer en détaillant les étapes.\n\n(19 + 10 × 9) × 12 - 6 × 19 + 5",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 77",
  "content": "Calculer en détaillant les étapes.\n\n16 × (14 + 14 × (2 + 19 × 12))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 78",
  "content": "Calculer en détaillant les étapes.\n\n8 × (19 + 18 × (15 + 13))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 79",
  "content": "Calculer en détaillant les étapes.\n\n(10 + 19) × (10 + 6) - 12",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 80",
  "content": "Calculer en détaillant les étapes.\n\n2 × (3 + 9) + 5 × (10 + 12) - 2",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 81",
  "content": "Calculer en détaillant les étapes.\n\n((10 + 13) × 4 - 19) × 8",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 82",
  "content": "Calculer en détaillant les étapes.\n\n(((6 + 12) × 9) + 16) × 8 - 7",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 83",
  "content": "Calculer en détaillant les étapes.\n\n18 × (20 + 19) + 6 × (5 + 2) - 10",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 84",
  "content": "Calculer en détaillant les étapes.\n\n(27 ÷ 9 + 17) × (12 + 12)",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 85",
  "content": "Calculer en détaillant les étapes.\n\n(10 × (3 + 17) + 6) - 2",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 86",
  "content": "Calculer en détaillant les étapes.\n\n((13 + 10) × 18 - 14) × 11",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 87",
  "content": "Calculer en détaillant les étapes.\n\n(18 + 19) × 11 - (17 + 4) × 18 + 18",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 88",
  "content": "Calculer en détaillant les étapes.\n\n(12 + 12 × 13) × 7 - 4 × 19 + 7",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 89",
  "content": "Calculer en détaillant les étapes.\n\n((8 + 2) × (16 + 9)) - 8 × 15",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 90",
  "content": "Calculer en détaillant les étapes.\n\n17 × (6 + 19) + 12 × (13 + 14) - 19",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 91",
  "content": "Calculer en détaillant les étapes.\n\n((8 + 6) × (19 + 6)) - 6 × 6",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 92",
  "content": "Calculer en détaillant les étapes.\n\n(((7 + 6) × 10) + 19) × 13 - 6",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 93",
  "content": "Calculer en détaillant les étapes.\n\n3 × (7 + 6) + 15 × (17 + 19) - 2",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 94",
  "content": "Calculer en détaillant les étapes.\n\n15 × (4 + 16 × (6 + 12))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 95",
  "content": "Calculer en détaillant les étapes.\n\n5 × (13 + 20 × (10 + 12 × 2))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 96",
  "content": "Calculer en détaillant les étapes.\n\n15 × (8 + 7) + 9 × (9 + 17) - 8",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 97",
  "content": "Calculer en détaillant les étapes.\n\n(15 + 15 × 16) × 13 - 8 × 11 + 16",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 98",
  "content": "Calculer en détaillant les étapes.\n\n(17 × (4 + 8) + 8) - 5",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 99",
  "content": "Calculer en détaillant les étapes.\n\n15 × ((8 + 15) × 2 ÷ 2)",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 100",
  "content": "Calculer en détaillant les étapes.\n\n2 + (17 × (18 + 16) - 10) × 13",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 101",
  "content": "Calculer en détaillant les étapes.\n\n19 × (9 + 13 × (16 + 14 × 20))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 102",
  "content": "Calculer en détaillant les étapes.\n\n16 × (4 + 16 × (13 + 19))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 103",
  "content": "Calculer en détaillant les étapes.\n\n17 + (19 × (2 + 6) - 12) × 6",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 104",
  "content": "Calculer en détaillant les étapes.\n\n(((19 + 10) × 2) + 3) × 4 - 18",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 105",
  "content": "Calculer en détaillant les étapes.\n\n6 × (11 + 17) + 9 × (12 + 16) - 9",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 106",
  "content": "Calculer en détaillant les étapes.\n\n(12 + 15 × 3) × 17 - 9 × 7 + 16",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 107",
  "content": "Calculer en détaillant les étapes.\n\n14 + (17 × (18 + 2) - 17) × 8",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 108",
  "content": "Calculer en détaillant les étapes.\n\n11 × (9 + 18) + 12 × (10 + 15) - 20",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 109",
  "content": "Calculer en détaillant les étapes.\n\n7 × ((18 + 5) × 20 ÷ 10)",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 110",
  "content": "Calculer en détaillant les étapes.\n\n5 × (5 + 15) + 14 × (2 + 9) - 8",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 111",
  "content": "Calculer en détaillant les étapes.\n\n(((10 + 13) × 4) + 10) × 7 - 3",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 112",
  "content": "Calculer en détaillant les étapes.\n\n19 × (5 + 16 × (19 + 3 × 13))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 113",
  "content": "Calculer en détaillant les étapes.\n\n(17 + 3 × 11) × 4 - 7 × 4 + 10",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 114",
  "content": "Calculer en détaillant les étapes.\n\n3 × (17 + 10) + 4 × (19 + 7) - 19",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 115",
  "content": "Calculer en détaillant les étapes.\n\n13 × ((9 + 19) × 14 ÷ 8)",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 116",
  "content": "Calculer en détaillant les étapes.\n\n19 × (4 + 16) + 7 × (7 + 9) - 7",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 117",
  "content": "Calculer en détaillant les étapes.\n\n12 + (14 × (10 + 7) - 16) × 4",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 118",
  "content": "Calculer en détaillant les étapes.\n\n9 × (20 + 18 × (17 + 6))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 119",
  "content": "Calculer en détaillant les étapes.\n\n14 × (4 + 17 × (15 + 20 × 12))",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
  "type": "exercice"
 },
 {
  "title": "Calcul avec parenthèses 120",
  "content": "Calculer en détaillant les étapes.\n\n10 + (9 × (5 + 14) - 9) × 11",
  "level": "college",
  "classe": "4ème",
  "subject": "Arithmétique",
  "difficulty": "Difficile",
  "chapitre": "Enchaînement d'opérations",
  "famille": "Calcul avec parenthèses",
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
