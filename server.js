const express    = require("express");
const { Pool }   = require("pg");
const bodyParser = require("body-parser");
const path       = require("path");
const crypto     = require("crypto");
const fs         = require("fs");

/* ── LECTURE TOLÉRANTE DU JSON RENVOYÉ PAR LE MODÈLE ──────────────────────
   Les modèles insèrent souvent de vrais retours à la ligne à l'intérieur des
   chaînes (ce que JSON interdit), ou encadrent leur réponse de texte. On
   répare ces deux cas avant d'abandonner. */
function parseJsonTolerant(raw) {
  let t = String(raw || "").replace(/```json|```/g, "").trim();

  // 1er essai : tel quel
  try { return JSON.parse(t); } catch (_) {}

  // 2e essai : ne garder que le premier objet { ... }
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a >= 0 && b > a) {
    t = t.slice(a, b + 1);
    try { return JSON.parse(t); } catch (_) {}
  }

  // 3e essai : échapper les sauts de ligne bruts présents DANS les chaînes
  let out = "", dansChaine = false, echap = false;
  for (const c of t) {
    if (echap) { out += c; echap = false; continue; }
    if (c === "\\") { out += c; echap = true; continue; }
    if (c === '"') { dansChaine = !dansChaine; out += c; continue; }
    if (dansChaine) {
      if (c === "\n") { out += "\\n"; continue; }
      if (c === "\r") { continue; }
      if (c === "\t") { out += "\\t"; continue; }
    }
    out += c;
  }
  try { return JSON.parse(out); } catch (_) {}
  return null;
}

/* ── RENDU D'UNE PAGE DE SUJET EN IMAGE ───────────────────────────────────
   Le correcteur doit VOIR la figure, pas seulement en lire une description.
   On convertit la page du PDF en PNG et on la joint à l'appel Mistral.
   En cas d'échec (dépendance absente, fichier manquant), on renvoie null :
   la correction est alors REFUSÉE pour les annales : sans la page, le
   correcteur inventerait la configuration. Le champ figure_desc subsiste
   pour l'import et le diagnostic, mais n'est plus jamais transmis à l'IA. */
let _pdfjs = null, _canvas = null, _renderKO = false;
const _pageCache = new Map();               // clé "fichier#page" -> data URL
const PAGE_CACHE_MAX = 60;

/* pdfjs (lecture du texte) et canvas (rendu d'images) sont chargés séparément :
   canvas embarque des binaires natifs et peut manquer sur certains hébergeurs,
   sans que cela doive empêcher l'analyse du texte. */
let _pdfjsKO = false, _canvasKO = false;

async function _loadPdfjs() {
  if (_pdfjsKO) return null;
  if (_pdfjs) return _pdfjs;
  // Le chemin du module varie selon la version de pdfjs-dist : on essaie les
  // variantes connues plutôt que d'échouer sur la première.
  const chemins = [
    "pdfjs-dist/legacy/build/pdf.mjs",
    "pdfjs-dist/build/pdf.mjs",
    "pdfjs-dist/legacy/build/pdf.js",
    "pdfjs-dist",
  ];
  const erreurs = [];
  for (const c of chemins) {
    try {
      const m = await import(c);
      _pdfjs = m.getDocument ? m : (m.default || m);
      if (_pdfjs && _pdfjs.getDocument) {
        console.log("[pdf] pdfjs-dist chargé depuis " + c);
        return _pdfjs;
      }
      erreurs.push(c + " : pas de getDocument");
    } catch (e) { erreurs.push(c + " : " + e.code || e.message); }
  }
  _pdfjsKO = true;
  console.warn("[pdf] pdfjs-dist introuvable. Tentatives : " + erreurs.join(" | "));
  return null;
}

function _loadCanvas() {
  if (_canvasKO) return null;
  if (_canvas) return _canvas;
  try {
    _canvas = require("@napi-rs/canvas");
    return _canvas;
  } catch (e) {
    _canvasKO = true;
    console.warn("[pdf] @napi-rs/canvas indisponible (" + e.message +
                 ") : pas d'image de page, on reste en mode texte.");
    return null;
  }
}

async function _loadRenderer() {
  if (_renderKO) return null;
  const pdfjs = await _loadPdfjs();
  const canvas = _loadCanvas();
  if (!pdfjs || !canvas) { _renderKO = true; return null; }
  return { pdfjs, canvas };
}

/* Seuls les PDF d'annales sont rasterisables : garde-fou anti-traversée. */
function _cheminSujet(relUrl) {
  const rel = String(relUrl || "").replace(/^\/+/, "");
  if (!/^annales-pdf\/[A-Za-z0-9._-]+\.pdf$/i.test(rel)) return null;
  return path.join(__dirname, "public", rel);
}

async function renderPageImage(relUrl, pageNum, scale = 1.7) {
  const cle = relUrl + "#" + pageNum;
  if (_pageCache.has(cle)) return _pageCache.get(cle);

  const file = _cheminSujet(relUrl);
  if (!file || !fs.existsSync(file)) return null;
  const mod = await _loadRenderer();
  if (!mod) return null;

  try {
    const data = new Uint8Array(fs.readFileSync(file));
    const task = mod.pdfjs.getDocument({ data, isEvalSupported: false });
    const doc  = await task.promise;
    const fermer = () => { try { task.destroy(); } catch (_) {} };
    if (pageNum < 1 || pageNum > doc.numPages) { fermer(); return null; }
    const page     = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale });
    const cv  = mod.canvas.createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
    const ctx = cv.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, cv.width, cv.height);
    await page.render({ canvasContext: ctx, viewport }).promise;
    const url = "data:image/png;base64," + cv.toBuffer("image/png").toString("base64");
    fermer();

    if (_pageCache.size >= PAGE_CACHE_MAX) _pageCache.delete(_pageCache.keys().next().value);
    _pageCache.set(cle, url);
    return url;
  } catch (e) {
    console.warn("[pages] échec du rendu " + relUrl + " p." + pageNum + " : " + e.message);
    return null;
  }
}
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

/* ══════════════════════════════════════════════════════════════════════════
   ANALYSE AUTOMATIQUE D'UNE ANNALE DÉPOSÉE EN PDF
   Reprend la chaîne validée hors ligne : découpage en exercices, association
   de chaque exercice à ses pages, puis description des figures par l'IA à
   partir de l'image de la page (et non du texte, qui perd les dessins).
   ══════════════════════════════════════════════════════════════════════════ */

/* Petites capitales LaTeX : « E XERCICE 1 » -> « EXERCICE 1 ». */
function recolleCapitales(l) {
  return l.replace(/\b([A-ZÀ-Þ])\s+([A-ZÀ-Þ]{2,})/g, "$1$2");
}
const ENTETE = /^[ \t]*(?:exercice\s*n?[°o]?\s*\d*|probl[eè]me(?:\s+n?[°o]?\s*\d+)?|question\s+\d+\b)/i;
const REBUT  = /^\s*(?:A\.\s*P\.\s*M\.\s*E\.\s*P\.|L['’]?(?:int[ée]grale|ann[ée]e)\s+\d{4}|Brevet des coll[èe]ges.*|\d+)\s*$/i;

/* Texte page par page via pdfjs (déjà utilisé pour le rendu d'images). */
async function texteParPage(buffer) {
  const pdfjs = await _loadPdfjs();
  if (!pdfjs) throw new Error(
    "Lecture des PDF indisponible sur le serveur : la bibliothèque pdfjs-dist n'est pas installée. " +
    "Ajoutez-la aux dépendances (npm install pdfjs-dist) et redéployez.");
  const task = pdfjs.getDocument({ data: new Uint8Array(buffer), isEvalSupported: false });
  const doc = await task.promise;
  const pages = [];
  for (let n = 1; n <= doc.numPages; n++) {
    const page = await doc.getPage(n);
    const tc = await page.getTextContent();
    // Reconstitution des lignes d'après la position verticale des fragments.
    const lignes = new Map();
    for (const it of tc.items) {
      const y = Math.round(it.transform[5]);
      if (!lignes.has(y)) lignes.set(y, []);
      lignes.get(y).push({ x: it.transform[4], s: it.str });
    }
    const ordonnees = [...lignes.keys()].sort((a, b) => b - a);
    pages.push(ordonnees.map(y =>
      lignes.get(y).sort((a, b) => a.x - b.x).map(o => o.s).join(" ").replace(/\s+/g, " ").trim()
    ).filter(Boolean).join("\n"));
  }
  try { task.destroy(); } catch (_) {}
  return pages;
}

/* Découpe en exercices et associe les pages. */
function decouper(pages) {
  const lp = [];
  pages.forEach((txt, i) => txt.split("\n").forEach(l => {
    if (!REBUT.test(l)) lp.push({ page: i + 1, l });
  }));
  const marques = [];
  lp.forEach((o, i) => { if (ENTETE.test(recolleCapitales(o.l))) marques.push(i); });
  // en-têtes identiques rapprochés = coupure de page
  const norm = i => recolleCapitales(lp[i].l).trim().toLowerCase();
  const gardees = marques.filter((m, k) =>
    k === 0 || !(norm(m) === norm(marques[k - 1]) && m - marques[k - 1] <= 3));

  return gardees.map((deb, k) => {
    const fin = k + 1 < gardees.length ? gardees[k + 1] : lp.length;
    const seg = lp.slice(deb, fin);
    const pp = [...new Set(seg.filter(o => o.l.trim()).map(o => o.page))].sort((a, b) => a - b);
    const texte = seg.map(o => o.l).join("\n").replace(/\n{3,}/g, "\n\n").trim();
    const tete = recolleCapitales(seg[0].l).replace(/\s+/g, " ").trim();
    return { titre: tete, enonce: texte, pages: pp.length ? pp : [seg[0].page] };
  });
}

/* Décrit les figures d'une page à partir de son image. */
async function decrisFigures(dataUrl, numeroPage) {
  const key = process.env.MISTRAL_KEY;
  if (!key) return null;
  const consigne =
    "Voici la page " + numeroPage + " d'un sujet de brevet de mathématiques. " +
    "Décris PRÉCISÉMENT chaque figure géométrique, graphique, schéma ou tableau qui y est DESSINÉ " +
    "(pas le texte de l'énoncé). Pour chaque figure : la forme, les points nommés, les longueurs et " +
    "angles portés sur le dessin, les codages (angle droit, égalités de longueurs), le parallélisme " +
    "visible, et à quel exercice elle se rapporte. " +
    "Réponds UNIQUEMENT en JSON : {\"figures\":[{\"exercice\":\"Exercice 2\",\"description\":\"…\"}]} " +
    "Si la page ne contient aucune figure dessinée, réponds {\"figures\":[]}.";
  try {
    const r = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + key },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [{ role: "user", content: [
          { type: "text", text: consigne },
          { type: "image_url", image_url: dataUrl },
        ] }],
        response_format: { type: "json_object" },
        temperature: 0.1, max_tokens: 900,
      }),
    });
    if (!r.ok) return null;
    const d = await r.json();
    const parsed = parseJsonTolerant((d.choices && d.choices[0] && d.choices[0].message.content) || "");
    return parsed && Array.isArray(parsed.figures) ? parsed.figures : null;
  } catch (_) { return null; }
}

