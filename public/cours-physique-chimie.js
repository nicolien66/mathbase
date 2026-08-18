/* ════════════════════════════════════════════════════════════════
   POLYMATES — COURS ANIMÉS : PHYSIQUE-CHIMIE, THÈME « MATIÈRE »

   Ce fichier fournit à cours.html une banque de leçons animées pour les
   sept chapitres du thème « Matière » du cycle 4 :

     1. États et changements d'état
     2. Masse, volume et masse volumique
     3. Mélanges et solutions
     4. Transformations chimiques
     5. Atomes, molécules et ions
     6. Combustions
     7. Acides, bases et pH

   ── Comment cela s'assemble ────────────────────────────────────
   cours.html définit le moteur (canvas « tableau noir », étapes, légendes)
   et ses utilitaires de tracé : chalkLine, chalkText, chalkArrow, drawBoard…
   Ce fichier n'en dépend qu'au MOMENT DU DESSIN, jamais au chargement :
   l'ordre des balises <script> n'a donc aucune importance.

   Il s'enregistre dans window.COURS_PAR_MATIERE["physique-chimie"] sous la
   forme attendue par la page :

     { branches:[{id,label,color}…],
       lecons:[{ id, chapter, branch, tag, title, desc, duration, level,
                 steps:[{ caption, label, draw(ctx,W,H,p) }] }…] }

   ── Une leçon, comment ça marche ───────────────────────────────
   Une leçon est une suite d'étapes. Chaque étape reçoit une progression
   p qui va de 0 à 1 en ~4 s : tout ce qui est tracé se dévoile en
   fonction de p. La convention retenue ici est `et(début, durée, p)`,
   qui renvoie la progression locale d'un élément — de quoi orchestrer
   un schéma sans jamais compter en millisecondes.
   ════════════════════════════════════════════════════════════════ */
(function () {
"use strict";

/* ── Palette craie (identique à celle du tableau de cours.html) ── */
const C = {
  blanc : 'rgba(245,242,232,0.93)',
  doux  : 'rgba(240,236,224,0.60)',
  or    : 'rgba(200,185,122,0.90)',
  jaune : 'rgba(230,210,120,0.92)',
  bleu  : 'rgba(130,200,230,0.90)',
  rouge : 'rgba(230,130,110,0.90)',
  vert  : 'rgba(130,210,160,0.90)',
  violet: 'rgba(185,150,225,0.90)',
};
const SERIF = 'Playfair Display, Georgia, serif';
const SANS  = 'DM Sans, sans-serif';
const MONO  = 'DM Mono, monospace';

/* ── Ponts vers les utilitaires de cours.html ──────────────────────────
   On les résout à chaque appel plutôt qu'une fois pour toutes : si ce
   fichier est chargé avant le moteur, rien ne casse. Le repli garde la
   page lisible même isolée du reste du site. */
const G = n => (typeof window[n] === 'function' ? window[n] : null);

function board(ctx, W, H) {
  const f = G('drawBoard');
  if (f) return f(ctx, W, H);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#182619'; ctx.fillRect(0, 0, W, H);
}
function txt(ctx, t, x, y, p, c, s, f, a) {
  const fn = G('chalkText');
  if (fn) fn(ctx, t, x, y, p, c || C.blanc, s || 18, f || SANS, a || 'center');
}
function seg(ctx, x1, y1, x2, y2, p, c, w) {
  const fn = G('chalkLine');
  if (fn) fn(ctx, x1, y1, x2, y2, p, c || C.blanc, w || 2);
}
function fleche(ctx, x1, y1, x2, y2, p, c, w) {
  const fn = G('chalkArrow');
  if (fn) fn(ctx, x1, y1, x2, y2, p, c || C.jaune, w || 2);
}
function cercle(ctx, cx, cy, r, p, c, w, depart) {
  const fn = G('chalkArc');
  if (fn) fn(ctx, cx, cy, r, depart === undefined ? -Math.PI / 2 : depart, p, c || C.blanc, w || 2);
}
function aplat(ctx, pts, p, c) {
  const fn = G('chalkFill');
  if (fn) fn(ctx, pts, p, c || 'rgba(130,210,160,0.20)');
}

/* ── Petites aides de temps et de géométrie ── */
const cl  = v => Math.max(0, Math.min(1, v));
/* Progression locale d'un élément : apparaît à `debut`, se déploie sur `duree`. */
const et  = (debut, duree, p) => cl((p - debut) / (duree || 0.25));
const lp  = (a, b, t) => a + (b - a) * t;
const ease = t => 1 - Math.pow(1 - t, 3);

/* Générateur pseudo-aléatoire à graine : les particules doivent occuper la
   MÊME place d'une image à l'autre, sinon le schéma grésille. */
function graine(s) {
  return function () {
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ── Formes de base ─────────────────────────────────────────────────── */

/* Disque plein façon craie (particule, atome, pastille). */
function bille(ctx, x, y, r, p, c, contour) {
  const a = ease(cl(p));
  if (a <= 0) return;
  ctx.save();
  ctx.globalAlpha = a * 0.9;
  ctx.fillStyle = c || C.blanc;
  ctx.beginPath(); ctx.arc(x, y, r * a, 0, Math.PI * 2); ctx.fill();
  if (contour) {
    ctx.globalAlpha = a * 0.35;
    ctx.strokeStyle = contour; ctx.lineWidth = 1.4;
    ctx.beginPath(); ctx.arc(x, y, r * a * 1.7, 0, Math.PI * 2); ctx.stroke();
  }
  ctx.restore();
}

/* Rectangle tracé côté par côté (cadre, case de tableau). */
function cadre(ctx, x, y, w, h, p, c, ep, pointille) {
  ctx.save();
  if (pointille) ctx.setLineDash([6, 6]);
  const q = cl(p) * 4;
  seg(ctx, x,     y,     x + w, y,     cl(q),       c, ep || 1.8);
  seg(ctx, x + w, y,     x + w, y + h, cl(q - 1),   c, ep || 1.8);
  seg(ctx, x + w, y + h, x,     y + h, cl(q - 2),   c, ep || 1.8);
  seg(ctx, x,     y + h, x,     y,     cl(q - 3),   c, ep || 1.8);
  ctx.setLineDash([]);
  ctx.restore();
}

/* Bandeau de titre en haut du tableau : pastille + titre. */
function entete(ctx, W, H, eyebrow, titre, p, couleur) {
  const u = W / 1000;
  if (eyebrow) txt(ctx, eyebrow, W * 0.5, H * 0.075, et(0, 0.12, p), C.or, 13 * u, MONO);
  if (titre)   txt(ctx, titre,   W * 0.5, H * 0.145, et(0.05, 0.2, p), couleur || C.blanc, 26 * u, SERIF);
}

/* Encadré « à retenir » : une formule ou une phrase dans un cadre doré. */
function encadre(ctx, cx, cy, w, h, texte, p, couleur, taille, police) {
  cadre(ctx, cx - w / 2, cy - h / 2, w, h, et(0, 0.35, p), couleur || C.or, 2);
  txt(ctx, texte, cx, cy, et(0.3, 0.4, p), couleur || C.jaune, taille || 24, police || MONO);
}

/* Liste de puces alignées à gauche, qui se dévoilent l'une après l'autre. */
function puces(ctx, x, y, lignes, p, opts) {
  opts = opts || {};
  const dy = opts.dy || 34, s = opts.s || 17;
  lignes.forEach((l, i) => {
    const q = et((opts.debut || 0.1) + i * (opts.pas || 0.13), 0.3, p);
    if (q <= 0) return;
    const c = l.c || opts.c || C.doux;
    txt(ctx, (l.puce === false ? '' : '· ') + l.t, x, y + i * dy, q, c, l.s || s, l.f || SANS, 'left');
  });
}

/* ── Schémas récurrents du thème « Matière » ────────────────────────── */

/* Récipient : bécher (bec verseur) ou éprouvette, avec niveau de liquide. */
function becher(ctx, cx, bas, w, h, p, opts) {
  opts = opts || {};
  const g = cx - w / 2, d = cx + w / 2, haut = bas - h;
  seg(ctx, g, haut, g, bas, et(0, 0.3, p), opts.c || C.blanc, 2.2);
  seg(ctx, d, haut, d, bas, et(0.05, 0.3, p), opts.c || C.blanc, 2.2);
  seg(ctx, g, bas, d, bas, et(0.12, 0.25, p), opts.c || C.blanc, 2.2);
  if (opts.bec !== false) seg(ctx, d, haut, d + 10, haut - 7, et(0.3, 0.2, p), opts.c || C.blanc, 2);
  /* Graduations : trois traits courts sur le flanc gauche. */
  if (opts.graduations) {
    for (let i = 1; i <= 3; i++) {
      const y = bas - (h * i) / 4;
      seg(ctx, g, y, g + 12, y, et(0.35 + i * 0.05, 0.15, p), C.doux, 1.4);
    }
  }
  /* Liquide : un aplat qui monte, surface légèrement incurvée (ménisque). */
  if (opts.niveau) {
    const q = et(opts.debutLiquide === undefined ? 0.35 : opts.debutLiquide, 0.3, p);
    const yl = bas - h * opts.niveau * ease(q);
    if (q > 0) {
      aplat(ctx, [{ x: g + 2, y: yl }, { x: d - 2, y: yl }, { x: d - 2, y: bas - 2 }, { x: g + 2, y: bas - 2 }],
            1, opts.liquide || 'rgba(130,200,230,0.22)');
      seg(ctx, g + 2, yl, d - 2, yl, 1, opts.liquide2 || C.bleu, 1.8);
    }
  }
  if (opts.label) txt(ctx, opts.label, cx, bas + 26, et(0.55, 0.25, p), opts.labelC || C.doux, 15, SANS);
}

/* Modèle particulaire : la même boîte, trois arrangements.
   C'est le schéma central du chapitre sur les états : solide = rangé et
   serré, liquide = serré mais désordonné, gaz = très dispersé. */
function particules(ctx, x, y, w, h, etat, p, opts) {
  opts = opts || {};
  const r  = opts.r || 7;
  const c  = opts.c || C.bleu;
  const rnd = graine(opts.seed || 7);
  const pts = [];

  if (etat === 'solide') {
    const cols = opts.cols || 5, lignes = opts.lignes || 4;
    const px = w / (cols + 1), py = h / (lignes + 1);
    for (let i = 1; i <= cols; i++) for (let j = 1; j <= lignes; j++) {
      /* Vibration sur place : les particules d'un solide ne se déplacent pas. */
      const v = Math.sin(p * 26 + i * 1.7 + j) * 1.4;
      pts.push({ x: x + i * px + v, y: y + j * py + Math.cos(p * 24 + j * 2) * 1.4 });
    }
  } else if (etat === 'liquide') {
    const n = opts.n || 20;
    for (let i = 0; i < n; i++) {
      const bx = x + 0.08 * w + rnd() * w * 0.84;
      const by = y + h * (0.28 + rnd() * 0.68);
      /* Elles glissent les unes sur les autres : petit déplacement lent. */
      pts.push({ x: bx + Math.sin(p * 6 + i) * 4, y: by + Math.cos(p * 5 + i * 1.3) * 3 });
    }
  } else { /* gaz */
    const n = opts.n || 11;
    for (let i = 0; i < n; i++) {
      const bx = x + 0.1 * w + rnd() * w * 0.8;
      const by = y + 0.1 * h + rnd() * h * 0.8;
      /* Grande agitation, dans tout le volume disponible. */
      pts.push({ x: bx + Math.sin(p * 11 + i * 2.1) * 16, y: by + Math.cos(p * 9 + i * 1.6) * 14, v: true });
    }
  }
  pts.forEach((pt, i) => {
    const q = et(0.05 + (i / pts.length) * (opts.etale === false ? 0 : 0.35), 0.25, p);
    bille(ctx, pt.x, pt.y, r, q, c);
    /* Traînée de vitesse pour le gaz : on voit qu'elles filent. */
    if (pt.v && q > 0.6 && opts.vitesse !== false) {
      const a = Math.sin(p * 11 + i * 2.1), b = Math.cos(p * 9 + i * 1.6);
      seg(ctx, pt.x - a * 9, pt.y - b * 8, pt.x - a * 2, pt.y - b * 2, 1, 'rgba(130,200,230,0.30)', 1.2);
    }
  });
  return pts;
}

/* Atome schématisé : noyau + un ou deux électrons sur une orbite. */
function atome(ctx, cx, cy, r, symbole, p, opts) {
  opts = opts || {};
  bille(ctx, cx, cy, r, et(0, 0.3, p), opts.c || C.bleu, opts.halo);
  if (symbole) txt(ctx, symbole, cx, cy + 1, et(0.25, 0.3, p), opts.tc || '#0f1a12', (opts.ts || r * 1.05), SANS);
  if (opts.orbite) {
    cercle(ctx, cx, cy, r * 2.1, et(0.3, 0.4, p), opts.oc || C.doux, 1.3);
    const ang = p * 4 + (opts.phase || 0);
    bille(ctx, cx + Math.cos(ang) * r * 2.1, cy + Math.sin(ang) * r * 2.1, 4, et(0.55, 0.25, p), C.jaune);
  }
}

/* Molécule : des atomes reliés par des liaisons, décrits en coordonnées
   relatives pour pouvoir être posés n'importe où et à n'importe quelle taille.
     spec = { at:[{s:'O', dx:0, dy:0, r:1, c:…}], li:[[0,1],[0,2,'double']] } */
function molecule(ctx, cx, cy, ech, spec, p, opts) {
  opts = opts || {};
  const A = spec.at.map(a => ({ x: cx + a.dx * ech, y: cy + a.dy * ech, r: (a.r || 1) * ech * 0.34, s: a.s, c: a.c }));
  (spec.li || []).forEach((l, i) => {
    const a = A[l[0]], b = A[l[1]];
    const q = et(0.1 + i * 0.05, 0.25, p);
    if (l[2] === 'double') {
      const ang = Math.atan2(b.y - a.y, b.x - a.x) + Math.PI / 2, d = 3.5;
      seg(ctx, a.x + Math.cos(ang) * d, a.y + Math.sin(ang) * d, b.x + Math.cos(ang) * d, b.y + Math.sin(ang) * d, q, opts.lc || C.doux, 2);
      seg(ctx, a.x - Math.cos(ang) * d, a.y - Math.sin(ang) * d, b.x - Math.cos(ang) * d, b.y - Math.sin(ang) * d, q, opts.lc || C.doux, 2);
    } else {
      seg(ctx, a.x, a.y, b.x, b.y, q, opts.lc || C.doux, 2.4);
    }
  });
  A.forEach((a, i) => {
    const q = et(0.02 + i * 0.06, 0.28, p);
    bille(ctx, a.x, a.y, a.r, q, a.c || C.bleu);
    txt(ctx, a.s, a.x, a.y + 1, et(0.15 + i * 0.06, 0.3, p), '#0f1a12', a.r * 1.05, SANS);
  });
  if (opts.nom) txt(ctx, opts.nom, cx, cy + (opts.dyNom || ech * 0.9), et(0.55, 0.3, p), opts.nc || C.doux, opts.ns || 16, opts.nf || SANS);
  return A;
}

/* Catalogue des molécules du thème (coordonnées en unités d'échelle). */
const MOL = {
  H2O : { at:[{s:'O',dx:0,dy:0,r:1.15,c:C.rouge},{s:'H',dx:-0.62,dy:-0.5,r:0.72,c:C.blanc},{s:'H',dx:0.62,dy:-0.5,r:0.72,c:C.blanc}],
          li:[[0,1],[0,2]] },
  O2  : { at:[{s:'O',dx:-0.42,dy:0,r:1.05,c:C.rouge},{s:'O',dx:0.42,dy:0,r:1.05,c:C.rouge}], li:[[0,1,'double']] },
  CO2 : { at:[{s:'C',dx:0,dy:0,r:1.05,c:C.doux},{s:'O',dx:-0.85,dy:0,r:1,c:C.rouge},{s:'O',dx:0.85,dy:0,r:1,c:C.rouge}],
          li:[[0,1,'double'],[0,2,'double']] },
  CH4 : { at:[{s:'C',dx:0,dy:0,r:1.1,c:C.doux},{s:'H',dx:0,dy:-0.75,r:0.66,c:C.blanc},{s:'H',dx:0,dy:0.75,r:0.66,c:C.blanc},
              {s:'H',dx:-0.75,dy:0.15,r:0.66,c:C.blanc},{s:'H',dx:0.75,dy:0.15,r:0.66,c:C.blanc}],
          li:[[0,1],[0,2],[0,3],[0,4]] },
  H2  : { at:[{s:'H',dx:-0.32,dy:0,r:0.8,c:C.blanc},{s:'H',dx:0.32,dy:0,r:0.8,c:C.blanc}], li:[[0,1]] },
  N2  : { at:[{s:'N',dx:-0.42,dy:0,r:1.05,c:C.violet},{s:'N',dx:0.42,dy:0,r:1.05,c:C.violet}], li:[[0,1]] },
};

/* Balance à plateau : la masse se lit, et surtout elle se conserve. */
function balance(ctx, cx, bas, p, lecture, opts) {
  opts = opts || {};
  const w = opts.w || 150, h = opts.h || 54;
  cadre(ctx, cx - w / 2, bas - h, w, h, et(0, 0.3, p), opts.c || C.blanc, 2);
  seg(ctx, cx - w * 0.34, bas - h, cx + w * 0.34, bas - h, et(0.25, 0.2, p), C.doux, 2); /* plateau */
  const ec = opts.ec || C.jaune;
  txt(ctx, lecture, cx, bas - h * 0.45, et(0.35, 0.35, p), ec, opts.s || 22, MONO);
  if (opts.label) txt(ctx, opts.label, cx, bas + 24, et(0.6, 0.25, p), C.doux, 15, SANS);
}

/* Échelle de pH graduée de 0 à 14, avec repères acide / neutre / basique. */
function echellePH(ctx, x, y, w, p, opts) {
  opts = opts || {};
  const h = opts.h || 26;
  /* Le dégradé va du rouge (acide) au bleu (basique) en passant par le vert. */
  const q = ease(et(0, 0.35, p));
  if (q > 0) {
    ctx.save();
    const grd = ctx.createLinearGradient(x, 0, x + w, 0);
    grd.addColorStop(0.00, 'rgba(230,130,110,0.55)');
    grd.addColorStop(0.45, 'rgba(230,210,120,0.45)');
    grd.addColorStop(0.50, 'rgba(130,210,160,0.55)');
    grd.addColorStop(1.00, 'rgba(130,200,230,0.55)');
    ctx.globalAlpha = q; ctx.fillStyle = grd;
    ctx.fillRect(x, y, w * q, h);
    ctx.restore();
  }
  cadre(ctx, x, y, w, h, et(0.05, 0.3, p), C.blanc, 1.6);
  for (let i = 0; i <= 14; i++) {
    const gx = x + (w * i) / 14;
    const qq = et(0.3 + i * 0.015, 0.2, p);
    seg(ctx, gx, y + h, gx, y + h + (i % 7 === 0 ? 10 : 6), qq, C.doux, 1.3);
    if (i % 2 === 0 || i === 7) txt(ctx, String(i), gx, y + h + 22, qq, i === 7 ? C.vert : C.doux, 14, MONO);
  }
  if (opts.zones !== false) {
    txt(ctx, 'ACIDE',   x + w * 0.18, y - 16, et(0.5, 0.3, p), C.rouge, 14, MONO);
    txt(ctx, 'NEUTRE',  x + w * 0.5,  y - 16, et(0.58, 0.3, p), C.vert,  14, MONO);
    txt(ctx, 'BASIQUE', x + w * 0.82, y - 16, et(0.66, 0.3, p), C.bleu,  14, MONO);
  }
  /* Curseurs : des valeurs remarquables posées sur l'échelle. */
  (opts.reperes || []).forEach((r, i) => {
    const gx = x + (w * r.v) / 14;
    const qq = et((opts.debutReperes || 0.55) + i * 0.08, 0.25, p);
    if (qq <= 0) return;
    seg(ctx, gx, y, gx, y - 26, qq, r.c || C.blanc, 2);
    bille(ctx, gx, y - 30, 5, qq, r.c || C.blanc);
    txt(ctx, r.t, gx, y - 46, qq, r.c || C.blanc, 14, SANS);
  });
}

/* Tableau à colonnes : le format le plus lisible pour comparer trois états
   ou deux familles. `cols` = en-têtes, `lignes` = [intitulé, v1, v2, v3]. */
function tableau(ctx, x, y, w, cols, lignes, p, opts) {
  opts = opts || {};
  const n = cols.length, cw = w / n, dy = opts.dy || 40;
  cols.forEach((c, i) => {
    txt(ctx, c.t, x + cw * i + cw / 2, y, et(0.05 + i * 0.05, 0.25, p), c.c || C.or, opts.sTete || 17, c.f || MONO);
  });
  seg(ctx, x, y + 16, x + w, y + 16, et(0.2, 0.25, p), C.doux, 1.4);
  lignes.forEach((l, j) => {
    const q = et(0.28 + j * 0.13, 0.3, p);
    l.forEach((cell, i) => {
      if (!cell) return;
      const c = (typeof cell === 'object') ? cell : { t: cell };
      txt(ctx, c.t, x + cw * i + cw / 2, y + 34 + j * dy, q,
          c.c || (i === 0 ? C.doux : C.blanc), c.s || (i === 0 ? 15 : 17), c.f || SANS);
    });
  });
}

/* Diapositive de texte : titre + puces centrées. Réservée aux étapes de
   synthèse — partout ailleurs, on privilégie le schéma. */
function diapo(cfg) {
  return {
    caption: cfg.caption,
    label: cfg.label,
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      const u = W / 1000;
      entete(ctx, W, H, cfg.eyebrow, cfg.title, p, cfg.titleColor);
      const body = cfg.body || [];
      const y0 = cfg.title ? H * 0.34 : H * 0.28;
      const dy = (body.length > 5 ? H * 0.088 : H * 0.105);
      body.forEach((b, i) => {
        const q = et(0.2 + i * 0.11, 0.3, p);
        if (q <= 0) return;
        txt(ctx, b.t, W * 0.5, y0 + i * dy, q, b.c || C.doux, (b.s || 18) * u, b.f || SANS);
      });
      if (cfg.encadre) {
        encadre(ctx, W * 0.5, H * 0.82, W * 0.6, H * 0.14, cfg.encadre,
                et(0.6, 0.35, p), C.or, 22 * u, cfg.encadreFont || MONO);
      }
    }
  };
}

/* Fabrique d'une leçon : évite de répéter les mêmes champs quinze fois. */
function lecon(cfg) {
  return {
    id: cfg.id,
    chapter: cfg.chapitre,
    branch: 'matiere',
    tag: 'Matière · ' + cfg.niveau,
    title: cfg.titre,
    desc: cfg.desc,
    duration: '~' + Math.max(2, Math.round(cfg.steps.length * 0.9)) + ' min',
    level: cfg.niveau,
    steps: cfg.steps
  };
}

const LECONS = [];

/* ══════════════════════════════════════════════════════════════════════
   CHAPITRE 1 — ÉTATS ET CHANGEMENTS D'ÉTAT
   ══════════════════════════════════════════════════════════════════════ */

const CH1 = "États et changements d'état";

LECONS.push(lecon({
  id: 'pc_etats_1', chapitre: CH1, niveau: '5ème',
  titre: 'Les trois états de la matière',
  desc: "Solide, liquide, gaz : ce que l'on voit à l'œil nu, et ce que font les particules en dessous.",
  steps: [

  { caption: "La même substance — l'eau — se présente sous trois états : solide (la glace), liquide (l'eau), gazeux (la vapeur).",
    label: 'Les trois états',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'ÉTATS DE LA MATIÈRE', "Une seule substance, trois états", p);
      const bas = H * 0.72, w = W * 0.15, h = H * 0.30;
      const xs = [W * 0.22, W * 0.5, W * 0.78];

      /* Solide : un glaçon posé au fond, forme bien à lui. */
      becher(ctx, xs[0], bas, w, h, et(0.15, 0.3, p), { graduations: true });
      const q1 = et(0.35, 0.3, p);
      if (q1 > 0) {
        const s = 46 * ease(q1);
        aplat(ctx, [{x:xs[0]-s,y:bas-s*1.1},{x:xs[0]+s,y:bas-s*1.1},{x:xs[0]+s,y:bas-4},{x:xs[0]-s,y:bas-4}], 1, 'rgba(130,200,230,0.28)');
        cadre(ctx, xs[0]-s, bas-s*1.1, s*2, s*1.1-4, 1, C.bleu, 2);
      }
      txt(ctx, 'SOLIDE', xs[0], bas + 34, et(0.45, 0.25, p), C.bleu, 18, MONO);
      txt(ctx, 'la glace', xs[0], bas + 58, et(0.5, 0.25, p), C.doux, 15, SANS);

      /* Liquide : il épouse la forme du récipient et fait une surface plane. */
      becher(ctx, xs[1], bas, w, h, et(0.25, 0.3, p), {
        graduations: true, niveau: 0.55, debutLiquide: 0.42,
        liquide: 'rgba(130,200,230,0.24)'
      });
      txt(ctx, 'LIQUIDE', xs[1], bas + 34, et(0.55, 0.25, p), C.vert, 18, MONO);
      txt(ctx, "l'eau", xs[1], bas + 58, et(0.6, 0.25, p), C.doux, 15, SANS);

      /* Gaz : invisible, mais il remplit tout le récipient. */
      becher(ctx, xs[2], bas, w, h, et(0.35, 0.3, p), { graduations: true });
      const q3 = et(0.55, 0.3, p);
      if (q3 > 0) particules(ctx, xs[2] - w/2 + 6, bas - h + 6, w - 12, h - 12, 'gaz', p,
                             { n: 9, r: 5.5, c: 'rgba(240,236,224,0.55)', seed: 3 });
      txt(ctx, 'GAZ', xs[2], bas + 34, et(0.65, 0.25, p), C.jaune, 18, MONO);
      txt(ctx, "la vapeur d'eau", xs[2], bas + 58, et(0.7, 0.25, p), C.doux, 15, SANS);

      txt(ctx, "Ce sont les mêmes molécules d'eau dans les trois cas.", W*0.5, H*0.94, et(0.8, 0.2, p), C.or, 16, SANS);
    }
  },

  { caption: "Dans un solide, les particules sont rangées, serrées, et ne font que vibrer sur place : la forme est fixe.",
    label: 'Le solide',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MODÈLE PARTICULAIRE', "L'état solide", p, C.bleu);
      const bw = W * 0.34, bh = H * 0.42, bx = W * 0.10, by = H * 0.30;
      cadre(ctx, bx, by, bw, bh, et(0.05, 0.25, p), C.doux, 1.8);
      particules(ctx, bx, by, bw, bh, 'solide', p, { cols: 6, lignes: 5, r: 11, c: C.bleu, seed: 11 });

      /* Les trois faits à retenir, à droite du schéma. */
      puces(ctx, W * 0.52, H * 0.36, [
        { t: 'Rangées : elles forment un empilement régulier.' },
        { t: 'Serrées : elles se touchent, aucun vide entre elles.' },
        { t: 'Fixes : elles vibrent, mais ne changent pas de voisine.' },
      ], p, { debut: 0.35, pas: 0.16, dy: 46, s: 17, c: C.blanc });

      const q = et(0.82, 0.18, p);
      if (q > 0) {
        txt(ctx, "→ forme propre  ·  volume propre  ·  incompressible", W*0.5, H*0.87, q, C.bleu, 19, MONO);
      }
    }
  },

  { caption: "Dans un liquide, les particules restent serrées mais désordonnées : elles glissent les unes sur les autres. Le liquide coule et prend la forme du récipient.",
    label: 'Le liquide',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MODÈLE PARTICULAIRE', "L'état liquide", p, C.vert);
      const bw = W * 0.34, bh = H * 0.42, bx = W * 0.10, by = H * 0.30;
      /* Le récipient est ouvert en haut : le liquide n'occupe que le bas. */
      seg(ctx, bx, by, bx, by + bh, et(0.05, 0.2, p), C.doux, 1.8);
      seg(ctx, bx + bw, by, bx + bw, by + bh, et(0.08, 0.2, p), C.doux, 1.8);
      seg(ctx, bx, by + bh, bx + bw, by + bh, et(0.12, 0.2, p), C.doux, 1.8);
      seg(ctx, bx + 2, by + bh * 0.34, bx + bw - 2, by + bh * 0.34, et(0.25, 0.25, p), C.vert, 1.8);
      particules(ctx, bx, by + bh * 0.30, bw, bh * 0.70, 'liquide', p, { n: 24, r: 10, c: C.vert, seed: 5 });

      puces(ctx, W * 0.52, H * 0.36, [
        { t: 'Serrées : presque aussi proches que dans le solide.' },
        { t: 'Désordonnées : plus aucun empilement régulier.' },
        { t: 'Mobiles : elles glissent, le liquide coule.' },
      ], p, { debut: 0.35, pas: 0.16, dy: 46, s: 17, c: C.blanc });

      const q = et(0.82, 0.18, p);
      if (q > 0) txt(ctx, "→ pas de forme propre  ·  volume propre  ·  incompressible", W*0.5, H*0.87, q, C.vert, 19, MONO);
    }
  },

  { caption: "Dans un gaz, les particules sont très éloignées et vont vite dans toutes les directions : le gaz occupe tout le volume offert, et il se comprime.",
    label: 'Le gaz',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MODÈLE PARTICULAIRE', "L'état gazeux", p, C.jaune);
      const bw = W * 0.34, bh = H * 0.42, bx = W * 0.10, by = H * 0.30;
      cadre(ctx, bx, by, bw, bh, et(0.05, 0.25, p), C.doux, 1.8);
      particules(ctx, bx, by, bw, bh, 'gaz', p, { n: 12, r: 9, c: C.jaune, seed: 17 });

      puces(ctx, W * 0.52, H * 0.36, [
        { t: 'Très espacées : surtout du vide entre elles.' },
        { t: 'Très agitées : elles vont vite et rebondissent.' },
        { t: 'Dispersées : elles remplissent tout le récipient.' },
      ], p, { debut: 0.35, pas: 0.16, dy: 46, s: 17, c: C.blanc });

      const q = et(0.82, 0.18, p);
      if (q > 0) txt(ctx, "→ pas de forme propre  ·  pas de volume propre  ·  COMPRESSIBLE", W*0.5, H*0.87, q, C.jaune, 19, MONO);
    }
  },

  { caption: "Le tableau qui résume tout : trois questions suffisent à identifier un état.",
    label: 'Comparaison',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'SYNTHÈSE', 'Reconnaître un état en trois questions', p);
      tableau(ctx, W * 0.08, H * 0.34, W * 0.84,
        [ { t: '' }, { t: 'SOLIDE', c: C.bleu }, { t: 'LIQUIDE', c: C.vert }, { t: 'GAZ', c: C.jaune } ],
        [
          [ 'A-t-il une forme propre ?',   { t: 'oui', c: C.vert },   { t: 'non', c: C.rouge }, { t: 'non', c: C.rouge } ],
          [ 'A-t-il un volume propre ?',   { t: 'oui', c: C.vert },   { t: 'oui', c: C.vert },  { t: 'non', c: C.rouge } ],
          [ 'Peut-on le comprimer ?',      { t: 'non', c: C.rouge },  { t: 'non', c: C.rouge }, { t: 'oui', c: C.vert } ],
          [ 'Les particules…',             { t: 'rangées, fixes', s: 15 }, { t: 'serrées, mobiles', s: 15 }, { t: 'dispersées, rapides', s: 15 } ],
        ], p, { dy: 50 });
      const q = et(0.8, 0.2, p);
      if (q > 0) txt(ctx, "Un gaz est le seul état compressible : c'est là qu'il y a du vide à réduire.",
                     W * 0.5, H * 0.9, q, C.or, 16, SANS);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: "L'essentiel sur les trois états",
    body: [
      { t: "La matière est faite de particules, trop petites pour être vues.", c: C.blanc },
      { t: "Ce qui change d'un état à l'autre : leur ARRANGEMENT, pas leur nature.", c: C.jaune },
      { t: "Solide : rangées et fixes.   Liquide : serrées et mobiles.", c: C.doux },
      { t: "Gaz : très espacées, très agitées — donc compressible.", c: C.doux },
    ],
    encadre: "Même substance = mêmes particules",
    caption: "L'essentiel : ce sont toujours les mêmes particules ; seul leur arrangement change."
  }),

]}));

