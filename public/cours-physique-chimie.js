/* ════════════════════════════════════════════════════════════════
   POLYMATES — COURS ANIMÉS : PHYSIQUE-CHIMIE, THÈME « MATIÈRE »

   Ce fichier fournit à cours.html une banque de leçons animées pour les
   thèmes du programme de cycle 4, chapitre par chapitre.

   THÈME « MATIÈRE » :

     1. États et changements d'état
     2. Masse, volume et masse volumique
     3. Mélanges et solutions
     4. Transformations chimiques
     5. Atomes, molécules et ions
     6. Combustions
     7. Acides, bases et pH

   THÈME « ÉNERGIE » :

     1. Formes et sources d'énergie
     2. Conversions et conservation
     3. Circuits électriques
     4. Tension et intensité
     5. Loi d'Ohm
     6. Puissance et énergie électrique
     7. Sécurité électrique

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
/* Thème en cours d'écriture : chaque bloc de chapitres le repositionne
   avant de pousser ses leçons. */
let THEME_COURANT = { id: 'matiere', label: 'Matière' };

function lecon(cfg) {
  /* Le thème par défaut reste « Matière » : les leçons écrites avant
     l'ajout d'Énergie n'ont pas eu à être retouchées. */
  const th = THEME_COURANT;
  return {
    id: cfg.id,
    chapter: cfg.chapitre,
    branch: cfg.branche || th.id,
    tag: (cfg.theme || th.label) + ' · ' + cfg.niveau,
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

/* ══════════════════════════════════════════════════════════════════════
   THÈME « ÉNERGIE » — outils de schéma
   ══════════════════════════════════════════════════════════════════════ */

THEME_COURANT = { id: 'energie', label: 'Énergie' };

/* ── Symboles normalisés ──────────────────────────────────────────────
   Chaque symbole se dessine autour de son centre (cx, cy) et sait
   s'orienter : `h` vaut true si le fil est horizontal à cet endroit.
   Tous renvoient la demi-largeur occupée sur le fil, ce qui permet au
   traceur de circuit de ménager le bon espace. */

const EMPRISE = 22;

function symGenerateur(ctx, cx, cy, h, p, c) {
  /* Deux barres inégales : la longue est la borne +, la courte la borne −. */
  const col = c || C.jaune;
  if (h) {
    seg(ctx, cx - 6, cy - 20, cx - 6, cy + 20, et(0, 0.3, p), col, 2.4);
    seg(ctx, cx + 6, cy - 10, cx + 6, cy + 10, et(0.15, 0.3, p), col, 4);
    txt(ctx, '+', cx - 16, cy - 26, et(0.3, 0.25, p), col, 15, MONO);
    txt(ctx, '−', cx + 18, cy - 26, et(0.35, 0.25, p), col, 15, MONO);
  } else {
    seg(ctx, cx - 20, cy - 6, cx + 20, cy - 6, et(0, 0.3, p), col, 2.4);
    seg(ctx, cx - 10, cy + 6, cx + 10, cy + 6, et(0.15, 0.3, p), col, 4);
    txt(ctx, '+', cx + 30, cy - 10, et(0.3, 0.25, p), col, 15, MONO);
    txt(ctx, '−', cx + 30, cy + 12, et(0.35, 0.25, p), col, 15, MONO);
  }
  return EMPRISE;
}

function symLampe(ctx, cx, cy, h, p, c, allumee) {
  const col = c || C.blanc, r = 16;
  cercle(ctx, cx, cy, r, et(0, 0.35, p), col, 2);
  const q = et(0.3, 0.3, p);
  const d = r * 0.72;
  seg(ctx, cx - d, cy - d, cx + d, cy + d, q, col, 1.8);
  seg(ctx, cx + d, cy - d, cx - d, cy + d, q, col, 1.8);
  /* Halo : la lampe brille quand le circuit est fermé. */
  if (allumee) {
    const a = ease(et(0.4, 0.4, p));
    ctx.save();
    ctx.globalAlpha = a * 0.35;
    ctx.fillStyle = C.jaune;
    ctx.beginPath(); ctx.arc(cx, cy, r * (2 + Math.sin(p * 8) * 0.12), 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  return EMPRISE;
}

function symInterrupteur(ctx, cx, cy, h, p, ouvert, c) {
  const col = c || C.blanc;
  if (h) {
    bille(ctx, cx - 16, cy, 3.5, et(0, 0.25, p), col);
    bille(ctx, cx + 16, cy, 3.5, et(0.05, 0.25, p), col);
    if (ouvert) seg(ctx, cx - 16, cy, cx + 13, cy - 17, et(0.15, 0.3, p), col, 2.2);
    else        seg(ctx, cx - 16, cy, cx + 16, cy, et(0.15, 0.3, p), col, 2.2);
  } else {
    bille(ctx, cx, cy - 16, 3.5, et(0, 0.25, p), col);
    bille(ctx, cx, cy + 16, 3.5, et(0.05, 0.25, p), col);
    if (ouvert) seg(ctx, cx, cy - 16, cx + 17, cy + 13, et(0.15, 0.3, p), col, 2.2);
    else        seg(ctx, cx, cy - 16, cx, cy + 16, et(0.15, 0.3, p), col, 2.2);
  }
  return EMPRISE;
}

function symResistance(ctx, cx, cy, h, p, c) {
  const col = c || C.vert;
  if (h) cadre(ctx, cx - 22, cy - 10, 44, 20, et(0, 0.35, p), col, 2);
  else   cadre(ctx, cx - 10, cy - 22, 20, 44, et(0, 0.35, p), col, 2);
  return 26;
}

function symMesure(ctx, cx, cy, lettre, p, c) {
  const col = c || C.bleu;
  cercle(ctx, cx, cy, 17, et(0, 0.35, p), col, 2.2);
  txt(ctx, lettre, cx, cy + 1, et(0.3, 0.3, p), col, 19, MONO);
  return 22;
}

function symMoteur(ctx, cx, cy, h, p, c) {
  const col = c || C.violet;
  cercle(ctx, cx, cy, 17, et(0, 0.35, p), col, 2.2);
  txt(ctx, 'M', cx, cy + 1, et(0.3, 0.3, p), col, 18, MONO);
  return 22;
}

function symFusible(ctx, cx, cy, h, p, c) {
  const col = c || C.rouge;
  if (h) { cadre(ctx, cx - 20, cy - 9, 40, 18, et(0, 0.3, p), col, 2);
           seg(ctx, cx - 20, cy, cx + 20, cy, et(0.3, 0.3, p), col, 1.6); }
  else   { cadre(ctx, cx - 9, cy - 20, 18, 40, et(0, 0.3, p), col, 2);
           seg(ctx, cx, cy - 20, cx, cy + 20, et(0.3, 0.3, p), col, 1.6); }
  return 24;
}

/* ── Traceur de circuit ───────────────────────────────────────────────
   On décrit un circuit comme un rectangle de fil, et une liste de dipôles
   posés dessus : { cote:'haut'|'bas'|'gauche'|'droite', pos:0→1, dessin, label }.
   Le traceur découpe le fil autour de chaque dipôle, de sorte qu'aucun trait
   ne traverse un symbole. */
function circuit(ctx, x, y, w, h, composants, p, opts) {
  opts = opts || {};
  const col = opts.c || 'rgba(240,236,224,0.55)';
  const ep = opts.ep || 2;
  const cotes = {
    haut:   { x1: x,     y1: y,     x2: x + w, y2: y,     horiz: true  },
    bas:    { x1: x,     y1: y + h, x2: x + w, y2: y + h, horiz: true  },
    gauche: { x1: x,     y1: y,     x2: x,     y2: y + h, horiz: false },
    droite: { x1: x + w, y1: y,     x2: x + w, y2: y + h, horiz: false },
  };
  const qFil = et(0, opts.durFil || 0.3, p);

  Object.keys(cotes).forEach(nom => {
    const s = cotes[nom];
    const L = s.horiz ? (s.x2 - s.x1) : (s.y2 - s.y1);
    const dessus = composants.filter(k => k.cote === nom).sort((a, b) => a.pos - b.pos);
    let curseur = 0;
    dessus.forEach(k => {
      const centre = L * k.pos;
      const demi = k.demi || EMPRISE;
      const a = curseur, b = Math.max(curseur, centre - demi);
      if (s.horiz) seg(ctx, s.x1 + a, s.y1, s.x1 + b, s.y1, qFil, col, ep);
      else         seg(ctx, s.x1, s.y1 + a, s.x1, s.y1 + b, qFil, col, ep);
      curseur = centre + demi;
    });
    if (s.horiz) seg(ctx, s.x1 + curseur, s.y1, s.x2, s.y2, qFil, col, ep);
    else         seg(ctx, s.x1, s.y1 + curseur, s.x2, s.y2, qFil, col, ep);
  });

  /* Les dipôles, une fois le fil posé. */
  composants.forEach((k, i) => {
    const s = cotes[k.cote];
    const L = s.horiz ? (s.x2 - s.x1) : (s.y2 - s.y1);
    const cx = s.horiz ? s.x1 + L * k.pos : s.x1;
    const cy = s.horiz ? s.y1 : s.y1 + L * k.pos;
    const q = et((opts.debutDipoles === undefined ? 0.22 : opts.debutDipoles) + i * 0.08, 0.3, p);
    k.dessin(ctx, cx, cy, s.horiz, q);
    if (k.label) {
      const dx = s.horiz ? 0 : (k.cote === 'gauche' ? -42 : 42);
      const dy = s.horiz ? (k.cote === 'haut' ? -34 : 36) : -30;
      txt(ctx, k.label, cx + dx, cy + dy, et(0.4 + i * 0.06, 0.3, p), k.labelC || C.doux, k.labelS || 15, SANS);
    }
  });
}

/* Sens conventionnel du courant : des flèches qui parcourent le fil. */
function sensCourant(ctx, x, y, w, h, p, c) {
  const col = c || C.jaune;
  const fleches = [
    { x: x + w * 0.5, y: y,     dx: 1,  dy: 0 },
    { x: x + w,       y: y + h * 0.5, dx: 0,  dy: 1 },
    { x: x + w * 0.5, y: y + h, dx: -1, dy: 0 },
    { x: x,           y: y + h * 0.5, dx: 0,  dy: -1 },
  ];
  fleches.forEach((f, i) => {
    const q = et(0.05 + i * 0.1, 0.3, p);
    if (q <= 0) return;
    fleche(ctx, f.x - f.dx * 22, f.y - f.dy * 22, f.x + f.dx * 22, f.y + f.dy * 22, q, col, 2);
  });
}

/* Chaîne énergétique : réservoir → convertisseur → utilisation, avec les
   formes d'énergie inscrites sur les flèches. C'est le schéma exigible. */
function chaineEnergetique(ctx, x, y, w, blocs, transferts, p, opts) {
  opts = opts || {};
  const n = blocs.length;
  const bw = opts.bw || w / (n + (n - 1) * 0.6);
  const espace = (w - n * bw) / Math.max(1, n - 1);
  const bh = opts.bh || 72;
  const centres = [];
  blocs.forEach((b, i) => {
    const bx = x + i * (bw + espace);
    const q = et(0.05 + i * 0.14, 0.3, p);
    cadre(ctx, bx, y, bw, bh, q, b.c || C.blanc, 2);
    txt(ctx, b.t, bx + bw / 2, y + bh * 0.38, et(0.1 + i * 0.14, 0.28, p), b.c || C.blanc, b.s || 16, MONO);
    if (b.d) txt(ctx, b.d, bx + bw / 2, y + bh * 0.72, et(0.14 + i * 0.14, 0.28, p), C.doux, 13, SANS);
    centres.push({ g: bx, d: bx + bw, c: bx + bw / 2 });
  });
  (transferts || []).forEach((t, i) => {
    const a = centres[i], b = centres[i + 1];
    if (!a || !b) return;
    const q = et(0.3 + i * 0.16, 0.3, p);
    fleche(ctx, a.d + 6, y + bh / 2, b.g - 6, y + bh / 2, q, t.c || C.jaune, 2.2);
    txt(ctx, t.t, (a.d + b.g) / 2, y + bh / 2 - 22, et(0.36 + i * 0.16, 0.3, p), t.c || C.jaune, 14, SANS);
  });
  return y + bh;
}

/* ══════════════════════════════════════════════════════════════════════
   ÉNERGIE, CHAPITRE 1 — FORMES ET SOURCES D'ÉNERGIE
   ══════════════════════════════════════════════════════════════════════ */

const CE1 = "Formes et sources d'énergie";

LECONS.push(lecon({
  id: 'pc_energie_1', chapitre: CE1, niveau: '5ème',
  titre: "Les formes d'énergie",
  desc: "Cinétique, de position, thermique, chimique… reconnaître sous quelle forme l'énergie se présente.",
  steps: [

  { caption: "L'énergie, c'est ce qui permet de produire un mouvement, de chauffer, d'éclairer. Elle se mesure en joules.",
    label: "Qu'est-ce que l'énergie",
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'DÉFINITION', "L'énergie", p, C.jaune);
      const y = H * 0.46, r = Math.min(W * 0.055, H * 0.10);

      /* Un même réservoir, trois effets possibles. */
      bille(ctx, W * 0.22, y, r, et(0.05, 0.3, p), C.jaune);
      txt(ctx, 'énergie', W * 0.22, y + 1, et(0.2, 0.25, p), '#0f1a12', 15, SANS);
      const cibles = [
        { t: 'mettre en MOUVEMENT', c: C.vert, dy: -H * 0.16 },
        { t: 'CHAUFFER', c: C.rouge, dy: 0 },
        { t: 'ÉCLAIRER', c: C.bleu, dy: H * 0.16 },
      ];
      cibles.forEach((k, i) => {
        const q = et(0.32 + i * 0.14, 0.3, p);
        fleche(ctx, W * 0.29, y, W * 0.46, y + k.dy, q, k.c, 2);
        txt(ctx, k.t, W * 0.62, y + k.dy, et(0.38 + i * 0.14, 0.3, p), k.c, 19, MONO);
      });

      encadre(ctx, W * 0.5, H * 0.84, W * 0.60, H * 0.14,
              "unité : le JOULE  (J)", et(0.78, 0.22, p), C.or, 22);
      txt(ctx, "Pour les grandes quantités : 1 kJ = 1 000 J, et le kilowattheure (kWh) sur les factures.",
          W * 0.5, H * 0.95, et(0.9, 0.1, p), C.doux, 15, SANS);
    }
  },

  { caption: "L'énergie cinétique est celle d'un objet en mouvement. Elle augmente avec la masse, et beaucoup plus vite avec la vitesse.",
    label: 'Énergie cinétique',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'FORME 1', "L'énergie cinétique", p, C.vert);
      const route = H * 0.52;
      seg(ctx, W * 0.06, route + 26, W * 0.94, route + 26, et(0.03, 0.2, p), C.doux, 1.6);

      /* Deux mobiles : même masse, vitesses différentes. */
      const q1 = et(0.1, 0.3, p);
      cadre(ctx, W * 0.12, route - 18, 56, 30, q1, C.vert, 2);
      for (let i = 0; i < 3; i++) seg(ctx, W * 0.10 - i * 14, route - 4, W * 0.115 - i * 14, route - 4, et(0.2 + i * 0.03, 0.2, p), C.doux, 1.6);
      txt(ctx, 'v = 30 km/h', W * 0.15, route + 52, et(0.25, 0.25, p), C.vert, 16, MONO);

      const q2 = et(0.3, 0.3, p);
      cadre(ctx, W * 0.52, route - 18, 56, 30, q2, C.rouge, 2);
      for (let i = 0; i < 6; i++) seg(ctx, W * 0.50 - i * 16, route - 4, W * 0.52 - i * 16, route - 4, et(0.4 + i * 0.02, 0.2, p), C.jaune, 1.8);
      txt(ctx, 'v = 60 km/h', W * 0.55, route + 52, et(0.45, 0.25, p), C.rouge, 16, MONO);

      puces(ctx, W * 0.10, H * 0.74, [
        { t: "Elle dépend de la masse m et de la vitesse v :   Ec = ½ × m × v²", c: C.jaune, f: MONO, s: 18 },
        { t: "Doubler la vitesse multiplie l'énergie cinétique par QUATRE.", c: C.rouge, s: 17 },
        { t: "D'où la distance de freinage qui explose avec la vitesse.", c: C.doux, s: 16 },
      ], p, { debut: 0.55, pas: 0.12, dy: 38 });
    }
  },

  { caption: "L'énergie de position est celle que possède un objet du seul fait de sa hauteur : elle se libère quand il tombe.",
    label: 'Énergie de position',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'FORME 2', "L'énergie de position", p, C.bleu);
      const sol = H * 0.78;
      seg(ctx, W * 0.08, sol, W * 0.62, sol, et(0.03, 0.2, p), C.doux, 1.6);
      /* Une masse en hauteur, sa hauteur cotée. */
      const xh = W * 0.34, yh = H * 0.34;
      bille(ctx, xh, yh, 18, et(0.1, 0.3, p), C.bleu);
      ctx.save(); ctx.setLineDash([5, 6]);
      seg(ctx, xh, yh + 20, xh, sol, et(0.25, 0.3, p), 'rgba(240,236,224,0.3)', 1.4);
      ctx.setLineDash([]); ctx.restore();
      fleche(ctx, W * 0.24, sol, W * 0.24, yh, et(0.35, 0.3, p), C.jaune, 1.8);
      txt(ctx, 'hauteur h', W * 0.18, (sol + yh) / 2, et(0.45, 0.25, p), C.jaune, 16, SANS);
      txt(ctx, 'masse m', xh + 46, yh, et(0.3, 0.25, p), C.bleu, 16, SANS);

      puces(ctx, W * 0.58, H * 0.36, [
        { t: "Plus l'objet est haut, plus il en possède.", c: C.blanc },
        { t: "Plus il est lourd, plus il en possède.", c: C.blanc },
        { t: "En tombant, cette énergie se transforme", c: C.jaune },
        { t: "en énergie cinétique : il accélère.", c: C.jaune },
        { t: "C'est le principe du barrage hydraulique.", c: C.vert },
      ], p, { debut: 0.5, pas: 0.11, dy: 42, s: 17 });
    }
  },

  { caption: "Les autres formes à connaître : thermique, chimique, lumineuse, électrique et nucléaire.",
    label: 'Les autres formes',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'PANORAMA', "Les formes d'énergie", p);
      const formes = [
        { t: 'THERMIQUE', d: "l'agitation des particules · un radiateur", c: C.rouge },
        { t: 'CHIMIQUE', d: "stockée dans la matière · aliment, pile, essence", c: C.vert },
        { t: 'LUMINEUSE', d: "transportée par la lumière · le Soleil", c: C.jaune },
        { t: 'ÉLECTRIQUE', d: "portée par le courant · une prise", c: C.bleu },
        { t: 'NUCLÉAIRE', d: "contenue dans les noyaux · l'uranium", c: C.violet },
        { t: 'MÉCANIQUE', d: "cinétique + position · un vélo lancé", c: C.blanc },
      ];
      formes.forEach((f, i) => {
        const x = W * (0.06 + (i % 3) * 0.31), w = W * 0.28;
        const y = H * (0.32 + Math.floor(i / 3) * 0.28), h = H * 0.20;
        const q = et(0.05 + i * 0.11, 0.3, p);
        cadre(ctx, x, y, w, h, q, f.c, 1.8);
        txt(ctx, f.t, x + w / 2, y + h * 0.34, et(0.1 + i * 0.11, 0.25, p), f.c, 16, MONO);
        txt(ctx, f.d, x + w / 2, y + h * 0.68, et(0.14 + i * 0.11, 0.25, p), C.doux, 13, SANS);
      });
      txt(ctx, "Une même énergie passe d'une forme à l'autre : c'est tout l'objet du chapitre suivant.",
          W * 0.5, H * 0.94, et(0.85, 0.15, p), C.or, 16, SANS);
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_energie_2', chapitre: CE1, niveau: '4ème',
  titre: "Les sources d'énergie",
  desc: "Renouvelables ou non, et comment une centrale transforme une source en électricité.",
  steps: [

  { caption: "Une source non renouvelable existe en quantité limitée : une fois consommée, elle ne se reconstitue pas à notre échelle de temps.",
    label: 'Non renouvelables',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'FAMILLE 1', 'Les sources non renouvelables', p, C.rouge);
      const src = [
        { t: 'CHARBON', d: 'fossile' }, { t: 'PÉTROLE', d: 'fossile' },
        { t: 'GAZ NATUREL', d: 'fossile' }, { t: 'URANIUM', d: 'nucléaire' },
      ];
      src.forEach((s, i) => {
        const x = W * (0.07 + i * 0.23), w = W * 0.19;
        const q = et(0.05 + i * 0.12, 0.3, p);
        cadre(ctx, x, H * 0.32, w, H * 0.20, q, C.rouge, 1.8);
        txt(ctx, s.t, x + w / 2, H * 0.39, et(0.1 + i * 0.12, 0.25, p), C.rouge, 15, MONO);
        txt(ctx, s.d, x + w / 2, H * 0.46, et(0.14 + i * 0.12, 0.25, p), C.doux, 13, SANS);
      });
      puces(ctx, W * 0.10, H * 0.64, [
        { t: "Stocks formés en des millions d'années : ils s'épuisent.", c: C.blanc },
        { t: "Les fossiles rejettent du CO₂ en brûlant.", c: C.jaune },
        { t: "Le nucléaire n'émet pas de CO₂, mais produit des déchets radioactifs.", c: C.violet },
      ], p, { debut: 0.55, pas: 0.13, dy: 42, s: 17 });
    }
  },

  { caption: "Une source renouvelable se reconstitue en permanence : le vent souffle, le soleil brille, l'eau coule.",
    label: 'Renouvelables',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'FAMILLE 2', 'Les sources renouvelables', p, C.vert);
      const cy = H * 0.46, r = Math.min(W * 0.05, H * 0.09);
      const src = [
        { t: 'SOLAIRE', d: 'le rayonnement' },
        { t: 'ÉOLIENNE', d: 'le vent' },
        { t: 'HYDRAULIQUE', d: "l'eau qui tombe" },
        { t: 'BIOMASSE', d: 'le bois, les déchets' },
        { t: 'GÉOTHERMIE', d: 'la chaleur du sol' },
      ];
      src.forEach((s, i) => {
        const x = W * (0.13 + i * 0.185);
        const q = et(0.05 + i * 0.1, 0.3, p);
        bille(ctx, x, cy, r, q, C.vert);
        txt(ctx, s.t, x, cy + r + 28, et(0.1 + i * 0.1, 0.25, p), C.vert, 14, MONO);
        txt(ctx, s.d, x, cy + r + 50, et(0.14 + i * 0.1, 0.25, p), C.doux, 13, SANS);
      });
      puces(ctx, W * 0.12, H * 0.76, [
        { t: "Elles se renouvellent à l'échelle d'une vie humaine.", c: C.blanc },
        { t: "Presque toutes viennent en réalité du Soleil.", c: C.jaune },
        { t: "Renouvelable ne veut pas dire disponible en continu : le vent tombe, la nuit vient.", c: C.doux, s: 16 },
      ], p, { debut: 0.6, pas: 0.12, dy: 36, s: 17 });
    }
  },

  { caption: "Presque toutes les centrales fonctionnent pareil : on fait tourner une turbine, qui entraîne un alternateur, qui produit l'électricité.",
    label: 'Une centrale',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'PRODUIRE', "Le schéma commun à presque toutes les centrales", p, C.bleu);
      chaineEnergetique(ctx, W * 0.06, H * 0.36, W * 0.88, [
        { t: 'SOURCE', d: 'charbon, uranium, vent…', c: C.rouge },
        { t: 'TURBINE', d: 'elle tourne', c: C.jaune },
        { t: 'ALTERNATEUR', d: 'il convertit', c: C.vert },
        { t: 'RÉSEAU', d: 'vers les maisons', c: C.bleu },
      ], [
        { t: 'chaleur / mouvement' }, { t: 'mouvement' }, { t: 'électricité', c: C.bleu },
      ], p, { bh: H * 0.20 });
      txt(ctx, "Seule la façon de faire tourner la turbine change d'une centrale à l'autre.",
          W * 0.5, H * 0.74, et(0.7, 0.2, p), C.blanc, 18, SANS);
      txt(ctx, "Thermique et nucléaire : on chauffe de l'eau, la vapeur pousse la turbine.",
          W * 0.5, H * 0.82, et(0.8, 0.2, p), C.doux, 16, SANS);
      txt(ctx, "Le solaire photovoltaïque fait exception : il produit l'électricité directement.",
          W * 0.5, H * 0.89, et(0.88, 0.12, p), C.or, 16, SANS);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: "Formes et sources",
    body: [
      { t: "L'énergie se mesure en joules (J) ; la facture parle en kWh.", c: C.blanc },
      { t: "Formes : cinétique, de position, thermique, chimique, électrique…", c: C.doux },
      { t: "Ec dépend de v² : doubler la vitesse quadruple l'énergie.", c: C.jaune, f: MONO },
      { t: "Sources non renouvelables : fossiles et uranium, en stock limité.", c: C.rouge },
      { t: "Sources renouvelables : soleil, vent, eau, biomasse, géothermie.", c: C.vert },
    ],
    encadre: "source → turbine → alternateur",
    caption: "Des formes multiples, des sources limitées ou renouvelables."
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   ÉNERGIE, CHAPITRE 2 — CONVERSIONS ET CONSERVATION
   ══════════════════════════════════════════════════════════════════════ */

