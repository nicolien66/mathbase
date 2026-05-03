const express    = require("express");
const sqlite3    = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const path       = require("path");

const app = express();
const db  = new sqlite3.Database("./database.db");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

/* ── CRÉATION TABLE ── */
db.run(`
  CREATE TABLE IF NOT EXISTS exercises (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    title      TEXT    NOT NULL,
    content    TEXT    NOT NULL,
    level      TEXT    NOT NULL,
    subject    TEXT,
    difficulty TEXT,
    solution   TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) console.error("Erreur création table :", err);
  else console.log("Base de données prête.");
});

/* ── AJOUTER UN EXERCICE ── */
app.post("/exercises", (req, res) => {
  const { title, content, level, subject, difficulty, solution } = req.body;

  if (!title || !content || !level) {
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }

  db.run(
    `INSERT INTO exercises (title, content, level, subject, difficulty, solution)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [title, content, level, subject || null, difficulty || null, solution || null],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, message: "Exercice ajouté." });
    }
  );
});

/* ── RÉCUPÉRER LES EXERCICES (avec filtres) ── */
app.get("/exercises", (req, res) => {
  const { level, subject, difficulty } = req.query;

  let query  = "SELECT * FROM exercises WHERE 1=1";
  let params = [];

  if (level)      { query += " AND level = ?";      params.push(level); }
  if (subject)    { query += " AND subject = ?";    params.push(subject); }
  if (difficulty) { query += " AND difficulty = ?"; params.push(difficulty); }

  query += " ORDER BY created_at DESC";

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

/* ── RÉCUPÉRER UN EXERCICE PAR ID ── */
app.get("/exercises/:id", (req, res) => {
  db.get("SELECT * FROM exercises WHERE id = ?", [req.params.id], (err, row) => {
    if (err)  return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Exercice introuvable." });
    res.json(row);
  });
});

/* ── SUPPRIMER UN EXERCICE ── */
app.delete("/exercises/:id", (req, res) => {
  db.run("DELETE FROM exercises WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

/* ── LANCEMENT ── */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
