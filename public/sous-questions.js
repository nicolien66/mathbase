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

  /* « Partie 1 : le terrain » → « Partie 1 » : le titre alourdirait le
     libellé de chaque question. */
  function nomCourtPartie(ligne) {
    const m = String(ligne).match(
      /^\s*((?:premi[\u00e8e]re|deuxi[\u00e8e]me|troisi[\u00e8e]me|quatri[\u00e8e]me)\s+partie|partie\s*[A-D0-9]?)/i);
    if (!m) return null;                 // « Problème », « Exercice 3 » : pas un préfixe utile
    return m[1].replace(/\s+/g, " ").trim();
  }

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
  /* Une nouvelle partie relance la numérotation : « Partie A : 1. 2. » puis
     « Partie B : 1. 2. ». Sans cela le « 1. » de la seconde partie repart en
     arrière et toutes ses questions se recollent à la précédente.
     Le titre qui suit est facultatif — « Partie 1 : le terrain » est courant
     dans les problèmes — mais la ligne doit rester courte, sinon une phrase
     commençant par « Partie… » déclencherait une remise à zéro. */
  const NOUVELLE_PARTIE =
    /^\s*(?:(?:premi[èe]re|deuxi[èe]me|troisi[èe]me|quatri[èe]me)\s+partie|partie\s*[A-D0-9]?|probl[èe]me|exercice\s*\d*)\s*(?:[:.\-–—]\s*\S.{0,50})?\s*$/i;

  /* Choisit, parmi les numéros candidats d'un segment, la plus longue suite
     cohérente. Indispensable : accepter les marqueurs au fil du texte laisse
     un « 12. » parasite venu d'une légende s'installer comme référence, après
     quoi les vrais « 1. 2. 3. » sont tous rejetés comme régressifs.
     Programmation dynamique en O(n²) : n reste petit (quelques dizaines). */
  function meilleureSuite(nums) {
    if (!nums.length) return new Set();
    const long = new Array(nums.length).fill(1);
    const prec = new Array(nums.length).fill(-1);
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        // un numéro suit le précédent s'il progresse d'au plus 3 : on tolère
        // qu'une question ait été avalee par l'extraction, pas un bond.
        const ok = nums[i].n > nums[j].n && nums[i].n <= nums[j].n + 3;
        if (ok && long[j] + 1 > long[i]) { long[i] = long[j] + 1; prec[i] = j; }
      }
    }
    let best = 0;
    for (let i = 1; i < nums.length; i++) {
      if (long[i] > long[best]) best = i;
      // à longueur égale, on préfère la suite qui démarre le plus bas :
      // une numérotation d'exercice commence bien plus souvent à 1 qu'à 9.
      else if (long[i] === long[best]) {
        const dep = k => { while (prec[k] !== -1) k = prec[k]; return nums[k].n; };
        if (dep(i) < dep(best)) best = i;
      }
    }
    const gardes = new Set();
    for (let k = best; k !== -1; k = prec[k]) gardes.add(nums[k].i);
    return gardes;
  }

  function consolider(bruts) {
    /* Un segment = une partie du sujet. La numérotation y est indépendante :
       « Partie A : 1. 2. » puis « Partie B : 1. 2. ». */
    const segments = [];
    let courant = { debut: 0, nums: [], partie: null };
    bruts.forEach((b, i) => {
      if (b.type === "texte" && NOUVELLE_PARTIE.test(b.texte)) {
        segments.push(courant);
        courant = { debut: i, nums: [],
                    partie: nomCourtPartie(b.texte) };
        return;
      }
      if (b.type === "num" && Number(b.num)) courant.nums.push({ i, n: Number(b.num) });
    });
    segments.push(courant);

    const retenus = new Set();
    const partieDe = {};
    segments.forEach(seg => {
      meilleureSuite(seg.nums).forEach(i => { retenus.add(i); partieDe[i] = seg.partie; });
    });

    const items = [];
    const preambule = [];
    let rejets = 0;
    let partie = null;
    let lettresDe = {};

    const recoller = txt => {
      if (!txt) return;
      if (items.length) items[items.length - 1].lignes.push(txt);
      else preambule.push(txt);
    };

    bruts.forEach((b, i) => {
      if (b.type === "texte") {
        if (NOUVELLE_PARTIE.test(b.texte)) {
          partie = nomCourtPartie(b.texte);
          lettresDe = {};
        }
        recoller(b.texte);
        return;
      }

      if (b.type === "num") {
        if (!retenus.has(i)) { rejets++; recoller((b.num || "") + ". " + b.texte); return; }
        lettresDe = {};
        items.push({ type: "num", num: String(Number(b.num)), lettre: null,
                     partie: partieDe[i] !== undefined ? partieDe[i] : partie,
                     lignes: b.texte ? [b.texte] : [] });
        return;
      }

      // Lettre : elle se rattache au dernier numéro retenu.
      const dernier = items.slice().reverse().find(x => x.type === "num");
      const parent = dernier ? dernier.num : null;
      const suite = lettresDe[parent] || [];
      const code = b.lettre.charCodeAt(0);
      const precedent = suite.length ? suite[suite.length - 1] : 96; // « a » − 1
      if (code <= precedent || code > precedent + 2) {
        rejets++; recoller(b.lettre + ". " + b.texte); return;
      }
      suite.push(code);
      lettresDe[parent] = suite;
      items.push({ type: "let", num: parent, lettre: b.lettre,
                   partie: dernier ? dernier.partie : partie,
                   lignes: b.texte ? [b.texte] : [] });
    });
    return { items, preambule, rejets };
  }

  /* Assemble le résultat : un libellé et un texte par sous-question.
     Un numéro suivi de ses lettres ne devient pas une question à lui seul —
     son texte sert de contexte à « a. », « b. »… */
  function assembler(items, preambule) {
    /* Deux parties produisent chacune une question « 1. » : on préfixe le
       libellé pour que l'élève sache où il en est. */
    const parties = [...new Set(items.map(x => x.partie).filter(Boolean))];
    const prefixer = parties.length > 1;
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
      const brut = it.type === "let" ? it.num + ". " + it.lettre + "." : it.num + ".";
      sorties.push({
        label: (prefixer && it.partie ? it.partie + " \u00b7 " : "") + brut,
        texte: (ctx ? ctx + " " : "") + it._texte,
      });
    }
    return {
      preambule: preambule.join(" ").replace(/\s+/g, " ").trim(),
      items: sorties,
    };
  }

  /* Repli : certains sujets ne numérotent pas leurs sous-questions mais les
     nomment — « Affirmation 1 », « Cas 2 », « Proposition 3 ». On ne tente
     ce découpage QUE si la numérotation ordinaire n'a rien donné : il ne peut
     donc pas dégrader les exercices déjà correctement traités. */
  const NOMMEE = /\b(affirmations?|cas|propositions?)\s*n?[\u00b0o]?\s*(\d{1,2})\b/gi;

  function parseNommees(texte) {
    const t = String(texte || "").replace(/\r/g, "");
    const trouves = [];
    NOMMEE.lastIndex = 0;
    let m;
    while ((m = NOMMEE.exec(t)) !== null) {
      trouves.push({ debut: m.index, fin: m.index + m[0].length,
                     mot: m[1], n: Number(m[2]) });
    }
    if (trouves.length < 2) return null;
    // Même exigence de progression que pour les numéros : « Affirmation 1 »
    // répétée dans une consigne puis dans l'énoncé ne doit pas créer de doublon.
    const gardes = [];
    let dernier = 0;
    for (const x of trouves) {
      if (x.n > dernier && x.n <= dernier + 3) { gardes.push(x); dernier = x.n; }
    }
    if (gardes.length < 2) return null;
    const nom = g => g.mot.replace(/s$/i, "").replace(/^./, c => c.toUpperCase());
    const items = gardes.map((g, i) => ({
      label: nom(g) + " " + g.n,
      texte: t.slice(g.fin, i + 1 < gardes.length ? gardes[i + 1].debut : t.length)
              .replace(/\s+/g, " ").trim(),
    }));
    return { preambule: t.slice(0, gardes[0].debut).replace(/\s+/g, " ").trim(), items };
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
    const { items, preambule, rejets } = consolider(bruts);
    if (items.length < 2) return parseNommees(texte);
    const res = assembler(items, preambule);
    if (res.items.length < 2) return parseNommees(texte);
    res.rejets = rejets;
    return res;
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
    // « écartés » compte les marqueurs réellement rejetés comme incohérents,
    // et non les numéros qui servent de contexte à leurs lettres.
    return {
      marqueursReperes: reperes,
      sousQuestions: res ? res.items.length : 0,
      ecartes: res ? (res.rejets || 0) : consolider(bruts).rejets,
      labels: res ? res.items.map(x => x.label) : [],
    };
  }

  const API = { parse, diagnostic };
  if (typeof module !== "undefined" && module.exports) module.exports = API;
  else global.MB_SQ = API;
})(typeof globalThis !== "undefined" ? globalThis : this);
