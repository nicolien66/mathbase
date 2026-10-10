/* Polymates — Bac pro Pilote de ligne de production — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-pilote-ligne"] = {
 "id": "bp-pilote-ligne",
 "nom": "Pilote de ligne de production",
 "icone": "🎓",
 "couleur": "#8ab89a",
 "intro": "Le baccalauréat professionnel Pilote de ligne de production forme des techniciens capables de préparer, conduire et optimiser une ligne de production automatisée ou semi-automatisée, en coordonnant une équipe d'opérateurs, dans l'agroalimentaire, la pharmacie, la cosmétique, la plasturgie, la métallurgie ou l'automobile. Il mène aux métiers de pilote ou conducteur de ligne, conducteur d'installations, opérateur régleur puis chef d'équipe de production. Ce cours couvre les savoirs associés de la première et de la terminale, en prolongement du cours de seconde de la famille des métiers du pilotage et de la maintenance d'installations automatisées. Il comprend un cours théorique (systèmes et énergies, automatismes, organisation et performance de la production, qualité, maintenance, risques et exigences des secteurs) et un bloc d'analyse de documents consacré aux documents professionnels exploités lors des épreuves de préparation, de conduite et d'optimisation.",
 "parties": [
  {
   "titre": "Partie 1 — Analyser les systèmes de production et leurs énergies",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bplp-analyse-ligne",
     "titre": "Analyse fonctionnelle et structurelle d'une ligne de production",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire une ligne de production comme un enchaînement de postes reliés par des flux de matière, d'énergie et d'information.",
      "Lire et construire un diagramme fonctionnel de niveau A-0 et sa décomposition en postes.",
      "Identifier le poste goulot d'une ligne à partir des cadences de chaque poste.",
      "Expliquer le rôle des stocks tampons et des accumulations dans le couplage des machines.",
      "Distinguer architecture en ligne, en parallèle et en îlot, et leurs conséquences pour la conduite."
     ],
     "sections": [
      {
       "titre": "De la machine à la ligne",
       "contenu": "\n<p>Le cours de seconde a montré comment analyser <em>une</em> machine automatisée : sa fonction globale, sa chaîne d'information et sa chaîne d'énergie. Le pilote de ligne, lui, est responsable d'un ensemble plus vaste : une <strong>ligne de production</strong>, c'est-à-dire une suite de postes (machines, convoyeurs, stations manuelles) qui transforment pas à pas une matière d'œuvre en produit fini ou semi-fini.</p>\n<p>Exemple typique : une ligne de conditionnement de jus de fruits enchaîne un <strong>dépalettiseur</strong> de bouteilles vides, une <strong>rinceuse</strong>, une <strong>remplisseuse</strong>, une <strong>boucheuse</strong>, une <strong>étiqueteuse</strong>, un contrôleur de niveau et de présence bouchon, une <strong>fardeleuse</strong> qui regroupe les bouteilles en packs, puis une <strong>palettiseuse</strong> et une banderoleuse. Chaque machine a sa propre logique de commande, mais toutes partagent le même flux de produits : si l'une s'arrête, les autres finissent par s'arrêter aussi.</p>\n<p>L'analyse d'une ligne répond donc à trois questions : que fait la ligne (analyse <strong>fonctionnelle</strong>) ? Avec quels éléments, disposés comment (analyse <strong>structurelle</strong>) ? Comment les postes interagissent-ils dans le temps (analyse des <strong>flux</strong> et du <strong>couplage</strong>) ?</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une ligne se pilote comme un tout. La performance de la ligne n'est jamais la somme des performances des machines : elle est limitée par le poste le plus lent et par la façon dont les arrêts se propagent d'un poste à l'autre.</div>"
      },
      {
       "titre": "Le diagramme A-0 et sa décomposition",
       "contenu": "\n<p>Le <strong>diagramme A-0</strong> (méthode SADT) représente la fonction globale de la ligne par une boîte unique. Il précise :</p>\n<ul>\n<li>la <strong>matière d'œuvre entrante</strong> (à gauche) et sortante (à droite), avec sa valeur ajoutée ;</li>\n<li>les <strong>données de contrôle</strong> (en haut) : énergies (électrique, pneumatique, vapeur…), paramètres de réglage, consignes de l'opérateur, programme de production ;</li>\n<li>le <strong>support</strong> (en bas) : la ligne elle-même, nommée par son repère ;</li>\n<li>les <strong>sorties secondaires</strong> : comptes rendus, rebuts, déchets, bruit, chaleur.</li>\n</ul>\n<p>On décompose ensuite la boîte A-0 en un <strong>diagramme A0</strong> : une boîte par poste, reliées par la matière d'œuvre qui passe de l'une à l'autre. Cette décomposition sert à repérer où se crée la valeur ajoutée et où se produisent les pertes.</p>\n<table>\n<thead><tr><th>Poste</th><th>Fonction</th><th>Matière d'œuvre entrante</th><th>Matière d'œuvre sortante</th></tr></thead>\n<tbody>\n<tr><td>Remplisseuse</td><td>Doser le produit</td><td>Bouteille rincée vide</td><td>Bouteille remplie au volume nominal</td></tr>\n<tr><td>Boucheuse</td><td>Fermer le contenant</td><td>Bouteille remplie</td><td>Bouteille bouchée et étanche</td></tr>\n<tr><td>Étiqueteuse</td><td>Identifier le produit</td><td>Bouteille bouchée</td><td>Bouteille étiquetée, lot et DLC imprimés</td></tr>\n<tr><td>Fardeleuse</td><td>Regrouper</td><td>Bouteilles unitaires</td><td>Packs de 6 sous film</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour décomposer une ligne, partez du produit fini et remontez la ligne poste par poste. Pour chaque poste, écrivez un verbe à l'infinitif (doser, fermer, marquer, contrôler, regrouper), puis l'état du produit avant et après. Vérifiez enfin que la sortie d'un poste est exactement l'entrée du suivant : un écart signale un poste oublié (un contrôle, un retournement, un transfert).</div>"
      },
      {
       "titre": "Analyse structurelle : architecture et implantation",
       "contenu": "\n<p>L'analyse structurelle décrit les <strong>éléments matériels</strong> et leur <strong>implantation</strong>. On distingue trois grandes architectures :</p>\n<table>\n<thead><tr><th>Architecture</th><th>Description</th><th>Conséquence pour la conduite</th></tr></thead>\n<tbody>\n<tr><td>En ligne (série)</td><td>Les postes se suivent, chaque produit passe par tous</td><td>Un arrêt d'un poste bloque l'amont et affame l'aval</td></tr>\n<tr><td>En parallèle</td><td>Deux machines identiques réalisent la même opération</td><td>Une panne réduit la cadence sans arrêter la ligne</td></tr>\n<tr><td>En îlot ou cellule</td><td>Un groupe de machines autour d'un robot ou d'un opérateur</td><td>Souplesse, mais coordination plus complexe</td></tr>\n</tbody>\n</table>\n<p>Le <strong>synoptique de ligne</strong> est le plan simplifié qui représente chaque poste par un rectangle, les convoyeurs par des traits, le sens du flux par des flèches, et la position des capteurs d'accumulation. C'est le document de base de la supervision : l'écran principal d'une salle de conduite reproduit presque toujours ce synoptique, avec l'état de chaque machine en couleur.</p>\n<p>On complète par la <strong>décomposition fonctionnelle de chaque machine</strong> en sous-ensembles (par exemple, pour une étiqueteuse : dérouleur de bobine, groupe d'encollage, tambour de transfert, carrousel porte-bouteilles, imprimante de marquage). Ce découpage est celui de la nomenclature de maintenance et des fiches de réglage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les machines d'une ligne viennent souvent de constructeurs différents. Leur dialogue passe par des signaux d'échange normalisés par l'intégrateur : « aval prêt », « amont disponible », « défaut machine », « vitesse demandée ». Connaître ces signaux permet au pilote de comprendre pourquoi une machine en parfait état refuse de démarrer.</div>"
      },
      {
       "titre": "Cadences et poste goulot",
       "contenu": "\n<p>La <strong>cadence</strong> d'un poste est le nombre de produits qu'il peut traiter par unité de temps (produits par heure, coups par minute). Le <strong>temps de cycle</strong> est l'inverse : le temps pour traiter un produit. Pour une cadence de 12 000 bouteilles par heure, le temps de cycle vaut 3 600 s / 12 000 = 0,3 s par bouteille.</p>\n<p>Le <strong>poste goulot</strong> est celui dont la cadence nominale est la plus faible. Il fixe la cadence maximale de toute la ligne. Une heure perdue sur le goulot est une heure perdue pour toute la ligne ; une heure perdue sur un poste plus rapide peut souvent être rattrapée.</p>\n<table>\n<thead><tr><th>Poste</th><th>Cadence nominale (bouteilles/h)</th></tr></thead>\n<tbody>\n<tr><td>Rinceuse</td><td>16 000</td></tr>\n<tr><td>Remplisseuse</td><td>12 000</td></tr>\n<tr><td>Boucheuse</td><td>14 000</td></tr>\n<tr><td>Étiqueteuse</td><td>15 000</td></tr>\n<tr><td>Fardeleuse (packs de 6)</td><td>2 400 packs/h, soit 14 400 bouteilles/h</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour trouver le goulot, convertissez toutes les cadences dans la même unité (ici bouteilles par heure : 2 400 packs × 6 = 14 400 bouteilles). Classez-les : 12 000 &lt; 14 000 &lt; 14 400 &lt; 15 000 &lt; 16 000. Le goulot est la remplisseuse à 12 000 bouteilles/h. En 7 h de production effective, la ligne ne pourra pas dépasser 12 000 × 7 = 84 000 bouteilles, même si toutes les autres machines sont plus rapides.</div>\n<p>Les machines de la ligne sont volontairement plus rapides que le goulot, en général de 10 à 30 % : c'est la <strong>courbe en V</strong> des cadences. Les postes amont et aval peuvent ainsi vider ou remplir les accumulations après un micro-arrêt, sans jamais faire attendre le goulot.</p>"
      },
      {
       "titre": "Stocks tampons, accumulations et propagation des arrêts",
       "contenu": "\n<p>Entre deux machines, le convoyeur sert de <strong>stock tampon</strong> (ou <strong>accumulation</strong>) : il absorbe les petites différences de rythme et les <strong>micro-arrêts</strong> (arrêts de quelques secondes à quelques minutes). Des capteurs placés le long du convoyeur indiquent son niveau de remplissage et pilotent la vitesse des machines.</p>\n<ul>\n<li><strong>Capteur d'accumulation basse</strong> en entrée de machine : s'il n'est plus actionné, la machine manque de produits, elle ralentit puis s'arrête (on dit qu'elle est <strong>affamée</strong> ou en <strong>manque amont</strong>).</li>\n<li><strong>Capteur d'accumulation haute</strong> en sortie : s'il reste actionné, l'aval ne suit plus, la machine ralentit puis s'arrête (elle est <strong>bloquée</strong> ou en <strong>saturation aval</strong>).</li>\n</ul>\n<p>La durée qu'un tampon peut absorber se calcule simplement. Un convoyeur de 12 m portant des bouteilles de 80 mm de diamètre en file unique contient 12 000 / 80 = 150 bouteilles. À 12 000 bouteilles/h, soit 3,33 bouteilles/s, il se vide en 150 / 3,33 ≈ 45 s. Un arrêt de l'étiqueteuse plus long que 45 s finira donc par arrêter la remplisseuse.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un écran de supervision, la machine en rouge n'est pas forcément la cause de l'arrêt. Une machine arrêtée « sur manque » ou « sur saturation » est une victime. Le pilote remonte toujours la ligne jusqu'à la machine en défaut propre, celle qui est à l'origine de la propagation.</div>"
      },
      {
       "titre": "Flux d'énergie et d'information sur la ligne",
       "contenu": "\n<p>La ligne consomme plusieurs énergies, distribuées depuis des <strong>utilités</strong> communes :</p>\n<ul>\n<li><strong>électricité</strong> : armoire générale, puis armoire de chaque machine avec son sectionneur ;</li>\n<li><strong>air comprimé</strong> : réseau de l'usine, généralement autour de 6 à 7 bar, avec une vanne de coupure et un filtre-régulateur par machine ;</li>\n<li><strong>fluides de procédé</strong> : eau, vapeur, eau glacée, vide, gaz neutres selon les secteurs.</li>\n</ul>\n<p>Côté information, on distingue trois niveaux : les capteurs et actionneurs de chaque machine, les <strong>automates</strong> qui commandent chaque machine et échangent entre eux par réseau, et le <strong>niveau supervision</strong>, qui collecte les états, les compteurs et les alarmes, et transmet les consignes (vitesse, recette, format). Au-dessus, le système de gestion de l'usine envoie les ordres de fabrication et récupère les quantités produites.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une analyse de ligne complète comporte quatre volets : la fonction globale (A-0), la décomposition en postes (A0), la structure physique (synoptique, implantation) et les flux (matière, énergie, information). Ces quatre volets se retrouvent dans tout dossier de ligne.</div>"
      }
     ],
     "points_cles": [
      "Une ligne de production est un enchaînement de postes reliés par un flux de matière d'œuvre.",
      "Le diagramme A-0 définit la fonction globale, ses entrées, sorties, données de contrôle et support.",
      "La décomposition A0 attribue à chaque poste un verbe et un état du produit en entrée et en sortie.",
      "Le poste goulot, de cadence nominale la plus faible, fixe la cadence maximale de la ligne.",
      "Les machines autour du goulot sont plus rapides que lui pour vider ou remplir les accumulations.",
      "Les stocks tampons absorbent les micro-arrêts ; leur capacité se calcule en nombre de produits et en secondes.",
      "Une machine affamée ou bloquée est victime d'un arrêt ailleurs : on remonte jusqu'à la cause propre.",
      "Le synoptique de ligne est le document de base de la supervision."
     ],
     "lexique": [
      {
       "terme": "Ligne de production",
       "def": "Suite de postes reliés par un flux qui transforment progressivement une matière d'œuvre."
      },
      {
       "terme": "Matière d'œuvre",
       "def": "Ce sur quoi agit le système : matière, produit, emballage, information."
      },
      {
       "terme": "Cadence",
       "def": "Nombre de produits traités par unité de temps."
      },
      {
       "terme": "Temps de cycle",
       "def": "Temps nécessaire à un poste pour traiter un produit ; inverse de la cadence."
      },
      {
       "terme": "Poste goulot",
       "def": "Poste de cadence nominale la plus faible, qui limite la production de la ligne."
      },
      {
       "terme": "Stock tampon",
       "def": "Quantité de produits accumulée entre deux postes pour absorber les écarts de rythme."
      },
      {
       "terme": "Micro-arrêt",
       "def": "Arrêt bref, de quelques secondes à quelques minutes, souvent non enregistré comme panne."
      },
      {
       "terme": "Synoptique",
       "def": "Représentation simplifiée de la ligne montrant les postes, les convoyeurs et le sens du flux."
      },
      {
       "terme": "Utilités",
       "def": "Énergies et fluides communs fournis aux machines : électricité, air comprimé, eau, vapeur, froid."
      },
      {
       "terme": "Machine affamée",
       "def": "Machine arrêtée ou ralentie faute de produits en entrée."
      }
     ]
    },
    {
     "id": "bplp-mecanique-transmissions",
     "titre": "Mécanique appliquée : mouvements, efforts et transmissions",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Calculer une vitesse linéaire, une vitesse de rotation et un rapport de transmission.",
      "Relier couple, vitesse angulaire et puissance mécanique, et utiliser le rendement.",
      "Identifier les liaisons et les guidages d'un mécanisme de ligne et leurs défauts typiques.",
      "Choisir le bon élément de transmission (courroie, chaîne, engrenage, réducteur) selon l'usage.",
      "Expliquer les causes mécaniques des dérives de réglage observées en conduite."
     ],
     "sections": [
      {
       "titre": "Pourquoi le pilote a besoin de mécanique",
       "contenu": "\n<p>Le cours de seconde a présenté les grandes familles de transmission de puissance. Le pilote de ligne doit aller plus loin : il règle des vitesses de convoyeurs, des pas de vis sans fin, des cames, des tapis synchronisés. Lorsqu'un produit tombe, se coince ou arrive en retard sur un poste, la cause est très souvent mécanique : un jeu dans une liaison, une courroie détendue, un rapport de vitesse mal choisi après un changement de format.</p>\n<p>Ce chapitre donne les outils de calcul et de lecture qui permettent de comprendre le <strong>comportement</strong> d'un mécanisme, c'est-à-dire la façon dont il transforme un mouvement et transmet un effort.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en mécanique, on utilise les unités du système international : longueur en mètre (m), temps en seconde (s), force en newton (N), couple en newton-mètre (N·m), puissance en watt (W), vitesse angulaire en radian par seconde (rad/s). Les vitesses de rotation lues sur les plaques sont en tours par minute (tr/min) et doivent être converties.</div>"
      },
      {
       "titre": "Mouvements : vitesses linéaires et angulaires",
       "contenu": "\n<p>Un mouvement de <strong>translation</strong> se caractérise par une vitesse linéaire v en m/s. Un mouvement de <strong>rotation</strong> se caractérise par une vitesse angulaire ω (oméga) en rad/s, ou par une fréquence de rotation N en tr/min. La relation est :</p>\n<p><strong>ω = 2π × N / 60</strong></p>\n<p>Lorsqu'un tambour ou un pignon de rayon R entraîne une bande ou une chaîne, la vitesse linéaire de celle-ci vaut <strong>v = ω × R</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un convoyeur à bande est entraîné par un tambour de diamètre 200 mm tournant à 95,5 tr/min. Quelle est la vitesse de la bande ?<br>1. Convertir la fréquence : ω = 2π × 95,5 / 60 ≈ 10 rad/s.<br>2. Rayon : R = 200 / 2 = 100 mm = 0,1 m.<br>3. Vitesse : v = 10 × 0,1 = 1 m/s, soit 60 m/min.<br>Vérification de l'ordre de grandeur : un convoyeur de bouteilles tourne généralement entre quelques dizaines de mètres par minute et une centaine de mètres par minute, le résultat est plausible.</div>\n<p>Sur une ligne, la vitesse des convoyeurs doit être cohérente avec la cadence. Pour faire passer 12 000 bouteilles par heure de pas 80 mm en file unique, il faut au minimum v = 12 000 × 0,08 / 3 600 ≈ 0,27 m/s. On règle en pratique une vitesse plus élevée pour garder des espaces et rattraper les retards.</p>"
      },
      {
       "titre": "Rapports de transmission et réducteurs",
       "contenu": "\n<p>Le <strong>rapport de transmission</strong> k est le quotient de la vitesse de sortie par la vitesse d'entrée : k = N<sub>sortie</sub> / N<sub>entrée</sub>. Un <strong>réducteur</strong> a un rapport inférieur à 1 ; il diminue la vitesse et augmente le couple.</p>\n<table>\n<thead><tr><th>Transmission</th><th>Calcul du rapport</th><th>Usage sur ligne</th><th>Défaut typique</th></tr></thead>\n<tbody>\n<tr><td>Poulies et courroie</td><td>k = d<sub>menante</sub> / d<sub>menée</sub></td><td>Convoyeurs, ventilateurs</td><td>Glissement si tension insuffisante</td></tr>\n<tr><td>Pignons et chaîne</td><td>k = Z<sub>menant</sub> / Z<sub>mené</sub></td><td>Convoyeurs à palettes, entraînements lents</td><td>Allongement de la chaîne, bruit</td></tr>\n<tr><td>Engrenages</td><td>k = Z<sub>menant</sub> / Z<sub>mené</sub></td><td>Réducteurs, boîtes de synchronisation</td><td>Usure des dentures, jeu</td></tr>\n<tr><td>Roue et vis sans fin</td><td>k = nombre de filets / Z<sub>roue</sub></td><td>Fort rapport de réduction</td><td>Rendement faible, échauffement</td></tr>\n<tr><td>Courroie crantée</td><td>k = Z<sub>menant</sub> / Z<sub>mené</sub></td><td>Axes synchronisés, robots</td><td>Saut de dent, perte de synchronisation</td></tr>\n</tbody>\n</table>\n<p>Pour une chaîne de transmissions en série, les rapports se multiplient : k<sub>global</sub> = k<sub>1</sub> × k<sub>2</sub> × k<sub>3</sub>. Un moteur à 1 440 tr/min suivi d'un réducteur de rapport 1/15 puis d'une transmission par chaîne Z = 15 / Z = 25 donne en sortie 1 440 × (1/15) × (15/25) = 57,6 tr/min.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une courroie crantée qui saute d'une dent ne se voit pas forcément, mais toute la synchronisation de la machine est décalée : la vis de cadencement n'est plus en phase avec le carrousel et les produits sont écrasés. Après un bourrage violent, faites vérifier les repères de calage avant de redémarrer.</div>"
      },
      {
       "titre": "Efforts, couple et puissance",
       "contenu": "\n<p>Une <strong>force</strong> F, en newtons, est une action mécanique qui tend à déplacer un objet. Le poids d'un objet de masse m vaut P = m × g, avec g ≈ 9,81 m/s². Un carton de 10 kg pèse donc environ 98 N.</p>\n<p>Le <strong>couple</strong> C, en N·m, est l'effet de rotation produit par une force appliquée à une distance de l'axe : C = F × R. La <strong>puissance mécanique</strong> P, en watts, est le produit de l'effort par la vitesse :</p>\n<ul>\n<li>en translation : P = F × v ;</li>\n<li>en rotation : P = C × ω.</li>\n</ul>\n<p>Aucune transmission n'est parfaite : une partie de la puissance est perdue en frottements et en chaleur. Le <strong>rendement</strong> η (êta) vaut P<sub>sortie</sub> / P<sub>entrée</sub>, toujours inférieur à 1. Pour plusieurs éléments en série, les rendements se multiplient.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un tapis doit tirer une charge avec un effort de 600 N à 0,5 m/s. Le réducteur a un rendement de 0,85 et la transmission par chaîne de 0,95. Quelle puissance le moteur doit-il fournir ?<br>1. Puissance utile : P<sub>u</sub> = 600 × 0,5 = 300 W.<br>2. Rendement global : η = 0,85 × 0,95 ≈ 0,81.<br>3. Puissance moteur : P<sub>m</sub> = 300 / 0,81 ≈ 370 W.<br>On choisira un moteur normalisé de puissance immédiatement supérieure, par exemple 0,37 kW ou 0,55 kW selon la marge souhaitée.</div>"
      },
      {
       "titre": "Liaisons, guidages et comportement en service",
       "contenu": "\n<p>Une <strong>liaison mécanique</strong> définit les mouvements possibles entre deux pièces. Les principales liaisons rencontrées sur une ligne sont :</p>\n<ul>\n<li><strong>pivot</strong> : une seule rotation possible (arbre de tambour dans ses paliers) ;</li>\n<li><strong>glissière</strong> : une seule translation (chariot de vérin sur rails) ;</li>\n<li><strong>hélicoïdale</strong> : rotation et translation liées (vis de réglage de largeur de guide) ;</li>\n<li><strong>encastrement</strong> : aucun mouvement (guide fixé sur un bâti).</li>\n</ul>\n<p>Ces liaisons sont réalisées par des <strong>guidages</strong> : roulements à billes ou à rouleaux, paliers lisses, rails et patins à billes. Leur état conditionne la précision de la machine. Un roulement usé crée du jeu, des vibrations et un échauffement ; un patin de guidage encrassé provoque des à-coups.</p>\n<table>\n<thead><tr><th>Symptôme en conduite</th><th>Cause mécanique probable</th></tr></thead>\n<tbody>\n<tr><td>Bruit cyclique, vibration à chaque tour</td><td>Roulement dégradé, accouplement mal aligné</td></tr>\n<tr><td>Produit mal positionné de façon aléatoire</td><td>Jeu dans une liaison, guide desserré</td></tr>\n<tr><td>Dérive lente de la position</td><td>Glissement de courroie, usure progressive</td></tr>\n<tr><td>Échauffement d'un carter</td><td>Manque de lubrifiant, surcharge</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le pilote n'est pas mécanicien, mais il est le premier témoin. Un signalement précis (« bruit de cliquetis sur le palier côté moteur du convoyeur 3, apparu depuis le changement de format ») fait gagner un temps considérable au technicien de maintenance.</div>"
      },
      {
       "titre": "Transformations de mouvement et synchronisation",
       "contenu": "\n<p>Beaucoup de machines de conditionnement transforment une rotation continue en mouvement alterné ou intermittent :</p>\n<ul>\n<li>la <strong>came</strong> transforme une rotation en translation alternative d'un poussoir, selon un profil qui fixe la loi de mouvement ;</li>\n<li>la <strong>croix de Malte</strong> transforme une rotation continue en rotation intermittente (avance pas à pas d'un plateau) ;</li>\n<li>le <strong>système bielle-manivelle</strong> transforme une rotation en translation (poinçons, presses) ;</li>\n<li>la <strong>vis de cadencement</strong> espace régulièrement les produits avant leur entrée dans un carrousel.</li>\n</ul>\n<p>Sur les machines modernes, ces transmissions mécaniques sont de plus en plus remplacées par des <strong>axes électriques synchronisés</strong> (servomoteurs pilotés par le même automate, avec une « came électronique »). Le changement de format y est plus rapide, mais un défaut de synchronisation devient une alarme logicielle au lieu d'un bruit mécanique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> qu'elle soit mécanique ou électronique, une synchronisation se règle toujours par rapport à une <strong>origine</strong> (repère de calage, prise d'origine machine). Après une intervention, le retour à l'origine est la première vérification.</div>"
      }
     ],
     "points_cles": [
      "ω = 2π × N / 60 convertit une fréquence de rotation en tr/min en vitesse angulaire en rad/s.",
      "La vitesse linéaire d'une bande vaut v = ω × R.",
      "Le rapport de transmission k = N sortie / N entrée ; les rapports en série se multiplient.",
      "Puissance : P = F × v en translation, P = C × ω en rotation.",
      "Le rendement est inférieur à 1 ; les rendements en série se multiplient.",
      "Les liaisons pivot, glissière, hélicoïdale et encastrement décrivent les mouvements possibles.",
      "Jeu, glissement et usure des guidages expliquent de nombreuses dérives en conduite.",
      "Toute synchronisation se règle par rapport à une origine à contrôler après intervention."
     ],
     "lexique": [
      {
       "terme": "Vitesse angulaire",
       "def": "Vitesse de rotation exprimée en radians par seconde (rad/s)."
      },
      {
       "terme": "Rapport de transmission",
       "def": "Quotient de la vitesse de sortie par la vitesse d'entrée d'une transmission."
      },
      {
       "terme": "Réducteur",
       "def": "Mécanisme qui diminue la vitesse de rotation et augmente le couple."
      },
      {
       "terme": "Couple",
       "def": "Effet de rotation d'une force appliquée à une distance de l'axe, en N·m."
      },
      {
       "terme": "Rendement",
       "def": "Rapport entre la puissance de sortie et la puissance d'entrée d'un élément."
      },
      {
       "terme": "Liaison pivot",
       "def": "Liaison qui n'autorise qu'une rotation autour d'un axe."
      },
      {
       "terme": "Guidage",
       "def": "Ensemble de composants réalisant une liaison : roulements, paliers, rails, patins."
      },
      {
       "terme": "Came",
       "def": "Pièce profilée qui transforme une rotation en mouvement d'un poussoir selon une loi définie."
      },
      {
       "terme": "Calage",
       "def": "Positionnement relatif de deux organes synchronisés par rapport à des repères."
      }
     ]
    },
    {
     "id": "bplp-pneumatique-hydraulique",
     "titre": "Actionneurs pneumatiques et hydrauliques : lire, calculer, régler",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Lire un schéma pneumatique normalisé et identifier chaque composant.",
      "Calculer l'effort théorique et l'effort utile d'un vérin.",
      "Estimer la consommation d'air d'un vérin et l'enjeu énergétique de l'air comprimé.",
      "Régler la vitesse d'un vérin et choisir le bon type de régleur de débit.",
      "Situer l'hydraulique par rapport au pneumatique et ses risques spécifiques."
     ],
     "sections": [
      {
       "titre": "La chaîne d'énergie pneumatique",
       "contenu": "\n<p>L'air comprimé est l'énergie la plus répandue sur les lignes de conditionnement : vérins de poussée, pinces, ventouses à vide, soufflettes d'éjection. Il est produit par un <strong>compresseur</strong>, stocké dans un réservoir, séché, puis distribué dans l'usine. À l'entrée de chaque machine, on trouve un <strong>groupe de conditionnement</strong> (souvent appelé « FRL ») qui assure :</p>\n<ul>\n<li>la <strong>coupure et la mise à l'échappement</strong> par une vanne cadenassable (consignation pneumatique) ;</li>\n<li>la <strong>filtration</strong> des particules et de l'eau condensée ;</li>\n<li>la <strong>régulation de pression</strong> à la valeur d'utilisation, lue sur un manomètre ;</li>\n<li>parfois une <strong>mise en pression progressive</strong> pour éviter les mouvements brusques au démarrage.</li>\n</ul>\n<p>Viennent ensuite les <strong>distributeurs</strong>, qui orientent l'air vers l'une ou l'autre chambre du vérin, les <strong>régleurs de débit</strong>, puis les <strong>actionneurs</strong>. Les pressions s'expriment en bar (1 bar = 10<sup>5</sup> Pa = 0,1 MPa). Un réseau d'usine est typiquement autour de 6 à 7 bar.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ordre normal d'un poste pneumatique est : vanne de coupure, filtre, régulateur, (lubrificateur éventuel), démarreur progressif, distributeurs, régleurs, vérins. Toute intervention commence par la coupure et la vidange de l'air résiduel.</div>"
      },
      {
       "titre": "Lire un schéma pneumatique",
       "contenu": "\n<p>Les schémas pneumatiques et hydrauliques utilisent les symboles de la norme <strong>ISO 1219</strong>. Les points essentiels :</p>\n<ul>\n<li>un <strong>distributeur</strong> est dessiné par autant de cases que de positions ; on le désigne par deux nombres : orifices / positions. Un 5/2 a cinq orifices et deux positions ; un 5/3 a trois positions, la position centrale pouvant être fermée, à l'échappement ou en pression ;</li>\n<li>les orifices sont repérés : 1 alimentation, 2 et 4 utilisations, 3 et 5 échappements, 12 et 14 pilotages ;</li>\n<li>le <strong>mode de commande</strong> est dessiné sur les côtés : électroaimant (rectangle avec trait oblique), ressort de rappel, commande manuelle ;</li>\n<li>un <strong>monostable</strong> revient seul en position repos (ressort) ; un <strong>bistable</strong> garde sa dernière position tant qu'il ne reçoit pas l'ordre inverse ;</li>\n<li>un <strong>vérin double effet</strong> a deux orifices ; un <strong>simple effet</strong> n'en a qu'un et revient par ressort.</li>\n</ul>\n<p>Le schéma est toujours dessiné en <strong>position repos</strong>, installation sous pression mais sans ordre de commande.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un distributeur bistable garde sa position même après une coupure électrique. À la remise sous pression, le vérin peut se déplacer immédiatement vers la dernière position commandée. C'est une cause classique d'accident après une intervention : avant de rétablir l'air, vérifiez la position des distributeurs et l'absence de personne dans la zone.</div>"
      },
      {
       "titre": "Calculer l'effort d'un vérin",
       "contenu": "\n<p>L'effort théorique d'un vérin est le produit de la pression par la surface sur laquelle elle s'applique : <strong>F = p × S</strong>. En sortie de tige, la surface est celle du piston : S = π × D² / 4. En rentrée, la surface utile est diminuée de la section de la tige : S' = π × (D² − d²) / 4.</p>\n<p>L'effort réellement disponible est plus faible à cause des frottements des joints et de la contre-pression : on applique un <strong>taux de charge</strong>, souvent de 0,5 à 0,7 pour un mouvement dynamique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérin double effet, alésage D = 50 mm, tige d = 20 mm, pression de service 6 bar.<br>1. Pression en MPa : 6 bar = 0,6 MPa = 0,6 N/mm².<br>2. Surface piston : S = π × 50² / 4 ≈ 1 963 mm².<br>3. Effort théorique en sortie : F = 0,6 × 1 963 ≈ 1 178 N.<br>4. Surface annulaire en rentrée : S' = π × (50² − 20²) / 4 ≈ 1 649 mm², d'où F' ≈ 989 N.<br>5. Avec un taux de charge de 0,6 : effort utile en sortie ≈ 707 N.<br>Conclusion : ce vérin peut pousser un carton de quelques dizaines de kilos sans difficulté, mais la rentrée est toujours un peu plus faible que la sortie.</div>\n<p>Pour l'unité, retenir : 1 bar appliqué sur 1 cm² donne environ 10 N. Un vérin de 50 mm (environ 19,6 cm²) à 6 bar donne donc environ 19,6 × 6 × 10 ≈ 1 180 N : le calcul mental confirme le résultat.</p>"
      },
      {
       "titre": "Vitesse, débit et consommation d'air",
       "contenu": "\n<p>La vitesse d'un vérin dépend du <strong>débit d'air</strong> qui entre ou sort de ses chambres. On la règle avec des <strong>régleurs de débit unidirectionnels</strong> (un clapet anti-retour en parallèle avec un étrangleur). Deux montages existent :</p>\n<ul>\n<li><strong>réglage à l'échappement</strong> : on freine l'air qui sort de la chambre opposée au mouvement. Le vérin est « tenu » entre deux pressions, le mouvement est régulier. C'est le montage normal pour les vérins double effet ;</li>\n<li><strong>réglage à l'alimentation</strong> : on freine l'air qui entre. Il est réservé aux vérins simple effet et aux petits volumes, car il donne des mouvements saccadés.</li>\n</ul>\n<p>Les vérins possèdent aussi des <strong>amortisseurs de fin de course</strong> réglables par une vis : ils freinent le piston sur les derniers millimètres pour éviter les chocs.</p>\n<p>L'air comprimé est une énergie chère : une grande partie de l'énergie électrique consommée par le compresseur est perdue en chaleur, et les fuites sur un réseau d'usine représentent couramment une part importante de la production d'air. La consommation d'un vérin par cycle est approximativement égale au volume des deux chambres multiplié par la pression absolue (pression relative + 1 bar), exprimée en litres d'air à pression atmosphérique.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une fuite qui siffle à l'arrêt de la ligne se signale et s'étiquette, même si elle « ne gêne pas ». Les campagnes de détection de fuites par ultrasons font partie des actions d'économie d'énergie classiques, et le pilote y contribue en couvrant les signalements.</div>"
      },
      {
       "titre": "Le vide et la préhension",
       "contenu": "\n<p>Les <strong>ventouses</strong> saisissent les produits plats, les cartons, les étiquettes, les couvercles. Le vide est produit par un <strong>générateur à effet Venturi</strong> (alimenté en air comprimé) ou par une <strong>pompe à vide</strong>. Un <strong>vacuostat</strong> contrôle que le vide est atteint avant d'autoriser le mouvement suivant.</p>\n<p>L'effort de maintien d'une ventouse vaut approximativement F = Δp × S, où Δp est la dépression obtenue. Comme cette dépression ne peut dépasser la pression atmosphérique (environ 1 bar), les ventouses développent des efforts limités : on multiplie les ventouses et on applique un coefficient de sécurité important, surtout pour les mouvements rapides.</p>\n<p>Les défauts typiques sont : ventouse fendue ou déformée, filtre colmaté par les poussières de carton, mauvaise planéité du produit, vacuostat déréglé.</p>"
      },
      {
       "titre": "L'hydraulique : quand l'effort devient très grand",
       "contenu": "\n<p>L'hydraulique utilise de l'huile, pratiquement incompressible, à des pressions de plusieurs dizaines à plusieurs centaines de bars. Elle sert lorsque les efforts sont très importants : presses, bridages, injection plastique, compacteurs. Les symboles et la logique des schémas sont les mêmes qu'en pneumatique (norme ISO 1219), avec en plus une <strong>pompe</strong>, un <strong>réservoir</strong>, un <strong>limiteur de pression</strong> qui protège le circuit et des <strong>accumulateurs</strong> qui stockent de l'énergie.</p>\n<table>\n<thead><tr><th>Critère</th><th>Pneumatique</th><th>Hydraulique</th></tr></thead>\n<tbody>\n<tr><td>Pression usuelle</td><td>Quelques bars</td><td>Dizaines à centaines de bars</td></tr>\n<tr><td>Effort</td><td>Faible à moyen</td><td>Très élevé</td></tr>\n<tr><td>Vitesse</td><td>Rapide, peu précise</td><td>Plus lente, précise et régulière</td></tr>\n<tr><td>Propreté</td><td>Air rejeté à l'atmosphère</td><td>Risque de fuite d'huile</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un circuit hydraulique arrêté peut rester sous pression grâce à un accumulateur. Un jet d'huile sous haute pression peut traverser la peau et provoquer une injection grave. On ne cherche jamais une fuite avec la main ; la consignation comprend la décharge de l'accumulateur, vérifiée au manomètre.</div>"
      },
      {
       "titre": "Diagnostiquer un défaut pneumatique en conduite",
       "contenu": "\n<p>Les défauts pneumatiques sont parmi les plus fréquents sur une ligne. Le pilote peut en identifier une grande partie par l'observation, sans démonter quoi que ce soit :</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Causes probables</th><th>Vérification simple</th></tr></thead>\n<tbody>\n<tr><td>Vérin lent dans les deux sens</td><td>Pression insuffisante, filtre colmaté</td><td>Lire le manomètre du groupe de conditionnement en mouvement</td></tr>\n<tr><td>Vérin lent dans un seul sens</td><td>Régleur de débit trop fermé, silencieux d'échappement colmaté</td><td>Comparer la position du régleur à son repère</td></tr>\n<tr><td>Vérin qui ne bouge pas, échappement continu</td><td>Joint de piston détruit, distributeur bloqué</td><td>Écouter, demander l'intervention</td></tr>\n<tr><td>Choc violent en fin de course</td><td>Amortisseur déréglé, vitesse trop élevée</td><td>Observer le mouvement, signaler</td></tr>\n<tr><td>Défaut de capteur de fin de course</td><td>Capteur magnétique déplacé sur le tube du vérin</td><td>Vérifier la LED du capteur en fin de course</td></tr>\n</tbody>\n</table>\n<p>Le pilote note ses constats et ne modifie un réglage que si la consigne de poste l'y autorise, en respectant les repères de position.</p>"
      }
     ],
     "points_cles": [
      "Le groupe de conditionnement assure coupure, filtration et régulation de pression à l'entrée de la machine.",
      "Les schémas suivent la norme ISO 1219 et sont dessinés en position repos.",
      "Un distributeur se désigne par orifices/positions ; il est monostable ou bistable.",
      "Effort théorique d'un vérin : F = p × S ; la rentrée est plus faible que la sortie.",
      "L'effort utile tient compte d'un taux de charge, souvent de 0,5 à 0,7.",
      "La vitesse d'un vérin double effet se règle normalement à l'échappement.",
      "L'air comprimé est une énergie coûteuse : les fuites doivent être signalées.",
      "En hydraulique, un accumulateur peut maintenir la pression machine arrêtée."
     ],
     "lexique": [
      {
       "terme": "Groupe de conditionnement (FRL)",
       "def": "Ensemble filtre, régulateur et parfois lubrificateur placé à l'entrée d'une machine pneumatique."
      },
      {
       "terme": "Distributeur",
       "def": "Composant qui oriente le fluide vers les orifices d'un actionneur."
      },
      {
       "terme": "Monostable",
       "def": "Distributeur qui revient seul en position repos par un ressort."
      },
      {
       "terme": "Bistable",
       "def": "Distributeur qui conserve sa dernière position jusqu'à l'ordre inverse."
      },
      {
       "terme": "Vérin double effet",
       "def": "Vérin dont la sortie et la rentrée sont commandées par l'air."
      },
      {
       "terme": "Régleur de débit",
       "def": "Composant qui limite le débit dans un sens pour régler la vitesse d'un vérin."
      },
      {
       "terme": "Taux de charge",
       "def": "Coefficient appliqué à l'effort théorique pour obtenir l'effort réellement utilisable."
      },
      {
       "terme": "Vacuostat",
       "def": "Capteur qui contrôle le niveau de vide atteint dans un circuit de préhension."
      },
      {
       "terme": "Accumulateur",
       "def": "Réservoir qui stocke de l'énergie hydraulique sous pression."
      },
      {
       "terme": "Limiteur de pression",
       "def": "Composant qui protège un circuit en évacuant le fluide au-delà d'une pression réglée."
      }
     ]
    },
    {
     "id": "bplp-moteurs-variation",
     "titre": "Moteurs électriques et variation de vitesse",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Lire la plaque signalétique d'un moteur asynchrone triphasé et en exploiter les données.",
      "Calculer la vitesse de synchronisme, le glissement et le couple nominal d'un moteur.",
      "Expliquer le principe et les réglages d'un variateur de fréquence.",
      "Distinguer moteur asynchrone, servomoteur et moteur pas à pas selon les usages de la ligne.",
      "Interpréter les défauts courants signalés par un variateur."
     ],
     "sections": [
      {
       "titre": "Le moteur asynchrone triphasé, cheval de trait de la ligne",
       "contenu": "\n<p>La très grande majorité des convoyeurs, pompes, ventilateurs et agitateurs sont entraînés par des <strong>moteurs asynchrones triphasés</strong>. Robustes et peu coûteux, ils fonctionnent grâce à un <strong>champ magnétique tournant</strong> créé par les trois enroulements du stator, alimentés par le réseau triphasé. Ce champ entraîne le rotor, qui tourne légèrement moins vite que lui : c'est ce retard, le <strong>glissement</strong>, qui donne son nom au moteur « asynchrone ».</p>\n<p>La <strong>vitesse de synchronisme</strong> du champ tournant vaut :</p>\n<p><strong>n<sub>s</sub> = 60 × f / p</strong></p>\n<p>avec f la fréquence du réseau en hertz (50 Hz en France) et p le nombre de <strong>paires de pôles</strong> du moteur.</p>\n<table>\n<thead><tr><th>Nombre de pôles</th><th>Paires de pôles p</th><th>n<sub>s</sub> à 50 Hz (tr/min)</th><th>Vitesse nominale typique (tr/min)</th></tr></thead>\n<tbody>\n<tr><td>2</td><td>1</td><td>3 000</td><td>environ 2 850 à 2 950</td></tr>\n<tr><td>4</td><td>2</td><td>1 500</td><td>environ 1 400 à 1 480</td></tr>\n<tr><td>6</td><td>3</td><td>1 000</td><td>environ 930 à 980</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à 50 Hz, un moteur asynchrone tourne toujours un peu moins vite que 3 000, 1 500 ou 1 000 tr/min. Sa vitesse dépend surtout de la fréquence d'alimentation : c'est pourquoi on la fait varier avec un variateur de fréquence.</div>"
      },
      {
       "titre": "Lire la plaque signalétique",
       "contenu": "\n<p>La <strong>plaque signalétique</strong> donne les caractéristiques <strong>nominales</strong>, c'est-à-dire celles du fonctionnement normal prévu par le constructeur. Exemple de plaque :</p>\n<table>\n<thead><tr><th>Indication</th><th>Valeur</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Tension</td><td>230 V Δ / 400 V Y</td><td>Couplage triangle sur réseau 230 V entre phases, étoile sur réseau 400 V</td></tr>\n<tr><td>Intensité</td><td>5,9 A / 3,4 A</td><td>Courant nominal en triangle et en étoile</td></tr>\n<tr><td>Puissance</td><td>1,5 kW</td><td>Puissance mécanique utile sur l'arbre</td></tr>\n<tr><td>Vitesse</td><td>1 440 tr/min</td><td>Vitesse nominale à 50 Hz</td></tr>\n<tr><td>cos φ</td><td>0,80</td><td>Facteur de puissance</td></tr>\n<tr><td>IP</td><td>IP55</td><td>Indice de protection contre les poussières et l'eau</td></tr>\n<tr><td>Classe d'isolation</td><td>F</td><td>Température maximale admise par les isolants</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter la plaque ci-dessus.<br>1. Vitesse de synchronisme : la vitesse nominale 1 440 tr/min est proche de 1 500, donc p = 2 et n<sub>s</sub> = 1 500 tr/min.<br>2. Glissement : g = (n<sub>s</sub> − n) / n<sub>s</sub> = (1 500 − 1 440) / 1 500 = 0,04, soit 4 %.<br>3. Vitesse angulaire : ω = 2π × 1 440 / 60 ≈ 150,8 rad/s.<br>4. Couple nominal : C = P / ω = 1 500 / 150,8 ≈ 9,9 N·m.<br>5. Puissance absorbée (réseau 400 V) : P<sub>a</sub> = √3 × U × I × cos φ = 1,732 × 400 × 3,4 × 0,80 ≈ 1 884 W.<br>6. Rendement : η = 1 500 / 1 884 ≈ 0,80.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la puissance écrite sur la plaque est la puissance <em>utile</em>, mécanique, et non la puissance électrique consommée. Confondre les deux conduit à sous-estimer le courant et à mal régler la protection thermique.</div>"
      },
      {
       "titre": "Le variateur de fréquence",
       "contenu": "\n<p>Le <strong>variateur de fréquence</strong> (ou variateur de vitesse) alimente le moteur avec une tension et une fréquence réglables. Il redresse d'abord le courant du réseau, puis reconstitue un courant alternatif de fréquence choisie par un <strong>onduleur</strong>. En faisant varier la fréquence de 0 à 50 Hz (ou au-delà dans certaines limites), on fait varier la vitesse du moteur presque proportionnellement.</p>\n<p>Les principaux paramètres accessibles au pilote ou au technicien sont :</p>\n<ul>\n<li>la <strong>consigne de vitesse</strong> (en Hz, en tr/min ou en pourcentage), souvent envoyée par l'automate ou la supervision ;</li>\n<li>les <strong>rampes d'accélération et de décélération</strong> (temps pour passer de 0 à la vitesse nominale) ;</li>\n<li>les <strong>vitesses minimale et maximale</strong> ;</li>\n<li>le <strong>courant thermique moteur</strong>, recopié de la plaque, qui sert à protéger le moteur ;</li>\n<li>le <strong>mode d'arrêt</strong> : sur rampe, en roue libre, avec freinage.</li>\n</ul>\n<p>Sur une ligne, la variation de vitesse sert à adapter la vitesse d'un convoyeur au remplissage des accumulations, à démarrer en douceur pour ne pas renverser les produits, et à économiser de l'énergie sur les pompes et ventilateurs.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les produits instables (flacons hauts, bouteilles vides en plastique) tombent souvent au démarrage d'un convoyeur. Allonger la rampe d'accélération de quelques dixièmes de seconde suffit parfois à supprimer ces chutes. Ce type de réglage se fait avec l'accord du responsable technique et se trace dans le cahier de ligne.</div>"
      },
      {
       "titre": "Servomoteurs et moteurs pas à pas",
       "contenu": "\n<p>Lorsqu'il faut un positionnement précis (étiqueteuse, découpe, robot, axe de synchronisation), on utilise des moteurs pilotés en position :</p>\n<table>\n<thead><tr><th>Moteur</th><th>Principe</th><th>Usage typique</th><th>Défaut caractéristique</th></tr></thead>\n<tbody>\n<tr><td>Servomoteur</td><td>Moteur synchrone avec codeur de position, piloté en boucle fermée par un servovariateur</td><td>Axes rapides et précis, cames électroniques</td><td>Défaut d'erreur de poursuite, perte d'origine</td></tr>\n<tr><td>Moteur pas à pas</td><td>Avance d'un angle fixe à chaque impulsion, souvent en boucle ouverte</td><td>Petits positionnements, dérouleurs, doseurs</td><td>Perte de pas en cas de surcharge, non détectée sans codeur</td></tr>\n<tr><td>Moteur asynchrone avec variateur</td><td>Vitesse variable, position peu précise</td><td>Convoyeurs, pompes</td><td>Surcharge, échauffement</td></tr>\n</tbody>\n</table>\n<p>Le <strong>codeur</strong> (incrémental ou absolu) mesure la position de l'arbre. Un codeur incrémental compte des impulsions à partir d'une origine : il faut refaire une prise d'origine après une coupure. Un codeur absolu connaît sa position à tout instant, même après coupure.</p>"
      },
      {
       "titre": "Protections et défauts courants",
       "contenu": "\n<p>Un départ moteur comporte une protection contre les <strong>courts-circuits</strong> (fusibles ou disjoncteur magnétique) et contre les <strong>surcharges</strong> (relais thermique ou fonction thermique du variateur). Le variateur affiche un code de défaut lorsqu'il se met en sécurité. Les plus fréquents :</p>\n<table>\n<thead><tr><th>Défaut affiché</th><th>Cause probable</th><th>Première action du pilote</th></tr></thead>\n<tbody>\n<tr><td>Surintensité, surcharge moteur</td><td>Blocage mécanique, bourrage, frein serré</td><td>Rechercher et dégager le blocage après mise en sécurité</td></tr>\n<tr><td>Surtension du bus continu</td><td>Décélération trop rapide d'une charge lourde</td><td>Signaler ; vérifier la rampe de décélération</td></tr>\n<tr><td>Sous-tension</td><td>Microcoupure réseau</td><td>Réarmer, noter l'heure</td></tr>\n<tr><td>Échauffement variateur</td><td>Ventilation de l'armoire obstruée, filtre encrassé</td><td>Signaler à la maintenance</td></tr>\n<tr><td>Perte de phase moteur</td><td>Câble ou connexion défectueux</td><td>Ne pas réarmer en boucle, appeler la maintenance</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> réarmer plusieurs fois de suite un défaut de surcharge sans en chercher la cause échauffe le moteur et peut détruire ses enroulements. L'intervention dans une armoire électrique est réservée aux personnes habilitées au niveau requis : le pilote se limite aux opérations autorisées par son habilitation et la consigne de poste.</div>"
      },
      {
       "titre": "Énergie électrique et efficacité",
       "contenu": "\n<p>Les moteurs représentent une part majeure de la consommation électrique d'une usine. Trois leviers relèvent de la conduite :</p>\n<ul>\n<li><strong>ne pas laisser tourner à vide</strong> : convoyeurs et ventilations arrêtés pendant les pauses longues, si la procédure le permet ;</li>\n<li><strong>adapter la vitesse</strong> au besoin réel : pour une pompe ou un ventilateur, la puissance absorbée diminue très fortement quand la vitesse baisse ;</li>\n<li><strong>signaler les anomalies</strong> qui augmentent la consommation : frottements, échauffements, transmissions mal tendues.</li>\n</ul>\n<p>Les moteurs sont classés par niveau de rendement (classes IE, de IE1 à IE4 et au-delà) ; la réglementation européenne impose des niveaux minimaux pour les moteurs neufs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la vitesse d'un moteur asynchrone se calcule à partir de la fréquence et du nombre de paires de pôles ; son couple nominal se déduit de la plaque par C = P / ω ; le variateur règle la vitesse et protège le moteur, mais il ne remplace jamais la recherche de la cause d'un défaut.</div>"
      },
      {
       "titre": "Couplage étoile et triangle",
       "contenu": "\n<p>Les enroulements d'un moteur triphasé peuvent être couplés en <strong>étoile</strong> (Y) ou en <strong>triangle</strong> (Δ) sur sa plaque à bornes, à l'aide de barrettes. Le choix dépend de la tension du réseau et de la tension supportée par chaque enroulement. Pour un moteur marqué 230 V Δ / 400 V Y branché sur le réseau industriel français 400 V entre phases, on réalise le couplage étoile. Un mauvais couplage (triangle sur 400 V) soumet chaque enroulement à une tension trop élevée et détruit rapidement le moteur.</p>\n<p>Le démarrage direct d'un moteur provoque un courant d'appel de plusieurs fois le courant nominal ; c'est une des raisons de l'usage des variateurs et des démarreurs progressifs, qui limitent ce courant et les à-coups mécaniques sur les transmissions.</p>"
      }
     ],
     "points_cles": [
      "Vitesse de synchronisme : ns = 60 × f / p, soit 1 500 tr/min pour un moteur 4 pôles à 50 Hz.",
      "Le glissement g = (ns − n) / ns vaut quelques pour cent au régime nominal.",
      "La puissance de plaque est la puissance mécanique utile ; le couple nominal vaut C = P / ω.",
      "Le variateur fait varier la vitesse en modifiant la fréquence d'alimentation.",
      "Les rampes d'accélération et de décélération conditionnent la stabilité des produits et l'apparition de défauts.",
      "Les servomoteurs avec codeur assurent les positionnements précis et synchronisés.",
      "Un codeur incrémental impose une prise d'origine après coupure.",
      "On ne réarme pas un défaut moteur en boucle sans rechercher sa cause."
     ],
     "lexique": [
      {
       "terme": "Moteur asynchrone",
       "def": "Moteur dont le rotor tourne un peu moins vite que le champ tournant du stator."
      },
      {
       "terme": "Vitesse de synchronisme",
       "def": "Vitesse de rotation du champ magnétique, fixée par la fréquence et le nombre de pôles."
      },
      {
       "terme": "Glissement",
       "def": "Écart relatif entre la vitesse de synchronisme et la vitesse réelle du rotor."
      },
      {
       "terme": "Plaque signalétique",
       "def": "Plaque fixée sur le moteur indiquant ses caractéristiques nominales."
      },
      {
       "terme": "Variateur de fréquence",
       "def": "Appareil qui alimente un moteur à fréquence et tension réglables pour faire varier sa vitesse."
      },
      {
       "terme": "Rampe",
       "def": "Durée réglée pour passer d'une vitesse à une autre au démarrage ou à l'arrêt."
      },
      {
       "terme": "Servomoteur",
       "def": "Moteur piloté en position et en vitesse grâce à un codeur et à un servovariateur."
      },
      {
       "terme": "Codeur",
       "def": "Capteur qui mesure la position angulaire d'un arbre."
      },
      {
       "terme": "Facteur de puissance",
       "def": "Rapport cos φ entre puissance active et puissance apparente d'un récepteur."
      },
      {
       "terme": "Indice IP",
       "def": "Code indiquant le degré de protection d'un matériel contre les solides et l'eau."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Automatismes et informatique industrielle",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bplp-gemma-modes-marche",
     "titre": "Modes de marche et d'arrêt : le GEMMA",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Situer les familles de procédures du GEMMA : arrêt, fonctionnement, défaillance.",
      "Identifier les principaux états d'une machine (A1, A2, A6, D1, D2, F1, F2, F4…) et leurs enchaînements.",
      "Relier le pupitre opérateur aux transitions du GEMMA.",
      "Décrire la conduite d'un arrêt d'urgence, d'un mode dégradé et d'une remise en route.",
      "Lire un grafcet de conduite associé au GEMMA."
     ],
     "sections": [
      {
       "titre": "Pourquoi un guide des modes de marche",
       "contenu": "\n<p>Le grafcet étudié en seconde décrit le <strong>fonctionnement normal</strong> d'une machine : le cycle qui produit. Mais une machine passe aussi beaucoup de temps dans d'autres situations : mise en route le matin, arrêt en fin de série, réglage, vidange, défaut, arrêt d'urgence, redémarrage. Le <strong>GEMMA</strong> (Guide d'Étude des Modes de Marches et d'Arrêts) est un outil graphique, élaboré en France par l'ADEPA, qui recense toutes ces situations et les passages de l'une à l'autre.</p>\n<p>Pour le pilote, le GEMMA n'est pas un exercice théorique : c'est la carte qui explique pourquoi un bouton est sans effet, pourquoi la machine doit être « réinitialisée » avant de redémarrer, ou pourquoi elle termine son cycle avant de s'arrêter.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le GEMMA est une grille de rectangles-états. Chaque rectangle décrit un mode de marche ou d'arrêt ; les flèches entre rectangles sont les conditions de passage (boutons du pupitre, capteurs, défauts).</div>"
      },
      {
       "titre": "Les trois familles de procédures",
       "contenu": "\n<p>La grille du GEMMA se lit en deux zones : à gauche, la partie commande est <strong>hors énergie</strong> ; à droite, elle est <strong>sous énergie</strong>. La zone sous énergie se divise en trois familles :</p>\n<table>\n<thead><tr><th>Famille</th><th>Repères</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Procédures d'arrêt et de remise en route (A)</td><td>A1 à A7</td><td>Arrêt dans l'état initial, arrêts demandés en fin de cycle ou dans un état déterminé, préparation pour remise en route, remise en état initial</td></tr>\n<tr><td>Procédures de fonctionnement (F)</td><td>F1 à F6</td><td>Production normale, marches de préparation et de clôture, marches de vérification, marches de test</td></tr>\n<tr><td>Procédures en défaillance (D)</td><td>D1 à D3</td><td>Arrêt d'urgence, diagnostic et traitement de la défaillance, production tout de même</td></tr>\n</tbody>\n</table>\n<p>Les états les plus utiles en conduite :</p>\n<ul>\n<li><strong>A1</strong> : arrêt dans l'état initial. Machine prête, tous les actionneurs en position de repos. C'est l'état de référence.</li>\n<li><strong>A2</strong> : arrêt demandé en fin de cycle. La machine termine le cycle en cours puis s'arrête en A1.</li>\n<li><strong>A6</strong> : mise de la partie opérative dans l'état initial (réinitialisation, retour des axes en position de repos).</li>\n<li><strong>F1</strong> : production normale.</li>\n<li><strong>F2</strong> et <strong>F3</strong> : marches de préparation (préchauffage, remplissage du circuit) et de clôture (vidage, nettoyage).</li>\n<li><strong>F4</strong> : marches de vérification dans le désordre (mode manuel, mouvement par mouvement).</li>\n<li><strong>D1</strong> : arrêt d'urgence. <strong>D2</strong> : diagnostic et traitement de la défaillance. <strong>D3</strong> : production tout de même, en mode dégradé.</li>\n</ul>"
      },
      {
       "titre": "Le pupitre de commande et les transitions",
       "contenu": "\n<p>Les organes du pupitre correspondent aux transitions du GEMMA. Un pupitre typique comporte :</p>\n<table>\n<thead><tr><th>Organe</th><th>Couleur normalisée usuelle</th><th>Effet dans le GEMMA</th></tr></thead>\n<tbody>\n<tr><td>Bouton coup de poing d'arrêt d'urgence</td><td>Rouge sur fond jaune</td><td>Passage en D1 depuis n'importe quel état</td></tr>\n<tr><td>Bouton marche (départ cycle)</td><td>Vert ou blanc</td><td>Passage de A1 à F1</td></tr>\n<tr><td>Bouton arrêt fin de cycle</td><td>Noir, gris ou blanc</td><td>Passage de F1 à A2 puis A1</td></tr>\n<tr><td>Bouton réarmement</td><td>Bleu</td><td>Autorise la sortie de D1 après acquittement</td></tr>\n<tr><td>Sélecteur de mode (auto / manuel / réglage)</td><td>—</td><td>Choix entre F1 et F4</td></tr>\n<tr><td>Bouton initialisation</td><td>—</td><td>Lancement de A6</td></tr>\n</tbody>\n</table>\n<p>Les couleurs des organes de commande et des voyants suivent la norme sur l'équipement électrique des machines (série IEC 60204-1). Le bleu indique une action obligatoire, comme un réarmement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le réarmement après un arrêt d'urgence <strong>ne doit pas</strong> redémarrer la machine. Il autorise seulement le retour vers les procédures d'arrêt (A5, A6, A1). Un redémarrage exige ensuite une action volontaire sur le bouton marche. Une machine qui repart seule au réarmement présente un défaut de sécurité à signaler immédiatement.</div>"
      },
      {
       "titre": "Le parcours après un arrêt d'urgence",
       "contenu": "\n<p>Le chemin typique dans le GEMMA après l'action sur un arrêt d'urgence est le suivant :</p>\n<ol>\n<li><strong>D1</strong> : l'arrêt d'urgence coupe les énergies dangereuses ; les actionneurs s'arrêtent ou se mettent dans un état sûr.</li>\n<li><strong>A5</strong> : préparation pour remise en route après défaillance. L'opérateur supprime la cause, dégage les produits, vérifie la zone.</li>\n<li>Déverrouillage du coup de poing puis action sur le <strong>réarmement</strong>.</li>\n<li><strong>A6</strong> : mise de la partie opérative dans l'état initial, souvent en lançant une initialisation automatique.</li>\n<li><strong>A1</strong> : machine prête, le voyant « prêt » s'allume.</li>\n<li><strong>F1</strong> : redémarrage par action sur le bouton marche.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour comprendre pourquoi une machine refuse de redémarrer, situez-la sur le GEMMA. Posez-vous trois questions dans l'ordre : 1. Suis-je sorti de D1 (coup de poing déverrouillé, réarmement fait, protecteurs fermés) ? 2. La machine est-elle en état initial (A1 : voyant prêt, axes en position) ? Sinon, lancer l'initialisation (A6). 3. Les conditions de départ sont-elles réunies (produits présents en amont, aval disponible, mode automatique sélectionné) ? Neuf fois sur dix, la réponse se trouve dans l'une de ces trois questions.</div>"
      },
      {
       "titre": "Modes de réglage et marche dégradée",
       "contenu": "\n<p>Le <strong>mode réglage</strong> (F4 ou F5 selon les machines) permet de faire fonctionner un mouvement à la fois, souvent à vitesse réduite et protecteurs ouverts, sous des conditions strictes : sélecteur à clé, commande par action maintenue, boîtier portable de validation. Il sert aux changements de format et à la recherche de défauts.</p>\n<p>La <strong>marche dégradée</strong> (D3, « production tout de même ») permet de continuer à produire malgré une défaillance : par exemple, contourner un contrôleur de présence étiquette défaillant en plaçant un opérateur en contrôle visuel. Ce mode doit être prévu par une procédure écrite, autorisé par la hiérarchie et accompagné de mesures compensatoires (contrôle renforcé, tri, marquage des lots concernés).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une marche dégradée improvisée, par exemple en neutralisant un capteur de sécurité ou de qualité « pour finir la série », est l'une des causes classiques d'accident et de non-conformité. Le pilote de ligne est celui qui décide, avec sa hiérarchie, d'entrer en mode dégradé : il en connaît les règles, les note dans le cahier de ligne et en informe l'équipe suivante.</div>"
      },
      {
       "titre": "Grafcet de conduite et grafcets hiérarchisés",
       "contenu": "\n<p>Dans le programme de l'automate, le GEMMA se traduit par une structure de grafcets <strong>hiérarchisés</strong> :</p>\n<ul>\n<li>un <strong>grafcet de sécurité</strong>, prioritaire, qui gère l'arrêt d'urgence et peut figer ou forcer les autres grafcets ;</li>\n<li>un <strong>grafcet de conduite</strong> (ou de modes de marche), qui reproduit les états du GEMMA et autorise ou non le cycle ;</li>\n<li>un ou plusieurs <strong>grafcets de production</strong>, qui décrivent le cycle normal.</li>\n</ul>\n<p>Le grafcet de sécurité utilise les ordres de <strong>forçage</strong> (le grafcet de production est forcé dans une situation donnée, par exemple l'étape initiale) et de <strong>figeage</strong> (le grafcet reste dans sa situation actuelle). Ces notions sont définies par la norme du langage grafcet (IEC 60848).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le grafcet de production dit « comment produire », le grafcet de conduite dit « quand produire », le grafcet de sécurité dit « quand tout arrêter ». Lire un programme commence par repérer ces trois niveaux.</div>"
      },
      {
       "titre": "Exemple de conduite : fin de série et vidange de ligne",
       "contenu": "\n<p>En fin d'ordre de fabrication, la ligne ne s'arrête pas d'un coup : il faut <strong>vider</strong> les machines pour que le dernier produit soit traité correctement, sans laisser de produit à moitié conditionné. Cette situation correspond à la marche de clôture (F3) du GEMMA, suivie d'un arrêt dans l'état initial.</p>\n<ol>\n<li>Le pilote coupe l'alimentation amont (plus de nouveaux produits introduits).</li>\n<li>Il active la fonction de vidange : chaque machine continue de fonctionner tant que des produits sont présents à son entrée, même sans accumulation suffisante, grâce à un forçage prévu par le programme.</li>\n<li>Les machines s'arrêtent une à une en fin de cycle (A2 puis A1) lorsqu'elles sont vides.</li>\n<li>Les produits restants sur la ligne sont récupérés, comptés et déclarés.</li>\n</ol>\n<p>Sans fonction de vidange, chaque machine attendrait indéfiniment que son accumulation d'entrée se remplisse : c'est un bon exemple de mode de marche qui n'existe pas dans le grafcet de production mais que le GEMMA fait apparaître.</p>"
      }
     ],
     "points_cles": [
      "Le GEMMA recense les modes de marche et d'arrêt d'une machine et les conditions de passage.",
      "Trois familles sous énergie : arrêts et remises en route (A), fonctionnements (F), défaillances (D).",
      "A1 est l'état initial de référence ; F1 est la production normale ; D1 est l'arrêt d'urgence.",
      "Le réarmement après arrêt d'urgence ne doit jamais redémarrer la machine.",
      "Après un arrêt d'urgence : D1, A5, réarmement, A6, A1, puis F1 sur action volontaire.",
      "Le mode réglage s'utilise sous conditions strictes : sélecteur à clé, action maintenue, vitesse réduite.",
      "La marche dégradée D3 exige une procédure, une autorisation et des mesures compensatoires.",
      "Le programme traduit le GEMMA par des grafcets hiérarchisés : sécurité, conduite, production."
     ],
     "lexique": [
      {
       "terme": "GEMMA",
       "def": "Guide d'étude des modes de marches et d'arrêts d'un système automatisé."
      },
      {
       "terme": "État initial",
       "def": "Situation de repos de référence de la machine, à partir de laquelle un cycle peut démarrer."
      },
      {
       "terme": "Arrêt d'urgence",
       "def": "Fonction qui arrête la machine pour écarter un danger imminent."
      },
      {
       "terme": "Réarmement",
       "def": "Action volontaire qui autorise la sortie de l'état d'arrêt d'urgence sans redémarrer."
      },
      {
       "terme": "Initialisation",
       "def": "Procédure qui ramène tous les actionneurs dans leur position initiale."
      },
      {
       "terme": "Marche dégradée",
       "def": "Production maintenue malgré une défaillance, avec des mesures compensatoires définies."
      },
      {
       "terme": "Mode réglage",
       "def": "Mode de fonctionnement mouvement par mouvement, sous conditions de sécurité renforcées."
      },
      {
       "terme": "Forçage",
       "def": "Ordre d'un grafcet supérieur imposant une situation à un grafcet inférieur."
      },
      {
       "terme": "Figeage",
       "def": "Ordre maintenant un grafcet inférieur dans sa situation actuelle."
      },
      {
       "terme": "Grafcet de conduite",
       "def": "Grafcet qui gère les modes de marche et autorise le cycle de production."
      }
     ]
    },
    {
     "id": "bplp-automate-reseaux",
     "titre": "Automate programmable, langages et réseaux industriels",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Décrire l'architecture matérielle d'un automate et le principe du cycle de scrutation.",
      "Lire l'adressage des entrées et sorties et exploiter une table des variables.",
      "Lire un programme simple en langage à contacts et en blocs fonctionnels.",
      "Comprendre le traitement des signaux analogiques et la mise à l'échelle.",
      "Situer les réseaux industriels et la pyramide de l'information de l'usine."
     ],
     "sections": [
      {
       "titre": "Architecture d'un automate programmable",
       "contenu": "\n<p>L'<strong>automate programmable industriel</strong> (API) est l'ordinateur durci qui commande une machine. Il comprend :</p>\n<ul>\n<li>une <strong>alimentation</strong>, généralement en 24 V continu ;</li>\n<li>une <strong>unité centrale</strong> (CPU) qui exécute le programme et contient la mémoire ;</li>\n<li>des <strong>modules d'entrées</strong> TOR (tout ou rien) qui reçoivent les signaux des capteurs, boutons et contacts ;</li>\n<li>des <strong>modules de sorties</strong> TOR qui commandent les préactionneurs (contacteurs, électrodistributeurs, voyants) ;</li>\n<li>des <strong>modules analogiques</strong> pour les grandeurs continues (température, pression, niveau, vitesse) ;</li>\n<li>des <strong>coupleurs de communication</strong> pour les réseaux et les entrées-sorties déportées.</li>\n</ul>\n<p>L'automate fonctionne selon un <strong>cycle de scrutation</strong> répété en permanence : 1. lecture de toutes les entrées et copie dans une mémoire image ; 2. exécution du programme à partir de cette image ; 3. écriture des résultats sur les sorties. La durée d'un cycle est de l'ordre de quelques millisecondes à quelques dizaines de millisecondes.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un signal plus bref que le temps de cycle peut ne pas être vu par l'automate. C'est pourquoi les comptages rapides (codeurs, cellules à haute cadence) utilisent des entrées de comptage spéciales ou des modules dédiés.</div>"
      },
      {
       "titre": "Adressage et table des variables",
       "contenu": "\n<p>Chaque entrée ou sortie physique possède une <strong>adresse</strong> qui dépend du constructeur et de l'emplacement du module dans le rack. Par exemple, sur certains automates, %I0.3 désigne l'entrée 3 du module 0 et %Q1.5 la sortie 5 du module 1 ; d'autres constructeurs utilisent des notations du type I 0.3 / Q 1.5 ou E / A en allemand. Le programme manipule ces adresses à travers des <strong>mnémoniques</strong>, noms explicites définis dans la <strong>table des variables</strong> (ou table des symboles).</p>\n<table>\n<thead><tr><th>Mnémonique</th><th>Adresse</th><th>Type</th><th>Commentaire</th></tr></thead>\n<tbody>\n<tr><td>Cap_Present_Btl</td><td>%I0.3</td><td>BOOL</td><td>Cellule présence bouteille entrée étiqueteuse</td></tr>\n<tr><td>Accu_Haute_Sortie</td><td>%I0.6</td><td>BOOL</td><td>Accumulation haute convoyeur sortie</td></tr>\n<tr><td>KM_Convoyeur_3</td><td>%Q1.5</td><td>BOOL</td><td>Contacteur moteur convoyeur 3</td></tr>\n<tr><td>Temp_Colle</td><td>%IW4</td><td>INT</td><td>Température bac de colle, 0 à 27 648</td></tr>\n<tr><td>Cpt_Bouteilles</td><td>%MD100</td><td>DINT</td><td>Compteur production du poste</td></tr>\n</tbody>\n</table>\n<p>Les types de données courants sont BOOL (bit), INT (entier 16 bits), DINT (entier 32 bits), REAL (nombre à virgule), TIME (durée), STRING (chaîne de caractères).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les voyants des modules d'entrées-sorties sont un outil de diagnostic précieux. Si la cellule présence bouteille est masquée mais que le voyant de l'entrée correspondante reste éteint, le problème est entre le capteur et l'automate (capteur, câble, alimentation). Si le voyant s'allume, le capteur fonctionne et la question se trouve dans le programme ou les conditions de cycle.</div>"
      },
      {
       "titre": "Les langages de programmation normalisés",
       "contenu": "\n<p>La norme <strong>IEC 61131-3</strong> définit les langages des automates :</p>\n<table>\n<thead><tr><th>Langage</th><th>Forme</th><th>Usage privilégié</th></tr></thead>\n<tbody>\n<tr><td>LD, langage à contacts (Ladder)</td><td>Graphique, contacts et bobines entre deux barres d'alimentation</td><td>Logique combinatoire, dépannage par les électriciens</td></tr>\n<tr><td>FBD, blocs fonctionnels</td><td>Graphique, blocs reliés par des liaisons</td><td>Régulation, traitements analogiques</td></tr>\n<tr><td>ST, texte structuré</td><td>Textuel, proche d'un langage informatique</td><td>Calculs, recettes, traitements complexes</td></tr>\n<tr><td>SFC, diagramme fonctionnel en séquence</td><td>Graphique, dérivé du grafcet</td><td>Séquences et cycles</td></tr>\n</tbody>\n</table>\n<p>En <strong>langage à contacts</strong>, un contact ouvert (symbole « | | ») est passant quand la variable vaut 1 ; un contact fermé (« |/| ») est passant quand elle vaut 0. Des contacts en série réalisent un ET, en parallèle un OU. La <strong>bobine</strong> à droite reçoit le résultat. Les blocs <strong>temporisation</strong> (TON : retard à l'enclenchement) et <strong>compteur</strong> (CTU : comptage) sont les plus utilisés.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire le réseau suivant : contacts en série « Mode_Auto » (ouvert), « Defaut_Etiq » (fermé), puis en parallèle « Accu_Basse_Entree » (ouvert) OU « Forcage_Vidange » (ouvert), et bobine « Marche_Etiqueteuse ».<br>1. Écrire l'équation : Marche = Mode_Auto ET NON Defaut_Etiq ET (Accu_Basse_Entree OU Forcage_Vidange).<br>2. Traduire en français : l'étiqueteuse tourne en mode automatique, hors défaut, si l'accumulation d'entrée est suffisante, ou si l'on a demandé la vidange de la ligne.<br>3. Utiliser cette lecture au dépannage : si l'étiqueteuse ne tourne pas en automatique sans défaut affiché, on vérifie en priorité l'état de l'accumulation basse en entrée.</div>"
      },
      {
       "titre": "Signaux analogiques et mise à l'échelle",
       "contenu": "\n<p>Les capteurs analogiques transmettent une grandeur continue sous forme de signal normalisé : <strong>4-20 mA</strong> (le plus répandu en industrie de process), 0-10 V, ou directement une sonde de température (Pt100, thermocouple). Le module analogique convertit ce signal en nombre entier. La <strong>mise à l'échelle</strong> transforme ce nombre en valeur physique.</p>\n<p>Un capteur de pression de plage 0 à 10 bar en 4-20 mA donne 4 mA à 0 bar et 20 mA à 10 bar. La relation est linéaire : p = (I − 4) × 10 / 16. Pour 12 mA, p = 8 × 10 / 16 = 5 bar.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en 4-20 mA, un courant de 0 mA ne signifie pas « valeur nulle », mais <strong>rupture du câble</strong> ou capteur hors service : c'est l'intérêt du « zéro décalé » à 4 mA. Une mesure qui tombe brutalement à la valeur minimale de l'échelle doit faire penser à un défaut de liaison avant de penser à une vraie chute de la grandeur.</div>"
      },
      {
       "titre": "Réseaux industriels et pyramide de l'information",
       "contenu": "\n<p>Sur une ligne moderne, les automates, variateurs, îlots de distributeurs et écrans échangent par <strong>réseaux de terrain</strong>. Les plus courants sont PROFINET, EtherNet/IP, Modbus TCP (tous trois sur Ethernet industriel), PROFIBUS, CANopen, ainsi qu'IO-Link pour la liaison point à point des capteurs intelligents. Pour l'échange de données vers les logiciels de l'usine, le standard <strong>OPC UA</strong> est de plus en plus utilisé.</p>\n<p>On représente souvent l'organisation de l'information par une pyramide :</p>\n<table>\n<thead><tr><th>Niveau</th><th>Contenu</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>Gestion de l'entreprise</td><td>Commandes, stocks, achats, comptabilité</td><td>ERP (progiciel de gestion intégré)</td></tr>\n<tr><td>Pilotage de la production</td><td>Ordres de fabrication, traçabilité, performance</td><td>MES (système d'exécution de la production)</td></tr>\n<tr><td>Supervision</td><td>Visualisation, alarmes, historiques, recettes</td><td>Logiciel SCADA, postes de conduite</td></tr>\n<tr><td>Commande</td><td>Programme de chaque machine</td><td>Automates, contrôleurs de robots, commandes numériques</td></tr>\n<tr><td>Terrain</td><td>Mesures et actions physiques</td><td>Capteurs, actionneurs, variateurs</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la donnée produite par un capteur remonte jusqu'à l'ERP sous forme de quantités produites et consommées ; inversement, l'ordre de fabrication descend de l'ERP au MES puis à la supervision et à l'automate sous forme de recette. Le pilote travaille au carrefour de ces niveaux.</div>"
      },
      {
       "titre": "Cybersécurité et modifications de programme",
       "contenu": "\n<p>Les systèmes de commande sont désormais connectés : ils sont exposés aux mêmes menaces que les systèmes informatiques. Les règles de base pour le personnel de conduite :</p>\n<ul>\n<li>ne jamais brancher de clé USB ou d'ordinateur personnel sur un poste de supervision ou un automate ;</li>\n<li>ne pas partager les mots de passe et se déconnecter des postes à niveau d'accès élevé ;</li>\n<li>signaler tout comportement anormal d'un poste (lenteur inhabituelle, messages inconnus, valeurs incohérentes).</li>\n</ul>\n<p>Toute modification de programme doit être autorisée, tracée (version, auteur, date, motif) et sauvegardée. Un <strong>forçage</strong> d'entrée ou de sortie dans l'automate, utile en dépannage, doit être levé et consigné avant le retour en production.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un forçage oublié dans un automate peut neutraliser un capteur de sécurité ou de qualité. Avant de rendre une machine à la production après une intervention, la liste des forçages actifs doit être vide.</div>"
      },
      {
       "titre": "Capteurs intelligents et données de diagnostic",
       "contenu": "\n<p>Les capteurs récents ne transmettent plus seulement un état 0 ou 1. Reliés par IO-Link ou par réseau, ils fournissent aussi des <strong>données de diagnostic</strong> : niveau de signal reçu par une cellule photoélectrique (qui baisse lorsque la lentille s'encrasse), température interne, compteur de commutations, alarme de capteur déréglé. Ces informations, remontées dans la supervision, permettent d'intervenir avant que le capteur ne provoque un arrêt : c'est un exemple de maintenance conditionnelle rendue possible par l'informatique industrielle.</p>\n<p>Le remplacement d'un capteur IO-Link est aussi plus simple : l'automate peut recharger automatiquement son paramétrage dans le capteur neuf, ce qui évite les erreurs de réglage.</p>"
      }
     ],
     "points_cles": [
      "L'automate lit ses entrées, exécute le programme puis écrit ses sorties à chaque cycle de scrutation.",
      "Un signal plus court que le cycle peut être ignoré : on utilise des entrées de comptage rapide.",
      "La table des variables relie adresses physiques, mnémoniques, types et commentaires.",
      "La norme IEC 61131-3 définit les langages LD, FBD, ST et SFC.",
      "En langage à contacts, série = ET, parallèle = OU, contact fermé = NON.",
      "Un signal 4-20 mA se met à l'échelle linéairement ; 0 mA indique une rupture de liaison.",
      "La pyramide de l'information va des capteurs à l'ERP en passant par la supervision et le MES.",
      "Toute modification ou tout forçage dans l'automate doit être autorisé, tracé et levé avant production."
     ],
     "lexique": [
      {
       "terme": "Automate programmable industriel",
       "def": "Calculateur industriel qui commande une machine à partir de ses entrées et de son programme."
      },
      {
       "terme": "Cycle de scrutation",
       "def": "Boucle répétée de lecture des entrées, exécution du programme et écriture des sorties."
      },
      {
       "terme": "Entrée TOR",
       "def": "Entrée tout ou rien, ne pouvant prendre que deux états."
      },
      {
       "terme": "Mnémonique",
       "def": "Nom symbolique donné à une adresse d'automate pour faciliter la lecture du programme."
      },
      {
       "terme": "Langage à contacts",
       "def": "Langage graphique de programmation fondé sur des contacts et des bobines."
      },
      {
       "terme": "Mise à l'échelle",
       "def": "Conversion d'une valeur numérique brute en grandeur physique."
      },
      {
       "terme": "4-20 mA",
       "def": "Signal analogique normalisé en courant, avec zéro décalé permettant de détecter les ruptures."
      },
      {
       "terme": "Réseau de terrain",
       "def": "Réseau de communication reliant automates, variateurs, capteurs et entrées-sorties déportées."
      },
      {
       "terme": "MES",
       "def": "Système d'exécution de la production qui gère ordres de fabrication, traçabilité et performance."
      },
      {
       "terme": "ERP",
       "def": "Progiciel de gestion intégré de l'entreprise : commandes, stocks, achats, comptabilité."
      },
      {
       "terme": "Forçage d'automate",
       "def": "Imposition manuelle de l'état d'une variable, indépendamment du programme ou du terrain."
      }
     ]
    },
    {
     "id": "bplp-supervision-regulation",
     "titre": "Supervision, alarmes et régulation de procédé",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Exploiter un écran de supervision : synoptique, états, alarmes, courbes, recettes.",
      "Hiérarchiser et traiter les alarmes selon leur priorité.",
      "Décrire une boucle de régulation et identifier consigne, mesure, commande et perturbation.",
      "Expliquer l'action des termes proportionnel, intégral et dérivé d'un régulateur PID.",
      "Analyser une courbe de réponse : dépassement, temps de réponse, écart statique, oscillations."
     ],
     "sections": [
      {
       "titre": "Le poste de supervision",
       "contenu": "\n<p>La <strong>supervision</strong> (ou SCADA) est le logiciel qui présente au pilote l'état de la ligne en temps réel et lui permet d'agir à distance. Ses vues principales sont :</p>\n<ul>\n<li>le <strong>synoptique</strong>, avec l'état de chaque machine par code couleur, les compteurs et les niveaux d'accumulation ;</li>\n<li>la <strong>liste des alarmes</strong> actives et l'historique des alarmes ;</li>\n<li>les <strong>courbes</strong> (tendances) des grandeurs analogiques : températures, pressions, vitesses, poids ;</li>\n<li>la gestion des <strong>recettes</strong> : ensemble de paramètres associés à un produit ou un format ;</li>\n<li>les <strong>compteurs et indicateurs</strong> de production.</li>\n</ul>\n<p>Les droits d'accès sont hiérarchisés : un opérateur consulte et acquitte, un pilote modifie certaines consignes dans des limites, un technicien ou un régleur modifie les recettes, un administrateur gère les paramètres système.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la supervision est une fenêtre sur la ligne, pas la ligne elle-même. Une information incohérente à l'écran (vitesse nulle d'une machine qu'on entend tourner, compteur figé) se vérifie toujours sur le terrain.</div>"
      },
      {
       "titre": "Gérer les alarmes",
       "contenu": "\n<p>Une <strong>alarme</strong> signale un événement qui demande une action ; un <strong>message</strong> ou un <strong>événement</strong> se contente d'informer. Chaque alarme possède un horodatage d'apparition, d'acquittement et de disparition, une priorité et un texte.</p>\n<table>\n<thead><tr><th>Priorité</th><th>Exemple</th><th>Délai de réaction attendu</th></tr></thead>\n<tbody>\n<tr><td>Critique</td><td>Arrêt d'urgence, surpression, fuite de produit dangereux</td><td>Immédiat</td></tr>\n<tr><td>Haute</td><td>Arrêt machine sur défaut, température hors tolérance</td><td>Quelques minutes</td></tr>\n<tr><td>Moyenne</td><td>Niveau bas de consommable (colle, étiquettes, film)</td><td>Avant rupture</td></tr>\n<tr><td>Basse</td><td>Maintenance préventive à prévoir</td><td>Dans le poste ou la journée</td></tr>\n</tbody>\n</table>\n<p><strong>Acquitter</strong> une alarme signifie seulement « j'en ai pris connaissance » ; cela ne supprime pas sa cause. Une alarme qui disparaît puis réapparaît sans cesse est dite <strong>battante</strong> : elle signale souvent un capteur mal réglé ou un seuil trop proche de la valeur normale.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> face à une avalanche d'alarmes après un arrêt, 1. figez la liste et triez par horodatage croissant ; 2. repérez la <strong>première alarme</strong> apparue : c'est en général la cause ; 3. vérifiez que les alarmes suivantes en sont des conséquences logiques (manque amont, saturation aval, arrêts en cascade) ; 4. traitez la cause, puis acquittez l'ensemble ; 5. notez la première alarme et sa durée dans le relevé d'arrêts.</div>"
      },
      {
       "titre": "La boucle de régulation",
       "contenu": "\n<p>Dans les industries de process (agroalimentaire, chimie, pharmacie, papier), de nombreuses grandeurs doivent être maintenues constantes : température d'un pasteurisateur, pression d'une cuve, niveau d'un bac, débit d'un dosage, tension d'une bande. On utilise une <strong>boucle de régulation</strong>.</p>\n<table>\n<thead><tr><th>Élément</th><th>Rôle</th><th>Exemple : température d'un bac de colle</th></tr></thead>\n<tbody>\n<tr><td>Grandeur réglée</td><td>Grandeur à maintenir</td><td>Température de la colle</td></tr>\n<tr><td>Consigne (W ou SP)</td><td>Valeur souhaitée</td><td>160 °C</td></tr>\n<tr><td>Mesure (X ou PV)</td><td>Valeur réelle mesurée par le capteur</td><td>Sonde Pt100 dans le bac</td></tr>\n<tr><td>Écart</td><td>Consigne moins mesure</td><td>160 − 155 = 5 °C</td></tr>\n<tr><td>Régulateur</td><td>Calcule la commande à partir de l'écart</td><td>Bloc PID dans l'automate</td></tr>\n<tr><td>Commande (Y ou OP)</td><td>Signal envoyé à l'organe de réglage</td><td>Pourcentage de puissance de chauffe</td></tr>\n<tr><td>Organe de réglage</td><td>Agit sur le procédé</td><td>Gradateur et résistances</td></tr>\n<tr><td>Grandeur perturbatrice</td><td>Influence non maîtrisée</td><td>Ajout de colle froide, cadence</td></tr>\n</tbody>\n</table>\n<p>La boucle est dite <strong>fermée</strong> parce que la mesure revient au régulateur, qui corrige en permanence. En boucle ouverte, la commande serait fixée sans tenir compte du résultat.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un régulateur possède en général un mode <strong>automatique</strong> (il calcule lui-même la commande) et un mode <strong>manuel</strong> (l'opérateur fixe la commande). Passer en manuel est parfois utile au démarrage d'un équipement, mais une boucle oubliée en manuel ne corrige plus rien : vérifiez le mode à chaque prise de poste.</div>"
      },
      {
       "titre": "Le régulateur PID",
       "contenu": "\n<p>Le régulateur le plus répandu est le <strong>PID</strong>, qui combine trois actions :</p>\n<ul>\n<li><strong>Proportionnelle (P)</strong> : la commande est proportionnelle à l'écart. Plus le gain est grand, plus la réaction est vive, mais au-delà d'un certain gain le système oscille. Une action P seule laisse en général un <strong>écart statique</strong> : la mesure se stabilise un peu à côté de la consigne.</li>\n<li><strong>Intégrale (I)</strong> : la commande augmente tant que l'écart persiste. Elle supprime l'écart statique, mais une intégrale trop forte (temps d'intégrale trop court) provoque des dépassements et des oscillations lentes.</li>\n<li><strong>Dérivée (D)</strong> : la commande réagit à la vitesse de variation de l'écart. Elle anticipe et amortit, mais amplifie le bruit de mesure ; elle est souvent peu ou pas utilisée sur les mesures bruitées (débit, pression).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le réglage des paramètres PID relève du technicien de régulation ou de l'automaticien. Un pilote qui modifie un gain « pour aller plus vite » peut rendre une boucle instable et provoquer des pertes de produit, voire un risque de surchauffe ou de surpression. Le rôle du pilote est d'observer, de décrire et de signaler un comportement anormal.</div>"
      },
      {
       "titre": "Lire une courbe de réponse",
       "contenu": "\n<p>Pour juger une régulation, on observe la réponse de la mesure après un <strong>changement de consigne</strong> ou une <strong>perturbation</strong>. Les critères sont :</p>\n<table>\n<thead><tr><th>Critère</th><th>Définition</th><th>Ce qu'il traduit</th></tr></thead>\n<tbody>\n<tr><td>Écart statique</td><td>Différence entre consigne et mesure une fois stabilisée</td><td>Précision</td></tr>\n<tr><td>Dépassement</td><td>Valeur maximale atteinte au-delà de la consigne, en % de la variation demandée</td><td>Stabilité</td></tr>\n<tr><td>Temps de réponse à 5 %</td><td>Temps au bout duquel la mesure reste dans ±5 % de sa variation finale</td><td>Rapidité</td></tr>\n<tr><td>Oscillations</td><td>Nombre et amplitude des oscillations autour de la consigne</td><td>Amortissement</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> la consigne d'un pasteurisateur passe de 70 °C à 72 °C (variation de 2 °C). La mesure monte jusqu'à 72,6 °C, oscille deux fois, puis se stabilise à 72,0 °C au bout de 6 minutes ; elle reste dans la bande 71,9 – 72,1 °C à partir de 4 minutes.<br>1. Écart statique : 72,0 − 72,0 = 0 °C, la régulation est précise (présence d'une action intégrale).<br>2. Dépassement : (72,6 − 72) / 2 = 0,3, soit 30 %.<br>3. Bande à 5 % : 5 % de 2 °C = 0,1 °C ; la mesure y reste à partir de 4 minutes, donc temps de réponse à 5 % ≈ 4 min.<br>4. Conclusion à transmettre : réponse précise mais dépassement important ; à signaler si ce dépassement fait sortir le produit des tolérances.</div>"
      },
      {
       "titre": "Recettes et traçabilité des paramètres",
       "contenu": "\n<p>Une <strong>recette</strong> regroupe les paramètres propres à un produit : consignes de température, vitesses, temps de cycle, volumes de dosage, formats. Le chargement d'une recette par la supervision évite les saisies manuelles et les erreurs. Chaque chargement, chaque modification de paramètre et chaque acquittement d'alarme est <strong>horodaté et attribué</strong> à l'utilisateur connecté : c'est la <strong>piste d'audit</strong>, exigée notamment dans les industries pharmaceutiques.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> recette chargée, consignes vérifiées, boucles en automatique, alarmes actives comprises : ce sont les quatre contrôles de supervision à faire à chaque démarrage et à chaque prise de poste.</div>"
      },
      {
       "titre": "Régulation tout ou rien et boucles en cascade",
       "contenu": "\n<p>Toutes les régulations ne sont pas de type PID. La <strong>régulation tout ou rien</strong> (ou à seuils) met l'organe de réglage en marche ou à l'arrêt selon deux seuils : par exemple, une pompe de remplissage démarre quand le niveau d'un bac descend sous 40 % et s'arrête au-dessus de 80 %. L'écart entre les deux seuils, appelé <strong>hystérésis</strong>, évite des démarrages trop fréquents. La mesure oscille alors en permanence entre les deux seuils, ce qui est normal.</p>\n<p>Dans les procédés plus complexes, on rencontre des <strong>boucles en cascade</strong> : un premier régulateur (par exemple la température d'un produit) fournit la consigne d'un second régulateur plus rapide (par exemple la température du fluide de chauffe). Sur la supervision, il faut alors vérifier que les deux boucles sont dans le bon mode : si la boucle esclave est en manuel, la boucle maître ne peut plus agir.</p>\n<p>Dans tous les cas, le pilote surveille la cohérence entre consigne, mesure et commande : une commande à 100 % durable avec une mesure qui n'atteint pas la consigne signale un organe de réglage saturé ou défaillant (vanne bloquée, résistance coupée).</p>"
      }
     ],
     "points_cles": [
      "La supervision présente synoptique, alarmes, courbes, recettes et compteurs de la ligne.",
      "Acquitter une alarme ne supprime pas sa cause ; la première alarme apparue est généralement la cause.",
      "Une boucle de régulation compare la mesure à la consigne et agit sur le procédé par l'organe de réglage.",
      "L'action P donne la réactivité mais laisse un écart statique ; l'action I l'annule ; l'action D amortit.",
      "Une boucle laissée en mode manuel ne corrige plus les perturbations.",
      "On juge une régulation par l'écart statique, le dépassement, le temps de réponse et les oscillations.",
      "Les paramètres PID se modifient uniquement par les personnes habilitées.",
      "Recettes et modifications de paramètres sont tracées dans une piste d'audit."
     ],
     "lexique": [
      {
       "terme": "Supervision (SCADA)",
       "def": "Logiciel de visualisation et de commande à distance d'une installation."
      },
      {
       "terme": "Acquittement",
       "def": "Action qui confirme la prise de connaissance d'une alarme sans en supprimer la cause."
      },
      {
       "terme": "Alarme battante",
       "def": "Alarme qui apparaît et disparaît de façon répétée."
      },
      {
       "terme": "Consigne",
       "def": "Valeur souhaitée de la grandeur réglée."
      },
      {
       "terme": "Mesure",
       "def": "Valeur réelle de la grandeur réglée fournie par le capteur."
      },
      {
       "terme": "Grandeur perturbatrice",
       "def": "Grandeur non maîtrisée qui écarte la mesure de la consigne."
      },
      {
       "terme": "Régulateur PID",
       "def": "Régulateur combinant des actions proportionnelle, intégrale et dérivée."
      },
      {
       "terme": "Écart statique",
       "def": "Différence persistante entre consigne et mesure en régime stabilisé."
      },
      {
       "terme": "Dépassement",
       "def": "Valeur maximale atteinte par la mesure au-delà de la consigne, exprimée en pourcentage."
      },
      {
       "terme": "Recette",
       "def": "Ensemble des paramètres de fabrication associés à un produit ou à un format."
      },
      {
       "terme": "Piste d'audit",
       "def": "Enregistrement horodaté et nominatif des actions et modifications sur un système."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Organiser, piloter et animer la production",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bplp-gestion-production",
     "titre": "Gestion de production : flux, planification et ordonnancement",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Distinguer production à la commande et production sur stock, flux poussé et flux tiré.",
      "Expliquer le passage du plan de production à l'ordre de fabrication.",
      "Calculer des besoins nets à partir d'une nomenclature et des stocks.",
      "Ordonnancer une série d'ordres de fabrication sur une ligne en tenant compte des changements de format.",
      "Expliquer le fonctionnement d'une boucle kanban et la gestion des approvisionnements de ligne."
     ],
     "sections": [
      {
       "titre": "Les modes de production",
       "contenu": "\n<p>La <strong>gestion de production</strong> organise ce que l'usine fabrique, en quelle quantité, quand et avec quelles ressources. Le pilote de ligne en est le dernier maillon : il transforme le programme prévu en produits réels et signale tout écart.</p>\n<table>\n<thead><tr><th>Mode</th><th>Principe</th><th>Exemple</th><th>Conséquence pour la ligne</th></tr></thead>\n<tbody>\n<tr><td>Production sur stock</td><td>On fabrique selon une prévision de ventes</td><td>Eau minérale, conserves, produits d'hygiène</td><td>Grandes séries, peu de changements</td></tr>\n<tr><td>Production à la commande</td><td>On fabrique après réception de la commande</td><td>Marques de distributeur, pièces sur plan client</td><td>Séries plus courtes, délais serrés</td></tr>\n<tr><td>Assemblage à la commande</td><td>Sous-ensembles sur stock, finition à la commande</td><td>Conditionnement personnalisé d'un produit standard</td><td>Changements de format fréquents en fin de ligne</td></tr>\n</tbody>\n</table>\n<p>On distingue aussi deux logiques de pilotage des flux :</p>\n<ul>\n<li>en <strong>flux poussé</strong>, chaque poste produit selon le planning, que le poste suivant soit prêt ou non : on risque l'accumulation d'en-cours ;</li>\n<li>en <strong>flux tiré</strong>, chaque poste produit uniquement pour remplacer ce que le poste aval a consommé : les en-cours sont limités, mais toute rupture se ressent vite.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'objectif de la gestion de production est de livrer la bonne quantité, de bonne qualité, au bon moment, au moindre coût, avec le moins de stock possible. Ces objectifs sont souvent contradictoires : la planification cherche le meilleur compromis.</div>"
      },
      {
       "titre": "Du plan de production à l'ordre de fabrication",
       "contenu": "\n<p>La planification se fait en plusieurs étapes, de la plus lointaine à la plus proche :</p>\n<ol>\n<li>le <strong>plan industriel et commercial</strong> fixe les volumes par famille de produits sur plusieurs mois ;</li>\n<li>le <strong>programme directeur de production</strong> (PDP) précise les quantités par produit et par semaine ;</li>\n<li>le <strong>calcul des besoins</strong> (méthode MRP) détermine, à partir des nomenclatures et des stocks, les matières et composants à commander ou à fabriquer ;</li>\n<li>l'<strong>ordonnancement</strong> transforme le tout en <strong>ordres de fabrication</strong> (OF) affectés à une ligne, avec une date et un ordre de passage ;</li>\n<li>le <strong>lancement</strong> met à disposition de la ligne les documents, les matières et la recette.</li>\n</ol>\n<p>L'<strong>ordre de fabrication</strong> est le document (papier ou numérique) qui autorise la ligne à produire. Il précise le produit, la quantité, la nomenclature, la gamme ou la recette, les dates, et sert ensuite à déclarer les quantités produites et consommées.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le pilote n'établit pas le planning, mais il en est le premier informateur. Une panne longue, un manque de composant ou un rendement inférieur au prévu doivent être remontés immédiatement à l'ordonnancement, qui pourra réorganiser l'enchaînement des OF ou décaler une livraison.</div>"
      },
      {
       "titre": "Nomenclature et calcul des besoins",
       "contenu": "\n<p>La <strong>nomenclature</strong> décrit la composition d'un produit : la liste des composants et matières, avec leur quantité par unité de produit fini (le <strong>coefficient de lien</strong>). On parle de nomenclature arborescente quand les composants ont eux-mêmes des sous-composants.</p>\n<p>Le <strong>besoin brut</strong> d'un composant est la quantité nécessaire pour réaliser l'OF. Le <strong>besoin net</strong> tient compte des stocks disponibles : besoin net = besoin brut − stock disponible (s'il est positif).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un OF demande 40 000 bouteilles de 1 L, conditionnées en packs de 6, à raison de 80 packs par palette. Nomenclature par bouteille : 1 bouteille vide, 1 bouchon, 1 étiquette, 1 L de jus. Le stock en bord de ligne contient 15 000 bouchons et 5 000 étiquettes.<br>1. Nombre de packs : 40 000 / 6 = 6 666,7, donc 6 667 packs (on arrondit à l'entier supérieur ; le dernier pack sera incomplet ou la quantité ajustée à 40 002 bouteilles).<br>2. Palettes : 6 667 / 80 = 83,3, soit 84 palettes.<br>3. Bouchons : besoin brut 40 000 ; besoin net 40 000 − 15 000 = 25 000.<br>4. Étiquettes : besoin brut 40 000 ; besoin net 35 000.<br>5. Jus : 40 000 L, auxquels on ajoute les pertes prévues de démarrage et de purge.<br>Il faut aussi prévoir un taux de rebut : avec 1 % de pertes, on approvisionne environ 1 % de composants en plus.</div>"
      },
      {
       "titre": "Ordonnancer les ordres de fabrication",
       "contenu": "\n<p>L'ordonnancement fixe l'ordre de passage des OF sur la ligne. Il tient compte des délais clients, de la disponibilité des matières, des compétences présentes, mais aussi des <strong>changements de format</strong> et des <strong>nettoyages</strong> entre deux produits. Un bon ordonnancement regroupe les produits qui se ressemblent pour réduire ces temps non productifs.</p>\n<p>On le représente souvent par un <strong>diagramme de Gantt</strong> : une ligne horizontale par ressource, des barres dont la longueur est proportionnelle à la durée de chaque OF ou changement.</p>\n<table>\n<thead><tr><th>Ordre</th><th>Produit</th><th>Durée de production</th><th>Changement avant</th></tr></thead>\n<tbody>\n<tr><td>OF 1</td><td>Jus orange 1 L</td><td>3 h</td><td>—</td></tr>\n<tr><td>OF 2</td><td>Jus orange 50 cl</td><td>2 h</td><td>Changement de format bouteille : 45 min</td></tr>\n<tr><td>OF 3</td><td>Jus pomme 50 cl</td><td>2 h 30</td><td>Rinçage produit : 30 min</td></tr>\n<tr><td>OF 4</td><td>Jus pomme 1 L</td><td>3 h</td><td>Changement de format bouteille : 45 min</td></tr>\n</tbody>\n</table>\n<p>L'ordre proposé place côte à côte les produits de même format ou de même parfum. En commençant par la pomme puis l'orange, on ajouterait un rinçage allergène ou arôme plus long si le procédé l'exige : les règles de succession sont définies par la qualité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'ordre de passage n'est pas seulement une question de temps. Dans l'agroalimentaire, la présence d'<strong>allergènes</strong> impose souvent de produire les recettes sans allergène avant celles qui en contiennent, ou un nettoyage validé entre les deux. Changer l'ordre des OF sans l'accord de la qualité peut créer un risque pour le consommateur.</div>"
      },
      {
       "titre": "Kanban et approvisionnement de ligne",
       "contenu": "\n<p>Le <strong>kanban</strong> est une méthode de flux tiré : une étiquette (ou un signal informatique) accompagne chaque contenant de composants. Quand le contenant est vidé au poste, son étiquette est renvoyée au fournisseur amont (magasin ou atelier), ce qui déclenche le réapprovisionnement d'un contenant identique. Le nombre d'étiquettes en circulation limite le stock maximal.</p>\n<p>En bord de ligne, l'approvisionnement des consommables (bobines d'étiquettes, film, cartons, colle, bouchons) est souvent organisé par un <strong>cariste</strong> ou un <strong>approvisionneur</strong> selon des seuils. Le pilote veille à ce que les seuils soient respectés et anticipe les changements de produit, pour lesquels il faut vider ou évacuer les composants de l'ancien produit.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en fin d'OF, les composants non utilisés sont retournés au magasin et <strong>déclarés</strong> : sans cette déclaration, les stocks informatiques deviennent faux et le calcul des besoins suivant sera erroné.</div>"
      },
      {
       "titre": "Déclarer la production",
       "contenu": "\n<p>Chaque OF se termine par une <strong>déclaration de production</strong> : quantités bonnes, quantités rebutées, quantités en attente de décision qualité, consommations réelles de matières, temps passés et arrêts. Dans les usines équipées d'un MES, une partie est automatique (compteurs de ligne), mais le pilote valide les chiffres.</p>\n<p>Les écarts entre prévu et réalisé sont analysés : rendement matière inférieur au standard, temps de changement plus long que prévu, quantité bonne inférieure à la quantité lancée. Ces écarts alimentent le suivi des performances et l'amélioration continue.</p>\n<ul>\n<li><strong>Rendement matière</strong> = quantité de produit bon / quantité de matière consommée (exprimées dans la même unité).</li>\n<li><strong>Taux de réalisation de l'OF</strong> = quantité bonne déclarée / quantité demandée.</li>\n</ul>"
      },
      {
       "titre": "Délais, capacité et charge",
       "contenu": "\n<p>Pour savoir si un programme est réalisable, on compare la <strong>charge</strong> (le temps de travail demandé à la ligne) à sa <strong>capacité</strong> (le temps dont elle dispose, corrigé de son rendement). La charge d'un OF se calcule par : quantité / cadence nominale + temps de changement. La capacité d'une semaine vaut : nombre de postes × durée d'un poste × TRS moyen attendu.</p>\n<p>Exemple : une ligne travaille en deux postes de 8 h, cinq jours par semaine, avec un TRS moyen de 75 %. Sa capacité effective est 2 × 8 × 5 × 0,75 = 60 h de production à cadence nominale. Si les OF de la semaine représentent 66 h de charge, il manque 6 h : il faut décaler un OF, ajouter un poste le samedi ou améliorer le TRS. Le pilote qui connaît ce raisonnement comprend mieux les arbitrages de l'ordonnancement et peut expliquer à son équipe pourquoi une heure d'arrêt évitée compte.</p>"
      }
     ],
     "points_cles": [
      "On produit sur stock (prévisions) ou à la commande (commandes fermes), en flux poussé ou tiré.",
      "La planification va du plan industriel au programme directeur, puis au calcul des besoins et aux OF.",
      "L'ordre de fabrication autorise la production et sert à déclarer quantités et consommations.",
      "Besoin net = besoin brut − stock disponible, en tenant compte du taux de rebut prévu.",
      "L'ordonnancement regroupe les produits proches pour réduire changements et nettoyages.",
      "Les règles de succession liées aux allergènes ou à la qualité s'imposent à l'ordonnancement.",
      "Le kanban limite les stocks en déclenchant le réapprovisionnement à la consommation.",
      "Une déclaration de production exacte conditionne la justesse des stocks et des plannings suivants."
     ],
     "lexique": [
      {
       "terme": "Flux poussé",
       "def": "Organisation où chaque poste produit selon le planning, sans attendre la demande de l'aval."
      },
      {
       "terme": "Flux tiré",
       "def": "Organisation où chaque poste produit seulement pour remplacer ce que l'aval a consommé."
      },
      {
       "terme": "Programme directeur de production",
       "def": "Plan qui fixe les quantités de chaque produit fini à fabriquer par période."
      },
      {
       "terme": "MRP",
       "def": "Méthode de calcul des besoins en composants à partir des nomenclatures, des stocks et du programme."
      },
      {
       "terme": "Ordre de fabrication",
       "def": "Document qui autorise et décrit la fabrication d'une quantité donnée d'un produit."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste structurée des composants d'un produit avec leurs quantités."
      },
      {
       "terme": "Besoin net",
       "def": "Quantité à approvisionner après déduction des stocks disponibles."
      },
      {
       "terme": "Ordonnancement",
       "def": "Détermination de l'ordre et des dates de passage des ordres sur les ressources."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Représentation des tâches par des barres horizontales proportionnelles à leur durée."
      },
      {
       "terme": "Kanban",
       "def": "Étiquette ou signal qui déclenche le réapprovisionnement d'un contenant consommé."
      }
     ]
    },
    {
     "id": "bplp-changement-format-smed",
     "titre": "Préparer la production et réduire les changements de format",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Organiser la préparation d'un démarrage de production : matières, documents, réglages, équipe.",
      "Définir un changement de format et mesurer sa durée de bonne pièce à bonne pièce.",
      "Appliquer les étapes de la méthode SMED : observer, séparer, convertir, simplifier.",
      "Distinguer opérations internes et externes et en déduire un gain de temps.",
      "Rédiger ou améliorer un mode opératoire de changement de format standardisé."
     ],
     "sections": [
      {
       "titre": "Préparer un démarrage de production",
       "contenu": "\n<p>Avant de lancer un ordre de fabrication, le pilote vérifie que tout est prêt. Cette <strong>préparation</strong> réduit les arrêts au démarrage, qui sont parmi les plus coûteux. Une liste de contrôle typique comprend :</p>\n<table>\n<thead><tr><th>Domaine</th><th>Vérifications</th></tr></thead>\n<tbody>\n<tr><td>Documents</td><td>OF, recette, fiche de réglage du format, plan de contrôle, consignes particulières</td></tr>\n<tr><td>Matières et composants</td><td>Présence, quantité suffisante, référence et lot conformes à la nomenclature, statut qualité libéré</td></tr>\n<tr><td>Équipements</td><td>Format monté, nettoyage validé, maintenance terminée et machine rendue, outillages disponibles</td></tr>\n<tr><td>Personnel</td><td>Effectif présent, compétences requises sur chaque poste, consignes transmises</td></tr>\n<tr><td>Sécurité et environnement</td><td>Protecteurs en place, consignations levées, zone rangée, bacs de tri disponibles</td></tr>\n</tbody>\n</table>\n<p>Le démarrage se termine par le <strong>contrôle de première production</strong> (ou validation de démarrage) : les premiers produits sont vérifiés selon le plan de contrôle avant de libérer la production en série.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le démarrage n'est réussi que lorsque le premier produit conforme est obtenu. La mesure du temps de démarrage s'arrête à ce moment-là, pas au moment où la machine se met à tourner.</div>"
      },
      {
       "titre": "Le changement de format et sa mesure",
       "contenu": "\n<p>Un <strong>changement de format</strong> (ou changement de série, changeover) est l'ensemble des opérations qui permettent de passer de la production d'un produit à celle d'un autre : remplacement des pièces de format (guides, vis de cadencement, étoiles, mandrins), modification des réglages, changement des consommables, nettoyage éventuel, essais.</p>\n<p>On mesure sa durée <strong>de la dernière bonne pièce de la série précédente à la première bonne pièce de la série suivante</strong>, à cadence normale. Cette définition inclut les essais, les rebuts de démarrage et les retouches de réglage, souvent oubliés.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> déclarer la fin du changement au moment où la machine redémarre, alors que les vingt minutes suivantes servent à « peaufiner » les réglages en produisant des rebuts, masque la vraie durée du changement et fausse les indicateurs. La fin du changement est la première pièce bonne produite à cadence nominale.</div>"
      },
      {
       "titre": "La méthode SMED",
       "contenu": "\n<p>La méthode <strong>SMED</strong> (Single Minute Exchange of Die, changement d'outil en moins de dix minutes) a été formalisée par l'ingénieur japonais Shigeo Shingo. Elle repose sur une idée simple : beaucoup d'opérations réalisées machine arrêtée pourraient être faites pendant que la machine produit encore.</p>\n<ul>\n<li>Une <strong>opération interne</strong> ne peut se faire que machine arrêtée (démonter un guide, changer une étoile).</li>\n<li>Une <strong>opération externe</strong> peut se faire machine en marche (aller chercher les pièces de format, préparer les outils, préchauffer une pièce, préparer la bobine d'étiquettes suivante).</li>\n</ul>\n<p>Les étapes de la méthode sont :</p>\n<ol>\n<li><strong>Observer et chronométrer</strong> le changement actuel, de préférence filmé, en listant toutes les opérations ;</li>\n<li><strong>Séparer</strong> les opérations internes et externes ;</li>\n<li><strong>Convertir</strong> le plus possible d'opérations internes en externes (prépréglage hors machine, chariot de format préparé à l'avance) ;</li>\n<li><strong>Simplifier</strong> les opérations internes restantes : fixations rapides au lieu de vis, butées et repères, suppression des réglages par essais ;</li>\n<li><strong>Standardiser</strong> la nouvelle méthode dans un mode opératoire et former l'équipe.</li>\n</ol>"
      },
      {
       "titre": "Exemple de chantier SMED",
       "contenu": "\n<p>Sur une étiqueteuse, le changement de format 1 L vers 50 cl a été chronométré :</p>\n<table>\n<thead><tr><th>Opération</th><th>Durée (min)</th><th>Type actuel</th><th>Après analyse</th></tr></thead>\n<tbody>\n<tr><td>Aller chercher les pièces de format au magasin</td><td>10</td><td>Interne</td><td>Externe (chariot préparé avant l'arrêt)</td></tr>\n<tr><td>Chercher les outils</td><td>5</td><td>Interne</td><td>Externe (panneau d'outils sur le chariot)</td></tr>\n<tr><td>Démonter la vis de cadencement et les étoiles</td><td>8</td><td>Interne</td><td>Interne simplifiée (fixations rapides) : 4</td></tr>\n<tr><td>Monter les pièces du nouveau format</td><td>10</td><td>Interne</td><td>Interne simplifiée : 5</td></tr>\n<tr><td>Régler la hauteur des groupes d'étiquetage par essais</td><td>15</td><td>Interne</td><td>Interne avec règle graduée et valeurs de la fiche : 5</td></tr>\n<tr><td>Changer la bobine d'étiquettes</td><td>4</td><td>Interne</td><td>Interne : 4 (bobine préparée)</td></tr>\n<tr><td>Essais et réglages fins</td><td>8</td><td>Interne</td><td>Interne : 3</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le gain du chantier.<br>1. Durée initiale, tout étant fait machine arrêtée : 10 + 5 + 8 + 10 + 15 + 4 + 8 = 60 min.<br>2. Après conversion, les 15 minutes de recherche (pièces et outils) deviennent externes et ne comptent plus dans l'arrêt.<br>3. Internes simplifiées : 4 + 5 + 5 + 4 + 3 = 21 min.<br>4. Gain : 60 − 21 = 39 min, soit une réduction de 65 %.<br>5. Avec deux changements par jour sur 220 jours, le temps récupéré est de 39 × 2 × 220 = 17 160 min, soit 286 h de production possible par an.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le temps gagné par le SMED peut servir à produire plus, mais aussi à produire en <strong>plus petites séries</strong> sans perte de capacité, donc avec moins de stocks et plus de réactivité vis-à-vis des clients. C'est souvent ce second objectif qui justifie le chantier.</div>"
      },
      {
       "titre": "Standardiser le changement",
       "contenu": "\n<p>Le résultat d'un chantier SMED est fixé dans un <strong>mode opératoire standardisé</strong> de changement de format, qui comprend :</p>\n<ul>\n<li>la liste et l'ordre des opérations, réparties entre les intervenants (changement à deux personnes en parallèle) ;</li>\n<li>les opérations externes à faire avant l'arrêt, avec le moment de leur déclenchement (par exemple, 30 minutes avant la fin de l'OF) ;</li>\n<li>les valeurs de réglage pour chaque format (hauteurs, positions de repères, numéros de recette) ;</li>\n<li>les points de sécurité : consignation, mode réglage, port des gants pour les pièces coupantes ;</li>\n<li>les contrôles de validation du premier produit.</li>\n</ul>\n<p>Les pièces de format sont <strong>identifiées</strong> (couleur, gravure du format) et rangées selon la méthode des <strong>5S</strong>, pour éviter les erreurs de montage. Des <strong>détrompeurs</strong> (formes qui empêchent un montage incorrect) renforcent la fiabilité.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un changement de format rapide repose sur trois piliers : tout préparer avant l'arrêt, supprimer les réglages par essais grâce à des repères et des valeurs écrites, et répartir le travail entre plusieurs personnes selon un standard connu de tous.</div>"
      },
      {
       "titre": "Organiser le changement en équipe",
       "contenu": "\n<p>Un changement de format réalisé par une seule personne enchaîne toutes les opérations. À deux, on peut les répartir pour travailler en parallèle, à condition de bien organiser l'intervention pour éviter les attentes et les risques de co-activité (une personne qui remet un mouvement en route pendant que l'autre a les mains dans la machine).</p>\n<table>\n<thead><tr><th>Temps (min)</th><th>Intervenant A</th><th>Intervenant B</th></tr></thead>\n<tbody>\n<tr><td>0 à 4</td><td>Démontage vis de cadencement</td><td>Démontage étoiles</td></tr>\n<tr><td>4 à 9</td><td>Montage nouvelle vis</td><td>Montage nouvelles étoiles</td></tr>\n<tr><td>9 à 14</td><td>Réglage hauteur des groupes</td><td>Réglage des guides, changement de bobine</td></tr>\n<tr><td>14 à 17</td><td>Chargement recette, contrôle</td><td>Rangement des pièces sur le chariot</td></tr>\n</tbody>\n</table>\n<p>Ce type de tableau, appelé parfois <strong>diagramme de répartition</strong> ou chronogramme d'intervention, fait apparaître le <strong>chemin critique</strong> : la suite des opérations qui détermine la durée totale. Pour réduire encore la durée, il faut agir sur les opérations de ce chemin. Ici, le changement à deux personnes dure 17 minutes au lieu de 21.</p>\n<p>Les règles de sécurité de la co-activité doivent être écrites dans le mode opératoire : un seul intervenant commande les mouvements en mode réglage, l'autre se tient hors de la zone pendant les essais, et chacun annonce clairement les mises en mouvement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> chercher à réduire la durée d'un changement ne justifie jamais de supprimer une consignation ou un passage en mode réglage. Un standard SMED doit être plus rapide <strong>et</strong> au moins aussi sûr que la méthode qu'il remplace ; l'avis du service sécurité est requis lorsque la méthode d'accès à la machine change.</div>\n<p>Enfin, la durée de chaque changement est enregistrée. Le suivi de ces durées dans le temps montre si le standard est appliqué et révèle les écarts entre équipes, qui sont autant de pistes de formation ou d'amélioration du standard.</p>"
      }
     ],
     "points_cles": [
      "La préparation d'un démarrage couvre documents, matières, équipements, personnel et sécurité.",
      "Le démarrage se termine par la validation du premier produit conforme.",
      "La durée d'un changement se mesure de la dernière bonne pièce à la première bonne pièce.",
      "Une opération interne exige l'arrêt machine ; une opération externe peut se faire en production.",
      "Le SMED consiste à observer, séparer, convertir, simplifier puis standardiser.",
      "Les réglages par essais se suppriment avec des repères, des butées et des valeurs écrites.",
      "Le gain du SMED permet de produire plus ou en plus petites séries avec moins de stocks.",
      "Pièces de format identifiées, rangées en 5S et munies de détrompeurs limitent les erreurs."
     ],
     "lexique": [
      {
       "terme": "Changement de format",
       "def": "Ensemble des opérations pour passer de la production d'un produit à un autre."
      },
      {
       "terme": "SMED",
       "def": "Méthode de réduction des temps de changement de série."
      },
      {
       "terme": "Opération interne",
       "def": "Opération de changement réalisable uniquement machine arrêtée."
      },
      {
       "terme": "Opération externe",
       "def": "Opération de changement réalisable pendant que la machine produit."
      },
      {
       "terme": "Pièce de format",
       "def": "Pièce spécifique à un format de produit : guide, étoile, vis de cadencement, mandrin."
      },
      {
       "terme": "Prépréglage",
       "def": "Réglage effectué hors machine pour réduire le temps d'arrêt."
      },
      {
       "terme": "Détrompeur",
       "def": "Dispositif qui empêche physiquement un montage ou un positionnement incorrect."
      },
      {
       "terme": "Validation de démarrage",
       "def": "Contrôle des premiers produits avant de libérer la production en série."
      },
      {
       "terme": "5S",
       "def": "Méthode d'organisation du poste : trier, ranger, nettoyer, standardiser, maintenir."
      }
     ]
    },
    {
     "id": "bplp-trs-performance",
     "titre": "Mesurer et analyser la performance : TRS, TRG et pertes",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Décomposer le temps total en temps d'ouverture, temps requis, temps de fonctionnement, temps net et temps utile.",
      "Calculer le TRS et ses trois composantes : disponibilité, performance, qualité.",
      "Distinguer TRS, TRG et TRE et savoir lequel utiliser.",
      "Classer les pertes en grandes familles et les représenter par un diagramme de Pareto.",
      "Interpréter l'évolution d'un TRS et proposer des priorités d'action."
     ],
     "sections": [
      {
       "titre": "Pourquoi un indicateur unique ne suffit pas",
       "contenu": "\n<p>Le cours de seconde a présenté les indicateurs de base de la conduite (quantité produite, cadence, taux de rebut). En première et terminale, le pilote doit savoir calculer et analyser le <strong>taux de rendement synthétique</strong> (TRS), indicateur de référence de l'efficacité d'un équipement. La norme française <strong>NF E60-182</strong> en donne les définitions.</p>\n<p>Le TRS répond à la question : sur le temps où l'équipement devait produire, quelle part a réellement servi à fabriquer des produits bons, à la cadence prévue ? Son intérêt est de révéler <strong>toutes</strong> les pertes, y compris celles qu'on ne voit pas : micro-arrêts, ralentissements, rebuts.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le TRS est le rapport temps utile / temps requis. Il se décompose en trois taux qui se multiplient : TRS = taux de disponibilité × taux de performance × taux de qualité.</div>"
      },
      {
       "titre": "La décomposition des temps",
       "contenu": "\n<table>\n<thead><tr><th>Temps</th><th>Définition</th><th>Pertes retranchées</th></tr></thead>\n<tbody>\n<tr><td>Temps total</td><td>Temps calendaire (24 h × 7 j)</td><td>—</td></tr>\n<tr><td>Temps d'ouverture</td><td>Temps pendant lequel l'atelier est ouvert</td><td>Fermeture de l'usine, week-ends, jours fériés</td></tr>\n<tr><td>Temps requis</td><td>Temps pendant lequel l'équipement est engagé pour produire</td><td>Arrêts planifiés : pauses non remplacées, réunions, essais programmés, maintenance préventive planifiée, absence de commandes</td></tr>\n<tr><td>Temps de fonctionnement</td><td>Temps pendant lequel l'équipement produit</td><td>Arrêts propres et induits : pannes, changements de format, réglages, manque de matière, manque de personnel</td></tr>\n<tr><td>Temps net</td><td>Temps qu'il aurait fallu, à cadence nominale, pour produire toutes les pièces sorties</td><td>Écarts de cadence : ralentissements, micro-arrêts non enregistrés</td></tr>\n<tr><td>Temps utile</td><td>Temps qu'il aurait fallu, à cadence nominale, pour produire les seules pièces bonnes</td><td>Non-qualité : rebuts, retouches, pertes de démarrage</td></tr>\n</tbody>\n</table>\n<p>En pratique, on calcule le temps utile de façon simple : <strong>temps utile = nombre de pièces bonnes × temps de cycle nominal</strong>. On peut donc obtenir le TRS sans chronométrer les micro-arrêts, à partir du seul comptage des pièces bonnes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le temps de cycle à utiliser est le temps de cycle <strong>nominal</strong> de référence de l'équipement (souvent celui du goulot de la ligne), et non la cadence moyenne constatée. Utiliser une cadence « habituelle » plus lente masque les pertes de performance et donne un TRS flatteur et faux.</div>"
      },
      {
       "titre": "Calculer le TRS pas à pas",
       "contenu": "\n<p>Les trois taux se définissent ainsi :</p>\n<ul>\n<li><strong>taux de disponibilité</strong> (ou de disponibilité opérationnelle) = temps de fonctionnement / temps requis ;</li>\n<li><strong>taux de performance</strong> = temps net / temps de fonctionnement ;</li>\n<li><strong>taux de qualité</strong> = temps utile / temps net = pièces bonnes / pièces produites.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> poste de 8 h, avec 30 min de pause non remplacée. Cadence nominale de la ligne : 12 000 bouteilles/h, soit un temps de cycle de 0,3 s. Arrêts enregistrés : changement de format 40 min, panne étiqueteuse 25 min, manque bouchons 15 min. Production totale : 64 800 bouteilles, dont 1 300 rebutées.<br>1. Temps requis : 480 − 30 = 450 min.<br>2. Temps de fonctionnement : 450 − (40 + 25 + 15) = 370 min.<br>3. Temps net : 64 800 × 0,3 s = 19 440 s = 324 min.<br>4. Pièces bonnes : 64 800 − 1 300 = 63 500 ; temps utile : 63 500 × 0,3 = 19 050 s = 317,5 min.<br>5. Disponibilité : 370 / 450 = 0,822 ; performance : 324 / 370 = 0,876 ; qualité : 317,5 / 324 = 0,980.<br>6. TRS = 317,5 / 450 = 0,706, soit 70,6 %. Vérification : 0,822 × 0,876 × 0,980 ≈ 0,706.<br>Lecture : la plus grosse perte est la disponibilité (80 min d'arrêts), puis la performance (46 min de pertes de cadence et micro-arrêts), enfin la qualité (6,5 min équivalents).</div>"
      },
      {
       "titre": "TRS, TRG et TRE",
       "contenu": "\n<p>Selon la question posée, on rapporte le temps utile à des temps de référence différents :</p>\n<table>\n<thead><tr><th>Indicateur</th><th>Formule</th><th>Question à laquelle il répond</th></tr></thead>\n<tbody>\n<tr><td>TRS, taux de rendement synthétique</td><td>Temps utile / temps requis</td><td>L'équipement est-il bien utilisé quand on lui demande de produire ? (responsabilité de l'atelier)</td></tr>\n<tr><td>TRG, taux de rendement global</td><td>Temps utile / temps d'ouverture</td><td>L'atelier ouvert est-il bien exploité ? (intègre les arrêts planifiés)</td></tr>\n<tr><td>TRE, taux de rendement économique</td><td>Temps utile / temps total</td><td>L'investissement est-il bien rentabilisé ? (intègre les heures de fermeture)</td></tr>\n</tbody>\n</table>\n<p>Le TRS est toujours supérieur ou égal au TRG, lui-même supérieur ou égal au TRE. Une ligne peut avoir un excellent TRS et un TRE faible si elle ne fonctionne qu'en un poste par jour, cinq jours sur sept.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les définitions précises (ce qui est « planifié » ou non, comment on traite les pauses, les nettoyages, les essais) varient selon les entreprises. Avant de comparer deux TRS, il faut vérifier qu'ils sont calculés avec les mêmes règles. Un « TRS de 85 % » souvent cité comme référence mondiale n'a de sens que pour des règles de calcul identiques.</div>"
      },
      {
       "titre": "Classer les pertes et le diagramme de Pareto",
       "contenu": "\n<p>L'analyse des pertes s'appuie souvent sur une classification en grandes familles, inspirée de la TPM : pannes, changements et réglages, micro-arrêts et marche à vide, ralentissements, rebuts et retouches, pertes de démarrage. Le relevé des arrêts du poste précédent permet de les quantifier.</p>\n<p>Le <strong>diagramme de Pareto</strong> classe les causes par ordre décroissant de durée (ou de fréquence, ou de coût) et trace la courbe des pourcentages cumulés. Il montre que, souvent, un petit nombre de causes explique la majorité des pertes (règle dite des 80/20, ordre de grandeur et non loi exacte).</p>\n<table>\n<thead><tr><th>Cause d'arrêt (semaine)</th><th>Durée (min)</th><th>% du total</th><th>% cumulé</th></tr></thead>\n<tbody>\n<tr><td>Bourrage étiqueteuse</td><td>210</td><td>35 %</td><td>35 %</td></tr>\n<tr><td>Changements de format</td><td>180</td><td>30 %</td><td>65 %</td></tr>\n<tr><td>Manque bouchons</td><td>90</td><td>15 %</td><td>80 %</td></tr>\n<tr><td>Défaut fardeleuse</td><td>60</td><td>10 %</td><td>90 %</td></tr>\n<tr><td>Divers</td><td>60</td><td>10 %</td><td>100 %</td></tr>\n</tbody>\n</table>\n<p>Ici, trois causes représentent 80 % des arrêts : c'est sur elles que portent en priorité les actions d'amélioration.</p>"
      },
      {
       "titre": "Interpréter et faire vivre l'indicateur",
       "contenu": "\n<p>Un TRS n'a de valeur que s'il est <strong>fiable</strong> (arrêts saisis honnêtement, avec la bonne cause), <strong>suivi dans le temps</strong> (courbe journalière ou hebdomadaire) et <strong>discuté</strong> avec l'équipe. Les règles d'interprétation :</p>\n<ul>\n<li>regarder les trois composantes, pas seulement le résultat : un TRS stable peut cacher une baisse de qualité compensée par une meilleure disponibilité ;</li>\n<li>comparer à l'objectif et à la tendance, pas à une valeur isolée ;</li>\n<li>relier chaque variation importante à un événement (nouveau produit, panne, changement d'équipe).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le TRS mesure une machine ou une ligne, jamais une personne. Il sert à orienter les actions d'amélioration ; utilisé comme outil de sanction, il conduit à des saisies d'arrêts faussées et perd toute utilité.</div>"
      },
      {
       "titre": "Pertes cachées : micro-arrêts et ralentissements",
       "contenu": "\n<p>La perte de performance est souvent la plus difficile à comprendre, car elle ne correspond à aucun arrêt enregistré. Elle regroupe deux phénomènes :</p>\n<ul>\n<li>les <strong>micro-arrêts</strong>, trop courts pour être saisis (une bouteille couchée relevée à la main, un capteur qui clignote, un bourrage dégagé en vingt secondes) ;</li>\n<li>les <strong>ralentissements</strong>, lorsque la ligne tourne volontairement ou non en dessous de sa cadence nominale (vitesse réduite « pour éviter les problèmes », cadence limitée par un poste manuel).</li>\n</ul>\n<p>Pour les révéler, on peut réaliser une observation chronométrée de la ligne pendant une ou deux heures, ou exploiter les compteurs automatiques de la supervision qui enregistrent tous les arrêts, même de quelques secondes. Il est fréquent de découvrir qu'une centaine de micro-arrêts par poste représente plus de temps perdu que la panne la plus longue.</p>\n<p>Dans l'exemple de calcul précédent, la perte de performance de 46 minutes correspondait à cette catégorie. Une ligne réglée volontairement à 90 % de sa cadence nominale pour limiter les chutes de produits perd mécaniquement 10 % de performance : c'est un choix qui doit être connu, mesuré et traité comme un problème à résoudre, et non intégré discrètement dans une cadence de référence abaissée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le taux de performance est l'indicateur des pertes que personne ne voit. Une baisse de ce taux sans arrêt enregistré doit déclencher une observation de la ligne.</div>"
      }
     ],
     "points_cles": [
      "Le TRS, défini par la norme NF E60-182, vaut temps utile / temps requis.",
      "TRS = disponibilité × performance × qualité.",
      "Temps utile = nombre de pièces bonnes × temps de cycle nominal.",
      "Le temps de cycle de référence est le nominal, pas la cadence habituelle.",
      "TRG = temps utile / temps d'ouverture ; TRE = temps utile / temps total.",
      "TRS ≥ TRG ≥ TRE pour un même équipement.",
      "Le diagramme de Pareto hiérarchise les causes de pertes pour cibler les actions.",
      "Un TRS fiable repose sur une saisie honnête des arrêts et sert l'amélioration, pas la sanction."
     ],
     "lexique": [
      {
       "terme": "TRS",
       "def": "Taux de rendement synthétique : temps utile rapporté au temps requis."
      },
      {
       "terme": "TRG",
       "def": "Taux de rendement global : temps utile rapporté au temps d'ouverture."
      },
      {
       "terme": "TRE",
       "def": "Taux de rendement économique : temps utile rapporté au temps total."
      },
      {
       "terme": "Temps requis",
       "def": "Temps pendant lequel l'équipement est engagé pour produire, arrêts planifiés déduits."
      },
      {
       "terme": "Temps de fonctionnement",
       "def": "Temps pendant lequel l'équipement produit effectivement."
      },
      {
       "terme": "Temps net",
       "def": "Temps théorique pour produire toutes les pièces sorties à cadence nominale."
      },
      {
       "terme": "Temps utile",
       "def": "Temps théorique pour produire les seules pièces bonnes à cadence nominale."
      },
      {
       "terme": "Taux de disponibilité",
       "def": "Rapport du temps de fonctionnement au temps requis."
      },
      {
       "terme": "Taux de performance",
       "def": "Rapport du temps net au temps de fonctionnement."
      },
      {
       "terme": "Taux de qualité",
       "def": "Rapport du nombre de pièces bonnes au nombre de pièces produites."
      },
      {
       "terme": "Diagramme de Pareto",
       "def": "Histogramme des causes classées par importance décroissante avec courbe des cumuls."
      }
     ]
    },
    {
     "id": "bplp-animer-equipe",
     "titre": "Animer une équipe et gérer les compétences sur la ligne",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Situer le rôle du pilote de ligne dans l'organisation hiérarchique et fonctionnelle de l'atelier.",
      "Construire et exploiter une matrice de compétences et de polyvalence.",
      "Affecter le personnel aux postes en tenant compte des compétences, des contraintes et de la sécurité.",
      "Accueillir, former et accompagner un nouvel opérateur au poste.",
      "Conduire une relève de poste et une réunion courte d'équipe efficaces."
     ],
     "sections": [
      {
       "titre": "La place du pilote dans l'organisation",
       "contenu": "\n<p>Le pilote de ligne occupe un poste d'<strong>encadrement de proximité</strong> technique : il n'est pas toujours le supérieur hiérarchique des opérateurs, mais il coordonne leur travail sur la ligne. On distingue :</p>\n<ul>\n<li>le <strong>lien hiérarchique</strong> : celui qui fixe les objectifs, évalue, décide des congés et des sanctions (chef d'équipe, responsable d'atelier, responsable de production) ;</li>\n<li>le <strong>lien fonctionnel</strong> : celui qui organise et coordonne une activité sans autorité disciplinaire. C'est généralement la situation du pilote vis-à-vis des opérateurs, et vis-à-vis des services supports (maintenance, qualité, logistique, méthodes).</li>\n</ul>\n<p>Autour de la ligne gravitent de nombreux interlocuteurs : le <strong>conducteur de machine</strong> ou l'<strong>opérateur</strong> sur chaque poste, le <strong>régleur</strong>, le <strong>technicien de maintenance</strong>, le <strong>technicien qualité</strong> ou le laboratoire, l'<strong>approvisionneur</strong> ou le cariste, le <strong>service méthodes</strong> qui définit les standards, l'<strong>ordonnancement</strong>, le service <strong>santé-sécurité-environnement</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le pilote est un point de passage de l'information. Il reçoit les objectifs et les consignes, les transmet à l'équipe sous une forme compréhensible, et fait remonter les problèmes, les résultats et les propositions vers les services concernés.</div>"
      },
      {
       "titre": "La matrice de compétences et de polyvalence",
       "contenu": "\n<p>La <strong>matrice de compétences</strong> (ou tableau de polyvalence) croise les membres de l'équipe et les postes ou tâches de la ligne. Dans chaque case, un niveau indique ce que la personne sait faire. Une échelle courante à quatre niveaux :</p>\n<table>\n<thead><tr><th>Niveau</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>1 — En formation</td><td>Travaille au poste uniquement accompagné d'un tuteur</td></tr>\n<tr><td>2 — Autonome</td><td>Tient le poste seul en marche normale, appelle en cas d'aléa</td></tr>\n<tr><td>3 — Confirmé</td><td>Traite les aléas courants, réalise réglages et changements de format</td></tr>\n<tr><td>4 — Expert, formateur</td><td>Peut former les autres et proposer des améliorations du standard</td></tr>\n</tbody>\n</table>\n<p>Exemple simplifié :</p>\n<table>\n<thead><tr><th>Personne</th><th>Remplisseuse</th><th>Étiqueteuse</th><th>Fardeleuse</th><th>Palettiseur</th><th>Conduite chariot (autorisation)</th></tr></thead>\n<tbody>\n<tr><td>Inès</td><td>4</td><td>3</td><td>2</td><td>2</td><td>Oui</td></tr>\n<tr><td>Marc</td><td>2</td><td>4</td><td>3</td><td>0</td><td>Non</td></tr>\n<tr><td>Yanis</td><td>1</td><td>2</td><td>4</td><td>3</td><td>Oui</td></tr>\n<tr><td>Léa</td><td>0</td><td>1</td><td>2</td><td>4</td><td>Oui</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter la matrice pour repérer les risques.<br>1. Pour chaque poste, compter les personnes au niveau 2 ou plus. Remplisseuse : Inès et Marc, soit 2 ; étiqueteuse : Inès, Marc, Yanis, soit 3 ; fardeleuse : 4 ; palettiseur : 3.<br>2. Repérer les postes critiques : la remplisseuse n'a qu'une personne au niveau 3 ou plus (Inès). Si Inès est absente, aucun changement de format remplisseuse n'est possible.<br>3. En déduire un plan de formation : faire passer Marc au niveau 3 sur la remplisseuse, avec Inès comme tutrice, et Yanis au niveau 2.<br>4. Fixer un objectif de polyvalence, par exemple au moins trois personnes autonomes et deux confirmées par poste.</div>"
      },
      {
       "titre": "Affecter le personnel aux postes",
       "contenu": "\n<p>À chaque prise de poste, le pilote ou le chef d'équipe affecte les personnes présentes. Les critères à respecter, dans l'ordre :</p>\n<ol>\n<li><strong>sécurité et réglementation</strong> : seule une personne titulaire de l'autorisation de conduite peut conduire un chariot élévateur ; seules les personnes habilitées interviennent sur les équipements électriques ; les restrictions médicales (port de charges, travail en hauteur) s'imposent ;</li>\n<li><strong>compétence</strong> : chaque poste doit être tenu par une personne au moins autonome ; un débutant est toujours accompagné ;</li>\n<li><strong>besoins de la production</strong> : les postes critiques du jour (changements de format, nouveau produit) reçoivent les personnes confirmées ;</li>\n<li><strong>développement et équité</strong> : rotation des postes pour limiter la pénibilité et les gestes répétitifs, et pour entretenir la polyvalence.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> confier un poste à une personne non formée « parce qu'il manque quelqu'un » engage la responsabilité de l'encadrement en cas d'accident ou de non-conformité. En sous-effectif, il vaut mieux ralentir ou réorganiser la ligne et prévenir la hiérarchie que d'affecter quelqu'un hors de ses compétences.</div>"
      },
      {
       "titre": "Accueillir et former au poste",
       "contenu": "\n<p>L'accueil d'un nouvel arrivant (intérimaire, apprenti, salarié muté) obéit à une démarche structurée :</p>\n<ul>\n<li><strong>accueil sécurité</strong> : risques de l'atelier, équipements de protection individuelle, arrêts d'urgence, issues de secours, consignes d'hygiène ; le Code du travail impose une formation à la sécurité adaptée au poste, renforcée pour les salariés temporaires affectés à des postes à risques ;</li>\n<li><strong>présentation</strong> de l'équipe, de la ligne, des produits et des documents de poste ;</li>\n<li><strong>formation au poste</strong> par un tuteur, selon la méthode des quatre étapes : 1. préparer la personne et lui expliquer l'objectif ; 2. montrer en expliquant les points clés et leurs raisons ; 3. faire faire en corrigeant ; 4. laisser faire seul en vérifiant régulièrement ;</li>\n<li><strong>validation</strong> : évaluation pratique au poste, puis mise à jour de la matrice de compétences.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les <strong>instructions de travail visuelles</strong> (photos, pictogrammes, points clés en couleur) affichées au poste facilitent la formation et réduisent les erreurs, surtout pour les personnes qui ne maîtrisent pas bien l'écrit ou la langue. Le pilote veille à ce qu'elles soient à jour après chaque modification du standard.</div>"
      },
      {
       "titre": "La relève de poste",
       "contenu": "\n<p>Dans les usines en 2x8 ou 3x8, la <strong>relève</strong> (ou passation de consignes) est un moment critique : une information perdue peut provoquer une non-conformité ou un accident. Une relève efficace dure quelques minutes, se fait sur la ligne et s'appuie sur un support écrit (cahier de ligne, fiche de relève, écran du MES). Elle couvre :</p>\n<table>\n<thead><tr><th>Thème</th><th>Contenu transmis</th></tr></thead>\n<tbody>\n<tr><td>Sécurité</td><td>Accident, presque-accident, consignation en cours, protection provisoire</td></tr>\n<tr><td>Production</td><td>OF en cours, quantité restante, prochain changement, retards</td></tr>\n<tr><td>Qualité</td><td>Produits bloqués, contrôles renforcés, dérives observées</td></tr>\n<tr><td>Technique</td><td>Pannes en cours, interventions demandées, marche dégradée active, réglages modifiés</td></tr>\n<tr><td>Approvisionnements</td><td>Composants à commander, ruptures prévues</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> tout ce qui sort de l'état normal de la ligne doit être écrit et dit lors de la relève : marche dégradée, forçage, réglage provisoire, produit en attente de décision. L'équipe montante doit pouvoir reconstituer la situation sans l'équipe descendante.</div>"
      },
      {
       "titre": "La réunion courte d'équipe et la communication",
       "contenu": "\n<p>Beaucoup d'entreprises organisent une <strong>réunion courte</strong> quotidienne (5 à 15 minutes, debout, devant un tableau visuel) au début du poste. On y passe en revue la sécurité, la qualité, les résultats de la veille (production, TRS, rebuts), les problèmes et les actions en cours, les objectifs du jour. Le pilote peut l'animer : il veille à ce que chacun puisse s'exprimer, à ce que chaque problème ait un responsable et une date, et à ne pas transformer la réunion en recherche de coupables.</p>\n<p>Quelques principes de communication utiles :</p>\n<ul>\n<li>donner une consigne <strong>précise</strong> (quoi, où, quand, comment, pourquoi) et vérifier sa compréhension en la faisant reformuler ;</li>\n<li>signaler un problème par des <strong>faits</strong> observables plutôt que par des jugements (« trois bourrages en dix minutes à l'entrée de l'étiqueteuse » plutôt que « l'étiqueteuse ne marche pas ») ;</li>\n<li>reconnaître le travail bien fait et les remontées d'information, qui entretiennent la vigilance de l'équipe ;</li>\n<li>traiter un désaccord ou un comportement dangereux immédiatement, calmement et en privé si possible, puis en informer la hiérarchie si nécessaire.</li>\n</ul>"
      },
      {
       "titre": "Gérer les situations difficiles et la pénibilité",
       "contenu": "\n<p>L'encadrement de proximité rencontre des situations délicates : un opérateur qui refuse d'appliquer une consigne, un conflit entre deux membres de l'équipe, une personne visiblement fatiguée ou en difficulté. Quelques repères :</p>\n<ul>\n<li>écouter d'abord : un refus cache souvent une difficulté réelle (consigne inapplicable, matériel défectueux, douleur) ;</li>\n<li>rappeler la règle et sa raison, notamment pour la sécurité, sans entrer dans un affrontement public ;</li>\n<li>alerter la hiérarchie lorsque la situation dépasse le rôle du pilote : sanction, conflit persistant, problème de santé ;</li>\n<li>connaître le <strong>droit de retrait</strong> : un salarié peut se retirer d'une situation de travail dont il a un motif raisonnable de penser qu'elle présente un danger grave et imminent, après en avoir alerté l'employeur.</li>\n</ul>\n<p>La <strong>rotation</strong> sur les postes, l'aménagement des postes (hauteur de travail, aides à la manutention) et la participation de l'équipe à l'amélioration de l'ergonomie contribuent à prévenir les troubles musculo-squelettiques, première cause de maladie professionnelle dans l'industrie. Le pilote, présent en permanence sur la ligne, est bien placé pour repérer les gestes pénibles et les remonter.</p>"
      }
     ],
     "points_cles": [
      "Le pilote exerce surtout une autorité fonctionnelle : il coordonne sans forcément commander hiérarchiquement.",
      "La matrice de compétences croise personnes et postes avec un niveau de maîtrise.",
      "Elle révèle les postes critiques et fonde le plan de formation.",
      "L'affectation respecte d'abord la sécurité et les autorisations, puis les compétences et les besoins.",
      "La formation au poste suit quatre étapes : préparer, montrer, faire faire, laisser faire en vérifiant.",
      "Une relève de poste écrite transmet sécurité, production, qualité, technique et approvisionnements.",
      "La réunion courte quotidienne fait le point sur les résultats, les problèmes et les actions.",
      "On communique par des faits observables et des consignes précises, reformulées."
     ],
     "lexique": [
      {
       "terme": "Lien hiérarchique",
       "def": "Relation d'autorité permettant de fixer les objectifs, d'évaluer et de sanctionner."
      },
      {
       "terme": "Lien fonctionnel",
       "def": "Relation de coordination technique sans autorité disciplinaire."
      },
      {
       "terme": "Matrice de compétences",
       "def": "Tableau croisant les personnes et les postes avec leur niveau de maîtrise."
      },
      {
       "terme": "Polyvalence",
       "def": "Capacité d'une personne à tenir plusieurs postes avec un niveau suffisant."
      },
      {
       "terme": "Tuteur",
       "def": "Salarié confirmé chargé de former et d'accompagner un nouvel arrivant."
      },
      {
       "terme": "Relève de poste",
       "def": "Passation des informations entre l'équipe descendante et l'équipe montante."
      },
      {
       "terme": "Cahier de ligne",
       "def": "Registre où sont notés événements, réglages, arrêts et consignes de la ligne."
      },
      {
       "terme": "Réunion courte",
       "def": "Point quotidien bref de l'équipe devant un tableau d'indicateurs."
      },
      {
       "terme": "Instruction de travail visuelle",
       "def": "Document de poste illustré décrivant les étapes et les points clés d'une tâche."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Qualité, maintenance, risques et exigences des secteurs",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bplp-msp-capabilite",
     "titre": "Maîtrise statistique des procédés et capabilité",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Distinguer causes communes et causes spéciales de variation.",
      "Calculer moyenne, étendue et écart-type d'un échantillon.",
      "Construire et lire une carte de contrôle moyenne-étendue.",
      "Appliquer les règles de pilotage d'une carte de contrôle.",
      "Calculer et interpréter les indices de capabilité Cp et Cpk."
     ],
     "sections": [
      {
       "titre": "Toute production varie",
       "contenu": "\n<p>Deux bouteilles remplies par la même machine n'ont jamais exactement le même volume ; deux pièces injectées n'ont jamais exactement la même cote. Cette <strong>variabilité</strong> est inévitable. La <strong>maîtrise statistique des procédés</strong> (MSP, en anglais SPC) a pour but de distinguer :</p>\n<ul>\n<li>les <strong>causes communes</strong> (ou aléatoires) : nombreuses petites influences permanentes (vibrations, légères variations de matière, de température). Elles produisent une dispersion stable et prévisible. On ne règle pas la machine pour elles ;</li>\n<li>les <strong>causes spéciales</strong> (ou assignables) : événements identifiables (usure d'un outil, changement de lot de matière, buse encrassée, mauvais réglage). Elles provoquent des dérives ou des sauts. Il faut les détecter et les corriger.</li>\n</ul>\n<p>Un procédé soumis aux seules causes communes est dit <strong>sous contrôle</strong> (ou maîtrisé). La MSP permet de réagir aux causes spéciales <strong>avant</strong> de produire des pièces hors tolérance, au lieu de trier après coup.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> régler une machine à chaque petite variation due au hasard augmente la dispersion au lieu de la réduire. La carte de contrôle sert justement à savoir quand il faut agir et quand il ne faut pas toucher.</div>"
      },
      {
       "titre": "Les indicateurs statistiques de base",
       "contenu": "\n<p>On prélève régulièrement un <strong>échantillon</strong> de n produits consécutifs (souvent n = 5) et on mesure la caractéristique surveillée. Pour chaque échantillon, on calcule :</p>\n<ul>\n<li>la <strong>moyenne</strong> x̄ = somme des valeurs / n, qui indique la position (le centrage) ;</li>\n<li>l'<strong>étendue</strong> R = valeur maximale − valeur minimale, qui indique la dispersion à court terme ;</li>\n<li>éventuellement l'<strong>écart-type</strong> s, mesure plus complète de la dispersion.</li>\n</ul>\n<p>Lorsque la variabilité est due aux seules causes communes, les mesures suivent généralement une <strong>loi normale</strong>, en forme de cloche, symétrique autour de la moyenne. Environ 99,73 % des valeurs se situent entre la moyenne moins trois écarts-types et la moyenne plus trois écarts-types : on dit que la <strong>dispersion du procédé</strong> vaut 6σ.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> volume de 5 bouteilles en mL : 1 002, 998, 1 004, 1 001, 999.<br>1. Moyenne : (1 002 + 998 + 1 004 + 1 001 + 999) / 5 = 5 004 / 5 = 1 000,8 mL.<br>2. Étendue : 1 004 − 998 = 6 mL.<br>3. On reporte x̄ = 1 000,8 sur la carte des moyennes et R = 6 sur la carte des étendues.</div>"
      },
      {
       "titre": "Construire une carte de contrôle moyenne-étendue",
       "contenu": "\n<p>La carte de contrôle comporte deux graphiques superposés : celui des moyennes et celui des étendues, avec en abscisse le numéro ou l'heure de l'échantillon. Chacun possède une ligne centrale et des <strong>limites de contrôle</strong>, calculées à partir d'une période de référence où le procédé était stable (souvent 20 à 25 échantillons).</p>\n<table>\n<thead><tr><th>Carte</th><th>Ligne centrale</th><th>Limite supérieure</th><th>Limite inférieure</th></tr></thead>\n<tbody>\n<tr><td>Moyennes</td><td>x̿ (moyenne des moyennes)</td><td>x̿ + A<sub>2</sub> × R̄</td><td>x̿ − A<sub>2</sub> × R̄</td></tr>\n<tr><td>Étendues</td><td>R̄ (moyenne des étendues)</td><td>D<sub>4</sub> × R̄</td><td>D<sub>3</sub> × R̄</td></tr>\n</tbody>\n</table>\n<p>Pour des échantillons de 5, les coefficients tabulés valent A<sub>2</sub> = 0,577, D<sub>3</sub> = 0 et D<sub>4</sub> = 2,114.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> sur 25 échantillons de 5 bouteilles, on obtient x̿ = 1 000,5 mL et R̄ = 5,2 mL.<br>1. Limite supérieure de la carte des moyennes : 1 000,5 + 0,577 × 5,2 = 1 000,5 + 3,0 = 1 003,5 mL.<br>2. Limite inférieure : 1 000,5 − 3,0 = 997,5 mL.<br>3. Limite supérieure de la carte des étendues : 2,114 × 5,2 ≈ 11,0 mL ; limite inférieure : 0.<br>4. Une moyenne d'échantillon de 1 004,1 mL dépasse la limite supérieure : une cause spéciale est probable, il faut chercher et agir.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les <strong>limites de contrôle</strong> ne sont pas les <strong>tolérances</strong>. Les tolérances sont fixées par le client ou le cahier des charges (par exemple 1 000 mL ± 10 mL) et s'appliquent à chaque produit. Les limites de contrôle sont calculées à partir du procédé et s'appliquent aux moyennes d'échantillons. On ne trace jamais les tolérances sur la carte des moyennes, au risque de laisser passer des dérives.</div>"
      },
      {
       "titre": "Piloter avec la carte : les règles de décision",
       "contenu": "\n<p>À chaque nouveau point, l'opérateur applique des règles simples. Les plus utilisées :</p>\n<table>\n<thead><tr><th>Situation observée</th><th>Interprétation</th><th>Action</th></tr></thead>\n<tbody>\n<tr><td>Point hors limites de contrôle</td><td>Cause spéciale probable</td><td>Régler ou corriger, contrôler la production depuis le dernier point bon, noter l'action</td></tr>\n<tr><td>7 points consécutifs du même côté de la ligne centrale</td><td>Décentrage du procédé</td><td>Rechercher la cause, recentrer le réglage</td></tr>\n<tr><td>7 points consécutifs en augmentation ou en diminution</td><td>Dérive progressive (usure, encrassement, échauffement)</td><td>Anticiper la correction, prévoir l'intervention</td></tr>\n<tr><td>Point proche d'une limite (dernier sixième de la zone)</td><td>Alerte</td><td>Prélever un nouvel échantillon immédiatement</td></tr>\n<tr><td>Point sur la carte des étendues hors limite</td><td>Dispersion anormale</td><td>Ne pas régler le centrage ; chercher une cause d'instabilité</td></tr>\n</tbody>\n</table>\n<p>Les règles exactes (7 points ou parfois 8 ou 9) dépendent du référentiel adopté par l'entreprise ; elles figurent dans le plan de surveillance.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque action corrective est notée directement sur la carte ou dans le journal associé (heure, action, auteur). Une carte de contrôle sans annotation ne permet plus de comprendre l'histoire du procédé. Sur les lignes modernes, la carte est tenue par le logiciel, qui alerte automatiquement l'opérateur.</div>"
      },
      {
       "titre": "La capabilité : le procédé peut-il respecter les tolérances ?",
       "contenu": "\n<p>Un procédé sous contrôle n'est pas forcément <strong>capable</strong> : il peut être stable mais trop dispersé pour l'intervalle de tolérance. Les indices de capabilité comparent la tolérance à la dispersion :</p>\n<ul>\n<li><strong>Cp = (TS − TI) / 6σ</strong> compare l'intervalle de tolérance (TS : tolérance supérieure, TI : tolérance inférieure) à la dispersion, sans tenir compte du centrage. C'est la capabilité « potentielle » ;</li>\n<li><strong>Cpk = min [(TS − x̄) / 3σ ; (x̄ − TI) / 3σ]</strong> tient compte du centrage : c'est la capabilité réelle.</li>\n</ul>\n<p>Si le procédé est parfaitement centré, Cpk = Cp ; sinon Cpk &lt; Cp. Un objectif couramment exigé est Cpk ≥ 1,33 ; certaines industries, comme l'automobile, demandent davantage pour les caractéristiques critiques. L'écart-type peut être estimé à partir de la carte : σ ≈ R̄ / d<sub>2</sub>, avec d<sub>2</sub> = 2,326 pour n = 5.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> tolérance du volume : 1 000 mL ± 10 mL, soit TI = 990 et TS = 1 010. Procédé : x̄ = 1 003 mL, σ = 2 mL.<br>1. Cp = (1 010 − 990) / (6 × 2) = 20 / 12 ≈ 1,67.<br>2. Côté haut : (1 010 − 1 003) / (3 × 2) = 7 / 6 ≈ 1,17. Côté bas : (1 003 − 990) / 6 = 13 / 6 ≈ 2,17.<br>3. Cpk = 1,17.<br>Conclusion : le procédé est suffisamment précis (Cp = 1,67) mais mal centré. Recentrer le dosage sur 1 000 mL ramènerait le Cpk vers 1,67, sans investissement.</div>"
      },
      {
       "titre": "Contrôle des produits et métrologie",
       "contenu": "\n<p>La MSP suppose des mesures fiables. Les instruments utilisés (balances, pieds à coulisse, thermomètres, contrôleurs de niveau) sont <strong>étalonnés</strong> périodiquement et identifiés par une étiquette indiquant leur date de validité. Un instrument hors validité ou tombé ne doit pas être utilisé.</p>\n<p>On distingue :</p>\n<ul>\n<li>le <strong>contrôle par mesure</strong> (variable continue : masse, volume, cote, température), qui alimente les cartes moyenne-étendue ;</li>\n<li>le <strong>contrôle par attributs</strong> (conforme ou non conforme : étiquette présente, bouchon bien vissé), suivi par des cartes de proportion de non-conformes ;</li>\n<li>le <strong>contrôle à 100 %</strong> automatique (contrôleurs de niveau, de présence, de vision, détecteurs de métaux), qui éjecte les produits non conformes mais n'empêche pas de les fabriquer.</li>\n</ul>\n<p>Dans le conditionnement des produits en préemballages, le contenu doit respecter la réglementation de la <strong>métrologie légale</strong> sur les quantités nominales : le remplissage moyen ne doit pas être inférieur à la quantité annoncée, et le nombre de préemballages présentant une erreur en moins supérieure à l'erreur tolérée est strictement limité. Le centrage du dosage est donc à la fois une question de conformité réglementaire et de coût (tout surremplissage est du produit donné).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la MSP surveille le procédé, la capabilité juge son aptitude, la métrologie garantit la justesse des mesures. Les trois sont indispensables pour produire conforme du premier coup.</div>"
      }
     ],
     "points_cles": [
      "Les causes communes produisent une dispersion stable ; les causes spéciales doivent être détectées et corrigées.",
      "On ne règle pas un procédé à chaque petite variation aléatoire.",
      "Une carte moyenne-étendue suit le centrage et la dispersion d'échantillons réguliers.",
      "Pour n = 5 : A2 = 0,577, D3 = 0, D4 = 2,114, d2 = 2,326.",
      "Les limites de contrôle sont calculées sur le procédé et ne sont pas les tolérances.",
      "Point hors limites, série de points du même côté ou tendance déclenchent une action notée sur la carte.",
      "Cp = (TS − TI) / 6σ ; Cpk tient compte du centrage ; on vise souvent Cpk ≥ 1,33.",
      "Des instruments étalonnés et valides sont la condition de toute mesure exploitable."
     ],
     "lexique": [
      {
       "terme": "MSP",
       "def": "Maîtrise statistique des procédés : surveillance d'un procédé par des outils statistiques."
      },
      {
       "terme": "Cause commune",
       "def": "Source de variation permanente et aléatoire, inhérente au procédé."
      },
      {
       "terme": "Cause spéciale",
       "def": "Source de variation identifiable et ponctuelle qui provoque une dérive ou un saut."
      },
      {
       "terme": "Échantillon",
       "def": "Groupe de produits prélevés pour être mesurés."
      },
      {
       "terme": "Étendue",
       "def": "Différence entre la plus grande et la plus petite valeur d'un échantillon."
      },
      {
       "terme": "Écart-type",
       "def": "Mesure de la dispersion des valeurs autour de leur moyenne."
      },
      {
       "terme": "Carte de contrôle",
       "def": "Graphique chronologique d'une statistique d'échantillon avec ligne centrale et limites de contrôle."
      },
      {
       "terme": "Limites de contrôle",
       "def": "Bornes calculées à partir du procédé au-delà desquelles une cause spéciale est probable."
      },
      {
       "terme": "Tolérance",
       "def": "Intervalle de valeurs acceptables fixé par le cahier des charges pour chaque produit."
      },
      {
       "terme": "Capabilité",
       "def": "Aptitude d'un procédé à produire dans les tolérances, mesurée par Cp et Cpk."
      },
      {
       "terme": "Étalonnage",
       "def": "Comparaison d'un instrument à un étalon de référence pour connaître son erreur."
      }
     ]
    },
    {
     "id": "bplp-resolution-problemes",
     "titre": "Résolution de problèmes et amélioration des opérations",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Poser un problème de production de façon factuelle avec le QQOQCP.",
      "Rechercher les causes avec le diagramme d'Ishikawa et la méthode des cinq pourquoi.",
      "Distinguer action curative, action corrective et action préventive.",
      "Conduire une démarche structurée de résolution (PDCA, 8D) et mesurer son efficacité.",
      "Utiliser l'AMDEC pour hiérarchiser des risques de défaillance d'un procédé."
     ],
     "sections": [
      {
       "titre": "Bien poser le problème",
       "contenu": "\n<p>Le pilote de ligne est régulièrement amené à <strong>proposer des améliorations et des pistes de résolution de problèmes</strong> : c'est l'une des compétences évaluées à l'épreuve d'optimisation des opérations. La première erreur à éviter est de chercher la solution avant d'avoir décrit le problème.</p>\n<p>Un <strong>problème</strong> est un écart entre une situation constatée et une situation attendue (un standard, un objectif, une spécification). On le décrit avec la méthode <strong>QQOQCP</strong> :</p>\n<table>\n<thead><tr><th>Question</th><th>Exemple : chutes de bouteilles</th></tr></thead>\n<tbody>\n<tr><td>Quoi ? (quel défaut, sur quel produit)</td><td>Bouteilles PET 50 cl renversées</td></tr>\n<tr><td>Qui ? (qui le constate, qui est concerné)</td><td>Opérateurs de l'étiqueteuse, toutes équipes</td></tr>\n<tr><td>Où ? (à quel endroit précis)</td><td>Transfert entre le convoyeur 4 et la vis de cadencement de l'étiqueteuse</td></tr>\n<tr><td>Quand ? (depuis quand, à quel moment)</td><td>Depuis le lancement du nouveau format 50 cl, surtout au redémarrage après arrêt</td></tr>\n<tr><td>Comment ? (de quelle façon, combien)</td><td>En moyenne 12 chutes par heure, provoquant 3 bourrages par heure</td></tr>\n<tr><td>Pourquoi est-ce un problème ? (impact)</td><td>Perte d'environ 20 min de production par poste et risque de coupure en dégageant les bouteilles</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un problème bien posé est chiffré, localisé, daté et ne contient aucune cause supposée. « Les opérateurs règlent mal les guides » n'est pas un énoncé de problème, c'est une hypothèse, et souvent une accusation.</div>"
      },
      {
       "titre": "Rechercher les causes : Ishikawa et cinq pourquoi",
       "contenu": "\n<p>Le <strong>diagramme d'Ishikawa</strong> (ou diagramme causes-effet, en arête de poisson) classe les causes possibles en familles appelées les <strong>5M</strong> : Matière, Matériel (ou Machine), Méthode, Main-d'œuvre, Milieu. On y ajoute parfois Mesure et Management. Il se construit en groupe, par remue-méninges, en notant toutes les causes possibles sans les juger.</p>\n<table>\n<thead><tr><th>Famille</th><th>Causes possibles des chutes de bouteilles</th></tr></thead>\n<tbody>\n<tr><td>Matière</td><td>Bouteille 50 cl plus légère et plus haute, fond moins stable</td></tr>\n<tr><td>Machine</td><td>Écart de hauteur entre convoyeurs au transfert, vitesse de vis trop élevée, guides usés</td></tr>\n<tr><td>Méthode</td><td>Pas de valeur de réglage des guides pour le 50 cl sur la fiche de format, rampe d'accélération inchangée</td></tr>\n<tr><td>Main-d'œuvre</td><td>Équipes non formées au nouveau format</td></tr>\n<tr><td>Milieu</td><td>Lubrifiant de convoyeur en excès, sol humide</td></tr>\n</tbody>\n</table>\n<p>On vérifie ensuite les causes les plus probables par des <strong>faits</strong> (mesure, essai, observation), puis on remonte à la cause racine par la méthode des <strong>cinq pourquoi</strong> : on demande « pourquoi ? » successivement jusqu'à atteindre une cause sur laquelle on peut agir durablement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1. Pourquoi les bouteilles tombent-elles ? Parce qu'elles basculent au transfert. 2. Pourquoi basculent-elles ? Parce que le guide laisse 8 mm de jeu de chaque côté. 3. Pourquoi ce jeu ? Parce que les guides sont réglés comme pour le format 1 L. 4. Pourquoi ? Parce que la fiche de réglage ne contient pas de valeur pour le 50 cl. 5. Pourquoi ? Parce que la mise à jour de la fiche n'a pas été prévue dans le lancement du nouveau format. Cause racine : processus de lancement des nouveaux formats incomplet. Action : compléter la fiche, et ajouter la mise à jour des fiches de réglage dans la liste de lancement des nouveaux produits.</div>"
      },
      {
       "titre": "Curatif, correctif, préventif",
       "contenu": "\n<table>\n<thead><tr><th>Type d'action</th><th>Définition</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Action curative (ou immédiate)</td><td>Traite le défaut constaté sans agir sur sa cause</td><td>Relever les bouteilles, trier les produits déformés</td></tr>\n<tr><td>Action corrective</td><td>Supprime la cause d'un problème constaté pour éviter qu'il se reproduise</td><td>Régler les guides au bon jeu et compléter la fiche de réglage</td></tr>\n<tr><td>Action préventive</td><td>Supprime la cause d'un problème potentiel, avant qu'il ne se produise</td><td>Intégrer la validation des réglages dans le processus de lancement de tout nouveau format</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> enchaîner les actions curatives (« on relève, on redémarre ») donne l'impression de bien travailler, mais le problème revient chaque jour et finit par être considéré comme normal. Un problème qui se répète doit déclencher une démarche corrective formalisée.</div>"
      },
      {
       "titre": "Les démarches structurées : PDCA et 8D",
       "contenu": "\n<p>La <strong>roue de Deming</strong> ou <strong>PDCA</strong> décrit le cycle de toute amélioration :</p>\n<ul>\n<li><strong>Plan</strong> (planifier) : poser le problème, analyser les causes, choisir les actions et fixer un objectif mesurable ;</li>\n<li><strong>Do</strong> (réaliser) : mettre en œuvre les actions, si possible d'abord à petite échelle ;</li>\n<li><strong>Check</strong> (vérifier) : mesurer le résultat et le comparer à l'objectif ;</li>\n<li><strong>Act</strong> (agir, ajuster) : si c'est efficace, standardiser et généraliser ; sinon, relancer un cycle.</li>\n</ul>\n<p>La démarche <strong>8D</strong> (huit disciplines), très utilisée pour répondre à une réclamation client, détaille le même raisonnement : D1 constituer l'équipe ; D2 décrire le problème ; D3 mettre en place des actions de confinement ; D4 identifier les causes racines ; D5 choisir les actions correctives ; D6 les mettre en œuvre et vérifier leur efficacité ; D7 prévenir la réapparition (standardiser, étendre à d'autres lignes) ; D8 clôturer et féliciter l'équipe.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les actions sont suivies dans un <strong>plan d'actions</strong> qui précise pour chacune : quoi, qui, pour quand, état d'avancement, et indicateur d'efficacité. Une action sans responsable ni date n'est pas une action, c'est une intention.</div>"
      },
      {
       "titre": "L'AMDEC procédé : anticiper les défaillances",
       "contenu": "\n<p>L'<strong>AMDEC</strong> (analyse des modes de défaillance, de leurs effets et de leur criticité) est une méthode préventive. Pour chaque étape du procédé, on recense les <strong>modes de défaillance</strong> possibles, leurs <strong>effets</strong>, leurs <strong>causes</strong> et les moyens de détection existants. On cote ensuite trois critères, souvent de 1 à 10 :</p>\n<ul>\n<li><strong>G</strong>, gravité de l'effet ;</li>\n<li><strong>O</strong>, probabilité d'occurrence de la cause ;</li>\n<li><strong>D</strong>, probabilité de non-détection (plus la note est haute, moins on détecte).</li>\n</ul>\n<p>La <strong>criticité</strong> (ou indice de priorité de risque) vaut C = G × O × D. Les modes dont la criticité dépasse un seuil fixé par l'entreprise font l'objet d'actions.</p>\n<table>\n<thead><tr><th>Étape</th><th>Mode de défaillance</th><th>Effet</th><th>G</th><th>O</th><th>D</th><th>C</th></tr></thead>\n<tbody>\n<tr><td>Marquage lot et date</td><td>Date absente ou illisible</td><td>Produit non traçable, rappel impossible</td><td>8</td><td>4</td><td>6</td><td>192</td></tr>\n<tr><td>Bouchage</td><td>Couple de serrage insuffisant</td><td>Fuite chez le client</td><td>7</td><td>3</td><td>4</td><td>84</td></tr>\n<tr><td>Étiquetage</td><td>Étiquette décalée</td><td>Défaut d'aspect</td><td>3</td><td>5</td><td>2</td><td>30</td></tr>\n</tbody>\n</table>\n<p>Ici, la priorité est le marquage : on peut réduire D en installant un contrôle par caméra qui lit la date sur chaque produit.</p>"
      },
      {
       "titre": "Mesurer l'efficacité et standardiser",
       "contenu": "\n<p>Une amélioration n'est terminée que lorsque son efficacité est <strong>prouvée</strong> par un indicateur, sur une durée suffisante (plusieurs jours ou semaines selon la fréquence du problème). Dans l'exemple des chutes de bouteilles, on comparera le nombre de chutes par heure et le temps d'arrêt par poste avant et après les actions.</p>\n<p>La <strong>standardisation</strong> verrouille le résultat : mise à jour de la fiche de réglage, du mode opératoire, de l'instruction de travail visuelle, de la formation et de la matrice de compétences. Sans standard, les bonnes pratiques disparaissent avec les personnes qui les ont trouvées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la boucle complète est : poser le problème (QQOQCP), chercher les causes (Ishikawa, cinq pourquoi) et les vérifier, agir (curatif puis correctif), mesurer l'efficacité, standardiser. C'est exactement la structure attendue dans un dossier d'optimisation présenté à l'examen.</div>"
      },
      {
       "titre": "Outils de recueil des données",
       "contenu": "\n<p>Une résolution de problème solide repose sur des <strong>données</strong> plutôt que sur des impressions. Plusieurs outils simples aident à les recueillir :</p>\n<ul>\n<li>la <strong>feuille de relevé</strong> (ou feuille de pointage) : un tableau où l'on coche chaque occurrence d'un défaut par type et par période, pendant quelques jours ;</li>\n<li>la <strong>carte de localisation des défauts</strong> : un schéma du produit ou de la machine sur lequel on marque l'emplacement de chaque défaut, ce qui révèle souvent une zone précise ;</li>\n<li>l'<strong>histogramme</strong>, qui montre la répartition d'une mesure ;</li>\n<li>le <strong>diagramme de corrélation</strong>, qui croise deux grandeurs (par exemple la température ambiante et le nombre de défauts de collage).</li>\n</ul>\n<p>Dans l'exemple des chutes de bouteilles, une feuille de pointage tenue pendant trois postes a montré que 80 % des chutes se produisaient dans les trois minutes suivant un redémarrage : cette donnée a orienté immédiatement l'analyse vers les rampes d'accélération et le réglage des guides, plutôt que vers la qualité des bouteilles.</p>"
      }
     ],
     "points_cles": [
      "Un problème est un écart chiffré entre constaté et attendu, décrit sans cause supposée.",
      "Le QQOQCP structure la description du problème.",
      "Le diagramme d'Ishikawa classe les causes possibles selon les 5M.",
      "Les causes probables se vérifient par des faits avant d'agir.",
      "Les cinq pourquoi mènent à une cause racine sur laquelle on peut agir durablement.",
      "Curatif traite l'effet, correctif supprime la cause constatée, préventif supprime une cause potentielle.",
      "PDCA et 8D structurent une démarche de résolution complète.",
      "AMDEC : criticité = gravité × occurrence × non-détection, pour hiérarchiser les risques.",
      "Une amélioration se termine par la preuve de son efficacité et la mise à jour des standards."
     ],
     "lexique": [
      {
       "terme": "QQOQCP",
       "def": "Grille de questions (quoi, qui, où, quand, comment, pourquoi) pour décrire un problème."
      },
      {
       "terme": "Diagramme d'Ishikawa",
       "def": "Diagramme causes-effet classant les causes possibles par familles."
      },
      {
       "terme": "5M",
       "def": "Familles de causes : matière, matériel, méthode, main-d'œuvre, milieu."
      },
      {
       "terme": "Cause racine",
       "def": "Cause première dont la suppression empêche la réapparition du problème."
      },
      {
       "terme": "Action curative",
       "def": "Action qui traite le défaut constaté sans en supprimer la cause."
      },
      {
       "terme": "Action corrective",
       "def": "Action qui supprime la cause d'un problème constaté."
      },
      {
       "terme": "Action préventive",
       "def": "Action qui supprime la cause d'un problème potentiel."
      },
      {
       "terme": "PDCA",
       "def": "Cycle d'amélioration : planifier, réaliser, vérifier, ajuster."
      },
      {
       "terme": "8D",
       "def": "Démarche de résolution de problème en huit étapes, souvent utilisée après réclamation client."
      },
      {
       "terme": "AMDEC",
       "def": "Analyse des modes de défaillance, de leurs effets et de leur criticité."
      },
      {
       "terme": "Confinement",
       "def": "Mesure immédiate qui empêche les produits défectueux d'atteindre le client."
      }
     ]
    },
    {
     "id": "bplp-maintenance-tpm",
     "titre": "Fiabilité, indicateurs de maintenance et TPM",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Calculer et interpréter les indicateurs MTBF, MTTR et disponibilité.",
      "Exploiter un historique de pannes pour orienter la maintenance.",
      "Expliquer les piliers de la TPM et le rôle de la maintenance autonome.",
      "Mettre en œuvre une démarche de diagnostic en conduite avant d'appeler la maintenance.",
      "Rédiger une demande d'intervention complète et exploitable."
     ],
     "sections": [
      {
       "titre": "Du niveau d'intervention à la stratégie de maintenance",
       "contenu": "\n<p>Le cours de seconde a présenté les formes de maintenance (corrective, préventive systématique, conditionnelle) et les niveaux d'intervention, en particulier les opérations de premier et de deuxième niveau confiées au personnel de conduite. En première et terminale, le pilote doit comprendre comment ces interventions s'inscrivent dans une <strong>stratégie</strong> et comment on mesure leur efficacité.</p>\n<p>La stratégie de maintenance d'un équipement dépend de sa <strong>criticité</strong> : un équipement goulot, sans redondance, dont la panne arrête toute la ligne, reçoit une maintenance préventive renforcée et un stock de pièces de rechange ; un convoyeur doublé peut être maintenu en correctif.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la maintenance ne cherche pas à supprimer toutes les pannes à n'importe quel prix, mais à obtenir la disponibilité nécessaire à la production au coût global le plus faible, en tenant compte du coût des arrêts.</div>"
      },
      {
       "titre": "MTBF, MTTR et disponibilité",
       "contenu": "\n<p>Trois indicateurs résument le comportement d'un équipement vis-à-vis des pannes :</p>\n<ul>\n<li>le <strong>MTBF</strong> (moyenne des temps de bon fonctionnement) = temps de bon fonctionnement total / nombre de pannes. Il mesure la <strong>fiabilité</strong> : plus il est grand, moins l'équipement tombe en panne ;</li>\n<li>le <strong>MTTR</strong> (moyenne des temps techniques de réparation) = temps total d'arrêt pour pannes / nombre de pannes. Il mesure la <strong>maintenabilité</strong> : plus il est petit, plus on répare vite ;</li>\n<li>la <strong>disponibilité intrinsèque</strong> D = MTBF / (MTBF + MTTR), part du temps pendant laquelle l'équipement est en état de fonctionner.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> sur un mois, l'étiqueteuse a été requise 400 h. Elle a connu 8 pannes, totalisant 16 h d'arrêt.<br>1. Temps de bon fonctionnement : 400 − 16 = 384 h.<br>2. MTBF = 384 / 8 = 48 h : une panne tous les deux jours de production en moyenne.<br>3. MTTR = 16 / 8 = 2 h par panne.<br>4. Disponibilité = 48 / (48 + 2) = 0,96, soit 96 %.<br>5. Interprétation : pour gagner en disponibilité, on peut augmenter le MTBF (supprimer les causes de panne répétitives) ou réduire le MTTR (pièces de rechange au bord de la ligne, diagnostic plus rapide, documentation).</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ces indicateurs n'ont de sens que si les pannes sont enregistrées de façon complète, avec leurs heures de début et de fin. Les micro-arrêts non saisis et les « petites réparations » faites sans déclaration faussent le MTBF, qui paraît alors meilleur qu'il n'est.</div>"
      },
      {
       "titre": "Exploiter l'historique des pannes",
       "contenu": "\n<p>La <strong>gestion de maintenance assistée par ordinateur</strong> (GMAO) enregistre chaque intervention : équipement, sous-ensemble, symptôme, cause, action, pièces, durée, intervenant. Cet historique permet de faire des Pareto par équipement, par sous-ensemble et par cause.</p>\n<table>\n<thead><tr><th>Sous-ensemble de l'étiqueteuse</th><th>Nombre de pannes</th><th>Durée totale (h)</th><th>MTTR (h)</th></tr></thead>\n<tbody>\n<tr><td>Groupe d'encollage</td><td>4</td><td>5</td><td>1,25</td></tr>\n<tr><td>Dérouleur d'étiquettes</td><td>2</td><td>2</td><td>1</td></tr>\n<tr><td>Codeur de synchronisation</td><td>1</td><td>7</td><td>7</td></tr>\n<tr><td>Imprimante de marquage</td><td>1</td><td>2</td><td>2</td></tr>\n</tbody>\n</table>\n<p>Lecture : le groupe d'encollage est le plus fréquent (fiabilité à améliorer, par exemple par un nettoyage préventif plus fréquent), le codeur est rare mais très long à réparer (maintenabilité : prévoir une pièce de rechange et une procédure de remplacement).</p>"
      },
      {
       "titre": "La TPM et la maintenance autonome",
       "contenu": "\n<p>La <strong>TPM</strong> (Total Productive Maintenance, maintenance productive totale) est une démarche d'origine japonaise qui associe tout le personnel, et en premier lieu les équipes de production, à la performance des équipements. Elle vise zéro panne, zéro défaut, zéro accident. On la présente souvent sous forme de piliers, parmi lesquels :</p>\n<ul>\n<li>la <strong>maintenance autonome</strong> : les opérateurs prennent en charge le nettoyage, l'inspection, la lubrification simple et le resserrage de leurs équipements ;</li>\n<li>la <strong>maintenance planifiée</strong> : le service maintenance organise le préventif et se concentre sur les interventions techniques ;</li>\n<li>l'<strong>amélioration au cas par cas</strong> : chantiers ciblés sur les principales pertes (celles du TRS) ;</li>\n<li>la <strong>formation</strong> aux compétences techniques ;</li>\n<li>la <strong>maîtrise de la qualité</strong>, la <strong>sécurité et l'environnement</strong>, la maîtrise des nouveaux équipements.</li>\n</ul>\n<p>La maintenance autonome repose sur un principe : « nettoyer, c'est inspecter ». En nettoyant, l'opérateur voit les fuites, les desserrages, les usures, les échauffements. Les anomalies détectées sont signalées par une <strong>étiquette</strong> accrochée sur l'équipement et enregistrées, puis traitées par l'opérateur lui-même (si c'est de son niveau) ou par la maintenance.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les <strong>standards de nettoyage-inspection-lubrification</strong> (NIL) précisent, pour chaque équipement, les points à traiter, la méthode, l'outil, la fréquence, la durée et le responsable. Ils sont souvent illustrés par des photos et des repères de couleur placés sur la machine (niveaux mini-maxi, zones de lubrification, positions normales des aiguilles de manomètres).</div>"
      },
      {
       "titre": "Diagnostiquer en conduite",
       "contenu": "\n<p>Avant d'appeler la maintenance, le pilote réalise un <strong>premier diagnostic</strong>, dans les limites de ses autorisations. Une démarche efficace :</p>\n<ol>\n<li><strong>Sécuriser</strong> : arrêter la machine dans les conditions prévues, mettre en sécurité, consigner si l'intervention l'exige.</li>\n<li><strong>Constater</strong> : lire le message d'alarme et son horodatage, observer les voyants, noter l'état des mouvements et des produits.</li>\n<li><strong>Interroger</strong> : qu'est-ce qui a changé ? Changement de format, nouveau lot de matière, réglage récent, intervention précédente.</li>\n<li><strong>Localiser</strong> : remonter la chaîne fonctionnelle (énergie présente ? capteur actionné ? voyant d'entrée automate ? ordre de sortie émis ? préactionneur commandé ? actionneur bougeant ?).</li>\n<li><strong>Agir</strong> au niveau autorisé (nettoyer une cellule, remplacer un fusible accessible si la consigne le permet, réaligner un guide) ou <strong>appeler</strong> la maintenance avec une information précise.</li>\n<li><strong>Tracer</strong> l'intervention.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> le vérin d'éjection ne sort plus. 1. L'alarme indique « défaut fin de course sortie éjecteur ». 2. Manomètre du groupe de conditionnement : 6 bar, l'air est présent. 3. En mode manuel autorisé, la commande de sortie allume la LED de l'électrodistributeur : l'ordre arrive. 4. Le vérin ne bouge pas, mais on entend un échappement continu : fuite interne ou distributeur bloqué. 5. Conclusion : défaut côté partie opérative pneumatique, hors du niveau du pilote. Demande d'intervention avec ces constats ; en attendant, application de la marche dégradée prévue (tri manuel en sortie).</div>"
      },
      {
       "titre": "La demande d'intervention",
       "contenu": "\n<p>La <strong>demande d'intervention</strong> (DI) est le lien entre production et maintenance. Elle doit permettre au technicien de préparer son intervention avant même de se déplacer. Une DI complète comporte : l'équipement et le sous-ensemble repérés selon la nomenclature, la date et l'heure de l'apparition, le symptôme observé décrit par des faits, les messages d'alarme, les essais déjà réalisés, l'état actuel (arrêt total, marche dégradée, production normale), l'urgence et l'impact sur la production.</p>\n<table>\n<thead><tr><th>Mauvaise DI</th><th>Bonne DI</th></tr></thead>\n<tbody>\n<tr><td>« Étiqueteuse en panne »</td><td>« Étiqueteuse L2, groupe d'encollage : colle à 135 °C pour une consigne de 160 °C depuis 9 h 40, alarme température basse. Résistance contrôlée visuellement, voyant de chauffe allumé. Production arrêtée, priorité haute. »</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une demande d'intervention précise réduit le MTTR, car une grande partie du temps de réparation est souvent passée à comprendre la panne. Le pilote contribue directement à la maintenabilité par la qualité de ses observations.</div>"
      },
      {
       "titre": "Maintenance conditionnelle et surveillance en conduite",
       "contenu": "\n<p>La <strong>maintenance conditionnelle</strong> déclenche une intervention lorsqu'un indicateur de l'état de l'équipement atteint un seuil : épaisseur d'usure, niveau de vibration, température, pression différentielle d'un filtre, nombre de cycles. Le personnel de conduite y participe directement par ses relevés de ronde.</p>\n<table>\n<thead><tr><th>Grandeur surveillée</th><th>Moyen</th><th>Défaut anticipé</th></tr></thead>\n<tbody>\n<tr><td>Pression différentielle d'un filtre</td><td>Manomètre différentiel</td><td>Colmatage, chute de débit</td></tr>\n<tr><td>Température d'un palier</td><td>Thermomètre infrarouge, pastille thermosensible</td><td>Roulement en fin de vie</td></tr>\n<tr><td>Vibration d'un moteur</td><td>Capteur de vibrations, analyse périodique</td><td>Balourd, désalignement, roulement</td></tr>\n<tr><td>Courant absorbé</td><td>Lecture sur variateur</td><td>Frottement, surcharge</td></tr>\n</tbody>\n</table>\n<p>Un relevé n'a d'intérêt que s'il est comparé à une valeur de référence et suivi dans le temps : une température de palier de 60 °C est normale si elle est stable, préoccupante si elle était de 45 °C la semaine précédente.</p>"
      }
     ],
     "points_cles": [
      "La stratégie de maintenance d'un équipement dépend de sa criticité pour la production.",
      "MTBF = temps de bon fonctionnement / nombre de pannes : il mesure la fiabilité.",
      "MTTR = temps d'arrêt pour pannes / nombre de pannes : il mesure la maintenabilité.",
      "Disponibilité = MTBF / (MTBF + MTTR).",
      "La GMAO permet des Pareto par équipement, sous-ensemble et cause.",
      "La TPM associe les opérateurs à la performance des équipements par la maintenance autonome.",
      "Nettoyer, c'est inspecter : les anomalies détectées sont étiquetées et traitées.",
      "Le diagnostic en conduite suit la chaîne fonctionnelle, dans la limite des autorisations.",
      "Une demande d'intervention précise et factuelle réduit le temps de réparation."
     ],
     "lexique": [
      {
       "terme": "MTBF",
       "def": "Moyenne des temps de bon fonctionnement entre deux pannes."
      },
      {
       "terme": "MTTR",
       "def": "Moyenne des temps techniques de réparation."
      },
      {
       "terme": "Disponibilité",
       "def": "Aptitude d'un bien à être en état d'accomplir sa fonction à un instant donné."
      },
      {
       "terme": "Fiabilité",
       "def": "Aptitude d'un bien à fonctionner sans défaillance pendant une durée donnée."
      },
      {
       "terme": "Maintenabilité",
       "def": "Aptitude d'un bien à être remis rapidement en état de fonctionnement."
      },
      {
       "terme": "GMAO",
       "def": "Logiciel de gestion de la maintenance : historique, préventif, stocks de pièces, demandes."
      },
      {
       "terme": "TPM",
       "def": "Maintenance productive totale, associant tout le personnel à la performance des équipements."
      },
      {
       "terme": "Maintenance autonome",
       "def": "Prise en charge par les opérateurs du nettoyage, de l'inspection et de la lubrification simple."
      },
      {
       "terme": "Demande d'intervention",
       "def": "Document par lequel la production signale une anomalie et demande une intervention."
      },
      {
       "terme": "Criticité d'un équipement",
       "def": "Importance d'un équipement selon les conséquences de sa défaillance."
      }
     ]
    },
    {
     "id": "bplp-gestion-risques",
     "titre": "Gérer les risques en conduite : machines, consignation, ATEX",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Appliquer la démarche d'évaluation des risques à une situation de conduite.",
      "Identifier les principaux dispositifs de sécurité d'une machine et leur rôle.",
      "Décrire les étapes d'une consignation multi-énergies et leurs vérifications.",
      "Reconnaître une zone à risque d'explosion et les règles qui s'y appliquent.",
      "Organiser une intervention en sécurité lors d'un incident ou d'un mode dégradé."
     ],
     "sections": [
      {
       "titre": "De la sensibilisation à la gestion des risques",
       "contenu": "\n<p>En seconde, les principaux risques d'une installation automatisée et les règles de base de protection ont été présentés. Le pilote de ligne doit maintenant <strong>identifier les risques</strong> pour la production, les biens, l'environnement et les personnes, et <strong>appliquer et faire appliquer les mesures de prévention</strong> : ce sont deux compétences centrales de son référentiel, évaluées notamment lors de l'intervention sur incident.</p>\n<p>La démarche repose sur le vocabulaire de l'évaluation des risques :</p>\n<ul>\n<li>un <strong>danger</strong> est une source possible de dommage (pièce en mouvement, énergie électrique, produit chimique, charge suspendue) ;</li>\n<li>une <strong>situation dangereuse</strong> est une situation où une personne est exposée à un danger ;</li>\n<li>un <strong>événement dangereux</strong> déclenche le dommage (démarrage intempestif, rupture de flexible) ;</li>\n<li>le <strong>risque</strong> combine la gravité possible du dommage et sa probabilité.</li>\n</ul>\n<p>L'employeur transcrit l'évaluation des risques dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP), mis à jour régulièrement et lors de toute modification importante. Les mesures retenues suivent les principes généraux de prévention du Code du travail : d'abord supprimer le danger, puis réduire le risque à la source, privilégier la protection collective sur la protection individuelle, et enfin informer et former.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ordre de priorité des mesures est : supprimer le danger, protéger collectivement (protecteurs, dispositifs de sécurité), organiser (procédures, consignation), protéger individuellement (EPI), informer et former. Un EPI ne compense jamais l'absence d'un protecteur.</div>"
      },
      {
       "titre": "La sécurité des machines",
       "contenu": "\n<p>Les machines mises sur le marché européen doivent respecter des exigences essentielles de sécurité, fixées par la <strong>directive Machines 2006/42/CE</strong>, qui sera remplacée par le <strong>règlement (UE) 2023/1230</strong> applicable à partir de janvier 2027. Le fabricant réalise une appréciation des risques (méthodologie de la norme ISO 12100), appose le marquage CE et fournit une notice d'instructions. L'utilisateur doit maintenir la machine en état de conformité.</p>\n<table>\n<thead><tr><th>Dispositif</th><th>Rôle</th><th>Point de vigilance en conduite</th></tr></thead>\n<tbody>\n<tr><td>Protecteur fixe</td><td>Empêche l'accès, démontable uniquement avec un outil</td><td>Toujours remonté après intervention</td></tr>\n<tr><td>Protecteur mobile avec dispositif de verrouillage</td><td>L'ouverture provoque l'arrêt ; parfois interverrouillage empêchant l'ouverture tant que le mouvement n'est pas arrêté</td><td>Ne jamais shunter l'interrupteur de sécurité</td></tr>\n<tr><td>Barrière immatérielle</td><td>Arrête les mouvements dangereux si une personne franchit le faisceau</td><td>Ne pas modifier sa position ni la masquer</td></tr>\n<tr><td>Tapis sensible, scrutateur laser</td><td>Détectent une présence dans une zone</td><td>Zone à garder dégagée</td></tr>\n<tr><td>Commande bimanuelle</td><td>Oblige à garder les deux mains sur la commande</td><td>Ne pas bloquer un bouton</td></tr>\n<tr><td>Arrêt d'urgence</td><td>Arrête la machine en cas de danger imminent</td><td>Accessible, tester selon la périodicité prévue</td></tr>\n</tbody>\n</table>\n<p>La fiabilité des fonctions de sécurité réalisées par la commande est évaluée par le <strong>niveau de performance</strong> PL, de a (le plus faible) à e (le plus élevé), défini par la norme ISO 13849-1. Plus le risque est élevé, plus le PL requis est élevé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> neutraliser un dispositif de sécurité (aimant sur un interrupteur de porte, barrière immatérielle désactivée, bouton bimanuel coincé) est une faute grave et la cause de nombreux accidents d'amputation. Si un dispositif gêne la production, on le signale pour qu'une solution soit trouvée ; on ne le contourne jamais.</div>"
      },
      {
       "titre": "La consignation multi-énergies",
       "contenu": "\n<p>Avant toute intervention dans une zone dangereuse (dégagement d'un bourrage important, nettoyage intérieur, remplacement de pièces), il faut s'assurer qu'aucune énergie ne peut provoquer de mouvement ou de choc. C'est la <strong>consignation</strong>. Pour l'électricité, elle est encadrée par la norme NF C 18-510 et réalisée par une personne habilitée ; pour les autres énergies (pneumatique, hydraulique, mécanique, thermique, fluides), elle suit les procédures de l'entreprise.</p>\n<p>Les cinq étapes de la consignation :</p>\n<ol>\n<li><strong>Séparer</strong> l'équipement de toutes ses sources d'énergie (sectionneur électrique, vanne d'air, vanne de fluide).</li>\n<li><strong>Condamner</strong> les organes de séparation en position ouverte par un cadenas personnel, et les signaler par une étiquette.</li>\n<li><strong>Dissiper</strong> les énergies résiduelles : purger l'air, décharger un accumulateur, laisser refroidir, caler une charge suspendue, arrêter un volant d'inertie.</li>\n<li><strong>Vérifier</strong> l'absence d'énergie : vérification d'absence de tension par une personne habilitée, manomètre à zéro, essai de démarrage depuis le pupitre (qui ne doit rien produire).</li>\n<li><strong>Délimiter et signaler</strong> la zone d'intervention si nécessaire.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour une intervention collective sur une machine, chaque intervenant pose <strong>son propre cadenas</strong> sur une pince multi-cadenas ou sur un boîtier de consignation contenant les clés. La machine ne peut être remise en énergie qu'une fois tous les cadenas retirés, chacun par son propriétaire après avoir quitté la zone. La déconsignation suit l'ordre inverse : vérifier que la zone est libre et les protecteurs remontés, retirer les cadenas, rétablir les énergies, prévenir l'équipe, redémarrer selon le GEMMA.</div>"
      },
      {
       "titre": "Risques d'explosion : les zones ATEX",
       "contenu": "\n<p>Une <strong>atmosphère explosive</strong> (ATEX) est un mélange d'air et de substances inflammables (gaz, vapeurs, brouillards ou poussières) dans lequel une combustion peut se propager. On en rencontre dans l'agroalimentaire (poussières de farine, de sucre, de lait en poudre), la chimie, la pharmacie, la cosmétique (solvants, alcools), le traitement du bois.</p>\n<p>Deux directives européennes encadrent ce risque : l'une porte sur les appareils destinés à ces atmosphères (2014/34/UE), l'autre sur la protection des travailleurs (1999/92/CE). L'employeur classe les emplacements en zones selon la fréquence de présence de l'atmosphère explosive :</p>\n<table>\n<thead><tr><th>Présence de l'atmosphère explosive</th><th>Gaz et vapeurs</th><th>Poussières</th></tr></thead>\n<tbody>\n<tr><td>En permanence ou fréquemment</td><td>Zone 0</td><td>Zone 20</td></tr>\n<tr><td>Occasionnellement en fonctionnement normal</td><td>Zone 1</td><td>Zone 21</td></tr>\n<tr><td>Rarement et brièvement</td><td>Zone 2</td><td>Zone 22</td></tr>\n</tbody>\n</table>\n<p>Dans ces zones signalées par un panneau triangulaire jaune portant « Ex », seuls des matériels adaptés et marqués sont autorisés ; les travaux par points chauds nécessitent un <strong>permis de feu</strong> ; le nettoyage des dépôts de poussières est une mesure essentielle, car une couche de quelques millimètres suffit à alimenter une explosion secondaire.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en zone ATEX, un téléphone portable, une lampe ou un outil électroportatif non certifiés sont interdits. Le soufflage des poussières à l'air comprimé est en général proscrit car il met les poussières en suspension : on aspire avec un aspirateur adapté.</div>"
      },
      {
       "titre": "Intervenir sur incident en sécurité",
       "contenu": "\n<p>Face à un incident (bourrage, fuite, départ de feu, produit renversé), le pilote organise la réponse dans un ordre précis :</p>\n<ol>\n<li><strong>Protéger</strong> : arrêter la machine ou la ligne selon la procédure, éloigner les personnes, baliser.</li>\n<li><strong>Alerter</strong> selon la gravité : hiérarchie, maintenance, équipe de seconde intervention, secours.</li>\n<li><strong>Évaluer</strong> les risques de l'intervention elle-même : quelles énergies, quels produits (consulter la fiche de données de sécurité), quels EPI, faut-il consigner, qui est autorisé ?</li>\n<li><strong>Intervenir</strong> selon la procédure, ou mettre en place une marche dégradée prévue.</li>\n<li><strong>Remettre en service</strong> après vérification (protecteurs, forçages levés, essais à vide).</li>\n<li><strong>Tracer et analyser</strong> : cahier de ligne, déclaration d'incident ou de presque-accident.</li>\n</ol>\n<p>Les <strong>presque-accidents</strong> (événements sans blessure qui auraient pu en causer une) sont précieux : ils révèlent des situations dangereuses avant l'accident. Leur déclaration doit être encouragée par l'encadrement de proximité.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un risque se maîtrise aussi pour la production, les biens et l'environnement : une intervention précipitée peut abîmer une machine, polluer un réseau d'eaux pluviales par un produit déversé ou contaminer un lot entier. La bonne décision est souvent d'arrêter, de sécuriser et de demander de l'aide.</div>"
      },
      {
       "titre": "Risques pour l'environnement en conduite",
       "contenu": "\n<p>Les risques identifiés par le pilote concernent aussi l'environnement. Sur une ligne, les situations typiques sont : déversement de produit ou de détergent vers les réseaux d'eaux pluviales, fuite d'huile hydraulique, rejet de produits non conformes dans les mauvaises filières de déchets, surconsommation d'eau ou d'énergie. Les sites industriels importants relèvent de la réglementation des <strong>installations classées pour la protection de l'environnement</strong> (ICPE), qui fixe des prescriptions de fonctionnement et de surveillance.</p>\n<p>Les mesures de prévention en conduite sont simples mais exigeantes : utiliser les bacs de rétention, connaître l'emplacement des kits absorbants et des obturateurs de regards, trier les déchets selon les consignes du site, signaler toute fuite et tout rejet anormal. Une pollution accidentelle doit être déclarée immédiatement à la hiérarchie, qui informe si nécessaire les autorités.</p>"
      }
     ],
     "points_cles": [
      "Danger, situation dangereuse, événement dangereux et risque sont des notions distinctes.",
      "Les risques sont évalués dans le document unique et traités selon les principes généraux de prévention.",
      "La protection collective prime sur la protection individuelle.",
      "Les machines respectent la directive 2006/42/CE, remplacée par le règlement (UE) 2023/1230 à partir de 2027.",
      "Neutraliser un dispositif de sécurité est une faute grave.",
      "Consignation : séparer, condamner, dissiper, vérifier, signaler ; un cadenas personnel par intervenant.",
      "Les zones ATEX se classent en 0, 1, 2 (gaz) et 20, 21, 22 (poussières).",
      "Face à un incident : protéger, alerter, évaluer, intervenir, remettre en service, tracer.",
      "Les presque-accidents se déclarent pour prévenir les accidents."
     ],
     "lexique": [
      {
       "terme": "Danger",
       "def": "Propriété ou capacité intrinsèque d'un élément à causer un dommage."
      },
      {
       "terme": "Risque",
       "def": "Combinaison de la gravité d'un dommage possible et de sa probabilité."
      },
      {
       "terme": "Document unique",
       "def": "Document dans lequel l'employeur transcrit l'évaluation des risques professionnels."
      },
      {
       "terme": "Protecteur",
       "def": "Élément de machine qui assure une protection par barrière physique."
      },
      {
       "terme": "Dispositif de verrouillage",
       "def": "Dispositif qui empêche le fonctionnement dangereux tant qu'un protecteur est ouvert."
      },
      {
       "terme": "Niveau de performance (PL)",
       "def": "Niveau de fiabilité d'une fonction de sécurité, de a à e."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble des opérations qui mettent un équipement en sécurité vis-à-vis de toutes ses énergies."
      },
      {
       "terme": "Énergie résiduelle",
       "def": "Énergie qui subsiste après séparation : air sous pression, accumulateur, inertie, chaleur."
      },
      {
       "terme": "ATEX",
       "def": "Atmosphère explosive formée par un mélange d'air et de substances inflammables."
      },
      {
       "terme": "Permis de feu",
       "def": "Autorisation écrite préalable à des travaux par points chauds dans une zone à risque."
      },
      {
       "terme": "Presque-accident",
       "def": "Événement sans dommage qui aurait pu provoquer un accident."
      }
     ]
    },
    {
     "id": "bplp-produit-procede-tracabilite",
     "titre": "Produit, matériau, procédé : exigences sectorielles et traçabilité",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Relier les propriétés d'un produit ou d'un matériau aux paramètres du procédé qui le transforme.",
      "Identifier les paramètres critiques d'un procédé et leur effet sur la qualité.",
      "Expliquer les principes de l'HACCP et des bonnes pratiques de fabrication.",
      "Décrire le nettoyage en place et ses paramètres.",
      "Organiser la traçabilité d'un lot de l'amont à l'aval et gérer un produit non conforme."
     ],
     "sections": [
      {
       "titre": "La relation produit-matériau-procédé",
       "contenu": "\n<p>Le pilote de ligne travaille dans des secteurs très divers : agroalimentaire, pharmacie, cosmétique, plasturgie, métallurgie, automobile, électronique, papier, verre, céramique. Dans tous les cas, la qualité du produit fini dépend de l'interaction entre trois éléments :</p>\n<ul>\n<li>le <strong>produit</strong> attendu, défini par des spécifications (dimensions, masse, composition, aspect, propriétés d'usage) ;</li>\n<li>le <strong>matériau</strong> ou la matière première, avec ses propres propriétés et sa variabilité d'un lot à l'autre ;</li>\n<li>le <strong>procédé</strong>, défini par des paramètres réglables (température, pression, temps, vitesse, dosage).</li>\n</ul>\n<p>Un <strong>paramètre critique</strong> est un paramètre de procédé dont la variation influence directement une caractéristique importante du produit. Il est surveillé, enregistré, et ses limites sont fixées dans la recette ou la fiche de réglage.</p>\n<table>\n<thead><tr><th>Secteur et procédé</th><th>Paramètres critiques</th><th>Caractéristiques du produit concernées</th></tr></thead>\n<tbody>\n<tr><td>Plasturgie, injection</td><td>Température matière et moule, pression et temps de maintien, temps de refroidissement</td><td>Dimensions, retassures, bavures, aspect</td></tr>\n<tr><td>Agroalimentaire, pasteurisation</td><td>Température et temps de chambrage</td><td>Sécurité microbiologique, goût</td></tr>\n<tr><td>Pharmacie, compression de comprimés</td><td>Force de compression, vitesse, humidité du grain</td><td>Masse, dureté, désagrégation</td></tr>\n<tr><td>Emballage, thermoscellage</td><td>Température des mâchoires, pression, temps de contact</td><td>Étanchéité, résistance de la soudure</td></tr>\n<tr><td>Métallurgie, emboutissage</td><td>Effort presse, lubrification, état des outils</td><td>Fissures, plis, cotes</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un changement de lot de matière première peut nécessiter un ajustement de paramètres, mais toujours dans la fenêtre autorisée par la recette. Hors de cette fenêtre, on appelle le responsable technique ou qualité au lieu d'improviser.</div>"
      },
      {
       "titre": "Exemple : la fenêtre de procédé en thermoscellage",
       "contenu": "\n<p>Sur une operculeuse de barquettes, la qualité de la soudure dépend de la température des mâchoires, de la pression et du temps de contact. Trop peu d'énergie donne une soudure qui s'ouvre ; trop d'énergie brûle le film ou le perce. Les essais du service méthodes ont défini une <strong>fenêtre de procédé</strong> :</p>\n<table>\n<thead><tr><th>Paramètre</th><th>Minimum</th><th>Nominal</th><th>Maximum</th></tr></thead>\n<tbody>\n<tr><td>Température des mâchoires</td><td>165 °C</td><td>175 °C</td><td>185 °C</td></tr>\n<tr><td>Temps de scellage</td><td>0,8 s</td><td>1,0 s</td><td>1,2 s</td></tr>\n<tr><td>Pression</td><td>4 bar</td><td>5 bar</td><td>6 bar</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> des soudures s'ouvrent lors du test d'étanchéité, alors que l'écran affiche 175 °C, 1,0 s et 5 bar.<br>1. Les paramètres affichés sont nominaux : le problème n'est probablement pas le réglage.<br>2. Vérifier la mesure réelle : la température de surface des mâchoires, mesurée avec un thermomètre de contact étalonné, n'est que de 160 °C ; la sonde de régulation est mal positionnée ou défectueuse.<br>3. Vérifier la matière : le nouveau lot de film a-t-il la même référence et la même couche de scellage ?<br>4. Vérifier l'état des mâchoires : encrassement, joint silicone usé, défaut de parallélisme.<br>5. Bloquer les barquettes produites depuis le dernier test conforme et alerter la qualité.<br>On voit que l'écart vient de l'écart entre la valeur affichée et la valeur réelle, et non d'un mauvais réglage.</div>"
      },
      {
       "titre": "Hygiène : HACCP et bonnes pratiques de fabrication",
       "contenu": "\n<p>Dans les industries alimentaires, la réglementation européenne sur l'hygiène des denrées (règlement (CE) n° 852/2004) impose aux exploitants de mettre en place des procédures fondées sur les principes <strong>HACCP</strong> (analyse des dangers et points critiques pour leur maîtrise), issus du Codex Alimentarius. Les sept principes sont :</p>\n<ol>\n<li>analyser les dangers (biologiques, chimiques, physiques, allergènes) ;</li>\n<li>déterminer les <strong>points critiques pour la maîtrise</strong> (CCP) ;</li>\n<li>fixer les <strong>limites critiques</strong> pour chaque CCP ;</li>\n<li>mettre en place une surveillance de chaque CCP ;</li>\n<li>définir les actions correctives en cas de dépassement ;</li>\n<li>vérifier l'efficacité du système ;</li>\n<li>documenter et enregistrer.</li>\n</ol>\n<p>Sur une ligne, les CCP typiques sont la pasteurisation (couple temps-température), le détecteur de métaux en fin de ligne, le contrôle d'étiquetage des allergènes. Le pilote surveille ces points, enregistre les contrôles et applique les actions définies en cas d'écart.</p>\n<p>Dans l'industrie pharmaceutique, les <strong>bonnes pratiques de fabrication</strong> (BPF) imposent des exigences très strictes : procédés validés, documentation de lot complète, vide de ligne entre deux lots, double vérification de certaines opérations, piste d'audit des systèmes informatisés. La cosmétique dispose de ses propres bonnes pratiques (norme ISO 22716).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le <strong>vide de ligne</strong> entre deux lots ou deux produits consiste à retirer de la ligne tous les produits, composants, étiquettes et documents du lot précédent. Une seule étiquette restée dans une étiqueteuse peut provoquer un mélange d'étiquetage, cause fréquente de rappel de produits.</div>"
      },
      {
       "titre": "Le nettoyage en place",
       "contenu": "\n<p>Les installations de process liquide (cuves, tuyauteries, remplisseuses) sont nettoyées sans démontage par un <strong>nettoyage en place</strong> (NEP, en anglais CIP). Une centrale fait circuler successivement des solutions selon un programme automatique : prérinçage à l'eau, nettoyage alcalin (soude) pour éliminer les matières organiques, rinçage intermédiaire, nettoyage acide pour éliminer le tartre et les dépôts minéraux, rinçage final, et parfois désinfection.</p>\n<p>L'efficacité dépend de quatre facteurs liés, souvent présentés par le <strong>cercle de Sinner</strong> : l'action <strong>chimique</strong> (nature et concentration du produit), l'action <strong>mécanique</strong> (vitesse de circulation, turbulence), la <strong>température</strong> et le <strong>temps</strong>. Si l'un diminue, les autres doivent compenser.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les paramètres du NEP (concentrations mesurées par conductivité, températures, débits, durées) sont enregistrés automatiquement et constituent une preuve de nettoyage. Un cycle interrompu ou hors limites n'est pas validé : la ligne ne peut pas redémarrer en production tant qu'un nouveau cycle conforme n'a pas été réalisé.</div>"
      },
      {
       "titre": "La traçabilité",
       "contenu": "\n<p>La <strong>traçabilité</strong> est la capacité à retrouver l'historique, l'utilisation ou la localisation d'un produit. Dans l'alimentaire, elle est obligatoire (règlement (CE) n° 178/2002) : chaque exploitant doit pouvoir identifier ses fournisseurs et ses clients directs, c'est le principe « un pas en arrière, un pas en avant ». L'automobile, l'aéronautique et la pharmacie ont des exigences équivalentes ou plus fortes.</p>\n<ul>\n<li>la <strong>traçabilité ascendante</strong> part d'un produit fini et remonte aux lots de matières, aux équipements, aux paramètres et aux personnes ;</li>\n<li>la <strong>traçabilité descendante</strong> part d'un lot de matière et retrouve tous les produits finis qui l'ont utilisé et leurs clients.</li>\n</ul>\n<p>Le support de la traçabilité est le <strong>numéro de lot</strong>, imprimé sur chaque produit et chaque palette, souvent avec une date (date limite de consommation, date de durabilité minimale ou date de péremption) et un code-barres ou un code bidimensionnel. Le pilote enregistre les lots de matières consommés sur chaque OF, les changements de lot en cours de production et les contrôles réalisés.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> plus le lot est petit, plus un éventuel retrait ou rappel sera limité. Noter précisément l'heure d'un changement de lot de matière permet, en cas de problème, de ne bloquer que la production concernée.</div>"
      },
      {
       "titre": "Gérer un produit non conforme",
       "contenu": "\n<p>Un produit qui ne respecte pas ses spécifications est <strong>non conforme</strong>. La conduite à tenir :</p>\n<ol>\n<li><strong>Isoler et identifier</strong> : séparer physiquement les produits suspects, les étiqueter « bloqué » ou « en attente de décision », les déclarer dans le système.</li>\n<li><strong>Délimiter</strong> : déterminer depuis quand le défaut existe (dernier contrôle conforme) pour bloquer toute la production concernée, y compris celle déjà palettisée ou expédiée vers l'entrepôt.</li>\n<li><strong>Informer</strong> la qualité et la hiérarchie, ouvrir une fiche de non-conformité.</li>\n<li><strong>Traiter</strong> : la décision appartient au service qualité (tri, retouche, déclassement, destruction, dérogation).</li>\n<li><strong>Corriger</strong> la cause pour que le défaut ne se reproduise pas.</li>\n</ol>\n<p>Les entreprises certifiées selon la norme <strong>ISO 9001</strong> (management de la qualité) ou, dans l'alimentaire, ISO 22000 et les référentiels de la grande distribution, doivent démontrer la maîtrise de ce processus lors des audits.</p>"
      },
      {
       "titre": "Les exigences du client et de la marque",
       "contenu": "\n<p>Au-delà de la réglementation, le produit doit respecter les exigences du <strong>client</strong>, formalisées dans un cahier des charges : dimensions et palettisation imposées par l'entrepôt, codes-barres lisibles, aspect, informations d'étiquetage. Les distributeurs imposent souvent leurs propres référentiels d'audit (dans l'agroalimentaire, par exemple, des standards reconnus au niveau international). Un défaut d'aspect sans risque pour la santé peut ainsi entraîner le refus d'une livraison entière.</p>\n<p>Le pilote doit connaître les caractéristiques que le client juge critiques sur sa ligne : ce sont elles qui figurent en priorité dans le plan de surveillance et dans les contrôles de démarrage.</p>"
      }
     ],
     "points_cles": [
      "La qualité du produit résulte de l'interaction entre produit, matériau et procédé.",
      "Un paramètre critique influence directement une caractéristique importante et se règle dans une fenêtre définie.",
      "La valeur affichée d'un paramètre doit parfois être vérifiée par une mesure réelle étalonnée.",
      "L'HACCP repose sur sept principes, dont la surveillance des points critiques (CCP).",
      "Les BPF pharmaceutiques imposent procédés validés, documentation de lot et vide de ligne.",
      "Le nettoyage en place combine action chimique, mécanique, température et temps.",
      "La traçabilité ascendante et descendante repose sur le numéro de lot.",
      "Un produit non conforme est isolé, identifié, délimité, déclaré ; la qualité décide de son sort."
     ],
     "lexique": [
      {
       "terme": "Paramètre critique",
       "def": "Paramètre de procédé dont la variation influence directement une caractéristique importante du produit."
      },
      {
       "terme": "Fenêtre de procédé",
       "def": "Plage de réglage des paramètres à l'intérieur de laquelle le produit est conforme."
      },
      {
       "terme": "HACCP",
       "def": "Méthode d'analyse des dangers et de maîtrise des points critiques en hygiène alimentaire."
      },
      {
       "terme": "CCP",
       "def": "Point critique pour la maîtrise, étape où un contrôle est indispensable pour la sécurité du produit."
      },
      {
       "terme": "BPF",
       "def": "Bonnes pratiques de fabrication, référentiel d'exigences de l'industrie pharmaceutique."
      },
      {
       "terme": "Vide de ligne",
       "def": "Opération qui retire de la ligne tout élément du lot précédent avant un nouveau lot."
      },
      {
       "terme": "Nettoyage en place",
       "def": "Nettoyage automatique des circuits et cuves sans démontage."
      },
      {
       "terme": "Traçabilité",
       "def": "Capacité à retrouver l'historique, l'utilisation ou la localisation d'un produit."
      },
      {
       "terme": "Numéro de lot",
       "def": "Identifiant d'un ensemble de produits fabriqués dans des conditions identiques."
      },
      {
       "terme": "Non-conformité",
       "def": "Non-satisfaction d'une exigence spécifiée."
      },
      {
       "terme": "Dérogation",
       "def": "Autorisation exceptionnelle d'utiliser ou de livrer un produit non conforme."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Documents d'organisation et de suivi de la production",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bplp-doc-ordre-fabrication",
     "titre": "Lire un ordre de fabrication, sa nomenclature et sa gamme",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Identifier les rubriques d'un ordre de fabrication et leur utilité pour la ligne.",
      "Exploiter une nomenclature pour vérifier les composants et calculer les quantités à approvisionner.",
      "Lire une gamme de fabrication : phases, postes, temps, paramètres et contrôles.",
      "Détecter les incohérences entre OF, nomenclature, gamme et stocks.",
      "Rédiger une analyse de préparation à partir d'un dossier d'OF."
     ],
     "sections": [
      {
       "titre": "Le dossier de fabrication : trois documents liés",
       "contenu": "\n<p>Lors de l'organisation d'une production, et en particulier dans les situations d'examen consacrées à la préparation d'une production, le candidat reçoit un dossier qui comprend presque toujours trois documents :</p>\n<ul>\n<li>l'<strong>ordre de fabrication</strong> (OF), qui dit quoi produire, combien et quand ;</li>\n<li>la <strong>nomenclature</strong>, qui dit avec quoi ;</li>\n<li>la <strong>gamme</strong> (ou recette, ou fiche de procédé), qui dit comment, sur quels postes et en combien de temps.</li>\n</ul>\n<p>Ces documents sont émis par des services différents (ordonnancement, bureau d'études ou méthodes, qualité) et peuvent contenir des incohérences. Le rôle du pilote est de les croiser avant de lancer la production.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'OF fait référence à une nomenclature et à une gamme par leur numéro et leur <strong>indice de révision</strong>. Utiliser une nomenclature ou une gamme d'un indice périmé est une source classique de non-conformité.</div>"
      },
      {
       "titre": "Structure et vocabulaire d'un OF",
       "contenu": "\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th><th>Ce qu'on vérifie</th></tr></thead>\n<tbody>\n<tr><td>En-tête</td><td>Numéro d'OF, date d'émission, émetteur</td><td>OF bien affecté à la ligne</td></tr>\n<tr><td>Article</td><td>Code et désignation du produit fini, client éventuel</td><td>Correspondance avec la recette chargée</td></tr>\n<tr><td>Quantité</td><td>Quantité à produire et unité (pièces, colis, palettes, kg)</td><td>Cohérence des unités</td></tr>\n<tr><td>Dates</td><td>Date de début au plus tôt, date de fin au plus tard</td><td>Faisabilité avec la cadence</td></tr>\n<tr><td>Références</td><td>Nomenclature et gamme avec leurs indices</td><td>Indices en vigueur</td></tr>\n<tr><td>Composants réservés</td><td>Liste des matières avec quantités et lots alloués</td><td>Disponibilité et statut qualité</td></tr>\n<tr><td>Zone de déclaration</td><td>Quantités bonnes, rebuts, temps, signatures</td><td>À remplir en fin d'OF</td></tr>\n</tbody>\n</table>\n<p>On rencontre aussi des mentions particulières : <strong>« urgent »</strong>, <strong>« premier lot »</strong> (contrôle renforcé), <strong>« dérogation n° … »</strong> (utilisation autorisée d'un composant non standard), <strong>« allergène »</strong>.</p>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1. Lire l'en-tête : quel produit, quelle quantité, quelle unité, quelles dates. 2. Convertir la quantité dans l'unité de la ligne (bouteilles, coups, mètres). 3. Calculer la durée de production avec la cadence de la gamme et un TRS prévisionnel, puis vérifier qu'elle tient entre les dates. 4. Pour chaque ligne de la nomenclature, calculer le besoin (quantité × coefficient de lien, plus le taux de rebut prévu) et le comparer au stock alloué. 5. Lire la gamme phase par phase : postes, outillages ou formats, paramètres, contrôles. 6. Lister les incohérences et les points à faire valider. 7. Conclure : production lançable ou non, conditions et actions préalables.</div>\n<p>Pour calculer une durée, on utilise : durée = quantité / (cadence nominale × TRS prévu). Avec une cadence de 6 000 unités/h et un TRS prévu de 75 %, la cadence moyenne attendue est de 4 500 unités/h.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les pièges les plus fréquents sont les <strong>unités</strong> (colis ou unités, kg ou litres), les <strong>coefficients de lien</strong> exprimés pour 1 000 unités ou par colis, et les quantités de composants qui oublient le <strong>taux de rebut</strong> ou les <strong>pertes de démarrage</strong>. Relisez toujours l'unité de chaque colonne avant de calculer.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p><strong>Ordre de fabrication OF 24-1187</strong>, ligne de conditionnement L3. Article 50-210 « Gel douche 250 mL fleur d'oranger, carton de 12 ». Quantité : 1 500 cartons. Début au plus tôt : lundi 6 h ; fin au plus tard : lundi 21 h. Nomenclature N50-210 indice C. Gamme G-L3-250 indice B.</p>\n<p><strong>Nomenclature N50-210 indice C</strong> (quantités pour 1 carton) :</p>\n<table>\n<thead><tr><th>Code</th><th>Désignation</th><th>Quantité par carton</th><th>Unité</th><th>Stock alloué</th></tr></thead>\n<tbody>\n<tr><td>VR-250</td><td>Flacon PET 250 mL</td><td>12</td><td>pièce</td><td>18 500</td></tr>\n<tr><td>BC-24</td><td>Capsule service 24 mm</td><td>12</td><td>pièce</td><td>17 000</td></tr>\n<tr><td>ET-210</td><td>Étiquette avant fleur d'oranger</td><td>12</td><td>pièce</td><td>20 000</td></tr>\n<tr><td>VR-GD</td><td>Gel douche fleur d'oranger, vrac</td><td>3,05</td><td>kg</td><td>4 800 kg</td></tr>\n<tr><td>CT-12</td><td>Carton américain 12 flacons</td><td>1</td><td>pièce</td><td>1 600</td></tr>\n</tbody>\n</table>\n<p><strong>Gamme G-L3-250 indice B</strong> : phase 10 dosage, remplisseuse 8 becs, volume 250 mL, masse cible 254 g ; phase 20 capsulage, couple de serrage 1,2 N·m ± 0,2 ; phase 30 étiquetage et marquage du lot ; phase 40 encaissage par 12 ; phase 50 palettisation, 60 cartons par palette. Cadence nominale de la ligne : 3 600 flacons/h. Contrôles : masse de 5 flacons toutes les 30 min, couple de 3 flacons par heure. Taux de rebut prévu : 2 %.</p>\n<p>Information complémentaire : la fiche de stock indique que l'étiquette ET-210 a été modifiée (nouvelle mention réglementaire), la référence en vigueur étant désormais ET-210 indice D ; le lot alloué est d'indice C.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1. Quantités.</strong> 1 500 cartons × 12 = 18 000 flacons à produire bons.</p>\n<p><strong>2. Délai.</strong> Fenêtre disponible : de 6 h à 21 h, soit 15 h. Avec un TRS prévisionnel de 75 %, la cadence moyenne est 3 600 × 0,75 = 2 700 flacons/h, d'où une durée de 18 000 / 2 700 ≈ 6,7 h, soit environ 6 h 40. Le délai est largement tenable, même avec un changement de format en début de poste.</p>\n<p><strong>3. Besoins en composants</strong> avec 2 % de rebut : flacons, capsules et étiquettes : 18 000 × 1,02 = 18 360 pièces. Gel : 1 500 × 3,05 = 4 575 kg, plus 2 % ≈ 4 667 kg. Cartons : 1 500 × 1,02 = 1 530.</p>\n<table>\n<thead><tr><th>Composant</th><th>Besoin</th><th>Stock alloué</th><th>Bilan</th></tr></thead>\n<tbody>\n<tr><td>Flacons</td><td>18 360</td><td>18 500</td><td>Suffisant, marge faible (140)</td></tr>\n<tr><td>Capsules</td><td>18 360</td><td>17 000</td><td>Manque 1 360 capsules</td></tr>\n<tr><td>Étiquettes</td><td>18 360</td><td>20 000</td><td>Quantité suffisante mais indice C périmé</td></tr>\n<tr><td>Gel vrac</td><td>4 667 kg</td><td>4 800 kg</td><td>Suffisant</td></tr>\n<tr><td>Cartons</td><td>1 530</td><td>1 600</td><td>Suffisant</td></tr>\n</tbody>\n</table>\n<p><strong>4. Cohérences.</strong> La masse de vrac par carton (3,05 kg pour 12 flacons, soit 254 g par flacon) est cohérente avec la masse cible de la gamme. Nombre de palettes : 1 500 / 60 = 25 palettes.</p>\n<p><strong>5. Conclusion.</strong> L'OF n'est pas lançable en l'état : il faut demander un complément de 1 360 capsules au minimum, et surtout faire remplacer le lot d'étiquettes d'indice C par l'indice D en vigueur, sous peine de produire 18 000 flacons non conformes à la réglementation d'étiquetage. Les deux points sont signalés à l'ordonnancement et à la qualité avant le démarrage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> cette vérification croisée prend quelques minutes et peut éviter le retrait de tout un lot. Dans un dossier d'examen, elle se présente sous la forme d'un tableau de besoins suivi d'une conclusion argumentée : le jury attend une décision (lancer, lancer sous condition, ne pas lancer) et sa justification.</div>"
      },
      {
       "titre": "Les variantes du document selon les secteurs",
       "contenu": "\n<p>La forme de l'ordre de fabrication varie selon les industries, mais la logique reste la même :</p>\n<table>\n<thead><tr><th>Secteur</th><th>Nom usuel</th><th>Particularités</th></tr></thead>\n<tbody>\n<tr><td>Agroalimentaire, cosmétique</td><td>Ordre de fabrication ou de conditionnement</td><td>Recette avec formule en kg, lots de matières, dates de durabilité à imprimer, allergènes</td></tr>\n<tr><td>Pharmacie</td><td>Dossier de lot (fabrication et conditionnement)</td><td>Chaque étape est signée, double vérification, réconciliation des articles imprimés en fin de lot</td></tr>\n<tr><td>Mécanique, plasturgie</td><td>Ordre de fabrication et gamme d'usinage ou d'injection</td><td>Numéro de moule ou d'outil, paramètres machine, contrôles dimensionnels de premier article</td></tr>\n<tr><td>Assemblage, électronique</td><td>Ordre de fabrication avec nomenclature arborescente</td><td>Sous-ensembles, numéros de série, options client</td></tr>\n</tbody>\n</table>\n<p>La <strong>réconciliation</strong>, très utilisée en pharmacie et pour les articles imprimés, consiste à vérifier en fin d'OF que : quantité reçue = quantité utilisée + quantité rebutée + quantité retournée. Un écart non expliqué peut signifier qu'une étiquette ou une notice d'un lot s'est retrouvée dans un autre lot : il bloque la libération du lot tant qu'il n'est pas expliqué.</p>\n<p>Exemple : 20 000 étiquettes délivrées, 18 360 posées, 210 rebutées lors du démarrage, 1 400 retournées au magasin. Total justifié : 18 360 + 210 + 1 400 = 19 970. Il manque 30 étiquettes, qu'il faut rechercher (dans la machine, au sol, dans les déchets) avant de clôturer l'OF. Dans un dossier d'examen, ce calcul simple est fréquemment demandé et constitue une preuve de rigueur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> quel que soit le secteur, l'analyse d'un dossier de fabrication répond toujours aux mêmes questions : quoi, combien, avec quoi, comment, en combien de temps, et le tout est-il cohérent et disponible ?</div>"
      }
     ],
     "points_cles": [
      "Le dossier de fabrication associe ordre de fabrication, nomenclature et gamme.",
      "L'OF cite nomenclature et gamme avec leur indice de révision, à vérifier.",
      "Durée prévisionnelle = quantité / (cadence nominale × TRS prévu).",
      "Besoin en composant = quantité × coefficient de lien, augmenté du taux de rebut.",
      "Les unités et les bases des coefficients (par unité, par colis, pour 1 000) sont des pièges fréquents.",
      "On croise les documents pour détecter manques, indices périmés et incohérences de paramètres.",
      "L'analyse se termine par une décision argumentée : lancer, lancer sous condition, ne pas lancer."
     ],
     "lexique": [
      {
       "terme": "Ordre de fabrication",
       "def": "Document qui autorise la production d'une quantité d'un article dans un délai donné."
      },
      {
       "terme": "Gamme de fabrication",
       "def": "Document décrivant la succession des phases, postes, paramètres et contrôles."
      },
      {
       "terme": "Phase",
       "def": "Ensemble d'opérations réalisées sur un même poste dans la gamme."
      },
      {
       "terme": "Coefficient de lien",
       "def": "Quantité d'un composant nécessaire par unité de produit fini."
      },
      {
       "terme": "Indice de révision",
       "def": "Repère indiquant la version en vigueur d'un document ou d'une référence."
      },
      {
       "terme": "Stock alloué",
       "def": "Quantité de stock réservée pour un ordre de fabrication."
      },
      {
       "terme": "Taux de rebut prévu",
       "def": "Pourcentage de pertes pris en compte dans le calcul des approvisionnements."
      },
      {
       "terme": "Article",
       "def": "Produit ou composant identifié par un code unique dans le système de gestion."
      }
     ]
    },
    {
     "id": "bplp-doc-fiche-reglage",
     "titre": "Exploiter une fiche de réglage et un mode opératoire de changement de format",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Reconnaître la structure d'une fiche de réglage par format et d'un mode opératoire.",
      "Repérer les valeurs de réglage, les repères, les tolérances et les points clés de sécurité.",
      "Comparer l'état réel d'une machine à la fiche et identifier les écarts.",
      "Critiquer un mode opératoire et proposer des améliorations argumentées.",
      "Rédiger une analyse modèle d'un document de changement de format."
     ],
     "sections": [
      {
       "titre": "Deux documents complémentaires",
       "contenu": "\n<p>Sur une ligne multi-formats, deux documents encadrent les changements :</p>\n<ul>\n<li>la <strong>fiche de réglage</strong> (ou fiche format, ou fiche paramètres) donne, pour chaque format et chaque machine, les <strong>valeurs</strong> à obtenir : positions de guides, hauteurs, numéros de pièces de format, numéro de recette, consignes de vitesse et de température ;</li>\n<li>le <strong>mode opératoire</strong> (ou instruction de travail) décrit la <strong>suite d'actions</strong> pour passer d'un format à l'autre : ordre des opérations, intervenants, outils, sécurité, contrôles.</li>\n</ul>\n<p>La fiche dit « où il faut arriver », le mode opératoire dit « comment y arriver ». Ils sont tous deux des documents qualité maîtrisés : référence, indice, date, rédacteur et approbateur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un document de poste non daté, non indexé ou annoté à la main sans validation n'a pas de valeur de référence. En cas de doute entre deux versions, on applique la version en vigueur dans le système documentaire et on signale l'autre.</div>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "\n<table>\n<thead><tr><th>Rubrique</th><th>Fiche de réglage</th><th>Mode opératoire</th></tr></thead>\n<tbody>\n<tr><td>Identification</td><td>Machine, format, référence, indice</td><td>Titre de l'opération, référence, indice, durée standard</td></tr>\n<tr><td>Contenu principal</td><td>Tableau des réglages : organe, repère, valeur, tolérance, méthode de mesure</td><td>Étapes numérotées : action, point clé, raison du point clé</td></tr>\n<tr><td>Sécurité</td><td>Mode réglage requis, pièces lourdes ou coupantes</td><td>Consignation, EPI, mode réglage, zones interdites</td></tr>\n<tr><td>Outillage</td><td>Pièces de format (code couleur, numéro)</td><td>Outils, chariot de format, gabarits</td></tr>\n<tr><td>Validation</td><td>Contrôles à réaliser sur les premiers produits</td><td>Critères de fin, signature, enregistrement de durée</td></tr>\n</tbody>\n</table>\n<p>Le vocabulaire courant : <strong>repère</strong> (marque gravée ou réglet indiquant une position), <strong>butée</strong> (arrêt mécanique réglé une fois pour toutes), <strong>gabarit</strong> (pièce étalon servant à positionner), <strong>point clé</strong> (détail qui conditionne la réussite, la qualité ou la sécurité), <strong>opération interne</strong> et <strong>externe</strong>.</p>"
      },
      {
       "titre": "Méthode de lecture et pièges",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1. Vérifier l'identification : bonne machine, bon format de départ et d'arrivée, indice en vigueur. 2. Lire d'abord les consignes de sécurité. 3. Repérer les réglages qui changent entre les deux formats (les autres restent en place) : c'est la liste réelle du travail. 4. Pour chaque réglage, noter la valeur, la tolérance et le moyen de mesure. 5. Parcourir le mode opératoire en classant chaque étape en interne ou externe, et repérer les étapes sans valeur ni repère (réglage « à l'œil »). 6. Vérifier que les contrôles de validation correspondent aux caractéristiques critiques. 7. Conclure : écarts constatés, risques, améliorations proposées.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> pièges fréquents : une tolérance absente (« régler à 120 mm » sans tolérance ni moyen de mesure), une étape de sécurité placée après une action dangereuse, une unité ambiguë (graduations du compteur de position en mm ou en tours), une pièce de format désignée par un nom différent de celui gravé dessus, et une étape « essais » sans critère d'arrêt.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p><strong>Fiche de réglage FR-ETQ-L2, indice E</strong>, étiqueteuse rotative de la ligne 2.</p>\n<table>\n<thead><tr><th>Organe</th><th>Repère</th><th>Format 1 L</th><th>Format 50 cl</th><th>Tolérance</th><th>Moyen</th></tr></thead>\n<tbody>\n<tr><td>Vis de cadencement</td><td>Pièce de format</td><td>VC-100 (bleue)</td><td>VC-065 (verte)</td><td>—</td><td>Couleur et gravure</td></tr>\n<tr><td>Étoile d'entrée et de sortie</td><td>Pièces de format</td><td>ET-100 (bleue)</td><td>ET-065 (verte)</td><td>—</td><td>Couleur et gravure</td></tr>\n<tr><td>Hauteur du groupe d'étiquetage</td><td>Compteur H1</td><td>142,0</td><td>96,5</td><td>± 0,5 mm</td><td>Compteur mécanique</td></tr>\n<tr><td>Largeur des guides d'entrée</td><td>Réglet G1</td><td>92</td><td>69</td><td>± 1 mm</td><td>Réglet gradué</td></tr>\n<tr><td>Recette supervision</td><td>—</td><td>R12</td><td>R07</td><td>—</td><td>Écran</td></tr>\n<tr><td>Température de colle</td><td>—</td><td>160 °C</td><td>160 °C</td><td>± 5 °C</td><td>Écran</td></tr>\n</tbody>\n</table>\n<p>Validation : contrôle de 10 bouteilles consécutives, position de l'étiquette à 15 mm ± 2 mm du fond, absence de pli, marquage lisible.</p>\n<p><strong>Mode opératoire MO-ETQ-L2-03, indice B</strong> « Changement 1 L vers 50 cl » : 1. Arrêter l'étiqueteuse en fin de cycle. 2. Démonter la vis de cadencement et les étoiles. 3. Passer le sélecteur en mode réglage. 4. Aller chercher les pièces de format au magasin. 5. Monter les pièces vertes. 6. Régler la hauteur du groupe d'étiquetage jusqu'à ce que l'étiquette soit bien placée. 7. Régler les guides. 8. Charger la recette. 9. Faire des essais. 10. Redémarrer.</p>\n<p>Constat sur la machine après un changement réalisé par l'équipe de nuit : compteur H1 à 97,5 ; réglet G1 à 69 ; recette active R12.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1. Écarts entre la machine et la fiche.</strong></p>\n<table>\n<thead><tr><th>Réglage</th><th>Attendu (50 cl)</th><th>Constaté</th><th>Conclusion</th></tr></thead>\n<tbody>\n<tr><td>Hauteur H1</td><td>96,5 ± 0,5, soit 96,0 à 97,0</td><td>97,5</td><td>Hors tolérance de 0,5 mm : à corriger</td></tr>\n<tr><td>Guides G1</td><td>69 ± 1</td><td>69</td><td>Conforme</td></tr>\n<tr><td>Recette</td><td>R07</td><td>R12</td><td>Non conforme : recette du format 1 L encore active</td></tr>\n</tbody>\n</table>\n<p>La recette R12 active peut expliquer des défauts de synchronisation ou une vitesse inadaptée ; elle doit être changée avant toute production.</p>\n<p><strong>2. Critique du mode opératoire.</strong></p>\n<ul>\n<li>Sécurité : l'étape 3 (mode réglage) arrive <strong>après</strong> le démontage de l'étape 2. Le passage en mode réglage, et la consignation si elle est exigée pour l'accès aux étoiles, doivent précéder toute intervention dans la machine.</li>\n<li>Organisation : l'étape 4 (chercher les pièces) est une opération externe réalisée machine arrêtée ; elle doit être faite avant l'arrêt.</li>\n<li>Précision : l'étape 6 (« jusqu'à ce que l'étiquette soit bien placée ») remplace la valeur de la fiche par un réglage par essais. Elle doit renvoyer à la valeur 96,5 ± 0,5 du compteur H1.</li>\n<li>Validation : l'étape 9 (« faire des essais ») n'a pas de critère. Elle doit reprendre le contrôle de la fiche : 10 bouteilles, position à 15 ± 2 mm, sans pli, marquage lisible.</li>\n<li>Oubli : le chargement de la recette (étape 8) n'est pas vérifié, ce qui explique l'écart constaté.</li>\n</ul>\n<p><strong>3. Proposition.</strong> Réécrire le mode opératoire dans l'ordre : préparation externe (chariot de format vert), arrêt fin de cycle, mode réglage et sécurité, démontage, montage, réglages chiffrés, chargement et vérification de la recette R07 à l'écran, validation sur 10 bouteilles, enregistrement de la durée. Faire valider le nouvel indice C et former les équipes.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une analyse de ce type est exactement ce qui est attendu d'un pilote dans une démarche d'optimisation : des écarts chiffrés, des causes liées au document, et une proposition de standard amélioré, plutôt qu'un reproche adressé à l'équipe de nuit.</div>"
      },
      {
       "titre": "Lire une instruction de travail visuelle",
       "contenu": "\n<p>Le mode opératoire se présente de plus en plus sous la forme d'une <strong>instruction de travail visuelle</strong>, affichée au poste ou consultable sur une tablette. Sa structure type comporte trois colonnes :</p>\n<table>\n<thead><tr><th>Étape principale</th><th>Point clé</th><th>Raison du point clé</th></tr></thead>\n<tbody>\n<tr><td>Ce qu'il faut faire, en quelques mots, avec une photo</td><td>Comment le faire correctement : position, ordre, valeur, sens</td><td>Pourquoi : sécurité, qualité, facilité, durée de vie de l'équipement</td></tr>\n</tbody>\n</table>\n<p>Exemple pour le montage de la vis de cadencement : étape « engager la vis sur son arbre » ; point clé « repère gravé de la vis face au repère rouge de l'arbre » ; raison « garantir le calage avec le carrousel, sinon écrasement des bouteilles ». Les pictogrammes de sécurité (gants anti-coupure, mode réglage, consignation) sont placés sur l'étape où ils s'appliquent, et non en bas de page.</p>\n<p>Pour analyser un tel document, on vérifie que chaque étape à risque a un point clé, que chaque point clé a une raison, et que les photos correspondent bien à la machine et au format actuels. Une photo d'une ancienne version de la machine est une source d'erreur fréquente après une modification d'équipement.</p>\n<p>La durée standard indiquée sur le document sert de référence : si les changements réels durent régulièrement beaucoup plus, soit le standard n'est pas appliqué, soit il est irréaliste. Dans les deux cas, l'écart est un sujet d'amélioration à traiter avec l'équipe et le service méthodes, en s'appuyant sur des relevés de durée plutôt que sur des impressions.</p>\n<p>Enfin, la mise à jour d'un document de poste suit une procédure : proposition de modification, validation par le responsable du document, changement d'indice, retrait des anciennes versions affichées, information et formation des équipes. Un pilote qui constate qu'un réglage a changé sur le terrain doit déclencher cette mise à jour plutôt que corriger le document à la main.</p>"
      }
     ],
     "points_cles": [
      "La fiche de réglage donne les valeurs cibles par format ; le mode opératoire donne la suite d'actions.",
      "Ces documents sont maîtrisés : référence, indice, date, rédacteur et approbateur.",
      "On commence la lecture par l'identification et les consignes de sécurité.",
      "Seuls les réglages qui changent entre deux formats constituent le travail réel.",
      "Une valeur sans tolérance ni moyen de mesure est une faiblesse du document.",
      "On compare la machine à la fiche en vérifiant chaque valeur par rapport à sa tolérance.",
      "Un mode opératoire se critique sur la sécurité, l'organisation interne/externe, la précision et la validation."
     ],
     "lexique": [
      {
       "terme": "Fiche de réglage",
       "def": "Document donnant les valeurs de réglage d'une machine pour chaque format."
      },
      {
       "terme": "Mode opératoire",
       "def": "Document décrivant l'ordre et la manière de réaliser une opération."
      },
      {
       "terme": "Repère",
       "def": "Marque ou graduation permettant de retrouver une position de réglage."
      },
      {
       "terme": "Butée",
       "def": "Arrêt mécanique réglé limitant ou fixant une position."
      },
      {
       "terme": "Gabarit",
       "def": "Pièce étalon servant à positionner ou contrôler un réglage."
      },
      {
       "terme": "Point clé",
       "def": "Détail d'une étape qui conditionne sa réussite, la qualité ou la sécurité."
      },
      {
       "terme": "Document maîtrisé",
       "def": "Document identifié, validé, diffusé et mis à jour selon une procédure."
      },
      {
       "terme": "Validation de format",
       "def": "Contrôle des premiers produits confirmant que les réglages sont corrects."
      }
     ]
    },
    {
     "id": "bplp-doc-tableau-bord",
     "titre": "Analyser un relevé de production et un tableau de bord de ligne",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Reconnaître la structure d'une feuille de relevé de production et d'un tableau de bord.",
      "Vérifier la cohérence des données saisies (temps, quantités, causes d'arrêt).",
      "Recalculer TRS et composantes à partir d'un relevé brut.",
      "Identifier les pertes prioritaires et les relier à des causes plausibles.",
      "Rédiger une synthèse argumentée avec propositions d'actions."
     ],
     "sections": [
      {
       "titre": "Les documents de suivi de la production",
       "contenu": "\n<p>Le suivi de la ligne produit deux types de documents :</p>\n<ul>\n<li>la <strong>feuille de relevé de production</strong> (ou rapport de poste), remplie pendant le poste, papier ou écran : quantités, arrêts avec heure de début, durée et cause, rebuts, contrôles, événements ;</li>\n<li>le <strong>tableau de bord</strong>, qui agrège ces données sur une journée, une semaine ou un mois sous forme d'indicateurs, de courbes et de Pareto, souvent affiché près de la ligne.</li>\n</ul>\n<p>À l'épreuve d'optimisation comme en entreprise, on demande au pilote d'exploiter ces documents pour <strong>mesurer</strong>, <strong>expliquer</strong> et <strong>proposer</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un tableau de bord ne vaut que par la qualité des relevés qui l'alimentent. Avant d'analyser, on vérifie toujours que les chiffres sont cohérents entre eux.</div>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "\n<table>\n<thead><tr><th>Zone de la feuille de relevé</th><th>Contenu type</th></tr></thead>\n<tbody>\n<tr><td>En-tête</td><td>Ligne, date, équipe, horaires, pilote, OF en cours, cadence nominale</td></tr>\n<tr><td>Temps</td><td>Temps d'ouverture, arrêts planifiés (pauses, réunion, nettoyage programmé)</td></tr>\n<tr><td>Journal des arrêts</td><td>Heure de début, durée, machine, code cause, commentaire</td></tr>\n<tr><td>Quantités</td><td>Compteur entrée et sortie, produits bons, rebuts par type</td></tr>\n<tr><td>Qualité</td><td>Contrôles réalisés, résultats, produits bloqués</td></tr>\n<tr><td>Observations</td><td>Événements, demandes d'intervention, consignes pour l'équipe suivante</td></tr>\n</tbody>\n</table>\n<p>Les arrêts sont classés par <strong>codes causes</strong> normalisés dans l'entreprise, par exemple : P (panne), CF (changement de format), MA (manque amont, matière ou composant), SA (saturation aval), R (réglage), N (nettoyage non planifié), Q (arrêt qualité), O (organisation, manque de personnel). Un arrêt <strong>propre</strong> est dû à l'équipement lui-même ; un arrêt <strong>induit</strong> est dû à une cause extérieure (manque de composant, aval saturé, absence d'opérateur).</p>"
      },
      {
       "titre": "Méthode d'analyse pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1. Lire l'en-tête et noter la cadence nominale et le temps d'ouverture. 2. Contrôler la cohérence : somme des arrêts inférieure au temps disponible, produits bons + rebuts = production totale, quantité produite compatible avec le temps de fonctionnement à la cadence nominale. 3. Calculer temps requis, temps de fonctionnement, temps net et temps utile, puis les trois taux et le TRS. 4. Construire le Pareto des arrêts par cause. 5. Identifier la composante la plus pénalisante et les deux ou trois causes principales. 6. Formuler des hypothèses de causes et des actions, en distinguant le curatif, le correctif et le préventif. 7. Rédiger une conclusion chiffrée.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> trois pièges classiques. Premièrement, compter une pause planifiée comme un arrêt, ce qui fait baisser artificiellement la disponibilité. Deuxièmement, utiliser la cadence réelle au lieu de la cadence nominale. Troisièmement, oublier qu'un temps net supérieur au temps de fonctionnement signale une erreur de données (cadence nominale fausse ou arrêts surestimés) : un taux de performance supérieur à 100 % est impossible.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p><strong>Relevé de poste</strong> — ligne L1, conditionnement de yaourts en pots par 4. Poste du matin 5 h – 13 h. Cadence nominale : 240 packs/min sur la conditionneuse goulot, soit un temps de cycle de 0,25 s par pack. Pause planifiée : 30 min. Nettoyage intermédiaire planifié : 20 min.</p>\n<table>\n<thead><tr><th>Début</th><th>Durée (min)</th><th>Machine</th><th>Code</th><th>Commentaire</th></tr></thead>\n<tbody>\n<tr><td>5 h 00</td><td>25</td><td>Conditionneuse</td><td>CF</td><td>Passage pots 125 g nature vers fraise</td></tr>\n<tr><td>6 h 12</td><td>8</td><td>Conditionneuse</td><td>R</td><td>Réglage scellage, opercules mal soudés</td></tr>\n<tr><td>7 h 40</td><td>15</td><td>Encartonneuse</td><td>SA</td><td>Bourrage cartons, conditionneuse arrêtée sur saturation</td></tr>\n<tr><td>9 h 05</td><td>12</td><td>Conditionneuse</td><td>MA</td><td>Manque bobine d'opercules</td></tr>\n<tr><td>10 h 30</td><td>18</td><td>Encartonneuse</td><td>SA</td><td>Bourrage cartons</td></tr>\n<tr><td>11 h 50</td><td>7</td><td>Conditionneuse</td><td>R</td><td>Réglage scellage</td></tr>\n</tbody>\n</table>\n<p>Quantités : production totale 75 600 packs ; rebuts 2 100 packs (dont 1 500 pour défaut de scellage et 600 pour démarrage). Objectif de TRS de la ligne : 75 %.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1. Cohérence.</strong> Temps d'ouverture 480 min ; arrêts planifiés 30 + 20 = 50 min ; temps requis 430 min. Arrêts non planifiés : 25 + 8 + 15 + 12 + 18 + 7 = 85 min, inférieurs au temps requis. Temps de fonctionnement : 430 − 85 = 345 min. Production maximale possible en 345 min : 345 × 240 = 82 800 packs, supérieure aux 75 600 produits : les données sont cohérentes.</p>\n<p><strong>2. Calculs.</strong></p>\n<table>\n<thead><tr><th>Grandeur</th><th>Calcul</th><th>Résultat</th></tr></thead>\n<tbody>\n<tr><td>Temps net</td><td>75 600 × 0,25 s = 18 900 s</td><td>315 min</td></tr>\n<tr><td>Temps utile</td><td>(75 600 − 2 100) × 0,25 s = 18 375 s</td><td>306,25 min</td></tr>\n<tr><td>Disponibilité</td><td>345 / 430</td><td>80,2 %</td></tr>\n<tr><td>Performance</td><td>315 / 345</td><td>91,3 %</td></tr>\n<tr><td>Qualité</td><td>306,25 / 315</td><td>97,2 %</td></tr>\n<tr><td>TRS</td><td>306,25 / 430</td><td>71,2 %</td></tr>\n</tbody>\n</table>\n<p>Le TRS de 71,2 % est inférieur à l'objectif de 75 %. La perte principale est la disponibilité (85 min).</p>\n<p><strong>3. Pareto des arrêts.</strong> Saturation aval (bourrages encartonneuse) : 33 min, soit 39 % ; changement de format : 25 min, 29 % ; réglages scellage : 15 min, 18 % ; manque opercules : 12 min, 14 %.</p>\n<p><strong>4. Interprétation.</strong> Les bourrages de l'encartonneuse sont la première cause, alors qu'ils sont enregistrés comme arrêts induits de la conditionneuse : la machine en cause est l'encartonneuse, à traiter en priorité (vérifier la qualité des cartons, le réglage du magasin, la capacité de l'accumulation entre les deux machines). Les réglages du scellage, ajoutés aux 1 500 packs rebutés pour défaut de soudure, montrent un problème unique qui touche à la fois la disponibilité et la qualité. Le manque d'opercules relève de l'organisation de l'approvisionnement de bord de ligne.</p>\n<p><strong>5. Propositions.</strong> Ouvrir une analyse de causes sur l'encartonneuse avec la maintenance ; contrôler la température réelle des mâchoires de scellage et la référence du lot d'opercules ; mettre en place un seuil d'alerte de bobines d'opercules ; appliquer une démarche de réduction du temps de changement de format. Si les bourrages et les réglages de scellage étaient supprimés, le gain de 48 min de fonctionnement porterait le TRS au-dessus de l'objectif.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une synthèse de poste efficace tient en quelques lignes : le TRS et sa composante la plus faible, les deux ou trois causes principales chiffrées, les actions engagées avec un responsable. C'est ce qui est présenté en réunion courte le lendemain matin.</div>"
      },
      {
       "titre": "Lire un tableau de bord hebdomadaire",
       "contenu": "\n<p>Le tableau de bord d'une semaine présente généralement une courbe du TRS journalier avec la ligne d'objectif, un histogramme empilé des pertes (disponibilité, performance, qualité), un Pareto des causes d'arrêt de la semaine et une liste des actions en cours.</p>\n<table>\n<thead><tr><th>Jour</th><th>TRS</th><th>Disponibilité</th><th>Performance</th><th>Qualité</th><th>Événement noté</th></tr></thead>\n<tbody>\n<tr><td>Lundi</td><td>71 %</td><td>80 %</td><td>91 %</td><td>97 %</td><td>Deux changements de format</td></tr>\n<tr><td>Mardi</td><td>78 %</td><td>86 %</td><td>93 %</td><td>98 %</td><td>—</td></tr>\n<tr><td>Mercredi</td><td>64 %</td><td>72 %</td><td>92 %</td><td>97 %</td><td>Panne encartonneuse 1 h 10</td></tr>\n<tr><td>Jeudi</td><td>76 %</td><td>85 %</td><td>92 %</td><td>97 %</td><td>—</td></tr>\n<tr><td>Vendredi</td><td>70 %</td><td>86 %</td><td>85 %</td><td>96 %</td><td>Nouveau lot de cartons</td></tr>\n</tbody>\n</table>\n<p>Lecture : le TRS moyen de la semaine reste sous l'objectif de 75 %. Les journées faibles ont des causes différentes. Lundi et mercredi, c'est la disponibilité qui chute (changements de format, panne). Vendredi, la disponibilité est bonne mais la performance tombe à 85 % : cette perte sans arrêt enregistré, le jour de l'arrivée d'un nouveau lot de cartons, fait penser à des micro-arrêts à l'encartonneuse liés à la qualité des cartons. On vérifie en observant la ligne et en contrôlant les cartons (dimensions, rigidité, découpe des rabats) avant de solliciter le fournisseur.</p>\n<p>Cette lecture par composante est ce qui distingue une analyse d'un simple constat. Écrire « le TRS est mauvais vendredi » n'apporte rien ; écrire « la performance perd 7 points vendredi sans arrêt enregistré, en lien probable avec le nouveau lot de cartons, à vérifier par une observation de l'encartonneuse » oriente l'action.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> devant un tableau de bord, on cherche quelle composante explique chaque écart à l'objectif, puis quel événement explique cette composante. Une hypothèse se formule avec la vérification qui permettra de la confirmer.</div>"
      }
     ],
     "points_cles": [
      "La feuille de relevé enregistre arrêts, quantités, rebuts et événements ; le tableau de bord les agrège.",
      "On vérifie la cohérence des données avant toute analyse.",
      "Les arrêts planifiés sont déduits du temps d'ouverture pour obtenir le temps requis.",
      "Un taux de performance supérieur à 100 % révèle une erreur de données.",
      "Un arrêt induit (saturation aval, manque amont) doit être attribué à la machine réellement en cause.",
      "Un même problème peut affecter à la fois la disponibilité et la qualité.",
      "La synthèse donne le TRS, la composante la plus faible, les causes principales chiffrées et les actions."
     ],
     "lexique": [
      {
       "terme": "Relevé de production",
       "def": "Document de poste où sont notés quantités, arrêts, rebuts et événements."
      },
      {
       "terme": "Tableau de bord",
       "def": "Présentation synthétique d'indicateurs de performance suivis dans le temps."
      },
      {
       "terme": "Code cause",
       "def": "Code normalisé qui classe un arrêt selon son origine."
      },
      {
       "terme": "Arrêt propre",
       "def": "Arrêt dû à une défaillance ou à une intervention sur l'équipement lui-même."
      },
      {
       "terme": "Arrêt induit",
       "def": "Arrêt dû à une cause extérieure à l'équipement : manque amont, saturation aval, organisation."
      },
      {
       "terme": "Saturation aval",
       "def": "Arrêt d'une machine parce que la suivante ne peut plus recevoir de produits."
      },
      {
       "terme": "Rebut de démarrage",
       "def": "Produits non conformes générés pendant la mise en route d'une production."
      },
      {
       "terme": "Objectif de TRS",
       "def": "Valeur cible de TRS fixée pour une ligne sur une période."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Documents techniques, de sécurité et de qualité",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bplp-doc-dossier-technique",
     "titre": "Lire le dossier technique d'une machine : schémas et grafcet",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Situer les documents d'un dossier technique de machine et savoir lequel consulter selon la question.",
      "Lire un schéma pneumatique et relier chaque composant à sa fonction.",
      "Suivre un circuit sur un schéma électrique de commande à l'aide des repères et renvois.",
      "Relier un grafcet aux entrées et sorties de la table des variables.",
      "Utiliser ces documents pour expliquer un dysfonctionnement."
     ],
     "sections": [
      {
       "titre": "Le dossier technique d'une machine",
       "contenu": "\n<p>Chaque machine est livrée avec une <strong>notice d'instructions</strong> et un <strong>dossier technique</strong>, complété au fil des modifications. On y trouve :</p>\n<table>\n<thead><tr><th>Document</th><th>Question à laquelle il répond</th></tr></thead>\n<tbody>\n<tr><td>Notice d'instructions</td><td>Comment utiliser, régler, nettoyer et entretenir la machine en sécurité ?</td></tr>\n<tr><td>Plan d'ensemble et nomenclature</td><td>De quels sous-ensembles et pièces est-elle composée ?</td></tr>\n<tr><td>Schéma pneumatique ou hydraulique</td><td>Comment l'énergie fluide est-elle distribuée et commandée ?</td></tr>\n<tr><td>Schéma électrique</td><td>Comment sont alimentés et commandés moteurs, capteurs et automate ?</td></tr>\n<tr><td>Table des entrées-sorties et des variables</td><td>Quel capteur ou actionneur correspond à quelle adresse ?</td></tr>\n<tr><td>Grafcet, GEMMA, analyse fonctionnelle</td><td>Dans quel ordre et sous quelles conditions la machine agit-elle ?</td></tr>\n<tr><td>Liste des alarmes</td><td>Que signifie un message et quelle est l'action conseillée ?</td></tr>\n<tr><td>Plan de maintenance préventive</td><td>Que faut-il contrôler, à quelle fréquence ?</td></tr>\n</tbody>\n</table>\n<p>Un même composant porte le même <strong>repère</strong> dans tous ces documents, par exemple 1V2 pour un distributeur, 1B1 pour un capteur, KM3 pour un contacteur. C'est ce repère qui permet de passer d'un document à l'autre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour analyser un dysfonctionnement, on part de l'alarme, on identifie les repères concernés dans la table des variables, on situe l'étape du grafcet où la machine s'est arrêtée, puis on suit les schémas pour localiser le composant.</div>"
      },
      {
       "titre": "Lire le schéma pneumatique",
       "contenu": "\n<p>Le schéma pneumatique se lit de bas en haut : en bas l'alimentation (groupe de conditionnement), au milieu les distributeurs et régleurs, en haut les actionneurs. Les composants d'une même chaîne portent un numéro de chaîne : 1A1 (vérin de la chaîne 1), 1V1 (distributeur de la chaîne 1), 1V2 et 1V3 (régleurs de débit), 1B1 et 1B2 (capteurs de fin de course du vérin 1). Les électroaimants des distributeurs portent un repère électrique (par exemple 1Y1, 1Y2) qu'on retrouve sur le schéma électrique et dans la table des sorties.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour chaque actionneur du schéma, remplir une ligne de tableau : repère, type (vérin simple ou double effet, ventouse, moteur), distributeur qui le commande (type, monostable ou bistable, électroaimants), réglage de vitesse (à l'échappement ou à l'alimentation, sens freiné), capteurs associés, position au repos. Ce tableau suffit ensuite à répondre à presque toutes les questions sur le comportement de la machine.</div>"
      },
      {
       "titre": "Lire le schéma électrique de commande",
       "contenu": "\n<p>Le schéma électrique est découpé en <strong>folios</strong> (pages) numérotés, chacun divisé en <strong>colonnes</strong> repérées en haut. On y trouve successivement : l'alimentation générale et le sectionneur, la puissance des moteurs (protections, contacteurs, variateurs), l'alimentation 24 V, les circuits de sécurité (arrêts d'urgence, interrupteurs de porte, module de sécurité), les cartes d'entrées et de sorties de l'automate.</p>\n<p>Les <strong>renvois</strong> indiquent où se poursuit un fil ou où se trouve un contact : sous la bobine d'un contacteur KM3 dessinée au folio 12, une petite table indique par exemple que son contact de puissance est au folio 5 colonne 4. Les repères normalisés usuels sont : Q pour les appareils de protection et de sectionnement, KM pour les contacteurs, M pour les moteurs, B pour les capteurs, S pour les boutons, H pour les voyants, Y pour les électrovannes, A pour les ensembles (automate, variateur).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un schéma électrique est toujours dessiné hors tension, organes au repos. Un contact représenté fermé est un contact qui s'ouvre quand l'organe est actionné. Ne déduisez pas l'état réel d'un contact de son dessin sans tenir compte de l'état de la machine. Et toute vérification sous tension dans l'armoire est réservée aux personnes habilitées.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p><strong>Poste d'éjection des bouteilles sans bouchon</strong>, en sortie de boucheuse.</p>\n<p><em>Schéma pneumatique</em> : groupe de conditionnement 0Z1 réglé à 6 bar ; distributeur 1V1, 5/2 monostable à commande électrique 1Y1 et rappel par ressort ; régleurs de débit 1V2 et 1V3 montés à l'échappement sur les deux orifices du vérin ; vérin double effet 1A1, alésage 32 mm, course 50 mm, avec capteurs magnétiques 1B1 (tige rentrée) et 1B2 (tige sortie).</p>\n<p><em>Table des variables</em> :</p>\n<table>\n<thead><tr><th>Repère</th><th>Adresse</th><th>Désignation</th></tr></thead>\n<tbody>\n<tr><td>B10</td><td>%I1.0</td><td>Cellule détection bouchon absent</td></tr>\n<tr><td>B11</td><td>%I1.1</td><td>Cellule bouteille devant l'éjecteur</td></tr>\n<tr><td>1B1</td><td>%I1.2</td><td>Éjecteur rentré</td></tr>\n<tr><td>1B2</td><td>%I1.3</td><td>Éjecteur sorti</td></tr>\n<tr><td>1Y1</td><td>%Q2.0</td><td>Électrovanne sortie éjecteur</td></tr>\n</tbody>\n</table>\n<p><em>Grafcet du poste</em> : étape 0 (attente), transition « mémoire bouteille défectueuse ET B11 » ; étape 1 action 1Y1 ; transition 1B2 ; étape 2 (pas d'action, retour du vérin par le ressort du distributeur), transition 1B1 ; retour à l'étape 0. Une temporisation de 1 s sur l'étape 1 déclenche l'alarme « défaut sortie éjecteur » si 1B2 n'est pas atteint.</p>\n<p><em>Symptôme</em> : alarme « défaut sortie éjecteur » ; la LED de la sortie %Q2.0 s'allume, le vérin sort lentement et n'atteint pas sa fin de course en moins de 1 s ; les bouteilles défectueuses passent.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1. Fonctionnement normal.</strong> Lorsqu'une bouteille sans bouchon est détectée par B10, l'automate la mémorise ; quand elle arrive devant l'éjecteur (B11), il active 1Y1 : le distributeur 1V1 bascule, le vérin 1A1 sort et pousse la bouteille dans le bac de rebut. À l'arrivée en 1B2, 1Y1 est désactivé, le ressort ramène le distributeur, le vérin rentre jusqu'à 1B1.</p>\n<p><strong>2. Localisation.</strong> La LED de %Q2.0 allumée prouve que l'automate émet l'ordre : la partie commande n'est pas en cause. Le vérin sort, donc 1Y1 reçoit bien la tension et le distributeur bascule. Le problème est la <strong>lenteur</strong> du mouvement de sortie. Sur ce montage à l'échappement, la vitesse de sortie est fixée par le régleur placé côté tige, qui freine l'air sortant de la chambre avant.</p>\n<p><strong>3. Hypothèses classées.</strong></p>\n<table>\n<thead><tr><th>Hypothèse</th><th>Vérification</th><th>Niveau d'intervention</th></tr></thead>\n<tbody>\n<tr><td>Régleur côté tige trop fermé (après un réglage récent ?)</td><td>Comparer à la position repérée ou à la fiche</td><td>Pilote, si autorisé par la consigne</td></tr>\n<tr><td>Pression trop basse</td><td>Lire le manomètre de 0Z1 (6 bar attendus)</td><td>Pilote</td></tr>\n<tr><td>Silencieux d'échappement colmaté</td><td>Observation, remplacement</td><td>Maintenance de premier niveau</td></tr>\n<tr><td>Frottement mécanique, joint du vérin usé</td><td>Essai à vide, effort de déplacement</td><td>Maintenance</td></tr>\n</tbody>\n</table>\n<p><strong>4. Conséquence qualité.</strong> Pendant la durée du défaut, des bouteilles sans bouchon ont pu partir vers l'étiqueteuse. Il faut bloquer et trier la production depuis l'apparition de l'alarme.</p>\n<p><strong>5. Conclusion.</strong> Défaut localisé sur la partie opérative pneumatique ; vérification immédiate de la pression et du régleur ; si le problème persiste, demande d'intervention précisant ces constats ; en attendant, contrôle visuel en sortie de boucheuse comme marche dégradée prévue.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les techniciens apprécient qu'on leur indique ce qui a déjà été vérifié (« sortie automate active, électrovanne commandée, pression 6 bar ») : cela élimine d'emblée la moitié des hypothèses et réduit le temps de réparation.</div>"
      },
      {
       "titre": "Lire la liste des alarmes et la notice",
       "contenu": "\n<p>La <strong>liste des alarmes</strong> du dossier technique donne pour chaque message son numéro, son texte, sa cause probable, ses conséquences (arrêt immédiat, arrêt en fin de cycle, simple avertissement) et l'action conseillée. Elle fait souvent la différence entre une alarme traitée en deux minutes et une heure de recherche.</p>\n<table>\n<thead><tr><th>N°</th><th>Message</th><th>Cause probable</th><th>Réaction machine</th><th>Action conseillée</th></tr></thead>\n<tbody>\n<tr><td>A112</td><td>Défaut sortie éjecteur</td><td>Fin de course 1B2 non atteinte en 1 s</td><td>Arrêt fin de cycle</td><td>Vérifier pression, régleur, capteur 1B2</td></tr>\n<tr><td>A115</td><td>Bac de rebut plein</td><td>Capteur de niveau du bac actionné</td><td>Avertissement puis arrêt</td><td>Vider le bac, compter les rebuts</td></tr>\n<tr><td>A130</td><td>Porte de protection ouverte</td><td>Interrupteur de sécurité ouvert</td><td>Arrêt immédiat</td><td>Fermer la porte, réarmer</td></tr>\n</tbody>\n</table>\n<p>La <strong>notice d'instructions</strong>, quant à elle, est le document de référence pour l'utilisation en sécurité : elle précise les modes de fonctionnement prévus, les réglages autorisés à l'utilisateur, les opérations de nettoyage et d'entretien, les risques résiduels que les protections ne suppriment pas et les équipements de protection à porter. Une opération décrite comme réservée à du personnel qualifié dans la notice ne peut pas être réalisée par le personnel de conduite sans formation et autorisation.</p>"
      }
     ],
     "points_cles": [
      "Le dossier technique réunit notice, plans, schémas, table des variables, grafcet, alarmes et plan de maintenance.",
      "Un même repère identifie un composant dans tous les documents.",
      "Le schéma pneumatique se lit de l'alimentation vers les actionneurs, chaîne par chaîne.",
      "Le schéma électrique se parcourt par folios, colonnes et renvois.",
      "Les schémas sont dessinés au repos et hors tension.",
      "Le grafcet indique l'étape et la transition où la machine attend : point de départ du diagnostic.",
      "On localise un défaut en vérifiant successivement ordre automate, préactionneur, énergie, actionneur."
     ],
     "lexique": [
      {
       "terme": "Dossier technique",
       "def": "Ensemble des documents décrivant la constitution et le fonctionnement d'une machine."
      },
      {
       "terme": "Notice d'instructions",
       "def": "Document du fabricant décrivant l'utilisation, le réglage et l'entretien en sécurité."
      },
      {
       "terme": "Repère",
       "def": "Code identifiant un composant de façon unique dans tous les documents."
      },
      {
       "terme": "Folio",
       "def": "Page numérotée d'un schéma électrique."
      },
      {
       "terme": "Renvoi",
       "def": "Indication du folio et de la colonne où se poursuit un circuit ou se trouve un contact."
      },
      {
       "terme": "Électroaimant",
       "def": "Bobine qui actionne un distributeur électropneumatique."
      },
      {
       "terme": "Capteur magnétique",
       "def": "Capteur fixé sur un vérin qui détecte l'aimant du piston."
      },
      {
       "terme": "Temporisation de surveillance",
       "def": "Délai au-delà duquel l'absence d'un événement attendu déclenche une alarme."
      }
     ]
    },
    {
     "id": "bplp-doc-fds-consignation",
     "titre": "Exploiter une fiche de données de sécurité et une fiche de consignation",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Connaître les seize rubriques d'une fiche de données de sécurité et repérer celles utiles en conduite.",
      "Interpréter pictogrammes, mentions de danger et conseils de prudence.",
      "Lire une fiche de consignation d'équipement et vérifier qu'elle couvre toutes les énergies.",
      "Croiser les deux documents pour préparer une intervention en sécurité.",
      "Rédiger une analyse modèle des risques d'une intervention de nettoyage."
     ],
     "sections": [
      {
       "titre": "Deux documents de sécurité indispensables",
       "contenu": "\n<p>Pour intervenir sur une ligne, notamment lors d'un nettoyage, d'un changement de produit chimique ou d'un incident, le pilote s'appuie sur deux documents :</p>\n<ul>\n<li>la <strong>fiche de données de sécurité</strong> (FDS), fournie par le fabricant de tout produit chimique dangereux (détergent, désinfectant, lubrifiant, solvant, matière première). Son contenu est fixé par le règlement européen <strong>REACH</strong> (règlement (CE) n° 1907/2006, annexe II) ; l'étiquetage et les pictogrammes relèvent du règlement <strong>CLP</strong> (règlement (CE) n° 1272/2008) ;</li>\n<li>la <strong>fiche de consignation</strong> (ou fiche de mise en sécurité) propre à chaque équipement, établie par l'entreprise, qui liste ses sources d'énergie et les points où les séparer, les condamner et les vérifier.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la FDS dit « de quoi le produit est dangereux et comment s'en protéger » ; la fiche de consignation dit « comment rendre la machine inoffensive ». Une intervention de nettoyage chimique d'une machine exige les deux.</div>"
      },
      {
       "titre": "Structure et vocabulaire de la FDS",
       "contenu": "\n<p>La FDS comporte <strong>seize rubriques</strong> dans un ordre fixe. Celles que le pilote consulte le plus souvent :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Intitulé</th><th>Utilité en conduite</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Identification du produit et de la société</td><td>Vérifier qu'il s'agit du bon produit ; numéro d'appel d'urgence</td></tr>\n<tr><td>2</td><td>Identification des dangers</td><td>Pictogrammes, mention d'avertissement, mentions de danger H, conseils de prudence P</td></tr>\n<tr><td>4</td><td>Premiers secours</td><td>Conduite à tenir en cas de contact, d'inhalation, d'ingestion</td></tr>\n<tr><td>6</td><td>Mesures en cas de dispersion accidentelle</td><td>Comment contenir et ramasser une fuite</td></tr>\n<tr><td>7</td><td>Manipulation et stockage</td><td>Incompatibilités, conditions de stockage</td></tr>\n<tr><td>8</td><td>Contrôles de l'exposition, protection individuelle</td><td>EPI à porter : gants (matière), lunettes, protection respiratoire</td></tr>\n<tr><td>10</td><td>Stabilité et réactivité</td><td>Produits à ne jamais mélanger</td></tr>\n<tr><td>13</td><td>Considérations relatives à l'élimination</td><td>Gestion des déchets et des emballages</td></tr>\n</tbody>\n</table>\n<p>Les autres rubriques traitent de la composition (3), de la lutte contre l'incendie (5), des propriétés physiques et chimiques (9), de la toxicologie (11), de l'écotoxicité (12), du transport (14), de la réglementation (15) et des autres informations (16).</p>\n<p>Les <strong>mentions de danger</strong> sont codées H suivies de trois chiffres (H2.. dangers physiques, H3.. dangers pour la santé, H4.. dangers pour l'environnement) ; les <strong>conseils de prudence</strong> sont codés P. La <strong>mention d'avertissement</strong> est « Danger » (catégories les plus graves) ou « Attention ».</p>"
      },
      {
       "titre": "Méthode de lecture croisée",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une intervention qui associe un produit chimique et une machine. 1. FDS rubrique 1 : vérifier la correspondance entre le nom du produit sur le bidon et la FDS, et la date de la FDS. 2. Rubrique 2 : lister pictogrammes et mentions H, en déduire les dangers (corrosion, toxicité, inflammabilité). 3. Rubriques 7 et 10 : repérer les incompatibilités avec les autres produits utilisés sur la ligne. 4. Rubrique 8 : définir les EPI précis (type de gants, lunettes ou écran facial). 5. Rubriques 4 et 6 : préparer la conduite à tenir en cas d'accident (douche, rince-œil, kit absorbant). 6. Fiche de consignation : vérifier que toutes les énergies de la machine sont listées, avec un point de séparation, un moyen de condamnation, un moyen de dissipation et une vérification. 7. Conclure par une liste ordonnée de mesures avant, pendant et après l'intervention.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les pièges classiques sont : une FDS ancienne ne correspondant plus à la formulation du produit ; des gants « de protection » génériques alors que la rubrique 8 impose une matière précise (nitrile, butyle, néoprène) ; l'oubli d'une énergie sur la fiche de consignation (énergie thermique d'un tunnel de rétraction, gravité d'une charge en hauteur, eau chaude d'un circuit) ; et le mélange de produits incompatibles, comme un produit chloré et un acide, qui dégage un gaz toxique.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "\n<p><strong>Situation</strong> : nettoyage hebdomadaire de la trémie et de la vis doseuse d'une remplisseuse de sauces, avec un détergent alcalin moussant appliqué au canon à mousse, puis rinçage.</p>\n<p><strong>Extraits de la FDS du détergent</strong> : rubrique 2 : pictogramme corrosion (GHS05), mention d'avertissement « Danger », H314 « Provoque de graves brûlures de la peau et de graves lésions des yeux » ; P280 « Porter des gants de protection, des vêtements de protection, un équipement de protection des yeux et du visage ». Rubrique 3 : hydroxyde de sodium entre 5 et 10 %. Rubrique 8 : gants en caoutchouc nitrile ou butyle, lunettes étanches ou écran facial, vêtements de protection résistant aux produits chimiques. Rubrique 10 : réagit violemment avec les acides ; ne pas mélanger avec des produits chlorés. Rubrique 4 : en cas de contact avec les yeux, rincer immédiatement et abondamment à l'eau pendant plusieurs minutes et consulter un médecin.</p>\n<p><strong>Fiche de consignation FC-REMP-02</strong> de la remplisseuse :</p>\n<table>\n<thead><tr><th>Énergie</th><th>Point de séparation</th><th>Condamnation</th><th>Dissipation et vérification</th></tr></thead>\n<tbody>\n<tr><td>Électrique</td><td>Sectionneur Q0 armoire remplisseuse</td><td>Cadenas sur poignée</td><td>Essai de démarrage au pupitre</td></tr>\n<tr><td>Pneumatique</td><td>Vanne 0V1 du groupe de conditionnement</td><td>Cadenas sur vanne</td><td>Mise à l'échappement, manomètre à 0</td></tr>\n</tbody>\n</table>\n<p>Information du dossier technique : la trémie est équipée d'une double enveloppe chauffée par eau chaude à 70 °C, alimentée par une vanne manuelle V-EC3, et la vis doseuse est entraînée par un servomoteur avec frein.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1. Dangers du produit.</strong> Le détergent est corrosif de catégorie grave (Danger, H314) en raison de la soude qu'il contient : risque de brûlures cutanées et de lésions oculaires, aggravé par la projection de mousse. Incompatibilités : ne jamais l'utiliser en même temps qu'un détergent acide ou un désinfectant chloré.</p>\n<p><strong>2. Protection.</strong> Gants en nitrile ou butyle à manchette longue, lunettes étanches ou écran facial (la projection de mousse rend l'écran facial préférable), tablier ou combinaison résistant aux produits chimiques, bottes. Vérifier l'accès à une douche de sécurité ou à un rince-œil avant de commencer.</p>\n<p><strong>3. Critique de la fiche de consignation.</strong> Elle couvre l'énergie électrique et l'énergie pneumatique, mais <strong>oublie l'énergie thermique</strong> : la double enveloppe de la trémie est chauffée à 70 °C. Il faut ajouter : fermeture et condamnation de la vanne V-EC3, attente du refroidissement et vérification de la température de paroi avant contact. Par ailleurs, la vérification électrique par essai de démarrage doit porter sur le mouvement de la vis doseuse elle-même : la consignation du sectionneur Q0 doit couper aussi l'alimentation du servovariateur, ce qui est à confirmer sur le schéma électrique.</p>\n<p><strong>4. Déroulement proposé.</strong> Avant : vide de ligne, consignation électrique, pneumatique et thermique avec cadenas personnels, vérifications, balisage, mise en place des EPI. Pendant : application de la mousse en respectant le temps de contact indiqué par le fournisseur, rinçage, aucun produit acide à proximité. Après : contrôle visuel de propreté, contrôle de l'absence de résidu de détergent si la procédure le prévoit (par exemple contrôle du pH de l'eau de rinçage), remontage des protecteurs, déconsignation, enregistrement du nettoyage.</p>\n<p><strong>5. Conclusion.</strong> L'intervention peut être réalisée après mise à jour de la fiche de consignation (ajout de l'énergie thermique) validée par le responsable sécurité ; en attendant, la consignation thermique est ajoutée au cas par cas et signalée par écrit.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les FDS doivent être accessibles aux salariés à proximité des postes d'utilisation. Lors de l'arrivée d'un nouveau produit de nettoyage, le pilote vérifie que la FDS est disponible et que les EPI indiqués en rubrique 8 sont présents avant toute utilisation.</div>"
      },
      {
       "titre": "L'étiquette du produit et le stockage",
       "contenu": "\n<p>Sur le terrain, la première information disponible est l'<strong>étiquette</strong> du contenant, conforme au règlement CLP : nom du produit, pictogrammes de danger en losange à bord rouge, mention d'avertissement, mentions H et conseils P, coordonnées du fournisseur. Un produit transvasé dans un autre récipient doit être réétiqueté : un pulvérisateur sans étiquette est une source classique d'accident.</p>\n<p>Le stockage suit les rubriques 7 et 10 de la FDS : séparation des produits incompatibles (acides et bases, comburants et inflammables), bacs de rétention de capacité suffisante, local ventilé, quantités limitées en bord de ligne.</p>"
      }
     ],
     "points_cles": [
      "La FDS comporte seize rubriques dans un ordre fixé par le règlement REACH.",
      "Rubriques clés en conduite : 1 identification, 2 dangers, 4 premiers secours, 6 dispersion, 7 stockage, 8 EPI, 10 incompatibilités, 13 élimination.",
      "Les mentions H décrivent les dangers, les conseils P les précautions ; « Danger » signale les catégories les plus graves.",
      "La rubrique 8 précise la matière des gants et le type de protection oculaire.",
      "La fiche de consignation liste toutes les énergies avec séparation, condamnation, dissipation et vérification.",
      "Les énergies oubliées le plus souvent sont thermiques, gravitaires et résiduelles.",
      "On ne mélange jamais un produit alcalin ou chloré avec un acide."
     ],
     "lexique": [
      {
       "terme": "Fiche de données de sécurité",
       "def": "Document en seize rubriques décrivant les dangers d'un produit chimique et les mesures de protection."
      },
      {
       "terme": "REACH",
       "def": "Règlement européen sur l'enregistrement, l'évaluation et l'autorisation des substances chimiques."
      },
      {
       "terme": "CLP",
       "def": "Règlement européen sur la classification, l'étiquetage et l'emballage des produits chimiques."
      },
      {
       "terme": "Mention de danger",
       "def": "Phrase codée H décrivant la nature d'un danger."
      },
      {
       "terme": "Conseil de prudence",
       "def": "Phrase codée P décrivant une mesure de prévention ou d'intervention."
      },
      {
       "terme": "Mention d'avertissement",
       "def": "Mot « Danger » ou « Attention » indiquant le niveau de gravité."
      },
      {
       "terme": "Fiche de consignation",
       "def": "Document listant les énergies d'un équipement et les opérations pour le mettre en sécurité."
      },
      {
       "terme": "Incompatibilité",
       "def": "Propriété de deux produits qui réagissent dangereusement entre eux."
      },
      {
       "terme": "Double enveloppe",
       "def": "Paroi creuse d'une cuve dans laquelle circule un fluide de chauffage ou de refroidissement."
      }
     ]
    },
    {
     "id": "bplp-doc-carte-controle-nc",
     "titre": "Interpréter un plan de surveillance, une carte de contrôle et une fiche de non-conformité",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Lire un plan de surveillance : caractéristiques, spécifications, moyens, fréquences, réactions.",
      "Interpréter une carte de contrôle remplie et repérer les situations hors contrôle.",
      "Calculer un indice de capabilité à partir des données d'une carte.",
      "Analyser une fiche de non-conformité et la compléter de façon pertinente.",
      "Rédiger une conclusion qualité argumentée à partir de ces trois documents."
     ],
     "sections": [
      {
       "titre": "Les documents de la maîtrise de la qualité en production",
       "contenu": "\n<p>La qualité d'une production se pilote à l'aide de trois documents liés :</p>\n<ul>\n<li>le <strong>plan de surveillance</strong> (ou plan de contrôle) définit, pour chaque caractéristique à surveiller, la spécification, le moyen de contrôle, la taille et la fréquence de l'échantillonnage, l'enregistrement et la réaction en cas d'écart ;</li>\n<li>la <strong>carte de contrôle</strong> enregistre les résultats au fil du temps et permet de décider d'agir ou non ;</li>\n<li>la <strong>fiche de non-conformité</strong> (FNC) trace un écart constaté, le traitement des produits et les actions engagées.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le plan de surveillance est la règle, la carte de contrôle est la preuve que la règle est appliquée, la fiche de non-conformité est la trace de ce qui s'est passé quand la règle n'a pas suffi.</div>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "\n<table>\n<thead><tr><th>Colonne du plan de surveillance</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Caractéristique</td><td>Grandeur surveillée (masse, couple de bouchage, position d'étiquette, lisibilité du lot)</td></tr>\n<tr><td>Classe</td><td>Critique, majeure, mineure, selon l'impact sur la sécurité, la réglementation ou le client</td></tr>\n<tr><td>Spécification</td><td>Valeur nominale et tolérances, ou critère d'acceptation</td></tr>\n<tr><td>Moyen</td><td>Instrument, contrôleur automatique, contrôle visuel avec référentiel d'aspect</td></tr>\n<tr><td>Échantillonnage</td><td>Taille et fréquence (5 produits toutes les 30 min, 100 % automatique)</td></tr>\n<tr><td>Enregistrement</td><td>Carte de contrôle, feuille de relevé, enregistrement automatique</td></tr>\n<tr><td>Réaction</td><td>Ce qu'il faut faire en cas de résultat hors limites : régler, bloquer, trier, alerter</td></tr>\n</tbody>\n</table>\n<p>Sur la carte de contrôle, on retrouve la <strong>ligne centrale</strong>, les <strong>limites de contrôle</strong> (LSC, LIC), parfois des <strong>limites de surveillance</strong> plus resserrées, les points d'échantillons et une zone d'annotations pour noter les actions. La fiche de non-conformité comporte typiquement : identification (produit, lot, ligne, date), description de l'écart, quantités concernées, action immédiate, décision sur le produit, analyse des causes, actions correctives et vérification de leur efficacité.</p>"
      },
      {
       "titre": "Méthode de lecture et pièges",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1. Dans le plan de surveillance, repérer la caractéristique concernée, sa classe, sa tolérance et la réaction prévue. 2. Sur la carte, vérifier que la fréquence de prélèvement a été respectée (pas de trou dans les horaires). 3. Appliquer les règles de pilotage : points hors limites, séries du même côté, tendances, et observer séparément la carte des moyennes et celle des étendues. 4. Pour chaque situation hors contrôle, vérifier qu'une action est annotée et qu'elle correspond à la réaction prévue. 5. Si demandé, estimer σ et calculer Cp et Cpk. 6. Dans la FNC, vérifier que la quantité concernée est correctement délimitée (depuis le dernier contrôle conforme) et que les causes et actions sont cohérentes. 7. Conclure : maîtrise du procédé, conformité des produits livrés, actions à compléter.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> trois confusions fréquentes. Confondre limites de contrôle et tolérances : un point peut être hors limite de contrôle tout en restant dans la tolérance, il signale une cause spéciale à traiter avant qu'elle ne produise du non-conforme. Délimiter une non-conformité à partir de l'heure de détection au lieu de l'heure du dernier contrôle conforme. Écrire « opérateur inattentif » comme cause dans une FNC : c'est un constat, pas une cause racine.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "\n<p><strong>Plan de surveillance, ligne de flacons de sirop 150 mL, extrait</strong> : caractéristique « masse nette », classe majeure (réglementation des préemballages), nominal 180 g, tolérances 176 g à 184 g, balance étalonnée au 0,1 g, 5 flacons toutes les 30 min, carte moyenne-étendue. Réaction : point hors limites de contrôle, régler le doseur et reprendre un échantillon ; masse hors tolérance, bloquer la production depuis le dernier contrôle conforme et ouvrir une FNC.</p>\n<p>Limites de la carte calculées sur la période de référence : carte des moyennes, ligne centrale 180,0 g, LSC 181,2 g, LIC 178,8 g ; carte des étendues, R̄ = 2,0 g, LSC 4,2 g.</p>\n<p><strong>Relevés du poste</strong> :</p>\n<table>\n<thead><tr><th>Heure</th><th>Moyenne x̄ (g)</th><th>Étendue R (g)</th><th>Annotation</th></tr></thead>\n<tbody>\n<tr><td>6 h 00</td><td>180,1</td><td>1,8</td><td>—</td></tr>\n<tr><td>6 h 30</td><td>180,3</td><td>2,1</td><td>—</td></tr>\n<tr><td>7 h 00</td><td>180,4</td><td>1,9</td><td>—</td></tr>\n<tr><td>7 h 30</td><td>180,6</td><td>2,2</td><td>—</td></tr>\n<tr><td>8 h 00</td><td>180,7</td><td>2,0</td><td>—</td></tr>\n<tr><td>8 h 30</td><td>180,9</td><td>2,3</td><td>—</td></tr>\n<tr><td>9 h 00</td><td>181,1</td><td>2,1</td><td>—</td></tr>\n<tr><td>10 h 00</td><td>181,6</td><td>5,1</td><td>Réglage doseur</td></tr>\n</tbody>\n</table>\n<p><strong>Fiche de non-conformité n° 118</strong>, ouverte à 10 h 15 : « Masse trop élevée sur le contrôle de 10 h, un flacon à 184,8 g. Quantité bloquée : production de 10 h 00 à 10 h 15. Cause : opérateur n'a pas réagi. Action : rappel à l'opérateur. »</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1. Lecture de la carte des moyennes.</strong> De 6 h à 9 h, les sept moyennes augmentent à chaque prélèvement (180,1 puis 180,3, 180,4, 180,6, 180,7, 180,9, 181,1) : c'est une <strong>tendance</strong> de sept points consécutifs, signal d'une dérive progressive. Elle aurait dû déclencher une action dès 9 h, bien que tous les points soient encore dans les limites de contrôle. Le prélèvement de 9 h 30 est absent : la fréquence n'a pas été respectée. À 10 h, la moyenne de 181,6 g dépasse la LSC de 181,2 g.</p>\n<p><strong>2. Lecture de la carte des étendues.</strong> L'étendue de 5,1 g à 10 h dépasse la LSC de 4,2 g : la dispersion a aussi augmenté, ce qui oriente vers une instabilité du doseur (encrassement d'une buse, usure d'un joint de piston doseur) plutôt que vers un simple décentrage.</p>\n<p><strong>3. Capabilité sur la période stable.</strong> σ ≈ R̄ / d<sub>2</sub> = 2,0 / 2,326 ≈ 0,86 g. Cp = (184 − 176) / (6 × 0,86) ≈ 8 / 5,16 ≈ 1,55. Le procédé est capable lorsqu'il est centré ; la non-conformité vient de la dérive non traitée, pas d'une incapacité du procédé.</p>\n<p><strong>4. Critique de la FNC.</strong></p>\n<ul>\n<li>Délimitation insuffisante : le dernier contrôle conforme et sous contrôle date de 9 h ; compte tenu du prélèvement manquant de 9 h 30 et de la tendance, la production doit être bloquée <strong>depuis 9 h</strong> et non depuis 10 h.</li>\n<li>Cause non pertinente : « l'opérateur n'a pas réagi » est un constat. Les causes à analyser sont techniques (pourquoi le doseur dérive-t-il ?) et organisationnelles (pourquoi la tendance n'a-t-elle pas été détectée, pourquoi le prélèvement de 9 h 30 a-t-il manqué ?).</li>\n<li>Action inefficace : un rappel individuel ne supprime aucune cause. Actions pertinentes : contrôle et nettoyage du doseur, ajout d'une alerte automatique de tendance si la carte est informatisée, rappel en réunion d'équipe de la règle des sept points, réorganisation pour que les prélèvements soient tenus pendant les pauses.</li>\n<li>Décision produit manquante : la FNC doit indiquer le sort des flacons bloqués, décidé par la qualité (tri par pesée à 100 % par exemple).</li>\n</ul>\n<p><strong>5. Conclusion.</strong> Le procédé est capable mais n'a pas été piloté : la carte montrait une dérive dès 9 h. La FNC est à compléter (délimitation depuis 9 h, décision produit, causes techniques et organisationnelles, actions avec responsables et délais).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un auditeur qualité regarde précisément ces trois documents ensemble. Une carte sans annotation face à une tendance, un prélèvement manquant et une FNC qui accuse une personne sont des écarts typiques relevés en audit.</div>"
      },
      {
       "titre": "Les contrôles par attributs",
       "contenu": "\n<p>Toutes les caractéristiques ne se mesurent pas : la présence d'une étiquette, la lisibilité d'un marquage ou l'absence de rayure se jugent conforme ou non conforme. Le plan de surveillance prévoit alors un <strong>contrôle par attributs</strong>, appuyé sur un <strong>référentiel d'aspect</strong> (échantillons limites, photos de défauts acceptables et inacceptables). Le résultat se suit sur une carte de la proportion de non-conformes par échantillon. La même logique d'interprétation s'applique : un point anormalement haut ou une série croissante déclenche une recherche de cause.</p>\n<p>Pour les contrôles automatiques à 100 % (détecteur de métaux, contrôleur de niveau, caméra), le plan de surveillance prévoit des <strong>tests de bon fonctionnement</strong> réguliers avec des produits témoins défectueux, dont le résultat est enregistré : un contrôleur jamais testé n'apporte aucune garantie.</p>"
      }
     ],
     "points_cles": [
      "Le plan de surveillance fixe caractéristique, classe, spécification, moyen, échantillonnage, enregistrement et réaction.",
      "La carte de contrôle prouve l'application du plan et guide les décisions d'action.",
      "Une tendance de sept points se traite même si tous les points sont dans les limites.",
      "Les cartes des moyennes et des étendues s'interprètent séparément : décentrage ou instabilité.",
      "σ s'estime par R̄ / d2 pour calculer Cp et Cpk.",
      "Une non-conformité se délimite depuis le dernier contrôle conforme.",
      "La cause d'une FNC doit être une cause racine technique ou organisationnelle, pas une personne."
     ],
     "lexique": [
      {
       "terme": "Plan de surveillance",
       "def": "Document qui définit les contrôles à réaliser en production et les réactions en cas d'écart."
      },
      {
       "terme": "Classe de caractéristique",
       "def": "Niveau d'importance d'une caractéristique : critique, majeure ou mineure."
      },
      {
       "terme": "Limite de surveillance",
       "def": "Limite plus resserrée que la limite de contrôle, déclenchant une vigilance accrue."
      },
      {
       "terme": "Tendance",
       "def": "Suite de points consécutifs en augmentation ou en diminution sur une carte de contrôle."
      },
      {
       "terme": "Fiche de non-conformité",
       "def": "Document qui décrit un écart, le traitement des produits et les actions engagées."
      },
      {
       "terme": "Délimitation",
       "def": "Détermination de la quantité de produits potentiellement concernés par un défaut."
      },
      {
       "terme": "Décision produit",
       "def": "Choix du sort des produits non conformes : tri, retouche, déclassement, destruction, dérogation."
      },
      {
       "terme": "Préemballage",
       "def": "Produit emballé hors de la présence de l'acheteur, en quantité nominale annoncée."
      }
     ]
    }
   ]
  }
 ]
};