/* Courbe tracée point par point (courbe de chauffage, dilution…). */
function courbe(ctx, pts, p, c, w) {
  const fn = G('chalkCurve');
  if (fn) fn(ctx, pts, p, c || C.jaune, w || 2.4);
}

/* Repère simple avec noms d'axes — utilisé pour la courbe de chauffage. */
function repere(ctx, ox, oy, larg, haut, p, nomX, nomY) {
  seg(ctx, ox, oy, ox + larg, oy, et(0, 0.25, p), C.doux, 1.6);
  seg(ctx, ox, oy, ox, oy - haut, et(0.05, 0.25, p), C.doux, 1.6);
  if (nomX) txt(ctx, nomX, ox + larg, oy + 24, et(0.2, 0.2, p), C.doux, 15, SANS, 'right');
  if (nomY) txt(ctx, nomY, ox + 4, oy - haut - 16, et(0.2, 0.2, p), C.doux, 15, SANS, 'left');
}

/* Double flèche entre deux états, avec le nom du changement de chaque côté. */
function transition(ctx, A, B, p, nomAller, nomRetour, cAller, cRetour, decal) {
  const dx = B.x - A.x, dy = B.y - A.y, L = Math.hypot(dx, dy);
  const ux = dx / L, uy = dy / L, nx = -uy, ny = ux;
  const d = decal === undefined ? 16 : decal;
  const m = 46; /* marge : on ne colle pas aux pastilles */
  const a1 = { x: A.x + ux*m + nx*d, y: A.y + uy*m + ny*d };
  const b1 = { x: B.x - ux*m + nx*d, y: B.y - uy*m + ny*d };
  const a2 = { x: A.x + ux*m - nx*d, y: A.y + uy*m - ny*d };
  const b2 = { x: B.x - ux*m - nx*d, y: B.y - uy*m - ny*d };
  fleche(ctx, a1.x, a1.y, b1.x, b1.y, et(0, 0.4, p), cAller || C.jaune, 2);
  fleche(ctx, b2.x, b2.y, a2.x, a2.y, et(0.25, 0.4, p), cRetour || C.bleu, 2);
  if (nomAller)  txt(ctx, nomAller,  (a1.x+b1.x)/2 + nx*16, (a1.y+b1.y)/2 + ny*16, et(0.3, 0.3, p), cAller || C.jaune, 15, SANS);
  if (nomRetour) txt(ctx, nomRetour, (a2.x+b2.x)/2 - nx*16, (a2.y+b2.y)/2 - ny*16, et(0.5, 0.3, p), cRetour || C.bleu, 15, SANS);
}

/* Pastille d'état : un rond nommé, sommet du schéma des changements d'état. */
function pastille(ctx, x, y, texte, p, c, r) {
  cercle(ctx, x, y, r || 40, et(0, 0.3, p), c || C.blanc, 2);
  txt(ctx, texte, x, y, et(0.2, 0.3, p), c || C.blanc, 17, MONO);
}

