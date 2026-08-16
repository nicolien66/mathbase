/* ═══════════════════════════════════════════════════════════
   POLYMATES — TRACÉ ET CONSTRUCTION
   L'élève construit sur l'annexe du sujet, avec ses instruments.

   ── LE PROBLÈME QUE CE WIDGET RÉSOUT ─────────────────────────
   Certains exercices d'annales demandent de CONSTRUIRE : « tracer la
   médiatrice », « compléter la figure de l'annexe », « placer le point D ».
   Jusqu'ici l'élève ne pouvait que décrire son tracé par écrit, et le
   correcteur ne voyait rien.

   Ici, l'annexe s'affiche en fond et l'élève dessine par-dessus. Son travail
   est exporté en IMAGE, qui part au correcteur avec la page du sujet : deux
   images, celle du sujet et celle de l'élève. C'est le seul moyen honnête de
   juger une construction — on ne corrige pas un dessin sur description.

   ── LES INSTRUMENTS ──────────────────────────────────────────
   · point      — un point nommé (A, B, C… nommés automatiquement)
   · segment    — deux clics : les extrémités
   · droite     — deux clics, prolongée jusqu'aux bords
   · cercle     — le compas : centre, puis un point du cercle
   · perpend.   — l'équerre : une droite existante, puis un point
   · parallèle  — une droite existante, puis un point
   · main levée — le crayon, pour hachurer ou annoter
   · gomme      — retire le dernier objet, ou celui qu'on désigne

   Le codage (angle droit, longueurs égales) n'est PAS automatique : c'est à
   l'élève de le porter, comme sur une copie.

   Contrat exposé (window.MB_TRACE) :
     installer(params, hote, opts)  → plateau complet
     instance.lire()                → { objets, image }   image = PNG data-URL
     instance.vider()
   params = {
     widget: "trace",
     fond: "data:image/png;base64,…",   // l'annexe, facultative
     largeur: 800, hauteur: 1100,       // si aucun fond
     consigne: "Complète la figure de l'annexe."
   }
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const NOMS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  /* ── géométrie ── */
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  function versBords(a, b, L, H) {
    /* Prolonge la droite (ab) jusqu'aux bords du cadre. */
    const dx = b.x - a.x, dy = b.y - a.y;
    const n = Math.hypot(dx, dy) || 1;
    const u = { x: dx / n, y: dy / n };
    const k = L + H;
    return [{ x: a.x - u.x * k, y: a.y - u.y * k },
            { x: a.x + u.x * k, y: a.y + u.y * k }];
  }
  /* Projection d'un point sur une droite : sert à la perpendiculaire. */
  function directionPerp(d) {
    const dx = d.b.x - d.a.x, dy = d.b.y - d.a.y;
    const n = Math.hypot(dx, dy) || 1;
    return { x: -dy / n, y: dx / n };
  }
  function directionPara(d) {
    const dx = d.b.x - d.a.x, dy = d.b.y - d.a.y;
    const n = Math.hypot(dx, dy) || 1;
    return { x: dx / n, y: dy / n };
  }

  /* ── plateau ── */
  function installer(params, hote, opts) {
    injecterStyles();
    const papier = !!(opts && opts.papier);

    const OUTILS = [
      { id: "point",   nom: "Point",         aide: "un clic" },
      { id: "segment", nom: "Segment",       aide: "deux clics : les extrémités" },
      { id: "droite",  nom: "Droite",        aide: "deux clics : elle se prolonge" },
      { id: "cercle",  nom: "Compas",        aide: "le centre, puis un point du cercle" },
      { id: "perp",    nom: "Perpendiculaire", aide: "une droite tracée, puis un point" },
      { id: "para",    nom: "Parallèle",     aide: "une droite tracée, puis un point" },
      { id: "libre",   nom: "Crayon",        aide: "à main levée" },
      { id: "gomme",   nom: "Gomme",         aide: "cliquez sur un objet" },
    ];

    hote.innerHTML =
      '<div class="mbtr-wrap' + (papier ? " mbtr-sur-papier" : "") + '">' +
        (params.consigne ? '<p class="mbtr-consigne">' + esc(params.consigne) + "</p>" : "") +
        '<div class="mbtr-outils">' +
          OUTILS.map(o => '<button type="button" class="mbtr-out" data-o="' + o.id +
            '" title="' + esc(o.aide) + '">' + esc(o.nom) + "</button>").join("") +
        "</div>" +
        '<p class="mbtr-aide"></p>' +
        '<div class="mbtr-scene"><canvas class="mbtr-cv"></canvas></div>' +
        '<div class="mbtr-pied">' +
          '<button type="button" class="mbtr-tool" data-a="annuler">Annuler le dernier</button>' +
          '<button type="button" class="mbtr-tool" data-a="vider">Tout effacer</button>' +
          '<span class="mbtr-etat"></span>' +
        "</div>" +
      "</div>";

    const cv   = hote.querySelector(".mbtr-cv");
    const ctx  = cv.getContext("2d");
    const aide = hote.querySelector(".mbtr-aide");
    const etat = hote.querySelector(".mbtr-etat");

    let L = params.largeur || 800, H = params.hauteur || 1000;
    let fond = null;
    const objets = [];
    let outil = "segment";
    let attente = [];          // points cliqués en attente
    let cibleDroite = null;    // droite choisie pour perpendiculaire / parallèle
    let traceLibre = null;
    let compteurNoms = 0;

    /* ── chargement du fond ── */
    function dessiner() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, cv.width, cv.height);
      if (fond) ctx.drawImage(fond, 0, 0, cv.width, cv.height);

      objets.forEach(o => tracer(o, false));
      /* Aperçu du geste en cours. */
      if (attente.length === 1 && outil !== "point" && outil !== "libre" && outil !== "gomme") {
        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = "rgba(154,107,31,.75)";
        ctx.beginPath(); ctx.arc(attente[0].x, attente[0].y, 4, 0, 7); ctx.stroke();
        ctx.restore();
      }
      if (cibleDroite) tracer(cibleDroite, true);
    }

    function tracer(o, surligne) {
      ctx.save();
      ctx.lineWidth = surligne ? 3 : 1.8;
      ctx.strokeStyle = surligne ? "rgba(31,122,77,.85)" : "#17120c";
      ctx.fillStyle = "#17120c";
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      if (o.t === "point") {
        ctx.beginPath(); ctx.arc(o.x, o.y, 3.5, 0, 7); ctx.fill();
        if (o.nom) {
          ctx.font = "italic 16px Georgia, serif";
          ctx.fillText(o.nom, o.x + 7, o.y - 7);
        }
      } else if (o.t === "segment") {
        ctx.beginPath(); ctx.moveTo(o.a.x, o.a.y); ctx.lineTo(o.b.x, o.b.y); ctx.stroke();
      } else if (o.t === "droite") {
        const [p, q] = versBords(o.a, o.b, cv.width, cv.height);
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      } else if (o.t === "cercle") {
        ctx.beginPath(); ctx.arc(o.c.x, o.c.y, o.r, 0, 7); ctx.stroke();
      } else if (o.t === "libre") {
        ctx.beginPath();
        o.pts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
        ctx.stroke();
      }
      ctx.restore();
    }

    /* ── quel objet est sous le curseur ? (pour la gomme et les droites) ── */
    function objetSous(p, seulementDroites) {
      for (let i = objets.length - 1; i >= 0; i--) {
        const o = objets[i];
        if (seulementDroites && o.t !== "droite" && o.t !== "segment") continue;
        if (o.t === "point" && dist(o, p) < 10) return { o, i };
        if ((o.t === "segment" || o.t === "droite") && distPointDroite(p, o) < 8) return { o, i };
        if (o.t === "cercle" && Math.abs(dist(o.c, p) - o.r) < 8) return { o, i };
        if (o.t === "libre" && o.pts.some(q => dist(q, p) < 9)) return { o, i };
      }
      return null;
    }
    function distPointDroite(p, o) {
      const a = o.a, b = o.b;
      const dx = b.x - a.x, dy = b.y - a.y;
      const n2 = dx * dx + dy * dy || 1;
      let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / n2;
      if (o.t === "segment") t = Math.max(0, Math.min(1, t));
      return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
    }

    /* ── interactions ── */
    function pos(e) {
      const r = cv.getBoundingClientRect();
      const src = e.touches ? e.touches[0] : e;
      return { x: (src.clientX - r.left) * (cv.width / r.width),
               y: (src.clientY - r.top) * (cv.height / r.height) };
    }

    function majAide() {
      const o = OUTILS.find(x => x.id === outil);
      let txt = o ? o.nom + " — " + o.aide : "";
      if ((outil === "perp" || outil === "para") && !cibleDroite)
        txt = o.nom + " — cliquez d'abord sur une droite ou un segment déjà tracé";
      else if ((outil === "perp" || outil === "para") && cibleDroite)
        txt = o.nom + " — cliquez maintenant le point par lequel elle passe";
      else if (attente.length === 1)
        txt = o.nom + " — cliquez le second point";
      aide.textContent = txt;
      etat.textContent = objets.length + " objet" + (objets.length > 1 ? "s" : "") + " tracé" +
        (objets.length > 1 ? "s" : "");
    }

    function clic(e) {
      e.preventDefault();
      const p = pos(e);

      if (outil === "gomme") {
        const t = objetSous(p);
        if (t) objets.splice(t.i, 1);
        attente = []; dessiner(); majAide(); return;
      }
      if (outil === "point") {
        objets.push({ t: "point", x: p.x, y: p.y, nom: NOMS[compteurNoms++ % 26] });
        dessiner(); majAide(); return;
      }
      if (outil === "perp" || outil === "para") {
        if (!cibleDroite) {
          const t = objetSous(p, true);
          if (t) { cibleDroite = t.o; }
          dessiner(); majAide(); return;
        }
        const u = outil === "perp" ? directionPerp(cibleDroite) : directionPara(cibleDroite);
        objets.push({ t: "droite", a: { x: p.x, y: p.y },
                      b: { x: p.x + u.x * 100, y: p.y + u.y * 100 },
                      via: outil });
        cibleDroite = null; dessiner(); majAide(); return;
      }
      /* Segment, droite, cercle : deux clics. */
      attente.push(p);
      if (attente.length === 2) {
        const [a, b] = attente;
        if (dist(a, b) < 3) { attente = []; dessiner(); return; }
        if (outil === "cercle") objets.push({ t: "cercle", c: a, r: dist(a, b) });
        else objets.push({ t: outil, a: a, b: b });
        attente = [];
      }
      dessiner(); majAide();
    }

    function debutLibre(e) {
      if (outil !== "libre") return;
      e.preventDefault();
      traceLibre = { t: "libre", pts: [pos(e)] };
      objets.push(traceLibre);
    }
    function bougeLibre(e) {
      if (!traceLibre) return;
      e.preventDefault();
      traceLibre.pts.push(pos(e));
      dessiner();
    }
    function finLibre() { traceLibre = null; majAide(); }

    cv.addEventListener("click", e => { if (outil !== "libre") clic(e); });
    cv.addEventListener("mousedown", debutLibre);
    cv.addEventListener("mousemove", bougeLibre);
    window.addEventListener("mouseup", finLibre);
    cv.addEventListener("touchstart", e => { if (outil === "libre") debutLibre(e); else clic(e); }, { passive: false });
    cv.addEventListener("touchmove", bougeLibre, { passive: false });
    cv.addEventListener("touchend", finLibre);

    hote.querySelectorAll(".mbtr-out").forEach(b => {
      b.onclick = () => {
        outil = b.dataset.o;
        attente = []; cibleDroite = null;
        hote.querySelectorAll(".mbtr-out").forEach(x => x.classList.toggle("on", x === b));
        dessiner(); majAide();
      };
    });
    hote.querySelector('[data-a="annuler"]').onclick = () => {
      objets.pop(); attente = []; cibleDroite = null; dessiner(); majAide();
    };
    hote.querySelector('[data-a="vider"]').onclick = () => {
      objets.length = 0; attente = []; cibleDroite = null; compteurNoms = 0;
      dessiner(); majAide();
    };
    const parDefaut = hote.querySelector('[data-o="segment"]');
    if (parDefaut) parDefaut.classList.add("on");

    /* ── mise en place du fond ── */
    function poser(img) {
      if (img) { fond = img; L = img.width; H = img.height; }
      /* On borne la largeur : au-delà, le navigateur rame pour rien. */
      const maxL = 900;
      const k = L > maxL ? maxL / L : 1;
      cv.width = Math.round(L * k);
      cv.height = Math.round(H * k);
      dessiner(); majAide();
    }
    if (params.fond) {
      const img = new Image();
      img.onload = () => poser(img);
      img.onerror = () => { aide.textContent =
        "L'annexe n'a pas pu être chargée — vous pouvez tout de même construire sur une page blanche."; poser(null); };
      img.src = params.fond;
    } else poser(null);

    return {
      lire() {
        return {
          objets: objets.map(o => JSON.parse(JSON.stringify(o))),
          /* JPEG : une construction au trait se compresse bien, et l'envoi au
             correcteur reste léger. */
          image: objets.length ? cv.toDataURL("image/jpeg", 0.82) : null,
        };
      },
      vider() { objets.length = 0; dessiner(); majAide(); },
      nbObjets() { return objets.length; },
    };
  }

  function esc(t) {
    return String(t).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  let poses = false;
  function injecterStyles() {
    if (poses || typeof document === "undefined") return;
    poses = true;
    const s = document.createElement("style");
    s.textContent = `
      .mbtr-wrap { color: var(--text, #f0ece0); }
      .mbtr-consigne { font-size: .92rem; margin: 0 0 .6rem; }
      .mbtr-outils { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: .5rem; }
      .mbtr-out { background: none; border: 1px solid var(--border2, rgba(255,255,255,.16));
        color: var(--muted, rgba(240,236,224,.6)); font: inherit; font-size: .82rem;
        padding: .35rem .75rem; border-radius: 999px; cursor: pointer; transition: .2s; }
      .mbtr-out:hover { color: var(--text, #f0ece0); border-color: var(--accent, #c8b97a); }
      .mbtr-out.on { background: var(--accent, #c8b97a); color: #0b0b09; border-color: transparent; }
      .mbtr-aide { font-size: .8rem; color: var(--muted, rgba(240,236,224,.55));
        margin: 0 0 .5rem; min-height: 1.1em; }
      .mbtr-scene { overflow: auto; border: 1px solid var(--border, rgba(255,255,255,.12));
        border-radius: 8px; background: #fff; }
      .mbtr-cv { display: block; max-width: 100%; height: auto; cursor: crosshair;
        touch-action: none; }
      .mbtr-pied { display: flex; align-items: center; gap: .6rem; flex-wrap: wrap;
        margin-top: .6rem; }
      .mbtr-tool { background: none; border: 1px solid var(--border, rgba(255,255,255,.13));
        color: var(--muted, rgba(240,236,224,.55)); font: inherit; font-size: .82rem;
        padding: .4rem .8rem; border-radius: 6px; cursor: pointer; }
      .mbtr-etat { font-size: .8rem; color: var(--muted, rgba(240,236,224,.5)); }

      /* ── Sur le papier de la séance ── */
      .mbtr-sur-papier { color: #17120c; }
      .mbtr-sur-papier .mbtr-consigne { color: #17120c; }
      .mbtr-sur-papier .mbtr-aide, .mbtr-sur-papier .mbtr-etat { color: #6b5d40; }
      .mbtr-sur-papier .mbtr-scene { border-color: rgba(31,26,19,.22); }
      .mbtr-sur-papier .mbtr-out { color: #5b4f36; border-color: rgba(31,26,19,.28); }
      .mbtr-sur-papier .mbtr-out:hover { color: #17120c; border-color: #9a833f; }
      .mbtr-sur-papier .mbtr-out.on { background: #9a833f; color: #f7f2e4; border-color: transparent; }
      .mbtr-sur-papier .mbtr-tool { color: #5b4f36; border-color: rgba(31,26,19,.28); }
    `;
    document.head.appendChild(s);
  }

  if (typeof window !== "undefined")
    window.MB_TRACE = { installer, injecterStyles };
  if (typeof module !== "undefined" && module.exports)
    module.exports = { versBords, directionPerp, directionPara };
})();
