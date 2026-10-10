/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — medecine.js : plateforme de cours de première année de médecine

   Une seule page (medecine.html) sert les quatre matières. La matière vient de
   l'adresse (?matiere=anatomie) ; son cours est chargé à la demande depuis
   med/med-<id>.js, qui déclare window.MED_COURS[<id>] (voir med/FORMAT-COURS.md).

   Ce que fait la page :
   · sommaire par parties et chapitres, progression, chapitre courant ;
   · vue « accueil » de la matière, vue « chapitre » (objectifs, plan, sections,
     points clés, lexique, QCM corrigés), fiches de révision, lexique A–Z ;
   · recherche plein texte dans tout le cours ;
   · mémoire locale : chapitres lus, dernier chapitre ouvert, scores de QCM.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const MATIERES = [
    { id: "biologie-cellulaire", nom: "Biologie cellulaire", icone: "🧫", couleur: "#7ac8b4" },
    { id: "histologie",          nom: "Histologie",          icone: "🔬", couleur: "#c87a9a" },
    { id: "anatomie",            nom: "Anatomie",            icone: "🫀", couleur: "#c87a7a" },
    { id: "embryologie",         nom: "Embryologie",         icone: "🧬", couleur: "#a07ac8" },
    /* Hors médecine : même plateforme, autre groupe (le menu ⇄ ne propose que les matières du même groupe). */
    { id: "pse", nom: "Prévention Santé Environnement", icone: "🦺", couleur: "#82b4d2", groupe: "pro",
      fichier: "pro/pro-pse.js", sous: "Bac pro · toutes spécialités", eyebrow: "Filière professionnelle · bac pro" },
    { id: "eco-gestion", nom: "Économie-gestion", icone: "📊", couleur: "#d2a56e", groupe: "pro",
      fichier: "pro/pro-eco-gestion.js", sous: "Bac pro · spécialités de la production", eyebrow: "Filière professionnelle · bac pro" },
    { id: "eco-droit", nom: "Économie-droit", icone: "⚖️", couleur: "#9aa8d8", groupe: "pro",
      fichier: "pro/pro-eco-droit.js", sous: "Bac pro · spécialités du tertiaire", eyebrow: "Filière professionnelle · bac pro" },
    { id: "macroeconomie", nom: "Macroéconomie", icone: "🌐", couleur: "#7ab4c8", groupe: "eco",
      fichier: "eco/eco-macroeconomie.js", sous: "Licence · L1 à L3", eyebrow: "Économie et gestion · licence" },
    { id: "svt", nom: "SVT", icone: "🧬", couleur: "#c87a9a", groupe: "college",
      fichier: "college/svt-college.js", sous: "Collège · de la 6e à la 3e", eyebrow: "Matières scolaires · collège" },
    /* Seconde professionnelle : un cours par famille de métiers (menu ⇄ entre familles). */
    { id: "fam-construction", nom: "Construction durable, bâtiment et travaux publics", icone: "🏗️", couleur: "#c8a07a", groupe: "familles",
      fichier: "pro/familles/fam-construction.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-etudes-batiment", nom: "Études et modélisation numérique du bâtiment", icone: "📐", couleur: "#7ab4c8", groupe: "familles",
      fichier: "pro/familles/fam-etudes-batiment.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-agencement", nom: "Agencement, menuiserie et ameublement", icone: "🪚", couleur: "#c89a6a", groupe: "familles",
      fichier: "pro/familles/fam-agencement.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-mecanique", nom: "Réalisation d'ensembles mécaniques et industriels", icone: "⚙️", couleur: "#9aa8b8", groupe: "familles",
      fichier: "pro/familles/fam-mecanique.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-pilotage", nom: "Pilotage et maintenance d'installations automatisées", icone: "🏭", couleur: "#8ab89a", groupe: "familles",
      fichier: "pro/familles/fam-pilotage.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-tne", nom: "Transitions numérique et énergétique", icone: "⚡", couleur: "#e6c27e", groupe: "familles",
      fichier: "pro/familles/fam-tne.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-maintenance", nom: "Maintenance des matériels et des véhicules", icone: "🔧", couleur: "#c8887a", groupe: "familles",
      fichier: "pro/familles/fam-maintenance.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-aeronautique", nom: "Aéronautique", icone: "✈️", couleur: "#7aa0d8", groupe: "familles",
      fichier: "pro/familles/fam-aeronautique.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-gatl", nom: "Gestion administrative, transport et logistique", icone: "🗂️", couleur: "#a0b47a", groupe: "familles",
      fichier: "pro/familles/fam-gatl.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-relation-client", nom: "Relation client", icone: "🛎️", couleur: "#d88aa8", groupe: "familles",
      fichier: "pro/familles/fam-relation-client.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-graphiques", nom: "Industries graphiques et communication", icone: "🖨️", couleur: "#b48ad8", groupe: "familles",
      fichier: "pro/familles/fam-graphiques.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-hotellerie", nom: "Hôtellerie-restauration", icone: "🍽️", couleur: "#d8a87a", groupe: "familles",
      fichier: "pro/familles/fam-hotellerie.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-alimentation", nom: "Alimentation", icone: "🥖", couleur: "#d8c07a", groupe: "familles",
      fichier: "pro/familles/fam-alimentation.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    { id: "fam-beaute", nom: "Beauté et bien-être", icone: "💄", couleur: "#e09ab8", groupe: "familles",
      fichier: "pro/familles/fam-beaute.js", sous: "Seconde pro · famille de métiers", eyebrow: "Filière professionnelle · seconde" },
    /* BACPRO:debut — généré : spécialités de bac pro (1re et terminale), menu ⇄ par famille */
    { id: "bp-travaux-publics", nom: "Travaux publics", icone: "🎓", couleur: "#c8a07a", groupe: "bp-construction",
      fichier: "pro/bacpro/bp-travaux-publics.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Construction durable" },
    { id: "bp-gros-oeuvre", nom: "Technicien du bâtiment : organisation et réalisation du gros œuvre", icone: "🎓", couleur: "#c8a07a", groupe: "bp-construction",
      fichier: "pro/bacpro/bp-gros-oeuvre.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Construction durable" },
    { id: "bp-patrimoine-bati", nom: "Interventions sur le patrimoine bâti", icone: "🎓", couleur: "#c8a07a", groupe: "bp-construction",
      fichier: "pro/bacpro/bp-patrimoine-bati.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Construction durable" },
    { id: "bp-menuiserie-alu-verre", nom: "Menuiserie aluminium-verre", icone: "🎓", couleur: "#c8a07a", groupe: "bp-construction",
      fichier: "pro/bacpro/bp-menuiserie-alu-verre.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Construction durable" },
    { id: "bp-amenagement-finitions", nom: "Aménagement et finitions du bâtiment", icone: "🎓", couleur: "#c8a07a", groupe: "bp-construction",
      fichier: "pro/bacpro/bp-amenagement-finitions.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Construction durable" },
    { id: "bp-metallerie", nom: "Ouvrages du bâtiment : métallerie", icone: "🎓", couleur: "#c8a07a", groupe: "bp-construction",
      fichier: "pro/bacpro/bp-metallerie.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Construction durable" },
    { id: "bp-etudes-batiment", nom: "Technicien d'études du bâtiment", icone: "🎓", couleur: "#7ab4c8", groupe: "bp-etudes-batiment",
      fichier: "pro/bacpro/bp-etudes-batiment.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Études du bâtiment" },
    { id: "bp-geometre", nom: "Géomètre", icone: "🎓", couleur: "#7ab4c8", groupe: "bp-etudes-batiment",
      fichier: "pro/bacpro/bp-geometre.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Études du bâtiment" },
    { id: "bp-menuisier-agenceur", nom: "Technicien menuisier agenceur", icone: "🎓", couleur: "#c89a6a", groupe: "bp-agencement",
      fichier: "pro/bacpro/bp-menuisier-agenceur.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Agencement, menuiserie" },
    { id: "bp-fabrication-bois", nom: "Technicien de fabrication bois et matériaux associés", icone: "🎓", couleur: "#c89a6a", groupe: "bp-agencement",
      fichier: "pro/bacpro/bp-fabrication-bois.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Agencement, menuiserie" },
    { id: "bp-etude-agencement", nom: "Étude et réalisation d'agencement", icone: "🎓", couleur: "#c89a6a", groupe: "bp-agencement",
      fichier: "pro/bacpro/bp-etude-agencement.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Agencement, menuiserie" },
    { id: "bp-fonderie", nom: "Fonderie", icone: "🎓", couleur: "#9aa8b8", groupe: "bp-mecanique",
      fichier: "pro/bacpro/bp-fonderie.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Ensembles mécaniques" },
    { id: "bp-microtechniques", nom: "Microtechniques", icone: "🎓", couleur: "#9aa8b8", groupe: "bp-mecanique",
      fichier: "pro/bacpro/bp-microtechniques.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Ensembles mécaniques" },
    { id: "bp-modeleur", nom: "Technicien modeleur", icone: "🎓", couleur: "#9aa8b8", groupe: "bp-mecanique",
      fichier: "pro/bacpro/bp-modeleur.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Ensembles mécaniques" },
    { id: "bp-chaudronnerie", nom: "Technicien en chaudronnerie industrielle", icone: "🎓", couleur: "#9aa8b8", groupe: "bp-mecanique",
      fichier: "pro/bacpro/bp-chaudronnerie.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Ensembles mécaniques" },
    { id: "bp-traitements-materiaux", nom: "Traitements des matériaux", icone: "🎓", couleur: "#9aa8b8", groupe: "bp-mecanique",
      fichier: "pro/bacpro/bp-traitements-materiaux.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Ensembles mécaniques" },
    { id: "bp-produits-mecaniques", nom: "Technicien en réalisation de produits mécaniques", icone: "🎓", couleur: "#9aa8b8", groupe: "bp-mecanique",
      fichier: "pro/bacpro/bp-produits-mecaniques.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Ensembles mécaniques" },
    { id: "bp-pilote-ligne", nom: "Pilote de ligne de production", icone: "🎓", couleur: "#8ab89a", groupe: "bp-pilotage",
      fichier: "pro/bacpro/bp-pilote-ligne.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Installations automatisées" },
    { id: "bp-chimie-eau-papier", nom: "Procédés de la chimie, de l'eau et des papiers-cartons", icone: "🎓", couleur: "#8ab89a", groupe: "bp-pilotage",
      fichier: "pro/bacpro/bp-chimie-eau-papier.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Installations automatisées" },
    { id: "bp-mspc", nom: "Maintenance des systèmes de production connectés", icone: "🎓", couleur: "#8ab89a", groupe: "bp-pilotage",
      fichier: "pro/bacpro/bp-mspc.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Installations automatisées" },
    { id: "bp-scierie", nom: "Technicien de scierie", icone: "🎓", couleur: "#8ab89a", groupe: "bp-pilotage",
      fichier: "pro/bacpro/bp-scierie.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Installations automatisées" },
    { id: "bp-melec", nom: "MELEC (électricité et environnements connectés)", icone: "🎓", couleur: "#e6c27e", groupe: "bp-tne",
      fichier: "pro/bacpro/bp-melec.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Transitions numérique et énergétique" },
    { id: "bp-chauffage-clim", nom: "Installateur en chauffage, climatisation et énergies renouvelables", icone: "🎓", couleur: "#e6c27e", groupe: "bp-tne",
      fichier: "pro/bacpro/bp-chauffage-clim.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Transitions numérique et énergétique" },
    { id: "bp-froid", nom: "Métiers du froid et des énergies renouvelables", icone: "🎓", couleur: "#e6c27e", groupe: "bp-tne",
      fichier: "pro/bacpro/bp-froid.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Transitions numérique et énergétique" },
    { id: "bp-efficacite-energetique", nom: "Maintenance et efficacité énergétique", icone: "🎓", couleur: "#e6c27e", groupe: "bp-tne",
      fichier: "pro/bacpro/bp-efficacite-energetique.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Transitions numérique et énergétique" },
    { id: "bp-ciel", nom: "CIEL (cybersécurité, informatique et réseaux, électronique)", icone: "🎓", couleur: "#e6c27e", groupe: "bp-tne",
      fichier: "pro/bacpro/bp-ciel.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Transitions numérique et énergétique" },
    { id: "bp-maintenance-vehicules", nom: "Maintenance des véhicules", icone: "🎓", couleur: "#c8887a", groupe: "bp-maintenance",
      fichier: "pro/bacpro/bp-maintenance-vehicules.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Maintenance matériels et véhicules" },
    { id: "bp-maintenance-materiels", nom: "Maintenance des matériels", icone: "🎓", couleur: "#c8887a", groupe: "bp-maintenance",
      fichier: "pro/bacpro/bp-maintenance-materiels.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Maintenance matériels et véhicules" },
    { id: "bp-aeronautique", nom: "Aéronautique", icone: "🎓", couleur: "#7aa0d8", groupe: "bp-aeronautique",
      fichier: "pro/bacpro/bp-aeronautique.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Aéronautique" },
    { id: "bp-aviation-generale", nom: "Aviation générale", icone: "🎓", couleur: "#7aa0d8", groupe: "bp-aeronautique",
      fichier: "pro/bacpro/bp-aviation-generale.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Aéronautique" },
    { id: "bp-agora", nom: "AGOrA (gestion administrative)", icone: "🎓", couleur: "#a0b47a", groupe: "bp-gatl",
      fichier: "pro/bacpro/bp-agora.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Gestion, transport, logistique" },
    { id: "bp-logistique", nom: "Métiers de la logistique", icone: "🎓", couleur: "#a0b47a", groupe: "bp-gatl",
      fichier: "pro/bacpro/bp-logistique.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Gestion, transport, logistique" },
    { id: "bp-otm", nom: "Organisation de transport de marchandises", icone: "🎓", couleur: "#a0b47a", groupe: "bp-gatl",
      fichier: "pro/bacpro/bp-otm.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Gestion, transport, logistique" },
    { id: "bp-commerce-vente", nom: "Métiers du commerce et de la vente", icone: "🎓", couleur: "#d88aa8", groupe: "bp-relation-client",
      fichier: "pro/bacpro/bp-commerce-vente.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Relation client" },
    { id: "bp-accueil", nom: "Métiers de l'accueil", icone: "🎓", couleur: "#d88aa8", groupe: "bp-relation-client",
      fichier: "pro/bacpro/bp-accueil.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Relation client" },
    { id: "bp-faconnage", nom: "Façonnage de produits imprimés, routage", icone: "🎓", couleur: "#b48ad8", groupe: "bp-graphiques",
      fichier: "pro/bacpro/bp-faconnage.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Industries graphiques" },
    { id: "bp-rpip", nom: "Réalisation de produits imprimés et plurimédia", icone: "🎓", couleur: "#b48ad8", groupe: "bp-graphiques",
      fichier: "pro/bacpro/bp-rpip.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Industries graphiques" },
    { id: "bp-cuisine", nom: "Cuisine", icone: "🎓", couleur: "#d8a87a", groupe: "bp-hotellerie",
      fichier: "pro/bacpro/bp-cuisine.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hôtellerie-restauration" },
    { id: "bp-csr", nom: "Commercialisation et services en restauration", icone: "🎓", couleur: "#d8a87a", groupe: "bp-hotellerie",
      fichier: "pro/bacpro/bp-csr.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hôtellerie-restauration" },
    { id: "bp-boulanger-patissier", nom: "Boulanger-pâtissier", icone: "🎓", couleur: "#d8c07a", groupe: "bp-alimentation",
      fichier: "pro/bacpro/bp-boulanger-patissier.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Alimentation" },
    { id: "bp-boucher", nom: "Boucher charcutier traiteur", icone: "🎓", couleur: "#d8c07a", groupe: "bp-alimentation",
      fichier: "pro/bacpro/bp-boucher.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Alimentation" },
    { id: "bp-poissonnier", nom: "Poissonnier écailler traiteur", icone: "🎓", couleur: "#d8c07a", groupe: "bp-alimentation",
      fichier: "pro/bacpro/bp-poissonnier.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Alimentation" },
    { id: "bp-esthetique", nom: "Esthétique cosmétique parfumerie", icone: "🎓", couleur: "#e09ab8", groupe: "bp-beaute",
      fichier: "pro/bacpro/bp-esthetique.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Beauté et bien-être" },
    { id: "bp-coiffure", nom: "Métiers de la coiffure", icone: "🎓", couleur: "#e09ab8", groupe: "bp-beaute",
      fichier: "pro/bacpro/bp-coiffure.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Beauté et bien-être" },
    { id: "bp-assp", nom: "Accompagnement, soins et services à la personne", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-assp.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-aepa", nom: "Animation enfance et personnes âgées", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-aepa.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-hps", nom: "Hygiène, propreté et stérilisation", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-hps.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-optique", nom: "Optique lunetterie", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-optique.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-prothese-dentaire", nom: "Technicien en prothèse dentaire", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-prothese-dentaire.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-orthopedie", nom: "Technicien en appareillage orthopédique", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-orthopedie.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-perruquier", nom: "Perruquier posticheur", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-perruquier.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-couture", nom: "Métiers de la couture et de la confection", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-couture.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-cuir", nom: "Métiers du cuir", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-cuir.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-photographie", nom: "Photographie", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-photographie.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-securite", nom: "Métiers de la sécurité", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-securite.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-carrossier", nom: "Carrossier peintre automobile", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-carrossier.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-nautique", nom: "Maintenance nautique", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-nautique.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-fluvial", nom: "Transport fluvial", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-fluvial.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-conducteur-routier", nom: "Conducteur transport routier de marchandises", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-conducteur-routier.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-plastiques", nom: "Plastiques et composites", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-plastiques.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-prototypage-3d", nom: "Modélisation et prototypage 3D", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-prototypage-3d.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-nucleaire", nom: "Techniques d'interventions sur installations nucléaires", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-nucleaire.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-pipac", nom: "Production en industries pharmaceutiques, alimentaires et cosmétiques", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-pipac.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-constructeur-bois", nom: "Technicien constructeur bois", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-constructeur-bois.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-pierre", nom: "Métiers et arts de la pierre", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-pierre.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    { id: "bp-gppe", nom: "Gestion des pollutions et protection de l'environnement", icone: "🎓", couleur: "#82b4d2", groupe: "bp-hors",
      fichier: "pro/bacpro/bp-gppe.js", sous: "Bac pro · 1re et terminale", eyebrow: "Filière professionnelle · bac pro · Hors famille" },
    /* BACPRO:fin */
  ];

  const $ = id => document.getElementById(id);
  const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

  const params = new URLSearchParams(location.search);
  const matiereId = params.get("matiere") || "";
  const META = MATIERES.find(m => m.id === matiereId);

  let COURS = null;        // l'objet de la matière
  let CHAPS = [];          // chapitres à plat : { ...chap, pi, ci, num, partie }
  let MEMO = { lus: {}, dernier: null, qcm: {} };
  let vueCourante = "accueil";
  let chapCourant = null;

  /* ── Mémoire locale, propre à l'élève et à la matière ── */
  function cleMemo() {
    const u = window.MB_AUTH && MB_AUTH.user();
    const qui = u ? (u.id || u.email || "anon") : "anon";
    return "mb_med_" + matiereId + "_" + qui;
  }
  function chargerMemo() {
    try { const m = JSON.parse(localStorage.getItem(cleMemo())); if (m && typeof m === "object") MEMO = Object.assign({ lus: {}, dernier: null, qcm: {} }, m); }
    catch (_) {}
  }
  function sauverMemo() { try { localStorage.setItem(cleMemo(), JSON.stringify(MEMO)); } catch (_) {} }

  let toastT;
  function toast(t) { const e = $("toast"); e.textContent = t; e.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => e.classList.remove("on"), 2200); }

  /* ── Menu de changement de matière ── */
  function dessinerMenu() {
    $("som-menu").innerHTML = MATIERES.filter(m => (m.groupe || "med") === ((META && META.groupe) || "med")).map(m =>
      `<a href="medecine.html?matiere=${m.id}" class="${m.id === matiereId ? "actif" : ""}"><span class="m-ic">${m.icone}</span>${esc(m.nom)}</a>`).join("");
    $("som-switch").onclick = e => { e.stopPropagation(); $("som-menu").classList.toggle("on"); };
    document.addEventListener("click", () => $("som-menu").classList.remove("on"));
  }

  /* ── Chargement du cours ── */
  function erreur(html) {
    $("vue-accueil").innerHTML = `<div class="erreur">${html}</div>`;
    $("som-liste").innerHTML = "";
  }
  if (!META) {
    dessinerMenu();
    erreur(`<p style="font-family:var(--serif);font-size:1.4rem;margin-bottom:.8rem">Quelle matière ?</p>
      <p style="color:var(--muted);margin-bottom:1.2rem">Choisis une matière de médecine :</p>
      ${MATIERES.map(m => `<a class="btn" style="margin:.25rem" href="medecine.html?matiere=${m.id}">${m.icone} ${esc(m.nom)}</a>`).join("")}`);
    return;
  }

  document.documentElement.style.setProperty("--sc", META.couleur);
  document.title = "Polymates — " + META.nom;
  $("som-icone").textContent = META.icone;
  $("som-nom").textContent = META.nom;
  $("som-sous").textContent = META.sous || "PASS · 1re année";
  $("fil").innerHTML = `<b>${esc(META.nom)}</b>`;
  dessinerMenu();
  $("vue-accueil").innerHTML = `<div class="vide">Chargement du cours…</div>`;

  const s = document.createElement("script");
  s.src = META.fichier || ("med/med-" + matiereId + ".js");
  s.onload = () => { COURS = window.MED_COURS && window.MED_COURS[matiereId]; COURS ? demarrer() : erreur("Le cours est introuvable dans le fichier chargé."); };
  s.onerror = () => erreur(`<p>Le cours de <strong>${esc(META.nom)}</strong> n'a pas pu être chargé.</p><p style="color:var(--muted);font-size:.9rem;margin-top:.5rem">Le fichier <code>${esc(META.fichier || "med/med-" + matiereId + ".js")}</code> est absent du serveur.</p>`);
  document.head.appendChild(s);

  /* ── Démarrage ── */
  /* ── Spécialités à options : COURS.options = [{ id, nom, desc, icone }] ;
     un chapitre marqué options: ["a"] n'apparaît que pour l'option a,
     les autres chapitres sont communs. Le choix est mémorisé (MEMO.option). ── */
  let COURS_COMPLET = null;
  const nomOption = o => /^option\b/i.test(o.nom) ? o.nom : "Option : " + o.nom;
  const optionChoisie = () => (COURS_COMPLET && COURS_COMPLET.options || []).find(o => o.id === MEMO.option) || null;
  function filtrerOption() {
    const o = optionChoisie();
    COURS = Object.assign({}, COURS_COMPLET, {
      parties: COURS_COMPLET.parties.map(p => Object.assign({}, p, {
        chapitres: p.chapitres.filter(c => !c.options || !c.options.length || (o && c.options.includes(o.id)))
      })).filter(p => p.chapitres.length)
    });
  }
  function choixOption() {
    chapCourant = null;
    $("som-liste").innerHTML = "";
    $("fil").innerHTML = `<b>${esc(META.nom)}</b> · choix de l'option`;
    const opts = COURS_COMPLET.options;
    $("vue-accueil").innerHTML = `
      <div class="acc-tete">
        <div class="acc-eyebrow">${esc(META.eyebrow || "")}</div>
        <h1>${esc(COURS_COMPLET.nom)}<em>.</em></h1>
        <p class="acc-intro">${esc(COURS_COMPLET.intro || "")}</p>
      </div>
      <h2 class="opt-titre">Choisis ton option</h2>
      <p class="opt-sous">Le cours commun à toutes les options reste visible ; seuls les chapitres propres à ton option s'ajoutent. Tu pourras changer d'option à tout moment.</p>
      <div class="opt-grille">${opts.map(o => `<button type="button" class="opt-carte${MEMO.option === o.id ? " actif" : ""}" data-opt="${esc(o.id)}">
        <span class="opt-ic">${esc(o.icone || META.icone)}</span>
        <span class="opt-nom">${esc(o.nom)}</span>
        ${o.desc ? `<span class="opt-desc">${esc(o.desc)}</span>` : ""}
        <span class="opt-n">${COURS_COMPLET.parties.reduce((n, p) => n + p.chapitres.filter(c => !c.options || !c.options.length || c.options.includes(o.id)).length, 0)} chapitres</span>
      </button>`).join("")}</div>`;
    $("vue-accueil").querySelectorAll("[data-opt]").forEach(b => b.onclick = () => {
      MEMO.option = b.dataset.opt; MEMO.dernier = null; sauverMemo();
      lancer(); if (location.hash) location.hash = ""; else router();
    });
    montrer("accueil");
  }
  function majSousTitre() {
    const o = optionChoisie();
    $("som-sous").innerHTML = esc(META.sous || "PASS · 1re année")
      + (o ? `<br><a href="#option" class="som-opt">${esc(nomOption(o))} · changer</a>` : "");
  }

  function demarrer() {
    COURS_COMPLET = COURS;
    chargerMemo();
    brancher();
    lancer();
    router();
  }
  function lancer() {
    if (COURS_COMPLET.options && COURS_COMPLET.options.length) filtrerOption();
    majSousTitre();
    CHAPS = [];
    let num = 0;
    COURS.parties.forEach((p, pi) => p.chapitres.forEach((c, ci) => {
      num++;
      CHAPS.push(Object.assign({}, c, { pi, ci, num, partie: p }));
    }));
    dessinerSommaire();
    majProgression();
  }

  const chapParId = id => CHAPS.find(c => c.id === id) || null;
  const nbLus = () => CHAPS.filter(c => MEMO.lus[c.id]).length;
  const dureeTotale = () => CHAPS.reduce((n, c) => n + (Number(c.duree) || 20), 0);
  const titrePartieCourt = p => String(p.titre).replace(/^Partie\s*[\dA-Z]+\s*[—–-]\s*/i, "");
  const numPartie = p => (String(p.titre).match(/^Partie\s*([\dA-Z]+)\b/i) || String(p.titre).match(/(\d+)/) || ["", ""])[1];

  /* ── Sommaire ── */
  function dessinerSommaire() {
    const h = COURS.parties.map((p, pi) => {
      const faits = p.chapitres.filter(c => MEMO.lus[c.id]).length;
      const bloc = p.bloc && (pi === 0 || COURS.parties[pi - 1].bloc !== p.bloc) ? `<div class="som-bloc">${esc(p.bloc)}</div>` : "";
      return bloc + `<div class="partie" data-pi="${pi}">
        <button class="partie-tete" type="button">
          <span class="num">${esc(numPartie(p)) || pi + 1}</span>
          <span class="pt">${esc(titrePartieCourt(p))}</span>
          <span class="fait">${faits}/${p.chapitres.length}</span>
          <span class="chev">›</span>
        </button>
        <div class="partie-chaps">${p.chapitres.map(c => {
          const flat = chapParId(c.id);
          return `<button class="chap${MEMO.lus[c.id] ? " lu" : ""}" type="button" data-chap="${esc(c.id)}">
            <span class="coche">✓</span>
            <span class="ct">${esc(c.titre)}</span>
            <span class="cd">${flat.num}</span>
          </button>`; }).join("")}</div>
      </div>`;
    }).join("");
    $("som-liste").innerHTML = h;
    $("som-liste").querySelectorAll(".partie-tete").forEach(b => b.onclick = () => b.parentElement.classList.toggle("ouverte"));
    $("som-liste").querySelectorAll("[data-chap]").forEach(b => b.onclick = () => { location.hash = b.dataset.chap; fermerSommaire(); });
    /* la partie du chapitre courant (ou la première) est ouverte */
    const pi = chapCourant ? chapCourant.pi : 0;
    const el = $("som-liste").querySelector(`.partie[data-pi="${pi}"]`);
    if (el) el.classList.add("ouverte");
  }

  function majSommaire() {
    $("som-liste").querySelectorAll("[data-chap]").forEach(b => {
      b.classList.toggle("actif", !!chapCourant && b.dataset.chap === chapCourant.id);
      b.classList.toggle("lu", !!MEMO.lus[b.dataset.chap]);
    });
    COURS.parties.forEach((p, pi) => {
      const el = $("som-liste").querySelector(`.partie[data-pi="${pi}"] .fait`);
      if (el) el.textContent = p.chapitres.filter(c => MEMO.lus[c.id]).length + "/" + p.chapitres.length;
    });
    if (chapCourant) {
      const part = $("som-liste").querySelector(`.partie[data-pi="${chapCourant.pi}"]`);
      if (part) part.classList.add("ouverte");
      const actif = $("som-liste").querySelector(".chap.actif");
      if (actif) actif.scrollIntoView({ block: "nearest" });
    }
  }

  function majProgression() {
    const n = nbLus(), t = CHAPS.length;
    $("som-progres-n").textContent = n + " / " + t;
    $("som-progres-b").style.width = (t ? Math.round(100 * n / t) : 0) + "%";
  }

  /* ── Navigation ── */
  function montrer(vue) {
    vueCourante = vue;
    document.querySelectorAll(".vue").forEach(v => v.classList.toggle("on", v.id === "vue-" + vue));
    document.querySelectorAll(".som-onglet").forEach(b => b.classList.toggle("on", b.dataset.vue === vue));
    $("btn-lu").style.display = vue === "chapitre" ? "" : "none";
    window.scrollTo({ top: 0, behavior: "auto" });
    majBarreLecture();
  }

  function router() {
    const h = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    if (COURS_COMPLET && COURS_COMPLET.options && COURS_COMPLET.options.length && (h === "option" || !optionChoisie())) { choixOption(); return; }
    if (!h || h === "accueil") { chapCourant = null; dessinerAccueil(); montrer("accueil"); majSommaire(); return; }
    if (h === "fiches")  { chapCourant = null; dessinerFiches();  montrer("fiches");  majSommaire(); return; }
    if (h === "lexique") { chapCourant = null; dessinerLexique(); montrer("lexique"); majSommaire(); return; }
    if (h.startsWith("recherche=")) { chapCourant = null; $("cherche").value = h.slice(10); rechercher(h.slice(10)); montrer("recherche"); majSommaire(); return; }
    const [id, sec] = h.split("/");
    const c = chapParId(id);
    if (!c) { location.hash = ""; return; }
    ouvrirChapitre(c, sec);
  }
  window.addEventListener("hashchange", router);

  function ouvrirChapitre(c, sec) {
    chapCourant = c;
    MEMO.dernier = c.id; sauverMemo();
    dessinerChapitre(c);
    montrer("chapitre");
    majSommaire();
    $("fil").innerHTML = `<b>${esc(META.nom)}</b> · ${esc(titrePartieCourt(c.partie))} · ${esc(c.titre)}`;
    if (sec !== undefined) {
      const el = document.getElementById("s-" + sec);
      if (el) setTimeout(() => el.scrollIntoView({ block: "start" }), 30);
    }
  }

  /* ── Vue : accueil de la matière ── */
  function dessinerAccueil() {
    $("fil").innerHTML = `<b>${esc(META.nom)}</b>`;
    const dernier = MEMO.dernier ? chapParId(MEMO.dernier) : null;
    const suivantNonLu = CHAPS.find(c => !MEMO.lus[c.id]);
    const reprise = dernier && !MEMO.lus[dernier.id] ? dernier : (suivantNonLu || null);
    const nbQcm = CHAPS.reduce((n, c) => n + (c.qcm || []).length, 0);
    const heures = Math.round(dureeTotale() / 60);
    const faits = nbLus();
    $("vue-accueil").innerHTML = `
      <div class="acc-tete">
        <div class="acc-eyebrow">${esc(META.eyebrow || "Médecine · PASS · 1re année")}</div>
        <h1>${esc(COURS.nom)}<em>.</em></h1>
        <p class="acc-intro">${esc(COURS.intro || "")}</p>
        ${optionChoisie() ? `<a class="acc-opt" href="#option"><b>${esc(nomOption(optionChoisie()))}</b> · changer d'option</a>` : ""}
      </div>
      <div class="acc-stats">
        <div class="stat"><div class="n">${COURS.parties.length}</div><div class="l">parties</div></div>
        <div class="stat"><div class="n">${CHAPS.length}</div><div class="l">chapitres</div></div>
        ${nbQcm ? `<div class="stat"><div class="n">${nbQcm}</div><div class="l">QCM corrigés</div></div>` : ""}
        <div class="stat"><div class="n">≈ ${heures} h</div><div class="l">de lecture</div></div>
        <div class="stat"><div class="n">${Math.round(100 * faits / CHAPS.length)} %</div><div class="l">du cours lu</div></div>
      </div>
      ${reprise ? `<a class="reprendre" href="#${esc(reprise.id)}">
        <div><div class="r-l">${dernier && reprise === dernier ? "Reprendre où tu en étais" : (faits ? "Prochain chapitre" : "Commencer le cours")}</div>
        <div class="r-t">${reprise.num}. ${esc(reprise.titre)}</div></div>
        <span class="r-go">Ouvrir →</span></a>`
        : `<div class="reprendre" style="border-color:rgba(130,210,160,.4)"><div><div class="r-l" style="color:var(--green)">Bravo</div><div class="r-t">Tu as lu tout le cours de ${esc(COURS.nom)}.</div></div></div>`}
      ${COURS.parties.map((p, pi) => (p.bloc && (pi === 0 || COURS.parties[pi - 1].bloc !== p.bloc) ? `<div class="acc-bloc">${esc(p.bloc)}</div>` : "") + `<div class="acc-partie">
        <h2><span class="pn">PARTIE ${esc(numPartie(p)) || pi + 1}</span>${esc(titrePartieCourt(p))}
          <span class="pf">${p.chapitres.filter(c => MEMO.lus[c.id]).length} / ${p.chapitres.length} lus</span></h2>
        <div class="acc-grille">${p.chapitres.map(c => {
          const f = chapParId(c.id), sc = MEMO.qcm[c.id];
          return `<button class="carte${MEMO.lus[c.id] ? " lu" : ""}" type="button" data-go="${esc(c.id)}">
            <span class="c-num">CHAPITRE ${f.num}</span>
            <span class="c-titre">${esc(c.titre)}</span>
            <span class="c-meta">${c.niveau ? `<span class="c-niv">${esc(c.niveau)}</span>` : ""}<span>${Number(c.duree) || 20} min</span>${(c.qcm || []).length ? `<span>${c.qcm.length} QCM</span>` : ""}${sc ? `<span class="c-score">${sc.ok}/${sc.n}</span>` : ""}</span>
          </button>`; }).join("")}</div>
      </div>`).join("")}`;
    $("vue-accueil").querySelectorAll("[data-go]").forEach(b => b.onclick = () => location.hash = b.dataset.go);
  }

  /* ── Vue : un chapitre ── */
  function dessinerChapitre(c) {
    const prev = CHAPS[CHAPS.indexOf(c) - 1], next = CHAPS[CHAPS.indexOf(c) + 1];
    const lu = !!MEMO.lus[c.id];
    const b = $("btn-lu");
    b.textContent = lu ? "✓ Chapitre lu" : "Marquer comme lu";
    b.className = "btn" + (lu ? " lu" : "");
    const mots = (c.sections || []).reduce((n, s) => n + String(s.contenu).replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length, 0);

    $("vue-chapitre").innerHTML = `
      <div class="ch-tete">
        <div class="ch-partie">Partie ${esc(numPartie(c.partie))} · ${esc(titrePartieCourt(c.partie))}</div>
        <h1>${c.num}. ${esc(c.titre)}</h1>
        <div class="ch-meta">${c.niveau ? `<span>Niveau ${esc(c.niveau)}</span>` : ""}<span>⏱ ${Number(c.duree) || 20} min</span><span>${(c.sections || []).length} sections</span><span>${mots.toLocaleString("fr-FR")} mots</span>${(c.qcm || []).length ? `<span>${c.qcm.length} QCM</span>` : ""}</div>
      </div>
      ${(c.objectifs || []).length ? `<div class="objectifs"><h3>Objectifs du chapitre</h3><ol>${c.objectifs.map(o => `<li>${esc(o)}</li>`).join("")}</ol></div>` : ""}
      <div class="plan"><h3>Dans ce chapitre</h3><ol>${(c.sections || []).map((s2, i) => `<li><a href="#${esc(c.id)}/${i}">${esc(s2.titre)}</a></li>`).join("")}
        ${(c.points_cles || []).length ? `<li><a href="#${esc(c.id)}/cles">Points clés</a></li>` : ""}
        ${(c.qcm || []).length ? `<li><a href="#${esc(c.id)}/qcm">QCM d'entraînement</a></li>` : ""}</ol></div>
      ${(c.sections || []).map((s2, i) => `<section class="section" id="s-${i}">
        <h2><span class="sn">${String(i + 1).padStart(2, "0")}</span>${esc(s2.titre)}</h2>
        <div class="cours">${s2.contenu}</div>
      </section>`).join("")}
      ${(c.points_cles || []).length ? `<div class="bloc" id="s-cles"><h2><span class="ic">◆</span>Points clés à retenir</h2><ul class="cles">${c.points_cles.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>` : ""}
      ${(c.lexique || []).length ? `<div class="bloc"><h2><span class="ic">✎</span>Lexique du chapitre</h2><dl class="lex">${c.lexique.map(l => `<div><dt>${esc(l.terme)}</dt><dd>${esc(l.def)}</dd></div>`).join("")}</dl></div>` : ""}
      ${(c.qcm || []).length ? `<div class="bloc" id="s-qcm"><h2><span class="ic">✔</span>QCM d'entraînement</h2>
        <p style="color:var(--muted);font-size:.88rem;margin-bottom:1rem">Comme au concours : plusieurs propositions peuvent être exactes. Coche celles que tu juges vraies, puis vérifie.</p>
        <div id="qcm-liste">${c.qcm.map((q, qi) => `<div class="qcm-q" data-qi="${qi}">
          <div class="qn">QUESTION ${qi + 1} / ${c.qcm.length}</div>
          <div class="qt">${esc(q.q)}</div>
          ${q.options.map((o, oi) => `<label class="qcm-opt"><input type="checkbox" data-oi="${oi}"><span>${esc(o)}</span></label>`).join("")}
          <div class="qcm-verdict"></div>
          <div class="qcm-expl">${esc(q.explication)}</div>
        </div>`).join("")}</div>
        <div class="qcm-actions">
          <button class="btn plein" id="qcm-verifier">Vérifier mes réponses</button>
          <button class="btn" id="qcm-refaire" style="display:none">Refaire le QCM</button>
          <span class="qcm-score" id="qcm-score">${MEMO.qcm[c.id] ? "Dernier score : " + MEMO.qcm[c.id].ok + " / " + MEMO.qcm[c.id].n : ""}</span>
        </div></div>` : ""}
      <div class="nav-chap">
        ${prev ? `<a href="#${esc(prev.id)}" class="prec"><span class="nl">← Chapitre précédent</span><span class="nt">${prev.num}. ${esc(prev.titre)}</span></a>` : `<a href="#accueil" class="prec"><span class="nl">← Sommaire</span><span class="nt fin">Retour à l'accueil de ${esc(COURS.nom)}</span></a>`}
        ${next ? `<a href="#${esc(next.id)}" class="suiv"><span class="nl">Chapitre suivant →</span><span class="nt">${next.num}. ${esc(next.titre)}</span></a>` : `<a href="#fiches" class="suiv"><span class="nl">Dernier chapitre</span><span class="nt fin">Réviser avec les fiches →</span></a>`}
      </div>`;

    if ((c.qcm || []).length) brancherQcm(c);
  }

  function brancherQcm(c) {
    const liste = $("qcm-liste");
    $("qcm-verifier").onclick = () => {
      let ok = 0;
      liste.querySelectorAll(".qcm-q").forEach(div => {
        const q = c.qcm[Number(div.dataset.qi)];
        const bonnes = new Set(q.bonnes);
        let juste = true;
        div.querySelectorAll(".qcm-opt").forEach(lab => {
          const inp = lab.querySelector("input"), oi = Number(inp.dataset.oi);
          inp.disabled = true;
          if (bonnes.has(oi) && inp.checked) lab.classList.add("juste");
          else if (!bonnes.has(oi) && inp.checked) { lab.classList.add("faux"); juste = false; }
          else if (bonnes.has(oi) && !inp.checked) { lab.classList.add("oubli"); juste = false; }
        });
        if (juste) ok++;
        div.classList.add("corrige");
        const v = div.querySelector(".qcm-verdict");
        v.textContent = juste ? "✓ Exact" : "✗ Réponse incomplète ou fausse — bonnes réponses : " + [...bonnes].sort().map(i => "ABCDE"[i] || i + 1).join(", ");
        v.style.color = juste ? "var(--green)" : "var(--coral)";
      });
      MEMO.qcm[c.id] = { ok, n: c.qcm.length }; sauverMemo();
      $("qcm-score").textContent = "Score : " + ok + " / " + c.qcm.length;
      $("qcm-verifier").style.display = "none";
      $("qcm-refaire").style.display = "";
      if (ok === c.qcm.length && !MEMO.lus[c.id]) toast("Sans faute ! Pense à marquer le chapitre comme lu.");
    };
    $("qcm-refaire").onclick = () => {
      liste.querySelectorAll(".qcm-q").forEach(div => { div.classList.remove("corrige"); div.querySelectorAll(".qcm-opt").forEach(l => { l.className = "qcm-opt"; const i = l.querySelector("input"); i.disabled = false; i.checked = false; }); });
      $("qcm-verifier").style.display = ""; $("qcm-refaire").style.display = "none";
      liste.scrollIntoView({ block: "start" });
    };
  }

  function basculerLu() {
    if (!chapCourant) return;
    const c = chapCourant;
    if (MEMO.lus[c.id]) { delete MEMO.lus[c.id]; toast("Chapitre remis à « non lu »."); }
    else {
      MEMO.lus[c.id] = Date.now();
      const next = CHAPS[CHAPS.indexOf(c) + 1];
      toast(next ? "Chapitre lu. Suivant : " + next.titre : "Chapitre lu. C'était le dernier !");
    }
    sauverMemo();
    const lu = !!MEMO.lus[c.id];
    $("btn-lu").textContent = lu ? "✓ Chapitre lu" : "Marquer comme lu";
    $("btn-lu").className = "btn" + (lu ? " lu" : "");
    majSommaire(); majProgression();
  }

  /* ── Vue : recherche ── */
  const texteDe = html => String(html).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const normalise = t => String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  function extrait(texte, q, marge) {
    const i = normalise(texte).indexOf(normalise(q));
    if (i < 0) return esc(texte.slice(0, 2 * marge)) + (texte.length > 2 * marge ? "…" : "");
    const d = Math.max(0, i - marge), f = Math.min(texte.length, i + q.length + marge);
    const avant = esc(texte.slice(d, i)), mot = esc(texte.slice(i, i + q.length)), apres = esc(texte.slice(i + q.length, f));
    return (d ? "…" : "") + avant + "<mark>" + mot + "</mark>" + apres + (f < texte.length ? "…" : "");
  }
  function rechercher(q) {
    q = String(q || "").trim();
    const vue = $("vue-recherche");
    $("fil").innerHTML = `<b>${esc(META.nom)}</b> · recherche`;
    if (q.length < 2) { vue.innerHTML = `<div class="vide">Tape au moins deux lettres.</div>`; return; }
    const nq = normalise(q), res = [];
    CHAPS.forEach(c => {
      if (normalise(c.titre).includes(nq)) res.push({ c, ou: "Titre du chapitre", t: c.titre, x: (c.objectifs || [])[0] || "", score: 5 });
      (c.sections || []).forEach((s2, i) => {
        const txt = texteDe(s2.contenu);
        if (normalise(s2.titre).includes(nq)) res.push({ c, sec: i, ou: "Section", t: s2.titre, x: txt.slice(0, 160), score: 4 });
        else if (normalise(txt).includes(nq)) res.push({ c, sec: i, ou: "Dans le cours", t: s2.titre, x: extrait(txt, q, 90), score: 2, brut: true });
      });
      (c.lexique || []).forEach(l => { if (normalise(l.terme).includes(nq)) res.push({ c, ou: "Lexique", t: l.terme, x: l.def, score: 4 }); });
      (c.points_cles || []).forEach(p => { if (normalise(p).includes(nq)) res.push({ c, sec: "cles", ou: "Point clé", t: c.titre, x: extrait(p, q, 120), score: 3, brut: true }); });
    });
    res.sort((a, b) => b.score - a.score || a.c.num - b.c.num);
    const vus = new Set(); const uniq = res.filter(r => { const k = r.c.id + "|" + (r.sec ?? "") + "|" + r.t; if (vus.has(k)) return false; vus.add(k); return true; }).slice(0, 60);
    vue.innerHTML = `<div class="res-tete">${uniq.length ? uniq.length + " résultat" + (uniq.length > 1 ? "s" : "") : "Aucun résultat"} pour « ${esc(q)} »${res.length > 60 ? " (les 60 premiers)" : ""}</div>`
      + uniq.map(r => `<button class="res" type="button" data-go="${esc(r.c.id)}${r.sec !== undefined ? "/" + r.sec : ""}">
          <div class="r-ou">${esc(r.ou)} · chapitre ${r.c.num}</div>
          <div class="r-t">${r.brut ? esc(r.t) : extrait(r.t, q, 80)}</div>
          <div class="r-x">${r.brut ? r.x : extrait(r.x, q, 100)}</div></button>`).join("");
    vue.querySelectorAll("[data-go]").forEach(b => b.onclick = () => location.hash = b.dataset.go);
  }

  /* ── Vue : fiches de révision (tous les points clés) ── */
  function dessinerFiches() {
    $("fil").innerHTML = `<b>${esc(META.nom)}</b> · fiches de révision`;
    $("vue-fiches").innerHTML = `
      <div class="acc-tete"><div class="acc-eyebrow">${esc(COURS.nom)}</div><h1>Fiches de <em>révision</em></h1>
        <p class="acc-intro">Les points clés de chaque chapitre, réunis en une seule page. Filtre par mot, ou imprime la page pour réviser hors ligne.</p></div>
      <input class="filtre" id="filtre-fiches" type="search" placeholder="Filtrer les fiches…" autocomplete="off">
      <div id="fiches-liste">${COURS.parties.map((p, pi) => `<h2 class="acc-partie" style="font-family:var(--serif);font-size:1.25rem;margin:1.8rem 0 .8rem"><span class="pn" style="font-family:var(--mono);font-size:.66rem;color:var(--sc);letter-spacing:.1em;margin-right:.6rem">PARTIE ${esc(numPartie(p)) || pi + 1}</span>${esc(titrePartieCourt(p))}</h2>
        ${p.chapitres.map(c => { const f = chapParId(c.id); return `<div class="fiche" data-txt="${esc(normalise(c.titre + " " + (c.points_cles || []).join(" ")))}">
          <h3><span class="fn">${f.num}</span>${esc(c.titre)}<a href="#${esc(c.id)}">ouvrir →</a></h3>
          <ul class="cles">${(c.points_cles || []).map(k => `<li>${esc(k)}</li>`).join("") || "<li>Pas de points clés pour ce chapitre.</li>"}</ul></div>`; }).join("")}`).join("")}</div>`;
    $("filtre-fiches").oninput = e => {
      const q = normalise(e.target.value.trim());
      $("vue-fiches").querySelectorAll(".fiche").forEach(f => f.style.display = !q || f.dataset.txt.includes(q) ? "" : "none");
    };
  }

  /* ── Vue : lexique A–Z ── */
  function dessinerLexique() {
    $("fil").innerHTML = `<b>${esc(META.nom)}</b> · lexique`;
    const tous = [];
    CHAPS.forEach(c => (c.lexique || []).forEach(l => tous.push({ terme: l.terme, def: l.def, c })));
    tous.sort((a, b) => a.terme.localeCompare(b.terme, "fr", { sensitivity: "base" }));
    let lettre = "", h = "";
    tous.forEach(l => {
      const L = normalise(l.terme.charAt(0)).toUpperCase();
      if (L !== lettre) { lettre = L; h += `<div class="lettre" data-l="${L}">${L}</div>`; }
      h += `<dl class="lex-ligne" data-txt="${esc(normalise(l.terme + " " + l.def))}"><dt>${esc(l.terme)}<a href="#${esc(l.c.id)}" title="${esc(l.c.titre)}">chap. ${l.c.num} →</a></dt><dd>${esc(l.def)}</dd></dl>`;
    });
    $("vue-lexique").innerHTML = `
      <div class="acc-tete"><div class="acc-eyebrow">${esc(COURS.nom)}</div><h1>Lexique <em>A–Z</em></h1>
        <p class="acc-intro">${tous.length} termes définis dans le cours. Chaque entrée renvoie au chapitre où elle est expliquée.</p></div>
      <input class="filtre" id="filtre-lex" type="search" placeholder="Chercher un terme…" autocomplete="off">
      <div id="lex-liste">${h}</div>`;
    $("filtre-lex").oninput = e => {
      const q = normalise(e.target.value.trim());
      const vis = new Set();
      $("vue-lexique").querySelectorAll(".lex-ligne").forEach(f => { const ok = !q || f.dataset.txt.includes(q); f.style.display = ok ? "" : "none"; if (ok) vis.add(normalise(f.querySelector("dt").textContent.charAt(0)).toUpperCase()); });
      $("vue-lexique").querySelectorAll(".lettre").forEach(l => l.style.display = vis.has(l.dataset.l) ? "" : "none");
    };
  }

  /* ── Divers : barre de lecture, sommaire mobile, clavier ── */
  function majBarreLecture() {
    const d = document.documentElement;
    const max = d.scrollHeight - d.clientHeight;
    $("lecture-barre").style.width = (vueCourante === "chapitre" && max > 0 ? Math.min(100, 100 * d.scrollTop / max) : 0) + "%";
  }
  function fermerSommaire() { document.body.classList.remove("som-ouvert"); }

  function brancher() {
    $("btn-lu").onclick = basculerLu;
    $("haut-menu").onclick = () => document.body.classList.toggle("som-ouvert");
    $("voile").onclick = fermerSommaire;
    document.querySelectorAll(".som-onglet").forEach(b => b.onclick = () => { location.hash = b.dataset.vue === "accueil" ? "accueil" : b.dataset.vue; fermerSommaire(); });
    let minuteur;
    $("cherche").addEventListener("input", e => {
      clearTimeout(minuteur);
      const q = e.target.value.trim();
      minuteur = setTimeout(() => {
        if (q.length >= 2) { history.replaceState(null, "", "#recherche=" + encodeURIComponent(q)); chapCourant = null; rechercher(q); montrer("recherche"); majSommaire(); fermerSommaire(); }
        else if (!q && vueCourante === "recherche") location.hash = "accueil";
      }, 250);
    });
    $("cherche").addEventListener("keydown", e => { if (e.key === "Escape") { e.target.value = ""; e.target.blur(); if (vueCourante === "recherche") location.hash = "accueil"; } });
    window.addEventListener("scroll", majBarreLecture, { passive: true });
    document.addEventListener("keydown", e => {
      if (e.target.matches("input, textarea, select") || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === "/") { e.preventDefault(); $("cherche").focus(); return; }
      if (vueCourante !== "chapitre" || !chapCourant) return;
      const i = CHAPS.indexOf(chapCourant);
      if (e.key === "ArrowRight" && CHAPS[i + 1]) location.hash = CHAPS[i + 1].id;
      if (e.key === "ArrowLeft"  && CHAPS[i - 1]) location.hash = CHAPS[i - 1].id;
      if (e.key === "l" || e.key === "L") basculerLu();
    });
  }
})();
