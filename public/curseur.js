/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — curseur.js

   Le curseur personnalisé du site, extrait de script.js pour être réutilisable.

   Pourquoi : la feuille de style pose `body { cursor: none }` sur toutes les
   pages, mais le curseur de remplacement n'était dessiné que par script.js,
   chargé par app.html seul. Toute page nouvelle héritait donc du curseur
   masqué sans avoir de quoi le remplacer — la souris devenait invisible.

   Le module crée ses deux éléments s'ils manquent, et ne fait rien sur les
   appareils tactiles, où un curseur suiveur n'a pas de sens.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* Sur écran tactile, on rend le curseur système plutôt que d'animer un point
     qui ne suivrait rien. */
  if (window.matchMedia && window.matchMedia("(hover: none)").matches) {
    document.documentElement.style.cursor = "auto";
    const s = document.createElement("style");
    s.textContent = "*, body { cursor: auto !important; }";
    document.head.appendChild(s);
    return;
  }

  function demarrer() {
    let cursor = document.getElementById("cursor");
    let ring   = document.getElementById("cursor-ring");
    if (!cursor) {
      cursor = document.createElement("div");
      cursor.className = "cursor"; cursor.id = "cursor";
      document.body.appendChild(cursor);
    }
    if (!ring) {
      ring = document.createElement("div");
      ring.className = "cursor-ring"; ring.id = "cursor-ring";
      document.body.appendChild(ring);
    }

    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top  = my + "px";
    });

    (function anneau() {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      requestAnimationFrame(anneau);
    })();

    const CIBLES = "a,button,select,input,textarea,.exercise-card,.modal-close,"
                 + ".bord-chap,.cpt-lien,.hero-bord,.home-card";
    document.addEventListener("mouseover", e => {
      if (!e.target.closest(CIBLES)) return;
      cursor.style.width = "5px"; cursor.style.height = "5px";
      ring.style.width = "46px";  ring.style.height = "46px";
      ring.style.borderColor = "rgba(200,185,122,0.6)";
    });
    document.addEventListener("mouseout", e => {
      if (!e.target.closest(CIBLES)) return;
      cursor.style.width = "8px"; cursor.style.height = "8px";
      ring.style.width = "32px";  ring.style.height = "32px";
      ring.style.borderColor = "rgba(200,185,122,0.3)";
    });
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", demarrer);
  else demarrer();
})();
