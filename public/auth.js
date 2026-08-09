/* ═══════════════════════════════════════════════════════════
   Polymates — auth.js : garde d'accès partagé
   Usage :  <script src="auth.js" data-protect></script>          → page réservée aux connectés
            <script src="auth.js" data-protect="admin"></script>  → page réservée à l'admin
            <script src="auth.js"></script>                       → pastille seulement (page publique)
   Sans backend (GitHub Pages) : session « Invité (démo) » locale.
   ═══════════════════════════════════════════════════════════ */
(function () {
  const TOKEN_KEY = "mb_token", USER_KEY = "mb_user";
  const script = document.currentScript;
  const protect = script ? script.getAttribute("data-protect") : null; // null | '' | 'admin'

  const MB_AUTH = {
    token() { return localStorage.getItem(TOKEN_KEY); },
    user()  { try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch { return null; } },
    isDemo(){ const u = this.user(); return !!(u && u.demo); },
    isAdmin(){ const u = this.user(); return !!(u && u.role === "admin"); },
    save(token, user) {
      if (token) localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    },
    logout() {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      location.href = "login.html";
    },
    headers(extra) {
      const h = Object.assign({ "Content-Type": "application/json" }, extra || {});
      const t = this.token();
      if (t) h["Authorization"] = "Bearer " + t;
      return h;
    },
    /* fetch authentifié : déconnecte proprement sur 401 */
    async apiFetch(url, opts) {
      const res = await fetch(url, Object.assign({}, opts, { headers: this.headers(opts && opts.headers) }));
      if (res.status === 401 && !this.isDemo()) {
        localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(USER_KEY);
        location.href = "login.html?next=" + encodeURIComponent(location.pathname.split("/").pop() + location.search);
        throw new Error("Session expirée");
      }
      return res;
    },
    /* le backend est-il joignable ? (mis en cache) */
    _ping: null,
    async hasBackend() {
      if (this._ping === null) {
        this._ping = fetch("/auth/ping").then(r => r.ok).catch(() => false);
      }
      return this._ping;
    },
  };
  window.MB_AUTH = MB_AUTH;

  /* ── pastille utilisateur (haut droite) ── */
  function renderChip() {
    if (document.getElementById("mb-chip")) return;
    const u = MB_AUTH.user();
    const chip = document.createElement("div");
    chip.id = "mb-chip";
    chip.innerHTML = `<style>
      #mb-chip{position:fixed;top:14px;right:16px;z-index:90;display:flex;align-items:center;gap:.5rem;
        font-family:'DM Sans',system-ui,sans-serif;font-size:.8rem;}
      #mb-chip .mb-pill{display:flex;align-items:center;gap:.55rem;background:rgba(20,19,15,.92);
        border:1px solid rgba(200,185,122,.3);border-radius:999px;padding:.4rem .9rem;color:#f0ece0;
        backdrop-filter:blur(6px);box-shadow:0 6px 24px -8px rgba(0,0,0,.6);}
      #mb-chip .mb-dot{width:8px;height:8px;border-radius:50%;background:#82d2a0;flex:none;}
      #mb-chip .mb-role{font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;
        color:#c8b97a;border:1px solid rgba(200,185,122,.4);border-radius:999px;padding:.1rem .45rem;}
      #mb-chip a,#mb-chip button{background:none;border:none;color:rgba(240,236,224,.65);cursor:pointer;
        font:inherit;text-decoration:none;padding:0;transition:color .2s;}
      #mb-chip a:hover,#mb-chip button:hover{color:#c8b97a;}
      #mb-chip .mb-sep{color:rgba(240,236,224,.25);}
    </style>`;
    const pill = document.createElement("div");
    pill.className = "mb-pill";
    if (u) {
      pill.innerHTML = `<span class="mb-dot"></span><span>${escapeHtml(u.pseudo)}</span>` +
        (u.role === "admin" ? `<span class="mb-role">admin</span>` : "") +
        (u.demo ? `<span class="mb-role" style="color:rgba(230,130,110,.9);border-color:rgba(230,130,110,.4)">démo</span>` : "") +
        (u.role === "admin" ? `<span class="mb-sep">·</span><a href="admin.html">⚙ Admin</a>` : "") +
        `<span class="mb-sep">·</span><button id="mb-logout">Déconnexion</button>`;
    } else {
      pill.innerHTML = `<a href="login.html">Se connecter →</a>`;
    }
    chip.appendChild(pill);
    document.body.appendChild(chip);
    const btn = document.getElementById("mb-logout");
    if (btn) btn.onclick = () => MB_AUTH.logout();
  }

  function escapeHtml(t) {
    return String(t).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  }

  function toLogin() {
    const next = location.pathname.split("/").pop() + location.search;
    location.href = "login.html?next=" + encodeURIComponent(next);
  }

  /* ── garde d'accès ── */
  async function guard() {
    if (protect === null) { renderChip(); return; }   // page publique : pastille seulement
    let u = MB_AUTH.user();
    const backend = await MB_AUTH.hasBackend();

    // Un backend est présent mais l'utilisateur n'a qu'une session démo (sans vrai jeton) :
    // cette session locale n'est pas valable en ligne → on la purge et on demande une vraie connexion.
    if (backend && u && (u.demo || !MB_AUTH.token())) {
      localStorage.removeItem("mb_token");
      localStorage.removeItem("mb_user");
      u = null;
    }

    if (!u) {
      if (backend) { toLogin(); return; }
      // pas de backend → session invité locale (mode démo)
      if (protect === "admin") { toLogin(); return; } // l'admin démo passe par login.html
      MB_AUTH.save(null, { pseudo: "Invité", role: "eleve", demo: true });
      renderChip(); return;
    }

    if (protect === "admin" && u.role !== "admin") { location.href = "app.html"; return; }
    renderChip();

    // validation silencieuse du jeton côté serveur (hors démo)
    if (!u.demo && MB_AUTH.token()) {
      MB_AUTH.hasBackend().then(ok => { if (ok) MB_AUTH.apiFetch("/auth/me").catch(() => {}); });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", guard);
  else guard();
})();