/* Chaîne complète : PDF -> questions prêtes pour la correction. */
async function analyseAnnalePdf(buffer, nomFichier, pagesFournies) {
  // Le navigateur sait extraire le texte : on l'utilise s'il l'a fourni,
  // ce qui évite de dépendre de pdfjs côté serveur.
  const pages = (Array.isArray(pagesFournies) && pagesFournies.length)
    ? pagesFournies : await texteParPage(buffer);
  const blocs = decouper(pages);
  if (!blocs.length) {
    throw new Error("Aucun exercice détecté : le PDF est peut-être scanné (sans couche texte).");
  }

  // Description des figures, page par page (plafonné pour limiter le coût).
  const parPage = {};
  const aVoir = [...new Set(blocs.flatMap(b => b.pages))].slice(0, 10);
  for (const n of aVoir) {
    const img = await renderPageImage("annales-pdf/" + nomFichier, n);
    if (!img) continue;
    const figs = await decrisFigures(img, n);
    if (figs && figs.length) parPage[n] = figs;
  }

  const questions = blocs.map((b, i) => {
    const q = {
      enonce: (b.titre || ("Exercice " + (i + 1))) + " — reporte-toi au sujet PDF ci-dessus.",
      enonce_correction: b.enonce,
      pages: b.pages,
      pages_total: pages.length,
    };
    // On rattache la figure dont l'exercice cité correspond, sinon celle de la page.
    const candidates = b.pages.flatMap(n => parPage[n] || []);
    const exact = candidates.find(f =>
      f.exercice && b.titre && f.exercice.toLowerCase().replace(/\s+/g, "")
        .startsWith(b.titre.toLowerCase().replace(/\s+/g, "").slice(0, 10)));
    const choisie = exact || (candidates.length === 1 ? candidates[0] : null);
    if (choisie && choisie.description) q.figure_desc = choisie.description;
    return q;
  });

  return { questions, pages_total: pages.length, nb_exercices: blocs.length };
}

const app  = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.use(bodyParser.json({ limit: "25mb" }));
/* Fichiers statiques. Sans en-tête de cache explicite, le navigateur applique
   une fraîcheur « heuristique » et peut resservir un script.js périmé pendant
   des heures après un déploiement — les corrections semblent alors sans effet.
   « no-cache » n'interdit pas le cache : il impose de revalider. Avec l'ETag,
   un fichier inchangé coûte un simple 304. */
/* Repère de version : affiché par le diagnostic admin et au démarrage. Si ce
   numéro ne correspond pas à la dernière version déployée, c'est que le
   serveur n'a pas redémarré sur le code attendu. */
const SERVEUR_VERSION = "2026-08-17-signalements";

app.use(express.static(path.join(__dirname, "public"), {
  etag: true,
  setHeaders(res, chemin) {
    if (/\.(html|js|css)$/i.test(chemin)) res.setHeader("Cache-Control", "no-cache");
    else if (/\.(png|jpe?g|svg|woff2?|pdf)$/i.test(chemin)) res.setHeader("Cache-Control", "public, max-age=86400");
  },
}));

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

