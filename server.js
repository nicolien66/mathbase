const express    = require("express");
const { Pool }   = require("pg");
const bodyParser = require("body-parser");
const path       = require("path");
const crypto     = require("crypto");
const MISTRAL_API_KEY = process.env.MISTRAL_KEY;

/* ═══════════ AUTHENTIFICATION (zéro dépendance : crypto natif) ═══════════ */
const JWT_SECRET = process.env.JWT_SECRET || "mathbase-dev-secret-changez-moi-en-production";

/* — mots de passe : scrypt + sel aléatoire — */
function hashPassword(pw) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(pw, salt, 64).toString("hex");
  return salt + ":" + hash;
}
function verifyPassword(pw, stored) {
  const [salt, hash] = stored.split(":");
  const test = crypto.scryptSync(pw, salt, 64);
  const ref  = Buffer.from(hash, "hex");
  return test.length === ref.length && crypto.timingSafeEqual(test, ref);
}

/* — jetons signés HMAC-SHA256 (format JWT) — */
const b64u = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");
function signToken(payload, days = 30) {
  const body = { ...payload, exp: Date.now() + days * 864e5 };
  const data = b64u({ alg: "HS256", typ: "JWT" }) + "." + b64u(body);
  const sig  = crypto.createHmac("sha256", JWT_SECRET).update(data).digest("base64url");
  return data + "." + sig;
}
function verifyToken(token) {
  try {
    const [h, b, sig] = token.split(".");
    const expected = crypto.createHmac("sha256", JWT_SECRET).update(h + "." + b).digest("base64url");
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
    const payload = JSON.parse(Buffer.from(b, "base64url").toString());
    if (payload.exp && payload.exp < Date.now()) return null;
    return payload;
  } catch { return null; }
}

/* — middlewares — */
function auth(req, res, next) {
  const m = (req.headers.authorization || "").match(/^Bearer (.+)$/);
  const payload = m && verifyToken(m[1]);
  if (!payload) return res.status(401).json({ error: "Connexion requise." });
  req.user = payload;
  next();
}
function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Accès administrateur requis." });
  next();
}

const app  = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

/* ═══════════ ROUTES AUTH ═══════════ */
const pubUser = (u) => ({ id: u.id, email: u.email, pseudo: u.pseudo, role: u.role, classe: u.classe });

app.get("/auth/ping", (req, res) => res.json({ ok: true }));

