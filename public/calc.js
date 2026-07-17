/* ═══════════════════════════════════════════════════════════
   MathBase — calc.js : calculatrice flottante partagée
   S'injecte sur toute page qui charge ce script : un bouton
   rond en bas à droite ouvre/ferme une calculatrice scientifique.
   Aucune dépendance. Évaluation sécurisée (pas de eval brut).
   ═══════════════════════════════════════════════════════════ */
(function () {
  if (window.__mbCalcLoaded) return;
  window.__mbCalcLoaded = true;

  const css = `
  #mb-calc-fab{position:fixed;right:20px;bottom:20px;z-index:300;width:54px;height:54px;border-radius:50%;
    background:#c8b97a;color:#0b0b09;border:none;cursor:pointer;font-size:1.4rem;
    box-shadow:0 8px 28px -6px rgba(0,0,0,.6);transition:transform .2s;display:flex;align-items:center;justify-content:center;}
  #mb-calc-fab:hover{transform:translateY(-3px) scale(1.05);}
  #mb-calc-panel{position:fixed;right:20px;bottom:86px;z-index:300;width:300px;max-width:calc(100vw - 40px);
    background:#14130f;border:1px solid rgba(200,185,122,.3);border-radius:16px;
    box-shadow:0 24px 60px -18px rgba(0,0,0,.8);padding:1rem;
    font-family:'DM Sans',system-ui,sans-serif;opacity:0;transform:translateY(10px) scale(.97);
    pointer-events:none;transition:.2s;}
  #mb-calc-panel.open{opacity:1;transform:none;pointer-events:all;}
  #mb-calc-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem;}
  #mb-calc-head span{font-family:'DM Mono',monospace;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:#7a7668;}
  #mb-calc-head button{background:none;border:none;color:#7a7668;cursor:pointer;font-size:1.1rem;line-height:1;}
  #mb-calc-head button:hover{color:#c8b97a;}
  #mb-calc-screen{background:#0b0b09;border:1px solid rgba(255,255,255,.08);border-radius:10px;
    padding:.7rem .85rem;margin-bottom:.7rem;text-align:right;min-height:64px;
    display:flex;flex-direction:column;justify-content:flex-end;gap:.15rem;}
  #mb-calc-expr{color:#7a7668;font-family:'DM Mono',monospace;font-size:.82rem;min-height:1rem;word-break:break-all;}
  #mb-calc-out{color:#f0ece0;font-family:'DM Mono',monospace;font-size:1.5rem;word-break:break-all;}
  #mb-calc-out.err{color:#c87a7a;font-size:.95rem;}
  #mb-calc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:.4rem;}
  #mb-calc-grid.sci{grid-template-columns:repeat(5,1fr);}
  .mb-key{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:9px;
    color:#f0ece0;font-family:'DM Mono',monospace;font-size:.95rem;padding:.6rem 0;cursor:pointer;transition:.12s;}
  .mb-key:hover{background:rgba(255,255,255,.09);}
  .mb-key:active{transform:scale(.94);}
  .mb-key.op{color:#c8b97a;}
  .mb-key.fn{color:#7ac8a0;font-size:.8rem;}
  .mb-key.eq{background:#c8b97a;color:#0b0b09;border-color:#c8b97a;font-weight:600;}
  .mb-key.eq:hover{background:#d4c68a;}
  .mb-key.clr{color:#c87a7a;}
  .mb-key.wide{grid-column:span 2;}
  #mb-calc-sci-toggle{margin-top:.6rem;width:100%;background:none;border:1px solid rgba(255,255,255,.1);
    border-radius:8px;color:#7a7668;font-family:'DM Mono',monospace;font-size:.68rem;letter-spacing:.1em;
    text-transform:uppercase;padding:.45rem;cursor:pointer;transition:.15s;}
  #mb-calc-sci-toggle:hover{color:#c8b97a;border-color:rgba(200,185,122,.3);}
  @media(max-width:420px){#mb-calc-panel{right:12px;left:12px;width:auto;}}
  `;

  const st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  const fab = document.createElement("button");
  fab.id = "mb-calc-fab";
  fab.title = "Calculatrice";
  fab.innerHTML = "🖩";
  fab.setAttribute("aria-label", "Ouvrir la calculatrice");

  const panel = document.createElement("div");
  panel.id = "mb-calc-panel";
  panel.innerHTML = `
    <div id="mb-calc-head"><span>Calculatrice</span><button id="mb-calc-close" aria-label="Fermer">✕</button></div>
    <div id="mb-calc-screen">
      <div id="mb-calc-expr"></div>
      <div id="mb-calc-out">0</div>
    </div>
    <div id="mb-calc-grid"></div>
    <button id="mb-calc-sci-toggle">Mode scientifique</button>`;

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  const exprEl = panel.querySelector("#mb-calc-expr");
  const outEl  = panel.querySelector("#mb-calc-out");
  const grid   = panel.querySelector("#mb-calc-grid");
  let expr = "";
  let sci  = false;

  const basicKeys = [
    ["C","clr"],["(","op"],[")","op"],["÷","op"],
    ["7"],["8"],["9"],["×","op"],
    ["4"],["5"],["6"],["−","op"],
    ["1"],["2"],["3"],["+","op"],
    ["0"],[","],["⌫","clr"],["=","eq"],
  ];
  const sciKeys = [
    ["C","clr"],["(","op"],[")","op"],["÷","op"],["^","op"],
    ["sin","fn"],["cos","fn"],["tan","fn"],["√","fn"],["π","fn"],
    ["7"],["8"],["9"],["×","op"],["ln","fn"],
    ["4"],["5"],["6"],["−","op"],["log","fn"],
    ["1"],["2"],["3"],["+","op"],["e","fn"],
    ["0"],[","],["⌫","clr"],["=","eq"],["!","fn"],
  ];

  function renderKeys() {
    grid.className = sci ? "sci" : "";
    grid.innerHTML = "";
    (sci ? sciKeys : basicKeys).forEach(([label, cls]) => {
      const b = document.createElement("button");
      b.className = "mb-key" + (cls ? " " + cls : "");
      b.textContent = label;
      b.onclick = () => press(label);
      grid.appendChild(b);
    });
  }

  function press(k) {
    if (k === "C") { expr = ""; show("0"); return; }
    if (k === "⌫") { expr = expr.slice(0, -1); showLive(); return; }
    if (k === "=") { compute(); return; }
    const map = {
      "×": "*", "÷": "/", "−": "-", ",": ".", "π": "pi", "√": "sqrt(",
      "sin": "sin(", "cos": "cos(", "tan": "tan(", "ln": "ln(", "log": "log(", "e": "e", "^": "^", "!": "!",
    };
    expr += (map[k] !== undefined ? map[k] : k);
    showLive();
  }

  function show(v, err) {
    outEl.textContent = v;
    outEl.classList.toggle("err", !!err);
  }
  function showLive() {
    exprEl.textContent = pretty(expr);
    try {
      if (expr.trim() === "") { show("0"); return; }
      const r = evalExpr(expr);
      if (r !== null && isFinite(r)) show(fmt(r));
    } catch { /* aperçu silencieux */ }
  }
  function compute() {
    try {
      const r = evalExpr(expr);
      if (r === null || !isFinite(r)) { show("Erreur", true); return; }
      exprEl.textContent = pretty(expr) + " =";
      show(fmt(r));
      expr = String(r);
    } catch { show("Erreur", true); }
  }

  function pretty(e) {
    return e.replace(/\*/g, "×").replace(/\//g, "÷").replace(/pi/g, "π")
            .replace(/sqrt\(/g, "√(").replace(/\bln\(/g, "ln(").replace(/\blog\(/g, "log(");
  }
  function fmt(n) {
    const r = Math.round((n + Number.EPSILON) * 1e10) / 1e10;
    return String(r).replace(".", ",");
  }

  /* ── évaluateur sûr : tokenise puis shunting-yard, aucune eval() ── */
  function evalExpr(input) {
    // pré-traitement des fonctions et constantes en jetons
    let s = input.replace(/\s+/g, "");
    if (!s) return null;
    // factorielle postfixe : n! → fact(n)  (gère nombre ou parenthèse)
    s = s.replace(/(\d+(?:\.\d+)?|\([^()]*\))!/g, "fact($1)");

    const tokens = tokenize(s);
    const rpn = toRPN(tokens);
    return evalRPN(rpn);
  }

  const FUNCS = {
    sqrt: Math.sqrt, sin: x => Math.sin(rad(x)), cos: x => Math.cos(rad(x)), tan: x => Math.tan(rad(x)),
    ln: Math.log, log: Math.log10, fact: factorial,
  };
  const CONSTS = { pi: Math.PI, e: Math.E };
  function rad(x) { return x * Math.PI / 180; }
  function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) return NaN;
    let r = 1; for (let i = 2; i <= n; i++) r *= i; return r;
  }

  function tokenize(s) {
    const out = [];
    let i = 0;
    while (i < s.length) {
      const c = s[i];
      if (/[0-9.]/.test(c)) {
        let num = "";
        while (i < s.length && /[0-9.]/.test(s[i])) num += s[i++];
        out.push({ t: "num", v: parseFloat(num) });
        continue;
      }
      if (/[a-z]/i.test(c)) {
        let name = "";
        while (i < s.length && /[a-z]/i.test(s[i])) name += s[i++];
        if (FUNCS[name]) out.push({ t: "func", v: name });
        else if (CONSTS[name] !== undefined) out.push({ t: "num", v: CONSTS[name] });
        else throw new Error("nom inconnu");
        continue;
      }
      if ("+-*/^".includes(c)) {
        // moins unaire
        const prev = out[out.length - 1];
        if (c === "-" && (!prev || prev.t === "op" || prev.v === "(")) out.push({ t: "num", v: 0 });
        out.push({ t: "op", v: c });
        i++; continue;
      }
      if (c === "(" || c === ")") { out.push({ t: c === "(" ? "(" : ")" }); i++; continue; }
      if (c === ",") { out.push({ t: "sep" }); i++; continue; }
      throw new Error("caractère invalide");
    }
    return out;
  }

  const PREC = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
  function toRPN(tokens) {
    const out = [], stack = [];
    tokens.forEach(tok => {
      if (tok.t === "num") out.push(tok);
      else if (tok.t === "func") stack.push(tok);
      else if (tok.t === "sep") { while (stack.length && stack[stack.length-1].t !== "(") out.push(stack.pop()); }
      else if (tok.t === "op") {
        while (stack.length) {
          const top = stack[stack.length - 1];
          if (top.t === "op" && (PREC[top.v] > PREC[tok.v] || (PREC[top.v] === PREC[tok.v] && tok.v !== "^"))) out.push(stack.pop());
          else break;
        }
        stack.push(tok);
      } else if (tok.t === "(") stack.push(tok);
      else if (tok.t === ")") {
        while (stack.length && stack[stack.length-1].t !== "(") out.push(stack.pop());
        if (!stack.length) throw new Error("parenthèses");
        stack.pop();
        if (stack.length && stack[stack.length-1].t === "func") out.push(stack.pop());
      }
    });
    while (stack.length) { const s = stack.pop(); if (s.t === "(") throw new Error("parenthèses"); out.push(s); }
    return out;
  }
  function evalRPN(rpn) {
    const st = [];
    rpn.forEach(tok => {
      if (tok.t === "num") st.push(tok.v);
      else if (tok.t === "func") { const a = st.pop(); st.push(FUNCS[tok.v](a)); }
      else if (tok.t === "op") {
        const b = st.pop(), a = st.pop();
        switch (tok.v) {
          case "+": st.push(a + b); break;
          case "-": st.push(a - b); break;
          case "*": st.push(a * b); break;
          case "/": st.push(a / b); break;
          case "^": st.push(Math.pow(a, b)); break;
        }
      }
    });
    if (st.length !== 1) throw new Error("expression");
    return st[0];
  }

  /* ── ouverture / fermeture ── */
  function toggle(open) {
    const willOpen = open === undefined ? !panel.classList.contains("open") : open;
    panel.classList.toggle("open", willOpen);
    fab.innerHTML = willOpen ? "✕" : "🖩";
  }
  fab.onclick = () => toggle();
  panel.querySelector("#mb-calc-close").onclick = () => toggle(false);
  panel.querySelector("#mb-calc-sci-toggle").onclick = (e) => {
    sci = !sci;
    e.target.textContent = sci ? "Mode simple" : "Mode scientifique";
    renderKeys();
  };

  // saisie clavier quand la calculatrice est ouverte
  document.addEventListener("keydown", (e) => {
    if (!panel.classList.contains("open")) return;
    const k = e.key;
    if (/[0-9]/.test(k)) { press(k); e.preventDefault(); }
    else if ("+-*/^()".includes(k)) { press({ "*": "×", "/": "÷", "-": "−" }[k] || k); e.preventDefault(); }
    else if (k === "." || k === ",") { press(","); e.preventDefault(); }
    else if (k === "Enter" || k === "=") { press("="); e.preventDefault(); }
    else if (k === "Backspace") { press("⌫"); e.preventDefault(); }
    else if (k === "Escape") { toggle(false); }
  });

  renderKeys();
})();
