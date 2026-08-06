/* MathBase — generer-donnees.js
   Chapitre « Organisation des données » : supprime toutes les familles et en
   crée deux.

     Analyse de données  — un diagramme est affiché, l'élève le LIT
     Construction        — une situation est décrite, l'élève la REPRÉSENTE

   Trois représentations, 100 exercices de chacune dans chaque famille :
     diagramme en bâtons · graphique (courbe) · diagramme circulaire
   Soit 300 exercices par famille, 600 en tout.

   ── LE POINT DE FOND ─────────────────────────────────────────────────────
   Dans la famille Construction, une moitié des énoncés IMPOSE la
   représentation, l'autre laisse l'élève choisir. Les situations sont
   réparties à parts égales entre :
     · des ÉVOLUTIONS — une grandeur suivie dans le temps, qui appellent un
       graphique, parce que la courbe montre la tendance entre les points ;
     · des BILANS — une répartition à un instant donné, qui appellent un
       diagramme en bâtons ou circulaire, selon que l'on compare des
       effectifs ou des parts d'un tout.
   Le type choisi fait partie de la réponse : représenter une évolution par
   un diagramme circulaire est compté faux, même avec les bons chiffres.

   ── LE DIAGRAMME CIRCULAIRE ──────────────────────────────────────────────
   Le disque est découpé en secteurs ÉGAUX dont le nombre divise 360 : chacun
   vaut donc un nombre entier de degrés. Les effectifs sont choisis pour que
   chaque catégorie occupe un nombre ENTIER de secteurs — sans quoi aucune
   construction exacte ne serait possible.

   ── PRÉREQUIS ────────────────────────────────────────────────────────────
   diagrammes.js dans public/, et l'affichage branché par patch-diagrammes.js.

   ── USAGE ────────────────────────────────────────────────────────────────
     $env:DATABASE_URL = "postgresql://..."
     node generer-donnees.js --apercu
     node generer-donnees.js
     node generer-donnees.js --execute
   Options : --cible N (100 par type) · --graine N (20260817)
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU = ARGS.includes("--apercu");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE = opt("--cible", 100);
const GRAINE = opt("--graine", 20260817);
const CHAP_MOTIF = "organisation";
const F_ANALYSE = "Analyse de données";
const F_CONSTRUCTION = "Construction";

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];
const cle = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const LIB = { F: "Facile", M: "Moyen", D: "Difficile" };
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const virg = x => String(x).replace(".", ",");
const somme = l => l.reduce((a, b) => a + b, 0);
const pgcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };
const arr1 = v => (Math.round(v * 10) / 10).toFixed(1).replace(".", ",");

const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];
const JOURS = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
const MOIS = ["Janv","Févr","Mars","Avril","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc"];

/* ═══ SITUATIONS D'ÉVOLUTION → graphique ═══ */
const EVOL = [
  { s: "la température relevée à midi", u: " °C", y: "°C", min: 2, max: 32, x: "mois" },
  { s: "le nombre de visiteurs du musée", u: "", y: "visiteurs", min: 20, max: 200, x: "mois" },
  { s: "la taille d'une plante", u: " cm", y: "cm", min: 4, max: 60, x: "semaines" },
  { s: "le nombre d'abonnés d'une chaîne", u: "", y: "abonnés", min: 50, max: 500, x: "mois" },
  { s: "la masse d'un chiot", u: " kg", y: "kg", min: 2, max: 24, x: "mois" },
  { s: "le nombre de kilomètres parcourus chaque jour", u: " km", y: "km", min: 3, max: 40, x: "jours" },
  { s: "la hauteur d'eau dans un réservoir", u: " cm", y: "cm", min: 10, max: 100, x: "heures" },
];
/* ═══ SITUATIONS DE BILAN → diagramme ═══ */
const BILAN = [
  { s: "les sports pratiqués par les élèves d'une classe", cats: ["Foot","Tennis","Judo","Danse","Natation"], u: " élèves" },
  { s: "les couleurs préférées d'un groupe", cats: ["Rouge","Bleu","Vert","Jaune"], u: " personnes" },
  { s: "les moyens de transport pour venir au collège", cats: ["Bus","Vélo","À pied","Voiture"], u: " élèves" },
  { s: "les animaux domestiques d'un quartier", cats: ["Chien","Chat","Oiseau","Poisson"], u: " animaux" },
  { s: "les langues étudiées", cats: ["Anglais","Espagnol","Allemand","Italien"], u: " élèves" },
  { s: "les fruits vendus en une matinée", cats: ["Pommes","Poires","Bananes","Fraises"], u: " kg" },
  { s: "les genres de livres empruntés", cats: ["Roman","BD","Manga","Documentaire"], u: " emprunts" },
  { s: "les activités du club", cats: ["Théâtre","Musique","Échecs","Poterie"], u: " inscrits" },
];

