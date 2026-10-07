/* Polymates — Habilitation électrique (NF C 18-510) : parcours et thèmes.
   Les chapitres et questions sont dans permis-elec-1.js, -2.js et -3.js.

   Chaque chapitre porte `parcours` : la liste des parcours qui le voient,
   ou ["tous"] pour le tronc commun. Les questions suivent leur chapitre.

   Un parcours « ht: false » ne prépare qu'à la basse tension : les questions
   marquées `domaine: "HT"` (y compris dans le tronc commun) lui sont masquées. */
window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.groupes_parcours = [
    { id: "nonelec", nom: "Je ne suis pas électricien" },
    { id: "elec",    nom: "Je suis électricien" },
  ];

  P.parcours = [
    { id: "b0", groupe: "nonelec", ht: false, icone: "🧹", nom: "B0 seul", titres: "B0 · exécutant et chargé de chantier",
      desc: "Vous travaillez dans un local électrique basse tension ou près d'installations BT sans toucher à l'électricité : peinture, maçonnerie, nettoyage, manutention." },
    { id: "b0h0", groupe: "nonelec", ht: true, icone: "🧱", nom: "B0 · H0 · H0V", titres: "B0 · H0 · H0V",
      desc: "Même métier, mais aussi dans des postes ou des locaux haute tension, et au voisinage de la haute tension pour le H0V." },
    { id: "bfhf", groupe: "nonelec", ht: true, icone: "🚜", nom: "BF · HF", titres: "BF · HF · terrassement",
      desc: "Vous faites des fouilles, tranchées ou forages à proximité de câbles électriques enterrés, basse ou haute tension." },
    { id: "bs", groupe: "nonelec", ht: false, icone: "🔌", nom: "BS", titres: "BS · intervention élémentaire",
      desc: "Vous remplacez à l'identique une prise, un interrupteur, un fusible, une lampe, ou raccordez un appareil sur un circuit en attente." },
    { id: "bem", groupe: "nonelec", ht: false, icone: "🎚️", nom: "BE Manœuvre", titres: "BE Manœuvre",
      desc: "Vous réarmez un disjoncteur, mettez hors ou sous tension un équipement, manœuvrez des appareils de commande, sans autre intervention." },
    { id: "bsbe", groupe: "nonelec", ht: false, icone: "🧰", nom: "BS + BE Manœuvre", titres: "BS · BE Manœuvre",
      desc: "Les deux habilitations ensemble, comme dans la plupart des formations du personnel d'entretien." },
    { id: "bp", groupe: "nonelec", ht: false, icone: "☀️", nom: "Photovoltaïque", titres: "BP",
      desc: "Vous posez, raccordez ou entretenez des modules photovoltaïques, souvent en tant que couvreur ou installateur." },
    { id: "bt", groupe: "elec", ht: false, icone: "⚡", nom: "Électricien basse tension", titres: "B1 · B1V · B2 · B2V · BR · BC",
      desc: "Travaux hors tension et au voisinage, interventions de dépannage et de raccordement, consignations sur des installations basse tension." },
    { id: "be", groupe: "elec", ht: false, icone: "📏", nom: "Mesurage, vérification, essai", titres: "BE Mesurage · BE Vérification · BE Essai",
      desc: "Vous réalisez des mesures, des vérifications ou des essais sur des installations basse tension (techniciens de contrôle, d'essai, de laboratoire)." },
    { id: "btht", groupe: "elec", ht: true, icone: "🏭", nom: "Électricien basse et haute tension", titres: "B1V · B2V · BR · BC · H1 · H1V · H2 · H2V · HC · HE",
      desc: "Tout le programme basse tension, plus la haute tension : postes HTA, cellules, consignation HT, voisinage, manœuvres et opérations spécifiques." },
  ];

  P.themes = {
    DANGER: "Le danger électrique",
    ORGA:   "Organisation, acteurs et habilitation",
    ZONES:  "Domaines de tension et zones d'environnement",
    PREV:   "Prévention, équipements et matériels",
    ACCID:  "Accident et incendie d'origine électrique",
    NE:     "Non-électricien : B0, H0, H0V, BF, HF",
    BSBE:   "BS et BE Manœuvre",
    BT:     "Électricien basse tension",
    HT:     "Électricien haute tension",
    PV:     "Photovoltaïque",
  };
})();
