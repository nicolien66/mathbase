/* Polymates — Bac pro Géomètre (ex-Technicien géomètre-topographe) — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-geometre"] = {
 "id": "bp-geometre",
 "nom": "Géomètre",
 "icone": "🎓",
 "couleur": "#7ab4c8",
 "intro": "Le bac pro Géomètre forme des techniciens qui réalisent, au bureau comme sur le terrain, des levés topographiques, des géoréférencements, des implantations et des récolements, préparent les missions foncières du géomètre-expert et détectent les réseaux enterrés. Ils travaillent en cabinet de géomètre-expert, en bureau d'études, en entreprise de travaux publics, chez un prestataire de détection ou dans une collectivité. Ce cours couvre les savoirs de première et de terminale en prolongeant le cours de seconde de la famille : un bloc « Cours théorique » (préparation et sécurité, mesures et calculs, lever et implantation, foncier, réseaux) puis un bloc « Analyse de documents » consacré à la lecture méthodique des documents du métier.",
 "parties": [
  {
   "titre": "Partie 1 — Préparer et sécuriser une intervention",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bgeo-mission",
     "titre": "Préparer et organiser une intervention",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Identifier les acteurs d'une mission topographique ou foncière et le rôle de chacun",
      "Décrire les étapes d'une mission, de la commande à la livraison du dossier",
      "Rassembler les données préalables indispensables avant d'aller sur le terrain",
      "Choisir le matériel et la méthode adaptés à la précision demandée",
      "Intégrer les exigences de développement durable dans l'organisation d'une intervention"
     ],
     "sections": [
      {
       "titre": "Les acteurs d'une mission",
       "contenu": "<p>Le technicien géomètre travaille presque toujours pour le compte d'un <strong>donneur d'ordre</strong>, c'est-à-dire la personne ou l'organisme qui commande la prestation et la paie. Selon les cas, il s'agit d'un particulier qui veut diviser son terrain, d'une commune qui prépare des travaux de voirie, d'un promoteur, d'un architecte, d'une entreprise de travaux publics ou d'un exploitant de réseaux.</p>\n<p>Les structures qui emploient le titulaire du bac pro sont variées :</p>\n<table><thead><tr><th>Structure</th><th>Activités principales</th><th>Particularité</th></tr></thead><tbody>\n<tr><td><strong>Cabinet de géomètre-expert</strong></td><td>Bornage, division, copropriété, plans topographiques, implantation</td><td>Le <strong>géomètre-expert</strong> est inscrit à l'Ordre des géomètres-experts ; il est seul habilité à fixer les limites de propriété</td></tr>\n<tr><td><strong>Bureau d'études topographiques</strong></td><td>Levés, plans, modélisation, scanner laser, drone</td><td>Ne réalise pas de mission foncière réservée</td></tr>\n<tr><td><strong>Entreprise de travaux publics ou de bâtiment</strong></td><td>Implantation, contrôle, récolement, cubatures</td><td>Le géomètre est intégré au chantier, souvent sous l'autorité du conducteur de travaux</td></tr>\n<tr><td><strong>Prestataire de détection de réseaux</strong></td><td>Investigations complémentaires, marquage-piquetage, géoréférencement de réseaux</td><td>Activité encadrée par une certification réglementaire</td></tr>\n<tr><td><strong>Collectivité territoriale, service de l'État</strong></td><td>Système d'information géographique, contrôle des travaux, cadastre</td><td>Le géomètre est agent public</td></tr>\n</tbody></table>\n<p>Au sein d'une équipe, le technicien travaille sous la responsabilité d'un <strong>chef de projet</strong> ou d'un ingénieur. Sur le terrain, il forme souvent un binôme avec un <strong>opérateur</strong> (ou porte-prisme) ; avec les stations robotisées et les récepteurs satellitaires, il travaille de plus en plus seul, ce qui renforce l'importance de la préparation et de la sécurité.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un cabinet de géomètre-expert, le technicien prépare et réalise les mesures, calcule et dessine, mais c'est le géomètre-expert qui signe les documents fonciers. Le technicien engage donc la responsabilité de son employeur : une erreur de mesure peut déplacer une limite de propriété.</div>"
      },
      {
       "titre": "Les étapes d'une mission",
       "contenu": "<p>Quel que soit le type de prestation, une mission suit un enchaînement logique. Le connaître permet de savoir à tout moment ce qui a été fait, ce qui reste à faire, et qui doit valider.</p>\n<ol>\n<li><strong>La commande.</strong> Le client exprime son besoin. Le cabinet rédige une <strong>proposition</strong> (devis) qui précise l'objet de la mission, le périmètre, les livrables, le délai et le prix. Une fois acceptée, elle devient l'engagement contractuel.</li>\n<li><strong>L'analyse du besoin.</strong> Le technicien traduit la demande en exigences techniques : quelle zone, quelle précision, quel système de coordonnées, quels objets à lever, quel format de rendu.</li>\n<li><strong>La collecte des données préalables.</strong> Plans existants, cadastre, repères connus, réseaux, contraintes d'accès (voir la section suivante).</li>\n<li><strong>La préparation de l'intervention.</strong> Choix des méthodes et du matériel, planning, autorisations, sécurité.</li>\n<li><strong>L'intervention sur le terrain.</strong> Mesures, croquis, photos, contrôles sur place.</li>\n<li><strong>Le traitement des données.</strong> Calculs, compensation, dessin, modélisation.</li>\n<li><strong>Le contrôle et la livraison.</strong> Vérification interne, mise en forme des livrables, envoi au client, archivage.</li>\n</ol>\n<p>Chaque étape produit une trace : un fichier, un compte rendu, un courriel, un procès-verbal. Cette <strong>traçabilité</strong> permet de reprendre un dossier des années plus tard, ce qui arrive souvent en foncier, où les plans servent de preuve.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une mission bien préparée se reconnaît à ce que le technicien sait, avant de partir, ce qu'il doit mesurer, avec quelle précision, dans quel système de coordonnées, et sous quelle forme il rendra le résultat.</div>"
      },
      {
       "titre": "Rassembler les données préalables",
       "contenu": "<p>Avant toute sortie, le technicien constitue un <strong>dossier de préparation</strong>. Les sources les plus courantes sont présentées ci-dessous.</p>\n<table><thead><tr><th>Donnée</th><th>Où la trouver</th><th>À quoi elle sert</th></tr></thead><tbody>\n<tr><td>Plan cadastral et références des parcelles</td><td>Service public du cadastre en ligne, données publiques de l'administration fiscale</td><td>Situer le terrain, connaître les parcelles et leurs numéros</td></tr>\n<tr><td>Fiches de <strong>repères géodésiques</strong> et de <strong>nivellement</strong></td><td>Site de l'IGN (géodésie)</td><td>Rattacher les mesures au système national de coordonnées et d'altitudes</td></tr>\n<tr><td>Orthophotographies, cartes</td><td>Géoportail et services de l'IGN</td><td>Repérer les accès, la végétation, l'ampleur du lever</td></tr>\n<tr><td>Anciens plans et procès-verbaux de bornage</td><td>Archives du cabinet, Ordre des géomètres-experts, client</td><td>Retrouver les limites déjà fixées et les points connus</td></tr>\n<tr><td>Plans des réseaux</td><td>Réponses des exploitants aux déclarations préalables aux travaux</td><td>Repérer les réseaux, préparer une détection, travailler en sécurité</td></tr>\n<tr><td>Cahier des charges du client</td><td>Commande</td><td>Connaître les objets à lever, la précision et le format attendus</td></tr>\n</tbody></table>\n<p>Le <strong>cahier des charges</strong> d'un lever précise en général la <strong>classe de précision</strong> attendue, le <strong>système de coordonnées</strong> (par exemple RGF93 en projection Lambert-93 ou en conique conforme régionale) et le <strong>système d'altitudes</strong> (NGF-IGN69 en France continentale), l'échelle de restitution, la liste des objets à représenter (la <strong>nomenclature</strong>), le format des fichiers (DWG, DXF, fichiers de points, maquette numérique) et les délais.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un lever livré dans un système de coordonnées différent de celui du projet est inutilisable sans transformation, et une transformation mal faite décale tout le plan. Le système doit être vérifié dès la commande, pas au moment du dessin.</div>"
      },
      {
       "titre": "Choisir la méthode et le matériel",
       "contenu": "<p>Le choix découle de trois questions : <strong>quelle précision</strong>, <strong>quelle étendue</strong>, <strong>quel environnement</strong> (ciel dégagé ou masqué, circulation, intérieur de bâtiment).</p>\n<table><thead><tr><th>Matériel</th><th>Précision usuelle</th><th>Conditions favorables</th><th>Limites</th></tr></thead><tbody>\n<tr><td><strong>Station totale</strong> (mécanique ou robotisée)</td><td>Millimétrique à centimétrique</td><td>Zones bâties, implantations précises, intérieurs</td><td>Nécessite des visées dégagées et une mise en station</td></tr>\n<tr><td><strong>Récepteur GNSS</strong> en temps réel</td><td>Centimétrique en planimétrie, un peu moins bonne en altitude</td><td>Grandes surfaces ouvertes, rattachement</td><td>Inutilisable sous couvert végétal dense, en pied d'immeuble, en intérieur</td></tr>\n<tr><td><strong>Niveau numérique</strong> et mire code-barres</td><td>Millimétrique</td><td>Altitudes précises, contrôle de dalles, réseaux gravitaires</td><td>Ne donne que des altitudes</td></tr>\n<tr><td><strong>Scanner laser 3D</strong></td><td>Millimétrique à centimétrique, très dense</td><td>Façades, ouvrages complexes, intérieurs</td><td>Volume de données important, traitement long</td></tr>\n<tr><td><strong>Drone</strong> avec appareil photo ou capteur laser</td><td>Centimétrique selon l'altitude de vol et les points de calage</td><td>Grandes zones, carrières, terrassements</td><td>Réglementation aérienne, météo, zones interdites</td></tr>\n<tr><td><strong>Détecteur électromagnétique</strong>, géoradar</td><td>Décimétrique</td><td>Localisation de réseaux enterrés</td><td>Dépend du matériau du réseau et du sol</td></tr>\n</tbody></table>\n<p>Avant le départ, le matériel est vérifié : batteries chargées, cartes mémoire vides et sauvegardées, abonnement au réseau de correction GNSS actif, constante de prisme connue, trépieds et embases en bon état. Les instruments font aussi l'objet d'un <strong>étalonnage</strong> périodique en atelier et de <strong>contrôles</strong> réguliers par l'utilisateur (sur une base connue, par exemple).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir le matériel pour un lever de terrain de 2 ha en lisière de bois, précision demandée de 5 cm, rendu en Lambert-93 et NGF-IGN69.<br>1) Étendue importante et terrain en grande partie dégagé : le GNSS en temps réel est rapide et donne directement des coordonnées Lambert-93.<br>2) La lisière boisée masque le ciel : prévoir une station totale pour cette partie.<br>3) Rattachement : mesurer au GNSS deux ou trois points d'appui bien dégagés, qui serviront de stations ou de références d'orientation pour la station totale.<br>4) Contrôle : mesurer au moins un point avec les deux techniques et comparer ; l'écart doit rester inférieur à la tolérance.<br>5) Liste de matériel : récepteur GNSS et canne, station totale, trépieds, prisme et canne, clous ou piquets pour matérialiser les points d'appui, carnet électronique, EPI.</div>"
      },
      {
       "titre": "Planifier et obtenir les autorisations",
       "contenu": "<p>Une intervention se planifie en tenant compte de la durée estimée des mesures, du temps de trajet, de la météo et des disponibilités du client ou des riverains. Le technicien prévoit aussi le temps de bureau : en ordre de grandeur, le traitement et le dessin d'un lever prennent souvent autant de temps, voire davantage, que les mesures elles-mêmes.</p>\n<p>Plusieurs démarches peuvent être nécessaires avant d'aller sur le terrain :</p>\n<ul>\n<li><strong>Accès aux propriétés privées</strong> : prévenir le propriétaire ou l'occupant et obtenir son accord. Pour les opérations de bornage, les propriétaires voisins sont convoqués selon une procédure précise.</li>\n<li><strong>Intervention sur la voie publique</strong> : selon l'ampleur, une <strong>permission de voirie</strong> ou un <strong>arrêté de circulation</strong> délivré par le gestionnaire de la voie (mairie, département, État) peut être exigé, notamment pour neutraliser une voie.</li>\n<li><strong>Vol de drone</strong> : respect de la réglementation de l'aviation civile (catégorie d'opération, formation du télépilote, zones restreintes).</li>\n<li><strong>Travaux à proximité des réseaux</strong> : consultation du guichet unique et déclarations réglementaires lorsque l'intervention comporte des travaux (piquets enfoncés, sondages).</li>\n<li><strong>Sites particuliers</strong> : voies ferrées, aéroports, sites industriels et chantiers imposent un accueil sécurité et parfois une habilitation.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> enfoncer un piquet ou une borne est déjà un travail dans le sol. À proximité d'un réseau enterré, un simple piquet peut percer une canalisation de gaz ou toucher un câble électrique.</div>"
      },
      {
       "titre": "Intégrer le développement durable",
       "contenu": "<p>Le référentiel demande de prendre en compte le <strong>développement durable</strong> dans la préparation d'une intervention. Concrètement, cela touche plusieurs postes.</p>\n<ul>\n<li><strong>Les déplacements</strong> : regrouper les interventions d'un même secteur, organiser des tournées, partager les véhicules, choisir un véhicule adapté à la charge. Le transport est souvent le premier poste d'émissions d'un cabinet.</li>\n<li><strong>Les consommables</strong> : bombes de peinture de marquage, piquets, clous, bornes plastiques. On marque ce qui est nécessaire, on privilégie les produits à faible impact lorsque cela est compatible avec la durabilité exigée, et on récupère les emballages.</li>\n<li><strong>L'énergie et le matériel</strong> : batteries rechargeables, entretien qui prolonge la durée de vie des instruments, recyclage des équipements électroniques par une filière agréée.</li>\n<li><strong>Le numérique</strong> : un nuage de points de scanner peut peser des dizaines de gigaoctets. Ne conserver que les données utiles, les compresser et organiser l'archivage limite le stockage.</li>\n<li><strong>Les milieux naturels</strong> : respecter les cultures, les haies et les clôtures, refermer les barrières, éviter de circuler en véhicule hors des chemins, respecter les périodes de nidification lors de vols de drone en zone naturelle.</li>\n</ul>\n<p>Le géomètre contribue aussi au développement durable par son métier : ses plans servent à concevoir des aménagements économes en terrain, à suivre l'érosion du littoral, à quantifier des volumes de terres pour limiter les transports, ou à localiser les réseaux pour éviter les accidents et les fuites.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un chantier de terrassement, un lever par drone avant et après les travaux permet de calculer les volumes de déblais et de remblais. En équilibrant ces volumes sur place, l'entreprise évite des centaines d'allers-retours de camions.</div>"
      },
      {
       "titre": "Rendre compte et transmettre",
       "contenu": "<p>Une intervention se termine par un <strong>compte rendu</strong>, même bref : ce qui a été fait, les difficultés rencontrées (zone inaccessible, repère détruit, réseau non détecté), les écarts constatés et les suites à donner. Il est adressé au chef de projet et versé au dossier.</p>\n<p>Les fichiers sont nommés et rangés selon les règles du cabinet : dossier par affaire, sous-dossiers pour les données brutes, les calculs, les plans et les échanges. Les <strong>données brutes</strong> (fichiers de l'instrument) ne sont jamais modifiées : on travaille sur des copies. En cas de contestation, elles prouvent ce qui a été réellement mesuré.</p>\n<p>La communication avec le client et les tiers fait partie du métier : expliquer à un riverain pourquoi on mesure chez lui, rendre compte à un conducteur de travaux d'un écart d'implantation, rédiger un courriel clair. La politesse, la précision des termes et la neutralité sont de rigueur, surtout en foncier où les relations de voisinage peuvent être tendues.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> données brutes conservées intactes, fichiers nommés selon une règle, compte rendu écrit : ce sont les trois garanties de la traçabilité d'une mission.</div>"
      }
     ],
     "points_cles": [
      "Le donneur d'ordre commande et paie la prestation ; la proposition acceptée fixe l'objet, les livrables, le délai et le prix.",
      "Seul le géomètre-expert inscrit à l'Ordre peut fixer les limites de propriété.",
      "Une mission suit les étapes : commande, analyse, collecte, préparation, terrain, traitement, contrôle et livraison.",
      "Le cahier des charges fixe la précision, le système de coordonnées et d'altitudes, la nomenclature et le format de rendu.",
      "Le matériel se choisit selon la précision, l'étendue et l'environnement ; un contrôle croisé entre deux techniques sécurise le résultat.",
      "Accès aux propriétés, voie publique, drone et réseaux enterrés imposent des démarches avant l'intervention.",
      "Le développement durable touche les déplacements, les consommables, le matériel, le numérique et le respect des milieux.",
      "Les données brutes ne sont jamais modifiées ; elles garantissent la traçabilité de la mission."
     ],
     "lexique": [
      {
       "terme": "Donneur d'ordre",
       "def": "Personne ou organisme qui commande la prestation et la rémunère."
      },
      {
       "terme": "Géomètre-expert",
       "def": "Professionnel inscrit à l'Ordre des géomètres-experts, seul habilité à réaliser les travaux fixant les limites des biens fonciers."
      },
      {
       "terme": "Cahier des charges",
       "def": "Document qui décrit précisément ce que le client attend : zone, précision, objets, système de référence, format, délai."
      },
      {
       "terme": "Classe de précision",
       "def": "Niveau d'exactitude exigé pour un lever ou une implantation, exprimé par un écart maximal toléré."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste des objets à lever et à représenter, avec leur codification."
      },
      {
       "terme": "Étalonnage",
       "def": "Vérification d'un instrument en laboratoire par comparaison avec une référence, attestée par un certificat."
      },
      {
       "terme": "Permission de voirie",
       "def": "Autorisation délivrée par le gestionnaire d'une voie publique pour occuper ou intervenir sur celle-ci."
      },
      {
       "terme": "Données brutes",
       "def": "Fichiers enregistrés par l'instrument, non retouchés, qui prouvent ce qui a été mesuré."
      },
      {
       "terme": "Traçabilité",
       "def": "Possibilité de retrouver à tout moment qui a fait quoi, quand et comment dans une mission."
      }
     ]
    },
    {
     "id": "bgeo-securite",
     "titre": "Sécuriser une intervention sur le terrain",
     "niveau": "1re",
     "duree": 25,
     "objectifs": [
      "Identifier les dangers propres aux interventions topographiques",
      "Évaluer un risque et choisir les mesures de prévention adaptées",
      "Organiser le balisage d'une intervention de courte durée sur la voie publique",
      "Utiliser les instruments laser et les équipements en sécurité",
      "Adopter les bons comportements en cas de travail isolé ou d'incident"
     ],
     "sections": [
      {
       "titre": "Danger, risque, prévention",
       "contenu": "<p>Le cours de seconde a présenté les règles générales de santé et de sécurité. Ce chapitre les applique aux situations propres au géomètre, qui intervient à la fois sur la voie publique, sur des chantiers en activité, dans des propriétés privées et en milieu naturel.</p>\n<p>Un <strong>danger</strong> est ce qui peut causer un dommage (un véhicule en mouvement, une tranchée, un câble sous tension). Le <strong>risque</strong> naît de l'exposition d'une personne à ce danger ; on l'évalue en croisant la <strong>gravité</strong> possible du dommage et la <strong>probabilité</strong> qu'il survienne. La <strong>prévention</strong> consiste à supprimer le danger, à défaut à réduire l'exposition, en privilégiant la protection collective sur la protection individuelle.</p>\n<p>Le Code du travail fixe l'ordre de ces mesures à travers les <strong>principes généraux de prévention</strong> : éviter les risques, évaluer ceux qui ne peuvent être évités, combattre les risques à la source, adapter le travail à l'homme, tenir compte de l'évolution de la technique, remplacer ce qui est dangereux par ce qui l'est moins, planifier la prévention, donner la priorité à la protection collective, donner les instructions appropriées aux travailleurs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on cherche d'abord à supprimer le danger, puis à protéger collectivement (balisage, garde-corps, neutralisation de voie), et seulement en dernier recours à protéger individuellement (EPI).</div>"
      },
      {
       "titre": "Les risques propres au métier",
       "contenu": "<table><thead><tr><th>Situation</th><th>Danger</th><th>Mesures de prévention</th></tr></thead><tbody>\n<tr><td>Mesures sur chaussée</td><td>Heurt par un véhicule</td><td>Signalisation temporaire, vêtement haute visibilité, travail face à la circulation, choix d'horaires creux, neutralisation de voie si nécessaire</td></tr>\n<tr><td>Chantier en activité</td><td>Engins en mouvement, angles morts, chute d'objets</td><td>Accueil sécurité, respect du plan de circulation, contact visuel avec le conducteur, casque et chaussures de sécurité</td></tr>\n<tr><td>Bords de fouille, talus, toitures</td><td>Chute de hauteur, éboulement</td><td>Ne pas s'approcher des fouilles non blindées, garde-corps, mesure à distance (sans réflecteur, scanner, drone)</td></tr>\n<tr><td>Regards et chambres de réseaux</td><td>Chute, atmosphère toxique ou appauvrie en oxygène</td><td>Ne jamais descendre dans un ouvrage confiné sans formation et sans détecteur de gaz ; mesurer depuis la surface</td></tr>\n<tr><td>Lignes électriques aériennes</td><td>Électrisation par une canne ou une mire métallique</td><td>Repérer les lignes avant de déplier une canne, respecter les distances de sécurité, préférer des accessoires isolants</td></tr>\n<tr><td>Milieu naturel</td><td>Chute sur terrain accidenté, piqûres, tiques, chaleur, froid, chiens</td><td>Chaussures adaptées, vêtements couvrants, eau, protection solaire, vérification des tiques après l'intervention</td></tr>\n<tr><td>Port de charges</td><td>Troubles musculosquelettiques</td><td>Sacs et housses à bretelles, chariots, répartition des charges dans l'équipe</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une canne de prisme ou une mire déployée mesure plusieurs mètres. Sous une ligne électrique, l'arc électrique peut se produire sans contact direct. Le réflexe est de lever les yeux avant de déplier.</div>"
      },
      {
       "titre": "Intervenir sur la voie publique",
       "contenu": "<p>Une grande partie des levés et des détections de réseaux se fait sur des voies ouvertes à la circulation. La règle est simple : l'équipe doit être <strong>visible</strong>, <strong>annoncée</strong> et <strong>protégée</strong>.</p>\n<ul>\n<li><strong>Visible</strong> : vêtement de signalisation à haute visibilité de classe adaptée (la classe la plus élevée est recommandée sur les routes à circulation rapide), véhicule équipé d'un gyrophare et de bandes rétroréfléchissantes.</li>\n<li><strong>Annoncée</strong> : signalisation temporaire en amont de la zone, conforme à l'instruction interministérielle sur la signalisation routière (panneaux de danger « travaux », cônes, éventuellement feux). Le schéma de balisage dépend du type de route, de la vitesse et de la durée de l'intervention.</li>\n<li><strong>Protégée</strong> : véhicule placé en protection en amont, zone de travail délimitée par des cônes, personne dédiée à la surveillance de la circulation lorsque l'opérateur a les yeux sur l'instrument.</li>\n</ul>\n<p>Pour une intervention plus longue ou sur une route à fort trafic, le gestionnaire de voirie prend un <strong>arrêté de circulation</strong> (restriction, alternat, neutralisation de voie). Dans certaines entreprises, des <strong>guides de signalisation temporaire</strong> donnent des schémas types que l'équipe applique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une intervention de deux heures sur une rue urbaine limitée à 50 km/h.<br>1) Repérer la zone sur une orthophotographie : largeur de chaussée, trottoirs, carrefours, arrêts de bus.<br>2) Choisir un créneau de faible trafic (hors heures de pointe et sorties d'école).<br>3) Prévoir le balisage : panneau « travaux » en amont dans chaque sens, cônes autour du trépied, véhicule stationné en protection.<br>4) Équiper l'équipe : vêtements haute visibilité, chaussures de sécurité.<br>5) Stationner le trépied de préférence sur le trottoir et viser la chaussée ; ne se placer sur la chaussée que le temps strictement nécessaire.<br>6) Si la largeur restante est insuffisante pour la circulation, demander un arrêté au gestionnaire de voirie avant l'intervention.</div>"
      },
      {
       "titre": "Instruments laser et matériel électronique",
       "contenu": "<p>Les stations totales mesurent les distances grâce à un faisceau laser, visible ou invisible ; les scanners 3D et les niveaux laser de chantier aussi. Les appareils sont rangés en <strong>classes laser</strong> selon la norme internationale de sécurité des appareils à laser : plus la classe est élevée, plus le faisceau est dangereux pour l'œil. Les modes de mesure sans réflecteur des stations totales utilisent souvent un faisceau de classe 3R, qui impose des précautions.</p>\n<ul>\n<li>Ne jamais regarder dans le faisceau ni le diriger vers les yeux d'une personne, d'un conducteur ou vers un aéronef.</li>\n<li>Ne pas viser une surface réfléchissante (vitrage, carrosserie) à hauteur des yeux sans précaution.</li>\n<li>Lire la notice de l'instrument : la classe laser est indiquée sur une étiquette.</li>\n</ul>\n<p>Le matériel électronique demande aussi des précautions : batteries au lithium à ne pas exposer à la chaleur ni à des chocs, transport dans les mallettes d'origine, trépied correctement fixé pour éviter la chute de l'instrument (dommage matériel, mais aussi blessure).</p>\n<p>Les <strong>drones</strong> présentent des risques de chute et de collision. Leur utilisation professionnelle est réservée à des télépilotes formés, dans le respect de la réglementation européenne et nationale (catégories d'opération, scénarios, zones interdites ou réglementées consultables sur la carte officielle).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un trépied mal serré ou posé sur un sol mou peut basculer. Une station totale coûte plusieurs dizaines de milliers d'euros et pèse plusieurs kilogrammes : la chute est à la fois coûteuse et dangereuse.</div>"
      },
      {
       "titre": "Travail isolé, coactivité et situations d'urgence",
       "contenu": "<p>Avec les instruments robotisés et le GNSS, le technicien travaille souvent seul. Le <strong>travail isolé</strong> impose des règles : informer l'employeur du lieu et de la durée de l'intervention, disposer d'un téléphone chargé, parfois d'un dispositif d'alarme pour travailleur isolé, et s'interdire les tâches dangereuses (descente en regard, travail en bord de fouille).</p>\n<p>Sur un chantier, le géomètre est en <strong>coactivité</strong> avec d'autres entreprises. Il suit l'accueil sécurité, respecte le <strong>plan général de coordination</strong> ou le <strong>plan de prévention</strong> selon le contexte, et se signale au chef de chantier en arrivant.</p>\n<p>En cas d'accident, la conduite à tenir est : <strong>protéger</strong> (supprimer le danger ou baliser), <strong>alerter</strong> (numéro d'urgence européen 112, SAMU 15, pompiers 18), <strong>secourir</strong> dans la limite de sa formation. En cas d'endommagement d'un réseau de gaz : s'éloigner, faire évacuer, interdire toute flamme ou étincelle, appeler les secours et l'exploitant (numéro d'urgence figurant sur les récépissés).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de nombreux cabinets exigent que les interventions sur route à circulation rapide se fassent toujours en binôme, même avec du matériel robotisé, une personne surveillant en permanence la circulation.</div>"
      },
      {
       "titre": "Préparer la prévention avant de partir",
       "contenu": "<p>L'employeur évalue les risques de chaque poste de travail et les consigne dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP). Pour le technicien, cela se traduit par des consignes et des équipements adaptés à chaque type d'intervention. Mais chaque site est particulier : avant une intervention, le technicien complète cette évaluation générale par une analyse rapide de la situation réelle.</p>\n<ul>\n<li>Quels dangers sur ce site ? (circulation, engins, fouilles, lignes, réseaux, animaux, météo annoncée)</li>\n<li>Qui est présent ? (autres entreprises, public, riverains)</li>\n<li>Quelles autorisations et quels documents ? (arrêté, plan de prévention, récépissés de déclaration de travaux)</li>\n<li>Quels équipements emporter ? (balisage, EPI, trousse de secours, téléphone chargé)</li>\n<li>Qui prévenir en cas de problème ? (chef de chantier, exploitant de réseau, secours)</li>\n</ul>\n<p>Cette analyse prend quelques minutes, mais elle évite la plupart des situations dangereuses. Sur place, si la situation réelle diffère de ce qui était prévu (fouille ouverte non signalée, trafic plus dense), le technicien adapte son mode opératoire ou reporte l'intervention et en rend compte : c'est son <strong>droit de retrait</strong> en cas de danger grave et imminent, prévu par le Code du travail.</p>"
      }
     ],
     "points_cles": [
      "Le risque croise la gravité d'un dommage et sa probabilité ; la prévention vise d'abord à supprimer le danger.",
      "Les principes généraux de prévention donnent la priorité à la protection collective sur les EPI.",
      "Sur la voie publique, l'équipe doit être visible, annoncée par une signalisation temporaire, et protégée.",
      "Une intervention longue ou gênante sur la voie nécessite un arrêté de circulation du gestionnaire de voirie.",
      "Repérer les lignes électriques avant de déplier une canne ou une mire.",
      "Ne jamais descendre dans un regard ou une chambre sans formation ni détection de gaz.",
      "Les instruments laser sont classés ; on ne dirige jamais le faisceau vers les yeux.",
      "Le travailleur isolé informe son employeur et s'interdit les tâches dangereuses.",
      "En cas d'accident : protéger, alerter, secourir."
     ],
     "lexique": [
      {
       "terme": "Danger",
       "def": "Propriété ou situation capable de causer un dommage."
      },
      {
       "terme": "Risque",
       "def": "Possibilité qu'un dommage survienne quand une personne est exposée à un danger ; il combine gravité et probabilité."
      },
      {
       "terme": "Protection collective",
       "def": "Mesure qui protège toutes les personnes exposées : balisage, garde-corps, neutralisation de voie."
      },
      {
       "terme": "EPI",
       "def": "Équipement de protection individuelle : casque, chaussures, gilet haute visibilité, gants, lunettes."
      },
      {
       "terme": "Signalisation temporaire",
       "def": "Panneaux, cônes et feux posés pour la durée d'une intervention afin d'avertir les usagers de la route."
      },
      {
       "terme": "Arrêté de circulation",
       "def": "Décision du gestionnaire de voirie qui restreint ou modifie la circulation pour permettre une intervention."
      },
      {
       "terme": "Classe laser",
       "def": "Catégorie de dangerosité d'un appareil laser pour l'œil et la peau, indiquée sur l'appareil."
      },
      {
       "terme": "Travail isolé",
       "def": "Travail réalisé hors de vue et de portée de voix d'autres personnes."
      },
      {
       "terme": "Coactivité",
       "def": "Présence simultanée de plusieurs entreprises sur un même lieu de travail."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Mesurer et calculer",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bgeo-erreurs",
     "titre": "Fautes, erreurs et tolérances",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Distinguer faute, erreur systématique et erreur accidentelle",
      "Différencier justesse, fidélité et exactitude d'une mesure",
      "Calculer une moyenne, des résidus et un écart-type à partir de mesures répétées",
      "Comparer un écart à une tolérance pour valider ou rejeter une mesure",
      "Organiser des contrôles qui détectent les fautes"
     ],
     "sections": [
      {
       "titre": "Aucune mesure n'est exacte",
       "contenu": "<p>Mesurer deux fois la même distance donne rarement deux fois le même résultat. Ce n'est pas un défaut de l'opérateur : toute mesure est entachée d'imperfections, dues à l'instrument, à l'opérateur et au milieu (température, pression, vent, vibrations, réfraction de l'air). Le travail du géomètre n'est pas d'obtenir une valeur « parfaite », qui n'existe pas, mais de connaître la <strong>qualité</strong> de ses résultats et de garantir qu'elle respecte la demande du client.</p>\n<p>On distingue trois catégories d'écarts entre la valeur mesurée et la valeur vraie.</p>\n<table><thead><tr><th>Catégorie</th><th>Définition</th><th>Exemples</th><th>Traitement</th></tr></thead><tbody>\n<tr><td><strong>Faute</strong></td><td>Erreur grossière due à une inattention ou un mauvais usage</td><td>Lecture de 1,725 au lieu de 1,275 ; mauvais numéro de point ; hauteur de prisme non saisie ; visée sur le mauvais prisme</td><td>Doit être détectée par des contrôles et éliminée (mesure refaite)</td></tr>\n<tr><td><strong>Erreur systématique</strong></td><td>Erreur qui se reproduit toujours dans le même sens et avec la même valeur dans les mêmes conditions</td><td>Constante de prisme erronée, ruban trop court, défaut de collimation de l'instrument, température non prise en compte</td><td>Supprimée par étalonnage, par une correction de calcul ou par une méthode de mesure qui l'annule</td></tr>\n<tr><td><strong>Erreur accidentelle</strong> (ou aléatoire)</td><td>Petite erreur de valeur et de signe imprévisibles</td><td>Imprécision de pointé, centrage imparfait, légère vibration de l'air</td><td>Ne peut être supprimée ; on la réduit en répétant les mesures et on l'évalue par des statistiques</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la faute s'élimine, l'erreur systématique se corrige, l'erreur accidentelle s'estime et se réduit.</div>"
      },
      {
       "titre": "Justesse, fidélité, exactitude",
       "contenu": "<p>Trois qualités décrivent un instrument ou une série de mesures.</p>\n<ul>\n<li>La <strong>fidélité</strong> (ou répétabilité) : les mesures répétées sont proches les unes des autres. Elle dépend des erreurs accidentelles.</li>\n<li>La <strong>justesse</strong> : la moyenne des mesures est proche de la valeur vraie. Elle dépend des erreurs systématiques.</li>\n<li>L'<strong>exactitude</strong> : chaque mesure est proche de la valeur vraie ; elle suppose à la fois la fidélité et la justesse.</li>\n</ul>\n<p>L'image classique est celle d'une cible : des impacts serrés mais décalés du centre traduisent un instrument fidèle mais pas juste (une erreur systématique à corriger) ; des impacts dispersés autour du centre traduisent un instrument juste mais peu fidèle.</p>\n<p>Les constructeurs indiquent la précision de leurs instruments sous forme d'<strong>écart-type</strong>, souvent selon des normes internationales d'essai des instruments géodésiques. Par exemple, une station totale peut être annoncée à 1 mgon pour les angles et à « 1 mm + 1,5 ppm » pour les distances : il faut comprendre 1 mm plus 1,5 mm par kilomètre mesuré. Sur 300 m, cela donne 1 + 1,5 × 0,3, soit environ 1,5 mm.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la précision annoncée par le constructeur est obtenue dans de bonnes conditions, avec un instrument bien réglé et un opérateur soigneux. Sur le terrain, le centrage, la hauteur de prisme et l'atmosphère dégradent souvent ce résultat.</div>"
      },
      {
       "titre": "Moyenne, résidus, écart-type",
       "contenu": "<p>Lorsqu'une grandeur est mesurée <em>n</em> fois, on retient la <strong>moyenne arithmétique</strong>, qui est la meilleure estimation de la valeur vraie quand seules subsistent des erreurs accidentelles.</p>\n<p>Le <strong>résidu</strong> d'une mesure est l'écart entre cette mesure et la moyenne : v<sub>i</sub> = m<sub>i</sub> - moyenne. La somme des résidus est nulle (aux arrondis près), ce qui constitue un contrôle de calcul.</p>\n<p>L'<strong>écart-type empirique</strong> mesure la dispersion des mesures :</p>\n<p><strong>σ = racine carrée de [ Σ v<sub>i</sub><sup>2</sup> ÷ (n - 1) ]</strong></p>\n<p>On divise par n - 1, et non par n, parce que la moyenne a été calculée à partir des mêmes mesures. L'écart-type de la moyenne est plus petit que celui d'une mesure isolée : il vaut σ ÷ √n. Répéter quatre fois une mesure divise donc l'écart-type par deux.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une distance a été mesurée cinq fois : 52,314 m ; 52,318 m ; 52,311 m ; 52,316 m ; 52,321 m.<br>1) Moyenne : (52,314 + 52,318 + 52,311 + 52,316 + 52,321) ÷ 5 = 261,580 ÷ 5 = 52,316 m.<br>2) Résidus en millimètres : -2 ; +2 ; -5 ; 0 ; +5. Contrôle : la somme vaut 0.<br>3) Carrés : 4 ; 4 ; 25 ; 0 ; 25. Somme : 58.<br>4) Écart-type d'une mesure : √(58 ÷ 4) = √14,5 ≈ 3,8 mm.<br>5) Écart-type de la moyenne : 3,8 ÷ √5 ≈ 1,7 mm.<br>6) Résultat : D = 52,316 m avec un écart-type d'environ 2 mm.</div>"
      },
      {
       "titre": "Propagation des erreurs",
       "contenu": "<p>Un résultat topographique est rarement mesuré directement : il est calculé à partir de plusieurs mesures. Les erreurs de chacune se combinent. Pour des mesures indépendantes, la règle de base est la suivante.</p>\n<ul>\n<li>Pour une <strong>somme ou une différence</strong> de mesures, les carrés des écarts-types s'additionnent : σ<sub>total</sub> = √(σ<sub>1</sub><sup>2</sup> + σ<sub>2</sub><sup>2</sup> + …).</li>\n<li>Pour une grandeur mesurée <em>k</em> fois et additionnée (par exemple <em>k</em> portées identiques d'un cheminement), σ<sub>total</sub> = σ × √k.</li>\n</ul>\n<p>Exemple : en nivellement, chaque dénivelée de portée a un écart-type de 1 mm. Un cheminement de 9 portées a donc un écart-type de 1 × √9 = 3 mm, et non de 9 mm. Les erreurs accidentelles se compensent en partie ; c'est pourquoi l'erreur d'un cheminement croît comme la racine carrée de sa longueur.</p>\n<p>Les erreurs systématiques, elles, ne se compensent pas : elles s'additionnent. Une constante de prisme fausse de 30 mm donne 30 mm d'erreur sur chaque distance. D'où l'importance de les éliminer avant toute statistique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les erreurs accidentelles s'additionnent « en racine carrée », les erreurs systématiques s'additionnent directement.</div>"
      },
      {
       "titre": "Tolérance et classes de précision",
       "contenu": "<p>La <strong>tolérance</strong> est l'écart maximal admis entre deux déterminations d'une même grandeur, ou entre une valeur mesurée et une valeur de référence. Si l'écart constaté est inférieur à la tolérance, le résultat est accepté ; sinon, on recherche une faute et on refait la mesure.</p>\n<p>La tolérance est fixée par le cahier des charges ou par un texte de référence. Elle est le plus souvent liée à l'écart-type attendu par un coefficient compris entre 2 et 3 : un écart plus grand a très peu de chances d'être dû au hasard et signale probablement une faute.</p>\n<p>En France, un arrêté de 2003 définit des <strong>classes de précision</strong> applicables aux travaux topographiques réalisés pour l'État et les collectivités : un lever est dit, par exemple, de classe 5 cm ou de classe 10 cm. La classe s'exprime en centimètres et caractérise l'écart-type attendu sur les positions ; le texte précise aussi comment la contrôler sur un échantillon de points. Les cahiers des charges des clients s'y réfèrent fréquemment, de même que la réglementation sur les réseaux enterrés, qui définit ses propres classes de précision.</p>\n<table><thead><tr><th>Grandeur contrôlée</th><th>Exemple de contrôle</th></tr></thead><tbody>\n<tr><td>Distance</td><td>Mesure aller et retour ; écart comparé à la tolérance</td></tr>\n<tr><td>Angle horizontal</td><td>Mesure en deux positions de la lunette (cercle gauche et cercle droit)</td></tr>\n<tr><td>Cheminement polygonal ou de nivellement</td><td>Fermeture sur un point connu ou sur le point de départ</td></tr>\n<tr><td>Lever</td><td>Points de contrôle mesurés par une méthode indépendante</td></tr>\n<tr><td>Implantation</td><td>Mesure des distances entre points implantés et comparaison au projet</td></tr>\n</tbody></table>"
      },
      {
       "titre": "Organiser les contrôles",
       "contenu": "<p>Un bon géomètre ne fait pas confiance à une mesure unique. Il organise son travail pour que toute faute soit détectée, si possible <strong>sur le terrain</strong>, quand on peut encore la corriger facilement. On parle de <strong>surabondance</strong> : on mesure plus que le strict nécessaire pour disposer d'un contrôle.</p>\n<ul>\n<li>Fermer les cheminements sur des points connus.</li>\n<li>Viser une référence supplémentaire à chaque mise en station.</li>\n<li>Remesurer un ou deux points déjà levés depuis une autre station.</li>\n<li>Vérifier régulièrement la hauteur de prisme et la constante de prisme.</li>\n<li>Contrôler la vraisemblance des résultats : une distance de 52 m entre deux bornes qui en font 25 sur le plan cadastral doit alerter.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la faute la plus fréquente en lever est la hauteur de prisme : l'opérateur rallonge la canne pour passer au-dessus d'un obstacle et oublie de modifier la valeur dans le carnet électronique. Tous les points suivants sont faux en altitude. Un point de contrôle connu remesuré en fin de station suffit à la détecter.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une mesure contrôlée par une seconde mesure faite exactement de la même façon ne détecte pas les erreurs systématiques. Le contrôle doit, autant que possible, être <em>indépendant</em> : autre station, autre méthode, autre instrument.</div>"
      }
     ],
     "points_cles": [
      "Toute mesure comporte des erreurs dues à l'instrument, à l'opérateur et au milieu.",
      "La faute s'élimine par contrôle, l'erreur systématique se corrige, l'erreur accidentelle s'estime.",
      "Fidélité : mesures groupées ; justesse : moyenne proche du vrai ; exactitude : les deux.",
      "Écart-type empirique : racine de la somme des carrés des résidus divisée par n - 1.",
      "L'écart-type de la moyenne de n mesures vaut σ divisé par racine de n.",
      "Les erreurs accidentelles se propagent en racine carrée, les erreurs systématiques s'additionnent.",
      "La tolérance est l'écart maximal admis ; au-delà, on cherche une faute.",
      "Un contrôle efficace est surabondant et indépendant de la mesure contrôlée."
     ],
     "lexique": [
      {
       "terme": "Faute",
       "def": "Erreur grossière due à une inattention, à éliminer par des contrôles."
      },
      {
       "terme": "Erreur systématique",
       "def": "Erreur de valeur et de signe constants dans des conditions données, que l'on corrige."
      },
      {
       "terme": "Erreur accidentelle",
       "def": "Petite erreur aléatoire, de valeur et de signe imprévisibles."
      },
      {
       "terme": "Résidu",
       "def": "Écart entre une mesure et la moyenne de la série."
      },
      {
       "terme": "Écart-type",
       "def": "Indicateur de dispersion d'une série de mesures, exprimé dans l'unité de la mesure."
      },
      {
       "terme": "Fidélité",
       "def": "Aptitude d'un instrument à donner des résultats proches lors de mesures répétées."
      },
      {
       "terme": "Justesse",
       "def": "Aptitude à donner une moyenne proche de la valeur vraie."
      },
      {
       "terme": "Tolérance",
       "def": "Écart maximal admis entre deux déterminations d'une grandeur ou entre une mesure et une référence."
      },
      {
       "terme": "Surabondance",
       "def": "Fait de mesurer plus d'éléments que le strict nécessaire, pour pouvoir contrôler."
      },
      {
       "terme": "ppm",
       "def": "Partie par million ; 1 ppm correspond à 1 mm par kilomètre."
      }
     ]
    },
    {
     "id": "bgeo-station-totale",
     "titre": "Mesurer les angles et les distances à la station totale",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire les axes et les cercles d'une station totale",
      "Distinguer angle horizontal, angle zénithal et lecture de cercle",
      "Éliminer les erreurs instrumentales par la mesure en double retournement",
      "Connaître le principe et les corrections de la mesure électronique des distances",
      "Réduire une distance inclinée à l'horizontale"
     ],
     "sections": [
      {
       "titre": "L'instrument et ses axes",
       "contenu": "<p>La <strong>station totale</strong> associe un <strong>théodolite</strong> électronique, qui mesure les angles, et un <strong>distancemètre</strong>, qui mesure les distances. Sa géométrie repose sur trois axes :</p>\n<ul>\n<li>l'<strong>axe principal</strong>, vertical une fois l'instrument calé, autour duquel tourne l'alidade (la partie supérieure) ;</li>\n<li>l'<strong>axe secondaire</strong> (ou axe des tourillons), horizontal, autour duquel bascule la lunette ;</li>\n<li>l'<strong>axe de visée</strong> (ou axe optique), défini par le centre du réticule et l'objectif.</li>\n</ul>\n<p>Dans un instrument parfait, ces trois axes sont concourants, l'axe secondaire est perpendiculaire à l'axe principal et l'axe de visée est perpendiculaire à l'axe secondaire. Deux <strong>cercles</strong> gradués électroniques mesurent les rotations : le <strong>cercle horizontal</strong> (rotation de l'alidade) et le <strong>cercle vertical</strong> (rotation de la lunette).</p>\n<p>La <strong>mise en station</strong>, présentée en seconde, place l'axe principal à la verticale exacte du point de station. Les stations actuelles disposent d'un plomb laser pour le centrage et d'un <strong>compensateur</strong> bi-axe qui mesure les petits défauts de verticalité restants et corrige automatiquement les lectures, dans une plage limitée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> station bien centrée et bien calée, compensateur actif, constante de prisme et hauteur de prisme vérifiées : ce sont les conditions de base de toute mesure fiable.</div>"
      },
      {
       "titre": "Lectures horizontales et angles horizontaux",
       "contenu": "<p>Quand on vise un point, l'instrument affiche une <strong>lecture horizontale</strong> notée Hz, en gon, croissante dans le sens des aiguilles d'une montre. Cette lecture n'a pas de sens physique à elle seule : son zéro dépend de la position de l'instrument sur le trépied. Ce qui compte est la <strong>différence</strong> entre deux lectures, qui donne l'<strong>angle horizontal</strong> entre deux directions.</p>\n<p>Angle horizontal de la direction A vers la direction B, vu depuis la station S : <strong>angle = Hz<sub>B</sub> - Hz<sub>A</sub></strong>, auquel on ajoute 400 gon si le résultat est négatif.</p>\n<p>Pour plusieurs directions, on réalise un <strong>tour d'horizon</strong> : on vise successivement toutes les directions en tournant dans le sens horaire, puis on revient sur la première pour vérifier que l'instrument n'a pas bougé (la <strong>fermeture</strong> du tour doit être de quelques dixièmes de milligon). Pour plus de précision, on répète le tour plusieurs fois en décalant le zéro du cercle : c'est la <strong>réitération</strong>.</p>\n<table><thead><tr><th>Direction visée</th><th>Lecture Hz (gon)</th><th>Angle depuis A (gon)</th></tr></thead><tbody>\n<tr><td>A</td><td>12,4520</td><td>0,0000</td></tr>\n<tr><td>B</td><td>87,1035</td><td>74,6515</td></tr>\n<tr><td>C</td><td>310,2210</td><td>297,7690</td></tr>\n<tr><td>A (fermeture)</td><td>12,4524</td><td>écart de fermeture 0,4 mgon</td></tr>\n</tbody></table>"
      },
      {
       "titre": "L'angle vertical zénithal",
       "contenu": "<p>Le cercle vertical donne l'<strong>angle zénithal</strong>, noté V ou Z : c'est l'angle entre la verticale montante (le <strong>zénith</strong>) et la direction visée. Il vaut 0 gon pour une visée vers le zénith, 100 gon pour une visée horizontale, et plus de 100 gon pour une visée plongeante.</p>\n<table><thead><tr><th>Visée</th><th>Angle zénithal V</th></tr></thead><tbody>\n<tr><td>Vers le haut (montante)</td><td>inférieur à 100 gon</td></tr>\n<tr><td>Horizontale</td><td>100 gon</td></tr>\n<tr><td>Vers le bas (plongeante)</td><td>supérieur à 100 gon</td></tr>\n</tbody></table>\n<p>L'angle zénithal sert à réduire les distances à l'horizontale et à calculer les dénivelées (voir le cours sur le nivellement indirect). On rencontre parfois l'<strong>angle de site</strong> i, mesuré depuis l'horizontale : i = 100 - V.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la plupart des instruments peuvent afficher l'angle vertical en zénithal, en site ou en pourcentage de pente selon le paramétrage. Une valeur de 2,5 peut être un angle de site en gon ou une pente en pour cent : il faut toujours vérifier le mode d'affichage.</div>"
      },
      {
       "titre": "Erreurs instrumentales et double retournement",
       "contenu": "<p>Même bien réglée, une station totale présente de petits défauts de géométrie :</p>\n<ul>\n<li>l'<strong>erreur de collimation horizontale</strong> : l'axe de visée n'est pas exactement perpendiculaire à l'axe secondaire ;</li>\n<li>l'<strong>erreur de tourillonnement</strong> : l'axe secondaire n'est pas exactement perpendiculaire à l'axe principal ;</li>\n<li>l'<strong>erreur d'index vertical</strong> : le zéro du cercle vertical n'est pas exactement au zénith.</li>\n</ul>\n<p>Ces erreurs sont systématiques. On les élimine par le <strong>double retournement</strong> : on mesure chaque direction une première fois en <strong>cercle gauche</strong> (CG, cercle vertical à gauche de l'observateur), puis on fait pivoter l'alidade de 200 gon et basculer la lunette, et on mesure à nouveau en <strong>cercle droit</strong> (CD). Les erreurs changent de signe d'une position à l'autre et disparaissent dans la moyenne.</p>\n<ul>\n<li>En horizontal : Hz<sub>CD</sub> ≈ Hz<sub>CG</sub> ± 200 gon ; on retient la moyenne de Hz<sub>CG</sub> et de (Hz<sub>CD</sub> ∓ 200).</li>\n<li>En vertical : V<sub>CG</sub> + V<sub>CD</sub> ≈ 400 gon ; l'écart à 400 vaut le double de l'erreur d'index. Angle corrigé : V = (V<sub>CG</sub> - V<sub>CD</sub> + 400) ÷ 2.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une mesure en double retournement.<br>Données : Hz<sub>CG</sub> = 52,3418 gon ; Hz<sub>CD</sub> = 252,3424 gon ; V<sub>CG</sub> = 98,4512 gon ; V<sub>CD</sub> = 301,5506 gon ; distance inclinée Di = 84,562 m.<br>1) Horizontal : Hz<sub>CD</sub> - 200 = 52,3424. Moyenne : (52,3418 + 52,3424) ÷ 2 = 52,3421 gon. L'écart de 0,6 mgon traduit le double de la collimation.<br>2) Vertical : V<sub>CG</sub> + V<sub>CD</sub> = 400,0018 gon, soit une erreur d'index de +0,9 mgon. V = (98,4512 - 301,5506 + 400) ÷ 2 = 98,4503 gon.<br>3) Distance horizontale : Dh = Di × sin V = 84,562 × sin(98,4503 gon) ≈ 84,562 × 0,99970 ≈ 84,537 m.<br>4) Contrôle de vraisemblance : V proche de 100 gon, la visée est presque horizontale ; Dh doit être à peine plus courte que Di, ce qui est le cas.</div>"
      },
      {
       "titre": "La mesure électronique des distances",
       "contenu": "<p>Le distancemètre émet une onde lumineuse (infrarouge ou laser) qui se réfléchit sur la cible et revient. La distance se déduit soit du <strong>déphasage</strong> entre l'onde émise et l'onde reçue, soit du <strong>temps de vol</strong> d'impulsions. Deux modes existent :</p>\n<ul>\n<li><strong>avec réflecteur</strong> : un <strong>prisme</strong> renvoie l'onde exactement vers l'instrument ; portée de plusieurs kilomètres, précision millimétrique ;</li>\n<li><strong>sans réflecteur</strong> : l'onde est renvoyée par la surface visée (mur, chaussée) ; portée de quelques centaines de mètres selon la surface, précision un peu moindre ; utile pour les points inaccessibles.</li>\n</ul>\n<p>Plusieurs corrections sont nécessaires :</p>\n<table><thead><tr><th>Correction</th><th>Origine</th><th>Ordre de grandeur</th></tr></thead><tbody>\n<tr><td><strong>Constante de prisme</strong></td><td>Le centre optique du prisme ne coïncide pas avec l'axe de la canne</td><td>De 0 à quelques centimètres, selon le prisme et la convention du constructeur</td></tr>\n<tr><td><strong>Correction atmosphérique</strong></td><td>La vitesse de la lumière dans l'air dépend de la température et de la pression</td><td>Environ 1 ppm par degré Celsius et 0,3 ppm par hectopascal</td></tr>\n<tr><td>Réduction à l'horizontale</td><td>La distance mesurée est inclinée</td><td>Dh = Di × sin V</td></tr>\n<tr><td>Réductions à l'ellipsoïde et à la projection</td><td>Altitude du chantier et projection utilisée</td><td>Voir le cours sur les systèmes de référence</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> utiliser un prisme d'une marque avec la constante d'une autre marque introduit une erreur systématique de plusieurs centimètres sur toutes les distances. Les instruments mémorisent plusieurs types de prismes : il faut choisir le bon dans la liste à chaque changement.</div>"
      },
      {
       "titre": "Pointer et mesurer avec soin",
       "contenu": "<p>La qualité des mesures dépend aussi de gestes simples :</p>\n<ul>\n<li>viser le centre du prisme, et pour les angles, le plus bas possible sur la canne ou sur un jalon, pour limiter l'effet d'une canne mal verticale ;</li>\n<li>vérifier la nivelle sphérique de la canne avant chaque mesure ;</li>\n<li>éviter les visées rasantes au-dessus d'une chaussée chaude, où la réfraction fait « danser » l'image ;</li>\n<li>attendre la stabilisation de l'instrument après un changement de température (sortie du véhicule climatisé, par exemple) ;</li>\n<li>sur les stations motorisées, s'assurer que le suivi automatique du prisme ne s'est pas accroché sur un autre prisme ou un panneau réfléchissant.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour une implantation de précision ou un réseau de points d'appui, on mesure systématiquement en double retournement. Pour un lever de détails courant, on mesure en un seul cercle, après avoir contrôlé l'instrument (collimation et index) en début de journée et mémorisé les corrections.</div>"
      }
     ],
     "points_cles": [
      "La station totale comporte trois axes : principal, secondaire et de visée.",
      "Un angle horizontal est la différence de deux lectures Hz, ramenée entre 0 et 400 gon.",
      "L'angle zénithal vaut 100 gon pour une visée horizontale ; l'angle de site vaut 100 - V.",
      "Collimation, tourillonnement et index sont des erreurs systématiques éliminées par le double retournement.",
      "En double retournement, V corrigé = (VCG - VCD + 400) ÷ 2.",
      "Le distancemètre mesure par déphasage ou par temps de vol, avec ou sans réflecteur.",
      "Constante de prisme et correction atmosphérique doivent être correctement paramétrées.",
      "Distance horizontale : Dh = Di × sin V."
     ],
     "lexique": [
      {
       "terme": "Station totale",
       "def": "Instrument qui mesure électroniquement les angles horizontaux, les angles verticaux et les distances."
      },
      {
       "terme": "Alidade",
       "def": "Partie tournante supérieure de l'instrument, qui porte la lunette."
      },
      {
       "terme": "Compensateur",
       "def": "Dispositif qui mesure le défaut de verticalité de l'axe principal et corrige les lectures."
      },
      {
       "terme": "Lecture horizontale (Hz)",
       "def": "Valeur affichée par le cercle horizontal pour une direction visée."
      },
      {
       "terme": "Angle zénithal",
       "def": "Angle entre la verticale montante et la direction visée."
      },
      {
       "terme": "Tour d'horizon",
       "def": "Série de visées sur plusieurs directions, refermée sur la première."
      },
      {
       "terme": "Double retournement",
       "def": "Mesure d'une direction en cercle gauche puis en cercle droit pour éliminer les erreurs instrumentales."
      },
      {
       "terme": "Erreur d'index",
       "def": "Décalage du zéro du cercle vertical par rapport au zénith."
      },
      {
       "terme": "Constante de prisme",
       "def": "Correction de distance propre à un prisme, liée à la position de son centre optique."
      },
      {
       "terme": "Distance inclinée",
       "def": "Distance mesurée suivant la ligne de visée, entre l'instrument et la cible."
      }
     ]
    },
    {
     "id": "bgeo-calculs",
     "titre": "Gisements et calculs de coordonnées",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Définir le gisement d'une direction et ses propriétés",
      "Calculer distance et gisement à partir de deux points connus en coordonnées",
      "Calculer les coordonnées d'un point à partir d'une distance et d'un gisement",
      "Orienter une station par le calcul du V0",
      "Situer les méthodes de station libre, d'intersection et de relèvement"
     ],
     "sections": [
      {
       "titre": "Le gisement",
       "contenu": "<p>Les calculs topographiques s'effectuent dans un repère plan dont l'axe E (ou X) est dirigé vers l'est et l'axe N (ou Y) vers le nord du quadrillage de la projection. Dans ce repère, une direction est définie par son <strong>gisement</strong> : l'angle mesuré dans le sens des aiguilles d'une montre, depuis la direction du nord du quadrillage jusqu'à la direction considérée. Il est compris entre 0 et 400 gon et noté G<sub>AB</sub> pour la direction de A vers B.</p>\n<table><thead><tr><th>Gisement</th><th>Direction</th><th>Signe de ΔE</th><th>Signe de ΔN</th></tr></thead><tbody>\n<tr><td>0 gon</td><td>Nord</td><td>0</td><td>+</td></tr>\n<tr><td>entre 0 et 100 gon</td><td>Nord-est</td><td>+</td><td>+</td></tr>\n<tr><td>100 gon</td><td>Est</td><td>+</td><td>0</td></tr>\n<tr><td>entre 100 et 200 gon</td><td>Sud-est</td><td>+</td><td>-</td></tr>\n<tr><td>200 gon</td><td>Sud</td><td>0</td><td>-</td></tr>\n<tr><td>entre 200 et 300 gon</td><td>Sud-ouest</td><td>-</td><td>-</td></tr>\n<tr><td>300 gon</td><td>Ouest</td><td>-</td><td>0</td></tr>\n<tr><td>entre 300 et 400 gon</td><td>Nord-ouest</td><td>-</td><td>+</td></tr>\n</tbody></table>\n<p>Propriété essentielle : le gisement de la direction inverse diffère de 200 gon. <strong>G<sub>BA</sub> = G<sub>AB</sub> ± 200 gon</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en mathématiques, les angles se comptent depuis l'axe des abscisses dans le sens inverse des aiguilles d'une montre. En topographie, on part du nord et on tourne dans le sens horaire. C'est pourquoi les formules utilisent le sinus pour E et le cosinus pour N, à l'inverse des habitudes du cours de mathématiques.</div>"
      },
      {
       "titre": "Du gisement et de la distance aux coordonnées",
       "contenu": "<p>Connaissant un point A, la distance horizontale D (réduite si besoin à la projection) et le gisement G<sub>AB</sub>, on calcule les coordonnées de B :</p>\n<p><strong>ΔE = D × sin G<sub>AB</sub></strong> et <strong>ΔN = D × cos G<sub>AB</sub></strong></p>\n<p><strong>E<sub>B</sub> = E<sub>A</sub> + ΔE</strong> et <strong>N<sub>B</sub> = N<sub>A</sub> + ΔN</strong></p>\n<p>C'est le calcul de base du <strong>rayonnement</strong> : depuis une station connue et orientée, chaque point levé est déterminé par une distance et un gisement. Le carnet électronique de l'instrument le fait automatiquement, mais il faut savoir le refaire pour contrôler ou pour exploiter un listing.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> E avec le sinus, N avec le cosinus. La calculatrice doit être réglée en grades (mode GRAD).</div>"
      },
      {
       "titre": "Des coordonnées au gisement et à la distance",
       "contenu": "<p>Le calcul inverse est tout aussi fréquent : connaissant A et B, retrouver la distance et le gisement de A vers B.</p>\n<p><strong>D = √(ΔE<sup>2</sup> + ΔN<sup>2</sup>)</strong></p>\n<p>Pour le gisement, on calcule d'abord l'angle aigu α = arctan(|ΔE| ÷ |ΔN|), puis on le place dans le bon quadrant d'après les signes :</p>\n<table><thead><tr><th>ΔE</th><th>ΔN</th><th>Gisement</th></tr></thead><tbody>\n<tr><td>+</td><td>+</td><td>G = α</td></tr>\n<tr><td>+</td><td>-</td><td>G = 200 - α</td></tr>\n<tr><td>-</td><td>-</td><td>G = 200 + α</td></tr>\n<tr><td>-</td><td>+</td><td>G = 400 - α</td></tr>\n</tbody></table>\n<p>Une formule unique évite l'étude des quadrants : G = 2 × arctan[ΔE ÷ (D + ΔN)], à laquelle on ajoute 400 gon si le résultat est négatif.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> A (1 000,000 ; 5 000,000) et B (1 052,300 ; 4 968,400).<br>1) ΔE = 1 052,300 - 1 000,000 = +52,300 m ; ΔN = 4 968,400 - 5 000,000 = -31,600 m.<br>2) D = √(52,300<sup>2</sup> + 31,600<sup>2</sup>) = √3 733,85 ≈ 61,105 m.<br>3) α = arctan(52,300 ÷ 31,600) ≈ 65,3993 gon.<br>4) ΔE positif, ΔN négatif : direction sud-est, G<sub>AB</sub> = 200 - 65,3993 = 134,6007 gon.<br>5) Contrôle : G<sub>BA</sub> = 334,6007 gon (nord-ouest), cohérent avec ΔE négatif et ΔN positif vus depuis B.</div>"
      },
      {
       "titre": "Orienter une station : le V0",
       "contenu": "<p>Les lectures Hz de l'instrument ont un zéro quelconque. Pour obtenir des gisements, il faut connaître le décalage entre lectures et gisements : c'est le <strong>gisement du zéro du cercle</strong>, ou <strong>V0</strong> (prononcé « V zéro »). On l'obtient en visant une <strong>référence</strong>, point de coordonnées connues :</p>\n<p><strong>V0 = G<sub>SR</sub> - Hz<sub>R</sub></strong> (ramené entre 0 et 400 gon), où G<sub>SR</sub> est calculé à partir des coordonnées de la station S et de la référence R.</p>\n<p>Ensuite, pour tout point visé P : <strong>G<sub>SP</sub> = V0 + Hz<sub>P</sub></strong> (ramené entre 0 et 400 gon).</p>\n<p>Avec plusieurs références, on calcule un V0 pour chacune ; leurs écarts renseignent sur la qualité des points connus et de la mise en station. On retient la moyenne, éventuellement pondérée par les distances (une référence lointaine donne une orientation plus précise).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> station S (2 541,218 ; 7 385,402), référence R (2 610,774 ; 7 452,115), lecture sur R : Hz<sub>R</sub> = 18,2410 gon. Point levé P : Hz<sub>P</sub> = 143,5872 gon, Dh = 37,846 m.<br>1) ΔE<sub>SR</sub> = +69,556 ; ΔN<sub>SR</sub> = +66,713 ; quadrant nord-est. G<sub>SR</sub> = arctan(69,556 ÷ 66,713) ≈ 51,3280 gon. D<sub>SR</sub> ≈ 96,378 m.<br>2) V0 = 51,3280 - 18,2410 = 33,0870 gon.<br>3) G<sub>SP</sub> = 33,0870 + 143,5872 = 176,6742 gon (sud-est).<br>4) ΔE = 37,846 × sin(176,6742) ≈ +13,559 m ; ΔN = 37,846 × cos(176,6742) ≈ -35,334 m.<br>5) P (2 554,777 ; 7 350,068).<br>6) Contrôle : mesurer aussi la distance S-R et la comparer à la distance calculée (96,378 m) ; un écart de plus de quelques centimètres signale une erreur de point de station ou de référence.</div>"
      },
      {
       "titre": "Station libre, intersection, relèvement",
       "contenu": "<p>Le rayonnement suppose une station connue. D'autres méthodes déterminent un point à partir de points connus :</p>\n<table><thead><tr><th>Méthode</th><th>Principe</th><th>Usage</th></tr></thead><tbody>\n<tr><td><strong>Station libre</strong></td><td>L'instrument est installé en un point quelconque, choisi pour sa bonne visibilité ; on vise au moins deux points connus en mesurant angles et distances ; le logiciel calcule la position et l'orientation de la station</td><td>Méthode la plus courante sur chantier : on se place là où on voit le mieux</td></tr>\n<tr><td><strong>Intersection</strong></td><td>On vise le point inconnu depuis deux (ou plus) stations connues, en mesurant seulement des angles</td><td>Points inaccessibles : sommet de clocher, cheminée, point de l'autre côté d'une rivière</td></tr>\n<tr><td><strong>Relèvement</strong></td><td>Depuis le point inconnu, on vise au moins trois points connus en mesurant seulement des angles</td><td>Méthode historique, utile quand les distances ne sont pas mesurables</td></tr>\n</tbody></table>\n<p>Dans tous les cas, on mesure plus d'éléments que nécessaire (surabondance) : le logiciel calcule une solution par <strong>moindres carrés</strong> et affiche les résidus sur chaque point connu. Des résidus faibles et homogènes valident la station ; un résidu fort sur un point désigne en général un point connu déplacé ou mal identifié, qu'il faut écarter.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un chantier de bâtiment, le géomètre installe en début de travaux une série de <strong>points d'appui</strong> (clous, cibles collées sur les murs voisins) autour de l'emprise. Toutes les implantations se font ensuite en station libre sur ces points, ce qui évite de stationner sur un point au sol que les engins risquent de détruire.</div>"
      },
      {
       "titre": "Bonnes pratiques de calcul",
       "contenu": "<ul>\n<li>Garder suffisamment de décimales : quatre pour les angles en gon (le dixième de milligon), trois pour les coordonnées et distances en mètres (le millimètre).</li>\n<li>Arrondir seulement le résultat final, jamais les étapes intermédiaires.</li>\n<li>Présenter les calculs dans un tableau : point, Hz, Dh, gisement, ΔE, ΔN, E, N.</li>\n<li>Contrôler par un calcul inverse (recalcul de la distance entre deux points connus) ou par un point connu levé comme un point nouveau.</li>\n<li>Vérifier la cohérence avec un croquis : un point situé au sud de la station doit avoir un gisement proche de 200 gon.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la calculatrice en mode degrés donne des résultats faux sans aucun message d'erreur. Un test rapide : sin(100) doit donner 1 en mode grades.</div>"
      }
     ],
     "points_cles": [
      "Le gisement est compté depuis le nord du quadrillage, dans le sens horaire, de 0 à 400 gon.",
      "GBA = GAB ± 200 gon.",
      "ΔE = D × sin G et ΔN = D × cos G.",
      "D = √(ΔE² + ΔN²) ; le quadrant du gisement se déduit des signes de ΔE et ΔN.",
      "V0 = gisement de la référence - lecture sur la référence ; puis G = V0 + Hz.",
      "La station libre calcule la position de l'instrument à partir de points connus visés.",
      "Intersection : visées depuis des points connus ; relèvement : visées vers des points connus.",
      "On garde 4 décimales en gon et 3 en mètres, et on contrôle par un calcul inverse."
     ],
     "lexique": [
      {
       "terme": "Gisement",
       "def": "Angle compté dans le sens horaire depuis le nord du quadrillage jusqu'à une direction, entre 0 et 400 gon."
      },
      {
       "terme": "Rayonnement",
       "def": "Détermination de points par mesure d'un angle et d'une distance depuis une station connue."
      },
      {
       "terme": "V0",
       "def": "Gisement du zéro du cercle horizontal d'une station, qui permet de transformer les lectures en gisements."
      },
      {
       "terme": "Référence",
       "def": "Point de coordonnées connues visé pour orienter une station."
      },
      {
       "terme": "Station libre",
       "def": "Station placée en un point quelconque, calculée à partir de visées sur des points connus."
      },
      {
       "terme": "Intersection",
       "def": "Détermination d'un point inaccessible par des visées angulaires issues de points connus."
      },
      {
       "terme": "Relèvement",
       "def": "Détermination d'une station par des visées angulaires sur au moins trois points connus."
      },
      {
       "terme": "Moindres carrés",
       "def": "Méthode de calcul qui répartit au mieux les écarts quand les mesures sont surabondantes."
      },
      {
       "terme": "Point d'appui",
       "def": "Point matérialisé et coordonné servant de base aux mesures d'un chantier."
      }
     ]
    },
    {
     "id": "bgeo-nivellement",
     "titre": "Nivellement par cheminement et nivellement indirect",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Conduire et calculer un cheminement de nivellement direct",
      "Calculer une fermeture, la comparer à la tolérance et la compenser",
      "Expliquer l'intérêt de l'égalité des portées",
      "Calculer une dénivelée par nivellement indirect à la station totale",
      "Choisir entre nivellement direct, indirect et GNSS selon la précision demandée"
     ],
     "sections": [
      {
       "titre": "Du nivellement simple au cheminement",
       "contenu": "<p>Le cours de seconde a présenté le nivellement direct depuis une seule station : lecture arrière sur un repère, lecture avant sur le point cherché, dénivelée ΔH = LAR - LAV. Dès que le point à niveler est trop éloigné du repère, trop haut ou trop bas pour être lu sur la mire depuis la même station, il faut enchaîner plusieurs stations : c'est le <strong>cheminement de nivellement</strong>.</p>\n<p>Entre deux stations, la mire est posée sur un <strong>point de changement</strong> (ou point de passage), matérialisé par un crapaud de nivellement, une tête de borne ou un clou. Sur ce point, on fait d'abord une lecture avant depuis la station qui précède, puis, après déplacement du niveau, une lecture arrière depuis la station suivante. La mire ne doit pas bouger entre ces deux lectures.</p>\n<p>La dénivelée totale entre le départ et l'arrivée vaut : <strong>ΔH = Σ LAR - Σ LAV</strong>.</p>\n<p>Un cheminement doit toujours être <strong>contrôlé</strong> :</p>\n<ul>\n<li><strong>cheminement fermé</strong> : il revient sur son point de départ ; la somme des dénivelées devrait être nulle ;</li>\n<li><strong>cheminement encadré</strong> : il part d'un repère et arrive sur un autre repère connu ; la somme des dénivelées devrait être égale à la différence de leurs altitudes.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un cheminement « ouvert », qui part d'un repère et s'arrête sur un point inconnu, n'offre aucun contrôle. Une faute de lecture de 10 cm passerait inaperçue.</div>"
      },
      {
       "titre": "Fermeture, tolérance et compensation",
       "contenu": "<p>La <strong>fermeture</strong> f d'un cheminement est l'écart entre la dénivelée mesurée et la dénivelée théorique : f = ΔH<sub>mesurée</sub> - ΔH<sub>théorique</sub>. Pour un cheminement fermé, ΔH<sub>théorique</sub> = 0.</p>\n<p>Cette fermeture est comparée à la <strong>tolérance</strong> fixée par le cahier des charges, qui dépend généralement de la longueur du cheminement ou du nombre de stations (les erreurs accidentelles croissent comme la racine carrée de leur nombre). Si |f| dépasse la tolérance, on recherche une faute et on refait les mesures.</p>\n<p>Si la fermeture est tolérable, on la <strong>compense</strong> : on répartit la correction c = -f sur les dénivelées, proportionnellement au nombre de stations ou aux longueurs des portées, puis on calcule les altitudes compensées.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> cheminement fermé partant du repère R (124,350 m NGF), passant par A et B, revenant sur R. Tolérance fixée par le client : 6 mm.<br><table><thead><tr><th>Station</th><th>Point arrière</th><th>LAR (m)</th><th>Point avant</th><th>LAV (m)</th><th>ΔH (m)</th></tr></thead><tbody><tr><td>S1</td><td>R</td><td>1,425</td><td>A</td><td>0,870</td><td>+0,555</td></tr><tr><td>S2</td><td>A</td><td>1,312</td><td>B</td><td>2,047</td><td>-0,735</td></tr><tr><td>S3</td><td>B</td><td>1,860</td><td>R</td><td>1,684</td><td>+0,176</td></tr></tbody></table>1) Contrôle de calcul : Σ LAR - Σ LAV = 4,597 - 4,601 = -0,004 m, égal à la somme des ΔH.<br>2) Fermeture : f = -0,004 - 0 = -4 mm. |f| inférieur à 6 mm : tolérable.<br>3) Correction totale : +4 mm, répartie sur trois stations : +1 mm, +1 mm, +2 mm.<br>4) Altitudes compensées : A = 124,350 + 0,555 + 0,001 = 124,906 m ; B = 124,906 - 0,735 + 0,001 = 124,172 m ; retour sur R = 124,172 + 0,176 + 0,002 = 124,350 m. Le calcul se referme exactement.</div>"
      },
      {
       "titre": "L'égalité des portées et les points de détail",
       "contenu": "<p>La <strong>portée</strong> est la distance entre le niveau et la mire. Lorsqu'on place le niveau à égale distance de la mire arrière et de la mire avant, deux erreurs systématiques s'annulent :</p>\n<ul>\n<li>l'<strong>erreur de collimation du niveau</strong> : la ligne de visée n'est pas parfaitement horizontale ; l'erreur sur la lecture est proportionnelle à la portée et disparaît dans la différence LAR - LAV si les portées sont égales ;</li>\n<li>l'effet de la <strong>courbure terrestre et de la réfraction</strong>, qui croît avec le carré de la portée.</li>\n</ul>\n<p>En pratique, les portées sont limitées (souvent quelques dizaines de mètres) pour lire la mire avec précision, et on équilibre la somme des portées arrière et avant. Les niveaux numériques mesurent et enregistrent les portées, ce qui facilite ce contrôle.</p>\n<p>Depuis une station du cheminement, on peut aussi lire la mire sur des <strong>points de détail</strong> (seuils, fils d'eau, terrain naturel) : on parle de <strong>rayonnement altimétrique</strong>. Ces lectures, appelées lectures intermédiaires, donnent l'altitude des points à partir de l'altitude du plan de visée, mais elles ne sont pas contrôlées par la fermeture.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> portées arrière et avant égales, mire verticale, points de changement stables : trois règles pour un nivellement direct précis.</div>"
      },
      {
       "titre": "Le nivellement indirect à la station totale",
       "contenu": "<p>Le <strong>nivellement indirect</strong>, ou <strong>nivellement trigonométrique</strong>, calcule la dénivelée à partir d'une distance et d'un angle zénithal mesurés à la station totale. Il permet de déterminer en même temps la position et l'altitude des points levés, et d'atteindre des points éloignés ou inaccessibles.</p>\n<p>La dénivelée entre le point de station S et le point visé P vaut :</p>\n<p><strong>ΔH<sub>SP</sub> = Di × cos V + h<sub>i</sub> - h<sub>p</sub></strong></p>\n<ul>\n<li>Di : distance inclinée ; V : angle zénithal ;</li>\n<li>h<sub>i</sub> : <strong>hauteur de l'instrument</strong>, mesurée du point de station jusqu'à l'axe des tourillons ;</li>\n<li>h<sub>p</sub> : <strong>hauteur du prisme</strong> (ou du voyant), mesurée du point visé jusqu'au centre du prisme.</li>\n</ul>\n<p>On peut aussi écrire Di × cos V = Dh ÷ tan V, quand on part de la distance horizontale.</p>\n<p>Pour des distances longues, il faut ajouter la correction de <strong>sphéricité et réfraction</strong> : + (1 - k) × Dh<sup>2</sup> ÷ (2R), avec R ≈ 6 371 km et k ≈ 0,13 (coefficient de réfraction moyen). Elle vaut environ 0,7 mm à 100 m, mais près de 7 cm à 1 km.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> station S d'altitude 210,415 m ; hauteur d'instrument h<sub>i</sub> = 1,552 m ; visée sur P : Di = 64,218 m, V = 97,6420 gon ; hauteur de prisme h<sub>p</sub> = 1,800 m.<br>1) Di × cos V = 64,218 × cos(97,6420 gon) ≈ 64,218 × 0,03703 ≈ 2,378 m (visée montante, V inférieur à 100 gon).<br>2) ΔH = 2,378 + 1,552 - 1,800 = +2,130 m.<br>3) Sphéricité et réfraction : Dh ≈ 64,174 m, correction ≈ 0,87 × 64,174<sup>2</sup> ÷ 12 742 000 ≈ 0,3 mm, négligeable ici.<br>4) Altitude de P = 210,415 + 2,130 = 212,545 m.</div>"
      },
      {
       "titre": "Précision comparée des méthodes",
       "contenu": "<table><thead><tr><th>Méthode</th><th>Précision usuelle</th><th>Points forts</th><th>Limites</th></tr></thead><tbody>\n<tr><td>Nivellement direct (niveau et mire)</td><td>Millimétrique</td><td>Méthode de référence pour les altitudes</td><td>Lent sur terrain accidenté ; ne donne pas la position</td></tr>\n<tr><td>Nivellement indirect (station totale)</td><td>Millimétrique à centimétrique selon la distance et la mesure des hauteurs</td><td>Position et altitude en même temps ; terrain accidenté</td><td>Sensible aux erreurs de hauteur d'instrument et de prisme</td></tr>\n<tr><td>GNSS en temps réel</td><td>Quelques centimètres en altitude</td><td>Rapide, pas besoin de visibilité entre points</td><td>Dépend de la grille de conversion et des conditions de réception</td></tr>\n</tbody></table>\n<p>Le choix dépend de l'ouvrage. Pour une canalisation d'eaux usées posée à 0,5 % de pente, une erreur de 3 cm sur 6 m fausse complètement l'écoulement : le nivellement direct s'impose. Pour un plan topographique de terrain naturel, le nivellement indirect ou le GNSS suffisent.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en fin de chantier, l'altitude du <strong>fil d'eau</strong> (point bas intérieur) des regards d'assainissement est presque toujours mesurée au niveau, depuis un repère de chantier lui-même rattaché au NGF par cheminement fermé.</div>"
      },
      {
       "titre": "Le niveau et son contrôle",
       "contenu": "<p>Deux types de niveaux sont utilisés :</p>\n<ul>\n<li>le <strong>niveau automatique</strong> (optique) : un compensateur pendulaire rend la ligne de visée horizontale dès que la nivelle sphérique est calée ; l'opérateur lit la mire graduée à l'œil ;</li>\n<li>le <strong>niveau numérique</strong> : il lit électroniquement une mire à code-barres, enregistre lectures et portées, et calcule les dénivelées ; il supprime les fautes de lecture.</li>\n</ul>\n<p>Le principal défaut d'un niveau est l'<strong>erreur de collimation</strong> : la ligne de visée est légèrement inclinée. On la contrôle régulièrement par la méthode des <strong>stations conjuguées</strong> : on mesure la dénivelée entre deux points distants d'une trentaine de mètres, une première fois avec le niveau au milieu (portées égales, résultat juste), une seconde fois avec le niveau près de l'un des points (portées inégales). L'écart entre les deux dénivelées révèle l'erreur, qu'on fait corriger ou que l'instrument numérique mémorise.</p>\n<p>La <strong>mire</strong> doit être tenue verticale, grâce à sa nivelle sphérique ; une mire penchée donne toujours une lecture trop grande. Ses éléments télescopiques doivent être complètement sortis et verrouillés, sinon toutes les lectures sur la partie haute sont fausses.</p>"
      }
     ],
     "points_cles": [
      "Un cheminement enchaîne plusieurs stations par des points de changement stables.",
      "ΔH totale = Σ LAR - Σ LAV, qui sert aussi de contrôle de calcul.",
      "Un cheminement doit être fermé ou encadré ; un cheminement ouvert n'est pas contrôlé.",
      "Fermeture = dénivelée mesurée - dénivelée théorique ; elle est comparée à la tolérance puis compensée.",
      "Portées égales : l'erreur de collimation du niveau et l'effet de courbure s'annulent.",
      "Nivellement indirect : ΔH = Di × cos V + hi - hp.",
      "La correction de sphéricité et réfraction vaut environ 7 cm à 1 km, négligeable sous 100 m.",
      "Le nivellement direct reste la référence pour les altitudes précises."
     ],
     "lexique": [
      {
       "terme": "Cheminement de nivellement",
       "def": "Succession de stations de niveau reliant des points de proche en proche."
      },
      {
       "terme": "Point de changement",
       "def": "Point stable sur lequel la mire reçoit une lecture avant puis une lecture arrière."
      },
      {
       "terme": "Fermeture",
       "def": "Écart entre la dénivelée mesurée d'un cheminement et sa valeur théorique."
      },
      {
       "terme": "Compensation",
       "def": "Répartition de la fermeture sur les mesures pour obtenir des résultats cohérents."
      },
      {
       "terme": "Portée",
       "def": "Distance entre le niveau et la mire."
      },
      {
       "terme": "Lecture intermédiaire",
       "def": "Lecture faite sur un point de détail, non contrôlée par le cheminement."
      },
      {
       "terme": "Hauteur d'instrument",
       "def": "Hauteur entre le point de station et l'axe des tourillons de la station totale."
      },
      {
       "terme": "Hauteur de prisme",
       "def": "Hauteur entre le point visé et le centre du prisme."
      },
      {
       "terme": "Nivellement trigonométrique",
       "def": "Détermination de dénivelées à partir de distances et d'angles zénithaux."
      },
      {
       "terme": "Fil d'eau",
       "def": "Point le plus bas de la section intérieure d'une canalisation ou d'un caniveau."
      }
     ]
    },
    {
     "id": "bgeo-referentiels",
     "titre": "Systèmes de référence et géoréférencement",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Expliquer les notions d'ellipsoïde, de géoïde, de système géodésique et de projection",
      "Situer le RGF93, le Lambert-93, les coniques conformes 9 zones et le NGF-IGN69",
      "Passer d'une distance horizontale mesurée à une distance en projection",
      "Exploiter les repères géodésiques et de nivellement pour rattacher un lever",
      "Géoréférencer un lever réalisé en système local"
     ],
     "sections": [
      {
       "titre": "Pourquoi un système de référence",
       "contenu": "<p>Le cours de seconde a introduit les coordonnées X, Y, Z et le système Lambert-93. Il faut maintenant comprendre d'où viennent ces coordonnées, car le géomètre doit souvent <strong>géoréférencer</strong> ses travaux, c'est-à-dire leur attribuer des coordonnées dans un système officiel commun à tous. Un plan géoréférencé peut être superposé au cadastre, aux réseaux, aux photographies aériennes ou à un autre lever, sans recalage manuel.</p>\n<p>La Terre n'est ni plate ni parfaitement ronde. Pour calculer des positions, on la modélise en plusieurs étapes :</p>\n<ul>\n<li>le <strong>géoïde</strong> est la surface d'égal potentiel de pesanteur qui coïncide au mieux avec le niveau moyen des mers ; c'est la référence « naturelle » des altitudes, mais sa forme est irrégulière ;</li>\n<li>l'<strong>ellipsoïde</strong> est une surface mathématique simple (une sphère aplatie aux pôles) choisie pour approcher le géoïde ; on y calcule des coordonnées géographiques : <strong>latitude</strong>, <strong>longitude</strong> et <strong>hauteur ellipsoïdale</strong> ;</li>\n<li>la <strong>projection</strong> transforme les coordonnées sur l'ellipsoïde en coordonnées planes E (ou X) et N (ou Y), utilisables sur un plan.</li>\n</ul>\n<p>Un <strong>système géodésique</strong> associe un ellipsoïde, une origine et des axes, matérialisés sur le terrain par un réseau de points connus.</p>"
      },
      {
       "titre": "Le système national : RGF93 et ses projections",
       "contenu": "<p>En France métropolitaine, le système géodésique légal est le <strong>RGF93</strong> (réseau géodésique français 1993), associé à l'ellipsoïde <strong>IAG GRS 80</strong>. Il est compatible, à quelques centimètres près, avec les systèmes mondiaux utilisés par le GNSS. Sa réalisation la plus récente, publiée par l'IGN, est nommée <strong>RGF93 v2b</strong> ; les coordonnées des points du réseau ont été légèrement mises à jour par rapport aux versions précédentes.</p>\n<p>Deux familles de projections sont associées au RGF93 :</p>\n<table><thead><tr><th>Projection</th><th>Caractéristiques</th><th>Usage</th></tr></thead><tbody>\n<tr><td><strong>Lambert-93</strong></td><td>Projection conique conforme unique pour toute la métropole ; parallèles automécoïques à 44° N et 49° N ; méridien central à 3° E ; coordonnées de l'origine (46° 30' N, 3° E) : E = 700 000 m, N = 6 600 000 m</td><td>Cartographie, SIG, échanges de données à l'échelle nationale</td></tr>\n<tr><td><strong>Coniques conformes 9 zones</strong> (CC42 à CC50)</td><td>Neuf projections, chacune centrée sur une latitude entière de 42° à 50° N et couvrant une bande d'environ 1,5° ; la zone CC49, par exemple, est centrée sur 49° N</td><td>Travaux topographiques précis : les distances y sont beaucoup moins déformées</td></tr>\n</tbody></table>\n<p>Une projection <strong>conforme</strong> conserve les angles mais pas les distances. L'écart entre une distance sur la projection et la distance correspondante sur l'ellipsoïde s'appelle l'<strong>altération linéaire</strong>, exprimée en centimètres par kilomètre. En Lambert-93, elle varie d'environ -1 m/km au centre du territoire à plus de +2 m/km à ses extrémités nord et sud ; dans une zone CC, elle reste inférieure à une dizaine de centimètres par kilomètre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> Lambert-93 pour l'échange et la cartographie, CC 9 zones pour les travaux précis. Les deux reposent sur le même système, le RGF93 ; on passe de l'un à l'autre par un simple calcul, sans perte de précision.</div>"
      },
      {
       "titre": "Des distances mesurées aux distances en projection",
       "contenu": "<p>L'instrument mesure une distance <strong>inclinée</strong>, que l'on réduit à l'<strong>horizontale</strong> (voir le cours sur la mesure des distances). Mais cette distance horizontale est mesurée à l'altitude du terrain, et non sur l'ellipsoïde. Pour obtenir une distance cohérente avec des coordonnées en projection, deux réductions s'ajoutent :</p>\n<ol>\n<li><strong>Réduction à l'ellipsoïde</strong> : à une altitude h, la distance est plus longue que sur l'ellipsoïde. D<sub>ellipsoïde</sub> ≈ D<sub>h</sub> × R ÷ (R + h), avec R ≈ 6 371 km. L'effet vaut environ -1,6 cm/km par tranche de 100 m d'altitude.</li>\n<li><strong>Passage à la projection</strong> : D<sub>projection</sub> = D<sub>ellipsoïde</sub> × (1 + altération linéaire).</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> distance horizontale mesurée Dh = 500,000 m, à 300 m d'altitude, dans une région où l'altération linéaire vaut -80 cm/km en Lambert-93 et +3 cm/km en CC.<br>1) Réduction à l'ellipsoïde : correction = -500 × 300 ÷ 6 371 000 ≈ -0,024 m. D<sub>ellipsoïde</sub> ≈ 499,976 m.<br>2) En Lambert-93 : correction = -0,80 m/km × 0,5 km = -0,400 m. D<sub>L93</sub> ≈ 499,576 m.<br>3) En CC : correction = +0,03 × 0,5 = +0,015 m. D<sub>CC</sub> ≈ 499,991 m.<br>4) Conclusion : en Lambert-93, l'écart entre la distance mesurée et la distance calculée à partir des coordonnées atteint 42 cm sur 500 m ; il faut obligatoirement en tenir compte. En CC, l'écart n'est que de 9 mm.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un plan d'implantation fourni en Lambert-93 ne peut pas être implanté « à la chaîne » avec des distances mesurées au ruban : les cotes calculées depuis les coordonnées sont déformées. Les logiciels de terrain appliquent ces corrections automatiquement si le système est bien paramétré, d'où la vérification du paramétrage avant toute mesure.</div>"
      },
      {
       "titre": "Les altitudes : NGF-IGN69 et géoïde",
       "contenu": "<p>Le système d'altitudes légal en France continentale est le <strong>NGF-IGN69</strong> ; la Corse utilise le <strong>NGF-IGN78</strong>. Les altitudes y sont matérialisées par des <strong>repères de nivellement</strong> scellés dans des ouvrages durables (rivets, consoles, plaques sur des églises, des ponts, des mairies), dont l'IGN publie les fiches.</p>\n<p>Le GNSS ne mesure pas une altitude mais une <strong>hauteur ellipsoïdale</strong> h. Pour obtenir l'altitude H, on retranche la hauteur du géoïde au-dessus de l'ellipsoïde, appelée <strong>ondulation</strong> N : H = h - N. En France, N vaut environ 45 à 55 m selon les régions. L'IGN fournit une <strong>grille de conversion altimétrique</strong> qui donne cette valeur en tout point, adaptée à la réalisation du RGF93 utilisée ; les logiciels des récepteurs l'intègrent.</p>\n<table><thead><tr><th>Grandeur</th><th>Symbole</th><th>Référence</th><th>Obtenue par</th></tr></thead><tbody>\n<tr><td>Hauteur ellipsoïdale</td><td>h</td><td>Ellipsoïde</td><td>GNSS</td></tr>\n<tr><td>Ondulation du géoïde (ou de la surface de conversion)</td><td>N</td><td>Écart géoïde - ellipsoïde</td><td>Grille de l'IGN</td></tr>\n<tr><td>Altitude</td><td>H</td><td>NGF-IGN69</td><td>Nivellement, ou GNSS + grille</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> confondre hauteur ellipsoïdale et altitude décale tous les points d'une cinquantaine de mètres. L'erreur est grossière mais arrive lorsque la grille n'est pas activée dans le récepteur.</div>"
      },
      {
       "titre": "Les points d'appui sur le terrain",
       "contenu": "<p>Le système national est matérialisé par plusieurs réseaux de points connus, dont l'IGN diffuse gratuitement les <strong>fiches signalétiques</strong> :</p>\n<ul>\n<li>les <strong>points géodésiques</strong> (bornes, clochers, châteaux d'eau, repères au sol), qui portent des coordonnées planimétriques précises ;</li>\n<li>les <strong>repères de nivellement</strong>, qui portent des altitudes précises ;</li>\n<li>les <strong>stations GNSS permanentes</strong> (réseau RGP de l'IGN et réseaux privés), qui enregistrent en continu les signaux satellites et permettent de calculer des corrections.</li>\n</ul>\n<p>Aujourd'hui, la plupart des rattachements en planimétrie se font par <strong>GNSS en temps réel</strong> grâce aux corrections d'un réseau de stations permanentes. Les repères de nivellement restent indispensables pour les altitudes précises : le GNSS donne l'altitude avec une précision de l'ordre de quelques centimètres, insuffisante pour un réseau d'assainissement à faible pente ou une dalle de bâtiment.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de partir, le technicien télécharge les fiches des repères les plus proches et vérifie leur état sur la fiche (date de dernière visite, mention « détruit »). Sur place, il contrôle qu'il est bien sur le repère décrit, puis il le mesure en contrôle : un repère déplacé lors de travaux de façade est un piège classique.</div>"
      },
      {
       "titre": "Géoréférencer un lever local",
       "contenu": "<p>Il arrive qu'un lever soit réalisé dans un <strong>système local</strong> : origine arbitraire (par exemple une station de coordonnées 1000 ; 5000), orientation arbitraire. Pour le géoréférencer, on détermine une <strong>transformation</strong> à partir de points connus dans les deux systèmes, appelés <strong>points communs</strong> ou points d'appui.</p>\n<p>En planimétrie, la transformation la plus utilisée est la <strong>similitude</strong> (ou transformation de Helmert à quatre paramètres) : deux translations, une rotation et un facteur d'échelle. Deux points communs suffisent mathématiquement, mais on en utilise au moins trois, bien répartis autour de la zone, pour disposer d'un contrôle : le logiciel calcule alors les <strong>résidus</strong> sur chaque point commun.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> géoréférencer un lever local.<br>1) Repérer dans le lever au moins trois points durables, répartis aux extrémités de la zone.<br>2) Les mesurer en coordonnées officielles (GNSS en temps réel, ou rattachement sur des points connus).<br>3) Calculer la similitude dans le logiciel et examiner le facteur d'échelle : il doit être proche de 1 (l'écart traduit l'altération linéaire et la réduction à l'ellipsoïde, de l'ordre de quelques centaines de ppm au plus).<br>4) Examiner les résidus : ils doivent être compatibles avec la précision des deux levers. Un résidu anormal sur un point signale une faute (mauvais point, numéro inversé).<br>5) Appliquer la transformation à tout le lever et contrôler sur un point supplémentaire non utilisé dans le calcul.</div>\n<p>Le géoréférencement concerne aussi les images (orthophotos, plans scannés) et, de plus en plus, les <strong>réseaux enterrés</strong>, dont la position doit être connue en coordonnées pour être partagée entre exploitants et entreprises.</p>"
      }
     ],
     "points_cles": [
      "Géoréférencer, c'est donner des coordonnées dans le système officiel commun.",
      "Le géoïde est la référence des altitudes ; l'ellipsoïde porte les coordonnées géographiques ; la projection donne des coordonnées planes.",
      "Le système légal en métropole est le RGF93 (ellipsoïde IAG GRS 80) ; sa réalisation actuelle est le RGF93 v2b.",
      "Lambert-93 : une projection pour toute la métropole ; CC 9 zones : neuf projections à faible altération.",
      "L'altération linéaire en Lambert-93 atteint plusieurs décimètres par kilomètre : on réduit les distances.",
      "Altitude = hauteur ellipsoïdale - ondulation ; la grille de conversion de l'IGN donne l'ondulation.",
      "Le NGF-IGN69 est matérialisé par des repères de nivellement dont l'IGN diffuse les fiches.",
      "Un lever local se géoréférence par une similitude calculée sur au moins trois points communs bien répartis."
     ],
     "lexique": [
      {
       "terme": "Géoïde",
       "def": "Surface de référence des altitudes, proche du niveau moyen des mers, de forme irrégulière."
      },
      {
       "terme": "Ellipsoïde",
       "def": "Surface mathématique approchant la forme de la Terre, sur laquelle on calcule latitudes et longitudes."
      },
      {
       "terme": "Système géodésique",
       "def": "Ensemble ellipsoïde, origine et axes, matérialisé par un réseau de points connus."
      },
      {
       "terme": "Projection conforme",
       "def": "Représentation plane de l'ellipsoïde qui conserve les angles mais déforme les distances."
      },
      {
       "terme": "Altération linéaire",
       "def": "Déformation des distances due à la projection, exprimée en cm/km."
      },
      {
       "terme": "RGF93",
       "def": "Réseau géodésique français 1993, système géodésique légal en métropole."
      },
      {
       "terme": "NGF-IGN69",
       "def": "Système d'altitudes légal de la France continentale."
      },
      {
       "terme": "Hauteur ellipsoïdale",
       "def": "Hauteur d'un point au-dessus de l'ellipsoïde, fournie par le GNSS."
      },
      {
       "terme": "Ondulation",
       "def": "Écart entre le géoïde (ou la surface de conversion) et l'ellipsoïde en un lieu."
      },
      {
       "terme": "Similitude",
       "def": "Transformation plane à deux translations, une rotation et un facteur d'échelle."
      },
      {
       "terme": "Point commun",
       "def": "Point dont on connaît les coordonnées dans deux systèmes et qui sert à calculer la transformation."
      }
     ]
    },
    {
     "id": "bgeo-gnss",
     "titre": "Le positionnement par satellites (GNSS)",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Expliquer le principe du positionnement par satellites",
      "Identifier les sources d'erreur et les indicateurs de qualité",
      "Distinguer les modes autonome, différentiel, RTK, RTK réseau et statique",
      "Mettre en œuvre une mesure GNSS en temps réel avec contrôles",
      "Reconnaître les situations où le GNSS n'est pas adapté"
     ],
     "sections": [
      {
       "titre": "Le principe",
       "contenu": "<p>Le <strong>GNSS</strong> (Global Navigation Satellite System) désigne l'ensemble des systèmes de positionnement par satellites : le <strong>GPS</strong> américain, <strong>GLONASS</strong> russe, <strong>Galileo</strong> européen et <strong>BeiDou</strong> chinois. Les récepteurs topographiques actuels utilisent plusieurs constellations à la fois, ce qui augmente le nombre de satellites visibles.</p>\n<p>Chaque satellite émet en permanence un signal qui contient l'heure d'émission, donnée par des horloges atomiques, et sa position sur orbite. Le récepteur en déduit la distance qui le sépare du satellite à partir du temps de trajet du signal. Connaissant plusieurs distances à des satellites de positions connues, il calcule sa propre position : c'est une <strong>trilatération</strong>. Comme l'horloge du récepteur n'est pas aussi précise que celle des satellites, une inconnue supplémentaire s'ajoute aux trois coordonnées : il faut <strong>au moins quatre satellites</strong> pour calculer une position.</p>\n<p>Les récepteurs topographiques ne se contentent pas du code transporté par le signal : ils mesurent la <strong>phase</strong> de l'onde porteuse, beaucoup plus précise (longueur d'onde de l'ordre de 20 cm). Il faut alors déterminer le nombre entier de longueurs d'onde entre satellite et récepteur : ce sont les <strong>ambiguïtés</strong>. Leur résolution, appelée <strong>initialisation</strong>, donne une solution dite <strong>fixée</strong>, de précision centimétrique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> solution « fixée » (ou « fixe ») = ambiguïtés résolues = précision centimétrique. Solution « flottante » = précision décimétrique à métrique : elle ne doit pas être utilisée pour un lever topographique.</div>"
      },
      {
       "titre": "Les sources d'erreur",
       "contenu": "<table><thead><tr><th>Source</th><th>Explication</th><th>Comment la réduire</th></tr></thead><tbody>\n<tr><td>Ionosphère et troposphère</td><td>Le signal est ralenti en traversant l'atmosphère</td><td>Récepteurs bifréquence ou multifréquence ; mesure différentielle avec une base proche</td></tr>\n<tr><td>Orbites et horloges</td><td>Petites erreurs sur la position et l'heure des satellites</td><td>Mesure différentielle ; éphémérides précises en post-traitement</td></tr>\n<tr><td><strong>Multitrajets</strong></td><td>Le signal arrive après réflexion sur une façade, un véhicule, une surface d'eau</td><td>S'éloigner des surfaces réfléchissantes ; antennes conçues pour les limiter</td></tr>\n<tr><td>Masques</td><td>Arbres, bâtiments, talus cachent une partie du ciel</td><td>Choisir l'emplacement ; utiliser la station totale dans les zones masquées</td></tr>\n<tr><td>Géométrie des satellites</td><td>Des satellites regroupés dans une même partie du ciel donnent une position peu précise</td><td>Surveiller l'indicateur <strong>PDOP</strong> ; attendre une meilleure configuration</td></tr>\n<tr><td>Opérateur</td><td>Canne non verticale, hauteur d'antenne fausse</td><td>Nivelle de canne contrôlée, bipied, hauteur vérifiée</td></tr>\n</tbody></table>\n<p>Le <strong>PDOP</strong> (Position Dilution Of Precision) est un nombre sans unité qui traduit la qualité de la géométrie : plus il est petit, meilleure est la géométrie. Les récepteurs permettent de fixer un seuil au-delà duquel les mesures sont refusées. Ils affichent aussi une estimation de la précision horizontale et verticale de chaque point, à surveiller pendant la mesure.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'estimation de précision affichée par le récepteur peut être optimiste, notamment en présence de multitrajets. Elle ne remplace jamais un contrôle sur un point connu.</div>"
      },
      {
       "titre": "Les modes de positionnement",
       "contenu": "<table><thead><tr><th>Mode</th><th>Principe</th><th>Précision usuelle</th><th>Usage</th></tr></thead><tbody>\n<tr><td><strong>Autonome</strong></td><td>Un seul récepteur, mesure de code</td><td>Quelques mètres</td><td>Navigation, repérage, téléphones</td></tr>\n<tr><td><strong>Différentiel</strong> (code)</td><td>Corrections diffusées par une station de référence ou par satellite</td><td>Métrique à submétrique</td><td>SIG, inventaires</td></tr>\n<tr><td><strong>RTK avec base</strong></td><td>Un récepteur fixe (la <strong>base</strong>) sur un point connu transmet en temps réel, par radio, ses observations au récepteur mobile (le <strong>mobile</strong> ou <strong>rover</strong>)</td><td>Centimétrique, à quelques kilomètres de la base</td><td>Chantiers éloignés de tout réseau, zones sans couverture téléphonique</td></tr>\n<tr><td><strong>RTK réseau</strong></td><td>Un réseau de stations permanentes calcule des corrections transmises au mobile par internet mobile</td><td>Centimétrique</td><td>Mode le plus courant en France pour les levers et implantations</td></tr>\n<tr><td><strong>Statique</strong></td><td>Plusieurs récepteurs enregistrent simultanément pendant une durée longue ; calcul au bureau</td><td>Millimétrique à centimétrique</td><td>Points d'appui précis, longues lignes de base</td></tr>\n</tbody></table>\n<p>En France, plusieurs réseaux de stations permanentes coexistent : le <strong>RGP</strong> de l'IGN, dont les données sont accessibles pour le post-traitement, des réseaux privés ou professionnels sur abonnement fournissant des corrections en temps réel, et des réseaux collaboratifs ouverts. Le cabinet choisit selon la couverture locale et son abonnement.</p>"
      },
      {
       "titre": "Mettre en œuvre un lever en RTK réseau",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déroulé d'une séance de mesure en RTK réseau.<br>1) Au bureau : créer le projet dans le carnet en choisissant le système de coordonnées (par exemple RGF93 v2b, projection CC ou Lambert-93) et la grille de conversion altimétrique ; vérifier l'abonnement et la couverture du réseau ; préparer la liste des points connus à contrôler.<br>2) Sur place : monter l'antenne sur la canne, saisir la hauteur d'antenne et le type de mesure de hauteur ; se connecter au réseau de corrections.<br>3) Attendre la solution fixée ; vérifier le nombre de satellites, le PDOP et la précision estimée.<br>4) Contrôle de départ : mesurer un point connu (repère géodésique, point d'appui du chantier) et comparer ; l'écart doit être inférieur à la tolérance.<br>5) Lever les points en tenant la canne verticale (bipied pour les points importants), avec une durée d'occupation adaptée (quelques secondes pour un point de détail, davantage pour un point d'appui).<br>6) Pour les points importants, procéder à une seconde mesure indépendante, après une nouvelle initialisation et à un autre moment (les satellites ont bougé).<br>7) Contrôle de fin : remesurer le point connu.</div>\n<p>Les récepteurs récents intègrent une <strong>compensation d'inclinaison</strong> (centrale inertielle) qui corrige l'inclinaison de la canne. Elle facilite la mesure de points difficiles d'accès (angle de mur, bordure sous un véhicule), mais doit être étalonnée et contrôlée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la hauteur d'antenne est la faute la plus fréquente en GNSS. Il faut savoir si elle est mesurée jusqu'au bas de l'embase, jusqu'au plan de référence de l'antenne ou jusqu'au bord de l'antenne, et saisir le bon type de mesure dans le carnet.</div>"
      },
      {
       "titre": "Limites et complémentarité avec la station totale",
       "contenu": "<p>Le GNSS ne remplace pas la station totale. Ses limites sont connues :</p>\n<ul>\n<li>il ne fonctionne pas à l'intérieur des bâtiments, dans les tunnels, sous les ponts ;</li>\n<li>il est dégradé sous les arbres, en centre-ville dense, au pied des façades et des falaises ;</li>\n<li>sa précision en altitude est environ deux fois moins bonne qu'en planimétrie ;</li>\n<li>la précision relative entre deux points proches (quelques mètres) est souvent moins bonne qu'à la station totale.</li>\n</ul>\n<p>La méthode habituelle consiste donc à <strong>combiner</strong> les deux techniques : le GNSS détermine des points d'appui en zone dégagée, la station totale lève les détails et les zones masquées en s'appuyant sur ces points. Pour l'implantation d'un bâtiment, les points relativement proches (angles, axes) sont implantés à la station totale, car c'est la cohérence entre eux qui compte.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un terrassement de plateforme routière, les engins équipés de systèmes de guidage par GNSS reçoivent directement le modèle numérique du projet. Le géomètre prépare ces modèles, installe et contrôle les points de calage, et vérifie régulièrement les engins sur des points connus.</div>"
      },
      {
       "titre": "Contrôler et documenter un lever GNSS",
       "contenu": "<p>Un lever GNSS ne se juge pas sur le seul affichage du récepteur. Plusieurs éléments permettent d'en garantir la qualité, et le client peut demander qu'ils figurent dans le rendu.</p>\n<table><thead><tr><th>Contrôle</th><th>Ce qu'il vérifie</th></tr></thead><tbody>\n<tr><td>Point connu mesuré en début et fin de séance</td><td>Système de coordonnées, grille altimétrique, hauteur d'antenne, réseau de corrections</td></tr>\n<tr><td>Double détermination des points importants à des moments différents</td><td>Absence d'erreur d'initialisation et de multitrajet</td></tr>\n<tr><td>Comparaison avec la station totale sur des points communs</td><td>Cohérence entre les deux techniques</td></tr>\n<tr><td>Rapport de qualité exporté du carnet</td><td>Solution fixée, PDOP, précisions estimées, nombre de satellites pour chaque point</td></tr>\n</tbody></table>\n<p>Le <strong>rapport de lever</strong> mentionne le matériel utilisé, le réseau de corrections, le système de coordonnées et d'altitudes, la grille utilisée, les points de contrôle et les écarts constatés. Il rend le travail vérifiable par un tiers, ce qui est indispensable lorsque le plan sert de base à un projet ou à un document foncier.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un point mesuré une seule fois au GNSS, sans contrôle sur un point connu, n'est pas un point garanti, même si le récepteur affiche une précision de 1 cm.</div>"
      }
     ],
     "points_cles": [
      "Le GNSS regroupe GPS, GLONASS, Galileo et BeiDou ; il faut au moins quatre satellites.",
      "La mesure de phase et la résolution des ambiguïtés donnent la précision centimétrique.",
      "Seule une solution fixée est utilisable pour la topographie.",
      "Multitrajets, masques et mauvaise géométrie (PDOP élevé) dégradent la précision.",
      "Le RTK réseau est le mode le plus courant ; le statique sert aux points d'appui précis.",
      "Système de coordonnées, grille altimétrique et hauteur d'antenne se vérifient avant la mesure.",
      "Un contrôle sur point connu se fait au début et à la fin de chaque séance.",
      "Le GNSS et la station totale sont complémentaires."
     ],
     "lexique": [
      {
       "terme": "GNSS",
       "def": "Système global de navigation par satellites, regroupant GPS, GLONASS, Galileo et BeiDou."
      },
      {
       "terme": "Trilatération",
       "def": "Calcul d'une position à partir de distances à des points connus."
      },
      {
       "terme": "Ambiguïté",
       "def": "Nombre entier inconnu de longueurs d'onde entre un satellite et le récepteur."
      },
      {
       "terme": "Solution fixée",
       "def": "Solution dans laquelle les ambiguïtés sont résolues, de précision centimétrique."
      },
      {
       "terme": "RTK",
       "def": "Real Time Kinematic : positionnement cinématique en temps réel par mesure de phase et corrections."
      },
      {
       "terme": "Base",
       "def": "Récepteur fixe installé sur un point connu qui transmet ses observations au mobile."
      },
      {
       "terme": "Multitrajet",
       "def": "Signal reçu après réflexion sur une surface, qui fausse la distance mesurée."
      },
      {
       "terme": "PDOP",
       "def": "Indicateur de la qualité de la géométrie des satellites ; plus il est faible, mieux c'est."
      },
      {
       "terme": "Hauteur d'antenne",
       "def": "Hauteur entre le point mesuré et le point de référence de l'antenne."
      },
      {
       "terme": "Post-traitement",
       "def": "Calcul des positions au bureau, après la mesure, à partir des fichiers enregistrés."
      }
     ]
    },
    {
     "id": "bgeo-canevas",
     "titre": "Canevas et polygonation",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Expliquer le rôle d'un canevas dans un lever ou un chantier",
      "Concevoir un cheminement polygonal fermé ou encadré",
      "Calculer et compenser la fermeture angulaire d'une polygonale",
      "Calculer et compenser la fermeture planimétrique",
      "Matérialiser et documenter les points d'un canevas"
     ],
     "sections": [
      {
       "titre": "Du général au particulier",
       "contenu": "<p>Un principe guide toute la topographie : on travaille <strong>du général au particulier</strong>. On détermine d'abord, avec soin, un petit nombre de points bien répartis : c'est le <strong>canevas</strong> (ou réseau de points d'appui). Les détails sont ensuite levés depuis ces points. Ainsi, les erreurs de chaque station restent locales et ne s'accumulent pas de proche en proche sur toute la zone.</p>\n<table><thead><tr><th>Niveau</th><th>Contenu</th><th>Méthodes</th></tr></thead><tbody>\n<tr><td>Canevas d'ensemble</td><td>Rattachement au système officiel</td><td>Repères géodésiques et de nivellement, GNSS statique ou RTK</td></tr>\n<tr><td>Canevas polygonal</td><td>Points d'appui du chantier ou du lever, espacés de quelques dizaines à quelques centaines de mètres</td><td>Cheminements polygonaux, stations libres, GNSS</td></tr>\n<tr><td>Lever de détail</td><td>Objets à représenter</td><td>Rayonnement depuis les points du canevas</td></tr>\n</tbody></table>\n<p>Le canevas s'appuie sur les calculs de gisements et de coordonnées et sur la gestion des erreurs déjà étudiés : il en est l'application la plus complète.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le canevas doit être plus précis que les détails qu'il sert à lever. Une erreur sur un point d'appui se reporte sur tous les points levés depuis lui.</div>"
      },
      {
       "titre": "Le cheminement polygonal",
       "contenu": "<p>Un <strong>cheminement polygonal</strong> (ou <strong>polygonale</strong>) est une suite de stations S1, S2, S3… dont chacune voit la précédente et la suivante. À chaque station on mesure l'<strong>angle horizontal</strong> entre la station arrière et la station avant, et la <strong>distance</strong> vers la station suivante (en pratique dans les deux sens, aller et retour, pour contrôler).</p>\n<p>Comme pour le nivellement, un cheminement doit être contrôlé :</p>\n<ul>\n<li><strong>polygonale fermée</strong> : elle revient sur son point de départ ;</li>\n<li><strong>polygonale encadrée</strong> : elle part d'un point connu orienté sur une référence connue et arrive sur un autre point connu, lui aussi orienté sur une référence connue. C'est la configuration la plus sûre, car elle contrôle aussi l'orientation et l'échelle par rapport au système officiel.</li>\n</ul>\n<p>Règles de conception : côtés de longueurs voisines, éviter les côtés très courts (l'erreur de centrage pèse lourd sur l'angle), limiter le nombre de stations, éviter les visées rasantes, placer les stations sur un sol stable et là où elles seront conservées.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une polygonale fermée qui n'est rattachée qu'à un seul point connu contrôle la cohérence interne, mais pas l'orientation : une erreur sur le gisement de départ fait tourner toute la figure sans que la fermeture le révèle.</div>"
      },
      {
       "titre": "La fermeture angulaire",
       "contenu": "<p>À partir du gisement de départ et des angles mesurés, on calcule de proche en proche les gisements des côtés. Avec des angles α mesurés dans le sens horaire de la station arrière vers la station avant :</p>\n<p><strong>G<sub>suivant</sub> = G<sub>précédent</sub> + α + 200 gon</strong> (ramené entre 0 et 400)</p>\n<p>Le gisement d'arrivée calculé est comparé au gisement connu : l'écart est la <strong>fermeture angulaire</strong>. Pour une polygonale fermée à <em>n</em> sommets, on peut aussi la calculer directement : la somme des angles intérieurs vaut (n - 2) × 200 gon.</p>\n<p>Si la fermeture est inférieure à la tolérance, on la compense en répartissant la correction à parts égales sur les angles (les mesures d'angles ayant en principe la même précision).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> polygonale fermée A, B, C, D, partant de A (1 000,000 ; 1 000,000) avec G<sub>AB</sub> = 84,4042 gon connu.<br>Angles intérieurs mesurés : B = 106,5630 ; C = 96,4662 ; D = 108,3293 ; A = 88,6427 gon.<br>1) Somme : 400,0012 gon. Valeur théorique pour 4 sommets : (4 - 2) × 200 = 400 gon.<br>2) Fermeture angulaire : +1,2 mgon, inférieure à la tolérance fixée (par exemple 3 mgon) : acceptable.<br>3) Correction : -1,2 ÷ 4 = -0,3 mgon par angle. B = 106,5627 ; C = 96,4659 ; D = 108,3290 ; A = 88,6424 gon.<br>4) Gisements : G<sub>BC</sub> = 84,4042 + 106,5627 + 200 = 390,9669 ; G<sub>CD</sub> = 390,9669 + 96,4659 + 200 - 400 = 287,4328 ; G<sub>DA</sub> = 195,7618 ; G<sub>AB</sub> recalculé = 84,4042. Le retour sur le gisement de départ contrôle le calcul.</div>"
      },
      {
       "titre": "La fermeture planimétrique",
       "contenu": "<p>Avec les gisements compensés et les distances horizontales réduites, on calcule les ΔE et ΔN de chaque côté. Pour une polygonale fermée, leurs sommes devraient être nulles ; pour une polygonale encadrée, elles devraient égaler les différences de coordonnées entre les points d'arrivée et de départ.</p>\n<p>Les écarts f<sub>E</sub> et f<sub>N</sub> donnent la <strong>fermeture planimétrique</strong> : f = √(f<sub>E</sub><sup>2</sup> + f<sub>N</sub><sup>2</sup>). On la compare à la tolérance, puis on la compense, le plus souvent <strong>proportionnellement aux longueurs</strong> des côtés : la correction d'un côté de longueur D vaut -f<sub>E</sub> × D ÷ L et -f<sub>N</sub> × D ÷ L, L étant la longueur totale du cheminement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> suite de l'exemple. Distances horizontales réduites : AB = 82,464 ; BC = 70,709 ; CD = 76,487 ; DA = 75,164 m ; L = 304,824 m.<br><table><thead><tr><th>Côté</th><th>G (gon)</th><th>D (m)</th><th>ΔE (m)</th><th>ΔN (m)</th></tr></thead><tbody><tr><td>AB</td><td>84,4042</td><td>82,464</td><td>+80,0018</td><td>+20,0004</td></tr><tr><td>BC</td><td>390,9669</td><td>70,709</td><td>-9,9994</td><td>+69,9984</td></tr><tr><td>CD</td><td>287,4328</td><td>76,487</td><td>-75,0015</td><td>-15,0011</td></tr><tr><td>DA</td><td>195,7618</td><td>75,164</td><td>+5,0002</td><td>-74,9975</td></tr></tbody></table>1) Sommes : f<sub>E</sub> = +1,2 mm ; f<sub>N</sub> = +0,3 mm ; f ≈ 1,2 mm sur 305 m : très bon résultat.<br>2) Compensation proportionnelle aux longueurs : pour AB, -1,2 × 82,464 ÷ 304,824 ≈ -0,3 mm en E.<br>3) Coordonnées compensées : B (1 080,002 ; 1 020,000) ; C (1 070,002 ; 1 089,999) ; D (995,000 ; 1 074,998) ; retour exact sur A (1 000,000 ; 1 000,000).</div>\n<p>Une fermeture anormale oriente la recherche de la faute : une forte fermeture angulaire désigne un angle faux ; une fermeture planimétrique forte avec une fermeture angulaire correcte désigne plutôt une distance fausse, souvent sur le côté parallèle à la direction de l'écart.</p>"
      },
      {
       "titre": "Matérialiser et documenter le canevas",
       "contenu": "<p>Un point de canevas n'a de valeur que s'il peut être retrouvé et réutilisé. On le matérialise selon la durée de vie souhaitée : clou d'arpentage dans l'enrobé, borne béton ou plastique, repère scellé dans un ouvrage, cible adhésive sur un mur pour la station libre.</p>\n<p>Chaque point important fait l'objet d'une <strong>fiche signalétique</strong> : nom ou numéro, coordonnées et altitude, système utilisé, nature de la matérialisation, croquis de repérage avec cotes vers des éléments fixes (angle de bâtiment, poteau, regard), photographie, date et méthode de détermination.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un grand chantier de travaux publics, le canevas est déterminé par le géomètre de l'entreprise puis contrôlé par celui du maître d'œuvre. Il est vérifié régulièrement, car les engins, les vibrations et les terrassements déplacent ou détruisent les points. Un point d'appui bougé de 2 cm fausse toutes les implantations faites à partir de lui.</div>\n<p>Aujourd'hui, la station libre et le GNSS ont réduit l'usage des longues polygonales. Mais le raisonnement reste le même : surabondance, contrôle sur des points connus, compensation et documentation.</p>"
      },
      {
       "titre": "Tolérances et calcul par logiciel",
       "contenu": "<p>Les tolérances de fermeture sont fixées par le cahier des charges du client ou par les règles internes du cabinet, en fonction de la précision attendue et du nombre de stations : la fermeture angulaire tolérée croît avec la racine carrée du nombre d'angles, la fermeture planimétrique avec la longueur et le nombre de côtés. Il ne faut jamais compenser une fermeture hors tolérance : on chercherait alors à « répartir » une faute, ce qui fausse tous les points.</p>\n<p>Les logiciels de topographie calculent les polygonales automatiquement à partir des fichiers de terrain. Ils proposent souvent une compensation globale par <strong>moindres carrés</strong>, qui traite ensemble toutes les mesures (angles, distances, visées surabondantes, points GNSS) en tenant compte de leur précision respective. Le technicien doit néanmoins savoir :</p>\n<ul>\n<li>vérifier que les points connus et les références sont les bons ;</li>\n<li>lire les fermetures et les résidus affichés, et les comparer aux tolérances ;</li>\n<li>identifier une mesure aberrante et décider de la refaire ;</li>\n<li>refaire un calcul simple « à la main » pour contrôler un résultat inattendu.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un logiciel donne toujours un résultat, même avec des données fausses. Une fermeture nulle peut aussi signifier que le point d'arrivée a été mal saisi comme point inconnu : le contrôle n'a alors pas eu lieu.</div>"
      }
     ],
     "points_cles": [
      "On travaille du général au particulier : canevas précis d'abord, détails ensuite.",
      "Une polygonale est fermée ou encadrée ; l'encadrement contrôle aussi l'orientation.",
      "Gsuivant = Gprécédent + α + 200 gon, avec α mesuré de la station arrière vers la station avant.",
      "Somme des angles intérieurs d'un polygone à n sommets : (n - 2) × 200 gon.",
      "La fermeture angulaire se répartit à parts égales sur les angles.",
      "La fermeture planimétrique f = √(fE² + fN²) se compense proportionnellement aux longueurs.",
      "Chaque point de canevas est matérialisé et décrit par une fiche signalétique.",
      "Un point d'appui déplacé fausse toutes les mesures qui s'appuient sur lui."
     ],
     "lexique": [
      {
       "terme": "Canevas",
       "def": "Ensemble de points d'appui déterminés avec précision, servant de base au lever ou au chantier."
      },
      {
       "terme": "Polygonale",
       "def": "Cheminement de stations successives où l'on mesure angles et distances."
      },
      {
       "terme": "Polygonale encadrée",
       "def": "Polygonale partant et arrivant sur des points connus, orientés sur des références connues."
      },
      {
       "terme": "Fermeture angulaire",
       "def": "Écart entre le gisement d'arrivée calculé et le gisement connu."
      },
      {
       "terme": "Fermeture planimétrique",
       "def": "Écart de position entre le point d'arrivée calculé et le point connu."
      },
      {
       "terme": "Compensation proportionnelle",
       "def": "Répartition de la fermeture en fonction de la longueur de chaque côté."
      },
      {
       "terme": "Fiche signalétique",
       "def": "Document décrivant un point : coordonnées, matérialisation, croquis de repérage."
      },
      {
       "terme": "Clou d'arpentage",
       "def": "Clou à tête marquée, enfoncé dans un revêtement pour matérialiser un point."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Lever, implanter et traiter les données",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bgeo-lever",
     "titre": "Le lever topographique et le récolement",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Organiser un lever de détail en fonction de l'échelle et de l'usage du plan",
      "Choisir les points à lever pour représenter fidèlement chaque type d'objet",
      "Utiliser une codification et un croquis de terrain cohérents",
      "Situer les techniques de lasergrammétrie et de photogrammétrie par drone",
      "Réaliser un récolement d'ouvrage ou de réseau"
     ],
     "sections": [
      {
       "titre": "Un plan pour un usage",
       "contenu": "<p>Le <strong>lever topographique</strong> (ou levé) consiste à mesurer la position et l'altitude des objets d'un site pour en dresser le plan. Le cours de seconde en a donné le principe ; il s'agit ici de l'organiser comme un professionnel.</p>\n<p>Un lever répond toujours à un <strong>usage</strong> : un plan pour un permis de construire, un plan de voirie avant réaménagement, un plan d'intérieur avant rénovation, un état des lieux avant terrassement. L'usage détermine l'<strong>échelle de restitution</strong>, la <strong>précision</strong> et la <strong>liste des objets</strong> à représenter.</p>\n<table><thead><tr><th>Échelle</th><th>Usage typique</th><th>Densité de points</th></tr></thead><tbody>\n<tr><td>1/100 à 1/200</td><td>Abords de bâtiment, voirie urbaine, projet d'aménagement précis</td><td>Tous les éléments visibles, points de terrain tous les quelques mètres</td></tr>\n<tr><td>1/500</td><td>Plan de masse de lotissement, étude de voirie</td><td>Éléments principaux, points de terrain tous les 5 à 10 m environ</td></tr>\n<tr><td>1/1000 et plus petite</td><td>Étude préliminaire de grand terrain, carrière</td><td>Éléments structurants, relief général</td></tr>\n</tbody></table>\n<p>Un principe simple : un détail plus petit que l'épaisseur d'un trait à l'échelle du plan (environ 0,1 à 0,2 mm sur le papier, soit 2 à 4 cm au 1/200 et 5 à 10 cm au 1/500) n'a pas besoin d'être levé avec plus de précision.</p>"
      },
      {
       "titre": "Quels points lever pour chaque objet",
       "contenu": "<p>Chaque objet se représente par un nombre minimal de points bien choisis. La <strong>nomenclature</strong> du client ou du cabinet fixe ces règles ; en voici les principes.</p>\n<table><thead><tr><th>Objet</th><th>Points à lever</th></tr></thead><tbody>\n<tr><td>Bâtiment</td><td>Angles de façade au niveau du sol, seuils de portes avec leur altitude ; parfois hauteurs à l'égout et au faîtage</td></tr>\n<tr><td>Bordure de trottoir</td><td>Haut de bordure et <strong>fil d'eau</strong> du caniveau, à chaque changement de direction et régulièrement en courbe</td></tr>\n<tr><td>Regard de réseau</td><td>Centre du tampon et son altitude ; profondeur et diamètre des canalisations visibles (fil d'eau) en ouvrant le regard depuis la surface</td></tr>\n<tr><td>Arbre</td><td>Centre du tronc, diamètre du tronc, diamètre de la couronne (houppier), essence si demandée</td></tr>\n<tr><td>Clôture, mur, haie</td><td>Extrémités et changements de direction ; nature, hauteur, épaisseur du mur</td></tr>\n<tr><td>Talus</td><td>Haut et bas de talus, sur des lignes continues</td></tr>\n<tr><td>Terrain naturel</td><td>Semis de points et surtout <strong>lignes de rupture de pente</strong> (crêtes, fonds de fossés, pieds de talus)</td></tr>\n<tr><td>Mobilier et équipements</td><td>Poteaux, candélabres, bornes d'incendie, coffrets, panneaux, avaloirs</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lever un talus par des points isolés au lieu de lignes continues produit un modèle de terrain faux : le logiciel relie les points au hasard et « adoucit » le talus. Les lignes de rupture sont indispensables au calcul des courbes de niveau et des volumes.</div>"
      },
      {
       "titre": "Codification et croquis",
       "contenu": "<p>Chaque point enregistré reçoit un <strong>matricule</strong> (numéro unique) et un <strong>code</strong> issu de la <strong>bibliothèque de codes</strong> du cabinet. Les codes indiquent la nature de l'objet et, souvent, une action de dessin : début de ligne, continuation, fin de ligne, arc, fermeture de polygone. Au bureau, le logiciel lit les codes et dessine automatiquement une grande partie du plan avec les bons symboles et calques.</p>\n<p>Le <strong>croquis de terrain</strong>, à main levée ou sur tablette, reste indispensable : il indique les numéros des points, les liaisons entre eux, les informations non mesurables (nature d'un revêtement, matériau d'une clôture, hauteur d'un mur, diamètre d'une canalisation), et toute particularité. Des photographies complètent le croquis.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lever un tronçon de rue à la station totale.<br>1) Installer la station en station libre sur les points d'appui ; contrôler sur un point connu.<br>2) Lever d'abord les éléments linéaires dans un ordre logique : une bordure entière (haut et fil d'eau), puis l'autre côté, puis les façades, en codant début, continuation et fin de ligne.<br>3) Lever ensuite les éléments ponctuels : regards, avaloirs, candélabres, arbres, en notant sur le croquis diamètres et profondeurs.<br>4) Compléter par des points de chaussée (axe, points bas, dos d'âne) et des points de terrain dans les espaces verts.<br>5) Avant de quitter la station, viser à nouveau la référence et un point déjà levé depuis une autre station pour contrôler.<br>6) Au bureau, importer les points, vérifier le dessin automatique en le comparant au croquis, compléter et corriger.</div>"
      },
      {
       "titre": "Lasergrammétrie et photogrammétrie",
       "contenu": "<p>Deux techniques produisent des <strong>nuages de points</strong> très denses, au lieu de points choisis un à un :</p>\n<ul>\n<li>la <strong>lasergrammétrie</strong> : un <strong>scanner laser 3D</strong>, posé sur trépied (statique) ou porté (dynamique, sur sac à dos ou véhicule), mesure des millions de points par balayage laser. Plusieurs stations sont assemblées par <strong>consolidation</strong>, grâce à des cibles ou aux formes communes des nuages, puis géoréférencées sur des points connus ;</li>\n<li>la <strong>photogrammétrie</strong> : de nombreuses photographies qui se recouvrent largement, prises par drone ou au sol, sont traitées par un logiciel qui reconstitue le relief et produit un nuage de points et une <strong>orthophotographie</strong>. Des <strong>points de calage</strong>, cibles au sol mesurées au GNSS ou à la station totale, assurent le géoréférencement ; d'autres points mesurés mais non utilisés dans le calcul servent de <strong>points de contrôle</strong>.</li>\n</ul>\n<p>Ces nuages ne sont pas des plans : il faut les exploiter pour en extraire les objets (vectorisation), un modèle de terrain ou une maquette numérique. Leur avantage est l'exhaustivité ; leur limite, le temps de traitement et le volume de données. Un drone ne voit pas sous les arbres ni sous les véhicules en stationnement, ce qui oblige à compléter au sol.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour la rénovation d'un immeuble, le scanner laser permet de produire en quelques jours les plans de tous les niveaux, les façades et une maquette numérique, avec des mesures que l'on peut reprendre au bureau sans retourner sur place.</div>"
      },
      {
       "titre": "Le récolement",
       "contenu": "<p>Le <strong>récolement</strong> est le lever des ouvrages <strong>tels qu'ils ont été exécutés</strong>, à la fin ou au cours des travaux. Il permet de vérifier la conformité au projet et de constituer la mémoire de l'ouvrage : le <strong>plan de récolement</strong> rejoint le <strong>dossier des ouvrages exécutés</strong> (DOE) remis au maître d'ouvrage à la réception.</p>\n<p>Le récolement des <strong>réseaux enterrés</strong> est particulièrement important : un réseau une fois remblayé ne se voit plus. Il doit être levé <strong>en tranchée ouverte</strong>, avant remblaiement, pour connaître précisément sa position et sa profondeur. La réglementation sur la prévention des endommagements des réseaux impose, pour les réseaux neufs dits sensibles, une cartographie dans la classe de précision la plus élevée (classe A).</p>\n<table><thead><tr><th>Élément de réseau</th><th>Informations à relever</th></tr></thead><tbody>\n<tr><td>Canalisation, câble, fourreau</td><td>Axe en plan à chaque changement de direction et régulièrement en ligne droite ; altitude de la génératrice supérieure ou du fil d'eau ; diamètre, matériau</td></tr>\n<tr><td>Regard, chambre, vanne</td><td>Position, altitude du tampon, altitudes des fils d'eau entrants et sortants</td></tr>\n<tr><td>Branchements</td><td>Point de raccordement, tracé jusqu'à la limite de propriété ou au compteur</td></tr>\n<tr><td>Grillage avertisseur</td><td>Présence et couleur</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un réseau se lève avant remblaiement. Après, seule une détection, moins précise et plus coûteuse, permet de le retrouver.</div>"
      },
      {
       "titre": "Du terrain au plan : le traitement",
       "contenu": "<p>Au bureau, le traitement suit un ordre précis :</p>\n<ol>\n<li>sauvegarder les données brutes dans le dossier de l'affaire ;</li>\n<li>importer les observations dans le logiciel de calcul, vérifier les stations, les références et les fermetures ;</li>\n<li>calculer les coordonnées des points et les contrôler (points doubles, points connus) ;</li>\n<li>générer le dessin à partir de la codification, puis le compléter à l'aide du croquis ;</li>\n<li>calculer le <strong>modèle numérique de terrain</strong> et les courbes de niveau si demandé ;</li>\n<li>habiller le plan : cartouche, légende, système de coordonnées et d'altitudes, échelle, nord, date ;</li>\n<li>contrôler l'ensemble, éventuellement par un collègue, puis livrer dans le format demandé.</li>\n</ol>\n<p>La représentation du relief et les calculs qui en découlent font l'objet du cours sur le modèle numérique de terrain.</p>"
      }
     ],
     "points_cles": [
      "L'usage du plan fixe l'échelle, la précision et la liste des objets à lever.",
      "Chaque objet se lève par des points types définis dans la nomenclature.",
      "Les lignes de rupture de pente sont indispensables pour représenter le relief.",
      "Chaque point porte un matricule et un code ; le croquis complète ce que les codes ne disent pas.",
      "Scanner laser et photogrammétrie produisent des nuages de points qu'il faut ensuite exploiter.",
      "Points de calage pour géoréférencer, points de contrôle pour vérifier.",
      "Le récolement lève les ouvrages tels qu'exécutés ; il rejoint le DOE.",
      "Les réseaux se récolent en tranchée ouverte, avant remblaiement."
     ],
     "lexique": [
      {
       "terme": "Lever de détail",
       "def": "Mesure des objets d'un site à partir des points du canevas."
      },
      {
       "terme": "Échelle de restitution",
       "def": "Échelle à laquelle le plan est destiné à être utilisé, qui détermine la densité et la précision du lever."
      },
      {
       "terme": "Ligne de rupture",
       "def": "Ligne le long de laquelle la pente du terrain change brusquement."
      },
      {
       "terme": "Bibliothèque de codes",
       "def": "Liste des codes de points utilisés par un cabinet, associés à des symboles et des calques."
      },
      {
       "terme": "Nuage de points",
       "def": "Ensemble très dense de points 3D produit par un scanner laser ou par photogrammétrie."
      },
      {
       "terme": "Consolidation",
       "def": "Assemblage des nuages de points de plusieurs stations de scanner dans un même repère."
      },
      {
       "terme": "Orthophotographie",
       "def": "Image aérienne corrigée des déformations, superposable à un plan."
      },
      {
       "terme": "Point de calage",
       "def": "Cible au sol de coordonnées connues servant à géoréférencer un traitement photogrammétrique."
      },
      {
       "terme": "Récolement",
       "def": "Lever des ouvrages tels qu'ils ont été réalisés."
      },
      {
       "terme": "DOE",
       "def": "Dossier des ouvrages exécutés, remis au maître d'ouvrage à la fin des travaux."
      },
      {
       "terme": "Génératrice supérieure",
       "def": "Ligne la plus haute de la paroi extérieure d'une canalisation."
      }
     ]
    },
    {
     "id": "bgeo-implantation",
     "titre": "L'implantation d'ouvrages",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Préparer une implantation à partir d'un plan et d'un tableau de coordonnées",
      "Calculer les éléments d'implantation par la méthode polaire",
      "Implanter un bâtiment en planimétrie et en altimétrie",
      "Calculer les éléments principaux d'un raccordement circulaire",
      "Contrôler une implantation et rédiger le procès-verbal"
     ],
     "sections": [
      {
       "titre": "Implanter : l'inverse du lever",
       "contenu": "<p>Lever, c'est mesurer ce qui existe pour le reporter sur un plan. <strong>Implanter</strong>, c'est l'inverse : reporter sur le terrain la position d'un ouvrage <strong>projeté</strong>, défini sur un plan, pour que l'entreprise puisse le construire au bon endroit et à la bonne altitude. Une erreur d'implantation se retrouve dans le béton : elle coûte cher et peut entraîner un empiètement sur la propriété voisine ou le non-respect du permis de construire.</p>\n<p>Les données d'implantation proviennent du <strong>plan d'implantation</strong> établi par l'architecte, le bureau d'études ou le géomètre : il donne la position de l'ouvrage par rapport aux limites de propriété et aux éléments existants, ainsi que les coordonnées des points caractéristiques (angles, axes) et l'altitude de référence du projet, souvent appelée <strong>niveau 0,00</strong> ou ±0,00 (par exemple le niveau fini du rez-de-chaussée).</p>\n<p>La préparation comprend : la vérification de la cohérence du plan (cotes et coordonnées concordantes), le choix des points à implanter, le calcul des éléments d'implantation, et la vérification des points d'appui disponibles sur le site.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> avant d'implanter, on vérifie que le plan est la dernière version validée. Implanter un bâtiment d'après un indice de plan périmé est une faute fréquente et coûteuse.</div>"
      },
      {
       "titre": "Les méthodes d'implantation planimétrique",
       "contenu": "<table><thead><tr><th>Méthode</th><th>Principe</th><th>Usage</th></tr></thead><tbody>\n<tr><td><strong>Polaire</strong> (par rayonnement)</td><td>Depuis une station orientée, on affiche le gisement du point et on mesure la distance jusqu'à trouver le point</td><td>Méthode courante à la station totale</td></tr>\n<tr><td><strong>GNSS</strong></td><td>Le carnet guide l'opérateur vers les coordonnées du point</td><td>Terrassements, voirie, réseaux, grandes emprises dégagées</td></tr>\n<tr><td><strong>Abscisses et ordonnées</strong></td><td>On reporte des distances le long d'une ligne de base, puis perpendiculairement</td><td>Implantations simples au ruban et à l'équerre, à partir d'un alignement existant</td></tr>\n<tr><td><strong>Intersection de distances</strong></td><td>Le point est à l'intersection de deux distances mesurées depuis deux points connus</td><td>Contrôle, petits ouvrages</td></tr>\n</tbody></table>\n<p>À la station totale robotisée, le carnet calcule en temps réel l'écart entre la position du prisme et le point théorique, et indique à l'opérateur de combien avancer, reculer, aller à gauche ou à droite. Le principe reste celui du calcul polaire, qu'il faut savoir faire pour contrôler.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> implantation polaire. Station S (500,000 ; 800,000), V0 calculé sur la référence = 12,5000 gon. Point à implanter P (523,450 ; 812,300).<br>1) ΔE = +23,450 m ; ΔN = +12,300 m (quadrant nord-est).<br>2) G<sub>SP</sub> = arctan(23,450 ÷ 12,300) ≈ 69,2468 gon.<br>3) D<sub>SP</sub> = √(23,450<sup>2</sup> + 12,300<sup>2</sup>) ≈ 26,480 m (distance en projection ; en CC, la correction est négligeable sur une telle distance).<br>4) Lecture Hz à afficher : Hz = G - V0 = 69,2468 - 12,5000 = 56,7468 gon.<br>5) Sur le terrain : tourner l'instrument jusqu'à Hz = 56,7468 gon, guider l'opérateur sur cette direction, mesurer et le faire avancer ou reculer jusqu'à 26,480 m ; matérialiser le point (piquet et clou).<br>6) Contrôle : mesurer le point implanté en lever et comparer ses coordonnées au projet.</div>"
      },
      {
       "titre": "Implanter un bâtiment",
       "contenu": "<p>L'implantation d'un bâtiment se déroule généralement en plusieurs temps :</p>\n<ol>\n<li><strong>Implantation de l'emprise</strong> pour le terrassement : angles approximatifs, avec une marge de travail autour de la future construction.</li>\n<li><strong>Implantation des axes</strong> ou des nus de façade, une fois la plateforme terrassée. Comme les points au sol seraient détruits par les engins, on les reporte à l'extérieur de l'emprise : sur des <strong>chaises d'implantation</strong> (planches horizontales fixées sur des piquets, sur lesquelles un clou marque chaque axe), ou par des repères déportés (piquets ou clous sur l'alignement prolongé des axes).</li>\n<li><strong>Report des axes</strong> à chaque niveau de la construction (sur les dalles), à partir des repères extérieurs ou de points d'appui.</li>\n</ol>\n<p>Les contrôles portent sur les distances entre points implantés, comparées aux cotes du plan, sur les <strong>diagonales</strong> (deux diagonales égales confirment un rectangle) et sur les distances aux limites de propriété et aux bâtiments voisins.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour une maison individuelle, l'implantation est souvent confiée au géomètre-expert qui a réalisé le plan de bornage, afin de garantir le respect des distances aux limites imposées par le plan local d'urbanisme. Il remet un procès-verbal d'implantation au maître d'ouvrage et à l'entreprise.</div>"
      },
      {
       "titre": "L'implantation altimétrique",
       "contenu": "<p>L'implantation en altitude consiste à matérialiser une altitude de projet : niveau de fond de fouille, niveau de dalle, fil d'eau d'une canalisation, niveau d'un trait de référence sur un mur. On utilise le niveau et la mire, ou la station totale pour des précisions moindres.</p>\n<p>Le calcul part de l'altitude du plan de visée : <strong>altitude du plan de visée = altitude du repère + lecture arrière</strong>. La lecture qu'il faut obtenir sur la mire posée au niveau voulu vaut : <strong>lecture à obtenir = altitude du plan de visée - altitude du projet</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> repère de chantier d'altitude 124,350 m ; lecture arrière 1,425 m ; fond de fouille prévu à 123,900 m.<br>1) Plan de visée : 124,350 + 1,425 = 125,775 m.<br>2) Lecture à obtenir : 125,775 - 123,900 = 1,875 m.<br>3) Sur le terrain : l'opérateur pose la mire en fond de fouille ; si la lecture est 1,820 m, le fond est trop haut de 5,5 cm et il faut encore creuser ; si elle est 1,900 m, il est trop bas de 2,5 cm.<br>4) Le niveau est matérialisé par un piquet arasé à la bonne hauteur ou par un trait sur un repère.</div>\n<p>Sur les chantiers, le <strong>niveau laser rotatif</strong> crée un plan horizontal (ou incliné selon une pente réglée) détecté par une cellule fixée sur une mire ou sur le bras d'une pelle. Il facilite le réglage des fonds de forme et des dallages. Pour les réseaux gravitaires, des <strong>lasers de canalisation</strong> placés dans le regard matérialisent l'axe et la pente de la conduite.</p>"
      },
      {
       "titre": "Le raccordement circulaire",
       "contenu": "<p>Les voiries et les réseaux comportent des courbes. Le cas le plus simple est le <strong>raccordement circulaire</strong> entre deux alignements droits qui se coupent au <strong>sommet</strong> S. On connaît le rayon R et l'angle entre les alignements. On appelle <strong>angle au centre</strong> α l'angle dont tourne la direction entre les deux alignements (c'est aussi l'angle au centre de l'arc).</p>\n<table><thead><tr><th>Élément</th><th>Formule</th></tr></thead><tbody>\n<tr><td>Tangente (distance du sommet aux points de tangence)</td><td>T = R × tan(α ÷ 2)</td></tr>\n<tr><td>Développement (longueur de l'arc)</td><td>Dév = R × α, avec α en radians (α en gon × π ÷ 200)</td></tr>\n<tr><td>Corde (entre les deux points de tangence)</td><td>C = 2 × R × sin(α ÷ 2)</td></tr>\n<tr><td>Flèche (écart entre le milieu de l'arc et le milieu de la corde)</td><td>f = R × [1 - cos(α ÷ 2)]</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> R = 150 m ; α = 40 gon.<br>1) T = 150 × tan(20 gon) ≈ 150 × 0,3249 ≈ 48,738 m : on implante les points de tangence à 48,738 m du sommet sur chaque alignement.<br>2) Dév = 150 × 40 × π ÷ 200 ≈ 94,248 m.<br>3) Corde = 2 × 150 × sin(20 gon) ≈ 92,705 m (contrôle entre les deux points de tangence).<br>4) Flèche = 150 × [1 - cos(20 gon)] ≈ 7,342 m.<br>5) Les points intermédiaires de l'arc sont en pratique calculés en coordonnées par le logiciel et implantés en polaire ou au GNSS.</div>"
      },
      {
       "titre": "Contrôler et rendre compte",
       "contenu": "<p>Une implantation n'est terminée qu'après <strong>contrôle</strong>. Celui-ci doit être indépendant : depuis une autre station, par des mesures de distances entre points implantés, ou par un lever des points implantés comparé au projet. Les écarts sont comparés aux tolérances fixées par le marché ou par les règles de l'art de l'ouvrage.</p>\n<p>Le <strong>procès-verbal d'implantation</strong> (PV) récapitule : l'ouvrage, la date, les documents utilisés (plan et indice), les points d'appui, les points implantés avec leur matérialisation, les contrôles et les écarts constatés. Il est signé par le géomètre et remis à l'entreprise, qui prend alors la responsabilité de la conservation des points.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> implanter, c'est préparer (plan à jour, calculs), réaliser (méthode adaptée), contrôler (indépendamment) et rendre compte (procès-verbal).</div>"
      }
     ],
     "points_cles": [
      "Implanter, c'est reporter sur le terrain un ouvrage projeté.",
      "La méthode polaire utilise un gisement et une distance calculés depuis une station orientée : Hz = G - V0.",
      "Les axes de bâtiment sont reportés à l'extérieur de l'emprise, sur des chaises ou des repères déportés.",
      "Les diagonales égales contrôlent la forme rectangulaire d'une implantation.",
      "Lecture à obtenir = altitude du plan de visée - altitude du projet.",
      "Raccordement circulaire : T = R × tan(α/2), Dév = R × α (radians), f = R × (1 - cos(α/2)).",
      "Toute implantation est contrôlée de façon indépendante.",
      "Le procès-verbal d'implantation transfère la responsabilité des points à l'entreprise."
     ],
     "lexique": [
      {
       "terme": "Implantation",
       "def": "Report sur le terrain de la position et de l'altitude d'un ouvrage projeté."
      },
      {
       "terme": "Plan d'implantation",
       "def": "Plan qui définit la position d'un ouvrage par cotes et coordonnées."
      },
      {
       "terme": "Niveau 0,00",
       "def": "Altitude de référence d'un bâtiment, souvent le niveau fini du rez-de-chaussée."
      },
      {
       "terme": "Chaise d'implantation",
       "def": "Planche fixée sur des piquets, hors emprise, portant les repères des axes."
      },
      {
       "terme": "Piquetage",
       "def": "Matérialisation des points implantés par des piquets."
      },
      {
       "terme": "Sommet",
       "def": "Point d'intersection de deux alignements droits raccordés par une courbe."
      },
      {
       "terme": "Tangente",
       "def": "Distance entre le sommet et un point de tangence d'un raccordement circulaire."
      },
      {
       "terme": "Développement",
       "def": "Longueur d'un arc de raccordement."
      },
      {
       "terme": "Flèche",
       "def": "Écart entre le milieu d'un arc et le milieu de sa corde."
      },
      {
       "terme": "Procès-verbal d'implantation",
       "def": "Document qui récapitule l'implantation réalisée, ses contrôles, et qui est remis à l'entreprise."
      }
     ]
    },
    {
     "id": "bgeo-relief",
     "titre": "Relief, modèle numérique de terrain et cubatures",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Représenter le relief par des points cotés et des courbes de niveau",
      "Interpoler une altitude ou la position d'une courbe de niveau",
      "Expliquer la construction d'un modèle numérique de terrain",
      "Établir et lire un profil en long et un profil en travers",
      "Calculer un volume de terrassement par la méthode des profils"
     ],
     "sections": [
      {
       "titre": "Points cotés et courbes de niveau",
       "contenu": "<p>Sur un plan, le relief se représente de deux façons complémentaires :</p>\n<ul>\n<li>les <strong>points cotés</strong> : un point du plan accompagné de son altitude, écrite à côté (par exemple 124,35) ; ils sont indispensables pour les éléments précis (seuils, fils d'eau, tampons) ;</li>\n<li>les <strong>courbes de niveau</strong> : lignes qui relient les points de même altitude. L'écart d'altitude constant entre deux courbes successives est l'<strong>équidistance</strong> (par exemple 0,25 m, 0,50 m ou 1 m selon l'échelle et le relief). Une courbe sur quatre ou sur cinq, plus épaisse et cotée, est une <strong>courbe maîtresse</strong>.</li>\n</ul>\n<p>Lecture des courbes : des courbes rapprochées indiquent une forte pente, des courbes espacées une pente faible. Les courbes ne se croisent jamais (sauf falaise en surplomb) et forment des « V » qui pointent vers l'amont dans un talweg (fond de vallon) et vers l'aval sur une croupe (dos de terrain).</p>\n<p>La pente entre deux courbes se calcule comme vu en seconde : pente = dénivelée ÷ distance horizontale. Entre deux courbes de 0,50 m d'équidistance distantes de 10 m sur le terrain, la pente vaut 5 %.</p>"
      },
      {
       "titre": "Interpoler",
       "contenu": "<p>Les courbes de niveau sont obtenues par <strong>interpolation linéaire</strong> entre des points mesurés : on suppose que le terrain varie régulièrement entre deux points voisins. C'est pourquoi le choix des points sur le terrain (lignes de rupture, points hauts et bas) est déterminant.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> deux points A (124,30 m) et B (126,10 m) sont distants de 18,00 m en plan. Où passe la courbe 125,00 ?<br>1) Dénivelée totale de A à B : 126,10 - 124,30 = 1,80 m.<br>2) Dénivelée de A à la courbe : 125,00 - 124,30 = 0,70 m.<br>3) Distance depuis A : 18,00 × 0,70 ÷ 1,80 = 7,00 m.<br>4) Contrôle depuis B : 18,00 × (126,10 - 125,00) ÷ 1,80 = 11,00 m ; 7,00 + 11,00 = 18,00 m.<br>Réciproquement, l'altitude d'un point situé à 12,00 m de A sur AB vaut 124,30 + 1,80 × 12,00 ÷ 18,00 = 125,50 m.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> interpoler entre deux points situés de part et d'autre d'un talus ou d'un mur de soutènement n'a pas de sens : le terrain n'y varie pas régulièrement. C'est exactement ce que les lignes de rupture empêchent dans un logiciel.</div>"
      },
      {
       "titre": "Le modèle numérique de terrain",
       "contenu": "<p>Un <strong>modèle numérique de terrain</strong> (MNT) est une représentation informatique de la surface du sol. La forme la plus utilisée en topographie est le <strong>réseau de triangles irréguliers</strong> (TIN, de l'anglais Triangulated Irregular Network) : le logiciel relie les points mesurés par des triangles, de façon à obtenir des triangles aussi réguliers que possible (triangulation de Delaunay), en respectant les lignes de rupture imposées comme côtés de triangles. Chaque triangle est un plan incliné.</p>\n<p>À partir du MNT, le logiciel calcule automatiquement les courbes de niveau, les profils, les pentes, les bassins versants et les volumes. Une autre forme de MNT est la <strong>grille</strong> régulière, où chaque maille porte une altitude ; elle est fréquente pour les données issues de nuages de points ou de bases nationales.</p>\n<p>On distingue le <strong>MNT</strong>, qui représente le sol nu, du <strong>modèle numérique de surface</strong> (MNS), qui inclut le sursol (bâtiments, arbres, véhicules). Un nuage de points de drone donne d'abord un MNS : il faut le filtrer pour obtenir le terrain.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la qualité d'un MNT dépend d'abord du choix des points sur le terrain. Le logiciel ne peut pas inventer un fossé qui n'a pas été levé.</div>"
      },
      {
       "titre": "Profils en long et profils en travers",
       "contenu": "<p>Un <strong>profil</strong> est une coupe verticale du terrain le long d'une ligne. Pour un projet linéaire (route, canalisation, fossé), on établit :</p>\n<ul>\n<li>le <strong>profil en long</strong>, le long de l'axe du projet ; il montre le terrain naturel (TN) et la ligne du projet, avec leurs pentes ;</li>\n<li>les <strong>profils en travers</strong>, perpendiculaires à l'axe, à intervalles réguliers (par exemple tous les 20 m) et aux points particuliers ; ils montrent la forme de la chaussée, des accotements, des fossés et des talus.</li>\n</ul>\n<p>Pour rendre le relief lisible, l'échelle des hauteurs est souvent dix fois plus grande que celle des longueurs (par exemple 1/1000 en longueur et 1/100 en hauteur) : on parle d'<strong>échelles déformées</strong>. Sous le dessin, un <strong>cartouche de profil</strong> (ou guitare) donne, pour chaque point : le numéro du profil, la distance partielle et cumulée (l'<strong>abscisse curviligne</strong>), l'altitude du TN, l'altitude du projet, et la différence (hauteur de déblai ou de remblai). Le <strong>plan de comparaison</strong> est l'altitude ronde choisie comme ligne de base du dessin.</p>\n<table><thead><tr><th>Ligne de la guitare</th><th>Exemple</th></tr></thead><tbody>\n<tr><td>N° de profil</td><td>P1 ; P2 ; P3</td></tr>\n<tr><td>Distances cumulées (m)</td><td>0,00 ; 20,00 ; 40,00</td></tr>\n<tr><td>Altitude TN (m)</td><td>124,80 ; 125,40 ; 126,30</td></tr>\n<tr><td>Altitude projet (m)</td><td>124,50 ; 124,90 ; 125,30</td></tr>\n<tr><td>Déblai (m)</td><td>0,30 ; 0,50 ; 1,00</td></tr>\n<tr><td>Pente du projet</td><td>2,00 % sur 40,00 m</td></tr>\n</tbody></table>\n<p>Lorsque le projet est sous le terrain naturel, on creuse : c'est un <strong>déblai</strong>. Lorsqu'il est au-dessus, on apporte des terres : c'est un <strong>remblai</strong>. Le point où le projet coupe le terrain s'appelle <strong>point de passage</strong> (ni déblai ni remblai).</p>"
      },
      {
       "titre": "Les cubatures",
       "contenu": "<p>Les <strong>cubatures</strong> sont les calculs de volumes de terrassement. Elles servent à chiffrer les travaux, à organiser les mouvements de terres et à suivre l'avancement d'un chantier.</p>\n<p><strong>Méthode des profils (ou des aires moyennes)</strong> : sur chaque profil en travers, on calcule l'aire de déblai et l'aire de remblai. Entre deux profils distants de d, le volume vaut environ : <strong>V = (S<sub>1</sub> + S<sub>2</sub>) ÷ 2 × d</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> trois profils en travers espacés de 20 m. Aires de déblai : P1 = 12,4 m<sup>2</sup> ; P2 = 18,6 m<sup>2</sup> ; P3 = 9,0 m<sup>2</sup>.<br>1) Entre P1 et P2 : (12,4 + 18,6) ÷ 2 × 20 = 310 m<sup>3</sup>.<br>2) Entre P2 et P3 : (18,6 + 9,0) ÷ 2 × 20 = 276 m<sup>3</sup>.<br>3) Volume total de déblai : 586 m<sup>3</sup> (volume en place).<br>4) Ce volume est un volume de terrain en place ; une fois extraites, les terres occupent un volume plus grand (phénomène de <strong>foisonnement</strong>), à prendre en compte pour le nombre de camions.</div>\n<p><strong>Méthode par MNT</strong> : le logiciel compare deux surfaces (terrain naturel et projet, ou terrain avant et après travaux) et calcule le volume compris entre elles, triangle par triangle. C'est la méthode courante aujourd'hui, notamment pour les stocks de matériaux et les carrières levés par drone.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un chantier de lotissement, le géomètre lève le terrain naturel avant travaux, puis la plateforme après décapage et terrassement. La différence entre les deux MNT donne les volumes réellement déplacés, qui servent au paiement de l'entreprise de terrassement.</div>"
      },
      {
       "titre": "Habiller le plan topographique",
       "contenu": "<p>Un plan topographique professionnel comporte toujours :</p>\n<ul>\n<li>un <strong>cartouche</strong> : nom de l'affaire, adresse, client, références cadastrales, auteur, date, indice de version, échelle ;</li>\n<li>le <strong>système de coordonnées</strong> et le <strong>système d'altitudes</strong>, ainsi que la classe de précision ;</li>\n<li>la <strong>flèche du nord</strong> et un <strong>carroyage</strong> (croisillons de coordonnées) ;</li>\n<li>une <strong>légende</strong> des symboles et des abréviations utilisés ;</li>\n<li>les courbes de niveau avec l'équidistance indiquée, et des points cotés.</li>\n</ul>\n<p>Le fichier numérique est organisé en <strong>calques</strong> (bâti, voirie, réseaux, végétation, altimétrie, textes) selon la charte du cabinet ou du client, pour que l'utilisateur puisse afficher ou masquer chaque thème. La lecture de ces plans est détaillée dans la partie consacrée à l'analyse de documents.</p>"
      }
     ],
     "points_cles": [
      "Le relief se représente par des points cotés et des courbes de niveau d'équidistance constante.",
      "Courbes serrées : forte pente ; courbes espacées : pente faible.",
      "L'interpolation linéaire suppose un terrain régulier entre deux points voisins.",
      "Un MNT en triangles (TIN) respecte les lignes de rupture levées sur le terrain.",
      "MNT : sol nu ; MNS : sol et sursol.",
      "Profil en long le long de l'axe, profils en travers perpendiculaires ; échelles des hauteurs souvent déformées.",
      "Déblai : projet sous le terrain ; remblai : projet au-dessus.",
      "Méthode des profils : V = (S1 + S2) ÷ 2 × d ; les terres extraites foisonnent."
     ],
     "lexique": [
      {
       "terme": "Point coté",
       "def": "Point du plan accompagné de son altitude."
      },
      {
       "terme": "Courbe de niveau",
       "def": "Ligne reliant les points de même altitude."
      },
      {
       "terme": "Équidistance",
       "def": "Écart d'altitude constant entre deux courbes de niveau successives."
      },
      {
       "terme": "Talweg",
       "def": "Ligne qui joint les points les plus bas d'un vallon, où s'écoulent les eaux."
      },
      {
       "terme": "MNT",
       "def": "Modèle numérique de terrain : représentation informatique du sol nu."
      },
      {
       "terme": "TIN",
       "def": "Réseau de triangles irréguliers reliant les points mesurés."
      },
      {
       "terme": "Profil en long",
       "def": "Coupe verticale du terrain et du projet le long de l'axe d'un ouvrage linéaire."
      },
      {
       "terme": "Profil en travers",
       "def": "Coupe verticale perpendiculaire à l'axe d'un ouvrage linéaire."
      },
      {
       "terme": "Abscisse curviligne",
       "def": "Distance cumulée mesurée le long de l'axe depuis son origine."
      },
      {
       "terme": "Déblai",
       "def": "Terres à extraire lorsque le projet est sous le terrain naturel."
      },
      {
       "terme": "Remblai",
       "def": "Terres à apporter lorsque le projet est au-dessus du terrain naturel."
      },
      {
       "terme": "Foisonnement",
       "def": "Augmentation de volume des terres une fois extraites."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Les missions foncières",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bgeo-propriete-bornage",
     "titre": "Propriété, limites et bornage",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Définir le droit de propriété et ses limites dans le Code civil",
      "Identifier les éléments qui permettent de reconnaître une limite de propriété",
      "Décrire la procédure de bornage amiable et le rôle du technicien",
      "Distinguer bornage amiable, bornage judiciaire et délimitation du domaine public",
      "Reconnaître les principales règles de voisinage : mitoyenneté, plantations, vues, servitudes"
     ],
     "sections": [
      {
       "titre": "Le droit de propriété",
       "contenu": "<p>Le <strong>droit de propriété</strong> est défini par l'article 544 du Code civil comme « le droit de jouir et disposer des choses de la manière la plus absolue, pourvu qu'on n'en fasse pas un usage prohibé par les lois ou par les règlements ». Il donne trois prérogatives : utiliser le bien (l'<strong>usus</strong>), en percevoir les revenus (le <strong>fructus</strong>, par exemple un loyer), en disposer (l'<strong>abusus</strong> : le vendre, le donner, le modifier). La propriété du sol emporte en principe celle du dessus et du dessous.</p>\n<p>Ce droit a des limites : les règles d'urbanisme, les servitudes, les règles de voisinage, et la possibilité pour la puissance publique d'exproprier pour cause d'utilité publique, moyennant une juste et préalable indemnité.</p>\n<p>Le géomètre intervient sur une question concrète : <strong>où s'arrête la propriété</strong> ? La <strong>limite de propriété</strong> (ou limite séparative) est la ligne qui sépare deux fonds appartenant à des propriétaires différents. Elle ne se confond pas toujours avec ce que l'on voit sur le terrain : une clôture, une haie ou un mur peuvent être en retrait, en avance ou à cheval sur la limite.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la <strong>limite apparente</strong> (clôture, mur, haie) est un indice ; la <strong>limite juridique</strong> est celle que fixent les titres, l'accord des parties ou une décision de justice.</div>"
      },
      {
       "titre": "Le bornage",
       "contenu": "<p>L'article 646 du Code civil dispose que « tout propriétaire peut obliger son voisin au bornage de leurs propriétés contiguës » et que le bornage se fait à frais communs. Le <strong>bornage</strong> est l'opération qui <strong>définit</strong> juridiquement la limite entre deux propriétés privées contiguës et la <strong>matérialise</strong> par des bornes.</p>\n<p>La loi du 7 mai 1946 instituant l'Ordre des géomètres-experts réserve au <strong>géomètre-expert</strong> les études et travaux qui fixent les limites des biens fonciers. Le technicien prépare et réalise les mesures, mais c'est le géomètre-expert qui conduit la procédure, apprécie les éléments et signe.</p>\n<table><thead><tr><th>Type</th><th>Déroulement</th><th>Effet</th></tr></thead><tbody>\n<tr><td><strong>Bornage amiable</strong></td><td>Le géomètre-expert réunit les propriétaires, propose une limite fondée sur l'analyse des éléments ; les parties l'acceptent et signent le procès-verbal</td><td>La limite est fixée définitivement entre les signataires et leurs successeurs</td></tr>\n<tr><td><strong>Bornage judiciaire</strong></td><td>En cas de désaccord ou de refus, le juge est saisi ; il désigne en général un géomètre-expert comme expert, puis fixe la limite par jugement</td><td>La limite est fixée par décision de justice</td></tr>\n</tbody></table>\n<p>Le bornage concerne des propriétés privées. La limite entre une propriété privée et le <strong>domaine public</strong> (voie communale, route départementale) relève d'une autre procédure : la <strong>délimitation</strong> est fixée par l'autorité administrative gestionnaire, notamment par un <strong>arrêté d'alignement</strong> pour les voies, sur la base d'un plan souvent établi par un géomètre-expert.</p>"
      },
      {
       "titre": "Les éléments d'appréciation d'une limite",
       "contenu": "<p>Pour proposer une limite, le géomètre-expert rassemble et compare tous les éléments disponibles. Aucun n'est décisif à lui seul ; c'est leur concordance qui emporte la conviction.</p>\n<table><thead><tr><th>Élément</th><th>Exemples</th><th>Valeur</th></tr></thead><tbody>\n<tr><td><strong>Titres de propriété</strong></td><td>Actes notariés, avec leurs descriptions et plans annexés</td><td>Essentiels, surtout s'ils contiennent des cotes ou un plan</td></tr>\n<tr><td><strong>Bornages et plans antérieurs</strong></td><td>Procès-verbaux de bornage, plans de division, documents d'arpentage, dossiers retrouvés dans les archives des géomètres-experts</td><td>Un bornage antérieur signé s'impose aux parties</td></tr>\n<tr><td><strong>Plan cadastral</strong></td><td>Plan et contenances</td><td>Simple indice : le cadastre est un document fiscal</td></tr>\n<tr><td><strong>Signes de possession</strong></td><td>Clôtures, murs, haies, fossés, bornes anciennes, limites de culture</td><td>Indices matériels ; une possession prolongée peut fonder la propriété (prescription acquisitive)</td></tr>\n<tr><td><strong>Déclarations des parties</strong></td><td>Souvenirs, accords anciens, témoignages</td><td>À confronter aux autres éléments</td></tr>\n</tbody></table>\n<p>La <strong>prescription acquisitive</strong> permet d'acquérir la propriété par une possession continue, paisible, publique, non équivoque et à titre de propriétaire, pendant trente ans (dix ans en cas de bonne foi et de juste titre pour un immeuble). C'est le juge qui la constate, pas le géomètre.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le plan cadastral ne prouve pas une limite. Implanter une clôture « d'après le cadastre », en reportant des cotes mesurées sur le plan cadastral, peut conduire à un empiètement de plusieurs décimètres, voire davantage.</div>"
      },
      {
       "titre": "La procédure de bornage amiable",
       "contenu": "<ol>\n<li><strong>Demande</strong> : un propriétaire (le requérant) demande le bornage d'une ou plusieurs limites.</li>\n<li><strong>Recherches</strong> : titres de propriété, archives, cadastre, bornages antérieurs. Le technicien prépare le dossier et les plans.</li>\n<li><strong>Lever préalable</strong> : lever de la zone (clôtures, bornes existantes, bâtiments) pour confronter les documents au terrain.</li>\n<li><strong>Convocation</strong> de tous les propriétaires concernés, par écrit, à une réunion sur les lieux.</li>\n<li><strong>Réunion contradictoire</strong> sur le terrain : le géomètre-expert expose les éléments, propose une limite, recueille les observations ; les parties expriment leur accord ou leur désaccord.</li>\n<li><strong>Implantation et pose des bornes</strong> aux sommets de la limite admise, ou reconnaissance des bornes existantes.</li>\n<li><strong>Procès-verbal de bornage</strong> rédigé, accompagné d'un plan, signé par les parties et le géomètre-expert ; il est conservé et enregistré dans la base de données de l'Ordre (portail Géofoncier).</li>\n</ol>\n<p>Si un propriétaire convoqué ne se présente pas ou refuse de signer, le géomètre-expert dresse un <strong>procès-verbal de carence</strong> ; la limite n'est alors pas fixée avec ce voisin, qui pourra être attrait dans une procédure judiciaire.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rôle du technicien lors de la réunion de bornage.<br>1) Préparer : plan de confrontation superposant le lever, le cadastre et les plans anciens ; liste des points à implanter ; bornes, outillage, instruments.<br>2) Avant la réunion : retrouver et lever les bornes existantes, contrôler les points d'appui.<br>3) Pendant la réunion : implanter à la demande du géomètre-expert les points proposés, pour que les parties les voient sur le terrain ; noter les observations.<br>4) Après accord : poser les bornes, les lever en contrôle, relever leur position par rapport aux éléments fixes.<br>5) Au bureau : établir le plan annexé au procès-verbal avec les coordonnées des sommets et les cotes.</div>"
      },
      {
       "titre": "Les règles de voisinage",
       "contenu": "<p>Le géomètre rencontre en permanence des règles de voisinage du Code civil, qu'il doit savoir repérer sur le terrain et sur les plans.</p>\n<table><thead><tr><th>Règle</th><th>Contenu essentiel</th></tr></thead><tbody>\n<tr><td><strong>Mitoyenneté</strong></td><td>Un mur, une haie ou un fossé séparatif peut appartenir en commun aux deux voisins ; la loi pose des présomptions de mitoyenneté pour les murs séparatifs et décrit des marques de non-mitoyenneté (par exemple un chaperon ne versant l'eau que d'un côté)</td></tr>\n<tr><td><strong>Plantations</strong></td><td>À défaut de règlement ou d'usage local, les arbres de plus de 2 m de hauteur doivent être à au moins 2 m de la limite, les autres à au moins 0,50 m</td></tr>\n<tr><td><strong>Vues</strong></td><td>Une vue droite (fenêtre, balcon donnant directement sur le voisin) ne peut être ouverte à moins de 1,90 m de la limite ; une vue oblique, à moins de 0,60 m</td></tr>\n<tr><td><strong>Servitudes</strong></td><td>Charges imposées à un fonds (servant) au profit d'un autre fonds (dominant) : passage, canalisation, écoulement des eaux ; un terrain enclavé a droit à un passage sur le fonds voisin</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un lever pour un permis de construire, le technicien note les fenêtres des voisins proches de la limite, les arbres et leur distance à la limite, les murs et leurs marques. Ces informations permettent au géomètre-expert et à l'architecte d'anticiper un conflit de voisinage.</div>"
      },
      {
       "titre": "Les bornes et leur conservation",
       "contenu": "<p>Une <strong>borne</strong> matérialise un sommet de limite. Les modèles courants sont en béton ou en matière plastique, avec une tête marquée d'un repère central (croix, point ou trou) et souvent du logo du géomètre-expert. Dans un revêtement, on utilise des clous ou des repères à sceller ; sur un mur, une plaque ou un trait gravé. La borne est posée de façon que son repère central coïncide avec le sommet de la limite, puis elle est levée en coordonnées pour pouvoir être rétablie si elle disparaît.</p>\n<p>Les bornes doivent être protégées : un engin de terrassement, une clôture neuve ou des travaux de voirie les arrachent facilement. Leur déplacement ou leur suppression volontaire peut être sanctionné. Lorsqu'une borne a disparu, seul un géomètre-expert peut la rétablir, à partir des coordonnées et des cotes du procès-verbal.</p>\n<table><thead><tr><th>Situation sur le terrain</th><th>Réaction du technicien</th></tr></thead><tbody>\n<tr><td>Borne retrouvée conforme au procès-verbal</td><td>La lever et la signaler comme reconnue</td></tr>\n<tr><td>Borne penchée ou déplacée</td><td>Mesurer l'écart, ne pas la remettre en place de sa propre initiative, en rendre compte</td></tr>\n<tr><td>Borne introuvable</td><td>Rechercher (détecteur de métaux si la borne porte un insert), puis rendre compte</td></tr>\n</tbody></table>"
      }
     ],
     "points_cles": [
      "Le droit de propriété (article 544 du Code civil) comprend l'usus, le fructus et l'abusus, dans le respect des lois et règlements.",
      "La limite apparente est un indice ; la limite juridique résulte des titres, de l'accord des parties ou d'un jugement.",
      "Tout propriétaire peut obliger son voisin au bornage, à frais communs (article 646 du Code civil).",
      "Seul le géomètre-expert peut fixer les limites des biens fonciers (loi du 7 mai 1946).",
      "Le bornage amiable aboutit à un procès-verbal signé ; en cas de désaccord, le bornage devient judiciaire.",
      "La limite avec le domaine public relève de la délimitation administrative (alignement).",
      "Titres, bornages antérieurs, possession et cadastre sont des éléments d'appréciation ; le cadastre n'est qu'un indice.",
      "Plantations, vues, mitoyenneté et servitudes sont des règles de voisinage à repérer lors des levers."
     ],
     "lexique": [
      {
       "terme": "Limite de propriété",
       "def": "Ligne qui sépare deux fonds appartenant à des propriétaires différents."
      },
      {
       "terme": "Bornage",
       "def": "Opération contradictoire qui fixe la limite entre deux propriétés privées contiguës et la matérialise par des bornes."
      },
      {
       "terme": "Procès-verbal de bornage",
       "def": "Document signé par les parties et le géomètre-expert qui constate la limite fixée."
      },
      {
       "terme": "Procès-verbal de carence",
       "def": "Document qui constate l'absence ou le refus d'un propriétaire convoqué."
      },
      {
       "terme": "Réunion contradictoire",
       "def": "Réunion où chaque partie peut connaître et discuter les éléments présentés."
      },
      {
       "terme": "Prescription acquisitive",
       "def": "Acquisition de la propriété par une possession prolongée remplissant les conditions de la loi."
      },
      {
       "terme": "Mitoyenneté",
       "def": "Propriété commune d'une clôture séparative par les deux voisins."
      },
      {
       "terme": "Servitude",
       "def": "Charge imposée à un fonds au profit d'un autre fonds appartenant à un autre propriétaire."
      },
      {
       "terme": "Alignement",
       "def": "Détermination par l'administration de la limite entre la voie publique et les propriétés riveraines."
      },
      {
       "terme": "Domaine public",
       "def": "Biens des personnes publiques affectés à l'usage de tous ou à un service public, comme les voies publiques."
      }
     ]
    },
    {
     "id": "bgeo-surfaces",
     "titre": "Calcul et division des surfaces",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Calculer la surface d'un polygone à partir des coordonnées de ses sommets",
      "Utiliser les formules de surface du triangle adaptées aux données disponibles",
      "Distinguer surface calculée, surface graphique et contenance cadastrale",
      "Diviser une parcelle selon une surface imposée",
      "Présenter un calcul de division contrôlé"
     ],
     "sections": [
      {
       "titre": "Pourquoi calculer des surfaces",
       "contenu": "<p>Le calcul de surface est au cœur des missions foncières. On calcule la surface d'une propriété pour une vente, celle des lots d'une division ou d'un lotissement, l'emprise d'un bâtiment pour un permis de construire, la surface d'une bande de terrain à céder à la commune pour élargir une voie. En copropriété et en immobilier, les surfaces de plancher et les surfaces habitables obéissent à des définitions réglementaires précises, distinctes de la surface d'un terrain.</p>\n<p>La surface d'un terrain est toujours sa <strong>surface horizontale</strong>, projetée sur un plan, et non la surface réelle du sol en pente. Un terrain en pente de 20 % a une surface « au sol » environ 2 % plus grande que sa surface horizontale, mais c'est cette dernière qui est retenue.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en topographie et en foncier, une surface est une surface horizontale, exprimée en mètres carrés (m<sup>2</sup>), ou en hectares, ares et centiares pour les terrains : 1 ha = 100 a = 10 000 m<sup>2</sup> ; 1 a = 100 m<sup>2</sup> ; 1 ca = 1 m<sup>2</sup>.</div>"
      },
      {
       "titre": "Surface d'un polygone par les coordonnées",
       "contenu": "<p>Lorsque les sommets d'un polygone sont connus en coordonnées, sa surface se calcule exactement par la <strong>formule des trapèzes</strong>, dite aussi formule de Gauss (ou de Sarrus en topographie). Pour un polygone de sommets 1, 2, … n parcourus dans l'ordre :</p>\n<p><strong>2S = Σ E<sub>i</sub> × (N<sub>i+1</sub> - N<sub>i-1</sub>)</strong></p>\n<p>où i+1 désigne le sommet suivant et i-1 le sommet précédent (après le dernier sommet, on revient au premier). Le résultat est positif si l'on tourne dans le sens horaire, négatif dans le sens inverse : on retient la valeur absolue. Une forme équivalente, 2S = Σ N<sub>i</sub> × (E<sub>i-1</sub> - E<sub>i+1</sub>), sert de contrôle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> parcelle A (100,00 ; 100,00), B (160,00 ; 105,00), C (155,00 ; 170,00), D (95,00 ; 160,00).<br><table><thead><tr><th>Sommet</th><th>E</th><th>N suivant - N précédent</th><th>Produit</th></tr></thead><tbody><tr><td>A</td><td>100,00</td><td>105,00 - 160,00 = -55,00</td><td>-5 500,00</td></tr><tr><td>B</td><td>160,00</td><td>170,00 - 100,00 = +70,00</td><td>+11 200,00</td></tr><tr><td>C</td><td>155,00</td><td>160,00 - 105,00 = +55,00</td><td>+8 525,00</td></tr><tr><td>D</td><td>95,00</td><td>100,00 - 170,00 = -70,00</td><td>-6 650,00</td></tr></tbody></table>1) Somme : 2S = 7 575,00.<br>2) S = 3 787,50 m<sup>2</sup>, soit 37 a 88 ca (arrondi au centiare).<br>3) Contrôle : la somme des différences de N vaut 0 (-55 + 70 + 55 - 70 = 0).</div>\n<p>Cette méthode est celle qu'appliquent tous les logiciels de topographie et de dessin. Elle est exacte : sa précision ne dépend que de celle des coordonnées.</p>"
      },
      {
       "titre": "Surface d'un triangle selon les données",
       "contenu": "<p>Lorsque l'on dispose de mesures plutôt que de coordonnées, on décompose la figure en triangles :</p>\n<table><thead><tr><th>Données connues</th><th>Formule</th></tr></thead><tbody>\n<tr><td>Une base b et la hauteur h correspondante</td><td>S = b × h ÷ 2</td></tr>\n<tr><td>Deux côtés a et b et l'angle C compris entre eux</td><td>S = a × b × sin C ÷ 2</td></tr>\n<tr><td>Les trois côtés a, b, c (formule de Héron)</td><td>p = (a + b + c) ÷ 2 ; S = √[p(p - a)(p - b)(p - c)]</td></tr>\n</tbody></table>\n<p>La formule de Héron est utile pour une parcelle mesurée uniquement au ruban, en mesurant les côtés et une diagonale. La formule avec l'angle convient aux mesures faites depuis une station : deux distances et l'angle entre elles donnent directement la surface du triangle.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un triangle très aplati (un angle proche de 0 ou de 200 gon) donne une surface très sensible aux erreurs de mesure. On choisit la décomposition qui donne des triangles bien formés.</div>"
      },
      {
       "titre": "Surface calculée, graphique et cadastrale",
       "contenu": "<p>Plusieurs valeurs de surface peuvent coexister pour un même terrain, et il faut savoir les distinguer :</p>\n<table><thead><tr><th>Surface</th><th>Origine</th><th>Valeur juridique ou technique</th></tr></thead><tbody>\n<tr><td><strong>Surface calculée</strong></td><td>Calcul à partir des coordonnées de points mesurés (sommets bornés ou limites reconnues)</td><td>La plus précise ; c'est celle du géomètre-expert après bornage</td></tr>\n<tr><td><strong>Surface graphique</strong></td><td>Mesure sur un plan, papier ou numérisé</td><td>Dépend de l'échelle et de la qualité du plan ; indicative</td></tr>\n<tr><td><strong>Contenance cadastrale</strong></td><td>Surface inscrite dans la documentation cadastrale</td><td>Fiscale et indicative : le cadastre ne garantit pas les limites ni les surfaces</td></tr>\n</tbody></table>\n<p>Il est fréquent de constater un écart de quelques pour cent entre la contenance cadastrale et la surface calculée après bornage. Cet écart n'est pas une erreur du géomètre : le plan cadastral, souvent ancien et établi à petite échelle, n'a pas la précision d'un lever moderne.</p>\n<p>Un dernier point : une surface calculée à partir de coordonnées en projection est déformée par l'altération linéaire, au double de celle-ci (une altération de 50 cm/km, soit 0,05 %, modifie les surfaces d'environ 0,1 %). Pour les surfaces foncières précises, on travaille en projection à faible altération (coniques conformes 9 zones) ou on corrige.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un acte de vente, le notaire mentionne la contenance cadastrale. Lorsque la vente porte sur une partie seulement de parcelle, c'est le document établi par le géomètre (plan de division et document d'arpentage) qui fixe les nouvelles surfaces.</div>"
      },
      {
       "titre": "Diviser une parcelle",
       "contenu": "<p>La <strong>division</strong> d'une parcelle consiste à la partager en plusieurs lots selon des conditions : surface imposée pour chaque lot, limite passant par un point donné, limite parallèle à un côté, accès à la voie pour chaque lot. Les cas classiques sont :</p>\n<ul>\n<li><strong>limite issue d'un sommet</strong> : on cherche le point M sur un côté opposé tel que le lot ait la surface demandée ;</li>\n<li><strong>limite parallèle à un côté</strong> : on cherche la distance de la nouvelle limite à ce côté (calcul sur un trapèze) ;</li>\n<li><strong>limite perpendiculaire à un côté</strong>, ou passant par un point imposé situé sur un côté.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> diviser la parcelle ABCD précédente (3 787,50 m<sup>2</sup>) par une limite issue de A, de sorte que le lot ABCM fasse 2 500,00 m<sup>2</sup>, M étant sur le côté CD.<br>1) Décomposer : S(ABC) = 1 962,50 m<sup>2</sup> ; S(ACD) = 1 825,00 m<sup>2</sup> (calculs par les coordonnées). Contrôle : 1 962,50 + 1 825,00 = 3 787,50 m<sup>2</sup>.<br>2) Le lot doit encore recevoir 2 500,00 - 1 962,50 = 537,50 m<sup>2</sup> pris dans le triangle ACD.<br>3) Les triangles ACM et ACD ont la même hauteur issue de A ; leurs surfaces sont proportionnelles à leurs bases : CM ÷ CD = 537,50 ÷ 1 825,00 ≈ 0,29452.<br>4) CD = √(60,00<sup>2</sup> + 10,00<sup>2</sup>) ≈ 60,828 m ; CM ≈ 0,29452 × 60,828 ≈ 17,915 m.<br>5) Coordonnées de M : E = 155,00 + 0,29452 × (95,00 - 155,00) ≈ 137,329 ; N = 170,00 + 0,29452 × (160,00 - 170,00) ≈ 167,055.<br>6) Contrôle : surface de ABCM recalculée par les coordonnées = 2 500,00 m<sup>2</sup> ; lot AMD = 1 287,50 m<sup>2</sup> ; total 3 787,50 m<sup>2</sup>.</div>"
      },
      {
       "titre": "De la division au terrain",
       "contenu": "<p>Une division n'est pas seulement un calcul. Elle doit respecter :</p>\n<ul>\n<li>les <strong>règles d'urbanisme</strong> : surface ou largeur minimale éventuelle, accès, distances des constructions existantes aux nouvelles limites ; une division en vue de construire peut relever d'une déclaration préalable ou d'un permis d'aménager ;</li>\n<li>la <strong>réalité du terrain</strong> : constructions, clôtures, réseaux, servitudes de passage ;</li>\n<li>la volonté des parties, exprimée et validée par écrit.</li>\n</ul>\n<p>Les nouveaux sommets sont ensuite <strong>implantés et bornés</strong>, puis la division est enregistrée au cadastre par un document modificatif établi par le géomètre (voir le cours sur le cadastre). Les surfaces sont arrondies au mètre carré (ou au centiare) dans les documents ; les calculs, eux, sont menés avec toutes les décimales.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> calculer une division sur une parcelle dont les limites n'ont pas été reconnues ou bornées revient à partager une surface incertaine. Le géomètre-expert s'assure d'abord des limites extérieures.</div>"
      }
     ],
     "points_cles": [
      "Les surfaces foncières sont des surfaces horizontales : 1 ha = 100 a = 10 000 m², 1 ca = 1 m².",
      "Formule des trapèzes : 2S = Σ Ei × (Ni+1 - Ni-1), en valeur absolue.",
      "Triangle : b × h ÷ 2 ; a × b × sin C ÷ 2 ; formule de Héron avec les trois côtés.",
      "Surface calculée, surface graphique et contenance cadastrale sont trois valeurs différentes.",
      "La contenance cadastrale est fiscale et indicative.",
      "Deux triangles de même hauteur ont des surfaces proportionnelles à leurs bases : principe des divisions issues d'un sommet.",
      "Toute division se contrôle en recalculant les lots et en vérifiant que leur somme redonne la surface totale.",
      "Une division respecte l'urbanisme, le terrain et la volonté des parties, puis est bornée et enregistrée."
     ],
     "lexique": [
      {
       "terme": "Surface horizontale",
       "def": "Surface d'un terrain projetée sur un plan horizontal."
      },
      {
       "terme": "Formule des trapèzes",
       "def": "Formule qui donne la surface d'un polygone à partir des coordonnées de ses sommets."
      },
      {
       "terme": "Formule de Héron",
       "def": "Formule de la surface d'un triangle à partir de ses trois côtés."
      },
      {
       "terme": "Contenance cadastrale",
       "def": "Surface d'une parcelle inscrite au cadastre, à valeur fiscale et indicative."
      },
      {
       "terme": "Surface graphique",
       "def": "Surface mesurée sur un plan, dont la précision dépend de l'échelle."
      },
      {
       "terme": "Division",
       "def": "Partage d'une parcelle en plusieurs lots selon des conditions données."
      },
      {
       "terme": "Lot",
       "def": "Partie de terrain issue d'une division, destinée à un usage ou à un propriétaire."
      },
      {
       "terme": "Are",
       "def": "Unité de surface agraire valant 100 m²."
      },
      {
       "terme": "Centiare",
       "def": "Unité de surface agraire valant 1 m²."
      }
     ]
    },
    {
     "id": "bgeo-cadastre",
     "titre": "Cadastre, publicité foncière et documents modificatifs",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Distinguer le rôle du cadastre et celui de la publicité foncière",
      "Exploiter le plan cadastral informatisé et ses limites de précision",
      "Décrire le circuit d'une division de parcelle jusqu'à la mise à jour du cadastre",
      "Identifier le contenu d'un document modificatif du parcellaire cadastral",
      "Situer les notions de copropriété, d'état descriptif de division et de division en volumes"
     ],
     "sections": [
      {
       "titre": "Cadastre et publicité foncière",
       "contenu": "<p>Le cours de seconde a présenté le cadastre comme l'inventaire des parcelles. Il faut maintenant le situer parmi les institutions qui organisent la propriété foncière en France.</p>\n<table><thead><tr><th>Institution</th><th>Rôle</th><th>Documents</th></tr></thead><tbody>\n<tr><td><strong>Cadastre</strong> (direction générale des finances publiques)</td><td>Recenser et décrire les propriétés pour le calcul des impôts fonciers</td><td>Plan cadastral ; fichiers des propriétaires et des parcelles (relevé de propriété, anciennement matrice cadastrale)</td></tr>\n<tr><td><strong>Publicité foncière</strong> (services de la publicité foncière, rattachés à la même administration)</td><td>Rendre opposables aux tiers les actes portant sur les immeubles : ventes, donations, hypothèques, servitudes</td><td>Fichier immobilier, actes publiés</td></tr>\n<tr><td><strong>Notaire</strong></td><td>Rédiger les actes authentiques et les faire publier</td><td>Actes de vente, de partage, de constitution de servitude</td></tr>\n<tr><td><strong>Géomètre-expert</strong></td><td>Fixer les limites et établir les plans et documents techniques</td><td>Procès-verbaux de bornage, plans de division, documents modificatifs</td></tr>\n</tbody></table>\n<p>Le cadastre français a été créé au début du XIX<sup>e</sup> siècle (cadastre dit napoléonien), puis rénové au XX<sup>e</sup> siècle. Il est <strong>fiscal</strong> : il ne prouve pas la propriété ni les limites. Les actes publiés et les bornages ont une valeur juridique plus forte que le plan cadastral.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le notaire rédige et publie l'acte, le géomètre-expert délimite et mesure, le cadastre enregistre pour l'impôt. Un changement de limites passe par les trois.</div>"
      },
      {
       "titre": "Le plan cadastral informatisé",
       "contenu": "<p>Le <strong>plan cadastral informatisé</strong> (PCI) couvre aujourd'hui l'ensemble du territoire sous forme numérique, majoritairement vectorielle. Il est consultable en ligne et diffusé en données ouvertes. Il est organisé par commune, en <strong>sections</strong> (désignées par une ou deux lettres), elles-mêmes découpées en <strong>feuilles</strong>, et chaque <strong>parcelle</strong> porte un numéro unique dans sa section, par exemple « AB 152 ». Les feuilles sont établies à différentes échelles d'origine, le plus souvent du 1/500 au 1/2 500, voire plus petites en zone rurale.</p>\n<p>Le plan représente les limites de parcelles, les bâtiments (en dur ou légers), les voies, les cours d'eau, les lieux-dits, et quelques points de canevas. Sa précision dépend de son origine : un plan issu d'un lever récent peut être décimétrique ; un plan ancien, mis à jour pendant des décennies et numérisé, peut présenter des écarts de plusieurs mètres par rapport à la réalité, surtout en zone rurale.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> superposer le plan cadastral à un lever précis montre presque toujours des décalages. On ne « corrige » pas le lever pour qu'il colle au cadastre : c'est le lever qui décrit la réalité. Les écarts doivent être signalés et expliqués, pas masqués.</div>"
      },
      {
       "titre": "Le circuit d'une division",
       "contenu": "<p>Lorsqu'un propriétaire vend une partie de sa parcelle, la parcelle doit être divisée au cadastre avant que la vente puisse être publiée, car l'acte doit désigner précisément le bien vendu. Le circuit est le suivant.</p>\n<ol>\n<li><strong>Vérifications d'urbanisme</strong> : selon le projet (construction ou non) et les règles locales, la division peut nécessiter une déclaration préalable ou un permis d'aménager.</li>\n<li><strong>Bornage</strong> du périmètre si nécessaire, puis <strong>calcul de la division</strong> et implantation des nouvelles limites, bornées contradictoirement.</li>\n<li><strong>Établissement du document modificatif du parcellaire cadastral</strong> (DMPC) par le géomètre, sur la base du plan cadastral et des mesures.</li>\n<li><strong>Numérotation</strong> : le service du cadastre attribue les numéros des nouvelles parcelles.</li>\n<li><strong>Signature</strong> du document par le ou les propriétaires concernés.</li>\n<li><strong>Acte notarié</strong> de vente, qui désigne les nouvelles parcelles ; il est publié au service de la publicité foncière avec le document.</li>\n<li><strong>Mise à jour</strong> du plan et des fichiers cadastraux.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le technicien prépare la plus grande partie du dossier : extraction du plan cadastral, report des nouvelles limites, calcul des contenances des nouvelles parcelles, rédaction du document, suivi des échanges avec le service du cadastre et avec le notaire.</div>"
      },
      {
       "titre": "Le document modificatif du parcellaire cadastral",
       "contenu": "<p>Le <strong>DMPC</strong> est le document technique qui constate une modification des limites des parcelles au cadastre : division d'une parcelle, réunion, modification de limite après bornage, cession d'une emprise à une collectivité. Il est établi par un géomètre (géomètre-expert ou, pour certains travaux publics, géomètre de l'administration). Il comprend notamment :</p>\n<ul>\n<li>la désignation de la commune, de la section et de la feuille, des parcelles d'origine et de leurs propriétaires ;</li>\n<li>un <strong>croquis</strong> ou un extrait du plan cadastral sur lequel figurent les nouvelles limites, cotées par rapport à des points identifiables (angles de bâtiments, bornes, limites existantes) ;</li>\n<li>la désignation provisoire des nouvelles parcelles (souvent par des lettres, a, b, c), remplacée par la numérotation attribuée par le cadastre ;</li>\n<li>les <strong>contenances</strong> des nouvelles parcelles, dont la somme doit égaler celle de la parcelle d'origine ;</li>\n<li>la mention de la méthode (division calculée à partir d'un lever, ou division graphique) ;</li>\n<li>les signatures requises.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> répartir la contenance cadastrale d'une parcelle divisée.<br>Parcelle d'origine AB 152, contenance cadastrale 12 a 40 ca (1 240 m<sup>2</sup>). Le lever et le calcul de la division donnent une surface totale de 1 262 m<sup>2</sup>, avec un lot a de 500 m<sup>2</sup> et un lot b de 762 m<sup>2</sup>.<br>1) Constater l'écart entre surface calculée et contenance cadastrale : 1 262 - 1 240 = 22 m<sup>2</sup>, soit environ 1,8 %.<br>2) Appliquer les règles de la documentation cadastrale pour la répartition des contenances des nouvelles parcelles (selon le cas, contenances calculées ou réparties proportionnellement à la contenance d'origine).<br>3) Vérifier que la somme des contenances des nouvelles parcelles est cohérente avec la règle appliquée.<br>4) Indiquer clairement dans le dossier la surface calculée de chaque lot, qui est celle utile au client et au notaire.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le DMPC modifie le plan cadastral mais ne fixe pas à lui seul la limite juridique. Une division sans bornage préalable laisse subsister une incertitude sur les limites extérieures.</div>"
      },
      {
       "titre": "Copropriété et division en volumes",
       "contenu": "<p>La division d'un terrain n'est pas le seul moyen de partager la propriété. Deux autres techniques mobilisent le géomètre-expert.</p>\n<p>La <strong>copropriété</strong>, régie par la loi du 10 juillet 1965, s'applique à un immeuble bâti dont la propriété est répartie entre plusieurs personnes par <strong>lots</strong>. Chaque lot comprend une <strong>partie privative</strong> (un appartement, une cave, un parking) et une <strong>quote-part des parties communes</strong> (sol, escaliers, toiture, façades), exprimée en <strong>tantièmes</strong> (par exemple 125/10 000<sup>e</sup>). L'<strong>état descriptif de division</strong> (EDD) identifie et numérote les lots ; le <strong>règlement de copropriété</strong> fixe les droits et obligations. Le géomètre-expert établit les plans des lots et calcule les tantièmes en tenant compte de la surface, de la consistance et de la situation de chaque lot.</p>\n<p>La <strong>division en volumes</strong> découpe l'espace en volumes définis en trois dimensions par des cotes d'altitude, sans parties communes. Elle est utilisée pour des ensembles complexes : un centre commercial sous des logements, une gare sous un immeuble de bureaux, un parking public sous une place. Chaque volume est décrit par ses limites en plan et ses cotes NGF inférieures et supérieures.</p>\n<table><thead><tr><th>Technique</th><th>Objet divisé</th><th>Ce que décrit le géomètre</th></tr></thead><tbody>\n<tr><td>Division parcellaire</td><td>Le sol, en deux dimensions</td><td>Limites, surfaces, nouvelles parcelles</td></tr>\n<tr><td>Copropriété</td><td>Un immeuble bâti</td><td>Lots, plans, surfaces, tantièmes</td></tr>\n<tr><td>Division en volumes</td><td>L'espace, en trois dimensions</td><td>Volumes définis en plan et en altitude</td></tr>\n</tbody></table>"
      },
      {
       "titre": "Les données foncières numériques",
       "contenu": "<p>Le travail foncier s'appuie de plus en plus sur des données numériques accessibles en ligne : plan cadastral en données ouvertes, orthophotographies, géoportail de l'urbanisme pour les documents d'urbanisme, et bases de données professionnelles des géomètres-experts recensant les dossiers fonciers (bornages, divisions). Le technicien sait les consulter, les superposer dans un logiciel de dessin ou un SIG, et en mesurer les limites.</p>\n<p>Ces données ne remplacent ni les recherches dans les actes, ni la reconnaissance sur le terrain. Elles permettent toutefois de préparer efficacement une mission foncière, d'anticiper les difficultés (parcelle enclavée, bâtiment à cheval sur une limite cadastrale) et de retrouver rapidement les interventions antérieures sur un secteur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> données ouvertes pour préparer, actes et archives pour fonder, terrain et mesures pour vérifier.</div>"
      }
     ],
     "points_cles": [
      "Le cadastre est fiscal ; la publicité foncière rend les actes opposables aux tiers.",
      "Le plan cadastral informatisé est organisé en sections, feuilles et parcelles ; sa précision dépend de son origine.",
      "On ne recale pas un lever précis sur le cadastre ; on signale les écarts.",
      "Une vente de partie de parcelle passe par la division, le DMPC, la numérotation, l'acte notarié et la publication.",
      "Le DMPC constate une modification du parcellaire ; il ne fixe pas à lui seul la limite juridique.",
      "La somme des contenances des nouvelles parcelles se contrôle par rapport à la parcelle d'origine.",
      "La copropriété répartit un immeuble en lots avec tantièmes de parties communes.",
      "La division en volumes découpe l'espace en trois dimensions, avec des cotes d'altitude."
     ],
     "lexique": [
      {
       "terme": "Cadastre",
       "def": "Documentation administrative et fiscale qui recense les propriétés foncières."
      },
      {
       "terme": "Publicité foncière",
       "def": "Service qui enregistre et rend opposables aux tiers les actes relatifs aux immeubles."
      },
      {
       "terme": "Section cadastrale",
       "def": "Subdivision du plan cadastral d'une commune, désignée par une ou deux lettres."
      },
      {
       "terme": "Parcelle",
       "def": "Portion de terrain d'un seul tenant appartenant à un même propriétaire, identifiée par un numéro dans sa section."
      },
      {
       "terme": "DMPC",
       "def": "Document modificatif du parcellaire cadastral, qui constate une modification des limites de parcelles."
      },
      {
       "terme": "Contenance",
       "def": "Surface d'une parcelle inscrite dans la documentation cadastrale."
      },
      {
       "terme": "Copropriété",
       "def": "Organisation d'un immeuble bâti réparti en lots comprenant parties privatives et quote-part des parties communes."
      },
      {
       "terme": "Tantièmes",
       "def": "Quote-part des parties communes attachée à un lot de copropriété."
      },
      {
       "terme": "État descriptif de division",
       "def": "Document qui identifie et numérote les lots d'une copropriété."
      },
      {
       "terme": "Division en volumes",
       "def": "Découpage de la propriété en volumes définis en plan et en altitude."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — La détection des réseaux",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bgeo-reseaux-reglementation",
     "titre": "Travaux à proximité des réseaux : la réglementation",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Expliquer les enjeux de la prévention des endommagements de réseaux",
      "Identifier les acteurs et les déclarations obligatoires avant travaux",
      "Distinguer réseaux sensibles et non sensibles, et les classes de précision A, B et C",
      "Situer les investigations complémentaires et le marquage-piquetage dans un projet",
      "Connaître les obligations de compétence des intervenants"
     ],
     "sections": [
      {
       "titre": "Un enjeu de sécurité",
       "contenu": "<p>Le sous-sol des villes et des campagnes est parcouru par des centaines de milliers de kilomètres de <strong>réseaux</strong> : canalisations de gaz, câbles électriques, conduites d'eau potable, collecteurs d'assainissement, réseaux de chaleur, câbles et fourreaux de télécommunications, éclairage public, signalisation, canalisations d'hydrocarbures. Chaque année, des milliers de dommages sont causés par des travaux : coupures de services, fuites de gaz, électrisations, parfois des explosions mortelles.</p>\n<p>Pour réduire ces accidents, une réglementation dite <strong>anti-endommagement</strong> a été profondément réformée au début des années 2010. Elle figure principalement dans le Code de l'environnement (articles L. 554-1 et suivants, R. 554-1 et suivants) et dans des arrêtés d'application, complétés par un <strong>guide technique</strong> rendu d'application obligatoire, publié sous la forme de la norme NF S70-003 (en plusieurs parties : prévention des dommages, techniques de détection sans fouille, géoréférencement des ouvrages).</p>\n<p>Le géomètre est au cœur de ce dispositif : il localise les réseaux existants, les géoréférence, les marque sur le terrain et lève les réseaux neufs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'objectif de la réglementation est simple : connaître précisément la position des réseaux avant de creuser, la transmettre à ceux qui creusent, et adapter les techniques de travaux à proximité.</div>"
      },
      {
       "titre": "Les acteurs et les déclarations",
       "contenu": "<table><thead><tr><th>Acteur</th><th>Rôle</th></tr></thead><tbody>\n<tr><td><strong>Exploitant de réseau</strong></td><td>Gère un réseau (distributeur de gaz ou d'électricité, opérateur de télécommunications, service des eaux) ; enregistre ses zones d'implantation sur le guichet unique et répond aux déclarations</td></tr>\n<tr><td><strong>Responsable de projet</strong></td><td>Le maître d'ouvrage (commune, aménageur, particulier) ou son représentant ; il déclare le projet, fait réaliser les investigations nécessaires et transmet les informations à l'exécutant</td></tr>\n<tr><td><strong>Exécutant des travaux</strong></td><td>L'entreprise qui réalise les travaux ; elle déclare le commencement des travaux et applique les mesures de prévention</td></tr>\n<tr><td><strong>Guichet unique</strong></td><td>Téléservice national qui recense les réseaux et leurs exploitants commune par commune, et permet de les identifier pour une emprise de travaux</td></tr>\n<tr><td><strong>Prestataires</strong></td><td>Détection, géoréférencement, marquage-piquetage, pour le compte du responsable de projet ou de l'exploitant</td></tr>\n</tbody></table>\n<p>Deux déclarations encadrent tout projet de travaux :</p>\n<ul>\n<li>la <strong>DT</strong> (déclaration de projet de travaux), faite par le responsable de projet au stade de la conception, auprès de chaque exploitant concerné identifié par le guichet unique ;</li>\n<li>la <strong>DICT</strong> (déclaration d'intention de commencement de travaux), faite par l'exécutant avant le démarrage des travaux.</li>\n</ul>\n<p>Souvent, une déclaration conjointe DT-DICT est possible pour les petits travaux. Les exploitants répondent dans un délai réglementaire par un <strong>récépissé</strong> accompagné de plans de leurs réseaux et de recommandations techniques. Les travaux urgents (fuite, rupture) font l'objet d'un <strong>avis de travaux urgents</strong> (ATU).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une intervention topographique peut constituer un travail au sens de la réglementation dès lors qu'elle comporte une action dans le sol (pose de bornes ou de piquets, sondages). Le guichet unique permet de vérifier les règles applicables.</div>"
      },
      {
       "titre": "Réseaux sensibles et classes de précision",
       "contenu": "<p>La réglementation distingue :</p>\n<ul>\n<li>les <strong>réseaux sensibles pour la sécurité</strong>, dont l'endommagement peut provoquer un accident grave : gaz, hydrocarbures, produits chimiques, électricité, réseaux de chaleur sous pression, notamment ;</li>\n<li>les <strong>réseaux non sensibles</strong> : eau potable, assainissement, télécommunications, notamment, dont l'endommagement cause surtout des interruptions de service et des coûts.</li>\n</ul>\n<p>La position d'un réseau sur un plan est qualifiée par une <strong>classe de précision</strong> qui indique l'<strong>incertitude maximale</strong> sur sa localisation :</p>\n<table><thead><tr><th>Classe</th><th>Incertitude maximale de localisation</th><th>Conséquence</th></tr></thead><tbody>\n<tr><td><strong>A</strong></td><td>40 cm pour un réseau rigide, 50 cm pour un réseau flexible</td><td>Position fiable, utilisable pour concevoir et exécuter les travaux</td></tr>\n<tr><td><strong>B</strong></td><td>Supérieure à celle de la classe A et au plus égale à 1,50 m</td><td>Position approximative</td></tr>\n<tr><td><strong>C</strong></td><td>Supérieure à 1,50 m, ou classe inconnue</td><td>Position très incertaine</td></tr>\n</tbody></table>\n<p>Lorsque, dans l'emprise d'un projet, les réseaux sensibles enterrés ne sont pas connus en classe A, le responsable de projet doit, dans les cas prévus par la réglementation, faire réaliser des <strong>investigations complémentaires</strong> (IC) pour les localiser en classe A avant les travaux. À défaut, des clauses particulières doivent figurer dans le marché de travaux.</p>\n<p>La réglementation impose aussi aux exploitants d'améliorer progressivement la cartographie de leurs réseaux, avec des échéances fixées par les textes, et de cartographier en classe A les réseaux neufs sensibles. Un fond de plan commun de grande précision, le <strong>plan de corps de rue simplifié</strong> (PCRS), est constitué par les collectivités et les exploitants pour servir de support à ces cartographies.</p>"
      },
      {
       "titre": "Investigations complémentaires et marquage-piquetage",
       "contenu": "<p>Les <strong>investigations complémentaires</strong> combinent des techniques de <strong>détection sans fouille</strong> (détection électromagnétique, géoradar, étudiées dans le cours suivant) et, si nécessaire, des <strong>investigations intrusives</strong> (sondages, fouilles ponctuelles) pour localiser précisément les réseaux. Elles se concluent par un <strong>rapport</strong> et un <strong>plan géoréférencé</strong> des réseaux en classe A, transmis au responsable de projet et aux exploitants.</p>\n<p>Avant le démarrage des travaux, le <strong>marquage-piquetage</strong> matérialise au sol la position des réseaux : traits et symboles à la peinture, piquets, avec un code couleur normalisé selon la nature du réseau.</p>\n<table><thead><tr><th>Couleur</th><th>Réseau</th></tr></thead><tbody>\n<tr><td>Rouge</td><td>Électricité (basse, haute tension) et éclairage</td></tr>\n<tr><td>Jaune</td><td>Gaz combustible, hydrocarbures</td></tr>\n<tr><td>Orange</td><td>Produits chimiques</td></tr>\n<tr><td>Bleu</td><td>Eau potable</td></tr>\n<tr><td>Marron</td><td>Assainissement, eaux pluviales</td></tr>\n<tr><td>Violet</td><td>Chauffage et climatisation</td></tr>\n<tr><td>Vert</td><td>Télécommunications</td></tr>\n<tr><td>Blanc</td><td>Signalisation (feux tricolores, signalisation dynamique)</td></tr>\n<tr><td>Rose</td><td>Zone d'emprise multiréseaux</td></tr>\n</tbody></table>\n<p>Le marquage-piquetage est réalisé sous la responsabilité du responsable de projet, en présence ou avec l'information de l'exécutant, et fait l'objet d'un <strong>compte rendu</strong> signé.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire une situation de chantier. Projet : tranchée pour un réseau d'eau sur une rue. Le récépissé de l'exploitant gaz indique une conduite en classe B ; celui de l'opérateur télécoms, des fourreaux en classe C.<br>1) Le gaz est un réseau sensible connu seulement en classe B : des investigations complémentaires sont à prévoir dans les cas prévus par la réglementation, pour le localiser en classe A.<br>2) Les télécommunications sont un réseau non sensible : pas d'investigation obligatoire au même titre, mais une détection est utile pour éviter les coupures et les surcoûts.<br>3) Après investigation : plan géoréférencé, puis marquage en jaune (gaz) et en vert (télécoms) avant travaux, avec compte rendu signé.<br>4) Pendant les travaux : techniques douces (terrassement manuel ou par aspiration) à l'approche du réseau, selon le guide technique.</div>"
      },
      {
       "titre": "Compétences et certification",
       "contenu": "<p>La réglementation exige que les intervenants soient compétents :</p>\n<ul>\n<li>l'<strong>AIPR</strong> (autorisation d'intervention à proximité des réseaux) est délivrée par l'employeur aux salariés intervenant dans la préparation ou l'exécution des travaux, selon trois profils : <strong>concepteur</strong>, <strong>encadrant</strong>, <strong>opérateur</strong>. Elle repose sur une compétence validée, en général par un examen par questionnaire ou par certains diplômes et titres récents, et sa validité est limitée dans le temps ;</li>\n<li>les <strong>prestataires</strong> qui réalisent des détections de réseaux ou des géoréférencements dans ce cadre doivent être <strong>certifiés</strong>, la certification étant délivrée par un organisme accrédité et portant sur la détection, le géoréférencement, ou les deux.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un technicien géomètre qui réalise des marquages-piquetages ou suit des travaux de terrassement doit disposer d'une AIPR adaptée à sa fonction ; son employeur vérifie sa validité. Les sociétés de détection affichent leur certification dans leurs offres, car les maîtres d'ouvrage doivent faire appel à des prestataires certifiés.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un récépissé de DT ou de DICT n'est valable que pour l'emprise et la période déclarées. Si l'emprise change ou si les travaux sont reportés au-delà des délais prévus, une nouvelle déclaration est nécessaire.</div>"
      },
      {
       "titre": "Le géomètre dans la chaîne de prévention",
       "contenu": "<p>Le technicien géomètre intervient à plusieurs étapes de cette chaîne, souvent pour des donneurs d'ordre différents :</p>\n<ul>\n<li>pour le <strong>responsable de projet</strong> : lever topographique de l'emprise, consultation du guichet unique, report des plans des exploitants sur le fond de plan, investigations complémentaires, marquage-piquetage ;</li>\n<li>pour l'<strong>exploitant</strong> : géoréférencement de réseaux existants pour améliorer sa cartographie, récolement de réseaux neufs en tranchée ouverte ;</li>\n<li>pour l'<strong>exécutant</strong> : implantation des tranchées en tenant compte des réseaux marqués, contrôle de la position des ouvrages posés ;</li>\n<li>pour la <strong>collectivité</strong> : constitution et mise à jour du PCRS.</li>\n</ul>\n<p>Dans tous les cas, son travail se traduit par des plans géoréférencés précisant, pour chaque réseau, sa nature, sa position, sa profondeur estimée et sa classe de précision. Ces plans circulent ensuite entre tous les acteurs : une erreur de saisie ou de système de coordonnées peut avoir des conséquences graves sur un chantier situé à des kilomètres du bureau.</p>"
      }
     ],
     "points_cles": [
      "La réglementation anti-endommagement figure dans le Code de l'environnement et le guide technique (norme NF S70-003).",
      "Le guichet unique identifie les exploitants de réseaux pour une emprise de travaux.",
      "DT : par le responsable de projet à la conception ; DICT : par l'exécutant avant travaux ; ATU en cas d'urgence.",
      "Réseaux sensibles : gaz, électricité, hydrocarbures, chimie, chaleur notamment.",
      "Classe A : incertitude d'au plus 40 cm (rigide) ou 50 cm (flexible) ; B : jusqu'à 1,50 m ; C : au-delà ou inconnue.",
      "Les investigations complémentaires localisent en classe A les réseaux sensibles mal connus.",
      "Le marquage-piquetage utilise un code couleur normalisé : rouge électricité, jaune gaz, bleu eau potable, marron assainissement, vert télécoms.",
      "AIPR pour les intervenants, certification pour les prestataires de détection et de géoréférencement."
     ],
     "lexique": [
      {
       "terme": "Exploitant de réseau",
       "def": "Organisme qui gère un réseau et répond aux déclarations de travaux."
      },
      {
       "terme": "Responsable de projet",
       "def": "Personne pour le compte de laquelle les travaux sont réalisés, en général le maître d'ouvrage."
      },
      {
       "terme": "DT",
       "def": "Déclaration de projet de travaux, adressée aux exploitants au stade de la conception."
      },
      {
       "terme": "DICT",
       "def": "Déclaration d'intention de commencement de travaux, faite par l'exécutant avant les travaux."
      },
      {
       "terme": "Récépissé",
       "def": "Réponse d'un exploitant à une déclaration, avec plans et recommandations."
      },
      {
       "terme": "Réseau sensible",
       "def": "Réseau dont l'endommagement peut avoir des conséquences graves pour la sécurité."
      },
      {
       "terme": "Classe de précision A",
       "def": "Localisation d'un réseau avec une incertitude maximale de 40 cm (rigide) ou 50 cm (flexible)."
      },
      {
       "terme": "Investigations complémentaires",
       "def": "Opérations de localisation précise des réseaux avant travaux, par détection et éventuellement sondages."
      },
      {
       "terme": "Marquage-piquetage",
       "def": "Matérialisation au sol de la position des réseaux avant travaux."
      },
      {
       "terme": "AIPR",
       "def": "Autorisation d'intervention à proximité des réseaux délivrée par l'employeur."
      },
      {
       "terme": "PCRS",
       "def": "Plan de corps de rue simplifié : fond de plan précis et partagé des voies publiques."
      }
     ]
    },
    {
     "id": "bgeo-detection",
     "titre": "Détecter, géoréférencer et marquer les réseaux",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Expliquer le principe de la détection électromagnétique et de ses différents modes",
      "Expliquer le principe du géoradar et interpréter une hyperbole sur un radargramme",
      "Choisir une technique de détection selon la nature du réseau et du sol",
      "Organiser une opération de détection, de géoréférencement et de marquage",
      "Évaluer la fiabilité d'une détection et en rendre compte"
     ],
     "sections": [
      {
       "titre": "Partir de ce qui se voit",
       "contenu": "<p>La réglementation présentée dans le cours précédent impose de connaître la position des réseaux ; ce chapitre explique comment on la trouve. Avant d'allumer le moindre appareil, le détecteur exploite tout ce qui est visible et documenté :</p>\n<ul>\n<li>les <strong>plans des exploitants</strong>, joints aux récépissés de DT et DICT, qui indiquent la présence et le tracé approximatif des réseaux ;</li>\n<li>les <strong>affleurants</strong> : tampons de regards et de chambres, bouches à clé, coffrets et armoires, poteaux d'incendie, candélabres, compteurs, plaques de repérage, traces de tranchées anciennes dans l'enrobé ;</li>\n<li>les ouvrages accessibles : en ouvrant un regard depuis la surface, on observe les directions des canalisations, leur diamètre et leur profondeur.</li>\n</ul>\n<p>Cette étape oriente la détection : on sait quels réseaux chercher, où et de quelle nature (métallique ou non). Elle permet aussi de repérer les réseaux absents des plans, mais trahis par un affleurant.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un réseau se cherche entre deux affleurants connus. Plus on dispose de points de départ certains, plus la détection est fiable.</div>"
      },
      {
       "titre": "La détection électromagnétique",
       "contenu": "<p>Un courant électrique circulant dans un conducteur crée autour de lui un <strong>champ magnétique</strong>. Le <strong>récepteur</strong> (ou localisateur), muni d'antennes, mesure ce champ et en déduit la position du conducteur en plan et une estimation de sa profondeur. La méthode ne fonctionne que si un courant circule dans un élément <strong>conducteur</strong> : câble, canalisation métallique, ou fil traceur posé avec une canalisation plastique.</p>\n<table><thead><tr><th>Mode</th><th>Principe</th><th>Usage</th></tr></thead><tbody>\n<tr><td><strong>Passif</strong></td><td>Le récepteur capte les champs déjà présents : courant du réseau électrique (50 Hz), ondes radio de très basse fréquence réémises par les conducteurs</td><td>Balayage rapide d'une zone pour repérer les conducteurs présents ; ne permet pas d'identifier un réseau précis</td></tr>\n<tr><td><strong>Actif par connexion directe</strong></td><td>Un <strong>générateur</strong> (émetteur) est raccordé électriquement au réseau sur un affleurant (vanne, compteur, gaine métallique) et injecte un signal de fréquence choisie</td><td>Méthode la plus sûre pour suivre un réseau identifié</td></tr>\n<tr><td><strong>Actif par pince</strong></td><td>Une pince inductive placée autour d'un câble y induit le signal sans contact électrique</td><td>Câbles accessibles dans un coffret ou une chambre</td></tr>\n<tr><td><strong>Actif par induction</strong></td><td>Le générateur posé au sol au-dessus du réseau induit le signal à distance</td><td>Absence d'accès ; risque d'induire aussi les réseaux voisins</td></tr>\n<tr><td><strong>Sonde</strong> ou aiguille traceuse</td><td>Une petite sonde émettrice ou un jonc conducteur est poussé dans une canalisation non métallique depuis un regard</td><td>Canalisations en PVC, grès, béton, fourreaux vides</td></tr>\n</tbody></table>\n<p>Le récepteur indique la position par un <strong>maximum</strong> de signal (antennes horizontales, le signal est le plus fort au-dessus du réseau) ou par un <strong>minimum</strong> (antenne verticale, le signal s'annule à l'aplomb). Les deux modes doivent concorder ; s'ils divergent, le champ est déformé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le signal peut « sauter » sur un réseau voisin parallèle (couplage), surtout en mode induction ou à haute fréquence. On risque alors de marquer le mauvais réseau. La profondeur affichée n'est qu'une estimation, faussée par les champs perturbés, les coudes et les croisements.</div>"
      },
      {
       "titre": "Le géoradar",
       "contenu": "<p>Le <strong>géoradar</strong> émet dans le sol de courtes impulsions électromagnétiques de haute fréquence. Lorsqu'elles rencontrent un changement de nature du sous-sol (canalisation, cavité, couche de matériaux différents), une partie de l'énergie est réfléchie vers l'antenne. En déplaçant l'appareil, on obtient une image en coupe appelée <strong>radargramme</strong>. Un objet linéaire traversé perpendiculairement y apparaît sous la forme d'une <strong>hyperbole</strong>, dont le sommet correspond à la position et à la profondeur de l'objet.</p>\n<p>La profondeur se calcule à partir du temps de trajet aller-retour t de l'onde et de sa vitesse v dans le sol : <strong>profondeur = v × t ÷ 2</strong>. La vitesse dépend du sol (sable sec, argile humide) et se cale sur un objet de profondeur connue ou d'après la forme des hyperboles.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer une profondeur au géoradar. Le sommet d'une hyperbole apparaît à t = 12 ns (nanosecondes, aller-retour). La vitesse calée sur un regard voisin est v = 0,10 m/ns.<br>1) Profondeur = 0,10 × 12 ÷ 2 = 0,60 m.<br>2) Contrôle de vraisemblance : une canalisation de distribution à 0,60 m sous chaussée est plausible.<br>3) Si le sol change (passage d'un trottoir sablé à une chaussée sur grave), la vitesse change : refaire le calage.</div>\n<table><thead><tr><th>Atout du géoradar</th><th>Limite</th></tr></thead><tbody>\n<tr><td>Détecte les réseaux non métalliques sans accès</td><td>Pénétration très réduite dans les sols argileux ou saturés d'eau</td></tr>\n<tr><td>Donne une image de toute une coupe</td><td>Interprétation délicate, qui exige de l'expérience</td></tr>\n<tr><td>Basses fréquences : plus de profondeur</td><td>Mais moins de résolution ; hautes fréquences : l'inverse</td></tr>\n</tbody></table>"
      },
      {
       "titre": "Choisir et combiner les techniques",
       "contenu": "<table><thead><tr><th>Situation</th><th>Technique adaptée</th></tr></thead><tbody>\n<tr><td>Câble électrique ou télécom en cuivre</td><td>Électromagnétique passif puis actif (pince ou connexion)</td></tr>\n<tr><td>Conduite de gaz en acier</td><td>Électromagnétique actif par connexion sur un affleurant</td></tr>\n<tr><td>Conduite de gaz en polyéthylène avec fil traceur</td><td>Électromagnétique actif sur le fil traceur</td></tr>\n<tr><td>Collecteur d'assainissement en béton ou en PVC</td><td>Sonde poussée depuis un regard, géoradar</td></tr>\n<tr><td>Fourreaux vides, réseaux non métalliques sans accès</td><td>Géoradar</td></tr>\n<tr><td>Doute persistant sur un réseau sensible</td><td>Investigation intrusive : sondage manuel ou par aspiration</td></tr>\n</tbody></table>\n<p>La règle professionnelle est de <strong>croiser</strong> les méthodes : un réseau trouvé par deux techniques indépendantes, et cohérent avec ses affleurants et les plans de l'exploitant, est un résultat fiable. Un réseau détecté par une seule méthode, sans cohérence avec les affleurants, reste un résultat à confirmer, éventuellement par un sondage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les sociétés de détection utilisent de plus en plus des géoradars à antennes multiples, tractés ou poussés, qui balaient une bande de chaussée en continu et produisent des cartes de réseaux en trois dimensions, géoréférencées en temps réel grâce à un récepteur GNSS ou à une station totale.</div>"
      },
      {
       "titre": "Géoréférencer et marquer",
       "contenu": "<p>Une détection n'a de valeur que si elle est <strong>géoréférencée</strong> et <strong>transmise</strong>. Les points détectés (axe du réseau) sont marqués provisoirement au sol, puis levés en coordonnées dans le système officiel, avec une précision compatible avec la classe visée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déroulé d'une opération de détection sur une emprise de travaux.<br>1) Préparer : récépissés et plans des exploitants, emprise du projet, matériel (récepteur, générateur, géoradar, GNSS ou station totale), balisage, AIPR et autorisations.<br>2) Inventorier et lever les affleurants.<br>3) Balayer la zone en mode passif, en passages parallèles puis perpendiculaires, pour repérer tous les conducteurs.<br>4) Identifier chaque réseau en mode actif à partir d'un affleurant ; compléter au géoradar pour les réseaux non métalliques.<br>5) Marquer l'axe détecté à la peinture provisoire et lever les points : à chaque changement de direction, aux croisements et régulièrement en alignement droit ; estimer la profondeur.<br>6) Contrôler par un sondage ponctuel si nécessaire.<br>7) Restituer : plan géoréférencé indiquant chaque réseau, sa nature, la profondeur estimée et la classe de précision atteinte ; rapport décrivant les méthodes, le matériel, les conditions et les zones non concluantes.<br>8) Réaliser le marquage-piquetage définitif selon le code couleur et le guide technique, avec compte rendu signé.</div>\n<p>Le <strong>rapport</strong> est aussi important que le plan : il dit honnêtement ce qui n'a pas pu être détecté (sol défavorable, réseau sans accès, zone encombrée). Un réseau non détecté n'est pas un réseau absent.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne jamais conclure « pas de réseau » parce qu'un détecteur ne réagit pas. Une conduite en polyéthylène sans fil traceur est invisible au détecteur électromagnétique.</div>"
      },
      {
       "titre": "Évaluer la fiabilité du résultat",
       "contenu": "<p>Chaque tronçon de réseau restitué doit être qualifié. On distingue en pratique :</p>\n<table><thead><tr><th>Qualité du résultat</th><th>Conditions</th><th>Restitution</th></tr></thead><tbody>\n<tr><td>Fiable</td><td>Détection concordante par plusieurs méthodes, cohérente avec les affleurants, ou réseau vu en sondage</td><td>Tracé continu, classe de précision visée atteinte</td></tr>\n<tr><td>Probable</td><td>Une seule méthode, signal correct, cohérence partielle</td><td>Tracé signalé comme moins certain, classe déclassée si nécessaire</td></tr>\n<tr><td>Non concluant</td><td>Signal absent ou perturbé, sol défavorable, accès impossible</td><td>Zone hachurée ou commentée, recommandation de sondage</td></tr>\n</tbody></table>\n<p>La profondeur est la donnée la moins sûre : elle est toujours présentée comme une estimation, avec la mention de la méthode utilisée, et vérifiée par sondage lorsque l'enjeu le justifie. La classe de précision attribuée dépend du respect des exigences du guide technique pour la méthode de détection, le géoréférencement et les conditions de mesure ; le prestataire certifié en assume la responsabilité.</p>"
      }
     ],
     "points_cles": [
      "La détection commence par les plans des exploitants et l'inventaire des affleurants.",
      "Le détecteur électromagnétique localise un conducteur parcouru par un courant.",
      "Mode passif pour balayer, mode actif (connexion, pince, induction) pour identifier et suivre un réseau.",
      "Les canalisations non métalliques se détectent par sonde, fil traceur ou géoradar.",
      "Au géoradar, un réseau apparaît comme une hyperbole ; profondeur = v × t ÷ 2.",
      "Les sols argileux ou humides limitent fortement le géoradar.",
      "On croise les techniques ; un doute sur un réseau sensible se lève par un sondage.",
      "Le résultat est un plan géoréférencé avec classe de précision et un rapport qui signale les zones non concluantes."
     ],
     "lexique": [
      {
       "terme": "Affleurant",
       "def": "Élément visible en surface qui signale un réseau enterré : tampon, bouche à clé, coffret."
      },
      {
       "terme": "Récepteur (localisateur)",
       "def": "Appareil qui mesure le champ magnétique émis par un conducteur pour le localiser."
      },
      {
       "terme": "Générateur",
       "def": "Appareil qui injecte un signal de fréquence connue dans un réseau pour le détecter en mode actif."
      },
      {
       "terme": "Mode passif",
       "def": "Détection des champs déjà présents sur les conducteurs, sans générateur."
      },
      {
       "terme": "Couplage",
       "def": "Transfert du signal d'un réseau vers un réseau voisin, source d'erreur d'identification."
      },
      {
       "terme": "Sonde",
       "def": "Petit émetteur introduit dans une canalisation non métallique pour la localiser."
      },
      {
       "terme": "Fil traceur",
       "def": "Fil conducteur posé avec une canalisation non métallique pour permettre sa détection."
      },
      {
       "terme": "Géoradar",
       "def": "Appareil qui émet des ondes électromagnétiques dans le sol et enregistre leurs réflexions."
      },
      {
       "terme": "Radargramme",
       "def": "Image en coupe produite par le géoradar."
      },
      {
       "terme": "Investigation intrusive",
       "def": "Sondage ou fouille ponctuelle pour vérifier directement la présence et la position d'un réseau."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Analyser les documents professionnels",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bgeo-doc-fiches-reperes",
     "titre": "Lire les fiches de repères géodésiques et de nivellement",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Identifier les rubriques d'une fiche de point géodésique et d'une fiche de repère de nivellement",
      "Extraire les coordonnées et l'altitude utiles, dans le bon système",
      "Évaluer la fiabilité d'un repère à partir de son état et de sa date de visite",
      "Préparer un rattachement à partir de plusieurs fiches",
      "Rédiger une analyse de fiche structurée"
     ],
     "sections": [
      {
       "titre": "Deux types de fiches",
       "contenu": "<p>Les fiches signalétiques de l'IGN décrivent les points qui matérialisent le système national. Elles sont gratuites et consultables en ligne, et figurent souvent dans les dossiers d'épreuve parce qu'elles sont le point de départ de toute mission géoréférencée. On en distingue deux grandes familles.</p>\n<table><thead><tr><th>Fiche</th><th>Ce qu'elle garantit</th><th>Ce qu'elle ne garantit pas</th></tr></thead><tbody>\n<tr><td><strong>Point géodésique</strong> (borne, clocher, château d'eau, repère au sol, station permanente)</td><td>Les coordonnées planimétriques du point (et sa hauteur ellipsoïdale)</td><td>Souvent, une altitude de précision suffisante pour un nivellement précis</td></tr>\n<tr><td><strong>Repère de nivellement</strong> (rivet, console, repère cylindrique scellé dans un ouvrage)</td><td>L'altitude du repère dans le système NGF-IGN69 (ou IGN78 en Corse)</td><td>Des coordonnées planimétriques précises : sa position n'est donnée qu'approximativement, pour le retrouver</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> point géodésique pour la planimétrie, repère de nivellement pour l'altitude. Utiliser l'altitude d'un point géodésique pour un nivellement précis, ou la position approximative d'un repère de nivellement comme point d'appui planimétrique, sont deux erreurs classiques.</div>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "<p>Les rubriques varient selon le type de fiche et leur présentation évolue, mais on retrouve généralement :</p>\n<table><thead><tr><th>Rubrique</th><th>Contenu</th><th>Ce qu'on en tire</th></tr></thead><tbody>\n<tr><td>Identification</td><td>Nom ou matricule du point, commune, type de matérialisation</td><td>Désigner le point sans ambiguïté dans le dossier et le carnet</td></tr>\n<tr><td>Localisation</td><td>Description d'accès, croquis, photographies, coordonnées approchées</td><td>Retrouver le point sur le terrain</td></tr>\n<tr><td>Coordonnées</td><td>Système et réalisation (par exemple RGF93 v2b), coordonnées géographiques, coordonnées en projection (Lambert-93, CC), hauteur ellipsoïdale</td><td>Valeurs à saisir dans le carnet, dans le système du projet</td></tr>\n<tr><td>Altitude</td><td>Valeur, système (NGF-IGN69), parfois type d'altitude et précision</td><td>Valeur de départ d'un nivellement</td></tr>\n<tr><td>Qualité</td><td>Précision ou ordre du point, méthode de détermination</td><td>Savoir si le point convient à la précision demandée</td></tr>\n<tr><td>Historique</td><td>Date de détermination, date de la dernière visite, état constaté (bon, endommagé, détruit, non retrouvé)</td><td>Évaluer la fiabilité actuelle du point</td></tr>\n</tbody></table>\n<p>Le <strong>support</strong> d'un repère de nivellement est l'ouvrage dans lequel il est scellé (église, pont, mairie, mur de soutènement). Sa stabilité conditionne celle du repère : un repère sur un mur de clôture ou sur un ouvrage récemment rénové est plus suspect qu'un repère sur une église ancienne.</p>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une fiche de repère.<br>1) Identifier le type de fiche : point géodésique ou repère de nivellement.<br>2) Relever l'identification exacte (matricule complet) et la commune.<br>3) Repérer le système et la réalisation des coordonnées ou de l'altitude, et vérifier qu'ils correspondent à ceux du cahier des charges.<br>4) Extraire les valeurs utiles avec toutes leurs décimales, en précisant leur unité.<br>5) Lire l'état et la date de dernière visite ; signaler tout point ancien, endommagé ou non retrouvé.<br>6) Lire la description d'accès et le croquis : le point est-il accessible (propriété privée, voie à fort trafic, hauteur) ?<br>7) Conclure : le point est-il utilisable pour la mission, et quel contrôle prévoir sur place ?</div>\n<p>Dans une épreuve, on attend que chaque affirmation s'appuie sur une rubrique de la fiche : « la fiche indique que… », « la date de dernière visite étant ancienne, il convient de… ». On ne recopie pas la fiche : on en extrait ce qui sert la mission.</p>"
      },
      {
       "titre": "Les pièges",
       "contenu": "<ul>\n<li><strong>Confondre les systèmes</strong> : une fiche peut donner des coordonnées dans plusieurs projections (Lambert-93 et une zone CC) ; la valeur à retenir est celle du système du projet. Les ordres de grandeur aident : en Lambert-93, N est compris entre environ 6 000 000 et 7 200 000 m en métropole ; dans les projections CC, E est voisin de 1 700 000 m et N vaut environ (numéro de zone - 41) millions de mètres plus 200 000 m au centre de la zone, soit environ 8 200 000 m en CC49.</li>\n<li><strong>Confondre altitude et hauteur ellipsoïdale</strong> : l'écart est d'une cinquantaine de mètres en France.</li>\n<li><strong>Ignorer l'état du repère</strong> : un repère « non retrouvé » lors de la dernière visite ne peut pas servir sans vérification.</li>\n<li><strong>Prendre une position approchée pour une position précise</strong> : les coordonnées d'un repère de nivellement servent à le trouver, pas à orienter une station.</li>\n<li><strong>Utiliser un seul repère</strong> : un repère isolé, même en bon état, ne permet pas de détecter s'il a bougé. On rattache sur deux repères au moins, ou on contrôle par une autre méthode.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les coordonnées d'un même point peuvent différer de quelques centimètres entre deux réalisations du RGF93. Mélanger dans un même projet des points issus de réalisations différentes introduit des écarts inexpliqués.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier d'une mission de lever avant construction d'un gymnase comporte deux fiches. Les valeurs ci-dessous sont fictives et servent uniquement à la démonstration.</p>\n<h4>Fiche 1 : repère de nivellement</h4>\n<table><thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>Matricule</td><td>Repère fictif « RN-EX-27 »</td></tr>\n<tr><td>Type</td><td>Rivet scellé horizontalement</td></tr>\n<tr><td>Support et localisation</td><td>Culée nord du pont routier sur le ruisseau, face aval, à 0,40 m au-dessus du trottoir ; croquis joint</td></tr>\n<tr><td>Altitude</td><td>146,218 m, système NGF-IGN69</td></tr>\n<tr><td>Coordonnées approchées</td><td>Indiquées à environ 10 m près</td></tr>\n<tr><td>Dernière visite</td><td>Il y a plus de quinze ans ; état « bon »</td></tr>\n</tbody></table>\n<h4>Fiche 2 : point géodésique</h4>\n<table><thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>Nom</td><td>Point fictif « GEO-EX-04 », borne en béton avec repère central</td></tr>\n<tr><td>Localisation</td><td>Bord de champ, à 3 m d'un chemin rural ; photographies jointes</td></tr>\n<tr><td>Coordonnées</td><td>RGF93 v2b, projection Lambert-93 et projection CC, valeurs au millimètre</td></tr>\n<tr><td>Altitude</td><td>Indiquée au centimètre, obtenue par une méthode moins précise que le nivellement</td></tr>\n<tr><td>Dernière visite</td><td>Récente ; état « bon »</td></tr>\n</tbody></table>\n<p>Le cahier des charges demande un lever en RGF93 v2b, projection CC, altitudes NGF-IGN69 au millimètre pour les seuils et les réseaux.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Nature des documents.</strong> La fiche 1 est une fiche de repère de nivellement : elle garantit une altitude NGF-IGN69 (146,218 m) mais seulement une position approchée. La fiche 2 est une fiche de point géodésique : elle garantit des coordonnées planimétriques précises en RGF93 v2b, mais son altitude, donnée au centimètre, n'a pas la précision d'un repère de nivellement.</p>\n<p><strong>Adéquation au cahier des charges.</strong> Le système demandé (RGF93 v2b, projection CC) est disponible sur la fiche 2 : on retiendra les coordonnées en CC et non celles en Lambert-93. L'altimétrie au millimètre impose de partir du repère RN-EX-27 par nivellement direct et non de l'altitude du point géodésique.</p>\n<p><strong>Fiabilité.</strong> La dernière visite du repère RN-EX-27 est ancienne, et son support est un pont, ouvrage qui a pu être réparé. Le repère est donc à contrôler : soit par un cheminement vers un second repère de nivellement (à rechercher sur le site de l'IGN), soit au minimum par comparaison avec une altitude GNSS, qui détectera une erreur grossière mais pas un écart de quelques centimètres. Le point GEO-EX-04, récemment visité, est a priori fiable ; on le contrôlera en le mesurant en GNSS RTK (écart attendu de l'ordre de quelques centimètres).</p>\n<p><strong>Accès et sécurité.</strong> Le rivet est sur la face aval d'une culée, à 0,40 m au-dessus du trottoir : la mire peut y être posée depuis le trottoir, sans descendre vers le ruisseau ; la proximité de la circulation impose un balisage. La borne est en bord de champ : prévoir l'accord de l'exploitant si l'accès traverse une culture.</p>\n<p><strong>Conclusion.</strong> Planimétrie : rattachement par GNSS en RTK réseau, contrôlé sur GEO-EX-04 en coordonnées CC. Altimétrie : cheminement de nivellement direct encadré entre RN-EX-27 et un second repère, ou cheminement fermé sur RN-EX-27 complété par un contrôle indépendant.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lorsqu'un repère a disparu ou s'avère déplacé, le technicien le signale : l'IGN propose un moyen de remonter ces informations, ce qui améliore la qualité des fiches pour tous les utilisateurs.</div>"
      }
     ],
     "points_cles": [
      "Point géodésique : coordonnées planimétriques ; repère de nivellement : altitude.",
      "Toujours vérifier le système et la réalisation des coordonnées par rapport au cahier des charges.",
      "Ne retenir que les valeurs du système du projet, avec toutes leurs décimales.",
      "La date de dernière visite et l'état renseignent sur la fiabilité actuelle du point.",
      "La stabilité du support conditionne celle du repère.",
      "Un repère isolé ne se contrôle pas : prévoir un second repère ou une méthode indépendante.",
      "Une analyse de fiche justifie chaque conclusion par une rubrique du document."
     ],
     "lexique": [
      {
       "terme": "Fiche signalétique",
       "def": "Document qui décrit un point de référence : identification, localisation, valeurs, état."
      },
      {
       "terme": "Matricule",
       "def": "Identifiant unique d'un point ou d'un repère."
      },
      {
       "terme": "Rivet de nivellement",
       "def": "Repère métallique scellé dans un ouvrage, dont la tête porte l'altitude publiée."
      },
      {
       "terme": "Support",
       "def": "Ouvrage dans lequel un repère est scellé."
      },
      {
       "terme": "Réalisation",
       "def": "Version d'un système géodésique, matérialisée par un jeu de coordonnées de points."
      },
      {
       "terme": "Dernière visite",
       "def": "Date à laquelle l'état du point a été constaté pour la dernière fois."
      },
      {
       "terme": "Coordonnées approchées",
       "def": "Position indicative, suffisante pour retrouver un point mais pas pour mesurer."
      },
      {
       "terme": "Rattachement",
       "def": "Opération qui relie un lever ou un chantier au système officiel par des points connus."
      }
     ]
    },
    {
     "id": "bgeo-doc-carnet",
     "titre": "Exploiter un carnet de terrain et un listing de points",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Identifier les informations d'un carnet de terrain de station totale et d'un listing de coordonnées",
      "Vérifier la cohérence d'une station : références, V0, fermeture",
      "Recalculer un point du listing à partir des observations",
      "Détecter une faute dans les observations et proposer sa correction",
      "Rédiger un avis argumenté sur la validité d'un fichier de mesures"
     ],
     "sections": [
      {
       "titre": "Les documents issus des mesures",
       "contenu": "<p>Les instruments enregistrent les mesures dans un <strong>carnet électronique</strong> (ou contrôleur de terrain). Au bureau, on en extrait plusieurs documents que l'on retrouve dans les dossiers professionnels et d'épreuve :</p>\n<table><thead><tr><th>Document</th><th>Contenu</th><th>Usage</th></tr></thead><tbody>\n<tr><td><strong>Carnet d'observations</strong></td><td>Pour chaque station : point de station, hauteur d'instrument, références visées ; pour chaque visée : matricule, code, Hz, V, Di, hauteur de prisme</td><td>Données brutes, contrôle des mesures</td></tr>\n<tr><td><strong>Listing de coordonnées</strong> (fichier de points)</td><td>Matricule, E, N, altitude, code</td><td>Import dans le logiciel de dessin, implantation</td></tr>\n<tr><td><strong>Rapport de calcul</strong></td><td>Calcul des stations (V0, résidus), fermetures, compensations</td><td>Preuve de la qualité du calcul</td></tr>\n<tr><td><strong>Croquis de terrain</strong></td><td>Dessin à main levée avec matricules et annotations</td><td>Compléter et vérifier le dessin</td></tr>\n</tbody></table>\n<p>Les formats varient selon les constructeurs et les logiciels, mais les informations sont toujours les mêmes. Savoir les lire permet de contrôler le travail d'un collègue, de comprendre une anomalie sur un plan, ou de refaire un calcul manuellement.</p>"
      },
      {
       "titre": "Vocabulaire et conventions",
       "contenu": "<ul>\n<li><strong>ST</strong> ou station : point où l'instrument est installé ; <strong>hi</strong> : hauteur d'instrument.</li>\n<li><strong>Référence</strong> : point connu visé pour orienter ; la lecture Hz correspondante sert au calcul du V0.</li>\n<li><strong>Hz</strong> : lecture horizontale en gon ; <strong>V</strong> : angle zénithal en gon ; <strong>Di</strong> : distance inclinée ; <strong>Dh</strong> : distance horizontale.</li>\n<li><strong>hp</strong> (ou hauteur de réflecteur) : hauteur du prisme au-dessus du point visé.</li>\n<li><strong>Code</strong> : nature du point, selon la bibliothèque du cabinet (par exemple BORD pour bordure, REG pour regard, ARB pour arbre).</li>\n<li><strong>Fermeture</strong> de station : écart entre deux lectures sur la référence, en début et en fin de station.</li>\n</ul>\n<p>Les formules à mobiliser ont été établies dans les chapitres de calcul : Dh = Di × sin V ; ΔH = Di × cos V + hi - hp ; G = V0 + Hz ; ΔE = Dh × sin G ; ΔN = Dh × cos G.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un listing de coordonnées est un résultat ; le carnet d'observations est la preuve. En cas de doute sur un point, c'est au carnet qu'il faut remonter.</div>"
      },
      {
       "titre": "Méthode d'analyse pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un carnet et son listing.<br>1) <strong>Identifier</strong> l'affaire, la date, l'instrument, le système de coordonnées.<br>2) <strong>Contrôler la station</strong> : coordonnées de la station et de la référence, hauteur d'instrument, V0 ; s'il y a plusieurs références, comparer les V0 ou les résidus.<br>3) <strong>Contrôler la fermeture</strong> de station (référence revisée en fin de station).<br>4) <strong>Parcourir les observations</strong> : continuité des matricules, cohérence des codes, valeurs de V (proches de 100 gon pour un terrain plat), hauteurs de prisme et leurs changements.<br>5) <strong>Recalculer au moins un point</strong> à la main et le comparer au listing.<br>6) <strong>Contrôler la vraisemblance</strong> des altitudes et positions : points de même nature à des altitudes voisines, distances cohérentes avec le croquis.<br>7) <strong>Conclure</strong> : points validés, points douteux, corrections proposées, mesures à refaire.</div>\n<p>Cette démarche suit le principe vu dans le cours sur les erreurs : chercher d'abord les fautes, puis apprécier la précision.</p>"
      },
      {
       "titre": "Les pièges",
       "contenu": "<ul>\n<li><strong>Hauteur de prisme</strong> modifiée sur le terrain sans mise à jour du carnet, ou mise à jour oubliée au retour à la hauteur normale : toutes les altitudes suivantes sont décalées de la même valeur.</li>\n<li><strong>Mauvaise référence</strong> : une erreur de matricule sur la référence fait tourner tous les points de la station autour d'elle.</li>\n<li><strong>Codes incohérents</strong> : un point codé ARB au milieu d'une ligne de bordure crée une rupture dans le dessin automatique.</li>\n<li><strong>Doublons de matricules</strong> : deux points portant le même numéro ; le logiciel en écrase un.</li>\n<li><strong>Unités</strong> : angles en degrés au lieu de gon, distances en pieds sur un instrument mal paramétré.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une erreur de hauteur de prisme ne se voit pas en planimétrie. Les points sont à la bonne place sur le plan ; seules leurs altitudes sont fausses, ce qui fausse les courbes de niveau, les pentes et les cubatures.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Extrait du carnet d'un lever de rue (valeurs fictives). Système : coordonnées locales de chantier rattachées, altitudes NGF-IGN69.</p>\n<h4>En-tête de station</h4>\n<table><thead><tr><th>Élément</th><th>Valeur</th></tr></thead><tbody>\n<tr><td>Station ST1</td><td>E = 2 541,218 ; N = 7 385,402 ; Z = 210,415</td></tr>\n<tr><td>Hauteur d'instrument</td><td>hi = 1,552 m</td></tr>\n<tr><td>Référence R</td><td>E = 2 610,774 ; N = 7 452,115 ; lecture Hz = 18,2410 gon</td></tr>\n<tr><td>Fermeture en fin de station</td><td>Lecture sur R : 18,2416 gon</td></tr>\n</tbody></table>\n<h4>Observations</h4>\n<table><thead><tr><th>Matricule</th><th>Code</th><th>Hz (gon)</th><th>V (gon)</th><th>Di (m)</th><th>hp (m)</th></tr></thead><tbody>\n<tr><td>1001</td><td>BORD</td><td>143,5872</td><td>99,1520</td><td>37,850</td><td>1,800</td></tr>\n<tr><td>1002</td><td>REG</td><td>150,2210</td><td>99,4546</td><td>41,205</td><td>1,800</td></tr>\n<tr><td>1003</td><td>ARB</td><td>162,0040</td><td>98,7700</td><td>29,330</td><td>2,300</td></tr>\n<tr><td>1004</td><td>BORD</td><td>170,1180</td><td>99,2150</td><td>33,410</td><td>2,300</td></tr>\n</tbody></table>\n<h4>Listing calculé</h4>\n<table><thead><tr><th>Matricule</th><th>E</th><th>N</th><th>Z</th><th>Code</th></tr></thead><tbody>\n<tr><td>1001</td><td>2 554,777</td><td>7 350,068</td><td>210,671</td><td>BORD</td></tr>\n<tr><td>1002</td><td>2 551,898</td><td>7 345,607</td><td>210,520</td><td>REG</td></tr>\n<tr><td>1003</td><td>2 543,477</td><td>7 356,165</td><td>210,234</td><td>ARB</td></tr>\n<tr><td>1004</td><td>2 539,537</td><td>7 352,037</td><td>210,079</td><td>BORD</td></tr>\n</tbody></table>\n<p>Annotation du croquis : « 1003 : arbre derrière la haie, canne montée à 2,30 ; reprise à 1,80 ensuite ».</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Station.</strong> G<sub>ST1-R</sub> = arctan(69,556 ÷ 66,713) ≈ 51,3280 gon ; V0 = 51,3280 - 18,2410 = 33,0870 gon. La fermeture de station vaut 18,2416 - 18,2410 = 0,6 mgon : l'instrument n'a pas bougé de façon significative pendant la station. Une seule référence ayant été visée, l'orientation n'est pas contrôlée par une seconde référence : c'est une faiblesse à signaler.</p>\n<p><strong>Recalcul du point 1001.</strong> G = 33,0870 + 143,5872 = 176,6742 gon ; Dh = 37,850 × sin(99,1520) ≈ 37,847 m ; ΔE ≈ +13,559 ; ΔN ≈ -35,334 ; E ≈ 2 554,777 ; N ≈ 7 350,068 ; ΔH = 37,850 × cos(99,1520) + 1,552 - 1,800 ≈ 0,504 - 0,248 = +0,256 m ; Z ≈ 210,671. Le listing est conforme au carnet.</p>\n<p><strong>Vraisemblance des altitudes.</strong> Les points 1001 et 1004 sont tous deux des hauts de bordure d'une même rue, à une quinzaine de mètres l'un de l'autre. Le listing donne 210,671 et 210,079 : un écart de 0,59 m est invraisemblable pour une bordure de rue peu pentue, alors que le regard 1002, situé entre les deux, est à 210,520.</p>\n<p><strong>Recherche de la faute.</strong> Le carnet indique hp = 2,300 m pour 1004, alors que le croquis précise que la canne a été ramenée à 1,800 m après l'arbre. La hauteur n'a pas été mise à jour dans le carnet. Correction : Z<sub>1004</sub> = 210,079 + (2,300 - 1,800) = 210,579 m. L'écart avec 1001 devient 9 cm, cohérent avec une légère pente de la rue. La position planimétrique de 1004 n'est pas affectée.</p>\n<p><strong>Conclusion.</strong> Listing validé pour 1001 à 1003 ; altitude de 1004 à corriger à 210,579 m, correction tracée dans le dossier avec sa justification (croquis). Recommandations : viser au moins deux références par station ; vérifier systématiquement la hauteur de prisme après chaque changement ; remesurer un point de contrôle en fin de station pour détecter ce type de faute sur le terrain.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la correction est faite dans le logiciel de calcul, en modifiant la hauteur de prisme de l'observation, et non en changeant directement l'altitude dans le listing. Le fichier brut reste intact, et la modification est tracée.</div>"
      },
      {
       "titre": "Présenter une analyse de fichier de mesures",
       "contenu": "<p>À l'écrit comme en entreprise, une analyse de carnet se présente de façon ordonnée, pour qu'un lecteur puisse vérifier chaque conclusion :</p>\n<table><thead><tr><th>Partie</th><th>Contenu attendu</th></tr></thead><tbody>\n<tr><td>Contexte</td><td>Affaire, instrument, système, nombre de stations et de points</td></tr>\n<tr><td>Contrôle des stations</td><td>V0, résidus sur les références, fermetures, avec les valeurs chiffrées</td></tr>\n<tr><td>Contrôle des points</td><td>Point recalculé, comparaison au listing, vraisemblance des altitudes et positions</td></tr>\n<tr><td>Anomalies</td><td>Description, cause identifiée et preuve (croquis, point de contrôle)</td></tr>\n<tr><td>Décisions</td><td>Points validés, corrigés, à remesurer ; recommandations pour les prochaines interventions</td></tr>\n</tbody></table>\n<p>Les calculs figurent avec leurs formules et leurs unités, les résultats avec le bon nombre de décimales (quatre en gon, trois en mètres). Une conclusion sans valeur chiffrée (« la station semble correcte ») n'a pas de poids : on écrit « la fermeture de 0,6 mgon est compatible avec la précision de l'instrument ».</p>"
      }
     ],
     "points_cles": [
      "Le carnet d'observations est la preuve, le listing de coordonnées en est le résultat.",
      "On contrôle d'abord la station : coordonnées, hauteur d'instrument, V0, fermeture.",
      "Recalculer au moins un point à la main permet de valider la chaîne de calcul.",
      "La vraisemblance des altitudes entre points de même nature révèle les fautes de hauteur de prisme.",
      "Une erreur de hauteur de prisme n'affecte que les altitudes.",
      "Une correction se justifie par un document (croquis, contrôle) et se fait sur les observations, de façon tracée.",
      "Une analyse se conclut par les points validés, les points corrigés et les recommandations."
     ],
     "lexique": [
      {
       "terme": "Carnet électronique",
       "def": "Appareil ou logiciel de terrain qui enregistre les observations de l'instrument."
      },
      {
       "terme": "Carnet d'observations",
       "def": "Liste des mesures brutes par station : Hz, V, Di, hauteurs, codes."
      },
      {
       "terme": "Listing de coordonnées",
       "def": "Fichier des points calculés avec matricule, E, N, Z et code."
      },
      {
       "terme": "Rapport de calcul",
       "def": "Document qui présente les calculs de stations, les fermetures et les compensations."
      },
      {
       "terme": "Fermeture de station",
       "def": "Écart entre les lectures sur la référence en début et en fin de station."
      },
      {
       "terme": "Vraisemblance",
       "def": "Cohérence d'un résultat avec ce que l'on sait du terrain et des objets mesurés."
      },
      {
       "terme": "Matricule",
       "def": "Numéro unique attribué à un point mesuré."
      },
      {
       "terme": "Doublon",
       "def": "Deux points portant le même matricule dans un même fichier."
      }
     ]
    },
    {
     "id": "bgeo-doc-foncier",
     "titre": "Analyser un dossier foncier : acte, cadastre, procès-verbal de bornage",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Repérer dans un acte de propriété les informations utiles au géomètre",
      "Lire un extrait cadastral et un relevé de propriété",
      "Analyser la structure et la portée d'un procès-verbal de bornage",
      "Confronter les documents fonciers entre eux et avec un lever récent",
      "Formuler des conclusions prudentes, dans les limites du rôle du technicien"
     ],
     "sections": [
      {
       "titre": "Les trois documents de base",
       "contenu": "<p>Une mission foncière commence presque toujours par l'analyse d'un dossier qui réunit trois types de documents, dont la valeur n'est pas la même.</p>\n<table><thead><tr><th>Document</th><th>Auteur</th><th>Informations utiles</th><th>Valeur</th></tr></thead><tbody>\n<tr><td><strong>Acte de propriété</strong> (extrait)</td><td>Notaire</td><td>Identité des propriétaires, <strong>désignation</strong> du bien (commune, références cadastrales, lieu-dit, contenance), <strong>origine de propriété</strong>, servitudes, plans annexés éventuels</td><td>Titre juridique ; la description des limites y est souvent sommaire</td></tr>\n<tr><td><strong>Extrait du plan cadastral</strong> et <strong>relevé de propriété</strong></td><td>Administration fiscale</td><td>Forme et numéro des parcelles, voisins, contenances, titulaires des droits</td><td>Fiscale et indicative</td></tr>\n<tr><td><strong>Procès-verbal de bornage</strong> et son plan</td><td>Géomètre-expert et parties</td><td>Sommets, bornes, cotes, coordonnées, signataires</td><td>Fixe définitivement la limite entre les signataires et leurs ayants droit</td></tr>\n</tbody></table>\n<p>Le travail d'analyse consiste à extraire de chaque document ce qui sert la mission, à les <strong>confronter</strong> entre eux et avec la réalité du terrain, et à signaler les concordances et les discordances.</p>"
      },
      {
       "titre": "Structure d'un procès-verbal de bornage",
       "contenu": "<p>Un procès-verbal de bornage suit un plan assez constant :</p>\n<ol>\n<li><strong>En-tête</strong> : cabinet du géomètre-expert, références du dossier, date.</li>\n<li><strong>Objet</strong> : requérant, limites à définir, parcelles concernées avec leurs références cadastrales.</li>\n<li><strong>Parties</strong> : propriétaires convoqués, présents ou représentés, absents.</li>\n<li><strong>Documents analysés</strong> : titres, plans anciens, bornages antérieurs, cadastre.</li>\n<li><strong>Constats sur le terrain</strong> : clôtures, murs, bornes existantes, signes de possession.</li>\n<li><strong>Définition de la limite</strong> : description des sommets et des segments, nature des repères posés ou reconnus, cotes entre sommets et vers des éléments fixes.</li>\n<li><strong>Accord et signatures</strong> des parties et du géomètre-expert.</li>\n<li><strong>Plan annexé</strong>, avec le tableau des coordonnées des sommets et le système utilisé.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un procès-verbal de bornage ne vaut qu'entre les propriétés et les limites qu'il désigne. Il ne fixe pas les autres limites de la parcelle.</div>"
      },
      {
       "titre": "Méthode d'analyse pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un dossier foncier.<br>1) <strong>Identifier le bien</strong> : commune, section, numéro, propriétaires ; vérifier la concordance entre l'acte et le relevé de propriété.<br>2) <strong>Lister les limites</strong> de la parcelle et, pour chacune, le document qui la définit : procès-verbal de bornage, plan de division, ou seulement le cadastre.<br>3) <strong>Extraire les données métriques</strong> : cotes, coordonnées et système, surfaces, en notant leur origine.<br>4) <strong>Comparer les surfaces</strong> : contenance cadastrale, surface d'un plan antérieur, surface calculée ; expliquer les écarts.<br>5) <strong>Confronter au terrain</strong> : bornes retrouvées ou non, position des clôtures par rapport aux limites définies.<br>6) <strong>Conclure</strong> : ce qui est établi, ce qui reste incertain, ce que le géomètre-expert devra trancher ou proposer.</div>\n<p>Le technicien formule des constats et des propositions. Il n'affirme jamais qu'une limite « est » à tel endroit lorsqu'aucun document contradictoire ne l'a fixée : cette appréciation relève du géomètre-expert.</p>"
      },
      {
       "titre": "Les pièges",
       "contenu": "<ul>\n<li><strong>Croire la clôture</strong> : la clôture est un indice, pas la limite.</li>\n<li><strong>Croire le cadastre</strong> : ses limites et contenances sont indicatives.</li>\n<li><strong>Étendre un bornage</strong> à des limites qu'il ne concerne pas.</li>\n<li><strong>Oublier le système</strong> des coordonnées d'un plan ancien : un procès-verbal établi dans un ancien système ou en coordonnées locales doit être transformé avant comparaison avec un lever actuel ; ce sont les cotes entre bornes qui permettent de contrôler la transformation.</li>\n<li><strong>Négliger les servitudes</strong> mentionnées dans l'acte : un droit de passage ou une canalisation peut contraindre un projet.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'écart entre une contenance cadastrale et une surface calculée n'est pas une erreur à « corriger ». C'est une donnée à expliquer : origine et échelle du plan cadastral, limites non bornées, arrondis.</div>"
      },
      {
       "titre": "Exemple commenté : le dossier",
       "contenu": "<p>Un propriétaire envisage de construire un garage le long de sa limite est. Le dossier (fictif) contient :</p>\n<h4>Extrait de l'acte de vente</h4>\n<p>« Une maison d'habitation avec jardin, cadastrée section AC numéro 214, lieu-dit Les Vignes, pour une contenance de 8 a 52 ca. » L'acte mentionne une servitude de passage de canalisation d'eaux pluviales au profit de la parcelle AC 215, sans en préciser le tracé.</p>\n<h4>Relevé de propriété</h4>\n<p>Parcelle AC 214 ; contenance 852 m<sup>2</sup> ; titulaires conformes à l'acte.</p>\n<h4>Procès-verbal de bornage (établi une quinzaine d'années plus tôt)</h4>\n<table><thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>Objet</td><td>Limite entre AC 214 (requérant) et AC 215 (voisin est) uniquement</td></tr>\n<tr><td>Signataires</td><td>Les deux propriétaires de l'époque et le géomètre-expert</td></tr>\n<tr><td>Sommets</td><td>B2 et B3, bornes plastiques posées ; distance B2-B3 : 24,62 m</td></tr>\n<tr><td>Plan annexé</td><td>Coordonnées des sommets dans un système local de chantier ; surface de AC 214 calculée : 861 m<sup>2</sup>, dont les autres limites sont décrites comme « limites apparentes non bornées »</td></tr>\n</tbody></table>\n<h4>Lever récent réalisé par le cabinet</h4>\n<p>La borne B2 est retrouvée. La borne B3 n'est pas retrouvée (emplacement couvert par une allée bétonnée). La clôture grillagée entre les deux propriétés est parallèle à la ligne B2-B3 et située à 0,40 m à l'est de cette ligne, côté AC 215. Le projet de garage prévoit un mur à 1,00 m de la clôture, côté AC 214.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Identification.</strong> L'acte et le relevé de propriété concordent sur la parcelle (AC 214), la contenance (8 a 52 ca, soit 852 m<sup>2</sup>) et les propriétaires.</p>\n<p><strong>Limite est.</strong> Elle a fait l'objet d'un bornage amiable signé entre les propriétaires de AC 214 et de AC 215. Elle est donc définitivement fixée par la ligne B2-B3 et s'impose aux propriétaires actuels, ayants droit des signataires. Les autres limites de AC 214 ne sont pas bornées : le procès-verbal ne les définit pas.</p>\n<p><strong>Surfaces.</strong> La surface de 861 m<sup>2</sup> du plan de bornage dépasse la contenance cadastrale de 9 m<sup>2</sup> (environ 1 %). Cet écart est faible et s'explique par l'imprécision du plan cadastral ; il est d'autant moins significatif que trois limites ne sont pas bornées.</p>\n<p><strong>Confrontation au terrain.</strong> La borne B3 doit être rétablie par le géomètre-expert à partir de B2 et des données du procès-verbal : la distance B2-B3 (24,62 m) permet, avec un second élément du plan, de contrôler la transformation des coordonnées locales dans le système du lever. La clôture est à 0,40 m à l'est de la limite, sur AC 215 : la bande de 0,40 m entre la limite et la clôture appartient au requérant, même si elle est clôturée côté voisin. C'est un constat à signaler, sans conclure sur d'éventuels effets d'une possession prolongée, qui relèvent du juge.</p>\n<p><strong>Conséquences pour le projet.</strong> Le mur du garage, à 1,00 m de la clôture, serait à 1,40 m de la limite juridique. La distance aux limites doit être vérifiée par rapport au règlement d'urbanisme applicable, en prenant la limite B2-B3 et non la clôture. La servitude d'eaux pluviales au profit de AC 215 doit être localisée (recherche du tracé, détection) avant de fixer l'emprise du garage.</p>\n<p><strong>Conclusion.</strong> Limite est établie et opposable ; rétablissement de B3 nécessaire ; écart clôture-limite à porter à la connaissance du client ; servitude à localiser ; autres limites non bornées, un bornage pouvant être proposé si le projet s'en approche.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> ce type d'analyse est remis au géomètre-expert sous forme d'une note et d'un plan de confrontation (lever, limites du procès-verbal, cadastre superposés), qui sert de base à son conseil au client.</div>"
      },
      {
       "titre": "Rédiger une note d'analyse foncière",
       "contenu": "<p>La note remise au géomètre-expert, ou rédigée en réponse à une question d'épreuve, suit un ordre qui va des faits établis vers les propositions :</p>\n<ol>\n<li><strong>Le bien</strong> : désignation, propriétaires, concordance des documents.</li>\n<li><strong>Les limites</strong> : pour chacune, le document qui la définit et sa portée (bornée, issue d'une division, seulement cadastrale).</li>\n<li><strong>Les surfaces</strong> : valeurs et origines, écarts et explications.</li>\n<li><strong>Le terrain</strong> : bornes retrouvées, clôtures, constructions, avec les écarts mesurés.</li>\n<li><strong>Les contraintes</strong> : servitudes, règles d'urbanisme à vérifier.</li>\n<li><strong>Les propositions</strong> : rétablissement de bornes, bornage complémentaire, recherches à mener.</li>\n</ol>\n<p>Le vocabulaire doit être exact : on « constate » un écart, on « propose » une limite, le géomètre-expert « fixe » une limite avec l'accord des parties, le juge « tranche » un litige. Cette précision protège le cabinet et le client.</p>"
      }
     ],
     "points_cles": [
      "L'acte fournit la désignation, l'origine de propriété et les servitudes ; le cadastre est indicatif ; le procès-verbal de bornage fixe la limite.",
      "Un procès-verbal de bornage ne vaut que pour les limites et les parties qu'il désigne.",
      "Chaque limite d'une parcelle doit être rattachée au document qui la définit.",
      "Les écarts de surface s'expliquent, ils ne se corrigent pas.",
      "Les coordonnées d'un document ancien se transforment et se contrôlent par les cotes entre bornes.",
      "Une clôture décalée de la limite est un constat à signaler, pas une limite.",
      "Le technicien constate et propose ; le géomètre-expert apprécie et décide."
     ],
     "lexique": [
      {
       "terme": "Désignation",
       "def": "Partie de l'acte qui décrit le bien : situation, références cadastrales, contenance."
      },
      {
       "terme": "Origine de propriété",
       "def": "Partie de l'acte qui retrace les propriétaires successifs du bien."
      },
      {
       "terme": "Relevé de propriété",
       "def": "Document cadastral qui liste les parcelles d'un propriétaire et leurs caractéristiques."
      },
      {
       "terme": "Ayant droit",
       "def": "Personne qui tient ses droits d'une autre, par exemple l'acquéreur d'un bien."
      },
      {
       "terme": "Limite apparente",
       "def": "Limite matérialisée sur le terrain par une clôture, un mur ou une haie, sans valeur juridique propre."
      },
      {
       "terme": "Plan de confrontation",
       "def": "Plan superposant lever, documents fonciers et cadastre pour en montrer les écarts."
      },
      {
       "terme": "Rétablissement de borne",
       "def": "Remise en place d'une borne disparue d'après les éléments du procès-verbal."
      },
      {
       "terme": "Servitude",
       "def": "Charge pesant sur un fonds au profit d'un autre fonds."
      }
     ]
    },
    {
     "id": "bgeo-doc-plans",
     "titre": "Lire un plan topographique, un plan de récolement et un plan d'implantation",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Identifier le type de plan et les informations de son cartouche",
      "Décoder la légende, les symboles et les indications altimétriques d'un plan topographique",
      "Exploiter un plan de récolement de réseaux",
      "Vérifier la cohérence d'un plan d'implantation entre cotes et coordonnées",
      "Rédiger une analyse de plan argumentée"
     ],
     "sections": [
      {
       "titre": "Trois familles de plans",
       "contenu": "<p>Le géomètre produit et utilise des plans dont la finalité diffère. Les reconnaître est la première étape de toute analyse.</p>\n<table><thead><tr><th>Plan</th><th>Il représente</th><th>Il sert à</th></tr></thead><tbody>\n<tr><td><strong>Plan topographique</strong> (plan d'état des lieux)</td><td>Le site existant : bâti, voirie, végétation, réseaux visibles, relief</td><td>Concevoir un projet, constituer un dossier de permis, établir un état des lieux</td></tr>\n<tr><td><strong>Plan de récolement</strong></td><td>Les ouvrages tels qu'exécutés, notamment les réseaux</td><td>Vérifier la conformité, constituer le DOE, alimenter la cartographie des exploitants</td></tr>\n<tr><td><strong>Plan d'implantation</strong></td><td>L'ouvrage projeté, défini par cotes et coordonnées, par rapport aux limites et à l'existant</td><td>Implanter sur le terrain et contrôler</td></tr>\n</tbody></table>\n<p>Tous comportent un <strong>cartouche</strong> qui permet de les identifier : affaire, adresse, client, auteur, échelle, date, <strong>indice</strong> (version) et historique des modifications, système de coordonnées et d'altitudes, classe de précision. Un plan sans système de référence ni date ne peut pas être exploité de façon sûre.</p>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "<h4>Plan topographique</h4>\n<ul>\n<li>Symboles normalisés par la charte du cabinet ou du client : arbre (cercle du houppier et point du tronc), candélabre, regard (carré ou cercle selon la forme du tampon), avaloir, borne, poteau.</li>\n<li>Indications altimétriques : points cotés (altitude écrite à côté d'une croix ou d'un point), courbes de niveau avec équidistance, sens de la pente parfois indiqué par une flèche.</li>\n<li>Abréviations courantes : TN (terrain naturel), FE (fil d'eau), TP ou Tamp. (tampon), HB (haut de bordure), Ø (diamètre).</li>\n</ul>\n<h4>Plan de récolement de réseau</h4>\n<ul>\n<li>Tracé de chaque réseau avec sa nature, son matériau, son diamètre, souvent la couleur conventionnelle du réseau.</li>\n<li>Pour les réseaux gravitaires : altitudes des tampons et des fils d'eau, pentes entre regards, sens d'écoulement.</li>\n<li>Pour les réseaux sous pression et les câbles : profondeur ou altitude de la génératrice supérieure, position des accessoires (vannes, coudes, jonctions).</li>\n<li>Mention de la classe de précision de la localisation.</li>\n</ul>\n<h4>Plan d'implantation</h4>\n<ul>\n<li>Contour de l'ouvrage, axes, cotes de l'ouvrage et distances aux limites et aux bâtiments voisins.</li>\n<li>Tableau de coordonnées des points à implanter.</li>\n<li>Niveau de référence (±0,00) exprimé en altitude NGF, repères de chantier.</li>\n</ul>"
      },
      {
       "titre": "Méthode d'analyse pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un plan.<br>1) <strong>Identifier</strong> le type de plan, l'affaire, l'indice et la date ; vérifier qu'il s'agit de la version à jour.<br>2) <strong>Relever le référentiel</strong> : système de coordonnées, système d'altitudes, échelle, classe de précision.<br>3) <strong>Lire la légende</strong> et repérer les éléments utiles à la question posée.<br>4) <strong>Extraire les données</strong> : cotes, coordonnées, altitudes, en indiquant d'où elles viennent.<br>5) <strong>Contrôler la cohérence interne</strong> : les cotes concordent-elles avec les coordonnées ? les altitudes avec les pentes indiquées ? la somme des cotes partielles avec la cote totale ?<br>6) <strong>Confronter</strong> avec les autres documents (limites, réseaux, règlement d'urbanisme, lever récent).<br>7) <strong>Conclure</strong> : ce qui est exploitable, ce qui est à corriger ou à faire préciser par l'auteur du plan.</div>\n<p>Pour contrôler une cohérence, on calcule les distances entre points à partir des coordonnées (D = √(ΔE<sup>2</sup> + ΔN<sup>2</sup>)), les pentes à partir des altitudes et des distances, et l'on compare aux valeurs écrites.</p>"
      },
      {
       "titre": "Les pièges",
       "contenu": "<ul>\n<li><strong>Mesurer sur le plan imprimé</strong> au lieu d'utiliser les cotes ou les coordonnées : l'impression peut avoir été réduite ou agrandie.</li>\n<li><strong>Confondre niveau fini et niveau brut</strong> : le ±0,00 d'un bâtiment désigne souvent le niveau fini du rez-de-chaussée ; la dalle brute est plus basse de l'épaisseur du revêtement et de la chape.</li>\n<li><strong>Confondre altitude du tampon et altitude du fil d'eau</strong> d'un regard : leur différence est la profondeur du regard.</li>\n<li><strong>Ignorer l'indice</strong> : un plan d'indice B remplace l'indice A ; les modifications sont listées dans le cartouche.</li>\n<li><strong>Supposer la classe de précision</strong> d'un réseau sans la lire : un réseau en classe C sur un plan très soigné reste très incertain.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un tableau de coordonnées peut contenir une faute de frappe (deux chiffres inversés) qui ne se voit pas sur le dessin à petite échelle. Recalculer les côtés et les diagonales à partir des coordonnées est le seul moyen sûr de la détecter avant d'implanter.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Plan d'implantation fictif d'une maison individuelle, indice B, échelle 1/200. Système de coordonnées : celui du lever du cabinet ; altitudes NGF-IGN69.</p>\n<h4>Indications du plan</h4>\n<ul>\n<li>Emprise rectangulaire ABCD de 12,00 m (AB et CD) sur 9,00 m (BC et DA), nus extérieurs des murs.</li>\n<li>Façade AB parallèle à la limite nord-ouest, à 3,00 m de celle-ci.</li>\n<li>Niveau ±0,00 = niveau fini du rez-de-chaussée = 152,30 m NGF.</li>\n<li>Repère de chantier RC : clou dans la bordure de trottoir, altitude 151,624 m.</li>\n<li>Terrain naturel aux angles (points cotés) : A 151,85 ; B 151,97 ; C 152,10 ; D 151,92.</li>\n</ul>\n<h4>Tableau des coordonnées</h4>\n<table><thead><tr><th>Point</th><th>E (m)</th><th>N (m)</th></tr></thead><tbody>\n<tr><td>A</td><td>1 520,000</td><td>3 240,000</td></tr>\n<tr><td>B</td><td>1 525,448</td><td>3 250,692</td></tr>\n<tr><td>C</td><td>1 533,467</td><td>3 246,606</td></tr>\n<tr><td>D</td><td>1 528,091</td><td>3 235,914</td></tr>\n</tbody></table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Identification.</strong> Il s'agit d'un plan d'implantation, indice B : avant toute exploitation, il faut s'assurer auprès du maître d'œuvre qu'aucun indice ultérieur n'existe. Le système d'altitudes est indiqué (NGF-IGN69) ; le système planimétrique est celui du lever du cabinet, ce qui permet d'implanter depuis les points d'appui de ce lever.</p>\n<p><strong>Contrôle des coordonnées.</strong> Distances calculées : AB = 12,000 m ; BC = 9,000 m ; CD = 11,967 m ; DA = 9,064 m ; diagonales AC = 15,000 m et BD = 15,012 m. Pour un rectangle de 12,00 × 9,00 m, les quatre côtés devraient valoir 12,00 et 9,00 m et les deux diagonales 15,00 m (car 12<sup>2</sup> + 9<sup>2</sup> = 15<sup>2</sup>). AB, BC et AC sont conformes ; toutes les anomalies concernent le point D.</p>\n<p><strong>Recherche de la faute.</strong> En calculant D comme A + (C - B), on obtient E = 1 520,000 + (1 533,467 - 1 525,448) = 1 528,019 et N = 3 240,000 + (3 246,606 - 3 250,692) = 3 235,914. La coordonnée N concorde ; la coordonnée E du tableau (1 528,091) présente les chiffres « 19 » inversés en « 91 ». Avec E = 1 528,019 : CD = 12,000 m, DA = 9,000 m, BD = 15,000 m. Il s'agit d'une faute de frappe, à faire confirmer par l'auteur du plan avant implantation. Implanter le point D tel qu'écrit aurait décalé l'angle de 7 cm.</p>\n<p><strong>Altimétrie.</strong> Le niveau fini (152,30 m) est de 0,20 à 0,45 m au-dessus du terrain naturel aux angles : le rez-de-chaussée est légèrement surélevé, ce qui est cohérent avec un point haut en C. Depuis le repère RC (151,624 m), avec une lecture arrière de 1,500 m par exemple, le plan de visée est à 153,124 m ; un trait de niveau à +1,00 m au-dessus du ±0,00 (153,30 m) serait au-dessus du plan de visée : il faudrait changer de station ou utiliser un autre repère de hauteur. Pour matérialiser le ±0,00 lui-même (152,30 m), la lecture à obtenir sur la mire serait 153,124 - 152,30 = 0,824 m.</p>\n<p><strong>Conclusion.</strong> Plan exploitable après correction confirmée de E<sub>D</sub> = 1 528,019 m. La distance de 3,00 m à la limite nord-ouest sera contrôlée sur le terrain par rapport aux bornes, et consignée dans le procès-verbal d'implantation.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le géomètre ne corrige jamais de lui-même un plan d'implantation : il signale l'anomalie par écrit au maître d'œuvre, attend la confirmation ou un nouvel indice, et garde trace de l'échange dans le dossier.</div>"
      }
     ],
     "points_cles": [
      "Plan topographique : l'existant ; plan de récolement : l'exécuté ; plan d'implantation : le projeté.",
      "Le cartouche donne l'indice, la date, l'échelle, le système de coordonnées et d'altitudes.",
      "On exploite les cotes et les coordonnées, jamais une mesure sur un plan imprimé.",
      "Tampon et fil d'eau, niveau fini et niveau brut ne doivent pas être confondus.",
      "Côtés et diagonales recalculés depuis les coordonnées révèlent les fautes de frappe.",
      "Lecture à obtenir = altitude du plan de visée - altitude à matérialiser.",
      "Toute anomalie d'un plan est signalée par écrit à son auteur, qui la corrige."
     ],
     "lexique": [
      {
       "terme": "Cartouche",
       "def": "Cadre d'un plan qui regroupe les informations d'identification et de référence."
      },
      {
       "terme": "Indice",
       "def": "Lettre ou numéro de version d'un plan, modifié à chaque mise à jour."
      },
      {
       "terme": "Légende",
       "def": "Liste des symboles, couleurs et abréviations utilisés sur un plan."
      },
      {
       "terme": "Point coté",
       "def": "Point du plan accompagné de son altitude."
      },
      {
       "terme": "Niveau fini",
       "def": "Altitude de la surface finie d'un sol, revêtement compris."
      },
      {
       "terme": "Tampon",
       "def": "Couvercle d'un regard, au niveau de la chaussée ou du trottoir."
      },
      {
       "terme": "Repère de chantier",
       "def": "Point d'altitude connue installé sur le chantier pour les implantations altimétriques."
      },
      {
       "terme": "Nu extérieur",
       "def": "Surface extérieure brute d'un mur, avant revêtement."
      }
     ]
    },
    {
     "id": "bgeo-doc-reseaux",
     "titre": "Exploiter les récépissés de DT-DICT et les plans de réseaux",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Identifier les rubriques d'un récépissé de déclaration et des plans joints",
      "Classer les réseaux d'une emprise selon leur sensibilité et leur classe de précision",
      "Déterminer les investigations et les mesures de prévention à prévoir",
      "Lire un rapport d'investigations complémentaires et son plan",
      "Rédiger une synthèse des réseaux pour un projet"
     ],
     "sections": [
      {
       "titre": "Les documents du dossier réseaux",
       "contenu": "<p>Avant des travaux ou une détection, le dossier comprend plusieurs documents, dont la lecture est au cœur du métier de détection et de géoréférencement des réseaux.</p>\n<table><thead><tr><th>Document</th><th>Émetteur</th><th>Contenu</th></tr></thead><tbody>\n<tr><td><strong>Déclaration</strong> (DT, DICT ou DT-DICT conjointe)</td><td>Responsable de projet ou exécutant</td><td>Emprise des travaux (tracée sur le téléservice), nature et dates des travaux, techniques prévues</td></tr>\n<tr><td><strong>Récépissé</strong></td><td>Chaque exploitant consulté</td><td>Réponse : réseau concerné ou non, catégorie, plans joints et leur classe de précision, recommandations, contacts, numéro d'urgence</td></tr>\n<tr><td><strong>Plans des exploitants</strong></td><td>Exploitants</td><td>Tracé des réseaux, parfois profondeur indicative, légende propre à chaque exploitant</td></tr>\n<tr><td><strong>Rapport d'investigations complémentaires</strong></td><td>Prestataire certifié</td><td>Méthodes, résultats, plan géoréférencé, classes atteintes, zones non concluantes</td></tr>\n<tr><td><strong>Compte rendu de marquage-piquetage</strong></td><td>Responsable de projet ou prestataire</td><td>Réseaux marqués, date, participants, signatures</td></tr>\n</tbody></table>"
      },
      {
       "titre": "Structure et vocabulaire d'un récépissé",
       "contenu": "<p>Les récépissés suivent un modèle réglementaire. On y repère notamment :</p>\n<ul>\n<li>les <strong>références de la déclaration</strong> (numéro de consultation du téléservice, commune, emprise) : elles doivent correspondre exactement au projet ;</li>\n<li>la <strong>réponse</strong> de l'exploitant : ses ouvrages sont-ils concernés par l'emprise ?</li>\n<li>la <strong>catégorie</strong> de l'ouvrage (sensible ou non, nature : gaz, électricité, eau…) ;</li>\n<li>la <strong>classe de précision</strong> des plans fournis (A, B ou C), parfois par tronçon ;</li>\n<li>les <strong>recommandations techniques</strong> : distances à respecter, techniques interdites ou imposées à proximité, demande de rendez-vous sur place ;</li>\n<li>les <strong>contacts</strong>, dont le numéro à appeler en cas de dommage.</li>\n</ul>\n<p>Les plans joints utilisent la légende de chaque exploitant : il faut lire chaque légende séparément, car un même symbole n'a pas le même sens d'un exploitant à l'autre. Une profondeur figurant sur un plan d'exploitant est en général <strong>indicative</strong> : elle a pu changer avec les travaux de voirie (rechargement ou rabotage de chaussée).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour chaque réseau, trois questions : est-il concerné ? est-il sensible ? dans quelle classe est-il connu ? Les réponses déterminent les investigations et les précautions.</div>"
      },
      {
       "titre": "Méthode d'analyse pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un ensemble de récépissés.<br>1) <strong>Vérifier la complétude</strong> : un récépissé pour chaque exploitant identifié par le guichet unique ; relancer ceux qui manquent.<br>2) <strong>Vérifier la concordance</strong> des références (emprise, commune, dates) avec le projet.<br>3) <strong>Dresser un tableau</strong> des réseaux concernés : exploitant, nature, sensibilité, matériau et diamètre si connus, classe de précision, profondeur indicative, recommandations.<br>4) <strong>Reporter les plans</strong> des exploitants sur un même fond de plan géoréférencé, en signalant la classe de chaque tracé.<br>5) <strong>Déduire les actions</strong> : investigations complémentaires pour les réseaux sensibles insuffisamment connus dans l'emprise, rendez-vous demandés par les exploitants, techniques adaptées.<br>6) <strong>Préparer le marquage-piquetage</strong> avec le code couleur de chaque réseau.<br>7) <strong>Rédiger la synthèse</strong> pour le responsable de projet et l'exécutant.</div>"
      },
      {
       "titre": "Les pièges",
       "contenu": "<ul>\n<li><strong>Se fier à l'absence</strong> d'un réseau sur les plans : des réseaux anciens, abandonnés ou privés (branchements, éclairage d'une copropriété) peuvent exister sans figurer sur les plans reçus.</li>\n<li><strong>Superposer des plans de systèmes différents</strong> sans transformation : un plan d'exploitant ancien peut être en coordonnées locales ou simplement dessiné par rapport aux façades.</li>\n<li><strong>Prendre une classe B pour une classe A</strong> : en classe B, le réseau peut se trouver jusqu'à 1,50 m de son tracé.</li>\n<li><strong>Utiliser un récépissé périmé</strong> ou établi pour une autre emprise.</li>\n<li><strong>Oublier les recommandations</strong> : un exploitant qui demande à être présent lors des travaux à proximité de son ouvrage doit être prévenu.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la zone dans laquelle un réseau peut se trouver est son tracé élargi de l'incertitude de sa classe, de part et d'autre. Deux réseaux en classe B dessinés à 2 m l'un de l'autre peuvent en réalité se toucher.</div>"
      },
      {
       "titre": "Exemple commenté : le dossier",
       "contenu": "<p>Projet fictif : création d'une tranchée de 0,60 m de large et 1,10 m de profondeur sur 80 m, le long d'une rue en zone urbaine, pour une nouvelle conduite d'eau pluviale. Trois récépissés ont été reçus (le guichet unique en annonçait trois).</p>\n<table><thead><tr><th>Exploitant</th><th>Réponse</th><th>Réseau</th><th>Classe</th><th>Indications</th></tr></thead><tbody>\n<tr><td>Distributeur de gaz</td><td>Concerné</td><td>Conduite en polyéthylène Ø 63 mm, parallèle à la tranchée, à environ 1 m d'après le plan</td><td>B</td><td>Profondeur indicative 0,80 m ; demande de rendez-vous avant travaux ; techniques douces imposées à proximité</td></tr>\n<tr><td>Distributeur d'électricité</td><td>Concerné</td><td>Câble souterrain HTA traversant la rue perpendiculairement à mi-parcours</td><td>A</td><td>Plan géoréférencé ; profondeur indicative 0,90 m</td></tr>\n<tr><td>Service des eaux</td><td>Concerné</td><td>Conduite en fonte Ø 100 mm, côté opposé de la chaussée ; trois branchements traversant la rue</td><td>C</td><td>Plan schématique sans profondeur</td></tr>\n</tbody></table>\n<p>Sur place, on observe des tampons de télécommunications sur le trottoir côté travaux, alors qu'aucun récépissé d'un opérateur de télécommunications ne figure au dossier.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Complétude.</strong> Les trois récépissés attendus sont présents, mais les tampons de télécommunications révèlent un réseau dont l'exploitant n'apparaît pas dans le dossier. Il faut vérifier sur le guichet unique si l'emprise déclarée couvre bien le trottoir, et contacter l'opérateur concerné ; à défaut d'information, ce réseau est traité comme présent et inconnu.</p>\n<p><strong>Gaz.</strong> Réseau sensible, en classe B, parallèle à la tranchée à environ 1 m : avec une incertitude pouvant atteindre 1,50 m, la conduite peut se trouver dans l'emprise de la tranchée. Des investigations complémentaires sont nécessaires pour la localiser en classe A avant les travaux. Le polyéthylène n'étant pas métallique, la détection passera par le fil traceur s'il existe, sinon par le géoradar, avec confirmation par sondages ponctuels. Le rendez-vous demandé par l'exploitant est à organiser.</p>\n<p><strong>Électricité.</strong> Réseau sensible, déjà en classe A : pas d'investigation complémentaire obligatoire pour sa localisation, mais il croise la tranchée, ce qui impose un terrassement manuel ou par aspiration au droit du croisement, et un marquage en rouge. Une détection de contrôle reste une bonne pratique.</p>\n<p><strong>Eau potable.</strong> Réseau non sensible, en classe C, côté opposé : la conduite principale n'est pas dans l'emprise, mais les trois branchements traversent la rue et donc la tranchée. Une détection est recommandée pour éviter les coupures d'eau chez les riverains ; marquage en bleu.</p>\n<p><strong>Synthèse et suite.</strong> Investigations complémentaires sur le gaz (et sur les télécommunications si l'exploitant ne fournit pas de plan fiable), détection des branchements d'eau et contrôle du câble HTA ; plan géoréférencé de synthèse avec la classe de chaque tracé ; marquage-piquetage (jaune, rouge, bleu, vert) avec compte rendu signé avant travaux ; consigne aux équipes : techniques douces dans les zones d'incertitude, numéros d'urgence affichés.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> cette synthèse est remise sous forme d'un tableau des réseaux et d'un plan de synthèse. Elle est jointe au dossier de consultation des entreprises, pour que l'exécutant chiffre et organise ses travaux en connaissant les contraintes.</div>"
      },
      {
       "titre": "Lire un rapport d'investigations complémentaires",
       "contenu": "<p>Une fois les investigations réalisées, le rapport du prestataire devient le document de référence pour les travaux. Il comprend en général :</p>\n<table><thead><tr><th>Partie du rapport</th><th>Ce qu'il faut y vérifier</th></tr></thead><tbody>\n<tr><td>Identification</td><td>Projet, emprise, références des déclarations, certification du prestataire</td></tr>\n<tr><td>Méthodes et matériel</td><td>Techniques employées par réseau (électromagnétique, géoradar, sondages), conditions de mesure</td></tr>\n<tr><td>Résultats</td><td>Réseaux détectés, profondeurs estimées, classe atteinte pour chaque tronçon</td></tr>\n<tr><td>Zones non concluantes</td><td>Localisation, raison, recommandation (sondage, précautions)</td></tr>\n<tr><td>Plan géoréférencé</td><td>Système de coordonnées, légende, cohérence avec les affleurants levés</td></tr>\n</tbody></table>\n<p>Le lecteur vérifie que chaque réseau sensible de l'emprise figure bien en classe A, ou qu'à défaut le rapport le signale clairement et prévoit les mesures adaptées. Il compare aussi le plan du rapport aux plans des exploitants : un écart important de tracé est normal (c'est l'intérêt des investigations), mais il doit être transmis à l'exploitant pour la mise à jour de sa cartographie.</p>"
      }
     ],
     "points_cles": [
      "Le dossier réseaux réunit déclarations, récépissés, plans d'exploitants, rapports d'investigations et compte rendu de marquage.",
      "Pour chaque réseau : concerné ou non, sensible ou non, classe de précision.",
      "Une profondeur indiquée par un exploitant est indicative.",
      "La zone de présence possible d'un réseau est son tracé élargi de l'incertitude de sa classe.",
      "Un réseau sensible mal localisé dans l'emprise appelle des investigations complémentaires.",
      "Un affleurant sans récépissé correspondant signale un réseau à identifier.",
      "La synthèse se traduit par un tableau, un plan géoréférencé et un marquage-piquetage aux couleurs normalisées."
     ],
     "lexique": [
      {
       "terme": "Récépissé",
       "def": "Réponse écrite d'un exploitant à une déclaration de travaux."
      },
      {
       "terme": "Emprise",
       "def": "Zone géographique concernée par les travaux, déclarée sur le téléservice."
      },
      {
       "terme": "Réseau concerné",
       "def": "Réseau dont l'exploitant indique qu'il est présent dans ou près de l'emprise."
      },
      {
       "terme": "Zone d'incertitude",
       "def": "Bande de part et d'autre du tracé d'un réseau dans laquelle il peut se trouver, selon sa classe."
      },
      {
       "terme": "Techniques douces",
       "def": "Méthodes de terrassement à faible risque d'endommagement : manuel, aspiration."
      },
      {
       "terme": "Plan de synthèse",
       "def": "Plan géoréférencé réunissant tous les réseaux connus d'une emprise, avec leur classe."
      },
      {
       "terme": "HTA",
       "def": "Haute tension A : niveau de tension des réseaux de distribution d'électricité moyenne tension."
      },
      {
       "terme": "Branchement",
       "def": "Canalisation ou câble reliant un réseau principal à un bâtiment."
      }
     ]
    }
   ]
  }
 ]
};