const CE2 = 'Conversions et conservation';

LECONS.push(lecon({
  id: 'pc_conv_1', chapitre: CE2, niveau: '4ème',
  titre: "Convertir l'énergie",
  desc: "Lire et écrire une chaîne énergétique : d'où vient l'énergie, qui la transforme, en quoi.",
  steps: [

  { caption: "Une chaîne énergétique se lit en trois temps : un réservoir fournit, un convertisseur transforme, un effet est produit.",
    label: 'La chaîne',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MÉTHODE', 'La chaîne énergétique', p, C.jaune);
      chaineEnergetique(ctx, W * 0.10, H * 0.36, W * 0.80, [
        { t: 'RÉSERVOIR', d: "il stocke l'énergie", c: C.vert },
        { t: 'CONVERTISSEUR', d: "il change la forme", c: C.jaune },
        { t: 'UTILISATION', d: "l'effet obtenu", c: C.bleu },
      ], [
        { t: "forme d'entrée" }, { t: 'forme de sortie' },
      ], p, { bh: H * 0.20 });
      puces(ctx, W * 0.14, H * 0.72, [
        { t: "Sur les flèches, on écrit la FORME de l'énergie transférée.", c: C.blanc },
        { t: "Dans les cases, on écrit les OBJETS.", c: C.doux },
        { t: "Ne jamais mélanger les deux : c'est l'erreur la plus fréquente.", c: C.rouge },
      ], p, { debut: 0.6, pas: 0.13, dy: 38, s: 17 });
    }
  },

  { caption: "Trois exemples à savoir refaire : la lampe de poche, le panneau solaire et le vélo.",
    label: 'Trois exemples',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'EXEMPLES', 'Trois chaînes courantes', p, C.vert);
      chaineEnergetique(ctx, W * 0.06, H * 0.28, W * 0.88, [
        { t: 'PILE', c: C.vert }, { t: 'LAMPE', c: C.jaune }, { t: 'PIÈCE ÉCLAIRÉE', c: C.bleu },
      ], [ { t: 'chimique' }, { t: 'lumineuse + thermique' } ], p, { bh: H * 0.13 });

      const p2 = cl((p - 0.3) / 0.7);
      chaineEnergetique(ctx, W * 0.06, H * 0.50, W * 0.88, [
        { t: 'SOLEIL', c: C.jaune }, { t: 'PANNEAU', c: C.vert }, { t: 'BATTERIE', c: C.bleu },
      ], [ { t: 'lumineuse' }, { t: 'électrique' } ], p2, { bh: H * 0.13 });

      const p3 = cl((p - 0.58) / 0.42);
      chaineEnergetique(ctx, W * 0.06, H * 0.72, W * 0.88, [
        { t: 'ALIMENTS', c: C.rouge }, { t: 'CYCLISTE', c: C.violet }, { t: 'VÉLO EN MOUVEMENT', c: C.vert },
      ], [ { t: 'chimique' }, { t: 'cinétique + thermique' } ], p3, { bh: H * 0.13 });
    }
  },

  { caption: "Attention : un convertisseur produit presque toujours de la chaleur en plus de l'effet recherché.",
    label: 'La chaleur perdue',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'TOUJOURS', "La part perdue en chaleur", p, C.rouge);
      const bas = chaineEnergetique(ctx, W * 0.14, H * 0.34, W * 0.72, [
        { t: 'PILE', c: C.vert }, { t: 'LAMPE', c: C.jaune }, { t: 'LUMIÈRE', c: C.bleu },
      ], [ { t: 'chimique' }, { t: 'lumineuse' } ], p, { bh: H * 0.18 });

      /* La flèche de fuite, vers le bas : c'est ce qui n'est pas utile. */
      const q = et(0.55, 0.35, p);
      fleche(ctx, W * 0.50, bas + 6, W * 0.50, bas + H * 0.18, q, C.rouge, 2.4);
      txt(ctx, 'thermique', W * 0.62, bas + H * 0.12, et(0.65, 0.25, p), C.rouge, 17, SANS);
      txt(ctx, 'la lampe chauffe : cette énergie est perdue pour l’éclairage',
          W * 0.5, bas + H * 0.26, et(0.75, 0.25, p), C.doux, 16, SANS);
      txt(ctx, "Une ampoule à filament perd ainsi près de 95 % de l'énergie reçue.",
          W * 0.5, H * 0.93, et(0.88, 0.12, p), C.or, 16, SANS);
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_conv_2', chapitre: CE2, niveau: '3ème',
  titre: 'Conservation et rendement',
  desc: "L'énergie ne disparaît jamais : elle se disperse. Comment mesurer la part réellement utile.",
  steps: [

  { caption: "Le principe fondamental : l'énergie ne se crée pas et ne se détruit pas. Tout ce qui entre ressort, sous une forme ou une autre.",
    label: 'Conservation',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'PRINCIPE', "L'énergie se conserve", p, C.or);
      const cx = W * 0.34, cy = H * 0.50, w = W * 0.18, h = H * 0.26;
      cadre(ctx, cx - w / 2, cy - h / 2, w, h, et(0.05, 0.3, p), C.jaune, 2.2);
      txt(ctx, 'MOTEUR', cx, cy, et(0.2, 0.25, p), C.jaune, 18, MONO);

      fleche(ctx, W * 0.10, cy, cx - w / 2 - 6, cy, et(0.25, 0.3, p), C.vert, 3);
      txt(ctx, 'reçue : 100 J', W * 0.14, cy - 26, et(0.32, 0.25, p), C.vert, 18, MONO, 'left');

      fleche(ctx, cx + w / 2 + 6, cy - h * 0.25, W * 0.74, cy - h * 0.4, et(0.45, 0.3, p), C.bleu, 2.6);
      txt(ctx, 'utile : 35 J', W * 0.76, cy - h * 0.4, et(0.52, 0.25, p), C.bleu, 18, MONO, 'left');
      fleche(ctx, cx + w / 2 + 6, cy + h * 0.25, W * 0.74, cy + h * 0.4, et(0.58, 0.3, p), C.rouge, 2.6);
      txt(ctx, 'chaleur : 65 J', W * 0.76, cy + h * 0.4, et(0.65, 0.25, p), C.rouge, 18, MONO, 'left');

      encadre(ctx, W * 0.5, H * 0.88, W * 0.56, H * 0.13, '35 + 65 = 100', et(0.75, 0.25, p), C.or, 24);
      txt(ctx, "Rien n'est perdu au sens strict : c'est dispersé sous forme de chaleur.",
          W * 0.5, H * 0.96, et(0.9, 0.1, p), C.doux, 15, SANS);
    }
  },

  { caption: "Le rendement compare l'énergie utile à l'énergie reçue. C'est un rapport, souvent exprimé en pourcentage.",
    label: 'Le rendement',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'FORMULE', 'Le rendement', p, C.vert);
      encadre(ctx, W * 0.5, H * 0.34, W * 0.54, H * 0.16, 'η  =  utile / reçue', et(0.05, 0.3, p), C.or, 30);
      puces(ctx, W * 0.20, H * 0.52, [
        { t: "Toujours compris entre 0 et 1  (0 % à 100 %).", c: C.blanc, s: 17 },
        { t: "Jamais égal à 1 : il y a toujours des pertes.", c: C.rouge, s: 17 },
        { t: "Les deux énergies doivent être dans la même unité.", c: C.doux, s: 16 },
      ], p, { debut: 0.3, pas: 0.11, dy: 38 });
      const q = et(0.6, 0.35, p);
      if (q > 0) {
        seg(ctx, W * 0.14, H * 0.72, W * 0.86, H * 0.72, q, 'rgba(240,236,224,0.18)', 1.4);
        txt(ctx, "Le moteur précédent :  η = 35 / 100 = 0,35", W * 0.5, H * 0.81, et(0.66, 0.25, p), C.vert, 24, MONO);
        txt(ctx, "soit 35 % de l'énergie reçue réellement utilisée", W * 0.5, H * 0.90, et(0.8, 0.2, p), C.doux, 17, SANS);
      }
    }
  },

  { caption: "Comparer quelques rendements donne une idée juste de ce qu'on gagne en changeant d'appareil.",
    label: 'Des rendements',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'REPÈRES', 'Quelques rendements typiques', p);
      const items = [
        { t: 'Ampoule à filament', v: 0.05, c: C.rouge },
        { t: 'Ampoule LED', v: 0.40, c: C.vert },
        { t: 'Moteur thermique', v: 0.35, c: C.jaune },
        { t: 'Moteur électrique', v: 0.90, c: C.vert },
        { t: 'Centrale thermique', v: 0.40, c: C.jaune },
      ];
      const x0 = W * 0.34, larg = W * 0.46;
      items.forEach((it, i) => {
        const y = H * 0.34 + i * H * 0.11;
        const q = et(0.06 + i * 0.14, 0.35, p);
        txt(ctx, it.t, x0 - 20, y, q, C.blanc, 17, SANS, 'right');
        cadre(ctx, x0, y - 12, larg, 24, q, 'rgba(240,236,224,0.20)', 1.4);
        const rempli = larg * it.v * ease(q);
        if (rempli > 2) aplat(ctx, [{x:x0+2,y:y-10},{x:x0+rempli,y:y-10},{x:x0+rempli,y:y+10},{x:x0+2,y:y+10}], 1,
                               it.c.replace('0.90', '0.35').replace('0.92', '0.35'));
        txt(ctx, Math.round(it.v * 100) + ' %', x0 + larg + 34, y, et(0.15 + i * 0.14, 0.3, p), it.c, 17, MONO);
      });
      txt(ctx, "Le reste part en chaleur : c'est pourquoi une vieille ampoule brûle les doigts.",
          W * 0.5, H * 0.94, et(0.85, 0.15, p), C.or, 16, SANS);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'Conversions et conservation',
    body: [
      { t: "Chaîne énergétique : réservoir → convertisseur → utilisation.", c: C.blanc },
      { t: "Sur les flèches : les formes d'énergie. Dans les cases : les objets.", c: C.doux },
      { t: "L'énergie se conserve : entrée = sortie utile + pertes.", c: C.jaune },
      { t: "Les pertes se font presque toujours sous forme de chaleur.", c: C.rouge },
      { t: "Rendement η = utile / reçue, toujours inférieur à 100 %.", c: C.vert, f: MONO },
    ],
    encadre: 'η = utile / reçue',
    caption: "Rien ne se perd : tout se disperse, surtout en chaleur."
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   ÉNERGIE, CHAPITRE 3 — CIRCUITS ÉLECTRIQUES
   ══════════════════════════════════════════════════════════════════════ */