/* ── séries ── */
function serieEvol(n, e) {
  const l = [], croissante = alea() > .35;
  let v = croissante ? ri(e.min, Math.round(e.min + (e.max - e.min) * .3))
                     : ri(Math.round(e.min + (e.max - e.min) * .6), e.max);
  for (let i = 0; i < n; i++) { l.push(v);
    const p = Math.max(1, Math.round((e.max - e.min) / (n * 1.6)));
    v = Math.max(e.min, Math.min(e.max, v + (croissante ? ri(0, p * 2) : ri(-p * 2, 0)))); }
  return l;
}
/* Échelle du repère, et CALAGE des valeurs sur ses graduations.
   Deux contraintes se répondent : le repère doit compter entre 4 et 10
   graduations pour rester lisible, et chaque valeur doit tomber sur l'une
   d'elles — le plateau accroche les clics aux graduations, une valeur
   intermédiaire rendrait l'exercice insoluble.
   On choisit donc le pas d'abord, puis on y ajuste les valeurs. */
function calibrer(l) {
  const m = Math.max(...l);
  const pas = m <= 10 ? 1 : m <= 20 ? 2 : m <= 50 ? 5 : m <= 100 ? 10
            : m <= 250 ? 25 : m <= 500 ? 50 : 100;
  const cale = l.map(v => Math.max(pas, Math.round(v / pas) * pas));
  const max = Math.max(...cale, pas * 4);
  return { valeurs: cale, max: Math.ceil(max / pas) * pas, pas };
}
/* répartition en un nombre ENTIER de secteurs : c'est ce qui rend le
   diagramme circulaire constructible à la souris */
function repartitionCirculaire(nbCat) {
  const N = pick([8, 10, 12, 12, 20, 24]);
  for (let t = 0; t < 300; t++) {
    const parts = [];
    let reste = N;
    for (let i = 0; i < nbCat - 1; i++) {
      const m = Math.max(1, Math.floor(reste / (nbCat - i)) - 1);
      const p = ri(1, Math.max(1, Math.min(reste - (nbCat - 1 - i), m + 2)));
      parts.push(p); reste -= p;
    }
    parts.push(reste);
    if (parts.every(p => p >= 1) && somme(parts) === N) return { N, parts };
  }
  return null;
}
/* liste des catégories secteur par secteur */
const secteurs = r => { const l = []; r.parts.forEach((p, i) => { for (let k = 0; k < p; k++) l.push(i + 1); }); return l; };

