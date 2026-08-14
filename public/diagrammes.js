/* ═══════════════════════════════════════════════════════════
   POLYMATES — DIAGRAMMES
   Affiche et fait construire les trois représentations retenues :
   diagramme en bâtons, graphique (courbe) et diagramme circulaire.

   Deux usages, comme pour le quadrillage :
     mode « affichage »    — le diagramme est tracé, l'élève le LIT ;
     mode « construction » — le plateau est vide, l'élève le REMPLIT.

   En construction, l'élève CHOISIT lui-même la représentation au moyen de
   trois boutons. Ce choix fait partie de la réponse : certains énoncés
   imposent le type, d'autres laissent l'élève décider s'il s'agit d'une
   évolution — qui appelle un graphique — ou d'un bilan — qui appelle un
   diagramme. Changer de type remet le plateau à zéro, les trois n'ayant pas
   le même modèle de données.

   Gestes de construction :
     bâtons     → un clic dans une colonne fixe sa hauteur ;
                  recliquer au même niveau efface la barre
     courbe     → un clic pose le point de l'abscisse visée,
                  les points posés se relient d'eux-mêmes
     circulaire → un clic sur un secteur le fait passer à la catégorie
                  suivante, puis le libère

   Le disque est découpé en N secteurs ÉGAUX, N divisant 360 : chaque secteur
   vaut donc un nombre entier de degrés. Sans cela, aucune construction exacte
   ne serait possible à la souris.

   Contrat (window.MB_DIAGRAMME) :
     dessiner(params, svg)         → tracé, quel que soit le mode
     installer(params, conteneur)  → plateau complet avec outils et validation
     verifier(etat, reponse)       → { ok, score, justes, faux, attendus }
   `verifier` est pure : testable hors navigateur.
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const el = (n, a) => { const e = document.createElementNS(NS, n);
    for (const k in (a || {})) e.setAttribute(k, a[k]); return e; };
  const txt = (p, s, c) => { const t = el("text", p); t.setAttribute("class", c || "mbd-lab");
    t.textContent = s; return t; };

  const TYPES = ["batons", "courbe", "circulaire"];
  const NOM_TYPE = { batons: "Diagramme en bâtons", courbe: "Graphique", circulaire: "Diagramme circulaire" };
  /* palette des catégories du diagramme circulaire */
  const TEINTES = ["var(--accent)", "var(--accent2)", "#7a9bc8", "#c87a9b", "#c8a07a", "#9b8fb0"];

  /* ── correction : comparaison des séries ── */
  function verifier(etat, reponse) {
    /* Le type choisi fait partie de la reponse : representer une evolution
       par un diagramme circulaire est une erreur, meme avec les bons chiffres. */
    const bonType = !reponse || !reponse.type || (etat && etat.type) === reponse.type;
    if (!bonType) return { ok: false, bonType: false,
      attendus: (reponse.valeurs || []).length, justes: 0, faux: 0,
      manques: (reponse.valeurs || []).length, poses: 0, score: 0 };
    const a = (etat && etat.valeurs) || [], b = (reponse && reponse.valeurs) || [];
    let justes = 0, faux = 0, poses = 0;
    for (let i = 0; i < b.length; i++) {
      const v = a[i] === undefined || a[i] === null ? null : a[i];
      if (v !== null) poses++;
      if (v === b[i]) justes++;
      else if (v !== null) faux++;
    }
    const manques = b.length - justes - faux;
    return { ok: justes === b.length && faux === 0, bonType: true, attendus: b.length,
             justes, faux, manques, poses,
             score: b.length ? Math.max(0, (justes - faux) / b.length) : 0 };
  }

  /* ═══ TRACÉ ═══ */
  function dessiner(params, hote, etat) {
    const type = params.type || "batons";
    const cats = params.categories || [];
    const n = cats.length;
    const max = params.max || 10, pas = params.pas || 1;
    const vals = etat ? etat.valeurs : (params.valeurs || []);
    hote.innerHTML = "";
    hote.classList.add("mbd-svg");

    if (type === "circulaire") return dessinerCirculaire(params, hote, vals);

    /* repère commun aux bâtons, barres, histogrammes et courbes */
    const ML = 46, MR = 22, MT = 18, MB = 52;
    const LC = 46;                                   /* largeur d'une colonne */
    /* Sur un GRAPHIQUE, les points se posent sur les croisements du
       quadrillage, pas au milieu des colonnes : c'est la convention, et
       cela rend le pointage bien plus lisible. Les bâtons, eux, restent
       centrés dans leur colonne. */
    const surCroisement = type === "courbe";
    const W = ML + (surCroisement ? (n - 1) * LC : n * LC) + MR, H = 260;
    const y0 = H - MB, y1 = MT;
    hote.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const X = i => surCroisement ? ML + i * LC : ML + i * LC + LC / 2;
    const largeurUtile = surCroisement ? (n - 1) * LC : n * LC;
    const Y = v => y0 - (v / max) * (y0 - y1);
    const g = el("g"); hote.appendChild(g);

    /* graduations horizontales */
    for (let v = 0; v <= max; v += pas) {
      g.appendChild(el("line", { x1: ML - 5, y1: Y(v), x2: ML + largeurUtile, y2: Y(v),
        class: v === 0 ? "mbd-axe" : "mbd-grille" }));
      g.appendChild(txt({ x: ML - 9, y: Y(v) + 4, "text-anchor": "end" }, String(v)));
    }
    /* graduations intermediaires : elles guident un placement plus fin sans
       surcharger la lecture */
    if (surCroisement)
      for (let v = pas / 2; v < max; v += pas)
        g.appendChild(el("line", { x1: ML, y1: Y(v), x2: ML + largeurUtile, y2: Y(v),
          class: "mbd-sous-grille" }));
    g.appendChild(el("line", { x1: ML, y1: y1 - 6, x2: ML, y2: y0, class: "mbd-axe" }));
    /* verticales : les croisements du graphique, ou les separations de colonnes */
    for (let i = 0; i < (surCroisement ? n : n + 1); i++)
      g.appendChild(el("line", { x1: ML + i * LC, y1: y0, x2: ML + i * LC, y2: y1,
        class: surCroisement ? "mbd-grille" : "mbd-sep" }));
    /* intitulés des catégories */
    cats.forEach((c, i) => {
      const t = txt({ x: X(i), y: y0 + 17, "text-anchor": "middle" }, String(c));
      if (String(c).length > 7) t.setAttribute("transform", `rotate(-32 ${X(i)} ${y0 + 17})`);
      g.appendChild(t);
    });
    if (params.yLabel) g.appendChild(txt({ x: 4, y: y1 - 6 }, params.yLabel, "mbd-axe-lab"));
    if (params.xLabel) g.appendChild(txt({ x: W - MR, y: H - 6, "text-anchor": "end" }, params.xLabel, "mbd-axe-lab"));
    /* le repere est exporte : le plateau en a besoin pour situer les clics */

    /* séries */
    const dessineSerie = (l, cls) => {
      if (type === "courbe") {
        const pts = [];
        l.forEach((v, i) => { if (v !== null && v !== undefined) pts.push([X(i), Y(v)]); });
        if (pts.length > 1) g.appendChild(el("polyline", { class: "mbd-courbe " + cls,
          points: pts.map(p => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ") }));
        l.forEach((v, i) => { if (v === null || v === undefined) return;
          g.appendChild(el("circle", { cx: X(i), cy: Y(v), r: 4.5, class: "mbd-point " + cls })); });
        return;
      }
      const largeur = LC * 0.52;
      l.forEach((v, i) => {
        if (v === null || v === undefined || v === 0) return;
        const x = X(i) - largeur / 2;
        g.appendChild(el("rect", { x, y: Y(v), width: largeur, height: y0 - Y(v),
          class: "mbd-barre " + cls }));
      });
    };
    dessineSerie(vals, "");
    if (params._correction) dessineSerie(params._correction, "mbd-attendu");
    return { X, Y, y0, y1, ML, LC, n, max, pas, W, H, g, surCroisement };
  }

  /* ── diagramme circulaire ── */
  function dessinerCirculaire(params, hote, vals) {
    const N = params.secteurs || 12, R = 92, cx = 130, cy = 118;
    hote.setAttribute("viewBox", "0 0 300 250");
    const g = el("g"); hote.appendChild(g);
    const ang = i => -Math.PI / 2 + i * 2 * Math.PI / N;
    const P = a => [cx + R * Math.cos(a), cy + R * Math.sin(a)];

    for (let i = 0; i < N; i++) {
      const a0 = ang(i), a1 = ang(i + 1), p0 = P(a0), p1 = P(a1);
      const cat = vals && vals[i] !== undefined && vals[i] !== null ? vals[i] : 0;
      const sec = el("path", { class: "mbd-secteur" + (cat ? " mbd-rempli" : ""),
        d: `M ${cx} ${cy} L ${p0[0].toFixed(1)} ${p0[1].toFixed(1)} A ${R} ${R} 0 0 1 ${p1[0].toFixed(1)} ${p1[1].toFixed(1)} Z`,
        "data-i": i });
      /* style INLINE et non attribut : une regle CSS l'emporterait sur
         l'attribut de presentation, et le secteur ne se colorerait jamais. */
      if (cat) sec.setAttribute("style", "fill:" + TEINTES[(cat - 1) % TEINTES.length]);
      g.appendChild(sec);
    }
    g.appendChild(el("circle", { cx, cy, r: R, class: "mbd-cercle" }));
    /* légende des catégories */
    (params.categories || []).forEach((c, i) => {
      const y = 34 + i * 22;
      g.appendChild(el("rect", { x: 238, y: y - 9, width: 12, height: 12, rx: 2,
        style: "fill:" + TEINTES[i % TEINTES.length], class: "mbd-puce" }));
      g.appendChild(txt({ x: 256, y: y + 1 }, String(c)));
    });
    return { N, cx, cy, R, g };
  }

  /* ═══ PLATEAU INTERACTIF ═══ */
  function monter(params, hote, typeInitial) {
    let type = typeInitial || params.type || "batons";
    const n = (params.categories || []).length;
    const taille = t => t === "circulaire" ? (params.secteurs || 12) : n;
    let valeurs = new Array(taille(type)).fill(null);
    const histo = [];
    let fige = false, repere = null, categorie = 1;   /* catégorie active du circulaire */

    const vue = () => Object.assign({}, params, { type });
    const redessiner = () => { repere = dessiner(vue(), hote, { valeurs }); };
    redessiner();

    const versSvg = ev => { const p = hote.createSVGPoint();
      p.x = ev.clientX; p.y = ev.clientY;
      return p.matrixTransform(hote.getScreenCTM().inverse()); };

    hote.addEventListener("pointerdown", ev => {
      if (fige) return;
      const p = versSvg(ev);
      if (type === "circulaire") {
        const a = Math.atan2(p.y - repere.cy, p.x - repere.cx);
        const d = Math.hypot(p.x - repere.cx, p.y - repere.cy);
        if (d > repere.R) return;
        const t = (a + Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI);
        const i = Math.floor(t / (2 * Math.PI / repere.N));
        histo.push([i, valeurs[i]]);
        /* On applique la categorie SELECTIONNEE dans la legende. Un cycle
           aveugle sur les categories etait indechiffrable : rien n'indiquait
           laquelle allait etre posee. Recliquer sur la meme la retire. */
        valeurs[i] = valeurs[i] === categorie ? null : categorie;
        redessiner();
        return;
      }
      /* graphique : on vise le croisement le plus proche ; diagramme : la
         colonne dans laquelle on a cliqué */
      const i = repere.surCroisement
        ? Math.round((p.x - repere.ML) / repere.LC)
        : Math.floor((p.x - repere.ML) / repere.LC);
      if (i < 0 || i >= repere.n) return;
      /* Sur un graphique on autorise le demi-pas : le placement est plus
         libre, et les valeurs attendues restent atteignables puisqu'elles
         tombent sur les graduations principales. */
      const grain = repere.surCroisement ? repere.pas / 2 : repere.pas;
      let v = (repere.y0 - p.y) / (repere.y0 - repere.y1) * repere.max;
      v = Math.round(v / grain) * grain;
      v = Math.max(0, Math.min(repere.max, v));
      v = Math.round(v * 1000) / 1000;
      histo.push([i, valeurs[i]]);
      valeurs[i] = valeurs[i] === v ? null : v;        /* recliquer efface */
      redessiner();
    });

    return {
      params,
      type: () => type,
      categorie: () => categorie,
      setCategorie(c) { categorie = c; },
      setType(t) {
        if (fige || t === type) return;
        type = t;
        valeurs = new Array(taille(type)).fill(null);   /* modeles de donnees differents */
        histo.length = 0;
        redessiner();
      },
      lire: () => ({ type, valeurs: valeurs.slice() }),
      estFige: () => fige,
      annuler() { const a = histo.pop(); if (!a) return; valeurs[a[0]] = a[1]; redessiner(); },
      vider() { for (let i = 0; i < valeurs.length; i++) valeurs[i] = null; histo.length = 0; redessiner(); },
      corriger(reponse) {
        fige = true;
        if (reponse.type && reponse.type !== type) {
          /* mauvaise representation : on montre celle qui convenait */
          dessiner(Object.assign({}, params, { type: reponse.type }), hote, { valeurs: reponse.valeurs });
          return;
        }
        if (type === "circulaire") { dessiner(vue(), hote, { valeurs: reponse.valeurs }); return; }
        dessiner(Object.assign({}, vue(), { _correction: reponse.valeurs }), hote, { valeurs });
      }
    };
  }

  /* ═══ STYLES ═══ */
  function injecterStyles() {
    if (document.getElementById("mbd-styles")) return;
    const s = document.createElement("style");
    s.id = "mbd-styles";
    s.textContent = `
.mbd-cadre{display:flex;justify-content:center;background:var(--surface3);
  border:1px solid var(--border);border-radius:10px;padding:.9rem}
.mbd-svg{width:100%;max-width:460px;height:auto;display:block;touch-action:none}
.mbd-grille{stroke:rgba(255,255,255,.10);stroke-width:1}
.mbd-sep{stroke:rgba(255,255,255,.05);stroke-width:1}
.mbd-sous-grille{stroke:rgba(255,255,255,.045);stroke-width:1}
.mbd-axe{stroke:var(--muted);stroke-width:1.6}
.mbd-lab{fill:var(--muted);font-family:var(--mono);font-size:10px}
.mbd-axe-lab{fill:var(--accent-dim);font-family:var(--mono);font-size:10px;letter-spacing:.06em}
.mbd-barre{fill:var(--accent);fill-opacity:.82;stroke:var(--accent);stroke-width:1}
.mbd-courbe{fill:none;stroke:var(--accent);stroke-width:2.4;stroke-linejoin:round}
.mbd-point{fill:var(--accent)}
.mbd-attendu{fill:none;stroke:var(--accent2);stroke-width:2;stroke-dasharray:5 4}
circle.mbd-attendu{fill:var(--accent2);stroke:none}
/* ── Sur le papier de la séance : encre sombre ── */
.mbd-sur-papier{color:#17120c}
.mbd-sur-papier .mbd-cadre{background:rgba(31,26,19,.03);border-color:rgba(31,26,19,.20)}
.mbd-sur-papier .mbd-grille{stroke:rgba(31,26,19,.16)}
.mbd-sur-papier .mbd-sep{stroke:rgba(31,26,19,.10)}
.mbd-sur-papier .mbd-sous-grille{stroke:rgba(31,26,19,.08)}
.mbd-sur-papier .mbd-axe{stroke:rgba(31,26,19,.60)}
.mbd-sur-papier .mbd-lab,.mbd-sur-papier .mbd-axe-lab{fill:#5b4f36}
.mbd-sur-papier .mbd-barre{fill:#9a833f;fill-opacity:.75;stroke:#7a663012}
.mbd-sur-papier .mbd-courbe{stroke:#17120c}
.mbd-sur-papier .mbd-point{fill:#17120c}
.mbd-sur-papier .mbd-attendu{stroke:#1f7a4d}
.mbd-sur-papier circle.mbd-attendu{fill:#1f7a4d}
.mbd-secteur{fill:var(--surface2);stroke:var(--border2);stroke-width:1;cursor:pointer}
.mbd-secteur:hover{stroke:var(--accent)}
.mbd-rempli{fill-opacity:.85}
.mbd-cercle{fill:none;stroke:var(--muted);stroke-width:1.6}
.mbd-puce{stroke:none}
.mbd-tools{display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;margin-bottom:.7rem}
.mbd-tool{font-family:var(--sans);font-size:.8rem;color:var(--muted);background:transparent;
  border:1px solid var(--border2);border-radius:8px;padding:.4rem .75rem;cursor:pointer;transition:.16s}
.mbd-tool:hover{color:var(--text);border-color:var(--accent-dim)}
.mbd-tool:focus-visible{outline:2px solid var(--accent2);outline-offset:2px}
.mbd-type[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:#0b0b09;font-weight:500}
.mbd-cats{display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.7rem}
.mbd-cat{display:flex;align-items:center;gap:.4rem}
.mbd-cat[aria-pressed="true"]{border-color:var(--accent);color:var(--text);background:var(--surface2)}
.mbd-pastille{display:inline-block;width:11px;height:11px;border-radius:3px}
.mbd-spacer{flex:1}
.mbd-foot{display:flex;gap:.6rem;align-items:center;flex-wrap:wrap;margin-top:.8rem}
.mbd-verdict{font-size:.85rem;line-height:1.5;flex:1;min-width:180px}
.mbd-bon{color:var(--accent2)}.mbd-moyen{color:var(--accent)}.mbd-mauvais{color:var(--danger)}
.mbd-hint{font-family:var(--mono);font-size:.7rem;color:var(--muted);margin-top:.6rem;line-height:1.6}`;
    document.head.appendChild(s);
  }

  /* affichage seul, pour les exercices de lecture */
  function installerApercu(params, conteneur) {
    injecterStyles();
    conteneur.innerHTML = '<div class="mbd-cadre"><svg class="mbd-svg"></svg></div>';
    dessiner(params, conteneur.querySelector(".mbd-svg"));
  }

  /* plateau complet, pour les exercices de construction */
  function installer(params, conteneur) {
    injecterStyles();
    const impose = params.impose ? params.impose : null;   /* type imposé par l'énoncé ? */
    const depart = impose || "batons";
    const geste = t => t === "circulaire"
      ? "Choisis une catégorie ci-dessus, puis clique sur les secteurs à lui attribuer. Recliquer sur un secteur de la même catégorie le libère."
      : t === "courbe"
      ? "Clique à la hauteur voulue dans chaque colonne : les points se relient d'eux-mêmes."
      : "Clique à la hauteur voulue dans chaque colonne. Recliquer au même niveau efface la barre.";

    conteneur.innerHTML =
      '<div class="mbd-tools">' +
        TYPES.map(t => `<button type="button" class="mbd-tool mbd-type" data-t="${t}" aria-pressed="${t === depart}">${NOM_TYPE[t]}</button>`).join("") +
        '<span class="mbd-spacer"></span>' +
        '<button type="button" class="mbd-tool" data-a="annuler">Annuler</button>' +
        '<button type="button" class="mbd-tool" data-a="vider">Tout effacer</button>' +
      '</div>' +
      '<div class="mbd-cats"></div>' +
      '<div class="mbd-cadre"><svg class="mbd-svg"></svg></div>' +
      '<div class="mbd-foot">' +
        '<button type="button" class="btn-primary" data-a="valider">Valider</button>' +
        '<button type="button" class="mbd-tool" data-a="rejouer">Recommencer</button>' +
        '<p class="mbd-verdict"></p>' +
      '</div>' +
      '<p class="mbd-hint"></p>';

    const svg = conteneur.querySelector(".mbd-svg");
    const verdict = conteneur.querySelector(".mbd-verdict");
    const hint = conteneur.querySelector(".mbd-hint");
    const barreCat = conteneur.querySelector(".mbd-cats");
    let inst = monter(params, svg, depart);

    /* Le circulaire demande de choisir la categorie AVANT de cliquer :
       la legende devient une barre de boutons, chacun de sa couleur. */
    const TEINTES_UI = ["var(--accent)", "var(--accent2)", "#7a9bc8", "#c87a9b", "#c8a07a", "#9b8fb0"];
    function construireCats() {
      const cats = params.categories || [];
      barreCat.innerHTML = cats.map((c, i) =>
        `<button type="button" class="mbd-tool mbd-cat" data-c="${i + 1}" aria-pressed="${i === 0}">` +
        `<span class="mbd-pastille" style="background:${TEINTES_UI[i % TEINTES_UI.length]}"></span>${c}</button>`
      ).join("");
      barreCat.querySelectorAll(".mbd-cat").forEach(b => b.onclick = () => {
        if (inst.estFige()) return;
        inst.setCategorie(+b.dataset.c);
        barreCat.querySelectorAll(".mbd-cat").forEach(x =>
          x.setAttribute("aria-pressed", x === b));
      });
    }
    const majOutils = () => {
      conteneur.querySelectorAll(".mbd-type").forEach(b =>
        b.setAttribute("aria-pressed", b.dataset.t === inst.type()));
      hint.textContent = geste(inst.type());
      const circ = inst.type() === "circulaire";
      barreCat.style.display = circ ? "" : "none";
      if (circ) { construireCats(); inst.setCategorie(1); }
    };
    majOutils();

    conteneur.querySelectorAll(".mbd-type").forEach(b => b.onclick = () => {
      if (inst.estFige()) return;
      inst.setType(b.dataset.t);
      majOutils();
      verdict.textContent = ""; verdict.className = "mbd-verdict";
    });
    conteneur.querySelector('[data-a="annuler"]').onclick = () => inst.annuler();
    conteneur.querySelector('[data-a="vider"]').onclick = () => inst.vider();
    conteneur.querySelector('[data-a="rejouer"]').onclick = () => {
      inst = monter(params, svg, depart); majOutils();
      verdict.textContent = ""; verdict.className = "mbd-verdict"; };
    conteneur.querySelector('[data-a="valider"]').onclick = () => {
      if (inst.estFige()) return;
      const r = verifier(inst.lire(), params.reponse);
      inst.corriger(params.reponse);
      if (!r.bonType) {
        verdict.textContent = "Ce n'est pas la représentation qui convient ici — voici celle qu'il fallait choisir.";
        verdict.className = "mbd-verdict mbd-mauvais";
        return;
      }
      if (r.ok) { verdict.textContent = "Représentation exacte."; verdict.className = "mbd-verdict mbd-bon"; return; }
      const b = [];
      if (r.justes) b.push(r.justes + " juste" + (r.justes > 1 ? "s" : ""));
      if (r.manques) b.push(r.manques + " manquant" + (r.manques > 1 ? "s" : ""));
      if (r.faux) b.push(r.faux + " incorrect" + (r.faux > 1 ? "s" : ""));
      verdict.textContent = b.join(" · ") + " — score " + Math.round(r.score * 100) + " %";
      verdict.className = "mbd-verdict " + (r.score >= .6 ? "mbd-moyen" : "mbd-mauvais");
    };
    return { instance: () => inst };
  }

  window.MB_DIAGRAMME = { dessiner, monter, installer, installerApercu, verifier,
                          injecterStyles, TYPES, NOM_TYPE };
  if (typeof module !== "undefined" && module.exports) module.exports = { verifier, TYPES, NOM_TYPE };
})();