LECONS.push(lecon({
  id: 'pc_etats_2', chapitre: CH1, niveau: '5ème',
  titre: "Les changements d'état",
  desc: "Fusion, vaporisation, sublimation… les six passages d'un état à l'autre, et ce que devient la masse.",
  steps: [

  { caption: "Six changements d'état relient les trois états. Chacun porte un nom précis — et chacun a son inverse.",
    label: 'Le schéma complet',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, "CHANGEMENTS D'ÉTAT", "Les six passages", p);
      const S = { x: W * 0.22, y: H * 0.76 };
      const L = { x: W * 0.78, y: H * 0.76 };
      const Gz= { x: W * 0.50, y: H * 0.36 };

      pastille(ctx, S.x, S.y, 'SOLIDE',  et(0.02, 0.2, p), C.bleu);
      pastille(ctx, L.x, L.y, 'LIQUIDE', et(0.08, 0.2, p), C.vert);
      pastille(ctx, Gz.x, Gz.y, 'GAZ',   et(0.14, 0.2, p), C.jaune);

      transition(ctx, S, L,  et(0.22, 0.5, p), 'fusion', 'solidification', C.rouge, C.bleu);
      transition(ctx, L, Gz, et(0.42, 0.5, p), 'vaporisation', 'liquéfaction', C.rouge, C.bleu);
      transition(ctx, S, Gz, et(0.62, 0.5, p), 'sublimation', 'condensation', C.rouge, C.bleu);

      const q = et(0.85, 0.15, p);
      if (q > 0) {
        txt(ctx, "en rouge : on CHAUFFE  ·  en bleu : on REFROIDIT", W*0.5, H*0.94, q, C.or, 16, MONO);
      }
    }
  },

  { caption: "Fusion : le solide devient liquide, il faut chauffer. Solidification : l'inverse, il faut refroidir. Pour l'eau pure, cela se produit à 0 °C.",
    label: 'Fusion et solidification',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'FUSION · SOLIDIFICATION', 'Solide  ⇄  Liquide', p, C.bleu);
      const bas = H * 0.70, w = W * 0.16, h = H * 0.26;
      const xg = W * 0.24, xd = W * 0.76;

      /* À gauche : un glaçon. À droite : de l'eau. */
      becher(ctx, xg, bas, w, h, et(0.05, 0.25, p), {});
      const q1 = et(0.2, 0.25, p);
      if (q1 > 0) {
        const s = 40 * ease(q1);
        aplat(ctx, [{x:xg-s,y:bas-s},{x:xg+s,y:bas-s},{x:xg+s,y:bas-4},{x:xg-s,y:bas-4}], 1, 'rgba(130,200,230,0.28)');
        cadre(ctx, xg-s, bas-s, s*2, s-4, 1, C.bleu, 2);
      }
      txt(ctx, 'glace  (solide)', xg, bas + 32, et(0.3, 0.2, p), C.bleu, 16, SANS);

      becher(ctx, xd, bas, w, h, et(0.15, 0.25, p), { niveau: 0.5, debutLiquide: 0.3, liquide: 'rgba(130,210,160,0.24)', liquide2: C.vert });
      txt(ctx, 'eau  (liquide)', xd, bas + 32, et(0.4, 0.2, p), C.vert, 16, SANS);

      /* Les deux flèches, avec la condition thermique. */
      fleche(ctx, xg + w, bas - h*0.75, xd - w, bas - h*0.75, et(0.45, 0.3, p), C.rouge, 2.4);
      txt(ctx, 'FUSION  —  on chauffe', W*0.5, bas - h*0.75 - 22, et(0.55, 0.25, p), C.rouge, 17, SANS);
      fleche(ctx, xd - w, bas - h*0.15, xg + w, bas - h*0.15, et(0.62, 0.3, p), C.bleu, 2.4);
      txt(ctx, 'SOLIDIFICATION  —  on refroidit', W*0.5, bas - h*0.15 + 26, et(0.7, 0.25, p), C.bleu, 17, SANS);

      encadre(ctx, W*0.5, H*0.88, W*0.52, H*0.13, "eau pure :  fusion à 0 °C", et(0.8, 0.2, p), C.or, 21);
    }
  },

  { caption: "Vaporisation : le liquide devient gaz. Elle se fait de deux façons : lentement en surface (évaporation), ou dans toute la masse à 100 °C (ébullition).",
    label: 'Vaporisation',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'VAPORISATION', 'Deux façons de passer au gaz', p, C.jaune);
      const bas = H * 0.74, w = W * 0.17, h = H * 0.24;
      const xg = W * 0.27, xd = W * 0.73;

      /* Évaporation : quelques molécules seulement quittent la surface. */
      becher(ctx, xg, bas, w, h, et(0.05, 0.25, p), { niveau: 0.55, debutLiquide: 0.18, liquide: 'rgba(130,210,160,0.22)', liquide2: C.vert });
      const yl = bas - h * 0.55;
      for (let i = 0; i < 4; i++) {
        const q = et(0.35 + i * 0.06, 0.4, p);
        if (q <= 0) continue;
        const x = xg - w*0.3 + i * (w*0.22);
        bille(ctx, x, yl - 30 * ease(q) - i*4, 5, q, C.jaune);
      }
      txt(ctx, 'ÉVAPORATION', xg, H*0.30, et(0.3, 0.25, p), C.jaune, 18, MONO);
      txt(ctx, 'lente · en surface · à toute température', xg, bas + 34, et(0.45, 0.25, p), C.doux, 15, SANS);
      txt(ctx, 'une flaque qui sèche', xg, bas + 58, et(0.5, 0.25, p), C.doux, 14, SANS);

      /* Ébullition : des bulles naissent dans tout le liquide. */
      becher(ctx, xd, bas, w, h, et(0.12, 0.25, p), { niveau: 0.55, debutLiquide: 0.25, liquide: 'rgba(230,130,110,0.20)', liquide2: C.rouge });
      const rnd = graine(23);
      for (let i = 0; i < 9; i++) {
        const q = et(0.45 + i * 0.03, 0.4, p);
        if (q <= 0) continue;
        const bx = xd - w*0.36 + rnd() * w * 0.72;
        const by = bas - 8 - (rnd() * 0.5 + 0.5) * h * 0.5 * ease(q);
        cercle(ctx, bx, by, 4 + i % 3, 1, C.jaune, 1.4);
      }
      /* La flamme du bec : on chauffe fort. */
      const qf = et(0.3, 0.3, p);
      if (qf > 0) {
        seg(ctx, xd - 16, bas + 18, xd, bas + 4, qf, C.rouge, 2);
        seg(ctx, xd + 16, bas + 18, xd, bas + 4, qf, C.rouge, 2);
        txt(ctx, '100 °C', xd, bas + 40, et(0.5, 0.25, p), C.rouge, 16, MONO);
      }
      txt(ctx, 'ÉBULLITION', xd, H*0.30, et(0.38, 0.25, p), C.rouge, 18, MONO);
      txt(ctx, 'rapide · dans toute la masse · à 100 °C', xd, bas + 64, et(0.6, 0.25, p), C.doux, 15, SANS);

      txt(ctx, "Le retour du gaz au liquide s'appelle la LIQUÉFACTION (la buée sur une vitre froide).",
          W*0.5, H*0.94, et(0.8, 0.2, p), C.bleu, 16, SANS);
    }
  },

  { caption: "Un solide peut passer directement à l'état gazeux sans fondre : c'est la sublimation. L'inverse est la condensation, qui forme le givre.",
    label: 'Sublimation',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'SUBLIMATION · CONDENSATION', 'Le passage direct', p, C.violet);
      const S = { x: W * 0.25, y: H * 0.55 };
      const Gz = { x: W * 0.72, y: H * 0.55 };

      /* Bloc solide à gauche, nuage de particules à droite. */
      const q1 = et(0.05, 0.25, p);
      cadre(ctx, S.x - 52, S.y - 40, 104, 80, q1, C.bleu, 2.2);
      particules(ctx, S.x - 50, S.y - 38, 100, 76, 'solide', p, { cols: 4, lignes: 3, r: 9, c: C.bleu, seed: 4 });
      txt(ctx, 'SOLIDE', S.x, S.y + 68, et(0.2, 0.2, p), C.bleu, 17, MONO);

      cadre(ctx, Gz.x - 62, Gz.y - 45, 124, 90, et(0.15, 0.25, p), C.doux, 1.6);
      particules(ctx, Gz.x - 60, Gz.y - 43, 120, 86, 'gaz', p, { n: 8, r: 8, c: C.jaune, seed: 9 });
      txt(ctx, 'GAZ', Gz.x, Gz.y + 68, et(0.3, 0.2, p), C.jaune, 17, MONO);

      transition(ctx, S, Gz, et(0.4, 0.5, p), 'sublimation', 'condensation', C.rouge, C.bleu, 46);

      puces(ctx, W * 0.12, H * 0.83, [
        { t: "Sublimation : la neige qui disparaît sans flaque, la glace carbonique.", c: C.rouge },
        { t: "Condensation : le givre qui se dépose directement sur une vitre gelée.", c: C.bleu },
      ], p, { debut: 0.7, pas: 0.12, dy: 32, s: 16 });
    }
  },

  { caption: "En chauffant régulièrement de la glace, la température monte… puis s'arrête. Ce palier est la signature d'un changement d'état.",
    label: 'La courbe et son palier',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'COURBE DE CHAUFFAGE', "La température fait un palier", p);
      const ox = W * 0.14, oy = H * 0.82, larg = W * 0.72, haut = H * 0.50;
      repere(ctx, ox, oy, larg, haut, et(0, 0.2, p), 'temps', 'température (°C)');

      /* Repères 0 °C et 100 °C. */
      const y0 = oy - haut * 0.30, y100 = oy - haut * 0.72;
      ctx.save(); ctx.setLineDash([5, 6]);
      seg(ctx, ox, y0,   ox + larg, y0,   et(0.15, 0.2, p), 'rgba(240,236,224,0.22)', 1.2);
      seg(ctx, ox, y100, ox + larg, y100, et(0.2, 0.2, p), 'rgba(240,236,224,0.22)', 1.2);
      ctx.setLineDash([]); ctx.restore();
      txt(ctx, '0 °C',   ox - 12, y0,   et(0.2, 0.2, p), C.doux, 14, MONO, 'right');
      txt(ctx, '100 °C', ox - 12, y100, et(0.24, 0.2, p), C.doux, 14, MONO, 'right');

      /* La courbe : montée, palier de fusion, montée, palier d'ébullition, montée. */
      const pts = [];
      const X = t => ox + larg * t;
      const seq = [
        { t0: 0.00, t1: 0.14, y0: oy - haut*0.10, y1: y0 },
        { t0: 0.14, t1: 0.34, y0: y0,   y1: y0 },
        { t0: 0.34, t1: 0.56, y0: y0,   y1: y100 },
        { t0: 0.56, t1: 0.82, y0: y100, y1: y100 },
        { t0: 0.82, t1: 1.00, y0: y100, y1: oy - haut*0.92 },
      ];
      seq.forEach(s => { for (let i = 0; i <= 22; i++) { const u = i/22; pts.push({ x: X(lp(s.t0,s.t1,u)), y: lp(s.y0,s.y1,u) }); } });
      courbe(ctx, pts, et(0.25, 0.55, p), C.jaune, 2.6);

      /* Les paliers annotés : c'est là que se joue le changement d'état. */
      if (et(0.6, 0.2, p) > 0) {
        txt(ctx, 'palier : FUSION', X(0.24), y0 - 22, et(0.6, 0.25, p), C.bleu, 15, SANS);
        txt(ctx, 'glace + eau ensemble', X(0.24), y0 + 22, et(0.66, 0.25, p), C.doux, 13, SANS);
      }
      if (et(0.72, 0.2, p) > 0) {
        txt(ctx, 'palier : ÉBULLITION', X(0.69), y100 - 22, et(0.72, 0.25, p), C.rouge, 15, SANS);
        txt(ctx, 'eau + vapeur ensemble', X(0.69), y100 + 22, et(0.78, 0.25, p), C.doux, 13, SANS);
      }
      txt(ctx, "Pendant le palier, on continue de chauffer mais la température ne bouge plus : l'énergie sert à changer d'état.",
          W*0.5, H*0.94, et(0.85, 0.15, p), C.or, 15, SANS);
    }
  },

  { caption: "Lors d'un changement d'état, la masse ne change jamais. Le volume, lui, peut changer — l'eau est même un cas rare : en gelant, elle gonfle.",
    label: 'Masse et volume',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CE QUI CHANGE, CE QUI NE CHANGE PAS', "La masse se conserve", p);
      const bas = H * 0.66;

      /* Une bouteille d'eau pesée avant et après congélation. */
      becher(ctx, W*0.24, bas, W*0.13, H*0.22, et(0.05, 0.25, p), { niveau: 0.62, debutLiquide: 0.15, liquide: 'rgba(130,210,160,0.22)', liquide2: C.vert, label: "eau liquide" });
      becher(ctx, W*0.72, bas, W*0.13, H*0.22, et(0.2, 0.25, p), { niveau: 0.74, debutLiquide: 0.35, liquide: 'rgba(130,200,230,0.26)', liquide2: C.bleu, label: "la même eau, gelée" });

      fleche(ctx, W*0.36, bas - H*0.11, W*0.60, bas - H*0.11, et(0.45, 0.3, p), C.bleu, 2.4);
      txt(ctx, 'congélation', W*0.48, bas - H*0.15, et(0.52, 0.25, p), C.bleu, 16, SANS);

      balance(ctx, W*0.24, H*0.90, et(0.58, 0.3, p), '250 g', { label: 'masse avant' });
      balance(ctx, W*0.72, H*0.90, et(0.68, 0.3, p), '250 g', { label: 'masse après' });

      const q = et(0.8, 0.2, p);
      if (q > 0) {
        txt(ctx, 'MASSE : identique', W*0.48, H*0.80, q, C.vert, 19, MONO);
        txt(ctx, "VOLUME : la glace occupe plus de place", W*0.48, H*0.86, et(0.86, 0.14, p), C.jaune, 17, MONO);
      }
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: "L'essentiel sur les changements d'état",
    body: [
      { t: "Chauffer : fusion, vaporisation, sublimation.", c: C.rouge },
      { t: "Refroidir : solidification, liquéfaction, condensation.", c: C.bleu },
      { t: "Pendant le changement, la température reste bloquée : c'est le palier.", c: C.blanc },
      { t: "Eau pure : fusion à 0 °C, ébullition à 100 °C.", c: C.doux },
      { t: "La masse se conserve toujours ; le volume, lui, peut varier.", c: C.jaune },
    ],
    encadre: "la masse se conserve",
    caption: "Six changements, un palier de température, et une masse qui ne bouge jamais."
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   CHAPITRE 2 — MASSE, VOLUME ET MASSE VOLUMIQUE
   ══════════════════════════════════════════════════════════════════════ */

const CH2 = 'Masse, volume et masse volumique';

/* Triangle mnémotechnique : la grandeur du haut se divise, celles du bas
   se multiplient. Un seul dessin donne les trois formules. */
function triangleFormule(ctx, cx, cy, r, haut, gauche, droite, p) {
  const A = { x: cx, y: cy - r }, B = { x: cx - r * 0.95, y: cy + r * 0.75 }, D = { x: cx + r * 0.95, y: cy + r * 0.75 };
  seg(ctx, A.x, A.y, B.x, B.y, et(0, 0.25, p), C.or, 2);
  seg(ctx, B.x, B.y, D.x, D.y, et(0.1, 0.25, p), C.or, 2);
  seg(ctx, D.x, D.y, A.x, A.y, et(0.2, 0.25, p), C.or, 2);
  seg(ctx, cx - r * 0.62, cy + r * 0.02, cx + r * 0.62, cy + r * 0.02, et(0.3, 0.25, p), C.or, 1.8);
  txt(ctx, haut,   cx,             cy - r * 0.42, et(0.35, 0.3, p), C.jaune, 26, MONO);
  txt(ctx, gauche, cx - r * 0.36,  cy + r * 0.44, et(0.45, 0.3, p), C.bleu,  24, MONO);
  txt(ctx, droite, cx + r * 0.36,  cy + r * 0.44, et(0.5, 0.3, p),  C.vert,  24, MONO);
}

LECONS.push(lecon({
  id: 'pc_masse_1', chapitre: CH2, niveau: '5ème',
  titre: 'Mesurer une masse et un volume',
  desc: "Balance, éprouvette graduée, déplacement d'eau : les gestes de mesure et les unités qui vont avec.",
  steps: [

  { caption: "La masse mesure la quantité de matière d'un objet. On la mesure avec une balance, en grammes ou en kilogrammes.",
    label: 'La masse',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'GRANDEUR 1', 'La masse', p, C.jaune);
      balance(ctx, W * 0.28, H * 0.62, et(0.1, 0.35, p), '175 g', { w: 210, h: 76, s: 28 });
      /* L'objet posé sur le plateau. */
      const q = et(0.3, 0.25, p);
      cadre(ctx, W*0.28 - 34, H*0.62 - 76 - 46, 68, 46, q, C.bleu, 2);
      txt(ctx, 'objet', W*0.28, H*0.62 - 76 - 23, et(0.4, 0.25, p), C.bleu, 15, SANS);

      puces(ctx, W * 0.52, H * 0.34, [
        { t: "Symbole : m.   Unité du système international : le kilogramme (kg).", c: C.blanc },
        { t: "Au collège on utilise surtout le gramme :  1 kg = 1 000 g.", c: C.doux },
        { t: "La masse ne dépend pas du lieu : 1 kg reste 1 kg sur la Lune.", c: C.jaune },
        { t: "La TARE remet la balance à zéro avec le récipient vide,", c: C.doux },
        { t: "pour ne peser que ce qu'on y verse ensuite.", c: C.doux },
      ], p, { debut: 0.35, pas: 0.11, dy: 42, s: 17 });

      encadre(ctx, W*0.5, H*0.9, W*0.46, H*0.12, '1 kg = 1 000 g', et(0.85, 0.15, p), C.or, 22);
    }
  },

  { caption: "Le volume mesure la place occupée. Pour un liquide, on utilise une éprouvette graduée — et on lit à hauteur des yeux, au bas du ménisque.",
    label: 'Le volume',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'GRANDEUR 2', 'Le volume', p, C.bleu);
      const cx = W * 0.26, bas = H * 0.80, w = W * 0.09, h = H * 0.46;
      seg(ctx, cx - w/2, bas - h, cx - w/2, bas, et(0.05, 0.25, p), C.blanc, 2.2);
      seg(ctx, cx + w/2, bas - h, cx + w/2, bas, et(0.08, 0.25, p), C.blanc, 2.2);
      seg(ctx, cx - w/2, bas, cx + w/2, bas, et(0.12, 0.2, p), C.blanc, 2.2);
      /* Graduations chiffrées. */
      for (let i = 1; i <= 5; i++) {
        const y = bas - (h * i) / 6;
        const q = et(0.2 + i * 0.03, 0.2, p);
        seg(ctx, cx - w/2, y, cx - w/2 + 16, y, q, C.doux, 1.4);
        txt(ctx, String(i * 20), cx - w/2 - 10, y, q, C.doux, 13, MONO, 'right');
      }
      /* Liquide + ménisque incurvé. */
      const ql = et(0.35, 0.3, p);
      if (ql > 0) {
        const yl = bas - (h * 3) / 6;
        aplat(ctx, [{x:cx-w/2+2,y:yl},{x:cx+w/2-2,y:yl},{x:cx+w/2-2,y:bas-2},{x:cx-w/2+2,y:bas-2}], ql, 'rgba(130,200,230,0.24)');
        seg(ctx, cx - w/2 + 2, yl - 3, cx, yl + 2, ql, C.bleu, 2);
        seg(ctx, cx, yl + 2, cx + w/2 - 2, yl - 3, ql, C.bleu, 2);
        fleche(ctx, cx + w, yl + 40, cx + w*0.62, yl + 3, et(0.55, 0.3, p), C.jaune, 2);
        txt(ctx, "on lit ICI :", cx + w * 1.5, yl + 46, et(0.6, 0.25, p), C.jaune, 15, SANS);
        txt(ctx, "le bas du ménisque", cx + w * 1.6, yl + 68, et(0.64, 0.25, p), C.jaune, 15, SANS);
      }
      txt(ctx, 'éprouvette graduée', cx, bas + 28, et(0.3, 0.2, p), C.doux, 15, SANS);

      puces(ctx, W * 0.56, H * 0.34, [
        { t: "Symbole : V.   Unités : le litre (L) et le mètre cube (m³).", c: C.blanc },
        { t: "1 L = 1 dm³      1 mL = 1 cm³", c: C.jaune, f: MONO, s: 19 },
        { t: "1 L = 1 000 mL = 1 000 cm³", c: C.jaune, f: MONO, s: 19 },
        { t: "1 m³ = 1 000 L", c: C.jaune, f: MONO, s: 19 },
        { t: "Œil à hauteur de la surface, sinon la lecture est faussée.", c: C.doux },
      ], p, { debut: 0.3, pas: 0.12, dy: 44, s: 17 });
    }
  },

  { caption: "Pour un solide qui ne se dissout pas, on mesure le volume par déplacement d'eau : le volume du solide est la différence des deux lectures.",
    label: "Déplacement d'eau",
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MÉTHODE', "Le volume d'un solide", p, C.vert);
      const bas = H * 0.72, w = W * 0.11, h = H * 0.36;
      const x1 = W * 0.26, x2 = W * 0.58;

      /* Avant : eau seule. */
      becher(ctx, x1, bas, w, h, et(0.05, 0.25, p), { bec: false, niveau: 0.45, debutLiquide: 0.18, liquide: 'rgba(130,200,230,0.22)' });
      txt(ctx, 'V₁ = 50 mL', x1, bas + 34, et(0.3, 0.25, p), C.bleu, 18, MONO);
      txt(ctx, "eau seule", x1, bas + 58, et(0.34, 0.2, p), C.doux, 14, SANS);

      /* Après : on y plonge le solide, le niveau monte. */
      becher(ctx, x2, bas, w, h, et(0.2, 0.25, p), { bec: false, niveau: 0.66, debutLiquide: 0.38, liquide: 'rgba(130,200,230,0.22)' });
      const qs = et(0.45, 0.3, p);
      if (qs > 0) {
        cadre(ctx, x2 - 20, bas - 34, 40, 30, qs, C.rouge, 2);
        txt(ctx, 'solide', x2, bas - 19, et(0.55, 0.25, p), C.rouge, 13, SANS);
      }
      txt(ctx, 'V₂ = 68 mL', x2, bas + 34, et(0.6, 0.25, p), C.bleu, 18, MONO);
      txt(ctx, "eau + solide", x2, bas + 58, et(0.64, 0.2, p), C.doux, 14, SANS);

      fleche(ctx, x1 + w, bas - h*0.6, x2 - w, bas - h*0.6, et(0.4, 0.25, p), C.doux, 2);

      encadre(ctx, W*0.5, H*0.90, W*0.66, H*0.14,
              'V(solide) = V₂ − V₁ = 68 − 50 = 18 mL', et(0.72, 0.28, p), C.or, 21);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'Masse et volume',
    body: [
      { t: "Masse m : ce que contient l'objet — balance, en g ou kg.", c: C.blanc },
      { t: "Volume V : la place occupée — éprouvette, en mL ou L.", c: C.blanc },
      { t: "1 L = 1 dm³ = 1 000 mL = 1 000 cm³", c: C.jaune, f: MONO, s: 20 },
      { t: "Solide non soluble : V = V₂ − V₁ (déplacement d'eau).", c: C.vert },
    ],
    encadre: '1 mL = 1 cm³',
    caption: 'Deux grandeurs, deux instruments, et des unités qui se répondent.'
  }),

]}));

