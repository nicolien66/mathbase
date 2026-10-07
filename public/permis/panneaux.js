/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — panneaux.js : signalisation routière dessinée en SVG

   Chaque entrée : code → { nom, svg }. Les codes suivent la nomenclature
   française (AB4 = stop, B14 = limitation de vitesse…). Une question ou un
   cours y fait référence par son code ; quelques codes prennent un paramètre
   après « : » (B14:50 = limitation à 50 km/h, EB10:Ville = entrée d'agglomération).

   PANNEAU(code) renvoie le SVG, ou "" si le code est inconnu.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  const R = "#d6202a", B = "#1c4fa0", J = "#f5c400", N = "#111", W = "#fff", G = "#9a9a9a", V = "#1f9a4a", O = "#f39200";
  const svg = (inner, vb) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb || "0 0 100 100"}" role="img">${inner}</svg>`;

  /* ── formes de base ── */
  const triangle = inner => `<path d="M50 6 L95 88 H5 Z" fill="${W}" stroke="${R}" stroke-width="9" stroke-linejoin="round"/>${inner || ""}`;
  const triangleInv = inner => `<path d="M5 12 H95 L50 94 Z" fill="${W}" stroke="${R}" stroke-width="9" stroke-linejoin="round"/>${inner || ""}`;
  const rond = (fond, bord, inner) => `<circle cx="50" cy="50" r="44" fill="${fond}" ${bord ? `stroke="${bord}" stroke-width="10"` : ""}/>${inner || ""}`;
  const carre = (fond, inner) => `<rect x="6" y="6" width="88" height="88" rx="8" fill="${fond}" stroke="${W}" stroke-width="3"/>${inner || ""}`;
  const barreRouge = `<line x1="20" y1="20" x2="80" y2="80" stroke="${R}" stroke-width="9"/>`;
  const fin = `<line x1="22" y1="78" x2="78" y2="22" stroke="${G}" stroke-width="9"/>`;

  /* ── pictogrammes ── */
  const pieton = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="${c}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <circle cx="50" cy="20" r="7" fill="${c}" stroke="none"/>
      <path d="M50 30 L46 56 M49 36 L37 48 M49 36 L61 45 M46 56 L37 77 M46 56 L58 73 L63 79"/></g>`;
  const voiture = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s})" fill="${c}">
      <path d="M8 50 L14 36 Q16 32 21 32 H45 Q49 32 52 36 L60 46 H72 Q78 46 78 52 V58 H8 Z"/>
      <circle cx="22" cy="60" r="7" fill="${c}" stroke="${W}" stroke-width="2"/><circle cx="64" cy="60" r="7" fill="${c}" stroke="${W}" stroke-width="2"/>
      <path d="M22 37 H44 L50 45 H18 Z" fill="${W}" opacity=".85"/></g>`;
  const fleche = (rot, c) => `<g transform="rotate(${rot} 50 50)"><path d="M50 18 L70 42 H57 V80 H43 V42 H30 Z" fill="${c}"/></g>`;
  const flecheTourne = (sens, c) => sens === "d"
    ? `<path d="M36 80 V52 Q36 42 46 42 H58 V30 L78 48 L58 66 V54 H48 V80 Z" fill="${c}"/>`
    : `<path d="M64 80 V52 Q64 42 54 42 H42 V30 L22 48 L42 66 V54 H52 V80 Z" fill="${c}"/>`;
  const texte = (t, taille, c, y) => `<text x="50" y="${y || 50}" text-anchor="middle" dominant-baseline="central" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${taille}" fill="${c}">${t}</text>`;
  const enfants = c => pieton(14, 22, .55, c) + pieton(40, 30, .45, c);

  const P = {
    /* ── Intersections et priorités ── */
    AB1:  { nom: "Intersection où vous devez céder le passage aux véhicules venant de droite", svg: () => svg(triangle(`<path d="M34 40 L66 76 M66 40 L34 76" stroke="${N}" stroke-width="7"/>`)) },
    AB2:  { nom: "Intersection avec une route dont les usagers doivent vous céder le passage", svg: () => svg(triangle(`<path d="M50 34 V80" stroke="${N}" stroke-width="10"/><path d="M30 58 H70" stroke="${N}" stroke-width="5"/>`)) },
    AB3a: { nom: "Cédez le passage à l'intersection", svg: () => svg(triangleInv()) },
    AB4:  { nom: "Arrêt obligatoire à l'intersection (STOP)", svg: () => svg(`<path d="M32 5 H68 L95 32 V68 L68 95 H32 L5 68 V32 Z" fill="${R}" stroke="${W}" stroke-width="3"/>` + texte("STOP", 25, W)) },
    AB6:  { nom: "Route à caractère prioritaire", svg: () => svg(`<path d="M50 4 L96 50 L50 96 L4 50 Z" fill="${W}" stroke="${N}" stroke-width="2"/><path d="M50 18 L82 50 L50 82 L18 50 Z" fill="${J}"/>`) },
    AB7:  { nom: "Fin de route à caractère prioritaire", svg: () => svg(`<path d="M50 4 L96 50 L50 96 L4 50 Z" fill="${W}" stroke="${N}" stroke-width="2"/><path d="M50 18 L82 50 L50 82 L18 50 Z" fill="${J}"/><path d="M28 72 L72 28" stroke="${N}" stroke-width="9"/>`) },
    AB25: { nom: "Carrefour à sens giratoire", svg: () => svg(triangle(`<g fill="none" stroke="${N}" stroke-width="5"><path d="M38 62 A14 14 0 0 1 50 42"/><path d="M50 42 A14 14 0 0 1 62 62"/><path d="M62 62 A14 14 0 0 1 38 62"/></g><path d="M50 36 L57 43 L47 46 Z M66 66 L57 68 L62 58 Z M34 66 L38 57 L43 66 Z" fill="${N}"/>`)) },

    /* ── Danger ── */
    A1a:  { nom: "Virage à droite", svg: () => svg(triangle(`<path d="M44 80 V58 Q44 44 58 40" stroke="${N}" stroke-width="7" fill="none"/><path d="M56 32 L66 40 L54 46 Z" fill="${N}"/>`)) },
    A1b:  { nom: "Virage à gauche", svg: () => svg(triangle(`<path d="M56 80 V58 Q56 44 42 40" stroke="${N}" stroke-width="7" fill="none"/><path d="M44 32 L34 40 L46 46 Z" fill="${N}"/>`)) },
    A3:   { nom: "Chaussée rétrécie", svg: () => svg(triangle(`<path d="M36 80 L36 64 L42 50 L42 36 M64 80 L64 64 L58 50 L58 36" stroke="${N}" stroke-width="6" fill="none"/>`)) },
    A4:   { nom: "Chaussée glissante", svg: () => svg(triangle(voiture(28, 30, .52, N) + `<path d="M30 76 q6 -6 12 0 t12 0 M48 82 q6 -6 12 0 t12 0" stroke="${N}" stroke-width="3" fill="none"/>`)) },
    A13a: { nom: "Endroit fréquenté par les enfants", svg: () => svg(triangle(`<g transform="translate(13 22) scale(.75)">${enfants(N)}</g>`)) },
    A13b: { nom: "Passage pour piétons", svg: () => svg(triangle(pieton(24, 26, .52, N) + `<path d="M30 82 H70" stroke="${N}" stroke-width="3" stroke-dasharray="5 4"/>`)) },
    A14:  { nom: "Autres dangers", svg: () => svg(triangle(`<rect x="45" y="34" width="10" height="30" rx="3" fill="${N}"/><circle cx="50" cy="74" r="6" fill="${N}"/>`)) },
    A20:  { nom: "Descente dangereuse", svg: () => svg(triangle(`<path d="M24 80 L76 80 L24 48 Z" fill="${N}"/>` + texte("10%", 13, W, 72))) },

    /* ── Interdiction ── */
    B0:   { nom: "Circulation interdite à tout véhicule dans les deux sens", svg: () => svg(rond(W, R)) },
    B1:   { nom: "Sens interdit à tout véhicule", svg: () => svg(rond(R, null, `<rect x="18" y="42" width="64" height="16" fill="${W}"/>`)) },
    B2a:  { nom: "Interdiction de tourner à gauche à la prochaine intersection", svg: () => svg(rond(W, R, flecheTourne("g", N) + barreRouge)) },
    B2b:  { nom: "Interdiction de tourner à droite à la prochaine intersection", svg: () => svg(rond(W, R, flecheTourne("d", N) + `<line x1="80" y1="20" x2="20" y2="80" stroke="${R}" stroke-width="9"/>`)) },
    B2c:  { nom: "Interdiction de faire demi-tour", svg: () => svg(rond(W, R, `<path d="M40 82 V46 Q40 30 54 30 Q66 30 66 46 V56" stroke="${N}" stroke-width="9" fill="none"/><path d="M56 54 H76 L66 70 Z" fill="${N}"/>` + barreRouge)) },
    B3:   { nom: "Interdiction de dépasser tous les véhicules à moteur autres que les deux-roues sans side-car", svg: () => svg(rond(W, R, voiture(15, 24, .42, N) + voiture(48, 24, .42, R))) },
    B6a1: { nom: "Stationnement interdit", svg: () => svg(rond(B, R, `<line x1="22" y1="22" x2="78" y2="78" stroke="${R}" stroke-width="9"/>`)) },
    B6d:  { nom: "Arrêt et stationnement interdits", svg: () => svg(rond(B, R, `<line x1="22" y1="22" x2="78" y2="78" stroke="${R}" stroke-width="9"/><line x1="78" y1="22" x2="22" y2="78" stroke="${R}" stroke-width="9"/>`)) },
    B14:  { nom: "Limitation de vitesse", param: true, svg: v => svg(rond(W, R, texte(v || "50", String(v || "50").length > 2 ? 30 : 38, N, 52))) },
    B31:  { nom: "Fin de toutes les interdictions précédemment signalées", svg: () => svg(rond(W, null, `<circle cx="50" cy="50" r="44" fill="none" stroke="${N}" stroke-width="2"/>` + `<g stroke="${G}" stroke-width="4"><line x1="26" y1="80" x2="80" y2="26"/><line x1="20" y1="74" x2="74" y2="20"/><line x1="32" y1="86" x2="86" y2="32"/></g>`)) },
    B33:  { nom: "Fin de limitation de vitesse", param: true, svg: v => svg(rond(W, null, `<circle cx="50" cy="50" r="44" fill="none" stroke="${N}" stroke-width="2"/>` + texte(v || "50", 34, G, 52) + fin)) },
    B34:  { nom: "Fin d'interdiction de dépasser", svg: () => svg(rond(W, null, `<circle cx="50" cy="50" r="44" fill="none" stroke="${N}" stroke-width="2"/>` + voiture(15, 24, .42, G) + voiture(48, 24, .42, G) + fin)) },

    /* ── Obligation ── */
    B21_1: { nom: "Obligation de tourner à droite avant le panneau", svg: () => svg(rond(B, null, flecheTourne("d", W))) },
    B21_2: { nom: "Obligation de tourner à gauche avant le panneau", svg: () => svg(rond(B, null, flecheTourne("g", W))) },
    B21a1: { nom: "Contournement obligatoire par la droite", svg: () => svg(rond(B, null, fleche(135, W))) },
    B21c1: { nom: "Direction obligatoire tout droit", svg: () => svg(rond(B, null, fleche(0, W))) },
    B22b:  { nom: "Chemin obligatoire pour piétons", svg: () => svg(rond(B, null, pieton(18, 14, .66, W))) },
    B25:   { nom: "Vitesse minimale obligatoire", param: true, svg: v => svg(rond(B, null, texte(v || "30", 36, W, 52))) },

    /* ── Indication ── */
    C1a:  { nom: "Lieu aménagé pour le stationnement", svg: () => svg(carre(B, texte("P", 62, W, 54))) },
    C12:  { nom: "Circulation à sens unique", svg: () => svg(carre(B, `<rect x="22" y="40" width="56" height="20" fill="${W}"/><path d="M74 30 L90 50 L74 70 Z" fill="${W}"/>`)) },
    C20a: { nom: "Passage pour piétons", svg: () => svg(carre(B, `<path d="M50 14 L88 84 H12 Z" fill="${W}"/>` + pieton(26, 30, .5, N))) },
    C24a: { nom: "Conditions particulières de circulation par voie (voie de gauche réservée…)", svg: () => svg(carre(B, `<rect x="24" y="16" width="20" height="68" fill="${W}"/><rect x="56" y="16" width="20" height="68" fill="${W}"/>`)) },
    C27:  { nom: "Surélévation de chaussée (ralentisseur)", svg: () => svg(carre(B, `<path d="M14 72 H30 Q50 40 70 72 H86" stroke="${W}" stroke-width="7" fill="none"/>`)) },
    C107: { nom: "Route à accès réglementé (route pour automobiles)", svg: () => svg(carre(B, voiture(10, 18, .82, W))) },
    C207: { nom: "Début de section d'autoroute", svg: () => svg(carre(B, `<path d="M28 86 L42 34 M72 86 L58 34" stroke="${W}" stroke-width="7"/><path d="M24 30 H76" stroke="${W}" stroke-width="7"/><path d="M50 42 V52 M50 62 V72" stroke="${W}" stroke-width="4"/>`)) },
    C208: { nom: "Fin de section d'autoroute", svg: () => svg(carre(B, `<path d="M28 86 L42 34 M72 86 L58 34" stroke="${W}" stroke-width="7"/><path d="M24 30 H76" stroke="${W}" stroke-width="7"/>` + `<line x1="16" y1="84" x2="84" y2="16" stroke="${R}" stroke-width="8"/>`)) },

    /* ── Agglomération, zones ── */
    EB10: { nom: "Entrée d'agglomération", param: true, svg: v => svg(`<rect x="3" y="18" width="94" height="44" rx="4" fill="${W}" stroke="${R}" stroke-width="5"/>` + texte(v || "VILLE", (v || "VILLE").length > 8 ? 12 : 16, N, 40), "0 0 100 80") },
    EB20: { nom: "Sortie d'agglomération", param: true, svg: v => svg(`<rect x="3" y="18" width="94" height="44" rx="4" fill="${W}" stroke="${R}" stroke-width="5"/>` + texte(v || "VILLE", (v || "VILLE").length > 8 ? 12 : 16, N, 40) + `<line x1="6" y1="60" x2="94" y2="20" stroke="${R}" stroke-width="5"/>`, "0 0 100 80") },
    ZONE30: { nom: "Entrée de zone 30", svg: () => svg(`<rect x="10" y="4" width="80" height="92" rx="6" fill="${W}" stroke="${N}" stroke-width="2"/><circle cx="50" cy="40" r="28" fill="${W}" stroke="${R}" stroke-width="7"/>` + texte("30", 26, N, 41) + texte("ZONE", 15, N, 82)) },
    ZONE_REN: { nom: "Entrée de zone de rencontre (20 km/h, piétons prioritaires)", svg: () => svg(`<rect x="6" y="6" width="88" height="88" rx="6" fill="${B}"/>` + pieton(4, 20, .5, W) + voiture(44, 50, .5, W) + texte("20", 18, W, 24)) },

    /* ── Feux ── */
    FEU_ROUGE:  { nom: "Feu tricolore au rouge", svg: () => feu(0) },
    FEU_ORANGE: { nom: "Feu tricolore à l'orange (jaune fixe)", svg: () => feu(1) },
    FEU_VERT:   { nom: "Feu tricolore au vert", svg: () => feu(2) },
    FEU_CLIGNOTANT: { nom: "Feu jaune clignotant", svg: () => feu(1, true) },
    FEU_PIETON_ROUGE: { nom: "Feu piéton rouge (bonhomme rouge)", svg: () => feuPieton(false) },
    FEU_PIETON_VERT:  { nom: "Feu piéton vert (bonhomme vert)", svg: () => feuPieton(true) },

    /* ── Marquages ── */
    LIGNE_CONTINUE:   { nom: "Ligne continue (interdiction de la franchir ou de la chevaucher)", svg: () => route(`<rect x="47" y="0" width="6" height="100" fill="${W}"/>`) },
    LIGNE_DISCONTINUE:{ nom: "Ligne discontinue (franchissement autorisé)", svg: () => route(`<path d="M50 0 V100" stroke="${W}" stroke-width="6" stroke-dasharray="14 10"/>`) },
    LIGNE_MIXTE:      { nom: "Ligne mixte (continue d'un côté, discontinue de l'autre)", svg: () => route(`<rect x="44" y="0" width="5" height="100" fill="${W}"/><path d="M55 0 V100" stroke="${W}" stroke-width="5" stroke-dasharray="14 10"/>`) },
    PASSAGE_PIETON:   { nom: "Passage pour piétons (bandes blanches)", svg: () => route(`<g fill="${W}">${[10, 26, 42, 58, 74].map(x => `<rect x="${x}" y="34" width="10" height="32"/>`).join("")}</g>`) },
    LIGNE_STOP:       { nom: "Ligne d'arrêt (ligne continue transversale)", svg: () => route(`<rect x="10" y="56" width="80" height="8" fill="${W}"/>` + texte("STOP", 16, W, 36)) },
    LIGNE_CEDEZ:      { nom: "Ligne « cédez le passage » (ligne discontinue transversale)", svg: () => route(`<path d="M10 60 H90" stroke="${W}" stroke-width="6" stroke-dasharray="8 6"/><path d="M38 20 H62 L50 42 Z" fill="none" stroke="${W}" stroke-width="3"/>`) },

    /* ── Balisage maritime (système A, Europe) ── */
    MER_BABORD:      { nom: "Marque latérale bâbord (rouge, voyant cylindre) — en entrant au port, à laisser à gauche", svg: () => bouee([R], `<rect x="42" y="6" width="16" height="18" fill="${R}" stroke="${N}" stroke-width="1"/>`) },
    MER_TRIBORD:     { nom: "Marque latérale tribord (verte, voyant cône pointe en haut) — en entrant au port, à laisser à droite", svg: () => bouee([V], `<path d="M50 5 L60 24 H40 Z" fill="${V}" stroke="${N}" stroke-width="1"/>`) },
    MER_CARD_NORD:   { nom: "Cardinale Nord (noir au-dessus du jaune, deux cônes pointes en haut) — passer au nord", svg: () => bouee([N, J], cones("hh")) },
    MER_CARD_SUD:    { nom: "Cardinale Sud (jaune au-dessus du noir, deux cônes pointes en bas) — passer au sud", svg: () => bouee([J, N], cones("bb")) },
    MER_CARD_EST:    { nom: "Cardinale Est (noir-jaune-noir, cônes opposés par la base) — passer à l'est", svg: () => bouee([N, J, N], cones("hb")) },
    MER_CARD_OUEST:  { nom: "Cardinale Ouest (jaune-noir-jaune, cônes opposés par la pointe) — passer à l'ouest", svg: () => bouee([J, N, J], cones("bh")) },
    MER_DANGER:      { nom: "Marque de danger isolé (noir avec bande rouge, deux sphères noires)", svg: () => bouee([N, R, N], `<circle cx="50" cy="9" r="5" fill="${N}"/><circle cx="50" cy="21" r="5" fill="${N}"/>`) },
    MER_EAUX_SAINES: { nom: "Marque d'eaux saines (rayures verticales rouges et blanches, sphère rouge)", svg: () => bouee(["rayures"], `<circle cx="50" cy="16" r="7" fill="${R}"/>`) },
    MER_SPECIALE:    { nom: "Marque spéciale (jaune, voyant en X)", svg: () => bouee([J], `<path d="M42 8 L58 24 M58 8 L42 24" stroke="${J}" stroke-width="4"/>`) },
  };

  /* Bouée-espar : bandes de couleur de haut en bas, voyant au-dessus. */
  function bouee(bandes, voyant) {
    const haut = 34, bas = 84, h = (bas - haut) / bandes.length;
    const clip = `<clipPath id="corps"><path d="M38 ${haut} H62 L68 ${bas} H32 Z"/></clipPath>`;
    let corps;
    if (bandes[0] === "rayures") corps = [0, 1, 2, 3, 4, 5].map(k => `<rect x="${32 + k * 6}" y="${haut}" width="6" height="${bas - haut}" fill="${k % 2 ? W : R}"/>`).join("");
    else corps = bandes.map((c, k) => `<rect x="30" y="${haut + k * h}" width="40" height="${h + .5}" fill="${c}"/>`).join("");
    return svg(`<defs>${clip}</defs><rect x="0" y="0" width="100" height="100" rx="8" fill="#9fd3ea"/>
      <path d="M0 86 Q12 82 25 86 T50 86 T75 86 T100 86 V100 H0 Z" fill="#2f7fb0"/>
      <line x1="50" y1="${haut}" x2="50" y2="25" stroke="${N}" stroke-width="2.5"/>${voyant}
      <g clip-path="url(#corps)">${corps}</g><path d="M38 ${haut} H62 L68 ${bas} H32 Z" fill="none" stroke="${N}" stroke-width="1.5"/>`);
  }
  /* Deux cônes superposés : h = pointe en haut, b = pointe en bas. */
  function cones(sens) {
    const cone = (y, d) => d === "h" ? `<path d="M50 ${y} L58 ${y + 9} H42 Z" fill="${N}"/>` : `<path d="M42 ${y} H58 L50 ${y + 9} Z" fill="${N}"/>`;
    return cone(3, sens[0]) + cone(14, sens[1]);
  }
  function feu(allume, clignote) {
    const c = [R, O, V].map((col, i) => `<circle cx="50" cy="${22 + i * 28}" r="11" fill="${i === allume ? col : "#2b2b2b"}" ${i === allume ? `filter="url(#lueur)"` : ""}/>`).join("");
    return svg(`<defs><filter id="lueur"><feGaussianBlur stdDeviation="1.5"/></filter></defs><rect x="32" y="6" width="36" height="88" rx="8" fill="#151515" stroke="#444" stroke-width="2"/>${c}` +
      (clignote ? `<circle cx="50" cy="50" r="15" fill="none" stroke="${O}" stroke-width="1.5" stroke-dasharray="3 3"/>` : ""));
  }
  function feuPieton(vert) {
    return svg(`<rect x="28" y="4" width="44" height="92" rx="8" fill="#151515" stroke="#444" stroke-width="2"/>
      <rect x="34" y="10" width="32" height="38" rx="4" fill="${vert ? "#2b2b2b" : "#3a0d0d"}"/>${!vert ? pieton(30, 9, .4, R) : ""}
      <rect x="34" y="52" width="32" height="38" rx="4" fill="${vert ? "#0d3a1c" : "#2b2b2b"}"/>${vert ? pieton(30, 51, .4, V) : ""}`);
  }
  function route(inner) {
    return svg(`<rect x="0" y="0" width="100" height="100" rx="6" fill="#4a4a4a"/>${inner}`);
  }

  function PANNEAU(code) {
    if (!code) return "";
    const [c, param] = String(code).split(":");
    const p = P[c];
    return p ? p.svg(param) : "";
  }
  function NOM_PANNEAU(code) {
    const [c, param] = String(code || "").split(":");
    const p = P[c];
    if (!p) return "";
    return p.nom + (param && (c === "B14" || c === "B33" || c === "B25") ? " (" + param + " km/h)" : (param ? " (" + param + ")" : ""));
  }

  const API = { PANNEAU, NOM_PANNEAU, CODES: Object.keys(P), LISTE: Object.keys(P).map(k => ({ code: k, nom: P[k].nom, param: !!P[k].param })) };
  if (typeof module !== "undefined" && module.exports) module.exports = API;
  else Object.assign(window, { PANNEAU, NOM_PANNEAU, PANNEAUX_LISTE: API.LISTE });
})();
