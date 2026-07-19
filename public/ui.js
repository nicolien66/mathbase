/* ═══════════════════════════════════════════════════════════
   MathBase — ui.js : interface partagée entre toutes les pages
   1. Barre de navigation universelle (identique partout)
   2. Calculatrice flottante (bouton fixe en bas à gauche)
   Usage : <script src="ui.js" defer></script> sur chaque page.
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const PAGE = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  /* ────────────────────────────────────────────────────────
     1. NAVIGATION UNIVERSELLE
     ──────────────────────────────────────────────────────── */
  const TABS = [
    { label: "Exercices",    href: "app.html#exercices",    hashes: ["exercices", "browse"] },
    { label: "Annales",      href: "app.html#annales",      hashes: ["annales"] },
    { label: "Entraînement", href: "app.html#entrainement", hashes: ["entrainement", "seance"] },
    { label: "Problèmes",    href: "app.html#problemes",    hashes: ["probleme", "problemes"] },
    { label: "Examen",       href: "app.html#examen",       hashes: ["examen"] },
    { label: "Ajouter",      href: "app.html#add",          hashes: ["add", "ajouter"] },
    { label: "Cours animés", href: "cours.html",            pages:  ["cours.html"] },
    { label: "Tutoriels",    href: "tutoriels.html",        pages:  ["tutoriels.html", "tutoriel.html"] },
    { label: "Arbre",        href: "tree.html",             pages:  ["tree.html"] },
  ];

  const NAV_CSS = `
    #mb-nav{position:sticky;top:0;z-index:150;display:flex;align-items:center;gap:1rem;
      height:64px;padding:0 1.4rem;background:rgba(11,11,9,.92);backdrop-filter:blur(16px);
      -webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.07);
      font-family:'DM Sans',system-ui,sans-serif;}
    #mb-nav .mb-logo{font-family:'Playfair Display',Georgia,serif;font-size:1.35rem;
      color:#f0ece0;text-decoration:none;white-space:nowrap;flex:none;}
    #mb-nav .mb-logo em{font-style:italic;color:#c8b97a;}
    #mb-nav .mb-tabs{display:flex;gap:.25rem;flex:1;min-width:0;overflow-x:auto;
      scrollbar-width:none;-ms-overflow-style:none;}
    #mb-nav .mb-tabs::-webkit-scrollbar{display:none;}
    #mb-nav .mb-tab{background:none;border:none;color:rgba(240,236,224,.45);font:inherit;
      font-size:.85rem;padding:.45rem .8rem;border-radius:6px;cursor:pointer;transition:.2s;
      text-decoration:none;white-space:nowrap;flex:none;}
    #mb-nav .mb-tab:hover{color:#f0ece0;background:#181815;}
    #mb-nav .mb-tab.active{color:#f0ece0;background:#181815;box-shadow:inset 0 -2px 0 #c8b97a;}
    #mb-nav .mb-cta{font-size:.8rem;font-weight:500;background:#c8b97a;color:#0b0b09;border:none;
      border-radius:8px;padding:.55rem 1.1rem;cursor:pointer;text-decoration:none;white-space:nowrap;
      flex:none;margin-right:11.5rem;transition:transform .15s;}
    #mb-nav .mb-cta:hover{transform:translateY(-1px);}
    @media (max-width:1100px){ #mb-nav .mb-cta{display:none;} }
    @media (max-width:700px){ #mb-nav{padding:0 1rem;gap:.7rem;} }
  `;

  function currentHash() { return (location.hash || "").replace("#", ""); }

  function buildNav() {
    // Retire toute barre de navigation propre à la page → une seule barre, identique partout.
    document.querySelectorAll("nav").forEach(n => n.remove());
    if (document.getElementById("mb-nav")) return;

    const header = document.createElement("header");
    header.id = "mb-nav";

    const logo = document.createElement("a");
    logo.className = "mb-logo";
    logo.href = "app.html";
    logo.innerHTML = "Math<em>Base</em>";
    header.appendChild(logo);

    const tabsEl = document.createElement("div");
    tabsEl.className = "mb-tabs";
    TABS.forEach(t => {
      const a = document.createElement("a");
      a.className = "mb-tab";
      a.href = t.href;
      a.textContent = t.label;
      a.addEventListener("click", () => {
        // Sur app.html : si le hash ne change pas, hashchange ne se déclenche pas → on route à la main.
        if (t.hashes && PAGE === "app.html") {
          const target = t.href.split("#")[1] || "";
          if (currentHash() === target && typeof window.routeFromHash === "function") {
            setTimeout(window.routeFromHash, 0);
          }
        }
        setActive(t);
      });
      t._el = a;
      tabsEl.appendChild(a);
    });
    header.appendChild(tabsEl);

    const cta = document.createElement("a");
    cta.className = "mb-cta";
    cta.href = "app.html#entrainement";
    cta.textContent = "Démarrer une séance →";
    header.appendChild(cta);

    document.body.prepend(header);
    highlightFromLocation();
    window.addEventListener("hashchange", highlightFromLocation);
  }

  function setActive(tab) {
    TABS.forEach(t => t._el && t._el.classList.toggle("active", t === tab));
  }

  function highlightFromLocation() {
    const h = currentHash();
    let active = null;
    if (PAGE === "app.html") {
      active = TABS.find(t => t.hashes && t.hashes.includes(h)) || null;
    } else {
      active = TABS.find(t => t.pages && t.pages.includes(PAGE)) || null;
    }
    TABS.forEach(t => t._el && t._el.classList.toggle("active", t === active));
  }

  /* ────────────────────────────────────────────────────────
     2. CALCULATRICE FLOTTANTE (bas gauche, toutes les pages)
     ──────────────────────────────────────────────────────── */
  const CALC_CSS = `
    #mb-calc-btn{position:fixed;bottom:18px;left:18px;z-index:800;width:52px;height:52px;
      border-radius:50%;background:rgba(20,19,15,.95);border:1px solid rgba(200,185,122,.45);
      color:#c8b97a;cursor:pointer;display:flex;align-items:center;justify-content:center;
      box-shadow:0 8px 28px -8px rgba(0,0,0,.7);transition:transform .15s,background .2s;}
    #mb-calc-btn:hover{transform:translateY(-2px);background:rgba(200,185,122,.14);}
    #mb-calc-btn svg{width:24px;height:24px;}
    #mb-calc{position:fixed;bottom:82px;left:18px;z-index:800;width:264px;
      background:#14130f;border:1px solid rgba(200,185,122,.35);border-radius:16px;
      box-shadow:0 30px 80px -20px rgba(0,0,0,.85);padding:.9rem;display:none;
      font-family:'DM Sans',system-ui,sans-serif;}
    #mb-calc.open{display:block;animation:mbCalcIn .18s ease;}
    @keyframes mbCalcIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
    #mb-calc .mb-calc-head{display:flex;align-items:center;justify-content:space-between;
      margin-bottom:.6rem;}
    #mb-calc .mb-calc-title{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(240,236,224,.45);}
    #mb-calc .mb-calc-close{background:none;border:none;color:rgba(240,236,224,.45);cursor:pointer;
      font-size:.9rem;padding:.1rem .3rem;transition:color .2s;}
    #mb-calc .mb-calc-close:hover{color:#e6826e;}
    #mb-calc .mb-calc-screen{background:rgba(245,242,232,.05);border:1px solid rgba(255,255,255,.08);
      border-radius:10px;padding:.55rem .7rem .5rem;margin-bottom:.7rem;text-align:right;min-height:58px;}
    #mb-calc .mb-calc-expr{font-family:'DM Mono',monospace;font-size:.85rem;color:#f0ece0;
      min-height:1.2em;word-break:break-all;}
    #mb-calc .mb-calc-res{font-family:'DM Mono',monospace;font-size:1.05rem;color:#c8b97a;min-height:1.3em;}
    #mb-calc .mb-calc-res.err{color:#e6826e;font-size:.8rem;}
    #mb-calc .mb-calc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:.4rem;}
    #mb-calc .mb-key{background:rgba(245,242,232,.05);border:1px solid rgba(255,255,255,.08);
      border-radius:9px;color:#f0ece0;font:inherit;font-size:.95rem;padding:.5rem 0;cursor:pointer;
      transition:background .15s,border-color .15s;}
    #mb-calc .mb-key:hover{background:rgba(245,242,232,.1);}
    #mb-calc .mb-key.op{color:#c8b97a;}
    #mb-calc .mb-key.fn{font-size:.85rem;color:rgba(240,236,224,.7);}
    #mb-calc .mb-key.danger{color:#e6826e;}
    #mb-calc .mb-key.eq{background:#c8b97a;color:#0b0b09;font-weight:600;border-color:transparent;}
    #mb-calc .mb-key.eq:hover{background:#d6c98e;}
    @media (max-width:420px){ #mb-calc{width:calc(100vw - 36px);} }
  `;

  const KEYS = [
    ["C","danger"],["(","fn"],[")","fn"],["⌫","danger"],
    ["7",""],["8",""],["9",""],["÷","op"],
    ["4",""],["5",""],["6",""],["×","op"],
    ["1",""],["2",""],["3",""],["−","op"],
    ["0",""],[",",""],["%","fn"],["+","op"],
    ["√","fn"],["x²","fn"],["π","fn"],["=","eq"],
  ];

  let expr = "";

  function buildCalc() {
    if (document.getElementById("mb-calc-btn")) return;

    const btn = document.createElement("button");
    btn.id = "mb-calc-btn";
    btn.title = "Calculatrice";
    btn.setAttribute("aria-label", "Ouvrir la calculatrice");
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
      <rect x="5" y="3" width="14" height="18" rx="2.5"/>
      <rect x="8" y="6" width="8" height="3.4" rx="1" fill="currentColor" stroke="none" opacity=".85"/>
      <line x1="8.6" y1="13" x2="8.6" y2="13"/><line x1="12" y1="13" x2="12" y2="13"/><line x1="15.4" y1="13" x2="15.4" y2="13"/>
      <line x1="8.6" y1="16.6" x2="8.6" y2="16.6"/><line x1="12" y1="16.6" x2="12" y2="16.6"/><line x1="15.4" y1="16.6" x2="15.4" y2="16.6"/>
    </svg>`;

    const panel = document.createElement("div");
    panel.id = "mb-calc";
    panel.innerHTML = `
      <div class="mb-calc-head">
        <span class="mb-calc-title">Calculatrice</span>
        <button class="mb-calc-close" aria-label="Fermer">✕</button>
      </div>
      <div class="mb-calc-screen">
        <div class="mb-calc-expr" id="mb-calc-expr">&nbsp;</div>
        <div class="mb-calc-res" id="mb-calc-res">0</div>
      </div>
      <div class="mb-calc-grid" id="mb-calc-grid"></div>`;

    const grid = panel.querySelector("#mb-calc-grid");
    KEYS.forEach(([k, cls]) => {
      const b = document.createElement("button");
      b.className = "mb-key" + (cls ? " " + cls : "");
      b.textContent = k;
      b.addEventListener("click", () => press(k));
      grid.appendChild(b);
    });

    btn.addEventListener("click", () => panel.classList.toggle("open"));
    panel.querySelector(".mb-calc-close").addEventListener("click", () => panel.classList.remove("open"));

    document.addEventListener("keydown", e => {
      if (!panel.classList.contains("open")) return;
      const tag = (document.activeElement && document.activeElement.tagName) || "";
      if (["INPUT", "TEXTAREA", "SELECT"].includes(tag) || document.activeElement.isContentEditable) return;
      const map = { "*": "×", "/": "÷", "-": "−", ".": ",", "Enter": "=", "=": "=", "Backspace": "⌫", "Escape": "esc" };
      const k = map[e.key] !== undefined ? map[e.key] : e.key;
      if (k === "esc") { panel.classList.remove("open"); return; }
      if (/^[0-9]$/.test(k) || ["+", "−", "×", "÷", "(", ")", ",", "%", "="].includes(k)) {
        e.preventDefault();
        press(k);
      }
    });

    document.body.append(btn, panel);
  }

  function press(k) {
    if (k === "C") { expr = ""; }
    else if (k === "⌫") { expr = expr.slice(0, -1); }
    else if (k === "=") { commit(); return; }
    else if (k === "x²") { expr += "²"; }
    else { expr += k; }
    refresh(false);
  }

  function refresh(final) {
    const exprEl = document.getElementById("mb-calc-expr");
    const resEl = document.getElementById("mb-calc-res");
    exprEl.innerHTML = expr ? escapeHtml(expr) : "&nbsp;";
    const r = evaluate(expr);
    resEl.classList.toggle("err", r.err && final);
    if (!expr) resEl.textContent = "0";
    else if (r.err) resEl.textContent = final ? "Erreur" : "…";
    else resEl.textContent = r.text;
  }

  function commit() {
    const r = evaluate(expr);
    if (!r.err) expr = r.text;
    refresh(true);
  }

  function evaluate(src) {
    if (!src.trim()) return { err: true };
    let s = src
      .replace(/,/g, ".")
      .replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-")
      .replace(/π/g, "(Math.PI)")
      .replace(/²/g, "**2")
      .replace(/√\s*\(/g, "Math.sqrt(")
      .replace(/√\s*([0-9.]+)/g, "Math.sqrt($1)")
      .replace(/%/g, "/100")
      .replace(/(\d)\s*(?=Math\.|\()/g, "$1*");   // 2π, 3(4+1) → multiplication implicite
    // Liste blanche stricte : chiffres, opérateurs, parenthèses, Math.sqrt / Math.PI uniquement.
    if (!/^[0-9+\-*/().\s]*$/.test(s.replace(/Math\.(sqrt|PI)/g, ""))) return { err: true };
    try {
      const v = new Function('"use strict";return (' + s + ")")();
      if (typeof v !== "number" || !isFinite(v)) return { err: true };
      const rounded = Math.round(v * 1e10) / 1e10;
      return { err: false, value: rounded, text: String(rounded).replace(".", ",") };
    } catch { return { err: true }; }
  }

  function escapeHtml(t) {
    return String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ────────────────────────────────────────────────────────
     Initialisation
     ──────────────────────────────────────────────────────── */
  function init() {
    const style = document.createElement("style");
    style.id = "mb-ui-css";
    style.textContent = NAV_CSS + CALC_CSS;
    document.head.appendChild(style);
    buildNav();
    buildCalc();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