/* ═══════════ ROUTES ANNALES ═══════════ */
app.get("/annales", auth, async (req, res) => {
  const { level, exam, year, matiere } = req.query;
  let query = "SELECT * FROM annales WHERE 1=1";
  const params = [];
  let i = 1;
  query += ` AND COALESCE(matiere, 'mathematiques') = $${i++}`;
  params.push(matiere || "mathematiques");
  if (level) { query += ` AND level = $${i++}`; params.push(level); }
  if (exam)  { query += ` AND exam = $${i++}`;  params.push(exam); }
  if (year)  { query += ` AND year = $${i++}`;  params.push(Number(year)); }
  query += " ORDER BY year DESC NULLS LAST, created_at DESC";
  try {
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get("/annales/:id", auth, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM annales WHERE id = $1", [Number(req.params.id)]);
    if (!result.rows.length) return res.status(404).json({ error: "Annale introuvable." });
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post("/annales", auth, async (req, res) => {
  const { title, exam, year, level, classe, subject, duration, content, image_url, solution, questions, matiere } = req.body || {};
  if (!title || !content) return res.status(400).json({ error: "Titre et énoncé requis." });
  try {
    const result = await pool.query(
      `INSERT INTO annales (title, exam, year, level, classe, subject, duration, content, image_url, solution, questions, matiere)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING id`,
      [title, exam || null, year ? Number(year) : null, level || null, classe || null, subject || null,
       duration ? Number(duration) : null, content, image_url || null, solution || null,
       JSON.stringify(Array.isArray(questions) ? questions : []), matiere || "mathematiques"]
    );
    res.json({ id: result.rows[0].id, message: "Annale ajoutée." });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

/* ── Dépôt d'une annale en PDF (administrateurs) ──────────────────────────
   Le PDF arrive encodé en base64 dans le JSON : pas de dépendance multipart.
   Il est écrit dans public/annales-pdf/, puis analysé. */
app.post("/annales/upload", auth, requireAdmin, async (req, res) => {
  try {
    const { nom, pdf_base64, title, exam, year, classe, duration } = req.body || {};
    if (!pdf_base64) return res.status(400).json({ error: "Aucun PDF reçu." });

    const propre = String(nom || "annale.pdf")
      .replace(/[^A-Za-z0-9._-]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "");
    const fichier = /\.pdf$/i.test(propre) ? propre : propre + ".pdf";

    const dossier = path.join(__dirname, "public", "annales-pdf");
    fs.mkdirSync(dossier, { recursive: true });
    const cible = path.join(dossier, fichier);
    if (fs.existsSync(cible)) return res.status(409).json({ error: "Un sujet portant ce nom de fichier existe déjà." });

    const buffer = Buffer.from(String(pdf_base64).replace(/^data:.*?base64,/, ""), "base64");
    if (buffer.slice(0, 4).toString() !== "%PDF") return res.status(400).json({ error: "Le fichier n'est pas un PDF." });
    fs.writeFileSync(cible, buffer);

    let analyse;
    try {
      analyse = await analyseAnnalePdf(buffer, fichier, req.body.pages_texte);
    } catch (e) {
      fs.unlinkSync(cible);                       // on ne garde pas un PDF inexploitable
      return res.status(422).json({ error: e.message });
    }

    const { rows } = await pool.query(
      `INSERT INTO annales (title, exam, year, level, classe, subject, duration, image_url, questions, matiere)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id, title`,
      [title || fichier.replace(/\.pdf$/i, "").replace(/_/g, " "),
       exam || "Brevet", year ? Number(year) : null, "college",
       classe || "3ème", "Mathématiques", duration ? Number(duration) : null,
       "annales-pdf/" + fichier, JSON.stringify(analyse.questions),
       req.body.matiere || "mathematiques"]);

    res.json({
      id: rows[0].id, title: rows[0].title, fichier,
      nb_exercices: analyse.nb_exercices, pages: analyse.pages_total,
      avec_figure: analyse.questions.filter(q => q.figure_desc).length,
      apercu: analyse.questions.map((q, i) => ({
        index: i, titre: q.enonce.split(" — ")[0], pages: q.pages, figure: !!q.figure_desc,
      })),
    });
  } catch (e) {
    console.error("Erreur upload annale:", e.message);
    res.status(500).json({ error: e.message });
  }
});

/* ── Vérification qu'un énoncé est bien un PROBLÈME ─────────────────────── */
/* ── Problème déposé en PDF ───────────────────────────────────────────────
   Le PDF est conservé (figures, annexes, documents-réponses). Son texte est
   extrait puis remis en forme par l'IA : le découpage d'un PDF casse souvent
   la continuité de l'énoncé (colonnes, encarts, sauts de page), donc on lui
   demande de rétablir la cohérence et d'ajouter les précisions nécessaires,
   en signalant explicitement les renvois aux figures restées dans le PDF. */
app.post("/problemes/depuis-pdf", auth, async (req, res) => {
  try {
    const { nom, pdf_base64 } = req.body || {};
    if (!pdf_base64) return res.status(400).json({ error: "Aucun PDF reçu." });
    const key = process.env.MISTRAL_KEY;
    if (!key) return res.status(500).json({ error: "Clé MISTRAL_KEY manquante." });

    const propre = String(nom || "probleme.pdf")
      .replace(/[^A-Za-z0-9._-]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "");
    const fichier = (/\.pdf$/i.test(propre) ? propre : propre + ".pdf")
      .replace(/\.pdf$/i, "") + "-" + Date.now().toString(36) + ".pdf";

    const buffer = Buffer.from(String(pdf_base64).replace(/^data:.*?base64,/, ""), "base64");
    if (buffer.slice(0, 4).toString() !== "%PDF") return res.status(400).json({ error: "Le fichier n'est pas un PDF." });

    const dossier = path.join(__dirname, "public", "annales-pdf");
    fs.mkdirSync(dossier, { recursive: true });
    fs.writeFileSync(path.join(dossier, fichier), buffer);

    const pages = (Array.isArray(req.body.pages_texte) && req.body.pages_texte.length)
      ? req.body.pages_texte : await texteParPage(buffer);
    const texteBrut = pages.map((t, i) => `--- page ${i + 1} ---\n${t}`).join("\n\n").slice(0, 14000);

    // Images des premières pages : l'IA voit ainsi les figures réellement dessinées.
    const images = [];
    for (let n = 1; n <= Math.min(pages.length, 3); n++) {
      const img = await renderPageImage("annales-pdf/" + fichier, n);
      if (img) images.push(img);
    }

    const consigne = `Voici un problème de mathématiques extrait d'un PDF. Le texte ci-dessous provient d'une extraction automatique : la mise en page (colonnes, encarts, figures, sauts de page) a pu mélanger ou tronquer des phrases.

TEXTE EXTRAIT :
${texteBrut}

Ta tâche : reconstituer un énoncé PROPRE et COHÉRENT, destiné à être affiché tel quel à un élève de collège.

Règles impératives :
- N'invente aucune donnée numérique. Si une valeur est illisible ou manquante, écris « (voir le document joint) ».
- Rétablis l'ordre logique des phrases mélangées par les colonnes, et supprime les fragments parasites (en-têtes, numéros de page, étiquettes de figure isolées).
- Conserve la numérotation des questions telle qu'elle est dans le sujet.
- Chaque fois que l'énoncé renvoie à une figure, un schéma, un tableau ou une annexe qui ne peut pas être retranscrit en texte, insère une phrase explicite du type « Voir la figure du document joint. » afin que l'élève sache où regarder.
- Ajoute, si nécessaire, une courte phrase de liaison pour rendre l'énoncé compréhensible sans le PDF sous les yeux, sans jamais changer les données.

Réponds UNIQUEMENT en JSON :
{
  "titre": "un titre court et parlant",
  "enonce": "l'énoncé complet remis en forme, avec des retours à la ligne",
  "figures": "description précise des figures et annexes présentes dans le PDF (formes, points nommés, longueurs et angles portés sur le dessin, codages), ou chaîne vide",
  "est_probleme": true | false,
  "justification": "2 phrases : est-ce un vrai problème (plusieurs étapes, choix de méthode) ou un simple exercice d'application ?",
  "classe": "6ème | 5ème | 4ème | 3ème",
  "difficulte": "Facile | Moyen | Difficile",
  "notions": ["notion 1", "notion 2"]
}`;

    const contenu = images.length
      ? [{ type: "text", text: consigne }].concat(images.map(u => ({ type: "image_url", image_url: u })))
      : consigne;

    const r = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + key },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [{ role: "user", content: contenu }],
        response_format: { type: "json_object" },
        temperature: 0.1, max_tokens: 2500,
      }),
    });
    if (!r.ok) throw new Error(await r.text());
    const d = await r.json();
    const parsed = parseJsonTolerant((d.choices && d.choices[0] && d.choices[0].message.content) || "");
    if (!parsed || !parsed.enonce) throw new Error("Le modèle n'a pas renvoyé d'énoncé exploitable.");

    res.json(Object.assign({ image_url: "annales-pdf/" + fichier, pages_total: pages.length }, parsed));
  } catch (e) {
    console.error("Erreur problème depuis PDF:", e.message);
    res.status(500).json({ error: e.message });
  }
});

app.post("/problemes/verifier", auth, async (req, res) => {
  const { titre, enonce } = req.body || {};
  if (!enonce || String(enonce).trim().length < 40)
    return res.status(400).json({ error: "L'énoncé est trop court pour être analysé." });
  const key = process.env.MISTRAL_KEY;
  if (!key) return res.status(500).json({ error: "Clé MISTRAL_KEY manquante." });

  const prompt = `Tu es professeur de mathématiques. On te soumet un énoncé destiné à être classé comme « problème ».

Un PROBLÈME comporte plusieurs étapes liées, demande de choisir soi-même une méthode, mobilise plusieurs notions ou exige d'interpréter une situation concrète pour décider quoi calculer.
Un simple EXERCICE D'APPLICATION consiste à appliquer directement une formule ou une technique qu'on vient d'apprendre, en une ou deux étapes évidentes.

TITRE : ${titre || "(sans titre)"}
ÉNONCÉ :
${enonce}

Réponds UNIQUEMENT en JSON :
{
  "est_probleme": true | false,
  "justification": "2 phrases expliquant ton classement, adressées à l'enseignant.",
  "notions": ["notion 1", "notion 2"],
  "classe": "6ème | 5ème | 4ème | 3ème",
  "difficulte": "Facile | Moyen | Difficile",
  "conseil": "Si ce n'est pas un problème, comment l'enrichir pour en faire un. Sinon, chaîne vide."
}`;
  try {
    const r = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + key },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
        temperature: 0.1, max_tokens: 700,
      }),
    });
    if (!r.ok) throw new Error(await r.text());
    const d = await r.json();
    const parsed = parseJsonTolerant((d.choices && d.choices[0] && d.choices[0].message.content) || "");
    if (!parsed) throw new Error("Réponse illisible du modèle.");
    res.json(parsed);
  } catch (e) {
    console.error("Erreur vérification problème:", e.message);
    res.status(500).json({ error: e.message });
  }
});

/* ── PAGE D'ANNALE EN IMAGE, POUR LE CLIENT ──
   Les exercices de CONSTRUCTION (« compléter la figure de l'annexe »,
   « tracer », « construire ») demandent que l'élève dessine SUR le document
   du sujet. Le client a donc besoin de la page en image ; jusqu'ici, seul le
   serveur y avait accès pour la correction.

   La réponse est mise en cache par renderPageImage : demander deux fois la
   même page ne coûte qu'un rendu. */
app.get("/annales/:id/page/:n", auth, async (req, res) => {
  try {
    const id = Number(req.params.id), n = Number(req.params.n);
    if (!Number.isInteger(id) || !Number.isInteger(n) || n < 1)
      return res.status(400).json({ error: "Paramètres invalides." });

    const { rows } = await pool.query("SELECT image_url FROM annales WHERE id = $1", [id]);
    if (!rows.length) return res.status(404).json({ error: "Sujet introuvable." });
    const url = rows[0].image_url;
    if (!url) return res.status(404).json({ error: "Ce sujet n'a pas de PDF rattaché." });

    /* Échelle modérée : l'élève dessine par-dessus, une image trop lourde
       ralentirait le navigateur sans rien apporter. */
    const img = await renderPageImage(url, n, 1.5);
    if (!img) return res.status(404).json({
      error: "Page indisponible (PDF absent du serveur, ou numéro hors limites)." });
    res.json({ image: img, page: n });
  } catch (err) { console.error(err); res.status(500).json({ error: err.message }); }
});

app.delete("/annales/:id", auth, requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: "Identifiant invalide." });
    /* On répond franchement quand rien n'a été supprimé : un « ok » silencieux
       sur zéro ligne laisse croire à une suppression qui n'a pas eu lieu. */
    const r = await pool.query("DELETE FROM annales WHERE id = $1", [id]);
    if (!r.rowCount) return res.status(404).json({ error: "Aucun sujet ne porte l'identifiant " + id + "." });
    console.log("[annales] sujet " + id + " supprimé par " + (req.user && req.user.email || "?"));
    res.json({ ok: true, supprimes: r.rowCount });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

