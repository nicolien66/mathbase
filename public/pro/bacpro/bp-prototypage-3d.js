/* Polymates — Bac pro Modélisation et prototypage 3D — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-prototypage-3d"] = {
 "id": "bp-prototypage-3d",
 "nom": "Modélisation et prototypage 3D",
 "icone": "🎓",
 "couleur": "#82b4d2",
 "intro": "Le bac pro Modélisation et prototypage 3D forme des techniciens de bureau d'études capables de participer à la conception d'un produit, de le modéliser et de l'optimiser avec des outils numériques, puis d'en tirer le dossier de définition, des visuels et des prototypes de validation ; ils travaillent dans l'industrie mécanique, l'automobile, l'aéronautique, le mobilier, les équipements sportifs, le design ou les fablabs. Ce cours de première et de terminale suit le référentiel créé par l'arrêté du 18 janvier 2022 (première session en 2025) ; la spécialité n'appartenant à aucune famille de métiers, il reprend d'abord brièvement les bases du dessin technique et du métier. Il est organisé en deux blocs : un cours théorique (démarche de conception, chaîne numérique, mécanique, technologie, matériaux, procédés, simulation, spécification, prototypage), puis un bloc d'analyse de documents qui montre, exemples commentés à l'appui, comment exploiter cahier des charges, dessins d'ensemble et de définition, catalogues, rapports de simulation et fiches de prototypage.",
 "parties": [
  {
   "titre": "Partie 1 — Le métier et la démarche de conception",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmp3-metier-representation",
     "titre": "Le métier de modeleur 3D et les bases de la représentation technique",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Situer le titulaire du bac pro dans un bureau d'études et dans la chaîne de développement d'un produit",
      "Connaître les règles de base du dessin technique normalisé : vues, traits, échelles, formats, cartouche",
      "Lire et tracer une projection orthogonale en vues multiples selon la méthode européenne",
      "Utiliser coupes, sections et perspectives pour représenter une pièce sans ambiguïté",
      "Réaliser un croquis à main levée lisible et proportionné"
     ],
     "sections": [
      {
       "titre": "Le modeleur 3D dans l'entreprise industrielle",
       "contenu": "<p>Le titulaire du bac pro Modélisation et prototypage 3D travaille le plus souvent dans un <strong>bureau d'études</strong> (BE), c'est-à-dire le service qui transforme un besoin client en une définition complète du produit : formes, dimensions, matériaux, tolérances, procédés envisagés. Il peut aussi exercer dans un <strong>bureau des méthodes</strong>, dans une cellule de prototypage, dans un fablab ou chez un sous-traitant qui réalise des études pour des donneurs d'ordre (automobile, aéronautique, mobilier, équipements sportifs, médical…).</p>\n<p>Son poste se situe au cœur de la <strong>chaîne numérique</strong> : il reçoit des données d'entrée (cahier des charges, croquis, pièce existante, fichiers d'un client), construit ou modifie une <strong>maquette numérique 3D</strong>, la vérifie par des simulations simples, puis en tire les documents (plans, nomenclatures, visuels) et les prototypes qui permettront de valider la solution.</p>\n<table>\n<thead><tr><th>Activité du référentiel</th><th>Exemples de tâches concrètes</th></tr></thead>\n<tbody>\n<tr><td>Participer à un projet de conception</td><td>Analyser un cahier des charges, proposer des croquis de solutions, participer à une séance de créativité</td></tr>\n<tr><td>Élaborer une solution avec un outil numérique</td><td>Modéliser des pièces et des assemblages, reprendre un fichier client, simplifier une maquette pour la simulation</td></tr>\n<tr><td>Exploiter la maquette numérique</td><td>Éditer un dessin de définition, préparer une impression 3D, produire un rendu réaliste ou une vue éclatée</td></tr>\n<tr><td>Participer aux activités du bureau d'études</td><td>Planifier son travail, nommer et archiver ses fichiers, travailler avec les méthodes, la qualité, les achats</td></tr>\n</tbody>\n</table>\n<p>Ce métier exige donc deux cultures : une culture <strong>numérique</strong> (logiciels de CAO, formats, gestion des données) et une culture <strong>mécanique</strong> (fonctionnement des mécanismes, matériaux, procédés). Un modèle 3D magnifique mais impossible à fabriquer, ou qui ne remplit pas sa fonction, n'a aucune valeur pour l'entreprise.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans une PME de sous-traitance, le même technicien peut, dans la même semaine, rétro-concevoir une pièce cassée à partir d'un scan 3D, modéliser un support pour un client, lancer trois impressions de validation et mettre à jour les plans après le retour de l'atelier.</div>"
      },
      {
       "titre": "Le langage du dessin technique : formats, échelles, traits",
       "contenu": "<p>Même à l'ère du 3D, le <strong>dessin technique</strong> reste le langage contractuel entre le bureau d'études, l'atelier et les fournisseurs. Il obéit à des normes internationales (série ISO 128 pour les principes de représentation) afin que tout technicien, dans n'importe quel pays, lise le même plan de la même manière.</p>\n<h4>Formats et cartouche</h4>\n<p>Les feuilles suivent la série A : A4 (210 × 297 mm), A3 (297 × 420 mm), A2, A1, A0, chaque format étant le double du précédent. Chaque plan comporte un <strong>cartouche</strong>, placé en bas à droite, qui donne au minimum : le titre, le numéro du document, l'indice de révision, l'échelle, le symbole de projection, l'auteur, la date, la matière, et le nom de l'entreprise.</p>\n<h4>Échelles</h4>\n<p>L'<strong>échelle</strong> est le rapport entre la dimension dessinée et la dimension réelle. Les échelles normalisées sont 1:1 (grandeur réelle), les échelles de réduction 1:2, 1:5, 1:10, 1:20… et d'agrandissement 2:1, 5:1, 10:1. Les cotes inscrites sont toujours les <strong>dimensions réelles</strong>, quelle que soit l'échelle.</p>\n<h4>Types de traits</h4>\n<table>\n<thead><tr><th>Trait</th><th>Usage principal</th></tr></thead>\n<tbody>\n<tr><td>Continu fort</td><td>Arêtes et contours vus</td></tr>\n<tr><td>Continu fin</td><td>Lignes de cote, d'attache, hachures, fond de filet</td></tr>\n<tr><td>Interrompu fin (tirets)</td><td>Arêtes et contours cachés</td></tr>\n<tr><td>Mixte fin (trait-point)</td><td>Axes, plans de symétrie, trajectoires</td></tr>\n<tr><td>Mixte fin à deux tirets</td><td>Pièces voisines, positions extrêmes d'une pièce mobile</td></tr>\n<tr><td>Mixte fort aux extrémités</td><td>Trace d'un plan de coupe</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un plan, la cote indique toujours la dimension réelle en millimètres, sans écrire l'unité. Une pièce dessinée à l'échelle 1:2 avec une cote 80 mesure bien 80 mm.</div>"
      },
      {
       "titre": "La projection orthogonale et la disposition des vues",
       "contenu": "<p>Une pièce en volume est représentée sur une feuille plane par des <strong>vues</strong> obtenues en projection orthogonale : on regarde la pièce perpendiculairement à chacune de ses faces principales. La vue la plus représentative de la forme est choisie comme <strong>vue de face</strong> ; les autres vues sont placées autour selon une règle.</p>\n<p>En Europe, on utilise la <strong>méthode du premier dièdre</strong> (méthode européenne, symbole E) : la vue de gauche (pièce regardée depuis la gauche) se place à droite de la vue de face, la vue de dessus se place sous la vue de face. Les pays anglo-saxons utilisent souvent la méthode du troisième dièdre (méthode américaine, symbole A), où c'est l'inverse. Le symbole de la méthode figure toujours dans le cartouche : il évite des erreurs coûteuses avec les fournisseurs étrangers.</p>\n<table>\n<thead><tr><th>Vue</th><th>Position en méthode européenne</th></tr></thead>\n<tbody>\n<tr><td>Vue de dessus</td><td>Sous la vue de face</td></tr>\n<tr><td>Vue de gauche</td><td>À droite de la vue de face</td></tr>\n<tr><td>Vue de droite</td><td>À gauche de la vue de face</td></tr>\n<tr><td>Vue de dessous</td><td>Au-dessus de la vue de face</td></tr>\n</tbody>\n</table>\n<p>Les vues sont <strong>alignées</strong> : une même arête se retrouve à la même hauteur sur la vue de face et la vue de gauche, et à la même abscisse sur la vue de face et la vue de dessus. On ne dessine que les vues <strong>nécessaires et suffisantes</strong> : souvent deux ou trois. Une pièce de révolution (axe, bague) se définit fréquemment par une seule vue complétée par les symboles de diamètre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour lire un ensemble de vues et imaginer la pièce : 1) repérer la méthode de projection dans le cartouche ; 2) identifier la vue de face et les vues associées ; 3) choisir une forme simple sur une vue (un trou, un épaulement) et retrouver sa correspondance sur les autres vues à l'aide des alignements ; 4) reconstituer la pièce forme par forme, comme si on la modélisait par ajouts et enlèvements de matière ; 5) contrôler en vérifiant que chaque trait de chaque vue est expliqué par le volume imaginé.</div>"
      },
      {
       "titre": "Coupes, sections et vues particulières",
       "contenu": "<p>Quand une pièce comporte de nombreuses formes intérieures, les traits cachés rendent la vue illisible. On réalise alors une <strong>coupe</strong> : on imagine que la pièce est sciée par un plan, on enlève la partie située entre l'observateur et le plan, et on dessine ce qui reste. Les surfaces de matière coupées sont <strong>hachurées</strong> en trait continu fin, généralement inclinées à 45°.</p>\n<ul>\n<li><strong>Coupe simple</strong> : un seul plan de coupe, repéré sur une autre vue par un trait mixte fort aux extrémités, des flèches indiquant le sens d'observation et deux lettres (coupe A-A).</li>\n<li><strong>Demi-coupe</strong> : pour une pièce symétrique, la moitié de la vue est en coupe et l'autre moitié en vue extérieure.</li>\n<li><strong>Coupe brisée</strong> : le plan de coupe change de direction pour passer par plusieurs formes intéressantes.</li>\n<li><strong>Coupe locale</strong> : seule une petite zone est coupée, limitée par un trait continu fin à main levée.</li>\n<li><strong>Section</strong> : on ne dessine que la surface coupée, pas ce qui est derrière ; utile pour montrer le profil d'un bras, d'une nervure ou d'un méplat.</li>\n</ul>\n<p>Certaines pièces ne se coupent pas dans le sens longitudinal : vis, écrous, goupilles, clavettes, billes, arbres pleins et nervures. Les hachurer n'apporterait aucune information et alourdirait le dessin.</p>\n<p>On utilise aussi des <strong>vues partielles</strong> (seule une partie utile de la vue), des <strong>vues de détail</strong> agrandies (repérées par une lettre et une échelle, par exemple « Détail B 5:1 ») et des <strong>vues auxiliaires</strong> perpendiculaires à une face inclinée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans une coupe d'assemblage, deux pièces voisines doivent avoir des hachures d'orientation ou d'espacement différents, alors qu'une même pièce garde les mêmes hachures sur toutes les vues. Une erreur de hachures fait croire que deux pièces n'en font qu'une, ou l'inverse.</div>"
      },
      {
       "titre": "Perspectives et croquis à main levée",
       "contenu": "<p>Les vues orthogonales sont précises mais demandent un effort de lecture. La <strong>perspective</strong> donne en une seule image une idée du volume. Les deux perspectives les plus utilisées en mécanique sont :</p>\n<ul>\n<li>la <strong>perspective isométrique</strong>, où les trois axes principaux sont inclinés à 120° les uns des autres et où les longueurs sont portées sans réduction : c'est la vue « iso » proposée par les logiciels de CAO ;</li>\n<li>la <strong>perspective cavalière</strong>, où la face avant est dessinée en vraie grandeur et les fuyantes sont tracées à 45° avec un coefficient de réduction, souvent 0,5 : elle est rapide à tracer à la main.</li>\n</ul>\n<p>Le <strong>croquis</strong> est un dessin à main levée, sans instrument, mais <strong>proportionné</strong> et lisible. Le référentiel demande de savoir représenter une solution par croquis ou schéma : c'est l'outil de la phase de recherche, de la réunion de créativité, du relevé en atelier. Un bon croquis montre les surfaces fonctionnelles, identifie les éléments standard (vis, roulements, goupilles) et respecte les proportions générales.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser le croquis d'une pièce prismatique en perspective isométrique : 1) tracer légèrement le parallélépipède enveloppe, en respectant les rapports longueur/largeur/hauteur ; 2) placer les formes principales par enlèvement dans ce bloc (rainure, épaulement) ; 3) ajouter les trous en traçant d'abord leur axe puis une ellipse inscrite dans un losange ; 4) repasser en trait fort les arêtes vues ; 5) ajouter, si besoin, les cotes principales et les annotations (matière, surfaces fonctionnelles).</div>\n<p>Pour un croquis d'assemblage, on privilégie souvent une coupe schématique : elle montre comment les pièces s'emboîtent, où sont les arrêts axiaux, par où passent les efforts.</p>"
      },
      {
       "titre": "Du dessin papier à la maquette numérique",
       "contenu": "<p>Dans un logiciel de CAO, on ne dessine plus les vues : on construit un <strong>modèle volumique</strong>, et le logiciel génère automatiquement les vues, coupes et perspectives. Les règles du dessin technique restent pourtant indispensables, pour trois raisons :</p>\n<ol>\n<li>il faut <strong>choisir</strong> les vues, les coupes et l'échelle qui rendent le plan lisible ; le logiciel ne le fait pas à notre place ;</li>\n<li>il faut <strong>vérifier</strong> que le plan généré respecte les normes (hachures, traits d'axe, symbole de projection, cartouche complet) ;</li>\n<li>il faut savoir <strong>lire</strong> les plans des clients et des fournisseurs, parfois anciens, parfois papier, parfois en méthode américaine.</li>\n</ol>\n<p>Le passage du plan 2D à la maquette 3D est aussi une compétence courante : reprendre un plan d'archive pour en faire un modèle, c'est appliquer la méthode de lecture des vues, puis transformer chaque forme reconnue en fonction de CAO (extrusion, enlèvement de matière, révolution, perçage).</p>\n<table>\n<thead><tr><th>Forme lue sur le plan</th><th>Fonction de CAO correspondante</th></tr></thead>\n<tbody>\n<tr><td>Contour prismatique d'épaisseur constante</td><td>Esquisse puis extrusion</td></tr>\n<tr><td>Pièce de révolution (axe, bague, poulie)</td><td>Esquisse du demi-profil puis révolution</td></tr>\n<tr><td>Trou débouchant, taraudé, lamé</td><td>Fonction perçage</td></tr>\n<tr><td>Arêtes cassées ou arrondies</td><td>Chanfrein, congé</td></tr>\n<tr><td>Formes répétées</td><td>Répétition linéaire ou circulaire</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la maquette numérique est la référence, le plan en est une représentation dérivée. Mais c'est encore souvent le plan, signé et indicé, qui a valeur contractuelle avec un fournisseur.</div>"
      }
     ],
     "points_cles": [
      "Le titulaire du bac pro travaille surtout en bureau d'études, au cœur de la chaîne numérique de développement d'un produit",
      "Le dessin technique est normalisé : formats A, cartouche, échelles normalisées, types de traits",
      "Les cotes sont toujours les dimensions réelles en millimètres, quelle que soit l'échelle",
      "En méthode européenne, la vue de gauche se place à droite de la vue de face et la vue de dessus en dessous",
      "Les vues sont alignées ; on ne dessine que les vues nécessaires et suffisantes",
      "Coupes et sections montrent l'intérieur ; vis, axes pleins et nervures ne se coupent pas longitudinalement",
      "La perspective isométrique et le croquis proportionné servent à communiquer rapidement une solution",
      "La maquette 3D est la référence, mais le plan reste souvent le document contractuel"
     ],
     "lexique": [
      {
       "terme": "Bureau d'études",
       "def": "Service qui définit complètement un produit à partir d'un besoin : formes, dimensions, matériaux, tolérances."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre d'identification d'un plan : titre, numéro, indice, échelle, auteur, date, matière, méthode de projection."
      },
      {
       "terme": "Échelle",
       "def": "Rapport entre la dimension dessinée et la dimension réelle, par exemple 1:2 ou 5:1."
      },
      {
       "terme": "Projection orthogonale",
       "def": "Représentation d'un objet par des vues obtenues en le regardant perpendiculairement à ses faces."
      },
      {
       "terme": "Méthode européenne",
       "def": "Disposition des vues du premier dièdre : la vue de gauche est placée à droite de la vue de face."
      },
      {
       "terme": "Coupe",
       "def": "Représentation d'une pièce après suppression fictive de la partie située devant un plan sécant."
      },
      {
       "terme": "Section",
       "def": "Représentation de la seule surface de matière contenue dans le plan sécant."
      },
      {
       "terme": "Perspective isométrique",
       "def": "Perspective où les trois axes sont à 120° et les longueurs portées sans réduction."
      },
      {
       "terme": "Croquis",
       "def": "Dessin à main levée, sans instrument, mais proportionné et lisible."
      },
      {
       "terme": "Maquette numérique",
       "def": "Modèle 3D d'une pièce ou d'un assemblage, référence de la définition du produit."
      }
     ]
    },
    {
     "id": "bmp3-besoin-cahier-charges",
     "titre": "Analyse du besoin, cahier des charges et ingénierie système",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Formuler le besoin auquel répond un produit et identifier ses utilisateurs",
      "Distinguer fonctions de service, contraintes, critères, niveaux et flexibilités",
      "Lire les principaux diagrammes SysML utilisés en conception : contexte, exigences, définition de blocs, bloc interne",
      "Décrire un parcours utilisateur et en tirer des exigences",
      "Connaître le rôle de la veille technologique et de la recherche d'antériorités"
     ],
     "sections": [
      {
       "titre": "Du besoin au produit",
       "contenu": "<p>Tout projet de conception part d'un <strong>besoin</strong> : une nécessité ou un désir éprouvé par un utilisateur. Le besoin s'exprime sans parler de solution : « maintenir une tablette à hauteur des yeux pendant une recette de cuisine » et non « fabriquer un support articulé en aluminium ». Garder le besoin indépendant de la solution permet d'explorer plusieurs pistes avant de choisir.</p>\n<p>Le <strong>produit</strong> est ce qui est fourni pour satisfaire ce besoin. Il peut s'agir d'un objet, d'un mécanisme, d'un outillage pour l'atelier, d'une pièce de rechange. Pour un bureau d'études de sous-traitance, le client est souvent une autre entreprise : le <strong>donneur d'ordre</strong>.</p>\n<p>Une méthode simple pour énoncer le besoin consiste à répondre à trois questions : <em>à qui</em> le produit rend-il service ? <em>sur quoi</em> agit-il ? <em>dans quel but</em> ? Pour un étau de perceuse : il rend service à l'opérateur, il agit sur la pièce à percer, dans le but de la maintenir en position pendant le perçage.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le besoin se formule par un verbe d'action et un complément, du point de vue de l'utilisateur, sans citer de solution technique.</div>\n<p>Il faut ensuite valider le besoin : pourquoi existe-t-il ? peut-il disparaître ou évoluer ? Un besoin lié à une réglementation (par exemple une protection de machine) est stable ; un besoin lié à une mode peut disparaître vite, ce qui pèse sur l'investissement possible dans les outillages.</p>"
      },
      {
       "titre": "Le parcours utilisateur",
       "contenu": "<p>Le <strong>parcours utilisateur</strong> décrit, étape par étape, ce que vit l'utilisateur avec le produit : découverte, déballage, installation, utilisation normale, réglage, nettoyage, entretien, panne, fin de vie. Pour chaque étape, on note ce qu'il fait, ce qu'il ressent, et les difficultés rencontrées. Ces difficultés, appelées <strong>points de douleur</strong>, sont autant de sources d'exigences.</p>\n<table>\n<thead><tr><th>Étape</th><th>Action de l'utilisateur</th><th>Difficulté observée</th><th>Exigence déduite</th></tr></thead>\n<tbody>\n<tr><td>Installation</td><td>Fixe le support au plan de travail</td><td>Besoin d'un outil, serrage long</td><td>Fixation sans outil en moins de 30 s</td></tr>\n<tr><td>Réglage</td><td>Oriente la tablette</td><td>Le réglage se dérègle seul</td><td>Maintien de la position sous une masse de 700 g</td></tr>\n<tr><td>Utilisation</td><td>Touche l'écran avec des mains sales</td><td>La tablette bascule</td><td>Stabilité sous un appui de 10 N sur l'écran</td></tr>\n<tr><td>Nettoyage</td><td>Lave le support</td><td>Recoins impossibles à nettoyer</td><td>Surfaces lisses, lavables à l'eau savonneuse</td></tr>\n</tbody>\n</table>\n<p>Observer de vrais utilisateurs, ou interroger le service après-vente, apporte souvent plus d'informations que les suppositions du concepteur. Les retours clients, les réclamations et les produits concurrents sont des données d'entrée précieuses.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de modifier une poignée d'outillage, un bureau d'études demande à l'atelier de filmer quelques manipulations. On découvre que les opérateurs portent des gants épais : le diamètre de préhension prévu était trop faible.</div>"
      },
      {
       "titre": "Le cahier des charges fonctionnel",
       "contenu": "<p>Le <strong>cahier des charges fonctionnel</strong> (CdCF) est le document par lequel le demandeur exprime son besoin en termes de <strong>fonctions de service</strong> et de <strong>contraintes</strong>. Il sert de référence pendant tout le projet : chaque solution sera validée en vérifiant qu'elle respecte les exigences qu'il contient.</p>\n<ul>\n<li><strong>Fonction de service</strong> : action attendue du produit pour répondre au besoin, formulée par un verbe à l'infinitif (« maintenir la tablette dans la position choisie »).</li>\n<li><strong>Contrainte</strong> : limitation imposée à la liberté du concepteur (respecter une norme, utiliser un matériau alimentaire, ne pas dépasser un coût).</li>\n<li><strong>Critère d'appréciation</strong> : grandeur qui permet de juger si la fonction est remplie (masse supportée, temps de réglage, effort de manœuvre).</li>\n<li><strong>Niveau</strong> : valeur attendue du critère, avec son unité (700 g, 30 s, 20 N).</li>\n<li><strong>Flexibilité</strong> : marge de négociation sur le niveau, par exemple « ± 10 % » ou une classe F0 (impératif) à F3 (très négociable).</li>\n</ul>\n<table>\n<thead><tr><th>Fonction</th><th>Critère</th><th>Niveau</th><th>Flexibilité</th></tr></thead>\n<tbody>\n<tr><td>FS1 : maintenir la tablette dans la position choisie</td><td>Masse supportée sans glissement</td><td>≥ 700 g</td><td>F0</td></tr>\n<tr><td>FS2 : permettre le réglage de l'inclinaison</td><td>Plage angulaire</td><td>0° à 75°</td><td>± 5°</td></tr>\n<tr><td>FS3 : se fixer au plan de travail</td><td>Épaisseur de plan acceptée</td><td>15 à 40 mm</td><td>F1</td></tr>\n<tr><td>C1 : respecter le coût cible</td><td>Coût de revient en série de 5 000</td><td>≤ 8 €</td><td>F2</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un critère sans niveau chiffré (« le support doit être léger ») est inexploitable : impossible de dire si une solution le respecte. Il faut toujours une grandeur, une valeur et une unité.</div>"
      },
      {
       "titre": "L'ingénierie système et le langage SysML",
       "contenu": "<p>Les produits modernes associent mécanique, électronique, logiciel et énergie. Pour décrire un tel ensemble de manière partagée, on utilise l'<strong>ingénierie système</strong> et un langage graphique normalisé : le <strong>SysML</strong> (Systems Modeling Language). Le référentiel demande de savoir lire plusieurs de ses diagrammes.</p>\n<table>\n<thead><tr><th>Diagramme</th><th>Ce qu'il montre</th><th>Ce qu'on y cherche</th></tr></thead>\n<tbody>\n<tr><td>Diagramme de contexte</td><td>Le système au centre et les éléments extérieurs avec lesquels il interagit (utilisateur, environnement, autres systèmes)</td><td>Les interactions qui deviendront des fonctions ou des contraintes</td></tr>\n<tr><td>Diagramme des exigences (req)</td><td>Les exigences sous forme de rectangles avec un identifiant et un texte, reliées par des liens de composition ou de raffinement</td><td>Les valeurs à respecter et leur hiérarchie</td></tr>\n<tr><td>Diagramme de définition de blocs (bdd)</td><td>La composition du système en blocs et sous-blocs (arborescence)</td><td>La structure du produit, proche de la future nomenclature</td></tr>\n<tr><td>Diagramme de bloc interne (ibd)</td><td>Les blocs et les flux qui circulent entre eux (énergie, matière, information) à travers des ports</td><td>Le cheminement de la puissance et des informations</td></tr>\n</tbody>\n</table>\n<p>Dans un diagramme des exigences, chaque exigence porte un <strong>identifiant</strong> (par exemple 1.2) et un <strong>texte</strong>. Une exigence peut être décomposée en sous-exigences (lien de contenance, symbolisé par un cercle avec une croix) ou précisée par une autre (lien « refine »). La lecture consiste à remonter de l'exigence chiffrée vers l'exigence générale qu'elle sert.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un diagramme de bloc interne : 1) repérer la source d'énergie (batterie, réseau, utilisateur) ; 2) suivre les flèches de flux d'énergie de bloc en bloc jusqu'à l'effecteur (roue, pince, vérin) ; 3) noter pour chaque bloc la nature de l'énergie en entrée et en sortie (électrique, mécanique de rotation, de translation) ; 4) repérer à part les flux d'information (capteurs vers commande) ; 5) en déduire la chaîne d'énergie et la chaîne d'information du produit.</div>"
      },
      {
       "titre": "Veille technologique, brevets et signaux faibles",
       "contenu": "<p>Avant de concevoir, il faut savoir ce qui existe. La <strong>veille technologique</strong> est la surveillance organisée des innovations, des produits concurrents, des nouveaux matériaux et procédés. Elle s'appuie sur des salons professionnels, des revues, des catalogues fournisseurs, des sites spécialisés et des bases de brevets.</p>\n<p>La <strong>recherche d'antériorités</strong> consiste à vérifier qu'une solution n'est pas déjà protégée par un <strong>brevet</strong> ou par un dessin et modèle déposé. Elle évite deux risques : copier sans le savoir une solution protégée (et s'exposer à une action en contrefaçon) ou investir dans une idée déjà publiée et donc non brevetable. Les bases publiques d'offices de propriété industrielle permettent de chercher par mots-clés, par déposant ou par classification.</p>\n<p>Les <strong>signaux faibles</strong> sont des informations encore discrètes qui annoncent une évolution importante : un nouveau matériau biosourcé qui apparaît chez quelques fournisseurs, une réglementation en préparation, un usage émergent observé chez des clients. Les repérer tôt donne un avantage concurrentiel.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un technicien de BE qui note dans un tableau partagé chaque nouveauté repérée chez les fournisseurs (nouvelle résine, nouvel insert à chaud pour pièces imprimées) contribue à la veille de toute l'équipe.</div>\n<p>Toutes ces informations nourrissent le cahier des charges et la phase de recherche de solutions qui suit. Le cahier des charges n'est pas figé : il peut être révisé, avec l'accord du client, quand l'analyse fait apparaître une exigence oubliée ou impossible à tenir.</p>"
      },
      {
       "titre": "Vérifier et exploiter les données d'entrée",
       "contenu": "<p>Le référentiel demande d'<strong>analyser, exploiter et vérifier les données d'entrée</strong> d'un projet. Les données reçues sont rarement parfaites : un plan peut contredire un fichier 3D, une cote peut manquer, deux exigences peuvent être incompatibles.</p>\n<ul>\n<li><strong>Complétude</strong> : toutes les fonctions ont-elles un critère et un niveau ? les conditions d'utilisation (température, humidité, chocs) sont-elles indiquées ?</li>\n<li><strong>Cohérence</strong> : la masse visée est-elle compatible avec la résistance demandée et le matériau imposé ? le coût cible est-il réaliste pour la quantité ?</li>\n<li><strong>Actualité</strong> : les fichiers reçus sont-ils au dernier indice ? les normes citées sont-elles en vigueur ?</li>\n<li><strong>Faisabilité</strong> : les dimensions sont-elles compatibles avec les moyens (volume d'impression, capacité des machines) ?</li>\n</ul>\n<p>Toute anomalie doit être <strong>signalée par écrit</strong> au responsable de projet ou au client, avec une proposition si possible. On ne corrige jamais en silence une donnée d'entrée, même si l'erreur paraît évidente : c'est le demandeur qui valide.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> travailler sur un fichier client d'indice périmé est une erreur fréquente et coûteuse. Vérifier systématiquement l'indice et la date du document avant de commencer.</div>"
      }
     ],
     "points_cles": [
      "Le besoin s'énonce du point de vue de l'utilisateur, sans solution technique",
      "Le parcours utilisateur fait apparaître des points de douleur qui deviennent des exigences",
      "Le cahier des charges fonctionnel liste fonctions de service et contraintes avec critère, niveau et flexibilité",
      "Un critère sans niveau chiffré et sans unité est inexploitable",
      "SysML : contexte, exigences, définition de blocs et bloc interne décrivent le système de façon partagée",
      "Le diagramme de bloc interne permet de suivre les flux d'énergie et d'information",
      "Veille technologique et recherche d'antériorités évitent la contrefaçon et les efforts inutiles",
      "Les données d'entrée se vérifient : complétude, cohérence, actualité, faisabilité ; les anomalies se signalent par écrit"
     ],
     "lexique": [
      {
       "terme": "Besoin",
       "def": "Nécessité ou désir éprouvé par un utilisateur, exprimé sans référence à une solution."
      },
      {
       "terme": "Donneur d'ordre",
       "def": "Entreprise cliente qui commande une étude ou une fabrication à un sous-traitant."
      },
      {
       "terme": "Fonction de service",
       "def": "Action attendue du produit pour répondre au besoin, formulée par un verbe à l'infinitif."
      },
      {
       "terme": "Contrainte",
       "def": "Limitation imposée au concepteur : norme, matériau, coût, encombrement."
      },
      {
       "terme": "Critère d'appréciation",
       "def": "Grandeur qui permet de vérifier qu'une fonction est remplie."
      },
      {
       "terme": "Flexibilité",
       "def": "Marge de négociation sur le niveau d'un critère."
      },
      {
       "terme": "SysML",
       "def": "Langage graphique normalisé de description des systèmes pluritechniques."
      },
      {
       "terme": "Parcours utilisateur",
       "def": "Description chronologique de l'expérience de l'utilisateur avec le produit."
      },
      {
       "terme": "Antériorité",
       "def": "Divulgation ou protection antérieure d'une solution, qui empêche de la breveter ou de l'exploiter librement."
      },
      {
       "terme": "Signal faible",
       "def": "Information discrète annonçant une évolution importante d'un marché ou d'une technique."
      }
     ]
    },
    {
     "id": "bmp3-creativite-projet",
     "titre": "Créativité, organisation du projet et compétitivité du produit",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Situer le bureau d'études parmi les services de l'entreprise industrielle et ses partenaires",
      "Animer ou participer à une séance de créativité avec une méthode adaptée",
      "Trier des idées avec une matrice faisabilité-impact et les présenter en un pitch court",
      "Planifier des tâches à l'aide d'un diagramme de Gantt et suivre le triptyque qualité-coût-délai",
      "Connaître les outils de protection de la propriété industrielle et les bases de la démarche qualité"
     ],
     "sections": [
      {
       "titre": "L'entreprise industrielle et la place du bureau d'études",
       "contenu": "<p>Une entreprise industrielle se compose de plusieurs services qui interviennent successivement ou en parallèle sur un produit. Le <strong>bureau d'études</strong> définit le produit ; le <strong>bureau des méthodes</strong> définit comment le fabriquer (gammes, outillages, temps) ; la <strong>production</strong> le réalise ; la <strong>qualité</strong> vérifie la conformité et pilote l'amélioration ; les <strong>achats</strong> choisissent et suivent les fournisseurs ; le service <strong>commercial</strong> est en lien avec les clients.</p>\n<table>\n<thead><tr><th>Partenaire</th><th>Ce que le BE lui fournit</th><th>Ce que le BE en reçoit</th></tr></thead>\n<tbody>\n<tr><td>Client ou donneur d'ordre</td><td>Propositions, plans, prototypes</td><td>Cahier des charges, validations, modifications</td></tr>\n<tr><td>Méthodes</td><td>Maquette et dossier de définition</td><td>Avis de faisabilité, demandes de modification</td></tr>\n<tr><td>Achats</td><td>Nomenclature, spécifications des pièces achetées</td><td>Coûts, délais, références fournisseurs</td></tr>\n<tr><td>Qualité</td><td>Exigences, cotes critiques</td><td>Rapports de non-conformité, retours clients</td></tr>\n<tr><td>Sous-traitant</td><td>Plans et fichiers de pièces à réaliser</td><td>Devis, pièces, remarques techniques</td></tr>\n</tbody>\n</table>\n<p>On parle de <strong>sous-traitance</strong> quand une entreprise confie à une autre la réalisation d'une partie du travail selon ses propres spécifications, et de <strong>co-traitance</strong> quand plusieurs entreprises se partagent un marché, chacune responsable de sa part devant le client. Dans les deux cas, la qualité des fichiers et des plans transmis conditionne la réussite.</p>\n<p>Le cadre réglementaire du travail s'applique au bureau d'études comme à l'atelier : temps de travail, prévention des risques (écran, posture, bruit en zone de prototypage). Dans les entreprises d'au moins 50 salariés, le comité social et économique comporte, selon les cas, une <strong>commission santé, sécurité et conditions de travail</strong> (CSSCT) qui traite de ces questions.</p>"
      },
      {
       "titre": "Les méthodes de créativité",
       "contenu": "<p>La phase de recherche de solutions gagne à être <strong>collective</strong> et <strong>structurée</strong>. Les méthodes de créativité séparent deux temps : la <strong>divergence</strong> (produire beaucoup d'idées, sans jugement) puis la <strong>convergence</strong> (trier, combiner, choisir).</p>\n<ul>\n<li><strong>Brainstorming</strong> : un animateur rappelle le problème, chacun propose des idées à voix haute ou sur des papiers adhésifs ; règles : pas de critique, la quantité prime, rebondir sur les idées des autres, idées farfelues acceptées. Durée typique : 15 à 30 minutes.</li>\n<li><strong>Méthode des six chapeaux</strong> : chaque participant adopte successivement un point de vue symbolisé par une couleur : blanc (faits et données), rouge (émotions, intuitions), noir (risques, prudence), jaune (avantages, optimisme), vert (créativité, alternatives), bleu (organisation de la réflexion). Elle évite qu'une personne reste bloquée dans la critique.</li>\n<li><strong>Méthode des neuf écrans</strong> : on place le produit dans un tableau de 3 × 3 cases : en ligne le passé, le présent et le futur ; en colonne le sous-système, le système, le sur-système. On explore ainsi comment le produit a évolué et pourrait évoluer, à différentes échelles.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une séance de créativité : 1) reformuler le problème en une question ouverte (« comment maintenir la tablette sans outil ? ») ; 2) réunir 4 à 8 personnes aux profils variés ; 3) préparer l'espace : tableau, papiers adhésifs, feutres, matériaux simples pour prototypes rudimentaires (carton, pâte à modeler, briques de construction) ; 4) annoncer les règles et la durée ; 5) en fin de séance, regrouper les idées par familles et photographier le tableau pour en garder une trace.</div>\n<p>Le <strong>prototype rudimentaire</strong> (en carton, mousse, fil de fer) permet de rendre une idée tangible en quelques minutes : il se montre, se manipule, se critique beaucoup plus facilement qu'un discours.</p>"
      },
      {
       "titre": "Trier les idées et convaincre",
       "contenu": "<p>À la fin de la divergence, il faut choisir. La <strong>matrice faisabilité-impact</strong> place chaque idée dans un tableau à deux axes : en abscisse la faisabilité (facile à difficile), en ordonnée l'impact (faible à fort sur la satisfaction du besoin).</p>\n<table>\n<thead><tr><th>Zone</th><th>Caractéristique</th><th>Décision habituelle</th></tr></thead>\n<tbody>\n<tr><td>Faisable et fort impact</td><td>« Gains rapides »</td><td>À développer en priorité</td></tr>\n<tr><td>Difficile et fort impact</td><td>Projets ambitieux</td><td>À étudier, éventuellement plus tard</td></tr>\n<tr><td>Faisable et faible impact</td><td>Améliorations mineures</td><td>À intégrer si elles ne coûtent presque rien</td></tr>\n<tr><td>Difficile et faible impact</td><td>Pièges</td><td>À abandonner</td></tr>\n</tbody>\n</table>\n<p>Les solutions retenues peuvent ensuite être comparées dans une <strong>matrice de décision</strong> : chaque critère du cahier des charges reçoit un poids, chaque solution une note par critère, et l'on calcule la somme pondérée.</p>\n<p>Le <strong>pitch</strong> est une présentation orale très courte (souvent une à trois minutes) qui expose le problème, la solution proposée et ses avantages, si possible avec un prototype ou un visuel. Il s'adresse à des décideurs qui n'ont pas suivi le détail de l'étude : il doit être clair, concret et chiffré.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> diverger d'abord, converger ensuite. Juger trop tôt tue les idées ; ne jamais trier conduit à ne rien décider.</div>"
      },
      {
       "titre": "Planifier : le diagramme de Gantt",
       "contenu": "<p>Un projet est un ensemble de <strong>tâches</strong> liées, avec un début, une fin et des ressources limitées. Le <strong>diagramme de Gantt</strong> représente ces tâches sous forme de barres horizontales sur une échelle de temps. Chaque barre a une durée ; des liens indiquent les <strong>antériorités</strong> (une tâche ne peut commencer que lorsqu'une autre est finie).</p>\n<table>\n<thead><tr><th>Tâche</th><th>Durée</th><th>Antériorité</th></tr></thead>\n<tbody>\n<tr><td>A : analyse du cahier des charges</td><td>2 j</td><td>—</td></tr>\n<tr><td>B : recherche de solutions et croquis</td><td>3 j</td><td>A</td></tr>\n<tr><td>C : modélisation 3D</td><td>5 j</td><td>B</td></tr>\n<tr><td>D : commande des pièces du commerce</td><td>8 j (délai fournisseur)</td><td>B</td></tr>\n<tr><td>E : impression des prototypes</td><td>2 j</td><td>C</td></tr>\n<tr><td>F : assemblage et essais</td><td>2 j</td><td>D et E</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la durée du projet : 1) A finit à J2 ; 2) B finit à J5 ; 3) C finit à J10, puis E à J12 ; 4) D, qui commence aussi à J5, finit à J13 ; 5) F ne peut commencer qu'après D et E, donc à J13, et finit à J15. Le chemin le plus long A-B-D-F (15 jours) est le <strong>chemin critique</strong> : tout retard sur ces tâches retarde le projet. La chaîne C-E dispose d'une marge d'un jour.</div>\n<p>Cet exemple montre qu'une commande lancée tard bloque un projet même si la modélisation est rapide : le technicien doit anticiper les délais d'approvisionnement.</p>"
      },
      {
       "titre": "Qualité, coût, délai et traçabilité",
       "contenu": "<p>La compétitivité d'un produit repose sur le triptyque <strong>qualité-coût-délai</strong> (QCD) : un produit conforme, au bon prix, livré à temps. Ces trois exigences tirent souvent dans des directions opposées : améliorer la précision augmente le coût, raccourcir le délai peut dégrader la qualité.</p>\n<p>La <strong>qualité</strong> est l'aptitude d'un produit à satisfaire les exigences. Les entreprises s'organisent souvent selon la norme <strong>ISO 9001</strong>, qui décrit les exigences d'un système de management de la qualité : processus écrits, maîtrise des documents, traitement des non-conformités, amélioration continue. La <strong>normalisation</strong> plus largement (normes ISO, EN, NF) garantit que les pièces, les symboles et les méthodes d'essai sont les mêmes pour tous.</p>\n<p>La <strong>traçabilité</strong> est la capacité à retrouver l'historique d'un produit : quelle version de plan, quel lot de matière, quelle machine, quel opérateur. Au bureau d'études, elle passe par les <strong>indices de révision</strong> des documents et par l'historique des modifications.</p>\n<p>Le <strong>design produit</strong> participe aussi à la compétitivité : forme, couleurs, matières, ergonomie, perception de qualité. Un produit techniquement correct mais peu attirant se vend mal.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur-spécifier (tolérances trop serrées, matériau trop noble) n'améliore pas la qualité perçue par le client mais augmente le coût. La bonne qualité est celle qui répond juste au besoin.</div>"
      },
      {
       "titre": "Protéger la propriété industrielle",
       "contenu": "<p>Une entreprise qui investit dans la conception doit protéger ses créations. En France, les titres de propriété industrielle sont délivrés par l'<strong>INPI</strong> (Institut national de la propriété industrielle) ; des titres européens ou internationaux existent aussi.</p>\n<table>\n<thead><tr><th>Titre</th><th>Ce qu'il protège</th><th>Conditions principales</th><th>Durée maximale</th></tr></thead>\n<tbody>\n<tr><td>Brevet d'invention</td><td>Une solution technique à un problème technique</td><td>Nouveauté, activité inventive, application industrielle</td><td>20 ans, sous réserve du paiement des annuités</td></tr>\n<tr><td>Dessin et modèle</td><td>L'apparence d'un produit : formes, lignes, couleurs, texture</td><td>Nouveauté et caractère propre</td><td>25 ans, par périodes de 5 ans renouvelées</td></tr>\n<tr><td>Marque</td><td>Un signe distinctif (nom, logo)</td><td>Caractère distinctif et disponibilité</td><td>10 ans, renouvelable indéfiniment</td></tr>\n</tbody>\n</table>\n<p>Une invention divulguée avant le dépôt (salon, publication, présentation à un client sans accord de confidentialité) perd sa <strong>nouveauté</strong> et ne peut plus être brevetée. C'est pourquoi les maquettes et prototypes d'un projet innovant sont traités comme des informations confidentielles.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant d'envoyer des fichiers 3D à un prestataire d'impression extérieur pour un projet non déposé, l'entreprise fait signer un accord de confidentialité. Le technicien vérifie qu'il est signé avant tout envoi.</div>\n<p>Le brevet est aussi une source d'information : il est publié, en général 18 mois après le dépôt, et décrit précisément la solution. Lire des brevets fait partie de la veille technologique.</p>"
      }
     ],
     "points_cles": [
      "Le bureau d'études travaille avec les méthodes, la production, la qualité, les achats, les clients et les sous-traitants",
      "La créativité alterne divergence sans jugement et convergence par le tri",
      "Brainstorming, six chapeaux et neuf écrans sont trois méthodes de créativité aux usages différents",
      "La matrice faisabilité-impact et la matrice de décision pondérée aident à choisir",
      "Le diagramme de Gantt montre durées et antériorités ; le chemin critique fixe la durée du projet",
      "La compétitivité repose sur le triptyque qualité-coût-délai et sur le design",
      "ISO 9001, indices de révision et traçabilité structurent la qualité au bureau d'études",
      "Brevet, dessin et modèle, marque protègent la création ; toute divulgation avant dépôt détruit la nouveauté"
     ],
     "lexique": [
      {
       "terme": "Bureau des méthodes",
       "def": "Service qui définit les moyens et la manière de fabriquer le produit."
      },
      {
       "terme": "Sous-traitance",
       "def": "Réalisation par une entreprise d'un travail défini par une autre, selon ses spécifications."
      },
      {
       "terme": "Brainstorming",
       "def": "Méthode de production collective et libre d'idées, sans critique."
      },
      {
       "terme": "Prototype rudimentaire",
       "def": "Maquette rapide en matériaux simples pour rendre une idée tangible."
      },
      {
       "terme": "Pitch",
       "def": "Présentation orale très courte d'un problème et de la solution proposée."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Représentation des tâches d'un projet par des barres sur une échelle de temps."
      },
      {
       "terme": "Chemin critique",
       "def": "Suite de tâches sans marge qui détermine la durée minimale du projet."
      },
      {
       "terme": "Traçabilité",
       "def": "Capacité à retrouver l'historique et l'origine d'un produit ou d'un document."
      },
      {
       "terme": "Brevet",
       "def": "Titre qui donne un monopole d'exploitation d'une invention technique pendant 20 ans au plus."
      },
      {
       "terme": "Dessin et modèle",
       "def": "Titre qui protège l'apparence d'un produit."
      }
     ]
    },
    {
     "id": "bmp3-eco-conception",
     "titre": "Développement durable et éco-conception",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Décrire les étapes du cycle de vie d'un produit industriel",
      "Identifier les principales catégories d'impacts environnementaux",
      "Comprendre le principe d'une analyse du cycle de vie et lire ses résultats",
      "Appliquer des règles d'éco-conception dès la modélisation : masse, matériaux, assemblage, démontage",
      "Comparer deux solutions selon leur impact environnemental simulé"
     ],
     "sections": [
      {
       "titre": "Pourquoi éco-concevoir",
       "contenu": "<p>Le <strong>développement durable</strong> vise à répondre aux besoins actuels sans compromettre la capacité des générations futures à répondre aux leurs. Pour l'industrie, cela se traduit par une réduction des consommations de ressources, des émissions et des déchets, tout en restant économiquement viable et socialement acceptable.</p>\n<p>L'<strong>éco-conception</strong> consiste à intégrer l'environnement dès la conception du produit. C'est au bureau d'études que se décide l'essentiel de l'impact : le choix d'un matériau, d'une épaisseur, d'un mode d'assemblage ou d'un procédé engage tout le cycle de vie. Une fois les outillages réalisés, il est très coûteux de changer.</p>\n<p>Plusieurs leviers poussent les entreprises : la réglementation (responsabilité élargie des producteurs, restrictions sur certaines substances, obligations d'information du consommateur), les exigences des donneurs d'ordre, la hausse du prix des matières et de l'énergie, et l'image de marque.</p>\n<p>On décrit souvent le développement durable par trois piliers qui doivent être tenus ensemble : le pilier <strong>environnemental</strong> (préserver les ressources et les milieux), le pilier <strong>économique</strong> (produire de la valeur, rester rentable) et le pilier <strong>social</strong> (conditions de travail, santé des utilisateurs, emploi local). Une solution qui réduit fortement l'impact environnemental mais rend le produit invendable, ou qui expose les opérateurs à des substances dangereuses, n'est pas durable.</p>\n<p>Le référentiel range d'ailleurs l'éco-conception parmi les <strong>critères de compétitivité</strong> du produit, à côté des critères techniques, économiques, de propriété industrielle et de design. Pour le technicien, cela signifie concrètement : savoir identifier les étapes du cycle de vie, connaître les critères d'éco-conception, simuler et comparer les impacts de plusieurs solutions avec un outil numérique, et argumenter ses choix devant l'équipe projet.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'éco-conception n'est pas une étape ajoutée à la fin du projet. C'est un critère du cahier des charges, au même titre que la résistance ou le coût.</div>"
      },
      {
       "titre": "Le cycle de vie d'un produit",
       "contenu": "<p>Le <strong>cycle de vie</strong> d'un produit regroupe toutes les étapes de son existence, « du berceau à la tombe » :</p>\n<table>\n<thead><tr><th>Étape</th><th>Exemples d'impacts</th><th>Levier du concepteur</th></tr></thead>\n<tbody>\n<tr><td>Extraction et production des matières</td><td>Épuisement des ressources, énergie, émissions</td><td>Réduire la masse, choisir des matières recyclées ou biosourcées</td></tr>\n<tr><td>Fabrication</td><td>Énergie des machines, chutes, rebuts, produits chimiques</td><td>Choisir un procédé sobre, limiter les chutes, éviter les traitements polluants</td></tr>\n<tr><td>Transport et distribution</td><td>Carburant, emballages</td><td>Réduire volume et masse, produits empilables ou démontés</td></tr>\n<tr><td>Utilisation</td><td>Énergie consommée, consommables, entretien</td><td>Améliorer le rendement, réduire les frottements, faciliter l'entretien</td></tr>\n<tr><td>Fin de vie</td><td>Déchets, mise en décharge, incinération</td><td>Faciliter le démontage, le tri, la réparation, le réemploi, le recyclage</td></tr>\n</tbody>\n</table>\n<p>Selon le produit, l'étape dominante change. Pour un objet passif (support, boîtier, mobilier), la matière et la fabrication pèsent le plus. Pour un produit consommant de l'énergie (moteur, appareil électrique), c'est souvent l'utilisation qui domine : un gain de rendement de quelques pourcents compte alors davantage que la nature de la carrosserie.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> déplacer un impact n'est pas le supprimer. Remplacer une pièce métallique par une pièce plastique plus légère peut réduire le transport mais compliquer le recyclage. Il faut raisonner sur tout le cycle de vie.</div>"
      },
      {
       "titre": "Les catégories d'impacts environnementaux",
       "contenu": "<p>Les impacts sont regroupés en catégories, chacune mesurée par un <strong>indicateur</strong> :</p>\n<ul>\n<li><strong>Épuisement des ressources</strong> : consommation de minerais, d'énergies fossiles, d'eau.</li>\n<li><strong>Changement climatique</strong> : émissions de gaz à effet de serre, exprimées en kilogrammes d'équivalent CO<sub>2</sub> (kg éq. CO<sub>2</sub>).</li>\n<li><strong>Pollution de l'air</strong> : particules fines, composés organiques volatils, oxydes d'azote et de soufre.</li>\n<li><strong>Pollution de l'eau</strong> : rejets de métaux, d'huiles, de nutriments provoquant l'eutrophisation.</li>\n<li><strong>Toxicité</strong> : effets sur la santé humaine et sur les écosystèmes de certaines substances (solvants, métaux lourds, résines non polymérisées).</li>\n<li><strong>Déchets</strong> : quantité et dangerosité des déchets produits, part valorisable par recyclage.</li>\n</ul>\n<p>Le <strong>recyclage</strong> consiste à retraiter un matériau pour en refaire de la matière première ; le <strong>réemploi</strong> à réutiliser le produit pour le même usage ; la <strong>réutilisation</strong> à lui trouver un autre usage. Le réemploi et la réparation sont en général préférables au recyclage, qui consomme lui-même de l'énergie.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en atelier de prototypage, les supports d'impression, les pièces ratées et les chutes de filament représentent une part importante de la matière achetée. Optimiser l'orientation des pièces et valider sur de petites éprouvettes avant de lancer une grosse impression réduit ces déchets.</div>"
      },
      {
       "titre": "L'analyse du cycle de vie",
       "contenu": "<p>L'<strong>analyse du cycle de vie</strong> (ACV) est la méthode normalisée (normes ISO 14040 et ISO 14044) qui évalue les impacts environnementaux d'un produit sur l'ensemble de son cycle de vie. Elle comporte quatre phases :</p>\n<ol>\n<li><strong>Définition des objectifs et du champ</strong> : quel produit, quelles étapes prises en compte, et surtout quelle <strong>unité fonctionnelle</strong>, c'est-à-dire le service rendu qui sert de base de comparaison (par exemple « maintenir une tablette pendant 5 ans d'usage quotidien »).</li>\n<li><strong>Inventaire</strong> : recensement des flux entrants (matières, énergie) et sortants (émissions, déchets) à chaque étape.</li>\n<li><strong>Évaluation des impacts</strong> : transformation de l'inventaire en indicateurs par catégorie à l'aide de facteurs issus de bases de données.</li>\n<li><strong>Interprétation</strong> : identification des étapes et des composants les plus impactants, et des pistes d'amélioration.</li>\n</ol>\n<p>Une ACV complète est un travail de spécialiste. Au bureau d'études, on utilise plutôt des <strong>outils simplifiés</strong>, souvent intégrés aux logiciels de CAO : à partir du matériau, de la masse, du procédé, du lieu de fabrication et d'utilisation, ils estiment les principaux indicateurs et permettent de comparer rapidement deux variantes.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on ne compare que des solutions qui rendent le même service : la comparaison se fait toujours à unité fonctionnelle identique.</div>"
      },
      {
       "titre": "Comparer deux variantes",
       "contenu": "<p>Le référentiel attend que l'on sache <strong>simuler et comparer</strong> les impacts de plusieurs solutions. Le calcul suivant illustre le principe ; les facteurs d'émission sont ceux qu'afficherait la base de données de l'outil, ils sont ici donnés pour l'exemple.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer deux variantes d'un bras de support. Variante 1 : aluminium, volume 40 cm<sup>3</sup>. Variante 2 : polyamide chargé fibres de verre, volume 70 cm<sup>3</sup> (section plus forte pour compenser la rigidité plus faible).<br>1) Calculer les masses avec la masse volumique : aluminium 2,7 g/cm<sup>3</sup>, donc m<sub>1</sub> = 40 × 2,7 = 108 g ; polyamide chargé environ 1,35 g/cm<sup>3</sup>, donc m<sub>2</sub> = 70 × 1,35 ≈ 95 g.<br>2) Appliquer le facteur « matière + procédé » donné par l'outil, par exemple 12 kg éq. CO<sub>2</sub>/kg pour l'aluminium primaire usiné et 8 kg éq. CO<sub>2</sub>/kg pour le polyamide chargé injecté : variante 1 : 0,108 × 12 ≈ 1,30 kg éq. CO<sub>2</sub> ; variante 2 : 0,095 × 8 ≈ 0,76 kg éq. CO<sub>2</sub>.<br>3) Regarder les autres indicateurs et la fin de vie : l'aluminium se recycle très bien ; le polyamide chargé se recycle mal.<br>4) Conclure de manière nuancée, en citant les hypothèses : la variante 2 émet moins à la fabrication, la variante 1 est plus favorable en fin de vie, surtout avec de l'aluminium recyclé, dont le facteur est bien plus faible.</div>\n<p>Cette démarche montre qu'il n'y a pas toujours une solution meilleure sur tous les plans : l'éco-conception est un arbitrage, qui doit être argumenté et transparent sur les hypothèses.</p>"
      },
      {
       "titre": "Règles d'éco-conception pour le modeleur",
       "contenu": "<p>Dès la maquette numérique, plusieurs règles simples réduisent l'impact :</p>\n<ul>\n<li><strong>Alléger</strong> : enlever la matière inutile (évidements, nervures plutôt qu'épaisseurs pleines), en s'aidant de la simulation et de l'optimisation topologique.</li>\n<li><strong>Limiter le nombre de matériaux</strong> et éviter les assemblages indémontables de matériaux différents (surmoulage métal-plastique, collage), qui empêchent le tri.</li>\n<li><strong>Faciliter le démontage</strong> : vis standard accessibles, clips réversibles, peu de types de têtes de vis.</li>\n<li><strong>Marquer les matériaux</strong> des pièces plastiques (par exemple le code &gt;PA6-GF30&lt; moulé dans la pièce) pour permettre le tri.</li>\n<li><strong>Standardiser</strong> : utiliser des composants du commerce et des pièces communes à plusieurs produits.</li>\n<li><strong>Prévoir la réparation</strong> : rendre remplaçables les pièces d'usure, et disponibles leurs fichiers ou leurs références.</li>\n<li><strong>Choisir un procédé sobre</strong> : un procédé proche de la forme finale (moulage, fabrication additive) génère moins de copeaux qu'un usinage dans la masse.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> alléger au-delà de ce que permet la résistance conduit à des casses, donc à des remplacements : l'impact total augmente. L'allègement se valide toujours par le calcul ou la simulation.</div>"
      }
     ],
     "points_cles": [
      "L'éco-conception intègre l'environnement dès la conception, là où se décide l'essentiel de l'impact",
      "Le cycle de vie comprend matières, fabrication, transport, utilisation et fin de vie",
      "L'étape dominante dépend du produit : matière pour un objet passif, utilisation pour un produit consommant de l'énergie",
      "Les impacts se répartissent en catégories : ressources, climat, air, eau, toxicité, déchets",
      "L'ACV est normalisée par ISO 14040 et 14044 et repose sur une unité fonctionnelle",
      "Les outils simplifiés de CAO permettent de comparer rapidement des variantes",
      "Réemploi et réparation sont préférables au recyclage",
      "Alléger, limiter les matériaux, faciliter le démontage et marquer les plastiques sont des règles de base"
     ],
     "lexique": [
      {
       "terme": "Éco-conception",
       "def": "Intégration de la réduction des impacts environnementaux dès la conception d'un produit."
      },
      {
       "terme": "Cycle de vie",
       "def": "Ensemble des étapes de l'existence d'un produit, de l'extraction des matières à la fin de vie."
      },
      {
       "terme": "ACV",
       "def": "Analyse du cycle de vie : évaluation normalisée des impacts environnementaux d'un produit."
      },
      {
       "terme": "Unité fonctionnelle",
       "def": "Service rendu quantifié qui sert de base de comparaison dans une ACV."
      },
      {
       "terme": "Équivalent CO2",
       "def": "Unité qui exprime l'effet de différents gaz à effet de serre en masse de CO2 ayant le même effet."
      },
      {
       "terme": "Réemploi",
       "def": "Nouvelle utilisation d'un produit pour le même usage."
      },
      {
       "terme": "Recyclage",
       "def": "Retraitement d'un matériau usagé pour en refaire une matière première."
      },
      {
       "terme": "Biosourcé",
       "def": "Se dit d'un matériau issu en tout ou partie de la biomasse (végétale ou animale)."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Modélisation numérique et chaîne de données",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmp3-modeleur-parametrique",
     "titre": "Le modeleur volumique paramétrique : esquisses, fonctions et arbre de construction",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Expliquer le principe d'un modeleur volumique paramétrique et de l'historique de construction",
      "Réaliser une esquisse correctement contrainte, géométriquement et dimensionnellement",
      "Choisir les fonctions volumiques adaptées à une forme : extrusion, révolution, balayage, lissage, perçage",
      "Construire un arbre de pièce lisible, robuste et facile à modifier",
      "Distinguer modélisation volumique et modélisation surfacique"
     ],
     "sections": [
      {
       "titre": "Principe du modeleur volumique paramétrique",
       "contenu": "<p>Un <strong>modeleur volumique</strong> construit des solides fermés : le logiciel connaît le volume de matière, et peut donc calculer masse, centre de gravité, inerties, interférences. Il est dit <strong>paramétrique</strong> parce que les dimensions sont des paramètres modifiables : changer la cote 40 en 45 régénère la pièce entière. Il est enfin <strong>à historique</strong> : chaque opération est enregistrée dans un <strong>arbre de construction</strong> (ou arbre des spécifications), dans l'ordre où elle a été créée.</p>\n<p>La construction suit toujours le même schéma : on dessine une <strong>esquisse</strong> 2D sur un plan, puis on lui applique une <strong>fonction</strong> qui crée ou enlève du volume. On enchaîne ainsi les fonctions jusqu'à obtenir la pièce.</p>\n<table>\n<thead><tr><th>Élément de l'arbre</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Origine et plans de référence</td><td>Repère de la pièce : trois plans orthogonaux et trois axes</td></tr>\n<tr><td>Esquisse</td><td>Profil 2D contraint, support d'une fonction</td></tr>\n<tr><td>Fonction de base</td><td>Premier volume, qui porte la forme principale</td></tr>\n<tr><td>Fonctions suivantes</td><td>Ajouts et enlèvements de matière, perçages, congés, répétitions</td></tr>\n<tr><td>Éléments de construction</td><td>Plans, axes, points ajoutés pour positionner une esquisse</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un modèle paramétrique ne vaut que par sa capacité à être modifié. Un modèle qui « casse » dès qu'on change une cote est un mauvais modèle, même s'il a la bonne forme.</div>"
      },
      {
       "titre": "L'esquisse et ses contraintes",
       "contenu": "<p>L'<strong>esquisse</strong> est un dessin 2D composé de segments, arcs, cercles, splines. Pour être exploitable, elle doit être <strong>fermée</strong> (pour une fonction volumique), <strong>sans chevauchement</strong> et <strong>totalement contrainte</strong>.</p>\n<ul>\n<li>Les <strong>contraintes géométriques</strong> fixent les relations entre éléments : horizontal, vertical, parallèle, perpendiculaire, tangent, coïncident, concentrique, égal, symétrique.</li>\n<li>Les <strong>contraintes dimensionnelles</strong> fixent les valeurs : longueurs, rayons, diamètres, angles, distances.</li>\n</ul>\n<p>Une esquisse totalement contrainte n'a plus aucun degré de liberté : elle ne peut plus se déformer quand on modifie une autre partie du modèle. La plupart des logiciels l'indiquent par un changement de couleur des traits. Une esquisse <strong>sur-contrainte</strong> (deux contraintes qui fixent la même chose, ou qui se contredisent) produit une erreur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contraindre une esquisse proprement : 1) dessiner une forme approchée aux bonnes proportions ; 2) l'ancrer sur l'origine ou sur une arête existante (coïncidence) ; 3) poser d'abord toutes les contraintes géométriques (symétrie par rapport à un axe, horizontalité, tangences) ; 4) poser ensuite les cotes, en reprenant les cotes fonctionnelles du cahier des charges plutôt que des cotes de commodité ; 5) vérifier que l'esquisse est entièrement contrainte et la renommer si elle est importante.</div>\n<p>Il vaut mieux plusieurs esquisses simples qu'une esquisse très chargée : chaque esquisse porte une intention, et une modification reste localisée.</p>"
      },
      {
       "titre": "Les fonctions de création de formes",
       "contenu": "<p>Les fonctions volumiques correspondent à des gestes de fabrication imaginaires :</p>\n<table>\n<thead><tr><th>Fonction</th><th>Principe</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Extrusion (bossage, protrusion)</td><td>Déplacement d'un profil perpendiculairement à son plan</td><td>Plaque, bride, nervure</td></tr>\n<tr><td>Enlèvement de matière (poche)</td><td>Extrusion qui retire du volume</td><td>Lumière, rainure, évidement</td></tr>\n<tr><td>Révolution</td><td>Rotation d'un profil autour d'un axe</td><td>Arbre, bague, poulie</td></tr>\n<tr><td>Balayage</td><td>Déplacement d'un profil le long d'une trajectoire</td><td>Tube cintré, poignée, ressort</td></tr>\n<tr><td>Lissage</td><td>Volume passant par plusieurs profils successifs</td><td>Bec verseur, transition rond-carré</td></tr>\n<tr><td>Perçage</td><td>Trou normalisé : simple, lamé, fraisé, taraudé</td><td>Trou de vis M6 taraudé, lamage pour vis CHC</td></tr>\n<tr><td>Congé, chanfrein</td><td>Arrondi ou cassure d'une arête</td><td>Rayon de fond, entrée de perçage</td></tr>\n<tr><td>Coque</td><td>Évidement d'un volume en gardant une épaisseur constante</td><td>Boîtier plastique</td></tr>\n<tr><td>Dépouille</td><td>Inclinaison de faces pour le démoulage</td><td>Parois de pièce moulée</td></tr>\n<tr><td>Répétition, symétrie</td><td>Copie d'une fonction selon un motif</td><td>Couronne de trous, nervures régulières</td></tr>\n</tbody>\n</table>\n<p>La fonction de <strong>perçage</strong> est préférable à un simple enlèvement circulaire : elle porte l'information du trou (diamètre de taraudage, profondeur utile du filetage, type de lamage) qui sera réutilisée par la mise en plan, la cotation et parfois la fabrication.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un filetage ne se modélise pas en hélice réelle, sauf besoin particulier (impression 3D d'une vis, rendu). On utilise un perçage taraudé ou un filetage « cosmétique » : il est représenté correctement en mise en plan sans alourdir le modèle.</div>"
      },
      {
       "titre": "Construire un arbre robuste et évolutif",
       "contenu": "<p>Le référentiel parle de maquette <strong>structurée, robuste et évolutive</strong>. Concrètement :</p>\n<ul>\n<li><strong>Structurée</strong> : l'arbre se lit comme la description de la pièce ; les fonctions sont renommées (« Bossage_bride », « Perçage_fixations_M8 ») ; les éléments de même nature sont regroupés.</li>\n<li><strong>Robuste</strong> : une modification ne provoque pas d'erreurs en cascade. On s'appuie de préférence sur les plans de référence et sur des faces stables, pas sur des arêtes créées par des congés qui peuvent disparaître.</li>\n<li><strong>Évolutive</strong> : les cotes fonctionnelles sont faciles à retrouver et à modifier ; les relations entre cotes sont exprimées par des équations ou des paramètres nommés.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> ordre de construction recommandé pour une pièce : 1) forme de base qui porte l'encombrement, en symétrie sur les plans de référence si la pièce est symétrique ; 2) formes principales d'ajout ; 3) enlèvements principaux (poches, alésages) ; 4) perçages et taraudages ; 5) dépouilles s'il y en a ; 6) congés et chanfreins en dernier, regroupés. Ainsi, supprimer ou modifier un congé ne casse jamais une fonction structurante.</div>\n<p>Les <strong>paramètres nommés</strong> et les <strong>équations</strong> permettent de lier des cotes : par exemple « entraxe = largeur − 2 × 12 ». Modifier la largeur déplace alors automatiquement les trous. Ces paramètres préparent aussi les <strong>familles de pièces</strong> pilotées par un tableau.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un modèle est souvent repris par un collègue, des mois plus tard. Un arbre aux fonctions nommées, avec des esquisses contraintes et des cotes fonctionnelles, se modifie en quelques minutes ; un arbre de deux cents fonctions anonymes oblige parfois à tout remodéliser.</div>"
      },
      {
       "titre": "Volumique et surfacique",
       "contenu": "<p>La <strong>modélisation surfacique</strong> construit des surfaces sans épaisseur, que l'on raccorde, découpe et prolonge, avant de les transformer en solide (épaississement ou fermeture d'un volume). Elle est indispensable pour les formes complexes de style : carrosseries, coques ergonomiques, poignées, flacons, pièces de design.</p>\n<table>\n<thead><tr><th>Critère</th><th>Volumique</th><th>Surfacique</th></tr></thead>\n<tbody>\n<tr><td>Formes adaptées</td><td>Pièces mécaniques prismatiques ou de révolution</td><td>Formes libres, gauches, de style</td></tr>\n<tr><td>Données disponibles</td><td>Masse, volume, inerties directement</td><td>Seulement après fermeture en solide</td></tr>\n<tr><td>Qualité des raccordements</td><td>Congés standards</td><td>Contrôle de la continuité : de position, de tangence, de courbure</td></tr>\n<tr><td>Difficulté</td><td>Accessible rapidement</td><td>Demande plus d'expérience</td></tr>\n</tbody>\n</table>\n<p>La <strong>continuité</strong> entre surfaces se classe en trois niveaux : continuité de position (les surfaces se touchent, avec une arête visible), de tangence (pas d'arête vive, mais un reflet cassé), de courbure (reflet parfaitement continu, exigé pour les pièces d'aspect). La plupart des logiciels mélangent les deux approches dans un même modèle : modélisation dite <strong>hybride</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une pièce destinée à être imprimée, simulée ou usinée doit finir en <strong>solide fermé</strong> (étanche). Un ensemble de surfaces ouvertes ne peut ni être tranché pour l'impression 3D ni maillé correctement pour la simulation.</div>"
      },
      {
       "titre": "Propriétés physiques et vérifications",
       "contenu": "<p>Une fois le matériau affecté à la pièce, le logiciel calcule ses <strong>propriétés de masse</strong> : volume, aire, masse, position du centre de gravité, moments d'inertie. Ces données servent au calcul des actions mécaniques, au choix d'un moteur, au chiffrage de la matière, à l'éco-conception.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la vraisemblance d'une masse calculée. Une plaque d'acier de 200 × 100 × 10 mm a un volume de 200 000 mm<sup>3</sup>, soit 200 cm<sup>3</sup>. Avec une masse volumique de 7,85 g/cm<sup>3</sup>, sa masse est 200 × 7,85 = 1 570 g, soit environ 1,57 kg. Si le logiciel affiche 1,57 g ou 1 570 kg, le matériau ou les unités du document sont mal définis.</div>\n<p>D'autres vérifications sont utiles avant de diffuser une pièce :</p>\n<ul>\n<li>reconstruction complète sans erreur ni avertissement ;</li>\n<li>test de modification des cotes principales (le modèle reste valide) ;</li>\n<li>analyse d'épaisseur pour une pièce moulée ou imprimée ;</li>\n<li>analyse de dépouille pour une pièce moulée ;</li>\n<li>propriétés renseignées : désignation, numéro, matière, auteur, indice.</li>\n</ul>\n<p>Il faut aussi vérifier les <strong>unités du document</strong> (millimètres, grammes, secondes en mécanique) et la <strong>précision d'affichage</strong>. Un fichier client créé en pouces puis ouvert dans un gabarit en millimètres donne des pièces 25,4 fois trop petites ou trop grandes : l'erreur est classique lors des échanges internationaux et se détecte immédiatement par le contrôle d'ordre de grandeur.</p>\n<p>Ces propriétés renseignées alimentent automatiquement le cartouche des plans et la nomenclature des assemblages : bien les remplir une fois évite de les ressaisir dix fois.</p>"
      }
     ],
     "points_cles": [
      "Le modeleur volumique paramétrique enregistre les fonctions dans un arbre et régénère la pièce à chaque modification",
      "Une esquisse doit être fermée, sans chevauchement et totalement contrainte",
      "Poser d'abord les contraintes géométriques, puis les cotes fonctionnelles",
      "Chaque forme correspond à une fonction : extrusion, révolution, balayage, lissage, perçage, coque, dépouille",
      "Un arbre robuste s'appuie sur des références stables et place congés et chanfreins en fin d'arbre",
      "Paramètres nommés et équations rendent le modèle évolutif",
      "Le surfacique sert aux formes libres ; la pièce finale doit être un solide fermé",
      "Les propriétés de masse se contrôlent par un calcul d'ordre de grandeur"
     ],
     "lexique": [
      {
       "terme": "Modeleur volumique",
       "def": "Logiciel de CAO qui construit des solides fermés dont il connaît le volume."
      },
      {
       "terme": "Paramétrique",
       "def": "Se dit d'un modèle dont les dimensions sont des paramètres modifiables."
      },
      {
       "terme": "Arbre de construction",
       "def": "Liste ordonnée des fonctions qui ont servi à créer une pièce."
      },
      {
       "terme": "Esquisse",
       "def": "Profil 2D contraint servant de support à une fonction volumique."
      },
      {
       "terme": "Contrainte géométrique",
       "def": "Relation imposée entre éléments d'esquisse : parallélisme, tangence, coïncidence…"
      },
      {
       "terme": "Extrusion",
       "def": "Fonction qui crée un volume en déplaçant un profil perpendiculairement à son plan."
      },
      {
       "terme": "Révolution",
       "def": "Fonction qui crée un volume en faisant tourner un profil autour d'un axe."
      },
      {
       "terme": "Lissage",
       "def": "Fonction qui crée un volume passant par plusieurs profils successifs."
      },
      {
       "terme": "Continuité en courbure",
       "def": "Raccordement de surfaces sans rupture de reflet, exigé pour les pièces d'aspect."
      },
      {
       "terme": "Solide fermé",
       "def": "Volume entièrement délimité par des surfaces sans trou, exploitable en fabrication et simulation."
      }
     ]
    },
    {
     "id": "bmp3-assemblages-methodes",
     "titre": "Assemblages, méthodes de conception et modules métiers",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Construire un assemblage en positionnant les composants par des contraintes cohérentes avec les liaisons réelles",
      "Choisir une méthode de conception : par pièce, dans l'assemblage, par squelette ou esquisse pilotante, par surfaces fonctionnelles",
      "Utiliser bibliothèques de composants standard, familles de pièces et tableurs",
      "Connaître les modules métiers de tôlerie, de mécano-soudure et de moule",
      "Détecter et corriger interférences et incohérences dans une maquette"
     ],
     "sections": [
      {
       "titre": "L'assemblage et son arbre",
       "contenu": "<p>Un <strong>assemblage</strong> réunit des pièces (et éventuellement des sous-assemblages) dans un même fichier. Il ne contient pas la géométrie des pièces elle-même, mais des <strong>références</strong> vers les fichiers de pièces et des <strong>contraintes d'assemblage</strong> qui les positionnent. Modifier un fichier de pièce modifie donc tous les assemblages qui l'utilisent.</p>\n<p>L'arbre d'assemblage reflète la <strong>structure du produit</strong>. Un produit bien organisé se décompose en sous-ensembles qui correspondent à des réalités de fabrication ou de montage : sous-ensemble motorisation, sous-ensemble bâti, sous-ensemble préhenseur. Cette arborescence prépare directement la <strong>nomenclature</strong>.</p>\n<table>\n<thead><tr><th>Niveau</th><th>Exemple pour un poste de soudage</th></tr></thead>\n<tbody>\n<tr><td>Assemblage général</td><td>Montage de soudage complet</td></tr>\n<tr><td>Sous-assemblage</td><td>Bâti mécano-soudé ; bride de serrage ; vérin et sa chape</td></tr>\n<tr><td>Pièces</td><td>Semelle, équerres, doigt d'indexage, axe</td></tr>\n<tr><td>Composants du commerce</td><td>Vis CHC, rondelles, goupilles, vérin, capteur</td></tr>\n</tbody>\n</table>\n<p>Le premier composant inséré est en général <strong>fixé</strong> : il sert de référence. Pour les autres, chaque contrainte supprime un ou plusieurs degrés de liberté.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'assemblage ne contient que des liens vers les pièces. Copier un fichier d'assemblage sans ses pièces, ou renommer une pièce hors du logiciel, casse ces liens.</div>"
      },
      {
       "titre": "Contraintes d'assemblage et liaisons mécaniques",
       "contenu": "<p>Les <strong>contraintes d'assemblage</strong> les plus courantes sont : coïncidence (deux faces planes en contact), coaxialité (deux cylindres sur le même axe), distance, angle, parallélisme, tangence. Elles doivent traduire les <strong>contacts réels</strong> entre les pièces, c'est-à-dire les liaisons mécaniques.</p>\n<table>\n<thead><tr><th>Liaison réelle</th><th>Contraintes d'assemblage typiques</th><th>Degrés de liberté restants</th></tr></thead>\n<tbody>\n<tr><td>Encastrement (pièces vissées)</td><td>Coïncidence plan + coaxialité de deux trous (ou trois contraintes planes)</td><td>0</td></tr>\n<tr><td>Pivot (axe dans un alésage avec arrêt)</td><td>Coaxialité + coïncidence d'un épaulement</td><td>1 rotation</td></tr>\n<tr><td>Glissière (coulisseau sur rail)</td><td>Coïncidence de deux plans non parallèles</td><td>1 translation</td></tr>\n<tr><td>Pivot glissant (tige de vérin)</td><td>Coaxialité seule</td><td>1 rotation + 1 translation</td></tr>\n</tbody>\n</table>\n<p>Laisser libres les degrés de liberté qui existent réellement permet d'<strong>animer</strong> le mécanisme : on fait tourner la manivelle et on observe le mouvement des autres pièces. C'est le point de départ de la simulation cinématique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> fixer toutes les pièces « pour que ça tienne » donne un assemblage figé, impossible à animer, et masque les erreurs de conception. À l'inverse, des contraintes redondantes ou contradictoires provoquent des erreurs ou des déplacements imprévus lors des modifications.</div>"
      },
      {
       "titre": "Les méthodes de conception",
       "contenu": "<p>Selon le projet, plusieurs méthodes de conception sont possibles :</p>\n<ul>\n<li><strong>Conception par pièce (ascendante)</strong> : chaque pièce est modélisée séparément puis assemblée. Simple, adaptée aux pièces indépendantes et aux composants réutilisés.</li>\n<li><strong>Conception dans l'assemblage (descendante)</strong> : on crée une pièce directement dans l'assemblage, en s'appuyant sur la géométrie des pièces voisines (une plaque dont les trous sont projetés depuis les trous de la pièce en face). Les pièces restent alignées quand une cote change, mais des <strong>références externes</strong> se créent et doivent être maîtrisées.</li>\n<li><strong>Conception par squelette ou esquisse pilotante</strong> : une esquisse ou une pièce « squelette » contient les éléments directeurs du mécanisme (axes, entraxes, positions des liaisons, courses). Toutes les pièces s'appuient sur ce squelette. Changer un entraxe dans le squelette met à jour tout le produit.</li>\n<li><strong>Conception par surfaces fonctionnelles</strong> : on modélise d'abord les surfaces de contact et de guidage imposées par les liaisons, puis on les relie par de la matière en tenant compte du procédé. La forme découle des fonctions.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> concevoir un bras articulé par squelette : 1) créer une esquisse dans l'assemblage avec les points d'articulation, les longueurs de bras et la course angulaire, tous cotés ; 2) vérifier les positions extrêmes en faisant varier l'angle ; 3) créer chaque bras en s'appuyant sur les points du squelette (axes de perçage sur les points, longueur entre deux points) ; 4) contraindre les axes des pièces sur les points du squelette ; 5) modifier une longueur dans le squelette pour tester la mise à jour de l'ensemble.</div>"
      },
      {
       "titre": "Bibliothèques, familles de pièces et tableurs",
       "contenu": "<p>Les éléments normalisés (vis, écrous, rondelles, goupilles, clavettes, roulements, circlips) ne se modélisent pas : on les prend dans une <strong>bibliothèque de composants standard</strong> intégrée au logiciel, ou on télécharge le modèle sur le site du fabricant (vérins, guidages linéaires, moteurs, capteurs). Ces composants portent leur désignation normalisée, qui remonte automatiquement dans la nomenclature.</p>\n<p>Une <strong>famille de pièces</strong> regroupe des pièces de même forme dont seules certaines dimensions changent : des entretoises de longueurs 10, 15, 20 et 25 mm, des brides pour quatre diamètres de tube. On modélise une pièce de base avec des paramètres nommés, et un <strong>tableau</strong> (souvent un tableur) liste les configurations.</p>\n<table>\n<thead><tr><th>Référence</th><th>D (mm)</th><th>d (mm)</th><th>L (mm)</th></tr></thead>\n<tbody>\n<tr><td>ENT-12-6-10</td><td>12</td><td>6,4</td><td>10</td></tr>\n<tr><td>ENT-12-6-20</td><td>12</td><td>6,4</td><td>20</td></tr>\n<tr><td>ENT-16-8-20</td><td>16</td><td>8,4</td><td>20</td></tr>\n<tr><td>ENT-16-8-30</td><td>16</td><td>8,4</td><td>30</td></tr>\n</tbody>\n</table>\n<p>Les tableurs servent aussi à piloter des dimensions depuis un calcul (diamètre d'arbre issu d'un calcul de résistance, longueur de courroie) : le modèle se met à jour quand le résultat du calcul change.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une bibliothèque interne bien tenue (pièces « maison » validées, avec leur référence article) évite de remodéliser sans cesse les mêmes pièces et limite le nombre de références à gérer en stock.</div>"
      },
      {
       "titre": "Les modules métiers",
       "contenu": "<p>Les logiciels de CAO proposent des <strong>modules métiers</strong> qui intègrent les règles d'un procédé :</p>\n<table>\n<thead><tr><th>Module</th><th>Ce qu'il apporte</th><th>Données de sortie</th></tr></thead>\n<tbody>\n<tr><td>Tôlerie</td><td>Pièces d'épaisseur constante avec plis, rayons de pliage, dégagements, emboutis</td><td>Développé (mise à plat) pour la découpe laser ou poinçonnage, plan de pliage</td></tr>\n<tr><td>Mécano-soudé</td><td>Structures en profilés normalisés (tubes, cornières, IPE) tracés sur un squelette filaire, avec coupes d'extrémités et goussets</td><td>Liste de débit (profilé, longueur, angles), cordons de soudure</td></tr>\n<tr><td>Moule</td><td>Analyse de dépouille, plan de joint, empreintes, retrait, noyaux et tiroirs</td><td>Empreinte et poinçon, base de l'outillage</td></tr>\n</tbody>\n</table>\n<p>En tôlerie, la longueur du développé dépend de l'épaisseur, du rayon intérieur de pliage et du matériau, à travers un coefficient de position de la <strong>fibre neutre</strong> (souvent noté K). Le module calcule le développé à partir de ces paramètres ; il faut donc renseigner les valeurs fournies par l'atelier ou le sous-traitant de pliage, faute de quoi les pièces pliées seront hors cote.</p>\n<p>En mécano-soudé, la démarche commence par un <strong>squelette filaire</strong> : des segments d'esquisse 3D qui représentent l'axe ou l'arête de chaque profilé. On choisit ensuite le profilé dans une bibliothèque normalisée (par exemple un tube carré 40 × 40 × 3), on règle la position du profil par rapport à la ligne (centré, en appui sur une arête), puis on traite les extrémités : coupe d'onglet à 45°, coupe droite en about, ajustement d'un tube sur un autre. Les goussets et platines se placent en dernier. Le module calcule les longueurs réelles de débit, ce qui évite les erreurs de calcul à la main sur les coupes biaises.</p>\n<p>En moule, le module aide surtout à <strong>analyser</strong> une pièce : il colore les faces selon leur dépouille par rapport à une direction de démoulage, signale les contre-dépouilles et applique le retrait du matériau à l'empreinte. Même si le technicien ne conçoit pas lui-même le moule, il doit livrer une pièce « moulable ».</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pièce de tôlerie modélisée comme un simple volume (bossages et coques) n'a pas de développé exploitable. Il faut utiliser les fonctions de tôlerie dès le départ.</div>"
      },
      {
       "titre": "Contrôler la maquette : interférences et cohérence",
       "contenu": "<p>Une maquette numérique doit être <strong>sans interférence</strong> : deux pièces ne peuvent pas occuper le même volume, sauf cas voulus (filetage d'une vis dans un taraudage, ajustement serré). Les logiciels proposent une <strong>détection d'interférences</strong> statique (dans la position actuelle) et dynamique (pendant un mouvement).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler un assemblage avant diffusion : 1) reconstruire l'assemblage complet et traiter tous les avertissements ; 2) lancer la détection d'interférences et analyser chaque résultat : interférence normale (filetage), erreur de modélisation, erreur de conception ; 3) animer les mouvements sur toute leur course et vérifier les collisions et les jeux ; 4) vérifier l'accessibilité au montage : passage des outils, des clés, des doigts ; 5) contrôler la nomenclature générée (quantités, désignations, matières) ; 6) enregistrer avec un indice de version et noter les modifications.</div>\n<p>La <strong>vérification du jeu</strong> est aussi importante que celle des interférences : une pièce mobile qui passe à 0,2 mm d'une autre sur la maquette risque de frotter dans la réalité, à cause des tolérances de fabrication et des déformations.</p>\n<p>Enfin, la maquette doit respecter la relation <strong>produit-procédé-matériau</strong> : une pièce destinée à être injectée doit avoir des épaisseurs régulières et des dépouilles ; une pièce usinée doit être accessible aux outils ; une pièce imprimée doit tenir compte des surplombs et des épaisseurs minimales.</p>"
      }
     ],
     "points_cles": [
      "Un assemblage contient des liens vers les fichiers de pièces et des contraintes de position",
      "Les contraintes d'assemblage doivent traduire les liaisons réelles pour permettre l'animation",
      "Conception par pièce, dans l'assemblage, par squelette ou par surfaces fonctionnelles : chaque méthode a ses usages",
      "Le squelette centralise les dimensions directrices du mécanisme",
      "Les composants standard viennent de bibliothèques ou des sites fabricants, avec leur désignation normalisée",
      "Les familles de pièces sont pilotées par un tableau de configurations",
      "Les modules tôlerie, mécano-soudé et moule intègrent les règles du procédé",
      "Avant diffusion : reconstruction, interférences, mouvements, accessibilité, nomenclature, version"
     ],
     "lexique": [
      {
       "terme": "Assemblage",
       "def": "Fichier qui réunit et positionne des pièces et sous-ensembles par des contraintes."
      },
      {
       "terme": "Contrainte d'assemblage",
       "def": "Relation de position entre deux composants : coïncidence, coaxialité, distance, angle."
      },
      {
       "terme": "Conception descendante",
       "def": "Création des pièces dans le contexte de l'assemblage, en s'appuyant sur les pièces voisines."
      },
      {
       "terme": "Squelette",
       "def": "Esquisse ou pièce qui porte les éléments directeurs d'un mécanisme et pilote les autres pièces."
      },
      {
       "terme": "Référence externe",
       "def": "Lien géométrique entre une pièce et un autre fichier, qui la met à jour automatiquement."
      },
      {
       "terme": "Famille de pièces",
       "def": "Ensemble de pièces de même forme dont les dimensions sont pilotées par un tableau."
      },
      {
       "terme": "Développé",
       "def": "Forme à plat d'une pièce de tôlerie avant pliage."
      },
      {
       "terme": "Liste de débit",
       "def": "Liste des profilés à couper avec leurs longueurs et angles, pour une structure mécano-soudée."
      },
      {
       "terme": "Interférence",
       "def": "Volume commun à deux pièces dans la maquette numérique."
      }
     ]
    },
    {
     "id": "bmp3-chaine-numerique-donnees",
     "titre": "Chaîne numérique, formats d'échange, gestion des données et rétro-conception",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Décrire la chaîne numérique qui relie maquette, simulation, prototype, outillage et production",
      "Choisir un format d'échange adapté : natif, neutre (STEP), maillé (STL, 3MF), 2D (PDF, DXF)",
      "Gérer ses données : nommage, versions, révisions, droits, archivage, rôle d'un PDM/PLM",
      "Préparer ou simplifier une maquette existante pour une simulation, un prototype ou un jumeau numérique",
      "Mettre en œuvre une démarche de rétro-conception à partir de mesures ou d'un scan 3D"
     ],
     "sections": [
      {
       "titre": "Le concept de chaîne numérique",
       "contenu": "<p>La <strong>chaîne numérique</strong> est l'ensemble des étapes qui utilisent les mêmes données numériques, de l'idée jusqu'au produit fabriqué, sans ressaisie. La maquette 3D en est le cœur : on en dérive les simulations, les plans, les fichiers de prototypage, les programmes de fabrication, les documents de communication.</p>\n<table>\n<thead><tr><th>Maillon</th><th>Données utilisées</th><th>Données produites</th></tr></thead>\n<tbody>\n<tr><td>Conception</td><td>Cahier des charges, croquis, fichiers clients</td><td>Maquette 3D paramétrique</td></tr>\n<tr><td>Simulation</td><td>Maquette simplifiée, matériaux, chargements</td><td>Résultats (contraintes, déplacements, mouvements) et modifications</td></tr>\n<tr><td>Prototypage</td><td>Maquette exportée en maillage</td><td>Fichier tranché, prototype physique</td></tr>\n<tr><td>Outillage</td><td>Maquette de la pièce, retrait, plan de joint</td><td>Modèle du moule ou du montage</td></tr>\n<tr><td>Production</td><td>Maquette et dossier de définition</td><td>Programmes de commande numérique, gammes</td></tr>\n<tr><td>Contrôle</td><td>Maquette cotée</td><td>Programmes de mesure, rapports de contrôle</td></tr>\n</tbody>\n</table>\n<p>La chaîne fonctionne en <strong>boucle d'optimisation</strong> : un résultat de simulation, un défaut constaté sur le prototype ou une remarque de l'atelier reviennent modifier la maquette, qui est de nouveau exploitée. Plus la maquette est robuste, plus ces boucles sont rapides.</p>\n<p>Le <strong>jumeau numérique</strong> va plus loin : c'est une représentation numérique d'un système réel, alimentée par les données de ses capteurs, qui permet de simuler son comportement, d'anticiper ses pannes ou d'optimiser ses réglages. Le modeleur 3D lui fournit une géométrie allégée, exploitable en temps réel.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans une chaîne numérique, une erreur dans la maquette se propage à tous les maillons. La qualité des données à la source est donc décisive.</div>"
      },
      {
       "titre": "Les formats de fichiers",
       "contenu": "<p>Chaque logiciel enregistre ses fichiers dans un <strong>format natif</strong> qui conserve tout : arbre, esquisses, paramètres. Pour échanger avec d'autres logiciels, on utilise des formats d'échange, qui perdent tout ou partie de cette intelligence.</p>\n<table>\n<thead><tr><th>Format</th><th>Contenu</th><th>Usage typique</th></tr></thead>\n<tbody>\n<tr><td>Natif</td><td>Historique complet, paramètres</td><td>Travail interne avec le même logiciel</td></tr>\n<tr><td>STEP (.stp, .step)</td><td>Géométrie exacte des solides et surfaces, structure d'assemblage, sans historique</td><td>Échange entre logiciels de CAO, envoi à un sous-traitant</td></tr>\n<tr><td>IGES (.igs)</td><td>Surfaces, format ancien</td><td>Échanges historiques de surfaces</td></tr>\n<tr><td>STL (.stl)</td><td>Maillage de triangles, sans unité ni couleur</td><td>Impression 3D</td></tr>\n<tr><td>3MF (.3mf)</td><td>Maillage avec unités, couleurs, matériaux, réglages d'impression</td><td>Impression 3D, alternative moderne au STL</td></tr>\n<tr><td>OBJ (.obj)</td><td>Maillage avec textures</td><td>Rendu, réalité virtuelle</td></tr>\n<tr><td>PDF</td><td>Plan 2D (ou 3D) en lecture seule</td><td>Diffusion de plans, validation</td></tr>\n<tr><td>DXF / DWG</td><td>Géométrie 2D vectorielle</td><td>Découpe laser, jet d'eau, contours 2D</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un fichier STL ne contient pas d'unité. Une pièce de 50 mm exportée en millimètres et importée dans un logiciel réglé en pouces mesurera 50 pouces. Toujours vérifier les dimensions après import. De plus, un STL est une approximation : une finesse de maillage trop grossière fait apparaître des facettes visibles sur les cylindres imprimés.</div>\n<p>Le passage d'un modèle exact à un maillage s'appelle la <strong>tessellation</strong>. On la règle par une tolérance de corde (écart maximal entre la surface vraie et les triangles) et une tolérance angulaire. Un réglage trop fin produit des fichiers énormes ; trop grossier, des facettes visibles.</p>"
      },
      {
       "titre": "Gérer les données numériques",
       "contenu": "<p>Un bureau d'études produit des milliers de fichiers liés entre eux. Les gérer sans méthode conduit à des pertes, des doublons et des erreurs (fabrication sur un plan périmé). Les règles de base sont :</p>\n<ul>\n<li>un <strong>nommage</strong> unique et cohérent, souvent fondé sur le numéro d'article (« 10452-03_Bride_serrage ») ;</li>\n<li>une distinction entre <strong>version</strong> (enregistrement de travail, en cours) et <strong>révision</strong> ou indice (état validé et diffusé : A, B, C…) ;</li>\n<li>un <strong>cycle de validation</strong> : en cours, en vérification, validé, diffusé, obsolète ;</li>\n<li>des <strong>droits</strong> d'accès : qui peut lire, modifier, valider ;</li>\n<li>un <strong>archivage</strong> des états diffusés, avec leurs formats d'échange (STEP, PDF) qui resteront lisibles même si le logiciel change.</li>\n</ul>\n<p>Le <strong>PDM</strong> (Product Data Management, gestion des données techniques) est un logiciel qui organise ces fichiers dans une base : il gère les extractions et réintégrations (un seul utilisateur modifie un fichier à la fois), les versions, les révisions, les liens entre fichiers et le cycle de validation. Le <strong>PLM</strong> (Product Lifecycle Management) élargit cette gestion à tout le cycle de vie : exigences, achats, fabrication, après-vente.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une modification après diffusion fait l'objet d'une <strong>demande de modification</strong> tracée, puis d'un nouvel indice. Le plan indice B remplace le plan indice A, qui est marqué obsolète mais conservé.</div>"
      },
      {
       "titre": "Travailler à plusieurs sur une même maquette",
       "contenu": "<p>Dans un projet, plusieurs techniciens interviennent souvent sur le même produit : l'un sur le bâti, l'autre sur la motorisation, un troisième sur les carters. Le référentiel demande de <strong>collaborer au sein d'un groupe projet</strong> en partageant les données numériques.</p>\n<ul>\n<li>Le produit est découpé en <strong>sous-ensembles</strong> attribués à des responsables, avec des <strong>interfaces</strong> définies (plans de fixation, entraxes, encombrements) fixées tôt, souvent dans un squelette commun.</li>\n<li>Chacun travaille sur des fichiers <strong>extraits</strong> du PDM ou d'un espace partagé, puis les réintègre ; personne ne modifie la pièce d'un autre sans accord.</li>\n<li>Des <strong>revues de conception</strong> régulières réunissent l'équipe autour de la maquette complète : on vérifie les interfaces, les interférences, l'avancement.</li>\n<li>Les plateformes de CAO en ligne permettent de travailler simultanément sur un même document, avec un historique partagé et des commentaires attachés à la géométrie.</li>\n</ul>\n<p>Les échanges avec l'extérieur (client, fournisseur) se font sur des <strong>états figés</strong> : un export STEP ou PDF daté et indicé, accompagné d'un message précisant ce qui a changé depuis l'envoi précédent.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> travailler en équipe sur une maquette impose des règles écrites : qui modifie quoi, où sont les fichiers de référence, comment on signale une modification d'interface.</div>"
      },
      {
       "titre": "Préparer une maquette pour son exploitation",
       "contenu": "<p>Le référentiel demande de savoir <strong>préparer un modèle ou une maquette existants</strong> en vue d'une exploitation. Une maquette de conception contient souvent trop de détails pour une simulation, un prototype ou un jumeau numérique.</p>\n<table>\n<thead><tr><th>Exploitation</th><th>Préparation habituelle</th></tr></thead>\n<tbody>\n<tr><td>Simulation mécanique</td><td>Supprimer petits congés, chanfreins, filetages, logos ; remplacer la visserie par des liaisons ; garder les zones de concentration de contraintes</td></tr>\n<tr><td>Prototype imprimé</td><td>Réunir ou découper des pièces, ajouter des jeux de montage, vérifier épaisseurs et surplombs, exporter en maillage étanche</td></tr>\n<tr><td>Jumeau numérique, réalité virtuelle</td><td>Alléger fortement (enveloppe externe, peu de triangles), conserver les pièces mobiles et leurs axes</td></tr>\n<tr><td>Envoi à un client</td><td>Exporter en STEP une enveloppe simplifiée qui protège le savoir-faire interne</td></tr>\n</tbody>\n</table>\n<p>On travaille de préférence sur une <strong>copie</strong> ou une configuration simplifiée, jamais en supprimant des fonctions dans la maquette de référence. Certaines fonctions des logiciels permettent de « défeaturer » automatiquement une pièce en supprimant les détails sous une certaine taille.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> simplifier une pièce pour une simulation statique : 1) créer une configuration « Simulation » ; 2) supprimer les congés de rayon inférieur à 1 mm hors des zones sollicitées et tous les chanfreins ; 3) supprimer filetages cosmétiques, gravures et logos ; 4) garder les congés situés en fond d'épaulement ou d'entaille, où les contraintes se concentrent ; 5) vérifier que le volume reste un solide fermé et que la masse a peu varié ; 6) noter les simplifications dans le rapport de simulation.</div>"
      },
      {
       "titre": "La rétro-conception",
       "contenu": "<p>La <strong>rétro-conception</strong> consiste à créer la maquette numérique d'une pièce existante dont on ne possède pas le modèle : pièce de rechange d'une machine ancienne, pièce artisanale, forme sculptée par un designer, pièce concurrente analysée.</p>\n<p>Deux familles de moyens d'acquisition existent :</p>\n<ul>\n<li>les <strong>instruments de mesure</strong> classiques (pied à coulisse, micromètre, jauge de profondeur, rapporteur, jeu de rayons, colonne de mesure) pour les pièces prismatiques et de révolution ;</li>\n<li>le <strong>scanner 3D</strong> (lumière structurée, laser, photogrammétrie) pour les formes libres. Il produit un <strong>nuage de points</strong>, transformé en <strong>maillage</strong> de triangles.</li>\n</ul>\n<p>Le maillage n'est pas directement une maquette paramétrique : il faut le <strong>nettoyer</strong> (supprimer les points parasites, boucher les trous), l'<strong>aligner</strong> sur un repère cohérent, puis <strong>reconstruire</strong> la pièce : soit par des fonctions volumiques en s'appuyant sur des sections du maillage (pièces mécaniques), soit par des surfaces ajustées sur le maillage (formes libres).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> protocole de rétro-conception d'une pièce mécanique scannée : 1) préparer la pièce (nettoyage, éventuellement spray matifiant sur les surfaces brillantes, cibles de repérage) ; 2) scanner sous plusieurs angles et assembler les acquisitions ; 3) nettoyer et fermer le maillage ; 4) aligner le maillage sur des plans et axes fonctionnels (face d'appui, axe d'alésage) ; 5) extraire des sections et y ajuster des esquisses ; 6) reconstruire par fonctions volumiques en arrondissant les cotes aux valeurs fonctionnelles probables (un alésage mesuré 19,97 est sans doute un 20) ; 7) comparer la pièce reconstruite au maillage par une cartographie d'écarts.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pièce usée ou déformée n'a plus ses cotes d'origine. Copier exactement le scan reproduit l'usure. Il faut interpréter : symétries, diamètres normalisés, perpendicularités voulues par le concepteur d'origine.</div>"
      }
     ],
     "points_cles": [
      "La chaîne numérique exploite la même maquette de la conception au contrôle, en boucle d'optimisation",
      "Le jumeau numérique représente un système réel alimenté par ses données de capteurs",
      "STEP pour échanger la géométrie exacte, STL ou 3MF pour imprimer, PDF pour diffuser un plan, DXF pour la découpe 2D",
      "Un STL n'a pas d'unité et approche les surfaces par des triangles",
      "Versions de travail et révisions diffusées se distinguent ; une modification diffusée crée un nouvel indice",
      "PDM et PLM gèrent fichiers, liens, droits, versions et cycle de validation",
      "On simplifie une copie ou une configuration, jamais la maquette de référence",
      "La rétro-conception passe par l'acquisition, le nettoyage, l'alignement, la reconstruction et la comparaison"
     ],
     "lexique": [
      {
       "terme": "Chaîne numérique",
       "def": "Enchaînement des étapes de conception à production utilisant les mêmes données numériques."
      },
      {
       "terme": "Jumeau numérique",
       "def": "Représentation numérique d'un système réel, alimentée par ses données, pour simuler son comportement."
      },
      {
       "terme": "Format natif",
       "def": "Format propre à un logiciel, qui conserve l'historique et les paramètres."
      },
      {
       "terme": "STEP",
       "def": "Format neutre normalisé d'échange de géométrie exacte et d'assemblages."
      },
      {
       "terme": "Maillage",
       "def": "Représentation d'une surface par un ensemble de facettes, en général triangulaires."
      },
      {
       "terme": "Tessellation",
       "def": "Conversion d'un modèle exact en maillage de triangles."
      },
      {
       "terme": "Indice de révision",
       "def": "Lettre ou numéro identifiant un état validé et diffusé d'un document."
      },
      {
       "terme": "PDM",
       "def": "Logiciel de gestion des données techniques : fichiers, versions, liens, droits, validation."
      },
      {
       "terme": "Nuage de points",
       "def": "Ensemble de points mesurés à la surface d'un objet par un scanner 3D."
      },
      {
       "terme": "Rétro-conception",
       "def": "Création de la maquette numérique d'une pièce existante à partir de mesures ou d'un scan."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Comportement et technologie des mécanismes",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmp3-liaisons-cinematique",
     "titre": "Liaisons, schéma cinématique et mouvements",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Identifier les classes d'équivalence d'un mécanisme et tracer son graphe des liaisons",
      "Reconnaître les liaisons normalisées à partir des surfaces de contact et de leurs degrés de liberté",
      "Lire et tracer un schéma cinématique minimal",
      "Caractériser un mouvement de translation ou de rotation : trajectoire, vitesse, accélération",
      "Établir une loi entrée-sortie simple et exploiter une simulation cinématique"
     ],
     "sections": [
      {
       "titre": "Classes d'équivalence et graphe des liaisons",
       "contenu": "<p>Pour étudier un mécanisme, on regroupe les pièces qui n'ont <strong>aucun mouvement relatif</strong> entre elles pendant le fonctionnement : elles forment une <strong>classe d'équivalence</strong> (ou sous-ensemble cinématiquement équivalent). Un bâti, ses vis, ses goupilles et ses bagues fixes forment une seule classe ; un arbre avec sa poulie clavetée et ses écrous en forment une autre.</p>\n<p>On représente ensuite les classes et les liaisons qui les relient par un <strong>graphe des liaisons</strong> : chaque classe est un cercle (ou une bulle) portant son nom, chaque liaison est un trait entre deux cercles, sur lequel on note le nom de la liaison et ses caractéristiques géométriques (axe, centre, normale).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir le graphe des liaisons d'un mécanisme à partir d'un dessin d'ensemble : 1) colorier les pièces de la nomenclature selon leur mouvement : même couleur pour celles qui sont liées rigidement ; 2) exclure les éléments déformables (ressorts, joints) et noter à part les roulements, dont les bagues appartiennent à deux classes différentes ; 3) nommer chaque classe (bâti 0, arbre 1, coulisseau 2…) ; 4) pour chaque couple de classes en contact, analyser les surfaces de contact et identifier la liaison ; 5) tracer le graphe et vérifier qu'il traduit bien le fonctionnement décrit.</div>\n<p>Le graphe montre la <strong>structure</strong> du mécanisme : une <strong>chaîne ouverte</strong> (bras de robot) où chaque classe n'est reliée qu'à la précédente et à la suivante, ou une <strong>chaîne fermée</strong> (système bielle-manivelle) où l'on revient au bâti par deux chemins.</p>"
      },
      {
       "titre": "Les liaisons normalisées",
       "contenu": "<p>Un solide libre dans l'espace possède six <strong>degrés de liberté</strong> : trois translations (selon x, y, z) et trois rotations (autour de x, y, z). Une liaison supprime certains de ces mouvements. Les liaisons usuelles sont normalisées (NF EN ISO 3952) et chacune possède un symbole plan et un symbole en perspective.</p>\n<table>\n<thead><tr><th>Liaison</th><th>Mouvements possibles</th><th>Nombre de degrés de liberté</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Encastrement (liaison fixe)</td><td>Aucun</td><td>0</td><td>Pièces vissées entre elles</td></tr>\n<tr><td>Pivot d'axe (A, x)</td><td>Rotation autour de x</td><td>1</td><td>Arbre guidé par deux roulements</td></tr>\n<tr><td>Glissière de direction x</td><td>Translation selon x</td><td>1</td><td>Chariot sur rail à billes</td></tr>\n<tr><td>Hélicoïdale d'axe (A, x)</td><td>Rotation et translation conjuguées</td><td>1</td><td>Vis et écrou</td></tr>\n<tr><td>Pivot glissant d'axe (A, x)</td><td>Rotation et translation selon x</td><td>2</td><td>Tige de vérin dans son palier</td></tr>\n<tr><td>Rotule (sphérique) de centre A</td><td>Trois rotations</td><td>3</td><td>Rotule de direction</td></tr>\n<tr><td>Appui plan de normale z</td><td>Deux translations dans le plan, rotation autour de z</td><td>3</td><td>Patin sur une table</td></tr>\n<tr><td>Linéaire annulaire (sphère-cylindre)</td><td>Translation selon l'axe et trois rotations</td><td>4</td><td>Rotule coulissant dans un alésage</td></tr>\n<tr><td>Linéaire rectiligne</td><td>Deux translations et deux rotations</td><td>4</td><td>Cylindre posé sur un plan</td></tr>\n<tr><td>Ponctuelle (sphère-plan)</td><td>Deux translations et trois rotations</td><td>5</td><td>Bille sur un plan</td></tr>\n</tbody>\n</table>\n<p>La liaison se déduit de la <strong>géométrie des surfaces en contact</strong> : contact cylindre-cylindre long, avec un arrêt axial par épaulement, donne une pivot ; contact cylindre-cylindre long seul donne une pivot glissant ; contact plan-plan donne un appui plan.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un contact cylindrique est « long » quand la longueur de contact est grande devant le diamètre (en pratique supérieure à environ 1,5 fois le diamètre). Un contact cylindrique court ne guide pas en rotation : il se modélise par une linéaire annulaire.</div>"
      },
      {
       "titre": "Le schéma cinématique",
       "contenu": "<p>Le <strong>schéma cinématique minimal</strong> représente le mécanisme avec les symboles normalisés des liaisons, en respectant leur position et leur orientation relatives, mais sans les formes réelles des pièces. Chaque classe d'équivalence est tracée d'une même couleur et reliée par des traits simples aux symboles de ses liaisons. Le bâti est repéré par des hachures.</p>\n<p>Le schéma cinématique sert à :</p>\n<ul>\n<li>comprendre et expliquer le fonctionnement d'un mécanisme ;</li>\n<li>rechercher des solutions en phase de conception, avant toute forme de pièce (c'est un croquis de principe) ;</li>\n<li>préparer les calculs : cinématique, statique, choix des actionneurs ;</li>\n<li>paramétrer une simulation de mécanisme dans le logiciel.</li>\n</ul>\n<p>Le <strong>schéma technologique</strong>, plus détaillé, montre en plus les solutions retenues : type de roulements, arrêts axiaux, joints. Il fait le lien entre le schéma cinématique et le dessin d'ensemble.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le schéma cinématique doit être cohérent avec le graphe des liaisons : même nombre de classes, mêmes liaisons, mêmes axes. On le vérifie en « faisant bouger » mentalement le schéma : il doit reproduire le mouvement du mécanisme réel.</div>"
      },
      {
       "titre": "Mouvements, trajectoires et vitesses",
       "contenu": "<p>Le mouvement d'un solide est toujours décrit <strong>par rapport à un autre</strong> (en général le bâti). Deux mouvements simples se rencontrent le plus souvent :</p>\n<ul>\n<li><strong>Translation rectiligne</strong> : tous les points ont la même trajectoire, un segment de droite, et la même vitesse. La vitesse v s'exprime en m/s : v = d / t pour un mouvement uniforme.</li>\n<li><strong>Rotation autour d'un axe fixe</strong> : chaque point décrit un cercle centré sur l'axe. La vitesse angulaire ω s'exprime en rad/s ; la vitesse d'un point situé à la distance R de l'axe vaut v = R × ω, et elle est perpendiculaire au rayon.</li>\n</ul>\n<p>Les fréquences de rotation des moteurs sont souvent données en tours par minute : ω (rad/s) = N (tr/min) × 2π / 60. L'<strong>accélération</strong> caractérise la variation de la vitesse : pour un mouvement uniformément accéléré partant du repos, v = a × t et d = a × t² / 2.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la vitesse d'un point sur une poulie. Une poulie de diamètre 80 mm tourne à 1 500 tr/min. 1) Convertir : ω = 1 500 × 2π / 60 ≈ 157 rad/s. 2) Rayon R = 0,040 m. 3) v = R × ω = 0,040 × 157 ≈ 6,3 m/s. C'est aussi la vitesse de la courroie si elle ne glisse pas.</div>\n<p>Dans un mouvement plan plus complexe (une bielle), la vitesse des points se détermine par composition des vitesses ou à l'aide du <strong>centre instantané de rotation</strong> (CIR) : à un instant donné, la pièce tourne autour de ce point, et la vitesse de chaque point est perpendiculaire à la droite qui le relie au CIR et proportionnelle à sa distance au CIR.</p>"
      },
      {
       "titre": "Lois entrée-sortie et transformation de mouvement",
       "contenu": "<p>Une <strong>loi entrée-sortie</strong> relie le mouvement de l'élément d'entrée (moteur, manivelle) à celui de l'élément de sortie (effecteur). Elle se présente sous forme d'une relation ou d'une courbe.</p>\n<table>\n<thead><tr><th>Mécanisme</th><th>Entrée</th><th>Sortie</th><th>Loi</th></tr></thead>\n<tbody>\n<tr><td>Engrenage simple</td><td>Rotation ω<sub>1</sub></td><td>Rotation ω<sub>2</sub></td><td>ω<sub>2</sub> / ω<sub>1</sub> = Z<sub>1</sub> / Z<sub>2</sub></td></tr>\n<tr><td>Vis-écrou</td><td>Rotation (tr/min)</td><td>Translation</td><td>v = N × pas (pas en mm, v en mm/min)</td></tr>\n<tr><td>Pignon-crémaillère</td><td>Rotation ω</td><td>Translation</td><td>v = R × ω (R : rayon primitif)</td></tr>\n<tr><td>Bielle-manivelle</td><td>Rotation continue</td><td>Translation alternative</td><td>Course = 2 × longueur de manivelle ; loi non linéaire</td></tr>\n<tr><td>Came</td><td>Rotation</td><td>Translation ou rotation alternée</td><td>Définie par le profil de la came</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vitesse d'un chariot entraîné par une vis à billes de pas 5 mm tournant à 600 tr/min : v = 600 × 5 = 3 000 mm/min = 50 mm/s. Pour parcourir une course de 300 mm, il faut 300 / 50 = 6 s, hors phases d'accélération et de freinage.</div>\n<p>Le roulement sans glissement est une condition fréquente : une roue de rayon R qui roule sans glisser sur le sol avance de 2πR à chaque tour, et la vitesse de son centre vaut R × ω.</p>"
      },
      {
       "titre": "Simulation cinématique dans la maquette",
       "contenu": "<p>Les logiciels de CAO permettent d'<strong>animer</strong> un assemblage à partir de ses contraintes, et des modules de simulation de mécanisme permettent d'aller plus loin : on impose un moteur (vitesse de rotation ou loi de déplacement) et le logiciel calcule positions, vitesses et accélérations de tous les points, sous forme de courbes.</p>\n<ul>\n<li>Vérifier les <strong>courses</strong> et les positions extrêmes ;</li>\n<li>détecter les <strong>collisions</strong> pendant le mouvement ;</li>\n<li>tracer la <strong>trajectoire</strong> d'un point (extrémité d'un préhenseur) ;</li>\n<li>obtenir la <strong>loi entrée-sortie</strong> et la comparer au cahier des charges (temps de cycle, vitesse maximale).</li>\n</ul>\n<p>Les résultats d'une simulation dépendent de la modélisation : des liaisons mal définies donnent des résultats faux. On contrôle toujours un résultat de simulation par un calcul simple en un point particulier, par exemple la course totale ou la vitesse à mi-course.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de commander un vérin pour un montage de soudage, le technicien simule le mouvement de la bride : il vérifie que la bride dégage complètement la zone de chargement en position ouverte et qu'elle ne heurte pas l'électrode en fin de course.</div>"
      }
     ],
     "points_cles": [
      "Une classe d'équivalence regroupe les pièces sans mouvement relatif entre elles",
      "Le graphe des liaisons relie les classes par les liaisons identifiées",
      "Un solide libre a six degrés de liberté ; chaque liaison normalisée en supprime certains",
      "La liaison se déduit de la géométrie des surfaces de contact (contact long ou court)",
      "Le schéma cinématique minimal utilise les symboles normalisés et respecte positions et orientations",
      "En rotation, v = R × ω et ω = N × 2π / 60",
      "Vis-écrou : v = N × pas ; engrenage : ω2 / ω1 = Z1 / Z2",
      "Une simulation cinématique se contrôle par un calcul simple en un point"
     ],
     "lexique": [
      {
       "terme": "Classe d'équivalence",
       "def": "Ensemble de pièces sans mouvement relatif pendant le fonctionnement."
      },
      {
       "terme": "Degré de liberté",
       "def": "Mouvement élémentaire indépendant possible : translation ou rotation selon un axe."
      },
      {
       "terme": "Graphe des liaisons",
       "def": "Représentation des classes d'équivalence et des liaisons qui les relient."
      },
      {
       "terme": "Liaison pivot",
       "def": "Liaison qui n'autorise qu'une rotation autour d'un axe."
      },
      {
       "terme": "Liaison glissière",
       "def": "Liaison qui n'autorise qu'une translation selon une direction."
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
       "terme": "Centre instantané de rotation",
       "def": "Point autour duquel un solide en mouvement plan tourne à un instant donné."
      },
      {
       "terme": "Loi entrée-sortie",
       "def": "Relation entre le mouvement d'entrée et le mouvement de sortie d'un mécanisme."
      },
      {
       "terme": "Pas",
       "def": "Déplacement axial de l'écrou pour un tour de vis."
      }
     ]
    },
    {
     "id": "bmp3-actions-statique",
     "titre": "Actions mécaniques et équilibre statique",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Modéliser une action mécanique par une force : point d'application, direction, sens, intensité",
      "Calculer le moment d'une force par rapport à un point",
      "Isoler un solide et faire le bilan des actions mécaniques extérieures",
      "Appliquer le principe fondamental de la statique par une méthode analytique ou graphique",
      "Prendre en compte le frottement par les lois de Coulomb et déterminer un centre de gravité"
     ],
     "sections": [
      {
       "titre": "Modéliser une action mécanique",
       "contenu": "<p>Une <strong>action mécanique</strong> est toute cause capable de déformer un solide, de le mettre en mouvement ou de le maintenir au repos. Elle peut être <strong>à distance</strong> (pesanteur, attraction magnétique) ou <strong>de contact</strong> (appui d'une pièce sur une autre, pression d'un fluide, effort d'un ressort).</p>\n<p>Quand l'action s'exerce sur une petite zone, on la modélise par une <strong>force</strong>, représentée par un vecteur caractérisé par :</p>\n<ul>\n<li>son <strong>point d'application</strong> (A) ;</li>\n<li>sa <strong>direction</strong> (droite d'action) ;</li>\n<li>son <strong>sens</strong> ;</li>\n<li>son <strong>intensité</strong> (ou norme), en newtons (N).</li>\n</ul>\n<p>On la note par exemple A<sub>1/2</sub> : action de la pièce 1 sur la pièce 2 au point A. Le <strong>poids</strong> d'un solide de masse m est une force verticale, dirigée vers le bas, appliquée au centre de gravité G, d'intensité P = m × g avec g ≈ 9,81 m/s<sup>2</sup>. Une masse de 1 kg pèse donc environ 9,81 N, que l'on arrondit souvent à 10 N pour un ordre de grandeur.</p>\n<p>Le <strong>principe des actions mutuelles</strong> indique que si 1 agit sur 2, alors 2 agit sur 1 avec une force de même direction, même intensité et sens opposé : A<sub>2/1</sub> = −A<sub>1/2</sub>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une force est entièrement définie par quatre caractéristiques. Dans un bilan, on note pour chaque force ce qui est connu et ce qui ne l'est pas : c'est ce tableau qui guide la résolution.</div>"
      },
      {
       "titre": "Le moment d'une force",
       "contenu": "<p>Une force peut faire tourner un solide autour d'un point ou d'un axe. Cet effet de rotation est mesuré par le <strong>moment</strong>. Le moment de la force F par rapport au point O vaut, en intensité :</p>\n<p><strong>M<sub>O</sub>(F) = ± F × d</strong></p>\n<p>où d est le <strong>bras de levier</strong>, c'est-à-dire la distance <em>perpendiculaire</em> entre O et la droite d'action de F. Le moment s'exprime en newtons-mètres (N·m). Le signe dépend du sens de rotation provoqué : on choisit par convention positif le sens trigonométrique (inverse des aiguilles d'une montre).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> couple de serrage avec une clé. Un opérateur exerce 150 N perpendiculairement à une clé, à 0,20 m de l'axe de la vis. Le moment par rapport à l'axe vaut 150 × 0,20 = 30 N·m. Si la force est inclinée à 60° par rapport au manche, seul le bras de levier perpendiculaire compte : d = 0,20 × sin 60° ≈ 0,173 m, d'où un moment d'environ 26 N·m.</div>\n<p>Un <strong>couple</strong> est une action mécanique qui ne produit qu'un effet de rotation, sans résultante : c'est le cas du couple délivré par un moteur sur son arbre. Il s'exprime aussi en N·m.</p>\n<p>Le moment explique le fonctionnement des leviers, des brides de serrage, des pinces : en jouant sur les bras de levier, on multiplie l'effort. Une bride dont l'axe d'articulation est deux fois plus loin du vérin que de la pièce serre avec un effort deux fois plus grand que celui du vérin, à l'équilibre et sans frottement.</p>"
      },
      {
       "titre": "Isoler un solide et faire le bilan",
       "contenu": "<p>Pour étudier l'équilibre, on <strong>isole</strong> un solide (ou un ensemble de solides) : on le considère séparément de tout ce qui l'entoure, et on recense les <strong>actions mécaniques extérieures</strong> qu'il subit. Les actions entre pièces de l'ensemble isolé sont <strong>intérieures</strong> et n'apparaissent pas dans le bilan.</p>\n<p>Chaque liaison avec l'extérieur transmet une action dont la forme dépend de la liaison. Sans frottement :</p>\n<table>\n<thead><tr><th>Liaison (problème plan)</th><th>Action transmise</th></tr></thead>\n<tbody>\n<tr><td>Appui ponctuel ou contact sphère-plan</td><td>Force perpendiculaire au plan de contact, direction connue</td></tr>\n<tr><td>Pivot (articulation)</td><td>Force passant par le centre de l'articulation, direction inconnue</td></tr>\n<tr><td>Bielle ou tige articulée à ses deux extrémités, sans autre charge</td><td>Force dirigée selon la droite qui joint les deux articulations</td></tr>\n<tr><td>Encastrement</td><td>Force et moment</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le poids des pièces est souvent négligé devant les efforts de fonctionnement. Cette hypothèse doit être écrite ; elle n'est pas valable pour une pièce lourde, une structure de grande taille ou des efforts faibles.</div>\n<p>Le bilan se présente sous forme de tableau : pour chaque action, nom, point d'application, direction, sens, intensité, avec un point d'interrogation pour chaque inconnue.</p>"
      },
      {
       "titre": "Le principe fondamental de la statique",
       "contenu": "<p>Un solide est en <strong>équilibre</strong> s'il est immobile (ou en mouvement de translation rectiligne uniforme) par rapport à un repère galiléen, comme le sol pour la plupart des problèmes industriels. Le <strong>principe fondamental de la statique</strong> (PFS) dit alors que :</p>\n<ol>\n<li>la <strong>somme vectorielle des forces</strong> extérieures est nulle (théorème de la résultante) ;</li>\n<li>la <strong>somme des moments</strong> de ces forces par rapport à n'importe quel point est nulle (théorème du moment).</li>\n</ol>\n<p>En problème plan, on obtient trois équations : somme des projections sur x = 0 ; somme des projections sur y = 0 ; somme des moments par rapport à un point = 0. On peut donc déterminer au maximum trois inconnues.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> bride de serrage articulée en O. Le vérin pousse vers le haut en A avec 400 N, à 50 mm de O ; la bride appuie sur la pièce en B, de l'autre côté de O, à 100 mm de O. On cherche l'effort de serrage en B. 1) Isoler la bride ; actions : vérin en A (400 N vers le haut), pièce sur bride en B (verticale vers le haut, puisque la bride appuie vers le bas sur la pièce, intensité inconnue), articulation en O (inconnue). 2) Moments en O, pour éliminer l'action inconnue en O : les deux forces, situées de part et d'autre de O, tendent à faire tourner la bride en sens opposés, donc 400 × 0,050 − B × 0,100 = 0, d'où B = 200 N. 3) Résultante verticale, en comptant positifs les efforts vers le haut : O + 400 + 200 = 0, donc O = −600 N : l'articulation retient la bride avec 600 N vers le bas. Le serrage vaut 200 N : ce montage divise l'effort du vérin par deux. Pour serrer davantage, il faudrait rapprocher B de O ou éloigner A.</div>\n<p>Le choix du point pour écrire les moments est stratégique : on le place là où passent les inconnues les plus nombreuses, pour qu'elles disparaissent de l'équation.</p>"
      },
      {
       "titre": "Résolution graphique",
       "contenu": "<p>Pour un solide soumis à des forces dans un plan, la <strong>résolution graphique</strong> est rapide et visuelle. Deux cas sont fréquents :</p>\n<ul>\n<li><strong>Solide soumis à deux forces</strong> : les deux forces sont directement opposées (même droite d'action, même intensité, sens contraires). C'est le cas d'une bielle articulée à ses deux bouts : l'effort est dirigé selon la bielle.</li>\n<li><strong>Solide soumis à trois forces non parallèles</strong> : les trois droites d'action sont <strong>concourantes</strong> en un même point, et les trois vecteurs forment un <strong>triangle fermé</strong> (le dynamique).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> résoudre un solide soumis à trois forces : 1) tracer les deux droites d'action connues ; leur intersection I est le point de concours ; 2) la troisième force passe par son point d'application et par I : sa direction est trouvée ; 3) choisir une échelle des forces (par exemple 1 cm pour 100 N) ; 4) tracer la force entièrement connue, puis par ses extrémités les parallèles aux deux autres directions ; 5) le triangle fermé donne, en mesurant, les intensités, et le sens de parcours du triangle (les flèches se suivent) donne les sens.</div>\n<p>Les logiciels de CAO et de simulation donnent les mêmes résultats, mais la méthode graphique reste utile pour vérifier un ordre de grandeur, et le croquis du triangle des forces aide à comprendre le cheminement des efforts.</p>"
      },
      {
       "titre": "Frottement et centre de gravité",
       "contenu": "<p>Dans la réalité, le contact entre deux solides comporte du <strong>frottement</strong>. Les <strong>lois de Coulomb</strong> le modélisent simplement : au contact, l'action se décompose en une composante normale N et une composante tangentielle T.</p>\n<ul>\n<li>tant qu'il n'y a <strong>pas de glissement</strong>, T ≤ f × N ;</li>\n<li>à la <strong>limite du glissement</strong> ou pendant le glissement, T = f × N, et T s'oppose au mouvement relatif.</li>\n</ul>\n<p>Le <strong>coefficient de frottement</strong> f dépend des matériaux, de l'état de surface et de la lubrification. L'angle φ tel que tan φ = f définit le <strong>cône de frottement</strong> : l'action de contact reste à l'intérieur de ce cône tant qu'il n'y a pas glissement.</p>\n<table>\n<thead><tr><th>Couple de matériaux (ordre de grandeur)</th><th>f à sec</th></tr></thead>\n<tbody>\n<tr><td>Acier sur acier</td><td>0,15 à 0,2</td></tr>\n<tr><td>Acier sur polyamide</td><td>0,2 à 0,4</td></tr>\n<tr><td>Caoutchouc sur acier</td><td>0,5 à 0,8</td></tr>\n<tr><td>Acier sur PTFE</td><td>0,04 à 0,1</td></tr>\n</tbody>\n</table>\n<p>Le <strong>centre de gravité</strong> G est le point d'application du poids. Pour un solide homogène symétrique, il est sur les plans de symétrie. Pour une pièce composée de volumes simples, sa position se calcule par barycentre : x<sub>G</sub> = Σ(m<sub>i</sub> × x<sub>i</sub>) / Σm<sub>i</sub>. Le logiciel de CAO donne directement G lorsque les matériaux sont affectés.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour un montage d'usinage, le serrage doit empêcher la pièce de glisser sous l'effort de coupe : l'effort de serrage nécessaire se calcule par T ≤ f × N, en prenant un coefficient f prudent (faible) et un coefficient de sécurité.</div>"
      }
     ],
     "points_cles": [
      "Une force se définit par son point d'application, sa direction, son sens et son intensité en newtons",
      "Le poids vaut P = m × g, appliqué au centre de gravité",
      "Le moment d'une force vaut F × d, avec d le bras de levier perpendiculaire, en N·m",
      "Isoler un solide, c'est recenser les seules actions extérieures qu'il subit",
      "Le PFS impose une résultante nulle et un moment résultant nul ; en plan, trois équations",
      "On écrit les moments au point où passent le plus d'inconnues",
      "Trois forces non parallèles en équilibre sont concourantes et forment un triangle fermé",
      "Coulomb : sans glissement T ≤ f × N ; au glissement T = f × N"
     ],
     "lexique": [
      {
       "terme": "Action mécanique",
       "def": "Cause capable de déformer un solide, de le mettre en mouvement ou de le maintenir au repos."
      },
      {
       "terme": "Force",
       "def": "Modèle d'une action mécanique localisée, représentée par un vecteur."
      },
      {
       "terme": "Newton (N)",
       "def": "Unité d'intensité d'une force."
      },
      {
       "terme": "Moment",
       "def": "Effet de rotation d'une force par rapport à un point, égal à la force multipliée par le bras de levier."
      },
      {
       "terme": "Bras de levier",
       "def": "Distance perpendiculaire entre un point et la droite d'action d'une force."
      },
      {
       "terme": "Isolement",
       "def": "Séparation fictive d'un solide de son environnement pour en faire le bilan des actions extérieures."
      },
      {
       "terme": "PFS",
       "def": "Principe fondamental de la statique : résultante et moment des actions extérieures nuls à l'équilibre."
      },
      {
       "terme": "Coefficient de frottement",
       "def": "Rapport entre l'effort tangentiel maximal et l'effort normal au contact."
      },
      {
       "terme": "Centre de gravité",
       "def": "Point d'application du poids d'un solide."
      }
     ]
    },
    {
     "id": "bmp3-energie-rdm",
     "titre": "Chaîne d'énergie et résistance des matériaux",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les formes d'énergie et les convertisseurs d'une chaîne d'énergie",
      "Calculer travail, puissance et rendement en translation et en rotation",
      "Utiliser le théorème de l'énergie cinétique dans un cas simple",
      "Reconnaître les sollicitations simples et calculer une contrainte de traction ou de compression",
      "Appliquer la loi de Hooke et vérifier une pièce avec un coefficient de sécurité"
     ],
     "sections": [
      {
       "titre": "Formes d'énergie et chaîne d'énergie",
       "contenu": "<p>Tout mécanisme motorisé reçoit de l'<strong>énergie</strong>, la transforme et la transmet jusqu'à l'effecteur qui agit sur la matière d'œuvre. L'énergie s'exprime en <strong>joules</strong> (J). Les formes rencontrées en mécanique sont :</p>\n<table>\n<thead><tr><th>Forme</th><th>Expression</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Cinétique de translation</td><td>E<sub>c</sub> = ½ m v<sup>2</sup></td><td>Chariot en mouvement</td></tr>\n<tr><td>Cinétique de rotation</td><td>E<sub>c</sub> = ½ J ω<sup>2</sup> (J : moment d'inertie en kg·m<sup>2</sup>)</td><td>Volant, disque de frein</td></tr>\n<tr><td>Potentielle de pesanteur</td><td>E<sub>p</sub> = m g h</td><td>Charge soulevée</td></tr>\n<tr><td>Potentielle élastique</td><td>E = ½ k x<sup>2</sup> (k : raideur en N/m)</td><td>Ressort comprimé</td></tr>\n<tr><td>Électrique</td><td>E = U I t</td><td>Batterie, réseau</td></tr>\n<tr><td>Hydraulique, pneumatique</td><td>E = p × V (pression × volume)</td><td>Fluide sous pression dans un vérin</td></tr>\n</tbody>\n</table>\n<p>La <strong>chaîne d'énergie</strong> décrit le cheminement de l'énergie en quatre fonctions : <strong>alimenter</strong> (réseau, batterie, compresseur), <strong>distribuer</strong> (contacteur, variateur, distributeur), <strong>convertir</strong> (moteur, vérin), <strong>transmettre</strong> (réducteur, courroie, vis-écrou) jusqu'à l'action. La <strong>chaîne d'information</strong>, en parallèle, acquiert les informations (capteurs), les traite (automate, microcontrôleur) et communique les ordres.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une même grandeur énergétique peut s'écrire comme le produit d'un « effort » et d'un « flux » : force × vitesse, couple × vitesse angulaire, tension × intensité, pression × débit. C'est l'analogie effort-flux, qui permet de traiter de la même façon les différentes technologies.</div>"
      },
      {
       "titre": "Travail, puissance et rendement",
       "contenu": "<p>Le <strong>travail</strong> d'une force constante F dont le point d'application se déplace de d dans sa direction vaut W = F × d (en J). Le travail d'un couple C pendant une rotation d'angle θ (en radians) vaut W = C × θ.</p>\n<p>La <strong>puissance</strong> est le travail fourni par unité de temps, en watts (W) :</p>\n<ul>\n<li>en translation : P = F × v (F en N, v en m/s) ;</li>\n<li>en rotation : P = C × ω (C en N·m, ω en rad/s) ;</li>\n<li>en électricité continue : P = U × I ;</li>\n<li>en hydraulique : P = p × q<sub>v</sub> (p en Pa, débit q<sub>v</sub> en m<sup>3</sup>/s).</li>\n</ul>\n<p>Chaque composant perd une partie de la puissance (frottements, échauffement). Le <strong>rendement</strong> η est le rapport de la puissance de sortie sur la puissance d'entrée : η = P<sub>s</sub> / P<sub>e</sub>, toujours inférieur à 1. Pour des composants en série, les rendements se multiplient.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir la puissance d'un moteur pour lever une charge. Charge de 50 kg levée à 0,2 m/s par un treuil, via un réducteur de rendement 0,85 et un tambour de rendement 0,95. 1) Force à vaincre : F = m g = 50 × 9,81 ≈ 490 N. 2) Puissance utile : P<sub>u</sub> = F × v = 490 × 0,2 ≈ 98 W. 3) Rendement global : η = 0,85 × 0,95 ≈ 0,81. 4) Puissance moteur nécessaire : P<sub>m</sub> = 98 / 0,81 ≈ 121 W. 5) On choisit dans le catalogue la puissance normalisée immédiatement supérieure, en tenant compte de l'accélération au démarrage.</div>"
      },
      {
       "titre": "Le théorème de l'énergie cinétique",
       "contenu": "<p>Le <strong>théorème de l'énergie cinétique</strong> indique que la variation de l'énergie cinétique d'un solide entre deux instants est égale à la somme des travaux des forces (intérieures et extérieures) qui s'exercent sur lui pendant ce temps : ΔE<sub>c</sub> = ΣW.</p>\n<p>Il permet par exemple de calculer une distance de freinage, l'effort d'un amortisseur de fin de course, ou l'énergie qu'un vérin doit absorber lorsqu'une charge en mouvement arrive en butée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un chariot de 20 kg arrive en fin de course à 0,5 m/s ; un amortisseur doit l'arrêter sur 10 mm. 1) Énergie cinétique : E<sub>c</sub> = ½ × 20 × 0,5<sup>2</sup> = 2,5 J. 2) Le travail de l'amortisseur doit absorber cette énergie : F<sub>moy</sub> × 0,010 = 2,5. 3) Effort moyen : F<sub>moy</sub> = 250 N. On choisit un amortisseur industriel capable d'absorber au moins 2,5 J par cycle, en vérifiant aussi l'énergie absorbée par heure donnée par le constructeur.</div>\n<p>Cette démarche montre aussi pourquoi les vitesses élevées sont dangereuses : l'énergie cinétique croît comme le carré de la vitesse. Doubler la vitesse d'un chariot multiplie par quatre l'énergie à dissiper en butée.</p>"
      },
      {
       "titre": "Les sollicitations simples et la notion de contrainte",
       "contenu": "<p>La <strong>résistance des matériaux</strong> (RdM) étudie comment une pièce se déforme et si elle résiste sous les efforts calculés en statique. On distingue cinq <strong>sollicitations simples</strong> :</p>\n<table>\n<thead><tr><th>Sollicitation</th><th>Effet</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Traction</td><td>Allongement</td><td>Tirant, câble, vis serrée</td></tr>\n<tr><td>Compression</td><td>Raccourcissement (risque de flambage si élancée)</td><td>Pied de table, tige de vérin poussant</td></tr>\n<tr><td>Cisaillement</td><td>Glissement de sections l'une sur l'autre</td><td>Goupille, axe d'articulation, rivet</td></tr>\n<tr><td>Torsion</td><td>Rotation des sections autour de l'axe</td><td>Arbre de transmission</td></tr>\n<tr><td>Flexion</td><td>Courbure</td><td>Poutre, bras en porte-à-faux, étagère</td></tr>\n</tbody>\n</table>\n<p>Pour comparer l'effort à la capacité du matériau, on calcule une <strong>contrainte</strong> : effort rapporté à la surface sur laquelle il se répartit. En traction ou compression simple : <strong>σ = F / S</strong>, en N/mm<sup>2</sup>, unité égale au mégapascal (1 MPa = 1 N/mm<sup>2</sup>). En cisaillement, τ = F / S, S étant la section cisaillée.</p>\n<p>Dans la réalité, une pièce subit souvent plusieurs sollicitations à la fois : un arbre de réducteur est fléchi par l'effort de la denture et tordu par le couple transmis ; un bras de robot est fléchi et parfois tordu. On parle alors de <strong>sollicitations composées</strong>. Le calcul à la main se limite en bac pro aux cas simples ; les cas composés se traitent avec un logiciel de simulation, dont il faut savoir interpréter les résultats. La compression d'une pièce longue et fine pose un problème particulier : avant d'atteindre la limite du matériau, elle peut <strong>flamber</strong>, c'est-à-dire fléchir brusquement sur le côté. Les tiges de vérins de grande course sont vérifiées au flambage à l'aide des abaques des constructeurs.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une goupille qui relie une chape à une tige est souvent cisaillée selon <strong>deux</strong> sections. L'effort se répartit sur 2 × S. Oublier ce facteur 2 conduit à surdimensionner, et l'erreur inverse (compter deux sections alors qu'il n'y en a qu'une) à une rupture.</div>"
      },
      {
       "titre": "Loi de Hooke, limite élastique et coefficient de sécurité",
       "contenu": "<p>Dans le domaine <strong>élastique</strong>, la déformation est proportionnelle à la contrainte et disparaît quand on retire l'effort. C'est la <strong>loi de Hooke</strong> : σ = E × ε, où ε = ΔL / L<sub>0</sub> est l'allongement relatif (sans unité) et E le <strong>module de Young</strong> du matériau (environ 210 000 MPa pour un acier, 70 000 MPa pour un alliage d'aluminium, quelques milliers de MPa pour les polymères techniques).</p>\n<p>Au-delà de la <strong>limite élastique</strong> R<sub>e</sub>, la déformation devient permanente (domaine plastique), puis la pièce casse à la <strong>résistance à la rupture</strong> R<sub>m</sub>. Pour garantir qu'une pièce reste élastique malgré les incertitudes (efforts mal connus, défauts, fatigue), on impose un <strong>coefficient de sécurité</strong> s : la contrainte maximale doit rester inférieure à la <strong>résistance pratique</strong> R<sub>pe</sub> = R<sub>e</sub> / s.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un tirant. Tige en acier S235 (R<sub>e</sub> = 235 MPa), diamètre 10 mm, longueur 400 mm, effort de traction 6 000 N, coefficient de sécurité imposé s = 3. 1) Section : S = π × 10<sup>2</sup> / 4 ≈ 78,5 mm<sup>2</sup>. 2) Contrainte : σ = 6 000 / 78,5 ≈ 76 MPa. 3) Résistance pratique : R<sub>pe</sub> = 235 / 3 ≈ 78 MPa. 4) σ ≤ R<sub>pe</sub> : la tige convient, de justesse. 5) Allongement : ε = 76 / 210 000 ≈ 0,00036 ; ΔL = 0,00036 × 400 ≈ 0,14 mm.</div>\n<p>Quand plusieurs sollicitations se combinent (flexion et torsion d'un arbre), on calcule une <strong>contrainte équivalente</strong> selon un critère (Tresca ou <strong>Von Mises</strong>) que l'on compare à R<sub>e</sub>. C'est cette contrainte de Von Mises qu'affichent les logiciels de simulation par défaut.</p>"
      },
      {
       "titre": "Flexion et rigidité : penser la forme",
       "contenu": "<p>En flexion, la contrainte est maximale sur les fibres les plus éloignées de l'axe neutre, et la <strong>déformation</strong> (la flèche) dépend fortement de la forme de la section, à travers son moment quadratique. Pour une section rectangulaire de largeur b et de hauteur h fléchie selon h, ce moment quadratique vaut b h<sup>3</sup> / 12 : doubler la hauteur rend la poutre huit fois plus rigide, alors que doubler la largeur ne la rend que deux fois plus rigide.</p>\n<p>Le concepteur en tire des règles de forme :</p>\n<ul>\n<li>placer la matière loin de l'axe neutre : profils en I, en U, tubes, nervures hautes ;</li>\n<li>orienter les sections dans le bon sens (une règle posée à plat plie, posée sur chant ne plie presque pas) ;</li>\n<li>éviter les variations brusques de section et les angles vifs, où les contraintes se concentrent : prévoir des congés de raccordement ;</li>\n<li>pour les pièces plastiques, préférer des parois minces nervurées à des parois épaisses.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour une pièce imprimée en PLA qui fléchit trop, augmenter le taux de remplissage alourdit et rallonge l'impression pour un gain modeste. Ajouter une nervure haute au bon endroit, ou réorienter la pièce pour que les couches travaillent dans le bon sens, est souvent bien plus efficace.</div>"
      }
     ],
     "points_cles": [
      "La chaîne d'énergie : alimenter, distribuer, convertir, transmettre ; la chaîne d'information : acquérir, traiter, communiquer",
      "P = F × v en translation, P = C × ω en rotation, en watts",
      "Le rendement global d'une chaîne est le produit des rendements",
      "Théorème de l'énergie cinétique : la variation d'énergie cinétique égale la somme des travaux",
      "Contrainte normale σ = F / S en MPa (N/mm²)",
      "Loi de Hooke σ = E × ε dans le domaine élastique",
      "Condition de résistance : σ ≤ Re / s",
      "En flexion, la hauteur de section compte bien plus que la largeur ; on évite les angles vifs"
     ],
     "lexique": [
      {
       "terme": "Joule (J)",
       "def": "Unité d'énergie et de travail."
      },
      {
       "terme": "Watt (W)",
       "def": "Unité de puissance : un joule par seconde."
      },
      {
       "terme": "Rendement",
       "def": "Rapport de la puissance de sortie à la puissance d'entrée d'un composant."
      },
      {
       "terme": "Chaîne d'énergie",
       "def": "Ensemble des fonctions qui alimentent, distribuent, convertissent et transmettent l'énergie jusqu'à l'effecteur."
      },
      {
       "terme": "Contrainte",
       "def": "Effort intérieur rapporté à la surface, en MPa."
      },
      {
       "terme": "Module de Young",
       "def": "Coefficient de proportionnalité entre contrainte et allongement relatif dans le domaine élastique."
      },
      {
       "terme": "Limite élastique Re",
       "def": "Contrainte au-delà de laquelle la déformation devient permanente."
      },
      {
       "terme": "Coefficient de sécurité",
       "def": "Facteur qui divise la limite élastique pour obtenir la contrainte admissible."
      },
      {
       "terme": "Von Mises",
       "def": "Critère qui combine plusieurs contraintes en une contrainte équivalente comparable à Re."
      },
      {
       "terme": "Flambage",
       "def": "Instabilité d'une pièce élancée comprimée qui fléchit brusquement."
      }
     ]
    },
    {
     "id": "bmp3-solutions-constructives",
     "titre": "Solutions constructives : assemblages, guidages, lubrification et étanchéité",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Choisir une solution d'assemblage démontable ou permanent et la représenter correctement",
      "Concevoir un guidage en rotation par coussinets ou par roulements, avec ses arrêts axiaux",
      "Concevoir un guidage en translation par glissement ou par éléments roulants",
      "Choisir un mode de lubrification et une solution d'étanchéité adaptés",
      "Valider un composant standard à l'aide d'un catalogue constructeur"
     ],
     "sections": [
      {
       "titre": "Surfaces fonctionnelles et réalisation d'une liaison",
       "contenu": "<p>Une liaison mécanique se réalise concrètement par des <strong>surfaces fonctionnelles</strong> : les surfaces de contact entre pièces qui assurent la mise en position, le guidage ou la transmission d'efforts. La forme, la précision et l'état de ces surfaces sont décisifs ; le reste de la pièce sert à relier les surfaces fonctionnelles entre elles avec assez de rigidité.</p>\n<p>Pour réaliser une liaison, le concepteur répond à trois questions :</p>\n<ol>\n<li><strong>Mise en position</strong> : quelles surfaces positionnent les pièces l'une par rapport à l'autre (appui plan, centrage cylindrique, pions de positionnement) ?</li>\n<li><strong>Maintien en position</strong> : quels éléments empêchent les pièces de se séparer (vis, écrous, anneaux élastiques, serrage) ?</li>\n<li><strong>Conditions de fonctionnement</strong> : quels jeux, quelle lubrification, quelle protection contre la poussière et les fuites ?</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on ne met jamais en position une pièce deux fois dans la même direction (par exemple deux centrages cylindriques longs coaxiaux sur deux pièces différentes) : c'est l'<strong>hyperstatisme</strong>, qui impose des tolérances très serrées ou provoque des contraintes de montage.</div>"
      },
      {
       "titre": "Les assemblages",
       "contenu": "<p>Un <strong>assemblage</strong> réalise une liaison encastrement entre deux pièces. Il peut être <strong>démontable</strong> ou <strong>permanent</strong>.</p>\n<table>\n<thead><tr><th>Solution</th><th>Type</th><th>Points d'attention</th></tr></thead>\n<tbody>\n<tr><td>Vis d'assemblage (vis CHC, vis H) dans un taraudage</td><td>Démontable</td><td>Longueur de vissage suffisante (environ 1 à 1,5 fois le diamètre dans l'acier, davantage dans l'aluminium ou le plastique)</td></tr>\n<tr><td>Boulon (vis + écrou)</td><td>Démontable</td><td>Accès des deux côtés ; freinage si vibrations</td></tr>\n<tr><td>Goupilles, pions de centrage</td><td>Démontable</td><td>Positionnent précisément ; les vis ne font que maintenir</td></tr>\n<tr><td>Inserts filetés (à chaud, à visser, à sertir)</td><td>Démontable</td><td>Indispensables pour visser durablement dans un plastique ou une pièce imprimée</td></tr>\n<tr><td>Clips, encliquetage</td><td>Démontable ou non</td><td>Déformation élastique ; adapté aux pièces plastiques</td></tr>\n<tr><td>Soudage, brasage</td><td>Permanent</td><td>Déformations thermiques, matériaux compatibles</td></tr>\n<tr><td>Collage</td><td>Permanent</td><td>Préparation des surfaces, travail en cisaillement plutôt qu'en pelage</td></tr>\n<tr><td>Rivetage, sertissage</td><td>Permanent</td><td>Accès de l'outil</td></tr>\n</tbody>\n</table>\n<p>Les vis sont désignées par leur type, leur diamètre nominal et leur longueur, par exemple « vis CHC M6 × 20, classe 8.8 ». Le perçage de passage d'une vis M6 vaut en général 6,4 ou 6,6 mm selon la série choisie ; un lamage reçoit la tête d'une vis CHC.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une vis ne doit pas servir à positionner : le jeu du trou de passage laisse la pièce bouger de plusieurs dixièmes. Quand la position compte, on ajoute deux pions de centrage.</div>"
      },
      {
       "titre": "Guidage en rotation",
       "contenu": "<p>Un guidage en rotation réalise une liaison pivot. Deux grandes familles existent :</p>\n<ul>\n<li><strong>Par glissement</strong> : l'arbre tourne dans un <strong>coussinet</strong> (bague en bronze, en polymère autolubrifiant, en bronze fritté imprégné d'huile). Solution simple, économique, silencieuse, adaptée aux vitesses faibles ou aux mouvements oscillants. On la vérifie par la pression de contact p = F / (d × L) et le produit p × V, comparés aux valeurs admissibles du catalogue.</li>\n<li><strong>Par éléments roulants</strong> : les <strong>roulements</strong> (à billes, à rouleaux cylindriques, à rouleaux coniques, à aiguilles) réduisent fortement le frottement et supportent des vitesses élevées.</li>\n</ul>\n<table>\n<thead><tr><th>Roulement</th><th>Charge radiale</th><th>Charge axiale</th><th>Usage typique</th></tr></thead>\n<tbody>\n<tr><td>Rigide à billes</td><td>Moyenne</td><td>Faible à moyenne, deux sens</td><td>Le plus courant : moteurs, réducteurs, petits mécanismes</td></tr>\n<tr><td>À rouleaux cylindriques</td><td>Forte</td><td>Très faible ou nulle</td><td>Fortes charges radiales</td></tr>\n<tr><td>À rouleaux coniques</td><td>Forte</td><td>Forte, un sens</td><td>Montés par paire : moyeux de roue</td></tr>\n<tr><td>À aiguilles</td><td>Forte</td><td>Nulle</td><td>Encombrement radial réduit</td></tr>\n</tbody>\n</table>\n<p>Pour un arbre guidé par deux roulements rigides à billes, la règle classique est : la bague qui <strong>tourne par rapport à la charge</strong> est montée serrée ; l'autre est montée glissante. Un seul roulement est arrêté axialement dans les deux sens, l'autre est libre axialement pour accepter les dilatations.</p>\n<p>Les <strong>arrêts axiaux</strong> les plus fréquents sont : l'épaulement usiné sur l'arbre ou dans l'alésage, l'<strong>anneau élastique</strong> (circlip) logé dans une gorge, l'entretoise, l'écrou à encoches avec sa rondelle frein, et le couvercle vissé qui vient pincer la bague extérieure. Sur le dessin d'ensemble, chacun de ces éléments se repère à sa forme caractéristique ; en maquette numérique, les anneaux élastiques et écrous à encoches viennent de la bibliothèque standard avec leur gorge ou leur filetage associés. La hauteur des épaulements doit respecter les cotes données par le fabricant du roulement, pour que la bague prenne bien appui sans frotter sur l'autre bague.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un montage de roulements sur un dessin : 1) repérer la bague tournante (intérieure si l'arbre tourne et la charge est fixe) ; 2) vérifier qu'elle est arrêtée des deux côtés (épaulement d'arbre, anneau élastique, écrou à encoches) ; 3) repérer le roulement « fixe » : sa bague extérieure doit aussi être arrêtée des deux côtés dans le logement ; 4) vérifier que l'autre roulement a une bague extérieure libre axialement ; 5) contrôler la présence d'une étanchéité et le mode de lubrification.</div>"
      },
      {
       "titre": "Guidage en translation",
       "contenu": "<p>Un guidage en translation réalise une liaison glissière (ou pivot glissant si la rotation n'est pas bloquée). Les solutions courantes sont :</p>\n<ul>\n<li><strong>Colonnes et bagues</strong> : deux colonnes cylindriques parallèles guidant un coulisseau par bagues lisses ou à billes ; la seconde colonne bloque la rotation.</li>\n<li><strong>Queue d'aronde, glissières prismatiques</strong> : solution d'usinage traditionnelle, rattrapage de jeu par lardon.</li>\n<li><strong>Rails et patins à recirculation de billes</strong> : composants du commerce très rigides et précis, employés en machines-outils, robots cartésiens, imprimantes 3D.</li>\n<li><strong>Galets sur profilé</strong> : solution économique pour des charges modérées.</li>\n</ul>\n<p>Un guidage par glissement présente un risque d'<strong>arc-boutement</strong> : si l'effort moteur est appliqué trop loin de l'axe du guidage et si la longueur de guidage est faible, le frottement bloque le coulisseau, quelle que soit la force exercée. On l'évite avec un rapport longueur de guidage / diamètre suffisant (souvent au moins 1,5 à 2) et en rapprochant l'effort de l'axe.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un prototype de tiroir imprimé en 3D qui se bloque en biais, la cause est presque toujours un guidage trop court par rapport à la largeur du tiroir. Allonger les glissières règle le problème mieux que d'augmenter le jeu.</div>"
      },
      {
       "titre": "Lubrification et étanchéité",
       "contenu": "<p>La <strong>lubrification</strong> réduit le frottement et l'usure, évacue la chaleur et protège de la corrosion. On utilise :</p>\n<ul>\n<li>la <strong>graisse</strong> : facile à retenir, adaptée aux roulements à vitesse modérée, souvent « à vie » dans des roulements protégés ;</li>\n<li>l'<strong>huile</strong> : par bain, barbotage ou circulation, pour les vitesses élevées et les engrenages de réducteurs ;</li>\n<li>les matériaux <strong>autolubrifiants</strong> (bronze fritté, polymères chargés PTFE) : sans entretien.</li>\n</ul>\n<p>L'<strong>étanchéité</strong> empêche le lubrifiant de sortir et les impuretés d'entrer. On distingue l'étanchéité <strong>statique</strong> entre pièces fixes (joint plat, joint torique dans une gorge, pâte d'étanchéité) et l'étanchéité <strong>dynamique</strong> entre pièces en mouvement (joint à lèvre sur un arbre tournant, joint de tige de vérin, chicanes, roulements à flasques ou à joints intégrés).</p>\n<table>\n<thead><tr><th>Situation</th><th>Solution typique</th></tr></thead>\n<tbody>\n<tr><td>Couvercle de carter fixe</td><td>Joint torique en gorge ou joint plat</td></tr>\n<tr><td>Sortie d'arbre tournant de réducteur</td><td>Joint à lèvre sur portée rectifiée</td></tr>\n<tr><td>Roulement graissé à vie</td><td>Roulement à joints intégrés (suffixe 2RS selon les fabricants)</td></tr>\n<tr><td>Ambiance très poussiéreuse</td><td>Joint à lèvre plus déflecteur ou chicane</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la gorge d'un joint torique a des dimensions précises (largeur, profondeur, état de surface) données par le fabricant en fonction de la section du joint. Une gorge « à l'œil » donne une fuite ou un joint écrasé.</div>"
      },
      {
       "titre": "Valider avec un catalogue constructeur",
       "contenu": "<p>Les composants standard se <strong>choisissent</strong> et se <strong>valident</strong> dans les catalogues constructeurs, papier ou en ligne. Le technicien doit savoir y trouver les données technico-économiques : dimensions, charges admissibles, vitesses limites, durée de vie, masse, prix, délai.</p>\n<p>Pour un roulement, le catalogue donne en particulier la <strong>charge dynamique de base</strong> C et la <strong>charge statique de base</strong> C<sub>0</sub>. La durée de vie nominale d'un roulement à billes, en millions de tours, s'estime par L<sub>10</sub> = (C / P)<sup>3</sup>, où P est la charge équivalente appliquée. La durée en heures s'obtient en divisant par la vitesse : L<sub>10h</sub> = L<sub>10</sub> × 10<sup>6</sup> / (60 × N).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un roulement rigide à billes de charge dynamique C = 13 500 N supporte P = 1 500 N à 1 000 tr/min. 1) C / P = 9. 2) L<sub>10</sub> = 9<sup>3</sup> = 729 millions de tours. 3) L<sub>10h</sub> = 729 × 10<sup>6</sup> / (60 × 1 000) ≈ 12 150 heures. 4) Comparer à la durée demandée par le cahier des charges ; si elle est insuffisante, choisir un roulement de charge C plus élevée.</div>\n<p>Les catalogues en ligne fournissent aussi les <strong>modèles 3D</strong> des composants à intégrer dans la maquette : on vérifie que la référence téléchargée correspond exactement à la référence choisie (variante, options, longueur).</p>"
      }
     ],
     "points_cles": [
      "Une liaison se réalise par des surfaces fonctionnelles : mise en position, maintien, conditions de fonctionnement",
      "On évite de mettre en position deux fois dans la même direction (hyperstatisme)",
      "Les vis maintiennent, les pions positionnent ; dans le plastique, on utilise des inserts",
      "Guidage en rotation par coussinets (simple, lent) ou par roulements (rapide, faible frottement)",
      "Un seul roulement est arrêté axialement dans les deux sens, l'autre reste libre axialement",
      "Un guidage en translation trop court s'arc-boute",
      "Étanchéité statique (joint torique, joint plat) et dynamique (joint à lèvre)",
      "Les catalogues valident un composant : pour un roulement à billes, L10 = (C/P)³ en millions de tours"
     ],
     "lexique": [
      {
       "terme": "Surface fonctionnelle",
       "def": "Surface de contact qui assure une fonction : positionnement, guidage, transmission d'efforts."
      },
      {
       "terme": "Hyperstatisme",
       "def": "Situation où une pièce est positionnée plusieurs fois dans la même direction."
      },
      {
       "terme": "Pion de centrage",
       "def": "Élément cylindrique ajusté qui positionne précisément deux pièces."
      },
      {
       "terme": "Insert fileté",
       "def": "Douille taraudée insérée dans une pièce tendre pour y visser durablement."
      },
      {
       "terme": "Coussinet",
       "def": "Bague de frottement réalisant un guidage en rotation par glissement."
      },
      {
       "terme": "Roulement",
       "def": "Composant à éléments roulants réalisant un guidage avec faible frottement."
      },
      {
       "terme": "Arc-boutement",
       "def": "Blocage d'un guidage par frottement quand l'effort est trop excentré."
      },
      {
       "terme": "Joint à lèvre",
       "def": "Joint d'étanchéité dynamique frottant sur un arbre tournant."
      },
      {
       "terme": "Joint torique",
       "def": "Anneau élastique de section circulaire logé dans une gorge."
      },
      {
       "terme": "Charge dynamique de base",
       "def": "Charge donnée par le constructeur qui sert au calcul de durée de vie d'un roulement."
      }
     ]
    },
    {
     "id": "bmp3-transmission-actionneurs-capteurs",
     "titre": "Transmission de puissance, actionneurs et capteurs",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Choisir un élément de transmission : accouplement, embrayage, limiteur de couple, frein",
      "Calculer un rapport de transmission par engrenages, poulies-courroie, chaîne ou train épicycloïdal",
      "Identifier les actionneurs électriques, pneumatiques et hydrauliques et leurs chaînes de commande",
      "Dimensionner un vérin pneumatique simple",
      "Choisir et implanter un capteur adapté à une grandeur à détecter ou à mesurer"
     ],
     "sections": [
      {
       "titre": "Accouplements, embrayages, limiteurs et freins",
       "contenu": "<p>Entre un moteur et la machine qu'il entraîne, plusieurs composants transmettent ou interrompent la puissance :</p>\n<table>\n<thead><tr><th>Composant</th><th>Fonction</th><th>Exemple d'usage</th></tr></thead>\n<tbody>\n<tr><td>Accouplement rigide</td><td>Relier deux arbres parfaitement alignés</td><td>Arbres sur un même bâti usiné</td></tr>\n<tr><td>Accouplement élastique</td><td>Relier deux arbres en tolérant de petits défauts d'alignement et en amortissant les à-coups</td><td>Moteur et pompe, moteur pas à pas et vis à billes</td></tr>\n<tr><td>Joint de cardan</td><td>Transmettre la rotation entre arbres concourants formant un angle</td><td>Transmissions angulaires</td></tr>\n<tr><td>Embrayage</td><td>Relier ou séparer à la demande deux arbres pendant le fonctionnement</td><td>Démarrage progressif sous charge</td></tr>\n<tr><td>Limiteur de couple</td><td>Glisser ou se désaccoupler au-delà d'un couple réglé</td><td>Protection d'un convoyeur en cas de bourrage</td></tr>\n<tr><td>Frein</td><td>Ralentir, arrêter ou maintenir à l'arrêt</td><td>Frein de maintien d'un axe vertical</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un axe vertical (monte-charge, axe Z de robot) retombe sous son propre poids en cas de coupure d'énergie si rien ne le retient. Un frein de maintien à manque de courant, ou une vis irréversible, est alors une exigence de sécurité, pas une option.</div>"
      },
      {
       "titre": "Engrenages, poulies et chaînes",
       "contenu": "<p>Un <strong>réducteur</strong> diminue la vitesse et augmente le couple ; un multiplicateur fait l'inverse. Le <strong>rapport de transmission</strong> r = ω<sub>sortie</sub> / ω<sub>entrée</sub> s'exprime selon la technologie :</p>\n<ul>\n<li><strong>Engrenage</strong> (deux roues dentées) : r = Z<sub>menante</sub> / Z<sub>menée</sub>, Z étant le nombre de dents. Le sens de rotation s'inverse à chaque engrènement extérieur.</li>\n<li><strong>Train d'engrenages</strong> : r = produit des Z menantes / produit des Z menées, au signe près.</li>\n<li><strong>Poulies-courroie</strong> : r = d<sub>menante</sub> / d<sub>menée</sub> (diamètres primitifs), même sens de rotation. Une courroie crantée (synchrone) ne glisse pas.</li>\n<li><strong>Pignons-chaîne</strong> : r = Z<sub>menant</sub> / Z<sub>mené</sub>.</li>\n<li><strong>Roue et vis sans fin</strong> : r = nombre de filets de la vis / Z de la roue ; grands rapports en un seul étage, souvent irréversible, rendement plus faible.</li>\n</ul>\n<p>Pour une roue dentée à denture droite, le diamètre primitif vaut d = m × Z, où m est le <strong>module</strong> (en mm), qui caractérise la taille des dents. Deux roues ne peuvent engrener que si elles ont le même module, et leur entraxe vaut a = (d<sub>1</sub> + d<sub>2</sub>) / 2.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réducteur à deux étages : étage 1, Z<sub>1</sub> = 18 menante, Z<sub>2</sub> = 54 ; étage 2, Z<sub>3</sub> = 20 menante, Z<sub>4</sub> = 60. Moteur à 1 500 tr/min, couple 2 N·m, rendement global 0,9. 1) r = (18 × 20) / (54 × 60) = 360 / 3 240 = 1/9. 2) Vitesse de sortie : 1 500 / 9 ≈ 167 tr/min. 3) Couple de sortie : C<sub>s</sub> = C<sub>e</sub> × η / r = 2 × 0,9 × 9 = 16,2 N·m. 4) Entraxe de l'étage 1 avec un module 1,5 : d<sub>1</sub> = 27 mm, d<sub>2</sub> = 81 mm, a = 54 mm.</div>\n<p>Le <strong>train épicycloïdal</strong> (planétaire, satellites, porte-satellites, couronne) offre de grands rapports dans un faible encombrement, avec entrée et sortie coaxiales : on le trouve dans les motoréducteurs compacts, les visseuses, les boîtes automatiques.</p>"
      },
      {
       "titre": "Transformer le mouvement",
       "contenu": "<p>De nombreux mécanismes transforment une rotation en translation, ou l'inverse :</p>\n<ul>\n<li><strong>Vis-écrou</strong> : à glissement (vis trapézoïdale, économique, souvent irréversible) ou à billes (rendement élevé, précise, réversible) ;</li>\n<li><strong>Pignon-crémaillère</strong> : grandes courses, rendement élevé ;</li>\n<li><strong>Bielle-manivelle</strong> : rotation continue transformée en translation alternative (compresseur, scie alternative) ;</li>\n<li><strong>Came et poussoir</strong> : loi de mouvement imposée par le profil de la came ;</li>\n<li><strong>Systèmes articulés</strong> (genouillère, parallélogramme) : forte multiplication d'effort en fin de course, mouvement de translation circulaire.</li>\n</ul>\n<p>Une transmission est dite <strong>réversible</strong> si la sortie peut entraîner l'entrée. Une vis trapézoïdale à faible pas, avec frottement, est souvent <strong>irréversible</strong> : une charge posée sur l'écrou ne fait pas tourner la vis. C'est utile pour un vérin de levage manuel ; c'est pénalisant pour le rendement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les montages de serrage utilisent souvent des genouillères : en fin de course, quand les bras sont presque alignés, un petit effort de manœuvre produit un très grand effort de serrage, et le montage reste verrouillé même si l'effort de manœuvre disparaît.</div>"
      },
      {
       "titre": "Les actionneurs et leur commande",
       "contenu": "<p>L'<strong>actionneur</strong> convertit une énergie de commande en énergie mécanique.</p>\n<table>\n<thead><tr><th>Technologie</th><th>Actionneurs</th><th>Pré-actionneur (distribution)</th><th>Caractéristiques</th></tr></thead>\n<tbody>\n<tr><td>Électrique</td><td>Moteur asynchrone, moteur à courant continu, moteur pas à pas, servomoteur brushless, motoréducteur</td><td>Contacteur, variateur de vitesse, carte de commande</td><td>Facile à piloter et à mesurer, précis</td></tr>\n<tr><td>Pneumatique</td><td>Vérin simple ou double effet, vérin rotatif, ventouse</td><td>Distributeur (par exemple 5/2 monostable)</td><td>Rapide, simple, propre ; positionnement intermédiaire difficile, air compressible</td></tr>\n<tr><td>Hydraulique</td><td>Vérin, moteur hydraulique</td><td>Distributeur hydraulique</td><td>Très grands efforts sous faible encombrement ; risques de fuite</td></tr>\n</tbody>\n</table>\n<p>Parmi les moteurs électriques, le choix dépend du besoin de positionnement. Le <strong>moteur asynchrone</strong> triphasé, robuste et économique, entraîne convoyeurs, pompes et ventilateurs, sa vitesse étant réglée par un variateur. Le <strong>moteur pas à pas</strong> avance d'un angle fixe à chaque impulsion (souvent 1,8°, soit 200 pas par tour) : il positionne sans capteur tant qu'il ne « perd » pas de pas, ce qui en fait le moteur des imprimantes 3D et des petites machines. Le <strong>servomoteur</strong> est équipé d'un codeur et piloté en boucle fermée : il corrige en permanence sa position, ce qui le rend adapté aux robots et aux axes rapides et précis. Le catalogue donne, pour chacun, couple nominal, vitesse nominale, couple de maintien et inertie du rotor.</p>\n<p>La chaîne pneumatique type comprend : compresseur, traitement de l'air (filtre, régulateur de pression, parfois lubrificateur), distributeur, régleurs de débit (pour régler la vitesse du vérin), vérin. Les <strong>alternateurs</strong> et génératrices font la conversion inverse, de l'énergie mécanique vers l'énergie électrique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dimensionner un vérin double effet qui doit pousser 500 N avec un réseau à 6 bar (0,6 MPa). 1) Effort théorique en poussée : F = p × S, donc S = F / p. 2) Prendre une marge pour frottements et dynamique : on vise souvent un taux de charge d'environ 0,7, donc F<sub>théorique</sub> = 500 / 0,7 ≈ 714 N. 3) S = 714 / 0,6 ≈ 1 190 mm<sup>2</sup>. 4) Diamètre : D = √(4 S / π) ≈ 39 mm. 5) Choisir le diamètre normalisé supérieur : 40 mm. 6) En traction, la section utile est réduite par la tige : vérifier si l'effort de retour est suffisant.</div>"
      },
      {
       "titre": "Les capteurs",
       "contenu": "<p>Un <strong>capteur</strong> transforme une grandeur physique (position, présence, force, température, pression…) en un signal exploitable par la partie commande. On distingue :</p>\n<ul>\n<li>les <strong>détecteurs</strong> (tout ou rien) : ils indiquent une présence ou une position atteinte (capteur fin de course mécanique, capteur inductif pour les métaux, capacitif pour tous matériaux, photoélectrique, capteur magnétique ILS ou à effet Hall monté sur un vérin) ;</li>\n<li>les capteurs <strong>analogiques ou numériques</strong> : ils mesurent une valeur (codeur incrémental ou absolu pour une position angulaire, capteur de force à jauges de contrainte, sonde de température, capteur de pression, capteur de distance à ultrasons ou laser).</li>\n</ul>\n<table>\n<thead><tr><th>Caractéristique</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Étendue de mesure</td><td>Plage de valeurs mesurables</td></tr>\n<tr><td>Portée (détecteur)</td><td>Distance maximale de détection</td></tr>\n<tr><td>Résolution</td><td>Plus petite variation détectable</td></tr>\n<tr><td>Précision</td><td>Écart maximal entre la valeur mesurée et la valeur vraie</td></tr>\n<tr><td>Temps de réponse</td><td>Délai de réaction à une variation</td></tr>\n<tr><td>Sortie</td><td>Tout ou rien (PNP, NPN), analogique (0-10 V, 4-20 mA), numérique</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la portée d'un capteur inductif dépend du matériau détecté : elle est réduite sur l'aluminium ou le laiton par rapport à l'acier. Il faut aussi respecter les distances d'implantation données par le constructeur (montage noyé ou non noyé) sous peine de détection parasite par le support.</div>\n<p>Le modeleur 3D doit <strong>prévoir l'implantation</strong> des capteurs dans la maquette : support réglable, accès au réglage, passage du câble, protection contre les chocs.</p>"
      },
      {
       "titre": "Relevés expérimentaux",
       "contenu": "<p>Le référentiel prévoit la mise en œuvre de capteurs pour réaliser des <strong>relevés expérimentaux</strong> : mesurer sur un prototype ou un système réel les grandeurs que l'on a calculées ou simulées, pour valider le modèle.</p>\n<ol>\n<li>Définir la grandeur à mesurer et la précision nécessaire.</li>\n<li>Choisir le capteur et la chaîne d'acquisition (carte d'acquisition, microcontrôleur, centrale de mesure).</li>\n<li>Implanter le capteur sans perturber le phénomène (un capteur lourd fixé sur une pièce légère change sa dynamique).</li>\n<li>Réaliser plusieurs essais dans les mêmes conditions.</li>\n<li>Comparer mesures et prévisions ; expliquer les écarts (frottements négligés, rendements estimés, déformation des pièces imprimées).</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une simulation n'est crédible que si elle a été confrontée au réel au moins une fois. Les écarts mesurés servent à corriger les hypothèses pour les projets suivants.</div>\n<p>Par exemple, le temps de sortie d'un vérin mesuré à l'aide de deux capteurs de position et d'un chronomètre électronique permet de vérifier la vitesse simulée et d'ajuster les régleurs de débit.</p>"
      }
     ],
     "points_cles": [
      "Accouplements, embrayages, limiteurs de couple et freins relient, séparent ou protègent les transmissions",
      "Un axe vertical motorisé doit être retenu en cas de coupure d'énergie",
      "Engrenage : r = Z menante / Z menée ; poulies : r = d menante / d menée ; d = m × Z",
      "Couple de sortie d'un réducteur : Cs = Ce × η / r",
      "Vis-écrou, pignon-crémaillère, bielle-manivelle, came et genouillère transforment les mouvements",
      "Actionneurs électriques, pneumatiques et hydrauliques sont pilotés par un pré-actionneur",
      "Un vérin se dimensionne par F = p × S avec un taux de charge",
      "Les capteurs se choisissent sur leur étendue, résolution, précision, sortie, et s'implantent selon le constructeur"
     ],
     "lexique": [
      {
       "terme": "Accouplement",
       "def": "Composant qui relie deux arbres pour transmettre la rotation."
      },
      {
       "terme": "Limiteur de couple",
       "def": "Dispositif qui interrompt la transmission au-delà d'un couple réglé."
      },
      {
       "terme": "Rapport de transmission",
       "def": "Rapport de la vitesse de sortie à la vitesse d'entrée."
      },
      {
       "terme": "Module",
       "def": "Grandeur normalisée qui caractérise la taille des dents d'un engrenage."
      },
      {
       "terme": "Train épicycloïdal",
       "def": "Réducteur à planétaire, satellites et couronne, à entrée et sortie coaxiales."
      },
      {
       "terme": "Irréversibilité",
       "def": "Propriété d'une transmission que la sortie ne peut pas entraîner."
      },
      {
       "terme": "Actionneur",
       "def": "Composant qui convertit une énergie en action mécanique."
      },
      {
       "terme": "Distributeur",
       "def": "Pré-actionneur qui dirige le fluide vers les chambres d'un vérin."
      },
      {
       "terme": "Détecteur",
       "def": "Capteur tout ou rien qui signale une présence ou une position."
      },
      {
       "terme": "Codeur",
       "def": "Capteur qui mesure une position angulaire ou linéaire sous forme numérique."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Matériaux, procédés, simulation, spécification et prototypage",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmp3-materiaux-traitements",
     "titre": "Matériaux, désignations normalisées et traitements",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Classer les matériaux en familles et citer leurs propriétés caractéristiques",
      "Lire et écrire les désignations normalisées courantes des aciers, fontes, alliages d'aluminium et de cuivre, et des polymères",
      "Interpréter les caractéristiques mécaniques issues des essais : module de Young, Re, Rm, allongement, dureté, résilience",
      "Connaître les traitements thermiques, de surface et mécaniques et leurs effets",
      "Choisir un matériau en croisant fonction, géométrie, procédé et coût, à l'aide d'un graphe ou d'une base de données"
     ],
     "sections": [
      {
       "titre": "Les familles de matériaux",
       "contenu": "<p>Les matériaux utilisés en conception mécanique se répartissent en quatre grandes familles :</p>\n<table>\n<thead><tr><th>Famille</th><th>Exemples</th><th>Points forts</th><th>Points faibles</th></tr></thead>\n<tbody>\n<tr><td>Métalliques</td><td>Aciers, fontes, aluminium, cuivre et alliages, titane</td><td>Résistance, rigidité, ductilité, conductivité, recyclabilité</td><td>Masse (aciers), corrosion, coût de mise en forme</td></tr>\n<tr><td>Polymères (plastiques et élastomères)</td><td>PP, PE, PA, POM, PC, ABS, PLA, silicone</td><td>Légèreté, mise en forme facile, isolation, résistance chimique</td><td>Rigidité et tenue en température faibles, fluage</td></tr>\n<tr><td>Composites</td><td>Fibres de verre ou de carbone dans une résine, polymères chargés</td><td>Excellent rapport rigidité/masse, formes intégrées</td><td>Coût, recyclage difficile, comportement orienté</td></tr>\n<tr><td>Céramiques et verres</td><td>Alumine, carbures, verre</td><td>Dureté, tenue en température, isolation</td><td>Fragilité, mise en forme difficile</td></tr>\n</tbody>\n</table>\n<p>Les métaux sont obtenus par des procédés de <strong>première transformation</strong> (élaboration, coulée, laminage, filage, tréfilage) qui livrent des demi-produits : tôles, barres, profilés, tubes, fils. Les polymères sont livrés en granulés, en plaques, en filaments ou en résines liquides. Le choix du demi-produit influence directement la forme de la pièce et le procédé.</p>\n<table>\n<thead><tr><th>Matériau</th><th>Masse volumique (g/cm<sup>3</sup>)</th><th>Module de Young (ordre de grandeur, MPa)</th></tr></thead>\n<tbody>\n<tr><td>Acier</td><td>7,85</td><td>210 000</td></tr>\n<tr><td>Alliage d'aluminium</td><td>2,7</td><td>70 000</td></tr>\n<tr><td>Alliage de titane</td><td>4,4 à 4,5</td><td>110 000</td></tr>\n<tr><td>Polyamide 6</td><td>environ 1,14</td><td>2 000 à 3 000 (sec)</td></tr>\n<tr><td>PLA</td><td>environ 1,24</td><td>3 000 à 3 500</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Les désignations normalisées",
       "contenu": "<p>Chaque matériau est désigné par un code normalisé qui doit figurer dans le cartouche et la nomenclature. Une désignation vague (« acier », « alu », « plastique ») est inacceptable sur un dossier de définition.</p>\n<table>\n<thead><tr><th>Famille</th><th>Exemple</th><th>Lecture</th></tr></thead>\n<tbody>\n<tr><td>Acier de construction d'usage général</td><td>S235JR</td><td>S : acier de construction ; 235 : limite élastique minimale en MPa ; JR : qualité de résilience</td></tr>\n<tr><td>Acier non allié pour traitement thermique</td><td>C45</td><td>C : non allié ; 45 : 0,45 % de carbone (teneur × 100)</td></tr>\n<tr><td>Acier faiblement allié</td><td>42CrMo4</td><td>0,42 % de carbone ; chrome et molybdène ; 4 : teneur en chrome × 4, soit environ 1 %</td></tr>\n<tr><td>Acier fortement allié (inoxydable)</td><td>X5CrNi18-10</td><td>X : fortement allié ; 0,05 % de carbone ; 18 % de chrome, 10 % de nickel</td></tr>\n<tr><td>Fonte à graphite lamellaire</td><td>EN-GJL-250</td><td>Résistance minimale à la rupture 250 MPa</td></tr>\n<tr><td>Alliage d'aluminium corroyé</td><td>EN AW-6060, EN AW-2017A, EN AW-7075</td><td>Numéro de série : 6000 aluminium-magnésium-silicium (profilés), 2000 aluminium-cuivre, 7000 aluminium-zinc (haute résistance)</td></tr>\n<tr><td>Alliage de cuivre</td><td>CuZn39Pb3</td><td>Laiton : cuivre, 39 % de zinc, 3 % de plomb (décolletage)</td></tr>\n<tr><td>Polymères</td><td>PA66-GF30, POM, PC, ABS</td><td>Abréviations normalisées ; GF30 : 30 % de fibres de verre</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> décoder une désignation d'acier : 1) la première lettre indique le groupe : S ou E (désignation par l'emploi, chiffre = limite élastique), C (non allié, chiffre = carbone × 100), X (fortement allié) ; 2) sans lettre initiale et avec des symboles chimiques, c'est un acier faiblement allié : le premier nombre est la teneur en carbone × 100 ; 3) les nombres qui suivent les symboles chimiques sont des teneurs multipliées par un facteur (4 pour Cr, Co, Mn, Ni, Si, W ; 10 pour Al, Cu, Mo…) dans les faiblement alliés, et des pourcentages directs dans les fortement alliés.</div>"
      },
      {
       "titre": "Les caractéristiques et les essais",
       "contenu": "<p>L'<strong>essai de traction</strong> est l'essai de référence : une éprouvette normalisée est étirée jusqu'à rupture, et la courbe contrainte-allongement donne :</p>\n<ul>\n<li>le <strong>module de Young E</strong> (pente de la partie droite) : la rigidité ;</li>\n<li>la <strong>limite d'élasticité R<sub>e</sub></strong> (ou R<sub>p0,2</sub> quand il n'y a pas de palier net) : la frontière du domaine élastique ;</li>\n<li>la <strong>résistance à la traction R<sub>m</sub></strong> : la contrainte maximale ;</li>\n<li>l'<strong>allongement après rupture A %</strong> : la ductilité.</li>\n</ul>\n<p>D'autres essais complètent la caractérisation :</p>\n<table>\n<thead><tr><th>Essai</th><th>Grandeur</th><th>Ce qu'elle indique</th></tr></thead>\n<tbody>\n<tr><td>Dureté Brinell, Vickers, Rockwell</td><td>HB, HV, HRC</td><td>Résistance à la pénétration, liée à la résistance à l'usure</td></tr>\n<tr><td>Résilience (mouton pendule Charpy)</td><td>Énergie de rupture KV en joules</td><td>Résistance aux chocs, sensible à la température</td></tr>\n<tr><td>Fatigue</td><td>Limite d'endurance</td><td>Tenue sous efforts répétés un très grand nombre de fois</td></tr>\n<tr><td>Fluage (polymères, hautes températures)</td><td>Déformation dans le temps</td><td>Déformation lente sous charge constante</td></tr>\n</tbody>\n</table>\n<p>Les <strong>propriétés physico-chimiques</strong> comptent tout autant : masse volumique, conductibilité thermique et électrique, dilatation, résistance à la corrosion, et des aptitudes de mise en œuvre comme la <strong>coulabilité</strong> (fonderie), la <strong>formabilité</strong> (pliage, emboutissage), la <strong>soudabilité</strong>, l'<strong>usinabilité</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> rigidité et résistance sont deux propriétés différentes. Un acier à haute résistance plie exactement autant qu'un acier ordinaire sous la même charge, car ils ont le même module de Young : il casse simplement plus tard. Pour rigidifier, il faut changer la forme ou le matériau de module plus élevé.</div>"
      },
      {
       "titre": "Les traitements",
       "contenu": "<p>Les traitements modifient les propriétés d'une pièce sans changer sa forme. On distingue :</p>\n<ul>\n<li><strong>Traitements thermiques des aciers</strong> : la <strong>trempe</strong> (chauffage puis refroidissement rapide) durcit l'acier mais le fragilise ; le <strong>revenu</strong> (réchauffage modéré après trempe) rend de la ténacité en abaissant un peu la dureté ; le <strong>recuit</strong> adoucit et supprime les contraintes internes. Seuls les aciers suffisamment chargés en carbone (comme C45 ou 42CrMo4) prennent la trempe de façon significative.</li>\n<li><strong>Traitements thermochimiques de surface</strong> : <strong>cémentation</strong> (enrichissement en carbone de la surface puis trempe) et <strong>nitruration</strong> (diffusion d'azote) durcissent la surface en gardant un cœur tenace, pour les pièces soumises à l'usure et aux chocs (engrenages, axes).</li>\n<li><strong>Traitements et revêtements de surface</strong> : anodisation de l'aluminium (couche d'oxyde protectrice, souvent colorée), zingage et galvanisation de l'acier, chromage, peinture, dépôts PVD sur les outils.</li>\n<li><strong>Traitements mécaniques</strong> : le <strong>grenaillage</strong> projette des billes qui mettent la surface en compression et améliorent la tenue en fatigue ; le <strong>sablage</strong> nettoie et donne un aspect mat uniforme.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un plan, un traitement s'indique dans le cartouche ou par une note : par exemple « trempé revenu 40 à 45 HRC » ou « anodisation incolore, épaisseur 15 µm ». Le traitement a des conséquences sur les autres procédés : on usine avant trempe, on rectifie après ; on prévoit dans les cotes l'épaisseur d'un revêtement épais.</div>"
      },
      {
       "titre": "Les matériaux du prototypage",
       "contenu": "<p>Les prototypes utilisent des matériaux spécifiques, qu'il faut connaître pour ne pas tirer de mauvaises conclusions d'un essai. Un prototype imprimé ne se comporte pas comme la pièce de série en aluminium ou en polyamide injecté.</p>\n<table>\n<thead><tr><th>Matériau de prototypage</th><th>Forme</th><th>Caractéristiques utiles</th></tr></thead>\n<tbody>\n<tr><td>PLA</td><td>Filament</td><td>Facile à imprimer, rigide, peu de retrait ; ramollit dès environ 55 à 60 °C (voiture au soleil)</td></tr>\n<tr><td>PETG</td><td>Filament</td><td>Plus tenace et plus résistant à la chaleur que le PLA, bonne tenue chimique</td></tr>\n<tr><td>ABS, ASA</td><td>Filament</td><td>Tenue en température meilleure ; retrait et déformation à l'impression, émissions nécessitant une ventilation ; ASA résistant aux UV</td></tr>\n<tr><td>TPU</td><td>Filament</td><td>Souple, élastique : joints, protections, prototypes de pièces en élastomère</td></tr>\n<tr><td>Polyamides chargés (fibres de carbone ou de verre)</td><td>Filament ou poudre</td><td>Pièces fonctionnelles résistantes ; absorbent l'humidité, à sécher avant impression</td></tr>\n<tr><td>Résines photopolymères</td><td>Liquide</td><td>Grande finesse de détail, surfaces lisses ; souvent fragiles ; manipulation avec protections</td></tr>\n<tr><td>Polyamide 12 en poudre</td><td>Poudre (frittage laser)</td><td>Pièces fonctionnelles sans supports, propriétés proches d'un plastique technique</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pièce imprimée par dépôt de fil est <strong>anisotrope</strong> : elle est nettement moins résistante entre les couches que dans le plan des couches. Un essai de rupture sur prototype FDM ne valide pas la résistance d'une pièce injectée, et inversement.</div>\n<p>Les caractéristiques données par les fournisseurs de filaments ou de résines sont souvent mesurées sur des éprouvettes imprimées dans des conditions précises : elles servent à comparer des matériaux entre eux plutôt qu'à dimensionner une pièce finale.</p>"
      },
      {
       "titre": "La relation fonction-matériau-géométrie-procédé",
       "contenu": "<p>On ne choisit jamais un matériau isolément. Le référentiel insiste sur l'interaction entre la <strong>fonction</strong> de la pièce (efforts, environnement, aspect), sa <strong>géométrie</strong> (épaisseurs, formes), le <strong>procédé</strong> qui la fabriquera et le <strong>coût</strong>.</p>\n<table>\n<thead><tr><th>Changement envisagé</th><th>Conséquences à vérifier</th></tr></thead>\n<tbody>\n<tr><td>Passer d'un acier à un aluminium pour alléger</td><td>Module trois fois plus faible : sections à augmenter ; procédé (usinage, filage), traitement (anodisation)</td></tr>\n<tr><td>Passer d'un usinage alu à une injection plastique</td><td>Épaisseurs régulières, dépouilles, nervures ; inserts pour les vis ; investissement moule rentable seulement en série</td></tr>\n<tr><td>Passer à l'impression 3D métal</td><td>Formes libres possibles, mais supports, post-traitements, coût par pièce élevé</td></tr>\n</tbody>\n</table>\n<p>Pour comparer des matériaux, on utilise des <strong>bases de données</strong> et des <strong>graphes de sélection</strong> qui placent les matériaux selon deux propriétés, par exemple le module de Young en ordonnée et la masse volumique en abscisse, souvent en échelles logarithmiques. Les familles y forment des nuages distincts. On y trace des droites correspondant à un <strong>indice de performance</strong> (par exemple la rigidité spécifique E / ρ pour un tirant léger et rigide) : les matériaux situés au-dessus de la droite sont meilleurs.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir le matériau d'un tirant qui doit être rigide et léger : 1) écrire l'objectif (masse minimale) et la contrainte (allongement limité) ; 2) l'indice à maximiser est E / ρ ; 3) calculer ou lire l'indice : acier 210 000 / 7,85 ≈ 26 750 ; aluminium 70 000 / 2,7 ≈ 25 900 ; titane 110 000 / 4,5 ≈ 24 400 : les trois métaux sont proches ; un composite carbone unidirectionnel est très au-dessus ; 4) éliminer les candidats selon les autres critères (coût, procédé, corrosion, recyclabilité) ; 5) justifier le choix par écrit.</div>"
      }
     ],
     "points_cles": [
      "Quatre familles : métaux, polymères, composites, céramiques, aux propriétés très différentes",
      "Une désignation normalisée complète est obligatoire sur un dossier de définition",
      "S235 : limite élastique 235 MPa ; C45 : 0,45 % de carbone ; X5CrNi18-10 : inox à 18 % de chrome et 10 % de nickel",
      "L'essai de traction donne E, Re, Rm et A % ; la dureté et la résilience complètent",
      "Rigidité (E) et résistance (Re) sont deux propriétés distinctes",
      "Trempe durcit, revenu rend la ténacité, recuit adoucit ; cémentation et nitruration durcissent la surface",
      "Anodisation, galvanisation, grenaillage et sablage modifient la surface",
      "Le choix d'un matériau se fait avec la fonction, la géométrie, le procédé et le coût, aidé par des graphes de sélection"
     ],
     "lexique": [
      {
       "terme": "Demi-produit",
       "def": "Produit de première transformation : tôle, barre, profilé, tube, granulé, filament."
      },
      {
       "terme": "Limite d'élasticité",
       "def": "Contrainte au-delà de laquelle le matériau se déforme de façon permanente."
      },
      {
       "terme": "Résistance à la traction Rm",
       "def": "Contrainte maximale supportée lors de l'essai de traction."
      },
      {
       "terme": "Dureté",
       "def": "Résistance d'un matériau à la pénétration d'un corps plus dur."
      },
      {
       "terme": "Résilience",
       "def": "Énergie absorbée par une éprouvette entaillée rompue par choc."
      },
      {
       "terme": "Fluage",
       "def": "Déformation lente et continue d'un matériau sous charge constante."
      },
      {
       "terme": "Trempe",
       "def": "Traitement thermique de durcissement par refroidissement rapide."
      },
      {
       "terme": "Revenu",
       "def": "Réchauffage après trempe qui augmente la ténacité."
      },
      {
       "terme": "Anodisation",
       "def": "Traitement électrochimique qui forme une couche d'oxyde protectrice sur l'aluminium."
      },
      {
       "terme": "Indice de performance",
       "def": "Combinaison de propriétés à maximiser pour une fonction donnée, comme E/ρ."
      }
     ]
    },
    {
     "id": "bmp3-procedes-obtention",
     "titre": "Procédés d'obtention et choix du procédé",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Décrire le principe des principaux procédés d'obtention de pièces brutes et finies",
      "Connaître les procédés d'assemblage et de finition et leurs contraintes",
      "Adapter la forme, les dimensions et la précision d'une pièce au procédé retenu",
      "Choisir un procédé selon la géométrie, les tolérances, le matériau, la quantité, le coût, le délai et l'impact environnemental",
      "Calculer un seuil de rentabilité entre deux procédés"
     ],
     "sections": [
      {
       "titre": "Panorama des procédés d'obtention",
       "contenu": "<p>Une pièce peut être obtenue en <strong>ajoutant</strong> de la matière (fabrication additive), en <strong>enlevant</strong> de la matière (usinage, découpe), en <strong>déformant</strong> la matière (forgeage, pliage, emboutissage) ou en la <strong>moulant</strong> (fonderie, injection). Souvent, plusieurs procédés se succèdent : une pièce brute moulée ou forgée est ensuite usinée sur ses surfaces fonctionnelles.</p>\n<table>\n<thead><tr><th>Famille</th><th>Procédés</th><th>Matériaux typiques</th></tr></thead>\n<tbody>\n<tr><td>Moulage des métaux (fonderie)</td><td>Sable, coquille, sous pression, à la cire perdue, sous vide</td><td>Fontes, aluminium, cuivreux, aciers</td></tr>\n<tr><td>Moulage des polymères</td><td>Injection, compression, soufflage, extrusion, thermoformage, coulée sous vide en moule silicone</td><td>Thermoplastiques, thermodurcissables, élastomères</td></tr>\n<tr><td>Déformation</td><td>Forgeage, estampage, laminage, roulage, pliage, emboutissage, découpage</td><td>Aciers, aluminium, cuivreux</td></tr>\n<tr><td>Métallurgie des poudres</td><td>Compression de poudre puis frittage</td><td>Aciers, bronze (coussinets autolubrifiants)</td></tr>\n<tr><td>Composites</td><td>Moulage au contact, infusion, préimprégnés en autoclave, enroulement filamentaire</td><td>Fibres de verre ou de carbone et résines</td></tr>\n<tr><td>Fabrication additive</td><td>Dépôt de fil, photopolymérisation, fusion sur lit de poudre, projection de liant</td><td>Polymères, résines, métaux</td></tr>\n<tr><td>Usinage conventionnel</td><td>Tournage, fraisage, perçage, rectification</td><td>Presque tous</td></tr>\n<tr><td>Usinage non conventionnel et découpe</td><td>Électroérosion, découpe laser, jet d'eau, plasma</td><td>Métaux, et matériaux variés pour le jet d'eau</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le procédé laisse une « signature » sur la pièce : dépouilles et plan de joint pour le moulage, rayons de pliage pour la tôlerie, rayons de fond imposés par le diamètre de la fraise pour l'usinage, couches et supports pour l'impression 3D.</div>"
      },
      {
       "titre": "Règles de conception liées au moulage",
       "contenu": "<p>L'<strong>injection plastique</strong> consiste à injecter sous forte pression un polymère fondu dans un moule fermé, refroidi, puis à éjecter la pièce. C'est le procédé des grandes séries de pièces plastiques : cycles de quelques secondes à une minute, mais moule coûteux et long à réaliser. La <strong>fonderie</strong> suit la même logique avec un métal liquide.</p>\n<ul>\n<li><strong>Dépouilles</strong> : toutes les faces parallèles à la direction d'ouverture du moule doivent être légèrement inclinées (souvent 0,5° à 2° pour l'injection, davantage pour une surface texturée) afin de permettre l'éjection.</li>\n<li><strong>Épaisseurs régulières</strong> : une zone épaisse refroidit plus lentement et provoque des retassures (creux en surface) et des déformations. On évide les zones massives et on rigidifie par des nervures, dont l'épaisseur est inférieure à celle de la paroi (souvent 50 à 70 % pour les plastiques).</li>\n<li><strong>Congés</strong> : les angles vifs gênent l'écoulement et concentrent les contraintes.</li>\n<li><strong>Contre-dépouilles</strong> : une forme qui empêche l'ouverture directe du moule nécessite un tiroir ou un noyau mobile, qui renchérit l'outillage ; on les évite autant que possible.</li>\n<li><strong>Retrait</strong> : la pièce rétrécit en refroidissant ; le moule est agrandi en conséquence. Le retrait dépend du matériau.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pièce prototypée en impression 3D sans dépouille et avec des parois très épaisses « fonctionne » très bien en prototype mais est impossible à injecter telle quelle. Quand la série est prévue en injection, la maquette doit intégrer les règles du moulage dès le départ.</div>"
      },
      {
       "titre": "Déformation, découpe et usinage",
       "contenu": "<p>La <strong>tôlerie</strong> associe découpe (laser, poinçonnage) et pliage. Les règles principales : épaisseur constante, rayon intérieur de pliage au moins égal à l'épaisseur pour la plupart des aciers doux, trous éloignés des plis (sinon ils se déforment), dégagements de pliage aux coins, longueur minimale des bords pliés imposée par l'outillage de la presse plieuse.</p>\n<p>Le <strong>forgeage</strong> et l'<strong>estampage</strong> déforment un métal chaud entre des matrices : les pièces obtenues ont un fibrage continu qui leur donne une excellente tenue mécanique (bielles, leviers, outils à main).</p>\n<p>L'<strong>usinage</strong> enlève des copeaux à l'aide d'un outil coupant :</p>\n<ul>\n<li>le <strong>tournage</strong> réalise des surfaces de révolution : la pièce tourne, l'outil se déplace ;</li>\n<li>le <strong>fraisage</strong> réalise surfaces planes, rainures, poches, contours : l'outil tourne, la pièce ou l'outil se déplace ;</li>\n<li>le <strong>perçage</strong>, l'alésage et le taraudage réalisent les trous ;</li>\n<li>la <strong>rectification</strong>, par meule, donne les meilleures précisions et états de surface.</li>\n</ul>\n<p>Règles de conception pour l'usinage : prévoir l'accès des outils ; accepter les rayons dans les angles intérieurs de poches (égaux au rayon de la fraise) ; limiter la profondeur des poches étroites ; regrouper les surfaces usinées dans un minimum d'orientations pour réduire les reprises ; prévoir des surfaces de bridage.</p>\n<p>Les procédés <strong>non conventionnels</strong> répondent à des besoins particuliers : l'<strong>électroérosion</strong> usine les matériaux très durs et des formes intérieures fines (moules), le <strong>jet d'eau</strong> découpe sans échauffement presque tous les matériaux, la <strong>découpe laser</strong> est rapide et précise pour les tôles.</p>"
      },
      {
       "titre": "Poudres, composites et fabrication additive",
       "contenu": "<p>La <strong>métallurgie des poudres</strong> comprime une poudre métallique dans une matrice à la forme de la pièce, puis la chauffe sous le point de fusion (<strong>frittage</strong>) pour souder les grains entre eux. Elle produit en grande série des pièces précises sans usinage : pignons, cames, bagues. Elle permet aussi des pièces volontairement poreuses, comme les coussinets en bronze imprégnés d'huile. Les formes doivent pouvoir sortir de la matrice dans l'axe de compression.</p>\n<p>Les <strong>composites</strong> associent des fibres (verre, carbone, lin) qui portent les efforts et une matrice (résine) qui les maintient. La pièce et le matériau sont fabriqués en même temps : moulage au contact pour les petites séries de grandes pièces (coques), infusion de résine sous vide, préimprégnés cuits en autoclave pour l'aéronautique, enroulement filamentaire pour les tubes et réservoirs. Le concepteur doit orienter les fibres selon les efforts, car le matériau est très résistant dans le sens des fibres et beaucoup moins en travers.</p>\n<p>La <strong>fabrication additive</strong> construit la pièce couche par couche à partir du fichier numérique, sans outillage spécifique. Longtemps réservée au prototypage, elle sert aussi désormais à fabriquer des outillages (gabarits, montages de contrôle), des petites séries et des pièces aux formes impossibles autrement (canaux internes, structures en treillis). Ses procédés et ses règles sont détaillés avec le prototypage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de nombreux ateliers impriment désormais leurs propres gabarits de perçage, mors doux de forme et montages de contrôle : le délai passe de plusieurs jours en usinage à quelques heures, pour un coût souvent bien plus faible.</div>"
      },
      {
       "titre": "Assemblage et finition",
       "contenu": "<p>Les procédés d'<strong>assemblage</strong> industriels comprennent le soudage (à l'arc, par points, par friction, par ultrasons pour les plastiques), le brasage, le collage et la fixation mécanique (vis, rivets, clinchage). Chacun impose des règles : accès de la torche ou des électrodes, recouvrement suffisant pour un collage, matériaux compatibles pour un soudage.</p>\n<p>Les procédés de <strong>finition</strong> donnent l'aspect et la protection finale :</p>\n<table>\n<thead><tr><th>Finition</th><th>Effet</th><th>Matériaux</th></tr></thead>\n<tbody>\n<tr><td>Peinture, thermolaquage (poudre)</td><td>Protection, couleur</td><td>Métaux, certains plastiques</td></tr>\n<tr><td>Anodisation</td><td>Couche d'oxyde dure et protectrice, éventuellement colorée</td><td>Aluminium</td></tr>\n<tr><td>Galvanisation, zingage</td><td>Protection contre la corrosion</td><td>Aciers</td></tr>\n<tr><td>Chromage, métallisation</td><td>Aspect brillant, dureté, conductivité</td><td>Métaux, plastiques métallisés</td></tr>\n<tr><td>Polissage, sablage</td><td>Aspect brillant ou mat uniforme</td><td>Tous</td></tr>\n<tr><td>Texturation</td><td>Grain d'aspect sur pièces moulées (réalisé dans le moule)</td><td>Plastiques injectés</td></tr>\n<tr><td>Marquage (laser, tampographie)</td><td>Identification, logos, traçabilité</td><td>Tous</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une pièce en aluminium destinée à être anodisée doit être conçue en conséquence : on évite les assemblages de pièces d'alliages différents avant anodisation (couleurs différentes), on prévoit des points de contact électrique pour l'accrochage, et on tient compte de la légère surépaisseur dans les ajustements serrés.</div>"
      },
      {
       "titre": "Choisir un procédé",
       "contenu": "<p>Le choix d'un procédé croise plusieurs critères, cités par le référentiel :</p>\n<ul>\n<li>la <strong>géométrie</strong> (forme de révolution, prismatique, creuse, libre ; dimensions) ;</li>\n<li>les <strong>tolérances</strong> et états de surface exigés ;</li>\n<li>le <strong>matériau</strong> (certains procédés n'acceptent que certains matériaux) ;</li>\n<li>les <strong>sollicitations</strong> de la pièce (une pièce forgée résiste mieux qu'une pièce moulée) ;</li>\n<li>la <strong>quantité</strong> à produire et la cadence ;</li>\n<li>le triptyque <strong>coût-délai-qualité</strong> ;</li>\n<li>les <strong>moyens</strong> disponibles dans l'entreprise ou chez les sous-traitants ;</li>\n<li>l'<strong>impact environnemental</strong>.</li>\n</ul>\n<p>La quantité est souvent décisive. Un procédé à fort investissement d'outillage (moule d'injection) mais à faible coût par pièce s'oppose à un procédé sans outillage spécifique mais à coût unitaire élevé (impression 3D, usinage).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le seuil de rentabilité. Procédé A (impression 3D) : pas d'outillage, 12 € par pièce. Procédé B (injection) : moule à 18 000 €, 1,50 € par pièce. 1) Coût total A pour n pièces : 12 n. 2) Coût total B : 18 000 + 1,5 n. 3) Égalité : 12 n = 18 000 + 1,5 n, soit 10,5 n = 18 000, donc n ≈ 1 714 pièces. 4) En dessous d'environ 1 700 pièces, l'impression est moins chère ; au-delà, l'injection. 5) Compléter par le délai (fabrication du moule de plusieurs semaines) et par la qualité exigée.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le prototype et la série n'ont pas forcément le même procédé. Le prototype imprimé valide une forme ou une fonction ; la pièce de série doit ensuite être adaptée à son propre procédé, puis revalidée.</div>"
      }
     ],
     "points_cles": [
      "On obtient une pièce par ajout, enlèvement, déformation ou moulage de matière, souvent en combinant plusieurs procédés",
      "Chaque procédé impose des règles de forme : dépouilles, épaisseurs régulières, rayons de pliage, accès des outils",
      "En injection : dépouilles, épaisseurs régulières, nervures plus fines que la paroi, pas de contre-dépouilles inutiles",
      "Tournage pour la révolution, fraisage pour les formes prismatiques, rectification pour la haute précision",
      "Électroérosion, jet d'eau et laser répondent à des besoins particuliers",
      "Les finitions protègent et donnent l'aspect, et doivent être prévues dès la conception",
      "Le choix du procédé croise géométrie, tolérances, matériau, sollicitations, quantité, coût, délai, moyens, environnement",
      "Le seuil de rentabilité compare un procédé à outillage coûteux et un procédé sans outillage"
     ],
     "lexique": [
      {
       "terme": "Pièce brute",
       "def": "Pièce issue d'un premier procédé (moulage, forgeage) avant usinage des surfaces fonctionnelles."
      },
      {
       "terme": "Injection plastique",
       "def": "Moulage d'un polymère fondu injecté sous pression dans un moule fermé."
      },
      {
       "terme": "Dépouille",
       "def": "Inclinaison des faces d'une pièce moulée qui permet son démoulage."
      },
      {
       "terme": "Retassure",
       "def": "Creux de surface dû au retrait d'une zone épaisse en refroidissement."
      },
      {
       "terme": "Contre-dépouille",
       "def": "Forme qui empêche l'extraction directe d'une pièce du moule."
      },
      {
       "terme": "Estampage",
       "def": "Mise en forme d'un métal chaud entre deux matrices."
      },
      {
       "terme": "Électroérosion",
       "def": "Usinage par décharges électriques entre une électrode et la pièce."
      },
      {
       "terme": "Thermolaquage",
       "def": "Peinture par poudre déposée électrostatiquement puis cuite au four."
      },
      {
       "terme": "Seuil de rentabilité",
       "def": "Quantité à partir de laquelle un procédé devient moins coûteux qu'un autre."
      }
     ]
    },
    {
     "id": "bmp3-simulation-optimisation",
     "titre": "Simulation numérique et optimisation d'une solution",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Connaître les types de simulation utilisés en bureau d'études : mécanique, procédé, topologique, ergonomie, réalité virtuelle",
      "Paramétrer une simulation statique par éléments finis : matériau, liaisons, chargements, maillage",
      "Lire et interpréter des cartographies de contraintes et de déplacements et un coefficient de sécurité",
      "Repérer les erreurs de modélisation et vérifier un résultat par un calcul simple",
      "Mener une boucle d'optimisation et justifier les modifications de la maquette"
     ],
     "sections": [
      {
       "titre": "Pourquoi simuler",
       "contenu": "<p>La <strong>simulation numérique</strong> permet de prévoir le comportement d'un produit avant de le fabriquer. Elle réduit le nombre de prototypes, raccourcit le développement et permet de comparer rapidement plusieurs variantes. Le référentiel cite plusieurs types de simulations :</p>\n<table>\n<thead><tr><th>Type</th><th>Question posée</th><th>Résultats typiques</th></tr></thead>\n<tbody>\n<tr><td>Cinématique, dynamique</td><td>Le mécanisme bouge-t-il comme prévu ? quels efforts dans les liaisons ?</td><td>Courbes de position, vitesse, effort ; collisions</td></tr>\n<tr><td>Statique, résistance des matériaux</td><td>La pièce résiste-t-elle ? se déforme-t-elle trop ?</td><td>Cartographies de contraintes, de déplacements, coefficient de sécurité</td></tr>\n<tr><td>Procédé</td><td>La pièce est-elle fabricable ? quels défauts ?</td><td>Remplissage d'un moule, retassures, déformations d'impression, retour élastique en pliage</td></tr>\n<tr><td>Topologique</td><td>Où la matière est-elle utile ?</td><td>Forme allégée proposée par le logiciel</td></tr>\n<tr><td>Ergonomie, réalité virtuelle</td><td>L'utilisateur peut-il atteindre, voir, manipuler ?</td><td>Mannequin numérique, immersion dans la maquette</td></tr>\n<tr><td>Prototypage</td><td>L'impression réussira-t-elle ?</td><td>Aperçu de tranchage, temps, matière, supports</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une simulation ne remplace pas la compréhension mécanique. Le logiciel calcule ce qu'on lui demande, avec les hypothèses qu'on lui donne : un modèle faux donne un résultat faux, présenté avec de jolies couleurs.</div>"
      },
      {
       "titre": "Principe de la méthode des éléments finis",
       "contenu": "<p>Les simulations de résistance utilisent la <strong>méthode des éléments finis</strong> (MEF). Le volume de la pièce est découpé en un grand nombre de petits éléments simples (souvent des tétraèdres) reliés par des <strong>nœuds</strong> : c'est le <strong>maillage</strong>. Le logiciel calcule les déplacements de chaque nœud sous les efforts, puis en déduit les déformations et les contraintes.</p>\n<p>Pour lancer un calcul statique, il faut définir :</p>\n<ol>\n<li>le <strong>matériau</strong> : au minimum module de Young, coefficient de Poisson, limite élastique ;</li>\n<li>les <strong>conditions aux limites</strong> (déplacements imposés) : faces encastrées, appuis, pivots, qui représentent les liaisons avec les autres pièces ;</li>\n<li>les <strong>chargements</strong> : forces, pressions, couples, pesanteur, avec leur point ou leur surface d'application ;</li>\n<li>le <strong>maillage</strong> : taille globale des éléments, raffinements locaux dans les zones sensibles ;</li>\n<li>pour un assemblage, les <strong>contacts</strong> entre pièces.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les conditions aux limites sont la principale source d'erreur. Encastrer totalement une face qui, en réalité, peut légèrement tourner (un appui sur un axe) rigidifie artificiellement la pièce et fausse les contraintes près de l'appui. Il faut choisir la condition qui ressemble le plus à la liaison réelle.</div>\n<p>La <strong>taille des éléments</strong> est un compromis. Des éléments trop gros ne suivent pas les variations de contrainte, en particulier autour des trous, des congés et des changements de section : le résultat sous-estime le maximum. Des éléments très petits partout allongent fortement le temps de calcul sans gain utile. La bonne pratique consiste à garder un maillage moyen sur l'ensemble de la pièce et à le <strong>raffiner localement</strong> dans les zones où les contraintes varient vite. Pour les pièces minces (tôles, coques plastiques), il faut au moins deux à trois éléments dans l'épaisseur, ou utiliser des éléments de type coque proposés par le logiciel. Une fois le calcul lancé, le logiciel signale parfois des éléments trop déformés ou des zones mal maillées : ces avertissements ne doivent pas être ignorés.</p>\n<p>La simulation doit porter sur une maquette <strong>préparée</strong> : petits détails supprimés, congés conservés là où les contraintes se concentrent, solide fermé.</p>"
      },
      {
       "titre": "Lire les résultats",
       "contenu": "<p>Les résultats se présentent sous forme de <strong>cartographies</strong> : la pièce est colorée selon la valeur d'une grandeur, du bleu (faible) au rouge (fort), avec une échelle de couleurs.</p>\n<ul>\n<li><strong>Contrainte équivalente de Von Mises</strong> (MPa) : à comparer à la limite élastique du matériau.</li>\n<li><strong>Déplacement</strong> (mm) : à comparer à la déformation admissible du cahier des charges (flèche maximale, jeu à conserver).</li>\n<li><strong>Coefficient de sécurité</strong> : rapport limite élastique / contrainte de Von Mises en chaque point ; la valeur minimale est la plus importante.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> interpréter une simulation statique : 1) vérifier les unités et l'échelle de couleurs (valeur maximale affichée) ; 2) regarder d'abord la déformée amplifiée : la pièce se déforme-t-elle dans le sens attendu ? sinon, les chargements ou les appuis sont faux ; 3) relever la contrainte maximale et son emplacement ; 4) vérifier si ce maximum est réaliste ou s'il s'agit d'une singularité (angle vif, point d'application d'une force ponctuelle, bord d'un encastrement) ; 5) comparer à R<sub>e</sub> avec le coefficient de sécurité exigé ; 6) relever le déplacement maximal et le comparer au cahier des charges ; 7) contrôler l'ordre de grandeur par un calcul de RdM simplifié.</div>\n<p>Une <strong>singularité</strong> est un point où la contrainte calculée augmente sans limite quand on raffine le maillage : elle est due à la modélisation (angle parfaitement vif, force appliquée sur un point) et non à la réalité. On l'identifie en raffinant le maillage : une contrainte réelle se stabilise (le calcul <strong>converge</strong>), une singularité continue d'augmenter.</p>"
      },
      {
       "titre": "Vérifier un résultat par le calcul",
       "contenu": "<p>Le référentiel attend que le technicien sache mener des <strong>simulations et calculs simples</strong> et confronter les deux. Un calcul à la main sur un modèle simplifié donne un ordre de grandeur qui détecte les erreurs grossières (unités, chargement multiplié par dix, matériau mal affecté).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une équerre de section rectangulaire 30 × 5 mm en aluminium est simulée en traction pure avec 3 000 N et le logiciel affiche 20 MPa en zone courante. Calcul de contrôle : S = 30 × 5 = 150 mm<sup>2</sup> ; σ = 3 000 / 150 = 20 MPa. Les valeurs concordent : le chargement et le matériau sont correctement définis. Si le logiciel avait affiché 2 MPa ou 200 MPa, il faudrait chercher une erreur d'unités ou de chargement avant toute conclusion. Près d'un trou, le logiciel affichera une contrainte plus élevée : c'est la concentration de contraintes, réelle cette fois.</div>\n<p>La comparaison avec des <strong>essais réels</strong> (mesure de flèche sur prototype, essai de rupture) complète la validation. Pour une pièce imprimée, il faut se souvenir que le logiciel suppose en général un matériau homogène et isotrope, ce qui n'est pas le cas d'une pièce FDM : les résultats sont alors optimistes.</p>"
      },
      {
       "titre": "Optimiser : la boucle de conception",
       "contenu": "<p>Optimiser, c'est modifier la solution pour mieux satisfaire le cahier des charges : réduire la masse en gardant la résistance, réduire la déformation, réduire le coût ou l'impact environnemental. La démarche est itérative :</p>\n<ol>\n<li>simuler la solution initiale ;</li>\n<li>identifier les zones surdimensionnées (contraintes très faibles) et sous-dimensionnées (contraintes trop élevées) ;</li>\n<li>modifier la maquette : épaisseurs, nervures, congés, matériau ;</li>\n<li>resimuler et comparer ;</li>\n<li>arrêter quand les exigences sont satisfaites avec la marge voulue.</li>\n</ol>\n<p>L'<strong>optimisation topologique</strong> automatise une partie de ce travail : on définit un volume de conception, les zones à conserver (surfaces fonctionnelles), les chargements et un objectif (par exemple garder 30 % de la masse en maximisant la rigidité). Le logiciel retire la matière peu utile et propose une forme organique. Cette forme doit ensuite être <strong>réinterprétée</strong> en une géométrie fabricable, en tenant compte du procédé : très libre en fabrication additive, simplifiée en nervures pour l'usinage ou le moulage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un support de capteur imprimé en polyamide, une optimisation topologique suivie d'une réinterprétation en treillis a permis de diviser la masse par deux. Mais la première version imprimée cassait au niveau d'une fine branche : la simulation n'avait pas pris en compte l'effort de serrage de la vis de fixation, oublié dans les chargements.</div>"
      },
      {
       "titre": "Simulations de procédé, d'ergonomie et rendre compte",
       "contenu": "<p>Les <strong>simulations de procédé</strong> prévoient les défauts avant de fabriquer : simulation de remplissage d'un moule d'injection (lignes de soudure, bulles d'air piégées, zones mal remplies), de solidification en fonderie, de retour élastique en pliage, de déformation et de supports en fabrication additive. Elles aident à valider la relation produit-procédé-matériau.</p>\n<p>Les <strong>simulations d'ergonomie</strong> placent un mannequin numérique aux dimensions d'une population (petite femme, grand homme) dans la maquette : on vérifie les zones d'atteinte, les angles de vision, les postures. La <strong>réalité virtuelle</strong> permet à un utilisateur, équipé d'un casque, de se déplacer dans la maquette à l'échelle 1 et de juger de l'encombrement, de l'accessibilité pour la maintenance, de l'aspect.</p>\n<p>Toute simulation se termine par un <strong>compte rendu</strong> : objectif, modèle (simplifications, matériau, conditions aux limites, chargements, maillage), résultats (cartographies légendées, valeurs maximales), comparaison au cahier des charges, conclusion et modifications proposées. Les écarts avec le cahier des charges sont relevés et expliqués.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un résultat de simulation sans ses hypothèses n'a aucune valeur. Le compte rendu doit permettre à un collègue de refaire exactement le même calcul.</div>"
      }
     ],
     "points_cles": [
      "Les simulations portent sur le mécanisme, la résistance, le procédé, la topologie, l'ergonomie et le prototypage",
      "La méthode des éléments finis découpe la pièce en éléments reliés par des nœuds",
      "Un calcul statique demande matériau, conditions aux limites, chargements, maillage et contacts",
      "Les conditions aux limites mal choisies sont la première source d'erreur",
      "On lit la déformée, la contrainte de Von Mises, le déplacement et le coefficient de sécurité minimal",
      "Une singularité ne converge pas quand on raffine le maillage",
      "Tout résultat se contrôle par un calcul simple d'ordre de grandeur",
      "L'optimisation est une boucle ; la forme topologique doit être réinterprétée selon le procédé"
     ],
     "lexique": [
      {
       "terme": "Méthode des éléments finis",
       "def": "Méthode de calcul qui découpe un volume en petits éléments pour résoudre un problème mécanique."
      },
      {
       "terme": "Maillage",
       "def": "Découpage du volume de la pièce en éléments reliés par des nœuds."
      },
      {
       "terme": "Conditions aux limites",
       "def": "Déplacements imposés qui représentent les liaisons de la pièce avec son environnement."
      },
      {
       "terme": "Cartographie",
       "def": "Représentation colorée de la répartition d'une grandeur sur la pièce."
      },
      {
       "terme": "Déformée",
       "def": "Forme de la pièce chargée, souvent affichée avec une amplification."
      },
      {
       "terme": "Singularité",
       "def": "Point où la contrainte calculée croît sans limite à cause de la modélisation."
      },
      {
       "terme": "Convergence",
       "def": "Stabilisation d'un résultat quand on raffine le maillage."
      },
      {
       "terme": "Optimisation topologique",
       "def": "Calcul qui retire la matière peu utile dans un volume de conception sous chargement."
      },
      {
       "terme": "Mannequin numérique",
       "def": "Modèle humain articulé utilisé pour les études d'ergonomie."
      }
     ]
    },
    {
     "id": "bmp3-specification-tolerancement",
     "titre": "Spécification des produits : tolérances, spécifications géométriques et relevés dimensionnels",
     "niveau": "1re-Tle",
     "duree": 55,
     "objectifs": [
      "Expliquer pourquoi toute surface réelle présente des défauts et doit être tolérancée",
      "Lire et inscrire une tolérance dimensionnelle, une tolérance générale et un ajustement normalisé",
      "Lire et inscrire une spécification géométrique (forme, orientation, position, battement) avec ses références",
      "Calculer une chaîne de cotes simple pour garantir une condition fonctionnelle",
      "Choisir un instrument de mesure et réaliser un relevé dimensionnel fiable"
     ],
     "sections": [
      {
       "titre": "Surfaces réelles et nécessité du tolérancement",
       "contenu": "<p>Une maquette numérique est parfaite : ses faces sont rigoureusement planes, ses cylindres parfaitement ronds, ses cotes exactes. Une pièce fabriquée ne l'est jamais. Ses surfaces réelles présentent trois sortes de défauts :</p>\n<ul>\n<li>des <strong>défauts dimensionnels</strong> : un diamètre de 20 mm mesure 20,03 ou 19,98 ;</li>\n<li>des <strong>défauts géométriques</strong> : une face n'est pas parfaitement plane, un alésage n'est pas exactement perpendiculaire à une face, deux trous ne sont pas exactement à la bonne distance ;</li>\n<li>des <strong>défauts microgéométriques</strong> : la rugosité, c'est-à-dire les stries et aspérités laissées par l'outil ou le procédé.</li>\n</ul>\n<p>Le concepteur doit donc indiquer, pour chaque caractéristique, les <strong>écarts admissibles</strong> qui garantissent le fonctionnement : c'est la <strong>spécification</strong>. Le langage normalisé utilisé est celui de la <strong>spécification géométrique des produits</strong> (GPS), ensemble de normes ISO. Le principe de base, dit <strong>principe de l'indépendance</strong> (ISO 8015), veut que chaque exigence (dimensionnelle ou géométrique) soit respectée indépendamment des autres, sauf indication particulière.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une tolérance trop large ne garantit pas la fonction ; une tolérance trop serrée multiplie le coût de fabrication et de contrôle. Le bon tolérancement découle des conditions fonctionnelles et des capacités du procédé.</div>"
      },
      {
       "titre": "Tolérances dimensionnelles et tolérances générales",
       "contenu": "<p>Une <strong>cote tolérancée</strong> s'écrit avec une cote nominale et des écarts : 40 ± 0,1 (cote mini 39,9 ; maxi 40,1 ; intervalle de tolérance 0,2), ou 25 +0,05/0 (cote mini 25 ; maxi 25,05).</p>\n<p>Les cotes sans tolérance individuelle sont soumises aux <strong>tolérances générales</strong> indiquées dans le cartouche, par exemple « ISO 2768-m » : la norme ISO 2768-1 fixe, par classe (f fine, m moyenne, c grossière, v très grossière) et par tranche de dimension, l'écart admissible. Pour une cote de 40 mm en classe m, l'écart est ± 0,3 mm.</p>\n<h4>Ajustements normalisés ISO</h4>\n<p>Pour les assemblages d'arbre dans un alésage, la norme ISO 286 définit des tolérances par une lettre (position de la tolérance) et un chiffre (qualité, c'est-à-dire largeur de la tolérance). Majuscule pour l'alésage, minuscule pour l'arbre. Le système <strong>alésage normal</strong>, le plus utilisé, prend l'alésage en H.</p>\n<table>\n<thead><tr><th>Ajustement (exemple Ø20)</th><th>Écarts</th><th>Résultat</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>H7 / g6</td><td>Alésage 0 / +0,021 ; arbre −0,007 / −0,020</td><td>Jeu de 0,007 à 0,041 : glissant juste</td><td>Pièce guidée avec un jeu faible</td></tr>\n<tr><td>H7 / h6</td><td>Alésage 0 / +0,021 ; arbre 0 / −0,013</td><td>Jeu de 0 à 0,034</td><td>Centrage démontable, montage à la main</td></tr>\n<tr><td>H7 / p6</td><td>Alésage 0 / +0,021 ; arbre +0,022 / +0,035</td><td>Serrage de 0,001 à 0,035</td><td>Assemblage serré à la presse (bague, pion)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le jeu d'un ajustement H7/g6 de diamètre 20 : 1) jeu maxi = alésage maxi − arbre mini = 20,021 − 19,980 = 0,041 mm ; 2) jeu mini = alésage mini − arbre maxi = 20,000 − 19,993 = 0,007 mm ; 3) les deux jeux sont positifs : c'est un ajustement avec jeu. Si le jeu mini est négatif et le jeu maxi positif, l'ajustement est incertain ; si les deux sont négatifs, c'est un ajustement serré.</div>"
      },
      {
       "titre": "Spécifications géométriques",
       "contenu": "<p>Les <strong>spécifications géométriques</strong> (norme ISO 1101) limitent les défauts de forme, d'orientation, de position et de battement. Elles s'inscrivent dans un <strong>cadre de tolérance</strong> rectangulaire divisé en cases : symbole de la caractéristique, valeur de la tolérance (précédée de Ø si la zone est cylindrique), puis lettres des <strong>références</strong>.</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Caractéristiques</th><th>Références</th></tr></thead>\n<tbody>\n<tr><td>Forme</td><td>Rectitude, planéité, circularité, cylindricité, forme d'une ligne, forme d'une surface</td><td>Aucune</td></tr>\n<tr><td>Orientation</td><td>Parallélisme, perpendicularité, inclinaison</td><td>Une ou plusieurs</td></tr>\n<tr><td>Position</td><td>Localisation, coaxialité, concentricité, symétrie</td><td>Une ou plusieurs</td></tr>\n<tr><td>Battement</td><td>Battement circulaire, battement total</td><td>Un axe de référence</td></tr>\n</tbody>\n</table>\n<p>Une <strong>référence</strong> est identifiée sur le dessin par un triangle noirci relié à un cadre portant une lettre (A, B, C). Le <strong>système de références</strong> A|B|C s'établit dans l'ordre : A est la référence primaire (souvent la face d'appui principale), B secondaire, C tertiaire. Les cotes qui positionnent un élément tolérancé en localisation sont des <strong>cotes encadrées</strong> (théoriquement exactes), sans tolérance propre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire une spécification de localisation : cadre « symbole de localisation | Ø0,1 | A | B » attaché à l'axe d'un trou. 1) Élément tolérancé : l'axe du trou. 2) Zone de tolérance : un cylindre de diamètre 0,1 mm. 3) Position de la zone : perpendiculaire à la référence A et située par rapport à A et B aux distances données par les cotes encadrées. 4) Condition de conformité : l'axe réel du trou doit être entièrement à l'intérieur de ce cylindre.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la flèche du cadre placée dans le prolongement d'une ligne de cote désigne l'axe ou le plan médian ; placée sur le contour, elle désigne la surface elle-même. Cette nuance change complètement l'élément contrôlé.</div>"
      },
      {
       "titre": "États de surface et surfaces fonctionnelles",
       "contenu": "<p>La <strong>rugosité</strong> se spécifie par un symbole graphique (une racine carrée stylisée) accompagné d'un paramètre, le plus souvent <strong>Ra</strong>, écart moyen arithmétique du profil, en micromètres. L'inscription des états de surface est normalisée (série ISO 21920, qui remplace les normes ISO 1302 et ISO 4287 ; les anciens plans utilisent encore ces dernières).</p>\n<table>\n<thead><tr><th>Ra (µm), ordres de grandeur</th><th>Procédé courant</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>12,5 à 25</td><td>Sciage, fonderie sable, oxycoupage</td><td>Surfaces libres</td></tr>\n<tr><td>3,2 à 6,3</td><td>Fraisage, tournage courants</td><td>Appuis, faces usinées ordinaires</td></tr>\n<tr><td>0,8 à 1,6</td><td>Tournage ou fraisage de finition, alésage</td><td>Portées de roulements, centrages</td></tr>\n<tr><td>0,1 à 0,4</td><td>Rectification, rodage</td><td>Portées de joints à lèvre, surfaces de glissement</td></tr>\n</tbody>\n</table>\n<p>La spécification se concentre sur les <strong>surfaces fonctionnelles</strong> : surfaces d'appui, de centrage, de guidage, d'étanchéité. Les autres relèvent des tolérances générales. Pour les déterminer, on part des <strong>conditions fonctionnelles</strong> : un jeu à garantir, un alignement nécessaire, un serrage à obtenir.</p>\n<p>Les logiciels permettent aujourd'hui d'inscrire cotes, tolérances et états de surface directement sur le modèle 3D (annotations 3D, souvent appelées PMI) : la maquette porte alors toute la définition, y compris pour la programmation des machines et des moyens de mesure.</p>"
      },
      {
       "titre": "Chaînes de cotes",
       "contenu": "<p>Une <strong>condition fonctionnelle</strong> (un jeu, un dépassement, un serrage) dépend de plusieurs cotes de pièces différentes. La <strong>chaîne de cotes</strong> relie la condition aux cotes qui l'influencent, en passant d'une surface de contact à l'autre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un arbre porte une bague entre un épaulement et un anneau élastique ; on veut un jeu axial J entre la bague et l'anneau. Cotes : distance épaulement-gorge sur l'arbre a = 30 +0,1/0 ; longueur de la bague b = 29,8 ± 0,05. 1) Écrire la relation : J = a − b. 2) Jeu maxi = a maxi − b mini = 30,1 − 29,75 = 0,35 mm. 3) Jeu mini = a mini − b maxi = 30,0 − 29,85 = 0,15 mm. 4) Vérifier : l'intervalle de tolérance du jeu (0,2) est égal à la somme des intervalles des cotes (0,1 + 0,1). 5) Comparer au jeu demandé ; s'il faut réduire la dispersion, resserrer la tolérance de la cote la moins coûteuse à tenir.</div>\n<p>La règle générale est : <strong>l'intervalle de tolérance de la condition est égal à la somme des intervalles de tolérance des cotes de la chaîne</strong>. Une chaîne courte (peu de cotes) permet donc des tolérances plus larges sur chaque pièce : c'est un principe de conception économique.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour les assemblages imprimés en 3D, les écarts dimensionnels sont souvent de l'ordre de 0,1 à 0,3 mm selon la machine et le matériau. On mesure les écarts sur une éprouvette de calibrage avant de fixer les jeux de montage dans la maquette.</div>"
      },
      {
       "titre": "Relevés dimensionnels",
       "contenu": "<p>Contrôler une pièce ou réaliser une rétro-conception suppose des <strong>relevés dimensionnels</strong> fiables. Le choix de l'instrument dépend de la tolérance à vérifier : on retient en pratique un instrument dont la résolution est nettement inférieure à l'intervalle de tolérance (une règle d'usage courante vise environ dix fois plus fin).</p>\n<table>\n<thead><tr><th>Instrument</th><th>Résolution courante</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Réglet</td><td>0,5 à 1 mm</td><td>Longueurs grossières</td></tr>\n<tr><td>Pied à coulisse</td><td>0,02 ou 0,01 mm (numérique)</td><td>Dimensions extérieures, intérieures, profondeurs</td></tr>\n<tr><td>Micromètre</td><td>0,01 ou 0,001 mm</td><td>Diamètres et épaisseurs précis</td></tr>\n<tr><td>Comparateur sur support</td><td>0,01 ou 0,001 mm</td><td>Écarts de forme, battement, comparaison à une cale</td></tr>\n<tr><td>Tampon et bague lisses (calibres)</td><td>Entre / n'entre pas</td><td>Contrôle rapide d'alésages et d'arbres en série</td></tr>\n<tr><td>Machine à mesurer tridimensionnelle</td><td>Quelques micromètres</td><td>Spécifications géométriques complexes</td></tr>\n<tr><td>Scanner 3D</td><td>Quelques centièmes à dixièmes selon l'appareil</td><td>Formes libres, comparaison à la maquette</td></tr>\n</tbody>\n</table>\n<p>Toute mesure comporte une <strong>incertitude</strong> : erreurs de l'instrument, de lecture, de température, de positionnement. Les bonnes pratiques : instrument étalonné, pièce et instrument à la même température, plusieurs mesures en des points différents, relevé écrit avec les conditions.</p>"
      }
     ],
     "points_cles": [
      "Une pièce réelle présente des défauts dimensionnels, géométriques et de rugosité",
      "Le principe de l'indépendance (ISO 8015) impose chaque exigence séparément",
      "Les cotes non tolérancées relèvent des tolérances générales, par exemple ISO 2768-m",
      "Ajustements ISO 286 : H7/g6 glissant, H7/h6 centrage, H7/p6 serré",
      "Spécifications géométriques ISO 1101 : forme, orientation, position, battement, avec références A|B|C et cotes encadrées",
      "Ra en micromètres spécifie la rugosité des surfaces fonctionnelles",
      "Dans une chaîne de cotes, l'intervalle de tolérance de la condition est la somme des intervalles des cotes",
      "L'instrument de mesure doit être nettement plus fin que la tolérance à contrôler"
     ],
     "lexique": [
      {
       "terme": "GPS",
       "def": "Spécification géométrique des produits : système de normes ISO pour décrire les exigences dimensionnelles et géométriques."
      },
      {
       "terme": "Intervalle de tolérance",
       "def": "Différence entre la cote maximale et la cote minimale admissibles."
      },
      {
       "terme": "Tolérance générale",
       "def": "Tolérance appliquée aux cotes sans tolérance individuelle, indiquée au cartouche."
      },
      {
       "terme": "Ajustement",
       "def": "Relation de jeu ou de serrage entre un arbre et un alésage."
      },
      {
       "terme": "Système alésage normal",
       "def": "Système d'ajustement où l'alésage est toujours en H."
      },
      {
       "terme": "Cadre de tolérance",
       "def": "Cadre portant le symbole, la valeur et les références d'une spécification géométrique."
      },
      {
       "terme": "Référence",
       "def": "Élément idéal (plan, axe) construit à partir d'une surface réelle et servant à orienter ou positionner une zone de tolérance."
      },
      {
       "terme": "Cote encadrée",
       "def": "Cote théoriquement exacte qui positionne une zone de tolérance, sans tolérance propre."
      },
      {
       "terme": "Ra",
       "def": "Écart moyen arithmétique du profil de rugosité, en micromètres."
      },
      {
       "terme": "Chaîne de cotes",
       "def": "Ensemble des cotes qui influencent une condition fonctionnelle."
      }
     ]
    },
    {
     "id": "bmp3-prototypage-fabrication-additive",
     "titre": "Prototypage et fabrication additive",
     "niveau": "1re-Tle",
     "duree": 55,
     "objectifs": [
      "Distinguer les types de prototypes selon ce qu'ils doivent valider",
      "Connaître les catégories normalisées de fabrication additive et choisir un procédé",
      "Préparer une pièce pour l'impression : orientation, supports, jeux, paramètres de tranchage",
      "Appliquer les règles de santé et de sécurité propres aux moyens de prototypage",
      "Conduire un protocole de validation d'un prototype et en rendre compte"
     ],
     "sections": [
      {
       "titre": "À quoi sert un prototype",
       "contenu": "<p>Un <strong>prototype</strong> est une réalisation physique, partielle ou complète, destinée à <strong>valider</strong> une partie de la solution avant la production. Le référentiel distingue la validation <strong>visuelle</strong> et la validation <strong>fonctionnelle</strong>. On ne fabrique pas un prototype « pour voir » : on définit d'abord ce qu'il doit démontrer.</p>\n<table>\n<thead><tr><th>Type de prototype</th><th>Ce qu'il valide</th><th>Moyens typiques</th></tr></thead>\n<tbody>\n<tr><td>Prototype rudimentaire</td><td>Principe, idée, encombrement grossier</td><td>Carton, mousse, impression rapide basse résolution</td></tr>\n<tr><td>Maquette d'aspect</td><td>Forme, proportions, couleurs, perception du client</td><td>Impression résine, peinture, finitions</td></tr>\n<tr><td>Prototype géométrique</td><td>Montage, encombrement, interfaces avec les pièces voisines</td><td>Impression FDM ou résine à l'échelle 1</td></tr>\n<tr><td>Prototype fonctionnel</td><td>Fonctionnement, mouvements, efforts, durée de vie partielle</td><td>Impression en matériau technique, usinage, composants réels</td></tr>\n<tr><td>Préséries</td><td>Procédé de série, qualité, coûts</td><td>Moule prototype, outillage provisoire</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un prototype répond à une question précise. Avant de le lancer, on écrit le <strong>scénario de validation</strong> : ce que l'on va observer ou mesurer, et le critère de réussite tiré du cahier des charges.</div>"
      },
      {
       "titre": "Les procédés de fabrication additive",
       "contenu": "<p>La norme ISO/ASTM 52900 classe les procédés de fabrication additive en sept catégories :</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Principe</th><th>Exemples, matériaux</th></tr></thead>\n<tbody>\n<tr><td>Extrusion de matière</td><td>Un fil fondu est déposé par une buse (FDM, FFF)</td><td>PLA, PETG, ABS, TPU, polyamides</td></tr>\n<tr><td>Photopolymérisation en cuve</td><td>Une résine liquide durcit sous lumière UV (SLA, DLP, LCD)</td><td>Résines standard, techniques, souples, coulables</td></tr>\n<tr><td>Fusion sur lit de poudre</td><td>Un laser ou un faisceau fond ou fritte une poudre couche par couche (SLS, SLM)</td><td>Polyamide 12, aciers, titane, aluminium</td></tr>\n<tr><td>Projection de matière</td><td>Des gouttelettes de photopolymère sont projetées puis durcies</td><td>Pièces multicolores, multi-matériaux</td></tr>\n<tr><td>Projection de liant</td><td>Un liant est projeté sur un lit de poudre</td><td>Sable de fonderie, métaux, plâtre</td></tr>\n<tr><td>Dépôt de matière sous énergie concentrée</td><td>Poudre ou fil fondu à mesure du dépôt (laser, arc)</td><td>Métaux, rechargement de pièces</td></tr>\n<tr><td>Stratification de couches</td><td>Feuilles découpées et collées</td><td>Papier, tôles minces</td></tr>\n</tbody>\n</table>\n<p>Au lycée et dans beaucoup de bureaux d'études, on utilise surtout l'extrusion (économique, matériaux variés) et la photopolymérisation (détails fins, surfaces lisses). La fusion sur lit de poudre polymère est très utilisée chez les prestataires pour les pièces fonctionnelles, car elle n'exige pas de supports.</p>\n<p>Le choix du procédé de prototypage se fait comme pour la série, mais avec des critères propres : ce que le prototype doit valider (aspect ou fonction), la taille de la pièce par rapport au volume de la machine, la finesse des détails, le matériau le plus proche de celui de la série, le délai (quelques heures en interne, plusieurs jours chez un prestataire), le coût et le nombre d'exemplaires. Une pièce trop grande pour le plateau peut être découpée en plusieurs parties assemblées par des emboîtements, des pions ou du collage, à condition que la découpe n'affaiblisse pas une zone sollicitée.</p>\n<p>D'autres moyens de prototypage complètent l'impression : usinage rapide, découpe laser de plaques, coulée sous vide de résine dans un moule silicone réalisé à partir d'un modèle maître imprimé (petites séries de 10 à 30 pièces d'aspect proche de la série).</p>"
      },
      {
       "titre": "Concevoir et préparer une pièce pour l'impression",
       "contenu": "<p>Le fichier exporté (STL ou 3MF) est traité par un logiciel de <strong>tranchage</strong> (slicer) qui découpe la pièce en couches et génère le programme de la machine (G-code en FDM). Les choix faits à cette étape déterminent la qualité, la résistance, le temps et la matière.</p>\n<table>\n<thead><tr><th>Paramètre (FDM)</th><th>Effet</th></tr></thead>\n<tbody>\n<tr><td>Hauteur de couche (souvent 0,1 à 0,3 mm)</td><td>Finesse des détails verticaux, effet d'escalier, temps</td></tr>\n<tr><td>Nombre de périmètres (parois)</td><td>Résistance, étanchéité, possibilité de reprise d'usinage</td></tr>\n<tr><td>Taux et motif de remplissage</td><td>Masse, rigidité, temps</td></tr>\n<tr><td>Températures de buse et de plateau</td><td>Adhérence des couches, déformation</td></tr>\n<tr><td>Supports</td><td>Possibilité d'imprimer les surplombs ; reprise de surface après retrait</td></tr>\n<tr><td>Orientation de la pièce</td><td>Résistance (anisotropie), supports, aspect, temps</td></tr>\n</tbody>\n</table>\n<p>Règles de conception pour l'extrusion : surplombs jusqu'à environ 45° sans support ; ponts horizontaux courts ; parois d'au moins deux fois le diamètre de buse ; trous horizontaux de petite taille éventuellement en forme de goutte ; jeux de montage de l'ordre de 0,2 à 0,4 mm entre pièces à assembler, à ajuster selon la machine.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> orienter un crochet qui doit supporter une charge : 1) identifier la direction de l'effort et la zone la plus sollicitée (le coude du crochet, en flexion) ; 2) orienter la pièce pour que les couches ne soient pas perpendiculaires à la contrainte de flexion maximale : on imprime le crochet couché sur le côté, les filaments suivant la courbure ; 3) vérifier dans l'aperçu les surplombs et les supports générés ; 4) augmenter le nombre de périmètres plutôt que le remplissage ; 5) noter l'orientation choisie dans la fiche de prototypage pour que l'essai soit reproductible.</div>"
      },
      {
       "titre": "Post-traitements et précision",
       "contenu": "<p>Une pièce imprimée nécessite presque toujours des <strong>post-traitements</strong> :</p>\n<ul>\n<li>retrait des supports et ébavurage ;</li>\n<li>pour les résines : lavage dans un solvant (souvent alcool isopropylique) puis <strong>post-polymérisation</strong> sous UV, qui donne ses propriétés finales au matériau ;</li>\n<li>pour les poudres : dépoudrage, sablage ou microbillage ;</li>\n<li>reprises : ponçage, apprêt et peinture pour une maquette d'aspect ; perçage ou alésage pour un ajustement précis ; pose d'inserts filetés à chaud.</li>\n</ul>\n<p>La précision dépend du procédé, de la machine, du matériau et de l'orientation. Les trous verticaux sortent souvent légèrement plus petits que prévu en FDM, les grandes pièces en ABS peuvent se déformer (gauchissement), les pièces en résine peuvent continuer à évoluer après post-polymérisation. Pour les cotes critiques, on prévoit une <strong>surépaisseur</strong> et une reprise d'usinage, ou on calibre la machine sur des éprouvettes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un prototype qui « ne rentre pas » ne prouve pas forcément une erreur de conception. Il faut d'abord mesurer la pièce imprimée et la comparer à la maquette : l'écart peut venir du procédé. À l'inverse, élargir tous les jeux de la maquette pour faciliter l'impression fausse la validation de la pièce de série.</div>"
      },
      {
       "titre": "Santé, sécurité et environnement en prototypage",
       "contenu": "<p>Les moyens de prototypage présentent des risques réels, encadrés par les procédures de l'entreprise et la notice de chaque machine :</p>\n<table>\n<thead><tr><th>Moyen</th><th>Risques</th><th>Mesures de prévention</th></tr></thead>\n<tbody>\n<tr><td>Imprimante FDM</td><td>Brûlure (buse au-delà de 200 °C, plateau chauffant), émissions de particules ultrafines et de composés organiques volatils, notamment avec l'ABS</td><td>Capotage, ventilation ou filtration, ne pas intervenir machine chaude</td></tr>\n<tr><td>Imprimante résine</td><td>Irritation et sensibilisation de la peau par les résines non polymérisées, vapeurs, rayonnement UV</td><td>Gants nitrile, lunettes, local ventilé, lecture de la fiche de données de sécurité, déchets de résine traités comme déchets dangereux</td></tr>\n<tr><td>Solvants de nettoyage (alcool isopropylique)</td><td>Inflammabilité, vapeurs</td><td>Stockage fermé, loin des sources de chaleur, quantités limitées</td></tr>\n<tr><td>Poudres (frittage, dépoudrage)</td><td>Inhalation, risque d'explosion de poussières pour certaines poudres</td><td>Postes aspirés, masques adaptés, procédures du fabricant</td></tr>\n<tr><td>Découpe laser</td><td>Rayonnement, incendie, fumées</td><td>Machine capotée, aspiration, surveillance, matériaux autorisés uniquement</td></tr>\n</tbody>\n</table>\n<p>La <strong>fiche de données de sécurité</strong> (FDS) de chaque produit chimique (résine, solvant) indique ses dangers, les équipements de protection, les premiers secours, le stockage et l'élimination. Elle doit être disponible et lue avant toute première utilisation.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les résines liquides et les chiffons souillés ne vont jamais à l'évier ni à la poubelle ordinaire. Les résidus sont polymérisés aux UV ou collectés dans un conteneur dédié, selon la procédure déchets de l'atelier.</div>"
      },
      {
       "titre": "Valider le prototype et rendre compte",
       "contenu": "<p>Le prototype n'a de valeur que par la <strong>validation</strong> qu'il permet. Le protocole suit le scénario défini avant fabrication :</p>\n<ol>\n<li>contrôler le prototype lui-même (dimensions critiques, défauts d'impression) ;</li>\n<li>réaliser les essais prévus : montage, mouvement, effort, essai utilisateur ;</li>\n<li>relever les résultats de façon objective (mesures, photos, vidéos, remarques des utilisateurs) ;</li>\n<li>comparer aux critères du cahier des charges ;</li>\n<li>conclure : validé, validé avec réserves, non validé ;</li>\n<li>proposer les modifications de la maquette et mettre à jour son indice.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> fiche de validation d'un prototype de clip : critère « effort de déclipsage compris entre 15 et 25 N ». Essai sur 5 prototypes avec un dynamomètre : 18, 21, 20, 17, 22 N ; moyenne 19,6 N. Tous les résultats sont dans l'intervalle : critère validé pour le prototype. Réserve écrite : le matériau imprimé n'est pas celui de la série ; un essai sur pièces injectées reste nécessaire.</div>\n<p>Le compte rendu indique toujours le procédé, le matériau, l'orientation et les paramètres utilisés, pour que l'essai puisse être reproduit et pour que les écarts avec la future pièce de série soient connus.</p>"
      }
     ],
     "points_cles": [
      "Un prototype valide une question précise : aspect, géométrie, fonction ou procédé",
      "ISO/ASTM 52900 classe la fabrication additive en sept catégories",
      "Extrusion de matière et photopolymérisation sont les procédés les plus courants en bureau d'études",
      "Le tranchage fixe couches, périmètres, remplissage, supports et orientation",
      "Une pièce FDM est anisotrope : l'orientation se choisit selon les efforts",
      "Les résines exigent lavage, post-polymérisation et protections adaptées",
      "La fiche de données de sécurité se lit avant toute première utilisation d'un produit",
      "La validation compare des résultats mesurés aux critères du cahier des charges et se trace par écrit"
     ],
     "lexique": [
      {
       "terme": "Prototype",
       "def": "Réalisation physique destinée à valider tout ou partie d'une solution avant production."
      },
      {
       "terme": "Scénario de validation",
       "def": "Description préalable des essais, observations et critères de réussite d'un prototype."
      },
      {
       "terme": "Fabrication additive",
       "def": "Ensemble de procédés construisant une pièce couche par couche à partir d'un fichier numérique."
      },
      {
       "terme": "FDM",
       "def": "Dépôt de fil fondu : procédé d'extrusion de matière thermoplastique."
      },
      {
       "terme": "Photopolymérisation",
       "def": "Durcissement d'une résine liquide sous l'effet de la lumière ultraviolette."
      },
      {
       "terme": "Tranchage",
       "def": "Découpage d'un modèle en couches et génération du programme de la machine d'impression."
      },
      {
       "terme": "Support",
       "def": "Structure provisoire imprimée sous les surplombs et retirée après fabrication."
      },
      {
       "terme": "Anisotropie",
       "def": "Variation des propriétés d'un matériau selon la direction."
      },
      {
       "terme": "Post-polymérisation",
       "def": "Exposition aux UV d'une pièce en résine pour achever son durcissement."
      },
      {
       "terme": "Fiche de données de sécurité",
       "def": "Document réglementaire décrivant les dangers d'un produit chimique et les mesures de prévention."
      }
     ]
    },
    {
     "id": "bmp3-dossier-definition-visuels",
     "titre": "Dossier de définition et visuels pour les parties prenantes",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire le contenu d'un dossier de définition de produit",
      "Éditer un dessin de définition et un dessin d'ensemble conformes aux normes à partir de la maquette",
      "Établir une nomenclature et un repérage cohérents",
      "Produire des représentations dérivées adaptées : éclaté, rendu réaliste, animation, notice",
      "Adapter un visuel à son destinataire : client, atelier, maintenance, commercial"
     ],
     "sections": [
      {
       "titre": "Le dossier de définition",
       "contenu": "<p>Le <strong>dossier de définition</strong> d'un produit rassemble tous les documents qui le décrivent de façon complète et sans ambiguïté, de sorte qu'il puisse être fabriqué, contrôlé et assemblé par des personnes qui n'ont pas participé à sa conception. Il comprend en général :</p>\n<ul>\n<li>la <strong>maquette numérique</strong> de référence (et ses exports neutres) ;</li>\n<li>les <strong>dessins de définition</strong> de chaque pièce à fabriquer ;</li>\n<li>le <strong>dessin d'ensemble</strong> et la <strong>nomenclature</strong> ;</li>\n<li>les spécifications de fonctionnement et d'assemblage (couples de serrage, réglages, produits de freinage, lubrifiants) ;</li>\n<li>les références des composants du commerce ;</li>\n<li>les documents qualité associés (cotes critiques, exigences de contrôle).</li>\n</ul>\n<p>Chaque document porte un numéro, un indice et un historique des modifications. Le dossier est <strong>diffusé</strong> après validation : toute modification ultérieure passe par un nouvel indice.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le dossier de définition décrit le <em>quoi</em> (le produit et ses exigences), pas le <em>comment</em> (la gamme de fabrication, qui relève des méthodes). Un dessin de définition n'impose pas de procédé, sauf exigence fonctionnelle.</div>"
      },
      {
       "titre": "Le dessin de définition",
       "contenu": "<p>Le <strong>dessin de définition</strong> d'une pièce donne toutes les informations nécessaires à sa fabrication et à son contrôle : formes, dimensions, tolérances, spécifications géométriques, états de surface, matériau, traitements. Il est généré à partir de la maquette, mais c'est le technicien qui le compose.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> composer un dessin de définition : 1) choisir le format et l'échelle pour que la pièce soit lisible (agrandir les petites pièces) ; 2) choisir la vue principale (position de fabrication ou de fonctionnement) et le minimum de vues complémentaires ; 3) ajouter les coupes et vues de détail nécessaires ; 4) placer les références (A, B, C) sur les surfaces fonctionnelles ; 5) coter en partant des conditions fonctionnelles : cotes tolérancées et spécifications géométriques sur les surfaces fonctionnelles, puis cotes d'encombrement et de forme ; 6) indiquer états de surface et notes (arêtes cassées, traitements) ; 7) compléter le cartouche (matière, tolérances générales, méthode de projection, indice) ; 8) vérifier que chaque forme est définie une fois et une seule.</div>\n<p>Règles de lisibilité : ne pas coter sur des traits cachés ; éviter les croisements de lignes de cote ; aligner les cotes ; ne pas répéter une même cote sur deux vues ; regrouper les cotes d'une même forme sur la vue où elle est la plus visible.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> laisser le logiciel importer automatiquement toutes les cotes d'esquisse produit des plans illisibles et surcotés, où des cotes de construction sans intérêt fonctionnel apparaissent et où certaines cotes fonctionnelles manquent. La cotation automatique est un point de départ à nettoyer, pas un résultat.</div>"
      },
      {
       "titre": "Le dessin d'ensemble et la nomenclature",
       "contenu": "<p>Le <strong>dessin d'ensemble</strong> représente le produit assemblé, souvent en coupe, pour montrer comment les pièces sont positionnées les unes par rapport aux autres. Il porte peu de cotes : encombrement, cotes de réglage, cotes d'interface et éventuellement les ajustements (par exemple Ø20 H7/g6).</p>\n<p>Chaque pièce y reçoit un <strong>repère</strong> (numéro dans une bulle reliée à la pièce par une ligne de repère terminée par un point sur la pièce). Les repères sont alignés, rangés dans un ordre logique, et correspondent ligne à ligne à la <strong>nomenclature</strong>.</p>\n<table>\n<thead><tr><th>Rep.</th><th>Nb</th><th>Désignation</th><th>Matière</th><th>Observations</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>1</td><td>Corps</td><td>EN AW-6060</td><td>Anodisé incolore</td></tr>\n<tr><td>2</td><td>1</td><td>Axe d'articulation</td><td>C45</td><td>Trempé revenu</td></tr>\n<tr><td>3</td><td>2</td><td>Bague de frottement</td><td>Bronze fritté</td><td>Référence fournisseur</td></tr>\n<tr><td>4</td><td>4</td><td>Vis CHC M5 × 16</td><td>Acier classe 8.8</td><td>ISO 4762</td></tr>\n<tr><td>5</td><td>1</td><td>Anneau élastique pour arbre 12</td><td>Acier à ressort</td><td>DIN 471</td></tr>\n</tbody>\n</table>\n<p>Le dessin d'ensemble est complété par les <strong>spécifications de fonctionnement et d'assemblage</strong>, inscrites en notes ou dans un document associé : couple de serrage des vis (par exemple « serrer les vis repère 4 à 6 N·m »), produit de freinage, graisse à appliquer sur une articulation, réglage d'un jeu axial, ordre de montage particulier, contrôle à effectuer après assemblage (rotation libre sans point dur, course mesurée). Ces informations viennent des calculs, des catalogues et des essais sur prototype ; si elles manquent, l'atelier les invente, et le produit ne fonctionnera pas comme prévu.</p>\n<p>La nomenclature générée par le logiciel reprend les propriétés des fichiers de pièces : d'où l'importance de les remplir correctement. On distingue la nomenclature de <strong>niveau supérieur</strong> (sous-ensembles et pièces directes) de la nomenclature <strong>éclatée</strong> (toutes les pièces de tous les niveaux), utilisée par les achats.</p>"
      },
      {
       "titre": "Les représentations dérivées de la maquette",
       "contenu": "<p>La maquette numérique permet de produire de nombreux documents de communication, que le référentiel regroupe sous le nom de <strong>représentations graphiques dérivées</strong> :</p>\n<table>\n<thead><tr><th>Représentation</th><th>Destinataire principal</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Vue éclatée avec repères et lignes de trajectoire</td><td>Atelier de montage, maintenance, client</td><td>Comprendre l'ordre de montage, commander une pièce de rechange</td></tr>\n<tr><td>Rendu réaliste (matières, éclairage, décor)</td><td>Client, commercial, direction</td><td>Valider l'aspect, présenter un projet, catalogues</td></tr>\n<tr><td>Animation (mouvement, montage, démontage)</td><td>Client, formation, maintenance</td><td>Expliquer un fonctionnement ou une procédure</td></tr>\n<tr><td>Instructions de montage illustrées</td><td>Opérateurs</td><td>Étapes successives avec vues partielles et outillages</td></tr>\n<tr><td>Fichier 3D léger ou PDF 3D</td><td>Partenaires sans logiciel de CAO</td><td>Manipuler et mesurer le modèle sans le modifier</td></tr>\n<tr><td>Expérience de réalité virtuelle ou augmentée</td><td>Client, revue de projet</td><td>Juger l'encombrement et l'ergonomie à l'échelle 1</td></tr>\n</tbody>\n</table>\n<p>Une <strong>vue éclatée</strong> se construit dans le logiciel en déplaçant les composants selon leurs directions de montage, avec des lignes d'axe (trajectoires) qui montrent où chaque pièce vient se placer. L'ordre des déplacements reproduit l'ordre de démontage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour une notice de maintenance, l'éclaté d'un sous-ensemble est souvent plus utile que le plan d'ensemble : un technicien de maintenance identifie la pièce à remplacer au premier coup d'œil, avec son repère et sa référence.</div>"
      },
      {
       "titre": "Réaliser un rendu et adapter le visuel",
       "contenu": "<p>Un <strong>rendu réaliste</strong> calcule l'image de la maquette en simulant la lumière. Ses réglages principaux sont :</p>\n<ul>\n<li>les <strong>apparences</strong> (matériaux visuels) : métal brossé, plastique mat ou brillant, texture, couleur, transparence ;</li>\n<li>l'<strong>éclairage</strong> : environnement lumineux, sources principales, ombres ;</li>\n<li>la <strong>caméra</strong> : point de vue, focale, profondeur de champ ;</li>\n<li>la <strong>scène</strong> : sol, fond, mise en situation ;</li>\n<li>la <strong>qualité</strong> de calcul et la résolution de l'image.</li>\n</ul>\n<p>Le visuel doit être adapté à son destinataire. Un client final veut voir le produit en situation, beau et compréhensible ; un atelier a besoin de vues techniques claires, sans effets ; un commercial a besoin d'images cohérentes avec la charte de l'entreprise ; une revue de projet a besoin de vues annotées montrant les choix et les points ouverts.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer un visuel de présentation : 1) définir le destinataire et le message (« montrer la compacité du nouveau support ») ; 2) choisir le point de vue qui sert ce message ; 3) affecter des apparences proches des matériaux réels de série, pas de ceux du prototype ; 4) masquer les éléments inutiles (visserie interne, pièces de bâti hors sujet) ; 5) calculer une image de test en basse qualité, corriger, puis l'image finale ; 6) annoter si nécessaire (dimensions clés, légendes) ; 7) vérifier la confidentialité avant diffusion hors de l'entreprise.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un rendu trop flatteur peut engager l'entreprise : couleur ou finition impossible à obtenir en série, détails qui n'existeront pas. Le visuel doit représenter fidèlement le produit prévu.</div>"
      },
      {
       "titre": "Communiquer à l'écrit et à l'oral",
       "contenu": "<p>Le référentiel demande de <strong>formuler et transmettre des informations</strong> à l'écrit et à l'oral. Les documents dérivés de la maquette sont souvent présentés lors de <strong>revues de projet</strong> où le technicien expose ses choix devant le chef de projet, les méthodes, la qualité, parfois le client.</p>\n<ul>\n<li>Un support de présentation clair : peu de texte, des visuels lisibles, une conclusion explicite.</li>\n<li>Des choix argumentés par des critères du cahier des charges et des résultats (simulations, essais, coûts).</li>\n<li>Un vocabulaire technique exact, adapté à l'auditoire.</li>\n<li>Une écoute des remarques, notées et intégrées au plan d'action.</li>\n</ul>\n<p>À l'écrit, le compte rendu de réunion ou le courriel technique doit permettre au lecteur d'agir : contexte en une phrase, information ou décision, pièces jointes identifiées (nom de fichier, indice), action attendue et délai.</p>\n<p>Les documents produits doivent aussi être exploitables par des personnes d'autres langues : de nombreux bureaux d'études travaillent avec des partenaires étrangers, et les plans normalisés, avec leurs symboles internationaux, facilitent cette communication.</p>"
      }
     ],
     "points_cles": [
      "Le dossier de définition décrit complètement le produit : maquette, dessins de définition, ensemble, nomenclature, spécifications",
      "Le dessin de définition se compose à partir des conditions fonctionnelles, pas par import automatique de toutes les cotes",
      "Le dessin d'ensemble montre l'assemblage, porte les repères et peu de cotes",
      "Repères et lignes de nomenclature se correspondent ; la nomenclature reprend les propriétés des fichiers",
      "Éclatés, rendus, animations, instructions et fichiers 3D légers sont des représentations dérivées",
      "Un rendu se règle par les apparences, l'éclairage, la caméra, la scène et la qualité",
      "Le visuel s'adapte à son destinataire et reste fidèle au produit de série",
      "En revue de projet, on argumente avec des critères, des résultats et un vocabulaire exact"
     ],
     "lexique": [
      {
       "terme": "Dossier de définition",
       "def": "Ensemble des documents qui décrivent complètement un produit pour sa fabrication et son contrôle."
      },
      {
       "terme": "Dessin de définition",
       "def": "Plan d'une pièce donnant toutes ses formes, dimensions, tolérances et exigences."
      },
      {
       "terme": "Dessin d'ensemble",
       "def": "Plan du produit assemblé montrant la position relative des pièces."
      },
      {
       "terme": "Repère",
       "def": "Numéro attribué à une pièce sur le dessin d'ensemble, renvoyant à la nomenclature."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste des pièces d'un ensemble avec repère, nombre, désignation, matière et observations."
      },
      {
       "terme": "Vue éclatée",
       "def": "Représentation où les pièces sont écartées selon leurs directions de montage."
      },
      {
       "terme": "Rendu réaliste",
       "def": "Image calculée simulant matières et lumière pour montrer l'aspect d'un produit."
      },
      {
       "terme": "Apparence",
       "def": "Réglage visuel d'une pièce dans un rendu : couleur, texture, brillance, transparence."
      },
      {
       "terme": "Revue de projet",
       "def": "Réunion où l'avancement et les choix d'un projet sont présentés et validés."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Analyser les documents professionnels",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bmp3-doc-cahier-charges-sysml",
     "titre": "Exploiter un cahier des charges et des diagrammes SysML",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Repérer la structure d'un dossier de présentation de projet : contexte, problème, cahier des charges, diagrammes",
      "Extraire d'un diagramme des exigences les valeurs chiffrées utiles à la conception",
      "Relier un diagramme de contexte et un diagramme de blocs à la structure du produit",
      "Reformuler un problème technique et formuler des exigences manquantes",
      "Rédiger une analyse structurée du besoin à partir des documents fournis"
     ],
     "sections": [
      {
       "titre": "Le document et sa structure",
       "contenu": "<p>À l'épreuve comme en entreprise, un projet de conception commence par un <strong>dossier de présentation</strong> : quelques pages qui décrivent le contexte (l'entreprise, le produit ou le poste de travail), le <strong>problème constaté</strong>, et les attentes sous forme de <strong>cahier des charges</strong>, souvent complété par des diagrammes SysML, des photos décrites, des plans de l'existant.</p>\n<table>\n<thead><tr><th>Partie du dossier</th><th>Ce qu'on y trouve</th><th>Ce qu'il faut en tirer</th></tr></thead>\n<tbody>\n<tr><td>Contexte</td><td>Entreprise, produit fabriqué, poste concerné, cadence</td><td>Les contraintes de production, l'environnement</td></tr>\n<tr><td>Problème</td><td>Description du dysfonctionnement ou du besoin nouveau</td><td>La cause probable et ce qui doit changer</td></tr>\n<tr><td>Cahier des charges</td><td>Fonctions, critères, niveaux, flexibilités, contraintes</td><td>Les exigences chiffrées qui serviront à valider</td></tr>\n<tr><td>Diagrammes SysML</td><td>Contexte, exigences, blocs, flux</td><td>Les interactions, la hiérarchie des exigences, la structure</td></tr>\n<tr><td>Annexes</td><td>Plans de l'existant, extraits de catalogues, données matériaux</td><td>Les ressources pour proposer et vérifier une solution</td></tr>\n</tbody>\n</table>\n<p>Le vocabulaire est celui de l'analyse du besoin : <strong>exigence</strong>, <strong>identifiant</strong> (Id), <strong>texte</strong>, <strong>critère</strong>, <strong>niveau</strong>, <strong>flexibilité</strong>, <strong>acteur</strong>, <strong>élément de contexte</strong>, <strong>bloc</strong>, <strong>flux</strong>.</p>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1) Lire le contexte et le problème en entier sans prendre de notes, pour comprendre la situation. 2) Reformuler le problème en une phrase : qui subit quoi, à cause de quoi, avec quelle conséquence (rebut, temps perdu, risque). 3) Dans le diagramme de contexte, lister les acteurs et éléments extérieurs : chacun peut être à l'origine d'une exigence (opérateur, pièce, énergie disponible, environnement). 4) Dans le diagramme des exigences, relever chaque exigence chiffrée dans un tableau : identifiant, texte, valeur, unité ; repérer les exigences « mères » et leurs décompositions. 5) Dans le diagramme de définition de blocs, repérer la structure du système et ce qui est concerné par le problème. 6) Croiser : chaque exigence doit pouvoir être vérifiée ; noter les incohérences ou les manques. 7) Conclure par la liste des exigences que la solution devra respecter en priorité.</div>\n<p>Cette lecture se fait crayon en main : on surligne les valeurs numériques et les unités, on encadre les mots qui expriment une obligation (« doit », « ne doit pas », « au minimum »), on souligne les éléments imposés (matériaux, composants existants, énergie disponible).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le diagramme des exigences fournit les critères de validation de la solution. Toute proposition devra, à la fin, être confrontée à ces valeurs une à une.</div>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li><strong>Proposer une solution avant d'avoir compris le problème</strong> : l'épreuve évalue d'abord l'analyse. Une solution brillante qui ne répond pas à la cause du problème ne vaut rien.</li>\n<li><strong>Confondre exigence et solution</strong> : « l'exigence 1.2 impose un vérin » est faux si l'exigence dit seulement « maintenir la pièce avec un effort de 200 N ».</li>\n<li><strong>Oublier les unités ou les flexibilités</strong> : 200 N ± 10 % et 200 N minimum ne laissent pas la même liberté.</li>\n<li><strong>Négliger les contraintes implicites</strong> : énergie disponible au poste (air comprimé 6 bar, 230 V), sécurité des opérateurs, cadence.</li>\n<li><strong>Ignorer les annexes</strong> : elles contiennent souvent la donnée qui débloque un calcul (masse d'une pièce, caractéristique d'un composant existant).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans un diagramme SysML, un lien de décomposition (cercle à croix) signifie que l'exigence mère est satisfaite si toutes ses sous-exigences le sont. Une valeur chiffrée peut se trouver uniquement dans une sous-exigence : il faut lire l'arbre jusqu'au bout.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p><strong>Contexte décrit.</strong> Une entreprise fabrique des sangles d'arrimage. Au poste de soudage par points, un opérateur pose une tête métallique (plaquette d'acier de 40 × 25 × 2 mm, masse 15 g) sur l'extrémité d'une sangle, puis appuie sur deux boutons pour faire descendre l'électrode. Cadence : 300 pièces par heure.</p>\n<p><strong>Problème décrit.</strong> L'opérateur positionne la tête « à l'œil » puis retire ses mains pour actionner les boutons. Au contact de l'électrode, la tête glisse parfois : 4 % des assemblages sont rebutés pour soudure décentrée.</p>\n<p><strong>Diagramme de contexte décrit.</strong> Au centre, le bloc « montage de positionnement ». Autour : opérateur, tête métallique, sangle, électrode, table de soudage, réseau d'air comprimé.</p>\n<p><strong>Diagramme des exigences décrit.</strong></p>\n<table>\n<thead><tr><th>Id</th><th>Texte</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Le montage doit positionner la tête par rapport à l'électrode</td></tr>\n<tr><td>1.1</td><td>Écart de position de la tête par rapport à l'axe de l'électrode : ≤ 0,5 mm</td></tr>\n<tr><td>1.2</td><td>La tête doit rester maintenue jusqu'au contact de l'électrode</td></tr>\n<tr><td>2</td><td>Le montage doit permettre le chargement et le déchargement rapide</td></tr>\n<tr><td>2.1</td><td>Temps de chargement : ≤ 3 s</td></tr>\n<tr><td>3</td><td>Le montage ne doit pas perturber le soudage</td></tr>\n<tr><td>3.1</td><td>Les éléments au voisinage de l'électrode doivent être isolants électriquement ou éloignés de 10 mm au moins</td></tr>\n<tr><td>4</td><td>Le montage doit se fixer sur la table existante (rainures en T de 12 mm)</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Reformulation du problème.</strong> La tête n'est ni positionnée de façon reproductible ni maintenue entre le moment où l'opérateur la lâche et celui où l'électrode la serre. La cause est double : absence de butées de positionnement et absence de maintien. La conséquence est un taux de rebut de 4 %, soit environ 12 pièces par heure à la cadence indiquée.</p>\n<p><strong>Exigences retenues.</strong> Positionnement à ± 0,5 mm (1.1), maintien jusqu'au contact (1.2), chargement en moins de 3 s (2.1), compatibilité électrique (3.1), fixation sur rainures en T de 12 mm (4). L'exigence 2.1 est directement liée à la cadence : 300 pièces par heure laissent 12 s par cycle, le chargement ne doit donc pas en consommer plus du quart.</p>\n<p><strong>Éléments du contexte exploitables.</strong> Le réseau d'air comprimé est disponible : un maintien pneumatique est envisageable, mais il n'est pas imposé. La tête est en acier : un maintien magnétique est aussi envisageable, sous réserve de l'exigence 3.1 (un aimant près de l'électrode pourrait perturber le soudage ou être échauffé).</p>\n<p><strong>Points à clarifier.</strong> Le cahier des charges ne précise pas si l'orientation de la tête (angle) doit être garantie, ni l'effort que l'électrode exerce en descendant. Ces deux données conditionnent le choix des butées et l'effort de maintien : il faut les demander ou formuler une hypothèse écrite (par exemple, butées sur deux côtés de la plaquette pour garantir aussi l'orientation).</p>\n<p><strong>Lien avec la structure.</strong> Si le dossier fournit un diagramme de définition de blocs du poste, le montage de positionnement y apparaît comme un nouveau bloc rattaché au poste de soudage, à côté de la table, de la pince de soudage et de la commande bimanuelle. Le diagramme montre ainsi que la solution ne doit pas modifier la commande existante : elle s'ajoute au poste sans changer son mode de déclenchement.</p>\n<p><strong>Conclusion.</strong> La solution devra comporter des surfaces de mise en position de la tête (par exemple une butée en équerre ou deux pions) et un dispositif de maintien actif ou passif, compatibles avec le soudage, rapides à charger et fixés sur la table existante.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> ce type d'analyse tient sur une page et est présenté au chef d'atelier avant toute recherche de solution. Il arrive souvent qu'il révèle une donnée oubliée, ici l'effort de l'électrode, qui change complètement le dimensionnement.</div>"
      },
      {
       "titre": "Rédiger la réponse écrite",
       "contenu": "<p>Une analyse de cahier des charges se rédige de façon structurée, pour qu'un lecteur pressé trouve immédiatement l'essentiel. La forme suivante convient aussi bien à une copie d'examen qu'à une note interne :</p>\n<ol>\n<li><strong>Le problème</strong> en une ou deux phrases, avec sa conséquence chiffrée si les documents le permettent.</li>\n<li><strong>Les causes</strong> identifiées, en distinguant ce qui est certain (décrit dans le document) de ce qui est supposé.</li>\n<li><strong>Les exigences</strong> à respecter, sous forme de tableau (identifiant, valeur, unité), en mettant en tête celles qui traitent directement la cause du problème.</li>\n<li><strong>Les ressources et contraintes</strong> du contexte : énergies disponibles, éléments existants à conserver, normes ou règles de sécurité.</li>\n<li><strong>Les manques et incohérences</strong>, avec l'hypothèse retenue pour chacun.</li>\n</ol>\n<p>On évite les paraphrases du sujet : recopier le texte d'une exigence sans en tirer de conséquence n'apporte rien. Chaque ligne doit montrer une compréhension : pourquoi cette exigence compte, ce qu'elle implique pour la solution.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne analyse se reconnaît à ce qu'elle oriente la recherche de solutions sans l'enfermer : elle dit ce qu'il faut obtenir, pas comment l'obtenir.</div>"
      }
     ],
     "points_cles": [
      "Le dossier de présentation comprend contexte, problème, cahier des charges, diagrammes et annexes",
      "On reformule le problème en une phrase avant toute recherche de solution",
      "Chaque acteur du diagramme de contexte peut générer une exigence",
      "Les exigences chiffrées se relèvent dans un tableau avec identifiant, valeur et unité",
      "Un lien de décomposition impose de lire toutes les sous-exigences",
      "Exigence et solution ne doivent pas être confondues",
      "Contraintes implicites et annexes contiennent souvent la donnée clé",
      "Les données manquantes se signalent ou font l'objet d'une hypothèse écrite"
     ],
     "lexique": [
      {
       "terme": "Dossier de présentation",
       "def": "Ensemble de documents décrivant le contexte, le problème et les attentes d'un projet."
      },
      {
       "terme": "Exigence",
       "def": "Énoncé de ce que le système doit faire ou respecter, avec si possible une valeur vérifiable."
      },
      {
       "terme": "Identifiant",
       "def": "Numéro unique d'une exigence dans un diagramme SysML."
      },
      {
       "terme": "Décomposition",
       "def": "Lien qui divise une exigence en sous-exigences."
      },
      {
       "terme": "Élément de contexte",
       "def": "Acteur ou objet extérieur avec lequel le système interagit."
      },
      {
       "terme": "Cadence",
       "def": "Nombre de pièces produites par unité de temps."
      },
      {
       "terme": "Taux de rebut",
       "def": "Proportion de pièces non conformes mises au rebut."
      },
      {
       "terme": "Hypothèse",
       "def": "Supposition écrite et justifiée qui remplace une donnée manquante."
      }
     ]
    },
    {
     "id": "bmp3-doc-dessin-ensemble",
     "titre": "Lire un dessin d'ensemble et sa nomenclature",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les informations d'un dessin d'ensemble : vues, coupes, repères, cotes d'encombrement et d'ajustement, cartouche",
      "Associer chaque repère à sa ligne de nomenclature et à sa fonction",
      "Établir les classes d'équivalence et le graphe des liaisons à partir du dessin",
      "Expliquer le fonctionnement du mécanisme et le cheminement des efforts",
      "Repérer les solutions constructives : guidages, arrêts, assemblages, étanchéités"
     ],
     "sections": [
      {
       "titre": "Le document et son vocabulaire",
       "contenu": "<p>Le <strong>dessin d'ensemble</strong> est le document central d'un dossier technique. Il représente un mécanisme assemblé, généralement par une ou deux vues dont une en <strong>coupe</strong>, avec les <strong>repères</strong> de toutes les pièces. Il est accompagné de la <strong>nomenclature</strong>, placée au-dessus du cartouche ou sur une feuille séparée.</p>\n<table>\n<thead><tr><th>Élément du document</th><th>Information</th></tr></thead>\n<tbody>\n<tr><td>Cartouche</td><td>Titre du mécanisme, échelle, méthode de projection, numéro et indice</td></tr>\n<tr><td>Vues et coupes</td><td>Position relative des pièces ; formes intérieures</td></tr>\n<tr><td>Repères</td><td>Numéro de chaque pièce, renvoyant à la nomenclature</td></tr>\n<tr><td>Nomenclature</td><td>Repère, nombre, désignation, matière, observations (norme, référence fournisseur, traitement)</td></tr>\n<tr><td>Cotes</td><td>Encombrement, course, cotes d'interface, ajustements (Ø H7/g6)</td></tr>\n<tr><td>Notes</td><td>Couples de serrage, lubrification, réglages</td></tr>\n</tbody>\n</table>\n<p>Les <strong>hachures</strong> différencient les pièces coupées : une même pièce garde les mêmes hachures sur toutes les vues, deux pièces voisines ont des hachures différentes. Les pièces pleines (axes, vis, goupilles) ne sont pas hachurées en coupe longitudinale.</p>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1) Lire le cartouche : nom du mécanisme, échelle, méthode de projection. 2) Lire la nomenclature en entier : repérer les composants du commerce (vis, roulements, vérin, anneaux élastiques), qui renseignent immédiatement sur les liaisons. 3) Identifier la pièce de référence (bâti, corps) et ses fixations. 4) Retrouver chaque repère sur le dessin et suivre le contour de chaque pièce grâce à ses hachures ; pour les pièces importantes, les colorier. 5) Identifier l'entrée du mécanisme (où arrive l'énergie : manivelle, vérin, moteur) et la sortie (ce qui agit sur la pièce ou le produit). 6) Regrouper les pièces en classes d'équivalence. 7) Pour chaque contact entre classes, identifier la liaison. 8) Décrire le fonctionnement en une suite de phrases : « le vérin pousse…, ce qui fait tourner…, qui serre… ». 9) Relever les solutions constructives et les cotes importantes.</div>\n<p>Les composants du commerce sont des indices précieux : deux roulements sur un arbre annoncent une liaison pivot ; un anneau élastique annonce un arrêt axial ; une clavette annonce un encastrement en rotation entre un arbre et un moyeu ; un joint torique sur une tige annonce une étanchéité dynamique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un dessin d'ensemble se lit en suivant l'énergie de l'entrée vers la sortie. Décrire le fonctionnement dans cet ordre évite les oublis.</div>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li><strong>Oublier une pièce dans une classe d'équivalence</strong> : les vis, rondelles et goupilles appartiennent à la classe des pièces qu'elles assemblent ; elles ne forment pas une classe à part.</li>\n<li><strong>Placer un ressort ou un joint dans une classe</strong> : ces éléments déformables sont exclus des classes d'équivalence.</li>\n<li><strong>Confondre deux pièces voisines</strong> parce que les hachures se ressemblent : vérifier l'orientation et l'espacement.</li>\n<li><strong>Mal lire un roulement</strong> : sa bague intérieure appartient à la classe de l'arbre, sa bague extérieure à celle du logement.</li>\n<li><strong>Ignorer l'échelle</strong> : mesurer une dimension sur le plan sans tenir compte de l'échelle donne des valeurs fausses ; une dimension mesurée se convertit en divisant par l'échelle (à l'échelle 1:2, 30 mm mesurés correspondent à 60 mm réels).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un document reproduit, l'échelle peut avoir été modifiée par l'impression. On vérifie toujours avec une cote connue : on mesure la cote sur le plan, on compare à sa valeur inscrite, et on en déduit l'échelle réelle du document.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p><strong>Dessin décrit.</strong> « Bride de serrage pneumatique », échelle 1:1, méthode européenne. Vue de face en coupe par le plan de symétrie. Un corps en L (rep. 1), fixé sur la table par deux vis CHC (rep. 9), porte à gauche un vérin pneumatique compact (rep. 2) dont la tige est vers le haut. L'extrémité de la tige est vissée dans une chape (rep. 3). Un levier horizontal (rep. 4) est articulé sur la chape par un axe (rep. 5) et sur le haut du corps par un second axe (rep. 6), situé 40 mm à droite de l'axe de la tige. L'extrémité droite du levier porte un patin de serrage (rep. 7) vissé, qui appuie sur la pièce à 80 mm à droite de l'axe rep. 6. Les axes sont arrêtés par des anneaux élastiques (rep. 8). Les alésages du levier sont équipés de bagues (rep. 10). Cote d'ajustement indiquée : Ø8 H7/g6 entre axes et bagues.</p>\n<table>\n<thead><tr><th>Rep.</th><th>Nb</th><th>Désignation</th><th>Matière</th><th>Observations</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>1</td><td>Corps</td><td>S235JR</td><td>Mécano-soudé</td></tr>\n<tr><td>2</td><td>1</td><td>Vérin double effet Ø32 course 25</td><td>—</td><td>Référence fournisseur</td></tr>\n<tr><td>3</td><td>1</td><td>Chape</td><td>C45</td><td></td></tr>\n<tr><td>4</td><td>1</td><td>Levier</td><td>EN AW-2017A</td><td></td></tr>\n<tr><td>5</td><td>1</td><td>Axe Ø8</td><td>C45</td><td>Trempé</td></tr>\n<tr><td>6</td><td>1</td><td>Axe Ø8</td><td>C45</td><td>Trempé</td></tr>\n<tr><td>7</td><td>1</td><td>Patin de serrage</td><td>PA6</td><td></td></tr>\n<tr><td>8</td><td>4</td><td>Anneau élastique pour arbre 8</td><td>Acier</td><td>DIN 471</td></tr>\n<tr><td>9</td><td>2</td><td>Vis CHC M8 × 25</td><td>Classe 8.8</td><td>ISO 4762</td></tr>\n<tr><td>10</td><td>2</td><td>Bague autolubrifiante</td><td>Bronze fritté</td><td>Montée serrée dans 4</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Classes d'équivalence.</strong> Bâti : {1, corps du vérin 2, 9}. Tige : {tige du vérin, 3}. Levier : {4, 7, 10}. Les axes 5 et 6 avec leurs anneaux 8 peuvent être rattachés à la chape et au corps respectivement, ou étudiés à part ; on les rattache ici aux pièces dans lesquelles ils sont arrêtés.</p>\n<p><strong>Liaisons.</strong> Tige / bâti : pivot glissant d'axe vertical (tige guidée dans le vérin). Levier / tige : pivot d'axe horizontal (axe 5 dans la bague 10). Levier / bâti : pivot d'axe horizontal (axe 6 dans la bague 10). Le graphe est une chaîne fermée : bâti, tige, levier, bâti.</p>\n<p><strong>Fonctionnement.</strong> Quand la chambre inférieure du vérin est alimentée, la tige monte et soulève l'extrémité gauche du levier ; le levier tourne autour de l'axe 6 et son extrémité droite descend : le patin 7 serre la pièce. Alimenter la chambre supérieure fait l'inverse et libère la pièce. Le mouvement de la tige est vertical alors que le point d'articulation sur le levier décrit un arc de cercle : la liaison pivot glissant de la tige et la faible course (25 mm) rendent ce petit écart acceptable ; il faut cependant vérifier qu'il n'y a pas de blocage.</p>\n<p><strong>Efforts.</strong> Effort théorique du vérin Ø32 sous 6 bar : S = π × 32<sup>2</sup> / 4 ≈ 804 mm<sup>2</sup> ; F = 0,6 × 804 ≈ 482 N. En négligeant le poids et les frottements, l'équilibre du levier autour de l'axe 6 donne 482 × 40 = F<sub>serrage</sub> × 80, soit F<sub>serrage</sub> ≈ 241 N.</p>\n<p><strong>Solutions constructives relevées.</strong> Bagues autolubrifiantes serrées dans le levier en aluminium, pour éviter le frottement direct acier-aluminium ; axes trempés pour résister à l'usure ; anneaux élastiques pour l'arrêt axial ; patin en polyamide pour ne pas marquer la pièce ; ajustement H7/g6 glissant juste, adapté à une articulation.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> cette analyse permet de répondre immédiatement à une demande de l'atelier, par exemple « peut-on serrer plus fort ? » : il suffit de rapprocher le patin de l'axe 6 ou d'éloigner la tige, ou de choisir un vérin de diamètre supérieur, en vérifiant ensuite la résistance des axes.</div>"
      },
      {
       "titre": "Du dessin d'ensemble à la maquette et aux propositions",
       "contenu": "<p>Dans le métier de modeleur, la lecture d'un dessin d'ensemble débouche souvent sur une action : reconstruire la maquette numérique d'un mécanisme ancien, ou proposer une amélioration. L'analyse précédente sert alors de feuille de route.</p>\n<ul>\n<li>Les <strong>classes d'équivalence</strong> deviennent des sous-assemblages de la maquette, ce qui permet ensuite d'animer le mécanisme.</li>\n<li>Les <strong>liaisons</strong> identifiées guident le choix des contraintes d'assemblage : coaxialité et coïncidence d'épaulement pour les pivots, coaxialité seule pour la tige du vérin.</li>\n<li>Les <strong>composants du commerce</strong> se prennent dans les bibliothèques ou sur le site du fabricant, d'après la nomenclature.</li>\n<li>Les <strong>cotes</strong> du dessin d'ensemble (entraxes, course, ajustements) sont les cotes directrices à placer dans un squelette.</li>\n</ul>\n<p>Pour proposer une amélioration, on part des faiblesses repérées pendant la lecture : usure probable d'une articulation, effort de serrage insuffisant, accès difficile au montage, absence de réglage. Chaque proposition se présente avec un croquis, l'exigence qu'elle améliore, et ses conséquences sur les autres pièces.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une lecture de dessin d'ensemble réussie permet de répondre à trois questions sans hésiter : comment ça marche, comment c'est monté, et où sont les points faibles.</div>"
      }
     ],
     "points_cles": [
      "La lecture débouche sur une maquette structurée en classes ou sur des propositions argumentées",
      "Le dessin d'ensemble montre l'assemblage, les repères, les cotes d'encombrement et d'ajustement",
      "La nomenclature associe chaque repère à sa désignation, sa matière et ses observations",
      "Les composants du commerce révèlent les liaisons : roulements, anneaux élastiques, clavettes, joints",
      "On lit le mécanisme de l'entrée d'énergie vers la sortie",
      "Les vis appartiennent à la classe des pièces qu'elles assemblent ; ressorts et joints sont exclus",
      "L'échelle se vérifie avec une cote connue avant toute mesure sur le plan",
      "L'analyse aboutit aux classes, aux liaisons, au fonctionnement, aux efforts et aux solutions constructives"
     ],
     "lexique": [
      {
       "terme": "Dessin d'ensemble",
       "def": "Plan d'un mécanisme assemblé, avec ses repères et sa nomenclature."
      },
      {
       "terme": "Repère",
       "def": "Numéro d'identification d'une pièce sur le dessin d'ensemble."
      },
      {
       "terme": "Chape",
       "def": "Pièce en forme de U recevant une articulation par un axe."
      },
      {
       "terme": "Anneau élastique",
       "def": "Arrêt axial en acier à ressort logé dans une gorge."
      },
      {
       "terme": "Bague autolubrifiante",
       "def": "Coussinet poreux imprégné de lubrifiant, ne nécessitant pas d'entretien."
      },
      {
       "terme": "Chaîne fermée",
       "def": "Structure de mécanisme où l'on revient au bâti par plusieurs chemins de liaisons."
      },
      {
       "terme": "Hachures",
       "def": "Traits fins parallèles qui signalent la matière coupée d'une pièce."
      },
      {
       "terme": "Composant du commerce",
       "def": "Pièce achetée sur catalogue, désignée par sa norme ou sa référence fournisseur."
      }
     ]
    },
    {
     "id": "bmp3-doc-dessin-definition",
     "titre": "Lire un dessin de définition coté et tolérancé",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Repérer les informations d'un dessin de définition : vues, cotes, tolérances, spécifications géométriques, états de surface, cartouche",
      "Identifier les surfaces fonctionnelles et le système de références",
      "Calculer les limites d'une cote tolérancée et interpréter un ajustement",
      "Traduire une spécification géométrique en phrase : élément tolérancé, zone, références",
      "Relier la spécification à la fonction de la pièce et à son contrôle"
     ],
     "sections": [
      {
       "titre": "Le document et son vocabulaire",
       "contenu": "<p>Le <strong>dessin de définition</strong> décrit une seule pièce, complètement. C'est le document qui part chez le fabricant et qui sert de référence au contrôle. Il comprend :</p>\n<ul>\n<li>les <strong>vues</strong> et <strong>coupes</strong> nécessaires, avec parfois une vue en perspective pour faciliter la lecture ;</li>\n<li>les <strong>cotes nominales</strong>, les <strong>cotes tolérancées</strong> (40 ± 0,05, Ø20 H7) et les <strong>cotes encadrées</strong> (théoriquement exactes) ;</li>\n<li>les <strong>références</strong> (triangles noircis avec lettres A, B, C) et les <strong>cadres de tolérance géométrique</strong> ;</li>\n<li>les symboles d'<strong>état de surface</strong> (Ra) ;</li>\n<li>les <strong>notes</strong> : arêtes cassées, traitements, marquage ;</li>\n<li>le <strong>cartouche</strong> : matière, tolérances générales (par exemple ISO 2768-mK), méthode de projection, échelle, indice, et souvent la mention de la norme de tolérancement (ISO 8015).</li>\n</ul>\n<p>Dans une indication comme « ISO 2768-mK », la lettre minuscule (m) renvoie à la classe de tolérances dimensionnelles générales de la norme ISO 2768-1, et la majuscule (K) à la classe de tolérances géométriques générales de la norme ISO 2768-2 (rectitude, planéité, perpendicularité, symétrie, battement non spécifiés individuellement). Cette mention couvre donc à la fois les dimensions et les formes de toutes les surfaces non tolérancées. Sur les plans récents, la norme ISO 22081 remplace progressivement ISO 2768-2 pour les spécifications géométriques générales ; il faut lire précisément ce qu'indique le cartouche du document fourni.</p>\n<p>Lire un dessin de définition, c'est d'abord comprendre <strong>à quoi sert la pièce</strong> : les exigences les plus serrées se trouvent toujours sur les surfaces qui assurent une fonction (centrage, guidage, appui, étanchéité).</p>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1) Lire le cartouche : matière, traitement, tolérances générales, échelle. 2) Reconstituer la forme de la pièce à partir des vues. 3) Repérer les références A, B, C et les surfaces qui les portent : ce sont les surfaces de mise en position de la pièce dans son assemblage. 4) Lister les surfaces porteuses de tolérances serrées, de spécifications géométriques ou de Ra faibles : ce sont les surfaces fonctionnelles. 5) Pour chaque cote tolérancée, calculer la cote mini et la cote maxi. 6) Pour chaque cadre géométrique, écrire une phrase : « l'axe de l'alésage doit se trouver dans un cylindre de Ø0,02 perpendiculaire à A ». 7) Relier chaque exigence à une fonction : pourquoi cette précision ici ? 8) Repérer les cotes qui relèvent des tolérances générales et vérifier qu'aucune forme n'est indéfinie.</div>\n<table>\n<thead><tr><th>Exigence lue</th><th>Question à se poser</th></tr></thead>\n<tbody>\n<tr><td>Ø20 H7 Ra 0,8</td><td>Quelle pièce vient dans cet alésage ? (roulement, axe, bague)</td></tr>\n<tr><td>Planéité 0,02 sur une face</td><td>Cette face est-elle une face d'appui ou d'étanchéité ?</td></tr>\n<tr><td>Perpendicularité d'un axe par rapport à A</td><td>Un arbre doit-il être perpendiculaire à la face de fixation ?</td></tr>\n<tr><td>Localisation de trous par rapport à A et B</td><td>Ces trous doivent-ils correspondre aux trous d'une autre pièce ?</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li><strong>Confondre l'axe et la surface</strong> : la flèche d'un cadre alignée sur la ligne de cote désigne l'axe ; décalée sur le contour, elle désigne la surface.</li>\n<li><strong>Oublier le Ø dans le cadre</strong> : « 0,1 » sans Ø définit une zone entre deux plans parallèles ; « Ø0,1 » définit un cylindre. Les deux n'ont pas le même sens.</li>\n<li><strong>Chercher une tolérance sur une cote encadrée</strong> : elle n'en a pas ; c'est le cadre de tolérance associé qui limite le défaut.</li>\n<li><strong>Ignorer les tolérances générales</strong> : une cote sans tolérance n'est pas libre, elle relève de la norme indiquée au cartouche.</li>\n<li><strong>Lire H7 comme une valeur</strong> : H7 est une classe de tolérance ; les écarts dépendent du diamètre et se lisent dans un tableau ISO 286.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'ordre des références dans le cadre compte. A|B signifie : d'abord appuyer la pièce sur A (référence primaire), puis orienter ou positionner par B. Inverser cet ordre change la façon de mesurer et peut rendre conforme une pièce qui ne l'est pas, ou l'inverse.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p><strong>Dessin décrit.</strong> « Support de palier », matière EN AW-6082, tolérances générales ISO 2768-m, échelle 1:1, méthode européenne. La pièce est une plaque de 80 × 60 × 15 mm. Elle est percée en son centre d'un alésage débouchant Ø22 H7, Ra 0,8, destiné à recevoir la bague extérieure d'un roulement. Deux trous Ø6,6 traversent la plaque, sur une même ligne horizontale, à l'entraxe encadré 60, symétriques par rapport à l'axe de l'alésage ; ils reçoivent les vis de fixation sur un bâti.</p>\n<table>\n<thead><tr><th>Élément</th><th>Inscription sur le dessin</th></tr></thead>\n<tbody>\n<tr><td>Face arrière (appui sur le bâti)</td><td>Référence A ; planéité 0,02 ; Ra 1,6</td></tr>\n<tr><td>Alésage Ø22 H7</td><td>Référence B ; perpendicularité Ø0,02 par rapport à A</td></tr>\n<tr><td>Deux trous Ø6,6</td><td>Localisation Ø0,2 par rapport à A et B ; entraxe 60 encadré</td></tr>\n<tr><td>Face avant</td><td>Parallélisme 0,05 par rapport à A</td></tr>\n<tr><td>Épaisseur</td><td>15 ± 0,05</td></tr>\n<tr><td>Autres faces</td><td>Ra 3,2 ; arêtes cassées 0,5 × 45°</td></tr>\n</tbody>\n</table>\n<p>Donnée fournie en annexe : pour Ø22 H7, écarts 0 / +0,021 mm.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Fonction de la pièce.</strong> Le support positionne un roulement par rapport à un bâti. Les surfaces fonctionnelles sont donc la face d'appui (A), l'alésage du roulement (B) et les trous de fixation.</p>\n<p><strong>Alésage.</strong> Ø22 H7 : cote mini 22,000, cote maxi 22,021 mm. Le Ra 0,8 correspond à une finition par alésage ou tournage de finition : c'est la portée du roulement, qui doit être lisse et précise pour que la bague extérieure soit correctement maintenue.</p>\n<p><strong>Perpendicularité.</strong> Phrase : « l'axe réel de l'alésage doit se trouver dans un cylindre de diamètre 0,02 mm perpendiculaire au plan de référence A ». Fonction : l'arbre porté par le roulement doit être perpendiculaire au bâti ; un défaut ferait travailler le roulement de travers.</p>\n<p><strong>Planéité de A.</strong> La face d'appui doit être comprise entre deux plans parallèles distants de 0,02 mm, pour que le support repose sur le bâti sans basculer et que la perpendicularité soit réellement obtenue au montage.</p>\n<p><strong>Localisation des trous.</strong> Chaque axe de trou doit se trouver dans un cylindre de Ø0,2 perpendiculaire à A, centré à 30 mm de part et d'autre de l'axe de l'alésage B (entraxe encadré 60). La tolérance est large car les trous Ø6,6 sont des trous de passage pour vis M6 : le jeu entre vis et trou absorbe ces écarts. Elle garantit simplement que les vis entreront dans les taraudages du bâti.</p>\n<p><strong>Épaisseur et parallélisme.</strong> 15 ± 0,05 : cote mini 14,95, maxi 15,05. Le parallélisme de la face avant (0,05 par rapport à A) est cohérent avec cette tolérance d'épaisseur ; il assure un appui correct d'un éventuel couvercle.</p>\n<p><strong>Conséquences pour la fabrication et le contrôle.</strong> La pièce sera usinée en commençant par la face A, qui servira d'appui pour réaliser l'alésage dans la même prise de pièce que les trous, afin de tenir perpendicularité et localisation. Le contrôle de la perpendicularité et de la localisation nécessite une machine à mesurer tridimensionnelle ou un montage avec comparateur ; l'alésage se contrôle au tampon lisse « entre / n'entre pas » ou à l'alésomètre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque exigence du dessin se justifie par une fonction. Si l'on ne trouve aucune justification, l'exigence est peut-être superflue et coûteuse : c'est un point à signaler au concepteur.</div>"
      },
      {
       "titre": "Préparer une maquette d'impression à partir du dessin",
       "contenu": "<p>Le modeleur doit souvent réaliser un <strong>prototype imprimé</strong> d'une pièce définie par un dessin comme celui-ci, par exemple pour valider un encombrement. Il faut alors traduire les exigences pour le procédé additif, qui n'atteint pas les précisions d'usinage.</p>\n<ul>\n<li>L'alésage Ø22 H7 ne peut pas être tenu à 0,021 mm près en impression FDM : on imprime un alésage légèrement plus petit, puis on le reprend à l'alésoir, ou l'on accepte un jeu si le prototype ne sert qu'à valider l'encombrement.</li>\n<li>La face A est imprimée côté plateau, qui donne la meilleure planéité.</li>\n<li>Les trous de passage horizontaux ou verticaux sont vérifiés au pied à coulisse après impression.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> on note sur la fiche du prototype quelles exigences du dessin sont respectées et lesquelles ne le sont pas. Ainsi, personne ne conclut à tort qu'un problème de montage sur le prototype vient du dessin, alors qu'il vient du procédé.</div>"
      }
     ],
     "points_cles": [
      "Le dessin de définition décrit une pièce complètement et sert de référence au contrôle",
      "Les références A, B, C portent sur les surfaces de mise en position",
      "Les exigences serrées signalent les surfaces fonctionnelles",
      "H7 est une classe de tolérance dont les écarts se lisent dans un tableau ISO 286",
      "Chaque cadre géométrique se traduit par une phrase : élément, zone, références",
      "Ø dans le cadre : zone cylindrique ; sans Ø : zone entre deux plans",
      "Une cote sans tolérance relève des tolérances générales du cartouche",
      "Chaque exigence doit se justifier par une fonction et a des conséquences sur fabrication et contrôle"
     ],
     "lexique": [
      {
       "terme": "Dessin de définition",
       "def": "Plan qui définit complètement une pièce pour sa fabrication et son contrôle."
      },
      {
       "terme": "Surface fonctionnelle",
       "def": "Surface qui assure une fonction dans l'assemblage : appui, centrage, guidage."
      },
      {
       "terme": "Référence primaire",
       "def": "Première référence d'un cadre, sur laquelle la pièce est d'abord mise en position."
      },
      {
       "terme": "Perpendicularité",
       "def": "Spécification d'orientation limitant l'écart à l'angle droit par rapport à une référence."
      },
      {
       "terme": "Planéité",
       "def": "Spécification de forme : la surface doit être comprise entre deux plans parallèles."
      },
      {
       "terme": "Localisation",
       "def": "Spécification de position d'un élément par rapport à des références et des cotes encadrées."
      },
      {
       "terme": "Trou de passage",
       "def": "Trou plus grand que la vis qui le traverse, sans filetage."
      },
      {
       "terme": "Tampon lisse",
       "def": "Calibre à deux côtés « entre » et « n'entre pas » pour contrôler un alésage."
      }
     ]
    },
    {
     "id": "bmp3-doc-catalogue-constructeur",
     "titre": "Exploiter un catalogue constructeur et une fiche technique",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Mener une recherche documentaire efficace : mots-clés, classification, filtres multicritères",
      "Repérer la structure d'une page de catalogue : tableau de sélection, caractéristiques, dimensions, désignation",
      "Traduire une exigence du cahier des charges en critères de sélection",
      "Choisir et justifier une référence en tenant compte des marges et des facteurs de service",
      "Rédiger une synthèse comparative de plusieurs composants"
     ],
     "sections": [
      {
       "titre": "La recherche documentaire",
       "contenu": "<p>Avant de lire un catalogue, il faut trouver le bon. La <strong>recherche documentaire</strong> technique s'appuie sur :</p>\n<ul>\n<li>des <strong>mots-clés</strong> précis, en français et souvent en anglais (« motoréducteur à arbre creux », « linear guide rail », « vérin compact ISO 21287 ») ;</li>\n<li>la <strong>classification</strong> des catalogues par familles (transmission, guidage, pneumatique, capteurs) ;</li>\n<li>les <strong>bases de données</strong> et configurateurs en ligne des fabricants et distributeurs, qui permettent une <strong>recherche multicritère</strong> par filtres (couple, vitesse, tension, encombrement) ;</li>\n<li>les bibliothèques de modèles 3D de composants, qui associent la référence, la fiche technique et le fichier de CAO.</li>\n</ul>\n<p>Le résultat est une courte liste de candidats, que l'on compare dans un <strong>tableau de synthèse</strong> : critères du cahier des charges en lignes, candidats en colonnes, et conclusion argumentée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une recherche documentaire efficace part des critères du cahier des charges, pas du premier produit trouvé. On note la source, la date et l'indice du catalogue utilisé, car les gammes évoluent.</div>"
      },
      {
       "titre": "La structure d'une page de catalogue",
       "contenu": "<p>Les catalogues de composants industriels suivent presque tous la même organisation :</p>\n<table>\n<thead><tr><th>Partie</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Présentation de la gamme</td><td>Principe, domaines d'emploi, options</td></tr>\n<tr><td>Guide de sélection</td><td>Démarche de choix, formules, facteurs de service, exemples de calcul</td></tr>\n<tr><td>Tableaux de sélection</td><td>Une ligne par référence : caractéristiques de performance (couple, vitesse, charge, course)</td></tr>\n<tr><td>Plans d'encombrement</td><td>Dessins cotés avec des cotes repérées par des lettres, et un tableau de valeurs par taille</td></tr>\n<tr><td>Codification de commande</td><td>Construction de la référence : taille, rapport, options, tension, montage</td></tr>\n<tr><td>Accessoires</td><td>Fixations, capteurs, raccords</td></tr>\n</tbody>\n</table>\n<p>Le vocabulaire courant comprend : <strong>valeur nominale</strong> (fonctionnement continu), <strong>valeur maximale</strong> (pointe admissible), <strong>facteur de service</strong> (coefficient qui majore la charge selon le type d'utilisation : chocs, nombre de démarrages, durée de fonctionnement journalière), <strong>rapport de réduction</strong>, <strong>charge radiale admissible</strong> en bout d'arbre, <strong>indice de protection</strong> IP.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les unités et les conditions des tableaux varient d'un fabricant à l'autre : vitesse en entrée ou en sortie, couple à 50 Hz ou à 60 Hz, charge statique ou dynamique. Lire les en-têtes et les notes de bas de tableau avant toute comparaison.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1) Écrire les exigences à satisfaire avec leurs unités (par exemple couple utile, vitesse de sortie, tension disponible, encombrement maximal). 2) Calculer les grandeurs demandées par le catalogue à partir du cahier des charges (puissance, couple, vitesse, charge équivalente). 3) Lire le guide de sélection et appliquer le facteur de service adapté à l'usage. 4) Dans le tableau, éliminer les références qui ne satisfont pas un critère impératif, puis choisir la plus petite qui satisfait tous les critères. 5) Vérifier les critères secondaires : charge radiale admissible, encombrement sur le plan coté, masse, protection IP. 6) Construire la référence de commande avec la codification. 7) Rédiger la justification : valeur demandée, valeur offerte, marge.</div>\n<p>Cette méthode vaut pour un motoréducteur, un roulement, un guidage linéaire, un vérin ou un capteur : seules les grandeurs changent.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une fois la référence choisie, on télécharge son modèle 3D exact sur le site du fabricant et on l'insère dans la maquette. On vérifie que les cotes du modèle correspondent à celles du plan d'encombrement du catalogue : les modèles téléchargés contiennent parfois des simplifications ou des erreurs.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p><strong>Besoin décrit.</strong> Un petit convoyeur à bande doit être entraîné par un motoréducteur. Les calculs donnent : couple nécessaire sur le tambour 14 N·m, vitesse du tambour 55 à 65 tr/min, alimentation 230/400 V triphasé, fonctionnement 16 h par jour avec démarrages fréquents. Le guide de sélection du catalogue indique pour cet usage un <strong>facteur de service</strong> de 1,4 : le couple nominal du motoréducteur doit être au moins égal au couple nécessaire multiplié par 1,4. Le tambour est monté directement sur l'arbre de sortie : la charge radiale due à la tension de la bande est estimée à 900 N.</p>\n<p><strong>Extrait de tableau de sélection décrit</strong> (valeurs du catalogue fournies avec le sujet) :</p>\n<table>\n<thead><tr><th>Référence</th><th>Puissance moteur (kW)</th><th>Vitesse de sortie (tr/min)</th><th>Couple nominal de sortie (N·m)</th><th>Charge radiale admissible (N)</th><th>Masse (kg)</th></tr></thead>\n<tbody>\n<tr><td>MR-A 0,09</td><td>0,09</td><td>60</td><td>12</td><td>1 200</td><td>4,1</td></tr>\n<tr><td>MR-A 0,12</td><td>0,12</td><td>58</td><td>17</td><td>1 200</td><td>4,6</td></tr>\n<tr><td>MR-B 0,18</td><td>0,18</td><td>61</td><td>25</td><td>2 000</td><td>6,8</td></tr>\n<tr><td>MR-B 0,25</td><td>0,25</td><td>59</td><td>36</td><td>2 000</td><td>7,9</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Critères.</strong> Couple nominal requis : 14 × 1,4 = 19,6 N·m. Vitesse de sortie : entre 55 et 65 tr/min. Charge radiale : au moins 900 N.</p>\n<p><strong>Élimination.</strong> Les quatre références respectent la vitesse. MR-A 0,09 (12 N·m) est insuffisant même sans facteur de service. MR-A 0,12 (17 N·m) couvre le couple nécessaire de 14 N·m mais pas le couple majoré de 19,6 N·m : il est éliminé, car le facteur de service traduit l'usage intensif décrit.</p>\n<p><strong>Choix.</strong> MR-B 0,18 : 25 N·m ≥ 19,6 N·m ; 61 tr/min dans la plage ; charge radiale admissible 2 000 N ≥ 900 N. C'est la plus petite référence qui satisfait tous les critères. MR-B 0,25 conviendrait aussi mais serait surdimensionné, plus lourd et plus cher.</p>\n<p><strong>Vérification de cohérence.</strong> Puissance utile au tambour : P = C × ω = 14 × (61 × 2π / 60) ≈ 14 × 6,39 ≈ 89 W. Le moteur de 0,18 kW couvre cette puissance avec une marge confortable, compatible avec le rendement du réducteur et le facteur de service.</p>\n<p><strong>Plan d'encombrement.</strong> Le catalogue fournit, pour la taille MR-B, un plan coté où les dimensions sont repérées par des lettres : diamètre de l'arbre de sortie (lettre d), longueur de l'arbre (l), entraxe des trous de fixation (e), hauteur d'axe (h), longueur totale moteur compris (L). Le tableau associé donne, pour chaque lettre, la valeur en millimètres. Le technicien reporte ces valeurs dans la maquette, vérifie que le motoréducteur tient dans l'espace prévu sous le convoyeur, que le carter ne gêne pas la bande, et que l'arbre de sortie a le diamètre et la clavette attendus par le moyeu du tambour. Si l'arbre ne convient pas, on choisit l'option d'arbre creux proposée dans la codification, ou l'on adapte le moyeu.</p>\n<p><strong>Codification.</strong> La référence de commande complète se construit en ajoutant à la taille les options choisies dans la page de codification : tension, position de la boîte à bornes, forme de fixation (à pattes ou à bride), type d'arbre. Une référence incomplète provoque des retours de commande et des retards.</p>\n<p><strong>Rédaction de la justification.</strong> « Motoréducteur retenu : MR-B 0,18. Couple nominal 25 N·m pour 19,6 N·m requis (facteur de service 1,4 inclus), soit une marge d'environ 28 % ; vitesse de sortie 61 tr/min pour une plage demandée de 55 à 65 ; charge radiale admissible 2 000 N pour 900 N estimés. À vérifier : encombrement sur le plan coté et compatibilité de l'arbre de sortie avec le tambour. »</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une justification de choix compare toujours une valeur demandée à une valeur offerte, avec les unités et la source. « Le moteur est assez puissant » n'est pas une justification.</div>"
      },
      {
       "titre": "Pièges à éviter et autres fiches techniques",
       "contenu": "<p>Les erreurs les plus fréquentes lors de l'exploitation d'un catalogue :</p>\n<ul>\n<li><strong>Oublier le facteur de service</strong> ou en inventer un : il se lit dans le guide de sélection du fabricant.</li>\n<li><strong>Prendre une valeur maximale pour une valeur nominale</strong> : un couple de pointe n'est admissible que brièvement.</li>\n<li><strong>Choisir trop grand « par sécurité »</strong> : surcoût, masse, encombrement, consommation.</li>\n<li><strong>Négliger les critères secondaires</strong> : charge radiale, protection IP en ambiance humide, température.</li>\n</ul>\n<p>La même démarche s'applique aux <strong>fiches techniques</strong> de matériaux (filament, résine, alliage) : identifier les conditions d'essai (éprouvette imprimée ou injectée, orientation, température), comparer les valeurs utiles (module, résistance, température de fléchissement sous charge), et ne pas mélanger des valeurs mesurées selon des méthodes différentes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> deux fiches de filaments peuvent annoncer des résistances très différentes simplement parce que les éprouvettes n'ont pas été imprimées dans la même orientation. Toujours vérifier la norme d'essai et les conditions avant de comparer.</div>"
      }
     ],
     "points_cles": [
      "La recherche documentaire part des critères du cahier des charges et aboutit à un tableau de synthèse",
      "Un catalogue comprend guide de sélection, tableaux, plans d'encombrement et codification de commande",
      "Le facteur de service majore la charge selon l'usage ; il se lit dans le catalogue",
      "On choisit la plus petite référence qui satisfait tous les critères impératifs",
      "Les critères secondaires (charge radiale, IP, encombrement) se vérifient ensuite",
      "Une justification compare valeur demandée et valeur offerte avec unités et marge",
      "Nominal et maximal ne se confondent pas",
      "Les fiches matériaux ne se comparent qu'à conditions d'essai identiques"
     ],
     "lexique": [
      {
       "terme": "Recherche multicritère",
       "def": "Recherche qui filtre des produits selon plusieurs caractéristiques simultanément."
      },
      {
       "terme": "Guide de sélection",
       "def": "Partie d'un catalogue qui décrit la démarche de choix et les formules à appliquer."
      },
      {
       "terme": "Facteur de service",
       "def": "Coefficient de majoration de la charge qui tient compte des conditions d'utilisation."
      },
      {
       "terme": "Valeur nominale",
       "def": "Valeur admissible en fonctionnement continu."
      },
      {
       "terme": "Charge radiale admissible",
       "def": "Effort perpendiculaire à l'arbre de sortie qu'un composant peut supporter."
      },
      {
       "terme": "Motoréducteur",
       "def": "Ensemble moteur et réducteur intégrés en un seul composant."
      },
      {
       "terme": "Codification",
       "def": "Règle de construction de la référence de commande d'un composant."
      },
      {
       "terme": "Indice de protection IP",
       "def": "Code indiquant la protection d'un matériel contre les poussières et l'eau."
      }
     ]
    },
    {
     "id": "bmp3-doc-rapport-simulation",
     "titre": "Analyser un rapport de simulation mécanique",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Repérer les rubriques d'un rapport de simulation : modèle, matériau, conditions aux limites, chargements, maillage, résultats",
      "Vérifier la cohérence des hypothèses avec le fonctionnement réel de la pièce",
      "Lire les valeurs maximales et leur localisation sur les cartographies décrites",
      "Conclure sur la validité de la pièce vis-à-vis du cahier des charges",
      "Proposer des modifications argumentées de la maquette"
     ],
     "sections": [
      {
       "titre": "Le document et sa structure",
       "contenu": "<p>Les logiciels de simulation génèrent des <strong>rapports</strong> standardisés que le technicien complète par ses commentaires. À l'épreuve, un extrait de rapport est souvent fourni sous forme de tableaux et de cartographies décrites, et il est demandé d'en tirer une conclusion. La structure habituelle est :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th><th>Ce qu'on vérifie</th></tr></thead>\n<tbody>\n<tr><td>Description de l'étude</td><td>Pièce, objectif, type d'analyse (statique linéaire)</td><td>L'analyse répond-elle à la question posée ?</td></tr>\n<tr><td>Modèle</td><td>Géométrie utilisée, simplifications</td><td>Les simplifications ne suppriment-elles pas une zone sensible ?</td></tr>\n<tr><td>Matériau</td><td>Nom, module de Young, coefficient de Poisson, limite élastique</td><td>Correspond-il au matériau prévu ?</td></tr>\n<tr><td>Déplacements imposés</td><td>Faces fixes, appuis, liaisons</td><td>Représentent-ils les liaisons réelles ?</td></tr>\n<tr><td>Chargements</td><td>Forces, pressions, couples, pesanteur, avec valeurs et surfaces</td><td>Valeurs, sens et zones d'application sont-ils corrects ?</td></tr>\n<tr><td>Maillage</td><td>Type et taille des éléments, nombre de nœuds, raffinements</td><td>Le maillage est-il assez fin dans les zones critiques ?</td></tr>\n<tr><td>Résultats</td><td>Contrainte de Von Mises, déplacements, coefficient de sécurité : valeurs mini/maxi et cartographies</td><td>Où sont les maxima ? sont-ils réalistes ?</td></tr>\n<tr><td>Conclusion</td><td>Validation ou non, préconisations</td><td>Est-elle cohérente avec le cahier des charges ?</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1) Relire l'exigence à valider (coefficient de sécurité minimal, déplacement maximal). 2) Vérifier le matériau : nom et limite élastique. 3) Vérifier les déplacements imposés : correspondent-ils à la façon dont la pièce est fixée ? 4) Vérifier les chargements : valeur, unité, direction, surface d'application ; refaire si possible le calcul qui a donné cette valeur. 5) Regarder la déformée décrite : est-elle logique ? 6) Relever la contrainte maximale, sa position, et juger si c'est une zone réelle de concentration (congé, trou) ou une singularité (arête vive, bord d'encastrement). 7) Calculer ou lire le coefficient de sécurité minimal et le comparer à l'exigence. 8) Relever le déplacement maximal et le comparer à l'exigence. 9) Conclure, puis proposer des modifications si nécessaire.</div>\n<p>Le vocabulaire à maîtriser : <strong>déplacement imposé</strong> (ou « fixation »), <strong>chargement</strong>, <strong>maillage</strong>, <strong>nœud</strong>, <strong>élément</strong>, <strong>contrainte équivalente de Von Mises</strong>, <strong>déplacement résultant</strong>, <strong>coefficient de sécurité</strong>, <strong>déformée amplifiée</strong>, <strong>échelle de déformation</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on ne lit les résultats qu'après avoir validé les hypothèses. Un résultat obtenu avec un mauvais matériau ou un chargement dix fois trop faible ne mérite aucun commentaire, sinon pour signaler l'erreur.</div>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li><strong>Prendre la déformée amplifiée pour la déformation réelle</strong> : l'affichage est souvent amplifié des centaines de fois ; seule la valeur numérique du déplacement compte.</li>\n<li><strong>Conclure sur une singularité</strong> : un pic de contrainte localisé sur une arête vive ou au bord d'une face encastrée n'est pas forcément représentatif.</li>\n<li><strong>Confondre unités</strong> : contraintes en MPa (N/mm<sup>2</sup>) ou en Pa (N/m<sup>2</sup>) ; un facteur 10<sup>6</sup> les sépare.</li>\n<li><strong>Oublier le coefficient de sécurité exigé</strong> : une contrainte inférieure à R<sub>e</sub> ne suffit pas si le cahier des charges demande s ≥ 2.</li>\n<li><strong>Appliquer un résultat isotrope à une pièce imprimée</strong> : la résistance réelle d'une pièce FDM peut être nettement plus faible entre les couches.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'échelle de couleurs d'une cartographie est souvent automatique : le rouge désigne la valeur maximale de <em>cette</em> simulation, pas une valeur dangereuse. Une pièce « toute rouge » peut être parfaitement sûre si le maximum est faible, et inversement.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p><strong>Extrait de rapport décrit.</strong> Étude statique linéaire d'un bras de support en porte-à-faux, destiné à porter un écran de contrôle.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu du rapport</th></tr></thead>\n<tbody>\n<tr><td>Géométrie</td><td>Bras de section rectangulaire pleine 30 × 8 mm, longueur 200 mm, avec à une extrémité une platine de fixation à deux trous ; congé de raccordement bras-platine R1 supprimé pour la simulation</td></tr>\n<tr><td>Matériau</td><td>Alliage d'aluminium : E = 69 000 MPa ; coefficient de Poisson 0,33 ; limite élastique 215 MPa</td></tr>\n<tr><td>Déplacements imposés</td><td>Face arrière de la platine entièrement encastrée</td></tr>\n<tr><td>Chargement</td><td>Force verticale vers le bas de 50 N répartie sur la face d'extrémité du bras</td></tr>\n<tr><td>Maillage</td><td>Tétraèdres, taille 4 mm, environ 8 000 nœuds, pas de raffinement local</td></tr>\n<tr><td>Résultats</td><td>Von Mises maxi : 64 MPa, à l'angle vif de raccordement bras-platine, face supérieure ; déplacement maxi : 1,9 mm à l'extrémité du bras ; coefficient de sécurité minimal : 3,4</td></tr>\n</tbody>\n</table>\n<p><strong>Exigences du cahier des charges.</strong> Masse de l'écran 4,5 kg ; coefficient de sécurité ≥ 2 ; flèche à l'extrémité ≤ 1,5 mm.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Hypothèses.</strong> Le chargement de 50 N est cohérent avec la masse de l'écran : 4,5 × 9,81 ≈ 44 N, arrondi à 50 N, ce qui inclut une petite marge. Le matériau correspond à un alliage d'aluminium courant. L'encastrement de toute la face arrière est une hypothèse favorable : en réalité, la platine est tenue par deux vis et peut légèrement se décoller, ce qui augmenterait un peu la flèche.</p>\n<p><strong>Contrôle par le calcul.</strong> Le bras est une poutre encastrée chargée à son extrémité. Moment maximal à l'encastrement : M = F × L = 50 × 200 = 10 000 N·mm. Pour une section rectangulaire fléchie selon sa hauteur de 30 mm, la contrainte maximale vaut σ = 6 M / (b h<sup>2</sup>) = 6 × 10 000 / (8 × 30<sup>2</sup>) ≈ 8,3 MPa. Le logiciel affiche 64 MPa : écart très important. En revanche, si le bras fléchit selon son épaisseur de 8 mm (section posée à plat), σ = 6 × 10 000 / (30 × 8<sup>2</sup>) ≈ 31 MPa, et la flèche théorique f = F L<sup>3</sup> / (3 E I) avec I = 30 × 8<sup>3</sup> / 12 = 2 560 mm<sup>4</sup> donne f = 50 × 200<sup>3</sup> / (3 × 69 000 × 2 560) ≈ 0,75 mm.</p>\n<p><strong>Interprétation.</strong> Le bras travaille donc à plat, selon son épaisseur de 8 mm. La contrainte nominale à l'encastrement est d'environ 31 MPa ; la valeur de 64 MPa est localisée à l'angle vif, dont le congé a été supprimé : c'est une concentration de contrainte amplifiée par la modélisation, proche d'une singularité. Le coefficient de sécurité de 3,4 calculé sur ce pic est donc prudent ; l'exigence s ≥ 2 est respectée.</p>\n<p><strong>Flèche.</strong> Le rapport annonce 1,9 mm alors que le calcul de poutre donne environ 0,75 mm. L'écart s'explique en partie par la déformation de la platine, prise en compte par le logiciel et pas par le calcul simple ; un écart d'un facteur supérieur à deux impose toutefois de vérifier aussi la position exacte du chargement et l'épaisseur de la platine dans le modèle avant de conclure définitivement. Dans tous les cas, 1,9 mm dépasse l'exigence de 1,5 mm : <strong>la pièce n'est pas validée</strong> sur le critère de flèche.</p>\n<p><strong>Préconisations.</strong> 1) Rétablir le congé R1 (ou plus grand) dans la maquette de simulation et raffiner le maillage dans cette zone. 2) Pour réduire la flèche, orienter la section pour que la plus grande dimension (30 mm) travaille en hauteur, ou ajouter une nervure verticale : la rigidité augmente fortement, la hauteur intervenant au cube dans le moment quadratique. 3) Rigidifier la platine (épaisseur, nervure de liaison). 4) Relancer la simulation et vérifier les deux critères.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une conclusion de rapport de simulation se rédige en distinguant clairement ce qui est validé, ce qui ne l'est pas, et les hypothèses qui pourraient changer le résultat. Le chef de projet doit pouvoir décider sans relire tout le rapport.</div>"
      },
      {
       "titre": "Rédiger la conclusion d'une analyse de simulation",
       "contenu": "<p>La conclusion attendue, à l'examen comme en entreprise, tient en quelques lignes structurées. Elle reprend chaque exigence et indique pour chacune le résultat, la marge et le verdict.</p>\n<table>\n<thead><tr><th>Exigence</th><th>Résultat</th><th>Verdict</th></tr></thead>\n<tbody>\n<tr><td>Coefficient de sécurité ≥ 2</td><td>3,4 au pic (angle vif), environ 6,9 en contrainte nominale</td><td>Validé</td></tr>\n<tr><td>Flèche ≤ 1,5 mm</td><td>1,9 mm selon le rapport</td><td>Non validé</td></tr>\n</tbody>\n</table>\n<p>Elle signale ensuite les <strong>hypothèses discutables</strong> (encastrement total de la platine, congé supprimé) et leur effet probable sur le résultat, puis les <strong>actions</strong> proposées, classées par efficacité et par coût. Une phrase finale indique la décision attendue : par exemple « modifier l'orientation de la section et relancer la simulation avant toute impression de prototype ».</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une conclusion de simulation n'est jamais seulement « la pièce résiste ». Elle traite la résistance et la déformation, discute les hypothèses et débouche sur une décision.</div>"
      }
     ],
     "points_cles": [
      "Un rapport de simulation se lit dans l'ordre : objectif, matériau, déplacements imposés, chargements, maillage, résultats",
      "On valide les hypothèses avant de commenter les résultats",
      "La déformée affichée est amplifiée ; seule la valeur numérique compte",
      "Un pic de contrainte sur une arête vive ou un encastrement peut être une singularité",
      "L'échelle de couleurs est relative à la simulation, pas au danger",
      "Un calcul de poutre simple contrôle l'ordre de grandeur",
      "La conclusion compare chaque résultat à chaque exigence du cahier des charges",
      "Les préconisations proposent des modifications précises de la maquette et une nouvelle simulation"
     ],
     "lexique": [
      {
       "terme": "Rapport de simulation",
       "def": "Document qui présente les hypothèses, les résultats et la conclusion d'une simulation."
      },
      {
       "terme": "Déplacement imposé",
       "def": "Condition qui bloque ou impose le mouvement de certaines faces du modèle."
      },
      {
       "terme": "Porte-à-faux",
       "def": "Partie d'une pièce dépassant de son appui et chargée à son extrémité."
      },
      {
       "terme": "Concentration de contrainte",
       "def": "Augmentation locale de la contrainte au voisinage d'un changement de forme."
      },
      {
       "terme": "Flèche",
       "def": "Déplacement transversal d'une poutre fléchie."
      },
      {
       "terme": "Moment quadratique",
       "def": "Grandeur géométrique de la section qui caractérise sa résistance à la flexion."
      },
      {
       "terme": "Déformée amplifiée",
       "def": "Affichage exagéré de la déformation pour la rendre visible."
      },
      {
       "terme": "Préconisation",
       "def": "Recommandation de modification issue de l'analyse des résultats."
      }
     ]
    },
    {
     "id": "bmp3-doc-fiche-impression-fds",
     "titre": "Exploiter une fiche de préparation d'impression et une fiche de données de sécurité",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Lire un rapport de tranchage : machine, matériau, paramètres, estimations de temps et de matière",
      "Vérifier qu'une préparation d'impression est cohérente avec l'objectif du prototype",
      "Estimer le coût matière et machine d'un prototype à partir de la fiche",
      "Repérer dans une fiche de données de sécurité les informations utiles au poste : dangers, protections, stockage, déchets",
      "Rédiger les consignes de prévention d'une opération de prototypage"
     ],
     "sections": [
      {
       "titre": "Les documents et leur structure",
       "contenu": "<p>Deux documents accompagnent presque toujours une réalisation de prototype :</p>\n<ul>\n<li>la <strong>fiche de préparation d'impression</strong> (ou rapport de tranchage), éditée à partir du logiciel de tranchage : elle récapitule la machine, le matériau, l'orientation, les paramètres, les supports, et estime le temps et la quantité de matière ;</li>\n<li>la <strong>fiche de données de sécurité</strong> (FDS) de chaque produit chimique utilisé (résine, solvant de nettoyage), fournie par le fabricant.</li>\n</ul>\n<p>La FDS suit une structure réglementaire en <strong>16 rubriques</strong> (règlement européen REACH), toujours dans le même ordre, ce qui permet de trouver rapidement l'information :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th><th>Utilité au poste</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Identification du produit et du fournisseur, numéro d'appel d'urgence</td><td>Savoir qui appeler</td></tr>\n<tr><td>2</td><td>Identification des dangers : pictogrammes, mention d'avertissement, mentions de danger (codes H), conseils de prudence (codes P)</td><td>Connaître les risques en un coup d'œil</td></tr>\n<tr><td>4</td><td>Premiers secours</td><td>Réagir en cas de contact ou d'inhalation</td></tr>\n<tr><td>7</td><td>Manipulation et stockage</td><td>Conditions de stockage, incompatibilités</td></tr>\n<tr><td>8</td><td>Contrôle de l'exposition, protection individuelle</td><td>Choix des gants, lunettes, ventilation</td></tr>\n<tr><td>13</td><td>Considérations relatives à l'élimination</td><td>Gestion des déchets</td></tr>\n</tbody>\n</table>\n<p>Les autres rubriques traitent de la composition, de la lutte contre l'incendie, des fuites accidentelles, des propriétés physico-chimiques, de la stabilité, de la toxicologie, de l'écologie, du transport et de la réglementation.</p>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour la fiche d'impression : 1) vérifier la machine, la buse et le matériau ; 2) vérifier l'orientation et la présence de supports au regard de ce que le prototype doit valider ; 3) lire les paramètres structurels (couches, périmètres, remplissage) et juger s'ils conviennent à l'usage (aspect ou fonction) ; 4) relever le temps, la masse et la longueur de matière ; 5) calculer le coût. Pour la FDS : 1) lire la rubrique 2 (pictogrammes et codes H) ; 2) lire la rubrique 8 pour les protections ; 3) lire les rubriques 4 et 7 pour les premiers secours et le stockage ; 4) lire la rubrique 13 pour l'élimination ; 5) traduire le tout en consignes courtes au poste.</div>\n<p>Le <strong>coût d'un prototype</strong> imprimé se décompose en coût matière (masse × prix au kilogramme, en ajoutant supports et purges), coût machine (temps × taux horaire, qui couvre l'amortissement, l'énergie et la maintenance), et temps de main-d'œuvre (préparation, post-traitement).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les codes H commencent par H2 pour les dangers physiques, H3 pour les dangers pour la santé, H4 pour les dangers pour l'environnement. Les codes P donnent les conseils de prudence correspondants.</div>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li><strong>Croire l'estimation de temps à la minute près</strong> : le temps réel dépend des accélérations de la machine et peut s'écarter sensiblement de l'estimation ; on garde une marge dans le planning.</li>\n<li><strong>Oublier la masse des supports</strong> dans le coût matière.</li>\n<li><strong>Choisir un remplissage élevé pour une maquette d'aspect</strong> : inutile, long et coûteux.</li>\n<li><strong>Lire seulement les pictogrammes de la FDS</strong> : les protections précises (type de gants, par exemple nitrile) sont en rubrique 8.</li>\n<li><strong>Utiliser une FDS ancienne ou d'un autre fournisseur</strong> : deux résines « grises standard » de marques différentes n'ont pas forcément la même composition.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une allergie cutanée aux résines (mention H317) peut apparaître après des contacts répétés, même sans réaction lors des premiers. Les gants sont obligatoires à chaque manipulation de résine liquide ou de pièce non post-polymérisée, et des gants souillés ne se réutilisent pas.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "<p><strong>Fiche de préparation décrite.</strong> Prototype fonctionnel d'un clip de fixation de câble, destiné à valider l'effort de clipsage.</p>\n<table>\n<thead><tr><th>Paramètre</th><th>Valeur</th></tr></thead>\n<tbody>\n<tr><td>Machine, buse</td><td>Imprimante FDM, buse 0,4 mm</td></tr>\n<tr><td>Matériau</td><td>PETG, prix 25 € le kilogramme</td></tr>\n<tr><td>Nombre de pièces sur le plateau</td><td>6 clips identiques</td></tr>\n<tr><td>Orientation</td><td>Clip posé à plat sur sa grande face, les bras élastiques dans le plan du plateau</td></tr>\n<tr><td>Hauteur de couche</td><td>0,2 mm</td></tr>\n<tr><td>Périmètres</td><td>3</td></tr>\n<tr><td>Remplissage</td><td>20 %, motif gyroïde</td></tr>\n<tr><td>Supports</td><td>Aucun</td></tr>\n<tr><td>Estimation</td><td>Durée 2 h 10 min ; 42 g ; 14 m de filament</td></tr>\n</tbody>\n</table>\n<p>Taux horaire machine retenu par l'atelier : 4 € par heure. Temps de préparation et de post-traitement : 15 minutes de technicien à 40 € de l'heure.</p>\n<p><strong>Extrait de FDS décrit (résine prévue pour une future maquette d'aspect).</strong> Rubrique 2 : pictogramme point d'exclamation et pictogramme environnement ; mention d'avertissement « Attention » ; H315 provoque une irritation cutanée, H317 peut provoquer une allergie cutanée, H319 provoque une sévère irritation des yeux, H411 toxique pour les organismes aquatiques, entraîne des effets néfastes à long terme. Rubrique 8 : gants en nitrile, lunettes de protection, ventilation du local. Rubrique 7 : conserver dans l'emballage d'origine fermé, à l'abri de la lumière. Rubrique 13 : éliminer le produit non polymérisé comme déchet dangereux, ne pas rejeter à l'égout.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Cohérence de la préparation.</strong> Le prototype doit valider un effort de clipsage : c'est un prototype fonctionnel, et la zone critique est la base des bras élastiques, sollicitée en flexion. L'orientation à plat place les couches parallèles au plan de flexion des bras : les filaments suivent la longueur des bras, et la flexion ne tend pas à séparer les couches. C'est le bon choix. Trois périmètres sur des bras fins signifient que ceux-ci sont probablement constitués presque uniquement de périmètres, ce qui est favorable à la résistance. Le PETG, plus tenace que le PLA, convient à une pièce qui doit se déformer de façon répétée. L'absence de supports est cohérente avec une pièce posée à plat.</p>\n<p><strong>Réserve.</strong> La pièce de série sera sans doute injectée : l'effort mesuré sur le prototype devra être interprété avec prudence, comme dans toute validation sur prototype imprimé.</p>\n<p><strong>Coût.</strong> Matière : 0,042 × 25 = 1,05 €. Machine : 2,17 h × 4 ≈ 8,67 €. Main-d'œuvre : 0,25 × 40 = 10 €. Total pour 6 clips ≈ 19,72 €, soit environ 3,30 € par clip. On constate que la matière ne représente qu'une faible part du coût : c'est le temps machine et le temps humain qui dominent.</p>\n<p><strong>Consignes tirées de la FDS.</strong> Pour la future maquette en résine : port obligatoire de gants nitrile et de lunettes ; travail dans un local ventilé ; flacons fermés, à l'abri de la lumière ; résine liquide et chiffons souillés collectés comme déchets dangereux, jamais à l'évier ; en cas de contact cutané, appliquer les premiers secours de la rubrique 4 (lavage abondant à l'eau et au savon). Le pictogramme environnement et la mention H411 confirment l'interdiction de tout rejet à l'égout.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> ces consignes sont affichées près de l'imprimante résine sous forme d'une fiche de poste d'une page, avec les pictogrammes, les EPI obligatoires et le numéro d'urgence. La FDS complète reste disponible à proximité.</div>"
      },
      {
       "titre": "Faire évoluer une préparation d'impression",
       "contenu": "<p>La fiche de préparation n'est pas seulement un document à lire : elle sert aussi à <strong>optimiser</strong> l'impression suivante. Après le premier essai, le technicien compare le résultat obtenu à ce qui était attendu et ajuste un paramètre à la fois, en gardant une trace de chaque version.</p>\n<table>\n<thead><tr><th>Constat sur le prototype</th><th>Ajustement possible</th></tr></thead>\n<tbody>\n<tr><td>Bras du clip cassés à la base</td><td>Ajouter un congé à la base dans la maquette, augmenter les périmètres, vérifier l'orientation</td></tr>\n<tr><td>Clip trop raide (effort trop élevé)</td><td>Modifier l'épaisseur des bras dans la maquette, pas le remplissage</td></tr>\n<tr><td>Pièce décollée du plateau en cours d'impression</td><td>Nettoyer le plateau, ajuster sa température, ajouter une bordure d'adhérence</td></tr>\n<tr><td>Durée trop longue pour le planning</td><td>Hauteur de couche plus grande pour les zones non critiques, moins de pièces par plateau</td></tr>\n</tbody>\n</table>\n<p>Modifier un seul paramètre à la fois permet d'attribuer l'effet observé à sa cause. Les réglages validés sont enregistrés comme <strong>profil</strong> du matériau et de la machine, réutilisable pour les projets suivants.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un défaut de comportement mécanique se corrige d'abord dans la maquette (forme, congés, épaisseurs) ; un défaut d'impression se corrige dans la préparation. Confondre les deux conduit à des essais sans fin.</div>"
      }
     ],
     "points_cles": [
      "La fiche de préparation récapitule machine, matériau, orientation, paramètres, supports, temps et matière",
      "La préparation se juge par rapport à ce que le prototype doit valider",
      "Le coût d'un prototype combine matière, temps machine et main-d'œuvre ; la matière pèse souvent peu",
      "La FDS compte 16 rubriques dans un ordre fixe",
      "Rubrique 2 : dangers et codes H ; rubrique 8 : protections ; rubrique 13 : élimination",
      "H2 dangers physiques, H3 santé, H4 environnement",
      "Les résines non polymérisées imposent gants nitrile, lunettes, ventilation et collecte en déchets dangereux",
      "On traduit la FDS en consignes courtes affichées au poste"
     ],
     "lexique": [
      {
       "terme": "Rapport de tranchage",
       "def": "Récapitulatif des réglages et estimations édité par le logiciel de préparation d'impression."
      },
      {
       "terme": "Taux horaire machine",
       "def": "Coût d'une heure d'utilisation d'une machine, incluant amortissement, énergie et maintenance."
      },
      {
       "terme": "Gyroïde",
       "def": "Motif de remplissage ondulé, aux propriétés proches dans toutes les directions du plan."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité : document réglementaire en 16 rubriques décrivant un produit chimique."
      },
      {
       "terme": "Mention de danger",
       "def": "Phrase codée H décrivant la nature d'un danger."
      },
      {
       "terme": "Conseil de prudence",
       "def": "Phrase codée P indiquant les mesures pour limiter un danger."
      },
      {
       "terme": "EPI",
       "def": "Équipement de protection individuelle : gants, lunettes, masque."
      },
      {
       "terme": "Déchet dangereux",
       "def": "Déchet présentant un danger, qui doit suivre une filière d'élimination spécifique."
      }
     ]
    }
   ]
  }
 ]
};
