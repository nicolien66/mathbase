const express    = require("express");
const { Pool }   = require("pg");
const bodyParser = require("body-parser");
const path       = require("path");
const MISTRAL_API_KEY = process.env.MISTRAL_KEY;

const app  = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

/* ── CONFIG CLIENT (clé Mistral pour la séance) ── */
app.get("/config", (req, res) => {
  res.json({ mistralKey: process.env.MISTRAL_KEY || "" });
});

/* ── CRÉATION / MIGRATION TABLE ── */
async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS exercises (
      id         SERIAL PRIMARY KEY,
      title      TEXT    NOT NULL,
      content    TEXT    NOT NULL,
      level      TEXT    NOT NULL,
      subject    TEXT,
      difficulty TEXT,
      solution   TEXT,
      classe     TEXT,
      chapitre   TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS classe   TEXT`);
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS chapitre TEXT`);
  console.log("Base de données prête.");
}
initDB().catch(err => console.error("Erreur init DB :", err));
/* ── ANALYSE MISTRAL ── */
async function analyseWithMistral(title, content, existingExercises) {
  const MISTRAL_API_KEY = process.env.MISTRAL_KEY;
  if (!MISTRAL_API_KEY) throw new Error("Clé MISTRAL_API_KEY manquante.");

  // Résumés des exercices existants pour la détection de doublons
  const existingSummary = existingExercises.slice(0, 40).map(e =>
    `[ID:${e.id}] "${e.title}" — ${e.content.slice(0, 80)}`
  ).join("\n");

  const prompt = `Tu es un assistant pédagogique spécialisé en mathématiques françaises.

Voici un nouvel exercice soumis :
TITRE: ${title}
ÉNONCÉ: ${content}

Exercices déjà présents dans la base :
${existingSummary || "(base vide)"}

Réponds UNIQUEMENT en JSON valide, sans markdown, sans explication :
{
  "doublon": true/false,
  "doublon_id": null ou l'ID de l'exercice similaire,
  "doublon_raison": null ou explication courte de la similarité,
  "classe": "la classe française exacte (ex: 6ème, 5ème, 4ème, 3ème, 2nde, 1ère, Terminale, Licence 1, Licence 2, Licence 3, CM1, CM2, CE1, CE2)",
  "chapitre": "le chapitre mathématique précis (ex: Fractions, Équations du premier degré, Fonctions affines, Dérivation, Intégration, Probabilités, Trigonométrie, Vecteurs, Suites, Géométrie dans l'espace)",
  "suggestion_difficulte": "Facile / Moyen / Difficile"
}`;

  const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${MISTRAL_API_KEY}`
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.1,
      max_tokens: 300
    })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error("Erreur Mistral : " + err);
  }

  const data = await res.json();
  const text = data.choices[0].message.content.trim();

  // Nettoyer les éventuels backticks markdown
  const clean = text.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}

/* ── CORRIGER UNE RÉPONSE (séance) ── */
app.post("/exercises/correct", async (req, res) => {
  const { exercise, answer } = req.body;
  const key = process.env.MISTRAL_KEY;
  if (!key) return res.status(500).json({ error: "Clé MISTRAL_KEY manquante." });

  const solutionCtx = exercise.solution ? `\nSOLUTION OFFICIELLE : ${exercise.solution}` : "";
  const prompt = `Tu es un tuteur en mathématiques bienveillant et pédagogue.\n\nEXERCICE : ${exercise.title}\nÉNONCÉ : ${exercise.content}${solutionCtx}\n\nRÉPONSE DE L'ÉLÈVE : ${answer}\n\nÉvalue la réponse et réponds UNIQUEMENT en JSON valide, sans markdown :\n{\n  "verdict": "correct" | "partial" | "incorrect",\n  "feedback": "explication courte et encourageante (2-3 phrases)",\n  "conseil": "une piste concrète pour progresser (1 phrase)"\n}`;

  try {
    const mistralRes = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.1,
        max_tokens: 400
      })
    });
    if (!mistralRes.ok) {
      const err = await mistralRes.text();
      throw new Error("Erreur Mistral : " + err);
    }
    const data  = await mistralRes.json();
    const clean = data.choices[0].message.content.replace(/```json|```/g, "").trim();
    res.json(JSON.parse(clean));
  } catch (err) {
    console.error("Erreur correction:", err.message);
    res.status(500).json({ error: err.message });
  }
});

/* ── ANALYSER UN EXERCICE (avant soumission) ── */
app.post("/exercises/analyse", async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Titre et énoncé requis." });
  }

  try {
    const existing = await pool.query("SELECT id, title, content FROM exercises ORDER BY created_at DESC");
    const analyse  = await analyseWithMistral(title, content, existing.rows);
    res.json(analyse);
  } catch (err) {
    console.error("Erreur analyse Mistral:", err.message);
    res.status(500).json({ error: err.message });
  }
});

/* ── AJOUTER UN EXERCICE ── */
app.post("/exercises", async (req, res) => {
  const { title, content, level, subject, difficulty, solution, classe, chapitre } = req.body;
  if (!title || !content || !level) {
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }
  try {
    const result = await pool.query(
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution, classe, chapitre)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
      [title, content, level, subject || null, difficulty || null, solution || null, classe || null, chapitre || null]
    );
    res.json({ id: result.rows[0].id, message: "Exercice ajouté." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ── RÉCUPÉRER LES EXERCICES ── */
app.get("/exercises", async (req, res) => {
  const { level, subject, difficulty } = req.query;
  let query  = "SELECT * FROM exercises WHERE 1=1";
  let params = [];
  let i      = 1;
  if (level)      { query += ` AND level = $${i++}`;      params.push(level); }
  if (subject)    { query += ` AND subject = $${i++}`;    params.push(subject); }
  if (difficulty) { query += ` AND difficulty = $${i++}`; params.push(difficulty); }
  query += " ORDER BY created_at DESC";
  try {
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ── RÉCUPÉRER UN EXERCICE PAR ID ── */
app.get("/exercises/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM exercises WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Exercice introuvable." });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ── SUPPRIMER UN EXERCICE ── */
app.delete("/exercises/:id", async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM exercises WHERE id = $1", [req.params.id]);
    res.json({ deleted: result.rowCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ── LANCEMENT ── */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