const CE3 = 'Circuits électriques';

LECONS.push(lecon({
  id: 'pc_circuit_1', chapitre: CE3, niveau: '5ème',
  titre: 'Le circuit et ses symboles',
  desc: "Ce qu'il faut pour qu'une lampe s'allume : une boucle fermée, un générateur, et un schéma normalisé.",
  steps: [

  { caption: "Pour qu'un courant circule, il faut une boucle fermée reliant les deux bornes du générateur.",
    label: 'La boucle fermée',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CONDITION', 'Un circuit doit être fermé', p, C.jaune);
      const x = W * 0.10, y = H * 0.36, w = W * 0.32, h = H * 0.38;

      /* À gauche : interrupteur fermé, la lampe brille. */
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'droite', pos: 0.5, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true) },
        { cote: 'haut',   pos: 0.5, dessin: (c, cx, cy, hz, q) => symInterrupteur(c, cx, cy, hz, q, false) },
      ], p);
      txt(ctx, 'CIRCUIT FERMÉ', x + w / 2, y + h + H * 0.14, et(0.5, 0.25, p), C.vert, 18, MONO);
      txt(ctx, 'la lampe brille', x + w / 2, y + h + H * 0.20, et(0.55, 0.25, p), C.doux, 15, SANS);

      /* À droite : interrupteur ouvert, rien ne passe. */
      const x2 = W * 0.58;
      circuit(ctx, x2, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'droite', pos: 0.5, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.doux, false) },
        { cote: 'haut',   pos: 0.5, dessin: (c, cx, cy, hz, q) => symInterrupteur(c, cx, cy, hz, q, true) },
      ], cl((p - 0.25) / 0.75));
      txt(ctx, 'CIRCUIT OUVERT', x2 + w / 2, y + h + H * 0.14, et(0.72, 0.25, p), C.rouge, 18, MONO);
      txt(ctx, 'plus rien ne circule', x2 + w / 2, y + h + H * 0.20, et(0.77, 0.25, p), C.doux, 15, SANS);
    }
  },

  { caption: "Les symboles normalisés : ils permettent de dessiner le même circuit partout dans le monde.",
    label: 'Les symboles',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CONVENTION', 'Les symboles à connaître', p);
      const items = [
        { n: 'générateur', f: (c, x, y, q) => symGenerateur(c, x, y, false, q) },
        { n: 'lampe', f: (c, x, y, q) => symLampe(c, x, y, true, q, C.blanc, false) },
        { n: 'interrupteur ouvert', f: (c, x, y, q) => symInterrupteur(c, x, y, true, q, true) },
        { n: 'interrupteur fermé', f: (c, x, y, q) => symInterrupteur(c, x, y, true, q, false) },
        { n: 'résistance', f: (c, x, y, q) => symResistance(c, x, y, true, q) },
        { n: 'moteur', f: (c, x, y, q) => symMoteur(c, x, y, true, q) },
        { n: 'ampèremètre', f: (c, x, y, q) => symMesure(c, x, y, 'A', q) },
        { n: 'voltmètre', f: (c, x, y, q) => symMesure(c, x, y, 'V', q, C.vert) },
      ];
      items.forEach((it, i) => {
        const x = W * (0.14 + (i % 4) * 0.24);
        const y = H * (0.42 + Math.floor(i / 4) * 0.30);
        const q = et(0.05 + i * 0.09, 0.3, p);
        /* Un bout de fil de part et d'autre, comme sur un vrai schéma. */
        seg(ctx, x - 52, y, x - 24, y, q, 'rgba(240,236,224,0.5)', 2);
        seg(ctx, x + 24, y, x + 52, y, q, 'rgba(240,236,224,0.5)', 2);
        it.f(ctx, x, y, q);
        txt(ctx, it.n, x, y + 46, et(0.1 + i * 0.09, 0.3, p), C.doux, 14, SANS);
      });
      txt(ctx, "Sur un schéma, les fils se tracent à la règle, en traits droits et à angle droit.",
          W * 0.5, H * 0.95, et(0.85, 0.15, p), C.or, 16, SANS);
    }
  },

  { caption: "Le sens conventionnel du courant : hors du générateur, il va de la borne + vers la borne −.",
    label: 'Le sens du courant',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CONVENTION', 'Le sens du courant', p, C.jaune);
      const x = W * 0.30, y = H * 0.34, w = W * 0.40, h = H * 0.40;
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q), label: 'générateur' },
        { cote: 'droite', pos: 0.5, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true), label: 'lampe' },
      ], p);
      sensCourant(ctx, x, y, w, h, cl((p - 0.4) / 0.6));
      puces(ctx, W * 0.10, H * 0.86, [
        { t: "Ce sens est une convention, choisie avant qu'on connaisse les électrons.", c: C.doux, s: 16 },
        { t: "Les électrons circulent en réalité en sens inverse — cela ne change aucun calcul.", c: C.jaune, s: 16 },
      ], p, { debut: 0.72, pas: 0.12, dy: 32 });
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_circuit_2', chapitre: CE3, niveau: '5ème',
  titre: 'Série et dérivation',
  desc: "Deux façons de brancher plusieurs dipôles, deux comportements très différents — et le court-circuit.",
  steps: [

  { caption: "En série, tous les dipôles sont sur une seule boucle : le courant n'a qu'un chemin possible.",
    label: 'Le montage en série',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MONTAGE 1', 'En série', p, C.bleu);
      const x = W * 0.22, y = H * 0.34, w = W * 0.56, h = H * 0.36;
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'haut',   pos: 0.35, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true), label: 'L₁' },
        { cote: 'haut',   pos: 0.72, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true), label: 'L₂' },
      ], p);
      sensCourant(ctx, x, y, w, h, cl((p - 0.45) / 0.55));
      puces(ctx, W * 0.14, H * 0.80, [
        { t: "Une seule boucle : le même courant traverse tous les dipôles.", c: C.blanc },
        { t: "Deux lampes en série brillent moins qu'une seule.", c: C.jaune },
        { t: "Si une lampe grille, le circuit est coupé : tout s'éteint.", c: C.rouge },
      ], p, { debut: 0.6, pas: 0.12, dy: 34, s: 17 });
    }
  },

  { caption: "En dérivation, le courant se sépare en plusieurs branches, puis se rassemble. Chaque lampe a son propre chemin.",
    label: 'Le montage en dérivation',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MONTAGE 2', 'En dérivation', p, C.vert);
      const x = W * 0.22, y = H * 0.32, w = W * 0.56, h = H * 0.40;
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'droite', pos: 0.5, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true), label: 'L₁' },
      ], p);
      /* La seconde branche, dérivée entre deux nœuds du fil du haut. */
      const q2 = et(0.4, 0.35, p);
      const nA = { x: x + w * 0.42, y: y }, nB = { x: x + w * 0.42, y: y + h };
      bille(ctx, nA.x, nA.y, 4.5, q2, C.jaune);
      bille(ctx, nB.x, nB.y, 4.5, q2, C.jaune);
      seg(ctx, nA.x, nA.y, nA.x, y + h * 0.36, q2, 'rgba(240,236,224,0.55)', 2);
      seg(ctx, nB.x, nB.y, nB.x, y + h * 0.64, q2, 'rgba(240,236,224,0.55)', 2);
      symLampe(ctx, nA.x, y + h * 0.5, false, et(0.55, 0.3, p), C.blanc, true);
      txt(ctx, 'L₂', nA.x + 44, y + h * 0.5, et(0.62, 0.25, p), C.doux, 15, SANS);
      txt(ctx, 'nœud', nA.x + 4, nA.y - 24, et(0.5, 0.25, p), C.jaune, 14, SANS);

      puces(ctx, W * 0.14, H * 0.82, [
        { t: "Plusieurs boucles : chaque lampe reçoit la tension du générateur.", c: C.blanc },
        { t: "Les lampes brillent normalement, quel que soit leur nombre.", c: C.vert },
        { t: "Si une lampe grille, les autres continuent : c'est le montage des maisons.", c: C.jaune },
      ], p, { debut: 0.68, pas: 0.1, dy: 32, s: 17 });
    }
  },

  { caption: "Un court-circuit : un fil relie directement les deux bornes d'un dipôle. Le courant passe par le fil, qui n'oppose presque rien.",
    label: 'Le court-circuit',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'DANGER', 'Le court-circuit', p, C.rouge);
      const x = W * 0.26, y = H * 0.34, w = W * 0.48, h = H * 0.36;
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'droite', pos: 0.5, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.doux, false), label: 'éteinte' },
      ], p);
      /* Le fil fautif, en rouge, court-circuitant la lampe. */
      const q = et(0.42, 0.3, p);
      seg(ctx, x + w * 0.72, y, x + w * 0.72, y + h, q, C.rouge, 3);
      txt(ctx, 'fil de court-circuit', x + w * 0.72 - 14, y - 22, et(0.55, 0.25, p), C.rouge, 15, SANS);

      puces(ctx, W * 0.12, H * 0.80, [
        { t: "Le courant emprunte le chemin sans résistance : la lampe s'éteint.", c: C.blanc },
        { t: "L'intensité devient très grande : les fils chauffent fortement.", c: C.rouge },
        { t: "Risque d'incendie — c'est ce contre quoi protègent fusibles et disjoncteurs.", c: C.jaune },
      ], p, { debut: 0.6, pas: 0.12, dy: 34, s: 17 });
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'Les circuits',
    body: [
      { t: "Un circuit doit être fermé pour qu'un courant circule.", c: C.blanc },
      { t: "Sens conventionnel : du + vers le − à l'extérieur du générateur.", c: C.jaune },
      { t: "En série : une boucle, même courant, tout s'éteint si l'un lâche.", c: C.bleu },
      { t: "En dérivation : plusieurs branches, indépendantes les unes des autres.", c: C.vert },
      { t: "Court-circuit : chemin sans dipôle, intensité dangereuse.", c: C.rouge },
    ],
    encadre: 'série : 1 boucle · dérivation : n boucles',
    caption: "Deux montages, deux comportements à ne jamais confondre."
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   ÉNERGIE, CHAPITRE 4 — TENSION ET INTENSITÉ
   ══════════════════════════════════════════════════════════════════════ */