app.post("/auth/register", async (req, res) => {
  try {
    const { pseudo, email, password, classe } = req.body || {};
    if (!pseudo || pseudo.trim().length < 2)  return res.status(400).json({ error: "Pseudo trop court (2 caractères min)." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "")) return res.status(400).json({ error: "Adresse e-mail invalide." });
    if (!password || password.length < 6)     return res.status(400).json({ error: "Mot de passe trop court (6 caractères min)." });
    const { rows } = await pool.query(
      `INSERT INTO users (email, pseudo, password_hash, classe)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [email.toLowerCase().trim(), pseudo.trim(), hashPassword(password), classe || null]
    );
    const user = rows[0];
    res.status(201).json({ token: signToken(pubUser(user)), user: pubUser(user) });
  } catch (e) {
    if (e.code === "23505") return res.status(409).json({ error: "Un compte existe déjà avec cette adresse." });
    console.error(e); res.status(500).json({ error: "Erreur serveur." });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};
    const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [(email || "").toLowerCase().trim()]);
    if (!rows.length || !verifyPassword(password || "", rows[0].password_hash))
      return res.status(401).json({ error: "E-mail ou mot de passe incorrect." });
    const user = rows[0];
    res.json({ token: signToken(pubUser(user)), user: pubUser(user) });
  } catch (e) { console.error(e); res.status(500).json({ error: "Erreur serveur." }); }
});

app.get("/auth/me", auth, async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [req.user.id]);
  if (!rows.length) return res.status(401).json({ error: "Compte introuvable." });
  res.json({ user: pubUser(rows[0]) });
});

/* ═══════════ ROUTES ADMIN ═══════════ */
app.get("/admin/users", auth, requireAdmin, async (req, res) => {
  const { rows } = await pool.query(
    "SELECT id, email, pseudo, role, classe, created_at FROM users ORDER BY created_at DESC");
  res.json(rows);
});

app.patch("/admin/users/:id", auth, requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const { role, classe } = req.body || {};
  if (role && !["eleve", "admin"].includes(role)) return res.status(400).json({ error: "Rôle invalide." });
  if (role && id === req.user.id) return res.status(400).json({ error: "Impossible de modifier son propre rôle." });
  const { rows } = await pool.query(
    `UPDATE users SET role = COALESCE($1, role), classe = COALESCE($2, classe)
     WHERE id = $3 RETURNING id, email, pseudo, role, classe, created_at`,
    [role || null, classe || null, id]);
  if (!rows.length) return res.status(404).json({ error: "Utilisateur introuvable." });
  res.json(rows[0]);
});

app.delete("/admin/users/:id", auth, requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (id === req.user.id) return res.status(400).json({ error: "Impossible de supprimer son propre compte." });
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
  res.json({ ok: true });
});

/* ── CONFIG CLIENT (clé Mistral pour la séance) — réservé aux connectés ── */
app.get("/config", auth, (req, res) => {
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
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id            SERIAL PRIMARY KEY,
      email         TEXT UNIQUE NOT NULL,
      pseudo        TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      role          TEXT NOT NULL DEFAULT 'eleve',
      classe        TEXT,
      created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log("Base de données prête.");
  await seedAdmin();
  await seedDB();
}

/* ── BOOTSTRAP DU COMPTE ADMINISTRATEUR ── */
async function seedAdmin() {
  const email = (process.env.ADMIN_EMAIL || "admin@mathbase.fr").toLowerCase();
  const pw    = process.env.ADMIN_PASSWORD || "admin123";
  const { rows } = await pool.query("SELECT id FROM users WHERE role = 'admin' LIMIT 1");
  if (rows.length) return;
  await pool.query(
    "INSERT INTO users (email, pseudo, password_hash, role) VALUES ($1, $2, $3, 'admin') ON CONFLICT (email) DO UPDATE SET role = 'admin'",
    [email, "Administrateur", hashPassword(pw)]
  );
  console.log(`Compte admin créé : ${email}` +
    (process.env.ADMIN_PASSWORD ? "" : "  ⚠ mot de passe par défaut « admin123 » — définissez ADMIN_PASSWORD !"));
}

/* ── SEED : banque de départ (insérée uniquement si la table est vide) ── */
const SEED = [
  ["Multiplier un décimal par 100","Calcule : 3,47 × 100.\nExplique comment se déplace la virgule.","college","Arithmétique","Facile","3,47 × 100 = 347. La virgule se déplace de 2 rangs vers la droite.","6ème","Entiers & décimaux"],
  ["Placer une fraction sur un partage","Un gâteau est coupé en 8 parts égales. Léa en mange 3.\nQuelle fraction du gâteau a-t-elle mangée ? Quelle fraction reste-t-il ?","college","Arithmétique","Facile","Léa a mangé 3/8 du gâteau. Il reste 8/8 − 3/8 = 5/8.","6ème","Fractions"],
  ["Simplifier une fraction","Simplifie la fraction 18/24 le plus possible.","college","Arithmétique","Moyen","18/24 = 3/4 (on divise le numérateur et le dénominateur par 6).","5ème","Fractions"],
  ["Addition de nombres relatifs","Calcule : (−7) + (+3) puis (−4) + (−5).","college","Arithmétique","Facile","(−7) + (+3) = −4 et (−4) + (−5) = −9.","5ème","Nombres relatifs"],
  ["Règle des signes","Calcule : (−3) × (−6) puis (−20) ÷ 4.","college","Arithmétique","Moyen","(−3) × (−6) = +18 (moins par moins donne plus) et (−20) ÷ 4 = −5.","4ème","Nombres relatifs"],
  ["Puissances de 10","Écris 10⁵ sous forme d'un nombre entier, puis écris 2³ × 2² sous la forme d'une seule puissance de 2.","college","Arithmétique","Facile","10⁵ = 100 000 et 2³ × 2² = 2⁵ = 32.","4ème","Puissances"],
  ["Tableau de proportionnalité","3 kg de pommes coûtent 7,50 €.\nCombien coûtent 5 kg de pommes ?","college","Arithmétique","Moyen","1 kg coûte 7,50 ÷ 3 = 2,50 €. Donc 5 kg coûtent 2,50 × 5 = 12,50 €.","4ème","Proportionnalité"],
  ["Calculer un pourcentage","Un jean coûte 60 €. Il est soldé à −30 %.\nCalcule le montant de la réduction, puis le nouveau prix.","college","Arithmétique","Facile","Réduction : 60 × 30/100 = 18 €. Nouveau prix : 60 − 18 = 42 €.","4ème","Pourcentages"],
  ["Vitesse moyenne","Un cycliste parcourt 45 km en 1 h 30 min.\nQuelle est sa vitesse moyenne en km/h ?","college","Arithmétique","Moyen","1 h 30 = 1,5 h. v = d ÷ t = 45 ÷ 1,5 = 30 km/h.","4ème","Vitesse, distance et temps"],
  ["Décomposition en facteurs premiers","Décompose 84 en produit de facteurs premiers, puis donne le PGCD de 84 et 60.","college","Arithmétique","Difficile","84 = 2² × 3 × 7. 60 = 2² × 3 × 5. PGCD(84, 60) = 2² × 3 = 12.","3ème","Arithmétique"],
  ["Priorités opératoires","Calcule en respectant les priorités : 7 + 3 × (8 − 5).","college","Algèbre","Facile","7 + 3 × (8 − 5) = 7 + 3 × 3 = 7 + 9 = 16.","5ème","Enchaînement d'opérations"],
  ["Réduire une expression","Réduis l'expression : A = 5x + 3 − 2x + 7.","college","Algèbre","Moyen","A = 5x − 2x + 3 + 7 = 3x + 10.","4ème","Calcul littéral"],
  ["Développer avec la distributivité","Développe et réduis : B = 4(2x − 3) + 5x.","college","Algèbre","Moyen","B = 8x − 12 + 5x = 13x − 12.","3ème","Développement et factorisation"],
  ["Équation du premier degré","Résous l'équation : 3x + 5 = 20.","college","Algèbre","Moyen","3x = 20 − 5 = 15, donc x = 15 ÷ 3 = 5.","3ème","Équations du 1er degré"],
  ["Équation avec x des deux côtés","Résous l'équation : 7x − 4 = 3x + 12.","college","Algèbre","Difficile","7x − 3x = 12 + 4, soit 4x = 16, donc x = 4.","3ème","Équations du 1er degré"],
  ["Somme des angles d'un triangle","Dans un triangle ABC, l'angle A mesure 48° et l'angle B mesure 63°.\nCalcule la mesure de l'angle C.","college","Géométrie","Facile","C = 180 − (48 + 63) = 180 − 111 = 69°.","5ème","Géométrie du triangle"],
  ["Théorème de Pythagore","Un triangle ABC est rectangle en A, avec AB = 6 cm et AC = 8 cm.\nCalcule la longueur de l'hypoténuse BC.","college","Géométrie","Moyen","BC² = AB² + AC² = 36 + 64 = 100, donc BC = √100 = 10 cm.","4ème","Théorème de Pythagore"],
  ["Réciproque de Pythagore","Un triangle a des côtés de 5 cm, 12 cm et 13 cm.\nEst-il rectangle ? Justifie.","college","Géométrie","Difficile","13² = 169 et 5² + 12² = 169. Comme 13² = 5² + 12², le triangle est rectangle (réciproque de Pythagore).","4ème","Théorème de Pythagore"],
  ["Théorème de Thalès","Dans un triangle ABC, M est sur [AB], N est sur [AC] et (MN) // (BC).\nOn donne AM = 3 cm, AB = 9 cm et BC = 12 cm. Calcule MN.","college","Géométrie","Difficile","D'après Thalès : MN/BC = AM/AB = 3/9 = 1/3. Donc MN = 12 × 1/3 = 4 cm.","3ème","Théorème de Thalès"],
  ["Cosinus d'un angle","Dans un triangle rectangle, l'hypoténuse mesure 10 cm et le côté adjacent à l'angle x mesure 5 cm.\nCalcule cos(x), puis donne la mesure de l'angle x.","college","Géométrie","Difficile","cos(x) = 5/10 = 0,5, donc x = 60°.","3ème","Trigonométrie"],
  ["Image par une fonction","Soit f la fonction définie par f(x) = 3x − 2.\nCalcule l'image de 4 par f, puis l'antécédent de 10.","college","Analyse","Facile","f(4) = 3×4 − 2 = 10. Antécédent de 10 : 3x − 2 = 10 donne x = 4.","3ème","Notions de fonctions"],
  ["Fonction linéaire et proportionnalité","g est une fonction linéaire telle que g(2) = 7.\nDétermine le coefficient a, puis calcule g(6).","college","Analyse","Moyen","a = 7/2 = 3,5, donc g(x) = 3,5x et g(6) = 21.","3ème","Fonction linéaire"],
  ["Probabilité avec un dé","On lance un dé équilibré à 6 faces.\nQuelle est la probabilité d'obtenir un multiple de 3 ?","college","Probabilités","Facile","Les multiples de 3 sont 3 et 6 : P = 2/6 = 1/3.","3ème","Probabilités simples"],
  ["Moyenne et médiane","Voici les notes d'un élève : 8 ; 11 ; 12 ; 14 ; 15.\nCalcule la moyenne, puis donne la médiane de la série.","college","Statistiques","Moyen","Moyenne = 60/5 = 12. Médiane = 12 (3ᵉ valeur sur 5).","3ème","Indicateurs de position"],
  ["Périmètre et aire d'un rectangle","Un rectangle mesure 7 cm de longueur et 4 cm de largeur.\nCalcule son périmètre puis son aire.","primaire","Géométrie","Facile","Périmètre = 2 × (7 + 4) = 22 cm. Aire = 7 × 4 = 28 cm².","CM2","Périmètres et aires"],
  ["Fractions de quantité","Dans une classe de 28 élèves, 3/4 mangent à la cantine.\nCombien d'élèves mangent à la cantine ?","primaire","Arithmétique","Moyen","28 ÷ 4 = 7 et 7 × 3 = 21 élèves.","CM2","Fractions"],
  ["Développer une identité remarquable","Développe : (x + 5)² puis factorise : x² − 49.","lycee","Algèbre","Moyen","(x + 5)² = x² + 10x + 25 et x² − 49 = (x − 7)(x + 7).","2nde","Développement et factorisation"],
  ["Résoudre une inéquation","Résous l'inéquation : −2x + 6 > 0.\nAttention au sens de l'inégalité !","college","Algèbre","Difficile","−2x > −6, on divise par −2 (négatif) donc on inverse : x < 3.","4ème","Inéquations"],
];

async function seedDB() {
  const { rows } = await pool.query("SELECT COUNT(*)::int AS n FROM exercises");
  if (rows[0].n > 0) return;
  for (const [title, content, level, subject, difficulty, solution, classe, chapitre] of SEED) {
    await pool.query(
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution, classe, chapitre)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
      [title, content, level, subject, difficulty, solution, classe, chapitre]
    );
  }
  console.log(`Base initialisée avec ${SEED.length} exercices.`);
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
app.post("/exercises/correct", auth, async (req, res) => {
  const { exercise, answer } = req.body;
  const key = process.env.MISTRAL_KEY;
  if (!key) return res.status(500).json({ error: "Clé MISTRAL_KEY manquante." });

  const solutionCtx = exercise.solution ? `\nSOLUTION OFFICIELLE : ${exercise.solution}` : "";
  const prompt = `Tu es un professeur de mathématiques qui corrige la copie d'un élève, comme dans la marge d'un cahier. Tu es précis, bienveillant et tu tutoies l'élève.

EXERCICE : ${exercise.title}
ÉNONCÉ : ${exercise.content}${solutionCtx}

CE QUE L'ÉLÈVE A ÉCRIT (son brouillon, mot pour mot) :
${answer}

Ta mission : réagir DIRECTEMENT à ce que l'élève a écrit, pas à une réponse idéale.
1. Reconstitue le raisonnement de l'élève à partir de ce qu'il a écrit.
2. Si c'est une erreur : trouve PRÉCISÉMENT à quelle étape il s'est trompé et SURTOUT pourquoi (règle mal appliquée, signe oublié, confusion entre deux notions, erreur de calcul, propriété inventée…). Explique l'origine de l'erreur AVANT de donner quoi que ce soit d'autre.
3. Si c'est juste : confirme et dis ce qui rend le raisonnement correct.
4. Ensuite seulement, donne la bonne démarche puis la solution finale.

Utilise des maths lisibles en texte simple (ex : x^2, sqrt(2), 3/4, x = -b/2a). Pas de LaTeX, pas de markdown.

Réponds UNIQUEMENT en JSON valide, sans markdown :
{
  "verdict": "correct" | "partial" | "incorrect",
  "analyse": "Comment l'élève est arrivé à sa réponse. Si erreur, l'étape exacte qui cloche et la raison profonde de l'erreur. 2 à 4 phrases, adressées à l'élève.",
  "demarche": "La bonne démarche, étape par étape, claire et sobre. Sépare les étapes par des retours à la ligne.",
  "solution": "Le résultat final attendu, en une ou deux lignes."
}`;

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
        max_tokens: 800
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
app.post("/exercises/analyse", auth, async (req, res) => {
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
app.post("/exercises", auth, async (req, res) => {
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
app.get("/exercises", auth, async (req, res) => {
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
app.get("/exercises/:id", auth, async (req, res) => {
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
