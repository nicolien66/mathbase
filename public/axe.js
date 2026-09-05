/* ═══════════════════════════════════════════════════════════
   POLYMATES — AXE GRADUÉ INTERACTIF
   Widget de placement de points sur une droite graduée.

   L'élève clique sur l'axe pour poser un point ; il est aimanté à la
   graduation la plus proche. Chaque point posé reçoit son nom dans
   l'ordre demandé par l'énoncé (A, puis B, puis C…).

   Contrat exposé (window.MB_AXE), calqué sur MB_QUADRILLAGE :
     monter(params, svg)      → instance
     instance.lire()          → { points: [{ nom, x }] }
     instance.corriger(rep)   → superpose la correction, fige le plateau
     instance.annuler() / vider()
     verifier(etat, reponse)  → { ok, score, attendus, justes, manques, faux }
     installer(params, hote)  → plateau complet (outils + validation)
     apercu(params) / installerApercu(params, hote) → figure figée

   params = {
     widget: "axe",
     min: -10, max: 10,        bornes de l'axe (entiers)
     pas: 1,                   écart entre deux graduations
     etiquettes: 1,            une étiquette toutes les N graduations
     reperes: [-10, 0, 10],    OU la liste exacte des valeurs étiquetées
                               (prioritaire sur `etiquettes` ; les traits de
                               graduation restent tous tracés, seuls les
                               nombres écrits se raréfient)
     fixes: [{nom:"O", x:0}],  points déjà tracés, non modifiables
     placer: ["A", "B"],       noms à poser, dans l'ordre
     reponse: { points: [{nom:"A", x:-3}, {nom:"B", x:4}] }
   }

   `verifier` est PURE : ni DOM ni hasard. Elle est donc testable hors
   navigateur, ce qui permet de valider les générateurs.
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const el = (n, a) => { const e = document.createElementNS(NS, n);
    for (const k in (a || {})) e.setAttribute(k, a[k]); return e; };

  /* Un point est identifié par son nom ; sa valeur est comparée à la
     graduation près. Les décimaux sont arrondis au millième pour éviter
     qu'une abscisse calculée en flottant ne soit jugée fausse. */
  const arr = x => Math.round(x * 1000) / 1000;
  const cleP = p => p.nom + "@" + arr(p.x);

  /* ── correction ── */
  function verifier(etat, reponse) {
    const attendus = (reponse && reponse.points) || [];
    const faits = (etat && etat.points) || [];
    const A = new Map(attendus.map(p => [p.nom, arr(p.x)]));
    const F = new Map(faits.map(p => [p.nom, arr(p.x)]));

    let justes = 0, faux = 0;
    F.forEach((x, nom) => { if (A.has(nom) && A.get(nom) === x) justes++; else faux++; });
    const manques = A.size - justes;

    return { ok: manques === 0 && faux === 0 && A.size > 0,
             attendus: A.size, justes, manques, faux,
             score: A.size ? Math.max(0, (justes - faux) / A.size) : 0 };
  }

  /* Une valeur porte-t-elle un nombre écrit ? `reperes` donne la liste exacte,
     sinon on étiquette une graduation sur N. Les traits, eux, sont toujours
     tous tracés : l'élève compte les graduations pour se repérer. */
  function estRepere(p, v, rang) {
    if (Array.isArray(p.reperes) && p.reperes.length)
      return p.reperes.some(x => arr(x) === arr(v));
    const e = Number(p.etiquettes) || 1;
    return rang % e === 0;
  }

  /* ── géométrie ── */
  function repere(p) {
    const min = Number(p.min), max = Number(p.max), pas = Number(p.pas) || 1;
    const L = 700, MG = 46, H = 132, Y = 84;
    const large = L - MG * 2;
    const versX = v => MG + ((v - min) / (max - min)) * large;
    const versV = x => min + ((x - MG) / large) * (max - min);
    return { min, max, pas, L, H, Y, MG, large, versX, versV };
  }

  /* Aimantation : la valeur la plus proche parmi les graduations. */
  function aimante(g, v) {
    const n = Math.round((v - g.min) / g.pas);
    return arr(Math.min(Math.max(g.min + n * g.pas, g.min), g.max));
  }

  function nombre(v) {
    const s = String(arr(v)).replace(".", ",");
    return s.replace("-", "−");
  }

  /* ── plateau ── */
  function monter(params, svg) {
    const g = repere(params);
    const etiq = Number(params.etiquettes) || 1;
    const fixes = params.fixes || [];
    const aPlacer = params.placer || [];

    const marque = (v, n) => estRepere(params, v, n);
    svg.setAttribute("viewBox", "0 0 " + g.L + " " + g.H);
    svg.setAttribute("class", "mba-axe");
    svg.innerHTML = "";

    const gFond = el("g"), gPoints = el("g"), gCorr = el("g");
    svg.append(gFond, gPoints, gCorr);

    /* L'axe et ses graduations. */
    el("line", { x1: g.MG - 18, y1: g.Y, x2: g.L - g.MG + 26, y2: g.Y,
      stroke: "currentColor", "stroke-width": "1.6" });
    gFond.appendChild(el("line", { x1: g.MG - 18, y1: g.Y, x2: g.L - g.MG + 26, y2: g.Y,
      stroke: "currentColor", "stroke-width": "1.6" }));
    gFond.appendChild(el("path", { d: "M" + (g.L - g.MG + 26) + "," + g.Y +
      " l-9,-4.5 v9 z", fill: "currentColor" }));

    let n = 0;
    for (let v = g.min; v <= g.max + 1e-9; v = arr(v + g.pas), n++) {
      const x = g.versX(v);
      const grand = marque(v, n);
      gFond.appendChild(el("line", { x1: x, y1: g.Y - (grand ? 8 : 4), x2: x, y2: g.Y + (grand ? 8 : 4),
        stroke: "currentColor", "stroke-width": grand ? "1.4" : "1",
        "stroke-opacity": grand ? ".85" : ".45" }));
      if (grand) {
        const t = el("text", { x: x, y: g.Y + 26, "text-anchor": "middle",
          class: "mba-grad" });
        t.textContent = nombre(v);
        gFond.appendChild(t);
      }
    }

    /* Points déjà tracés : repères de lecture, non modifiables. */
    fixes.forEach(p => {
      const x = g.versX(p.x);
      gFond.appendChild(el("circle", { cx: x, cy: g.Y, r: "5",
        class: "mba-fixe" }));
      const t = el("text", { x: x, y: g.Y - 16, "text-anchor": "middle", class: "mba-nom-fixe" });
      t.textContent = p.nom;
      gFond.appendChild(t);
    });

    let poses = [];       // [{ nom, x }]
    let fige = false;

    function dessiner() {
      gPoints.innerHTML = "";
      poses.forEach(p => {
        const x = g.versX(p.x);
        gPoints.appendChild(el("line", { x1: x, y1: g.Y - 30, x2: x, y2: g.Y,
          class: "mba-tige" }));
        gPoints.appendChild(el("circle", { cx: x, cy: g.Y, r: "6", class: "mba-point" }));
        const t = el("text", { x: x, y: g.Y - 36, "text-anchor": "middle", class: "mba-nom" });
        t.textContent = p.nom;
        gPoints.appendChild(t);
      });
      const suivant = aPlacer[poses.length];
      svg.setAttribute("data-suivant", suivant || "");
      svg.dispatchEvent(new CustomEvent("mba-change", { bubbles: true,
        detail: { poses: poses.length, total: aPlacer.length, suivant: suivant || null } }));
    }

    /* Un clic pose le point suivant ; un clic sur un point déjà posé le retire. */
    function clic(ev) {
      if (fige) return;
      const r = svg.getBoundingClientRect();
      const px = (ev.clientX - r.left) / r.width * g.L;
      const v = aimante(g, g.versV(px));

      const deja = poses.findIndex(p => arr(p.x) === v);
      if (deja >= 0) { poses.splice(deja, 1); renommer(); dessiner(); return; }
      if (poses.length >= aPlacer.length) return;
      poses.push({ nom: aPlacer[poses.length], x: v });
      dessiner();
    }
    /* Les noms suivent l'ordre de l'énoncé : après un retrait, on renumérote. */
    function renommer() { poses.forEach((p, i) => { p.nom = aPlacer[i]; }); }

    svg.addEventListener("click", clic);

    dessiner();

    return {
      lire() { return { points: poses.map(p => ({ nom: p.nom, x: arr(p.x) })) }; },
      annuler() { if (fige) return; poses.pop(); dessiner(); },
      vider() { if (fige) return; poses = []; dessiner(); },
      estFige() { return fige; },
      corriger(reponse) {
        fige = true;
        const att = (reponse && reponse.points) || [];
        const A = new Map(att.map(p => [p.nom, arr(p.x)]));
        gCorr.innerHTML = "";
        /* Ce qui est juste, ce qui est mal placé, ce qui manque. */
        poses.forEach(p => {
          const bon = A.has(p.nom) && A.get(p.nom) === arr(p.x);
          gCorr.appendChild(el("circle", { cx: g.versX(p.x), cy: g.Y, r: "9",
            class: bon ? "mba-juste" : "mba-faux" }));
        });
        att.forEach(p => {
          const fait = poses.find(q => q.nom === p.nom && arr(q.x) === arr(p.x));
          if (fait) return;
          const x = g.versX(p.x);
          gCorr.appendChild(el("circle", { cx: x, cy: g.Y, r: "7", class: "mba-manque" }));
          const t = el("text", { x: x, y: g.Y + 44, "text-anchor": "middle", class: "mba-attendu" });
          t.textContent = p.nom + " = " + nombre(p.x);
          gCorr.appendChild(t);
        });
      },
    };
  }

  /* ── aperçu figé (catalogue) ── */
  function apercu(params) {
    const g = repere(params);
    const etiq = Number(params.etiquettes) || 1;
    let s = '<svg class="mba-axe" viewBox="0 0 ' + g.L + ' ' + g.H + '">';
    s += '<line x1="' + (g.MG - 18) + '" y1="' + g.Y + '" x2="' + (g.L - g.MG + 26) +
         '" y2="' + g.Y + '" stroke="currentColor" stroke-width="1.6"/>';
    let n = 0;
    for (let v = g.min; v <= g.max + 1e-9; v = arr(v + g.pas), n++) {
      const x = g.versX(v), grand = estRepere(params, v, n);
      s += '<line x1="' + x + '" y1="' + (g.Y - (grand ? 8 : 4)) + '" x2="' + x +
           '" y2="' + (g.Y + (grand ? 8 : 4)) + '" stroke="currentColor" stroke-width="' +
           (grand ? 1.4 : 1) + '" stroke-opacity="' + (grand ? .85 : .45) + '"/>';
      if (grand) s += '<text x="' + x + '" y="' + (g.Y + 26) +
        '" text-anchor="middle" class="mba-grad">' + nombre(v) + '</text>';
    }
    (params.fixes || []).forEach(p => {
      const x = g.versX(p.x);
      s += '<circle cx="' + x + '" cy="' + g.Y + '" r="5" class="mba-fixe"/>';
      s += '<text x="' + x + '" y="' + (g.Y - 16) + '" text-anchor="middle" class="mba-nom-fixe">' +
           p.nom + '</text>';
    });
    return s + "</svg>";
  }

  function installerApercu(params, conteneur, opts) {
    injecterStyles();
    conteneur.innerHTML = '<div class="mba-wrap' +
      (opts && opts.papier ? " mba-sur-papier" : "") + '">' + apercu(params) + '</div>';
  }

  /* ── montage clé en main : plateau + outils + validation ── */
  function installer(params, conteneur, opts) {
    injecterStyles();
    const noms = params.placer || [];
    /* Fond clair (papier de la séance) : on bascule toute la palette en encre
       sombre plutôt que de laisser du blanc sur du beige. */
    const papier = !!(opts && opts.papier);
    conteneur.innerHTML =
      '<div class="mba-wrap' + (papier ? " mba-sur-papier" : "") + '">' +
        '<div class="mba-tools">' +
          '<span class="mba-consigne">Point à placer : <strong class="mba-suivant">—</strong></span>' +
          '<span class="mbq-spacer" style="flex:1"></span>' +
          '<button type="button" class="mba-tool" data-a="annuler">Annuler</button>' +
          '<button type="button" class="mba-tool" data-a="vider">Tout effacer</button>' +
        '</div>' +
        '<div class="mba-board"><svg class="mba-axe"></svg></div>' +
        '<div class="mba-legend" hidden>' +
          '<span><i class="mba-i-juste"></i>Bien placé</span>' +
          '<span><i class="mba-i-manque"></i>Attendu</span>' +
          '<span><i class="mba-i-faux"></i>Mal placé</span></div>' +
        '<div class="mba-foot">' +
          '<button type="button" class="btn-primary" data-a="valider">Valider</button>' +
          '<button type="button" class="mba-tool" data-a="rejouer">Recommencer</button>' +
          '<p class="mba-verdict"></p>' +
        '</div>' +
        '<p class="mba-hint">Un clic sur l\'axe pose le point ; il s\'aimante à la graduation ' +
        'la plus proche. Un clic sur un point posé le retire.</p>' +
      '</div>';

    const svg = conteneur.querySelector(".mba-board .mba-axe");
    const verdict = conteneur.querySelector(".mba-verdict");
    const legend = conteneur.querySelector(".mba-legend");
    const suivant = conteneur.querySelector(".mba-suivant");
    let inst = monter(params, svg);

    svg.addEventListener("mba-change", e => {
      suivant.textContent = e.detail.suivant || "tous placés";
    });
    suivant.textContent = noms[0] || "—";

    conteneur.querySelector('[data-a="annuler"]').onclick = () => inst.annuler();
    conteneur.querySelector('[data-a="vider"]').onclick = () => inst.vider();
    conteneur.querySelector('[data-a="rejouer"]').onclick = () => {
      inst = monter(params, svg);
      verdict.textContent = ""; verdict.className = "mba-verdict"; legend.hidden = true;
      suivant.textContent = noms[0] || "—";
    };
    conteneur.querySelector('[data-a="valider"]').onclick = () => {
      if (inst.estFige()) return;
      const r = verifier(inst.lire(), params.reponse);
      inst.corriger(params.reponse);
      legend.hidden = false;
      if (r.ok) { verdict.textContent = "Points bien placés."; verdict.className = "mba-verdict mba-bon"; }
      else {
        const b = [];
        if (r.justes) b.push(r.justes + " bien placé" + (r.justes > 1 ? "s" : ""));
        if (r.manques) b.push(r.manques + " oubli" + (r.manques > 1 ? "s" : ""));
        if (r.faux) b.push(r.faux + " mal placé" + (r.faux > 1 ? "s" : ""));
        verdict.textContent = b.join(" · ") + " — score " + Math.round(r.score * 100) + " %";
        verdict.className = "mba-verdict " + (r.score >= .6 ? "mba-moyen" : "mba-mauvais");
      }
    };
    return { instance: () => inst, detacher: () => {} };
  }

  /* ── styles ── */
  let stylesPoses = false;
  function injecterStyles() {
    if (stylesPoses || typeof document === "undefined") return;
    stylesPoses = true;
    const s = document.createElement("style");
    s.textContent = `
      .mba-wrap { color: var(--text, #f0ece0); }
      .mba-board { background: var(--w-fond, #63676b); border: 1px solid var(--w-bord, rgba(0,0,0,.40));
        border-radius: 10px; padding: .4rem .2rem; margin: .6rem 0; }
      /* La droite graduée et ses traits de graduation sont tracés en
         currentColor : c'est le support réglé, donc noir. */
      .mba-axe { display: block; width: 100%; height: auto; cursor: crosshair;
        color: var(--w-grille-forte, #000); }
      .mba-grad { font-size: 13px; fill: var(--w-grille, rgba(0,0,0,.50));
        font-family: 'DM Mono', monospace; }
      /* Les points — donnés ou placés par l'élève — sont la figure : blancs. */
      .mba-fixe { fill: var(--w-figure-dim, rgba(255,255,255,.62)); }
      .mba-nom-fixe { font-size: 14px; fill: var(--w-figure-dim, rgba(255,255,255,.62));
        font-family: Georgia, serif; font-style: italic; }
      .mba-point { fill: var(--w-figure, #fff); }
      .mba-tige { stroke: var(--w-figure, #fff); stroke-width: 1.2; stroke-opacity: .55;
        stroke-dasharray: 3 3; }
      .mba-nom { font-size: 15px; fill: var(--w-figure, #fff);
        font-family: Georgia, serif; font-style: italic; }
      .mba-juste { fill: none; stroke: var(--w-juste, #a8f0c6); stroke-width: 2.5; }
      .mba-faux  { fill: none; stroke: var(--w-faux, #ffab97); stroke-width: 2.5; }
      .mba-manque{ fill: none; stroke: var(--w-codage, #ffd166); stroke-width: 2; stroke-dasharray: 3 3; }
      .mba-attendu { font-size: 12px; fill: var(--w-codage, #ffd166); font-family: 'DM Mono', monospace; }
      .mba-tools, .mba-foot { display: flex; align-items: center; gap: .5rem; flex-wrap: wrap; }
      .mba-consigne { font-size: .85rem; color: var(--muted, rgba(240,236,224,.55)); }
      .mba-consigne strong { color: var(--accent, #c8b97a); font-size: 1rem; }
      .mba-tool { background: none; border: 1px solid var(--border, rgba(255,255,255,.13));
        color: var(--muted, rgba(240,236,224,.55)); font: inherit; font-size: .85rem;
        padding: .45rem .8rem; border-radius: 6px; cursor: pointer; transition: .2s; }
      .mba-tool:hover { color: var(--text, #f0ece0); border-color: var(--accent, #c8b97a); }
      .mba-legend { display: flex; gap: 1rem; font-size: .78rem; margin: .4rem 0;
        color: var(--muted, rgba(240,236,224,.55)); }
      .mba-legend i { display: inline-block; width: 11px; height: 11px; border-radius: 50%;
        margin-right: .35rem; vertical-align: -1px; }
      .mba-i-juste { border: 2px solid var(--accent2, #82d2a0); }
      .mba-i-manque{ border: 2px dashed var(--accent, #c8b97a); }
      .mba-i-faux  { border: 2px solid var(--danger, #e6826e); }
      .mba-verdict { font-size: .88rem; margin: 0; }
      .mba-bon { color: var(--accent2, #82d2a0); }
      .mba-moyen { color: var(--accent, #c8b97a); }
      .mba-mauvais { color: var(--danger, #e6826e); }
      .mba-hint { font-size: .78rem; color: var(--muted, rgba(240,236,224,.45)); margin: .5rem 0 0; }

      /* ── Sur le papier de la séance ──
         Le plateau est posé sur une page beige : l'encre claire y serait
         illisible. On repasse donc à l'encre sombre du brouillon (#17120c),
         en gardant les mêmes repères de couleur pour la correction. */
      .mba-sur-papier { color: #17120c; }
      .mba-sur-papier .mba-consigne { color: #6b5d40; }
      .mba-sur-papier .mba-consigne strong { color: #17120c; }
      .mba-sur-papier .mba-tool { color: #5b4f36; border-color: rgba(31,26,19,.28); }
      .mba-sur-papier .mba-tool:hover { color: #17120c; border-color: #9a833f;
        background: rgba(31,26,19,.05); }
      .mba-sur-papier .mba-legend { color: #6b5d40; }
      .mba-sur-papier .mba-i-juste { border-color: #1f7a4d; }
      .mba-sur-papier .mba-i-manque { border-color: #9a833f; }
      .mba-sur-papier .mba-i-faux { border-color: #b03a26; }
      .mba-sur-papier .mba-hint { color: #6b5d40; }
      .mba-sur-papier .mba-bon { color: #1f7a4d; }
      .mba-sur-papier .mba-moyen { color: #9a833f; }
      .mba-sur-papier .mba-mauvais { color: #b03a26; }
    `;
    document.head.appendChild(s);
  }

  if (typeof window !== "undefined")
    window.MB_AXE = { monter, verifier, installer, apercu, installerApercu, injecterStyles, aimante, repere };
  if (typeof module !== "undefined" && module.exports)
    module.exports = { verifier, aimante, repere, cleP };   /* pour les tests hors navigateur */
})();