const CE4 = 'Tension et intensité';

LECONS.push(lecon({
  id: 'pc_ui_1', chapitre: CE4, niveau: '4ème',
  titre: "L'intensité du courant",
  desc: "Ce que mesure un ampèremètre, comment le brancher, et comment l'intensité se répartit.",
  steps: [

  { caption: "L'intensité mesure le débit du courant : la quantité de charges qui passe chaque seconde. Elle se note I et s'exprime en ampères.",
    label: "Ce qu'est l'intensité",
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'GRANDEUR', "L'intensité I", p, C.jaune);
      /* Analogie du débit : des charges qui défilent dans un fil. */
      const y = H * 0.44;
      seg(ctx, W * 0.10, y - 20, W * 0.90, y - 20, et(0.03, 0.25, p), C.doux, 1.8);
      seg(ctx, W * 0.10, y + 20, W * 0.90, y + 20, et(0.06, 0.25, p), C.doux, 1.8);
      for (let i = 0; i < 9; i++) {
        const q = et(0.15 + i * 0.03, 0.3, p);
        const bx = W * (0.14 + i * 0.09) + Math.sin(p * 6) * 14;
        bille(ctx, bx, y, 8, q, C.jaune);
      }
      fleche(ctx, W * 0.40, y + 52, W * 0.60, y + 52, et(0.45, 0.3, p), C.jaune, 2);
      txt(ctx, 'sens du courant', W * 0.50, y + 76, et(0.52, 0.25, p), C.jaune, 16, SANS);

      puces(ctx, W * 0.14, H * 0.72, [
        { t: "Symbole : I   ·   unité : l'ampère (A)", c: C.blanc, f: MONO, s: 18 },
        { t: "1 A = 1 000 mA — les circuits du collège travaillent en mA.", c: C.doux, s: 17 },
        { t: "Plus l'intensité est grande, plus la lampe brille… et plus le fil chauffe.", c: C.rouge, s: 17 },
      ], p, { debut: 0.6, pas: 0.12, dy: 38 });
    }
  },

  { caption: "L'ampèremètre se branche EN SÉRIE : le courant doit le traverser pour être compté.",
    label: "Brancher l'ampèremètre",
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MESURE', "L'ampèremètre se met en série", p, C.bleu);
      const x = W * 0.24, y = H * 0.34, w = W * 0.52, h = H * 0.38;
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'haut',   pos: 0.5, dessin: (c, cx, cy, hz, q) => symMesure(c, cx, cy, 'A', q), label: 'ampèremètre' },
        { cote: 'droite', pos: 0.5, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true) },
      ], p);
      sensCourant(ctx, x, y, w, h, cl((p - 0.45) / 0.55));
      puces(ctx, W * 0.12, H * 0.82, [
        { t: "On ouvre le circuit et on insère l'appareil dans la boucle.", c: C.blanc },
        { t: "Borne COM au − ; borne A (ou mA) du côté du +.", c: C.doux },
        { t: "Jamais en dérivation aux bornes d'un dipôle : on le détruirait.", c: C.rouge },
      ], p, { debut: 0.62, pas: 0.12, dy: 34, s: 17 });
    }
  },

  { caption: "En série, l'intensité est la même partout. Peu importe où l'on place l'ampèremètre, il affiche la même valeur.",
    label: 'En série',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'LOI 1', "Unicité de l'intensité en série", p, C.bleu);
      const x = W * 0.20, y = H * 0.34, w = W * 0.60, h = H * 0.36;
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'haut',   pos: 0.3, dessin: (c, cx, cy, hz, q) => symMesure(c, cx, cy, 'A', q), label: 'A₁' },
        { cote: 'haut',   pos: 0.68, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true) },
        { cote: 'bas',    pos: 0.5, dessin: (c, cx, cy, hz, q) => symMesure(c, cx, cy, 'A', q), label: 'A₂' },
      ], p);
      txt(ctx, '0,25 A', x + w * 0.3, y - 56, et(0.55, 0.3, p), C.jaune, 20, MONO);
      txt(ctx, '0,25 A', x + w * 0.5, y + h + 58, et(0.65, 0.3, p), C.jaune, 20, MONO);
      encadre(ctx, W * 0.5, H * 0.90, W * 0.48, H * 0.13, 'I₁ = I₂', et(0.78, 0.22, p), C.or, 26);
      txt(ctx, "Le courant n'est pas consommé en chemin : il n'est pas un carburant.",
          W * 0.5, H * 0.98, et(0.9, 0.1, p), C.doux, 15, SANS);
    }
  },

  { caption: "En dérivation, l'intensité se partage : le courant principal est la somme des courants des branches.",
    label: 'Loi des nœuds',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'LOI 2', 'La loi des nœuds', p, C.vert);
      const nx = W * 0.44, ny = H * 0.50;
      /* Un nœud, un courant qui entre, deux qui sortent. */
      fleche(ctx, W * 0.16, ny, nx - 10, ny, et(0.05, 0.3, p), C.jaune, 2.6);
      txt(ctx, 'I = 0,50 A', W * 0.24, ny - 26, et(0.15, 0.25, p), C.jaune, 19, MONO);
      bille(ctx, nx, ny, 6, et(0.2, 0.25, p), C.jaune);
      txt(ctx, 'nœud', nx, ny + 28, et(0.25, 0.25, p), C.doux, 14, SANS);
      fleche(ctx, nx + 10, ny - 6, W * 0.76, H * 0.32, et(0.3, 0.3, p), C.vert, 2.4);
      txt(ctx, 'I₁ = 0,30 A', W * 0.84, H * 0.31, et(0.4, 0.25, p), C.vert, 19, MONO);
      fleche(ctx, nx + 10, ny + 6, W * 0.76, H * 0.68, et(0.42, 0.3, p), C.bleu, 2.4);
      txt(ctx, 'I₂ = 0,20 A', W * 0.84, H * 0.69, et(0.52, 0.25, p), C.bleu, 19, MONO);

      encadre(ctx, W * 0.5, H * 0.87, W * 0.56, H * 0.14, 'I  =  I₁  +  I₂', et(0.65, 0.25, p), C.or, 28);
      txt(ctx, "Tout ce qui entre dans un nœud en ressort : 0,30 + 0,20 = 0,50.",
          W * 0.5, H * 0.97, et(0.85, 0.15, p), C.doux, 16, SANS);
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_ui_2', chapitre: CE4, niveau: '4ème',
  titre: 'La tension électrique',
  desc: "Le voltmètre, la loi d'additivité des tensions, et pourquoi elle se comporte à l'inverse de l'intensité.",
  steps: [

  { caption: "La tension mesure la différence d'état électrique entre deux points. Elle se note U et s'exprime en volts.",
    label: "Ce qu'est la tension",
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'GRANDEUR', 'La tension U', p, C.vert);
      /* Une tension se mesure ENTRE deux points : d'où la flèche à deux bouts. */
      const y = H * 0.44;
      const a = W * 0.30, b = W * 0.62;
      bille(ctx, a, y, 6, et(0.05, 0.25, p), C.jaune);
      bille(ctx, b, y, 6, et(0.1, 0.25, p), C.jaune);
      txt(ctx, 'A', a, y - 26, et(0.15, 0.25, p), C.doux, 16, SANS);
      txt(ctx, 'B', b, y - 26, et(0.18, 0.25, p), C.doux, 16, SANS);
      symLampe(ctx, (a + b) / 2, y, true, et(0.22, 0.3, p), C.blanc, true);
      seg(ctx, a, y, (a + b) / 2 - 22, y, et(0.12, 0.25, p), 'rgba(240,236,224,0.55)', 2);
      seg(ctx, (a + b) / 2 + 22, y, b, y, et(0.14, 0.25, p), 'rgba(240,236,224,0.55)', 2);
      fleche(ctx, b, y + 52, a, y + 52, et(0.4, 0.3, p), C.vert, 2.2);
      txt(ctx, 'U_AB', (a + b) / 2, y + 76, et(0.5, 0.25, p), C.vert, 18, MONO);

      puces(ctx, W * 0.14, H * 0.72, [
        { t: "Symbole : U   ·   unité : le volt (V)", c: C.blanc, f: MONO, s: 18 },
        { t: "Elle se mesure toujours ENTRE DEUX POINTS, aux bornes d'un dipôle.", c: C.jaune, s: 17 },
        { t: "Pile plate : 4,5 V · secteur : 230 V · pile bâton : 1,5 V.", c: C.doux, s: 17 },
      ], p, { debut: 0.6, pas: 0.12, dy: 38 });
    }
  },

  { caption: "Le voltmètre se branche EN DÉRIVATION, aux bornes du dipôle, sans ouvrir le circuit.",
    label: 'Brancher le voltmètre',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'MESURE', 'Le voltmètre se met en dérivation', p, C.vert);
      const x = W * 0.24, y = H * 0.32, w = W * 0.52, h = H * 0.34;
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'haut',   pos: 0.5, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true) },
      ], p);
      /* Le voltmètre, posé en parallèle sur la lampe. */
      const q = et(0.45, 0.35, p);
      const gx = x + w * 0.5 - 60, dx = x + w * 0.5 + 60, vy = y - H * 0.16;
      bille(ctx, gx, y, 4.5, q, C.vert);
      bille(ctx, dx, y, 4.5, q, C.vert);
      seg(ctx, gx, y, gx, vy, q, C.vert, 2);
      seg(ctx, dx, y, dx, vy, q, C.vert, 2);
      seg(ctx, gx, vy, x + w * 0.5 - 20, vy, q, C.vert, 2);
      seg(ctx, x + w * 0.5 + 20, vy, dx, vy, q, C.vert, 2);
      symMesure(ctx, x + w * 0.5, vy, 'V', et(0.6, 0.3, p), C.vert);

      puces(ctx, W * 0.12, H * 0.78, [
        { t: "On ne coupe rien : on vient se brancher en parallèle du dipôle.", c: C.blanc },
        { t: "Borne COM du côté −, borne V du côté +.", c: C.doux },
        { t: "Moyen mnémotechnique : le Voltmètre est en dériVation.", c: C.jaune },
      ], p, { debut: 0.68, pas: 0.11, dy: 34, s: 17 });
    }
  },

  { caption: "En série, les tensions s'additionnent : la tension du générateur se répartit entre les dipôles.",
    label: 'Additivité en série',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'LOI 3', "Additivité des tensions", p, C.bleu);
      const x = W * 0.20, y = H * 0.34, w = W * 0.60, h = H * 0.34;
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q), label: 'U = 4,5 V', labelC: C.jaune, labelS: 17 },
        { cote: 'haut',   pos: 0.32, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true), label: 'U₁ = 2,5 V', labelC: C.bleu, labelS: 17 },
        { cote: 'haut',   pos: 0.70, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true), label: 'U₂ = 2,0 V', labelC: C.bleu, labelS: 17 },
      ], p);
      encadre(ctx, W * 0.5, H * 0.85, W * 0.60, H * 0.14, 'U  =  U₁ + U₂  =  4,5 V', et(0.6, 0.3, p), C.or, 24);
      txt(ctx, "L'intensité, elle, reste la même : les deux lois se comportent à l'inverse.",
          W * 0.5, H * 0.96, et(0.85, 0.15, p), C.doux, 16, SANS);
    }
  },

  { caption: "En dérivation, au contraire, toutes les branches ont la même tension : celle du générateur.",
    label: 'Égalité en dérivation',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'LOI 4', 'Tensions égales en dérivation', p, C.vert);
      const x = W * 0.24, y = H * 0.32, w = W * 0.52, h = H * 0.38;
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q), label: '6 V', labelC: C.jaune, labelS: 17 },
        { cote: 'droite', pos: 0.5, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true), label: '6 V', labelC: C.vert, labelS: 17 },
      ], p);
      const q2 = et(0.4, 0.35, p);
      const bx = x + w * 0.45;
      bille(ctx, bx, y, 4.5, q2, C.jaune);
      bille(ctx, bx, y + h, 4.5, q2, C.jaune);
      seg(ctx, bx, y, bx, y + h * 0.34, q2, 'rgba(240,236,224,0.55)', 2);
      seg(ctx, bx, y + h, bx, y + h * 0.66, q2, 'rgba(240,236,224,0.55)', 2);
      symLampe(ctx, bx, y + h * 0.5, false, et(0.55, 0.3, p), C.blanc, true);
      txt(ctx, '6 V', bx + 46, y + h * 0.5, et(0.62, 0.25, p), C.vert, 17, MONO);

      encadre(ctx, W * 0.5, H * 0.88, W * 0.54, H * 0.13, 'U = U₁ = U₂', et(0.7, 0.25, p), C.or, 26);
      txt(ctx, "C'est pourquoi tous les appareils d'une maison reçoivent 230 V.",
          W * 0.5, H * 0.97, et(0.88, 0.12, p), C.doux, 16, SANS);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'Tension et intensité',
    body: [
      { t: "I : intensité, en ampères, mesurée EN SÉRIE (ampèremètre).", c: C.jaune },
      { t: "U : tension, en volts, mesurée EN DÉRIVATION (voltmètre).", c: C.vert },
      { t: "En série : I identique partout, U s'additionne.", c: C.bleu },
      { t: "En dérivation : U identique partout, I s'additionne.", c: C.bleu },
      { t: "Les deux lois sont symétriques — c'est le meilleur repère de mémoire.", c: C.doux },
    ],
    encadre: 'série : U s’ajoute · dérivation : I s’ajoute',
    caption: "Deux grandeurs, deux appareils, deux branchements opposés."
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   ÉNERGIE, CHAPITRE 5 — LOI D'OHM
   ══════════════════════════════════════════════════════════════════════ */