LECONS.push(lecon({
  id: 'pc_masse_2', chapitre: CH2, niveau: '4ème',
  titre: 'La masse volumique',
  desc: "Pourquoi le fer coule et le bois flotte : ρ = m / V, la grandeur qui compare masse et volume.",
  steps: [

  { caption: "Deux cubes de même taille, mais pas de même masse : le volume seul ne dit pas tout. Il faut une grandeur qui compare les deux.",
    label: 'Le problème',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, "L'IDÉE", 'Même volume, masses différentes', p);
      const cote = Math.min(W * 0.14, H * 0.24);
      const y = H * 0.44;

      /* Cube de bois : peu de particules dans le même espace. */
      cadre(ctx, W*0.26 - cote/2, y - cote/2, cote, cote, et(0.05, 0.3, p), C.vert, 2.4);
      particules(ctx, W*0.26 - cote/2, y - cote/2, cote, cote, 'solide', p, { cols: 3, lignes: 3, r: 7, c: C.vert, seed: 2 });
      txt(ctx, 'BOIS', W*0.26, y + cote*0.78, et(0.3, 0.2, p), C.vert, 18, MONO);
      txt(ctx, '1 dm³', W*0.26, y + cote*0.78 + 26, et(0.34, 0.2, p), C.doux, 15, MONO);

      /* Cube de fer : beaucoup plus de matière dans le même espace. */
      cadre(ctx, W*0.66 - cote/2, y - cote/2, cote, cote, et(0.2, 0.3, p), C.rouge, 2.4);
      particules(ctx, W*0.66 - cote/2, y - cote/2, cote, cote, 'solide', p, { cols: 6, lignes: 6, r: 6, c: C.rouge, seed: 8 });
      txt(ctx, 'FER', W*0.66, y + cote*0.78, et(0.45, 0.2, p), C.rouge, 18, MONO);
      txt(ctx, '1 dm³', W*0.66, y + cote*0.78 + 26, et(0.48, 0.2, p), C.doux, 15, MONO);

      balance(ctx, W*0.26, H*0.90, et(0.6, 0.28, p), '700 g', { label: 'masse mesurée' });
      balance(ctx, W*0.66, H*0.90, et(0.68, 0.28, p), '7 800 g', { label: 'masse mesurée' });

      txt(ctx, "Même volume, plus de matière tassée dedans : le fer est plus DENSE.",
          W*0.5, H*0.71, et(0.8, 0.2, p), C.or, 18, SANS);
    }
  },

  { caption: "La masse volumique ρ est la masse d'une unité de volume. On la calcule en divisant la masse par le volume.",
    label: 'La formule',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'DÉFINITION', 'La masse volumique', p, C.jaune);
      encadre(ctx, W * 0.30, H * 0.40, W * 0.40, H * 0.18, 'ρ  =  m / V', et(0.08, 0.3, p), C.or, 34);
      puces(ctx, W * 0.11, H * 0.60, [
        { t: "ρ  (rhô) : masse volumique, en g/cm³ ou kg/m³", c: C.jaune, f: MONO, s: 17 },
        { t: "m  : masse, en g ou en kg", c: C.blanc, f: MONO, s: 17 },
        { t: "V  : volume, en cm³ ou en m³", c: C.blanc, f: MONO, s: 17 },
        { t: "Les unités de m et V doivent aller ensemble.", c: C.rouge, s: 16 },
      ], p, { debut: 0.35, pas: 0.12, dy: 38 });

      /* Le triangle donne les trois formes de la formule d'un coup d'œil. */
      triangleFormule(ctx, W * 0.75, H * 0.48, Math.min(W*0.13, H*0.22), 'm', 'ρ', 'V', et(0.45, 0.5, p));
      puces(ctx, W * 0.62, H * 0.80, [
        { t: "on cache m  →  m = ρ × V", c: C.doux, f: MONO, s: 16 },
        { t: "on cache V  →  V = m / ρ", c: C.doux, f: MONO, s: 16 },
      ], p, { debut: 0.8, pas: 0.08, dy: 30 });
    }
  },

  { caption: "Un exemple complet : on mesure, on divise, on conclut. Attention à toujours écrire l'unité.",
    label: 'Exemple guidé',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'EXEMPLE', "Un caillou de 18 cm³ pèse 47 g", p, C.vert);
      const x = W * 0.16;
      puces(ctx, x, H * 0.34, [
        { t: "1.  Ce que l'on sait :   m = 47 g   et   V = 18 cm³", c: C.blanc, f: MONO, s: 18 },
        { t: "2.  Formule :   ρ = m / V", c: C.jaune, f: MONO, s: 18 },
        { t: "3.  On remplace :   ρ = 47 / 18", c: C.blanc, f: MONO, s: 18 },
        { t: "4.  On calcule :   ρ ≈ 2,6 g/cm³", c: C.vert, f: MONO, s: 20 },
        { t: "5.  On conclut : cette valeur est celle du granite.", c: C.doux, s: 17 },
      ], p, { debut: 0.15, pas: 0.15, dy: 52 });
      encadre(ctx, W * 0.5, H * 0.88, W * 0.62, H * 0.13,
              'chaque cm³ de ce caillou pèse 2,6 g', et(0.85, 0.15, p), C.or, 19, SANS);
    }
  },

  { caption: "Quelques valeurs de référence à connaître : l'eau sert de repère central, avec 1 g/cm³.",
    label: 'Valeurs repères',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'REPÈRES', 'Des masses volumiques à connaître', p);
      tableau(ctx, W * 0.16, H * 0.32, W * 0.68,
        [ { t: 'MATÉRIAU' }, { t: 'ρ en g/cm³' }, { t: 'ρ en kg/m³' } ],
        [
          [ 'Air',    { t: '0,0013', c: C.doux },  { t: '1,3',   c: C.doux } ],
          [ 'Bois (pin)', { t: '0,5', c: C.vert }, { t: '500',   c: C.vert } ],
          [ 'Huile',  { t: '0,9',    c: C.vert },  { t: '900',   c: C.vert } ],
          [ 'EAU',    { t: '1,0',    c: C.jaune, s: 19 }, { t: '1 000', c: C.jaune, s: 19 } ],
          [ 'Aluminium', { t: '2,7', c: C.rouge }, { t: '2 700', c: C.rouge } ],
          [ 'Fer',    { t: '7,8',    c: C.rouge }, { t: '7 800', c: C.rouge } ],
        ], p, { dy: 44 });
      txt(ctx, "Passer de g/cm³ à kg/m³ : on multiplie par 1 000.",
          W * 0.5, H * 0.93, et(0.85, 0.15, p), C.or, 17, SANS);
    }
  },

  { caption: "Flotte ou coule ? Il suffit de comparer la masse volumique du corps à celle du liquide.",
    label: 'Flotter ou couler',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'APPLICATION', 'Flotte ou coule ?', p, C.bleu);
      const bas = H * 0.78, w = W * 0.34, h = H * 0.38, cx = W * 0.32;
      becher(ctx, cx, bas, w, h, et(0.05, 0.25, p), { bec: false, niveau: 0.78, debutLiquide: 0.15, liquide: 'rgba(130,200,230,0.20)' });
      const yl = bas - h * 0.78;
      txt(ctx, 'eau   ρ = 1,0', cx - w*0.3, yl - 16, et(0.3, 0.2, p), C.bleu, 15, MONO);

      /* Le bois flotte, à demi émergé ; le fer repose au fond. */
      const qb = et(0.35, 0.3, p);
      cadre(ctx, cx - 76, yl - 14, 54, 30, qb, C.vert, 2);
      txt(ctx, 'bois 0,5', cx - 49, yl + 1, et(0.45, 0.25, p), C.vert, 13, SANS);
      const qf = et(0.5, 0.3, p);
      cadre(ctx, cx + 26, bas - 34, 48, 28, qf, C.rouge, 2);
      txt(ctx, 'fer 7,8', cx + 50, bas - 20, et(0.6, 0.25, p), C.rouge, 13, SANS);

      puces(ctx, W * 0.60, H * 0.40, [
        { t: "ρ(corps) < ρ(liquide)   →   il FLOTTE", c: C.vert, f: MONO, s: 18 },
        { t: "ρ(corps) > ρ(liquide)   →   il COULE", c: C.rouge, f: MONO, s: 18 },
        { t: "Cela ne dépend ni de la taille, ni de la masse seule :", c: C.doux, s: 16 },
        { t: "un paquebot d'acier flotte, un clou coule.", c: C.doux, s: 16 },
      ], p, { debut: 0.55, pas: 0.12, dy: 46 });
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'La masse volumique',
    body: [
      { t: "ρ = m / V : la masse contenue dans une unité de volume.", c: C.blanc },
      { t: "Unités : g/cm³ ou kg/m³ (× 1 000 pour passer de l'une à l'autre).", c: C.doux },
      { t: "Eau : 1 g/cm³ = 1 000 kg/m³ — le repère à mémoriser.", c: C.jaune },
      { t: "Elle identifie un matériau : deux échantillons du même corps", c: C.doux },
      { t: "ont la même masse volumique, quelle que soit leur taille.", c: C.doux },
    ],
    encadre: 'ρ = m / V',
    caption: 'La masse volumique compare la masse au volume : elle identifie la matière.'
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   CHAPITRE 3 — MÉLANGES ET SOLUTIONS
   ══════════════════════════════════════════════════════════════════════ */

const CH3 = 'Mélanges et solutions';

/* Entonnoir + papier filtre : le schéma de la filtration. */
function entonnoir(ctx, cx, y, w, h, p, c) {
  seg(ctx, cx - w/2, y, cx, y + h, et(0, 0.3, p), c || C.blanc, 2.2);
  seg(ctx, cx + w/2, y, cx, y + h, et(0.05, 0.3, p), c || C.blanc, 2.2);
  seg(ctx, cx - 7, y + h, cx - 7, y + h + 26, et(0.2, 0.2, p), c || C.blanc, 2.2);
  seg(ctx, cx + 7, y + h, cx + 7, y + h + 26, et(0.22, 0.2, p), c || C.blanc, 2.2);
  /* Le papier filtre, en pointillés à l'intérieur. */
  ctx.save(); ctx.setLineDash([4, 5]);
  seg(ctx, cx - w*0.36, y + h*0.22, cx, y + h*0.86, et(0.3, 0.25, p), C.doux, 1.6);
  seg(ctx, cx + w*0.36, y + h*0.22, cx, y + h*0.86, et(0.33, 0.25, p), C.doux, 1.6);
  ctx.setLineDash([]); ctx.restore();
}

LECONS.push(lecon({
  id: 'pc_melanges_1', chapitre: CH3, niveau: '5ème',
  titre: 'Mélanges et techniques de séparation',
  desc: "Homogène ou hétérogène, puis décantation, filtration et distillation : chaque mélange a sa méthode.",
  steps: [

  { caption: "Un mélange hétérogène laisse voir ses constituants ; un mélange homogène n'en laisse voir aucun, même s'ils sont bien là.",
    label: 'Deux familles',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CLASSER UN MÉLANGE', 'Peut-on distinguer les constituants ?', p);
      const bas = H * 0.68, w = W * 0.16, h = H * 0.30;
      const xg = W * 0.28, xd = W * 0.70;

      /* Hétérogène : de l'eau et du sable qui se voit au fond. */
      becher(ctx, xg, bas, w, h, et(0.05, 0.25, p), { niveau: 0.72, debutLiquide: 0.15, liquide: 'rgba(130,200,230,0.18)' });
      const qs = et(0.3, 0.3, p);
      if (qs > 0) {
        const rnd = graine(31);
        for (let i = 0; i < 22; i++) {
          bille(ctx, xg - w*0.4 + rnd() * w * 0.8, bas - 6 - rnd() * 18, 4, qs, C.rouge);
        }
      }
      txt(ctx, 'HÉTÉROGÈNE', xg, bas + 36, et(0.35, 0.25, p), C.rouge, 19, MONO);
      txt(ctx, "eau + sable : on voit deux constituants", xg, bas + 62, et(0.4, 0.25, p), C.doux, 15, SANS);

      /* Homogène : le sirop est dissous, on ne voit plus qu'un liquide. */
      becher(ctx, xd, bas, w, h, et(0.15, 0.25, p), { niveau: 0.72, debutLiquide: 0.3, liquide: 'rgba(230,130,110,0.20)', liquide2: C.rouge });
      txt(ctx, 'HOMOGÈNE', xd, bas + 36, et(0.5, 0.25, p), C.vert, 19, MONO);
      txt(ctx, "eau + sirop : un seul liquide visible", xd, bas + 62, et(0.55, 0.25, p), C.doux, 15, SANS);

      txt(ctx, "Homogène ne veut pas dire pur : le sucre est toujours là, simplement dispersé en particules invisibles.",
          W*0.5, H*0.92, et(0.72, 0.25, p), C.or, 16, SANS);
    }
  },

  { caption: "La décantation : on laisse reposer. Le constituant le plus dense se dépose au fond, on transvase délicatement le reste.",
    label: 'Décantation',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'TECHNIQUE 1', 'La décantation', p, C.bleu);
      const bas = H * 0.72, w = W * 0.13, h = H * 0.30;
      const x1 = W * 0.24, x2 = W * 0.52, x3 = W * 0.80;

      /* Trois temps : trouble → dépôt → transvasement. */
      becher(ctx, x1, bas, w, h, et(0.03, 0.2, p), { niveau: 0.7, debutLiquide: 0.1, liquide: 'rgba(200,185,122,0.22)', liquide2: C.or });
      txt(ctx, 'on agite', x1, bas + 34, et(0.2, 0.2, p), C.doux, 15, SANS);
      txt(ctx, 'mélange trouble', x1, bas + 56, et(0.24, 0.2, p), C.doux, 14, SANS);

      becher(ctx, x2, bas, w, h, et(0.25, 0.2, p), { niveau: 0.7, debutLiquide: 0.32, liquide: 'rgba(130,200,230,0.18)' });
      const qd = et(0.45, 0.25, p);
      if (qd > 0) {
        aplat(ctx, [{x:x2-w/2+2,y:bas-16},{x:x2+w/2-2,y:bas-16},{x:x2+w/2-2,y:bas-2},{x:x2-w/2+2,y:bas-2}], qd, 'rgba(230,130,110,0.35)');
        txt(ctx, 'dépôt', x2, bas - 30, et(0.55, 0.2, p), C.rouge, 14, SANS);
      }
      txt(ctx, 'on attend', x2, bas + 34, et(0.5, 0.2, p), C.doux, 15, SANS);
      txt(ctx, 'le plus dense tombe', x2, bas + 56, et(0.54, 0.2, p), C.doux, 14, SANS);

      becher(ctx, x3, bas, w, h, et(0.6, 0.2, p), { niveau: 0.55, debutLiquide: 0.68, liquide: 'rgba(130,200,230,0.18)' });
      txt(ctx, 'on transvase', x3, bas + 34, et(0.75, 0.2, p), C.vert, 15, SANS);
      txt(ctx, 'liquide clarifié', x3, bas + 56, et(0.78, 0.2, p), C.doux, 14, SANS);

      fleche(ctx, x1 + w*0.8, bas - h*0.5, x2 - w*0.8, bas - h*0.5, et(0.35, 0.2, p), C.doux, 1.8);
      fleche(ctx, x2 + w*0.8, bas - h*0.5, x3 - w*0.8, bas - h*0.5, et(0.65, 0.2, p), C.doux, 1.8);
      txt(ctx, "Simple, mais elle ne retire jamais tout : il reste des particules en suspension.",
          W*0.5, H*0.93, et(0.85, 0.15, p), C.or, 16, SANS);
    }
  },

  { caption: "La filtration retient le solide dans le papier filtre. Ce qui passe est le filtrat ; ce qui reste est le résidu.",
    label: 'Filtration',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'TECHNIQUE 2', 'La filtration', p, C.vert);
      const cx = W * 0.40, ye = H * 0.30, we = W * 0.17, he = H * 0.22;
      entonnoir(ctx, cx, ye, we, he, et(0.05, 0.35, p));

      /* Le mélange versé dans l'entonnoir. */
      const qm = et(0.3, 0.25, p);
      if (qm > 0) {
        aplat(ctx, [{x:cx-we*0.42,y:ye+he*0.28},{x:cx+we*0.42,y:ye+he*0.28},{x:cx,y:ye+he*0.9}], qm, 'rgba(200,185,122,0.28)');
        txt(ctx, 'mélange', cx, ye - 18, et(0.35, 0.2, p), C.or, 15, SANS);
      }
      /* Les gouttes qui tombent, et le bécher qui recueille. */
      for (let i = 0; i < 3; i++) {
        const q = et(0.45 + i * 0.08, 0.3, p);
        if (q > 0) bille(ctx, cx, ye + he + 34 + i * 26, 3.5, q, C.bleu);
      }
      becher(ctx, cx, H * 0.82, W * 0.14, H * 0.16, et(0.45, 0.25, p), { niveau: 0.5, debutLiquide: 0.6, liquide: 'rgba(130,200,230,0.20)' });

      fleche(ctx, cx + we*0.75, ye + he*0.4, cx + we*0.3, ye + he*0.45, et(0.6, 0.25, p), C.rouge, 1.8);
      txt(ctx, 'RÉSIDU', cx + we*1.35, ye + he*0.34, et(0.65, 0.25, p), C.rouge, 17, MONO);
      txt(ctx, 'retenu par le filtre', cx + we*1.35, ye + he*0.34 + 24, et(0.68, 0.25, p), C.doux, 14, SANS);

      fleche(ctx, cx - we*1.1, H*0.80, cx - W*0.075, H*0.80, et(0.7, 0.25, p), C.bleu, 1.8);
      txt(ctx, 'FILTRAT', cx - we*1.5, H*0.76, et(0.75, 0.25, p), C.bleu, 17, MONO);
      txt(ctx, 'liquide limpide', cx - we*1.5, H*0.76 + 24, et(0.78, 0.25, p), C.doux, 14, SANS);

      txt(ctx, "Le filtrat reste un mélange : ce qui était dissous traverse le filtre.",
          W*0.5, H*0.95, et(0.86, 0.14, p), C.or, 16, SANS);
    }
  },

  { caption: "La distillation sépare l'eau de ce qui y est dissous : on vaporise, puis on refroidit la vapeur pour la récupérer liquide.",
    label: 'Distillation',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'TECHNIQUE 3', 'La distillation', p, C.rouge);
      const bx = W * 0.22, by = H * 0.58;

      /* Ballon chauffé. */
      cercle(ctx, bx, by, 46, et(0.05, 0.25, p), C.blanc, 2.2);
      const ql = et(0.15, 0.25, p);
      if (ql > 0) aplat(ctx, [{x:bx-40,y:by+8},{x:bx+40,y:by+8},{x:bx+30,y:by+44},{x:bx-30,y:by+44}], ql, 'rgba(200,185,122,0.26)');
      seg(ctx, bx - 14, by - 46, bx - 14, by - 76, et(0.2, 0.2, p), C.blanc, 2);
      seg(ctx, bx + 14, by - 46, bx + 14, by - 76, et(0.22, 0.2, p), C.blanc, 2);
      txt(ctx, 'eau salée', bx, by + 68, et(0.25, 0.2, p), C.or, 15, SANS);
      /* Flamme. */
      const qf = et(0.28, 0.25, p);
      seg(ctx, bx - 16, by + 82, bx, by + 58, qf, C.rouge, 2);
      seg(ctx, bx + 16, by + 82, bx, by + 58, qf, C.rouge, 2);

      /* Tube incliné vers le réfrigérant. */
      seg(ctx, bx + 14, by - 76, W*0.52, H*0.30, et(0.35, 0.25, p), C.blanc, 2);
      seg(ctx, W*0.52, H*0.30, W*0.68, H*0.46, et(0.42, 0.25, p), C.blanc, 2);
      seg(ctx, W*0.52, H*0.36, W*0.72, H*0.52, et(0.44, 0.25, p), C.blanc, 2);
      txt(ctx, 'réfrigérant', W*0.60, H*0.32, et(0.5, 0.2, p), C.bleu, 15, SANS);
      txt(ctx, '(on refroidit)', W*0.60, H*0.36, et(0.53, 0.2, p), C.doux, 13, SANS);

      /* Vapeur qui monte, distillat qui tombe. */
      for (let i = 0; i < 4; i++) {
        const q = et(0.35 + i * 0.05, 0.3, p);
        if (q > 0) bille(ctx, bx + 14 + i * 24, by - 84 - i * 16, 4, q, C.jaune);
      }
      becher(ctx, W*0.76, H*0.84, W*0.12, H*0.16, et(0.6, 0.25, p), { niveau: 0.45, debutLiquide: 0.72, liquide: 'rgba(130,200,230,0.22)' });
      txt(ctx, 'DISTILLAT', W*0.76, H*0.90, et(0.78, 0.2, p), C.bleu, 16, MONO);
      txt(ctx, 'eau pure', W*0.76, H*0.94, et(0.82, 0.2, p), C.doux, 14, SANS);
      txt(ctx, 'le sel reste dans le ballon', bx + 20, H*0.92, et(0.86, 0.14, p), C.rouge, 15, SANS);
    }
  },

  { caption: "Choisir la bonne technique, c'est d'abord regarder le mélange : est-il homogène, et que veut-on récupérer ?",
    label: 'Quelle technique ?',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'SYNTHÈSE', 'La technique selon le mélange', p);
      tableau(ctx, W * 0.08, H * 0.34, W * 0.84,
        [ { t: 'TECHNIQUE' }, { t: 'MÉLANGE' }, { t: 'CE QU’ELLE SÉPARE' } ],
        [
          [ { t: 'Décantation', c: C.bleu, s: 17 },  'hétérogène', 'un solide (ou un liquide) plus dense' ],
          [ { t: 'Filtration', c: C.vert, s: 17 },   'hétérogène', 'un solide insoluble d’un liquide' ],
          [ { t: 'Distillation', c: C.rouge, s: 17 },'homogène',   'le solvant de ce qui y est dissous' ],
        ], p, { dy: 56 });
      txt(ctx, "Retenir la règle : filtration et décantation ne marchent QUE sur un mélange hétérogène.",
          W*0.5, H*0.82, et(0.7, 0.25, p), C.or, 17, SANS);
      txt(ctx, "Pour séparer ce qui est dissous, il faut changer d'état : c'est la distillation.",
          W*0.5, H*0.88, et(0.82, 0.18, p), C.doux, 16, SANS);
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_melanges_2', chapitre: CH3, niveau: '4ème',
  titre: 'Dissolution et concentration',
  desc: "Soluté, solvant, saturation, concentration massique : ce qui se passe quand un solide disparaît dans l'eau.",
  steps: [

  { caption: "Trois mots à ne pas confondre : le soluté se dissout, le solvant dissout, et l'ensemble forme la solution.",
    label: 'Le vocabulaire',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'VOCABULAIRE', 'Soluté, solvant, solution', p, C.jaune);
      const bas = H * 0.72, w = W * 0.15, h = H * 0.28;
      const x1 = W * 0.20, x2 = W * 0.46, x3 = W * 0.78;

      /* Le sel, puis l'eau, puis l'eau salée. */
      const q1 = et(0.05, 0.3, p);
      const rnd = graine(12);
      for (let i = 0; i < 16; i++) bille(ctx, x1 - 34 + rnd() * 68, bas - 8 - rnd() * 26, 4, q1, C.blanc);
      txt(ctx, 'SOLUTÉ', x1, bas + 34, et(0.15, 0.2, p), C.blanc, 18, MONO);
      txt(ctx, 'le sel (solide)', x1, bas + 58, et(0.18, 0.2, p), C.doux, 15, SANS);

      becher(ctx, x2, bas, w, h, et(0.25, 0.25, p), { niveau: 0.6, debutLiquide: 0.35, liquide: 'rgba(130,200,230,0.20)' });
      txt(ctx, 'SOLVANT', x2, bas + 34, et(0.4, 0.2, p), C.bleu, 18, MONO);
      txt(ctx, "l'eau (liquide)", x2, bas + 58, et(0.43, 0.2, p), C.doux, 15, SANS);

      txt(ctx, '+', W*0.33, bas - h*0.4, et(0.3, 0.2, p), C.doux, 30, SANS);
      fleche(ctx, x2 + w*0.75, bas - h*0.4, x3 - w*0.85, bas - h*0.4, et(0.5, 0.25, p), C.jaune, 2.2);

      becher(ctx, x3, bas, w, h, et(0.55, 0.25, p), { niveau: 0.62, debutLiquide: 0.66, liquide: 'rgba(130,210,160,0.22)', liquide2: C.vert });
      txt(ctx, 'SOLUTION', x3, bas + 34, et(0.72, 0.2, p), C.vert, 18, MONO);
      txt(ctx, "l'eau salée (homogène)", x3, bas + 58, et(0.75, 0.2, p), C.doux, 15, SANS);

      txt(ctx, "Le soluté n'a pas disparu : il est dispersé en particules trop petites pour être vues.",
          W*0.5, H*0.93, et(0.85, 0.15, p), C.or, 16, SANS);
    }
  },

  { caption: "Au niveau des particules : le solide se défait, ses particules se glissent entre celles de l'eau. Rien ne se perd : la masse totale est conservée.",
    label: 'Conservation de la masse',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'DISSOLUTION', 'La masse ne change pas', p, C.vert);
      const bas = H * 0.62, w = W * 0.14, h = H * 0.24;
      const xg = W * 0.26, xd = W * 0.70;

      /* Avant : le sel au fond, en tas. */
      becher(ctx, xg, bas, w, h, et(0.05, 0.25, p), { niveau: 0.62, debutLiquide: 0.12, liquide: 'rgba(130,200,230,0.18)' });
      const rnd = graine(44);
      for (let i = 0; i < 14; i++) bille(ctx, xg - 26 + rnd() * 52, bas - 8 - rnd() * 14, 4, et(0.22, 0.25, p), C.blanc);
      txt(ctx, 'avant : le sel est visible', xg, bas + 32, et(0.3, 0.2, p), C.doux, 15, SANS);

      /* Après : les particules dispersées dans tout le liquide. */
      becher(ctx, xd, bas, w, h, et(0.2, 0.25, p), { niveau: 0.62, debutLiquide: 0.3, liquide: 'rgba(130,210,160,0.20)', liquide2: C.vert });
      const qa = et(0.45, 0.35, p);
      const rnd2 = graine(77);
      for (let i = 0; i < 18; i++) {
        bille(ctx, xd - w*0.42 + rnd2() * w * 0.84, bas - 6 - rnd2() * h * 0.58, 3, qa, C.blanc);
      }
      txt(ctx, 'après : dispersé, mais présent', xd, bas + 32, et(0.6, 0.2, p), C.doux, 15, SANS);
      fleche(ctx, xg + w*0.85, bas - h*0.5, xd - w*0.9, bas - h*0.5, et(0.38, 0.25, p), C.jaune, 2.2);
      txt(ctx, 'on agite', W*0.48, bas - h*0.5 - 22, et(0.44, 0.2, p), C.jaune, 15, SANS);

      balance(ctx, xg, H*0.90, et(0.68, 0.28, p), '112 g', { label: 'eau + sel, avant' });
      balance(ctx, xd, H*0.90, et(0.78, 0.28, p), '112 g', { label: 'solution, après' });
      txt(ctx, 'la dissolution conserve la masse', W*0.5, H*0.72, et(0.86, 0.14, p), C.vert, 19, MONO);
    }
  },

  { caption: "On ne peut pas dissoudre indéfiniment : passé une certaine quantité, le surplus reste au fond. La solution est saturée.",
    label: 'La saturation',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'LIMITE', 'La solution saturée', p, C.rouge);
      const bas = H * 0.72, w = W * 0.14, h = H * 0.30;
      const xs = [W * 0.22, W * 0.5, W * 0.78];
      const doses = ['1 cuillère', '3 cuillères', '10 cuillères'];
      const etats = ['tout se dissout', 'tout se dissout encore', 'le surplus reste au fond'];
      const cs = [C.vert, C.vert, C.rouge];

      xs.forEach((x, k) => {
        becher(ctx, x, bas, w, h, et(0.05 + k * 0.12, 0.25, p), {
          niveau: 0.62, debutLiquide: 0.2 + k * 0.1,
          liquide: k === 2 ? 'rgba(230,130,110,0.20)' : 'rgba(130,210,160,0.18)',
          liquide2: k === 2 ? C.rouge : C.vert
        });
        /* Le dépôt n'apparaît que dans le dernier bécher. */
        if (k === 2) {
          const q = et(0.55, 0.3, p);
          if (q > 0) {
            const rnd = graine(90);
            for (let i = 0; i < 16; i++) bille(ctx, x - w*0.38 + rnd() * w * 0.76, bas - 6 - rnd() * 16, 4, q, C.blanc);
            txt(ctx, 'dépôt', x, bas - 30, et(0.66, 0.2, p), C.rouge, 14, SANS);
          }
        }
        txt(ctx, doses[k], x, bas + 32, et(0.3 + k * 0.1, 0.2, p), C.jaune, 16, SANS);
        txt(ctx, etats[k], x, bas + 56, et(0.34 + k * 0.1, 0.2, p), cs[k], 14, SANS);
      });

      txt(ctx, "La solution est SATURÉE : elle ne peut plus rien dissoudre à cette température.",
          W*0.5, H*0.89, et(0.75, 0.2, p), C.rouge, 17, SANS);
      txt(ctx, "En chauffant, on peut souvent en dissoudre davantage.",
          W*0.5, H*0.95, et(0.85, 0.15, p), C.doux, 16, SANS);
    }
  },

  { caption: "La concentration massique indique combien de soluté se trouve dans un litre de solution.",
    label: 'La concentration',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'FORMULE', 'La concentration massique', p, C.jaune);
      encadre(ctx, W * 0.5, H * 0.34, W * 0.46, H * 0.15, 'C  =  m / V', et(0.05, 0.3, p), C.or, 32);
      puces(ctx, W * 0.18, H * 0.50, [
        { t: "C : concentration, en g/L", c: C.jaune, f: MONO, s: 18 },
        { t: "m : masse de soluté dissous, en g", c: C.blanc, f: MONO, s: 18 },
        { t: "V : volume de SOLUTION, en L", c: C.blanc, f: MONO, s: 18 },
      ], p, { debut: 0.3, pas: 0.1, dy: 38 });

      const q = et(0.62, 0.35, p);
      if (q > 0) {
        seg(ctx, W*0.12, H*0.70, W*0.88, H*0.70, q, 'rgba(240,236,224,0.18)', 1.4);
        txt(ctx, "Exemple :  on dissout 30 g de sel dans 0,5 L d'eau", W*0.5, H*0.77, et(0.66, 0.25, p), C.doux, 18, SANS);
        txt(ctx, "C = 30 / 0,5 = 60 g/L", W*0.5, H*0.86, et(0.78, 0.22, p), C.vert, 24, MONO);
        txt(ctx, "chaque litre de cette solution contient 60 g de sel", W*0.5, H*0.93, et(0.88, 0.12, p), C.or, 15, SANS);
      }
    }
  },

  { caption: "Diluer, c'est ajouter du solvant : la masse de soluté ne change pas, mais le volume augmente — donc la concentration baisse.",
    label: 'La dilution',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'DILUER', 'Plus d’eau, moins concentré', p, C.bleu);
      const bas = H * 0.70, h = H * 0.30;
      const xg = W * 0.28, xd = W * 0.70;

      becher(ctx, xg, bas, W*0.12, h, et(0.05, 0.25, p), { niveau: 0.42, debutLiquide: 0.15, liquide: 'rgba(230,130,110,0.34)', liquide2: C.rouge });
      const rnd = graine(55);
      for (let i = 0; i < 14; i++) bille(ctx, xg - W*0.05 + rnd() * W * 0.1, bas - 8 - rnd() * h * 0.34, 3.5, et(0.25, 0.3, p), C.blanc);
      txt(ctx, 'C = 60 g/L', xg, bas + 34, et(0.35, 0.2, p), C.rouge, 18, MONO);
      txt(ctx, '30 g de sel · 0,5 L', xg, bas + 58, et(0.38, 0.2, p), C.doux, 14, SANS);

      becher(ctx, xd, bas, W*0.16, h, et(0.3, 0.25, p), { niveau: 0.72, debutLiquide: 0.45, liquide: 'rgba(230,130,110,0.16)', liquide2: C.rouge });
      const rnd2 = graine(55);
      for (let i = 0; i < 14; i++) bille(ctx, xd - W*0.07 + rnd2() * W * 0.14, bas - 8 - rnd2() * h * 0.62, 3.5, et(0.55, 0.3, p), C.blanc);
      txt(ctx, 'C = 20 g/L', xd, bas + 34, et(0.7, 0.2, p), C.vert, 18, MONO);
      txt(ctx, '30 g de sel · 1,5 L', xd, bas + 58, et(0.73, 0.2, p), C.doux, 14, SANS);

      fleche(ctx, xg + W*0.08, bas - h*0.6, xd - W*0.10, bas - h*0.6, et(0.45, 0.25, p), C.bleu, 2.2);
      txt(ctx, "on ajoute 1 L d'eau", W*0.5, bas - h*0.6 - 24, et(0.5, 0.2, p), C.bleu, 16, SANS);
      txt(ctx, "Même nombre de particules de sel, réparties dans plus d'eau.",
          W*0.5, H*0.92, et(0.82, 0.18, p), C.or, 16, SANS);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'Solutions et concentration',
    body: [
      { t: "Soluté + solvant = solution (mélange homogène).", c: C.blanc },
      { t: "Dissoudre ne détruit rien : la masse totale se conserve.", c: C.vert },
      { t: "Au-delà d'une certaine masse, la solution est saturée.", c: C.rouge },
      { t: "C = m / V, en g/L : la masse de soluté par litre de solution.", c: C.jaune, f: MONO },
      { t: "Diluer : on ajoute du solvant, la concentration diminue.", c: C.doux },
    ],
    encadre: 'C = m / V   (g/L)',
    caption: "Une solution se décrit par ce qu'elle contient : sa concentration."
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   CHAPITRE 4 — TRANSFORMATIONS CHIMIQUES
   ══════════════════════════════════════════════════════════════════════ */

