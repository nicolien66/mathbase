/* ═══════════════════════════════════════════════════════════
   POLYMATES — TABLEAU INTERACTIF
   Tableau que l'élève complète directement, case par case.

   Sert à tous les exercices comportant un tableau : proportionnalité,
   grandeurs quotients, pourcentages… Les cases grisées sont données,
   les cases vides sont à remplir.

   Une case peut aussi attendre une RÉPONSE PAR CHOIX (oui/non), ce qui
   permet de poser « ce tableau est-il un tableau de proportionnalité ? »
   sans quitter le plateau.

   Champ « calcul » : quand l'exercice l'exige (produit en croix), un
   second champ demande d'ÉCRIRE LE CALCUL avant le résultat. Il compte
   dans la note : une bonne valeur obtenue sans calcul écrit ne vaut que
   la moitié des points.

   Contrat exposé (window.MB_TABLEAU), calqué sur MB_QUADRILLAGE :
     monter(params, hote)      → instance
     instance.lire()           → { cellules:{...}, choix, calcul }
     instance.corriger(rep)    → superpose la correction, fige le plateau
     verifier(etat, reponse)   → { ok, score, details… }   ← PURE, testable
     installer(params, hote)   → plateau complet (validation comprise)
     apercu / installerApercu  → version figée pour le catalogue

   params = {
     widget: "tableau",
     titre: "Prix en fonction de la masse",
     lignes: [ { entete:"Masse (kg)", cellules:[1, 3, 5] },
               { entete:"Prix (€)",   cellules:[2.5, null, null] } ],
     choix: { question:"Ce tableau est-il proportionnel ?",
              options:["Oui","Non"] },                      // facultatif
     calcul: { consigne:"Écris le calcul qui donne la valeur manquante." },
     reponse: { cellules:{ "1,1":7.5, "1,2":12.5 },
                choix:"Oui", calcul:{ valeur:7.5, doitContenir:[3, 2.5, 1] } }
   }
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── nombres : une virgule vaut un point, la casse des espaces est ignorée ── */
  function nombre(t) {
    if (t === null || t === undefined) return null;
    if (typeof t === "number") return t;
    const s = String(t).trim().replace(/\s/g, "").replace(",", ".").replace("−", "-");
    if (!s || !/^-?\d*\.?\d+$/.test(s)) return null;
    return Number(s);
  }
  const proche = (a, b) => a !== null && b !== null &&
    Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(b));

  /* ── évaluation d'un calcul écrit par l'élève ──
     Volontairement minimaliste : chiffres et opérateurs seulement. Tout le
     reste est rejeté, donc rien d'exécutable ne peut passer. */
  function evalueCalcul(txt) {
    if (!txt) return null;
    let e = String(txt).trim()
      .replace(/^[a-zA-Z]\s*=\s*/, "")          // « x = 3×2,5/1 » → « 3×2,5/1 »
      .replace(/\s/g, "")
      .replace(/,/g, ".")
      .replace(/[×x]/g, "*")
      .replace(/[÷:]/g, "/")
      .replace(/−/g, "-");
    if (!e || e.length > 80) return null;
    if (!/^[-+*/().\d]+$/.test(e)) return null;
    if (!/[-+*/]/.test(e)) return null;          // un nombre seul n'est pas un calcul
    try {
      const v = Function('"use strict";return (' + e + ')')();
      return Number.isFinite(v) ? v : null;
    } catch { return null; }
  }

  /* Le calcul mentionne-t-il bien les nombres attendus ? Sans cela, un élève
     pourrait écrire n'importe quelle opération donnant le bon résultat. */
  function calculValide(txt, attendu) {
    if (!attendu) return { ok: true, valeur: null, note: 1 };
    const v = evalueCalcul(txt);
    if (v === null) return { ok: false, valeur: null, note: 0, raison: "aucun calcul écrit" };
    if (!proche(v, attendu.valeur)) return { ok: false, valeur: v, note: 0, raison: "le calcul ne donne pas la bonne valeur" };
    const nums = (String(txt).match(/\d+(?:[.,]\d+)?/g) || []).map(x => nombre(x));
    const manquants = (attendu.doitContenir || []).filter(n => !nums.some(x => proche(x, n)));
    if (manquants.length) return { ok: false, valeur: v, note: 0.5,
      raison: "le calcul ne s'appuie pas sur les valeurs du tableau" };
    return { ok: true, valeur: v, note: 1 };
  }

  /* ── correction (pure) ── */
  function verifier(etat, reponse) {
    const att = (reponse && reponse.cellules) || {};
    const faits = (etat && etat.cellules) || {};
    const clefs = Object.keys(att);

    let justes = 0, faux = 0, vides = 0;
    const detail = {};
    clefs.forEach(k => {
      const a = nombre(att[k]), f = nombre(faits[k]);
      if (f === null) { vides++; detail[k] = "vide"; }
      else if (proche(a, f)) { justes++; detail[k] = "juste"; }
      else { faux++; detail[k] = "faux"; }
    });

    /* Choix oui/non éventuel. */
    let choixOk = null;
    if (reponse && reponse.choix != null) {
      choixOk = String((etat && etat.choix) || "").trim().toLowerCase()
              === String(reponse.choix).trim().toLowerCase();
    }

    /* Calcul écrit éventuel. */
    const cal = (reponse && reponse.calcul)
      ? calculValide(etat && etat.calcul, reponse.calcul) : null;

    /* Note : les cases comptent pour l'essentiel, le choix et le calcul
       pèsent chacun le poids d'une case supplémentaire. */
    const parts = clefs.length + (choixOk === null ? 0 : 1) + (cal ? 1 : 0);
    const acquis = justes + (choixOk === true ? 1 : 0) + (cal ? cal.note : 0);
    const ok = faux === 0 && vides === 0 && choixOk !== false && (!cal || cal.ok);

    return { ok, attendus: clefs.length, justes, faux, vides,
             choixOk, calcul: cal, detail,
             score: parts ? Math.max(0, acquis / parts) : 0 };
  }

  /* ── plateau ── */
  function monter(params, hote) {
    const lignes = params.lignes || [];
    const aRemplir = [];
    lignes.forEach((L, i) => (L.cellules || []).forEach((c, j) => {
      if (c === null || c === undefined || c === "") aRemplir.push(i + "," + j);
    }));

    let html = '<div class="mbt-plateau">';
    if (params.titre) html += '<div class="mbt-titre">' + esc(params.titre) + "</div>";
    html += '<div class="mbt-scroll"><table class="mbt-table"><tbody>';
    lignes.forEach((L, i) => {
      html += "<tr>";
      html += '<th scope="row">' + esc(L.entete || "") + "</th>";
      (L.cellules || []).forEach((c, j) => {
        const k = i + "," + j;
        if (c === null || c === undefined || c === "") {
          html += '<td class="mbt-vide"><input type="text" inputmode="decimal" ' +
                  'class="mbt-case" data-k="' + k + '" aria-label="ligne ' + (i + 1) +
                  ', colonne ' + (j + 1) + '"></td>';
        } else {
          html += '<td class="mbt-donnee">' + esc(String(c).replace(".", ",")) + "</td>";
        }
      });
      html += "</tr>";
    });
    html += "</tbody></table></div>";

    if (params.choix) {
      html += '<div class="mbt-choix"><span>' + esc(params.choix.question) + "</span>";
      (params.choix.options || ["Oui", "Non"]).forEach(o => {
        html += '<button type="button" class="mbt-opt" data-o="' + esc(o) + '">' + esc(o) + "</button>";
      });
      html += "</div>";
    }
    if (params.calcul) {
      html += '<div class="mbt-calcul"><label>' +
        esc(params.calcul.consigne || "Écris le calcul.") +
        '</label><input type="text" class="mbt-calc" placeholder="par exemple 3 × 2,5 ÷ 1"></div>';
    }
    html += '<div class="mbt-msg"></div></div>';
    hote.innerHTML = html;

    const cases = [...hote.querySelectorAll(".mbt-case")];
    const calc  = hote.querySelector(".mbt-calc");
    let choix = null, fige = false;

    hote.querySelectorAll(".mbt-opt").forEach(b => {
      b.onclick = () => {
        if (fige) return;
        choix = b.dataset.o;
        hote.querySelectorAll(".mbt-opt").forEach(x => x.classList.toggle("on", x === b));
      };
    });

    return {
      lire() {
        const cellules = {};
        cases.forEach(i => { cellules[i.dataset.k] = i.value; });
        return { cellules, choix, calcul: calc ? calc.value : null };
      },
      vider() {
        if (fige) return;
        cases.forEach(i => { i.value = ""; i.className = "mbt-case"; });
        if (calc) calc.value = "";
        choix = null;
        hote.querySelectorAll(".mbt-opt").forEach(x => x.classList.remove("on"));
      },
      estFige() { return fige; },
      corriger(reponse) {
        fige = true;
        const r = verifier(this.lire(), reponse);
        const att = (reponse && reponse.cellules) || {};
        cases.forEach(i => {
          i.readOnly = true;
          const etat = r.detail[i.dataset.k];
          i.classList.add(etat === "juste" ? "mbt-juste" : "mbt-faux");
          if (etat !== "juste" && att[i.dataset.k] != null) {
            const sp = document.createElement("span");
            sp.className = "mbt-attendu";
            sp.textContent = String(att[i.dataset.k]).replace(".", ",");
            i.parentNode.appendChild(sp);
          }
        });
        if (calc) {
          calc.readOnly = true;
          calc.classList.add(r.calcul && r.calcul.ok ? "mbt-juste" : "mbt-faux");
        }
        hote.querySelectorAll(".mbt-opt").forEach(b => {
          b.disabled = true;
          if (reponse && reponse.choix != null &&
              b.dataset.o.toLowerCase() === String(reponse.choix).toLowerCase())
            b.classList.add("mbt-bonne");
        });
        return r;
      },
    };
  }

  function esc(t) {
    return String(t).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ── aperçu figé ── */
  function apercu(params) {
    let s = '<div class="mbt-plateau">';
    if (params.titre) s += '<div class="mbt-titre">' + esc(params.titre) + "</div>";
    s += '<div class="mbt-scroll"><table class="mbt-table"><tbody>';
    (params.lignes || []).forEach(L => {
      s += "<tr><th>" + esc(L.entete || "") + "</th>";
      (L.cellules || []).forEach(c => {
        s += (c === null || c === undefined || c === "")
          ? '<td class="mbt-vide"><span class="mbt-trou">?</span></td>'
          : '<td class="mbt-donnee">' + esc(String(c).replace(".", ",")) + "</td>";
      });
      s += "</tr>";
    });
    return s + "</tbody></table></div></div>";
  }
  function installerApercu(params, hote, opts) {
    injecterStyles();
    hote.innerHTML = '<div class="' + (opts && opts.papier ? "mbt-sur-papier" : "") + '">' +
      apercu(params) + '</div>';
  }

  /* ── montage clé en main ── */
  function installer(params, hote, opts) {
    injecterStyles();
    /* Fond clair (papier de la séance) : encre sombre plutôt que claire. */
    const papier = !!(opts && opts.papier);
    hote.innerHTML = '<div class="mbt-wrap' + (papier ? " mbt-sur-papier" : "") +
      '"><div class="mbt-board"></div>' +
      '<div class="mbt-foot">' +
        '<button type="button" class="btn-primary" data-a="valider">Valider</button>' +
        '<button type="button" class="mbt-tool" data-a="rejouer">Recommencer</button>' +
        '<p class="mbt-verdict"></p></div></div>';
    const board = hote.querySelector(".mbt-board");
    const verdict = hote.querySelector(".mbt-verdict");
    let inst = monter(params, board);

    hote.querySelector('[data-a="rejouer"]').onclick = () => {
      inst = monter(params, board);
      verdict.textContent = ""; verdict.className = "mbt-verdict";
    };
    hote.querySelector('[data-a="valider"]').onclick = () => {
      if (inst.estFige()) return;
      const r = inst.corriger(params.reponse);
      const b = [];
      if (r.justes) b.push(r.justes + " case" + (r.justes > 1 ? "s" : "") + " juste" + (r.justes > 1 ? "s" : ""));
      if (r.faux) b.push(r.faux + " erreur" + (r.faux > 1 ? "s" : ""));
      if (r.vides) b.push(r.vides + " case" + (r.vides > 1 ? "s" : "") + " vide" + (r.vides > 1 ? "s" : ""));
      if (r.choixOk === false) b.push("mauvaise réponse à la question");
      if (r.calcul && !r.calcul.ok) b.push("calcul : " + r.calcul.raison);
      verdict.textContent = r.ok ? "Tableau complété correctement."
        : b.join(" · ") + " — score " + Math.round(r.score * 100) + " %";
      verdict.className = "mbt-verdict " + (r.ok ? "mbt-bon" : r.score >= .6 ? "mbt-moyen" : "mbt-mauvais");
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
      .mbt-wrap, .mbt-plateau { color: var(--text, #f0ece0); }
      .mbt-titre { font-size: .9rem; color: var(--muted, rgba(240,236,224,.6)); margin-bottom: .6rem; }
      .mbt-scroll { overflow-x: auto; }
      .mbt-table { border-collapse: collapse; margin: .2rem 0 .8rem; font-size: .95rem; }
      .mbt-table th, .mbt-table td { border: 1px solid var(--border2, rgba(255,255,255,.16));
        padding: .5rem .8rem; text-align: center; min-width: 74px; }
      .mbt-table th { text-align: left; color: var(--muted, rgba(240,236,224,.6));
        font-weight: 400; background: rgba(255,255,255,.03); white-space: nowrap; }
      .mbt-donnee { background: rgba(255,255,255,.02); }
      .mbt-vide { position: relative; padding: 0; }
      .mbt-case { width: 100%; min-width: 74px; background: transparent; border: none;
        color: var(--accent, #c8b97a); font: inherit; font-size: .95rem; text-align: center;
        padding: .5rem .4rem; outline: none; }
      .mbt-case:focus { background: rgba(200,185,122,.10); }
      .mbt-case.mbt-juste { color: var(--accent2, #82d2a0); }
      .mbt-case.mbt-faux  { color: var(--danger, #e6826e); text-decoration: line-through; }
      .mbt-trou { color: var(--accent, #c8b97a); opacity: .5; }
      .mbt-attendu { position: absolute; right: 3px; bottom: 1px; font-size: .62rem;
        color: var(--accent2, #82d2a0); font-family: 'DM Mono', monospace; }
      .mbt-choix { display: flex; align-items: center; gap: .5rem; flex-wrap: wrap;
        font-size: .9rem; margin: .5rem 0; }
      .mbt-opt { background: none; border: 1px solid var(--border2, rgba(255,255,255,.16));
        color: var(--muted, rgba(240,236,224,.6)); font: inherit; font-size: .85rem;
        padding: .35rem .9rem; border-radius: 999px; cursor: pointer; transition: .2s; }
      .mbt-opt:hover { color: var(--text, #f0ece0); border-color: var(--accent, #c8b97a); }
      .mbt-opt.on { background: var(--accent, #c8b97a); color: #0b0b09; border-color: transparent; }
      .mbt-opt.mbt-bonne { border-color: var(--accent2, #82d2a0); color: var(--accent2, #82d2a0); }
      .mbt-calcul { margin: .7rem 0 .3rem; }
      .mbt-calcul label { display: block; font-size: .82rem;
        color: var(--muted, rgba(240,236,224,.6)); margin-bottom: .3rem; }
      .mbt-calc { width: 100%; max-width: 420px; background: rgba(255,255,255,.04);
        border: 1px solid var(--border2, rgba(255,255,255,.16)); border-radius: 8px;
        color: var(--text, #f0ece0); font: inherit; font-size: .95rem; padding: .5rem .7rem; }
      .mbt-calc:focus { outline: none; border-color: var(--accent, #c8b97a); }
      .mbt-calc.mbt-juste { border-color: var(--accent2, #82d2a0); }
      .mbt-calc.mbt-faux  { border-color: var(--danger, #e6826e); }
      .mbt-foot { display: flex; align-items: center; gap: .6rem; flex-wrap: wrap; }
      .mbt-tool { background: none; border: 1px solid var(--border, rgba(255,255,255,.13));
        color: var(--muted, rgba(240,236,224,.55)); font: inherit; font-size: .85rem;
        padding: .45rem .8rem; border-radius: 6px; cursor: pointer; }
      .mbt-verdict { font-size: .88rem; margin: 0; }
      .mbt-bon { color: var(--accent2, #82d2a0); }
      .mbt-moyen { color: var(--accent, #c8b97a); }
      .mbt-mauvais { color: var(--danger, #e6826e); }

      /* ── Sur le papier de la séance ── (voir axe.js : même raison) */
      .mbt-sur-papier { color: #17120c; }
      .mbt-sur-papier .mbt-titre { color: #6b5d40; }
      .mbt-sur-papier .mbt-table th, .mbt-sur-papier .mbt-table td {
        border-color: rgba(31,26,19,.30); }
      .mbt-sur-papier .mbt-table th { color: #5b4f36; background: rgba(31,26,19,.04); }
      .mbt-sur-papier .mbt-donnee { background: rgba(31,26,19,.02); }
      .mbt-sur-papier .mbt-case { color: #17120c; }
      .mbt-sur-papier .mbt-case:focus { background: rgba(154,131,63,.14); }
      .mbt-sur-papier .mbt-case.mbt-juste { color: #1f7a4d; }
      .mbt-sur-papier .mbt-case.mbt-faux { color: #b03a26; }
      .mbt-sur-papier .mbt-trou { color: #9a833f; }
      .mbt-sur-papier .mbt-attendu { color: #1f7a4d; }
      .mbt-sur-papier .mbt-opt { color: #5b4f36; border-color: rgba(31,26,19,.28); }
      .mbt-sur-papier .mbt-opt:hover { color: #17120c; border-color: #9a833f; }
      .mbt-sur-papier .mbt-opt.on { background: #9a833f; color: #f7f2e4; border-color: transparent; }
      .mbt-sur-papier .mbt-opt.mbt-bonne { border-color: #1f7a4d; color: #1f7a4d; }
      .mbt-sur-papier .mbt-calcul label { color: #6b5d40; }
      .mbt-sur-papier .mbt-calc { color: #17120c; background: rgba(31,26,19,.03);
        border-color: rgba(31,26,19,.28); }
      .mbt-sur-papier .mbt-calc:focus { border-color: #9a833f; }
      .mbt-sur-papier .mbt-calc.mbt-juste { border-color: #1f7a4d; }
      .mbt-sur-papier .mbt-calc.mbt-faux { border-color: #b03a26; }
      .mbt-sur-papier .mbt-tool { color: #5b4f36; border-color: rgba(31,26,19,.28); }
      .mbt-sur-papier .mbt-bon { color: #1f7a4d; }
      .mbt-sur-papier .mbt-moyen { color: #9a833f; }
      .mbt-sur-papier .mbt-mauvais { color: #b03a26; }
    `;
    document.head.appendChild(s);
  }

  if (typeof window !== "undefined")
    window.MB_TABLEAU = { monter, verifier, installer, apercu, installerApercu,
                          injecterStyles, evalueCalcul, calculValide };
  if (typeof module !== "undefined" && module.exports)
    module.exports = { verifier, evalueCalcul, calculValide };
})();