const CE5 = "Loi d'Ohm";

LECONS.push(lecon({
  id: 'pc_ohm_1', chapitre: CE5, niveau: '3ème',
  titre: 'La résistance et la loi d’Ohm',
  desc: "Ce que fait une résistance dans un circuit, et la relation qui lie U, I et R.",
  steps: [

  { caption: "Une résistance freine le passage du courant. Plus elle est grande, moins il passe de courant sous la même tension.",
    label: 'Le dipôle ohmique',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'LE DIPÔLE', 'La résistance', p, C.vert);
      const y = H * 0.44, x = W * 0.20, w = W * 0.30, h = H * 0.28;
      /* Deux circuits identiques, deux résistances différentes. */
      circuit(ctx, x, y - h / 2, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'haut',   pos: 0.55, dessin: (c, cx, cy, hz, q) => symResistance(c, cx, cy, hz, q), label: 'R = 100 Ω' },
      ], p);
      txt(ctx, 'I = 0,06 A', x + w / 2, y + h / 2 + 44, et(0.5, 0.25, p), C.jaune, 18, MONO);

      const x2 = W * 0.56;
      circuit(ctx, x2, y - h / 2, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'haut',   pos: 0.55, dessin: (c, cx, cy, hz, q) => symResistance(c, cx, cy, hz, q, C.rouge), label: 'R = 300 Ω' },
      ], cl((p - 0.25) / 0.75));
      txt(ctx, 'I = 0,02 A', x2 + w / 2, y + h / 2 + 44, et(0.7, 0.25, p), C.rouge, 18, MONO);

      txt(ctx, "Même générateur (6 V), résistance triplée : intensité divisée par trois.",
          W * 0.5, H * 0.84, et(0.78, 0.2, p), C.blanc, 18, SANS);
      txt(ctx, "Unité de la résistance : l'ohm (Ω), mesuré à l'ohmmètre, hors circuit.",
          W * 0.5, H * 0.92, et(0.88, 0.12, p), C.doux, 16, SANS);
    }
  },

  { caption: "La loi d'Ohm relie ces trois grandeurs : la tension aux bornes d'une résistance est le produit de sa valeur par l'intensité.",
    label: "La loi d'Ohm",
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'LOI', "La loi d'Ohm", p, C.jaune);
      encadre(ctx, W * 0.30, H * 0.38, W * 0.40, H * 0.17, 'U  =  R × I', et(0.05, 0.3, p), C.or, 34);
      puces(ctx, W * 0.11, H * 0.58, [
        { t: "U : tension, en volts (V)", c: C.blanc, f: MONO, s: 17 },
        { t: "R : résistance, en ohms (Ω)", c: C.vert, f: MONO, s: 17 },
        { t: "I : intensité, en ampères (A)", c: C.jaune, f: MONO, s: 17 },
        { t: "Attention : I en ampères, jamais en milliampères.", c: C.rouge, s: 16 },
      ], p, { debut: 0.3, pas: 0.11, dy: 38 });
      triangleFormule(ctx, W * 0.75, H * 0.46, Math.min(W * 0.13, H * 0.22), 'U', 'R', 'I', et(0.45, 0.5, p));
      puces(ctx, W * 0.62, H * 0.80, [
        { t: "on cache R  →  R = U / I", c: C.doux, f: MONO, s: 16 },
        { t: "on cache I  →  I = U / R", c: C.doux, f: MONO, s: 16 },
      ], p, { debut: 0.8, pas: 0.08, dy: 30 });
    }
  },

  { caption: "La caractéristique d'une résistance est une droite passant par l'origine : U est proportionnelle à I.",
    label: 'La caractéristique',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'GRAPHIQUE', 'U en fonction de I', p, C.bleu);
      const ox = W * 0.20, oy = H * 0.82, larg = W * 0.58, haut = H * 0.50;
      repere(ctx, ox, oy, larg, haut, et(0, 0.2, p), 'I (A)', 'U (V)');
      /* La droite, tracée point à point. */
      const pts = [];
      for (let i = 0; i <= 30; i++) {
        const u = i / 30;
        pts.push({ x: ox + larg * 0.86 * u, y: oy - haut * 0.82 * u });
      }
      courbe(ctx, pts, et(0.2, 0.4, p), C.bleu, 2.6);
      /* Un point de mesure et sa lecture. */
      const q = et(0.55, 0.3, p);
      const px = ox + larg * 0.5, py = oy - haut * 0.477;
      bille(ctx, px, py, 6, q, C.jaune);
      ctx.save(); ctx.setLineDash([4, 5]);
      seg(ctx, px, py, px, oy, q, 'rgba(240,236,224,0.3)', 1.3);
      seg(ctx, px, py, ox, py, q, 'rgba(240,236,224,0.3)', 1.3);
      ctx.setLineDash([]); ctx.restore();
      txt(ctx, '0,04 A', px, oy + 24, et(0.65, 0.25, p), C.jaune, 15, MONO);
      txt(ctx, '4 V', ox - 14, py, et(0.68, 0.25, p), C.jaune, 15, MONO, 'right');

      puces(ctx, W * 0.10, H * 0.94, [
        { t: "Droite par l'origine = proportionnalité. Son coefficient directeur EST R : R = 4 / 0,04 = 100 Ω.", c: C.vert, s: 16 },
      ], p, { debut: 0.78, pas: 0.1, dy: 28 });
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_ohm_2', chapitre: CE5, niveau: '3ème',
  titre: "Utiliser la loi d'Ohm",
  desc: "Trois calculs types, et le rôle concret d'une résistance de protection.",
  steps: [

  { caption: "Premier cas : on cherche la tension. On connaît R et I, on multiplie.",
    label: 'Calculer U',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CAS 1', 'Trouver la tension', p, C.bleu);
      puces(ctx, W * 0.18, H * 0.34, [
        { t: "Données :  R = 220 Ω   et   I = 0,05 A", c: C.blanc, f: MONO, s: 19 },
        { t: "Formule :  U = R × I", c: C.jaune, f: MONO, s: 19 },
        { t: "Calcul :   U = 220 × 0,05", c: C.blanc, f: MONO, s: 19 },
        { t: "Résultat : U = 11 V", c: C.vert, f: MONO, s: 22 },
      ], p, { debut: 0.1, pas: 0.18, dy: 58 });
      txt(ctx, "Toujours vérifier les unités AVANT de multiplier : 50 mA valent 0,05 A.",
          W * 0.5, H * 0.86, et(0.8, 0.2, p), C.rouge, 17, SANS);
    }
  },

  { caption: "Deuxième cas : on cherche l'intensité. On divise la tension par la résistance.",
    label: 'Calculer I',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CAS 2', "Trouver l'intensité", p, C.jaune);
      puces(ctx, W * 0.18, H * 0.34, [
        { t: "Données :  U = 6 V   et   R = 150 Ω", c: C.blanc, f: MONO, s: 19 },
        { t: "Formule :  I = U / R", c: C.jaune, f: MONO, s: 19 },
        { t: "Calcul :   I = 6 / 150", c: C.blanc, f: MONO, s: 19 },
        { t: "Résultat : I = 0,04 A  =  40 mA", c: C.vert, f: MONO, s: 22 },
      ], p, { debut: 0.1, pas: 0.18, dy: 58 });
      txt(ctx, "Un résultat en ampères est souvent petit : le convertir en mA le rend parlant.",
          W * 0.5, H * 0.86, et(0.8, 0.2, p), C.doux, 17, SANS);
    }
  },

  { caption: "Troisième cas : on cherche la résistance. C'est ainsi qu'on la détermine expérimentalement.",
    label: 'Calculer R',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'CAS 3', 'Trouver la résistance', p, C.vert);
      const x = W * 0.10, y = H * 0.32, w = W * 0.34, h = H * 0.30;
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'haut',   pos: 0.35, dessin: (c, cx, cy, hz, q) => symMesure(c, cx, cy, 'A', q) },
        { cote: 'haut',   pos: 0.75, dessin: (c, cx, cy, hz, q) => symResistance(c, cx, cy, hz, q) },
      ], p);
      puces(ctx, W * 0.52, H * 0.36, [
        { t: "On mesure :  U = 9 V   et   I = 0,03 A", c: C.blanc, f: MONO, s: 18 },
        { t: "Formule :    R = U / I", c: C.jaune, f: MONO, s: 18 },
        { t: "Calcul :     R = 9 / 0,03", c: C.blanc, f: MONO, s: 18 },
        { t: "Résultat :   R = 300 Ω", c: C.vert, f: MONO, s: 21 },
      ], p, { debut: 0.35, pas: 0.14, dy: 48 });
      txt(ctx, "Une mesure de U et une de I suffisent à connaître n'importe quelle résistance.",
          W * 0.5, H * 0.92, et(0.85, 0.15, p), C.or, 16, SANS);
    }
  },

  { caption: "À quoi cela sert : une résistance placée en série protège un composant fragile en limitant l'intensité qui le traverse.",
    label: 'Résistance de protection',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'APPLICATION', 'La résistance de protection', p, C.rouge);
      const y = H * 0.34, h = H * 0.30;
      /* Sans résistance : trop de courant, la DEL grille. */
      circuit(ctx, W * 0.08, y, W * 0.34, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'haut',   pos: 0.55, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.rouge, false), label: 'DEL grillée', labelC: C.rouge },
      ], p);
      txt(ctx, 'SANS résistance', W * 0.25, y + h + H * 0.16, et(0.4, 0.25, p), C.rouge, 17, MONO);
      txt(ctx, 'I trop grande', W * 0.25, y + h + H * 0.22, et(0.45, 0.25, p), C.doux, 15, SANS);

      /* Avec résistance : intensité maîtrisée. */
      circuit(ctx, W * 0.56, y, W * 0.34, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'haut',   pos: 0.35, dessin: (c, cx, cy, hz, q) => symResistance(c, cx, cy, hz, q), label: 'R' },
        { cote: 'haut',   pos: 0.78, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.vert, true), label: 'DEL', labelC: C.vert },
      ], cl((p - 0.3) / 0.7));
      txt(ctx, 'AVEC résistance', W * 0.73, y + h + H * 0.16, et(0.7, 0.25, p), C.vert, 17, MONO);
      txt(ctx, 'I limitée à 20 mA', W * 0.73, y + h + H * 0.22, et(0.75, 0.25, p), C.doux, 15, SANS);

      txt(ctx, "La résistance absorbe une partie de la tension : il en reste moins pour le composant.",
          W * 0.5, H * 0.95, et(0.86, 0.14, p), C.or, 16, SANS);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: "La loi d'Ohm",
    body: [
      { t: "U = R × I    ·    R = U / I    ·    I = U / R", c: C.jaune, f: MONO, s: 20 },
      { t: "U en volts, R en ohms, I en AMPÈRES — jamais en mA.", c: C.rouge },
      { t: "La caractéristique d'une résistance est une droite par l'origine.", c: C.bleu },
      { t: "Sa pente donne directement la valeur de R.", c: C.doux },
      { t: "En série, une résistance limite l'intensité : elle protège.", c: C.vert },
    ],
    encadre: 'U = R × I',
    caption: "Une seule relation, trois façons de l'utiliser."
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   ÉNERGIE, CHAPITRE 6 — PUISSANCE ET ÉNERGIE ÉLECTRIQUE
   ══════════════════════════════════════════════════════════════════════ */