const CH4C = 'Transformations chimiques';

LECONS.push(lecon({
  id: 'pc_transfo_1', chapitre: CH4C, niveau: '4ème',
  titre: 'Transformation physique ou chimique ?',
  desc: "La question qui décide de tout : les molécules ont-elles seulement changé de place, ou changé de nature ?",
  steps: [

  { caption: "Une transformation physique change l'état ou la forme, mais pas les molécules : la glace fondue reste de l'eau.",
    label: 'Transformation physique',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CAS 1', 'La transformation physique', p, C.bleu);
      const y = H * 0.48, ech = Math.min(W * 0.09, H * 0.16);

      /* Avant : molécules d'eau rangées. Après : les mêmes, désordonnées. */
      cadre(ctx, W*0.10, y - H*0.16, W*0.26, H*0.32, et(0.03, 0.25, p), C.doux, 1.6);
      molecule(ctx, W*0.17, y - H*0.06, ech, MOL.H2O, et(0.1, 0.3, p), { lc: C.doux });
      molecule(ctx, W*0.29, y + H*0.06, ech, MOL.H2O, et(0.16, 0.3, p), { lc: C.doux });
      txt(ctx, 'glace', W*0.23, y + H*0.21, et(0.25, 0.2, p), C.bleu, 17, MONO);

      fleche(ctx, W*0.39, y, W*0.57, y, et(0.35, 0.3, p), C.rouge, 2.4);
      txt(ctx, 'on chauffe', W*0.48, y - 24, et(0.42, 0.2, p), C.rouge, 16, SANS);
      txt(ctx, 'FUSION', W*0.48, y + 28, et(0.46, 0.2, p), C.doux, 15, MONO);

      cadre(ctx, W*0.60, y - H*0.16, W*0.26, H*0.32, et(0.5, 0.25, p), C.doux, 1.6);
      molecule(ctx, W*0.68, y + H*0.04, ech, MOL.H2O, et(0.56, 0.3, p), { lc: C.doux });
      molecule(ctx, W*0.79, y - H*0.04, ech, MOL.H2O, et(0.62, 0.3, p), { lc: C.doux });
      txt(ctx, 'eau liquide', W*0.73, y + H*0.21, et(0.7, 0.2, p), C.vert, 17, MONO);

      txt(ctx, "Ce sont EXACTEMENT les mêmes molécules H₂O, autrement disposées.",
          W*0.5, H*0.85, et(0.78, 0.2, p), C.blanc, 18, SANS);
      txt(ctx, "Aucune espèce chimique nouvelle : la transformation est physique.",
          W*0.5, H*0.92, et(0.88, 0.12, p), C.bleu, 16, SANS);
    }
  },

  { caption: "Une transformation chimique, elle, fabrique de nouvelles espèces : les atomes se réorganisent en d'autres molécules.",
    label: 'Transformation chimique',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CAS 2', 'La transformation chimique', p, C.rouge);
      const y = H * 0.48, ech = Math.min(W * 0.085, H * 0.15);

      cadre(ctx, W*0.08, y - H*0.16, W*0.28, H*0.32, et(0.03, 0.25, p), C.doux, 1.6);
      molecule(ctx, W*0.16, y - H*0.05, ech, MOL.CH4, et(0.08, 0.3, p), { lc: C.doux });
      molecule(ctx, W*0.29, y + H*0.06, ech * 0.85, MOL.O2, et(0.16, 0.3, p), { lc: C.doux });
      txt(ctx, 'méthane + dioxygène', W*0.22, y + H*0.21, et(0.24, 0.2, p), C.jaune, 16, SANS);

      fleche(ctx, W*0.39, y, W*0.57, y, et(0.35, 0.3, p), C.rouge, 2.6);
      txt(ctx, 'on brûle', W*0.48, y - 24, et(0.42, 0.2, p), C.rouge, 16, SANS);

      cadre(ctx, W*0.60, y - H*0.16, W*0.30, H*0.32, et(0.5, 0.25, p), C.doux, 1.6);
      molecule(ctx, W*0.68, y - H*0.05, ech * 0.9, MOL.CO2, et(0.56, 0.3, p), { lc: C.doux });
      molecule(ctx, W*0.82, y + H*0.06, ech * 0.9, MOL.H2O, et(0.64, 0.3, p), { lc: C.doux });
      txt(ctx, "dioxyde de carbone + eau", W*0.75, y + H*0.21, et(0.72, 0.2, p), C.vert, 16, SANS);

      txt(ctx, "Les molécules de départ ont disparu : d'autres, différentes, sont apparues.",
          W*0.5, H*0.85, et(0.78, 0.2, p), C.blanc, 18, SANS);
      txt(ctx, "Ce sont pourtant les MÊMES ATOMES, simplement réassemblés.",
          W*0.5, H*0.92, et(0.88, 0.12, p), C.rouge, 16, SANS);
    }
  },

  { caption: "Comment repérer une transformation chimique sans microscope ? Quatre indices, visibles à l'œil nu.",
    label: 'Les indices',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'RECONNAÎTRE', 'Les quatre indices', p, C.jaune);
      const cases = [
        { t: 'un changement de COULEUR', d: "un métal qui rouille, un fruit qui brunit", c: C.rouge },
        { t: 'un dégagement de GAZ', d: "des bulles apparaissent : effervescence", c: C.jaune },
        { t: 'un solide qui se forme', d: "un PRÉCIPITÉ apparaît dans le liquide", c: C.vert },
        { t: 'de la chaleur ou de la lumière', d: "ça chauffe, ça brûle, ça éclaire", c: C.bleu },
      ];
      const cw = W * 0.40, ch = H * 0.20;
      cases.forEach((k, i) => {
        const x = W * 0.07 + (i % 2) * (cw + W * 0.06);
        const yy = H * 0.30 + Math.floor(i / 2) * (ch + H * 0.08);
        const q = et(0.08 + i * 0.16, 0.3, p);
        cadre(ctx, x, yy, cw, ch, q, k.c, 1.8);
        txt(ctx, k.t, x + cw / 2, yy + ch * 0.36, et(0.14 + i * 0.16, 0.25, p), k.c, 17, MONO);
        txt(ctx, k.d, x + cw / 2, yy + ch * 0.72, et(0.18 + i * 0.16, 0.25, p), C.doux, 15, SANS);
      });
      txt(ctx, "Un seul de ces indices suffit à soupçonner une réaction chimique.",
          W*0.5, H*0.94, et(0.82, 0.18, p), C.or, 16, SANS);
    }
  },

  { caption: "Le vocabulaire : ce qui disparaît, ce sont les réactifs ; ce qui apparaît, ce sont les produits. La flèche se lit « donne ».",
    label: 'Réactifs et produits',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'VOCABULAIRE', 'Réactifs  →  Produits', p);
      const y = H * 0.45;
      cadre(ctx, W*0.08, y - H*0.10, W*0.30, H*0.20, et(0.05, 0.25, p), C.rouge, 2);
      txt(ctx, 'RÉACTIFS', W*0.23, y - H*0.03, et(0.12, 0.25, p), C.rouge, 21, MONO);
      txt(ctx, 'ils sont consommés', W*0.23, y + H*0.04, et(0.18, 0.25, p), C.doux, 15, SANS);

      fleche(ctx, W*0.41, y, W*0.57, y, et(0.3, 0.3, p), C.jaune, 3);
      txt(ctx, 'donne', W*0.49, y - 26, et(0.38, 0.2, p), C.jaune, 17, SANS);

      cadre(ctx, W*0.60, y - H*0.10, W*0.30, H*0.20, et(0.42, 0.25, p), C.vert, 2);
      txt(ctx, 'PRODUITS', W*0.75, y - H*0.03, et(0.48, 0.25, p), C.vert, 21, MONO);
      txt(ctx, 'ils sont formés', W*0.75, y + H*0.04, et(0.54, 0.25, p), C.doux, 15, SANS);

      const q = et(0.62, 0.35, p);
      if (q > 0) {
        seg(ctx, W*0.12, H*0.68, W*0.88, H*0.68, q, 'rgba(240,236,224,0.18)', 1.4);
        txt(ctx, "Exemple, écrit en toutes lettres :", W*0.5, H*0.75, et(0.66, 0.2, p), C.doux, 16, SANS);
        txt(ctx, "méthane  +  dioxygène   →   dioxyde de carbone  +  eau",
            W*0.5, H*0.84, et(0.74, 0.26, p), C.blanc, 20, SANS);
        txt(ctx, "C'est le BILAN de la réaction, en mots.", W*0.5, H*0.92, et(0.88, 0.12, p), C.or, 16, SANS);
      }
    }
  },

  { caption: "Un réactif peut manquer avant les autres : il est alors le réactif limitant, et la réaction s'arrête.",
    label: 'Réactif limitant',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'ALLER PLUS LOIN', 'Le réactif limitant', p, C.violet);
      const y = H * 0.44, ech = Math.min(W * 0.06, H * 0.11);

      /* Trois molécules de méthane, mais seulement deux dioxygènes utiles. */
      txt(ctx, 'on dispose de :', W*0.20, H*0.28, et(0.03, 0.2, p), C.doux, 16, SANS);
      for (let i = 0; i < 3; i++) molecule(ctx, W*(0.12 + i*0.09), y, ech, MOL.CH4, et(0.08 + i*0.05, 0.25, p), { lc: C.doux });
      txt(ctx, '3 méthane', W*0.21, y + H*0.14, et(0.24, 0.2, p), C.jaune, 16, SANS);
      for (let i = 0; i < 2; i++) molecule(ctx, W*(0.45 + i*0.09), y, ech, MOL.O2, et(0.3 + i*0.05, 0.25, p), { lc: C.doux });
      txt(ctx, '2 dioxygène', W*0.50, y + H*0.14, et(0.42, 0.2, p), C.rouge, 16, SANS);

      const q = et(0.55, 0.35, p);
      if (q > 0) {
        cadre(ctx, W*0.66, y - H*0.14, W*0.28, H*0.28, q, C.violet, 1.8);
        txt(ctx, 'le dioxygène', W*0.80, y - H*0.05, et(0.6, 0.25, p), C.violet, 18, SANS);
        txt(ctx, "s'épuise le premier", W*0.80, y + H*0.01, et(0.66, 0.25, p), C.violet, 18, SANS);
        txt(ctx, '→ réactif limitant', W*0.80, y + H*0.08, et(0.72, 0.25, p), C.rouge, 17, MONO);
      }
      txt(ctx, "La réaction s'arrête dès qu'un réactif vient à manquer ; l'autre reste en excès.",
          W*0.5, H*0.90, et(0.82, 0.18, p), C.or, 16, SANS);
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_transfo_2', chapitre: CH4C, niveau: '3ème',
  titre: 'Équation de réaction et conservation',
  desc: "Écrire une réaction avec des formules, l'ajuster en comptant les atomes, et comprendre pourquoi la masse se conserve.",
  steps: [

  { caption: "On passe du bilan en mots à l'équation en formules : plus court, plus précis, et surtout vérifiable.",
    label: 'Des mots aux formules',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'ÉCRIRE UNE RÉACTION', 'Du bilan à l’équation', p);
      txt(ctx, 'en mots :', W*0.5, H*0.32, et(0.05, 0.2, p), C.doux, 16, MONO);
      txt(ctx, "méthane  +  dioxygène   →   dioxyde de carbone  +  eau",
          W*0.5, H*0.40, et(0.12, 0.3, p), C.doux, 19, SANS);
      fleche(ctx, W*0.5, H*0.46, W*0.5, H*0.55, et(0.35, 0.25, p), C.jaune, 2.2);
      txt(ctx, 'en formules :', W*0.5, H*0.62, et(0.45, 0.2, p), C.doux, 16, MONO);
      txt(ctx, "CH₄  +  O₂   →   CO₂  +  H₂O",
          W*0.5, H*0.71, et(0.52, 0.3, p), C.blanc, 30, MONO);
      txt(ctx, "Cette écriture est correcte… mais pas encore ajustée.",
          W*0.5, H*0.84, et(0.75, 0.2, p), C.rouge, 17, SANS);
      txt(ctx, "Il faut vérifier que chaque atome se retrouve des deux côtés.",
          W*0.5, H*0.91, et(0.85, 0.15, p), C.doux, 16, SANS);
    }
  },

  { caption: "La règle qui commande tout : les atomes ne se créent pas et ne disparaissent pas. On les compte de chaque côté.",
    label: 'Compter les atomes',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'VÉRIFICATION', 'Compter avant, compter après', p, C.jaune);
      txt(ctx, "CH₄  +  O₂   →   CO₂  +  H₂O", W*0.5, H*0.28, et(0.03, 0.2, p), C.doux, 24, MONO);
      tableau(ctx, W * 0.20, H * 0.42, W * 0.60,
        [ { t: 'ATOME' }, { t: 'À GAUCHE', c: C.rouge }, { t: 'À DROITE', c: C.vert } ],
        [
          [ 'carbone  C',   { t: '1', c: C.blanc, s: 20, f: MONO }, { t: '1', c: C.blanc, s: 20, f: MONO } ],
          [ 'hydrogène  H', { t: '4', c: C.jaune, s: 20, f: MONO }, { t: '2', c: C.rouge, s: 20, f: MONO } ],
          [ 'oxygène  O',   { t: '2', c: C.jaune, s: 20, f: MONO }, { t: '3', c: C.rouge, s: 20, f: MONO } ],
        ], p, { dy: 48 });
      txt(ctx, "H et O ne tombent pas juste : l'équation n'est pas ajustée.",
          W*0.5, H*0.80, et(0.68, 0.2, p), C.rouge, 18, SANS);
      txt(ctx, "On ne touche JAMAIS aux formules : on ajoute seulement des nombres devant.",
          W*0.5, H*0.89, et(0.8, 0.2, p), C.or, 17, SANS);
    }
  },

  { caption: "En plaçant les bons coefficients devant les formules, tout s'équilibre : deux dioxygènes à gauche, deux molécules d'eau à droite.",
    label: 'Ajuster',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'AJUSTEMENT', "L'équation équilibrée", p, C.vert);
      txt(ctx, "CH₄  +  2 O₂   →   CO₂  +  2 H₂O",
          W*0.5, H*0.32, et(0.05, 0.3, p), C.vert, 32, MONO);

      /* Le comptage refait, cette fois symétrique. */
      tableau(ctx, W * 0.20, H * 0.46, W * 0.60,
        [ { t: 'ATOME' }, { t: 'À GAUCHE', c: C.vert }, { t: 'À DROITE', c: C.vert } ],
        [
          [ 'carbone  C',   { t: '1', c: C.vert, s: 20, f: MONO }, { t: '1', c: C.vert, s: 20, f: MONO } ],
          [ 'hydrogène  H', { t: '4', c: C.vert, s: 20, f: MONO }, { t: '4', c: C.vert, s: 20, f: MONO } ],
          [ 'oxygène  O',   { t: '4', c: C.vert, s: 20, f: MONO }, { t: '4', c: C.vert, s: 20, f: MONO } ],
        ], p, { dy: 46 });
      txt(ctx, "Même nombre de chaque atome des deux côtés : l'équation est ajustée.",
          W*0.5, H*0.86, et(0.72, 0.22, p), C.vert, 18, SANS);
      txt(ctx, "Le coefficient multiplie TOUTE la molécule : 2 H₂O, c'est 4 H et 2 O.",
          W*0.5, H*0.93, et(0.86, 0.14, p), C.doux, 16, SANS);
    }
  },

  { caption: "Puisque les atomes se conservent, la masse aussi : en récipient fermé, la balance affiche la même valeur avant et après.",
    label: 'Loi de Lavoisier',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'LOI DE LAVOISIER', 'Rien ne se perd, rien ne se crée', p, C.or);
      const bas = H * 0.60, w = W * 0.12, h = H * 0.22;
      const xg = W * 0.28, xd = W * 0.70;

      /* Erlenmeyer bouché : le système est fermé. */
      becher(ctx, xg, bas, w, h, et(0.05, 0.25, p), { bec: false, niveau: 0.5, debutLiquide: 0.15, liquide: 'rgba(130,200,230,0.20)' });
      seg(ctx, xg - w*0.2, bas - h, xg + w*0.2, bas - h, et(0.2, 0.2, p), C.rouge, 3);
      txt(ctx, 'bouché', xg, bas - h - 18, et(0.25, 0.2, p), C.rouge, 14, SANS);
      txt(ctx, 'avant réaction', xg, bas + 30, et(0.3, 0.2, p), C.doux, 15, SANS);

      becher(ctx, xd, bas, w, h, et(0.2, 0.25, p), { bec: false, niveau: 0.5, debutLiquide: 0.35, liquide: 'rgba(130,210,160,0.20)', liquide2: C.vert });
      seg(ctx, xd - w*0.2, bas - h, xd + w*0.2, bas - h, et(0.35, 0.2, p), C.rouge, 3);
      const qb = et(0.45, 0.3, p);
      for (let i = 0; i < 5; i++) bille(ctx, xd - w*0.3 + i * w*0.15, bas - h*0.62 - (i%2)*10, 3.5, qb, C.jaune);
      txt(ctx, 'après réaction', xd, bas + 30, et(0.5, 0.2, p), C.doux, 15, SANS);

      fleche(ctx, xg + w*0.9, bas - h*0.5, xd - w*0.9, bas - h*0.5, et(0.38, 0.25, p), C.jaune, 2.2);

      balance(ctx, xg, H*0.86, et(0.6, 0.28, p), '86,2 g', { label: 'masse totale' });
      balance(ctx, xd, H*0.86, et(0.7, 0.28, p), '86,2 g', { label: 'masse totale' });
      txt(ctx, 'la masse totale est conservée', W*0.5, H*0.70, et(0.82, 0.18, p), C.or, 20, MONO);
    }
  },

  { caption: "Attention au piège : en récipient ouvert, un gaz peut s'échapper. La masse mesurée diminue, alors que rien n'a été détruit.",
    label: 'Ouvert ou fermé',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'LE PIÈGE', "Système ouvert ou fermé", p, C.rouge);
      const bas = H * 0.62, w = W * 0.13, h = H * 0.24;
      const xg = W * 0.28, xd = W * 0.70;

      /* Fermé : le gaz reste. */
      becher(ctx, xg, bas, w, h, et(0.05, 0.25, p), { bec: false, niveau: 0.45, debutLiquide: 0.15, liquide: 'rgba(130,200,230,0.20)' });
      seg(ctx, xg - w*0.22, bas - h, xg + w*0.22, bas - h, et(0.18, 0.2, p), C.vert, 3);
      const q1 = et(0.3, 0.3, p);
      for (let i = 0; i < 5; i++) bille(ctx, xg - w*0.3 + i*w*0.15, bas - h*0.68 - (i%2)*8, 3.5, q1, C.jaune);
      txt(ctx, 'FERMÉ', xg, H*0.30, et(0.15, 0.2, p), C.vert, 19, MONO);
      txt(ctx, 'le gaz reste dedans', xg, bas + 30, et(0.35, 0.2, p), C.doux, 15, SANS);
      balance(ctx, xg, H*0.90, et(0.45, 0.25, p), '86,2 g', { label: 'masse inchangée', ec: C.vert });

      /* Ouvert : le gaz part. */
      becher(ctx, xd, bas, w, h, et(0.2, 0.25, p), { bec: false, niveau: 0.45, debutLiquide: 0.3, liquide: 'rgba(130,200,230,0.20)' });
      const q2 = et(0.5, 0.35, p);
      for (let i = 0; i < 5; i++) {
        bille(ctx, xd - w*0.3 + i*w*0.16, bas - h - 20 - i*16 - 26*ease(q2), 3.5, q2, C.jaune);
      }
      txt(ctx, 'OUVERT', xd, H*0.30, et(0.3, 0.2, p), C.rouge, 19, MONO);
      txt(ctx, "le gaz s'échappe", xd, bas + 30, et(0.62, 0.2, p), C.doux, 15, SANS);
      balance(ctx, xd, H*0.90, et(0.7, 0.25, p), '84,9 g', { label: 'masse apparente en baisse', ec: C.rouge });

      txt(ctx, "La matière n'a pas disparu : elle est partie dans l'air.",
          W*0.5, H*0.74, et(0.85, 0.15, p), C.or, 17, SANS);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'Transformations chimiques',
    body: [
      { t: "Physique : mêmes molécules.  Chimique : molécules nouvelles.", c: C.blanc },
      { t: "Réactifs → produits ; la flèche se lit « donne ».", c: C.doux },
      { t: "Les atomes se conservent : on ajuste avec des coefficients,", c: C.jaune },
      { t: "jamais en modifiant les formules chimiques.", c: C.jaune },
      { t: "La masse se conserve — sauf mesure en récipient ouvert.", c: C.vert },
    ],
    encadre: 'CH₄ + 2 O₂ → CO₂ + 2 H₂O',
    caption: "Les atomes se conservent : c'est la règle qui gouverne toute la chimie."
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   CHAPITRE 5 — ATOMES, MOLÉCULES ET IONS
   ══════════════════════════════════════════════════════════════════════ */

