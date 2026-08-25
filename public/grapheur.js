/* ═══════════════════════════════════════════════════════════════
   POLYMATES — grapheur.js : traceur de courbes flottant.

   Un second bouton rond, jumeau de celui de la calculatrice (ui.js), placé
   juste à sa gauche. Il ouvre un petit repère où l'on saisit jusqu'à quatre
   fonctions de x, que l'on peut ensuite explorer à la souris : glisser pour
   se déplacer, molette pour zoomer.

   Réservé aux mathématiques : le bouton ne se construit pas dans les autres
   matières, où il n'aurait rien à tracer.

   ── Sûreté du calcul ──────────────────────────────────────────────
   Aucune évaluation libre de la saisie. L'expression est d'abord traduite
   en jetons connus (sin(, √(, π, ², ^…), puis vérifiée caractère par
   caractère contre une liste blanche : si le moindre symbole étranger
   subsiste, l'expression est rejetée. Le même parti pris que la
   calculatrice de ui.js, dont ce fichier reprend la grammaire.

   Usage : <script src="grapheur.js" defer></script> après ui.js.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* Le grapheur n'a de sens qu'en mathématiques. */
  if (window.MB_MAT && !MB_MAT.estMaths()) return;

  const COULEURS = ["#7ac8a0", "#c8b97a", "#7ac8e6", "#e6826e"];
  const CLE = "mb_graph_fns";

  const CSS = `
    #mb-graph-btn{position:fixed;bottom:18px;right:82px;z-index:800;width:52px;height:52px;
      border-radius:50%;background:rgba(20,19,15,.95);border:1px solid rgba(122,200,160,.45);
      color:#7ac8a0;cursor:pointer;display:flex;align-items:center;justify-content:center;
      box-shadow:0 8px 28px -8px rgba(0,0,0,.7);transition:transform .15s,background .2s;}
    #mb-graph-btn:hover{transform:translateY(-2px);background:rgba(122,200,160,.14);}
    #mb-graph-btn svg{width:24px;height:24px;}
    #mb-graph{position:fixed;bottom:82px;right:18px;z-index:800;width:352px;
      background:#14130f;border:1px solid rgba(122,200,160,.35);border-radius:16px;
      box-shadow:0 30px 80px -20px rgba(0,0,0,.85);padding:.9rem;display:none;
      font-family:'DM Sans',system-ui,sans-serif;}
    #mb-graph.open{display:block;animation:mbGraphIn .18s ease;}
    @keyframes mbGraphIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
    #mb-graph .mb-g-head{display:flex;align-items:center;gap:.5rem;margin-bottom:.6rem;}
    #mb-graph .mb-g-title{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(240,236,224,.45);flex:1;}
    #mb-graph .mb-g-icon{background:none;border:none;color:rgba(240,236,224,.45);cursor:pointer;
      font-size:.9rem;padding:.1rem .3rem;transition:color .2s;}
    #mb-graph .mb-g-icon:hover{color:#7ac8a0;}
    #mb-graph .mb-g-close:hover{color:#e6826e;}
    #mb-graph .mb-g-board{position:relative;border:1px solid rgba(255,255,255,.08);border-radius:10px;
      overflow:hidden;background:rgba(245,242,232,.03);}
    #mb-graph canvas{display:block;width:100%;height:210px;cursor:grab;touch-action:none;}
    #mb-graph canvas.drag{cursor:grabbing;}
    #mb-graph .mb-g-read{position:absolute;left:.5rem;top:.45rem;font-family:'DM Mono',monospace;
      font-size:.62rem;color:rgba(240,236,224,.55);pointer-events:none;letter-spacing:.04em;}
    #mb-graph .mb-g-lines{margin-top:.6rem;display:flex;flex-direction:column;gap:.35rem;}
    #mb-graph .mb-g-line{display:flex;align-items:center;gap:.45rem;background:rgba(245,242,232,.05);
      border:1px solid rgba(255,255,255,.08);border-radius:9px;padding:.28rem .45rem;transition:border-color .2s;}
    #mb-graph .mb-g-line.bad{border-color:rgba(230,130,110,.55);}
    #mb-graph .mb-g-dot{width:.55rem;height:.55rem;border-radius:50%;flex:none;cursor:pointer;
      border:1px solid transparent;transition:opacity .2s;}
    #mb-graph .mb-g-dot.off{opacity:.28;}
    #mb-graph .mb-g-name{font-family:'DM Mono',monospace;font-size:.72rem;color:rgba(240,236,224,.45);flex:none;}
    #mb-graph .mb-g-line input{flex:1;min-width:0;background:none;border:none;outline:none;color:#f0ece0;
      font-family:'DM Mono',monospace;font-size:.8rem;padding:.15rem 0;}
    #mb-graph .mb-g-line input::placeholder{color:rgba(240,236,224,.25);}
    #mb-graph .mb-g-clear{background:none;border:none;color:rgba(240,236,224,.3);cursor:pointer;
      font-size:.75rem;padding:0 .15rem;flex:none;transition:color .2s;}
    #mb-graph .mb-g-clear:hover{color:#e6826e;}
    #mb-graph .mb-g-foot{display:flex;align-items:center;justify-content:space-between;margin-top:.55rem;
      font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.06em;color:rgba(240,236,224,.3);}
    #mb-graph .mb-g-foot button{background:none;border:1px solid rgba(255,255,255,.1);border-radius:999px;
      color:rgba(240,236,224,.45);font:inherit;padding:.2rem .6rem;cursor:pointer;transition:.2s;}
    #mb-graph .mb-g-foot button:hover{color:#7ac8a0;border-color:rgba(122,200,160,.45);}
    @media (max-width:420px){
      #mb-graph{width:calc(100vw - 36px);}
      #mb-graph-btn{right:82px;}
    }
  `;

  /* ── État : les quatre expressions, la fenêtre visible ── */
  let fns = [
    { expr: "x", on: true },
    { expr: "", on: true },
    { expr: "", on: true },
    { expr: "", on: true },
  ];
  try {
    const gardé = JSON.parse(localStorage.getItem(CLE) || "null");
    if (Array.isArray(gardé) && gardé.length === 4) fns = gardé;
  } catch (_) {}

  /* La fenêtre est décrite par son centre et l'unité en pixels : déplacer
     revient à bouger le centre, zoomer à changer l'échelle. */
  let cx = 0, cy = 0, echelle = 32;
  let canvas, ctx, lecture, souris = null;

  function sauver() {
    try { localStorage.setItem(CLE, JSON.stringify(fns)); } catch (_) {}
  }

  /* ══════════════════════════════════════════════════════════════
     Traduction d'une saisie en fonction de x

     On reprend la grammaire de la calculatrice, augmentée de la variable x
     et des raccourcis d'écriture attendus au collège : 2x, 3(x+1), x².
     ══════════════════════════════════════════════════════════════ */
  const JETONS = /asin\(|acos\(|atan\(|sin\(|cos\(|tan\(|ln\(|log\(|exp\(|abs\(|sqrt\(|√\(|π|²|³|,|×|÷|−|–|\^/g;
  const TRAD = {
    "asin(": "M.asin(", "acos(": "M.acos(", "atan(": "M.atan(",
    "sin(": "M.sin(", "cos(": "M.cos(", "tan(": "M.tan(",
    "ln(": "M.ln(", "log(": "M.log(", "exp(": "M.exp(", "abs(": "M.abs(",
    "sqrt(": "M.sqrt(", "√(": "M.sqrt(",
    "π": "(M.PI)", "²": "**2", "³": "**3", ",": ".", "×": "*", "÷": "/", "−": "-", "–": "-", "^": "**",
  };

  const PORTEE = {
    sin: Math.sin, cos: Math.cos, tan: Math.tan,
    asin: Math.asin, acos: Math.acos, atan: Math.atan,
    ln: Math.log, log: Math.log10, exp: Math.exp, abs: Math.abs, sqrt: Math.sqrt,
    PI: Math.PI, E: Math.E,
  };

  /* Rend une fonction utilisable, ou null si la saisie n'est pas valide. */
  function compiler(saisie) {
    const brut = String(saisie || "").trim();
    if (!brut) return null;

    /* « f(x) = ... » ou « y = ... » : on ne garde que le membre de droite. */
    let s = brut.replace(/^\s*(y|f\s*\(\s*x\s*\)|[fghp]\s*\(\s*x\s*\))\s*=/i, "");

    s = s.replace(JETONS, m => TRAD[m]);

    /* Produits implicites : 2x → 2*x, 3(x+1) → 3*(x+1), x( → x*(, )( → )*(
       et xM.sin( → x*M.sin(. On protège les noms de fonctions au passage. */
    s = s.replace(/([0-9x)])\s*(?=[x(])/g, (m, a, i, str) => {
      /* Ne pas couper un nom de fonction déjà traduit (M.sin(, M.exp(…). */
      const avant = str.slice(0, i + 1);
      if (/M\.[a-z]*$/i.test(avant)) return m;
      return a + "*";
    });
    s = s.replace(/([0-9x)])\s*(?=M\.)/g, "$1*");

    /* Liste blanche : une fois les fonctions connues retirées, il ne doit
       rester que des chiffres, x, opérateurs et parenthèses. */
    const reste = s.replace(/M\.(asin|acos|atan|sin|cos|tan|ln|log|exp|abs|sqrt|PI|E)/g, "");
    if (!/^[0-9x+\-*/().\s]*$/.test(reste)) return null;

    try {
      const f = new Function("M", "x", '"use strict";return (' + s + ");");
      const essai = f(PORTEE, 1);
      if (typeof essai !== "number") return null;
      return x => {
        const v = f(PORTEE, x);
        return typeof v === "number" && isFinite(v) ? v : NaN;
      };
    } catch (_) { return null; }
  }

  /* ══════════════════════════════════════════════════════════════
     Tracé
     ══════════════════════════════════════════════════════════════ */
  function dimensionner() {
    const r = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(r.width * dpr);
    canvas.height = Math.round(r.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w: r.width, h: r.height };
  }

  const versX = (px, w) => cx + (px - w / 2) / echelle;
  const versY = (py, h) => cy - (py - h / 2) / echelle;
  const pixX  = (x, w) => w / 2 + (x - cx) * echelle;
  const pixY  = (y, h) => h / 2 - (y - cy) * echelle;

  /* Pas de graduation « rond » : 1, 2, 5, 10, 20, 50… selon le zoom. */
  function pasLisible() {
    const brut = 60 / echelle;
    const p = Math.pow(10, Math.floor(Math.log10(brut)));
    const n = brut / p;
    return (n < 1.5 ? 1 : n < 3.5 ? 2 : n < 7.5 ? 5 : 10) * p;
  }

  function tracer() {
    if (!canvas) return;
    const { w, h } = dimensionner();
    ctx.clearRect(0, 0, w, h);

    const pas = pasLisible();
    const x0 = versX(0, w), x1 = versX(w, w);
    const y0 = versY(h, h), y1 = versY(0, h);

    /* Quadrillage */
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(245,242,232,.07)";
    ctx.beginPath();
    for (let x = Math.ceil(x0 / pas) * pas; x <= x1; x += pas) {
      const px = Math.round(pixX(x, w)) + 0.5;
      ctx.moveTo(px, 0); ctx.lineTo(px, h);
    }
    for (let y = Math.ceil(y0 / pas) * pas; y <= y1; y += pas) {
      const py = Math.round(pixY(y, h)) + 0.5;
      ctx.moveTo(0, py); ctx.lineTo(w, py);
    }
    ctx.stroke();

    /* Axes, seulement s'ils sont dans la fenêtre */
    ctx.strokeStyle = "rgba(240,236,224,.35)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    const ax = Math.round(pixX(0, w)) + 0.5, ay = Math.round(pixY(0, h)) + 0.5;
    if (ax > 0 && ax < w) { ctx.moveTo(ax, 0); ctx.lineTo(ax, h); }
    if (ay > 0 && ay < h) { ctx.moveTo(0, ay); ctx.lineTo(w, ay); }
    ctx.stroke();

    /* Graduations chiffrées le long des axes visibles */
    ctx.fillStyle = "rgba(240,236,224,.4)";
    ctx.font = "10px 'DM Mono', monospace";
    const dec = pas < 1 ? String(pas).split(".")[1].length : 0;
    const yTexte = Math.min(Math.max(ay, 12), h - 4);
    ctx.textAlign = "center"; ctx.textBaseline = "top";
    for (let x = Math.ceil(x0 / pas) * pas; x <= x1; x += pas) {
      if (Math.abs(x) < pas / 2) continue;
      ctx.fillText(x.toFixed(dec).replace(".", ","), pixX(x, w), yTexte + 3);
    }
    const xTexte = Math.min(Math.max(ax, 4), w - 6);
    ctx.textAlign = "right"; ctx.textBaseline = "middle";
    for (let y = Math.ceil(y0 / pas) * pas; y <= y1; y += pas) {
      if (Math.abs(y) < pas / 2) continue;
      ctx.fillText(y.toFixed(dec).replace(".", ","), xTexte - 4, pixY(y, h));
    }

    /* Les courbes. On avance pixel par pixel, et on lève le crayon dès que
       la fonction n'est pas définie ou fait un saut : une asymptote ne doit
       pas se voir reliée par un trait vertical parasite. */
    fns.forEach((f, i) => {
      if (!f.on) return;
      const g = compiler(f.expr);
      if (!g) return;
      ctx.strokeStyle = COULEURS[i];
      ctx.lineWidth = 1.9;
      ctx.beginPath();
      let leve = true, yPrec = null;
      for (let px = 0; px <= w; px += 1) {
        const y = g(versX(px, w));
        if (!isFinite(y)) { leve = true; yPrec = null; continue; }
        const py = pixY(y, h);
        const saut = yPrec !== null && Math.abs(py - yPrec) > h * 1.6;
        if (leve || saut) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        leve = false; yPrec = py;
      }
      ctx.stroke();
    });

    /* Lecture sous le curseur : l'abscisse et chaque ordonnée. */
    if (souris) {
      const x = versX(souris.x, w);
      ctx.setLineDash([3, 4]);
      ctx.strokeStyle = "rgba(240,236,224,.22)";
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(souris.x, 0); ctx.lineTo(souris.x, h); ctx.stroke();
      ctx.setLineDash([]);
      const bouts = [];
      fns.forEach((f, i) => {
        if (!f.on) return;
        const g = compiler(f.expr);
        if (!g) return;
        const y = g(x);
        if (!isFinite(y)) return;
        ctx.fillStyle = COULEURS[i];
        ctx.beginPath(); ctx.arc(souris.x, pixY(y, h), 3.2, 0, Math.PI * 2); ctx.fill();
        bouts.push(arrondi(y));
      });
      lecture.textContent = "x = " + arrondi(x) + (bouts.length ? "   y = " + bouts.join(" · ") : "");
    } else {
      lecture.textContent = "";
    }
  }

  const arrondi = v => (Math.round(v * 100) / 100).toString().replace(".", ",");

  /* ══════════════════════════════════════════════════════════════
     Construction
     ══════════════════════════════════════════════════════════════ */
  function construire() {
    if (document.getElementById("mb-graph-btn")) return;

    const style = document.createElement("style");
    style.id = "mb-graph-css";
    style.textContent = CSS;
    document.head.appendChild(style);

    const btn = document.createElement("button");
    btn.id = "mb-graph-btn";
    btn.title = "Grapheur";
    btn.setAttribute("aria-label", "Ouvrir le grapheur de fonctions");
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
        stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 20V4"/><path d="M4 20h16"/>
      <path d="M4.5 16.5c3.2 0 4-9 7.5-9s4.3 6 7.5 6"/>
    </svg>`;

    const panneau = document.createElement("div");
    panneau.id = "mb-graph";
    panneau.innerHTML = `
      <div class="mb-g-head">
        <span class="mb-g-title">Grapheur</span>
        <button class="mb-g-icon mb-g-fit" title="Recentrer le repère" aria-label="Recentrer">⌂</button>
        <button class="mb-g-icon mb-g-close" aria-label="Fermer">✕</button>
      </div>
      <div class="mb-g-board">
        <canvas id="mb-g-canvas"></canvas>
        <div class="mb-g-read" id="mb-g-read"></div>
      </div>
      <div class="mb-g-lines" id="mb-g-lines"></div>
      <div class="mb-g-foot">
        <span>glisser · molette pour zoomer</span>
        <button class="mb-g-reset" type="button">Tout effacer</button>
      </div>`;

    document.body.append(btn, panneau);

    canvas  = panneau.querySelector("#mb-g-canvas");
    ctx     = canvas.getContext("2d");
    lecture = panneau.querySelector("#mb-g-read");

    /* Les deux panneaux flottants occupent le même coin : ouvrir l'un
       referme l'autre, sans quoi ils se superposeraient. */
    btn.addEventListener("click", () => {
      const calc = document.getElementById("mb-calc");
      if (calc) calc.classList.remove("open");
      panneau.classList.toggle("open");
      if (panneau.classList.contains("open")) tracer();
    });
    const boutonCalc = document.getElementById("mb-calc-btn");
    if (boutonCalc) boutonCalc.addEventListener("click", () => panneau.classList.remove("open"));

    panneau.querySelector(".mb-g-close").addEventListener("click", () => panneau.classList.remove("open"));
    panneau.querySelector(".mb-g-fit").addEventListener("click", () => {
      cx = 0; cy = 0; echelle = 32; tracer();
    });
    panneau.querySelector(".mb-g-reset").addEventListener("click", () => {
      fns = fns.map(() => ({ expr: "", on: true }));
      sauver(); construireLignes(); tracer();
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && panneau.classList.contains("open")) panneau.classList.remove("open");
    });

    brancherNavigation();
    construireLignes();

    /* Le panneau est masqué à la construction : sa largeur n'est connue
       qu'à la première ouverture, d'où le tracé différé ci-dessus. */
    window.addEventListener("resize", () => { if (panneau.classList.contains("open")) tracer(); });
  }

  function construireLignes() {
    const hote = document.getElementById("mb-g-lines");
    hote.innerHTML = "";
    const noms = ["f", "g", "h", "p"];

    fns.forEach((f, i) => {
      const ligne = document.createElement("div");
      ligne.className = "mb-g-line";

      const pastille = document.createElement("button");
      pastille.className = "mb-g-dot" + (f.on ? "" : " off");
      pastille.style.background = COULEURS[i];
      pastille.title = "Afficher ou masquer cette courbe";
      pastille.setAttribute("aria-label", "Afficher ou masquer " + noms[i]);

      const nom = document.createElement("span");
      nom.className = "mb-g-name";
      nom.textContent = noms[i] + "(x) =";

      const champ = document.createElement("input");
      champ.type = "text";
      champ.value = f.expr;
      champ.placeholder = i === 0 ? "2x + 1" : "";
      champ.spellcheck = false;
      champ.setAttribute("aria-label", "Expression de " + noms[i]);

      const vider = document.createElement("button");
      vider.className = "mb-g-clear";
      vider.textContent = "✕";
      vider.title = "Effacer";
      vider.setAttribute("aria-label", "Effacer " + noms[i]);

      /* Une saisie invalide se signale par un cadre rouge, sans message :
         l'élève corrige en tapant, il n'a pas besoin d'un diagnostic. */
      function majuscule() {
        f.expr = champ.value;
        const vide = !champ.value.trim();
        ligne.classList.toggle("bad", !vide && !compiler(champ.value));
        sauver();
        tracer();
      }

      champ.addEventListener("input", majuscule);
      pastille.addEventListener("click", () => {
        f.on = !f.on;
        pastille.classList.toggle("off", !f.on);
        sauver(); tracer();
      });
      vider.addEventListener("click", () => { champ.value = ""; majuscule(); champ.focus(); });

      ligne.append(pastille, nom, champ, vider);
      hote.appendChild(ligne);
      if (champ.value.trim() && !compiler(champ.value)) ligne.classList.add("bad");
    });
  }

  /* ── Déplacement et zoom ──────────────────────────────────────── */
  function brancherNavigation() {
    let tire = false, dernier = null;

    canvas.addEventListener("pointerdown", e => {
      tire = true; dernier = { x: e.offsetX, y: e.offsetY };
      canvas.classList.add("drag");
      canvas.setPointerCapture(e.pointerId);
    });

    canvas.addEventListener("pointermove", e => {
      souris = { x: e.offsetX, y: e.offsetY };
      if (tire && dernier) {
        cx -= (e.offsetX - dernier.x) / echelle;
        cy += (e.offsetY - dernier.y) / echelle;
        dernier = { x: e.offsetX, y: e.offsetY };
      }
      tracer();
    });

    const relacher = e => {
      tire = false; dernier = null;
      canvas.classList.remove("drag");
      if (e && e.pointerId !== undefined && canvas.hasPointerCapture(e.pointerId)) {
        canvas.releasePointerCapture(e.pointerId);
      }
    };
    canvas.addEventListener("pointerup", relacher);
    canvas.addEventListener("pointercancel", relacher);
    canvas.addEventListener("pointerleave", e => { relacher(e); souris = null; tracer(); });

    /* Zoom centré sur le curseur : le point visé ne bouge pas. */
    canvas.addEventListener("wheel", e => {
      e.preventDefault();
      const r = canvas.getBoundingClientRect();
      const px = e.clientX - r.left, py = e.clientY - r.top;
      const avantX = versX(px, r.width), avantY = versY(py, r.height);
      const facteur = e.deltaY < 0 ? 1.15 : 1 / 1.15;
      echelle = Math.min(400, Math.max(2, echelle * facteur));
      cx = avantX - (px - r.width / 2) / echelle;
      cy = avantY + (py - r.height / 2) / echelle;
      tracer();
    }, { passive: false });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", construire);
  else construire();
})();
