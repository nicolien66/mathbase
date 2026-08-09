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
   la correction se poursuit alors en mode texte avec figure_desc en repli. */
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

/* ═══════════ ROUTES ANNALES ═══════════ */
app.get("/annales", auth, async (req, res) => {
  const { level, exam, year } = req.query;
  let query = "SELECT * FROM annales WHERE 1=1";
  const params = [];
  let i = 1;
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
  const { title, exam, year, level, classe, subject, duration, content, image_url, solution, questions } = req.body || {};
  if (!title || !content) return res.status(400).json({ error: "Titre et énoncé requis." });
  try {
    const result = await pool.query(
      `INSERT INTO annales (title, exam, year, level, classe, subject, duration, content, image_url, solution, questions)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING id`,
      [title, exam || null, year ? Number(year) : null, level || null, classe || null, subject || null,
       duration ? Number(duration) : null, content, image_url || null, solution || null,
       JSON.stringify(Array.isArray(questions) ? questions : [])]
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
      `INSERT INTO annales (title, exam, year, level, classe, subject, duration, image_url, questions)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id, title`,
      [title || fichier.replace(/\.pdf$/i, "").replace(/_/g, " "),
       exam || "Brevet", year ? Number(year) : null, "college",
       classe || "3ème", "Mathématiques", duration ? Number(duration) : null,
       "annales-pdf/" + fichier, JSON.stringify(analyse.questions)]);

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

app.delete("/annales/:id", auth, requireAdmin, async (req, res) => {
  try {
    await pool.query("DELETE FROM annales WHERE id = $1", [Number(req.params.id)]);
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
  console.log("Base de données prête.");
  await seedAdmin();
  await seedDB();
}

/* ── BOOTSTRAP DU COMPTE ADMINISTRATEUR ── */
async function seedAdmin() {
  const email = (process.env.ADMIN_EMAIL || "admin@polymates.fr").toLowerCase();
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
    console.warn("[pages] images trop lourdes (" + Math.round(poids / 1024) + " Ko) — mode texte.");
    images.length = 0;
    raisonSansFigure = "images des pages trop lourdes (" + Math.round(poids / 1024) + " Ko)";
  }
  const avecImage = images.length > 0;
  if (avecImage) console.log("[pages] " + images.length + " page(s) jointe(s), " + Math.round(poids / 1024) + " Ko");
  else console.warn("[correction] « " + (exercise.title || "?") +
                    " » corrigé SANS la figure — raison : " + raisonSansFigure);

  const figureCtx = avecImage
    ? (exercise.figure_desc
        ? `\nNOTE DE SECOURS (description textuelle approximative, reconstituée automatiquement — n'y recours QUE si l'image est illisible, et ne la fais jamais primer sur ce que tu vois) : ${exercise.figure_desc}`
        : "")
    : (exercise.figure_desc
        ? `\nDESCRIPTION PARTIELLE DE LA FIGURE (reconstituée automatiquement à partir du TEXTE de l'énoncé, jamais du dessin) : ${exercise.figure_desc}
AVERTISSEMENT : incomplète par construction. Ce qui n'est codé que sur le dessin (angle droit marqué, côtés de même longueur, position des points, mesure portée sur la figure) n'y figure PAS. L'élève, lui, a la vraie figure sous les yeux. Ne le contredis jamais sur une donnée que cette description ne permet pas de vérifier : dis-lui que tu ne peux pas la vérifier, et corrige son raisonnement plutôt que ses données.`
        : "");

  const sourceCtx = avecImage
    ? `\n\nSOURCE PRINCIPALE : ${images.length === 1 ? "l'image jointe est la page" : "les images jointes sont les pages"} du sujet officiel où se trouve cet exercice. C'est exactement ce que l'élève a sous les yeux. Lis-y l'énoncé exact, les figures, les codages (angles droits, égalités de longueurs), les valeurs portées sur les dessins et les tableaux. FAIS-EN TA RÉFÉRENCE : en cas de désaccord entre l'image et le texte reproduit ci-dessous, l'IMAGE a raison — le texte provient d'une extraction automatique imparfaite. La page peut contenir d'autres exercices : ne corrige que celui indiqué par le titre.`
    : `\n\nAttention : tu ne disposes PAS de l'image du sujet. Tu travailles sur une extraction textuelle imparfaite.
RÈGLE ABSOLUE EN L'ABSENCE DE FIGURE : n'invente JAMAIS de configuration géométrique. N'utilise que les noms de points, les longueurs et les parallélismes littéralement présents dans l'énoncé ou dans la solution officielle ci-dessus. Il t'est interdit d'introduire des points (D, E, M…) qui n'y figurent pas, ou de supposer quelle droite est parallèle à quelle autre. Si le rapport à écrire dépend d'un élément que tu ne peux pas lire, dis-le franchement à l'élève, appuie-toi sur la SOLUTION OFFICIELLE pour la démarche, et mets le verdict à "partial" au lieu de deviner.`;

  const prompt = `Tu es un professeur de mathématiques qui corrige la copie d'un élève, comme dans la marge d'un cahier. Tu es précis, bienveillant et tu tutoies l'élève.

EXERCICE : ${exercise.title}${sourceCtx}

ÉNONCÉ (extraction automatique du PDF, à titre indicatif) : ${exercise.content}${figureCtx}${solutionCtx}

REMARQUE SUR L'ÉNONCÉ : il provient d'une extraction automatique du sujet PDF. La mise en forme mathématique peut être dégradée (fractions, exposants, racines) et des fragments d'en-tête de page ont pu s'y glisser. S'il te paraît tronqué ou ambigu, appuie-toi sur l'image si tu en as une ; sinon dis-le explicitement et ne pénalise pas l'élève pour une ambiguïté venant du sujet.

CE QUE L'ÉLÈVE A ÉCRIT (son brouillon, mot pour mot) :
${answer}

Ta mission : réagir DIRECTEMENT à ce que l'élève a écrit, pas à une réponse idéale.
1. Reconstitue le raisonnement de l'élève à partir de ce qu'il a écrit.
2. Si c'est une erreur : trouve PRÉCISÉMENT à quelle étape il s'est trompé et SURTOUT pourquoi (règle mal appliquée, signe oublié, confusion entre deux notions, erreur de calcul, propriété inventée…). Explique l'origine de l'erreur AVANT de donner quoi que ce soit d'autre.
3. Si c'est juste : confirme et dis ce qui rend le raisonnement correct.
3 bis. En cas de doute entre « l'élève s'est trompé » et « l'énoncé dont je dispose est incomplet », choisis TOUJOURS la seconde hypothèse et signale-le. Mieux vaut ne pas trancher que sanctionner à tort.
4. Ensuite seulement, donne la bonne démarche puis la solution finale.

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
app.post("/exercises", auth, async (req, res) => {
  const { title, content, level, subject, difficulty, solution, classe, chapitre, type,
          image_url, figure_desc } = req.body;
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
      `INSERT INTO exercises (title, content, level, subject, difficulty, solution, classe, chapitre, type, image_url, figure_desc, famille)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id`,
      [title, content, level, subject || null, difficulty || null, solution || null, classe || null, chapitre || null, (type === "probleme" ? "probleme" : "exercice"), image_url || null, figure_desc || null, famille]
    );
    res.json({ id: result.rows[0].id, message: "Exercice ajouté." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ── RÉCUPÉRER LES EXERCICES ── */
app.get("/exercises", auth, async (req, res) => {
  const { level, subject, difficulty, type, chapitre } = req.query;
  let query  = "SELECT * FROM exercises WHERE 1=1";
  let params = [];
  let i      = 1;
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
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
  /* Diagnostic de démarrage : sans ce moteur de rendu, le correcteur ne voit
     JAMAIS les figures des sujets et travaille à l'aveugle sur le texte. */
  _loadRenderer().then(mod => {
    console.log(mod
      ? "[pages] moteur de rendu PDF disponible : les figures seront transmises au correcteur."
      : "[pages] ⚠ MOTEUR DE RENDU INDISPONIBLE — le correcteur ne verra AUCUNE figure. "
        + "Installez @napi-rs/canvas et pdfjs-dist (npm i @napi-rs/canvas pdfjs-dist).");
  });
});