const CH5 = 'Atomes, molécules et ions';

LECONS.push(lecon({
  id: 'pc_atomes_1', chapitre: CH5, niveau: '4ème',
  titre: "De l'atome à la molécule",
  desc: "Ce dont tout est fait : un noyau, des électrons, des symboles — et des formules qui se lisent.",
  steps: [

  { caption: "Un atome, c'est un noyau chargé positivement, entouré d'électrons chargés négativement. L'ensemble est neutre.",
    label: "Structure de l'atome",
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CONSTITUTION', "L'atome", p, C.bleu);
      const cx = W * 0.33, cy = H * 0.55, R = Math.min(W * 0.10, H * 0.18);

      /* Noyau au centre, deux couches d'électrons autour. */
      bille(ctx, cx, cy, R * 0.30, et(0.05, 0.3, p), C.rouge);
      txt(ctx, '+', cx, cy, et(0.2, 0.25, p), '#0f1a12', R * 0.34, SANS);
      cercle(ctx, cx, cy, R, et(0.28, 0.3, p), 'rgba(240,236,224,0.25)', 1.4);
      cercle(ctx, cx, cy, R * 1.6, et(0.38, 0.3, p), 'rgba(240,236,224,0.18)', 1.4);
      for (let i = 0; i < 6; i++) {
        const q = et(0.42 + i * 0.04, 0.25, p);
        const r = i < 2 ? R : R * 1.6;
        const a = p * 2.2 + (i * Math.PI * 2) / (i < 2 ? 2 : 4) + (i < 2 ? 0 : 0.6);
        bille(ctx, cx + Math.cos(a) * r, cy + Math.sin(a) * r, 6, q, C.bleu);
      }

      puces(ctx, W * 0.53, H * 0.34, [
        { t: "Le NOYAU : protons (+) et neutrons (neutres).", c: C.rouge },
        { t: "Autour : les ÉLECTRONS (−), très légers et très rapides.", c: C.bleu },
        { t: "Autant de protons que d'électrons :", c: C.blanc },
        { t: "l'atome est électriquement NEUTRE.", c: C.jaune },
        { t: "Taille : environ 0,1 nanomètre — un dix-milliardième de mètre.", c: C.doux, s: 15 },
      ], p, { debut: 0.35, pas: 0.12, dy: 42, s: 17 });
    }
  },

  { caption: "Le noyau est cent mille fois plus petit que l'atome : la matière est essentiellement… du vide.",
    label: 'Une affaire de vide',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'ORDRE DE GRANDEUR', "L'atome est surtout vide", p, C.violet);
      const cx = W * 0.5, cy = H * 0.55, R = Math.min(W * 0.16, H * 0.28);
      cercle(ctx, cx, cy, R, et(0.05, 0.35, p), 'rgba(240,236,224,0.30)', 1.8);
      txt(ctx, "l'atome", cx + R + 40, cy - R * 0.5, et(0.25, 0.25, p), C.doux, 16, SANS);
      bille(ctx, cx, cy, 3.5, et(0.35, 0.3, p), C.rouge);
      fleche(ctx, cx - R * 0.9, cy + R * 0.7, cx - 8, cy + 6, et(0.45, 0.3, p), C.rouge, 1.8);
      txt(ctx, 'le noyau', cx - R * 1.15, cy + R * 0.82, et(0.52, 0.25, p), C.rouge, 16, SANS, 'right');

      puces(ctx, W * 0.12, H * 0.86, [
        { t: "Si l'atome faisait 100 m de diamètre, son noyau ferait 1 mm.", c: C.blanc },
        { t: "Presque toute la masse est dans ce noyau minuscule.", c: C.jaune },
      ], p, { debut: 0.62, pas: 0.14, dy: 32, s: 17 });
    }
  },

  { caption: "Chaque atome a un symbole : une majuscule, parfois suivie d'une minuscule. Ce sont les briques à connaître.",
    label: 'Les symboles',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'LES BRIQUES', 'Symboles chimiques', p);
      const items = [
        { s: 'H', n: 'hydrogène', c: C.blanc }, { s: 'C', n: 'carbone', c: C.doux },
        { s: 'N', n: 'azote', c: C.violet },    { s: 'O', n: 'oxygène', c: C.rouge },
        { s: 'Na', n: 'sodium', c: C.jaune },   { s: 'Cl', n: 'chlore', c: C.vert },
        { s: 'Fe', n: 'fer', c: C.rouge },      { s: 'Cu', n: 'cuivre', c: C.jaune },
      ];
      items.forEach((it, i) => {
        const x = W * (0.14 + (i % 4) * 0.24);
        const y = H * (0.42 + Math.floor(i / 4) * 0.26);
        const q = et(0.06 + i * 0.08, 0.3, p);
        bille(ctx, x, y, Math.min(W * 0.032, H * 0.055), q, it.c);
        txt(ctx, it.s, x, y + 1, et(0.1 + i * 0.08, 0.28, p), '#0f1a12', 22, SANS);
        txt(ctx, it.n, x, y + H * 0.10, et(0.12 + i * 0.08, 0.28, p), C.doux, 15, SANS);
      });
      txt(ctx, "La majuscule d'abord, la minuscule ensuite : Cl est le chlore, CL n'existe pas.",
          W * 0.5, H * 0.95, et(0.82, 0.18, p), C.or, 16, SANS);
    }
  },

  { caption: "Une molécule est un assemblage d'atomes liés entre eux. Sa formule dit lesquels, et combien.",
    label: 'Les molécules',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'ASSEMBLAGES', 'Quelques molécules à connaître', p, C.vert);
      const ech = Math.min(W * 0.075, H * 0.13);
      const y1 = H * 0.44, y2 = H * 0.76;
      molecule(ctx, W*0.18, y1, ech, MOL.H2O, et(0.05, 0.3, p), { nom: 'H₂O — eau', nc: C.blanc, dyNom: ech * 1.1, nf: MONO });
      molecule(ctx, W*0.42, y1, ech, MOL.CO2, et(0.18, 0.3, p), { nom: 'CO₂ — dioxyde de carbone', nc: C.blanc, dyNom: ech * 1.1, nf: MONO, ns: 15 });
      molecule(ctx, W*0.70, y1, ech, MOL.CH4, et(0.31, 0.3, p), { nom: 'CH₄ — méthane', nc: C.blanc, dyNom: ech * 1.2, nf: MONO });
      molecule(ctx, W*0.25, y2, ech, MOL.O2, et(0.45, 0.3, p), { nom: 'O₂ — dioxygène', nc: C.blanc, dyNom: ech * 0.95, nf: MONO });
      molecule(ctx, W*0.50, y2, ech, MOL.N2, et(0.56, 0.3, p), { nom: 'N₂ — diazote', nc: C.blanc, dyNom: ech * 0.95, nf: MONO });
      molecule(ctx, W*0.75, y2, ech, MOL.H2, et(0.66, 0.3, p), { nom: 'H₂ — dihydrogène', nc: C.blanc, dyNom: ech * 0.95, nf: MONO });
    }
  },

  { caption: "Lire une formule : l'indice compte les atomes de l'élément qui précède ; le grand nombre devant compte les molécules entières.",
    label: 'Lire une formule',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MÉTHODE', 'Indices et coefficients', p, C.jaune);
      txt(ctx, '3 H₂O', W * 0.5, H * 0.36, et(0.05, 0.3, p), C.blanc, 54, MONO);

      /* Deux flèches qui désignent chaque nombre. */
      fleche(ctx, W*0.30, H*0.52, W*0.435, H*0.41, et(0.3, 0.3, p), C.rouge, 2);
      txt(ctx, 'coefficient : 3 molécules', W*0.24, H*0.57, et(0.38, 0.25, p), C.rouge, 17, SANS);
      fleche(ctx, W*0.72, H*0.52, W*0.545, H*0.41, et(0.45, 0.3, p), C.bleu, 2);
      txt(ctx, "indice : 2 atomes d'hydrogène", W*0.78, H*0.57, et(0.52, 0.25, p), C.bleu, 17, SANS);

      const q = et(0.65, 0.35, p);
      if (q > 0) {
        seg(ctx, W*0.14, H*0.66, W*0.86, H*0.66, q, 'rgba(240,236,224,0.18)', 1.4);
        txt(ctx, "Au total : 6 atomes H  et  3 atomes O", W*0.5, H*0.75, et(0.7, 0.25, p), C.vert, 22, MONO);
        txt(ctx, "Sans indice, on sous-entend 1 :  H₂O contient 1 atome d'oxygène.",
            W*0.5, H*0.85, et(0.8, 0.2, p), C.doux, 16, SANS);
        txt(ctx, "H₂O et H₂O₂ (eau oxygénée) sont deux corps très différents.",
            W*0.5, H*0.92, et(0.88, 0.12, p), C.or, 16, SANS);
      }
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_atomes_2', chapitre: CH5, niveau: '3ème',
  titre: 'Les ions',
  desc: "Ce qui arrive quand un atome perd ou gagne des électrons — et comment on identifie les ions en solution.",
  steps: [

  { caption: "Un atome est neutre : autant de charges positives dans le noyau que d'électrons négatifs autour.",
    label: "L'atome neutre",
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'POINT DE DÉPART', "L'atome est neutre", p, C.blanc);
      const cx = W * 0.34, cy = H * 0.54, R = Math.min(W * 0.09, H * 0.16);
      bille(ctx, cx, cy, R * 0.4, et(0.05, 0.3, p), C.rouge);
      txt(ctx, '11 +', cx, cy, et(0.18, 0.25, p), '#0f1a12', 16, SANS);
      cercle(ctx, cx, cy, R * 1.5, et(0.25, 0.3, p), 'rgba(240,236,224,0.2)', 1.4);
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI * 2) / 6 + p * 1.4;
        bille(ctx, cx + Math.cos(a) * R * 1.5, cy + Math.sin(a) * R * 1.5, 6, et(0.3 + i * 0.03, 0.25, p), C.bleu);
      }
      txt(ctx, '11 électrons −', cx, cy + R * 2.2, et(0.5, 0.25, p), C.bleu, 16, SANS);
      txt(ctx, 'atome de sodium  Na', cx, cy + R * 2.7, et(0.55, 0.25, p), C.doux, 15, SANS);

      encadre(ctx, W * 0.72, H * 0.52, W * 0.36, H * 0.20,
              '11 (+)  =  11 (−)', et(0.6, 0.3, p), C.or, 24);
      txt(ctx, "charge totale : zéro", W * 0.72, H * 0.70, et(0.8, 0.2, p), C.jaune, 18, SANS);
    }
  },

  { caption: "Si l'atome perd un électron, il lui reste une charge positive en trop : c'est un cation. S'il en gagne un, il devient un anion.",
    label: 'Cations et anions',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'FORMATION', 'Perdre ou gagner un électron', p, C.violet);
      const y = H * 0.50, R = Math.min(W * 0.055, H * 0.10);

      /* Perte → cation. */
      bille(ctx, W*0.22, y, R, et(0.05, 0.3, p), C.jaune);
      txt(ctx, 'Na', W*0.22, y + 1, et(0.15, 0.25, p), '#0f1a12', 20, SANS);
      fleche(ctx, W*0.28, y, W*0.40, y, et(0.22, 0.3, p), C.rouge, 2);
      bille(ctx, W*0.35, y - 34, 6, et(0.3, 0.25, p), C.bleu);
      txt(ctx, "perd 1 e⁻", W*0.34, y - 56, et(0.34, 0.25, p), C.rouge, 15, SANS);
      bille(ctx, W*0.46, y, R, et(0.36, 0.3, p), C.rouge);
      txt(ctx, 'Na⁺', W*0.46, y + 1, et(0.44, 0.25, p), '#0f1a12', 19, SANS);
      txt(ctx, 'CATION  (+)', W*0.34, y + H*0.16, et(0.48, 0.25, p), C.rouge, 18, MONO);

      /* Gain → anion. */
      bille(ctx, W*0.60, y, R, et(0.5, 0.3, p), C.vert);
      txt(ctx, 'Cl', W*0.60, y + 1, et(0.56, 0.25, p), '#0f1a12', 20, SANS);
      fleche(ctx, W*0.66, y, W*0.78, y, et(0.6, 0.3, p), C.bleu, 2);
      bille(ctx, W*0.73, y - 34, 6, et(0.66, 0.25, p), C.bleu);
      txt(ctx, "gagne 1 e⁻", W*0.72, y - 56, et(0.7, 0.25, p), C.bleu, 15, SANS);
      bille(ctx, W*0.84, y, R, et(0.72, 0.3, p), C.bleu);
      txt(ctx, 'Cl⁻', W*0.84, y + 1, et(0.78, 0.25, p), '#0f1a12', 19, SANS);
      txt(ctx, 'ANION  (−)', W*0.72, y + H*0.16, et(0.82, 0.25, p), C.bleu, 18, MONO);

      txt(ctx, "Le noyau ne change pas : seul le nombre d'électrons varie.",
          W*0.5, H*0.90, et(0.88, 0.12, p), C.or, 16, SANS);
    }
  },

  { caption: "Les ions à connaître : leur charge se lit en exposant, et le chiffre indique combien d'électrons ont été échangés.",
    label: 'Les ions courants',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MÉMENTO', 'Les ions les plus fréquents', p);
      tableau(ctx, W * 0.10, H * 0.32, W * 0.38,
        [ { t: 'CATIONS  (+)', c: C.rouge } ],
        [
          [ { t: 'Na⁺   ion sodium', c: C.blanc, f: MONO } ],
          [ { t: 'H⁺    ion hydrogène', c: C.blanc, f: MONO } ],
          [ { t: 'Cu²⁺  ion cuivre II', c: C.blanc, f: MONO } ],
          [ { t: 'Fe²⁺  ion fer II', c: C.blanc, f: MONO } ],
          [ { t: 'Fe³⁺  ion fer III', c: C.blanc, f: MONO } ],
        ], p, { dy: 44 });
      tableau(ctx, W * 0.54, H * 0.32, W * 0.38,
        [ { t: 'ANIONS  (−)', c: C.bleu } ],
        [
          [ { t: 'Cl⁻   ion chlorure', c: C.blanc, f: MONO } ],
          [ { t: 'OH⁻   ion hydroxyde', c: C.blanc, f: MONO } ],
          [ { t: 'SO₄²⁻ ion sulfate', c: C.blanc, f: MONO } ],
        ], p, { dy: 44 });
      txt(ctx, "Cu²⁺ : l'atome de cuivre a perdu DEUX électrons.",
          W * 0.5, H * 0.86, et(0.75, 0.2, p), C.doux, 17, SANS);
      txt(ctx, "Une solution ionique reste globalement neutre : autant de (+) que de (−).",
          W * 0.5, H * 0.93, et(0.85, 0.15, p), C.or, 16, SANS);
    }
  },

  { caption: "On identifie un ion en le faisant précipiter : la couleur du dépôt révèle lequel était présent.",
    label: 'Tests des ions',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'IDENTIFIER', 'Les tests par précipitation', p, C.vert);
      const bas = H * 0.68, w = W * 0.11, h = H * 0.24;
      const tests = [
        { ion: 'Cu²⁺', dep: 'précipité bleu',     c: C.bleu,   liq: 'rgba(130,200,230,0.30)' },
        { ion: 'Fe²⁺', dep: 'précipité vert',     c: C.vert,   liq: 'rgba(130,210,160,0.30)' },
        { ion: 'Fe³⁺', dep: 'précipité rouille',  c: C.rouge,  liq: 'rgba(230,130,110,0.30)' },
        { ion: 'Cl⁻',  dep: 'précipité blanc',    c: C.blanc,  liq: 'rgba(245,242,232,0.28)' },
      ];
      tests.forEach((t, i) => {
        const x = W * (0.17 + i * 0.22);
        const q = et(0.05 + i * 0.12, 0.3, p);
        becher(ctx, x, bas, w, h, q, { bec: false, niveau: 0.55, debutLiquide: 0.15 + i * 0.12, liquide: t.liq, liquide2: t.c });
        txt(ctx, t.ion, x, H * 0.30, et(0.1 + i * 0.12, 0.25, p), t.c, 22, MONO);
        txt(ctx, t.dep, x, bas + 32, et(0.14 + i * 0.12, 0.25, p), t.c, 15, SANS);
      });
      txt(ctx, "Pour les trois premiers : on ajoute de la soude (ions OH⁻).",
          W * 0.5, H * 0.86, et(0.68, 0.2, p), C.doux, 17, SANS);
      txt(ctx, "Pour l'ion chlorure : on ajoute du nitrate d'argent.",
          W * 0.5, H * 0.93, et(0.8, 0.2, p), C.doux, 17, SANS);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'Atomes, molécules et ions',
    body: [
      { t: "Atome : noyau (+) et électrons (−), l'ensemble est neutre.", c: C.blanc },
      { t: "Molécule : des atomes liés ; la formule dit lesquels et combien.", c: C.doux },
      { t: "Ion : un atome qui a perdu (cation +) ou gagné (anion −) des électrons.", c: C.jaune },
      { t: "Indice = atomes dans la molécule ; coefficient = nombre de molécules.", c: C.doux },
      { t: "Une solution ionique est toujours électriquement neutre.", c: C.vert },
    ],
    encadre: 'perdre des e⁻ → (+)   ·   en gagner → (−)',
    caption: "Tout part de l'atome : les molécules l'assemblent, les ions le chargent."
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   CHAPITRE 6 — COMBUSTIONS
   ══════════════════════════════════════════════════════════════════════ */