/* ═══ FAMILLE ANALYSE ═══ */
function analyse(type) {
  const M = [];
  const enTete = "Le diagramme ci-dessus représente ";

  if (type === "batons" || type === "circulaire") {
    /* modèles communs aux deux diagrammes de bilan */
    const jeu = () => { const b = pick(BILAN);
      const k = ri(4, Math.min(5, b.cats.length));
      const cats = b.cats.slice(0, k);
      if (type === "circulaire") {
        const r = repartitionCirculaire(k); if (!r) return null;
        const unite = pick([1, 2, 5, 10]);
        const eff = r.parts.map(p => p * unite * (r.N === 12 ? 1 : 1));
        const total = somme(eff);
        return { b, cats, r, eff, total, unite,
          params: { widget: "diagramme", type: "circulaire", secteurs: r.N,
                    categories: cats, valeurs: secteurs(r) } };
      }
      const e = calibrer(cats.map(() => ri(2, 18))), eff = e.valeurs;
      return { b, cats, eff, total: somme(eff),
        params: { widget: "diagramme", type: "batons", categories: cats,
                  valeurs: eff, max: e.max, pas: e.pas, yLabel: b.u.trim() } };
    };

    M.push({ d: "F", g() { const j = jeu(); if (!j) return null;
      const i = ri(0, j.cats.length - 1);
      return { q: `${enTete}${j.b.s}. Quel effectif correspond à « ${j.cats[i]} » ?`,
               s: `On lit ${type === "circulaire" ? `${j.r.parts[i]} secteur${j.r.parts[i] > 1 ? "s" : ""} sur ${j.r.N}, soit ${j.eff[i]}${j.b.u}` : `${j.eff[i]}${j.b.u}`}.`,
               p: j.params }; } });
    M.push({ d: "F", g() { const j = jeu(); if (!j) return null;
      const i = j.eff.indexOf(Math.max(...j.eff));
      return { q: `${enTete}${j.b.s}. Quelle catégorie est la plus représentée ?`,
               s: `C'est « ${j.cats[i]} », avec ${j.eff[i]}${j.b.u}.`, p: j.params }; } });
    M.push({ d: "F", g() { const j = jeu(); if (!j) return null;
      const i = j.eff.indexOf(Math.min(...j.eff));
      return { q: `${enTete}${j.b.s}. Quelle catégorie est la moins représentée ?`,
               s: `C'est « ${j.cats[i]} », avec ${j.eff[i]}${j.b.u}.`, p: j.params }; } });
    M.push({ d: "M", g() { const j = jeu(); if (!j) return null;
      return { q: `${enTete}${j.b.s}. Quel est l'effectif total ?`,
               s: `On additionne toutes les catégories : ${j.eff.join(" + ")} = ${j.total}${j.b.u}.`, p: j.params }; } });
    M.push({ d: "M", g() { const j = jeu(); if (!j) return null;
      const a = ri(0, j.cats.length - 1); let b2 = ri(0, j.cats.length - 1);
      if (a === b2) b2 = (b2 + 1) % j.cats.length;
      return { q: `${enTete}${j.b.s}. Combien « ${j.cats[a]} » compte-t-il de plus ou de moins que « ${j.cats[b2]} » ?`,
               s: `${j.cats[a]} : ${j.eff[a]}${j.b.u} · ${j.cats[b2]} : ${j.eff[b2]}${j.b.u}.\nÉcart : ${Math.abs(j.eff[a] - j.eff[b2])}${j.b.u}, ${j.eff[a] > j.eff[b2] ? "en faveur de " + j.cats[a] : j.eff[a] < j.eff[b2] ? "en faveur de " + j.cats[b2] : "les deux sont à égalité"}.`,
               p: j.params }; } });
    M.push({ d: "M", g() { const j = jeu(); if (!j) return null;
      const i = ri(0, j.cats.length - 1);
      return { q: `${enTete}${j.b.s}. Quelle fraction de l'effectif total « ${j.cats[i]} » représente-t-il ?`,
               s: `${j.eff[i]} sur ${j.total}, soit ${j.eff[i] / pgcd(j.eff[i], j.total)}/${j.total / pgcd(j.eff[i], j.total)}${type === "circulaire" ? ` — c'est aussi ${j.r.parts[i]} secteurs sur ${j.r.N}` : ""}.`,
               p: j.params }; } });
    M.push({ d: "D", g() { const j = jeu(); if (!j) return null;
      const i = ri(0, j.cats.length - 1);
      return { q: `${enTete}${j.b.s}. Quel pourcentage de l'effectif total « ${j.cats[i]} » représente-t-il ? Arrondis au dixième.`,
               s: `${j.eff[i]} ÷ ${j.total} ≈ ${arr1(j.eff[i] / j.total * 100)} %.`, p: j.params }; } });
    M.push({ d: "D", g() { const j = jeu(); if (!j) return null;
      const tri = j.cats.map((c, i) => [c, j.eff[i]]).sort((a, b) => b[1] - a[1]);
      return { q: `${enTete}${j.b.s}. Range les catégories de la plus représentée à la moins représentée.`,
               s: tri.map(x => `${x[0]} (${x[1]}${j.b.u})`).join(" > ") + ".", p: j.params }; } });
    M.push({ d: "D", g() { const j = jeu(); if (!j) return null;
      const moy = j.total / j.cats.length;
      const au = j.cats.filter((c, i) => j.eff[i] > moy);
      return { q: `${enTete}${j.b.s}. Calcule l'effectif moyen par catégorie, puis dis lesquelles sont au-dessus.`,
               s: `Moyenne : ${j.total} ÷ ${j.cats.length} ${j.total % j.cats.length === 0 ? `= ${j.total / j.cats.length}` : `≈ ${arr1(moy)}`}${j.b.u}.\nAu-dessus : ${au.length ? au.join(", ") : "aucune"}.`,
               p: j.params }; } });
    if (type === "circulaire") {
      M.push({ d: "D", g() { const j = jeu(); if (!j) return null;
        const i = ri(0, j.cats.length - 1);
        return { q: `${enTete}${j.b.s}. Le disque est partagé en ${j.r.N} secteurs égaux. Quel angle correspond à « ${j.cats[i]} » ?`,
                 s: `Chaque secteur mesure 360° ÷ ${j.r.N} = ${360 / j.r.N}°.\n« ${j.cats[i]} » occupe ${j.r.parts[i]} secteur${j.r.parts[i] > 1 ? "s" : ""}, soit ${j.r.parts[i]} × ${360 / j.r.N} = ${j.r.parts[i] * 360 / j.r.N}°.`,
                 p: j.params }; } });
      M.push({ d: "D", g() { const j = jeu(); if (!j) return null;
        return { q: `${enTete}${j.b.s}. Vérifie que la somme des angles des secteurs vaut bien 360°.`,
                 s: `Chaque secteur vaut ${360 / j.r.N}°.\n${j.r.parts.map((p, i) => `${j.cats[i]} : ${p} × ${360 / j.r.N} = ${p * 360 / j.r.N}°`).join("\n")}\nSomme : ${j.r.parts.map(p => p * 360 / j.r.N).join(" + ")} = 360°.`,
                 p: j.params }; } });
      M.push({ d: "D", g() { const j = jeu(); if (!j) return null;
        const i = ri(0, j.cats.length - 1);
        return { q: `${enTete}${j.b.s}. « ${j.cats[i]} » représente-t-il plus ou moins du quart de l'effectif ?`,
                 s: `Le quart du disque, c'est ${j.r.N / 4} secteur${j.r.N / 4 > 1 ? "s" : ""} sur ${j.r.N}.\n« ${j.cats[i]} » en occupe ${j.r.parts[i]} : ${j.r.parts[i] > j.r.N / 4 ? "PLUS" : j.r.parts[i] < j.r.N / 4 ? "MOINS" : "exactement"} du quart.`,
                 p: j.params }; } });
    } else {
      M.push({ d: "D", g() { const j = jeu(); if (!j) return null;
        const seuil = Math.round(j.total / j.cats.length);
        const au = j.cats.filter((c, i) => j.eff[i] >= seuil);
        return { q: `${enTete}${j.b.s}. Combien de catégories atteignent au moins ${seuil}${j.b.u} ?`,
                 s: `${au.length} catégorie${au.length > 1 ? "s" : ""} : ${au.join(", ") || "aucune"}.`, p: j.params }; } });
      M.push({ d: "D", g() { const j = jeu(); if (!j) return null;
        const i = ri(0, j.cats.length - 1), k = ri(2, 5);
        return { q: `${enTete}${j.b.s}. Si l'effectif de « ${j.cats[i]} » augmentait de ${k}${j.b.u}, quel serait le nouveau total ? Cette catégorie deviendrait-elle la plus représentée ?`,
                 s: `Nouveau total : ${j.total} + ${k} = ${j.total + k}${j.b.u}.\n« ${j.cats[i]} » passerait à ${j.eff[i] + k}${j.b.u}${j.eff[i] + k > Math.max(...j.eff.filter((_, x) => x !== i)) ? " : elle deviendrait la plus représentée." : " : elle ne serait toujours pas la plus représentée."}`,
                 p: j.params }; } });
      M.push({ d: "D", g() { const j = jeu(); if (!j) return null;
        return { q: `${enTete}${j.b.s}. Peut-on lire l'effectif exact de chaque catégorie sur ce diagramme ? Que faut-il regarder ?`,
                 s: `Oui, en lisant la hauteur de chaque bâton sur l'axe vertical, gradué de ${j.params.pas} en ${j.params.pas}.\nEffectifs : ${j.cats.map((c, i) => `${c} ${j.eff[i]}`).join(" · ")}${j.b.u}.`,
                 p: j.params }; } });
    }
    return M;
  }

  /* — graphique (courbe) : lecture d'une évolution — */
  const jeuC = () => { const e = pick(EVOL);
    const n = e.x === "mois" ? ri(5, 8) : ri(5, 7);
    const cats = e.x === "mois" ? MOIS.slice(0, n)
      : e.x === "jours" ? JOURS.slice(0, Math.min(n, 7))
      : Array.from({ length: n }, (_, i) => `S${i + 1}`);
    const ec = calibrer(serieEvol(cats.length, e)), l = ec.valeurs;
    return { e, cats, l, ec,
      params: { widget: "diagramme", type: "courbe", categories: cats, valeurs: l,
                max: ec.max, pas: ec.pas, yLabel: e.y } };
  };
  const enTeteC = "Le graphique ci-dessus représente l'évolution de ";

  M.push({ d: "F", g() { const j = jeuC(); const i = ri(0, j.cats.length - 1);
    return { q: `${enTeteC}${j.e.s}. Quelle valeur lit-on pour « ${j.cats[i]} » ?`,
             s: `On lit ${j.l[i]}${j.e.u}.`, p: j.params }; } });
  M.push({ d: "F", g() { const j = jeuC(); const i = j.l.indexOf(Math.max(...j.l));
    return { q: `${enTeteC}${j.e.s}. À quel moment la valeur est-elle la plus grande ?`,
             s: `Le maximum est atteint en « ${j.cats[i]} », avec ${j.l[i]}${j.e.u}.`, p: j.params }; } });
  M.push({ d: "F", g() { const j = jeuC(); const i = j.l.indexOf(Math.min(...j.l));
    return { q: `${enTeteC}${j.e.s}. À quel moment la valeur est-elle la plus petite ?`,
             s: `Le minimum est atteint en « ${j.cats[i]} », avec ${j.l[i]}${j.e.u}.`, p: j.params }; } });
  M.push({ d: "M", g() { const j = jeuC();
    return { q: `${enTeteC}${j.e.s}. De combien la valeur a-t-elle varié entre le début et la fin ?`,
             s: `Début : ${j.l[0]}${j.e.u} · fin : ${j.l[j.l.length - 1]}${j.e.u}.\nVariation : ${j.l[j.l.length - 1]} − ${j.l[0]} = ${j.l[j.l.length - 1] - j.l[0]}${j.e.u}, soit une ${j.l[j.l.length - 1] > j.l[0] ? "HAUSSE" : j.l[j.l.length - 1] < j.l[0] ? "BAISSE" : "stabilité"}.`,
             p: j.params }; } });
  M.push({ d: "M", g() { const j = jeuC(); const i = ri(0, j.cats.length - 2);
    return { q: `${enTeteC}${j.e.s}. La valeur augmente-t-elle ou diminue-t-elle entre « ${j.cats[i]} » et « ${j.cats[i + 1]} » ?`,
             s: `${j.l[i]}${j.e.u} puis ${j.l[i + 1]}${j.e.u} : elle ${j.l[i + 1] > j.l[i] ? "AUGMENTE" : j.l[i + 1] < j.l[i] ? "DIMINUE" : "reste STABLE"}${j.l[i + 1] !== j.l[i] ? ` de ${Math.abs(j.l[i + 1] - j.l[i])}${j.e.u}` : ""}.`,
             p: j.params }; } });
  M.push({ d: "M", g() { const j = jeuC(); const s = ri(Math.min(...j.l) + 1, Math.max(...j.l) - 1);
    const au = j.cats.filter((c, i) => j.l[i] > s);
    return { q: `${enTeteC}${j.e.s}. À combien de moments la valeur dépasse-t-elle ${s}${j.e.u} ?`,
             s: `${au.length} fois : ${au.join(", ") || "jamais"}.`, p: j.params }; } });
  M.push({ d: "D", g() { const j = jeuC();
    let imax = 1, dmax = Math.abs(j.l[1] - j.l[0]);
    for (let i = 1; i < j.l.length; i++) { const d = Math.abs(j.l[i] - j.l[i - 1]); if (d > dmax) { dmax = d; imax = i; } }
    return { q: `${enTeteC}${j.e.s}. Entre quels deux moments la variation est-elle la plus forte ?`,
             s: `Entre « ${j.cats[imax - 1]} » et « ${j.cats[imax]} » : de ${j.l[imax - 1]} à ${j.l[imax]}${j.e.u}, soit ${dmax}${j.e.u} d'écart.`,
             p: j.params }; } });
  M.push({ d: "D", g() { const j = jeuC(); const s = somme(j.l);
    return { q: `${enTeteC}${j.e.s}. Calcule la valeur moyenne sur toute la période.`,
             s: `Somme : ${s}. Nombre de relevés : ${j.l.length}.\nMoyenne : ${s} ÷ ${j.l.length} ${s % j.l.length === 0 ? `= ${s / j.l.length}` : `≈ ${arr1(s / j.l.length)}`}${j.e.u}.`,
             p: j.params }; } });
  M.push({ d: "D", g() { const j = jeuC();
    const hausses = j.l.filter((v, i) => i > 0 && v > j.l[i - 1]).length;
    const baisses = j.l.filter((v, i) => i > 0 && v < j.l[i - 1]).length;
    return { q: `${enTeteC}${j.e.s}. Décris l'allure générale de la courbe.`,
             s: `${hausses} hausse${hausses > 1 ? "s" : ""} et ${baisses} baisse${baisses > 1 ? "s" : ""} d'un relevé au suivant.\nDe ${j.l[0]}${j.e.u} à ${j.l[j.l.length - 1]}${j.e.u}, la tendance est ${j.l[j.l.length - 1] > j.l[0] ? "à la HAUSSE" : j.l[j.l.length - 1] < j.l[0] ? "à la BAISSE" : "STABLE"}.` ,
             p: j.params }; } });
  M.push({ d: "D", g() { const j = jeuC(); const i = ri(0, j.cats.length - 2);
    return { q: `${enTeteC}${j.e.s}. Peut-on connaître la valeur exacte entre « ${j.cats[i]} » et « ${j.cats[i + 1]} » ?`,
             s: `Non. Le graphique ne donne que les valeurs RELEVÉES : ${j.l[i]}${j.e.u} et ${j.l[i + 1]}${j.e.u}.\nLe segment qui les joint suggère une évolution régulière, mais rien ne garantit qu'elle l'ait été.` ,
             p: j.params }; } });
  M.push({ d: "D", g() { const j = jeuC();
    const e2 = Math.max(...j.l) - Math.min(...j.l);
    return { q: `${enTeteC}${j.e.s}. Calcule l'étendue des valeurs relevées.`,
             s: `Maximum : ${Math.max(...j.l)}${j.e.u} · minimum : ${Math.min(...j.l)}${j.e.u}.\nÉtendue : ${Math.max(...j.l)} − ${Math.min(...j.l)} = ${e2}${j.e.u}.`, p: j.params }; } });
  M.push({ d: "D", g() { const j = jeuC();
    return { q: `${enTeteC}${j.e.s}. Pourquoi a-t-on choisi un graphique plutôt qu'un diagramme circulaire ?`,
             s: `Parce qu'il s'agit d'une ÉVOLUTION dans le temps : la courbe montre la tendance d'un relevé au suivant.\nUn diagramme circulaire représente la répartition d'un TOUT à un instant donné ; il n'a pas de sens ici, où les valeurs ne s'additionnent pas pour former un ensemble.`,
             p: j.params }; } });
  return M;
}

