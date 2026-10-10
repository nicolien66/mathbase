/* Polymates — Bac pro Maintenance des systèmes de production connectés — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-mspc"] = {
 "id": "bp-mspc",
 "nom": "Maintenance des systèmes de production connectés",
 "icone": "🎓",
 "couleur": "#8ab89a",
 "intro": "Le baccalauréat professionnel Maintenance des systèmes de production connectés (MSPC) forme des techniciens capables de préparer, réaliser et améliorer la maintenance corrective et préventive d'équipements automatisés pluritechnologiques, de plus en plus reliés aux réseaux de l'usine. Il mène aux métiers de technicien de maintenance industrielle, d'électromécanicien, d'agent de maintenance sur ligne de production, puis de chef d'équipe maintenance. Ce cours couvre les savoirs associés de la première et de la terminale, en prolongement du cours de seconde de la famille : approche système et organisation de la maintenance, chaîne d'énergie, chaîne d'information et systèmes connectés, interventions, sécurité et QSE. Il est organisé en deux blocs : un cours théorique et un bloc d'analyse de documents, qui montre comment exploiter les schémas, dessins, documents d'automatisme et documents de préparation et de suivi rencontrés à l'épreuve de préparation d'une intervention de maintenance.",
 "parties": [
  {
   "titre": "Partie 1 — Approche système et organisation de la maintenance",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmspc-analyse-fonctionnelle-temporelle",
     "titre": "Analyse fonctionnelle, structurelle et temporelle d'un système pluritechnologique",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire un système pluritechnologique à l'aide des diagrammes SysML utilisés dans les dossiers techniques.",
      "Relier une fonction technique aux constituants qui la réalisent, dans la chaîne d'énergie et dans la chaîne d'information.",
      "Lire et exploiter un chronogramme et un diagramme d'états pour décrire le comportement temporel d'une machine.",
      "Situer les modes de marche et d'arrêt d'une installation à l'aide du GEMMA.",
      "Utiliser l'analyse du système pour préparer une intervention de maintenance."
     ],
     "sections": [
      {
       "titre": "Pourquoi analyser un système avant d'intervenir",
       "contenu": "\n<p>Un technicien de maintenance n'intervient jamais sur un composant isolé : il intervient sur un <strong>système pluritechnologique</strong>, c'est-à-dire un ensemble qui associe plusieurs technologies (mécanique, électrique, pneumatique, hydraulique, automatique, informatique industrielle) pour réaliser une fonction de production. Une ligne de conditionnement de bouteilles, une presse plieuse, un robot de palettisation ou une station de traitement d'eau en sont des exemples.</p>\n<p>Le cours de seconde a présenté la frontière d'un système, sa fonction globale, la matière d'œuvre et la distinction entre chaîne d'énergie et chaîne d'information. En première, l'analyse devient un véritable outil de travail : elle sert à <strong>comprendre ce que la machine doit faire</strong>, <strong>comment elle est construite</strong> et <strong>dans quel ordre elle agit</strong>. Ces trois points de vue sont appelés analyse <strong>fonctionnelle</strong>, <strong>structurelle</strong> et <strong>temporelle</strong>. Le référentiel du bac pro MSPC en fait la première compétence du bloc « Organiser et optimiser son intervention de maintenance ».</p>\n<table>\n<thead><tr><th>Point de vue</th><th>Question posée</th><th>Outils usuels</th></tr></thead>\n<tbody>\n<tr><td>Fonctionnel</td><td>Que doit faire le système, pour qui, avec quelles performances ?</td><td>Diagramme des cas d'utilisation, diagramme des exigences, cahier des charges</td></tr>\n<tr><td>Structurel</td><td>De quoi le système est-il constitué et comment les éléments sont-ils reliés ?</td><td>Diagramme de définition de blocs, diagramme de blocs internes, synoptique, nomenclature</td></tr>\n<tr><td>Temporel (comportemental)</td><td>Dans quel ordre et à quelles conditions les actions se déroulent-elles ?</td><td>Diagramme d'états, diagramme de séquence, grafcet, chronogramme, GEMMA</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> face à un arrêt de ligne, le technicien expérimenté commence par se demander « quelle fonction n'est plus assurée ? » avant de chercher « quelle pièce est cassée ? ». Cette habitude évite de démonter au hasard et réduit fortement le temps d'arrêt.</div>"
      },
      {
       "titre": "Le point de vue fonctionnel : cas d'utilisation et exigences",
       "contenu": "\n<p>Les dossiers techniques récents décrivent les systèmes avec le langage <strong>SysML</strong> (Systems Modeling Language), un langage graphique normalisé de modélisation des systèmes. Il ne s'agit pas de dessiner soi-même des diagrammes complexes, mais de savoir les lire.</p>\n<h4>Le diagramme des cas d'utilisation</h4>\n<p>Il représente les <strong>services rendus</strong> par le système à ses <strong>acteurs</strong> : opérateur de production, technicien de maintenance, régleur, système amont ou aval, superviseur. Le système est dessiné comme un cadre ; les cas d'utilisation sont des ovales à l'intérieur (« conditionner les flacons », « changer de format », « effectuer la maintenance préventive ») ; les acteurs sont représentés par des silhouettes à l'extérieur, reliées aux cas qui les concernent.</p>\n<h4>Le diagramme des exigences</h4>\n<p>Il liste ce que le système doit respecter, sous forme de rectangles portant un identifiant, un texte et souvent une valeur chiffrée. Par exemple : « Id 1.2 — Cadence : 60 flacons par minute », « Id 3.1 — Niveau sonore inférieur à 80 dB(A) au poste de travail », « Id 4.4 — Changement de format en moins de 15 min ». Les exigences peuvent être reliées entre elles (une exigence en <em>contient</em> d'autres) ou reliées au bloc qui les <em>satisfait</em>.</p>\n<p>Pour le technicien de maintenance, les exigences sont des <strong>références de bon fonctionnement</strong> : une machine qui ne tient plus sa cadence, qui chauffe ou qui devient bruyante ne satisfait plus une exigence. C'est souvent le premier symptôme d'une dérive.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le diagramme des cas d'utilisation dit <em>à qui</em> sert le système ; le diagramme des exigences dit <em>avec quelles performances</em>. Ensemble, ils permettent de juger si le système fonctionne correctement.</div>"
      },
      {
       "titre": "Le point de vue structurel : blocs, flux et constituants",
       "contenu": "\n<p>Le <strong>diagramme de définition de blocs</strong> (souvent noté bdd) décompose le système en sous-systèmes puis en constituants, sous forme d'arborescence. Une ligne de conditionnement se décompose par exemple en : poste d'alimentation, poste de remplissage, poste de bouchage, poste d'étiquetage, convoyeur, armoire de commande. Chaque bloc peut ensuite être détaillé.</p>\n<p>Le <strong>diagramme de blocs internes</strong> (ibd) montre les <strong>flux</strong> entre les blocs : flux d'énergie (électrique, pneumatique, hydraulique, mécanique), flux d'information (signaux de capteurs, ordres, données réseau) et flux de matière d'œuvre. Les liaisons y sont représentées par des traits reliant des « ports » sur le bord des blocs, avec la nature du flux écrite à côté.</p>\n<p>Ce diagramme permet de retrouver la <strong>chaîne d'énergie</strong> de chaque mouvement, avec ses fonctions génériques : <strong>alimenter</strong>, <strong>distribuer</strong>, <strong>convertir</strong>, <strong>transmettre</strong>, <strong>agir</strong>. Il permet aussi de retrouver la <strong>chaîne d'information</strong> : <strong>acquérir</strong>, <strong>traiter</strong>, <strong>communiquer</strong>.</p>\n<table>\n<thead><tr><th>Fonction générique</th><th>Exemple de constituant sur un poste de bouchage</th></tr></thead>\n<tbody>\n<tr><td>Alimenter</td><td>Réseau d'air comprimé 6 bar, unité de traitement de l'air (filtre, régulateur, lubrificateur éventuel)</td></tr>\n<tr><td>Distribuer</td><td>Distributeur 5/2 monostable à commande électropneumatique</td></tr>\n<tr><td>Convertir</td><td>Vérin double effet qui descend la tête de vissage</td></tr>\n<tr><td>Transmettre</td><td>Guidage en translation par colonnes et douilles à billes</td></tr>\n<tr><td>Agir</td><td>Tête de vissage sur le bouchon</td></tr>\n<tr><td>Acquérir</td><td>Détecteurs magnétiques de fin de course sur le vérin, cellule de présence flacon</td></tr>\n<tr><td>Traiter</td><td>Automate programmable</td></tr>\n<tr><td>Communiquer</td><td>Pupitre opérateur, voyants, réseau vers la supervision</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour relier une fonction à ses constituants, partir de l'effecteur (ce qui agit sur la matière d'œuvre), puis remonter la chaîne d'énergie vers la source : effecteur, transmetteur, actionneur, préactionneur, alimentation. Noter ensuite les capteurs qui renseignent sur l'état de ce mouvement et l'entrée d'automate qui les reçoit. On obtient une ligne complète qui servira de fil conducteur pour la consignation et pour le diagnostic.</div>"
      },
      {
       "titre": "Le point de vue temporel : diagramme d'états et chronogramme",
       "contenu": "\n<p>Connaître les constituants ne suffit pas : il faut savoir <strong>quand</strong> ils agissent. Trois outils sont fréquents dans les dossiers.</p>\n<h4>Le diagramme d'états</h4>\n<p>Le <strong>diagramme d'états</strong> (stm) représente les états possibles d'un système ou d'un sous-système (arrêt, initialisation, production, défaut, maintenance) et les <strong>transitions</strong> qui permettent de passer de l'un à l'autre, avec leur événement déclencheur et parfois une condition entre crochets. Exemple : de l'état « Production » à l'état « Défaut » sur l'événement « disjonction moteur convoyeur ». Ce diagramme est très utile pour comprendre pourquoi une machine refuse de redémarrer : elle n'est peut-être pas dans l'état attendu.</p>\n<h4>Le diagramme de séquence</h4>\n<p>Le <strong>diagramme de séquence</strong> (sd) montre les échanges de messages dans le temps entre l'opérateur, l'automate et les constituants. Le temps s'écoule du haut vers le bas ; chaque acteur ou bloc possède une ligne de vie verticale ; les messages sont des flèches horizontales.</p>\n<h4>Le chronogramme</h4>\n<p>Le <strong>chronogramme</strong> représente l'évolution de signaux logiques (0 ou 1) ou analogiques en fonction du temps, sur des lignes superposées partageant le même axe horizontal. Il sert à vérifier un enchaînement (le vérin sort-il bien après la détection du flacon ?) et à mesurer des durées (temps de cycle, temporisations).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un chronogramme. 1) Repérer l'échelle de temps et l'unité. 2) Identifier chaque ligne (nom de la variable, entrée ou sortie). 3) Repérer les fronts montants et descendants et les noter t<sub>1</sub>, t<sub>2</sub>… 4) Pour chaque front d'une sortie, chercher sur les lignes d'entrées l'événement qui le précède. 5) Calculer les durées par différence. Exemple : présence flacon à t = 0,2 s, sortie du vérin de 0,3 s à 1,1 s, fin de course bas à 0,9 s : le vérin met 0,6 s pour descendre (0,9 − 0,3) et reste en bas 0,2 s avant la remontée.</div>"
      },
      {
       "titre": "Les modes de marche et d'arrêt : le GEMMA",
       "contenu": "\n<p>Une machine industrielle ne fait pas que produire : elle doit être mise en route, réglée, vidée, arrêtée en urgence, redémarrée après un défaut. Le <strong>GEMMA</strong> (Guide d'Étude des Modes de Marches et d'Arrêts) est un outil graphique français qui organise tous ces modes sur une seule feuille.</p>\n<p>Le GEMMA se présente comme un grand rectangle divisé en trois familles de procédures :</p>\n<ul>\n<li>les procédures <strong>A</strong>, d'arrêt (A1 arrêt dans l'état initial, A2 arrêt demandé en fin de cycle, A5 préparation pour remise en route après défaillance, A6 mise du système dans l'état initial…) ;</li>\n<li>les procédures <strong>F</strong>, de fonctionnement (F1 production normale, F2 marche de préparation, F4 marches de vérification dans le désordre, F5 marches de vérification dans l'ordre…) ;</li>\n<li>les procédures <strong>D</strong>, de défaillance (D1 arrêt d'urgence, D2 diagnostic et traitement de la défaillance, D3 production tout de même).</li>\n</ul>\n<p>Le concepteur coche ou entoure les rectangles-états utilisés par la machine et trace les liaisons entre eux, avec les conditions de passage (bouton, sélecteur, détection). Le technicien y lit par exemple : après un arrêt d'urgence (D1), il faut passer par A5 puis A6 avant de revenir en A1, et seul un réarmement suivi d'une initialisation permet de reprendre la production.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la marche de vérification (F4) permet souvent de piloter les actionneurs un par un depuis le pupitre. C'est un mode puissant pour le diagnostic, mais certains dispositifs de sécurité peuvent y fonctionner différemment (vitesse réduite, commande maintenue). Il ne s'utilise qu'avec l'autorisation de l'exploitant et en connaissant parfaitement les mouvements commandés.</div>"
      },
      {
       "titre": "Exploiter l'analyse pour préparer une intervention",
       "contenu": "\n<p>L'analyse du système n'est pas un exercice scolaire : elle est la base de la <strong>préparation d'intervention</strong>, qui fait l'objet de l'épreuve écrite du diplôme. Elle permet de répondre à quatre questions pratiques.</p>\n<ol>\n<li><strong>Quelle fonction est concernée ?</strong> L'ordre de travail parle d'un symptôme (« le bouchon est mal vissé »). L'analyse fonctionnelle traduit ce symptôme en fonction non assurée (« visser le bouchon au couple prescrit »).</li>\n<li><strong>Quels constituants réalisent cette fonction ?</strong> L'analyse structurelle donne la liste : moteur de vissage, embrayage à friction, vérin de descente, capteurs, programme.</li>\n<li><strong>Quelles énergies faut-il maîtriser ?</strong> La même analyse indique les énergies présentes sur le poste (électrique, pneumatique, mécanique potentielle d'une tête en hauteur), donc les consignations à prévoir.</li>\n<li><strong>Dans quel état mettre la machine ?</strong> Le GEMMA et le diagramme d'états indiquent comment arrêter proprement, quel mode utiliser pour les essais et comment remettre en production.</li>\n</ol>\n<p>Une bonne préparation tient souvent sur une page : la fonction, la liste des constituants avec leurs repères, les énergies, le mode d'arrêt, les points de contrôle après intervention. Le vocabulaire utilisé doit être celui du dossier technique (mêmes noms, mêmes repères), afin que tout le monde parle de la même chose.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> fonctionnel = « quoi », structurel = « avec quoi », temporel = « quand et dans quel ordre ». Une préparation d'intervention solide répond à ces trois questions avant de sortir le moindre outil.</div>"
      }
     ],
     "points_cles": [
      "Un système pluritechnologique s'analyse selon trois points de vue : fonctionnel, structurel et temporel.",
      "Le diagramme des cas d'utilisation montre les services rendus aux acteurs ; le diagramme des exigences fixe les performances attendues.",
      "Le diagramme de définition de blocs décompose le système ; le diagramme de blocs internes montre les flux d'énergie, d'information et de matière.",
      "La chaîne d'énergie se décrit par alimenter, distribuer, convertir, transmettre, agir ; la chaîne d'information par acquérir, traiter, communiquer.",
      "Le diagramme d'états, le diagramme de séquence et le chronogramme décrivent le comportement dans le temps.",
      "Le GEMMA organise les procédures d'arrêt (A), de fonctionnement (F) et de défaillance (D).",
      "Partir de l'effecteur et remonter vers la source permet de lister tous les constituants d'un mouvement.",
      "L'analyse du système est la base de toute préparation d'intervention de maintenance."
     ],
     "lexique": [
      {
       "terme": "Système pluritechnologique",
       "def": "Système qui associe plusieurs technologies (mécanique, électrique, fluidique, automatique, informatique) pour réaliser une fonction."
      },
      {
       "terme": "SysML",
       "def": "Langage graphique normalisé de modélisation des systèmes, utilisé dans les dossiers techniques."
      },
      {
       "terme": "Exigence",
       "def": "Propriété ou performance que le système doit respecter, souvent chiffrée."
      },
      {
       "terme": "Bloc",
       "def": "Élément de structure d'un système dans un diagramme SysML (sous-système ou constituant)."
      },
      {
       "terme": "Flux",
       "def": "Ce qui circule entre deux blocs : énergie, information ou matière d'œuvre."
      },
      {
       "terme": "Diagramme d'états",
       "def": "Représentation des états d'un système et des transitions qui permettent de passer de l'un à l'autre."
      },
      {
       "terme": "Chronogramme",
       "def": "Représentation de l'évolution de signaux en fonction du temps, sur un axe commun."
      },
      {
       "terme": "GEMMA",
       "def": "Guide d'Étude des Modes de Marches et d'Arrêts, organisant les procédures A, F et D d'une machine."
      },
      {
       "terme": "Effecteur",
       "def": "Constituant qui agit directement sur la matière d'œuvre (pince, ventouse, outil, tête de vissage)."
      },
      {
       "terme": "Préactionneur",
       "def": "Constituant qui distribue l'énergie à l'actionneur sur ordre de la partie commande (contacteur, distributeur, variateur)."
      }
     ]
    },
    {
     "id": "bmspc-strategie-organisation-maintenance",
     "titre": "Stratégie, organisation et méthodes du service maintenance",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Expliquer comment une entreprise choisit sa politique de maintenance selon la criticité de ses équipements.",
      "Décrire l'organisation d'un service maintenance : méthodes, ordonnancement, réalisation.",
      "Suivre le circuit d'une demande d'intervention jusqu'à sa clôture dans une GMAO.",
      "Distinguer coûts directs et coûts indirects de la maintenance.",
      "Situer la TPM et la place de l'opérateur dans la maintenance de premier niveau."
     ],
     "sections": [
      {
       "titre": "De la forme de maintenance à la stratégie",
       "contenu": "\n<p>Le cours de seconde a présenté les formes de maintenance (corrective, préventive systématique, préventive conditionnelle) et les niveaux d'intervention. En première, il s'agit de comprendre <strong>pourquoi</strong> une entreprise choisit telle forme pour tel équipement. Ce choix constitue la <strong>politique de maintenance</strong> : un ensemble de décisions qui fixe, pour chaque équipement, la manière dont il sera maintenu, avec quels moyens et à quel coût.</p>\n<p>La terminologie est fixée par la norme <strong>NF EN 13306</strong> (terminologie de la maintenance). Elle définit la maintenance comme l'ensemble des actions techniques, administratives et de management, durant le cycle de vie d'un bien, destinées à le maintenir ou à le rétablir dans un état dans lequel il peut accomplir la fonction requise. Trois mots comptent : <em>maintenir</em> (prévenir), <em>rétablir</em> (corriger) et <em>fonction requise</em> (ce que l'on attend du bien).</p>\n<p>Une stratégie de maintenance cherche un équilibre entre trois objectifs souvent contradictoires : la <strong>disponibilité</strong> des équipements (ils doivent produire quand on en a besoin), la <strong>sécurité</strong> des personnes et des biens, et le <strong>coût global</strong>. Trop de préventif coûte cher en pièces et en main-d'œuvre ; trop peu provoque des pannes coûteuses en production perdue.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> il n'existe pas de « meilleure » forme de maintenance dans l'absolu. La bonne forme dépend de l'équipement, de son importance pour la production, de la sécurité et du coût de ses défaillances.</div>"
      },
      {
       "titre": "La criticité des équipements",
       "contenu": "\n<p>Pour décider, l'entreprise classe ses équipements selon leur <strong>criticité</strong>, c'est-à-dire l'importance des conséquences de leur défaillance. On utilise souvent une grille à trois classes.</p>\n<table>\n<thead><tr><th>Classe</th><th>Conséquence d'une panne</th><th>Exemple</th><th>Stratégie habituelle</th></tr></thead>\n<tbody>\n<tr><td>A — critique</td><td>Arrêt de toute la ligne, risque sécurité ou qualité majeur, pas de solution de secours</td><td>Four de cuisson unique, presse principale, compresseur sans secours</td><td>Préventif systématique et conditionnel, pièces de rechange en stock, surveillance renforcée</td></tr>\n<tr><td>B — important</td><td>Arrêt partiel ou ralentissement, solution de contournement possible</td><td>Étiqueteuse doublée, convoyeur d'accumulation</td><td>Préventif ciblé sur les organes sensibles, corrective organisée</td></tr>\n<tr><td>C — secondaire</td><td>Peu ou pas d'impact sur la production</td><td>Éclairage d'atelier, ventilateur de bureau</td><td>Corrective (on intervient à la panne)</td></tr>\n</tbody>\n</table>\n<p>Une méthode plus fine attribue des notes. Par exemple, on note de 1 à 4 la gravité sur la production, la sécurité, la qualité, et la fréquence des pannes, puis on multiplie ou on additionne. Cette démarche rejoint l'<strong>AMDEC</strong> (analyse des modes de défaillance, de leurs effets et de leur criticité), étudiée plus loin dans ce cours avec les calculs de fiabilité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> classer un équipement. 1) Lister les conséquences d'un arrêt de 8 h : production perdue, retards de livraison, risque pour les personnes, non-qualité. 2) Noter chaque critère selon la grille de l'entreprise. 3) Calculer la note globale. Exemple avec une grille où C = G<sub>production</sub> × G<sub>sécurité</sub> × F : pour une pompe de process unique, G<sub>production</sub> = 4, G<sub>sécurité</sub> = 2, F = 3, d'où C = 24. Si la grille fixe le seuil de la classe A à 18, la pompe est classée A : elle recevra une surveillance vibratoire et une pompe de rechange sera tenue en stock.</div>"
      },
      {
       "titre": "L'organisation d'un service maintenance",
       "contenu": "\n<p>Dans une entreprise de taille moyenne, le service maintenance s'organise autour de trois fonctions.</p>\n<ul>\n<li>Les <strong>méthodes</strong> préparent le travail : elles rédigent les gammes et les procédures, établissent le plan de maintenance préventive, analysent les historiques, gèrent la documentation technique et définissent le stock de pièces de rechange.</li>\n<li>L'<strong>ordonnancement</strong> planifie : il programme les interventions en accord avec la production, réserve les pièces et l'outillage, affecte les techniciens, suit l'avancement.</li>\n<li>La <strong>réalisation</strong> exécute : techniciens de maintenance (mécanique, électrique, automatisme), souvent organisés en équipes postées pour couvrir les horaires de production.</li>\n</ul>\n<p>Le titulaire du bac pro MSPC est d'abord un technicien de réalisation, mais il participe aux méthodes : il signale les gammes incomplètes, propose des améliorations, renseigne l'historique avec précision. Son compte rendu est la matière première du travail des méthodes.</p>\n<p>Une partie des interventions peut être <strong>externalisée</strong> (sous-traitée) : contrôles réglementaires par un organisme agréé, maintenance de compresseurs ou de chariots élévateurs par le constructeur, rebobinage de moteurs, analyse d'huile en laboratoire. Le technicien interne prépare alors l'accès, consigne, accompagne et réceptionne le travail.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une réunion quotidienne courte entre production et maintenance, souvent debout devant un tableau, permet de passer en revue les arrêts de la veille, les interventions du jour et les priorités. Le technicien y présente oralement ses constats en quelques phrases précises.</div>"
      },
      {
       "titre": "La GMAO et le circuit d'une intervention",
       "contenu": "\n<p>La <strong>GMAO</strong> (gestion de maintenance assistée par ordinateur) est le logiciel qui centralise les informations de maintenance. Elle contient l'<strong>arborescence</strong> des équipements (site, ligne, machine, sous-ensemble, composant), les plans de préventif, les demandes et ordres de travail, l'historique, le stock de pièces et les fournisseurs.</p>\n<p>Le circuit habituel d'une intervention est le suivant :</p>\n<ol>\n<li>La <strong>demande d'intervention</strong> (DI) est émise par un opérateur ou un chef d'équipe : équipement, symptôme, urgence.</li>\n<li>Le responsable la valide et la transforme en <strong>ordre de travail</strong> (OT) : nature des travaux, priorité, technicien, pièces, gamme associée.</li>\n<li>Le technicien réalise l'intervention et renseigne le <strong>compte rendu</strong> : temps passé, pièces consommées, cause de la défaillance, travaux faits, travaux restant à faire.</li>\n<li>L'OT est <strong>clôturé</strong> ; les données alimentent l'historique et les indicateurs.</li>\n</ol>\n<p>Les OT de préventif sont, eux, générés automatiquement par la GMAO selon une périodicité calendaire (toutes les 4 semaines) ou selon un compteur (toutes les 2 000 heures de fonctionnement, tous les 500 000 cycles).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un compte rendu du type « réparé » ou « RAS » est inexploitable. Il faut indiquer le constat (roulement côté accouplement bruyant, jeu radial visible), la cause supposée (défaut de lubrification), l'action (remplacement du roulement 6205-2RS) et le résultat (essai 30 min, température stable à 45 °C). Sans ces données, impossible d'analyser les pannes répétitives.</div>"
      },
      {
       "titre": "Coûts de maintenance et gestion des pièces de rechange",
       "contenu": "\n<p>Le coût d'une défaillance ne se limite pas au prix de la pièce. On distingue :</p>\n<ul>\n<li>les <strong>coûts directs</strong> de maintenance : main-d'œuvre (heures × taux horaire), pièces et consommables, sous-traitance, outillage spécifique ;</li>\n<li>les <strong>coûts indirects</strong>, souvent bien plus élevés : production perdue pendant l'arrêt, rebuts, heures supplémentaires pour rattraper le retard, pénalités de livraison, dégradation de l'image auprès du client.</li>\n</ul>\n<p>Le <strong>coût de défaillance</strong> est la somme des deux. Exemple : un arrêt de 3 h sur une ligne qui produit une marge de 800 € par heure, réparé par un technicien à 45 € de l'heure avec une pièce de 220 €, coûte 3 × 45 + 220 = 355 € en coût direct et 3 × 800 = 2 400 € en coût indirect, soit 2 755 € au total.</p>\n<p>Le <strong>magasin de pièces de rechange</strong> est un compromis : une pièce en stock coûte de l'argent immobilisé, mais une pièce absente allonge l'arrêt. On stocke en priorité les pièces des équipements critiques, à délai d'approvisionnement long, et les consommables courants (roulements standards, courroies, fusibles, joints). La GMAO gère un <strong>stock minimal</strong> qui déclenche le réapprovisionnement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> justifier un stock de sécurité. Comparer le coût annuel de détention de la pièce (prix × taux de détention, par exemple 20 % par an) au coût indirect évité. Moteur-réducteur à 1 500 € : détention ≈ 300 € par an. Si son absence provoque un arrêt de 2 jours (délai fournisseur) à 800 € par heure sur 16 h de production par jour, le coût évité est de 25 600 € : le stockage est largement justifié même si la panne ne survient qu'une fois tous les cinq ans.</div>"
      },
      {
       "titre": "La TPM et la maintenance autonome",
       "contenu": "\n<p>La <strong>TPM</strong> (Total Productive Maintenance, maintenance productive totale) est une démarche née au Japon qui vise le zéro panne, le zéro défaut et le zéro accident en impliquant tout le personnel, et pas seulement le service maintenance. Elle repose sur plusieurs piliers, dont la <strong>maintenance autonome</strong> : l'opérateur prend en charge le nettoyage, l'inspection, la lubrification simple et le resserrage de son équipement.</p>\n<p>Le technicien de maintenance joue alors un rôle de <strong>formateur et de support</strong> : il rédige avec l'opérateur des standards visuels (repères de niveau, marquage des plages de fonctionnement sur les manomètres, étiquettes d'anomalie), il traite les anomalies que l'opérateur détecte, et il se concentre sur les interventions de niveau plus élevé.</p>\n<p>L'indicateur phare de la TPM est le <strong>TRS</strong> (taux de rendement synthétique), qui mesure la part du temps où la machine produit des pièces bonnes à la cadence nominale. Son calcul et celui des autres indicateurs de maintenance sont détaillés avec la fiabilité.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en TPM, l'opérateur entretient et détecte ; le technicien répare, améliore et forme. La maintenance devient l'affaire de tous.</div>"
      }
     ],
     "points_cles": [
      "La politique de maintenance fixe, pour chaque équipement, la forme de maintenance, les moyens et le budget.",
      "La norme NF EN 13306 fixe la terminologie de la maintenance.",
      "La criticité classe les équipements selon les conséquences de leur défaillance (classes A, B, C).",
      "Un service maintenance s'organise en méthodes, ordonnancement et réalisation.",
      "La GMAO suit le circuit demande d'intervention, ordre de travail, compte rendu, clôture.",
      "Un compte rendu exploitable indique constat, cause, action et résultat.",
      "Le coût de défaillance additionne coûts directs et coûts indirects, souvent prépondérants.",
      "La TPM implique l'opérateur dans la maintenance autonome et vise le zéro panne."
     ],
     "lexique": [
      {
       "terme": "Politique de maintenance",
       "def": "Ensemble des choix d'une entreprise sur les formes, les moyens et le budget de maintenance de ses équipements."
      },
      {
       "terme": "Criticité",
       "def": "Importance des conséquences de la défaillance d'un équipement, évaluée par une note ou une classe."
      },
      {
       "terme": "GMAO",
       "def": "Gestion de maintenance assistée par ordinateur : logiciel qui centralise équipements, interventions, historique et stock."
      },
      {
       "terme": "Demande d'intervention (DI)",
       "def": "Signalement d'un besoin de maintenance émis par l'utilisateur d'un équipement."
      },
      {
       "terme": "Ordre de travail (OT)",
       "def": "Document qui autorise et décrit une intervention de maintenance à réaliser."
      },
      {
       "terme": "Coût indirect",
       "def": "Coût lié aux conséquences de l'arrêt (production perdue, rebuts, pénalités), hors coût de la réparation."
      },
      {
       "terme": "Stock minimal",
       "def": "Quantité en dessous de laquelle la GMAO déclenche le réapprovisionnement d'une pièce."
      },
      {
       "terme": "TPM",
       "def": "Total Productive Maintenance : démarche de maintenance impliquant tout le personnel, visant le zéro panne."
      },
      {
       "terme": "Maintenance autonome",
       "def": "Tâches simples de nettoyage, inspection et lubrification confiées à l'opérateur de production."
      }
     ]
    },
    {
     "id": "bmspc-fiabilite-indicateurs-amdec",
     "titre": "Fiabilité, disponibilité, indicateurs de maintenance et AMDEC",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Calculer MTBF, MTTR et disponibilité opérationnelle à partir d'un historique.",
      "Utiliser le taux de défaillance et la loi exponentielle pour estimer une fiabilité.",
      "Calculer un TRS et identifier la perte prépondérante.",
      "Hiérarchiser les pannes avec un diagramme de Pareto.",
      "Lire et compléter une grille AMDEC simple."
     ],
     "sections": [
      {
       "titre": "Les temps de la vie d'un équipement",
       "contenu": "\n<p>Pour mesurer la performance d'un équipement, il faut découper son temps. Pendant le <strong>temps requis</strong> (le temps pendant lequel la production a besoin de lui), l'équipement est soit en état de fonctionner, soit en panne. On appelle :</p>\n<ul>\n<li><strong>TBF</strong> (time between failures) : temps de bon fonctionnement entre deux défaillances ;</li>\n<li><strong>TTR</strong> (time to repair) : temps de réparation, de l'arrêt à la remise en service, incluant diagnostic, attente de pièces, intervention et essais.</li>\n</ul>\n<p>Sur une période, on calcule les moyennes :</p>\n<ul>\n<li><strong>MTBF</strong> (moyenne des temps de bon fonctionnement) = somme des TBF ÷ nombre de défaillances ;</li>\n<li><strong>MTTR</strong> (moyenne des temps techniques de réparation) = somme des TTR ÷ nombre de défaillances.</li>\n</ul>\n<p>Le MTBF caractérise la <strong>fiabilité</strong> (aptitude à fonctionner sans panne) ; le MTTR caractérise la <strong>maintenabilité</strong> (aptitude à être réparé rapidement). Un MTTR élevé signale souvent une documentation absente, des pièces non stockées ou un équipement difficile d'accès.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer MTBF et MTTR. Un convoyeur fonctionne 400 h sur un mois (temps requis). L'historique indique 5 pannes de durées 1,5 h ; 0,5 h ; 3 h ; 2 h ; 1 h. Somme des TTR = 8 h, donc MTTR = 8 ÷ 5 = 1,6 h. Temps de bon fonctionnement = 400 − 8 = 392 h, donc MTBF = 392 ÷ 5 = 78,4 h. En moyenne, le convoyeur tombe en panne toutes les 78 h environ et chaque panne dure 1 h 36 min.</div>"
      },
      {
       "titre": "Disponibilité et taux de défaillance",
       "contenu": "\n<p>La <strong>disponibilité</strong> est l'aptitude d'un bien à être en état d'accomplir sa fonction au moment où on en a besoin. Elle s'estime par :</p>\n<p><strong>D = MTBF ÷ (MTBF + MTTR)</strong></p>\n<p>Avec l'exemple du convoyeur : D = 78,4 ÷ (78,4 + 1,6) = 0,98, soit 98 %. Pour améliorer la disponibilité, deux leviers : augmenter le MTBF (moins de pannes : préventif, amélioration) ou diminuer le MTTR (réparer plus vite : pièces en stock, procédures, formation, échange standard de sous-ensembles).</p>\n<p>Le <strong>taux de défaillance</strong>, noté λ (lambda), est le nombre moyen de défaillances par unité de temps. Pendant la période de vie utile d'un équipement, où les pannes sont aléatoires, λ est à peu près constant et :</p>\n<p><strong>λ = 1 ÷ MTBF</strong></p>\n<p>L'évolution de λ au cours de la vie d'un équipement suit souvent la <strong>courbe en baignoire</strong> : un taux élevé au début (défauts de jeunesse : montage, rodage, composants défectueux), puis un palier bas et constant (vie utile, pannes aléatoires), puis une remontée (vieillissement, usure, fatigue). La maintenance préventive systématique n'a de sens que pour les composants qui s'usent, c'est-à-dire dans la troisième période.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer systématiquement un composant électronique « pour être tranquille » est souvent inutile : pendant sa vie utile, son risque de panne ne dépend pas de son âge. On risque même d'introduire un défaut de jeunesse avec la pièce neuve.</div>"
      },
      {
       "titre": "Fiabilité et loi exponentielle",
       "contenu": "\n<p>La <strong>fiabilité</strong> R(t) est la probabilité qu'un équipement fonctionne sans défaillance pendant une durée t. Elle vaut 1 (100 %) au départ et diminue avec le temps. Quand λ est constant, la fiabilité suit la <strong>loi exponentielle</strong> :</p>\n<p><strong>R(t) = e<sup>−λt</sup></strong></p>\n<p>Exemple : un capteur a un MTBF de 20 000 h, donc λ = 1 ÷ 20 000 = 5 × 10<sup>−5</sup> h<sup>−1</sup>. Sa probabilité de fonctionner sans panne pendant une année de production de 4 000 h est R = e<sup>−5×10<sup>−5</sup>×4000</sup> = e<sup>−0,2</sup> ≈ 0,82, soit 82 %.</p>\n<p>Lorsque plusieurs composants sont montés <strong>en série</strong> (la panne d'un seul arrête le système), les taux de défaillance s'additionnent et les fiabilités se multiplient : R<sub>système</sub> = R<sub>1</sub> × R<sub>2</sub> × … Avec trois composants de fiabilité 0,95, la fiabilité du système n'est plus que 0,95<sup>3</sup> ≈ 0,86. Lorsque deux composants sont montés <strong>en parallèle</strong> (redondance : il suffit que l'un fonctionne), la probabilité de panne du système est le produit des probabilités de panne : 1 − R<sub>système</sub> = (1 − R<sub>1</sub>) × (1 − R<sub>2</sub>). Deux pompes de fiabilité 0,9 en redondance donnent 1 − 0,1 × 0,1 = 0,99.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en série, la fiabilité baisse avec le nombre de composants ; en parallèle (redondance), elle augmente. C'est pourquoi les équipements critiques sont souvent doublés.</div>"
      },
      {
       "titre": "Le TRS et les indicateurs de performance",
       "contenu": "\n<p>Le <strong>TRS</strong> (taux de rendement synthétique) mesure l'efficacité réelle d'une machine. Il se calcule comme le produit de trois taux :</p>\n<ul>\n<li><strong>taux de disponibilité</strong> = temps de fonctionnement ÷ temps requis (pertes : pannes, changements de format, réglages) ;</li>\n<li><strong>taux de performance</strong> = (nombre de pièces produites × temps de cycle nominal) ÷ temps de fonctionnement (pertes : micro-arrêts, ralentissements) ;</li>\n<li><strong>taux de qualité</strong> = pièces bonnes ÷ pièces produites (pertes : rebuts, retouches).</li>\n</ul>\n<p>Le TRS peut aussi se calculer directement : TRS = (pièces bonnes × temps de cycle nominal) ÷ temps requis.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un TRS. Poste de 8 h (480 min), pause de 30 min non comptée : temps requis 450 min. Arrêts : panne 40 min, changement de format 20 min, donc temps de fonctionnement 390 min. Temps de cycle nominal 0,5 min par pièce ; 700 pièces produites dont 665 bonnes. Disponibilité = 390 ÷ 450 = 0,867. Performance = 700 × 0,5 ÷ 390 = 0,897. Qualité = 665 ÷ 700 = 0,95. TRS = 0,867 × 0,897 × 0,95 ≈ 0,739, soit 73,9 %. Vérification : 665 × 0,5 ÷ 450 = 0,739. La perte principale est la disponibilité : c'est elle qu'il faut attaquer en premier.</div>\n<p>D'autres indicateurs, recensés par la norme <strong>NF EN 15341</strong>, sont suivis par le service : taux de maintenance préventive (part des heures de préventif dans le total), respect du planning préventif, coût de maintenance rapporté à la valeur produite, nombre d'accidents. Un indicateur n'a de valeur que s'il est suivi dans le temps et comparé à un objectif.</p>"
      },
      {
       "titre": "Hiérarchiser les pannes : le diagramme de Pareto",
       "contenu": "\n<p>Un historique de maintenance contient souvent des dizaines de pannes. Pour savoir sur lesquelles agir en priorité, on utilise le <strong>diagramme de Pareto</strong>, fondé sur la règle empirique des 20/80 : une petite partie des causes provoque la plus grande partie des effets.</p>\n<p>Démarche : regrouper les pannes par type ou par sous-ensemble, choisir le critère (nombre de pannes, durée d'arrêt ou coût), trier par valeur décroissante, calculer les pourcentages et les pourcentages cumulés, tracer les barres et la courbe des cumuls. On distingue alors une <strong>zone A</strong> (environ 80 % du total, à traiter en priorité), une zone B et une zone C.</p>\n<table>\n<thead><tr><th>Sous-ensemble</th><th>Durée d'arrêt (h)</th><th>%</th><th>% cumulé</th></tr></thead>\n<tbody>\n<tr><td>Bouchonneuse</td><td>36</td><td>45</td><td>45</td></tr>\n<tr><td>Étiqueteuse</td><td>20</td><td>25</td><td>70</td></tr>\n<tr><td>Convoyeur d'entrée</td><td>10</td><td>12,5</td><td>82,5</td></tr>\n<tr><td>Remplisseuse</td><td>8</td><td>10</td><td>92,5</td></tr>\n<tr><td>Divers</td><td>6</td><td>7,5</td><td>100</td></tr>\n<tr><td>Total</td><td>80</td><td>100</td><td>—</td></tr>\n</tbody>\n</table>\n<p>Ici, trois sous-ensembles représentent plus de 80 % des heures d'arrêt : la bouchonneuse, l'étiqueteuse et le convoyeur d'entrée constituent la zone A.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le classement change selon le critère. Une panne très fréquente mais très courte arrive en tête en nombre, pas forcément en durée. Le critère pertinent pour la production est généralement la durée d'arrêt ou le coût.</div>"
      },
      {
       "titre": "L'AMDEC : anticiper les défaillances",
       "contenu": "\n<p>L'<strong>AMDEC</strong> (analyse des modes de défaillance, de leurs effets et de leur criticité) est une méthode d'analyse préventive, menée en groupe, qui recense pour chaque constituant la façon dont il peut défaillir et les conséquences. Elle se présente sous forme d'un tableau.</p>\n<table>\n<thead><tr><th>Constituant</th><th>Mode de défaillance</th><th>Cause</th><th>Effet</th><th>Détection</th><th>F</th><th>G</th><th>D</th><th>C</th><th>Action</th></tr></thead>\n<tbody>\n<tr><td>Courroie du convoyeur</td><td>Patinage</td><td>Tension insuffisante, usure</td><td>Ralentissement, accumulation de flacons</td><td>Visuelle, bruit</td><td>3</td><td>2</td><td>2</td><td>12</td><td>Contrôle de tension mensuel</td></tr>\n<tr><td>Roulement du moteur</td><td>Grippage</td><td>Défaut de lubrification</td><td>Arrêt du convoyeur</td><td>Aucune avant la panne</td><td>2</td><td>3</td><td>4</td><td>24</td><td>Mesure vibratoire trimestrielle</td></tr>\n</tbody>\n</table>\n<p>F est la note de <strong>fréquence</strong>, G celle de <strong>gravité</strong>, D celle de <strong>non-détection</strong> (plus la défaillance est difficile à détecter avant qu'elle ne produise son effet, plus la note est élevée). La criticité vaut C = F × G × D. Au-dessus d'un seuil fixé par le groupe, une action corrective ou préventive est obligatoire. Après l'action, on recalcule la criticité pour vérifier qu'elle a baissé.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'AMDEC est souvent réalisée à l'installation d'une nouvelle machine pour construire son plan de maintenance préventive. Le technicien apporte son expérience des pannes réelles, que le constructeur ne connaît pas toujours.</div>"
      }
     ],
     "points_cles": [
      "MTBF = somme des temps de bon fonctionnement ÷ nombre de pannes ; il mesure la fiabilité.",
      "MTTR = somme des temps de réparation ÷ nombre de pannes ; il mesure la maintenabilité.",
      "Disponibilité D = MTBF ÷ (MTBF + MTTR).",
      "Avec un taux de défaillance constant, λ = 1 ÷ MTBF et R(t) = e^(−λt).",
      "En série, les fiabilités se multiplient ; la redondance en parallèle améliore la fiabilité.",
      "TRS = disponibilité × performance × qualité = pièces bonnes × temps de cycle ÷ temps requis.",
      "Le diagramme de Pareto désigne les quelques causes qui représentent environ 80 % des pertes.",
      "L'AMDEC calcule une criticité C = F × G × D pour décider des actions préventives."
     ],
     "lexique": [
      {
       "terme": "MTBF",
       "def": "Moyenne des temps de bon fonctionnement entre deux défaillances."
      },
      {
       "terme": "MTTR",
       "def": "Moyenne des temps techniques de réparation."
      },
      {
       "terme": "Fiabilité",
       "def": "Probabilité qu'un bien fonctionne sans défaillance pendant une durée donnée."
      },
      {
       "terme": "Maintenabilité",
       "def": "Aptitude d'un bien à être maintenu ou rétabli rapidement dans son état de fonctionnement."
      },
      {
       "terme": "Disponibilité",
       "def": "Aptitude d'un bien à être en état d'accomplir sa fonction quand on en a besoin."
      },
      {
       "terme": "Taux de défaillance (λ)",
       "def": "Nombre moyen de défaillances par unité de temps."
      },
      {
       "terme": "Courbe en baignoire",
       "def": "Évolution typique du taux de défaillance : jeunesse, vie utile, vieillissement."
      },
      {
       "terme": "TRS",
       "def": "Taux de rendement synthétique : part du temps requis réellement transformée en pièces bonnes à la cadence nominale."
      },
      {
       "terme": "Diagramme de Pareto",
       "def": "Histogramme trié par ordre décroissant avec courbe des cumuls, servant à hiérarchiser les causes."
      },
      {
       "terme": "AMDEC",
       "def": "Analyse des modes de défaillance, de leurs effets et de leur criticité."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — La chaîne d'énergie",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmspc-distribution-protection-electrique",
     "titre": "Distribution de l'énergie électrique et protection des installations",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire la distribution de l'énergie électrique en triphasé dans un atelier, du poste de livraison à la machine.",
      "Calculer puissances, courants et énergie consommée par un récepteur triphasé.",
      "Distinguer les régimes de neutre TT, TN et IT et leurs conséquences pour la maintenance.",
      "Choisir et contrôler les protections contre les surintensités et les contacts indirects.",
      "Interpréter le déclenchement d'une protection lors d'un diagnostic."
     ],
     "sections": [
      {
       "titre": "Du réseau à l'armoire de la machine",
       "contenu": "\n<p>Un site industriel reçoit l'énergie électrique du distributeur, le plus souvent en <strong>haute tension</strong> (HTA, typiquement 20 kV). Un <strong>poste de transformation</strong> abaisse cette tension en <strong>basse tension</strong> triphasée 400 V entre phases et 230 V entre phase et neutre, à la fréquence de 50 Hz. Les petites installations sont directement raccordées en basse tension.</p>\n<p>Depuis le <strong>tableau général basse tension</strong> (TGBT), l'énergie est répartie vers des tableaux divisionnaires (un par atelier ou par ligne), puis vers l'<strong>armoire électrique</strong> de chaque machine. Dans l'armoire, on retrouve de l'amont vers l'aval : le <strong>sectionneur général</strong> (souvent cadenassable sur la porte), les protections, les préactionneurs (contacteurs, variateurs, démarreurs), le transformateur ou l'alimentation de commande (24 V continu pour l'automate et les capteurs), puis les borniers de raccordement.</p>\n<table>\n<thead><tr><th>Domaine</th><th>Courant alternatif</th><th>Courant continu</th></tr></thead>\n<tbody>\n<tr><td>Très basse tension (TBT)</td><td>≤ 50 V</td><td>≤ 120 V</td></tr>\n<tr><td>Basse tension (BT)</td><td>50 V à 1 000 V</td><td>120 V à 1 500 V</td></tr>\n<tr><td>Haute tension A (HTA)</td><td>1 000 V à 50 000 V</td><td>1 500 V à 75 000 V</td></tr>\n</tbody>\n</table>\n<p>Ces domaines de tension sont ceux utilisés par la publication NF C 18-510 et par la réglementation sur les habilitations. Le technicien MSPC travaille essentiellement en BT et TBT.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'armoire d'une machine récente porte souvent deux sources : le réseau 400 V et une alimentation 24 V continu secourue. Couper le sectionneur général ne coupe pas forcément tout : certains circuits (éclairage d'armoire, prises de service, alimentation d'un automate de sécurité) peuvent rester sous tension. Le schéma électrique les signale.</div>"
      },
      {
       "titre": "Grandeurs et puissances en triphasé",
       "contenu": "\n<p>Un réseau triphasé comporte trois conducteurs de phase (L1, L2, L3), éventuellement un neutre (N) et toujours un conducteur de protection (PE, vert et jaune). On distingue la <strong>tension simple</strong> V entre une phase et le neutre (230 V) et la <strong>tension composée</strong> U entre deux phases (400 V), avec U = V × √3.</p>\n<p>Pour un récepteur triphasé équilibré (moteur, résistance de four) parcouru par un courant de ligne I :</p>\n<ul>\n<li>puissance active P = √3 × U × I × cos φ, en watts (W) ;</li>\n<li>puissance réactive Q = √3 × U × I × sin φ, en voltampères réactifs (var) ;</li>\n<li>puissance apparente S = √3 × U × I, en voltampères (VA).</li>\n</ul>\n<p>Le <strong>facteur de puissance</strong> cos φ traduit le déphasage entre tension et courant ; il vaut 1 pour une résistance et environ 0,8 à 0,85 pour un moteur asynchrone en charge. L'<strong>énergie</strong> consommée vaut E = P × t, en wattheures (Wh) ou kilowattheures (kWh).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier le courant d'un moteur. Plaque : 7,5 kW, 400 V, cos φ = 0,84, rendement η = 0,89. La puissance utile (mécanique) est 7,5 kW, donc la puissance absorbée vaut P<sub>a</sub> = 7 500 ÷ 0,89 ≈ 8 427 W. Courant : I = P<sub>a</sub> ÷ (√3 × U × cos φ) = 8 427 ÷ (1,732 × 400 × 0,84) ≈ 14,5 A. Si la pince ampèremétrique mesure 18 A en fonctionnement normal, le moteur est surchargé ou mal alimenté : il faut chercher la cause avant qu'il ne chauffe.</div>"
      },
      {
       "titre": "Les régimes de neutre",
       "contenu": "\n<p>Le <strong>schéma de liaison à la terre</strong> (SLT), appelé couramment régime de neutre, précise comment le neutre du transformateur et les masses des appareils sont reliés à la terre. Il est désigné par deux lettres.</p>\n<table>\n<thead><tr><th>Régime</th><th>Neutre du transformateur</th><th>Masses</th><th>Au premier défaut d'isolement</th><th>Usage courant</th></tr></thead>\n<tbody>\n<tr><td>TT</td><td>Relié à la terre</td><td>Reliées à une prise de terre</td><td>Courant de défaut faible, coupure par dispositif différentiel</td><td>Bâtiments raccordés en BT, petites industries</td></tr>\n<tr><td>TN (TN-C, TN-S)</td><td>Relié à la terre</td><td>Reliées au neutre ou au PE relié au neutre</td><td>Défaut équivalent à un court-circuit, coupure par disjoncteur ou fusible</td><td>Industries avec transformateur privé</td></tr>\n<tr><td>IT</td><td>Isolé ou relié par une impédance élevée</td><td>Reliées à la terre</td><td>Pas de coupure, alarme du contrôleur permanent d'isolement</td><td>Process qui ne doivent pas s'arrêter : hôpitaux, chimie, verrerie</td></tr>\n</tbody>\n</table>\n<p>En régime <strong>IT</strong>, le premier défaut ne coupe pas l'installation : un <strong>contrôleur permanent d'isolement</strong> (CPI) le signale. La maintenance doit alors le rechercher et l'éliminer rapidement, car un second défaut sur une autre phase provoquerait un court-circuit et la coupure.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en régime TN-C, le même conducteur (PEN) sert de neutre et de protection. Il ne doit jamais être coupé ni sectionné seul. Avant de déconnecter un conducteur vert et jaune repéré PEN, il faut vérifier le schéma : le couper peut mettre sous tension les masses de toute une partie de l'installation.</div>"
      },
      {
       "titre": "Protection contre les surintensités",
       "contenu": "\n<p>Une <strong>surintensité</strong> est un courant supérieur au courant nominal. On distingue la <strong>surcharge</strong> (courant un peu trop élevé pendant longtemps : moteur freiné, roulement grippé) et le <strong>court-circuit</strong> (courant très élevé et brutal : contact entre phases, câble écrasé).</p>\n<ul>\n<li>Le <strong>disjoncteur magnétothermique</strong> associe un déclencheur thermique (bilame, contre les surcharges) et un déclencheur magnétique (bobine, contre les courts-circuits). Pour les disjoncteurs modulaires, la <strong>courbe</strong> indique le seuil magnétique : B (3 à 5 I<sub>n</sub>), C (5 à 10 I<sub>n</sub>), D (10 à 20 I<sub>n</sub>). La courbe D est choisie pour les récepteurs à fort appel de courant, comme les transformateurs ou certains moteurs.</li>\n<li>Le <strong>fusible</strong> fond en cas de surintensité. Les fusibles gG protègent les circuits contre surcharges et courts-circuits ; les fusibles aM, prévus pour supporter les pointes de démarrage, protègent les moteurs contre les courts-circuits seulement et doivent être associés à un relais thermique.</li>\n<li>Le <strong>disjoncteur-moteur</strong> (ou disjoncteur magnétothermique moteur) combine sectionnement, protection contre les courts-circuits et protection thermique réglable contre les surcharges du moteur.</li>\n<li>Le <strong>relais thermique</strong>, associé au contacteur, protège le moteur contre les surcharges ; il se règle sur le courant nominal lu sur la plaque du moteur.</li>\n</ul>\n<p>La <strong>sélectivité</strong> est la coordination des protections en série : en cas de défaut, seule la protection immédiatement en amont doit déclencher, afin de ne pas couper toute l'installation pour un défaut sur une seule machine.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le relais thermique d'un moteur se règle sur le courant nominal de la plaque, pas « un peu au-dessus pour qu'il ne déclenche plus ». Un thermique qui déclenche signale un problème à rechercher (mécanique bloquée, phase manquante, tension basse), pas un réglage à augmenter.</div>"
      },
      {
       "titre": "Protection des personnes contre les contacts",
       "contenu": "\n<p>Les risques électriques pour les personnes proviennent de deux types de contacts :</p>\n<ul>\n<li>le <strong>contact direct</strong> avec une partie active (conducteur dénudé, borne nue) ; on s'en protège par l'isolation, les enveloppes (indice IP), les capots, l'éloignement, et en complément par le dispositif différentiel 30 mA ;</li>\n<li>le <strong>contact indirect</strong> avec une masse mise accidentellement sous tension par un défaut d'isolement (carcasse de moteur, porte d'armoire) ; on s'en protège par la mise à la terre des masses associée à un dispositif de coupure automatique adapté au régime de neutre.</li>\n</ul>\n<p>Le <strong>dispositif différentiel à courant résiduel</strong> (DDR) compare le courant qui part dans les conducteurs actifs à celui qui revient. Une différence signifie qu'une partie du courant fuit, par la terre ou par une personne. Il est caractérisé par sa sensibilité I<sub>Δn</sub> : 30 mA (haute sensibilité, protection complémentaire des personnes, obligatoire notamment sur les prises de courant), 300 mA ou plus (protection des installations contre l'incendie et les défauts d'isolement).</p>\n<p>Le bouton test d'un différentiel doit être actionné périodiquement : il simule une fuite et vérifie le déclenchement mécanique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réagir à un déclenchement de différentiel sur une machine. 1) Ne pas réarmer à répétition. 2) Consigner la machine. 3) Débrancher ou isoler les départs un par un (moteurs, résistances, alimentations). 4) Mesurer la résistance d'isolement de chaque départ avec un mégohmmètre sous 500 V continu, entre conducteurs actifs reliés et terre. 5) Le départ dont l'isolement est nettement plus faible que les autres est le suspect (humidité dans une boîte à bornes, câble écrasé, résistance chauffante percée). Les valeurs minimales acceptées sont fixées par la norme d'installation : se référer à la procédure de l'entreprise.</div>"
      },
      {
       "titre": "Contrôler et maintenir une installation électrique",
       "contenu": "\n<p>Les installations électriques des lieux de travail font l'objet de <strong>vérifications périodiques</strong> réglementaires, en principe annuelles, réalisées par une personne ou un organisme qualifié, qui remet un rapport listant les non-conformités. Le service maintenance est chargé de lever ces observations.</p>\n<p>La maintenance préventive électrique courante comprend :</p>\n<ul>\n<li>le resserrage des connexions de puissance au couple prescrit (les vibrations et les cycles thermiques les desserrent) ;</li>\n<li>la <strong>thermographie</strong> infrarouge des armoires en charge, qui révèle les points chauds (connexions desserrées, déséquilibre de phases) ;</li>\n<li>le nettoyage et le contrôle des filtres de ventilation des armoires (un variateur qui chauffe vieillit vite) ;</li>\n<li>le test des différentiels et des arrêts d'urgence ;</li>\n<li>le contrôle visuel des câbles, des presse-étoupes et des indices de protection.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la thermographie et les mesures de courant se font sous tension, donc avec une habilitation adaptée, les EPI requis et en respectant les distances. Le resserrage des bornes, lui, se fait toujours hors tension, après consignation.</div>"
      }
     ],
     "points_cles": [
      "Le réseau BT industriel est en triphasé 400 V entre phases et 230 V entre phase et neutre, à 50 Hz.",
      "Puissance active en triphasé : P = √3 × U × I × cos φ.",
      "Le régime de neutre (TT, TN, IT) détermine comment un défaut d'isolement est détecté et coupé.",
      "En IT, le premier défaut est seulement signalé par le contrôleur permanent d'isolement ; il doit être recherché rapidement.",
      "Le disjoncteur magnétothermique protège contre surcharges (thermique) et courts-circuits (magnétique).",
      "Le relais thermique d'un moteur se règle sur le courant nominal de la plaque.",
      "Le différentiel 30 mA assure une protection complémentaire des personnes ; il se teste périodiquement.",
      "Un déclenchement de protection est un symptôme à diagnostiquer, pas un incident à réarmer en boucle."
     ],
     "lexique": [
      {
       "terme": "TGBT",
       "def": "Tableau général basse tension, d'où part la distribution vers les tableaux divisionnaires."
      },
      {
       "terme": "Tension composée",
       "def": "Tension entre deux phases d'un réseau triphasé (400 V en BT industrielle)."
      },
      {
       "terme": "Facteur de puissance",
       "def": "Rapport entre puissance active et puissance apparente, noté cos φ pour un récepteur sinusoïdal."
      },
      {
       "terme": "Régime de neutre",
       "def": "Schéma de liaison à la terre du neutre et des masses (TT, TN, IT)."
      },
      {
       "terme": "Contrôleur permanent d'isolement",
       "def": "Appareil qui surveille l'isolement d'un réseau IT et signale le premier défaut."
      },
      {
       "terme": "Surcharge",
       "def": "Courant modérément supérieur au nominal pendant une durée prolongée."
      },
      {
       "terme": "Court-circuit",
       "def": "Liaison accidentelle de faible impédance entre conducteurs actifs, provoquant un courant très élevé."
      },
      {
       "terme": "Sélectivité",
       "def": "Coordination des protections pour que seule celle située juste en amont du défaut déclenche."
      },
      {
       "terme": "Contact indirect",
       "def": "Contact avec une masse mise accidentellement sous tension par un défaut d'isolement."
      },
      {
       "terme": "DDR",
       "def": "Dispositif différentiel à courant résiduel, qui coupe le circuit en cas de fuite de courant."
      }
     ]
    },
    {
     "id": "bmspc-moteurs-variateurs",
     "titre": "Moteurs électriques, démarrage et variation de vitesse",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Exploiter la plaque signalétique d'un moteur asynchrone triphasé et choisir son couplage.",
      "Calculer vitesse de synchronisme, glissement, couple et rendement.",
      "Comparer les modes de démarrage : direct, étoile-triangle, démarreur progressif, variateur.",
      "Décrire la structure et le paramétrage de base d'un variateur de fréquence.",
      "Situer les servomoteurs et les moteurs à courant continu dans un système automatisé."
     ],
     "sections": [
      {
       "titre": "Le moteur asynchrone triphasé",
       "contenu": "\n<p>Le <strong>moteur asynchrone triphasé</strong> est l'actionneur électrique le plus répandu dans l'industrie : robuste, peu coûteux, sans balais. Il comprend un <strong>stator</strong> (partie fixe portant trois enroulements) et un <strong>rotor</strong> (partie tournante, le plus souvent « à cage d'écureuil » : barres conductrices court-circuitées par deux anneaux).</p>\n<p>Alimentés en triphasé, les enroulements du stator créent un <strong>champ magnétique tournant</strong> à la <strong>vitesse de synchronisme</strong> :</p>\n<p><strong>n<sub>s</sub> = 60 × f ÷ p</strong> (n<sub>s</sub> en tr/min, f en Hz, p nombre de paires de pôles)</p>\n<p>À 50 Hz : 3 000 tr/min pour p = 1, 1 500 tr/min pour p = 2, 1 000 tr/min pour p = 3, 750 tr/min pour p = 4. Le rotor tourne toujours un peu moins vite que le champ, d'où le nom « asynchrone ». L'écart relatif est le <strong>glissement</strong> :</p>\n<p><strong>g = (n<sub>s</sub> − n) ÷ n<sub>s</sub></strong></p>\n<p>Un moteur de 1 500 tr/min de synchronisme qui tourne à 1 455 tr/min en charge a un glissement de 45 ÷ 1 500 = 0,03, soit 3 %. Le glissement augmente avec la charge.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la vitesse d'un moteur asynchrone dépend de la fréquence d'alimentation et du nombre de pôles, et très peu de la tension. Pour faire varier la vitesse, on fait varier la fréquence : c'est le rôle du variateur.</div>"
      },
      {
       "titre": "Plaque signalétique et couplage",
       "contenu": "\n<p>La <strong>plaque signalétique</strong> donne les caractéristiques nominales. Exemple de plaque d'un moteur :</p>\n<table>\n<thead><tr><th>Indication</th><th>Valeur</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Tensions</td><td>230 V Δ / 400 V Y</td><td>Couplage triangle sur réseau 230 V entre phases, étoile sur réseau 400 V</td></tr>\n<tr><td>Courants</td><td>14,2 A / 8,2 A</td><td>Courant nominal de ligne dans chaque couplage</td></tr>\n<tr><td>Puissance</td><td>4 kW</td><td>Puissance mécanique utile sur l'arbre</td></tr>\n<tr><td>Vitesse</td><td>1 440 tr/min</td><td>Vitesse nominale en charge (moteur 4 pôles)</td></tr>\n<tr><td>cos φ</td><td>0,82</td><td>Facteur de puissance nominal</td></tr>\n<tr><td>IP</td><td>IP55</td><td>Protection contre les poussières et les jets d'eau</td></tr>\n<tr><td>Classe d'isolation</td><td>F</td><td>Température maximale admissible des isolants</td></tr>\n<tr><td>Classe de rendement</td><td>IE3</td><td>Niveau de rendement selon la classification IEC 60034-30-1</td></tr>\n</tbody>\n</table>\n<p>La règle du <strong>couplage</strong> : chaque enroulement doit recevoir la plus petite des deux tensions de la plaque. Sur un réseau 400 V, un moteur 230/400 V se couple en <strong>étoile</strong> (chaque enroulement reçoit 400 ÷ √3 = 230 V). Un moteur 400/690 V se couple en <strong>triangle</strong> sur 400 V. Le couplage se réalise sur la plaque à bornes avec des barrettes : trois barrettes verticales pour le triangle (U1-W2, V1-U2, W1-V2), deux barrettes horizontales reliant W2, U2 et V2 pour l'étoile.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un moteur 230/400 V couplé en triangle sur un réseau 400 V reçoit √3 fois trop de tension par enroulement : il chauffe très vite et se détruit. Après tout remplacement de moteur, vérifier le couplage avant la première mise sous tension.</div>"
      },
      {
       "titre": "Couple, puissance et rendement",
       "contenu": "\n<p>La puissance mécanique utile d'un moteur est liée à son couple et à sa vitesse :</p>\n<p><strong>P<sub>u</sub> = C<sub>u</sub> × Ω</strong>, avec Ω = 2π × n ÷ 60 (Ω en rad/s, n en tr/min, C en N·m, P en W)</p>\n<p>Le <strong>rendement</strong> est le rapport entre puissance utile et puissance absorbée : η = P<sub>u</sub> ÷ P<sub>a</sub>. Les pertes (effet Joule dans les enroulements, pertes magnétiques, frottements, ventilation) se transforment en chaleur. Le règlement européen sur l'écoconception des moteurs impose des classes de rendement minimales (IE3, voire IE4 selon la puissance) pour les moteurs mis sur le marché ; le niveau exact dépend de la puissance et du type de moteur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le couple nominal. Moteur de 4 kW à 1 440 tr/min. Ω = 2 × 3,14 × 1 440 ÷ 60 ≈ 150,8 rad/s. C<sub>u</sub> = P<sub>u</sub> ÷ Ω = 4 000 ÷ 150,8 ≈ 26,5 N·m. Si un réducteur de rapport 1/20 avec un rendement de 0,9 est accouplé, le couple en sortie vaut environ 26,5 × 20 × 0,9 ≈ 477 N·m et la vitesse 1 440 ÷ 20 = 72 tr/min.</div>\n<p>La <strong>courbe couple-vitesse</strong> d'un moteur asynchrone montre un couple de démarrage élevé (souvent 2 à 3 fois le couple nominal), un couple maximal, puis une chute rapide près de la vitesse de synchronisme. Le point de fonctionnement est l'intersection avec la courbe du couple résistant de la machine entraînée.</p>"
      },
      {
       "titre": "Les modes de démarrage",
       "contenu": "\n<p>Au démarrage direct, un moteur asynchrone absorbe un courant de 5 à 8 fois son courant nominal pendant quelques secondes. Ce pic peut provoquer des chutes de tension, des déclenchements et des chocs mécaniques. Plusieurs solutions existent.</p>\n<table>\n<thead><tr><th>Mode</th><th>Principe</th><th>Avantages</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Direct</td><td>Un contacteur applique la pleine tension</td><td>Simple, bon couple de démarrage</td><td>Fort appel de courant, à-coup mécanique</td></tr>\n<tr><td>Étoile-triangle</td><td>Démarrage en étoile puis passage en triangle (moteur prévu pour fonctionner en triangle sur le réseau)</td><td>Courant et couple de démarrage divisés par 3</td><td>Pointe au passage étoile-triangle, couple faible : démarrage à vide ou faible charge</td></tr>\n<tr><td>Démarreur progressif</td><td>Des thyristors augmentent progressivement la tension</td><td>Démarrage et arrêt doux, limitation du courant</td><td>Pas de variation de vitesse en régime établi</td></tr>\n<tr><td>Variateur de fréquence</td><td>Fréquence et tension augmentent ensemble</td><td>Courant limité, couple élevé dès les basses vitesses, vitesse réglable, économies d'énergie</td><td>Coût, harmoniques, exigences de câblage (blindage, CEM)</td></tr>\n</tbody>\n</table>\n<p>L'inversion du sens de rotation s'obtient en permutant deux phases, par deux contacteurs verrouillés mécaniquement et électriquement entre eux pour qu'ils ne puissent jamais être fermés ensemble (ce qui provoquerait un court-circuit).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une pompe ou un ventilateur, le remplacement d'une vanne de réglage par un variateur réduit fortement la consommation. Pour ces machines centrifuges, la puissance varie à peu près comme le cube de la vitesse : à 80 % de la vitesse, la puissance tombe à environ 50 % (0,8 × 0,8 × 0,8 = 0,512).</div>"
      },
      {
       "titre": "Le variateur de fréquence",
       "contenu": "\n<p>Le <strong>variateur de fréquence</strong> (ou convertisseur de fréquence) comprend trois étages :</p>\n<ol>\n<li>un <strong>redresseur</strong> à diodes qui transforme l'alternatif du réseau en continu ;</li>\n<li>un <strong>bus continu</strong> avec des condensateurs qui lissent la tension (environ 560 V continu pour un réseau 400 V) ;</li>\n<li>un <strong>onduleur</strong> à transistors IGBT qui recrée une tension alternative de fréquence et d'amplitude réglables, par modulation de largeur d'impulsion (MLI).</li>\n</ol>\n<p>Le variateur se commande par des entrées logiques (marche avant, marche arrière, vitesses présélectionnées), une entrée analogique (consigne 0-10 V ou 4-20 mA) ou un réseau de communication. Ses <strong>paramètres</strong> principaux sont : données de plaque du moteur, rampes d'accélération et de décélération, vitesses minimale et maximale, limitation de courant, mode de commande (loi U/f ou contrôle vectoriel), affectation des entrées et sorties.</p>\n<p>En décélération rapide d'une charge à forte inertie, le moteur fonctionne en génératrice et renvoie de l'énergie vers le bus continu. Si la tension du bus monte trop, le variateur se met en défaut « surtension ». On allonge alors la rampe ou on ajoute une <strong>résistance de freinage</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les condensateurs du bus continu restent chargés plusieurs minutes après la coupure du réseau. Avant toute intervention à l'intérieur, attendre le délai indiqué sur l'appareil (souvent 5 à 15 minutes) puis vérifier l'absence de tension sur les bornes du bus continu avec un appareil adapté.</div>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> remplacer un variateur à l'identique. 1) Sauvegarder les paramètres de l'ancien variateur (console, carte mémoire ou logiciel) s'il est encore accessible. 2) Relever le câblage borne par borne. 3) Consigner, attendre la décharge, vérifier l'absence de tension. 4) Remplacer en respectant le blindage des câbles moteur (reprise à 360° aux deux extrémités). 5) Recharger les paramètres ou les saisir depuis la fiche de paramétrage du dossier. 6) Lancer l'auto-réglage (autotuning) si prévu. 7) Essayer à vide, puis en charge, en vérifiant sens de rotation, rampes et courant.</div>"
      },
      {
       "titre": "Autres moteurs des systèmes automatisés",
       "contenu": "\n<p>D'autres moteurs se rencontrent sur les machines modernes :</p>\n<ul>\n<li>le <strong>servomoteur</strong>, généralement synchrone à aimants permanents, piloté par un <strong>servo-variateur</strong> et équipé d'un <strong>codeur</strong> qui renvoie la position du rotor. Il assure des positionnements précis et dynamiques (axes de robots, découpe à la volée, dosage). Après remplacement, une <strong>prise d'origine</strong> (référence de position) est souvent nécessaire ;</li>\n<li>le <strong>moteur pas à pas</strong>, qui avance d'un angle fixe à chaque impulsion, pour de petits positionnements sans grand effort ;</li>\n<li>le <strong>moteur à courant continu</strong>, encore présent sur des équipements anciens ; sa vitesse dépend de la tension d'induit, et ses balais s'usent et se contrôlent périodiquement ;</li>\n<li>le <strong>moteur-frein</strong>, asynchrone équipé d'un frein à manque de courant : le frein est serré tant qu'il n'est pas alimenté, ce qui maintient la charge en cas de coupure (levage, convoyeurs inclinés). L'entrefer du frein se contrôle et se règle périodiquement.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un frein à manque de courant est une sécurité : sa vérification (entrefer, usure de la garniture, temps de serrage) fait partie de la maintenance préventive des axes verticaux et des levages.</div>"
      }
     ],
     "points_cles": [
      "Vitesse de synchronisme : n_s = 60 × f ÷ p ; le rotor tourne légèrement moins vite (glissement).",
      "Chaque enroulement doit recevoir la plus petite tension de la plaque : 230/400 V se couple en étoile sur 400 V.",
      "P_u = C_u × Ω, avec Ω = 2π × n ÷ 60 ; rendement η = P_u ÷ P_a.",
      "Le démarrage direct appelle 5 à 8 fois le courant nominal ; l'étoile-triangle divise courant et couple par 3.",
      "Un variateur comprend redresseur, bus continu et onduleur ; il fait varier fréquence et tension.",
      "Le bus continu d'un variateur reste dangereux plusieurs minutes après coupure.",
      "Les paramètres d'un variateur se sauvegardent et se documentent avant tout remplacement.",
      "Le servomoteur associe moteur, codeur et servo-variateur pour un positionnement précis."
     ],
     "lexique": [
      {
       "terme": "Vitesse de synchronisme",
       "def": "Vitesse de rotation du champ magnétique du stator, fixée par la fréquence et le nombre de paires de pôles."
      },
      {
       "terme": "Glissement",
       "def": "Écart relatif entre la vitesse de synchronisme et la vitesse réelle du rotor."
      },
      {
       "terme": "Couplage",
       "def": "Manière de relier les enroulements du moteur (étoile ou triangle) selon la tension du réseau."
      },
      {
       "terme": "Rendement",
       "def": "Rapport entre puissance utile et puissance absorbée."
      },
      {
       "terme": "Démarreur progressif",
       "def": "Appareil électronique qui augmente progressivement la tension au démarrage."
      },
      {
       "terme": "Variateur de fréquence",
       "def": "Convertisseur qui alimente un moteur avec une fréquence et une tension réglables."
      },
      {
       "terme": "Bus continu",
       "def": "Étage intermédiaire d'un variateur, à tension continue lissée par des condensateurs."
      },
      {
       "terme": "Rampe",
       "def": "Durée réglée pour passer de l'arrêt à la vitesse maximale (accélération) ou inversement."
      },
      {
       "terme": "Servomoteur",
       "def": "Moteur asservi en position ou en vitesse grâce à un codeur et un servo-variateur."
      },
      {
       "terme": "Frein à manque de courant",
       "def": "Frein serré par ressort tant qu'il n'est pas alimenté électriquement."
      }
     ]
    },
    {
     "id": "bmspc-pneumatique-industrielle",
     "titre": "Pneumatique industrielle : production, distribution et actionneurs",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire la chaîne de production et de traitement de l'air comprimé.",
      "Identifier les distributeurs par leur désignation et leur mode de commande.",
      "Calculer l'effort d'un vérin et sa consommation d'air.",
      "Régler la vitesse d'un vérin et choisir les composants de sécurité pneumatique.",
      "Organiser la chasse aux fuites et la maintenance d'un réseau d'air comprimé."
     ],
     "sections": [
      {
       "titre": "Produire et traiter l'air comprimé",
       "contenu": "\n<p>L'air comprimé est une énergie propre, sûre et facile à transporter, utilisée pour les mouvements rapides et les efforts modérés : serrage, éjection, prise et dépose, soufflage, vide par venturi. C'est aussi l'une des énergies les plus coûteuses de l'usine : une grande partie de l'énergie électrique absorbée par le compresseur est perdue en chaleur.</p>\n<p>Une <strong>centrale d'air comprimé</strong> comprend :</p>\n<ul>\n<li>le <strong>compresseur</strong>, le plus souvent à vis lubrifiée dans l'industrie, qui aspire l'air ambiant et le comprime à 7 à 10 bar ;</li>\n<li>le <strong>réservoir</strong>, qui stocke l'air, amortit les variations de consommation et laisse condenser une partie de l'eau ; c'est un équipement sous pression soumis à des contrôles réglementaires ;</li>\n<li>le <strong>sécheur</strong> (frigorifique ou à adsorption), qui élimine la vapeur d'eau pour éviter la condensation dans le réseau ;</li>\n<li>les <strong>filtres</strong> de ligne et les <strong>purgeurs</strong> automatiques de condensats ;</li>\n<li>le <strong>réseau de distribution</strong>, souvent en boucle, avec des descentes prises par le dessus de la canalisation pour ne pas entraîner l'eau.</li>\n</ul>\n<p>Au pied de chaque machine, une <strong>unité de conditionnement</strong> (souvent appelée FRL) assure les derniers traitements : vanne de mise en service et de purge (sectionnement de l'énergie), filtre avec cuve de décantation, régulateur de pression avec manomètre, éventuellement lubrificateur (de moins en moins utilisé, car la plupart des composants actuels sont lubrifiés à vie), démarreur progressif qui remet la pression lentement.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'unité de conditionnement est aussi l'organe de <strong>consignation pneumatique</strong> de la machine : sa vanne doit couper l'arrivée d'air, vider le circuit aval et pouvoir être cadenassée.</div>"
      },
      {
       "titre": "Pression, unités et effort",
       "contenu": "\n<p>La <strong>pression</strong> est une force répartie sur une surface : p = F ÷ S. L'unité légale est le pascal (Pa = N/m²), mais on utilise couramment le <strong>bar</strong> : 1 bar = 10<sup>5</sup> Pa = 0,1 MPa = 0,1 N/mm². Les manomètres indiquent la <strong>pression relative</strong> (par rapport à la pression atmosphérique, environ 1 bar absolu).</p>\n<p>La force théorique d'un vérin vaut F = p × S. Pour un vérin double effet :</p>\n<ul>\n<li>en sortie, la pression agit sur toute la surface du piston : S = π × D² ÷ 4 ;</li>\n<li>en rentrée, elle agit sur la surface annulaire : S = π × (D² − d²) ÷ 4, où d est le diamètre de la tige.</li>\n</ul>\n<p>La force réelle est inférieure (frottements des joints) : on applique un rendement de l'ordre de 0,9 ou un taux de charge selon la documentation du fabricant.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'effort d'un vérin. Vérin D = 50 mm, tige d = 20 mm, pression 6 bar = 0,6 N/mm². Surface en sortie : 3,14 × 50² ÷ 4 ≈ 1 963 mm². Force théorique en sortie : 0,6 × 1 963 ≈ 1 178 N. Surface en rentrée : 3,14 × (2 500 − 400) ÷ 4 ≈ 1 649 mm², d'où 0,6 × 1 649 ≈ 989 N. Avec un rendement de 0,9 : environ 1 060 N en sortie et 890 N en rentrée. Si la pression chute à 4 bar à cause d'un régulateur déréglé, l'effort de serrage baisse d'un tiers : la pièce peut glisser.</div>"
      },
      {
       "titre": "Les distributeurs",
       "contenu": "\n<p>Le <strong>distributeur</strong> est le préactionneur pneumatique : il dirige l'air vers l'une ou l'autre chambre du vérin. Il se désigne par deux nombres : le nombre d'<strong>orifices</strong> et le nombre de <strong>positions</strong>. Un 5/2 a cinq orifices et deux positions ; un 3/2 a trois orifices et deux positions ; un 5/3 a trois positions, la position centrale pouvant être fermée, à l'échappement ou sous pression.</p>\n<p>Les orifices sont repérés par des chiffres normalisés : 1 alimentation, 2 et 4 utilisations, 3 et 5 échappements, 12 et 14 pilotages (le pilotage 14 met en relation 1 avec 4).</p>\n<table>\n<thead><tr><th>Type</th><th>Usage typique</th><th>Comportement en cas de coupure électrique</th></tr></thead>\n<tbody>\n<tr><td>3/2 monostable NF</td><td>Vérin simple effet, soufflage, ventouse</td><td>Retour en position repos par ressort : échappement</td></tr>\n<tr><td>5/2 monostable</td><td>Vérin double effet avec position de repos définie</td><td>Le vérin revient en position repos</td></tr>\n<tr><td>5/2 bistable</td><td>Vérin double effet dont la position doit être mémorisée</td><td>Le distributeur garde sa position : le vérin ne bouge pas</td></tr>\n<tr><td>5/3 centre fermé</td><td>Arrêt en position intermédiaire</td><td>Le vérin s'immobilise (avec l'air emprisonné)</td></tr>\n<tr><td>5/3 centre à l'échappement</td><td>Vérin libre à l'arrêt, manipulation manuelle</td><td>Les deux chambres sont vidées</td></tr>\n</tbody>\n</table>\n<p>Les distributeurs électropneumatiques sont souvent regroupés sur un <strong>îlot de distribution</strong> raccordé à l'automate par un câble multipolaire ou par un réseau de terrain. Chaque électrovanne dispose d'une <strong>commande manuelle auxiliaire</strong> (petit poussoir) et d'une LED indiquant que la bobine est alimentée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> actionner la commande manuelle d'un distributeur provoque un mouvement réel, en dehors de la logique et des sécurités du programme. Elle ne s'utilise qu'en connaissant le mouvement commandé, zone dégagée et avec l'accord de l'exploitant.</div>"
      },
      {
       "titre": "Actionneurs, réglage de vitesse et composants associés",
       "contenu": "\n<p>Les actionneurs pneumatiques courants sont le <strong>vérin simple effet</strong> (retour par ressort), le <strong>vérin double effet</strong>, le vérin compact, le vérin sans tige, le vérin rotatif, la <strong>pince</strong> et la <strong>ventouse</strong> alimentée par un générateur de vide (venturi).</p>\n<p>La vitesse d'un vérin se règle avec un <strong>limiteur de débit unidirectionnel</strong> (réducteur de débit avec clapet anti-retour). On règle de préférence <strong>à l'échappement</strong> : l'air entre librement dans une chambre, et c'est la sortie d'air de l'autre chambre qui est freinée. Le mouvement est ainsi plus régulier, même avec une charge variable. En fin de course, un <strong>amortissement</strong> pneumatique réglable par vis évite les chocs.</p>\n<p>D'autres composants assurent des fonctions logiques ou de sécurité :</p>\n<ul>\n<li>le <strong>clapet anti-retour piloté</strong>, qui bloque le vérin en position en cas de coupure d'air ;</li>\n<li>le <strong>sélecteur de circuit</strong> (fonction OU) et la cellule ET ;</li>\n<li>le <strong>pressostat</strong>, qui transmet à l'automate un signal lorsque la pression passe un seuil ;</li>\n<li>la vanne d'échappement rapide, qui accélère le retour d'un vérin.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> régler la vitesse d'un vérin. 1) Fermer complètement les deux limiteurs, puis les ouvrir d'un tour. 2) Mettre en pression avec le démarreur progressif. 3) Faire fonctionner le vérin en mode manuel ou en marche de vérification. 4) Ouvrir progressivement le limiteur côté échappement jusqu'à obtenir le temps de course demandé (mesuré au chronogramme ou au chronomètre). 5) Ajuster l'amortissement de fin de course pour supprimer le choc sans ralentir excessivement. 6) Bloquer les contre-écrous et noter les réglages.</div>"
      },
      {
       "titre": "Consommation d'air et chasse aux fuites",
       "contenu": "\n<p>Le <strong>débit</strong> d'air se mesure en litres par minute ou en mètres cubes par heure, ramenés aux conditions normales (air à pression atmosphérique), notés NL/min ou Nm³/h.</p>\n<p>La consommation d'un vérin par cycle (aller et retour) s'estime en multipliant le volume balayé par la pression absolue en bar : V<sub>air libre</sub> = (V<sub>sortie</sub> + V<sub>rentrée</sub>) × (p<sub>relative</sub> + 1). Pour le vérin D50, tige 20, course 100 mm à 6 bar : volume sortie 1 963 × 100 = 196 300 mm³ ≈ 0,196 L ; volume rentrée ≈ 0,165 L ; total 0,361 L × 7 ≈ 2,5 NL par cycle. À 20 cycles par minute, la consommation est de 50 NL/min environ.</p>\n<p>Les <strong>fuites</strong> représentent souvent une part importante de l'air produit dans une usine mal entretenue : raccords desserrés, tuyaux fendus, joints de vérins usés, purgeurs bloqués ouverts. Comme un compresseur fonctionne même la nuit pour compenser les fuites, celles-ci coûtent cher en électricité.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la campagne de chasse aux fuites se fait de préférence quand l'atelier est silencieux (week-end, pause) avec un détecteur à ultrasons. Chaque fuite est étiquetée, saisie en GMAO et réparée. On mesure l'effet en comparant le temps de fonctionnement en charge du compresseur avant et après.</div>\n<p>La maintenance préventive pneumatique comprend la purge et le remplacement des cartouches filtrantes, le contrôle des pressions, la vérification de l'étanchéité, le contrôle des silencieux d'échappement (un silencieux colmaté ralentit le vérin) et l'entretien du compresseur selon le plan du constructeur (huile, filtres, séparateur).</p>"
      }
     ],
     "points_cles": [
      "La centrale d'air comprend compresseur, réservoir, sécheur, filtres, purgeurs et réseau.",
      "L'unité de conditionnement au pied de la machine filtre, régule et permet la consignation pneumatique.",
      "1 bar = 10^5 Pa = 0,1 N/mm² ; les manomètres indiquent la pression relative.",
      "Effort théorique d'un vérin : F = p × S, surface pleine en sortie et annulaire en rentrée.",
      "Un distributeur se désigne par orifices/positions ; son comportement à la coupure dépend de sa stabilité.",
      "La vitesse d'un vérin se règle de préférence à l'échappement.",
      "Consommation par cycle ≈ volume balayé × pression absolue.",
      "Les fuites d'air coûtent cher : elles se détectent aux ultrasons et se traitent méthodiquement."
     ],
     "lexique": [
      {
       "terme": "Unité de conditionnement",
       "def": "Ensemble vanne, filtre, régulateur placé à l'entrée d'une machine pneumatique."
      },
      {
       "terme": "Pression relative",
       "def": "Pression mesurée par rapport à la pression atmosphérique."
      },
      {
       "terme": "Distributeur 5/2",
       "def": "Distributeur à cinq orifices et deux positions, commandant un vérin double effet."
      },
      {
       "terme": "Monostable",
       "def": "Se dit d'un distributeur qui revient seul en position repos par ressort."
      },
      {
       "terme": "Bistable",
       "def": "Se dit d'un distributeur qui conserve sa dernière position sans pilotage."
      },
      {
       "terme": "Îlot de distribution",
       "def": "Ensemble d'électrovannes montées sur une embase commune, raccordé à l'automate."
      },
      {
       "terme": "Limiteur de débit unidirectionnel",
       "def": "Composant qui freine le débit dans un sens et le laisse libre dans l'autre."
      },
      {
       "terme": "Amortissement de fin de course",
       "def": "Freinage pneumatique du piston en fin de course pour éviter les chocs."
      },
      {
       "terme": "Pressostat",
       "def": "Capteur qui change d'état lorsque la pression franchit un seuil réglé."
      },
      {
       "terme": "NL/min",
       "def": "Normolitre par minute : débit d'air ramené aux conditions atmosphériques normales."
      }
     ]
    },
    {
     "id": "bmspc-hydraulique-industrielle",
     "titre": "Hydraulique industrielle : centrale, composants et maintenance",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Décrire une centrale hydraulique et le rôle de chacun de ses composants.",
      "Calculer effort, vitesse d'un vérin et puissance hydraulique à partir de la pression et du débit.",
      "Identifier les appareils de régulation de pression et de débit.",
      "Mettre en sécurité un circuit hydraulique comprenant un accumulateur.",
      "Organiser la surveillance du fluide et la maintenance préventive d'un groupe hydraulique."
     ],
     "sections": [
      {
       "titre": "Pourquoi l'hydraulique ?",
       "contenu": "\n<p>L'hydraulique transmet l'énergie par un liquide, en général une huile minérale, quasiment incompressible. Elle permet d'obtenir de <strong>très grands efforts</strong> avec des actionneurs compacts, des mouvements lents et réguliers, un maintien en position sous charge et un réglage précis de la vitesse. On la trouve sur les presses, les machines de moulage par injection, les plieuses, les équipements de levage et de manutention, les engins mobiles.</p>\n<p>Les pressions de travail sont bien plus élevées qu'en pneumatique : couramment 100 à 300 bar. Cela implique des risques spécifiques : <strong>jet d'huile sous pression</strong> capable de traverser la peau (injection sous-cutanée, urgence chirurgicale), fouettement de flexible, chute de charge, brûlure par huile chaude, incendie si l'huile pulvérisée rencontre une source chaude.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne recherche jamais une fuite hydraulique en passant la main sur un flexible sous pression. On utilise un carton ou une planchette, avec gants et lunettes. Toute injection d'huile sous la peau, même minime en apparence, impose une prise en charge médicale immédiate.</div>"
      },
      {
       "titre": "La centrale hydraulique",
       "contenu": "\n<p>Une <strong>centrale hydraulique</strong> (ou groupe hydraulique) comprend :</p>\n<table>\n<thead><tr><th>Composant</th><th>Rôle</th><th>Points de maintenance</th></tr></thead>\n<tbody>\n<tr><td>Réservoir</td><td>Stocker l'huile, la refroidir, laisser décanter les impuretés et l'air</td><td>Niveau, propreté, état du bouchon de remplissage avec filtre à air (reniflard)</td></tr>\n<tr><td>Crépine ou filtre d'aspiration</td><td>Protéger la pompe des grosses particules</td><td>Nettoyage, colmatage (cavitation)</td></tr>\n<tr><td>Moteur électrique et pompe</td><td>Transformer l'énergie mécanique en débit d'huile</td><td>Bruit, température, vibrations, accouplement</td></tr>\n<tr><td>Limiteur de pression</td><td>Limiter la pression maximale du circuit (sécurité)</td><td>Réglage plombé, pas de modification sans autorisation</td></tr>\n<tr><td>Filtre de pression ou de retour</td><td>Retenir les particules fines</td><td>Indicateur de colmatage, remplacement de l'élément</td></tr>\n<tr><td>Échangeur</td><td>Refroidir l'huile (air ou eau)</td><td>Encrassement, température de l'huile</td></tr>\n<tr><td>Accumulateur</td><td>Stocker de l'huile sous pression (réserve, secours, amortissement)</td><td>Pression de gonflage à l'azote, décharge avant intervention</td></tr>\n<tr><td>Manomètres, thermostat, niveau électrique</td><td>Surveiller l'état du groupe</td><td>Étalonnage, fonctionnement des alarmes</td></tr>\n</tbody>\n</table>\n<p>Une <strong>pompe</strong> produit un débit, pas une pression : la pression n'apparaît que lorsque l'huile rencontre une résistance (vérin chargé, restriction, limiteur). Les pompes industrielles sont volumétriques : à engrenages (simples, robustes), à palettes (silencieuses), à pistons (hautes pressions, cylindrée parfois variable).</p>\n<p>La <strong>cylindrée</strong> est le volume refoulé par tour. Le débit théorique vaut Q = Cyl × n ; le débit réel est un peu plus faible à cause des fuites internes (rendement volumétrique). Une pompe usée a un rendement volumétrique qui chute : les mouvements ralentissent sous charge.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la pompe fixe le débit, donc la vitesse des actionneurs ; la charge fixe la pression, dans la limite réglée par le limiteur de pression.</div>"
      },
      {
       "titre": "Calculs : effort, vitesse et puissance",
       "contenu": "\n<p>Les relations sont les mêmes qu'en pneumatique pour l'effort (F = p × S), auxquelles s'ajoute le lien entre débit et vitesse :</p>\n<p><strong>v = Q ÷ S</strong> (vitesse du vérin = débit ÷ surface utile)</p>\n<p>La <strong>puissance hydraulique</strong> vaut P = p × Q. En unités pratiques : P (kW) = p (bar) × Q (L/min) ÷ 600. La puissance électrique absorbée par le moteur de la pompe est plus grande, à cause du rendement global de la pompe (souvent 0,8 à 0,9).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dimensionner un mouvement. Vérin de presse : D = 100 mm, d = 56 mm, pression 200 bar, débit de la pompe 30 L/min. Surface piston : 3,14 × 100² ÷ 4 ≈ 7 854 mm² = 78,54 cm². Effort de sortie : 200 bar = 20 N/mm², d'où F = 20 × 7 854 ≈ 157 000 N, soit environ 157 kN (16 tonnes). Vitesse de sortie : Q = 30 L/min = 30 000 cm³/min, v = 30 000 ÷ 78,54 ≈ 382 cm/min ≈ 6,4 cm/s. Puissance hydraulique : 200 × 30 ÷ 600 = 10 kW ; avec un rendement de 0,85, le moteur doit fournir environ 11,8 kW, on choisira donc un moteur de puissance normalisée supérieure (15 kW).</div>\n<p>En rentrée, la surface annulaire est plus petite : à débit égal, la tige rentre plus vite qu'elle ne sort, mais avec un effort plus faible.</p>"
      },
      {
       "titre": "Distribution et régulation",
       "contenu": "\n<p>Les <strong>distributeurs</strong> hydrauliques se désignent comme en pneumatique (4/3, 4/2…), avec des orifices repérés P (pression), T (retour au réservoir), A et B (utilisations). Les distributeurs 4/3 sont très fréquents ; leur position centrale définit le comportement à l'arrêt : centre fermé (le vérin est bloqué, la pompe débite sur le limiteur), centre tandem P vers T (la pompe tourne à vide, faible échauffement), centre ouvert.</p>\n<p>Les appareils de régulation sont :</p>\n<ul>\n<li>le <strong>limiteur de pression</strong>, qui ouvre un passage vers le réservoir quand la pression atteint la valeur de tarage ;</li>\n<li>le <strong>réducteur de pression</strong>, qui fournit à une partie du circuit une pression plus basse (serrage d'une pièce fragile) ;</li>\n<li>la <strong>valve de séquence</strong>, qui n'autorise un mouvement qu'après qu'une pression est atteinte ;</li>\n<li>la <strong>valve d'équilibrage</strong> (ou de freinage), qui retient une charge motrice et empêche un vérin vertical de descendre sous son propre poids ;</li>\n<li>le <strong>régulateur de débit</strong>, qui maintient une vitesse constante malgré les variations de charge ;</li>\n<li>le <strong>clapet anti-retour piloté</strong>, qui verrouille un vérin en position.</li>\n</ul>\n<p>Les machines modernes utilisent aussi des <strong>distributeurs proportionnels</strong> et des <strong>servovalves</strong>, commandés par un signal électrique analogique, qui règlent progressivement débit et pression. Ils sont très sensibles à la pollution de l'huile.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une presse, le tarage du limiteur de pression et celui de la valve d'équilibrage sont des réglages de sécurité. Ils sont souvent plombés ou protégés par un capuchon. Toute modification doit être autorisée, tracée et suivie d'un contrôle.</div>"
      },
      {
       "titre": "Mise en sécurité d'un circuit hydraulique",
       "contenu": "\n<p>Arrêter la pompe ne suffit pas à supprimer le danger hydraulique. Il peut subsister :</p>\n<ul>\n<li>de l'énergie stockée dans un <strong>accumulateur</strong> : il peut délivrer de l'huile sous pression plusieurs heures après l'arrêt ;</li>\n<li>de la pression emprisonnée entre un clapet piloté et un vérin ;</li>\n<li>une <strong>énergie potentielle</strong> : une charge ou un coulisseau maintenu en hauteur par la pression peut descendre si l'on ouvre le circuit.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> consigner un circuit hydraulique. 1) Amener les actionneurs en position de sécurité (charge posée, coulisseau en bas ou calé mécaniquement par cales ou verrous prévus par le constructeur). 2) Arrêter et consigner électriquement le moteur de la pompe. 3) Décharger l'accumulateur par sa vanne de décharge prévue à cet effet. 4) Vérifier l'absence de pression sur les manomètres de chaque partie du circuit, y compris en aval des clapets. 5) Actionner manuellement les distributeurs pour libérer la pression résiduelle (si la procédure le prévoit). 6) Ouvrir les raccords lentement, en se protégeant, avec un bac de récupération.</div>\n<p>Les <strong>flexibles</strong> vieillissent (fissuration de la gaine, corrosion des embouts, frottements) et doivent être inspectés et remplacés selon une périodicité fixée par le constructeur ou l'entreprise. Un flexible porte un marquage indiquant notamment sa date de fabrication. Les flexibles exposés aux personnes peuvent être équipés de gaines de protection et de dispositifs anti-fouettement.</p>"
      },
      {
       "titre": "Surveillance et maintenance du fluide",
       "contenu": "\n<p>La majorité des pannes hydrauliques ont pour origine la <strong>pollution du fluide</strong> : particules solides (usure, poussières entrées par le reniflard, montage sale), eau (condensation, échangeur percé), air (aspiration, niveau bas). Les conséquences : usure des pompes, grippage des distributeurs, colmatage des servovalves, oxydation de l'huile.</p>\n<p>La <strong>propreté</strong> d'une huile s'exprime par un code normalisé ISO 4406, sous forme de trois nombres (par exemple 18/16/13), qui correspondent au nombre de particules supérieures à 4, 6 et 14 µm dans un volume donné. Plus les nombres sont petits, plus l'huile est propre. Le constructeur indique la classe requise, plus sévère pour les servovalves que pour un simple vérin.</p>\n<p>La maintenance préventive comprend :</p>\n<ul>\n<li>le relevé de la température d'huile (une huile trop chaude, au-delà d'environ 60 °C sur beaucoup de groupes, s'oxyde vite et perd sa viscosité) ;</li>\n<li>le contrôle du niveau et de l'aspect de l'huile (laiteuse : présence d'eau ; foncée et odeur de brûlé : oxydation) ;</li>\n<li>le changement des éléments filtrants dès que l'indicateur de colmatage le demande ;</li>\n<li>l'<strong>analyse d'huile</strong> périodique en laboratoire ;</li>\n<li>la vérification de la pression de gonflage des accumulateurs (à l'azote uniquement) ;</li>\n<li>le remplissage avec un groupe de transfert équipé d'un filtre, jamais en versant directement l'huile d'un bidon ouvert.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en hydraulique, la propreté est une condition de fonctionnement. Bouchonner les orifices ouverts, travailler sur un établi propre, rincer les nouveaux flexibles et filtrer l'huile neuve sont des gestes de maintenance à part entière.</div>"
      }
     ],
     "points_cles": [
      "L'hydraulique fournit de très grands efforts à des pressions de 100 à 300 bar.",
      "La pompe fournit un débit ; la pression dépend de la charge et est limitée par le limiteur de pression.",
      "Vitesse d'un vérin : v = Q ÷ S ; effort : F = p × S.",
      "Puissance hydraulique : P (kW) = p (bar) × Q (L/min) ÷ 600.",
      "La position centrale d'un distributeur 4/3 fixe le comportement du circuit à l'arrêt.",
      "Un accumulateur et une charge suspendue sont des énergies résiduelles à neutraliser avant intervention.",
      "La pollution du fluide est la première cause de pannes hydrauliques ; elle se mesure par le code ISO 4406.",
      "Un jet d'huile sous pression peut provoquer une injection sous-cutanée grave."
     ],
     "lexique": [
      {
       "terme": "Centrale hydraulique",
       "def": "Ensemble réservoir, pompe, moteur, filtration et régulation qui alimente un circuit hydraulique."
      },
      {
       "terme": "Cylindrée",
       "def": "Volume d'huile refoulé par une pompe à chaque tour."
      },
      {
       "terme": "Limiteur de pression",
       "def": "Appareil qui limite la pression maximale en renvoyant l'huile au réservoir."
      },
      {
       "terme": "Valve d'équilibrage",
       "def": "Appareil qui retient une charge motrice et contrôle sa descente."
      },
      {
       "terme": "Accumulateur",
       "def": "Réservoir d'huile sous pression, généralement à vessie ou piston gonflé à l'azote."
      },
      {
       "terme": "Distributeur proportionnel",
       "def": "Distributeur dont l'ouverture varie progressivement avec un signal électrique."
      },
      {
       "terme": "Cavitation",
       "def": "Formation de bulles de vapeur à l'aspiration de la pompe, qui l'endommage et la rend bruyante."
      },
      {
       "terme": "Code ISO 4406",
       "def": "Code à trois nombres exprimant la propreté particulaire d'un fluide hydraulique."
      },
      {
       "terme": "Reniflard",
       "def": "Filtre à air du réservoir qui laisse respirer le réservoir sans laisser entrer les poussières."
      },
      {
       "terme": "Rendement volumétrique",
       "def": "Rapport entre débit réel et débit théorique d'une pompe."
      }
     ]
    },
    {
     "id": "bmspc-transmissions-mecaniques",
     "titre": "Liaisons mécaniques et transmission de puissance",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Identifier les liaisons mécaniques normalisées et lire un schéma cinématique.",
      "Calculer un rapport de transmission, une vitesse de sortie et un couple de sortie.",
      "Comparer engrenages, réducteurs, poulies-courroies et chaînes pour la maintenance.",
      "Choisir et contrôler un accouplement ; comprendre les conséquences d'un défaut d'alignement.",
      "Identifier les transformations de mouvement rotation-translation et leurs réglages."
     ],
     "sections": [
      {
       "titre": "Liaisons mécaniques et schéma cinématique",
       "contenu": "\n<p>Une machine est un assemblage de pièces reliées par des <strong>liaisons mécaniques</strong>. Une liaison est caractérisée par les <strong>mouvements relatifs</strong> qu'elle autorise entre deux pièces : rotations et translations selon trois axes, soit six <strong>degrés de liberté</strong> au maximum.</p>\n<table>\n<thead><tr><th>Liaison</th><th>Mouvements autorisés</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Encastrement (complète)</td><td>Aucun</td><td>Poulie clavetée et goupillée sur un arbre</td></tr>\n<tr><td>Pivot</td><td>1 rotation</td><td>Arbre monté sur deux roulements</td></tr>\n<tr><td>Glissière</td><td>1 translation</td><td>Chariot sur rail à billes</td></tr>\n<tr><td>Hélicoïdale</td><td>1 rotation liée à 1 translation</td><td>Vis et écrou</td></tr>\n<tr><td>Pivot glissant</td><td>1 rotation + 1 translation indépendantes</td><td>Tige de vérin dans son palier</td></tr>\n<tr><td>Rotule (sphérique)</td><td>3 rotations</td><td>Embout de vérin à rotule, roulement à rotule</td></tr>\n<tr><td>Appui plan</td><td>2 translations + 1 rotation</td><td>Patin sur une table</td></tr>\n</tbody>\n</table>\n<p>Le <strong>schéma cinématique</strong> représente ces liaisons par des symboles normalisés (petit cercle traversé d'une barre pour la pivot, rectangle coulissant pour la glissière, etc.) reliant des <strong>classes d'équivalence</strong>, c'est-à-dire des groupes de pièces sans mouvement relatif entre elles. Il permet de comprendre rapidement comment un mécanisme bouge, sans le détail des formes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir les classes d'équivalence. 1) Colorier sur le dessin d'ensemble toutes les pièces fixées au bâti (même couleur). 2) Choisir une pièce mobile et colorier de la même teinte toutes les pièces fixées à elle (vis, clavettes, bagues intérieures de roulement). 3) Recommencer pour chaque groupe mobile. 4) Exclure les éléments roulants et les joints. 5) Nommer chaque classe (bâti, arbre d'entrée, coulisseau…) puis identifier la liaison entre chaque couple de classes en contact.</div>"
      },
      {
       "titre": "Rapport de transmission, couple et puissance",
       "contenu": "\n<p>Une transmission de puissance relie un moteur à un récepteur. Elle peut modifier la vitesse, le couple, le sens de rotation, la position de l'axe. Son <strong>rapport de transmission</strong> est :</p>\n<p><strong>k = n<sub>sortie</sub> ÷ n<sub>entrée</sub></strong></p>\n<p>Si k &lt; 1, la transmission est un <strong>réducteur</strong> (cas le plus fréquent) ; si k &gt; 1, un multiplicateur. Pour un engrenage de deux roues, k = Z<sub>menante</sub> ÷ Z<sub>menée</sub> (Z = nombre de dents). Pour une transmission poulie-courroie, k = d<sub>menante</sub> ÷ d<sub>menée</sub> (diamètres primitifs). Pour un train de plusieurs engrenages, les rapports se multiplient.</p>\n<p>La puissance se conserve, aux pertes près : P<sub>sortie</sub> = η × P<sub>entrée</sub>. Comme P = C × Ω, quand la vitesse diminue, le couple augmente : C<sub>sortie</sub> = C<sub>entrée</sub> × η ÷ k.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une chaîne de transmission. Moteur 1 450 tr/min, couple 10 N·m. Poulie motrice d = 100 mm, poulie réceptrice d = 250 mm, rendement courroie 0,95 ; puis engrenage Z<sub>1</sub> = 18, Z<sub>2</sub> = 54, rendement 0,97. k<sub>1</sub> = 100 ÷ 250 = 0,4 ; k<sub>2</sub> = 18 ÷ 54 = 1/3 ; k = 0,4 × 1/3 ≈ 0,133. Vitesse de sortie : 1 450 × 0,133 ≈ 193 tr/min. Rendement global : 0,95 × 0,97 ≈ 0,92. Couple de sortie : 10 × 0,92 ÷ 0,133 ≈ 69 N·m.</div>"
      },
      {
       "titre": "Engrenages et réducteurs",
       "contenu": "\n<p>Les <strong>engrenages</strong> transmettent la rotation par contact entre dents. On rencontre :</p>\n<ul>\n<li>les engrenages <strong>droits</strong> à denture droite (simples, un peu bruyants) ou hélicoïdale (silencieux, mais créent un effort axial que les roulements doivent reprendre) ;</li>\n<li>les engrenages <strong>coniques</strong>, pour des axes concourants (renvoi d'angle) ;</li>\n<li>le système <strong>roue et vis sans fin</strong>, pour de grandes réductions dans un seul étage, avec un rendement faible et souvent une irréversibilité (la charge ne peut pas entraîner le moteur) ;</li>\n<li>les <strong>trains épicycloïdaux</strong> (réducteurs planétaires), compacts et précis, très utilisés avec les servomoteurs.</li>\n</ul>\n<p>Un engrenage se caractérise par son <strong>module</strong> m (taille des dents, en mm) : deux roues qui engrènent ont le même module ; le diamètre primitif vaut d = m × Z et l'entraxe a = m × (Z<sub>1</sub> + Z<sub>2</sub>) ÷ 2.</p>\n<p>Le <strong>motoréducteur</strong> associe moteur et réducteur dans un même carter. Sa maintenance repose sur le contrôle et la vidange de l'huile (quantité et qualité indiquées sur la plaque), le contrôle des fuites aux joints à lèvres, la surveillance du bruit, de la température et des vibrations. La position de montage indiquée sur la plaque détermine l'emplacement des bouchons de remplissage, de niveau et de vidange.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remonter un motoréducteur dans une autre position que celle prévue (par exemple arbre vers le bas au lieu d'horizontal) modifie le niveau d'huile utile : certains engrenages ou roulements ne sont plus lubrifiés. Vérifier la position de montage et adapter le remplissage selon la notice.</div>"
      },
      {
       "titre": "Transmissions par lien flexible : courroies et chaînes",
       "contenu": "\n<p>Les <strong>courroies</strong> transmettent par adhérence (courroies trapézoïdales, plates, striées) ou par obstacle (courroies crantées, synchrones, sans glissement). Elles sont silencieuses, absorbent les à-coups et permettent de grands entraxes.</p>\n<p>Les points clés de leur maintenance sont la <strong>tension</strong> et l'<strong>alignement des poulies</strong>. Une courroie trop peu tendue patine, chauffe et s'use ; trop tendue, elle surcharge les roulements et l'arbre du moteur. La tension se contrôle par la flèche sous une force donnée (méthode du constructeur) ou par un tensiomètre à fréquence, qui mesure la fréquence de vibration du brin.</p>\n<p>Sur une transmission à plusieurs courroies trapézoïdales, on remplace toujours le <strong>jeu complet</strong> : une courroie neuve, plus courte qu'une courroie usée et allongée, reprendrait seule toute la charge.</p>\n<p>Les <strong>chaînes à rouleaux</strong> transmettent de gros couples à vitesse modérée, sans glissement. Elles s'allongent par usure des articulations : on mesure l'allongement sur un nombre de maillons donné et on remplace la chaîne au-delà de la limite fixée par le fabricant (souvent de l'ordre de 2 à 3 %), en remplaçant aussi les pignons s'ils présentent des dents en crochet. La lubrification est essentielle.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un grincement aigu au démarrage d'un ventilateur entraîné par courroies signale presque toujours un patinage. Avant de retendre, contrôler l'état des flancs (lustrés, fissurés) et des gorges de poulies (usées en forme de cuvette) : retendre une courroie sur une poulie usée ne résout rien durablement.</div>"
      },
      {
       "titre": "Accouplements et alignement",
       "contenu": "\n<p>L'<strong>accouplement</strong> relie deux arbres en bout à bout (moteur et pompe, moteur et réducteur). Les accouplements rigides imposent un alignement parfait ; les accouplements <strong>élastiques</strong> (à plots, à étoile en élastomère, à pneu) et les accouplements à denture tolèrent de petits défauts et amortissent les chocs.</p>\n<p>Deux arbres peuvent présenter trois défauts d'alignement : un <strong>désalignement radial</strong> (axes parallèles mais décalés), un <strong>désalignement angulaire</strong> (axes formant un angle) et un écart axial. Même un accouplement élastique supporte mal les défauts importants : usure rapide de l'élément élastique, échauffement et vibrations, puis détérioration des roulements et des joints.</p>\n<p>L'alignement se contrôle avec une règle et des cales pour les machines simples, au comparateur pour les machines courantes, et de plus en plus avec un <strong>aligneur laser</strong> qui calcule directement les corrections de calage sous les pattes du moteur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un défaut d'alignement se retrouve en analyse vibratoire avec une composante importante à deux fois la fréquence de rotation et souvent une vibration axiale élevée. Réaligner après chaque remplacement de moteur ou de pompe fait partie de l'intervention.</div>"
      },
      {
       "titre": "Transformer la rotation en translation",
       "contenu": "\n<p>De nombreux mouvements de machines sont des translations obtenues à partir d'un moteur rotatif :</p>\n<ul>\n<li>le <strong>système vis-écrou</strong> : à filet trapézoïdal (souvent irréversible, rendement faible) ou à billes (rendement élevé, réversible, grande précision). Le déplacement par tour est le <strong>pas</strong> p : v = n × p. Une vis à billes de pas 10 mm tournant à 600 tr/min déplace l'écrou à 6 000 mm/min, soit 100 mm/s ;</li>\n<li>le <strong>pignon-crémaillère</strong>, pour les grandes courses : v = π × d × n ;</li>\n<li>la <strong>courroie crantée</strong> sur un axe linéaire, rapide et légère ;</li>\n<li>le <strong>système bielle-manivelle</strong> et la <strong>came</strong>, qui transforment une rotation continue en mouvement alternatif.</li>\n</ul>\n<p>Les vis à billes et les axes linéaires demandent une lubrification régulière (graisseurs ou centrale de graissage), une protection contre les copeaux (soufflets, racleurs) et un contrôle du jeu. Un jeu dans la transmission se traduit par une perte de précision de positionnement ou des défauts de cote sur les pièces produites.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une vis à billes est réversible : sur un axe vertical, la charge peut faire tourner la vis et descendre seule si le frein moteur est défaillant ou si le moteur est déposé. Caler ou verrouiller mécaniquement l'axe avant de démonter son moteur.</div>"
      }
     ],
     "points_cles": [
      "Une liaison mécanique se définit par les mouvements relatifs qu'elle autorise (degrés de liberté).",
      "Le schéma cinématique relie des classes d'équivalence par des symboles de liaisons normalisés.",
      "Rapport de transmission k = n_sortie ÷ n_entrée ; pour un engrenage k = Z_menante ÷ Z_menée.",
      "La puissance se conserve aux pertes près : quand la vitesse baisse, le couple augmente.",
      "Deux roues qui engrènent ont le même module ; d = m × Z.",
      "Tension et alignement sont les deux points clés de la maintenance des courroies ; on change le jeu complet.",
      "Un défaut d'alignement d'accouplement use les roulements et se voit en analyse vibratoire.",
      "Vis-écrou : v = n × p ; une vis à billes est réversible et impose de caler les axes verticaux."
     ],
     "lexique": [
      {
       "terme": "Liaison pivot",
       "def": "Liaison qui n'autorise qu'une rotation autour d'un axe."
      },
      {
       "terme": "Degré de liberté",
       "def": "Mouvement élémentaire (rotation ou translation) possible entre deux pièces."
      },
      {
       "terme": "Classe d'équivalence",
       "def": "Ensemble de pièces sans mouvement relatif entre elles."
      },
      {
       "terme": "Rapport de transmission",
       "def": "Rapport entre la vitesse de sortie et la vitesse d'entrée d'une transmission."
      },
      {
       "terme": "Module",
       "def": "Grandeur qui caractérise la taille des dents d'un engrenage."
      },
      {
       "terme": "Motoréducteur",
       "def": "Ensemble moteur et réducteur réunis dans un même bloc."
      },
      {
       "terme": "Courroie synchrone",
       "def": "Courroie crantée qui transmet sans glissement."
      },
      {
       "terme": "Accouplement élastique",
       "def": "Organe reliant deux arbres en tolérant de petits défauts d'alignement et en amortissant les chocs."
      },
      {
       "terme": "Aligneur laser",
       "def": "Appareil qui mesure le désalignement de deux arbres et calcule les corrections."
      },
      {
       "terme": "Vis à billes",
       "def": "Système vis-écrou à éléments roulants, précis et à haut rendement."
      },
      {
       "terme": "Pas",
       "def": "Déplacement de l'écrou pour un tour de vis."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — La chaîne d'information et les systèmes connectés",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmspc-capteurs-acquisition",
     "titre": "Capteurs, détecteurs et acquisition des grandeurs physiques",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Choisir et identifier la technologie d'un détecteur tout ou rien à partir de la grandeur à détecter et de l'environnement.",
      "Raccorder et contrôler un détecteur trois fils PNP ou NPN sur une entrée d'automate.",
      "Exploiter un capteur analogique 4-20 mA ou 0-10 V et convertir le signal en grandeur physique.",
      "Distinguer codeur incrémental et codeur absolu et en connaître les points de maintenance.",
      "Mener un contrôle méthodique d'un capteur suspecté défaillant."
     ],
     "sections": [
      {
       "titre": "Le capteur, premier maillon de la chaîne d'information",
       "contenu": "\n<p>La chaîne d'information d'un système automatisé commence par la fonction <strong>acquérir</strong> : transformer une grandeur physique (présence d'un objet, position, pression, température, vitesse, niveau) en un signal électrique exploitable par l'automate. Le cours de seconde a présenté le principe des capteurs ; il s'agit ici de les connaître assez bien pour les choisir, les raccorder, les régler et les diagnostiquer.</p>\n<p>On distingue trois familles de signaux de sortie :</p>\n<table>\n<thead><tr><th>Famille</th><th>Nature du signal</th><th>Exemples</th><th>Entrée automate</th></tr></thead>\n<tbody>\n<tr><td><strong>Tout ou rien</strong> (TOR)</td><td>Deux états : 0 ou 1 (souvent 0 V ou 24 V DC)</td><td>Fin de course, détecteur inductif, cellule photoélectrique, pressostat</td><td>Carte d'entrées TOR</td></tr>\n<tr><td><strong>Analogique</strong></td><td>Signal continu proportionnel à la grandeur (4-20 mA, 0-10 V, résistance)</td><td>Transmetteur de pression, sonde Pt100, capteur de niveau à ultrasons</td><td>Carte d'entrées analogiques</td></tr>\n<tr><td><strong>Numérique</strong></td><td>Train d'impulsions ou trame de données</td><td>Codeur incrémental, codeur absolu, capteur IO-Link</td><td>Carte de comptage rapide ou liaison de communication</td></tr>\n</tbody>\n</table>\n<p>On réserve souvent le mot <strong>détecteur</strong> aux appareils TOR (ils détectent une présence) et le mot <strong>capteur</strong> aux appareils qui mesurent une grandeur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un capteur ne commande rien. Il renseigne l'automate, qui décide. Un défaut de capteur produit donc un comportement anormal de la machine (étape qui ne franchit pas, mouvement qui ne démarre pas, alarme intempestive) sans que l'actionneur concerné soit lui-même en panne.</div>"
      },
      {
       "titre": "Les technologies de détection tout ou rien",
       "contenu": "\n<p>Le choix d'une technologie dépend de la matière de l'objet, de la distance de détection, de l'environnement (poussières, huile, projections, température) et de la précision attendue.</p>\n<table>\n<thead><tr><th>Technologie</th><th>Principe</th><th>Objets détectés</th><th>Points de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Interrupteur de position mécanique</td><td>Contact actionné par un galet, un poussoir ou une tige</td><td>Tout objet capable d'agir mécaniquement</td><td>Usure du galet, réglage de la came, contact à manœuvre positive d'ouverture pour la sécurité</td></tr>\n<tr><td>Détecteur inductif</td><td>Champ magnétique alternatif perturbé par un métal</td><td>Métaux uniquement, sans contact</td><td>Portée de quelques millimètres, réduite pour les métaux non ferreux</td></tr>\n<tr><td>Détecteur capacitif</td><td>Variation de capacité d'un condensateur ouvert</td><td>Tous matériaux, y compris liquides et granulés, même à travers une paroi non métallique</td><td>Sensible à l'humidité et aux dépôts, réglage de sensibilité par potentiomètre</td></tr>\n<tr><td>Détecteur photoélectrique</td><td>Faisceau lumineux interrompu ou renvoyé</td><td>Tous objets, à grande distance</td><td>Encrassement des optiques, objets transparents ou brillants, alignement</td></tr>\n<tr><td>Détecteur magnétique (ILS ou effet Hall)</td><td>Aimant du piston détecté à travers le tube du vérin</td><td>Position du piston d'un vérin</td><td>Position de serrage sur la rainure, champ magnétique parasite</td></tr>\n<tr><td>Détecteur à ultrasons</td><td>Écho d'une onde sonore</td><td>Tous objets, surfaces liquides</td><td>Zone aveugle près de la face avant, mousses et surfaces inclinées</td></tr>\n</tbody>\n</table>\n<p>Pour un détecteur inductif, le constructeur indique la <strong>portée nominale</strong> S<sub>n</sub>, mesurée avec une plaque d'acier normalisée. Pour un autre métal, on applique un <strong>facteur de correction</strong> donné dans la notice (il est nettement inférieur à 1 pour l'aluminium ou le cuivre). La <strong>portée de travail</strong> recommandée est d'environ 80 % de S<sub>n</sub>, pour tenir compte des dispersions de fabrication et de la température. Un détecteur <strong>noyable</strong> (blindé) peut être encastré dans le métal ; un détecteur <strong>non noyable</strong> a une portée plus grande mais exige un dégagement autour de sa tête.</p>\n<p>Les détecteurs photoélectriques existent en trois montages : <strong>barrage</strong> (émetteur et récepteur séparés face à face, la plus grande portée et la meilleure fiabilité), <strong>reflex</strong> (émetteur-récepteur et réflecteur catadioptrique, le faisceau est coupé par l'objet) et <strong>proximité</strong> (le faisceau est renvoyé par l'objet lui-même, portée courte).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un détecteur inductif monté trop près de sa cible frotte et finit écrasé ; monté trop loin, il fonctionne à froid puis décroche quand la machine chauffe. Après un remplacement, réglez toujours la distance à la valeur du dossier, ou à défaut à environ 80 % de la portée nominale, puis vérifiez la détection sur plusieurs cycles.</div>"
      },
      {
       "titre": "Raccorder un détecteur : deux fils, trois fils, PNP et NPN",
       "contenu": "\n<p>Les détecteurs électroniques sont le plus souvent alimentés en <strong>24 V DC</strong>. Les couleurs de fils sont normalisées pour les détecteurs de proximité : <strong>marron</strong> pour le + 24 V, <strong>bleu</strong> pour le 0 V, <strong>noir</strong> pour la sortie (et blanc pour une seconde sortie). Sur les connecteurs M12 ou M8, les mêmes fonctions correspondent aux broches 1 (+), 3 (0 V) et 4 (sortie).</p>\n<p>Un détecteur <strong>trois fils</strong> possède une sortie à transistor de l'un des deux types suivants :</p>\n<ul>\n<li><strong>PNP</strong> (sortie « source » ou positive) : à l'état actionné, la sortie délivre le + 24 V. La charge (l'entrée automate) est raccordée entre la sortie et le 0 V. C'est le montage le plus répandu en Europe ; il correspond aux cartes d'entrées dites « logique positive » ou « sink ».</li>\n<li><strong>NPN</strong> (sortie « sink » ou négative) : à l'état actionné, la sortie relie la charge au 0 V. La charge est raccordée entre le + 24 V et la sortie. On le rencontre sur des machines d'origine asiatique.</li>\n</ul>\n<p>Un détecteur <strong>deux fils</strong> se branche en série avec la charge, comme un interrupteur. Il laisse passer un faible <strong>courant résiduel</strong> à l'état ouvert et provoque une <strong>tension de déchet</strong> à l'état fermé ; il faut donc vérifier sa compatibilité avec la carte d'entrée.</p>\n<p>La fonction de sortie peut être <strong>NO</strong> (normalement ouverte : la sortie est active quand l'objet est présent) ou <strong>NC</strong> (normalement fermée : la sortie est active en l'absence d'objet). Enfin, la plupart des détecteurs possèdent une <strong>LED</strong> d'état qui s'allume à l'actionnement, et l'automate a lui aussi une LED par entrée : leur comparaison est le premier geste du diagnostic.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler un détecteur PNP qui ne donne pas de signal à l'automate. 1) Observer la LED du détecteur en présentant la cible : si elle ne s'allume pas, passer au point 2 ; si elle s'allume mais que la LED de l'entrée automate reste éteinte, passer au point 4. 2) Mesurer entre marron et bleu au connecteur : environ 24 V attendus ; sinon, remonter vers l'alimentation (fusible, bornier, câble). 3) Si l'alimentation est correcte, contrôler la distance et la cible ; si la LED reste éteinte, le détecteur est défaillant. 4) Mesurer entre le fil noir et le 0 V cible présente : environ 24 V attendus ; si la tension est présente au détecteur mais absente au bornier d'entrée, le câble est coupé ; si elle est présente au bornier mais que l'entrée ne s'allume pas, suspecter la carte ou une erreur de type (détecteur NPN sur carte PNP). 5) Après remplacement, vérifier l'état de l'entrée dans le logiciel de l'automate.</div>"
      },
      {
       "titre": "Les capteurs analogiques et la mise à l'échelle",
       "contenu": "\n<p>Un <strong>transmetteur</strong> est un capteur associé à une électronique qui délivre un signal normalisé. Le signal le plus utilisé en industrie est la <strong>boucle de courant 4-20 mA</strong> : 4 mA correspond au bas de l'étendue de mesure, 20 mA au haut. Ce signal présente deux avantages. Le courant n'est pas affecté par la longueur des câbles, ce qui permet des distances importantes. Et le « zéro vivant » à 4 mA permet de détecter une coupure : un courant nul signifie un fil coupé, pas une mesure nulle. Le signal <strong>0-10 V</strong>, plus simple, est réservé aux courtes distances.</p>\n<p>L'automate convertit le signal en un nombre entier (par exemple de 0 à 27 648 sur certaines cartes) que le programme transforme en grandeur physique : c'est la <strong>mise à l'échelle</strong>. La relation est linéaire :</p>\n<p><strong>Grandeur = Min + (I − 4) ÷ 16 × (Max − Min)</strong>, avec I en mA, Min et Max les bornes de l'étendue de mesure.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un transmetteur de pression d'étendue 0 à 250 bar équipe une centrale hydraulique. Le technicien mesure 13,6 mA dans la boucle avec une pince milliampèremétrique. Pression = 0 + (13,6 − 4) ÷ 16 × 250 = 9,6 ÷ 16 × 250 = 150 bar. Il compare au manomètre de la centrale : s'il lit 150 bar à quelques bars près, le transmetteur est cohérent ; s'il lit 180 bar, le transmetteur est dérivé et doit être réétalonné ou remplacé. Inversement, pour une pression de 100 bar, le courant attendu est I = 4 + 16 × 100 ÷ 250 = 10,4 mA.</div>\n<p>Pour la température, deux technologies dominent :</p>\n<ul>\n<li>la <strong>sonde à résistance Pt100</strong>, dont la résistance vaut 100 Ω à 0 °C et augmente d'environ 0,385 Ω par degré (environ 138,5 Ω à 100 °C). Elle est précise et se raccorde en 2, 3 ou 4 fils ; le montage 3 ou 4 fils compense la résistance des conducteurs ;</li>\n<li>le <strong>thermocouple</strong>, formé de deux métaux différents soudés, qui produit une petite tension (quelques millivolts) fonction de l'écart de température entre la soudure chaude et la soudure froide. Il exige un câble de compensation du même type.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une valeur de 0 mA ou une mesure bloquée en butée basse n'est pas forcément « pression nulle » : c'est d'abord le signe d'une boucle ouverte (fil coupé, connecteur oxydé, alimentation de boucle absente). Un affichage bloqué à la valeur maximale peut, lui, signaler un court-circuit ou un capteur en défaut.</div>"
      },
      {
       "titre": "Codeurs et capteurs intelligents",
       "contenu": "\n<p>Le <strong>codeur rotatif</strong> mesure la position angulaire ou la vitesse d'un arbre. Un disque gravé tourne devant des cellules optiques ou un capteur magnétique.</p>\n<ul>\n<li>Le <strong>codeur incrémental</strong> délivre des impulsions sur deux voies A et B décalées d'un quart de période, ce qui permet de connaître le sens de rotation, et une voie Z (un top par tour) qui sert à la prise d'origine. Sa <strong>résolution</strong> s'exprime en points par tour. Il ne connaît pas sa position à la mise sous tension : la machine doit faire une <strong>prise d'origine</strong>.</li>\n<li>Le <strong>codeur absolu</strong> délivre un code unique pour chaque position. Il connaît sa position dès la mise sous tension. Le modèle <strong>multitour</strong> compte également le nombre de tours.</li>\n</ul>\n<p>Les capteurs récents sont de plus en plus <strong>communicants</strong>. La technologie <strong>IO-Link</strong> (norme CEI 61131-9) relie un capteur ou un actionneur à un maître IO-Link par un câble standard trois fils non blindé. Elle transmet la mesure, mais aussi des paramètres (seuils, temporisations) et des informations de diagnostic (encrassement, température interne, nombre de commutations). Lors d'un remplacement, le maître peut recharger automatiquement les paramètres dans le capteur neuf.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une ligne d'embouteillage, les cellules photoélectriques IO-Link signalent à la supervision une baisse de réserve de signal avant que la détection ne devienne aléatoire. Le nettoyage des optiques est alors planifié pendant un changement de format, au lieu d'attendre l'arrêt intempestif. C'est un exemple concret de ce que signifie « système de production connecté ».</div>"
      },
      {
       "titre": "Maintenance des capteurs et remplacement",
       "contenu": "\n<p>Les capteurs sont des composants peu coûteux mais très nombreux : une machine en compte parfois plusieurs centaines. Les défaillances les plus fréquentes sont :</p>\n<ul>\n<li>les <strong>chocs</strong> (détecteur heurté par la pièce ou par un outil, support tordu) ;</li>\n<li>l'<strong>encrassement</strong> (copeaux métalliques collés sur un inductif, poussière sur une optique) ;</li>\n<li>les <strong>câbles</strong> écrasés, pliés à répétition dans une chaîne porte-câbles ou rongés par l'huile de coupe ;</li>\n<li>les <strong>connecteurs</strong> desserrés ou oxydés, dont le défaut est souvent intermittent ;</li>\n<li>la <strong>dérive</strong> des capteurs analogiques, qui se traite par un étalonnage périodique.</li>\n</ul>\n<p>Lors d'un remplacement, le nouveau capteur doit être <strong>équivalent</strong> sur tous les critères suivants : technologie, forme et taille du boîtier (M8, M12, M18, M30, parallélépipédique), portée, type de sortie (PNP ou NPN, NO ou NC), tension d'alimentation, type de connexion (câble ou connecteur), indice de protection (IP67 courant en atelier, IP69K pour le lavage haute pression en agroalimentaire), plage de température. Une référence différente « qui marche » mais n'a pas le même type de sortie peut inverser la logique d'une sécurité.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> remplacer un capteur, c'est aussi le régler, vérifier son état dans l'automate et faire un essai sur plusieurs cycles. L'intervention se termine par la mise à jour de la GMAO (référence montée, cause de la défaillance), ce qui permet de repérer les capteurs qui cassent trop souvent et de traiter la cause (protection mécanique, autre technologie).</div>"
      }
     ],
     "points_cles": [
      "Le capteur réalise la fonction acquérir : il renseigne l'automate sans rien commander.",
      "Les signaux sont tout ou rien, analogiques (4-20 mA, 0-10 V, résistance) ou numériques (impulsions, trames).",
      "Inductif pour les métaux, capacitif pour tous matériaux, photoélectrique pour les grandes distances, magnétique pour la position des vérins.",
      "Couleurs normalisées : marron + 24 V, bleu 0 V, noir sortie ; PNP délivre le + 24 V, NPN ramène au 0 V.",
      "Portée de travail d'un inductif : environ 80 % de la portée nominale, corrigée selon le métal.",
      "Mise à l'échelle 4-20 mA : Grandeur = Min + (I − 4) ÷ 16 × (Max − Min) ; 0 mA signale une boucle ouverte.",
      "Le codeur incrémental exige une prise d'origine, le codeur absolu connaît sa position à la mise sous tension.",
      "Un capteur de remplacement doit être équivalent en technologie, sortie, connexion, portée et indice IP."
     ],
     "lexique": [
      {
       "terme": "Détecteur TOR",
       "def": "Capteur dont la sortie ne prend que deux états, présence ou absence."
      },
      {
       "terme": "Portée nominale (Sn)",
       "def": "Distance de détection d'un détecteur de proximité mesurée avec une cible normalisée."
      },
      {
       "terme": "Sortie PNP",
       "def": "Sortie à transistor qui délivre le potentiel positif à la charge lorsqu'elle est active."
      },
      {
       "terme": "Sortie NPN",
       "def": "Sortie à transistor qui relie la charge au 0 V lorsqu'elle est active."
      },
      {
       "terme": "Boucle 4-20 mA",
       "def": "Transmission analogique par un courant proportionnel à la mesure, avec un zéro vivant à 4 mA."
      },
      {
       "terme": "Mise à l'échelle",
       "def": "Conversion du signal reçu par l'automate en valeur exprimée dans l'unité physique."
      },
      {
       "terme": "Pt100",
       "def": "Sonde de température à résistance de platine valant 100 Ω à 0 °C."
      },
      {
       "terme": "Codeur incrémental",
       "def": "Capteur rotatif délivrant des impulsions, qui nécessite une prise d'origine."
      },
      {
       "terme": "Codeur absolu",
       "def": "Capteur rotatif délivrant un code unique pour chaque position angulaire."
      },
      {
       "terme": "IO-Link",
       "def": "Liaison point à point qui transmet mesures, paramètres et diagnostic entre un capteur et un maître."
      }
     ]
    },
    {
     "id": "bmspc-automate-grafcet",
     "titre": "Automate programmable, grafcet et langages de programmation",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Décrire l'architecture matérielle d'un automate programmable et son cycle de fonctionnement.",
      "Identifier une entrée ou une sortie d'automate à partir de son adresse et de la table des variables.",
      "Lire un grafcet comportant des structures de choix, de parallélisme, des temporisations et des actions mémorisées.",
      "Lire un programme écrit en langage à contacts ou en blocs fonctionnels.",
      "Utiliser le mode en ligne de l'automate pour diagnostiquer un blocage de cycle."
     ],
     "sections": [
      {
       "titre": "Architecture d'un automate programmable",
       "contenu": "\n<p>L'<strong>automate programmable industriel</strong> (API, en anglais PLC) réalise la fonction <strong>traiter</strong> de la chaîne d'information : il reçoit les informations des capteurs et des pupitres, exécute un programme et élabore les ordres destinés aux préactionneurs (contacteurs, distributeurs, variateurs). Il est conçu pour l'atelier : alimentation 24 V DC, résistance aux parasites électromagnétiques, aux vibrations et à la température, fonctionnement en continu.</p>\n<p>Un automate modulaire se compose de :</p>\n<ul>\n<li>une <strong>alimentation</strong> ;</li>\n<li>une <strong>unité centrale</strong> (CPU), qui contient le processeur, la mémoire programme, la mémoire des données et souvent un port Ethernet ;</li>\n<li>des <strong>modules d'entrées et de sorties</strong> TOR (24 V DC, parfois 230 V AC) et analogiques ;</li>\n<li>des <strong>modules spécialisés</strong> : comptage rapide, commande d'axes, pesage, communication ;</li>\n<li>éventuellement des <strong>îlots d'entrées-sorties déportées</strong>, placés au plus près des capteurs et reliés à la CPU par un réseau de terrain.</li>\n</ul>\n<p>Les sorties TOR existent en version <strong>relais</strong> (contact sec, accepte du courant alternatif ou continu, mais s'use et commute lentement) et en version <strong>transistor</strong> (24 V DC, rapide, sans usure, courant limité à environ 0,5 A par voie sur de nombreux modules). Les bobines de contacteurs fortement consommatrices sont commandées par l'intermédiaire de relais d'interface.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'automate ne fournit pas la puissance. Une sortie d'automate pilote un préactionneur (relais, contacteur, électrovanne, entrée de variateur) qui, lui, distribue l'énergie à l'actionneur. Cette séparation entre partie commande et partie opérative est à garder en tête pendant tout diagnostic.</div>"
      },
      {
       "titre": "Le cycle automate et l'adressage des variables",
       "contenu": "\n<p>L'automate fonctionne de manière <strong>cyclique</strong>. À chaque cycle, il réalise trois opérations dans l'ordre :</p>\n<ol>\n<li><strong>lecture des entrées</strong> : l'état de toutes les entrées est recopié dans une zone mémoire image ;</li>\n<li><strong>traitement</strong> : le programme est exécuté de haut en bas à partir de cette image ;</li>\n<li><strong>écriture des sorties</strong> : les résultats sont transmis aux modules de sortie.</li>\n</ol>\n<p>Le <strong>temps de cycle</strong>, de quelques millisecondes à quelques dizaines de millisecondes, dépend de la taille du programme. Une impulsion plus courte que le temps de cycle peut ne pas être vue : c'est la raison d'être des modules de comptage rapide. Un <strong>chien de garde</strong> (watchdog) surveille la durée du cycle et place l'automate en défaut (arrêt, sorties à zéro) si elle dépasse une limite, par exemple à cause d'une boucle de programme infinie.</p>\n<p>Chaque entrée, sortie ou variable interne possède une <strong>adresse</strong>. La notation dépend du constructeur, mais repose sur des conventions proches de la norme CEI 61131-3 :</p>\n<table>\n<thead><tr><th>Type</th><th>Notation courante</th><th>Exemple et lecture</th></tr></thead>\n<tbody>\n<tr><td>Entrée TOR</td><td>%I ou I (Input)</td><td>%I0.3 : entrée n° 3 du premier octet ou du premier module</td></tr>\n<tr><td>Sortie TOR</td><td>%Q ou Q</td><td>%Q1.0 : première sortie du deuxième octet</td></tr>\n<tr><td>Mémoire interne (bit)</td><td>%M ou M</td><td>%M10 : bit interne, par exemple l'étape d'un grafcet</td></tr>\n<tr><td>Mot d'entrée analogique</td><td>%IW</td><td>%IW64 : valeur numérique d'une entrée analogique</td></tr>\n</tbody>\n</table>\n<p>Sur les logiciels récents, on travaille surtout avec des <strong>mnémoniques</strong> (noms symboliques) : « B_vérin1_sorti » au lieu de %I0.3. La <strong>table des variables</strong> (ou table des mnémoniques) fait la correspondance entre adresse, nom, type et commentaire. Elle est indispensable au technicien pour relier un repère du schéma électrique à une variable du programme.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une même adresse écrite à deux endroits du programme crée un conflit. Seule la dernière écriture du cycle compte, si bien qu'une sortie peut sembler « ne pas obéir » à une ligne pourtant vraie. Avant de modifier un programme, recherchez toutes les occurrences de la variable avec la fonction de références croisées du logiciel.</div>"
      },
      {
       "titre": "Le grafcet : règles et éléments approfondis",
       "contenu": "\n<p>Le <strong>grafcet</strong>, défini par la norme CEI 60848, décrit le comportement séquentiel d'un système. Rappel des éléments de base : l'<strong>étape</strong> (active ou inactive) à laquelle sont associées des <strong>actions</strong> ; la <strong>transition</strong>, à laquelle est associée une <strong>réceptivité</strong> (condition logique) ; les liaisons orientées. Une transition est <strong>franchie</strong> lorsqu'elle est validée (toutes les étapes amont actives) et que sa réceptivité est vraie ; son franchissement active les étapes aval et désactive les étapes amont.</p>\n<p>Les grafcets des machines réelles utilisent des structures et des actions plus riches :</p>\n<ul>\n<li><strong>Sélection de séquences</strong> (divergence en OU) : un trait simple horizontal précède plusieurs transitions ; une seule branche s'exécute selon les conditions, par exemple le choix entre format de produit A et format B. Les réceptivités doivent être exclusives.</li>\n<li><strong>Séquences simultanées</strong> (divergence en ET) : un double trait horizontal après une transition active plusieurs étapes en même temps, par exemple le serrage et le perçage d'une pièce sur deux postes. La convergence en ET (double trait) attend que toutes les branches soient terminées.</li>\n<li><strong>Action continue</strong> : l'ordre est émis tant que l'étape est active (cas général).</li>\n<li><strong>Action conditionnelle</strong> : l'ordre n'est émis que si l'étape est active et une condition vraie.</li>\n<li><strong>Action temporisée</strong> : la réceptivité « 5s/X12 » devient vraie 5 secondes après l'activation de l'étape 12.</li>\n<li><strong>Action mémorisée</strong> : l'ordre est mis à 1 (« := 1 ») à l'activation d'une étape et ne revient à 0 qu'à une autre étape (« := 0 »). Elle sert par exemple à maintenir un moteur de convoyeur en marche sur plusieurs étapes.</li>\n<li><strong>Macro-étape</strong> : étape représentant une séquence détaillée ailleurs, ce qui rend le grafcet principal lisible.</li>\n<li><strong>Grafcets hiérarchisés</strong> : un grafcet de sécurité ou de conduite peut <strong>forcer</strong> un grafcet de production dans une situation donnée (notation G2{INIT}, par exemple) ou le figer. C'est ainsi que l'on programme les modes de marche et d'arrêt décrits dans le GEMMA.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un grafcet pour trouver ce qui bloque. 1) Repérer les étapes actives (visualisation en ligne ou voyants de l'IHM). 2) Lister les transitions validées en aval de ces étapes. 3) Pour chacune, décomposer la réceptivité en variables élémentaires (par exemple « B3 · /B4 · Dcy »). 4) Relever l'état réel de chaque variable dans l'automate. 5) La variable qui empêche la réceptivité d'être vraie désigne la piste : capteur non actionné, actionneur qui n'a pas terminé son mouvement, condition de sécurité absente. 6) Vérifier physiquement sur la machine avant toute action sur le programme.</div>"
      },
      {
       "titre": "Les langages de programmation de la norme CEI 61131-3",
       "contenu": "\n<p>La norme CEI 61131-3 définit des langages communs aux automates de différents constructeurs. Le technicien de maintenance doit surtout savoir les <strong>lire</strong>.</p>\n<table>\n<thead><tr><th>Langage</th><th>Abréviation</th><th>Forme</th><th>Usage typique</th></tr></thead>\n<tbody>\n<tr><td>Langage à contacts</td><td>LD (Ladder)</td><td>Réseaux de contacts et de bobines entre deux barres verticales, inspirés des schémas à relais</td><td>Logique combinatoire, verrouillages, très lisible en maintenance</td></tr>\n<tr><td>Blocs fonctionnels</td><td>FBD</td><td>Blocs logiques (ET, OU, temporisations, comparateurs) reliés par des liaisons</td><td>Traitements analogiques, régulations</td></tr>\n<tr><td>Texte structuré</td><td>ST</td><td>Langage textuel proche de la programmation informatique (IF, THEN, FOR)</td><td>Calculs, traitement de données, recettes</td></tr>\n<tr><td>Diagramme fonctionnel en séquence</td><td>SFC</td><td>Traduction directe du grafcet en étapes et transitions</td><td>Séquences de fonctionnement</td></tr>\n</tbody>\n</table>\n<p>En langage à contacts, un <strong>contact ouvert</strong> (symbole --| |--) est passant quand la variable vaut 1 ; un <strong>contact fermé</strong> (--|/|--) est passant quand elle vaut 0. Une <strong>bobine</strong> (--( )--) prend la valeur du résultat du réseau ; une bobine <strong>S</strong> (set) la met à 1 de façon mémorisée, une bobine <strong>R</strong> (reset) la remet à 0. Des contacts en série réalisent un ET, des contacts en parallèle un OU.</p>\n<p>Exemple de réseau d'auto-maintien : contact ouvert « Marche » en parallèle avec contact ouvert « KM1 », le tout en série avec contact fermé « Arrêt » et contact ouvert « Thermique_OK », alimentant la bobine « KM1 ». Lecture : KM1 s'enclenche sur appui sur Marche si l'arrêt n'est pas actionné et le relais thermique n'a pas déclenché ; il reste enclenché grâce à son propre contact.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un bouton d'arrêt câblé en contact à ouverture (NC) sur l'automate envoie un 1 au repos. Dans le programme, il est donc testé par un contact <em>ouvert</em>. Ce choix de câblage garantit qu'un fil coupé provoque l'arrêt. Ne « corrigez » jamais une logique qui vous paraît inversée sans avoir regardé le schéma électrique.</div>"
      },
      {
       "titre": "Le mode en ligne : un outil de diagnostic",
       "contenu": "\n<p>Relié à l'automate par un ordinateur portable ou consulté depuis un pupitre, le logiciel de programmation offre des fonctions précieuses pour la maintenance :</p>\n<ul>\n<li>la <strong>visualisation dynamique</strong> : les contacts passants et les étapes actives sont colorés en temps réel ;</li>\n<li>la <strong>table de visualisation</strong> (ou table d'animation) : on y regroupe les variables utiles pour suivre leur évolution ;</li>\n<li>le <strong>tampon de diagnostic</strong> : historique horodaté des défauts de l'automate (module retiré, défaut d'alimentation, dépassement du temps de cycle) ;</li>\n<li>le <strong>forçage</strong> : imposer la valeur d'une entrée ou d'une sortie indépendamment du procédé ;</li>\n<li>la <strong>comparaison en ligne et hors ligne</strong> : vérifier que le programme présent dans l'automate est identique à la version de référence sauvegardée.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> forcer une sortie met en mouvement un actionneur sans tenir compte des sécurités logicielles du programme. Le forçage n'est réalisé que par une personne autorisée, zone dégagée, en connaissant l'effet attendu, et il est obligatoirement retiré avant la remise en service. Un forçage oublié est une cause classique d'accident ou de comportement inexplicable.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les services maintenance conservent une sauvegarde datée du programme de chaque automate (projet complet et non simple binaire), ainsi que les paramètres des variateurs. Après toute modification autorisée, une nouvelle sauvegarde est faite et la modification est tracée dans la GMAO. En cas de remplacement de CPU, c'est cette sauvegarde qui permet de redémarrer en moins d'une heure.</div>\n<p>Le diagnostic d'un automate commence par ses <strong>voyants</strong> : RUN (programme en exécution), STOP, ERROR ou SF (défaut système), BATT (pile de sauvegarde à remplacer sur certains modèles), et les voyants d'état de chaque entrée et sortie. Un module de sorties dont les voyants s'allument sans que les actionneurs réagissent oriente vers l'alimentation 24 V des sorties ou vers un fusible du module.</p>"
      }
     ],
     "points_cles": [
      "L'automate traite les informations ; il pilote des préactionneurs mais ne fournit pas la puissance.",
      "Cycle automate : lecture des entrées, exécution du programme, écriture des sorties.",
      "La table des variables relie adresses (%I, %Q, %M), mnémoniques et repères du schéma.",
      "Une transition est franchie si elle est validée et que sa réceptivité est vraie.",
      "Divergence en OU : une seule branche ; divergence en ET : branches simultanées, attendues à la convergence.",
      "Les actions mémorisées, temporisées et le forçage entre grafcets traduisent les modes de marche et d'arrêt.",
      "LD, FBD, ST et SFC sont les langages de la norme CEI 61131-3 ; le LD est le plus lu en maintenance.",
      "Le forçage est une opération dangereuse qui doit être autorisée, maîtrisée et retirée.",
      "Une sauvegarde à jour du programme est indispensable à la maintenance."
     ],
     "lexique": [
      {
       "terme": "API",
       "def": "Automate programmable industriel, calculateur durci qui exécute cycliquement un programme de commande."
      },
      {
       "terme": "Temps de cycle",
       "def": "Durée d'une boucle complète lecture des entrées, traitement, écriture des sorties."
      },
      {
       "terme": "Mnémonique",
       "def": "Nom symbolique donné à une adresse de l'automate pour faciliter la lecture du programme."
      },
      {
       "terme": "Réceptivité",
       "def": "Condition logique associée à une transition du grafcet."
      },
      {
       "terme": "Action mémorisée",
       "def": "Ordre mis à 1 à une étape et maintenu jusqu'à sa remise à 0 dans une autre étape."
      },
      {
       "terme": "Macro-étape",
       "def": "Étape qui représente une séquence détaillée dans une expansion séparée."
      },
      {
       "terme": "Forçage",
       "def": "Imposition volontaire de la valeur d'une variable de l'automate, indépendamment du programme ou des capteurs."
      },
      {
       "terme": "Langage à contacts (LD)",
       "def": "Langage graphique de programmation composé de contacts et de bobines."
      },
      {
       "terme": "Chien de garde",
       "def": "Surveillance du temps de cycle qui met l'automate en défaut en cas de dépassement."
      }
     ]
    },
    {
     "id": "bmspc-reseaux-systemes-connectes",
     "titre": "Réseaux industriels, supervision et systèmes de production connectés",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Situer les niveaux d'une architecture de communication industrielle, du capteur au système d'information.",
      "Identifier les principaux réseaux de terrain et leurs supports physiques.",
      "Lire et vérifier un plan d'adressage IPv4 d'une machine.",
      "Expliquer le rôle de la supervision, de la collecte de données et de la maintenance connectée.",
      "Appliquer les règles de base de cybersécurité lors d'une intervention."
     ],
     "sections": [
      {
       "titre": "De la machine isolée à l'usine connectée",
       "contenu": "\n<p>L'intitulé même du diplôme, « systèmes de production <strong>connectés</strong> », traduit une évolution majeure : les machines échangent en permanence des données entre elles, avec la supervision de l'atelier et avec les logiciels de gestion de l'entreprise. Pour le technicien, cela signifie qu'une panne peut venir d'un câble réseau, d'une adresse mal paramétrée ou d'un équipement de communication autant que d'un roulement ou d'un contacteur.</p>\n<p>On représente souvent l'architecture d'une usine par une <strong>pyramide</strong> à plusieurs niveaux :</p>\n<table>\n<thead><tr><th>Niveau</th><th>Équipements</th><th>Données échangées</th><th>Exigence principale</th></tr></thead>\n<tbody>\n<tr><td>Terrain</td><td>Capteurs, actionneurs, îlots d'E/S, variateurs</td><td>Bits, mesures, consignes</td><td>Temps réel, cycle de l'ordre de la milliseconde</td></tr>\n<tr><td>Commande</td><td>Automates, contrôleurs de robots, commandes numériques</td><td>États des cycles, échanges entre machines</td><td>Déterminisme</td></tr>\n<tr><td>Supervision</td><td>IHM, poste de supervision (SCADA)</td><td>Alarmes, synoptiques, courbes, historiques</td><td>Visualisation, archivage</td></tr>\n<tr><td>Pilotage de la production</td><td>MES, GMAO</td><td>Ordres de fabrication, TRS, compteurs, demandes d'intervention</td><td>Traçabilité</td></tr>\n<tr><td>Gestion</td><td>ERP (progiciel de gestion intégré)</td><td>Commandes, stocks, coûts</td><td>Volume de données</td></tr>\n</tbody>\n</table>\n<p>Ce découpage reste utile, même si les technologies récentes permettent à un capteur intelligent d'envoyer directement ses données vers un serveur ou un service en ligne. On parle alors d'<strong>internet industriel des objets</strong> (IIoT) et, plus largement, d'<strong>industrie 4.0</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> plus on descend dans la pyramide, plus les échanges doivent être rapides et fiables ; plus on monte, plus les volumes de données sont importants et moins le temps réel est critique. Un réseau de terrain en défaut arrête la machine ; une supervision en défaut prive seulement l'atelier d'informations.</div>"
      },
      {
       "titre": "Les réseaux de terrain et leurs supports",
       "contenu": "\n<p>Un <strong>réseau de terrain</strong> (ou bus de terrain) remplace le câblage fil à fil de chaque capteur jusqu'à l'automate. Il réduit le câblage, facilite les modifications et fournit un diagnostic détaillé. Les plus répandus sont :</p>\n<table>\n<thead><tr><th>Réseau</th><th>Support</th><th>Caractéristiques utiles en maintenance</th></tr></thead>\n<tbody>\n<tr><td>Modbus RTU</td><td>Liaison série RS-485, paire torsadée</td><td>Maître-esclaves, adresse d'esclave de 1 à 247, vitesse et parité à paramétrer identiquement ; résistances de fin de ligne</td></tr>\n<tr><td>Modbus TCP</td><td>Ethernet</td><td>Même logique que Modbus sur Ethernet, port TCP 502</td></tr>\n<tr><td>Profibus DP</td><td>RS-485, câble violet, connecteurs Sub-D 9 points</td><td>Adresses de station réglées par roues codeuses ou logiciel ; terminaisons actives aux deux extrémités</td></tr>\n<tr><td>Profinet, EtherNet/IP, EtherCAT</td><td>Ethernet industriel (RJ45 ou M12 codé D ou X)</td><td>Chaque appareil a un nom ou une adresse ; topologie en ligne, étoile ou anneau</td></tr>\n<tr><td>AS-i</td><td>Câble plat jaune bifilaire (données et énergie)</td><td>Capteurs et actionneurs simples ; adresses de 1 à 31 (jusqu'à 62 en mode étendu)</td></tr>\n<tr><td>IO-Link</td><td>Câble trois fils standard</td><td>Point à point entre un maître et un capteur, paramétrage et diagnostic</td></tr>\n</tbody>\n</table>\n<p>Le réseau Ethernet industriel utilise les mêmes principes que l'Ethernet de bureau, mais avec des composants durcis : connecteurs M12 étanches, câbles blindés résistant aux huiles et aux flexions, <strong>commutateurs</strong> (switches) sur rail DIN. Les protocoles temps réel (Profinet IRT, EtherCAT) garantissent des cycles de communication courts et réguliers.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un bus RS-485, oublier une résistance de terminaison ou en laisser une au milieu de la ligne provoque des erreurs de communication intermittentes, souvent attribuées à tort à un équipement. Lors du remplacement d'un connecteur ou d'un appareil en bout de ligne, vérifiez la position du commutateur de terminaison.</div>"
      },
      {
       "titre": "Adressage IP et paramétrage d'un équipement",
       "contenu": "\n<p>Sur un réseau Ethernet, chaque équipement possède :</p>\n<ul>\n<li>une <strong>adresse MAC</strong>, identifiant physique unique gravé par le fabricant (six octets écrits en hexadécimal, par exemple 00-1B-1B-4A-2C-9F) ;</li>\n<li>une <strong>adresse IPv4</strong>, attribuée par l'intégrateur ou le service informatique, composée de quatre nombres de 0 à 255 (par exemple 192.168.10.21) ;</li>\n<li>un <strong>masque de sous-réseau</strong>, qui indique quelle partie de l'adresse désigne le réseau : avec le masque 255.255.255.0 (noté /24), les trois premiers nombres identifient le réseau et le dernier l'appareil ;</li>\n<li>éventuellement une <strong>passerelle</strong>, adresse du routeur permettant de sortir du sous-réseau.</li>\n</ul>\n<p>Deux appareils ne communiquent directement que s'ils sont dans le même sous-réseau. Avec un masque /24, les adresses 192.168.10.21 et 192.168.10.35 communiquent ; 192.168.10.21 et 192.168.11.35 ne communiquent pas sans routeur. Deux appareils ne doivent jamais avoir la même adresse IP : ce <strong>conflit d'adresses</strong> rend l'un des deux, ou les deux, injoignables.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> remplacer un variateur Profinet défaillant. 1) Relever dans le dossier de la machine le nom d'appareil Profinet et l'adresse IP de l'ancien variateur (par exemple « var-convoyeur-2 », 192.168.10.42, masque 255.255.255.0). 2) Monter et câbler le nouveau variateur hors tension, consignation respectée. 3) Raccorder le portable de maintenance au réseau machine en lui donnant une adresse libre du même sous-réseau, par exemple 192.168.10.200. 4) Avec l'outil du constructeur, attribuer au variateur le même nom d'appareil et la même adresse. 5) Recharger le jeu de paramètres sauvegardé. 6) Vérifier que l'automate ne signale plus de défaut de communication (voyant BF ou défaut réseau éteint) et faire un essai de fonctionnement. 7) Déconnecter le portable et consigner l'opération dans la GMAO.</div>\n<p>Pour vérifier qu'un équipement répond, on utilise la commande <strong>ping</strong> depuis un ordinateur placé dans le même sous-réseau. Les voyants <strong>LINK</strong> (liaison physique établie) et <strong>ACT</strong> (activité) du port Ethernet donnent une première indication : LINK éteint signifie un problème de câble, de connecteur ou de port ; LINK allumé mais pas de communication oriente vers le paramétrage.</p>"
      },
      {
       "titre": "Supervision, collecte de données et maintenance connectée",
       "contenu": "\n<p>L'<strong>interface homme-machine</strong> (IHM), écran tactile placé sur la machine, permet à l'opérateur de conduire et au technicien de consulter les alarmes et l'état des entrées-sorties. Le <strong>système de supervision</strong> (SCADA) rassemble ces informations pour tout un atelier : synoptiques animés, gestion des alarmes avec horodatage et acquittement, courbes de tendance, archivage.</p>\n<p>Ces données alimentent directement la maintenance :</p>\n<ul>\n<li>les <strong>compteurs</strong> (heures de fonctionnement, nombre de cycles, nombre de manœuvres d'un contacteur) déclenchent automatiquement dans la GMAO des interventions préventives systématiques ;</li>\n<li>les <strong>mesures de surveillance</strong> (température de palier, courant moteur, vibrations, pression d'huile) permettent la maintenance conditionnelle, avec seuils d'alerte ;</li>\n<li>l'<strong>historique des alarmes</strong> sert à analyser les arrêts et à calculer les indicateurs (temps d'arrêt, MTBF, TRS) ;</li>\n<li>l'analyse de grandes séries de données par des algorithmes permet la <strong>maintenance prévisionnelle</strong> : estimer la durée de vie restante d'un composant à partir de l'évolution de ses mesures.</li>\n</ul>\n<p>Les échanges entre machines de marques différentes et logiciels de niveau supérieur utilisent des standards ouverts, en particulier <strong>OPC UA</strong>, qui décrit les données de façon structurée et sécurisée, et <strong>MQTT</strong>, protocole léger de publication et d'abonnement adapté aux objets connectés. La <strong>télémaintenance</strong> permet à un constructeur ou à un expert d'accéder à distance à une machine pour l'assister au diagnostic.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une ligne de conditionnement, le courant absorbé par le moteur de chaque convoyeur est remonté à la supervision. Une hausse lente sur plusieurs semaines signale un frottement croissant (guides déréglés, chaîne mal lubrifiée). Le technicien planifie l'intervention pendant un arrêt programmé au lieu de subir une panne en pleine production. On parle aussi de <strong>jumeau numérique</strong> lorsqu'un modèle informatique de la machine reproduit son comportement à partir de ces données, pour tester des réglages ou former les opérateurs.</div>"
      },
      {
       "titre": "Cybersécurité des installations industrielles",
       "contenu": "\n<p>Une machine connectée peut être attaquée ou perturbée par un logiciel malveillant, comme n'importe quel ordinateur. Les conséquences sont plus graves qu'au bureau : arrêt de production, destruction d'équipements, mise en danger des personnes. La série de normes <strong>CEI 62443</strong> traite de la sécurité des systèmes d'automatisation, et l'Agence nationale de la sécurité des systèmes d'information (ANSSI) publie des guides destinés aux industriels.</p>\n<p>Le technicien de maintenance est en première ligne, car il branche des ordinateurs portables, des clés USB et des accès de télémaintenance sur les machines. Règles de base :</p>\n<ul>\n<li>utiliser uniquement le <strong>portable de maintenance</strong> dédié, à jour et contrôlé, jamais un ordinateur personnel ;</li>\n<li>ne connecter aucune clé USB non vérifiée sur une IHM ou un poste de supervision ;</li>\n<li>ne jamais laisser une connexion de télémaintenance ouverte après l'intervention ; elle doit être autorisée et ouverte pour une durée limitée ;</li>\n<li>conserver des <strong>mots de passe</strong> personnels et ne pas les noter sur l'armoire ; changer les mots de passe par défaut des équipements ;</li>\n<li>ne pas relier le réseau machine au réseau bureautique sans l'accord du service informatique : les réseaux sont séparés en <strong>zones</strong> protégées par des pare-feu ;</li>\n<li>sauvegarder programmes et paramètres pour pouvoir restaurer rapidement après un incident.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> brancher le portable de maintenance à la fois sur le réseau de la machine et sur le réseau Wi-Fi de l'entreprise crée un pont entre deux zones qui devaient rester séparées. Désactivez les autres interfaces réseau avant de vous raccorder à une machine.</div>\n<p>Enfin, toute modification de paramétrage réseau (adresse, nom d'appareil, ajout d'un commutateur) doit être documentée dans le dossier de la machine. Un plan de réseau à jour, indiquant chaque équipement, son adresse, son port de raccordement et le repère du câble, fait gagner un temps considérable au diagnostic.</p>"
      }
     ],
     "points_cles": [
      "Une usine connectée s'organise en niveaux : terrain, commande, supervision, pilotage de production, gestion.",
      "Les réseaux de terrain (Modbus, Profibus, Profinet, AS-i, IO-Link) remplacent le câblage fil à fil et fournissent du diagnostic.",
      "Une adresse IPv4, un masque et éventuellement une passerelle définissent la place d'un appareil sur le réseau.",
      "Deux appareils ne communiquent directement que dans le même sous-réseau et ne doivent jamais partager une adresse.",
      "Voyant LINK éteint : problème physique ; LINK allumé sans échange : problème de paramétrage.",
      "La supervision et les compteurs alimentent la GMAO et rendent possible la maintenance conditionnelle et prévisionnelle.",
      "OPC UA et MQTT sont des standards d'échange de données entre machines et logiciels.",
      "La cybersécurité fait partie de l'intervention : portable dédié, pas de clé USB non contrôlée, télémaintenance fermée."
     ],
     "lexique": [
      {
       "terme": "Réseau de terrain",
       "def": "Réseau de communication reliant automates, capteurs, actionneurs et variateurs au niveau de la machine."
      },
      {
       "terme": "Adresse IP",
       "def": "Identifiant logique d'un appareil sur un réseau, composé de quatre nombres en IPv4."
      },
      {
       "terme": "Masque de sous-réseau",
       "def": "Valeur qui indique la partie de l'adresse IP désignant le réseau."
      },
      {
       "terme": "Commutateur",
       "def": "Équipement qui distribue les trames Ethernet entre ses ports vers le bon destinataire."
      },
      {
       "terme": "SCADA",
       "def": "Système de supervision et d'acquisition de données d'une installation."
      },
      {
       "terme": "MES",
       "def": "Logiciel de pilotage de la production qui suit les ordres de fabrication et les performances."
      },
      {
       "terme": "IIoT",
       "def": "Internet industriel des objets : équipements de production connectés échangeant des données."
      },
      {
       "terme": "OPC UA",
       "def": "Standard ouvert et sécurisé d'échange de données entre équipements et logiciels industriels."
      },
      {
       "terme": "Télémaintenance",
       "def": "Intervention ou assistance réalisée à distance par l'intermédiaire d'une connexion réseau."
      },
      {
       "terme": "Cybersécurité",
       "def": "Ensemble des mesures protégeant les systèmes numériques contre les attaques et les incidents."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Interventions de maintenance, sécurité et QSE",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmspc-habilitation-consignation",
     "titre": "Habilitation électrique et consignation des énergies",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Situer une intervention dans le bon domaine de tension et identifier l'habilitation qu'elle exige.",
      "Décoder un symbole d'habilitation selon la norme NF C 18-510.",
      "Décrire les étapes d'une consignation électrique et le rôle de chaque intervenant.",
      "Étendre la démarche de consignation aux énergies pneumatique, hydraulique, mécanique et thermique.",
      "Organiser une remise en service sûre après intervention."
     ],
     "sections": [
      {
       "titre": "Le cadre réglementaire de l'habilitation",
       "contenu": "\n<p>Le cours de seconde a présenté les risques d'une installation automatisée et les règles générales de prévention. Le technicien de maintenance va plus loin : il intervient à l'intérieur des armoires, ouvre des circuits, remplace des composants. Le Code du travail (articles R. 4544-1 et suivants) impose que les opérations sur les installations électriques ou dans leur voisinage ne soient confiées qu'à des travailleurs <strong>habilités</strong>.</p>\n<p>L'<strong>habilitation</strong> est la reconnaissance, par l'employeur, de la capacité d'une personne à accomplir en sécurité les tâches qui lui sont confiées vis-à-vis du risque électrique. Elle est formalisée par un <strong>titre d'habilitation</strong> signé par l'employeur et par le salarié. Elle s'appuie sur une formation adaptée et sur l'avis du médecin du travail ; elle n'est pas un diplôme et ne suit pas le salarié d'une entreprise à l'autre. La norme de référence est la <strong>NF C 18-510</strong>, qui précise les opérations, les symboles et les procédures. Une formation de recyclage est recommandée selon une périodicité définie par l'employeur, généralement trois ans.</p>\n<p>Les <strong>domaines de tension</strong> déterminent la lettre de l'habilitation :</p>\n<table>\n<thead><tr><th>Domaine</th><th>Courant alternatif</th><th>Courant continu</th><th>Lettre</th></tr></thead>\n<tbody>\n<tr><td>Très basse tension (TBT)</td><td>U ≤ 50 V</td><td>U ≤ 120 V</td><td>B</td></tr>\n<tr><td>Basse tension (BT)</td><td>50 V &lt; U ≤ 1 000 V</td><td>120 V &lt; U ≤ 1 500 V</td><td>B</td></tr>\n<tr><td>Haute tension A (HTA)</td><td>1 000 V &lt; U ≤ 50 000 V</td><td>1 500 V &lt; U ≤ 75 000 V</td><td>H</td></tr>\n<tr><td>Haute tension B (HTB)</td><td>U &gt; 50 000 V</td><td>U &gt; 75 000 V</td><td>H</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une machine alimentée en 400 V triphasé relève du domaine BT : les habilitations concernées commencent par B. Les variateurs de vitesse contiennent un bus continu d'environ 560 V, lui aussi en BT, qui reste chargé plusieurs minutes après la coupure.</div>"
      },
      {
       "titre": "Lire un symbole d'habilitation",
       "contenu": "\n<p>Le symbole d'habilitation se compose d'une lettre de domaine, d'un caractère indiquant le type d'opération et, le cas échéant, d'un attribut.</p>\n<table>\n<thead><tr><th>Symbole</th><th>Signification</th><th>Exemple de tâche</th></tr></thead>\n<tbody>\n<tr><td>B0 / H0</td><td>Exécutant de travaux d'ordre non électrique</td><td>Mécanicien qui change un réducteur dans un local électrique</td></tr>\n<tr><td>B0V / H0V</td><td>Travaux non électriques au voisinage de pièces nues sous tension</td><td>Nettoyage à proximité d'un jeu de barres</td></tr>\n<tr><td>B1, B1V</td><td>Exécutant de travaux d'ordre électrique (hors tension, voisinage si V)</td><td>Câblage sous la direction d'un chargé de travaux</td></tr>\n<tr><td>B2, B2V</td><td>Chargé de travaux d'ordre électrique</td><td>Responsable d'une modification d'armoire</td></tr>\n<tr><td>BC</td><td>Chargé de consignation</td><td>Réalise la consignation d'un ouvrage</td></tr>\n<tr><td>BR</td><td>Chargé d'intervention générale BT</td><td>Dépannage, remplacement de composants, raccordements, mesures, essais</td></tr>\n<tr><td>BS</td><td>Chargé d'intervention élémentaire</td><td>Remplacement à l'identique d'une lampe, d'un fusible, d'une prise</td></tr>\n<tr><td>BE + attribut</td><td>Chargé d'opérations spécifiques : essai, mesurage, vérification, manœuvre</td><td>BE Manœuvre : réarmer un disjoncteur ; BE Mesurage : relever des grandeurs</td></tr>\n</tbody>\n</table>\n<p>Le technicien de maintenance des systèmes de production est typiquement habilité <strong>BR</strong> et <strong>BC</strong>, parfois B2V, selon les tâches que lui confie son employeur. L'élève de bac pro reçoit au cours de sa formation la préparation à l'habilitation correspondant aux activités de l'examen et des périodes en entreprise.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le titre d'habilitation précise les ouvrages et les opérations autorisés. Être habilité BR sur les machines de son atelier ne donne pas le droit d'intervenir dans le poste de transformation HTA de l'usine. En cas de doute, ne pas intervenir et demander.</div>"
      },
      {
       "titre": "La consignation électrique pas à pas",
       "contenu": "\n<p>La <strong>consignation</strong> est l'ensemble des opérations qui permettent de mettre un équipement en sécurité et de l'y maintenir pendant toute l'intervention, en empêchant sa remise sous tension intempestive. La norme NF C 18-510 la décompose en cinq étapes.</p>\n<ol>\n<li><strong>Séparation</strong> de l'ouvrage de toute source d'énergie, par un organe de séparation dont la coupure est certaine (sectionneur, interrupteur-sectionneur ou disjoncteur apte au sectionnement), y compris les sources secondaires : alimentation de secours, onduleur, autre départ alimentant un circuit de commande.</li>\n<li><strong>Condamnation</strong> de l'organe de séparation en position d'ouverture : cadenas personnel, dispositif de blocage, et <strong>pancarte</strong> signalant l'interdiction de manœuvrer.</li>\n<li><strong>Identification</strong> de l'ouvrage sur le lieu de travail : s'assurer que l'on va travailler sur l'équipement qui a été séparé (repérage, schéma, étiquettes).</li>\n<li><strong>Vérification d'absence de tension</strong> (VAT) au plus près du lieu de travail, sur tous les conducteurs actifs, neutre compris, avec un <strong>VAT</strong> conforme dont on vérifie le bon fonctionnement avant et après la mesure.</li>\n<li><strong>Mise à la terre et en court-circuit</strong> des conducteurs, obligatoire en HTA et en BT lorsqu'il existe un risque de tension induite ou de réalimentation ; en BT, elle n'est pas systématique pour une machine courante.</li>\n</ol>\n<p>Le <strong>chargé de consignation</strong> réalise ces opérations et délivre une <strong>attestation de consignation</strong> au chargé de travaux. À la fin, l'avis de fin de travail permet la déconsignation dans l'ordre inverse.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser une VAT sur le départ d'un moteur triphasé 400 V avec neutre non distribué. 1) Porter les EPI adaptés (gants isolants, écran facial, vêtements non propagateurs de flamme). 2) Tester le VAT sur une source connue sous tension ou sur son testeur intégré. 3) Mesurer entre L1-L2, L2-L3, L1-L3. 4) Mesurer entre chaque phase et la terre : L1-PE, L2-PE, L3-PE. 5) Retester le VAT sur la source connue. 6) Seulement si toutes les mesures indiquent l'absence de tension, considérer l'ouvrage comme hors tension. Un multimètre n'est pas un VAT : il peut être sur le mauvais calibre, ses cordons peuvent être défectueux, et il n'est pas conçu pour cet usage.</div>"
      },
      {
       "titre": "Consigner toutes les énergies",
       "contenu": "\n<p>Une machine automatisée ne contient pas que de l'électricité. Une consignation complète concerne <strong>toutes les énergies</strong> susceptibles de provoquer un mouvement, une projection ou une brûlure. L'INRS rappelle que la consignation suit toujours la même logique : séparer, condamner, dissiper les énergies résiduelles, vérifier.</p>\n<table>\n<thead><tr><th>Énergie</th><th>Séparation et condamnation</th><th>Dissipation et vérification</th></tr></thead>\n<tbody>\n<tr><td>Pneumatique</td><td>Vanne de coupure de l'unité de conditionnement, cadenassable</td><td>Purge par la vanne 3 voies, manomètre à zéro ; attention aux réservoirs et aux vérins bloqués par des clapets</td></tr>\n<tr><td>Hydraulique</td><td>Arrêt de la pompe (consignation électrique), vanne d'isolement</td><td>Décharge des accumulateurs, manomètre à zéro, charges suspendues calées</td></tr>\n<tr><td>Mécanique potentielle</td><td>Calage, béquilles de sécurité, verrous mécaniques</td><td>Mise en position basse ou blocage des charges, ressorts détendus</td></tr>\n<tr><td>Mécanique cinétique</td><td>Consignation de la motorisation</td><td>Attente de l'arrêt complet des volants et broches</td></tr>\n<tr><td>Thermique</td><td>Coupure du chauffage</td><td>Attente du refroidissement, mesure de température</td></tr>\n<tr><td>Fluides (vapeur, eau, produits)</td><td>Vannes fermées et cadenassées, joint plein si nécessaire</td><td>Vidange, purge, contrôle de l'absence de pression</td></tr>\n</tbody>\n</table>\n<p>Sur un site comportant plusieurs intervenants, on utilise une <strong>consignation multiple</strong> : chaque intervenant pose son propre cadenas sur une pince multi-cadenas ou dans une boîte de consignation collective. L'énergie ne peut être rétablie que lorsque le dernier intervenant a retiré son cadenas.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> couper l'électricité d'une machine ne purge pas l'air comprimé. Un vérin peut encore se déplacer si l'on desserre un raccord ou si l'on actionne manuellement un distributeur. De même, un bras de presse ou une table élévatrice hydraulique peut descendre sous son propre poids si l'on ouvre le circuit. Les énergies résiduelles sont à l'origine de nombreux accidents graves en maintenance.</div>"
      },
      {
       "titre": "Fiche de consignation et remise en service",
       "contenu": "\n<p>Pour chaque machine, le service maintenance rédige une <strong>fiche de consignation</strong> (ou procédure de consignation) qui liste, dans l'ordre, les points d'isolement de chaque énergie, leur repère et leur emplacement, l'équipement de condamnation à utiliser et le moyen de vérifier l'absence d'énergie. Elle est souvent illustrée d'une photographie de chaque point de coupure, affichée sur la machine et enregistrée dans la GMAO.</p>\n<p>La <strong>remise en service</strong> est une étape aussi dangereuse que la consignation, car la machine redémarre après avoir été démontée. Elle suit un ordre strict :</p>\n<ol>\n<li>vérifier que l'intervention est terminée, que les outils et pièces démontées ont été récupérés, que les carters et protecteurs sont remontés ;</li>\n<li>s'assurer que plus personne n'est dans la zone dangereuse et prévenir le personnel de production ;</li>\n<li>retirer les mises à la terre éventuelles, puis les cadenas, dans l'ordre inverse de la consignation ;</li>\n<li>rétablir les énergies une par une, en commençant généralement par les énergies de commande ;</li>\n<li>réaliser les essais : sens de rotation, fonctionnement en mode manuel, puis cycle automatique ;</li>\n<li>contrôler le fonctionnement des dispositifs de sécurité (arrêt d'urgence, protecteurs interverrouillés) ;</li>\n<li>restituer la machine au responsable de production et renseigner le bon de travail.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans de nombreuses usines, chaque technicien dispose de cadenas de couleur personnelle, marqués à son nom, dont il garde la seule clé. Le principe « un intervenant, un cadenas, une clé » garantit que personne ne peut remettre en énergie une machine sur laquelle un autre travaille. Le prêt de cadenas ou le retrait du cadenas d'un collègue absent fait l'objet d'une procédure exceptionnelle encadrée par la hiérarchie.</div>"
      }
     ],
     "points_cles": [
      "Toute opération électrique ou au voisinage exige une habilitation délivrée par l'employeur, selon la NF C 18-510.",
      "B désigne les domaines TBT et BT (jusqu'à 1 000 V alternatif), H les domaines HTA et HTB.",
      "BR autorise les interventions générales de dépannage en BT ; BC autorise la consignation.",
      "Consignation électrique : séparation, condamnation, identification, VAT, mise à la terre et en court-circuit si nécessaire.",
      "Le VAT se teste avant et après la mesure ; un multimètre n'en est pas un.",
      "Toutes les énergies se consignent : pneumatique, hydraulique, mécanique, thermique, fluides.",
      "Les énergies résiduelles (air piégé, accumulateurs, charges suspendues) doivent être dissipées.",
      "La remise en service suit un ordre strict, se termine par le contrôle des sécurités et la restitution de la machine."
     ],
     "lexique": [
      {
       "terme": "Habilitation",
       "def": "Reconnaissance par l'employeur de la capacité d'une personne à effectuer en sécurité des opérations vis-à-vis du risque électrique."
      },
      {
       "terme": "Titre d'habilitation",
       "def": "Document signé par l'employeur et le salarié précisant les symboles et le champ de l'habilitation."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble des opérations qui mettent et maintiennent un équipement en sécurité vis-à-vis d'une énergie."
      },
      {
       "terme": "Séparation",
       "def": "Isolement de l'équipement de toutes ses sources d'énergie par un organe à coupure certaine."
      },
      {
       "terme": "Condamnation",
       "def": "Blocage de l'organe de séparation en position ouverte par un cadenas personnel et une signalisation."
      },
      {
       "terme": "VAT",
       "def": "Vérificateur d'absence de tension ; désigne aussi l'opération de vérification elle-même."
      },
      {
       "terme": "Chargé de consignation",
       "def": "Personne habilitée BC qui réalise la consignation et remet l'attestation correspondante."
      },
      {
       "terme": "Énergie résiduelle",
       "def": "Énergie qui subsiste après séparation : pression piégée, condensateur chargé, charge en hauteur, pièce chaude."
      },
      {
       "terme": "Consignation multiple",
       "def": "Consignation sur laquelle chaque intervenant pose son propre cadenas."
      }
     ]
    },
    {
     "id": "bmspc-roulements-lubrification-etancheite",
     "titre": "Roulements, lubrification, étanchéité et assemblages vissés",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décoder la désignation d'un roulement et choisir un roulement de remplacement équivalent.",
      "Préparer et réaliser le démontage et le montage d'un roulement selon les règles de l'art.",
      "Choisir un lubrifiant et une méthode de lubrification à partir d'une notice ou d'un plan de graissage.",
      "Identifier les principaux dispositifs d'étanchéité et les précautions de montage.",
      "Réaliser un serrage contrôlé et un freinage adapté d'un assemblage vissé."
     ],
     "sections": [
      {
       "titre": "Les roulements : types et désignation",
       "contenu": "\n<p>Les <strong>roulements</strong> réalisent le guidage en rotation de la plupart des arbres des machines de production. Ils sont, avec les joints et les courroies, parmi les composants les plus souvent remplacés en maintenance. Un roulement se compose d'une <strong>bague intérieure</strong>, d'une <strong>bague extérieure</strong>, d'<strong>éléments roulants</strong> (billes, rouleaux cylindriques, coniques ou sphériques, aiguilles) et d'une <strong>cage</strong> qui les maintient espacés.</p>\n<table>\n<thead><tr><th>Type</th><th>Charges supportées</th><th>Particularités</th></tr></thead>\n<tbody>\n<tr><td>Roulement rigide à billes</td><td>Radiales et axiales modérées</td><td>Le plus courant, vitesse élevée ; moteurs électriques</td></tr>\n<tr><td>Roulement à rouleaux cylindriques</td><td>Radiales fortes, pas d'axiale (selon modèle)</td><td>Bagues séparables, permet la dilatation de l'arbre</td></tr>\n<tr><td>Roulement à rouleaux coniques</td><td>Radiales et axiales fortes dans un sens</td><td>Monté par paire, réglage du jeu ou de la précharge</td></tr>\n<tr><td>Roulement à rotule sur rouleaux</td><td>Radiales très fortes, axiales</td><td>Accepte un désalignement ; souvent monté sur manchon conique</td></tr>\n<tr><td>Butée à billes</td><td>Axiales uniquement</td><td>Ne supporte pas de charge radiale</td></tr>\n</tbody>\n</table>\n<p>La <strong>désignation</strong> normalisée (ISO 15) des roulements courants se lit ainsi. Pour un 6205-2RS C3 : le premier chiffre <strong>6</strong> indique le type (rigide à billes) ; le chiffre <strong>2</strong> la série de dimensions (série légère) ; <strong>05</strong> le code d'alésage : pour les codes de 04 à 96, l'alésage vaut code × 5, soit 25 mm (les codes 00, 01, 02 et 03 correspondent à 10, 12, 15 et 17 mm). Le suffixe <strong>2RS</strong> désigne deux joints frottants (pour certains fabricants 2RS1 ou 2RSH), <strong>2Z</strong> deux flasques métalliques ; <strong>C3</strong> indique un jeu interne supérieur au jeu normal, fréquent sur les moteurs électriques.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer un roulement C3 par un roulement à jeu normal, ou un roulement à joints par un roulement ouvert, modifie le comportement du montage : échauffement, entrée de pollution, perte de graisse. Relevez la désignation complète, suffixes compris, sur l'ancien roulement ou dans la nomenclature avant de commander.</div>"
      },
      {
       "titre": "Démonter et monter un roulement",
       "contenu": "\n<p>La règle fondamentale est la suivante : la bague qui <strong>tourne par rapport à la charge</strong> est montée <strong>serrée</strong> ; l'autre peut être montée glissante. Sur un moteur, l'arbre tourne et la charge est fixe : la bague intérieure est serrée sur l'arbre, la bague extérieure est montée avec un ajustement plus libre dans le flasque. Les tolérances (par exemple k5 ou m5 sur l'arbre, H7 dans l'alésage) figurent sur les plans de définition.</p>\n<p>La seconde règle est que l'effort de montage ou de démontage doit être appliqué sur la bague que l'on monte ou démonte, <strong>jamais à travers les éléments roulants</strong>, sous peine de marquer les pistes (empreintes appelées faux effet Brinell) et de réduire fortement la durée de vie.</p>\n<ul>\n<li><strong>Démontage</strong> : extracteur à griffes appuyé sur la bague serrée, extracteur hydraulique pour les grandes dimensions, injection d'huile pour les montages sur manchon conique.</li>\n<li><strong>Montage à froid</strong> des petits roulements : douille de frappe ou kit de montage appuyant uniformément sur la bague serrée, ou presse.</li>\n<li><strong>Montage à chaud</strong> : on dilate la bague intérieure avec un <strong>chauffeur à induction</strong>, puis on la glisse sur l'arbre. La température recommandée est donnée par le fabricant ; on reste généralement autour d'une centaine de degrés au-dessus de l'ambiante et l'on ne dépasse pas la limite indiquée (de l'ordre de 120 °C pour de nombreux roulements standards), au risque de modifier l'acier ou d'endommager joints et graisse. Jamais de chalumeau.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> remplacer le roulement 6205-2RS C3 côté accouplement d'un moteur. 1) Consigner, désaccoupler, déposer le moteur sur l'établi. 2) Repérer la position des flasques au feutre, déposer le flasque côté accouplement. 3) Extraire le roulement avec un extracteur appuyé sur la bague intérieure. 4) Nettoyer et contrôler la portée de l'arbre (rayures, traces de rotation de la bague, diamètre au micromètre) et le logement du flasque. 5) Chauffer le roulement neuf au chauffeur à induction à la température prescrite par la notice, en mode démagnétisation. 6) Le glisser jusqu'à l'épaulement avec des gants thermiques et le maintenir appuyé pendant le refroidissement. 7) Remonter le flasque selon les repères, vérifier la rotation libre à la main. 8) Recoupler, contrôler l'alignement, essayer, puis mesurer la température et les vibrations après une heure de fonctionnement.</div>\n<p>L'examen du roulement déposé renseigne sur la cause de la défaillance : écaillage régulier (fatigue normale en fin de vie), corrosion (eau), empreintes régulières (choc ou montage incorrect), coloration bleue (surchauffe, manque de lubrifiant), traces de passage de courant (cannelures dues aux courants d'arbre de certains moteurs alimentés par variateur).</p>"
      },
      {
       "titre": "Lubrification : rôle, lubrifiants et méthodes",
       "contenu": "\n<p>La <strong>lubrification</strong> sépare les surfaces en mouvement par un film de lubrifiant. Elle réduit le frottement et l'usure, évacue la chaleur (pour les huiles), protège contre la corrosion et participe à l'étanchéité (pour les graisses).</p>\n<table>\n<thead><tr><th>Lubrifiant</th><th>Caractéristique principale</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Huile</td><td><strong>Viscosité</strong>, classée ISO VG (par exemple VG 46 pour une centrale hydraulique, VG 220 pour un réducteur à engrenages) : viscosité cinématique moyenne en mm²/s à 40 °C</td><td>Réducteurs, hydraulique, compresseurs, chaînes</td></tr>\n<tr><td>Graisse</td><td><strong>Consistance</strong>, classée NLGI de 000 (très fluide) à 6 (très dure) ; NLGI 2 est la plus courante pour les roulements</td><td>Roulements, glissières, articulations</td></tr>\n</tbody>\n</table>\n<p>Une graisse est une huile retenue par un <strong>épaississant</strong> (savon de lithium, de calcium, complexe d'aluminium, polyurée). Deux graisses d'épaississants différents peuvent être <strong>incompatibles</strong> : leur mélange se ramollit ou durcit et ne lubrifie plus. On ne change donc pas de graisse sans vérifier la compatibilité et, si besoin, sans purger complètement l'ancienne.</p>\n<p>Le <strong>plan de lubrification</strong> de la machine précise, pour chaque point : le lubrifiant, la quantité, la périodicité et la méthode. Les fabricants de roulements proposent une formule d'estimation de la quantité de regraissage : G = 0,005 × D × B, avec G en grammes, D le diamètre extérieur et B la largeur du roulement en millimètres. Pour un 6310 (D = 110 mm, B = 27 mm), G = 0,005 × 110 × 27 ≈ 15 g.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> trop de graisse est aussi néfaste que pas assez. Un roulement rempli à refus chauffe par brassage de la graisse et les joints peuvent être expulsés. Regraissez avec la quantité prescrite, machine en rotation si la notice le prévoit, et ouvrez le bouchon de purge lorsqu'il existe.</div>\n<p>La lubrification peut être <strong>manuelle</strong> (pompe à graisse, burette), <strong>automatique monopoint</strong> (graisseur à cartouche réglable en durée), ou <strong>centralisée</strong> (pompe et réseau de distribution vers tous les points d'une machine). Sur les systèmes centralisés, le technicien vérifie le niveau du réservoir, le fonctionnement de la pompe et l'arrivée effective de lubrifiant à chaque point, car une canalisation bouchée prive silencieusement un palier.</p>"
      },
      {
       "titre": "Les dispositifs d'étanchéité",
       "contenu": "\n<p>L'<strong>étanchéité</strong> empêche le lubrifiant ou le fluide de sortir et les polluants d'entrer. On distingue l'étanchéité <strong>statique</strong> (entre deux pièces sans mouvement relatif) et l'étanchéité <strong>dynamique</strong> (entre pièces en mouvement).</p>\n<ul>\n<li><strong>Joint torique</strong> : anneau élastomère à section circulaire logé dans une gorge, pour l'étanchéité statique ou dynamique à faible vitesse. Il se désigne par son diamètre intérieur, son diamètre de section et sa matière (NBR pour les huiles minérales, FKM pour les hautes températures, EPDM pour l'eau et la vapeur, incompatible avec les huiles minérales).</li>\n<li><strong>Joint plat</strong> et <strong>pâte d'étanchéité</strong> : étanchéité statique de carters et de couvercles.</li>\n<li><strong>Bague d'étanchéité à lèvre</strong> : étanchéité dynamique sur arbre tournant ; la lèvre, maintenue par un ressort, est orientée côté fluide à retenir.</li>\n<li><strong>Garniture mécanique</strong> : étanchéité d'arbre de pompe par deux faces planes polies (une fixe, une tournante) maintenues en contact par un ressort ; elle doit toujours fonctionner en présence de fluide.</li>\n<li><strong>Joints de vérin</strong> : joints de piston, de tige et racleur, livrés en pochette de réparation.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une bague à lèvre neuve montée sur la même trace d'usure de l'arbre fuit rapidement. Le technicien décale légèrement la position de montage quand le logement le permet, utilise une bague de réparation (chemise mince emmanchée sur l'arbre) ou fait rectifier la portée. Il lubrifie toujours la lèvre au montage et protège les arêtes vives et les rainures de clavette avec un manchon de montage.</div>"
      },
      {
       "titre": "Assemblages vissés : serrage et freinage",
       "contenu": "\n<p>Les vis et écrous assurent la plupart des liaisons démontables. Une vis travaille correctement lorsqu'elle est serrée à la bonne <strong>précharge</strong> : un effort de tension qui plaque les pièces l'une contre l'autre. Trop faible, l'assemblage se desserre sous les vibrations ; trop fort, la vis s'allonge plastiquement ou casse.</p>\n<p>La <strong>classe de qualité</strong> d'une vis en acier est gravée sur sa tête : 8.8, 10.9, 12.9. Le premier nombre multiplié par 100 donne la résistance minimale à la rupture en MPa (800 MPa pour 8.8) ; le produit des deux nombres multiplié par 10 donne la limite d'élasticité (8 × 8 × 10 = 640 MPa). Une vis de remplacement doit être de la même classe, jamais inférieure.</p>\n<p>Le serrage se contrôle avec une <strong>clé dynamométrique</strong>, réglée au <strong>couple de serrage</strong> indiqué dans la notice ou le dossier (en N·m). Ce couple dépend du diamètre, de la classe et de l'état de lubrification du filetage : une vis graissée atteint une précharge plus élevée au même couple. Sur les assemblages à plusieurs vis (couvercles, brides, flasques), on serre <strong>en croix</strong> et en plusieurs passes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> remonter le couvercle d'un réducteur fixé par huit vis M10 classe 8.8. 1) Nettoyer les filetages et les plans de joint. 2) Poser le joint neuf prescrit. 3) Engager toutes les vis à la main. 4) Régler la clé dynamométrique à la moitié du couple prescrit et serrer en croix. 5) Régler au couple prescrit par le constructeur et resserrer dans le même ordre. 6) Faire une passe de contrôle. 7) Tracer un trait de repère au marqueur sur chaque tête et sur le carter pour visualiser un éventuel desserrage lors des inspections suivantes.</div>\n<p>Pour éviter le desserrage sous vibrations, on utilise un <strong>freinage</strong> : produit frein-filet anaérobie (de résistance faible, moyenne ou forte selon la démontabilité souhaitée), écrou autofreiné à insert, rondelles de blocage à came, fil de freinage, goupille fendue avec écrou crénelé. Les rondelles élastiques de type Grower sont considérées comme peu efficaces sur les assemblages correctement préchargés et sont de moins en moins prescrites.</p>"
      }
     ],
     "points_cles": [
      "Désignation 6205 : type 6 (rigide à billes), série 2, alésage 05 × 5 = 25 mm ; suffixes 2RS, 2Z, C3 à respecter.",
      "La bague tournante par rapport à la charge est montée serrée.",
      "L'effort de montage ou de démontage ne passe jamais par les éléments roulants.",
      "Montage à chaud au chauffeur à induction, à la température prescrite, jamais au chalumeau.",
      "Huiles classées ISO VG (viscosité), graisses classées NLGI (consistance) ; attention aux incompatibilités.",
      "Quantité de regraissage indicative : G = 0,005 × D × B ; l'excès de graisse fait chauffer.",
      "Étanchéité statique ou dynamique ; matière du joint adaptée au fluide (NBR, FKM, EPDM).",
      "Classe de vis 8.8 : Rm = 800 MPa, Re = 640 MPa ; serrage au couple, en croix, freinage adapté."
     ],
     "lexique": [
      {
       "terme": "Roulement rigide à billes",
       "def": "Roulement le plus courant, supportant des charges radiales et des charges axiales modérées."
      },
      {
       "terme": "Jeu interne C3",
       "def": "Jeu interne de roulement supérieur au jeu normal, adapté aux montages qui chauffent."
      },
      {
       "terme": "Chauffeur à induction",
       "def": "Appareil qui chauffe un roulement par induction pour dilater sa bague avant montage."
      },
      {
       "terme": "Viscosité ISO VG",
       "def": "Classe de viscosité d'une huile, égale à sa viscosité cinématique moyenne en mm²/s à 40 °C."
      },
      {
       "terme": "Grade NLGI",
       "def": "Classe de consistance d'une graisse, de 000 à 6."
      },
      {
       "terme": "Bague d'étanchéité à lèvre",
       "def": "Joint dynamique qui assure l'étanchéité d'un arbre tournant par une lèvre élastique."
      },
      {
       "terme": "Garniture mécanique",
       "def": "Dispositif d'étanchéité d'arbre de pompe par contact de deux faces planes polies."
      },
      {
       "terme": "Précharge",
       "def": "Effort de tension créé dans une vis par le serrage, qui plaque les pièces assemblées."
      },
      {
       "terme": "Frein-filet",
       "def": "Produit anaérobie qui durcit dans le filetage et s'oppose au desserrage."
      }
     ]
    },
    {
     "id": "bmspc-diagnostic-depannage",
     "titre": "Diagnostic de défaillance et maintenance corrective",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer défaillance, panne, mode de défaillance, cause et effet.",
      "Conduire un diagnostic selon une démarche structurée, de la constatation à la remise en service.",
      "Utiliser l'arbre de défaillance, la méthode par demi-division et les cinq pourquoi.",
      "Choisir et interpréter les mesures électriques adaptées à la recherche d'un défaut.",
      "Distinguer réparation provisoire et réparation définitive et en assurer la traçabilité."
     ],
     "sections": [
      {
       "titre": "Le vocabulaire de la défaillance",
       "contenu": "\n<p>La <strong>maintenance corrective</strong> est exécutée après la détection d'une panne, pour remettre un bien dans un état lui permettant d'accomplir sa fonction. Sa réussite repose sur la qualité du <strong>diagnostic</strong> : identifier la cause probable de la défaillance à l'aide d'un raisonnement logique fondé sur des observations et des contrôles. Pour raisonner juste, il faut employer les mots justes, définis par la norme NF EN 13306 sur la terminologie de la maintenance.</p>\n<table>\n<thead><tr><th>Terme</th><th>Définition simplifiée</th><th>Exemple sur un convoyeur</th></tr></thead>\n<tbody>\n<tr><td><strong>Défaillance</strong></td><td>Perte de l'aptitude d'un bien à accomplir sa fonction ; c'est un événement</td><td>Le convoyeur s'arrête en production</td></tr>\n<tr><td><strong>Panne</strong></td><td>État d'un bien inapte à accomplir sa fonction, qui suit la défaillance</td><td>Le convoyeur est à l'arrêt</td></tr>\n<tr><td><strong>Mode de défaillance</strong></td><td>Manière dont la défaillance se manifeste</td><td>Le moteur ne démarre pas</td></tr>\n<tr><td><strong>Cause de défaillance</strong></td><td>Circonstance qui a conduit à la défaillance</td><td>Roulement grippé provoquant une surcharge et le déclenchement du relais thermique</td></tr>\n<tr><td><strong>Effet</strong></td><td>Conséquence sur le système, la production, la sécurité</td><td>Accumulation de produits en amont, arrêt de la ligne</td></tr>\n<tr><td><strong>Symptôme</strong></td><td>Signe observable</td><td>Voyant défaut thermique allumé, odeur de chaud</td></tr>\n</tbody>\n</table>\n<p>Une défaillance peut être <strong>complète</strong> (perte totale de la fonction) ou <strong>partielle</strong> (fonction dégradée : vitesse réduite, défauts qualité), <strong>soudaine</strong> ou <strong>progressive</strong>, <strong>permanente</strong> ou <strong>intermittente</strong>. Les défaillances intermittentes sont les plus difficiles à diagnostiquer, car le défaut a souvent disparu quand le technicien arrive.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> réarmer un relais thermique et relancer la machine traite le symptôme, pas la cause. Si la cause (surcharge mécanique, roulement, mauvais réglage) n'est pas trouvée, la défaillance reviendra, souvent avec des dégâts plus importants.</div>"
      },
      {
       "titre": "La démarche de diagnostic",
       "contenu": "\n<p>Un bon diagnostic suit une démarche ordonnée, qui évite de démonter au hasard et de remplacer des pièces saines.</p>\n<ol>\n<li><strong>Prendre connaissance de la demande</strong> : lire la demande d'intervention, questionner l'opérateur (que s'est-il passé, quand, après quelle opération, est-ce la première fois ?), relever les messages d'alarme de l'IHM et l'historique de la machine dans la GMAO.</li>\n<li><strong>Constater la défaillance</strong> : observer soi-même le comportement, en sécurité, si possible en reproduisant le cycle en mode manuel. Utiliser ses sens : bruit, odeur, échauffement, fuite, voyants.</li>\n<li><strong>Analyser le fonctionnement</strong> : à l'aide du dossier technique, situer la fonction perdue dans la chaîne d'information ou la chaîne d'énergie, et lister les constituants qui y participent.</li>\n<li><strong>Émettre des hypothèses</strong> et les classer par probabilité et par facilité de contrôle.</li>\n<li><strong>Vérifier les hypothèses</strong> par des contrôles et des mesures, en commençant par les plus probables et les plus simples.</li>\n<li><strong>Identifier la cause</strong> et décider de la remise en état : réglage, remplacement, réparation.</li>\n<li><strong>Remettre en service</strong>, faire les essais, restituer la machine.</li>\n<li><strong>Rendre compte</strong> : compléter le bon de travail et la GMAO, proposer si besoin une amélioration.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les dix premières minutes d'un dépannage se passent souvent à questionner l'opérateur et à lire l'IHM. Un message « défaut capteur porte » horodaté juste après un nettoyage de la machine oriente immédiatement vers un détecteur déplacé ou un connecteur arrosé, sans rien démonter.</div>"
      },
      {
       "titre": "Outils d'aide au diagnostic",
       "contenu": "\n<p>Plusieurs outils structurent la réflexion.</p>\n<h4>L'arbre de défaillance</h4>\n<p>On place en haut l'<strong>événement redouté</strong> (par exemple « le vérin de transfert ne sort pas ») et on le décompose vers le bas en causes possibles reliées par des portes logiques. Une porte <strong>OU</strong> signifie qu'une seule des causes suffit ; une porte <strong>ET</strong> que toutes doivent être réunies. On descend jusqu'aux <strong>causes élémentaires</strong> contrôlables.</p>\n<table>\n<thead><tr><th>Niveau</th><th>Causes possibles (porte OU) pour « le vérin ne sort pas »</th></tr></thead>\n<tbody>\n<tr><td>Chaîne d'information</td><td>Ordre absent (étape non active, condition non remplie), sortie automate défaillante, câble coupé, bobine d'électrovanne coupée</td></tr>\n<tr><td>Énergie pneumatique</td><td>Pression absente ou insuffisante, vanne de coupure fermée, limiteur de débit fermé, distributeur bloqué</td></tr>\n<tr><td>Partie mécanique</td><td>Vérin grippé ou joints détruits, tige bloquée par un obstacle, guidage coincé</td></tr>\n</tbody>\n</table>\n<h4>La méthode par demi-division</h4>\n<p>Sur une chaîne de constituants en série (alimentation, protection, commande, préactionneur, actionneur), on fait une mesure au milieu de la chaîne. Si le signal y est présent, le défaut est en aval ; sinon, il est en amont. On recommence sur la moitié défaillante. Cette méthode réduit fortement le nombre de mesures sur une longue chaîne.</p>\n<h4>Les cinq pourquoi</h4>\n<p>Une fois la cause directe trouvée, on demande « pourquoi ? » plusieurs fois pour remonter à la <strong>cause racine</strong>. Exemple : le moteur a déclenché ; pourquoi ? Surcharge. Pourquoi ? Roulement grippé du rouleau de renvoi. Pourquoi ? Pas de graisse. Pourquoi ? Graisseur inaccessible derrière un carter ajouté l'an dernier. Pourquoi ? Le carter a été conçu sans prévoir l'accès. La cause racine appelle une amélioration (déport du graisseur), pas seulement un changement de roulement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> appliquer la demi-division à une électrovanne 24 V DC qui ne colle pas alors que l'étape du grafcet est active. 1) Mesurer au bornier de sortie de l'automate (repère du schéma) entre la sortie et le 0 V : 24 V présents, donc l'automate commande. 2) Mesurer au connecteur de la bobine : 0 V, donc le défaut est entre le bornier et la bobine. 3) Contrôler le relais d'interface ou le fusible intermédiaire indiqué sur le schéma : le fusible est fondu. 4) Avant de le remplacer, mesurer la résistance de la bobine hors tension : quelques ohms au lieu des dizaines d'ohms prévues par la notice, la bobine est en court-circuit et a fait fondre le fusible. 5) Remplacer la bobine, puis le fusible, et essayer.</div>"
      },
      {
       "titre": "Mesures électriques pour le diagnostic",
       "contenu": "\n<p>Le multimètre, la pince ampèremétrique, le mégohmmètre et le testeur de séquence de phases sont les instruments de base. Chaque mesure se fait dans des conditions précises.</p>\n<table>\n<thead><tr><th>Mesure</th><th>État de l'installation</th><th>Ce qu'elle révèle</th></tr></thead>\n<tbody>\n<tr><td>Tension</td><td>Sous tension, habilitation et EPI adaptés</td><td>Présence de l'alimentation à un point de la chaîne ; chute de tension anormale</td></tr>\n<tr><td>Continuité, résistance</td><td>Hors tension, circuit consigné</td><td>Fil coupé, contact défectueux, bobine coupée ou en court-circuit, enroulement moteur</td></tr>\n<tr><td>Courant (pince)</td><td>Sous tension, en fonctionnement</td><td>Surcharge, déséquilibre entre phases, fonctionnement à vide</td></tr>\n<tr><td>Isolement (mégohmmètre)</td><td>Hors tension, composants électroniques déconnectés</td><td>Dégradation de l'isolant d'un câble ou d'un moteur, humidité</td></tr>\n</tbody>\n</table>\n<p>Pour la recherche d'un défaut sous tension dans un circuit de commande en 24 V, on prend une <strong>référence fixe</strong> (le 0 V) et l'on déplace l'autre pointe point par point le long du circuit. La tension disparaît juste après l'élément ouvert. Hors tension, on procède de la même façon en continuité.</p>\n<p>Pour un moteur triphasé, on vérifie que les trois résistances d'enroulement sont égales (un écart signale une spire en court-circuit) et que la résistance d'isolement entre enroulements et carcasse est élevée. Un moteur qui a été noyé ou qui chauffe anormalement fait l'objet d'une mesure d'isolement sous 500 V DC ; la valeur minimale acceptable est indiquée par le constructeur ou par les règles de l'entreprise.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une mesure d'isolement appliquée sur un circuit contenant un variateur, un automate ou des capteurs électroniques peut les détruire. Débranchez ces équipements avant la mesure, ou mesurez directement aux bornes du moteur, câble déconnecté du variateur.</div>"
      },
      {
       "titre": "Remise en état, réparation provisoire et retour d'expérience",
       "contenu": "\n<p>Une fois la cause identifiée, le technicien choisit le mode de remise en état :</p>\n<ul>\n<li>le <strong>dépannage</strong> : action provisoire qui permet de remettre le bien en état de fonctionnement, éventuellement dégradé (par exemple shunter un détecteur de bourrage non lié à la sécurité, avec l'accord du responsable, en attendant la pièce) ;</li>\n<li>la <strong>réparation</strong> : action définitive qui rend au bien ses performances d'origine (remplacement du détecteur et réglage).</li>\n</ul>\n<p>Un dépannage provisoire doit toujours être <strong>signalé</strong> (étiquette sur la machine), <strong>tracé</strong> dans la GMAO et suivi d'une demande de réparation définitive. Il ne doit jamais neutraliser un dispositif de sécurité des personnes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer « au hasard » plusieurs composants jusqu'à ce que la machine reparte coûte cher en pièces, fausse l'historique (on ne sait plus quelle pièce était réellement défaillante) et laisse souvent la cause racine intacte. Un remplacement doit être justifié par une mesure ou une constatation.</div>\n<p>Le <strong>retour d'expérience</strong> transforme chaque panne en connaissance. Le compte rendu de l'intervention mentionne : le symptôme, la cause identifiée, l'action réalisée, les pièces consommées, le temps passé et les recommandations. Ces informations, saisies dans la GMAO, permettent ensuite de calculer les indicateurs de fiabilité, de construire le diagramme de Pareto des pannes et d'alimenter l'AMDEC de la machine. Lorsqu'une même panne se répète, une action d'<strong>amélioration</strong> (maintenance améliorative) est proposée : modification de conception, changement de technologie, ajout d'une protection, révision du plan de maintenance préventive.</p>\n<p>Enfin, le technicien rédige, pour les pannes complexes ou fréquentes, une <strong>fiche d'aide au diagnostic</strong> (ou logigramme de dépannage) destinée à ses collègues et aux opérateurs formés à la maintenance de premier niveau. Elle présente, sous forme de questions fermées enchaînées, les contrôles à réaliser et les actions correspondantes.</p>"
      }
     ],
     "points_cles": [
      "La défaillance est un événement, la panne est un état ; le mode de défaillance décrit comment elle se manifeste.",
      "Traiter le symptôme sans la cause fait revenir la panne.",
      "Démarche : s'informer, constater, analyser, faire des hypothèses, vérifier, identifier, remettre en état, rendre compte.",
      "L'arbre de défaillance décompose un événement redouté en causes élémentaires reliées par des portes ET et OU.",
      "La demi-division localise rapidement un défaut sur une chaîne de constituants en série.",
      "Les cinq pourquoi permettent de remonter à la cause racine.",
      "Tension et courant se mesurent sous tension ; continuité, résistance et isolement hors tension.",
      "Un dépannage provisoire est signalé, tracé et suivi d'une réparation définitive ; il ne neutralise jamais une sécurité."
     ],
     "lexique": [
      {
       "terme": "Diagnostic",
       "def": "Identification de la cause probable d'une défaillance à l'aide d'un raisonnement logique et de contrôles."
      },
      {
       "terme": "Défaillance",
       "def": "Événement correspondant à la perte de l'aptitude d'un bien à accomplir sa fonction."
      },
      {
       "terme": "Panne",
       "def": "État d'un bien inapte à accomplir sa fonction requise."
      },
      {
       "terme": "Mode de défaillance",
       "def": "Manière dont une défaillance se manifeste sur le bien."
      },
      {
       "terme": "Cause racine",
       "def": "Cause première dont la suppression empêche la réapparition de la défaillance."
      },
      {
       "terme": "Arbre de défaillance",
       "def": "Représentation arborescente des causes pouvant conduire à un événement redouté."
      },
      {
       "terme": "Demi-division",
       "def": "Méthode de localisation consistant à tester le milieu d'une chaîne pour éliminer la moitié des hypothèses."
      },
      {
       "terme": "Dépannage",
       "def": "Action provisoire de remise en fonctionnement, à compléter par une réparation."
      },
      {
       "terme": "Retour d'expérience",
       "def": "Exploitation des informations issues des interventions pour améliorer la maintenance et les équipements."
      }
     ]
    },
    {
     "id": "bmspc-surveillance-conditionnelle",
     "titre": "Maintenance conditionnelle et techniques de surveillance",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Expliquer le principe de la maintenance conditionnelle à l'aide de la courbe de dégradation.",
      "Choisir une technique de surveillance adaptée à un mode de défaillance.",
      "Interpréter une mesure vibratoire globale et reconnaître les signatures des défauts courants.",
      "Exploiter une thermographie infrarouge et une analyse d'huile.",
      "Définir des seuils et organiser une tournée de surveillance."
     ],
     "sections": [
      {
       "titre": "Surveiller pour intervenir au bon moment",
       "contenu": "\n<p>La maintenance préventive <strong>systématique</strong> remplace un composant à intervalle fixe, qu'il soit usé ou non. Elle est simple à organiser mais peut changer des pièces encore bonnes ou laisser casser une pièce qui s'use plus vite que prévu. La maintenance préventive <strong>conditionnelle</strong> déclenche l'intervention lorsqu'un <strong>paramètre surveillé</strong> révèle une dégradation. La maintenance <strong>prévisionnelle</strong> va plus loin : elle extrapole l'évolution du paramètre pour estimer le temps restant avant la défaillance.</p>\n<p>Ces deux dernières formes reposent sur un constat : beaucoup de défaillances ne sont pas soudaines. Elles sont précédées d'une période de dégradation progressive. On la représente par la <strong>courbe P-F</strong> :</p>\n<ul>\n<li>le point <strong>P</strong> (défaillance potentielle) est l'instant où la dégradation devient détectable par une technique de mesure ;</li>\n<li>le point <strong>F</strong> (défaillance fonctionnelle) est l'instant où le composant ne remplit plus sa fonction ;</li>\n<li>l'<strong>intervalle P-F</strong> est le délai disponible pour planifier et réaliser l'intervention.</li>\n</ul>\n<p>Pour un roulement, la dégradation se détecte d'abord par l'analyse vibratoire ou les ultrasons, plusieurs semaines voire plusieurs mois avant la défaillance, puis par un échauffement mesurable, ensuite par un bruit audible, enfin par la fumée et le blocage. Plus la technique est fine, plus elle détecte tôt et plus l'intervalle P-F est long.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la périodicité des mesures doit être nettement plus courte que l'intervalle P-F, sinon la dégradation peut passer entre deux mesures. Une règle pratique consiste à mesurer au moins deux fois dans cet intervalle.</div>"
      },
      {
       "titre": "Choisir la technique de surveillance",
       "contenu": "\n<p>Chaque technique est adaptée à certains modes de défaillance. Le choix découle de l'AMDEC de l'équipement et de la criticité de ses composants.</p>\n<table>\n<thead><tr><th>Technique</th><th>Grandeur mesurée</th><th>Défauts détectés</th><th>Équipements types</th></tr></thead>\n<tbody>\n<tr><td>Analyse vibratoire</td><td>Vitesse, accélération ou déplacement vibratoire</td><td>Balourd, désalignement, desserrage, défauts de roulements et d'engrenages</td><td>Moteurs, pompes, ventilateurs, réducteurs</td></tr>\n<tr><td>Thermographie infrarouge</td><td>Température de surface</td><td>Connexions desserrées, surcharges, déséquilibres, échauffements de paliers, défauts d'isolation thermique</td><td>Armoires électriques, moteurs, fours</td></tr>\n<tr><td>Analyse d'huile</td><td>Particules, eau, viscosité, acidité, métaux d'usure</td><td>Pollution, usure interne, dégradation du lubrifiant</td><td>Centrales hydrauliques, réducteurs, compresseurs</td></tr>\n<tr><td>Ultrasons</td><td>Émissions ultrasonores</td><td>Fuites d'air, défauts de lubrification de roulements, arcs électriques, purgeurs</td><td>Réseaux d'air, paliers lents, purgeurs vapeur</td></tr>\n<tr><td>Mesures électriques</td><td>Courant, isolement, puissance</td><td>Surcharge mécanique, dégradation d'isolant, défauts de rotor</td><td>Moteurs, câbles</td></tr>\n<tr><td>Contrôles dimensionnels et visuels</td><td>Épaisseur, jeu, allongement, aspect</td><td>Usure de courroies, allongement de chaînes, corrosion</td><td>Transmissions, structures</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les mesures de surveillance sont souvent confiées à un prestataire spécialisé pour l'analyse fine, tandis que le technicien de l'usine réalise des <strong>tournées</strong> avec un collecteur de données portable ou consulte des capteurs fixes connectés. L'important est la régularité : une même mesure, au même point, dans les mêmes conditions de fonctionnement.</div>"
      },
      {
       "titre": "L'analyse vibratoire",
       "contenu": "\n<p>Une machine tournante vibre toujours un peu. Ce qui intéresse le technicien, c'est le <strong>niveau</strong> de vibration et son <strong>évolution</strong>. Les mesures se font sur les paliers, dans trois directions : horizontale, verticale et axiale. Les points de mesure sont repérés (pastille collée) pour que chaque mesure soit faite exactement au même endroit.</p>\n<p>La <strong>mesure globale</strong> la plus courante est la <strong>vitesse vibratoire efficace</strong>, exprimée en mm/s, sur une bande de fréquences normalisée. La série de normes ISO 20816 (qui remplace l'ancienne ISO 10816) classe les niveaux en quatre zones : <strong>A</strong> (machine neuve ou en très bon état), <strong>B</strong> (acceptable sans restriction), <strong>C</strong> (insatisfaisant pour un fonctionnement prolongé, intervention à planifier), <strong>D</strong> (risque de dommage). Les valeurs limites dépendent de la puissance de la machine et de la rigidité de son support ; elles sont lues dans la norme ou fournies par le constructeur.</p>\n<p>L'<strong>analyse spectrale</strong> décompose la vibration en fréquences. Elle permet de reconnaître l'origine du défaut, car chaque défaut a sa signature. On exprime les fréquences en multiples de la fréquence de rotation (notée 1×) :</p>\n<table>\n<thead><tr><th>Défaut</th><th>Signature typique</th></tr></thead>\n<tbody>\n<tr><td>Balourd</td><td>Pic dominant à 1× en direction radiale</td></tr>\n<tr><td>Désalignement</td><td>Pics à 1× et 2×, composante axiale importante</td></tr>\n<tr><td>Desserrage, jeu</td><td>Nombreux harmoniques (1×, 2×, 3×…)</td></tr>\n<tr><td>Défaut de roulement</td><td>Fréquences non multiples entières de la rotation, calculées à partir de la géométrie du roulement (bague extérieure, bague intérieure, billes, cage) ; montée de l'accélération haute fréquence</td></tr>\n<tr><td>Défaut d'engrenage</td><td>Fréquence d'engrènement (nombre de dents × fréquence de rotation) et bandes latérales</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un suivi vibratoire. Un motoventilateur tourne à 1 470 tr/min, soit une fréquence de rotation de 1 470 ÷ 60 = 24,5 Hz. Les seuils fixés par le service sont 4,5 mm/s (alerte) et 7,1 mm/s (danger). Relevés mensuels sur le palier côté ventilateur, direction horizontale : 2,1 ; 2,3 ; 2,2 ; 3,4 ; 4,9 mm/s. 1) Constater la tendance : stable pendant trois mois puis forte hausse. 2) Comparer aux seuils : le seuil d'alerte est franchi. 3) Lire le spectre : pic dominant à 24,5 Hz en radial, peu de composante axiale. 4) Conclure à un balourd probable (encrassement ou perte d'une masse sur la roue du ventilateur). 5) Planifier le nettoyage et l'équilibrage lors du prochain arrêt, avec une mesure de contrôle après intervention. 6) Si le seuil de danger est atteint avant, arrêter la machine.</div>"
      },
      {
       "titre": "Thermographie infrarouge et analyse d'huile",
       "contenu": "\n<p>La <strong>caméra thermique</strong> mesure le rayonnement infrarouge émis par les surfaces et le traduit en image de températures. Elle permet d'inspecter une armoire électrique en charge sans contact. Un point chaud sur une connexion révèle un serrage insuffisant ou une oxydation : la résistance de contact augmente, donc l'échauffement par effet Joule. L'interprétation se fait le plus souvent par comparaison : écart de température entre les trois phases d'un même départ, ou entre un composant et ses voisins identiques.</p>\n<p>Deux précautions conditionnent une mesure juste :</p>\n<ul>\n<li>l'<strong>émissivité</strong> de la surface, qui doit être réglée sur la caméra : les métaux brillants (cuivre poli, aluminium) réfléchissent l'environnement et faussent la mesure ;</li>\n<li>la <strong>charge</strong> de l'installation, qui doit être suffisante (de l'ordre de la moitié de la charge nominale au moins) pour que les défauts s'échauffent.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une thermographie d'armoire se fait porte ouverte, sous tension et en charge. Elle exige l'habilitation adaptée, le respect des distances au voisinage des pièces nues et le port des EPI. Le thermographe ne touche à rien : il observe, enregistre et signale. Le resserrage se fait ensuite, installation consignée.</div>\n<p>L'<strong>analyse d'huile</strong> consiste à prélever un échantillon, toujours au même point et dans les mêmes conditions (machine en fonctionnement ou juste arrêtée, huile chaude et homogène), et à l'envoyer à un laboratoire. Le rapport indique :</p>\n<ul>\n<li>la <strong>viscosité</strong>, comparée à la valeur neuve ;</li>\n<li>la <strong>teneur en eau</strong> ;</li>\n<li>l'<strong>indice d'acidité</strong>, qui traduit l'oxydation de l'huile ;</li>\n<li>la teneur en <strong>métaux d'usure</strong> (fer, cuivre, étain…), qui indique quel composant s'use ;</li>\n<li>la <strong>propreté</strong>, exprimée en hydraulique par le code ISO 4406, trois nombres qui classent la quantité de particules supérieures à 4, 6 et 14 micromètres par millilitre. Plus les nombres sont élevés, plus l'huile est polluée. Un code relevé de 21/19/16 pour un objectif de 17/15/12 signale une pollution excessive à traiter (filtration, recherche de l'entrée de pollution).</li>\n</ul>"
      },
      {
       "titre": "Seuils, décision et intégration à la GMAO",
       "contenu": "\n<p>Une surveillance utile repose sur des <strong>seuils</strong> clairement définis pour chaque paramètre :</p>\n<ul>\n<li>le <strong>seuil d'alerte</strong> déclenche une analyse approfondie et la planification d'une intervention ;</li>\n<li>le <strong>seuil d'alarme</strong> ou de danger impose une intervention rapide, voire l'arrêt de l'équipement.</li>\n</ul>\n<p>Les seuils proviennent des normes, des recommandations du constructeur ou de l'historique de la machine : une valeur de référence est relevée à l'état sain (après installation ou révision), puis les seuils sont fixés par rapport à cette référence.</p>\n<p>Le résultat d'une tournée est saisi dans la GMAO, qui trace les courbes de tendance et génère automatiquement une demande d'intervention en cas de dépassement. Avec les capteurs connectés (accéléromètres sans fil, sondes de température IO-Link), la surveillance devient <strong>continue</strong> et l'alerte arrive en temps réel.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> organiser la surveillance d'un parc de pompes. 1) À partir de la criticité, retenir les équipements à surveiller. 2) Pour chacun, choisir les techniques selon les modes de défaillance de l'AMDEC (vibrations pour les roulements, thermographie pour l'armoire, analyse d'huile pour le réducteur). 3) Définir et repérer les points de mesure. 4) Relever une référence à l'état sain et fixer les seuils. 5) Fixer la périodicité en fonction de l'intervalle P-F. 6) Créer la gamme de tournée dans la GMAO. 7) Après chaque intervention déclenchée, mesurer à nouveau pour vérifier le retour à l'état normal.</div>\n<p>Le bilan économique se fait en comparant le coût de la surveillance (appareils, prestataire, temps passé) aux coûts évités : pannes graves, arrêts de production, pièces secondaires détruites. La surveillance est rentable sur les équipements critiques et coûteux ; elle ne l'est généralement pas sur un petit moteur bon marché, facilement remplaçable et non critique.</p>"
      }
     ],
     "points_cles": [
      "La maintenance conditionnelle intervient sur constat d'une dégradation mesurée ; la prévisionnelle extrapole le temps restant.",
      "La courbe P-F montre le délai entre la détection d'une dégradation et la défaillance fonctionnelle.",
      "La périodicité des mesures doit être nettement plus courte que l'intervalle P-F.",
      "La technique se choisit selon le mode de défaillance : vibrations, thermographie, huile, ultrasons, mesures électriques.",
      "Vitesse vibratoire efficace en mm/s, zones A à D de l'ISO 20816 ; balourd à 1×, désalignement à 1× et 2× avec axial.",
      "La thermographie exige le bon réglage d'émissivité, une charge suffisante et une habilitation adaptée.",
      "Le code ISO 4406 exprime la propreté d'une huile hydraulique par trois classes de particules.",
      "Seuils d'alerte et d'alarme, valeur de référence et suivi de tendance dans la GMAO structurent la décision."
     ],
     "lexique": [
      {
       "terme": "Maintenance conditionnelle",
       "def": "Maintenance préventive déclenchée par la surveillance d'un paramètre révélateur de dégradation."
      },
      {
       "terme": "Maintenance prévisionnelle",
       "def": "Maintenance conditionnelle exécutée en suivant une prévision extrapolée de l'évolution de la dégradation."
      },
      {
       "terme": "Intervalle P-F",
       "def": "Temps entre la détection possible d'une dégradation et la défaillance fonctionnelle."
      },
      {
       "terme": "Vitesse vibratoire efficace",
       "def": "Valeur globale de la vibration, exprimée en mm/s, utilisée pour juger l'état d'une machine tournante."
      },
      {
       "terme": "Spectre",
       "def": "Représentation d'une vibration en fonction de la fréquence, qui permet d'identifier l'origine d'un défaut."
      },
      {
       "terme": "Balourd",
       "def": "Répartition inégale de la masse d'un rotor autour de son axe, source de vibration à la fréquence de rotation."
      },
      {
       "terme": "Émissivité",
       "def": "Aptitude d'une surface à émettre un rayonnement infrarouge, à régler sur la caméra thermique."
      },
      {
       "terme": "Code ISO 4406",
       "def": "Codification de la propreté d'un fluide selon le nombre de particules de plus de 4, 6 et 14 µm par millilitre."
      },
      {
       "terme": "Seuil d'alerte",
       "def": "Valeur d'un paramètre surveillé à partir de laquelle une intervention doit être planifiée."
      }
     ]
    },
    {
     "id": "bmspc-securite-machines",
     "titre": "Sécurité des machines et fonctions de sécurité",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Situer les obligations réglementaires applicables aux machines neuves et aux machines en service.",
      "Appliquer la démarche d'appréciation du risque et la hiérarchie des mesures de prévention.",
      "Identifier les dispositifs de protection d'une machine et leur principe de fonctionnement.",
      "Distinguer les catégories d'arrêt et décrire une chaîne de sécurité câblée avec module de sécurité.",
      "Intervenir sur un dispositif de sécurité sans dégrader le niveau de protection."
     ],
     "sections": [
      {
       "titre": "Le cadre réglementaire",
       "contenu": "\n<p>Les machines sont à l'origine d'accidents du travail graves : écrasement, cisaillement, happement, coupure. La réglementation distingue deux situations.</p>\n<ul>\n<li>Les <strong>machines neuves</strong> mises sur le marché européen doivent satisfaire aux exigences essentielles de santé et de sécurité de la <strong>directive 2006/42/CE</strong>, dite directive Machines, transposée dans le Code du travail. Le fabricant réalise l'appréciation des risques, constitue un dossier technique, établit la <strong>déclaration CE de conformité</strong>, appose le <strong>marquage CE</strong> et fournit une <strong>notice d'instructions</strong>. Le <strong>règlement (UE) 2023/1230</strong> remplacera cette directive ; il s'appliquera à partir du 20 janvier 2027 et renforce notamment les exigences liées aux logiciels de sécurité et à la cybersécurité.</li>\n<li>Les <strong>machines en service</strong> doivent être maintenues en état de conformité par l'employeur. Le Code du travail impose des règles techniques pour les équipements en service et des <strong>vérifications périodiques</strong> pour certains équipements (appareils de levage, presses, par exemple).</li>\n</ul>\n<p>Pour le technicien de maintenance, cela a une conséquence directe : <strong>une intervention ne doit jamais dégrader la conformité</strong> de la machine. Une modification importante (ajout d'une fonction, changement de performances, modification du système de commande de sécurité) peut même conduire à considérer la machine comme une machine nouvelle, avec toutes les obligations qui en découlent.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'employeur est responsable du maintien en conformité des machines en service. La maintenance en est l'instrument : réparer à l'identique, remettre les protecteurs, vérifier les fonctions de sécurité après chaque intervention, signaler toute non-conformité constatée.</div>"
      },
      {
       "titre": "Appréciation du risque et hiérarchie des mesures",
       "contenu": "\n<p>La norme <strong>NF EN ISO 12100</strong> décrit la démarche d'appréciation et de réduction du risque, applicable par le concepteur mais aussi utile lors d'une modification. Elle comprend : la détermination des limites de la machine (usages, phases de vie dont la maintenance), l'identification des <strong>phénomènes dangereux</strong>, l'estimation du risque (gravité du dommage, fréquence d'exposition, probabilité de l'événement, possibilité d'éviter le dommage), puis son évaluation.</p>\n<p>La réduction du risque suit une <strong>hiérarchie en trois étapes</strong>, à appliquer dans l'ordre :</p>\n<ol>\n<li><strong>prévention intrinsèque</strong> : supprimer le danger à la conception (réduire les efforts et vitesses, éloigner les pièces mobiles, supprimer les points de coincement, placer les points de graissage hors zone dangereuse) ;</li>\n<li><strong>protection</strong> : protecteurs et dispositifs de protection lorsque le danger ne peut pas être supprimé ;</li>\n<li><strong>informations pour l'utilisation</strong> : signalisation, pictogrammes, notice, formation, EPI.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lorsqu'une intervention de maintenance oblige à entrer souvent dans une zone protégée (réglage, nettoyage), le service maintenance peut proposer une amélioration de prévention intrinsèque : déporter un point de graissage, ajouter un regard transparent pour contrôler sans ouvrir, installer un mode de marche à vitesse réduite sous commande maintenue. C'est souvent plus efficace qu'une consigne supplémentaire.</div>"
      },
      {
       "titre": "Protecteurs et dispositifs de protection",
       "contenu": "\n<p>On distingue les <strong>protecteurs</strong>, barrières matérielles, et les <strong>dispositifs de protection</strong>, qui détectent une personne ou commandent un arrêt.</p>\n<table>\n<thead><tr><th>Moyen</th><th>Principe</th><th>Points de maintenance</th></tr></thead>\n<tbody>\n<tr><td>Protecteur fixe</td><td>Carter ou grillage démontable uniquement avec un outil</td><td>Remonter toutes les fixations ; respecter les distances de sécurité de la NF EN ISO 13857 (taille des mailles selon la distance à la zone dangereuse)</td></tr>\n<tr><td>Protecteur mobile interverrouillé</td><td>Porte associée à un interrupteur de sécurité : l'ouverture provoque l'arrêt</td><td>Interrupteur à action mécanique positive ou codé, alignement de la languette, fixation inviolable</td></tr>\n<tr><td>Protecteur avec interverrouillage et blocage</td><td>Porte maintenue verrouillée tant que le mouvement dangereux n'est pas arrêté</td><td>Temporisation ou contrôle d'arrêt, déverrouillage de secours</td></tr>\n<tr><td>Barrage immatériel</td><td>Rideau de faisceaux infrarouges ; la coupure provoque l'arrêt</td><td>Distance de sécurité calculée selon la NF EN ISO 13855, propreté des optiques, test périodique avec la tige d'essai</td></tr>\n<tr><td>Tapis sensible, scrutateur laser</td><td>Détection d'une personne dans une zone</td><td>Zones de détection paramétrées, ne pas modifier sans autorisation</td></tr>\n<tr><td>Commande bimanuelle</td><td>Les deux mains sont occupées pendant le mouvement dangereux</td><td>Simultanéité des appuis, distance par rapport à la zone</td></tr>\n<tr><td>Dispositif de validation</td><td>Commande à trois positions tenue en main pour les marches de réglage</td><td>La position centrale seule valide le mouvement</td></tr>\n</tbody>\n</table>\n<p>La <strong>distance de sécurité</strong> d'un barrage immatériel ou d'une commande bimanuelle tient compte du <strong>temps d'arrêt</strong> total de la machine : une personne qui approche à vitesse normale ne doit pas pouvoir atteindre la zone dangereuse avant l'arrêt du mouvement. Si le temps d'arrêt s'allonge (frein usé, variateur mal paramétré), la protection n'est plus efficace même si elle « fonctionne ».</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> neutraliser un interrupteur de sécurité (languette de rechange collée dans l'interrupteur, pont dans l'armoire) est interdit et constitue une faute grave. C'est pourtant une cause fréquente d'accidents. Si un dispositif gêne réellement l'exploitation ou la maintenance, le problème doit être remonté pour trouver une solution conforme.</div>"
      },
      {
       "titre": "Arrêts, arrêt d'urgence et chaîne de sécurité",
       "contenu": "\n<p>La norme <strong>NF EN 60204-1</strong> (équipement électrique des machines) définit trois <strong>catégories d'arrêt</strong> :</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Principe</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>0</td><td>Arrêt par suppression immédiate de l'énergie des actionneurs (arrêt non contrôlé)</td><td>Ouverture du contacteur d'alimentation du moteur, le moteur s'arrête en roue libre ou sur frein</td></tr>\n<tr><td>1</td><td>Arrêt contrôlé : les actionneurs restent alimentés pour freiner, puis l'énergie est coupée une fois l'arrêt obtenu</td><td>Décélération par le variateur sur une rampe, puis coupure</td></tr>\n<tr><td>2</td><td>Arrêt contrôlé, l'énergie restant appliquée aux actionneurs</td><td>Axe maintenu en position par le variateur</td></tr>\n</tbody>\n</table>\n<p>L'<strong>arrêt d'urgence</strong> (NF EN ISO 13850) est une mesure de protection complémentaire, pas une protection principale. Il doit fonctionner en catégorie 0 ou 1, être de couleur rouge sur fond jaune, à accrochage mécanique, et son réarmement ne doit pas redémarrer la machine : un ordre de remise en marche distinct est nécessaire.</p>\n<p>Les fonctions de sécurité (arrêt d'urgence, surveillance des protecteurs) sont traitées par des composants spécifiques : <strong>module de sécurité</strong> (relais de sécurité), automate de sécurité ou fonctions de sécurité intégrées aux variateurs (par exemple la fonction <strong>STO</strong>, suppression sûre du couple). Leur fiabilité s'exprime par un <strong>niveau de performance</strong> PL, de a (le plus faible) à e (le plus élevé), selon la <strong>NF EN ISO 13849-1</strong>, ou par un niveau SIL selon la NF EN 62061. Le niveau requis découle de l'appréciation du risque.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire une chaîne d'arrêt d'urgence câblée. Sur le schéma, repérer : 1) les boutons d'arrêt d'urgence, à deux contacts à ouverture câblés en série sur deux canaux distincts du module de sécurité (redondance) ; 2) le bouton de réarmement, câblé sur l'entrée de démarrage surveillé ; 3) les deux contacteurs de puissance KM1 et KM2 en série sur l'alimentation du moteur, commandés par les sorties de sécurité ; 4) la boucle de retour, où les contacts auxiliaires à ouverture de KM1 et KM2 (contacts liés mécaniquement aux contacts principaux) sont câblés en série vers l'entrée de contrôle du module. Conclusion : si un contacteur reste collé, sa boucle de retour reste ouverte et le module refuse le réarmement. La redondance et la surveillance détectent la défaillance au lieu de la masquer.</div>"
      },
      {
       "titre": "Intervenir sur une fonction de sécurité",
       "contenu": "\n<p>Toute intervention touchant un composant de sécurité suit des règles strictes :</p>\n<ul>\n<li>remplacer <strong>à l'identique</strong> (même référence ou équivalent explicitement validé par le fabricant de la machine), car le niveau de performance dépend de chaque composant ;</li>\n<li>respecter le câblage d'origine, en particulier la séparation des deux canaux et la boucle de retour ;</li>\n<li>ne pas modifier les paramètres d'un automate de sécurité ou d'un scrutateur laser sans autorisation, mot de passe et procédure de validation ;</li>\n<li><strong>tester la fonction</strong> après intervention : ouverture de chaque porte, action sur chaque arrêt d'urgence, coupure du barrage immatériel en plusieurs points, vérification qu'un réarmement seul ne redémarre pas la machine ;</li>\n<li>consigner l'essai dans le bon de travail ou le registre de la machine.</li>\n</ul>\n<p>Les dispositifs de sécurité font aussi l'objet d'un <strong>préventif</strong> : test périodique des arrêts d'urgence, contrôle des interrupteurs de porte, nettoyage des barrages immatériels, mesure du temps d'arrêt des machines dangereuses comme les presses.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les marches de maintenance et de réglage (vitesse réduite, commande maintenue, dispositif de validation) existent pour intervenir en sécurité lorsqu'un mouvement est indispensable. Elles ne remplacent pas la consignation lorsque l'intervention peut se faire machine à l'arrêt.</div>"
      }
     ],
     "points_cles": [
      "Machines neuves : directive 2006/42/CE, marquage CE, déclaration de conformité, notice ; règlement (UE) 2023/1230 à partir du 20 janvier 2027.",
      "Machines en service : l'employeur maintient la conformité ; la maintenance ne doit jamais la dégrader.",
      "Hiérarchie : prévention intrinsèque, puis protection, puis informations pour l'utilisation.",
      "Protecteurs fixes, mobiles interverrouillés, barrages immatériels, commandes bimanuelles : chacun a ses points de contrôle.",
      "La distance de sécurité dépend du temps d'arrêt de la machine.",
      "Catégories d'arrêt 0, 1 et 2 selon la NF EN 60204-1 ; l'arrêt d'urgence est en catégorie 0 ou 1.",
      "Redondance et boucle de retour permettent au module de sécurité de détecter un contacteur collé.",
      "Après toute intervention sur une sécurité : remplacement à l'identique, essai fonctionnel, traçabilité."
     ],
     "lexique": [
      {
       "terme": "Marquage CE",
       "def": "Marquage par lequel le fabricant atteste la conformité d'une machine aux exigences européennes applicables."
      },
      {
       "terme": "Appréciation du risque",
       "def": "Démarche d'identification des phénomènes dangereux, d'estimation et d'évaluation des risques."
      },
      {
       "terme": "Prévention intrinsèque",
       "def": "Suppression ou réduction d'un danger par la conception même de la machine."
      },
      {
       "terme": "Protecteur interverrouillé",
       "def": "Protecteur mobile associé à un dispositif qui empêche le fonctionnement dangereux lorsqu'il est ouvert."
      },
      {
       "terme": "Barrage immatériel",
       "def": "Dispositif optoélectronique qui détecte l'intrusion d'une personne dans une zone et commande l'arrêt."
      },
      {
       "terme": "Catégorie d'arrêt",
       "def": "Classement des modes d'arrêt d'une machine selon la manière dont l'énergie est coupée."
      },
      {
       "terme": "Module de sécurité",
       "def": "Relais spécifique qui surveille une fonction de sécurité avec redondance et autocontrôle."
      },
      {
       "terme": "PL",
       "def": "Niveau de performance d'une fonction de sécurité, de a à e, selon la NF EN ISO 13849-1."
      },
      {
       "terme": "STO",
       "def": "Fonction de sécurité d'un variateur qui supprime de façon sûre le couple du moteur."
      }
     ]
    },
    {
     "id": "bmspc-qse-maintenance",
     "titre": "Qualité, environnement et énergie dans les activités de maintenance",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Garantir la qualité d'une intervention par l'autocontrôle, la traçabilité et des instruments de mesure maîtrisés.",
      "Identifier les risques chimiques des produits de maintenance à partir de leur étiquette et de leur fiche de données de sécurité.",
      "Trier, stocker et faire éliminer les déchets produits par la maintenance selon la réglementation.",
      "Proposer des actions de maintenance qui améliorent l'efficacité énergétique d'une installation.",
      "Situer son action dans les systèmes de management qualité, environnement, sécurité et énergie de l'entreprise."
     ],
     "sections": [
      {
       "titre": "Les systèmes de management et la place de la maintenance",
       "contenu": "\n<p>Le cours de seconde a présenté la qualité et l'amélioration continue du point de vue de la production. La maintenance y participe directement : une machine mal réglée produit des rebuts, une fuite d'huile pollue, un moteur mal entretenu gaspille de l'énergie. Beaucoup d'entreprises organisent ces exigences dans des <strong>systèmes de management</strong> certifiés, regroupés sous le sigle <strong>QSE</strong> (qualité, sécurité, environnement), auquel s'ajoute souvent l'énergie.</p>\n<table>\n<thead><tr><th>Norme</th><th>Domaine</th><th>Exemples d'exigences touchant la maintenance</th></tr></thead>\n<tbody>\n<tr><td>ISO 9001</td><td>Management de la qualité</td><td>Maîtrise des équipements de production, des instruments de mesure, traçabilité des interventions</td></tr>\n<tr><td>ISO 14001</td><td>Management environnemental</td><td>Gestion des déchets, prévention des pollutions accidentelles, consommation de ressources</td></tr>\n<tr><td>ISO 45001</td><td>Santé et sécurité au travail</td><td>Procédures de consignation, analyse des risques des interventions, maîtrise des entreprises extérieures</td></tr>\n<tr><td>ISO 50001</td><td>Management de l'énergie</td><td>Suivi des usages énergétiques significatifs, actions d'économie, maintenance des équipements énergivores</td></tr>\n</tbody>\n</table>\n<p>Tous ces systèmes reposent sur la même logique d'amélioration continue (planifier, réaliser, vérifier, agir) et sur des <strong>audits</strong> réguliers. Lors d'un audit, l'auditeur peut demander au technicien de montrer une procédure, un enregistrement d'intervention ou le certificat d'étalonnage d'un appareil de mesure.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans un système de management, ce qui n'est pas écrit n'est pas prouvé. Le bon de travail correctement rempli, la fiche de consignation signée et l'enregistrement dans la GMAO sont les preuves que l'intervention a été réalisée selon les règles.</div>"
      },
      {
       "titre": "La qualité de l'intervention",
       "contenu": "\n<p>La qualité d'une intervention de maintenance se juge à trois critères : l'équipement retrouve ses performances, la panne ne revient pas pour la même cause, et l'intervention n'a créé aucun nouveau problème (pièce oubliée, fuite, réglage perdu, protecteur non remonté).</p>\n<p>Plusieurs pratiques la garantissent :</p>\n<ul>\n<li>l'<strong>autocontrôle</strong> : le technicien vérifie lui-même son travail à l'aide d'une liste de points (serrages, raccordements, niveaux, sens de rotation, sécurités) avant de restituer la machine ;</li>\n<li>l'<strong>essai de requalification</strong> : production de quelques pièces ou cycles sous la surveillance de la production, contrôle des caractéristiques du produit ;</li>\n<li>la <strong>traçabilité</strong> : enregistrement des pièces montées (référence, numéro de lot ou de série si demandé), des réglages et des valeurs mesurées ;</li>\n<li>l'utilisation de <strong>pièces d'origine ou équivalentes validées</strong>, stockées dans de bonnes conditions (roulements dans leur emballage, joints à l'abri de la lumière et de la chaleur, dates de péremption pour certains produits).</li>\n</ul>\n<p>Les <strong>instruments de mesure</strong> utilisés pour régler une machine ou contrôler un produit doivent être maîtrisés : identifiés, <strong>étalonnés</strong> ou vérifiés périodiquement par rapport à un étalon, et leur état visible (étiquette de validité). Une clé dynamométrique, un manomètre de référence, un micromètre ou un multimètre utilisé pour un contrôle qualité sont concernés.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> régler une machine avec un manomètre ou une clé dynamométrique dont l'étalonnage est périmé peut conduire à des réglages faux sans que personne ne s'en aperçoive. Vérifiez l'étiquette de validité avant usage et signalez tout instrument tombé ou suspect.</div>"
      },
      {
       "titre": "Produits chimiques de maintenance",
       "contenu": "\n<p>La maintenance utilise de nombreux produits : huiles, graisses, dégraissants, solvants, colles, frein-filets, aérosols, produits de nettoyage de contacts. Beaucoup sont classés dangereux selon le <strong>règlement CLP</strong>, qui impose un étiquetage harmonisé :</p>\n<ul>\n<li>des <strong>pictogrammes</strong> de danger (losange à bord rouge sur fond blanc : flamme, point d'exclamation, danger pour la santé, corrosion, environnement…) ;</li>\n<li>une <strong>mention d'avertissement</strong> : « Danger » ou « Attention » ;</li>\n<li>des <strong>mentions de danger</strong> (codes H, par exemple H225 : liquide et vapeurs très inflammables) et des <strong>conseils de prudence</strong> (codes P).</li>\n</ul>\n<p>La <strong>fiche de données de sécurité</strong> (FDS), fournie par le fabricant, comporte seize rubriques. Pour le technicien, les plus utiles sont : identification des dangers (rubrique 2), premiers secours (4), mesures de lutte contre l'incendie (5), mesures en cas de dispersion accidentelle (6), manipulation et stockage (7), contrôle de l'exposition et protection individuelle (8), et considérations relatives à l'élimination (13).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le dégraissage des pièces mécaniques se faisait autrefois avec des solvants très volatils et nocifs. Il est de plus en plus remplacé par des fontaines de dégraissage biologiques ou lessivielles, moins dangereuses pour la santé et l'environnement. Le technicien participe à ce choix en signalant les produits qu'il utilise et leurs inconvénients.</div>"
      },
      {
       "titre": "Les déchets de maintenance",
       "contenu": "\n<p>La maintenance produit des déchets variés. Le Code de l'environnement rend leur <strong>producteur</strong> (l'entreprise) responsable de leur gestion jusqu'à leur élimination ou leur valorisation finale. Le tri à la source est donc indispensable.</p>\n<table>\n<thead><tr><th>Déchet</th><th>Catégorie</th><th>Gestion</th></tr></thead>\n<tbody>\n<tr><td>Huiles usagées (hydraulique, réducteurs, compresseurs)</td><td>Déchet dangereux</td><td>Rejet dans le milieu naturel ou les égouts interdit ; stockage en fûts ou cuves sur rétention, sans mélange avec d'autres produits ; enlèvement par un collecteur agréé</td></tr>\n<tr><td>Chiffons, absorbants et filtres souillés d'huile</td><td>Déchets dangereux</td><td>Conteneur fermé dédié, filière spécialisée</td></tr>\n<tr><td>Aérosols, pots de colle et solvants</td><td>Déchets dangereux</td><td>Collecte séparée</td></tr>\n<tr><td>Composants électriques et électroniques (variateurs, automates, capteurs)</td><td>DEEE</td><td>Filière de collecte des équipements électriques et électroniques</td></tr>\n<tr><td>Piles et batteries</td><td>Déchets dangereux, filière dédiée</td><td>Bac de collecte spécifique</td></tr>\n<tr><td>Ferraille, roulements, pièces mécaniques</td><td>Déchets non dangereux (si propres)</td><td>Benne métaux, valorisation</td></tr>\n<tr><td>Emballages carton, bois, plastique</td><td>Déchets non dangereux</td><td>Tri par matière, valorisation</td></tr>\n</tbody>\n</table>\n<p>L'enlèvement des déchets dangereux est accompagné d'un <strong>bordereau de suivi des déchets</strong> (BSD), aujourd'hui dématérialisé sur la plateforme nationale <strong>Trackdéchets</strong>. Il trace le déchet du producteur à l'installation de traitement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> organiser la vidange d'une centrale hydraulique de 400 L. 1) Consulter la FDS de l'huile et préparer les EPI (gants nitrile, lunettes). 2) Préparer un bac de rétention de capacité suffisante et des absorbants à portée de main. 3) Consigner la centrale, attendre que l'huile refroidisse sous 40 °C environ. 4) Pomper l'huile vers des fûts identifiés « huiles usagées », sans y mélanger solvant ou eau. 5) Déposer et mettre à part les cartouches filtrantes usagées dans le conteneur des filtres souillés. 6) Nettoyer le réservoir, remplir avec l'huile neuve prescrite en passant par un groupe de filtration. 7) Faire enlever les fûts par le collecteur agréé, avec bordereau. 8) Enregistrer dans la GMAO la quantité d'huile remplacée.</div>\n<p>En cas de <strong>déversement accidentel</strong>, on applique la conduite indiquée par la FDS : contenir la fuite, protéger les regards d'évacuation des eaux, absorber, ramasser les absorbants souillés comme déchets dangereux et prévenir le responsable environnement.</p>"
      },
      {
       "titre": "Maintenance et efficacité énergétique",
       "contenu": "\n<p>L'énergie est un poste de coût important pour une usine, et la maintenance influe directement sur la consommation. Une installation mal entretenue consomme plus pour produire autant.</p>\n<ul>\n<li><strong>Air comprimé</strong> : les fuites, la pression de réseau réglée trop haut et les filtres colmatés font fonctionner les compresseurs plus longtemps.</li>\n<li><strong>Moteurs</strong> : le règlement européen (UE) 2019/1781 fixe des niveaux minimaux de rendement pour les moteurs mis sur le marché, en général la classe <strong>IE3</strong> et, pour certaines puissances, IE4. Lors du remplacement d'un vieux moteur, un modèle à haut rendement associé à un variateur de vitesse peut réduire fortement la consommation des pompes et des ventilateurs.</li>\n<li><strong>Transmissions</strong> : une courroie qui patine, un réducteur mal lubrifié ou un désalignement augmentent les pertes.</li>\n<li><strong>Thermique</strong> : calorifuges dégradés, purgeurs de vapeur bloqués ouverts, échangeurs encrassés.</li>\n<li><strong>Hydraulique</strong> : pompe à débit fixe qui tourne en permanence et lamine l'huile dans le limiteur de pression, ce qui chauffe l'huile et gaspille l'énergie.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer le coût d'une fuite d'air. Un compresseur produit 1 m³ d'air libre (à pression atmosphérique) en consommant environ 0,1 kWh d'électricité, ordre de grandeur courant à 7 bar. Une fuite mesurée à 300 NL/min fonctionne 8 000 heures par an. Volume perdu : 0,3 m³/min × 60 × 8 000 = 144 000 m³ par an. Énergie : 144 000 × 0,1 = 14 400 kWh. Avec un prix de l'électricité de 0,15 € par kWh (à adapter au contrat de l'entreprise), le coût annuel est d'environ 2 160 €, pour une réparation qui coûte souvent un raccord et une demi-heure de travail.</div>\n<p>Dans une entreprise engagée dans une démarche ISO 50001, la maintenance participe au suivi des <strong>usages énergétiques significatifs</strong> à l'aide de compteurs connectés et propose des actions d'amélioration chiffrées.</p>"
      }
     ],
     "points_cles": [
      "ISO 9001, 14001, 45001 et 50001 encadrent qualité, environnement, santé-sécurité et énergie ; la maintenance y contribue directement.",
      "Une intervention de qualité rend les performances, supprime la cause et ne crée pas de nouveau problème.",
      "Autocontrôle, essai de requalification et traçabilité prouvent la qualité de l'intervention.",
      "Les instruments de mesure utilisés pour régler ou contrôler doivent être étalonnés et identifiés.",
      "Étiquette CLP et FDS en seize rubriques renseignent sur les dangers et les protections des produits.",
      "Huiles usagées, filtres et chiffons souillés sont des déchets dangereux : tri, rétention, collecteur agréé, bordereau Trackdéchets.",
      "Fuites d'air, moteurs peu performants, transmissions mal entretenues et pertes thermiques gaspillent l'énergie.",
      "Une action d'économie d'énergie se chiffre : volume ou puissance perdus, durée, prix de l'énergie."
     ],
     "lexique": [
      {
       "terme": "QSE",
       "def": "Qualité, sécurité, environnement : ensemble des systèmes de management correspondants dans l'entreprise."
      },
      {
       "terme": "Autocontrôle",
       "def": "Vérification par l'intervenant lui-même de la conformité de son travail avant restitution."
      },
      {
       "terme": "Étalonnage",
       "def": "Comparaison d'un instrument de mesure à un étalon de référence pour connaître son erreur."
      },
      {
       "terme": "Règlement CLP",
       "def": "Règlement européen relatif à la classification, à l'étiquetage et à l'emballage des produits chimiques."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité : document en seize rubriques décrivant les dangers d'un produit et les précautions à prendre."
      },
      {
       "terme": "Déchet dangereux",
       "def": "Déchet présentant des propriétés dangereuses, soumis à une filière et à une traçabilité spécifiques."
      },
      {
       "terme": "Trackdéchets",
       "def": "Plateforme nationale de dématérialisation de la traçabilité des déchets dangereux."
      },
      {
       "terme": "DEEE",
       "def": "Déchets d'équipements électriques et électroniques."
      },
      {
       "terme": "Classe IE",
       "def": "Classe de rendement d'un moteur électrique, de IE1 à IE5."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Documents techniques du système",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bmspc-doc-schema-electrique",
     "titre": "Lire le schéma électrique d'un équipement de production",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Se repérer dans un dossier de schémas électriques folioté : cartouche, sommaire, folios, renvois.",
      "Identifier un composant par son repère et retrouver ses contacts sur d'autres folios.",
      "Suivre un circuit de puissance et un circuit de commande d'un départ moteur.",
      "Relier le schéma électrique à la table des entrées-sorties de l'automate.",
      "Utiliser le schéma pour préparer une consignation et un diagnostic."
     ],
     "sections": [
      {
       "titre": "Le dossier de schémas : structure et cartouche",
       "contenu": "\n<p>Dans le dossier technique d'une machine, les <strong>schémas électriques</strong> sont regroupés en un dossier de plusieurs dizaines de pages appelées <strong>folios</strong>, produit par un logiciel de conception électrique. À l'épreuve écrite de préparation d'une intervention, une partie des questions porte presque toujours sur ce document : identifier un composant, suivre un circuit, déterminer les points de consignation ou les points de mesure.</p>\n<p>Un dossier de schémas comprend en général, dans cet ordre :</p>\n<ol>\n<li>une <strong>page de garde</strong> (machine, client, numéro de dossier, indice de révision) ;</li>\n<li>un <strong>sommaire</strong> des folios ;</li>\n<li>les folios de <strong>distribution de puissance</strong> : arrivée réseau, sectionneur général, protections, transformateur de commande, alimentations 24 V DC ;</li>\n<li>les folios des <strong>départs moteurs</strong> et des variateurs ;</li>\n<li>les folios de <strong>commande</strong> : arrêt d'urgence, module de sécurité, mise sous tension ;</li>\n<li>les folios de l'<strong>automate</strong> : un ou plusieurs folios par module d'entrées et de sorties ;</li>\n<li>les <strong>borniers</strong>, les <strong>câbles</strong> et la <strong>nomenclature</strong> du matériel ;</li>\n<li>parfois l'<strong>implantation</strong> de l'armoire (vue de la plaque de montage et de la porte).</li>\n</ol>\n<p>Chaque folio porte un <strong>cartouche</strong> qui indique le titre du folio, le numéro de folio, l'indice de révision et la date. Le haut du folio est divisé en <strong>colonnes numérotées</strong> (souvent de 0 à 9) qui servent aux renvois.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un schéma dont l'indice de révision est ancien peut ne pas correspondre au câblage réel si la machine a été modifiée. Avant un diagnostic, vérifiez l'indice du dossier que vous utilisez et comparez-le à celui rangé dans l'armoire ; signalez toute différence constatée.</div>"
      },
      {
       "titre": "Repères, symboles et renvois",
       "contenu": "\n<p>Chaque composant porte un <strong>repère d'identification</strong>. La norme NF EN 81346 définit un système de repérage où le signe <strong>-</strong> précède le repère du produit, le signe <strong>+</strong> l'emplacement et le signe <strong>=</strong> la fonction ou l'installation. Exemple : =CONV2+AR1-QA3 désigne le contacteur QA3 de l'armoire AR1 pour le convoyeur 2. Les codes lettres ont évolué ; les deux usages coexistent dans les dossiers :</p>\n<table>\n<thead><tr><th>Fonction du composant</th><th>Repère usuel ancien</th><th>Repère NF EN 81346-2</th></tr></thead>\n<tbody>\n<tr><td>Sectionneur, interrupteur-sectionneur</td><td>Q</td><td>QB</td></tr>\n<tr><td>Disjoncteur moteur, disjoncteur</td><td>Q</td><td>QA</td></tr>\n<tr><td>Contacteur de puissance</td><td>KM</td><td>QA</td></tr>\n<tr><td>Relais auxiliaire</td><td>KA</td><td>KF</td></tr>\n<tr><td>Fusible, relais thermique</td><td>F</td><td>FA (fusible), BB (relais thermique)</td></tr>\n<tr><td>Moteur</td><td>M</td><td>MA</td></tr>\n<tr><td>Bouton-poussoir, sélecteur</td><td>S</td><td>SF</td></tr>\n<tr><td>Capteur, détecteur</td><td>B ou S</td><td>BG (position), BP (pression), BT (température)</td></tr>\n<tr><td>Voyant</td><td>H</td><td>PF</td></tr>\n<tr><td>Bornier</td><td>X</td><td>XD</td></tr>\n</tbody>\n</table>\n<p>Les symboles graphiques suivent la norme CEI 60617. Les contacts sont toujours dessinés <strong>en position repos</strong> : appareil non alimenté, non actionné. Les bornes des contacts portent des numéros normalisés : 1-2, 3-4, 5-6 pour les pôles de puissance ; dizaines et unités pour les contacts auxiliaires, l'unité 1-2 désignant un contact à ouverture (NC) et 3-4 un contact à fermeture (NO), par exemple 13-14 ou 21-22. Les bobines sont repérées A1-A2.</p>\n<p>Un composant est souvent dessiné en plusieurs morceaux sur des folios différents : la bobine d'un contacteur dans un folio de commande, ses pôles principaux dans le folio de puissance, ses contacts auxiliaires ailleurs. Le lien est assuré par les <strong>références croisées</strong> : sous la bobine figure un petit tableau qui liste chaque contact et sa position sous la forme folio.colonne. Inversement, à côté d'un contact, on lit où se trouve la bobine. De même, un conducteur qui quitte un folio porte un <strong>renvoi</strong> indiquant le folio et la colonne où il continue.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la référence croisée « 5.3 » signifie folio 5, colonne 3. C'est le fil d'Ariane du dossier : on ne cherche jamais un composant en feuilletant au hasard, on suit les renvois.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire le schéma pour une question de maintenance. 1) Identifier dans le sommaire les folios concernés par la fonction étudiée (par exemple « départ moteur convoyeur »). 2) Sur le folio de puissance, suivre l'énergie depuis le jeu de barres ou le folio de distribution : protection, contacteur ou variateur, bornier, câble, moteur. Noter les repères et les calibres. 3) Remonter vers l'amont jusqu'au sectionneur général et identifier tous les organes de séparation qui alimentent ce départ, y compris les alimentations de commande. 4) Repérer la bobine du contacteur, ou l'entrée de marche du variateur, à l'aide des références croisées, puis la sortie automate qui la commande. 5) Repérer les entrées automate liées : retour de contacteur, défaut variateur, contact du disjoncteur moteur, capteurs. 6) Dresser une liste des points de mesure avec leur repère de borne. 7) Confronter avec l'implantation pour localiser physiquement les composants dans l'armoire.</div>\n<p>Pièges fréquents :</p>\n<ul>\n<li>confondre un repère de <strong>fil</strong> (numéro de conducteur ou de potentiel) avec un repère de <strong>borne</strong> ;</li>\n<li>oublier qu'un contact dessiné ouvert sur le schéma peut être fermé en fonctionnement normal (bouton d'arrêt NC actionné en permanence par une came, relais toujours alimenté) ;</li>\n<li>négliger les <strong>sources multiples</strong> : alimentation 24 V d'un îlot de distribution provenant d'une autre armoire, circuit de chauffage d'armoire alimenté en amont du sectionneur général, onduleur ;</li>\n<li>lire le schéma d'un variateur comme celui d'un contacteur : un variateur coupé par sa commande conserve une tension dangereuse sur son bus continu.</li>\n</ul>"
      },
      {
       "titre": "Exemple commenté : départ moteur d'un convoyeur",
       "contenu": "\n<p><strong>Document décrit.</strong> Dossier de schémas de la ligne de palettisation, indice C. Extrait de trois folios.</p>\n<table>\n<thead><tr><th>Folio</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>2 « Distribution »</td><td>Arrivée 3 × 400 V + PE. Sectionneur général -Q0 (interrupteur-sectionneur 63 A cadenassable sur la porte). En aval de -Q0 : jeu de barres vers les départs. En amont de -Q0 : disjoncteur -Q90 (2 A) alimentant l'éclairage et la prise de service de l'armoire. Transformateur -T1 400 V / 230 V et alimentation -G1 230 V AC / 24 V DC 10 A protégée par -F11.</td></tr>\n<tr><td>4 « Convoyeur C2 »</td><td>Colonne 1 : disjoncteur moteur -Q4 (réglage 3,2 A), contacts auxiliaires 13-14 renvoyés en 8.2. Colonne 2 : contacteur -KM4, pôles 1-2, 3-4, 5-6 ; référence de la bobine en 6.4. Colonne 3 : bornier -X2 bornes 7, 8, 9 et PE. Colonne 4 : câble -W4 4G1,5 vers moteur -M4 1,1 kW 400 V triangle, 2,6 A.</td></tr>\n<tr><td>6 « Commande moteurs »</td><td>Colonne 4 : sortie automate %Q2.3 (renvoi vers 9.5) en série avec contact 21-22 de -KM5 (verrouillage), puis bobine -KM4 A1-A2 vers 0 V. Sous la bobine : tableau de références croisées « 1-2, 3-4, 5-6 : 4.2 ; 13-14 : 8.3 ».</td></tr>\n</tbody>\n</table>\n<p><strong>Questions types.</strong> Quels sont les organes de séparation à consigner pour remplacer le moteur -M4 ? Comment vérifier que l'automate commande bien le contacteur ? Que signifie le contact 21-22 de -KM5 ?</p>\n<p><strong>Analyse modèle.</strong></p>\n<p>1. <em>Chaîne de puissance.</em> Le moteur -M4 est alimenté depuis le jeu de barres par -Q4, qui assure la protection contre les courts-circuits et les surcharges (le réglage de la protection thermique doit correspondre à l'intensité nominale du moteur, soit 2,6 A ; réglé à 3,2 A, il laisse passer une surcharge prolongée de plus de 20 % : anomalie à signaler et à corriger après vérification). Le contacteur -KM4 commute le moteur. Le câble -W4 est à quatre conducteurs de 1,5 mm² dont le conducteur de protection.</p>\n<p>2. <em>Consignation.</em> Pour un remplacement du moteur, l'organe de séparation à condamner est le sectionneur général -Q0, cadenassable. Le disjoncteur -Q4 peut être ouvert en complément mais il n'est pas indiqué comme cadenassable. On note que -Q90 reste sous tension après ouverture de -Q0 : l'éclairage et la prise de l'armoire restent alimentés, ce qui impose de signaler ces parties actives lors du travail dans l'armoire. La VAT se fait au bornier -X2 bornes 7, 8, 9 et PE, au plus près du moteur.</p>\n<p>3. <em>Commande.</em> La bobine de -KM4 est alimentée en 24 V DC par la sortie %Q2.3 à travers le contact 21-22 de -KM5. Pour le diagnostic, on mesure entre la borne A1 de -KM4 et le 0 V : 24 V présents quand l'automate commande. Si 24 V sont présents en sortie de %Q2.3 mais absents en A1, le contact 21-22 de -KM5 est ouvert.</p>\n<p>4. <em>Interprétation du verrouillage.</em> Le contact à ouverture 21-22 de -KM5 empêche -KM4 de s'enclencher lorsque -KM5 est fermé. Il s'agit probablement d'un verrouillage entre deux sens de marche ou entre deux convoyeurs qui ne doivent pas tourner ensemble ; le folio de -KM5 permet de le confirmer. Le contact 13-14 de -Q4 renvoyé en 8.2 informe l'automate du déclenchement du disjoncteur moteur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les techniciens annotent souvent au crayon rouge, sur l'exemplaire papier de l'armoire, les modifications réalisées sur le terrain, puis demandent la mise à jour officielle du dossier. Sans cette discipline, les schémas se dégradent et chaque dépannage devient une enquête.</div>"
      }
     ],
     "points_cles": [
      "Le dossier de schémas est organisé en folios : distribution, départs, commande, automate, borniers, nomenclature.",
      "Le cartouche indique le folio et l'indice de révision ; vérifier qu'il correspond à la machine.",
      "Repères NF EN 81346 : = fonction, + emplacement, - produit ; anciens et nouveaux codes lettres coexistent.",
      "Les contacts sont dessinés en position repos ; 1-2 contact à ouverture, 3-4 contact à fermeture.",
      "Une référence croisée de forme folio.colonne relie bobine et contacts dispersés.",
      "Suivre l'énergie de l'amont vers l'aval, puis la commande, puis les retours d'information à l'automate.",
      "Repérer toutes les sources, y compris celles en amont du sectionneur général, avant une consignation.",
      "Une analyse de schéma aboutit à des repères précis : organes à consigner, bornes de mesure, entrées et sorties concernées."
     ],
     "lexique": [
      {
       "terme": "Folio",
       "def": "Page numérotée d'un dossier de schémas électriques."
      },
      {
       "terme": "Cartouche",
       "def": "Zone d'un folio indiquant son titre, son numéro, la date et l'indice de révision."
      },
      {
       "terme": "Indice de révision",
       "def": "Lettre ou numéro qui identifie la version d'un document modifié."
      },
      {
       "terme": "Repère d'identification",
       "def": "Code alphanumérique désignant un composant de manière unique dans l'installation."
      },
      {
       "terme": "Référence croisée",
       "def": "Indication folio.colonne permettant de retrouver les autres éléments d'un même composant."
      },
      {
       "terme": "Renvoi",
       "def": "Indication de la suite d'un conducteur sur un autre folio."
      },
      {
       "terme": "Bornier",
       "def": "Ensemble de bornes de raccordement entre le câblage de l'armoire et les câbles extérieurs."
      },
      {
       "terme": "Position repos",
       "def": "État d'un contact lorsque l'appareil n'est ni alimenté ni actionné."
      }
     ]
    },
    {
     "id": "bmspc-doc-schemas-fluidiques",
     "titre": "Lire un schéma pneumatique ou hydraulique",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Reconnaître les symboles normalisés des composants pneumatiques et hydrauliques.",
      "Utiliser le repérage des composants et des orifices pour se situer sur le schéma et sur la machine.",
      "Décrire le fonctionnement d'un circuit en suivant le trajet du fluide dans chaque position.",
      "Déterminer le comportement d'un circuit en cas de coupure d'énergie et en déduire les précautions de consignation.",
      "Rédiger une analyse argumentée d'un schéma fluidique."
     ],
     "sections": [
      {
       "titre": "Le schéma fluidique et ses conventions",
       "contenu": "\n<p>Le <strong>schéma fluidique</strong> représente les composants d'un circuit pneumatique ou hydraulique et leurs liaisons, sans tenir compte de leur position réelle sur la machine. Il est établi selon la norme <strong>ISO 1219</strong> : sa première partie (ISO 1219-1) définit les symboles graphiques, sa deuxième partie (ISO 1219-2) les règles de dessin et de repérage.</p>\n<p>Conventions de présentation :</p>\n<ul>\n<li>le schéma se lit de bas en haut, dans le sens de l'énergie : <strong>source</strong> en bas (unité de conditionnement ou centrale hydraulique), puis <strong>distributeurs</strong>, puis composants de réglage, et <strong>actionneurs</strong> en haut ;</li>\n<li>chaque chaîne d'actionneur est dessinée verticalement, les chaînes étant placées côte à côte ;</li>\n<li>les composants sont représentés dans la position qu'ils occupent <strong>machine à l'arrêt, sous pression, en position initiale</strong> du cycle ;</li>\n<li>les conduites de travail sont en trait continu, les conduites de pilotage en trait interrompu.</li>\n</ul>\n<p>Rappel sur les distributeurs : chaque case représente une position ; les orifices sont dessinés sur la case de la position repos ; les flèches indiquent le passage du fluide, les T barrés un orifice obturé. Les commandes sont dessinées sur les côtés : solénoïde, pilotage, ressort de rappel, commande manuelle de secours.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la case dessinée raccordée aux conduites est celle de la position repos. Pour savoir ce qui se passe lorsque le distributeur est commandé, on « fait glisser » mentalement la case voisine à sa place, en gardant les raccordements.</div>"
      },
      {
       "titre": "Repérage des composants et des orifices",
       "contenu": "\n<p>Les composants sont repérés selon la norme ISO 1219-2. Dans les dossiers, on rencontre un repérage par chaîne, de forme <strong>numéro de chaîne, lettre de famille, numéro d'ordre</strong> :</p>\n<table>\n<thead><tr><th>Repère</th><th>Famille</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>0Z1, 0V1</td><td>Chaîne 0 : source d'énergie commune</td><td>Unité de conditionnement, vanne de coupure</td></tr>\n<tr><td>1A1</td><td>Actionneur de la chaîne 1</td><td>Vérin de serrage</td></tr>\n<tr><td>1V1</td><td>Distributeur ou valve de la chaîne 1</td><td>Distributeur 5/2 monostable</td></tr>\n<tr><td>1V2, 1V3</td><td>Limiteurs de débit, clapets de la chaîne 1</td><td>Réglage de la vitesse de sortie et de rentrée</td></tr>\n<tr><td>1S1, 1S2</td><td>Capteurs de la chaîne 1</td><td>Détecteurs magnétiques vérin rentré et sorti</td></tr>\n<tr><td>0P1</td><td>Pompe ou compresseur de la source</td><td>Pompe d'une centrale hydraulique</td></tr>\n</tbody>\n</table>\n<p>Les dossiers récents utilisent parfois le repérage NF EN 81346 déjà rencontré sur les schémas électriques (par exemple -MM1 pour un vérin), ce qui permet de faire le lien direct entre la bobine d'électrovanne du schéma électrique et le distributeur du schéma fluidique.</p>\n<p>Les <strong>orifices</strong> des distributeurs pneumatiques sont repérés par des chiffres (ISO 5599-3) : <strong>1</strong> alimentation, <strong>2 et 4</strong> utilisations, <strong>3 et 5</strong> échappements, <strong>12 et 14</strong> pilotages (le pilotage 14 met en communication 1 et 4, le pilotage 12 met en communication 1 et 2). En hydraulique, on utilise des lettres : <strong>P</strong> pression, <strong>T</strong> retour au réservoir, <strong>A et B</strong> utilisations, <strong>X et Y</strong> pilotage et drain, <strong>L</strong> fuite.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le repère 1V1 d'un schéma pneumatique n'a rien à voir avec un repère électrique de type -V1 sur un autre document. Vérifiez toujours de quel document provient un repère, et utilisez la nomenclature pour faire la correspondance entre schéma, implantation et référence de commande.</div>"
      },
      {
       "titre": "Méthode de lecture et pièges",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un schéma fluidique. 1) Lire le cartouche et la légende, identifier la source (pression de service indiquée sur le régulateur ou le limiteur de pression). 2) Isoler une chaîne d'actionneur et nommer chaque composant de bas en haut. 3) Pour le distributeur, noter son type (nombre d'orifices et de positions), ses commandes et sa stabilité (monostable, bistable, position centrale). 4) Suivre le fluide en position repos jusqu'à l'actionneur : quelle chambre est alimentée, laquelle est à l'échappement ; en déduire la position de l'actionneur. 5) Recommencer avec le distributeur commandé. 6) Identifier les composants de réglage et leur sens d'action (limiteur unidirectionnel sur l'échappement, réducteur de pression). 7) Étudier le comportement en cas de coupure d'électricité puis en cas de coupure de la source de fluide. 8) Conclure sur les énergies résiduelles et la consignation.</div>\n<p>Pièges fréquents :</p>\n<ul>\n<li>oublier qu'un distributeur <strong>bistable</strong> garde sa dernière position à la coupure électrique, si bien que la position de l'actionneur après coupure dépend de l'instant de la coupure ;</li>\n<li>ne pas voir un <strong>clapet antiretour piloté</strong> ou un bloqueur, qui maintient la pression dans une chambre du vérin même après purge de la source : cette pression piégée est une énergie résiduelle ;</li>\n<li>confondre un limiteur de débit (réglage de vitesse) avec un réducteur de pression (réglage d'effort) ;</li>\n<li>en hydraulique, ignorer un <strong>accumulateur</strong>, qui reste chargé après l'arrêt de la pompe et doit être déchargé avant toute ouverture du circuit ;</li>\n<li>lire un vérin à charge verticale sans se demander s'il peut descendre sous l'effet de la gravité lorsque la pression disparaît.</li>\n</ul>"
      },
      {
       "titre": "Exemple commenté : poste de serrage pneumatique",
       "contenu": "\n<p><strong>Document décrit.</strong> Schéma pneumatique du poste de serrage d'une machine d'usinage, indice B, pression de service 6 bar.</p>\n<table>\n<thead><tr><th>Repère</th><th>Description sur le schéma</th></tr></thead>\n<tbody>\n<tr><td>0V1</td><td>Vanne de coupure 3/2 manuelle cadenassable, avec échappement (purge du circuit en position fermée)</td></tr>\n<tr><td>0Z1</td><td>Filtre-régulateur réglé à 6 bar avec manomètre</td></tr>\n<tr><td>0V2</td><td>Démarreur progressif (mise en pression lente)</td></tr>\n<tr><td>1V1</td><td>Distributeur 5/2 bistable à double pilotage électropneumatique, bobines -MB1 (pilotage 14) et -MB2 (pilotage 12). En position dessinée : 1 relié à 2, 4 relié à 5</td></tr>\n<tr><td>1V2, 1V3</td><td>Limiteurs de débit unidirectionnels montés sur les deux orifices du vérin, réglage sur l'échappement</td></tr>\n<tr><td>1V4</td><td>Clapet antiretour piloté double (bloqueur) monté entre 1V1 et le vérin</td></tr>\n<tr><td>1A1</td><td>Vérin double effet D63, tige 20, course 50 mm ; la sortie de tige réalise le serrage de la pièce</td></tr>\n<tr><td>1S1, 1S2</td><td>Détecteurs magnétiques vérin rentré (desserré) et vérin sorti (serré)</td></tr>\n</tbody>\n</table>\n<p>L'orifice 2 de 1V1 alimente la chambre côté tige (rentrée), l'orifice 4 la chambre côté fond (sortie).</p>\n<p><strong>Questions types.</strong> Décrire la position du vérin à l'état dessiné. Expliquer le rôle de 1V4. Indiquer ce qui se passe si l'alimentation électrique est coupée pendant le serrage. Préciser la procédure de consignation pneumatique pour changer les mors de serrage.</p>\n<p><strong>Analyse modèle.</strong></p>\n<p>1. <em>Position dessinée.</em> En position repos dessinée, l'alimentation 1 est reliée à 2 : la chambre côté tige est sous pression, la chambre côté fond est à l'échappement par 4 vers 5. Le vérin est donc rentré : la pièce est desserrée et le détecteur 1S1 est actionné.</p>\n<p>2. <em>Serrage.</em> Une impulsion sur -MB1 fait basculer 1V1 : 1 est relié à 4, le vérin sort et serre la pièce ; 1S2 confirme le serrage. Comme 1V1 est bistable, il conserve cette position sans maintien de la commande. L'effort théorique en sortie vaut F = p × S = 0,6 N/mm² × (π × 63² ÷ 4) ≈ 0,6 × 3 117 ≈ 1 870 N.</p>\n<p>3. <em>Rôle de 1V4.</em> Le bloqueur maintient l'air enfermé dans les deux chambres du vérin si la pression d'alimentation chute : la pièce reste serrée en cas de coupure d'air, ce qui évite son éjection pendant l'usinage. C'est une fonction de sécurité du procédé.</p>\n<p>4. <em>Coupure électrique.</em> Le distributeur bistable garde sa position : le vérin reste sorti et la pièce reste serrée. La coupure électrique ne provoque donc aucun mouvement, ce qui est le comportement recherché.</p>\n<p>5. <em>Consignation pour changer les mors.</em> Fermer et cadenasser 0V1 : la vanne purge le circuit en aval, le manomètre de 0Z1 doit indiquer 0 bar. Mais, à cause du bloqueur 1V4, de l'air reste emprisonné dans le vérin : il garde son effort de serrage et peut bouger brusquement si l'on desserre un raccord ou si l'on actionne la commande manuelle du distributeur. Il faut donc purger le vérin par la procédure prévue (vis de purge du bloqueur ou raccords de purge indiqués dans la notice), vérifier qu'il se déplace librement à la main, puis seulement démonter les mors. La consignation électrique est également réalisée pour éviter un départ de cycle.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les machines récentes intègrent souvent sur le vérin ou sur l'îlot des orifices de purge repérés et une étiquette « énergie résiduelle ». Le technicien qui découvre un bloqueur non signalé sur une machine ancienne le fait ajouter à la fiche de consignation, pour que le prochain intervenant ne soit pas surpris.</div>"
      }
     ],
     "points_cles": [
      "Le schéma fluidique suit l'ISO 1219 : source en bas, actionneurs en haut, une chaîne par actionneur.",
      "Les composants sont dessinés machine à l'arrêt, sous pression, en position initiale.",
      "Repérage par chaîne : 0Z1 source, 1V1 distributeur, 1A1 actionneur, 1S1 capteur.",
      "Orifices pneumatiques : 1 alimentation, 2 et 4 utilisations, 3 et 5 échappements, 12 et 14 pilotages ; hydraulique P, T, A, B.",
      "Pour lire une commutation, on fait glisser mentalement la case voisine en gardant les raccordements.",
      "Un distributeur bistable garde sa position à la coupure électrique.",
      "Bloqueurs, clapets pilotés et accumulateurs créent des énergies résiduelles à purger avant intervention.",
      "Une analyse modèle décrit chaque position, calcule si besoin les efforts et conclut sur la consignation."
     ],
     "lexique": [
      {
       "terme": "Schéma fluidique",
       "def": "Représentation normalisée des composants et liaisons d'un circuit pneumatique ou hydraulique."
      },
      {
       "terme": "ISO 1219",
       "def": "Norme définissant les symboles et les règles de dessin des schémas de transmissions hydrauliques et pneumatiques."
      },
      {
       "terme": "Chaîne d'actionneur",
       "def": "Ensemble des composants qui commandent un même actionneur sur un schéma."
      },
      {
       "terme": "Orifice 14",
       "def": "Pilotage d'un distributeur pneumatique mettant en communication les orifices 1 et 4."
      },
      {
       "terme": "Bloqueur",
       "def": "Clapet antiretour piloté qui enferme le fluide dans un vérin en l'absence de pilotage."
      },
      {
       "terme": "Accumulateur",
       "def": "Réservoir hydraulique sous pression qui stocke de l'énergie et reste chargé après l'arrêt de la pompe."
      },
      {
       "terme": "Démarreur progressif",
       "def": "Valve qui assure une montée lente de la pression à la remise en service d'un circuit pneumatique."
      },
      {
       "terme": "Énergie résiduelle",
       "def": "Énergie qui subsiste dans un circuit après coupure de la source principale."
      }
     ]
    },
    {
     "id": "bmspc-doc-dessin-ensemble-nomenclature",
     "titre": "Exploiter un dessin d'ensemble, une nomenclature et une vue éclatée",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Lire le cartouche et la nomenclature d'un dessin d'ensemble mécanique.",
      "Identifier les classes d'équivalence et les liaisons d'un sous-ensemble à partir du dessin.",
      "Exploiter une vue éclatée de notice constructeur pour identifier une pièce de rechange.",
      "Établir une procédure de démontage et de remontage ordonnée et justifiée.",
      "Repérer sur le dessin les ajustements, les arrêts axiaux et les éléments d'étanchéité à respecter au remontage."
     ],
     "sections": [
      {
       "titre": "Les documents mécaniques du dossier technique",
       "contenu": "\n<p>Pour préparer une intervention sur un sous-ensemble mécanique (motoréducteur, palier, tête de pompe, rouleau de convoyeur), le technicien dispose de plusieurs documents complémentaires :</p>\n<table>\n<thead><tr><th>Document</th><th>Contenu</th><th>Usage en maintenance</th></tr></thead>\n<tbody>\n<tr><td><strong>Dessin d'ensemble</strong></td><td>Vue en coupe de l'ensemble monté, pièces repérées par des numéros</td><td>Comprendre l'architecture, les liaisons, l'ordre de démontage</td></tr>\n<tr><td><strong>Nomenclature</strong></td><td>Liste des pièces : repère, nombre, désignation, matière, observations</td><td>Identifier une pièce, ses caractéristiques, sa référence normalisée</td></tr>\n<tr><td><strong>Vue éclatée</strong></td><td>Pièces dessinées en perspective, écartées le long de leurs axes de montage</td><td>Visualiser l'ordre de montage, commander une pièce de rechange</td></tr>\n<tr><td><strong>Dessin de définition</strong></td><td>Plan d'une seule pièce avec cotes, tolérances, états de surface</td><td>Faire fabriquer ou contrôler une pièce</td></tr>\n<tr><td><strong>Liste des pièces de rechange</strong></td><td>Pièces disponibles chez le constructeur, avec codes et quantités conseillées</td><td>Commander, constituer le stock</td></tr>\n</tbody>\n</table>\n<p>Le <strong>cartouche</strong> du dessin d'ensemble indique le titre, l'échelle (par exemple 1:2, le dessin est deux fois plus petit que la réalité), le format, le système de projection (symbole de la projection européenne), la date et l'indice. La nomenclature est placée au-dessus du cartouche et se lit <strong>de bas en haut</strong> : le repère 1 est en bas.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans une nomenclature, la colonne « Désignation » donne le nom de la pièce et, pour les éléments normalisés, leur désignation complète (par exemple « Vis CHc M8-25 classe 8.8 » ou « Roulement 6206-2RS »). C'est cette ligne qu'il faut recopier pour commander une pièce du commerce, pas le numéro de repère du dessin.</div>"
      },
      {
       "titre": "Lire un dessin d'ensemble en coupe",
       "contenu": "\n<p>Les conventions de base du dessin technique ont été vues en seconde. Pour la maintenance, on retient surtout :</p>\n<ul>\n<li>les <strong>hachures</strong> identifient une même pièce dans toutes les vues : même inclinaison et même espacement pour une pièce, orientation différente pour deux pièces voisines. Les pièces pleines de révolution (arbres, vis, goupilles, billes) et les nervures ne sont pas hachurées lorsque le plan de coupe passe par leur axe ;</li>\n<li>les <strong>arrêts axiaux</strong> (épaulements, anneaux élastiques, écrous à encoches et rondelles frein, entretoises) déterminent quelles pièces doivent être retirées en premier ;</li>\n<li>les <strong>ajustements</strong> indiqués sur les cotes (par exemple ⌀30 k6 sur l'arbre, ⌀62 H7 dans le logement) révèlent les montages serrés qui exigeront un extracteur ou une presse ;</li>\n<li>les <strong>éléments d'étanchéité</strong> (joints à lèvre, joints toriques, joints plats) devront être remplacés systématiquement au remontage.</li>\n</ul>\n<p>La lecture se structure par la recherche des <strong>classes d'équivalence</strong> : ensembles de pièces sans mouvement relatif entre elles pendant le fonctionnement (par exemple : carter, couvercles, bagues extérieures de roulements, vis de fixation forment la classe « bâti » ; arbre, roue dentée, clavette, bagues intérieures forment la classe « arbre de sortie »). Entre deux classes, on identifie la <strong>liaison</strong> réalisée, ce qui fait le lien avec le schéma cinématique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur une coupe, deux pièces voisines de même matière peuvent sembler n'en former qu'une. Repérez les changements d'orientation des hachures et les traits fins de contact. Une erreur à ce stade conduit à vouloir « démonter » une pièce qui n'existe pas, ou à oublier une entretoise.</div>"
      },
      {
       "titre": "De la lecture à la procédure de démontage",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir une procédure de démontage à partir du dessin d'ensemble. 1) Identifier la pièce à remplacer et son repère dans la nomenclature. 2) Colorier ou lister les classes d'équivalence. 3) Repérer tous les éléments qui immobilisent la pièce : arrêts axiaux, vis, clavettes, ajustements serrés. 4) Déterminer le sens d'extraction (vers quel côté la pièce peut sortir sans passer par un épaulement). 5) Lister dans l'ordre les opérations, chacune avec la pièce concernée (repère), l'outillage et les précautions. 6) Prévoir les pièces à remplacer systématiquement (joints, rondelles frein, anneaux élastiques déformés, roulements démontés en force). 7) Rédiger le remontage dans l'ordre inverse en ajoutant les réglages, les couples de serrage, la lubrification et les contrôles.</div>\n<p>Une procédure bien rédigée se présente sous forme de tableau : numéro de phase, opération (verbe à l'infinitif), repères des pièces, outillage, points de contrôle ou de sécurité. Elle doit pouvoir être suivie par un collègue qui ne connaît pas l'ensemble.</p>\n<p>Pièges fréquents :</p>\n<ul>\n<li>oublier les opérations préalables : consignation, vidange du lubrifiant, dépose de la courroie ou de l'accouplement, repérage de la position angulaire des pièces ;</li>\n<li>démonter un roulement en frappant sur la bague non serrée ;</li>\n<li>ne pas repérer l'orientation d'une pièce dissymétrique (bague à lèvre, roulement à contact oblique, rondelle conique) ;</li>\n<li>oublier les cales de réglage du jeu, à remettre en même épaisseur.</li>\n</ul>"
      },
      {
       "titre": "Exemple commenté : palier de rouleau moteur",
       "contenu": "\n<p><strong>Document décrit.</strong> Dessin d'ensemble en coupe longitudinale, échelle 1:2, « Palier côté transmission du rouleau d'entraînement R2 », indice A. Nomenclature (de bas en haut) :</p>\n<table>\n<thead><tr><th>Rep.</th><th>Nb</th><th>Désignation</th><th>Observations</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>1</td><td>Corps de palier</td><td>EN-GJL-250, fixé au bâti par 4 vis rep. 9</td></tr>\n<tr><td>2</td><td>1</td><td>Arbre du rouleau</td><td>C45, portée roulement ⌀30 k6</td></tr>\n<tr><td>3</td><td>2</td><td>Roulement 6206-2RS C3</td><td>Logement ⌀62 H7</td></tr>\n<tr><td>4</td><td>1</td><td>Entretoise</td><td>Entre les deux roulements</td></tr>\n<tr><td>5</td><td>1</td><td>Anneau élastique pour arbre 30 × 1,5</td><td>Arrêt axial du roulement extérieur</td></tr>\n<tr><td>6</td><td>1</td><td>Couvercle</td><td>Fixé par 4 vis rep. 10</td></tr>\n<tr><td>7</td><td>1</td><td>Bague d'étanchéité à lèvre 30 × 47 × 7</td><td>Montée dans le couvercle, lèvre côté roulements</td></tr>\n<tr><td>8</td><td>1</td><td>Poulie crantée</td><td>Clavette rep. 11, vis de pression rep. 12</td></tr>\n<tr><td>9</td><td>4</td><td>Vis H M10-35 classe 8.8</td><td>Serrage au couple prescrit</td></tr>\n<tr><td>10</td><td>4</td><td>Vis CHc M6-16</td><td></td></tr>\n<tr><td>11</td><td>1</td><td>Clavette parallèle forme A 8 × 7 × 25</td><td></td></tr>\n<tr><td>12</td><td>1</td><td>Vis de pression HC M6-8 à bout plat</td><td>Frein-filet résistance moyenne</td></tr>\n</tbody>\n</table>\n<p>La coupe montre : l'arbre 2 traversant le corps 1 ; les deux roulements 3 séparés par l'entretoise 4 ; le roulement intérieur en appui sur un épaulement de l'arbre côté rouleau ; le roulement extérieur arrêté par l'anneau 5 ; le couvercle 6 côté poulie, portant la bague 7 ; la poulie 8 en bout d'arbre, à l'extérieur du couvercle.</p>\n<p><strong>Question type.</strong> Établir la procédure de remplacement des deux roulements, palier déposé de la machine.</p>\n<p><strong>Analyse modèle.</strong></p>\n<p>1. <em>Analyse.</em> Classes d'équivalence : bâti (1, 6, 9, 10, bagues extérieures des 3, partie fixe de 7) ; arbre (2, 4, 5, 8, 11, 12, bagues intérieures des 3). Les bagues intérieures sont serrées sur l'arbre (k6), les bagues extérieures montées glissantes dans le corps (H7), ce qui correspond à un arbre tournant sous charge fixe. Les roulements sortent donc avec l'arbre, du côté de la poulie : l'épaulement de l'arbre côté rouleau empêche l'autre sens.</p>\n<p>2. <em>Procédure.</em></p>\n<table>\n<thead><tr><th>Phase</th><th>Opération</th><th>Outillage, précautions</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>Desserrer la vis 12, extraire la poulie 8 et la clavette 11</td><td>Extracteur à griffes appuyé sur le moyeu ; repérer la position axiale de la poulie</td></tr>\n<tr><td>20</td><td>Déposer les vis 10 et le couvercle 6 avec la bague 7</td><td>Protéger la lèvre si la bague est réutilisée (non prévu ici)</td></tr>\n<tr><td>30</td><td>Sortir l'ensemble arbre 2, roulements 3, entretoise 4, anneau 5 côté poulie</td><td>Maillet à face plastique sur l'extrémité côté rouleau, chasse sur l'arbre et non sur les roulements</td></tr>\n<tr><td>40</td><td>Déposer l'anneau 5, extraire le roulement extérieur, l'entretoise 4 puis le roulement intérieur</td><td>Pince à anneaux, extracteur appuyé sur les bagues intérieures</td></tr>\n<tr><td>50</td><td>Nettoyer et contrôler arbre (⌀30 k6) et logement (⌀62 H7)</td><td>Micromètre, alésomètre, examen des traces</td></tr>\n<tr><td>60</td><td>Monter le roulement intérieur à chaud contre l'épaulement, puis l'entretoise 4, puis le roulement extérieur, puis un anneau 5 neuf</td><td>Chauffeur à induction, température prescrite ; laisser refroidir</td></tr>\n<tr><td>70</td><td>Introduire l'ensemble dans le corps 1, monter le couvercle 6 avec une bague 7 neuve, lèvre côté roulements</td><td>Lubrifier la lèvre, manchon de protection sur la rainure de clavette</td></tr>\n<tr><td>80</td><td>Remonter clavette 11 et poulie 8 à la position repérée, serrer la vis 12 avec frein-filet</td><td>Contrôler l'alignement avec la poulie motrice</td></tr>\n<tr><td>90</td><td>Contrôler la rotation libre à la main, remonter le palier, tendre la courroie, essai</td><td>Contrôle de température et de bruit après mise en service</td></tr>\n</tbody>\n</table>\n<p>3. <em>Pièces à prévoir.</em> Deux roulements 6206-2RS C3, une bague d'étanchéité 30 × 47 × 7, un anneau élastique 30 × 1,5, frein-filet résistance moyenne.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une procédure validée de ce type est enregistrée dans la GMAO et associée à l'équipement. La prochaine intervention gagne la moitié du temps de préparation, et le magasin peut constituer un kit de pièces prêt à l'emploi.</div>"
      }
     ],
     "points_cles": [
      "Dessin d'ensemble, nomenclature, vue éclatée, dessin de définition et liste de rechange sont complémentaires.",
      "La nomenclature se lit de bas en haut ; la désignation normalisée sert à commander les pièces du commerce.",
      "Les hachures identifient chaque pièce ; un changement d'orientation signale une pièce différente.",
      "Arrêts axiaux et ajustements serrés déterminent l'ordre et le sens de démontage.",
      "Les classes d'équivalence regroupent les pièces sans mouvement relatif.",
      "Une procédure se présente en phases : opération, repères, outillage, précautions et contrôles.",
      "Joints, anneaux élastiques et rondelles frein démontés se remplacent systématiquement.",
      "La procédure validée est capitalisée dans la GMAO avec un kit de pièces."
     ],
     "lexique": [
      {
       "terme": "Dessin d'ensemble",
       "def": "Représentation d'un mécanisme assemblé, dont les pièces sont repérées par des numéros."
      },
      {
       "terme": "Nomenclature",
       "def": "Tableau listant les pièces d'un ensemble avec repère, nombre, désignation, matière et observations."
      },
      {
       "terme": "Vue éclatée",
       "def": "Représentation en perspective des pièces écartées selon leurs axes de montage."
      },
      {
       "terme": "Classe d'équivalence",
       "def": "Ensemble de pièces sans mouvement relatif pendant le fonctionnement."
      },
      {
       "terme": "Arrêt axial",
       "def": "Élément qui empêche le déplacement d'une pièce le long de son axe."
      },
      {
       "terme": "Ajustement",
       "def": "Association des tolérances d'un alésage et d'un arbre, qui définit un montage serré, incertain ou glissant."
      },
      {
       "terme": "Échelle",
       "def": "Rapport entre une dimension sur le dessin et la dimension réelle."
      },
      {
       "terme": "Procédure de démontage",
       "def": "Suite ordonnée d'opérations, avec outillage et précautions, pour déposer des pièces sans les dégrader."
      }
     ]
    },
    {
     "id": "bmspc-doc-grafcet-table-es",
     "titre": "Exploiter un grafcet, une table des entrées-sorties et un extrait de programme",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Relier les variables d'un grafcet aux repères du schéma électrique grâce à la table des entrées-sorties.",
      "Décrire le déroulement d'un cycle à partir d'un grafcet et d'un chronogramme.",
      "Déterminer l'étape et la condition qui bloquent un cycle à partir d'un relevé d'états.",
      "Lire un réseau de programme en langage à contacts associé à une étape.",
      "Rédiger une conclusion de diagnostic argumentée à partir de documents d'automatisme."
     ],
     "sections": [
      {
       "titre": "Les documents d'automatisme du dossier",
       "contenu": "\n<p>Un dossier technique de machine automatisée comporte plusieurs documents décrivant la partie commande. Ils ne servent à rien isolément : leur intérêt vient de leur <strong>croisement</strong>.</p>\n<table>\n<thead><tr><th>Document</th><th>Ce qu'il apporte</th></tr></thead>\n<tbody>\n<tr><td><strong>Grafcet</strong> de production (ou de fonctionnement normal)</td><td>Ordre des actions et conditions d'évolution du cycle automatique</td></tr>\n<tr><td>Grafcets de sécurité et de conduite, <strong>GEMMA</strong></td><td>Modes de marche et d'arrêt, initialisation, traitement de l'arrêt d'urgence</td></tr>\n<tr><td><strong>Table des entrées-sorties</strong> (ou table d'affectation)</td><td>Correspondance entre variable du grafcet, mnémonique, adresse automate, repère du schéma et rôle physique</td></tr>\n<tr><td><strong>Chronogramme</strong></td><td>Évolution des variables dans le temps sur un cycle</td></tr>\n<tr><td><strong>Extrait de programme</strong></td><td>Traduction des étapes, transitions et actions dans un langage automate</td></tr>\n<tr><td>Liste des <strong>messages d'alarme</strong> de l'IHM</td><td>Texte de chaque alarme et condition qui la déclenche</td></tr>\n</tbody>\n</table>\n<p>À l'épreuve, ces documents servent à trois types de questions : décrire le fonctionnement normal, identifier l'origine probable d'un dysfonctionnement à partir de constats, préparer les contrôles à effectuer.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le grafcet dit « ce qui doit se passer », la table des entrées-sorties dit « où le trouver », le relevé d'états dit « ce qui se passe réellement ». Un diagnostic sur documents consiste à confronter ces trois sources.</div>"
      },
      {
       "titre": "Méthode de lecture croisée",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un blocage de cycle sur documents. 1) Lire le grafcet en entier et décrire le cycle en une phrase par étape (action réalisée et condition de fin). 2) Compléter, pour chaque variable du grafcet, la ligne correspondante de la table des entrées-sorties : adresse, repère, emplacement. 3) Placer sur le grafcet les étapes actives données par le relevé (IHM, visualisation en ligne). 4) Identifier la ou les transitions validées en aval. 5) Écrire chaque réceptivité sous forme d'équation et remplacer chaque variable par sa valeur relevée. 6) Isoler la ou les variables qui rendent la réceptivité fausse. 7) Interpréter physiquement : capteur non actionné parce que l'actionneur n'a pas fini son mouvement, ou capteur défaillant alors que le mouvement est fait ? 8) Proposer les contrôles discriminants, en commençant par l'observation de la machine et des voyants.</div>\n<p>Rappels utiles pour la lecture :</p>\n<ul>\n<li>une variable surlignée ou précédée de « / » (par exemple /S2) est le complément : vraie quand S2 vaut 0 ;</li>\n<li>le point « · » est le ET logique, le « + » le OU logique ;</li>\n<li>« ↑S1 » désigne le front montant de S1 : la réceptivité n'est vraie qu'à l'instant du passage de 0 à 1 ;</li>\n<li>« 3s/X5 » devient vrai 3 secondes après l'activation de l'étape 5 ;</li>\n<li>une étape initiale est représentée par un double carré.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un capteur câblé en contact à ouverture ou une logique inversée dans la table (par exemple « S_porte = 1 si porte fermée ») change l'interprétation d'un relevé. Lisez toujours la colonne « état logique 1 si… » de la table des entrées-sorties avant de conclure qu'un capteur est « à 0 alors qu'il devrait être à 1 ».</div>"
      },
      {
       "titre": "Exemple commenté : poste de perçage automatique",
       "contenu": "\n<p><strong>Documents décrits.</strong> Grafcet de production du poste de perçage (point de vue partie commande) :</p>\n<table>\n<thead><tr><th>Étape</th><th>Actions</th><th>Réceptivité de la transition aval</th></tr></thead>\n<tbody>\n<tr><td>0 (initiale)</td><td>aucune</td><td>Dcy · S_pièce · S_bridage_R · S_broche_H</td></tr>\n<tr><td>1</td><td>BRIDER (bobine YV1+)</td><td>S_bridage_S</td></tr>\n<tr><td>2</td><td>ROTATION_BROCHE (KM1), DESCENTE_RAPIDE (KM2)</td><td>S_approche</td></tr>\n<tr><td>3</td><td>ROTATION_BROCHE (KM1), DESCENTE_TRAVAIL (KM3)</td><td>S_broche_B</td></tr>\n<tr><td>4</td><td>ROTATION_BROCHE (KM1), MONTÉE (KM4)</td><td>S_broche_H</td></tr>\n<tr><td>5</td><td>DÉBRIDER (bobine YV1−)</td><td>S_bridage_R</td></tr>\n<tr><td>retour à 0</td><td></td><td></td></tr>\n</tbody>\n</table>\n<p>Table des entrées-sorties (extrait) :</p>\n<table>\n<thead><tr><th>Mnémonique</th><th>Adresse</th><th>Repère schéma</th><th>Description, état 1 si…</th></tr></thead>\n<tbody>\n<tr><td>Dcy</td><td>%I0.0</td><td>-SF1</td><td>Bouton départ cycle appuyé</td></tr>\n<tr><td>S_pièce</td><td>%I0.1</td><td>-BG1</td><td>Détecteur inductif, pièce présente</td></tr>\n<tr><td>S_bridage_R</td><td>%I0.2</td><td>-BG2</td><td>Détecteur magnétique, vérin de bridage rentré</td></tr>\n<tr><td>S_bridage_S</td><td>%I0.3</td><td>-BG3</td><td>Détecteur magnétique, vérin de bridage sorti (pièce bridée)</td></tr>\n<tr><td>S_broche_H</td><td>%I0.4</td><td>-BG4</td><td>Fin de course mécanique, broche en position haute</td></tr>\n<tr><td>S_approche</td><td>%I0.5</td><td>-BG5</td><td>Détecteur inductif, fin d'approche rapide</td></tr>\n<tr><td>S_broche_B</td><td>%I0.6</td><td>-BG6</td><td>Détecteur inductif, profondeur de perçage atteinte</td></tr>\n<tr><td>YV1+</td><td>%Q0.0</td><td>-MB1</td><td>Bobine de bridage du distributeur 5/2 bistable</td></tr>\n<tr><td>KM2</td><td>%Q0.2</td><td>-QA2</td><td>Contacteur descente rapide (moteur d'avance grande vitesse)</td></tr>\n<tr><td>KM3</td><td>%Q0.3</td><td>-QA3</td><td>Contacteur descente travail (moteur d'avance petite vitesse)</td></tr>\n</tbody>\n</table>\n<p><strong>Constat de l'opérateur.</strong> « Le poste s'arrête au milieu de la descente, la broche tourne mais ne descend plus. Aucun message d'alarme. » Relevé en ligne : étape X3 active ; %I0.5 = 1 ; %I0.6 = 0 ; %Q0.3 = 1 ; voyant de la sortie %Q0.3 allumé sur le module ; contacteur -QA3 non enclenché à l'observation.</p>\n<p><strong>Question type.</strong> Localiser l'origine probable du défaut et proposer les contrôles.</p>\n<p><strong>Analyse modèle.</strong></p>\n<p>1. <em>Situation dans le cycle.</em> L'étape 3 est active : la pièce est bridée, l'approche rapide est terminée (S_approche = 1 a permis de quitter l'étape 2). Le système doit réaliser la descente en vitesse de travail jusqu'à la profondeur de perçage.</p>\n<p>2. <em>Transition bloquante.</em> La transition validée en aval de l'étape 3 a pour réceptivité S_broche_B, relevée à 0. Le cycle attend donc la fin de la descente de travail.</p>\n<p>3. <em>Interprétation.</em> Deux hypothèses sont possibles : soit la broche est arrivée en bas et le détecteur -BG6 ne le voit pas, soit la broche n'est pas arrivée en bas. L'observation de l'opérateur (« la broche ne descend plus ») et le relevé tranchent : la sortie %Q0.3 est à 1, son voyant est allumé, mais le contacteur -QA3 n'est pas enclenché. L'ordre est donc émis par l'automate mais n'atteint pas le préactionneur. La partie programme et le capteur -BG6 ne sont pas en cause à ce stade.</p>\n<p>4. <em>Contrôles proposés, par demi-division sur le circuit de commande de -QA3</em> (folio de la sortie %Q0.3) : mesurer la tension entre la borne de sortie %Q0.3 et le 0 V (24 V attendus) ; puis à la borne A1 de -QA3 ; si la tension est présente en sortie mais absente en A1, rechercher un élément intermédiaire ouvert (verrouillage électrique par un contact de -QA2 ou de -QA4, fusible, bornier) ; si la tension est présente en A1 et que -QA3 ne colle pas, contrôler la bobine hors tension (résistance) et le retour au 0 V en A2. Les contrôles sous tension exigent l'habilitation adaptée.</p>\n<p>5. <em>Conclusion rédigée.</em> « Le cycle est bloqué à l'étape 3 en attente de S_broche_B. L'automate commande la descente de travail (%Q0.3 = 1) mais le contacteur -QA3 n'est pas enclenché : le défaut se situe dans le circuit de commande de -QA3, entre la sortie automate et la bobine, ou dans la bobine elle-même. Contrôles à réaliser dans l'ordre : tension en sortie %Q0.3, tension en A1 de -QA3, état des contacts de verrouillage, résistance de la bobine. »</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les intégrateurs ajoutent souvent des <strong>alarmes de dépassement de temps</strong> sur chaque étape (par exemple « descente de travail trop longue » si l'étape 3 dure plus de 8 s). Ici, l'absence d'alarme est une information : le technicien propose de l'ajouter, pour que la prochaine panne soit signalée avec un message clair.</div>"
      },
      {
       "titre": "Lire l'extrait de programme correspondant",
       "contenu": "\n<p>Le même poste est programmé en langage à contacts. Les étapes sont des bits internes, par exemple X3 = %M3. Deux réseaux typiques accompagnent l'étape 3.</p>\n<p><strong>Réseau d'évolution</strong> (activation de l'étape 4) : contact ouvert %M3, en série avec contact ouvert S_broche_B (%I0.6), alimentant une bobine S (set) sur %M4 et une bobine R (reset) sur %M3. Lecture : si l'étape 3 est active et que la profondeur est atteinte, on active l'étape 4 et on désactive l'étape 3.</p>\n<p><strong>Réseau de sortie</strong> : contact ouvert %M3, en série avec contact fermé de défaut variateur ou de sécurité « Def_avance », alimentant la bobine %Q0.3 (KM3). Lecture : la descente de travail est commandée pendant l'étape 3, sauf en cas de défaut d'avance.</p>\n<p>Dans l'exemple, la sortie %Q0.3 est à 1 : le contact « Def_avance » est donc passant, il n'y a pas de défaut logiciel d'avance. Ce réseau confirme la conclusion précédente : le programme fait ce qu'il doit, le problème est matériel, en aval de la sortie.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans une analyse écrite, ne proposez pas de « modifier le programme » ou de « forcer la sortie » pour faire repartir la machine. La réponse attendue est un diagnostic argumenté et des contrôles sûrs. Le forçage n'est jamais une solution de dépannage.</div>\n<p>Pièges fréquents dans ce type de sujet : oublier que plusieurs actions sont associées à une même étape (ici la rotation de broche à l'étape 3) ; confondre l'ordre (sortie automate) et son effet (mouvement réel) ; conclure à un capteur défaillant sans avoir vérifié que l'actionneur a réellement terminé son mouvement.</p>"
      }
     ],
     "points_cles": [
      "Grafcet, table des entrées-sorties, chronogramme, programme et liste d'alarmes se lisent ensemble.",
      "La table des E/S relie variable, adresse, repère du schéma et signification de l'état 1.",
      "Un blocage se situe en aval d'une étape active, sur une transition dont la réceptivité est fausse.",
      "Remplacer chaque variable de la réceptivité par sa valeur relevée isole la condition manquante.",
      "Distinguer ordre émis, préactionneur commandé et mouvement réalisé permet de localiser le défaut.",
      "Le réseau d'évolution active l'étape suivante et désactive l'étape courante ; le réseau de sortie émet l'ordre.",
      "La conclusion écrite précise l'étape, la condition manquante, la zone suspecte et les contrôles ordonnés.",
      "Le forçage ou la modification du programme ne sont pas des solutions de dépannage."
     ],
     "lexique": [
      {
       "terme": "Table des entrées-sorties",
       "def": "Document qui associe chaque variable à son adresse automate, son repère et sa signification."
      },
      {
       "terme": "Relevé d'états",
       "def": "Valeurs observées des étapes, entrées et sorties à un instant donné, en ligne ou sur l'IHM."
      },
      {
       "terme": "Front montant",
       "def": "Passage d'une variable de l'état 0 à l'état 1."
      },
      {
       "terme": "Réseau d'évolution",
       "def": "Partie du programme qui gère l'activation et la désactivation des étapes."
      },
      {
       "terme": "Réseau de sortie",
       "def": "Partie du programme qui commande les sorties en fonction des étapes actives."
      },
      {
       "terme": "Alarme de dépassement de temps",
       "def": "Alarme déclenchée lorsqu'une étape dure plus longtemps que prévu."
      },
      {
       "terme": "Préactionneur",
       "def": "Constituant qui distribue l'énergie à l'actionneur sur ordre de la partie commande."
      },
      {
       "terme": "Bobine S/R",
       "def": "Instruction de mise à 1 ou de remise à 0 mémorisée d'une variable en langage à contacts."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Documents de préparation et de suivi des interventions",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bmspc-doc-dossier-preparation",
     "titre": "Le dossier de préparation : ordre de travail, gamme, consignation et analyse des risques",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décoder un ordre de travail et en extraire les informations utiles à la préparation.",
      "Lire et compléter une gamme de maintenance préventive.",
      "Exploiter une fiche de consignation et une analyse des risques d'intervention.",
      "Connaître les documents de prévention liés aux entreprises extérieures et aux travaux particuliers.",
      "Assembler un dossier de préparation cohérent : ressources, durée, sécurité, pièces."
     ],
     "sections": [
      {
       "titre": "L'ordre de travail",
       "contenu": "\n<p>Toute intervention planifiée commence par un <strong>ordre de travail</strong> (OT, aussi appelé bon de travail), émis par la GMAO à partir d'une demande d'intervention ou du plan de maintenance préventive. Il est le document de référence de l'intervenant et sert ensuite d'enregistrement.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th><th>Ce que le technicien en tire</th></tr></thead>\n<tbody>\n<tr><td>Identification</td><td>Numéro d'OT, date d'émission, émetteur</td><td>Référence pour la saisie du temps et des pièces</td></tr>\n<tr><td>Équipement</td><td>Code équipement dans l'arborescence GMAO, localisation</td><td>Accès à l'historique et aux documents de l'équipement</td></tr>\n<tr><td>Nature</td><td>Corrective, préventive systématique ou conditionnelle, amélioration</td><td>Type de préparation à prévoir</td></tr>\n<tr><td>Priorité et dates</td><td>Urgence, date souhaitée, créneau d'arrêt accordé par la production</td><td>Organisation du travail</td></tr>\n<tr><td>Description</td><td>Symptôme constaté ou travaux à réaliser, référence de gamme</td><td>Objectif de l'intervention</td></tr>\n<tr><td>Ressources prévues</td><td>Qualification, nombre d'intervenants, durée estimée, habilitations</td><td>Vérification des compétences et du temps</td></tr>\n<tr><td>Pièces et matières</td><td>Articles réservés au magasin</td><td>Retrait des pièces avant l'intervention</td></tr>\n<tr><td>Sécurité</td><td>Fiche de consignation, permis éventuels, EPI</td><td>Documents à joindre</td></tr>\n<tr><td>Compte rendu</td><td>Travaux réalisés, cause, temps passé, pièces consommées, état final</td><td>Partie à remplir après l'intervention</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un OT n'est pas terminé quand la machine redémarre, mais quand son compte rendu est rempli et saisi. Le temps passé, la cause et les pièces consommées alimentent les indicateurs et le stock.</div>"
      },
      {
       "titre": "La gamme de maintenance préventive",
       "contenu": "\n<p>La <strong>gamme de maintenance</strong> (ou fiche d'intervention préventive) décrit, opération par opération, ce qu'il faut faire lors d'une visite périodique. Elle est rédigée par le service méthodes à partir des préconisations du constructeur, de l'AMDEC et du retour d'expérience. Sa structure type :</p>\n<ul>\n<li>en-tête : équipement, périodicité (par exemple toutes les 2 000 heures de fonctionnement ou tous les mois), durée estimée, état de l'équipement requis (en marche, à l'arrêt, consigné), qualifications ;</li>\n<li>liste des opérations numérotées, chacune avec : description, méthode ou valeur de référence, outillage, case de résultat (conforme, non conforme, valeur relevée) ;</li>\n<li>liste des pièces et consommables ;</li>\n<li>zone d'observations et de signature.</li>\n</ul>\n<p>Les opérations sont classées dans un ordre logique : d'abord celles réalisées en fonctionnement (bruits, vibrations, températures, pressions), puis la consignation, puis les opérations à l'arrêt, enfin la remise en service et les contrôles.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> cocher « conforme » sans avoir mesuré est une faute professionnelle : la gamme sert de preuve et de base aux décisions. Quand une valeur est demandée, notez-la, même si elle est dans la tolérance ; c'est la suite des valeurs qui révèle une dérive.</div>"
      },
      {
       "titre": "Fiche de consignation, analyse des risques et documents de prévention",
       "contenu": "\n<p>La <strong>fiche de consignation</strong> de l'équipement liste ses points d'isolement pour chaque énergie, leur emplacement, le moyen de condamnation et la vérification d'absence d'énergie. Elle est jointe à l'OT dès que l'intervention se fait machine consignée.</p>\n<p>L'<strong>analyse des risques de l'intervention</strong> complète la fiche : pour chaque phase de l'intervention, elle identifie les dangers (chute de hauteur, charge suspendue, produit chimique, énergie résiduelle, coupure, bruit, travail isolé), les situations dangereuses et les mesures de prévention. Elle se présente souvent en tableau :</p>\n<table>\n<thead><tr><th>Phase</th><th>Danger</th><th>Situation dangereuse</th><th>Mesures de prévention</th></tr></thead>\n<tbody>\n<tr><td>Dépose du moteur</td><td>Charge de 45 kg</td><td>Manutention manuelle, chute du moteur</td><td>Palan avec élingue vérifiée, deux intervenants, chaussures de sécurité</td></tr>\n<tr><td>Vidange du réducteur</td><td>Huile chaude</td><td>Projection, brûlure</td><td>Attente de refroidissement, gants, lunettes, bac de rétention</td></tr>\n</tbody>\n</table>\n<p>Certains travaux exigent des documents spécifiques :</p>\n<ul>\n<li>le <strong>plan de prévention</strong>, lorsqu'une <strong>entreprise extérieure</strong> intervient dans l'établissement (Code du travail, articles R. 4512-6 et suivants) : il est établi après une inspection commune préalable ; il doit être écrit lorsque les travaux représentent au moins 400 heures sur douze mois ou figurent sur la liste des travaux dangereux fixée par arrêté ;</li>\n<li>le <strong>permis de feu</strong>, pour tout travail par point chaud (soudage, meulage, découpage) hors des zones prévues : il fixe les mesures avant, pendant et après les travaux, dont la surveillance après la fin ;</li>\n<li>les autorisations particulières : <strong>autorisation de conduite</strong> pour les engins et appareils de levage, permis de pénétrer en espace confiné, attestation de consignation électrique.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pendant les arrêts techniques annuels, plusieurs entreprises extérieures interviennent simultanément. Le service maintenance coordonne les plans de prévention, les consignations multiples et les permis de feu. Une réunion de lancement chaque matin fait le point sur les zones et les interférences entre équipes.</div>"
      },
      {
       "titre": "Exemple commenté : préventif d'un motoréducteur de convoyeur",
       "contenu": "\n<p><strong>Document décrit.</strong> OT n° 24-1187, émis par la GMAO. Équipement : CONV-04, motoréducteur d'entraînement du convoyeur à bande de la ligne 2 (moteur 4 kW, réducteur à engrenages, huile minérale ISO VG 220, 3,5 L). Nature : préventif systématique, périodicité 4 000 h. Créneau : arrêt programmé samedi de 6 h à 10 h. Durée estimée : 2 h, un technicien qualifié, habilitation BR et BC. Gamme jointe GM-CONV-04 :</p>\n<table>\n<thead><tr><th>N°</th><th>Opération</th><th>Référence ou méthode</th><th>Résultat</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Avant arrêt : relever la température du carter du réducteur</td><td>Thermomètre infrarouge, valeur à noter</td><td>…</td></tr>\n<tr><td>2</td><td>Avant arrêt : relever le courant absorbé par le moteur</td><td>Pince ampèremétrique, In plaque 8,1 A</td><td>…</td></tr>\n<tr><td>3</td><td>Consigner selon fiche FC-CONV-04</td><td>Sectionneur -Q0 armoire AR2</td><td>…</td></tr>\n<tr><td>4</td><td>Vidanger le réducteur, contrôler l'aspect de l'huile et du bouchon magnétique</td><td>Huile chaude, bac de rétention</td><td>…</td></tr>\n<tr><td>5</td><td>Remplir avec l'huile prescrite jusqu'au niveau</td><td>ISO VG 220, 3,5 L</td><td>…</td></tr>\n<tr><td>6</td><td>Contrôler le serrage des fixations du motoréducteur</td><td>Clé dynamométrique, couple notice</td><td>…</td></tr>\n<tr><td>7</td><td>Contrôler l'état et la tension de la bande, l'usure du revêtement du tambour</td><td>Visuel, mesure de flèche</td><td>…</td></tr>\n<tr><td>8</td><td>Déconsigner, essai à vide puis en charge, contrôle de fuite</td><td>Procédure de remise en service</td><td>…</td></tr>\n</tbody>\n</table>\n<p><strong>Question type.</strong> Analyser l'OT et la gamme, puis établir la préparation de l'intervention : ressources, pièces et consommables, outillage, sécurité, points de vigilance.</p>\n<p><strong>Analyse modèle.</strong></p>\n<p>1. <em>Cohérence de l'OT.</em> Le créneau de 4 h est compatible avec la durée estimée de 2 h et laisse une marge pour un aléa (fixation desserrée, bande à retendre). L'habilitation BC est justifiée : le technicien réalise lui-même la consignation. Les opérations 1 et 2 doivent être faites <em>avant</em> l'arrêt de 6 h : il faut donc arriver avant l'arrêt de la ligne, ce que l'OT ne précise pas ; point à signaler au planificateur.</p>\n<p>2. <em>Pièces et consommables.</em> 3,5 L d'huile ISO VG 220 de la marque référencée (prévoir 5 L pour le rinçage éventuel et l'appoint), joint du bouchon de vidange neuf, absorbants, chiffons, fût « huiles usagées » disponible au poste de collecte.</p>\n<p>3. <em>Outillage.</em> Thermomètre infrarouge, pince ampèremétrique, cadenas personnel et pancarte, VAT, clé dynamométrique, clés de vidange, bac de rétention, entonnoir propre, lampe.</p>\n<p>4. <em>Sécurité.</em> Consignation électrique au sectionneur -Q0 de l'armoire AR2 avec VAT au bornier du moteur. Le convoyeur à bande peut avoir une énergie mécanique résiduelle si la bande est inclinée : vérifier dans la fiche de consignation s'il faut caler la bande. Risques : huile chaude (gants, lunettes, attendre que la température soit tolérable tout en gardant l'huile assez fluide pour la vidange) ; glissade (absorbants) ; coincement au tambour lors de l'essai (protecteurs remontés avant l'essai, opérateur prévenu).</p>\n<p>5. <em>Points de vigilance techniques.</em> Comparer la température et le courant relevés aux valeurs des visites précédentes enregistrées dans la GMAO : une hausse oriente vers un défaut naissant. L'aspect de l'huile (laiteuse : présence d'eau ; noire avec odeur de brûlé : surchauffe) et les particules sur le bouchon magnétique (fines paillettes normales, éclats : dégradation d'engrenage ou de roulement) sont à décrire dans le compte rendu. Toute anomalie fait l'objet d'une nouvelle demande d'intervention.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'un dossier de préparation est complet en se posant six questions. Quoi : les opérations et leur ordre sont-ils clairs ? Qui : qualification, habilitations, nombre d'intervenants ? Quand : créneau, durée, opérations à faire en marche ? Avec quoi : pièces réservées, consommables, outillage, documents ? Comment en sécurité : consignation, analyse des risques, permis, EPI ? Et après : essais, critères de réception, compte rendu, déchets ?</div>"
      }
     ],
     "points_cles": [
      "L'OT est le document de référence de l'intervention et son enregistrement final dans la GMAO.",
      "Il précise l'équipement, la nature, la priorité, les ressources, les pièces, la sécurité et le compte rendu.",
      "La gamme préventive ordonne les opérations : en marche, consignation, à l'arrêt, remise en service.",
      "Une valeur demandée se note toujours : c'est la tendance qui révèle une dérive.",
      "La fiche de consignation et l'analyse des risques sont jointes à toute intervention à l'arrêt.",
      "Plan de prévention pour les entreprises extérieures, écrit au-delà de 400 h sur 12 mois ou pour les travaux dangereux.",
      "Le permis de feu encadre tout travail par point chaud.",
      "Un dossier complet répond à : quoi, qui, quand, avec quoi, comment en sécurité, et après."
     ],
     "lexique": [
      {
       "terme": "Ordre de travail",
       "def": "Document émis par la GMAO qui déclenche, décrit et enregistre une intervention."
      },
      {
       "terme": "Gamme de maintenance",
       "def": "Liste ordonnée des opérations d'une intervention préventive avec méthodes, valeurs et résultats."
      },
      {
       "terme": "Fiche de consignation",
       "def": "Document listant les points d'isolement et les vérifications pour mettre un équipement en sécurité."
      },
      {
       "terme": "Analyse des risques d'intervention",
       "def": "Identification, phase par phase, des dangers d'une intervention et des mesures de prévention."
      },
      {
       "terme": "Plan de prévention",
       "def": "Document qui organise la prévention des risques liés à l'intervention d'une entreprise extérieure."
      },
      {
       "terme": "Permis de feu",
       "def": "Autorisation écrite encadrant un travail par point chaud et ses mesures de prévention."
      },
      {
       "terme": "Créneau d'arrêt",
       "def": "Période pendant laquelle la production met un équipement à disposition de la maintenance."
      },
      {
       "terme": "Bouchon magnétique",
       "def": "Bouchon de vidange aimanté qui retient les particules métalliques du lubrifiant."
      }
     ]
    },
    {
     "id": "bmspc-doc-historique-rapport",
     "titre": "Historique de GMAO, tableau de bord et rapport d'intervention",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Lire un extrait d'historique de GMAO et en vérifier la qualité.",
      "Exploiter un historique pour calculer des indicateurs et hiérarchiser les défaillances.",
      "Interpréter un tableau de bord de maintenance et repérer les écarts aux objectifs.",
      "Rédiger un compte rendu d'intervention clair, factuel et exploitable.",
      "Formuler une proposition d'amélioration argumentée à partir des données."
     ],
     "sections": [
      {
       "titre": "L'historique d'un équipement",
       "contenu": "\n<p>L'<strong>historique</strong> est la mémoire de l'équipement. Chaque OT clôturé dans la GMAO y ajoute une ligne. Un extrait d'historique se présente comme un tableau dont les colonnes habituelles sont : date et heure de la défaillance, numéro d'OT, nature (corrective, préventive), sous-ensemble ou composant concerné, symptôme, cause, action réalisée, <strong>temps d'arrêt de production</strong>, <strong>temps d'intervention</strong> (main-d'œuvre), pièces consommées et coût.</p>\n<p>Les calculs d'indicateurs (MTBF, MTTR, disponibilité, TRS) et la méthode du diagramme de Pareto font partie du cours théorique sur la fiabilité. Ici, il s'agit de les <strong>appliquer à un document réel</strong>, ce qui pose d'abord une question : les données sont-elles fiables ?</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un historique contient souvent des défauts de saisie : causes non renseignées (« RAS », « voir collègue »), même panne décrite avec des mots différents (« courroie cassée », « rupture courroie », « courroie HS »), temps d'arrêt confondu avec le temps d'intervention, interventions préventives mélangées aux correctives. Avant de calculer, regroupez les libellés équivalents et séparez préventif et correctif ; signalez dans votre analyse les données manquantes.</div>\n<p>Il faut aussi distinguer trois durées souvent confondues :</p>\n<ul>\n<li>le <strong>temps d'arrêt</strong> : durée pendant laquelle l'équipement n'a pas produit, de la défaillance à la remise à disposition ;</li>\n<li>le <strong>temps d'intervention</strong> : durée de travail effectif du ou des techniciens, qui peut être multipliée par le nombre d'intervenants dans le calcul du coût de main-d'œuvre ;</li>\n<li>les <strong>temps logistiques</strong> : attente du technicien, de la pièce, de l'autorisation ; ils font partie de l'arrêt mais pas de l'intervention et sont souvent le premier gisement d'amélioration.</li>\n</ul>"
      },
      {
       "titre": "Méthode d'exploitation d'un historique",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un historique pour proposer une amélioration. 1) Délimiter la période et l'équipement, relever le temps d'ouverture ou de fonctionnement requis. 2) Ne garder que les défaillances (correctif) pour la fiabilité. 3) Harmoniser les libellés et regrouper par sous-ensemble ou par cause. 4) Pour chaque groupe, calculer le nombre de défaillances, le temps d'arrêt cumulé et, si demandé, le coût. 5) Classer par ordre décroissant selon le critère pertinent (souvent le temps d'arrêt) et calculer les pourcentages cumulés pour le Pareto. 6) Calculer les indicateurs globaux : MTBF, MTTR, disponibilité. 7) Identifier les quelques causes qui représentent l'essentiel des pertes. 8) Pour ces causes, proposer une action (préventif, amélioration, stock de pièces, formation) et estimer son effet attendu.</div>\n<p>Le choix du critère de classement change la conclusion : classer par <strong>nombre</strong> de pannes fait ressortir les petites pannes répétitives (souvent liées aux réglages et aux capteurs) ; classer par <strong>temps d'arrêt</strong> fait ressortir ce qui pénalise la production ; classer par <strong>coût</strong> intègre les pièces chères. L'analyse doit justifier son critère.</p>"
      },
      {
       "titre": "Exemple commenté : historique d'une encartonneuse",
       "contenu": "\n<p><strong>Document décrit.</strong> Extrait d'historique GMAO de l'encartonneuse ENC-02, défaillances du trimestre. Temps de fonctionnement requis sur la période : 1 500 h.</p>\n<table>\n<thead><tr><th>OT</th><th>Sous-ensemble</th><th>Symptôme / cause saisie</th><th>Arrêt (h)</th><th>Intervention (h)</th></tr></thead>\n<tbody>\n<tr><td>3101</td><td>Magasin de cartons</td><td>Bourrage, ventouse déchirée</td><td>0,5</td><td>0,3</td></tr>\n<tr><td>3115</td><td>Groupe colle</td><td>Pas de colle, buse bouchée</td><td>1,5</td><td>1,0</td></tr>\n<tr><td>3122</td><td>Magasin de cartons</td><td>Bourrage, ventouse HS</td><td>0,5</td><td>0,3</td></tr>\n<tr><td>3140</td><td>Convoyeur de sortie</td><td>Moteur déclenché, roulement grippé (attente pièce 4 h)</td><td>6,0</td><td>1,5</td></tr>\n<tr><td>3147</td><td>Magasin de cartons</td><td>Ventouse usée, prise ratée</td><td>0,5</td><td>0,2</td></tr>\n<tr><td>3160</td><td>Groupe colle</td><td>Buse colmatée</td><td>2,0</td><td>1,0</td></tr>\n<tr><td>3171</td><td>Magasin de cartons</td><td>RAS, redémarré</td><td>0,3</td><td>0,1</td></tr>\n<tr><td>3188</td><td>Groupe colle</td><td>Buse bouchée, température colle trop basse</td><td>1,5</td><td>1,0</td></tr>\n<tr><td>3195</td><td>Magasin de cartons</td><td>Ventouse déchirée</td><td>0,5</td><td>0,3</td></tr>\n<tr><td>3203</td><td>Pliage</td><td>Détecteur de came desserré</td><td>0,7</td><td>0,4</td></tr>\n</tbody>\n</table>\n<p><strong>Question type.</strong> Calculer les indicateurs, identifier les sous-ensembles prioritaires et proposer des actions.</p>\n<p><strong>Analyse modèle.</strong></p>\n<p>1. <em>Qualité des données.</em> Les libellés « ventouse déchirée », « ventouse HS » et « ventouse usée » décrivent la même cause ; l'OT 3171 (« RAS ») n'a pas de cause, il est rattaché au magasin mais reste à confirmer. L'OT 3140 contient 4 h d'attente de pièce : c'est un temps logistique.</p>\n<p>2. <em>Indicateurs globaux.</em> Nombre de défaillances : 10. Temps d'arrêt cumulé : 0,5 + 1,5 + 0,5 + 6,0 + 0,5 + 2,0 + 0,3 + 1,5 + 0,5 + 0,7 = 14 h. Temps de bon fonctionnement : 1 500 − 14 = 1 486 h. MTBF ≈ 1 486 ÷ 10 ≈ 149 h. MTTR, calculé ici sur les temps d'arrêt : 14 ÷ 10 = 1,4 h. Disponibilité : 1 486 ÷ 1 500 ≈ 0,991, soit 99,1 %.</p>\n<p>3. <em>Regroupement par sous-ensemble.</em></p>\n<table>\n<thead><tr><th>Sous-ensemble</th><th>Nombre</th><th>Arrêt (h)</th><th>% de l'arrêt</th><th>% cumulé</th></tr></thead>\n<tbody>\n<tr><td>Convoyeur de sortie</td><td>1</td><td>6,0</td><td>42,9</td><td>42,9</td></tr>\n<tr><td>Groupe colle</td><td>3</td><td>5,0</td><td>35,7</td><td>78,6</td></tr>\n<tr><td>Magasin de cartons</td><td>5</td><td>2,3</td><td>16,4</td><td>95,0</td></tr>\n<tr><td>Pliage</td><td>1</td><td>0,7</td><td>5,0</td><td>100</td></tr>\n</tbody>\n</table>\n<p>4. <em>Interprétation.</em> En temps d'arrêt, le convoyeur et le groupe colle représentent près de 80 % des pertes. Mais l'arrêt du convoyeur est dû pour les deux tiers à l'attente de la pièce : l'action prioritaire est logistique (roulement en stock ou analyse de criticité de la pièce) plutôt que technique. Le groupe colle présente une défaillance répétitive (trois buses bouchées), avec un indice de cause racine : une température de colle trop basse. En nombre, le magasin de cartons est en tête avec cinq arrêts courts dus à l'usure des ventouses : ces micro-arrêts pèsent peu en heures mais perturbent la production et se traitent facilement.</p>\n<p>5. <em>Propositions.</em> Groupe colle : contrôler la régulation de température (sonde, consigne), ajouter un nettoyage préventif des buses à la gamme hebdomadaire ; effet attendu, suppression de la majorité des 5 h d'arrêt. Convoyeur : réévaluer le stock de roulements de ce type ; effet attendu, arrêt ramené à environ 2 h en cas de récidive. Magasin : remplacement systématique des ventouses à périodicité fixe, définie à partir de l'intervalle moyen observé entre défaillances (5 en 1 500 h, soit environ une toutes les 300 h). Saisie : rappeler l'obligation de renseigner la cause (OT 3171).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne analyse d'historique ne s'arrête pas aux calculs. Elle explique ce que les chiffres signifient, distingue cause technique et cause logistique, et aboutit à des actions chiffrées et réalistes.</div>"
      },
      {
       "titre": "Tableau de bord et rapport d'intervention",
       "contenu": "\n<p>Le <strong>tableau de bord</strong> du service maintenance présente chaque mois quelques indicateurs avec leur <strong>objectif</strong>, leur valeur et leur tendance : disponibilité ou TRS des équipements critiques, MTBF, taux de réalisation du préventif planifié, part du correctif dans les heures de maintenance, coûts, nombre d'accidents. Pour le lire, on compare chaque valeur à l'objectif et au mois précédent, on cherche les écarts significatifs et on remonte à l'historique pour les expliquer. Un indicateur en dérive n'est pas une conclusion mais le début d'une question.</p>\n<p>Le <strong>rapport d'intervention</strong> (ou compte rendu) est le document que le technicien produit. Il est lu par le responsable maintenance, par le responsable de production et par le collègue qui interviendra la fois suivante. Il doit être <strong>factuel</strong>, <strong>précis</strong> et <strong>bref</strong>, et suivre une structure constante :</p>\n<ol>\n<li>identification : équipement, OT, date, intervenant ;</li>\n<li>constat : symptôme observé, messages d'alarme, conditions ;</li>\n<li>diagnostic : contrôles réalisés et résultats, cause identifiée ;</li>\n<li>actions : travaux réalisés, pièces remplacées avec leur référence, réglages et valeurs ;</li>\n<li>résultat : essais, état de l'équipement à la restitution ;</li>\n<li>recommandations : actions à prévoir, pièces à commander, améliorations proposées.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> exemple de compte rendu rédigé dans la GMAO. « Constat : arrêt du convoyeur de sortie ENC-02, défaut thermique moteur M3, bruit de grippage côté accouplement. Diagnostic : courant moteur avant déclenchement non mesurable ; rotation à la main dure ; roulement 6205-2RS C3 côté accouplement grippé, absence de graisse. Actions : remplacement du roulement (pièce commandée en urgence, attente 4 h), contrôle de l'alignement, réglage du relais thermique vérifié à 2,6 A. Résultat : essai 30 min, courant 2,1 A, température palier stable à 45 °C. Recommandations : créer un stock de deux roulements 6205-2RS C3 ; ajouter le contrôle vibratoire du moteur M3 à la tournée mensuelle. » En moins de dix lignes, tout est dit et exploitable.</div>\n<p>Le vocabulaire employé doit être celui du dossier (repères, désignations normalisées, unités) ; les jugements vagues (« ça marche mieux », « pièce un peu usée ») sont remplacés par des valeurs mesurées ou des constats observables.</p>"
      }
     ],
     "points_cles": [
      "L'historique de GMAO est la mémoire de l'équipement ; sa qualité conditionne celle de l'analyse.",
      "Harmoniser les libellés, séparer préventif et correctif, signaler les données manquantes avant de calculer.",
      "Temps d'arrêt, temps d'intervention et temps logistiques sont des durées différentes.",
      "Le critère de classement (nombre, arrêt, coût) se choisit et se justifie.",
      "Une cause logistique (attente de pièce) appelle une action de stock ou d'organisation, pas une action technique.",
      "Le tableau de bord compare chaque indicateur à son objectif et à sa tendance.",
      "Le rapport d'intervention suit la structure constat, diagnostic, actions, résultat, recommandations.",
      "Valeurs mesurées et repères du dossier remplacent les jugements vagues."
     ],
     "lexique": [
      {
       "terme": "Historique",
       "def": "Ensemble chronologique des interventions enregistrées pour un équipement."
      },
      {
       "terme": "Temps d'arrêt",
       "def": "Durée pendant laquelle l'équipement n'est pas disponible pour la production."
      },
      {
       "terme": "Temps logistique",
       "def": "Partie du temps d'arrêt due aux attentes : intervenant, pièce, autorisation, outillage."
      },
      {
       "terme": "Micro-arrêt",
       "def": "Arrêt court et fréquent, souvent non enregistré, qui dégrade la performance de la ligne."
      },
      {
       "terme": "Tableau de bord",
       "def": "Présentation périodique d'indicateurs avec objectifs et tendances pour piloter un service."
      },
      {
       "terme": "Compte rendu d'intervention",
       "def": "Document factuel décrivant le constat, le diagnostic, les actions et le résultat d'une intervention."
      },
      {
       "terme": "Recommandation",
       "def": "Proposition d'action issue d'une intervention ou d'une analyse, à décider par le responsable."
      },
      {
       "terme": "Défaillance répétitive",
       "def": "Défaillance de même cause qui revient sur un équipement, signe d'une cause racine non traitée."
      }
     ]
    }
   ]
  }
 ]
};