const CH6 = 'Combustions';

/* Flamme schématique posée sur un support. */
function flamme(ctx, cx, bas, taille, p, c) {
  const q = ease(cl(p)); if (q <= 0) return;
  const h = taille * q;
  const vac = Math.sin(p * 14) * taille * 0.06;
  seg(ctx, cx - taille * 0.34, bas, cx + vac, bas - h, 1, c || C.jaune, 2.2);
  seg(ctx, cx + taille * 0.34, bas, cx + vac, bas - h, 1, c || C.jaune, 2.2);
  seg(ctx, cx - taille * 0.16, bas, cx + vac * 0.6, bas - h * 0.55, 1, c || C.rouge, 1.8);
  seg(ctx, cx + taille * 0.16, bas, cx + vac * 0.6, bas - h * 0.55, 1, c || C.rouge, 1.8);
}

LECONS.push(lecon({
  id: 'pc_comb_1', chapitre: CH6, niveau: '4ème',
  titre: 'Le triangle du feu et la combustion du carbone',
  desc: "Trois conditions pour brûler, et une réaction modèle : le carbone qui devient dioxyde de carbone.",
  steps: [

  { caption: "Pour qu'une combustion ait lieu, trois éléments sont nécessaires en même temps : combustible, comburant et énergie d'activation.",
    label: 'Le triangle du feu',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CONDITIONS', 'Le triangle du feu', p, C.rouge);
      const cx = W * 0.36, cy = H * 0.58, R = Math.min(W * 0.15, H * 0.26);
      const A = { x: cx, y: cy - R }, B = { x: cx - R * 0.95, y: cy + R * 0.72 }, D = { x: cx + R * 0.95, y: cy + R * 0.72 };
      seg(ctx, A.x, A.y, B.x, B.y, et(0.05, 0.25, p), C.rouge, 2.4);
      seg(ctx, B.x, B.y, D.x, D.y, et(0.15, 0.25, p), C.rouge, 2.4);
      seg(ctx, D.x, D.y, A.x, A.y, et(0.25, 0.25, p), C.rouge, 2.4);
      flamme(ctx, cx, cy + R * 0.5, R * 0.7, et(0.4, 0.4, p));

      txt(ctx, 'ÉNERGIE', A.x, A.y - 24, et(0.35, 0.25, p), C.jaune, 16, MONO);
      txt(ctx, "d'activation", A.x, A.y - 4, et(0.38, 0.25, p), C.doux, 14, SANS);
      txt(ctx, 'COMBUSTIBLE', B.x - 10, B.y + 28, et(0.45, 0.25, p), C.vert, 16, MONO);
      txt(ctx, 'ce qui brûle', B.x - 10, B.y + 48, et(0.48, 0.25, p), C.doux, 14, SANS);
      txt(ctx, 'COMBURANT', D.x + 10, D.y + 28, et(0.55, 0.25, p), C.bleu, 16, MONO);
      txt(ctx, 'le dioxygène', D.x + 10, D.y + 48, et(0.58, 0.25, p), C.doux, 14, SANS);

      puces(ctx, W * 0.62, H * 0.40, [
        { t: "Combustible : bois, gaz, papier, essence…", c: C.vert },
        { t: "Comburant : le dioxygène O₂ de l'air.", c: C.bleu },
        { t: "Énergie : une flamme, une étincelle, une forte chaleur.", c: C.jaune },
        { t: "Retirer UN seul côté suffit à éteindre le feu.", c: C.rouge },
      ], p, { debut: 0.5, pas: 0.12, dy: 44, s: 17 });
    }
  },

  { caption: "Chaque façon d'éteindre un feu revient à supprimer un côté du triangle.",
    label: 'Éteindre un feu',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'APPLICATION', 'Trois façons d’éteindre', p, C.bleu);
      const cases = [
        { t: 'ÉTOUFFER', d: "on prive de dioxygène", e: "couvercle, couverture, mousse", c: C.bleu },
        { t: 'REFROIDIR', d: "on retire l'énergie", e: "eau sur un feu de bois", c: C.vert },
        { t: 'RETIRER LE COMBUSTIBLE', d: "on coupe l'alimentation", e: "fermer le robinet de gaz", c: C.jaune },
      ];
      cases.forEach((k, i) => {
        const x = W * (0.06 + i * 0.31), w = W * 0.27, y = H * 0.34, h = H * 0.30;
        const q = et(0.05 + i * 0.18, 0.3, p);
        cadre(ctx, x, y, w, h, q, k.c, 1.8);
        txt(ctx, k.t, x + w / 2, y + h * 0.26, et(0.1 + i * 0.18, 0.25, p), k.c, 16, MONO);
        txt(ctx, k.d, x + w / 2, y + h * 0.55, et(0.14 + i * 0.18, 0.25, p), C.blanc, 15, SANS);
        txt(ctx, k.e, x + w / 2, y + h * 0.80, et(0.18 + i * 0.18, 0.25, p), C.doux, 14, SANS);
      });
      txt(ctx, "Jamais d'eau sur une friture ou un feu électrique : on étouffe, on ne refroidit pas.",
          W * 0.5, H * 0.80, et(0.65, 0.25, p), C.rouge, 17, SANS);
      txt(ctx, "L'eau projetterait l'huile enflammée ou conduirait le courant.",
          W * 0.5, H * 0.88, et(0.8, 0.2, p), C.doux, 16, SANS);
    }
  },

  { caption: "La combustion du carbone : le charbon rougit dans le dioxygène et produit un gaz invisible, le dioxyde de carbone.",
    label: 'Combustion du carbone',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'EXPÉRIENCE', 'Le carbone brûle', p, C.rouge);
      const cx = W * 0.30, bas = H * 0.72, w = W * 0.15, h = H * 0.30;
      becher(ctx, cx, bas, w, h, et(0.05, 0.25, p), { bec: false });
      txt(ctx, 'flacon de dioxygène', cx, bas + 32, et(0.2, 0.2, p), C.doux, 15, SANS);
      const qc = et(0.25, 0.3, p);
      bille(ctx, cx, bas - 22, 16, qc, 'rgba(120,120,115,0.9)');
      txt(ctx, 'C', cx, bas - 21, et(0.35, 0.25, p), C.blanc, 14, SANS);
      flamme(ctx, cx, bas - 36, 46, et(0.4, 0.4, p));
      txt(ctx, 'le carbone rougit vivement', cx, H * 0.30, et(0.45, 0.25, p), C.rouge, 16, SANS);

      const q = et(0.55, 0.4, p);
      if (q > 0) {
        txt(ctx, 'carbone  +  dioxygène   →   dioxyde de carbone',
            W * 0.5, H * 0.86, et(0.55, 0.25, p), C.doux, 18, SANS);
        txt(ctx, 'C  +  O₂   →   CO₂', W * 0.5, H * 0.94, et(0.7, 0.25, p), C.vert, 26, MONO);
      }
      puces(ctx, W * 0.52, H * 0.38, [
        { t: "Le carbone est le combustible.", c: C.vert },
        { t: "Le dioxygène est le comburant.", c: C.bleu },
        { t: "Le produit est un gaz invisible : CO₂.", c: C.jaune },
        { t: "La réaction libère chaleur et lumière.", c: C.rouge },
      ], p, { debut: 0.3, pas: 0.1, dy: 40, s: 17 });
    }
  },

  { caption: "Comment prouver que c'est bien du dioxyde de carbone ? L'eau de chaux se trouble : c'est le test caractéristique.",
    label: 'Test du CO₂',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'IDENTIFIER UN GAZ', "Le test à l'eau de chaux", p, C.vert);
      const bas = H * 0.70, w = W * 0.14, h = H * 0.30;
      const xg = W * 0.30, xd = W * 0.70;
      becher(ctx, xg, bas, w, h, et(0.05, 0.25, p), { bec: false, niveau: 0.45, debutLiquide: 0.15, liquide: 'rgba(245,242,232,0.10)', liquide2: C.doux });
      txt(ctx, 'eau de chaux limpide', xg, bas + 32, et(0.25, 0.2, p), C.doux, 15, SANS);
      txt(ctx, 'AVANT', xg, H * 0.30, et(0.2, 0.2, p), C.doux, 17, MONO);

      becher(ctx, xd, bas, w, h, et(0.25, 0.25, p), { bec: false, niveau: 0.45, debutLiquide: 0.35, liquide: 'rgba(245,242,232,0.34)', liquide2: C.blanc });
      txt(ctx, 'elle se trouble : laiteuse', xd, bas + 32, et(0.6, 0.2, p), C.blanc, 15, SANS);
      txt(ctx, 'APRÈS', xd, H * 0.30, et(0.5, 0.2, p), C.vert, 17, MONO);
      fleche(ctx, xg + w, bas - h * 0.5, xd - w, bas - h * 0.5, et(0.42, 0.25, p), C.jaune, 2.2);
      txt(ctx, 'on y fait passer le gaz', W * 0.5, bas - h * 0.5 - 24, et(0.48, 0.2, p), C.jaune, 16, SANS);

      encadre(ctx, W * 0.5, H * 0.90, W * 0.66, H * 0.13,
              "eau de chaux troublée  =  présence de CO₂", et(0.75, 0.25, p), C.or, 19, SANS);
    }
  },

  { caption: "Si le dioxygène manque, la combustion devient incomplète : elle produit du carbone (les suies) et surtout du monoxyde de carbone, un gaz mortel.",
    label: 'Combustion incomplète',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'DANGER', 'Complète ou incomplète', p, C.rouge);
      const y = H * 0.34, w = W * 0.38, h = H * 0.26;

      cadre(ctx, W * 0.07, y, w, h, et(0.05, 0.25, p), C.vert, 1.8);
      txt(ctx, 'COMBUSTION COMPLÈTE', W * 0.07 + w / 2, y + h * 0.24, et(0.1, 0.25, p), C.vert, 17, MONO);
      txt(ctx, "assez de dioxygène", W * 0.07 + w / 2, y + h * 0.52, et(0.14, 0.25, p), C.blanc, 16, SANS);
      txt(ctx, "produits : CO₂ et H₂O · flamme bleue", W * 0.07 + w / 2, y + h * 0.80, et(0.18, 0.25, p), C.doux, 15, SANS);

      cadre(ctx, W * 0.55, y, w, h, et(0.25, 0.25, p), C.rouge, 1.8);
      txt(ctx, 'COMBUSTION INCOMPLÈTE', W * 0.55 + w / 2, y + h * 0.24, et(0.3, 0.25, p), C.rouge, 17, MONO);
      txt(ctx, "dioxygène insuffisant", W * 0.55 + w / 2, y + h * 0.52, et(0.34, 0.25, p), C.blanc, 16, SANS);
      txt(ctx, "produits : CO, suies · flamme jaune fumeuse", W * 0.55 + w / 2, y + h * 0.80, et(0.38, 0.25, p), C.doux, 15, SANS);

      const q = et(0.55, 0.3, p);
      if (q > 0) {
        cadre(ctx, W * 0.18, H * 0.70, W * 0.64, H * 0.20, q, C.rouge, 2.4);
        txt(ctx, 'LE MONOXYDE DE CARBONE  CO', W * 0.5, H * 0.77, et(0.62, 0.25, p), C.rouge, 21, MONO);
        txt(ctx, "incolore, inodore, mortel — d'où l'obligation d'aérer", W * 0.5, H * 0.84, et(0.72, 0.25, p), C.blanc, 17, SANS);
        txt(ctx, "et de faire entretenir chaudières et chauffe-eau.", W * 0.5, H * 0.875, et(0.82, 0.18, p), C.doux, 16, SANS);
      }
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_comb_2', chapitre: CH6, niveau: '3ème',
  titre: 'La combustion du méthane',
  desc: "Une réaction complète, du montage expérimental à l'équation ajustée, avec ses enjeux énergétiques.",
  steps: [

  { caption: "On brûle du méthane et on recueille ce qui se forme au-dessus de la flamme : de la buée, puis un gaz qui trouble l'eau de chaux.",
    label: "L'expérience",
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'EXPÉRIENCE', 'Que produit une flamme de gaz ?', p, C.jaune);
      const cx = W * 0.32, bas = H * 0.80;
      /* Bec de gaz. */
      seg(ctx, cx - 22, bas, cx + 22, bas, et(0.05, 0.2, p), C.blanc, 2.2);
      seg(ctx, cx - 9, bas, cx - 9, bas - 60, et(0.08, 0.25, p), C.blanc, 2.2);
      seg(ctx, cx + 9, bas, cx + 9, bas - 60, et(0.1, 0.25, p), C.blanc, 2.2);
      flamme(ctx, cx, bas - 60, 78, et(0.2, 0.4, p));
      txt(ctx, 'méthane CH₄', cx, bas + 26, et(0.3, 0.2, p), C.jaune, 16, SANS);

      /* Récipient froid tenu au-dessus : la buée s'y dépose. */
      const q = et(0.4, 0.3, p);
      cadre(ctx, cx - 46, bas - 190, 92, 44, q, C.bleu, 2);
      txt(ctx, 'verre froid', cx, bas - 168, et(0.5, 0.25, p), C.bleu, 14, SANS);
      for (let i = 0; i < 5; i++) bille(ctx, cx - 32 + i * 16, bas - 150, 3, et(0.55 + i * 0.03, 0.25, p), C.bleu);

      puces(ctx, W * 0.55, H * 0.36, [
        { t: "De la buée se dépose : de l'eau s'est formée.", c: C.bleu },
        { t: "L'eau de chaux se trouble : du CO₂ s'est formé.", c: C.vert },
        { t: "La flamme chauffe : la réaction libère de l'énergie.", c: C.rouge },
        { t: "Les réactifs : méthane et dioxygène de l'air.", c: C.jaune },
      ], p, { debut: 0.45, pas: 0.13, dy: 46, s: 17 });
    }
  },

  { caption: "L'équation ajustée de cette combustion, molécule par molécule : une de méthane, deux de dioxygène.",
    label: "L'équation",
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'ÉQUATION', 'La combustion complète du méthane', p, C.vert);
      const ech = Math.min(W * 0.062, H * 0.11), y = H * 0.48;

      molecule(ctx, W * 0.12, y, ech, MOL.CH4, et(0.03, 0.28, p), { lc: C.doux });
      txt(ctx, '+', W * 0.22, y, et(0.12, 0.2, p), C.doux, 26, SANS);
      molecule(ctx, W * 0.30, y - H * 0.05, ech, MOL.O2, et(0.15, 0.28, p), { lc: C.doux });
      molecule(ctx, W * 0.30, y + H * 0.08, ech, MOL.O2, et(0.2, 0.28, p), { lc: C.doux });
      fleche(ctx, W * 0.39, y, W * 0.50, y, et(0.3, 0.3, p), C.jaune, 2.4);
      molecule(ctx, W * 0.60, y, ech, MOL.CO2, et(0.4, 0.28, p), { lc: C.doux });
      txt(ctx, '+', W * 0.71, y, et(0.48, 0.2, p), C.doux, 26, SANS);
      molecule(ctx, W * 0.80, y - H * 0.05, ech, MOL.H2O, et(0.5, 0.28, p), { lc: C.doux });
      molecule(ctx, W * 0.80, y + H * 0.08, ech, MOL.H2O, et(0.55, 0.28, p), { lc: C.doux });

      txt(ctx, 'CH₄  +  2 O₂   →   CO₂  +  2 H₂O',
          W * 0.5, H * 0.86, et(0.65, 0.3, p), C.vert, 30, MONO);
      txt(ctx, "Les coefficients disent combien de molécules de chaque espèce interviennent.",
          W * 0.5, H * 0.94, et(0.85, 0.15, p), C.or, 16, SANS);
    }
  },

  { caption: "Vérification : chaque atome se retrouve, en même nombre, de part et d'autre de la flèche.",
    label: 'Le bilan des atomes',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CONSERVATION', 'Les atomes se retrouvent tous', p, C.jaune);
      txt(ctx, 'CH₄ + 2 O₂  →  CO₂ + 2 H₂O', W * 0.5, H * 0.28, et(0.03, 0.2, p), C.doux, 24, MONO);
      tableau(ctx, W * 0.18, H * 0.42, W * 0.64,
        [ { t: 'ATOME' }, { t: 'AVANT' }, { t: 'APRÈS' }, { t: '' } ],
        [
          [ 'carbone  C',   { t: '1', f: MONO, s: 20 }, { t: '1', f: MONO, s: 20 }, { t: '✓', c: C.vert, s: 20 } ],
          [ 'hydrogène  H', { t: '4', f: MONO, s: 20 }, { t: '4', f: MONO, s: 20 }, { t: '✓', c: C.vert, s: 20 } ],
          [ 'oxygène  O',   { t: '4', f: MONO, s: 20 }, { t: '4', f: MONO, s: 20 }, { t: '✓', c: C.vert, s: 20 } ],
        ], p, { dy: 48 });
      txt(ctx, "Les atomes ne sont ni créés ni détruits : ils changent seulement de voisins.",
          W * 0.5, H * 0.82, et(0.7, 0.22, p), C.blanc, 18, SANS);
      txt(ctx, "C'est pourquoi la masse totale se conserve.",
          W * 0.5, H * 0.89, et(0.85, 0.15, p), C.or, 17, SANS);
    }
  },

  { caption: "Brûler un combustible fossile libère de l'énergie — et rejette du CO₂, gaz à effet de serre.",
    label: 'Énergie et CO₂',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'ENJEUX', "Ce que produit une combustion", p, C.rouge);
      const cx = W * 0.28, cy = H * 0.50;
      flamme(ctx, cx, cy + 40, 90, et(0.05, 0.35, p));
      txt(ctx, 'combustible fossile', cx, cy + 78, et(0.2, 0.25, p), C.doux, 16, SANS);
      txt(ctx, 'gaz, charbon, pétrole', cx, cy + 102, et(0.24, 0.25, p), C.doux, 14, SANS);

      fleche(ctx, cx + W * 0.10, cy - 30, cx + W * 0.24, cy - 60, et(0.35, 0.3, p), C.jaune, 2.2);
      txt(ctx, 'ÉNERGIE utile', cx + W * 0.36, cy - 66, et(0.42, 0.25, p), C.jaune, 19, MONO);
      txt(ctx, 'chaleur, électricité, mouvement', cx + W * 0.36, cy - 42, et(0.46, 0.25, p), C.doux, 15, SANS);

      fleche(ctx, cx + W * 0.10, cy + 10, cx + W * 0.24, cy + 44, et(0.55, 0.3, p), C.rouge, 2.2);
      txt(ctx, 'CO₂ rejeté', cx + W * 0.36, cy + 44, et(0.62, 0.25, p), C.rouge, 19, MONO);
      txt(ctx, "gaz à effet de serre : il réchauffe l'atmosphère", cx + W * 0.36, cy + 68, et(0.66, 0.25, p), C.doux, 15, SANS);

      txt(ctx, "Toute combustion d'un composé carboné produit du CO₂ : c'est inévitable, c'est de la chimie.",
          W * 0.5, H * 0.90, et(0.78, 0.22, p), C.or, 16, SANS);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'Les combustions',
    body: [
      { t: "Il faut trois éléments : combustible, comburant, énergie.", c: C.blanc },
      { t: "Supprimer un seul des trois éteint le feu.", c: C.bleu },
      { t: "C + O₂ → CO₂        CH₄ + 2 O₂ → CO₂ + 2 H₂O", c: C.vert, f: MONO, s: 19 },
      { t: "Eau de chaux troublée = dioxyde de carbone.", c: C.jaune },
      { t: "Combustion incomplète : suies et monoxyde de carbone, mortel.", c: C.rouge },
    ],
    encadre: 'combustible + comburant + énergie',
    caption: "Brûler, c'est réorganiser des atomes en libérant de l'énergie."
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   CHAPITRE 7 — ACIDES, BASES ET pH
   ══════════════════════════════════════════════════════════════════════ */

