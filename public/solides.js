/* ═══════════════════════════════════════════════════════════
   POLYMATES — SOLIDES
   Dessine un solide en perspective cavalière, à partir de ses seules
   dimensions. Aucun texte n'y figure : le solide n'est jamais nommé sur
   la figure, c'est à l'élève de le reconnaître.

   Convention retenue, celle du collège :
     · angle de fuite 30°, coefficient de réduction 0,5 ;
     · les arêtes visibles sont pleines, les arêtes cachées en pointillés ;
     · les faces avant conservent leur forme réelle.

   Contrat exposé (window.MB_SOLIDES) :
     dessiner(params, svg)        → trace le solide
     installer(params, conteneur) → insère un cadre et le solide dedans
     TYPES                        → la liste des solides connus

   params = { type, a } pour le cube, { type, L, l, h } pour le pavé, etc.
   Les dimensions sont relatives : seule la forme compte, l'échelle est
   ajustée automatiquement pour remplir le cadre.
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const el = (n, a) => { const e = document.createElementNS(NS, n);
    for (const k in (a || {})) e.setAttribute(k, a[k]); return e; };

  const ANG = 30 * Math.PI / 180, RED = 0.5;
  const COS = Math.cos(ANG) * RED, SIN = Math.sin(ANG) * RED;

  const TYPES = ["cube", "pave", "prisme_triangulaire", "prisme_hexagonal",
                 "cylindre", "pyramide_carree", "pyramide_triangulaire",
                 "cone", "boule"];
  /* Figures PLANES. Elles passent par le même widget que les solides — le
     champ `interactif` reste { widget: "solide", type: … } — pour n'avoir
     qu'un seul point de branchement dans l'application. */
  const PLANES = ["triangle_quelconque", "triangle_isocele", "triangle_equilateral",
                  "triangle_rectangle", "carre", "rectangle", "losange",
                  "parallelogramme", "trapeze", "trapeze_rectangle",
                  "pentagone_regulier", "hexagone_regulier", "cercle"];

  /* ── outils de tracé ── */
  function trace(g, pts, cache) {
    const d = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
    g.appendChild(el("path", { d, class: "mbs-arete" + (cache ? " mbs-cache" : "") }));
  }
  function face(g, pts) {
    const d = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ") + " Z";
    g.appendChild(el("path", { d, class: "mbs-face" }));
  }
  const ell = (g, cx, cy, rx, ry, cache) => g.appendChild(el("ellipse",
    { cx: cx.toFixed(1), cy: cy.toFixed(1), rx: rx.toFixed(1), ry: ry.toFixed(1),
      class: "mbs-arete" + (cache ? " mbs-cache" : "") }));

  /* ── CODAGE GÉOMÉTRIQUE ──
     Les marques ne sont jamais saisies à la main : elles se DÉDUISENT du
     tracé. Côtés de même longueur, côtés parallèles et angles droits sont
     recalculés, ce qui interdit toute incohérence entre dessin et codage. */
  const _v = (a, b) => [b[0] - a[0], b[1] - a[1]];
  const _par = (u, v) => Math.abs(u[0] * v[1] - u[1] * v[0]) < 1e-6;
  const _perp = (u, v) => Math.abs(u[0] * v[0] + u[1] * v[1]) < 1e-6;
  const _d = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

  function codageDe(P) {
    const n = P.length;
    const cot = P.map((p, i) => _v(p, P[(i + 1) % n]));
    const lon = P.map((p, i) => _d(p, P[(i + 1) % n]));
    /* groupes de côtés de même longueur, du plus long au plus court */
    const g = {};
    lon.forEach((x, i) => { const k = x.toFixed(3); (g[k] = g[k] || []).push(i); });
    const egaux = Object.keys(g).filter(k => g[k].length > 1)
      .sort((a, b) => Number(b) - Number(a)).map(k => g[k]);
    /* groupes de côtés parallèles */
    const vus = new Set(), paral = [];
    for (let i = 0; i < n; i++) {
      if (vus.has(i)) continue;
      const grp = [i];
      for (let j = i + 1; j < n; j++) if (!vus.has(j) && _par(cot[i], cot[j])) grp.push(j);
      if (grp.length > 1) { grp.forEach(x => vus.add(x)); paral.push(grp); }
    }
    const droits = [];
    for (let i = 0; i < n; i++) if (_perp(cot[(i - 1 + n) % n], cot[i])) droits.push(i);
    return { egaux, paral, droits, cot, lon };
  }

  /* marques : traits sur les côtés égaux, chevrons sur les parallèles,
     petit carré aux angles droits */
  function marques(P, g) {
    const n = P.length, K = [], { egaux, paral, droits, cot, lon } = codageDe(P);
    const mil = i => [(P[i][0] + P[(i + 1) % n][0]) / 2, (P[i][1] + P[(i + 1) % n][1]) / 2];
    egaux.forEach((grp, r) => grp.forEach(i => {
      const u = [cot[i][0] / lon[i], cot[i][1] / lon[i]], m = mil(i);
      for (let k = 0; k <= r; k++) {
        const dec = (k - r / 2) * 6;
        const c = [m[0] + u[0] * dec, m[1] + u[1] * dec];
        K.push({ t: "trait", a: [c[0] - u[1] * 6, c[1] + u[0] * 6],
                              b: [c[0] + u[1] * 6, c[1] - u[0] * 6] });
      }
    }));
    /* Les chevrons de parallélisme ne sont portés que lorsqu'ils APPRENNENT
       quelque chose : dans un carré ou un rectangle, le parallélisme découle
       des quatre angles droits, et au-delà de deux paires (hexagone) le
       dessin devient illisible. */
    const montrerParal = paral.length <= 2 && droits.length < 4;
    (montrerParal ? paral : []).forEach((grp, r) => grp.forEach(i => {
      const u = [cot[i][0] / lon[i], cot[i][1] / lon[i]], m = mil(i);
      for (let k = 0; k <= r; k++) {
        const dec = (k - r / 2) * 7;
        const c = [m[0] + u[0] * dec, m[1] + u[1] * dec], L = 6;
        K.push({ t: "chevron",
          a: [c[0] - u[0] * L - u[1] * L, c[1] - u[1] * L + u[0] * L],
          s: c,
          b: [c[0] - u[0] * L + u[1] * L, c[1] - u[1] * L - u[0] * L] });
      }
    }));
    droits.forEach(i => {
      const p = P[i], av = cot[(i - 1 + n) % n], ap = cot[i];
      const la = Math.hypot(av[0], av[1]), lb = Math.hypot(ap[0], ap[1]), T = 11;
      const u = [-av[0] / la * T, -av[1] / la * T], w = [ap[0] / lb * T, ap[1] / lb * T];
      K.push({ t: "droit", pts: [[p[0] + u[0], p[1] + u[1]],
                                 [p[0] + u[0] + w[0], p[1] + u[1] + w[1]],
                                 [p[0] + w[0], p[1] + w[1]]] });
    });
    return K;
  }

  /* ── les neuf solides ──
     Chacun renvoie ses points extrêmes, ce qui permet de recentrer et de
     mettre à l'échelle sans calcul manuel. */
  function figure(type, p) {
    const G = [];                       /* {pts, cache} pour les arêtes */
    const K = [];                       /* marques de codage géométrique */
    const F = [];                       /* faces à remplir légèrement */
    const E = [];                       /* ellipses : [cx,cy,rx,ry,cache] */
    const P = (x, y, z) => [x + z * COS, -y - z * SIN];

    /* ── figures planes : pas de fuyante, on trace dans le plan ── */
    if (PLANES.indexOf(type) >= 0) {
      const p2 = (x, y) => [x, -y];
      const reg = (n, r, dep) => Array.from({ length: n }, (_, i) => {
        const a = dep + i * 2 * Math.PI / n;
        return p2(r * Math.cos(a), r * Math.sin(a)); });
      let s2 = null;
      if (type === "triangle_quelconque") s2 = [p2(0,0), p2(140,0), p2(38,88)];
      else if (type === "triangle_isocele") s2 = [p2(0,0), p2(130,0), p2(65,105)];
      /* hauteur exacte d'un équilatéral : côté × √3 / 2. Arrondie à 103,9,
         elle donnait des côtés de 120 et 119,98 — visible au contrôle. */
      else if (type === "triangle_equilateral") s2 = [p2(0,0), p2(120,0), p2(60, 120 * Math.sqrt(3) / 2)];
      else if (type === "triangle_rectangle") s2 = [p2(0,0), p2(125,0), p2(0,95)];
      else if (type === "carre") s2 = [p2(0,0), p2(110,0), p2(110,110), p2(0,110)];
      else if (type === "rectangle") s2 = [p2(0,0), p2(140,0), p2(140,88), p2(0,88)];
      else if (type === "losange") s2 = [p2(58,0), p2(116,80), p2(58,160), p2(0,80)];
      else if (type === "parallelogramme") s2 = [p2(0,0), p2(125,0), p2(165,85), p2(40,85)];
      else if (type === "trapeze") s2 = [p2(0,0), p2(150,0), p2(115,86), p2(38,86)];
      else if (type === "trapeze_rectangle") s2 = [p2(0,0), p2(145,0), p2(145,60), p2(0,95)];
      else if (type === "pentagone_regulier") s2 = reg(5, 72, -Math.PI / 2);
      else if (type === "hexagone_regulier") s2 = reg(6, 72, 0);
      if (s2) { F.push(s2); G.push({ pts: [...s2, s2[0]] });
        if (p && p.codage) K.push(...marques(s2)); }
      else if (type === "cercle") { E.push([0, 0, 70, 70, false]); }
      return { G, F, E, K };
    }

    if (type === "cube" || type === "pave") {
      const L = p.L || p.a || 100, h = p.h || p.a || 100, d = p.l || p.a || 100;
      const s = (x, y, z) => P(x, y, z);
      const av = [s(0,0,0), s(L,0,0), s(L,h,0), s(0,h,0)];
      const ar = [s(0,0,d), s(L,0,d), s(L,h,d), s(0,h,d)];
      F.push([av[0], av[1], av[2], av[3]]);
      G.push({ pts: [...av, av[0]] });
      G.push({ pts: [ar[1], ar[2], ar[3]] });          /* visible */
      G.push({ pts: [ar[3], ar[0], ar[1]], cache: true });
      G.push({ pts: [av[1], ar[1]] }); G.push({ pts: [av[2], ar[2]] });
      G.push({ pts: [av[3], ar[3]] }); G.push({ pts: [av[0], ar[0]], cache: true });
    }
    else if (type === "prisme_triangulaire") {
      const L = p.b || 110, h = p.hb || 90, d = p.h || 90;
      const T = z => [P(0,0,z), P(L,0,z), P(L*0.42,h,z)];
      const av = T(0), ar = T(d);
      F.push(av);
      G.push({ pts: [...av, av[0]] });
      G.push({ pts: [ar[1], ar[2], ar[0]] });
      G.push({ pts: [ar[0], ar[1]], cache: true });
      G.push({ pts: [av[0], ar[0]], cache: true });
      G.push({ pts: [av[1], ar[1]] }); G.push({ pts: [av[2], ar[2]] });
    }
    else if (type === "prisme_hexagonal") {
      const r = 55, d = p.h || 95;
      const H = z => Array.from({length: 6}, (_, i) => {
        const a = Math.PI / 6 + i * Math.PI / 3;
        return P(r * Math.cos(a) + r, r * Math.sin(a) + r, z); });
      const av = H(0), ar = H(d);
      F.push(av);
      G.push({ pts: [...av, av[0]] });
      G.push({ pts: [ar[5], ar[0], ar[1], ar[2]] });
      G.push({ pts: [ar[2], ar[3], ar[4], ar[5]], cache: true });
      [0, 1, 2, 5].forEach(i => G.push({ pts: [av[i], ar[i]] }));
      [3, 4].forEach(i => G.push({ pts: [av[i], ar[i]], cache: true }));
    }
    else if (type === "cylindre") {
      const r = p.r || 50, h = p.h || 130;
      const rx = r, ry = r * SIN * 2;
      E.push([0, -h, rx, ry, false]);                   /* dessus */
      E.push([0, 0, rx, ry, false]);                    /* dessous, partie visible */
      G.push({ pts: [[-rx, -h], [-rx, 0]] });
      G.push({ pts: [[rx, -h], [rx, 0]] });
    }
    else if (type === "cone") {
      const r = p.r || 55, h = p.h || 130;
      const rx = r, ry = r * SIN * 2;
      E.push([0, 0, rx, ry, false]);
      G.push({ pts: [[-rx, 0], [0, -h]] });
      G.push({ pts: [[rx, 0], [0, -h]] });
    }
    else if (type === "boule") {
      const r = p.r || 65;
      E.push([0, 0, r, r, false]);
      E.push([0, 0, r, r * 0.34, true]);                /* équateur, en pointillés */
    }
    else if (type === "pyramide_carree") {
      const c = p.c || 110, h = p.h || 115, d = c;
      const b = [P(0,0,0), P(c,0,0), P(c,0,d), P(0,0,d)];
      const S = [(b[0][0] + b[2][0]) / 2, (b[0][1] + b[2][1]) / 2 - h];
      F.push(b);
      G.push({ pts: [b[0], b[1], b[2]] });
      G.push({ pts: [b[2], b[3], b[0]], cache: true });
      G.push({ pts: [b[0], S] }); G.push({ pts: [b[1], S] }); G.push({ pts: [b[2], S] });
      G.push({ pts: [b[3], S], cache: true });
    }
    else if (type === "pyramide_triangulaire") {
      const c = p.c || 120, h = p.h || 115;
      const b = [P(0,0,0), P(c,0,0), P(c*0.5,0,c*0.8)];
      const S = [(b[0][0] + b[1][0] + b[2][0]) / 3, (b[0][1] + b[1][1] + b[2][1]) / 3 - h];
      F.push(b);
      G.push({ pts: [b[0], b[1]] });
      G.push({ pts: [b[1], b[2]] });
      G.push({ pts: [b[2], b[0]], cache: true });
      G.push({ pts: [b[0], S] }); G.push({ pts: [b[1], S] });
      G.push({ pts: [b[2], S], cache: true });
    }
    return { G, F, E, K };
  }

  /* ── tracé dans un SVG, avec recentrage et mise à l'échelle ── */
  function dessiner(params, hote) {
    const { G, F, E, K } = figure(params.type, params);
    hote.innerHTML = "";
    hote.classList.add("mbs-svg");

    /* boîte englobante, ellipses comprises */
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    const voir = (x, y) => { if (x < x0) x0 = x; if (x > x1) x1 = x;
                             if (y < y0) y0 = y; if (y > y1) y1 = y; };
    G.forEach(a => a.pts.forEach(p => voir(p[0], p[1])));
    F.forEach(f => f.forEach(p => voir(p[0], p[1])));
    E.forEach(e => { voir(e[0] - e[2], e[1] - e[3]); voir(e[0] + e[2], e[1] + e[3]); });
    (K || []).forEach(k => { (k.pts || [k.a, k.b, k.s]).filter(Boolean).forEach(p => voir(p[0], p[1])); });
    if (!isFinite(x0)) return;

    const M = 16, W = x1 - x0 + 2 * M, H = y1 - y0 + 2 * M;
    hote.setAttribute("viewBox", `0 0 ${W.toFixed(1)} ${H.toFixed(1)}`);
    const dx = -x0 + M, dy = -y0 + M;
    const T = p => [p[0] + dx, p[1] + dy];

    const g = el("g");
    hote.appendChild(g);
    F.forEach(f => face(g, f.map(T)));
    E.forEach(e => ell(g, e[0] + dx, e[1] + dy, e[2], e[3], e[4]));
    G.forEach(a => trace(g, a.pts.map(T), a.cache));
    (K || []).forEach(k => {
      if (k.t === "droit") {
        const q = k.pts.map(T);
        g.appendChild(el("path", { class: "mbs-codage",
          d: `M ${q[0][0].toFixed(1)} ${q[0][1].toFixed(1)} L ${q[1][0].toFixed(1)} ${q[1][1].toFixed(1)} L ${q[2][0].toFixed(1)} ${q[2][1].toFixed(1)}` }));
      } else if (k.t === "chevron") {
        const a = T(k.a), c = T(k.s), b = T(k.b);
        g.appendChild(el("path", { class: "mbs-codage",
          d: `M ${a[0].toFixed(1)} ${a[1].toFixed(1)} L ${c[0].toFixed(1)} ${c[1].toFixed(1)} L ${b[0].toFixed(1)} ${b[1].toFixed(1)}` }));
      } else {
        const a = T(k.a), b = T(k.b);
        g.appendChild(el("path", { class: "mbs-codage",
          d: `M ${a[0].toFixed(1)} ${a[1].toFixed(1)} L ${b[0].toFixed(1)} ${b[1].toFixed(1)}` }));
      }
    });
  }

  /* ── styles, injectés une fois ── */
  function injecterStyles() {
    if (document.getElementById("mbs-styles")) return;
    const s = document.createElement("style");
    s.id = "mbs-styles";
    s.textContent = `
.mbs-cadre{display:flex;justify-content:center;background:var(--w-fond,#63676b);
  border:1px solid var(--w-bord,rgba(0,0,0,.40));border-radius:10px;padding:1rem}
.mbs-svg{width:100%;max-width:260px;height:auto;display:block}
/* Le solide est la figure : arêtes blanches, arêtes cachées en blanc atténué. */
.mbs-arete{stroke:var(--w-figure,#fff);stroke-width:1.8;fill:none;stroke-linejoin:round;stroke-linecap:round}
.mbs-cache{stroke:var(--w-figure-dim,rgba(255,255,255,.62));stroke-width:1.3;stroke-dasharray:5 4;stroke-opacity:.85}
.mbs-face{fill:var(--w-figure,#fff);fill-opacity:.10;stroke:none}
.mbs-codage{stroke:var(--w-codage,#ffd166);stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round}
.mbs-svg text{fill:var(--w-figure,#fff)}
    /* ── Sur le papier de la séance ────────────────────────────
       Le texte autour passe à l'encre sombre ; le cadre du solide, lui,
       garde le gris et ses arêtes blanches. */
    .mbs-sur-papier{color:#17120c}`;
    document.head.appendChild(s);
  }

  function installer(params, conteneur, opts) {
    if (opts && opts.papier) conteneur.classList.add("mbs-sur-papier");
    injecterStyles();
    conteneur.innerHTML = '<div class="mbs-cadre"><svg class="mbs-svg"></svg></div>';
    dessiner(params, conteneur.querySelector(".mbs-svg"));
  }

  window.MB_SOLIDES = { dessiner, installer, injecterStyles, TYPES, PLANES, figure };
  if (typeof module !== "undefined" && module.exports) module.exports = { TYPES, PLANES, figure };
})();