/* ── SIGNALEMENTS : dépôt par l'élève ── */
app.post("/signalements", auth, async (req, res) => {
  try {
    const { annale_id, annale_titre, question, type, message } = req.body || {};
    const texte = String(message || "").trim();
    if (texte.length < 5)
      return res.status(400).json({ error: "Décris le problème en quelques mots." });
    if (texte.length > 2000)
      return res.status(400).json({ error: "Message trop long (2000 caractères au plus)." });
    const types = ["enonce", "correction", "figure", "note", "autre"];
    await pool.query(
      `INSERT INTO signalements (annale_id, annale_titre, question, type, message, user_id, pseudo)
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [Number(annale_id) || null, String(annale_titre || "").slice(0, 200) || null,
       String(question || "").slice(0, 120) || null,
       types.includes(type) ? type : "autre", texte,
       req.user && req.user.id, (req.user && req.user.pseudo) || null]);
    res.json({ ok: true });
  } catch (err) { console.error(err); res.status(500).json({ error: err.message }); }
});

/* ── SIGNALEMENTS : consultation par l'administrateur ── */
app.get("/admin/signalements", auth, requireAdmin, async (req, res) => {
  try {
    const statut = req.query.statut;
    const cond = statut === "nouveau" || statut === "traite" ? "WHERE statut = $1" : "";
    const { rows } = await pool.query(
      `SELECT * FROM signalements ${cond} ORDER BY created_at DESC LIMIT 400`,
      cond ? [statut] : []);

    /* Regroupé par sujet : c'est ainsi qu'on repère un sujet qui pose
       vraiment problème, plutôt qu'un signalement isolé. */
    const parSujet = new Map();
    rows.forEach(r => {
      const k = r.annale_id || 0;
      if (!parSujet.has(k)) parSujet.set(k, {
        annale_id: r.annale_id, titre: r.annale_titre || "(sujet supprimé)",
        total: 0, nouveaux: 0, types: {} });
      const e = parSujet.get(k);
      e.total++;
      if (r.statut === "nouveau") e.nouveaux++;
      e.types[r.type] = (e.types[r.type] || 0) + 1;
    });

    res.json({
      total: rows.length,
      nouveaux: rows.filter(r => r.statut === "nouveau").length,
      par_sujet: [...parSujet.values()].sort((a, b) => b.total - a.total),
      signalements: rows
    });
  } catch (err) { console.error(err); res.status(500).json({ error: err.message }); }
});

/* ── SIGNALEMENTS : marquer traité, ou supprimer ── */
app.patch("/admin/signalements/:id", auth, requireAdmin, async (req, res) => {
  try {
    const statut = req.body && req.body.statut === "nouveau" ? "nouveau" : "traite";
    const r = await pool.query("UPDATE signalements SET statut = $1 WHERE id = $2",
      [statut, Number(req.params.id)]);
    if (!r.rowCount) return res.status(404).json({ error: "Signalement introuvable." });
    res.json({ ok: true, statut });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete("/admin/signalements/:id", auth, requireAdmin, async (req, res) => {
  try {
    const r = await pool.query("DELETE FROM signalements WHERE id = $1", [Number(req.params.id)]);
    if (!r.rowCount) return res.status(404).json({ error: "Signalement introuvable." });
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
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

  /* ── Ouverture du site à plusieurs matières ──
     `subject` désignait déjà les domaines internes (Arithmétique, Géométrie…) :
     la matière scolaire a donc sa propre colonne. Tout le contenu existant est
     rattaché aux mathématiques, ce qui laisse le site identique à l'existant.
     (La migration des annales suit la création de leur table, plus bas.) */
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS matiere TEXT`);
  await pool.query(`UPDATE exercises SET matiere = 'mathematiques' WHERE matiere IS NULL`);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_exercises_matiere ON exercises (matiere)`);
  /* Fusion du chapitre « Développement et factorisation » dans « Calcul littéral » :
     on rebascule les exercices déjà en base sur le chapitre unique. */
  await pool.query(
    `UPDATE exercises SET chapitre = 'Calcul littéral'
      WHERE chapitre IN ('Développement et factorisation', 'Developpement et factorisation')`);
  /* Problèmes déposés en PDF : le texte va dans `content` (affiché à l'élève),
     tandis que le PDF d'origine reste consultable pour ses figures et annexes,
     et sert de source principale au correcteur. */
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS image_url   TEXT`);
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS figure_desc TEXT`);
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS pages       TEXT`);
  /* `famille` : type d'exercice, sur lequel les chapitres sont regroupés.
     Rempli à l'ajout ; pour les exercices déjà en base, il est déduit du titre. */
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS famille     TEXT`);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_exercises_famille ON exercises (famille)`);
  const { rows: aRemplir } = await pool.query(
    `SELECT count(*)::int AS n FROM exercises WHERE famille IS NULL OR btrim(famille) = ''`);
  if (aRemplir[0].n > 0) {
    await pool.query(`
      UPDATE exercises
         SET famille = btrim(regexp_replace(title, '\\s*(n[°o]\\s*)?[0-9]+\\s*$', '', 'i'))
       WHERE (famille IS NULL OR btrim(famille) = '') AND title IS NOT NULL`);
    console.log(`Familles d'exercices renseignées : ${aRemplir[0].n} ligne(s).`);
  }
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS type TEXT DEFAULT 'exercice'`);
  /* Exercices interactifs : { widget, params…, reponse } décrivant le plateau
     et la réponse attendue. La route /exercises fait un SELECT *, la colonne
     est donc servie sans autre modification. */
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS interactif JSONB`);
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
  await pool.query(`
    CREATE TABLE IF NOT EXISTS annales (
      id          SERIAL PRIMARY KEY,
      title       TEXT NOT NULL,
      exam        TEXT,                       -- Brevet, Contrôle, DS, Bac blanc…
      year        INTEGER,
      level       TEXT,
      classe      TEXT,
      subject     TEXT,
      duration    INTEGER,                    -- durée en minutes
      content     TEXT NOT NULL,              -- énoncé complet du sujet
      image_url   TEXT,                       -- image du sujet (facultatif)
      solution    TEXT,                       -- corrigé global (facultatif)
      questions   JSONB DEFAULT '[]'::jsonb,  -- [{ enonce, solution }]
      created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  /* Matière des annales : même logique que pour les exercices, une fois la
     table créée. L'existant bascule en mathématiques. */
  await pool.query(`ALTER TABLE annales ADD COLUMN IF NOT EXISTS matiere TEXT`);
  await pool.query(`UPDATE annales SET matiere = 'mathematiques' WHERE matiere IS NULL`);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_annales_matiere ON annales (matiere)`);
  /* ── SIGNALEMENTS ──
     Ce que l'élève remonte après une épreuve : un énoncé illisible, une
     correction qui lui paraît fausse, une figure absente. C'est la seule
     source d'information sur ce qui cloche réellement dans les sujets —
     un diagnostic automatique ne voit pas qu'une question est incompréhensible. */
  await pool.query(`
    CREATE TABLE IF NOT EXISTS signalements (
      id          SERIAL PRIMARY KEY,
      annale_id   INTEGER,                    -- le sujet concerné
      annale_titre TEXT,                      -- conservé même si le sujet est supprimé
      question    TEXT,                       -- libellé de la question, ou null pour le sujet entier
      type        TEXT,                       -- enonce | correction | figure | autre
      message     TEXT NOT NULL,
      user_id     INTEGER,
      pseudo      TEXT,
      statut      TEXT DEFAULT 'nouveau',     -- nouveau | traite
      created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_signalements_statut ON signalements (statut)`);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_signalements_annale ON signalements (annale_id)`);

  console.log("Base de données prête.");
  await seedAdmin();
  await seedDB();
}

/* ── BOOTSTRAP DU COMPTE ADMINISTRATEUR ──
   L'ancienne version ne créait le compte QUE si aucun admin n'existait : une
   fois le premier créé, modifier ADMIN_PASSWORD n'avait plus aucun effet, et
   l'on restait bloqué sur le mot de passe du tout premier démarrage.
   Désormais, quand ADMIN_PASSWORD est défini, le compte correspondant est
   créé OU remis à jour à chaque démarrage : la variable fait foi. */
async function seedAdmin() {
  const email = (process.env.ADMIN_EMAIL || "admin@polymates.fr").toLowerCase();
  const pwVar = process.env.ADMIN_PASSWORD;
  const pw    = pwVar || "admin123";

  const { rows: existants } = await pool.query(
    "SELECT id, email FROM users WHERE role = 'admin' ORDER BY id");

  if (pwVar) {
    /* La variable est définie : elle commande. On crée le compte, ou l'on
       réaligne son mot de passe et son rôle. */
    await pool.query(
      `INSERT INTO users (email, pseudo, password_hash, role)
       VALUES ($1, $2, $3, 'admin')
       ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash,
                                         role = 'admin'`,
      [email, "Administrateur", hashPassword(pw)]);
    console.log(`Compte admin aligné sur les variables d'environnement : ${email}`);
    if (existants.length && !existants.some(u => u.email === email))
      console.log("  ⚠ D'autres comptes admin existent : " +
        existants.map(u => u.email).join(", "));
    return;
  }

  /* Aucune variable : on ne crée le compte par défaut que s'il n'y a aucun
     administrateur, pour ne pas écraser un mot de passe choisi à la main. */
  if (existants.length) {
    console.log("Compte(s) admin existant(s) : " + existants.map(u => u.email).join(", "));
    console.log("  ⚠ ADMIN_PASSWORD n'est pas défini : impossible de réinitialiser " +
      "le mot de passe automatiquement. Définissez-le puis redémarrez.");
    return;
  }
  await pool.query(
    `INSERT INTO users (email, pseudo, password_hash, role)
     VALUES ($1, $2, $3, 'admin')
     ON CONFLICT (email) DO UPDATE SET role = 'admin'`,
    [email, "Administrateur", hashPassword(pw)]);
  console.log(`Compte admin créé : ${email}` +
    "  ⚠ mot de passe par défaut « admin123 » — définissez ADMIN_PASSWORD !");
}

/* ── DIAGNOSTIC DU COMPTE ADMINISTRATEUR ──
   Route PUBLIQUE mais volontairement avare : elle ne révèle aucun mot de
   passe ni aucun jeton. Elle sert seulement à répondre à la question
   « pourquoi ne puis-je pas me connecter ? » — quelles adresses existent,
   et si les variables d'environnement sont bien lues. */
