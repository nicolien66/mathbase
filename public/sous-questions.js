/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — sous-questions.js

   Découpe l'énoncé d'un exercice d'annale en sous-questions, pour que chacune
   reçoive son propre espace de réponse.

   Pourquoi un fichier à part : le même découpage doit tourner dans le
   navigateur (page Examen) ET en ligne de commande (audit-sous-questions.js).
   Deux copies divergeraient au premier correctif.

   ── PRINCIPE ──────────────────────────────────────────────────────────────
   L'ancienne version exigeait une numérotation irréprochable — démarrant à 1,
   croissante, sans trou — et renonçait à découper au moindre défaut. Sur des
   PDF réels (deux colonnes, figures intercalées, petites capitales LaTeX) le
   défaut est la règle : l'exercice restait entier et l'élève n'avait qu'un
   seul cadre pour toutes ses questions.

   Ici on ne renonce jamais. On repère les marqueurs, puis on écarte
   individuellement ceux qui sont incohérents (retour en arrière, saut
   invraisemblable) en RECOLLANT leur texte à la question précédente. Rien
   n'est perdu : au pire une question reste fusionnée avec sa voisine, jamais
   l'exercice entier ne s'effondre en un bloc.
   ═══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";

  /* Marqueurs candidats : « 3. » « 3) » « 3° » « a. » « a) » « a/ » « A. ».
     On les cherche partout dans la ligne, pas seulement en tête : l'extraction
     PDF recolle très souvent deux questions sur une même ligne. */
  const MARQUEUR = /(?:questions?|q)\s*n?[°o]?\s*(\d{1,2})(?![\d.,)°])|(\d{1,2})\s*([.)°])|([a-hA-H])\s*([.)\/])/gi;

  /* « Question 4 », « Q4 », « Exercice 2 » : le mot précède le numéro. */
  const MOT_AVANT = /(?:questions?|q|exercices?)\s*n?[°o]?\s*$/i;

  /* Caractères qui, juste à gauche, prouvent que le nombre appartient à un
     calcul et non à une numérotation : « = 2x + 3. », « f(5). », « ≤ 4) ». */
  const OPERATEUR = /[+\-=×÷*\/(<>≤≥%:;^_]/;

  /* Lignes issues du dessin : lettres isolées, angles, cotes. */
  const BRUIT = /^\s*(?:[A-Za-z]|\d+\s*°|\d+[,.]?\d*|[A-Za-z]\s*[=:]\s*\S{0,6})\s*$/;

  const estChiffre = c => c >= "0" && c <= "9";
  const estLettre  = c => /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(c);

  /* Dernier caractère non blanc à gauche de la position donnée. */
  function precedentUtile(ligne, i) {
    let j = i - 1;
    while (j >= 0 && /\s/.test(ligne[j])) j--;
    return j >= 0 ? ligne[j] : "";
  }

  /* Un marqueur n'est retenu que s'il est isolé dans le texte. Sans cela
     « 3.5 » devient la question 3, « f(5). » la question 5, et le sujet part
     en miettes. */
  function marqueurPlausible(ligne, m) {
    const motNumero = m[1] !== undefined;          // « Question 4 »
    if (motNumero) return true;                    // le mot lève toute ambiguïté

    const avant = m.index > 0 ? ligne[m.index - 1] : "";
    const apres = ligne[m.index + m[0].length] || "";
    const numerique = m[2] !== undefined;

    // Rien d'accolé à gauche : ni chiffre, ni lettre, ni virgule décimale.
    if (avant && (estChiffre(avant) || estLettre(avant) || avant === "," || avant === ".")) {
      if (!(numerique && MOT_AVANT.test(ligne.slice(0, m.index)))) return false;
    }
    // Un opérateur à gauche trahit un calcul : « 2x + 3. » n'ouvre pas la
    // question 3, c'est la fin d'une expression.
    if (numerique && OPERATEUR.test(precedentUtile(ligne, m.index))) return false;
    // « A(1 ; 2) », « f(5) » : un « N) » situé dans une parenthèse encore
    // ouverte ferme cette parenthèse — ce n'est pas une numérotation.
    if (m[0].indexOf(")") !== -1) {
      let ouvertes = 0;
      for (let i = 0; i < m.index; i++) {
        if (ligne[i] === "(") ouvertes++;
        else if (ligne[i] === ")") ouvertes = Math.max(0, ouvertes - 1);
      }
      if (ouvertes > 0) return false;
    }
    // Rien d'accolé à droite non plus : « 3.5 » et « 12.04 » ne sont pas des
    // questions mais des décimaux mal extraits.
    if (estChiffre(apres)) return false;
    // Une lettre collée au marqueur sans espace reste acceptable (« 3.Calculer »),
    // mais pas dans le cas d'une lettre-marqueur : « a.b » est une notation.
    if (!numerique && apres && estLettre(apres)) return false;
    return true;
  }

  /* Repère tous les marqueurs d'une ligne et renvoie les tronçons découpés. */
  function tronconner(ligne) {
    const trouves = [];
    MARQUEUR.lastIndex = 0;
    let m;
    while ((m = MARQUEUR.exec(ligne)) !== null) {
      if (!marqueurPlausible(ligne, m)) continue;
      trouves.push({
        debut: m.index,
        fin: m.index + m[0].length,
        type: m[4] ? "let" : "num",
        num: m[1] !== undefined ? m[1] : m[2],
        lettre: m[4] ? m[4].toLowerCase() : null,
      });
    }
    if (!trouves.length) return [{ type: "texte", texte: ligne.trim() }];

    const out = [];
    const tete = ligne.slice(0, trouves[0].debut).trim();
    if (tete) out.push({ type: "texte", texte: tete });
    trouves.forEach((t, i) => {
      const finTexte = i + 1 < trouves.length ? trouves[i + 1].debut : ligne.length;
      out.push({
        type: t.type, num: t.num, lettre: t.lettre,
        texte: ligne.slice(t.fin, finTexte).trim(),
      });
    });
    return out;
  }

  /* Garde les marqueurs cohérents, recolle les autres au texte précédent.
     Un trou est toléré (une question avalée par l'extraction ne doit pas faire
     tomber les suivantes) ; un retour en arrière ou un bond de plus de trois
     ne l'est pas — c'est du bruit de figure. */
  function consolider(bruts) {
    const items = [];
    const preambule = [];
    let dernierNum = 0;
    const lettresDe = {};

    const recoller = txt => {
      if (!txt) return;
      if (items.length) items[items.length - 1].lignes.push(txt);
      else preambule.push(txt);
    };

    for (const b of bruts) {
      if (b.type === "texte") { recoller(b.texte); continue; }

      if (b.type === "num") {
        const n = Number(b.num);
        if (!n || n <= dernierNum || n > dernierNum + 3) {
          recoller((b.num || "") + ". " + b.texte);
          continue;
        }
        dernierNum = n;
        items.push({ type: "num", num: String(n), lettre: null, lignes: b.texte ? [b.texte] : [] });
        continue;
      }

      // Lettre : elle se rattache au dernier numéro rencontré.
      const parent = dernierNum ? String(dernierNum) : null;
      const suite = lettresDe[parent] || [];
      const code = b.lettre.charCodeAt(0);
      const precedent = suite.length ? suite[suite.length - 1] : 96; // « a » − 1
      if (code <= precedent || code > precedent + 2) {
        recoller(b.lettre + ". " + b.texte);
        continue;
      }
      suite.push(code);
      lettresDe[parent] = suite;
      items.push({ type: "let", num: parent, lettre: b.lettre, lignes: b.texte ? [b.texte] : [] });
    }
    return { items, preambule };
  }

  /* Assemble le résultat : un libellé et un texte par sous-question.
     Un numéro suivi de ses lettres ne devient pas une question à lui seul —
     son texte sert de contexte à « a. », « b. »… */
  function assembler(items, preambule) {
    for (const it of items) {
      it._texte = it.lignes.join(" ").replace(/\s+/g, " ").trim();
    }
    const sorties = [];
    for (let i = 0; i < items.length; i++) {
      const it = items[i], suivant = items[i + 1];
      if (it.type === "num" && suivant && suivant.type === "let" && suivant.num === it.num) {
        it._contexte = it._texte;
        continue;
      }
      let ctx = "";
      if (it.type === "let") {
        const parent = items.slice(0, i).reverse()
          .find(x => x.type === "num" && x.num === it.num);
        if (parent && parent._contexte) ctx = parent._contexte;
      }
      sorties.push({
        label: it.type === "let" ? it.num + ". " + it.lettre + "." : it.num + ".",
        texte: (ctx ? ctx + " " : "") + it._texte,
      });
    }
    return {
      preambule: preambule.join(" ").replace(/\s+/g, " ").trim(),
      items: sorties,
    };
  }

  /* Point d'entrée. Renvoie { preambule, items } ou null si l'énoncé ne
     contient pas au moins deux sous-questions identifiables. */
  function parse(texte) {
    const lignes = String(texte || "").replace(/\r/g, "").split("\n");
    const bruts = [];
    for (const l of lignes) {
      const troncons = tronconner(l);
      // Le bruit de figure n'est écarté que si la ligne ne porte aucun marqueur.
      if (troncons.length === 1 && troncons[0].type === "texte" && BRUIT.test(l)) continue;
      bruts.push(...troncons);
    }
    const { items, preambule } = consolider(bruts);
    if (items.length < 2) return null;
    const res = assembler(items, preambule);
    return res.items.length > 1 ? res : null;
  }

  /* Diagnostic destiné à l'audit : ce que le parseur a vu, et ce qu'il a
     écarté. Ne sert pas à l'affichage élève. */
  function diagnostic(texte) {
    const lignes = String(texte || "").replace(/\r/g, "").split("\n");
    const bruts = [];
    for (const l of lignes) {
      const t = tronconner(l);
      if (t.length === 1 && t[0].type === "texte" && BRUIT.test(l)) continue;
      bruts.push(...t);
    }
    const reperes = bruts.filter(b => b.type !== "texte").length;
    const res = parse(texte);
    return {
      marqueursReperes: reperes,
      sousQuestions: res ? res.items.length : 0,
      ecartes: reperes - (res ? res.items.length : 0),
      labels: res ? res.items.map(x => x.label) : [],
    };
  }

  const API = { parse, diagnostic };
  if (typeof module !== "undefined" && module.exports) module.exports = API;
  else global.MB_SQ = API;
})(typeof globalThis !== "undefined" ? globalThis : this);