/* ═══ FAMILLE CONSTRUCTION ═══ */
function construction(type) {
  const M = [];
  const nomType = { batons: "un diagramme en bâtons", courbe: "un graphique",
                    circulaire: "un diagramme circulaire" }[type];

  /* jeu de données selon le type visé */
  const jeu = () => {
    if (type === "courbe") {
      const e = pick(EVOL);
      const n = ri(5, 7);
      const cats = e.x === "mois" ? MOIS.slice(0, n) : e.x === "jours" ? JOURS.slice(0, n)
        : Array.from({ length: n }, (_, i) => `S${i + 1}`);
      const ec = calibrer(serieEvol(cats.length, e)), l = ec.valeurs;
      return { e, cats, l, ec, evolution: true,
        params: { widget: "diagramme", type: "courbe", categories: cats,
                  max: ec.max, pas: ec.pas, yLabel: e.y,
                  reponse: { type: "courbe", valeurs: l } } };
    }
    if (type === "batons") {
      const b = pick(BILAN), k = ri(4, Math.min(5, b.cats.length));
      const cats = b.cats.slice(0, k);
      const ec = calibrer(cats.map(() => ri(2, 18))), eff = ec.valeurs;
      return { b, cats, eff, ec, evolution: false,
        params: { widget: "diagramme", type: "batons", categories: cats,
                  max: ec.max, pas: ec.pas, yLabel: b.u.trim(),
                  reponse: { type: "batons", valeurs: eff } } };
    }
    const b = pick(BILAN), k = ri(3, 4);
    const cats = b.cats.slice(0, k);
    const r = repartitionCirculaire(k); if (!r) return null;
    const unite = pick([1, 2, 3, 5]);
    const eff = r.parts.map(p => p * unite);
    return { b, cats, r, eff, unite, total: somme(eff), evolution: false,
      params: { widget: "diagramme", type: "circulaire", secteurs: r.N,
                categories: cats, reponse: { type: "circulaire", valeurs: secteurs(r) } } };
  };
  const donnees = j => type === "courbe"
    ? j.cats.map((c, i) => `${c} : ${j.l[i]}${j.e.u}`).join(" · ")
    : j.cats.map((c, i) => `${c} : ${j.eff[i]}${j.b.u}`).join(" · ");

  /* — type IMPOSÉ — */
  const impose = (d, phrase) => M.push({ d, g() { const j = jeu(); if (!j) return null;
    return { q: phrase(j), s: solution(j), p: Object.assign({ impose: type }, j.params) }; } });
  /* — type à CHOISIR — */
  const choisir = (d, phrase) => M.push({ d, g() { const j = jeu(); if (!j) return null;
    return { q: phrase(j), s: solution(j, true), p: j.params }; } });

  function solution(j, expliqueChoix) {
    const pourquoi = expliqueChoix
      ? (type === "courbe"
        ? `\nCes données décrivent une ÉVOLUTION dans le temps : c'est un graphique qu'il faut tracer, car la courbe fait apparaître la tendance d'un relevé au suivant.`
        : type === "circulaire"
        ? `\nCes données forment un BILAN : elles se répartissent en parts d'un même tout. Le diagramme circulaire est adapté, car il montre le POIDS de chaque catégorie dans l'ensemble.`
        : `\nCes données forment un BILAN : on compare des effectifs entre catégories, sans lien avec le temps. Le diagramme en bâtons convient, car il permet de comparer les hauteurs d'un coup d'œil.`)
      : "";
    if (type === "courbe")
      return `On place un point par relevé, puis on les relie :\n${j.cats.map((c, i) => `${c} → ${j.l[i]}${j.e.u}`).join(" · ")}\nL'axe vertical est gradué de ${j.ec.pas} en ${j.ec.pas} jusqu'à ${j.ec.max}.${pourquoi}`;
    if (type === "batons")
      return `On trace un bâton par catégorie, à la hauteur de son effectif :\n${j.cats.map((c, i) => `${c} → ${j.eff[i]}${j.b.u}`).join(" · ")}\nL'axe vertical est gradué de ${j.ec.pas} en ${j.ec.pas} jusqu'à ${j.ec.max}.${pourquoi}`;
    return `Effectif total : ${j.eff.join(" + ")} = ${j.total}${j.b.u}.\nLe disque compte ${j.r.N} secteurs égaux, chacun valant ${j.total / j.r.N}${j.b.u} et ${360 / j.r.N}°.\n${j.cats.map((c, i) => `${c} : ${j.eff[i]} ÷ ${j.total / j.r.N} = ${j.r.parts[i]} secteur${j.r.parts[i] > 1 ? "s" : ""} (${j.r.parts[i] * 360 / j.r.N}°)`).join("\n")}${pourquoi}`;
  }

  const sujet = j => type === "courbe" ? j.e.s : j.b.s;

  impose("F", j => `Voici ${sujet(j)} : ${donnees(j)}. Représente ces données par ${nomType}.`);
  impose("F", j => `On a relevé ${sujet(j)} : ${donnees(j)}. Construis ${nomType} correspondant.`);
  impose("M", j => `${sujet(j).charAt(0).toUpperCase() + sujet(j).slice(1)} se répartit ainsi : ${donnees(j)}. Trace ${nomType}.`);
  impose("M", j => `Une enquête porte sur ${sujet(j)} et donne : ${donnees(j)}. Représente ces résultats par ${nomType}.`);
  impose("D", j => `Voici ${sujet(j)} : ${donnees(j)}. Construis ${nomType}, en respectant la graduation proposée.`);
  impose("D", j => `On étudie ${sujet(j)}. Les données sont : ${donnees(j)}. Représente-les par ${nomType}.`);

  choisir("M", j => `Voici ${sujet(j)} : ${donnees(j)}. Choisis la représentation qui convient, puis construis-la.`);
  choisir("M", j => `On a relevé ${sujet(j)} : ${donnees(j)}. Quelle représentation est la mieux adaptée ? Construis-la.`);
  choisir("D", j => `${sujet(j).charAt(0).toUpperCase() + sujet(j).slice(1)} : ${donnees(j)}. Décide toi-même du type de représentation, puis trace-la.`);
  choisir("D", j => `Une étude porte sur ${sujet(j)} et donne : ${donnees(j)}. S'agit-il d'une évolution ou d'un bilan ? Choisis la représentation en conséquence et construis-la.`);
  choisir("D", j => `Voici ${sujet(j)} : ${donnees(j)}. Représente ces données de la façon la plus parlante possible.`);
  choisir("D", j => `On te demande de présenter ${sujet(j)} : ${donnees(j)}. Choisis la représentation la plus adaptée et justifie ton choix en la construisant.`);
  return M;
}