app.get("/admin/diagnostic-connexion", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT email, pseudo, role FROM users WHERE role = 'admin' ORDER BY id");
    const attendu = (process.env.ADMIN_EMAIL || "admin@polymates.fr").toLowerCase();
    res.json({
      version_serveur: SERVEUR_VERSION,
      ADMIN_EMAIL_definie: !!process.env.ADMIN_EMAIL,
      ADMIN_PASSWORD_definie: !!process.env.ADMIN_PASSWORD,
      adresse_attendue: attendu,
      comptes_admin: rows.map(r => r.email),
      concordance: rows.some(r => r.email === attendu),
      conseil: !process.env.ADMIN_PASSWORD
        ? "ADMIN_PASSWORD n'est pas définie : définissez-la puis REDÉMARREZ le service. Le mot de passe sera alors réappliqué au démarrage."
        : (rows.some(r => r.email === attendu)
            ? "Tout est cohérent. Connectez-vous avec l'adresse ci-dessus et la valeur d'ADMIN_PASSWORD. Attention aux espaces en fin de variable."
            : "ADMIN_PASSWORD est définie mais aucun compte ne porte l'adresse attendue : redémarrez le service pour que le compte soit créé.")
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

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
  ["Développer avec la distributivité","Développe et réduis : B = 4(2x − 3) + 5x.","college","Algèbre","Moyen","B = 8x − 12 + 5x = 13x − 12.","3ème","Calcul littéral"],
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
  ["Développer une identité remarquable","Développe : (x + 5)² puis factorise : x² − 49.","lycee","Algèbre","Moyen","(x + 5)² = x² + 10x + 25 et x² − 49 = (x − 7)(x + 7).","2nde","Calcul littéral"],
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

  let prompt = `Tu es un assistant pédagogique spécialisé en mathématiques françaises.

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
  "type": "exercice ou probleme — choisis 'probleme' si l'énoncé est long, contextualisé (situation concrète) et comporte plusieurs questions/étapes de raisonnement ; sinon 'exercice'",
  "famille": "le TYPE d'exercice, c'est-à-dire la tâche demandée à l'élève, formulé en 2 à 5 mots commençant par un verbe à l'infinitif quand c'est possible (ex : 'Calculer une longueur avec Pythagore', 'Résoudre une équation du premier degré', 'Développer une expression', 'Lire un graphique', 'Construire une figure', 'Calculer une probabilité'). Ce libellé sert à regrouper les exercices qui se traitent de la MÊME MANIÈRE : deux énoncés relevant de la même technique doivent recevoir exactement la même famille. Reste général : ne mentionne ni les valeurs numériques, ni les noms de points, ni le contexte particulier de l'énoncé.",
  "suggestion_difficulte": "Facile / Moyen / Difficile"
}`;

  // On rappelle au modèle les familles déjà en base : réutiliser un libellé
  // existant vaut mieux qu'en inventer un quasi identique.
  try {
    const { rows: fam } = await pool.query(
      `SELECT famille, count(*)::int AS n FROM exercises
        WHERE famille IS NOT NULL AND btrim(famille) <> ''
        GROUP BY famille ORDER BY n DESC LIMIT 60`);
    if (fam.length) {
      prompt += `\n\nFAMILLES DÉJÀ UTILISÉES (reprends EXACTEMENT l'une d'elles si elle correspond, sinon crée-en une nouvelle) :\n`
        + fam.map(f => "- " + f.famille).join("\n");
    }
  } catch (_) { /* la suggestion reste possible sans cette liste */ }

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
/* ── FILET DE COHÉRENCE DE LA CORRECTION ──
   Un petit modèle peut annoncer « incorrect » tout en décrivant la réponse de
   l'élève comme étant la bonne. On recalcule donc nous-mêmes les deux valeurs
   qu'il a extraites : si elles sont égales, le verdict négatif est impossible.

   Évaluation volontairement minimaliste et sûre : uniquement des nombres et
   les opérateurs + - * / ( ) ^ — toute autre écriture est rejetée. */
function valeurNumerique(expr) {
  if (typeof expr !== "string") return null;
  let e = expr.trim()
    .replace(/\s+/g, "")
    .replace(/^[a-zA-Z]+=/, "")        // « x=5,75 » → « 5,75 »
    .replace(/,/g, ".")                // virgule décimale française
    .replace(/\^/g, "**");
  if (!e || e.length > 60) return null;
  if (!/^[0-9.+\-*/()]+$/.test(e.replace(/\*\*/g, ""))) return null;
  if (!/[0-9]/.test(e)) return null;
  try {
    const v = Function('"use strict";return (' + e + ')')();
    return Number.isFinite(v) ? v : null;
  } catch { return null; }
}

function memeValeur(a, b) {
  const x = valeurNumerique(a), y = valeurNumerique(b);
  if (x === null || y === null) return false;
  return Math.abs(x - y) <= 1e-9 * Math.max(1, Math.abs(x), Math.abs(y));
}

/* Renvoie true si le verdict contredit la comparaison des valeurs. */
function verdictIncoherent(p) {
  if (!p || !p.verdict) return false;
  return p.verdict !== "correct" && memeValeur(p.valeur_eleve, p.valeur_attendue);
}

/* ── DIAGNOSTIC DES FIGURES (admin) ───────────────────────────────────────
   Vérifie, sujet par sujet, si le correcteur peut réellement VOIR les pages
   du PDF. S'exécute dans le conteneur : c'est le seul endroit où l'état du
   disque et des modules natifs est observable. Lecture seule.

   IMPORTANT : par défaut, AUCUNE page n'est rasterisée. Rendre une page de
   chaque sujet d'un coup remplit la mémoire (chaque image pèse plusieurs Mo)
   et fait tomber le conteneur — d'où le test de rendu isolé, un sujet à la
   fois, via ?rendu=<id>. */
/* ── RÉPARATION DES NUMÉROS DE PAGE ──
   Une centaine de sujets ont été importés par une version antérieure qui ne
   stockait pas la page de chaque question. Or la correction se fait
   désormais sur l'image de la page : sans numéro, l'exercice n'est plus
   corrigé du tout.

   Cette route relit les PDF — qui sont sur le serveur, pas sur le poste de
   l'administrateur — et retrouve la page de chaque question en trois passes,
   de la plus sûre à la plus tolérante :
     1. le TITRE de la question, tel qu'il apparaît en tête de page ;
     2. une empreinte de son énoncé : ses mots rares ;
     3. à défaut, la page de la question précédente.
   Une question dont la page reste indéterminée est laissée en l'état : mieux
   vaut ne pas corriger que pointer la mauvaise page.

   Le traitement se fait par LOTS (?lot=25 par défaut) pour ne pas saturer la
   mémoire : on relance jusqu'à ce que « restants » tombe à zéro. */
const _BANALS_PAGE = new Set(["pour","dans","avec","cette","donc","alors","plus","moins",
  "entre","chaque","tous","toutes","leur","elle","nous","vous","est","sont","une","des",
  "les","que","qui","par","sur","aux","son","ses","exercice","points","point","suivant",
  "suivante","calculer","determiner","justifier","reponse"]);

const _normPage = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/\s+/g, " ").trim();
const _compactPage = t => _normPage(t).replace(/[^a-z0-9]/g, "");

function _empreinte(texte, n) {
  const mots = _normPage(texte).replace(/[^a-z0-9 ]/g, " ").split(/\s+/)
    .filter(m => m.length >= 5 && !_BANALS_PAGE.has(m));
  return [...new Set(mots)].slice(0, n || 14);
}

function _trouverPage(q, pagesTxt, precedente) {
  const pagesNorm = pagesTxt.map(_normPage);
  const pagesComp = pagesTxt.map(_compactPage);

  const titre = String(q.enonce || "").split(" — ")[0].trim();
  if (titre) {
    const t = _compactPage(titre);
    if (t.length >= 6) {
      const i = pagesComp.findIndex(p => p.includes(t));
      if (i >= 0) return { page: i + 1, methode: "titre" };
    }
  }
  const mots = _empreinte(q.enonce_correction || q.enonce || "", 14);
  if (mots.length >= 3) {
    let best = -1, score = 0;
    pagesNorm.forEach((p, i) => {
      const s2 = mots.filter(m => p.includes(m)).length / mots.length;
      if (s2 > score) { score = s2; best = i; }
    });
    if (best >= 0 && score >= 0.45) return { page: best + 1, methode: "empreinte" };
  }
  if (precedente) return { page: precedente, methode: "suite de la précédente" };
  return null;
}

app.post("/admin/reparer-pages", auth, requireAdmin, async (req, res) => {
  try {
    const seul = req.query.id ? Number(req.query.id) : null;
    const lot  = Math.max(1, Math.min(60, Number(req.query.lot) || 25));
    const appliquer = req.query.execute === "1";

    const { rows } = await pool.query(
      `SELECT id, title, image_url, questions FROM annales
        WHERE image_url IS NOT NULL AND btrim(image_url) <> ''
        ${seul ? "AND id = $1" : ""} ORDER BY id`, seul ? [seul] : []);

    /* On ne retient que les sujets dont au moins une question manque de page. */
    const aTraiter = [];
    for (const a of rows) {
      let qs = a.questions;
      if (typeof qs === "string") { try { qs = JSON.parse(qs); } catch { qs = null; } }
      if (!Array.isArray(qs) || !qs.length) continue;
      if (qs.some(q => !Array.isArray(q.pages) || !q.pages.length)) aTraiter.push({ a, qs });
    }
    const paquet = aTraiter.slice(0, lot);

    const detail = [];
    let repares = 0, echecs = 0, questionsTrouvees = 0;
    const methodes = {};

    for (const { a, qs } of paquet) {
      const chemin = _cheminSujet(a.image_url);
      if (!chemin || !fs.existsSync(chemin)) {
        echecs++;
        detail.push({ id: a.id, titre: a.title, resultat: "PDF absent du disque du serveur" });
        continue;
      }
      let pagesTxt;
      try { pagesTxt = await texteParPage(fs.readFileSync(chemin)); }
      catch (e) {
        echecs++;
        detail.push({ id: a.id, titre: a.title, resultat: "lecture impossible : " + e.message });
        continue;
      }

      let trouvees = 0, prec = null, sansPage = 0;
      qs.forEach(q => {
        if (Array.isArray(q.pages) && q.pages.length) { prec = q.pages[0]; return; }
        sansPage++;
        const r = _trouverPage(q, pagesTxt, prec);
        if (r) {
          q.pages = [r.page];
          q.pages_total = pagesTxt.length;
          prec = r.page;
          trouvees++;
          methodes[r.methode] = (methodes[r.methode] || 0) + 1;
        }
      });
      questionsTrouvees += trouvees;
      if (trouvees) repares++;
      detail.push({ id: a.id, titre: a.title, sans_page: sansPage, retrouvees: trouvees,
        resultat: trouvees === sansPage ? "complet"
                : trouvees ? "partiel" : "aucune page trouvée" });

      if (appliquer && trouvees)
        await pool.query("UPDATE annales SET questions = $1 WHERE id = $2",
          [JSON.stringify(qs), a.id]);
    }

    res.json({
      mode: appliquer ? "appliqué" : "simulation",
      sujets_a_reparer: aTraiter.length,
      traites: paquet.length,
      restants: Math.max(0, aTraiter.length - paquet.length),
      sujets_repares: repares,
      questions_retrouvees: questionsTrouvees,
      echecs,
      methodes,
      detail,
      memoire_mo: Math.round(process.memoryUsage().rss / 1048576)
    });
  } catch (e) { console.error(e); res.status(500).json({ error: e.message }); }
});

/* ── QUELLES QUESTIONS DEMANDENT UN TRACÉ ? ──
   Avant d'outiller la construction, il faut savoir combien de questions sont
   concernées et de quelle nature elles sont. Cette route parcourt les
   annales et les classe. */
app.get("/admin/diagnostic-constructions", auth, requireAdmin, async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, title, classe, image_url, questions FROM annales ORDER BY id");
    let questionsTotal = 0;
    const totaux = { geometrie: 0, repere: 0, diagramme: 0 };
    let avecAnnexe = 0, sujetsConcernes = 0;
    const sujets = [];

    rows.forEach(a => {
      let qs = a.questions;
      if (typeof qs === "string") { try { qs = JSON.parse(qs); } catch { qs = null; } }
      if (!Array.isArray(qs) || !qs.length) return;
      questionsTotal += qs.length;
      const r = analyserSujet(qs);
      if (!r.total) return;
      sujetsConcernes++;
      totaux.geometrie += r.parType.geometrie;
      totaux.repere    += r.parType.repere;
      totaux.diagramme += r.parType.diagramme;
      avecAnnexe += r.avecAnnexe;
      sujets.push({ id: a.id, titre: a.title, classe: a.classe,
        pdf: !!a.image_url, total: r.total, ...r.parType,
        annexe: r.avecAnnexe,
        /* les questions sans page ne pourront pas afficher leur annexe */
        sans_page: r.detail.filter(d => !d.pages.length).length,
        exemples: r.detail.slice(0, 3).map(d => d.titre) });
    });

    sujets.sort((a, b) => b.total - a.total);
    res.json({
      version_serveur: SERVEUR_VERSION,
      questions_analysees: questionsTotal,
      sujets_concernes: sujetsConcernes,
      questions_a_tracer: totaux.geometrie + totaux.repere + totaux.diagramme,
      par_type: totaux,
      renvoyant_a_une_annexe: avecAnnexe,
      sujets: sujets.slice(0, 60),
      sujets_total: sujets.length
    });
  } catch (e) { console.error(e); res.status(500).json({ error: e.message }); }
});

