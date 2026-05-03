const express    = require("express");
const { Pool }   = require("pg");
const bodyParser = require("body-parser");
const path       = require("path");

const app  = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

/* ── CRÉATION TABLE ── */
pool.query(`
  CREATE TABLE IF NOT EXISTS exercises (
    id         SERIAL PRIMARY KEY,
    title      TEXT    NOT NULL,
    content    TEXT    NOT NULL,
    level      TEXT    NOT NULL,
    subject    TEXT,
    difficulty TEXT,
    solution   TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`).then(() => console.log("Base de données prête."))
  .catch(err => console.error("Erreur création table :", err));

/* ── AJOUTER UN EXERCICE ── */
app.post("/exercises", async (req, res) => {
  const { title, content, level, subject, difficulty, solution } = req.body;
  if (!title || !content || !level) {
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }
  try {
    const result = await pool.query(
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [title, content, level, subject || null, difficulty || null, solution || null]
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
