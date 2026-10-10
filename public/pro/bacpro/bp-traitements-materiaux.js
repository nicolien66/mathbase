/* Polymates — Bac pro Traitements des matériaux — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-traitements-materiaux"] = {
 "id": "bp-traitements-materiaux",
 "nom": "Traitements des matériaux",
 "icone": "🎓",
 "couleur": "#9aa8b8",
 "intro": "Le baccalauréat professionnel Traitements des matériaux forme des opérateurs et conducteurs de lignes capables de préparer, conduire et surveiller les procédés qui protègent, durcissent ou décorent la surface des pièces métalliques et plastiques : dépôts électrolytiques et chimiques, anodisation, conversions, peintures, galvanisation et traitements thermiques. Il mène aux métiers d'opérateur en traitement de surface, conducteur de ligne, agent de laboratoire de bains ou de station d'épuration, puis de chef d'équipe. Ce cours couvre les savoirs de la première et de la terminale, en prolongement du cours de seconde de la famille des métiers de la réalisation d'ensembles mécaniques et industriels. Il comprend un bloc de cours théorique (matériaux et chimie des surfaces, procédés, installations et conduite, qualité, sécurité et environnement) et un bloc d'analyse de documents qui montre comment exploiter les documents professionnels rencontrés à l'épreuve écrite d'étude et de préparation d'une production.",
 "parties": [
  {
   "titre": "Partie 1 — Matériaux, corrosion et chimie des bains",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btdm-fonctions-procedes",
     "titre": "Fonctions de surface et panorama des procédés de traitement",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Identifier la ou les fonctions attendues d'une surface traitée à partir d'un besoin client.",
      "Classer les procédés de traitement des matériaux en grandes familles.",
      "Associer à chaque famille de procédés ses principes, ses épaisseurs et ses domaines d'emploi.",
      "Situer l'entreprise de traitement dans la chaîne de fabrication d'un produit industriel.",
      "Employer le vocabulaire de base du métier : substrat, revêtement, couche, gamme, ligne."
     ],
     "sections": [
      {
       "titre": "Pourquoi traiter une surface ?",
       "contenu": "\n<p>Une pièce mécanique est conçue pour résister à des efforts, mais c'est par sa <strong>surface</strong> qu'elle rencontre son environnement : l'air humide, l'eau salée, les huiles, les frottements, la main de l'utilisateur, le regard du client. Le cœur de la pièce, appelé <strong>substrat</strong> (ou métal de base), est choisi pour ses propriétés mécaniques et son coût ; la surface, elle, doit souvent posséder des propriétés que le substrat n'a pas. Un acier de construction est solide et bon marché, mais il rouille ; un alliage d'aluminium est léger, mais il se raye facilement ; un plastique ABS est facile à mouler, mais il n'a pas l'aspect du métal.</p>\n<p>Le <strong>traitement des matériaux</strong> regroupe l'ensemble des procédés qui modifient la surface d'une pièce, ou qui y déposent une couche, pour lui donner une <strong>fonction de surface</strong> précise sans changer sa forme ni ses dimensions de façon notable. Les épaisseurs mises en jeu vont de quelques dixièmes de micromètre pour un chrome décoratif à quelques dixièmes de millimètre pour un chrome dur rectifié ou une projection thermique.</p>\n<p>Le bac pro forme l'<strong>opérateur</strong> ou le <strong>technicien d'atelier</strong> qui prépare, conduit et surveille ces traitements. Les entreprises clientes appartiennent à l'automobile, l'aéronautique, le ferroviaire, l'électronique, l'électroménager, la lunetterie, la bijouterie, le médical ou le bâtiment. Certaines entreprises traitent leurs propres pièces dans un atelier intégré ; beaucoup d'autres sont des <strong>sous-traitants</strong> spécialisés qui reçoivent des lots de pièces de nombreux donneurs d'ordres.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chez un sous-traitant, chaque lot arrive avec un bon de livraison, un plan ou une référence de spécification. Avant de toucher aux pièces, l'opérateur vérifie que le traitement demandé correspond bien à une gamme existante de l'atelier. Une pièce mal identifiée qui passe dans le mauvais bain est souvent irrécupérable.</div>"
      },
      {
       "titre": "Les grandes fonctions de surface",
       "contenu": "\n<p>Une même pièce peut cumuler plusieurs fonctions ; le cahier des charges les hiérarchise. Les principales sont les suivantes.</p>\n<table>\n<thead><tr><th>Fonction</th><th>Ce que l'on recherche</th><th>Exemples de traitements</th></tr></thead>\n<tbody>\n<tr><td>Protection contre la corrosion</td><td>Retarder la dégradation du substrat par le milieu</td><td>Zingage, galvanisation, peinture, anodisation, phosphatation + peinture</td></tr>\n<tr><td>Décoration, aspect</td><td>Couleur, brillant, toucher, uniformité</td><td>Nickel-chrome brillant, anodisation colorée, laquage poudre, dorure</td></tr>\n<tr><td>Résistance à l'usure et au frottement</td><td>Dureté superficielle, faible coefficient de frottement</td><td>Chrome dur, nickel chimique, anodisation dure, cémentation, nitruration</td></tr>\n<tr><td>Fonction électrique</td><td>Conductivité, faible résistance de contact, soudabilité</td><td>Argenture, dorure, étamage</td></tr>\n<tr><td>Accrochage</td><td>Préparer l'adhérence d'une couche suivante</td><td>Phosphatation, sablage, sous-couche de cuivre</td></tr>\n<tr><td>Rechargement, réparation</td><td>Reconstituer une cote usée</td><td>Chrome dur épais, nickel épais, projection thermique</td></tr>\n<tr><td>Propriétés mécaniques à cœur et en surface</td><td>Dureté, ténacité, tenue en fatigue</td><td>Trempe, revenu, recuit, traitements thermochimiques</td></tr>\n</tbody>\n</table>\n<p>On distingue deux logiques. Dans un <strong>revêtement</strong>, on ajoute de la matière : une couche d'un autre matériau se forme au-dessus du substrat (zinc sur acier, peinture sur aluminium). Dans une <strong>transformation de surface</strong> ou <strong>conversion</strong>, c'est le substrat lui-même qui est modifié : l'aluminium se transforme en oxyde lors de l'anodisation, l'acier s'enrichit en carbone lors de la cémentation. Cette distinction a des conséquences pratiques : un revêtement augmente les cotes de la pièce, alors qu'une conversion peut à la fois consommer du métal et faire « gonfler » la surface.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on ne choisit pas un traitement, on choisit une <strong>fonction</strong>, puis le traitement qui la remplit sur le substrat donné, au coût et dans les contraintes d'environnement acceptables.</div>"
      },
      {
       "titre": "Les familles de procédés",
       "contenu": "\n<p>Les procédés se regroupent selon le phénomène physique ou chimique qui crée la couche.</p>\n<h4>Procédés par voie humide (en cuves)</h4>\n<ul>\n<li><strong>Dépôts électrolytiques</strong> : la pièce est la cathode d'une cellule d'électrolyse ; un courant continu fait déposer le métal dissous dans le bain (zinc, nickel, chrome, cuivre, étain, argent, or).</li>\n<li><strong>Dépôts chimiques</strong> (ou autocatalytiques) : le métal se dépose sans courant extérieur, grâce à un réducteur contenu dans le bain (nickel chimique).</li>\n<li><strong>Conversions chimiques</strong> : la surface réagit avec le bain pour former une couche de composés du métal de base (phosphatation, passivation, chromatation).</li>\n<li><strong>Conversion électrolytique</strong> : la pièce est l'anode ; c'est l'oxydation anodique, ou <strong>anodisation</strong>, de l'aluminium et du titane.</li>\n</ul>\n<h4>Procédés par voie sèche ou thermique</h4>\n<ul>\n<li><strong>Immersion en métal fondu</strong> : galvanisation à chaud dans du zinc liquide.</li>\n<li><strong>Projection thermique</strong> : un métal ou une céramique fondu est projeté sur la pièce (métallisation).</li>\n<li><strong>Dépôts sous vide</strong> : couches très minces par évaporation ou pulvérisation (PVD), ou par réaction de gaz (CVD).</li>\n<li><strong>Traitements thermiques et thermochimiques</strong> : chauffage et refroidissement contrôlés, éventuellement en présence d'un milieu riche en carbone ou en azote.</li>\n</ul>\n<h4>Revêtements organiques</h4>\n<p>Peintures liquides, peintures en poudre, cataphorèse, vernis : un film de polymère est appliqué puis séché ou cuit.</p>\n<table>\n<thead><tr><th>Procédé</th><th>Épaisseur courante</th><th>Particularité</th></tr></thead>\n<tbody>\n<tr><td>Chrome décoratif</td><td>0,2 à 0,5 µm</td><td>Toujours sur sous-couche de nickel</td></tr>\n<tr><td>Zingage électrolytique</td><td>5 à 25 µm</td><td>Protection sacrificielle de l'acier</td></tr>\n<tr><td>Anodisation de protection</td><td>5 à 25 µm</td><td>Couche d'oxyde d'aluminium</td></tr>\n<tr><td>Peinture poudre</td><td>60 à 120 µm</td><td>Film organique cuit</td></tr>\n<tr><td>Galvanisation à chaud</td><td>45 à plus de 100 µm</td><td>Alliage fer-zinc lié au substrat</td></tr>\n<tr><td>Chrome dur</td><td>10 à plus de 300 µm</td><td>Souvent rectifié après dépôt</td></tr>\n</tbody>\n</table>\n<p>Ces valeurs sont des ordres de grandeur pour se repérer ; la valeur exigée pour une pièce donnée figure toujours dans sa spécification.</p>"
      },
      {
       "titre": "La gamme de traitement et la ligne",
       "contenu": "\n<p>Aucun traitement ne se fait en une seule opération. La pièce suit une <strong>gamme de traitement</strong>, c'est-à-dire une suite ordonnée d'<strong>opérations unitaires</strong> : préparation, rinçages, traitement principal, post-traitements, séchage, contrôle. Une gamme typique de zingage d'une vis en acier comprend par exemple un dégraissage, un rinçage, un décapage, deux rinçages, le zingage, deux rinçages, une passivation, un rinçage et un séchage.</p>\n<p>Les cuves sont alignées dans une <strong>ligne de traitement</strong>. Les pièces y circulent montées sur des <strong>montages</strong> (crochets, cadres) pour les grosses pièces ou en vrac dans des <strong>tonneaux</strong> rotatifs pour les petites pièces (vis, écrous, clips). Le déplacement est manuel sur les petites lignes, assuré par un pont automatique ou un robot sur les lignes de production.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour décrire un procédé, utiliser toujours la même grille.\n<ol>\n<li>Quel est le <strong>substrat</strong> ?</li>\n<li>Quelle est la <strong>fonction</strong> attendue ?</li>\n<li>Quel <strong>phénomène</strong> crée la couche : électrolyse, réaction chimique, fusion, diffusion, polymérisation ?</li>\n<li>Quels sont les <strong>paramètres</strong> à maîtriser : composition du bain, température, pH, densité de courant, temps ?</li>\n<li>Quelle est l'<strong>épaisseur</strong> ou la grandeur contrôlée ?</li>\n<li>Quels <strong>risques</strong> et quels <strong>effluents</strong> le procédé génère-t-il ?</li>\n</ol>\nExemple appliqué à l'anodisation : substrat alliage d'aluminium ; fonction protection et décoration ; phénomène oxydation électrolytique à l'anode ; paramètres concentration en acide sulfurique, température, densité de courant, temps ; grandeur contrôlée épaisseur d'oxyde en micromètres ; risques acide sulfurique et soude, effluents acides et alcalins chargés en aluminium.</div>"
      },
      {
       "titre": "Le traitement dans la vie du produit",
       "contenu": "\n<p>Le traitement intervient en général <strong>après l'usinage et le formage</strong> et <strong>avant l'assemblage</strong>. Cette place dans le processus a plusieurs conséquences :</p>\n<ul>\n<li>la pièce arrive avec des résidus de fabrication (huiles de coupe, oxydes de soudage, calamine de forge, poussières de polissage) qu'il faut éliminer : la préparation de surface est souvent la cause principale des défauts ;</li>\n<li>les cotes fonctionnelles ont été réalisées avant traitement : le bureau des méthodes doit prévoir la surépaisseur du revêtement, en particulier sur les filetages et les alésages ;</li>\n<li>certains traitements modifient les propriétés du substrat : l'hydrogène produit en décapage ou en électrolyse peut fragiliser un acier très résistant, une cuisson de peinture peut faire perdre de la dureté à un alliage d'aluminium traité ;</li>\n<li>la pièce traitée doit être emballée, protégée et tracée jusqu'au client.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un filetage M6 recouvert de 12 µm de zinc sur chaque flanc peut ne plus se visser dans un taraudage non traité. Les normes de visserie prévoient des tolérances de filetage adaptées ; il ne faut jamais « forcer » un dépôt plus épais que la spécification pour « mieux protéger ».</div>\n<p>Enfin, le traitement est aussi une activité <strong>réglementée</strong> : les bains contiennent des produits dangereux et les rejets sont surveillés. Le métier exige donc autant de rigueur sur la sécurité et l'environnement que sur la qualité du dépôt.</p>"
      },
      {
       "titre": "Les acteurs et les compétences du métier",
       "contenu": "\n<p>Dans un atelier de traitement, plusieurs fonctions travaillent ensemble.</p>\n<table>\n<thead><tr><th>Fonction</th><th>Rôle principal</th></tr></thead>\n<tbody>\n<tr><td>Opérateur, conducteur de ligne</td><td>Charge et décharge les pièces, lance les cycles, surveille les paramètres, réalise les autocontrôles</td></tr>\n<tr><td>Laborantin, technicien de laboratoire</td><td>Analyse les bains, prescrit les ajouts, réalise les contrôles d'épaisseur et les essais</td></tr>\n<tr><td>Chef d'équipe, responsable de ligne</td><td>Organise la production, gère les priorités, traite les dérives</td></tr>\n<tr><td>Agent de station d'épuration</td><td>Conduit le traitement des effluents et suit les rejets</td></tr>\n<tr><td>Service qualité</td><td>Gère les spécifications clients, les non-conformités, les audits</td></tr>\n<tr><td>Maintenance</td><td>Entretient redresseurs, pompes, filtres, chauffages, automatismes</td></tr>\n</tbody>\n</table>\n<p>Le titulaire du bac pro occupe d'abord un poste d'opérateur qualifié ou de conducteur de ligne, puis peut évoluer vers le laboratoire, la conduite d'équipe ou, après un BTS Traitement des matériaux, vers les méthodes et la qualité. Ses compétences couvrent six activités : <strong>préparer</strong> pièces, produits et installations ; <strong>conduire</strong> et surveiller ; <strong>diagnostiquer</strong> les dysfonctionnements ; assurer la <strong>maintenance de premier niveau</strong> ; participer à la <strong>qualité</strong> ; appliquer les règles d'<strong>hygiène, de sécurité et d'environnement</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'opérateur en traitement des matériaux est un conducteur de procédé chimique et électrique appliqué à des pièces mécaniques. Il doit comprendre la chimie de ses bains, l'électricité de ses redresseurs et la fonction des pièces qu'il traite.</div>"
      }
     ],
     "points_cles": [
      "Le substrat assure la résistance mécanique ; la surface traitée apporte une fonction que le substrat n'a pas.",
      "Les principales fonctions de surface sont la protection contre la corrosion, l'aspect, la résistance à l'usure, la fonction électrique et l'accrochage.",
      "Un revêtement ajoute de la matière ; une conversion transforme le substrat lui-même.",
      "Les procédés se classent en voie humide (électrolytique, chimique, conversion), voie sèche ou thermique, et revêtements organiques.",
      "Les épaisseurs vont de quelques dixièmes de micromètre à plusieurs centaines de micromètres selon le procédé.",
      "Une gamme de traitement est une suite ordonnée d'opérations unitaires réalisées dans une ligne.",
      "Le traitement se place après l'usinage et avant l'assemblage : surépaisseurs et fragilisation doivent être anticipées.",
      "Le métier est réglementé par la sécurité chimique et la protection de l'environnement."
     ],
     "lexique": [
      {
       "terme": "Substrat",
       "def": "Matériau de base de la pièce, sur lequel ou dans lequel on réalise le traitement."
      },
      {
       "terme": "Revêtement",
       "def": "Couche d'un matériau différent déposée sur le substrat."
      },
      {
       "terme": "Conversion",
       "def": "Transformation chimique ou électrochimique de la surface du substrat en un composé adhérent."
      },
      {
       "terme": "Fonction de surface",
       "def": "Propriété attendue de la surface traitée : protection, aspect, dureté, conductivité, accrochage."
      },
      {
       "terme": "Gamme de traitement",
       "def": "Suite ordonnée des opérations unitaires qu'une pièce subit pour obtenir le traitement spécifié."
      },
      {
       "terme": "Ligne de traitement",
       "def": "Ensemble de cuves et d'équipements disposés pour réaliser une ou plusieurs gammes."
      },
      {
       "terme": "Montage",
       "def": "Support (crochet, cadre) sur lequel on accroche les pièces pour les traiter et assurer le contact électrique."
      },
      {
       "terme": "Tonneau",
       "def": "Cylindre rotatif perforé dans lequel on traite les petites pièces en vrac."
      },
      {
       "terme": "Sous-traitant",
       "def": "Entreprise qui réalise le traitement de pièces appartenant à un donneur d'ordres."
      }
     ]
    },
    {
     "id": "btdm-substrats",
     "titre": "Les substrats : métaux, alliages et plastiques à traiter",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Reconnaître les principaux substrats traités en atelier et lire leur désignation normalisée.",
      "Relier la nature du substrat aux précautions de préparation et aux traitements possibles.",
      "Expliquer l'influence de l'état de surface et de la rugosité sur le résultat du traitement.",
      "Repérer les substrats sensibles : aciers à haute résistance, alliages moulés, matériaux assemblés.",
      "Interpréter les grandeurs physiques utiles : masse volumique, dureté, conductivité."
     ],
     "sections": [
      {
       "titre": "Le substrat commande la gamme",
       "contenu": "\n<p>Deux pièces qui doivent recevoir le même revêtement de nickel ne suivront pas la même gamme si l'une est en acier, l'autre en laiton et une troisième en alliage de zinc moulé. Chaque <strong>substrat</strong> réagit à sa manière aux bains de dégraissage et de décapage, possède sa propre couche d'oxyde naturelle et impose ses propres limites de température. Identifier précisément le matériau est donc la première étape de toute préparation de production.</p>\n<p>Le cours de seconde a présenté les grandes familles de matériaux et leur désignation. On s'intéresse ici à ce qui compte pour le traiteur : la <strong>réactivité chimique</strong> de la surface, la présence d'éléments d'alliage gênants, la sensibilité à l'hydrogène et à la chaleur, et l'état de surface d'arrivée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la désignation du matériau figure dans le cartouche du plan ou sur le bon de commande. Si elle manque, on ne « devine » pas : on la demande au client, car une erreur de substrat peut détruire le lot ou le bain.</div>"
      },
      {
       "titre": "Les aciers et les fontes",
       "contenu": "\n<p>Les <strong>aciers</strong> sont les substrats les plus traités. Les aciers non alliés (par exemple S235 ou C45) se dégraissent et se décapent facilement en milieu acide ; ils reçoivent zinc, nickel, chrome, phosphatation, peinture ou galvanisation. Leur point faible est la rouille, d'où la nécessité de traiter rapidement après décapage et de ne jamais laisser une pièce décapée sécher à l'air humide.</p>\n<p>Les <strong>aciers à haute résistance</strong> (résistance à la traction supérieure à environ 1 000 MPa, ou dureté élevée après traitement thermique), comme les ressorts, les vis de classe 10.9 et 12.9 ou certaines pièces aéronautiques, sont sensibles à la <strong>fragilisation par l'hydrogène</strong>. L'hydrogène atomique produit en décapage acide ou à la cathode pendant l'électrolyse diffuse dans le métal et peut provoquer des ruptures différées, sans déformation, plusieurs heures ou jours après le traitement. Les spécifications imposent alors des décapages limités, des procédés à haut rendement cathodique et un <strong>dégazage</strong> : un étuvage, en général autour de 200 °C pendant plusieurs heures, réalisé dans un délai court après le dépôt.</p>\n<p>Les <strong>aciers inoxydables</strong> contiennent au moins 10,5 % de chrome, qui forme une couche passive d'oxyde très mince et protectrice. Cette couche gêne l'adhérence des dépôts : on la retire par une activation spécifique (par exemple un prénickelage dans un bain très acide riche en chlorures, appelé <strong>nickel de Wood</strong>). On peut aussi renforcer volontairement cette passivité par un traitement de <strong>passivation</strong> en milieu acide.</p>\n<p>Les <strong>fontes</strong> contiennent du graphite et sont poreuses : elles retiennent les huiles et les bains, ce qui provoque des taches et des cloques. Elles demandent un dégraissage poussé et, souvent, un grenaillage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une vis 12.9 zinguée sans dégazage peut passer tous les contrôles d'aspect et d'épaisseur, puis casser au montage chez le client. Le dégazage est une opération de sécurité : il ne se supprime pas pour gagner du temps, et son délai de démarrage après le dépôt est imposé par la spécification.</div>"
      },
      {
       "titre": "L'aluminium et ses alliages",
       "contenu": "\n<p>L'aluminium (masse volumique 2,7 g/cm³) se couvre instantanément à l'air d'une fine couche d'alumine. Il est <strong>amphotère</strong> : il est attaqué à la fois par les acides forts et par les bases fortes comme la soude. Cette propriété est utilisée pour le préparer (dégraissage alcalin, satinage à la soude), mais elle impose des temps d'immersion courts et contrôlés.</p>\n<p>Les alliages sont désignés par un numéro à quatre chiffres (série 1000 à 7000). Pour le traiteur, la composition compte beaucoup :</p>\n<table>\n<thead><tr><th>Série</th><th>Élément principal</th><th>Comportement en anodisation</th></tr></thead>\n<tbody>\n<tr><td>1000</td><td>Aluminium quasi pur</td><td>Couche très claire et brillante</td></tr>\n<tr><td>2000</td><td>Cuivre</td><td>Anodisation difficile, couche plus tendre et irrégulière</td></tr>\n<tr><td>5000</td><td>Magnésium</td><td>Bonne aptitude, aspect correct</td></tr>\n<tr><td>6000</td><td>Magnésium et silicium</td><td>Très bonne aptitude, profilés du bâtiment</td></tr>\n<tr><td>7000</td><td>Zinc</td><td>Aptitude correcte, alliages aéronautiques</td></tr>\n<tr><td>Alliages de fonderie riches en silicium</td><td>Silicium</td><td>Couche grise, foncée et irrégulière</td></tr>\n</tbody>\n</table>\n<p>Après le dégraissage et le satinage, il reste à la surface des alliages un dépôt sombre et pulvérulent de composés insolubles (cuivre, silicium, fer) appelé <strong>smut</strong> ; on l'élimine par un <strong>dérochage</strong> (ou neutralisation) en milieu acide.</p>"
      },
      {
       "titre": "Cuivre, laiton, zinc et autres métaux",
       "contenu": "\n<p>Le <strong>cuivre</strong> et ses alliages (laitons cuivre-zinc, bronzes cuivre-étain) sont courants en connectique, robinetterie et décoration. Ils se décapent en milieu acide doux et acceptent bien le nickel, l'étain, l'argent et l'or. Le laiton contenant du plomb (laiton de décolletage) peut laisser des traces si le décapage est mal adapté.</p>\n<p>Les <strong>alliages de zinc moulés sous pression</strong>, appelés couramment zamak, servent aux poignées, boutons et accessoires décoratifs. Ils sont très sensibles aux acides et aux bases forts et présentent souvent une porosité de fonderie. Leur gamme de nickelage commence en général par une <strong>sous-couche de cuivre en bain alcalin</strong>, qui protège le zinc avant les bains plus agressifs.</p>\n<p>Le <strong>titane</strong> et le <strong>magnésium</strong>, employés en aéronautique et en médical, demandent des gammes spécifiques que l'on rencontre surtout chez les sous-traitants spécialisés.</p>\n<p>Les <strong>pièces multi-matériaux</strong> (insert en laiton dans un corps en aluminium, acier soudé avec un métal d'apport différent) sont délicates : un bain adapté à un des matériaux peut attaquer l'autre, et le contact entre deux métaux différents dans un électrolyte crée une pile qui accélère la corrosion du plus réactif.</p>"
      },
      {
       "titre": "Les plastiques métallisés",
       "contenu": "\n<p>De nombreuses pièces d'aspect (logos, enjoliveurs, poignées, robinetterie) sont en <strong>ABS</strong> ou en mélange ABS/polycarbonate chromé. Le plastique n'est pas conducteur : on ne peut pas y déposer directement un métal par électrolyse. La gamme de métallisation comprend :</p>\n<ol>\n<li>un <strong>mordançage</strong> qui attaque sélectivement le butadiène de l'ABS et crée des micro-cavités d'accrochage ;</li>\n<li>une <strong>activation</strong> par des germes de palladium ;</li>\n<li>un <strong>dépôt chimique</strong> de nickel ou de cuivre qui rend la surface conductrice ;</li>\n<li>les dépôts électrolytiques classiques : cuivre, nickel, chrome.</li>\n</ol>\n<p>Le mordançage historique utilise de l'acide chromique, substance soumise à autorisation au titre du règlement européen REACH ; des procédés de remplacement sans chrome hexavalent se développent. Les pièces plastiques supportent mal la chaleur : les températures des bains et du séchage sont limitées.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une ligne de plastique chromé, un défaut d'adhérence apparaît souvent sous forme de cloques après un essai de choc thermique. La cause la plus fréquente se trouve dans le moulage (contraintes internes, agent démoulant) et non dans les bains : l'opérateur doit savoir transmettre l'information à son responsable plutôt que de modifier seul les réglages.</div>"
      },
      {
       "titre": "État de surface et propriétés utiles au traiteur",
       "contenu": "\n<p>Un dépôt électrolytique mince <strong>reproduit</strong> la surface qu'il recouvre : une rayure reste visible sous un nickel brillant, un défaut de polissage ressort sous un chrome. Certains bains dits <strong>nivelants</strong> atténuent les petites irrégularités, mais aucun ne fait disparaître un défaut grossier. La rugosité se mesure par le paramètre <strong>Ra</strong>, écart moyen arithmétique du profil, exprimé en micromètres. Une surface polie miroir a un Ra inférieur à 0,1 µm, une surface usinée courante se situe entre 0,8 et 3,2 µm, une surface sablée peut dépasser 5 µm.</p>\n<p>Les grandeurs physiques suivantes interviennent dans les calculs du métier :</p>\n<table>\n<thead><tr><th>Métal</th><th>Masse volumique (g/cm³)</th><th>Masse molaire (g/mol)</th></tr></thead>\n<tbody>\n<tr><td>Aluminium</td><td>2,7</td><td>27,0</td></tr>\n<tr><td>Fer</td><td>7,87</td><td>55,8</td></tr>\n<tr><td>Zinc</td><td>7,14</td><td>65,4</td></tr>\n<tr><td>Nickel</td><td>8,9</td><td>58,7</td></tr>\n<tr><td>Cuivre</td><td>8,96</td><td>63,5</td></tr>\n<tr><td>Chrome</td><td>7,19</td><td>52,0</td></tr>\n<tr><td>Argent</td><td>10,5</td><td>107,9</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la surface à traiter d'un lot, donnée indispensable pour régler un courant ou estimer une consommation.\n<ol>\n<li>Décomposer la pièce en formes simples : cylindre, disque, rectangle.</li>\n<li>Calculer chaque surface en dm² (1 dm² = 100 cm²).</li>\n<li>Additionner, puis multiplier par le nombre de pièces.</li>\n</ol>\nExemple : un axe cylindrique de diamètre 20 mm et de longueur 100 mm. Surface latérale : π × 2 cm × 10 cm = 62,8 cm². Deux extrémités : 2 × π × 1² = 6,3 cm². Total : 69,1 cm², soit 0,69 dm² par pièce. Pour un montage de 40 axes : 40 × 0,69 = 27,6 dm². Avec une densité de courant de 2 A/dm², il faut régler environ 55 A.</div>"
      }
     ],
     "points_cles": [
      "Identifier le substrat est la première étape : il conditionne la préparation, le traitement et les précautions.",
      "Les aciers à haute résistance sont sensibles à la fragilisation par l'hydrogène et exigent un dégazage dans un délai imposé.",
      "Les inox portent une couche passive qui doit être activée avant un dépôt.",
      "L'aluminium est amphotère ; la composition de l'alliage influence fortement l'anodisation.",
      "Les alliages de zinc moulés et les plastiques demandent des gammes spécifiques avec sous-couches.",
      "Un dépôt mince reproduit l'état de surface : la qualité d'aspect se prépare avant le bain.",
      "La rugosité s'exprime par Ra en micromètres.",
      "La surface à traiter, en dm², est la base des réglages de courant et des calculs de consommation."
     ],
     "lexique": [
      {
       "terme": "Fragilisation par l'hydrogène",
       "def": "Perte de ductilité d'un acier à haute résistance due à l'hydrogène absorbé, pouvant provoquer des ruptures différées."
      },
      {
       "terme": "Dégazage",
       "def": "Étuvage réalisé après décapage ou dépôt pour faire ressortir l'hydrogène absorbé par l'acier."
      },
      {
       "terme": "Couche passive",
       "def": "Film d'oxyde très mince et protecteur qui se forme naturellement sur l'inox, l'aluminium ou le chrome."
      },
      {
       "terme": "Amphotère",
       "def": "Se dit d'un métal attaqué à la fois par les acides et par les bases, comme l'aluminium ou le zinc."
      },
      {
       "terme": "Smut",
       "def": "Dépôt sombre de composés insolubles laissé sur un alliage d'aluminium après une attaque alcaline."
      },
      {
       "terme": "Dérochage",
       "def": "Bain acide qui élimine le smut et neutralise la surface d'un alliage d'aluminium."
      },
      {
       "terme": "Mordançage",
       "def": "Attaque chimique d'un plastique destinée à créer des micro-cavités d'accrochage avant métallisation."
      },
      {
       "terme": "Ra",
       "def": "Écart moyen arithmétique du profil de rugosité, exprimé en micromètres."
      },
      {
       "terme": "Bain nivelant",
       "def": "Bain dont le dépôt atténue les petites irrégularités de la surface."
      }
     ]
    },
    {
     "id": "btdm-corrosion",
     "titre": "Corrosion des métaux et principes de protection",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Expliquer la corrosion humide comme une réaction d'oxydoréduction entre un métal et son milieu.",
      "Utiliser la classification électrochimique pour prévoir le comportement de deux métaux en contact.",
      "Distinguer protection par barrière, protection sacrificielle et protection par inhibition.",
      "Identifier les principales formes de corrosion rencontrées sur des pièces traitées.",
      "Décrire les essais de corrosion accélérée et interpréter leurs résultats."
     ],
     "sections": [
      {
       "titre": "La corrosion, une réaction d'oxydoréduction",
       "contenu": "\n<p>La <strong>corrosion</strong> est la dégradation d'un métal par réaction chimique ou électrochimique avec son environnement. Dans l'atmosphère, dans l'eau ou dans un sol humide, il s'agit presque toujours d'une <strong>corrosion humide</strong>, de nature électrochimique : le métal perd des électrons, il est <strong>oxydé</strong>, et passe à l'état d'ions ; une autre espèce du milieu gagne ces électrons, elle est <strong>réduite</strong>.</p>\n<p>Pour le fer exposé à l'eau aérée :</p>\n<ul>\n<li>à la zone <strong>anodique</strong> : Fe → Fe<sup>2+</sup> + 2 e<sup>-</sup> (le métal se dissout) ;</li>\n<li>à la zone <strong>cathodique</strong> : O<sub>2</sub> + 2 H<sub>2</sub>O + 4 e<sup>-</sup> → 4 OH<sup>-</sup> (le dioxygène dissous est réduit) ;</li>\n<li>les ions Fe<sup>2+</sup> et OH<sup>-</sup> se rencontrent, s'oxydent encore à l'air et forment la rouille, un mélange d'oxydes et d'hydroxydes de fer hydratés, poreux et non protecteurs.</li>\n</ul>\n<p>En milieu acide, la réaction cathodique est la réduction des ions H<sup>+</sup> en dihydrogène : 2 H<sup>+</sup> + 2 e<sup>-</sup> → H<sub>2</sub>. C'est exactement ce qui se passe dans un bain de décapage, où l'on utilise volontairement la corrosion pour dissoudre la rouille et la calamine.</p>\n<p>Une corrosion humide a donc besoin de quatre éléments, qui forment une <strong>pile de corrosion</strong> : une anode, une cathode, un conducteur électronique qui les relie (le métal lui-même) et un <strong>électrolyte</strong> (eau contenant des ions). Supprimer un seul de ces éléments arrête la corrosion : c'est le principe de toutes les protections.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le métal qui se corrode est toujours celui qui joue le rôle d'<strong>anode</strong>. La présence de sels (chlorures de la mer ou du salage des routes) augmente la conductivité de l'électrolyte et accélère fortement la corrosion.</div>"
      },
      {
       "titre": "Potentiels et couples galvaniques",
       "contenu": "\n<p>Chaque couple oxydant/réducteur métallique (Zn<sup>2+</sup>/Zn, Fe<sup>2+</sup>/Fe, Cu<sup>2+</sup>/Cu…) possède un <strong>potentiel standard</strong>, exprimé en volts par rapport à l'électrode standard à hydrogène. Plus le potentiel est bas, plus le métal a tendance à s'oxyder.</p>\n<table>\n<thead><tr><th>Couple</th><th>Potentiel standard (V)</th><th>Caractère</th></tr></thead>\n<tbody>\n<tr><td>Mg<sup>2+</sup>/Mg</td><td>-2,37</td><td>Très réducteur, se corrode facilement</td></tr>\n<tr><td>Al<sup>3+</sup>/Al</td><td>-1,66</td><td>Réactif mais protégé par son oxyde</td></tr>\n<tr><td>Zn<sup>2+</sup>/Zn</td><td>-0,76</td><td>Réducteur</td></tr>\n<tr><td>Cr<sup>3+</sup>/Cr</td><td>-0,74</td><td>Réactif mais passivé</td></tr>\n<tr><td>Fe<sup>2+</sup>/Fe</td><td>-0,44</td><td>Réducteur moyen</td></tr>\n<tr><td>Ni<sup>2+</sup>/Ni</td><td>-0,25</td><td>Moyennement noble</td></tr>\n<tr><td>Sn<sup>2+</sup>/Sn</td><td>-0,14</td><td>Moyennement noble</td></tr>\n<tr><td>H<sup>+</sup>/H<sub>2</sub></td><td>0</td><td>Référence</td></tr>\n<tr><td>Cu<sup>2+</sup>/Cu</td><td>+0,34</td><td>Noble</td></tr>\n<tr><td>Ag<sup>+</sup>/Ag</td><td>+0,80</td><td>Très noble</td></tr>\n<tr><td>Au<sup>3+</sup>/Au</td><td>+1,50</td><td>Très noble</td></tr>\n</tbody>\n</table>\n<p>Quand deux métaux différents sont en contact électrique dans un électrolyte, ils forment un <strong>couple galvanique</strong> : le métal de plus bas potentiel devient l'anode et se corrode plus vite ; le plus noble est protégé. En pratique, on utilise des tableaux de potentiels mesurés dans l'eau de mer, car les métaux passivés (inox, aluminium) s'y comportent différemment de ce que prévoit le tableau standard.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une vis en inox dans une tôle d'aluminium extérieure forme un couple galvanique défavorable à l'aluminium, surtout si la surface de la vis (cathode) est grande par rapport à la zone d'aluminium exposée. Une petite anode face à une grande cathode se corrode très vite.</div>"
      },
      {
       "titre": "Les formes de corrosion",
       "contenu": "\n<table>\n<thead><tr><th>Forme</th><th>Description</th><th>Exemple en traitement de surface</th></tr></thead>\n<tbody>\n<tr><td>Corrosion généralisée (uniforme)</td><td>Attaque régulière de toute la surface</td><td>Acier nu laissé en atmosphère humide</td></tr>\n<tr><td>Corrosion galvanique</td><td>Attaque du métal le moins noble d'un couple</td><td>Acier mis à nu sous un dépôt de nickel rayé</td></tr>\n<tr><td>Corrosion par piqûres</td><td>Petits trous profonds, souvent dus aux chlorures</td><td>Inox ou aluminium en milieu salin</td></tr>\n<tr><td>Corrosion caverneuse</td><td>Attaque dans un interstice mal aéré</td><td>Sous un joint, entre deux tôles agrafées</td></tr>\n<tr><td>Corrosion sous contrainte</td><td>Fissuration sous l'effet conjoint d'une contrainte et du milieu</td><td>Laitons en atmosphère ammoniacale</td></tr>\n<tr><td>Corrosion filiforme</td><td>Filaments sous un film de peinture</td><td>Aluminium laqué mal préparé en bord de mer</td></tr>\n</tbody>\n</table>\n<p>Le cas des revêtements plus nobles que le substrat est important. Un dépôt de nickel sur acier est une <strong>barrière</strong> : tant qu'il est continu, il protège. Mais s'il présente un pore ou une rayure jusqu'à l'acier, la petite surface d'acier exposée devient l'anode d'une pile dont la cathode est tout le nickel : l'acier se perce localement et la rouille apparaît en points. C'est pourquoi on dépose des épaisseurs minimales de nickel, et des systèmes multicouches (nickel semi-brillant puis nickel brillant) qui orientent la corrosion latéralement.</p>"
      },
      {
       "titre": "Les trois principes de protection",
       "contenu": "\n<h4>Protection par effet barrière</h4>\n<p>On isole le métal du milieu : peinture, vernis, revêtement métallique plus noble (nickel, chrome, étain sur acier), couche d'oxyde d'anodisation. L'efficacité dépend de la continuité et de l'épaisseur de la couche.</p>\n<h4>Protection sacrificielle (cathodique)</h4>\n<p>On recouvre ou on relie le métal à protéger avec un métal <strong>moins noble</strong>, qui se corrode à sa place. Le zinc sur l'acier en est l'exemple type : même en cas de rayure, le zinc environnant devient l'anode et l'acier reste protégé. La protection dure tant qu'il reste du zinc ; sa durée est donc à peu près proportionnelle à l'épaisseur du dépôt. Les produits de corrosion blancs du zinc, appelés <strong>rouille blanche</strong>, apparaissent avant la <strong>rouille rouge</strong> de l'acier.</p>\n<h4>Protection par passivation et inhibition</h4>\n<p>On crée ou on renforce une couche passive (passivation des inox, couches de conversion sur le zinc) ou on ajoute au milieu un <strong>inhibiteur</strong> de corrosion qui ralentit les réactions (inhibiteurs ajoutés aux bains de décapage pour limiter l'attaque du métal sain).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> revêtement plus noble que le substrat = protection par barrière, qui exige une couche sans défaut. Revêtement moins noble que le substrat = protection sacrificielle, qui tolère les petites blessures mais s'use.</div>"
      },
      {
       "titre": "Les essais de corrosion accélérée",
       "contenu": "\n<p>Pour qualifier un traitement sans attendre des années, on utilise des essais en enceinte. Le plus répandu est l'essai au <strong>brouillard salin neutre</strong> (désigné NSS), décrit par la norme NF EN ISO 9227 : les pièces sont exposées à un brouillard d'une solution de chlorure de sodium à 50 g/L, à 35 °C, de pH voisin de la neutralité. La même norme décrit des variantes acétiques (AASS) et cupro-acétiques (CASS), plus sévères, adaptées aux dépôts décoratifs nickel-chrome et aux anodisations.</p>\n<p>Le résultat s'exprime en <strong>heures d'exposition</strong> avant l'apparition d'un défaut défini par la spécification : par exemple « pas de rouille blanche avant 120 h, pas de rouille rouge avant 480 h » pour un zingage avec passivation et finition. On l'évalue par examen visuel selon des grilles normalisées.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un résultat d'essai au brouillard salin.\n<ol>\n<li>Relever l'exigence : type d'essai (NSS, AASS, CASS), durée, critère d'acceptation.</li>\n<li>Vérifier que les éprouvettes sont représentatives : même lot de pièces, même gamme, délai de vieillissement respecté avant l'essai.</li>\n<li>Comparer chaque observation au critère : nature du défaut (rouille blanche, rouille rouge, cloquage), surface concernée, zones exclues (arêtes, points de contact du montage).</li>\n<li>Conclure conforme ou non conforme, puis, en cas de non-conformité, rechercher la cause : épaisseur, passivation, rinçage, séchage.</li>\n</ol>\nExemple : exigence « 0 rouille rouge à 240 h NSS ». Trois pièces sur cinq présentent des points de rouille rouge à 168 h, tous situés au fond d'un trou borgne. La mesure d'épaisseur montre 2 µm de zinc dans le trou contre 10 µm en surface. Conclusion : non conforme ; cause probable, mauvaise répartition du dépôt dans les zones à faible densité de courant, à traiter par le montage ou le choix du bain.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les essais accélérés servent à comparer et à qualifier, pas à prédire une durée de vie réelle. Un client automobile complète souvent l'essai au brouillard salin par des essais cycliques (alternance humidité, sel, séchage), plus proches des conditions de route.</div>"
      }
     ],
     "points_cles": [
      "La corrosion humide est une réaction d'oxydoréduction : le métal anodique s'oxyde, une espèce du milieu se réduit.",
      "Une pile de corrosion exige anode, cathode, conducteur électronique et électrolyte.",
      "Plus le potentiel d'un métal est bas, plus il tend à se corroder ; dans un couple, le moins noble est attaqué.",
      "Un revêtement plus noble protège par barrière et doit être continu ; un pore provoque une corrosion localisée du substrat.",
      "Le zinc protège l'acier de façon sacrificielle, même en cas de rayure, tant qu'il en reste.",
      "Les chlorures accélèrent la corrosion et favorisent les piqûres.",
      "L'essai au brouillard salin neutre (NF EN ISO 9227) se fait à 35 °C avec une solution de NaCl à 50 g/L.",
      "Le résultat d'un essai se compare à un critère précis : type de défaut, durée, zone examinée."
     ],
     "lexique": [
      {
       "terme": "Oxydation",
       "def": "Perte d'électrons par une espèce chimique ; pour un métal, passage à l'état d'ion."
      },
      {
       "terme": "Réduction",
       "def": "Gain d'électrons par une espèce chimique."
      },
      {
       "terme": "Électrolyte",
       "def": "Milieu liquide conducteur contenant des ions."
      },
      {
       "terme": "Anode",
       "def": "Électrode où se produit l'oxydation ; en corrosion, zone où le métal se dissout."
      },
      {
       "terme": "Cathode",
       "def": "Électrode où se produit la réduction."
      },
      {
       "terme": "Couple galvanique",
       "def": "Association de deux métaux différents en contact dans un électrolyte, qui accélère la corrosion du moins noble."
      },
      {
       "terme": "Protection sacrificielle",
       "def": "Protection d'un métal par un métal moins noble qui se corrode à sa place."
      },
      {
       "terme": "Rouille blanche",
       "def": "Produits de corrosion blancs du zinc."
      },
      {
       "terme": "Inhibiteur",
       "def": "Produit ajouté en faible quantité à un milieu pour ralentir la corrosion."
      },
      {
       "terme": "Brouillard salin",
       "def": "Essai de corrosion accéléré en enceinte, sous pulvérisation continue d'une solution saline."
      }
     ]
    },
    {
     "id": "btdm-chimie-bains",
     "titre": "Chimie des bains : concentrations, pH et analyses",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Exprimer et convertir la concentration d'un bain en g/L, en mol/L et en pourcentage.",
      "Préparer une solution par dissolution ou par dilution et calculer les quantités.",
      "Interpréter le pH d'un bain et ses conséquences sur le procédé.",
      "Réaliser et exploiter un dosage par titrage pour contrôler un bain.",
      "Calculer un ajout de correction à partir d'un résultat d'analyse."
     ],
     "sections": [
      {
       "titre": "Un bain est une solution vivante",
       "contenu": "\n<p>Un <strong>bain</strong> de traitement est une <strong>solution</strong> aqueuse : un <strong>solvant</strong>, l'eau, dans lequel sont dissous des <strong>solutés</strong> (sels métalliques, acides, bases, complexants, additifs organiques). Sa composition évolue en permanence : le métal se dépose ou se dissout, l'eau s'évapore, les pièces emportent du bain à chaque sortie (c'est l'<strong>entraînement</strong>), les pièces mal rincées apportent des polluants de la cuve précédente, les additifs se décomposent sous l'effet du courant. Conduire une ligne, c'est maintenir chaque bain dans sa <strong>plage de fonctionnement</strong> grâce à des analyses régulières et à des ajouts calculés.</p>\n<p>Les constituants d'un bain jouent des rôles différents :</p>\n<ul>\n<li>le <strong>sel métallique</strong> apporte les ions du métal à déposer (sulfate de nickel, chlorure de zinc) ;</li>\n<li>les <strong>sels conducteurs</strong> augmentent la conductivité de la solution (chlorure de potassium) ;</li>\n<li>les <strong>tampons</strong> stabilisent le pH (acide borique dans un bain de nickel) ;</li>\n<li>les <strong>complexants</strong> retiennent les ions métalliques sous une forme stable et améliorent la répartition du dépôt ;</li>\n<li>les <strong>additifs</strong> (brillanteurs, nivelants, mouillants) modifient l'aspect et la structure du dépôt à très faible concentration, souvent en mL/L.</li>\n</ul>"
      },
      {
       "titre": "Exprimer une concentration",
       "contenu": "\n<p>La <strong>concentration massique</strong> C<sub>m</sub>, en g/L, est la masse de soluté dissoute par litre de solution : C<sub>m</sub> = m / V. C'est l'unité la plus utilisée sur les fiches techniques de bains.</p>\n<p>La <strong>concentration molaire</strong> C, en mol/L, est la quantité de matière de soluté par litre : C = n / V. On passe de l'une à l'autre avec la masse molaire M (g/mol) : C<sub>m</sub> = C × M.</p>\n<p>Les produits commerciaux concentrés sont souvent exprimés en <strong>pourcentage massique</strong> (acide sulfurique à 96 %, acide chlorhydrique à 33 %, soude à 30 %) avec leur <strong>masse volumique</strong> ou <strong>densité</strong>. Un litre d'acide sulfurique à 96 % pèse environ 1,84 kg et contient donc 0,96 × 1 840 = 1 766 g d'acide pur.</p>\n<table>\n<thead><tr><th>Produit</th><th>Formule</th><th>Masse molaire (g/mol)</th></tr></thead>\n<tbody>\n<tr><td>Acide sulfurique</td><td>H<sub>2</sub>SO<sub>4</sub></td><td>98,1</td></tr>\n<tr><td>Acide chlorhydrique</td><td>HCl</td><td>36,5</td></tr>\n<tr><td>Hydroxyde de sodium (soude)</td><td>NaOH</td><td>40,0</td></tr>\n<tr><td>Sulfate de nickel hexahydraté</td><td>NiSO<sub>4</sub>,6H<sub>2</sub>O</td><td>262,8</td></tr>\n<tr><td>Chlorure de zinc</td><td>ZnCl<sub>2</sub></td><td>136,3</td></tr>\n<tr><td>Acide borique</td><td>H<sub>3</sub>BO<sub>3</sub></td><td>61,8</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une fiche technique peut indiquer la concentration en <strong>sel</strong> (sulfate de nickel hexahydraté, 280 g/L) ou en <strong>métal</strong> (nickel, 62 g/L). Ce n'est pas la même grandeur : il y a 58,7 g de nickel dans 262,8 g de sel. Confondre les deux conduit à un ajout faux d'un facteur 4,5.</div>"
      },
      {
       "titre": "Préparer et diluer",
       "contenu": "\n<p>Lors d'une <strong>dilution</strong>, la quantité de soluté se conserve : C<sub>1</sub> × V<sub>1</sub> = C<sub>2</sub> × V<sub>2</sub>, où l'indice 1 désigne la solution concentrée prélevée et l'indice 2 la solution finale.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer 1 500 L d'un bain de décapage à 150 g/L d'acide chlorhydrique à partir d'acide commercial à 33 % (masse volumique 1,16 kg/L).\n<ol>\n<li>Masse d'acide pur nécessaire : 150 g/L × 1 500 L = 225 000 g = 225 kg.</li>\n<li>Masse d'acide pur contenue dans 1 L de commercial : 0,33 × 1 160 = 383 g, soit une concentration de 383 g/L.</li>\n<li>Volume de commercial : 225 000 / 383 = 587 L.</li>\n<li>Mode opératoire : remplir la cuve aux deux tiers d'eau, ajouter l'acide lentement sous aspiration, compléter à 1 500 L avec de l'eau, homogénéiser.</li>\n</ol>\nRésultat : environ 590 L d'acide commercial pour 1 500 L de bain.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on verse toujours l'<strong>acide dans l'eau</strong>, jamais l'inverse. La dilution de l'acide sulfurique concentré dégage beaucoup de chaleur ; de l'eau versée sur l'acide peut entrer en ébullition instantanée et projeter de l'acide.</div>"
      },
      {
       "titre": "Le pH et ses conséquences",
       "contenu": "\n<p>Le <strong>pH</strong> mesure l'acidité d'une solution : pH = −log [H<sub>3</sub>O<sup>+</sup>]. À 25 °C, une solution est acide si pH &lt; 7, neutre si pH = 7, basique si pH &gt; 7. Une variation d'une unité de pH correspond à un facteur 10 sur la concentration en ions H<sub>3</sub>O<sup>+</sup>.</p>\n<table>\n<thead><tr><th>Bain</th><th>pH typique</th><th>Conséquence d'une dérive</th></tr></thead>\n<tbody>\n<tr><td>Décapage chlorhydrique</td><td>Inférieur à 1</td><td>Contrôlé par l'acidité libre, pas par le pH</td></tr>\n<tr><td>Nickel type Watts</td><td>3,5 à 4,5</td><td>pH trop haut : dépôt cassant, piqûres, précipité d'hydroxyde ; trop bas : rendement en baisse</td></tr>\n<tr><td>Zinc acide</td><td>4,8 à 5,8</td><td>pH trop haut : dépôt terne et rugueux</td></tr>\n<tr><td>Zinc alcalin sans cyanure</td><td>Supérieur à 13</td><td>Contrôlé par la teneur en soude</td></tr>\n<tr><td>Dégraissage alcalin</td><td>11 à 13</td><td>Perte d'efficacité si l'alcalinité baisse</td></tr>\n</tbody>\n</table>\n<p>On mesure le pH au <strong>pH-mètre</strong>, étalonné chaque jour avec deux solutions tampons qui encadrent la valeur attendue (par exemple pH 4 et pH 7). Le papier pH ne donne qu'une indication grossière. La température influence la mesure : on mesure à la température prévue par le mode opératoire ou avec une compensation automatique.</p>\n<p>Pour les bains très acides ou très basiques, le pH n'est plus assez précis ; on dose l'<strong>acidité libre</strong> ou l'<strong>alcalinité</strong> par titrage.</p>"
      },
      {
       "titre": "Doser un bain par titrage",
       "contenu": "\n<p>Le <strong>titrage</strong> (ou dosage) consiste à faire réagir une <strong>prise d'essai</strong> connue du bain avec une <strong>solution titrante</strong> de concentration connue, versée à la burette jusqu'à l'<strong>équivalence</strong>, repérée par le virage d'un indicateur coloré ou par un saut de pH. À l'équivalence, les réactifs ont été introduits dans les proportions de l'équation de réaction.</p>\n<p>Pour un acide fort monoacide titré par la soude : C<sub>acide</sub> × V<sub>prise</sub> = C<sub>soude</sub> × V<sub>éq</sub>. Pour l'acide sulfurique, diacide, chaque mole d'acide consomme deux moles de soude : n(NaOH) = 2 × n(H<sub>2</sub>SO<sub>4</sub>).</p>\n<p>Les ions métalliques se dosent souvent par <strong>complexométrie</strong> à l'EDTA (nickel, zinc) ; les chlorures par argentimétrie. Le laboratoire suit un <strong>mode opératoire</strong> écrit pour chaque bain : volume de prise d'essai, dilution, réactifs, indicateur, formule de calcul.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler et corriger un bain d'anodisation sulfurique de 2 000 L dont la consigne est 200 g/L d'acide sulfurique.\n<ol>\n<li>Titrage : prise d'essai 5,0 mL, soude à 1,00 mol/L, volume équivalent 19,6 mL.</li>\n<li>Quantité de soude : 1,00 × 0,0196 = 0,0196 mol.</li>\n<li>Quantité d'acide : 0,0196 / 2 = 0,0098 mol dans 5,0 mL.</li>\n<li>Concentration molaire : 0,0098 / 0,0050 = 1,96 mol/L ; concentration massique : 1,96 × 98,1 = 192 g/L.</li>\n<li>Manque : 200 − 192 = 8 g/L, soit 8 × 2 000 = 16 000 g d'acide pur.</li>\n<li>Acide à 96 % contenant 1 766 g/L : 16 000 / 1 766 = 9,1 L à ajouter.</li>\n</ol>\nOn néglige ici le faible changement de volume dû à l'ajout. Après ajout et homogénéisation, on refait une analyse de vérification.</div>"
      },
      {
       "titre": "Autres grandeurs de suivi",
       "contenu": "\n<p>En plus des concentrations et du pH, l'atelier suit :</p>\n<ul>\n<li>la <strong>température</strong>, qui agit sur la vitesse des réactions, la conductivité et l'aspect du dépôt ;</li>\n<li>la <strong>densité</strong>, mesurée à l'aréomètre, parfois exprimée en degrés Baumé, utile pour suivre rapidement la charge totale en sels ;</li>\n<li>la <strong>conductivité</strong> des eaux de rinçage, qui indique leur charge en ions et donc leur pollution ;</li>\n<li>la <strong>teneur en impuretés métalliques</strong> (fer, cuivre, zinc dans un bain de nickel), qui provoque des défauts d'aspect à quelques dizaines de mg/L ;</li>\n<li>la <strong>teneur en additifs organiques</strong>, souvent évaluée par l'essai en cellule de Hull.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque analyse est notée sur la <strong>fiche de suivi du bain</strong> avec la date, l'heure, le résultat, la consigne, l'ajout réalisé et le nom de l'opérateur. Cette traçabilité permet de retrouver la cause d'un défaut et elle est exigée lors des audits qualité.</div>"
      }
     ],
     "points_cles": [
      "Un bain évolue en permanence : consommation, évaporation, entraînement, pollution.",
      "Concentration massique en g/L, concentration molaire en mol/L, reliées par Cm = C × M.",
      "Distinguer concentration en sel et concentration en métal sur une fiche technique.",
      "Dilution : C1 × V1 = C2 × V2 ; toujours verser l'acide dans l'eau.",
      "Le pH se mesure au pH-mètre étalonné ; une dérive de pH modifie l'aspect et les propriétés du dépôt.",
      "Le titrage repose sur la relation à l'équivalence, en tenant compte des coefficients de la réaction.",
      "Un ajout se calcule à partir de l'écart à la consigne, du volume de la cuve et de la concentration du produit commercial.",
      "Toute analyse et tout ajout sont tracés sur la fiche de suivi du bain."
     ],
     "lexique": [
      {
       "terme": "Soluté",
       "def": "Espèce chimique dissoute dans un solvant."
      },
      {
       "terme": "Concentration massique",
       "def": "Masse de soluté par litre de solution, en g/L."
      },
      {
       "terme": "Concentration molaire",
       "def": "Quantité de matière de soluté par litre de solution, en mol/L."
      },
      {
       "terme": "Entraînement",
       "def": "Volume de bain emporté par les pièces et les montages à la sortie d'une cuve."
      },
      {
       "terme": "pH",
       "def": "Grandeur sans unité mesurant l'acidité d'une solution aqueuse."
      },
      {
       "terme": "Tampon",
       "def": "Constituant qui limite les variations de pH d'un bain."
      },
      {
       "terme": "Titrage",
       "def": "Détermination de la concentration d'une espèce par réaction avec une solution de concentration connue."
      },
      {
       "terme": "Équivalence",
       "def": "État d'un titrage où les réactifs ont été introduits dans les proportions stœchiométriques."
      },
      {
       "terme": "Prise d'essai",
       "def": "Volume précis de bain prélevé pour une analyse."
      },
      {
       "terme": "Complexant",
       "def": "Constituant qui forme avec les ions métalliques des espèces dissoutes stables."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Procédés de préparation et de traitement",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btdm-preparation-surfaces",
     "titre": "Préparation des surfaces : mécanique, dégraissage, décapage et rinçages",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Identifier les salissures présentes sur une pièce et choisir le moyen de les éliminer.",
      "Décrire les procédés de préparation mécanique et leur effet sur l'état de surface.",
      "Expliquer le fonctionnement des dégraissages chimiques, électrolytiques et par ultrasons.",
      "Conduire un décapage en maîtrisant ses risques pour la pièce.",
      "Dimensionner un rinçage à partir du rapport de dilution et du nombre d'étages."
     ],
     "sections": [
      {
       "titre": "Une surface propre est une surface active",
       "contenu": "\n<p>La plupart des défauts d'adhérence, de taches ou de manques de dépôt proviennent d'une <strong>préparation de surface</strong> insuffisante. Pour qu'un métal se dépose et adhère, les atomes du dépôt doivent se lier directement aux atomes du substrat. Il faut donc éliminer toutes les couches qui s'interposent :</p>\n<table>\n<thead><tr><th>Salissure</th><th>Origine</th><th>Moyen d'élimination</th></tr></thead>\n<tbody>\n<tr><td>Huiles, graisses, lubrifiants</td><td>Usinage, emboutissage, protection temporaire</td><td>Dégraissage</td></tr>\n<tr><td>Pâtes de polissage</td><td>Polissage mécanique</td><td>Dégraissage spécifique, ultrasons</td></tr>\n<tr><td>Rouille, oxydes</td><td>Stockage, atmosphère humide</td><td>Décapage acide, grenaillage</td></tr>\n<tr><td>Calamine</td><td>Laminage à chaud, forge, traitement thermique</td><td>Décapage, grenaillage</td></tr>\n<tr><td>Oxydes de soudage, résidus de flux</td><td>Soudage</td><td>Décapage, brossage, grenaillage</td></tr>\n<tr><td>Ancienne peinture ou ancien dépôt</td><td>Reprise de pièces</td><td>Démétallisation, décapage peinture, sablage</td></tr>\n<tr><td>Couche passive</td><td>Inox, chrome, aluminium</td><td>Activation</td></tr>\n</tbody>\n</table>\n<p>L'ordre est logique : on enlève d'abord les <strong>salissures organiques</strong> (huiles), sinon l'acide de décapage ne mouille pas la surface ; puis les <strong>salissures minérales</strong> (oxydes). Entre deux bains chimiques, un <strong>rinçage</strong> évite de polluer le bain suivant.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> le test de rupture du film d'eau permet de vérifier un dégraissage. On sort la pièce du rinçage et on l'observe en position inclinée pendant une trentaine de secondes. Si l'eau forme un film continu, la surface est mouillable et propre. Si le film se rompt en gouttelettes ou laisse des îlots secs, il reste de la graisse : la pièce repart au dégraissage.</div>"
      },
      {
       "titre": "La préparation mécanique",
       "contenu": "\n<p>La préparation mécanique agit par abrasion ou par impact. Elle modifie l'<strong>état de surface</strong> et peut faire partie de la spécification d'aspect.</p>\n<ul>\n<li><strong>Grenaillage</strong> : projection de billes ou de grains métalliques (acier, inox) par turbine ou air comprimé. Il élimine calamine et rouille et crée une rugosité d'accrochage pour les peintures et la galvanisation. Le <strong>grenaillage de précontrainte</strong>, réalisé avec des billes calibrées, crée des contraintes de compression qui améliorent la tenue en fatigue.</li>\n<li><strong>Sablage</strong> : projection d'abrasifs minéraux (corindon, billes de verre). Le microbillage donne un aspect satiné régulier, très utilisé avant anodisation décorative.</li>\n<li><strong>Polissage et brossage</strong> : disques, bandes abrasives et pâtes donnent un aspect brillant ou brossé. Ils laissent des pâtes difficiles à dégraisser.</li>\n<li><strong>Tribofinition</strong> (ou vibro-abrasion) : les pièces vibrent dans une cuve avec des abrasifs (chips céramiques ou plastiques) et un composé liquide ; elle ébavure et lisse les petites pièces en vrac.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la projection d'abrasifs produit des poussières et du bruit. Elle se fait en cabine fermée ou en grenailleuse, avec appareil de protection respiratoire adapté, protections auditives et vêtements couvrants. Les abrasifs contenant de la silice cristalline libre sont à proscrire pour le sablage, car leur poussière provoque la silicose.</div>"
      },
      {
       "titre": "Les dégraissages",
       "contenu": "\n<p>Le <strong>dégraissage alcalin</strong> est le plus répandu. Le bain contient des bases (soude, carbonates, silicates, phosphates), des <strong>tensioactifs</strong> qui abaissent la tension superficielle et décollent les huiles, et parfois des complexants. Il travaille en général entre 50 et 80 °C. Les graisses animales et végétales sont <strong>saponifiées</strong> (transformées en savons solubles) ; les huiles minérales sont <strong>émulsionnées</strong> et doivent être séparées pour que le bain ne se sature pas (déshuileur, écrémeur).</p>\n<p>Le <strong>dégraissage électrolytique</strong> complète le dégraissage chimique. La pièce est électrode dans un bain alcalin ; le dégagement gazeux à sa surface arrache mécaniquement les salissures.</p>\n<ul>\n<li>En <strong>cathodique</strong>, il se dégage du dihydrogène, en volume double de celui de l'oxygène : action mécanique forte, mais risque d'hydrogénation de l'acier et de dépôt d'impuretés métalliques sur la pièce.</li>\n<li>En <strong>anodique</strong>, il se dégage du dioxygène : pas de fragilisation, surface très active, mais risque d'oxydation ou d'attaque de certains métaux (laiton, zinc, aluminium).</li>\n</ul>\n<p>Le dégraissage s'use : l'alcalinité baisse, les huiles s'accumulent, les tensioactifs se consomment. On suit l'<strong>alcalinité totale</strong> par titrage acide, on écrème régulièrement la surface et on renouvelle le bain lorsque la charge en huile dépasse la limite de la fiche technique. Un dégraissage saturé ne fait plus que redistribuer la graisse d'une pièce à l'autre, ce qui provoque des défauts d'adhérence répartis au hasard dans les lots.</p>\n<p>Le <strong>dégraissage par ultrasons</strong> utilise des transducteurs qui créent dans le liquide des micro-bulles qui implosent (cavitation) : il nettoie les trous borgnes, les filetages et les résidus de polissage.</p>\n<p>Les <strong>dégraissages aux solvants</strong> sont réservés à des cas particuliers, en machines étanches, à cause de la toxicité et de la réglementation des solvants chlorés.</p>"
      },
      {
       "titre": "Le décapage",
       "contenu": "\n<p>Le <strong>décapage</strong> dissout les oxydes en milieu acide. Pour l'acier, on utilise l'acide chlorhydrique (souvent à température ambiante) ou l'acide sulfurique (à chaud). Les oxydes se dissolvent, mais l'acide attaque aussi le métal sain, avec dégagement de dihydrogène. On ajoute donc un <strong>inhibiteur de décapage</strong> qui freine l'attaque du métal sans gêner la dissolution des oxydes.</p>\n<p>Le bain s'enrichit progressivement en fer dissous et s'appauvrit en acide. Au-delà d'une teneur en fer fixée par la fiche technique (souvent de l'ordre de 100 à 150 g/L en bain chlorhydrique), son efficacité chute et il doit être renouvelé ; le bain usé est un déchet dangereux.</p>\n<p>D'autres décapages existent : les mélanges nitrique-fluorhydrique pour les inox (produits très dangereux), les attaques alcalines pour l'aluminium, l'<strong>activation</strong> courte dans un acide dilué juste avant un dépôt pour éliminer le voile d'oxyde formé pendant les rinçages.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un temps de décapage trop long ne rend pas la pièce « plus propre ». Il la surdécape : piqûres, perte de cote sur les filetages, absorption d'hydrogène dans l'acier. On respecte le temps de la gamme et on adapte plutôt la préparation en amont, par exemple un grenaillage pour une calamine épaisse.</div>"
      },
      {
       "titre": "Les rinçages",
       "contenu": "\n<p>Chaque pièce qui sort d'un bain emporte un film de solution : l'<strong>entraînement</strong>, de l'ordre de 0,05 à 0,2 L par m² de surface selon la forme des pièces et le temps d'égouttage. Le <strong>rinçage</strong> doit diluer ce film assez pour qu'il ne pollue pas la cuve suivante et ne laisse pas de traces.</p>\n<p>On définit le <strong>rapport de dilution</strong> R<sub>d</sub> = C<sub>0</sub> / C<sub>n</sub>, où C<sub>0</sub> est la concentration du bain et C<sub>n</sub> la concentration admissible dans le dernier rinçage. Pour un rinçage <strong>courant</strong> (une seule cuve à débit continu), le débit d'eau nécessaire vaut approximativement Q = q × R<sub>d</sub>, où q est le débit d'entraînement en L/h. Pour un rinçage en <strong>cascade à contre-courant</strong> de n cuves (l'eau propre entre dans la dernière cuve et déborde vers la précédente, à l'inverse du sens des pièces), on a approximativement Q = q × R<sub>d</sub><sup>1/n</sup>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer des solutions de rinçage après un bain de nickel.\n<ol>\n<li>Données : bain à C<sub>0</sub> = 300 g/L de sels ; concentration admissible dans le dernier rinçage C<sub>n</sub> = 0,03 g/L ; entraînement q = 2 L/h.</li>\n<li>Rapport de dilution : R<sub>d</sub> = 300 / 0,03 = 10 000.</li>\n<li>Rinçage courant simple : Q = 2 × 10 000 = 20 000 L/h, soit 20 m³ par heure : inacceptable.</li>\n<li>Cascade de deux cuves : Q = 2 × 10 000<sup>1/2</sup> = 2 × 100 = 200 L/h.</li>\n<li>Cascade de trois cuves : Q = 2 × 10 000<sup>1/3</sup> ≈ 2 × 21,5 = 43 L/h.</li>\n</ol>\nConclusion : passer d'une à trois cuves divise la consommation d'eau par plus de 450. Ajouter un <strong>rinçage mort</strong> (cuve sans débit) juste après le bain permet en plus de récupérer une partie du nickel entraîné pour compenser l'évaporation du bain.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les eaux de rinçage constituent la plus grande partie des effluents de l'atelier. La réglementation des installations de traitement de surface encadre la consommation d'eau de rinçage par mètre carré traité ; c'est pourquoi les lignes modernes utilisent des cascades, des rinçages morts et des égouttages temporisés au-dessus des cuves.</div>"
      }
     ],
     "points_cles": [
      "La préparation de surface conditionne l'adhérence et l'aspect ; elle est la première cause de défauts.",
      "On élimine d'abord les salissures organiques (dégraissage), puis minérales (décapage), avec rinçage entre chaque bain.",
      "Le test de rupture du film d'eau vérifie simplement un dégraissage.",
      "Grenaillage, sablage, polissage et tribofinition modifient l'état de surface et préparent l'accrochage.",
      "Le dégraissage électrolytique cathodique arrache bien les salissures mais peut hydrogéner l'acier.",
      "Le décapage acide contient un inhibiteur ; le surdécapage abîme la pièce.",
      "Rapport de dilution Rd = C0 / Cn ; une cascade à contre-courant de n cuves réduit le débit à q × Rd puissance 1/n.",
      "Le rinçage mort permet de récupérer une partie des produits entraînés."
     ],
     "lexique": [
      {
       "terme": "Calamine",
       "def": "Couche d'oxydes de fer formée à haute température lors du laminage, de la forge ou d'un traitement thermique."
      },
      {
       "terme": "Tensioactif",
       "def": "Molécule qui abaisse la tension superficielle de l'eau et favorise le décollement des huiles."
      },
      {
       "terme": "Saponification",
       "def": "Transformation des graisses en savons solubles par une base."
      },
      {
       "terme": "Cavitation",
       "def": "Formation et implosion de micro-bulles dans un liquide sous l'effet des ultrasons."
      },
      {
       "terme": "Inhibiteur de décapage",
       "def": "Additif qui limite l'attaque du métal sain par l'acide sans empêcher la dissolution des oxydes."
      },
      {
       "terme": "Activation",
       "def": "Immersion courte dans un acide dilué qui élimine le voile d'oxyde juste avant un dépôt."
      },
      {
       "terme": "Rapport de dilution",
       "def": "Rapport entre la concentration du bain et la concentration admissible dans le dernier rinçage."
      },
      {
       "terme": "Cascade à contre-courant",
       "def": "Série de cuves de rinçage où l'eau circule dans le sens inverse des pièces."
      },
      {
       "terme": "Rinçage mort",
       "def": "Cuve de rinçage sans renouvellement continu, qui concentre les produits entraînés pour les récupérer."
      },
      {
       "terme": "Tribofinition",
       "def": "Finition de pièces en vrac par vibration au contact d'abrasifs et d'un composé liquide."
      }
     ]
    },
    {
     "id": "btdm-electrolyse",
     "titre": "Électrolyse et lois du dépôt électrolytique",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Décrire une cellule d'électrolyse et les réactions aux électrodes.",
      "Appliquer la loi de Faraday pour calculer une masse et une épaisseur de dépôt.",
      "Prendre en compte le rendement cathodique dans les calculs.",
      "Calculer un temps de traitement ou un courant à partir d'une épaisseur visée.",
      "Expliquer la répartition du dépôt et le rôle de la cellule de Hull."
     ],
     "sections": [
      {
       "titre": "La cellule d'électrolyse",
       "contenu": "\n<p>Une <strong>électrolyse</strong> est une transformation chimique forcée par un courant électrique. La cellule comprend une cuve contenant l'électrolyte, deux électrodes et un générateur de courant continu, appelé <strong>redresseur</strong> en atelier.</p>\n<ul>\n<li>La <strong>cathode</strong> est reliée au pôle négatif. C'est la pièce à revêtir. Elle reçoit des électrons et il s'y produit une <strong>réduction</strong> : les cations métalliques se transforment en métal, par exemple Ni<sup>2+</sup> + 2 e<sup>-</sup> → Ni.</li>\n<li>L'<strong>anode</strong> est reliée au pôle positif. Il s'y produit une <strong>oxydation</strong>. Une <strong>anode soluble</strong> (plaques ou billes de nickel en paniers de titane) se dissout et remplace le métal déposé : Ni → Ni<sup>2+</sup> + 2 e<sup>-</sup>. Une <strong>anode insoluble</strong> (plomb pour le chrome, titane platiné, acier pour le zinc alcalin) ne se dissout pas ; il s'y dégage en général du dioxygène, et le métal déposé doit être apporté par des ajouts de sels.</li>\n</ul>\n<p>Dans l'électrolyte, le courant est transporté par les ions : les cations migrent vers la cathode, les anions vers l'anode. Dans les câbles et les pièces, il est transporté par les électrons.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> inverser les polarités dissout les pièces au lieu de les revêtir. Avant tout démarrage d'un poste manuel, vérifier que la barre porte-pièces est raccordée au pôle négatif et la barre anodique au pôle positif.</div>"
      },
      {
       "titre": "Courant, densité de courant et tension",
       "contenu": "\n<p>Le redresseur délivre une <strong>intensité</strong> I en ampères (A) sous une <strong>tension</strong> U en volts (V). La grandeur qui règle la vitesse et la qualité du dépôt n'est pas l'intensité totale, mais la <strong>densité de courant</strong> cathodique, intensité rapportée à la surface des pièces : j = I / S, exprimée en A/dm² dans le métier.</p>\n<p>Chaque bain possède une <strong>plage de densité de courant</strong> utile : en dessous, le dépôt est trop lent, terne ou absent ; au-dessus, il devient rugueux, pulvérulent et sombre, on dit qu'il est <strong>brûlé</strong>. On règle donc l'intensité en fonction de la surface chargée : I = j × S.</p>\n<p>La tension nécessaire dépend de la conductivité du bain, de la distance anode-cathode, de la qualité des contacts et des réactions aux électrodes. Elle est en général de quelques volts (2 à 12 V) pour les dépôts métalliques, mais peut atteindre 15 à 25 V en anodisation. La puissance électrique consommée vaut P = U × I : une cuve de nickel à 1 000 A sous 6 V consomme 6 kW, qui se transforment en grande partie en chaleur dans le bain.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on règle une <strong>densité de courant</strong>, pas un courant. Si l'on charge deux fois moins de pièces sans réduire l'intensité, la densité de courant double et le dépôt risque de brûler.</div>"
      },
      {
       "titre": "La loi de Faraday",
       "contenu": "\n<p>La masse de métal déposée est proportionnelle à la quantité d'électricité qui a traversé la cellule. La <strong>quantité d'électricité</strong> vaut Q = I × t, en coulombs (C) si I est en ampères et t en secondes. Une mole d'électrons transporte une charge égale à la <strong>constante de Faraday</strong> F ≈ 96 500 C/mol.</p>\n<p>Pour déposer une mole d'un métal d'ions M<sup>n+</sup>, il faut n moles d'électrons. D'où la <strong>loi de Faraday</strong> :</p>\n<p><strong>m = (M × I × t) / (n × F)</strong></p>\n<p>avec m la masse déposée en g, M la masse molaire du métal en g/mol, I l'intensité en A, t la durée en s et n le nombre d'électrons échangés par ion.</p>\n<p>En réalité, une partie du courant sert à d'autres réactions, surtout au dégagement de dihydrogène à la cathode. On définit le <strong>rendement cathodique</strong> η, rapport entre la masse réellement déposée et la masse théorique : m<sub>réelle</sub> = η × m<sub>théorique</sub>.</p>\n<table>\n<thead><tr><th>Bain</th><th>n</th><th>Rendement cathodique courant</th></tr></thead>\n<tbody>\n<tr><td>Nickel type Watts</td><td>2</td><td>Environ 95 %</td></tr>\n<tr><td>Zinc acide (chlorure)</td><td>2</td><td>Environ 90 à 95 %</td></tr>\n<tr><td>Zinc alcalin sans cyanure</td><td>2</td><td>Environ 50 à 80 %, en baisse quand j augmente</td></tr>\n<tr><td>Cuivre acide</td><td>2</td><td>Proche de 100 %</td></tr>\n<tr><td>Chrome à partir de chrome hexavalent</td><td>6</td><td>Environ 10 à 25 %</td></tr>\n</tbody>\n</table>\n<p>Ces valeurs sont des ordres de grandeur ; la fiche technique du fournisseur donne celles du bain utilisé.</p>"
      },
      {
       "titre": "De la masse à l'épaisseur",
       "contenu": "\n<p>L'épaisseur moyenne e se déduit de la masse, de la masse volumique ρ du métal et de la surface S : e = m / (ρ × S). Avec m en g, ρ en g/cm³ et S en cm², e est en cm ; on multiplie par 10 000 pour l'avoir en micromètres.</p>\n<p>En combinant les relations, et en raisonnant sur 1 dm² (100 cm²), on obtient une formule pratique :</p>\n<p><strong>e (µm) = 100 × η × M × j × t / (n × F × ρ)</strong>, avec j en A/dm² et t en s.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'épaisseur d'un zingage acide.\n<ol>\n<li>Données : j = 2 A/dm², t = 20 min = 1 200 s, rendement 80 %, zinc M = 65,4 g/mol, n = 2, ρ = 7,14 g/cm³.</li>\n<li>Quantité d'électricité par dm² : Q = 2 × 1 200 = 2 400 C.</li>\n<li>Masse théorique par dm² : m = 65,4 × 2 400 / (2 × 96 500) = 0,813 g.</li>\n<li>Masse réelle : 0,80 × 0,813 = 0,651 g.</li>\n<li>Volume : 0,651 / 7,14 = 0,0912 cm³ pour 100 cm².</li>\n<li>Épaisseur : 0,0912 / 100 = 0,000 912 cm, soit 9,1 µm.</li>\n</ol>\nVérification d'ordre de grandeur : un zingage de 8 à 12 µm en une vingtaine de minutes est cohérent avec la pratique.</div>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un temps de nickelage. On veut 20 µm de nickel à 4 A/dm², rendement 95 %. Pour 1 A/dm² pendant une heure (3 600 C par dm²) : m = 58,7 × 3 600 / (2 × 96 500) × 0,95 = 1,04 g ; e = 1,04 / 8,9 / 100 × 10 000 = 11,7 µm. Une densité de 4 A/dm² dépose donc environ 4 × 11,7 = 46,8 µm par heure, soit 0,78 µm par minute. Temps nécessaire : 20 / 0,78 ≈ 26 minutes.</div>"
      },
      {
       "titre": "La répartition du dépôt",
       "contenu": "\n<p>L'épaisseur calculée est une <strong>moyenne</strong>. Sur une pièce réelle, le courant se concentre sur les <strong>pointes, arêtes et parties proches des anodes</strong> (zones de forte densité de courant) et s'affaiblit dans les <strong>creux, trous et zones masquées</strong> (zones de faible densité de courant). Une même pièce peut ainsi porter 25 µm sur une arête et 5 µm au fond d'une gorge.</p>\n<p>L'aptitude d'un bain à déposer une épaisseur régulière s'appelle le <strong>pouvoir de répartition</strong> ; son aptitude à déposer du métal dans les creux profonds s'appelle le <strong>pouvoir de pénétration</strong>. Les bains alcalins de zinc et le nickel chimique ont une bonne répartition ; le chrome a une très mauvaise pénétration.</p>\n<p>On améliore la répartition par :</p>\n<ul>\n<li>l'orientation des pièces sur le montage et l'espacement entre elles ;</li>\n<li>la distance et la disposition des anodes, éventuellement des <strong>anodes auxiliaires</strong> placées dans les creux ;</li>\n<li>des <strong>écrans</strong> isolants ou des <strong>voleurs de courant</strong> (cathodes sacrifiées) qui protègent les arêtes ;</li>\n<li>l'agitation et le choix du bain.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les spécifications indiquent souvent une épaisseur minimale <strong>sur la surface significative</strong>, c'est-à-dire la zone visible ou fonctionnelle définie sur le plan. C'est là que l'on mesure, et c'est là que l'on doit obtenir l'épaisseur, même si les arêtes en reçoivent davantage.</div>"
      },
      {
       "titre": "La cellule de Hull",
       "contenu": "\n<p>La <strong>cellule de Hull</strong> est une petite cuve trapézoïdale normalisée (le modèle le plus courant contient 267 mL) dans laquelle la plaque cathodique est inclinée par rapport à l'anode. Une extrémité de la plaque est proche de l'anode, l'autre éloignée : on obtient sur une seule éprouvette toute une gamme de densités de courant, de forte à très faible.</p>\n<p>On remplit la cellule avec un échantillon du bain, on applique une intensité fixée (souvent 1 à 3 A) pendant un temps fixé (5 à 10 minutes), puis on observe la plaque : zones brûlées, brillantes, ternes, piquées ou sans dépôt. En comparant avec une plaque de référence obtenue sur un bain neuf, on diagnostique un manque ou un excès de brillanteur, une pollution métallique ou organique, un pH hors plage. On teste ensuite une correction sur l'échantillon (ajout d'additif, traitement au charbon actif) avant de l'appliquer à la cuve.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la cellule de Hull est l'outil de diagnostic de l'aspect d'un bain. Elle complète l'analyse chimique, qui ne mesure ni les additifs organiques ni les effets combinés des pollutions.</div>"
      }
     ],
     "points_cles": [
      "Dans une électrolyse, la pièce à revêtir est la cathode, reliée au pôle négatif ; le métal s'y dépose par réduction.",
      "L'anode soluble remplace le métal déposé ; avec une anode insoluble, il faut ajouter des sels.",
      "La densité de courant j = I / S, en A/dm², règle la vitesse et la qualité du dépôt.",
      "Loi de Faraday : m = M × I × t / (n × F), avec F ≈ 96 500 C/mol.",
      "Le rendement cathodique réduit la masse réellement déposée ; il est très faible pour le chrome.",
      "Épaisseur moyenne : e = m / (ρ × S) ; 1 A/dm² pendant une heure dépose environ 12 µm de nickel.",
      "Le dépôt est plus épais sur les arêtes que dans les creux ; montage, anodes et écrans corrigent la répartition.",
      "La cellule de Hull permet d'observer l'effet de toute la plage de densités de courant sur une seule plaque."
     ],
     "lexique": [
      {
       "terme": "Électrolyse",
       "def": "Transformation chimique forcée par le passage d'un courant électrique continu."
      },
      {
       "terme": "Redresseur",
       "def": "Appareil qui transforme le courant alternatif du réseau en courant continu réglable pour les cuves."
      },
      {
       "terme": "Anode soluble",
       "def": "Anode constituée du métal à déposer, qui se dissout pendant l'électrolyse."
      },
      {
       "terme": "Densité de courant",
       "def": "Intensité rapportée à la surface des pièces, exprimée en A/dm²."
      },
      {
       "terme": "Constante de Faraday",
       "def": "Charge électrique d'une mole d'électrons, environ 96 500 C/mol."
      },
      {
       "terme": "Rendement cathodique",
       "def": "Rapport entre la masse de métal réellement déposée et la masse théorique calculée par la loi de Faraday."
      },
      {
       "terme": "Dépôt brûlé",
       "def": "Dépôt sombre, rugueux et pulvérulent obtenu avec une densité de courant trop élevée."
      },
      {
       "terme": "Pouvoir de pénétration",
       "def": "Aptitude d'un bain à déposer du métal dans les creux et zones de faible densité de courant."
      },
      {
       "terme": "Surface significative",
       "def": "Partie de la pièce, définie par le plan, sur laquelle les exigences d'épaisseur et d'aspect s'appliquent."
      },
      {
       "terme": "Cellule de Hull",
       "def": "Petite cuve d'essai où une plaque inclinée reçoit une large plage de densités de courant."
      }
     ]
    },
    {
     "id": "btdm-depots-electrolytiques",
     "titre": "Les principaux dépôts électrolytiques",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Décrire les dépôts de zinc et d'alliages de zinc, leurs passivations et leurs finitions.",
      "Expliquer la constitution d'un système décoratif cuivre-nickel-chrome.",
      "Distinguer chrome décoratif et chrome dur par leurs bains, leurs épaisseurs et leurs usages.",
      "Situer les dépôts de cuivre, d'étain et de métaux précieux dans leurs applications.",
      "Relier les contraintes réglementaires sur le chrome hexavalent aux évolutions des procédés."
     ],
     "sections": [
      {
       "titre": "Le zingage et les alliages de zinc",
       "contenu": "\n<p>Le <strong>zingage électrolytique</strong> est le traitement anticorrosion le plus répandu sur les petites pièces en acier : visserie, ressorts, pièces embouties, fixations. Le zinc protège l'acier de façon <strong>sacrificielle</strong>. Les épaisseurs courantes vont de 5 à 25 µm.</p>\n<table>\n<thead><tr><th>Type de bain</th><th>Points forts</th><th>Points faibles</th></tr></thead>\n<tbody>\n<tr><td>Zinc acide (chlorure de zinc et de potassium, acide borique)</td><td>Rendement élevé, dépôt brillant, faible hydrogénation</td><td>Répartition moyenne, corrosif pour les équipements</td></tr>\n<tr><td>Zinc alcalin sans cyanure (zincate en milieu soude)</td><td>Très bonne répartition, bonne aptitude aux passivations</td><td>Rendement plus faible, dépôt plus sensible à la préparation</td></tr>\n</tbody>\n</table>\n<p>Les <strong>alliages de zinc</strong> améliorent fortement la tenue à la corrosion à épaisseur égale. Le plus utilisé en automobile est le <strong>zinc-nickel</strong>, contenant 12 à 16 % de nickel, qui supporte aussi mieux la chaleur des compartiments moteurs. On trouve aussi le zinc-fer et, plus rarement, le zinc-cobalt. La teneur en élément d'alliage doit être contrôlée, car elle conditionne les performances.</p>\n<p>Après le dépôt, la pièce reçoit une <strong>couche de conversion</strong>, appelée passivation, puis éventuellement une <strong>finition</strong> (top-coat, scellant organo-minéral) qui renforce la tenue et règle le coefficient de frottement des vis. Les anciennes chromatations au chrome hexavalent (jaune irisé, olive, noire) ont été remplacées dans la plupart des secteurs par des <strong>passivations au chrome trivalent</strong>, transparentes, irisées ou noires, à la suite des directives européennes sur les véhicules hors d'usage et sur les équipements électriques.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une couche de passivation fraîche est fragile et sensible à la chaleur. Un séchage trop chaud ou une manipulation des pièces encore humides peut la détériorer et faire chuter la tenue au brouillard salin. Les températures de séchage de la fiche technique sont des maximums.</div>"
      },
      {
       "titre": "Le système cuivre-nickel-chrome décoratif",
       "contenu": "\n<p>Robinetterie, pièces d'ameublement, enjoliveurs automobiles et plastiques chromés reçoivent un <strong>système multicouche</strong> dont chaque couche a un rôle :</p>\n<table>\n<thead><tr><th>Couche</th><th>Épaisseur indicative</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Cuivre (alcalin puis acide)</td><td>5 à 30 µm</td><td>Accrochage sur zamak ou plastique, nivellement, remplissage des micro-défauts</td></tr>\n<tr><td>Nickel semi-brillant</td><td>Environ 60 % du nickel total</td><td>Barrière sans soufre, plus noble</td></tr>\n<tr><td>Nickel brillant</td><td>Environ 40 % du nickel total</td><td>Brillant et nivellement, contient du soufre, moins noble</td></tr>\n<tr><td>Chrome</td><td>0,2 à 0,5 µm</td><td>Couleur bleutée, dureté superficielle, résistance au ternissement</td></tr>\n</tbody>\n</table>\n<p>Le <strong>double nickel</strong> est un principe ingénieux : le nickel brillant, moins noble, se corrode préférentiellement et latéralement, ce qui retarde la perforation jusqu'au substrat. Le chrome, très mince, est en réalité microfissuré ou microporeux, ce qui répartit la corrosion sur une multitude de micro-sites au lieu de quelques gros points.</p>\n<p>Le bain de nickel le plus classique est le <strong>bain de Watts</strong> : sulfate de nickel (environ 240 à 300 g/L de sel), chlorure de nickel (environ 45 à 60 g/L, pour la dissolution des anodes), acide borique (30 à 45 g/L, tampon), à pH 3,5 à 4,5 et à 50 à 60 °C, avec agitation par air ou par mouvement cathodique et filtration continue. Les additifs de brillance sont ajoutés en mL/L selon la consommation, souvent suivie en ampères-heures.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le chrome décoratif n'est jamais déposé seul : il est toujours sur nickel. C'est le nickel qui protège ; le chrome donne la couleur et la résistance de surface.</div>"
      },
      {
       "titre": "Le chrome dur",
       "contenu": "\n<p>Le <strong>chrome dur</strong> (ou chrome fonctionnel) est déposé directement sur l'acier, en épaisseurs de 10 µm à plusieurs centaines de micromètres, pour des tiges de vérins, des cylindres d'impression, des outillages, des pièces de rechargement. Il apporte une dureté très élevée (de l'ordre de 800 à 1 000 HV), un faible coefficient de frottement et une bonne résistance à l'usure et au grippage. Les pièces sont souvent <strong>rectifiées</strong> après dépôt pour obtenir la cote et l'état de surface.</p>\n<p>Le bain classique contient de l'<strong>anhydride chromique</strong> (trioxyde de chrome, CrO<sub>3</sub>, environ 250 g/L) et un catalyseur, l'acide sulfurique, dans un rapport voisin de 100 pour 1 ; il travaille vers 50 à 60 °C sous de fortes densités de courant (30 à 60 A/dm²) avec un rendement de 10 à 25 %. L'essentiel du courant produit donc du dihydrogène et du dioxygène, qui entraînent un brouillard chargé de chrome hexavalent : l'aspiration et les suppresseurs de brouillard sont indispensables.</p>\n<p>Le <strong>chrome hexavalent</strong> est cancérogène, mutagène, toxique pour la reproduction et sensibilisant. Le trioxyde de chrome figure à l'annexe XIV du règlement REACH : son utilisation exige une <strong>autorisation</strong> européenne, assortie de mesures strictes de protection des travailleurs et de surveillance des expositions. Des alternatives sont développées (chrome dur à partir de chrome trivalent, dépôts de nickel chimique, projection thermique), mais elles ne remplacent pas encore toutes les applications.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur une cuve de chrome, l'aspiration doit fonctionner avant la mise sous tension. Un redresseur en marche avec l'aspiration arrêtée crée une exposition grave au brouillard de chrome hexavalent. Le poste est équipé d'un verrouillage ; on ne le shunte jamais.</div>"
      },
      {
       "titre": "Cuivre, étain et métaux précieux",
       "contenu": "\n<p>Le <strong>cuivre</strong> sert de sous-couche d'accrochage et de nivellement, mais aussi de dépôt fonctionnel en électronique (circuits imprimés, conductivité) et de couche d'arrêt avant certaines cémentations (le cuivre empêche localement la diffusion du carbone). Le cuivre acide au sulfate donne des dépôts très nivelants ; les bains alcalins sont utilisés pour la première couche sur acier ou zamak, car le cuivre acide se déposerait par simple déplacement, sans adhérence.</p>\n<p>L'<strong>étain</strong> et ses alliages (étain-plomb historiquement, désormais remplacés par des étains purs ou étain-argent) assurent la <strong>soudabilité</strong> des composants électroniques et la protection des boîtes alimentaires (fer-blanc). L'étain pur peut développer des filaments conducteurs appelés <strong>whiskers</strong>, que l'on limite par des sous-couches et des recuits.</p>\n<p>L'<strong>argent</strong> offre la meilleure conductivité électrique et équipe les contacts de puissance ; il ternit au contact des composés soufrés de l'air. L'<strong>or</strong>, très résistant à la corrosion, sert pour les contacts électroniques fiables (dorure dure à l'or-cobalt, épaisseurs de l'ordre du micromètre) et en décoration (flash d'or de quelques dixièmes de micromètre). Ces bains coûteux sont suivis avec un soin particulier : chaque gramme entraîné est récupéré.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> certains bains d'argent, d'or ou de cuivre utilisent encore des <strong>cyanures</strong>. Ils sont stockés et manipulés à part, loin des acides, car un mélange acide-cyanure libère de l'acide cyanhydrique, gaz mortel. Les ateliers concernés disposent de consignes et de moyens de secours spécifiques.</div>"
      },
      {
       "titre": "Choisir un dépôt : synthèse et méthode",
       "contenu": "\n<table>\n<thead><tr><th>Dépôt</th><th>Fonction principale</th><th>Substrats courants</th><th>Épaisseur courante</th></tr></thead>\n<tbody>\n<tr><td>Zinc + passivation</td><td>Anticorrosion économique</td><td>Acier</td><td>5 à 15 µm</td></tr>\n<tr><td>Zinc-nickel + passivation</td><td>Anticorrosion renforcée, tenue en température</td><td>Acier, fonte</td><td>8 à 12 µm</td></tr>\n<tr><td>Cuivre-nickel-chrome</td><td>Décoration durable</td><td>Acier, laiton, zamak, ABS</td><td>Nickel total 20 à 40 µm</td></tr>\n<tr><td>Chrome dur</td><td>Usure, frottement, rechargement</td><td>Acier</td><td>10 à 300 µm</td></tr>\n<tr><td>Étain</td><td>Soudabilité, contact</td><td>Cuivre et alliages</td><td>3 à 10 µm</td></tr>\n<tr><td>Argent</td><td>Conductivité</td><td>Cuivre et alliages</td><td>2 à 10 µm</td></tr>\n<tr><td>Or</td><td>Contact fiable, aspect</td><td>Nickel sur cuivre</td><td>0,1 à 2 µm</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> justifier un choix de dépôt dans une étude.\n<ol>\n<li>Énoncer la fonction exigée et son critère mesurable (heures de brouillard salin, dureté, résistance de contact, aspect).</li>\n<li>Vérifier la compatibilité avec le substrat (sous-couche nécessaire, risque de fragilisation).</li>\n<li>Vérifier les contraintes : température d'utilisation, contact alimentaire, réglementation (chrome hexavalent, cadmium, plomb).</li>\n<li>Préciser l'épaisseur et les post-traitements.</li>\n<li>Conclure en une phrase reliant fonction, procédé et critère.</li>\n</ol>\nExemple : pour une vis 10.9 de liaison au sol automobile devant tenir 720 h de brouillard salin sans rouille rouge, le zinc-nickel avec passivation trivalente et finition est adapté ; il impose un dégazage après dépôt en raison de la classe de résistance de la vis.</div>"
      }
     ],
     "points_cles": [
      "Le zingage protège l'acier par effet sacrificiel ; il est complété par une passivation et parfois une finition.",
      "Le zinc-nickel à 12 à 16 % de nickel offre une tenue à la corrosion bien supérieure au zinc seul.",
      "Les passivations au chrome trivalent ont remplacé les chromatations hexavalentes dans la plupart des secteurs.",
      "Le système décoratif associe cuivre, double nickel et chrome mince ; le nickel assure la protection.",
      "Le bain de Watts : sulfate et chlorure de nickel, acide borique, pH 3,5 à 4,5, 50 à 60 °C.",
      "Le chrome dur, épais et très dur, s'obtient avec un faible rendement à partir de chrome hexavalent, soumis à autorisation REACH.",
      "Étain, argent et or ont des fonctions électriques ; les bains cyanurés exigent une séparation stricte des acides.",
      "Un choix de dépôt se justifie par la fonction, le substrat, les contraintes et un critère mesurable."
     ],
     "lexique": [
      {
       "terme": "Passivation",
       "def": "Couche de conversion formée sur un dépôt de zinc pour en retarder la corrosion."
      },
      {
       "terme": "Finition (top-coat)",
       "def": "Couche de scellement appliquée sur une passivation pour améliorer la tenue à la corrosion et régler le frottement."
      },
      {
       "terme": "Zinc-nickel",
       "def": "Alliage électrolytique de zinc contenant environ 12 à 16 % de nickel."
      },
      {
       "terme": "Bain de Watts",
       "def": "Bain de nickel classique à base de sulfate et de chlorure de nickel tamponné par l'acide borique."
      },
      {
       "terme": "Double nickel",
       "def": "Superposition d'un nickel semi-brillant et d'un nickel brillant qui oriente la corrosion latéralement."
      },
      {
       "terme": "Chrome dur",
       "def": "Dépôt épais de chrome destiné à résister à l'usure et au frottement."
      },
      {
       "terme": "Anhydride chromique",
       "def": "Trioxyde de chrome CrO3, source de chrome hexavalent des bains de chromage classiques."
      },
      {
       "terme": "Whisker",
       "def": "Filament métallique conducteur qui peut croître spontanément sur un dépôt d'étain."
      },
      {
       "terme": "Flash",
       "def": "Dépôt très mince, de l'ordre du dixième de micromètre, à vocation décorative ou d'accrochage."
      }
     ]
    },
    {
     "id": "btdm-anodisation-conversions",
     "titre": "Anodisation de l'aluminium et couches de conversion",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Expliquer la formation et la structure d'une couche d'anodisation.",
      "Décrire une gamme d'anodisation sulfurique avec ses paramètres.",
      "Calculer une épaisseur ou un temps d'anodisation à partir d'une règle pratique.",
      "Expliquer le rôle de la coloration et du colmatage.",
      "Décrire la phosphatation et les conversions de l'aluminium et de l'acier."
     ],
     "sections": [
      {
       "titre": "Le principe de l'oxydation anodique",
       "contenu": "\n<p>L'<strong>anodisation</strong> (ou oxydation anodique) est une <strong>conversion électrolytique</strong> : la pièce en aluminium est reliée au pôle <strong>positif</strong> du redresseur ; elle est donc l'<strong>anode</strong>. Les cathodes sont des plaques de plomb ou d'aluminium. Sous l'effet du courant, l'aluminium s'oxyde et forme une couche d'<strong>alumine</strong> (oxyde d'aluminium, Al<sub>2</sub>O<sub>3</sub>) beaucoup plus épaisse que la couche naturelle : 5 à 25 µm en anodisation de protection, 25 à plus de 100 µm en anodisation dure, contre quelques nanomètres naturellement.</p>\n<p>La couche se forme <strong>à partir du métal</strong> : environ la moitié de son épaisseur se trouve sous la surface d'origine et l'autre moitié au-dessus. Une pièce anodisée à 20 µm voit donc sa cote augmenter d'environ 10 µm par face. En anodisation dure, cette répartition est prise en compte par le bureau des méthodes pour les ajustements.</p>\n<p>La couche est constituée :</p>\n<ul>\n<li>d'une <strong>couche barrière</strong> très mince, compacte, au contact du métal ;</li>\n<li>d'une <strong>couche poreuse</strong> formée de cellules hexagonales serrées, chacune percée d'un pore très fin perpendiculaire à la surface.</li>\n</ul>\n<p>Ces pores sont l'atout de l'anodisation : ils peuvent recevoir des colorants ou des sels métalliques. Mais ils doivent ensuite être refermés pour que la couche protège : c'est le <strong>colmatage</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en dépôt électrolytique, la pièce est cathode ; en anodisation, la pièce est <strong>anode</strong>. L'anodisation ne dépose pas de métal : elle transforme l'aluminium en oxyde.</div>"
      },
      {
       "titre": "La gamme d'anodisation sulfurique",
       "contenu": "\n<p>Le procédé le plus courant utilise un bain d'<strong>acide sulfurique</strong>. Une gamme décorative typique comprend :</p>\n<table>\n<thead><tr><th>Étape</th><th>Bain et conditions indicatives</th><th>But</th></tr></thead>\n<tbody>\n<tr><td>Dégraissage</td><td>Alcalin doux ou acide, 50 à 60 °C</td><td>Éliminer huiles et salissures sans attaquer</td></tr>\n<tr><td>Satinage</td><td>Soude, 40 à 60 °C, quelques minutes</td><td>Uniformiser l'aspect, effacer les marques d'extrusion</td></tr>\n<tr><td>Dérochage</td><td>Acide nitrique ou mélange sans nitrique</td><td>Éliminer le smut</td></tr>\n<tr><td>Anodisation</td><td>Acide sulfurique 180 à 200 g/L, 18 à 20 °C, 1,2 à 1,5 A/dm²</td><td>Former la couche d'oxyde</td></tr>\n<tr><td>Coloration (facultative)</td><td>Colorants organiques ou électrocoloration</td><td>Donner une teinte</td></tr>\n<tr><td>Colmatage</td><td>Eau déminéralisée vers 96 à 100 °C ou colmatage à froid</td><td>Fermer les pores</td></tr>\n<tr><td>Séchage</td><td>Air chaud</td><td>Éviter les traces</td></tr>\n</tbody>\n</table>\n<p>Des rinçages séparent chaque étape. Le contact électrique se fait par des <strong>montages</strong> en aluminium ou en titane serrés sur la pièce : l'oxyde étant isolant, le contact doit être ferme dès le départ, et la zone de contact restera sans couche (marque de contact), d'où l'importance de la placer sur une surface non significative.</p>\n<p>La <strong>température</strong> du bain est déterminante : l'anodisation dégage de la chaleur et l'acide redissout la couche, d'autant plus vite que le bain est chaud. Un bain trop chaud donne une couche poudreuse, tendre et mal colmatable. Les cuves sont donc refroidies et agitées. L'anodisation dure se fait à basse température (vers 0 à 5 °C) et à forte densité de courant, sous des tensions plus élevées.</p>"
      },
      {
       "titre": "Épaisseur et temps d'anodisation",
       "contenu": "\n<p>L'épaisseur de couche dépend de la quantité d'électricité, du rendement et des conditions du bain. Dans les conditions classiques de l'anodisation sulfurique, on utilise une <strong>règle pratique</strong> issue de l'expérience : l'épaisseur en micromètres est voisine de <strong>0,3 × j × t</strong>, avec j en A/dm² et t en minutes. Le coefficient exact dépend de l'alliage, de la température et de la concentration ; chaque atelier l'ajuste à partir de ses mesures.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déterminer le temps d'anodisation pour une classe de 15 µm.\n<ol>\n<li>Spécification : épaisseur minimale 15 µm sur la surface significative.</li>\n<li>On vise une valeur moyenne avec une marge, par exemple 17 µm, car l'épaisseur varie selon la position sur le montage.</li>\n<li>Densité de courant choisie : 1,5 A/dm².</li>\n<li>Temps : t = 17 / (0,3 × 1,5) = 17 / 0,45 ≈ 38 minutes.</li>\n<li>Surface chargée : 60 dm² ; intensité à régler : 1,5 × 60 = 90 A.</li>\n<li>Vérifier l'épaisseur obtenue au courant de Foucault sur les premières pièces et ajuster le temps si nécessaire.</li>\n</ol></div>\n<p>Les normes classent les anodisations par <strong>classe d'épaisseur</strong> (par exemple des classes de 5, 10, 15, 20 et 25 µm en anodisation décorative et de protection). Dans le bâtiment, le label de qualité <strong>QUALANOD</strong> fixe des épaisseurs minimales selon l'exposition des menuiseries et des façades, plus élevées en atmosphère marine ou industrielle.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les alliages riches en cuivre ou en silicium s'anodisent plus difficilement : la tension monte, la couche croît moins vite et peut brûler aux arêtes. On ne transpose pas le réglage d'un profilé de la série 6000 à une pièce de fonderie sans essai préalable.</div>"
      },
      {
       "titre": "Coloration et colmatage",
       "contenu": "\n<p>Les pores de la couche fraîche peuvent être colorés de deux manières :</p>\n<ul>\n<li>par <strong>coloration par absorption</strong> : immersion dans un colorant organique ou minéral, qui pénètre les pores ; on obtient des teintes vives (rouge, bleu, noir, or) dont la tenue à la lumière dépend du colorant ;</li>\n<li>par <strong>électrocoloration</strong> : passage dans un bain de sels métalliques (étain le plus souvent) sous courant alternatif ; le métal se dépose au fond des pores et donne des teintes bronze à noir très stables à la lumière, utilisées en architecture.</li>\n</ul>\n<p>Le <strong>colmatage hydrothermal</strong> consiste à plonger la pièce dans de l'eau déminéralisée proche de l'ébullition : l'alumine s'hydrate, gonfle et referme les pores. La durée pratique est souvent de l'ordre de 2 à 3 minutes par micromètre d'épaisseur. Le <strong>colmatage à froid</strong> (bains à base de sels de nickel ou sans nickel, vers 25 à 30 °C) consomme moins d'énergie mais demande un mûrissement. Un colmatage insuffisant laisse une couche absorbante, qui se tache et protège mal.</p>\n<p>On contrôle la qualité du colmatage par des essais normalisés : la <strong>goutte de colorant</strong> (une tache indique des pores ouverts), la mesure d'<strong>admittance</strong>, ou l'essai de perte de masse après immersion acide.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une empreinte de doigt sur une pièce anodisée non colmatée peut rester visible définitivement après coloration. Les opérateurs manipulent les pièces avec des gants propres entre l'anodisation et le colmatage.</div>"
      },
      {
       "titre": "Les conversions chimiques",
       "contenu": "\n<p>Une <strong>couche de conversion chimique</strong> se forme sans courant, par réaction entre la surface et le bain. Elle est mince, adhérente et sert surtout de base d'accrochage pour la peinture et de protection temporaire.</p>\n<h4>La phosphatation</h4>\n<p>Sur l'acier, la <strong>phosphatation</strong> forme une couche cristalline de phosphates métalliques. On distingue :</p>\n<table>\n<thead><tr><th>Type</th><th>Masse de couche indicative</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Phosphatation amorphe au fer</td><td>0,2 à 1 g/m²</td><td>Préparation simple avant peinture</td></tr>\n<tr><td>Phosphatation au zinc</td><td>1 à 10 g/m² et plus</td><td>Base de peinture automobile, protection temporaire huilée, aide au formage</td></tr>\n<tr><td>Phosphatation au manganèse</td><td>5 à 20 g/m² et plus</td><td>Rodage et anti-grippage des pièces frottantes (engrenages, segments)</td></tr>\n</tbody>\n</table>\n<p>La couche se caractérise par sa <strong>masse surfacique</strong> en g/m², mesurée par pesée avant et après dissolution de la couche. Le bain se suit par l'acidité libre et l'acidité totale, dosées par titrage, et par la teneur en accélérateur.</p>\n<h4>Les conversions de l'aluminium et du zinc</h4>\n<p>Sur l'aluminium à peindre, la <strong>chromatation</strong> historique au chrome hexavalent est remplacée par des conversions au <strong>chrome trivalent</strong> ou sans chrome (à base de zirconium ou de titane). Sur le zinc, ce sont les passivations déjà évoquées pour le zingage. Ces couches très minces, souvent invisibles ou légèrement irisées, se contrôlent par la masse de couche ou par fluorescence X.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une conversion chimique ne remplace pas une peinture : elle en améliore l'adhérence et ralentit la corrosion sous le film. Le système complet « préparation + conversion + peinture » se qualifie comme un tout.</div>"
      }
     ],
     "points_cles": [
      "En anodisation, la pièce d'aluminium est l'anode ; elle se couvre d'une couche d'alumine poreuse.",
      "La couche se forme pour moitié dans le métal et pour moitié au-dessus de la surface d'origine.",
      "Bain sulfurique classique : environ 180 à 200 g/L d'acide, 18 à 20 °C, 1,2 à 1,5 A/dm².",
      "Règle pratique en anodisation sulfurique : épaisseur en µm voisine de 0,3 × j × t (A/dm², minutes).",
      "La température du bain est critique ; l'anodisation dure se fait à basse température.",
      "La coloration remplit les pores ; le colmatage les referme et conditionne la tenue à la corrosion.",
      "La phosphatation forme une couche cristalline caractérisée par sa masse surfacique en g/m².",
      "Les conversions sans chrome hexavalent remplacent progressivement les chromatations."
     ],
     "lexique": [
      {
       "terme": "Anodisation",
       "def": "Oxydation électrolytique de l'aluminium, placé en anode, qui forme une couche d'alumine."
      },
      {
       "terme": "Alumine",
       "def": "Oxyde d'aluminium Al2O3, dur et isolant électrique."
      },
      {
       "terme": "Couche barrière",
       "def": "Partie compacte et très mince de la couche anodique, au contact du métal."
      },
      {
       "terme": "Satinage",
       "def": "Attaque alcaline contrôlée qui donne un aspect mat uniforme à l'aluminium."
      },
      {
       "terme": "Électrocoloration",
       "def": "Coloration d'une couche anodique par dépôt de métal au fond des pores sous courant alternatif."
      },
      {
       "terme": "Colmatage",
       "def": "Traitement qui referme les pores de la couche anodique."
      },
      {
       "terme": "Anodisation dure",
       "def": "Anodisation à basse température et forte densité de courant donnant une couche épaisse et très dure."
      },
      {
       "terme": "Phosphatation",
       "def": "Conversion chimique formant une couche cristalline de phosphates sur l'acier ou le zinc."
      },
      {
       "terme": "Masse surfacique de couche",
       "def": "Masse de couche de conversion par unité de surface, en g/m²."
      },
      {
       "terme": "QUALANOD",
       "def": "Label de qualité de l'anodisation, notamment pour l'aluminium du bâtiment."
      }
     ]
    },
    {
     "id": "btdm-chimique-thermique",
     "titre": "Nickel chimique, galvanisation à chaud et projection thermique",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Expliquer le principe d'un dépôt autocatalytique et ses avantages sur le dépôt électrolytique.",
      "Décrire la conduite d'un bain de nickel chimique et ses paramètres critiques.",
      "Décrire les étapes de la galvanisation à chaud et la structure du revêtement obtenu.",
      "Présenter la projection thermique et les dépôts sous vide comme alternatives.",
      "Comparer ces procédés pour un besoin donné."
     ],
     "sections": [
      {
       "titre": "Le dépôt autocatalytique de nickel",
       "contenu": "\n<p>Le <strong>nickel chimique</strong> (on dit aussi nickel autocatalytique) se dépose <strong>sans courant extérieur</strong>. Le bain contient un sel de nickel, un <strong>réducteur</strong>, le plus souvent l'hypophosphite de sodium, des complexants et des stabilisants. Une fois la réaction amorcée sur une surface catalytique, le nickel déposé catalyse lui-même la suite du dépôt : la réaction s'auto-entretient, d'où le terme <strong>autocatalytique</strong>. Le dépôt obtenu n'est pas du nickel pur mais un alliage <strong>nickel-phosphore</strong>.</p>\n<p>Son principal avantage est la <strong>régularité d'épaisseur</strong> : comme aucun courant ne se concentre sur les arêtes, la même épaisseur se forme partout où le bain circule, y compris dans les alésages, les filetages et les trous borgnes. C'est le procédé de choix pour des pièces de forme complexe à cote précise : corps de vannes, pistons, moules, pièces hydrauliques.</p>\n<table>\n<thead><tr><th>Teneur en phosphore</th><th>Propriétés dominantes</th></tr></thead>\n<tbody>\n<tr><td>Bas phosphore (2 à 5 %)</td><td>Dureté élevée brute de dépôt, bonne résistance à l'usure</td></tr>\n<tr><td>Moyen phosphore (6 à 9 %)</td><td>Compromis courant, aspect brillant</td></tr>\n<tr><td>Haut phosphore (10 à 13 %)</td><td>Meilleure résistance à la corrosion, dépôt amorphe, non magnétique</td></tr>\n</tbody>\n</table>\n<p>Un <strong>traitement thermique</strong> après dépôt (par exemple vers 400 °C pendant une heure) augmente fortement la dureté du dépôt, jusqu'à des valeurs comparables au chrome dur ; un étuvage plus doux améliore l'adhérence et sert de dégazage.</p>"
      },
      {
       "titre": "Conduire un bain de nickel chimique",
       "contenu": "\n<p>Le bain travaille à chaud, typiquement entre 85 et 92 °C, à pH acide voisin de 4,5 à 5 pour les bains à l'hypophosphite. La vitesse de dépôt est de l'ordre de 10 à 25 µm par heure. Le bain est <strong>métastable</strong> : il tend à se décomposer spontanément, c'est-à-dire à déposer du nickel partout, sur les parois de la cuve, les résistances chauffantes et les particules en suspension. Sa conduite exige :</p>\n<ul>\n<li>un suivi fréquent de la teneur en nickel, souvent plusieurs fois par poste, avec réapprovisionnement par petits ajouts ;</li>\n<li>le respect de la <strong>charge</strong> en surface de pièces par litre de bain, indiquée par la fiche technique ;</li>\n<li>une filtration continue et l'absence de particules ;</li>\n<li>un chauffage sans point chaud ;</li>\n<li>la passivation régulière de la cuve inox à l'acide nitrique pour éviter que le nickel s'y dépose.</li>\n</ul>\n<p>Le bain vieillit : les phosphites, produits de la réaction, s'accumulent. On compte son âge en <strong>MTO</strong> (Metal Turn Over), nombre de fois où la quantité initiale de nickel a été consommée et remplacée. Au-delà d'un certain nombre de MTO, de l'ordre de 6 à 10 selon les bains, la qualité baisse et le bain est remplacé.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> suivre l'âge d'un bain de nickel chimique.\n<ol>\n<li>Données : cuve de 400 L à 6 g/L de nickel, soit 2 400 g de nickel initial.</li>\n<li>Le relevé des ajouts indique 9 600 g de nickel ajoutés depuis la mise en service.</li>\n<li>Âge : 9 600 / 2 400 = 4 MTO.</li>\n<li>La fiche technique fixe une fin de vie à 8 MTO : il reste environ 4 MTO, soit 9 600 g de nickel à consommer.</li>\n<li>Avec une consommation de 1 200 g par semaine, le renouvellement est à planifier dans environ 8 semaines.</li>\n</ol></div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un bain qui se met à « bouillir » avec un dégagement gazeux intense et un dépôt noir sur les parois est en <strong>décomposition</strong>. Il faut couper le chauffage, sortir les pièces et prévenir le responsable. Ajouter du produit dans un bain en décomposition aggrave la situation.</div>"
      },
      {
       "titre": "La galvanisation à chaud",
       "contenu": "\n<p>La <strong>galvanisation à chaud</strong> (ou galvanisation au trempé) consiste à immerger des pièces en acier dans un bain de <strong>zinc fondu</strong> vers 445 à 460 °C. Le zinc réagit avec le fer et forme des couches d'<strong>alliages fer-zinc</strong> liées métallurgiquement au substrat, recouvertes d'une couche de zinc pur. Le revêtement est épais, très adhérent, résistant aux chocs et protège à la fois par barrière et de façon sacrificielle. Il équipe les charpentes, garde-corps, poteaux, glissières, pylônes, mobilier urbain.</p>\n<p>La gamme comprend :</p>\n<ol>\n<li>un dégraissage ;</li>\n<li>un décapage à l'acide chlorhydrique et un rinçage ;</li>\n<li>un <strong>fluxage</strong> dans une solution de chlorure de zinc et d'ammonium, qui protège la surface de l'oxydation et favorise la réaction avec le zinc ;</li>\n<li>un séchage ;</li>\n<li>l'immersion dans le zinc pendant quelques minutes, puis la sortie lente et l'élimination des excès ;</li>\n<li>un refroidissement à l'air ou dans l'eau, et éventuellement une passivation.</li>\n</ol>\n<p>La norme NF EN ISO 1461 fixe des épaisseurs minimales qui dépendent de l'épaisseur de l'acier : plus l'acier est épais, plus le revêtement exigé est épais, avec des valeurs de l'ordre de 45 µm pour les tôles minces à 85 µm en moyenne pour les aciers de plus de 6 mm. La composition de l'acier, notamment sa teneur en silicium et en phosphore, influence fortement la réaction : certains aciers donnent des revêtements très épais, gris et cassants.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les pièces creuses (tubes, caissons) doivent être percées de trous d'évent et d'écoulement. Un corps creux fermé plongé dans le zinc à 450 °C peut exploser sous la pression de l'air ou de l'humidité emprisonnés. La conception des pièces est vérifiée avant galvanisation.</div>"
      },
      {
       "titre": "Projection thermique et dépôts sous vide",
       "contenu": "\n<p>La <strong>projection thermique</strong> fond un matériau d'apport (fil ou poudre) et le projette en fines gouttelettes sur la pièce, préalablement sablée pour créer une rugosité d'accrochage. Les gouttelettes s'écrasent et s'empilent en lamelles. Selon la source de chaleur, on distingue la flamme, l'arc électrique entre deux fils, le plasma et la projection à grande vitesse (HVOF). On dépose ainsi :</p>\n<ul>\n<li>du zinc ou de l'aluminium (métallisation) pour la protection anticorrosion de grands ouvrages, souvent suivie de peinture ;</li>\n<li>des alliages durs ou des carbures pour la résistance à l'usure, en alternative au chrome dur ;</li>\n<li>des céramiques pour l'isolation thermique ou électrique.</li>\n</ul>\n<p>Le dépôt est poreux et son adhérence est mécanique ; les épaisseurs vont de quelques dizaines de micromètres à plusieurs millimètres. Le procédé est bruyant, produit des fumées et des rayonnements : il se pratique en cabine avec aspiration.</p>\n<p>Les <strong>dépôts sous vide</strong> forment des couches de quelques micromètres. En <strong>PVD</strong> (dépôt physique en phase vapeur), le matériau est vaporisé puis condensé sur les pièces : nitrure de titane doré sur les outils de coupe, revêtements décoratifs de robinetterie. En <strong>CVD</strong> (dépôt chimique en phase vapeur), la couche résulte de la réaction de gaz à haute température. Ces procédés exigent des pièces parfaitement propres et sèches.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la galvanisation, la projection thermique et le PVD sont souvent réalisés par des sous-traitants spécialisés. L'opérateur d'une ligne électrolytique doit néanmoins connaître ces procédés pour comprendre les spécifications des plans et orienter une pièce vers le bon prestataire.</div>"
      },
      {
       "titre": "Comparer les procédés",
       "contenu": "\n<table>\n<thead><tr><th>Critère</th><th>Zinc électrolytique</th><th>Galvanisation à chaud</th><th>Nickel chimique</th><th>Projection thermique</th></tr></thead>\n<tbody>\n<tr><td>Épaisseur</td><td>5 à 25 µm</td><td>45 à plus de 100 µm</td><td>5 à 50 µm</td><td>50 µm à plusieurs mm</td></tr>\n<tr><td>Régularité</td><td>Moyenne, arêtes plus chargées</td><td>Bonne, coulures possibles</td><td>Excellente</td><td>Dépend de l'opérateur ou du robot</td></tr>\n<tr><td>Taille de pièces</td><td>Petites à moyennes</td><td>Jusqu'à plusieurs mètres</td><td>Petites à moyennes</td><td>Très grandes possibles, sur site</td></tr>\n<tr><td>Aspect</td><td>Brillant, couleur selon passivation</td><td>Gris, cristallisé, irrégulier</td><td>Brillant à semi-brillant</td><td>Rugueux</td></tr>\n<tr><td>Échauffement de la pièce</td><td>Faible</td><td>Environ 450 °C</td><td>Environ 90 °C</td><td>Faible à modéré</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le choix ne se fait pas sur le seul critère de corrosion. Les dimensions de la pièce, la précision des cotes, l'aspect exigé, la tenue à la température et le coût orientent vers un procédé plutôt qu'un autre. Une pièce de précision ne se galvanise pas à chaud ; une charpente ne se zingue pas électrolytiquement.</div>"
      }
     ],
     "points_cles": [
      "Le nickel chimique se dépose sans courant grâce à un réducteur ; c'est un alliage nickel-phosphore.",
      "Son épaisseur est régulière, y compris dans les trous et les filetages.",
      "La teneur en phosphore oriente les propriétés : dureté en bas phosphore, corrosion en haut phosphore.",
      "Un bain de nickel chimique est métastable ; son âge se compte en MTO.",
      "La galvanisation à chaud se fait dans du zinc fondu vers 450 °C et forme des alliages fer-zinc liés à l'acier.",
      "La norme NF EN ISO 1461 lie l'épaisseur minimale de zinc à l'épaisseur de l'acier.",
      "Les corps creux à galvaniser doivent être percés d'évents.",
      "La projection thermique et les dépôts sous vide complètent les procédés en cuve pour l'usure, la décoration et les grandes pièces."
     ],
     "lexique": [
      {
       "terme": "Dépôt autocatalytique",
       "def": "Dépôt métallique sans courant extérieur, catalysé par le métal déjà déposé."
      },
      {
       "terme": "Hypophosphite",
       "def": "Réducteur utilisé dans les bains de nickel chimique, source du phosphore du dépôt."
      },
      {
       "terme": "MTO",
       "def": "Metal Turn Over : nombre de renouvellements complets du métal d'un bain chimique depuis sa mise en service."
      },
      {
       "terme": "Décomposition d'un bain",
       "def": "Réaction incontrôlée d'un bain chimique qui dépose du métal partout dans la cuve."
      },
      {
       "terme": "Galvanisation à chaud",
       "def": "Immersion de l'acier dans du zinc fondu pour former un revêtement d'alliages fer-zinc et de zinc."
      },
      {
       "terme": "Fluxage",
       "def": "Immersion dans une solution de sels qui protège et active la surface avant galvanisation."
      },
      {
       "terme": "Trou d'évent",
       "def": "Perçage d'un corps creux permettant à l'air de s'échapper et au zinc de circuler."
      },
      {
       "terme": "Projection thermique",
       "def": "Procédé qui projette un matériau fondu en gouttelettes sur une pièce."
      },
      {
       "terme": "PVD",
       "def": "Dépôt physique en phase vapeur, sous vide, de couches minces dures ou décoratives."
      }
     ]
    },
    {
     "id": "btdm-peintures",
     "titre": "Peintures et revêtements organiques",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Décrire la composition d'une peinture et le rôle de chaque constituant.",
      "Comparer peintures liquides, peintures en poudre et cataphorèse.",
      "Expliquer les modes d'application et leur rendement de transfert.",
      "Calculer une consommation de peinture à partir de la surface et de l'épaisseur visée.",
      "Relier séchage et cuisson aux propriétés du film."
     ],
     "sections": [
      {
       "titre": "Composition d'une peinture",
       "contenu": "\n<p>Une <strong>peinture</strong> est un produit qui, appliqué en couche mince, forme après séchage ou cuisson un <strong>film</strong> continu, adhérent et protecteur. Elle comprend :</p>\n<table>\n<thead><tr><th>Constituant</th><th>Rôle</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>Liant</td><td>Forme le film, assure l'adhérence et la cohésion</td><td>Résines époxy, polyester, polyuréthane, acrylique, alkyde</td></tr>\n<tr><td>Pigments</td><td>Donnent la couleur, l'opacité ou une action anticorrosion</td><td>Dioxyde de titane, oxydes de fer, phosphate de zinc</td></tr>\n<tr><td>Charges</td><td>Modifient le corps, la dureté, le prix</td><td>Carbonate de calcium, talc, sulfate de baryum</td></tr>\n<tr><td>Solvant ou diluant</td><td>Rend la peinture fluide pour l'application, puis s'évapore</td><td>Solvants organiques, eau</td></tr>\n<tr><td>Additifs</td><td>Améliorent tension, mouillage, anti-mousse, catalyse</td><td>Agents de tension, siccatifs, durcisseurs</td></tr>\n</tbody>\n</table>\n<p>L'<strong>extrait sec</strong> est la part de la peinture qui reste dans le film après évaporation des solvants. L'<strong>extrait sec en volume</strong> sert aux calculs d'épaisseur : une peinture à 50 % d'extrait sec en volume appliquée à 100 µm d'épaisseur humide donne 50 µm de film sec.</p>\n<p>Les peintures se classent aussi par leur mode de durcissement : séchage physique par évaporation, oxydation à l'air (alkydes), réaction chimique entre deux composants mélangés juste avant emploi (époxy et polyuréthane bicomposants, avec une <strong>durée de vie en pot</strong> limitée), polymérisation à chaud (poudres, cataphorèse).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les peintures solvantées émettent des <strong>composés organiques volatils</strong> (COV), inflammables et nocifs. Leur emploi impose une cabine ventilée, l'absence de source d'ignition, un appareil de protection respiratoire adapté et le respect des règles de réduction des émissions de COV applicables aux installations.</div>"
      },
      {
       "titre": "Les systèmes de peinture",
       "contenu": "\n<p>Une protection durable repose rarement sur une seule couche. Un <strong>système de peinture</strong> associe :</p>\n<ul>\n<li>une <strong>préparation</strong> : dégraissage, grenaillage ou conversion (phosphatation, conversion sans chrome sur aluminium) ;</li>\n<li>un <strong>primaire</strong> : adhérence et protection anticorrosion ;</li>\n<li>une ou plusieurs <strong>couches intermédiaires</strong> : épaisseur et effet barrière ;</li>\n<li>une <strong>finition</strong> : couleur, brillance, résistance aux UV et aux intempéries.</li>\n</ul>\n<p>Pour les structures en acier, la norme NF EN ISO 12944 définit des <strong>catégories de corrosivité</strong> de l'atmosphère, de C1 (intérieur chauffé, très faible) à C5 (très élevée, industrielle ou marine), complétées par une catégorie extrême, et des niveaux de durabilité attendue. Le prescripteur choisit le système et l'épaisseur totale de film sec en fonction de ces deux données.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'épaisseur spécifiée est toujours une épaisseur de <strong>film sec</strong> (EFS), mesurée sur la pièce finie. L'épaisseur de film humide sert seulement à guider le peintre pendant l'application.</div>"
      },
      {
       "titre": "Les modes d'application",
       "contenu": "\n<table>\n<thead><tr><th>Mode</th><th>Principe</th><th>Rendement de transfert indicatif</th></tr></thead>\n<tbody>\n<tr><td>Pistolet pneumatique</td><td>Pulvérisation par air comprimé</td><td>Environ 30 à 50 %</td></tr>\n<tr><td>Pistolet airless ou airmix</td><td>Pulvérisation par haute pression du produit</td><td>Environ 50 à 70 %</td></tr>\n<tr><td>Pulvérisation électrostatique</td><td>Les gouttelettes chargées sont attirées par la pièce reliée à la terre</td><td>Environ 60 à 85 %</td></tr>\n<tr><td>Trempé</td><td>Immersion et égouttage</td><td>Très élevé, épaisseur peu maîtrisée</td></tr>\n<tr><td>Cataphorèse</td><td>Dépôt électrophorétique en cuve</td><td>Supérieur à 95 %</td></tr>\n</tbody>\n</table>\n<p>Le <strong>rendement de transfert</strong> est la part de la peinture pulvérisée qui se retrouve réellement sur la pièce ; le reste constitue l'<strong>overspray</strong>, capté par les filtres ou le rideau d'eau de la cabine.</p>\n<h4>La peinture en poudre</h4>\n<p>La <strong>poudre thermodurcissable</strong> (polyester, époxy, hybride) est appliquée sans solvant au pistolet électrostatique sur la pièce reliée à la terre, puis <strong>cuite</strong> en étuve, typiquement entre 160 et 200 °C pendant 10 à 20 minutes selon la fiche du fabricant (température mesurée sur la pièce, pas dans l'air de l'étuve). La poudre non déposée est récupérée et recyclée. Les épaisseurs courantes sont de 60 à 120 µm en une couche. Dans le bâtiment, les labels QUALICOAT et QUALIMARINE encadrent le thermolaquage de l'aluminium.</p>\n<h4>La cataphorèse</h4>\n<p>En <strong>cataphorèse</strong>, la pièce est la cathode dans une cuve de peinture hydrodiluable ; sous une tension de l'ordre de 200 à 350 V, les particules de résine migrent et se déposent sur toute la surface, y compris dans les corps creux. Le dépôt devient isolant en grossissant, ce qui limite naturellement l'épaisseur (souvent 15 à 30 µm) et assure une excellente régularité. Après rinçage par ultrafiltrat, le film est cuit. C'est le primaire standard des caisses automobiles.</p>"
      },
      {
       "titre": "Calculer une consommation de peinture",
       "contenu": "\n<p>Le volume de peinture nécessaire dépend de la surface S, de l'épaisseur de film sec e visée, de l'extrait sec en volume ES<sub>v</sub> et du rendement de transfert R<sub>t</sub> :</p>\n<p><strong>V = (S × e) / (ES<sub>v</sub> × R<sub>t</sub>)</strong></p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer la peinture liquide pour un lot de 100 m² à 40 µm de film sec.\n<ol>\n<li>Volume de film sec : S × e = 100 m² × 40 × 10<sup>-6</sup> m = 0,004 m³ = 4 L.</li>\n<li>Extrait sec en volume : 50 %, donc volume de peinture déposée : 4 / 0,50 = 8 L.</li>\n<li>Rendement de transfert du pistolet électrostatique : 60 %, donc volume pulvérisé : 8 / 0,60 = 13,3 L.</li>\n<li>Ajouter la dilution éventuelle prévue par la fiche technique et les pertes de purge.</li>\n</ol>\nLe même raisonnement montre qu'en passant d'un pistolet pneumatique à 35 % à un électrostatique à 60 %, on économise plus de 40 % de peinture et autant de COV.</div>\n<p>Pour la poudre, on raisonne en masse : la masse de poudre déposée vaut S × e × ρ<sub>film</sub>, avec une masse volumique de film d'environ 1,2 à 1,8 g/cm³ selon la poudre ; le rendement global dépend surtout du taux de récupération.</p>"
      },
      {
       "titre": "Contrôler un film de peinture",
       "contenu": "\n<p>Les contrôles courants sont :</p>\n<ul>\n<li>l'<strong>épaisseur de film sec</strong>, mesurée par induction magnétique sur acier et par courants de Foucault sur aluminium, avec un nombre de mesures et des règles d'acceptation définis par la spécification ;</li>\n<li>l'<strong>adhérence</strong>, par l'essai de quadrillage (NF EN ISO 2409) : on trace au cutter un quadrillage jusqu'au substrat, on applique et arrache un ruban adhésif normalisé et on classe le résultat de 0 (aucun décollement) à 5 (décollement important) ;</li>\n<li>la <strong>cuisson</strong>, par l'essai de frottement au solvant ou par l'enregistrement de la courbe de température de la pièce dans l'étuve ;</li>\n<li>l'<strong>aspect</strong> : teinte comparée à une référence, brillance mesurée au brillancemètre, défauts (coulures, peau d'orange, cratères, grains).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les <strong>cratères</strong> sur un film de peinture sont très souvent dus à une contamination par des silicones ou des huiles : un aérosol de lubrifiant utilisé à proximité, une crème pour les mains, une graisse de convoyeur. Les ateliers de peinture interdisent les produits siliconés dans toute la zone.</div>\n<h4>Les défauts courants et leurs causes</h4>\n<table>\n<thead><tr><th>Défaut</th><th>Aspect</th><th>Causes fréquentes</th></tr></thead>\n<tbody>\n<tr><td>Coulure</td><td>Bourrelet ou larme sur une surface verticale</td><td>Épaisseur humide excessive, peinture trop diluée, pistolet trop proche</td></tr>\n<tr><td>Peau d'orange</td><td>Surface ondulée comme une écorce</td><td>Viscosité trop élevée, pulvérisation insuffisante, épaisseur de poudre trop forte</td></tr>\n<tr><td>Cratère</td><td>Petit creux circulaire jusqu'au fond</td><td>Contamination par silicone, huile, eau</td></tr>\n<tr><td>Bullage, piqûres</td><td>Petites bulles ou trous</td><td>Dégazage du substrat (fonte, pièce moulée), solvant emprisonné, humidité</td></tr>\n<tr><td>Manque d'adhérence</td><td>Décollement au quadrillage</td><td>Préparation insuffisante, conversion absente, sous-cuisson</td></tr>\n<tr><td>Écart de teinte</td><td>Couleur différente de la référence</td><td>Lot de peinture, surcuisson, épaisseur trop faible sur fond contrasté</td></tr>\n</tbody>\n</table>\n<p>Face à un défaut, on raisonne toujours dans l'ordre du procédé : support et préparation, produit, application, séchage ou cuisson. Le défaut visible en finition a très souvent sa cause plusieurs étapes en amont.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pièce sous-cuite peut sembler parfaite à la sortie de l'étuve mais présenter une mauvaise adhérence et une faible résistance chimique. Un défaut de cuisson ne se voit pas : il se mesure.</div>"
      }
     ],
     "points_cles": [
      "Une peinture comprend liant, pigments, charges, solvant et additifs ; le liant forme le film.",
      "L'extrait sec en volume relie l'épaisseur humide à l'épaisseur sèche.",
      "Un système de peinture associe préparation, primaire, intermédiaire et finition.",
      "La norme NF EN ISO 12944 classe la corrosivité des atmosphères de C1 à C5 et au-delà.",
      "L'application électrostatique et la cataphorèse ont des rendements de transfert élevés.",
      "La poudre est cuite en étuve ; la température à respecter est celle de la pièce.",
      "Consommation : V = S × e / (ESv × Rt).",
      "L'adhérence se contrôle par quadrillage (NF EN ISO 2409), classé de 0 à 5."
     ],
     "lexique": [
      {
       "terme": "Liant",
       "def": "Constituant d'une peinture qui forme le film et assure son adhérence."
      },
      {
       "terme": "Extrait sec",
       "def": "Part de la peinture qui reste dans le film après évaporation des solvants."
      },
      {
       "terme": "COV",
       "def": "Composés organiques volatils émis principalement par les solvants."
      },
      {
       "terme": "Durée de vie en pot",
       "def": "Temps pendant lequel un produit bicomposant mélangé reste utilisable."
      },
      {
       "terme": "Rendement de transfert",
       "def": "Part de la peinture pulvérisée qui se dépose réellement sur la pièce."
      },
      {
       "terme": "Overspray",
       "def": "Peinture pulvérisée qui n'atteint pas la pièce."
      },
      {
       "terme": "Cataphorèse",
       "def": "Dépôt de peinture hydrodiluable sur une pièce placée en cathode sous tension."
      },
      {
       "terme": "Thermolaquage",
       "def": "Application de peinture en poudre suivie d'une cuisson."
      },
      {
       "terme": "Catégorie de corrosivité",
       "def": "Classe de l'agressivité d'une atmosphère vis-à-vis de l'acier, selon NF EN ISO 12944."
      },
      {
       "terme": "Essai de quadrillage",
       "def": "Essai d'adhérence par incisions croisées et arrachage au ruban adhésif."
      }
     ]
    },
    {
     "id": "btdm-traitements-thermiques",
     "titre": "Traitements thermiques et thermochimiques des aciers",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Expliquer les transformations de structure de l'acier au chauffage et au refroidissement.",
      "Distinguer recuit, trempe et revenu par leur cycle et leur effet.",
      "Décrire la cémentation, la carbonitruration et la nitruration.",
      "Lire un cycle thermique et identifier ses paramètres de contrôle.",
      "Choisir un contrôle de dureté adapté au traitement."
     ],
     "sections": [
      {
       "titre": "Le principe des traitements thermiques",
       "contenu": "\n<p>Un <strong>traitement thermique</strong> est une suite de chauffages, de maintiens et de refroidissements contrôlés, appliquée à un métal à l'état solide pour modifier sa <strong>structure</strong> et donc ses propriétés : dureté, résistance, ténacité, usinabilité. Contrairement aux revêtements, il ne change pas la composition de surface ; un <strong>traitement thermochimique</strong>, lui, enrichit la surface en un élément (carbone, azote) avant ou pendant le cycle thermique.</p>\n<p>Tout cycle se décrit par quatre paramètres :</p>\n<ul>\n<li>la <strong>vitesse de chauffage</strong>, souvent limitée pour éviter les déformations des pièces massives ;</li>\n<li>la <strong>température de maintien</strong> ;</li>\n<li>la <strong>durée de maintien</strong>, qui dépend de l'épaisseur de la pièce ;</li>\n<li>le <strong>mode de refroidissement</strong> : four, air, huile, eau, eau polymère, gaz sous pression.</li>\n</ul>\n<p>Le cycle se représente par un graphique température-temps, appelé <strong>cycle thermique</strong>, qui sert à la fois de consigne de four et de preuve d'enregistrement.</p>"
      },
      {
       "titre": "Les structures de l'acier",
       "contenu": "\n<p>L'acier est un alliage de fer et de carbone (moins de 2 % de carbone). Le fer change de structure cristalline avec la température. À température ambiante, un acier non allié lentement refroidi est formé de <strong>ferrite</strong> (fer presque pur, doux et ductile) et de <strong>perlite</strong> (mélange lamellaire de ferrite et de cémentite, carbure de fer dur). Au-dessus d'une température critique, il se transforme en <strong>austénite</strong>, structure qui dissout le carbone.</p>\n<p>Le diagramme fer-carbone indique ces domaines. Deux repères sont à connaître : le point <strong>eutectoïde</strong>, à 0,77 % de carbone et 727 °C, où la perlite se transforme en austénite, et la ligne <strong>Ac3</strong>, au-dessus de laquelle un acier hypoeutectoïde est entièrement austénitique (vers 910 °C pour le fer pur, vers 780 à 800 °C pour un acier à 0,45 % de carbone).</p>\n<p>Si l'on refroidit lentement l'austénite, elle redonne ferrite et perlite. Si on la refroidit très vite, le carbone n'a pas le temps de se séparer : il reste piégé et forme la <strong>martensite</strong>, structure très dure et fragile. La vitesse de refroidissement minimale pour obtenir de la martensite s'appelle la <strong>vitesse critique de trempe</strong> ; les éléments d'alliage (chrome, nickel, molybdène) l'abaissent et augmentent la <strong>trempabilité</strong>, c'est-à-dire la profondeur sur laquelle l'acier peut être trempé.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la dureté obtenue après trempe dépend surtout de la <strong>teneur en carbone</strong> ; la profondeur trempée dépend surtout des <strong>éléments d'alliage</strong> et de la taille de la pièce.</div>"
      },
      {
       "titre": "Recuit, trempe et revenu",
       "contenu": "\n<table>\n<thead><tr><th>Traitement</th><th>Cycle</th><th>Effet recherché</th></tr></thead>\n<tbody>\n<tr><td>Recuit de normalisation</td><td>Austénitisation puis refroidissement à l'air calme</td><td>Affiner et homogénéiser la structure après forge ou soudage</td></tr>\n<tr><td>Recuit d'adoucissement</td><td>Maintien un peu sous ou autour de 727 °C, refroidissement lent</td><td>Faciliter l'usinage ou la déformation</td></tr>\n<tr><td>Recuit de détente</td><td>Maintien vers 550 à 650 °C, refroidissement lent</td><td>Réduire les contraintes internes sans changer la structure</td></tr>\n<tr><td>Trempe</td><td>Austénitisation (environ Ac3 + 50 °C) puis refroidissement rapide</td><td>Obtenir de la martensite dure</td></tr>\n<tr><td>Revenu</td><td>Réchauffage sous 727 °C après trempe, puis refroidissement</td><td>Réduire la fragilité, ajuster le compromis dureté-ténacité</td></tr>\n</tbody>\n</table>\n<p>La trempe n'est jamais une fin en soi : la martensite brute est trop fragile et chargée de contraintes. Le <strong>revenu</strong> doit suivre rapidement. Un revenu à basse température (150 à 250 °C) conserve une grande dureté pour les outils et les pièces de frottement ; un revenu à haute température (500 à 650 °C) donne une meilleure ténacité ; l'ensemble trempe et revenu haut s'appelle <strong>traitement d'amélioration</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir le cycle d'une pièce en C45 à tremper et revenir.\n<ol>\n<li>Repérer Ac3 du C45 : environ 780 °C ; température d'austénitisation choisie : environ 830 à 860 °C selon la fiche de l'acier.</li>\n<li>Durée de maintien : pour une pièce de 40 mm d'épaisseur, compter le temps de mise à cœur plus un maintien ; une règle d'atelier courante est de l'ordre d'une minute par millimètre d'épaisseur, à confirmer par la gamme.</li>\n<li>Milieu de trempe : eau ou eau polymère pour un acier non allié à faible trempabilité.</li>\n<li>Revenu immédiat, par exemple vers 550 à 600 °C pendant une à deux heures pour une pièce mécanique tenace.</li>\n<li>Contrôler la dureté et l'absence de tapures ; enregistrer le cycle réel.</li>\n</ol></div>"
      },
      {
       "titre": "Les traitements thermochimiques",
       "contenu": "\n<p>On veut souvent une pièce <strong>dure en surface</strong> (usure, fatigue de contact) et <strong>tenace à cœur</strong> (chocs). Les traitements thermochimiques y répondent.</p>\n<ul>\n<li>La <strong>cémentation</strong> enrichit en carbone la surface d'un acier à bas carbone, à l'état austénitique, vers 900 à 950 °C, en atmosphère carburante ou sous vide avec un gaz carburant. On vise environ 0,7 à 0,9 % de carbone en surface. La pièce est ensuite trempée puis revenue à basse température : la couche cémentée devient martensitique et dure, le cœur reste tenace. On spécifie une <strong>profondeur de cémentation</strong> conventionnelle, mesurée à une dureté donnée (souvent 550 HV), par exemple 0,6 à 0,8 mm pour des engrenages.</li>\n<li>La <strong>carbonitruration</strong> ajoute à la fois carbone et azote, à température un peu plus basse, pour de faibles profondeurs.</li>\n<li>La <strong>nitruration</strong> diffuse de l'azote vers 500 à 570 °C, sans trempe ultérieure : les déformations sont très faibles. Elle forme une couche de combinaison superficielle et une couche de diffusion durcie par des nitrures, surtout sur les aciers contenant chrome, aluminium ou molybdène. Elle se fait en gaz, en bain de sels ou par plasma (nitruration ionique).</li>\n<li>La <strong>trempe superficielle</strong> par induction ou au laser chauffe seulement la surface d'un acier mi-dur avant de la tremper : elle ne change pas la composition mais n'est pas thermochimique.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les zones qui ne doivent pas être cémentées (filetages, zones à usiner après traitement) sont protégées par une <strong>réserve</strong> : peinture d'épargne ou dépôt de cuivre. Une réserve oubliée rend un filetage dur et cassant.</div>"
      },
      {
       "titre": "Fours, atmosphères et contrôles",
       "contenu": "\n<p>Les fours de traitement thermique sont électriques ou à gaz, à chargement par lots (fours à cloche, fours à sole, fours sous vide) ou continus (fours à bande, à poussoir). L'<strong>atmosphère</strong> du four protège la pièce de l'oxydation et de la <strong>décarburation</strong> (perte de carbone en surface, qui la rend molle) ou, au contraire, apporte carbone ou azote. Les atmosphères contiennent souvent des gaz inflammables (hydrogène, monoxyde de carbone) et toxiques (monoxyde de carbone) : purge à l'azote, détecteurs et procédures de démarrage sont obligatoires.</p>\n<p>Les traitements thermiques interagissent avec les traitements de surface. Un dégazage après zingage ne doit pas dépasser la température de revenu de la pièce, sinon il la ramollit. À l'inverse, une pièce cémentée et trempée, très dure en surface, est sensible à la fragilisation par l'hydrogène lors d'un décapage ou d'un dépôt ultérieur. Les gammes doivent donc être construites en connaissant l'historique thermique de chaque pièce, qui figure sur le plan ou dans le dossier de fabrication.</p>\n<p>Les bains de trempe à l'huile présentent un risque d'incendie si la charge n'est pas immergée rapidement et complètement.</p>\n<table>\n<thead><tr><th>Contrôle</th><th>Échelle ou méthode</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Dureté Rockwell C</td><td>HRC, pénétrateur diamant conique</td><td>Pièces trempées massives</td></tr>\n<tr><td>Dureté Vickers</td><td>HV, pyramide diamant, charges variables</td><td>Couches minces, filiations de dureté</td></tr>\n<tr><td>Dureté Brinell</td><td>HBW, bille</td><td>Aciers recuits ou améliorés</td></tr>\n<tr><td>Filiation de dureté</td><td>Mesures HV sur coupe, de la surface vers le cœur</td><td>Profondeur de cémentation ou de nitruration</td></tr>\n<tr><td>Examen métallographique</td><td>Coupe polie et attaquée, microscope</td><td>Structure, décarburation, couche de combinaison</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en aéronautique et en automobile, le traitement thermique est un <strong>procédé spécial</strong> : son résultat ne peut pas être entièrement vérifié sur la pièce finie sans la détruire. On qualifie donc les fours (homogénéité de température), on étalonne les thermocouples, on enregistre chaque cycle et on traite des éprouvettes témoins avec les charges.</div>"
      }
     ],
     "points_cles": [
      "Un traitement thermique modifie la structure par un cycle chauffage-maintien-refroidissement.",
      "Au-dessus d'Ac3, l'acier est austénitique ; un refroidissement rapide donne de la martensite dure.",
      "La dureté après trempe dépend du carbone ; la trempabilité dépend des éléments d'alliage.",
      "Le revenu suit toujours la trempe pour réduire la fragilité.",
      "Le recuit adoucit, homogénéise ou détend l'acier selon son cycle.",
      "La cémentation enrichit la surface en carbone avant trempe ; la nitruration diffuse de l'azote sans trempe.",
      "Les zones à épargner sont protégées par une réserve.",
      "Dureté HRC, HV ou HBW et filiation de dureté contrôlent le résultat ; le cycle réel est enregistré."
     ],
     "lexique": [
      {
       "terme": "Austénite",
       "def": "Structure de l'acier à haute température, capable de dissoudre le carbone."
      },
      {
       "terme": "Martensite",
       "def": "Structure très dure et fragile obtenue par refroidissement rapide de l'austénite."
      },
      {
       "terme": "Ac3",
       "def": "Température au-dessus de laquelle un acier hypoeutectoïde est entièrement austénitique au chauffage."
      },
      {
       "terme": "Trempabilité",
       "def": "Aptitude d'un acier à prendre la trempe en profondeur."
      },
      {
       "terme": "Revenu",
       "def": "Réchauffage après trempe à une température inférieure à 727 °C pour réduire la fragilité."
      },
      {
       "terme": "Cémentation",
       "def": "Enrichissement superficiel en carbone d'un acier, suivi d'une trempe."
      },
      {
       "terme": "Nitruration",
       "def": "Diffusion d'azote en surface vers 500 à 570 °C, formant des nitrures durs."
      },
      {
       "terme": "Décarburation",
       "def": "Perte de carbone en surface lors d'un chauffage en atmosphère oxydante."
      },
      {
       "terme": "Filiation de dureté",
       "def": "Série de mesures de dureté réalisées de la surface vers le cœur sur une coupe."
      },
      {
       "terme": "Procédé spécial",
       "def": "Procédé dont le résultat ne peut être entièrement vérifié après coup et qui doit être qualifié et maîtrisé."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Installations, conduite et maintenance",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btdm-installations",
     "titre": "Les installations de traitement et leurs équipements",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire l'organisation d'une ligne de traitement manuelle ou automatique.",
      "Identifier les équipements d'une cuve et leur fonction.",
      "Expliquer le fonctionnement d'un redresseur et des liaisons électriques.",
      "Calculer une puissance de chauffage ou de refroidissement simple.",
      "Lire un programme de ligne et calculer une cadence."
     ],
     "sections": [
      {
       "titre": "Architecture d'une ligne de traitement",
       "contenu": "\n<p>Une <strong>ligne de traitement</strong> est un alignement de cuves dans l'ordre de la gamme, desservi par un moyen de manutention. On distingue :</p>\n<ul>\n<li>les <strong>lignes manuelles</strong>, où l'opérateur déplace les montages à la main ou au palan : souples, adaptées aux petites séries et aux pièces variées ;</li>\n<li>les <strong>lignes automatiques à pont</strong> (ou à chariots), où un ou plusieurs ponts transbordeurs prennent les barres porte-pièces et les déplacent selon un programme : adaptées aux séries régulières ;</li>\n<li>les <strong>lignes continues</strong> (bobines de feuillard, fils) ou à convoyeur aérien (peinture, cataphorèse) ;</li>\n<li>les <strong>machines au tonneau</strong>, où des tonneaux rotatifs passent de cuve en cuve.</li>\n</ul>\n<p>Autour de la ligne se trouvent le <strong>poste de chargement</strong> et de déchargement, souvent séparés pour ne pas mélanger pièces brutes et pièces traitées, la <strong>zone de séchage</strong>, le <strong>local des redresseurs</strong>, le stockage des produits chimiques, le <strong>laboratoire</strong> et la <strong>station de traitement des effluents</strong>. Les cuves sont posées dans une <strong>rétention</strong> capable de recueillir les fuites, et chaque famille de bains incompatible (acides, bases, cyanures, chrome) dispose de sa propre rétention.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'implantation d'une ligne suit trois logiques : l'ordre de la gamme, la séparation des produits incompatibles et la circulation des pièces des zones sales vers les zones propres.</div>"
      },
      {
       "titre": "La cuve et ses équipements",
       "contenu": "\n<table>\n<thead><tr><th>Équipement</th><th>Fonction</th><th>Points de surveillance</th></tr></thead>\n<tbody>\n<tr><td>Cuve</td><td>Contenir le bain ; matériau adapté : polypropylène, PVC, acier revêtu, inox, titane</td><td>Fuites, déformation, état du revêtement</td></tr>\n<tr><td>Chauffage</td><td>Thermoplongeurs électriques ou échangeurs à eau chaude ou vapeur</td><td>Régulation, sonde, sécurité de niveau bas</td></tr>\n<tr><td>Refroidissement</td><td>Serpentins ou échangeurs alimentés en eau glacée</td><td>Température d'anodisation, encrassement</td></tr>\n<tr><td>Agitation</td><td>Homogénéiser le bain et renouveler la couche au contact des pièces : air insufflé, mouvement cathodique, recirculation</td><td>Débit d'air, absence d'air sur les bains qui n'en supportent pas</td></tr>\n<tr><td>Filtration</td><td>Retenir les particules en suspension (cartouches, poches, filtre-presse), parfois avec charbon actif</td><td>Pression différentielle, colmatage</td></tr>\n<tr><td>Aspiration</td><td>Capter vapeurs et brouillards au bord de cuve</td><td>Débit, état des fentes, laveur de gaz</td></tr>\n<tr><td>Anodes et paniers</td><td>Apporter le courant et le métal</td><td>Niveau de remplissage, état des sacs anodiques, contacts</td></tr>\n<tr><td>Barres et contacts</td><td>Conduire le courant jusqu'aux pièces</td><td>Propreté, échauffement</td></tr>\n</tbody>\n</table>\n<p>Le <strong>matériau de cuve</strong> doit résister au bain : le polypropylène convient à la plupart des bains jusqu'à environ 80 à 90 °C, le PVC à des températures plus basses, l'acier revêtu ou inox aux bains alcalins chauds. Les éléments chauffants sont en titane, en PTFE ou en quartz selon la corrosivité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un thermoplongeur électrique qui se retrouve hors du bain (niveau bas après évaporation ou fuite) surchauffe et peut enflammer une cuve en matière plastique. La sécurité de niveau bas coupe le chauffage ; on vérifie son fonctionnement et on maintient le niveau.</div>"
      },
      {
       "titre": "Alimentation électrique et redresseurs",
       "contenu": "\n<p>Le <strong>redresseur</strong> convertit le courant alternatif triphasé du réseau en courant continu basse tension et forte intensité : par exemple 12 V et 2 000 A pour une cuve de nickel, 25 V et 3 000 A pour une anodisation. Il se règle en <strong>intensité</strong> (régulation de courant, la plus utilisée pour les dépôts) ou en <strong>tension</strong> (souvent en anodisation). Les redresseurs modernes permettent des rampes de démarrage progressif, des courants pulsés ou inversés et un comptage des <strong>ampères-heures</strong>.</p>\n<p>Le compteur d'ampères-heures (A·h) cumule la quantité d'électricité passée dans la cuve. Il sert à déclencher automatiquement les ajouts d'additifs, dont la consommation est donnée par le fournisseur en mL par 1 000 A·h, et à vérifier la cohérence avec la loi de Faraday.</p>\n<p>Le courant passe du redresseur à la cuve par des <strong>barres de cuivre</strong> ou des câbles de forte section, puis par les <strong>contacts</strong> entre barre de cuve et barre porte-montage. Un contact sale ou desserré provoque une chute de tension, un échauffement et une mauvaise répartition entre montages. La chute de tension se mesure au voltmètre entre les deux côtés du contact.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> régler une cuve en fonction de la charge et contrôler la cohérence.\n<ol>\n<li>Surface d'un montage : 0,35 dm² par pièce × 80 pièces = 28 dm².</li>\n<li>Densité de courant de la gamme : 3 A/dm², d'où I = 3 × 28 = 84 A par montage.</li>\n<li>La cuve contient 3 montages en parallèle : réglage à 252 A.</li>\n<li>Durée du cycle : 25 min ; quantité d'électricité par charge : 252 × 25 / 60 = 105 A·h.</li>\n<li>Additif consommé à raison de 150 mL par 1 000 A·h : 105 × 0,150 = 15,8 mL par charge, soit environ 0,38 L pour 24 charges par jour.</li>\n</ol></div>"
      },
      {
       "titre": "Bilans thermiques simples",
       "contenu": "\n<p>Chauffer un bain demande de l'énergie : Q = m × c × Δθ, avec m la masse en kg, c la capacité thermique massique (environ 4,18 kJ/(kg·°C) pour une solution aqueuse diluée) et Δθ l'élévation de température en °C. La puissance nécessaire se déduit du temps de mise en température : P = Q / t.</p>\n<p>Exemple : une cuve de 1 200 L (environ 1 250 kg de solution) à faire passer de 15 °C à 55 °C en 3 heures. Q = 1 250 × 4,18 × 40 = 209 000 kJ. P = 209 000 / (3 × 3 600) ≈ 19,4 kW, sans compter les pertes par évaporation et par les parois, qui obligent à majorer cette valeur.</p>\n<p>Inversement, une cuve électrolytique s'échauffe à cause de l'effet Joule : une anodisation à 2 000 A sous 18 V dégage environ 36 kW, qu'il faut évacuer par le refroidissement pour rester vers 20 °C. C'est pourquoi les lignes d'anodisation possèdent un groupe froid dimensionné sur la puissance des redresseurs.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le démarrage du lundi matin est planifié : les cuves chaudes sont mises en chauffe par programmation horaire plusieurs heures avant l'arrivée de l'équipe. Une cuve encore froide donne des défauts sur les premières charges ; on contrôle la température avant de lancer la production.</div>"
      },
      {
       "titre": "Automatisme et programme de ligne",
       "contenu": "\n<p>Sur une ligne automatique, un <strong>automate programmable</strong> pilote les ponts, les redresseurs, les chauffages et les sécurités. Chaque gamme est enregistrée comme un <strong>programme</strong> : liste des postes visités, temps d'immersion, temps d'égouttage, consignes électriques. L'opérateur choisit le programme correspondant à la référence de pièce, vérifie la consigne affichée et lance la charge.</p>\n<p>La <strong>cadence</strong> d'une ligne est limitée par son <strong>poste goulot</strong>, généralement la cuve de traitement principal, la plus longue. Si le zingage dure 30 minutes et que la ligne possède 3 postes de zingage en parallèle, une charge peut sortir toutes les 10 minutes, à condition que les ponts aient le temps d'effectuer tous leurs mouvements dans cet intervalle.</p>\n<table>\n<thead><tr><th>Élément de programme</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Numéro de gamme</td><td>G-ZN-12 : zinc acide 12 µm, passivation transparente</td></tr>\n<tr><td>Poste 3, dégraissage électrolytique</td><td>3 min, 6 V, cathodique</td></tr>\n<tr><td>Poste 7, zingage</td><td>30 min, 2 A/dm², rampe 30 s</td></tr>\n<tr><td>Égouttage</td><td>15 s au-dessus de chaque cuve chimique</td></tr>\n</tbody>\n</table>\n<p>Les lignes au <strong>tonneau</strong> ont leurs propres règles. Le tonneau, en polypropylène perforé, tourne lentement dans la cuve ; le courant arrive aux pièces par des <strong>câbles de contact</strong> (ou « danglers ») qui plongent dans la masse des pièces. La charge se définit en masse ou en volume de pièces, et la surface se calcule à partir de la surface unitaire et du nombre de pièces au kilogramme. Un tonneau trop chargé donne des épaisseurs irrégulières et des pièces collées ; trop peu chargé, il provoque des brûlures. Les entraînements sont beaucoup plus importants qu'au montage, car les pièces en vrac et le tonneau retiennent du liquide : les temps d'égouttage avec rotation sont donc essentiels.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les zones de déplacement des ponts sont protégées par des barrières immatérielles et des arrêts d'urgence. On n'entre jamais dans l'emprise d'une ligne automatique en fonctionnement ; toute intervention se fait après consignation selon la procédure de l'entreprise.</div>"
      }
     ],
     "points_cles": [
      "Une ligne aligne les cuves dans l'ordre de la gamme et sépare les familles de produits incompatibles.",
      "Chaque cuve est équipée selon le bain : chauffage, refroidissement, agitation, filtration, aspiration.",
      "Les cuves reposent dans des rétentions distinctes par famille de produits.",
      "Le redresseur fournit un courant continu basse tension de forte intensité, réglé en courant ou en tension.",
      "Le compteur d'ampères-heures pilote les ajouts d'additifs.",
      "Un contact électrique sale provoque échauffement, chute de tension et défauts.",
      "Énergie de chauffage : Q = m × c × Δθ ; l'effet Joule d'une électrolyse doit être évacué.",
      "La cadence d'une ligne dépend du poste goulot et du nombre de postes en parallèle."
     ],
     "lexique": [
      {
       "terme": "Rétention",
       "def": "Bac ou fosse étanche placée sous les cuves pour recueillir les fuites."
      },
      {
       "terme": "Thermoplongeur",
       "def": "Élément chauffant électrique immergé dans le bain."
      },
      {
       "terme": "Mouvement cathodique",
       "def": "Déplacement alternatif des barres porte-pièces pour agiter le bain au contact des pièces."
      },
      {
       "terme": "Sac anodique",
       "def": "Enveloppe textile qui retient les particules libérées par les anodes solubles."
      },
      {
       "terme": "Ampère-heure",
       "def": "Quantité d'électricité correspondant à un courant d'un ampère pendant une heure, soit 3 600 C."
      },
      {
       "terme": "Pont transbordeur",
       "def": "Engin de manutention automatique qui déplace les charges de cuve en cuve."
      },
      {
       "terme": "Poste goulot",
       "def": "Poste le plus long d'une ligne, qui limite la cadence."
      },
      {
       "terme": "Automate programmable",
       "def": "Calculateur industriel qui pilote les équipements de la ligne selon un programme."
      },
      {
       "terme": "Laveur de gaz",
       "def": "Équipement qui épure l'air aspiré au-dessus des cuves avant rejet."
      }
     ]
    },
    {
     "id": "btdm-conduite-diagnostic",
     "titre": "Conduite d'une production, dérives et diagnostic des défauts",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Organiser le démarrage, la conduite et l'arrêt d'une installation de traitement.",
      "Surveiller les paramètres et détecter une dérive avant l'apparition des défauts.",
      "Identifier les défauts courants des dépôts et leurs causes probables.",
      "Mener un diagnostic structuré avec les outils de résolution de problème.",
      "Proposer et tracer une action corrective."
     ],
     "sections": [
      {
       "titre": "Démarrer, conduire, arrêter",
       "contenu": "\n<p>La conduite d'une ligne suit des <strong>procédures</strong> écrites. Au <strong>démarrage</strong>, l'opérateur vérifie :</p>\n<ul>\n<li>les niveaux des cuves et l'absence de fuite dans les rétentions ;</li>\n<li>les températures, atteintes avant toute production ;</li>\n<li>le fonctionnement des aspirations, des agitations et des filtrations ;</li>\n<li>l'état des anodes et des contacts ;</li>\n<li>les résultats d'analyse du jour et les ajouts éventuellement prescrits ;</li>\n<li>le planning de production et la disponibilité des montages.</li>\n</ul>\n<p>Pendant la <strong>conduite</strong>, il charge les pièces en respectant les consignes de montage, sélectionne le bon programme, surveille les paramètres affichés (intensité, tension, température), réalise les <strong>autocontrôles</strong> prévus (aspect, épaisseur sur la première pièce et à fréquence définie) et renseigne les documents de suivi.</p>\n<p>À l'<strong>arrêt</strong>, il termine les charges en cours, coupe les redresseurs, met les cuves en mode veille (température réduite, couvercles), nettoie les postes, range les montages et rédige le <strong>compte rendu de poste</strong> : production réalisée, incidents, ajouts, informations pour l'équipe suivante.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la <strong>première pièce</strong> d'une série est contrôlée et validée avant de lancer le reste du lot. Cette validation, souvent signée sur la fiche de lancement, évite de produire tout un lot non conforme à cause d'un mauvais programme ou d'un bain hors plage.</div>"
      },
      {
       "titre": "Surveiller pour anticiper",
       "contenu": "\n<p>Une <strong>dérive</strong> est une évolution progressive d'un paramètre qui finira par sortir de sa plage si l'on ne réagit pas : concentration qui baisse, pH qui monte, pollution qui s'accumule, tension qui augmente à intensité constante. La détecter tôt permet de corriger avant de produire des pièces défectueuses.</p>\n<p>Les signes d'alerte sont variés :</p>\n<table>\n<thead><tr><th>Observation</th><th>Interprétation possible</th></tr></thead>\n<tbody>\n<tr><td>La tension augmente à intensité constante</td><td>Anodes passivées ou insuffisantes, contacts sales, conductivité du bain en baisse</td></tr>\n<tr><td>La pression du filtre augmente</td><td>Cartouches colmatées, bain chargé en particules</td></tr>\n<tr><td>La consommation d'additif dérive par rapport aux ampères-heures</td><td>Entraînement anormal, erreur de dosage, décomposition</td></tr>\n<tr><td>Le niveau baisse rapidement</td><td>Évaporation forte, fuite, entraînement excessif</td></tr>\n<tr><td>L'épaisseur moyenne mesurée baisse</td><td>Rendement en baisse, intensité mal réglée, surface sous-estimée</td></tr>\n</tbody>\n</table>\n<p>Les résultats d'analyse et de contrôle sont reportés sur des <strong>cartes de suivi</strong> : un point qui s'approche des limites, ou une série de points qui montent régulièrement, signale une dérive même si chaque valeur reste encore dans la plage.</p>"
      },
      {
       "titre": "Les défauts courants des dépôts",
       "contenu": "\n<table>\n<thead><tr><th>Défaut</th><th>Aspect</th><th>Causes probables</th></tr></thead>\n<tbody>\n<tr><td>Manque d'adhérence, cloquage, écaillage</td><td>Le dépôt se soulève ou se décolle</td><td>Dégraissage ou décapage insuffisant, passivation du substrat entre deux bains, coupure de courant, mauvaise activation</td></tr>\n<tr><td>Brûlure</td><td>Zone sombre, rugueuse, souvent sur les arêtes</td><td>Densité de courant trop forte, concentration en métal trop basse, agitation ou température insuffisante</td></tr>\n<tr><td>Piqûres</td><td>Petits trous ronds</td><td>Bulles d'hydrogène retenues (manque de mouillant), particules, pollution organique, pH hors plage</td></tr>\n<tr><td>Rugosité</td><td>Grains au toucher</td><td>Particules en suspension (filtration, sacs anodiques percés), poussières</td></tr>\n<tr><td>Dépôt terne ou voilé</td><td>Perte de brillant</td><td>Manque de brillanteur, pollution métallique ou organique, température</td></tr>\n<tr><td>Manque de dépôt en zone creuse</td><td>Absence ou faible épaisseur dans les creux</td><td>Pénétration insuffisante, poches d'air, mauvaise orientation sur montage</td></tr>\n<tr><td>Taches, auréoles</td><td>Traces après séchage</td><td>Rinçage insuffisant, eau de rinçage chargée, séchage lent</td></tr>\n<tr><td>Dépôt fragile, fissuré</td><td>Fissures au pliage</td><td>Excès d'additifs, pollution organique, contraintes internes</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un même défaut peut avoir plusieurs causes, et une même cause peut produire plusieurs défauts. Le tableau oriente la recherche ; il ne remplace ni l'analyse du bain ni l'essai en cellule de Hull.</div>"
      },
      {
       "titre": "Mener un diagnostic structuré",
       "contenu": "\n<p>Face à un défaut, la réaction instinctive est de « rajouter du produit ». C'est souvent une erreur : on aggrave un excès, on masque la vraie cause et on perd la traçabilité. Le diagnostic suit une démarche.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> diagnostiquer un défaut de production.\n<ol>\n<li><strong>Décrire</strong> précisément le défaut : quoi, où sur la pièce, combien de pièces, depuis quand, sur quelles références et quelles charges (questionnement QQOQCP).</li>\n<li><strong>Isoler</strong> : bloquer les pièces suspectes et les identifier.</li>\n<li><strong>Lister les causes possibles</strong> avec le diagramme d'Ishikawa (5M) : Matière (substrat, lot de pièces, produits), Milieu (bains, température, eau), Méthode (gamme, programme, temps), Machine (redresseur, filtre, chauffage, pont), Main-d'œuvre (montage, manipulation).</li>\n<li><strong>Vérifier</strong> les causes les plus probables par des faits : analyses, cellule de Hull, relevés d'enregistrement, essai sur pièce témoin.</li>\n<li><strong>Corriger</strong> la cause et vérifier l'efficacité sur une nouvelle charge.</li>\n<li><strong>Tracer</strong> : fiche d'incident ou de non-conformité, mise à jour de la fiche de suivi du bain.</li>\n</ol></div>\n<p>Exemple : depuis le matin, des pièces nickelées présentent des piqûres sur les faces orientées vers le haut. Les faces du bas sont saines. L'orientation fait penser à des bulles qui restent piégées. L'analyse montre un bain conforme en sels et en pH, mais la tension superficielle mesurée est élevée : le mouillant anti-piqûres est en défaut, sa pompe doseuse étant désamorcée depuis la veille. Correction : réamorçage, ajout calculé, vérification de la tension superficielle et contrôle des charges suivantes. Les pièces piquées sont isolées pour reprise.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne modifie jamais plusieurs paramètres en même temps lors d'un diagnostic : si le défaut disparaît, on ne sait pas laquelle des modifications a agi, et l'on risque d'avoir créé un nouveau déséquilibre.</div>"
      },
      {
       "titre": "Purifier un bain pollué",
       "contenu": "\n<p>Lorsque le diagnostic désigne une <strong>pollution du bain</strong>, plusieurs traitements sont possibles, toujours testés d'abord sur un échantillon en cellule de Hull.</p>\n<table>\n<thead><tr><th>Pollution</th><th>Origine fréquente</th><th>Traitement</th></tr></thead>\n<tbody>\n<tr><td>Organique (produits de décomposition d'additifs, huiles)</td><td>Vieillissement, mauvais dégraissage, entraînements</td><td>Passage sur charbon actif, en continu dans le filtre ou en traitement de cuve complet</td></tr>\n<tr><td>Métallique (cuivre, zinc, fer dans un nickel)</td><td>Pièces tombées dans la cuve, attaque de pièces, entraînements</td><td>Électrolyse sélective à très faible densité de courant sur tôles ondulées</td></tr>\n<tr><td>Particulaire</td><td>Anodes, poussières, précipités</td><td>Filtration renforcée, remplacement des sacs anodiques</td></tr>\n<tr><td>Excès de chlorures, sulfates ou carbonates</td><td>Ajouts répétés, absorption du gaz carbonique de l'air par un bain alcalin</td><td>Dilution partielle, précipitation, parfois renouvellement</td></tr>\n</tbody>\n</table>\n<p>Une pièce tombée au fond d'une cuve acide se dissout lentement et pollue le bain : on la repêche dès que possible avec un outil adapté, et on le signale. L'électrolyse sélective consiste à faire passer un faible courant sur de grandes cathodes ondulées : les métaux plus nobles que le métal du bain, comme le cuivre dans un nickel, se déposent en priorité aux faibles densités de courant et sont ainsi retirés.</p>\n<p>Un traitement de purification arrête généralement la production de la cuve concernée. Il se planifie, se trace sur la fiche de suivi du bain et se termine par une analyse complète et un essai en cellule de Hull avant la reprise.</p>"
      },
      {
       "titre": "Reprises et non-conformités",
       "contenu": "\n<p>Une pièce non conforme peut parfois être <strong>reprise</strong> : <strong>démétallisation</strong> chimique ou électrolytique du dépôt, puis nouveau traitement complet. La reprise a un coût et des risques : attaque du substrat, perte de cote, fragilisation supplémentaire. Elle doit être autorisée par la qualité et parfois par le client ; certaines spécifications l'interdisent ou la limitent à une seule fois.</p>\n<p>Le traitement d'une non-conformité suit le circuit de l'entreprise : identification et isolement des pièces, enregistrement, décision (reprise, dérogation, rebut), action corrective sur la cause, information du client si les pièces sont déjà livrées. L'opérateur y contribue en signalant immédiatement toute anomalie et en décrivant les faits avec précision.</p>\n<p>Le diagnostic gagne beaucoup à la <strong>traçabilité</strong> : savoir dans quelle charge, à quelle heure, dans quels bains et avec quels paramètres une pièce a été traitée permet de délimiter le lot touché et de ne pas bloquer toute la production. Les étiquettes de lot, les programmes enregistrés et les fiches de suivi forment cette mémoire.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une bonne description d'anomalie au chef d'équipe contient le numéro de lot, la référence, le défaut observé avec sa localisation, le nombre de pièces touchées sur le nombre contrôlé et ce qui a déjà été vérifié. Ces cinq informations font gagner un temps considérable.</div>"
      }
     ],
     "points_cles": [
      "Démarrage, conduite et arrêt suivent des procédures écrites et se terminent par un compte rendu de poste.",
      "La première pièce d'une série est contrôlée et validée avant de poursuivre.",
      "Une dérive se détecte par l'évolution des paramètres avant l'apparition des défauts.",
      "Une tension qui monte à intensité constante signale anodes, contacts ou conductivité.",
      "Adhérence, brûlures, piqûres, rugosité et ternissement ont chacun des causes typiques.",
      "Le diagnostic suit une démarche : décrire, isoler, lister les causes (5M), vérifier, corriger, tracer.",
      "On ne modifie qu'un paramètre à la fois.",
      "Une reprise doit être autorisée et une non-conformité suit le circuit qualité de l'entreprise."
     ],
     "lexique": [
      {
       "terme": "Autocontrôle",
       "def": "Contrôle réalisé par l'opérateur lui-même sur sa production, selon une fréquence définie."
      },
      {
       "terme": "Dérive",
       "def": "Évolution progressive d'un paramètre vers ses limites de tolérance."
      },
      {
       "terme": "Compte rendu de poste",
       "def": "Document qui transmet à l'équipe suivante la production, les incidents et les actions réalisées."
      },
      {
       "terme": "QQOQCP",
       "def": "Questionnement Qui, Quoi, Où, Quand, Comment, Pourquoi utilisé pour décrire un problème."
      },
      {
       "terme": "Diagramme d'Ishikawa",
       "def": "Diagramme causes-effet classant les causes possibles en familles (5M)."
      },
      {
       "terme": "Démétallisation",
       "def": "Dissolution d'un dépôt métallique pour permettre de traiter à nouveau la pièce."
      },
      {
       "terme": "Dérogation",
       "def": "Accord du client pour accepter un produit qui ne respecte pas entièrement la spécification."
      },
      {
       "terme": "Traçabilité",
       "def": "Possibilité de retrouver l'historique de traitement d'une pièce ou d'un lot."
      },
      {
       "terme": "Tension superficielle",
       "def": "Grandeur qui caractérise la facilité d'un liquide à mouiller une surface ; elle est abaissée par les mouillants."
      }
     ]
    },
    {
     "id": "btdm-maintenance",
     "titre": "Maintenance de premier niveau des installations",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Distinguer maintenance préventive et corrective, systématique et conditionnelle.",
      "Situer les interventions de l'opérateur dans les niveaux de maintenance.",
      "Réaliser les opérations courantes d'entretien d'une ligne de traitement.",
      "Appliquer les règles de consignation avant intervention.",
      "Renseigner un document de maintenance."
     ],
     "sections": [
      {
       "titre": "Les formes de maintenance",
       "contenu": "\n<p>La <strong>maintenance</strong> regroupe les actions qui maintiennent ou rétablissent un équipement dans un état lui permettant d'accomplir sa fonction. On distingue :</p>\n<ul>\n<li>la <strong>maintenance corrective</strong>, réalisée après une défaillance : <strong>palliative</strong> (dépannage provisoire) ou <strong>curative</strong> (réparation durable) ;</li>\n<li>la <strong>maintenance préventive</strong>, réalisée avant la défaillance : <strong>systématique</strong> (selon un calendrier ou un nombre d'heures, comme le changement des cartouches de filtre chaque semaine) ou <strong>conditionnelle</strong> (déclenchée par la mesure d'un indicateur, comme le changement des cartouches quand la pression différentielle dépasse un seuil).</li>\n</ul>\n<p>Dans un atelier de traitement, l'environnement est particulièrement agressif : vapeurs acides, brouillards, humidité, chaleur. Les équipements électriques, les contacts et les structures métalliques se corrodent vite. Une maintenance préventive rigoureuse évite des arrêts coûteux et des dérives de qualité.</p>\n<p>Le lien entre maintenance et qualité est direct : un filtre colmaté donne des dépôts rugueux, une sonde de température décalée fait travailler un bain hors plage, un contact corrodé provoque des épaisseurs faibles sur un montage entier. Beaucoup de défauts de production attribués au bain sont en réalité des défauts d'équipement.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en traitement de surface, une partie de la maintenance porte sur les <strong>bains eux-mêmes</strong> (filtration, traitement au charbon actif, électrolyse sélective, renouvellement) et pas seulement sur les machines.</div>"
      },
      {
       "titre": "Les niveaux de maintenance et le rôle de l'opérateur",
       "contenu": "\n<p>Les interventions sont classées par <strong>niveaux</strong> selon leur complexité, les compétences et les moyens nécessaires. Le premier niveau correspond à des actions simples, réalisées avec les moyens du poste et décrites dans des consignes : c'est le domaine de l'opérateur qualifié. Les niveaux supérieurs relèvent du technicien de maintenance, voire du constructeur.</p>\n<table>\n<thead><tr><th>Niveau</th><th>Exemples d'actions</th><th>Intervenant</th></tr></thead>\n<tbody>\n<tr><td>Premier niveau</td><td>Contrôles visuels, nettoyages, remplacement d'éléments accessibles sans démontage (cartouches, sacs anodiques), réglages simples, appoints</td><td>Opérateur formé</td></tr>\n<tr><td>Niveaux intermédiaires</td><td>Remplacement de pompes, de sondes, réglages d'automatisme, diagnostics électriques</td><td>Technicien de maintenance habilité</td></tr>\n<tr><td>Niveaux élevés</td><td>Rénovation de redresseur, modification de ligne, reconstruction</td><td>Service spécialisé, constructeur</td></tr>\n</tbody>\n</table>\n<p>L'opérateur a aussi un rôle de <strong>détection</strong> : il est le premier à entendre une pompe qui cavite, à voir une fuite ou à sentir une odeur anormale. Signaler tôt une anomalie, avec une description précise, est une contribution majeure à la maintenance.</p>"
      },
      {
       "titre": "Les opérations courantes sur une ligne",
       "contenu": "\n<table>\n<thead><tr><th>Élément</th><th>Opération de premier niveau</th><th>Fréquence indicative</th></tr></thead>\n<tbody>\n<tr><td>Contacts et barres</td><td>Nettoyage, vérification du serrage visuel</td><td>Quotidienne à hebdomadaire</td></tr>\n<tr><td>Montages</td><td>Décapage des dépôts accumulés, contrôle des isolants et des pointes de contact</td><td>Selon usage</td></tr>\n<tr><td>Anodes</td><td>Contrôle du niveau dans les paniers, rechargement, état des sacs</td><td>Hebdomadaire</td></tr>\n<tr><td>Filtres</td><td>Relevé de pression, remplacement des cartouches</td><td>Conditionnelle</td></tr>\n<tr><td>Sondes de température et de pH</td><td>Nettoyage, vérification par comparaison avec un instrument de référence</td><td>Hebdomadaire</td></tr>\n<tr><td>Aspirations</td><td>Nettoyage des fentes, contrôle du débit (indicateur)</td><td>Mensuelle</td></tr>\n<tr><td>Rétentions</td><td>Inspection, vidange des égouttures vers la station</td><td>Quotidienne</td></tr>\n<tr><td>Ponts et chariots</td><td>Nettoyage, contrôle visuel des câbles et crochets, graissage prévu par la notice</td><td>Selon plan</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> remplacer les cartouches d'un filtre de cuve de nickel.\n<ol>\n<li>Relever la pression différentielle et la noter sur la fiche de maintenance.</li>\n<li>Arrêter la pompe, fermer les vannes d'aspiration et de refoulement, consigner la pompe.</li>\n<li>Porter les EPI : lunettes ou écran facial, gants résistants aux produits, tablier.</li>\n<li>Décompresser et vidanger le corps de filtre vers la cuve ou un récipient prévu.</li>\n<li>Remplacer les cartouches par le modèle référencé (finesse de filtration), contrôler le joint.</li>\n<li>Remonter, ouvrir les vannes, déconsigner, remettre en route, vérifier l'absence de fuite et noter la nouvelle pression.</li>\n<li>Éliminer les cartouches usagées comme déchets dangereux.</li>\n</ol></div>"
      },
      {
       "titre": "La consignation avant intervention",
       "contenu": "\n<p>Toute intervention à l'intérieur d'une zone dangereuse, sur une partie mobile, électrique ou contenant des fluides exige la <strong>consignation</strong> de l'équipement : elle garantit qu'il ne peut pas être remis en marche ou mis sous pression pendant l'intervention. Elle comprend :</p>\n<ol>\n<li>la <strong>séparation</strong> de toutes les sources d'énergie (électrique, pneumatique, hydraulique, fluides) ;</li>\n<li>la <strong>condamnation</strong> en position ouverte des organes de séparation, par cadenas personnel ;</li>\n<li>l'<strong>identification</strong> par étiquette ou pancarte ;</li>\n<li>la <strong>vérification d'absence</strong> d'énergie et la purge des énergies résiduelles (fluide sous pression, chaleur).</li>\n</ol>\n<p>Pour l'électricité, les opérations de consignation et les interventions sur les équipements électriques ne peuvent être réalisées que par des personnes titulaires d'une <strong>habilitation électrique</strong> adaptée, délivrée par l'employeur après formation.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un redresseur à l'arrêt peut garder des condensateurs chargés, et une barre de cuve parcourue par plusieurs milliers d'ampères, même sous faible tension, provoque des brûlures graves par court-circuit avec une bague ou une montre. Les bijoux métalliques sont proscrits aux postes électrolytiques.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les vidanges et nettoyages de cuves sont des travaux à risque : vapeurs, produits résiduels, risque de chute dans la cuve. Ils se font selon un mode opératoire spécifique, souvent avec un permis de travail, jamais seul.</div>"
      },
      {
       "titre": "Pompes, chauffages et redresseurs : surveiller les signes",
       "contenu": "\n<p>Les équipements d'une ligne donnent des signes avant de tomber en panne. Les connaître permet d'alerter au bon moment.</p>\n<table>\n<thead><tr><th>Équipement</th><th>Signe d'alerte</th><th>Défaillance possible</th></tr></thead>\n<tbody>\n<tr><td>Pompe de filtration ou de recirculation</td><td>Bruit de graviers, vibrations, débit en baisse</td><td>Cavitation, aspiration bouchée, roue usée, garniture fuyarde</td></tr>\n<tr><td>Thermoplongeur</td><td>Temps de chauffe plus long, déclenchement du disjoncteur</td><td>Élément entartré ou percé, défaut d'isolement</td></tr>\n<tr><td>Échangeur de chaleur</td><td>Écart croissant entre consigne et mesure</td><td>Encrassement, vanne bloquée</td></tr>\n<tr><td>Redresseur</td><td>Ventilation bruyante, échauffement, alarme, ondulation anormale</td><td>Filtres à air colmatés, défaut de composant de puissance</td></tr>\n<tr><td>Sonde de température</td><td>Valeur figée ou incohérente</td><td>Sonde encrassée, câble coupé</td></tr>\n<tr><td>Ventilateur d'aspiration</td><td>Odeur dans l'atelier, vapeurs visibles au-dessus des cuves</td><td>Courroie, moteur, gaine percée</td></tr>\n</tbody>\n</table>\n<p>Les redresseurs sont souvent installés dans un local séparé, ventilé et protégé des vapeurs acides, précisément pour limiter la corrosion de leurs composants électroniques. Les filtres à air de leur ventilation se nettoient régulièrement : un redresseur mal refroidi se met en sécurité en pleine production.</p>\n<p>Les instruments de mesure utilisés pour la production et le contrôle (pH-mètre, thermomètres, jauges d'épaisseur, burettes) font aussi l'objet d'un suivi : <strong>étalonnage</strong> périodique par rapport à des étalons, <strong>vérification</strong> avant usage, étiquette indiquant la date de validité. Un instrument dont l'étalonnage est périmé ne doit plus servir à prononcer une conformité.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une anomalie bien signalée comporte l'équipement concerné, le symptôme observé, l'heure, les conditions de fonctionnement et ce qui a déjà été fait. « La pompe fait du bruit » ne suffit pas ; « la pompe du filtre de la cuve 7 vibre et le débit indiqué est passé de 10 à 6 m³/h depuis 14 h, pression filtre normale » permet d'agir.</div>"
      },
      {
       "titre": "Documenter la maintenance",
       "contenu": "\n<p>Chaque intervention laisse une trace : <strong>fiche d'intervention</strong> (date, équipement, symptôme, action, pièces remplacées, temps passé, intervenant), <strong>carnet de bord</strong> de l'équipement ou saisie dans un logiciel de gestion de maintenance assistée par ordinateur (GMAO). Ces données permettent de calculer des indicateurs comme la <strong>disponibilité</strong> d'un équipement ou le temps moyen entre deux défaillances, et d'ajuster les fréquences de préventif.</p>\n<p>Exemple de calcul : une ligne prévue pour fonctionner 160 heures sur un mois a subi 3 arrêts pour panne, d'une durée totale de 8 heures. Sa disponibilité vaut (160 − 8) / 160 = 95 %. Le temps moyen de bon fonctionnement entre défaillances vaut 152 / 3 ≈ 51 heures.</p>\n<p>Ces indicateurs orientent les décisions. Si les pannes d'une pompe se répètent toutes les six semaines environ, il devient rentable de la remplacer systématiquement toutes les cinq semaines, ou de surveiller sa vibration pour intervenir juste avant la défaillance. Si au contraire un remplacement systématique se fait sur des pièces encore en bon état, on peut allonger l'intervalle. La maintenance s'améliore ainsi en continu, à partir des faits enregistrés par les opérateurs et les techniciens.</p>\n<p>Le plan de maintenance préventive est affiché au poste ou disponible dans la GMAO ; l'opérateur coche les opérations réalisées et signale celles qui n'ont pas pu l'être, avec la raison.</p>"
      }
     ],
     "points_cles": [
      "La maintenance corrective intervient après défaillance ; la préventive, systématique ou conditionnelle, avant.",
      "L'environnement chimique rend la maintenance préventive indispensable en traitement de surface.",
      "Les bains font eux-mêmes l'objet d'une maintenance : filtration, purification, renouvellement.",
      "L'opérateur réalise la maintenance de premier niveau selon des consignes et détecte les anomalies.",
      "Toute intervention se fait après consignation : séparation, condamnation, identification, vérification.",
      "Les interventions électriques exigent une habilitation adaptée.",
      "Les bijoux métalliques sont interdits aux postes électrolytiques.",
      "Les interventions sont tracées ; disponibilité et temps moyen entre pannes guident le plan préventif."
     ],
     "lexique": [
      {
       "terme": "Maintenance préventive conditionnelle",
       "def": "Intervention déclenchée par la mesure d'un indicateur d'usure ou d'encrassement."
      },
      {
       "terme": "Maintenance préventive systématique",
       "def": "Intervention réalisée selon un échéancier fixe."
      },
      {
       "terme": "Maintenance palliative",
       "def": "Dépannage provisoire permettant de reprendre la production en attendant une réparation."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble des opérations qui mettent et maintiennent un équipement en sécurité avant intervention."
      },
      {
       "terme": "Habilitation électrique",
       "def": "Reconnaissance par l'employeur de la capacité d'une personne à réaliser des opérations d'ordre électrique."
      },
      {
       "terme": "Pression différentielle",
       "def": "Écart de pression entre l'entrée et la sortie d'un filtre, qui augmente avec son colmatage."
      },
      {
       "terme": "GMAO",
       "def": "Gestion de maintenance assistée par ordinateur."
      },
      {
       "terme": "Disponibilité",
       "def": "Part du temps requis pendant laquelle un équipement est en état de fonctionner."
      },
      {
       "terme": "Permis de travail",
       "def": "Document qui autorise et encadre un travail dangereux après analyse des risques."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Qualité, sécurité et environnement",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btdm-controle-qualite",
     "titre": "Contrôle des revêtements et maîtrise statistique de la qualité",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Choisir une méthode de mesure d'épaisseur adaptée au couple revêtement-substrat.",
      "Décrire les essais d'adhérence, de corrosion, de dureté et d'aspect.",
      "Appliquer un plan de contrôle et une règle d'acceptation.",
      "Construire et interpréter une carte de contrôle.",
      "Calculer et interpréter les indicateurs de capabilité Cp et Cpk."
     ],
     "sections": [
      {
       "titre": "Qualité et spécifications",
       "contenu": "\n<p>La <strong>qualité</strong> d'un traitement est son aptitude à satisfaire les exigences du client. Ces exigences sont écrites dans la <strong>spécification</strong> : norme de produit, cahier des charges du donneur d'ordres ou indication du plan. Elle fixe les <strong>caractéristiques</strong> à obtenir (épaisseur, aspect, adhérence, tenue à la corrosion, dureté…), leurs <strong>tolérances</strong>, les <strong>méthodes de contrôle</strong> et souvent la <strong>fréquence</strong> des contrôles.</p>\n<p>Le <strong>plan de contrôle</strong> de l'atelier traduit ces exigences en actions concrètes : quelle caractéristique, à quel moment (réception, en cours, final), avec quel moyen, sur combien de pièces, par qui, avec quelle règle de décision et quel enregistrement. Les contrôles se répartissent entre <strong>autocontrôles</strong> de l'opérateur, contrôles du laboratoire et contrôles finaux avant expédition.</p>\n<p>Beaucoup d'entreprises sont certifiées selon la norme ISO 9001 (système de management de la qualité), et selon des référentiels sectoriels plus exigeants en automobile (IATF 16949) ou en aéronautique (EN 9100), qui imposent la maîtrise des procédés spéciaux comme le traitement de surface. Dans l'aéronautique, l'accréditation NADCAP est souvent exigée pour les traitements chimiques et thermiques.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on contrôle par rapport à une exigence écrite. Sans spécification, il n'y a pas de conformité possible : on demande la référence exacte au client avant de traiter.</div>"
      },
      {
       "titre": "Mesurer une épaisseur",
       "contenu": "\n<p>L'épaisseur est la caractéristique la plus contrôlée. La méthode dépend du couple revêtement-substrat.</p>\n<table>\n<thead><tr><th>Méthode</th><th>Principe</th><th>Applications</th><th>Type</th></tr></thead>\n<tbody>\n<tr><td>Induction magnétique (ISO 2178)</td><td>L'épaisseur d'un revêtement non magnétique modifie l'attraction d'une sonde sur un substrat magnétique</td><td>Zinc, peinture, chrome sur acier</td><td>Non destructive</td></tr>\n<tr><td>Courants de Foucault (ISO 2360)</td><td>Variation des courants induits dans un substrat conducteur non magnétique</td><td>Anodisation, peinture sur aluminium</td><td>Non destructive</td></tr>\n<tr><td>Fluorescence X (ISO 3497)</td><td>Analyse du rayonnement X émis par le revêtement</td><td>Dépôts minces, multicouches, métaux précieux, alliages zinc-nickel avec leur composition</td><td>Non destructive</td></tr>\n<tr><td>Coupe micrographique (ISO 1463)</td><td>Mesure au microscope sur une coupe polie</td><td>Méthode de référence, multicouches, litiges</td><td>Destructive</td></tr>\n<tr><td>Méthode coulométrique</td><td>Dissolution anodique locale, temps proportionnel à l'épaisseur</td><td>Multicouches métalliques, double nickel</td><td>Destructive localement</td></tr>\n<tr><td>Pesée</td><td>Différence de masse avant et après dissolution</td><td>Masse de couche de conversion, épaisseur moyenne</td><td>Destructive</td></tr>\n</tbody>\n</table>\n<p>Les appareils portables à induction ou à courants de Foucault se <strong>vérifient</strong> avant chaque série avec des <strong>cales étalons</strong> sur un substrat de même nature, et le zéro se fait sur une pièce non revêtue. On mesure sur la surface significative, loin des arêtes, en plusieurs points, selon le nombre de mesures prévu par la spécification.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une mesure par induction magnétique d'un nickel électrolytique sur acier est fausse, car le nickel est lui-même magnétique. Il faut une méthode adaptée (fluorescence X, coulométrie ou appareil spécifique). Choisir l'appareil avant de mesurer.</div>"
      },
      {
       "titre": "Autres contrôles du revêtement",
       "contenu": "\n<ul>\n<li><strong>Adhérence</strong> des dépôts métalliques : essais qualitatifs (pliage, limage, choc thermique, grenaillage) décrits par la norme ISO 2819 ; le dépôt ne doit ni se décoller ni s'écailler. Pour les peintures, essai de quadrillage ou d'arrachement par plot collé.</li>\n<li><strong>Corrosion</strong> : brouillard salin et essais cycliques, sur un échantillonnage défini.</li>\n<li><strong>Dureté</strong> : microdureté Vickers sur coupe pour le chrome dur, le nickel chimique, les couches anodiques dures.</li>\n<li><strong>Aspect</strong> : examen visuel sous un éclairage et à une distance définis, comparaison à des échantillons limites validés avec le client.</li>\n<li><strong>Composition</strong> d'un alliage (teneur en nickel d'un zinc-nickel, en phosphore d'un nickel chimique) par fluorescence X.</li>\n<li><strong>Porosité</strong> : essais par réactif révélant le substrat à travers les pores.</li>\n<li><strong>Coefficient de frottement</strong> des vis après finition, sur banc d'essai couple-tension.</li>\n<li><strong>Fragilisation par l'hydrogène</strong> : essais de maintien sous charge sur des pièces ou des éprouvettes.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour l'aspect, une phrase comme « pas de défaut visible » est source de litiges. Les ateliers établissent avec le client des <strong>échantillons limites</strong> : une pièce juste acceptable et une pièce juste refusée pour chaque type de défaut, conservées au poste de contrôle.</div>"
      },
      {
       "titre": "Échantillonnage et règle d'acceptation",
       "contenu": "\n<p>On ne peut pas toujours contrôler toutes les pièces : on prélève un <strong>échantillon</strong> représentatif du lot. Le plan de contrôle fixe la taille de l'échantillon, le nombre de mesures par pièce et la règle de décision. Les règles courantes sont, par exemple : toutes les mesures supérieures ou égales à l'épaisseur minimale locale ; ou une moyenne supérieure à une valeur et aucune valeur inférieure à un minimum.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> décider de la conformité d'un lot de pièces zinguées.\n<ol>\n<li>Exigence : épaisseur locale minimale 8 µm sur la surface significative, 5 pièces prélevées, 3 mesures par pièce.</li>\n<li>Vérifier l'appareil sur la cale de 10 µm : lecture 10,2 µm, dans la tolérance de l'appareil.</li>\n<li>Relevés (µm) : pièce 1 : 10,4 / 11,0 / 9,8 ; pièce 2 : 9,1 / 8,7 / 9,5 ; pièce 3 : 11,2 / 10,6 / 10,9 ; pièce 4 : 7,6 / 9,0 / 8,8 ; pièce 5 : 10,1 / 9,7 / 10,3.</li>\n<li>Comparer chaque valeur au minimum : la valeur 7,6 µm de la pièce 4 est inférieure à 8 µm.</li>\n<li>Conclusion : lot non conforme selon la règle ; isoler le lot, vérifier la position de la mesure (près d'un creux ?), contrôler des pièces supplémentaires selon la procédure et rechercher la cause (position sur le montage, densité de courant).</li>\n</ol></div>"
      },
      {
       "titre": "Cartes de contrôle",
       "contenu": "\n<p>La <strong>maîtrise statistique des procédés</strong> (MSP) observe un procédé dans le temps pour distinguer les variations normales, dues à une multitude de petites causes aléatoires, des variations anormales, dues à une <strong>cause spéciale</strong> identifiable (bain épuisé, contact défectueux, erreur de programme).</p>\n<p>La <strong>carte de contrôle</strong> moyenne-étendue est la plus courante. À intervalles réguliers, on prélève un petit échantillon (par exemple 5 pièces), on calcule sa moyenne et son étendue (écart entre la plus grande et la plus petite valeur), et on les reporte sur deux graphiques munis d'une ligne centrale et de <strong>limites de contrôle</strong> calculées à partir du procédé lui-même. Ces limites de contrôle ne sont pas les tolérances du client : elles décrivent ce que le procédé fait naturellement.</p>\n<p>On réagit lorsque :</p>\n<ul>\n<li>un point sort des limites de contrôle ;</li>\n<li>une série de points consécutifs (souvent 7) se trouve du même côté de la ligne centrale ;</li>\n<li>une série de points consécutifs monte ou descend régulièrement (tendance).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une carte de contrôle sert à <strong>piloter</strong> : elle déclenche une réaction avant que des pièces hors tolérance ne soient produites. Chaque réaction et sa cause sont notées sur la carte.</div>"
      },
      {
       "titre": "Capabilité d'un procédé",
       "contenu": "\n<p>La <strong>capabilité</strong> mesure l'aptitude d'un procédé stable à produire dans les tolérances. Avec T<sub>S</sub> et T<sub>I</sub> les tolérances supérieure et inférieure, m la moyenne et σ l'écart-type du procédé :</p>\n<ul>\n<li><strong>Cp = (T<sub>S</sub> − T<sub>I</sub>) / (6σ)</strong> compare l'intervalle de tolérance à la dispersion, sans tenir compte du centrage ;</li>\n<li><strong>Cpk = min(T<sub>S</sub> − m ; m − T<sub>I</sub>) / (3σ)</strong> tient compte du centrage.</li>\n</ul>\n<p>Un procédé est généralement jugé capable si Cpk est au moins égal à 1,33 ; de nombreux clients automobiles exigent davantage pour les caractéristiques importantes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer la capabilité d'un zingage spécifié entre 8 et 15 µm.\n<ol>\n<li>Données issues de 25 échantillons : moyenne m = 11 µm, écart-type σ = 1 µm.</li>\n<li>Cp = (15 − 8) / (6 × 1) = 7 / 6 = 1,17.</li>\n<li>Cpk = min(15 − 11 ; 11 − 8) / (3 × 1) = min(4 ; 3) / 3 = 1,00.</li>\n<li>Interprétation : la dispersion est un peu trop grande (Cp inférieur à 1,33) et le procédé est légèrement décentré vers le bas.</li>\n<li>Actions : recentrer en visant 11,5 µm (Cpk passe à min(3,5 ; 3,5) / 3 = 1,17) et réduire la dispersion en travaillant sur la répartition (montage, anodes) pour atteindre σ = 0,8 µm, ce qui donnerait Cp = Cpk ≈ 1,46.</li>\n</ol></div>"
      }
     ],
     "points_cles": [
      "La qualité se juge par rapport à une spécification écrite : caractéristiques, tolérances, méthodes, fréquences.",
      "Le plan de contrôle précise quoi, quand, comment, combien, qui et la règle de décision.",
      "Induction magnétique pour un revêtement non magnétique sur acier ; courants de Foucault sur aluminium.",
      "Fluorescence X pour les dépôts minces et la composition ; coupe micrographique comme méthode de référence.",
      "Les appareils se vérifient sur cales étalons avant usage et l'on mesure sur la surface significative.",
      "Adhérence, corrosion, dureté, aspect et composition complètent la mesure d'épaisseur.",
      "La carte de contrôle détecte les causes spéciales ; ses limites ne sont pas les tolérances.",
      "Cp = IT / 6σ et Cpk = écart au plus proche tolérance / 3σ ; un Cpk de 1,33 est un seuil courant."
     ],
     "lexique": [
      {
       "terme": "Spécification",
       "def": "Document qui définit les exigences à satisfaire et les moyens de les vérifier."
      },
      {
       "terme": "Plan de contrôle",
       "def": "Document qui organise l'ensemble des contrôles d'un produit ou d'un procédé."
      },
      {
       "terme": "Cale étalon",
       "def": "Feuille d'épaisseur connue servant à vérifier un appareil de mesure d'épaisseur."
      },
      {
       "terme": "Fluorescence X",
       "def": "Méthode d'analyse non destructive mesurant épaisseur et composition des revêtements."
      },
      {
       "terme": "Coupe micrographique",
       "def": "Échantillon découpé, enrobé et poli, observé au microscope pour mesurer les couches."
      },
      {
       "terme": "Échantillon limite",
       "def": "Pièce de référence fixant la frontière entre aspect acceptable et refusé."
      },
      {
       "terme": "Cause spéciale",
       "def": "Cause identifiable de variation anormale d'un procédé."
      },
      {
       "terme": "Carte de contrôle",
       "def": "Graphique de suivi d'une caractéristique muni de limites calculées à partir du procédé."
      },
      {
       "terme": "Écart-type",
       "def": "Mesure statistique de la dispersion des valeurs autour de leur moyenne."
      },
      {
       "terme": "Capabilité",
       "def": "Aptitude d'un procédé stable à produire dans l'intervalle de tolérance."
      }
     ]
    },
    {
     "id": "btdm-risque-chimique",
     "titre": "Risque chimique et sécurité dans l'atelier de traitement",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Identifier les dangers des produits utilisés en traitement des matériaux grâce à l'étiquetage.",
      "Expliquer les notions de danger, d'exposition, de risque et de valeur limite.",
      "Appliquer les règles de stockage et de manipulation des produits incompatibles.",
      "Choisir les moyens de protection collective et individuelle adaptés à un poste.",
      "Réagir correctement en cas de projection, de déversement ou d'émanation."
     ],
     "sections": [
      {
       "titre": "Danger, exposition et risque",
       "contenu": "\n<p>Un atelier de traitement manipule chaque jour des acides et des bases concentrés, des sels métalliques toxiques, parfois des cyanures ou du chrome hexavalent, des solvants et des gaz. Le cours de seconde a présenté les bases de la sécurité à l'atelier ; on s'attache ici aux spécificités du <strong>risque chimique</strong> dans ce métier.</p>\n<p>Le <strong>danger</strong> est la propriété intrinsèque d'un produit capable de causer un dommage : l'acide sulfurique concentré est corrosif, quelle que soit la façon dont on l'utilise. L'<strong>exposition</strong> est le contact entre la personne et le produit, par trois voies : <strong>respiratoire</strong> (vapeurs, brouillards, poussières), <strong>cutanée et oculaire</strong> (projections, contact), <strong>digestive</strong> (mains sales, aliments contaminés). Le <strong>risque</strong> combine les deux : un produit très dangereux enfermé dans une machine étanche peut présenter un risque faible ; un produit modérément dangereux manipulé sans précaution tous les jours peut présenter un risque élevé.</p>\n<p>L'employeur doit évaluer les risques et les consigner dans le <strong>document unique d'évaluation des risques professionnels</strong> ; pour les agents cancérogènes, mutagènes et toxiques pour la reproduction (<strong>CMR</strong>), la réglementation impose en priorité la substitution par un produit ou un procédé moins dangereux lorsque c'est techniquement possible.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on agit d'abord sur le danger (substitution), puis sur l'exposition par des protections collectives (captage, encoffrement, automatisation), et seulement en complément par des équipements de protection individuelle.</div>"
      },
      {
       "titre": "Reconnaître les dangers : étiquetage et pictogrammes",
       "contenu": "\n<p>Le règlement européen <strong>CLP</strong> fixe la classification, l'étiquetage et l'emballage des produits chimiques. L'étiquette comporte l'identité du produit et du fournisseur, un <strong>mot d'avertissement</strong> (« Danger » ou « Attention »), des <strong>pictogrammes</strong> en losange à bordure rouge, des <strong>mentions de danger</strong> codées H et des <strong>conseils de prudence</strong> codés P.</p>\n<table>\n<thead><tr><th>Pictogramme (description)</th><th>Signification</th><th>Exemples en atelier</th></tr></thead>\n<tbody>\n<tr><td>Liquide attaquant une main et une surface</td><td>Corrosif pour la peau, les yeux, les métaux</td><td>Acides sulfurique, chlorhydrique, nitrique ; soude ; acide chromique</td></tr>\n<tr><td>Tête de mort sur tibias</td><td>Toxicité aiguë grave</td><td>Cyanures, acide fluorhydrique</td></tr>\n<tr><td>Silhouette humaine avec étoile sur la poitrine</td><td>Danger grave pour la santé : CMR, sensibilisant respiratoire, toxicité pour un organe</td><td>Trioxyde de chrome, sels de nickel, acide borique</td></tr>\n<tr><td>Point d'exclamation</td><td>Irritant, sensibilisant cutané, nocif</td><td>Nombreux additifs, dégraissants</td></tr>\n<tr><td>Flamme</td><td>Inflammable</td><td>Solvants, peintures solvantées</td></tr>\n<tr><td>Flamme sur un cercle</td><td>Comburant</td><td>Trioxyde de chrome, nitrates, peroxydes</td></tr>\n<tr><td>Arbre et poisson morts</td><td>Dangereux pour le milieu aquatique</td><td>Sels de nickel, de zinc, de cuivre, cyanures</td></tr>\n<tr><td>Bouteille de gaz</td><td>Gaz sous pression</td><td>Azote, gaz de traitement thermique</td></tr>\n</tbody>\n</table>\n<p>L'étiquette donne l'essentiel ; le détail se trouve dans la <strong>fiche de données de sécurité</strong> (FDS), que le fournisseur doit remettre en français et que l'employeur tient à disposition des salariés. Elle précise les EPI adaptés, les produits incompatibles, les premiers secours et les consignes en cas de déversement. Une FDS se lit avant la première utilisation d'un produit, et à chaque nouvelle version.</p>\n<p>Les cuves et les tuyauteries sont elles aussi identifiées : nom du bain, principaux dangers, pictogrammes. Un récipient de transvasement porte toujours une étiquette ; un produit sans étiquette ne s'utilise pas.</p>"
      },
      {
       "titre": "Valeurs limites et surveillance",
       "contenu": "\n<p>Les <strong>valeurs limites d'exposition professionnelle</strong> (VLEP) fixent la concentration maximale d'une substance dans l'air que peut respirer un travailleur : une valeur sur 8 heures (exposition moyenne d'une journée) et parfois une valeur court terme sur 15 minutes. Certaines sont réglementaires contraignantes, d'autres indicatives. Le chrome hexavalent, les brouillards d'acides, le nickel et de nombreux solvants en possèdent. Des mesurages d'atmosphère sont réalisés au poste par des organismes accrédités pour vérifier leur respect.</p>\n<p>Les salariés exposés à certains agents (CMR notamment) bénéficient d'un <strong>suivi individuel renforcé</strong> par la médecine du travail, qui peut inclure une <strong>surveillance biologique</strong>, par exemple le dosage du chrome dans les urines. Les expositions aux CMR sont tracées par l'employeur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les sels de nickel sont de puissants allergènes cutanés. Un eczéma des mains chez un opérateur de nickelage peut devenir une maladie professionnelle reconnue et l'obliger à changer de poste. Le port de gants adaptés et le lavage des mains avant les pauses ne sont pas des formalités.</div>"
      },
      {
       "titre": "Stockage, incompatibilités et manipulation",
       "contenu": "\n<p>Certains produits réagissent violemment entre eux. Leur <strong>séparation</strong> est une règle absolue, au stockage comme dans les rétentions et les réseaux d'effluents.</p>\n<table>\n<thead><tr><th>Mélange</th><th>Conséquence</th></tr></thead>\n<tbody>\n<tr><td>Acide + cyanure</td><td>Dégagement d'acide cyanhydrique, gaz mortel</td></tr>\n<tr><td>Acide + hypochlorite (eau de Javel)</td><td>Dégagement de chlore, gaz toxique</td></tr>\n<tr><td>Acide concentré + base concentrée</td><td>Réaction très exothermique, ébullition et projections</td></tr>\n<tr><td>Comburant (acide chromique, nitrates) + matières combustibles ou solvants</td><td>Risque d'incendie</td></tr>\n<tr><td>Acide nitrique + matières organiques</td><td>Réaction violente, vapeurs nitreuses toxiques</td></tr>\n<tr><td>Acide + métaux (zinc, aluminium)</td><td>Dégagement de dihydrogène inflammable</td></tr>\n</tbody>\n</table>\n<p>Les règles de manipulation sont constantes :</p>\n<ul>\n<li>stocker par familles compatibles, sur rétention, dans un local ventilé, en quantité limitée au poste ;</li>\n<li>transvaser avec des pompes ou des équipements adaptés, jamais en versant d'un fût lourd à bout de bras ;</li>\n<li>verser l'acide dans l'eau, lentement, sous aspiration ;</li>\n<li>dissoudre les produits solides (soude en écailles, sels) progressivement, car la dissolution de la soude est fortement exothermique ;</li>\n<li>ne jamais pipeter à la bouche, ne jamais manger, boire ou fumer dans l'atelier.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'acide fluorhydrique, présent dans certains décapages d'inox et d'aluminium, est particulièrement traître : une brûlure peut sembler indolore au début alors que le produit pénètre et attaque les tissus en profondeur et perturbe le calcium de l'organisme. Les ateliers qui l'utilisent disposent d'un gel antidote au gluconate de calcium et de consignes spécifiques ; toute projection impose un lavage immédiat et un avis médical urgent.</div>"
      },
      {
       "titre": "Protection collective et individuelle",
       "contenu": "\n<p>Les <strong>protections collectives</strong> protègent tous les présents sans action de leur part : aspirations de bord de cuve, couvercles, encoffrement des lignes, automatisation des chargements, ventilation générale, détecteurs de gaz (acide cyanhydrique, hydrogène), rétentions, douches de sécurité et fontaines oculaires à proximité des postes.</p>\n<p>Le <strong>captage à la source</strong> est le moyen le plus efficace contre les vapeurs et brouillards : des fentes d'aspiration placées sur un ou deux bords de cuve aspirent l'air chargé avant qu'il n'atteigne la zone respiratoire de l'opérateur. Son efficacité dépend de la largeur de la cuve, de la hauteur de liquide sous le bord (revanche), des courants d'air de l'atelier et de la propreté des fentes. Un opérateur qui se penche au-dessus d'une cuve pour regarder les pièces se place dans le flux pollué : on observe sur le côté ou après sortie du bain. Les additifs <strong>suppresseurs de brouillard</strong> et les billes flottantes réduisent encore les émissions sur les cuves les plus émissives.</p>\n<p>Les <strong>équipements de protection individuelle</strong> (EPI) complètent ces mesures. Ils sont choisis d'après la fiche de données de sécurité et l'analyse du poste :</p>\n<ul>\n<li>lunettes-masques étanches ou écran facial pour les transvasements et les ajouts ;</li>\n<li>gants résistants au produit concerné (nitrile, néoprène, butyle… selon la FDS), vérifiés avant usage ;</li>\n<li>tablier ou combinaison résistants aux produits chimiques, bottes ;</li>\n<li>appareil de protection respiratoire avec cartouche adaptée lorsqu'un risque d'inhalation subsiste.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduite à tenir en cas de projection de produit corrosif dans l'œil.\n<ol>\n<li>Rincer immédiatement à la fontaine oculaire ou à l'eau courante, paupières maintenues ouvertes, pendant au moins 15 minutes.</li>\n<li>Faire alerter les secours et le sauveteur secouriste du travail, sans interrompre le rinçage.</li>\n<li>Retirer les lentilles de contact si c'est possible sans retarder le rinçage.</li>\n<li>Transmettre aux secours le nom du produit et sa fiche de données de sécurité.</li>\n<li>Après l'événement, déclarer l'accident et analyser ses causes.</li>\n</ol>\nPour une projection sur la peau, même principe : retirer les vêtements souillés et rincer abondamment sous la douche de sécurité.</div>\n<p>En cas de <strong>déversement</strong>, on balise la zone, on se protège, on contient avec des absorbants adaptés au produit (jamais de sciure sur un comburant), on récupère dans un récipient étiqueté et l'on prévient le responsable. Un déversement important ou une émanation de gaz impose l'évacuation et l'alerte selon le plan d'urgence de l'établissement.</p>"
      }
     ],
     "points_cles": [
      "Le risque combine le danger du produit et l'exposition de la personne par voie respiratoire, cutanée ou digestive.",
      "La priorité est la substitution, puis la protection collective, puis les EPI.",
      "L'étiquette CLP comporte mot d'avertissement, pictogrammes, mentions H et conseils P.",
      "Les VLEP limitent la concentration dans l'air ; les salariés exposés aux CMR ont un suivi renforcé.",
      "Acide et cyanure, acide et hypochlorite, comburant et combustible ne doivent jamais se rencontrer.",
      "Les sels de nickel sont des allergènes cutanés puissants ; l'acide fluorhydrique exige un antidote spécifique.",
      "Projection dans l'œil : rinçage immédiat d'au moins 15 minutes, puis alerte.",
      "Un déversement se balise, se contient avec un absorbant adapté et se signale."
     ],
     "lexique": [
      {
       "terme": "Danger",
       "def": "Propriété intrinsèque d'un produit pouvant causer un dommage."
      },
      {
       "terme": "Exposition",
       "def": "Contact entre une personne et un agent dangereux, par une voie d'entrée donnée."
      },
      {
       "terme": "CMR",
       "def": "Cancérogène, mutagène ou toxique pour la reproduction."
      },
      {
       "terme": "CLP",
       "def": "Règlement européen relatif à la classification, l'étiquetage et l'emballage des produits chimiques."
      },
      {
       "terme": "Mention de danger",
       "def": "Phrase codée H décrivant la nature du danger d'un produit."
      },
      {
       "terme": "VLEP",
       "def": "Valeur limite d'exposition professionnelle : concentration maximale admissible dans l'air du poste de travail."
      },
      {
       "terme": "Comburant",
       "def": "Produit qui favorise ou entretient la combustion d'autres matières."
      },
      {
       "terme": "Document unique",
       "def": "Document dans lequel l'employeur consigne l'évaluation des risques professionnels."
      },
      {
       "terme": "Fontaine oculaire",
       "def": "Équipement de rinçage des yeux installé à proximité des postes à risque de projection."
      },
      {
       "terme": "Surveillance biologique",
       "def": "Dosage d'une substance ou de ses effets dans le sang ou les urines des salariés exposés."
      }
     ]
    },
    {
     "id": "btdm-effluents-environnement",
     "titre": "Effluents, déchets et protection de l'environnement",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les effluents et déchets produits par un atelier de traitement.",
      "Situer l'atelier dans la réglementation des installations classées.",
      "Décrire les étapes d'une station de détoxication physico-chimique.",
      "Calculer une quantité de réactif de traitement simple.",
      "Proposer des actions de réduction à la source."
     ],
     "sections": [
      {
       "titre": "Les rejets d'un atelier de traitement",
       "contenu": "\n<p>Un atelier de traitement produit trois catégories de rejets :</p>\n<ul>\n<li>les <strong>effluents liquides</strong> : surtout les eaux de rinçage, faiblement concentrées mais en grands volumes, et ponctuellement les <strong>bains usés</strong> (concentrats) vidangés en fin de vie ;</li>\n<li>les <strong>rejets atmosphériques</strong> : air aspiré au-dessus des cuves, chargé de vapeurs et brouillards acides, alcalins, chromiques, et de COV pour les peintures ;</li>\n<li>les <strong>déchets</strong> : boues d'hydroxydes métalliques, bains usés, cartouches de filtres, sacs anodiques, charbon actif, emballages souillés, résines échangeuses d'ions saturées.</li>\n</ul>\n<p>Les polluants les plus surveillés sont les <strong>métaux</strong> (zinc, nickel, cuivre, chrome, plomb, étain, aluminium, fer), le <strong>chrome hexavalent</strong>, les <strong>cyanures</strong>, le <strong>pH</strong>, les <strong>matières en suspension</strong>, la <strong>demande chimique en oxygène</strong> (DCO, indicateur de la pollution organique), les <strong>fluorures</strong>, les <strong>nitrites</strong>, les <strong>hydrocarbures</strong> et les composés organohalogénés.</p>\n<p>Ces substances sont toxiques pour les organismes aquatiques et, pour les métaux, ne se dégradent pas : elles s'accumulent dans les sédiments et les chaînes alimentaires. Une station d'épuration urbaine n'est pas conçue pour les éliminer, ce qui explique l'obligation d'un traitement sur le site.</p>"
      },
      {
       "titre": "Le cadre réglementaire",
       "contenu": "\n<p>Les ateliers de traitement de surface relèvent de la législation des <strong>installations classées pour la protection de l'environnement</strong> (ICPE), au titre notamment de la rubrique 2565 de la nomenclature (revêtement métallique ou traitement de surfaces par voie électrolytique ou chimique). Selon le volume des cuves et la nature des procédés, l'installation relève d'un régime de déclaration, d'enregistrement ou d'autorisation ; les plus importantes relèvent aussi de la directive européenne sur les émissions industrielles et doivent mettre en œuvre les <strong>meilleures techniques disponibles</strong> décrites dans un document de référence européen (BREF) consacré au traitement de surface des métaux et des matières plastiques.</p>\n<p>Un <strong>arrêté ministériel</strong> fixe les prescriptions techniques applicables à ces installations, et l'<strong>arrêté préfectoral</strong> propre à chaque site précise ses valeurs limites de rejet, la fréquence de l'autosurveillance et les obligations de déclaration. On y trouve notamment :</p>\n<ul>\n<li>des <strong>valeurs limites de concentration</strong> dans les rejets, polluant par polluant ;</li>\n<li>une limitation de la <strong>consommation d'eau de rinçage</strong> par mètre carré de surface traitée et par fonction de rinçage ;</li>\n<li>l'obligation de <strong>rétentions</strong> et la séparation des produits incompatibles ;</li>\n<li>l'<strong>autosurveillance</strong> des rejets (prélèvements, analyses, enregistrement du pH et du débit) et la transmission des résultats à l'inspection des installations classées.</li>\n</ul>\n<p>Les valeurs exactes varient selon le régime et l'arrêté du site : on se réfère toujours au texte applicable à son installation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'exploitant est responsable de ses rejets. Un dépassement doit être signalé, analysé et corrigé ; un déversement accidentel vers le milieu naturel doit être déclaré à l'inspection sans délai.</div>"
      },
      {
       "titre": "La station de détoxication physico-chimique",
       "contenu": "\n<p>La solution la plus répandue est la <strong>station de détoxication</strong> physico-chimique. Les effluents y arrivent par des <strong>réseaux séparés</strong> selon leur nature, car ils ne se traitent pas de la même façon :</p>\n<table>\n<thead><tr><th>Réseau</th><th>Traitement spécifique</th><th>Conditions indicatives</th></tr></thead>\n<tbody>\n<tr><td>Effluents chromiques (chrome hexavalent)</td><td><strong>Déchromatation</strong> : réduction du Cr(VI) en Cr(III) par le bisulfite de sodium (ou un autre réducteur)</td><td>pH acide, voisin de 2 à 3 ; contrôle par potentiel redox</td></tr>\n<tr><td>Effluents cyanurés</td><td><strong>Décyanuration</strong> : oxydation des cyanures en cyanates par l'hypochlorite de sodium</td><td>pH basique, supérieur à 10 ; contrôle par potentiel redox</td></tr>\n<tr><td>Effluents acides et alcalins chargés en métaux</td><td>Dirigés directement vers la neutralisation</td><td>-</td></tr>\n</tbody>\n</table>\n<p>Tous les effluents prétraités se rejoignent ensuite pour :</p>\n<ol>\n<li>la <strong>neutralisation-précipitation</strong> : on ajuste le pH, en général entre 8 et 10 selon les métaux présents, avec de la chaux ou de la soude ; les métaux précipitent sous forme d'<strong>hydroxydes</strong> insolubles ;</li>\n<li>la <strong>floculation</strong> : un floculant agglomère les fines particules en flocs plus gros ;</li>\n<li>la <strong>décantation</strong> : les flocs se déposent au fond d'un décanteur, l'eau clarifiée déborde en surface ;</li>\n<li>la <strong>filtration de finition</strong> (filtre à sable) et le <strong>contrôle</strong> avant rejet : pH, débit, prélèvement pour analyses ;</li>\n<li>la <strong>déshydratation des boues</strong> au filtre-presse ; les gâteaux de boues sont éliminés comme déchets dangereux ou valorisés.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la décyanuration doit être réalisée en milieu nettement basique. Si le pH descend, l'hypochlorite et les cyanures peuvent libérer du chlorure de cyanogène ou de l'acide cyanhydrique, gaz très toxiques. Les régulations de pH et de potentiel redox des stations sont des sécurités vitales.</div>"
      },
      {
       "titre": "Calculer une dose de réactif",
       "contenu": "\n<p>Les stations sont automatisées, mais l'agent de station doit comprendre les quantités mises en jeu pour vérifier la cohérence des consommations et traiter les concentrats en bâchée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer la soude nécessaire pour neutraliser un bain de décapage usé.\n<ol>\n<li>Données : 1 000 L de bain chlorhydrique usé contenant encore 60 g/L d'acide chlorhydrique libre ; réaction HCl + NaOH → NaCl + H<sub>2</sub>O.</li>\n<li>Quantité d'acide : 60 × 1 000 = 60 000 g ; n = 60 000 / 36,5 = 1 644 mol.</li>\n<li>Quantité de soude : même nombre de moles, 1 644 mol, soit 1 644 × 40 = 65 760 g de soude pure.</li>\n<li>Soude commerciale à 30 % en masse : 65,8 / 0,30 = 219 kg de solution.</li>\n<li>Il faut encore précipiter le fer dissous, qui consomme lui aussi de la soude : la quantité réelle est supérieure, et l'ajout se fait progressivement sous contrôle du pH.</li>\n</ol>\nCe calcul montre pourquoi les bains concentrés sont souvent traités à part, lentement, ou confiés à un centre de traitement extérieur.</div>\n<p>Pour la déchromatation, l'agent suit le <strong>potentiel redox</strong> : il chute quand tout le chrome hexavalent a été réduit. Un ajout excessif de réducteur coûte cher et apporte une DCO inutile ; un ajout insuffisant laisse passer du chrome hexavalent.</p>"
      },
      {
       "titre": "Réduire à la source",
       "contenu": "\n<p>Le meilleur effluent est celui qu'on ne produit pas. Les actions de <strong>réduction à la source</strong> sont nombreuses et souvent rentables :</p>\n<ul>\n<li>allonger les temps d'<strong>égouttage</strong> au-dessus des cuves et orienter les pièces pour que le liquide s'écoule (trous d'égouttage, inclinaison) ;</li>\n<li>installer des <strong>rinçages morts</strong> et des <strong>cascades</strong> pour récupérer les produits entraînés et réduire l'eau ;</li>\n<li>recycler les eaux de rinçage sur <strong>résines échangeuses d'ions</strong> et récupérer les concentrats par <strong>évaporation</strong> sous vide pour les renvoyer dans les bains ;</li>\n<li>prolonger la vie des bains par la filtration, le charbon actif, l'électrolyse sélective, la régénération des bains de décapage ;</li>\n<li>substituer les procédés les plus polluants : zinc alcalin sans cyanure, passivations trivalentes, dégraissages biologiques ;</li>\n<li>couvrir les cuves chaudes pour réduire l'évaporation et l'énergie.</li>\n</ul>\n<p>Les <strong>rejets atmosphériques</strong> sont traités eux aussi : l'air aspiré au-dessus des cuves passe dans un <strong>laveur de gaz</strong> (colonne où l'air traverse un garnissage arrosé d'une solution qui capte les acides ou les bases) ou dans des dévésiculeurs qui retiennent les gouttelettes. La solution de lavage, chargée en polluants, est renvoyée vers la station. Les cabines de peinture sont équipées de filtres et, selon les quantités de solvants, d'un traitement des COV par adsorption ou oxydation thermique.</p>\n<p>Enfin, l'<strong>eau</strong> elle-même est une ressource : de nombreux sites fonctionnent en circuit partiellement fermé, en réutilisant l'eau traitée pour des usages peu exigeants (premiers rinçages, préparation de réactifs), ce qui réduit à la fois les prélèvements et les rejets.</p>\n<p>Les déchets dangereux sont éliminés par des filières autorisées et accompagnés d'un <strong>bordereau de suivi des déchets</strong>, aujourd'hui dématérialisé, qui trace leur parcours du producteur jusqu'à l'installation de traitement. Le producteur reste responsable de ses déchets jusqu'à leur élimination finale.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une station qui reçoit soudain une forte charge de nickel, sans raison de production, révèle souvent une fuite de cuve ou une vidange accidentelle. Les variations anormales des consommations de réactifs sont un indicateur précieux, que l'agent de station transmet immédiatement.</div>"
      }
     ],
     "points_cles": [
      "Les rejets sont liquides (rinçages, bains usés), atmosphériques (aspirations) et solides (boues, filtres, bains).",
      "Métaux, chrome hexavalent, cyanures, pH, MES et DCO sont les paramètres clés des rejets.",
      "Les ateliers relèvent des ICPE, notamment de la rubrique 2565 ; l'arrêté préfectoral fixe les valeurs limites du site.",
      "Les effluents chromiques et cyanurés sont collectés séparément et prétraités.",
      "Déchromatation en milieu acide par réduction ; décyanuration en milieu basique par oxydation.",
      "Neutralisation, précipitation des hydroxydes, floculation, décantation et filtre-presse forment la chaîne de traitement.",
      "Les doses de réactifs se calculent à partir des quantités de matière et se règlent sur pH et potentiel redox.",
      "La réduction à la source et la traçabilité des déchets dangereux sont des obligations et des économies."
     ],
     "lexique": [
      {
       "terme": "Effluent",
       "def": "Eau usée rejetée par une installation."
      },
      {
       "terme": "ICPE",
       "def": "Installation classée pour la protection de l'environnement, soumise à une réglementation spécifique."
      },
      {
       "terme": "Autosurveillance",
       "def": "Surveillance de ses rejets réalisée par l'exploitant lui-même selon son arrêté."
      },
      {
       "terme": "Déchromatation",
       "def": "Réduction du chrome hexavalent en chrome trivalent avant précipitation."
      },
      {
       "terme": "Décyanuration",
       "def": "Oxydation des cyanures en composés moins toxiques, en milieu basique."
      },
      {
       "terme": "Précipitation",
       "def": "Formation d'un solide insoluble à partir d'ions dissous, ici les hydroxydes métalliques."
      },
      {
       "terme": "Floculation",
       "def": "Agglomération des fines particules en flocs plus gros qui décantent."
      },
      {
       "terme": "Filtre-presse",
       "def": "Équipement qui déshydrate les boues en les pressant entre des toiles filtrantes."
      },
      {
       "terme": "Potentiel redox",
       "def": "Mesure électrique indiquant le caractère oxydant ou réducteur d'une solution."
      },
      {
       "terme": "Bordereau de suivi des déchets",
       "def": "Document qui trace un déchet dangereux du producteur à son élimination."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Documents de définition et de préparation",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "btdm-doc-plan-specification",
     "titre": "Lire un dessin de définition et une spécification de traitement",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Repérer sur un dessin de définition toutes les informations utiles au traiteur.",
      "Décoder une indication de traitement et la relier à une spécification.",
      "Identifier surfaces significatives, zones à épargner et points de contact autorisés.",
      "Extraire d'une spécification les exigences et les contrôles imposés.",
      "Rédiger une synthèse des exigences avant préparation de la production."
     ],
     "sections": [
      {
       "titre": "Le document et son rôle",
       "contenu": "\n<p>Le <strong>dessin de définition</strong> décrit la pièce telle qu'elle doit être livrée au client final : formes, cotes, tolérances, matériau et traitements. Pour le traiteur, il est accompagné le plus souvent d'une <strong>spécification de traitement</strong>, document du donneur d'ordres ou norme, qui détaille ce que l'indication du plan résume en une ligne. À l'épreuve écrite d'étude et de préparation, ces deux documents sont souvent le point de départ du dossier : il faut en extraire les exigences avant de choisir un procédé, une gamme et des contrôles.</p>\n<p>Les spécifications prennent plusieurs formes : <strong>normes</strong> internationales ou européennes de revêtements (par exemple celles qui définissent les dépôts de zinc, de nickel-chrome ou les anodisations), <strong>normes de constructeurs</strong> automobiles ou aéronautiques, ou <strong>cahiers des charges</strong> propres à un client. Elles ont en commun une structure : domaine d'application, désignation ou classes, exigences, méthodes d'essai, échantillonnage, conditionnement et documents à fournir. Un donneur d'ordres peut imposer sa propre norme en complément d'une norme internationale ; en cas de contradiction, c'est le document cité par le plan et le contrat qui s'applique.</p>\n<p>Le cours de seconde a appris à lire les vues et la cotation d'un dessin. Ici, on lit le plan avec les yeux du traiteur : on cherche le substrat, le traitement, les surfaces concernées, les dimensions à préserver et les pièges de forme.</p>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "\n<table>\n<thead><tr><th>Zone du document</th><th>Ce que le traiteur y cherche</th></tr></thead>\n<tbody>\n<tr><td>Cartouche</td><td>Référence et indice de la pièce, matériau et son état (trempé, revenu), masse, échelle, unité</td></tr>\n<tr><td>Notes générales</td><td>Indication du traitement et référence de spécification, dureté, ébavurage, état de surface général</td></tr>\n<tr><td>Vues et coupes</td><td>Formes (trous borgnes, alésages, filetages, arêtes vives, corps creux), dimensions</td></tr>\n<tr><td>Repères de zones</td><td>Surfaces significatives, zones à épargner (masquage), points de contact autorisés</td></tr>\n<tr><td>Cotes tolérancées</td><td>Cotes « avant traitement » ou « après traitement », tolérances serrées sur les zones revêtues</td></tr>\n<tr><td>Spécification associée</td><td>Épaisseurs, aspect, essais de corrosion, adhérence, dégazage, règles d'échantillonnage</td></tr>\n</tbody>\n</table>\n<p>Vocabulaire à maîtriser : <strong>indice de modification</strong> (lettre ou numéro qui identifie la version du plan), <strong>surface significative</strong>, <strong>épargne</strong> ou masquage (zone protégée du traitement par vernis, bouchon ou ruban), <strong>cote après traitement</strong>, <strong>classe de résistance</strong> d'une vis, <strong>dégazage</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une cote peut être indiquée avant ou après traitement. Si le plan ne le précise pas, la convention de l'entreprise ou de la spécification s'applique ; en cas de doute, on pose la question au client avant de traiter.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un plan et sa spécification.\n<ol>\n<li><strong>Identifier</strong> : référence, indice, matériau et état métallurgique (dureté ou classe de résistance), dans le cartouche.</li>\n<li><strong>Repérer le traitement</strong> dans les notes : nature, épaisseur, finition, référence de spécification.</li>\n<li><strong>Ouvrir la spécification</strong> et noter pour chaque exigence sa valeur et sa méthode de contrôle : épaisseur minimale et où la mesurer, aspect, tenue à la corrosion, adhérence, dégazage, reprise autorisée ou non.</li>\n<li><strong>Analyser la géométrie</strong> : zones de faible densité de courant (creux, trous), arêtes, filetages, corps creux et poches d'air, surfaces à épargner, possibilités d'accrochage.</li>\n<li><strong>Croiser</strong> matériau et traitement : risque de fragilisation, compatibilité des bains, nécessité d'une sous-couche.</li>\n<li><strong>Calculer</strong> si besoin la surface d'une pièce et la surépaisseur sur les cotes fonctionnelles.</li>\n<li><strong>Rédiger</strong> une synthèse : exigences, points critiques, questions à poser au client.</li>\n</ol></div>"
      },
      {
       "titre": "Les pièges à éviter",
       "contenu": "\n<ul>\n<li>Travailler sur un plan à un <strong>indice périmé</strong> : la spécification de traitement peut avoir changé entre deux indices.</li>\n<li>Oublier la <strong>dureté</strong> ou la classe de résistance indiquée dans le cartouche, qui déclenche l'obligation de dégazage.</li>\n<li>Prendre une épaisseur <strong>minimale locale</strong> pour une épaisseur moyenne, ou l'inverse.</li>\n<li>Ignorer une <strong>zone à épargner</strong> dessinée en trait mixte fort ou signalée par une note discrète.</li>\n<li>Ne pas voir un <strong>corps creux</strong> fermé ou un trou borgne qui piégera de l'air ou du bain.</li>\n<li>Placer les points de contact sur une surface significative.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les notes de plan ont souvent la forme « Traitement selon spécification XX, classe 2 ». La classe ne se devine pas : elle renvoie à un tableau de la spécification. Répondre sans avoir lu ce tableau est la faute la plus fréquente à l'épreuve comme en atelier.</div>"
      },
      {
       "titre": "Exemple commenté : un support de vérin zingué",
       "contenu": "\n<p><strong>Document décrit.</strong> Plan d'un support de vérin, référence SV-220, indice C. Cartouche : matériau 42CrMo4 trempé et revenu, dureté 36 à 40 HRC ; masse 0,48 kg ; cotes en millimètres. Vues : une platine de 80 × 60 × 10 mm percée de quatre trous lisses de diamètre 9 mm, surmontée d'une chape dont l'alésage de diamètre 16 H8 reçoit un axe ; un trou taraudé borgne M8 de profondeur 15 mm sur la face arrière. Repères : l'alésage de diamètre 16 est entouré d'un trait mixte fort avec la note « zone à épargner » ; la face avant de la platine est marquée « surface significative ». Note générale : « Zinc-nickel selon spécification client PS-ZN-04, classe B. Dégazage obligatoire. »</p>\n<p>Extrait de la spécification PS-ZN-04 :</p>\n<table>\n<thead><tr><th>Exigence</th><th>Classe A</th><th>Classe B</th></tr></thead>\n<tbody>\n<tr><td>Épaisseur locale minimale sur surface significative</td><td>5 µm</td><td>8 µm</td></tr>\n<tr><td>Teneur en nickel du dépôt</td><td>12 à 16 %</td><td>12 à 16 %</td></tr>\n<tr><td>Passivation</td><td>Trivalente transparente</td><td>Trivalente noire + finition</td></tr>\n<tr><td>Brouillard salin neutre, pas de rouille rouge</td><td>480 h</td><td>720 h</td></tr>\n<tr><td>Contrôle d'épaisseur</td><td>5 pièces par lot, 3 mesures</td><td>5 pièces par lot, 3 mesures</td></tr>\n<tr><td>Dégazage pour dureté supérieure à 32 HRC</td><td>190 à 220 °C, 4 h minimum, débuté moins de 4 h après dépôt</td><td>Idem</td></tr>\n</tbody>\n</table>\n<p><strong>Analyse modèle.</strong></p>\n<ol>\n<li><em>Identification.</em> Pièce SV-220 indice C, en acier faiblement allié 42CrMo4 traité à 36 à 40 HRC. Cette dureté dépasse le seuil de 32 HRC de la spécification : le dégazage est obligatoire, ce que confirme la note du plan.</li>\n<li><em>Exigences du traitement, classe B.</em> Zinc-nickel à 12 à 16 % de nickel, 8 µm minimum en local sur la face avant de la platine, passivation trivalente noire suivie d'une finition, 720 h sans rouille rouge au brouillard salin neutre. Contrôle sur 5 pièces par lot, 3 mesures par pièce.</li>\n<li><em>Points géométriques critiques.</em> L'alésage de diamètre 16 H8 est à épargner : il faudra le masquer (bouchon ou vernis d'épargne) pour préserver sa cote et sa tolérance serrée. Le taraudage borgne M8 est une zone de faible densité de courant qui piège l'air et le bain : orienter la pièce trou vers le haut ou vers le bas selon l'égouttage, prévoir un rinçage soigné ; la spécification ne fixant l'épaisseur que sur la surface significative, une épaisseur réduite dans le taraudage est acceptable, ce qui est d'ailleurs favorable au vissage.</li>\n<li><em>Accrochage.</em> Les quatre trous lisses de diamètre 9 mm offrent des points de contact situés hors surface significative : on y accroche la pièce.</li>\n<li><em>Gamme induite.</em> Préparation avec décapage limité (acier à haute dureté, risque d'hydrogène), dégraissage électrolytique de préférence anodique, zinc-nickel, passivation noire, finition, séchage, puis dégazage à 190 à 220 °C pendant au moins 4 h, lancé moins de 4 h après la sortie du bain : l'organisation du four doit être prévue avant de lancer la production. Il faut aussi vérifier que la température de dégazage reste inférieure à la température de revenu de la pièce, ce qui est le cas pour un 42CrMo4 revenu à ce niveau de dureté (revenu bien au-dessus de 400 °C).</li>\n<li><em>Questions au client.</em> Le masquage de l'alésage peut-il déborder sur la face de la chape ? La finition doit-elle respecter un coefficient de frottement ?</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> cette synthèse est souvent réalisée par le service méthodes lors de la revue de contrat, avant d'accepter la commande. Elle aboutit à la création d'une gamme et d'une fiche de lancement spécifiques à la référence.</div>"
      }
     ],
     "points_cles": [
      "Le dessin de définition et la spécification se lisent ensemble ; la classe renvoie à un tableau de la spécification.",
      "Le cartouche donne la référence, l'indice, le matériau et sa dureté ou classe de résistance.",
      "La dureté ou la classe de résistance peut déclencher un dégazage obligatoire.",
      "Repérer surfaces significatives, zones à épargner et points de contact autorisés.",
      "Analyser la géométrie : creux, taraudages, corps creux, arêtes, cotes serrées.",
      "Distinguer épaisseur locale minimale et épaisseur moyenne.",
      "Vérifier l'indice du plan avant toute préparation.",
      "Conclure par une synthèse des exigences, des points critiques et des questions au client."
     ],
     "lexique": [
      {
       "terme": "Dessin de définition",
       "def": "Dessin qui définit complètement la pièce finie : formes, cotes, tolérances, matériau, traitements."
      },
      {
       "terme": "Indice de modification",
       "def": "Repère de version d'un plan, modifié à chaque évolution."
      },
      {
       "terme": "Épargne",
       "def": "Protection d'une zone de la pièce pour qu'elle ne reçoive pas le traitement."
      },
      {
       "terme": "Vernis d'épargne",
       "def": "Produit appliqué localement et retiré après traitement pour masquer une zone."
      },
      {
       "terme": "Point de contact",
       "def": "Endroit où la pièce est tenue et alimentée électriquement sur le montage."
      },
      {
       "terme": "Revue de contrat",
       "def": "Vérification, avant acceptation d'une commande, que l'entreprise peut satisfaire toutes les exigences."
      },
      {
       "terme": "Classe de spécification",
       "def": "Niveau d'exigence défini par un tableau dans une spécification de traitement."
      },
      {
       "terme": "Épaisseur locale minimale",
       "def": "Plus petite valeur d'épaisseur admise en chaque point de mesure de la surface significative."
      }
     ]
    },
    {
     "id": "btdm-doc-fiche-technique-bain",
     "titre": "Exploiter la fiche technique d'un bain",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Repérer la structure d'une fiche technique de procédé fournie par un fabricant.",
      "Distinguer valeurs de montage, plages de fonctionnement et valeurs optimales.",
      "Calculer les quantités de produits pour monter ou corriger un bain.",
      "Prévoir les consommations à partir des données d'entretien.",
      "Repérer dans la fiche les conditions d'équipement et de sécurité."
     ],
     "sections": [
      {
       "titre": "Le document et son rôle",
       "contenu": "\n<p>Les bains de traitement sont rarement préparés à partir de « recettes » d'atelier : on utilise des <strong>procédés commerciaux</strong> mis au point par des fournisseurs de produits chimiques. Chaque procédé est accompagné d'une <strong>fiche technique</strong> (ou notice technique) qui décrit comment monter le bain, le faire fonctionner, l'analyser et l'entretenir. C'est le document de référence de la conduite du bain ; il complète la fiche de données de sécurité de chaque produit, qui traite des dangers.</p>\n<p>À l'épreuve écrite, la fiche technique sert à justifier des paramètres, à calculer un montage ou une correction, à prévoir une consommation ou à expliquer un défaut à partir du tableau de dépannage qu'elle contient souvent.</p>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu habituel</th></tr></thead>\n<tbody>\n<tr><td>Présentation</td><td>Nom commercial, type de dépôt, propriétés, domaines d'emploi, substrats</td></tr>\n<tr><td>Composition de montage</td><td>Produits et quantités pour 1 L ou 100 L de bain neuf</td></tr>\n<tr><td>Paramètres de fonctionnement</td><td>Plages et valeurs optimales : concentrations, pH, température, densité de courant, tension, agitation, rapport surface anodique/cathodique</td></tr>\n<tr><td>Équipement</td><td>Matériau de cuve, chauffage, filtration, anodes, aspiration</td></tr>\n<tr><td>Montage du bain</td><td>Ordre d'introduction des produits, précautions</td></tr>\n<tr><td>Entretien</td><td>Consommations en mL par 1 000 A·h ou en L par m², fréquences d'analyse, purifications</td></tr>\n<tr><td>Méthodes d'analyse</td><td>Modes opératoires de dosage et formules de calcul</td></tr>\n<tr><td>Dépannage</td><td>Tableau défaut, cause probable, remède</td></tr>\n<tr><td>Traitement des effluents et sécurité</td><td>Contraintes de station, renvoi aux FDS</td></tr>\n</tbody>\n</table>\n<p>Vocabulaire : <strong>valeur de montage</strong> (concentration du bain neuf), <strong>plage de fonctionnement</strong> (limites entre lesquelles le bain donne un résultat correct), <strong>optimum</strong> (valeur visée), <strong>entretien</strong> (ajouts réguliers), <strong>rapport anode/cathode</strong>, <strong>produit de base</strong>, <strong>brillanteur</strong>, <strong>additif de répartition</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on vise l'<strong>optimum</strong>, on tolère la <strong>plage</strong>. Un bain qui « fonctionne encore » en bord de plage est un bain qui dérive : on corrige avant d'en sortir.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une fiche technique.\n<ol>\n<li>Identifier le procédé, le dépôt et vérifier qu'il convient au substrat et à la fonction demandée.</li>\n<li>Relever les paramètres dans un tableau à trois colonnes : minimum, optimum, maximum.</li>\n<li>Repérer les <strong>unités</strong> de chaque grandeur (g/L de sel ou de métal, mL/L de produit liquide, A/dm², °C).</li>\n<li>Pour un montage, multiplier les quantités unitaires par le volume utile de la cuve et respecter l'ordre d'introduction.</li>\n<li>Pour une correction, partir de l'analyse : écart à l'optimum × volume, puis conversion en quantité de produit commercial (teneur du produit en constituant).</li>\n<li>Pour l'entretien, calculer les ampères-heures ou les surfaces traitées sur la période et appliquer les consommations.</li>\n<li>Pour un défaut, utiliser le tableau de dépannage puis vérifier les causes par analyse.</li>\n</ol></div>"
      },
      {
       "titre": "Les pièges à éviter",
       "contenu": "\n<ul>\n<li>Confondre <strong>concentration en métal</strong> et <strong>concentration en sel</strong>, ou g/L et mL/L.</li>\n<li>Calculer sur le volume total de la cuve au lieu du <strong>volume utile</strong> de bain.</li>\n<li>Oublier que certains produits commerciaux sont des solutions : 1 L de « concentré de zinc » ne contient pas 1 kg de zinc ; la fiche indique sa teneur.</li>\n<li>Appliquer une consommation par 1 000 A·h à des heures de fonctionnement.</li>\n<li>Négliger les conditions d'équipement : un bain prévu avec agitation par mouvement cathodique ne supporte pas toujours l'air insufflé.</li>\n</ul>\n<p>Il faut aussi savoir lire ce que la fiche <strong>ne dit pas</strong>. Les plages indiquées valent pour les conditions décrites (type d'agitation, rapport anode/cathode, substrat courant) ; sur une pièce de forme difficile ou avec un équipement différent, l'optimum réel de l'atelier peut être légèrement décalé. C'est l'historique des fiches de suivi et des essais en cellule de Hull qui permet de fixer les consignes internes de l'entreprise, toujours à l'intérieur des plages du fournisseur.</p>\n<p>Enfin, les consommations d'entretien données en mL par 1 000 A·h correspondent à des conditions moyennes. Un entraînement important (tonneaux, pièces creuses) augmente la consommation réelle : il faut alors raisonner aussi en surface traitée et comparer avec l'expérience de l'atelier, plutôt que d'appliquer mécaniquement le chiffre de la fiche.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'ordre de montage n'est pas indifférent. Introduire un additif organique avant la dissolution complète des sels, ou ajouter un acide concentré sans dilution préalable, peut dégrader le bain ou créer un danger. On suit l'ordre de la fiche.</div>"
      },
      {
       "titre": "Exemple commenté : un bain de zinc acide",
       "contenu": "\n<p><strong>Document décrit.</strong> Fiche technique d'un procédé de zinc acide brillant au chlorure de potassium, pour montage et tonneau, sur acier. Extraits :</p>\n<table>\n<thead><tr><th>Paramètre</th><th>Minimum</th><th>Optimum</th><th>Maximum</th></tr></thead>\n<tbody>\n<tr><td>Zinc métal (g/L)</td><td>25</td><td>35</td><td>45</td></tr>\n<tr><td>Chlorure de potassium (g/L)</td><td>180</td><td>200</td><td>220</td></tr>\n<tr><td>Acide borique (g/L)</td><td>20</td><td>25</td><td>30</td></tr>\n<tr><td>Additif de base (mL/L)</td><td>25</td><td>30</td><td>35</td></tr>\n<tr><td>pH</td><td>4,8</td><td>5,4</td><td>5,8</td></tr>\n<tr><td>Température (°C)</td><td>20</td><td>25</td><td>35</td></tr>\n<tr><td>Densité de courant au montage (A/dm²)</td><td>0,5</td><td>2</td><td>4</td></tr>\n</tbody>\n</table>\n<p>Montage pour 100 L : chlorure de zinc 7,3 kg (apporte 3,5 kg de zinc métal) ; chlorure de potassium 20 kg ; acide borique 2,5 kg ; additif de base 3 L ; brillanteur 0,1 L. Entretien : brillanteur 150 à 250 mL par 1 000 A·h. Équipement : cuve en polypropylène, anodes de zinc pur en paniers de titane avec sacs, filtration continue, refroidissement si nécessaire. Dépannage : « dépôt brûlé aux fortes densités de courant : zinc trop bas, température trop basse, manque d'additif de base » ; « dépôt terne dans les creux : manque de brillanteur, pollution organique ».</p>\n<p>Situation : cuve de volume utile 1 500 L. Analyse du jour : zinc 28 g/L, chlorure de potassium 205 g/L, pH 5,9, 29 °C. Le compteur indique 4 800 A·h depuis le dernier ajout de brillanteur. L'opérateur signale des brûlures sur les arêtes des pièces.</p>\n<p><strong>Analyse modèle.</strong></p>\n<ol>\n<li><em>Situation par rapport à la fiche.</em> Le zinc (28 g/L) est dans la plage mais nettement sous l'optimum de 35 g/L. Le chlorure de potassium (205 g/L) et la température (29 °C) sont corrects. Le pH (5,9) dépasse le maximum de 5,8 : il est hors plage.</li>\n<li><em>Lien avec le défaut.</em> Le tableau de dépannage associe la brûlure à un zinc trop bas : c'est cohérent avec l'analyse. Le pH élevé favorise aussi un dépôt de mauvaise qualité aux fortes densités de courant.</li>\n<li><em>Correction du zinc.</em> Manque : 35 − 28 = 7 g/L × 1 500 L = 10 500 g de zinc métal. D'après les données de montage, 7,3 kg de chlorure de zinc apportent 3,5 kg de zinc, soit un rapport de 7,3 / 3,5 = 2,09. Masse de chlorure de zinc : 10,5 × 2,09 ≈ 21,9 kg. En pratique, la remontée du zinc se fait aussi par la dissolution des anodes : il faut vérifier leur quantité et leur état, car un manque de surface anodique explique souvent une baisse du zinc.</li>\n<li><em>Correction du pH.</em> Abaisser le pH vers 5,4 par ajout progressif d'acide chlorhydrique dilué, avec mesure après chaque ajout, sous agitation et aspiration.</li>\n<li><em>Entretien du brillanteur.</em> 4 800 A·h correspondent à 4,8 × 150 = 720 mL à 4,8 × 250 = 1 200 mL de brillanteur ; on ajoute la valeur habituelle de l'atelier dans cette fourchette, par exemple 1 L, puis on vérifie en cellule de Hull.</li>\n<li><em>Vérification.</em> Nouvelle analyse après homogénéisation, essai en cellule de Hull, puis contrôle des pièces suivantes ; enregistrement des ajouts sur la fiche de suivi.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fournisseurs de procédés assurent souvent un <strong>suivi technique</strong> : visites, analyses complémentaires, conseils de dépannage. Leur fiche technique fait foi pour la garantie du procédé ; s'en écarter durablement doit être une décision validée.</div>"
      }
     ],
     "points_cles": [
      "La fiche technique décrit montage, fonctionnement, entretien, analyse et dépannage d'un procédé commercial.",
      "Distinguer valeur de montage, plage de fonctionnement et optimum.",
      "Vérifier les unités : g/L de sel ou de métal, mL/L, A/dm², °C.",
      "Les calculs se font sur le volume utile de bain.",
      "Une correction se calcule à partir de l'écart à l'optimum et de la teneur du produit commercial.",
      "Les consommations d'additifs sont exprimées par 1 000 A·h ou par surface traitée.",
      "Le tableau de dépannage oriente le diagnostic, que l'analyse confirme.",
      "L'ordre de montage et les conditions d'équipement de la fiche doivent être respectés."
     ],
     "lexique": [
      {
       "terme": "Fiche technique",
       "def": "Document du fournisseur décrivant la mise en œuvre et l'entretien d'un procédé."
      },
      {
       "terme": "Valeur de montage",
       "def": "Concentration prévue pour un bain neuf."
      },
      {
       "terme": "Plage de fonctionnement",
       "def": "Intervalle de valeurs d'un paramètre dans lequel le procédé donne un résultat correct."
      },
      {
       "terme": "Optimum",
       "def": "Valeur visée d'un paramètre, en général au milieu de sa plage."
      },
      {
       "terme": "Volume utile",
       "def": "Volume réel de bain dans la cuve en fonctionnement."
      },
      {
       "terme": "Brillanteur",
       "def": "Additif organique qui donne au dépôt son brillant."
      },
      {
       "terme": "Additif de base",
       "def": "Additif organique qui conditionne la structure et la répartition du dépôt."
      },
      {
       "terme": "Rapport anode/cathode",
       "def": "Rapport entre la surface d'anodes et la surface de pièces dans la cuve."
      }
     ]
    },
    {
     "id": "btdm-doc-gamme-lancement",
     "titre": "Analyser une gamme de traitement et une fiche de lancement",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire une gamme de traitement et justifier l'ordre et le rôle de chaque opération.",
      "Exploiter une fiche de lancement : quantités, surfaces, réglages, contrôles.",
      "Calculer les réglages électriques et les temps à partir des données de la gamme.",
      "Vérifier la cohérence entre gamme, spécification et capacité de la ligne.",
      "Détecter une erreur ou une omission dans un document de préparation."
     ],
     "sections": [
      {
       "titre": "Les documents et leur rôle",
       "contenu": "\n<p>La <strong>gamme de traitement</strong> est le document qui définit, pour une famille de pièces ou une référence, la suite des opérations à réaliser, avec pour chacune le poste, le bain, les paramètres et la durée. Elle est établie par les méthodes et validée par la qualité. La <strong>fiche de lancement</strong> (ou ordre de fabrication) applique cette gamme à un lot précis : numéro de lot, client, référence, quantité, montage choisi, nombre de charges, réglages, contrôles à réaliser et zones d'enregistrement.</p>\n<p>À l'épreuve d'étude et de préparation d'une production, on demande souvent de compléter une gamme, d'en justifier les étapes, de calculer les réglages d'une fiche de lancement ou de vérifier la cohérence de l'ensemble avec la spécification du client.</p>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "\n<table>\n<thead><tr><th>Colonne ou rubrique</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>N° d'opération</td><td>Ordre de passage, souvent de 10 en 10 pour permettre des insertions</td></tr>\n<tr><td>Poste</td><td>Numéro de cuve sur la ligne</td></tr>\n<tr><td>Désignation</td><td>Nature de l'opération : dégraissage, rinçage, décapage, dépôt…</td></tr>\n<tr><td>Bain ou produit</td><td>Nom du procédé et concentration principale</td></tr>\n<tr><td>Paramètres</td><td>Température, densité de courant ou tension, polarité, agitation</td></tr>\n<tr><td>Temps</td><td>Durée d'immersion, parfois temps d'égouttage</td></tr>\n<tr><td>Contrôles</td><td>Autocontrôles et contrôles laboratoire associés</td></tr>\n</tbody>\n</table>\n<p>Dans la fiche de lancement, on trouve en plus : la <strong>surface unitaire</strong> des pièces, le <strong>nombre de pièces par montage</strong> ou la <strong>masse par tonneau</strong>, le <strong>nombre de charges</strong>, l'<strong>intensité</strong> à régler et le numéro de <strong>programme</strong> de la ligne.</p>\n<p>Une gamme se lit aussi par <strong>familles de bains</strong>, ce qui permet de vérifier rapidement sa logique :</p>\n<table>\n<thead><tr><th>Bloc</th><th>Opérations typiques</th><th>Question de contrôle</th></tr></thead>\n<tbody>\n<tr><td>Préparation</td><td>Dégraissages, décapage, activation</td><td>Les salissures organiques sont-elles éliminées avant les minérales ? L'activation précède-t-elle immédiatement le dépôt ?</td></tr>\n<tr><td>Traitement principal</td><td>Dépôt, conversion, anodisation</td><td>Les paramètres sont-ils dans la plage de la fiche technique ? Le temps permet-il l'épaisseur visée ?</td></tr>\n<tr><td>Post-traitements</td><td>Passivation, coloration, colmatage, finition</td><td>Sont-ils exigés par la spécification et compatibles avec le dépôt ?</td></tr>\n<tr><td>Fin de gamme</td><td>Rinçages finaux à l'eau déminéralisée, séchage</td><td>Le dernier rinçage évite-t-il les traces ? La température de séchage est-elle admise ?</td></tr>\n<tr><td>Hors ligne</td><td>Dégazage, contrôles, conditionnement</td><td>Les délais et durées imposés sont-ils compatibles avec l'organisation ?</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque étape d'une gamme répond à une question : qu'est-ce qu'elle enlève, qu'est-ce qu'elle dépose ou transforme, qu'est-ce qu'elle protège ? Une étape dont on ne sait pas dire le rôle est soit mal comprise, soit inutile.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une gamme et sa fiche de lancement.\n<ol>\n<li>Identifier le substrat et le traitement final visé ; relire les exigences de la spécification.</li>\n<li>Regrouper les opérations en blocs : préparation, traitement principal, post-traitements, séchage, traitements après ligne (dégazage), contrôles.</li>\n<li>Pour chaque opération, énoncer son rôle et vérifier qu'un rinçage sépare deux bains incompatibles.</li>\n<li>Vérifier les paramètres par rapport aux fiches techniques des bains.</li>\n<li>Calculer les surfaces par charge, l'intensité, le temps nécessaire pour l'épaisseur visée (loi de Faraday et rendement).</li>\n<li>Calculer le nombre de charges et la durée de production, en tenant compte du poste goulot.</li>\n<li>Vérifier les contrôles prévus par rapport au plan de contrôle et à la spécification.</li>\n<li>Lister les incohérences et proposer les corrections.</li>\n</ol></div>"
      },
      {
       "titre": "Les pièges à éviter",
       "contenu": "\n<ul>\n<li>Oublier un <strong>rinçage</strong> entre un bain alcalin et un bain acide, ou entre l'acide et un bain cyanuré.</li>\n<li>Oublier l'<strong>activation</strong> juste avant le dépôt.</li>\n<li>Calculer l'intensité pour une pièce au lieu de la charge complète.</li>\n<li>Utiliser le rendement théorique de 100 % pour un bain qui en a beaucoup moins.</li>\n<li>Prévoir un séchage à température supérieure au maximum admis par la passivation.</li>\n<li>Omettre une opération hors ligne exigée par la spécification : dégazage, contrôle d'adhérence, emballage spécifique.</li>\n</ul>\n<p>Il faut aussi vérifier la <strong>capacité</strong> de la ligne : dimensions utiles des cuves par rapport à la taille des montages, intensité maximale du redresseur par rapport au courant calculé, charge maximale d'un tonneau, puissance de refroidissement. Une fiche de lancement qui demande 900 A sur un redresseur de 600 A est inapplicable : il faut réduire le nombre de montages par charge, et donc recalculer le nombre de charges et la durée de production.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une épaisseur calculée par la loi de Faraday est une <strong>moyenne</strong>. Si la spécification impose une épaisseur <strong>locale minimale</strong>, il faut viser une moyenne supérieure, avec une marge qui dépend de la répartition du bain et de la forme des pièces.</div>"
      },
      {
       "titre": "Exemple commenté : nickelage de bagues en laiton",
       "contenu": "\n<p><strong>Document décrit.</strong> Gamme G-NI-07, « nickel brillant sur laiton, 10 µm minimum local », ligne manuelle n° 2.</p>\n<table>\n<thead><tr><th>Op.</th><th>Poste</th><th>Désignation</th><th>Paramètres</th><th>Temps</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>1</td><td>Dégraissage chimique alcalin</td><td>60 °C</td><td>5 min</td></tr>\n<tr><td>20</td><td>2</td><td>Rinçage courant</td><td>Ambiante</td><td>30 s</td></tr>\n<tr><td>30</td><td>3</td><td>Dégraissage électrolytique</td><td>Cathodique, 5 A/dm², 50 °C</td><td>1 min</td></tr>\n<tr><td>40</td><td>4</td><td>Rinçage courant</td><td>Ambiante</td><td>30 s</td></tr>\n<tr><td>50</td><td>6</td><td>Nickel brillant</td><td>55 °C, pH 4,2, 4 A/dm²</td><td>À calculer</td></tr>\n<tr><td>60</td><td>7 et 8</td><td>Rinçage mort puis rinçage cascade</td><td>Ambiante</td><td>30 s chacun</td></tr>\n<tr><td>70</td><td>9</td><td>Séchage air chaud</td><td>70 °C</td><td>5 min</td></tr>\n</tbody>\n</table>\n<p>Fiche de lancement : lot 26-1184, 1 200 bagues, surface unitaire 0,15 dm², montage de 60 bagues, cuve de nickel pouvant recevoir 2 montages simultanément, rendement cathodique du nickel 95 %. Contrôle prévu : « épaisseur par induction magnétique sur 5 pièces ».</p>\n<p><strong>Analyse modèle.</strong></p>\n<ol>\n<li><em>Structure.</em> Préparation (op. 10 à 40), dépôt (op. 50), récupération et rinçages (op. 60), séchage (op. 70). Le rinçage mort récupère le nickel entraîné et la cascade économise l'eau : bonne pratique.</li>\n<li><em>Omission.</em> Il manque une <strong>activation acide</strong> entre le dernier rinçage alcalin (op. 40) et le nickel : sur laiton, une activation courte en acide sulfurique dilué, suivie d'un rinçage, élimine le voile d'oxyde et neutralise l'alcalinité résiduelle. Il faudrait insérer une opération 42 (activation, poste 5) et 44 (rinçage).</li>\n<li><em>Paramètre discutable.</em> Le dégraissage électrolytique cathodique convient au laiton (l'anodique risquerait de le ternir), mais il peut déposer des impuretés métalliques : la fiche technique du dégraissant doit le confirmer.</li>\n<li><em>Calcul du temps de nickelage.</em> À 1 A/dm² pendant une heure, on dépose environ 11,7 µm de nickel avec 95 % de rendement ; à 4 A/dm², environ 46,8 µm/h, soit 0,78 µm/min. On vise une moyenne de 12 µm pour garantir 10 µm en local : t = 12 / 0,78 ≈ 15,4 min, arrondi à 16 min.</li>\n<li><em>Réglage électrique.</em> Surface d'un montage : 60 × 0,15 = 9 dm² ; deux montages : 18 dm² ; intensité : 4 × 18 = 72 A.</li>\n<li><em>Durée de production.</em> 1 200 / 60 = 20 montages, soit 10 charges de 2 montages. Le nickel est le poste goulot (16 min) : en enchaînant les charges, la production dure environ 10 × 16 = 160 min, plus le temps de la dernière charge dans les autres postes et les manipulations.</li>\n<li><em>Erreur de contrôle.</em> L'induction magnétique ne convient pas : le substrat laiton n'est pas magnétique et le nickel l'est. Il faut prévoir la fluorescence X, la méthode coulométrique ou un appareil adapté au nickel sur métal non ferreux.</li>\n<li><em>Séchage.</em> 70 °C convient au nickel ; pas de passivation sensible ici.</li>\n</ol>\n<p>Synthèse : la gamme est à corriger sur deux points (ajout de l'activation, méthode de mesure d'épaisseur) ; les réglages de la fiche de lancement sont 72 A et 16 min pour deux montages.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> toute modification de gamme passe par une demande au service méthodes et une nouvelle version validée. L'opérateur qui détecte un oubli le signale ; il ne modifie pas la gamme de sa propre initiative, même si sa correction est juste.</div>"
      }
     ],
     "points_cles": [
      "La gamme définit la suite des opérations ; la fiche de lancement l'applique à un lot précis.",
      "Chaque opération a un rôle : enlever, déposer, transformer ou protéger.",
      "Un rinçage sépare deux bains incompatibles ; une activation précède le dépôt.",
      "Intensité = densité de courant × surface de la charge complète.",
      "Le temps de dépôt se calcule avec la loi de Faraday et le rendement, en visant une moyenne supérieure au minimum local.",
      "La durée de production dépend du nombre de charges et du poste goulot.",
      "La méthode de contrôle doit être adaptée au couple revêtement-substrat.",
      "Une modification de gamme suit le circuit de validation de l'entreprise."
     ],
     "lexique": [
      {
       "terme": "Gamme de traitement",
       "def": "Document qui définit la suite des opérations, des postes et des paramètres pour une pièce ou une famille."
      },
      {
       "terme": "Fiche de lancement",
       "def": "Document qui applique une gamme à un lot donné, avec quantités, réglages et contrôles."
      },
      {
       "terme": "Charge",
       "def": "Ensemble des pièces traitées simultanément dans un poste : un ou plusieurs montages, ou un tonneau."
      },
      {
       "terme": "Surface unitaire",
       "def": "Surface d'une pièce, en dm², utilisée pour régler le courant."
      },
      {
       "terme": "Activation",
       "def": "Immersion courte en acide dilué qui rend la surface réactive juste avant un dépôt."
      },
      {
       "terme": "Poste goulot",
       "def": "Opération la plus longue, qui fixe la cadence de la ligne."
      },
      {
       "terme": "Programme de ligne",
       "def": "Séquence enregistrée dans l'automate qui réalise une gamme."
      },
      {
       "terme": "Numéro de lot",
       "def": "Identifiant qui assure la traçabilité d'un ensemble de pièces traitées ensemble."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Documents de sécurité, de suivi et de contrôle",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "btdm-doc-fds",
     "titre": "Exploiter une fiche de données de sécurité",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Connaître la structure en seize rubriques d'une fiche de données de sécurité.",
      "Retrouver rapidement l'information utile selon la situation : ajout, stockage, accident, déchet.",
      "Traduire les mentions de danger en mesures concrètes au poste.",
      "Choisir les équipements de protection à partir de la fiche.",
      "Rédiger une consigne de poste à partir d'une FDS."
     ],
     "sections": [
      {
       "titre": "Le document et son rôle",
       "contenu": "\n<p>La <strong>fiche de données de sécurité</strong> (FDS) est le document que le fournisseur d'un produit chimique dangereux doit transmettre à l'utilisateur professionnel, en français, dans le format défini par le règlement européen REACH (annexe II). Elle décrit les dangers du produit et les mesures pour l'utiliser, le stocker, l'éliminer et réagir en cas d'accident. Elle est mise à jour lorsque de nouvelles informations apparaissent ; l'entreprise conserve et diffuse la version en vigueur.</p>\n<p>En traitement des matériaux, chaque produit d'ajout (acides, bases, sels, additifs, solvants, réactifs de station) a sa FDS. Le bain lui-même, mélange de plusieurs produits, n'a pas de FDS du fournisseur : l'entreprise en déduit les dangers à partir des FDS des constituants et de leurs concentrations, et les affiche sur la cuve.</p>\n<p>À l'épreuve, la FDS sert à justifier des mesures de prévention, à choisir des EPI, à organiser un stockage, à décrire une conduite à tenir en cas d'accident ou à prévoir l'élimination d'un déchet.</p>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "\n<table>\n<thead><tr><th>Rubrique</th><th>Intitulé</th><th>Usage pour l'opérateur</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Identification du produit et de la société</td><td>Vérifier qu'on a la bonne fiche ; numéro d'appel d'urgence</td></tr>\n<tr><td>2</td><td>Identification des dangers</td><td>Classification, pictogrammes, mentions H, conseils P</td></tr>\n<tr><td>3</td><td>Composition</td><td>Substances dangereuses et leurs concentrations</td></tr>\n<tr><td>4</td><td>Premiers secours</td><td>Gestes en cas d'inhalation, contact, ingestion</td></tr>\n<tr><td>5</td><td>Lutte contre l'incendie</td><td>Moyens d'extinction adaptés, produits de décomposition</td></tr>\n<tr><td>6</td><td>Rejet accidentel</td><td>Conduite en cas de déversement, absorbants</td></tr>\n<tr><td>7</td><td>Manipulation et stockage</td><td>Précautions, incompatibilités, conditions de stockage</td></tr>\n<tr><td>8</td><td>Contrôle de l'exposition, protection individuelle</td><td>VLEP, ventilation, type de gants, lunettes, protection respiratoire</td></tr>\n<tr><td>9</td><td>Propriétés physiques et chimiques</td><td>Aspect, pH, point d'éclair, densité, solubilité</td></tr>\n<tr><td>10</td><td>Stabilité et réactivité</td><td>Réactions dangereuses, matières incompatibles</td></tr>\n<tr><td>11</td><td>Informations toxicologiques</td><td>Effets sur la santé, CMR, sensibilisation</td></tr>\n<tr><td>12</td><td>Informations écologiques</td><td>Toxicité aquatique, persistance</td></tr>\n<tr><td>13</td><td>Élimination</td><td>Filière déchets, emballages</td></tr>\n<tr><td>14</td><td>Transport</td><td>Numéro ONU, classe de danger pour le transport</td></tr>\n<tr><td>15</td><td>Informations réglementaires</td><td>Autorisation REACH, restrictions, maladies professionnelles</td></tr>\n<tr><td>16</td><td>Autres informations</td><td>Date de révision, texte complet des mentions H</td></tr>\n</tbody>\n</table>\n<p>Vocabulaire : <strong>mention de danger</strong> (code H suivi de trois chiffres), <strong>conseil de prudence</strong> (code P), <strong>VLEP</strong>, <strong>point d'éclair</strong> (température à partir de laquelle les vapeurs d'un liquide peuvent s'enflammer), <strong>numéro CAS</strong> (identifiant d'une substance), <strong>temps de passage</strong> d'un gant (durée avant que le produit ne le traverse).</p>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire une FDS selon la question posée.\n<ol>\n<li>Vérifier en rubrique 1 le nom exact du produit et en rubrique 16 la date de révision.</li>\n<li>Lire la rubrique 2 pour connaître les dangers ; en rubrique 3, repérer la substance responsable et sa concentration.</li>\n<li>Pour organiser le poste : rubriques 7 (manipulation, stockage) et 8 (ventilation, EPI précis), puis 10 (incompatibilités).</li>\n<li>Pour réagir à un accident : rubriques 4 (secours), 5 (incendie), 6 (déversement).</li>\n<li>Pour les effets à long terme et la surveillance médicale : rubriques 11 et 15.</li>\n<li>Pour l'environnement et les déchets : rubriques 12 et 13.</li>\n<li>Traduire chaque information en <strong>mesure concrète</strong> : quel geste, quel équipement, quel lieu, quelle quantité.</li>\n</ol></div>\n<p>Pour une consigne de poste, on retient un format court : produit et dangers principaux en une ligne, protections collectives à vérifier avant de commencer, EPI obligatoires, gestes interdits, conduite à tenir en cas de projection et de déversement, numéro d'urgence. Chaque ligne doit pouvoir être reliée à une rubrique précise de la fiche.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une FDS se lit en partant d'une question. On ne recopie pas la fiche : on en extrait les mesures qui s'appliquent à la tâche réelle.</div>"
      },
      {
       "titre": "Les pièges à éviter",
       "contenu": "\n<ul>\n<li>Utiliser la FDS d'un produit voisin ou d'un autre fournisseur : les compositions et donc les dangers diffèrent.</li>\n<li>Utiliser une version ancienne, alors que la classification a pu évoluer.</li>\n<li>Se contenter de « porter des gants » : la rubrique 8 précise la matière et l'épaisseur, et un gant inadapté laisse passer le produit.</li>\n<li>Confondre pH d'un produit pur et danger du bain dilué : un produit faiblement concentré dans un bain reste parfois classé, notamment s'il s'agit d'un CMR ou d'un sensibilisant.</li>\n<li>Oublier les incompatibilités de la rubrique 10 au moment de ranger un fût.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'absence de pictogramme « tête de mort » ne signifie pas que le produit est sans danger grave. Un sel de nickel ou un trioxyde de chrome porte la silhouette avec étoile, signe de danger à long terme (cancérogène, sensibilisant), souvent plus insidieux qu'une toxicité aiguë.</div>"
      },
      {
       "titre": "Exemple commenté : la FDS de l'acide chromique",
       "contenu": "\n<p><strong>Document décrit.</strong> FDS d'un trioxyde de chrome en paillettes, utilisé pour le chromage dur, révision de l'année en cours. Extraits :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Extrait</th></tr></thead>\n<tbody>\n<tr><td>2</td><td>Mot d'avertissement « Danger ». Pictogrammes : flamme sur cercle, corrosion, tête de mort, silhouette avec étoile, environnement. Mentions : peut aggraver un incendie, comburant ; toxique en cas d'ingestion ; mortel par inhalation ; provoque de graves brûlures de la peau et des lésions oculaires ; peut provoquer une allergie cutanée et des symptômes allergiques ou d'asthme par inhalation ; peut induire des anomalies génétiques ; peut provoquer le cancer ; susceptible de nuire à la fertilité ; risque avéré d'effets graves pour les organes à la suite d'expositions répétées ; très toxique pour les organismes aquatiques avec effets à long terme</td></tr>\n<tr><td>7</td><td>Stocker à l'écart des matières combustibles, des réducteurs et des matières organiques ; conserver dans l'emballage d'origine fermé ; local sec et ventilé ; accès réservé</td></tr>\n<tr><td>8</td><td>Valeur limite d'exposition pour le chrome hexavalent ; captage à la source obligatoire ; gants en caoutchouc nitrile ou butyle selon temps de passage indiqué ; lunettes étanches et écran facial ; protection respiratoire filtrante contre les particules en cas d'exposition possible aux poussières ou brouillards</td></tr>\n<tr><td>10</td><td>Réagit violemment avec les réducteurs, les matières organiques, les solvants ; décomposition avec libération d'oxygène à chaud</td></tr>\n<tr><td>13</td><td>Déchet dangereux ; traitement par réduction en chrome trivalent avant précipitation ; emballages souillés éliminés comme déchets dangereux</td></tr>\n<tr><td>15</td><td>Substance inscrite à l'annexe XIV de REACH : utilisation soumise à autorisation ; restrictions d'emploi pour les jeunes travailleurs</td></tr>\n</tbody>\n</table>\n<p>Situation : on doit réaliser un ajout de 15 kg de trioxyde de chrome dans la cuve de chrome dur.</p>\n<p><strong>Analyse modèle.</strong></p>\n<ol>\n<li><em>Dangers majeurs.</em> Le produit est à la fois <strong>CMR</strong> (cancérogène, mutagène, reprotoxique), très toxique par inhalation, corrosif, sensibilisant et <strong>comburant</strong>. Le risque principal lors d'un ajout est l'inhalation de poussières et la projection.</li>\n<li><em>Organisation de l'ajout.</em> Réalisé par une personne formée et autorisée, majeure et affectée à ce poste, aspiration de la cuve en marche, redresseur coupé. Ouverture de l'emballage au-dessus de la cuve ou dans un dispositif de dosage fermé pour éviter les poussières ; introduction progressive pour limiter les projections.</li>\n<li><em>EPI.</em> Gants en nitrile ou butyle de l'épaisseur indiquée, lunettes étanches et écran facial, tablier ou combinaison résistant aux produits chimiques, appareil de protection respiratoire filtrant contre les particules conforme à la rubrique 8.</li>\n<li><em>Stockage.</em> Fûts conservés fermés, dans un local ventilé à accès réservé, loin des solvants, des chiffons, des cartons et des produits réducteurs (bisulfite de la station notamment), sur rétention.</li>\n<li><em>Incident.</em> Paillettes renversées : ne pas balayer à sec (poussières), ne pas utiliser de sciure (matière organique combustible) ; récupérer avec un aspirateur adapté ou un absorbant minéral, dans un récipient étiqueté ; prévenir le responsable.</li>\n<li><em>Déchets et traçabilité.</em> Emballages vides éliminés comme déchets dangereux. L'exposition du salarié est tracée et il bénéficie d'un suivi médical renforcé ; l'entreprise respecte les conditions de son autorisation REACH.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les informations essentielles de la FDS sont reprises sur une <strong>notice de poste</strong> courte et affichée, avec pictogrammes, EPI obligatoires et gestes d'urgence. C'est elle que l'opérateur consulte au quotidien ; la FDS complète reste disponible pour les détails et pour les secours.</div>"
      }
     ],
     "points_cles": [
      "La FDS est fournie en français par le fournisseur et comporte seize rubriques normalisées.",
      "Rubrique 2 pour les dangers, 3 pour la composition, 7 et 8 pour le poste, 10 pour les incompatibilités.",
      "Rubriques 4, 5 et 6 pour réagir à un accident ; 12 et 13 pour l'environnement et les déchets.",
      "La rubrique 8 précise la matière des gants, la protection des yeux et la protection respiratoire.",
      "Un bain n'a pas de FDS propre : ses dangers se déduisent des produits qui le composent.",
      "On vérifie le nom exact du produit et la date de révision.",
      "Le trioxyde de chrome cumule CMR, toxicité, corrosion, sensibilisation et caractère comburant.",
      "Les informations de la FDS sont traduites en notice de poste et en mesures concrètes."
     ],
     "lexique": [
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité, document réglementaire en seize rubriques décrivant les dangers d'un produit et les mesures associées."
      },
      {
       "terme": "REACH",
       "def": "Règlement européen sur l'enregistrement, l'évaluation, l'autorisation et la restriction des substances chimiques."
      },
      {
       "terme": "Annexe XIV",
       "def": "Liste REACH des substances dont l'utilisation est soumise à autorisation."
      },
      {
       "terme": "Numéro CAS",
       "def": "Identifiant numérique unique d'une substance chimique."
      },
      {
       "terme": "Point d'éclair",
       "def": "Température minimale à laquelle un liquide émet assez de vapeurs pour s'enflammer au contact d'une flamme."
      },
      {
       "terme": "Temps de passage",
       "def": "Durée au bout de laquelle un produit chimique traverse le matériau d'un gant."
      },
      {
       "terme": "Conseil de prudence",
       "def": "Phrase codée P décrivant une mesure de prévention ou d'intervention."
      },
      {
       "terme": "Notice de poste",
       "def": "Document court affiché au poste qui résume les risques, les protections et les gestes d'urgence."
      }
     ]
    },
    {
     "id": "btdm-doc-suivi-bain",
     "titre": "Interpréter une fiche de suivi de bain et une carte de contrôle",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire une fiche de suivi de bain et repérer les valeurs hors plage.",
      "Identifier une tendance ou une dérive sur une série de résultats.",
      "Relier les résultats d'analyse aux consommations et aux événements de production.",
      "Interpréter une carte de contrôle d'une caractéristique du dépôt.",
      "Formuler une décision argumentée : poursuivre, corriger, arrêter."
     ],
     "sections": [
      {
       "titre": "Les documents et leur rôle",
       "contenu": "\n<p>La <strong>fiche de suivi de bain</strong> (ou registre de bain) enregistre la vie d'une cuve : dates et heures des analyses, valeurs mesurées, consignes, ajouts réalisés, ampères-heures, purifications, incidents, signatures. Elle prouve que le bain a été maintenu dans sa plage, permet de retrouver la cause d'un défaut et sert à prévoir les consommations. Elle est souvent tenue sous forme de tableau papier au laboratoire ou dans un logiciel de suivi.</p>\n<p>La <strong>carte de contrôle</strong> suit dans le temps une caractéristique du produit ou du procédé (épaisseur, teneur en nickel d'un alliage, concentration) avec une ligne centrale et des limites de contrôle. Les deux documents se lisent ensemble : un événement sur la fiche de bain explique souvent un point anormal sur la carte.</p>\n<p>À l'épreuve, on présente fréquemment une série de résultats sur une ou deux semaines, avec la question : « que constatez-vous, quelles causes possibles, quelles actions ? »</p>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "\n<table>\n<thead><tr><th>Élément</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>En-tête</td><td>Numéro de cuve, nom du procédé, volume utile, plages et consignes de chaque paramètre</td></tr>\n<tr><td>Colonnes de mesure</td><td>Une colonne par paramètre analysé, avec l'unité</td></tr>\n<tr><td>Colonne ajouts</td><td>Produit, quantité, heure, auteur</td></tr>\n<tr><td>Compteur A·h ou surface traitée</td><td>Activité de la cuve entre deux analyses</td></tr>\n<tr><td>Observations</td><td>Cellule de Hull, incidents, purifications, renouvellements</td></tr>\n<tr><td>Carte de contrôle</td><td>Graphique des moyennes et des étendues avec ligne centrale et limites de contrôle</td></tr>\n</tbody>\n</table>\n<p>Les résultats peuvent aussi être présentés sous forme de <strong>graphique de suivi</strong> par paramètre : la concentration en ordonnée, la date en abscisse, avec trois lignes horizontales pour le minimum, la consigne et le maximum. Ce graphique rend les tendances beaucoup plus visibles qu'un tableau de chiffres ; on peut le tracer soi-même à partir d'une fiche pour appuyer une analyse. Les ajouts sont alors repérés par une flèche verticale à la date où ils ont été faits, ce qui permet de voir immédiatement si une correction a eu l'effet attendu.</p>\n<p>Vocabulaire : <strong>consigne</strong> (valeur visée), <strong>limite d'action</strong> (valeur au-delà de laquelle on corrige), <strong>tendance</strong> (suite de valeurs qui évoluent dans le même sens), <strong>consommation spécifique</strong> (quantité consommée par 1 000 A·h ou par m² traité), <strong>cause spéciale</strong>.</p>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> interpréter une série de suivi.\n<ol>\n<li>Relever les plages et consignes dans l'en-tête.</li>\n<li>Marquer toutes les valeurs hors plage, puis toutes les valeurs proches des limites.</li>\n<li>Chercher les <strong>tendances</strong> : un paramètre qui monte ou descend régulièrement depuis plusieurs analyses.</li>\n<li>Rapprocher chaque anomalie des ajouts réalisés et des événements notés (purification, panne, changement de production).</li>\n<li>Calculer si utile une consommation spécifique et la comparer à la valeur de la fiche technique.</li>\n<li>Lire la carte de contrôle en parallèle et rechercher les points hors limites, les séries d'un même côté et les tendances.</li>\n<li>Proposer une hypothèse de cause pour chaque anomalie, l'action de vérification et l'action corrective.</li>\n<li>Conclure : production à poursuivre, à poursuivre après correction, ou à arrêter.</li>\n</ol></div>"
      },
      {
       "titre": "Les pièges à éviter",
       "contenu": "\n<ul>\n<li>Juger chaque valeur isolément : une suite de valeurs encore dans la plage peut révéler une dérive grave.</li>\n<li>Oublier qu'un ajout fait juste avant l'analyse peut fausser la valeur si le bain n'était pas homogène.</li>\n<li>Confondre limites de contrôle de la carte et tolérances de la spécification.</li>\n<li>Corriger un paramètre sans chercher pourquoi il dérive : si l'on ajoute du zinc tous les jours, la vraie question est celle des anodes.</li>\n<li>Négliger la colonne observations, où se trouve souvent l'explication.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une consommation d'additif qui augmente brusquement alors que les ampères-heures sont stables n'est pas « normale ». Elle peut révéler un entraînement accru, une fuite, une erreur de pompe doseuse ou une dégradation du produit. On l'explique avant de continuer à ajouter.</div>"
      },
      {
       "titre": "Exemple commenté : une cuve de zinc-nickel alcalin",
       "contenu": "\n<p><strong>Document décrit.</strong> Fiche de suivi de la cuve 12, zinc-nickel alcalin, volume utile 3 000 L. Plages : zinc 8 à 12 g/L (consigne 10), nickel 1,2 à 1,8 g/L (consigne 1,5), soude 110 à 130 g/L (consigne 120), carbonate de sodium inférieur à 60 g/L. Brillanteur : 200 mL par 1 000 A·h selon la fiche technique.</p>\n<table>\n<thead><tr><th>Jour</th><th>Zn (g/L)</th><th>Ni (g/L)</th><th>NaOH (g/L)</th><th>Na<sub>2</sub>CO<sub>3</sub> (g/L)</th><th>A·h du jour</th><th>Brillanteur ajouté (L)</th><th>Observations</th></tr></thead>\n<tbody>\n<tr><td>Lundi</td><td>10,2</td><td>1,52</td><td>121</td><td>42</td><td>9 800</td><td>2,0</td><td>RAS</td></tr>\n<tr><td>Mardi</td><td>10,5</td><td>1,46</td><td>119</td><td>44</td><td>10 100</td><td>2,0</td><td>RAS</td></tr>\n<tr><td>Mercredi</td><td>10,9</td><td>1,40</td><td>118</td><td>45</td><td>9 900</td><td>2,0</td><td>RAS</td></tr>\n<tr><td>Jeudi</td><td>11,4</td><td>1,33</td><td>116</td><td>47</td><td>10 000</td><td>3,5</td><td>Aspect terne en zone creuse, ajout brillanteur</td></tr>\n<tr><td>Vendredi</td><td>11,8</td><td>1,27</td><td>115</td><td>49</td><td>10 200</td><td>4,0</td><td>Teneur en nickel du dépôt mesurée à 11,5 %</td></tr>\n</tbody>\n</table>\n<p>Carte de contrôle de la teneur en nickel du dépôt (spécification 12 à 16 %, ligne centrale 14 %, limites de contrôle 13 et 15 %) : moyennes journalières 14,1 ; 13,8 ; 13,4 ; 12,9 ; 11,5 %.</p>\n<p><strong>Analyse modèle.</strong></p>\n<ol>\n<li><em>Valeurs hors plage.</em> Aucune concentration du bain n'est encore hors plage le vendredi, mais le zinc (11,8 g/L) approche du maximum et le nickel (1,27 g/L) du minimum.</li>\n<li><em>Tendances.</em> Le zinc monte régulièrement (+1,6 g/L en cinq jours), le nickel baisse régulièrement (−0,25 g/L), la soude baisse lentement et le carbonate monte. Ces évolutions continues signalent une <strong>dérive</strong> du rapport zinc/nickel.</li>\n<li><em>Conséquence sur le produit.</em> La carte de contrôle montre une tendance descendante sur cinq points ; jeudi, la moyenne (12,9 %) est sous la limite inférieure de contrôle de 13 % ; vendredi, 11,5 % est <strong>hors spécification</strong> (minimum 12 %). Les pièces de vendredi sont non conformes et doivent être isolées ; celles de jeudi sont à vérifier.</li>\n<li><em>Hypothèses de cause.</em> Le zinc monte alors que le nickel baisse : les anodes de zinc (ou le dispositif de dissolution du zinc) apportent plus que la consommation, tandis que les ajouts de nickel sont insuffisants. On vérifie la surface d'anodes ou de dissolution de zinc et le fonctionnement de la pompe d'ajout de la solution de nickel.</li>\n<li><em>Brillanteur.</em> Consommation attendue : environ 10 000 A·h × 0,2 L / 1 000 A·h = 2,0 L par jour, conforme du lundi au mercredi. Les ajouts de jeudi et vendredi (3,5 et 4,0 L) ont été faits pour corriger un aspect terne qui provenait en réalité du déséquilibre zinc/nickel : ils masquent le symptôme et risquent un excès de brillanteur.</li>\n<li><em>Carbonate.</em> Il monte lentement par absorption du gaz carbonique de l'air ; il reste sous 60 g/L mais sa progression est à surveiller.</li>\n<li><em>Décision.</em> Arrêter la production sur la cuve 12 jusqu'à la correction ; isoler les lots de jeudi et vendredi ; contrôler la teneur en nickel des pièces de jeudi ; corriger le nickel vers 1,5 g/L (manque 0,23 g/L × 3 000 L = 690 g de nickel métal, à convertir selon la teneur de la solution d'ajout) ; réduire l'apport de zinc ; vérifier la pompe doseuse ; relancer après analyse et contrôle de la teneur sur pièce témoin ; suspendre les ajouts supplémentaires de brillanteur.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la carte de contrôle avait signalé le problème dès jeudi (point sous la limite de contrôle après une tendance), un jour avant que le produit sorte de la spécification. Réagir aux signaux de la carte évite de produire des pièces non conformes.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les dosages de zinc-nickel sont souvent automatisés et les analyses réalisées plusieurs fois par jour. Le suivi graphique de chaque paramètre, affiché près de la ligne, permet aux opérateurs de voir les tendances sans attendre le laboratoire.</div>"
      }
     ],
     "points_cles": [
      "La fiche de suivi enregistre analyses, ajouts, ampères-heures et événements d'une cuve.",
      "Une valeur se juge par rapport à sa plage, mais aussi par rapport aux valeurs précédentes.",
      "Une tendance régulière signale une dérive avant la sortie de plage.",
      "Les consommations spécifiques se comparent à celles de la fiche technique.",
      "Ajouter un produit pour masquer un symptôme retarde le diagnostic.",
      "La carte de contrôle alerte avant que le produit sorte de la spécification.",
      "Les lots produits pendant une dérive sont isolés et contrôlés.",
      "La conclusion distingue poursuivre, corriger puis poursuivre, ou arrêter."
     ],
     "lexique": [
      {
       "terme": "Fiche de suivi de bain",
       "def": "Registre des analyses, ajouts et événements d'une cuve."
      },
      {
       "terme": "Consigne",
       "def": "Valeur visée d'un paramètre."
      },
      {
       "terme": "Limite d'action",
       "def": "Valeur à partir de laquelle une correction doit être réalisée."
      },
      {
       "terme": "Tendance",
       "def": "Suite de valeurs évoluant régulièrement dans le même sens."
      },
      {
       "terme": "Consommation spécifique",
       "def": "Quantité de produit consommée rapportée à l'activité de la cuve (A·h ou m²)."
      },
      {
       "terme": "Limite de contrôle",
       "def": "Limite d'une carte de contrôle calculée à partir de la variabilité naturelle du procédé."
      },
      {
       "terme": "Pompe doseuse",
       "def": "Pompe qui injecte automatiquement une quantité réglée de produit dans un bain."
      },
      {
       "terme": "Carbonatation",
       "def": "Accumulation de carbonates dans un bain alcalin par absorption du gaz carbonique de l'air."
      }
     ]
    },
    {
     "id": "btdm-doc-rapport-non-conformite",
     "titre": "Analyser un rapport de contrôle et une fiche de non-conformité",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Lire un rapport de contrôle ou un procès-verbal d'essai et vérifier sa validité.",
      "Comparer des résultats de mesure à une exigence et conclure sur la conformité.",
      "Exploiter une fiche de non-conformité et son circuit de traitement.",
      "Distinguer correction immédiate, action corrective et action préventive.",
      "Rédiger une analyse de non-conformité claire et argumentée."
     ],
     "sections": [
      {
       "titre": "Les documents et leur rôle",
       "contenu": "\n<p>Le <strong>rapport de contrôle</strong> (ou procès-verbal d'essai) présente les résultats d'un contrôle réalisé sur un lot ou sur des éprouvettes : épaisseurs, adhérence, brouillard salin, dureté, aspect. Il est établi par le laboratoire de l'entreprise ou par un laboratoire extérieur et accompagne souvent la livraison sous forme de <strong>certificat de conformité</strong> ou de rapport d'inspection.</p>\n<p>La <strong>fiche de non-conformité</strong> (FNC) est ouverte lorsqu'un produit ou un procédé ne respecte pas une exigence. Elle décrit l'écart, les produits concernés, la décision prise sur ces produits, l'analyse des causes et les actions engagées. Elle est le support de l'amélioration continue exigée par les systèmes de management de la qualité.</p>\n<p>À l'épreuve, on demande de conclure sur la conformité à partir d'un rapport, de compléter une FNC, de rechercher des causes ou de proposer des actions.</p>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "\n<table>\n<thead><tr><th>Document</th><th>Rubriques habituelles</th></tr></thead>\n<tbody>\n<tr><td>Rapport de contrôle</td><td>Identification du lot et de la pièce ; exigence et référence de la spécification ; méthode et appareil utilisés avec leur validité d'étalonnage ; échantillonnage ; résultats bruts ; conclusion ; date et signature</td></tr>\n<tr><td>Fiche de non-conformité</td><td>Numéro ; date et émetteur ; description de l'écart (exigence et constat) ; quantité concernée ; décision sur le produit ; analyse des causes ; actions correctives ; vérification de l'efficacité ; clôture</td></tr>\n</tbody>\n</table>\n<p>Vocabulaire :</p>\n<ul>\n<li><strong>non-conformité</strong> : non-satisfaction d'une exigence ;</li>\n<li><strong>correction</strong> : action immédiate sur le produit (tri, reprise, rebut) ;</li>\n<li><strong>action corrective</strong> : action sur la cause pour éviter que l'écart se reproduise ;</li>\n<li><strong>action préventive</strong> : action sur une cause potentielle, avant qu'un écart n'apparaisse ;</li>\n<li><strong>dérogation</strong> : accord écrit du client pour accepter un produit non conforme ;</li>\n<li><strong>cause racine</strong> : cause première, celle dont la suppression empêche le retour du problème.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> trier ou reprendre les pièces est une <strong>correction</strong>. Tant que la cause n'est pas traitée, la non-conformité reviendra : l'action corrective porte sur la cause, pas sur les pièces.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un rapport puis une non-conformité.\n<ol>\n<li>Vérifier l'identification : lot, référence, indice, date, et la référence de l'exigence.</li>\n<li>Vérifier la validité de la mesure : méthode adaptée au couple revêtement-substrat, appareil étalonné, échantillonnage conforme au plan de contrôle.</li>\n<li>Comparer chaque résultat à l'exigence selon la règle de décision (valeur locale minimale, moyenne, nombre de défauts admis).</li>\n<li>Conclure : conforme ou non conforme, en citant la valeur et l'exigence.</li>\n<li>En cas d'écart, décrire la non-conformité en une phrase « exigence / constat ».</li>\n<li>Délimiter la quantité concernée grâce à la traçabilité.</li>\n<li>Rechercher la cause racine (5M, « cinq pourquoi »), proposer la correction et l'action corrective, préciser comment vérifier son efficacité.</li>\n</ol></div>\n<p>Une bonne action corrective se reconnaît à quatre caractéristiques : elle agit sur la cause racine et pas seulement sur le symptôme ; elle est concrète (qui fait quoi, pour quand) ; elle est durable, de préférence par une modification d'équipement, de procédure ou de gamme plutôt que par un simple rappel oral ; et son efficacité est mesurable. « Sensibiliser les opérateurs » est rarement suffisant ; « ajouter un contrôle automatique qui bloque le redresseur » l'est davantage.</p>\n<p>La méthode des <strong>cinq pourquoi</strong> consiste à reposer la question « pourquoi ? » à chaque réponse, jusqu'à atteindre une cause sur laquelle on peut agir durablement.</p>"
      },
      {
       "titre": "Les pièges à éviter",
       "contenu": "\n<ul>\n<li>Conclure « conforme » sur la moyenne alors que l'exigence porte sur chaque valeur locale.</li>\n<li>Accepter un résultat obtenu avec une méthode inadaptée ou un appareil dont l'étalonnage est périmé.</li>\n<li>Décrire la non-conformité de façon vague (« mauvaise qualité ») au lieu de citer l'exigence et la valeur constatée.</li>\n<li>S'arrêter à une cause apparente (« l'opérateur s'est trompé ») sans chercher pourquoi l'erreur a été possible.</li>\n<li>Oublier de vérifier l'efficacité de l'action corrective avant de clôturer la fiche.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> livrer un produit non conforme sans dérogation écrite du client est une faute grave, même si l'écart semble faible. La décision sur un produit non conforme n'appartient pas à l'opérateur mais au responsable qualité, et parfois au client.</div>"
      },
      {
       "titre": "Exemple commenté : anodisation hors épaisseur",
       "contenu": "\n<p><strong>Document décrit.</strong> Rapport de contrôle n° RC-2611 du lot A-5523 : 400 profilés en alliage d'aluminium 6060, anodisation naturelle (incolore). Exigence du bon de commande : classe 20, soit 20 µm minimum en moyenne et 16 µm minimum en valeur locale, mesure par courants de Foucault ; 10 profilés contrôlés, 5 mesures par profilé. Appareil : jauge à courants de Foucault, étalonnage valide, vérification sur cale de 20 µm le jour du contrôle : 20,3 µm.</p>\n<table>\n<thead><tr><th>Profilé</th><th>Moyenne (µm)</th><th>Valeur minimale (µm)</th><th>Position sur le montage</th></tr></thead>\n<tbody>\n<tr><td>1 à 4</td><td>22,1 à 23,4</td><td>19,8</td><td>Haut du montage</td></tr>\n<tr><td>5 à 7</td><td>20,5 à 21,2</td><td>17,6</td><td>Milieu du montage</td></tr>\n<tr><td>8</td><td>18,9</td><td>15,2</td><td>Bas du montage</td></tr>\n<tr><td>9</td><td>19,4</td><td>15,8</td><td>Bas du montage</td></tr>\n<tr><td>10</td><td>20,1</td><td>16,4</td><td>Bas du montage</td></tr>\n</tbody>\n</table>\n<p>Fiche de suivi de la cuve d'anodisation : température relevée 23 °C (consigne 19 à 21 °C) ; observation « groupe froid en alarme depuis 10 h ». Le lot a été anodisé entre 10 h 30 et 12 h.</p>\n<p><strong>Analyse modèle.</strong></p>\n<ol>\n<li><em>Validité.</em> Méthode adaptée (courants de Foucault pour une couche isolante sur aluminium), appareil étalonné et vérifié, échantillonnage conforme : les résultats sont exploitables.</li>\n<li><em>Conformité.</em> Les profilés 8 et 9 ont une moyenne inférieure à 20 µm (18,9 et 19,4 µm) et une valeur locale inférieure à 16 µm (15,2 et 15,8 µm). Le profilé 10 a une moyenne de 20,1 µm, conforme de justesse, et une valeur minimale de 16,4 µm, conforme. Conclusion : <strong>lot non conforme</strong>.</li>\n<li><em>Description de l'écart.</em> « Exigence : classe 20, 20 µm minimum en moyenne et 16 µm minimum en local. Constat : 2 profilés sur 10 sous ces deux valeurs, tous situés en bas du montage. »</li>\n<li><em>Quantité concernée.</em> Tout le lot A-5523, anodisé pendant l'alarme du groupe froid, est bloqué ; les profilés du bas des montages sont les plus touchés.</li>\n<li><em>Analyse des causes.</em> Pourquoi des épaisseurs faibles ? Le bain était trop chaud (23 °C), ce qui augmente la redissolution de la couche et réduit l'épaisseur obtenue à temps égal. Pourquoi trop chaud ? Le groupe froid était en alarme. Pourquoi la production a-t-elle continué ? Aucune consigne n'imposait l'arrêt en cas d'alarme du refroidissement. La position basse ajoute un effet de répartition (distance aux cathodes, circulation du bain). Cause racine retenue : absence de règle d'arrêt liée à la température du bain.</li>\n<li><em>Correction.</em> Tri des profilés par mesure à 100 % ; reprise possible par dérochage de la couche et nouvelle anodisation si la spécification et le client l'autorisent, sinon demande de dérogation pour les profilés conformes en local mais justes en moyenne, ou rebut.</li>\n<li><em>Actions correctives.</em> Réparer le groupe froid ; ajouter à la procédure de conduite un arrêt obligatoire de l'anodisation au-delà de 21 °C, avec verrouillage automatique du redresseur sur la mesure de température ; vérifier la répartition en bas de montage (agitation, position des cathodes).</li>\n<li><em>Vérification de l'efficacité.</em> Suivi des épaisseurs des lots suivants sur une carte de contrôle pendant un mois, en distinguant les positions haute, milieu et basse ; clôture de la FNC si aucune valeur n'approche les limites.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fiches de non-conformité sont analysées périodiquement en réunion qualité. Les causes qui reviennent souvent (préparation, équipement, consignes manquantes) orientent les investissements et les formations ; une FNC bien rédigée par un opérateur est donc utile bien au-delà de son lot.</div>"
      }
     ],
     "points_cles": [
      "Le rapport de contrôle identifie le lot, l'exigence, la méthode, l'échantillonnage, les résultats et la conclusion.",
      "On vérifie la validité de la mesure avant d'exploiter les résultats.",
      "La conclusion respecte la règle de décision : moyenne et valeurs locales selon l'exigence.",
      "Une non-conformité se décrit par l'exigence et le constat chiffré.",
      "La traçabilité permet de délimiter les produits concernés.",
      "Correction sur le produit, action corrective sur la cause racine, action préventive sur une cause potentielle.",
      "Les cinq pourquoi et le diagramme 5M aident à trouver la cause racine.",
      "Une FNC n'est clôturée qu'après vérification de l'efficacité des actions."
     ],
     "lexique": [
      {
       "terme": "Rapport de contrôle",
       "def": "Document qui présente les résultats de contrôle d'un lot et conclut sur sa conformité."
      },
      {
       "terme": "Certificat de conformité",
       "def": "Document qui atteste qu'un lot livré respecte les exigences de la commande."
      },
      {
       "terme": "Non-conformité",
       "def": "Non-satisfaction d'une exigence spécifiée."
      },
      {
       "terme": "Correction",
       "def": "Action immédiate sur le produit non conforme : tri, reprise, rebut."
      },
      {
       "terme": "Action corrective",
       "def": "Action destinée à éliminer la cause d'une non-conformité pour éviter qu'elle se reproduise."
      },
      {
       "terme": "Action préventive",
       "def": "Action destinée à éliminer la cause d'une non-conformité potentielle."
      },
      {
       "terme": "Cause racine",
       "def": "Cause première d'un problème, dont la suppression empêche son retour."
      },
      {
       "terme": "Cinq pourquoi",
       "def": "Méthode qui consiste à demander « pourquoi » successivement pour remonter à la cause racine."
      }
     ]
    }
   ]
  }
 ]
};
