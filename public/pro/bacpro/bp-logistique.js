/* Polymates — Bac pro Métiers de la logistique — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-logistique"] = {
 "id": "bp-logistique",
 "nom": "Métiers de la logistique",
 "icone": "🎓",
 "couleur": "#a0b47a",
 "intro": "Le baccalauréat professionnel Métiers de la logistique forme des opérateurs et futurs chefs d'équipe capables de réceptionner, stocker, préparer et expédier des marchandises en sécurité, de conduire des engins de manutention et de contribuer à l'efficacité d'un site logistique. Il mène aux métiers d'agent logistique, de cariste, de préparateur de commandes, de magasinier en entreprise industrielle, d'agent de quai puis de chef d'équipe en entrepôt ou chez un prestataire. Ce cours couvre les savoirs de la première et de la terminale, en prolongement du cours de seconde de la famille des métiers de la gestion des transports et de la logistique : opérations logistiques et sécurité, engins de manutention, satisfaction du client et expédition, traçabilité, performance, RSE et coordination d'équipe. Il est organisé en deux blocs : un cours théorique et un bloc d'analyse de documents, qui montre comment exploiter les documents professionnels rencontrés à l'épreuve écrite.",
 "parties": [
  {
   "titre": "Partie 1 — Réaliser les opérations logistiques dans un environnement sécurisé",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "blog-supply-chain",
     "titre": "Situer les activités logistiques dans la chaîne logistique",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire une chaîne logistique globale et distinguer flux physiques, flux d'information et flux financiers.",
      "Identifier les acteurs d'une chaîne logistique et le rôle d'un prestataire logistique.",
      "Situer un entrepôt dans un schéma de flux et caractériser son activité.",
      "Expliquer le rôle des systèmes d'information logistiques (ERP, WMS, TMS, EDI).",
      "Lire et calculer quelques indicateurs simples qui mesurent la performance d'une chaîne."
     ],
     "sections": [
      {
       "titre": "De l'entrepôt à la chaîne logistique globale",
       "contenu": "\n<p>En seconde, l'entrepôt a été présenté comme un lieu où l'on reçoit, stocke, prépare et expédie des marchandises. En première, il faut élargir le regard : l'entrepôt n'est qu'un maillon d'une <strong>chaîne logistique</strong> (en anglais <strong>supply chain</strong>), c'est-à-dire l'ensemble des entreprises et des opérations qui permettent d'amener un produit depuis les matières premières jusqu'au client final, puis parfois de le reprendre en fin de vie.</p>\n<p>Une chaîne logistique se décrit habituellement en quatre grands domaines :</p>\n<ul>\n<li>la <strong>logistique amont</strong> (ou d'approvisionnement) : elle alimente une usine ou un magasin en matières, composants ou marchandises venant des fournisseurs ;</li>\n<li>la <strong>logistique de production</strong> (ou industrielle) : elle organise les flux à l'intérieur d'un site de fabrication, entre les magasins et les postes de travail ;</li>\n<li>la <strong>logistique aval</strong> (ou de distribution) : elle achemine les produits finis jusqu'aux points de vente ou jusqu'aux consommateurs ;</li>\n<li>la <strong>logistique inverse</strong> (ou des retours) : elle traite les retours clients, les emballages réutilisables, les produits à réparer, à recycler ou à détruire.</li>\n</ul>\n<p>Le métier de logisticien de niveau bac pro s'exerce dans chacun de ces domaines : magasinier en usine, préparateur ou chef d'équipe dans un entrepôt de distribution, agent de quai chez un prestataire, agent de logistique inverse dans un centre de retours e-commerce.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la chaîne logistique est un système. Une décision prise à un endroit (par exemple réduire le stock d'un entrepôt) a des effets ailleurs (risque de rupture en magasin, transports plus fréquents). Le logisticien doit toujours se demander ce qui se passe avant et après son poste.</div>\n"
      },
      {
       "titre": "Les trois flux et leur synchronisation",
       "contenu": "\n<p>Toute chaîne logistique fait circuler trois types de flux qui doivent rester synchronisés.</p>\n<table>\n<thead><tr><th>Flux</th><th>Ce qui circule</th><th>Exemples de supports</th><th>Sens habituel</th></tr></thead>\n<tbody>\n<tr><td>Flux physique</td><td>Marchandises, emballages, supports de charge</td><td>Palettes, colis, bacs, conteneurs</td><td>Du fournisseur vers le client (et l'inverse pour les retours)</td></tr>\n<tr><td>Flux d'information</td><td>Commandes, avis d'expédition, états de stock, confirmations</td><td>Messages EDI, bons de préparation, étiquettes, fichiers du WMS</td><td>Dans les deux sens, souvent en avance sur le flux physique</td></tr>\n<tr><td>Flux financier</td><td>Paiements, factures, avoirs, pénalités</td><td>Factures, relevés, virements</td><td>Du client vers le fournisseur, en décalé</td></tr>\n</tbody>\n</table>\n<p>Le flux d'information <strong>précède</strong> en principe le flux physique : la commande arrive avant la marchandise, l'<strong>avis d'expédition</strong> (message envoyé par le fournisseur pour annoncer le contenu exact d'une livraison) arrive avant le camion. Cette avance permet de préparer les ressources : quai, personnel, emplacements. Quand le flux physique arrive sans information, ou que l'information ne correspond pas à la réalité, on parle de <strong>désynchronisation</strong> : c'est l'origine de la plupart des écarts de stock et des litiges.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un stock informatique juste suppose que chaque mouvement physique soit saisi au moment où il a lieu. Un préparateur qui prend un carton dans un emplacement sans valider le prélèvement sur son terminal crée un écart entre le stock réel et le stock théorique, qui provoquera plus tard une rupture « fantôme ».</div>\n"
      },
      {
       "titre": "Les acteurs et les prestataires logistiques",
       "contenu": "\n<p>Une chaîne logistique réunit des <strong>donneurs d'ordre</strong> (industriels, distributeurs, e-commerçants) et des <strong>prestataires</strong> qui réalisent pour eux tout ou partie des opérations. On classe souvent les prestataires selon leur degré d'intégration :</p>\n<ul>\n<li><strong>transporteur</strong> : il déplace la marchandise d'un point à un autre ;</li>\n<li><strong>commissionnaire de transport</strong> : il organise le transport de bout en bout en choisissant lui-même les transporteurs, et il en répond devant son client ;</li>\n<li><strong>prestataire de services logistiques</strong> (souvent appelé <strong>3PL</strong>, third party logistics) : il prend en charge le stockage, la préparation, parfois le transport et des opérations à valeur ajoutée (étiquetage, mise en lot, conditionnement) ;</li>\n<li><strong>4PL</strong> : il pilote l'ensemble de la chaîne d'un client et coordonne plusieurs prestataires, souvent sans posséder d'entrepôt.</li>\n</ul>\n<p>Lorsque l'entreprise réalise elle-même sa logistique, on parle de <strong>logistique intégrée</strong>. Lorsqu'elle la confie à un prestataire, on parle d'<strong>externalisation</strong>. Le choix dépend des volumes, de la saisonnalité, du savoir-faire et des coûts. Le contrat entre le donneur d'ordre et le prestataire fixe un <strong>cahier des charges</strong> et des engagements de performance mesurés par des indicateurs.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un entrepôt de prestataire « multi-clients », un même agent peut travailler le matin pour une marque de cosmétiques et l'après-midi pour un fabricant de pièces automobiles. Chaque client a ses propres règles (contrôles, étiquettes, délais). Avant de prendre son poste, il faut toujours vérifier pour quel client et selon quelle procédure on travaille.</div>\n"
      },
      {
       "titre": "Les types d'entrepôts et de plateformes",
       "contenu": "\n<p>Les sites logistiques ne se ressemblent pas. Leur organisation dépend de leur fonction dans la chaîne.</p>\n<table>\n<thead><tr><th>Type de site</th><th>Fonction principale</th><th>Durée de séjour des marchandises</th></tr></thead>\n<tbody>\n<tr><td>Entrepôt de stockage</td><td>Conserver des stocks importants, souvent par palettes complètes</td><td>Plusieurs semaines à plusieurs mois</td></tr>\n<tr><td>Entrepôt de distribution</td><td>Recevoir en gros, préparer en détail pour des magasins ou des clients</td><td>Quelques jours à quelques semaines</td></tr>\n<tr><td>Plateforme de <strong>cross-docking</strong></td><td>Éclater et regrouper des flux sans stocker</td><td>Quelques heures, moins de 24 h en général</td></tr>\n<tr><td>Magasin d'usine</td><td>Stocker matières et composants pour la production</td><td>Variable, de quelques heures à quelques semaines</td></tr>\n<tr><td>Entrepôt e-commerce</td><td>Préparer de très nombreuses petites commandes à l'unité</td><td>Variable, forte rotation sur une partie de l'assortiment</td></tr>\n</tbody>\n</table>\n<p>Un même site peut combiner plusieurs fonctions. Par exemple, une plateforme de la grande distribution stocke les produits secs à rotation moyenne et fait passer en cross-docking les produits frais, qui ne doivent pas attendre.</p>\n<p>Pour caractériser l'activité d'un entrepôt, on utilise quelques grandeurs : la <strong>surface</strong> (en m²), la <strong>capacité</strong> de stockage (en nombre d'emplacements palettes), les <strong>flux</strong> entrants et sortants (en palettes, colis ou lignes par jour), le nombre de <strong>références</strong> gérées (on dit aussi <strong>SKU</strong>, stock keeping unit) et le nombre de <strong>quais</strong>.</p>\n"
      },
      {
       "titre": "Les systèmes d'information logistiques",
       "contenu": "\n<p>La logistique actuelle est impossible sans outils informatiques. Il faut connaître le rôle de chacun pour savoir où chercher une information.</p>\n<ul>\n<li>L'<strong>ERP</strong> (progiciel de gestion intégré) gère l'ensemble de l'entreprise : achats, ventes, comptabilité, stocks globaux. C'est lui qui génère les commandes clients et fournisseurs.</li>\n<li>Le <strong>WMS</strong> (warehouse management system, logiciel de gestion d'entrepôt) gère le stock à l'emplacement près, attribue les tâches (réception, rangement, préparation), édite les étiquettes et trace chaque mouvement.</li>\n<li>Le <strong>TMS</strong> (transport management system) prépare les expéditions, choisit les transporteurs, optimise les tournées et suit les livraisons.</li>\n<li>L'<strong>EDI</strong> (échange de données informatisé) permet aux systèmes de deux entreprises de se transmettre automatiquement des messages normalisés : commande, avis d'expédition, facture.</li>\n</ul>\n<p>Sur le terrain, l'agent utilise un <strong>terminal portable</strong> (ou terminal embarqué sur chariot) muni d'un lecteur de codes-barres : chaque scan confirme une opération dans le WMS en temps réel.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour retrouver l'origine d'une information, posez-vous trois questions. 1) Qui l'a créée ? (le client, le fournisseur, le WMS). 2) Par quel canal est-elle arrivée ? (EDI, courriel, saisie manuelle). 3) À quel moment le flux physique correspondant a-t-il eu lieu ? Exemple : un écart de quantité sur une réception provient soit de l'avis d'expédition du fournisseur (erreur de saisie chez lui), soit du comptage au quai, soit d'une saisie oubliée dans le WMS. Comparer l'avis d'expédition, le bon de livraison papier et le comptage permet de localiser l'erreur.</div>\n"
      },
      {
       "titre": "Mesurer la performance d'une chaîne logistique",
       "contenu": "\n<p>Le client final juge la chaîne logistique sur un résultat simple : a-t-il reçu le bon produit, en bonne quantité, en bon état, au bon endroit, au bon moment et au bon coût ? Ces exigences forment la règle des « 7 B » souvent citée en logistique (bon produit, bonne quantité, bon état, bon endroit, bon moment, bon coût, bon client).</p>\n<p>Pour suivre ces exigences, on calcule des <strong>indicateurs de performance</strong> (en anglais <strong>KPI</strong>, key performance indicators). Les plus courants à ce stade sont :</p>\n<ul>\n<li>le <strong>taux de service</strong> : part des commandes ou des lignes livrées conformes et à l'heure ;</li>\n<li>le <strong>taux d'erreur de préparation</strong> : part des lignes préparées avec une erreur (référence, quantité) ;</li>\n<li>le <strong>taux de remplissage</strong> de l'entrepôt : emplacements occupés divisés par emplacements disponibles ;</li>\n<li>la <strong>productivité</strong> : quantité traitée par heure de travail (colis par heure, lignes par heure).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un taux de service. Un entrepôt a expédié 1 250 commandes dans la semaine. 38 sont parties en retard et 12 contenaient une erreur (dont 3 étaient aussi en retard). Nombre de commandes non conformes = 38 + 12 − 3 = 47. Commandes parfaites = 1 250 − 47 = 1 203. Taux de service = 1 203 / 1 250 × 100 = 96,24 %, soit environ 96,2 %. Si l'objectif contractuel est de 98 %, l'objectif n'est pas atteint : il faut analyser d'abord les retards, qui représentent la plus grande partie des non-conformités.</div>\n<p>Ces indicateurs sont rassemblés dans un <strong>tableau de bord</strong>, présenté chaque jour ou chaque semaine à l'équipe. Leur lecture et leur exploitation seront approfondies plus loin dans le cours, notamment pour proposer des améliorations.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un indicateur n'a de sens qu'avec un objectif (la cible), une période de mesure et une définition précise (que compte-t-on exactement ?). Deux entrepôts qui ne calculent pas le taux de service de la même façon ne peuvent pas être comparés.</div>\n"
      }
     ],
     "points_cles": [
      "La chaîne logistique couvre l'amont, la production, l'aval et la logistique inverse.",
      "Flux physique, flux d'information et flux financier doivent rester synchronisés ; l'information précède normalement la marchandise.",
      "Un prestataire 3PL réalise stockage, préparation et opérations à valeur ajoutée pour un donneur d'ordre.",
      "Entrepôt de stockage, de distribution, plateforme de cross-docking, magasin d'usine et entrepôt e-commerce ont des organisations différentes.",
      "L'ERP gère l'entreprise, le WMS gère l'entrepôt à l'emplacement près, le TMS gère le transport, l'EDI relie les systèmes entre entreprises.",
      "Chaque mouvement physique doit être saisi immédiatement pour que le stock informatique reste juste.",
      "Un indicateur se définit par une formule, une période et un objectif."
     ],
     "lexique": [
      {
       "terme": "Chaîne logistique (supply chain)",
       "def": "Ensemble des acteurs et des opérations qui amènent un produit des matières premières jusqu'au client final, et parfois en retour."
      },
      {
       "terme": "Logistique inverse",
       "def": "Gestion des flux qui remontent du client vers l'entreprise : retours, emballages réutilisables, produits à réparer ou recycler."
      },
      {
       "terme": "Avis d'expédition",
       "def": "Message envoyé par l'expéditeur pour annoncer le contenu exact d'une livraison avant son arrivée."
      },
      {
       "terme": "Prestataire 3PL",
       "def": "Entreprise qui réalise pour un client des opérations logistiques (stockage, préparation, transport, valeur ajoutée)."
      },
      {
       "terme": "Cross-docking",
       "def": "Passage des marchandises du quai de réception au quai d'expédition sans mise en stock, en moins de 24 h en général."
      },
      {
       "terme": "SKU",
       "def": "Référence unitaire gérée en stock ; chaque variante (taille, couleur, conditionnement) est un SKU distinct."
      },
      {
       "terme": "WMS",
       "def": "Logiciel de gestion d'entrepôt qui suit le stock par emplacement et pilote les tâches des opérateurs."
      },
      {
       "terme": "EDI",
       "def": "Échange automatique de messages normalisés (commandes, avis d'expédition, factures) entre les systèmes informatiques de deux entreprises."
      },
      {
       "terme": "KPI",
       "def": "Indicateur clé de performance, calculé selon une formule précise et comparé à un objectif."
      }
     ]
    },
    {
     "id": "blog-prevention-risques",
     "titre": "Prévenir les risques professionnels dans l'entrepôt",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Appliquer les principes généraux de prévention à une situation de travail en entrepôt.",
      "Identifier les principaux risques d'un site logistique et les mesures de prévention associées.",
      "Lire un plan de circulation et un protocole de sécurité de chargement-déchargement.",
      "Évaluer une situation de manutention manuelle au regard des limites réglementaires et recommandées.",
      "Connaître les règles de base de la prévention incendie dans un entrepôt."
     ],
     "sections": [
      {
       "titre": "Du danger au risque : la démarche de prévention",
       "contenu": "\n<p>Le cours de seconde a présenté les équipements de protection et les gestes de sécurité. En première, on passe à la <strong>démarche de prévention</strong> : comprendre pourquoi un accident se produit et choisir les mesures les plus efficaces.</p>\n<p>Un <strong>danger</strong> est une propriété capable de causer un dommage (une charge lourde, un chariot en mouvement, un produit inflammable). Le <strong>risque</strong> apparaît quand une personne est exposée à ce danger. Il s'évalue en combinant la <strong>gravité</strong> du dommage possible et la <strong>probabilité</strong> (ou fréquence d'exposition) qu'il survienne.</p>\n<p>L'employeur doit évaluer les risques et les consigner dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP), prévu par le Code du travail. Il le met à jour au moins une fois par an dans les entreprises d'au moins 11 salariés, et lors de tout changement important (nouvel engin, nouvelle organisation). Le salarié, de son côté, doit prendre soin de sa sécurité et de celle des autres, respecter les consignes et signaler toute situation dangereuse.</p>\n<p>Le Code du travail fixe neuf <strong>principes généraux de prévention</strong>, à appliquer dans l'ordre de préférence :</p>\n<ol>\n<li>éviter les risques ;</li>\n<li>évaluer les risques qui ne peuvent pas être évités ;</li>\n<li>combattre les risques à la source ;</li>\n<li>adapter le travail à l'homme ;</li>\n<li>tenir compte de l'évolution de la technique ;</li>\n<li>remplacer ce qui est dangereux par ce qui l'est moins ;</li>\n<li>planifier la prévention ;</li>\n<li>donner la priorité aux mesures de protection collective sur la protection individuelle ;</li>\n<li>donner les instructions appropriées aux travailleurs.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'équipement de protection individuelle (chaussures, gilet, gants) vient en dernier recours. Une séparation physique entre piétons et chariots est plus efficace qu'un gilet haute visibilité, car elle supprime l'exposition au lieu de la réduire.</div>\n"
      },
      {
       "titre": "Les principaux risques d'un site logistique",
       "contenu": "\n<table>\n<thead><tr><th>Risque</th><th>Situations typiques</th><th>Mesures de prévention</th></tr></thead>\n<tbody>\n<tr><td>Collision engin-piéton</td><td>Allées partagées, carrefours, sortie de rayonnage</td><td>Plan de circulation, allées piétonnes matérialisées, miroirs, limitation de vitesse, détection de présence</td></tr>\n<tr><td>Chute de charges</td><td>Palette mal filmée, dépose en hauteur, rayonnage endommagé</td><td>Contrôle des palettes, filets ou grilles anti-chute, inspection des rayonnages, respect des charges admissibles</td></tr>\n<tr><td>Chute de hauteur ou de plain-pied</td><td>Quai, sol encombré ou mouillé, montée sur une palette</td><td>Butoirs et niveleurs de quai, rangement, nettoyage, interdiction de monter sur les fourches</td></tr>\n<tr><td>Troubles musculo-squelettiques (TMS)</td><td>Préparation de commandes répétitive, port de colis</td><td>Prélèvement entre hanches et épaules, aides à la manutention, rotation des postes, pauses</td></tr>\n<tr><td>Incendie</td><td>Stock de carton et de plastique, charge des batteries</td><td>Cantonnement, détection, extinction automatique, zone de charge ventilée, consignes</td></tr>\n<tr><td>Ambiances</td><td>Froid en chambre froide, bruit, éclairage insuffisant</td><td>Vêtements adaptés, temps d'exposition limités, éclairage des allées</td></tr>\n</tbody>\n</table>\n<p>La <strong>circulation des engins</strong> est le risque majeur : les accidents de chariots sont parmi les plus graves dans la logistique. Le <strong>plan de circulation</strong> de l'entrepôt sépare autant que possible les flux de piétons, de chariots et de poids lourds. Il indique les sens de circulation, les vitesses, les zones interdites aux piétons, les passages protégés et les zones de stationnement des engins.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une lisse de rayonnage déformée par un choc de chariot doit être signalée immédiatement, même si « elle tient encore ». Une lisse abîmée perd une partie de sa capacité et peut céder sous la charge. L'emplacement doit être vidé et condamné jusqu'à la réparation.</div>\n"
      },
      {
       "titre": "Le chargement et le déchargement des véhicules",
       "contenu": "\n<p>Les opérations de quai réunissent des personnes de plusieurs entreprises : le personnel de l'entrepôt et le conducteur du transporteur. Le Code du travail impose dans ce cas un <strong>protocole de sécurité</strong>, document écrit établi entre l'entreprise d'accueil et le transporteur. Il précise notamment :</p>\n<ul>\n<li>pour l'entreprise d'accueil : les consignes de sécurité du site, le lieu de livraison ou de prise en charge, les modalités d'accès et de stationnement, le plan et les consignes de circulation, les matériels utilisés et qui les conduit ;</li>\n<li>pour le transporteur : les caractéristiques du véhicule, son aménagement, la nature et le conditionnement de la marchandise, les précautions particulières (produits dangereux, température).</li>\n</ul>\n<p>Les règles de base au quai sont les suivantes : véhicule immobilisé (frein, cales ou système de blocage de quai), portes ouvertes et niveleur posé avant toute entrée d'engin, contrôle de l'état du plancher de la remorque, interdiction pour le conducteur de rester dans la zone d'évolution des chariots.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur de nombreux sites, le conducteur remet ses clés ou sa carte au poste de garde et attend dans un local dédié pendant le déchargement. Un système de feux au quai (rouge à l'intérieur tant que le camion n'est pas bloqué, vert quand l'engin peut entrer) évite le départ prématuré du véhicule, cause d'accidents très graves.</div>\n"
      },
      {
       "titre": "La manutention manuelle",
       "contenu": "\n<p>La <strong>manutention manuelle</strong> désigne toute opération de transport ou de soutien d'une charge par un ou plusieurs travailleurs (lever, poser, pousser, tirer, porter, déplacer). Le Code du travail demande d'abord de l'éviter en mécanisant, puis, si ce n'est pas possible, de la limiter et de l'organiser.</p>\n<p>Le Code du travail fixe des maxima pour le port habituel de charges : un homme ne doit pas porter habituellement plus de <strong>55 kg</strong> (jusqu'à 105 kg seulement s'il a été reconnu apte par le médecin du travail), une femme ne doit pas porter plus de <strong>25 kg</strong>. Ces valeurs sont des plafonds, pas des objectifs : la norme NF X35-109 recommande des valeurs beaucoup plus basses, de l'ordre de 25 kg au maximum pour une charge occasionnelle et moins pour une manutention répétée, en tenant compte de la fréquence, de la distance et de la posture.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer rapidement une situation de manutention. Un préparateur porte des cartons de 18 kg depuis le niveau sol jusqu'à un chariot, 300 fois par jour. Étape 1 : le poids unitaire reste sous les plafonds réglementaires. Étape 2 : calculer le tonnage cumulé : 18 × 300 = 5 400 kg, soit 5,4 t par jour. Étape 3 : relever la posture : prise au sol, donc flexion du dos à chaque prise. Étape 4 : conclure : la charge unitaire est acceptable, mais la fréquence et la posture créent un risque élevé de TMS. Étape 5 : proposer des mesures dans l'ordre des principes de prévention : placer ces cartons sur des emplacements de prélèvement à hauteur de taille, utiliser une table élévatrice, alterner les tâches.</div>\n<p>Le bon geste reste utile mais ne suffit pas : dos droit, jambes fléchies, charge près du corps, pas de torsion du tronc, prise ferme. La formation <strong>PRAP</strong> (prévention des risques liés à l'activité physique) est souvent proposée dans les entreprises logistiques.</p>\n"
      },
      {
       "titre": "Prévention incendie et réglementation des entrepôts",
       "contenu": "\n<p>Un entrepôt contient de grandes quantités de matières combustibles : cartons, palettes en bois, films plastiques, produits eux-mêmes. Au-delà de certains seuils de volume et de quantité de combustibles, un entrepôt couvert est une <strong>installation classée pour la protection de l'environnement</strong> (ICPE). Il est alors soumis, selon sa taille, à déclaration, enregistrement ou autorisation auprès de la préfecture, et doit respecter des prescriptions sur les distances, les murs coupe-feu, les cellules de stockage, la détection et l'extinction.</p>\n<p>Pour l'agent logistique, la prévention incendie se traduit par des gestes quotidiens :</p>\n<ul>\n<li>ne jamais encombrer les issues de secours, les allées de dégagement ni l'accès aux extincteurs et aux robinets d'incendie armés (RIA) ;</li>\n<li>respecter la hauteur de stockage sous les têtes de sprinkleurs (une distance libre est imposée pour que l'eau se répartisse) ;</li>\n<li>respecter l'interdiction de fumer et les zones de charge des batteries ;</li>\n<li>connaître le signal d'alarme, le point de rassemblement et le rôle des équipiers de première intervention et des serre-files.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les batteries au plomb des chariots dégagent de l'hydrogène pendant la charge, gaz explosif. Les batteries lithium-ion présentent un risque d'emballement thermique si elles sont endommagées. La charge se fait uniquement dans le local ou la zone prévus, ventilés, et jamais à côté du stock.</div>\n"
      },
      {
       "titre": "Signaler, analyser, progresser",
       "contenu": "\n<p>La prévention progresse grâce aux informations remontées du terrain. Trois notions sont à connaître.</p>\n<ul>\n<li>Le <strong>presqu'accident</strong> : événement qui aurait pu causer un dommage mais n'en a pas causé (un chariot frôle un piéton). Il doit être déclaré, car il révèle un risque réel.</li>\n<li>L'<strong>accident du travail</strong> : accident survenu par le fait ou à l'occasion du travail. Il doit être signalé à l'employeur dans les 24 heures.</li>\n<li>Le <strong>droit d'alerte et de retrait</strong> : un salarié qui a un motif raisonnable de penser qu'une situation présente un danger grave et imminent pour sa vie ou sa santé doit alerter l'employeur et peut se retirer de cette situation.</li>\n</ul>\n<p>Pour analyser un accident, on recherche les faits, sans chercher de coupable : qui faisait quoi, où, avec quel matériel, dans quelles conditions ? On peut représenter les faits par un <strong>arbre des causes</strong>, en remontant de l'accident vers les faits qui l'ont rendu possible. Les mesures choisies doivent agir sur ces causes, en suivant l'ordre des principes de prévention.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un « quart d'heure sécurité » au début du poste, l'analyse des presqu'accidents et l'affichage des jours sans accident sont des outils courants. Le chef d'équipe joue un rôle clé : c'est lui qui fait appliquer les consignes et fait remonter les situations dangereuses.</div>\n"
      }
     ],
     "points_cles": [
      "Le risque combine la gravité d'un dommage et la probabilité d'exposition au danger.",
      "L'employeur évalue les risques dans le DUERP ; le salarié respecte les consignes et signale les dangers.",
      "Les neuf principes généraux de prévention donnent la priorité à la suppression du risque et à la protection collective.",
      "La circulation des engins est le risque majeur en entrepôt : le plan de circulation sépare piétons, chariots et poids lourds.",
      "Un protocole de sécurité écrit encadre le chargement et le déchargement entre l'entrepôt et le transporteur.",
      "En manutention manuelle, les plafonds du Code du travail ne sont pas des objectifs ; fréquence et posture comptent autant que le poids.",
      "Les issues, extincteurs et RIA restent dégagés ; la charge des batteries se fait dans une zone dédiée et ventilée.",
      "Les presqu'accidents se déclarent : ils révèlent des risques avant l'accident."
     ],
     "lexique": [
      {
       "terme": "Danger",
       "def": "Propriété intrinsèque d'un objet, d'un produit ou d'une situation capable de causer un dommage."
      },
      {
       "terme": "Risque",
       "def": "Combinaison de la gravité d'un dommage possible et de la probabilité d'exposition d'une personne au danger."
      },
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels, tenu par l'employeur et mis à jour régulièrement."
      },
      {
       "terme": "Plan de circulation",
       "def": "Plan qui organise les déplacements des piétons, des engins et des véhicules sur un site : sens, vitesses, zones, passages."
      },
      {
       "terme": "Protocole de sécurité",
       "def": "Document écrit obligatoire entre l'entreprise d'accueil et le transporteur pour les opérations de chargement et de déchargement."
      },
      {
       "terme": "Manutention manuelle",
       "def": "Opération de transport ou de soutien d'une charge exigeant l'effort physique d'un ou plusieurs travailleurs."
      },
      {
       "terme": "TMS",
       "def": "Troubles musculo-squelettiques : affections des muscles, tendons et nerfs liées aux gestes répétitifs et aux postures."
      },
      {
       "terme": "ICPE",
       "def": "Installation classée pour la protection de l'environnement, soumise à une réglementation spécifique selon sa taille et ses dangers."
      },
      {
       "terme": "Presqu'accident",
       "def": "Événement imprévu qui aurait pu provoquer un dommage sans en provoquer."
      }
     ]
    },
    {
     "id": "blog-reception",
     "titre": "Préparer et traiter les réceptions",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Planifier les réceptions à partir des rendez-vous et des avis d'expédition.",
      "Dimensionner les ressources de quai nécessaires à un planning de réception.",
      "Conduire les contrôles quantitatifs et qualitatifs selon une procédure.",
      "Formuler des réserves précises et motivées sur le document de transport.",
      "Traiter un litige de réception et valider l'entrée en stock dans le WMS."
     ],
     "sections": [
      {
       "titre": "Anticiper : le planning des réceptions",
       "contenu": "\n<p>En seconde, la réception a été décrite comme l'accueil du camion, le déchargement et le contrôle de la livraison. En première, l'enjeu est de <strong>préparer</strong> la réception pour qu'elle se déroule sans attente ni erreur.</p>\n<p>La plupart des entrepôts fonctionnent avec une <strong>prise de rendez-vous</strong> : le transporteur ou le fournisseur réserve un créneau horaire et un quai, souvent sur un portail internet. Le service réception construit alors un <strong>planning de réception</strong> qui croise trois sources :</p>\n<ul>\n<li>les <strong>commandes fournisseurs</strong> en attente (dans l'ERP), qui indiquent ce qui doit arriver ;</li>\n<li>les <strong>avis d'expédition</strong> reçus par EDI, qui annoncent le contenu exact de chaque livraison (références, quantités, numéros de lot, nombre de palettes) ;</li>\n<li>les <strong>rendez-vous</strong>, qui fixent l'heure et le quai.</li>\n</ul>\n<p>Le planning permet de répartir les arrivées dans la journée, d'éviter les pics, et de prévoir le personnel et les engins. Un camion en avance ou en retard de plus d'une certaine durée (fixée dans les consignes du site) peut être reçu en fin de journée, voire refusé.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dimensionner le personnel de quai. Le planning du matin (6 h à 13 h, soit 7 h) prévoit 14 semi-remorques de 33 palettes homogènes. Un cariste décharge et contrôle en moyenne 40 palettes par heure. Étape 1 : volume total = 14 × 33 = 462 palettes. Étape 2 : temps nécessaire = 462 / 40 = 11,55 heures de cariste. Étape 3 : nombre de caristes = 11,55 / 7 = 1,65, arrondi à 2 caristes. Étape 4 : vérifier les pics : si 5 camions arrivent entre 6 h et 7 h (165 palettes, soit 4,1 h de travail en une heure), 2 caristes ne suffiront pas ; il faut soit renforcer l'équipe en début de poste, soit étaler les rendez-vous.</div>\n"
      },
      {
       "titre": "Le déroulement de la réception au quai",
       "contenu": "\n<p>Une réception se déroule selon une procédure écrite, propre au site et souvent au client. Les étapes types sont les suivantes.</p>\n<ol>\n<li><strong>Accueil administratif</strong> : contrôle du rendez-vous, remise des documents (lettre de voiture, bon de livraison), affectation d'un quai.</li>\n<li><strong>Mise à quai et sécurisation</strong> du véhicule, selon le protocole de sécurité.</li>\n<li><strong>Contrôle à l'ouverture</strong> : état du chargement, plombs ou scellés intacts, température pour les produits sous température dirigée, traces d'humidité ou de choc.</li>\n<li><strong>Déchargement</strong> et dépose des palettes en zone de réception, dans un ordre qui facilite le contrôle.</li>\n<li><strong>Contrôle quantitatif</strong> : nombre de supports, puis nombre de colis, et éventuellement nombre d'unités.</li>\n<li><strong>Contrôle qualitatif</strong> : état des emballages, conformité des références, des lots et des dates, étiquetage.</li>\n<li><strong>Émargement</strong> du document de transport, avec réserves si nécessaire, et restitution au conducteur.</li>\n<li><strong>Saisie</strong> de la réception dans le WMS et étiquetage des supports avec un identifiant interne.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour les fournisseurs fiables, de nombreux entrepôts pratiquent la <strong>réception par scan du SSCC</strong> : chaque palette porte une étiquette logistique dont le code identifie la palette et renvoie à son contenu décrit dans l'avis d'expédition. Un scan suffit alors à réceptionner la palette, et le contrôle détaillé se fait par sondage. C'est rapide, mais cela suppose une confiance fondée sur l'historique de qualité du fournisseur.</div>\n"
      },
      {
       "titre": "Les niveaux de contrôle",
       "contenu": "\n<p>Contrôler tout, à chaque fois, coûte du temps. Les entrepôts adaptent donc le niveau de contrôle au risque.</p>\n<table>\n<thead><tr><th>Niveau</th><th>Ce qui est contrôlé</th><th>Quand l'utiliser</th></tr></thead>\n<tbody>\n<tr><td>Contrôle global</td><td>Nombre de supports, état apparent</td><td>Fournisseur certifié, produits peu sensibles</td></tr>\n<tr><td>Contrôle par sondage</td><td>Détail de quelques supports tirés au hasard, selon un plan d'échantillonnage</td><td>Fournisseur fiable, volumes importants</td></tr>\n<tr><td>Contrôle détaillé</td><td>Chaque colis, voire chaque unité, avec lots et dates</td><td>Nouveau fournisseur, produits de valeur, produits sensibles, historique de litiges</td></tr>\n</tbody>\n</table>\n<p>Le contrôle qualitatif s'appuie sur la <strong>fiche article</strong> du WMS : dimensions et poids du colis, nombre d'unités par colis (on parle de <strong>colisage</strong>), nombre de colis par couche et de couches par palette (le <strong>plan de palettisation</strong>), conditions de conservation. Une palette qui ne respecte pas le plan de palettisation annoncé est souvent le signe d'un manquant ou d'une erreur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> pour les produits alimentaires et pharmaceutiques, la <strong>date limite</strong> à réception compte autant que la quantité. Beaucoup de cahiers des charges imposent une durée de vie résiduelle minimale à l'arrivée (par exemple les deux tiers de la durée de vie totale). Un lot conforme en quantité mais trop proche de sa date peut être refusé.</div>\n"
      },
      {
       "titre": "Les réserves sur le document de transport",
       "contenu": "\n<p>Lorsque le contrôle révèle un manquant, une avarie ou un retard, le réceptionnaire doit le constater par écrit sur le document de transport (la <strong>lettre de voiture</strong>), en présence du conducteur, avant de le signer. Ces mentions s'appellent des <strong>réserves</strong>. Elles conservent les droits du destinataire face au transporteur.</p>\n<p>Une réserve doit être <strong>précise</strong>, <strong>motivée</strong> et <strong>vérifiable</strong>. Des formules générales comme « sous réserve de déballage » ou « sous réserve de contrôle » n'ont aucune valeur juridique.</p>\n<table>\n<thead><tr><th>Réserve sans valeur</th><th>Réserve recevable</th></tr></thead>\n<tbody>\n<tr><td>Sous réserve de déballage</td><td>Palette 3/12 : 4 colis écrasés côté porte, film déchiré, contenu visible abîmé</td></tr>\n<tr><td>Colis abîmés</td><td>2 colis réf. 40517 mouillés, carton déformé, traces d'eau au plancher</td></tr>\n<tr><td>Manque marchandise</td><td>Reçu 11 palettes au lieu de 12 annoncées ; palette SSCC se terminant par 4471 absente</td></tr>\n</tbody>\n</table>\n<p>En transport routier national, si un dommage n'a pas pu être constaté à la livraison, le destinataire dispose, selon le Code de commerce, d'un délai de <strong>trois jours</strong> (jours fériés non compris) pour adresser au transporteur une protestation motivée par lettre recommandée ou par acte d'huissier. Passé ce délai, l'action contre le transporteur devient très difficile. Les règles du transport international (convention CMR) sont présentées avec la lettre de voiture internationale.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sans réserve écrite sur le document de transport, la livraison est présumée conforme. Prendre une photo datée, noter le numéro de palette et faire contresigner les réserves par le conducteur sont des réflexes indispensables.</div>\n"
      },
      {
       "titre": "Refus, litiges et retours fournisseurs",
       "contenu": "\n<p>Selon la gravité de l'anomalie et la procédure du client, le réceptionnaire peut :</p>\n<ul>\n<li><strong>accepter avec réserves</strong> : la marchandise entre en stock, l'écart est signalé ;</li>\n<li><strong>refuser partiellement</strong> : les colis non conformes repartent avec le transporteur, avec mention sur le document ;</li>\n<li><strong>refuser totalement</strong> : livraison non commandée, produits dangereux non conformes, rupture de la chaîne du froid, livraison hors délai au-delà de la tolérance.</li>\n</ul>\n<p>Les marchandises douteuses (emballage abîmé mais contenu peut-être intact, lot en attente de décision qualité) sont placées dans une <strong>zone de quarantaine</strong> identifiée et bloquées dans le WMS : elles ne peuvent pas être prélevées pour une commande.</p>\n<p>Le litige est ensuite documenté dans une <strong>fiche de non-conformité</strong> (ou fiche litige) : date, fournisseur, transporteur, références, nature de l'écart, photos, décision prise. Cette fiche alimente les indicateurs de qualité fournisseur et permet d'obtenir un avoir ou un remplacement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> traiter un écart de quantité. L'avis d'expédition annonce 48 colis de la référence 40517 ; le comptage donne 45 colis, la palette est intacte et filmée d'origine. Étape 1 : recompter, si possible avec un collègue. Étape 2 : vérifier le plan de palettisation (par exemple 8 colis par couche × 6 couches = 48) : une couche incomplète de 5 colis confirme un manquant de 3 colis chez le fournisseur. Étape 3 : comme la palette était intacte, l'écart n'est pas imputable au transporteur ; il s'agit d'une erreur de préparation du fournisseur. Étape 4 : réceptionner 45 colis dans le WMS, ouvrir une fiche de non-conformité « manquant fournisseur » et informer le service achats.</div>\n"
      },
      {
       "titre": "Valider la réception dans le système d'information",
       "contenu": "\n<p>La réception n'est terminée que lorsqu'elle est <strong>validée dans le WMS</strong>. Cette validation déclenche plusieurs effets :</p>\n<ul>\n<li>le stock disponible augmente, ce qui peut débloquer des commandes clients en attente ;</li>\n<li>un message de confirmation de réception peut être envoyé au donneur d'ordre ou à l'ERP, ce qui permet la comptabilisation et le paiement du fournisseur ;</li>\n<li>des tâches de rangement sont générées pour les caristes.</li>\n</ul>\n<p>Les supports reçoivent une <strong>étiquette interne</strong> (souvent appelée étiquette support ou étiquette palette) qui sera scannée au rangement. Certains produits sont orientés directement vers les quais d'expédition s'ils sont attendus pour une commande urgente : c'est le cross-docking, ou flux tendu.</p>\n<p>Le délai entre l'arrivée du camion et la disponibilité de la marchandise en stock s'appelle le <strong>dock-to-stock</strong> ; c'est un indicateur important de la performance de la réception.</p>\n"
      }
     ],
     "points_cles": [
      "Le planning de réception croise commandes fournisseurs, avis d'expédition et rendez-vous.",
      "Le dimensionnement des équipes se calcule à partir du volume à traiter et de la productivité, en tenant compte des pics.",
      "Le niveau de contrôle (global, par sondage, détaillé) dépend du risque lié au fournisseur et au produit.",
      "Le plan de palettisation et la fiche article servent de référence au contrôle qualitatif.",
      "Une réserve doit être précise, motivée, vérifiable et contresignée ; « sous réserve de déballage » n'a aucune valeur.",
      "En national, une protestation motivée peut être adressée au transporteur dans les trois jours pour un dommage non apparent.",
      "Les marchandises douteuses vont en quarantaine et sont bloquées dans le WMS.",
      "La validation de la réception rend le stock disponible et génère les tâches de rangement."
     ],
     "lexique": [
      {
       "terme": "Planning de réception",
       "def": "Programme qui répartit les livraisons attendues par créneau et par quai."
      },
      {
       "terme": "Colisage",
       "def": "Nombre d'unités contenues dans un colis, et par extension description du conditionnement d'un article."
      },
      {
       "terme": "Plan de palettisation",
       "def": "Description de la composition d'une palette : colis par couche, nombre de couches, hauteur et poids."
      },
      {
       "terme": "Réserve",
       "def": "Mention écrite sur le document de transport décrivant précisément une anomalie constatée à la livraison."
      },
      {
       "terme": "Quarantaine",
       "def": "Zone et statut de blocage des marchandises en attente de décision, interdites à la préparation."
      },
      {
       "terme": "Fiche de non-conformité",
       "def": "Document qui décrit un écart constaté, ses preuves et la décision prise."
      },
      {
       "terme": "Dock-to-stock",
       "def": "Délai entre l'arrivée d'une marchandise au quai et sa disponibilité en stock."
      },
      {
       "terme": "Scellé (plomb)",
       "def": "Dispositif numéroté fermant les portes d'un véhicule, dont l'intégrité prouve que le chargement n'a pas été ouvert."
      }
     ]
    },
    {
     "id": "blog-mise-en-stock",
     "titre": "Mettre en stock : moyens de stockage, adressage et implantation",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Choisir un moyen de stockage adapté aux caractéristiques d'un produit et de ses flux.",
      "Lire et construire une adresse d'emplacement.",
      "Distinguer stockage à emplacement fixe et stockage à emplacement dynamique.",
      "Réaliser une classification ABC et en déduire une implantation des références.",
      "Vérifier qu'un rangement respecte les charges admissibles et les règles de sécurité."
     ],
     "sections": [
      {
       "titre": "Les moyens de stockage",
       "contenu": "\n<p>Après la réception, la marchandise doit être rangée à un endroit où elle sera conservée en sécurité et retrouvée rapidement. Le choix du <strong>moyen de stockage</strong> dépend de quatre critères : la nature de la charge (palette, colis, pièce), son poids et ses dimensions, le nombre de références, et la rotation (fréquence des sorties).</p>\n<table>\n<thead><tr><th>Moyen de stockage</th><th>Principe</th><th>Avantages</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Stockage de masse (au sol, gerbé)</td><td>Palettes posées au sol, éventuellement empilées</td><td>Aucun investissement, forte densité pour peu de références</td><td>Accès limité, risque d'écrasement, gerbage limité par la résistance des produits</td></tr>\n<tr><td>Rayonnage à palettes conventionnel</td><td>Échelles et lisses formant des alvéoles, chaque palette accessible</td><td>Accès direct à toutes les palettes, polyvalent</td><td>Beaucoup d'allées, densité moyenne</td></tr>\n<tr><td>Rayonnage par accumulation (drive-in)</td><td>Le chariot entre dans le rayonnage, palettes en profondeur</td><td>Très dense</td><td>Une seule référence par travée, gestion dernier entré premier sorti</td></tr>\n<tr><td>Rayonnage dynamique</td><td>Rouleaux inclinés : les palettes ou colis avancent par gravité</td><td>Premier entré premier sorti automatique, chargement et prélèvement séparés</td><td>Coût élevé, entretien</td></tr>\n<tr><td>Étagères et rayonnages légers</td><td>Tablettes pour colis et pièces</td><td>Préparation au détail, accès manuel</td><td>Charges faibles</td></tr>\n<tr><td>Rayonnage cantilever</td><td>Bras en porte-à-faux sans montants avant</td><td>Charges longues (tubes, profilés, bois)</td><td>Usage spécialisé</td></tr>\n<tr><td>Magasins automatisés (transstockeurs, mini-load, navettes)</td><td>Rangement et sortie par des machines pilotées par le système</td><td>Grande hauteur, productivité, fiabilité</td><td>Investissement lourd, dépendance aux pannes</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> plus un stockage est dense, moins chaque palette est accessible. Le bon choix équilibre la densité (palettes par m²) et l'accessibilité (temps pour atteindre une palette donnée).</div>\n"
      },
      {
       "titre": "L'adressage des emplacements",
       "contenu": "\n<p>Chaque emplacement porte une <strong>adresse</strong> unique, affichée sur une étiquette code-barres et connue du WMS. Une adresse se lit le plus souvent du plus grand au plus petit :</p>\n<table>\n<thead><tr><th>Élément</th><th>Exemple</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Zone ou cellule</td><td>B</td><td>Cellule de stockage B</td></tr>\n<tr><td>Allée</td><td>07</td><td>Allée numéro 7</td></tr>\n<tr><td>Travée (ou colonne)</td><td>023</td><td>23e travée de l'allée, souvent paire d'un côté et impaire de l'autre</td></tr>\n<tr><td>Niveau</td><td>3</td><td>Niveau de lisse (0 ou A pour le sol, puis en montant)</td></tr>\n<tr><td>Position</td><td>2</td><td>Deuxième palette dans l'alvéole</td></tr>\n</tbody>\n</table>\n<p>L'adresse B-07-023-3-2 désigne donc, dans la cellule B, l'allée 7, la travée 23, le troisième niveau, la deuxième position. La numérotation <strong>paire-impaire</strong> (côté gauche impair, côté droit pair) permet au cariste de progresser dans l'allée en servant les deux côtés sans revenir sur ses pas.</p>\n<p>Au rangement, le cariste scanne l'étiquette du support puis l'étiquette de l'emplacement : ce double scan confirme dans le WMS que la palette est bien à l'adresse proposée. Ranger une palette ailleurs sans le signaler la rend introuvable.</p>\n"
      },
      {
       "titre": "Emplacement fixe ou emplacement dynamique",
       "contenu": "\n<p>Deux logiques s'opposent pour affecter une référence à un emplacement.</p>\n<ul>\n<li>En <strong>emplacement fixe</strong> (ou adressage fixe), chaque référence a toujours le même emplacement. Les opérateurs le mémorisent, ce qui facilite la préparation sans informatique avancée. Mais un emplacement réservé reste vide quand la référence est en rupture : la place est mal utilisée.</li>\n<li>En <strong>emplacement dynamique</strong> (ou adressage aléatoire, multi-emplacement), le WMS choisit à chaque rangement un emplacement libre adapté. La place est mieux utilisée, mais on dépend totalement du système pour retrouver la marchandise.</li>\n</ul>\n<p>En pratique, les entrepôts combinent souvent les deux : des <strong>emplacements de prélèvement</strong> fixes, au niveau bas, accessibles aux préparateurs, et des emplacements de <strong>réserve</strong> dynamiques en hauteur. Lorsque le stock d'un emplacement de prélèvement descend sous un seuil, le WMS déclenche une tâche de <strong>réapprovisionnement</strong> (on dit aussi recomplètement) : un cariste descend une palette de la réserve vers le prélèvement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les réapprovisionnements se font de préférence avant le début de la préparation, ou dans des créneaux où peu de préparateurs circulent, pour éviter les ruptures en cours de vague et la circulation des chariots dans les allées où travaillent des piétons.</div>\n"
      },
      {
       "titre": "Implanter les références : la méthode ABC",
       "contenu": "\n<p>Toutes les références ne sortent pas avec la même fréquence. Une observation fréquente, appelée <strong>loi de Pareto</strong> ou règle des 20/80, montre qu'environ 20 % des références représentent environ 80 % des sorties. La <strong>méthode ABC</strong> classe les références en trois groupes pour placer les plus demandées au plus près des quais ou des zones de préparation.</p>\n<ul>\n<li><strong>Classe A</strong> : petit nombre de références, l'essentiel des sorties : emplacements les plus accessibles.</li>\n<li><strong>Classe B</strong> : rotation intermédiaire.</li>\n<li><strong>Classe C</strong> : grand nombre de références qui sortent peu : emplacements éloignés ou en hauteur.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser une classification ABC sur le nombre de lignes de commande. 1) Relever, pour chaque référence, le nombre de lignes préparées sur une période (par exemple un trimestre). 2) Trier les références par ordre décroissant. 3) Calculer le pourcentage de chaque référence dans le total, puis le pourcentage cumulé. 4) Fixer les seuils (par exemple A jusqu'à 80 % cumulés, B jusqu'à 95 %, C au-delà). Exemple sur 10 références totalisant 2 000 lignes : R1 = 900, R2 = 500, R3 = 200, R4 = 120, R5 = 100, R6 = 70, R7 = 50, R8 = 30, R9 = 20, R10 = 10. Cumuls : R1 45 %, R2 70 %, R3 80 %, R4 86 %, R5 91 %, R6 94,5 %, R7 97 %, R8 98,5 %, R9 99,5 %, R10 100 %. Classe A : R1 à R3 (30 % des références, 80 % des lignes). Classe B : R4 à R6. Classe C : R7 à R10.</div>\n<p>Le critère de classement dépend de l'objectif. Pour réduire les déplacements des préparateurs, on classe sur le nombre de lignes (fréquence de passage). Pour surveiller les capitaux immobilisés, on classe sur la valeur du stock. Les résultats sont différents : un produit cher peut sortir rarement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'implantation ABC ne doit pas ignorer les contraintes physiques. Un produit lourd, même de classe C, se range en bas ; un produit fragile ne se place pas sous des charges lourdes ; des produits incompatibles (produits chimiques réactifs entre eux, alimentaire et produits toxiques) doivent être séparés quelle que soit leur rotation.</div>\n"
      },
      {
       "titre": "Charges admissibles et sécurité du rayonnage",
       "contenu": "\n<p>Chaque rayonnage est conçu pour des charges précises. Une <strong>plaque de charge</strong> (affichée en bout d'allée) indique la charge maximale par niveau (par paire de lisses) et par travée, ainsi que la configuration de niveaux pour laquelle ces valeurs sont valables.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un rangement. La plaque indique 2 400 kg maximum par niveau et 12 000 kg par travée, pour 4 niveaux plus le sol. Une alvéole reçoit 3 palettes de 750 kg. Étape 1 : charge du niveau = 3 × 750 = 2 250 kg, inférieure à 2 400 kg : rangement possible. Étape 2 : vérifier la travée. Si les quatre niveaux portent chacun 2 250 kg, la travée supporte 9 000 kg, inférieurs à 12 000 kg : conforme. Étape 3 : si une palette pèse 1 000 kg, le niveau atteint 2 500 kg : dépassement, la palette doit être rangée au sol ou dans une zone adaptée.</div>\n<p>D'autres règles s'appliquent : palette en bon état et posée bien à cheval sur les deux lisses, débord de charge limité, palette ne dépassant pas la hauteur de l'alvéole, marchandise filmée pour les niveaux élevés. Les rayonnages font l'objet d'une <strong>inspection</strong> régulière par une personne compétente, en plus du signalement immédiat de tout choc.</p>\n"
      },
      {
       "titre": "Conserver les produits en bon état",
       "contenu": "\n<p>Ranger, c'est aussi garantir que le produit ressortira dans l'état où il est entré. Les conditions de conservation figurent sur la fiche article et sur l'emballage, sous forme de mentions ou de <strong>pictogrammes de manutention</strong> normalisés : verre (fragile), parapluie (craint l'humidité), flèches (haut du colis), thermomètre (limites de température), nombre maximal de colis gerbables.</p>\n<p>Quelques règles générales s'appliquent dans tout entrepôt :</p>\n<ul>\n<li>respecter la <strong>hauteur de gerbage</strong> indiquée sur l'emballage : au-delà, les cartons du bas s'écrasent ;</li>\n<li>tenir les produits à l'abri de la lumière, de la chaleur ou du gel selon leurs exigences ; certains entrepôts disposent de zones tempérées, réfrigérées ou négatives ;</li>\n<li>appliquer la règle de sortie prévue : <strong>premier entré, premier sorti</strong> (PEPS, en anglais FIFO) pour la plupart des produits, <strong>premier expiré, premier sorti</strong> (FEFO) pour les produits datés ;</li>\n<li>séparer les produits incompatibles et stocker les produits dangereux dans des zones dédiées, avec rétention en cas de fuite.</li>\n</ul>\n<p>Le WMS aide à appliquer ces règles : il propose les emplacements compatibles avec la classe de température ou de danger, et désigne au préparateur le lot à prélever en premier.</p>\n"
      }
     ],
     "points_cles": [
      "Le moyen de stockage se choisit selon la nature de la charge, son poids, le nombre de références et la rotation.",
      "Densité et accessibilité s'opposent : le drive-in est dense mais une seule référence par travée.",
      "Une adresse se lit de la zone à la position : zone, allée, travée, niveau, position.",
      "Le double scan support puis emplacement garantit que le WMS connaît la position réelle de la palette.",
      "Emplacements de prélèvement fixes et réserves dynamiques se combinent grâce aux réapprovisionnements.",
      "La méthode ABC place les références à forte rotation au plus près des zones de préparation.",
      "Le critère ABC dépend de l'objectif : lignes pour les déplacements, valeur pour les capitaux immobilisés.",
      "La plaque de charge fixe les maxima par niveau et par travée ; tout dépassement est interdit."
     ],
     "lexique": [
      {
       "terme": "Alvéole",
       "def": "Espace de stockage délimité par deux échelles et deux lisses dans un rayonnage à palettes."
      },
      {
       "terme": "Drive-in",
       "def": "Rayonnage par accumulation dans lequel le chariot pénètre pour déposer les palettes en profondeur."
      },
      {
       "terme": "Adresse",
       "def": "Code unique identifiant un emplacement : zone, allée, travée, niveau, position."
      },
      {
       "terme": "Emplacement dynamique",
       "def": "Mode d'affectation où le WMS choisit un emplacement libre à chaque rangement."
      },
      {
       "terme": "Réapprovisionnement",
       "def": "Transfert de marchandise d'un emplacement de réserve vers un emplacement de prélèvement."
      },
      {
       "terme": "Méthode ABC",
       "def": "Classement des références en trois groupes selon leur part dans un total (lignes, quantités ou valeur)."
      },
      {
       "terme": "Loi de Pareto",
       "def": "Constat selon lequel une petite partie des éléments représente l'essentiel d'un effet, souvent résumé en 20/80."
      },
      {
       "terme": "Plaque de charge",
       "def": "Affichage des charges maximales admissibles par niveau et par travée d'un rayonnage."
      }
     ]
    },
    {
     "id": "blog-suivi-stocks",
     "titre": "Suivre les stocks : inventaires, valorisation et indicateurs",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Distinguer stock physique, stock informatique, stock disponible et stock réservé.",
      "Organiser un inventaire tournant ou annuel et analyser les écarts.",
      "Valoriser des sorties et un stock final avec la méthode du coût moyen unitaire pondéré.",
      "Calculer et interpréter la rotation et la couverture d'un stock.",
      "Déterminer une quantité économique de commande et un point de commande."
     ],
     "sections": [
      {
       "titre": "Les différents états du stock",
       "contenu": "\n<p>En seconde, le stock a été suivi avec une fiche de stock et quelques notions comme le stock minimum ou le stock d'alerte. En première, il faut savoir que le mot « stock » recouvre plusieurs quantités que le WMS distingue :</p>\n<table>\n<thead><tr><th>Notion</th><th>Définition</th></tr></thead>\n<tbody>\n<tr><td>Stock physique</td><td>Quantité réellement présente dans l'entrepôt, constatée par comptage</td></tr>\n<tr><td>Stock théorique (ou informatique)</td><td>Quantité calculée par le système à partir des entrées et des sorties enregistrées</td></tr>\n<tr><td>Stock réservé (ou alloué)</td><td>Partie du stock déjà affectée à des commandes en cours de préparation</td></tr>\n<tr><td>Stock bloqué</td><td>Stock présent mais indisponible : quarantaine, contrôle qualité, avarie, lot rappelé</td></tr>\n<tr><td>Stock disponible</td><td>Stock théorique − stock réservé − stock bloqué</td></tr>\n<tr><td>Stock prévisionnel</td><td>Stock disponible + commandes fournisseurs attendues − besoins futurs</td></tr>\n</tbody>\n</table>\n<p>Lorsqu'un client demande si un article peut être livré, c'est le <strong>stock disponible</strong> qui compte, pas le stock physique. Un article peut être présent en rayon et pourtant indisponible parce qu'il est déjà réservé ou bloqué.</p>\n"
      },
      {
       "titre": "Les inventaires",
       "contenu": "\n<p>L'<strong>inventaire</strong> consiste à compter le stock physique pour le comparer au stock théorique. Il est obligatoire au moins une fois par an pour l'établissement des comptes, et il est indispensable pour garantir la fiabilité du stock au quotidien.</p>\n<ul>\n<li>L'<strong>inventaire annuel</strong> (ou inventaire complet) compte toutes les références à une date donnée. Il impose souvent l'arrêt des mouvements pendant le comptage.</li>\n<li>L'<strong>inventaire tournant</strong> compte chaque jour une partie des emplacements, de sorte que tout le stock soit compté plusieurs fois dans l'année, sans arrêter l'activité. Les références de classe A sont comptées plus souvent que celles de classe C.</li>\n<li>L'<strong>inventaire sur alerte</strong> est déclenché par un événement : emplacement trouvé vide alors que le système indique du stock, écart signalé par un préparateur, stock passé à zéro (le comptage d'un emplacement vide est alors très rapide).</li>\n</ul>\n<p>Pour être fiable, un inventaire suit des règles : comptage en aveugle (le compteur ne voit pas la quantité attendue), double comptage en cas d'écart par une autre personne, gel des mouvements sur l'emplacement pendant le comptage, prise en compte des mouvements en cours (réceptions non validées, préparations non terminées).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le taux de fiabilité du stock. Sur 400 emplacements comptés dans le mois, 12 présentent un écart. Taux de fiabilité en emplacements = (400 − 12) / 400 × 100 = 97 %. On peut aussi raisonner en valeur : écart en valeur absolue (sans compenser les excédents par les manquants) divisé par la valeur du stock compté. Si les écarts représentent 1 850 € (manquants et excédents additionnés) pour 245 000 € comptés, le taux d'écart en valeur est 1 850 / 245 000 × 100 ≈ 0,76 %.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un excédent sur une référence et un manquant identique sur une référence voisine révèlent souvent une simple inversion de rangement ou de prélèvement. Avant de corriger le stock, il faut chercher la cause, sinon l'erreur se reproduira.</div>\n"
      },
      {
       "titre": "Valoriser le stock : le coût moyen unitaire pondéré",
       "contenu": "\n<p>Le stock a une valeur : c'est un capital immobilisé. Pour connaître cette valeur, chaque sortie est évaluée selon une méthode. La plus utilisée en France est le <strong>coût moyen unitaire pondéré</strong> (CMUP). On recalcule le coût moyen après chaque entrée (CMUP après chaque entrée) ou une fois par période (CMUP de fin de période).</p>\n<p>Formule du CMUP après chaque entrée :</p>\n<p>CMUP = (valeur du stock avant l'entrée + valeur de l'entrée) / (quantité en stock avant l'entrée + quantité entrée)</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> tenir une fiche de stock valorisée. Stock initial au 1er mars : 200 unités à 12,00 €, soit 2 400 €. Le 5 mars, sortie de 120 unités : elles sont valorisées au CMUP en vigueur, 12,00 €, soit 1 440 € ; il reste 80 unités pour 960 €. Le 10 mars, entrée de 300 unités à 13,00 €, soit 3 900 €. Nouveau CMUP = (960 + 3 900) / (80 + 300) = 4 860 / 380 = 12,79 € (arrondi au centime). Le 15 mars, sortie de 150 unités à 12,79 €, soit 1 918,50 € ; il reste 230 unités. Valeur du stock final = 4 860 − 1 918,50 = 2 941,50 € (230 × 12,79 = 2 941,70 € ; l'écart de 0,20 € vient de l'arrondi du CMUP, on garde la valeur obtenue par différence).</div>\n<p>Une autre méthode, le <strong>PEPS</strong> (premier entré, premier sorti), valorise les sorties au prix des lots les plus anciens. Elle est cohérente avec la gestion physique de nombreux produits, mais plus lourde à tenir à la main.</p>\n"
      },
      {
       "titre": "Rotation et couverture du stock",
       "contenu": "\n<p>Deux indicateurs mesurent si le stock est bien proportionné à l'activité.</p>\n<ul>\n<li>Le <strong>stock moyen</strong> d'une période se calcule simplement par (stock initial + stock final) / 2, ou plus précisément par la moyenne des stocks mensuels.</li>\n<li>La <strong>rotation</strong> (ou taux de rotation) = sorties de la période / stock moyen. Elle indique combien de fois le stock se renouvelle dans la période.</li>\n<li>La <strong>durée moyenne de stockage</strong> = durée de la période / rotation.</li>\n<li>La <strong>couverture</strong> = stock actuel / consommation moyenne par jour (ou par semaine). Elle indique combien de temps le stock permettra de servir les clients sans réapprovisionnement.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> sur une année (360 jours en gestion), une référence a des sorties de 7 200 unités. Stock initial 500, stock final 700. Stock moyen = (500 + 700) / 2 = 600 unités. Rotation = 7 200 / 600 = 12 fois par an. Durée moyenne de stockage = 360 / 12 = 30 jours. Consommation moyenne = 7 200 / 360 = 20 unités par jour ; avec un stock actuel de 700 unités, la couverture est de 700 / 20 = 35 jours.</div>\n<p>Une rotation faible signale un surstock (capital immobilisé, place occupée, risque d'obsolescence). Une couverture très courte signale un risque de <strong>rupture</strong>. Le bon niveau dépend du délai de réapprovisionnement et de l'exigence de service.</p>\n"
      },
      {
       "titre": "Quand et combien commander",
       "contenu": "\n<p>Gérer un stock, c'est répondre à deux questions : <strong>quand</strong> commander et <strong>combien</strong> commander.</p>\n<p>Le <strong>stock de sécurité</strong> protège contre les aléas (consommation plus forte que prévu, retard fournisseur). Le <strong>point de commande</strong> (ou stock d'alerte) est le niveau de stock qui déclenche la commande :</p>\n<p>Point de commande = consommation moyenne journalière × délai de réapprovisionnement en jours + stock de sécurité</p>\n<p>Pour la quantité, la <strong>formule de Wilson</strong> recherche la quantité économique qui équilibre deux coûts opposés : le <strong>coût de passation</strong> des commandes (traitement administratif, réception) qui diminue si l'on commande rarement et beaucoup, et le <strong>coût de possession</strong> du stock (capital immobilisé, place, assurance, démarque) qui augmente avec le stock moyen.</p>\n<p>Quantité économique Q = racine carrée de (2 × D × Cp / (Pu × t)), où D est la demande annuelle en unités, Cp le coût d'une commande, Pu le prix unitaire et t le taux de possession annuel.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> D = 7 200 unités par an, Cp = 50 € par commande, Pu = 13 €, t = 20 % par an. 2 × 7 200 × 50 = 720 000. Pu × t = 13 × 0,20 = 2,6. 720 000 / 2,6 ≈ 276 923. Racine carrée ≈ 526 unités. On arrondit au colisage : si le fournisseur livre par cartons de 50, on commande 550 unités (11 cartons), soit environ 13 commandes par an. Avec un délai de 8 jours, une consommation de 20 unités par jour et un stock de sécurité de 60 unités, le point de commande est 20 × 8 + 60 = 220 unités.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la formule de Wilson donne un ordre de grandeur. Les contraintes réelles (colisage, minimum de commande, remises par quantité, place disponible, durée de vie) conduisent souvent à l'ajuster.</div>\n"
      }
     ],
     "points_cles": [
      "Le stock disponible est le stock théorique diminué du stock réservé et du stock bloqué.",
      "L'inventaire tournant compte une partie du stock chaque jour, plus souvent pour les références A.",
      "Comptage en aveugle, double comptage et recherche des causes rendent un inventaire fiable.",
      "Le CMUP se recalcule après chaque entrée ; les sorties sont valorisées au CMUP en vigueur.",
      "Rotation = sorties / stock moyen ; durée moyenne de stockage = durée de la période / rotation.",
      "Couverture = stock actuel / consommation moyenne par jour.",
      "Point de commande = consommation journalière × délai + stock de sécurité.",
      "La formule de Wilson équilibre coût de passation et coût de possession ; le résultat s'ajuste aux contraintes réelles."
     ],
     "lexique": [
      {
       "terme": "Stock disponible",
       "def": "Quantité réellement utilisable pour de nouvelles commandes : stock théorique moins stocks réservé et bloqué."
      },
      {
       "terme": "Inventaire tournant",
       "def": "Comptage régulier d'une partie des emplacements, sans arrêt de l'activité."
      },
      {
       "terme": "Comptage en aveugle",
       "def": "Comptage réalisé sans connaître la quantité attendue par le système."
      },
      {
       "terme": "CMUP",
       "def": "Coût moyen unitaire pondéré, méthode de valorisation des sorties et du stock."
      },
      {
       "terme": "Rotation",
       "def": "Nombre de fois où le stock se renouvelle sur une période : sorties divisées par stock moyen."
      },
      {
       "terme": "Couverture",
       "def": "Durée pendant laquelle le stock actuel permet de servir la demande moyenne."
      },
      {
       "terme": "Point de commande",
       "def": "Niveau de stock qui déclenche le lancement d'une commande de réapprovisionnement."
      },
      {
       "terme": "Coût de possession",
       "def": "Ensemble des coûts liés à la détention du stock, souvent exprimé en pourcentage annuel de sa valeur."
      },
      {
       "terme": "Quantité économique",
       "def": "Quantité à commander qui minimise la somme des coûts de passation et de possession (formule de Wilson)."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Conduire en sécurité les engins de manutention",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "blog-engins-manutention",
     "titre": "Choisir et préparer un engin de manutention",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Identifier les principales familles d'engins de manutention et les catégories de la recommandation R489.",
      "Expliquer le cadre réglementaire de la conduite : formation, autorisation de conduite, vérifications.",
      "Lire une plaque de constructeur et une plaque de charge.",
      "Choisir un engin adapté à une tâche (charge, hauteur, allée, sol).",
      "Réaliser les vérifications de prise de poste."
     ],
     "sections": [
      {
       "titre": "Les familles d'engins",
       "contenu": "\n<p>Les <strong>engins de manutention</strong> déplacent et lèvent les charges dans l'entrepôt. On distingue les engins à <strong>conducteur accompagnant</strong> (le conducteur marche à côté ou derrière) et les engins à <strong>conducteur porté</strong> (le conducteur est debout ou assis sur l'engin).</p>\n<p>Pour les chariots à conducteur porté, la <strong>recommandation R489</strong> de l'Assurance maladie (CNAM) définit des catégories qui servent de base aux formations et aux certificats d'aptitude à la conduite en sécurité (CACES) :</p>\n<table>\n<thead><tr><th>Catégorie R489</th><th>Engins concernés</th></tr></thead>\n<tbody>\n<tr><td>1A</td><td>Transpalettes à conducteur porté et préparateurs de commandes au sol (levée inférieure ou égale à 1,20 m)</td></tr>\n<tr><td>1B</td><td>Gerbeurs à conducteur porté (levée supérieure à 1,20 m)</td></tr>\n<tr><td>2A</td><td>Chariots à plateau porteur de capacité inférieure ou égale à 2 000 kg</td></tr>\n<tr><td>2B</td><td>Chariots tracteurs industriels de capacité de traction inférieure ou égale à 25 000 kg</td></tr>\n<tr><td>3</td><td>Chariots élévateurs en porte-à-faux de capacité inférieure ou égale à 6 000 kg</td></tr>\n<tr><td>4</td><td>Chariots élévateurs en porte-à-faux de capacité supérieure à 6 000 kg</td></tr>\n<tr><td>5</td><td>Chariots élévateurs à mât rétractable</td></tr>\n<tr><td>6</td><td>Chariots élévateurs à poste de conduite élevable</td></tr>\n<tr><td>7</td><td>Conduite hors production des chariots de toutes les catégories (déplacement, chargement sur porte-engin, maintenance, démonstration)</td></tr>\n</tbody>\n</table>\n<p>Les engins à conducteur accompagnant (gerbeurs, transpalettes électriques accompagnants) relèvent d'une autre recommandation, la <strong>R485</strong>, avec deux catégories selon la hauteur de levée. Le référentiel du bac pro vise en particulier la conduite des catégories 1B, 3 et 5 de la R489.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le chariot en porte-à-faux (catégorie 3) porte la charge en avant de ses roues avant et est équilibré par un contrepoids à l'arrière ; il circule en intérieur comme en extérieur. Le chariot à mât rétractable (catégorie 5) ramène la charge entre ses longerons pendant le déplacement ; plus compact, il travaille dans des allées étroites et lève haut, mais exige un sol lisse et plan.</div>\n"
      },
      {
       "titre": "Le cadre réglementaire de la conduite",
       "contenu": "\n<p>Le Code du travail impose que la conduite des équipements de travail mobiles automoteurs et des équipements de levage soit réservée aux travailleurs ayant reçu une <strong>formation adéquate</strong>. Pour les chariots à conducteur porté, l'employeur doit en outre délivrer une <strong>autorisation de conduite</strong>, établie sur la base de trois éléments :</p>\n<ol>\n<li>un <strong>examen d'aptitude</strong> réalisé par le médecin du travail ;</li>\n<li>un <strong>contrôle des connaissances et du savoir-faire</strong> pour la conduite en sécurité ; le CACES est le moyen le plus courant d'en apporter la preuve ;</li>\n<li>la <strong>connaissance des lieux</strong> et des instructions à respecter sur le site.</li>\n</ol>\n<p>Le CACES a une durée de validité limitée (5 ans pour les catégories de chariots de la R489). Il n'est pas, à lui seul, une autorisation de conduite : c'est l'employeur qui autorise, pour un engin et un site.</p>\n<p>Les chariots font aussi l'objet de <strong>vérifications générales périodiques</strong> (VGP), réalisées par une personne compétente, en interne ou par un organisme ; pour les chariots automoteurs de manutention à conducteur porté, la périodicité est semestrielle. Le résultat est consigné dans le registre de sécurité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> conduire un chariot sans autorisation, même « juste pour déplacer une palette », expose le conducteur et l'employeur. En cas d'accident, l'absence d'autorisation est une faute grave en matière de sécurité.</div>\n"
      },
      {
       "titre": "Lire la plaque constructeur et la plaque de charge",
       "contenu": "\n<p>Chaque chariot porte une <strong>plaque constructeur</strong> qui indique notamment le fabricant, le modèle, le numéro de série, l'année, la masse à vide, la tension et la masse de la batterie pour un chariot électrique, et la <strong>capacité nominale</strong> : la charge maximale que le chariot peut lever à une distance donnée du talon des fourches, appelée <strong>centre de gravité de la charge</strong> (souvent 500 mm pour les chariots courants).</p>\n<p>La <strong>plaque de charge</strong> (ou abaque de charge) indique la <strong>capacité effective</strong> en fonction de la hauteur de levée et de la position du centre de gravité de la charge. Plus on lève haut et plus le centre de gravité s'éloigne du talon, plus la capacité diminue.</p>\n<table>\n<thead><tr><th>Hauteur de levée</th><th>Centre de gravité à 500 mm</th><th>Centre de gravité à 600 mm</th></tr></thead>\n<tbody>\n<tr><td>Jusqu'à 3 300 mm</td><td>1 600 kg</td><td>1 400 kg</td></tr>\n<tr><td>4 500 mm</td><td>1 400 kg</td><td>1 200 kg</td></tr>\n<tr><td>5 500 mm</td><td>1 150 kg</td><td>1 000 kg</td></tr>\n</tbody>\n</table>\n<p>Le tableau ci-dessus est un exemple de plaque de charge d'un chariot de capacité nominale 1 600 kg à 500 mm. Les valeurs réelles sont propres à chaque chariot et à son équipement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'une manœuvre est autorisée. Palette de 1 200 × 1 000 mm, prise par le côté de 1 000 mm, charge répartie uniformément : son centre de gravité est à 500 mm du talon des fourches. Masse 1 300 kg. Emplacement de destination au niveau 4, à 5 500 mm. Étape 1 : lire la ligne 5 500 mm, colonne 500 mm : capacité 1 150 kg. Étape 2 : comparer : 1 300 kg > 1 150 kg. Étape 3 : conclure : dépose interdite à cette hauteur avec ce chariot. Il faut soit ranger la palette plus bas (jusqu'à 4 500 mm, capacité 1 400 kg, la dépose est possible), soit utiliser un chariot de plus grande capacité. Si la même palette était prise par le côté de 1 200 mm, son centre serait à 600 mm et la capacité à 4 500 mm tomberait à 1 200 kg : la dépose à ce niveau deviendrait elle aussi interdite.</div>\n"
      },
      {
       "titre": "Choisir l'engin adapté",
       "contenu": "\n<p>Le choix de l'engin dépend de la tâche :</p>\n<table>\n<thead><tr><th>Critère</th><th>Questions à se poser</th></tr></thead>\n<tbody>\n<tr><td>Charge</td><td>Masse, dimensions, position du centre de gravité, stabilité de la charge</td></tr>\n<tr><td>Hauteur</td><td>Hauteur de levée nécessaire et capacité résiduelle à cette hauteur</td></tr>\n<tr><td>Distance et fréquence</td><td>Courts déplacements répétés ou longs trajets</td></tr>\n<tr><td>Largeur d'allée</td><td>Rayon de giration de l'engin compatible avec l'allée</td></tr>\n<tr><td>Sol et environnement</td><td>Intérieur ou extérieur, pente, état du sol, froid, atmosphère explosive</td></tr>\n<tr><td>Accès aux véhicules</td><td>Chargement par quai avec niveleur ou par le côté d'une remorque</td></tr>\n</tbody>\n</table>\n<p>Exemples : décharger des palettes d'une semi-remorque à quai, par le niveleur, se fait au transpalette électrique (catégorie 1A) ou au chariot en porte-à-faux (catégorie 3). Ranger des palettes à 8 m de haut dans des allées de 3 m se fait au chariot à mât rétractable (catégorie 5). Charger un camion par le côté sur un parc extérieur se fait au chariot en porte-à-faux, adapté au sol extérieur.</p>\n"
      },
      {
       "titre": "Les vérifications de prise de poste",
       "contenu": "\n<p>Avant d'utiliser un chariot, le conducteur effectue des <strong>vérifications de prise de poste</strong>, souvent guidées par une check-list affichée ou intégrée au terminal de l'engin :</p>\n<ul>\n<li><strong>état général</strong> : absence de fuite, de choc, de pièce desserrée ; protège-conducteur et dosseret d'appui de charge en place ;</li>\n<li><strong>fourches</strong> : pas de fissure, d'usure excessive, de déformation ; verrous en place ;</li>\n<li><strong>roues et bandages</strong> : état, absence de corps étrangers ;</li>\n<li><strong>énergie</strong> : charge de la batterie, niveau de carburant ou de gaz selon l'engin ;</li>\n<li><strong>commandes</strong> : direction, freins de service et de stationnement, avertisseur sonore, feux et gyrophare, mouvements de levée, d'inclinaison et de rétraction ;</li>\n<li><strong>équipements de sécurité</strong> : ceinture ou système de retenue, extincteur si l'engin en est équipé.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur de nombreux sites, l'engin ne démarre qu'après saisie d'un code ou passage d'un badge qui vérifie l'autorisation du conducteur, puis validation de la check-list. Si un point est déclaré non conforme (frein, avertisseur), l'engin reste bloqué et la maintenance est prévenue automatiquement.</div>\n<p>Toute anomalie est signalée par écrit à la maintenance ou au responsable. Un engin défaillant est <strong>consigné</strong> (clé retirée, étiquette « hors service ») et n'est pas utilisé.</p>\n"
      }
     ],
     "points_cles": [
      "La R489 définit les catégories de chariots à conducteur porté ; la R485 concerne les gerbeurs à conducteur accompagnant.",
      "Le bac pro vise notamment les catégories 1B (gerbeurs portés), 3 (porte-à-faux jusqu'à 6 t) et 5 (mât rétractable).",
      "L'autorisation de conduite est délivrée par l'employeur : aptitude médicale, contrôle des connaissances (souvent le CACES), connaissance des lieux.",
      "Les chariots font l'objet d'une vérification générale périodique tous les six mois.",
      "La capacité nominale est donnée pour un centre de gravité de charge défini, souvent 500 mm.",
      "La plaque de charge montre que la capacité diminue avec la hauteur et l'éloignement du centre de gravité.",
      "Le choix de l'engin dépend de la charge, de la hauteur, de l'allée, du sol et du mode de chargement.",
      "Les vérifications de prise de poste sont obligatoires ; un engin défaillant est consigné."
     ],
     "lexique": [
      {
       "terme": "Chariot en porte-à-faux",
       "def": "Chariot élévateur qui porte la charge en avant de ses roues, équilibré par un contrepoids."
      },
      {
       "terme": "Chariot à mât rétractable",
       "def": "Chariot dont le mât recule entre les longerons pendant le déplacement, adapté aux allées étroites."
      },
      {
       "terme": "Recommandation R489",
       "def": "Texte de l'Assurance maladie définissant les catégories et la formation à la conduite des chariots à conducteur porté."
      },
      {
       "terme": "CACES",
       "def": "Certificat d'aptitude à la conduite en sécurité, délivré après un test par un organisme certifié."
      },
      {
       "terme": "Autorisation de conduite",
       "def": "Document par lequel l'employeur autorise un salarié à conduire un type d'engin sur son site."
      },
      {
       "terme": "Capacité nominale",
       "def": "Charge maximale qu'un chariot peut lever à un centre de gravité de charge défini, à hauteur limitée."
      },
      {
       "terme": "Plaque de charge",
       "def": "Tableau ou abaque indiquant la capacité effective selon la hauteur de levée et le centre de gravité de la charge."
      },
      {
       "terme": "VGP",
       "def": "Vérification générale périodique des équipements de levage, semestrielle pour les chariots automoteurs."
      }
     ]
    },
    {
     "id": "blog-conduite-engins",
     "titre": "Conduire et manœuvrer un chariot en sécurité",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Expliquer la stabilité d'un chariot élévateur à partir de la notion de centre de gravité.",
      "Identifier les causes de renversement et les comportements qui les préviennent.",
      "Appliquer les règles de circulation, de prise, de dépose et de gerbage d'une charge.",
      "Réaliser les opérations de chargement et de déchargement d'un véhicule en sécurité.",
      "Effectuer les opérations de fin de poste, y compris la charge des batteries."
     ],
     "sections": [
      {
       "titre": "La stabilité du chariot élévateur",
       "contenu": "\n<p>Un chariot élévateur en porte-à-faux fonctionne comme une <strong>balance</strong> dont l'axe des roues avant est le point d'appui. D'un côté se trouve la charge, de l'autre le contrepoids du chariot. Tant que le <strong>moment</strong> du contrepoids (sa masse multipliée par sa distance à l'axe) est supérieur à celui de la charge, le chariot reste stable vers l'avant.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comprendre l'effet de la distance avec un calcul de moments. Un chariot a un moment de stabilité de 2 400 daN·m par rapport à l'axe des roues avant (contrepoids et masse du chariot). La distance entre l'axe des roues avant et le talon des fourches est de 0,40 m. Charge A : 1 500 daN (environ 1 500 kg) centrée à 0,50 m du talon, soit à 0,90 m de l'axe ; moment = 1 500 × 0,90 = 1 350 daN·m, inférieur à 2 400 : stable. Charge B : même masse mais centrée à 1,00 m du talon (charge longue mal prise), soit à 1,40 m de l'axe ; moment = 1 500 × 1,40 = 2 100 daN·m : encore stable, mais la marge a presque disparu. Le moindre freinage brusque ou une levée en hauteur peut faire basculer le chariot vers l'avant. C'est pourquoi la plaque de charge réduit la capacité quand le centre de gravité s'éloigne.</div>\n<p>La stabilité <strong>latérale</strong> dépend du <strong>centre de gravité de l'ensemble</strong> chariot plus charge. Le chariot repose sur un triangle d'appui (les deux roues avant et le pivot de l'essieu arrière). Si le centre de gravité sort de ce triangle, le chariot se renverse sur le côté. Plus la charge est haute, plus le centre de gravité monte et plus il sort facilement du triangle en virage.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on circule toujours fourches basses (environ 15 cm du sol), mât incliné vers l'arrière, à vitesse adaptée, et on ne vire jamais avec une charge levée. La plupart des renversements latéraux se produisent en virage à vitesse excessive, souvent à vide.</div>\n"
      },
      {
       "titre": "Les causes de renversement et la conduite à tenir",
       "contenu": "\n<table>\n<thead><tr><th>Situation à risque</th><th>Conséquence</th><th>Prévention</th></tr></thead>\n<tbody>\n<tr><td>Virage trop rapide, surtout à vide</td><td>Renversement latéral</td><td>Ralentir avant le virage, ne jamais braquer brutalement</td></tr>\n<tr><td>Charge levée en circulation</td><td>Renversement latéral ou avant</td><td>Circuler charge basse</td></tr>\n<tr><td>Circulation en pente charge en aval</td><td>Glissement ou basculement de la charge</td><td>En pente, charge toujours côté amont : monter en marche avant, descendre en marche arrière</td></tr>\n<tr><td>Surcharge ou centre de gravité éloigné</td><td>Basculement avant</td><td>Respecter la plaque de charge</td></tr>\n<tr><td>Sol irrégulier, trou, bord de quai</td><td>Basculement, chute du chariot</td><td>Inspecter le parcours, contourner les obstacles, respecter les butées</td></tr>\n</tbody>\n</table>\n<p>Le port de la <strong>ceinture</strong> ou du système de retenue est obligatoire quand le chariot en est équipé. En cas de renversement latéral, le conducteur doit <strong>rester dans le poste de conduite</strong> : tenir fermement le volant, s'arc-bouter et se pencher du côté opposé à la chute. Sauter du chariot expose à être écrasé par le protège-conducteur.</p>\n"
      },
      {
       "titre": "Circuler dans l'entrepôt",
       "contenu": "\n<p>Les règles de circulation complètent le plan de circulation du site :</p>\n<ul>\n<li>respecter les sens de circulation, les vitesses affichées et la priorité aux piétons ;</li>\n<li>regarder dans le sens de la marche ; si la charge masque la vue, circuler en <strong>marche arrière</strong> ou se faire guider ;</li>\n<li>ralentir et utiliser l'avertisseur aux carrefours, aux sorties d'allées et aux portes ;</li>\n<li>ne transporter personne sur le chariot ni sur les fourches ;</li>\n<li>ne jamais lever une personne sur les fourches ou sur une palette ; des nacelles spécifiques et des procédures particulières existent pour les travaux en hauteur ;</li>\n<li>garder une distance suffisante avec le chariot qui précède ;</li>\n<li>ne pas stationner devant les issues de secours, les extincteurs, les armoires électriques.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'usage du téléphone portable pendant la conduite d'un chariot est interdit par les règlements intérieurs de la plupart des sites. Une seconde d'inattention suffit pour heurter un piéton ou un montant de rayonnage.</div>\n"
      },
      {
       "titre": "Prendre, déposer et gerber une charge",
       "contenu": "\n<p>La prise et la dépose suivent une séquence que l'on applique systématiquement.</p>\n<h4>Prise d'une charge en hauteur</h4>\n<ol>\n<li>S'arrêter face à l'emplacement, chariot bien perpendiculaire, frein serré.</li>\n<li>Mettre le mât à la verticale, lever les fourches à la hauteur des passages de la palette.</li>\n<li>Avancer doucement jusqu'à ce que la palette touche le dosseret, fourches écartées au maximum compatible avec la palette.</li>\n<li>Lever légèrement pour décoller la palette, incliner le mât vers l'arrière.</li>\n<li>Reculer en ligne droite jusqu'à dégager la palette du rayonnage, vérifier derrière soi.</li>\n<li>Descendre la charge en position de transport avant de tourner ou de circuler.</li>\n</ol>\n<h4>Dépose en hauteur</h4>\n<p>Même séquence inversée : arrivée charge basse, arrêt, levée verticale à la hauteur voulue (légèrement au-dessus des lisses), avance prudente, mât à la verticale, descente jusqu'à la pose sur les lisses, dégagement des fourches en reculant, puis descente des fourches avant de circuler.</p>\n<p>Le <strong>gerbage</strong> (empilement de palettes au sol) suit les mêmes principes et respecte la hauteur maximale de gerbage indiquée sur les emballages et la stabilité de la pile : palettes de même format, bien alignées, sol plan.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un chariot à mât rétractable, le mât doit être avancé pour prendre ou déposer une palette en hauteur, puis rétracté avant de redescendre et de circuler. Beaucoup de sites équipent ces chariots de caméras sur les fourches et d'un indicateur de hauteur pour faciliter le travail au-delà de 8 m.</div>\n"
      },
      {
       "titre": "Charger et décharger un véhicule",
       "contenu": "\n<p>Les opérations au quai ajoutent des risques propres : chute du chariot entre quai et remorque, départ intempestif du camion, plancher de remorque défaillant. Avant d'entrer dans un véhicule, le cariste vérifie :</p>\n<ul>\n<li>que le véhicule est immobilisé et que le système de blocage ou les cales sont en place ;</li>\n<li>que le niveleur de quai est correctement posé sur le plancher, avec un appui suffisant ;</li>\n<li>que le plancher de la remorque est en bon état et supporte la masse du chariot chargé ;</li>\n<li>pour une semi-remorque dételée, que la béquille avant est en place pour éviter son basculement.</li>\n</ul>\n<p>Le chargement suit le plan de chargement : palettes poussées jusqu'à la paroi avant, réparties pour ne pas surcharger un essieu, en commençant par le fond. Le cariste n'entre jamais avec la charge levée et circule lentement sur le niveleur.</p>\n<p>Le chargement latéral d'un véhicule à bâche coulissante, depuis le sol d'une cour, se fait au chariot en porte-à-faux. Le conducteur du camion se tient hors de la zone d'évolution et le cariste s'assure de la stabilité de chaque palette avant de retirer les fourches.</p>\n"
      },
      {
       "titre": "La fin de poste et la charge des batteries",
       "contenu": "\n<p>À la fin du poste, le conducteur :</p>\n<ol>\n<li>stationne le chariot à l'emplacement prévu, hors des allées et des issues ;</li>\n<li>pose les fourches au sol, pointes touchant le sol, mât légèrement incliné vers l'avant ;</li>\n<li>serre le frein de stationnement, coupe le contact, retire la clé ou se déconnecte ;</li>\n<li>signale toute anomalie constatée pendant le poste ;</li>\n<li>met le chariot en charge si nécessaire.</li>\n</ol>\n<p>La <strong>charge des batteries</strong> se fait dans un local ou une zone dédiée, ventilée, interdite aux flammes. Pour une batterie au plomb, on ouvre le capot pour faciliter la ventilation, on vérifie le câble et la prise, on branche le chargeur, et on porte des lunettes et des gants pour toute intervention sur l'électrolyte (acide sulfurique, corrosif). Les batteries lithium-ion ne demandent pas de remise à niveau en eau mais exigent d'utiliser le chargeur prévu et de signaler toute batterie déformée ou chauffée anormalement.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la fin de poste prépare le poste suivant. Un chariot laissé fourches levées, non chargé ou avec une anomalie non signalée met en danger le collègue qui le reprendra.</div>\n"
      }
     ],
     "points_cles": [
      "Le chariot en porte-à-faux est stable vers l'avant tant que le moment du contrepoids dépasse celui de la charge.",
      "Éloigner le centre de gravité de la charge ou lever haut réduit la marge de stabilité.",
      "La stabilité latérale dépend du centre de gravité de l'ensemble, qui doit rester dans le triangle d'appui.",
      "On circule fourches basses, mât incliné en arrière, sans jamais virer charge levée.",
      "En pente, la charge reste côté amont ; en cas de renversement, on reste dans le poste, ceinture attachée.",
      "La prise et la dépose suivent une séquence stricte : arrêt, levée verticale, avance, levée ou descente, recul, descente.",
      "Avant d'entrer dans un véhicule : immobilisation, niveleur posé, plancher en bon état, béquille si semi-remorque dételée.",
      "En fin de poste : fourches au sol, frein serré, clé retirée, anomalies signalées, charge en zone dédiée."
     ],
     "lexique": [
      {
       "terme": "Moment",
       "def": "Produit d'une force (ou d'un poids) par sa distance à un axe de rotation ; il mesure l'effet de basculement."
      },
      {
       "terme": "Triangle d'appui",
       "def": "Surface délimitée par les points d'appui du chariot au sol, à l'intérieur de laquelle doit rester le centre de gravité."
      },
      {
       "terme": "Dosseret",
       "def": "Grille fixée au tablier du chariot qui empêche la charge de tomber vers le conducteur."
      },
      {
       "terme": "Protège-conducteur",
       "def": "Structure de protection placée au-dessus du poste de conduite contre la chute d'objets."
      },
      {
       "terme": "Niveleur de quai",
       "def": "Plateau mobile qui fait le lien entre le quai et le plancher du véhicule."
      },
      {
       "terme": "Gerbage",
       "def": "Empilement de palettes ou de colis les uns sur les autres au sol."
      },
      {
       "terme": "Électrolyte",
       "def": "Liquide conducteur d'une batterie au plomb, composé d'acide sulfurique dilué, corrosif."
      },
      {
       "terme": "Position de transport",
       "def": "Charge à environ 15 cm du sol, mât incliné vers l'arrière, pour circuler."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Coordonner les activités logistiques pour satisfaire le client",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "blog-demande-client",
     "titre": "Répondre à la demande des clients internes et externes",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Distinguer client interne et client externe et identifier leurs attentes.",
      "Suivre le cycle de traitement d'une commande, de sa réception à sa livraison.",
      "Interpréter les engagements de service d'un cahier des charges (délais, heure limite, taux de service).",
      "Traiter une commande en rupture partielle selon les règles fixées par le client.",
      "Répondre à une réclamation de façon structurée et en tirer des actions."
     ],
     "sections": [
      {
       "titre": "Client interne, client externe",
       "contenu": "\n<p>Toute activité logistique sert un <strong>client</strong>. Le <strong>client externe</strong> est une autre entreprise ou un particulier qui achète ou reçoit la marchandise : un magasin, un artisan, un consommateur en ligne. Le <strong>client interne</strong> est un autre service de la même organisation : l'atelier de production qui attend ses composants, le service après-vente qui a besoin d'une pièce, le magasin d'un même groupe.</p>\n<p>Leurs attentes se ressemblent : recevoir le bon produit, en bonne quantité, à temps, en bon état, et être informé en cas de problème. Mais leurs priorités diffèrent : un client externe juge sur la ponctualité et la conformité de chaque livraison ; une ligne de production juge sur l'absence d'arrêt, car une rupture de composant immobilise des machines et des personnes.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un prestataire logistique, le « client » au sens du contrat est le donneur d'ordre (la marque), mais les colis sont livrés aux clients de la marque. L'agent logistique doit donc satisfaire les deux : respecter les procédures fixées par le donneur d'ordre et soigner la présentation des colis pour le destinataire final.</div>\n"
      },
      {
       "titre": "Le cycle de traitement d'une commande",
       "contenu": "\n<p>Une commande traverse plusieurs étapes, chacune avec un statut dans le WMS ou l'ERP :</p>\n<ol>\n<li><strong>Réception de la commande</strong> : par EDI, par un site marchand, par courriel ou saisie manuelle.</li>\n<li><strong>Contrôle et validation</strong> : client connu, adresse complète, conditions commerciales respectées (le contrôle de l'encours de paiement relève du service commercial).</li>\n<li><strong>Allocation du stock</strong> : le système réserve les quantités disponibles ; s'il en manque, la ligne passe en reliquat ou est annulée selon les règles du client.</li>\n<li><strong>Lancement en préparation</strong> : regroupement des commandes en vagues, édition des bons ou envoi des missions sur les terminaux.</li>\n<li><strong>Préparation, contrôle et emballage</strong>.</li>\n<li><strong>Expédition</strong> : étiquetage, documents de transport, chargement, envoi de l'avis d'expédition au client.</li>\n<li><strong>Livraison et preuve de livraison</strong> : signature électronique ou papier du destinataire.</li>\n</ol>\n<p>Le <strong>délai de traitement</strong> se mesure de la réception de la commande jusqu'au départ du colis. Le <strong>délai de livraison</strong> va de la commande jusqu'à la réception par le client et inclut le transport.</p>\n"
      },
      {
       "titre": "Les engagements de service",
       "contenu": "\n<p>Le cahier des charges du donneur d'ordre ou le contrat client fixe des <strong>engagements de service</strong> (en anglais service level agreement, SLA). Ils s'expriment de façon mesurable :</p>\n<table>\n<thead><tr><th>Engagement</th><th>Exemple de formulation</th></tr></thead>\n<tbody>\n<tr><td>Heure limite de commande (cut-off)</td><td>Toute commande reçue avant 14 h est expédiée le jour même</td></tr>\n<tr><td>Délai de livraison</td><td>Livraison en J+1 en France métropolitaine pour 95 % des colis</td></tr>\n<tr><td>Taux de service</td><td>98,5 % de commandes livrées complètes et à l'heure</td></tr>\n<tr><td>Qualité de préparation</td><td>Moins de 2 erreurs pour 1 000 lignes</td></tr>\n<tr><td>Créneau de livraison</td><td>Livraison des magasins entre 5 h et 7 h, avant l'ouverture</td></tr>\n</tbody>\n</table>\n<p>Un indicateur composite très utilisé est l'<strong>OTIF</strong> (on time in full, à l'heure et complet) : une commande n'est comptée comme réussie que si elle est à la fois livrée dans le créneau et complète.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier si un cut-off peut être tenu. Il est 13 h 10. Une commande urgente de 40 lignes arrive. La productivité moyenne de préparation est de 120 lignes par heure et par préparateur ; le contrôle et l'emballage prennent 15 minutes ; le camion du messager part à 15 h. Étape 1 : temps de préparation avec un préparateur = 40 / 120 = 0,33 h, soit 20 minutes. Étape 2 : ajouter le contrôle et l'emballage : 20 + 15 = 35 minutes. Étape 3 : ajouter une marge pour le lancement et l'étiquetage (10 minutes) : 45 minutes, la commande est prête vers 13 h 55. Étape 4 : conclusion, le départ de 15 h est tenable sans renfort.</div>\n"
      },
      {
       "titre": "Ruptures, reliquats et priorités",
       "contenu": "\n<p>Il arrive qu'une commande ne puisse pas être servie entièrement. Les règles de traitement sont fixées par le client et paramétrées dans le système :</p>\n<ul>\n<li><strong>livraison partielle avec reliquat</strong> : on expédie ce qui est disponible, le reste sera livré plus tard ;</li>\n<li><strong>livraison partielle sans reliquat</strong> : on expédie ce qui est disponible, le reste est annulé ;</li>\n<li><strong>livraison complète uniquement</strong> : la commande attend que tout soit disponible ;</li>\n<li><strong>substitution</strong> : un article équivalent remplace l'article manquant, si le client l'a accepté.</li>\n</ul>\n<p>Quand le stock est insuffisant pour toutes les commandes, il faut arbitrer. Les règles de <strong>priorité</strong> courantes sont : commandes urgentes ou express d'abord, puis dates de livraison promises les plus proches, puis clients stratégiques, puis ordre d'arrivée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un préparateur ne décide jamais seul d'une substitution ou d'une modification de quantité. Envoyer un autre produit « presque pareil » sans accord crée une non-conformité, un retour et parfois un litige. Toute anomalie se signale au chef d'équipe, qui applique la règle du client.</div>\n"
      },
      {
       "titre": "Informer et traiter les réclamations",
       "contenu": "\n<p>Un client accepte mieux un retard s'il en est prévenu à temps. Le suivi des expéditions (numéro de suivi, notification au destinataire, alerte en cas d'incident) fait partie du service. Les informations transmises doivent être <strong>factuelles</strong> : ce qui s'est passé, ce qui est fait, quand le client sera livré.</p>\n<p>Une <strong>réclamation</strong> se traite en cinq temps :</p>\n<ol>\n<li><strong>Enregistrer</strong> : client, commande, date, nature précise du problème, preuves (photos, numéros de colis).</li>\n<li><strong>Analyser</strong> : vérifier les faits dans le système (préparateur, heure de préparation, poids du colis au départ, preuve de livraison).</li>\n<li><strong>Répondre</strong> : solution proposée dans le cadre des règles (renvoi, avoir, reprise), dans un délai court.</li>\n<li><strong>Corriger la cause</strong> : erreur d'adressage, étiquette illisible, emballage insuffisant.</li>\n<li><strong>Suivre</strong> : compter les réclamations par cause pour repérer les problèmes répétitifs.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le poids du colis enregistré au départ est une preuve précieuse. Si un client déclare un article manquant et que le poids au départ correspond au poids théorique de la commande complète, l'erreur se situe plutôt au transport ou à la réception chez le client qu'à la préparation.</div>\n"
      },
      {
       "titre": "Communiquer avec le client interne en production",
       "contenu": "\n<p>La relation avec un client interne a ses propres règles. En usine, le magasin reçoit des <strong>demandes de sortie</strong> (ou bons de sortie) émises par les ateliers, ou des signaux automatiques déclenchés par la consommation. Le magasinier doit connaître le <strong>planning de production</strong> pour anticiper : quel produit sera fabriqué demain, sur quelle ligne, avec quels composants.</p>\n<p>Les échanges se font souvent lors d'un point quotidien entre logistique et production : composants manquants, retards fournisseurs, priorités de fabrication. En cas de manque, le logisticien informe immédiatement le chef d'atelier pour qu'il modifie l'ordre de fabrication plutôt que de découvrir le manque au moment de lancer la série.</p>\n<p>La qualité du service interne se mesure aussi : nombre d'arrêts de ligne dus à la logistique, taux de demandes servies dans le délai convenu, erreurs de composants livrés. Ces notions seront développées avec la logistique industrielle.</p>\n"
      },
      {
       "titre": "Anticiper la charge de travail",
       "contenu": "\n<p>Répondre à la demande suppose de la prévoir. Le service logistique reçoit des <strong>prévisions</strong> du donneur d'ordre (volumes attendus par semaine, opérations promotionnelles, lancements de produits) et les compare à son propre historique. Une méthode simple consiste à calculer une <strong>moyenne mobile</strong> : la moyenne des dernières périodes, recalculée à chaque nouvelle période.</p>\n<p>Exemple : les quatre dernières semaines ont compté 9 800, 10 400, 10 100 et 10 900 lignes. La moyenne mobile sur quatre semaines est (9 800 + 10 400 + 10 100 + 10 900) / 4 = 41 200 / 4 = 10 300 lignes. Si le donneur d'ordre annonce une promotion qui doit augmenter l'activité de 15 %, la prévision devient 10 300 × 1,15 = 11 845 lignes, soit environ 11 850 lignes.</p>\n<p>Ces prévisions servent à planifier le personnel (intérim, heures supplémentaires), les créneaux de réception et les capacités de transport. Les écarts entre prévision et réalité sont suivis : une prévision régulièrement trop basse ou trop haute doit être corrigée avec le donneur d'ordre.</p>\n"
      }
     ],
     "points_cles": [
      "Le client interne est un service de la même organisation ; le client externe est une autre entreprise ou un particulier.",
      "Une commande suit un cycle : réception, validation, allocation, lancement, préparation, expédition, preuve de livraison.",
      "Les engagements de service sont mesurables : cut-off, délai, taux de service, taux d'erreur, créneau.",
      "L'OTIF ne compte comme réussie qu'une commande à l'heure et complète.",
      "Reliquat, annulation, attente ou substitution suivent les règles du client, jamais une décision isolée du préparateur.",
      "Une réclamation s'enregistre, s'analyse avec des preuves, reçoit une réponse rapide et conduit à corriger la cause.",
      "Avec la production, l'anticipation du planning évite les arrêts de ligne."
     ],
     "lexique": [
      {
       "terme": "Client interne",
       "def": "Service de la même organisation qui reçoit une prestation logistique (atelier, SAV, magasin du groupe)."
      },
      {
       "terme": "Allocation",
       "def": "Réservation par le système des quantités en stock nécessaires à une commande."
      },
      {
       "terme": "Reliquat",
       "def": "Partie d'une commande non livrée faute de stock et conservée pour une livraison ultérieure."
      },
      {
       "terme": "Cut-off",
       "def": "Heure limite de réception d'une commande pour qu'elle soit expédiée le jour même."
      },
      {
       "terme": "SLA",
       "def": "Engagement de niveau de service, formulé de façon mesurable dans un contrat."
      },
      {
       "terme": "OTIF",
       "def": "Indicateur qui mesure la part des commandes livrées à l'heure et complètes."
      },
      {
       "terme": "Preuve de livraison",
       "def": "Document ou enregistrement signé par le destinataire attestant la remise de la marchandise."
      },
      {
       "terme": "Réclamation",
       "def": "Expression formelle d'une insatisfaction du client sur une livraison ou un service."
      }
     ]
    },
    {
     "id": "blog-optimiser-preparation",
     "titre": "Optimiser la préparation de commandes",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Comparer les principales méthodes de préparation : à la commande, par vague, par zone, en deux temps.",
      "Choisir un parcours de préparation qui réduit les déplacements.",
      "Calculer une productivité, un temps de préparation et un besoin en préparateurs.",
      "Décrire les technologies d'aide à la préparation et leurs effets sur la qualité.",
      "Proposer des améliorations d'une zone de préparation à partir d'indicateurs."
     ],
     "sections": [
      {
       "titre": "Ce qui coûte du temps en préparation",
       "contenu": "\n<p>La préparation de commandes est l'activité qui emploie le plus de personnel dans un entrepôt de distribution. Le cours de seconde en a présenté les gestes de base. Optimiser la préparation, c'est d'abord savoir où passe le temps. Les études menées en entrepôt montrent que le temps d'un préparateur se répartit ainsi, en ordre de grandeur :</p>\n<table>\n<thead><tr><th>Composante</th><th>Part approximative du temps</th><th>Levier d'amélioration</th></tr></thead>\n<tbody>\n<tr><td>Déplacements</td><td>Environ la moitié</td><td>Implantation ABC, parcours, regroupement de commandes</td></tr>\n<tr><td>Recherche et identification</td><td>Une part notable</td><td>Adressage clair, terminaux, éclairage</td></tr>\n<tr><td>Prélèvement (saisir, poser)</td><td>Une part notable</td><td>Hauteur de prise, conditionnement adapté</td></tr>\n<tr><td>Tâches administratives et attentes</td><td>Le reste</td><td>Lancement fluide, réapprovisionnements anticipés</td></tr>\n</tbody>\n</table>\n<p>La première source de gain est donc la <strong>réduction des déplacements</strong>. On parle de <strong>préparation « homme vers produit »</strong> quand le préparateur se déplace jusqu'aux emplacements, et de <strong>préparation « produit vers homme »</strong> quand un système automatisé (navettes, robots mobiles, carrousels) apporte le bac ou l'étagère au poste du préparateur, qui ne se déplace plus.</p>\n"
      },
      {
       "titre": "Les méthodes de préparation",
       "contenu": "\n<table>\n<thead><tr><th>Méthode</th><th>Principe</th><th>Adaptée à</th></tr></thead>\n<tbody>\n<tr><td>Préparation à la commande (picking discret)</td><td>Un préparateur prépare une commande complète en un parcours</td><td>Commandes volumineuses, peu de commandes</td></tr>\n<tr><td>Préparation groupée (multi-commandes)</td><td>Un préparateur prépare plusieurs commandes à la fois dans plusieurs bacs</td><td>Petites commandes nombreuses (e-commerce)</td></tr>\n<tr><td>Préparation par vague</td><td>Les commandes sont lancées par lots horaires (par tournée, par transporteur, par heure de départ)</td><td>Synchroniser préparation et départs</td></tr>\n<tr><td>Préparation par zone</td><td>Chaque préparateur reste dans sa zone ; la commande passe de zone en zone ou est consolidée à la fin</td><td>Grands entrepôts, produits de natures différentes</td></tr>\n<tr><td>Préparation en deux temps (prélèvement global puis éclatement)</td><td>On prélève le total d'une référence pour toutes les commandes, puis on répartit par commande</td><td>Beaucoup de commandes avec des références communes</td></tr>\n</tbody>\n</table>\n<p>Les méthodes se combinent : une vague de 200 commandes e-commerce peut être prélevée globalement par zone, puis éclatée sur un mur de tri où chaque case correspond à une commande.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans la distribution alimentaire, on prépare souvent par tournée : toutes les commandes des magasins livrés par le même camion sont lancées dans la même vague, préparées puis déposées dans l'ordre inverse des livraisons sur le quai, pour que le chargement respecte l'ordre de la tournée.</div>\n"
      },
      {
       "titre": "Choisir un parcours",
       "contenu": "\n<p>Le WMS trie les lignes d'une commande dans l'ordre des adresses pour définir un <strong>parcours</strong>. Deux grandes logiques existent :</p>\n<ul>\n<li>le <strong>parcours en S</strong> (ou en serpentin) : le préparateur parcourt entièrement chaque allée contenant au moins une ligne, en alternant le sens. Simple et lisible, il est efficace quand les allées contiennent beaucoup de lignes ;</li>\n<li>le <strong>parcours avec retour</strong> : le préparateur entre dans l'allée jusqu'au dernier emplacement utile puis revient sur ses pas. Il est efficace quand les lignes sont concentrées en début d'allée, ce qui est le cas si l'implantation ABC place les références A près de l'allée principale.</li>\n</ul>\n<p>La numérotation paire-impaire des adresses permet de servir les deux côtés d'une allée en un passage. Le parcours tient aussi compte des contraintes de la charge : les produits lourds et robustes en premier (en bas de palette), les produits légers et fragiles en dernier.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le parcours le plus court n'est pas toujours le bon. Prendre les packs d'eau en dernier pour gagner 20 mètres écraserait les produits fragiles déjà posés. L'ordre de prélèvement doit d'abord garantir une palette stable et des produits intacts.</div>\n"
      },
      {
       "titre": "Mesurer la productivité et dimensionner l'équipe",
       "contenu": "\n<p>La <strong>productivité</strong> de préparation se mesure en <strong>lignes par heure</strong> (une ligne = une référence d'une commande, quelle que soit la quantité), en colis par heure ou en unités par heure. Le choix de l'unité dépend de l'activité : en e-commerce, on raisonne en lignes ou en unités ; en préparation de colis complets, en colis.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dimensionner une équipe de préparation. Le carnet de commandes du lendemain compte 380 commandes de 9 lignes en moyenne. La productivité moyenne est de 95 lignes par heure. Le poste dure 7 h, dont 6,5 h productives (pauses et réunion déduites). Étape 1 : nombre de lignes = 380 × 9 = 3 420 lignes. Étape 2 : heures nécessaires = 3 420 / 95 = 36 heures. Étape 3 : nombre de préparateurs = 36 / 6,5 = 5,54, soit 6 préparateurs. Étape 4 : vérifier le taux d'occupation = 36 / (6 × 6,5) = 92 %. La marge restante (8 %) absorbe les aléas ; si l'on prévoit des absences ou un pic, il faut envisager un intérimaire ou des heures supplémentaires.</div>\n<p>Il faut se méfier des comparaisons de productivité entre personnes : un préparateur affecté à une zone de produits lourds ne peut pas faire autant de lignes que celui de la zone des petites pièces. On compare plutôt une même zone dans le temps, ou on pondère les lignes selon leur difficulté.</p>\n"
      },
      {
       "titre": "Les technologies d'aide à la préparation",
       "contenu": "\n<table>\n<thead><tr><th>Technologie</th><th>Fonctionnement</th><th>Intérêt</th></tr></thead>\n<tbody>\n<tr><td>Bon de préparation papier</td><td>Liste des lignes dans l'ordre du parcours</td><td>Simple, mais erreurs et saisie a posteriori</td></tr>\n<tr><td>Terminal radio avec lecteur code-barres</td><td>Mission affichée, scan de l'emplacement et du produit</td><td>Contrôle en temps réel, stock à jour</td></tr>\n<tr><td>Commande vocale (pick-to-voice)</td><td>Instructions dans un casque, confirmation par un code prononcé</td><td>Mains et yeux libres, bonne qualité</td></tr>\n<tr><td>Afficheurs lumineux (pick-to-light, put-to-light)</td><td>Un voyant s'allume sur l'emplacement et affiche la quantité</td><td>Très rapide pour les références à forte rotation</td></tr>\n<tr><td>Systèmes produit vers homme et robots mobiles</td><td>Les contenants viennent au poste</td><td>Suppression des déplacements, fortes cadences</td></tr>\n</tbody>\n</table>\n<p>La <strong>qualité de préparation</strong> se mesure par le <strong>taux d'erreur</strong> (erreurs / lignes préparées). Les contrôles en sortie (pesée du colis comparée au poids théorique, scan de chaque article, contrôle visuel par sondage) détectent les erreurs avant le départ.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> corriger une erreur dans l'entrepôt coûte peu ; la corriger après livraison coûte un retour, un renvoi, du temps de service client et parfois un client perdu. Un contrôle à la source (scan obligatoire du produit à chaque prélèvement) vaut mieux qu'un contrôle final.</div>\n"
      },
      {
       "titre": "Améliorer une zone de préparation",
       "contenu": "\n<p>Pour proposer des améliorations, on part des faits : indicateurs de productivité et d'erreur, observation des déplacements, temps d'attente. Les pistes classiques sont :</p>\n<ul>\n<li><strong>réimplanter</strong> les références selon une nouvelle analyse ABC, car les ventes évoluent (saisons, promotions) ;</li>\n<li>placer les références A dans la <strong>zone d'or</strong>, entre la hauteur des hanches et celle des épaules, pour limiter flexions et extensions ;</li>\n<li>rapprocher les références souvent commandées ensemble ;</li>\n<li>adapter la méthode : passer de la préparation à la commande à la préparation groupée quand les commandes deviennent petites et nombreuses ;</li>\n<li>anticiper les réapprovisionnements pour supprimer les ruptures en cours de vague ;</li>\n<li>séparer les références qui se ressemblent (même emballage, couleurs voisines) pour limiter les erreurs.</li>\n</ul>\n<p>Chaque amélioration doit être évaluée après sa mise en place, en comparant les indicateurs avant et après sur une période comparable.</p>\n"
      },
      {
       "titre": "Contrôler et conditionner les commandes préparées",
       "contenu": "\n<p>La préparation s'achève au <strong>poste de conditionnement</strong> (ou poste d'emballage), où la commande est contrôlée, protégée et mise dans son emballage d'expédition. Le choix du carton a un effet direct sur le coût de transport et sur l'environnement : un carton trop grand transporte du vide, consomme plus de matière de calage et peut être facturé au poids volumétrique par le transporteur.</p>\n<p>Exemple : une commande occupe un volume de 9 litres. Le poste dispose de cartons de 12 litres (30 × 20 × 20 cm), 20 litres et 36 litres. Le carton de 12 litres suffit avec un calage léger ; prendre le carton de 36 litres multiplierait par trois le volume transporté pour le même contenu. De nombreux WMS calculent le volume théorique de la commande et proposent automatiquement le carton adapté.</p>\n<p>Pour les palettes, le conditionnement comprend le <strong>filmage</strong> (manuel ou par banderoleuse), la pose de cornières si nécessaire et l'étiquetage. Une palette d'expédition doit être stable, ne pas déborder du plateau, respecter une hauteur et un poids maximaux fixés par le client ou le transporteur, et porter son étiquette logistique sur au moins un côté visible, souvent deux côtés adjacents.</p>\n"
      }
     ],
     "points_cles": [
      "Les déplacements représentent environ la moitié du temps de préparation : c'est le premier levier.",
      "Préparation à la commande, groupée, par vague, par zone ou en deux temps : le choix dépend de la taille et du nombre des commandes.",
      "Le parcours tient compte des distances mais d'abord de la stabilité de la charge (lourd en premier).",
      "La productivité se mesure en lignes, colis ou unités par heure productive.",
      "Besoin en préparateurs = lignes à préparer / productivité / heures productives par personne, arrondi au-dessus.",
      "Terminal radio, commande vocale, pick-to-light et systèmes produit vers homme améliorent productivité et qualité.",
      "La zone d'or, entre hanches et épaules, accueille les références les plus prélevées.",
      "Une amélioration se mesure avant et après sa mise en œuvre."
     ],
     "lexique": [
      {
       "terme": "Ligne de commande",
       "def": "Une référence d'une commande, quelle que soit la quantité demandée."
      },
      {
       "terme": "Préparation par vague",
       "def": "Lancement des commandes par lots cohérents (heure de départ, tournée, transporteur)."
      },
      {
       "terme": "Préparation en deux temps",
       "def": "Prélèvement global d'une référence pour plusieurs commandes, puis répartition par commande."
      },
      {
       "terme": "Parcours en S",
       "def": "Parcours qui traverse entièrement chaque allée utile en alternant le sens."
      },
      {
       "terme": "Pick-to-light",
       "def": "Système où un voyant lumineux indique l'emplacement et la quantité à prélever."
      },
      {
       "terme": "Produit vers homme",
       "def": "Organisation où un système automatisé apporte les contenants au poste fixe du préparateur."
      },
      {
       "terme": "Zone d'or",
       "def": "Hauteur de prélèvement la plus confortable, entre les hanches et les épaules."
      },
      {
       "terme": "Taux d'erreur de préparation",
       "def": "Nombre de lignes erronées divisé par le nombre de lignes préparées."
      }
     ]
    },
    {
     "id": "blog-supports-retours",
     "titre": "Gérer les supports de charge, les contenants et les retours",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Identifier les principaux supports de charge et contenants réutilisables et leurs caractéristiques.",
      "Expliquer les modes de gestion des palettes : échange, consigne, location, achat.",
      "Tenir un compte de supports avec un transporteur ou un client et analyser un solde.",
      "Organiser la réception, le tri et le traitement des supports et des produits retournés.",
      "Situer la gestion des retours dans une démarche d'économie circulaire."
     ],
     "sections": [
      {
       "titre": "Les supports de charge et les contenants",
       "contenu": "\n<p>Un <strong>support de charge</strong> est l'élément sur lequel ou dans lequel on regroupe des marchandises pour les manutentionner et les transporter comme une seule unité : c'est la base de l'<strong>unité de charge</strong>. Le mot <strong>contenant</strong> désigne plus largement tout emballage réutilisable (bac, caisse-palette, conteneur roulant).</p>\n<table>\n<thead><tr><th>Support ou contenant</th><th>Caractéristiques</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Palette Europe (EUR/EPAL)</td><td>Bois, 1 200 × 800 mm, normalisée, marquée sur les dés</td><td>Distribution en Europe, échange entre partenaires</td></tr>\n<tr><td>Palette 1 200 × 1 000 mm</td><td>Bois, format dit industriel</td><td>Industrie, chimie, boissons</td></tr>\n<tr><td>Demi-palette 800 × 600 mm</td><td>Bois ou plastique</td><td>Mise en avant en magasin, petits volumes</td></tr>\n<tr><td>Palette perdue</td><td>Construction légère, non normalisée</td><td>Usage unique, export lointain</td></tr>\n<tr><td>Palette plastique</td><td>Hygiénique, lavable, durable</td><td>Agroalimentaire, pharmacie, circuits fermés</td></tr>\n<tr><td>Bac plastique gerbable ou emboîtable</td><td>Réutilisable, dimensions modulaires</td><td>Produits frais, pièces industrielles, kanban</td></tr>\n<tr><td>Rolls (conteneur roulant)</td><td>Cadre métallique à roulettes</td><td>Livraison de magasins, messagerie</td></tr>\n<tr><td>Caisse-palette et conteneur grand volume</td><td>Métal ou plastique, parois</td><td>Pièces industrielles, vrac</td></tr>\n</tbody>\n</table>\n<p>Les dimensions des bacs et des colis sont souvent des sous-multiples de la palette (600 × 400 mm, 400 × 300 mm), ce qui permet de remplir le plateau sans vide : c'est la <strong>modularité</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une palette cassée (planche fendue, dé arraché, clou saillant) ne doit pas être utilisée : elle peut céder dans un rayonnage ou sous les fourches. Elle est écartée, triée vers la réparation ou le recyclage. Les palettes destinées à l'export hors Union européenne doivent en outre porter le marquage du traitement phytosanitaire NIMP 15.</div>\n"
      },
      {
       "titre": "Les modes de gestion des palettes",
       "contenu": "\n<p>Les palettes représentent une valeur importante et circulent entre de nombreuses entreprises. Plusieurs modes de gestion coexistent :</p>\n<ul>\n<li>l'<strong>échange</strong> : à la livraison, le destinataire rend au transporteur autant de palettes vides de même qualité qu'il en reçoit pleines. C'est le mode historique de la palette Europe, mais il crée des litiges sur la qualité des palettes rendues ;</li>\n<li>la <strong>consigne</strong> : chaque support est facturé à un prix de consigne et remboursé à son retour ;</li>\n<li>la <strong>location</strong> (pooling) : un loueur fournit les palettes, les récupère chez les destinataires, les contrôle, les répare et les remet en circulation, contre une redevance par mouvement ;</li>\n<li>l'<strong>achat</strong> sans retour : palettes perdues ou palettes intégrées au prix de la marchandise.</li>\n</ul>\n<p>Quel que soit le mode, chaque mouvement de support doit être enregistré : nombre et type de supports livrés, rendus ou non rendus, avec signature des deux parties. Ces informations figurent sur le document de transport, sur un bon d'échange ou dans l'application du transporteur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans la grande distribution, les rolls et les bacs des produits frais suivent souvent un circuit fermé entre la plateforme et les magasins : ils repartent dans le camion après chaque livraison. Le magasin qui garde des rolls pour son usage personnel crée une pénurie à la plateforme, qui doit alors préparer sur palettes, avec plus de manutention.</div>\n"
      },
      {
       "titre": "Tenir un compte de supports",
       "contenu": "\n<p>Le suivi des supports se fait par un <strong>compte de supports</strong> ouvert pour chaque partenaire (transporteur, client, fournisseur). On y inscrit les supports confiés et les supports récupérés. Le <strong>solde</strong> indique combien de supports le partenaire doit à l'entreprise (ou l'inverse).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un compte palettes. Compte du transporteur T au 1er du mois : solde de 40 palettes Europe en faveur de l'entrepôt (le transporteur en doit 40). Mouvements du mois : semaine 1, 120 palettes sorties pleines, 95 rendues vides ; semaine 2, 140 sorties, 150 rendues ; semaine 3, 110 sorties, 80 rendues ; semaine 4, 130 sorties, 115 rendues. Étape 1 : total sorti = 120 + 140 + 110 + 130 = 500. Étape 2 : total rendu = 95 + 150 + 80 + 115 = 440. Étape 3 : écart du mois = 500 − 440 = 60 palettes non rendues. Étape 4 : solde fin de mois = 40 + 60 = 100 palettes dues par le transporteur. Étape 5 : en valorisant une palette Europe à un prix de référence convenu dans le contrat (par exemple 10 €), la créance atteint 1 000 €. Une relance avec le relevé signé s'impose, et le contrat doit prévoir une régularisation (restitution ou facturation).</div>\n<p>Les écarts s'expliquent par des palettes non rendues par les destinataires finaux, des palettes rendues en mauvais état et refusées, des erreurs de saisie ou des bons d'échange non signés. Un compte suivi chaque semaine évite que la dette ne s'accumule.</p>\n"
      },
      {
       "titre": "La logistique des retours",
       "contenu": "\n<p>La <strong>logistique inverse</strong> (ou logistique des retours, en anglais reverse logistics) traite tout ce qui revient vers l'entreprise :</p>\n<ul>\n<li>les <strong>supports et emballages réutilisables</strong> (palettes, bacs, rolls, fûts) ;</li>\n<li>les <strong>retours clients</strong> : erreur de commande, produit défectueux, rétractation du consommateur dans la vente à distance ;</li>\n<li>les <strong>invendus</strong> et produits en fin de saison ;</li>\n<li>les <strong>rappels de produits</strong> ordonnés pour raison de sécurité ou de non-conformité ;</li>\n<li>les <strong>produits en fin de vie</strong> soumis à des filières de reprise (équipements électriques et électroniques, piles, emballages).</li>\n</ul>\n<p>Un retour client suit en général un circuit : demande de retour et attribution d'un <strong>numéro d'autorisation de retour</strong>, réception, identification, contrôle de l'état, décision de destination, mise à jour du stock et déclenchement du remboursement ou de l'échange.</p>\n"
      },
      {
       "titre": "Trier et décider de la destination",
       "contenu": "\n<p>Au contrôle, chaque article retourné est classé selon son état. La décision de destination est fixée par le donneur d'ordre :</p>\n<table>\n<thead><tr><th>État constaté</th><th>Destination possible</th></tr></thead>\n<tbody>\n<tr><td>Neuf, emballage intact</td><td>Remise en stock vendable</td></tr>\n<tr><td>Neuf, emballage abîmé</td><td>Reconditionnement puis remise en stock, ou vente en second choix</td></tr>\n<tr><td>Défectueux réparable</td><td>Service après-vente, réparation, reconditionnement</td></tr>\n<tr><td>Défectueux non réparable</td><td>Retour fournisseur, démontage pour pièces, recyclage</td></tr>\n<tr><td>Périmé ou dangereux</td><td>Destruction par une filière autorisée, avec certificat</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le retour remis en stock doit être réellement vendable. Un article remis en stock alors qu'il est incomplet ou abîmé repartira chez un autre client et provoquera une nouvelle réclamation. En cas de doute, il passe en quarantaine en attendant la décision du responsable.</div>\n<p>La loi relative à la lutte contre le gaspillage et à l'économie circulaire (loi AGEC de 2020) interdit la destruction des invendus non alimentaires pour de nombreuses catégories de produits : ils doivent être réemployés (dons notamment), réutilisés ou recyclés. La destination « destruction » est donc de plus en plus encadrée.</p>\n"
      },
      {
       "titre": "Mesurer et réduire les retours",
       "contenu": "\n<p>Les retours coûtent cher : transport, contrôle, reconditionnement, perte de valeur. On suit des indicateurs comme le <strong>taux de retour</strong> (articles retournés / articles livrés), la répartition des retours par motif, le délai de traitement d'un retour et la part des articles remis en stock vendable.</p>\n<p>L'analyse des motifs permet d'agir à la source : un taux élevé de « produit abîmé » pointe vers l'emballage ou le transport ; un taux élevé d'« erreur d'article » pointe vers la préparation ; un taux élevé de « ne correspond pas à la description » relève du service commercial. Le logisticien transmet ces faits aux services concernés.</p>\n<p>Exemple : sur un mois, un entrepôt e-commerce a livré 48 000 articles et en a reçu 3 360 en retour. Le taux de retour est de 3 360 / 48 000 × 100 = 7 %. Parmi ces retours, 2 150 ont été remis en stock vendable, soit 2 150 / 3 360 × 100 ≈ 64 %. Les 1 210 autres articles ont été reconditionnés, réparés, vendus en second choix ou recyclés. Si 420 retours ont pour motif « erreur d'article », soit 12,5 % des retours, une action sur la préparation (scan obligatoire, séparation des références qui se ressemblent) peut réduire directement les coûts.</p>\n<p>Enfin, l'organisation physique compte : une zone de retours dédiée, séparée de la réception fournisseurs, avec des postes de contrôle équipés (lecteur, imprimante d'étiquettes, matériel de reconditionnement) et des emplacements tampons par destination évite que les retours ne s'accumulent sans traitement.</p>\n"
      }
     ],
     "points_cles": [
      "Un support de charge est la base d'une unité de charge ; la palette Europe mesure 1 200 × 800 mm.",
      "Les formats modulaires (600 × 400, 400 × 300) remplissent le plateau sans vide.",
      "Les palettes se gèrent par échange, consigne, location (pooling) ou achat.",
      "Chaque mouvement de support est enregistré et signé par les deux parties.",
      "Solde d'un compte de supports = solde initial + supports confiés − supports récupérés.",
      "Un retour client suit un circuit : autorisation, réception, contrôle, décision, mise à jour du stock.",
      "La destination d'un retour dépend de son état ; un article douteux part en quarantaine.",
      "La loi AGEC encadre la destruction des invendus non alimentaires."
     ],
     "lexique": [
      {
       "terme": "Support de charge",
       "def": "Élément (palette, bac, roll) sur lequel ou dans lequel on regroupe des marchandises pour les manutentionner."
      },
      {
       "terme": "Unité de charge",
       "def": "Ensemble de marchandises regroupées sur un support pour être manutentionnées en une seule fois."
      },
      {
       "terme": "Palette Europe",
       "def": "Palette normalisée de 1 200 × 800 mm, marquée, échangeable entre partenaires."
      },
      {
       "terme": "Pooling",
       "def": "Location de supports gérée par un loueur qui les récupère, les répare et les remet en circulation."
      },
      {
       "terme": "Compte de supports",
       "def": "Suivi des supports confiés et récupérés avec un partenaire, dont le solde indique la dette de l'un envers l'autre."
      },
      {
       "terme": "Rolls",
       "def": "Conteneur roulant à cadre métallique utilisé notamment pour livrer les magasins."
      },
      {
       "terme": "Logistique inverse",
       "def": "Organisation des flux de retour du client vers l'entreprise."
      },
      {
       "terme": "Numéro d'autorisation de retour",
       "def": "Référence attribuée à un retour accepté, qui permet de l'identifier à la réception."
      },
      {
       "terme": "NIMP 15",
       "def": "Norme internationale de traitement phytosanitaire des emballages en bois utilisés à l'export."
      }
     ]
    },
    {
     "id": "blog-tournee",
     "titre": "Organiser une tournée de livraison",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Choisir un véhicule adapté à une tournée à partir de ses caractéristiques (PTAC, charge utile, volume).",
      "Construire un ordre de tournée et estimer sa durée.",
      "Vérifier une tournée au regard des temps de conduite et de repos.",
      "Établir un plan de chargement qui respecte l'ordre de livraison et la répartition des charges.",
      "Préparer les documents et le suivi d'une tournée."
     ],
     "sections": [
      {
       "titre": "La tournée : définition et enjeux",
       "contenu": "\n<p>Une <strong>tournée</strong> est un circuit réalisé par un véhicule qui part d'un site, livre (ou enlève) plusieurs destinataires, puis revient à son point de départ. C'est le mode de distribution des messageries, de la distribution aux magasins de proximité, de la livraison aux artisans ou aux particuliers.</p>\n<p>Une bonne tournée concilie plusieurs objectifs parfois contradictoires : respecter les créneaux des clients, limiter les kilomètres et le temps, remplir correctement le véhicule, respecter la réglementation sociale et routière, réduire les émissions. Elle se prépare la veille ou quelques heures avant le départ, à partir des commandes préparées.</p>\n"
      },
      {
       "titre": "Choisir le véhicule",
       "contenu": "\n<p>Le choix du véhicule repose sur des caractéristiques lues sur le certificat d'immatriculation et la fiche technique :</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Définition</th></tr></thead>\n<tbody>\n<tr><td>PTAC</td><td>Poids total autorisé en charge : masse maximale du véhicule chargé</td></tr>\n<tr><td>Poids à vide (tare)</td><td>Masse du véhicule sans chargement</td></tr>\n<tr><td>Charge utile</td><td>PTAC − poids à vide : masse maximale de marchandise transportable</td></tr>\n<tr><td>Volume utile et dimensions</td><td>Longueur, largeur, hauteur intérieures ; nombre de palettes au sol</td></tr>\n<tr><td>Équipements</td><td>Hayon élévateur, transpalette embarqué, groupe frigorifique, rideau coulissant</td></tr>\n</tbody>\n</table>\n<p>Ordres de grandeur : un véhicule utilitaire léger (VUL) a un PTAC jusqu'à 3,5 t et se conduit avec le permis B ; un porteur de 19 t emporte de l'ordre de 15 à 18 palettes ; une semi-remorque standard de 13,60 m accueille 33 palettes de 1 200 × 800 mm au sol. La charge utile exacte dépend toujours du véhicule.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'un chargement tient dans un véhicule. Tournée de 8 clients, 14 palettes au total, masse totale 6 300 kg. Véhicule proposé : porteur de PTAC 19 t, poids à vide 10,2 t, 16 places palettes. Étape 1 : charge utile = 19 − 10,2 = 8,8 t ; 6,3 t ≤ 8,8 t, la masse convient. Étape 2 : 14 palettes ≤ 16 places, l'encombrement convient (si les palettes ne sont pas gerbables). Étape 3 : taux de remplissage en masse = 6,3 / 8,8 ≈ 72 % ; en places = 14 / 16 = 87,5 %. C'est l'encombrement qui limite, ce qui est fréquent en distribution.</div>\n"
      },
      {
       "titre": "Construire l'ordre de tournée et estimer sa durée",
       "contenu": "\n<p>L'ordre des livraisons tient compte de la géographie (éviter les allers-retours), des <strong>créneaux de livraison</strong> imposés par les clients, des contraintes d'accès (horaires de livraison en centre-ville, gabarit, zones à faibles émissions) et des priorités (produits frais, client stratégique). Les logiciels d'optimisation (TMS) proposent un ordre, que le planificateur ajuste avec sa connaissance du terrain.</p>\n<p>La durée d'une tournée comprend : les temps de trajet (distance / vitesse moyenne réaliste), les temps d'arrêt chez chaque client (manœuvre, déchargement, signature), les temps de chargement au départ, les pauses réglementaires et une marge pour les aléas.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer une tournée. Distance totale : 186 km, dont 120 km sur route à 60 km/h de moyenne et 66 km en zone urbaine à 25 km/h. Temps de trajet = 120 / 60 + 66 / 25 = 2 h + 2,64 h = 4,64 h, soit environ 4 h 38 min. Arrêts : 8 clients × 20 min = 160 min = 2 h 40 min. Chargement au départ : 30 min. Total sans pause = 4 h 38 + 2 h 40 + 0 h 30 = 7 h 48 min. Départ à 5 h : retour prévu vers 12 h 48, à quoi s'ajoutent les pauses obligatoires et une marge.</div>\n"
      },
      {
       "titre": "Les contraintes d'accès et de livraison urbaine",
       "contenu": "\n<p>La préparation d'une tournée doit intégrer les contraintes propres à chaque point de livraison. Elles figurent dans la fiche client du TMS et doivent être tenues à jour à partir des remontées des conducteurs.</p>\n<ul>\n<li><strong>Horaires</strong> : heures d'ouverture de la réception, plages interdites aux livraisons dans certains centres-villes, créneaux réservés sur des aires de livraison.</li>\n<li><strong>Gabarit</strong> : hauteur sous porche ou sous pont, largeur de rue, tonnage maximal autorisé sur une voie, rayon de braquage dans une cour.</li>\n<li><strong>Zones à faibles émissions</strong> (ZFE) : certaines agglomérations limitent l'accès des véhicules selon leur vignette Crit'Air ; les règles changent selon les villes et dans le temps, il faut les vérifier avant d'affecter un véhicule.</li>\n<li><strong>Moyens de déchargement</strong> : présence ou non d'un quai, d'un chariot chez le client ; à défaut, le véhicule doit avoir un hayon et un transpalette.</li>\n<li><strong>Consignes particulières</strong> : code d'accès, contact à prévenir, emplacement de dépôt, reprise d'emballages.</li>\n</ul>\n<p>Pour le dernier kilomètre en ville, les entreprises utilisent de plus en plus des véhicules électriques, des vélos-cargos ou des espaces logistiques urbains, petites plateformes proches des centres où les marchandises sont transférées des camions vers des véhicules plus légers.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une tournée parfaite sur la carte échoue si un camion de 19 t est envoyé dans une rue limitée à 7,5 t ou si le client n'a pas de quai. Les contraintes d'accès se vérifient avant le choix du véhicule.</div>\n"
      },
      {
       "titre": "Respecter les temps de conduite et de repos",
       "contenu": "\n<p>Pour les véhicules de transport de marchandises de plus de 3,5 t, le règlement européen (CE) n° 561/2006 fixe des limites, contrôlées grâce au <strong>chronotachygraphe</strong> (enregistreur numérique des temps de conduite et de repos lié à la carte du conducteur). Les principales règles sont :</p>\n<table>\n<thead><tr><th>Règle</th><th>Limite</th></tr></thead>\n<tbody>\n<tr><td>Conduite continue</td><td>4 h 30 maximum, puis pause d'au moins 45 min (fractionnable en 15 min puis 30 min)</td></tr>\n<tr><td>Conduite journalière</td><td>9 h, portée à 10 h deux fois par semaine au maximum</td></tr>\n<tr><td>Conduite hebdomadaire</td><td>56 h maximum</td></tr>\n<tr><td>Conduite sur deux semaines consécutives</td><td>90 h maximum</td></tr>\n<tr><td>Repos journalier</td><td>11 h en principe (réductible à 9 h trois fois entre deux repos hebdomadaires)</td></tr>\n<tr><td>Repos hebdomadaire</td><td>45 h en principe</td></tr>\n</tbody>\n</table>\n<p>Ces règles portent sur la <strong>conduite</strong>. Le droit du travail fixe en plus des durées maximales de <strong>travail</strong> (conduite, chargement, attente comprise) pour les conducteurs salariés.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans l'exemple de tournée précédent, la conduite totale (4 h 38) dépasse 4 h 30. Même si les arrêts chez les clients interrompent la conduite, il faut vérifier que les interruptions comptent comme pause (au moins 15 puis 30 minutes sans conduire ni autre travail ; le déchargement est un travail et ne compte pas comme pause). Prévoir explicitement une pause de 45 min dans le planning évite l'infraction.</div>\n"
      },
      {
       "titre": "Le plan de chargement",
       "contenu": "\n<p>Le <strong>plan de chargement</strong> indique la place de chaque palette ou colis dans le véhicule. Il respecte trois règles :</p>\n<ul>\n<li><strong>ordre inverse de livraison</strong> : le premier client livré est chargé en dernier, près des portes (principe dernier chargé, premier livré) ;</li>\n<li><strong>répartition des masses</strong> : charges lourdes en bas et réparties sur la longueur et la largeur, pour ne pas surcharger un essieu ni déséquilibrer le véhicule ;</li>\n<li><strong>arrimage</strong> : la charge doit être immobilisée (sangles, barres de blocage, calage) pour résister aux freinages, accélérations et virages. Un chargement mal arrimé peut se déplacer et provoquer un accident.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un véhicule à hayon qui livre plusieurs magasins, le conducteur vérifie au départ que les palettes du premier client sont bien accessibles côté hayon et que les sangles sont tendues entre chaque groupe de palettes. Une palette du deuxième client chargée devant celle du premier oblige à décharger puis recharger, avec perte de temps et risque de chute.</div>\n"
      },
      {
       "titre": "Documents et suivi de la tournée",
       "contenu": "\n<p>Le conducteur part avec une <strong>feuille de route</strong> (papier ou sur terminal) qui donne l'ordre des clients, les adresses, les créneaux, les consignes particulières et le détail des supports à livrer et à reprendre. Il emporte aussi les documents de transport et, si nécessaire, les documents propres aux marchandises (produits dangereux, température dirigée).</p>\n<p>Pendant la tournée, le terminal embarqué permet d'enregistrer la <strong>preuve de livraison</strong> (signature, photo), les réserves éventuelles du destinataire, les supports repris et les incidents (client absent, accès impossible). Ces informations remontent en temps réel au service exploitation.</p>\n<p>Au retour, on analyse les écarts entre prévu et réalisé : retards, kilomètres, livraisons non réalisées. Les indicateurs de la tournée sont par exemple le taux de livraisons dans le créneau, le coût par point livré et le taux de remplissage.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une tournée se prépare sur trois plans : le véhicule (charge utile, volume, équipements), l'itinéraire (ordre, créneaux, durée, temps de conduite) et le chargement (ordre inverse, répartition, arrimage).</div>\n"
      }
     ],
     "points_cles": [
      "Charge utile = PTAC − poids à vide ; en distribution, c'est souvent l'encombrement qui limite.",
      "Une semi-remorque standard accueille 33 palettes de 1 200 × 800 mm au sol.",
      "La durée d'une tournée additionne trajets, arrêts, chargement, pauses et marge.",
      "Au-delà de 3,5 t : 4 h 30 de conduite continue maximum, puis 45 min de pause ; 9 h par jour (10 h deux fois par semaine).",
      "Le déchargement est du travail : il ne compte pas comme pause de conduite.",
      "Le plan de chargement suit l'ordre inverse de livraison et répartit les masses.",
      "Un chargement doit être arrimé pour résister aux freinages et aux virages.",
      "La preuve de livraison et les réserves sont saisies pendant la tournée et remontées à l'exploitation."
     ],
     "lexique": [
      {
       "terme": "Tournée",
       "def": "Circuit d'un véhicule qui dessert plusieurs points de livraison ou d'enlèvement et revient à son point de départ."
      },
      {
       "terme": "PTAC",
       "def": "Poids total autorisé en charge, masse maximale d'un véhicule chargé."
      },
      {
       "terme": "Charge utile",
       "def": "Masse maximale de marchandise transportable : PTAC moins poids à vide."
      },
      {
       "terme": "Chronotachygraphe",
       "def": "Appareil qui enregistre les temps de conduite, de travail et de repos du conducteur."
      },
      {
       "terme": "Feuille de route",
       "def": "Document qui décrit l'ordre des livraisons, les adresses, les créneaux et les consignes d'une tournée."
      },
      {
       "terme": "Plan de chargement",
       "def": "Schéma indiquant la position de chaque charge dans le véhicule."
      },
      {
       "terme": "Arrimage",
       "def": "Ensemble des moyens qui immobilisent la charge dans le véhicule (sangles, barres, calage)."
      },
      {
       "terme": "Créneau de livraison",
       "def": "Plage horaire pendant laquelle le destinataire accepte la livraison."
      }
     ]
    },
    {
     "id": "blog-logistique-industrielle",
     "titre": "Contribuer à la logistique industrielle",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire les flux logistiques d'un site de production, du magasin matières au stock de produits finis.",
      "Expliquer la logique du calcul des besoins à partir d'une nomenclature.",
      "Distinguer flux poussés et flux tirés et décrire le fonctionnement d'un système kanban.",
      "Calculer un nombre de cartes kanban et un besoin en composants.",
      "Organiser l'approvisionnement des bords de ligne : tournées, kitting, séquencement."
     ],
     "sections": [
      {
       "titre": "Les flux d'un site de production",
       "contenu": "\n<p>La <strong>logistique industrielle</strong> (ou logistique de production) organise les flux de matières à l'intérieur d'une usine et entre l'usine et ses fournisseurs proches. Elle est au service des ateliers, qui sont ses clients internes.</p>\n<p>Le parcours type d'un composant est le suivant : réception au <strong>magasin matières</strong> (ou magasin composants), stockage, préparation pour la production, livraison au <strong>bord de ligne</strong> (zone de stock tampon située au pied du poste de travail), consommation par l'opérateur, puis récupération des emballages vides. En sortie de production, les produits finis sont conditionnés, contrôlés et transférés au <strong>magasin de produits finis</strong> avant expédition.</p>\n<p>Entre deux étapes de fabrication, les pièces en attente forment des <strong>en-cours</strong>. Trop d'en-cours immobilise de la place et de l'argent et masque les problèmes ; trop peu expose à des arrêts au moindre aléa.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en usine, la logistique est jugée sur un critère prioritaire : la production ne doit jamais s'arrêter faute de composant. Un arrêt de ligne coûte généralement beaucoup plus cher que le stock qui l'aurait évité.</div>\n"
      },
      {
       "titre": "La nomenclature et le calcul des besoins",
       "contenu": "\n<p>La <strong>nomenclature</strong> d'un produit est la liste structurée de tous ses composants, avec les quantités nécessaires pour fabriquer une unité. Elle se présente souvent en niveaux : le produit fini (niveau 0), ses sous-ensembles (niveau 1), les composants de ces sous-ensembles (niveau 2), etc.</p>\n<table>\n<thead><tr><th>Niveau</th><th>Code</th><th>Désignation</th><th>Quantité pour 1 parent</th></tr></thead>\n<tbody>\n<tr><td>0</td><td>CH-100</td><td>Chaise de bureau</td><td>1</td></tr>\n<tr><td>1</td><td>PI-20</td><td>Piètement étoile</td><td>1</td></tr>\n<tr><td>2</td><td>RO-05</td><td>Roulette</td><td>5</td></tr>\n<tr><td>1</td><td>AS-30</td><td>Assise garnie</td><td>1</td></tr>\n<tr><td>2</td><td>VI-08</td><td>Vis M8</td><td>4</td></tr>\n<tr><td>1</td><td>DO-40</td><td>Dossier</td><td>1</td></tr>\n<tr><td>2</td><td>VI-08</td><td>Vis M8</td><td>4</td></tr>\n</tbody>\n</table>\n<p>Le <strong>calcul des besoins nets</strong> (méthode MRP, material requirements planning) part du programme de production, multiplie par les quantités de la nomenclature, puis déduit le stock disponible et les commandes déjà en cours.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un besoin net. Le programme de la semaine prévoit 600 chaises. Besoin brut en vis M8 : 600 × (4 + 4) = 4 800 vis. Stock disponible : 1 900 vis ; commande fournisseur attendue avant la date de besoin : 2 000 vis. Besoin net = 4 800 − 1 900 − 2 000 = 900 vis. Si les vis sont conditionnées en boîtes de 500, il faut commander 2 boîtes, soit 1 000 vis. Besoin brut en roulettes : 600 × 5 = 3 000 roulettes.</div>\n<p>Le logisticien utilise surtout le résultat de ce calcul : listes de composants à préparer, ordres de transfert vers les ateliers, alertes de manque. Comprendre la logique permet de détecter une incohérence (quantité anormale, composant oublié).</p>\n"
      },
      {
       "titre": "Flux poussés et flux tirés",
       "contenu": "\n<p>On distingue deux façons de piloter les flux :</p>\n<ul>\n<li>en <strong>flux poussés</strong>, on produit et on approvisionne d'après des prévisions et un planning : les composants sont « poussés » vers les postes selon le programme ;</li>\n<li>en <strong>flux tirés</strong>, c'est la consommation réelle qui déclenche le réapprovisionnement : un poste qui consomme « tire » les composants du poste ou du magasin amont.</li>\n</ul>\n<p>Le <strong>juste-à-temps</strong> (JAT) vise à fournir le bon composant, en bonne quantité, au moment exact du besoin, avec un stock minimal. Il repose sur des flux tirés, une grande fiabilité des fournisseurs et des transports, et des livraisons fréquentes en petites quantités.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le juste-à-temps rend la chaîne très sensible aux perturbations (grève, accident de transport, panne chez un fournisseur). Supprimer tous les stocks sans fiabiliser les flux conduit à des arrêts de production. Les entreprises gardent donc souvent des stocks de sécurité sur les composants critiques ou venant de loin.</div>\n"
      },
      {
       "titre": "Le système kanban",
       "contenu": "\n<p>Le <strong>kanban</strong> (mot japonais signifiant « étiquette ») est l'outil le plus répandu de flux tiré. Chaque contenant de composants porte une carte (ou un code) indiquant : la référence, la quantité par contenant, le fournisseur (magasin ou poste amont) et le client (poste consommateur). Quand l'opérateur entame un contenant, il détache la carte et la place sur un <strong>tableau kanban</strong> ou la dépose dans une boîte de collecte. La carte devient un ordre de réapprovisionnement.</p>\n<p>Une variante très simple est le <strong>système à deux bacs</strong> : deux bacs identiques en bord de ligne ; quand le premier est vide, il part au magasin pour être rempli pendant que l'opérateur consomme le second.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un nombre de cartes kanban. Formule usuelle : nombre de cartes = (consommation par heure × délai de réapprovisionnement en heures × (1 + coefficient de sécurité)) / quantité par contenant, arrondi au-dessus. Données : consommation de roulettes 250 par heure, délai de la boucle (collecte, préparation, livraison) 2 heures, coefficient de sécurité 20 %, contenants de 100 roulettes. Calcul : 250 × 2 = 500 ; 500 × 1,2 = 600 ; 600 / 100 = 6 cartes. Il y aura donc au plus 6 contenants de roulettes en circulation dans la boucle, soit 600 roulettes au maximum.</div>\n<p>Le nombre de cartes fixe le stock maximal de la boucle : retirer une carte réduit le stock, mais expose davantage aux aléas.</p>\n"
      },
      {
       "titre": "Approvisionner les bords de ligne",
       "contenu": "\n<p>L'approvisionnement des postes de production obéit à des règles précises :</p>\n<ul>\n<li>le <strong>petit train</strong> (ou tournée de bord de ligne) : un tracteur tire plusieurs chariots et suit un circuit fixe à intervalle régulier (par exemple toutes les 30 minutes), livrant les contenants pleins et reprenant les vides et les cartes kanban ;</li>\n<li>le <strong>kitting</strong> : le magasin prépare un kit contenant tous les composants nécessaires à un produit ou à une série, ce qui évite à l'opérateur de chercher parmi de nombreuses références ;</li>\n<li>le <strong>séquencement</strong> : les composants arrivent dans l'ordre exact des produits qui passent sur la ligne (par exemple les sièges de voiture dans l'ordre des véhicules, chacun avec sa couleur et ses options).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chez les constructeurs automobiles, certains fournisseurs livrent leurs modules en <strong>synchrone</strong> : la commande part au moment où la caisse du véhicule entre en montage, et le module doit arriver au poste, dans le bon ordre, quelques heures plus tard. Un retard ou une inversion arrête la chaîne de montage.</div>\n<p>Le bord de ligne lui-même doit être organisé : emplacements identifiés pour chaque référence, contenants adaptés à la prise par l'opérateur, quantité limitée (souvent quelques heures de consommation), zone des vides séparée de la zone des pleins.</p>\n"
      },
      {
       "titre": "Mesurer la performance de la logistique de production",
       "contenu": "\n<p>Les indicateurs les plus suivis sont :</p>\n<ul>\n<li>le nombre et la durée des <strong>arrêts de ligne</strong> dus à un manque de composant ;</li>\n<li>le <strong>taux de service</strong> des livraisons au bord de ligne (livraisons à l'heure et complètes) ;</li>\n<li>le <strong>niveau des en-cours</strong> et la couverture en heures de production des stocks de bord de ligne ;</li>\n<li>le taux d'erreur de composants livrés ou de kits incomplets.</li>\n</ul>\n<p>Une rupture au bord de ligne s'analyse comme toute non-conformité : description précise, recherche des causes (carte kanban perdue, tournée en retard, stock magasin faux, nomenclature erronée), action corrective. La perte de cartes kanban est une cause classique : elle réduit silencieusement le stock de la boucle jusqu'à la rupture.</p>\n"
      },
      {
       "titre": "Les mouvements du magasin de production",
       "contenu": "\n<p>Dans une usine, chaque mouvement de matière doit être enregistré pour que le stock reste juste et que le coût de production soit connu. Les mouvements types sont :</p>\n<table>\n<thead><tr><th>Mouvement</th><th>Origine</th><th>Destination</th><th>Document ou transaction</th></tr></thead>\n<tbody>\n<tr><td>Entrée fournisseur</td><td>Fournisseur</td><td>Magasin matières</td><td>Réception sur commande d'achat</td></tr>\n<tr><td>Sortie pour fabrication</td><td>Magasin matières</td><td>Atelier ou bord de ligne</td><td>Bon de sortie rattaché à un ordre de fabrication</td></tr>\n<tr><td>Retour atelier</td><td>Atelier</td><td>Magasin matières</td><td>Bon de retour (composants non utilisés)</td></tr>\n<tr><td>Déclaration de production</td><td>Atelier</td><td>Magasin produits finis</td><td>Entrée de produits finis sur ordre de fabrication</td></tr>\n<tr><td>Rebut</td><td>Atelier ou magasin</td><td>Zone de rebut</td><td>Déclaration de rebut avec motif</td></tr>\n</tbody>\n</table>\n<p>Chaque sortie est rattachée à un <strong>ordre de fabrication</strong> (OF), qui précise le produit, la quantité à fabriquer et la date. Le contrôle de cohérence est simple : les composants sortis doivent correspondre à la quantité fabriquée multipliée par la nomenclature, aux rebuts près. Un écart important signale un rebut non déclaré, une erreur de saisie ou une nomenclature fausse.</p>\n<p>Les composants consommés sans saisie unitaire (vis, colle, petites fournitures) sont souvent gérés en <strong>consommation forfaitaire</strong> : le stock est déduit automatiquement à la déclaration de production, d'après la nomenclature. Cette facilité impose des inventaires plus fréquents sur ces articles.</p>\n"
      }
     ],
     "points_cles": [
      "La logistique industrielle relie le magasin matières, les bords de ligne et le magasin de produits finis.",
      "La nomenclature donne la quantité de chaque composant pour une unité de produit.",
      "Besoin net = besoin brut − stock disponible − commandes en cours, ajusté au conditionnement.",
      "En flux poussés, le planning pilote ; en flux tirés, la consommation réelle déclenche le réapprovisionnement.",
      "Le juste-à-temps réduit les stocks mais rend la chaîne sensible aux aléas.",
      "Nombre de cartes kanban = consommation × délai × (1 + sécurité) / quantité par contenant, arrondi au-dessus.",
      "Petit train, kitting et séquencement sont les modes d'approvisionnement des bords de ligne.",
      "L'arrêt de ligne dû à la logistique est l'indicateur le plus surveillé."
     ],
     "lexique": [
      {
       "terme": "Bord de ligne",
       "def": "Zone de stock tampon placée au pied d'un poste de production."
      },
      {
       "terme": "En-cours",
       "def": "Produits en attente entre deux étapes de fabrication."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste structurée des composants d'un produit avec leurs quantités unitaires."
      },
      {
       "terme": "MRP",
       "def": "Méthode de calcul des besoins en composants à partir du programme de production, des nomenclatures et des stocks."
      },
      {
       "terme": "Flux tiré",
       "def": "Pilotage où la consommation réelle déclenche le réapprovisionnement."
      },
      {
       "terme": "Juste-à-temps",
       "def": "Organisation visant à fournir le bon composant au moment exact du besoin avec un stock minimal."
      },
      {
       "terme": "Kanban",
       "def": "Carte ou signal attaché à un contenant qui sert d'ordre de réapprovisionnement quand le contenant est entamé."
      },
      {
       "terme": "Kitting",
       "def": "Préparation d'un ensemble de composants nécessaires à un produit, livré au poste en une fois."
      },
      {
       "terme": "Séquencement",
       "def": "Livraison des composants dans l'ordre exact de passage des produits sur la ligne."
      }
     ]
    },
    {
     "id": "blog-transport-externe",
     "titre": "Confier une expédition à un transporteur",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Distinguer messagerie, groupage, lot partiel et lot complet, et choisir l'offre adaptée à un envoi.",
      "Calculer un poids taxable et comparer des cotations de transporteurs.",
      "Identifier les parties au contrat de transport et leurs obligations.",
      "Expliquer la responsabilité du transporteur et ses limites d'indemnisation.",
      "Situer le rôle des Incoterms dans une expédition."
     ],
     "sections": [
      {
       "titre": "Les offres de transport routier",
       "contenu": "\n<p>Le cours de seconde a présenté les modes de transport (routier, ferroviaire, fluvial, maritime, aérien). En terminale, on se place du côté de l'expéditeur qui doit <strong>choisir une offre</strong> et un transporteur pour un envoi donné. En transport routier, quatre types d'offres se distinguent selon la taille de l'envoi :</p>\n<table>\n<thead><tr><th>Offre</th><th>Taille de l'envoi (ordres de grandeur)</th><th>Organisation</th><th>Délai type en France</th></tr></thead>\n<tbody>\n<tr><td>Colis (express, colis postaux)</td><td>Colis de quelques kilos à quelques dizaines de kilos</td><td>Réseau de hubs automatisés, tri des colis</td><td>J+1 à J+2</td></tr>\n<tr><td>Messagerie</td><td>De quelques colis à quelques palettes, jusqu'à environ 3 t</td><td>Enlèvement par tournée, groupage en agence, transport de nuit, dégroupage et livraison par tournée</td><td>J+1 à J+3</td></tr>\n<tr><td>Lot partiel (affrètement partiel)</td><td>Plusieurs palettes, souvent de 3 à une dizaine de tonnes</td><td>Le véhicule transporte plusieurs envois avec peu de ruptures de charge</td><td>J+1 à J+2</td></tr>\n<tr><td>Lot complet</td><td>Véhicule entier, par exemple 33 palettes ou 24 t environ en semi-remorque</td><td>Trajet direct de l'expéditeur au destinataire sans rupture de charge</td><td>Selon la distance</td></tr>\n</tbody>\n</table>\n<p>Chaque <strong>rupture de charge</strong> (transbordement d'un véhicule à un autre) ajoute un risque de perte, d'avarie et de retard, mais permet de mutualiser les coûts entre de nombreux chargeurs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> plus l'envoi est petit, plus il passe par des plateformes de groupage et plus son prix au kilo est élevé. Plus il est gros, plus le transport direct devient économique et sûr.</div>\n"
      },
      {
       "titre": "Le poids taxable et la tarification",
       "contenu": "\n<p>Un transporteur vend de la masse et de l'espace. Un envoi léger mais volumineux occupe autant de place qu'un envoi lourd. Les transporteurs calculent donc un <strong>poids taxable</strong> : le plus grand entre le poids réel et un <strong>poids volumétrique</strong> obtenu en appliquant au volume un rapport de conversion fixé dans leurs conditions tarifaires. En messagerie routière, des rapports de l'ordre de 250 à 333 kg par mètre cube sont courants ; en lot, on raisonne souvent en mètres de plancher ou en places palettes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un poids taxable et comparer deux offres. Envoi : 3 palettes de 1,20 × 0,80 × 1,60 m, poids réel total 540 kg. Conditions du messager A : 1 m³ = 250 kg, tarif pour la zone de destination 21 € les 100 kg taxables. Étape 1 : volume = 3 × (1,20 × 0,80 × 1,60) = 3 × 1,536 = 4,608 m³. Étape 2 : poids volumétrique = 4,608 × 250 = 1 152 kg. Étape 3 : poids taxable = le plus grand de 540 et 1 152, soit 1 152 kg. Étape 4 : prix A = 11,52 × 21 = 241,92 € hors taxes, avant éventuelles taxes et surcharges (gazole, rendez-vous, hayon). Offre B : prix forfaitaire par palette, 78 € la palette, soit 234 €. L'offre B est moins chère, à condition que délais, fiabilité et services soient équivalents.</div>\n<p>Le prix final comprend souvent des éléments variables : <strong>indexation gazole</strong> (le prix suit l'évolution du coût du carburant), frais de prise de rendez-vous, livraison avec hayon, livraison en zone difficile, assurance « ad valorem ». Comparer des offres impose de comparer le prix total, sur les mêmes services.</p>\n"
      },
      {
       "titre": "Choisir un transporteur",
       "contenu": "\n<p>Le choix d'un transporteur ne se limite pas au prix. Les critères couramment utilisés dans une grille de sélection sont :</p>\n<ul>\n<li>le <strong>coût</strong> total pour les envois types ;</li>\n<li>le <strong>délai</strong> et la <strong>fiabilité</strong> mesurée (taux de livraison dans les délais) ;</li>\n<li>la <strong>couverture géographique</strong> et les services (hayon, rendez-vous, température dirigée, matières dangereuses) ;</li>\n<li>la <strong>qualité de l'information</strong> : suivi en ligne, preuves de livraison numériques, échanges EDI ;</li>\n<li>le <strong>taux de litiges</strong> et la rapidité de leur traitement ;</li>\n<li>la <strong>performance environnementale</strong> : flotte, information sur les émissions, engagements.</li>\n</ul>\n<p>On construit alors une <strong>grille multicritère</strong> : chaque critère reçoit un coefficient d'importance, chaque transporteur reçoit une note par critère, et l'on compare les totaux pondérés.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> grille multicritère. Critères et coefficients : prix 4, fiabilité 3, services 2, environnement 1. Transporteur X : notes sur 5 de 4, 3, 4, 2, total = 4 × 4 + 3 × 3 + 2 × 4 + 1 × 2 = 16 + 9 + 8 + 2 = 35. Transporteur Y : notes 3, 5, 3, 4, total = 12 + 15 + 6 + 4 = 37. Y l'emporte malgré un prix moins favorable, grâce à sa fiabilité. Le choix des coefficients doit être justifié par les exigences des clients.</div>\n"
      },
      {
       "titre": "Le contrat de transport et ses acteurs",
       "contenu": "\n<p>Le <strong>contrat de transport</strong> est la convention par laquelle un transporteur s'engage, contre un prix, à déplacer une marchandise d'un lieu à un autre et à la remettre au destinataire. Trois parties y sont liées :</p>\n<ul>\n<li>l'<strong>expéditeur</strong> (ou chargeur), qui remet la marchandise ;</li>\n<li>le <strong>transporteur</strong> (ou voiturier), qui la déplace ;</li>\n<li>le <strong>destinataire</strong>, qui la reçoit.</li>\n</ul>\n<p>Le contrat est matérialisé par la <strong>lettre de voiture</strong>, document de transport qui accompagne la marchandise. En France, lorsque les parties n'ont pas signé de contrat écrit spécifique, ce sont des <strong>contrats types</strong> fixés par voie réglementaire qui s'appliquent ; le contrat type « général » s'applique aux envois routiers de marchandises ordinaires, et d'autres contrats types existent pour certaines activités (température dirigée, matières dangereuses, citernes, véhicules).</p>\n<p>Chaque partie a des obligations. L'<strong>expéditeur</strong> doit fournir des informations exactes (nature, poids, nombre de colis, adresse), remettre une marchandise correctement emballée et étiquetée, et, selon le contrat type et le poids de l'envoi, assurer le chargement, le calage et l'arrimage. Le <strong>transporteur</strong> doit acheminer dans les délais convenus et remettre la marchandise en bon état ; il vérifie l'arrimage du point de vue de la sécurité routière. Le <strong>destinataire</strong> doit prendre livraison, vérifier et formuler les réserves.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lorsqu'un entrepôt passe par un <strong>commissionnaire de transport</strong>, celui-ci organise l'acheminement et choisit lui-même les transporteurs. Il est responsable de son propre fait et garant du fait des transporteurs qu'il a choisis. L'expéditeur n'a alors qu'un interlocuteur, mais un coût un peu plus élevé.</div>\n"
      },
      {
       "titre": "La responsabilité du transporteur",
       "contenu": "\n<p>Le transporteur est tenu d'une <strong>obligation de résultat</strong> : il est présumé responsable des pertes, avaries et retards survenus entre la prise en charge et la livraison. Il ne peut s'exonérer qu'en prouvant une cause prévue par la loi, par exemple un vice propre de la marchandise, une faute de l'expéditeur (emballage insuffisant, déclaration inexacte) ou un cas de force majeure.</p>\n<p>En revanche, son indemnisation est <strong>plafonnée</strong> par les contrats types ou les conventions internationales, en fonction du poids de la marchandise et de la nature de l'envoi. Pour une marchandise de valeur, le plafond peut être très inférieur à la valeur réelle. L'expéditeur peut alors souscrire une <strong>déclaration de valeur</strong> ou une <strong>assurance ad valorem</strong>, contre un supplément de prix.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sans réserves précises à la livraison (ou sans protestation motivée dans le délai légal pour un dommage non apparent), la présomption de responsabilité du transporteur est très difficile à invoquer. Le travail du réceptionnaire au quai conditionne directement la possibilité d'être indemnisé.</div>\n"
      },
      {
       "titre": "Les Incoterms : qui paie et qui supporte le risque",
       "contenu": "\n<p>Dans une vente, notamment internationale, l'expédition est organisée par le vendeur ou par l'acheteur selon ce que prévoit le contrat de vente. Les <strong>Incoterms</strong> (règles publiées par la Chambre de commerce internationale, version en vigueur dite Incoterms 2020) fixent en trois lettres le partage des frais, des risques et des formalités entre vendeur et acheteur.</p>\n<table>\n<thead><tr><th>Incoterm</th><th>Signification</th><th>Transfert des risques</th></tr></thead>\n<tbody>\n<tr><td>EXW (à l'usine)</td><td>L'acheteur organise et paie tout depuis le site du vendeur</td><td>À la mise à disposition chez le vendeur</td></tr>\n<tr><td>FCA (franco transporteur)</td><td>Le vendeur remet la marchandise au transporteur choisi par l'acheteur</td><td>À la remise au premier transporteur</td></tr>\n<tr><td>CPT (port payé jusqu'à)</td><td>Le vendeur paie le transport jusqu'au lieu convenu</td><td>À la remise au premier transporteur</td></tr>\n<tr><td>DAP (rendu au lieu de destination)</td><td>Le vendeur livre au lieu convenu, non déchargé</td><td>À destination</td></tr>\n<tr><td>DDP (rendu droits acquittés)</td><td>Le vendeur supporte tout, y compris les droits à l'importation</td><td>À destination</td></tr>\n</tbody>\n</table>\n<p>Pour l'agent logistique, l'Incoterm indique concrètement qui commande le transport, à qui facturer, et qui doit déclarer un dommage auprès de l'assureur. Il figure sur la commande, la facture et souvent sur les documents de transport. Les Incoterms maritimes (FOB, CIF, etc.) suivent la même logique pour les ports.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'Incoterm règle la relation entre vendeur et acheteur ; le contrat de transport règle la relation avec le transporteur. Ce sont deux contrats différents.</div>\n"
      }
     ],
     "points_cles": [
      "Colis, messagerie, lot partiel et lot complet se distinguent par la taille de l'envoi et le nombre de ruptures de charge.",
      "Poids taxable = le plus grand du poids réel et du poids volumétrique (volume × rapport de conversion du transporteur).",
      "Comparer des cotations impose de comparer le prix total pour les mêmes services.",
      "Une grille multicritère pondérée objective le choix d'un transporteur.",
      "Le contrat de transport lie expéditeur, transporteur et destinataire ; à défaut de contrat écrit, un contrat type s'applique.",
      "Le transporteur est présumé responsable, mais son indemnisation est plafonnée.",
      "Déclaration de valeur ou assurance ad valorem protègent les marchandises de valeur.",
      "L'Incoterm fixe entre vendeur et acheteur le partage des frais, des risques et des formalités."
     ],
     "lexique": [
      {
       "terme": "Messagerie",
       "def": "Transport d'envois de petite taille regroupés en agence, acheminés de nuit et livrés par tournée."
      },
      {
       "terme": "Lot complet",
       "def": "Envoi qui occupe un véhicule entier et va directement de l'expéditeur au destinataire."
      },
      {
       "terme": "Rupture de charge",
       "def": "Transbordement d'une marchandise d'un véhicule à un autre au cours de son acheminement."
      },
      {
       "terme": "Poids taxable",
       "def": "Poids retenu pour la facturation : le plus grand entre poids réel et poids volumétrique."
      },
      {
       "terme": "Contrat type",
       "def": "Contrat fixé par la réglementation qui s'applique à défaut de contrat écrit entre les parties."
      },
      {
       "terme": "Commissionnaire de transport",
       "def": "Organisateur de transport qui choisit les transporteurs et répond de leur fait."
      },
      {
       "terme": "Assurance ad valorem",
       "def": "Assurance complémentaire couvrant la valeur réelle déclarée de la marchandise."
      },
      {
       "terme": "Incoterm",
       "def": "Règle internationale en trois lettres qui répartit frais, risques et formalités entre vendeur et acheteur."
      },
      {
       "terme": "Indexation gazole",
       "def": "Clause qui fait varier le prix du transport selon l'évolution du coût du carburant."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Contribuer de façon responsable à l'efficacité logistique",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "blog-produits-flux",
     "titre": "Adapter le processus logistique aux produits et aux flux",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les contraintes logistiques liées à la nature d'un produit (dangereux, sous température dirigée, alimentaire, de santé, de valeur).",
      "Appliquer les principes de base de la réglementation du transport et du stockage des marchandises dangereuses.",
      "Organiser le respect de la chaîne du froid de la réception à l'expédition.",
      "Adapter l'organisation à un type de flux : cross-docking, e-commerce, saisonnalité.",
      "Justifier une adaptation du processus à partir des caractéristiques d'un produit ou d'un flux."
     ],
     "sections": [
      {
       "titre": "Des produits qui imposent leurs règles",
       "contenu": "\n<p>Les opérations logistiques étudiées jusqu'ici (réception, stockage, préparation, expédition) suivent une trame commune. Mais certains produits imposent des contraintes qui modifient chaque étape : où les stocker, comment les manipuler, avec qui les transporter, quels documents produire. Le logisticien doit savoir repérer ces contraintes dans la fiche article, sur l'emballage et dans les documents du fournisseur.</p>\n<table>\n<thead><tr><th>Famille de produits</th><th>Contrainte principale</th><th>Conséquences logistiques</th></tr></thead>\n<tbody>\n<tr><td>Marchandises dangereuses</td><td>Risque pour les personnes et l'environnement</td><td>Zones dédiées, incompatibilités, étiquetage, documents, formation</td></tr>\n<tr><td>Produits sous température dirigée</td><td>Maintien d'une plage de température</td><td>Chambres froides, contrôles, enregistrements, véhicules équipés</td></tr>\n<tr><td>Denrées alimentaires</td><td>Hygiène, dates, traçabilité</td><td>FEFO, nettoyage, séparation des produits non alimentaires</td></tr>\n<tr><td>Produits de santé</td><td>Sécurité du patient, contrefaçon</td><td>Bonnes pratiques de distribution, sérialisation, contrôles renforcés</td></tr>\n<tr><td>Produits de valeur</td><td>Vol, démarque</td><td>Zones sécurisées, accès restreints, contrôles, scellés</td></tr>\n<tr><td>Produits hors normes</td><td>Longs, lourds, volumineux</td><td>Stockage cantilever ou au sol, engins adaptés, transport spécial</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Les marchandises dangereuses",
       "contenu": "\n<p>Une <strong>marchandise dangereuse</strong> est une matière ou un objet qui présente un risque (explosion, incendie, toxicité, corrosion, pollution) lors de son transport ou de son stockage. Pour le transport routier, la réglementation applicable est l'<strong>ADR</strong> (accord européen relatif au transport international des marchandises dangereuses par route), appliqué aussi aux transports nationaux en France. Il classe les marchandises en <strong>9 classes</strong> :</p>\n<table>\n<thead><tr><th>Classe</th><th>Nature</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Matières et objets explosibles</td><td>Feux d'artifice, munitions</td></tr>\n<tr><td>2</td><td>Gaz</td><td>Aérosols, bouteilles de gaz</td></tr>\n<tr><td>3</td><td>Liquides inflammables</td><td>Carburants, peintures, solvants, alcools</td></tr>\n<tr><td>4.1, 4.2, 4.3</td><td>Solides inflammables, matières sujettes à l'inflammation spontanée, matières qui dégagent des gaz inflammables au contact de l'eau</td><td>Allumettes, certains métaux en poudre</td></tr>\n<tr><td>5.1, 5.2</td><td>Matières comburantes, peroxydes organiques</td><td>Certains engrais, produits de piscine</td></tr>\n<tr><td>6.1, 6.2</td><td>Matières toxiques, matières infectieuses</td><td>Pesticides, échantillons biologiques</td></tr>\n<tr><td>7</td><td>Matières radioactives</td><td>Sources médicales</td></tr>\n<tr><td>8</td><td>Matières corrosives</td><td>Acides, soude, batteries au plomb</td></tr>\n<tr><td>9</td><td>Matières et objets dangereux divers</td><td>Piles et batteries au lithium, matières dangereuses pour l'environnement</td></tr>\n</tbody>\n</table>\n<p>Chaque matière est identifiée par un <strong>numéro ONU</strong> à quatre chiffres (par exemple UN 1263 pour les peintures). Les colis portent ce numéro et une ou plusieurs <strong>étiquettes de danger</strong> en forme de losange ; les véhicules portent des <strong>panneaux orange</strong> lorsque les quantités l'exigent. Le transport s'accompagne d'un <strong>document de transport</strong> mentionnant notamment le numéro ONU, la désignation officielle, la classe, le groupe d'emballage et la quantité. Les entreprises concernées désignent un <strong>conseiller à la sécurité</strong>, et le personnel qui intervient reçoit une formation adaptée à ses fonctions.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'étiquetage pour le transport (losanges ADR) et l'étiquetage pour l'utilisation des produits (pictogrammes de danger du règlement CLP, losanges à bordure rouge sur fond blanc) sont deux systèmes différents qui coexistent. Un même bidon peut porter les deux. La fiche de données de sécurité (FDS) du fournisseur donne toutes les informations de référence.</div>\n<p>Il existe des régimes allégés, notamment pour les marchandises emballées en <strong>quantités limitées</strong> (petits emballages, marquage spécifique en losange noir et blanc) : de nombreux produits de grande consommation (aérosols, parfums, peintures en petits pots) sont expédiés sous ce régime. Leur application exacte relève du conseiller à la sécurité.</p>\n"
      },
      {
       "titre": "Stocker des marchandises dangereuses",
       "contenu": "\n<p>En entrepôt, les produits dangereux sont stockés dans des <strong>zones dédiées</strong>, prévues par l'arrêté préfectoral de l'installation ou par les règles ICPE. Les principes sont les suivants :</p>\n<ul>\n<li>respecter les <strong>incompatibilités</strong> : on ne stocke pas ensemble des comburants et des inflammables, des acides et des bases, des produits qui réagissent avec l'eau à côté de liquides aqueux ;</li>\n<li>disposer de <strong>rétentions</strong> (bacs ou zones capables de recueillir les fuites) dimensionnées selon la réglementation ;</li>\n<li>limiter les quantités par zone et la hauteur de stockage ;</li>\n<li>disposer de moyens d'intervention adaptés (absorbants, extincteurs spécifiques, douche de sécurité pour les corrosifs) ;</li>\n<li>tenir à disposition les FDS et l'état des stocks par classe de danger, pour les secours.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier une compatibilité de stockage. Un préparateur doit ranger une palette de bidons d'acide chlorhydrique (classe 8) dans une cellule où se trouvent déjà des fûts de soude (classe 8, mais base) et des peintures (classe 3). Étape 1 : lire la section 7 de la FDS de l'acide (manipulation et stockage) : elle mentionne l'éloignement des bases et des métaux. Étape 2 : lire la section 10 (stabilité et réactivité) : réaction dangereuse avec les bases. Étape 3 : conclure : même classe ADR ne signifie pas compatibilité ; l'acide doit être stocké séparément de la soude, sur une rétention distincte. Étape 4 : signaler la consigne au chef d'équipe et vérifier la matrice de compatibilité du site.</div>\n"
      },
      {
       "titre": "La chaîne du froid",
       "contenu": "\n<p>Les <strong>produits sous température dirigée</strong> doivent rester dans une plage de température donnée de la production à la consommation. On distingue habituellement :</p>\n<ul>\n<li>le <strong>froid positif</strong> : produits frais, souvent entre 0 et +4 °C (viandes, produits laitiers) ou dans d'autres plages fixées par le fabricant ;</li>\n<li>le <strong>froid négatif</strong> : produits surgelés et glaces, à −18 °C ou moins ;</li>\n<li>la <strong>température contrôlée</strong> : produits qui ne doivent ni geler ni chauffer, par exemple +15 à +25 °C pour certains médicaments, ou +2 à +8 °C pour d'autres.</li>\n</ul>\n<p>Respecter la chaîne du froid, c'est : contrôler et enregistrer la température à réception (sonde à cœur ou relevé de l'enregistreur du véhicule), limiter le temps passé hors froid au quai, utiliser des quais équipés de sas, stocker dans des chambres dont la température est enregistrée en continu, préparer dans des zones réfrigérées, expédier dans des véhicules isothermes ou frigorifiques conformes (attestation ATP pour les engins de transport sous température dirigée).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en entrepôt frigorifique, le personnel porte des équipements de protection contre le froid, et les temps de travail en chambre négative sont organisés avec des pauses en zone tempérée. Chaque porte laissée ouverte fait monter la température et consomme de l'énergie : des rideaux à lanières et des portes rapides limitent ces pertes.</div>\n"
      },
      {
       "titre": "Denrées alimentaires et produits de santé",
       "contenu": "\n<p>Pour les <strong>denrées alimentaires</strong>, la logistique applique les règles d'hygiène (nettoyage, lutte contre les nuisibles, séparation des produits non alimentaires) et une gestion stricte des dates. Deux dates figurent sur les emballages : la <strong>date limite de consommation</strong> (DLC), formulée « à consommer jusqu'au », impérative pour les produits périssables, et la <strong>date de durabilité minimale</strong> (DDM), formulée « à consommer de préférence avant », indicative de la qualité. La règle de sortie est le <strong>FEFO</strong> (premier expiré, premier sorti).</p>\n<p>Les <strong>produits de santé</strong> (médicaments, dispositifs médicaux) relèvent de bonnes pratiques de distribution spécifiques : locaux qualifiés, températures contrôlées et enregistrées, traçabilité par lot, procédures de rappel, personnel formé, et, pour les médicaments soumis à prescription, dispositifs d'identification unique de chaque boîte destinés à lutter contre la contrefaçon.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un produit dépassant sa DLC ne peut plus être vendu ni donné ; un produit ayant dépassé sa DDM peut encore être commercialisé ou donné dans les conditions prévues par la réglementation. La différence change complètement la destination des stocks en fin de vie.</div>\n"
      },
      {
       "titre": "Adapter l'organisation au type de flux",
       "contenu": "\n<p>La nature des <strong>flux</strong> modifie aussi le processus.</p>\n<ul>\n<li><strong>Cross-docking</strong> : les marchandises sont triées à la réception et dirigées directement vers les quais d'expédition. Il faut des avis d'expédition fiables, une étiquette identifiant la destination finale et un pilotage précis des horaires d'arrivée et de départ.</li>\n<li><strong>E-commerce</strong> : très nombreuses petites commandes, au détail, avec des cut-off tardifs et des pics (soldes, fêtes) ; la préparation groupée, l'automatisation et la gestion des retours deviennent centrales.</li>\n<li><strong>Distribution aux magasins</strong> : commandes régulières par colis complets ou palettes, livraisons programmées, préparation par tournée.</li>\n<li><strong>Flux saisonniers</strong> : jouets, jardin, rentrée scolaire ; il faut anticiper le stockage avant la saison, recruter et former du personnel temporaire, adapter les implantations.</li>\n<li><strong>Flux industriels</strong> : synchronisation avec la production, kanban, séquencement.</li>\n</ul>\n<p>Un même site peut traiter plusieurs flux. Chacun a alors ses propres zones, ses horaires et parfois ses équipes, pour éviter qu'un pic sur un flux ne désorganise les autres.</p>\n"
      }
     ],
     "points_cles": [
      "La nature du produit modifie chaque étape du processus : stockage, manutention, transport, documents.",
      "L'ADR classe les marchandises dangereuses en 9 classes ; chaque matière a un numéro ONU à quatre chiffres.",
      "Étiquettes ADR (transport) et pictogrammes CLP (utilisation) sont deux systèmes distincts.",
      "Même classe ADR ne signifie pas compatibilité de stockage : la FDS (sections 7 et 10) fait foi.",
      "La chaîne du froid impose des contrôles et enregistrements de température à chaque étape.",
      "DLC impérative, DDM indicative ; les denrées sortent en FEFO.",
      "Les produits de santé suivent des bonnes pratiques de distribution et une traçabilité par lot.",
      "Cross-docking, e-commerce, distribution magasins, saisonnalité et flux industriels demandent des organisations distinctes."
     ],
     "lexique": [
      {
       "terme": "ADR",
       "def": "Accord européen relatif au transport international des marchandises dangereuses par route, appliqué aussi en national en France."
      },
      {
       "terme": "Numéro ONU",
       "def": "Numéro à quatre chiffres identifiant une matière dangereuse pour le transport."
      },
      {
       "terme": "Conseiller à la sécurité",
       "def": "Personne qualifiée désignée par une entreprise qui expédie, charge ou transporte des marchandises dangereuses."
      },
      {
       "terme": "Rétention",
       "def": "Bac ou zone étanche capable de recueillir les fuites de liquides dangereux."
      },
      {
       "terme": "Froid négatif",
       "def": "Conservation à −18 °C ou moins, pour les produits surgelés."
      },
      {
       "terme": "Attestation ATP",
       "def": "Attestation de conformité des engins de transport de denrées sous température dirigée."
      },
      {
       "terme": "DLC",
       "def": "Date limite de consommation, impérative, pour les denrées périssables."
      },
      {
       "terme": "DDM",
       "def": "Date de durabilité minimale, indicative de la qualité optimale du produit."
      },
      {
       "terme": "FEFO",
       "def": "Règle « premier expiré, premier sorti » : on prélève d'abord le lot dont la date est la plus proche."
      }
     ]
    },
    {
     "id": "blog-tracabilite",
     "titre": "Mettre en œuvre la traçabilité dans la chaîne logistique",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Définir la traçabilité ascendante et descendante et ses enjeux réglementaires.",
      "Identifier les unités logistiques et les codes associés (GTIN, numéro de lot, SSCC).",
      "Lire une étiquette logistique GS1 et ses identifiants de données.",
      "Calculer et vérifier une clé de contrôle d'un code EAN-13.",
      "Organiser un rappel ou un retrait de lot à partir des enregistrements de traçabilité."
     ],
     "sections": [
      {
       "titre": "Tracer et suivre : définitions",
       "contenu": "\n<p>La <strong>traçabilité</strong> est la capacité à retrouver l'historique, l'utilisation ou la localisation d'un produit grâce à des identifications enregistrées. On distingue :</p>\n<ul>\n<li>la <strong>traçabilité ascendante</strong> (ou traçage amont) : à partir d'un produit livré, retrouver son origine, ses composants, ses lots de fabrication, ses fournisseurs ;</li>\n<li>la <strong>traçabilité descendante</strong> (ou suivi aval) : à partir d'un lot, retrouver tous les clients qui en ont reçu une partie.</li>\n</ul>\n<p>On distingue aussi le <strong>suivi</strong> (tracking) : savoir où se trouve un colis à un instant donné, ce que permettent les numéros de suivi des transporteurs.</p>\n<p>La traçabilité est obligatoire dans de nombreux secteurs. Pour les denrées alimentaires, le règlement européen (CE) n° 178/2002 impose à chaque exploitant d'être capable d'identifier son fournisseur direct et son client direct (principe « un pas en amont, un pas en aval »). Les produits de santé, les jouets, les pièces aéronautiques ou automobiles ont aussi leurs exigences. Au-delà de l'obligation, la traçabilité permet de limiter l'ampleur d'un rappel, de prouver l'origine d'un produit et de traiter les litiges.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la traçabilité ne fonctionne que si l'information est enregistrée à chaque étape : un maillon qui ne saisit pas les numéros de lot à la réception ou à l'expédition casse toute la chaîne.</div>\n"
      },
      {
       "titre": "Les unités et leurs identifiants",
       "contenu": "\n<p>La logistique manipule des unités emboîtées : l'<strong>unité consommateur</strong> (le produit vendu en magasin), l'<strong>unité commerciale</strong> ou colis (le carton qui regroupe plusieurs unités) et l'<strong>unité logistique</strong> (la palette ou le colis tel qu'il est expédié). Chaque niveau a son identifiant. Le système le plus répandu est celui de l'organisation <strong>GS1</strong> :</p>\n<table>\n<thead><tr><th>Identifiant</th><th>Ce qu'il identifie</th><th>Format</th></tr></thead>\n<tbody>\n<tr><td>GTIN-13 (code EAN-13)</td><td>Un article ou une unité commerciale (même référence = même GTIN)</td><td>13 chiffres, dont une clé de contrôle</td></tr>\n<tr><td>Numéro de lot</td><td>Un ensemble d'unités fabriquées dans les mêmes conditions</td><td>Alphanumérique, défini par le fabricant</td></tr>\n<tr><td>Numéro de série</td><td>Un exemplaire unique</td><td>Alphanumérique</td></tr>\n<tr><td>SSCC</td><td>Une unité logistique unique (une palette précise)</td><td>18 chiffres, dont une clé de contrôle</td></tr>\n<tr><td>GLN</td><td>Un lieu ou une entité (entrepôt, quai, magasin)</td><td>13 chiffres</td></tr>\n</tbody>\n</table>\n<p>Le GTIN dit <strong>quoi</strong> (quelle référence), le lot dit <strong>quelle production</strong>, le SSCC dit <strong>quelle palette</strong>. Deux palettes identiques de la même référence et du même lot ont donc le même GTIN, le même lot, mais deux SSCC différents.</p>\n"
      },
      {
       "titre": "La clé de contrôle",
       "contenu": "\n<p>Le dernier chiffre d'un code GTIN ou SSCC est une <strong>clé de contrôle</strong> calculée à partir des autres chiffres. Elle permet au lecteur ou au logiciel de détecter une erreur de lecture ou de saisie.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la clé d'un EAN-13 dont les 12 premiers chiffres sont 3 7 6 0 1 2 3 4 5 6 7 8. Étape 1 : en partant de la gauche, multiplier les chiffres de rang impair par 1 et ceux de rang pair par 3 : 3×1, 7×3, 6×1, 0×3, 1×1, 2×3, 3×1, 4×3, 5×1, 6×3, 7×1, 8×3. Étape 2 : additionner : 3 + 21 + 6 + 0 + 1 + 6 + 3 + 12 + 5 + 18 + 7 + 24 = 106. Étape 3 : chercher le multiple de 10 supérieur ou égal : 110. Étape 4 : clé = 110 − 106 = 4. Le code complet est 3760123456784. Pour vérifier un code saisi, on refait le calcul : si la clé obtenue diffère du dernier chiffre, le code est faux. (Pour un SSCC, la même règle s'applique en partant de la droite : le chiffre situé juste avant la clé est multiplié par 3, le suivant vers la gauche par 1, et ainsi de suite.)</div>\n<p>Les trois premiers chiffres d'un GTIN-13 forment un préfixe attribué par GS1 à l'organisation nationale qui a délivré le code (les préfixes 300 à 379 sont attribués à GS1 France). Ce préfixe n'indique pas le pays de fabrication du produit.</p>\n"
      },
      {
       "titre": "Lire une étiquette logistique",
       "contenu": "\n<p>L'<strong>étiquette logistique GS1</strong> est apposée sur chaque palette ou colis expédié. Elle comporte une partie lisible par l'homme et des codes-barres <strong>GS1-128</strong>. Chaque donnée codée est précédée d'un <strong>identifiant de données</strong> (en anglais application identifier, AI), écrit entre parenthèses dans la partie lisible :</p>\n<table>\n<thead><tr><th>AI</th><th>Donnée</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>(00)</td><td>SSCC de l'unité logistique</td><td>(00) 3 3760123 000000457 3</td></tr>\n<tr><td>(01)</td><td>GTIN de l'unité commerciale si la palette est homogène</td><td>(01) 03760123456784 (14 chiffres, complété par un zéro à gauche)</td></tr>\n<tr><td>(02)</td><td>GTIN des unités contenues dans l'unité logistique</td><td>(02) 13760123456781</td></tr>\n<tr><td>(10)</td><td>Numéro de lot</td><td>(10) L2604B</td></tr>\n<tr><td>(15)</td><td>Date de durabilité minimale (AAMMJJ)</td><td>(15) 270331</td></tr>\n<tr><td>(17)</td><td>Date limite d'utilisation ou de consommation (AAMMJJ)</td><td>(17) 261215</td></tr>\n<tr><td>(37)</td><td>Nombre d'unités commerciales contenues</td><td>(37) 48</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les dates sont codées au format AAMMJJ (année, mois, jour). (17) 261215 signifie le 15 décembre 2026, et non le 26 décembre 2015. Une erreur de lecture sur ce point peut faire expédier un lot périmé ou bloquer un lot conforme.</div>\n<p>À la réception, le scan de l'étiquette alimente directement le WMS : SSCC, référence, lot, date et quantité sont enregistrés sans saisie manuelle, ce qui fiabilise la traçabilité.</p>\n"
      },
      {
       "titre": "Les technologies d'identification",
       "contenu": "\n<p>Le code-barres linéaire (EAN-13, GS1-128) reste majoritaire. D'autres technologies se développent :</p>\n<ul>\n<li>les <strong>codes bidimensionnels</strong> (GS1 DataMatrix, QR code GS1) contiennent plus d'informations dans un petit espace ; ils sont utilisés sur les médicaments et de plus en plus sur les produits de grande consommation ;</li>\n<li>la <strong>RFID</strong> (identification par radiofréquence) utilise une étiquette électronique lue à distance sans contact visuel ; un portique peut lire en un instant toutes les étiquettes d'une palette, ce qui accélère réception et inventaire, mais l'étiquette coûte plus cher qu'un code imprimé et la lecture peut être perturbée par les métaux et les liquides ;</li>\n<li>la <strong>géolocalisation</strong> des véhicules et de certains contenants permet de suivre leur position et parfois leur température en temps réel.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans l'habillement, de nombreuses enseignes étiquettent chaque article en RFID. En entrepôt, un carton de 40 articles passe sous un portique et le système vérifie en une seconde que les 40 bons articles sont présents. En magasin, l'inventaire d'un rayon se fait avec un lecteur portable en quelques minutes.</div>\n"
      },
      {
       "titre": "Organiser un retrait ou un rappel de lot",
       "contenu": "\n<p>Quand un produit présente un risque ou une non-conformité, le fabricant ou le distributeur décide un <strong>retrait</strong> (le produit est retiré de la chaîne de distribution avant d'atteindre le consommateur) ou un <strong>rappel</strong> (le consommateur qui l'a acheté est invité à le rapporter ou à ne pas l'utiliser). Pour les produits alimentaires et non alimentaires vendus aux consommateurs, les rappels sont publiés sur le site public national Rappel Conso.</p>\n<p>Le rôle de la logistique est de localiser très vite toutes les unités concernées :</p>\n<ol>\n<li>bloquer immédiatement le lot dans le WMS (statut bloqué) pour interdire toute nouvelle préparation ;</li>\n<li>localiser le stock restant (emplacements, quais, zones de préparation) et l'isoler en quarantaine ;</li>\n<li>extraire de l'historique des expéditions la liste des clients qui ont reçu le lot, avec dates et quantités ;</li>\n<li>transmettre cette liste au donneur d'ordre, qui informe les clients ;</li>\n<li>organiser le retour des produits et tenir le compte des quantités récupérées par rapport aux quantités expédiées.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> faire le bilan d'un retrait. Lot L2604B : 2 400 unités reçues. Stock restant bloqué : 380 unités. Historique des expéditions : 2 020 unités vers 14 magasins. Contrôle de cohérence : 380 + 2 020 = 2 400, aucune unité n'est perdue de vue. Après une semaine, les magasins ont retourné 1 750 unités ; ventes déjà réalisées déclarées par les magasins : 240 unités. Reste à retrouver : 2 020 − 1 750 − 240 = 30 unités, à rechercher en priorité auprès des magasins concernés.</div>\n"
      }
     ],
     "points_cles": [
      "La traçabilité ascendante remonte vers l'origine ; la traçabilité descendante retrouve les clients d'un lot.",
      "En alimentaire, chaque exploitant doit connaître son fournisseur direct et son client direct.",
      "Le GTIN identifie une référence, le lot une production, le SSCC une palette unique.",
      "La clé de contrôle se calcule en pondérant les chiffres par 1 et 3 puis en complétant au multiple de 10.",
      "Sur l'étiquette GS1-128, les identifiants de données (00), (01), (02), (10), (15), (17), (37) précèdent chaque donnée.",
      "Les dates sont codées AAMMJJ.",
      "La RFID permet une lecture à distance et simultanée de nombreuses étiquettes.",
      "En cas de rappel : bloquer, localiser, extraire l'historique, informer, récupérer et rapprocher les quantités."
     ],
     "lexique": [
      {
       "terme": "Traçabilité ascendante",
       "def": "Capacité à retrouver l'origine d'un produit, ses composants et ses fournisseurs."
      },
      {
       "terme": "Traçabilité descendante",
       "def": "Capacité à retrouver tous les destinataires d'un lot donné."
      },
      {
       "terme": "GTIN",
       "def": "Numéro international d'article commercial attribué selon les standards GS1, codé en EAN-13 sur les produits."
      },
      {
       "terme": "Lot",
       "def": "Ensemble d'unités produites dans des conditions identiques, identifié par un même numéro."
      },
      {
       "terme": "SSCC",
       "def": "Code séquentiel de colis à 18 chiffres qui identifie de façon unique une unité logistique."
      },
      {
       "terme": "Identifiant de données (AI)",
       "def": "Préfixe numérique entre parenthèses qui indique la nature de la donnée qui suit dans un code GS1-128."
      },
      {
       "terme": "Clé de contrôle",
       "def": "Dernier chiffre d'un code, calculé à partir des autres, qui permet de détecter une erreur de lecture ou de saisie."
      },
      {
       "terme": "RFID",
       "def": "Identification par radiofréquence au moyen d'étiquettes électroniques lisibles à distance."
      },
      {
       "terme": "Rappel",
       "def": "Opération qui demande aux consommateurs de rapporter ou de ne pas utiliser un produit déjà vendu."
      }
     ]
    },
    {
     "id": "blog-performance-amelioration",
     "titre": "Mesurer la performance et conduire l'amélioration continue",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Construire et commenter un tableau de bord logistique à partir d'indicateurs de qualité, de délai, de coût et de productivité.",
      "Calculer des coûts logistiques simples (coût d'une opération, coût par unité).",
      "Identifier les gaspillages d'un processus logistique selon la démarche lean.",
      "Utiliser les outils de résolution de problème : QQOQCP, Pareto, diagramme d'Ishikawa, 5 pourquoi, PDCA.",
      "Proposer une amélioration argumentée et prévoir sa mesure."
     ],
     "sections": [
      {
       "titre": "Les familles d'indicateurs",
       "contenu": "\n<p>Un service logistique pilote son activité avec un ensemble d'indicateurs répartis en quatre familles, souvent résumées par les mots qualité, coût, délai, productivité :</p>\n<table>\n<thead><tr><th>Famille</th><th>Exemples d'indicateurs</th><th>Formule type</th></tr></thead>\n<tbody>\n<tr><td>Qualité</td><td>Taux d'erreur de préparation, taux de litiges, fiabilité du stock</td><td>Nombre d'erreurs / nombre de lignes × 100</td></tr>\n<tr><td>Délai</td><td>Taux de service, OTIF, dock-to-stock, respect du cut-off</td><td>Commandes à l'heure et complètes / commandes × 100</td></tr>\n<tr><td>Coût</td><td>Coût par colis, coût par palette stockée, coût de transport par kilo</td><td>Coûts de la période / unités traitées</td></tr>\n<tr><td>Productivité</td><td>Lignes par heure, palettes déchargées par heure</td><td>Quantité traitée / heures productives</td></tr>\n</tbody>\n</table>\n<p>On y ajoute de plus en plus des indicateurs de <strong>sécurité</strong> (taux de fréquence des accidents, jours sans accident, nombre de presqu'accidents déclarés) et d'<strong>environnement</strong> (consommation d'énergie, émissions, tonnage de déchets triés).</p>\n<p>Un <strong>tableau de bord</strong> rassemble quelques indicateurs choisis (rarement plus d'une dizaine), présentés avec leur valeur, leur objectif, leur tendance et un code couleur. Il sert à décider : un indicateur qui ne déclenche jamais d'action n'a pas sa place dans le tableau de bord.</p>\n"
      },
      {
       "titre": "Calculer un coût logistique",
       "contenu": "\n<p>Le coût d'une activité logistique regroupe des charges de personnel, de bâtiment, d'équipements, de consommables, de transport et de systèmes d'information. Pour piloter, on ramène ces charges à une <strong>unité d'œuvre</strong> : le colis préparé, la palette reçue, la palette stockée par mois, la ligne préparée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un coût de préparation par colis. Données du mois : 6 préparateurs à 151,67 h payées chacun, coût horaire chargé 24 € ; location et énergie des engins de préparation : 1 800 € ; consommables (cartons, adhésif, étiquettes) : 3 250 € ; part des frais du site affectée à la préparation : 4 500 €. Colis préparés : 26 000. Étape 1 : coût du personnel = 6 × 151,67 × 24 ≈ 21 840 €. Étape 2 : coût total = 21 840 + 1 800 + 3 250 + 4 500 = 31 390 €. Étape 3 : coût par colis = 31 390 / 26 000 ≈ 1,21 €. Étape 4 : interpréter : le personnel représente 21 840 / 31 390 ≈ 70 % du coût ; le principal levier est donc la productivité, pas les consommables.</div>\n<p>Comparer le coût par unité d'un mois à l'autre, ou par rapport au prix facturé au client par un prestataire, permet de savoir si l'activité est rentable et de repérer les dérives.</p>\n"
      },
      {
       "titre": "La démarche lean et les gaspillages",
       "contenu": "\n<p>La démarche <strong>lean</strong>, issue de l'industrie automobile japonaise, cherche à éliminer tout ce qui n'apporte pas de valeur au client. Elle distingue les opérations à <strong>valeur ajoutée</strong> (ce pour quoi le client paie : préparer la bonne commande, la livrer) et les <strong>gaspillages</strong> (en japonais muda). On en recense traditionnellement sept, faciles à transposer en logistique :</p>\n<table>\n<thead><tr><th>Gaspillage</th><th>Exemple en entrepôt</th></tr></thead>\n<tbody>\n<tr><td>Surproduction</td><td>Préparer des commandes trop tôt, qui encombrent les quais</td></tr>\n<tr><td>Attentes</td><td>Préparateur qui attend un réapprovisionnement ou une impression</td></tr>\n<tr><td>Transports inutiles</td><td>Palettes déplacées plusieurs fois entre zones tampons</td></tr>\n<tr><td>Traitements inutiles</td><td>Double saisie, contrôles redondants, re-filmage</td></tr>\n<tr><td>Stocks excessifs</td><td>Surstocks, emplacements occupés par des produits sans rotation</td></tr>\n<tr><td>Mouvements inutiles</td><td>Flexions, recherches, déplacements à pied évitables</td></tr>\n<tr><td>Défauts</td><td>Erreurs de préparation, avaries, retours</td></tr>\n</tbody>\n</table>\n<p>On ajoute souvent un huitième gaspillage : la <strong>sous-utilisation des compétences</strong> des personnes, dont les idées ne sont pas sollicitées.</p>\n<p>L'outil <strong>5S</strong> organise durablement un poste ou une zone : <strong>trier</strong> (éliminer l'inutile), <strong>ranger</strong> (une place pour chaque chose), <strong>nettoyer</strong> (et inspecter en nettoyant), <strong>standardiser</strong> (règles visuelles communes), <strong>maintenir</strong> (faire vivre les règles par des audits réguliers).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> au poste d'emballage, un 5S consiste par exemple à ne garder que les formats de cartons utilisés, à tracer au sol l'emplacement de chaque pile de cartons avec un niveau minimum qui déclenche le réapprovisionnement, et à afficher une photo du poste « de référence ». Le temps passé à chercher un dévidoir ou un format de carton disparaît.</div>\n"
      },
      {
       "titre": "Les outils de résolution de problème",
       "contenu": "\n<p>Face à un problème (hausse des erreurs, retards répétés), on évite de sauter aux conclusions. Quelques outils structurent l'analyse :</p>\n<ul>\n<li>le <strong>QQOQCP</strong> (qui, quoi, où, quand, comment, pourquoi ; on ajoute souvent combien) décrit précisément le problème à partir de faits ;</li>\n<li>le <strong>diagramme de Pareto</strong> classe les causes ou catégories par ordre décroissant de fréquence et montre celles qui pèsent le plus ;</li>\n<li>le <strong>diagramme d'Ishikawa</strong> (ou diagramme causes-effet, en arête de poisson) recherche les causes possibles par familles, souvent les <strong>5M</strong> : main-d'œuvre, méthodes, matériel, matières, milieu ;</li>\n<li>les <strong>5 pourquoi</strong> consistent à demander « pourquoi ? » successivement jusqu'à atteindre une cause racine sur laquelle on peut agir.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 5 pourquoi sur une erreur de préparation. Pourquoi le client a-t-il reçu la mauvaise référence ? Parce que le préparateur a pris le produit de l'emplacement voisin. Pourquoi ? Parce que les deux produits ont le même carton et des étiquettes voisines. Pourquoi sont-ils côte à côte ? Parce que l'implantation a été faite par ordre de code article. Pourquoi le scan ne l'a-t-il pas détecté ? Parce que le scan du produit n'est pas obligatoire dans cette zone, seul l'emplacement est scanné. Pourquoi ? Parce que la zone a été paramétrée ainsi pour gagner du temps. Causes racines : implantation de produits ressemblants côte à côte et absence de contrôle du produit. Actions : séparer les références ressemblantes et rendre le scan produit obligatoire sur ces références.</div>\n<p>Exemple de Pareto : sur un mois, 160 erreurs de préparation ont été relevées. Réparties par type : mauvaise référence 72, quantité erronée 48, article abîmé 20, mauvaise adresse de livraison 12, oubli d'étiquette 8. Pourcentages cumulés : mauvaise référence 45 %, quantité 75 %, abîmé 87,5 %, adresse 95 %, étiquette 100 %. Deux types sur cinq représentent 75 % des erreurs : c'est sur eux qu'il faut concentrer l'analyse des causes en priorité.</p>\n"
      },
      {
       "titre": "La roue de l'amélioration continue",
       "contenu": "\n<p>L'<strong>amélioration continue</strong> suit le cycle <strong>PDCA</strong>, appelé aussi roue de Deming :</p>\n<ol>\n<li><strong>Plan</strong> (planifier) : décrire le problème, mesurer la situation de départ, analyser les causes, choisir les actions et fixer un objectif chiffré.</li>\n<li><strong>Do</strong> (réaliser) : mettre en œuvre les actions, si possible d'abord sur un périmètre limité (une zone, une équipe).</li>\n<li><strong>Check</strong> (vérifier) : mesurer les résultats avec les mêmes indicateurs et comparer à l'objectif.</li>\n<li><strong>Act</strong> (agir, ajuster) : si le résultat est atteint, généraliser et standardiser (mise à jour des procédures, formation) ; sinon, revenir à l'analyse.</li>\n</ol>\n<p>Les améliorations peuvent être petites et fréquentes (démarche <strong>kaizen</strong>, par petits pas impliquant les opérateurs) ou plus importantes (réorganisation d'une zone, nouvel équipement), qui demandent alors une étude de coûts et de gains.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mesurer « après » n'a de sens que si l'on a mesuré « avant » dans les mêmes conditions. Une baisse des erreurs pendant une période creuse ne prouve pas l'efficacité d'une action : il faut comparer des périodes d'activité comparable ou ramener les erreurs au volume traité.</div>\n"
      },
      {
       "titre": "Présenter une proposition d'amélioration",
       "contenu": "\n<p>Une proposition d'amélioration s'adresse à un responsable qui doit décider. Elle doit être courte et argumentée. Une structure efficace est la suivante :</p>\n<ol>\n<li><strong>Constat</strong> chiffré : l'indicateur concerné, sa valeur, l'objectif, la tendance.</li>\n<li><strong>Analyse</strong> : causes principales identifiées (Pareto, 5 pourquoi).</li>\n<li><strong>Proposition</strong> : actions précises, responsables, délais.</li>\n<li><strong>Moyens et coûts</strong> : temps, matériel, formation.</li>\n<li><strong>Gains attendus</strong> : sur l'indicateur, en coût, en sécurité, en conditions de travail.</li>\n<li><strong>Mesure du résultat</strong> : indicateur suivi, date de vérification.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne proposition relie toujours un problème mesuré, une cause démontrée, une action réaliste et un gain chiffré. Les opérateurs du terrain, qui connaissent le mieux les gaspillages, sont associés à la recherche de solutions.</div>\n"
      }
     ],
     "points_cles": [
      "Les indicateurs se regroupent en qualité, coût, délai et productivité, complétés par la sécurité et l'environnement.",
      "Un tableau de bord présente peu d'indicateurs, avec objectif, tendance et code couleur, pour décider.",
      "Le coût logistique se ramène à une unité d'œuvre : colis, palette, ligne.",
      "Le lean distingue la valeur ajoutée des sept gaspillages (plus la sous-utilisation des compétences).",
      "Le 5S organise un poste : trier, ranger, nettoyer, standardiser, maintenir.",
      "QQOQCP décrit, Pareto hiérarchise, Ishikawa (5M) explore les causes, les 5 pourquoi trouvent la cause racine.",
      "Le PDCA enchaîne planifier, réaliser, vérifier, ajuster puis standardiser.",
      "Une amélioration se juge par comparaison avant-après dans des conditions comparables."
     ],
     "lexique": [
      {
       "terme": "Tableau de bord",
       "def": "Ensemble restreint d'indicateurs présentés avec leurs objectifs pour piloter une activité."
      },
      {
       "terme": "Unité d'œuvre",
       "def": "Unité de mesure de l'activité utilisée pour répartir et comparer les coûts (colis, palette, ligne)."
      },
      {
       "terme": "Lean",
       "def": "Démarche d'organisation visant à éliminer les gaspillages pour ne garder que la valeur ajoutée pour le client."
      },
      {
       "terme": "Muda",
       "def": "Terme japonais désignant un gaspillage, une activité sans valeur ajoutée."
      },
      {
       "terme": "5S",
       "def": "Méthode d'organisation d'un poste : trier, ranger, nettoyer, standardiser, maintenir."
      },
      {
       "terme": "Diagramme d'Ishikawa",
       "def": "Diagramme causes-effet qui classe les causes possibles d'un problème par familles (5M)."
      },
      {
       "terme": "Diagramme de Pareto",
       "def": "Graphique en barres classant les causes par ordre décroissant d'importance, avec courbe des cumuls."
      },
      {
       "terme": "PDCA",
       "def": "Cycle d'amélioration continue : planifier, réaliser, vérifier, ajuster."
      },
      {
       "terme": "Kaizen",
       "def": "Amélioration continue par petits pas, associant les opérateurs."
      }
     ]
    },
    {
     "id": "blog-rse",
     "titre": "Inscrire la logistique dans une démarche de responsabilité sociétale",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Définir la responsabilité sociétale des entreprises et ses trois dimensions appliquées à la logistique.",
      "Identifier les principales sources d'impact environnemental d'un site et d'un transport.",
      "Estimer des émissions de gaz à effet de serre liées à un transport avec un facteur d'émission.",
      "Proposer des actions de réduction : transport, bâtiment, emballages, déchets.",
      "Relier la démarche RSE aux conditions de travail et aux relations avec les partenaires."
     ],
     "sections": [
      {
       "titre": "La responsabilité sociétale des entreprises",
       "contenu": "\n<p>La <strong>responsabilité sociétale des entreprises</strong> (RSE) désigne la prise en compte, par une entreprise, des effets de son activité sur l'environnement, sur les personnes et sur la société, au-delà de ses seules obligations légales. La norme internationale <strong>ISO 26000</strong> en donne les lignes directrices. On la présente souvent selon trois dimensions :</p>\n<ul>\n<li><strong>environnementale</strong> : émissions de gaz à effet de serre, énergie, déchets, emballages, biodiversité, pollution locale ;</li>\n<li><strong>sociale</strong> : santé et sécurité, conditions de travail, formation, égalité, insertion ;</li>\n<li><strong>économique</strong> : relations équitables avec les fournisseurs et sous-traitants, ancrage local, loyauté des pratiques.</li>\n</ul>\n<p>La logistique est directement concernée : le transport de marchandises est une source importante d'émissions de gaz à effet de serre en France, les entrepôts occupent des surfaces et consomment de l'énergie, et les métiers de la logistique exposent à des risques physiques. Les donneurs d'ordre intègrent de plus en plus des critères RSE dans le choix de leurs prestataires et transporteurs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la RSE n'est pas une activité à part ; elle se traduit dans les gestes quotidiens (trier les déchets, éteindre l'éclairage d'une zone inoccupée, remplir correctement un camion, signaler un risque) et dans les choix d'organisation.</div>\n"
      },
      {
       "titre": "Les impacts environnementaux de la logistique",
       "contenu": "\n<table>\n<thead><tr><th>Source</th><th>Impacts</th><th>Leviers</th></tr></thead>\n<tbody>\n<tr><td>Transport</td><td>Émissions de CO2 et de polluants, bruit, congestion</td><td>Taux de remplissage, kilomètres à vide, choix du mode, véhicules à faibles émissions, écoconduite</td></tr>\n<tr><td>Bâtiment</td><td>Consommation d'énergie (éclairage, chauffage, froid), artificialisation des sols</td><td>Éclairage LED avec détection, isolation, panneaux photovoltaïques, réhabilitation de sites existants</td></tr>\n<tr><td>Engins</td><td>Énergie, batteries</td><td>Engins électriques, gestion de la charge, maintenance</td></tr>\n<tr><td>Emballages</td><td>Matières premières, déchets</td><td>Emballages réutilisables, cartons ajustés, réduction du vide et du calage</td></tr>\n<tr><td>Déchets</td><td>Cartons, films, palettes cassées, produits invendus</td><td>Tri à la source, filières de recyclage, réemploi, dons</td></tr>\n</tbody>\n</table>\n<p>En France, plusieurs textes encadrent ces sujets. Les prestataires de transport doivent informer leurs clients de la quantité de gaz à effet de serre émise pour la prestation (obligation prévue par le Code des transports). Le dispositif dit <strong>« décret tertiaire »</strong> impose aux bâtiments à usage tertiaire de plus de 1 000 m², dont de nombreux entrepôts, de réduire progressivement leur consommation d'énergie finale. La loi <strong>AGEC</strong> (anti-gaspillage pour une économie circulaire) fixe des objectifs de réduction, de réemploi et de recyclage des emballages et encadre le sort des invendus.</p>\n"
      },
      {
       "titre": "Estimer les émissions d'un transport",
       "contenu": "\n<p>Les émissions de gaz à effet de serre s'expriment en <strong>kilogrammes d'équivalent CO2</strong> (kg CO2e). Une méthode simple consiste à multiplier une consommation d'énergie par un <strong>facteur d'émission</strong>, donné par des bases de données officielles (en France, la Base Empreinte de l'ADEME). Pour le gazole routier, le facteur est de l'ordre de 3 kg CO2e par litre lorsque l'on compte la production et la combustion du carburant ; la valeur exacte doit être prise dans la base en vigueur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer et comparer les émissions de deux organisations. Organisation actuelle : deux porteurs partent chaque jour à moitié pleins vers la même région, 240 km aller-retour chacun, consommation 28 L aux 100 km. Organisation proposée : un seul porteur rempli, même trajet, consommation 30 L aux 100 km car il est plus chargé. Facteur retenu pour l'exemple : 3,1 kg CO2e par litre. Étape 1 : consommation actuelle = 2 × 240 × 28 / 100 = 134,4 L par jour. Étape 2 : consommation proposée = 240 × 30 / 100 = 72 L par jour. Étape 3 : émissions actuelles = 134,4 × 3,1 ≈ 417 kg CO2e ; proposées = 72 × 3,1 ≈ 223 kg CO2e. Étape 4 : gain ≈ 194 kg CO2e par jour, soit près de 47 %, et autant de gazole économisé. Conclusion : améliorer le taux de remplissage est souvent l'action la plus efficace et la moins coûteuse.</div>\n<p>Le programme volontaire <strong>Objectif CO2</strong>, porté par les pouvoirs publics et l'ADEME, accompagne les transporteurs et les chargeurs qui s'engagent à réduire leurs émissions, avec une charte d'engagement et un label pour les plus performants.</p>\n"
      },
      {
       "titre": "Agir sur le transport",
       "contenu": "\n<p>Les principaux leviers pour réduire l'impact du transport sont, dans l'ordre de leur effet habituel :</p>\n<ul>\n<li><strong>réduire les kilomètres</strong> : optimiser les tournées, regrouper les livraisons, limiter les livraisons urgentes en petites quantités, éviter les retours à vide en cherchant du fret retour ;</li>\n<li><strong>mieux remplir</strong> : taux de remplissage des véhicules, palettes gerbables, emballages adaptés au contenu ;</li>\n<li><strong>choisir le mode</strong> : le ferroviaire et le fluvial émettent beaucoup moins par tonne-kilomètre que la route pour les longues distances et les gros volumes ; le transport combiné rail-route associe les avantages des deux ;</li>\n<li><strong>améliorer les véhicules et la conduite</strong> : motorisations moins émettrices, pneumatiques, déflecteurs, formation à l'écoconduite.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'acceptation par un client d'un délai de livraison de 48 h au lieu de 24 h permet souvent de regrouper ses commandes avec celles d'autres clients et de livrer avec un camion mieux rempli. Certaines enseignes en ligne proposent ainsi une option de livraison groupée plus lente, présentée comme moins émettrice.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un véhicule électrique n'élimine pas toutes les émissions : la fabrication des batteries et la production de l'électricité en génèrent aussi. Les comparaisons sérieuses raisonnent sur l'ensemble du cycle de vie et s'appuient sur des facteurs d'émission officiels plutôt que sur des slogans.</div>\n"
      },
      {
       "titre": "Emballages et déchets en entrepôt",
       "contenu": "\n<p>Un entrepôt produit des volumes importants de déchets : cartons, films étirables, cerclages, palettes cassées, étiquettes. La réglementation impose aux entreprises de trier à la source plusieurs flux de déchets (notamment papier-carton, métal, plastique, verre, bois) en vue de leur valorisation.</p>\n<p>Concrètement :</p>\n<ul>\n<li>des points de collecte identifiés par flux (bennes ou cages pour le carton, le film, le bois) près des zones de production des déchets ;</li>\n<li>le compactage des cartons et des films pour réduire les enlèvements ;</li>\n<li>la réparation des palettes réparables plutôt que leur destruction ;</li>\n<li>le suivi des tonnages par filière et du taux de valorisation.</li>\n</ul>\n<p>Côté emballages d'expédition, les actions consistent à ajuster les cartons au contenu, à remplacer les calages plastiques par du papier, à utiliser des emballages réutilisables dans les circuits fermés (bacs, rolls) et à réduire la quantité de film par palette (films plus fins mais plus résistants, banderoleuses à pré-étirage).</p>\n<p>Le bâtiment offre aussi des gains rapides. L'éclairage représente une part importante de la consommation électrique d'un entrepôt non frigorifique : des luminaires LED pilotés par détection de présence n'éclairent une allée que lorsqu'un engin ou une personne y circule. Les portes de quai bien fermées et équipées de joints d'étanchéité limitent les pertes de chaleur en hiver. Le suivi mensuel des consommations, ramenées à l'activité (kWh par palette traitée, par exemple), permet de repérer les dérives et de mesurer l'effet des actions.</p>\n"
      },
      {
       "titre": "La dimension sociale de la RSE",
       "contenu": "\n<p>La RSE concerne aussi les personnes qui travaillent dans la chaîne logistique :</p>\n<ul>\n<li><strong>santé et sécurité</strong> : réduction de la manutention manuelle, aides mécaniques, prévention des TMS, ergonomie des postes ;</li>\n<li><strong>compétences</strong> : formation, accompagnement des intérimaires, parcours vers des postes de chef d'équipe ;</li>\n<li><strong>diversité et inclusion</strong> : recrutement de personnes éloignées de l'emploi, aménagement des postes pour les travailleurs handicapés, égalité entre femmes et hommes, à laquelle contribuent les aides à la manutention ;</li>\n<li><strong>relations avec les sous-traitants</strong> : délais de paiement respectés, conditions d'accueil des conducteurs (accès aux sanitaires, salle d'attente), prix qui permettent de respecter la réglementation sociale.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une proposition d'amélioration en logistique gagne à être évaluée sur les trois dimensions : gain économique, effet environnemental et effet sur les conditions de travail. Une solution qui réduit les coûts mais augmente les ports de charges n'est pas une amélioration responsable.</div>\n"
      }
     ],
     "points_cles": [
      "La RSE couvre les dimensions environnementale, sociale et économique ; l'ISO 26000 en donne les lignes directrices.",
      "Transport, bâtiment, engins, emballages et déchets sont les principales sources d'impact de la logistique.",
      "Émissions (kg CO2e) = consommation × facteur d'émission issu d'une base officielle.",
      "Réduire les kilomètres et mieux remplir les véhicules sont souvent les leviers les plus efficaces.",
      "Rail, fleuve et transport combiné émettent moins par tonne-kilomètre que la route sur les longues distances.",
      "Le décret tertiaire impose une réduction progressive de la consommation énergétique des bâtiments de plus de 1 000 m².",
      "Le tri à la source des déchets (carton, plastique, bois, métal, verre) est obligatoire pour les entreprises.",
      "Une amélioration responsable s'évalue sur ses effets économiques, environnementaux et sociaux."
     ],
     "lexique": [
      {
       "terme": "RSE",
       "def": "Responsabilité sociétale des entreprises : prise en compte des effets de l'activité sur l'environnement, les personnes et la société."
      },
      {
       "terme": "kg CO2e",
       "def": "Kilogramme d'équivalent dioxyde de carbone, unité commune des émissions de gaz à effet de serre."
      },
      {
       "terme": "Facteur d'émission",
       "def": "Quantité de gaz à effet de serre émise par unité d'activité (par litre de carburant, par kWh, par tonne-kilomètre)."
      },
      {
       "terme": "Base Empreinte",
       "def": "Base de données publique de l'ADEME qui fournit les facteurs d'émission de référence en France."
      },
      {
       "terme": "Taux de remplissage",
       "def": "Rapport entre la charge transportée et la capacité du véhicule, en masse, en volume ou en places palettes."
      },
      {
       "terme": "Transport combiné",
       "def": "Transport d'unités de charge utilisant successivement plusieurs modes, par exemple rail puis route, sans manipulation de la marchandise."
      },
      {
       "terme": "Écoconduite",
       "def": "Ensemble de pratiques de conduite qui réduisent la consommation de carburant et l'usure du véhicule."
      },
      {
       "terme": "Loi AGEC",
       "def": "Loi anti-gaspillage pour une économie circulaire de 2020, qui encadre emballages, déchets et invendus."
      }
     ]
    },
    {
     "id": "blog-coordonner-equipe",
     "titre": "Coordonner une petite équipe logistique",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire le rôle et les responsabilités d'un chef d'équipe en logistique.",
      "Construire un planning d'affectation des tâches à partir de la charge de travail et des compétences.",
      "Animer un briefing de début de poste et transmettre des consignes claires.",
      "Accueillir et intégrer un nouvel opérateur ou un intérimaire.",
      "Réagir à un aléa (absence, retard, pic d'activité) en réaffectant les ressources."
     ],
     "sections": [
      {
       "titre": "Le rôle du chef d'équipe",
       "contenu": "\n<p>Après quelques années d'expérience, le titulaire du bac pro peut devenir <strong>chef d'équipe</strong> (on dit aussi responsable d'équipe ou team leader) : il encadre quelques opérateurs, souvent entre 5 et 15, sur une activité (réception, préparation, expédition) ou un poste horaire. Il est l'intermédiaire entre la direction du site et le terrain.</p>\n<p>Ses missions se répartissent en quatre domaines :</p>\n<table>\n<thead><tr><th>Domaine</th><th>Exemples de tâches</th></tr></thead>\n<tbody>\n<tr><td>Organisation</td><td>Répartir les tâches, ajuster les effectifs, lancer les vagues, gérer les priorités</td></tr>\n<tr><td>Animation</td><td>Briefing, transmission des consignes, écoute, motivation, gestion des tensions</td></tr>\n<tr><td>Suivi</td><td>Suivre l'avancement, les indicateurs, la qualité ; remonter les informations</td></tr>\n<tr><td>Sécurité et règles</td><td>Faire respecter les consignes de sécurité, les procédures et les horaires</td></tr>\n</tbody>\n</table>\n<p>Le chef d'équipe n'est pas le supérieur hiérarchique au sens du pouvoir disciplinaire dans toutes les entreprises : il travaille souvent sous l'autorité d'un chef de quai ou d'un responsable d'exploitation, à qui il rend compte. Il doit connaître les limites de sa délégation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un chef d'équipe obtient des résultats avec son équipe, pas à sa place. S'il passe son poste à préparer lui-même des commandes, personne ne pilote l'activité, ne voit venir les retards ni ne règle les problèmes.</div>\n"
      },
      {
       "titre": "Planifier et affecter les tâches",
       "contenu": "\n<p>L'affectation part de la <strong>charge de travail</strong> prévue (lignes à préparer, camions à décharger, palettes à ranger) et de la <strong>capacité</strong> de l'équipe (nombre de personnes, heures disponibles, productivités). Elle tient compte des <strong>compétences</strong> de chacun, notamment des autorisations de conduite d'engins, qu'on suit dans une <strong>matrice de polyvalence</strong> : un tableau qui croise les personnes et les postes, avec le niveau de maîtrise de chacun.</p>\n<table>\n<thead><tr><th>Opérateur</th><th>Réception</th><th>Cariste réserve</th><th>Préparation</th><th>Emballage</th><th>Expédition</th></tr></thead>\n<tbody>\n<tr><td>Amina</td><td>Autonome</td><td>Autonome (autorisation de conduite)</td><td>Autonome</td><td>En formation</td><td>Autonome</td></tr>\n<tr><td>Bastien</td><td>Non formé</td><td>Non autorisé</td><td>Autonome</td><td>Autonome</td><td>Non formé</td></tr>\n<tr><td>Chloé</td><td>Autonome</td><td>Autonome (autorisation de conduite)</td><td>Autonome</td><td>Autonome</td><td>Autonome</td></tr>\n<tr><td>David (intérimaire)</td><td>Non formé</td><td>Non autorisé</td><td>En formation</td><td>Autonome</td><td>Non formé</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> affecter une équipe. Charge du poste du matin (7 h productives par personne) : réception 10 h de travail dont 6 h de conduite d'engin, préparation 14 h, emballage 4 h. Ressources : Amina, Bastien, Chloé, David, soit 28 h. Charge totale = 10 + 14 + 4 = 28 h : l'équipe est occupée à 100 %, sans marge. Étape 1 : affecter d'abord les tâches qui exigent une compétence rare : la réception avec engin revient à Amina et Chloé. Étape 2 : Amina 7 h de réception, Chloé 3 h de réception puis 4 h de préparation. Étape 3 : Bastien 7 h de préparation ; préparation restante 14 − 4 − 7 = 3 h, confiée à David, en formation, accompagné par Chloé au début. Étape 4 : David fait aussi 4 h d'emballage, où il est autonome. Bilan : toutes les tâches sont couvertes ; comme la marge est nulle, prévenir le responsable qu'une absence ou un retard de camion devra être compensé par des heures supplémentaires ou un renfort.</div>\n"
      },
      {
       "titre": "Le briefing de début de poste",
       "contenu": "\n<p>Le <strong>briefing</strong> est une réunion courte (5 à 10 minutes), debout, au même endroit chaque jour, en début de poste. Il sert à aligner toute l'équipe sur les objectifs et les consignes. Un déroulé type :</p>\n<ol>\n<li><strong>Sécurité</strong> : rappel d'une consigne, retour sur un presqu'accident, point d'attention du jour (sol mouillé, travaux, livraison de produits dangereux).</li>\n<li><strong>Résultats de la veille</strong> : quelques indicateurs (volume traité, erreurs, retards), sans désigner de coupable devant le groupe.</li>\n<li><strong>Programme du jour</strong> : volumes attendus, départs à tenir, priorités, clients particuliers.</li>\n<li><strong>Affectations</strong> : qui fait quoi, à quelle heure les changements de poste.</li>\n<li><strong>Questions</strong> et remontées de l'équipe.</li>\n</ol>\n<p>Une consigne bien transmise est <strong>précise</strong> (quoi, où, quand, combien), <strong>justifiée</strong> (pourquoi on le fait), <strong>vérifiée</strong> (on demande à la personne de reformuler ou on contrôle l'application). Les consignes écrites importantes sont affichées au poste.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de nombreux sites utilisent un tableau visuel près de la zone de briefing : objectifs du jour, avancement heure par heure, indicateurs de la semaine, jours sans accident, idées d'amélioration proposées par l'équipe. Il permet à chacun de voir en un coup d'œil si l'équipe est en avance ou en retard.</div>\n"
      },
      {
       "titre": "Suivre l'activité et réagir aux aléas",
       "contenu": "\n<p>Pendant le poste, le chef d'équipe compare régulièrement l'<strong>avancement réel</strong> au <strong>prévu</strong>, par exemple toutes les heures : nombre de lignes préparées, camions traités, vagues terminées. Un écart détecté tôt laisse le temps d'agir.</p>\n<p>Les aléas les plus fréquents et les réponses possibles :</p>\n<table>\n<thead><tr><th>Aléa</th><th>Réponses possibles</th></tr></thead>\n<tbody>\n<tr><td>Absence d'un opérateur</td><td>Réaffecter selon la matrice de polyvalence, reporter les tâches non urgentes, demander un renfort</td></tr>\n<tr><td>Camion en retard</td><td>Avancer d'autres tâches (rangement, réapprovisionnement), décaler les pauses</td></tr>\n<tr><td>Pic de commandes imprévu</td><td>Prioriser selon les départs, renfort d'une autre équipe, heures supplémentaires validées par le responsable</td></tr>\n<tr><td>Panne d'un engin ou du système</td><td>Basculer sur un engin de secours, procédure dégradée, informer la maintenance et le responsable</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sous la pression du délai, il est tentant de confier un engin à une personne non autorisée ou de « sauter » un contrôle. C'est exactement dans ces moments que surviennent les accidents et les erreurs graves. Le chef d'équipe préfère prévenir son responsable d'un retard plutôt que de contourner une règle de sécurité.</div>\n"
      },
      {
       "titre": "Accueillir et intégrer un nouvel arrivant",
       "contenu": "\n<p>La logistique emploie beaucoup d'intérimaires et de saisonniers. Les accidents sont plus fréquents dans les premiers jours sur un poste. L'accueil est donc un enjeu de sécurité autant que d'efficacité. Un <strong>parcours d'accueil</strong> comprend :</p>\n<ul>\n<li>la présentation du site, de l'équipe, des horaires et des interlocuteurs ;</li>\n<li>la formation à la sécurité propre au site : plan de circulation, zones interdites, équipements de protection, consignes d'évacuation ;</li>\n<li>la remise ou la vérification des équipements de protection individuelle ;</li>\n<li>l'apprentissage du poste avec un <strong>tuteur</strong> expérimenté, selon une fiche de poste ou un mode opératoire ;</li>\n<li>un point de suivi en fin de journée puis après quelques jours.</li>\n</ul>\n<p>La conduite d'un engin n'est possible qu'après délivrance d'une autorisation de conduite par l'employeur, même si la personne possède déjà un certificat de formation obtenu ailleurs, car elle doit connaître les lieux et les instructions du site.</p>\n<p>Pour un intérimaire, l'entreprise utilisatrice reste responsable des conditions d'exécution du travail, notamment en matière de santé et de sécurité. Elle doit lui fournir une formation renforcée à la sécurité lorsqu'il est affecté à un poste présentant des risques particuliers. Le chef d'équipe vérifie donc, avant toute affectation, que la formation a été faite et que les équipements de protection sont adaptés, puis il note dans la matrice de polyvalence les postes sur lesquels le nouvel arrivant est devenu autonome.</p>\n"
      },
      {
       "titre": "Communiquer et gérer les tensions",
       "contenu": "\n<p>Dans une équipe soumise aux délais, des tensions apparaissent : répartition jugée injuste des tâches pénibles, erreurs reprochées, retards. Le chef d'équipe veille à :</p>\n<ul>\n<li>répartir équitablement les tâches pénibles, par rotation planifiée et connue de tous ;</li>\n<li>traiter une erreur individuelle en entretien individuel, en partant des faits et en cherchant la cause plutôt qu'un coupable ;</li>\n<li>reconnaître le travail bien fait, y compris publiquement lors du briefing ;</li>\n<li>écouter les remontées et y répondre, même pour dire qu'une demande ne peut pas être satisfaite et pourquoi ;</li>\n<li>alerter son responsable en cas de conflit qui dépasse son rôle, de comportement dangereux ou de situation de harcèlement.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour recadrer, la méthode des faits est la plus efficace : décrire le fait observé (« ce matin, la palette a été posée dans l'allée piétonne »), son effet (« cela a obligé deux préparateurs à passer dans l'allée des chariots »), puis la règle attendue et l'engagement demandé. On parle du comportement, jamais de la personne.</div>\n"
      }
     ],
     "points_cles": [
      "Le chef d'équipe organise, anime, suit et fait respecter la sécurité ; il rend compte à son responsable.",
      "L'affectation part de la charge, de la capacité et des compétences (matrice de polyvalence).",
      "Les tâches qui exigent une compétence rare (conduite d'engin) sont affectées en premier.",
      "Le briefing quotidien, court et structuré, commence par la sécurité.",
      "Une consigne est précise, justifiée et vérifiée.",
      "Le suivi régulier prévu-réalisé permet de réagir tôt aux aléas.",
      "Aucun délai ne justifie de contourner une règle de sécurité ou une autorisation de conduite.",
      "L'accueil d'un nouvel arrivant comprend formation sécurité, tutorat et points de suivi."
     ],
     "lexique": [
      {
       "terme": "Chef d'équipe",
       "def": "Salarié qui organise et anime le travail d'un petit groupe d'opérateurs et rend compte à son responsable."
      },
      {
       "terme": "Charge de travail",
       "def": "Quantité de travail à réaliser sur une période, exprimée en heures nécessaires."
      },
      {
       "terme": "Capacité",
       "def": "Quantité de travail que l'équipe peut fournir sur la période, en heures disponibles."
      },
      {
       "terme": "Matrice de polyvalence",
       "def": "Tableau croisant les personnes et les postes, indiquant le niveau de maîtrise de chacun."
      },
      {
       "terme": "Briefing",
       "def": "Réunion courte de début de poste pour transmettre objectifs, consignes et affectations."
      },
      {
       "terme": "Tuteur",
       "def": "Opérateur expérimenté chargé de former et d'accompagner un nouvel arrivant sur son poste."
      },
      {
       "terme": "Mode opératoire",
       "def": "Document qui décrit étape par étape la façon de réaliser une tâche."
      },
      {
       "terme": "Autorisation de conduite",
       "def": "Document délivré par l'employeur qui permet à un salarié de conduire un engin donné sur le site."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Analyser les documents professionnels de la logistique",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "blog-doc-tableau-de-bord",
     "titre": "Analyser un tableau de bord logistique",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Reconnaître la structure d'un tableau de bord logistique et le vocabulaire associé.",
      "Vérifier la cohérence des indicateurs et recalculer une valeur à partir des données brutes.",
      "Repérer les écarts significatifs par rapport aux objectifs et les tendances.",
      "Formuler un diagnostic argumenté et des propositions d'action reliées aux indicateurs.",
      "Rédiger une analyse structurée telle qu'attendue à l'épreuve écrite."
     ],
     "sections": [
      {
       "titre": "Le document et sa place dans le dossier",
       "contenu": "\n<p>Dans un dossier d'épreuve écrite, le <strong>tableau de bord</strong> est l'un des documents les plus fréquents. Il est souvent accompagné d'un document de contexte (présentation de l'entreprise, du site, du client) et de documents complémentaires (relevé des réclamations, plan, planning). On demande généralement de calculer ou de compléter des indicateurs, de les commenter, d'identifier un dysfonctionnement et de proposer des améliorations.</p>\n<p>Un tableau de bord se présente le plus souvent sous forme de tableau, parfois accompagné d'un graphique (courbe d'évolution, histogramme). Il comporte :</p>\n<table>\n<thead><tr><th>Élément</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Titre, site, période</td><td>Situer les données dans le temps et l'espace (semaine, mois, cumul)</td></tr>\n<tr><td>Liste des indicateurs</td><td>Nom, parfois formule et unité</td></tr>\n<tr><td>Objectif (ou cible, ou seuil)</td><td>Valeur à atteindre ; parfois un seuil d'alerte</td></tr>\n<tr><td>Valeurs réalisées</td><td>Pour une ou plusieurs périodes</td></tr>\n<tr><td>Écart</td><td>Différence entre réalisé et objectif, en valeur ou en points</td></tr>\n<tr><td>Tendance, code couleur</td><td>Flèche, couleur (vert, orange, rouge) ou symbole</td></tr>\n<tr><td>Commentaires ou plan d'action</td><td>Explication de l'écart, action décidée, responsable, échéance</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chez un prestataire, le tableau de bord mensuel est présenté au donneur d'ordre lors d'une revue de performance. Les indicateurs contractuels peuvent être assortis de pénalités en cas de non-atteinte, ou de bonus en cas de dépassement. Chaque écart doit donc être expliqué et accompagné d'un plan d'action daté, que le client suivra au mois suivant.</div>\n"
      },
      {
       "titre": "Vocabulaire et pièges de lecture",
       "contenu": "\n<ul>\n<li>Un écart se calcule en <strong>points</strong> quand on compare deux pourcentages : passer de 96 % à 98 % est une hausse de 2 points, et non de 2 %.</li>\n<li>Pour certains indicateurs, plus c'est haut, mieux c'est (taux de service, productivité) ; pour d'autres, plus c'est bas, mieux c'est (taux d'erreur, coût par colis, délai). Le sens doit être identifié avant de commenter.</li>\n<li>Un <strong>cumul</strong> (depuis le début de l'année ou du mois) évolue lentement ; une valeur <strong>mensuelle</strong> ou hebdomadaire réagit plus vite.</li>\n<li>Un taux se juge avec son <strong>volume</strong> : 2 erreurs sur 50 lignes (4 %) ne pèsent pas comme 40 erreurs sur 1 000 lignes (4 % aussi), mais la seconde situation est plus robuste statistiquement.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une erreur fréquente à l'épreuve consiste à paraphraser le tableau (« le taux de service est de 95,1 % ») sans le comparer à l'objectif ni l'expliquer. Un commentaire attendu contient toujours trois éléments : la comparaison (écart à l'objectif ou à la période précédente), l'interprétation (ce que cela signifie pour le client ou l'entreprise) et, si possible, une cause appuyée sur un autre document du dossier.</div>\n"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un tableau de bord en six étapes. 1) Situer : quel site, quelle activité, quelle période, quel client. 2) Inventorier : lister les indicateurs, repérer leur unité, leur formule, leur sens (haut ou bas souhaitable). 3) Vérifier : recalculer une ou deux valeurs à partir des données brutes fournies pour s'assurer de leur exactitude et compléter les cases vides demandées. 4) Comparer : chaque indicateur à son objectif (écart) et à la période précédente (tendance). 5) Hiérarchiser : repérer les deux ou trois écarts les plus importants, ceux qui touchent le client ou la sécurité en priorité. 6) Expliquer et proposer : chercher dans les autres documents du dossier les causes probables, puis proposer des actions précises, chacune reliée à l'indicateur qu'elle doit améliorer.</div>\n<p>Pour rédiger, une structure simple fonctionne bien : un constat chiffré, une interprétation, une cause, une proposition. On évite les formules vagues (« il faudrait améliorer l'organisation ») au profit d'actions concrètes (« rendre le scan produit obligatoire sur les 15 références concernées par les inversions »).</p>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Contexte : l'entrepôt d'un prestataire prépare des commandes de pièces détachées pour un réseau de garages. Engagements contractuels : taux de service OTIF de 97 % au moins, taux d'erreur de préparation inférieur ou égal à 0,30 %, productivité cible de 85 lignes par heure, fiabilité des stocks de 98 % au moins. Le dossier contient le tableau de bord du trimestre et un relevé des réclamations de mars.</p>\n<table>\n<thead><tr><th>Indicateur</th><th>Objectif</th><th>Janvier</th><th>Février</th><th>Mars</th></tr></thead>\n<tbody>\n<tr><td>Commandes expédiées</td><td>-</td><td>8 200</td><td>8 450</td><td>10 300</td></tr>\n<tr><td>Commandes à l'heure et complètes</td><td>-</td><td>8 020</td><td>8 230</td><td>9 790</td></tr>\n<tr><td>Taux de service OTIF</td><td>≥ 97 %</td><td>97,8 %</td><td>97,4 %</td><td>à calculer</td></tr>\n<tr><td>Lignes préparées</td><td>-</td><td>41 000</td><td>42 250</td><td>52 500</td></tr>\n<tr><td>Lignes en erreur</td><td>-</td><td>98</td><td>110</td><td>215</td></tr>\n<tr><td>Taux d'erreur de préparation</td><td>≤ 0,30 %</td><td>0,24 %</td><td>0,26 %</td><td>à calculer</td></tr>\n<tr><td>Heures productives de préparation</td><td>-</td><td>480</td><td>495</td><td>560</td></tr>\n<tr><td>Productivité (lignes par heure)</td><td>≥ 85</td><td>85,4</td><td>85,4</td><td>à calculer</td></tr>\n<tr><td>Fiabilité des stocks (inventaire tournant)</td><td>≥ 98 %</td><td>98,6 %</td><td>98,4 %</td><td>97,1 %</td></tr>\n</tbody>\n</table>\n<p>Relevé des réclamations de mars : 215 lignes en erreur, dont 121 « mauvaise référence » (principalement sur 12 références de plaquettes de frein de dimensions proches), 58 « quantité erronée », 36 autres. Note de contexte : en mars, une campagne de promotion sur les freins a fait monter l'activité ; 4 intérimaires ont été intégrés le 3 mars.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<h4>1. Calculs</h4>\n<p>Taux de service OTIF de mars = 9 790 / 10 300 × 100 ≈ 95,0 %. Taux d'erreur de mars = 215 / 52 500 × 100 ≈ 0,41 %. Productivité de mars = 52 500 / 560 ≈ 93,8 lignes par heure. Vérification de janvier : 98 / 41 000 × 100 ≈ 0,24 %, conforme au tableau.</p>\n<h4>2. Constat</h4>\n<p>En mars, trois indicateurs sur quatre sont hors objectif. Le taux de service chute à 95,0 %, soit 2 points sous l'objectif et 2,4 points sous février. Le taux d'erreur atteint 0,41 %, au-dessus du seuil de 0,30 % et en hausse de 0,15 point. La fiabilité des stocks passe à 97,1 %, sous les 98 %. Seule la productivité progresse fortement (93,8 lignes par heure contre 85,4), au-dessus de la cible.</p>\n<h4>3. Interprétation</h4>\n<p>L'activité a augmenté d'environ 24 % en lignes (52 500 contre 42 250) alors que les heures n'ont augmenté que d'environ 13 % (560 contre 495). L'équipe a donc absorbé le pic en accélérant, au détriment de la qualité. Les erreurs de préparation se répercutent sur le taux de service, puisqu'une commande erronée n'est pas complète et conforme, et sur la fiabilité des stocks, puisqu'une inversion de référence crée deux écarts de stock.</p>\n<h4>4. Causes probables</h4>\n<p>Le relevé montre que 121 erreurs sur 215, soit 56 %, sont des inversions de références, concentrées sur 12 références de plaquettes de dimensions proches, justement en promotion. L'arrivée de 4 intérimaires en début de mois, moins familiers des produits, a pu accentuer ce phénomène.</p>\n<h4>5. Propositions</h4>\n<ul>\n<li>Séparer physiquement les 12 références de plaquettes qui se ressemblent et ajouter une photo sur l'étiquette d'emplacement, pour réduire les inversions (indicateur suivi : erreurs « mauvaise référence »).</li>\n<li>Rendre le scan du produit obligatoire sur ces références, en plus du scan d'emplacement (indicateur : taux d'erreur).</li>\n<li>Prévoir pour les prochaines promotions un renfort calculé sur le volume annoncé et une formation produit des intérimaires avant leur prise de poste (indicateurs : productivité ramenée à un niveau tenable, taux de service).</li>\n<li>Lancer un inventaire tournant ciblé sur les 12 références pour corriger le stock (indicateur : fiabilité des stocks).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse modèle relie les indicateurs entre eux (erreurs, taux de service, fiabilité du stock), s'appuie sur un second document pour trouver la cause, et propose des actions précises associées chacune à un indicateur de suivi.</div>\n"
      }
     ],
     "points_cles": [
      "Un tableau de bord présente indicateurs, objectifs, valeurs, écarts, tendances et parfois un plan d'action.",
      "Un écart entre deux pourcentages s'exprime en points.",
      "Il faut identifier le sens souhaitable de chaque indicateur avant de le commenter.",
      "Recalculer une valeur à partir des données brutes permet de vérifier le document et de compléter les cases vides.",
      "Un commentaire compare, interprète et explique ; il ne paraphrase pas.",
      "Les indicateurs sont liés : une hausse des erreurs dégrade aussi le taux de service et la fiabilité du stock.",
      "Les causes se cherchent dans les autres documents du dossier (réclamations, contexte, planning).",
      "Chaque proposition d'action est précise et reliée à l'indicateur qu'elle doit améliorer."
     ],
     "lexique": [
      {
       "terme": "Objectif (cible)",
       "def": "Valeur qu'un indicateur doit atteindre ou ne pas dépasser sur la période."
      },
      {
       "terme": "Seuil d'alerte",
       "def": "Valeur à partir de laquelle une action corrective doit être déclenchée."
      },
      {
       "terme": "Écart",
       "def": "Différence entre la valeur réalisée et l'objectif ou la période précédente."
      },
      {
       "terme": "Point de pourcentage",
       "def": "Unité de différence entre deux pourcentages (de 96 % à 98 % : 2 points)."
      },
      {
       "terme": "Tendance",
       "def": "Sens d'évolution d'un indicateur sur plusieurs périodes."
      },
      {
       "terme": "Cumul",
       "def": "Valeur calculée depuis le début d'une période plus longue (mois, année)."
      },
      {
       "terme": "Plan d'action",
       "def": "Liste des actions décidées, avec responsable, échéance et indicateur de suivi."
      },
      {
       "terme": "Données brutes",
       "def": "Valeurs de base (volumes, nombres d'erreurs, heures) à partir desquelles les indicateurs sont calculés."
      }
     ]
    },
    {
     "id": "blog-doc-etat-stock",
     "titre": "Exploiter un état des stocks et un rapport d'inventaire",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les colonnes et les statuts d'un état des stocks extrait d'un WMS.",
      "Calculer stock disponible, couverture et rotation à partir d'un état des stocks.",
      "Analyser un rapport d'inventaire et distinguer écarts en quantité et en valeur.",
      "Repérer les situations à risque : rupture, surstock, stock bloqué, dates proches.",
      "Rédiger une analyse et des propositions à partir de ces documents."
     ],
     "sections": [
      {
       "titre": "Le document : état des stocks et rapport d'inventaire",
       "contenu": "\n<p>L'<strong>état des stocks</strong> est une extraction du WMS ou de l'ERP qui liste, à une date donnée, les quantités en stock par référence, parfois par emplacement et par lot. Le <strong>rapport d'inventaire</strong> compare, pour les emplacements comptés, la quantité théorique et la quantité comptée, et calcule les écarts.</p>\n<p>Colonnes fréquentes d'un état des stocks :</p>\n<table>\n<thead><tr><th>Colonne</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Code article et désignation</td><td>Identification de la référence (code interne, GTIN)</td></tr>\n<tr><td>Unité de gestion</td><td>Unité, colis, palette : à vérifier avant tout calcul</td></tr>\n<tr><td>Stock physique ou théorique</td><td>Quantité présente selon le système</td></tr>\n<tr><td>Réservé</td><td>Quantité allouée aux commandes en cours</td></tr>\n<tr><td>Bloqué (quarantaine, qualité, avarie)</td><td>Quantité indisponible</td></tr>\n<tr><td>Disponible</td><td>Physique − réservé − bloqué</td></tr>\n<tr><td>En commande (attendu)</td><td>Quantité commandée au fournisseur, avec date prévue</td></tr>\n<tr><td>Consommation moyenne</td><td>Par jour, par semaine ou par mois</td></tr>\n<tr><td>Lot, DLC ou DDM</td><td>Pour les produits datés</td></tr>\n<tr><td>Valeur unitaire, valeur du stock</td><td>Souvent au CMUP</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'unité de gestion change souvent d'une colonne ou d'une référence à l'autre. Une consommation exprimée en colis par semaine ne se compare pas directement à un stock exprimé en unités. Avant tout calcul, convertir dans la même unité et la même période.</div>\n"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un état des stocks en cinq étapes. 1) Situer : date d'extraction, site, périmètre (toutes références ou sélection), unités. 2) Calculer le stock disponible pour chaque référence étudiée, si la colonne n'est pas fournie. 3) Calculer la couverture : stock disponible (éventuellement augmenté des entrées attendues avant la date utile) divisé par la consommation moyenne par jour ou par semaine. 4) Classer les références selon leur situation : rupture imminente (couverture inférieure au délai de réapprovisionnement), situation normale, surstock (couverture très supérieure à la normale, rotation faible), stock bloqué important, dates proches. 5) Proposer pour chaque situation une action : commande urgente, relance fournisseur, déstockage, décision qualité sur le stock bloqué, sortie prioritaire en FEFO, promotion ou don pour les dates courtes.</div>\n<p>Pour le rapport d'inventaire, la démarche est voisine : calculer les écarts en quantité (compté − théorique) et en valeur (écart × valeur unitaire), séparer les manquants (écart négatif) des excédents (écart positif), calculer un taux d'écart, puis chercher les causes : inversions entre références voisines, mouvements non saisis, erreurs d'unité, casse non déclarée, vol.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en valeur, on présente souvent deux totaux : l'écart net (manquants et excédents se compensent, il intéresse la comptabilité) et l'écart en valeur absolue (on additionne tous les écarts sans signe, il mesure la qualité de la gestion des stocks). Un écart net proche de zéro peut cacher de nombreuses erreurs.</div>\n"
      },
      {
       "titre": "Cas particulier : l'état des stocks par lot et par date",
       "contenu": "\n<p>Pour les produits datés, l'état des stocks est souvent détaillé <strong>par lot</strong>, avec la DLC ou la DDM de chaque lot. L'analyse change alors de nature : il ne suffit pas de savoir si le stock couvre la demande, il faut vérifier qu'il sera <strong>consommé avant sa date</strong>.</p>\n<p>Le raisonnement est le suivant : en appliquant la règle FEFO, on écoule d'abord le lot dont la date est la plus proche. On calcule le nombre de jours nécessaires pour l'écouler (quantité du lot / consommation par jour), puis on compare à la durée restante avant sa date, diminuée de la durée de vie minimale exigée par les clients à la livraison. Si le lot ne peut pas être écoulé à temps, la quantité excédentaire est à risque.</p>\n<p>Exemple : un lot de 300 colis de yaourts a une DLC dans 12 jours ; les magasins exigent au moins 7 jours de durée de vie à réception ; la consommation est de 40 colis par jour. Le lot doit donc être expédié dans les 12 − 7 = 5 jours. En 5 jours, on expédie 5 × 40 = 200 colis : 100 colis risquent d'être invendables auprès des magasins.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les plateformes alimentaires éditent chaque matin une liste des lots « à date courte ». Le responsable décide d'une action : promotion avec l'enseigne, vente à un déstockeur, don à une association d'aide alimentaire lorsque la réglementation le permet. Plus la décision est prise tôt, plus les solutions sont nombreuses.</div>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Contexte : plateforme régionale d'un distributeur de produits d'entretien. Délai de réapprovisionnement fournisseur : 7 jours. Extraction du lundi 9 mars, matin. Consommation moyenne calculée sur les 4 dernières semaines, en colis par jour ouvré (5 jours par semaine).</p>\n<table>\n<thead><tr><th>Code</th><th>Désignation</th><th>Stock physique (colis)</th><th>Réservé</th><th>Bloqué</th><th>Attendu (date)</th><th>Conso. moyenne (colis/jour)</th><th>Valeur unitaire</th></tr></thead>\n<tbody>\n<tr><td>A101</td><td>Liquide vaisselle 1 L × 12</td><td>420</td><td>180</td><td>0</td><td>600 (16 mars)</td><td>60</td><td>14,20 €</td></tr>\n<tr><td>A205</td><td>Lessive liquide 3 L × 4</td><td>1 350</td><td>40</td><td>0</td><td>0</td><td>18</td><td>21,50 €</td></tr>\n<tr><td>B310</td><td>Javel 2 L × 6</td><td>260</td><td>30</td><td>110</td><td>0</td><td>25</td><td>7,80 €</td></tr>\n<tr><td>C044</td><td>Éponges lot de 10 × 24</td><td>95</td><td>20</td><td>0</td><td>200 (11 mars)</td><td>12</td><td>16,00 €</td></tr>\n</tbody>\n</table>\n<p>Rapport d'inventaire tournant de la semaine précédente (extrait) :</p>\n<table>\n<thead><tr><th>Emplacement</th><th>Code</th><th>Théorique</th><th>Compté</th><th>Écart</th><th>Valeur unitaire</th></tr></thead>\n<tbody>\n<tr><td>A-03-012-1</td><td>A101</td><td>48</td><td>44</td><td>−4</td><td>14,20 €</td></tr>\n<tr><td>A-03-013-1</td><td>A102</td><td>36</td><td>40</td><td>+4</td><td>14,20 €</td></tr>\n<tr><td>B-11-020-0</td><td>B310</td><td>60</td><td>54</td><td>−6</td><td>7,80 €</td></tr>\n<tr><td>C-02-005-2</td><td>C044</td><td>30</td><td>30</td><td>0</td><td>16,00 €</td></tr>\n</tbody>\n</table>\n<p>Note : le stock bloqué de B310 correspond à 110 colis présentant des bouchons qui fuient, en attente de décision du fournisseur depuis le 20 février.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<h4>1. Stock disponible et couverture</h4>\n<table>\n<thead><tr><th>Code</th><th>Disponible</th><th>Couverture</th><th>Situation</th></tr></thead>\n<tbody>\n<tr><td>A101</td><td>420 − 180 − 0 = 240</td><td>240 / 60 = 4 jours</td><td>Risque de rupture</td></tr>\n<tr><td>A205</td><td>1 350 − 40 − 0 = 1 310</td><td>1 310 / 18 ≈ 73 jours</td><td>Surstock</td></tr>\n<tr><td>B310</td><td>260 − 30 − 110 = 120</td><td>120 / 25 = 4,8 jours</td><td>Risque de rupture et stock bloqué ancien</td></tr>\n<tr><td>C044</td><td>95 − 20 − 0 = 75</td><td>75 / 12 ≈ 6 jours, renforcée le 11 mars</td><td>Situation normale</td></tr>\n</tbody>\n</table>\n<h4>2. Interprétation</h4>\n<p><strong>A101</strong> : 4 jours ouvrés de couverture couvrent la période du lundi 9 au jeudi 12 mars, alors que la livraison est attendue le lundi 16 mars. Il manquera environ un jour de consommation (le vendredi 13 mars), soit 60 colis : il faut demander au fournisseur d'avancer tout ou partie de la livraison, ou prioriser les clients. <strong>A205</strong> : 73 jours ouvrés, soit plus de 14 semaines, alors que le délai est de 7 jours : le stock immobilise 1 350 × 21,50 = 29 025 € et occupe de la place. Il faut suspendre les commandes et en informer les achats. <strong>B310</strong> : la couverture réelle est inférieure au délai de réapprovisionnement de 7 jours et aucune commande n'est en cours : une commande doit être lancée immédiatement. Les 110 colis bloqués depuis plus de deux semaines représentent 858 € et doivent faire l'objet d'une relance du fournisseur. <strong>C044</strong> : la livraison du 11 mars arrive avant l'épuisement du stock disponible.</p>\n<h4>3. Rapport d'inventaire</h4>\n<p>Écart net en valeur : (−4 × 14,20) + (4 × 14,20) + (−6 × 7,80) = −56,80 + 56,80 − 46,80 = −46,80 €. Écart en valeur absolue : 56,80 + 56,80 + 46,80 = 160,40 €. L'écart net masque une erreur : le manquant de 4 colis sur A101 et l'excédent de 4 colis sur A102, emplacements voisins de même valeur, signalent très probablement une inversion de préparation ou de rangement entre deux références proches. Le manquant de 6 colis de javel peut s'expliquer par la casse liée aux bouchons défectueux, non déclarée.</p>\n<h4>4. Propositions</h4>\n<ul>\n<li>Relancer le fournisseur d'A101 pour une livraison partielle avant le 13 mars ; à défaut, appliquer les règles de priorité clients.</li>\n<li>Lancer une commande de B310 et relancer le fournisseur pour la décision sur les 110 colis bloqués.</li>\n<li>Suspendre les commandes d'A205 et alerter les achats sur le surstock.</li>\n<li>Vérifier les emplacements A101 et A102, corriger le stock après recherche de la cause, distinguer visuellement ces deux références voisines.</li>\n<li>Rappeler la procédure de déclaration de casse sur les produits liquides.</li>\n</ul>\n"
      }
     ],
     "points_cles": [
      "L'état des stocks distingue stock physique, réservé, bloqué, disponible et attendu.",
      "Avant tout calcul, vérifier que stock et consommation sont dans la même unité et la même période.",
      "Couverture = stock disponible / consommation moyenne ; elle se compare au délai de réapprovisionnement.",
      "Une couverture inférieure au délai sans commande en cours signale une rupture certaine.",
      "Une couverture très longue signale un surstock et un capital immobilisé.",
      "Un stock bloqué ancien doit être relancé : il réduit le disponible sans être visible.",
      "Écart net et écart en valeur absolue racontent deux histoires différentes.",
      "Un manquant et un excédent identiques sur des emplacements voisins signalent une inversion."
     ],
     "lexique": [
      {
       "terme": "État des stocks",
       "def": "Extraction du système d'information listant les quantités en stock par référence à une date donnée."
      },
      {
       "terme": "Rapport d'inventaire",
       "def": "Document comparant quantités théoriques et quantités comptées, avec calcul des écarts."
      },
      {
       "terme": "Unité de gestion",
       "def": "Unité dans laquelle une référence est suivie en stock (unité, colis, palette)."
      },
      {
       "terme": "Écart net",
       "def": "Somme algébrique des écarts d'inventaire, où excédents et manquants se compensent."
      },
      {
       "terme": "Écart en valeur absolue",
       "def": "Somme des écarts d'inventaire sans tenir compte de leur signe."
      },
      {
       "terme": "Surstock",
       "def": "Stock nettement supérieur aux besoins, avec une couverture très longue et une rotation faible."
      },
      {
       "terme": "Rupture",
       "def": "Situation où le stock disponible ne permet plus de servir la demande."
      },
      {
       "terme": "Inversion",
       "def": "Erreur où deux références sont confondues lors d'un rangement ou d'un prélèvement."
      }
     ]
    },
    {
     "id": "blog-doc-plan-entrepot",
     "titre": "Lire un plan d'entrepôt et un plan de circulation",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les zones, les flux et les équipements représentés sur un plan d'entrepôt.",
      "Utiliser l'échelle d'un plan pour calculer surfaces, distances et capacités.",
      "Analyser un plan de circulation et repérer les points de croisement dangereux.",
      "Évaluer l'organisation des flux (en U, en I, en L) et la position des zones.",
      "Proposer des améliorations argumentées d'implantation ou de circulation."
     ],
     "sections": [
      {
       "titre": "Le document et ses conventions",
       "contenu": "\n<p>Le <strong>plan d'entrepôt</strong> (ou plan masse, ou plan d'implantation) est une vue de dessus du bâtiment et de ses abords, à une <strong>échelle</strong> donnée. Il représente les zones fonctionnelles, les rayonnages, les quais, les allées et les équipements de sécurité. Le <strong>plan de circulation</strong> superpose à ce plan les sens de circulation, les allées piétonnes, les passages protégés, les zones interdites et les limitations de vitesse.</p>\n<p>Éléments à repérer en premier :</p>\n<table>\n<thead><tr><th>Élément</th><th>Ce qu'il apporte</th></tr></thead>\n<tbody>\n<tr><td>Cartouche</td><td>Nom du site, date, auteur, échelle, orientation (nord)</td></tr>\n<tr><td>Légende</td><td>Signification des couleurs, hachures, symboles et flèches</td></tr>\n<tr><td>Échelle</td><td>Rapport entre une longueur sur le plan et la longueur réelle (1/500 : 1 cm sur le plan = 5 m en réalité), ou échelle graphique</td></tr>\n<tr><td>Cotes</td><td>Dimensions réelles inscrites, qui priment sur la mesure à la règle</td></tr>\n<tr><td>Zones</td><td>Réception, contrôle, stockage, préparation, emballage, expédition, retours, quarantaine, charge des batteries, bureaux, locaux sociaux</td></tr>\n<tr><td>Équipements</td><td>Quais (nombre, numéros, niveleurs), portes, rayonnages, issues de secours, extincteurs, RIA</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un plan reproduit dans un sujet est souvent réduit ou agrandi ; mesurer à la règle et appliquer l'échelle numérique d'origine donne alors des résultats faux. Les cotes inscrites, ou l'échelle graphique dessinée sur le plan, restent justes après réduction.</div>\n"
      },
      {
       "titre": "Les organisations de flux",
       "contenu": "\n<p>La position des quais de réception et d'expédition détermine la forme générale des flux :</p>\n<table>\n<thead><tr><th>Organisation</th><th>Description</th><th>Avantages</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Flux en U</td><td>Réception et expédition sur la même façade</td><td>Quais et personnel mutualisés, produits A près des quais, une seule cour</td><td>Croisements possibles des flux entrants et sortants près des quais</td></tr>\n<tr><td>Flux en I (traversant)</td><td>Réception d'un côté, expédition de l'autre</td><td>Flux séparés, adapté au cross-docking et aux gros volumes</td><td>Distances plus longues, deux cours, quais non mutualisés</td></tr>\n<tr><td>Flux en L</td><td>Réception et expédition sur deux façades adjacentes</td><td>Compromis entre U et I</td><td>Organisation intérieure plus complexe</td></tr>\n</tbody>\n</table>\n<p>Un bon plan respecte la <strong>marche en avant</strong> : la marchandise progresse de la réception vers l'expédition sans retour en arrière ni croisement inutile. Les zones de réception et d'expédition disposent de surfaces tampons suffisantes devant les quais pour poser les palettes en attente.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le plan de circulation est affiché à l'entrée du site et aux accès piétons, et il est remis aux conducteurs des transporteurs avec le protocole de sécurité. Lors d'un changement d'implantation (nouvelle zone de stockage saisonnier, travaux), il doit être mis à jour et présenté aux équipes au briefing, sinon les habitudes de circulation reprennent le dessus et créent des croisements dangereux.</div>\n"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un plan en six étapes. 1) Lire le cartouche et la légende, repérer l'échelle et l'orientation. 2) Identifier chaque zone et noter sa fonction. 3) Tracer mentalement (ou au crayon sur le sujet) le parcours d'une palette depuis la réception jusqu'à l'expédition : le flux est-il en U, en I, en L ? Y a-t-il des retours en arrière ? 4) Superposer les flux de piétons et repérer les croisements avec les flux d'engins et de poids lourds. 5) Calculer ce qui est demandé : surface, distance, capacité, en utilisant les cotes ou l'échelle. 6) Conclure par des points forts, des points faibles et des propositions concrètes (déplacer une zone, créer une allée piétonne, inverser un sens de circulation, ajouter un passage protégé).</div>\n<p>Calculs fréquents :</p>\n<ul>\n<li><strong>surface</strong> d'une zone = longueur × largeur réelles, en m² ;</li>\n<li><strong>capacité</strong> d'un rayonnage = nombre de travées × nombre de niveaux (y compris le sol si utilisé) × nombre de palettes par alvéole ;</li>\n<li><strong>distance parcourue</strong> par un préparateur ou un cariste, en suivant les allées, pas à vol d'oiseau ;</li>\n<li><strong>taux d'occupation du sol</strong> = surface occupée par le stockage / surface totale de la cellule.</li>\n</ul>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Contexte : cellule de 72 m × 48 m (cotes inscrites) d'un entrepôt de distribution de produits de bricolage. Le plan, décrit ci-dessous, est à l'échelle 1/400.</p>\n<table>\n<thead><tr><th>Repère</th><th>Description sur le plan</th></tr></thead>\n<tbody>\n<tr><td>Façade sud</td><td>8 quais numérotés de 1 à 8. Légende : quais 1 à 4 « réception », quais 5 à 8 « expédition »</td></tr>\n<tr><td>Zone tampon réception</td><td>Devant les quais 1 à 4, 12 m de profondeur sur 24 m de large</td></tr>\n<tr><td>Zone tampon expédition</td><td>Devant les quais 5 à 8, 8 m de profondeur sur 24 m de large</td></tr>\n<tr><td>Rayonnages</td><td>6 allées orientées nord-sud ; chaque allée dessert deux rangées de rayonnage de 20 travées, 5 niveaux de stockage dont le sol, 3 palettes par alvéole</td></tr>\n<tr><td>Zone de préparation et d'emballage</td><td>Le long de la façade nord, à l'opposé des quais</td></tr>\n<tr><td>Local de charge des batteries</td><td>Angle sud-est, accessible uniquement en traversant la zone tampon expédition</td></tr>\n<tr><td>Circulation piétonne</td><td>Une allée piétonne matérialisée longe la façade est, depuis les vestiaires (angle nord-est) jusqu'aux bureaux de quai (angle sud-ouest) ; elle traverse la zone tampon expédition et la zone tampon réception sans passage protégé</td></tr>\n<tr><td>Issues de secours</td><td>4 issues : deux en façade nord, une à l'est, une à l'ouest ; l'issue ouest est représentée derrière une zone hachurée « stockage temporaire palettes vides »</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<h4>1. Organisation des flux</h4>\n<p>Réception et expédition sont sur la même façade sud : c'est un <strong>flux en U</strong>. Il permet de mutualiser la cour et de placer les produits à forte rotation près des quais. Mais la zone de préparation et d'emballage est située au nord, à l'opposé des quais : chaque commande préparée doit retraverser toute la cellule, soit environ 48 m, pour rejoindre la zone d'expédition. Le principe de marche en avant n'est pas respecté et les flux de préparation croisent les flux de rangement dans les allées.</p>\n<h4>2. Capacité de stockage</h4>\n<p>Nombre de rangées = 6 allées × 2 = 12 rangées. Capacité = 12 × 20 travées × 5 niveaux × 3 palettes = 3 600 emplacements palettes.</p>\n<h4>3. Surfaces des zones tampons</h4>\n<p>Réception : 12 × 24 = 288 m². Expédition : 8 × 24 = 192 m². Une palette 1 200 × 800 occupe 0,96 m² ; en comptant environ le double pour les passages, la zone d'expédition accueille de l'ordre de 100 palettes au sol, ce qui est juste si les quatre quais chargent en même temps des semi-remorques de 33 palettes (132 palettes).</p>\n<h4>4. Sécurité</h4>\n<p>Trois points faibles apparaissent. L'allée piétonne traverse les deux zones tampons, où circulent en permanence des engins, sans passage protégé : risque majeur de collision. L'accès au local de charge des batteries impose de traverser la zone d'expédition, ce qui ajoute des passages d'engins dans une zone chargée. Enfin, l'issue de secours ouest est encombrée par un stockage de palettes vides : c'est contraire aux règles de dégagement des issues.</p>\n<h4>5. Propositions</h4>\n<ul>\n<li>Créer un cheminement piéton protégé par des barrières le long de la façade est, avec un passage piéton signalé et équipé de feux ou de portillons au croisement des zones tampons.</li>\n<li>Libérer immédiatement l'issue ouest et matérialiser au sol une zone d'interdiction de stockage devant toutes les issues.</li>\n<li>Rapprocher la zone d'emballage de la zone tampon expédition, ou implanter en bas de rayonnage, côté sud, les références à forte rotation pour raccourcir les parcours.</li>\n<li>Créer un accès direct au local de charge depuis l'allée est pour éviter la traversée de la zone d'expédition.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse d'un plan combine trois regards : les flux (marche en avant, distances), la capacité (surfaces, emplacements) et la sécurité (croisements, issues, zones dangereuses). Chaque proposition doit être localisée précisément sur le plan.</div>\n"
      }
     ],
     "points_cles": [
      "Cartouche, légende, échelle et orientation se lisent avant toute analyse.",
      "Les cotes inscrites et l'échelle graphique restent justes même si le plan a été réduit.",
      "Flux en U, en I ou en L : la position des quais détermine la forme des flux.",
      "La marche en avant évite retours en arrière et croisements inutiles.",
      "Capacité d'un rayonnage = travées × niveaux × palettes par alvéole (× nombre de rangées).",
      "Les distances se mesurent le long des allées, pas à vol d'oiseau.",
      "Le plan de circulation fait apparaître les croisements piétons-engins à traiter en priorité.",
      "Les issues de secours doivent rester dégagées et visibles sur le plan comme sur le terrain."
     ],
     "lexique": [
      {
       "terme": "Plan d'implantation",
       "def": "Vue de dessus d'un bâtiment représentant zones, rayonnages, quais et équipements."
      },
      {
       "terme": "Échelle",
       "def": "Rapport entre une longueur mesurée sur le plan et la longueur réelle correspondante."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre du plan qui donne le titre, l'échelle, la date, l'auteur et l'orientation."
      },
      {
       "terme": "Cote",
       "def": "Dimension réelle inscrite sur un plan."
      },
      {
       "terme": "Flux en U",
       "def": "Organisation où réception et expédition se trouvent sur la même façade."
      },
      {
       "terme": "Flux traversant (en I)",
       "def": "Organisation où réception et expédition se trouvent sur deux façades opposées."
      },
      {
       "terme": "Marche en avant",
       "def": "Principe selon lequel la marchandise progresse toujours vers l'expédition sans retour en arrière."
      },
      {
       "terme": "Zone tampon",
       "def": "Surface au sol devant les quais où les palettes attendent leur rangement ou leur chargement."
      }
     ]
    },
    {
     "id": "blog-doc-transport",
     "titre": "Analyser les documents de transport : lettre de voiture, CMR et cotation",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les rubriques d'une lettre de voiture nationale et d'une lettre de voiture internationale CMR.",
      "Contrôler la cohérence d'un document de transport avec le bon de livraison et la commande.",
      "Analyser les réserves portées sur un document et apprécier leur valeur.",
      "Exploiter une grille tarifaire ou une cotation pour vérifier une facture de transport.",
      "Rédiger une analyse argumentée d'un dossier transport."
     ],
     "sections": [
      {
       "titre": "La lettre de voiture nationale",
       "contenu": "\n<p>La <strong>lettre de voiture</strong> matérialise le contrat de transport. En transport routier national, elle doit accompagner la marchandise et comporter des mentions fixées par la réglementation des documents de transport. Elle est établie en plusieurs exemplaires (expéditeur, transporteur, destinataire) ou sous forme électronique (on parle alors de lettre de voiture électronique).</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu à vérifier</th></tr></thead>\n<tbody>\n<tr><td>Parties</td><td>Noms et adresses de l'expéditeur, du transporteur, du destinataire ; éventuellement du commissionnaire</td></tr>\n<tr><td>Lieux et dates</td><td>Lieu et date de prise en charge, lieu de livraison, date ou délai convenu</td></tr>\n<tr><td>Marchandise</td><td>Nature, nombre de colis ou de supports, marques, poids brut, volume si utile</td></tr>\n<tr><td>Instructions</td><td>Rendez-vous, hayon, température, contre-remboursement, déclaration de valeur</td></tr>\n<tr><td>Supports</td><td>Nombre et type de supports échangés ou à reprendre</td></tr>\n<tr><td>Prix</td><td>Port payé (par l'expéditeur) ou port dû (par le destinataire)</td></tr>\n<tr><td>Signatures et réserves</td><td>Signature à l'enlèvement et à la livraison, date et heure, réserves éventuelles</td></tr>\n</tbody>\n</table>\n<p>Le <strong>bon de livraison</strong> (émis par le vendeur, il détaille les articles et quantités livrés) et la lettre de voiture (émise pour le transport, elle décrit les colis) se complètent : le premier sert au contrôle du contenu, la seconde au contrôle du nombre de colis et de leur état, et aux réserves contre le transporteur.</p>\n"
      },
      {
       "titre": "La lettre de voiture internationale CMR",
       "contenu": "\n<p>Pour un transport routier entre deux pays dont l'un au moins a adhéré à la <strong>convention CMR</strong> (convention relative au contrat de transport international de marchandises par route, signée à Genève en 1956), le document de transport est la <strong>lettre de voiture CMR</strong>. Elle comporte des cases numérotées ; les principales sont :</p>\n<table>\n<thead><tr><th>Cases</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Expéditeur</td></tr>\n<tr><td>2</td><td>Destinataire</td></tr>\n<tr><td>3</td><td>Lieu prévu pour la livraison</td></tr>\n<tr><td>4</td><td>Lieu et date de la prise en charge</td></tr>\n<tr><td>5</td><td>Documents annexés</td></tr>\n<tr><td>6 à 12</td><td>Marques et numéros, nombre de colis, mode d'emballage, nature de la marchandise, numéro statistique, poids brut, volume</td></tr>\n<tr><td>13</td><td>Instructions de l'expéditeur</td></tr>\n<tr><td>16 et 17</td><td>Transporteur et transporteurs successifs</td></tr>\n<tr><td>18</td><td>Réserves et observations du transporteur à la prise en charge</td></tr>\n<tr><td>22, 23, 24</td><td>Signatures de l'expéditeur, du transporteur et du destinataire (avec date de livraison)</td></tr>\n</tbody>\n</table>\n<p>La numérotation exacte peut varier légèrement selon les modèles imprimés, mais l'ordre des rubriques est standard. La CMR est établie en au moins trois exemplaires originaux.</p>\n<p>Pour les réserves à destination, la convention CMR distingue les pertes ou avaries <strong>apparentes</strong>, qui doivent être signalées au plus tard au moment de la livraison, et les pertes ou avaries <strong>non apparentes</strong>, pour lesquelles le destinataire dispose de <strong>sept jours</strong> (dimanches et jours fériés non compris) pour adresser des réserves écrites. Ces délais diffèrent du délai de trois jours du transport national.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la case 18 contient les réserves du <strong>transporteur au chargement</strong> (par exemple « palettes non filmées », « emballage insuffisant »). Si le transporteur y a noté une réserve motivée, l'expéditeur aura du mal à le tenir pour responsable d'un dommage lié à cette cause. L'agent d'expédition doit donc lire cette case avant de laisser partir le camion.</div>\n"
      },
      {
       "titre": "Méthode d'analyse d'un dossier transport",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un dossier transport en cinq étapes. 1) Identifier le type de transport (national ou international, messagerie ou lot) et donc le document et les règles applicables. 2) Rapprocher les documents : commande, bon de livraison, lettre de voiture, avis d'expédition. Vérifier parties, adresses, nombre de colis, poids, instructions, supports. 3) Lire les réserves : à la prise en charge (transporteur) et à la livraison (destinataire). Apprécier leur valeur : sont-elles précises, motivées, signées, dans les délais ? 4) Vérifier le prix : recalculer le poids taxable et le montant à partir de la grille tarifaire ou de la cotation, ajouter les suppléments prévus, comparer à la facture. 5) Conclure : responsabilités probables, démarches à engager (réclamation au transporteur, contestation de facture), actions préventives.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une incohérence entre documents (nombre de colis différent entre le bon de livraison et la lettre de voiture, poids anormal) est souvent la clé du sujet. Elle indique où l'erreur s'est produite : chez l'expéditeur, pendant le transport ou à la réception.</div>\n"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "\n<p>Contexte : un fabricant de luminaires situé à Lyon expédie une commande à un distributeur de Milan (Italie). Transport routier en lot partiel confié au transporteur T. Incoterm : DAP Milan.</p>\n<p>Extrait de la lettre de voiture CMR :</p>\n<table>\n<thead><tr><th>Case</th><th>Mention</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Fabricant de luminaires, Lyon</td></tr>\n<tr><td>2 et 3</td><td>Distributeur, Milan</td></tr>\n<tr><td>4</td><td>Lyon, 3 mars</td></tr>\n<tr><td>6 à 11</td><td>6 palettes 1 200 × 800, cartons filmés, luminaires, poids brut 1 380 kg</td></tr>\n<tr><td>13</td><td>Fragile, ne pas gerber</td></tr>\n<tr><td>18</td><td>Néant</td></tr>\n<tr><td>24</td><td>Reçu le 5 mars, signature du destinataire, mention manuscrite « 1 palette écrasée, film déchiré, 8 cartons enfoncés, gerbage constaté à l'ouverture »</td></tr>\n</tbody>\n</table>\n<p>Bon de livraison : 6 palettes, 144 cartons, 1 380 kg. Courriel du destinataire du 14 mars : « En déballant les autres palettes, nous avons trouvé 12 luminaires cassés dans des cartons en apparence intacts. »</p>\n<p>Cotation acceptée : 640 € hors taxes le lot de 6 palettes non gerbables, indexation gazole de 8 % sur le prix de base, supplément hayon non prévu. Facture du transporteur : 640 € + indexation gazole 51,20 € + supplément hayon 45 € = 736,20 € hors taxes.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<h4>1. Cadre</h4>\n<p>Transport international par route entre la France et l'Italie, deux pays signataires : la convention CMR s'applique. Avec l'Incoterm DAP, le vendeur organise et paie le transport jusqu'à Milan et supporte les risques jusqu'à la livraison : c'est donc le fabricant, expéditeur, qui a intérêt à agir contre le transporteur pour le dommage.</p>\n<h4>2. Cohérence des documents</h4>\n<p>Nombre de palettes (6) et poids (1 380 kg) concordent entre la CMR et le bon de livraison. La case 13 mentionne « ne pas gerber », et la case 18 est vide : le transporteur n'a émis aucune réserve sur l'emballage au chargement. La marchandise est donc présumée avoir été remise en bon état apparent.</p>\n<h4>3. Réserves et responsabilité</h4>\n<p>Le dommage sur la palette écrasée est apparent ; il a été signalé à la livraison, de façon précise (nombre de cartons, état du film) et motivée (gerbage constaté, contraire à l'instruction de la case 13). Cette réserve est recevable et engage la responsabilité du transporteur. Les 12 luminaires cassés dans des cartons intacts constituent un dommage <strong>non apparent</strong>. Livraison le jeudi 5 mars ; sept jours comptés à partir du lendemain, dimanche non compris, mènent au vendredi 13 mars. Le courriel du 14 mars est hors délai : la réclamation pour ce dommage sera très difficile à faire aboutir, sauf à prouver que le dommage est imputable au transport.</p>\n<h4>4. Vérification de la facture</h4>\n<p>Prix de base : 640 €. Indexation : 640 × 8 % = 51,20 €, conforme. Le supplément hayon de 45 € ne figure pas dans la cotation acceptée : il doit être contesté, sauf si une demande de hayon a été faite après la cotation. Montant justifié : 691,20 € hors taxes.</p>\n<h4>5. Actions</h4>\n<ul>\n<li>Adresser au transporteur une réclamation écrite pour la palette endommagée, avec la copie de la CMR, des photos et la valeur des 8 cartons.</li>\n<li>Contester le supplément hayon de 45 €.</li>\n<li>Rappeler au client la procédure de contrôle à réception : ouvrir et vérifier rapidement, et formuler des réserves écrites dans les sept jours pour les dommages non apparents.</li>\n<li>Pour les envois fragiles, ajouter des étiquettes « ne pas gerber » visibles (pictogramme ou cône de gerbage) en plus de la mention sur la CMR.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le service transport tient un registre des litiges avec, pour chacun, la date de livraison, la date limite de réserves, la date de réclamation et le montant. Ce suivi évite de laisser passer les délais et sert à évaluer les transporteurs.</div>\n"
      }
     ],
     "points_cles": [
      "La lettre de voiture matérialise le contrat de transport ; le bon de livraison décrit le contenu vendu.",
      "La CMR s'applique aux transports routiers internationaux dès qu'un pays concerné l'a ratifiée.",
      "La case 18 de la CMR porte les réserves du transporteur au chargement ; elle se lit avant le départ.",
      "En CMR, dommages apparents : réserves à la livraison ; non apparents : 7 jours, dimanches et fériés exclus.",
      "En national, le délai de protestation pour un dommage non apparent est de 3 jours.",
      "Le rapprochement commande, bon de livraison, lettre de voiture et avis d'expédition révèle les incohérences.",
      "Une facture de transport se vérifie ligne à ligne par rapport à la cotation acceptée.",
      "L'Incoterm indique qui supporte le risque et donc qui doit réclamer auprès du transporteur."
     ],
     "lexique": [
      {
       "terme": "Lettre de voiture",
       "def": "Document qui matérialise le contrat de transport routier et accompagne la marchandise."
      },
      {
       "terme": "CMR",
       "def": "Convention relative au contrat de transport international de marchandises par route, et lettre de voiture correspondante."
      },
      {
       "terme": "Bon de livraison",
       "def": "Document du vendeur qui détaille les articles et quantités livrés."
      },
      {
       "terme": "Port payé",
       "def": "Le prix du transport est réglé par l'expéditeur."
      },
      {
       "terme": "Port dû",
       "def": "Le prix du transport est réglé par le destinataire."
      },
      {
       "terme": "Dommage apparent",
       "def": "Perte ou avarie visible à la livraison sans ouvrir les colis."
      },
      {
       "terme": "Dommage non apparent",
       "def": "Avarie découverte seulement après ouverture d'un colis apparemment intact."
      },
      {
       "terme": "Cotation",
       "def": "Proposition de prix d'un transporteur pour un transport défini, qui sert de base à la facture."
      }
     ]
    },
    {
     "id": "blog-doc-fds",
     "titre": "Exploiter une fiche de données de sécurité et les informations de danger",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Connaître la structure en 16 rubriques d'une fiche de données de sécurité (FDS).",
      "Localiser rapidement dans une FDS les informations utiles au logisticien.",
      "Relier les pictogrammes CLP, les mentions de danger et les informations de transport ADR.",
      "Déduire d'une FDS des consignes de stockage, de manutention et d'intervention.",
      "Rédiger une analyse et une fiche de consignes à partir d'une FDS."
     ],
     "sections": [
      {
       "titre": "Le document et son rôle",
       "contenu": "\n<p>La <strong>fiche de données de sécurité</strong> (FDS) est fournie par le fabricant ou le fournisseur de toute substance ou mélange dangereux, conformément au règlement européen REACH. Elle est rédigée dans la langue du pays d'utilisation et doit être tenue à jour. Elle s'adresse aux utilisateurs professionnels : elle sert à évaluer les risques, à définir les mesures de prévention et à informer les secours.</p>\n<p>Pour le logisticien, la FDS est le document de référence pour savoir où et comment stocker un produit, comment le manipuler, que faire en cas de fuite, d'incendie ou d'exposition, et comment le transporter. Dans un dossier d'épreuve, elle est souvent accompagnée d'un plan de la zone de stockage, d'une liste de produits déjà stockés ou d'une demande d'expédition.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les FDS de tous les produits dangereux stockés sont rassemblées dans un classeur ou une base informatique accessible en permanence, notamment pour les pompiers en cas d'intervention. Le WMS associe souvent à chaque référence dangereuse sa classe ADR et une classe de stockage qui contrôle les emplacements autorisés.</div>\n"
      },
      {
       "titre": "Les 16 rubriques et ce qu'il faut y chercher",
       "contenu": "\n<table>\n<thead><tr><th>Rubrique</th><th>Intitulé</th><th>Intérêt pour le logisticien</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Identification de la substance ou du mélange et de la société</td><td>Nom commercial, usage, fournisseur, numéro d'appel d'urgence</td></tr>\n<tr><td>2</td><td>Identification des dangers</td><td>Classification, pictogrammes, mention d'avertissement, mentions de danger (codes H) et conseils de prudence (codes P)</td></tr>\n<tr><td>3</td><td>Composition</td><td>Composants dangereux et concentrations</td></tr>\n<tr><td>4</td><td>Premiers secours</td><td>Conduite à tenir en cas d'exposition</td></tr>\n<tr><td>5</td><td>Mesures de lutte contre l'incendie</td><td>Moyens d'extinction appropriés et à proscrire</td></tr>\n<tr><td>6</td><td>Mesures à prendre en cas de dispersion accidentelle</td><td>Conduite en cas de fuite, matériel absorbant</td></tr>\n<tr><td>7</td><td>Manipulation et stockage</td><td>Conditions de stockage, températures, incompatibilités</td></tr>\n<tr><td>8</td><td>Contrôles de l'exposition et protection individuelle</td><td>Équipements de protection individuelle à porter</td></tr>\n<tr><td>9</td><td>Propriétés physiques et chimiques</td><td>État, point d'éclair, densité</td></tr>\n<tr><td>10</td><td>Stabilité et réactivité</td><td>Matières incompatibles, conditions à éviter</td></tr>\n<tr><td>11 et 12</td><td>Informations toxicologiques et écologiques</td><td>Effets sur la santé et l'environnement</td></tr>\n<tr><td>13</td><td>Considérations relatives à l'élimination</td><td>Traitement des déchets et des emballages souillés</td></tr>\n<tr><td>14</td><td>Informations relatives au transport</td><td>Numéro ONU, désignation officielle, classe, groupe d'emballage, danger pour l'environnement</td></tr>\n<tr><td>15</td><td>Informations relatives à la réglementation</td><td>Textes applicables, rubriques ICPE éventuelles</td></tr>\n<tr><td>16</td><td>Autres informations</td><td>Révisions, abréviations</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour une question de logistique, les rubriques prioritaires sont 2 (dangers), 5 et 6 (incendie et fuite), 7 (stockage), 8 (protections), 10 (incompatibilités) et 14 (transport).</div>\n"
      },
      {
       "titre": "Pictogrammes, mentions et codes",
       "contenu": "\n<p>Le règlement européen <strong>CLP</strong> (classification, étiquetage et emballage) définit neuf <strong>pictogrammes de danger</strong> (losange à bordure rouge sur fond blanc) : explosif, flamme, flamme sur un cercle (comburant), bouteille de gaz, corrosion, tête de mort sur tibias (toxicité aiguë), point d'exclamation, danger pour la santé (silhouette) et environnement. Ils sont accompagnés d'une <strong>mention d'avertissement</strong> (« Danger » pour les dangers les plus graves, « Attention » pour les autres), de <strong>mentions de danger</strong> codées H (par exemple H225 : liquide et vapeurs très inflammables) et de <strong>conseils de prudence</strong> codés P (par exemple P210 : tenir à l'écart de la chaleur, des surfaces chaudes, des étincelles, des flammes nues et de toute autre source d'inflammation ; défense de fumer).</p>\n<p>Les informations de <strong>transport</strong> (rubrique 14) relèvent d'un autre système, l'ADR : numéro ONU, classe, étiquettes de danger pour le transport (losanges colorés), groupe d'emballage (I : danger élevé, II : moyen, III : faible). Les deux systèmes ne se correspondent pas toujours exactement : un produit peut être dangereux pour l'utilisation (étiquetage CLP) sans être soumis à l'ADR, ou l'inverse.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le <strong>point d'éclair</strong> (rubrique 9) est la température la plus basse à laquelle un liquide émet assez de vapeurs pour s'enflammer au contact d'une flamme. Plus il est bas, plus le liquide est dangereux : un liquide dont le point d'éclair est de 12 °C peut s'enflammer à température ambiante dans un entrepôt. Le confondre avec une température d'auto-inflammation conduit à sous-estimer le risque.</div>\n"
      },
      {
       "titre": "Méthode d'exploitation",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une FDS en cinq étapes. 1) Identifier le produit et son fournisseur (rubrique 1) et vérifier la date de révision. 2) Relever les dangers (rubrique 2) : pictogrammes, mention d'avertissement, codes H. 3) Relever les conditions de stockage et les incompatibilités (rubriques 7 et 10) et les comparer aux produits déjà présents dans la zone prévue. 4) Relever les protections (rubrique 8) et les conduites à tenir en cas de fuite ou d'incendie (rubriques 5 et 6). 5) Relever les données de transport (rubrique 14) pour préparer l'étiquetage et le document de transport. Conclure par des consignes opérationnelles numérotées, formulées à l'impératif, utilisables par un opérateur.</div>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Contexte : une plateforme de distribution de produits pour professionnels du bâtiment reçoit pour la première fois un diluant pour peinture conditionné en bidons de 5 L, par palettes de 120 bidons. La zone de stockage prévue (cellule C) contient déjà des sacs d'engrais à base de nitrate d'ammonium et des bidons de chlore pour piscine (hypochlorite de calcium). Extrait de la FDS du diluant :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Extrait</th></tr></thead>\n<tbody>\n<tr><td>2</td><td>Pictogrammes : flamme, point d'exclamation, danger pour la santé. Mention d'avertissement : Danger. H225 : liquide et vapeurs très inflammables. H336 : peut provoquer somnolence ou vertiges. H304 : peut être mortel en cas d'ingestion et de pénétration dans les voies respiratoires.</td></tr>\n<tr><td>5</td><td>Moyens d'extinction appropriés : mousse, poudre, CO2. Moyen inapproprié : jet d'eau bâton.</td></tr>\n<tr><td>6</td><td>Supprimer les sources d'inflammation ; contenir la fuite avec un absorbant inerte ; empêcher l'écoulement vers les égouts.</td></tr>\n<tr><td>7</td><td>Stocker dans un endroit frais et bien ventilé, à l'écart des sources de chaleur et d'ignition. Conserver le récipient bien fermé. Stocker sur rétention.</td></tr>\n<tr><td>8</td><td>Gants résistants aux solvants, lunettes de protection en cas de risque d'éclaboussure.</td></tr>\n<tr><td>9</td><td>Liquide incolore, point d'éclair : 5 °C.</td></tr>\n<tr><td>10</td><td>Matières incompatibles : agents oxydants forts.</td></tr>\n<tr><td>14</td><td>UN 1263, PEINTURES (matières apparentées aux peintures), classe 3, groupe d'emballage II.</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<h4>1. Dangers</h4>\n<p>Le diluant est un liquide très inflammable (H225), avec un point d'éclair de 5 °C : il émet des vapeurs inflammables à la température normale de l'entrepôt. Il présente aussi des dangers pour la santé par inhalation (somnolence) et en cas d'ingestion. La mention « Danger » confirme la gravité.</p>\n<h4>2. Compatibilité avec la cellule C</h4>\n<p>La rubrique 10 interdit le contact avec les agents oxydants forts. Or les engrais au nitrate d'ammonium et l'hypochlorite de calcium sont des <strong>comburants</strong>, c'est-à-dire des oxydants qui activent la combustion. Stocker le diluant dans la cellule C créerait un risque grave d'incendie violent en cas de fuite ou de départ de feu. La cellule C ne convient pas.</p>\n<h4>3. Consignes de stockage et de manipulation</h4>\n<ol>\n<li>Stocker les palettes dans la zone des liquides inflammables, sur rétention, à l'écart des comburants et des sources de chaleur.</li>\n<li>Ne jamais ouvrir un bidon dans l'entrepôt ; vérifier à réception l'étanchéité des bouchons.</li>\n<li>Porter gants et lunettes pour manipuler un bidon qui fuit.</li>\n<li>En cas de fuite : couper les sources d'inflammation, utiliser l'absorbant inerte du kit antipollution, empêcher l'écoulement vers les regards, prévenir le responsable.</li>\n<li>En cas d'incendie : utiliser un extincteur à mousse, à poudre ou à CO2, jamais un jet d'eau bâton ; donner l'alerte.</li>\n</ol>\n<h4>4. Expédition</h4>\n<p>Les données de la rubrique 14 (UN 1263, classe 3, groupe d'emballage II) doivent figurer sur le document de transport. Les colis portent le numéro ONU et l'étiquette de danger de la classe 3. Selon les quantités chargées dans le véhicule et le conditionnement, le régime de l'ADR applicable (complet, exemptions liées aux quantités, quantités limitées) est à déterminer avec le conseiller à la sécurité de l'entreprise.</p>\n<p>Calcul utile pour la zone de stockage : une palette contient 120 × 5 = 600 L de liquide inflammable. Si la zone reçoit 4 palettes, elle contiendra 2 400 L ; cette quantité sert à vérifier les limites fixées pour la zone et le dimensionnement de la rétention, selon les règles propres au site.</p>\n"
      }
     ],
     "points_cles": [
      "La FDS, fournie par le fabricant selon REACH, comporte 16 rubriques dans un ordre fixe.",
      "Rubriques prioritaires en logistique : 2, 5, 6, 7, 8, 10 et 14.",
      "Le CLP définit 9 pictogrammes, deux mentions d'avertissement, des mentions de danger H et des conseils P.",
      "La rubrique 14 donne les informations de transport ADR : numéro ONU, classe, groupe d'emballage.",
      "Étiquetage CLP et étiquetage ADR sont deux systèmes distincts qui ne se correspondent pas toujours.",
      "Un point d'éclair bas signifie un liquide inflammable à température ambiante.",
      "Les incompatibilités de la rubrique 10 se comparent aux produits déjà présents dans la zone prévue.",
      "L'analyse aboutit à des consignes opérationnelles numérotées, formulées à l'impératif."
     ],
     "lexique": [
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité : document en 16 rubriques décrivant les dangers d'un produit et les mesures à prendre."
      },
      {
       "terme": "REACH",
       "def": "Règlement européen sur l'enregistrement, l'évaluation et l'autorisation des substances chimiques, qui encadre notamment les FDS."
      },
      {
       "terme": "CLP",
       "def": "Règlement européen sur la classification, l'étiquetage et l'emballage des substances et mélanges dangereux."
      },
      {
       "terme": "Mention de danger (H)",
       "def": "Phrase codée décrivant la nature d'un danger, par exemple H225."
      },
      {
       "terme": "Conseil de prudence (P)",
       "def": "Phrase codée décrivant une mesure de prévention ou d'intervention, par exemple P210."
      },
      {
       "terme": "Point d'éclair",
       "def": "Température la plus basse à laquelle un liquide émet assez de vapeurs pour s'enflammer au contact d'une flamme."
      },
      {
       "terme": "Comburant",
       "def": "Substance oxydante qui entretient ou active la combustion d'autres matières."
      },
      {
       "terme": "Groupe d'emballage",
       "def": "Classement ADR des matières selon leur degré de danger : I élevé, II moyen, III faible."
      }
     ]
    }
   ]
  }
 ]
};