const CE6 = 'Puissance et énergie électrique';

LECONS.push(lecon({
  id: 'pc_puis_1', chapitre: CE6, niveau: '3ème',
  titre: 'La puissance électrique',
  desc: "Ce que dit l'étiquette d'un appareil, et la relation P = U × I.",
  steps: [

  { caption: "La puissance indique la vitesse à laquelle un appareil consomme l'énergie. Elle se note P et s'exprime en watts.",
    label: 'La puissance',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'GRANDEUR', 'La puissance P', p, C.jaune);
      const app = [
        { t: 'LED', v: '8 W', c: C.vert },
        { t: 'Ordinateur', v: '150 W', c: C.bleu },
        { t: 'Four', v: '2 000 W', c: C.rouge },
        { t: 'Chauffe-eau', v: '2 500 W', c: C.rouge },
      ];
      app.forEach((a, i) => {
        const x = W * (0.07 + i * 0.23), w = W * 0.19;
        const q = et(0.05 + i * 0.12, 0.3, p);
        cadre(ctx, x, H * 0.32, w, H * 0.20, q, a.c, 1.8);
        txt(ctx, a.t, x + w / 2, H * 0.38, et(0.1 + i * 0.12, 0.25, p), C.blanc, 15, SANS);
        txt(ctx, a.v, x + w / 2, H * 0.46, et(0.14 + i * 0.12, 0.25, p), a.c, 20, MONO);
      });
      puces(ctx, W * 0.14, H * 0.64, [
        { t: "Symbole : P   ·   unité : le watt (W)", c: C.blanc, f: MONO, s: 18 },
        { t: "1 kW = 1 000 W", c: C.doux, f: MONO, s: 18 },
        { t: "Une puissance élevée ne coûte cher que si l'appareil fonctionne longtemps.", c: C.jaune, s: 17 },
      ], p, { debut: 0.58, pas: 0.12, dy: 40 });
    }
  },

  { caption: "La relation à connaître : la puissance est le produit de la tension par l'intensité.",
    label: 'P = U × I',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'FORMULE', 'Puissance, tension, intensité', p, C.vert);
      encadre(ctx, W * 0.30, H * 0.38, W * 0.40, H * 0.17, 'P  =  U × I', et(0.05, 0.3, p), C.or, 34);
      puces(ctx, W * 0.11, H * 0.58, [
        { t: "P : puissance, en watts (W)", c: C.jaune, f: MONO, s: 17 },
        { t: "U : tension, en volts (V)", c: C.blanc, f: MONO, s: 17 },
        { t: "I : intensité, en ampères (A)", c: C.blanc, f: MONO, s: 17 },
      ], p, { debut: 0.3, pas: 0.1, dy: 38 });
      triangleFormule(ctx, W * 0.75, H * 0.46, Math.min(W * 0.13, H * 0.22), 'P', 'U', 'I', et(0.45, 0.5, p));
      const q = et(0.72, 0.28, p);
      if (q > 0) {
        txt(ctx, "Exemple : un radiateur sur le secteur, I = 8,7 A", W * 0.5, H * 0.84, q, C.doux, 17, SANS);
        txt(ctx, "P = 230 × 8,7 ≈ 2 000 W", W * 0.5, H * 0.92, et(0.82, 0.18, p), C.vert, 22, MONO);
      }
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_puis_2', chapitre: CE6, niveau: '3ème',
  titre: "L'énergie consommée",
  desc: "De la puissance à la facture : E = P × t, le joule et le kilowattheure.",
  steps: [

  { caption: "L'énergie consommée dépend de deux choses : la puissance de l'appareil et la durée d'utilisation.",
    label: 'E = P × t',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'FORMULE', "L'énergie consommée", p, C.jaune);
      encadre(ctx, W * 0.5, H * 0.34, W * 0.46, H * 0.16, 'E  =  P × t', et(0.05, 0.3, p), C.or, 34);
      tableau(ctx, W * 0.14, H * 0.54, W * 0.72,
        [ { t: 'SI P EST EN…' }, { t: 'ET t EN…' }, { t: 'ALORS E EST EN…' } ],
        [
          [ { t: 'watts (W)', c: C.blanc }, { t: 'secondes (s)', c: C.blanc }, { t: 'joules (J)', c: C.vert } ],
          [ { t: 'kilowatts (kW)', c: C.blanc }, { t: 'heures (h)', c: C.blanc }, { t: 'kilowattheures (kWh)', c: C.jaune } ],
        ], p, { dy: 50 });
      txt(ctx, "Les deux lignes ne se mélangent jamais : c'est l'erreur classique du chapitre.",
          W * 0.5, H * 0.84, et(0.7, 0.2, p), C.rouge, 17, SANS);
      txt(ctx, "1 kWh = 3 600 000 J — le kWh est simplement plus commode pour une facture.",
          W * 0.5, H * 0.92, et(0.85, 0.15, p), C.doux, 16, SANS);
    }
  },

  { caption: "Un calcul complet : un four de 2 000 W utilisé une demi-heure, et ce que cela représente sur la facture.",
    label: 'Exemple chiffré',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'EXEMPLE', "Un four, une demi-heure", p, C.vert);
      puces(ctx, W * 0.16, H * 0.32, [
        { t: "P = 2 000 W = 2 kW      t = 0,5 h", c: C.blanc, f: MONO, s: 18 },
        { t: "E = P × t = 2 × 0,5", c: C.jaune, f: MONO, s: 18 },
        { t: "E = 1 kWh", c: C.vert, f: MONO, s: 24 },
        { t: "À 0,20 € le kWh :  coût = 1 × 0,20 = 0,20 €", c: C.blanc, f: MONO, s: 18 },
        { t: "En joules : E = 2 000 × 1 800 = 3 600 000 J", c: C.doux, f: MONO, s: 17 },
      ], p, { debut: 0.1, pas: 0.15, dy: 52 });
      txt(ctx, "Les deux résultats décrivent la même énergie, dans deux unités différentes.",
          W * 0.5, H * 0.92, et(0.85, 0.15, p), C.or, 16, SANS);
    }
  },

  { caption: "Comparer les appareils : c'est le produit puissance × durée qui compte, pas la puissance seule.",
    label: 'Comparer',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'COMPARAISON', "Puissance forte n'est pas toujours dépense forte", p);
      tableau(ctx, W * 0.08, H * 0.32, W * 0.84,
        [ { t: 'APPAREIL' }, { t: 'PUISSANCE' }, { t: 'DURÉE / JOUR' }, { t: 'ÉNERGIE / JOUR' } ],
        [
          [ 'Four', { t: '2 kW', c: C.rouge }, { t: '0,5 h', c: C.doux }, { t: '1 kWh', c: C.jaune } ],
          [ 'Réfrigérateur', { t: '0,1 kW', c: C.vert }, { t: '24 h', c: C.doux }, { t: '2,4 kWh', c: C.rouge } ],
          [ 'Ampoule LED', { t: '0,008 kW', c: C.vert }, { t: '5 h', c: C.doux }, { t: '0,04 kWh', c: C.vert } ],
        ], p, { dy: 52 });
      txt(ctx, "Le réfrigérateur consomme plus que le four : il est faible, mais il ne s'arrête jamais.",
          W * 0.5, H * 0.80, et(0.7, 0.22, p), C.blanc, 18, SANS);
      txt(ctx, "C'est la durée qui fait la facture autant que la puissance.",
          W * 0.5, H * 0.88, et(0.84, 0.16, p), C.or, 17, SANS);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'Puissance et énergie',
    body: [
      { t: "P = U × I, en watts : la vitesse de consommation.", c: C.jaune, f: MONO },
      { t: "E = P × t, en joules ou en kilowattheures.", c: C.vert, f: MONO },
      { t: "W avec s → J    ·    kW avec h → kWh", c: C.blanc, f: MONO },
      { t: "1 kWh = 3 600 000 J.", c: C.doux },
      { t: "La facture dépend du produit puissance × durée.", c: C.bleu },
    ],
    encadre: 'E = P × t',
    caption: "La puissance dit la vitesse, l'énergie dit le total."
  }),

]}));