app.get("/admin/diagnostic-figures", auth, requireAdmin, async (req, res) => {
  try {
    const moteur    = await _loadRenderer();
    const renduPour = req.query.rendu ? Number(req.query.rendu) : null;

    const { rows } = await pool.query(
      "SELECT id, title, classe, image_url, questions FROM annales ORDER BY id");

    const sujets = [];
    for (const a of rows) {
      // Un sujet illisible ne doit jamais interrompre le diagnostic entier.
      try {
        let questions = [];
        try {
          questions = Array.isArray(a.questions) ? a.questions : JSON.parse(a.questions || "[]");
        } catch { questions = []; }

        const chemin      = _cheminSujet(a.image_url);
        const pdfPresent  = !!(chemin && fs.existsSync(chemin));
        const avecPages   = questions.filter(q => Array.isArray(q.pages) && q.pages.length).length;
        const avecFigDesc = questions.filter(q => q.figure_desc).length;

        let cause = null;
        if (!a.image_url)     cause = "aucun PDF rattaché (image_url vide)";
        else if (!chemin)     cause = "nom de PDF refusé par le garde-fou : " + a.image_url;
        else if (!pdfPresent) cause = "PDF absent du disque (fichier perdu au redéploiement ?)";
        else if (!moteur)     cause = "moteur de rendu indisponible (@napi-rs/canvas / pdfjs-dist)";
        else if (!avecPages)  cause = "aucune question ne porte de numéro de page";

        // Test de rendu réel : uniquement sur le sujet demandé.
        let rendu = null;
        if (!cause && renduPour === a.id) {
          const premiere = (questions.find(q => Array.isArray(q.pages) && q.pages.length) || {}).pages;
          const n = premiere ? Number(premiere[0]) : 1;
          try {
            const img = await renderPageImage(a.image_url, n);
            rendu = img ? { ok: true, page: n, ko: Math.round(img.length / 1024) }
                        : { ok: false, page: n };
            if (!img) cause = "le rendu de la page " + n + " a échoué";
          } catch (e) {
            rendu = { ok: false, page: n };
            cause = "erreur au rendu de la page " + n + " : " + e.message;
          }
        }

        sujets.push({
          id: a.id, titre: a.title, classe: a.classe, image_url: a.image_url,
          pdf_present: pdfPresent, questions: questions.length,
          questions_avec_pages: avecPages, questions_avec_figure_desc: avecFigDesc,
          rendu, ok: !cause, cause,
        });
      } catch (e) {
        sujets.push({ id: a.id, titre: a.title || "?", classe: a.classe, image_url: a.image_url,
                      pdf_present: false, questions: 0, questions_avec_pages: 0,
                      questions_avec_figure_desc: 0, rendu: null, ok: false,
                      cause: "sujet illisible : " + e.message });
      }
    }

    let pdfSurDisque = 0;
    try { pdfSurDisque = fs.readdirSync(path.join(__dirname, "public", "annales-pdf")).length; }
    catch { pdfSurDisque = 0; }

    res.json({
      moteur_rendu: !!moteur,
      dossier_pdf: path.join(__dirname, "public", "annales-pdf"),
      pdf_sur_disque: pdfSurDisque,
      memoire_mo: Math.round(process.memoryUsage().rss / 1048576),
      sujets_ok: sujets.filter(s => s.ok).length,
      sujets_total: sujets.length,
      sujets,
    });
  } catch (err) {
    console.error("Erreur diagnostic figures:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/exercises/correct", auth, async (req, res) => {
  const { exercise, answer } = req.body;
  const key = process.env.MISTRAL_KEY;
  if (!key) return res.status(500).json({ error: "Clé MISTRAL_KEY manquante." });

  /* Le barème vient du sujet lui-même : « Exercice 3 (5 points) ». À défaut,
     on note sur 4, valeur courante d'une question de brevet — et on le dit,
     pour que le correcteur ne s'imagine pas une précision qu'il n'a pas. */
  const baremeSujet = Number(exercise.bareme) > 0 ? Number(exercise.bareme) : null;
  const bareme = baremeSujet || 4;
  const baremeCtx = baremeSujet
    ? `\nBARÈME : cette question vaut ${baremeSujet} points, d'après le sujet officiel. Note sur ${baremeSujet}.`
    : `\nBARÈME : le sujet n'indique pas de barème pour cette question. Note sur 4.`;

  const solutionCtx = exercise.solution ? `\nSOLUTION OFFICIELLE : ${exercise.solution}` : "";

  /* ── Source principale : l'IMAGE de la page du sujet ──
     On rasterise la ou les pages où figure l'exercice (champ `pages`, posé par
     seed-pages.js). Si le rendu échoue, on retombe sur figure_desc. */
  const images = [];
  let raisonSansFigure = null;
  const pagesVoulues = Array.isArray(exercise.pages) ? exercise.pages.slice(0, 2) : [];

  if (!exercise.annale_url) {
    raisonSansFigure = "cet exercice n'est rattaché à aucun PDF (champ annale_url vide)";
  } else if (!pagesVoulues.length) {
    raisonSansFigure = "aucun numéro de page n'est enregistré pour cette question (champ pages vide)";
  } else if (!_cheminSujet(exercise.annale_url)) {
    raisonSansFigure = "chemin de PDF refusé : " + exercise.annale_url;
  } else if (!fs.existsSync(_cheminSujet(exercise.annale_url))) {
    raisonSansFigure = "le PDF est absent du disque (" + exercise.annale_url +
      ") — sur un hébergement éphémère, les fichiers déposés disparaissent à chaque redéploiement";
  } else if (!(await _loadRenderer())) {
    raisonSansFigure = "moteur de rendu PDF indisponible (@napi-rs/canvas ou pdfjs-dist manquant)";
  } else {
    for (const n of pagesVoulues) {
      const img = await renderPageImage(exercise.annale_url, Number(n));
      if (img) images.push(img);
    }
    if (!images.length) raisonSansFigure = "le rendu des pages " + pagesVoulues.join(", ") + " a échoué";
  }
  // Garde-fou : au-delà de ~5 Mo cumulés, on renonce aux images plutôt que de
  // risquer un rejet de l'API ; la correction repart alors en mode texte.
  const poids = images.reduce((n, u) => n + u.length, 0);
  if (poids > 5 * 1024 * 1024) {
    console.warn("[pages] images trop lourdes (" + Math.round(poids / 1024) +
      " Ko) — l'annale ne sera pas corrigée plutôt que corrigée à l'aveugle.");
    images.length = 0;
    raisonSansFigure = "images des pages trop lourdes (" + Math.round(poids / 1024) + " Ko)";
  }
  const avecImage = images.length > 0;
  if (avecImage) console.log("[pages] " + images.length + " page(s) jointe(s), " + Math.round(poids / 1024) + " Ko");
  else console.warn("[correction] « " + (exercise.title || "?") +
                    " » corrigé SANS la figure — raison : " + raisonSansFigure);

  /* Cette route sert DEUX sortes d'exercices, qu'il faut traiter autrement :
       · les ANNALES, rattachées à un PDF (champ annale_url) : leur énoncé
         n'existe qu'en image, et l'extraction textuelle est trompeuse ;
       · les exercices GÉNÉRÉS, dont l'énoncé est complet dans `content` et
         qui n'ont aucun PDF — ceux-là se corrigent très bien en texte. */
  const estAnnale = !!exercise.annale_url;

  /* ── RÈGLE ABSOLUE POUR LES ANNALES ──
     Sans l'image de la page, le correcteur ne dispose que d'une extraction
     textuelle et d'une description reconstituée : il complète alors les
     manques par des configurations inventées. On préfère ne pas corriger et
     le dire franchement à l'élève. */
  /* Un énoncé qui RENVOIE au PDF sans qu'aucune image ne soit disponible est
     tout aussi incorrigible qu'une annale sans page : le correcteur n'aurait
     qu'une phrase creuse. On refuse dans les deux cas. */
  const renvoieAuPdf = /reporte-toi au sujet|voir le sujet|ci-dessus/i.test(exercise.content || "");

  if ((estAnnale || renvoieAuPdf) && !avecImage) {
    console.warn("[correction] « " + (exercise.title || "?") +
      " » NON corrigé faute d'image — raison : " + raisonSansFigure);
    return res.json({
      verdict: "partial",
      analyse: "Je ne peux pas corriger cet exercice pour l'instant : la page du sujet " +
        "n'a pas pu être chargée, et je refuse de juger ton travail sans avoir " +
        "exactement la même chose que toi sous les yeux.",
      demarche: "Ta réponse a bien été enregistrée. Reprends l'exercice plus tard, " +
        "ou compare-la à la correction officielle si tu l'as.",
      solution: exercise.solution || "",
      score: null,
      non_corrige: true,
      raison_technique: raisonSansFigure
    });
  }

  /* Aucune description de figure n'est transmise : elles étaient reconstituées
     à partir du texte, donc muettes sur tout ce qui n'est codé que sur le
     dessin — et c'est précisément ce qui poussait le correcteur à inventer. */
  const figureCtx = "";   // aucune description reconstituée, jamais

  const sourceCtx = !avecImage
    ? ""                                   // exercice généré : l'énoncé suffit
    : `\n\nSOURCE UNIQUE : ${images.length === 1 ? "l'image jointe est la page" : "les images jointes sont les pages"} du sujet officiel où se trouve cet exercice. C'est exactement ce que l'élève a sous les yeux, et c'est ta SEULE source pour l'énoncé et la figure.
Lis-y l'énoncé exact, les figures, les codages (angles droits, égalités de longueurs), les valeurs portées sur les dessins et les tableaux.
INTERDICTION : aucun texte d'énoncé ne t'est fourni à côté. Ne suppose donc RIEN qui ne se lise sur l'image — pas de point supplémentaire, pas de parallélisme deviné, pas de mesure reconstituée. Si un élément nécessaire est illisible ou hors cadre, dis-le franchement à l'élève et mets le verdict à "partial" plutôt que de deviner.
La page peut contenir d'autres exercices : ne corrige que celui indiqué par le titre.`;

  const prompt = `Tu es un professeur de mathématiques qui corrige la copie d'un élève, comme dans la marge d'un cahier. Tu es précis, bienveillant et tu tutoies l'élève.

EXERCICE : ${exercise.title}${sourceCtx}

${avecImage
  ? "L'énoncé est à lire SUR L'IMAGE : aucune transcription ne t'en est donnée."
  : `ÉNONCÉ : ${exercise.content}`}${figureCtx}${solutionCtx}

CE QUE L'ÉLÈVE A ÉCRIT (son brouillon, mot pour mot) :
${answer}

Ta mission : réagir DIRECTEMENT à ce que l'élève a écrit, pas à une réponse idéale.
1. Reconstitue le raisonnement de l'élève à partir de ce qu'il a écrit.
2. Si c'est une erreur : trouve PRÉCISÉMENT à quelle étape il s'est trompé et SURTOUT pourquoi (règle mal appliquée, signe oublié, confusion entre deux notions, erreur de calcul, propriété inventée…). Explique l'origine de l'erreur AVANT de donner quoi que ce soit d'autre.
3. Si c'est juste : confirme et dis ce qui rend le raisonnement correct.
3 bis. En cas de doute entre « l'élève s'est trompé » et « l'énoncé dont je dispose est incomplet », choisis TOUJOURS la seconde hypothèse et signale-le. Mieux vaut ne pas trancher que sanctionner à tort.
4. Ensuite seulement, donne la bonne démarche puis la solution finale.

${baremeCtx}

NOTATION — tu attribues une note, pas seulement un verdict.
· La note va de 0 au barème indiqué, par demi-points.
· Un résultat juste SANS justification ne vaut pas tous les points : au brevet, la démarche compte. Compte environ deux tiers des points pour le raisonnement et le résultat, un tiers pour la rédaction (étapes visibles, théorème cité quand il est nécessaire, unités, phrase de réponse).
· Un résultat faux mais une démarche correcte mérite une part substantielle des points : ne mets pas 0 pour une erreur de calcul isolée.
· Une réponse vide, hors sujet ou recopiée de l'énoncé vaut 0.
· Sois exigeant mais juste, comme un correcteur de brevet : la moyenne d'une copie honnête doit rester atteignable.
· La note doit être COHÉRENTE avec le verdict : "correct" ne descend pas sous 80 % du barème, "incorrect" ne dépasse pas 35 %.

CAS DU QCM : si l'élève répond par une lettre ou un numéro d'option (« réponse D », « c'est la B », « 3 »), retrouve dans l'énoncé le CONTENU de cette option et juge ce contenu, rien d'autre. Un QCM ne demande aucune rédaction : ne reproche JAMAIS à l'élève de ne pas avoir détaillé sa démarche, et ne le compte pas comme une erreur. Si tu n'arrives pas à retrouver les options dans l'énoncé, dis-le franchement et mets le verdict à "partial" plutôt que de deviner.

FORMES ÉQUIVALENTES : un même nombre écrit autrement reste juste. (20 + 3)/4, 23/4, 5,75 et 5.75 sont la MÊME réponse et valent toutes "correct". Idem pour une fraction non simplifiée, un calcul non effectué, ou un ordre de termes différent. Ne sanctionne jamais la forme quand la valeur est bonne.

COHÉRENCE OBLIGATOIRE : ton verdict doit découler de ta propre analyse. S'il est "incorrect" ou "partial", ton analyse doit nommer une erreur réelle et précise. Si, en rédigeant, tu constates que la réponse de l'élève coïncide avec la solution attendue, le verdict est "correct" — il est interdit de décrire la méthode de l'élève comme étant la bonne tout en la déclarant fausse.

Utilise des maths lisibles en texte simple (ex : x^2, sqrt(2), 3/4, x = -b/2a). Pas de LaTeX, pas de markdown.

Réponds UNIQUEMENT en JSON valide, sans markdown. Les champs sont dans l'ordre où tu dois RÉFLÉCHIR : remplis-les un par un, dans cet ordre exact, et ne conclus qu'à la fin.
{
  "lecture_reponse": "Ce que l'élève a réellement répondu, reformulé. Pour un QCM : la lettre choisie ET le contenu de cette option, recopié depuis l'énoncé.",
  "valeur_eleve": "La valeur finale donnée par l'élève, sous forme d'expression arithmétique brute, par exemple (20+3)/4 ou 5,75. Chaîne vide si sa réponse n'est pas numérique.",
  "valeur_attendue": "La valeur finale attendue, même format. Chaîne vide si non numérique.",
  "comparaison": "Calcule les deux valeurs ci-dessus et dis explicitement si elles sont égales ou non.",
  "analyse": "Comment l'élève est arrivé à sa réponse. Si erreur, l'étape exacte qui cloche et la raison profonde de l'erreur. 2 à 4 phrases, adressées à l'élève.",
  "demarche": "La bonne démarche, étape par étape, claire et sobre. Sépare les étapes par des retours à la ligne.",
  "solution": "Le résultat final attendu, en une ou deux lignes.",
  "redaction": "Ce que vaut la RÉDACTION de l'élève : justifications, étapes apparentes, théorème cité quand il le faut, unités, phrase de conclusion. Dis ce qui manque, en une ou deux phrases.",
  "note": nombre — la note attribuée, entre 0 et le barème indiqué. Utilise les demi-points. Voir les règles de notation ci-dessus.,
  "verdict": "correct" | "partial" | "incorrect"
}`;

  /* Message multimodal : texte + image(s) de la page. */
  const userContent = avecImage
    ? [{ type: "text", text: prompt }].concat(
        images.map(u => ({ type: "image_url", image_url: u })))
    : prompt;

  /* Un seul appel au correcteur, renvoie le JSON analysé (ou null). */
  async function appelCorrecteur(contenu) {
    const mistralRes = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`
      },
      body: JSON.stringify({
        model: process.env.MISTRAL_MODEL_CORRECTION || "mistral-small-latest",
        messages: [{ role: "user", content: contenu }],
        response_format: { type: "json_object" },   // garantit un JSON valide
        temperature: 0.1,
        max_tokens: 1400                            // marge : une réponse tronquée casse le JSON
      })
    });
    if (!mistralRes.ok) {
      const err = await mistralRes.text();
      throw new Error("Erreur Mistral : " + err);
    }
    const data = await mistralRes.json();
    const brut = (data.choices && data.choices[0] && data.choices[0].message.content) || "";
    const parsed = parseJsonTolerant(brut);
    if (!parsed) console.error("Réponse non-JSON du modèle :", brut.slice(0, 400));
    return parsed;
  }

  try {
    let parsed = await appelCorrecteur(userContent);
    if (!parsed) {
      return res.status(502).json({ error: "Le correcteur a renvoyé une réponse illisible. Réessaie." });
    }

    /* Le verdict contredit la comparaison des valeurs faite par le modèle
       lui-même : on lui redonne une chance, en le mettant face à sa
       contradiction plutôt qu'en corrigeant le verdict en silence. */
    if (verdictIncoherent(parsed)) {
      console.warn("[correction] verdict incohérent (" + parsed.verdict + ") : " +
        parsed.valeur_eleve + " = " + parsed.valeur_attendue + " — relance.");
      const rappel = prompt +
        `\n\nATTENTION — ta première réponse était contradictoire : tu as annoncé le verdict "${parsed.verdict}" ` +
        `alors que la valeur de l'élève (${parsed.valeur_eleve}) et la valeur attendue (${parsed.valeur_attendue}) ` +
        `sont numériquement ÉGALES. Une réponse juste écrite sous une autre forme reste juste. ` +
        `Reprends la correction depuis le début et rends un verdict cohérent avec ta propre comparaison.`;
      const relance = await appelCorrecteur(
        avecImage ? [{ type: "text", text: rappel }].concat(images.map(u => ({ type: "image_url", image_url: u })))
                  : rappel);
      if (relance) parsed = relance;
    }

    /* Si la contradiction persiste, on tranche : l'élève ne peut pas être
       pénalisé pour une réponse numériquement exacte. */
    if (verdictIncoherent(parsed)) {
      console.warn("[correction] incohérence persistante — verdict forcé à correct.");
      parsed.verdict = "correct";
      parsed.analyse = "Ta réponse est exacte : " + (parsed.valeur_eleve || "").trim() +
        " correspond bien au résultat attendu. La démarche ci-dessous te permet de vérifier chaque étape.";
    }

    /* On dit honnêtement à l'élève si la correction a été faite sans la figure. */
    parsed.figure_vue = avecImage;
    if (!avecImage) parsed.figure_diagnostic = raisonSansFigure;

    /* La note est bornée au barème : un correcteur généreux ne doit pas
       inventer des points qui n'existent pas, ni en retirer sous zéro.
       On arrondit au demi-point, comme au brevet. */
    const brute = Number(parsed.note);
    parsed.note = Number.isFinite(brute)
      ? Math.max(0, Math.min(bareme, Math.round(brute * 2) / 2))
      : null;
    parsed.bareme = bareme;
    parsed.bareme_du_sujet = !!baremeSujet;

    /* Cohérence note / verdict : un « correct » noté 1/5 laisserait l'élève
       perplexe. On aligne le verdict sur la note, qui est plus fine. */
    if (parsed.note !== null) {
      const part = parsed.note / bareme;
      parsed.verdict = part >= 0.8 ? "correct" : part >= 0.35 ? "partial" : "incorrect";
    }

    res.json(parsed);
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
/* ── RÉPARTITION DU CONTENU PAR MATIÈRE (admin) ───────────────────────────
   Dit la vérité de la base : combien d'exercices et d'annales portent quelle
   matière. Permet de distinguer un problème de données d'un fichier périmé
   servi par le cache du navigateur. */
app.get("/admin/diagnostic-matieres", auth, requireAdmin, async (req, res) => {
  try {
    const compter = async (table) => {
      const { rows } = await pool.query(
        `SELECT COALESCE(matiere, '(vide)') AS matiere, COUNT(*)::int AS n
           FROM ${table} GROUP BY 1 ORDER BY 2 DESC`);
      return rows;
    };
    const colonne = async (table, nom) => {
      const { rows } = await pool.query(
        `SELECT 1 FROM information_schema.columns
          WHERE table_name = $1 AND column_name = $2 LIMIT 1`, [table, nom || "matiere"]);
      return rows.length > 0;
    };
    /* Les fichiers du front sont-ils réellement déployés, et à jour ?
       Un serveur à jour avec un public/ ancien donne exactement le symptôme
       « je vois encore les maths partout ». */
    const pub = path.join(__dirname, "public");
    const attendus = [
      { nom: "matiere.js",                 doit_contenir: "MB_MAT" },
      { nom: "contenu-physique-chimie.js", doit_contenir: "physique-chimie" },
      { nom: "script.js",                  doit_contenir: "matiereCourante" },
      { nom: "app.html",                   doit_contenir: "matiere.js" },
      { nom: "matieres.html",              doit_contenir: "MB_MAT.liste" },
      { nom: "ui.js",                      doit_contenir: "mb-subject" },
      { nom: "axe.js",                     doit_contenir: "MB_AXE" },
      { nom: "tableau.js",                 doit_contenir: "MB_TABLEAU" },
    ];
    const fichiers = attendus.map(f => {
      try {
        const chemin = path.join(pub, f.nom);
        const st = fs.statSync(chemin);
        const contenuFichier = fs.readFileSync(chemin, "utf8");
        return {
          nom: f.nom, present: true,
          a_jour: contenuFichier.includes(f.doit_contenir),
          ko: Math.round(st.size / 1024),
          modifie: st.mtime.toISOString().slice(0, 16).replace("T", " "),
        };
      } catch {
        return { nom: f.nom, present: false, a_jour: false };
      }
    });

    /* Combien d'exercices portent un plateau interactif, et lequel ?
       C'est ce qui distingue « le widget n'est pas déployé » de
       « les exercices n'ont pas été enregistrés avec leur plateau ». */
    let interactifs = [];
    if (await colonne("exercises", "interactif")) {
      /* Le regroupement se fait en JavaScript plutôt qu'en SQL : un GROUP BY
         portant sur une extraction JSON est correct en PostgreSQL, mais rien
         ne garantit qu'il le reste selon la version ou le type réel de la
         colonne. La requête ci-dessous n'utilise que des constructions
         élémentaires, donc elle ne peut pas échouer. */
      const { rows: ia } = await pool.query(
        `SELECT chapitre, interactif ->> 'widget' AS widget
           FROM exercises
          WHERE interactif IS NOT NULL AND interactif::text NOT IN ('null', '', '{}')`);
      const compte = new Map();
      ia.forEach(r => {
        const k = (r.chapitre || "—") + "\u0000" + (r.widget || "(illisible)");
        compte.set(k, (compte.get(k) || 0) + 1);
      });
      interactifs = [...compte.entries()]
        .map(([k, n]) => ({ chapitre: k.split("\u0000")[0], widget: k.split("\u0000")[1], n }))
        .sort((a, b) => b.n - a.n);
    }

    res.json({
      version_serveur: SERVEUR_VERSION,
      colonne_matiere: { exercises: await colonne("exercises"), annales: await colonne("annales") },
      colonne_interactif: await colonne("exercises", "interactif"),
      interactifs,
      fichiers,
      exercices: await compter("exercises"),
      annales:   await compter("annales"),
    });
  } catch (err) {
    console.error("Erreur diagnostic matières:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/exercises", auth, async (req, res) => {
  const { title, content, level, subject, difficulty, solution, classe, chapitre, type,
          image_url, figure_desc, matiere } = req.body;
  // Type d'exercice : fourni, sinon déduit du titre (numéro final retiré).
  const famille = (req.body.famille && String(req.body.famille).trim())
    || String(title || "").replace(/\s*(n[°o]\s*)?\d+\s*$/i, "").trim() || null;
  if (!title || !content || !level) {
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }
  try {
    // image_url / figure_desc : renseignés pour un problème déposé en PDF, afin que
    // les figures et annexes restent consultables et servent à la correction.
    const result = await pool.query(
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution, classe, chapitre, type, image_url, figure_desc, famille, matiere)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id`,
      [title, content, level, subject || null, difficulty || null, solution || null, classe || null, chapitre || null, (type === "probleme" ? "probleme" : "exercice"), image_url || null, figure_desc || null, famille, matiere || "mathematiques"]
    );
    res.json({ id: result.rows[0].id, message: "Exercice ajouté." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ── RÉCUPÉRER LES EXERCICES ── */
app.get("/exercises", auth, async (req, res) => {
  const { level, subject, difficulty, type, chapitre, matiere } = req.query;
  let query  = "SELECT * FROM exercises WHERE 1=1";
  let params = [];
  let i      = 1;
  /* Cloisonnement par matière : sans paramètre, on sert les mathématiques,
     ce qui garde le comportement d'origine pour tout appel existant. */
  query += ` AND COALESCE(matiere, 'mathematiques') = $${i++}`;
  params.push(matiere || "mathematiques");
  if (type)       { query += ` AND COALESCE(type, 'exercice') = $${i++}`; params.push(type); }
  if (level)      { query += ` AND level = $${i++}`;      params.push(level); }
  if (subject)    { query += ` AND subject = $${i++}`;    params.push(subject); }
  if (difficulty) { query += ` AND difficulty = $${i++}`; params.push(difficulty); }
  if (chapitre)   { query += ` AND chapitre = $${i++}`;   params.push(chapitre); }
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
  console.log(`Serveur lancé sur http://localhost:${PORT} — version ${SERVEUR_VERSION}`);
  /* Diagnostic de démarrage : sans ce moteur de rendu, le correcteur ne voit
     JAMAIS les figures des sujets et travaille à l'aveugle sur le texte. */
  _loadRenderer().then(mod => {
    console.log(mod
      ? "[pages] moteur de rendu PDF disponible : les figures seront transmises au correcteur."
      : "[pages] ⚠ MOTEUR DE RENDU INDISPONIBLE — le correcteur ne verra AUCUNE figure. "
        + "Installez @napi-rs/canvas et pdfjs-dist (npm i @napi-rs/canvas pdfjs-dist).");
  });
});
