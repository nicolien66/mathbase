/* ═══════════════════════════════════════════════════════════
   POLYMATES — ESPACE QUADRILLAGE
   Widget d'exercices interactifs sur quadrillage.

   Deux gestes sur le même plateau :
     · colorier des CASES   — repérées par leur coin haut-gauche, 0 ≤ x < COLS
     · tracer des SEGMENTS  — entre des NŒUDS, 0 ≤ x ≤ COLS
   Ce sont deux repérages distincts : une grille 12×10 a 120 cases mais
   143 nœuds. C'est la seule subtilité du modèle.

   Contrat exposé (window.MB_QUADRILLAGE) :
     monter(params, svg)      → instance
     instance.lire()          → { cases, segments }
     instance.corriger(rep)   → superpose la correction, fige le plateau
     instance.annuler() / vider() / setMode() / leverCrayon()
     verifier(etat, reponse)  → { ok, score, attendus, justes, manques, faux }

   `verifier` est PURE : ni DOM ni hasard. Elle est donc testable hors
   navigateur, ce qui permet de valider les générateurs.
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const el = (n, a) => { const e = document.createElementNS(NS, n);
    for (const k in (a || {})) e.setAttribute(k, a[k]); return e; };

  /* Normalisation : un segment tracé de A vers B est le même que de B vers A. */
  const cleC = c => c[0] + "," + c[1];
  const cleS = s => { const a = s[0], b = s[1];
    return (a[0] < b[0] || (a[0] === b[0] && a[1] <= b[1]))
      ? a[0] + "," + a[1] + "|" + b[0] + "," + b[1]
      : b[0] + "," + b[1] + "|" + a[0] + "," + a[1]; };

  /* ── correction ── */
  function verifier(etat, reponse) {
    const bilan = (faits, attendus, k) => {
      const A = new Set((attendus || []).map(k)), F = new Set((faits || []).map(k));
      let justes = 0; F.forEach(x => { if (A.has(x)) justes++; });
      return { attendus: A.size, justes, manques: A.size - justes, faux: F.size - justes };
    };
    const c = bilan(etat.cases, reponse.cases, cleC);
    const s = bilan(etat.segments, reponse.segments, cleS);
    const attendus = c.attendus + s.attendus, justes = c.justes + s.justes;
    const manques = c.manques + s.manques, faux = c.faux + s.faux;
    return { ok: manques === 0 && faux === 0 && attendus > 0,
             attendus, justes, manques, faux,
             score: attendus ? Math.max(0, (justes - faux) / attendus) : 0 };
  }

  /* ── repères de transformation ──
     Un même quadrillage sert à quatre transformations. Le repère dessiné en
     dépend :
       v / h : une DROITE en pointillés      (symétrie axiale)
       c     : un POINT marqué O             (symétrie centrale)
       t     : une FLÈCHE, le vecteur        (translation)
       r     : un POINT + un arc fléché      (rotation)
     `reperes` accepte plusieurs entrées, pour les transformations composées. */
  function dessineRepere(A, g, X, Y, petit) {
    if (!A) return;
    const R = petit ? 0.7 : 1;
    if (A.type === "c" || A.type === "r") {
      g.appendChild(el("circle", { cx: X(A.x), cy: Y(A.y), r: 6 * R, class: "mbq-centre-halo" }));
      g.appendChild(el("circle", { cx: X(A.x), cy: Y(A.y), r: 3.5 * R, class: "mbq-centre" }));
      if (!petit) {
        const t = el("text", { class: "mbq-axe-lab", x: X(A.x) + 10, y: Y(A.y) - 8 });
        t.textContent = A.nom || "O"; g.appendChild(t);
      }
      /* Pas d'arc pour la rotation : l'angle et le sens sont donnés en
         toutes lettres dans l'énoncé, un repère graphique de plus n'apporte
         rien et encombre le quadrillage. Seul le centre est marqué. */
      return;
    }
    if (A.type === "t") {
      const x1 = X(A.de[0]), y1 = Y(A.de[1]), x2 = X(A.vers[0]), y2 = Y(A.vers[1]);
      g.appendChild(el("line", { x1, y1, x2, y2, class: "mbq-vecteur" }));
      const ang = Math.atan2(y2 - y1, x2 - x1), L = 11 * R;
      g.appendChild(el("path", { class: "mbq-pointe",
        d: `M ${x2} ${y2} l ${L * Math.cos(ang - 2.6)} ${L * Math.sin(ang - 2.6)}
            M ${x2} ${y2} l ${L * Math.cos(ang + 2.6)} ${L * Math.sin(ang + 2.6)}` }));
      g.appendChild(el("circle", { cx: x1, cy: y1, r: 3 * R, class: "mbq-centre" }));
      if (!petit) {
        const t = el("text", { class: "mbq-axe-lab", x: (x1 + x2) / 2 + 8, y: (y1 + y2) / 2 - 8 });
        t.textContent = A.nom || "v"; g.appendChild(t);
      }
      return;
    }
    let a;
    if (A.type === "v") a = el("line", { x1: X(A.x), y1: Y(0) - 8 * R, x2: X(A.x), y2: Y(A.rows) + 8 * R });
    else if (A.type === "h") a = el("line", { x1: X(0) - 8 * R, y1: Y(A.y), x2: X(A.cols) + 8 * R, y2: Y(A.y) });
    if (!a) return;
    a.setAttribute("class", "mbq-axe"); g.appendChild(a);
    if (!petit) {
      const t = el("text", { class: "mbq-axe-lab",
        x: A.type === "v" ? X(A.x) + 6 : X(0) - 4,
        y: A.type === "v" ? Y(0) - 12 : Y(A.y) - 6 });
      t.textContent = A.nom || "(d)"; g.appendChild(t);
    }
  }
  /* les repères d'un exercice, sous forme de liste, dimensions incluses */
  function listeReperes(params) {
    const l = params.reperes ? params.reperes.slice() : (params.axe ? [params.axe] : []);
    return l.map(a => Object.assign({ cols: params.COLS, rows: params.ROWS }, a));
  }

  /* ── plateau ── */
  function monter(params, hote) {
    const P = 18, W = 40;
    const COLS = params.COLS, ROWS = params.ROWS;
    const fixe = params.fixe || { cases: [], segments: [] };
    hote.setAttribute("viewBox", "0 0 " + (COLS * W + P * 2) + " " + (ROWS * W + P * 2));
    hote.innerHTML = "";
    hote.classList.add("mbq-grid");
    const X = i => P + i * W, Y = j => P + j * W;

    const gC = el("g"), gG = el("g"), gF = el("g"), gU = el("g"), gB = el("g"), gN = el("g");
    hote.appendChild(gC); hote.appendChild(gG); hote.appendChild(gF);
    hote.appendChild(gU); hote.appendChild(gB); hote.appendChild(gN);

    const cellsEls = new Map();
    for (let j = 0; j < ROWS; j++) for (let i = 0; i < COLS; i++) {
      const r = el("rect", { x: X(i), y: Y(j), width: W, height: W, class: "mbq-cell" });
      cellsEls.set(cleC([i, j]), r); gC.appendChild(r);
    }
    for (let i = 0; i <= COLS; i++)
      gG.appendChild(el("line", { x1: X(i), y1: Y(0), x2: X(i), y2: Y(ROWS),
        class: "mbq-line" + (i % 5 === 0 ? " mbq-major" : "") }));
    for (let j = 0; j <= ROWS; j++)
      gG.appendChild(el("line", { x1: X(0), y1: Y(j), x2: X(COLS), y2: Y(j),
        class: "mbq-line" + (j % 5 === 0 ? " mbq-major" : "") }));

    listeReperes(params).forEach(a => dessineRepere(a, gG, X, Y, false));

    (fixe.cases || []).forEach(c => { const r = cellsEls.get(cleC(c)); if (r) r.classList.add("mbq-fixe"); });
    (fixe.segments || []).forEach(s => gF.appendChild(el("line",
      { x1: X(s[0][0]), y1: Y(s[0][1]), x2: X(s[1][0]), y2: Y(s[1][1]), class: "mbq-seg mbq-seg-fixe" })));

    const nodeEls = new Map();
    for (let j = 0; j <= ROWS; j++) for (let i = 0; i <= COLS; i++) {
      const c = el("circle", { cx: X(i), cy: Y(j), r: 7, class: "mbq-node" });
      nodeEls.set(cleC([i, j]), c); gN.appendChild(c);
    }

    const cases = new Map(), segments = new Map(), histo = [];
    const fixeSet = new Set((fixe.cases || []).map(cleC));
    let mode = params.geste === "segments" ? "segments" : "cases";
    let ancre = null, band = null, fige = false, survol = null;

    const dessineSeg = (s, cls) => { const l = el("line",
      { x1: X(s[0][0]), y1: Y(s[0][1]), x2: X(s[1][0]), y2: Y(s[1][1]),
        class: "mbq-seg" + (cls ? " " + cls : "") }); gU.appendChild(l); return l; };

    function bascule(c) {
      const k = cleC(c);
      if (fixeSet.has(k)) return;
      if (cases.has(k)) { cases.delete(k); cellsEls.get(k).classList.remove("mbq-on"); histo.push({ t: "c-", c: c }); }
      else { cases.set(k, c); cellsEls.get(k).classList.add("mbq-on"); histo.push({ t: "c+", c: c }); }
    }
    function planter(a, b) {
      const k = cleS([a, b]);
      if (segments.has(k)) return;
      segments.set(k, { s: [a, b], el: dessineSeg([a, b]) });
      histo.push({ t: "s+", k: k });
    }
    function versSvg(ev) {
      const pt = hote.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY;
      return pt.matrixTransform(hote.getScreenCTM().inverse());
    }
    const versNode = p => [Math.max(0, Math.min(COLS, Math.round((p.x - P) / W))),
                           Math.max(0, Math.min(ROWS, Math.round((p.y - P) / W)))];
    const versCase = p => { const i = Math.floor((p.x - P) / W), j = Math.floor((p.y - P) / W);
      return (i < 0 || j < 0 || i >= COLS || j >= ROWS) ? null : [i, j]; };

    function majSurvol(n) {
      if (survol && nodeEls.get(survol)) nodeEls.get(survol).classList.remove("mbq-near");
      survol = n ? cleC(n) : null;
      if (survol && nodeEls.get(survol)) nodeEls.get(survol).classList.add("mbq-near");
    }
    function leverCrayon() { ancre = null; if (band) { band.remove(); band = null; } majSurvol(null); }

    hote.addEventListener("pointerdown", ev => {
      if (fige || ev.button === 2) return;
      const p = versSvg(ev);
      if (mode === "cases") { const c = versCase(p); if (c) bascule(c); }
      else {
        const n = versNode(p);
        if (!ancre) {
          ancre = n;
          band = el("line", { x1: X(n[0]), y1: Y(n[1]), x2: X(n[0]), y2: Y(n[1]), class: "mbq-band" });
          gB.appendChild(band);
        } else if (cleC(ancre) !== cleC(n)) {
          planter(ancre, n);
          ancre = n;                                  /* enchaînement de la ligne brisée */
          band.setAttribute("x1", X(n[0])); band.setAttribute("y1", Y(n[1]));
        }
      }
    });
    hote.addEventListener("pointermove", ev => {
      if (fige || mode !== "segments") return;
      const p = versSvg(ev), n = versNode(p);
      majSurvol(n);
      if (band) { band.setAttribute("x2", X(n[0])); band.setAttribute("y2", Y(n[1])); }
    });
    hote.addEventListener("pointerleave", () => { if (mode === "segments") majSurvol(null); });
    hote.addEventListener("contextmenu", ev => { ev.preventDefault(); leverCrayon(); });

    return {
      params: params,
      setMode(m) { mode = m; leverCrayon(); },
      leverCrayon: leverCrayon,
      annuler() {
        const a = histo.pop(); if (!a) return;
        if (a.t === "c+") { cases.delete(cleC(a.c)); cellsEls.get(cleC(a.c)).classList.remove("mbq-on"); }
        else if (a.t === "c-") { cases.set(cleC(a.c), a.c); cellsEls.get(cleC(a.c)).classList.add("mbq-on"); }
        else if (a.t === "s+") { const o = segments.get(a.k); if (o) { o.el.remove(); segments.delete(a.k); } }
        leverCrayon();
      },
      vider() {
        cases.forEach((_, k) => cellsEls.get(k).classList.remove("mbq-on"));
        cases.clear(); segments.forEach(o => o.el.remove()); segments.clear();
        histo.length = 0; leverCrayon();
      },
      lire() {
        return { cases: Array.from(cases.values()),
                 segments: Array.from(segments.values()).map(o => o.s) };
      },
      estFige() { return fige; },
      corriger(reponse) {
        fige = true; leverCrayon();
        const attC = new Set((reponse.cases || []).map(cleC));
        const attS = new Set((reponse.segments || []).map(cleS));
        cases.forEach((c, k) => { const r = cellsEls.get(k);
          r.classList.remove("mbq-on"); r.classList.add(attC.has(k) ? "mbq-ok" : "mbq-faux"); });
        attC.forEach(k => { if (!cases.has(k)) cellsEls.get(k).classList.add("mbq-manque"); });
        segments.forEach((o, k) => o.el.classList.add(attS.has(k) ? "mbq-ok" : "mbq-faux"));
        (reponse.segments || []).forEach(s => { if (!segments.has(cleS(s))) dessineSeg(s, "mbq-manque"); });
      }
    };
  }

  /* ── aperçu STATIQUE ──
     Affiché dans le catalogue : l'élève voit la figure à compléter, mais ne
     joue pas. Aucun écouteur n'est posé, la réponse n'est pas dessinée. */
  function apercu(params, hote) {
    const P = 14, W = 26;
    const COLS = params.COLS, ROWS = params.ROWS;
    const fixe = params.fixe || { cases: [], segments: [] };
    hote.setAttribute("viewBox", "0 0 " + (COLS * W + P * 2) + " " + (ROWS * W + P * 2));
    hote.innerHTML = "";
    hote.classList.add("mbq-apercu");
    const X = i => P + i * W, Y = j => P + j * W;

    (fixe.cases || []).forEach(c => hote.appendChild(el("rect",
      { x: X(c[0]), y: Y(c[1]), width: W, height: W, class: "mbq-cell mbq-fixe" })));
    for (let i = 0; i <= COLS; i++)
      hote.appendChild(el("line", { x1: X(i), y1: Y(0), x2: X(i), y2: Y(ROWS),
        class: "mbq-line" + (i % 5 === 0 ? " mbq-major" : "") }));
    for (let j = 0; j <= ROWS; j++)
      hote.appendChild(el("line", { x1: X(0), y1: Y(j), x2: X(COLS), y2: Y(j),
        class: "mbq-line" + (j % 5 === 0 ? " mbq-major" : "") }));
    listeReperes(params).forEach(a => dessineRepere(a, hote, X, Y, true));
    (fixe.segments || []).forEach(g => hote.appendChild(el("line",
      { x1: X(g[0][0]), y1: Y(g[0][1]), x2: X(g[1][0]), y2: Y(g[1][1]),
        class: "mbq-seg mbq-seg-fixe" })));
  }

  /* montage d'un aperçu dans un conteneur quelconque */
  function installerApercu(params, conteneur, opts) {
    /* Sur le papier de la séance, l'encre claire est illisible : on bascule
       toute la palette en sombre. */
    if (opts && opts.papier) conteneur.classList.add("mbq-sur-papier");
    injecterStyles();
    conteneur.innerHTML = '<div class="mbq-board mbq-board-apercu"><svg class="mbq-apercu"></svg></div>';
    apercu(params, conteneur.querySelector(".mbq-apercu"));
  }

  /* ── styles, injectés une fois, alignés sur le design système ── */
  function injecterStyles() {
    if (document.getElementById("mbq-styles")) return;
    const s = document.createElement("style");
    s.id = "mbq-styles";
    s.textContent = `
.mbq-wrap{margin-top:.6rem}
.mbq-tools{display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;margin-bottom:.7rem}
.mbq-tool{font-family:var(--sans);font-size:.8rem;font-weight:400;color:var(--muted);
  background:transparent;border:1px solid var(--border2);border-radius:8px;
  padding:.4rem .75rem;cursor:pointer;transition:.16s}
.mbq-tool:hover{color:var(--text);border-color:var(--accent-dim)}
.mbq-tool[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:#0b0b09;font-weight:500}
.mbq-tool:focus-visible{outline:2px solid var(--accent2);outline-offset:2px}
.mbq-spacer{flex:1}
.mbq-board{display:flex;justify-content:center;background:var(--w-fond,#63676b);
  border:1px solid var(--w-bord,rgba(0,0,0,.40));border-radius:10px;padding:.8rem}
.mbq-grid{width:100%;max-width:480px;height:auto;touch-action:none;display:block;cursor:crosshair}
.mbq-apercu{width:100%;max-width:340px;height:auto;display:block}
.mbq-board-apercu{padding:.6rem;background:var(--w-fond,#63676b)}
/* Le quadrillage : noir, les lignes de 5 en 5 plus franches. */
.mbq-line{stroke:var(--w-grille,rgba(0,0,0,.50));stroke-width:1}
.mbq-major{stroke:var(--w-grille-forte,#000)}
.mbq-cell{fill:transparent}
/* Ce que l'élève trace : blanc. */
.mbq-on{fill:var(--w-figure,#fff);fill-opacity:.92}
.mbq-fixe{fill:var(--w-figure,#fff);fill-opacity:.40}
.mbq-ok{fill:var(--w-juste,#a8f0c6);fill-opacity:.75}
.mbq-manque{fill:none;stroke:var(--w-codage,#ffd166);stroke-width:2;stroke-dasharray:4 3}
.mbq-faux{fill:var(--w-faux,#ffab97);fill-opacity:.55}
.mbq-node{fill:transparent}
.mbq-near{fill:var(--w-figure,#fff);fill-opacity:.45}
.mbq-seg{stroke:var(--w-figure,#fff);stroke-width:3;stroke-linecap:round;fill:none}
.mbq-seg-fixe{stroke:var(--w-figure,#fff);stroke-opacity:.55}
.mbq-seg.mbq-ok{stroke:var(--w-juste,#a8f0c6);fill:none}
.mbq-seg.mbq-manque{stroke:var(--w-codage,#ffd166);stroke-dasharray:5 4;stroke-opacity:.8;fill:none}
.mbq-seg.mbq-faux{stroke:var(--w-faux,#ffab97);fill:none}
.mbq-band{stroke:var(--w-codage,#ffd166);stroke-width:2;stroke-dasharray:5 4;stroke-opacity:.7;pointer-events:none}
.mbq-axe{stroke:var(--w-repere,#9fe3ff);stroke-width:2;stroke-dasharray:9 5;stroke-opacity:.85}
.mbq-centre{fill:var(--w-repere,#9fe3ff)}
.mbq-centre-halo{fill:none;stroke:var(--w-repere,#9fe3ff);stroke-width:1.5;stroke-opacity:.55}
.mbq-vecteur{stroke:var(--w-repere,#9fe3ff);stroke-width:2.5;stroke-linecap:round}
.mbq-pointe{stroke:var(--w-repere,#9fe3ff);stroke-width:2.5;fill:none;stroke-linecap:round}
.mbq-axe-lab{fill:var(--w-repere,#9fe3ff);font-family:var(--mono);font-size:11px;opacity:.9}
.mbq-foot{display:flex;gap:.6rem;align-items:center;flex-wrap:wrap;margin-top:.8rem}
.mbq-verdict{font-size:.85rem;line-height:1.5;flex:1;min-width:180px}
.mbq-bon{color:var(--accent2)} .mbq-moyen{color:var(--accent)} .mbq-mauvais{color:var(--danger)}
.mbq-hint{font-family:var(--mono);font-size:.7rem;color:var(--muted);margin-top:.6rem;line-height:1.6}
.mbq-legend{display:flex;gap:1rem;flex-wrap:wrap;font-size:.72rem;color:var(--muted);margin-top:.6rem}
.mbq-legend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:.35rem;vertical-align:-1px}
@media (prefers-reduced-motion:reduce){.mbq-tool{transition:none}}
    /* ── Sur le papier de la séance ──────────────────────────────────────
       Le plateau garde volontairement sa palette gris/noir/blanc : c'est
       une surface de tracé, pas du texte. Seuls les éléments d'interface
       posés SUR le papier (boutons, légendes) prennent l'encre sombre.
       Les surcharges de plateau, de quadrillage et de figure ont été
       retirées — l'une d'elles visait .mbq-grille, une classe que le code
       n'émet jamais (il pose .mbq-line), si bien que le quadrillage restait
       blanc à 9 % sur fond clair : invisible.
       ATTENTION : ce bloc est un littéral de gabarit. Jamais d'accent grave
       dans ces commentaires — il fermerait la chaîne et le CSS deviendrait
       du code. */
    .mbq-sur-papier{color:#17120c}
    .mbq-sur-papier .mbq-tool{color:#5b4f36;border-color:rgba(31,26,19,.28)}
`;
    document.head.appendChild(s);
  }

  /* ── montage clé en main dans un conteneur : plateau + outils + validation ── */
  function installer(params, conteneur, opts) {
    /* Fond clair (papier de la séance) : encre sombre. */
    if (opts && opts.papier) conteneur.classList.add("mbq-sur-papier");
    injecterStyles();
    const cases = params.geste !== "segments";
    conteneur.innerHTML =
      '<div class="mbq-wrap">' +
        '<div class="mbq-tools">' +
          '<button type="button" class="mbq-tool" data-m="cases" aria-pressed="' + cases + '">Colorier</button>' +
          '<button type="button" class="mbq-tool" data-m="segments" aria-pressed="' + !cases + '">Tracer</button>' +
          '<span class="mbq-spacer"></span>' +
          '<button type="button" class="mbq-tool" data-a="annuler">Annuler</button>' +
          '<button type="button" class="mbq-tool" data-a="vider">Tout effacer</button>' +
        '</div>' +
        '<div class="mbq-board"><svg class="mbq-grid"></svg></div>' +
        '<div class="mbq-legend" hidden>' +
          '<span><i style="background:var(--accent2)"></i>Juste</span>' +
          '<span><i style="border:2px dashed var(--accent)"></i>Oublié</span>' +
          '<span><i style="background:var(--danger)"></i>En trop</span></div>' +
        '<div class="mbq-foot">' +
          '<button type="button" class="btn-primary" data-a="valider">Valider</button>' +
          '<button type="button" class="mbq-tool" data-a="rejouer">Recommencer</button>' +
          '<p class="mbq-verdict"></p>' +
        '</div>' +
        '<p class="mbq-hint">' + (cases
          ? "Un clic pose ou retire une couleur. La figure grise ne se modifie pas."
          : "Clic sur un nœud, puis sur un second : le segment se plante et le tracé continue. Échap pour lever le crayon.") +
        '</p>' +
      '</div>';

    const svg = conteneur.querySelector(".mbq-grid");
    const verdict = conteneur.querySelector(".mbq-verdict");
    const legend = conteneur.querySelector(".mbq-legend");
    let inst = monter(params, svg);

    conteneur.querySelectorAll("[data-m]").forEach(b => b.onclick = () => {
      conteneur.querySelectorAll("[data-m]").forEach(x =>
        x.setAttribute("aria-pressed", x === b));
      inst.setMode(b.dataset.m);
    });
    conteneur.querySelector('[data-a="annuler"]').onclick = () => inst.annuler();
    conteneur.querySelector('[data-a="vider"]').onclick = () => inst.vider();
    conteneur.querySelector('[data-a="rejouer"]').onclick = () => {
      inst = monter(params, svg);
      const m = conteneur.querySelector('[aria-pressed="true"][data-m]');
      if (m) inst.setMode(m.dataset.m);
      verdict.textContent = ""; verdict.className = "mbq-verdict"; legend.hidden = true;
    };
    conteneur.querySelector('[data-a="valider"]').onclick = () => {
      if (inst.estFige()) return;
      const r = verifier(inst.lire(), params.reponse);
      inst.corriger(params.reponse);
      legend.hidden = false;
      if (r.ok) { verdict.textContent = "Figure complétée, sans erreur."; verdict.className = "mbq-verdict mbq-bon"; }
      else {
        const b = [];
        if (r.justes) b.push(r.justes + " juste" + (r.justes > 1 ? "s" : ""));
        if (r.manques) b.push(r.manques + " oubli" + (r.manques > 1 ? "s" : ""));
        if (r.faux) b.push(r.faux + " en trop");
        verdict.textContent = b.join(" · ") + " — score " + Math.round(r.score * 100) + " %";
        verdict.className = "mbq-verdict " + (r.score >= .6 ? "mbq-moyen" : "mbq-mauvais");
      }
    };
    const esc = e => { if (e.key === "Escape") inst.leverCrayon(); };
    document.addEventListener("keydown", esc);
    return { instance: () => inst, detacher: () => document.removeEventListener("keydown", esc) };
  }

  window.MB_QUADRILLAGE = { monter, verifier, installer, apercu, installerApercu,
                            injecterStyles, cleC, cleS };
  if (typeof module !== "undefined" && module.exports)
    module.exports = { verifier, cleC, cleS };      /* pour les tests hors navigateur */
})();