/* ══════════════════════════════════════════════════════════════════════
   ÉNERGIE, CHAPITRE 7 — SÉCURITÉ ÉLECTRIQUE
   ══════════════════════════════════════════════════════════════════════ */

const CE7 = 'Sécurité électrique';

LECONS.push(lecon({
  id: 'pc_secu_1', chapitre: CE7, niveau: '4ème',
  titre: 'Les dangers du courant',
  desc: "Pourquoi le courant est dangereux pour le corps, et ce qui provoque les incendies domestiques.",
  steps: [

  { caption: "Le corps humain conduit le courant. Si un courant le traverse, il provoque des brûlures et peut arrêter le cœur.",
    label: 'Le corps conducteur',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'DANGER 1', "Le corps laisse passer le courant", p, C.rouge);
      const items = [
        { i: 'moins de 0,5 mA', d: 'rien de perceptible', c: C.vert },
        { i: '10 mA', d: 'contraction musculaire : on ne peut plus lâcher', c: C.jaune },
        { i: '30 mA', d: 'seuil de danger : paralysie respiratoire', c: C.rouge },
        { i: '75 mA et plus', d: 'fibrillation du cœur, risque mortel', c: C.rouge },
      ];
      items.forEach((k, i) => {
        const y = H * 0.34 + i * H * 0.13;
        const q = et(0.06 + i * 0.16, 0.3, p);
        txt(ctx, k.i, W * 0.30, y, q, k.c, 19, MONO, 'right');
        seg(ctx, W * 0.33, y, W * 0.36, y, q, C.doux, 1.4);
        txt(ctx, k.d, W * 0.38, y, et(0.1 + i * 0.16, 0.3, p), C.blanc, 17, SANS, 'left');
      });
      txt(ctx, "L'eau rend le corps bien meilleur conducteur : le danger augmente fortement.",
          W * 0.5, H * 0.90, et(0.78, 0.22, p), C.jaune, 17, SANS);
      txt(ctx, "D'où l'interdiction absolue des appareils branchés près d'une baignoire.",
          W * 0.5, H * 0.96, et(0.88, 0.12, p), C.doux, 16, SANS);
    }
  },

  { caption: "Deux mots à distinguer : l'électrisation est le passage du courant dans le corps ; l'électrocution en est l'issue mortelle.",
    label: 'Deux mots',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'VOCABULAIRE', 'Électrisation et électrocution', p, C.violet);
      const w = W * 0.38, h = H * 0.26;
      cadre(ctx, W * 0.07, H * 0.36, w, h, et(0.05, 0.3, p), C.jaune, 2);
      txt(ctx, 'ÉLECTRISATION', W * 0.07 + w / 2, H * 0.44, et(0.12, 0.25, p), C.jaune, 19, MONO);
      txt(ctx, "le courant traverse le corps", W * 0.07 + w / 2, H * 0.52, et(0.18, 0.25, p), C.blanc, 16, SANS);
      cadre(ctx, W * 0.55, H * 0.36, w, h, et(0.25, 0.3, p), C.rouge, 2);
      txt(ctx, 'ÉLECTROCUTION', W * 0.55 + w / 2, H * 0.44, et(0.32, 0.25, p), C.rouge, 19, MONO);
      txt(ctx, "l'électrisation entraîne la mort", W * 0.55 + w / 2, H * 0.52, et(0.38, 0.25, p), C.blanc, 16, SANS);
      txt(ctx, "Toute électrocution est une électrisation ; l'inverse est heureusement faux.",
          W * 0.5, H * 0.76, et(0.6, 0.25, p), C.doux, 17, SANS);
      txt(ctx, "Devant un accident : ne jamais toucher la victime avant d'avoir coupé le courant.",
          W * 0.5, H * 0.86, et(0.78, 0.22, p), C.rouge, 18, SANS);
      txt(ctx, "Couper au disjoncteur, puis appeler les secours : 15, 18 ou 112.",
          W * 0.5, H * 0.93, et(0.9, 0.1, p), C.jaune, 17, SANS);
    }
  },

  { caption: "Côté installation, deux causes d'incendie : le court-circuit et la surcharge d'une prise multiple.",
    label: 'Incendies',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'DANGER 2', "Ce qui met le feu", p, C.rouge);
      const w = W * 0.40, h = H * 0.30;
      cadre(ctx, W * 0.06, H * 0.32, w, h, et(0.05, 0.3, p), C.rouge, 2);
      txt(ctx, 'COURT-CIRCUIT', W * 0.06 + w / 2, H * 0.40, et(0.1, 0.25, p), C.rouge, 18, MONO);
      txt(ctx, "les deux bornes se touchent", W * 0.06 + w / 2, H * 0.48, et(0.15, 0.25, p), C.blanc, 16, SANS);
      txt(ctx, "l'intensité devient énorme, les fils fondent", W * 0.06 + w / 2, H * 0.55, et(0.2, 0.25, p), C.doux, 14, SANS);

      cadre(ctx, W * 0.54, H * 0.32, w, h, et(0.28, 0.3, p), C.jaune, 2);
      txt(ctx, 'SURCHARGE', W * 0.54 + w / 2, H * 0.40, et(0.34, 0.25, p), C.jaune, 18, MONO);
      txt(ctx, "trop d'appareils sur une prise", W * 0.54 + w / 2, H * 0.48, et(0.4, 0.25, p), C.blanc, 16, SANS);
      txt(ctx, "les intensités s'additionnent, le fil chauffe", W * 0.54 + w / 2, H * 0.55, et(0.45, 0.25, p), C.doux, 14, SANS);

      txt(ctx, "En dérivation, chaque appareil ajoute son intensité : 3 × 10 A = 30 A dans le même fil.",
          W * 0.5, H * 0.76, et(0.6, 0.25, p), C.blanc, 18, SANS);
      txt(ctx, "Un fil trop chargé s'échauffe, l'isolant fond, et le feu prend.",
          W * 0.5, H * 0.85, et(0.75, 0.2, p), C.rouge, 17, SANS);
      txt(ctx, "Jamais de multiprise branchée sur une autre multiprise.",
          W * 0.5, H * 0.93, et(0.88, 0.12, p), C.jaune, 17, SANS);
    }
  },

]}));

