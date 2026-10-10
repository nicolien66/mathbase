/* Polymates — Bac pro Maintenance des matériels — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-maintenance-materiels"] = {
 "id": "bp-maintenance-materiels",
 "nom": "Maintenance des matériels",
 "icone": "🎓",
 "couleur": "#c8887a",
 "intro": "Le bac pro Maintenance des matériels forme des techniciens capables d'organiser, de diagnostiquer, de réaliser et de restituer des interventions de maintenance sur les matériels agricoles, de construction et de manutention ou d'espaces verts : technicien d'atelier ou itinérant chez un concessionnaire, un loueur, une entreprise de travaux ou une collectivité. Ce cours de première et de terminale approfondit le cours de seconde de la famille des métiers de la maintenance des matériels et des véhicules : approche système, chaîne d'énergie, chaîne d'information, mise en œuvre, diagnostic, organisation de la maintenance, prévention et communication, puis savoirs propres à chacune des trois options. Il est organisé en deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre, exemples commentés à l'appui, comment exploiter plans d'ensemble, schémas hydrauliques et électriques, ordres de réparation, procédures et rapports de diagnostic, tels qu'on les rencontre à l'épreuve d'analyse préparatoire à une intervention.",
 "options": [
  {
   "id": "a",
   "nom": "Option A — Matériels agricoles",
   "icone": "🚜",
   "desc": "Maintenance des tracteurs et des machines d'implantation, de protection des cultures et de récolte, avec leurs technologies de précision."
  },
  {
   "id": "b",
   "nom": "Option B — Matériels de construction et de manutention",
   "icone": "🏗️",
   "desc": "Maintenance des engins de terrassement, des trains de roulement, des chariots et des matériels de levage."
  },
  {
   "id": "c",
   "nom": "Option C — Matériels d'espaces verts",
   "icone": "🌳",
   "desc": "Maintenance des petits moteurs, des organes de coupe, des tondeuses autoportées et des matériels sur batterie et robots."
  }
 ],
 "parties": [
  {
   "titre": "Partie 1 — Approche système et comportement mécanique",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmm-analyse-fonctionnelle",
     "titre": "Analyse fonctionnelle et structurelle d'un matériel",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire un matériel par son besoin, son environnement et ses fonctions de service",
      "Distinguer chaîne d'énergie et chaîne d'information dans un système automatisé",
      "Repérer les flux de matière, d'énergie et d'information qui traversent un matériel",
      "Utiliser les outils descripteurs : schéma-bloc, diagramme de contexte, schéma de principe, maquette numérique",
      "S'appuyer sur l'analyse fonctionnelle pour orienter une intervention de maintenance"
     ],
     "sections": [
      {
       "titre": "Pourquoi analyser un matériel avant d'intervenir",
       "contenu": "<p>Un tracteur, une pelle hydraulique ou une tondeuse autoportée réunit des centaines de composants mécaniques, hydrauliques, électriques et électroniques. Face à une panne, le technicien qui démonte « au hasard » perd du temps, remplace des pièces saines et risque d'aggraver la situation. Le technicien qui a compris <strong>à quoi sert</strong> chaque sous-ensemble et <strong>comment</strong> il est relié aux autres sait au contraire où chercher.</p>\n<p>L'<strong>analyse fonctionnelle</strong> est la démarche qui décrit un matériel par ce qu'il fait (ses fonctions) plutôt que par ce qu'il est (ses pièces). Elle comporte deux regards complémentaires :</p>\n<ul>\n<li>l'<strong>analyse fonctionnelle externe</strong>, qui considère le matériel comme une « boîte noire » placée dans son environnement : à qui rend-il service, sur quoi agit-il, quelles contraintes subit-il ?</li>\n<li>l'<strong>analyse fonctionnelle interne</strong> (ou structurelle), qui ouvre la boîte : quels sous-ensembles réalisent chaque fonction, comment l'énergie et l'information circulent-elles entre eux ?</li>\n</ul>\n<p>En seconde, le matériel a été découvert organe par organe (moteur, transmission, circuits). En première et en terminale, l'objectif change : il s'agit de relier ces organes entre eux pour raisonner sur le système entier, ce qu'exige l'épreuve écrite d'analyse préparatoire à une intervention.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse fonctionnelle ne sert pas qu'au bureau d'études. Pour le technicien de maintenance, elle est l'outil qui transforme un symptôme (« le relevage ne monte plus ») en une liste ordonnée de sous-ensembles à contrôler.</div>"
      },
      {
       "titre": "L'analyse externe : besoin, contexte et cahier des charges",
       "contenu": "<p>Le point de départ est le <strong>besoin</strong> auquel répond le matériel. On le formule souvent avec trois questions : à qui le produit rend-il service ? Sur quoi agit-il ? Dans quel but ? Pour une chargeuse sur pneus : elle rend service à l'entreprise de travaux publics, elle agit sur des matériaux en vrac, dans le but de les déplacer et de les charger dans un camion.</p>\n<p>Le <strong>diagramme de contexte</strong> place ensuite le matériel au centre et l'entoure des <strong>éléments du milieu extérieur</strong> avec lesquels il interagit : l'opérateur, le sol, les matériaux, le camion, l'atmosphère (poussière, pluie, températures), le technicien de maintenance, la réglementation. Chaque interaction utile ou subie fait apparaître une <strong>fonction de service</strong>, toujours exprimée par un verbe à l'infinitif :</p>\n<ul>\n<li><strong>fonction principale</strong> : raison d'être du matériel (« permettre à l'opérateur de charger des matériaux dans un camion ») ;</li>\n<li><strong>fonctions contraintes</strong> : adaptation à l'environnement (« résister aux projections et à la poussière », « respecter les limites d'émissions polluantes », « être accessible pour l'entretien quotidien »).</li>\n</ul>\n<p>Chaque fonction est assortie de <strong>critères</strong> chiffrés, de <strong>niveaux</strong> et parfois d'une <strong>flexibilité</strong>. Le tout forme le <strong>cahier des charges fonctionnel</strong>. Pour la chargeuse, la fonction « lever une charge » peut être caractérisée par une charge de basculement, une hauteur d'axe d'articulation du godet et un temps de levée.</p>\n<table>\n<thead><tr><th>Fonction de service</th><th>Critère</th><th>Niveau (exemple)</th></tr></thead>\n<tbody>\n<tr><td>Charger des matériaux dans un camion</td><td>Hauteur d'axe du godet levé</td><td>3,8 m</td></tr>\n<tr><td>Lever une charge</td><td>Charge de basculement en braquage maximal</td><td>8 000 kg</td></tr>\n<tr><td>Se déplacer sur chantier</td><td>Vitesse maximale</td><td>40 km/h</td></tr>\n<tr><td>Faciliter l'entretien</td><td>Accès aux points de contrôle quotidiens</td><td>depuis le sol, sans outil</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les critères du cahier des charges se retrouvent dans la fiche technique du constructeur. Lorsqu'un client se plaint qu'un matériel « manque de force », le technicien compare la performance mesurée (pression, temps de cycle, effort) à ces niveaux annoncés avant de conclure à une panne.</div>"
      },
      {
       "titre": "L'analyse interne : chaîne d'énergie et chaîne d'information",
       "contenu": "<p>À l'intérieur du matériel, toute fonction technique fait intervenir deux chaînes qui coopèrent.</p>\n<p>La <strong>chaîne d'énergie</strong> transporte et transforme l'énergie jusqu'à l'organe qui agit sur la matière d'œuvre. On la décrit par cinq fonctions génériques :</p>\n<ol>\n<li><strong>alimenter</strong> : fournir l'énergie (réservoir de carburant, batterie) ;</li>\n<li><strong>distribuer</strong> (ou moduler) : doser l'énergie envoyée (distributeur hydraulique, relais, variateur) ;</li>\n<li><strong>convertir</strong> : changer la forme de l'énergie (moteur thermique, pompe, vérin, moteur électrique) ;</li>\n<li><strong>transmettre</strong> : conduire l'énergie mécanique (arbres, accouplements) ;</li>\n<li><strong>adapter</strong> : modifier vitesse et couple (réducteur, boîte de vitesses), puis l'<strong>effecteur</strong> agit (godet, couteau, roue).</li>\n</ol>\n<p>La <strong>chaîne d'information</strong> commande la chaîne d'énergie. Elle comporte trois fonctions :</p>\n<ol>\n<li><strong>acquérir</strong> : capter des grandeurs physiques ou des consignes (capteurs, manipulateurs, interrupteurs) ;</li>\n<li><strong>traiter</strong> : élaborer des ordres selon un programme (calculateur, logique à relais) ;</li>\n<li><strong>communiquer</strong> : transmettre les ordres aux pré-actionneurs et informer l'opérateur (afficheur, voyant, réseau multiplexé).</li>\n</ol>\n<p>Les deux chaînes se rejoignent au niveau du <strong>pré-actionneur</strong> : une électrovanne, par exemple, reçoit un ordre électrique de la chaîne d'information et module un débit d'huile de la chaîne d'énergie.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un même composant peut paraître appartenir aux deux chaînes. Le critère est son rôle : un capteur de pression <em>informe</em> (chaîne d'information) même s'il est vissé sur un circuit hydraulique ; un limiteur de pression <em>agit</em> sur l'énergie (chaîne d'énergie) même s'il « surveille » la pression.</div>"
      },
      {
       "titre": "Exemple : le relevage électronique d'un tracteur",
       "contenu": "<p>Prenons la fonction « lever et maintenir un outil porté à une hauteur choisie », réalisée par le relevage arrière d'un tracteur. Sa décomposition donne le tableau suivant.</p>\n<table>\n<thead><tr><th>Fonction générique</th><th>Composant réalisant la fonction</th></tr></thead>\n<tbody>\n<tr><td>Acquérir la consigne</td><td>Molette de position en cabine (potentiomètre)</td></tr>\n<tr><td>Acquérir l'état</td><td>Capteur de position angulaire des bras, axes de mesure d'effort</td></tr>\n<tr><td>Traiter</td><td>Calculateur de relevage</td></tr>\n<tr><td>Communiquer</td><td>Signal de commande vers les électrovannes, affichage en cabine</td></tr>\n<tr><td>Alimenter</td><td>Pompe hydraulique entraînée par le moteur</td></tr>\n<tr><td>Distribuer</td><td>Distributeur à commande électro-proportionnelle</td></tr>\n<tr><td>Convertir</td><td>Vérins de relevage (énergie hydraulique en énergie mécanique)</td></tr>\n<tr><td>Transmettre / adapter</td><td>Bras de relevage, chandelles, barres inférieures</td></tr>\n<tr><td>Effecteur</td><td>Outil attelé (charrue, herse)</td></tr>\n</tbody>\n</table>\n<p>Ce tableau fait immédiatement apparaître deux grandes familles de causes possibles d'une panne « le relevage ne monte pas » : soit l'énergie n'arrive pas (pompe, distributeur, vérin, fuite interne), soit l'ordre n'est pas donné (consigne, capteur, calculateur, câblage). Un simple essai — le relevage répond-il à la commande extérieure sur l'aile, qui court-circuite une partie de la chaîne d'information ? — permet souvent de trancher entre les deux.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour construire la chaîne fonctionnelle d'un matériel à partir d'un dossier technique : 1) identifier l'effecteur et l'action qu'il réalise sur la matière d'œuvre ; 2) remonter le flux d'énergie depuis l'effecteur jusqu'à la source (adapter, transmettre, convertir, distribuer, alimenter) en nommant chaque composant ; 3) repérer le pré-actionneur qui module cette énergie ; 4) remonter la chaîne d'information depuis le pré-actionneur (communiquer, traiter, acquérir) ; 5) placer les capteurs de retour d'état ; 6) vérifier que chaque composant cité figure sur le schéma ou la nomenclature du dossier.</div>"
      },
      {
       "titre": "Les flux et la notion de frontière d'étude",
       "contenu": "<p>Un matériel est traversé par trois types de <strong>flux</strong> :</p>\n<ul>\n<li>le flux de <strong>matière d'œuvre</strong> : ce sur quoi le matériel agit (terre, céréales, herbe, palettes) ;</li>\n<li>le flux d'<strong>énergie</strong> : chimique (gazole, essence), électrique, hydraulique, mécanique, thermique ;</li>\n<li>le flux d'<strong>information</strong> : consignes de l'opérateur, mesures des capteurs, messages entre calculateurs, alertes.</li>\n</ul>\n<p>Pour analyser un sous-ensemble, on trace une <strong>frontière d'étude</strong> : tout ce qui est à l'intérieur est décrit en détail, tout ce qui est à l'extérieur n'est considéré que par ses échanges. Si l'étude porte sur le circuit de refroidissement d'un moteur, le ventilateur est à l'intérieur ; le calculateur moteur, qui pilote un ventilateur à embrayage visco-coupleur électronique, est à l'extérieur et n'apparaît que par le signal qu'il envoie.</p>\n<p>Bien choisir la frontière évite deux erreurs symétriques : étudier un périmètre trop large (on se perd dans des détails sans rapport avec la panne) ou trop étroit (on oublie la cause, située juste à côté). Une perte de puissance hydraulique peut ainsi venir d'un moteur thermique qui cale sous charge : la frontière « circuit hydraulique » seule ne permet pas de le voir.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant toute analyse, écrire en une phrase la frontière d'étude et la liste des entrées et sorties qui la traversent. C'est aussi la première chose qu'attend un correcteur dans une copie d'analyse.</div>"
      },
      {
       "titre": "Les outils descripteurs du matériel",
       "contenu": "<p>Le dossier technique d'un matériel utilise plusieurs représentations, chacune adaptée à une question précise.</p>\n<table>\n<thead><tr><th>Outil</th><th>Ce qu'il montre</th><th>Usage en maintenance</th></tr></thead>\n<tbody>\n<tr><td>Diagramme de contexte</td><td>Le matériel et son environnement</td><td>Identifier les contraintes d'utilisation</td></tr>\n<tr><td>Schéma-bloc fonctionnel</td><td>Les fonctions et les flux entre elles</td><td>Situer une panne dans la chaîne</td></tr>\n<tr><td>Schéma de principe (hydraulique, électrique)</td><td>Les composants par symboles normalisés</td><td>Suivre un circuit, choisir les points de mesure</td></tr>\n<tr><td>Schéma cinématique</td><td>Les liaisons entre classes d'équivalence</td><td>Comprendre les mouvements, les rapports</td></tr>\n<tr><td>Vue éclatée et nomenclature</td><td>Les pièces, leur ordre de montage, leurs références</td><td>Démonter, commander les pièces</td></tr>\n<tr><td>Maquette numérique 3D</td><td>La géométrie réelle, les encombrements</td><td>Repérer l'implantation, préparer l'accès</td></tr>\n<tr><td>Croquis à main levée</td><td>Une idée rapide, un repérage</td><td>Noter un montage avant démontage</td></tr>\n</tbody>\n</table>\n<p>Les constructeurs proposent de plus en plus des documentations numériques interactives : en cliquant sur un composant du schéma, on accède à sa position sur la machine, à ses valeurs de contrôle et à la procédure de remplacement. Le raisonnement reste pourtant le même : passer d'une représentation à l'autre en conservant le repère des composants.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la position d'un composant sur un schéma de principe ne correspond pas à sa position sur la machine. Un distributeur dessiné en haut à gauche peut être monté sous la cabine. Toujours chercher le plan d'implantation avant de partir le démonter.</div>"
      },
      {
       "titre": "De l'analyse fonctionnelle à la préparation d'une intervention",
       "contenu": "<p>L'analyse fonctionnelle n'est pas un exercice de style : elle prépare directement les tâches d'organisation d'une intervention (s'informer, préparer, prévoir les moyens, organiser les étapes). Elle permet :</p>\n<ul>\n<li>de <strong>délimiter</strong> le sous-ensemble concerné par la demande du client ;</li>\n<li>d'<strong>identifier</strong> les composants à contrôler et les grandeurs à mesurer (pression, tension, débit, vitesse) ;</li>\n<li>de <strong>prévoir</strong> les documents (schéma, procédure, valeurs constructeur), les outillages et les pièces ;</li>\n<li>de <strong>justifier</strong> l'ordre des contrôles, du plus probable et du plus simple au plus long.</li>\n</ul>\n<p>Sur une moissonneuse-batteuse dont le batteur ralentit, par exemple, l'analyse montre que la vitesse du batteur dépend d'un variateur entraîné par le moteur et piloté par l'opérateur via un calculateur ; le ralentissement peut venir du moteur, de la transmission (courroie, variateur), d'une surcharge (bourrage, réglage) ou d'une consigne erronée. Chacune de ces pistes correspond à une frontière d'étude différente.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les techniciens expérimentés « pensent fonctionnel » sans le dire. Ils commencent par faire fonctionner le matériel, observent ce qui marche encore et ce qui ne marche plus, et en déduisent la partie de la chaîne en cause. L'analyse fonctionnelle formalise cette démarche et la rend explicable au client et au chef d'atelier.</div>"
      }
     ],
     "points_cles": [
      "L'analyse fonctionnelle externe décrit le matériel dans son environnement ; l'analyse interne décrit comment ses sous-ensembles réalisent les fonctions.",
      "Une fonction de service s'exprime par un verbe à l'infinitif et se caractérise par des critères chiffrés.",
      "La chaîne d'énergie : alimenter, distribuer, convertir, transmettre, adapter, puis l'effecteur agit.",
      "La chaîne d'information : acquérir, traiter, communiquer.",
      "Le pré-actionneur est le point de rencontre des deux chaînes.",
      "Trois flux traversent un matériel : matière d'œuvre, énergie, information.",
      "La frontière d'étude fixe ce qui est analysé en détail et ce qui n'est vu que par ses échanges.",
      "Chaque outil descripteur répond à une question précise ; le schéma de principe ne donne pas l'implantation.",
      "L'analyse fonctionnelle oriente le diagnostic et la préparation de l'intervention."
     ],
     "lexique": [
      {
       "terme": "Fonction de service",
       "def": "Action attendue du matériel pour répondre au besoin de l'utilisateur, exprimée par un verbe à l'infinitif."
      },
      {
       "terme": "Fonction contrainte",
       "def": "Fonction de service traduisant l'adaptation du matériel à son environnement (résister, respecter, s'adapter)."
      },
      {
       "terme": "Diagramme de contexte",
       "def": "Représentation du matériel entouré des éléments extérieurs avec lesquels il interagit."
      },
      {
       "terme": "Chaîne d'énergie",
       "def": "Ensemble des fonctions qui alimentent, distribuent, convertissent, transmettent et adaptent l'énergie jusqu'à l'effecteur."
      },
      {
       "terme": "Chaîne d'information",
       "def": "Ensemble des fonctions qui acquièrent, traitent et communiquent les informations pour commander la chaîne d'énergie."
      },
      {
       "terme": "Pré-actionneur",
       "def": "Composant qui, sur ordre de la chaîne d'information, module l'énergie envoyée à l'actionneur (relais, électrovanne, distributeur)."
      },
      {
       "terme": "Effecteur",
       "def": "Organe terminal qui agit sur la matière d'œuvre (godet, lame, roue, couteau)."
      },
      {
       "terme": "Matière d'œuvre",
       "def": "Ce sur quoi le matériel agit et dont il modifie l'état ou la position."
      },
      {
       "terme": "Frontière d'étude",
       "def": "Limite qui sépare la partie du système analysée en détail du reste du matériel."
      },
      {
       "terme": "Cahier des charges fonctionnel",
       "def": "Document qui énonce les fonctions de service avec leurs critères, niveaux et flexibilités."
      }
     ]
    },
    {
     "id": "bmm-solutions-constructives",
     "titre": "Solutions constructives : guidages, assemblages, étanchéité et lubrification",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Identifier les solutions de guidage en rotation et en translation d'un matériel",
      "Choisir la procédure de montage adaptée à un roulement, une bague ou un assemblage",
      "Distinguer étanchéité statique et dynamique et leurs composants",
      "Expliquer le rôle des lubrifiants et lire une préconisation constructeur",
      "Relier une usure ou un jeu anormal à sa cause probable"
     ],
     "sections": [
      {
       "titre": "Guidage en rotation : paliers lisses et roulements",
       "contenu": "<p>Un <strong>guidage en rotation</strong> permet à un arbre de tourner autour d'un axe en supprimant les autres mouvements. Sur les matériels, deux grandes solutions coexistent.</p>\n<p>Le <strong>palier lisse</strong> (ou coussinet, bague) fait glisser l'arbre dans un alésage revêtu d'un matériau à faible frottement : bronze, bague autolubrifiante frittée, bague composite. Il supporte bien les chocs et les mouvements oscillants lents : on le trouve dans les articulations de flèche de pelle, les axes de bras de chargeur, les pivots de direction. Il exige un graissage régulier par graisseur.</p>\n<p>Le <strong>roulement</strong> interpose des éléments roulants (billes, rouleaux cylindriques, coniques, aiguilles) entre une bague intérieure et une bague extérieure. Le frottement est beaucoup plus faible, ce qui convient aux rotations rapides : boîtes de vitesses, moyeux de roue, paliers de batteur, axes de lame de tondeuse.</p>\n<table>\n<thead><tr><th>Type de roulement</th><th>Charges supportées</th><th>Exemple d'emploi</th></tr></thead>\n<tbody>\n<tr><td>Rigide à billes</td><td>Radiale, axiale modérée</td><td>Alternateur, palier de lame</td></tr>\n<tr><td>À rouleaux cylindriques</td><td>Radiale forte</td><td>Arbres de boîte</td></tr>\n<tr><td>À rouleaux coniques (montés par paire)</td><td>Radiale et axiale fortes</td><td>Moyeux de roue, pignon d'attaque</td></tr>\n<tr><td>À aiguilles</td><td>Radiale, faible encombrement</td><td>Croisillons de cardan, pignons fous</td></tr>\n<tr><td>À rotule (billes ou rouleaux)</td><td>Accepte un défaut d'alignement</td><td>Paliers de convoyeur, de rotor</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la bague qui tourne par rapport à la charge est montée serrée ; l'autre est montée glissante. Sur un moyeu de roue, c'est la bague extérieure qui tourne avec la roue : elle est serrée dans le moyeu.</div>"
      },
      {
       "titre": "Montage, réglage et démontage des roulements",
       "contenu": "<p>La durée de vie d'un roulement dépend autant de son montage que de sa conception. Les règles professionnelles sont constantes :</p>\n<ul>\n<li>travailler propre : un grain de sable suffit à écailler une piste ;</li>\n<li>ne jamais faire passer l'effort de montage par les éléments roulants : on pousse sur la bague que l'on monte serrée ;</li>\n<li>utiliser une presse, un tube de frappe ou un chauffage par induction, jamais un chalumeau ni un marteau directement sur la bague ;</li>\n<li>démonter avec un extracteur qui prend appui sur la bague serrée ;</li>\n<li>remplacer systématiquement un roulement démonté par frappe ou dont les pistes sont marquées.</li>\n</ul>\n<p>Les roulements à rouleaux coniques montés par paire demandent un <strong>réglage</strong> : un <strong>jeu</strong> axial faible ou une <strong>précharge</strong> selon la préconisation. Le réglage se fait par écrou, par cales d'épaisseur ou par entretoise déformable. On le contrôle au comparateur (jeu axial en centièmes de millimètre) ou par le <strong>couple de rotation</strong> mesuré au dynamomètre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réglage d'un moyeu à roulements coniques par écrou, cas d'une préconisation « couple de rotation 2 à 4 N·m, sans joint » : 1) monter le moyeu graissé, sans le joint ; 2) serrer l'écrou en tournant le moyeu pour bien asseoir les rouleaux ; 3) desserrer puis resserrer progressivement ; 4) mesurer le couple nécessaire pour maintenir la rotation à l'aide d'une clé dynamométrique à cadran ou d'un peson enroulé autour du moyeu (couple = force en newtons × rayon en mètres : 20 N à 0,15 m donnent 3 N·m) ; 5) bloquer l'écrou (tôle frein, goupille) sans modifier le réglage ; 6) recontrôler, puis monter le joint.</div>"
      },
      {
       "titre": "Guidage en translation et articulations",
       "contenu": "<p>Le <strong>guidage en translation</strong> permet un déplacement rectiligne : mât de chariot élévateur (galets roulant dans des profilés), coulisseau de bras télescopique (patins de friction en polyamide), tige de vérin (bague de guidage). L'usure s'y traduit par un <strong>jeu latéral</strong> qui se compense par des cales ou des patins réglables, selon la tolérance donnée par le constructeur.</p>\n<p>Les <strong>articulations</strong> des équipements (flèche, balancier, biellettes de godet, bras de relevage) sont des guidages en rotation à faible amplitude et forte charge. Elles associent un axe en acier traité, des bagues remplaçables, des joints anti-poussière et un graisseur. L'axe est arrêté en rotation et en translation par une goupille, une bride ou un boulon traversant.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un jeu excessif dans une articulation de flèche ne se « rattrape » pas par du graissage. Il faut mesurer le jeu (comparateur, jauge, mesure du diamètre de l'axe et de la bague), comparer à la limite d'usure et remplacer les éléments usés. Laisser un jeu progresser ovalise l'alésage de la structure, ce qui impose ensuite un rechargement et un réalésage beaucoup plus coûteux.</div>"
      },
      {
       "titre": "Les assemblages démontables et permanents",
       "contenu": "<p>Un <strong>assemblage</strong> relie deux pièces de façon complète (aucun mouvement relatif). On distingue :</p>\n<ul>\n<li>les assemblages <strong>démontables</strong> : vis et écrous, goujons, clavettes, cannelures, goupilles, anneaux élastiques, frettes coniques ;</li>\n<li>les assemblages <strong>permanents</strong> : soudage, rivetage, collage, emmanchement serré.</li>\n</ul>\n<p>Pour un assemblage vissé, la qualité dépend de la <strong>précontrainte</strong> obtenue au serrage. Les vis sont repérées par leur <strong>classe de qualité</strong> (8.8, 10.9, 12.9) : le premier nombre multiplié par 100 donne la résistance minimale à la rupture en mégapascals, le produit des deux nombres multiplié par 10 donne la limite élastique. Une vis 10.9 a ainsi une résistance de 1 000 MPa et une limite élastique de 900 MPa.</p>\n<p>Les serrages critiques (culasse, bielles, roues, contrepoids, couronne d'orientation de pelle) se font selon une méthode imposée : serrage au couple, serrage au couple puis à l'angle, ordre de serrage en croix ou en spirale. Certaines vis travaillant au-delà de leur limite élastique ne sont <strong>pas réutilisables</strong>.</p>\n<p>Les <strong>freins d'écrou</strong> évitent le desserrage sous vibrations : rondelle frein à ailerons, écrou autofreiné, frein filet anaérobie, fil à freiner. Le frein filet se choisit selon la résistance : faible (démontage manuel facile) ou forte (démontage après chauffage).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur les engins de travaux publics, les vis de couronne d'orientation font l'objet d'un contrôle de serrage périodique prévu au plan d'entretien. Une vis desserrée surcharge les voisines et peut provoquer, à terme, une rupture en série.</div>"
      },
      {
       "titre": "L'étanchéité statique et dynamique",
       "contenu": "<p>L'<strong>étanchéité</strong> empêche un fluide de sortir d'un carter et les polluants d'y entrer. Elle est dite <strong>statique</strong> lorsque les pièces sont immobiles l'une par rapport à l'autre, <strong>dynamique</strong> lorsqu'il y a mouvement.</p>\n<table>\n<thead><tr><th>Type</th><th>Composants</th><th>Points de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Statique</td><td>Joints plats, joints toriques, pâtes d'étanchéité, rondelles cuivre</td><td>Propreté des portées, couple de serrage, compatibilité avec le fluide</td></tr>\n<tr><td>Dynamique en rotation</td><td>Bagues à lèvre, joints à faces (joints duo-cône des trains de roulement et réducteurs)</td><td>Sens de montage, état de la portée de l'arbre, lubrification de la lèvre</td></tr>\n<tr><td>Dynamique en translation</td><td>Joints de piston et de tige de vérin, racleurs</td><td>État de la tige (rayures, chromage), propreté de l'huile</td></tr>\n</tbody>\n</table>\n<p>Un joint torique écrasé, coupé lors du montage sur un filetage ou incompatible avec le fluide (gonflement, durcissement) provoque une fuite. Les matériaux courants sont le nitrile (huiles minérales), le fluorocarbone (températures élevées, certains fluides) et le polyuréthane (joints de vérin).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une bague à lèvre neuve montée sur une portée d'arbre marquée par l'ancienne lèvre fuira rapidement. Il faut soit décaler légèrement la nouvelle bague si le constructeur l'autorise, soit poser une chemise de réparation, soit remplacer l'arbre.</div>"
      },
      {
       "titre": "Lubrification, usure et jeux",
       "contenu": "<p>La <strong>lubrification</strong> sépare les surfaces en mouvement par un film de lubrifiant. Elle réduit le frottement et l'usure, évacue la chaleur, protège de la corrosion et entraîne les particules vers les filtres. Les matériels utilisent :</p>\n<ul>\n<li>des <strong>huiles</strong> caractérisées par leur <strong>viscosité</strong> (grade SAE pour les huiles moteur et de transmission, grade ISO VG pour les huiles hydrauliques) et par leur niveau de performance (normes API, ACEA ou spécification constructeur) ;</li>\n<li>des huiles dites <strong>universelles</strong> (de type UTTO ou STOU) qui lubrifient à la fois la transmission, le pont, les freins immergés et l'hydraulique d'un tracteur ;</li>\n<li>des <strong>graisses</strong>, classées par leur consistance (grade NLGI, le grade 2 étant le plus courant) et leur savon (lithium, complexe lithium, calcium), parfois additivées au bisulfure de molybdène pour les articulations très chargées.</li>\n</ul>\n<p>L'<strong>usure</strong> fait progressivement augmenter les <strong>jeux</strong>. On distingue l'usure abrasive (particules dures), adhésive (manque de lubrification, grippage), par fatigue (écaillage des pistes, piqûres des dentures) et corrosive. Lire le faciès d'usure renseigne sur la cause : des rayures circulaires sur une portée indiquent une pollution, un bleuissement indique une surchauffe, des écailles indiquent une fatigue ou une surcharge.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour choisir un lubrifiant d'appoint ou de vidange : 1) identifier l'organe et son numéro de série ; 2) chercher dans le manuel d'entretien le tableau des capacités et des lubrifiants ; 3) relever la spécification exigée (et non seulement la viscosité) ; 4) vérifier que le produit disponible porte cette spécification sur son étiquette ou sa fiche technique ; 5) adapter éventuellement le grade à la température d'utilisation selon le tableau constructeur ; 6) noter le produit et la quantité sur l'ordre de réparation.</div>"
      },
      {
       "titre": "Liaisons élastiques : ressorts, amortisseurs et suspensions",
       "contenu": "<p>Une <strong>liaison élastique</strong> autorise un déplacement limité, rappelé par un élément qui stocke de l'énergie. Les <strong>ressorts</strong> (hélicoïdaux de compression ou de traction, à lames, de torsion, rondelles élastiques) se caractérisent par leur <strong>raideur</strong> k en N/mm : la force vaut F = k × x, x étant la déformation. Un ressort de raideur 25 N/mm comprimé de 12 mm exerce donc 300 N.</p>\n<p>Les <strong>amortisseurs</strong> dissipent l'énergie des oscillations en laminant de l'huile. Les <strong>suspensions</strong> des matériels sont de plus en plus hydropneumatiques : un vérin relié à un <strong>accumulateur</strong> à gaz (azote) joue le rôle de ressort, un étranglement joue le rôle d'amortisseur. On les trouve sur les ponts avant de tracteurs, les cabines, les sièges et les bras de chargeuses (système anti-tangage).</p>\n<p>Les <strong>silentblocs</strong> (plots élastomère) isolent la cabine, le moteur ou le radiateur des vibrations. Leur dégradation (fissures, décollement, affaissement) se traduit par des vibrations, des bruits et parfois des ruptures de supports.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un accumulateur de suspension contient de l'azote sous pression même lorsque le moteur est arrêté. Toute intervention commence par la décompression du circuit selon la procédure constructeur.</div>"
      }
     ],
     "points_cles": [
      "Le palier lisse convient aux charges fortes et mouvements lents ; le roulement aux rotations rapides.",
      "La bague tournante par rapport à la charge est montée serrée ; l'effort de montage ne passe jamais par les éléments roulants.",
      "Les roulements coniques se règlent en jeu ou en précharge, contrôlés au comparateur ou par le couple de rotation.",
      "La classe d'une vis (8.8, 10.9, 12.9) donne sa résistance et sa limite élastique.",
      "Les serrages critiques suivent la méthode constructeur : couple, angle, ordre ; certaines vis ne se réutilisent pas.",
      "L'étanchéité est statique ou dynamique ; le matériau du joint doit être compatible avec le fluide.",
      "Un lubrifiant se choisit d'abord sur sa spécification, puis sur sa viscosité.",
      "Le faciès d'usure renseigne sur la cause : pollution, surchauffe, fatigue, corrosion.",
      "Un accumulateur reste sous pression moteur arrêté."
     ],
     "lexique": [
      {
       "terme": "Palier lisse",
       "def": "Guidage en rotation par glissement de l'arbre dans une bague à faible frottement."
      },
      {
       "terme": "Précharge",
       "def": "Effort axial appliqué volontairement à une paire de roulements pour supprimer tout jeu."
      },
      {
       "terme": "Précontrainte",
       "def": "Effort de traction créé dans une vis par le serrage, qui plaque les pièces assemblées."
      },
      {
       "terme": "Classe de qualité",
       "def": "Marquage d'une vis (8.8, 10.9…) indiquant sa résistance à la rupture et sa limite élastique."
      },
      {
       "terme": "Bague à lèvre",
       "def": "Joint d'étanchéité dynamique en rotation dont la lèvre frotte sur l'arbre."
      },
      {
       "terme": "Joint à faces",
       "def": "Étanchéité dynamique par deux bagues métalliques rodées en contact, utilisée dans les milieux très abrasifs."
      },
      {
       "terme": "Viscosité",
       "def": "Résistance d'un fluide à l'écoulement ; elle diminue quand la température augmente."
      },
      {
       "terme": "Grade NLGI",
       "def": "Classement de la consistance d'une graisse, du plus fluide au plus dur."
      },
      {
       "terme": "Raideur",
       "def": "Rapport entre la force appliquée à un ressort et sa déformation, en N/mm."
      },
      {
       "terme": "Silentbloc",
       "def": "Pièce en élastomère qui isole un organe des vibrations tout en le maintenant en position."
      }
     ]
    },
    {
     "id": "bmm-materiaux",
     "titre": "Matériaux des matériels et traitements des métaux",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Classer les matériaux rencontrés sur les matériels et citer leurs domaines d'utilisation",
      "Lire une désignation normalisée d'acier, de fonte ou d'alliage d'aluminium",
      "Expliquer le but des principaux traitements thermiques et de surface",
      "Choisir une pièce ou un procédé de réparation compatible avec le matériau",
      "Reconnaître les dégradations typiques : corrosion, fatigue, usure, vieillissement des polymères"
     ],
     "sections": [
      {
       "titre": "Panorama des matériaux d'un matériel",
       "contenu": "<p>Un matériel agricole, de chantier ou d'espaces verts associe des matériaux très différents, choisis chacun pour une fonction. Le technicien doit les reconnaître pour savoir comment les démonter, les réparer, les nettoyer ou les remplacer.</p>\n<table>\n<thead><tr><th>Famille</th><th>Exemples</th><th>Emplois typiques</th></tr></thead>\n<tbody>\n<tr><td>Aciers non alliés et faiblement alliés</td><td>S235, S355, C45, 42CrMo4</td><td>Châssis, flèches, arbres, axes, pignons</td></tr>\n<tr><td>Aciers résistants à l'usure</td><td>Tôles anti-abrasion trempées</td><td>Godets, lames, socs, contre-couteaux</td></tr>\n<tr><td>Aciers inoxydables</td><td>X5CrNi18-10</td><td>Cuves de pulvérisateur, pièces alimentaires</td></tr>\n<tr><td>Fontes</td><td>EN-GJL (lamellaire), EN-GJS (sphéroïdale)</td><td>Carters, blocs moteurs, contrepoids, moyeux</td></tr>\n<tr><td>Alliages d'aluminium</td><td>EN AW-6061, alliages de fonderie</td><td>Culasses, carters de petits moteurs, radiateurs</td></tr>\n<tr><td>Alliages cuivreux</td><td>Bronzes, laitons</td><td>Bagues, raccords, cosses</td></tr>\n<tr><td>Polymères</td><td>Polyamide, polyéthylène, polypropylène</td><td>Réservoirs, capots, patins, carters de tondeuse</td></tr>\n<tr><td>Élastomères</td><td>Nitrile, EPDM, fluorocarbone</td><td>Joints, flexibles, durites, silentblocs</td></tr>\n<tr><td>Composites</td><td>Polyester renforcé de fibres de verre</td><td>Capots, toits de cabine</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un matériau se choisit selon ses propriétés mécaniques (résistance, dureté, ténacité), physiques (masse volumique, conductivité) et chimiques (corrosion), mais aussi selon son coût et sa facilité de mise en œuvre et de réparation.</div>"
      },
      {
       "titre": "Les propriétés mécaniques à connaître",
       "contenu": "<p>L'essai de traction définit les grandeurs de base. Une éprouvette est étirée jusqu'à la rupture et l'on relève :</p>\n<ul>\n<li>la <strong>limite d'élasticité</strong> Re (en MPa) : au-delà, la déformation devient permanente ;</li>\n<li>la <strong>résistance à la traction</strong> Rm (en MPa) : contrainte maximale supportée ;</li>\n<li>l'<strong>allongement</strong> à la rupture A % : il traduit la <strong>ductilité</strong>.</li>\n</ul>\n<p>La <strong>dureté</strong> mesure la résistance à la pénétration ; elle s'exprime en Brinell (HB), Vickers (HV) ou Rockwell C (HRC). Plus un acier est dur, mieux il résiste à l'abrasion, mais plus il devient fragile. La <strong>ténacité</strong> (ou résilience) traduit la résistance aux chocs ; elle diminue aux basses températures pour de nombreux aciers.</p>\n<p>Ces notions expliquent des constats d'atelier : une dent de godet très dure résiste longtemps à l'abrasion dans le sable mais peut casser net sur un rocher par grand froid ; une fonte lamellaire supporte la compression mais se fissure sous un choc ; un axe en acier traité peut casser en fatigue sans aucune déformation préalable.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer une vis d'origine 10.9 par une vis 8.8 « parce qu'elle a le même diamètre » est une faute : la vis plus faible s'allongera au serrage au couple prescrit ou cédera en service. On remplace toujours par la classe et la longueur d'origine.</div>"
      },
      {
       "titre": "Lire une désignation normalisée",
       "contenu": "<p>Les matériaux métalliques sont désignés selon des normes européennes (série EN). Les désignations les plus fréquentes dans la documentation sont :</p>\n<ul>\n<li><strong>aciers d'usage général</strong> : lettre S suivie de la limite élastique minimale en MPa. S355 : acier de construction, Re ≥ 355 MPa ;</li>\n<li><strong>aciers non alliés pour traitement thermique</strong> : lettre C suivie de la teneur en carbone multipliée par 100. C45 : environ 0,45 % de carbone ;</li>\n<li><strong>aciers faiblement alliés</strong> : teneur en carbone × 100, puis symboles des éléments d'alliage, puis leurs teneurs multipliées par un facteur. 42CrMo4 : 0,42 % de carbone, environ 1 % de chrome (4 ÷ 4), un peu de molybdène ;</li>\n<li><strong>aciers fortement alliés</strong> : lettre X, teneur en carbone × 100, puis teneurs réelles. X5CrNi18-10 : inoxydable à 18 % de chrome et 10 % de nickel ;</li>\n<li><strong>fontes</strong> : EN-GJL-250 (fonte à graphite lamellaire, Rm ≥ 250 MPa), EN-GJS-400-15 (fonte à graphite sphéroïdal, Rm ≥ 400 MPa, A ≥ 15 %) ;</li>\n<li><strong>alliages d'aluminium corroyés</strong> : EN AW suivi d'un numéro à quatre chiffres (série 6000 : aluminium-magnésium-silicium).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> décoder 34CrNiMo6 : 1) pas de lettre initiale et aucun élément au-delà de 5 % : acier faiblement allié ; 2) 34 ÷ 100 = 0,34 % de carbone ; 3) le premier nombre après les symboles, 6, concerne le premier élément cité (chrome) : facteur 4, soit environ 1,5 % de chrome ; 4) nickel et molybdène présents en plus faible quantité ; 5) conclusion : acier de traitement thermique à haute résistance, typique des arbres et pignons de transmission très sollicités.</div>"
      },
      {
       "titre": "Les traitements thermiques",
       "contenu": "<p>Un <strong>traitement thermique</strong> modifie la structure interne d'un métal par un cycle de chauffage et de refroidissement contrôlés, sans changer sa forme.</p>\n<table>\n<thead><tr><th>Traitement</th><th>Principe</th><th>But</th></tr></thead>\n<tbody>\n<tr><td>Trempe</td><td>Chauffage puis refroidissement rapide (eau, huile)</td><td>Augmenter la dureté et la résistance</td></tr>\n<tr><td>Revenu</td><td>Réchauffage modéré après trempe</td><td>Diminuer la fragilité, ajuster la dureté</td></tr>\n<tr><td>Recuit</td><td>Chauffage puis refroidissement lent</td><td>Adoucir, supprimer les contraintes internes</td></tr>\n<tr><td>Trempe superficielle (par induction)</td><td>Seule la surface est chauffée et trempée</td><td>Surface dure, cœur tenace : axes, portées, galets</td></tr>\n<tr><td>Cémentation, carbonitruration</td><td>Enrichissement de la surface en carbone (et azote) puis trempe</td><td>Dentures de pignons, arbres cannelés</td></tr>\n<tr><td>Nitruration</td><td>Diffusion d'azote à température modérée</td><td>Dureté superficielle sans déformation</td></tr>\n</tbody>\n</table>\n<p>La plupart des pièces d'usure d'un matériel (axes d'articulation, pignons, maillons de chenille, galets) associent une <strong>surface dure</strong>, qui résiste à l'usure, et un <strong>cœur tenace</strong>, qui résiste aux chocs. Cette combinaison est détruite par un échauffement local : souder ou chauffer au chalumeau une pièce traitée lui fait perdre ses propriétés.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de recharger par soudure une pièce usée, le technicien consulte la documentation ou le service technique du constructeur. Certaines pièces (axes trempés, pièces cémentées) ne se rechargent pas ; d'autres exigent un préchauffage et un métal d'apport particulier.</div>"
      },
      {
       "titre": "Traitements de surface et protection contre la corrosion",
       "contenu": "<p>La <strong>corrosion</strong> est la dégradation d'un métal par réaction avec son environnement : humidité, engrais, sel de déneigement, sève, déjections animales. Elle est particulièrement active sur les matériels agricoles (engrais azotés, lisier) et d'espaces verts (humidité permanente de l'herbe coupée).</p>\n<p>Les protections courantes sont :</p>\n<ul>\n<li>la <strong>peinture</strong>, appliquée sur une surface dégraissée et préparée, souvent en plusieurs couches (primaire, finition) ou par poudrage cuit au four ;</li>\n<li>la <strong>galvanisation</strong> (dépôt de zinc à chaud) et l'<strong>électrozingage</strong> : le zinc se corrode à la place de l'acier ;</li>\n<li>le <strong>chromage dur</strong> des tiges de vérin : surface dure, lisse et résistante à la corrosion ;</li>\n<li>la <strong>phosphatation</strong> et le <strong>bruni</strong> sur la visserie ;</li>\n<li>les produits de protection temporaire (huiles, cires) pour le remisage.</li>\n</ul>\n<p>La <strong>corrosion galvanique</strong> apparaît quand deux métaux différents sont en contact en présence d'humidité : l'aluminium d'un carter se corrode au contact d'une vis en acier inoxydable non isolée. On l'évite par des rondelles isolantes ou des pâtes adaptées.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une tige de vérin dont le chromage est piqué ou rayé détruit les joints à chaque course et provoque une fuite récurrente. Changer les joints sans traiter la tige ne règle rien.</div>"
      },
      {
       "titre": "Polymères, élastomères et composites",
       "contenu": "<p>Les <strong>polymères</strong> remplacent de plus en plus le métal pour les capots, réservoirs, carters de tondeuse ou pièces de guidage. On distingue les <strong>thermoplastiques</strong> (polyéthylène, polypropylène, polyamide), qui se ramollissent à la chaleur et peuvent parfois se souder, et les <strong>thermodurcissables</strong> (résines polyester, époxy), qui ne refondent pas.</p>\n<p>Les <strong>élastomères</strong> des joints et flexibles vieillissent : durcissement, craquelures, gonflement au contact d'un fluide incompatible. Les flexibles hydrauliques portent un marquage (norme, diamètre, pression de service, date de fabrication) qui permet de suivre leur âge et de les remplacer à l'identique.</p>\n<p>Les <strong>composites</strong> (fibres de verre ou de carbone noyées dans une résine) offrent une grande résistance pour une faible masse. Ils se réparent par stratification avec un kit adapté, en respectant les consignes de la fiche de données de sécurité de la résine (ventilation, gants, masque).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'identification d'un polymère est souvent moulée sur la pièce (sigle entre chevrons, par exemple PA6 ou PP). Ce marquage guide le choix de la réparation et du recyclage en fin de vie.</div>"
      },
      {
       "titre": "Reconnaître une rupture et en tirer des conclusions",
       "contenu": "<p>L'observation d'une pièce cassée permet souvent d'en trouver la cause, ce qui évite de remonter une pièce neuve qui cassera à son tour.</p>\n<ul>\n<li><strong>Rupture par surcharge ductile</strong> : déformation importante, striction, surface grise et fibreuse.</li>\n<li><strong>Rupture fragile</strong> : peu de déformation, surface à grains brillants ; typique des fontes et des aciers très durs, favorisée par le froid.</li>\n<li><strong>Rupture par fatigue</strong> : une zone lisse avec des <strong>lignes d'arrêt</strong> concentriques (en « coquille ») qui partent d'une amorce (angle vif, rayure, trou, soudure), puis une zone de rupture finale rugueuse plus petite. Elle résulte de sollicitations répétées inférieures à la limite élastique.</li>\n</ul>\n<p>Une rupture par fatigue dont la zone finale est petite indique une contrainte faible mais très répétée : on recherche alors un défaut de montage (desserrage, désalignement, balourd) plutôt qu'une surcharge ponctuelle. Une zone finale grande indique une contrainte élevée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> expertiser une pièce rompue : 1) protéger les faciès (ne pas remettre les morceaux en contact) ; 2) photographier et repérer la position de montage ; 3) identifier le type de rupture (ductile, fragile, fatigue) ; 4) localiser l'amorce et chercher sa cause (entaille, corrosion, soudure, défaut de serrage) ; 5) vérifier les pièces voisines et les conditions d'utilisation ; 6) rédiger un constat qui sépare les faits observés des hypothèses, utile en cas de demande de garantie.</div>"
      }
     ],
     "points_cles": [
      "Chaque matériau est choisi pour une fonction : structure, usure, corrosion, masse, coût.",
      "Re, Rm, A %, dureté et ténacité sont les propriétés mécaniques de base.",
      "S355, C45, 42CrMo4, X5CrNi18-10, EN-GJS-400-15 se décodent selon les règles de la norme.",
      "Trempe et revenu durcissent ; les traitements superficiels donnent une surface dure et un cœur tenace.",
      "Chauffer ou souder une pièce traitée détruit ses propriétés : consulter le constructeur avant tout rechargement.",
      "La corrosion galvanique naît du contact de deux métaux différents en milieu humide.",
      "Une tige de vérin dont le chromage est abîmé détruit les joints.",
      "La rupture par fatigue se reconnaît à ses lignes d'arrêt partant d'une amorce.",
      "On remplace toujours une vis par une vis de même classe et de même longueur."
     ],
     "lexique": [
      {
       "terme": "Limite d'élasticité (Re)",
       "def": "Contrainte au-delà de laquelle la déformation d'un matériau devient permanente."
      },
      {
       "terme": "Dureté",
       "def": "Résistance d'un matériau à la pénétration, mesurée en HB, HV ou HRC."
      },
      {
       "terme": "Ténacité",
       "def": "Aptitude d'un matériau à résister aux chocs et à la propagation des fissures."
      },
      {
       "terme": "Trempe",
       "def": "Traitement thermique par chauffage puis refroidissement rapide, qui durcit l'acier."
      },
      {
       "terme": "Revenu",
       "def": "Réchauffage modéré après trempe pour réduire la fragilité."
      },
      {
       "terme": "Cémentation",
       "def": "Enrichissement superficiel en carbone suivi d'une trempe, pour obtenir une surface très dure."
      },
      {
       "terme": "Corrosion galvanique",
       "def": "Corrosion accélérée d'un métal au contact d'un métal plus noble en présence d'humidité."
      },
      {
       "terme": "Thermoplastique",
       "def": "Polymère qui se ramollit à la chaleur et peut être remis en forme."
      },
      {
       "terme": "Rupture par fatigue",
       "def": "Rupture progressive sous des sollicitations répétées, sans surcharge ponctuelle."
      },
      {
       "terme": "Fonte à graphite sphéroïdal",
       "def": "Fonte dont le graphite en nodules lui donne une bonne ductilité (EN-GJS)."
      }
     ]
    },
    {
     "id": "bmm-comportement-mecanique",
     "titre": "Modéliser un mécanisme : liaisons, mouvements et actions mécaniques",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Identifier les classes d'équivalence et les liaisons d'un mécanisme",
      "Lire et compléter un schéma cinématique",
      "Calculer vitesses, rapports et vitesses linéaires dans un mouvement de rotation",
      "Déterminer un moment et appliquer le principe fondamental de la statique à un cas simple",
      "Relier les sollicitations d'une pièce (traction, flexion, torsion, cisaillement) à ses dégradations"
     ],
     "sections": [
      {
       "titre": "Classes d'équivalence et liaisons mécaniques",
       "contenu": "<p>Pour comprendre un mécanisme, on regroupe les pièces qui n'ont aucun mouvement les unes par rapport aux autres en <strong>classes d'équivalence</strong> (ou sous-ensembles cinématiquement liés). Dans un vérin, le corps, le fond et la tête forment une classe ; la tige, le piston et son écrou en forment une autre.</p>\n<p>Deux classes sont reliées par une <strong>liaison</strong>, définie par les mouvements qu'elle autorise. Un solide libre possède six <strong>degrés de liberté</strong> : trois translations et trois rotations. Les liaisons usuelles sont :</p>\n<table>\n<thead><tr><th>Liaison</th><th>Mouvements autorisés</th><th>Exemple sur un matériel</th></tr></thead>\n<tbody>\n<tr><td>Encastrement (complète)</td><td>Aucun</td><td>Contrepoids boulonné sur le châssis</td></tr>\n<tr><td>Pivot</td><td>1 rotation</td><td>Arbre dans ses roulements, axe d'articulation</td></tr>\n<tr><td>Glissière</td><td>1 translation</td><td>Fourches sur le tablier, élément télescopique</td></tr>\n<tr><td>Pivot glissant</td><td>1 rotation + 1 translation de même axe</td><td>Tige de vérin dans le corps</td></tr>\n<tr><td>Hélicoïdale</td><td>Rotation et translation conjuguées</td><td>Vis de réglage, troisième point mécanique</td></tr>\n<tr><td>Rotule (sphérique)</td><td>3 rotations</td><td>Rotule de barre de direction, rotule d'attelage</td></tr>\n<tr><td>Appui plan</td><td>2 translations + 1 rotation</td><td>Patin sur une glissière plane</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le nom d'une liaison décrit les mouvements possibles, pas la technologie employée. Une liaison pivot peut être réalisée par des roulements, des bagues ou un simple axe.</div>"
      },
      {
       "titre": "Le schéma cinématique",
       "contenu": "<p>Le <strong>schéma cinématique</strong> représente chaque classe d'équivalence par une couleur ou un repère et chaque liaison par son symbole normalisé. Il ne montre ni les formes ni les dimensions exactes des pièces, mais il permet de comprendre comment le mécanisme bouge.</p>\n<p>Sur une chargeuse, le schéma de l'équipement fait apparaître : le châssis avant, les bras de levage reliés au châssis par deux pivots, le godet relié aux bras par un pivot, la tringlerie de cavage (biellette et levier) et les vérins représentés par deux classes en liaison pivot glissant, articulées à leurs extrémités. Le schéma montre immédiatement que la sortie du vérin de cavage fait tourner le godet autour de son axe sur les bras.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir le schéma cinématique d'un sous-ensemble à partir d'un plan d'ensemble : 1) colorier sur le plan chaque classe d'équivalence en s'aidant de la nomenclature (les éléments standards comme les vis, goupilles et bagues serrées appartiennent à la classe qu'ils immobilisent ; les éléments roulants ne sont rattachés à aucune) ; 2) faire la liste des contacts entre classes ; 3) pour chaque contact, identifier les mouvements possibles et nommer la liaison ; 4) placer les centres et axes des liaisons sur une feuille en respectant approximativement la géométrie ; 5) dessiner les symboles et relier ceux d'une même classe par des traits de la même couleur ; 6) vérifier en simulant mentalement le mouvement.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une bague emmanchée serrée dans un alésage appartient à la même classe que la pièce qui la porte, pas à celle de l'axe qui tourne dedans. Mal rattacher une bague fausse toute l'analyse des mouvements et des usures.</div>"
      },
      {
       "titre": "Mouvements de rotation et de translation",
       "contenu": "<p>Un solide en <strong>rotation</strong> autour d'un axe fixe se caractérise par sa <strong>fréquence de rotation</strong> N (en tr/min) ou sa <strong>vitesse angulaire</strong> ω (en rad/s). On passe de l'une à l'autre par ω = 2π × N ÷ 60. Un point situé à une distance R de l'axe a une <strong>vitesse linéaire</strong> v = ω × R (v en m/s, R en m).</p>\n<p>Cette relation est fondamentale pour les matériels de coupe et de récolte : la qualité de coupe d'une tondeuse rotative dépend de la vitesse en bout de lame, celle d'un batteur de moissonneuse de la vitesse périphérique du batteur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vitesse en bout de lame d'une tondeuse. Données : lame de 53 cm de longueur, fréquence de rotation 2 900 tr/min. 1) Rayon : R = 0,53 ÷ 2 = 0,265 m. 2) Vitesse angulaire : ω = 2π × 2 900 ÷ 60 ≈ 303,7 rad/s. 3) Vitesse linéaire : v = 303,7 × 0,265 ≈ 80,5 m/s. 4) Conclusion : environ 80 m/s, soit près de 290 km/h ; on comprend la gravité d'une projection et l'importance de l'équilibrage de la lame.</div>\n<p>Pour une <strong>translation</strong>, la vitesse d'un vérin se déduit du débit qui l'alimente et de la section utile : v = Q ÷ S. Un vérin de 80 mm d'alésage (section ≈ 50,3 cm²) alimenté à 30 L/min sort à 30 000 cm³/min ÷ 50,3 cm² ≈ 597 cm/min, soit environ 0,1 m/s. En rentrée, la section annulaire étant plus petite (on retire la section de la tige), la vitesse est plus grande à débit égal.</p>\n<p>Dans une transmission par engrenages, courroie ou chaîne, le <strong>rapport de transmission</strong> relie les fréquences de rotation d'entrée et de sortie. Pour un train simple d'engrenages : N sortie ÷ N entrée = Z menant ÷ Z mené, Z étant les nombres de dents.</p>"
      },
      {
       "titre": "Les actions mécaniques et le moment d'une force",
       "contenu": "<p>Une <strong>action mécanique</strong> est toute cause capable de déplacer ou de déformer un solide : poids, effort d'un vérin, réaction du sol, tension d'une courroie. On la modélise par une <strong>force</strong> définie par son point d'application, sa direction, son sens et son intensité en newtons (N). Le poids d'une masse m vaut P = m × g, avec g ≈ 9,81 m/s² ; une masse de 1 000 kg pèse donc environ 9 810 N.</p>\n<p>Une force qui ne passe pas par un axe tend à faire tourner le solide autour de cet axe. Cet effet est mesuré par le <strong>moment</strong> : M = F × d, où d est le <strong>bras de levier</strong>, distance perpendiculaire entre l'axe et la ligne d'action de la force. Le moment s'exprime en N·m.</p>\n<p>Le moment explique la stabilité des matériels de levage : une charge portée loin en avant crée un moment de basculement autour de l'axe des roues avant, compensé par le moment du poids du matériel et de son contrepoids situés en arrière. C'est aussi le principe du couple de serrage : 100 N appliqués à 0,5 m de l'axe d'une vis donnent 50 N·m.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'ajout d'une rallonge sur une clé pour « gagner de la force » augmente le bras de levier et donc le couple appliqué. Sur une clé dynamométrique, c'est interdit : le couple réellement appliqué n'est plus celui qui est affiché.</div>"
      },
      {
       "titre": "Le principe fondamental de la statique",
       "contenu": "<p>Un solide en <strong>équilibre</strong> (immobile ou en mouvement uniforme) vérifie le <strong>principe fondamental de la statique</strong> : la somme des forces qui s'exercent sur lui est nulle, et la somme de leurs moments par rapport à n'importe quel point est nulle.</p>\n<p>Ce principe permet de calculer un effort inconnu. Exemple simplifié : un bras de relevage articulé en O est actionné par un vérin qui pousse verticalement en A, à 0,20 m de O ; l'outil exerce une charge verticale de 12 000 N en B, à 0,80 m de O. L'équilibre des moments autour de O donne : F vérin × 0,20 = 12 000 × 0,80, soit F vérin = 48 000 N. Le vérin doit fournir quatre fois la charge, parce qu'il agit avec un bras de levier quatre fois plus court.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> résoudre un problème de statique plane : 1) isoler le solide étudié et le dessiner seul ; 2) faire le bilan des actions extérieures (connues et inconnues) ; 3) choisir le point de calcul des moments sur la ligne d'action d'une inconnue pour l'éliminer ; 4) écrire l'équation des moments, en respectant le signe (sens horaire ou anti-horaire) ; 5) écrire les équations des forces selon x et y ; 6) résoudre et vérifier l'ordre de grandeur. Cette démarche suffit pour la plupart des leviers, palonniers et équipements articulés.</div>\n<p>Un solide soumis à <strong>deux forces</strong> seulement est en équilibre si ces forces sont directement opposées : c'est le cas d'un vérin ou d'une biellette articulés à leurs deux extrémités, dont l'effort est toujours dirigé selon la droite qui joint ses deux articulations.</p>"
      },
      {
       "titre": "Dynamique : pourquoi les matériels freinent et basculent",
       "contenu": "<p>Lorsque la vitesse varie, il faut appliquer le <strong>principe fondamental de la dynamique</strong> : la somme des forces vaut m × a, a étant l'accélération en m/s². Un engin de 12 tonnes qui passe de 36 km/h (10 m/s) à l'arrêt en 4 s subit une décélération de 2,5 m/s² ; l'effort de freinage nécessaire est de 12 000 × 2,5 = 30 000 N.</p>\n<p>En rotation, l'équivalent de la masse est le <strong>moment d'inertie</strong> : un batteur, un volant moteur, un rotor de broyeur emmagasinent une énergie cinétique importante et continuent de tourner après coupure de l'entraînement. C'est pourquoi les machines dangereuses comportent des freins de rotor et des dispositifs qui interdisent l'ouverture d'un carter avant l'arrêt complet.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'énergie cinétique croît avec le carré de la vitesse. Doubler la vitesse de déplacement d'un matériel multiplie par quatre l'énergie que les freins doivent absorber et allonge fortement la distance d'arrêt. Lors des essais après réparation des freins, on monte progressivement en vitesse.</div>"
      },
      {
       "titre": "Résistance des matériaux : sollicitations et dégradations",
       "contenu": "<p>Une pièce soumise à des efforts subit des <strong>contraintes</strong> internes. Selon la façon dont elle est chargée, on parle de sollicitation simple :</p>\n<table>\n<thead><tr><th>Sollicitation</th><th>Situation</th><th>Exemple</th><th>Dégradation typique</th></tr></thead>\n<tbody>\n<tr><td>Traction / compression</td><td>Efforts selon l'axe de la pièce</td><td>Tige de vérin, vis serrée</td><td>Allongement, flambage d'une tige longue en compression</td></tr>\n<tr><td>Cisaillement</td><td>Efforts opposés dans un même plan</td><td>Axe d'articulation, goupille, clavette</td><td>Axe cisaillé, goupille « matée »</td></tr>\n<tr><td>Flexion</td><td>Efforts perpendiculaires à la pièce</td><td>Bras de chargeur, lame, essieu</td><td>Fissure côté tendu, déformation</td></tr>\n<tr><td>Torsion</td><td>Couple autour de l'axe</td><td>Arbre de transmission, cardan</td><td>Rupture hélicoïdale à 45°, cannelures vrillées</td></tr>\n</tbody>\n</table>\n<p>La contrainte normale vaut σ = F ÷ S (en MPa si F en N et S en mm²). Une tige de 40 mm de diamètre (S ≈ 1 257 mm²) tirée par 100 000 N subit environ 80 MPa, valeur à comparer à la limite élastique du matériau divisée par un <strong>coefficient de sécurité</strong>.</p>\n<p>Les pièces de sécurité utilisent volontairement une section affaiblie pour casser en premier : <strong>boulon de cisaillement</strong> sur une transmission de prise de force, <strong>fusible mécanique</strong> sur un rotor. Remplacer un boulon de cisaillement par une vis plus résistante supprime la protection et reporte la casse sur une pièce coûteuse.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les fissures de fatigue naissent presque toujours là où la contrainte est concentrée : angles vifs, trous, cordons de soudure, changements brusques de section. Ce sont ces zones que l'on inspecte en priorité sur un châssis ou une flèche.</div>"
      }
     ],
     "points_cles": [
      "Une classe d'équivalence regroupe les pièces sans mouvement relatif ; une liaison se nomme par les mouvements qu'elle autorise.",
      "Le schéma cinématique montre le fonctionnement sans la forme des pièces.",
      "ω = 2π × N ÷ 60 et v = ω × R relient fréquence de rotation et vitesse linéaire.",
      "La vitesse d'un vérin vaut Q ÷ S ; elle est plus grande en rentrée à débit égal.",
      "Moment d'une force : M = F × d, avec d le bras de levier perpendiculaire.",
      "À l'équilibre, somme des forces et somme des moments sont nulles.",
      "Un solide soumis à deux forces les reçoit selon la droite qui joint leurs points d'application.",
      "L'énergie cinétique croît avec le carré de la vitesse.",
      "Les fissures de fatigue naissent aux concentrations de contraintes ; les pièces fusibles ne se renforcent jamais."
     ],
     "lexique": [
      {
       "terme": "Classe d'équivalence",
       "def": "Ensemble de pièces sans mouvement relatif les unes par rapport aux autres."
      },
      {
       "terme": "Degré de liberté",
       "def": "Mouvement élémentaire (translation ou rotation) possible entre deux solides."
      },
      {
       "terme": "Liaison pivot glissant",
       "def": "Liaison qui autorise une rotation et une translation selon le même axe."
      },
      {
       "terme": "Schéma cinématique",
       "def": "Représentation d'un mécanisme par les symboles normalisés de ses liaisons."
      },
      {
       "terme": "Vitesse angulaire",
       "def": "Vitesse de rotation exprimée en radians par seconde."
      },
      {
       "terme": "Moment d'une force",
       "def": "Produit de la force par son bras de levier, en N·m ; il mesure l'effet de rotation."
      },
      {
       "terme": "Bras de levier",
       "def": "Distance perpendiculaire entre l'axe de rotation et la ligne d'action de la force."
      },
      {
       "terme": "Moment d'inertie",
       "def": "Grandeur qui caractérise la résistance d'un solide en rotation aux variations de vitesse."
      },
      {
       "terme": "Contrainte",
       "def": "Effort intérieur rapporté à la surface sur laquelle il s'exerce, en MPa."
      },
      {
       "terme": "Coefficient de sécurité",
       "def": "Rapport entre la limite du matériau et la contrainte admise en service."
      },
      {
       "terme": "Boulon de cisaillement",
       "def": "Élément fusible conçu pour se rompre en cas de surcharge et protéger la transmission."
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
     "id": "bmm-energie-puissance",
     "titre": "Énergie, puissance, rendement et stockage de l'énergie",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Distinguer énergie et puissance et utiliser les unités adaptées",
      "Calculer une puissance mécanique, hydraulique et électrique",
      "Calculer le rendement global d'une chaîne de transmission",
      "Décrire les modes de stockage de l'énergie sur un matériel et leurs dangers",
      "Exploiter une courbe caractéristique de moteur pour justifier un comportement"
     ],
     "sections": [
      {
       "titre": "Énergie et puissance : deux grandeurs à ne pas confondre",
       "contenu": "<p>L'<strong>énergie</strong> est la capacité à produire un travail ; elle s'exprime en joules (J), mais aussi en kilowattheures (kWh) pour l'électricité : 1 kWh = 3 600 000 J. La <strong>puissance</strong> est la quantité d'énergie transférée par unité de temps : P = E ÷ t, en watts (W), un watt valant un joule par seconde.</p>\n<p>Sur un matériel, l'énergie dit « combien » de travail on peut fournir (contenu d'un réservoir, d'une batterie), la puissance dit « à quel rythme » (capacité du moteur à fournir ce travail rapidement). Un robot de tonte et une tondeuse autoportée peuvent tondre la même surface (même énergie utile) ; la seconde le fait beaucoup plus vite parce qu'elle est plus puissante.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Symbole</th><th>Unité</th><th>Ordre de grandeur</th></tr></thead>\n<tbody>\n<tr><td>Énergie contenue dans 1 L de gazole</td><td>E</td><td>kWh</td><td>environ 10 kWh</td></tr>\n<tr><td>Énergie d'une batterie de robot de tonte</td><td>E</td><td>Wh</td><td>de quelques dizaines à quelques centaines de Wh</td></tr>\n<tr><td>Puissance d'un taille-haie électrique</td><td>P</td><td>W</td><td>quelques centaines de W</td></tr>\n<tr><td>Puissance d'un tracteur de grande culture</td><td>P</td><td>kW</td><td>100 à 300 kW</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le cheval-vapeur (ch) apparaît encore dans les documents commerciaux : 1 ch ≈ 0,736 kW. Les documents techniques et réglementaires utilisent le kilowatt ; toujours convertir avant de comparer.</div>"
      },
      {
       "titre": "Calculer une puissance selon la forme d'énergie",
       "contenu": "<p>La puissance se calcule toujours comme le produit d'une grandeur « effort » par une grandeur « flux ».</p>\n<table>\n<thead><tr><th>Forme</th><th>Formule</th><th>Unités</th></tr></thead>\n<tbody>\n<tr><td>Mécanique en translation</td><td>P = F × v</td><td>W, N, m/s</td></tr>\n<tr><td>Mécanique en rotation</td><td>P = C × ω</td><td>W, N·m, rad/s</td></tr>\n<tr><td>Hydraulique</td><td>P = p × Q</td><td>W, Pa, m³/s (formule pratique : P en kW = p en bar × Q en L/min ÷ 600)</td></tr>\n<tr><td>Électrique continue</td><td>P = U × I</td><td>W, V, A</td></tr>\n</tbody>\n</table>\n<p>La formule pratique en rotation, très utilisée avec les courbes moteur, est : P (kW) = C (N·m) × N (tr/min) ÷ 9 549.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> puissance hydraulique disponible sur une pelle. Données : pompe délivrant 220 L/min sous 300 bar. 1) Vérifier les unités pratiques : bar et L/min. 2) P = 300 × 220 ÷ 600 = 110 kW. 3) Comparer à la puissance du moteur thermique (par exemple 120 kW) : la pompe ne peut absorber cette puissance qu'en tenant compte de son rendement ; un régulateur de puissance réduit le débit quand la pression monte pour ne pas faire caler le moteur. 4) Conclusion : à 350 bar, la pompe ne pourra plus fournir 220 L/min, ce qui est un fonctionnement normal et non une panne.</div>"
      },
      {
       "titre": "Le rendement d'une chaîne d'énergie",
       "contenu": "<p>Aucun composant ne transmet toute l'énergie qu'il reçoit : une partie est perdue, le plus souvent sous forme de chaleur (frottements, fuites internes, effet Joule). Le <strong>rendement</strong> η est le rapport de la puissance utile à la puissance absorbée : η = P utile ÷ P absorbée. Il est toujours inférieur à 1 (ou 100 %).</p>\n<p>Dans une chaîne de composants en série, le <strong>rendement global</strong> est le produit des rendements : η global = η1 × η2 × η3… Les pertes s'additionnent donc vite.</p>\n<table>\n<thead><tr><th>Composant</th><th>Rendement typique</th></tr></thead>\n<tbody>\n<tr><td>Moteur diesel (de l'énergie du carburant au vilebrequin)</td><td>35 à 45 %</td></tr>\n<tr><td>Moteur électrique</td><td>85 à 95 %</td></tr>\n<tr><td>Engrenage cylindrique (un étage)</td><td>environ 97 à 99 %</td></tr>\n<tr><td>Pompe ou moteur hydraulique à pistons</td><td>environ 85 à 92 %</td></tr>\n<tr><td>Transmission par courroie trapézoïdale</td><td>environ 90 à 95 %</td></tr>\n</tbody>\n</table>\n<p>Une transmission hydrostatique (pompe puis moteur hydraulique, chacun à 0,88) a un rendement d'environ 0,88 × 0,88 ≈ 0,77, sans compter les pertes de charge : près d'un quart de la puissance part en chaleur, ce qui justifie la présence d'un refroidisseur d'huile.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> toute puissance perdue devient de la chaleur. Un échauffement anormal d'un organe (pompe, boîte, frein) révèle une perte anormale : fuite interne, frottement, patinage, frein qui traîne. Le thermomètre infrarouge est un outil de diagnostic à part entière.</div>"
      },
      {
       "titre": "Courbes caractéristiques d'un moteur thermique",
       "contenu": "<p>Les constructeurs publient les <strong>courbes caractéristiques</strong> du moteur, relevées au banc à pleine charge, en fonction de la fréquence de rotation : couple, puissance et <strong>consommation spécifique</strong> (en g/kWh, quantité de carburant consommée pour produire 1 kWh).</p>\n<p>Leur lecture permet de comprendre le comportement du matériel :</p>\n<ul>\n<li>la <strong>réserve de couple</strong> est l'augmentation du couple quand le régime baisse sous la charge, entre le régime nominal et le régime de couple maximal ; une forte réserve permet au moteur de « tenir » une surcharge passagère sans caler ni changer de rapport ;</li>\n<li>la <strong>plage de puissance constante</strong>, proposée par beaucoup de moteurs de tracteurs, maintient une puissance proche du maximum sur une large plage de régime ;</li>\n<li>la zone de <strong>consommation spécifique minimale</strong> se situe généralement à régime intermédiaire et forte charge ; c'est là que l'on cherche à faire travailler le moteur pour économiser le carburant.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une réserve de couple à partir des courbes. Données lues : couple au régime nominal (2 100 tr/min) : 620 N·m ; couple maximal (1 500 tr/min) : 800 N·m. 1) Réserve = (C max − C nominal) ÷ C nominal × 100. 2) Réserve = (800 − 620) ÷ 620 × 100 ≈ 29 %. 3) Vérification de la puissance nominale : P = 620 × 2 100 ÷ 9 549 ≈ 136 kW. 4) Conclusion : moteur à bonne réserve de couple, adapté aux travaux de traction à charge variable.</div>"
      },
      {
       "titre": "Stocker l'énergie : carburants, batteries, accumulateurs, ressorts",
       "contenu": "<p>Un matériel stocke l'énergie sous plusieurs formes :</p>\n<ul>\n<li><strong>chimique</strong> : gazole non routier, essence, mélange deux-temps, gaz (chariots au GPL), hydrogène sur quelques prototypes ;</li>\n<li><strong>électrochimique</strong> : batteries au plomb (démarrage, chariots de manutention), batteries lithium-ion (outils portatifs, robots, chariots, petits engins électriques) ;</li>\n<li><strong>hydraulique</strong> : <strong>accumulateurs</strong> à vessie, à membrane ou à piston, qui stockent de l'huile sous pression contre un volume d'azote (freins, suspensions, amortissement de chocs, commandes de secours) ;</li>\n<li><strong>mécanique</strong> : ressorts comprimés (ressorts de frein de parking à manque de pression, ressorts de tension de chenille), volants d'inertie, charges levées (énergie potentielle).</li>\n</ul>\n<p>La capacité d'une batterie s'exprime en ampères-heures (Ah) ; son énergie vaut approximativement E (Wh) = U (V) × capacité (Ah). Une batterie de 24 V et 500 Ah de chariot élévateur stocke environ 12 000 Wh, soit 12 kWh.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> toute énergie stockée est un danger potentiel lors d'une intervention. Une flèche levée peut redescendre, un accumulateur peut projeter de l'huile à haute pression, un ressort de frein libère une force de plusieurs tonnes au démontage, une batterie lithium endommagée peut s'enflammer. La <strong>consignation</strong> des énergies (mise en sécurité de chaque forme d'énergie) précède toute intervention.</div>"
      },
      {
       "titre": "Énergie potentielle, énergie cinétique et travail",
       "contenu": "<p>Deux formes d'énergie mécanique sont omniprésentes sur les matériels. L'<strong>énergie potentielle de pesanteur</strong> d'une charge levée vaut Ep = m × g × h (en J, avec m en kg, g ≈ 9,81 m/s² et h en m). L'<strong>énergie cinétique</strong> d'une masse en mouvement vaut Ec = ½ × m × v² (v en m/s).</p>\n<p>Le <strong>travail</strong> d'une force constante qui déplace son point d'application dans sa direction vaut W = F × d. C'est ce travail que fournit un vérin qui soulève une charge, ou que dissipent les freins pour arrêter un engin.</p>\n<p>Ces calculs donnent des ordres de grandeur utiles. Une palette de 1 200 kg levée à 4 m par un chariot possède une énergie potentielle d'environ 1 200 × 9,81 × 4 ≈ 47 000 J. Si le mât monte en 10 s, la puissance utile de levage est de 4,7 kW ; avec un rendement global de 0,6 entre batterie et fourches, la batterie doit fournir près de 8 kW pendant la levée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> énergie à dissiper au freinage. Données : tracteur et remorque de 18 t roulant à 40 km/h. 1) Convertir la vitesse : 40 ÷ 3,6 ≈ 11,1 m/s. 2) Ec = 0,5 × 18 000 × 11,1² ≈ 1 109 000 J, soit environ 1,1 MJ. 3) Cette énergie est transformée en chaleur dans les freins à chaque arrêt complet. 4) Conclusion : des freinages répétés en descente échauffent fortement les freins ; c'est pourquoi la remorque doit freiner sa propre masse et pourquoi un frein qui traîne se détecte à sa température.</div>"
      },
      {
       "titre": "Récupérer et économiser l'énergie",
       "contenu": "<p>Les constructeurs cherchent à réduire la consommation pour des raisons de coût d'exploitation et d'émissions de dioxyde de carbone. Les solutions rencontrées en maintenance sont :</p>\n<ul>\n<li>la gestion du régime moteur : ralenti automatique après quelques secondes sans action, modes « éco » qui limitent le régime, arrêt automatique moteur ;</li>\n<li>l'hydraulique à <strong>détection de charge</strong> qui ne fournit que le débit et la pression nécessaires, au lieu de faire circuler en permanence un débit maximal ;</li>\n<li>la <strong>récupération d'énergie</strong> : régénération de la descente de flèche ou de la rotation de tourelle sur certaines pelles hybrides, freinage récupératif des chariots électriques ;</li>\n<li>les transmissions à variation continue, qui maintiennent le moteur dans sa zone de meilleur rendement ;</li>\n<li>l'électrification des matériels légers (outils d'espaces verts, chariots, mini-pelles), qui supprime les pertes au ralenti.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les systèmes de télématique remontent la consommation horaire, le temps passé au ralenti et le facteur de charge moteur. Un technicien qui constate 40 % de temps au ralenti peut conseiller le client sur le paramétrage du ralenti automatique, ce qui fait partie du conseil attendu lors de la restitution du matériel.</div>"
      }
     ],
     "points_cles": [
      "L'énergie (J, kWh) mesure une quantité ; la puissance (W, kW) mesure un rythme : P = E ÷ t.",
      "Puissance = effort × flux : F × v, C × ω, p × Q, U × I.",
      "Formules pratiques : P (kW) = C × N ÷ 9 549 et P (kW) = p (bar) × Q (L/min) ÷ 600.",
      "Le rendement global d'une chaîne est le produit des rendements de ses composants.",
      "Toute puissance perdue se transforme en chaleur : un échauffement anormal signale une perte anormale.",
      "La réserve de couple permet au moteur d'encaisser une surcharge sans caler.",
      "L'énergie d'une batterie vaut environ U × capacité.",
      "Charges levées, accumulateurs, ressorts et batteries sont des énergies à consigner avant d'intervenir."
     ],
     "lexique": [
      {
       "terme": "Énergie",
       "def": "Capacité à produire un travail, exprimée en joules ou en kilowattheures."
      },
      {
       "terme": "Puissance",
       "def": "Énergie transférée par unité de temps, exprimée en watts."
      },
      {
       "terme": "Rendement",
       "def": "Rapport entre la puissance utile et la puissance absorbée par un composant."
      },
      {
       "terme": "Consommation spécifique",
       "def": "Masse de carburant consommée pour produire 1 kWh, en g/kWh."
      },
      {
       "terme": "Réserve de couple",
       "def": "Augmentation relative du couple moteur entre le régime nominal et le régime de couple maximal."
      },
      {
       "terme": "Accumulateur hydraulique",
       "def": "Réservoir qui stocke de l'huile sous pression contre un volume de gaz comprimé."
      },
      {
       "terme": "Capacité d'une batterie",
       "def": "Quantité d'électricité qu'une batterie peut fournir, en ampères-heures."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble des opérations qui mettent en sécurité les énergies d'un matériel avant intervention."
      },
      {
       "terme": "Détection de charge",
       "def": "Principe hydraulique qui adapte débit et pression aux besoins réels des récepteurs."
      }
     ]
    },
    {
     "id": "bmm-moteur-diesel-gestion",
     "titre": "Moteur diesel moderne : injection haute pression, suralimentation et gestion électronique",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Expliquer la combustion par auto-inflammation et ses conséquences sur la conception du moteur",
      "Décrire un circuit d'injection à rampe commune et le rôle de chacun de ses composants",
      "Expliquer le fonctionnement d'un turbocompresseur et d'un refroidisseur d'air de suralimentation",
      "Identifier les entrées et sorties du calculateur moteur",
      "Appliquer les règles de propreté et de sécurité propres à l'injection haute pression"
     ],
     "sections": [
      {
       "titre": "La combustion diesel et ses exigences",
       "contenu": "<p>Le moteur diesel aspire de l'air seul, le comprime fortement (rapport volumétrique de l'ordre de 15 à 18 pour 1 sur les moteurs actuels), ce qui l'échauffe au-delà de la température d'auto-inflammation du gazole. Le carburant est alors <strong>injecté</strong> finement pulvérisé et s'enflamme spontanément. La qualité de la combustion dépend de trois facteurs : la <strong>pression d'injection</strong> (finesse des gouttelettes), le <strong>moment d'injection</strong> (calage par rapport au point mort haut) et la <strong>quantité injectée</strong> (dosage).</p>\n<p>Le cycle à quatre temps, la cylindrée et la notion de couple ont été vus en seconde. Ce qui change sur les moteurs actuels des matériels, c'est que ces trois facteurs ne sont plus fixés mécaniquement : ils sont calculés en permanence par un <strong>calculateur</strong> (ECU, unité de commande électronique) en fonction de la charge, du régime, des températures et des exigences de dépollution.</p>\n<p>Le démarrage à froid est aidé par des <strong>bougies de préchauffage</strong> ou une <strong>grille de réchauffage</strong> de l'air d'admission, pilotées par le calculateur selon la température du liquide de refroidissement.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un diesel moderne, un défaut de performance (manque de puissance, fumée, démarrage difficile) peut venir de la mécanique, du carburant, de l'air, mais aussi d'une information fausse reçue par le calculateur. Le diagnostic doit toujours intégrer la chaîne d'information.</div>"
      },
      {
       "titre": "Le circuit d'injection à rampe commune",
       "contenu": "<p>La plupart des moteurs diesel de matériels récents utilisent l'<strong>injection à rampe commune</strong> (common rail). Le circuit se divise en deux parties.</p>\n<p>Le <strong>circuit basse pression</strong> comprend : le réservoir, une pompe d'alimentation (électrique ou mécanique), le <strong>préfiltre décanteur</strong> qui sépare l'eau, le <strong>filtre principal</strong> à grande finesse et les canalisations de retour. Il fournit à la pompe haute pression un gazole propre, sans eau ni air, sous une légère pression.</p>\n<p>Le <strong>circuit haute pression</strong> comprend :</p>\n<ul>\n<li>la <strong>pompe haute pression</strong>, entraînée par le moteur, équipée d'un <strong>régulateur de débit</strong> (doseur) commandé par le calculateur ;</li>\n<li>la <strong>rampe commune</strong>, tube épais qui stocke le gazole sous haute pression (de l'ordre de 1 600 à plus de 2 000 bar selon les systèmes) et l'amortit ;</li>\n<li>le <strong>capteur de pression de rampe</strong>, qui renseigne le calculateur, et souvent un <strong>limiteur</strong> ou un régulateur de pression ;</li>\n<li>les <strong>injecteurs</strong> électromagnétiques ou piézoélectriques, ouverts par une impulsion électrique dont la durée fixe la quantité injectée.</li>\n</ul>\n<p>La pression étant disponible en permanence dans la rampe, le calculateur peut réaliser plusieurs injections par cycle : une <strong>pré-injection</strong> qui adoucit la combustion (moins de bruit), l'<strong>injection principale</strong>, et des <strong>post-injections</strong> utilisées notamment pour la régénération des filtres à particules.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le gazole sous haute pression peut traverser la peau et provoquer une injection sous-cutanée grave, même sans plaie visible. Ne jamais chercher une fuite avec la main moteur tournant, attendre la chute de pression indiquée par le constructeur avant d'ouvrir un raccord et consulter immédiatement un médecin en cas d'accident.</div>"
      },
      {
       "titre": "Propreté et qualité du carburant",
       "contenu": "<p>Les jeux de fonctionnement d'une pompe haute pression et d'un injecteur se comptent en micromètres. Une particule plus fine qu'un cheveu suffit à rayer un siège d'injecteur, et l'eau détruit le pouvoir lubrifiant du gazole, ce qui grippe les pistons de pompe.</p>\n<p>Les règles de travail sont donc strictes :</p>\n<ul>\n<li>nettoyer l'extérieur des raccords avant ouverture (soufflage, nettoyant) ;</li>\n<li>obturer immédiatement chaque orifice ouvert avec des bouchons neufs et propres ;</li>\n<li>ne jamais réutiliser un tube haute pression déposé si le constructeur l'interdit (les cônes d'étanchéité se déforment au serrage) ;</li>\n<li>respecter le couple de serrage des tubes et des brides d'injecteur ;</li>\n<li>purger le préfiltre décanteur selon le plan d'entretien et après tout stockage prolongé ;</li>\n<li>réamorcer le circuit basse pression avec la pompe d'amorçage, sans actionner le démarreur longuement à sec.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une part importante des pannes d'injection constatées en atelier provient d'un carburant pollué : cuve de ferme mal entretenue, eau de condensation, bactéries se développant à l'interface eau-gazole. Lors de la restitution, le technicien conseille le client sur l'entretien de la cuve de stockage et la purge régulière des décanteurs.</div>"
      },
      {
       "titre": "La suralimentation par turbocompresseur",
       "contenu": "<p>La puissance d'un moteur dépend de la masse d'air qu'il peut brûler. La <strong>suralimentation</strong> augmente cette masse en comprimant l'air avant son entrée dans les cylindres. Le <strong>turbocompresseur</strong> utilise l'énergie des gaz d'échappement : ils entraînent une <strong>turbine</strong> calée sur le même arbre qu'un <strong>compresseur</strong> centrifuge placé sur l'admission. L'arbre tourne à des fréquences de rotation très élevées, de l'ordre de plus de 100 000 tr/min.</p>\n<p>La pression de suralimentation est limitée par une <strong>soupape de décharge</strong> (wastegate) ou par une turbine à <strong>géométrie variable</strong> dont les ailettes orientables sont pilotées par le calculateur. L'air comprimé s'échauffe ; il est refroidi dans un <strong>échangeur air-air</strong> (refroidisseur d'air de suralimentation) avant d'entrer dans le moteur, ce qui augmente sa densité.</p>\n<p>Les causes de défaillance d'un turbocompresseur sont presque toujours extérieures à lui :</p>\n<ul>\n<li>défaut de lubrification (arrêt moteur à chaud sans ralenti, huile dégradée, canalisation obstruée) ;</li>\n<li>ingestion de corps étrangers (filtre à air abîmé, objet oublié dans une durite) ;</li>\n<li>température d'échappement excessive (surcharge, injection défaillante).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> avant de remplacer un turbocompresseur : 1) relever les codes défaut et les valeurs réelles de pression de suralimentation ; 2) contrôler l'étanchéité du circuit d'admission (durites, colliers, échangeur) et l'état du filtre à air ; 3) déposer les durites et contrôler à la main, moteur arrêté, le jeu de l'arbre et l'état des aubes ; 4) rechercher la cause d'une éventuelle défaillance (huile, corps étranger) ; 5) au remontage, amorcer le turbo en huile neuve et nettoyer ou remplacer l'échangeur si des débris y sont passés ; 6) laisser tourner au ralenti avant toute montée en charge.</div>"
      },
      {
       "titre": "Le calculateur moteur : entrées, sorties et stratégies",
       "contenu": "<p>Le <strong>calculateur moteur</strong> reçoit des informations de nombreux capteurs et commande les actionneurs.</p>\n<table>\n<thead><tr><th>Entrées (capteurs)</th><th>Sorties (actionneurs)</th></tr></thead>\n<tbody>\n<tr><td>Régime et position du vilebrequin</td><td>Injecteurs</td></tr>\n<tr><td>Position de l'arbre à cames (repérage du cylindre)</td><td>Régulateur de débit de la pompe haute pression</td></tr>\n<tr><td>Pression de rampe</td><td>Actionneur de turbine à géométrie variable</td></tr>\n<tr><td>Pression et température d'air d'admission</td><td>Vanne de recirculation des gaz d'échappement</td></tr>\n<tr><td>Température du liquide de refroidissement</td><td>Bougies ou grille de préchauffage</td></tr>\n<tr><td>Température du carburant</td><td>Ventilateur piloté</td></tr>\n<tr><td>Position de l'accélérateur (pédale ou manette)</td><td>Dosage de l'agent de réduction des oxydes d'azote</td></tr>\n<tr><td>Capteurs du système de dépollution</td><td>Voyants et messages au tableau de bord</td></tr>\n</tbody>\n</table>\n<p>Le calculateur échange aussi des messages avec les autres calculateurs du matériel (transmission, hydraulique, tableau de bord) par un réseau multiplexé. Il applique des <strong>stratégies de protection</strong> : en cas de surchauffe, de pression d'huile faible ou de défaut de capteur, il réduit la puissance (<strong>mode dégradé</strong>) ou arrête le moteur, et mémorise un code défaut.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un remplacement d'injecteur ou de calculateur exige souvent une opération de <strong>codage</strong> ou de <strong>paramétrage</strong> avec l'outil de diagnostic du constructeur (saisie du code de correction de l'injecteur, téléchargement du logiciel). Sans elle, le moteur peut fumer, cogner ou refuser de démarrer.</div>"
      },
      {
       "titre": "Contrôles et mesures sur un moteur diesel",
       "contenu": "<p>Le diagnostic d'un moteur diesel moderne combine des mesures classiques et la lecture des paramètres du calculateur.</p>\n<table>\n<thead><tr><th>Contrôle</th><th>Outil</th><th>Ce qu'il révèle</th></tr></thead>\n<tbody>\n<tr><td>Pression basse pression d'alimentation, dépression avant filtre</td><td>Manomètre, vacuomètre</td><td>Filtre colmaté, prise d'air, pompe d'alimentation faible</td></tr>\n<tr><td>Débit de retour des injecteurs</td><td>Éprouvettes graduées</td><td>Injecteur fuyard</td></tr>\n<tr><td>Contribution des cylindres, corrections de débit</td><td>Outil de diagnostic</td><td>Injecteur ou cylindre défaillant</td></tr>\n<tr><td>Compression ou test de compression relative</td><td>Compressiomètre, outil de diagnostic</td><td>Usure segments, soupapes</td></tr>\n<tr><td>Pression de suralimentation réelle et consigne</td><td>Outil de diagnostic, manomètre</td><td>Fuite d'admission, turbo défaillant</td></tr>\n<tr><td>Contre-pression d'échappement</td><td>Manomètre</td><td>Filtre à particules colmaté</td></tr>\n<tr><td>Opacité des fumées</td><td>Opacimètre</td><td>Combustion incomplète</td></tr>\n</tbody>\n</table>\n<p>La comparaison entre la <strong>valeur de consigne</strong> calculée par l'ECU et la <strong>valeur réelle</strong> mesurée par le capteur est particulièrement parlante : une pression de rampe réelle qui n'atteint pas sa consigne oriente vers l'alimentation, la pompe ou une fuite interne d'injecteur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les valeurs de référence (pressions, débits de retour, corrections admissibles) sont propres à chaque moteur. Une mesure n'a de sens que comparée à la valeur constructeur, relevée dans les mêmes conditions (régime, température, charge).</div>"
      }
     ],
     "points_cles": [
      "La combustion diesel dépend de la pression, du moment et de la quantité d'injection, tous pilotés par le calculateur.",
      "La rampe commune sépare la production de pression (pompe) et l'injection (injecteurs).",
      "Le circuit basse pression doit fournir un gazole propre, sans eau ni air.",
      "Le gazole sous haute pression peut provoquer une injection sous-cutanée grave.",
      "Le turbocompresseur récupère l'énergie des gaz d'échappement ; ses pannes ont presque toujours une cause extérieure.",
      "Le calculateur applique des modes dégradés et mémorise des codes défaut.",
      "Le remplacement d'un injecteur ou d'un calculateur exige souvent un codage.",
      "Comparer valeur de consigne et valeur réelle oriente le diagnostic."
     ],
     "lexique": [
      {
       "terme": "Auto-inflammation",
       "def": "Inflammation spontanée du carburant au contact de l'air rendu très chaud par la compression."
      },
      {
       "terme": "Rampe commune",
       "def": "Accumulateur de gazole sous haute pression qui alimente tous les injecteurs."
      },
      {
       "terme": "Régulateur de débit",
       "def": "Électrovanne de la pompe haute pression qui dose le gazole admis selon l'ordre du calculateur."
      },
      {
       "terme": "Pré-injection",
       "def": "Petite injection précédant l'injection principale, qui adoucit la combustion."
      },
      {
       "terme": "Préfiltre décanteur",
       "def": "Filtre qui sépare l'eau du gazole et la recueille dans une cuve à purger."
      },
      {
       "terme": "Turbocompresseur",
       "def": "Ensemble turbine-compresseur qui utilise les gaz d'échappement pour comprimer l'air d'admission."
      },
      {
       "terme": "Géométrie variable",
       "def": "Dispositif d'ailettes orientables qui adapte la vitesse des gaz sur la turbine."
      },
      {
       "terme": "Mode dégradé",
       "def": "Fonctionnement à performances réduites imposé par le calculateur pour protéger le moteur."
      },
      {
       "terme": "Codage d'injecteur",
       "def": "Saisie dans le calculateur du code de correction propre à chaque injecteur."
      },
      {
       "terme": "Valeur de consigne",
       "def": "Valeur que le calculateur cherche à obtenir, à comparer à la valeur réelle mesurée."
      }
     ]
    },
    {
     "id": "bmm-depollution",
     "titre": "Dépollution des moteurs des engins mobiles non routiers",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Citer les polluants réglementés et leur origine dans la combustion",
      "Situer le cadre réglementaire européen des émissions des engins mobiles non routiers",
      "Expliquer le fonctionnement de la recirculation des gaz, du catalyseur d'oxydation, du filtre à particules et de la réduction catalytique sélective",
      "Conduire une régénération et un diagnostic simple du post-traitement",
      "Manipuler et stocker l'agent de réduction des oxydes d'azote sans le dégrader"
     ],
     "sections": [
      {
       "titre": "Les polluants et leur origine",
       "contenu": "<p>Une combustion parfaite du gazole ne produirait que du dioxyde de carbone (CO<sub>2</sub>) et de l'eau. En réalité, plusieurs polluants se forment :</p>\n<table>\n<thead><tr><th>Polluant</th><th>Symbole</th><th>Origine</th><th>Effet</th></tr></thead>\n<tbody>\n<tr><td>Monoxyde de carbone</td><td>CO</td><td>Combustion incomplète (manque d'oxygène local)</td><td>Toxique</td></tr>\n<tr><td>Hydrocarbures imbrûlés</td><td>HC</td><td>Carburant non brûlé</td><td>Irritants, certains cancérogènes</td></tr>\n<tr><td>Oxydes d'azote</td><td>NO<sub>x</sub></td><td>Combinaison de l'azote et de l'oxygène de l'air à très haute température</td><td>Irritants respiratoires, pluies acides, ozone</td></tr>\n<tr><td>Particules</td><td>PM</td><td>Suies issues d'une combustion incomplète</td><td>Pénètrent profondément dans les poumons</td></tr>\n</tbody>\n</table>\n<p>Le motoriste fait face à un compromis : une combustion très chaude et très riche en oxygène réduit les particules mais augmente les oxydes d'azote ; une combustion plus froide fait l'inverse. Les systèmes de dépollution traitent ce compromis en agissant à la fois dans le moteur et à l'échappement.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le CO<sub>2</sub> n'est pas un polluant réglementé à l'échappement des engins non routiers au même titre que les quatre autres ; il est directement lié à la quantité de carburant brûlée. On le réduit en consommant moins.</div>"
      },
      {
       "titre": "Le cadre réglementaire européen",
       "contenu": "<p>Les moteurs installés dans les <strong>engins mobiles non routiers</strong> (tracteurs agricoles, engins de chantier, chariots, matériels d'espaces verts thermiques) sont soumis à des limites d'émissions fixées par l'Union européenne. Ces limites ont été durcies par étapes successives, appelées « phases » (Stage en anglais). La phase actuelle, dite <strong>phase V</strong>, est définie par le règlement (UE) 2016/1628 ; elle s'applique aux moteurs mis sur le marché depuis 2019 ou 2020 selon les catégories de puissance.</p>\n<p>La phase V a notamment introduit une limite sur le <strong>nombre</strong> de particules pour une large gamme de puissances, ce qui conduit en pratique à équiper ces moteurs d'un <strong>filtre à particules</strong>. Les tracteurs agricoles relèvent de cette réglementation pour leur moteur, en plus de la réglementation propre à leur réception.</p>\n<p>Le technicien n'a pas à connaître les valeurs limites, mais il doit savoir que :</p>\n<ul>\n<li>le système de dépollution fait partie de la conformité du moteur : sa neutralisation (suppression d'un filtre, d'une vanne, émulateur d'agent réducteur) est interdite ;</li>\n<li>le calculateur surveille l'efficacité du post-traitement et impose une réduction de puissance (<strong>mesures d'incitation</strong> de l'opérateur) en cas de défaut persistant, de réservoir d'agent réducteur vide ou de qualité de produit non conforme ;</li>\n<li>les pièces de rechange doivent respecter la conformité d'origine.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les « solutions » de suppression du filtre à particules ou de la réduction catalytique proposées sur internet sont illégales. Un atelier qui les installe engage sa responsabilité, fait perdre la garantie et met le matériel en non-conformité.</div>"
      },
      {
       "titre": "Agir dans le moteur : la recirculation des gaz d'échappement",
       "contenu": "<p>La <strong>recirculation des gaz d'échappement</strong> (EGR) réinjecte une partie des gaz d'échappement, refroidis dans un échangeur, dans l'admission. Ces gaz, pauvres en oxygène, abaissent la température maximale de combustion et donc la formation des oxydes d'azote. Le débit recirculé est réglé par une <strong>vanne EGR</strong> pilotée par le calculateur, parfois associée à un volet d'admission.</p>\n<p>Les défaillances typiques sont l'encrassement de la vanne et de l'échangeur par les suies, la fuite interne de l'échangeur (liquide de refroidissement qui passe dans l'admission, fumée blanche, baisse de niveau) et le blocage de la vanne, qui provoque fumées noires ou perte de puissance.</p>\n<p>Certains constructeurs de matériels ont fait le choix de limiter ou de supprimer l'EGR en confiant tout le traitement des oxydes d'azote à la réduction catalytique sélective ; d'autres combinent les deux. Il faut donc toujours identifier l'architecture du moteur concerné avant de diagnostiquer.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les matériels qui travaillent souvent au ralenti ou à faible charge (chargeuses de ferme, chariots, tracteurs utilisés pour des tâches légères) encrassent davantage la vanne EGR et le filtre à particules. Le conseil d'utilisation fait partie de la solution.</div>"
      },
      {
       "titre": "Le post-traitement : catalyseur d'oxydation et filtre à particules",
       "contenu": "<p>Dans la ligne d'échappement, les gaz traversent successivement plusieurs éléments.</p>\n<p>Le <strong>catalyseur d'oxydation diesel</strong> (DOC) est un support en nid d'abeilles revêtu de métaux précieux. Il oxyde le CO en CO<sub>2</sub> et les HC en CO<sub>2</sub> et eau. Il produit aussi de la chaleur lorsqu'on y envoie du carburant, ce qui sert à la régénération du filtre.</p>\n<p>Le <strong>filtre à particules</strong> (FAP ou DPF) est une céramique poreuse à canaux alternativement bouchés : les gaz traversent les parois, les suies y restent piégées. Le filtre se colmate progressivement ; le calculateur estime sa charge à partir d'un <strong>capteur de pression différentielle</strong> (écart de pression entre l'entrée et la sortie) et de modèles de calcul.</p>\n<p>La <strong>régénération</strong> brûle les suies accumulées :</p>\n<ul>\n<li><strong>passive</strong> : en travail à forte charge, la température des gaz suffit à brûler une partie des suies en continu ;</li>\n<li><strong>active</strong> : le calculateur élève la température (post-injection, injection de carburant à l'échappement, volet d'admission) pendant une durée limitée ;</li>\n<li><strong>forcée</strong> ou de service : déclenchée à l'arrêt par l'opérateur ou par le technicien avec l'outil de diagnostic, quand la charge est trop élevée.</li>\n</ul>\n<p>Les <strong>cendres</strong> issues des additifs de l'huile ne brûlent pas : elles s'accumulent et imposent un nettoyage ou un échange du filtre à l'intervalle prévu par le constructeur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduire une régénération de service : 1) relever les codes défaut et la charge estimée du filtre ; 2) vérifier que la charge ne dépasse pas le seuil au-delà duquel le constructeur impose une dépose (risque de fissuration par combustion trop violente) ; 3) placer le matériel à l'extérieur, loin de toute matière combustible (paille, herbe sèche), frein serré, sans opérateur à proximité de la sortie d'échappement ; 4) contrôler les niveaux (carburant suffisant, liquide de refroidissement) ; 5) lancer la procédure avec l'outil de diagnostic et la laisser aller à son terme sans couper le moteur ; 6) relever la charge finale et rechercher la cause du colmatage (utilisation, EGR, injecteur, huile non conforme).</div>"
      },
      {
       "titre": "La réduction catalytique sélective et l'agent réducteur",
       "contenu": "<p>La <strong>réduction catalytique sélective</strong> (SCR) transforme les oxydes d'azote en azote et en eau à l'aide d'ammoniac produit à partir d'un <strong>agent réducteur</strong> : une solution aqueuse d'urée à 32,5 %, connue sous l'appellation commerciale AdBlue et normalisée (série ISO 22241).</p>\n<p>Le système comprend : un réservoir dédié (bouchon de couleur bleue), une unité de pompage avec filtre, un <strong>doseur</strong> (injecteur) placé en amont du catalyseur SCR, un mélangeur, le catalyseur, un éventuel catalyseur de nettoyage de l'ammoniac en excès, et des <strong>capteurs de NO<sub>x</sub></strong> et de température qui permettent au calculateur de doser et de vérifier l'efficacité.</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Causes possibles</th></tr></thead>\n<tbody>\n<tr><td>Efficacité SCR insuffisante</td><td>Agent réducteur dilué ou pollué, doseur encrassé ou cristallisé, capteur de NO<sub>x</sub> défaillant, catalyseur dégradé</td></tr>\n<tr><td>Défaut de pression d'agent</td><td>Filtre colmaté, pompe défaillante, conduite gelée ou cristallisée</td></tr>\n<tr><td>Cristaux blancs à l'échappement</td><td>Dosage à trop basse température, doseur fuyard</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'agent réducteur ne supporte aucune pollution : un fond de gazole, d'huile ou d'eau du robinet dans le réservoir ou un bidon mal rincé détruit le catalyseur et le doseur. Il gèle vers −11 °C, se dégrade à la chaleur et corrode certains métaux (cuivre, laiton). On utilise uniquement des contenants et pistolets dédiés.</div>"
      },
      {
       "titre": "Diagnostiquer un défaut de dépollution",
       "contenu": "<p>Un défaut de dépollution se manifeste le plus souvent par un voyant, un message et une réduction de puissance, rarement par un bruit ou une fumée. La démarche suit la chaîne d'information autant que la chaîne d'énergie.</p>\n<ol>\n<li>Lire et noter les codes défaut et leur contexte (date, heures moteur, conditions de fonctionnement).</li>\n<li>Consulter l'historique : régénérations interrompues, remplissages d'agent réducteur, interventions récentes.</li>\n<li>Vérifier les éléments simples : qualité et niveau d'agent réducteur (réfractomètre), étanchéité de la ligne d'échappement en amont des capteurs, état du câblage et des connecteurs exposés à la chaleur.</li>\n<li>Comparer les valeurs réelles des capteurs à des valeurs plausibles : à moteur froid arrêté, toutes les sondes de température doivent indiquer à peu près la température ambiante ; la pression différentielle du filtre doit être proche de zéro.</li>\n<li>Réaliser les tests guidés de l'outil de diagnostic (test de dosage dans une éprouvette, test des capteurs de NO<sub>x</sub>).</li>\n<li>Remonter à la cause première : un filtre à particules colmaté est souvent la conséquence d'un injecteur fuyard, d'une vanne EGR bloquée ou d'une utilisation inadaptée.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur la dépollution, remplacer une pièce coûteuse sans avoir trouvé la cause première conduit presque toujours au retour du matériel. Le compte rendu doit mentionner la cause identifiée et le conseil donné à l'utilisateur.</div>"
      }
     ],
     "points_cles": [
      "Les polluants réglementés sont CO, HC, NOx et particules ; le CO2 se réduit en consommant moins.",
      "La phase V européenne, fixée par le règlement (UE) 2016/1628, conduit à généraliser le filtre à particules.",
      "Neutraliser un système de dépollution est illégal.",
      "L'EGR abaisse la température de combustion pour réduire les NOx.",
      "Le DOC oxyde CO et HC ; le FAP piège les suies, qui sont brûlées par régénération.",
      "Les cendres ne brûlent pas et imposent un nettoyage ou un échange du filtre.",
      "La SCR réduit les NOx grâce à une solution d'urée à 32,5 % très sensible à la pollution.",
      "Un colmatage ou une inefficacité ont souvent une cause première en amont : injection, EGR, utilisation."
     ],
     "lexique": [
      {
       "terme": "Engin mobile non routier",
       "def": "Machine mobile qui n'est pas destinée principalement au transport routier (engin de chantier, tracteur, chariot…)."
      },
      {
       "terme": "Phase V",
       "def": "Étape actuelle des limites européennes d'émissions des moteurs d'engins mobiles non routiers."
      },
      {
       "terme": "EGR",
       "def": "Recirculation d'une partie des gaz d'échappement à l'admission pour réduire les oxydes d'azote."
      },
      {
       "terme": "DOC",
       "def": "Catalyseur d'oxydation diesel, qui transforme CO et HC en CO2 et en eau."
      },
      {
       "terme": "Filtre à particules",
       "def": "Filtre céramique qui retient les suies des gaz d'échappement."
      },
      {
       "terme": "Régénération",
       "def": "Combustion des suies accumulées dans le filtre à particules par élévation de température."
      },
      {
       "terme": "Pression différentielle",
       "def": "Écart de pression entre l'entrée et la sortie d'un filtre, image de son colmatage."
      },
      {
       "terme": "SCR",
       "def": "Réduction catalytique sélective des oxydes d'azote à l'aide d'ammoniac issu de l'urée."
      },
      {
       "terme": "Agent réducteur",
       "def": "Solution aqueuse d'urée à 32,5 % injectée en amont du catalyseur SCR."
      },
      {
       "terme": "Cendres",
       "def": "Résidus incombustibles issus des additifs de l'huile, qui s'accumulent dans le filtre."
      }
     ]
    },
    {
     "id": "bmm-transmissions",
     "titre": "Transmissions de puissance : embrayages, boîtes, ponts et réducteurs",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Calculer un rapport global de transmission et en déduire vitesse et couple aux roues",
      "Décrire les embrayages à disques secs et humides et leur commande",
      "Distinguer boîtes mécaniques, boîtes sous charge, convertisseurs de couple et transmissions à variation continue",
      "Expliquer le rôle du différentiel, de son blocage et des réducteurs finaux",
      "Conduire les contrôles d'une transmission : pressions, patinage, jeux, échauffement"
     ],
     "sections": [
      {
       "titre": "Adapter le couple et la vitesse",
       "contenu": "<p>Le moteur thermique fournit un couple limité dans une plage de régime étroite, alors que le matériel doit pouvoir tracter lourdement à faible vitesse ou circuler vite sur route. La <strong>transmission</strong> adapte le couple et la vitesse entre le moteur et les roues, les chenilles ou les arbres de sortie.</p>\n<p>Le <strong>rapport de transmission</strong> d'un étage est k = N sortie ÷ N entrée. Pour plusieurs étages en série, le rapport global est le produit des rapports. En négligeant les pertes, la puissance se conserve : quand la vitesse est divisée par un nombre, le couple est multiplié par ce même nombre ; avec les pertes, on multiplie en plus par le rendement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> couple et vitesse à la roue d'un tracteur. Données : moteur 2 000 tr/min et 600 N·m ; boîte k1 = 1/4 ; couple conique et différentiel k2 = 1/5 ; réducteur final k3 = 1/6 ; rendement global 0,85 ; rayon sous charge de la roue 0,80 m. 1) Rapport global : k = 1/4 × 1/5 × 1/6 = 1/120. 2) Fréquence de rotation de roue : 2 000 ÷ 120 ≈ 16,7 tr/min. 3) Vitesse : v = 2π × 0,80 × 16,7 ÷ 60 ≈ 1,40 m/s, soit environ 5 km/h. 4) Couple total disponible aux roues : 600 × 120 × 0,85 = 61 200 N·m (réparti entre les deux roues de l'essieu). 5) Effort de traction théorique : 61 200 ÷ 0,80 ≈ 76 500 N, limité en pratique par l'adhérence.</div>\n<p>On remarque que le couple disponible est souvent supérieur à ce que le sol peut transmettre : c'est l'<strong>adhérence</strong> (masse sur les roues motrices, état du sol, pneumatiques) qui limite l'effort de traction. D'où l'intérêt du lestage et de la gestion de la pression des pneumatiques.</p>"
      },
      {
       "titre": "Les embrayages : secs, humides et commandés",
       "contenu": "<p>L'<strong>embrayage</strong> permet d'accoupler et de désaccoupler progressivement deux arbres. Il transmet le couple par frottement entre des disques pressés les uns contre les autres. Le couple transmissible dépend de l'effort presseur, du coefficient de frottement, du rayon moyen des garnitures et du nombre de faces frottantes.</p>\n<ul>\n<li>L'<strong>embrayage à sec</strong> (un ou deux disques, mécanisme à diaphragme ou à ressorts) se rencontre sur des tracteurs simples, des engins anciens et des petits matériels. Il s'use et se règle (garde à la pédale).</li>\n<li>L'<strong>embrayage humide multidisque</strong> baigne dans l'huile qui le refroidit. Il est commandé hydrauliquement par un piston : la pression d'huile serre le paquet de disques, des ressorts le desserrent. C'est la base des boîtes sous charge, des inverseurs hydrauliques, des embrayages de prise de force et des blocages de différentiel.</li>\n<li>L'<strong>embrayage électromagnétique</strong>, utilisé pour l'entraînement des lames de tondeuses autoportées et de certains compresseurs, est serré par un électroaimant.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un embrayage humide qui patine n'est pas forcément usé. Les causes fréquentes sont une pression de commande insuffisante (pompe, filtre, fuite sur un joint tournant), une huile non conforme qui modifie le frottement ou une électrovanne mal pilotée. On mesure la pression d'embrayage avant de déposer quoi que ce soit.</div>"
      },
      {
       "titre": "Boîtes de vitesses et boîtes sous charge",
       "contenu": "<p>La <strong>boîte de vitesses mécanique</strong> à arbres parallèles offre plusieurs rapports par des couples de pignons. Les pignons sont en prise constante et rendus solidaires de leur arbre par des <strong>crabots</strong> ou des <strong>synchroniseurs</strong>, qui égalisent les vitesses avant l'engagement. Elle exige de débrayer pour changer de rapport.</p>\n<p>La <strong>boîte sous charge</strong> (powershift) remplace les crabots par des embrayages humides pilotés : le changement de rapport se fait sans interrompre la transmission du couple, par passage progressif d'un embrayage à l'autre. On parle de <strong>semi-powershift</strong> lorsque seuls certains rapports d'une gamme se passent sous charge, de <strong>full powershift</strong> lorsque tous les rapports le sont. Ces boîtes utilisent aussi des <strong>trains épicycloïdaux</strong>, dont on bloque ou libère des éléments par des freins et embrayages multidisques.</p>\n<p>La qualité des passages dépend d'un <strong>étalonnage</strong> (ou calibration) réalisé avec l'outil de diagnostic : le calculateur apprend les points de remplissage de chaque embrayage. Cet étalonnage est à refaire après une intervention sur la boîte, un remplacement d'électrovanne ou de calculateur, ou lorsque les passages deviennent brutaux.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant d'ouvrir une boîte sous charge, le technicien relève les pressions sur les prises de mesure prévues par le constructeur, rapport par rapport, et les compare au tableau de la documentation. Une chute de pression sur un seul rapport localise le défaut sur l'embrayage ou le circuit de ce rapport.</div>"
      },
      {
       "titre": "Convertisseur de couple et transmissions à variation continue",
       "contenu": "<p>Le <strong>convertisseur de couple</strong>, très utilisé sur les chargeuses, chariots et tombereaux, est un coupleur hydrodynamique à trois éléments : la <strong>pompe</strong> (impulseur) entraînée par le moteur, la <strong>turbine</strong> reliée à la boîte, et le <strong>réacteur</strong> monté sur une roue libre. L'huile projetée par la pompe entraîne la turbine ; le réacteur redirige l'huile et multiplie le couple quand la turbine tourne beaucoup moins vite que la pompe (démarrage, pénétration dans un tas). Le convertisseur absorbe les à-coups et empêche le moteur de caler, mais il chauffe quand le glissement est important ; un <strong>embrayage de pontage</strong> le court-circuite à vitesse stabilisée.</p>\n<p>La <strong>transmission à variation continue</strong> (CVT) des tracteurs associe une partie hydrostatique (pompe et moteur hydrauliques à cylindrée variable) et une partie mécanique, réunies par un train épicycloïdal : c'est une transmission à <strong>dérivation de puissance</strong>. La vitesse varie sans rapport fixe et le calculateur maintient le moteur à son régime optimal. Les transmissions <strong>hydrostatiques</strong> pures, sans partie mécanique, équipent les chargeuses compactes, les automoteurs, les tondeuses autoportées et de nombreux engins.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> plus une transmission fait passer de puissance par l'huile (convertisseur en glissement, hydrostatique), plus elle produit de chaleur. Le circuit de refroidissement de l'huile de transmission (radiateur, thermostat, ventilateur) est un point de contrôle prioritaire en cas de surchauffe.</div>"
      },
      {
       "titre": "Pont, différentiel et réducteurs finaux",
       "contenu": "<p>Le <strong>pont</strong> regroupe le couple conique, qui renvoie le mouvement à 90° et réduit la vitesse, le <strong>différentiel</strong> et les <strong>réducteurs finaux</strong>.</p>\n<p>Le <strong>différentiel</strong> permet aux deux roues d'un même essieu de tourner à des vitesses différentes dans les virages, tout en leur transmettant le même couple. Son inconvénient : si une roue perd l'adhérence, elle patine et l'autre ne reçoit pas plus de couple. Le <strong>blocage de différentiel</strong>, à crabots ou à disques, rend les deux roues solidaires ; il est souvent automatique (désengagé au-delà d'une vitesse ou d'un angle de braquage). Certains ponts avant utilisent un <strong>différentiel à glissement limité</strong>.</p>\n<p>Les <strong>réducteurs finaux</strong> (souvent à train épicycloïdal dans le moyeu de roue) réalisent la dernière réduction au plus près de la roue, ce qui allège les arbres de roue. Ils ont fréquemment leur propre niveau d'huile, à contrôler roue positionnée selon le repère du constructeur.</p>\n<p>Sur les tracteurs, le <strong>pont avant moteur</strong> est entraîné à une vitesse légèrement supérieure à celle du pont arrière (avance du pont avant), ce qui améliore la traction. Des pneumatiques de dimensions non conformes au couple de montes autorisé faussent ce rapport et provoquent usure et échauffement de la transmission.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lever une seule roue d'un essieu moteur et faire tourner la transmission entraîne la roue levée à double vitesse par le différentiel. Toute intervention roue levée se fait moteur arrêté, transmission au neutre, matériel calé.</div>"
      },
      {
       "titre": "Transmissions par cardans, courroies et chaînes",
       "contenu": "<p>Les <strong>arbres à cardans</strong> transmettent le mouvement entre des arbres non alignés. Un joint de cardan simple ne transmet pas une vitesse constante : la vitesse de sortie oscille deux fois par tour. On compense en montant deux joints dont les mâchoires intermédiaires sont dans le <strong>même plan</strong> et dont les angles sont égaux ; sinon, l'arbre vibre et s'use. Le <strong>joint homocinétique</strong> supprime ce défaut pour les grands angles.</p>\n<p>Les <strong>courroies</strong> (trapézoïdales, crantées, à nervures, variateurs) sont très présentes sur les matériels de récolte et d'espaces verts. On contrôle leur <strong>tension</strong> (flèche sous un effort donné ou tendeur automatique), l'alignement des poulies et l'état des flancs. Les <strong>chaînes</strong> à rouleaux se contrôlent à l'allongement, à la tension et à la lubrification.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler l'allongement d'une chaîne à rouleaux : 1) tendre la chaîne en place ; 2) mesurer au pied à coulisse la longueur sur un nombre de pas donné (par exemple 10 pas) ; 3) calculer la longueur théorique (10 × pas nominal ; pour un pas de 19,05 mm, 190,5 mm) ; 4) calculer l'allongement en pourcentage ; 5) comparer à la limite constructeur (de l'ordre de 2 à 3 % selon les applications) ; 6) remplacer chaîne et pignons ensemble si la limite est atteinte, car une chaîne neuve sur des pignons usés s'use très vite.</div>"
      }
     ],
     "points_cles": [
      "Le rapport global est le produit des rapports ; le couple est multiplié quand la vitesse est divisée, aux pertes près.",
      "L'effort de traction est limité par l'adhérence plus que par le couple disponible.",
      "L'embrayage humide multidisque, commandé par pression d'huile, est la base des boîtes sous charge.",
      "Un patinage d'embrayage humide se diagnostique d'abord par la mesure des pressions.",
      "Les boîtes sous charge nécessitent un étalonnage après intervention.",
      "Le convertisseur multiplie le couple en glissement mais produit de la chaleur.",
      "Les CVT de tracteurs sont des transmissions à dérivation de puissance hydro-mécaniques.",
      "Le différentiel répartit le couple de façon égale ; le blocage rend les roues solidaires.",
      "Deux joints de cardan doivent avoir leurs mâchoires intermédiaires dans le même plan."
     ],
     "lexique": [
      {
       "terme": "Rapport de transmission",
       "def": "Rapport entre la fréquence de rotation de sortie et celle d'entrée."
      },
      {
       "terme": "Adhérence",
       "def": "Capacité du contact roue-sol à transmettre un effort sans patiner."
      },
      {
       "terme": "Embrayage humide",
       "def": "Embrayage multidisque fonctionnant dans l'huile, commandé hydrauliquement."
      },
      {
       "terme": "Synchroniseur",
       "def": "Dispositif qui égalise les vitesses d'un pignon et de son arbre avant engagement."
      },
      {
       "terme": "Boîte sous charge",
       "def": "Boîte dont les rapports se changent par embrayages pilotés, sans interrompre le couple."
      },
      {
       "terme": "Train épicycloïdal",
       "def": "Ensemble planétaire, satellites et couronne, dont les rapports dépendent de l'élément bloqué."
      },
      {
       "terme": "Convertisseur de couple",
       "def": "Coupleur hydrodynamique à réacteur qui multiplie le couple en glissement."
      },
      {
       "terme": "Dérivation de puissance",
       "def": "Transmission qui partage la puissance entre une voie mécanique et une voie hydrostatique."
      },
      {
       "terme": "Différentiel",
       "def": "Mécanisme qui permet aux roues d'un essieu de tourner à des vitesses différentes."
      },
      {
       "terme": "Réducteur final",
       "def": "Dernier étage de réduction, souvent épicycloïdal, logé près de la roue."
      },
      {
       "terme": "Joint homocinétique",
       "def": "Joint qui transmet une vitesse de rotation constante quel que soit l'angle."
      }
     ]
    },
    {
     "id": "bmm-hydraulique-puissance",
     "titre": "Hydraulique de puissance : pompes, régulations et circuits",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Calculer débit, cylindrée, pression et puissance dans un circuit hydraulique",
      "Distinguer pompes à cylindrée fixe et variable et leurs régulations",
      "Expliquer le principe des circuits à centre ouvert, à centre fermé et à détection de charge",
      "Décrire une transmission hydrostatique en circuit fermé",
      "Mener les mesures de pression, de débit et de fuite interne en respectant la sécurité"
     ],
     "sections": [
      {
       "titre": "Rappels et grandeurs de calcul",
       "contenu": "<p>Les composants de base d'un circuit (réservoir, pompe, limiteur, distributeur, vérin, moteur hydraulique) et le calcul de la force d'un vérin ont été vus en seconde. On approfondit ici les grandeurs qui permettent de raisonner sur un circuit complet.</p>\n<ul>\n<li>La <strong>cylindrée</strong> d'une pompe ou d'un moteur hydraulique (en cm³/tr) est le volume déplacé par tour.</li>\n<li>Le <strong>débit</strong> d'une pompe vaut Q = Cyl × N × ηv, avec ηv le <strong>rendement volumétrique</strong> qui traduit les fuites internes. En unités pratiques : Q (L/min) = Cyl (cm³/tr) × N (tr/min) ÷ 1 000 × ηv.</li>\n<li>Le <strong>couple</strong> d'un moteur hydraulique vaut C (N·m) ≈ Cyl (cm³/tr) × Δp (bar) ÷ 62,8 × ηm, Δp étant la différence de pression entre entrée et sortie.</li>\n<li>La <strong>puissance hydraulique</strong> vaut P (kW) = p (bar) × Q (L/min) ÷ 600.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôle d'une pompe à engrenages. Données : cylindrée 32 cm³/tr, entraînée à 2 200 tr/min ; débit mesuré au débitmètre : 58 L/min à 180 bar. 1) Débit théorique : 32 × 2 200 ÷ 1 000 = 70,4 L/min. 2) Rendement volumétrique : 58 ÷ 70,4 ≈ 0,82. 3) Comparer à la valeur admise (souvent de l'ordre de 0,90 pour une pompe en bon état, à confirmer dans la documentation). 4) Conclusion : fuites internes excessives, pompe usée ; vérifier d'abord que l'aspiration n'est pas en cause (crépine, viscosité, prise d'air) avant de la remplacer.</div>"
      },
      {
       "titre": "Pompes à cylindrée fixe et variable",
       "contenu": "<p>Les <strong>pompes à cylindrée fixe</strong> (à engrenages extérieurs, à palettes) délivrent un débit proportionnel à leur fréquence de rotation. Simples et robustes, elles équipent les petits engins, les circuits de direction, de freinage ou de pilotage.</p>\n<p>Les <strong>pompes à pistons axiaux à cylindrée variable</strong> (à plateau inclinable) dominent sur les engins et tracteurs modernes. L'angle du plateau fixe la course des pistons, donc la cylindrée. Cet angle est réglé par un piston de commande piloté par une <strong>régulation</strong> :</p>\n<table>\n<thead><tr><th>Régulation</th><th>Principe</th><th>Effet</th></tr></thead>\n<tbody>\n<tr><td>Régulateur de pression</td><td>La cylindrée diminue quand la pression atteint le réglage</td><td>Pression maximale maintenue sans débit inutile</td></tr>\n<tr><td>Détection de charge (load sensing)</td><td>La pompe maintient une pression supérieure d'un écart fixe (le « Δp de veille », souvent de l'ordre de 15 à 30 bar) à la plus forte pression demandée</td><td>Débit ajusté au besoin des récepteurs</td></tr>\n<tr><td>Régulateur de puissance</td><td>Le produit pression × débit est limité</td><td>Le moteur thermique n'est pas surchargé</td></tr>\n<tr><td>Commande électro-proportionnelle</td><td>Le calculateur règle la cylindrée</td><td>Gestion fine, modes de travail</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur une pompe à cylindrée variable, régler la vis de pression maximale sans connaître l'ordre des réglages (Δp de veille, limiteur de pression de la pompe, limiteurs du distributeur) dérègle tout le circuit. On suit strictement la procédure constructeur, manomètres branchés aux prises prévues.</div>"
      },
      {
       "titre": "Centre ouvert, centre fermé et détection de charge",
       "contenu": "<p>L'architecture du circuit détermine son comportement et sa consommation.</p>\n<p>En <strong>centre ouvert</strong>, une pompe à cylindrée fixe débite en permanence ; quand aucun tiroir n'est actionné, l'huile retourne au réservoir à basse pression par le canal central du distributeur. Lorsqu'on actionne un tiroir, le passage central se ferme et la pression monte jusqu'à ce que le récepteur se déplace. Le système est simple mais dissipe de l'énergie : en commande partielle, l'excédent de débit est laminé.</p>\n<p>En <strong>centre fermé à pression constante</strong>, une pompe à cylindrée variable maintient une pression constante dans le circuit et ne débite que ce qui est consommé.</p>\n<p>En <strong>centre fermé à détection de charge</strong>, la plus haute pression demandée par les récepteurs actifs est transmise à la pompe par une ligne de signal (ligne LS) au travers de <strong>clapets navettes</strong>. La pompe adapte sa cylindrée pour que l'écart de pression aux bornes du tiroir reste constant : la vitesse du récepteur ne dépend alors que de l'ouverture du tiroir, et non de la charge. Des <strong>compensateurs de pression</strong> sur chaque élément permettent de faire travailler plusieurs fonctions simultanément ; dans les systèmes à partage de débit, toutes les fonctions ralentissent proportionnellement quand la pompe est à saturation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un système à détection de charge, une pression de veille trop élevée moteur au ralenti, sans aucune commande, oriente vers une ligne de signal bloquée sous pression ou une régulation de pompe déréglée ; une incapacité à monter en pression oriente vers une fuite de la ligne de signal ou un compensateur bloqué.</div>"
      },
      {
       "titre": "Distributeurs, limiteurs et valves de maintien de charge",
       "contenu": "<p>Les <strong>distributeurs</strong> des matériels sont souvent des blocs d'éléments empilés ou monoblocs, à commande manuelle, hydraulique pilotée (par des manipulateurs à pression proportionnelle) ou électrique proportionnelle. Chaque élément peut recevoir des <strong>limiteurs secondaires</strong> (ou limiteurs de chocs) qui protègent un récepteur contre les surpressions venues de l'extérieur, et des <strong>clapets anti-cavitation</strong>.</p>\n<p>Les <strong>valves de maintien de charge</strong> (clapets pilotés, valves d'équilibrage dites « over-center ») sont montées au plus près des vérins de levage. Elles empêchent la descente de la charge en cas de rupture de flexible et contrôlent la vitesse de descente. Elles sont imposées sur les matériels utilisés pour le levage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une valve d'équilibrage ou un clapet piloté retient la pression dans le vérin même quand tout le circuit est décompressé. Débrancher un flexible entre la valve et le vérin, ou démonter la valve, sans avoir posé la charge au sol et suivi la procédure de décompression, peut provoquer une chute de la charge ou un jet d'huile sous pression.</div>"
      },
      {
       "titre": "Transmissions hydrostatiques en circuit fermé",
       "contenu": "<p>Dans une <strong>transmission hydrostatique</strong> de translation, une pompe à cylindrée variable réversible alimente un ou plusieurs moteurs hydrauliques en <strong>circuit fermé</strong> : l'huile qui sort du moteur retourne directement à l'aspiration de la pompe, sans passer par le réservoir. Le sens et la vitesse de marche dépendent du sens et de l'amplitude d'inclinaison du plateau de la pompe.</p>\n<p>Ce circuit comprend :</p>\n<ul>\n<li>une <strong>pompe de gavage</strong> qui compense les fuites internes, refroidit en renouvelant l'huile et alimente les commandes ; sa pression (de l'ordre de 20 à 30 bar) est la première mesure à faire ;</li>\n<li>des <strong>clapets de gavage</strong> et des <strong>limiteurs haute pression</strong> pour chaque sens de marche ;</li>\n<li>une <strong>valve de balayage</strong> (ou d'échange) qui prélève un peu d'huile chaude sur la branche basse pression pour l'envoyer au refroidisseur ;</li>\n<li>souvent des moteurs à <strong>deux cylindrées</strong> (petite vitesse et grande vitesse) et une valve de <strong>remorquage</strong> (by-pass).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un engin hydrostatique qui « perd de la force à chaud » souffre presque toujours de fuites internes excessives (pompe, moteurs, limiteurs) ou d'une pression de gavage insuffisante. La mesure du débit de drain des carters, comparée à la valeur constructeur, permet de désigner le composant usé sans le déposer.</div>"
      },
      {
       "titre": "Mesures, propreté et sécurité sur un circuit",
       "contenu": "<p>Le diagnostic hydraulique repose sur des mesures réalisées aux <strong>prises de pression</strong> (raccords minimess) avec des manomètres de calibre adapté ou une valise de mesure électronique, et sur des <strong>débitmètres</strong> à charge réglable montés en série.</p>\n<ul>\n<li><strong>Pression</strong> : pression de veille, de gavage, de pilotage, pressions maximales des limiteurs.</li>\n<li><strong>Débit</strong> : débit de pompe à différentes pressions, débit de drain.</li>\n<li><strong>Température</strong> : toutes les mesures se font huile à température de fonctionnement (souvent 50 °C), car la viscosité modifie les fuites.</li>\n<li><strong>Temps de cycle</strong> : temps de levée, de rotation, de cavage, comparés au tableau du constructeur.</li>\n<li><strong>Dérive</strong> : descente d'une charge immobile en un temps donné, qui révèle une fuite interne de vérin ou de distributeur.</li>\n</ul>\n<p>La <strong>propreté</strong> de l'huile conditionne la durée de vie des composants. Elle s'exprime par une <strong>classe de pollution</strong> (codes ISO 4406) obtenue par comptage de particules ; les composants à pistons et les électrovannes proportionnelles exigent une huile très propre. Toute intervention se termine par le remplacement des filtres concernés et, si le circuit a été pollué (pompe détruite), par un rinçage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> intervention en sécurité sur un circuit hydraulique : 1) poser les équipements au sol ou les caler mécaniquement (béquille de vérin, chandelles) ; 2) arrêter le moteur, retirer la clé, consigner ; 3) décomprimer le circuit selon la procédure (manœuvre des commandes, contact mis si les commandes sont électriques, décompression des accumulateurs et du réservoir pressurisé) ; 4) nettoyer l'extérieur avant toute ouverture ; 5) obturer les orifices ; 6) au remontage, purger l'air, vérifier le niveau, contrôler l'étanchéité sans jamais passer la main sur une fuite.</div>"
      }
     ],
     "points_cles": [
      "Q (L/min) = Cyl (cm³/tr) × N ÷ 1 000 × ηv ; P (kW) = p (bar) × Q (L/min) ÷ 600.",
      "Le rendement volumétrique traduit les fuites internes et l'usure d'une pompe.",
      "Les pompes à cylindrée variable sont régulées en pression, en détection de charge, en puissance ou électroniquement.",
      "En détection de charge, la pompe maintient un écart constant au-dessus de la plus forte pression demandée.",
      "Les valves de maintien de charge conservent la pression dans le vérin même circuit décompressé.",
      "Une transmission hydrostatique en circuit fermé dépend de la pression de gavage et du refroidissement.",
      "Les mesures se font huile chaude, aux prises prévues, et se comparent aux valeurs constructeur.",
      "La propreté de l'huile se mesure par une classe de pollution ; filtres et rinçage terminent toute intervention."
     ],
     "lexique": [
      {
       "terme": "Cylindrée",
       "def": "Volume d'huile déplacé par une pompe ou absorbé par un moteur hydraulique en un tour."
      },
      {
       "terme": "Rendement volumétrique",
       "def": "Rapport entre le débit réel et le débit théorique, image des fuites internes."
      },
      {
       "terme": "Détection de charge",
       "def": "Régulation qui adapte le débit de la pompe à la pression la plus élevée demandée, plus un écart constant."
      },
      {
       "terme": "Pression de veille",
       "def": "Pression maintenue par la pompe quand aucune fonction n'est actionnée."
      },
      {
       "terme": "Clapet navette",
       "def": "Clapet qui sélectionne la plus haute de deux pressions."
      },
      {
       "terme": "Compensateur de pression",
       "def": "Valve qui maintient constant l'écart de pression aux bornes d'un tiroir."
      },
      {
       "terme": "Valve d'équilibrage",
       "def": "Valve de maintien de charge qui contrôle la descente d'un récepteur chargé."
      },
      {
       "terme": "Circuit fermé",
       "def": "Circuit où l'huile revient directement du moteur hydraulique à la pompe sans passer par le réservoir."
      },
      {
       "terme": "Pompe de gavage",
       "def": "Pompe auxiliaire qui compense les fuites et alimente la branche basse pression d'un circuit fermé."
      },
      {
       "terme": "Débit de drain",
       "def": "Débit de fuite interne évacué par le carter d'une pompe ou d'un moteur."
      },
      {
       "terme": "Classe de pollution",
       "def": "Code qui caractérise le nombre de particules par taille dans un échantillon d'huile."
      }
     ]
    },
    {
     "id": "bmm-energie-electrique",
     "titre": "Énergie électrique embarquée : batteries, charge, démarrage et actionneurs",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Contrôler une batterie au plomb et interpréter tension, test de charge et densité",
      "Expliquer le fonctionnement du circuit de charge et du circuit de démarrage",
      "Mesurer une chute de tension et en déduire une résistance parasite",
      "Décrire les actionneurs électriques courants : moteurs, électrovannes, relais",
      "Connaître les règles d'intervention sur les matériels électriques et à batterie lithium"
     ],
     "sections": [
      {
       "titre": "Le réseau électrique d'un matériel",
       "contenu": "<p>Les matériels thermiques disposent d'un réseau de bord en <strong>12 V</strong> (tracteurs, petits engins, matériels d'espaces verts) ou en <strong>24 V</strong> (grands engins de chantier, certains matériels de récolte). Ce réseau est alimenté par une ou plusieurs <strong>batteries</strong> et rechargé par un <strong>alternateur</strong>. Les matériels électriques (chariots, mini-pelles, robots, outils portatifs) utilisent des batteries de traction de tension plus élevée : 24 V, 48 V, 80 V, voire davantage.</p>\n<p>Les grandeurs, la loi d'Ohm et l'usage du multimètre ont été vus en seconde. On s'intéresse ici aux circuits de puissance : stockage, charge, démarrage et actionneurs, qui sont la source de nombreuses pannes.</p>\n<p>Deux batteries de 12 V montées en <strong>série</strong> donnent 24 V avec la même capacité ; montées en <strong>parallèle</strong>, elles donnent 12 V avec une capacité doublée. Un engin en 24 V peut ainsi être équipé de deux batteries de 12 V en série.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un engin à deux batteries en série, démarrer avec un chargeur ou une batterie de secours en 12 V branchés sur une seule batterie, ou inverser les polarités, peut détruire des calculateurs. On respecte la procédure de démarrage de secours du constructeur et l'ordre de branchement des câbles.</div>"
      },
      {
       "titre": "La batterie au plomb : constitution et contrôle",
       "contenu": "<p>Une batterie au plomb de 12 V comporte six éléments de 2,1 V environ en série. Ses caractéristiques figurent sur l'étiquette : <strong>tension nominale</strong>, <strong>capacité</strong> C en Ah (souvent sur 20 h) et <strong>courant de démarrage à froid</strong> (en A, selon une norme indiquée, par exemple EN). On distingue les batteries de démarrage (fort courant bref) et les batteries de <strong>traction</strong> ou à décharge profonde (courant modéré prolongé).</p>\n<table>\n<thead><tr><th>Tension à vide (batterie reposée, 12 V)</th><th>État de charge approximatif</th></tr></thead>\n<tbody>\n<tr><td>12,6 V et plus</td><td>Environ 100 %</td></tr>\n<tr><td>12,4 V</td><td>Environ 75 %</td></tr>\n<tr><td>12,2 V</td><td>Environ 50 %</td></tr>\n<tr><td>12,0 V et moins</td><td>Batterie déchargée, à recharger avant tout test</td></tr>\n</tbody>\n</table>\n<p>La tension à vide renseigne sur la charge, pas sur la santé. Le <strong>test de capacité de démarrage</strong> se fait avec un testeur électronique (mesure de conductance) ou un testeur à décharge qui vérifie que la tension ne s'effondre pas sous fort courant. Sur les batteries à bouchons, la <strong>densité</strong> de l'électrolyte, mesurée au pèse-acide ou au réfractomètre élément par élément, permet de repérer un élément défectueux.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler une batterie de démarrage : 1) inspecter (bac fendu, bornes oxydées, fixation) ; 2) nettoyer et serrer les cosses ; 3) mesurer la tension à vide après au moins quelques heures de repos ou après avoir dissipé la charge de surface ; 4) si la tension est inférieure à 12,4 V, recharger avant de tester ; 5) réaliser le test de démarrage avec le testeur réglé sur la norme et la valeur de l'étiquette ; 6) conclure : bonne, à recharger, ou à remplacer ; 7) en cas de décharge répétée, rechercher une consommation parasite moteur arrêté ou un défaut de charge.</div>"
      },
      {
       "titre": "Le circuit de charge",
       "contenu": "<p>L'<strong>alternateur</strong> produit un courant alternatif triphasé, redressé par un pont de diodes. Le <strong>régulateur</strong> maintient la tension de charge, typiquement autour de 14 V sur un réseau 12 V et autour de 28 V sur un réseau 24 V, quelle que soit la vitesse de rotation. Sur les matériels récents, le régulateur peut être piloté par le calculateur (charge intelligente).</p>\n<p>Le contrôle du circuit de charge comprend : la tension de la courroie, la tension de charge moteur tournant à régime accéléré, le courant débité sous forte consommation (phares, ventilateurs, dégivrage) mesuré à la pince ampèremétrique, et l'<strong>ondulation</strong> résiduelle qui révèle une diode défectueuse.</p>\n<p>Une <strong>consommation parasite</strong> moteur arrêté (calculateur qui ne se met pas en veille, plafonnier, relais collé) décharge la batterie pendant les périodes d'inactivité. On la mesure à la pince ampèremétrique sensible ou avec un multimètre en série sur la borne négative, après la temporisation de mise en veille des calculateurs, et on la localise en retirant les fusibles un à un.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les matériels agricoles et d'espaces verts saisonniers posent souvent des problèmes de batterie à la remise en route. Le conseil de remisage (batterie chargée, débranchée ou maintenue par un chargeur d'entretien) fait partie des recommandations à donner au client.</div>"
      },
      {
       "titre": "Le circuit de démarrage et la chute de tension",
       "contenu": "<p>Le <strong>démarreur</strong> est un moteur électrique à courant continu qui absorbe plusieurs centaines d'ampères. Le <strong>contacteur</strong> (solénoïde) monté sur le démarreur ferme le circuit de puissance et engage le pignon dans la couronne du volant moteur. Sur les matériels, la commande du démarreur passe par des <strong>sécurités</strong> : contacteur de point mort de la transmission, présence de l'opérateur sur le siège, prise de force désengagée, lame débrayée sur les tondeuses.</p>\n<p>Les câbles et connexions de puissance doivent présenter une résistance quasi nulle. La loi d'Ohm montre qu'une résistance de contact de seulement 0,01 Ω parcourue par 400 A provoque une chute de tension de 4 V : il ne reste plus assez de tension au démarreur. D'où la méthode de la <strong>chute de tension</strong>, beaucoup plus fiable qu'une mesure de résistance à l'ohmmètre sur ces circuits.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mesurer les chutes de tension du circuit de démarrage : 1) neutraliser le démarrage du moteur (coupure d'injection selon procédure) ; 2) brancher le voltmètre entre la borne positive de la batterie (sur le plot, pas sur la cosse) et la borne d'alimentation du démarreur ; 3) actionner le démarreur et lire la tension : c'est la chute dans le câble positif et ses connexions ; 4) faire de même entre la borne négative de la batterie et la carcasse du démarreur ; 5) comparer aux limites constructeur, souvent de l'ordre de quelques dixièmes de volt par ligne ; 6) localiser la connexion fautive en déplaçant les pointes de touche point par point.</div>"
      },
      {
       "titre": "Les actionneurs électriques",
       "contenu": "<p>La chaîne d'énergie électrique alimente de nombreux <strong>actionneurs</strong> :</p>\n<ul>\n<li>les <strong>moteurs à courant continu</strong> (ventilateurs, essuie-glaces, pompes d'alimentation, vérins électriques) ;</li>\n<li>les <strong>électrovannes</strong> tout ou rien, dont la bobine crée un champ magnétique qui déplace un noyau ;</li>\n<li>les <strong>électrovannes proportionnelles</strong>, dont la position du tiroir dépend du courant moyen ; elles sont commandées par un signal à <strong>modulation de largeur d'impulsion</strong> (MLI ou PWM) : la tension est hachée à fréquence fixe et le rapport cyclique règle le courant moyen ;</li>\n<li>les <strong>relais</strong>, qui permettent à un faible courant de commande de piloter un fort courant de puissance ;</li>\n<li>les <strong>moteurs électriques de traction</strong> des matériels électriques, le plus souvent des moteurs synchrones à aimants ou asynchrones alimentés par un <strong>variateur</strong> (onduleur) qui fabrique une tension alternative de fréquence variable à partir de la batterie.</li>\n</ul>\n<p>Le contrôle d'une bobine d'électrovanne comporte la mesure de sa résistance (comparée à la valeur constructeur, à la bonne température), le contrôle de l'alimentation et de la masse sous charge, et la vérification de l'effet magnétique ou du déplacement du tiroir.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un multimètre ordinaire en position voltmètre continu affiche une valeur moyenne sur un signal PWM, qui peut sembler « anormale ». Pour juger ce signal, on utilise l'oscilloscope ou la fonction rapport cyclique, et l'on compare au paramètre affiché par l'outil de diagnostic.</div>"
      },
      {
       "titre": "Matériels électriques et batteries lithium-ion",
       "contenu": "<p>L'électrification progresse sur les chariots, les nacelles, les mini-engins, les tondeuses et les outils portatifs. Les <strong>batteries lithium-ion</strong> offrent une forte énergie massique et une recharge rapide, mais elles exigent un <strong>système de gestion de batterie</strong> (BMS) qui surveille la tension de chaque cellule, la température et le courant, équilibre les cellules et coupe la batterie en cas d'anomalie.</p>\n<p>L'intervention sur un matériel électrique ou hybride relève de la <strong>prévention du risque électrique</strong>. La norme NF C 18-550 traite des opérations sur les véhicules et engins à motorisation thermique, électrique ou hybride ; elle définit des <strong>habilitations</strong> délivrées par l'employeur après formation, selon la nature des opérations et le niveau de tension. Au-delà de 60 V en courant continu, on entre dans le domaine de tension où ces exigences deviennent déterminantes.</p>\n<ul>\n<li>Identifier le domaine de tension et les composants sous tension (câbles orange sur les véhicules et engins à haute tension).</li>\n<li>Appliquer la procédure de mise en sécurité du constructeur (coupure, sectionneur ou prise de consignation, attente de décharge des condensateurs, vérification d'absence de tension).</li>\n<li>Utiliser l'outillage isolé et les équipements de protection prévus.</li>\n<li>Stocker les batteries lithium endommagées à part, dans un contenant adapté, loin des matières combustibles.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> aucune intervention sur un circuit de traction électrique ne se fait sans habilitation adaptée et sans procédure constructeur. Le titulaire du bac pro peut être amené à préparer son habilitation en entreprise ; il doit savoir reconnaître les situations qui l'exigent.</div>"
      }
     ],
     "points_cles": [
      "Réseau de bord 12 V ou 24 V ; batteries en série pour additionner les tensions, en parallèle pour les capacités.",
      "La tension à vide indique l'état de charge ; le test sous charge ou de conductance indique l'état de santé.",
      "Le régulateur maintient environ 14 V (réseau 12 V) ou 28 V (réseau 24 V).",
      "Une consommation parasite se mesure après mise en veille des calculateurs et se localise par les fusibles.",
      "La méthode de la chute de tension révèle les résistances de contact des circuits de puissance.",
      "Les électrovannes proportionnelles sont commandées en PWM : le rapport cyclique fixe le courant moyen.",
      "Les batteries lithium sont surveillées par un BMS et présentent un risque d'incendie.",
      "L'intervention sur les circuits de traction électrique exige une habilitation selon la NF C 18-550."
     ],
     "lexique": [
      {
       "terme": "Courant de démarrage à froid",
       "def": "Courant qu'une batterie peut fournir à basse température en conservant une tension minimale, selon une norme d'essai."
      },
      {
       "terme": "Régulateur",
       "def": "Composant qui maintient la tension de charge de l'alternateur dans une plage fixée."
      },
      {
       "terme": "Consommation parasite",
       "def": "Courant consommé moteur arrêté par un circuit qui devrait être au repos."
      },
      {
       "terme": "Chute de tension",
       "def": "Tension perdue dans un conducteur ou une connexion parcourus par un courant."
      },
      {
       "terme": "Contacteur de démarreur",
       "def": "Électroaimant qui ferme le circuit de puissance et engage le pignon du démarreur."
      },
      {
       "terme": "PWM (MLI)",
       "def": "Modulation de largeur d'impulsion : tension hachée dont le rapport cyclique règle la valeur moyenne."
      },
      {
       "terme": "Rapport cyclique",
       "def": "Rapport entre la durée où le signal est actif et la période du signal."
      },
      {
       "terme": "Variateur",
       "def": "Convertisseur électronique qui alimente un moteur électrique à vitesse et couple variables."
      },
      {
       "terme": "BMS",
       "def": "Système de gestion de batterie qui surveille et protège les cellules d'une batterie lithium."
      },
      {
       "terme": "Habilitation électrique",
       "def": "Reconnaissance par l'employeur de la capacité d'une personne à effectuer des opérations en sécurité vis-à-vis du risque électrique."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — La chaîne d'information",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmm-capteurs",
     "titre": "Acquérir l'information : capteurs et signaux",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Classer les capteurs selon la grandeur mesurée et la nature du signal délivré",
      "Expliquer le principe des capteurs les plus répandus sur les matériels",
      "Identifier les fils d'alimentation, de masse et de signal d'un capteur",
      "Contrôler un capteur par mesure de tension, de résistance ou de fréquence et par comparaison aux valeurs réelles",
      "Distinguer un défaut de capteur, de câblage et de grandeur physique réelle"
     ],
     "sections": [
      {
       "titre": "Rôle et classification des capteurs",
       "contenu": "<p>Un <strong>capteur</strong> transforme une grandeur physique (position, vitesse, pression, température, effort, niveau) en un signal exploitable par la chaîne d'information. Sur un matériel récent, plusieurs dizaines de capteurs alimentent les calculateurs.</p>\n<p>On les classe selon la nature du signal :</p>\n<ul>\n<li><strong>tout ou rien</strong> (TOR) : le signal n'a que deux états (contact ouvert ou fermé, présence ou absence) : contacteur de siège, interrupteur de point mort, pressostat de colmatage de filtre ;</li>\n<li><strong>analogique</strong> : le signal varie de façon continue avec la grandeur (tension de 0,5 à 4,5 V, résistance variable, courant de 4 à 20 mA) : capteur de pression, de température, potentiomètre ;</li>\n<li><strong>fréquentiel</strong> ou impulsionnel : la fréquence des impulsions est proportionnelle à une vitesse : capteur de régime, de vitesse de roue, de débit ;</li>\n<li><strong>numérique</strong> : le capteur envoie une valeur codée, souvent directement sur un réseau multiplexé (capteurs dits « intelligents »).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant de contrôler un capteur, il faut savoir quel type de signal il délivre. On ne contrôle pas un capteur à effet Hall comme une sonde de température à résistance, et un capteur numérique ne se contrôle que par l'outil de diagnostic et le contrôle de son alimentation.</div>"
      },
      {
       "titre": "Capteurs de position et de vitesse",
       "contenu": "<table>\n<thead><tr><th>Technologie</th><th>Principe</th><th>Signal</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>Potentiomètre</td><td>Curseur sur une piste résistive</td><td>Tension analogique proportionnelle à la position</td><td>Manette d'accélérateur, position du relevage</td></tr>\n<tr><td>Inductif (réluctance variable)</td><td>Le passage des dents d'une cible fait varier un flux magnétique dans une bobine</td><td>Tension alternative dont fréquence et amplitude croissent avec la vitesse ; deux fils</td><td>Régime moteur, vitesse d'arbre</td></tr>\n<tr><td>Effet Hall</td><td>Un composant électronique détecte un champ magnétique</td><td>Signal carré d'amplitude fixe ; trois fils (alimentation, masse, signal)</td><td>Arbre à cames, vitesse de roue, position sans contact</td></tr>\n<tr><td>Détecteur de proximité inductif</td><td>Détection d'une pièce métallique à faible distance</td><td>Tout ou rien</td><td>Fin de course de vérin, position de bras</td></tr>\n<tr><td>Codeur rotatif</td><td>Disque à pistes lues optiquement ou magnétiquement</td><td>Impulsions ou valeur numérique</td><td>Angle de direction, position de tourelle</td></tr>\n</tbody>\n</table>\n<p>Les capteurs de position sans contact (effet Hall, magnétorésistifs) remplacent progressivement les potentiomètres, qui s'usent. Beaucoup sont <strong>doublés</strong> (deux pistes ou deux signaux opposés) pour que le calculateur détecte une incohérence : c'est le cas des pédales et manettes d'accélérateur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'entrefer d'un capteur de régime inductif ou à effet Hall est souvent réglé par construction ou par une cale. Un capteur mal monté, une cible encrassée de limaille ou une dent abîmée donnent un signal irrégulier qui fait caler le moteur ou fausse la vitesse affichée, alors que le capteur lui-même est bon.</div>"
      },
      {
       "titre": "Capteurs de pression, de température, d'effort et de niveau",
       "contenu": "<p>Les <strong>capteurs de pression</strong> utilisent le plus souvent une membrane déformable portant des jauges de contrainte ou un élément piézorésistif, associé à une électronique intégrée. Ils sont alimentés en 5 V par le calculateur et renvoient une tension proportionnelle à la pression, par exemple de 0,5 V (pression nulle) à 4,5 V (pleine échelle). Les <strong>pressostats</strong>, eux, basculent un contact à un seuil.</p>\n<p>Les <strong>capteurs de température</strong> les plus courants sont des <strong>thermistances</strong> : leur résistance varie avec la température. Une thermistance <strong>CTN</strong> (coefficient de température négatif) voit sa résistance baisser quand la température monte. Le calculateur l'alimente au travers d'une résistance fixe et lit la tension au point milieu. Les gaz d'échappement, très chauds, sont mesurés par des sondes à résistance de platine ou des thermocouples.</p>\n<p>Les <strong>capteurs d'effort</strong> à jauges de contrainte se présentent sous forme d'<strong>axes de mesure</strong> (axes d'articulation instrumentés) : ils équipent le relevage des tracteurs (contrôle d'effort) et les limiteurs de charge des engins de levage. Les <strong>capteurs de niveau</strong> utilisent un flotteur et une résistance variable, ou une mesure capacitive ou à ultrasons.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la cohérence d'un capteur de pression analogique 0,5–4,5 V pour 0–250 bar : 1) relever la tension de signal à une pression connue (manomètre de contrôle) ; 2) calculer la pression correspondante : p = (U − 0,5) ÷ (4,5 − 0,5) × 250 ; pour U = 2,1 V, p = 1,6 ÷ 4 × 250 = 100 bar ; 3) comparer à la lecture du manomètre ; 4) si l'écart dépasse la tolérance, contrôler l'alimentation 5 V et la masse capteur avant de conclure ; 5) une tension proche de 0 V ou de 5 V indique plutôt un circuit ouvert ou un court-circuit, que le calculateur signale par un code de type « signal hors plage ».</div>"
      },
      {
       "titre": "Câblage d'un capteur et alimentation de référence",
       "contenu": "<p>La plupart des capteurs actifs comptent trois fils : une <strong>alimentation de référence</strong> fournie par le calculateur (souvent 5 V, parfois 8 V ou la tension du réseau), une <strong>masse capteur</strong> (masse électronique propre, distincte de la masse de puissance) et le <strong>signal</strong>. Plusieurs capteurs partagent souvent la même alimentation de référence : un court-circuit sur un seul capteur peut alors mettre en défaut tous les autres.</p>\n<p>Les signaux faibles (capteurs inductifs, capteurs de vitesse) circulent dans des câbles <strong>torsadés</strong> ou <strong>blindés</strong> pour limiter les parasites. Le blindage n'est relié à la masse qu'à une extrémité, selon le schéma.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur les matériels qui travaillent dehors, dans la boue, les vibrations et les projections, une grande partie des défauts « capteur » sont en réalité des défauts de <strong>connectique</strong> : broche oxydée ou repoussée, joint de connecteur manquant, faisceau frotté contre le châssis, rongé par des rongeurs. L'inspection visuelle et le test de traction des fils dans le connecteur précèdent toute commande de pièce.</div>"
      },
      {
       "titre": "Contrôler un capteur : la démarche",
       "contenu": "<p>Le contrôle d'un capteur suit un ordre qui va du plus simple au plus précis.</p>\n<ol>\n<li><strong>Lire les codes défaut</strong> et leur nature : signal trop haut, trop bas, incohérent, absent.</li>\n<li><strong>Lire la valeur réelle</strong> dans l'outil de diagnostic et la comparer à une valeur plausible (température ambiante moteur froid, pression nulle moteur arrêté, position connue).</li>\n<li><strong>Agir sur la grandeur</strong> et observer la réaction de la valeur réelle (déplacer la manette, chauffer le moteur, faire monter la pression).</li>\n<li><strong>Mesurer au connecteur</strong>, capteur branché si possible (pointes de touche adaptées ou boîtier de dérivation), l'alimentation, la masse et le signal.</li>\n<li><strong>Contrôler le faisceau</strong> entre capteur et calculateur : continuité, isolement par rapport à la masse et au positif, absence de court-circuit entre fils.</li>\n<li><strong>Contrôler le capteur seul</strong> s'il est passif (résistance d'une CTN comparée à la courbe constructeur, résistance d'une bobine inductive).</li>\n</ol>\n<table>\n<thead><tr><th>Mesure au connecteur (capteur 3 fils, 5 V)</th><th>Interprétation probable</th></tr></thead>\n<tbody>\n<tr><td>Alimentation 0 V</td><td>Fil coupé ou alimentation de référence en court-circuit ailleurs</td></tr>\n<tr><td>Alimentation 5 V, signal 5 V fixe</td><td>Masse capteur coupée ou capteur défaillant</td></tr>\n<tr><td>Alimentation 5 V, signal 0 V fixe</td><td>Signal en court-circuit à la masse ou capteur défaillant</td></tr>\n<tr><td>Signal qui varie correctement, valeur fausse dans l'outil</td><td>Résistance parasite dans le fil de signal ou de masse</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne jamais piquer l'isolant d'un fil pour mesurer : l'humidité entrera et corrodera le conducteur. Les mesures se font par l'arrière du connecteur avec des pointes adaptées ou avec un boîtier de dérivation, et les joints de connecteur sont remis en place.</div>"
      },
      {
       "titre": "Étalonnage et apprentissage des capteurs",
       "contenu": "<p>De nombreux capteurs de position nécessitent un <strong>étalonnage</strong> après remplacement ou réglage mécanique : le calculateur doit apprendre les valeurs correspondant aux butées (relevage en position basse et haute, manette au neutre et à fond, angle de direction en ligne droite, capteur de hauteur de coupe). Sans cet apprentissage, la fonction est imprécise ou refusée, et un code défaut peut apparaître.</p>\n<p>La procédure est donnée par le constructeur ; elle se fait par l'outil de diagnostic, par un menu du terminal en cabine ou par une combinaison de commandes. Elle s'accompagne souvent de conditions préalables : moteur tournant, huile à température, matériel sur sol plat, outil dételé.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> après tout remplacement de capteur, l'intervention n'est terminée qu'après effacement des codes défaut, étalonnage éventuel, essai fonctionnel et nouvelle lecture des codes pour vérifier qu'aucun ne réapparaît.</div>"
      }
     ],
     "points_cles": [
      "Un capteur délivre un signal tout ou rien, analogique, fréquentiel ou numérique.",
      "Capteur inductif : deux fils, signal alternatif ; capteur à effet Hall : trois fils, signal carré.",
      "Les capteurs de pression actifs donnent souvent 0,5 à 4,5 V sur leur plage de mesure.",
      "Une CTN voit sa résistance diminuer quand la température augmente.",
      "Une alimentation de référence partagée peut mettre plusieurs capteurs en défaut à la fois.",
      "La connectique est la première cause de défauts « capteur » sur les matériels.",
      "Démarche : codes, valeur réelle, action sur la grandeur, mesures au connecteur, faisceau, capteur seul.",
      "Un capteur remplacé doit souvent être étalonné avant l'essai final."
     ],
     "lexique": [
      {
       "terme": "Capteur",
       "def": "Composant qui transforme une grandeur physique en signal exploitable par la chaîne d'information."
      },
      {
       "terme": "Signal analogique",
       "def": "Signal qui varie de façon continue avec la grandeur mesurée."
      },
      {
       "terme": "Signal tout ou rien",
       "def": "Signal qui ne prend que deux états."
      },
      {
       "terme": "Effet Hall",
       "def": "Apparition d'une tension dans un semi-conducteur placé dans un champ magnétique, utilisée pour détecter position et vitesse."
      },
      {
       "terme": "Capteur inductif",
       "def": "Capteur qui produit une tension alternative par variation de flux magnétique au passage d'une cible."
      },
      {
       "terme": "Entrefer",
       "def": "Distance entre la tête d'un capteur magnétique et sa cible."
      },
      {
       "terme": "Thermistance CTN",
       "def": "Résistance dont la valeur diminue quand la température augmente."
      },
      {
       "terme": "Axe de mesure",
       "def": "Axe d'articulation instrumenté de jauges de contrainte qui mesure un effort."
      },
      {
       "terme": "Alimentation de référence",
       "def": "Tension stable fournie par le calculateur aux capteurs actifs, souvent 5 V."
      },
      {
       "terme": "Étalonnage",
       "def": "Procédure qui fait apprendre au calculateur les valeurs de référence d'un capteur."
      }
     ]
    },
    {
     "id": "bmm-calculateurs-reseaux",
     "titre": "Traiter et communiquer : calculateurs, réseaux multiplexés et paramétrage",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire l'architecture électronique d'un matériel : calculateurs, terminaux, réseaux",
      "Expliquer le principe d'un réseau CAN et ses règles de câblage",
      "Contrôler physiquement un réseau CAN par mesures de résistance et de tension",
      "Exploiter un outil de diagnostic : codes défaut, valeurs réelles, tests d'actionneurs, paramétrage",
      "Respecter les précautions lors d'un téléchargement de logiciel ou d'un remplacement de calculateur"
     ],
     "sections": [
      {
       "titre": "Du câblage point à point au multiplexage",
       "contenu": "<p>Sur un matériel ancien, chaque information circule sur son propre fil : un capteur, un fil, un voyant. Avec la multiplication des fonctions, cette architecture devient lourde et fragile. Les matériels actuels sont organisés autour de plusieurs <strong>calculateurs</strong> (moteur, transmission, hydraulique, cabine, terminal, guidage, implement) qui échangent leurs informations sur un <strong>réseau multiplexé</strong> : deux fils partagés transportent des centaines de messages différents.</p>\n<p>Avantages : moins de fils, partage des informations (le régime moteur mesuré une seule fois est utilisé par la transmission, le tableau de bord et l'hydraulique), diagnostic centralisé, ajout de fonctions par logiciel. Inconvénient : une panne du réseau peut affecter de nombreuses fonctions à la fois, ce qui déroute le technicien qui ne raisonne pas « système ».</p>\n<p>Un calculateur comporte des <strong>entrées</strong> (capteurs, commandes), un <strong>microcontrôleur</strong> qui exécute le programme, des <strong>mémoires</strong> (programme, paramètres, codes défaut), des <strong>étages de sortie</strong> qui pilotent les actionneurs (souvent en PWM) et une ou plusieurs <strong>interfaces réseau</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> quand plusieurs fonctions sans rapport mécanique tombent en panne ensemble, il faut penser à ce qu'elles ont en commun : une alimentation, une masse, un fusible, un réseau, un calculateur.</div>"
      },
      {
       "titre": "Le réseau CAN",
       "contenu": "<p>Le réseau le plus répandu est le <strong>bus CAN</strong> (Controller Area Network), normalisé par l'ISO 11898. Sur les engins et véhicules industriels, les messages suivent souvent le protocole <strong>SAE J1939</strong> ; sur les tracteurs et outils agricoles, le protocole <strong>ISOBUS</strong> (ISO 11783) en dérive.</p>\n<p>Caractéristiques essentielles :</p>\n<ul>\n<li>deux fils torsadés, <strong>CAN High</strong> et <strong>CAN Low</strong>, qui transmettent un signal <strong>différentiel</strong> : l'information est portée par l'écart de tension entre les deux fils, ce qui le rend insensible aux parasites qui affectent les deux fils de la même façon ;</li>\n<li>au repos (état récessif), les deux fils sont à environ 2,5 V ; lors d'un bit dominant, CAN High monte vers 3,5 V et CAN Low descend vers 1,5 V ;</li>\n<li>deux <strong>résistances de terminaison</strong> de 120 Ω placées aux deux extrémités du réseau suppriment les réflexions ; vues entre CAN High et CAN Low, elles sont en parallèle et donnent 60 Ω ;</li>\n<li>chaque message porte un <strong>identifiant</strong> qui fixe sa priorité ; tous les calculateurs reçoivent tous les messages et ne retiennent que ceux qui les concernent ;</li>\n<li>le débit est fixe pour un réseau donné (par exemple 250 kbit/s sur de nombreux réseaux J1939 et ISOBUS).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôle physique d'un réseau CAN : 1) couper le contact et attendre la mise en veille ; 2) mesurer à l'ohmmètre la résistance entre CAN High et CAN Low à la prise de diagnostic : environ 60 Ω, réseau correct ; environ 120 Ω, une terminaison absente ou une coupure de ligne ; proche de 0 Ω, court-circuit entre les deux fils ; 3) contact mis, mesurer chaque fil par rapport à la masse : des tensions moyennes proches de 2,5 V (légèrement au-dessus pour High, en dessous pour Low) indiquent un réseau actif ; 4) en cas de doute, visualiser les signaux à l'oscilloscope à deux voies ; 5) déconnecter les calculateurs un à un pour isoler celui qui perturbe le réseau.</div>"
      },
      {
       "titre": "Autres liaisons de communication",
       "contenu": "<p>À côté du CAN principal, on rencontre :</p>\n<ul>\n<li>des réseaux <strong>LIN</strong>, à un seul fil et à faible débit, pour des fonctions secondaires (commandes de cabine, capteurs de pluie) ;</li>\n<li>des liaisons <strong>Ethernet</strong> embarquées pour les terminaux, caméras et systèmes de guidage ;</li>\n<li>des liaisons sans fil : <strong>télématique</strong> par réseau cellulaire, qui remonte position, heures, consommation et codes défaut vers le concessionnaire ou le propriétaire, et parfois Bluetooth ou Wi-Fi pour le dialogue avec un smartphone ou une tablette ;</li>\n<li>la réception de signaux de positionnement par satellites (GNSS) pour le guidage et la géolocalisation.</li>\n</ul>\n<p>La <strong>télématique</strong> modifie le métier : le technicien peut consulter à distance les codes défaut d'un matériel avant de se déplacer, préparer les pièces et l'outillage, et parfois réaliser une mise à jour logicielle à distance si le constructeur le permet.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chez un concessionnaire, l'atelier reçoit les alertes télématiques des matériels sous contrat. Un défaut de température d'huile hydraulique remonté pendant la moisson permet de prévoir un contrôle du refroidisseur avant la casse, et de planifier l'intervention à un moment où le matériel est disponible.</div>"
      },
      {
       "titre": "Exploiter l'outil de diagnostic",
       "contenu": "<p>L'<strong>outil de diagnostic</strong> (logiciel constructeur sur ordinateur et interface de communication branchée sur la prise de diagnostic) donne accès à plusieurs fonctions.</p>\n<table>\n<thead><tr><th>Fonction</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Identification</td><td>Liste des calculateurs présents, versions de logiciel, numéros de série</td></tr>\n<tr><td>Codes défaut</td><td>Défauts actifs et mémorisés, avec leur contexte : nombre d'occurrences, heures moteur, conditions</td></tr>\n<tr><td>Valeurs réelles (paramètres)</td><td>Lecture en direct des mesures des capteurs et des consignes, parfois sous forme de courbes</td></tr>\n<tr><td>Tests d'actionneurs</td><td>Commande forcée d'une électrovanne, d'un relais, d'un injecteur pour vérifier sa réaction</td></tr>\n<tr><td>Étalonnages</td><td>Apprentissage des capteurs, des embrayages, des points de remplissage</td></tr>\n<tr><td>Paramétrage (configuration)</td><td>Activation d'options, adaptation à un équipement, réglage de valeurs (vitesse maximale, débit de sortie)</td></tr>\n<tr><td>Programmation</td><td>Téléchargement d'une nouvelle version de logiciel ou d'un logiciel dans un calculateur neuf</td></tr>\n</tbody>\n</table>\n<p>Les codes défaut des réseaux J1939 sont souvent présentés sous la forme d'un couple <strong>SPN</strong> (numéro du paramètre suspect) et <strong>FMI</strong> (mode de défaillance : tension trop haute, trop basse, signal incohérent, circuit ouvert…). Le FMI oriente directement la recherche : un « court-circuit au positif » ne se cherche pas comme une « donnée incohérente ».</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> effacer les codes défaut avant de les avoir notés détruit des informations précieuses (occurrences, contexte). On imprime ou on enregistre toujours le rapport de diagnostic initial.</div>"
      },
      {
       "titre": "Paramétrer et programmer en sécurité",
       "contenu": "<p>Les opérations d'écriture dans un calculateur sont les plus délicates : une interruption ou une erreur peut le rendre inutilisable. Les précautions sont les suivantes :</p>\n<ul>\n<li>brancher un <strong>chargeur-stabilisateur</strong> de tension sur les batteries pendant toute la durée de la programmation ;</li>\n<li>désactiver la mise en veille de l'ordinateur et assurer une connexion stable (câble plutôt que sans fil, réseau internet fiable si le serveur constructeur est sollicité) ;</li>\n<li>ne pas actionner les commandes du matériel, ne pas couper le contact pendant l'opération ;</li>\n<li>sauvegarder les paramètres existants avant tout remplacement ou mise à jour, quand l'outil le permet ;</li>\n<li>noter les changements dans le dossier du matériel.</li>\n</ul>\n<p>Le paramétrage modifie le comportement du matériel : vitesse maximale, sensibilité des commandes, débits des distributeurs auxiliaires, seuils d'alerte. Certains paramètres touchent à la sécurité ou à la conformité (limitation de vitesse sur route, limiteur de charge) ; ils ne peuvent être modifiés que dans les limites prévues par le constructeur et selon les droits d'accès du technicien.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un paramétrage modifié à la demande du client doit rester dans les limites constructeur et être tracé (date, valeur avant, valeur après, demandeur). Le technicien n'augmente jamais une valeur liée à la sécurité ou à la réglementation.</div>"
      },
      {
       "titre": "Diagnostiquer une panne de réseau",
       "contenu": "<p>Une panne de réseau se manifeste par des codes de type « perte de communication avec le calculateur X », par des affichages incohérents ou absents, par des fonctions inopérantes sans code sur le calculateur concerné.</p>\n<ol>\n<li>Faire la liste des calculateurs qui communiquent et de ceux qui ne répondent pas à l'outil.</li>\n<li>Vérifier l'alimentation et la masse du calculateur muet (fusible, relais d'alimentation, connecteur).</li>\n<li>Contrôler physiquement le réseau (résistance de terminaison, tensions, oscilloscope).</li>\n<li>Rechercher sur le schéma les points communs : connecteurs intermédiaires, épissures, passage de faisceau près d'une zone chaude ou mobile.</li>\n<li>Penser aux équipements ajoutés : un outil ISOBUS, un boîtier de télématique ou un accessoire mal raccordé peuvent perturber tout le réseau.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> localiser une coupure de ligne CAN : 1) mesurer 120 Ω au lieu de 60 Ω à la prise de diagnostic, ce qui signale qu'une seule terminaison est vue ; 2) repérer sur le schéma la position des deux résistances de terminaison et des connecteurs intermédiaires ; 3) déconnecter un connecteur intermédiaire et mesurer de chaque côté : le côté qui affiche une résistance infinie au lieu de 120 Ω contient la coupure ; 4) poursuivre par dichotomie jusqu'au tronçon défectueux ; 5) réparer selon la méthode constructeur (fils torsadés conservés, épissure étanche) ; 6) recontrôler 60 Ω et la communication de tous les calculateurs.</div>"
      }
     ],
     "points_cles": [
      "Les calculateurs d'un matériel échangent leurs informations sur un réseau multiplexé.",
      "Plusieurs fonctions en panne simultanément orientent vers un point commun : alimentation, masse, réseau.",
      "Le bus CAN transmet un signal différentiel sur deux fils torsadés ; J1939 et ISOBUS en sont des protocoles.",
      "Deux terminaisons de 120 Ω en parallèle donnent 60 Ω entre CAN High et CAN Low.",
      "L'outil de diagnostic identifie, lit les codes et valeurs réelles, teste, étalonne, paramètre et programme.",
      "Un code J1939 associe un SPN (paramètre) et un FMI (mode de défaillance).",
      "On note les codes avant de les effacer.",
      "Une programmation se fait sous tension stabilisée, sans interruption, avec sauvegarde des paramètres."
     ],
     "lexique": [
      {
       "terme": "Calculateur",
       "def": "Unité électronique qui traite les informations des capteurs et commande les actionneurs selon un programme."
      },
      {
       "terme": "Multiplexage",
       "def": "Transmission de nombreuses informations sur un même support partagé."
      },
      {
       "terme": "Bus CAN",
       "def": "Réseau de communication série différentiel à deux fils utilisé entre calculateurs."
      },
      {
       "terme": "Résistance de terminaison",
       "def": "Résistance de 120 Ω placée à chaque extrémité d'un bus CAN pour éviter les réflexions."
      },
      {
       "terme": "Signal différentiel",
       "def": "Signal porté par l'écart de tension entre deux fils plutôt que par la tension d'un fil par rapport à la masse."
      },
      {
       "terme": "SAE J1939",
       "def": "Protocole de messages sur bus CAN répandu sur les engins et véhicules industriels."
      },
      {
       "terme": "ISOBUS",
       "def": "Protocole de communication normalisé (ISO 11783) entre tracteurs, outils et terminaux agricoles."
      },
      {
       "terme": "SPN / FMI",
       "def": "Numéro du paramètre en défaut et code du mode de défaillance dans un code défaut J1939."
      },
      {
       "terme": "Télématique",
       "def": "Transmission à distance des données de fonctionnement d'un matériel."
      },
      {
       "terme": "Paramétrage",
       "def": "Réglage de valeurs de configuration du logiciel d'un calculateur."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Mettre en œuvre, diagnostiquer, organiser et intervenir en sécurité",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmm-mise-en-oeuvre",
     "titre": "Mettre en œuvre un matériel : conduite, préparation et mise en main",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Employer le vocabulaire d'utilisation du matériel, de son environnement et des aides à la conduite",
      "Appliquer un protocole de démarrage, d'utilisation et d'arrêt en sécurité",
      "Préparer un matériel neuf ou d'occasion avant livraison et l'adapter à son équipement",
      "Conduire une mise en service et une mise en main auprès du client",
      "Identifier les conditions de garantie liées à l'utilisation et à l'entretien"
     ],
     "sections": [
      {
       "titre": "Pourquoi le technicien doit savoir conduire le matériel",
       "contenu": "<p>Le technicien de maintenance des matériels déplace les machines dans l'atelier et sur le parc, réalise des essais avant et après intervention, reproduit les symptômes décrits par le client et vérifie les performances. Il doit donc savoir <strong>mettre en œuvre</strong> le matériel : le démarrer, le manœuvrer, utiliser ses fonctions de travail et l'arrêter en sécurité.</p>\n<p>Il est aussi l'interlocuteur du client lors de la livraison d'un matériel neuf ou de la restitution après réparation. Expliquer une commande, un réglage ou un message d'alerte suppose de maîtriser parfaitement l'utilisation.</p>\n<p>Selon le matériel, la conduite peut exiger une <strong>autorisation de conduite</strong> délivrée par l'employeur, appuyée sur une formation ou un certificat (comme les CACES pour certains engins de chantier et chariots), et, sur la voie publique, le permis adapté. Le technicien ne conduit que les matériels pour lesquels il est autorisé.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un essai mal conduit peut provoquer un accident ou une casse, et un essai insuffisant laisse partir un matériel non réparé. Savoir conduire fait partie du geste professionnel du technicien.</div>"
      },
      {
       "titre": "Le vocabulaire de l'utilisation",
       "contenu": "<p>La notice d'utilisation et les échanges avec les clients emploient un vocabulaire précis qu'il faut maîtriser.</p>\n<table>\n<thead><tr><th>Domaine</th><th>Exemples de termes</th></tr></thead>\n<tbody>\n<tr><td>Matériel</td><td>Masse en ordre de marche, empattement, voie, garde au sol, porte-à-faux, charge utile, charge nominale, rayon de braquage</td></tr>\n<tr><td>Équipements</td><td>Attelage trois points, prise de force, distributeurs auxiliaires, attache rapide, godet, fourches, plateau de coupe</td></tr>\n<tr><td>Environnement de travail</td><td>Dévers, pente maximale admissible, portance du sol, gabarit, lignes électriques aériennes, zone d'évolution</td></tr>\n<tr><td>Aides à la conduite</td><td>Régulateur de vitesse, gestion des fourrières (séquences automatiques en bout de champ), guidage par satellite, limiteur de charge, caméras, détection de présence</td></tr>\n<tr><td>Performances</td><td>Débit de chantier (en ha/h, m³/h, palettes/h), temps de cycle, consommation horaire</td></tr>\n</tbody>\n</table>\n<p>La <strong>charge nominale</strong> d'un chariot ou d'un engin de levage n'a de sens qu'avec la position du centre de gravité de la charge et la configuration (hauteur, portée, stabilisateurs). Elle se lit sur la <strong>plaque de charge</strong> ou l'<strong>abaque</strong> de charge.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> « masse », « poids » et « charge » sont souvent confondus dans le langage courant. Dans un document technique, une masse s'exprime en kg ou t, un effort en N ou daN. Une capacité de levage « de 3 t » est une masse maximale de charge, dans des conditions précisées.</div>"
      },
      {
       "titre": "Protocole de démarrage, d'utilisation et d'arrêt",
       "contenu": "<p>Chaque constructeur décrit dans la notice un protocole à respecter. On retrouve toujours les étapes suivantes.</p>\n<p><strong>Avant le démarrage</strong> : faire le tour du matériel (fuites, pneumatiques ou chenilles, équipements, personnes à proximité), contrôler les niveaux quotidiens, vérifier les protections, régler le siège et les rétroviseurs, boucler la ceinture lorsque le matériel en est équipé, vérifier que les commandes sont au neutre.</p>\n<p><strong>Au démarrage</strong> : respecter le préchauffage, surveiller les voyants (pression d'huile, charge, défauts), laisser monter en température avant de solliciter fortement le moteur et l'hydraulique, tester les freins et la direction à faible vitesse.</p>\n<p><strong>En utilisation</strong> : respecter les limites (pente, charge, vitesse), surveiller les températures et les alertes, utiliser les modes de travail adaptés.</p>\n<p><strong>À l'arrêt</strong> : poser les équipements au sol, mettre les commandes au neutre, serrer le frein de stationnement, laisser tourner au ralenti le temps prévu pour refroidir le turbocompresseur, attendre la fin d'une éventuelle régénération, couper le contact, retirer la clé, couper le coupe-batterie si la consigne le prévoit.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser un essai après intervention : 1) relire l'ordre de réparation et la plainte du client ; 2) définir les conditions qui reproduisent le symptôme (température, charge, vitesse, fonction utilisée) ; 3) choisir un lieu d'essai sûr et dégagé ; 4) réaliser le protocole de démarrage ; 5) faire fonctionner la fonction réparée puis l'ensemble des fonctions principales ; 6) contrôler l'absence de fuite, de bruit et de code défaut à l'issue ; 7) noter sur l'ordre de réparation les conditions et le résultat de l'essai.</div>"
      },
      {
       "titre": "Préparer un matériel neuf ou d'occasion",
       "contenu": "<p>Un matériel neuf arrive chez le concessionnaire partiellement démonté ou dans une configuration standard. Sa <strong>préparation</strong> (souvent appelée PDI, inspection avant livraison) comprend :</p>\n<ul>\n<li>le montage des éléments livrés à part (masses d'alourdissement, rétroviseurs, équipements, roues jumelées) ;</li>\n<li>le contrôle de tous les niveaux et serrages selon la liste de contrôle du constructeur ;</li>\n<li>l'adaptation aux équipements du client : attelage, branchements hydrauliques et électriques, réglages de voie, pression des pneumatiques ;</li>\n<li>le paramétrage : langue, unités, options activées, configuration ISOBUS ou des outils ;</li>\n<li>la mise à jour des logiciels si le constructeur le demande ;</li>\n<li>un essai complet et le remplissage du document de préparation qui conditionne souvent la garantie.</li>\n</ul>\n<p>Pour un matériel d'<strong>occasion</strong>, la préparation commence par une <strong>expertise</strong> : relevé des heures, état des organes (fuites, jeux, usure des pneumatiques ou chenilles, état des articulations), lecture des codes défaut, analyse d'huile éventuelle. Elle débouche sur une liste de remises en état chiffrée.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la qualité de la préparation conditionne la première impression du client. Un matériel livré avec un réglage d'outil approximatif ou une alerte non expliquée génère un retour à l'atelier dès la première semaine, au moment où le client a le plus besoin de son matériel.</div>"
      },
      {
       "titre": "Adapter le matériel à son travail : lestage et pneumatiques",
       "contenu": "<p>Un même matériel peut être utilisé pour des travaux très différents. L'adapter fait partie de la mise en œuvre et du conseil attendu du technicien.</p>\n<p>Le <strong>lestage</strong> (masses avant, masses de roues, eau dans les pneumatiques sur certains matériels) répartit la masse entre les essieux. Trop peu de masse sur l'essieu moteur entraîne patinage et usure ; trop de masse augmente la consommation, le tassement du sol et les efforts sur la transmission. Avec un outil lourd porté à l'arrière, la masse sur l'essieu avant doit rester suffisante pour conserver direction et freinage : la notice fixe une proportion minimale de la masse totale sur l'essieu directeur.</p>\n<p>La <strong>pression des pneumatiques</strong> se choisit selon la charge par roue et la vitesse, à l'aide des tableaux du manufacturier. Une pression basse augmente la surface de contact et l'adhérence au champ, mais la pression doit être relevée pour circuler sur route à vitesse plus élevée. Certains tracteurs disposent d'un système de télégonflage qui ajuste la pression en cabine.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la répartition des masses avec un outil porté : 1) peser le matériel attelé, outil levé, essieu par essieu (pont-bascule ou pèse-essieux) ; 2) calculer la part de la masse totale sur l'essieu avant ; 3) comparer au minimum indiqué par la notice ; 4) si elle est insuffisante, ajouter des masses avant et recommencer ; 5) contrôler que chaque essieu et chaque pneumatique restent sous leur charge maximale admissible ; 6) ajuster les pressions de gonflage aux charges obtenues.</div>"
      },
      {
       "titre": "La mise en service et la mise en main",
       "contenu": "<p>La <strong>mise en service</strong> est l'ensemble des opérations qui rendent le matériel apte à travailler chez le client : derniers réglages en conditions réelles, adaptation à l'outil ou au chantier, vérification des performances. La <strong>mise en main</strong> est la formation de l'utilisateur à son matériel.</p>\n<p>Une mise en main de qualité suit un ordre logique :</p>\n<ol>\n<li>présentation générale et règles de sécurité (accès, dangers, arrêt d'urgence, consignes en pente) ;</li>\n<li>contrôles quotidiens et points d'entretien que l'utilisateur doit réaliser lui-même ;</li>\n<li>démarrage, commandes de conduite et de travail, affichages et alertes ;</li>\n<li>réglages et paramétrages courants ;</li>\n<li>essai par l'utilisateur, sous l'observation du technicien ;</li>\n<li>remise des documents (notice, carnet d'entretien, déclaration de conformité) et signature du document de mise en main.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la mise en main n'est pas une démonstration où le technicien fait tout. L'utilisateur doit manipuler lui-même ; c'est la seule façon de vérifier qu'il a compris. Une mise en main bâclée est une cause fréquente d'accidents et de casses en début d'utilisation.</div>"
      },
      {
       "titre": "Garantie et conditions d'utilisation",
       "contenu": "<p>La <strong>garantie contractuelle</strong> du constructeur couvre les défauts de fabrication pendant une durée ou un nombre d'heures définis. Elle est subordonnée au respect de conditions :</p>\n<ul>\n<li>préparation et mise en service réalisées et enregistrées par le réseau agréé ;</li>\n<li>entretien réalisé aux échéances prévues, avec des pièces et lubrifiants conformes, et traçable (factures, carnet, enregistrement informatique) ;</li>\n<li>utilisation conforme à la destination du matériel et à ses limites ;</li>\n<li>absence de modification non autorisée (augmentation de puissance, suppression de dispositifs).</li>\n</ul>\n<p>Lors d'une demande de prise en charge, le technicien doit fournir des éléments factuels : numéro de série, heures, codes défaut, photos, pièces défectueuses conservées et étiquetées, description de la cause. La qualité de ce dossier conditionne l'accord du constructeur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la garantie contractuelle du constructeur ne doit pas être confondue avec les garanties légales dues par le vendeur. Le technicien n'a pas à trancher les questions juridiques ; il doit en revanche fournir un constat technique précis et objectif.</div>"
      }
     ],
     "points_cles": [
      "Le technicien conduit le matériel pour les essais et la restitution, dans la limite de ses autorisations.",
      "La charge nominale dépend toujours de la configuration et de la position du centre de gravité de la charge.",
      "Le protocole d'arrêt comprend la pose des équipements, le neutre, le frein, le ralenti de refroidissement et le retrait de la clé.",
      "Un essai après intervention reproduit les conditions du symptôme et se conclut par une lecture des codes.",
      "La préparation d'un matériel neuf suit la liste du constructeur et conditionne la garantie.",
      "La mise en main forme l'utilisateur, qui manipule lui-même.",
      "La garantie contractuelle exige un entretien conforme et traçable.",
      "Un dossier de garantie repose sur des faits : numéro de série, heures, codes, photos, pièces conservées."
     ],
     "lexique": [
      {
       "terme": "Mise en œuvre",
       "def": "Ensemble des opérations de conduite et d'utilisation d'un matériel."
      },
      {
       "terme": "Autorisation de conduite",
       "def": "Document délivré par l'employeur qui autorise un salarié à conduire un type d'engin."
      },
      {
       "terme": "Charge nominale",
       "def": "Charge maximale admissible dans une configuration et pour un centre de gravité de charge donnés."
      },
      {
       "terme": "Abaque de charge",
       "def": "Diagramme qui donne la charge admissible selon la hauteur, la portée et la configuration."
      },
      {
       "terme": "Préparation avant livraison",
       "def": "Contrôles, montages et réglages réalisés sur un matériel neuf avant remise au client."
      },
      {
       "terme": "Mise en service",
       "def": "Opérations qui rendent le matériel apte à travailler dans les conditions du client."
      },
      {
       "terme": "Mise en main",
       "def": "Formation de l'utilisateur à l'utilisation et à l'entretien courant de son matériel."
      },
      {
       "terme": "Débit de chantier",
       "def": "Quantité de travail réalisée par unité de temps (ha/h, m³/h)."
      },
      {
       "terme": "Garantie contractuelle",
       "def": "Engagement du constructeur à prendre en charge les défauts de fabrication sous conditions."
      }
     ]
    },
    {
     "id": "bmm-methodologie-diagnostic",
     "titre": "Méthodologie du diagnostic sur un système complexe",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Recueillir et hiérarchiser les informations d'une plainte client",
      "Construire un arbre des causes à partir de l'analyse fonctionnelle",
      "Choisir l'ordre des contrôles selon la probabilité, la facilité et le coût",
      "Interpréter des mesures par comparaison aux valeurs de référence",
      "Identifier la cause première et vérifier la réparation"
     ],
     "sections": [
      {
       "titre": "Du diagnostic simple au diagnostic système",
       "contenu": "<p>En seconde, le diagnostic portait sur des dysfonctionnements simples, localisés dans un circuit. En première et terminale, les pannes mettent en jeu plusieurs chaînes : un défaut hydraulique peut avoir une cause électrique, un manque de puissance une cause informatique, une casse mécanique une cause d'utilisation. Le diagnostic devient une <strong>démarche d'enquête</strong> structurée.</p>\n<p>Cette démarche se déroule en quatre temps, qui correspondent aux tâches professionnelles du diagnostic :</p>\n<ol>\n<li><strong>constater</strong> les symptômes, analyser et hiérarchiser les données ;</li>\n<li><strong>réaliser</strong> les tests et les mesures ;</li>\n<li><strong>interpréter</strong> les résultats et identifier les composants défectueux ;</li>\n<li><strong>rechercher la cause première</strong> et valider la réparation.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un diagnostic est terminé lorsque le technicien peut expliquer, preuves à l'appui, pourquoi le composant est défaillant et pourquoi il l'est devenu. Remplacer des pièces « pour voir » n'est pas diagnostiquer.</div>"
      },
      {
       "titre": "Recueillir et hiérarchiser les informations",
       "contenu": "<p>La qualité du diagnostic dépend d'abord de la qualité des informations recueillies. Le <strong>questionnement du client</strong> suit une grille du type QQOQCP adaptée :</p>\n<ul>\n<li><strong>Quoi</strong> : quel est exactement le symptôme ? Que fait ou ne fait plus le matériel ?</li>\n<li><strong>Quand</strong> : depuis quand ? À froid, à chaud, après combien de temps de travail ? De façon permanente ou intermittente ?</li>\n<li><strong>Où / comment</strong> : dans quelles conditions (pente, charge, outil attelé, fonction utilisée) ?</li>\n<li><strong>Quoi d'autre</strong> : intervention récente, choc, changement d'outil, plein de carburant, lavage haute pression ?</li>\n</ul>\n<p>S'y ajoutent les informations du matériel : codes défaut et leur contexte, historique d'entretien et de réparations, données télématiques, campagnes de mise à jour ou bulletins techniques du constructeur concernant ce numéro de série.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les <strong>bulletins techniques</strong> (ou notes de service) publiés par les constructeurs décrivent des défauts connus et leur remède. Consulter cette base avant de commencer un long diagnostic fait souvent gagner des heures, à condition de vérifier que les symptômes et le numéro de série correspondent.</div>"
      },
      {
       "titre": "Construire l'arbre des causes",
       "contenu": "<p>L'<strong>arbre des causes</strong> (ou arbre de défaillance) part du symptôme et le décompose en causes possibles, puis chaque cause en sous-causes, jusqu'à des éléments contrôlables. L'analyse fonctionnelle fournit la structure : on suit la chaîne d'énergie et la chaîne d'information.</p>\n<p>Exemple : « la flèche de la pelle monte lentement, les autres fonctions sont normales ».</p>\n<table>\n<thead><tr><th>Niveau 1</th><th>Niveau 2</th><th>Contrôle associé</th></tr></thead>\n<tbody>\n<tr><td>Débit insuffisant vers le vérin de flèche</td><td>Tiroir qui ne s'ouvre pas complètement (pression de pilotage faible, manipulateur, ressort)</td><td>Pression de pilotage aux deux extrémités du tiroir</td></tr>\n<tr><td></td><td>Compensateur ou priorité de la section bloqué</td><td>Pression en amont et en aval du tiroir</td></tr>\n<tr><td></td><td>Fonction de jonction des pompes inopérante (sur pelles à deux pompes)</td><td>Pression de pilotage de la valve de jonction, codes défaut</td></tr>\n<tr><td>Fuite interne</td><td>Joint de piston du vérin de flèche</td><td>Test de dérive, test de fuite au vérin</td></tr>\n<tr><td></td><td>Limiteur secondaire de la section ouvert</td><td>Pression maximale sur la fonction en butée</td></tr>\n<tr><td>Consigne réduite</td><td>Mode de travail ou paramétrage limitant la vitesse</td><td>Lecture des paramètres, essai dans un autre mode</td></tr>\n</tbody>\n</table>\n<p>Le fait que les autres fonctions soient normales permet d'écarter d'emblée la pompe principale, le moteur thermique et le circuit de pilotage général : on gagne du temps en exploitant ce qui fonctionne.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un arbre des causes trop court (« pompe usée ») conduit à des remplacements inutiles ; un arbre trop large paralyse. Le bon niveau de détail est celui où chaque branche se termine par un contrôle réalisable.</div>"
      },
      {
       "titre": "Ordonner les contrôles",
       "contenu": "<p>Toutes les causes possibles ne se contrôlent pas dans un ordre quelconque. On classe les contrôles selon trois critères :</p>\n<ul>\n<li>la <strong>probabilité</strong> de la cause (fréquence connue, historique, bulletin technique, symptômes) ;</li>\n<li>la <strong>facilité</strong> et la rapidité du contrôle (lecture d'un paramètre, inspection visuelle, mesure à une prise existante) ;</li>\n<li>le <strong>coût</strong> et le risque (démontage lourd, vidange, risque de dégradation).</li>\n</ul>\n<p>Un contrôle rapide qui élimine la moitié des causes (essai d'une commande de secours, échange de deux connecteurs identiques, mesure à une prise de pression commune) est souvent plus utile qu'un contrôle précis d'une seule cause. C'est le principe de la <strong>dichotomie</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir le plan de contrôle : 1) lister les causes de l'arbre ; 2) attribuer à chacune une note de probabilité (forte, moyenne, faible) ; 3) attribuer à chaque contrôle une durée estimée et noter s'il exige un démontage ; 4) commencer par les contrôles rapides qui éliminent plusieurs causes, puis par les causes probables faciles à contrôler ; 5) reporter en dernier les démontages lourds ; 6) prévoir pour chaque contrôle la valeur attendue et l'outil, avant de mesurer.</div>"
      },
      {
       "titre": "Mesurer et interpréter",
       "contenu": "<p>Une mesure n'a de valeur que si elle est réalisée dans les bonnes conditions et comparée à une <strong>valeur de référence</strong> : documentation constructeur, valeur relevée sur un matériel identique en bon état, valeur mesurée précédemment sur le même matériel (suivi).</p>\n<p>Points de vigilance :</p>\n<ul>\n<li>respecter les <strong>conditions de mesure</strong> : régime, température d'huile ou de moteur, charge, position des commandes ;</li>\n<li>choisir un appareil de <strong>calibre</strong> et de précision adaptés (manomètre 0–400 bar pour une pression de veille de 25 bar : lecture imprécise) ;</li>\n<li>noter les valeurs dans un tableau, à côté des valeurs attendues ;</li>\n<li>distinguer les valeurs <strong>hors tolérance</strong> des valeurs <strong>en limite</strong>, qui annoncent une défaillance prochaine.</li>\n</ul>\n<p>L'interprétation doit relier les écarts entre eux. Dans l'exemple de la flèche, une pression de pilotage normale, une pression maximale normale et une dérive importante du vérin chargé désignent le joint de piston ; une pression de pilotage faible côté montée seulement désigne le manipulateur ou sa ligne.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ensemble des mesures doit être cohérent avec la conclusion. Si une mesure contredit la conclusion, soit la mesure est mal faite, soit la conclusion est fausse : on ne l'ignore pas.</div>"
      },
      {
       "titre": "Diagnostiquer avec les données du calculateur",
       "contenu": "<p>Sur les matériels récents, l'outil de diagnostic permet d'enregistrer plusieurs paramètres en même temps pendant un essai, puis de les afficher sous forme de courbes. Cette fonction est précieuse pour les défauts qui n'apparaissent qu'en travail.</p>\n<p>On choisit les paramètres qui permettent de vérifier les relations de cause à effet : par exemple, pour un moteur qui « s'écroule » en fin de montée, le régime, la charge moteur, la consigne et la valeur réelle de pression de rampe, la pression de suralimentation, la température de carburant. Si la pression de rampe réelle décroche de sa consigne juste avant la chute de régime, l'alimentation en carburant est en cause ; si elle suit la consigne mais que la suralimentation chute, on s'oriente vers l'air.</p>\n<p>Les codes défaut eux-mêmes doivent être lus avec méthode : un code actif est présent maintenant ; un code mémorisé est apparu dans le passé. Le nombre d'occurrences et le contexte enregistré (heures, température, régime) indiquent s'il est lié au symptôme. Plusieurs codes apparus au même instant ont souvent une cause commune : une chute de tension au démarrage, une coupure de réseau, un connecteur débranché lors d'une intervention précédente.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un code défaut désigne un circuit ou une fonction, rarement une pièce. « Signal du capteur de pression hors plage haute » peut venir du capteur, de son câblage ou du calculateur ; le code donne la piste, les mesures donnent la conclusion.</div>"
      },
      {
       "titre": "Cause première, réparation et validation",
       "contenu": "<p>Le composant défaillant n'est souvent que la <strong>conséquence</strong> d'une cause plus profonde, appelée <strong>cause première</strong> (ou cause racine). Une pompe hydraulique détruite peut résulter d'une huile polluée, elle-même due à un filtre non remplacé ou à un reniflard de réservoir abîmé. Un démarreur grillé peut résulter d'un relais de commande collé. Sans traiter la cause première, la panne reviendra.</p>\n<p>La méthode des <strong>« cinq pourquoi »</strong> aide à remonter : pourquoi la pompe est-elle détruite ? Parce qu'elle a aspiré des particules. Pourquoi ? Parce que l'huile était polluée. Pourquoi ? Parce que le filtre de retour était colmaté et en dérivation. Pourquoi ? Parce que l'entretien n'a pas été fait à l'échéance. On en déduit la réparation (pompe, rinçage, filtres) et le conseil au client (respect des échéances).</p>\n<p>La <strong>validation</strong> consiste à vérifier, après réparation, que le symptôme a disparu dans les conditions où il se manifestait, que les valeurs mesurées sont redevenues normales et qu'aucun code défaut ne réapparaît.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en cas de défaut intermittent, l'absence de symptôme pendant l'essai ne prouve pas la réparation. On reproduit les conditions d'apparition (température, vibrations, humidité), on surveille les valeurs en enregistrement et l'on informe le client des conditions de l'essai.</div>"
      }
     ],
     "points_cles": [
      "Le diagnostic système suit quatre temps : constater, mesurer, interpréter, rechercher la cause première.",
      "Le questionnement du client précise le symptôme, ses conditions d'apparition et l'historique.",
      "Les bulletins techniques du constructeur sont à consulter avant un long diagnostic.",
      "L'arbre des causes suit les chaînes d'énergie et d'information jusqu'à des contrôles réalisables.",
      "Ce qui fonctionne encore permet d'éliminer des causes.",
      "Les contrôles s'ordonnent selon probabilité, facilité et coût ; la dichotomie fait gagner du temps.",
      "Une mesure se compare à une référence, dans des conditions identiques.",
      "Les « cinq pourquoi » remontent à la cause première ; la validation reproduit les conditions du symptôme."
     ],
     "lexique": [
      {
       "terme": "Symptôme",
       "def": "Manifestation observable d'un dysfonctionnement."
      },
      {
       "terme": "Arbre des causes",
       "def": "Décomposition d'un symptôme en causes possibles, jusqu'à des éléments contrôlables."
      },
      {
       "terme": "Dichotomie",
       "def": "Méthode qui divise à chaque contrôle l'ensemble des causes possibles en deux parties."
      },
      {
       "terme": "Valeur de référence",
       "def": "Valeur attendue d'une mesure, issue du constructeur ou d'un matériel en bon état."
      },
      {
       "terme": "Tolérance",
       "def": "Écart admissible autour d'une valeur de référence."
      },
      {
       "terme": "Cause première",
       "def": "Origine profonde d'une défaillance, dont le composant défaillant n'est que la conséquence."
      },
      {
       "terme": "Bulletin technique",
       "def": "Note du constructeur décrivant un défaut connu et sa solution."
      },
      {
       "terme": "Défaut intermittent",
       "def": "Défaut qui n'apparaît que dans certaines conditions et disparaît ensuite."
      },
      {
       "terme": "Test de dérive",
       "def": "Mesure de la descente d'un récepteur chargé, immobile, pendant un temps donné."
      }
     ]
    },
    {
     "id": "bmm-organisation-maintenance",
     "titre": "Organiser la maintenance : stratégies, planification et suivi",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Choisir une stratégie de maintenance adaptée à un organe et à son usage",
      "Exploiter une analyse d'huile et des données d'usure pour décider d'une intervention",
      "Planifier une intervention : étapes, durées, ressources, pièces",
      "Calculer et interpréter des indicateurs simples : disponibilité, MTBF, MTTR",
      "Utiliser un logiciel de gestion de maintenance et assurer la traçabilité des interventions"
     ],
     "sections": [
      {
       "titre": "Les stratégies de maintenance",
       "contenu": "<p>Les formes de maintenance ont été présentées en seconde. En terminale, il s'agit de <strong>choisir</strong> la stratégie adaptée à chaque organe, en fonction des conséquences d'une panne, de son coût et de la possibilité de surveiller l'usure.</p>\n<table>\n<thead><tr><th>Stratégie</th><th>Déclenchement</th><th>Adaptée lorsque</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Corrective palliative</td><td>Après défaillance, remise en fonctionnement provisoire</td><td>Il faut terminer un chantier ou une récolte</td><td>Réparation provisoire d'un flexible au champ</td></tr>\n<tr><td>Corrective curative</td><td>Après défaillance, réparation définitive</td><td>La panne a peu de conséquences et l'organe est peu coûteux</td><td>Remplacement d'une ampoule, d'un capteur de confort</td></tr>\n<tr><td>Préventive systématique</td><td>Échéance fixe (heures, calendrier)</td><td>L'usure est régulière et la défaillance grave ou coûteuse</td><td>Vidanges, filtres, courroie de distribution</td></tr>\n<tr><td>Préventive conditionnelle</td><td>Dépassement d'un seuil mesuré</td><td>L'usure est mesurable</td><td>Remplacement des dents de godet à la cote limite, des garnitures à l'épaisseur limite</td></tr>\n<tr><td>Préventive prévisionnelle</td><td>Extrapolation d'une tendance</td><td>On dispose d'un suivi régulier de mesures</td><td>Suivi des analyses d'huile, des pressions, des données télématiques</td></tr>\n</tbody>\n</table>\n<p>Les matériels ont une forte <strong>saisonnalité</strong> (récolte, campagne de tonte, saison des travaux) : une panne en pleine saison coûte beaucoup plus cher que la réparation elle-même. Les concessionnaires proposent donc des <strong>visites d'avant-saison</strong> qui combinent maintenance systématique et contrôles conditionnels.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le coût d'une panne comprend la réparation, mais aussi l'immobilisation du matériel, la perte de production du client (récolte non rentrée, chantier arrêté, pénalités) et parfois la location d'un matériel de remplacement.</div>"
      },
      {
       "titre": "La maintenance conditionnelle : mesurer pour décider",
       "contenu": "<p>La maintenance conditionnelle repose sur des mesures régulières comparées à des limites.</p>\n<ul>\n<li><strong>Mesures d'usure</strong> : épaisseur des garnitures de frein, hauteur des crampons de pneumatique, cotes des éléments de chenille, jeu des articulations, épaisseur des contre-couteaux et sections de coupe.</li>\n<li><strong>Mesures de performance</strong> : temps de cycle hydraulique, pression de compression, débit de pompe.</li>\n<li><strong>Analyse d'huile</strong> : un échantillon prélevé dans de bonnes conditions est analysé par un laboratoire.</li>\n</ul>\n<p>Le rapport d'<strong>analyse d'huile</strong> donne plusieurs familles de résultats :</p>\n<table>\n<thead><tr><th>Indicateur</th><th>Ce qu'il révèle</th></tr></thead>\n<tbody>\n<tr><td>Métaux d'usure (fer, cuivre, plomb, aluminium, chrome…)</td><td>Usure d'organes : chemises, coussinets, bagues, pistons, segments</td></tr>\n<tr><td>Silicium</td><td>Entrée de poussière (filtration d'air défaillante), sauf si l'huile contient des additifs siliconés</td></tr>\n<tr><td>Sodium, potassium, glycol</td><td>Fuite de liquide de refroidissement</td></tr>\n<tr><td>Viscosité, dilution par le carburant</td><td>Huile dégradée, injecteur fuyard, régénérations fréquentes</td></tr>\n<tr><td>Eau</td><td>Condensation, infiltration, échangeur défaillant</td></tr>\n<tr><td>Comptage de particules</td><td>Propreté des huiles hydrauliques et de transmission</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> prélever un échantillon d'huile représentatif : 1) faire fonctionner le matériel jusqu'à température normale ; 2) prélever dans les minutes qui suivent l'arrêt, par la prise d'échantillon prévue ou à la pompe à vide au milieu du carter, jamais au fond du bouchon de vidange ; 3) utiliser un flacon propre fourni par le laboratoire ; 4) étiqueter : matériel, organe, heures de l'organe et de l'huile, type d'huile, appoints réalisés ; 5) envoyer rapidement ; 6) comparer les résultats à ceux des analyses précédentes : c'est la <strong>tendance</strong> qui compte plus que la valeur isolée.</div>"
      },
      {
       "titre": "Planifier une intervention",
       "contenu": "<p>Préparer une intervention, c'est organiser ses étapes dans le temps et réunir les moyens nécessaires avant d'immobiliser le matériel. La démarche suit les tâches de l'activité « organiser l'intervention » : s'informer, préparer, prévoir les moyens et les pièces, organiser le poste, organiser les étapes.</p>\n<ul>\n<li>Lister les opérations à partir de la procédure constructeur (dépose, contrôles, remplacements, repose, réglages, essais).</li>\n<li>Identifier les <strong>antériorités</strong> : quelles opérations doivent être terminées avant de commencer une autre ?</li>\n<li>Estimer les durées à partir du <strong>barème de temps</strong> du constructeur ou de l'expérience de l'atelier.</li>\n<li>Prévoir les ressources : techniciens, pont ou fosse, moyens de levage, outillages spécifiques, outil de diagnostic.</li>\n<li>Commander les pièces et consommables à l'avance, avec leurs références vérifiées sur le numéro de série.</li>\n</ul>\n<p>Le <strong>diagramme de Gantt</strong> représente chaque opération par une barre horizontale sur une échelle de temps ; il montre les opérations qui peuvent se dérouler en parallèle (deux techniciens) et celles qui se suivent obligatoirement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le chef d'atelier planifie les interventions en fonction des ponts disponibles, des compétences des techniciens et des délais d'approvisionnement. Un matériel démonté qui attend une pièce non commandée occupe un poste de travail et bloque d'autres réparations ; d'où l'importance de la préparation avant immobilisation.</div>"
      },
      {
       "titre": "Identifier et approvisionner les pièces de rechange",
       "contenu": "<p>Une commande de pièce erronée immobilise le matériel plusieurs jours de plus. L'identification se fait toujours à partir du <strong>numéro de série</strong> (ou numéro d'identification) du matériel et, si nécessaire, de celui de l'organe concerné (moteur, boîte, pont), car les constructeurs modifient leurs pièces en cours de production. Le <strong>catalogue de pièces</strong> électronique présente des vues éclatées repérées, une nomenclature avec quantités et des mentions de validité (« à partir du numéro de série… », « remplace la référence… »).</p>\n<p>Plusieurs origines de pièces coexistent : pièces d'origine constructeur, pièces adaptables de qualité équivalente, pièces en <strong>échange standard</strong> (organe rénové livré contre restitution de l'organe usagé, appelé consigne). Le choix tient compte de la garantie, du délai, du prix et de la sécurité : on ne monte jamais une pièce de sécurité dont l'origine et la conformité sont incertaines.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> commander « le même joint que la dernière fois » ou se fier à la référence gravée sur une pièce déposée expose à des erreurs : la pièce a pu être remplacée par une nouvelle référence, ou la pièce déposée n'était pas d'origine. La vérification dans le catalogue, à partir du numéro de série, est systématique.</div>"
      },
      {
       "titre": "Les indicateurs de maintenance",
       "contenu": "<p>Quelques indicateurs permettent de mesurer l'efficacité de la maintenance d'un parc.</p>\n<ul>\n<li>La <strong>MTBF</strong> (moyenne des temps de bon fonctionnement) : durée de fonctionnement divisée par le nombre de défaillances. Elle mesure la <strong>fiabilité</strong>.</li>\n<li>La <strong>MTTR</strong> (moyenne des temps techniques de réparation) : durée totale des réparations divisée par le nombre de réparations. Elle mesure la <strong>maintenabilité</strong>.</li>\n<li>La <strong>disponibilité</strong> : rapport entre le temps où le matériel est apte à fonctionner et le temps requis. Une approximation courante est D = MTBF ÷ (MTBF + MTTR).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> indicateurs d'une chargeuse sur une saison. Données : 1 200 h de fonctionnement, 4 pannes, durées de réparation 6 h, 10 h, 3 h et 5 h. 1) MTBF = 1 200 ÷ 4 = 300 h. 2) MTTR = (6 + 10 + 3 + 5) ÷ 4 = 24 ÷ 4 = 6 h. 3) Disponibilité ≈ 300 ÷ (300 + 6) ≈ 0,980, soit 98 %. 4) Interprétation : une amélioration passe soit par moins de pannes (préventif), soit par des réparations plus rapides (pièces en stock, diagnostic télématique, accessibilité).</div>\n<p>D'autres indicateurs concernent l'atelier : taux de retour (matériels revenus pour la même panne), respect des délais annoncés, rapport entre temps facturé et temps passé.</p>"
      },
      {
       "titre": "La gestion de maintenance assistée par ordinateur",
       "contenu": "<p>Les ateliers et les grands parcs de matériels utilisent des logiciels de <strong>gestion de maintenance assistée par ordinateur</strong> (GMAO) ou les modules atelier des logiciels de concession. Ils assurent :</p>\n<ul>\n<li>la tenue de la <strong>fiche matériel</strong> : identification, équipements, historique des interventions, compteurs ;</li>\n<li>la génération automatique des <strong>visites préventives</strong> à l'approche des échéances ;</li>\n<li>la gestion des <strong>ordres de travail</strong>, des temps passés et des pièces consommées ;</li>\n<li>la gestion du <strong>stock</strong> de pièces : seuils de réapprovisionnement, pièces critiques à garder en stock en saison ;</li>\n<li>le calcul des indicateurs et des coûts par matériel.</li>\n</ul>\n<p>La qualité de ces outils dépend de la qualité des saisies faites par les techniciens : compteur d'heures exact, description précise de la panne et de la cause, pièces réellement montées, temps réellement passés.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un ordre de réparation clôturé avec la mention « réparé » sans description de la cause ni des contrôles réalisés est inutilisable pour le suivi, pour une demande de garantie et pour le technicien qui interviendra la fois suivante. La traçabilité fait partie de l'intervention.</div>"
      },
      {
       "titre": "Opérations d'adaptation et de préparation",
       "contenu": "<p>À côté des réparations, la maintenance des matériels comprend des <strong>opérations d'adaptation</strong> : montage d'un équipement (chargeur frontal, attache rapide, distributeur supplémentaire, système de guidage, kit d'éclairage), modification de configuration (voie, pneumatiques, lestage), mise en conformité ou application d'une campagne de rappel du constructeur.</p>\n<p>Ces opérations se préparent comme une réparation : notice de montage, compatibilité avec le numéro de série, pièces et kits, paramétrage associé, essais. Elles peuvent modifier les caractéristiques du matériel (masse, encombrement, capacité de levage) et doivent alors respecter les instructions du constructeur pour ne pas compromettre la sécurité ni la conformité.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un équipement monté hors des prescriptions du constructeur, ou un matériel modifié, peut perdre sa conformité. En cas de doute, le technicien consulte le service technique du constructeur avant de réaliser l'adaptation.</div>"
      }
     ],
     "points_cles": [
      "La stratégie de maintenance dépend des conséquences d'une panne, de son coût et de la possibilité de mesurer l'usure.",
      "La saisonnalité des matériels rend les visites d'avant-saison essentielles.",
      "L'analyse d'huile révèle usure, pollution, fuite de liquide de refroidissement et dégradation ; la tendance compte plus que la valeur isolée.",
      "Planifier, c'est ordonner les opérations, estimer les durées et réunir les ressources avant l'immobilisation.",
      "Le diagramme de Gantt montre antériorités et opérations parallèles.",
      "MTBF mesure la fiabilité, MTTR la maintenabilité ; D ≈ MTBF ÷ (MTBF + MTTR).",
      "La GMAO n'est utile que si les saisies sont exactes et complètes.",
      "Les adaptations respectent les prescriptions du constructeur pour préserver la conformité."
     ],
     "lexique": [
      {
       "terme": "Maintenance conditionnelle",
       "def": "Maintenance déclenchée par le dépassement d'un seuil mesuré."
      },
      {
       "terme": "Maintenance prévisionnelle",
       "def": "Maintenance déclenchée par l'extrapolation de l'évolution d'une mesure."
      },
      {
       "terme": "Analyse d'huile",
       "def": "Analyse en laboratoire d'un échantillon de lubrifiant pour évaluer l'usure et la pollution."
      },
      {
       "terme": "Antériorité",
       "def": "Opération qui doit être terminée avant qu'une autre puisse commencer."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Représentation des opérations d'un projet par des barres sur une échelle de temps."
      },
      {
       "terme": "MTBF",
       "def": "Moyenne des temps de bon fonctionnement entre deux défaillances."
      },
      {
       "terme": "MTTR",
       "def": "Moyenne des temps techniques de réparation."
      },
      {
       "terme": "Disponibilité",
       "def": "Aptitude d'un matériel à être en état de fonctionner quand on en a besoin."
      },
      {
       "terme": "GMAO",
       "def": "Logiciel de gestion de maintenance assistée par ordinateur."
      },
      {
       "terme": "Barème de temps",
       "def": "Temps de référence fixé par le constructeur pour une opération donnée."
      }
     ]
    },
    {
     "id": "bmm-prevention-reglementation",
     "titre": "Prévention des risques, réglementation des matériels et environnement",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Appliquer les principes généraux de prévention à une intervention sur un matériel",
      "Analyser les risques d'une intervention et choisir les mesures de prévention",
      "Situer les obligations réglementaires liées aux matériels : conformité, vérifications périodiques, conduite",
      "Mettre en œuvre une consignation des énergies d'un matériel",
      "Gérer les déchets et les fluides de l'atelier dans le respect de l'environnement"
     ],
     "sections": [
      {
       "titre": "Les principes généraux de prévention",
       "contenu": "<p>Les notions de danger, de risque et les équipements de protection ont été vus en seconde. En terminale, le technicien doit savoir <strong>organiser</strong> la prévention d'une intervention. Le Code du travail (article L. 4121-2) énonce neuf <strong>principes généraux de prévention</strong>, qui s'appliquent dans un ordre de priorité :</p>\n<ol>\n<li>éviter les risques ;</li>\n<li>évaluer les risques qui ne peuvent pas être évités ;</li>\n<li>combattre les risques à la source ;</li>\n<li>adapter le travail à l'homme ;</li>\n<li>tenir compte de l'évolution de la technique ;</li>\n<li>remplacer ce qui est dangereux par ce qui l'est moins ;</li>\n<li>planifier la prévention ;</li>\n<li>donner la priorité aux mesures de protection collective sur les protections individuelles ;</li>\n<li>donner les instructions appropriées aux travailleurs.</li>\n</ol>\n<p>L'employeur transcrit l'évaluation des risques dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP). Le technicien contribue à la prévention en signalant les situations dangereuses et en appliquant les consignes.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'équipement de protection individuelle est le dernier recours, pas la première solution. Avant de choisir des gants ou un masque, on cherche à supprimer le danger ou à protéger collectivement (aspiration, calage, garde-corps, écran).</div>"
      },
      {
       "titre": "Analyser les risques d'une intervention",
       "contenu": "<p>Chaque intervention sur un matériel présente des risques spécifiques qu'il faut identifier avant de commencer.</p>\n<table>\n<thead><tr><th>Situation</th><th>Risque</th><th>Mesures de prévention</th></tr></thead>\n<tbody>\n<tr><td>Travail sous un équipement levé</td><td>Écrasement</td><td>Poser au sol ou caler mécaniquement (béquilles, chandelles), ne jamais compter sur l'hydraulique seule</td></tr>\n<tr><td>Dépose d'un organe lourd (roue, contrepoids, boîte)</td><td>Chute de charge, écrasement</td><td>Moyen de levage et accessoires adaptés et vérifiés, élingage par une personne formée</td></tr>\n<tr><td>Travail en hauteur (cabine, toit, trémie)</td><td>Chute</td><td>Plateforme, escabeau à garde-corps, points d'accès prévus</td></tr>\n<tr><td>Circuit hydraulique sous pression</td><td>Injection, projection</td><td>Décompression, lunettes, gants, carton pour chercher une fuite</td></tr>\n<tr><td>Organes en rotation (prise de force, courroies, rotor)</td><td>Happement</td><td>Arrêt moteur, clé retirée, attendre l'arrêt complet, protecteurs remis en place</td></tr>\n<tr><td>Échappement et post-traitement</td><td>Brûlure, incendie, gaz</td><td>Refroidissement, extraction des gaz, éloignement des matières combustibles</td></tr>\n<tr><td>Pneumatiques de grande dimension</td><td>Éclatement, écrasement</td><td>Cage de gonflage, outillage et formation spécifiques</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les accidents graves en atelier de matériels surviennent souvent lors d'opérations « rapides » : un contrôle sous un bras de chargeur levé « juste une minute », un réglage de transmission moteur tournant. La rapidité supposée d'une opération ne justifie jamais de supprimer une mesure de sécurité.</div>"
      },
      {
       "titre": "La consignation des énergies",
       "contenu": "<p>La <strong>consignation</strong> met un matériel dans un état où aucune énergie ne peut provoquer de mouvement ou de choc pendant l'intervention. Elle concerne toutes les énergies : mécanique (charges levées, ressorts, inerties), hydraulique (pression résiduelle, accumulateurs), pneumatique, électrique (batterie, haute tension des matériels électriques), thermique (organes chauds) et chimique (carburant, agent réducteur).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> consigner un matériel avant intervention : 1) <strong>séparer</strong> : arrêter le moteur, retirer la clé, ouvrir le coupe-batterie ou débrancher la batterie, désengager les entraînements ; 2) <strong>condamner</strong> : cadenas personnel sur le coupe-batterie ou la clé gardée par l'intervenant, pancarte « intervention en cours, ne pas démarrer » au poste de conduite ; 3) <strong>dissiper</strong> les énergies résiduelles : poser ou caler les équipements, décomprimer le circuit hydraulique et les accumulateurs, laisser refroidir, attendre l'arrêt des masses en rotation ; 4) <strong>vérifier</strong> : tenter un démarrage, actionner les commandes pour constater l'absence de mouvement, contrôler l'absence de pression au manomètre ; 5) intervenir ; 6) <strong>déconsigner</strong> dans l'ordre inverse, après avoir vérifié que personne n'est exposé et que les protecteurs sont remis.</div>\n<p>Pour les matériels électriques ou hybrides, la consignation électrique suit la procédure du constructeur et les règles de l'habilitation détenue.</p>"
      },
      {
       "titre": "Réglementation applicable aux matériels",
       "contenu": "<p>Les matériels sont soumis à plusieurs familles de règles, que le technicien doit connaître dans leurs grandes lignes.</p>\n<p><strong>La conformité à la mise sur le marché.</strong> Les machines neuves vendues dans l'Union européenne doivent satisfaire aux exigences essentielles de sécurité de la réglementation « machines » (directive 2006/42/CE, que remplace le règlement (UE) 2023/1230 applicable à partir de janvier 2027). Elles portent le <strong>marquage CE</strong> et sont accompagnées d'une <strong>déclaration de conformité</strong> et d'une notice en français. Les tracteurs agricoles relèvent en outre d'une réception par type.</p>\n<p><strong>Les vérifications périodiques.</strong> Certains équipements de travail doivent être vérifiés périodiquement par une personne compétente, interne ou externe : c'est le cas des appareils et accessoires de levage, selon l'arrêté du 1<sup>er</sup> mars 2004, qui fixe la nature et la périodicité des <strong>vérifications générales périodiques</strong> (VGP). Une vérification est aussi exigée lors de la remise en service après une réparation importante ou un démontage touchant le levage.</p>\n<p><strong>La conduite.</strong> La conduite des équipements mobiles automoteurs et des engins de levage est réservée aux salariés formés ; pour certains d'entre eux, l'employeur délivre une <strong>autorisation de conduite</strong> fondée sur un examen d'aptitude médicale, un contrôle des connaissances et du savoir-faire (souvent validé par un CACES) et la connaissance du site.</p>\n<p><strong>La circulation sur la voie publique.</strong> Les matériels qui circulent sur route respectent le Code de la route : éclairage et signalisation, dimensions, freinage, immatriculation selon les cas.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les entreprises de location et les loueurs de chariots et nacelles exigent que le matériel restitué soit accompagné de son rapport de VGP à jour. Un technicien qui intervient sur un dispositif de sécurité (limiteur de charge, valve de maintien de charge) doit le signaler, car une vérification de remise en service peut être requise.</div>"
      },
      {
       "titre": "Manutentions, postures et bruit",
       "contenu": "<p>Les troubles musculo-squelettiques (dos, épaules, poignets) sont la première cause de maladie professionnelle dans les métiers de la maintenance. Les pièces des matériels sont lourdes et souvent difficiles d'accès : roues, demi-arbres, vérins, batteries, lames et couteaux. La prévention passe par l'organisation du poste plus que par l'effort individuel : utiliser palans, potences, tables élévatrices, chariots porte-roues et crics de transmission ; placer le matériel à bonne hauteur sur pont ou fosse ; préparer les accès avant de soulever.</p>\n<p>Le <strong>bruit</strong> des moteurs, des outils pneumatiques et du martelage dépasse souvent les seuils d'exposition ; des protections auditives adaptées sont fournies et doivent être portées dans les zones signalées. Les <strong>vibrations</strong> transmises aux mains (clés à chocs, meuleuses) et au corps entier (conduite d'engins lors des essais) font aussi partie des risques à évaluer.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> porter seul une charge lourde « parce que c'est plus rapide » est un mauvais calcul. Un moyen de manutention adapté protège le dos du technicien et évite aussi de laisser tomber la pièce.</div>"
      },
      {
       "titre": "Produits chimiques et fluides de l'atelier",
       "contenu": "<p>L'atelier utilise de nombreux produits dangereux : carburants, huiles, liquides de refroidissement à base de glycol, solvants de nettoyage, aérosols, peintures, résines, acide de batterie, fluides frigorigènes de climatisation des cabines. Chacun dispose d'une <strong>fiche de données de sécurité</strong> (FDS), à consulter pour connaître les dangers, les protections, les conditions de stockage et la conduite à tenir en cas d'accident.</p>\n<ul>\n<li>Les <strong>huiles usagées</strong> et les gazoles souillés sont cancérogènes à long terme par contact cutané répété : gants nitrile, pas de lavage des mains au gazole.</li>\n<li>Les <strong>fumées d'échappement diesel</strong> sont classées cancérogènes : on travaille moteur tournant uniquement avec une extraction raccordée au pot d'échappement.</li>\n<li>Les <strong>fluides frigorigènes</strong> ne peuvent être manipulés que par du personnel titulaire de l'attestation requise, avec une station de récupération ; leur rejet dans l'atmosphère est interdit.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le nettoyeur haute pression dirigé sur des connecteurs, des roulements, des radiateurs ou des joints provoque des pannes (eau dans les connecteurs, ailettes couchées, joints décollés). On respecte les distances et les zones interdites indiquées par le constructeur.</div>"
      },
      {
       "titre": "Déchets et développement durable",
       "contenu": "<p>L'activité de maintenance produit des déchets dont l'élimination est réglementée. Les <strong>déchets dangereux</strong> (huiles usagées, filtres, liquides de refroidissement, batteries, chiffons et absorbants souillés, boues de séparateur, aérosols) sont triés, stockés sur rétention et remis à des collecteurs autorisés ; leur suivi est assuré par des bordereaux de suivi, aujourd'hui dématérialisés. Le rejet d'huile au sol, dans le réseau d'eaux pluviales ou en fosse est interdit.</p>\n<p>Les eaux de lavage des matériels passent par un <strong>débourbeur-séparateur d'hydrocarbures</strong> qu'il faut entretenir. Les pneumatiques usagés, les ferrailles, les plastiques et les cartons suivent des filières de valorisation.</p>\n<p>Le <strong>développement durable</strong> concerne aussi le choix des réparations : réparer ou rénover un organe (échange standard, rechargement, rectification) plutôt que le remplacer lorsque la sécurité le permet, utiliser des lubrifiants biodégradables lorsque le matériel travaille en milieu sensible (forêt, bord de cours d'eau, espaces verts), régler correctement les matériels pour limiter la consommation et les émissions.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un absorbant et un bac de rétention doivent être prêts avant toute vidange ou dépose de composant hydraulique. Une fuite contenue immédiatement évite une pollution du sol et un nettoyage long.</div>"
      }
     ],
     "points_cles": [
      "Les neuf principes généraux de prévention s'appliquent par ordre de priorité ; l'EPI est le dernier recours.",
      "Chaque intervention commence par l'analyse de ses risques propres.",
      "On ne travaille jamais sous une charge maintenue par l'hydraulique seule.",
      "Consigner : séparer, condamner, dissiper, vérifier ; déconsigner dans l'ordre inverse.",
      "Les machines neuves portent le marquage CE et une déclaration de conformité.",
      "Les appareils de levage font l'objet de vérifications générales périodiques et de vérifications de remise en service.",
      "La conduite de certains engins exige une autorisation de conduite délivrée par l'employeur.",
      "La FDS renseigne sur les dangers et protections de chaque produit.",
      "Les déchets dangereux sont triés, stockés sur rétention et remis à des collecteurs autorisés avec un suivi."
     ],
     "lexique": [
      {
       "terme": "Principes généraux de prévention",
       "def": "Neuf principes du Code du travail qui guident l'organisation de la prévention."
      },
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels tenu par l'employeur."
      },
      {
       "terme": "Consignation",
       "def": "Procédure qui sépare, condamne, dissipe et vérifie l'absence de toute énergie dangereuse avant intervention."
      },
      {
       "terme": "Marquage CE",
       "def": "Marquage par lequel le fabricant atteste la conformité d'une machine aux exigences européennes applicables."
      },
      {
       "terme": "Déclaration de conformité",
       "def": "Document du fabricant qui atteste la conformité de la machine aux textes qu'il cite."
      },
      {
       "terme": "VGP",
       "def": "Vérification générale périodique des appareils et accessoires de levage."
      },
      {
       "terme": "Autorisation de conduite",
       "def": "Document par lequel l'employeur autorise un salarié formé à conduire un engin."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité d'un produit chimique."
      },
      {
       "terme": "Séparateur d'hydrocarbures",
       "def": "Ouvrage qui retient les hydrocarbures contenus dans les eaux de lavage avant rejet."
      },
      {
       "terme": "Déchet dangereux",
       "def": "Déchet présentant une ou plusieurs propriétés de danger et soumis à une filière d'élimination contrôlée."
      }
     ]
    },
    {
     "id": "bmm-communication-technique",
     "titre": "Communication technique : rendre compte, conseiller, restituer",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Identifier les interlocuteurs du technicien et adapter son message à chacun",
      "Rédiger un compte rendu d'intervention et un rapport de diagnostic structurés",
      "Présenter oralement un diagnostic de façon claire et argumentée",
      "Conseiller le client sur l'utilisation et l'entretien de son matériel",
      "Restituer un matériel en expliquant les travaux réalisés et les points à surveiller"
     ],
     "sections": [
      {
       "titre": "Les enjeux de la communication professionnelle",
       "contenu": "<p>Le technicien de maintenance des matériels ne travaille pas seul. Il échange avec le <strong>client</strong> (agriculteur, entrepreneur de travaux, paysagiste, collectivité, loueur), avec le <strong>chef d'atelier</strong> ou le responsable après-vente, avec le <strong>magasinier</strong>, avec les collègues qui reprendront un travail en cours, et avec le <strong>service technique du constructeur</strong> pour les cas difficiles et les garanties.</p>\n<p>Une communication défaillante a des conséquences concrètes : pièce mal commandée, travaux non autorisés par le client et contestés à la facturation, intervention refaite deux fois, garantie refusée faute d'informations, accident lorsqu'une consigne de sécurité n'a pas été transmise. À l'inverse, une communication claire fidélise le client et valorise le travail réalisé.</p>\n<p>La communication a été abordée en seconde sous l'angle de l'accueil et de la réception. En première et terminale, elle porte sur les écrits techniques, l'exposé d'un diagnostic et le conseil.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un même fait technique se formule différemment selon l'interlocuteur. Au service technique, on donne des valeurs mesurées et des références ; au client, on explique la conséquence pour son travail et le coût ; au collègue, on indique où en est le travail et ce qui reste à faire.</div>"
      },
      {
       "titre": "Les écrits du technicien",
       "contenu": "<table>\n<thead><tr><th>Document</th><th>Destinataire</th><th>Contenu attendu</th></tr></thead>\n<tbody>\n<tr><td>Ordre de réparation complété</td><td>Atelier, facturation, client</td><td>Travaux réalisés, pièces, temps, compteur, observations</td></tr>\n<tr><td>Compte rendu d'intervention</td><td>Client, chef d'atelier</td><td>Constat, travaux, résultats des contrôles, recommandations</td></tr>\n<tr><td>Rapport de diagnostic</td><td>Chef d'atelier, client, constructeur</td><td>Symptôme, démarche, mesures, conclusion, cause première, solution chiffrée</td></tr>\n<tr><td>Demande d'assistance technique</td><td>Service technique du constructeur</td><td>Identification, symptôme, codes, mesures déjà réalisées, question précise</td></tr>\n<tr><td>Dossier de garantie</td><td>Constructeur</td><td>Numéro de série, heures, date de mise en service, description technique, photos, pièces conservées</td></tr>\n<tr><td>Note de passation</td><td>Collègue</td><td>État du matériel, opérations faites et restantes, précautions</td></tr>\n</tbody>\n</table>\n<p>Ces écrits doivent être <strong>factuels</strong> (ce qui a été observé et mesuré), <strong>précis</strong> (valeurs avec unités, références de pièces, repères de composants tels qu'ils figurent sur les schémas), <strong>structurés</strong> et <strong>lisibles</strong> par une personne qui n'était pas présente.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> des formulations comme « pompe HS », « problème électrique » ou « réparé » ne disent rien. On écrit plutôt : « débit de la pompe de 41 L/min à 200 bar pour 60 L/min attendus, rendement volumétrique de 0,68 : pompe remplacée ».</div>"
      },
      {
       "titre": "Rédiger un rapport de diagnostic",
       "contenu": "<p>Un rapport de diagnostic suit une structure stable, qui reprend la démarche de diagnostic :</p>\n<ol>\n<li><strong>Identification</strong> : client, matériel, numéro de série, compteur, date.</li>\n<li><strong>Demande et symptôme</strong> : plainte du client, symptôme constaté par le technicien et conditions d'apparition.</li>\n<li><strong>Informations recueillies</strong> : codes défaut, historique, bulletins techniques.</li>\n<li><strong>Contrôles réalisés</strong> : tableau des mesures avec valeurs relevées, valeurs attendues et conclusion de chaque contrôle.</li>\n<li><strong>Conclusion</strong> : composant défaillant et cause première.</li>\n<li><strong>Solution proposée</strong> : travaux, pièces, temps estimé, éventuelles options.</li>\n<li><strong>Recommandations</strong> : conseils d'utilisation ou d'entretien pour éviter la récidive.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger la conclusion d'un rapport : 1) énoncer le composant défaillant en une phrase ; 2) citer les deux ou trois mesures qui le prouvent, avec leurs valeurs ; 3) indiquer la cause première ou, si elle n'est pas établie, les hypothèses restantes et le contrôle qui permettrait de trancher ; 4) préciser les autres éléments à remplacer par précaution et pourquoi (filtres, joints, rinçage) ; 5) relire en se demandant si un autre technicien pourrait reprendre le dossier sans poser de question.</div>"
      },
      {
       "titre": "Présenter un diagnostic à l'oral",
       "contenu": "<p>Le technicien expose régulièrement un diagnostic : au chef d'atelier pour obtenir un accord, au client pour faire valider un devis, au service technique par téléphone. L'épreuve de communication technique du bac pro repose aussi sur un exposé oral suivi d'un entretien.</p>\n<p>Un exposé efficace :</p>\n<ul>\n<li>annonce d'emblée le matériel, le symptôme et la conclusion, puis déroule la démarche ;</li>\n<li>suit un ordre logique (constat, hypothèses, contrôles, résultats, conclusion) ;</li>\n<li>s'appuie sur des supports : schéma surligné, tableau de mesures, courbe enregistrée, pièce défectueuse ;</li>\n<li>utilise le vocabulaire technique exact et le nom des composants tels qu'ils figurent dans la documentation ;</li>\n<li>respecte le temps imparti et laisse place aux questions.</li>\n</ul>\n<p>Lors de l'entretien, il faut écouter la question jusqu'au bout, reformuler si besoin, répondre précisément et reconnaître honnêtement ce que l'on ne sait pas, en indiquant comment on le vérifierait.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un appel au service technique du constructeur, le technicien qui a préparé ses informations (numéro de série, version de logiciel, codes, mesures déjà faites) obtient une aide rapide. Celui qui appelle en disant « la machine ne marche pas » se voit demander tous ces éléments et perd du temps.</div>"
      },
      {
       "titre": "Expliquer un phénomène technique à un non-spécialiste",
       "contenu": "<p>Le client est souvent un excellent utilisateur de son matériel, mais il n'est pas technicien. Pour lui faire comprendre une panne et accepter un devis, il faut traduire le langage technique sans le déformer.</p>\n<ul>\n<li>Partir de ce que le client a constaté (« le chargeur montait de moins en moins vite à chaud ») plutôt que de la technologie.</li>\n<li>Expliquer le rôle du composant avec une image simple et juste : « la pompe est le cœur du circuit ; à force d'usure, une partie de l'huile retourne à l'intérieur au lieu d'aller aux vérins ».</li>\n<li>Montrer une preuve : la pièce usée, une photo, la valeur mesurée comparée à la valeur normale.</li>\n<li>Annoncer la conséquence pour son travail s'il ne fait rien (« en pleine saison, la pompe risque de lâcher complètement et de polluer tout le circuit ») et le coût de la solution.</li>\n<li>Proposer, si elles existent, plusieurs solutions avec leurs avantages et inconvénients (pièce neuve, échange standard, réparation provisoire jusqu'à la fin de la saison).</li>\n</ul>\n<p>Les outils numériques facilitent cette explication : photos et courtes vidéos jointes au devis envoyé par message, rapport de diagnostic transmis par courriel, portail client du concessionnaire. Ils exigent la même rigueur que l'écrit papier : un message professionnel, sans abréviation familière, avec l'identification du matériel.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une explication de deux minutes : 1) écrire en une phrase le constat du client ; 2) écrire en une phrase la cause, sans jargon ; 3) choisir une preuve à montrer ; 4) chiffrer la solution et son délai ; 5) prévoir la réponse à la question « que se passe-t-il si je ne fais rien ? » ; 6) terminer par une question qui laisse le client décider.</div>"
      },
      {
       "titre": "Conseiller le client",
       "contenu": "<p>Le conseil fait partie de la prestation. Il porte sur :</p>\n<ul>\n<li>l'<strong>utilisation</strong> : réglages adaptés au travail, respect des limites, utilisation des modes économiques, temps de ralenti avant l'arrêt ;</li>\n<li>l'<strong>entretien courant</strong> : contrôles quotidiens, graissage, nettoyage des radiateurs et filtres à air, purge des décanteurs ;</li>\n<li>le <strong>remisage</strong> des matériels saisonniers : nettoyage, protection, batterie, carburant ;</li>\n<li>les <strong>interventions à prévoir</strong> : usure constatée qui nécessitera un remplacement avant la prochaine saison, vérifications réglementaires à venir ;</li>\n<li>les <strong>évolutions</strong> possibles : équipement complémentaire, mise à jour, contrat d'entretien.</li>\n</ul>\n<p>Le conseil doit être <strong>argumenté</strong> (pourquoi c'est utile pour le client), <strong>honnête</strong> (ne pas proposer de travaux inutiles) et <strong>tracé</strong> (mentionné sur le compte rendu ou la facture), notamment lorsqu'un client refuse un remplacement recommandé pour la sécurité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> si le client refuse une réparation touchant à la sécurité (freins, direction, dispositif de maintien de charge), le refus et l'information donnée doivent être écrits et signés. Le technicien en informe son responsable, qui décide de la conduite à tenir.</div>"
      },
      {
       "titre": "Restituer le matériel",
       "contenu": "<p>La <strong>restitution</strong> clôture l'intervention. Elle comprend :</p>\n<ol>\n<li>la vérification finale : niveaux, serrages, absence de fuite, propreté des commandes et de la cabine, codes défaut effacés après essai, protecteurs en place ;</li>\n<li>la préparation des documents : ordre de réparation complété, facture ou bon de livraison, compte rendu, rapport de VGP si concerné ;</li>\n<li>l'explication au client : travaux réalisés, pièces remplacées (présentées s'il le souhaite), résultats des essais, éventuels nouveaux réglages ;</li>\n<li>les conseils et les points à surveiller ;</li>\n<li>la signature de la prise en charge et la remise des clés.</li>\n</ol>\n<p>Lorsque le matériel est livré sur l'exploitation ou le chantier, le technicien vérifie avec l'utilisateur le bon fonctionnement en situation réelle, outil attelé.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la restitution est le moment où le client juge le service. Un matériel propre, des explications claires et un conseil utile laissent une impression bien plus durable que la réparation elle-même, qu'il ne voit pas.</div>"
      }
     ],
     "points_cles": [
      "Le technicien adapte son message à chaque interlocuteur : client, atelier, magasin, constructeur, collègue.",
      "Les écrits techniques sont factuels, précis, structurés et lisibles par un tiers.",
      "Un rapport de diagnostic suit la démarche : identification, symptôme, informations, contrôles, conclusion, solution, recommandations.",
      "Une conclusion s'appuie sur les mesures qui la prouvent.",
      "L'exposé oral annonce la conclusion puis déroule la démarche avec des supports.",
      "Un appel au service technique se prépare : numéro de série, logiciel, codes, mesures.",
      "Le conseil est argumenté, honnête et tracé ; le refus d'une réparation de sécurité est écrit.",
      "La restitution comprend vérification finale, documents, explications et conseils."
     ],
     "lexique": [
      {
       "terme": "Compte rendu d'intervention",
       "def": "Document qui décrit le constat, les travaux réalisés, les résultats et les recommandations."
      },
      {
       "terme": "Rapport de diagnostic",
       "def": "Document qui présente la démarche, les mesures et la conclusion d'un diagnostic."
      },
      {
       "terme": "Service technique constructeur",
       "def": "Service qui assiste le réseau pour les diagnostics difficiles et les garanties."
      },
      {
       "terme": "Note de passation",
       "def": "Message écrit qui permet à un collègue de reprendre un travail en cours."
      },
      {
       "terme": "Reformuler",
       "def": "Redire avec ses propres mots une question ou une demande pour vérifier sa compréhension."
      },
      {
       "terme": "Restitution",
       "def": "Remise du matériel au client avec explication des travaux et conseils."
      },
      {
       "terme": "Remisage",
       "def": "Mise hors service temporaire d'un matériel saisonnier, avec mesures de protection."
      },
      {
       "terme": "Traçabilité",
       "def": "Possibilité de retrouver qui a fait quoi, quand et avec quelles pièces."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Option A : matériels agricoles",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmm-a-tracteur-interfaces",
     "titre": "Le tracteur et ses interfaces avec les outils : prise de force, relevage, hydraulique auxiliaire",
     "niveau": "1re-Tle",
     "options": [
      "a"
     ],
     "duree": 45,
     "objectifs": [
      "Décrire les prises de force d'un tracteur et leurs normes d'interface",
      "Contrôler et adapter un arbre à cardans de transmission entre tracteur et outil",
      "Expliquer le fonctionnement d'un relevage trois points à contrôle de position et d'effort",
      "Identifier les sorties hydrauliques et électriques destinées aux outils",
      "Diagnostiquer un défaut de relevage ou de prise de force"
     ],
     "sections": [
      {
       "titre": "Le tracteur, source d'énergie des outils",
       "contenu": "<p>Le tracteur agricole ne se contente pas de tracter : il fournit aux outils de l'énergie sous plusieurs formes. Il transmet de la <strong>puissance mécanique</strong> par la prise de force, de la <strong>puissance hydraulique</strong> par ses distributeurs auxiliaires, de l'<strong>énergie électrique</strong> et des informations par ses prises électriques et ISOBUS, et il <strong>porte</strong> ou <strong>traîne</strong> l'outil par le relevage et les dispositifs d'attelage.</p>\n<p>Ces interfaces sont normalisées pour que n'importe quel outil puisse être attelé à n'importe quel tracteur de taille compatible. Le technicien doit les connaître pour diagnostiquer un problème qui se manifeste sur l'outil mais dont la cause est sur le tracteur, ou l'inverse, et pour réaliser les adaptations demandées par le client.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> face à un défaut de fonctionnement d'un outil, la première question est : l'énergie ou l'information arrive-t-elle correctement à l'interface ? Une mesure à la sortie du tracteur (régime de prise de force, pression et débit au coupleur, tension à la prise) départage tracteur et outil.</div>"
      },
      {
       "titre": "La prise de force",
       "contenu": "<p>La <strong>prise de force</strong> arrière (et parfois avant) est un arbre cannelé entraîné par le moteur, qui transmet la puissance aux outils animés : broyeurs, faucheuses, pompes, épandeurs, presses. Ses dimensions et ses vitesses sont normalisées (ISO 500).</p>\n<table>\n<thead><tr><th>Type</th><th>Bout d'arbre</th><th>Régime normalisé</th></tr></thead>\n<tbody>\n<tr><td>Type 1</td><td>35 mm (1 3/8 pouce), 6 cannelures</td><td>540 tr/min</td></tr>\n<tr><td>Type 2</td><td>35 mm (1 3/8 pouce), 21 cannelures</td><td>1 000 tr/min</td></tr>\n<tr><td>Type 3</td><td>45 mm (1 3/4 pouce), 20 cannelures</td><td>1 000 tr/min</td></tr>\n</tbody>\n</table>\n<p>Beaucoup de tracteurs proposent des régimes « économiques » (540E, 1000E) qui atteignent le régime normalisé à prise de force avec un régime moteur réduit, pour les travaux qui ne demandent pas toute la puissance. Le régime moteur correspondant au régime normalisé est indiqué sur le tableau de bord ou un autocollant.</p>\n<p>L'embrayage de prise de force est généralement un <strong>embrayage humide multidisque</strong> commandé par électrovanne, avec démarrage progressif géré par le calculateur et un <strong>frein de prise de force</strong>. Des sécurités empêchent le démarrage moteur prise de force engagée et peuvent couper la prise de force si l'opérateur quitte son siège.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> entraîner un outil prévu pour 540 tr/min avec la prise de force à 1 000 tr/min (ou inversement) le détruit ou le rend dangereux. On vérifie la plaque de l'outil et la sélection sur le tracteur avant tout essai.</div>"
      },
      {
       "titre": "L'arbre à cardans de transmission",
       "contenu": "<p>L'outil est relié à la prise de force par un <strong>arbre à cardans télescopique</strong> muni d'un <strong>protecteur</strong> qui tourne librement et est retenu par des chaînettes. Il comporte souvent un <strong>limiteur de couple</strong> (à friction, à boulon de cisaillement ou à cames) et parfois une <strong>roue libre</strong> pour les outils à forte inertie, qui empêche l'outil d'entraîner le tracteur à l'arrêt de la prise de force.</p>\n<p>Points de contrôle et d'adaptation :</p>\n<ul>\n<li>le <strong>recouvrement</strong> minimal des tubes télescopiques dans la position la plus allongée et le jeu suffisant dans la position la plus courte (outil levé et abaissé, en virage) ;</li>\n<li>le montage en phase des mâchoires intermédiaires et l'égalité des angles ;</li>\n<li>l'état du protecteur (pas de fissure, bols en place, chaînettes attachées) ;</li>\n<li>le réglage du limiteur de couple à friction, qui se grippe s'il ne patine jamais : il se « dégrippe » en début de saison selon la notice ;</li>\n<li>le graissage des croisillons et des tubes à la fréquence prescrite.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mettre à longueur un arbre à cardans neuf : 1) atteler l'outil et placer l'ensemble dans la position où l'arbre est le plus court ; 2) présenter les deux demi-arbres séparés côte à côte et marquer la longueur en conservant le jeu prescrit en fin de course ; 3) raccourcir de la même longueur les deux tubes et les deux protecteurs ; 4) ébavurer, nettoyer, graisser ; 5) vérifier dans la position la plus longue que le recouvrement minimal est respecté ; 6) vérifier en virage maximal et en levée maximale l'absence de contact et de butée.</div>"
      },
      {
       "titre": "Le relevage trois points",
       "contenu": "<p>Le <strong>relevage trois points</strong> porte les outils par deux <strong>bras inférieurs</strong> et un <strong>troisième point</strong> (bielle supérieure réglable). Ses dimensions sont normalisées par <strong>catégories</strong> (ISO 730), de la catégorie 1 pour les petits tracteurs à la catégorie 4 pour les plus puissants : diamètres des axes, écartement des rotules, hauteur de mât de l'outil. Des <strong>crochets</strong> d'attelage automatique et des <strong>stabilisateurs</strong> latéraux complètent l'ensemble.</p>\n<p>Les vérins de relevage soulèvent les bras par l'intermédiaire de <strong>bras de relevage</strong> et de <strong>chandelles</strong> (tirants verticaux réglables). Le calculateur de relevage règle la position selon plusieurs modes :</p>\n<ul>\n<li><strong>contrôle de position</strong> : l'outil est maintenu à une hauteur fixe par rapport au tracteur, grâce au capteur de position des bras ;</li>\n<li><strong>contrôle d'effort</strong> : des axes de mesure dans les bras inférieurs détectent l'effort de traction ; quand il augmente (sol plus dur), le relevage remonte légèrement l'outil pour limiter le patinage ;</li>\n<li><strong>mode mixte</strong>, réglable entre les deux ;</li>\n<li><strong>amortissement</strong> des oscillations en transport, qui utilise le relevage comme une suspension de l'outil porté.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un client qui se plaint d'un labour irrégulier n'a pas forcément un relevage en panne. Le technicien vérifie d'abord les réglages : mode choisi, sensibilité, vitesse de descente, réglage du troisième point et de l'aplomb de la charrue, état des axes de mesure. Un réglage expliqué au client résout souvent le problème.</div>"
      },
      {
       "titre": "Hydraulique auxiliaire, freinage de remorque et prises électriques",
       "contenu": "<p>Le tracteur alimente les vérins et moteurs hydrauliques des outils par des <strong>distributeurs auxiliaires</strong> à l'arrière (et parfois à l'avant ou en ventral). Les distributeurs électroniques permettent de régler en cabine le débit, la durée d'actionnement et la position flottante de chaque sortie. Une sortie <strong>« Power Beyond »</strong> (alimentation directe en pression, retour libre et ligne de détection de charge) alimente les outils qui ont leur propre bloc de distribution.</p>\n<p>Les coupleurs sont des <strong>coupleurs rapides</strong> à repérage de couleur ; le <strong>retour libre</strong> est un retour au réservoir sans contre-pression, indispensable pour les moteurs hydrauliques afin de ne pas détruire leur joint d'arbre.</p>\n<p>Le tracteur commande aussi le <strong>freinage des remorques</strong>, par une conduite hydraulique ou par un système pneumatique à deux conduites, selon l'équipement du tracteur et de la remorque, et alimente l'éclairage et la signalisation par une prise normalisée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> brancher un moteur hydraulique d'outil sur une sortie de distributeur au lieu du retour libre, ou inverser les flexibles, peut faire éclater le joint d'arbre du moteur ou entraîner l'outil en sens inverse. Les flexibles d'un outil doivent être repérés et branchés selon sa notice.</div>"
      },
      {
       "titre": "Diagnostiquer un relevage ou une prise de force",
       "contenu": "<p>Les défauts les plus fréquents se répartissent entre chaîne d'énergie et chaîne d'information.</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Pistes à contrôler</th></tr></thead>\n<tbody>\n<tr><td>Le relevage ne monte pas, ni par la cabine ni par les commandes d'aile</td><td>Pompe, pression d'alimentation, distributeur de relevage, limiteur, vérins</td></tr>\n<tr><td>Il monte par les commandes d'aile mais pas par la cabine</td><td>Commande en cabine, faisceau, calculateur, mode verrouillé</td></tr>\n<tr><td>L'outil levé redescend lentement (dérive)</td><td>Fuite interne des vérins ou du distributeur, clapet de maintien</td></tr>\n<tr><td>Le relevage « pompe » en permanence</td><td>Capteur de position, sensibilité du contrôle d'effort, fuite interne</td></tr>\n<tr><td>La prise de force patine ou s'enclenche brutalement</td><td>Pression d'embrayage, électrovanne, étalonnage, huile non conforme</td></tr>\n<tr><td>La prise de force se coupe d'elle-même</td><td>Sécurité de présence opérateur, capteur de régime, code défaut de surcharge</td></tr>\n</tbody>\n</table>\n<p>Le contrôle se termine toujours par l'essai avec un outil représentatif, à la charge et au régime réels, et par la vérification du régime de prise de force au compte-tours.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mesurer une dérive de relevage : 1) atteler une charge connue (masse ou outil) ; 2) lever en position haute, moteur à l'arrêt ou au ralenti selon la procédure ; 3) repérer la position d'un point de l'outil par rapport au sol ; 4) relever la descente après le temps prescrit ; 5) comparer à la valeur limite constructeur ; 6) isoler ensuite vérins et distributeur selon la procédure pour localiser la fuite.</div>"
      }
     ],
     "points_cles": [
      "Le tracteur fournit aux outils de la puissance mécanique, hydraulique, électrique et des informations.",
      "Prises de force normalisées : 540 tr/min (6 cannelures) et 1 000 tr/min (21 ou 20 cannelures).",
      "Un arbre à cardans se met à longueur en respectant le recouvrement minimal et le jeu en position courte.",
      "Le limiteur de couple à friction doit être dégrippé selon la notice.",
      "Le relevage trois points est normalisé par catégories et fonctionne en contrôle de position, d'effort ou mixte.",
      "Les moteurs hydrauliques d'outils se raccordent au retour libre.",
      "Les commandes d'aile permettent de départager chaîne d'énergie et chaîne d'information du relevage.",
      "L'essai final se fait avec un outil réel, au régime et à la charge de travail."
     ],
     "lexique": [
      {
       "terme": "Prise de force",
       "def": "Arbre cannelé du tracteur qui transmet la puissance du moteur aux outils animés."
      },
      {
       "terme": "Arbre à cardans télescopique",
       "def": "Arbre de liaison entre prise de force et outil, à longueur variable, muni de deux joints de cardan."
      },
      {
       "terme": "Limiteur de couple",
       "def": "Dispositif qui protège la transmission en patinant ou en se rompant au-delà d'un couple donné."
      },
      {
       "terme": "Roue libre",
       "def": "Dispositif qui empêche l'outil d'entraîner la prise de force du tracteur."
      },
      {
       "terme": "Relevage trois points",
       "def": "Dispositif d'attelage et de levage des outils portés par deux bras inférieurs et un troisième point."
      },
      {
       "terme": "Contrôle d'effort",
       "def": "Mode de relevage qui ajuste la hauteur de l'outil selon l'effort de traction mesuré."
      },
      {
       "terme": "Chandelle",
       "def": "Tirant vertical réglable qui relie le bras de relevage au bras inférieur."
      },
      {
       "terme": "Distributeur auxiliaire",
       "def": "Sortie hydraulique du tracteur destinée à alimenter les récepteurs des outils."
      },
      {
       "terme": "Power Beyond",
       "def": "Raccordement hydraulique qui alimente directement le bloc de distribution d'un outil à détection de charge."
      },
      {
       "terme": "Retour libre",
       "def": "Retour d'huile au réservoir sans contre-pression."
      }
     ]
    },
    {
     "id": "bmm-a-implantation-protection",
     "titre": "Matériels d'implantation et de protection des cultures : semoirs et pulvérisateurs",
     "niveau": "1re-Tle",
     "options": [
      "a"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire les organes d'un semoir mécanique, pneumatique et monograine",
      "Réaliser et vérifier un étalonnage de semoir",
      "Décrire le circuit d'un pulvérisateur et le rôle de ses composants",
      "Calculer un débit de buse et contrôler la régularité de la pulvérisation",
      "Situer l'intervention du technicien dans le contrôle périodique obligatoire des pulvérisateurs"
     ],
     "sections": [
      {
       "titre": "Les semoirs : principes et organes",
       "contenu": "<p>Le <strong>semoir</strong> doit déposer une quantité précise de semences, à une profondeur régulière, dans un sol préparé, puis les recouvrir. On distingue :</p>\n<ul>\n<li>le <strong>semoir en lignes mécanique</strong>, où une distribution à ergots ou cannelures alimente chaque élément semeur par gravité ;</li>\n<li>le <strong>semoir pneumatique</strong>, où un doseur central volumétrique libère les graines dans un flux d'air produit par une turbine, qui les transporte vers une tête de répartition puis vers les socs ;</li>\n<li>le <strong>semoir monograine</strong> (maïs, tournesol, betterave), où un disque de distribution à alvéoles ou à aspiration sélectionne les graines une à une pour les déposer à intervalle régulier.</li>\n</ul>\n<p>Les éléments semeurs (socs, disques, roues de terrage et de rappui) assurent la profondeur et le contact sol-graine. Sur les semoirs récents, la distribution est entraînée électriquement et pilotée par un calculateur à partir de la vitesse d'avancement (radar ou signal GNSS), ce qui permet la modulation de dose et la coupure de rangs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la qualité d'un semis dépend de trois réglages : la dose (nombre ou masse de graines par unité de surface), la profondeur et la régularité de répartition. Chacun correspond à des organes différents à contrôler.</div>"
      },
      {
       "titre": "Étalonner un semoir",
       "contenu": "<p>L'<strong>étalonnage</strong> (ou essai de débit) vérifie que la distribution délivre la dose souhaitée. Le principe consiste à faire tourner la distribution l'équivalent d'une surface connue, à recueillir et peser les graines, puis à ajuster le réglage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> étalonnage d'un semoir pneumatique de 4 m pour 180 kg/ha de blé : 1) régler la distribution sur la position préconisée par le tableau du constructeur pour ce type de graine ; 2) placer le bac de récupération sous le doseur ; 3) lancer la procédure d'étalonnage du terminal, qui fait tourner le doseur l'équivalent de 1/40 d'hectare (250 m²), ou tourner la manivelle du nombre de tours indiqué ; 4) peser les graines recueillies : par exemple 4,30 kg ; 5) calculer la dose réelle : 4,30 × 40 = 172 kg/ha ; 6) corriger le réglage (ou saisir la masse pesée dans le terminal, qui recalcule) et recommencer jusqu'à obtenir 180 kg/ha à la tolérance près ; 7) vérifier au champ sur une distance mesurée.</div>\n<p>Pour un monograine, on vérifie plutôt la <strong>distance entre graines</strong> sur une longueur donnée et le taux de manques et de doubles, en fonction de la dépression d'aspiration, du réglage des sélecteurs et de la vitesse d'avancement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un étalonnage n'est valable que pour un lot de semences donné (taille, masse de mille grains, traitement de semence). Changer de variété ou de lot impose un nouvel essai ; les semences traitées imposent gants et masque lors de la manipulation des graines recueillies.</div>"
      },
      {
       "titre": "Le pulvérisateur et son circuit",
       "contenu": "<p>Le <strong>pulvérisateur</strong> applique des produits phytopharmaceutiques ou des engrais liquides en gouttelettes calibrées. Le circuit comprend :</p>\n<ul>\n<li>la <strong>cuve</strong> principale, une cuve de rinçage et un lave-mains d'eau claire ;</li>\n<li>un <strong>incorporateur</strong> pour introduire les produits ;</li>\n<li>la <strong>pompe</strong> (à membranes ou centrifuge), entraînée par la prise de force ou hydrauliquement ;</li>\n<li>les <strong>filtres</strong> (aspiration, refoulement, filtres de tronçons, filtres de buse) ;</li>\n<li>la <strong>régulation</strong> : vanne de régulation, débitmètre, capteur de pression, vannes de tronçons, pilotés par un calculateur qui maintient le volume par hectare constant quelle que soit la vitesse (régulation DPAE, débit proportionnel à l'avancement) ;</li>\n<li>la <strong>rampe</strong>, divisée en tronçons, portant les porte-buses et les <strong>buses</strong> ;</li>\n<li>l'<strong>agitation</strong> de la bouillie dans la cuve.</li>\n</ul>\n<p>Les <strong>buses</strong> se caractérisent par leur type de jet (à fente, à miroir, à injection d'air antidérive), leur angle et leur calibre, repéré par un code couleur normalisé (ISO 10625) correspondant à un débit à une pression de référence.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant toute intervention sur un pulvérisateur, le technicien exige qu'il ait été rincé et nettoyé par l'utilisateur, et porte les équipements adaptés (gants nitrile, lunettes, combinaison si nécessaire), car des résidus de produits subsistent toujours dans les filtres, les buses et la pompe.</div>"
      },
      {
       "titre": "Calculer et contrôler un débit de buse",
       "contenu": "<p>Le débit nécessaire par buse dépend du volume par hectare souhaité, de la vitesse d'avancement et de l'écartement entre buses (souvent 0,50 m) :</p>\n<p><strong>q (L/min) = V (L/ha) × v (km/h) × e (m) ÷ 600</strong></p>\n<p>Pour 120 L/ha à 9 km/h avec un écartement de 0,50 m : q = 120 × 9 × 0,50 ÷ 600 = 0,90 L/min par buse. On choisit alors dans le tableau du fabricant la buse et la pression qui donnent ce débit, en restant dans la plage de pression où la taille des gouttes est adaptée (et dans la plage antidérive si elle est exigée).</p>\n<p>Le débit d'une buse varie comme la racine carrée de la pression : pour doubler le débit, il faudrait multiplier la pression par quatre. C'est pourquoi on change de calibre de buse plutôt que de pression pour modifier fortement le volume.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler l'usure des buses : 1) remplir d'eau claire et faire fonctionner à la pression de référence ; 2) recueillir pendant une minute le débit de chaque buse dans une éprouvette graduée ou avec un débitmètre de buse ; 3) calculer le débit moyen et l'écart de chaque buse par rapport au débit nominal du calibre ; 4) remplacer les buses dont l'écart dépasse la tolérance (de l'ordre de 10 % est souvent retenu, à vérifier selon le référentiel de contrôle utilisé) ; 5) en cas d'usure générale, remplacer le jeu complet ; 6) contrôler aussi la pression réelle à la rampe par rapport à l'affichage.</div>"
      },
      {
       "titre": "Le contrôle périodique obligatoire des pulvérisateurs",
       "contenu": "<p>En application de la réglementation européenne sur l'utilisation durable des pesticides, les pulvérisateurs en service font l'objet d'un <strong>contrôle technique périodique obligatoire</strong> réalisé par des organismes d'inspection agréés, selon une méthode officielle. La périodicité, d'abord fixée à cinq ans, a été réduite ; elle est aujourd'hui de trois ans pour la plupart des appareils. Le pulvérisateur contrôlé reçoit une vignette.</p>\n<p>Le contrôle porte notamment sur l'état général et la sécurité (protecteurs, absence de fuite), la pompe, l'agitation, la cuve et ses indicateurs, la régulation et le manomètre, la rampe (stabilité, tronçons), la régularité de répartition transversale et l'état des buses.</p>\n<p>Le technicien de maintenance intervient avant le contrôle (préparation, remise en état) et après une contre-visite (réparation des défauts constatés). Le rapport de contrôle est un document d'entrée de l'intervention : chaque défaut relevé correspond à une opération à prévoir.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les règles du contrôle (périodicité, appareils concernés, méthode) évoluent. On se réfère au texte en vigueur et au rapport de l'organisme d'inspection plutôt qu'à des habitudes.</div>"
      },
      {
       "titre": "Entretien et remisage des matériels d'implantation et de pulvérisation",
       "contenu": "<p>Ces matériels sont utilisés de façon intensive sur de courtes périodes, puis remisés. Leur entretien suit le rythme des campagnes :</p>\n<ul>\n<li>semoirs : nettoyage complet de la trémie et des distributions (les graines restées attirent les rongeurs et gonflent à l'humidité), contrôle des disques et socs, des roulements d'éléments semeurs, de la turbine et des conduites, recalibrage des capteurs ;</li>\n<li>pulvérisateurs : rinçage selon la procédure réglementaire, nettoyage des filtres, protection contre le gel (vidange complète ou antigel compatible), contrôle des membranes de pompe et de l'huile de la pompe à membranes, graissage de la rampe ;</li>\n<li>pour les deux : contrôle des pneumatiques, de l'attelage, de l'éclairage, des terminaux et des faisceaux.</li>\n</ul>\n<p>La remise en route d'avant-saison suit le chemin inverse : remplissage à l'eau claire, contrôle d'étanchéité de tout le circuit sous pression, vérification du fonctionnement de chaque tronçon et de la coupure automatique, contrôle du débitmètre en comparant le volume indiqué par le terminal au volume réellement pulvérisé (cuve graduée ou pesée), contrôle du capteur de vitesse sur une distance mesurée. Sur les semoirs, on vérifie l'étalonnage, la dépression ou la pression de la turbine et la coupure de rangs. Ces contrôles simples évitent de découvrir un défaut au premier jour de semis ou de traitement, lorsque la fenêtre météo est courte.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une membrane de pompe percée laisse passer la bouillie dans le carter d'huile ; une huile laiteuse ou un niveau qui monte dans le réservoir de la pompe signale ce défaut, qu'il faut traiter rapidement pour éviter la destruction de la pompe.</div>"
      }
     ],
     "points_cles": [
      "Semoirs mécaniques, pneumatiques et monograines diffèrent par leur distribution.",
      "L'étalonnage d'un semoir se fait pour chaque lot de semences, en pesant une quantité correspondant à une surface connue.",
      "Le pulvérisateur régule son débit proportionnellement à l'avancement pour garder un volume par hectare constant.",
      "Débit par buse : q (L/min) = V (L/ha) × v (km/h) × e (m) ÷ 600.",
      "Le débit d'une buse varie comme la racine carrée de la pression.",
      "Les buses usées se repèrent par mesure de débit et comparaison au nominal.",
      "Les pulvérisateurs sont soumis à un contrôle périodique obligatoire par organisme agréé.",
      "On n'intervient que sur un pulvérisateur rincé, avec les protections adaptées."
     ],
     "lexique": [
      {
       "terme": "Semoir monograine",
       "def": "Semoir qui sélectionne et dépose les graines une par une à espacement régulier."
      },
      {
       "terme": "Doseur",
       "def": "Organe qui mesure la quantité de semences libérées par unité de temps ou de surface."
      },
      {
       "terme": "Étalonnage",
       "def": "Essai qui vérifie et ajuste la dose réellement distribuée."
      },
      {
       "terme": "Bouillie",
       "def": "Mélange d'eau et de produits destiné à être pulvérisé."
      },
      {
       "terme": "DPAE",
       "def": "Régulation à débit proportionnel à l'avancement."
      },
      {
       "terme": "Tronçon",
       "def": "Partie de la rampe qui peut être ouverte ou fermée indépendamment."
      },
      {
       "terme": "Buse antidérive",
       "def": "Buse qui produit des gouttes plus grosses pour limiter leur entraînement par le vent."
      },
      {
       "terme": "Répartition transversale",
       "def": "Régularité du volume pulvérisé sur toute la largeur de la rampe."
      },
      {
       "terme": "Contre-visite",
       "def": "Nouveau contrôle après réparation des défauts relevés lors d'un contrôle."
      }
     ]
    },
    {
     "id": "bmm-a-recolte",
     "titre": "Matériels de récolte : moissonneuse-batteuse et machines de fenaison",
     "niveau": "Tle",
     "options": [
      "a"
     ],
     "duree": 45,
     "objectifs": [
      "Décrire le flux de récolte dans une moissonneuse-batteuse, de la coupe au stockage",
      "Expliquer les réglages de battage, de séparation et de nettoyage et leurs effets",
      "Identifier les transmissions et variateurs d'une machine de récolte",
      "Décrire le fonctionnement d'une faucheuse, d'une presse et de son noueur",
      "Préparer une machine de récolte pour la saison et conduire son entretien"
     ],
     "sections": [
      {
       "titre": "La moissonneuse-batteuse : le flux de récolte",
       "contenu": "<p>La <strong>moissonneuse-batteuse</strong> réalise en un seul passage la coupe, le battage, la séparation du grain et de la paille, le nettoyage et le stockage du grain. Son analyse fonctionnelle suit le flux de la matière d'œuvre :</p>\n<ol>\n<li><strong>Coupe</strong> : la barre de coupe (lame à sections alternative et doigts) coupe les tiges ; le rabatteur les couche vers la vis d'alimentation ; les coupes à tapis (coupes « draper ») remplacent la vis par des tapis.</li>\n<li><strong>Convoyage</strong> : le convoyeur à chaînes et barrettes amène la récolte au batteur ; un dispositif d'inversion permet de dégager un bourrage.</li>\n<li><strong>Battage</strong> : le grain est arraché des épis par le passage entre le <strong>batteur</strong> (cylindre à battes) et le <strong>contre-batteur</strong> (grille concave), ou par un ou deux <strong>rotors</strong> axiaux sur les machines à rotor.</li>\n<li><strong>Séparation</strong> : le grain encore pris dans la paille est récupéré par des <strong>secoueurs</strong> (machines conventionnelles) ou le long du rotor.</li>\n<li><strong>Nettoyage</strong> : sur la <strong>caisse de nettoyage</strong>, des grilles oscillantes traversées par le flux d'air du <strong>ventilateur</strong> séparent le grain des menues pailles et des balles ; les épis mal battus (<strong>otons</strong>) sont renvoyés au battage par le circuit de retour.</li>\n<li><strong>Stockage et vidange</strong> : élévateur à grain, trémie, vis de vidange.</li>\n<li><strong>Gestion des résidus</strong> : broyeur de paille et éparpilleur, ou dépôt en andain.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une perte de grain se diagnostique en cherchant où elle se produit : à la coupe (grains au sol devant la machine), au battage (épis mal battus dans la paille), à la séparation (grains libres dans la paille) ou au nettoyage (grains dans les menues pailles). Chaque lieu correspond à des réglages différents.</div>"
      },
      {
       "titre": "Les réglages et leurs effets",
       "contenu": "<table>\n<thead><tr><th>Réglage</th><th>Augmenter provoque</th><th>Risque d'excès</th></tr></thead>\n<tbody>\n<tr><td>Vitesse du batteur ou du rotor</td><td>Battage plus énergique</td><td>Grain cassé, paille broyée qui surcharge le nettoyage</td></tr>\n<tr><td>Ouverture du contre-batteur</td><td>Battage plus doux</td><td>Épis mal battus, pertes</td></tr>\n<tr><td>Vitesse du ventilateur</td><td>Nettoyage plus énergique</td><td>Grain soufflé hors de la machine</td></tr>\n<tr><td>Ouverture des grilles</td><td>Passage plus facile du grain</td><td>Impuretés dans la trémie, retours chargés</td></tr>\n<tr><td>Vitesse d'avancement</td><td>Débit de chantier</td><td>Surcharge, pertes à la séparation</td></tr>\n</tbody>\n</table>\n<p>Les réglages de départ sont donnés par le constructeur pour chaque culture, sous forme de tableau ou de programmes enregistrés dans le terminal. Ils sont ensuite affinés au champ en fonction de l'humidité et de l'état de la récolte. Les machines récentes affichent des estimations de pertes et de quantité de retours, et certaines ajustent automatiquement une partie des réglages.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier le calibrage d'un capteur de pertes ou d'un affichage de réglage : 1) contrôler mécaniquement la valeur réelle (mesure de l'ouverture du contre-batteur avec une cale à l'avant et à l'arrière, des deux côtés ; vitesse réelle du batteur au compte-tours) ; 2) comparer à la valeur affichée en cabine ; 3) corriger le parallélisme du contre-batteur s'il diffère d'un côté à l'autre ; 4) recalibrer le capteur selon la procédure du terminal ; 5) en cas de doute sur les pertes, poser un bac de récupération sous la machine sur une distance donnée et compter les grains pour comparer à l'indication.</div>"
      },
      {
       "titre": "Transmissions et variateurs des machines de récolte",
       "contenu": "<p>Une moissonneuse-batteuse distribue la puissance du moteur à de nombreux organes : batteur ou rotor, secoueurs, caisse de nettoyage, ventilateur, élévateurs, broyeur, coupe et convoyeur, sans oublier la traction (généralement <strong>hydrostatique</strong>). Les transmissions associent :</p>\n<ul>\n<li>des <strong>courroies</strong> et <strong>chaînes</strong>, avec tendeurs à ressort ou hydrauliques, et des embrayages à tension de courroie ;</li>\n<li>des <strong>variateurs</strong> à poulies à flasques mobiles, dont l'écartement des flasques fait varier le diamètre d'enroulement et donc le rapport ; ils sont commandés hydrauliquement ou électriquement ;</li>\n<li>des <strong>boîtiers à engrenages</strong> et des transmissions hydrauliques pour les organes à vitesse variable (rabatteur, rotor sur certaines machines) ;</li>\n<li>des <strong>capteurs de rotation</strong> qui surveillent chaque arbre et signalent un glissement ou un bourrage.</li>\n</ul>\n<p>Un variateur dont les flasques ne coulissent plus librement (rouille, manque de graisse, palier usé) ne permet plus d'atteindre les vitesses extrêmes ; la courroie de variateur, très sollicitée, se contrôle à la largeur et à l'état des flancs.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un batteur ou un rotor continue de tourner longtemps après le débrayage. Avant toute intervention à proximité (débourrage, contrôle), on arrête le moteur, on retire la clé et on attend l'arrêt complet de tous les organes. Les accidents de débourrage machine en marche restent une cause d'accidents graves en agriculture.</div>"
      },
      {
       "titre": "Machines de fenaison : faucheuses, faneuses, andaineurs",
       "contenu": "<p>La récolte des fourrages fait intervenir plusieurs machines successives.</p>\n<p>Les <strong>faucheuses rotatives à disques</strong> portent une barre de coupe étanche, remplie d'huile, contenant un train de pignons qui entraîne des disques munis de couteaux pivotants. Les points de maintenance sont le niveau et l'état de l'huile de barre, l'usure des couteaux et de leurs axes de fixation, l'état des patins et la sécurité de la barre contre les obstacles. Les <strong>faucheuses-conditionneuses</strong> ajoutent des rouleaux ou des fléaux qui accélèrent le séchage.</p>\n<p>Les <strong>faneuses</strong> et <strong>andaineurs</strong> à toupies utilisent des dents montées sur des bras rotatifs ; sur les andaineurs, une <strong>came</strong> fixe commande l'orientation des bras pour ramasser puis déposer le fourrage. L'usure des galets de came et le jeu des bras provoquent des défauts de ramassage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les couteaux de faucheuse sont des pièces de sécurité : un couteau mal fixé ou dont l'axe est usé peut être éjecté à grande vitesse. Le remplacement se fait par paire sur un même disque pour conserver l'équilibrage, avec la visserie neuve et le couple de serrage prescrits.</div>"
      },
      {
       "titre": "La presse et le noueur",
       "contenu": "<p>Les <strong>presses à balles</strong> ramassent le fourrage ou la paille avec un <strong>pick-up</strong> à dents, le transfèrent par un rotor ou des fourches dans le <strong>canal de compression</strong> où un <strong>piston</strong> (presses à balles parallélépipédiques) ou des courroies et rouleaux (presses à balles rondes) le compriment. La balle est ensuite liée par de la ficelle ou du filet.</p>\n<p>Sur les presses à balles parallélépipédiques, le <strong>noueur</strong> est un mécanisme de précision synchronisé avec le piston et les <strong>aiguilles</strong> qui amènent la ficelle. Le cycle de nouage enchaîne la présentation des brins par les aiguilles, la formation du nœud par le bec noueur, le maintien de la ficelle par le disque retient-ficelle, la coupe et l'éjection du nœud.</p>\n<p>Les défauts de nouage ont des causes multiples : réglage du disque retient-ficelle (serrage du ressort), usure du bec noueur ou de la langue, mauvais passage de la ficelle dans les guides, tension de ficelle, synchronisation aiguilles-piston faussée après un bourrage, ficelle non conforme.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un nœud raté : 1) récupérer la ficelle défectueuse et observer sa forme (pas de nœud, nœud sur un seul brin, nœud resté sur le bec, ficelle cassée) ; 2) consulter le tableau de dépannage du constructeur qui associe chaque forme à une cause ; 3) contrôler la cause désignée (serrage du retient-ficelle, ressort de la langue, tension) ; 4) faire tourner le noueur à la main selon la procédure pour observer le cycle ; 5) régler un seul paramètre à la fois et essayer.</div>"
      },
      {
       "titre": "Préparer et entretenir une machine de récolte",
       "contenu": "<p>Les machines de récolte travaillent quelques semaines par an, sous forte charge et dans la poussière, avec un risque d'incendie lié aux poussières et débris sur les parties chaudes. Leur maintenance s'organise autour de la saison :</p>\n<ul>\n<li><strong>Visite d'avant-saison</strong> : contrôle des transmissions (courroies, chaînes, variateurs, paliers), des organes d'usure (battes, contre-batteur, sections et doigts de coupe, couteaux de broyeur), des circuits hydrauliques et des capteurs, mise à jour logicielle, essai à vide de tous les organes.</li>\n<li><strong>Entretien quotidien en saison</strong> par l'utilisateur : graissage, soufflage des radiateurs et du compartiment moteur, contrôle des niveaux, nettoyage des grilles d'aspiration.</li>\n<li><strong>Après-saison</strong> : nettoyage complet (risque de rongeurs et de corrosion), relevé des usures pour commander les pièces en hiver, remisage avec batteries entretenues.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur une machine de récolte, la propreté est une mesure de sécurité. L'accumulation de poussières et de débris végétaux sur le moteur, l'échappement et les roulements chauds est une cause majeure d'incendie ; l'extincteur embarqué doit être vérifié à chaque visite.</div>"
      }
     ],
     "points_cles": [
      "Le flux de récolte : coupe, convoyage, battage, séparation, nettoyage, stockage, gestion des résidus.",
      "Une perte se diagnostique en localisant où elle se produit.",
      "Battage plus énergique : plus de grain battu mais plus de casse et de surcharge du nettoyage.",
      "Les réglages affichés se vérifient mécaniquement avant d'être recalibrés.",
      "Les variateurs à flasques mobiles exigent des flasques libres et une courroie en bon état.",
      "Les couteaux de faucheuse se remplacent par paire avec visserie neuve.",
      "Un défaut de noueur se diagnostique à la forme du nœud raté, en réglant un paramètre à la fois.",
      "On n'intervient près d'un batteur ou d'un rotor qu'après arrêt complet, clé retirée.",
      "La propreté d'une machine de récolte prévient l'incendie."
     ],
     "lexique": [
      {
       "terme": "Batteur",
       "def": "Cylindre à battes qui arrache le grain des épis contre le contre-batteur."
      },
      {
       "terme": "Contre-batteur",
       "def": "Grille concave placée sous le batteur, dont l'écartement règle l'énergie du battage."
      },
      {
       "terme": "Rotor axial",
       "def": "Cylindre longitudinal qui réalise battage et séparation par rotation de la récolte."
      },
      {
       "terme": "Secoueurs",
       "def": "Caissons oscillants qui séparent le grain encore présent dans la paille."
      },
      {
       "terme": "Caisse de nettoyage",
       "def": "Ensemble de grilles oscillantes ventilées qui séparent le grain des impuretés."
      },
      {
       "terme": "Otons",
       "def": "Épis ou fragments d'épis mal battus renvoyés au battage."
      },
      {
       "terme": "Variateur",
       "def": "Transmission par courroie à poulies à flasques mobiles permettant de faire varier le rapport en continu."
      },
      {
       "terme": "Pick-up",
       "def": "Ramasseur à dents qui soulève le fourrage du sol vers la machine."
      },
      {
       "terme": "Noueur",
       "def": "Mécanisme qui forme automatiquement le nœud de la ficelle autour d'une balle."
      },
      {
       "terme": "Retient-ficelle",
       "def": "Disque à encoches qui maintient l'extrémité de la ficelle pendant le nouage."
      }
     ]
    },
    {
     "id": "bmm-a-agriculture-precision",
     "titre": "Agriculture de précision : ISOBUS, guidage par satellite et modulation",
     "niveau": "Tle",
     "options": [
      "a"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire l'architecture ISOBUS d'un ensemble tracteur-outil",
      "Expliquer le principe du positionnement par satellite et de la correction RTK",
      "Mettre en service un système de guidage : offsets, calibrations, lignes de guidage",
      "Expliquer la coupure de tronçons et la modulation de dose",
      "Diagnostiquer un défaut de communication ou de précision"
     ],
     "sections": [
      {
       "titre": "Les objectifs de l'agriculture de précision",
       "contenu": "<p>L'<strong>agriculture de précision</strong> consiste à appliquer la bonne dose, au bon endroit, au bon moment. Elle s'appuie sur trois briques technologiques que le technicien de matériels agricoles doit savoir installer, paramétrer et dépanner :</p>\n<ul>\n<li>la <strong>communication normalisée</strong> entre tracteur, outil et terminal (ISOBUS) ;</li>\n<li>le <strong>positionnement</strong> par satellite et le <strong>guidage</strong> (manuel assisté ou autoguidage) ;</li>\n<li>la <strong>gestion des données</strong> : cartes de préconisation, cartes de rendement, enregistrement des travaux.</li>\n</ul>\n<p>Les bénéfices pour l'agriculteur sont mesurables : moins de recouvrements entre passages (économie d'intrants et de carburant), moins de manques, confort de conduite, traçabilité réglementaire des interventions. Ils supposent une installation et un réglage rigoureux : un décalage de quelques centimètres répété sur chaque passage se traduit par des recouvrements ou des bandes non traitées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le technicien de l'option matériels agricoles intervient de plus en plus sur des pannes « sans pièce cassée » : paramètres, compatibilités, abonnements de correction, mises à jour. La rigueur dans la configuration est aussi importante que la compétence mécanique.</div>"
      },
      {
       "titre": "L'architecture ISOBUS",
       "contenu": "<p>La norme <strong>ISOBUS</strong> (ISO 11783) permet à un outil de n'importe quelle marque de communiquer avec un tracteur et un terminal compatibles. L'ensemble comprend :</p>\n<ul>\n<li>le <strong>calculateur de l'outil</strong> (ECU outil), qui contient le logiciel de commande de l'outil et son <strong>interface utilisateur</strong> (masques d'écran) ;</li>\n<li>le <strong>terminal universel</strong> en cabine (UT), qui affiche l'interface de l'outil et permet de le commander ;</li>\n<li>le <strong>calculateur du tracteur</strong> (TECU), qui fournit à l'outil les informations du tracteur (vitesse, régime de prise de force, position du relevage) et, selon le niveau de fonctionnalité, peut recevoir des commandes de l'outil ;</li>\n<li>la <strong>prise ISOBUS</strong> arrière (et éventuellement une prise en cabine), qui transporte l'alimentation et le bus CAN, avec des terminaisons actives.</li>\n</ul>\n<p>Les fonctionnalités sont certifiées par familles : terminal universel (UT), contrôleur de tâches (TC) pour la documentation, la coupure de tronçons (TC-SC) et la modulation géolocalisée (TC-GEO), commande auxiliaire (AUX-N), et fonctions où l'outil commande le tracteur (TIM). Deux équipements ne coopèrent pour une fonction que s'ils sont tous deux certifiés pour celle-ci.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> « compatible ISOBUS » ne signifie pas « compatible pour tout ». Avant de promettre une fonction à un client, on vérifie les fonctionnalités certifiées du tracteur, du terminal et de l'outil dans la base de données de compatibilité ISOBUS de l'organisation professionnelle qui gère la certification.</div>"
      },
      {
       "titre": "Positionnement par satellite et corrections",
       "contenu": "<p>Un <strong>récepteur GNSS</strong> (systèmes GPS, Galileo, GLONASS, BeiDou) calcule sa position à partir des signaux de plusieurs satellites. Sans correction, la précision est de l'ordre du mètre, insuffisante pour la plupart des travaux. Plusieurs niveaux de <strong>correction</strong> existent :</p>\n<table>\n<thead><tr><th>Correction</th><th>Principe</th><th>Précision indicative passage à passage</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Correction satellitaire gratuite</td><td>Corrections diffusées par satellites géostationnaires</td><td>De l'ordre de 20 à 30 cm</td><td>Épandage, pulvérisation, guidage manuel</td></tr>\n<tr><td>Correction satellitaire payante</td><td>Service d'abonnement du constructeur</td><td>De quelques centimètres à une dizaine de centimètres</td><td>Travaux du sol, guidage automatique</td></tr>\n<tr><td>RTK</td><td>Corrections d'une station de base fixe proche, reçues par radio ou par réseau mobile</td><td>De l'ordre de 2 cm, répétable d'une année sur l'autre</td><td>Semis, binage, culture en planches permanentes</td></tr>\n</tbody>\n</table>\n<p>L'<strong>autoguidage</strong> agit sur la direction du tracteur, soit par une valve électrohydraulique intégrée au circuit de direction, soit par un moteur électrique monté sur le volant. Le calculateur de guidage compare la position et le cap réels à la ligne de guidage et commande la direction ; une <strong>centrale inertielle</strong> compense les mouvements de roulis et de tangage de l'antenne placée sur le toit.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une perte de précision RTK signalée par un client vient souvent de la liaison de correction (couverture réseau mobile, abonnement expiré, station de base déplacée ou en panne) plutôt que du récepteur. Le technicien consulte d'abord l'état de la correction affiché par le terminal.</div>"
      },
      {
       "titre": "Installer et paramétrer un système de guidage",
       "contenu": "<p>Le calculateur de guidage doit connaître la géométrie exacte du tracteur et de l'outil. Les paramètres essentiels sont :</p>\n<ul>\n<li>les <strong>décalages</strong> (offsets) de l'antenne par rapport à l'essieu arrière : hauteur, position longitudinale et latérale ;</li>\n<li>l'<strong>empattement</strong> et le type de direction ;</li>\n<li>les dimensions de l'outil : largeur de travail, distance entre point d'attelage et ligne de travail, décalage latéral éventuel ;</li>\n<li>les <strong>calibrations</strong> : capteur d'angle de roue, inclinaison de la centrale inertielle sur sol plat, réponse de la direction.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier le réglage d'un guidage par le test aller-retour : 1) sur un terrain plat, tracer une ligne de guidage et rouler en autoguidage à vitesse de travail ; 2) marquer au sol la position d'un point fixe du tracteur (centre de l'attelage) à un endroit repéré ; 3) faire demi-tour et repasser en sens inverse sur la même ligne ; 4) marquer à nouveau au même endroit ; 5) mesurer l'écart entre les deux marques : la moitié de cet écart correspond à l'erreur de décalage latéral de l'antenne ; 6) corriger le paramètre et refaire le test jusqu'à un écart dans la tolérance du système.</div>\n<p>Après tout changement d'antenne, de pneumatiques (rayon), de voie ou de calculateur, les calibrations sont à refaire.</p>\n<p>L'installation matérielle compte autant que le paramétrage. L'antenne se fixe sur le support prévu par le constructeur, au centre du toit, avec une vue dégagée du ciel ; ses câbles cheminent à l'écart des faisceaux de puissance et ne sont jamais pincés par une porte ou une vitre. Le capteur d'angle de roue est monté sans jeu sur la fusée, et le moteur de volant ou la valve de direction respectent la notice du kit, car une intervention sur la direction touche à la sécurité routière du tracteur. Le kit doit enfin disposer d'un dispositif de reprise en main immédiate par le conducteur, dont on vérifie le fonctionnement à chaque essai.</p>"
      },
      {
       "titre": "Coupure de tronçons, modulation de dose et données",
       "contenu": "<p>La <strong>coupure automatique de tronçons</strong> ferme les tronçons de rampe, les rangs de semoir ou les secteurs d'épandeur lorsqu'ils passent sur une surface déjà travaillée ou hors de la parcelle. Elle exige une position précise, une géométrie d'outil correcte et le réglage des <strong>temps d'anticipation</strong> d'ouverture et de fermeture (le délai entre l'ordre et l'effet réel au sol).</p>\n<p>La <strong>modulation de dose</strong> fait varier la dose appliquée selon une <strong>carte de préconisation</strong> issue d'images satellites, de cartes de sol ou de rendement. Le contrôleur de tâches lit la carte, connaît la position de chaque section de l'outil et envoie la consigne de dose au calculateur de l'outil.</p>\n<p>Les <strong>données</strong> (travaux réalisés, doses appliquées, cartes de rendement mesurées par le capteur de débit de grain et d'humidité de la moissonneuse) sont échangées entre le terminal et le logiciel de l'exploitation, par clé USB ou par liaison sans fil, dans des formats normalisés ou propriétaires.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un temps d'anticipation mal réglé provoque des manques ou des recouvrements systématiques en début et fin de passage, qui peuvent être pris pour une panne de vanne. On vérifie au sol la position réelle d'ouverture et de fermeture avant de remplacer un composant.</div>"
      },
      {
       "titre": "Diagnostiquer un ensemble connecté",
       "contenu": "<p>Les pannes des systèmes de précision se répartissent en trois familles, qu'il faut départager méthodiquement.</p>\n<table>\n<thead><tr><th>Famille</th><th>Symptômes</th><th>Contrôles</th></tr></thead>\n<tbody>\n<tr><td>Communication</td><td>Interface de l'outil absente du terminal, messages de perte de communication</td><td>Alimentation de la prise ISOBUS, terminaisons, connecteurs, résistance du bus, versions logicielles, effacement du pool d'objets mis en mémoire</td></tr>\n<tr><td>Positionnement</td><td>Précision dégradée, guidage qui ondule ou dérive</td><td>Nombre de satellites, état de la correction, abonnement, offsets, calibrations, jeu dans la direction</td></tr>\n<tr><td>Paramétrage et données</td><td>Doses fausses, coupures décalées, carte non lue</td><td>Géométrie de l'outil, temps d'anticipation, format de fichier, unités, étalonnage de l'outil</td></tr>\n</tbody>\n</table>\n<p>Un guidage qui oscille autour de la ligne n'est pas toujours un défaut électronique : jeu dans la direction, pneumatiques sous-gonflés, sensibilité de direction trop élevée ou centrale inertielle mal calibrée donnent le même symptôme.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant de conclure à une panne d'un calculateur d'outil, on essaie l'outil avec un autre terminal ou le terminal avec un autre outil connu. Cet échange croisé départage rapidement l'élément en cause.</div>"
      }
     ],
     "points_cles": [
      "L'agriculture de précision repose sur ISOBUS, le positionnement par satellite et la gestion des données.",
      "ISOBUS relie calculateur d'outil, terminal universel et calculateur du tracteur par un bus CAN normalisé.",
      "Les fonctionnalités ISOBUS sont certifiées séparément ; leur compatibilité se vérifie avant de promettre une fonction.",
      "La correction RTK donne une précision de l'ordre de 2 cm, répétable.",
      "Offsets d'antenne, géométrie de l'outil et calibrations conditionnent la précision du guidage.",
      "Le test aller-retour mesure l'erreur de décalage latéral.",
      "La coupure de tronçons exige des temps d'anticipation correctement réglés.",
      "Les pannes se répartissent entre communication, positionnement et paramétrage ; l'échange croisé départage."
     ],
     "lexique": [
      {
       "terme": "ISOBUS",
       "def": "Norme de communication (ISO 11783) entre tracteurs, outils et terminaux agricoles."
      },
      {
       "terme": "Terminal universel",
       "def": "Écran de cabine capable d'afficher et de commander n'importe quel outil ISOBUS compatible."
      },
      {
       "terme": "Contrôleur de tâches",
       "def": "Fonction qui gère la documentation, la coupure de sections et la modulation selon la position."
      },
      {
       "terme": "GNSS",
       "def": "Ensemble des systèmes de positionnement par satellites."
      },
      {
       "terme": "RTK",
       "def": "Technique de correction en temps réel à partir d'une station de base fixe, donnant une précision centimétrique."
      },
      {
       "terme": "Centrale inertielle",
       "def": "Capteur qui mesure les inclinaisons et rotations pour corriger la position de l'antenne."
      },
      {
       "terme": "Offset",
       "def": "Décalage entre l'antenne GNSS et un point de référence du tracteur ou de l'outil."
      },
      {
       "terme": "Carte de préconisation",
       "def": "Fichier qui indique la dose à appliquer en chaque point d'une parcelle."
      },
      {
       "terme": "Temps d'anticipation",
       "def": "Délai pris en compte pour que l'ouverture ou la fermeture d'une section coïncide avec la position voulue."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Option B : matériels de construction et de manutention",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmm-b-engins-terrassement",
     "titre": "Engins de terrassement : pelles hydrauliques et chargeuses",
     "niveau": "1re-Tle",
     "options": [
      "b"
     ],
     "duree": 45,
     "objectifs": [
      "Décrire l'architecture d'une pelle hydraulique et d'une chargeuse sur pneus",
      "Expliquer le fonctionnement de la tourelle : couronne d'orientation, moteur et frein de rotation, joint tournant",
      "Identifier les circuits d'une pelle : pompes, distributeur principal, pilotage, priorités et régénération",
      "Contrôler les performances d'un engin par les temps de cycle et les pressions",
      "Assurer le suivi des organes d'usure des équipements"
     ],
     "sections": [
      {
       "titre": "Les familles d'engins de terrassement",
       "contenu": "<p>Les <strong>engins de terrassement</strong> extraient, chargent, transportent et régalent des matériaux. Les principaux sont :</p>\n<table>\n<thead><tr><th>Engin</th><th>Fonction principale</th><th>Particularités</th></tr></thead>\n<tbody>\n<tr><td>Pelle hydraulique sur chenilles ou sur pneus</td><td>Excaver, charger, manutentionner</td><td>Tourelle orientable à 360°, équipement flèche-balancier-godet</td></tr>\n<tr><td>Mini-pelle</td><td>Petits terrassements, tranchées</td><td>Flèche déportable, lame, rayon de rotation court</td></tr>\n<tr><td>Chargeuse sur pneus</td><td>Charger des matériaux en vrac</td><td>Châssis articulé, convertisseur ou transmission hydrostatique</td></tr>\n<tr><td>Chargeuse compacte (sur pneus ou chenilles)</td><td>Petits chantiers, polyvalence</td><td>Direction par différence de vitesse entre côtés</td></tr>\n<tr><td>Tractopelle</td><td>Charger et excaver</td><td>Chargeur à l'avant, pelle rétro à l'arrière</td></tr>\n<tr><td>Bouteur, niveleuse, compacteur, tombereau</td><td>Pousser, régler, compacter, transporter</td><td>Organes spécifiques : lames, vibrateurs, bennes</td></tr>\n</tbody>\n</table>\n<p>Malgré leur diversité, ces engins partagent les mêmes technologies : moteur diesel à post-traitement, hydraulique de puissance à détection de charge ou à régulation électronique, transmissions hydrostatiques ou à convertisseur, électronique de gestion et télématique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un engin de chantier, l'énergie hydraulique est à la fois la source des mouvements de travail, souvent de la translation, de la direction et du freinage. Comprendre la hiérarchie entre ces circuits (priorités) est indispensable au diagnostic.</div>"
      },
      {
       "titre": "La pelle hydraulique : châssis, tourelle et équipement",
       "contenu": "<p>Une pelle se compose d'un <strong>châssis inférieur</strong> (train de roulement à chenilles ou essieux), d'une <strong>tourelle</strong> (structure supérieure portant le moteur, les pompes, le réservoir, la cabine et le contrepoids) et d'un <strong>équipement</strong> (flèche, balancier, godet ou outil).</p>\n<p>La tourelle est reliée au châssis par une <strong>couronne d'orientation</strong> : un très grand roulement à billes ou à rouleaux, à denture intérieure ou extérieure, boulonné sur les deux structures. Le <strong>moteur de rotation</strong> hydraulique entraîne, par un réducteur épicycloïdal, un pignon qui engrène sur la denture de la couronne. Un <strong>frein de rotation</strong> à disques, serré par ressorts et desserré par pression, immobilise la tourelle au repos.</p>\n<p>L'huile passe de la tourelle au châssis inférieur (moteurs de translation, lame, stabilisateurs) par le <strong>joint tournant</strong> (ou collecteur rotatif) : un corps fixe et un axe tournant comportant plusieurs passages séparés par des joints.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler le jeu de la couronne d'orientation : 1) placer la pelle sur sol plat et dur, flèche orientée vers l'avant ; 2) fixer un comparateur sur le châssis, touche en appui sous la tourelle au plus près de la couronne ; 3) mettre le comparateur à zéro, équipement levé et godet en l'air ; 4) poser le godet au sol et soulever légèrement l'avant de la machine avec l'équipement ; 5) lire le déplacement : c'est le jeu de basculement ; 6) comparer à la valeur limite constructeur et l'enregistrer dans le suivi, la tendance étant plus significative que la valeur isolée ; 7) contrôler aussi le serrage des vis de couronne et le graissage des pistes et de la denture.</div>"
      },
      {
       "titre": "Les circuits hydrauliques d'une pelle",
       "contenu": "<p>La plupart des pelles moyennes et grosses utilisent <strong>deux pompes principales</strong> à pistons axiaux à cylindrée variable, auxquelles s'ajoutent une pompe de pilotage et parfois une pompe auxiliaire. Chaque pompe alimente une moitié du <strong>distributeur principal</strong> ; selon les fonctions demandées, une <strong>jonction</strong> réunit les deux débits sur une même fonction (montée de flèche, rentrée de balancier) pour accélérer le mouvement.</p>\n<p>Le <strong>circuit de pilotage</strong> basse pression alimente les <strong>manipulateurs</strong> (joysticks), qui délivrent une pression proportionnelle à leur inclinaison ; cette pression déplace les tiroirs du distributeur principal. Sur les machines récentes, les manipulateurs sont électriques et le calculateur commande des électrovannes proportionnelles de pilotage.</p>\n<p>Plusieurs fonctions particulières sont à connaître :</p>\n<ul>\n<li>la <strong>régénération</strong> : à la descente de la flèche ou à la sortie du balancier, l'huile qui sort du côté tige est renvoyée côté fond, ce qui accélère le mouvement sans débit de pompe supplémentaire ;</li>\n<li>les <strong>priorités</strong> : la rotation ou la flèche peuvent être prioritaires sur d'autres fonctions selon le mode de travail ;</li>\n<li>la <strong>surpuissance</strong> momentanée : élévation temporaire de la pression maximale pour un effort ponctuel ;</li>\n<li>le <strong>circuit outil</strong> (brise-roche, pince de tri, rotor) avec débit et pression réglables dans le terminal ;</li>\n<li>le <strong>levier de sécurité</strong> (console relevée) qui coupe le pilotage quand l'opérateur sort de la cabine.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le brise-roche renvoie un débit pulsé et chaud ; il impose un filtre de retour spécifique et des vidanges d'huile hydraulique plus fréquentes. Un circuit outil mal paramétré (débit trop fort, retour non libre) dégrade rapidement l'outil et l'huile de toute la machine.</div>"
      },
      {
       "titre": "La chargeuse sur pneus",
       "contenu": "<p>La <strong>chargeuse sur pneus</strong> est un engin à <strong>châssis articulé</strong> : la direction est obtenue par deux vérins qui font pivoter le châssis avant par rapport au châssis arrière autour d'une articulation centrale verticale. L'équipement de chargement associe des <strong>bras de levage</strong> et une <strong>tringlerie de cavage</strong>, souvent en Z, qui garantit un bon effort d'arrachement et un maintien approximatif de l'angle du godet pendant la levée.</p>\n<p>Les fonctions automatiques courantes sont le <strong>retour en position de creusage</strong> (le godet revient à plat au sol), la <strong>limitation de hauteur</strong> de levée, la <strong>suspension des bras</strong> par accumulateur qui réduit le tangage en déplacement, et la <strong>direction de secours</strong> qui assure la direction en cas d'arrêt du moteur.</p>\n<p>La transmission est soit à <strong>convertisseur de couple</strong> et boîte sous charge, soit <strong>hydrostatique</strong>, soit à variation continue sur les machines récentes. Les essieux portent des freins multidisques immergés et des différentiels à glissement limité ou blocables.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'articulation centrale et les axes de bras sont très sollicités. Une plainte de « claquements en braquant » oriente vers l'usure des bagues et des roulements d'articulation, ou des rotules de vérins de direction, à mesurer au comparateur avant de démonter.</div>"
      },
      {
       "titre": "Mesurer les performances : temps de cycle et pressions",
       "contenu": "<p>Les constructeurs fournissent des tableaux de <strong>temps de cycle</strong> (montée de flèche, sortie de balancier, cavage, rotation sur trois tours, translation sur une distance donnée) mesurés dans des conditions précises : huile à température, moteur à plein régime, mode de puissance défini, godet vide.</p>\n<p>Comparer les temps mesurés aux valeurs de référence permet d'orienter le diagnostic :</p>\n<ul>\n<li>toutes les fonctions lentes : moteur, pompes, régulation de puissance, pilotage général ;</li>\n<li>les fonctions d'une même pompe lentes : pompe ou régulation de cette pompe ;</li>\n<li>une seule fonction lente : tiroir, pilotage, vérin ou limiteur de cette fonction ;</li>\n<li>les mouvements combinés lents mais les mouvements isolés normaux : jonction, priorités, partage de débit.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mesurer un temps de cycle : 1) amener l'huile à la température prescrite ; 2) sélectionner le mode et le régime prescrits ; 3) placer l'équipement dans la position de départ indiquée ; 4) actionner la commande à fond d'un coup et chronométrer jusqu'à la butée ; 5) répéter trois fois et faire la moyenne ; 6) comparer à la tolérance du tableau ; 7) en cas d'écart, mesurer les pressions de pilotage et de travail correspondantes.</div>"
      },
      {
       "titre": "Organes d'usure des équipements",
       "contenu": "<p>Les équipements de terrassement subissent une usure abrasive intense. Le suivi porte sur :</p>\n<ul>\n<li>les <strong>dents de godet</strong> et leurs porte-dents, les couteaux et lames d'usure, les protections latérales ;</li>\n<li>les <strong>axes et bagues</strong> d'articulation, dont le jeu se mesure ;</li>\n<li>les <strong>attaches rapides</strong>, qui doivent être verrouillées mécaniquement et dont la sécurité de verrouillage est contrôlée à chaque visite ;</li>\n<li>les <strong>soudures</strong> et zones de concentration de contraintes de la flèche et du balancier, inspectées pour détecter les fissures ;</li>\n<li>les <strong>flexibles</strong>, exposés aux frottements et aux pincements.</li>\n</ul>\n<p>Le graissage des articulations est la première protection contre leur usure. Il est réalisé quotidiennement par l'opérateur ou automatiquement par une <strong>centrale de graissage</strong> qui distribue la graisse à chaque point par des doseurs. Le technicien contrôle le fonctionnement de la centrale (niveau du réservoir, cycles, absence de canalisation arrachée) et vérifie qu'une graisse fraîche sort bien à chaque articulation. Une articulation sèche se reconnaît à sa couleur rouille et à son grincement ; elle doit être traitée sans attendre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> remplacer les dents avant que le porte-dent ne s'use coûte beaucoup moins cher que de reconstruire le godet. Le suivi de l'usure des pièces d'attaque relève de la maintenance conditionnelle et se planifie avec le client selon le matériau travaillé.</div>"
      }
     ],
     "points_cles": [
      "Les engins de terrassement partagent moteur à post-traitement, hydraulique de puissance, transmissions hydrostatiques ou à convertisseur et électronique.",
      "La couronne d'orientation porte la tourelle ; son jeu de basculement se mesure au comparateur et se suit dans le temps.",
      "Le joint tournant fait passer l'huile de la tourelle au châssis inférieur.",
      "Deux pompes à cylindrée variable alimentent le distributeur principal, avec jonction des débits.",
      "La régénération accélère certains mouvements en recyclant l'huile côté tige.",
      "La chargeuse sur pneus est articulée et dispose d'une direction de secours.",
      "Les temps de cycle, mesurés dans les conditions prescrites, orientent le diagnostic.",
      "Les pièces d'attaque et articulations relèvent de la maintenance conditionnelle."
     ],
     "lexique": [
      {
       "terme": "Tourelle",
       "def": "Structure supérieure orientable d'une pelle qui porte moteur, cabine et équipement."
      },
      {
       "terme": "Couronne d'orientation",
       "def": "Roulement de grand diamètre denté qui relie la tourelle au châssis et permet sa rotation."
      },
      {
       "terme": "Frein de rotation",
       "def": "Frein à disques serré par ressorts qui immobilise la tourelle au repos."
      },
      {
       "terme": "Joint tournant",
       "def": "Raccord rotatif multi-passages qui transfère l'huile entre tourelle et châssis."
      },
      {
       "terme": "Jonction",
       "def": "Réunion des débits de deux pompes sur une même fonction."
      },
      {
       "terme": "Régénération",
       "def": "Recyclage de l'huile sortant côté tige vers le côté fond d'un vérin pour accélérer son mouvement."
      },
      {
       "terme": "Manipulateur",
       "def": "Commande de l'opérateur qui délivre un signal proportionnel (pression ou électrique) à son inclinaison."
      },
      {
       "terme": "Châssis articulé",
       "def": "Châssis en deux parties reliées par une articulation verticale, qui assure la direction."
      },
      {
       "terme": "Tringlerie en Z",
       "def": "Cinématique de cavage d'une chargeuse favorisant l'effort d'arrachement."
      },
      {
       "terme": "Temps de cycle",
       "def": "Durée d'un mouvement complet d'un équipement dans des conditions définies."
      }
     ]
    },
    {
     "id": "bmm-b-trains-chenilles",
     "titre": "Trains de roulement à chenilles et organes de translation",
     "niveau": "Tle",
     "options": [
      "b"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire les composants d'un train de roulement à chenilles",
      "Régler la tension d'une chenille et en expliquer l'importance",
      "Mesurer l'usure des éléments du train de roulement et calculer un pourcentage d'usure",
      "Décrire la chaîne de translation : moteur hydraulique, frein et réducteur",
      "Conseiller le client sur l'utilisation pour limiter l'usure"
     ],
     "sections": [
      {
       "titre": "Composition d'un train de roulement",
       "contenu": "<p>Le <strong>train de roulement</strong> d'une pelle, d'un bouteur ou d'une chargeuse sur chenilles représente une part importante du coût de maintenance de l'engin. Il comprend, de chaque côté :</p>\n<ul>\n<li>le <strong>longeron</strong> (châssis de chenille) ;</li>\n<li>la <strong>chaîne</strong>, formée de <strong>maillons</strong> assemblés par des <strong>axes</strong> et des <strong>bagues</strong> ; les chaînes lubrifiées contiennent de l'huile retenue par des joints entre axe et bague ;</li>\n<li>les <strong>tuiles</strong> (patins) boulonnées sur les maillons, à une, deux ou trois arêtes selon l'usage, ou des chenilles en caoutchouc sur les mini-engins ;</li>\n<li>le <strong>barbotin</strong> (roue motrice dentée), entraîné par le réducteur de translation ;</li>\n<li>la <strong>roue folle</strong> (roue de tension) à l'avant, montée sur un coulisseau ;</li>\n<li>les <strong>galets inférieurs</strong>, qui portent la masse de l'engin, et les <strong>galets supérieurs</strong> (ou patins de guidage) qui soutiennent le brin supérieur ;</li>\n<li>le <strong>dispositif de tension</strong> : un vérin à graisse associé à un fort ressort récupérateur ;</li>\n<li>les <strong>guide-chaînes</strong>, qui maintiennent la chaîne alignée.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les éléments du train de roulement s'usent ensemble et interagissent. Une chaîne allongée use le barbotin ; un barbotin usé accélère l'usure des bagues. Le suivi et le remplacement se raisonnent donc en ensemble cohérent.</div>"
      },
      {
       "titre": "La tension de chenille",
       "contenu": "<p>La <strong>tension</strong> est le réglage d'entretien le plus important du train de roulement. Une chenille <strong>trop tendue</strong> augmente fortement les efforts sur les axes, les bagues, le barbotin, la roue folle et les galets, absorbe de la puissance et accélère l'usure de tout le train. Une chenille <strong>trop lâche</strong> risque de dérailler, fouette et use les flancs des dents de barbotin et les guide-chaînes.</p>\n<p>La tension se règle en injectant de la graisse dans le vérin de tension par un graisseur (pour tendre) ou en ouvrant une valve de purge (pour détendre). On la contrôle par la mesure de la <strong>flèche</strong> du brin supérieur, ou de la distance sous le longeron pour les engins sans galets supérieurs, selon la méthode du constructeur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> régler la tension d'une chenille de pelle : 1) faire avancer puis arrêter la machine sur sol plat, en finissant par un déplacement en marche avant pour tendre le brin inférieur et détendre le brin supérieur ; 2) soulever le côté à contrôler avec l'équipement et faire tourner la chenille dans le vide quelques tours, puis l'arrêter ; 3) poser la machine sur des cales de sécurité ; 4) mesurer la flèche entre le bas du longeron et le dessus des tuiles au point prescrit ; 5) comparer à la plage du constructeur, adaptée au type de sol (on tend un peu moins en terrain boueux ou collant) ; 6) ajuster en injectant ou en purgeant de la graisse ; 7) faire tourner et recontrôler.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le vérin de tension contient de la graisse à très haute pression. On ouvre la valve de purge d'un tour au maximum, sans se placer face à elle. Si la chenille ne se détend pas, la graisse a durci ou le coulisseau est bloqué : on ne démonte jamais le ressort récupérateur, qui stocke une énergie considérable, sans l'outillage et la procédure du constructeur.</div>"
      },
      {
       "titre": "Mesurer l'usure du train de roulement",
       "contenu": "<p>L'usure du train de roulement se mesure périodiquement avec des outils simples (règle, pied à coulisse, jauge de profondeur) ou à ultrasons, aux points définis par le constructeur. Chaque mesure se compare à la cote neuve et à la cote limite pour calculer un <strong>pourcentage d'usure</strong>.</p>\n<table>\n<thead><tr><th>Élément</th><th>Mesure</th></tr></thead>\n<tbody>\n<tr><td>Chaîne</td><td>Longueur sur un nombre de maillons donné (allongement du pas, dû à l'usure interne axe-bague)</td></tr>\n<tr><td>Maillons</td><td>Hauteur du rail de roulement</td></tr>\n<tr><td>Bagues</td><td>Diamètre extérieur</td></tr>\n<tr><td>Tuiles</td><td>Hauteur d'arête</td></tr>\n<tr><td>Galets</td><td>Diamètre de la bande de roulement ou hauteur du bourrelet</td></tr>\n<tr><td>Roue folle</td><td>Hauteur du bourrelet central</td></tr>\n<tr><td>Barbotin</td><td>Profil des dents (gabarit)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un pourcentage d'usure linéaire. Données : hauteur de maillon neuve 105 mm, limite d'usure 95 mm, mesure 99 mm. 1) Usure admissible totale : 105 − 95 = 10 mm. 2) Usure réalisée : 105 − 99 = 6 mm. 3) Pourcentage : 6 ÷ 10 × 100 = 60 %. 4) Avec les heures de fonctionnement (par exemple 3 000 h), on estime la durée restante si l'usure reste régulière : 4 mm restants à 2 mm pour 1 000 h, soit environ 2 000 h. Les constructeurs fournissent souvent des tableaux non linéaires plus précis que ce calcul.</div>"
      },
      {
       "titre": "La chaîne de translation",
       "contenu": "<p>La translation d'un engin sur chenilles est généralement <strong>hydrostatique</strong>. Chaque chenille est entraînée par un <strong>moteur hydraulique</strong> à pistons axiaux, souvent à deux cylindrées (petite et grande vitesse), suivi d'un <strong>réducteur final</strong> épicycloïdal à plusieurs étages logé dans le moyeu du barbotin. Un <strong>frein de stationnement</strong> multidisque, serré par ressorts et desserré par la pression de translation, est intégré au moteur.</p>\n<p>Un <strong>clapet d'équilibrage</strong> (contre-balance) dans le moteur contrôle la descente en pente et empêche l'emballement. Sur les pelles, l'huile arrive aux moteurs par le joint tournant ; la marche en ligne droite lorsque l'opérateur actionne simultanément l'équipement est assurée par une valve qui répartit le débit (valve de translation droite).</p>\n<p>Les points de maintenance sont le niveau et la qualité de l'huile du réducteur (bouchon positionné selon le repère, souvent à l'horizontale ou à la verticale), l'étanchéité du joint à faces entre le moyeu tournant et le corps fixe, et le débit de drain du moteur hydraulique.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une pelle qui « tire d'un côté » en translation peut souffrir d'une fuite interne dans un moteur de translation, d'un défaut de la valve de translation droite, d'un passage du joint tournant, ou simplement d'une différence de tension entre les deux chenilles. On commence par les contrôles simples et symétriques : tension, vitesse de rotation de chaque chenille levée, puis pressions.</div>"
      },
      {
       "titre": "Influence de l'utilisation sur l'usure",
       "contenu": "<p>L'usure du train de roulement dépend fortement des conditions d'utilisation, sur lesquelles le technicien peut conseiller le client :</p>\n<ul>\n<li>la <strong>marche arrière</strong> prolongée use davantage les bagues et le barbotin que la marche avant ;</li>\n<li>la <strong>vitesse élevée</strong> de translation inutile augmente l'usure ;</li>\n<li>les <strong>pivotements</strong> sur place répétés usent les flancs des maillons, des galets et des guide-chaînes ;</li>\n<li>travailler toujours en <strong>dévers</strong> du même côté use de façon dissymétrique ;</li>\n<li>des <strong>tuiles trop larges</strong> pour le sol augmentent les efforts sur la chaîne ;</li>\n<li>la <strong>boue</strong> et les matériaux collants, non nettoyés, se compactent dans le barbotin et augmentent la tension réelle.</li>\n</ul>\n<p>Les relevés d'usure, faits à intervalles réguliers et enregistrés avec les heures de fonctionnement, permettent de proposer au client la meilleure stratégie : retournement des axes et bagues sur certaines chaînes à mi-vie, remplacement des seules tuiles, ou remplacement complet de la chaîne et du barbotin au bon moment, avant que l'usure de l'un ne détruise l'autre. Cette planification évite une immobilisation imprévue en plein chantier et permet de commander les pièces à l'avance.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> nettoyer le train de roulement en fin de journée, régler la tension selon le terrain et limiter la marche arrière et les pivotements à grande vitesse prolongent sa durée de vie de façon significative. Ce conseil a une vraie valeur économique pour le client.</div>"
      },
      {
       "titre": "Chenilles en caoutchouc des mini-engins",
       "contenu": "<p>Les mini-pelles et chargeuses compactes utilisent souvent des <strong>chenilles en caoutchouc</strong> armées de câbles d'acier et d'inserts métalliques sur lesquels engrène le barbotin. Elles protègent les sols revêtus mais sont sensibles aux coupures (gravats, ferrailles, arêtes de bordures).</p>\n<p>Leur contrôle porte sur les coupures traversantes, les câbles apparents ou rompus, les inserts arrachés et l'usure des crampons. Leur tension se règle comme celle des chaînes acier, généralement plus faible, selon la valeur constructeur. Une chenille caoutchouc dont les câbles sont rompus peut se rompre brutalement et doit être remplacée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> monter une chenille caoutchouc d'une autre marque ou d'un autre profil sans vérifier la compatibilité du pas, de la largeur et du guidage avec les galets peut provoquer des déraillements répétés.</div>"
      }
     ],
     "points_cles": [
      "Le train de roulement comprend chaîne, tuiles, barbotin, roue folle, galets, dispositif de tension et guide-chaînes.",
      "Les éléments s'usent ensemble et se raisonnent en ensemble cohérent.",
      "Une chenille trop tendue use tout le train ; trop lâche, elle déraille.",
      "La tension se règle par graisse dans le vérin et se contrôle par la flèche, selon le terrain.",
      "Le ressort récupérateur et le vérin de tension stockent une énergie dangereuse.",
      "Le pourcentage d'usure se calcule entre cote neuve et cote limite.",
      "La translation est assurée par un moteur hydraulique à frein intégré et un réducteur épicycloïdal.",
      "L'utilisation (marche arrière, pivotements, vitesse, boue) influence fortement l'usure."
     ],
     "lexique": [
      {
       "terme": "Train de roulement",
       "def": "Ensemble des organes qui supportent et font avancer un engin sur chenilles."
      },
      {
       "terme": "Barbotin",
       "def": "Roue motrice dentée qui entraîne la chaîne de chenille."
      },
      {
       "terme": "Roue folle",
       "def": "Roue avant non motrice qui guide la chaîne et permet sa tension."
      },
      {
       "terme": "Galet inférieur",
       "def": "Roue qui porte la masse de l'engin sur la chaîne."
      },
      {
       "terme": "Tuile",
       "def": "Patin boulonné sur la chaîne qui assure le contact avec le sol."
      },
      {
       "terme": "Pas de chaîne",
       "def": "Distance entre les axes de deux maillons consécutifs."
      },
      {
       "terme": "Ressort récupérateur",
       "def": "Ressort puissant qui absorbe les chocs et ramène la roue folle en position."
      },
      {
       "terme": "Flèche de chenille",
       "def": "Affaissement mesuré du brin de chenille qui indique sa tension."
      },
      {
       "terme": "Réducteur de translation",
       "def": "Réducteur épicycloïdal logé dans le moyeu du barbotin."
      },
      {
       "terme": "Pourcentage d'usure",
       "def": "Rapport entre l'usure constatée et l'usure admissible totale d'une pièce."
      }
     ]
    },
    {
     "id": "bmm-b-chariots-manutention",
     "titre": "Chariots de manutention : chariots élévateurs et chariots télescopiques",
     "niveau": "1re-Tle",
     "options": [
      "b"
     ],
     "duree": 45,
     "objectifs": [
      "Distinguer les familles de chariots de manutention et leurs domaines d'emploi",
      "Expliquer la stabilité d'un chariot et lire une plaque de charge",
      "Décrire le mât, le tablier et leurs chaînes, et contrôler leur usure",
      "Assurer la maintenance des chariots thermiques, au gaz et électriques",
      "Entretenir une batterie de traction en sécurité"
     ],
     "sections": [
      {
       "titre": "Les familles de chariots",
       "contenu": "<p>Les <strong>chariots de manutention automoteurs</strong> transportent, lèvent et gerbent des charges, le plus souvent sur palettes. Les principaux types sont :</p>\n<table>\n<thead><tr><th>Type</th><th>Principe</th><th>Emploi</th></tr></thead>\n<tbody>\n<tr><td>Chariot élévateur frontal en porte-à-faux</td><td>Charge portée devant les roues avant, équilibrée par un contrepoids arrière</td><td>Entrepôts, quais, cours de matériaux</td></tr>\n<tr><td>Chariot à mât rétractable</td><td>Le mât avance et recule entre des longerons porteurs</td><td>Stockage en grande hauteur, allées étroites</td></tr>\n<tr><td>Gerbeur et transpalette électriques</td><td>Conducteur accompagnant ou porté debout</td><td>Préparation de commandes, faibles hauteurs</td></tr>\n<tr><td>Chariot élévateur tout-terrain</td><td>Chariot frontal à grandes roues et transmission adaptée</td><td>Chantiers, scieries, exploitations</td></tr>\n<tr><td>Chariot télescopique</td><td>Flèche télescopique articulée à l'arrière du châssis, outils interchangeables</td><td>Bâtiment, agriculture, industrie</td></tr>\n</tbody>\n</table>\n<p>L'énergie peut être thermique (diesel), au <strong>gaz de pétrole liquéfié</strong> (moteur à allumage commandé, utilisation intérieure avec ventilation) ou électrique (batterie plomb ou lithium, de plus en plus majoritaire en intérieur).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un chariot élévateur est un engin de levage. À ce titre, il est soumis aux vérifications générales périodiques, et sa conduite exige une autorisation de conduite de l'employeur, généralement appuyée sur le CACES de la recommandation et de la catégorie correspondantes.</div>"
      },
      {
       "titre": "La stabilité et la plaque de charge",
       "contenu": "<p>Un chariot frontal en porte-à-faux fonctionne comme une balance dont l'axe est l'essieu avant : le <strong>moment</strong> de la charge (masse de la charge × distance de son centre de gravité à l'essieu avant) doit rester inférieur au moment de stabilité du chariot (masse du chariot et du contrepoids × distance de leur centre de gravité à l'essieu avant), avec une marge de sécurité.</p>\n<p>Le chariot repose sur un <strong>triangle de stabilité</strong> : les deux roues avant et l'axe d'oscillation de l'essieu arrière. Tant que le centre de gravité de l'ensemble chariot plus charge reste dans ce triangle, le chariot est stable. Lever la charge haut, incliner le mât vers l'avant, freiner brutalement ou virer vite déplacent ce centre de gravité et peuvent provoquer un renversement longitudinal ou latéral.</p>\n<p>La <strong>plaque de charge</strong> (ou abaque) indique la charge admissible selon la hauteur de levée et la distance du centre de gravité de la charge au talon des fourches (souvent 500 mm pour les chariots courants), pour un équipement donné.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'une charge est admissible. Données : chariot de capacité nominale 2 500 kg à 500 mm ; charge de 2 000 kg dont le centre de gravité est à 700 mm du talon des fourches. 1) Moment nominal admis : 2 500 × 500 = 1 250 000 kg·mm. 2) Moment de la charge : 2 000 × 700 = 1 400 000 kg·mm. 3) Le moment de la charge dépasse le moment admis : charge non admissible dans cette configuration. 4) Ce calcul simplifié ne remplace pas l'abaque du constructeur, qui tient compte de la géométrie réelle, mais il montre l'effet majeur de la position de la charge. 5) Conclusion : reprendre la charge au plus près du tablier ou utiliser un chariot plus capacitaire.</div>"
      },
      {
       "titre": "Le mât, le tablier et les chaînes de levage",
       "contenu": "<p>Le <strong>mât</strong> se compose de montants coulissant les uns dans les autres sur des <strong>galets</strong> : simple (simplex), double (duplex) ou triple (triplex). La <strong>levée libre</strong> est la hauteur de levée des fourches avant que le mât ne dépasse sa hauteur repliée, utile pour travailler sous un plafond bas ou dans un conteneur. Le <strong>tablier</strong> porte les fourches et éventuellement un <strong>déplacement latéral</strong> (tablier à translation latérale) ou un équipement (pince, positionneur de fourches, retourneur).</p>\n<p>Le levage est assuré par des vérins qui agissent sur des <strong>chaînes de levage</strong> à mailles (chaînes à plaques) passant sur des poulies : la course du tablier est le double de celle du vérin. Ces chaînes sont des éléments de sécurité dont on contrôle :</p>\n<ul>\n<li>l'<strong>allongement</strong>, mesuré sur un nombre de pas avec une jauge ou un réglet, et comparé à la limite du constructeur ;</li>\n<li>la corrosion, les plaques fissurées, les axes qui tournent ou dépassent ;</li>\n<li>l'égalité de tension des chaînes et leur lubrification ;</li>\n<li>l'état des ancrages et de leurs écrous de réglage.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne remplace jamais une seule chaîne d'une paire, on ne raccourcit jamais une chaîne en retirant des maillons et on ne la répare jamais par soudure. Les deux chaînes se remplacent ensemble, avec réglage de leur tension et du talon de fourche au sol selon la procédure.</div>"
      },
      {
       "titre": "Fourches, hydraulique et sécurités du chariot",
       "contenu": "<p>Les <strong>fourches</strong> sont contrôlées au moins à chaque vérification : épaisseur au talon (une usure de l'ordre de 10 % de l'épaisseur d'origine impose généralement leur retrait, selon la règle du constructeur), fissures au talon, écartement des pointes, hauteur des pointes l'une par rapport à l'autre, état des verrous de positionnement et du marquage.</p>\n<p>Le circuit hydraulique comprend une pompe (souvent entraînée par un moteur électrique dédié sur les chariots électriques), un distributeur à plusieurs fonctions (levée, inclinaison, déplacement latéral, équipements), des vérins de levée à simple effet, des vérins d'inclinaison et des <strong>valves de sécurité</strong> : limiteur de vitesse de descente, clapet de rupture de flexible sur les vérins de levée, blocage de l'inclinaison avant moteur arrêté.</p>\n<p>Les sécurités électriques et électroniques incluent la détection de présence du conducteur, la ceinture de sécurité ou le système de retenue, la limitation de vitesse en virage ou avec charge haute sur certains modèles, le klaxon, les feux et avertisseurs de recul.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les chariots en location ou en contrat de maintenance font l'objet de visites préventives à intervalle d'heures fixe. Le technicien y réalise aussi un contrôle de sécurité (freins, direction, fourches, chaînes, mât, sécurités) et signale par écrit au client tout défaut qui interdit l'utilisation.</div>"
      },
      {
       "titre": "La batterie de traction",
       "contenu": "<p>Les chariots électriques au plomb utilisent une <strong>batterie de traction</strong> composée d'éléments de 2 V à plaques tubulaires, assemblés dans un coffre qui sert aussi de contrepoids. La recharge se fait par un <strong>chargeur</strong> adapté, en général après chaque poste de travail.</p>\n<p>Les règles d'entretien sont :</p>\n<ul>\n<li>éviter les décharges profondes (le chariot limite ses fonctions sous un seuil de charge) ;</li>\n<li>recharger complètement plutôt que par petites charges répétées ;</li>\n<li>contrôler le niveau d'électrolyte et compléter avec de l'<strong>eau déminéralisée</strong> en fin de charge, jamais avant, sur les batteries qui le nécessitent ;</li>\n<li>contrôler périodiquement la densité de chaque élément et réaliser une charge d'égalisation si les éléments sont déséquilibrés ;</li>\n<li>garder le dessus de la batterie propre et sec pour éviter les courants de fuite.</li>\n</ul>\n<p>Les batteries <strong>lithium-ion</strong> se rechargent rapidement, y compris pendant les pauses, ne demandent pas de remise à niveau et sont gérées par leur BMS ; elles imposent toutefois les précautions propres au lithium.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> pendant la charge, une batterie au plomb dégage de l'hydrogène, gaz explosif. La charge se fait dans un local ou une zone ventilés, sans flamme ni étincelle ; on ne débranche jamais la prise de charge sous courant. L'électrolyte est corrosif : lunettes, gants et tablier sont obligatoires, et un rince-œil doit être accessible.</div>"
      },
      {
       "titre": "Le chariot télescopique",
       "contenu": "<p>Le <strong>chariot télescopique</strong> porte sa charge au bout d'une flèche télescopique articulée à l'arrière du châssis. La charge admissible varie fortement avec la portée et la hauteur : l'<strong>abaque</strong> de charge, propre à chaque outil (fourches, godet, nacelle, potence), représente des zones de charge en fonction de l'angle de flèche et de sa sortie, avec ou sans stabilisateurs.</p>\n<p>Le télescopique dispose d'un <strong>contrôleur de moment de charge longitudinal</strong> qui mesure en permanence la tendance au basculement vers l'avant (souvent par un capteur sur l'essieu arrière qui détecte son délestage) et qui alerte puis bloque les mouvements aggravants (sortie de flèche, descente) lorsque la limite est atteinte. Sa transmission est généralement hydrostatique, sa direction offre plusieurs modes (roues avant, quatre roues directrices, marche en crabe), et l'essieu arrière oscillant peut être bloqué.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le contrôleur de moment de charge est un dispositif de sécurité. On vérifie son fonctionnement à chaque visite selon la procédure du constructeur, on ne le neutralise jamais et on refait son étalonnage après toute intervention sur ses capteurs, sur l'essieu arrière ou sur la flèche.</div>"
      }
     ],
     "points_cles": [
      "Chariots frontaux, à mât rétractable, gerbeurs, tout-terrain et télescopiques répondent à des usages différents.",
      "La stabilité d'un chariot frontal repose sur l'équilibre des moments autour de l'essieu avant et sur le triangle de stabilité.",
      "La plaque de charge donne la charge admissible selon hauteur et centre de gravité de la charge.",
      "Les chaînes de levage se contrôlent à l'allongement et se remplacent par paire, jamais réparées.",
      "Les fourches usées au talon ou fissurées sont retirées du service.",
      "La batterie de traction au plomb se recharge complètement, se complète en eau déminéralisée en fin de charge, dans une zone ventilée.",
      "L'abaque du télescopique dépend de l'outil et de l'usage des stabilisateurs.",
      "Le contrôleur de moment de charge ne se neutralise jamais et s'étalonne après intervention."
     ],
     "lexique": [
      {
       "terme": "Chariot en porte-à-faux",
       "def": "Chariot dont la charge est portée en avant des roues et équilibrée par un contrepoids."
      },
      {
       "terme": "Triangle de stabilité",
       "def": "Surface délimitée par les roues avant et l'axe d'oscillation arrière, où doit rester le centre de gravité."
      },
      {
       "terme": "Plaque de charge",
       "def": "Plaque qui indique la charge admissible selon la hauteur et le centre de gravité de la charge."
      },
      {
       "terme": "Levée libre",
       "def": "Hauteur de levée des fourches sans augmentation de la hauteur du mât."
      },
      {
       "terme": "Tablier",
       "def": "Support des fourches qui coulisse le long du mât."
      },
      {
       "terme": "Chaîne de levage",
       "def": "Chaîne à plaques qui transmet l'effort des vérins au tablier."
      },
      {
       "terme": "Batterie de traction",
       "def": "Batterie conçue pour fournir l'énergie de déplacement et de levage d'un engin électrique."
      },
      {
       "terme": "Charge d'égalisation",
       "def": "Charge prolongée qui rééquilibre les éléments d'une batterie au plomb."
      },
      {
       "terme": "Chariot télescopique",
       "def": "Chariot à flèche télescopique et outils interchangeables."
      },
      {
       "terme": "Contrôleur de moment de charge",
       "def": "Dispositif qui surveille le risque de basculement et bloque les mouvements aggravants."
      }
     ]
    },
    {
     "id": "bmm-b-levage-securite",
     "titre": "Levage et sécurité des engins : dispositifs, vérifications et conduite",
     "niveau": "Tle",
     "options": [
      "b"
     ],
     "duree": 40,
     "objectifs": [
      "Identifier les dispositifs de sécurité des engins utilisés pour le levage",
      "Contrôler le fonctionnement d'un limiteur ou indicateur de charge et d'un clapet de sécurité",
      "Préparer un engin à une vérification générale périodique et exploiter son rapport",
      "Situer les formations et autorisations de conduite des engins de chantier et de levage",
      "Contrôler les accessoires de levage utilisés en atelier et sur chantier"
     ],
     "sections": [
      {
       "titre": "Les engins de chantier utilisés pour le levage",
       "contenu": "<p>Sur les chantiers, de nombreux engins sont utilisés pour lever des charges : chariots télescopiques, grues de chargement montées sur camion, pelles utilisées en manutention (pose de canalisations, de bordures, de regards), chargeuses équipées de fourches, nacelles élévatrices. Une pelle n'est pas conçue d'abord pour lever : elle ne peut être utilisée en manutention que si elle est <strong>équipée</strong> pour cela et selon les instructions du constructeur.</p>\n<p>Les normes de sécurité des engins de terrassement prévoient, pour l'utilisation en manutention, des équipements spécifiques :</p>\n<ul>\n<li>des <strong>clapets de sécurité</strong> (clapets de rupture de flexible) sur les vérins de flèche, et selon les cas de balancier, qui empêchent la chute de la charge en cas de rupture d'un flexible ;</li>\n<li>un <strong>dispositif d'avertissement de surcharge</strong> (ou indicateur de moment de charge) qui alerte l'opérateur lorsque la charge approche de la limite de stabilité ou de capacité hydraulique ;</li>\n<li>un <strong>point d'accrochage</strong> prévu et identifié (anneau ou crochet sur la biellette ou le godet, avec sa charge maximale marquée) ;</li>\n<li>un <strong>tableau de charges</strong> en cabine, selon la portée, la hauteur, l'orientation et la configuration (lame posée ou non, stabilisateurs).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lever une charge avec une élingue passée autour d'une dent de godet ou nouée sur le balancier est interdit. Seul le point d'accrochage prévu par le constructeur, avec sa capacité marquée, peut être utilisé.</div>"
      },
      {
       "titre": "Contrôler les dispositifs de sécurité de levage",
       "contenu": "<p>Les dispositifs de sécurité de levage se contrôlent selon les procédures du constructeur, à chaque visite d'entretien et lors des vérifications périodiques.</p>\n<table>\n<thead><tr><th>Dispositif</th><th>Contrôle</th></tr></thead>\n<tbody>\n<tr><td>Clapet de sécurité sur vérin</td><td>Test de maintien de charge moteur arrêté, test de descente de secours selon procédure, absence de dérive</td></tr>\n<tr><td>Indicateur ou limiteur de charge</td><td>Déclenchement de l'alerte avec une charge étalon à une portée donnée, cohérence des valeurs affichées, étalonnage</td></tr>\n<tr><td>Contrôleur de moment longitudinal (télescopique)</td><td>Test fonctionnel prévu par le constructeur, alerte et blocage des mouvements aggravants</td></tr>\n<tr><td>Fins de course et limitations</td><td>Arrêt effectif aux limites programmées</td></tr>\n<tr><td>Point d'accrochage, crochet</td><td>Déformation, fissures, linguet de sécurité, marquage lisible</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un avertisseur de surcharge de pelle avec une charge étalon : 1) choisir dans le tableau de charges une configuration et la charge admissible correspondante ; 2) préparer une charge de masse connue légèrement supérieure à cette valeur, élinguée au point d'accrochage ; 3) placer la pelle sur sol plat et ferme, dans la configuration choisie ; 4) lever la charge à faible hauteur près de la machine, puis l'éloigner lentement ; 5) noter la portée à laquelle l'alerte se déclenche et la comparer à la portée du tableau ; 6) si l'alerte est tardive ou absente, arrêter l'essai, poser la charge, contrôler le capteur de pression et l'étalonnage avant toute remise en service.</div>"
      },
      {
       "titre": "Les vérifications générales périodiques",
       "contenu": "<p>Les appareils de levage et leurs accessoires font l'objet de <strong>vérifications générales périodiques</strong> (VGP), dont la nature et la périodicité sont fixées par l'arrêté du 1<sup>er</sup> mars 2004 selon le type d'appareil ; pour les appareils mobiles de levage comme les chariots élévateurs, la périodicité est semestrielle. Elles sont réalisées par une personne qualifiée, appartenant à l'entreprise ou à un organisme extérieur, et consignées dans un <strong>rapport</strong> joint au registre de sécurité.</p>\n<p>La vérification porte sur l'<strong>état de conservation</strong> de l'appareil (structure, mécanismes, organes de sécurité, freins, câbles et chaînes) et sur des <strong>essais de fonctionnement</strong>. Une vérification est aussi requise lors d'une <strong>remise en service</strong> après un démontage, une réparation importante ou une modification touchant les éléments essentiels du levage.</p>\n<p>Le technicien de maintenance intervient de deux façons :</p>\n<ul>\n<li>avant la VGP, il prépare l'engin pour qu'il soit conforme : défauts connus réparés, sécurités fonctionnelles, documents disponibles (notice, abaque, rapport précédent) ;</li>\n<li>après la VGP, il traite les <strong>observations</strong> du rapport ; chaque observation devient une opération de maintenance à planifier, et celles qui concernent la sécurité doivent être levées avant toute nouvelle utilisation.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un rapport de VGP mentionnant « chaînes de levage : allongement en limite » ou « clapet de sécurité du vérin de flèche : dérive constatée » se traduit en ordre de réparation. Le technicien note sur l'ordre la référence du rapport et l'observation traitée, pour que la levée de la réserve soit traçable.</div>"
      },
      {
       "titre": "Les accessoires de levage de l'atelier",
       "contenu": "<p>Les <strong>accessoires de levage</strong> (élingues en chaîne, en câble ou textiles, manilles, crochets, palonniers, anneaux de levage) font eux aussi l'objet de vérifications périodiques et d'un contrôle visuel avant chaque utilisation. Chaque accessoire porte un marquage de sa <strong>charge maximale d'utilisation</strong> (CMU).</p>\n<p>La charge admissible d'une élingue à plusieurs brins dépend de l'<strong>angle</strong> entre les brins : plus l'angle est ouvert, plus l'effort dans chaque brin augmente. Les fabricants donnent des tableaux de CMU selon le mode d'élingage et l'angle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer l'effort dans les brins d'une élingue à deux brins. Données : charge de 1 000 kg, angle de 60° entre chaque brin et la verticale (soit 120° entre les brins). 1) Le poids vaut environ 9 810 N. 2) Chaque brin porte la moitié du poids divisée par le cosinus de l'angle avec la verticale : 4 905 ÷ cos 60° = 4 905 ÷ 0,5 = 9 810 N. 3) Chaque brin supporte donc autant que la charge entière. 4) Conclusion : à 120° entre les brins, une élingue dont chaque brin est donné pour 1 000 kg ne laisse aucune marge ; on referme l'angle (brins plus longs) ou on choisit une élingue plus capacitaire, en se référant toujours au tableau du fabricant.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une élingue textile coupée, une chaîne dont un maillon est déformé, un crochet ouvert ou sans linguet sont retirés immédiatement du service et rendus inutilisables. On ne répare jamais un accessoire de levage par des moyens de fortune.</div>"
      },
      {
       "titre": "Conduite des engins : formation et autorisation",
       "contenu": "<p>La conduite des engins de chantier, des chariots et des engins de levage est réservée à des personnes formées. L'employeur délivre une <strong>autorisation de conduite</strong> après s'être assuré de l'aptitude médicale, du contrôle des connaissances et du savoir-faire du conducteur pour la conduite en sécurité, et de sa connaissance des lieux et des instructions à respecter sur le site.</p>\n<p>Le contrôle des connaissances et du savoir-faire est le plus souvent réalisé par le <strong>CACES</strong> (certificat d'aptitude à la conduite en sécurité), défini par des recommandations de l'Assurance maladie – risques professionnels, par familles d'engins :</p>\n<ul>\n<li>R482 pour les engins de chantier (dont les chariots télescopiques de chantier) ;</li>\n<li>R489 pour les chariots de manutention automoteurs à conducteur porté ;</li>\n<li>R490 pour les grues de chargement ;</li>\n<li>R486 pour les plateformes élévatrices mobiles de personnes.</li>\n</ul>\n<p>Chaque recommandation est divisée en <strong>catégories</strong> selon le type et la taille des engins. Pour les essais et déplacements d'engins à l'atelier, des dispositions particulières peuvent exister (catégories « hors production » de certaines recommandations) ; le technicien vérifie avec son employeur ce que couvre son autorisation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le CACES ne vaut pas autorisation de conduite ; c'est l'employeur qui autorise, par écrit, un salarié à conduire tel engin. Le titulaire du bac pro option matériels de construction et de manutention prépare souvent un ou plusieurs CACES pendant sa formation.</div>"
      },
      {
       "titre": "Sécurité sur chantier lors d'une intervention",
       "contenu": "<p>Le technicien itinérant intervient souvent sur le chantier du client, dans un environnement qu'il ne maîtrise pas. Avant d'intervenir, il :</p>\n<ul>\n<li>se présente au responsable du chantier, prend connaissance des règles du site (plan de prévention ou protocole, EPI obligatoires, circulation des engins) ;</li>\n<li>balise sa zone d'intervention et positionne son véhicule-atelier hors des zones de circulation ;</li>\n<li>repère les dangers spécifiques : lignes électriques aériennes, réseaux enterrés, fouilles et talus, engins en mouvement, travail isolé ;</li>\n<li>met l'engin en sécurité (équipements posés, consignation) avant toute intervention ;</li>\n<li>récupère les déchets et fluides produits (huile, filtres, absorbants) pour les traiter à l'atelier.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le dépannage d'un engin à proximité d'une ligne électrique aérienne exige de respecter les distances de sécurité ; une flèche levée à proximité d'une ligne peut provoquer une électrocution sans contact direct. En cas de doute, on fait consigner la ligne par l'exploitant du réseau.</div>"
      }
     ],
     "points_cles": [
      "Une pelle ne lève des charges que si elle est équipée pour la manutention : clapets de sécurité, avertisseur de surcharge, point d'accrochage, tableau de charges.",
      "Les dispositifs de sécurité de levage se contrôlent selon procédure, avec charge étalon si nécessaire.",
      "Les VGP sont fixées par l'arrêté du 1er mars 2004 ; une vérification est aussi requise à la remise en service après réparation importante.",
      "Chaque observation d'un rapport de VGP devient une opération de maintenance tracée.",
      "Les accessoires de levage portent leur CMU, qui dépend du mode d'élingage et de l'angle entre brins.",
      "Plus l'angle entre les brins est ouvert, plus l'effort dans chaque brin augmente.",
      "Le CACES valide connaissances et savoir-faire ; l'autorisation de conduite est délivrée par l'employeur.",
      "Sur chantier, le technicien applique les règles du site et balise sa zone."
     ],
     "lexique": [
      {
       "terme": "Clapet de sécurité",
       "def": "Clapet monté sur un vérin qui empêche la descente de la charge en cas de rupture de flexible."
      },
      {
       "terme": "Avertisseur de surcharge",
       "def": "Dispositif qui alerte l'opérateur lorsque la charge approche de la limite admissible."
      },
      {
       "terme": "Point d'accrochage",
       "def": "Anneau ou crochet prévu par le constructeur pour suspendre une charge, avec capacité marquée."
      },
      {
       "terme": "VGP",
       "def": "Vérification générale périodique d'un appareil ou accessoire de levage."
      },
      {
       "terme": "Remise en service",
       "def": "Retour à l'utilisation d'un appareil après démontage, réparation importante ou modification, soumis à vérification."
      },
      {
       "terme": "CMU",
       "def": "Charge maximale d'utilisation d'un accessoire de levage."
      },
      {
       "terme": "Élingue",
       "def": "Accessoire en chaîne, câble ou textile qui relie la charge à l'appareil de levage."
      },
      {
       "terme": "CACES",
       "def": "Certificat d'aptitude à la conduite en sécurité, défini par des recommandations par familles d'engins."
      },
      {
       "terme": "Plan de prévention",
       "def": "Document qui organise la prévention des risques lors de l'intervention d'une entreprise extérieure."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 7 — Option C : matériels d'espaces verts",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmm-c-moteurs-essence",
     "titre": "Petits moteurs à essence des matériels d'espaces verts",
     "niveau": "1re",
     "options": [
      "c"
     ],
     "duree": 45,
     "objectifs": [
      "Comparer le fonctionnement et l'entretien des moteurs deux temps et quatre temps",
      "Expliquer le fonctionnement d'un carburateur à cuve et d'un carburateur à membrane",
      "Contrôler un allumage par volant magnétique et une bougie",
      "Expliquer le rôle du régulateur de régime et contrôler un régime maximal",
      "Mener un diagnostic de non-démarrage méthodique"
     ],
     "sections": [
      {
       "titre": "Les moteurs des matériels d'espaces verts",
       "contenu": "<p>Les matériels d'espaces verts thermiques utilisent principalement des <strong>moteurs à allumage commandé</strong> fonctionnant à l'essence :</p>\n<ul>\n<li>des <strong>moteurs deux temps</strong> de petite cylindrée, légers et puissants pour leur masse, sur les matériels portatifs (débroussailleuses, tronçonneuses, taille-haies, souffleurs) ;</li>\n<li>des <strong>moteurs quatre temps</strong> monocylindres à axe vertical (tondeuses) ou horizontal (motoculteurs, broyeurs), et bicylindres en V sur les tondeuses autoportées ;</li>\n<li>des moteurs diesel sur les tondeuses frontales et tracteurs compacts professionnels, qui relèvent des notions déjà étudiées pour les diesels.</li>\n</ul>\n<p>Ces moteurs sont simples mais fonctionnent dans des conditions difficiles : poussière et débris végétaux, inclinaisons, utilisation intermittente, longues périodes de remisage. Une large part des pannes vient du carburant et de l'entretien plus que de la mécanique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un petit moteur, le diagnostic commence toujours par les trois conditions du fonctionnement : un mélange air-carburant correct, une étincelle au bon moment et une compression suffisante. Il faut vérifier les trois avant de démonter.</div>"
      },
      {
       "titre": "Deux temps et quatre temps : différences pratiques",
       "contenu": "<p>Le moteur <strong>deux temps</strong> réalise un cycle complet en un tour de vilebrequin. Il n'a pas de soupapes : des <strong>lumières</strong> dans le cylindre, découvertes par le piston, assurent l'admission dans le carter, le transfert vers la chambre et l'échappement. Le carter-moteur sert de pompe de pré-compression ; il doit donc être étanche (joints spi de vilebrequin, joint d'embase). Le graissage est assuré par l'huile mélangée à l'essence.</p>\n<table>\n<thead><tr><th>Critère</th><th>Deux temps</th><th>Quatre temps</th></tr></thead>\n<tbody>\n<tr><td>Rapport puissance/masse</td><td>Élevé</td><td>Plus faible</td></tr>\n<tr><td>Lubrification</td><td>Huile mélangée au carburant</td><td>Huile dans le carter, à vidanger</td></tr>\n<tr><td>Fonctionnement incliné</td><td>Toutes positions</td><td>Limité (sauf moteurs spécifiques)</td></tr>\n<tr><td>Émissions et consommation</td><td>Plus élevées (perte de mélange à l'échappement), réduites sur les moteurs récents à balayage stratifié</td><td>Plus faibles</td></tr>\n<tr><td>Points d'entretien spécifiques</td><td>Dosage du mélange, calamine aux lumières, étanchéité du carter</td><td>Niveau et vidange d'huile, jeu aux soupapes</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer un mélange deux temps à 2 % (rapport 1:50) pour 5 L d'essence : 1) vérifier dans la notice le dosage prescrit et le type d'huile (huile deux temps pour moteurs refroidis par air, norme indiquée par le constructeur) ; 2) calculer la quantité d'huile : 5 L ÷ 50 = 0,1 L, soit 100 mL ; 3) verser l'huile dans un bidon homologué propre ; 4) ajouter l'essence ; 5) agiter ; 6) étiqueter le bidon avec la date et le dosage ; 7) agiter de nouveau avant chaque remplissage. Un mélange trop pauvre en huile provoque un serrage du piston ; trop riche, un encrassement et des fumées.</div>"
      },
      {
       "titre": "L'alimentation : carburateurs à cuve et à membrane",
       "contenu": "<p>Le <strong>carburateur</strong> dose l'essence dans l'air aspiré grâce à la dépression créée dans un <strong>venturi</strong>. Le <strong>papillon des gaz</strong> règle le débit d'air, le <strong>volet de starter</strong> enrichit le mélange au démarrage à froid.</p>\n<p>Le <strong>carburateur à cuve</strong>, monté sur les tondeuses et moteurs stationnaires, maintient un niveau constant d'essence grâce à un <strong>flotteur</strong> et un <strong>pointeau</strong>. Il ne fonctionne qu'en position à peu près horizontale. Les pannes typiques sont un pointeau collé (débordement, essence dans l'huile du moteur), des gicleurs bouchés par des dépôts, un flotteur percé.</p>\n<p>Le <strong>carburateur à membrane</strong>, monté sur les matériels portatifs, fonctionne dans toutes les positions. Une <strong>pompe à membrane</strong> intégrée, actionnée par les pulsations du carter, aspire l'essence ; une <strong>membrane de dosage</strong> et une soupape d'admission remplacent la cuve. Des <strong>vis de richesse</strong> (souvent L pour le bas régime et H pour le haut régime, et une vis de ralenti) permettent un réglage, généralement limité par des butées pour respecter les normes d'émissions.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'essence contenant de l'éthanol absorbe l'humidité et se dégrade pendant le remisage ; les dépôts bouchent les gicleurs et durcissent les membranes. Pour les matériels utilisés de façon intermittente, les constructeurs recommandent souvent une <strong>essence alkylate</strong> prête à l'emploi, plus stable et moins nocive pour l'utilisateur, ou à défaut la vidange du réservoir avant remisage.</div>"
      },
      {
       "titre": "L'allumage par volant magnétique",
       "contenu": "<p>Les petits moteurs n'ont généralement pas de batterie pour l'allumage. Le <strong>volant magnétique</strong>, solidaire du vilebrequin, porte des aimants qui défilent devant un <strong>module d'allumage</strong> fixe (bobine et électronique intégrées). À chaque passage, l'électronique coupe le courant au bon moment et la bobine produit une haute tension de plusieurs milliers de volts qui jaillit entre les électrodes de la <strong>bougie</strong>.</p>\n<p>Les contrôles sont :</p>\n<ul>\n<li>l'<strong>étincelle</strong>, avec un éclateur de contrôle réglable (plus fiable que la bougie posée sur le cylindre) ;</li>\n<li>l'<strong>entrefer</strong> entre module et volant, réglé avec une cale d'épaisseur à la valeur constructeur ;</li>\n<li>le <strong>fil d'arrêt</strong> (fil de masse relié à l'interrupteur d'arrêt et aux sécurités) : s'il est à la masse en permanence (fil dénudé, interrupteur défaillant, sécurité de présence), il n'y a pas d'étincelle ;</li>\n<li>la <strong>bougie</strong> : type exact (degré thermique), écartement des électrodes, aspect.</li>\n</ul>\n<table>\n<thead><tr><th>Aspect du bec isolant de la bougie</th><th>Interprétation probable</th></tr></thead>\n<tbody>\n<tr><td>Brun clair à gris</td><td>Fonctionnement normal</td></tr>\n<tr><td>Noir et sec (suie)</td><td>Mélange trop riche, filtre à air colmaté, starter</td></tr>\n<tr><td>Noir et humide d'huile</td><td>Excès d'huile (mélange deux temps trop riche, segments usés)</td></tr>\n<tr><td>Blanc, électrodes érodées</td><td>Mélange trop pauvre, surchauffe : risque pour le piston</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour isoler un défaut d'arrêt, on débranche le fil d'arrêt au niveau du module : si l'étincelle revient, la panne est dans le circuit d'arrêt et de sécurité (interrupteur, contacteur de présence, faisceau), pas dans le module.</div>"
      },
      {
       "titre": "Le régulateur de régime et les réglages",
       "contenu": "<p>Les moteurs de tondeuse et de motoculteur tournent à un régime pratiquement constant fixé par un <strong>régulateur</strong> : quand la charge augmente (herbe haute), le régime tend à baisser, et le régulateur ouvre davantage le papillon. Le régulateur est soit <strong>centrifuge</strong> (masselottes entraînées par le moteur), soit <strong>pneumatique</strong> (palette actionnée par l'air de refroidissement). Il agit sur le papillon par une tringlerie et un ressort réglé par la commande des gaz.</p>\n<p>Le <strong>régime maximal à vide</strong> est une valeur de sécurité : il limite la vitesse en bout de lame ou de chaîne. On le contrôle au compte-tours (à induction sur le fil de bougie ou à vibrations) et on le règle uniquement selon la procédure du constructeur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> régler un carburateur à membrane de débroussailleuse : 1) nettoyer ou remplacer le filtre à air et vérifier le filtre à essence du réservoir ; 2) amener le moteur à température ; 3) régler la vis de ralenti pour que le moteur tourne régulièrement sans que l'outil de coupe ne soit entraîné ; 4) régler la vis L pour une reprise franche sans hésitation ; 5) contrôler au compte-tours le régime maximal à vide et ajuster la vis H dans la limite des butées pour rester sous la valeur maximale prescrite ; 6) vérifier que l'outil de coupe s'arrête au ralenti ; 7) noter les régimes obtenus sur l'ordre de réparation.</div>"
      },
      {
       "titre": "Diagnostiquer un non-démarrage",
       "contenu": "<p>Le non-démarrage est la plainte la plus fréquente en début de saison. Une démarche ordonnée évite les démontages inutiles.</p>\n<ol>\n<li><strong>Interroger</strong> : depuis quand, remisage, carburant utilisé, choc, dernière intervention.</li>\n<li><strong>Vérifier les évidences</strong> : carburant frais dans le réservoir, robinet ouvert, interrupteur d'arrêt en position marche, sécurités (frein moteur, poignée de présence), starter.</li>\n<li><strong>Contrôler l'étincelle</strong> à l'éclateur ; en cas d'absence, débrancher le fil d'arrêt et recommencer.</li>\n<li><strong>Contrôler l'arrivée de carburant</strong> : bougie humide après quelques tirages ? Si elle reste sèche, contrôler mise à l'air du réservoir, filtre, conduites, carburateur ; si elle est noyée, sécher, vérifier starter et pointeau.</li>\n<li><strong>Contrôler la compression</strong> au compressiomètre ou par la résistance au lanceur ; sur les deux temps, contrôler aussi l'étanchéité du carter (test de dépression et de pression).</li>\n<li><strong>Vérifier la mécanique</strong> : clavette de volant cisaillée (décalage de l'allumage après un choc de lame), décompresseur, soupapes.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur une tondeuse, un choc de la lame contre un obstacle peut cisailler la clavette du volant et décaler l'allumage, ou fausser le vilebrequin. Après un choc, on contrôle la clavette et le voile du vilebrequin avant de remettre la machine en service, même si elle redémarre.</div>"
      }
     ],
     "points_cles": [
      "Trois conditions de fonctionnement : mélange correct, étincelle au bon moment, compression.",
      "Le deux temps est graissé par le mélange et utilise le carter comme pompe ; il doit être étanche.",
      "Mélange à 2 % : 100 mL d'huile pour 5 L d'essence.",
      "Le carburateur à cuve doit rester horizontal ; le carburateur à membrane fonctionne dans toutes les positions.",
      "L'essence avec éthanol se dégrade au remisage ; l'essence alkylate est plus stable.",
      "Le fil d'arrêt à la masse supprime l'étincelle : le débrancher isole le circuit d'arrêt.",
      "L'aspect de la bougie renseigne sur la richesse et la combustion.",
      "Le régime maximal à vide est une valeur de sécurité contrôlée au compte-tours.",
      "Après un choc de lame, contrôler clavette de volant et vilebrequin."
     ],
     "lexique": [
      {
       "terme": "Moteur deux temps",
       "def": "Moteur qui réalise un cycle complet en un tour de vilebrequin, sans soupapes."
      },
      {
       "terme": "Lumière",
       "def": "Orifice du cylindre d'un deux temps, découvert par le piston pour les transferts de gaz."
      },
      {
       "terme": "Venturi",
       "def": "Rétrécissement du conduit d'air du carburateur qui crée la dépression aspirant l'essence."
      },
      {
       "terme": "Carburateur à membrane",
       "def": "Carburateur sans cuve, utilisable dans toutes les positions, à pompe et dosage par membranes."
      },
      {
       "terme": "Essence alkylate",
       "def": "Carburant de synthèse stable, peu chargé en composés nocifs, adapté aux petits moteurs."
      },
      {
       "terme": "Volant magnétique",
       "def": "Volant à aimants qui alimente le module d'allumage."
      },
      {
       "terme": "Entrefer",
       "def": "Distance entre le module d'allumage et les aimants du volant."
      },
      {
       "terme": "Fil d'arrêt",
       "def": "Fil qui met le module d'allumage à la masse pour arrêter le moteur."
      },
      {
       "terme": "Régulateur de régime",
       "def": "Dispositif qui ajuste l'ouverture du papillon pour maintenir un régime constant."
      },
      {
       "terme": "Clavette de volant",
       "def": "Clavette qui positionne le volant sur le vilebrequin et fixe le calage de l'allumage."
      }
     ]
    },
    {
     "id": "bmm-c-organes-coupe",
     "titre": "Organes de coupe des matériels d'espaces verts",
     "niveau": "1re-Tle",
     "options": [
      "c"
     ],
     "duree": 45,
     "objectifs": [
      "Distinguer les principes de coupe rotative, hélicoïdale et alternative",
      "Affûter et équilibrer une lame de tondeuse rotative",
      "Régler un cylindre de tondeuse hélicoïdale contre sa contre-lame",
      "Entretenir les organes de coupe des matériels portatifs : chaîne, guide, lamier, tête",
      "Contrôler les dispositifs de sécurité liés aux organes de coupe"
     ],
     "sections": [
      {
       "titre": "Les principes de coupe",
       "contenu": "<p>Les matériels d'espaces verts coupent des végétaux selon trois grands principes :</p>\n<table>\n<thead><tr><th>Principe</th><th>Fonctionnement</th><th>Matériels</th></tr></thead>\n<tbody>\n<tr><td>Coupe rotative par impact</td><td>Une lame ou des couteaux tournant à grande vitesse sectionnent l'herbe sans appui</td><td>Tondeuses rotatives, autoportées, broyeurs, débroussailleuses à lame ou à fil</td></tr>\n<tr><td>Coupe hélicoïdale (cisaillement)</td><td>Les lames hélicoïdales d'un cylindre cisaillent l'herbe contre une contre-lame fixe</td><td>Tondeuses de golf, de terrains de sport, de gazons d'ornement</td></tr>\n<tr><td>Coupe alternative</td><td>Des lames à dents se déplacent l'une contre l'autre en va-et-vient</td><td>Taille-haies, barres de coupe de motofaucheuses</td></tr>\n<tr><td>Coupe par chaîne</td><td>Une chaîne à gouges défile sur un guide</td><td>Tronçonneuses, élagueuses</td></tr>\n</tbody>\n</table>\n<p>La qualité de coupe dépend à la fois de l'<strong>affûtage</strong>, du <strong>réglage</strong> et de la <strong>vitesse</strong> de l'organe. Une herbe coupée par une lame émoussée est arrachée et déchiquetée ; ses extrémités brunissent et le gazon devient plus sensible aux maladies, ce que le client remarque.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'organe de coupe est à la fois l'effecteur qui fait la qualité du travail et la principale source de danger du matériel. Son entretien relève autant de la sécurité que de la performance.</div>"
      },
      {
       "titre": "La lame de tondeuse rotative",
       "contenu": "<p>La <strong>lame</strong> d'une tondeuse rotative est une barre d'acier traité dont les extrémités comportent un tranchant et une <strong>ailette</strong> relevée qui crée le flux d'air nécessaire à l'éjection ou au ramassage. Les lames de <strong>mulching</strong> ont un profil particulier qui recoupe plusieurs fois l'herbe avant de la projeter vers le sol.</p>\n<p>La lame est fixée sur le vilebrequin (ou l'arbre de lame) par un <strong>support de lame</strong>, une clavette et une vis centrale serrée au couple prescrit. Sur certaines machines, un <strong>frein-embrayage de lame</strong> permet d'arrêter la lame sans arrêter le moteur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> affûter et équilibrer une lame : 1) mettre le matériel en sécurité (moteur arrêté, fil de bougie débranché ou batterie déconnectée) ; 2) basculer la tondeuse du côté indiqué par la notice, carburateur et filtre à air vers le haut ; 3) caler la lame et la déposer en notant son sens de montage ; 4) contrôler qu'elle n'est ni tordue, ni fissurée, ni usée au-delà de la limite (ailette amincie, échancrure) ; sinon la remplacer ; 5) affûter les deux tranchants en respectant l'angle d'origine, en enlevant la même quantité de métal de chaque côté, sans bleuir l'acier ; 6) contrôler l'équilibrage sur un équilibreur à cône ou sur un axe : la lame doit rester horizontale ; meuler légèrement le côté lourd, à l'arrière du tranchant ; 7) remonter dans le bon sens, avec visserie neuve si prescrit, et serrer au couple.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une lame déséquilibrée provoque des vibrations qui détruisent les roulements, les supports et peuvent fausser le vilebrequin. Une lame fissurée peut se rompre et projeter un fragment à très grande vitesse. On ne redresse jamais une lame tordue : on la remplace.</div>"
      },
      {
       "titre": "La tondeuse hélicoïdale",
       "contenu": "<p>La tondeuse <strong>hélicoïdale</strong> donne la coupe la plus nette et la plus basse ; elle est utilisée sur les terrains de golf et de sport. Le <strong>cylindre</strong> porte plusieurs lames hélicoïdales (de 5 à 11 ou plus selon la fréquence de coupe souhaitée) ; il tourne contre une <strong>contre-lame</strong> fixée sur une barre réglable.</p>\n<p>La <strong>fréquence de coupe</strong> (distance parcourue entre deux coupes successives) dépend du nombre de lames, de la vitesse de rotation du cylindre et de la vitesse d'avancement. Elle doit être adaptée à la hauteur de coupe : une fréquence trop longue laisse un aspect « en vagues ».</p>\n<p>Le <strong>réglage contre-lame/cylindre</strong> est délicat : un contact trop serré use rapidement les lames et absorbe de la puissance, un jeu trop important fait arracher l'herbe. On le règle pour obtenir une coupe nette d'une bande de papier sur toute la longueur du cylindre, avec un contact léger, selon la méthode du constructeur. L'entretien comprend le <strong>rodage</strong> (cylindre tournant en sens inverse avec une pâte abrasive) et, périodiquement, la <strong>rectification</strong> du cylindre et de la contre-lame sur une machine spécifique.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les ateliers qui entretiennent les parcs de golfs disposent de rectifieuses de cylindres et de contre-lames. La précision demandée par les jardiniers de golf est très élevée, et la régularité de la hauteur de coupe entre plusieurs éléments de coupe se contrôle au comparateur sur un banc de réglage.</div>"
      },
      {
       "titre": "Débroussailleuses, taille-haies et tronçonneuses",
       "contenu": "<p>Les matériels portatifs ont des organes de coupe spécifiques :</p>\n<ul>\n<li>la <strong>débroussailleuse</strong> entraîne par un arbre de transmission et un renvoi d'angle une <strong>tête à fil</strong> ou un <strong>outil métallique</strong> (couteau à herbe, lame à broussailles, scie circulaire) ; chaque outil exige un <strong>protecteur</strong> adapté, un harnais et une poignée conformes ; le renvoi d'angle se graisse régulièrement ;</li>\n<li>le <strong>taille-haie</strong> utilise deux lames dentées à mouvement alternatif, entraînées par un réducteur à excentrique ; on contrôle le jeu entre lames, l'affûtage des dents et la lubrification ;</li>\n<li>la <strong>tronçonneuse</strong> utilise une <strong>chaîne</strong> à gouges qui défile sur un <strong>guide</strong> ; elle est lubrifiée par une pompe à huile de chaîne et protégée par un <strong>frein de chaîne</strong> qui se déclenche par le protège-main ou par inertie en cas de rebond.</li>\n</ul>\n<p>L'entretien de la chaîne comprend l'<strong>affûtage</strong> des gouges à la lime ronde de diamètre adapté (angle de limage indiqué par le fabricant), l'abaissement des <strong>limiteurs de profondeur</strong> au gabarit, la vérification de la <strong>tension</strong> et l'état du <strong>pignon</strong>. Le guide est retourné régulièrement, son rail est ébavuré et son pignon de nez graissé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> des limiteurs de profondeur trop abaissés augmentent fortement le risque de <strong>rebond</strong>, mouvement brutal du guide vers l'utilisateur. On les abaisse uniquement au gabarit du fabricant, et l'on contrôle systématiquement le frein de chaîne à chaque intervention.</div>"
      },
      {
       "titre": "Sécurités liées à la coupe",
       "contenu": "<p>Les matériels d'espaces verts doivent répondre à des normes de sécurité qui imposent plusieurs dispositifs, à contrôler à chaque intervention :</p>\n<table>\n<thead><tr><th>Dispositif</th><th>Rôle</th><th>Contrôle</th></tr></thead>\n<tbody>\n<tr><td>Commande à action maintenue (poignée de présence)</td><td>Arrête la lame quand l'utilisateur lâche la poignée</td><td>Arrêt de la lame dans le délai prescrit</td></tr>\n<tr><td>Frein moteur ou frein de lame</td><td>Arrête rapidement la lame</td><td>Temps d'arrêt, état des garnitures, câble</td></tr>\n<tr><td>Carters, déflecteurs, bavettes</td><td>Empêchent les projections et le contact avec la lame</td><td>Présence, fixation, fissures</td></tr>\n<tr><td>Blocage de gâchette d'accélérateur</td><td>Empêche une accélération involontaire</td><td>Fonctionnement libre et retour</td></tr>\n<tr><td>Frein de chaîne</td><td>Arrête la chaîne en cas de rebond</td><td>Déclenchement manuel et par inertie</td></tr>\n<tr><td>Capteur de présence du bac ou du déflecteur</td><td>Interdit la rotation sans protection</td><td>Arrêt de la lame en retirant le bac</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un matériel dont une sécurité est défaillante ne doit pas être rendu au client. Si une pièce manque, on l'indique par écrit et on ne remet pas le matériel en service tant que la sécurité n'est pas rétablie.</div>"
      },
      {
       "titre": "Hauteur de coupe, ramassage et éjection",
       "contenu": "<p>La qualité du travail dépend aussi du réglage de la <strong>hauteur de coupe</strong> et du flux d'air dans le carter. Sur une tondeuse ou un plateau de coupe d'autoportée, la hauteur doit être identique aux quatre coins : un plateau incliné scalpe le gazon d'un côté. Sur les autoportées, on règle le <strong>parallélisme</strong> du plateau latéralement et une légère <strong>inclinaison</strong> vers l'avant (l'avant plus bas de quelques millimètres) selon la notice, pour favoriser l'aspiration de l'herbe.</p>\n<p>Le <strong>ramassage</strong> dépend de l'état des ailettes de lame, de la propreté du carter (herbe collée qui réduit la section de passage), de l'étanchéité du bac et de l'état de son filet qui doit laisser passer l'air. Un ramassage dégradé est souvent dû à un carter encrassé ou à un régime moteur trop bas, plutôt qu'à une panne.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler le réglage d'un plateau de coupe : 1) placer l'autoportée sur une surface plane et dure, pneumatiques gonflés à la pression prescrite ; 2) positionner les lames dans l'axe de la machine ; 3) mesurer la distance du bord de coupe des lames au sol à gauche et à droite ; 4) régler l'écart latéral à la valeur prescrite ; 5) mesurer à l'avant et à l'arrière d'une même lame et régler l'inclinaison avant ; 6) vérifier la hauteur affichée par le levier et recaler si besoin ; 7) essayer sur gazon et contrôler la régularité de coupe.</div>"
      }
     ],
     "points_cles": [
      "Coupe rotative par impact, hélicoïdale par cisaillement, alternative et par chaîne.",
      "Une lame se remplace si elle est tordue, fissurée ou usée au-delà de la limite ; on ne la redresse jamais.",
      "L'affûtage respecte l'angle d'origine et enlève la même quantité de métal de chaque côté ; l'équilibrage est contrôlé.",
      "Le cylindre hélicoïdal se règle contre sa contre-lame avec un contact léger et régulier.",
      "La chaîne de tronçonneuse s'affûte à la lime adaptée ; les limiteurs de profondeur s'abaissent au gabarit.",
      "Le frein de chaîne et les commandes à action maintenue se contrôlent à chaque intervention.",
      "Un matériel dont une sécurité est défaillante n'est pas rendu au client.",
      "Le plateau de coupe se règle à plat latéralement et légèrement incliné vers l'avant selon la notice."
     ],
     "lexique": [
      {
       "terme": "Coupe rotative",
       "def": "Coupe par impact d'une lame tournant à grande vitesse, sans contre-lame."
      },
      {
       "terme": "Coupe hélicoïdale",
       "def": "Coupe par cisaillement entre les lames d'un cylindre et une contre-lame fixe."
      },
      {
       "terme": "Ailette",
       "def": "Partie relevée de la lame qui crée le flux d'air d'éjection ou de ramassage."
      },
      {
       "terme": "Mulching",
       "def": "Technique qui hache finement l'herbe coupée et la redépose sur le gazon."
      },
      {
       "terme": "Contre-lame",
       "def": "Lame fixe contre laquelle les lames du cylindre cisaillent l'herbe."
      },
      {
       "terme": "Fréquence de coupe",
       "def": "Distance parcourue par la tondeuse entre deux passages de lame du cylindre."
      },
      {
       "terme": "Limiteur de profondeur",
       "def": "Partie de la dent de chaîne qui limite l'épaisseur du copeau."
      },
      {
       "terme": "Rebond",
       "def": "Projection brutale du guide de tronçonneuse vers l'utilisateur lorsque le nez du guide rencontre un obstacle."
      },
      {
       "terme": "Commande à action maintenue",
       "def": "Commande qui doit être tenue par l'utilisateur pour que l'organe dangereux fonctionne."
      },
      {
       "terme": "Frein de chaîne",
       "def": "Dispositif qui immobilise la chaîne de tronçonneuse en cas de rebond ou par action du protège-main."
      }
     ]
    },
    {
     "id": "bmm-c-autoportees",
     "titre": "Tondeuses autoportées, tondeuses frontales et micro-tracteurs",
     "niveau": "Tle",
     "options": [
      "c"
     ],
     "duree": 45,
     "objectifs": [
      "Décrire l'architecture d'une autoportée, d'une tondeuse frontale et d'une tondeuse à rayon de braquage nul",
      "Expliquer le fonctionnement d'une transmission hydrostatique intégrée (transaxle) et de ses réglages",
      "Contrôler l'entraînement du plateau de coupe : courroies, embrayage électromagnétique, prise de force",
      "Diagnostiquer le circuit de sécurité de démarrage et de présence opérateur",
      "Préparer une autoportée pour la saison"
     ],
     "sections": [
      {
       "titre": "Les familles de matériels autoportés",
       "contenu": "<p>Les matériels autoportés d'espaces verts couvrent un large éventail, du jardin particulier aux grandes surfaces des collectivités :</p>\n<table>\n<thead><tr><th>Matériel</th><th>Caractéristiques</th><th>Utilisateurs</th></tr></thead>\n<tbody>\n<tr><td>Tracteur de pelouse et autoportée</td><td>Moteur essence à l'avant ou à l'arrière, plateau ventral, bac de ramassage</td><td>Particuliers, petites collectivités</td></tr>\n<tr><td>Tondeuse à rayon de braquage nul (« zéro turn »)</td><td>Deux transmissions hydrostatiques indépendantes, direction par leviers</td><td>Paysagistes, collectivités</td></tr>\n<tr><td>Tondeuse frontale</td><td>Plateau à l'avant, moteur diesel, roues arrière directrices, outils interchangeables</td><td>Collectivités, entreprises d'espaces verts</td></tr>\n<tr><td>Micro-tracteur</td><td>Tracteur compact avec relevage, prise de force, outils</td><td>Collectivités, exploitations, paysagistes</td></tr>\n<tr><td>Tondeuse hélicoïdale autoportée</td><td>Plusieurs éléments de coupe hélicoïdaux entraînés hydrauliquement</td><td>Golfs, terrains de sport</td></tr>\n</tbody>\n</table>\n<p>Les tondeuses frontales et les micro-tracteurs professionnels se rapprochent des petits tracteurs : moteur diesel souvent soumis aux exigences de dépollution déjà étudiées, transmission hydrostatique à pompe et moteur séparés, quatre roues motrices, relevage avant hydraulique pour le plateau ou les outils (balayeuse, lame à neige, broyeur), circuits hydrauliques auxiliaires. Leur maintenance mobilise donc les savoirs généraux sur l'hydraulique, les moteurs diesel et l'électronique embarquée, appliqués à des machines plus compactes où l'accessibilité des composants est souvent la principale difficulté.</p>\n<p>Les modèles professionnels intègrent de plus en plus d'électronique (gestion moteur, afficheur, compteurs d'entretien), voire une propulsion électrique sur batterie.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un même symptôme n'a pas les mêmes causes sur une autoportée de jardin et sur une tondeuse frontale professionnelle ; on identifie toujours précisément le modèle et son numéro de série avant de consulter la documentation.</div>"
      },
      {
       "titre": "La transmission hydrostatique intégrée",
       "contenu": "<p>La plupart des autoportées et tondeuses à rayon de braquage nul utilisent une <strong>transmission hydrostatique intégrée</strong> (souvent appelée transaxle hydrostatique) : dans un même carter se trouvent une pompe à pistons à cylindrée variable (plateau commandé par la pédale ou le levier), un moteur hydraulique à cylindrée fixe, le réducteur et le différentiel. L'huile, en circuit fermé, est commune à la partie hydraulique et aux engrenages.</p>\n<p>Points caractéristiques :</p>\n<ul>\n<li>un <strong>levier de débrayage</strong> (by-pass) permet de pousser la machine moteur arrêté ; laissé en position débrayée, il donne le symptôme « la machine n'avance plus » ;</li>\n<li>le <strong>point mort</strong> se règle mécaniquement sur la tringlerie de commande : un point mort décalé fait avancer ou reculer lentement la machine pédale relâchée ;</li>\n<li>certains modèles sont dits « scellés à vie », d'autres disposent d'un vase d'expansion, d'un filtre et d'une procédure de vidange et de <strong>purge</strong> ;</li>\n<li>le refroidissement dépend d'un ventilateur sur l'arbre d'entrée et des ailettes du carter, qu'il faut garder propres.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> purger une transmission hydrostatique intégrée après vidange (cas d'un modèle qui le prévoit) : 1) remplir au niveau avec l'huile prescrite ; 2) placer la machine sur chandelles, roues motrices décollées du sol ; 3) mettre le levier de by-pass en position débrayée, démarrer et actionner plusieurs fois la commande de marche avant et arrière à bas régime ; 4) remettre le levier en position embrayée et recommencer les cycles avant et arrière ; 5) compléter le niveau ; 6) reposer la machine au sol et réaliser des cycles en charge sur une distance courte ; 7) contrôler le point mort et la vitesse maximale dans les deux sens.</div>"
      },
      {
       "titre": "L'entraînement du plateau de coupe",
       "contenu": "<p>Sur les autoportées, le plateau est entraîné par <strong>courroies</strong> depuis une poulie du vilebrequin. L'engagement des lames se fait soit par un <strong>tendeur</strong> commandé par un levier (embrayage à tension de courroie), soit par un <strong>embrayage-frein électromagnétique</strong> monté en bout de vilebrequin. Sur les tondeuses frontales et micro-tracteurs, le plateau est entraîné par une <strong>prise de force</strong> et un arbre à cardans vers un boîtier renvoi d'angle, puis par courroies ou par des moteurs hydrauliques.</p>\n<p>L'<strong>embrayage électromagnétique</strong> comprend une bobine fixe, un rotor solidaire du vilebrequin et une armature reliée à la poulie. Quand la bobine est alimentée, l'armature est attirée contre le rotor et entraîne la poulie ; hors tension, des ressorts plaquent l'armature contre un frein qui arrête la lame. Les contrôles sont :</p>\n<ul>\n<li>la résistance de la bobine, comparée à la valeur constructeur ;</li>\n<li>la tension d'alimentation sous charge au connecteur, qui dépend du circuit de sécurité ;</li>\n<li>l'<strong>entrefer</strong>, mesuré à la cale à plusieurs points et réglé selon la procédure, car il augmente avec l'usure ;</li>\n<li>le temps d'arrêt de la lame au débrayage.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une courroie de plateau qui patine, saute ou s'use vite a souvent une cause extérieure : poulie folle grippée, tendeur faible, guide-courroie déformé, poulie de broche dont le roulement a du jeu, courroie non conforme en longueur ou en section. On contrôle toutes les poulies à la main, courroie déposée, avant de remonter une courroie neuve.</div>"
      },
      {
       "titre": "Le circuit de sécurité de démarrage et de présence",
       "contenu": "<p>Les autoportées comportent un circuit de <strong>sécurité</strong> qui conditionne le démarrage et le fonctionnement :</p>\n<ul>\n<li>démarrage autorisé seulement si le frein est serré (ou la pédale d'avancement au point mort) et l'embrayage de lame débrayé ;</li>\n<li>arrêt du moteur ou des lames si l'opérateur quitte le siège avec les lames embrayées ou sans frein serré ;</li>\n<li>arrêt des lames en marche arrière, sauf neutralisation volontaire temporaire prévue par le constructeur ;</li>\n<li>arrêt des lames si le bac est retiré ou plein, selon les modèles.</li>\n</ul>\n<p>Ces fonctions sont réalisées par des <strong>contacteurs</strong> (siège, frein, lame, bac, marche arrière) câblés avec des relais, ou gérées par un petit module électronique. L'arrêt du moteur s'obtient en mettant à la masse le fil d'arrêt de l'allumage ou en coupant l'électrovanne d'arrêt du carburateur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> diagnostiquer un « le moteur se coupe quand j'embraye les lames » : 1) relire le schéma électrique pour identifier les contacteurs impliqués ; 2) vérifier que l'opérateur est bien assis (contacteur de siège souvent en cause : ressort affaissé, connecteur oxydé) ; 3) contrôler la continuité de chaque contacteur dans les deux positions, au multimètre ; 4) contrôler le relais ou le module selon la table de vérité du constructeur ; 5) vérifier le faisceau aux points de frottement (sous le siège, articulation du plateau) ; 6) remplacer l'élément défectueux, jamais le court-circuiter ; 7) tester toutes les fonctions de sécurité à la fin.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> il arrive qu'un client demande de « supprimer la sécurité du siège qui coupe tout le temps ». Le technicien refuse : neutraliser une sécurité engage sa responsabilité et celle de l'atelier. Il répare la cause (contacteur, réglage, câblage) et explique au client le rôle de cette sécurité.</div>"
      },
      {
       "titre": "Direction, freinage et sécurité en pente",
       "contenu": "<p>Les autoportées et tondeuses travaillent souvent sur des talus. La notice indique la <strong>pente maximale</strong> admissible, souvent faible pour les matériels de jardin, plus élevée pour les machines professionnelles équipées d'arceaux de sécurité. Les tondeuses à rayon de braquage nul sont particulièrement sensibles au glissement en dévers.</p>\n<p>Les points de contrôle de sécurité sont : le jeu de direction et l'état des rotules et biellettes, le fonctionnement du frein de service et de stationnement (sur les transmissions hydrostatiques, le freinage dynamique par retour au point mort complète un frein mécanique), l'<strong>arceau de sécurité</strong> (ROPS) et la ceinture sur les machines qui en sont équipées, l'état des pneumatiques et leur pression, égale à droite et à gauche.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un arceau de sécurité ne protège que si la ceinture est bouclée, et une ceinture ne doit jamais être bouclée sur une machine dont l'arceau est replié. Un arceau déformé, percé ou soudé n'est plus conforme et doit être remplacé.</div>"
      },
      {
       "titre": "Préparer une autoportée pour la saison",
       "contenu": "<p>La visite d'avant-saison d'une autoportée suit une liste qui couvre l'ensemble des fonctions :</p>\n<ol>\n<li>moteur : vidange et filtre à huile, filtre à air et préfiltre, filtre à carburant, bougies, nettoyage des ailettes de refroidissement et de la grille d'aspiration, contrôle du régime maximal ;</li>\n<li>électricité : charge et test de la batterie, état des cosses, fonctionnement de toutes les sécurités ;</li>\n<li>transmission : niveau d'huile, propreté, point mort, vitesse, freins ;</li>\n<li>plateau : dépose et nettoyage, affûtage et équilibrage des lames, roulements de broches, courroies, poulies, réglage de la hauteur et du parallélisme ;</li>\n<li>bac et éjection : état du filet, capteurs ;</li>\n<li>graissage, pression des pneumatiques, serrages ;</li>\n<li>essai complet et compte rendu au client.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la plupart des pannes d'autoportées en début de saison sont évitables : batterie déchargée, carburant dégradé, courroie durcie, contacteur oxydé. Une visite d'hiver planifiée, hors période de forte activité, est la meilleure prestation à proposer au client.</div>"
      }
     ],
     "points_cles": [
      "Autoportées, tondeuses à rayon de braquage nul, frontales et micro-tracteurs ont des architectures différentes.",
      "La transmission hydrostatique intégrée réunit pompe, moteur, réducteur et différentiel dans un même carter.",
      "Levier de by-pass débrayé et point mort décalé sont des causes simples de défauts d'avancement.",
      "L'embrayage-frein électromagnétique se contrôle par résistance de bobine, tension sous charge, entrefer et temps d'arrêt.",
      "Une courroie qui se détériore vite a souvent une cause extérieure : poulies, tendeur, guides.",
      "Le circuit de sécurité conditionne démarrage et fonctionnement ; on répare un contacteur, on ne le court-circuite jamais.",
      "La pente maximale, l'arceau et la ceinture conditionnent la sécurité en terrain incliné.",
      "La visite d'avant-saison couvre moteur, électricité, transmission, plateau, sécurités et essai."
     ],
     "lexique": [
      {
       "terme": "Transaxle hydrostatique",
       "def": "Ensemble compact regroupant transmission hydrostatique, réducteur et différentiel."
      },
      {
       "terme": "By-pass",
       "def": "Dispositif qui met en communication les deux branches du circuit fermé pour pousser la machine moteur arrêté."
      },
      {
       "terme": "Point mort",
       "def": "Position de la commande où la pompe hydrostatique ne débite pas et la machine reste immobile."
      },
      {
       "terme": "Embrayage électromagnétique",
       "def": "Embrayage serré par un électroaimant, qui intègre souvent un frein de lame."
      },
      {
       "terme": "Poulie folle",
       "def": "Poulie non motrice qui guide ou tend une courroie."
      },
      {
       "terme": "Contacteur de siège",
       "def": "Interrupteur qui détecte la présence de l'opérateur sur le siège."
      },
      {
       "terme": "Rayon de braquage nul",
       "def": "Capacité à pivoter sur place par rotation en sens inverse des deux roues motrices."
      },
      {
       "terme": "ROPS",
       "def": "Structure de protection contre le retournement (arceau de sécurité)."
      },
      {
       "terme": "Broche",
       "def": "Arbre vertical sur roulements qui porte une lame dans un plateau de coupe."
      }
     ]
    },
    {
     "id": "bmm-c-batterie-robotique",
     "titre": "Matériels sur batterie et robots de tonte",
     "niveau": "Tle",
     "options": [
      "c"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire l'architecture d'un matériel portatif sur batterie : batterie, moteur sans balais, électronique",
      "Exploiter les caractéristiques d'une batterie lithium-ion (tension, capacité, énergie) pour conseiller un client",
      "Expliquer le fonctionnement d'un robot de tonte : guidage, capteurs de sécurité, station de charge",
      "Installer et paramétrer un robot de tonte filaire ou à positionnement par satellite",
      "Diagnostiquer et entretenir ces matériels en sécurité, et gérer les batteries en fin de vie"
     ],
     "sections": [
      {
       "titre": "L'électrification des matériels d'espaces verts",
       "contenu": "<p>Les matériels sur batterie se sont imposés chez les particuliers puis chez les professionnels et les collectivités : taille-haies, souffleurs, débroussailleuses, tronçonneuses, tondeuses poussées, puis autoportées et robots. Leurs avantages sont le faible bruit (travail possible en zone habitée et tôt le matin), l'absence d'émissions à l'utilisation, l'absence de mélange et de carburateur, et un entretien réduit.</p>\n<p>Leur architecture comprend :</p>\n<ul>\n<li>une <strong>batterie lithium-ion</strong> amovible, souvent commune à toute une gamme d'outils d'une marque, avec son <strong>BMS</strong> ;</li>\n<li>un <strong>moteur sans balais</strong> (brushless) à aimants permanents, à bon rendement et sans usure de charbons ;</li>\n<li>une <strong>électronique de commande</strong> qui alimente le moteur à vitesse variable, gère les protections (surcharge, température, sous-tension) et les sécurités (gâchette, frein électronique) ;</li>\n<li>pour les usages professionnels intensifs, des <strong>batteries dorsales</strong> de grande capacité reliées à l'outil par un câble.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un matériel sur batterie, la plupart des « pannes » signalées sont des protections qui se déclenchent : batterie trop chaude ou trop froide, outil bloqué, surcharge. L'électronique les signale par des voyants ou des codes clignotants dont la signification figure dans la notice.</div>"
      },
      {
       "titre": "Caractéristiques des batteries et conseil",
       "contenu": "<p>Une batterie lithium-ion d'outil se caractérise par sa <strong>tension nominale</strong> (par exemple 18 V, 36 V, 40 V, 56 V ou davantage selon les gammes), sa <strong>capacité</strong> en Ah et son <strong>énergie</strong> en Wh, qui vaut approximativement tension × capacité. C'est l'énergie qui détermine l'autonomie à puissance donnée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer l'autonomie d'un souffleur. Données : batterie de 36 V et 5 Ah ; puissance absorbée moyenne du souffleur à mi-régime : 450 W. 1) Énergie : 36 × 5 = 180 Wh. 2) On ne compte qu'environ 90 % de l'énergie réellement exploitable : 162 Wh. 3) Durée : 162 ÷ 450 = 0,36 h, soit environ 22 min. 4) À pleine puissance (par exemple 900 W), l'autonomie serait divisée par deux. 5) Conclusion pour le client : prévoir une deuxième batterie ou une batterie dorsale pour un usage prolongé, et un chargeur rapide.</div>\n<p>Les règles d'utilisation à transmettre au client prolongent la durée de vie des batteries :</p>\n<ul>\n<li>charger et stocker dans la plage de température indiquée, à l'abri du gel et du plein soleil ;</li>\n<li>pour un stockage prolongé, laisser la batterie à un état de charge intermédiaire, souvent recommandé par le fabricant, plutôt que pleine ou vide ;</li>\n<li>utiliser uniquement le chargeur prévu ;</li>\n<li>ne jamais utiliser une batterie tombée, déformée, gonflée ou ayant pris l'eau.</li>\n</ul>\n<p>Le <strong>chargeur</strong> fait partie du système : il dialogue souvent avec le BMS de la batterie, adapte le courant à sa température et signale les défauts par des voyants. Une batterie qui « ne charge plus » peut simplement être hors de la plage de température autorisée, ou avoir été déchargée si profondément que le BMS refuse la charge par sécurité. Avant de conclure à une batterie défectueuse, on contrôle donc le chargeur avec une batterie connue, on relève les codes et on mesure la tension aux bornes selon les indications du fabricant.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une batterie lithium endommagée peut s'emballer thermiquement et s'enflammer, parfois plusieurs heures après le choc. Elle est isolée dans un contenant ininflammable, à l'extérieur ou dans une zone prévue, loin de toute matière combustible, puis confiée à la filière de collecte des batteries.</div>"
      },
      {
       "titre": "Le robot de tonte : principe et composants",
       "contenu": "<p>Le <strong>robot de tonte</strong> tond de façon autonome et fréquente une surface délimitée, en coupant très peu d'herbe à chaque passage (les fins brins restent sur place). Il comprend :</p>\n<ul>\n<li>un châssis à deux roues motrices indépendantes (moteurs électriques) et une ou plusieurs roues folles ou, pour les modèles tout-terrain, quatre roues motrices ;</li>\n<li>un <strong>disque de coupe</strong> portant de petites lames pivotantes, ou une lame, entraîné par un moteur dédié, avec réglage de hauteur ;</li>\n<li>une batterie lithium-ion et une <strong>station de charge</strong> vers laquelle il revient seul ;</li>\n<li>un système de <strong>délimitation et de navigation</strong> ;</li>\n<li>des <strong>capteurs de sécurité</strong> : détection de soulèvement, de basculement, de collision (capot flottant à capteurs), parfois capteurs à ultrasons ou caméra ;</li>\n<li>une interface (clavier, écran) et souvent une liaison sans fil vers une application.</li>\n</ul>\n<p>Ces machines sont soumises à des exigences de sécurité propres : arrêt rapide des lames en cas de soulèvement ou de basculement, code PIN ou dispositif antivol, arrêt d'urgence accessible.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'installation et le suivi des robots de tonte sont devenus une activité à part entière pour les ateliers d'espaces verts : étude du terrain, pose du fil, paramétrage, visites d'hivernage. Le technicien y combine compétences électriques, numériques et relation client.</div>"
      },
      {
       "titre": "Délimitation et navigation",
       "contenu": "<p>Deux grandes technologies délimitent la zone de tonte :</p>\n<table>\n<thead><tr><th>Technologie</th><th>Principe</th><th>Points d'attention</th></tr></thead>\n<tbody>\n<tr><td>Fil périmétrique</td><td>Un fil posé au sol ou enterré autour de la zone est parcouru par un signal émis par la station ; des capteurs magnétiques du robot détectent le fil et son côté</td><td>Coupures de fil (bêchage, rongeurs), épissures non étanches, distances au bord, îlots, passages étroits</td></tr>\n<tr><td>Positionnement par satellite RTK, sans fil</td><td>Le robot se positionne grâce à une antenne GNSS et aux corrections d'une station de référence ; la zone est tracée dans l'application</td><td>Couverture satellite (arbres, bâtiments), position de l'antenne de référence, liaison de correction</td></tr>\n</tbody>\n</table>\n<p>Certains robots ajoutent une vision par caméra pour reconnaître les bordures et les obstacles. Un <strong>fil guide</strong> peut aider le robot filaire à rejoindre sa station par les passages étroits.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> localiser une coupure de fil périmétrique : 1) constater le voyant de défaut de boucle sur la station ; 2) vérifier les raccordements du fil à la station et l'alimentation de celle-ci ; 3) mesurer la continuité de la boucle à l'ohmmètre aux bornes de la station, fil débranché ; 4) si la boucle est ouverte, utiliser un détecteur de câble (ou un poste radio sur grandes ondes selon la méthode du fabricant) en suivant le fil depuis la station ; 5) à l'endroit où le signal disparaît, dégager le fil et réparer avec un connecteur étanche prévu à cet effet, jamais avec un simple ruban adhésif ; 6) vérifier le retour du voyant normal et faire un cycle de tonte.</div>"
      },
      {
       "titre": "Installer et paramétrer un robot de tonte",
       "contenu": "<p>L'installation commence par une <strong>étude du terrain</strong> : surface, pentes maximales, zones séparées, passages étroits, obstacles, massifs et bassins, emplacement de la station (alimentation électrique, ombre, accès). On en déduit le modèle adapté à la surface et aux pentes, ainsi que le tracé.</p>\n<p>Le paramétrage comprend :</p>\n<ul>\n<li>la <strong>hauteur de coupe</strong> de départ, abaissée progressivement sur une pelouse haute ;</li>\n<li>le <strong>planning</strong> de fonctionnement, en évitant les heures où des enfants ou des animaux sont présents, et souvent la nuit pour protéger la petite faune comme les hérissons ;</li>\n<li>les <strong>zones</strong> et leur pourcentage de temps, les points de départ à distance de la station ;</li>\n<li>la gestion de la pluie, du gel et de l'hivernage ;</li>\n<li>le code de sécurité, l'antivol et la connexion à l'application.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le robot n'est pas un jouet : ses lames restent dangereuses. Lors de la mise en main, le technicien rappelle qu'il ne faut jamais soulever le robot en marche, que les enfants ne doivent pas jouer à proximité, et que la tonte en présence d'animaux est déconseillée.</div>"
      },
      {
       "titre": "Entretenir et diagnostiquer",
       "contenu": "<p>L'entretien d'un robot ou d'un matériel sur batterie comprend :</p>\n<ul>\n<li>le nettoyage du dessous de caisse et du disque de coupe, à la brosse, jamais au nettoyeur haute pression ;</li>\n<li>le remplacement des lames (souvent après quelques semaines d'utilisation) et de leur visserie ;</li>\n<li>le contrôle des roues, des contacts de charge (oxydation), des capteurs de collision et de soulèvement ;</li>\n<li>la mise à jour du logiciel ;</li>\n<li>l'<strong>hivernage</strong> : batterie chargée, robot stocké au sec à l'intérieur, station protégée ou déposée.</li>\n</ul>\n<p>Le diagnostic s'appuie sur l'<strong>historique des messages</strong> enregistrés par le robot (heure, type d'alarme), sur les menus de test (moteurs, capteurs, tension de batterie) et sur des mesures simples : tension de la station, continuité de la boucle, tension de la batterie au repos et en charge.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les batteries et matériels électriques en fin de vie relèvent de filières de collecte spécifiques. L'atelier les remet à ces filières et ne les jette jamais avec les déchets ordinaires ; une batterie lithium usagée garde une énergie suffisante pour provoquer un incendie.</div>"
      }
     ],
     "points_cles": [
      "Matériel sur batterie : batterie lithium-ion avec BMS, moteur sans balais, électronique de commande et de protection.",
      "L'énergie d'une batterie vaut environ tension × capacité et fixe l'autonomie à puissance donnée.",
      "Les « pannes » sont souvent des protections qui se déclenchent ; les codes sont décrits dans la notice.",
      "Une batterie lithium endommagée est isolée loin des combustibles et confiée à la filière de collecte.",
      "Le robot de tonte combine motorisation, coupe, batterie, navigation et capteurs de sécurité.",
      "La délimitation se fait par fil périmétrique ou par positionnement RTK.",
      "Une coupure de fil se localise par continuité puis détection, et se répare avec un connecteur étanche.",
      "L'installation commence par une étude du terrain ; le paramétrage protège personnes et petite faune.",
      "Robots et outils se nettoient sans haute pression et s'hivernent au sec, batterie chargée."
     ],
     "lexique": [
      {
       "terme": "Moteur sans balais",
       "def": "Moteur électrique à aimants commuté électroniquement, sans charbons."
      },
      {
       "terme": "Batterie dorsale",
       "def": "Batterie de grande capacité portée sur le dos et reliée à l'outil par un câble."
      },
      {
       "terme": "Énergie d'une batterie",
       "def": "Quantité d'énergie stockée, en Wh, environ égale à la tension multipliée par la capacité."
      },
      {
       "terme": "Emballement thermique",
       "def": "Échauffement incontrôlé d'une cellule lithium qui peut conduire à l'incendie."
      },
      {
       "terme": "Robot de tonte",
       "def": "Tondeuse autonome qui tond une zone délimitée et revient seule à sa station de charge."
      },
      {
       "terme": "Fil périmétrique",
       "def": "Câble posé en boucle autour de la zone de tonte, parcouru par un signal détecté par le robot."
      },
      {
       "terme": "Fil guide",
       "def": "Câble qui aide le robot à rejoindre sa station ou une zone éloignée."
      },
      {
       "terme": "Station de charge",
       "def": "Base qui recharge le robot et émet le signal de la boucle périmétrique."
      },
      {
       "terme": "Hivernage",
       "def": "Préparation et stockage d'un matériel pendant la période où il n'est pas utilisé."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 8 — Analyser les documents professionnels",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bmm-doc-plan-ensemble",
     "titre": "Exploiter un plan d'ensemble, une vue éclatée et une nomenclature",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Identifier la structure et le vocabulaire d'un plan d'ensemble, d'une vue éclatée et d'une nomenclature",
      "Associer chaque repère du plan à sa désignation et à sa fonction",
      "Déduire d'un plan d'ensemble les classes d'équivalence, les liaisons et le chemin de la puissance",
      "Établir un ordre de démontage et la liste des pièces à prévoir",
      "Éviter les pièges classiques de lecture rencontrés à l'épreuve écrite"
     ],
     "sections": [
      {
       "titre": "Les documents et leur rôle",
       "contenu": "<p>À l'épreuve d'analyse préparatoire à une intervention, le dossier technique contient presque toujours une représentation d'un sous-ensemble mécanique : <strong>plan d'ensemble</strong> (dessin en coupe des pièces assemblées), <strong>vue éclatée</strong> (pièces dessinées en perspective, écartées les unes des autres dans l'ordre de montage) ou extrait de <strong>catalogue de pièces</strong>. Il est accompagné d'une <strong>nomenclature</strong>.</p>\n<table>\n<thead><tr><th>Document</th><th>Ce qu'il permet</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Plan d'ensemble en coupe</td><td>Voir les contacts entre pièces, les ajustements, les étanchéités, le chemin de l'huile</td><td>Lecture exigeante, nécessite de connaître les conventions</td></tr>\n<tr><td>Vue éclatée</td><td>Comprendre l'ordre de montage et l'orientation des pièces</td><td>Ne montre pas les contacts ni les jeux</td></tr>\n<tr><td>Nomenclature</td><td>Nommer les pièces, connaître quantités, matières, références</td><td>Ne dit rien de la fonction</td></tr>\n<tr><td>Catalogue de pièces</td><td>Commander les bonnes références selon le numéro de série</td><td>Vocabulaire commercial, kits regroupés</td></tr>\n</tbody>\n</table>\n<p>Les questions posées portent typiquement sur : le nom et le rôle d'une pièce, les liaisons entre sous-ensembles, le trajet de la puissance ou du fluide, l'ordre de démontage pour atteindre une pièce, la liste des pièces à remplacer systématiquement et l'outillage nécessaire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un plan d'ensemble ne se lit pas comme une image ; il s'interroge. Chaque question appelle un parcours précis : du repère vers la nomenclature, de la pièce vers ses voisines, de l'entrée de la puissance vers sa sortie.</div>"
      },
      {
       "titre": "Structure et conventions de lecture",
       "contenu": "<p>Un plan d'ensemble comporte :</p>\n<ul>\n<li>un <strong>cartouche</strong> : titre, échelle, numéro du plan, indice de modification ;</li>\n<li>des <strong>repères</strong> (numéros dans des bulles reliées aux pièces par des lignes de rappel) ;</li>\n<li>une ou plusieurs <strong>vues en coupe</strong>, dont les plans de coupe sont indiqués sur une autre vue ;</li>\n<li>la <strong>nomenclature</strong>, en tableau : repère, nombre, désignation, matière, observations (référence, norme, traitement).</li>\n</ul>\n<p>Conventions à connaître :</p>\n<ul>\n<li>les <strong>hachures</strong> d'une même pièce ont la même orientation et le même espacement dans toutes les vues ; deux pièces voisines ont des hachures différentes ;</li>\n<li>les <strong>pièces pleines</strong> de révolution (arbres, vis, axes, goupilles, billes) ne sont pas coupées lorsque le plan de coupe passe par leur axe ;</li>\n<li>les roulements et joints sont souvent représentés de façon simplifiée ;</li>\n<li>les traits mixtes fins indiquent les axes ; les traits interrompus fins indiquent des contours cachés.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lecture d'un plan d'ensemble en six étapes : 1) lire le cartouche et le titre pour situer le sous-ensemble dans le matériel ; 2) repérer l'entrée et la sortie (arbre d'entrée, moyeu de sortie, orifices d'huile) ; 3) colorier ou lister, à l'aide de la nomenclature, les pièces fixes (carter et tout ce qui y est immobilisé) ; 4) identifier les pièces mobiles et les regrouper en classes d'équivalence ; 5) repérer les guidages (roulements, bagues), les arrêts axiaux (circlips, écrous, épaulements) et les étanchéités ; 6) suivre le chemin de la puissance de l'entrée à la sortie en nommant chaque pièce traversée.</div>"
      },
      {
       "titre": "Pièges fréquents",
       "contenu": "<ul>\n<li><strong>Confondre repère et quantité</strong> : le repère 12 peut désigner quatre vis identiques ; la colonne « nombre » le précise.</li>\n<li><strong>Oublier les pièces normalisées</strong> : vis, rondelles, circlips, joints toriques figurent souvent en bas de nomenclature avec leur désignation normalisée ; ce sont elles qu'on oublie de commander.</li>\n<li><strong>Attribuer une bague serrée à l'arbre</strong> au lieu du logement : les ajustements et le contexte (bague montée dans un alésage) l'indiquent.</li>\n<li><strong>Prendre la vue éclatée pour l'ordre de démontage complet</strong> : elle montre l'ordre de montage d'un sous-ensemble isolé, pas les opérations préalables sur le matériel (vidange, dépose de la roue, calage).</li>\n<li><strong>Ignorer l'indice du plan ou la validité de numéro de série</strong> : la pièce dessinée peut avoir été modifiée.</li>\n<li><strong>Répondre par une description</strong> (« c'est une pièce ronde ») au lieu d'une fonction (« guide en rotation l'arbre de sortie »).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> à l'épreuve, nommer une pièce sans utiliser le terme de la nomenclature fait perdre des points même si la pièce est bien identifiée. On recopie la désignation exacte et le repère : « couronne (repère 7) ».</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier présente le <strong>réducteur final épicycloïdal</strong> d'une roue arrière de chargeuse sur pneus (plan d'ensemble en demi-coupe, échelle 1:4). Le texte décrit le plan ainsi : à gauche, l'arbre de roue (demi-arbre) arrive du différentiel à travers la trompette de pont ; il se termine par une denture qui constitue le planétaire. Autour, trois satellites tournent sur des axes portés par un porte-satellites boulonné au moyeu. Les satellites engrènent aussi sur une couronne à denture intérieure, cannelée sur un support lui-même fixé en bout de trompette par un écrou à créneaux. Le moyeu, auquel la jante est boulonnée, tourne sur deux roulements à rouleaux coniques montés sur la trompette. Un joint à faces protège les roulements côté intérieur. Un bouchon de remplissage et de vidange est placé sur le couvercle du porte-satellites.</p>\n<table>\n<thead><tr><th>Rep.</th><th>Nb</th><th>Désignation</th><th>Observations</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>1</td><td>Trompette de pont</td><td>Fonte EN-GJS</td></tr>\n<tr><td>2</td><td>1</td><td>Arbre de roue (planétaire, Z = 15)</td><td>Acier cémenté</td></tr>\n<tr><td>3</td><td>3</td><td>Satellite (Z = 27)</td><td>Acier cémenté</td></tr>\n<tr><td>4</td><td>3</td><td>Axe de satellite</td><td>Acier trempé</td></tr>\n<tr><td>5</td><td>6</td><td>Cage à aiguilles</td><td></td></tr>\n<tr><td>6</td><td>1</td><td>Porte-satellites et couvercle</td><td></td></tr>\n<tr><td>7</td><td>1</td><td>Couronne (Z = 69)</td><td>Denture intérieure</td></tr>\n<tr><td>8</td><td>1</td><td>Support de couronne</td><td>Cannelé sur la trompette</td></tr>\n<tr><td>9</td><td>1</td><td>Écrou de roue à créneaux</td><td>Freiné par tôle</td></tr>\n<tr><td>10</td><td>1</td><td>Moyeu</td><td></td></tr>\n<tr><td>11</td><td>2</td><td>Roulement à rouleaux coniques</td><td></td></tr>\n<tr><td>12</td><td>1</td><td>Joint à faces (paire)</td><td>À remplacer à chaque démontage</td></tr>\n<tr><td>13</td><td>12</td><td>Vis H M14 classe 10.9</td><td>Fixation 6 sur moyeu</td></tr>\n<tr><td>14</td><td>1</td><td>Joint torique de couvercle</td><td>À remplacer</td></tr>\n<tr><td>15</td><td>1</td><td>Bouchon magnétique</td><td></td></tr>\n</tbody>\n</table>\n<p>Questions posées : 1) Quelle pièce est fixe ? Justifier. 2) Tracer le chemin de la puissance. 3) Calculer le rapport de réduction. 4) Le client signale une fuite d'huile à l'intérieur de la jante : quelles pièces sont en cause, quelles pièces prévoir ?</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1) Pièce fixe.</strong> La couronne (repère 7) est cannelée sur le support de couronne (8), lui-même cannelé sur la trompette de pont (1) et immobilisé par l'écrou à créneaux (9). La trompette étant solidaire du carter de pont, la couronne est l'élément fixe du train épicycloïdal.</p>\n<p><strong>2) Chemin de la puissance.</strong> Différentiel, puis arbre de roue (2) dont la denture forme le planétaire, puis satellites (3) qui roulent dans la couronne fixe (7), puis axes (4) et porte-satellites (6), puis moyeu (10) auquel le porte-satellites est boulonné par les vis (13), puis jante et pneumatique. Le moyeu est guidé en rotation sur la trompette par les roulements (11).</p>\n<p><strong>3) Rapport de réduction.</strong> Couronne fixe, entrée par le planétaire, sortie par le porte-satellites : le rapport vaut N sortie ÷ N entrée = Z planétaire ÷ (Z planétaire + Z couronne) = 15 ÷ (15 + 69) = 15 ÷ 84 ≈ 0,179, soit une réduction d'environ 5,6. Vérification de cohérence : Z couronne = Z planétaire + 2 × Z satellite = 15 + 54 = 69, ce qui confirme les données.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour répondre à la question 4 : 1) localiser la fuite sur le plan : l'intérieur de jante correspond au côté trompette ; 2) chercher l'étanchéité placée entre une pièce tournante et une pièce fixe de ce côté : le joint à faces (12) entre moyeu et trompette ; 3) chercher les autres étanchéités possibles du même côté (aucune autre ici) ; 4) déterminer l'ordre de démontage pour l'atteindre : vidange par le bouchon (15), dépose de la roue, dépose du couvercle et du porte-satellites, de l'écrou (9), du support de couronne et de la couronne, puis extraction du moyeu et des roulements ; 5) établir la liste des pièces : joint à faces (12) obligatoirement, joint torique (14), tôle frein de l'écrou (9), huile ; roulements (11) seulement s'ils sont marqués après contrôle ; 6) prévoir l'outillage : clé à créneaux, extracteur, moyen de levage du moyeu, clé dynamométrique, comparateur pour le réglage des roulements.</div>\n<p>La réponse attendue mentionne aussi le contrôle de l'huile vidangée (particules métalliques sur le bouchon magnétique) et le réglage de la précharge des roulements coniques au remontage selon la valeur constructeur, avant la pose du porte-satellites.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> ce raisonnement est exactement celui du technicien qui prépare la réparation : il commande le joint à faces et les consommables avant d'immobiliser la machine, prévoit le moyen de levage du moyeu, et réserve le temps barémé correspondant.</div>"
      }
     ],
     "points_cles": [
      "Plan d'ensemble, vue éclatée, nomenclature et catalogue de pièces répondent à des questions différentes.",
      "Le cartouche, les repères et la nomenclature sont le point de départ de toute lecture.",
      "Les hachures identifient chaque pièce ; les pièces pleines de révolution ne sont pas coupées dans leur axe.",
      "On identifie d'abord les pièces fixes, puis les classes mobiles, les guidages, les arrêts et les étanchéités.",
      "Le chemin de la puissance se décrit pièce par pièce, avec les repères.",
      "Train épicycloïdal à couronne fixe : rapport = Zp ÷ (Zp + Zc).",
      "Une fuite se localise en cherchant l'étanchéité entre pièce tournante et pièce fixe du côté concerné.",
      "La liste de pièces inclut les éléments à remplacer systématiquement et les consommables."
     ],
     "lexique": [
      {
       "terme": "Plan d'ensemble",
       "def": "Dessin d'un mécanisme assemblé, généralement en coupe, avec repères et nomenclature."
      },
      {
       "terme": "Vue éclatée",
       "def": "Représentation en perspective des pièces écartées dans l'ordre de montage."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste des pièces d'un ensemble avec repère, nombre, désignation, matière et observations."
      },
      {
       "terme": "Repère",
       "def": "Numéro qui identifie une pièce sur le dessin et dans la nomenclature."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre du dessin qui donne titre, échelle, numéro et indice du plan."
      },
      {
       "terme": "Hachures",
       "def": "Traits fins parallèles qui indiquent la matière coupée d'une pièce."
      },
      {
       "terme": "Planétaire",
       "def": "Pignon central d'un train épicycloïdal."
      },
      {
       "terme": "Porte-satellites",
       "def": "Pièce qui porte les axes des satellites d'un train épicycloïdal."
      },
      {
       "terme": "Indice de plan",
       "def": "Lettre ou numéro qui identifie la version d'un dessin après modification."
      }
     ]
    },
    {
     "id": "bmm-doc-schema-hydraulique",
     "titre": "Lire et exploiter un schéma hydraulique de matériel",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Reconnaître les symboles normalisés des composants hydrauliques (ISO 1219)",
      "Décrire l'état repos d'un circuit et le trajet de l'huile pour une fonction donnée",
      "Identifier les points de mesure et les valeurs à relever sur un schéma",
      "Formuler des hypothèses de panne à partir d'un schéma et d'un symptôme",
      "Rédiger une analyse de schéma claire et justifiée"
     ],
     "sections": [
      {
       "titre": "Le schéma hydraulique dans le dossier technique",
       "contenu": "<p>Le <strong>schéma hydraulique</strong> représente un circuit par des <strong>symboles normalisés</strong> (norme ISO 1219) reliés par des lignes. Il montre la fonction de chaque composant et les liaisons entre eux, mais pas leur forme ni leur implantation sur la machine. Les schémas constructeurs ajoutent des repères de composants, des repères de prises de pression, les valeurs de réglage (pressions, débits) et parfois des couleurs pour distinguer pression, retour et pilotage.</p>\n<p>À l'épreuve, le schéma sert à : identifier un composant et son rôle, décrire le trajet de l'huile dans une situation, expliquer une fonction (maintien de charge, régénération, priorité), choisir les points de mesure et les valeurs attendues, et proposer des hypothèses à partir d'un symptôme.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un schéma hydraulique est toujours dessiné en position de repos : moteur arrêté, commandes au neutre, ressorts détendus. Pour décrire un fonctionnement, on « déplace » mentalement les tiroirs actionnés dans la case correspondante.</div>"
      },
      {
       "titre": "Les symboles essentiels",
       "contenu": "<table>\n<thead><tr><th>Composant</th><th>Symbole décrit</th><th>Lecture</th></tr></thead>\n<tbody>\n<tr><td>Pompe</td><td>Cercle avec un triangle plein pointé vers l'extérieur ; flèche oblique si cylindrée variable</td><td>Le triangle indique le sens de sortie de l'énergie ; deux triangles : pompe réversible</td></tr>\n<tr><td>Moteur hydraulique</td><td>Cercle avec un triangle plein pointé vers l'intérieur</td><td>Reçoit l'énergie</td></tr>\n<tr><td>Vérin double effet</td><td>Rectangle avec piston et tige, deux orifices</td><td>Pression d'un côté ou de l'autre selon le sens voulu</td></tr>\n<tr><td>Limiteur de pression</td><td>Carré avec une flèche décalée, ressort réglable, pilotage pointillé depuis l'entrée</td><td>Normalement fermé, s'ouvre au tarage</td></tr>\n<tr><td>Distributeur</td><td>Cases juxtaposées (une par position), flèches et obturations dans chaque case, commandes dessinées aux extrémités</td><td>Désigné par « orifices/positions », par exemple 4/3</td></tr>\n<tr><td>Clapet anti-retour</td><td>Bille dans un siège en V</td><td>Passage dans un seul sens</td></tr>\n<tr><td>Clapet piloté</td><td>Clapet avec ligne de pilotage pointillée</td><td>Peut être ouvert en sens inverse par une pression de pilotage</td></tr>\n<tr><td>Étrangleur ou réducteur de débit</td><td>Rétrécissement entre deux arcs ; flèche s'il est réglable</td><td>Limite la vitesse</td></tr>\n<tr><td>Accumulateur</td><td>Forme ovale verticale avec séparation</td><td>Réserve d'huile sous pression</td></tr>\n<tr><td>Filtre, refroidisseur, réservoir</td><td>Losanges et rectangle ouvert</td><td>Conditionnement de l'huile</td></tr>\n</tbody>\n</table>\n<p>Les lignes <strong>continues</strong> sont des conduites de travail ou de retour ; les lignes <strong>en pointillés</strong> représentent le pilotage et les drains. Les orifices des distributeurs sont repérés P (pression), T (réservoir), A et B (utilisations), et parfois L ou LS (détection de charge).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un distributeur 4/3 peut avoir des centres très différents : centre ouvert (P relié à T, A et B bloqués), centre tandem, centre fermé, centre flottant (A et B reliés à T). La case centrale doit être lue précisément ; c'est elle qui explique le comportement au neutre.</div>"
      },
      {
       "titre": "Méthode de lecture",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un schéma hydraulique : 1) repérer la source (réservoir, filtre d'aspiration, pompe) et les protections (limiteur principal et son tarage) ; 2) repérer les récepteurs (vérins, moteurs) et la fonction qu'ils réalisent sur le matériel ; 3) pour chaque récepteur, identifier le distributeur qui le commande et la nature de la commande (manuelle, pilotée, électrique) ; 4) repérer les composants placés entre distributeur et récepteur (clapets pilotés, valves d'équilibrage, étrangleurs, limiteurs secondaires) et expliquer leur rôle ; 5) pour la fonction demandée, tracer au surligneur le trajet de l'huile sous pression depuis la pompe jusqu'au récepteur, puis le trajet de retour au réservoir ; 6) noter les prises de pression et les valeurs indiquées.</div>\n<p>Pour rédiger, on cite les composants par leur repère et on décrit le trajet par une suite ordonnée : « la pompe 2 refoule vers l'orifice P du distributeur 5 ; en position levée, P est relié à A ; l'huile traverse le clapet piloté 7 et arrive côté fond des vérins 9 ; l'huile côté tige retourne par B vers T, puis par le filtre 3 au réservoir 1 ».</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à chaque instant, une conduite est soit sous pression, soit au retour. Un raisonnement juste fait apparaître le chemin aller et le chemin retour pour chaque récepteur en mouvement.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier présente le schéma du circuit hydraulique d'un <strong>chargeur frontal</strong> monté sur un tracteur, décrit ainsi :</p>\n<table>\n<thead><tr><th>Rep.</th><th>Composant</th><th>Données</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Réservoir (commun avec la transmission)</td><td></td></tr>\n<tr><td>2</td><td>Pompe à engrenages, cylindrée fixe</td><td>45 L/min à 2 200 tr/min</td></tr>\n<tr><td>3</td><td>Limiteur de pression principal</td><td>Taré à 190 bar</td></tr>\n<tr><td>4</td><td>Distributeur 4/3 de levage, centre ouvert, avec position flottante (4e position à cran)</td><td>Commande par monolevier</td></tr>\n<tr><td>5</td><td>Distributeur 4/3 de cavage, centre ouvert, monté en série après le 4</td><td></td></tr>\n<tr><td>6</td><td>Deux vérins de levage double effet en parallèle</td><td>Alésage 70 mm, tige 40 mm</td></tr>\n<tr><td>7</td><td>Deux vérins de cavage double effet en parallèle</td><td></td></tr>\n<tr><td>8</td><td>Bloc de clapets pilotés double sur les vérins de levage</td><td>Monté sur les vérins</td></tr>\n<tr><td>9</td><td>Accumulateur de suspension relié côté fond des vérins de levage par une vanne d'isolement</td><td>Gonflé à l'azote</td></tr>\n<tr><td>10</td><td>Filtre de retour avec clapet de dérivation</td><td></td></tr>\n<tr><td>PT1</td><td>Prise de pression en sortie de pompe</td><td></td></tr>\n</tbody>\n</table>\n<p>Symptôme décrit : « Chargeur chargé, godet plein levé à 2 m, moteur au ralenti, commandes au neutre : la charge descend de 15 cm en 5 minutes. La levée se fait normalement. » Questions : 1) Décrire le trajet de l'huile en levée. 2) Calculer l'effort théorique de levée (deux vérins) à la pression maximale. 3) Proposer et ordonner les hypothèses de la descente lente, et les contrôles associés.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1) Trajet en levée.</strong> La pompe 2 aspire dans le réservoir 1 et refoule vers l'orifice P du distributeur 4 ; le limiteur 3, branché en dérivation, protège le circuit à 190 bar. Monolevier tiré, le tiroir 4 relie P à A et B à T. L'huile traverse le bloc de clapets pilotés 8 (passage libre dans le sens de la levée) et arrive côté fond des deux vérins 6. L'huile chassée côté tige retourne par l'orifice B du distributeur 4 vers son orifice T, rejoint la ligne de retour, traverse le filtre 10 et revient au réservoir 1. Le distributeur 5 étant en série, son alimentation passe par le centre ouvert de 4 : au neutre, l'huile traverse 4 puis 5 et retourne au réservoir sous faible pression.</p>\n<p><strong>2) Effort de levée.</strong> Section côté fond d'un vérin : π × 7,0² ÷ 4 ≈ 38,5 cm². Pour deux vérins : 77 cm². À 190 bar (soit 190 daN/cm²) : F ≈ 190 × 77 ≈ 14 630 daN, soit environ 146 kN au niveau des vérins. L'effort disponible au godet est bien plus faible à cause des bras de levier de l'équipement et des pertes.</p>\n<p><strong>3) Hypothèses de descente lente.</strong> La charge est retenue par l'huile emprisonnée côté fond des vérins 6. Elle peut s'échapper par :</p>\n<table>\n<thead><tr><th>Hypothèse</th><th>Justification sur le schéma</th><th>Contrôle</th><th>Ordre</th></tr></thead>\n<tbody>\n<tr><td>Vanne d'isolement de l'accumulateur 9 ouverte et fuite vers ce circuit</td><td>L'accumulateur est relié au côté fond</td><td>Fermer la vanne et refaire le test de dérive</td><td>1 (rapide)</td></tr>\n<tr><td>Clapet piloté 8 non étanche (siège marqué, pollution)</td><td>Il doit bloquer le retour côté fond au neutre</td><td>Test de dérive après nettoyage ou échange du clapet</td><td>2</td></tr>\n<tr><td>Fuite interne d'un joint de piston de vérin 6</td><td>Passage de l'huile du fond vers la tige</td><td>Test de fuite au vérin : tige sortie en butée, flexible côté tige débranché et obturé côté distributeur, observer le débit à l'orifice</td><td>3</td></tr>\n<tr><td>Fuite interne du tiroir 4</td><td>Ne joue que si le clapet 8 est aussi défaillant</td><td>Contrôle après les précédents</td><td>4</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le test de fuite au vérin implique d'ouvrir un circuit qui retient une charge. Il se fait charge posée au sol ou équipement calé mécaniquement, circuit décomprimé, en suivant la procédure du constructeur. Une analyse écrite qui propose ce test sans mentionner la mise en sécurité est incomplète.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la présence d'un clapet piloté sur les vérins de levage est une exigence de sécurité pour la manutention. Le compte rendu mentionne donc l'état de ce clapet, même si la cause finale est un joint de vérin.</div>"
      }
     ],
     "points_cles": [
      "Le schéma hydraulique utilise les symboles ISO 1219 et se lit en position de repos.",
      "Lignes continues : travail et retour ; lignes pointillées : pilotage et drains.",
      "Un distributeur se désigne par orifices/positions ; la case centrale fixe le comportement au neutre.",
      "Pour une fonction, on trace le trajet aller depuis la pompe et le trajet retour vers le réservoir.",
      "Les composants sont cités par leur repère dans une suite ordonnée.",
      "F (daN) = p (bar) × S (cm²) permet de vérifier un effort.",
      "Une dérive s'explique par toutes les fuites possibles de l'huile qui retient la charge, ordonnées du plus simple au plus long.",
      "Tout test qui ouvre un circuit chargé se fait charge posée ou calée, circuit décomprimé."
     ],
     "lexique": [
      {
       "terme": "ISO 1219",
       "def": "Norme internationale des symboles graphiques et schémas des transmissions hydrauliques et pneumatiques."
      },
      {
       "terme": "Position de repos",
       "def": "État du circuit représenté sur le schéma : commandes au neutre, sans énergie."
      },
      {
       "terme": "Distributeur 4/3",
       "def": "Distributeur à quatre orifices et trois positions."
      },
      {
       "terme": "Centre ouvert",
       "def": "Position neutre d'un distributeur qui renvoie le débit de la pompe au réservoir."
      },
      {
       "terme": "Position flottante",
       "def": "Position où les deux chambres du vérin sont reliées au réservoir, laissant l'équipement suivre le sol."
      },
      {
       "terme": "Montage en série",
       "def": "Montage où un distributeur est alimenté par le passage central du précédent."
      },
      {
       "terme": "Prise de pression",
       "def": "Raccord prévu pour brancher un manomètre en un point du circuit."
      },
      {
       "terme": "Test de dérive",
       "def": "Mesure de la descente d'un récepteur chargé, commandes au neutre, pendant un temps donné."
      },
      {
       "terme": "Clapet de dérivation",
       "def": "Clapet qui contourne un filtre colmaté pour éviter son éclatement."
      }
     ]
    },
    {
     "id": "bmm-doc-schema-electrique",
     "titre": "Lire et exploiter un schéma électrique constructeur",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Reconnaître l'organisation d'un schéma électrique constructeur : folios, repères, codes de fils, connecteurs",
      "Identifier les symboles des composants usuels et leur état représenté",
      "Suivre un circuit de l'alimentation à la masse en passant par les commandes et les sécurités",
      "Exploiter un tableau de mesures pour localiser un défaut",
      "Rédiger une conclusion de diagnostic électrique argumentée"
     ],
     "sections": [
      {
       "titre": "Organisation d'un schéma constructeur",
       "contenu": "<p>Le schéma électrique d'un matériel est rarement un dessin unique : il est découpé en <strong>folios</strong> (pages) par fonction (démarrage et charge, éclairage, sécurité, calculateur moteur, cabine…). Chaque folio comporte un <strong>quadrillage</strong> (colonnes numérotées, lignes lettrées) qui permet les renvois : un fil qui sort d'un folio porte l'indication du folio et de la case où il continue.</p>\n<p>On y trouve :</p>\n<ul>\n<li>en haut, les <strong>lignes d'alimentation</strong> : positif permanent (souvent noté 30), positif après contact (15), alimentation accessoires ; en bas, la <strong>masse</strong> (31) et ses points de raccordement au châssis ;</li>\n<li>les composants avec leur <strong>repère</strong> : fusibles (F), relais (K), interrupteurs et contacteurs (S), capteurs (B), actionneurs (Y pour les électrovannes, M pour les moteurs), connecteurs (X), calculateurs (A), selon une codification indiquée dans la légende ;</li>\n<li>les <strong>fils</strong> avec leur code couleur, leur section en mm² et souvent leur numéro ;</li>\n<li>les <strong>connecteurs</strong> avec le numéro de chaque voie (broche) ;</li>\n<li>une <strong>légende</strong> qui donne la signification des codes et l'emplacement des composants sur la machine.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> comme le schéma hydraulique, le schéma électrique est dessiné au repos : contact coupé, relais non alimentés, interrupteurs dans leur position de repos (indiquée par la légende). Un contacteur de siège dessiné ouvert signifie « ouvert quand personne n'est assis ».</div>"
      },
      {
       "titre": "Symboles et conventions",
       "contenu": "<table>\n<thead><tr><th>Composant</th><th>Représentation courante</th><th>Points de lecture</th></tr></thead>\n<tbody>\n<tr><td>Fusible</td><td>Rectangle traversé par le conducteur</td><td>Calibre en ampères indiqué à côté</td></tr>\n<tr><td>Relais</td><td>Bobine (rectangle) et contact séparé, reliés par un pointillé</td><td>Bornes souvent repérées 85 et 86 (bobine), 30, 87, 87a (contacts)</td></tr>\n<tr><td>Interrupteur, contacteur</td><td>Contact ouvert (à fermeture) ou fermé (à ouverture) au repos</td><td>Organe d'action dessiné (pédale, siège, came)</td></tr>\n<tr><td>Diode</td><td>Triangle et barre</td><td>Passage dans le sens du triangle seulement</td></tr>\n<tr><td>Moteur, démarreur</td><td>Cercle avec M</td><td>Borne de puissance et borne de commande du contacteur</td></tr>\n<tr><td>Électrovanne</td><td>Bobine avec mention de la fonction</td><td>Commande tout ou rien ou proportionnelle</td></tr>\n<tr><td>Capteur</td><td>Symbole selon type, avec fils alimentation, signal, masse</td><td>Voies du connecteur et du calculateur</td></tr>\n<tr><td>Point de masse</td><td>Symbole de masse avec repère</td><td>Emplacement sur le châssis dans la légende</td></tr>\n</tbody>\n</table>\n<p>Les relais sont très utilisés dans les circuits de sécurité des matériels : un faible courant traverse les contacteurs de sécurité et la bobine du relais, et le contact du relais commute le fort courant (commande du contacteur de démarreur, alimentation d'un embrayage électromagnétique).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les codes couleur des fils ne sont pas universels : chaque constructeur a les siens (abréviations françaises, anglaises ou allemandes). On lit toujours la légende du schéma avant d'identifier un fil sur la machine.</div>"
      },
      {
       "titre": "Méthode de lecture et de diagnostic",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un schéma électrique pour un diagnostic : 1) identifier le récepteur qui ne fonctionne pas et son folio ; 2) tracer au surligneur le circuit de puissance du récepteur, du fusible à la masse ; 3) tracer le circuit de commande (relais, contacteurs, calculateur) et noter les conditions de fonctionnement (positions des contacteurs) ; 4) relever les points de mesure accessibles : connecteurs, bornes de relais, fusibles ; 5) prévoir pour chaque point la valeur attendue dans les conditions de l'essai (tension avec contact mis et commande actionnée, continuité à vide) ; 6) mesurer, comparer, et avancer de proche en proche jusqu'au point où la valeur mesurée cesse d'être correcte : le défaut est entre ce point et le précédent.</div>\n<p>Les mesures de <strong>tension sous charge</strong> (circuit en fonctionnement) sont plus révélatrices que les mesures de continuité à l'ohmmètre : une connexion oxydée peut laisser passer le faible courant de l'ohmmètre et bloquer le courant réel. La présence de tension aux bornes d'un récepteur qui ne fonctionne pas désigne le récepteur ou sa masse ; l'absence de tension désigne l'amont.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la mesure entre la borne positive d'un récepteur et la masse batterie, comparée à la mesure entre sa borne positive et sa propre borne de masse, permet de distinguer en deux mesures un défaut d'alimentation d'un défaut de masse.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier présente le folio « démarrage » d'un chariot télescopique diesel, décrit ainsi. La batterie G1 (12 V) alimente par un câble de forte section la borne 30 du démarreur M1. Depuis la ligne 15 (après contact), le fusible F7 (10 A) alimente le contact de démarrage de la clé S1 (position « démarrage »). De S1, un fil rouge-jaune de 1 mm² va au connecteur X12 voie 3, puis au contacteur de point mort S8 de l'inverseur de marche (fermé lorsque l'inverseur est au neutre), puis à la borne 86 du relais de démarrage K3. La borne 85 de K3 est reliée à la masse M4 (point de masse sur le châssis avant). La borne 30 de K3 est alimentée par le fusible F2 (30 A) depuis la ligne 30 ; sa borne 87 alimente la borne 50 (commande) du contacteur de démarreur M1. Une diode de roue libre est montée aux bornes de la bobine de K3.</p>\n<p>Symptôme : « contact mis, clé en position démarrage, inverseur au neutre : le démarreur ne tourne pas, aucun bruit. Les voyants s'allument normalement. » Le technicien a relevé les mesures suivantes, clé maintenue en position démarrage :</p>\n<table>\n<thead><tr><th>Point de mesure (par rapport à la masse batterie)</th><th>Valeur mesurée</th></tr></thead>\n<tbody>\n<tr><td>Borne 30 du démarreur</td><td>12,5 V</td></tr>\n<tr><td>Sortie de F7</td><td>12,4 V</td></tr>\n<tr><td>X12 voie 3</td><td>12,3 V</td></tr>\n<tr><td>Borne 86 de K3</td><td>0 V</td></tr>\n<tr><td>Borne 30 de K3</td><td>12,4 V</td></tr>\n<tr><td>Borne 87 de K3</td><td>0 V</td></tr>\n</tbody>\n</table>\n<p>Questions : 1) Décrire le fonctionnement normal du circuit. 2) Interpréter les mesures et localiser le défaut. 3) Proposer les contrôles complémentaires et la réparation.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1) Fonctionnement normal.</strong> Clé en position démarrage, le courant de commande part de F7, traverse S1, le connecteur X12 et le contacteur de point mort S8 (fermé si l'inverseur est au neutre), puis la bobine du relais K3 (bornes 86 vers 85) jusqu'à la masse M4. La bobine excitée ferme le contact 30-87 de K3 : le courant venant de F2 alimente la borne 50 du démarreur, dont le contacteur ferme le circuit de puissance batterie-démarreur. S8 est une <strong>sécurité</strong> : il empêche le démarrage avec une marche engagée. La diode protège les contacts et l'électronique contre la surtension de coupure de la bobine.</p>\n<p><strong>2) Interprétation.</strong> L'alimentation de puissance est correcte (12,5 V à la borne 30 du démarreur) et le relais est alimenté en puissance (12,4 V sur sa borne 30). La commande est présente jusqu'au connecteur X12 voie 3 (12,3 V). Elle est absente à la borne 86 du relais (0 V). Le défaut est donc entre X12 voie 3 et la borne 86 de K3, c'est-à-dire dans le contacteur de point mort S8 ou dans les fils et connexions qui l'encadrent. L'absence de tension sur 87 est une conséquence logique : la bobine n'étant pas alimentée, le relais ne colle pas.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôles complémentaires : 1) vérifier que l'inverseur est réellement au neutre et que la came actionne S8 (réglage mécanique) ; 2) mesurer la tension à l'entrée de S8 : si elle est présente, mesurer à la sortie inverseur au neutre ; tension en entrée et absente en sortie : S8 défectueux ou déréglé ; 3) si la tension est absente dès l'entrée de S8, contrôler le fil entre X12 voie 3 et S8 (connecteur de S8 oxydé, fil coupé au passage d'une articulation) ; 4) si elle est présente en sortie de S8 mais absente en 86, contrôler le fil S8-K3 et le support de relais ; 5) réparer (remplacement ou réglage de S8, réparation du fil avec épissure étanche) ; 6) essai : démarrage inverseur au neutre, et <strong>vérification que le démarrage est impossible marche engagée</strong>.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> shunter le contacteur S8 pour « faire démarrer » le chariot supprime une sécurité contre le démarrage en prise. Le pont n'est admis que comme essai momentané de diagnostic, engin calé, puis la réparation définitive rétablit la sécurité.</div>\n<p>La conclusion rédigée cite les mesures qui prouvent la localisation (12,3 V en X12 voie 3, 0 V en 86 de K3), le composant ou le tronçon en cause, la réparation et l'essai de la sécurité.</p>"
      }
     ],
     "points_cles": [
      "Le schéma constructeur est découpé en folios quadrillés, avec renvois, repères, codes de fils et connecteurs.",
      "Les lignes 30, 15 et 31 désignent respectivement positif permanent, positif après contact et masse.",
      "Le schéma est dessiné au repos ; la position de repos des contacteurs est donnée par la légende.",
      "Un relais sépare le circuit de commande, qui traverse les sécurités, du circuit de puissance.",
      "Les codes couleur sont propres à chaque constructeur.",
      "On mesure de proche en proche, sous charge, jusqu'au point où la valeur cesse d'être correcte.",
      "Deux mesures distinguent un défaut d'alimentation d'un défaut de masse.",
      "Une sécurité ne se shunte qu'en essai momentané ; l'essai final vérifie qu'elle fonctionne."
     ],
     "lexique": [
      {
       "terme": "Folio",
       "def": "Page d'un schéma électrique consacrée à une fonction."
      },
      {
       "terme": "Ligne 30",
       "def": "Positif permanent issu directement de la batterie."
      },
      {
       "terme": "Ligne 15",
       "def": "Positif présent seulement contact mis."
      },
      {
       "terme": "Ligne 31",
       "def": "Retour à la masse."
      },
      {
       "terme": "Relais",
       "def": "Interrupteur commandé par une bobine, qui permet à un faible courant de commuter un fort courant."
      },
      {
       "terme": "Diode de roue libre",
       "def": "Diode qui absorbe la surtension produite par une bobine à la coupure."
      },
      {
       "terme": "Connecteur",
       "def": "Élément de raccordement démontable dont chaque voie est numérotée."
      },
      {
       "terme": "Contacteur de point mort",
       "def": "Interrupteur qui n'autorise le démarrage qu'avec la transmission au neutre."
      },
      {
       "terme": "Tension sous charge",
       "def": "Tension mesurée pendant que le circuit est parcouru par son courant de fonctionnement."
      }
     ]
    },
    {
     "id": "bmm-doc-preparation-intervention",
     "titre": "Préparer une intervention à partir de l'ordre de réparation, du plan d'entretien et des procédures",
     "niveau": "Tle",
     "duree": 55,
     "objectifs": [
      "Extraire d'un ordre de réparation la demande du client et les informations d'identification",
      "Exploiter un plan d'entretien et une procédure constructeur pour lister les opérations",
      "Établir la liste des pièces, consommables, outillages et documents nécessaires",
      "Ordonner les opérations, estimer les durées et construire un planning",
      "Identifier les risques de l'intervention et les mesures de prévention associées"
     ],
     "sections": [
      {
       "titre": "Les documents d'entrée",
       "contenu": "<p>L'épreuve d'analyse préparatoire à une intervention place le candidat dans la situation du technicien qui reçoit un travail à préparer. Les documents fournis sont typiquement :</p>\n<table>\n<thead><tr><th>Document</th><th>Informations à en tirer</th></tr></thead>\n<tbody>\n<tr><td>Ordre de réparation (OR)</td><td>Client, matériel, numéro de série, compteur, demande, travaux autorisés, délai</td></tr>\n<tr><td>Plan d'entretien</td><td>Opérations à l'échéance, lubrifiants et quantités, filtres</td></tr>\n<tr><td>Procédure constructeur (manuel d'atelier)</td><td>Étapes, précautions, outillages spécifiques, couples, réglages</td></tr>\n<tr><td>Catalogue de pièces</td><td>Références valides pour le numéro de série, quantités</td></tr>\n<tr><td>Barème de temps</td><td>Temps alloué par opération</td></tr>\n<tr><td>État du stock ou bon de commande</td><td>Disponibilité des pièces, délais</td></tr>\n<tr><td>Fiches de données de sécurité</td><td>Dangers et protections pour les produits utilisés</td></tr>\n</tbody>\n</table>\n<p>Le livrable attendu est une <strong>fiche de préparation</strong> : liste des opérations ordonnées, ressources, pièces, durées, points de contrôle et mesures de prévention. C'est la traduction écrite des tâches « s'informer, préparer, prévoir les moyens, organiser le poste, organiser les étapes ».</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la préparation se fait avant d'immobiliser le matériel. Son objectif est qu'au moment où l'intervention commence, rien ne manque : pièces, outillage, documents, poste de travail, technicien disponible.</div>"
      },
      {
       "titre": "Méthode de préparation",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une intervention en sept étapes : 1) <strong>identifier</strong> : relever sur l'OR le matériel, son numéro de série, son compteur et la demande exacte du client ; 2) <strong>délimiter</strong> : distinguer les travaux autorisés, les contrôles à réaliser et les travaux éventuels soumis à accord ; 3) <strong>lister</strong> les opérations à partir du plan d'entretien et de la procédure, en supprimant les doublons (une vidange commune à deux opérations ne se fait qu'une fois) ; 4) <strong>ressourcer</strong> : pour chaque opération, noter pièces (références vérifiées), consommables, outillage courant et spécifique, moyens de levage, documents ; 5) <strong>ordonner</strong> : établir les antériorités et regrouper les opérations qui partagent un accès ou une dépose ; 6) <strong>chiffrer le temps</strong> à partir du barème, en tenant compte des regroupements ; 7) <strong>sécuriser</strong> : pour chaque étape à risque, noter la mesure de prévention.</div>\n<p>Les regroupements font gagner du temps : si la procédure de remplacement d'une pompe impose de vidanger l'huile hydraulique, la vidange prévue au plan d'entretien sera réalisée à ce moment, et la quantité d'huile n'est commandée qu'une fois.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une préparation qui recopie la procédure constructeur sans l'adapter au cas (matériel, compteur, autres travaux) n'apporte rien. Le correcteur attend des choix justifiés : pourquoi cet ordre, pourquoi cette pièce, pourquoi cet outillage.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier contient l'ordre de réparation suivant (contenu décrit) : client entreprise de travaux paysagers ; chariot télescopique diesel, numéro de série indiqué, compteur 1 998 h ; demande : « révision 2 000 h ; fuite d'huile au vérin de télescopage, la flèche rentre seule lentement en charge » ; travaux autorisés : révision et réparation de la fuite, devis préalable si autre travail ; restitution souhaitée sous 48 h.</p>\n<p>Extrait du plan d'entretien à 2 000 h :</p>\n<table>\n<thead><tr><th>Opération</th><th>Produit et quantité</th><th>Temps barémé</th></tr></thead>\n<tbody>\n<tr><td>Vidange moteur et filtre à huile</td><td>Huile moteur 10 L, filtre</td><td>0,5 h</td></tr>\n<tr><td>Filtres à carburant (préfiltre et principal), purge</td><td>2 filtres</td><td>0,5 h</td></tr>\n<tr><td>Filtre à air (cartouches principale et de sécurité)</td><td>2 cartouches</td><td>0,3 h</td></tr>\n<tr><td>Vidange circuit hydraulique, filtres retour et aspiration</td><td>Huile hydraulique 90 L, 2 filtres</td><td>1,2 h</td></tr>\n<tr><td>Vidange ponts et réducteurs</td><td>Huile de pont 2 × 8 L, réducteurs 4 × 1 L</td><td>1,0 h</td></tr>\n<tr><td>Contrôle patins de flèche, jeu, graissage</td><td>Graisse</td><td>0,5 h</td></tr>\n<tr><td>Contrôle sécurités (contrôleur de moment de charge), essais</td><td></td><td>0,5 h</td></tr>\n</tbody>\n</table>\n<p>Extrait de la procédure de réfection du vérin de télescopage : flèche rentrée à l'horizontale, moteur arrêté, décompression ; dépose du capot avant de flèche ; débranchement et obturation des flexibles ; dépose de l'axe de tige (outil d'extraction réf. indiquée) et de l'axe de fond ; extraction du vérin par l'avant de la flèche à l'aide d'un palan et d'une élingue (masse du vérin : 85 kg) ; démontage sur banc (clé à ergots, réf. indiquée) ; remplacement du jeu de joints (kit réf. indiquée) ; contrôle de la tige (rayures, rectitude) ; remontage, couple de l'écrou de piston ; purge du vérin ; contrôle de dérive. Temps barémé : 4,5 h, dont 1 h de dépose et 1 h de repose.</p>\n<p>État du stock : kit de joints de vérin non disponible, délai 24 h ; tous les filtres et huiles disponibles. Atelier : deux techniciens disponibles, un palan, un banc de démontage de vérins.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle, pièces et ordre",
       "contenu": "<p><strong>Identification et délimitation.</strong> Deux travaux autorisés : la révision 2 000 h et la réparation de la fuite du vérin de télescopage. Le symptôme « la flèche rentre seule en charge » évoque une fuite interne du vérin (joint de piston) ou de sa valve de maintien de charge ; la fuite externe signalée oriente vers les joints de tige. La procédure prévoit le remplacement du jeu complet ; la valve de maintien de charge sera contrôlée au test de dérive final. Tout autre défaut constaté fera l'objet d'un devis.</p>\n<p><strong>Commande immédiate.</strong> Le kit de joints a un délai de 24 h : il doit être commandé dès la réception de l'OR, ce qui conditionne le respect du délai de 48 h.</p>\n<p><strong>Regroupement.</strong> La réfection du vérin entraîne une perte d'huile hydraulique ; en la réalisant <em>avant</em> la vidange hydraulique de la révision, on évite de compléter une huile neuve puis de la polluer par l'ouverture du circuit. On réalise donc : réfection du vérin, puis vidange hydraulique et filtres, puis purge et essais.</p>\n<table>\n<thead><tr><th>Étape</th><th>Opérations</th><th>Technicien</th><th>Durée</th></tr></thead>\n<tbody>\n<tr><td>J1 matin</td><td>Réception, essai initial et test de dérive (valeur de référence), lecture des codes, nettoyage</td><td>T1</td><td>0,8 h</td></tr>\n<tr><td>J1</td><td>Vidange moteur, filtres carburant et air, ponts et réducteurs, graissage, contrôle des patins</td><td>T1</td><td>2,8 h</td></tr>\n<tr><td>J2 (kit reçu)</td><td>Dépose du vérin, réfection sur banc, repose</td><td>T1 et T2 pour la manutention</td><td>4,5 h</td></tr>\n<tr><td>J2</td><td>Vidange hydraulique, filtres, remplissage, purge</td><td>T2 pendant la réfection sur banc</td><td>1,2 h</td></tr>\n<tr><td>J2 fin</td><td>Essais, contrôle du contrôleur de moment de charge, test de dérive, contrôle d'étanchéité, compte rendu</td><td>T1</td><td>0,8 h</td></tr>\n</tbody>\n</table>\n<p>Le temps total barémé est d'environ 10,1 h, réparti sur deux jours, ce qui respecte le délai si le kit arrive le matin du deuxième jour. La vidange hydraulique ne peut commencer qu'après la dépose du vérin (circuit ouvert) mais peut se dérouler pendant la réfection sur banc, d'où l'intérêt du second technicien.</p>"
      },
      {
       "titre": "Exemple commenté : ressources, risques et contrôles",
       "contenu": "<p><strong>Liste des ressources.</strong></p>\n<ul>\n<li>Pièces : kit de joints de vérin, filtres (huile moteur, deux carburant, deux cartouches d'air, deux hydrauliques), joints de bouchons de vidange.</li>\n<li>Consommables : huile moteur 10 L, huile hydraulique 90 L plus une marge pour le remplissage du vérin, huile de pont 16 L et de réducteurs 4 L selon spécification, graisse, absorbants, bouchons d'obturation.</li>\n<li>Outillage : outil d'extraction d'axe et clé à ergots référencés, clé dynamométrique, palan et élingue de capacité suffisante, banc de vérin, bacs de vidange, manomètre si nécessaire, outil de diagnostic pour le contrôle de moment de charge.</li>\n<li>Documents : procédure, couples de serrage, abaque, procédure de test du contrôleur de moment de charge, FDS des huiles.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> associer à chaque étape à risque sa mesure de prévention : 1) dépose du vérin : flèche rentrée et posée, moteur arrêté, clé retirée, circuit décomprimé, consignation ; 2) extraction d'un vérin de 85 kg : palan et élingue vérifiés, deux techniciens, pas de passage sous la charge ; 3) vidanges : huiles chaudes, gants nitrile, lunettes, bacs de rétention, absorbants ; 4) essais : zone dégagée, conducteur autorisé, test de dérive avec charge connue ; 5) déchets : huiles usagées et filtres triés vers la filière.</div>\n<p><strong>Points de contrôle de fin d'intervention.</strong> Test de dérive comparé à la valeur relevée à la réception et à la limite constructeur ; absence de fuite à la tige ; fonctionnement du contrôleur de moment de charge selon sa procédure ; niveaux après essais ; compte rendu mentionnant les contrôles et l'état de la valve de maintien de charge.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le contrôleur de moment de charge est un dispositif de sécurité d'un engin de levage. Une intervention sur la flèche et son vérin peut nécessiter une vérification de remise en service ; le technicien le signale au chef d'atelier, qui décide si elle doit être organisée avant la restitution.</div>"
      }
     ],
     "points_cles": [
      "Les documents d'entrée sont l'OR, le plan d'entretien, la procédure, le catalogue, le barème, le stock et les FDS.",
      "La préparation se fait avant l'immobilisation et vise à ce que rien ne manque.",
      "On délimite les travaux autorisés et ceux qui exigent un devis.",
      "Les pièces à délai se commandent dès la réception de l'OR.",
      "Les opérations qui partagent un accès ou un fluide se regroupent ; l'ordre se justifie.",
      "Le planning tient compte des antériorités et des techniciens disponibles.",
      "Chaque étape à risque reçoit sa mesure de prévention.",
      "Les contrôles de fin d'intervention reprennent le symptôme initial et les sécurités."
     ],
     "lexique": [
      {
       "terme": "Ordre de réparation",
       "def": "Document qui formalise la demande du client et les travaux qu'il autorise."
      },
      {
       "terme": "Fiche de préparation",
       "def": "Document qui organise une intervention : opérations, ressources, durées, contrôles, prévention."
      },
      {
       "terme": "Plan d'entretien",
       "def": "Tableau des opérations de maintenance préventive par échéance."
      },
      {
       "terme": "Procédure constructeur",
       "def": "Description officielle des étapes, précautions et réglages d'une opération."
      },
      {
       "terme": "Kit de joints",
       "def": "Ensemble des joints nécessaires à la réfection d'un composant."
      },
      {
       "terme": "Regroupement d'opérations",
       "def": "Réalisation conjointe d'opérations qui partagent un accès, une dépose ou un fluide."
      },
      {
       "terme": "Test de dérive",
       "def": "Mesure de la descente ou de la rentrée d'un récepteur chargé immobile."
      },
      {
       "terme": "Délai d'approvisionnement",
       "def": "Temps nécessaire pour recevoir une pièce non disponible en stock."
      }
     ]
    },
    {
     "id": "bmm-doc-donnees-diagnostic",
     "titre": "Exploiter un rapport d'outil de diagnostic et un rapport d'analyse d'huile",
     "niveau": "Tle",
     "duree": 55,
     "objectifs": [
      "Décrire la structure d'un rapport d'outil de diagnostic et d'un rapport d'analyse d'huile",
      "Hiérarchiser des codes défaut selon leur état, leur fréquence et leur contexte",
      "Confronter des valeurs réelles à des valeurs de consigne et de référence",
      "Croiser plusieurs sources de données pour formuler une conclusion cohérente",
      "Rédiger une analyse qui distingue faits, hypothèses et contrôles à réaliser"
     ],
     "sections": [
      {
       "titre": "Des données à interpréter, pas à recopier",
       "contenu": "<p>Les matériels récents produisent une grande quantité de données : codes défaut, historiques, valeurs réelles enregistrées, données télématiques, rapports de laboratoire. À l'épreuve comme en atelier, ces documents sont fournis pour être <strong>interprétés</strong> : il s'agit d'en extraire les informations utiles, de les relier entre elles et à l'analyse fonctionnelle du système, et d'en déduire une démarche ou une conclusion.</p>\n<p>Deux types de documents sont fréquents :</p>\n<ul>\n<li>le <strong>rapport d'outil de diagnostic</strong> : identification du matériel et des calculateurs, liste des codes défaut (actifs et mémorisés), contexte d'apparition, et parfois un relevé de valeurs réelles ou de tests ;</li>\n<li>le <strong>rapport d'analyse d'huile</strong> : identification de l'échantillon (matériel, organe, heures de l'organe et de l'huile), résultats chiffrés par famille (métaux d'usure, contaminants, état de l'huile), seuils et commentaires du laboratoire, et historique des analyses précédentes.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une donnée isolée prouve rarement quelque chose. C'est la cohérence entre plusieurs données indépendantes (un code, une valeur réelle, un résultat d'analyse, le symptôme du client) qui permet de conclure.</div>"
      },
      {
       "titre": "Lire un rapport d'outil de diagnostic",
       "contenu": "<p>Pour chaque code défaut, le rapport indique généralement :</p>\n<table>\n<thead><tr><th>Information</th><th>Utilité</th></tr></thead>\n<tbody>\n<tr><td>Calculateur émetteur</td><td>Situe le défaut dans l'architecture électronique</td></tr>\n<tr><td>Code (par exemple SPN et FMI)</td><td>Paramètre concerné et mode de défaillance</td></tr>\n<tr><td>Libellé</td><td>Description en clair, à vérifier dans la documentation</td></tr>\n<tr><td>État : actif ou mémorisé (inactif)</td><td>Présent maintenant ou apparu dans le passé</td></tr>\n<tr><td>Nombre d'occurrences</td><td>Défaut isolé ou répétitif</td></tr>\n<tr><td>Première et dernière apparition (heures moteur)</td><td>Chronologie, lien avec une intervention</td></tr>\n<tr><td>Données figées (régime, températures, tension au moment du défaut)</td><td>Conditions d'apparition</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> hiérarchiser une liste de codes : 1) séparer codes actifs et mémorisés ; 2) regrouper les codes apparus au même instant (même nombre d'heures) : ils ont souvent une cause commune, comme une chute de tension ou une perte de réseau ; 3) repérer les codes « de conséquence » (réduction de puissance, efficacité du post-traitement insuffisante) et chercher les codes « de cause » qui les précèdent ; 4) donner la priorité aux codes actifs, répétitifs et liés au symptôme du client ; 5) noter les codes anciens et isolés sans les traiter comme cause principale ; 6) pour chaque code retenu, prévoir les contrôles qui le confirment ou l'infirment.</div>\n<p>Les <strong>valeurs réelles</strong> se lisent par paires : consigne et mesure (pression de rampe, pression de suralimentation, position d'actionneur), ou valeurs qui doivent être cohérentes entre elles (températures à froid, régime affiché et régime mesuré).</p>"
      },
      {
       "titre": "Lire un rapport d'analyse d'huile",
       "contenu": "<p>Le rapport d'analyse classe les résultats en familles, avec souvent un code couleur ou une appréciation du laboratoire (normal, à surveiller, anormal) fondée sur des seuils propres au type d'organe et parfois au constructeur.</p>\n<ul>\n<li><strong>Métaux d'usure</strong> (en ppm, parties par million) : fer (chemises, vilebrequin, pignons), chrome (segments), aluminium (pistons), cuivre et plomb (coussinets, bagues, refroidisseurs), étain.</li>\n<li><strong>Contaminants</strong> : silicium (poussière), sodium et potassium (liquide de refroidissement), eau, carburant (dilution), suies.</li>\n<li><strong>État de l'huile</strong> : viscosité, oxydation, indice de base (réserve d'additifs des huiles moteur).</li>\n</ul>\n<p>La lecture se fait toujours en tenant compte des <strong>heures de l'huile</strong> (une huile plus âgée contient naturellement plus de métaux) et de l'<strong>historique</strong> : une augmentation brutale d'une analyse à l'autre est plus significative qu'une valeur légèrement au-dessus d'un seuil.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un échantillon mal prélevé (au fond du carter, huile froide, flacon souillé, appoint d'huile neuve juste avant) donne des résultats faux. Avant de conclure sur une analyse surprenante, on vérifie les conditions de prélèvement et on demande au besoin une contre-analyse.</div>"
      },
      {
       "titre": "Les données télématiques et les historiques d'utilisation",
       "contenu": "<p>Un troisième type de document apparaît de plus en plus : l'<strong>extrait de données télématiques</strong>, sous forme de tableaux ou de courbes. On y lit, sur une période, les heures de fonctionnement, la répartition entre ralenti, charge partielle et pleine charge, la consommation horaire, les températures maximales, les alertes et leur horodatage.</p>\n<p>Ces données renseignent sur l'<strong>utilisation</strong> réelle du matériel, souvent décisive pour comprendre une défaillance : un moteur qui passe la moitié de son temps au ralenti charge plus vite son filtre à particules ; une huile hydraulique qui dépasse régulièrement sa température maximale vieillit vite et use les composants ; des alertes de colmatage de filtre à air répétées annoncent une entrée de poussière.</p>\n<p>Lors de l'analyse, on recherche la <strong>coïncidence dans le temps</strong> entre un changement d'utilisation, une intervention et l'apparition d'un défaut. Une alerte qui apparaît juste après une intervention oriente vers celle-ci (connecteur mal rebranché, mauvais produit, réglage oublié).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'historique d'utilisation fait partie du diagnostic. Il permet aussi d'appuyer le conseil donné au client avec des chiffres, ce qui le rend bien plus convaincant.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "<p>Situation : un tracteur de 160 kW, 4 300 h, revient pour la troisième fois en deux mois avec le message « filtre à particules : régénération requise » et des régénérations à l'arrêt de plus en plus fréquentes. Le client signale une légère perte de puissance et un niveau d'huile moteur « qui ne baisse pas ».</p>\n<p>Extrait du rapport d'outil de diagnostic (calculateur moteur) :</p>\n<table>\n<thead><tr><th>Code (libellé)</th><th>État</th><th>Occurrences</th><th>Dernière apparition</th></tr></thead>\n<tbody>\n<tr><td>Charge en suies du filtre à particules élevée</td><td>Actif</td><td>9</td><td>4 298 h</td></tr>\n<tr><td>Régénération interrompue</td><td>Mémorisé</td><td>4</td><td>4 270 h</td></tr>\n<tr><td>Tension batterie basse au démarrage</td><td>Mémorisé</td><td>1</td><td>3 105 h</td></tr>\n</tbody>\n</table>\n<p>Valeurs réelles relevées moteur chaud au ralenti accéléré, sans charge :</p>\n<table>\n<thead><tr><th>Paramètre</th><th>Valeur</th><th>Référence (documentation)</th></tr></thead>\n<tbody>\n<tr><td>Correction de débit cylindre 1 / 2 / 3 / 4 / 5 / 6</td><td>+0,4 / −0,3 / +3,9 / +0,2 / −0,5 / +0,1 mm³/coup</td><td>Écart admissible ±2,5 mm³/coup</td></tr>\n<tr><td>Pression de rampe consigne / réelle</td><td>950 / 940 bar</td><td>Écart inférieur à 50 bar</td></tr>\n<tr><td>Débit de retour injecteurs (mesure en éprouvettes, 1 min)</td><td>Cyl. 3 nettement supérieur aux autres</td><td>Valeurs homogènes attendues</td></tr>\n</tbody>\n</table>\n<p>Extrait du rapport d'analyse d'huile moteur (huile de 420 h, analyse précédente à 3 900 h sur huile de 400 h) :</p>\n<table>\n<thead><tr><th>Indicateur</th><th>Analyse précédente</th><th>Analyse actuelle</th><th>Appréciation du laboratoire</th></tr></thead>\n<tbody>\n<tr><td>Fer (ppm)</td><td>18</td><td>24</td><td>Normal</td></tr>\n<tr><td>Silicium (ppm)</td><td>6</td><td>7</td><td>Normal</td></tr>\n<tr><td>Sodium / potassium</td><td>Traces</td><td>Traces</td><td>Normal</td></tr>\n<tr><td>Dilution par le carburant</td><td>Inférieure au seuil</td><td>Supérieure au seuil d'alerte</td><td>Anormal</td></tr>\n<tr><td>Viscosité à 100 °C</td><td>Dans la classe</td><td>En dessous de la classe</td><td>Anormal</td></tr>\n<tr><td>Suies</td><td>Faibles</td><td>Élevées</td><td>À surveiller</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Tri des codes.</strong> Le code actif et répétitif de charge en suies est lié au symptôme ; c'est un code de <strong>conséquence</strong> : il dit que le filtre se charge trop vite, pas pourquoi. Le code de régénération interrompue (mémorisé) aggrave la situation mais peut venir de l'utilisation (arrêts du moteur pendant les régénérations) ; il conduit à un conseil au client. Le code de tension batterie, unique et ancien (3 105 h), est sans rapport avec le symptôme : il est noté sans être traité comme cause.</p>\n<p><strong>Valeurs réelles.</strong> La pression de rampe suit sa consigne : l'alimentation haute pression n'est pas en cause. La correction de débit du cylindre 3 (+3,9 mm³/coup) sort de l'écart admissible : le calculateur compense un défaut de ce cylindre. Le débit de retour du même injecteur est anormalement élevé. Ces deux données indépendantes désignent l'<strong>injecteur du cylindre 3</strong>.</p>\n<p><strong>Analyse d'huile.</strong> La dilution par le carburant et la baisse de viscosité confirment qu'une quantité anormale de gazole atteint le carter : c'est ce qui explique que le niveau « ne baisse pas ». Les suies élevées sont cohérentes avec une combustion dégradée. Le fer augmente peu (huile un peu plus âgée) ; silicium et sodium-potassium sont normaux : pas d'entrée de poussière ni de fuite de liquide de refroidissement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger la conclusion en séparant faits, interprétation et suite : 1) <strong>faits</strong> : correction cylindre 3 hors tolérance, retour injecteur 3 élevé, dilution et baisse de viscosité de l'huile, charge en suies répétée ; 2) <strong>interprétation</strong> : injecteur 3 défaillant (pulvérisation dégradée ou fuite), qui produit des suies en excès et dilue l'huile ; les régénérations interrompues aggravent l'encrassement du filtre ; 3) <strong>contrôles complémentaires</strong> : test de contribution des cylindres avec l'outil, contrôle de la compression du cylindre 3 pour écarter un défaut mécanique ; 4) <strong>réparation proposée</strong> : remplacement et codage de l'injecteur 3, vidange et filtre d'huile moteur, régénération de service, contrôle de la charge du filtre à particules après essai en charge ; 5) <strong>conseil</strong> : ne pas interrompre les régénérations, analyse d'huile de contrôle à la prochaine vidange.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> remplacer le filtre à particules sans traiter l'injecteur aurait été coûteux et inutile : le nouveau filtre se serait chargé aussi vite. Le croisement entre outil de diagnostic, mesure physique et analyse d'huile a permis de traiter la cause première pour un coût bien plus faible.</div>"
      }
     ],
     "points_cles": [
      "Les données se croisent : une conclusion repose sur plusieurs indices indépendants.",
      "Codes actifs, répétitifs et liés au symptôme sont prioritaires ; les codes simultanés ont souvent une cause commune.",
      "Un code de conséquence (charge en suies, réduction de puissance) appelle la recherche d'un code ou d'une mesure de cause.",
      "Les valeurs réelles se lisent par paires consigne-mesure ou par cohérence entre capteurs.",
      "Une analyse d'huile se lit avec les heures de l'huile et l'historique ; la tendance compte.",
      "Dilution par le carburant et baisse de viscosité orientent vers l'injection.",
      "La conclusion sépare faits, interprétation, contrôles complémentaires, réparation et conseil.",
      "Traiter la cause première évite de remplacer inutilement des composants coûteux."
     ],
     "lexique": [
      {
       "terme": "Rapport de diagnostic",
       "def": "Document édité par l'outil de diagnostic qui liste calculateurs, codes défaut et valeurs."
      },
      {
       "terme": "Code actif",
       "def": "Code défaut dont la condition est présente au moment de la lecture."
      },
      {
       "terme": "Code mémorisé",
       "def": "Code défaut enregistré dans le passé dont la condition n'est plus présente."
      },
      {
       "terme": "Données figées",
       "def": "Valeurs des paramètres enregistrées au moment de l'apparition d'un code."
      },
      {
       "terme": "Correction de débit",
       "def": "Compensation appliquée par le calculateur à un injecteur pour égaliser la contribution des cylindres."
      },
      {
       "terme": "ppm",
       "def": "Parties par million, unité de concentration des éléments dans une huile."
      },
      {
       "terme": "Dilution",
       "def": "Présence anormale de carburant dans l'huile moteur."
      },
      {
       "terme": "Indice de base",
       "def": "Mesure de la réserve d'additifs alcalins d'une huile moteur."
      },
      {
       "terme": "Contre-analyse",
       "def": "Nouvelle analyse d'un échantillon prélevé pour confirmer un résultat douteux."
      }
     ]
    }
   ]
  }
 ]
};