const CH7 = 'Acides, bases et pH';

LECONS.push(lecon({
  id: 'pc_ph_1', chapitre: CH7, niveau: '3ème',
  titre: "L'échelle de pH",
  desc: "Une échelle de 0 à 14 pour classer les solutions, et trois façons de mesurer.",
  steps: [

  { caption: "Le pH est un nombre, sans unité, compris entre 0 et 14. Il classe toutes les solutions aqueuses.",
    label: "L'échelle",
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MESURER UNE SOLUTION', "L'échelle de pH", p, C.vert);
      echellePH(ctx, W * 0.10, H * 0.48, W * 0.80, p, { h: 34, reperes: [] });
      puces(ctx, W * 0.12, H * 0.70, [
        { t: "pH < 7   →   la solution est ACIDE", c: C.rouge, f: MONO, s: 19 },
        { t: "pH = 7   →   la solution est NEUTRE", c: C.vert, f: MONO, s: 19 },
        { t: "pH > 7   →   la solution est BASIQUE", c: C.bleu, f: MONO, s: 19 },
      ], p, { debut: 0.7, pas: 0.1, dy: 40 });
      txt(ctx, "Plus le pH est bas, plus la solution est acide.",
          W * 0.5, H * 0.95, et(0.9, 0.1, p), C.or, 16, SANS);
    }
  },

  { caption: "Des exemples de la vie courante placés sur l'échelle : le repère central, c'est l'eau pure.",
    label: 'Des exemples',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'REPÈRES', 'Le pH de tous les jours', p);
      echellePH(ctx, W * 0.10, H * 0.66, W * 0.80, p, {
        h: 30, debutReperes: 0.35,
        reperes: [
          { v: 1.5, t: 'suc gastrique', c: C.rouge },
          { v: 2.5, t: 'citron', c: C.rouge },
          { v: 5,   t: 'pluie', c: C.jaune },
          { v: 7,   t: 'eau pure', c: C.vert },
          { v: 9,   t: 'savon', c: C.bleu },
          { v: 13,  t: 'déboucheur', c: C.bleu },
        ]
      });
      txt(ctx, "Les solutions les plus corrosives sont aux deux extrémités : très acides ET très basiques.",
          W * 0.5, H * 0.92, et(0.85, 0.15, p), C.or, 16, SANS);
    }
  },

  { caption: "Trois instruments pour mesurer, du plus rapide au plus précis.",
    label: 'Mesurer le pH',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'INSTRUMENTS', 'Comment mesurer un pH', p, C.jaune);
      const y = H * 0.34, w = W * 0.27, h = H * 0.34;
      const outils = [
        { t: 'PAPIER pH', d: "on trempe, on compare la couleur", pr: "précision : ± 1 unité", c: C.jaune },
        { t: 'INDICATEUR COLORÉ', d: "quelques gouttes de BBT", pr: "donne une zone, pas un nombre", c: C.vert },
        { t: 'pH-MÈTRE', d: "sonde plongée dans la solution", pr: "précision : au dixième", c: C.bleu },
      ];
      outils.forEach((o, i) => {
        const x = W * (0.06 + i * 0.31);
        const q = et(0.05 + i * 0.18, 0.3, p);
        cadre(ctx, x, y, w, h, q, o.c, 1.8);
        txt(ctx, o.t, x + w / 2, y + h * 0.22, et(0.1 + i * 0.18, 0.25, p), o.c, 16, MONO);
        txt(ctx, o.d, x + w / 2, y + h * 0.50, et(0.14 + i * 0.18, 0.25, p), C.blanc, 15, SANS);
        txt(ctx, o.pr, x + w / 2, y + h * 0.76, et(0.18 + i * 0.18, 0.25, p), C.doux, 14, SANS);
      });
      txt(ctx, "Le bleu de bromothymol (BBT) : jaune en milieu acide, vert vers 7, bleu en milieu basique.",
          W * 0.5, H * 0.82, et(0.65, 0.25, p), C.doux, 17, SANS);
      txt(ctx, "Le pH dépend de la température : on note toujours à quelle température on a mesuré.",
          W * 0.5, H * 0.90, et(0.8, 0.2, p), C.or, 16, SANS);
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_ph_2', chapitre: CH7, niveau: '3ème',
  titre: 'Acides, bases : ions et sécurité',
  desc: "Ce que le pH mesure vraiment, l'effet d'une dilution, et les règles à ne jamais oublier au laboratoire.",
  steps: [

  { caption: "Ce que le pH mesure : la proportion d'ions hydrogène H⁺ par rapport aux ions hydroxyde OH⁻.",
    label: 'Les ions en jeu',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'AU NIVEAU DES IONS', 'Ce que le pH traduit', p, C.violet);
      const bas = H * 0.66, w = W * 0.16, h = H * 0.28;
      const xs = [W * 0.20, W * 0.50, W * 0.80];
      const cfg = [
        { t: 'ACIDE', st: 'pH < 7', c: C.rouge, nh: 9, noh: 1 },
        { t: 'NEUTRE', st: 'pH = 7', c: C.vert, nh: 5, noh: 5 },
        { t: 'BASIQUE', st: 'pH > 7', c: C.bleu, nh: 1, noh: 9 },
      ];
      cfg.forEach((k, i) => {
        becher(ctx, xs[i], bas, w, h, et(0.05 + i * 0.1, 0.25, p), { bec: false, niveau: 0.7, debutLiquide: 0.15 + i * 0.08 });
        const rnd = graine(100 + i * 7);
        for (let j = 0; j < k.nh; j++) {
          bille(ctx, xs[i] - w * 0.38 + rnd() * w * 0.76, bas - 10 - rnd() * h * 0.6, 5,
                et(0.35 + j * 0.02, 0.25, p), C.rouge);
        }
        for (let j = 0; j < k.noh; j++) {
          bille(ctx, xs[i] - w * 0.38 + rnd() * w * 0.76, bas - 10 - rnd() * h * 0.6, 5,
                et(0.45 + j * 0.02, 0.25, p), C.bleu);
        }
        txt(ctx, k.t, xs[i], H * 0.30, et(0.2 + i * 0.1, 0.25, p), k.c, 19, MONO);
        txt(ctx, k.st, xs[i], bas + 32, et(0.6, 0.2, p), k.c, 17, MONO);
      });
      txt(ctx, "● H⁺ (ion hydrogène)      ● OH⁻ (ion hydroxyde)",
          W * 0.5, H * 0.86, et(0.7, 0.2, p), C.doux, 17, SANS);
      txt(ctx, "Acide : H⁺ en majorité.   Basique : OH⁻ en majorité.   Neutre : autant des deux.",
          W * 0.5, H * 0.93, et(0.82, 0.18, p), C.or, 16, SANS);
    }
  },

  { caption: "Diluer une solution acide, c'est ajouter de l'eau : les ions H⁺ se dispersent et le pH remonte vers 7.",
    label: 'Diluer',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'DILUTION', 'Le pH se rapproche de 7', p, C.bleu);
      const bas = H * 0.60, h = H * 0.26;
      const xg = W * 0.26, xd = W * 0.68;

      becher(ctx, xg, bas, W * 0.12, h, et(0.05, 0.25, p), { bec: false, niveau: 0.5, debutLiquide: 0.12, liquide: 'rgba(230,130,110,0.30)', liquide2: C.rouge });
      const r1 = graine(5);
      for (let i = 0; i < 12; i++) bille(ctx, xg - W * 0.05 + r1() * W * 0.10, bas - 10 - r1() * h * 0.4, 4.5, et(0.2, 0.3, p), C.rouge);
      txt(ctx, 'pH = 2', xg, bas + 32, et(0.3, 0.2, p), C.rouge, 20, MONO);

      fleche(ctx, xg + W * 0.09, bas - h * 0.5, xd - W * 0.11, bas - h * 0.5, et(0.42, 0.25, p), C.bleu, 2.2);
      txt(ctx, "on ajoute de l'eau", W * 0.47, bas - h * 0.5 - 24, et(0.48, 0.2, p), C.bleu, 16, SANS);

      becher(ctx, xd, bas, W * 0.17, h, et(0.3, 0.25, p), { bec: false, niveau: 0.72, debutLiquide: 0.45, liquide: 'rgba(230,130,110,0.13)', liquide2: C.rouge });
      const r2 = graine(5);
      for (let i = 0; i < 12; i++) bille(ctx, xd - W * 0.075 + r2() * W * 0.15, bas - 10 - r2() * h * 0.6, 4.5, et(0.6, 0.3, p), C.rouge);
      txt(ctx, 'pH = 4', xd, bas + 32, et(0.72, 0.2, p), C.vert, 20, MONO);

      txt(ctx, "Même nombre d'ions H⁺, mais dans plus d'eau : la solution est moins acide.",
          W * 0.5, H * 0.80, et(0.8, 0.2, p), C.blanc, 18, SANS);
      txt(ctx, "Diluer une base fait au contraire baisser le pH vers 7.",
          W * 0.5, H * 0.88, et(0.88, 0.12, p), C.doux, 16, SANS);
    }
  },

  { caption: "La règle de sécurité qui ne souffre aucune exception : on verse toujours l'acide dans l'eau, jamais l'eau dans l'acide.",
    label: 'Sécurité',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'SÉCURITÉ', 'Le geste juste', p, C.rouge);
      const bas = H * 0.60, w = W * 0.14, h = H * 0.26;
      const xg = W * 0.28, xd = W * 0.72;

      /* Le bon geste, à gauche. */
      becher(ctx, xg, bas, w, h, et(0.05, 0.25, p), { bec: false, niveau: 0.6, debutLiquide: 0.12, liquide: 'rgba(130,200,230,0.20)' });
      for (let i = 0; i < 4; i++) bille(ctx, xg, bas - h * 0.75 - i * 18, 3.5, et(0.25 + i * 0.03, 0.25, p), C.rouge);
      txt(ctx, "acide  →  dans l'eau", xg, H * 0.30, et(0.2, 0.25, p), C.vert, 18, MONO);
      txt(ctx, 'CORRECT', xg, bas + 34, et(0.35, 0.2, p), C.vert, 17, MONO);

      /* Le mauvais geste, à droite, barré. */
      becher(ctx, xd, bas, w, h, et(0.2, 0.25, p), { bec: false, niveau: 0.6, debutLiquide: 0.3, liquide: 'rgba(230,130,110,0.24)', liquide2: C.rouge });
      for (let i = 0; i < 4; i++) bille(ctx, xd, bas - h * 0.75 - i * 18, 3.5, et(0.45 + i * 0.03, 0.25, p), C.bleu);
      txt(ctx, "eau  →  dans l'acide", xd, H * 0.30, et(0.4, 0.25, p), C.rouge, 18, MONO);
      const qx = et(0.6, 0.25, p);
      seg(ctx, xd - w * 0.8, bas - h * 1.1, xd + w * 0.8, bas + 8, qx, C.rouge, 3);
      seg(ctx, xd + w * 0.8, bas - h * 1.1, xd - w * 0.8, bas + 8, qx, C.rouge, 3);
      txt(ctx, 'INTERDIT', xd, bas + 34, et(0.7, 0.2, p), C.rouge, 17, MONO);

      puces(ctx, W * 0.14, H * 0.80, [
        { t: "La dilution d'un acide dégage beaucoup de chaleur : l'eau versée sur l'acide projette des gouttes.", c: C.blanc, s: 16 },
        { t: "Toujours : blouse, lunettes, gants — et rinçage abondant en cas de contact.", c: C.jaune, s: 16 },
      ], p, { debut: 0.78, pas: 0.1, dy: 34 });
    }
  },

  { caption: "Un acide attaque les métaux et libère un gaz : le dihydrogène, que l'on identifie par une petite détonation.",
    label: 'Action sur un métal',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'RÉACTION', "L'acide attaque le fer", p, C.jaune);
      const cx = W * 0.30, bas = H * 0.72, w = W * 0.14, h = H * 0.30;
      becher(ctx, cx, bas, w, h, et(0.05, 0.25, p), { bec: false, niveau: 0.55, debutLiquide: 0.15, liquide: 'rgba(230,130,110,0.20)', liquide2: C.rouge });
      txt(ctx, 'acide chlorhydrique', cx, bas + 32, et(0.25, 0.2, p), C.rouge, 15, SANS);
      const qm = et(0.28, 0.25, p);
      cadre(ctx, cx - 16, bas - 26, 32, 18, qm, 'rgba(180,180,175,0.9)', 2);
      txt(ctx, 'fer', cx, bas - 17, et(0.35, 0.2, p), C.doux, 12, SANS);
      /* Effervescence. */
      const rnd = graine(61);
      for (let i = 0; i < 12; i++) {
        const q = et(0.4 + i * 0.02, 0.35, p);
        if (q <= 0) continue;
        cercle(ctx, cx - w * 0.3 + rnd() * w * 0.6, bas - 30 - rnd() * h * 0.4 * ease(q), 3 + i % 3, 1, C.jaune, 1.3);
      }
      txt(ctx, 'effervescence', cx, H * 0.30, et(0.45, 0.25, p), C.jaune, 17, SANS);

      puces(ctx, W * 0.52, H * 0.38, [
        { t: "Le gaz formé est le DIHYDROGÈNE H₂.", c: C.jaune },
        { t: "Test : on approche une flamme d'un tube rempli du gaz.", c: C.blanc },
        { t: "Une détonation brève — un « aboiement » — le confirme.", c: C.rouge },
        { t: "Le fer, lui, se dissout : il passe en ions Fe²⁺.", c: C.vert },
      ], p, { debut: 0.5, pas: 0.12, dy: 44, s: 17 });
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'Acides, bases et pH',
    body: [
      { t: "Le pH va de 0 à 14 : acide < 7 < basique, neutre à 7 exactement.", c: C.blanc },
      { t: "Acide : ions H⁺ majoritaires.  Basique : ions OH⁻ majoritaires.", c: C.jaune },
      { t: "Diluer rapproche toujours le pH de 7.", c: C.bleu },
      { t: "Un acide attaque les métaux et libère du dihydrogène H₂.", c: C.vert },
      { t: "On verse l'acide dans l'eau, jamais l'inverse.", c: C.rouge },
    ],
    encadre: 'acide < 7 < basique',
    caption: "Le pH résume en un nombre ce que contient une solution."
  }),

]}));

/* ── Enregistrement auprès de cours.html ──────────────────────────────
   Les quatre thèmes du programme sont déclarés pour que le filtre soit
   prêt ; seuls ceux qui possèdent des leçons s'afficheront. */
if (typeof window !== 'undefined') {
  window.COURS_PAR_MATIERE = window.COURS_PAR_MATIERE || {};
  window.COURS_PAR_MATIERE['physique-chimie'] = {
    branches: [
      { id: 'matiere',    label: 'Matière',                   color: '#7ab4c8' },
      { id: 'mouvements', label: 'Mouvements et interactions', color: '#c8a07a' },
      { id: 'energie',    label: 'Énergie',                   color: '#e8a87c' },
      { id: 'signaux',    label: 'Signaux',                   color: '#a07ac8' },
    ],
    lecons: LECONS,
  };
}

})();