/* ═══ MOTEUR ═══ */
function genererLot(modeles, cible, prefixe) {
  const quota = { F: Math.round(cible * REPART.F), M: Math.round(cible * REPART.M) };
  quota.D = cible - quota.F - quota.M;
  const vus = new Set(), out = [];
  for (const d of ["F", "M", "D"]) {
    const dispo = modeles.filter(m => m.d === d);
    if (!dispo.length) { if (quota[d]) console.warn(`  ⚠ ${prefixe} / ${LIB[d]} : aucun modèle.`); continue; }
    let reste = quota[d], essais = 0;
    while (reste > 0 && essais < quota[d] * 600 + 12000) {
      essais++;
      let r; try { r = pick(dispo).g(); } catch (e) { continue; }
      if (!r || !r.q || !r.s || !r.p) continue;
      const k = cle(r.q) + "|" + JSON.stringify(r.p.valeurs || (r.p.reponse && r.p.reponse.valeurs));
      if (vus.has(k)) continue;
      vus.add(k);
      out.push({ difficulty: LIB[d], content: r.q, solution: r.s, interactif: r.p });
      reste--;
    }
    if (reste > 0) console.warn(`  ⚠ ${prefixe} / ${LIB[d]} : ${reste} manquant(s).`);
  }
  return out;
}
function toutGenerer() {
  alea = mulberry32(GRAINE);
  const A = [], C = [];
  ["batons", "courbe", "circulaire"].forEach(t => {
    A.push(...genererLot(analyse(t), CIBLE, `Analyse/${t}`));
    C.push(...genererLot(construction(t), CIBLE, `Construction/${t}`));
  });
  return { A, C };
}

