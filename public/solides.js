/* ═══════════════════════════════════════════════════════════
   MATHBASE — SOLIDES
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

  /* ── les neuf solides ──
     Chacun renvoie ses points extrêmes, ce qui permet de recentrer et de
     mettre à l'échelle sans calcul manuel. */
  function figure(type, p) {
    const G = [];                       /* {pts, cache} pour les arêtes */
    const F = [];                       /* faces à remplir légèrement */
    const E = [];                       /* ellipses : [cx,cy,rx,ry,cache] */
    const P = (x, y, z) => [x + z * COS, -y - z * SIN];

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
    return { G, F, E };
  }

  /* ── tracé dans un SVG, avec recentrage et mise à l'échelle ── */
  function dessiner(params, hote) {
    const { G, F, E } = figure(params.type, params);
    hote.innerHTML = "";
    hote.classList.add("mbs-svg");

    /* boîte englobante, ellipses comprises */
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    const voir = (x, y) => { if (x < x0) x0 = x; if (x > x1) x1 = x;
                             if (y < y0) y0 = y; if (y > y1) y1 = y; };
    G.forEach(a => a.pts.forEach(p => voir(p[0], p[1])));
    F.forEach(f => f.forEach(p => voir(p[0], p[1])));
    E.forEach(e => { voir(e[0] - e[2], e[1] - e[3]); voir(e[0] + e[2], e[1] + e[3]); });
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
  }

  /* ── styles, injectés une fois ── */
  function injecterStyles() {
    if (document.getElementById("mbs-styles")) return;
    const s = document.createElement("style");
    s.id = "mbs-styles";
    s.textContent = `
.mbs-cadre{display:flex;justify-content:center;background:var(--surface3);
  border:1px solid var(--border);border-radius:10px;padding:1rem}
.mbs-svg{width:100%;max-width:260px;height:auto;display:block}
.mbs-arete{stroke:var(--text);stroke-width:1.8;fill:none;stroke-linejoin:round;stroke-linecap:round}
.mbs-cache{stroke:var(--muted);stroke-width:1.3;stroke-dasharray:5 4;stroke-opacity:.75}
.mbs-face{fill:var(--accent);fill-opacity:.10;stroke:none}`;
    document.head.appendChild(s);
  }

  function installer(params, conteneur) {
    injecterStyles();
    conteneur.innerHTML = '<div class="mbs-cadre"><svg class="mbs-svg"></svg></div>';
    dessiner(params, conteneur.querySelector(".mbs-svg"));
  }

  window.MB_SOLIDES = { dessiner, installer, injecterStyles, TYPES, figure };
  if (typeof module !== "undefined" && module.exports) module.exports = { TYPES, figure };
})();
