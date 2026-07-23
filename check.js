const { Pool } = require("pg");
const p = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
p.query("SELECT count(*) FILTER (WHERE jsonb_array_length(questions) > 0) AS avec, count(*) AS total FROM annales WHERE image_url LIKE 'annales-pdf/%'")
  .then(r => { console.log(r.rows[0]); return p.end(); })
  .catch(e => { console.error("Erreur :", e.message); p.end(); });