LECONS.push(lecon({
  id: 'pc_secu_2', chapitre: CE7, niveau: '4ème',
  titre: 'Les protections',
  desc: "Fusible, disjoncteur, prise de terre, différentiel : qui protège quoi, et contre quoi.",
  steps: [

  { caption: "Le fusible et le disjoncteur protègent l'installation : ils coupent le circuit quand l'intensité dépasse une limite.",
    label: 'Fusible et disjoncteur',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'PROTECTION 1', "Contre les intensités trop fortes", p, C.jaune);
      const x = W * 0.24, y = H * 0.32, w = W * 0.52, h = H * 0.34;
      circuit(ctx, x, y, w, h, [
        { cote: 'gauche', pos: 0.5, dessin: (c, cx, cy, hz, q) => symGenerateur(c, cx, cy, hz, q) },
        { cote: 'haut',   pos: 0.5, dessin: (c, cx, cy, hz, q) => symFusible(c, cx, cy, hz, q), label: 'fusible 10 A' },
        { cote: 'droite', pos: 0.5, dessin: (c, cx, cy, hz, q) => symLampe(c, cx, cy, hz, q, C.blanc, true) },
      ], p);
      puces(ctx, W * 0.12, H * 0.76, [
        { t: "Le fusible fond au-delà de son calibre : il faut le remplacer.", c: C.blanc },
        { t: "Le disjoncteur fait la même chose, mais se réarme d'un geste.", c: C.vert },
        { t: "Ils protègent les FILS de l'installation, pas les personnes.", c: C.rouge },
      ], p, { debut: 0.55, pas: 0.13, dy: 36, s: 17 });
    }
  },

  { caption: "La prise de terre et le disjoncteur différentiel, eux, protègent les personnes.",
    label: 'Terre et différentiel',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'PROTECTION 2', 'Contre les électrisations', p, C.vert);
      /* Un appareil dont la carcasse est reliée à la terre. */
      const cx = W * 0.28, cy = H * 0.44;
      cadre(ctx, cx - 60, cy - 40, 120, 80, et(0.05, 0.3, p), C.blanc, 2);
      txt(ctx, 'appareil', cx, cy, et(0.15, 0.25, p), C.doux, 16, SANS);
      const q = et(0.3, 0.3, p);
      seg(ctx, cx, cy + 40, cx, cy + 96, q, C.vert, 2.4);
      for (let i = 0; i < 3; i++) seg(ctx, cx - 26 + i * 9, cy + 96 + i * 9, cx + 26 - i * 9, cy + 96 + i * 9, et(0.4 + i * 0.05, 0.2, p), C.vert, 2.2);
      txt(ctx, 'prise de terre', cx, cy + 140, et(0.5, 0.25, p), C.vert, 16, SANS);

      puces(ctx, W * 0.50, H * 0.34, [
        { t: "La terre évacue vers le sol le courant qui atteint la carcasse.", c: C.blanc },
        { t: "Sans elle, ce courant passerait par la personne qui touche.", c: C.rouge },
        { t: "Le différentiel compare le courant entrant et sortant.", c: C.jaune },
        { t: "S'il manque plus de 30 mA, c'est qu'il fuit : il coupe en 30 ms.", c: C.vert },
      ], p, { debut: 0.45, pas: 0.13, dy: 44, s: 17 });
    }
  },

  { caption: "Les gestes qui évitent l'accident, à connaître par cœur.",
    label: 'Les bons gestes',
    draw(ctx, W, H, p) {
      board(ctx, W, H);
      entete(ctx, W, H, 'PRÉVENTION', 'Les règles à appliquer', p, C.bleu);
      const regles = [
        { t: "Couper le courant avant toute intervention", c: C.vert },
        { t: "Ne jamais toucher un appareil avec les mains mouillées", c: C.vert },
        { t: "Débrancher en tirant la fiche, jamais le câble", c: C.vert },
        { t: "Remplacer tout câble dénudé ou abîmé", c: C.vert },
        { t: "Ne rien introduire dans une prise", c: C.rouge },
        { t: "Ne pas enchaîner les multiprises", c: C.rouge },
      ];
      regles.forEach((r, i) => {
        const x = W * (0.07 + (i % 2) * 0.47), w = W * 0.42;
        const y = H * (0.32 + Math.floor(i / 2) * 0.19);
        const q = et(0.05 + i * 0.12, 0.3, p);
        cadre(ctx, x, y, w, H * 0.13, q, r.c, 1.6);
        txt(ctx, r.t, x + w / 2, y + H * 0.065, et(0.1 + i * 0.12, 0.28, p), C.blanc, 15, SANS);
      });
      txt(ctx, "En vert : ce qu'il faut faire.   En rouge : ce qu'il ne faut jamais faire.",
          W * 0.5, H * 0.94, et(0.85, 0.15, p), C.or, 16, SANS);
    }
  },

  diapo({
    eyebrow: 'À RETENIR', label: 'À retenir', title: 'Sécurité électrique',
    body: [
      { t: "Le corps conduit le courant ; 30 mA suffisent à être mortels.", c: C.rouge },
      { t: "Électrisation : le courant traverse. Électrocution : elle tue.", c: C.jaune },
      { t: "Fusible et disjoncteur protègent l'installation contre les surintensités.", c: C.blanc },
      { t: "Terre et différentiel protègent les personnes contre les fuites.", c: C.vert },
      { t: "Devant un accident : couper d'abord, toucher ensuite, appeler le 112.", c: C.bleu },
    ],
    encadre: 'couper le courant avant tout',
    caption: "Comprendre le danger, c'est déjà s'en protéger."
  }),

]}));

/* ── Enregistrement auprès de cours.html ──────────────────────────────
   Les quatre thèmes du programme sont déclarés pour que le filtre soit
   prêt ; seuls ceux qui possèdent des leçons s'affichent réellement. */
if (typeof window !== 'undefined') {
  window.COURS_PAR_MATIERE = window.COURS_PAR_MATIERE || {};
  window.COURS_PAR_MATIERE['physique-chimie'] = {
    branches: [
      { id: 'matiere',    label: 'Matière',                    color: '#7ab4c8' },
      { id: 'mouvements', label: 'Mouvements et interactions', color: '#c8a07a' },
      { id: 'energie',    label: 'Énergie',                    color: '#e8a87c' },
      { id: 'signaux',    label: 'Signaux',                    color: '#a07ac8' },
    ],
    lecons: LECONS,
  };
}

})();