/* ═══ APERÇU ═══ */
if (APERCU) {
  const { A, C } = toutGenerer();
  const stat = (l, nom) => { const t = {}, d = {};
    l.forEach(e => { t[e.interactif.type] = (t[e.interactif.type] || 0) + 1;
      d[e.difficulty] = (d[e.difficulty] || 0) + 1; });
    return { famille: nom, total: l.length, batons: t.batons || 0, graphique: t.courbe || 0,
             circulaire: t.circulaire || 0, F: d.Facile || 0, M: d.Moyen || 0, D: d.Difficile || 0 }; };
  console.log("Chapitre « Organisation des données »\n");
  console.table([stat(A, F_ANALYSE), stat(C, F_CONSTRUCTION)]);
  const imposes = C.filter(e => e.interactif.impose).length;
  console.log(`Construction : ${imposes} énoncés imposent le type · ${C.length - imposes} laissent choisir`);
  console.log(`Total : ${A.length + C.length} exercices.`);
  const f = ARGS[ARGS.indexOf("--apercu") + 1];
  if (f && !f.startsWith("--")) {
    const l = cle(f) === cle(F_CONSTRUCTION) ? C : A;
    ["Facile", "Moyen", "Difficile"].forEach(d =>
      l.filter(e => e.difficulty === d).slice(0, 2).forEach(e =>
        console.log(`\n[${d}] (${e.interactif.type}${e.interactif.impose ? ", imposé" : ""}) ${e.content}\n  → ${e.solution.replace(/\n/g, "\n    ")}`)));
  }
  process.exit(0);
}

