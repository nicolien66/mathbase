/* ═══════════════════════════════════════════════════════════
   POLYMATES — FIGURES GÉOMÉTRIQUES
   Widget de reconnaissance : une figure, une question, des choix.

   La figure est décrite par des ÉLÉMENTS, jamais par du SVG brut : le
   générateur donne des points et des traits, le widget se charge du dessin
   et du CODAGE GÉOMÉTRIQUE conventionnel —
     · angle droit  → le petit carré à l'angle
     · longueurs égales → un, deux ou trois traits sur les segments
     · parallélisme → chevrons simples, doubles ou triples
     · segment [AB] borné par ses extrémités, demi-droite fléchée d'un côté,
       droite prolongée et fléchée des deux côtés.

   Contrat exposé (window.MB_FIGURE), calqué sur les autres plateaux :
     verifier(etat, reponse)   → { ok, score }        ← PURE, testable
     monter(params, hote)      → instance {lire, corriger, estFige}
     installer(params, hote, opts)
     apercu(params) / installerApercu(params, hote, opts)
     dessiner(params)          → le SVG seul (utilisé par l'aperçu)

   params = {
     widget: "figure",
     figure: { largeur, hauteur, elements: [...] },
     question: "De quel type d'objet s'agit-il ?",
     options: ["Segment", "Demi-droite", "Droite"],
     multiple: false,                     // cases à cocher si true
     reponse: { choix: "Demi-droite" }    // ou { choix: ["…", "…"] }

   Une figure peut porter PLUSIEURS questions — on lit alors la même image
   sous deux angles, par exemple « que peut-on conclure ? » puis « comment
   s'appellent les angles codés ? » :
     questions: [ { question, options, multiple?, reponse:{choix} }, … ]
   Chaque question est notée séparément ; la note globale en est la moyenne.
   }

   Éléments possibles :
     {t:"point", x, y, nom, pos}                       pos: "haut"|"bas"|"gauche"|"droite"
     {t:"segment", a:[x,y], b:[x,y], marques, style}   marques: 0..3 traits
     {t:"demidroite", a:[x,y], b:[x,y]}                origine a, part vers b
     {t:"droite", a:[x,y], b:[x,y]}                    prolongée des deux côtés
     {t:"cercle", c:[x,y], r}
     {t:"arc", c:[x,y], r, de, a}                      angles en degrés
     {t:"polygone", pts:[[x,y],…], marques}
     {t:"angledroit", s:[x,y], a:[x,y], b:[x,y]}       sommet s, côtés vers a et b
     {t:"chevrons", a:[x,y], b:[x,y], n}               codage du parallélisme
     {t:"texte", x, y, s}
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";

  /* ── petite géométrie ── */
  const sous = (u, v) => [u[0] - v[0], u[1] - v[1]];
  const norme = u => Math.hypot(u[0], u[1]) || 1;
  const unit = u => { const n = norme(u); return [u[0] / n, u[1] / n]; };
  const perp = u => [-u[1], u[0]];
  const pt = (a, u, k) => [a[0] + u[0] * k, a[1] + u[1] * k];

  /* Prolonge un trait jusqu'aux bords du cadre : une droite doit sortir. */
  function bord(a, u, L, H) {
    let k = Math.max(L, H) * 2;
    for (let i = 0; i < 200; i++) {
      const p = pt(a, u, k);
      if (p[0] >= 6 && p[0] <= L - 6 && p[1] >= 6 && p[1] <= H - 6) break;
      k -= Math.max(L, H) / 100;
    }
    return pt(a, u, k);
  }

  /* ── dessin ── */
  function dessiner(params) {
    const f = params.figure || {};
    const L = f.largeur || 420, H = f.hauteur || 260;
    const el = [];
    const esc = t => String(t).replace(/[&<>"]/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

    const trait = (a, b, cls) =>
      '<line x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] +
      '" class="' + (cls || "mbf-trait") + '"/>';

    /* Marques d'égalité : n petits traits perpendiculaires au milieu. */
    function marques(a, b, n) {
      if (!n) return "";
      const u = unit(sous(b, a)), p = perp(u);
      const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      let s = "";
      for (let i = 0; i < n; i++) {
        const d = (i - (n - 1) / 2) * 5;
        const c = pt(m, u, d);
        s += trait(pt(c, p, -5), pt(c, p, 5), "mbf-marque");
      }
      return s;
    }
    /* Chevrons du parallélisme : n chevrons « > » au milieu du trait. */
    function chevrons(a, b, n) {
      const u = unit(sous(b, a)), p = perp(u);
      const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      let s = "";
      for (let i = 0; i < (n || 1); i++) {
        const c = pt(m, u, (i - ((n || 1) - 1) / 2) * 7);
        const q1 = pt(pt(c, u, -4), p, -5), q2 = pt(pt(c, u, -4), p, 5);
        s += '<polyline points="' + q1[0] + "," + q1[1] + " " + c[0] + "," + c[1] +
             " " + q2[0] + "," + q2[1] + '" class="mbf-chevron"/>';
      }
      return s;
    }

    (f.elements || []).forEach(e => {
      switch (e.t) {
        case "segment": {
          el.push(trait(e.a, e.b, e.style === "pointille" ? "mbf-pointille" : "mbf-trait"));
          el.push(marques(e.a, e.b, e.marques));
          break;
        }
        case "demidroite": {
          const u = unit(sous(e.b, e.a));
          const fin = bord(e.a, u, L, H);
          el.push(trait(e.a, fin, "mbf-trait"));
          /* La flèche marque le côté qui se prolonge indéfiniment. */
          const t1 = pt(pt(fin, u, -9), perp(u), 4), t2 = pt(pt(fin, u, -9), perp(u), -4);
          el.push('<polygon points="' + fin[0] + "," + fin[1] + " " + t1[0] + "," + t1[1] +
                  " " + t2[0] + "," + t2[1] + '" class="mbf-fleche"/>');
          break;
        }
        case "droite": {
          const u = unit(sous(e.b, e.a));
          const p1 = bord(e.a, [-u[0], -u[1]], L, H), p2 = bord(e.a, u, L, H);
          el.push(trait(p1, p2, "mbf-trait"));
          [[p2, u], [p1, [-u[0], -u[1]]]].forEach(([q, v]) => {
            const t1 = pt(pt(q, v, -9), perp(v), 4), t2 = pt(pt(q, v, -9), perp(v), -4);
            el.push('<polygon points="' + q[0] + "," + q[1] + " " + t1[0] + "," + t1[1] +
                    " " + t2[0] + "," + t2[1] + '" class="mbf-fleche"/>');
          });
          break;
        }
        case "cercle":
          el.push('<circle cx="' + e.c[0] + '" cy="' + e.c[1] + '" r="' + e.r +
                  '" class="mbf-cercle"/>');
          break;
        case "arc": {
          const A = [e.c[0] + e.r * Math.cos(e.de * Math.PI / 180),
                     e.c[1] - e.r * Math.sin(e.de * Math.PI / 180)];
          const B = [e.c[0] + e.r * Math.cos(e.a * Math.PI / 180),
                     e.c[1] - e.r * Math.sin(e.a * Math.PI / 180)];
          const grand = Math.abs(e.a - e.de) > 180 ? 1 : 0;
          el.push('<path d="M' + A[0] + "," + A[1] + " A" + e.r + "," + e.r +
                  " 0 " + grand + " 0 " + B[0] + "," + B[1] + '" class="mbf-arc"/>');
          break;
        }
        case "polygone": {
          el.push('<polygon points="' + e.pts.map(p => p[0] + "," + p[1]).join(" ") +
                  '" class="mbf-polygone"/>');
          (e.marques || []).forEach((n, i) => {
            if (!n) return;
            const a = e.pts[i], b = e.pts[(i + 1) % e.pts.length];
            el.push(marques(a, b, n));
          });
          break;
        }
        case "angledroit": {
          const u = unit(sous(e.a, e.s)), v = unit(sous(e.b, e.s)), c = 12;
          const p1 = pt(e.s, u, c), p3 = pt(e.s, v, c);
          const p2 = [p1[0] + v[0] * c, p1[1] + v[1] * c];
          el.push('<polyline points="' + p1[0] + "," + p1[1] + " " + p2[0] + "," + p2[1] +
                  " " + p3[0] + "," + p3[1] + '" class="mbf-angledroit"/>');
          break;
        }
        case "chevrons":
          el.push(chevrons(e.a, e.b, e.n));
          break;
        case "point": {
          el.push('<circle cx="' + e.x + '" cy="' + e.y + '" r="3" class="mbf-point"/>');
          if (e.nom) {
            const dx = e.pos === "gauche" ? -12 : e.pos === "droite" ? 12 : 0;
            const dy = e.pos === "bas" ? 17 : e.pos === "haut" ? -9 : -9;
            el.push('<text x="' + (e.x + dx) + '" y="' + (e.y + dy) +
                    '" text-anchor="middle" class="mbf-nom">' + esc(e.nom) + "</text>");
          }
          break;
        }
        case "texte":
          el.push('<text x="' + e.x + '" y="' + e.y + '" text-anchor="middle" class="mbf-texte">' +
                  esc(e.s) + "</text>");
          break;
      }
    });

    return '<svg class="mbf-svg" viewBox="0 0 ' + L + " " + H + '" role="img" aria-label="' +
           esc(params.description || "figure géométrique") + '">' + el.join("") + "</svg>";
  }

  /* Ramène les deux écritures possibles (une question, ou plusieurs) à une
     seule forme interne : un tableau de questions. */
  function questionsDe(params) {
    if (Array.isArray(params.questions) && params.questions.length) return params.questions;
    return [{ question: params.question, options: params.options || [],
              multiple: !!params.multiple, reponse: params.reponse || {} }];
  }

  /* ── correction (pure) ── */
  const normal = t => String(t == null ? "" : t).trim().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  /* Correction d'ensemble : chaque question compte pour une part égale. */
  function verifierTout(etat, params) {
    const qs = questionsDe(params);
    const rep = (etat && Array.isArray(etat.reponses)) ? etat.reponses : [etat];
    const parts = qs.map((q, i) => verifier(rep[i] || {}, q.reponse));
    const ok = parts.every(p => p.ok);
    const score = parts.reduce((s, p) => s + p.score, 0) / (parts.length || 1);
    return { ok, score, parts,
             attendus: parts.reduce((s, p) => s + p.attendus, 0),
             justes:   parts.reduce((s, p) => s + p.justes, 0),
             faux:     parts.reduce((s, p) => s + p.faux, 0),
             oublis:   parts.reduce((s, p) => s + p.oublis, 0) };
  }

  function verifier(etat, reponse) {
    const att = (reponse && reponse.choix);
    const attendus = Array.isArray(att) ? att : (att == null ? [] : [att]);
    const donnes = Array.isArray(etat && etat.choix) ? etat.choix
                 : ((etat && etat.choix) == null ? [] : [etat.choix]);
    const A = attendus.map(normal), D = donnes.map(normal);
    const justes = D.filter(x => A.includes(x)).length;
    const faux   = D.filter(x => !A.includes(x)).length;
    const oublis = A.filter(x => !D.includes(x)).length;
    const ok = faux === 0 && oublis === 0 && A.length > 0;
    return { ok, attendus: A.length, justes, faux, oublis,
             score: A.length ? Math.max(0, (justes - faux) / A.length) : 0 };
  }

  /* ── plateau ── */
  function monter(params, hote) {
    const qs = questionsDe(params);
    const esc = t => String(t).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

    hote.innerHTML =
      '<div class="mbf-plateau">' +
        '<div class="mbf-cadre">' + dessiner(params) + "</div>" +
        qs.map((q, i) =>
          '<div class="mbf-bloc" data-q="' + i + '">' +
            (q.question ? '<p class="mbf-question">' +
              (qs.length > 1 ? '<span class="mbf-num">' + (i + 1) + ".</span> " : "") +
              esc(q.question) +
              (q.multiple ? ' <span class="mbf-hint">(plusieurs réponses possibles)</span>' : "") +
              "</p>" : "") +
            '<div class="mbf-options">' +
              (q.options || []).map(o =>
                '<button type="button" class="mbf-opt" data-o="' +
                String(o).replace(/"/g, "&quot;") + '">' + esc(o) + "</button>").join("") +
            "</div></div>").join("") +
      "</div>";

    const choisis = qs.map(() => []);
    let fige = false;

    hote.querySelectorAll(".mbf-bloc").forEach((bloc, i) => {
      const multiple = !!qs[i].multiple;
      bloc.querySelectorAll(".mbf-opt").forEach(b => {
        b.onclick = () => {
          if (fige) return;
          const o = b.dataset.o;
          if (multiple) {
            const k = choisis[i].indexOf(o);
            if (k >= 0) choisis[i].splice(k, 1); else choisis[i].push(o);
          } else choisis[i] = [o];
          bloc.querySelectorAll(".mbf-opt").forEach(x =>
            x.classList.toggle("on", choisis[i].indexOf(x.dataset.o) >= 0));
        };
      });
    });

    return {
      lire() {
        const reponses = qs.map((q, i) => ({
          choix: q.multiple ? choisis[i].slice() : (choisis[i][0] || null) }));
        /* On expose aussi `choix` pour rester compatible avec une figure
           ne portant qu'une seule question. */
        return { reponses, choix: reponses[0].choix };
      },
      estFige() { return fige; },
      corriger() {
        fige = true;
        hote.querySelectorAll(".mbf-bloc").forEach((bloc, i) => {
          const att = qs[i].reponse && qs[i].reponse.choix;
          const attendus = (Array.isArray(att) ? att : [att]).map(normal);
          bloc.querySelectorAll(".mbf-opt").forEach(b => {
            b.disabled = true;
            const est = attendus.includes(normal(b.dataset.o));
            const pris = choisis[i].indexOf(b.dataset.o) >= 0;
            if (est) b.classList.add("mbf-bonne");
            if (pris && !est) b.classList.add("mbf-mauvaise");
          });
        });
        return verifierTout(this.lire(), params);
      },
    };
  }

  /* ── aperçu figé ── */
  function apercu(params) {
    return '<div class="mbf-plateau"><div class="mbf-cadre">' + dessiner(params) + "</div></div>";
  }
  function installerApercu(params, hote, opts) {
    injecterStyles();
    hote.innerHTML = '<div class="' + (opts && opts.papier ? "mbf-sur-papier" : "") + '">' +
      apercu(params) + "</div>";
  }

  /* ── montage clé en main ── */
  function installer(params, hote, opts) {
    injecterStyles();
    const papier = !!(opts && opts.papier);
    hote.innerHTML = '<div class="mbf-wrap' + (papier ? " mbf-sur-papier" : "") + '">' +
      '<div class="mbf-board"></div>' +
      '<div class="mbf-foot">' +
        '<button type="button" class="btn-primary" data-a="valider">Valider</button>' +
        '<button type="button" class="mbf-tool" data-a="rejouer">Recommencer</button>' +
        '<p class="mbf-verdict"></p></div></div>';
    const board = hote.querySelector(".mbf-board");
    const verdict = hote.querySelector(".mbf-verdict");
    let inst = monter(params, board);

    hote.querySelector('[data-a="rejouer"]').onclick = () => {
      inst = monter(params, board);
      verdict.textContent = ""; verdict.className = "mbf-verdict";
    };
    hote.querySelector('[data-a="valider"]').onclick = () => {
      if (inst.estFige()) return;
      const r = inst.corriger();
      verdict.textContent = r.ok ? (questionsDe(params).length > 1 ? "Tout est juste." : "Bonne réponse.")
        : (r.oublis ? r.oublis + " oubli" + (r.oublis > 1 ? "s" : "") + " · " : "") +
          (r.faux ? r.faux + " erreur" + (r.faux > 1 ? "s" : "") + " · " : "") +
          "score " + Math.round(r.score * 100) + " %";
      verdict.className = "mbf-verdict " + (r.ok ? "mbf-bon" : r.score >= .5 ? "mbf-moyen" : "mbf-mauvais");
    };
    return { instance: () => inst, detacher: () => {} };
  }

  /* ── styles ── */
  let poses = false;
  function injecterStyles() {
    if (poses || typeof document === "undefined") return;
    poses = true;
    const s = document.createElement("style");
    s.textContent = `
      .mbf-wrap, .mbf-plateau { color: var(--text, #f0ece0); }
      .mbf-cadre { background: rgba(255,255,255,.02); border: 1px solid var(--border, rgba(255,255,255,.1));
        border-radius: 10px; padding: .5rem; margin-bottom: .8rem; }
      .mbf-svg { display: block; width: 100%; max-width: 460px; height: auto; margin: 0 auto; }
      .mbf-trait { stroke: currentColor; stroke-width: 1.8; fill: none; stroke-linecap: round; }
      .mbf-pointille { stroke: currentColor; stroke-width: 1.4; fill: none; stroke-dasharray: 5 4; }
      .mbf-marque { stroke: var(--accent, #c8b97a); stroke-width: 1.8; }
      .mbf-chevron { stroke: var(--accent, #c8b97a); stroke-width: 1.8; fill: none;
        stroke-linecap: round; stroke-linejoin: round; }
      .mbf-fleche { fill: currentColor; }
      .mbf-cercle, .mbf-arc { stroke: currentColor; stroke-width: 1.8; fill: none; }
      .mbf-polygone { stroke: currentColor; stroke-width: 1.8; fill: rgba(200,185,122,.07); }
      .mbf-angledroit { stroke: var(--accent, #c8b97a); stroke-width: 1.6; fill: none; }
      .mbf-point { fill: currentColor; }
      .mbf-nom { font-family: Georgia, serif; font-style: italic; font-size: 15px; fill: currentColor; }
      .mbf-texte { font-family: 'DM Sans', sans-serif; font-size: 13px;
        fill: var(--muted, rgba(240,236,224,.6)); }
      .mbf-bloc + .mbf-bloc { margin-top: .9rem; padding-top: .8rem;
        border-top: 1px solid var(--border, rgba(255,255,255,.1)); }
      .mbf-num { color: var(--accent, #c8b97a); font-weight: 500; }
      .mbf-question { font-size: .95rem; margin: 0 0 .6rem; }
      .mbf-hint { font-size: .8rem; color: var(--muted, rgba(240,236,224,.55)); }
      .mbf-options { display: flex; flex-wrap: wrap; gap: .5rem; margin-bottom: .6rem; }
      .mbf-opt { background: none; border: 1px solid var(--border2, rgba(255,255,255,.16));
        color: var(--muted, rgba(240,236,224,.6)); font: inherit; font-size: .88rem;
        padding: .45rem 1rem; border-radius: 999px; cursor: pointer; transition: .2s; }
      .mbf-opt:hover:not(:disabled) { color: var(--text, #f0ece0); border-color: var(--accent, #c8b97a); }
      .mbf-opt.on { background: var(--accent, #c8b97a); color: #0b0b09; border-color: transparent; }
      .mbf-opt.mbf-bonne { border-color: var(--accent2, #82d2a0); color: var(--accent2, #82d2a0); }
      .mbf-opt.mbf-mauvaise { border-color: var(--danger, #e6826e); color: var(--danger, #e6826e);
        text-decoration: line-through; }
      .mbf-foot { display: flex; align-items: center; gap: .6rem; flex-wrap: wrap; }
      .mbf-tool { background: none; border: 1px solid var(--border, rgba(255,255,255,.13));
        color: var(--muted, rgba(240,236,224,.55)); font: inherit; font-size: .85rem;
        padding: .45rem .8rem; border-radius: 6px; cursor: pointer; }
      .mbf-verdict { font-size: .88rem; margin: 0; }
      .mbf-bon { color: var(--accent2, #82d2a0); }
      .mbf-moyen { color: var(--accent, #c8b97a); }
      .mbf-mauvais { color: var(--danger, #e6826e); }

      /* ── Sur le papier de la séance : encre sombre ── */
      .mbf-sur-papier { color: #17120c; }
      .mbf-sur-papier .mbf-cadre { background: rgba(31,26,19,.03); border-color: rgba(31,26,19,.20); }
      .mbf-sur-papier .mbf-marque, .mbf-sur-papier .mbf-chevron,
      .mbf-sur-papier .mbf-angledroit { stroke: #9a6b1f; }
      .mbf-sur-papier .mbf-polygone { fill: rgba(154,131,63,.10); }
      .mbf-sur-papier .mbf-texte { fill: #6b5d40; }
      .mbf-sur-papier .mbf-bloc + .mbf-bloc { border-top-color: rgba(31,26,19,.18); }
      .mbf-sur-papier .mbf-num { color: #9a833f; }
      .mbf-sur-papier .mbf-opt { color: #5b4f36; border-color: rgba(31,26,19,.28); }
      .mbf-sur-papier .mbf-opt:hover:not(:disabled) { color: #17120c; border-color: #9a833f; }
      .mbf-sur-papier .mbf-opt.on { background: #9a833f; color: #f7f2e4; border-color: transparent; }
      .mbf-sur-papier .mbf-opt.mbf-bonne { border-color: #1f7a4d; color: #1f7a4d; }
      .mbf-sur-papier .mbf-opt.mbf-mauvaise { border-color: #b03a26; color: #b03a26; }
      .mbf-sur-papier .mbf-tool { color: #5b4f36; border-color: rgba(31,26,19,.28); }
      .mbf-sur-papier .mbf-bon { color: #1f7a4d; }
      .mbf-sur-papier .mbf-moyen { color: #9a833f; }
      .mbf-sur-papier .mbf-mauvais { color: #b03a26; }
    `;
    document.head.appendChild(s);
  }

  if (typeof window !== "undefined")
    window.MB_FIGURE = { dessiner, verifier, verifierTout, questionsDe, monter, installer, apercu, installerApercu, injecterStyles };
  if (typeof module !== "undefined" && module.exports)
    module.exports = { verifier, verifierTout, questionsDe, dessiner };
})();