/* ═══ BASE ═══ */
(async () => {
  const { Pool } = require("pg");
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE $1 ORDER BY id`, [`%${CHAP_MOTIF}%`]);
  const rows = brut.filter(r => cle(r.chapitre).includes("organisation"));
  if (!rows.length) { console.log("Chapitre introuvable."); await pool.end(); return; }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAP = maj(rows, "chapitre", "Organisation des données");
  console.log(`Chapitre « ${CHAP} » : ${rows.length} exercice(s).\n`);
  const g = new Map();
  rows.forEach(r => { const k = r.famille || "(sans famille)"; g.set(k, (g.get(k) || 0) + 1); });
  console.log("Familles à supprimer :");
  console.table([...g.entries()].map(([famille, n]) => ({ famille, n })));

  const { A, C } = toutGenerer();
  const modele = { level: maj(rows, "level", "college"), subject: maj(rows, "subject", "Statistiques"),
                   classe: maj(rows, "classe", "5ème") };
  console.log("\nÀ créer :");
  console.table([{ famille: F_ANALYSE, n: A.length }, { famille: F_CONSTRUCTION, n: C.length }]);
  console.log(`Colonnes reprises : classe ${modele.classe} · matière ${modele.subject}`);

  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`donnees-avant-refonte-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : donnees-avant-refonte-${stamp}.json`);
  await pool.query(`ALTER TABLE exercises ADD COLUMN IF NOT EXISTS interactif JSONB`);
  const del = await pool.query("DELETE FROM exercises WHERE id = ANY($1)", [rows.map(r => r.id)]);
  console.log(`${del.rowCount} exercice(s) supprimé(s).`);

  for (const [fam, lot] of [[F_ANALYSE, A], [F_CONSTRUCTION, C]]) {
    const LOT = 50;
    for (let i = 0; i < lot.length; i += LOT) {
      const part = lot.slice(i, i + LOT), par = [];
      part.forEach((e, j) => par.push(`${fam} ${i + j + 1}`, e.content, modele.level, modele.subject,
        e.difficulty, e.solution, modele.classe, CHAP, fam, JSON.stringify(e.interactif)));
      await pool.query(
        `INSERT INTO exercises (title, content, level, subject, difficulty, solution,
           classe, chapitre, type, famille, interactif)
         VALUES ${part.map((_, j) => { const b = j * 10;
           return `($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},'exercice',$${b+9},$${b+10}::jsonb)`;
         }).join(",")}`, par);
    }
    console.log(`  ${fam} : ${lot.length}`);
  }

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n,
            count(interactif)::int AS figures
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAP]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
