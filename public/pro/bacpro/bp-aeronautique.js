/* Polymates — Bac pro Aéronautique — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-aeronautique"] = {
 "id": "bp-aeronautique",
 "nom": "Aéronautique",
 "icone": "🎓",
 "couleur": "#7aa0d8",
 "intro": "Le bac pro Aéronautique forme des techniciens qui construisent, entretiennent et réparent des aéronefs dans un cadre réglementé : mécaniciens et techniciens d'entretien en ligne ou en base, monteurs-câbleurs, ajusteurs-monteurs de structure, techniciens de production chez les constructeurs et équipementiers. Ce cours de première et de terminale approfondit le cours de seconde de la famille des métiers de l'aéronautique : sciences appliquées à l'aéronef, technologie, réglementation, qualité et facteurs humains, méthodes d'entretien, puis savoirs propres à chacune des trois options, avionique, systèmes et structure. Il est organisé en deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre, exemples commentés à l'appui, comment exploiter tâches du manuel de maintenance, catalogue des pièces, bulletins et consignes, schémas et manuel de réparation structurale, tels qu'on les rencontre aux épreuves écrites du diplôme.",
 "options": [
  {
   "id": "avionique",
   "nom": "Option Avionique",
   "icone": "📡",
   "desc": "Équipements et liaisons électriques, électroniques, optiques et informatiques embarqués : câblage, bus de données, instruments, radiocommunication et radionavigation."
  },
  {
   "id": "systemes",
   "nom": "Option Systèmes",
   "icone": "⚙️",
   "desc": "Production, distribution et utilisation des énergies embarquées (hydraulique, pneumatique, carburant, commandes) et mise en œuvre de l'aéronef."
  },
  {
   "id": "structure",
   "nom": "Option Structure",
   "icone": "🛠️",
   "desc": "Éléments métalliques et composites de l'ossature et de l'enveloppe de l'aéronef : conception, réparation, protection et étanchéité."
  }
 ],
 "parties": [
  {
   "titre": "Partie 1 — Sciences appliquées à l'aéronef",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "baer-mecanique-systemes",
     "titre": "Mécanique appliquée aux systèmes d'aéronef",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire un système d'aéronef par ses fonctions, ses composants et ses liaisons",
      "Modéliser une action mécanique par une force ou un moment et l'exprimer en unités normalisées",
      "Appliquer le principe fondamental de la statique à un levier, une biellette ou une gouverne",
      "Décrire le mouvement d'un mécanisme : translation, rotation, vitesse et rapport de transmission",
      "Relier masse, accélération et effort dans un cas simple de dynamique"
     ],
     "sections": [
      {
       "titre": "Décrire un système : fonctions, chaînes et liaisons",
       "contenu": "<p>Un aéronef est un assemblage de <strong>systèmes</strong> : commandes de vol, train d'atterrissage, carburant, conditionnement d'air, alimentation électrique, navigation… Chacun reçoit une ou plusieurs énergies, les transforme et produit un effet utile. Pour intervenir sur un système sans se perdre, le technicien le décrit toujours de la même manière : à quoi il sert (sa <strong>fonction</strong>), de quoi il est fait (sa <strong>structure</strong>) et comment il se comporte (ses grandeurs d'entrée et de sortie).</p>\n<p>On distingue deux chaînes dans un système automatisé. La <strong>chaîne d'énergie</strong> alimente, distribue, convertit et transmet l'énergie jusqu'à l'effecteur : par exemple, la pompe hydraulique, la servovalve, le vérin puis la gouverne. La <strong>chaîne d'information</strong> acquiert les mesures (capteurs), les traite (calculateur) et communique les ordres (bus de données, signaux électriques).</p>\n<p>Les pièces d'un mécanisme sont reliées par des <strong>liaisons mécaniques</strong>. Chaque liaison autorise certains mouvements relatifs (degrés de liberté) et en interdit d'autres. Les plus courantes en aéronautique sont la <strong>liaison pivot</strong> (axe de charnière de gouverne, articulation de trappe), la <strong>liaison glissière</strong> (tige de vérin dans son corps, si l'on néglige la rotation), la <strong>liaison rotule</strong> (embout de biellette à rotule) et la liaison encastrement (pièces rivetées entre elles).</p>\n<table><thead><tr><th>Liaison</th><th>Mouvements autorisés</th><th>Exemple sur aéronef</th></tr></thead><tbody>\n<tr><td>Encastrement</td><td>Aucun</td><td>Ferrure rivetée sur un longeron</td></tr>\n<tr><td>Pivot</td><td>1 rotation</td><td>Charnière d'aileron</td></tr>\n<tr><td>Glissière</td><td>1 translation</td><td>Rail de siège, coulisseau de volet</td></tr>\n<tr><td>Pivot glissant</td><td>1 rotation et 1 translation de même axe</td><td>Tige de vérin dans son palier</td></tr>\n<tr><td>Rotule</td><td>3 rotations</td><td>Embout de biellette de commande</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant de démonter un ensemble, identifier les classes d'équivalence (groupes de pièces sans mouvement relatif) et les liaisons qui les relient permet de comprendre ce qui doit bouger, ce qui doit rester fixe et où se trouvent les jeux à contrôler.</div>"
      },
      {
       "titre": "Modéliser une action mécanique",
       "contenu": "<p>Une <strong>action mécanique</strong> est toute cause capable de déformer un solide, de le maintenir en équilibre ou de modifier son mouvement. On la modélise par une <strong>force</strong>, caractérisée par son point d'application, sa direction, son sens et son intensité exprimée en newtons (N). Le poids d'un équipement de 25 kg vaut ainsi P = m × g = 25 × 9,81 ≈ 245 N, vertical et dirigé vers le bas, appliqué au centre de gravité.</p>\n<p>Une force qui ne passe pas par l'axe de rotation d'une pièce tend à la faire tourner. Cet effet est mesuré par le <strong>moment</strong> de la force par rapport à un point : M = F × d, où d est la distance perpendiculaire entre le point et la ligne d'action de la force (le <strong>bras de levier</strong>). Le moment s'exprime en newtons-mètres (N·m). C'est la grandeur réglée avec une clé dynamométrique : 12 N·m avec une clé de 0,30 m correspondent à environ 40 N en bout de manche.</p>\n<p>On rencontre en aéronautique d'autres unités qu'il faut savoir convertir, car la documentation des constructeurs américains les emploie : la livre-force (1 lbf ≈ 4,448 N), la livre-pouce (1 lbf·in ≈ 0,113 N·m) et la livre-pied (1 lbf·ft ≈ 1,356 N·m). La pression, effort par unité de surface, s'exprime en pascals (1 Pa = 1 N/m²), en bars (1 bar = 10<sup>5</sup> Pa) ou en psi (1 psi ≈ 0,0689 bar).</p>\n<p>On distingue les <strong>actions à distance</strong> (pesanteur, magnétisme) et les <strong>actions de contact</strong>. Une action de contact répartie, comme la pression d'un fluide sur un piston, peut être remplacée par une force unique équivalente : F = p × S.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'effort de sortie d'un vérin. Données : pression hydraulique 207 bar (environ 3 000 psi), diamètre du piston 50 mm. 1) Convertir la pression : 207 bar = 207 × 10<sup>5</sup> Pa = 20,7 × 10<sup>6</sup> Pa. 2) Calculer la surface du piston : S = π × d² / 4 = 3,1416 × 0,050² / 4 ≈ 1,96 × 10<sup>-3</sup> m². 3) Appliquer F = p × S = 20,7 × 10<sup>6</sup> × 1,96 × 10<sup>-3</sup> ≈ 40 600 N, soit environ 40,6 kN. 4) Vérifier l'ordre de grandeur : quatre tonnes environ, cohérent avec un vérin de commande de vol. En rentrée, la surface utile est diminuée de la section de la tige, donc l'effort est plus faible.</div>"
      },
      {
       "titre": "Statique : équilibre d'un levier et d'une biellette",
       "contenu": "<p>La <strong>statique</strong> étudie les solides en équilibre. Le <strong>principe fondamental de la statique</strong> (PFS) indique qu'un solide est en équilibre lorsque la somme vectorielle des forces qui s'exercent sur lui est nulle et que la somme des moments de ces forces par rapport à n'importe quel point est nulle. Dans le plan, cela donne trois équations : somme des forces horizontales nulle, somme des forces verticales nulle, somme des moments nulle.</p>\n<p>Deux cas particuliers sont très utiles en maintenance. Un solide soumis à <strong>deux forces</strong> est en équilibre si ces forces sont égales, opposées et portées par la même droite : c'est le cas d'une <strong>biellette</strong> articulée à ses deux extrémités par des rotules et non chargée entre elles. Elle ne travaille alors qu'en traction ou en compression, selon son axe. Un solide soumis à <strong>trois forces</strong> non parallèles est en équilibre si ces forces sont concourantes et si leur somme vectorielle est nulle : on le résout graphiquement par un triangle des forces.</p>\n<p>Les <strong>guignols</strong> (renvois d'angle) des commandes de vol sont des leviers. Un guignol de 80 mm côté câble et 40 mm côté biellette, soumis à 300 N par le câble, transmet à la biellette 300 × 80 / 40 = 600 N : l'effort double, mais le déplacement est divisé par deux. Ce compromis entre effort et course se retrouve dans toutes les transmissions.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> appliquer le PFS à un levier. 1) Isoler le solide : tracer sa frontière et lister toutes les actions extérieures qui la traversent (efforts appliqués, réactions d'appui, poids si non négligeable). 2) Choisir le point de calcul des moments sur l'articulation : la réaction inconnue de l'articulation disparaît de l'équation des moments. 3) Écrire la somme des moments nulle, en respectant un sens positif (par exemple le sens trigonométrique), et en déduire l'effort inconnu. 4) Écrire les deux équations de projection pour obtenir la réaction de l'articulation. 5) Contrôler l'homogénéité des unités et la vraisemblance du résultat.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'erreur la plus fréquente consiste à prendre comme bras de levier la longueur de la pièce au lieu de la distance perpendiculaire à la ligne d'action de la force. Lorsque la force est inclinée, le bras de levier est plus court que la pièce et le moment est plus faible.</div>"
      },
      {
       "titre": "Cinématique : décrire les mouvements",
       "contenu": "<p>La <strong>cinématique</strong> décrit les mouvements sans s'intéresser à leurs causes. Deux mouvements élémentaires suffisent pour la plupart des mécanismes : la <strong>translation</strong>, où tous les points du solide ont la même trajectoire parallèle et la même vitesse (tige de vérin, chariot de volet sur son rail), et la <strong>rotation</strong> autour d'un axe fixe, où chaque point décrit un cercle (gouverne autour de sa charnière, roue, arbre de transmission).</p>\n<p>En translation, la vitesse v s'exprime en mètres par seconde (m/s). En rotation, on utilise la <strong>vitesse angulaire</strong> ω en radians par seconde (rad/s), reliée à la fréquence de rotation N en tours par minute par la relation ω = 2π × N / 60. La vitesse d'un point situé à la distance R de l'axe vaut v = R × ω. Ainsi, une roue de 0,60 m de rayon qui tourne à 1 000 tr/min a une vitesse angulaire d'environ 105 rad/s et sa périphérie se déplace à 63 m/s, soit environ 227 km/h, vitesse typique d'atterrissage d'un avion de ligne.</p>\n<p>Dans une <strong>transmission</strong> (engrenages, poulies, renvois d'angle d'un relais d'accessoires de moteur), on définit le <strong>rapport de transmission</strong> r = vitesse de sortie / vitesse d'entrée. Pour un engrenage simple, r = Z entrée / Z sortie, où Z est le nombre de dents. Un rapport inférieur à 1 est un réducteur : la vitesse diminue et, aux pertes près, le couple augmente dans la même proportion, car la puissance se conserve (P = C × ω).</p>\n<table><thead><tr><th>Grandeur</th><th>Symbole</th><th>Unité SI</th><th>Relation utile</th></tr></thead><tbody>\n<tr><td>Vitesse linéaire</td><td>v</td><td>m/s</td><td>v = R × ω</td></tr>\n<tr><td>Vitesse angulaire</td><td>ω</td><td>rad/s</td><td>ω = 2π × N / 60</td></tr>\n<tr><td>Puissance en rotation</td><td>P</td><td>W</td><td>P = C × ω</td></tr>\n<tr><td>Puissance en translation</td><td>P</td><td>W</td><td>P = F × v</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors du réglage d'une gouverne, on mesure un <strong>débattement</strong> angulaire (en degrés) au moyen d'un rapporteur ou d'un gabarit, alors que la commande se règle par une longueur de biellette. La cinématique du mécanisme fait le lien entre les deux : un tour de réglage d'embout fileté modifie la longueur d'un pas de filetage, donc l'angle de la gouverne d'une valeur faible mais mesurable.</div>"
      },
      {
       "titre": "Dynamique : masse, accélération et facteur de charge",
       "contenu": "<p>La <strong>dynamique</strong> relie les mouvements à leurs causes. Le <strong>principe fondamental de la dynamique</strong>, pour un solide en translation, s'écrit : somme des forces extérieures = m × a, où m est la masse en kilogrammes et a l'accélération en m/s². Un avion de 70 t qui accélère à 2 m/s² au décollage demande une poussée nette d'au moins 140 kN.</p>\n<p>En rotation, l'équivalent est : somme des moments = J × α, où J est le <strong>moment d'inertie</strong> (en kg·m²) qui traduit la répartition de la masse autour de l'axe, et α l'accélération angulaire (rad/s²). Plus la masse est loin de l'axe, plus il faut de couple : le démarreur d'un turboréacteur doit vaincre l'inertie des disques et des aubes.</p>\n<p>L'aéronautique utilise une grandeur sans unité très importante : le <strong>facteur de charge</strong> n, rapport entre la portance (ou l'effort apparent) et le poids. En vol rectiligne stabilisé, n = 1. En virage à 60° d'inclinaison, n = 2 : chaque équipement « pèse » deux fois son poids pour sa fixation. Structures et fixations sont dimensionnées pour les facteurs de charge fixés par les règlements de certification, y compris en atterrissage d'urgence.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une fixation correctement serrée sur un équipement immobile peut céder en vol si l'on a omis une rondelle, un frein ou un support. La documentation impose chaque élément de fixation parce qu'il a été justifié pour des efforts dynamiques bien supérieurs au poids statique.</div>\n<p>L'<strong>énergie</strong> est la troisième façon de raisonner. L'énergie cinétique d'un solide en translation vaut E = ½ × m × v². Un avion de 60 t qui atterrit à 65 m/s possède environ 127 MJ que les freins, les inverseurs et la traînée doivent dissiper, d'où l'échauffement considérable des freins.</p>"
      },
      {
       "titre": "Frottement, rendement et pertes",
       "contenu": "<p>Dans tout mécanisme réel, une partie de la puissance d'entrée est perdue, principalement par <strong>frottement</strong> dans les liaisons. Le frottement de glissement entre deux surfaces est caractérisé par un coefficient f : l'effort tangentiel maximal transmissible vaut T = f × N, où N est l'effort normal entre les surfaces. Il dépend des matériaux, de l'état de surface et de la lubrification (environ 0,1 en acier sur acier lubrifié).</p>\n<p>Le <strong>rendement</strong> η d'un mécanisme est le rapport entre la puissance de sortie et la puissance d'entrée ; il est toujours inférieur à 1. Pour une chaîne de plusieurs éléments en série, les rendements se multiplient : trois éléments de rendement 0,95 donnent un rendement global de 0,95 × 0,95 × 0,95 ≈ 0,86.</p>\n<p>Le frottement n'est pas toujours un ennemi. Le serrage d'un assemblage boulonné repose sur lui : la <strong>précharge</strong> de la vis plaque les pièces l'une contre l'autre, et c'est l'adhérence qui transmet l'effort. L'essentiel du couple de serrage vainc les frottements sous tête et dans le filetage ; une faible part seulement tend la vis. Voilà pourquoi la documentation précise si le filetage doit être sec ou lubrifié, et avec quel produit : un lubrifiant non prévu change la tension obtenue pour un même couple.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une commande de vol « dure » ou qui ne revient pas au neutre signale presque toujours un frottement anormal : poulie grippée, câble mal guidé, rotule corrodée, lubrification absente. Le contrôle de l'effort de manœuvre fait partie des essais fonctionnels de nombreuses tâches de maintenance.</div>"
      }
     ],
     "points_cles": [
      "Un système se décrit par sa fonction, sa structure, sa chaîne d'énergie et sa chaîne d'information",
      "Une liaison mécanique se définit par les mouvements relatifs qu'elle autorise",
      "Le moment d'une force vaut F × d, d étant la distance perpendiculaire à la ligne d'action",
      "Le PFS donne trois équations dans le plan : deux projections et une équation de moments",
      "Une biellette à deux rotules non chargée entre ses extrémités travaille en traction ou en compression",
      "L'effort d'un vérin vaut pression × surface utile, plus faible en rentrée du fait de la tige",
      "La puissance se conserve aux pertes près : un réducteur diminue la vitesse et augmente le couple",
      "Le facteur de charge multiplie les efforts que subissent structures et fixations en vol",
      "Le couple de serrage dépend fortement des frottements : respecter l'état sec ou lubrifié prescrit"
     ],
     "lexique": [
      {
       "terme": "Chaîne d'énergie",
       "def": "Ensemble des composants qui alimentent, distribuent, convertissent et transmettent l'énergie jusqu'à l'effecteur."
      },
      {
       "terme": "Chaîne d'information",
       "def": "Ensemble des composants qui acquièrent, traitent et communiquent les informations d'un système."
      },
      {
       "terme": "Liaison mécanique",
       "def": "Relation de contact entre deux pièces qui autorise certains mouvements relatifs et en interdit d'autres."
      },
      {
       "terme": "Moment d'une force",
       "def": "Effet de rotation d'une force autour d'un point, égal à la force multipliée par le bras de levier, en N·m."
      },
      {
       "terme": "Guignol",
       "def": "Levier de renvoi d'une commande de vol, articulé sur la structure, qui change la direction ou le rapport d'un mouvement."
      },
      {
       "terme": "Rapport de transmission",
       "def": "Quotient de la vitesse de sortie par la vitesse d'entrée d'un mécanisme."
      },
      {
       "terme": "Facteur de charge",
       "def": "Rapport sans unité entre l'effort supporté par l'aéronef ou un équipement et son poids."
      },
      {
       "terme": "Rendement",
       "def": "Rapport entre la puissance utile en sortie et la puissance fournie en entrée, toujours inférieur à 1."
      },
      {
       "terme": "Précharge",
       "def": "Tension créée dans une vis par le serrage, qui plaque les pièces assemblées l'une contre l'autre."
      }
     ]
    },
    {
     "id": "baer-resistance-materiaux",
     "titre": "Résistance des matériaux et comportement des pièces",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Identifier les sollicitations simples subies par une pièce d'aéronef",
      "Calculer une contrainte normale ou de cisaillement et la comparer à une limite admissible",
      "Exploiter une courbe de traction : module d'Young, limite élastique, résistance à la rupture, allongement",
      "Expliquer les notions de coefficient de sécurité, de concentration de contrainte et de fatigue",
      "Relier le comportement mécanique aux règles de maintenance : rayures, criques, tolérances de dommage"
     ],
     "sections": [
      {
       "titre": "Les sollicitations simples",
       "contenu": "<p>La <strong>résistance des matériaux</strong> (RDM) étudie comment une pièce se déforme et quand elle risque de se rompre sous l'effet des efforts. On classe les efforts intérieurs en quelques <strong>sollicitations simples</strong>, que l'on retrouve partout dans un aéronef.</p>\n<table><thead><tr><th>Sollicitation</th><th>Effet sur la pièce</th><th>Exemple sur aéronef</th></tr></thead><tbody>\n<tr><td>Traction</td><td>Allongement selon l'axe</td><td>Câble de commande, revêtement inférieur de l'aile en vol</td></tr>\n<tr><td>Compression</td><td>Raccourcissement, risque de flambage</td><td>Revêtement supérieur de l'aile, jambe de train à l'atterrissage</td></tr>\n<tr><td>Cisaillement</td><td>Glissement de deux sections voisines</td><td>Rivet, axe d'articulation, boulon de ferrure</td></tr>\n<tr><td>Flexion</td><td>Courbure, une face tendue et l'autre comprimée</td><td>Aile considérée comme une poutre encastrée dans le fuselage</td></tr>\n<tr><td>Torsion</td><td>Rotation des sections les unes par rapport aux autres</td><td>Arbre de transmission, caisson d'aile soumis aux ailerons</td></tr>\n</tbody></table>\n<p>Une pièce réelle subit le plus souvent une <strong>sollicitation composée</strong> : l'aile est à la fois fléchie par la portance et tordue par le moment aérodynamique ; un axe de train est cisaillé et fléchi. Le bureau d'études en tient compte ; le technicien, lui, doit savoir reconnaître sur une pièce les zones les plus chargées, car c'est là que naissent les criques.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en vol, l'extrados (dessus) de l'aile est comprimé et l'intrados (dessous) est tendu. Les criques de fatigue apparaissent surtout dans les zones tendues, c'est pourquoi les programmes d'inspection insistent sur les revêtements et les lisses inférieurs.</div>"
      },
      {
       "titre": "Contrainte et déformation",
       "contenu": "<p>Pour comparer des pièces de tailles différentes, on ne raisonne pas sur l'effort mais sur la <strong>contrainte</strong>, effort ramené à la surface qui le supporte. En traction ou compression, la contrainte normale vaut σ = N / S, avec N l'effort normal en newtons et S l'aire de la section en mm² ; le résultat s'exprime en mégapascals (1 MPa = 1 N/mm²). En cisaillement, on calcule la contrainte tangentielle τ = T / S.</p>\n<p>La contrainte provoque une <strong>déformation</strong>. L'allongement relatif ε = ΔL / L₀ est sans unité, souvent exprimé en pourcentage. Tant que la contrainte reste faible, la déformation est <strong>élastique</strong> : la pièce reprend sa forme une fois déchargée, et la contrainte est proportionnelle à la déformation selon la <strong>loi de Hooke</strong> : σ = E × ε. Le coefficient E est le <strong>module d'Young</strong>, caractéristique de la rigidité du matériau : environ 70 000 MPa pour les alliages d'aluminium, 110 000 MPa pour le titane, 210 000 MPa pour l'acier.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un câble de commande. Données : câble acier de section utile 7 mm², effort maximal en service 900 N, résistance à la rupture du câble donnée par le fabricant 1 600 MPa. 1) Calculer la contrainte : σ = 900 / 7 ≈ 129 MPa. 2) Calculer le rapport entre la résistance et la contrainte : 1 600 / 129 ≈ 12,4. 3) Conclure : la marge est très large, mais elle sera réduite par l'usure des brins au passage des poulies ; c'est pourquoi la documentation impose de remplacer un câble dès qu'un nombre limité de brins cassés est constaté sur une longueur donnée, quel que soit le calcul.</div>\n<p>Dans le cas du cisaillement d'un rivet, la section à prendre en compte est celle du fût : pour un rivet de 4 mm de diamètre, S = π × 4² / 4 ≈ 12,6 mm². Si l'effort transmis est de 2 000 N, la contrainte de cisaillement vaut environ 159 MPa. Lorsque deux tôles sont pincées entre deux couvre-joints, le rivet est cisaillé selon deux sections (<strong>cisaillement double</strong>) et la contrainte est divisée par deux.</p>"
      },
      {
       "titre": "L'essai de traction et les caractéristiques des matériaux",
       "contenu": "<p>Les caractéristiques mécaniques d'un matériau sont obtenues par l'<strong>essai de traction</strong> : une éprouvette normalisée est étirée jusqu'à rupture, et l'on trace la contrainte en fonction de l'allongement. La courbe obtenue pour un alliage d'aluminium ou un acier présente plusieurs zones.</p>\n<ul>\n<li>Une droite initiale : c'est la zone élastique, dont la pente est le module d'Young.</li>\n<li>La <strong>limite d'élasticité</strong> (Re, ou Rp0,2 lorsqu'elle est conventionnelle, correspondant à 0,2 % d'allongement permanent) : au-delà, la pièce garde une déformation permanente.</li>\n<li>Une zone plastique où la contrainte continue d'augmenter jusqu'à la <strong>résistance à la traction</strong> Rm.</li>\n<li>La rupture, après un <strong>allongement à la rupture</strong> A % qui mesure la ductilité du matériau.</li>\n</ul>\n<table><thead><tr><th>Matériau (ordres de grandeur)</th><th>E (MPa)</th><th>Rp0,2 (MPa)</th><th>Rm (MPa)</th><th>Masse volumique (kg/m³)</th></tr></thead><tbody>\n<tr><td>Alliage d'aluminium 2024 T3</td><td>≈ 73 000</td><td>≈ 340</td><td>≈ 480</td><td>≈ 2 780</td></tr>\n<tr><td>Alliage d'aluminium 7075 T6</td><td>≈ 71 000</td><td>≈ 500</td><td>≈ 570</td><td>≈ 2 810</td></tr>\n<tr><td>Titane TA6V</td><td>≈ 114 000</td><td>≈ 880</td><td>≈ 950</td><td>≈ 4 430</td></tr>\n<tr><td>Acier faiblement allié traité</td><td>≈ 205 000</td><td>800 à 1 400</td><td>1 000 à 1 800</td><td>≈ 7 850</td></tr>\n</tbody></table>\n<p>Ces valeurs dépendent de l'état métallurgique (désigné par le suffixe T3, T6…), de l'épaisseur et du sens de laminage : les valeurs de calcul réelles sont celles des documents du constructeur, jamais celles d'un tableau général.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une pièce déformée de façon permanente (ferrure tordue, revêtement enfoncé avec pli) a dépassé sa limite élastique. Même si elle semble encore tenir, sa résistance et sa tenue en fatigue sont modifiées : on ne la redresse jamais sans une réparation approuvée.</div>"
      },
      {
       "titre": "Coefficient de sécurité et charges de calcul",
       "contenu": "<p>Une pièce n'est jamais dimensionnée « au plus juste ». On définit une <strong>contrainte admissible</strong> en divisant la caractéristique du matériau par un <strong>coefficient de sécurité</strong> s : σ admissible = Re / s. La condition de résistance s'écrit alors σ ≤ σ admissible.</p>\n<p>En aéronautique, la masse est l'ennemie : les coefficients sont donc faibles et très encadrés. Les règlements de certification distinguent la <strong>charge limite</strong>, la plus forte charge attendue en service, que la structure doit supporter sans déformation permanente gênante, et la <strong>charge extrême</strong> (ultime), égale en règle générale à 1,5 fois la charge limite, que la structure doit supporter sans rupture pendant un court instant. Pour un avion de transport, le facteur de charge limite de manœuvre est d'au moins +2,5, ce qui correspond à une charge extrême de +3,75.</p>\n<p>Cette faible marge explique la rigueur de la maintenance : un dommage non détecté, une fixation de diamètre inférieur, un perçage mal placé ou un matériau de remplacement non conforme peuvent suffire à faire passer la pièce sous la charge extrême.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer un alliage par un autre « plus résistant » n'est pas une amélioration autorisée. Un matériau à résistance plus élevée peut être moins ductile, plus sensible à la corrosion sous contrainte ou à la fatigue, et changer la répartition des efforts. Seule la documentation approuvée fixe les substitutions possibles.</div>"
      },
      {
       "titre": "Concentration de contrainte, flambage et fatigue",
       "contenu": "<p>Le calcul σ = N / S suppose une contrainte uniforme dans la section. En réalité, tout changement brusque de forme (trou, entaille, rayure, angle vif, filetage) crée une <strong>concentration de contrainte</strong> : localement, la contrainte peut atteindre deux à trois fois la valeur moyenne autour d'un trou. Voilà pourquoi la documentation impose des rayons de raccordement, l'ébavurage des perçages et l'élimination des rayures par un « adoucissement » contrôlé.</p>\n<p>Une pièce longue et mince comprimée peut se dérober latéralement avant que le matériau n'atteigne sa limite : c'est le <strong>flambage</strong>. Il concerne les lisses, les montants, les biellettes de commande comprimées et les panneaux de revêtement minces, qui « gondolent » par voilement. La résistance au flambage dépend surtout de la longueur et de la forme de la section, et très peu de la résistance du matériau : une biellette légèrement courbée perd une grande partie de sa capacité en compression.</p>\n<p>La <strong>fatigue</strong> est la rupture d'une pièce sous des efforts répétés, même nettement inférieurs à la limite élastique. Chaque vol impose au fuselage un cycle de pressurisation, à l'aile des cycles de rafales et à l'atterrissage un choc. Après un grand nombre de cycles, une <strong>crique</strong> s'amorce, souvent sur un défaut de surface ou une concentration de contrainte, puis se propage lentement, et enfin la section restante rompt brutalement. La surface de rupture présente des stries caractéristiques et des « lignes d'arrêt » concentriques autour du point d'amorçage.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la structure d'un avion de transport est conçue en <strong>tolérance aux dommages</strong> : une crique doit pouvoir être détectée par les inspections programmées avant d'atteindre une longueur critique. Le programme d'inspection est donc une partie intégrante de la résistance de l'avion.</div>"
      },
      {
       "titre": "Comportement des composites et des non-métalliques",
       "contenu": "<p>Les <strong>matériaux composites</strong> (fibres de carbone, de verre ou d'aramide noyées dans une résine) ne se comportent pas comme les métaux. Ils sont <strong>anisotropes</strong> : leur résistance et leur rigidité sont élevées dans la direction des fibres et faibles perpendiculairement. Le stratifié est donc constitué de plis orientés (0°, ±45°, 90°) choisis pour reprendre les efforts prévus ; l'orientation des plis fait partie de la définition de la pièce.</p>\n<p>Un composite à fibres de carbone reste élastique presque jusqu'à la rupture : il ne prévient pas par une déformation permanente visible. Un choc peut provoquer un <strong>délaminage</strong> interne (décollement entre plis) avec une trace extérieure à peine visible ; la résistance en compression de la zone est alors fortement réduite. Les composites sont en revanche peu sensibles à la fatigue et insensibles à la corrosion, mais sensibles à l'humidité, à la chaleur, aux ultraviolets et à certains solvants.</p>\n<p>Les élastomères (joints toriques, soufflets, amortisseurs) et les polymères (hublots en acrylique, gaines de câbles) vieillissent : ils durcissent, se fissurent ou gonflent au contact de fluides incompatibles. Leur stockage et leur durée de vie sont souvent limités, et chaque joint doit être compatible avec le fluide du système.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer un impact sur un panneau composite. 1) Repérer et marquer la zone, mesurer le diamètre de l'empreinte et sa profondeur. 2) Effectuer le contrôle par tapotement ou l'inspection non destructive prescrite pour délimiter la zone délaminée, qui est souvent plus grande que l'empreinte. 3) Comparer les dimensions aux limites de dommages admissibles du manuel de réparation structurale pour la zone concernée. 4) Conclure : dommage admissible sans réparation, réparation prescrite, ou recours au constructeur.</div>"
      }
     ],
     "points_cles": [
      "Traction, compression, cisaillement, flexion et torsion sont les sollicitations simples",
      "La contrainte est un effort rapporté à une surface : σ = N / S, en MPa",
      "Dans le domaine élastique, σ = E × ε (loi de Hooke)",
      "Au-delà de la limite élastique, la pièce garde une déformation permanente",
      "La charge extrême vaut en général 1,5 fois la charge limite",
      "Trous, rayures et angles vifs concentrent les contraintes et amorcent les criques",
      "La fatigue rompt les pièces sous efforts répétés inférieurs à la limite élastique",
      "Un composite est anisotrope et peut cacher un délaminage sous une trace d'impact discrète"
     ],
     "lexique": [
      {
       "terme": "Contrainte",
       "def": "Effort intérieur rapporté à l'aire de la section, exprimé en MPa (N/mm²)."
      },
      {
       "terme": "Module d'Young",
       "def": "Coefficient de proportionnalité entre contrainte et déformation dans le domaine élastique ; il mesure la rigidité."
      },
      {
       "terme": "Limite d'élasticité",
       "def": "Contrainte au-delà de laquelle le matériau conserve une déformation permanente."
      },
      {
       "terme": "Charge limite",
       "def": "Charge maximale attendue en service, supportée sans déformation permanente nuisible."
      },
      {
       "terme": "Charge extrême",
       "def": "Charge limite multipliée par le coefficient de sécurité (en général 1,5), supportée sans rupture."
      },
      {
       "terme": "Concentration de contrainte",
       "def": "Augmentation locale de la contrainte au voisinage d'un trou, d'une entaille ou d'un changement de section."
      },
      {
       "terme": "Flambage",
       "def": "Instabilité d'une pièce élancée comprimée, qui fléchit latéralement brusquement."
      },
      {
       "terme": "Fatigue",
       "def": "Endommagement progressif d'un matériau soumis à des efforts répétés, conduisant à une rupture."
      },
      {
       "terme": "Délaminage",
       "def": "Décollement entre les plis d'un stratifié composite, souvent causé par un choc."
      },
      {
       "terme": "Anisotrope",
       "def": "Se dit d'un matériau dont les propriétés dépendent de la direction de sollicitation."
      }
     ]
    },
    {
     "id": "baer-electrotechnique",
     "titre": "Électrotechnique : courant continu, courant alternatif et machines",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Appliquer les lois des circuits en courant continu à un circuit de bord",
      "Expliquer les phénomènes magnétiques utilisés dans les relais, contacteurs, moteurs et générateurs",
      "Caractériser un courant alternatif : valeur efficace, fréquence, déphasage, puissances",
      "Décrire le rôle d'un transformateur, d'un transformateur-redresseur et d'un onduleur",
      "Expliquer le principe des générateurs et moteurs utilisés à bord"
     ],
     "sections": [
      {
       "titre": "Lois des circuits en courant continu",
       "contenu": "<p>Le réseau continu de bord d'un avion de transport est en général un réseau <strong>28 V</strong> continu, alimenté par des batteries et par des transformateurs-redresseurs. Les avions légers utilisent souvent du 14 V ou du 28 V. Toute intervention sur un circuit commence par l'application de quelques lois simples.</p>\n<p>La <strong>loi d'Ohm</strong> relie la tension U (en volts), l'intensité I (en ampères) et la résistance R (en ohms) d'un dipôle résistif : U = R × I. La <strong>puissance</strong> consommée vaut P = U × I = R × I², en watts. La <strong>loi des nœuds</strong> indique que la somme des courants qui arrivent à un nœud est égale à la somme des courants qui en partent ; la <strong>loi des mailles</strong> que la somme algébrique des tensions le long d'une boucle fermée est nulle.</p>\n<p>Ces lois expliquent les effets d'une mauvaise connexion. Une cosse oxydée présentant une résistance de contact de 0,05 Ω, traversée par 40 A, provoque une chute de tension de 2 V et dissipe 0,05 × 40² = 80 W localement : de quoi brûler la cosse et la gaine. C'est la raison des valeurs maximales de résistance imposées pour les <strong>métallisations</strong> (liaisons de masse) et des contrôles au micro-ohmmètre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la chute de tension dans un câble. Données : câble de 6 m aller, 6 m retour par la structure supposée sans résistance, résistance linéique du câble 8,5 mΩ/m, courant 15 A. 1) Résistance du câble : R = 6 × 0,0085 = 0,051 Ω. 2) Chute de tension : U = R × I = 0,051 × 15 ≈ 0,77 V. 3) Comparer à la tension nominale 28 V : environ 2,7 %. 4) Conclure en comparant à la chute maximale fixée par le constructeur pour ce circuit ; si elle est dépassée, la section du câble est insuffisante ou une connexion est défectueuse.</div>\n<p>Les résistances en série s'additionnent ; en parallèle, ce sont les inverses qui s'additionnent : 1/R = 1/R₁ + 1/R₂. Deux résistances égales en parallèle donnent la moitié de leur valeur. Ces règles servent à interpréter une mesure à l'ohmmètre faite sur un circuit qui comporte plusieurs branches.</p>"
      },
      {
       "titre": "Sources continues : batteries et électricité statique",
       "contenu": "<p>Une <strong>batterie d'accumulateurs</strong> stocke l'énergie sous forme chimique. Sa <strong>capacité</strong> s'exprime en ampères-heures (Ah) : une batterie de 40 Ah peut théoriquement fournir 40 A pendant une heure, ou 4 A pendant dix heures. Les avions utilisent des batteries au plomb, au nickel-cadmium (Ni-Cd) ou, de plus en plus, au lithium-ion. Les batteries Ni-Cd ont une tension d'élément d'environ 1,2 V : vingt éléments en série donnent 24 V nominaux.</p>\n<p>Chaque technologie impose ses règles : ventilation et neutralisation de l'électrolyte (acide pour le plomb, alcalin pour le Ni-Cd, à ne jamais mélanger dans un même atelier ni avec les mêmes outils), surveillance de l'emballement thermique, transport réglementé des batteries lithium.</p>\n<p>L'<strong>électricité statique</strong> apparaît par frottement de l'air sur la cellule, par écoulement de carburant ou par le déplacement des personnes. Elle est éliminée en vol par les <strong>déchargeurs d'électricité statique</strong> (petites tiges placées aux bords de fuite) et, au sol, par la mise à la terre de l'avion et la liaison équipotentielle avec le camion lors de l'avitaillement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une batterie d'avion peut délivrer plusieurs centaines d'ampères en court-circuit. Un outil métallique posé entre ses bornes fond instantanément et peut provoquer brûlures et projection d'électrolyte. On retire montres, bagues et bracelets, on utilise des outils isolés et on débranche toujours la batterie avant les travaux qui l'exigent.</div>"
      },
      {
       "titre": "Magnétisme, induction et inductance",
       "contenu": "<p>Un courant électrique crée un <strong>champ magnétique</strong> autour du conducteur. Enroulé en bobine autour d'un noyau de fer, ce champ est concentré et devient capable d'attirer une pièce mobile : c'est le principe de l'<strong>électroaimant</strong>, du <strong>relais</strong> (qui commute un circuit de faible puissance) et du <strong>contacteur</strong> (qui commute un circuit de forte puissance, par exemple l'alimentation d'une barre). On le retrouve aussi dans les électrovannes.</p>\n<p>Réciproquement, un champ magnétique variable dans une bobine fait apparaître une tension à ses bornes : c'est l'<strong>induction électromagnétique</strong>. Ce phénomène est à la base des générateurs, des transformateurs, mais aussi de capteurs comme les capteurs de vitesse de roue à reluctance variable ou les capteurs de position LVDT et RVDT.</p>\n<p>Une bobine s'oppose aux variations du courant qui la traverse : c'est son <strong>inductance</strong> L, en henrys (H). À l'ouverture d'un circuit inductif (bobine de relais, électrovanne), la brusque coupure du courant provoque une surtension qui peut atteindre plusieurs centaines de volts et endommager les contacts ou les composants électroniques. On la limite par une diode de roue libre ou un circuit de protection montés en parallèle sur la bobine.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une diode de protection de bobine a un sens de montage. Inversée, elle met la bobine en court-circuit dès la mise sous tension. Lors d'un remplacement de relais ou d'une réparation de câblage, le repérage des bornes doit donc être conforme au schéma.</div>"
      },
      {
       "titre": "Le courant alternatif",
       "contenu": "<p>Le réseau principal d'un avion de transport est le plus souvent un réseau alternatif triphasé <strong>115/200 V à 400 Hz</strong> : 115 V entre une phase et le neutre, 200 V entre deux phases. La fréquence de 400 Hz, plus élevée que celle du réseau domestique (50 Hz), permet d'alléger transformateurs et moteurs. Certains avions récents utilisent une fréquence variable (environ 360 à 800 Hz) ou un réseau continu haute tension.</p>\n<p>Une tension sinusoïdale est caractérisée par sa <strong>valeur maximale</strong> Û, sa <strong>valeur efficace</strong> U = Û / √2 (c'est elle qu'affiche un voltmètre en position alternatif), sa <strong>fréquence</strong> f en hertz et sa <strong>période</strong> T = 1 / f. Pour 115 V efficaces, la valeur maximale vaut environ 163 V ; à 400 Hz, la période est de 2,5 ms.</p>\n<p>Dans un circuit comportant des bobines ou des condensateurs, le courant n'est pas en phase avec la tension : il présente un <strong>déphasage</strong> φ. On distingue alors la <strong>puissance active</strong> P = U × I × cos φ (en watts, réellement convertie en travail ou en chaleur), la <strong>puissance réactive</strong> Q (en voltampères réactifs, var) et la <strong>puissance apparente</strong> S = U × I (en voltampères, VA). Les générateurs de bord sont dimensionnés par leur puissance apparente, exprimée en kVA, par exemple 90 kVA.</p>\n<table><thead><tr><th>Composant</th><th>Comportement en alternatif</th><th>Effet de la fréquence</th></tr></thead><tbody>\n<tr><td>Résistance R</td><td>Courant en phase avec la tension</td><td>Aucun</td></tr>\n<tr><td>Bobine L</td><td>Courant en retard de 90°</td><td>Opposition au courant croissante avec f</td></tr>\n<tr><td>Condensateur C</td><td>Courant en avance de 90°</td><td>Opposition au courant décroissante avec f</td></tr>\n</tbody></table>\n<p>Un circuit R-L-C présente une <strong>fréquence de résonance</strong> où les effets de la bobine et du condensateur se compensent ; ce principe est utilisé dans les filtres et les circuits d'accord des radios de bord.</p>"
      },
      {
       "titre": "Transformateurs et conversion d'énergie",
       "contenu": "<p>Un <strong>transformateur</strong> modifie la valeur d'une tension alternative sans changer sa fréquence. Il comprend deux enroulements bobinés sur un circuit magnétique. Le rapport des tensions est égal au rapport des nombres de spires : U₂ / U₁ = N₂ / N₁. Aux pertes près, la puissance se conserve : si la tension est abaissée, le courant augmente dans la même proportion. À bord, on trouve par exemple des transformateurs 115 V / 26 V alternatif pour certains instruments.</p>\n<p>Les échanges entre réseaux alternatif et continu sont assurés par des <strong>convertisseurs statiques</strong> :</p>\n<ul>\n<li>le <strong>transformateur-redresseur</strong> (TRU) abaisse le 115 V alternatif puis le redresse pour alimenter le réseau 28 V continu ;</li>\n<li>l'<strong>onduleur</strong> (convertisseur statique) produit une tension alternative à partir du continu de la batterie, par exemple pour alimenter des équipements essentiels en cas de perte des générateurs ;</li>\n<li>le <strong>chargeur de batterie</strong> régule la charge en fonction de la technologie et de la température.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le courant absorbé au primaire d'un transformateur. Données : transformateur 115 V / 26 V, charge au secondaire 2 A. 1) Puissance au secondaire : 26 × 2 = 52 VA. 2) En négligeant les pertes, la puissance au primaire est la même : 52 VA. 3) Courant primaire : 52 / 115 ≈ 0,45 A. 4) Vérifier le rapport : la tension est divisée par environ 4,4, le courant est multiplié par 4,4.</div>\n<p>Le réseau de bord est organisé en <strong>barres</strong> (barres principales, barres essentielles, barres de secours) protégées par des disjoncteurs et des fusibles. La logique de reconfiguration automatique permet de continuer à alimenter les équipements essentiels en cas de panne d'un générateur.</p>"
      },
      {
       "titre": "Générateurs et moteurs électriques",
       "contenu": "<p>Une <strong>machine électrique tournante</strong> convertit l'énergie mécanique en énergie électrique (génératrice) ou l'inverse (moteur). En courant continu, la machine comprend un inducteur qui crée le champ et un induit qui tourne, relié à l'extérieur par un collecteur et des balais. Sur avion léger et sur certains turbopropulseurs, une même machine sert de <strong>démarreur-génératrice</strong> : elle lance le moteur, puis produit le courant continu.</p>\n<p>Sur avion de transport, les générateurs alternatifs sont des machines synchrones sans balais entraînées par le moteur. Pour obtenir une fréquence constante malgré la variation du régime moteur, ils sont souvent associés à un entraînement à vitesse constante intégré : l'ensemble est appelé <strong>IDG</strong> (Integrated Drive Generator). Un <strong>APU</strong> (groupe auxiliaire de puissance) entraîne un générateur supplémentaire, et le sol peut alimenter l'avion par une prise de parc.</p>\n<p>Les <strong>moteurs</strong> électriques de bord entraînent pompes, ventilateurs, vérins électromécaniques et actionneurs de volets de compensation. Les moteurs alternatifs asynchrones triphasés sont robustes et simples ; leur sens de rotation dépend de l'ordre des phases. Les moteurs continus à aimants permanents et les moteurs sans balais commandés électroniquement équipent de nombreux actionneurs.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> inverser deux phases à la reconnexion d'un moteur triphasé inverse son sens de rotation. Une pompe tournant à l'envers ne débite pas et peut s'endommager. Le repérage des fils et l'essai fonctionnel prévu après la pose ne sont jamais facultatifs.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un réseau de bord typique d'avion de transport associe un réseau alternatif 115/200 V 400 Hz produit par les générateurs moteurs et APU, et un réseau 28 V continu produit par les transformateurs-redresseurs et secouru par les batteries.</div>"
      }
     ],
     "points_cles": [
      "Loi d'Ohm U = R × I et puissance P = U × I = R × I²",
      "Une mauvaise connexion crée une chute de tension et un échauffement localisés",
      "Un courant crée un champ magnétique ; un champ variable induit une tension",
      "L'ouverture d'un circuit inductif provoque une surtension à limiter",
      "Réseau alternatif typique : 115/200 V triphasé 400 Hz ; réseau continu : 28 V",
      "Valeur efficace = valeur maximale / √2 ; P = U × I × cos φ",
      "Le TRU transforme l'alternatif en continu, l'onduleur le continu en alternatif",
      "L'ordre des phases fixe le sens de rotation d'un moteur triphasé"
     ],
     "lexique": [
      {
       "terme": "Métallisation",
       "def": "Liaison électrique de faible résistance entre un équipement ou une pièce et la structure de l'aéronef."
      },
      {
       "terme": "Capacité d'une batterie",
       "def": "Quantité d'électricité qu'une batterie peut fournir, exprimée en ampères-heures."
      },
      {
       "terme": "Contacteur",
       "def": "Interrupteur électromagnétique commandé à distance, capable de commuter de forts courants."
      },
      {
       "terme": "Inductance",
       "def": "Propriété d'une bobine de s'opposer aux variations du courant, exprimée en henrys."
      },
      {
       "terme": "Valeur efficace",
       "def": "Valeur d'une tension alternative produisant le même effet thermique qu'une tension continue de même valeur."
      },
      {
       "terme": "Puissance apparente",
       "def": "Produit de la tension efficace par le courant efficace, exprimé en voltampères."
      },
      {
       "terme": "TRU",
       "def": "Transformateur-redresseur : convertisseur qui produit du courant continu à partir du réseau alternatif."
      },
      {
       "terme": "Onduleur",
       "def": "Convertisseur statique qui produit une tension alternative à partir d'une source continue."
      },
      {
       "terme": "IDG",
       "def": "Générateur à entraînement intégré qui fournit un courant alternatif de fréquence constante."
      },
      {
       "terme": "Barre",
       "def": "Point de distribution du réseau électrique de bord alimentant un groupe d'équipements."
      }
     ]
    },
    {
     "id": "baer-electronique-numerique",
     "titre": "Électronique, numération et logique",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Identifier les composants électroniques de base et leur rôle dans un équipement de bord",
      "Décrire une chaîne d'instrumentation : capteur, conditionnement, conversion, traitement, affichage",
      "Convertir un nombre entre les bases décimale, binaire, octale et hexadécimale",
      "Établir la table de vérité d'une fonction logique simple",
      "Décrire les technologies d'affichage électronique du poste de pilotage"
     ],
     "sections": [
      {
       "titre": "Les composants électroniques de base",
       "contenu": "<p>Un équipement avionique est construit à partir d'un petit nombre de composants élémentaires, assemblés sur des <strong>cartes électroniques</strong> (circuits imprimés). Les connaître permet de comprendre une description de fonctionnement et les précautions de manipulation.</p>\n<table><thead><tr><th>Composant</th><th>Rôle</th><th>Point d'attention</th></tr></thead><tbody>\n<tr><td>Résistance</td><td>Limiter un courant, diviser une tension</td><td>Valeur repérée par code couleur ou marquage</td></tr>\n<tr><td>Condensateur</td><td>Stocker une charge, filtrer, découpler</td><td>Certains sont polarisés et peuvent rester chargés après coupure</td></tr>\n<tr><td>Diode</td><td>Laisser passer le courant dans un seul sens</td><td>Sens de montage repéré par un anneau côté cathode</td></tr>\n<tr><td>Diode Zener</td><td>Stabiliser une tension de référence</td><td>Fonctionne en inverse</td></tr>\n<tr><td>Transistor</td><td>Amplifier un signal ou commuter un courant</td><td>Sensible aux décharges électrostatiques (surtout MOS)</td></tr>\n<tr><td>Circuit intégré</td><td>Réaliser une fonction complète (amplificateur, mémoire, microprocesseur)</td><td>Très sensible aux décharges électrostatiques</td></tr>\n</tbody></table>\n<p>Les <strong>semi-conducteurs</strong> (silicium dopé) sont à la base des diodes, transistors et circuits intégrés. Une diode au silicium conduit lorsqu'on lui applique, dans le sens direct, une tension supérieure à environ 0,6 à 0,7 V. Le <strong>transistor</strong> utilisé en commutation se comporte comme un interrupteur commandé : un faible courant ou une faible tension de commande permet de faire passer ou de bloquer un courant plus important.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une décharge électrostatique de quelques centaines de volts, imperceptible pour l'opérateur, suffit à détruire ou à fragiliser un composant MOS. Les cartes et équipements portant le symbole ESD se manipulent uniquement sur poste protégé, avec bracelet relié à la terre, et se transportent dans des emballages antistatiques.</div>"
      },
      {
       "titre": "La chaîne d'instrumentation électronique",
       "contenu": "<p>Un <strong>système d'instrumentation</strong> transforme une grandeur physique (température, pression, position, vitesse de rotation) en une information exploitable par un calculateur ou affichée à l'équipage. Il se décompose en maillons successifs.</p>\n<ol>\n<li>Le <strong>capteur</strong> convertit la grandeur physique en grandeur électrique : thermocouple pour la température des gaz d'échappement d'un moteur, sonde à résistance pour la température d'huile, capteur de pression piézorésistif, synchro-transmetteur ou RVDT pour une position angulaire.</li>\n<li>Le <strong>conditionneur</strong> amplifie, filtre et met en forme le signal : un thermocouple ne délivre que quelques millivolts.</li>\n<li>Le <strong>convertisseur analogique-numérique</strong> (CAN) transforme la tension en un nombre binaire ; sa résolution dépend de son nombre de bits.</li>\n<li>Le <strong>calculateur</strong> traite le nombre : conversion en unité physique, comparaison à des seuils, élaboration d'alarmes.</li>\n<li>La donnée est transmise sur un <strong>bus</strong> et <strong>affichée</strong>.</li>\n</ol>\n<p>Un signal <strong>analogique</strong> varie de façon continue ; un signal <strong>numérique</strong> ne prend que des valeurs discrètes, codées en binaire. Le numérique résiste mieux aux perturbations et se transmet sur de longues distances sans dégradation, ce qui explique sa généralisation à bord.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la résolution d'un convertisseur. Données : CAN 12 bits, plage d'entrée 0 à 10 V. 1) Nombre de pas : 2<sup>12</sup> = 4 096. 2) Résolution : 10 / 4 096 ≈ 2,44 mV par pas. 3) Interpréter : une variation de tension inférieure à 2,44 mV n'est pas vue par le calculateur. 4) Ramener à la grandeur physique : si 10 V correspondent à 1 000 °C, la résolution est d'environ 0,24 °C.</div>"
      },
      {
       "titre": "Systèmes de numération",
       "contenu": "<p>Les calculateurs ne manipulent que deux états : 0 et 1. Ils comptent donc en <strong>binaire</strong> (base 2). Chaque chiffre binaire est un <strong>bit</strong> ; un groupe de 8 bits forme un <strong>octet</strong>. Pour faciliter la lecture des longues suites binaires, on utilise l'<strong>octal</strong> (base 8, groupes de 3 bits) et surtout l'<strong>hexadécimal</strong> (base 16, groupes de 4 bits), qui emploie les chiffres 0 à 9 puis les lettres A à F.</p>\n<table><thead><tr><th>Décimal</th><th>Binaire</th><th>Octal</th><th>Hexadécimal</th></tr></thead><tbody>\n<tr><td>5</td><td>0101</td><td>5</td><td>5</td></tr>\n<tr><td>10</td><td>1010</td><td>12</td><td>A</td></tr>\n<tr><td>15</td><td>1111</td><td>17</td><td>F</td></tr>\n<tr><td>200</td><td>1100 1000</td><td>310</td><td>C8</td></tr>\n<tr><td>255</td><td>1111 1111</td><td>377</td><td>FF</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> convertir 200 en binaire puis en hexadécimal. 1) Divisions successives par 2 en notant les restes : 200 → 0, 100 → 0, 50 → 0, 25 → 1, 12 → 0, 6 → 0, 3 → 1, 1 → 1. 2) Lire les restes du dernier au premier : 1100 1000. 3) Découper en groupes de 4 bits à partir de la droite : 1100 et 1000. 4) Convertir chaque groupe : 1100 = 12 = C, 1000 = 8. Résultat : C8 en hexadécimal. 5) Vérifier : C8 = 12 × 16 + 8 = 200.</div>\n<p>L'octal a une importance particulière en aéronautique : le <strong>code transpondeur</strong> affiché par l'équipage (par exemple 7000) est formé de quatre chiffres octaux, de 0 à 7 ; les chiffres 8 et 9 n'existent pas. Les étiquettes (labels) des mots de données ARINC 429 sont aussi exprimées en octal. Les adresses mémoire et les codes de panne des calculateurs sont souvent présentés en hexadécimal.</p>\n<p>Certains équipements codent les nombres en <strong>BCD</strong> (décimal codé binaire), chaque chiffre décimal occupant 4 bits, ce qui simplifie l'affichage. D'autres utilisent le <strong>code Gray</strong>, dans lequel une seule position binaire change d'un nombre au suivant, ce qui évite les erreurs de lecture des codeurs de position et des anciens codeurs d'altitude.</p>"
      },
      {
       "titre": "Circuits logiques",
       "contenu": "<p>Une <strong>fonction logique</strong> associe à des entrées binaires une sortie binaire. Elle est décrite par une <strong>table de vérité</strong> qui donne la sortie pour chaque combinaison des entrées. Les fonctions de base sont réalisées par des <strong>portes logiques</strong>.</p>\n<table><thead><tr><th>Fonction</th><th>Sortie à 1 lorsque…</th><th>Équation</th></tr></thead><tbody>\n<tr><td>NON (inverseur)</td><td>l'entrée est à 0</td><td>S = non a</td></tr>\n<tr><td>ET</td><td>toutes les entrées sont à 1</td><td>S = a · b</td></tr>\n<tr><td>OU</td><td>au moins une entrée est à 1</td><td>S = a + b</td></tr>\n<tr><td>NON-ET</td><td>au moins une entrée est à 0</td><td>S = non (a · b)</td></tr>\n<tr><td>NON-OU</td><td>toutes les entrées sont à 0</td><td>S = non (a + b)</td></tr>\n<tr><td>OU exclusif</td><td>les deux entrées sont différentes</td><td>S = a ⊕ b</td></tr>\n</tbody></table>\n<p>Les schémas de principe des manuels de maintenance représentent souvent la logique des systèmes par ces portes. Exemple : l'alarme de configuration au décollage retentit si les manettes de poussée sont en position décollage ET si (les volets ne sont pas en position de décollage OU les aérofreins ne sont pas rentrés OU le compensateur est hors de la plage verte). Lire cette logique permet de comprendre pourquoi une alarme se déclenche et quel capteur interroger.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de nombreux systèmes utilisent des informations de type « avion au sol » ou « avion en vol », élaborées à partir des capteurs de compression des amortisseurs de train. Une panne d'un seul capteur peut fausser des logiques dans de nombreux systèmes ; c'est souvent la première piste vérifiée quand plusieurs systèmes présentent des anomalies simultanées à l'atterrissage.</div>\n<p>Les <strong>bascules</strong> mémorisent un état binaire ; associées, elles forment des compteurs, des registres et des mémoires. Les calculateurs modernes intègrent ces fonctions dans des microprocesseurs et des circuits programmables, mais la logique de fonctionnement reste décrite de la même manière dans la documentation.</p>"
      },
      {
       "titre": "Les affichages électroniques",
       "contenu": "<p>Les instruments à aiguilles ont été largement remplacés par des <strong>écrans</strong> regroupés dans un « poste de pilotage tout écran » (glass cockpit). Les informations de pilotage sont présentées sur le <strong>PFD</strong> (Primary Flight Display : attitude, vitesse, altitude, cap, vitesse verticale) et la navigation sur le <strong>ND</strong> (Navigation Display). Les paramètres moteurs et les alarmes apparaissent sur des écrans dédiés, nommés ECAM chez Airbus et EICAS chez Boeing.</p>\n<table><thead><tr><th>Technologie</th><th>Principe</th><th>Usage à bord</th></tr></thead><tbody>\n<tr><td>Tube cathodique (CRT)</td><td>Faisceau d'électrons balayant un écran phosphorescent</td><td>Anciennes générations d'écrans, lourds et chauds</td></tr>\n<tr><td>Écran à cristaux liquides (LCD)</td><td>Cristaux orientés par une tension, rétroéclairage</td><td>Écrans actuels du poste de pilotage</td></tr>\n<tr><td>Diodes électroluminescentes (LED)</td><td>Semi-conducteur émettant de la lumière</td><td>Voyants, rétroéclairage, afficheurs à segments</td></tr>\n<tr><td>Afficheur à segments</td><td>Chiffres formés de 7 segments allumés ou éteints</td><td>Afficheurs de fréquence des boîtiers radio</td></tr>\n</tbody></table>\n<p>Les écrans sont pilotés par des générateurs de symboles ou par des calculateurs d'affichage qui reçoivent les données par les bus. Une même donnée (par exemple l'altitude) peut ainsi provenir de plusieurs sources ; l'équipage peut commuter les sources en cas de panne.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un écran qui affiche une croix rouge ou un drapeau d'alarme à la place d'une donnée ne signale pas forcément une panne de l'écran : le plus souvent, la donnée est absente ou invalide à la source. Le diagnostic remonte la chaîne d'instrumentation, de l'affichage vers le capteur.</div>\n<p>Les écrans sont aussi des outils de maintenance : les pages système affichent pressions, températures, positions de vannes et états des équipements, et l'accès aux fonctions de maintenance des calculateurs se fait souvent par un écran multifonction du poste de pilotage.</p>"
      }
     ],
     "points_cles": [
      "Diodes, transistors et circuits intégrés sont des semi-conducteurs sensibles aux décharges électrostatiques",
      "Une chaîne d'instrumentation comprend capteur, conditionneur, convertisseur, calculateur et affichage",
      "La résolution d'un convertisseur de n bits vaut plage / 2 puissance n",
      "Un groupe de 4 bits correspond à un chiffre hexadécimal, un groupe de 3 bits à un chiffre octal",
      "Le code transpondeur et les labels ARINC 429 sont exprimés en octal",
      "ET, OU, NON et leurs combinaisons décrivent les logiques d'alarme et de commande",
      "Les informations sol/vol sont des entrées logiques utilisées par de nombreux systèmes",
      "Une donnée invalide affichée signale souvent une panne en amont de l'écran"
     ],
     "lexique": [
      {
       "terme": "Semi-conducteur",
       "def": "Matériau, comme le silicium dopé, dont la conductivité est contrôlable ; base des diodes et transistors."
      },
      {
       "terme": "ESD",
       "def": "Décharge électrostatique capable d'endommager les composants électroniques sensibles."
      },
      {
       "terme": "Thermocouple",
       "def": "Capteur de température formé de deux métaux différents qui produit une faible tension fonction de la température."
      },
      {
       "terme": "CAN",
       "def": "Convertisseur analogique-numérique : transforme une tension en nombre binaire."
      },
      {
       "terme": "Bit",
       "def": "Chiffre binaire, valant 0 ou 1 ; huit bits forment un octet."
      },
      {
       "terme": "Hexadécimal",
       "def": "Système de numération en base 16 utilisant les chiffres 0 à 9 et les lettres A à F."
      },
      {
       "terme": "Table de vérité",
       "def": "Tableau donnant la sortie d'une fonction logique pour toutes les combinaisons de ses entrées."
      },
      {
       "terme": "PFD",
       "def": "Écran principal de vol présentant attitude, vitesse, altitude et cap."
      },
      {
       "terme": "ECAM / EICAS",
       "def": "Systèmes d'affichage des paramètres moteurs, des alarmes et des pages système, chez Airbus et Boeing."
      }
     ]
    },
    {
     "id": "baer-aerodynamique",
     "titre": "Aérodynamique : l'air, l'atmosphère et les forces sur l'aile",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire les propriétés de l'air et l'atmosphère standard (ISA)",
      "Appliquer les lois de la statique des fluides et la conservation du débit",
      "Expliquer la mesure de vitesse par pression dynamique",
      "Calculer une portance ou une traînée à partir de la formule générale",
      "Décrire les effets de la compressibilité aux vitesses élevées"
     ],
     "sections": [
      {
       "titre": "L'air et l'atmosphère standard",
       "contenu": "<p>L'air est un mélange de gaz (environ 78 % d'azote et 21 % d'oxygène) caractérisé par trois grandeurs liées : sa <strong>pression</strong> p, sa <strong>température</strong> T et sa <strong>masse volumique</strong> ρ (rhô). Pour un gaz parfait, ces grandeurs sont reliées par la loi p = ρ × r × T, avec T en kelvins et r ≈ 287 J/(kg·K) pour l'air. À pression égale, un air chaud est donc moins dense qu'un air froid.</p>\n<p>Pour que les performances, les instruments et les essais soient comparables partout, on utilise une atmosphère de référence : l'<strong>atmosphère standard internationale</strong> (ISA), définie par l'OACI.</p>\n<table><thead><tr><th>Paramètre ISA au niveau de la mer</th><th>Valeur</th></tr></thead><tbody>\n<tr><td>Pression</td><td>1 013,25 hPa (29,92 inHg)</td></tr>\n<tr><td>Température</td><td>15 °C (288,15 K)</td></tr>\n<tr><td>Masse volumique</td><td>1,225 kg/m³</td></tr>\n<tr><td>Gradient de température jusqu'à 11 000 m</td><td>- 6,5 °C par 1 000 m (environ - 2 °C par 1 000 ft)</td></tr>\n<tr><td>Température au-dessus de 11 000 m (jusqu'à 20 000 m)</td><td>- 56,5 °C constante</td></tr>\n</tbody></table>\n<p>La pression diminue avec l'altitude : elle vaut environ la moitié de sa valeur au sol vers 5 500 m, et environ le quart vers 11 000 m. C'est cette diminution qui impose la pressurisation des cabines et qui est exploitée par l'altimètre barométrique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la température ISA à une altitude donnée. Exemple : 3 000 m. 1) Vérifier que l'altitude est inférieure à 11 000 m (troposphère). 2) Appliquer le gradient : 15 - 6,5 × 3 = 15 - 19,5 = - 4,5 °C. 3) Comparer à la température réelle : si l'on mesure + 5,5 °C, on dit que l'atmosphère est « ISA + 10 ». Les performances des moteurs et des avions sont dégradées par une atmosphère plus chaude que le standard.</div>"
      },
      {
       "titre": "Statique des fluides et pression",
       "contenu": "<p>Dans un fluide au repos, la pression augmente avec la profondeur. Pour un liquide de masse volumique ρ, la différence de pression entre deux points séparés d'une hauteur h vaut Δp = ρ × g × h. Cette loi explique la pression au fond d'un réservoir de carburant et le fonctionnement des manomètres à colonne de liquide utilisés autrefois.</p>\n<p>Le <strong>théorème de Pascal</strong> indique qu'une variation de pression appliquée en un point d'un liquide incompressible au repos se transmet intégralement en tout point. C'est le principe de toute la <strong>transmission hydraulique</strong> : une pompe crée une pression qui agit sur tous les vérins du circuit. Si un petit piston de 1 cm² reçoit 100 N, la pression vaut 10<sup>6</sup> Pa (10 bar) et un grand piston de 50 cm² produit 5 000 N.</p>\n<p>Le <strong>principe d'Archimède</strong> (tout corps immergé subit une poussée verticale égale au poids du fluide déplacé) explique le vol des aérostats et le fonctionnement de certains jaugeurs à flotteur dans les réservoirs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on distingue la <strong>pression absolue</strong> (mesurée par rapport au vide) et la <strong>pression relative</strong> ou manométrique (mesurée par rapport à la pression atmosphérique). Un pneu « gonflé à 10 bar » est à 10 bar relatifs, soit environ 11 bar absolus au niveau de la mer. La documentation américaine distingue psig (relatif) et psia (absolu).</div>"
      },
      {
       "titre": "Dynamique des fluides : débit et théorème de Bernoulli",
       "contenu": "<p>Dans un écoulement permanent, le <strong>débit</strong> se conserve : la masse d'air qui entre dans un tube de courant par seconde est égale à celle qui en sort. Pour un fluide incompressible, le débit volumique s'écrit Q = S × V, constant le long du tube : si la section diminue, la vitesse augmente. C'est l'effet <strong>Venturi</strong>, utilisé dans les carburateurs et autrefois pour entraîner les instruments gyroscopiques.</p>\n<p>Le <strong>théorème de Bernoulli</strong>, pour un écoulement sans frottement et sans changement d'altitude notable, indique que la somme de la pression statique et de la pression dynamique reste constante le long d'une ligne de courant : p + ½ × ρ × V² = constante. La grandeur ½ × ρ × V² est la <strong>pression dynamique</strong>, notée q. Là où l'air accélère, sa pression statique diminue.</p>\n<p>La mesure de la vitesse d'un avion repose sur ce principe. L'<strong>antenne Pitot</strong>, orientée face à l'écoulement, mesure la <strong>pression totale</strong> (statique + dynamique) ; les <strong>prises statiques</strong>, placées sur le fuselage parallèlement à l'écoulement, mesurent la pression statique. La différence est la pression dynamique, d'où l'on déduit la vitesse indiquée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une pression dynamique. Données : vitesse 70 m/s (environ 136 kt) au niveau de la mer, ρ = 1,225 kg/m³. 1) Appliquer q = ½ × ρ × V² = 0,5 × 1,225 × 70² = 0,5 × 1,225 × 4 900 ≈ 3 000 Pa. 2) Exprimer en hectopascals : 30 hPa. 3) Interpréter : à cette vitesse, l'antenne Pitot mesure seulement 30 hPa de plus que les prises statiques ; une fuite minime ou une obstruction partielle fausse fortement l'indication.</div>\n<p>Dans la réalité, l'air est visqueux : une mince <strong>couche limite</strong> se forme le long des parois, où la vitesse passe de zéro au contact à la vitesse de l'écoulement extérieur. Elle peut être <strong>laminaire</strong> (filets parallèles) ou <strong>turbulente</strong>, et peut décoller de la paroi : c'est l'origine du décrochage.</p>"
      },
      {
       "titre": "Portance, traînée et polaire",
       "contenu": "<p>Toutes les forces aérodynamiques s'expriment par une formule de même forme : F = ½ × ρ × V² × S × C, où S est une surface de référence (la surface alaire) et C un <strong>coefficient aérodynamique</strong> sans unité, qui dépend de la forme du profil et de son <strong>incidence</strong> (angle entre la corde du profil et la direction de l'écoulement). On écrit ainsi la <strong>portance</strong> Fz = ½ × ρ × V² × S × Cz, perpendiculaire à l'écoulement, et la <strong>traînée</strong> Fx = ½ × ρ × V² × S × Cx, parallèle à l'écoulement. La documentation anglophone note ces coefficients CL et CD.</p>\n<p>Le coefficient de portance croît à peu près proportionnellement à l'incidence jusqu'à une valeur maximale, atteinte à l'<strong>incidence de décrochage</strong> (souvent 15 à 18° pour un profil sans dispositif hypersustentateur). Au-delà, l'écoulement décolle de l'extrados et la portance chute brutalement. Les <strong>volets</strong> et les <strong>becs</strong> augmentent le Cz maximal et permettent de voler moins vite au décollage et à l'atterrissage.</p>\n<p>La traînée totale se compose de la <strong>traînée de frottement</strong> et de <strong>forme</strong> (liées à l'état de surface et au profil) et de la <strong>traînée induite</strong>, conséquence de la portance : les tourbillons marginaux en bout d'aile. Les <strong>winglets</strong> (ailettes) réduisent cette traînée induite. La courbe de Cz en fonction de Cx est la <strong>polaire</strong> de l'aile ; le rapport Cz / Cx, la <strong>finesse</strong>, mesure son efficacité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'une aile porte un avion. Données : masse 60 000 kg, surface alaire 122 m², vitesse 70 m/s, ρ = 1,225 kg/m³. 1) Poids : 60 000 × 9,81 ≈ 588 600 N. 2) Pression dynamique : 3 000 Pa environ (calcul précédent). 3) En vol stabilisé, portance = poids, donc Cz = 588 600 / (3 000 × 122) ≈ 1,6. 4) Interpréter : un Cz de 1,6 dépasse ce que donne une aile lisse ; à cette vitesse, l'avion doit voler volets et becs sortis.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une rayure profonde, une réparation en saillie ou un joint de bord d'attaque arraché augmentent la traînée et peuvent avancer le décrochage localement. Les manuels fixent des tolérances de lissage aérodynamique pour les réparations sur les surfaces sensibles, notamment les bords d'attaque.</div>"
      },
      {
       "titre": "Aérodynamique compressible",
       "contenu": "<p>Aux vitesses faibles, on considère l'air comme incompressible. Au-delà d'environ 0,3 fois la vitesse du son, sa compressibilité ne peut plus être négligée. La vitesse du son dépend uniquement de la température : environ 340 m/s au sol en ISA (15 °C), environ 295 m/s à - 56,5 °C. Le <strong>nombre de Mach</strong> est le rapport entre la vitesse de l'avion et la vitesse locale du son : M = V / a.</p>\n<table><thead><tr><th>Domaine</th><th>Nombre de Mach</th><th>Caractéristiques</th></tr></thead><tbody>\n<tr><td>Subsonique</td><td>M &lt; 0,8 environ</td><td>Écoulement partout subsonique</td></tr>\n<tr><td>Transsonique</td><td>0,8 à 1,2 environ</td><td>Zones supersoniques locales sur l'extrados, ondes de choc</td></tr>\n<tr><td>Supersonique</td><td>1,2 à 5</td><td>Ondes de choc attachées à l'avion</td></tr>\n</tbody></table>\n<p>Un avion de ligne vole vers Mach 0,78 à 0,85. À ces vitesses, l'air accéléré sur l'extrados devient localement supersonique et une <strong>onde de choc</strong> se forme : la traînée augmente fortement (traînée d'onde) et le décollement derrière le choc peut provoquer des vibrations (buffeting). La <strong>flèche</strong> des ailes et les profils supercritiques retardent ces phénomènes. Le <strong>Mach critique</strong> est le nombre de Mach de vol pour lequel l'écoulement atteint pour la première fois la vitesse du son en un point de l'aile.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une vitesse indiquée constante ne signifie pas un Mach constant. En montée, à vitesse indiquée constante, la vitesse vraie augmente et la vitesse du son diminue avec la température : le Mach augmente. C'est pourquoi les avions de transport limitent leur vitesse en Mach (MMO) en altitude et en vitesse indiquée (VMO) à basse altitude.</div>"
      }
     ],
     "points_cles": [
      "ISA au niveau de la mer : 1 013,25 hPa, 15 °C, 1,225 kg/m³, puis - 6,5 °C par 1 000 m",
      "Théorème de Pascal : la pression se transmet intégralement dans un liquide au repos",
      "Conservation du débit : une section plus faible impose une vitesse plus grande",
      "Bernoulli : pression statique + pression dynamique ½ρV² = constante",
      "Le Pitot mesure la pression totale, les prises statiques la pression statique",
      "Portance et traînée valent ½ × ρ × V² × S × coefficient",
      "Au-delà de l'incidence de décrochage, la portance chute brutalement",
      "Vers Mach 0,8, des ondes de choc augmentent la traînée et provoquent des vibrations"
     ],
     "lexique": [
      {
       "terme": "ISA",
       "def": "Atmosphère standard internationale définie par l'OACI, servant de référence aux instruments et aux performances."
      },
      {
       "terme": "Masse volumique",
       "def": "Masse d'un volume unité de fluide, en kg/m³ ; elle diminue quand l'altitude ou la température augmente."
      },
      {
       "terme": "Pression dynamique",
       "def": "Terme ½ × ρ × V², qui représente l'énergie de mouvement de l'air par unité de volume."
      },
      {
       "terme": "Antenne Pitot",
       "def": "Sonde orientée face à l'écoulement qui mesure la pression totale."
      },
      {
       "terme": "Incidence",
       "def": "Angle entre la corde du profil et la direction de l'écoulement de l'air."
      },
      {
       "terme": "Couche limite",
       "def": "Mince couche d'air au voisinage d'une paroi où la vitesse est ralentie par la viscosité."
      },
      {
       "terme": "Traînée induite",
       "def": "Part de la traînée liée à la production de portance et aux tourbillons de bout d'aile."
      },
      {
       "terme": "Finesse",
       "def": "Rapport entre la portance et la traînée, mesure de l'efficacité aérodynamique."
      },
      {
       "terme": "Nombre de Mach",
       "def": "Rapport entre la vitesse de l'avion et la vitesse locale du son."
      },
      {
       "terme": "Onde de choc",
       "def": "Zone très mince où la pression, la température et la vitesse de l'air varient brutalement."
      }
     ]
    },
    {
     "id": "baer-mecanique-vol-centrage",
     "titre": "Mécanique du vol, hélices, voilures tournantes et centrage",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Expliquer l'équilibre d'un aéronef en vol et le rôle des gouvernes et compensateurs",
      "Décrire la stabilité selon les trois axes",
      "Expliquer le fonctionnement d'une hélice à calage variable",
      "Décrire les particularités aérodynamiques d'un hélicoptère",
      "Calculer une position de centre de gravité et la comparer aux limites de centrage"
     ],
     "sections": [
      {
       "titre": "Les forces en vol et l'équilibre",
       "contenu": "<p>En vol rectiligne en palier à vitesse constante, quatre forces s'équilibrent : la <strong>portance</strong> compense le <strong>poids</strong>, la <strong>traction</strong> ou <strong>poussée</strong> du groupe motopropulseur compense la <strong>traînée</strong>. Toute modification d'une de ces forces se traduit par une accélération, une montée ou une descente.</p>\n<p>Les forces ne s'appliquent pas au même point. Le poids s'applique au <strong>centre de gravité</strong> (CG) et la portance de l'aile en un point appelé <strong>centre de poussée</strong>, généralement situé en arrière du CG sur un avion classique. Le couple ainsi créé tend à faire piquer l'avion ; il est équilibré par l'<strong>empennage horizontal</strong>, qui exerce en général une force vers le bas. L'avion est donc « équilibré » autour de son axe de tangage par la combinaison de ces efforts.</p>\n<p>En virage, la portance est inclinée : sa composante verticale doit toujours compenser le poids, donc la portance totale augmente. À 60° d'inclinaison, la portance vaut le double du poids : c'est le facteur de charge n = 1 / cos(inclinaison). La vitesse de décrochage augmente comme la racine carrée du facteur de charge, soit d'environ 41 % à 60° d'inclinaison.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'équilibre en tangage dépend de la position du centre de gravité. Un CG trop avant rend l'avion lourd à cabrer et peut empêcher la rotation au décollage ; un CG trop arrière le rend instable et dangereux. D'où l'importance du centrage, contrôlé avant chaque vol et recalculé après certaines interventions de maintenance.</div>"
      },
      {
       "titre": "Axes, gouvernes et stabilité",
       "contenu": "<p>Un aéronef tourne autour de trois axes passant par son centre de gravité, chacun commandé par une gouverne principale.</p>\n<table><thead><tr><th>Axe</th><th>Mouvement</th><th>Gouverne principale</th><th>Commande pilote</th></tr></thead><tbody>\n<tr><td>Latéral (transversal)</td><td>Tangage</td><td>Gouverne de profondeur, plan horizontal réglable</td><td>Manche avant-arrière</td></tr>\n<tr><td>Longitudinal</td><td>Roulis</td><td>Ailerons, spoilers</td><td>Manche gauche-droite</td></tr>\n<tr><td>Vertical</td><td>Lacet</td><td>Gouverne de direction</td><td>Palonnier</td></tr>\n</tbody></table>\n<p>Un aéronef est <strong>stable</strong> si, écarté de sa position d'équilibre par une perturbation (rafale), il tend à y revenir de lui-même. La stabilité en tangage est assurée par l'empennage horizontal et par la position du CG en avant du <strong>foyer</strong> (point où s'appliquent les variations de portance) ; la stabilité en lacet par la dérive, qui agit comme une girouette ; la stabilité en roulis par le <strong>dièdre</strong> des ailes et la flèche.</p>\n<p>Les <strong>compensateurs</strong> (tabs) et le <strong>plan horizontal réglable</strong> (PHR, ou THS chez Airbus) permettent d'annuler l'effort que le pilote devrait maintenir sur le manche. Les <strong>gouvernes secondaires</strong> comprennent les dispositifs hypersustentateurs (volets, becs) et les <strong>spoilers</strong> (destructeurs de portance), utilisés en aérofreins, pour le roulis et au sol pour plaquer l'avion sur la piste.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'inversion d'un sens de commande (aileron qui se lève alors qu'il devrait s'abaisser) a été à l'origine d'accidents graves après maintenance. Après toute intervention sur une commande de vol, la documentation impose un contrôle du sens de débattement et une <strong>inspection indépendante</strong> par une seconde personne qualifiée.</div>"
      },
      {
       "titre": "L'hélice",
       "contenu": "<p>Une <strong>hélice</strong> est une voilure tournante : chacune de ses pales est un profil aérodynamique qui produit une force (la traction) en tournant. L'angle entre la corde de la pale et le plan de rotation est le <strong>calage</strong> (pas). La vitesse de rotation étant plus grande en bout de pale qu'au pied, la pale est vrillée : le calage diminue du pied vers l'extrémité pour que l'incidence reste convenable sur toute la longueur.</p>\n<p>Avec une hélice à <strong>calage fixe</strong>, l'incidence des pales change avec la vitesse de l'avion ; le rendement n'est bon que dans une plage de vitesses. L'hélice à <strong>calage variable</strong>, associée à un <strong>régulateur</strong> (governor), modifie automatiquement le calage pour maintenir un régime de rotation constant choisi par le pilote : c'est l'hélice à vitesse constante des turbopropulseurs et de nombreux avions à moteur à pistons.</p>\n<ul>\n<li><strong>Petit pas</strong> : calage faible, utilisé au décollage pour obtenir le régime maximal.</li>\n<li><strong>Grand pas</strong> : calage élevé, en croisière rapide.</li>\n<li><strong>Drapeau</strong> : pales alignées avec l'écoulement, pour réduire la traînée d'un moteur arrêté en vol.</li>\n<li><strong>Reverse</strong> (sur turbopropulseur) : calage négatif, l'hélice freine l'avion à l'atterrissage.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une hélice est un ensemble à risque majeur. Au sol, on la considère toujours comme pouvant démarrer : contact magnétos coupé vérifié, zone dégagée, jamais de manipulation de la pale en position de compression d'un cylindre. Les entailles sur le bord d'attaque se traitent selon les limites du manuel de l'hélice, car une entaille amorce des criques de fatigue.</div>"
      },
      {
       "titre": "Particularités des voilures tournantes",
       "contenu": "<p>Le <strong>rotor principal</strong> d'un hélicoptère assure à la fois la sustentation et la propulsion. Le pilote agit sur le calage des pales par l'intermédiaire du <strong>plateau cyclique</strong> : le <strong>pas collectif</strong> modifie le calage de toutes les pales en même temps (montée, descente) ; le <strong>pas cyclique</strong> le modifie au cours de chaque tour, ce qui incline le disque rotor et donne la direction de déplacement.</p>\n<p>Le couple moteur appliqué au rotor tend à faire tourner le fuselage en sens inverse : ce <strong>couple de réaction</strong> est compensé par le <strong>rotor anticouple</strong> (rotor de queue ou fenestron), dont le pas est commandé par le palonnier, ou par d'autres dispositifs selon les constructeurs.</p>\n<p>En vol de translation, la pale qui avance voit une vitesse relative plus élevée que la pale qui recule. Pour équilibrer la portance, les pales <strong>battent</strong> (montent et descendent) grâce à des articulations ou à des moyeux souples, et leur calage varie au cours du tour. La vitesse maximale est limitée par le décrochage de la pale reculante et par la compressibilité en bout de pale avançante.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comprendre le réglage du suivi des pales (tracking). 1) Le rotor tourne au régime prévu ; chaque pale porte un repère ou est détectée par un capteur optique. 2) On mesure la hauteur de passage de chaque pale et le niveau de vibration au moyen d'un accéléromètre et d'un équipement d'équilibrage. 3) L'appareil calcule les corrections : réglage de longueur de biellette de pas, de compensateur de pale ou ajout de masses. 4) On applique les corrections prescrites puis on refait la mesure, jusqu'à obtenir des valeurs dans les tolérances du manuel.</div>"
      },
      {
       "titre": "Masse et centrage",
       "contenu": "<p>La <strong>masse</strong> d'un aéronef et la position de son <strong>centre de gravité</strong> doivent rester dans des limites définies par le constructeur et approuvées lors de la certification. Elles figurent dans un <strong>diagramme de centrage</strong> (enveloppe), qui porte en ordonnée la masse et en abscisse la position du CG, exprimée par un <strong>bras de levier</strong> (distance à une référence appelée datum) ou en pourcentage de la <strong>corde aérodynamique moyenne</strong> (% MAC).</p>\n<p>La position du CG se calcule par les <strong>moments</strong> : chaque masse est multipliée par son bras de levier ; la somme des moments divisée par la masse totale donne le bras de levier du CG. On distingue la <strong>masse à vide de base</strong> (avion équipé, fluides non consommables), établie par <strong>pesée</strong>, puis les charges variables : équipage, passagers, fret, carburant.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un nouveau centrage après une modification. Données : masse à vide 1 200 kg au bras de 2,30 m ; on dépose un équipement de 8 kg au bras de 0,90 m et on installe un équipement de 15 kg au bras de 4,20 m. 1) Moment initial : 1 200 × 2,30 = 2 760 kg·m. 2) Moment retiré : 8 × 0,90 = 7,2 kg·m. 3) Moment ajouté : 15 × 4,20 = 63 kg·m. 4) Nouvelle masse : 1 200 - 8 + 15 = 1 207 kg. 5) Nouveau moment : 2 760 - 7,2 + 63 = 2 815,8 kg·m. 6) Nouveau bras : 2 815,8 / 1 207 ≈ 2,333 m. 7) Le CG a reculé de 33 mm environ : la fiche de pesée et centrage doit être mise à jour.</div>\n<p>Toute modification de l'équipement, réparation importante, peinture complète ou ajout de ballast modifie la masse à vide et son centrage. Le dossier de l'aéronef doit alors être mis à jour, soit par calcul, soit par une nouvelle pesée lorsque la documentation l'exige ou lorsque l'écart cumulé devient trop important.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une peinture complète d'avion de transport peut représenter plusieurs centaines de kilogrammes, en majorité sur la dérive et le fuselage arrière. Oublier de mettre à jour la masse et le centrage après un décapage-peinture est une erreur classique.</div>"
      }
     ],
     "points_cles": [
      "En palier stabilisé, portance = poids et poussée = traînée",
      "En virage, le facteur de charge vaut 1 / cos(inclinaison)",
      "Tangage, roulis et lacet sont commandés par profondeur, ailerons-spoilers et direction",
      "La stabilité en tangage exige un CG en avant du foyer",
      "Le sens de débattement des gouvernes se vérifie après toute intervention",
      "Une hélice à vitesse constante adapte son calage pour garder le régime choisi",
      "Le pas collectif et le pas cyclique commandent le rotor d'un hélicoptère",
      "Bras du CG = somme des moments / masse totale",
      "Masse à vide et centrage sont mis à jour après modification, réparation ou peinture"
     ],
     "lexique": [
      {
       "terme": "Centre de gravité",
       "def": "Point d'application du poids de l'aéronef."
      },
      {
       "terme": "Foyer",
       "def": "Point où s'appliquent les variations de portance quand l'incidence varie."
      },
      {
       "terme": "Compensateur",
       "def": "Petite surface mobile ou réglage qui annule l'effort à maintenir sur une commande."
      },
      {
       "terme": "Plan horizontal réglable",
       "def": "Empennage horizontal dont le calage est réglable pour équilibrer l'avion en tangage."
      },
      {
       "terme": "Calage",
       "def": "Angle entre la corde d'une pale et le plan de rotation de l'hélice ou du rotor."
      },
      {
       "terme": "Mise en drapeau",
       "def": "Orientation des pales d'hélice dans le lit du vent pour réduire la traînée d'un moteur arrêté."
      },
      {
       "terme": "Plateau cyclique",
       "def": "Mécanisme qui transmet les commandes de pas collectif et cyclique aux pales d'un rotor."
      },
      {
       "terme": "Datum",
       "def": "Plan de référence à partir duquel sont mesurés les bras de levier du centrage."
      },
      {
       "terme": "% MAC",
       "def": "Position du centre de gravité exprimée en pourcentage de la corde aérodynamique moyenne."
      },
      {
       "terme": "Masse à vide de base",
       "def": "Masse de l'aéronef équipé, avec ses fluides non consommables, établie par pesée."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Propulsion, matériaux et systèmes automatisés",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "baer-propulsion",
     "titre": "Propulsion : turbomachines et moteurs à pistons",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Expliquer le principe de la propulsion par réaction et la notion de poussée",
      "Décrire le cycle et les modules d'un turboréacteur à double flux",
      "Interpréter les paramètres moteur surveillés : N1, N2, EGT, débit carburant, huile",
      "Décrire le fonctionnement d'un moteur à pistons d'aviation et de ses circuits",
      "Citer les risques et précautions spécifiques aux interventions sur moteur"
     ],
     "sections": [
      {
       "titre": "Le principe de la propulsion",
       "contenu": "<p>Tout groupe motopropulseur produit une force en accélérant une masse d'air vers l'arrière : par réaction, l'aéronef est poussé vers l'avant (troisième loi de Newton). La <strong>poussée</strong> vaut, en simplifiant, le débit massique d'air multiplié par l'augmentation de sa vitesse : F = Qm × (V sortie - V entrée). On obtient la même poussée en accélérant fortement un faible débit d'air ou en accélérant modérément un grand débit ; la seconde solution a un meilleur <strong>rendement propulsif</strong> et fait moins de bruit.</p>\n<p>Ce constat explique l'évolution des moteurs : des turboréacteurs à simple flux des premiers avions à réaction vers les <strong>turbofans</strong> (turboréacteurs à double flux) à grand taux de dilution des avions actuels, et vers les <strong>turbopropulseurs</strong> où une hélice accélère un très grand débit d'air à faible vitesse, intéressants aux vitesses modérées.</p>\n<table><thead><tr><th>Type</th><th>Principe</th><th>Utilisation</th></tr></thead><tbody>\n<tr><td>Turboréacteur simple flux</td><td>Tout l'air traverse le générateur de gaz</td><td>Avions militaires anciens, missiles</td></tr>\n<tr><td>Turbofan double flux</td><td>Une soufflante accélère un flux secondaire qui contourne le cœur</td><td>Avions de transport, avions d'affaires</td></tr>\n<tr><td>Turbopropulseur</td><td>La turbine entraîne une hélice par un réducteur</td><td>Avions régionaux, avions de transport tactique</td></tr>\n<tr><td>Turbomoteur</td><td>La turbine libre fournit une puissance sur un arbre</td><td>Hélicoptères, groupes auxiliaires (APU)</td></tr>\n<tr><td>Moteur à pistons</td><td>Combustion intermittente dans des cylindres, entraînement d'une hélice</td><td>Aviation légère</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le <strong>taux de dilution</strong> est le rapport entre le débit d'air secondaire (qui contourne le cœur) et le débit d'air primaire (qui le traverse). Il dépasse 10 sur les moteurs récents : la soufflante produit alors l'essentiel de la poussée.</div>"
      },
      {
       "titre": "Le cycle et les modules d'un turbofan",
       "contenu": "<p>Le cœur d'une turbomachine réalise un cycle thermodynamique continu, dit de <strong>Brayton</strong>, en quatre étapes qui se déroulent simultanément dans des modules différents : <strong>admission</strong> (entrée d'air), <strong>compression</strong> (compresseurs), <strong>combustion</strong> à pression à peu près constante (chambre de combustion), <strong>détente</strong> (turbines puis tuyère).</p>\n<ul>\n<li>La <strong>soufflante</strong> (fan) accélère l'ensemble de l'air entrant ; la majorité passe dans le canal secondaire.</li>\n<li>Les <strong>compresseurs basse pression et haute pression</strong>, formés d'étages de roues mobiles et de redresseurs fixes, élèvent la pression du flux primaire ; le taux de compression global dépasse 40 sur les moteurs récents.</li>\n<li>La <strong>chambre de combustion</strong> reçoit le carburant pulvérisé par des injecteurs ; la température des gaz dépasse largement le point de fusion des métaux des aubes, qui doivent être refroidies.</li>\n<li>Les <strong>turbines haute pression et basse pression</strong> prélèvent l'énergie des gaz pour entraîner, par des arbres concentriques, le compresseur haute pression d'une part, la soufflante et le compresseur basse pression d'autre part.</li>\n<li>La <strong>tuyère</strong> accélère les gaz restants.</li>\n</ul>\n<p>Le moteur comprend aussi un <strong>boîtier d'accessoires</strong> entraîné par l'arbre haute pression (pompes carburant, pompe hydraulique, générateur, pompes à huile, démarreur pneumatique), un circuit d'huile, un circuit carburant avec régulation (de plus en plus numérique, de type <strong>FADEC</strong>), un système de démarrage et d'allumage, et souvent un <strong>inverseur de poussée</strong>.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les moteurs actuels sont <strong>modulaires</strong> : ils sont conçus pour que la soufflante, le compresseur, la turbine ou le boîtier d'accessoires puissent être remplacés en atelier sans démonter l'ensemble. Sous l'aile, le mécanicien remplace surtout des équipements (LRU) : pompes, filtres, démarreur, injecteurs selon les cas.</div>"
      },
      {
       "titre": "Les paramètres de surveillance d'un turbomoteur",
       "contenu": "<p>L'équipage et le mécanicien surveillent le moteur au moyen de paramètres affichés au poste de pilotage et enregistrés par les calculateurs.</p>\n<table><thead><tr><th>Paramètre</th><th>Signification</th><th>Intérêt pour la maintenance</th></tr></thead><tbody>\n<tr><td>N1</td><td>Vitesse de rotation de l'attelage basse pression, en % d'une valeur de référence</td><td>Image de la poussée sur de nombreux turbofans</td></tr>\n<tr><td>N2</td><td>Vitesse de rotation de l'attelage haute pression, en %</td><td>Suivi du démarrage, du ralenti</td></tr>\n<tr><td>EGT</td><td>Température des gaz d'échappement (mesurée par thermocouples)</td><td>Indicateur de l'état du moteur ; dépassement = inspection</td></tr>\n<tr><td>FF</td><td>Débit carburant (fuel flow), en kg/h</td><td>Consommation, détection d'anomalies</td></tr>\n<tr><td>Pression et température d'huile, quantité d'huile</td><td>État du circuit de lubrification</td><td>Consommation d'huile, fuite, usure de roulements</td></tr>\n<tr><td>Vibrations</td><td>Niveau vibratoire des attelages</td><td>Balourd, dommage d'aube, roulement</td></tr>\n</tbody></table>\n<p>Un moteur s'use : ses rendements diminuent, et il faut une EGT plus élevée pour obtenir la même poussée. La <strong>marge d'EGT</strong> (écart entre l'EGT réelle au décollage et la limite) diminue au fil des heures de fonctionnement et constitue un des critères de dépose pour révision. Le suivi des tendances (trend monitoring) permet aussi de détecter une dégradation anormale.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réagir à un dépassement de limite signalé. 1) Relever précisément le paramètre dépassé, sa valeur maximale atteinte et la durée du dépassement, à partir du compte rendu de l'équipage et des données enregistrées. 2) Ouvrir la tâche du manuel de maintenance qui traite de ce dépassement : elle définit des zones (par exemple aucune action, inspection boroscopique, dépose du moteur) selon la valeur et la durée. 3) Appliquer exactement l'action de la zone atteinte. 4) Consigner l'événement et l'action dans le compte rendu matériel avant toute remise en service.</div>"
      },
      {
       "titre": "Le moteur à pistons d'aviation",
       "contenu": "<p>Le <strong>moteur à pistons</strong> d'aviation légère fonctionne selon le <strong>cycle à quatre temps</strong> : admission, compression, combustion-détente, échappement, sur deux tours de vilebrequin. Il est le plus souvent à cylindres opposés à plat (quatre ou six cylindres), refroidi par air, alimenté par carburateur ou par injection, et fonctionne à l'essence aviation (AVGAS) ; des moteurs diesel alimentés au carburéacteur existent aussi.</p>\n<p>Ses particularités sont liées à la sécurité :</p>\n<ul>\n<li>l'<strong>allumage</strong> est doublé : deux <strong>magnétos</strong> autonomes (elles produisent leur propre courant) alimentent chacune une bougie par cylindre ; le moteur continue de tourner en cas de panne de l'une ou de la panne du réseau électrique de l'avion ;</li>\n<li>le pilote règle la <strong>richesse</strong> du mélange en fonction de l'altitude ;</li>\n<li>le <strong>réchauffage carburateur</strong> évite le givrage du carburateur, possible même par température positive et air humide ;</li>\n<li>les cylindres sont surveillés par la température de culasse et la température des gaz d'échappement.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une magnéto dont le fil de masse (« P-lead ») est coupé reste active même contacteur sur « OFF » : tourner l'hélice à la main peut alors faire démarrer le moteur. Toute hélice doit être considérée comme dangereuse, et le contrôle de coupure des magnétos fait partie des vérifications moteur.</div>\n<p>Les contrôles courants comprennent la <strong>mesure de compression différentielle</strong> des cylindres (fuite d'air comprimé mesurée entre deux manomètres), l'inspection des bougies, l'analyse de l'huile et l'inspection du filtre à huile à la recherche de particules métalliques.</p>\n<p>La puissance d'un moteur à pistons atmosphérique diminue avec l'altitude, car la masse d'air admise à chaque cycle diminue avec la masse volumique. Certains moteurs sont donc équipés d'un <strong>turbocompresseur</strong> : une turbine entraînée par les gaz d'échappement fait tourner un compresseur qui augmente la pression d'admission. La pression d'admission, mesurée en pouces de mercure (inHg), devient alors un paramètre à surveiller avec le régime, car un excès de pression peut endommager le moteur.</p>"
      },
      {
       "titre": "Sécurité et inspections sur les moteurs",
       "contenu": "<p>Le moteur en fonctionnement au sol crée des zones dangereuses définies par le manuel : une <strong>zone d'aspiration</strong> devant l'entrée d'air, capable d'aspirer une personne ou un objet, et une <strong>zone de souffle</strong> derrière la tuyère, avec des gaz chauds et rapides sur des dizaines de mètres. Les dimensions de ces zones varient avec le régime ; elles sont indiquées dans le chapitre consacré aux essais moteur.</p>\n<p>Le principal ennemi d'un turbomoteur est l'<strong>ingestion de corps étrangers</strong> (FOD : Foreign Object Damage). Un écrou oublié dans une manche d'entrée d'air peut détruire plusieurs étages d'aubes. D'où la règle de comptage des outils, de propreté des aires de stationnement et d'inspection de l'entrée d'air avant tout essai.</p>\n<p>L'état interne du moteur s'inspecte sans démontage au <strong>boroscope</strong> (ou vidéoscope), introduit par des orifices prévus à cet effet : on recherche criques, brûlures, érosions, entailles et dépôts sur les aubes et dans la chambre de combustion. Les limites d'acceptation sont données par le manuel en fonction de la position et de la taille du défaut.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un point fixe (essai moteur au sol), l'avion est freiné et calé, une personne en liaison avec le poste de pilotage surveille l'extérieur, la zone est balisée, et l'opérateur au poste de pilotage doit être spécialement autorisé par l'organisme pour réaliser cet essai.</div>"
      }
     ],
     "points_cles": [
      "La poussée résulte de l'accélération d'une masse d'air vers l'arrière",
      "Accélérer peu un grand débit d'air améliore le rendement : d'où les grands taux de dilution",
      "Cycle d'une turbomachine : admission, compression, combustion, détente",
      "N1, N2, EGT, débit carburant, huile et vibrations surveillent l'état du moteur",
      "La marge d'EGT diminue avec l'usure et sert de critère de dépose",
      "Un dépassement de limite se traite selon les zones définies par le manuel",
      "Le moteur à pistons d'aviation a un double allumage par magnétos autonomes",
      "Zones d'aspiration et de souffle, FOD et boroscope sont au cœur de la sécurité moteur"
     ],
     "lexique": [
      {
       "terme": "Poussée",
       "def": "Force propulsive produite par l'accélération d'une masse d'air vers l'arrière, en newtons."
      },
      {
       "terme": "Taux de dilution",
       "def": "Rapport entre le débit d'air secondaire et le débit d'air primaire d'un turbofan."
      },
      {
       "terme": "Soufflante",
       "def": "Premier étage, de grand diamètre, d'un turbofan, qui accélère l'air des deux flux."
      },
      {
       "terme": "EGT",
       "def": "Température des gaz d'échappement, paramètre principal de l'état d'une turbomachine."
      },
      {
       "terme": "FADEC",
       "def": "Régulation numérique pleine autorité du moteur, assurée par un calculateur."
      },
      {
       "terme": "Boîtier d'accessoires",
       "def": "Carter d'engrenages entraîné par le moteur, portant pompes, générateur et démarreur."
      },
      {
       "terme": "Magnéto",
       "def": "Générateur d'allumage autonome d'un moteur à pistons."
      },
      {
       "terme": "FOD",
       "def": "Dommage causé par un corps étranger, notamment par ingestion dans un moteur."
      },
      {
       "terme": "Boroscope",
       "def": "Instrument optique ou vidéo introduit dans le moteur pour en inspecter l'intérieur sans démontage."
      }
     ]
    },
    {
     "id": "baer-materiaux-produits",
     "titre": "Désignation des matériaux, traitements thermiques et produits associés",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décoder la désignation d'un alliage d'aluminium et de son état métallurgique",
      "Expliquer le durcissement structural et ses conséquences pour les rivets et les réparations",
      "Situer les aciers, les alliages de titane et de nickel selon leurs usages",
      "Identifier les produits de maintenance (fluides, huiles, graisses, mastics) et leurs règles de compatibilité",
      "Appliquer les règles de stockage, de durée de vie et de traçabilité des produits"
     ],
     "sections": [
      {
       "titre": "Désigner un alliage d'aluminium",
       "contenu": "<p>Les alliages d'aluminium corroyés (laminés, filés, forgés) sont désignés par un nombre à quatre chiffres selon le système international utilisé aussi dans la norme européenne : le premier chiffre indique l'élément d'addition principal, qui détermine la famille d'alliage.</p>\n<table><thead><tr><th>Série</th><th>Élément principal</th><th>Exemples et emplois aéronautiques</th></tr></thead><tbody>\n<tr><td>1000</td><td>Aluminium pur (99 % minimum)</td><td>Placage (clad) de protection des tôles</td></tr>\n<tr><td>2000</td><td>Cuivre</td><td>2024 : revêtements de fuselage et d'intrados, ferrures ; 2117 : rivets</td></tr>\n<tr><td>5000</td><td>Magnésium</td><td>Tuyauteries basse pression, pièces peu chargées</td></tr>\n<tr><td>6000</td><td>Magnésium et silicium</td><td>6061 : pièces diverses, tubes</td></tr>\n<tr><td>7000</td><td>Zinc</td><td>7075, 7050 : extrados, longerons, cadres très chargés</td></tr>\n</tbody></table>\n<p>La désignation est complétée par l'<strong>état métallurgique</strong> (temper), qui décrit le traitement subi : F (brut de fabrication), O (recuit, le plus mou), H (écroui, pour les alliages non trempants), T suivi de chiffres (traité thermiquement). Par exemple, T3 signifie mise en solution, écrouissage, puis maturation à température ambiante ; T6 signifie mise en solution puis revenu artificiel au four. Un 2024-T3 et un 2024-O sont le même alliage mais n'ont pas du tout les mêmes caractéristiques.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> deux tôles de même épaisseur et de même aspect peuvent être d'alliages ou d'états différents. On ne choisit jamais un matériau de réparation « à l'œil » : on le prend au magasin sur bon de sortie, avec son certificat, et on vérifie le marquage imprimé sur la tôle (alliage, état, épaisseur, norme).</div>"
      },
      {
       "titre": "Traitements thermiques et durcissement structural",
       "contenu": "<p>Les alliages des séries 2000, 6000 et 7000 sont dits <strong>à durcissement structural</strong>. Leur résistance élevée est obtenue par une suite de traitements thermiques :</p>\n<ol>\n<li>la <strong>mise en solution</strong> : chauffage à une température précise (environ 490 à 500 °C pour le 2024) pour dissoudre les éléments d'addition ;</li>\n<li>la <strong>trempe</strong> : refroidissement très rapide, en général dans l'eau, qui fige les éléments en solution ; juste après la trempe, l'alliage est encore malléable ;</li>\n<li>la <strong>maturation</strong> (à température ambiante, plusieurs jours) ou le <strong>revenu</strong> (au four, quelques heures à une température modérée) : de fins précipités se forment et durcissent l'alliage.</li>\n</ol>\n<p>Ce mécanisme explique une pratique d'atelier : certains rivets en alliage trempant (désignés par exemple « DD » ou « rivets glacière ») sont posés juste après la trempe, pendant qu'ils sont encore malléables ; on les conserve au congélateur pour retarder la maturation et on respecte un délai maximal entre la sortie du froid et la pose. Les rivets les plus courants, en 2117-T4 (« AD »), se posent en revanche tels quels.</p>\n<p>Les <strong>aciers</strong> sont durcis par trempe et revenu ; ils peuvent aussi recevoir des traitements de surface (cémentation, nitruration) pour résister à l'usure. Un chauffage local non prévu (meulage énergique, soudage, frottement) peut modifier leur dureté et créer des criques.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un traitement thermique fait partie de la définition d'une pièce. Une pièce chauffée accidentellement (incendie, surchauffe de frein, meulage) peut avoir perdu ses caractéristiques sans changement d'aspect : on la contrôle par mesure de dureté ou de conductivité électrique selon les prescriptions du manuel.</div>"
      },
      {
       "titre": "Aciers, titane, alliages de nickel et magnésium",
       "contenu": "<p>L'aluminium n'est pas utilisé partout : là où les efforts, la température ou l'usure sont trop élevés, on emploie d'autres métaux.</p>\n<table><thead><tr><th>Famille</th><th>Qualités</th><th>Emplois typiques</th><th>Précautions</th></tr></thead><tbody>\n<tr><td>Aciers faiblement alliés à haute résistance</td><td>Très résistants, peu coûteux</td><td>Trains d'atterrissage, axes, boulonnerie, ferrures de mât</td><td>Corrosion, fragilisation par l'hydrogène, protection par revêtement</td></tr>\n<tr><td>Aciers inoxydables</td><td>Résistants à la corrosion et à la chaleur</td><td>Tuyauteries, pare-feu, attaches de capots</td><td>Usinage et formage plus difficiles</td></tr>\n<tr><td>Alliages de titane</td><td>Résistance élevée, masse modérée, tenue à la chaleur, compatibilité avec le carbone</td><td>Mâts réacteurs, ferrures, attaches de structure composite, aubes de soufflante</td><td>Coût, usinage délicat, contact avec certains produits chlorés interdit</td></tr>\n<tr><td>Superalliages base nickel</td><td>Tenue aux très hautes températures</td><td>Aubes et disques de turbine, chambres de combustion</td><td>Réparations réservées aux ateliers moteur</td></tr>\n<tr><td>Alliages de magnésium</td><td>Très légers</td><td>Carters de boîtes de transmission d'hélicoptère, roues anciennes</td><td>Très sensibles à la corrosion, inflammables en copeaux</td></tr>\n</tbody></table>\n<p>Le choix des métaux tient aussi compte du <strong>couple galvanique</strong> : deux métaux de potentiels différents en contact, en présence d'humidité, provoquent la corrosion du plus anodique. Les fixations en titane ou en acier inoxydable dans une structure en carbone, l'isolation des fixations par mastic et les rondelles de séparation en sont la traduction pratique.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les copeaux de magnésium et de titane peuvent s'enflammer et ne s'éteignent pas à l'eau. Les ateliers qui usinent ou meulent ces métaux disposent d'extincteurs adaptés aux feux de métaux (classe D) et séparent leurs déchets.</div>"
      },
      {
       "titre": "Fluides, huiles et graisses",
       "contenu": "<p>Un aéronef contient de nombreux produits dont la nature précise est imposée par la documentation. Le mélange de deux produits incompatibles peut avoir des conséquences graves.</p>\n<table><thead><tr><th>Produit</th><th>Familles courantes</th><th>Point de vigilance</th></tr></thead><tbody>\n<tr><td>Fluide hydraulique</td><td>Esters phosphatés résistants au feu sur avions de transport ; fluides à base minérale (souvent colorés en rouge) sur avions légers, hélicoptères et matériels militaires</td><td>Incompatibles entre eux et avec les joints de l'autre famille ; esters phosphatés irritants pour les yeux et la peau</td></tr>\n<tr><td>Huile de turbomachine</td><td>Huiles synthétiques à base d'esters</td><td>Ne pas mélanger des marques ou des types non approuvés ; toxicité à chaud</td></tr>\n<tr><td>Huile de moteur à pistons</td><td>Huiles minérales ou à dispersant</td><td>Type et viscosité selon le motoriste et la saison</td></tr>\n<tr><td>Carburant</td><td>Carburéacteur (Jet A-1) pour les turbines ; essence aviation (AVGAS 100LL) pour les moteurs à pistons à allumage commandé</td><td>Erreur d'avitaillement grave ; contrôle de l'eau par purge</td></tr>\n<tr><td>Graisses</td><td>Graisses d'usage général, graisses haute température, graisses pour trains</td><td>Graisses non miscibles : purger l'ancienne graisse</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> faire un complément de fluide hydraulique. 1) Identifier le fluide exigé par la plaque apposée près du point de remplissage et par la tâche de maintenance. 2) Vérifier au magasin la référence du produit, son lot et sa date de péremption, et l'intégrité du bidon (un bidon ouvert absorbe l'humidité et doit souvent être éliminé). 3) Mettre le circuit dans la configuration prescrite (accumulateurs, vérins rentrés ou sortis) avant de lire le niveau. 4) Utiliser l'équipement de remplissage dédié, filtré, propre à ce type de fluide. 5) Enregistrer la quantité ajoutée, ce qui permet de suivre une consommation anormale.</div>"
      },
      {
       "titre": "Stockage, durée de vie et traçabilité des produits",
       "contenu": "<p>De nombreux produits ont une <strong>durée de vie limitée</strong> (shelf life) : mastics, adhésifs, peintures, résines et préimprégnés, joints en élastomère, certains fluides. Les produits à deux composants ont en plus une <strong>durée de vie en pot</strong> (pot life) une fois mélangés, et un temps de travail pendant lequel ils restent applicables. Ces durées dépendent de la température de stockage indiquée par le fabricant, parfois au réfrigérateur ou au congélateur.</p>\n<p>Le magasin d'un organisme de maintenance gère ces produits : étiquetage avec date de réception et de péremption, rotation des stocks (premier entré, premier sorti), suivi des températures des enceintes de stockage, isolement des produits périmés. Un produit périmé ne peut être utilisé que si la documentation du fabricant prévoit une procédure de prolongation et que cette procédure est appliquée et enregistrée.</p>\n<p>Chaque produit utilisé est <strong>traçable</strong> : sa référence et son numéro de lot sont inscrits sur la carte de travail. En cas de défaut de lot signalé par un fabricant, l'organisme peut alors retrouver les aéronefs concernés.</p>\n<p>Les <strong>mastics</strong> et <strong>adhésifs</strong> structuraux méritent une attention particulière. Un mastic d'étanchéité est souvent livré en deux composants (base et accélérateur) à mélanger dans des proportions exactes, ou en cartouches prémélangées congelées qu'il faut décongeler selon les instructions. Sa désignation précise sa consistance (application au pinceau, à la spatule ou au pistolet, ou interposition entre deux pièces), son temps d'application et son temps de polymérisation, qui dépend fortement de la température et de l'humidité de l'atelier. Un mastic appliqué hors de son temps d'application adhère mal et ne protège plus contre la corrosion ou les fuites de carburant.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les fiches de données de sécurité des produits aéronautiques signalent souvent des dangers sérieux : solvants inflammables, isocyanates des peintures polyuréthanes, chromates de certains primaires, irritants. Les équipements de protection prescrits (gants adaptés au produit, lunettes, protection respiratoire) et la ventilation font partie de la procédure.</div>"
      }
     ],
     "points_cles": [
      "Le premier chiffre d'un alliage d'aluminium indique son élément d'addition principal",
      "L'état métallurgique (O, H, T3, T6…) change totalement les caractéristiques d'un même alliage",
      "Mise en solution, trempe, puis maturation ou revenu durcissent les alliages trempants",
      "Les rivets « glacière » se posent dans un délai limité après leur sortie du froid",
      "Titane, aciers et superalliages remplacent l'aluminium là où efforts ou températures l'exigent",
      "Fluides hydrauliques à esters phosphatés et à base minérale sont incompatibles entre eux",
      "Chaque produit a une référence, un lot et une date de péremption à vérifier et à tracer",
      "Une pièce surchauffée peut avoir perdu ses caractéristiques sans changer d'aspect"
     ],
     "lexique": [
      {
       "terme": "État métallurgique",
       "def": "Désignation du traitement thermique ou mécanique subi par un alliage (O, H, T3, T6…)."
      },
      {
       "terme": "Durcissement structural",
       "def": "Augmentation de résistance par précipitation d'éléments d'addition après mise en solution et trempe."
      },
      {
       "terme": "Trempe",
       "def": "Refroidissement rapide d'un métal chauffé, qui fige sa structure."
      },
      {
       "terme": "Revenu",
       "def": "Chauffage modéré après trempe destiné à ajuster dureté et ductilité."
      },
      {
       "terme": "Placage",
       "def": "Fine couche d'aluminium pur laminée sur une tôle d'alliage pour la protéger de la corrosion."
      },
      {
       "terme": "Couple galvanique",
       "def": "Association de deux métaux de potentiels différents qui favorise la corrosion de l'un d'eux."
      },
      {
       "terme": "Durée de vie en stock",
       "def": "Durée pendant laquelle un produit stocké dans les conditions prescrites reste utilisable."
      },
      {
       "terme": "Durée de vie en pot",
       "def": "Durée d'utilisation d'un produit à plusieurs composants après mélange."
      },
      {
       "terme": "Numéro de lot",
       "def": "Identifiant d'une fabrication de produit, permettant sa traçabilité."
      }
     ]
    },
    {
     "id": "baer-systemes-asservis",
     "titre": "Systèmes asservis et régulés",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Distinguer commande en boucle ouverte et système asservi en boucle fermée",
      "Identifier sur un schéma bloc la consigne, le comparateur, le correcteur, l'actionneur et le capteur",
      "Caractériser les performances d'un asservissement : précision, rapidité, stabilité",
      "Expliquer le rôle des correcteurs proportionnel, intégral et dérivé",
      "Décrire des asservissements de bord : servocommande, commandes de vol électriques, pilote automatique, régulation de pression cabine"
     ],
     "sections": [
      {
       "titre": "Boucle ouverte et boucle fermée",
       "contenu": "<p>Un système est commandé en <strong>boucle ouverte</strong> lorsque l'ordre est envoyé sans contrôle du résultat : on ouvre une vanne d'un angle fixe en espérant obtenir le débit voulu. Si une perturbation survient (variation de pression en amont, usure), le résultat change sans que la commande s'en aperçoive.</p>\n<p>Dans un système <strong>asservi</strong> (en <strong>boucle fermée</strong>), la grandeur de sortie est mesurée en permanence par un <strong>capteur</strong>, et la mesure est comparée à la <strong>consigne</strong>. La différence, appelée <strong>écart</strong> ou erreur, est traitée par un <strong>correcteur</strong> qui élabore l'ordre envoyé à l'<strong>actionneur</strong>. Tant qu'un écart subsiste, le système agit pour le réduire. Les perturbations sont ainsi compensées automatiquement.</p>\n<p>On parle d'<strong>asservissement</strong> lorsque la consigne varie (suivre la position du manche) et de <strong>régulation</strong> lorsque la consigne est le plus souvent constante et que le système doit surtout rejeter les perturbations (maintenir une température cabine, une pression hydraulique, un régime d'hélice).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la structure d'un système bouclé est toujours la même : consigne, comparateur, correcteur, amplificateur et actionneur, système commandé, capteur de retour. Savoir retrouver ces éléments sur un schéma bloc est la clé pour diagnostiquer une panne d'asservissement.</div>"
      },
      {
       "titre": "Le schéma bloc",
       "contenu": "<p>Le fonctionnement d'un asservissement est représenté par un <strong>schéma bloc</strong> : chaque élément est un rectangle qui transforme une grandeur d'entrée en grandeur de sortie, et les flèches indiquent le sens de circulation de l'information. Le comparateur est représenté par un cercle avec les signes plus et moins.</p>\n<p>Exemple décrit en texte : servocommande d'une gouverne. La consigne est la position demandée par le calculateur de commandes de vol, sous forme d'un signal électrique. Le comparateur, intégré au calculateur, soustrait la position mesurée de la gouverne. Le correcteur élabore un courant de commande envoyé à la <strong>servovalve</strong> (actionneur électrohydraulique), qui distribue le fluide hydraulique vers une chambre ou l'autre du vérin. Le vérin déplace la gouverne. Un capteur de position (LVDT) monté sur le vérin renvoie la position réelle vers le comparateur.</p>\n<table><thead><tr><th>Élément du schéma bloc</th><th>Exemple : servocommande</th><th>Exemple : régulation de pression cabine</th></tr></thead><tbody>\n<tr><td>Consigne</td><td>Position demandée de la gouverne</td><td>Altitude cabine et vitesse de variation programmées</td></tr>\n<tr><td>Capteur</td><td>LVDT de position du vérin</td><td>Capteur de pression cabine</td></tr>\n<tr><td>Correcteur</td><td>Calculateur de commandes de vol</td><td>Contrôleur de pressurisation</td></tr>\n<tr><td>Actionneur</td><td>Servovalve et vérin</td><td>Moteur de la vanne de décharge (outflow valve)</td></tr>\n<tr><td>Grandeur réglée</td><td>Position de la gouverne</td><td>Pression dans la cabine</td></tr>\n<tr><td>Perturbations</td><td>Efforts aérodynamiques sur la gouverne</td><td>Variation du débit d'air entrant, fuites</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> localiser une panne dans une boucle d'asservissement. 1) Relever la consigne et la mesure renvoyée par le capteur (pages de maintenance, test intégré) : y a-t-il un écart permanent ? 2) Vérifier si l'actionneur reçoit bien l'ordre (signal présent aux bornes de la servovalve, tension sur le moteur). 3) S'il reçoit l'ordre sans bouger : panne de la chaîne de puissance (pression hydraulique, actionneur grippé). 4) S'il bouge mais que la mesure ne change pas : capteur ou câblage de retour. 5) Si l'ordre est absent alors que l'écart existe : correcteur ou câblage de commande. Toujours suivre l'arbre de dépannage du manuel, qui organise ces vérifications.</div>"
      },
      {
       "titre": "Performances : précision, rapidité, stabilité",
       "contenu": "<p>On juge un asservissement en observant sa réponse à un changement brusque de consigne (un échelon). Trois critères sont utilisés.</p>\n<ul>\n<li>La <strong>précision</strong> : l'écart qui subsiste une fois le régime permanent atteint, appelé <strong>erreur statique</strong>. Une gouverne doit atteindre sa position à quelques dixièmes de degré près.</li>\n<li>La <strong>rapidité</strong> : le temps nécessaire pour atteindre et rester à moins de 5 % de la valeur finale, appelé <strong>temps de réponse à 5 %</strong>.</li>\n<li>La <strong>stabilité</strong> : le système doit converger vers la consigne. Un système mal réglé présente un <strong>dépassement</strong> (il va au-delà de la consigne puis revient), voire des <strong>oscillations</strong> qui ne s'amortissent pas : il est alors instable.</li>\n</ul>\n<p>Ces critères sont souvent contradictoires : rendre un système plus rapide en augmentant son gain le rend aussi plus oscillant. Le réglage est un compromis fixé par le concepteur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les tests fonctionnels de certains asservissements comparent la réponse mesurée à des gabarits du manuel : temps de course d'une gouverne de butée à butée, dépassement maximal, absence d'oscillation. Un vérin qui « pompe » autour de sa position peut révéler de l'air dans le circuit hydraulique, un jeu mécanique ou un capteur mal fixé.</div>"
      },
      {
       "titre": "Les correcteurs P, I et D",
       "contenu": "<p>Le correcteur élabore l'ordre à partir de l'écart. Trois actions de base sont combinées.</p>\n<table><thead><tr><th>Action</th><th>Principe</th><th>Effet principal</th><th>Inconvénient</th></tr></thead><tbody>\n<tr><td>Proportionnelle (P)</td><td>Ordre proportionnel à l'écart</td><td>Rapidité</td><td>Erreur statique possible, oscillations si le gain est trop fort</td></tr>\n<tr><td>Intégrale (I)</td><td>Ordre proportionnel au cumul de l'écart dans le temps</td><td>Annule l'erreur statique</td><td>Ralentit, peut faire osciller</td></tr>\n<tr><td>Dérivée (D)</td><td>Ordre proportionnel à la vitesse de variation de l'écart</td><td>Anticipe, amortit</td><td>Sensible au bruit de mesure</td></tr>\n</tbody></table>\n<p>Le correcteur <strong>PID</strong> combine les trois. Dans les calculateurs numériques actuels, ces lois sont programmées ; dans des équipements plus anciens, elles sont réalisées par des circuits électroniques ou par des mécanismes hydromécaniques (ressorts, amortisseurs, masselottes centrifuges dans les régulateurs d'hélice).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> raisonner sur une régulation de température cabine en action proportionnelle seule. Consigne 22 °C, gain du correcteur : ouverture de vanne d'air chaud de 10 % par degré d'écart. 1) La cabine est à 18 °C : écart 4 °C, la vanne s'ouvre à 40 %. 2) La température monte, l'écart diminue, la vanne se referme progressivement. 3) Il faut une ouverture minimale pour compenser les pertes thermiques ; avec une action proportionnelle seule, cette ouverture n'existe que s'il reste un écart : l'équilibre s'établit par exemple à 21,5 °C. 4) Une action intégrale ajoutée continue d'ouvrir tant que l'écart persiste et ramène la température à 22 °C.</div>"
      },
      {
       "titre": "Asservissements à bord",
       "contenu": "<p>Les asservissements sont présents dans presque tous les systèmes d'un aéronef moderne.</p>\n<ul>\n<li><strong>Commandes de vol électriques</strong> (fly-by-wire) : le manche envoie une consigne électrique aux calculateurs, qui commandent les servocommandes des gouvernes. Les lois de pilotage intègrent des protections (incidence, facteur de charge, inclinaison). Le premier avion de ligne civil à commandes de vol électriques numériques a été l'A320 en 1988.</li>\n<li><strong>Pilote automatique</strong> : il compare l'attitude, le cap, l'altitude ou la trajectoire de l'avion aux valeurs sélectionnées et agit sur les gouvernes ; l'<strong>automanette</strong> (autothrust) régule la vitesse en agissant sur la poussée.</li>\n<li><strong>Régulation moteur</strong> : le FADEC régule le débit carburant pour obtenir le régime ou la poussée demandés, en respectant les limites.</li>\n<li><strong>Pressurisation et conditionnement d'air</strong> : régulation de la pression et de la température cabine.</li>\n<li><strong>Freinage antidérapant</strong> : régulation du glissement de chaque roue.</li>\n</ul>\n<p>Les systèmes critiques sont <strong>redondants</strong> : plusieurs calculateurs, capteurs et alimentations hydrauliques travaillent en parallèle, et des logiques de surveillance comparent leurs résultats pour écarter un élément défaillant.</p>\n<p>Cette surveillance prend plusieurs formes. Les calculateurs comparent les mesures de capteurs redondants : si l'un d'eux s'écarte trop des autres, il est déclaré défaillant et ignoré (logique de vote). Ils surveillent aussi la cohérence entre l'ordre envoyé et la réponse obtenue : une servocommande qui ne suit pas sa consigne est désactivée et une autre prend le relais. Chaque détection est mémorisée avec un code de panne, consultable par la maintenance. Après remplacement d'un capteur ou d'un actionneur d'asservissement, la documentation impose souvent une procédure d'<strong>étalonnage</strong> ou de réglage du zéro, suivie d'un essai fonctionnel, car le calculateur doit « apprendre » la position neutre du nouvel élément.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un avion à commandes électriques, mettre sous pression un circuit hydraulique peut faire bouger les gouvernes sans action sur le manche, par exemple lors de l'initialisation des calculateurs. Avant toute mise sous pression, on vérifie que les zones de débattement des gouvernes, des volets et des trains sont dégagées et que les personnes sont prévenues.</div>"
      }
     ],
     "points_cles": [
      "En boucle fermée, la sortie est mesurée et comparée à la consigne en permanence",
      "Un asservissement suit une consigne variable ; une régulation rejette les perturbations",
      "Schéma bloc : consigne, comparateur, correcteur, actionneur, système, capteur de retour",
      "Précision, rapidité et stabilité sont les trois critères de performance",
      "L'action intégrale annule l'erreur statique, l'action dérivée amortit",
      "Une servocommande associe servovalve, vérin et capteur de position",
      "Les systèmes critiques sont redondants et surveillés",
      "Une mise sous pression hydraulique peut faire bouger les gouvernes sans action pilote"
     ],
     "lexique": [
      {
       "terme": "Consigne",
       "def": "Valeur souhaitée de la grandeur réglée, fournie au système asservi."
      },
      {
       "terme": "Écart",
       "def": "Différence entre la consigne et la mesure, traitée par le correcteur."
      },
      {
       "terme": "Correcteur",
       "def": "Élément qui élabore l'ordre de commande à partir de l'écart."
      },
      {
       "terme": "Servovalve",
       "def": "Distributeur hydraulique à commande électrique qui règle le débit vers un vérin proportionnellement à un courant."
      },
      {
       "terme": "LVDT",
       "def": "Capteur de position linéaire à transformateur différentiel."
      },
      {
       "terme": "Erreur statique",
       "def": "Écart qui subsiste entre consigne et sortie une fois le régime permanent atteint."
      },
      {
       "terme": "Temps de réponse à 5 %",
       "def": "Temps au bout duquel la sortie reste à moins de 5 % de sa valeur finale."
      },
      {
       "terme": "Commandes de vol électriques",
       "def": "Système où les ordres du pilote sont transmis électriquement à des calculateurs qui commandent les gouvernes."
      },
      {
       "terme": "Redondance",
       "def": "Doublement ou triplement d'éléments pour qu'une panne unique n'entraîne pas la perte d'une fonction."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Réglementation, qualité et facteurs humains",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "baer-environnement-reglementaire",
     "titre": "L'environnement réglementaire de la navigabilité",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Situer les rôles de l'OACI, de l'Union européenne, de l'EASA, de la DGAC et de l'OSAC",
      "Distinguer navigabilité initiale et maintien de la navigabilité",
      "Décrire les organismes agréés : conception, production, gestion du maintien de la navigabilité, entretien, formation",
      "Expliquer les catégories de licence de maintenance et la notion d'habilitation",
      "Identifier les documents qui attestent la navigabilité d'un aéronef et la remise en service"
     ],
     "sections": [
      {
       "titre": "Une réglementation à plusieurs étages",
       "contenu": "<p>L'aviation civile est internationale : un avion construit dans un pays, immatriculé dans un deuxième et entretenu dans un troisième doit répondre partout aux mêmes exigences. La réglementation est donc organisée à plusieurs niveaux.</p>\n<table><thead><tr><th>Niveau</th><th>Acteur</th><th>Rôle</th></tr></thead><tbody>\n<tr><td>Mondial</td><td>OACI (Organisation de l'aviation civile internationale), créée par la convention de Chicago de 1944</td><td>Fixe des normes et pratiques recommandées que les États transposent</td></tr>\n<tr><td>Européen</td><td>Union européenne et EASA (Agence de l'Union européenne pour la sécurité aérienne)</td><td>Règlements européens directement applicables, certification des produits, agrément de certains organismes</td></tr>\n<tr><td>National</td><td>DGAC (Direction générale de l'aviation civile)</td><td>Autorité compétente pour la France : surveillance des organismes et délivrance des licences</td></tr>\n<tr><td>Délégation</td><td>OSAC (Organisme pour la sécurité de l'aviation civile)</td><td>Réalise pour le compte de la DGAC une partie des contrôles et de la surveillance de la navigabilité</td></tr>\n</tbody></table>\n<p>Le texte de base européen est le <strong>règlement (UE) 2018/1139</strong>, dit « règlement de base ». Il est complété par des règlements d'application, organisés en annexes appelées <strong>Parts</strong>. Deux sont essentielles pour le technicien : le règlement (UE) n° 748/2012, qui contient la <strong>Part 21</strong> (certification et organismes de conception et de production), et le règlement (UE) n° 1321/2014, qui traite du <strong>maintien de la navigabilité</strong> et contient notamment la Part-M, la Part-145, la Part-66, la Part-147, la Part-ML et la Part-CAMO.</p>\n<p>L'EASA publie en outre des <strong>moyens acceptables de conformité</strong> (AMC) et des <strong>documents d'orientation</strong> (GM), qui expliquent comment satisfaire les exigences, ainsi que des spécifications de certification (CS) comme la CS-25 pour les grands avions.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un aéronef est <strong>navigable</strong> lorsqu'il est conforme à sa définition approuvée (certificat de type et modifications approuvées) et en état de fonctionner en sécurité. Toute la réglementation de maintenance vise à maintenir ces deux conditions tout au long de la vie de l'aéronef.</div>"
      },
      {
       "titre": "Navigabilité initiale : concevoir et produire",
       "contenu": "<p>La <strong>navigabilité initiale</strong> concerne la naissance du produit. Un constructeur qui conçoit un nouvel avion, un moteur ou une hélice doit démontrer, par calculs, essais au sol et essais en vol, que la conception respecte les spécifications de certification applicables. L'EASA délivre alors un <strong>certificat de type</strong> (TC), accompagné d'une fiche de caractéristiques (TCDS) qui résume la définition approuvée et les limitations.</p>\n<p>Le concepteur doit détenir un agrément d'<strong>organisme de conception</strong> (DOA, Part 21 sous-partie J). Les <strong>modifications</strong> ultérieures (installer un nouvel équipement, changer un aménagement cabine) et les <strong>réparations</strong> doivent elles aussi être approuvées ; une modification importante faite par un autre organisme que le constructeur fait l'objet d'un <strong>certificat de type supplémentaire</strong> (STC).</p>\n<p>La fabrication est réalisée par un <strong>organisme de production</strong> agréé (POA, Part 21 sous-partie G). Chaque pièce neuve qui en sort est accompagnée d'un certificat libératoire, le <strong>formulaire EASA Form 1</strong>, qui atteste qu'elle est conforme aux données de conception approuvées. Chaque aéronef reçoit, lorsqu'il est conforme, un <strong>certificat de navigabilité</strong> (CDN) délivré par l'autorité de l'État d'immatriculation.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pièce sans certificat libératoire valable, ou dont l'origine ne peut pas être prouvée, est une <strong>pièce suspecte</strong>. Même si elle semble identique à une pièce d'origine, elle ne peut pas être montée : elle est isolée et signalée selon les procédures de l'organisme.</div>"
      },
      {
       "titre": "Maintien de la navigabilité : les organismes",
       "contenu": "<p>Une fois l'aéronef en service, son propriétaire ou son exploitant est responsable de son <strong>maintien de la navigabilité</strong>. Pour les avions de transport et les exploitants commerciaux, cette responsabilité est confiée à des organismes agréés qui se répartissent les rôles.</p>\n<table><thead><tr><th>Organisme</th><th>Référence</th><th>Rôle principal</th></tr></thead><tbody>\n<tr><td>Organisme de gestion du maintien de la navigabilité</td><td>Part-CAMO (ou CAO pour l'aviation légère, Part-CAO)</td><td>Établit le programme d'entretien, suit les consignes de navigabilité, les potentiels et les pièces à vie limitée, commande les travaux, réalise les examens de navigabilité</td></tr>\n<tr><td>Organisme d'entretien</td><td>Part-145 (aéronefs complexes et exploitation commerciale) ou Part-CAO / Part-M sous-partie F selon le cas</td><td>Réalise les travaux d'entretien et délivre les certificats de remise en service</td></tr>\n<tr><td>Organisme de formation</td><td>Part-147</td><td>Dispense les formations et examens de base et les formations de type pour les licences Part-66</td></tr>\n</tbody></table>\n<p>Un organisme Part-145 dispose d'un <strong>manuel des spécifications de l'organisme</strong> (MOE) approuvé par l'autorité, qui décrit son organisation, ses responsables, ses procédures et la <strong>liste de ses capacités</strong> (types d'aéronefs, moteurs, équipements qu'il est autorisé à entretenir). Il doit disposer de locaux, d'outillages, de données d'entretien à jour et de personnel qualifié en nombre suffisant, et il est surveillé par l'autorité.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le technicien de bac pro travaille dans le cadre des procédures du MOE de son organisme. Lorsqu'une tâche ne peut pas être réalisée selon la procédure (outil manquant, donnée ambiguë), il ne contourne pas la difficulté : il la signale à son responsable, qui applique la procédure prévue pour ce cas.</div>"
      },
      {
       "titre": "Licences et habilitations du personnel",
       "contenu": "<p>La <strong>licence de maintenance d'aéronefs</strong> (LMA), définie par la Part-66, atteste des connaissances et de l'expérience d'un technicien. Elle comprend plusieurs catégories.</p>\n<table><thead><tr><th>Catégorie</th><th>Domaine</th></tr></thead><tbody>\n<tr><td>A</td><td>Entretien courant en ligne et rectification de défauts simples figurant sur une liste de tâches</td></tr>\n<tr><td>B1</td><td>Mécanique : structure, groupes motopropulseurs, systèmes mécaniques et électriques, avec quelques tâches simples d'avionique ; sous-catégories selon avion ou hélicoptère, turbine ou pistons</td></tr>\n<tr><td>B2</td><td>Avionique et systèmes électriques</td></tr>\n<tr><td>B2L</td><td>Avionique limitée à certains systèmes, pour les aéronefs moins complexes</td></tr>\n<tr><td>B3</td><td>Avions à moteur à pistons non pressurisés de masse maximale au décollage limitée</td></tr>\n<tr><td>C</td><td>Certification de l'entretien en base d'un aéronef complet</td></tr>\n</tbody></table>\n<p>La licence s'obtient en réussissant des examens par <strong>modules</strong> (mathématiques, physique, électricité, aérodynamique, facteurs humains, législation…) et en justifiant d'une expérience pratique. Le bac pro Aéronautique prépare à une partie de ces connaissances de base ; l'expérience vient ensuite. Pour certifier des travaux sur un type d'avion de transport, il faut en plus une <strong>qualification de type</strong> inscrite sur la licence.</p>\n<p>La licence ne suffit pas : c'est l'organisme qui délivre à chaque technicien une <strong>habilitation</strong> (autorisation de certification) précisant ce qu'il peut signer, après vérification de sa compétence, de sa formation continue et de son expérience récente. Un jeune technicien sans habilitation réalise des tâches sous la supervision d'un personnel habilité qui signe la remise en service.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'on a le droit de signer une tâche. 1) La tâche relève-t-elle de la liste de capacités de l'organisme ? 2) Ma fonction et mon habilitation couvrent-elles ce type d'aéronef et ce type de travail (signature de tâche, inspection indépendante, remise en service) ? 3) Ai-je reçu la formation spécifique éventuellement exigée (point fixe moteur, réservoirs, CND, câblage) ? 4) Mon habilitation est-elle en cours de validité ? Si une seule réponse est négative, je ne signe pas : je fais signer par la personne habilitée qui a supervisé.</div>"
      },
      {
       "titre": "Documents de navigabilité et remise en service",
       "contenu": "<p>L'état de navigabilité d'un aéronef est attesté par des documents qui doivent être valides et présents.</p>\n<ul>\n<li>Le <strong>certificat de navigabilité</strong> (CDN), délivré à l'aéronef conforme à son type.</li>\n<li>Le <strong>certificat d'examen de navigabilité</strong> (ARC), qui confirme périodiquement, en général chaque année, que le CDN reste valide au regard de l'état réel de l'aéronef et de son dossier.</li>\n<li>Le <strong>certificat d'immatriculation</strong>, le certificat acoustique, la licence de station radio selon les cas.</li>\n<li>Le <strong>dossier de maintien de la navigabilité</strong> : compte rendu matériel, livrets, enregistrements des travaux, état des consignes de navigabilité et des pièces à vie limitée.</li>\n</ul>\n<p>Après tout entretien, l'aéronef ou l'élément ne peut reprendre du service qu'avec un <strong>certificat de remise en service</strong> (CRS), signé par une personne habilitée. En signant, elle atteste que les travaux demandés ont été réalisés conformément aux données d'entretien approuvées et aux procédures de l'organisme, et que l'aéronef est apte à la remise en service pour ces travaux. Pour un équipement déposé et réparé en atelier, la remise en service se fait sur un formulaire EASA Form 1.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un CRS est un engagement personnel et juridique. Signer pour un travail qu'on n'a ni fait ni vu faire, ou dont on n'a pas vérifié le résultat, est une faute grave, quelle que soit la pression du planning. Une tâche non terminée est enregistrée comme telle et transmise à l'équipe suivante.</div>"
      },
      {
       "titre": "L'exploitation : MEL, compte rendu matériel et signalement",
       "contenu": "<p>Le maintien de la navigabilité s'appuie aussi sur des outils d'exploitation que le technicien manipule chaque jour.</p>\n<p>Le <strong>compte rendu matériel</strong> (CRM, ou technical log) est le registre de bord où l'équipage inscrit les anomalies constatées, et où la maintenance enregistre les actions réalisées et les remises en service. Chaque défaut ouvert doit être soit corrigé, soit <strong>différé</strong> selon une procédure approuvée.</p>\n<p>La <strong>liste minimale d'équipements</strong> (LME, ou MEL) de l'exploitant, établie à partir de la liste de référence du constructeur (MMEL) et approuvée par l'autorité, indique quels équipements peuvent être inopérants au départ, pour quelle durée, et avec quelles procédures d'exploitation (O) et de maintenance (M) : par exemple désactiver et immobiliser une vanne, apposer une étiquette dans le poste. La <strong>liste de déviations tolérées de configuration</strong> (CDL) traite de la même façon des pièces extérieures manquantes, comme un carénage, avec leurs pénalités de performance.</p>\n<p>Enfin, le règlement (UE) n° 376/2014 impose le <strong>compte rendu d'événements</strong> : toute personne qui constate un événement pouvant affecter la sécurité (erreur de maintenance, découverte d'un dommage important, pièce suspecte) doit le signaler par le système de l'organisme. Ce système est conçu pour apprendre des erreurs et protège le déclarant de bonne foi, dans le cadre d'une <strong>culture juste</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la MEL n'autorise jamais à « oublier » un défaut : elle fixe un délai de réparation, des actions précises et une traçabilité. Une tolérance appliquée hors de ses conditions rend l'aéronef non navigable.</div>"
      }
     ],
     "points_cles": [
      "OACI au niveau mondial, UE et EASA au niveau européen, DGAC et OSAC en France",
      "Règlement de base (UE) 2018/1139, Part 21 dans le règlement 748/2012, maintien de la navigabilité dans le règlement 1321/2014",
      "Navigabilité initiale : certificat de type, organismes de conception et de production, Form 1",
      "Maintien de la navigabilité : CAMO gère, Part-145 entretient, Part-147 forme",
      "Licence Part-66 : catégories A, B1, B2, B2L, B3, C",
      "L'habilitation délivrée par l'organisme fixe ce que chacun peut signer",
      "Un CRS atteste que les travaux sont faits selon les données approuvées",
      "La MEL encadre l'exploitation avec un équipement inopérant, avec délais et procédures",
      "Tout événement de sécurité doit être signalé, dans une culture juste"
     ],
     "lexique": [
      {
       "terme": "EASA",
       "def": "Agence de l'Union européenne pour la sécurité aérienne, qui certifie les produits et élabore les règles techniques."
      },
      {
       "terme": "Certificat de type",
       "def": "Document qui atteste que la conception d'un aéronef, d'un moteur ou d'une hélice respecte les exigences de certification."
      },
      {
       "terme": "Form 1",
       "def": "Certificat libératoire autorisé EASA accompagnant une pièce neuve ou un élément entretenu."
      },
      {
       "terme": "CAMO",
       "def": "Organisme de gestion du maintien de la navigabilité, qui organise et suit l'entretien d'une flotte."
      },
      {
       "terme": "Part-145",
       "def": "Exigences applicables aux organismes d'entretien agréés pour les aéronefs complexes et l'exploitation commerciale."
      },
      {
       "terme": "MOE",
       "def": "Manuel des spécifications de l'organisme d'entretien, approuvé par l'autorité."
      },
      {
       "terme": "Habilitation",
       "def": "Autorisation délivrée par l'organisme à une personne pour signer certains travaux ou remises en service."
      },
      {
       "terme": "CRS",
       "def": "Certificat de remise en service signé après entretien par une personne habilitée."
      },
      {
       "terme": "ARC",
       "def": "Certificat d'examen de navigabilité, qui confirme périodiquement la validité du certificat de navigabilité."
      },
      {
       "terme": "MEL",
       "def": "Liste minimale d'équipements : équipements pouvant être inopérants au départ, avec délais et procédures."
      }
     ]
    },
    {
     "id": "baer-qualite",
     "titre": "La qualité en production et en maintenance aéronautiques",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Expliquer les principes d'un système de management de la qualité aéronautique",
      "Situer les normes de la série EN 9100 et le système qualité réglementaire d'un organisme agréé",
      "Décrire le traitement d'une non-conformité et d'une action corrective",
      "Utiliser les outils de résolution de problèmes : QQOQCP, Ishikawa, 5 pourquoi, Pareto, PDCA",
      "Participer à l'amélioration continue au poste de travail"
     ],
     "sections": [
      {
       "titre": "Qualité et sécurité : un même objectif",
       "contenu": "<p>En aéronautique, la <strong>qualité</strong> n'est pas seulement la satisfaction du client : c'est la garantie que chaque produit et chaque intervention sont conformes à une définition approuvée, condition de la sécurité des vols. Un défaut de qualité n'est pas une gêne commerciale, c'est un risque.</p>\n<p>La qualité repose sur quelques principes : travailler selon des <strong>procédures écrites</strong> et des <strong>données approuvées</strong> ; prouver ce qui a été fait par des <strong>enregistrements</strong> ; vérifier les résultats par des <strong>contrôles</strong> adaptés ; détecter, traiter et analyser les écarts ; s'améliorer en permanence. On résume souvent : « écrire ce que l'on fait, faire ce que l'on a écrit, et le prouver ».</p>\n<p>Les organismes aéronautiques mettent en place un <strong>système de management de la qualité</strong> (SMQ) et, dans les organismes agréés soumis aux exigences européennes récentes, un <strong>système de gestion</strong> qui intègre la gestion des risques de sécurité (SGS, ou SMS en anglais). Le service qualité est indépendant de la production : il audite, surveille et rend compte à la direction.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la qualité n'est pas l'affaire du seul service qualité. Chaque technicien est le premier contrôleur de son travail : il vérifie son poste, ses outils, ses données, son résultat et ses enregistrements avant de signer.</div>"
      },
      {
       "titre": "Les référentiels : EN 9100 et exigences réglementaires",
       "contenu": "<p>Deux types de référentiels encadrent la qualité dans le secteur.</p>\n<p>Les <strong>normes volontaires</strong> de la série <strong>EN 9100</strong>, développées par l'industrie aéronautique et spatiale à partir de l'ISO 9001, ajoutent des exigences propres au secteur : gestion de la configuration, maîtrise des pièces contrefaites, facteurs humains, sécurité du produit, gestion des risques, prévention des corps étrangers, contrôle du premier article. On distingue :</p>\n<table><thead><tr><th>Norme</th><th>Organismes visés</th></tr></thead><tbody>\n<tr><td>EN 9100</td><td>Conception et production (constructeurs, équipementiers, sous-traitants)</td></tr>\n<tr><td>EN 9110</td><td>Organismes de maintenance</td></tr>\n<tr><td>EN 9120</td><td>Distributeurs et stockistes</td></tr>\n</tbody></table>\n<p>La certification selon ces normes est délivrée par des organismes certificateurs accrédités et elle est souvent exigée par les donneurs d'ordres pour travailler avec eux.</p>\n<p>Les <strong>exigences réglementaires</strong> sont obligatoires : un organisme Part-145, Part 21 ou Part-CAMO doit disposer d'un système qualité (ou de surveillance de la conformité) décrit dans son manuel, avec des audits indépendants, et il est lui-même surveillé par l'autorité. La perte de conformité peut conduire à la limitation, la suspension ou le retrait de l'agrément.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un auditeur qui interroge un technicien lui demande souvent : quelle donnée utilisez-vous, est-elle à jour, où est l'outil étalonné, où enregistrez-vous ce que vous faites ? Pouvoir montrer chaque élément sans chercher est la meilleure preuve que le système fonctionne.</div>"
      },
      {
       "titre": "Non-conformités et actions correctives",
       "contenu": "<p>Une <strong>non-conformité</strong> est le non-respect d'une exigence : pièce hors tolérance, travail non conforme à la donnée, enregistrement manquant, outil non étalonné, procédure non appliquée. Elle peut être détectée en contrôle, en audit, en service ou signalée par un client.</p>\n<p>Son traitement suit toujours plusieurs étapes, enregistrées sur une <strong>fiche de non-conformité</strong> :</p>\n<ol>\n<li><strong>identifier et isoler</strong> le produit non conforme (étiquette, zone de quarantaine) pour empêcher son utilisation ;</li>\n<li>décrire précisément l'écart, avec ses références (pièce, numéro de série, document, exigence) ;</li>\n<li>décider du <strong>traitement</strong> du produit : reprise selon une gamme approuvée, réparation approuvée par le bureau d'études, rebut ; une acceptation en l'état (dérogation) n'est possible qu'avec l'accord de l'autorité de conception ;</li>\n<li>mettre en place une <strong>action curative</strong> immédiate, puis rechercher la <strong>cause racine</strong> ;</li>\n<li>définir une <strong>action corrective</strong> qui supprime la cause, et vérifier son efficacité dans la durée.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> corriger le produit sans chercher la cause, c'est accepter que l'écart se reproduise. Inversement, désigner un « coupable » sans analyser les conditions de travail (documentation, outillage, fatigue, organisation) empêche de trouver la vraie cause et décourage les signalements.</div>\n<p>Dans la production, on pratique aussi le <strong>contrôle du premier article</strong> (FAI : First Article Inspection), décrit par la norme EN 9102 : la première pièce d'une nouvelle fabrication est contrôlée de manière complète et documentée pour prouver que le procédé permet d'obtenir toutes les caractéristiques de la définition.</p>"
      },
      {
       "titre": "Les outils de résolution de problèmes",
       "contenu": "<p>Pour analyser un problème de façon méthodique, plusieurs outils simples sont utilisés en groupe de travail.</p>\n<table><thead><tr><th>Outil</th><th>Usage</th></tr></thead><tbody>\n<tr><td>QQOQCP</td><td>Décrire le problème sans l'interpréter : Quoi ? Qui ? Où ? Quand ? Comment ? Combien ? Pourquoi ?</td></tr>\n<tr><td>Diagramme d'Ishikawa (causes-effet)</td><td>Classer les causes possibles en familles : Main-d'œuvre, Méthode, Matériel, Matière, Milieu (les 5 M), parfois Mesure et Management</td></tr>\n<tr><td>5 pourquoi</td><td>Remonter de la cause apparente à la cause racine en demandant « pourquoi ? » successivement</td></tr>\n<tr><td>Diagramme de Pareto</td><td>Classer les causes ou les défauts par fréquence décroissante pour traiter en priorité les plus importants</td></tr>\n<tr><td>PDCA (roue de Deming)</td><td>Organiser l'amélioration : Planifier, Faire, Vérifier, Agir et recommencer</td></tr>\n<tr><td>8D</td><td>Démarche structurée en huit étapes, souvent demandée par les clients pour un problème qualité</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> appliquer les 5 pourquoi à un écrou trouvé desserré sur une ferrure. 1) Pourquoi l'écrou est-il desserré ? Il n'a pas été serré au couple. 2) Pourquoi ? Le technicien a été interrompu après la mise en place, avant le serrage. 3) Pourquoi l'oubli n'a-t-il pas été vu ? La carte de travail regroupait mise en place et serrage en une seule étape signée en fin de tâche. 4) Pourquoi ? La carte n'avait pas été conçue avec une étape distincte de serrage et de freinage. 5) Pourquoi ? La procédure de rédaction des cartes ne prévoyait pas de découper les étapes critiques. Action corrective : modifier la procédure de rédaction et les cartes concernées, en plus du serrage immédiat de l'écrou.</div>"
      },
      {
       "titre": "Configuration, pièces contrefaites et corps étrangers",
       "contenu": "<p>Trois exigences propres au secteur méritent d'être détaillées, car elles concernent directement le technicien.</p>\n<p>La <strong>gestion de la configuration</strong> consiste à savoir à tout moment quelle est la définition exacte d'un produit : quelle révision de plan, quelles modifications incorporées, quels équipements installés avec quelles références et quels numéros de série. En maintenance, chaque pose ou dépose d'équipement, chaque application de modification est enregistrée pour que la configuration réelle de l'aéronef corresponde à sa configuration documentée. Une pièce peut être interchangeable sur un avion et interdite sur un autre de même type selon les modifications appliquées.</p>\n<p>Les <strong>pièces contrefaites ou non approuvées</strong> représentent un danger réel : copies, pièces récupérées sur des épaves sans traçabilité, pièces réparées par un atelier non agréé, certificats falsifiés. La vigilance porte sur la cohérence entre la pièce, son marquage, son emballage et son certificat (référence, numéro de série, quantité, signature). Toute anomalie conduit à isoler la pièce et à la signaler.</p>\n<p>La <strong>prévention des corps étrangers</strong> (FOD) fait partie des exigences de la norme EN 9100 : zones de travail propres, comptage des outils et des consommables, protections d'orifices, inspection de fin de tâche, sensibilisation régulière du personnel.</p>"
      },
      {
       "titre": "Maîtrise des moyens et amélioration continue",
       "contenu": "<p>La qualité du résultat dépend de la maîtrise des moyens utilisés.</p>\n<ul>\n<li><strong>Outillage et instruments de mesure</strong> : chaque outil de mesure (clé dynamométrique, pied à coulisse, multimètre, manomètre) est identifié, étalonné périodiquement et porte son étiquette de validité. Un outil trouvé hors tolérance lors de l'étalonnage déclenche une recherche des travaux réalisés avec lui depuis le dernier étalonnage valide.</li>\n<li><strong>Documentation</strong> : seule la révision en vigueur des données est utilisable ; les impressions portent souvent une date de validité limitée.</li>\n<li><strong>Pièces et produits</strong> : réception contrôlée, certificats, stockage adapté, quarantaine des pièces douteuses.</li>\n<li><strong>Personnel</strong> : formation initiale et continue, évaluation des compétences, habilitations à jour.</li>\n</ul>\n<p>L'<strong>amélioration continue</strong> s'appuie sur des indicateurs (taux de non-conformités, retours de pièces, retards, événements de sécurité) affichés et discutés en équipe, par exemple lors de courtes réunions quotidiennes autour d'un tableau qui suit la sécurité, la qualité, les coûts, les délais et le personnel. Les méthodes inspirées du <strong>lean</strong>, comme les <strong>5S</strong> (débarrasser, ranger, nettoyer, standardiser, maintenir), contribuent à la fois à l'efficacité et à la prévention des corps étrangers.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un tableau d'outillage à empreintes (chaque outil a sa forme dessinée) permet de voir d'un coup d'œil qu'un outil manque à la fin d'une tâche. Un outil manquant bloque la remise en service de l'aéronef jusqu'à ce qu'il soit retrouvé, et sa recherche peut aller jusqu'à la dépose de panneaux.</div>"
      }
     ],
     "points_cles": [
      "Qualité aéronautique = conformité à une définition approuvée, condition de la sécurité",
      "Écrire ce que l'on fait, faire ce que l'on a écrit, le prouver par des enregistrements",
      "EN 9100 pour la production, EN 9110 pour la maintenance, EN 9120 pour la distribution",
      "Le système qualité réglementaire est obligatoire pour un organisme agréé",
      "Un produit non conforme est identifié et isolé avant toute décision",
      "Action curative sur le produit, action corrective sur la cause racine",
      "QQOQCP, Ishikawa, 5 pourquoi, Pareto et PDCA structurent la résolution de problèmes",
      "Outils étalonnés, documentation à jour, pièces certifiées et personnel habilité sont indispensables"
     ],
     "lexique": [
      {
       "terme": "Système de management de la qualité",
       "def": "Ensemble organisé de procédures, responsabilités et moyens visant la conformité et l'amélioration continue."
      },
      {
       "terme": "EN 9100",
       "def": "Norme de management de la qualité pour l'aéronautique, le spatial et la défense, basée sur l'ISO 9001."
      },
      {
       "terme": "Non-conformité",
       "def": "Non-respect d'une exigence spécifiée, qu'elle concerne un produit, un processus ou un document."
      },
      {
       "terme": "Dérogation",
       "def": "Autorisation d'utiliser un produit non conforme, accordée par l'autorité de conception."
      },
      {
       "terme": "Cause racine",
       "def": "Cause première d'un problème qui, supprimée, empêche sa réapparition."
      },
      {
       "terme": "Action corrective",
       "def": "Action destinée à éliminer la cause d'une non-conformité pour éviter qu'elle se reproduise."
      },
      {
       "terme": "FAI",
       "def": "Contrôle du premier article : vérification complète et documentée de la première pièce d'une fabrication."
      },
      {
       "terme": "Diagramme d'Ishikawa",
       "def": "Diagramme en arêtes de poisson qui classe les causes possibles d'un effet par familles."
      },
      {
       "terme": "Étalonnage",
       "def": "Comparaison d'un instrument de mesure à un étalon de référence pour connaître et valider son erreur."
      }
     ]
    },
    {
     "id": "baer-facteurs-humains",
     "titre": "Facteurs humains en maintenance : performances, erreurs et prévention",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire les capacités et les limites humaines qui influencent le travail de maintenance",
      "Analyser une situation de travail avec le modèle SHELL",
      "Classer les erreurs humaines et distinguer erreur et violation",
      "Expliquer le modèle de Reason et la notion de barrières de défense",
      "Identifier les douze facteurs d'erreur les plus fréquents et les parades associées"
     ],
     "sections": [
      {
       "titre": "Pourquoi les facteurs humains",
       "contenu": "<p>Les études d'accidents et d'incidents montrent qu'une part importante des événements liés à la maintenance implique une <strong>erreur humaine</strong> : pièce mal montée, bouchon non retiré, capot non verrouillé, freinage oublié, mauvais câble raccordé. Ces erreurs ne viennent pas de techniciens incompétents : elles naissent souvent chez des personnes expérimentées, dans des conditions qui les rendaient probables.</p>\n<p>Les <strong>facteurs humains</strong> étudient l'ensemble des éléments qui influencent la performance humaine au travail : capacités physiques et mentales, environnement, organisation, documentation, outils, relations avec les autres. L'objectif n'est pas de supprimer l'erreur, ce qui est impossible, mais de réduire sa probabilité et de faire en sorte qu'elle soit détectée et rattrapée avant d'avoir des conséquences.</p>\n<p>La réglementation européenne impose aux organismes de maintenance une formation initiale et continue aux facteurs humains, et la prise en compte des facteurs humains dans les procédures, les plannings et l'analyse des événements. Un module de la licence Part-66 leur est consacré.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'erreur humaine est normale et inévitable ; ce qui est évitable, c'est qu'elle passe inaperçue. Les procédures, les contrôles, les signatures par étape et les inspections indépendantes sont des barrières conçues pour cela.</div>"
      },
      {
       "titre": "Capacités et limites humaines",
       "contenu": "<p>Le technicien utilise en permanence ses sens et sa mémoire, qui ont des limites connues.</p>\n<ul>\n<li><strong>Vision</strong> : l'acuité baisse avec l'âge et avec un éclairage insuffisant ; une inspection visuelle de structure exige un éclairage adapté, une lampe, parfois un miroir et une loupe. Le daltonisme peut gêner l'identification de fils ou de voyants colorés.</li>\n<li><strong>Audition</strong> : le bruit des moteurs et des outils pneumatiques endommage l'oreille de façon irréversible et gêne la communication ; un message oral dans le bruit est facilement mal compris.</li>\n<li><strong>Mémoire</strong> : la mémoire de travail ne retient que quelques éléments à la fois et s'efface à la moindre interruption ; c'est pourquoi on ne travaille jamais de mémoire, mais avec la documentation ouverte, en cochant chaque étape.</li>\n<li><strong>Attention et vigilance</strong> : elle diminue avec la fatigue, la monotonie, et la nuit, entre 2 h et 6 h environ, lorsque l'horloge biologique (rythme circadien) est au plus bas.</li>\n</ul>\n<p>La <strong>fatigue</strong> a des effets comparables à ceux de l'alcool sur les performances après une longue période d'éveil. Les organismes doivent organiser le travail posté en tenant compte de ce risque. L'alcool, les médicaments qui provoquent la somnolence et les drogues sont incompatibles avec le travail sur aéronef.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les interventions de nuit en escale sont fréquentes, sous pression de temps, parfois dans le froid et le bruit. Les tâches critiques planifiées en fin de nuit méritent une vigilance particulière : relecture de la carte de travail, auto-contrôle, sollicitation d'un collègue en cas de doute.</div>"
      },
      {
       "titre": "Le modèle SHELL",
       "contenu": "<p>Le <strong>modèle SHELL</strong> représente l'opérateur humain au centre de son système de travail, en interaction avec quatre types d'éléments. Une erreur apparaît souvent quand l'une de ces interfaces est mal adaptée.</p>\n<table><thead><tr><th>Lettre</th><th>Élément</th><th>Exemples de défauts d'interface en maintenance</th></tr></thead><tbody>\n<tr><td>S (Software)</td><td>Procédures, documentation, règles, logiciels</td><td>Tâche mal rédigée, figure ambiguë, révision non à jour</td></tr>\n<tr><td>H (Hardware)</td><td>Matériel, outils, équipements, aéronef</td><td>Outil inadapté, accès difficile, connecteurs identiques montables à l'envers</td></tr>\n<tr><td>E (Environment)</td><td>Environnement physique et organisationnel</td><td>Bruit, froid, éclairage faible, pression de temps</td></tr>\n<tr><td>L (Liveware)</td><td>Les autres personnes</td><td>Mauvaise transmission entre équipes, hiérarchie qui décourage les questions</td></tr>\n</tbody></table>\n<p>Au centre, le « L » central représente l'opérateur lui-même, avec ses capacités, sa formation, sa fatigue et son état du moment.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une situation avec SHELL. Situation : un panneau d'accès a été reposé avec des vis trop longues qui ont endommagé un faisceau électrique. 1) Opérateur : technicien en fin de poste, peu familier de ce type. 2) S : la tâche indique « reposer le panneau » sans préciser les références des vis par position. 3) H : vis de longueurs différentes rangées dans un même sachet. 4) E : travail de nuit, avion attendu pour le premier vol. 5) L : pas de transmission orale sur la différence de longueur des vis. 6) Conclusion : plusieurs interfaces ont contribué ; les actions portent sur la documentation, le conditionnement des vis et la transmission, pas seulement sur le technicien.</div>"
      },
      {
       "titre": "Types d'erreurs et violations",
       "contenu": "<p>On classe les actions non conformes selon leur origine, car les parades sont différentes.</p>\n<table><thead><tr><th>Type</th><th>Description</th><th>Exemple</th><th>Parade</th></tr></thead><tbody>\n<tr><td>Raté (inattention)</td><td>L'intention est bonne, l'exécution est mauvaise</td><td>Prendre une clé de 12 au lieu de 13 sans s'en rendre compte</td><td>Ergonomie, détrompage, autocontrôle</td></tr>\n<tr><td>Oubli (lapsus)</td><td>Une étape est omise par défaut de mémoire</td><td>Ne pas remettre le freinage après une interruption</td><td>Cartes de travail découpées, signatures par étape</td></tr>\n<tr><td>Faute (méprise)</td><td>L'intention elle-même est mauvaise, par mauvaise connaissance ou mauvaise règle</td><td>Appliquer la procédure d'un autre modèle d'équipement</td><td>Formation, documentation claire</td></tr>\n<tr><td>Violation</td><td>Écart volontaire à une règle connue</td><td>Ne pas utiliser la clé dynamométrique « parce que l'on connaît le serrage »</td><td>Culture de sécurité, règles réalistes, encadrement</td></tr>\n</tbody></table>\n<p>Les violations sont souvent <strong>routinières</strong> : elles deviennent une habitude parce qu'elles font gagner du temps et qu'elles n'ont « jamais posé de problème ». D'autres sont <strong>situationnelles</strong> : la règle est inapplicable dans les conditions du moment (outil absent, délai impossible). Dans ce cas, la bonne réponse est de signaler l'impossibilité, pas de contourner la règle.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la normalisation des écarts est un piège collectif : un écart toléré une fois devient la norme de l'équipe, puis personne ne se souvient de la règle initiale. Les nouveaux arrivants, qui posent des questions naïves, sont souvent ceux qui révèlent ces écarts.</div>"
      },
      {
       "titre": "Le modèle de Reason et les barrières",
       "contenu": "<p>Le psychologue James Reason a proposé de représenter les défenses d'un système comme des tranches de fromage suisse superposées : chaque tranche (formation, procédure, inspection, double contrôle, essai fonctionnel) arrête la plupart des erreurs, mais comporte des trous. Un accident survient lorsque les trous de plusieurs tranches s'alignent.</p>\n<p>Il distingue les <strong>défaillances actives</strong>, commises par les opérateurs en première ligne et aux effets immédiats, et les <strong>conditions latentes</strong>, introduites par des décisions de conception, d'organisation ou de management (effectifs insuffisants, documentation confuse, planning irréaliste), qui restent cachées jusqu'à ce qu'une défaillance active les révèle.</p>\n<p>Pour l'analyse des événements de maintenance, des méthodes structurées comme <strong>MEDA</strong> (Maintenance Error Decision Aid, développée par Boeing) recherchent les facteurs contributifs dans toutes ces catégories, plutôt qu'un seul responsable. Cette démarche suppose une <strong>culture juste</strong> : les erreurs de bonne foi sont analysées sans sanction, alors que les comportements délibérément dangereux ne sont pas tolérés.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'inspection indépendante d'une tâche critique (commandes de vol, par exemple) n'est efficace que si l'inspecteur vérifie réellement le travail, sans se fier à la signature du premier technicien. Une double signature de complaisance supprime une tranche de fromage.</div>"
      },
      {
       "titre": "Les douze facteurs d'erreur et leurs parades",
       "contenu": "<p>Un formateur canadien, Gordon Dupont, a identifié douze conditions qui favorisent l'erreur en maintenance, connues sous le nom de <strong>« Dirty Dozen »</strong>. Elles servent de liste de vérification personnelle et collective.</p>\n<table><thead><tr><th>Facteur</th><th>Parade possible</th></tr></thead><tbody>\n<tr><td>Manque de communication</td><td>Transmission écrite et orale, reformulation</td></tr>\n<tr><td>Complaisance (excès de confiance)</td><td>Se former à attendre le défaut, autocontrôle</td></tr>\n<tr><td>Manque de connaissances</td><td>Formation, documentation, demande d'aide</td></tr>\n<tr><td>Distraction</td><td>Marquer l'étape en cours, revenir trois étapes en arrière après une interruption</td></tr>\n<tr><td>Manque de travail d'équipe</td><td>Partager les objectifs, échanger les informations</td></tr>\n<tr><td>Fatigue</td><td>Reconnaître les signes, s'organiser, demander un contrôle</td></tr>\n<tr><td>Manque de ressources</td><td>Signaler, ne pas improviser avec des moyens non approuvés</td></tr>\n<tr><td>Pression</td><td>Exprimer ses préoccupations, refuser de céder sur la sécurité</td></tr>\n<tr><td>Manque d'affirmation de soi</td><td>Dire « non » ou « je ne suis pas sûr » quand c'est nécessaire</td></tr>\n<tr><td>Stress</td><td>Prendre du recul, en parler</td></tr>\n<tr><td>Manque de conscience de la situation</td><td>Considérer les effets de son travail sur l'ensemble de l'aéronef</td></tr>\n<tr><td>Normes non écrites</td><td>Revenir à la procédure écrite, faire corriger la procédure si elle est inadaptée</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> après une interruption (appel téléphonique, demande d'un collègue), une règle simple consiste à reprendre la carte de travail quelques étapes avant le point où l'on pensait s'être arrêté, et à vérifier physiquement l'état de l'installation avant de continuer.</div>"
      }
     ],
     "points_cles": [
      "L'erreur humaine est inévitable : l'objectif est de la rendre improbable et détectable",
      "Vision, audition, mémoire de travail et vigilance ont des limites connues",
      "La fatigue et la période nocturne dégradent fortement les performances",
      "SHELL : procédures, matériel, environnement et autres personnes autour de l'opérateur",
      "Raté, oubli, faute et violation appellent des parades différentes",
      "Modèle de Reason : défaillances actives et conditions latentes, barrières imparfaites",
      "L'inspection indépendante doit être une vraie vérification",
      "Les douze facteurs du Dirty Dozen servent de liste de vigilance"
     ],
     "lexique": [
      {
       "terme": "Facteurs humains",
       "def": "Ensemble des éléments qui influencent la performance humaine dans un système de travail."
      },
      {
       "terme": "Rythme circadien",
       "def": "Cycle biologique d'environ 24 heures qui règle la vigilance et le sommeil."
      },
      {
       "terme": "Modèle SHELL",
       "def": "Modèle décrivant les interactions de l'opérateur avec les procédures, le matériel, l'environnement et les autres personnes."
      },
      {
       "terme": "Violation",
       "def": "Écart volontaire à une règle ou une procédure connue."
      },
      {
       "terme": "Condition latente",
       "def": "Faiblesse cachée du système, issue de décisions d'organisation ou de conception, qui favorise l'erreur."
      },
      {
       "terme": "Défaillance active",
       "def": "Erreur ou violation commise en première ligne, aux effets immédiats."
      },
      {
       "terme": "Culture juste",
       "def": "Culture où les erreurs de bonne foi sont signalées et analysées sans sanction, sans tolérer les comportements délibérément dangereux."
      },
      {
       "terme": "Complaisance",
       "def": "Excès de confiance qui conduit à relâcher la vigilance sur une tâche habituelle."
      },
      {
       "terme": "MEDA",
       "def": "Méthode d'analyse des erreurs de maintenance recherchant les facteurs contributifs."
      },
      {
       "terme": "Inspection indépendante",
       "def": "Contrôle d'une tâche critique réalisé par une seconde personne qualifiée, distincte de l'exécutant."
      }
     ]
    },
    {
     "id": "baer-communication-professionnelle",
     "titre": "Communication professionnelle et anglais technique",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Rédiger un constat d'anomalie et un compte rendu d'intervention précis et vérifiables",
      "Réaliser une transmission de consignes entre équipes sans perte d'information",
      "Communiquer oralement en sécurité au sol, notamment avec le poste de pilotage",
      "Lire une documentation rédigée en anglais technique simplifié",
      "Utiliser le vocabulaire et les abréviations normalisés du secteur"
     ],
     "sections": [
      {
       "titre": "L'information, un maillon de la sécurité",
       "contenu": "<p>Dans un organisme de maintenance, le travail sur un aéronef passe souvent par plusieurs mains : l'équipage constate une anomalie, le technicien de ligne la diagnostique, l'atelier répare l'équipement déposé, l'équipe de nuit termine le travail commencé par l'équipe de jour, le magasin fournit les pièces, le bureau technique commande les travaux. À chaque passage, l'information peut se perdre ou se déformer.</p>\n<p>Une information professionnelle de qualité est <strong>exacte</strong> (vérifiée, sans supposition), <strong>complète</strong> (localisation, références, valeurs mesurées), <strong>claire</strong> (vocabulaire normalisé, sans abréviation personnelle), <strong>traçable</strong> (écrite, datée, signée) et <strong>transmise au bon destinataire</strong> au bon moment.</p>\n<p>Le référentiel du bac pro attend du technicien qu'il sache recevoir, rechercher, traiter et transmettre ces informations, à l'écrit comme à l'oral, en français et en anglais.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> ce qui n'est pas écrit n'existe pas pour l'équipe suivante. Une information importante donnée oralement doit toujours être confirmée par écrit dans le document prévu (carte de travail, compte rendu matériel, fiche de relève).</div>"
      },
      {
       "titre": "Décrire une anomalie et rendre compte d'une intervention",
       "contenu": "<p>Le <strong>constat d'anomalie</strong> est la base de toute la suite : diagnostic, commande de pièces, évaluation par le bureau technique. Il doit permettre à une personne qui n'a pas vu l'aéronef de comprendre exactement de quoi il s'agit.</p>\n<table><thead><tr><th>Constat imprécis</th><th>Constat professionnel</th></tr></thead><tbody>\n<tr><td>Fuite au train</td><td>Fuite de fluide hydraulique au niveau du raccord d'entrée du vérin de manœuvre du train principal gauche, débit environ 10 gouttes par minute, système sous pression</td></tr>\n<tr><td>Bosse sur le fuselage</td><td>Enfoncement sans pli ni crique sur le revêtement du fuselage côté droit, entre cadres 32 et 33, au-dessus de la lisse 18, dimensions 40 × 25 mm, profondeur 1,2 mm</td></tr>\n<tr><td>Écran HS</td><td>Écran de navigation côté commandant de bord noir à la mise sous tension, disjoncteur correspondant enclenché, test intégré non accessible</td></tr>\n</tbody></table>\n<p>Le <strong>compte rendu d'intervention</strong> (action corrective) décrit ce qui a été fait et sur quelle base : référence de la tâche du manuel et sa révision, pièces déposées et posées avec références et numéros de série, valeurs mesurées et réglages, essais réalisés et résultats.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger un compte rendu d'action corrective. 1) Rappeler l'anomalie traitée (numéro du défaut dans le compte rendu matériel). 2) Indiquer le diagnostic réalisé et sa référence documentaire. 3) Décrire l'action : « Remplacement du capteur de position, réf. déposée … n° de série …, réf. posée … n° de série …, selon tâche AMM … ». 4) Donner le résultat de l'essai : « Test opérationnel selon tâche … satisfaisant ». 5) Dater, signer, indiquer son numéro d'habilitation ou faire signer la personne habilitée. Une phrase vague comme « réparé, RAS » n'est pas un compte rendu.</div>"
      },
      {
       "titre": "Transmettre entre équipes",
       "contenu": "<p>La <strong>relève</strong> (handover) entre équipes est un moment à risque reconnu : de nombreux événements graves sont liés à une tâche interrompue dont l'état n'a pas été correctement transmis. Une bonne relève associe un document écrit et un échange oral face à face, si possible devant l'aéronef.</p>\n<p>La fiche de relève précise pour chaque tâche en cours : l'aéronef et la tâche concernés, les étapes réalisées et signées, les étapes restantes, l'état exact de l'aéronef (panneaux ouverts, circuits désactivés, disjoncteurs ouverts et étiquetés, systèmes sous pression ou non), les pièces en attente, les difficultés rencontrées et les points de vigilance.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'état réel de l'installation doit correspondre à ce qui est écrit. Une étape signée mais non réalisée, ou réalisée et non signée, crée une fausse image de la situation pour l'équipe suivante. En cas de doute à la reprise, on vérifie physiquement plutôt que de se fier au document.</div>\n<p>Les <strong>étiquettes</strong> font aussi partie de la communication : étiquette « ne pas manœuvrer » sur un disjoncteur ouvert, étiquette rouge sur un équipement inopérant, étiquette de pièce non conforme ou de pièce en attente de contrôle. Elles sont normalisées dans l'organisme et ne se retirent que par la personne autorisée, une fois la condition levée.</p>"
      },
      {
       "titre": "Communiquer à l'oral au sol",
       "contenu": "<p>Certaines opérations exigent une coordination orale stricte : essais de commandes de vol, mise en route moteur, repoussage et remorquage, essais de train. La communication se fait au moyen de casques reliés à l'interphone de l'avion ou par des <strong>signaux gestuels</strong> normalisés entre le personnel au sol et le poste de pilotage.</p>\n<p>Les règles de base sont les suivantes : un vocabulaire court et convenu à l'avance ; l'identification de l'émetteur et du destinataire ; le <strong>collationnement</strong> (le destinataire répète l'information ou l'ordre reçu) ; l'arrêt immédiat de toute opération en cas de doute ou de perte de communication.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un test des gouvernes, l'opérateur au poste annonce : « Aileron gauche, manche à gauche, maintenant ». Le technicien à l'extérieur répond : « Aileron gauche vers le haut, débattement correct ». Sans réponse claire, on n'enchaîne pas avec l'action suivante.</div>\n<p>Les échanges avec l'équipage obéissent aux mêmes principes. Lorsqu'un pilote décrit une anomalie, le technicien pose des questions précises : phase de vol, conditions, messages d'alarme apparus, actions de l'équipage, caractère permanent ou intermittent. Ces informations orientent fortement le diagnostic.</p>"
      },
      {
       "titre": "L'anglais technique et l'anglais simplifié",
       "contenu": "<p>La documentation aéronautique est très majoritairement rédigée en anglais, y compris chez les constructeurs européens. Pour la rendre compréhensible par des lecteurs du monde entier dont l'anglais n'est pas la langue maternelle, l'industrie a créé l'<strong>anglais technique simplifié</strong> (Simplified Technical English), défini par la spécification ASD-STE100. Ses règles principales :</p>\n<ul>\n<li>un vocabulaire contrôlé : chaque mot autorisé n'a qu'un seul sens (par exemple « make sure » pour vérifier qu'une condition est remplie) ;</li>\n<li>des phrases courtes : au plus 20 mots pour une instruction ;</li>\n<li>une seule instruction par phrase, à l'impératif : « Remove the bolt. », « Install the washer. » ;</li>\n<li>la voix active de préférence.</li>\n</ul>\n<table><thead><tr><th>Terme anglais</th><th>Sens en maintenance</th></tr></thead><tbody>\n<tr><td>Remove / Install</td><td>Déposer / Poser</td></tr>\n<tr><td>Tighten / Torque</td><td>Serrer / Serrer au couple</td></tr>\n<tr><td>Safety (with lockwire)</td><td>Freiner (au fil à freiner)</td></tr>\n<tr><td>Discard</td><td>Mettre au rebut (ne pas réutiliser)</td></tr>\n<tr><td>Make sure that</td><td>S'assurer que</td></tr>\n<tr><td>Do a check / Do a test</td><td>Faire un contrôle / Faire un essai</td></tr>\n<tr><td>WARNING / CAUTION / NOTE</td><td>Danger pour les personnes / Risque d'endommager le matériel / Information utile</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire une étape de tâche en anglais. Exemple : « Discard the O-ring. Lubricate the new O-ring with hydraulic fluid. Install the new O-ring on the union. » 1) Repérer les verbes d'action : discard, lubricate, install. 2) Repérer les objets : O-ring (joint torique), union (raccord). 3) Repérer les précisions : new, with hydraulic fluid. 4) Traduire en actions : mettre le joint torique déposé au rebut, lubrifier le joint neuf avec le fluide hydraulique, poser le joint neuf sur le raccord. 5) Ne jamais interpréter : en cas de doute sur un terme, consulter le glossaire de la documentation ou demander.</div>"
      },
      {
       "titre": "Abréviations, repères et vocabulaire normalisé",
       "contenu": "<p>Le secteur utilise un grand nombre d'<strong>abréviations</strong>, presque toutes d'origine anglaise. Chaque manuel en contient une liste au début ; le référentiel du diplôme en propose aussi un lexique. Il est indispensable d'employer les abréviations reconnues et de ne jamais en inventer : « LH » et « RH » (gauche et droite, vus depuis le poste de pilotage en regardant vers l'avant), « FWD » et « AFT » (avant et arrière), « INBD » et « OUTBD » (intérieur et extérieur), « UPR » et « LWR » (supérieur et inférieur).</p>\n<p>La localisation sur l'aéronef s'exprime aussi avec des repères normalisés : numéros de zones et de panneaux d'accès, stations de fuselage, numéros de cadres et de lisses, repères fonctionnels des équipements électriques. Dire « le boîtier derrière le panneau 312AR » est sans ambiguïté ; dire « le boîtier sous l'aile » ne l'est pas.</p>\n<p>Les <strong>unités</strong> doivent être écrites avec leur symbole correct et sans confusion possible entre systèmes : une pression notée « 30 » sans unité peut être lue en bars, en psi ou en hectopascals. Lorsque la documentation donne une valeur en unités anglo-saxonnes, on reporte la valeur et l'unité de la documentation, et l'on précise la conversion si un instrument gradué en unités métriques est utilisé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> « gauche » et « droite » s'entendent toujours du point de vue du pilote regardant vers l'avant. Un technicien placé face au nez de l'avion a la gauche de l'avion à sa droite : c'est une source classique d'intervention sur le mauvais côté.</div>"
      }
     ],
     "points_cles": [
      "Une information professionnelle est exacte, complète, claire, traçable et bien adressée",
      "Un constat localise précisément, chiffre et décrit sans interpréter",
      "Un compte rendu cite la tâche de référence, les pièces, les mesures et les essais",
      "La relève associe un écrit et un échange oral, idéalement devant l'aéronef",
      "Les étiquettes normalisées signalent les états particuliers et ne se retirent pas sans autorisation",
      "Au sol, on collationne les ordres et on arrête tout en cas de doute",
      "L'anglais simplifié ASD-STE100 : une instruction par phrase, vocabulaire contrôlé",
      "WARNING concerne les personnes, CAUTION le matériel, NOTE une information"
     ],
     "lexique": [
      {
       "terme": "Constat d'anomalie",
       "def": "Description écrite et précise d'un défaut constaté sur un aéronef ou un équipement."
      },
      {
       "terme": "Action corrective",
       "def": "Intervention réalisée pour supprimer une anomalie, consignée avec ses références."
      },
      {
       "terme": "Relève",
       "def": "Transmission d'un travail en cours d'une équipe à la suivante."
      },
      {
       "terme": "Collationnement",
       "def": "Répétition par le destinataire d'un message reçu pour confirmer sa bonne compréhension."
      },
      {
       "terme": "ASD-STE100",
       "def": "Spécification de l'anglais technique simplifié utilisé dans la documentation aéronautique."
      },
      {
       "terme": "WARNING",
       "def": "Mention signalant un danger pour les personnes dans une procédure."
      },
      {
       "terme": "CAUTION",
       "def": "Mention signalant un risque d'endommagement du matériel dans une procédure."
      },
      {
       "terme": "Signaux gestuels",
       "def": "Gestes normalisés utilisés pour communiquer entre le personnel au sol et le poste de pilotage."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Organiser et réaliser l'entretien",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "baer-programmes-entretien",
     "titre": "Programmes d'entretien et organisation des visites",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Expliquer comment est élaboré un programme d'entretien à partir des documents du constructeur",
      "Distinguer entretien programmé et non programmé, entretien en ligne et en base",
      "Décrire les intervalles exprimés en heures de vol, cycles et temps calendaire",
      "Expliquer la gestion des pièces à vie limitée et des potentiels",
      "Décrire l'organisation et le déroulement d'une visite programmée"
     ],
     "sections": [
      {
       "titre": "Du constructeur au programme de l'exploitant",
       "contenu": "<p>L'entretien d'un aéronef n'est pas improvisé : il suit un <strong>programme d'entretien</strong> (AMP : Aircraft Maintenance Programme) propre à chaque aéronef ou flotte, approuvé par l'autorité. Ce programme est élaboré par l'organisme de gestion du maintien de la navigabilité à partir de plusieurs sources.</p>\n<ul>\n<li>Pour les avions de transport, un groupe de travail réunissant constructeur, exploitants et autorités définit les tâches minimales par une méthode d'analyse appelée <strong>MSG-3</strong> ; le résultat est le rapport du comité de revue de la maintenance (MRBR).</li>\n<li>Le constructeur publie le <strong>document de planification de la maintenance</strong> (MPD), qui regroupe toutes les tâches recommandées avec leurs intervalles et leurs références.</li>\n<li>Les <strong>limitations de navigabilité</strong> (ALS), partie du certificat de type, fixent des tâches et limites obligatoires (pièces à vie limitée, inspections structurales, exigences liées au risque d'inflammation des réservoirs).</li>\n<li>Les <strong>consignes de navigabilité</strong> et certaines recommandations des constructeurs ajoutent des tâches.</li>\n<li>L'exploitant adapte le programme à son utilisation (climat, nombre de cycles, environnement marin) et à son expérience.</li>\n</ul>\n<p>Une tâche du programme comporte une référence, une description, un intervalle, l'applicabilité (avions et configurations concernés), la zone et le type de compétence requis.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le programme d'entretien est vivant : il évolue avec les révisions du constructeur, les consignes de navigabilité, le retour d'expérience de l'exploitant et les analyses de fiabilité. Chaque évolution est approuvée.</div>"
      },
      {
       "titre": "Les catégories d'entretien",
       "contenu": "<p>On distingue d'abord l'<strong>entretien programmé</strong>, issu du programme et planifié à l'avance, et l'<strong>entretien non programmé</strong>, déclenché par une anomalie (défaut signalé par l'équipage, dommage découvert, alarme).</p>\n<p>On distingue aussi le lieu et l'ampleur des travaux. L'<strong>entretien en ligne</strong> est réalisé en escale ou au stationnement, entre deux vols ou pendant la nuit : visites avant vol et quotidiennes, remplacement d'équipements facilement accessibles (LRU), traitement des défauts signalés, compléments de fluides. Il se fait souvent en extérieur, sous forte contrainte de temps, avec des moyens limités. L'<strong>entretien en base</strong> est réalisé en hangar lors d'une immobilisation programmée : grandes visites, inspections structurales, modifications importantes, réparations lourdes. Un organisme peut être agréé pour l'un, l'autre ou les deux, et cette distinction figure dans sa liste de capacités. Le technicien de ligne doit savoir reconnaître un travail qui dépasse les moyens de l'escale et le signaler pour qu'il soit reporté selon les procédures ou réalisé en base.</p>\n<p>Les tâches programmées sont de plusieurs types, définis par la méthode MSG-3 :</p>\n<table><thead><tr><th>Type de tâche</th><th>Objet</th><th>Exemple</th></tr></thead><tbody>\n<tr><td>Lubrification, servicing</td><td>Maintenir les capacités : graissage, compléments de fluides</td><td>Graissage des articulations de train</td></tr>\n<tr><td>Contrôle opérationnel ou visuel</td><td>Vérifier qu'un élément remplit sa fonction (souvent pour des fonctions cachées)</td><td>Test d'un éclairage de secours</td></tr>\n<tr><td>Inspection, contrôle fonctionnel</td><td>Détecter une dégradation ou mesurer une performance</td><td>Mesure d'usure de freins, inspection détaillée d'une ferrure</td></tr>\n<tr><td>Restauration</td><td>Remettre un élément à un état défini</td><td>Révision d'un équipement à intervalle fixe</td></tr>\n<tr><td>Mise au rebut</td><td>Retirer un élément à une limite de vie</td><td>Remplacement d'une cartouche pyrotechnique</td></tr>\n</tbody></table>\n<p>Pour les inspections de structure, on distingue l'<strong>inspection visuelle générale</strong> (GVI : examen d'une zone pour détecter des dommages évidents, à portée de main, avec un éclairage normal), l'<strong>inspection visuelle détaillée</strong> (DET : examen approfondi d'un élément précis, avec éclairage intense et parfois loupe ou miroir) et l'<strong>inspection détaillée spéciale</strong> (SDI : utilisation de techniques de contrôle non destructif).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une tâche de type « inspection visuelle détaillée » ne peut pas être réalisée comme un simple coup d'œil. Le niveau d'inspection fait partie de la tâche : il conditionne l'éclairage, l'accès, le nettoyage préalable éventuel et le temps nécessaire.</div>"
      },
      {
       "titre": "Intervalles : heures de vol, cycles et calendrier",
       "contenu": "<p>Les intervalles des tâches sont exprimés dans une ou plusieurs unités, selon le mécanisme de dégradation concerné.</p>\n<table><thead><tr><th>Unité</th><th>Abréviation</th><th>Dégradations associées</th></tr></thead><tbody>\n<tr><td>Heures de vol</td><td>FH</td><td>Usure, fonctionnement des équipements, moteur</td></tr>\n<tr><td>Cycles de vol (un décollage et un atterrissage)</td><td>FC</td><td>Fatigue de structure (pressurisation), trains, freins, disques de moteur</td></tr>\n<tr><td>Temps calendaire (jours, mois, années)</td><td>DY, MO, YE</td><td>Corrosion, vieillissement des élastomères, produits périssables</td></tr>\n<tr><td>Heures de fonctionnement d'un équipement</td><td>par exemple APU hours</td><td>Usure de l'équipement concerné</td></tr>\n</tbody></table>\n<p>Lorsqu'une tâche a plusieurs intervalles, par exemple « 6 000 FC ou 24 mois », c'est en général la première échéance atteinte qui s'applique. Un avion court-courrier accumule beaucoup de cycles pour peu d'heures ; un avion long-courrier l'inverse : leurs programmes sont donc différents.</p>\n<p>Les tâches sont souvent regroupées en <strong>visites</strong> (checks) : visites quotidiennes et avant vol en escale, visites de ligne périodiques, puis visites lourdes en base (traditionnellement appelées A-check et C-check pour les avions de transport). Les intervalles et le contenu exacts dépendent du type d'avion et du programme approuvé ; de nombreux exploitants pratiquent aujourd'hui un entretien « par blocs » ou étalé, qui répartit les tâches pour limiter l'immobilisation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déterminer la prochaine échéance d'une tâche. Données : tâche à 4 000 FH ou 2 000 FC ou 24 mois, dernière exécution le 15 mars 2025 à 31 200 FH et 18 400 FC ; l'avion vole environ 250 FH et 140 FC par mois. 1) Échéance heures : 31 200 + 4 000 = 35 200 FH, atteinte dans 16 mois environ. 2) Échéance cycles : 18 400 + 2 000 = 20 400 FC, atteinte dans 14,3 mois environ. 3) Échéance calendaire : 15 mars 2027, soit 24 mois. 4) La première échéance est celle des cycles : environ fin mai 2026. 5) Le planning programme la tâche dans la visite qui précède cette date, en tenant compte des tolérances éventuellement autorisées par le programme.</div>"
      },
      {
       "titre": "Pièces à vie limitée et suivi des potentiels",
       "contenu": "<p>Certaines pièces ont une <strong>vie limitée</strong> : leur rupture serait catastrophique et leur état ne peut pas être surveillé efficacement par inspection. Elles doivent être retirées définitivement du service à une limite fixée par le constructeur dans les limitations de navigabilité. C'est le cas, par exemple, des disques et arbres de moteurs, de certaines pièces de trains d'atterrissage ou de rotors d'hélicoptères.</p>\n<p>Le suivi exige de connaître, pour chaque pièce identifiée par son numéro de série, sa <strong>consommation de vie</strong> depuis sa fabrication : heures et cycles accumulés, y compris lorsqu'elle a été montée successivement sur plusieurs aéronefs ou moteurs. Ce suivi s'appuie sur des fiches de suivi (back-to-birth) ; une pièce sans historique complet ne peut pas être utilisée.</p>\n<p>D'autres éléments ont un <strong>potentiel</strong> : un intervalle avant révision ou remplacement (moteurs d'aviation légère, hélices, équipements à révision périodique). Les éléments sans limite fixée sont entretenus selon leur état (on condition) ou leur fiabilité observée (condition monitoring).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un échange d'équipement à potentiel ou à vie limitée, le technicien relève sur la carte de travail les numéros de série déposé et posé, et transmet les documents (certificat Form 1 de la pièce posée, fiche de suivi). Le service de gestion met à jour la configuration de l'aéronef et les échéances. Une erreur de numéro de série fausse tout le suivi.</div>"
      },
      {
       "titre": "Organiser et conduire une visite",
       "contenu": "<p>Une visite programmée se prépare plusieurs semaines à l'avance. Le bureau de planification établit le <strong>dossier de travaux</strong> (work package) : liste des tâches échues, consignes de navigabilité, modifications à appliquer, défauts différés à corriger. Pour chaque tâche, il édite une <strong>carte de travail</strong> (work card ou task card) extraite de la documentation à jour, et prévoit la main-d'œuvre, les pièces, les produits, l'outillage, les accès et les équipements de servitude.</p>\n<p>Le déroulement suit en général plusieurs phases :</p>\n<ol>\n<li><strong>réception</strong> de l'aéronef : constat d'arrivée, mise en configuration de sécurité (cales, mises à la terre, protections, désactivations) ;</li>\n<li><strong>ouverture</strong> : dépose des panneaux, capots et aménagements nécessaires aux accès ;</li>\n<li><strong>inspections</strong> : réalisation des tâches d'inspection, ouverture de cartes de non-routine pour chaque défaut constaté ;</li>\n<li><strong>travaux</strong> : réparations, remplacements, modifications ;</li>\n<li><strong>fermeture</strong> : inspections de fermeture (zone propre, aucun outil oublié), repose des panneaux ;</li>\n<li><strong>essais</strong> fonctionnels et, si nécessaire, essais moteurs ;</li>\n<li><strong>contrôle du dossier</strong> et remise en service.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> chaque défaut découvert lors d'une inspection donne lieu à une carte non routinière (NRC) qui sera traitée et signée. Corriger un petit défaut « en passant », sans l'enregistrer, fait disparaître l'information : le bureau technique ne peut plus suivre la fiabilité, et la réparation elle-même n'est pas tracée.</div>"
      }
     ],
     "points_cles": [
      "Le programme d'entretien est approuvé et dérive du MRBR, du MPD et des limitations de navigabilité",
      "Entretien programmé ou non programmé, en ligne ou en base",
      "GVI, inspection détaillée et inspection détaillée spéciale n'ont pas le même niveau d'exigence",
      "Les intervalles s'expriment en heures de vol, en cycles ou en temps calendaire",
      "Avec plusieurs intervalles, la première échéance atteinte s'applique en général",
      "Les pièces à vie limitée exigent un historique complet par numéro de série",
      "Une visite suit une séquence : réception, ouverture, inspections, travaux, fermeture, essais, remise en service",
      "Tout défaut constaté est enregistré sur une carte non routinière"
     ],
     "lexique": [
      {
       "terme": "AMP",
       "def": "Programme d'entretien de l'aéronef, approuvé par l'autorité."
      },
      {
       "terme": "MSG-3",
       "def": "Méthode d'analyse utilisée pour définir les tâches d'entretien programmé des avions de transport."
      },
      {
       "terme": "MPD",
       "def": "Document de planification de la maintenance publié par le constructeur."
      },
      {
       "terme": "ALS",
       "def": "Limitations de navigabilité : tâches et limites obligatoires faisant partie du certificat de type."
      },
      {
       "terme": "Cycle de vol",
       "def": "Ensemble d'un décollage et d'un atterrissage, unité de mesure de la fatigue."
      },
      {
       "terme": "Pièce à vie limitée",
       "def": "Pièce qui doit être retirée définitivement du service à une limite d'heures ou de cycles."
      },
      {
       "terme": "Potentiel",
       "def": "Intervalle de fonctionnement autorisé avant révision ou remplacement d'un élément."
      },
      {
       "terme": "Carte de travail",
       "def": "Document décrivant une tâche à réaliser, sur lequel sont enregistrées l'exécution et les signatures."
      },
      {
       "terme": "NRC",
       "def": "Carte non routinière, ouverte pour traiter un défaut découvert pendant une visite."
      },
      {
       "terme": "GVI",
       "def": "Inspection visuelle générale d'une zone, destinée à détecter des dommages évidents."
      }
     ]
    },
    {
     "id": "baer-diagnostic-essais",
     "titre": "Diagnostic, essais et réglages",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Conduire une démarche de diagnostic structurée à partir d'un symptôme",
      "Exploiter les systèmes de maintenance embarqués : tests intégrés, messages de panne, rapports post-vol",
      "Utiliser un manuel de dépannage et en suivre l'arbre de décision",
      "Distinguer les différents niveaux d'essais après intervention",
      "Réaliser un réglage en respectant tolérances, conditions et enregistrements"
     ],
     "sections": [
      {
       "titre": "Une démarche de diagnostic",
       "contenu": "<p>Le <strong>diagnostic</strong> consiste à identifier la cause d'un dysfonctionnement à partir de ses symptômes, pour ne remplacer que l'élément réellement défaillant. Un diagnostic bâclé conduit à remplacer des équipements en bon état (déposés à tort), ce qui coûte cher, immobilise l'avion et laisse la panne réelle en place.</p>\n<p>La démarche se déroule en étapes :</p>\n<ol>\n<li><strong>recueillir</strong> les symptômes : compte rendu de l'équipage, messages d'alarme, données enregistrées, conditions d'apparition (sol ou vol, température, phase de vol) ;</li>\n<li><strong>reproduire</strong> le défaut si possible, dans des conditions sûres ;</li>\n<li><strong>comprendre</strong> le fonctionnement normal du système à l'aide de la description et des schémas ;</li>\n<li><strong>formuler des hypothèses</strong> et les classer par probabilité et facilité de vérification ;</li>\n<li><strong>tester</strong> les hypothèses une à une par des mesures ou des essais ;</li>\n<li><strong>corriger</strong> la cause, puis <strong>vérifier</strong> par un essai que le défaut a disparu ;</li>\n<li><strong>enregistrer</strong> le diagnostic, l'action et le résultat.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on commence toujours par les vérifications simples et non destructives : alimentation électrique, disjoncteurs, connecteurs, pression hydraulique, état visible des câblages. Une grande partie des pannes d'équipements « intermittentes » viennent de connexions et non de l'équipement lui-même.</div>"
      },
      {
       "titre": "Les systèmes de maintenance embarqués",
       "contenu": "<p>Les équipements numériques modernes intègrent un <strong>test intégré</strong> (BITE : Built-In Test Equipment) qui surveille en permanence leur fonctionnement et celui de leurs entrées et sorties. Les défauts détectés sont mémorisés avec un code et souvent l'heure et la phase de vol.</p>\n<p>Sur les avions de transport, ces informations sont centralisées par un <strong>système de maintenance centralisé</strong> (CMS, ou CFDS sur les générations plus anciennes chez Airbus) : il collecte les messages de panne de tous les systèmes, les corrèle avec les alarmes présentées à l'équipage et produit, à la fin du vol, un <strong>rapport post-vol</strong> (PFR chez Airbus). Ces données peuvent être transmises au sol en vol par liaison de données, ce qui permet de préparer pièces et intervention avant l'arrivée de l'avion.</p>\n<p>Depuis le poste de pilotage ou un terminal de maintenance, le technicien peut consulter l'historique des pannes, lancer des tests des équipements, lire des paramètres en temps réel et parfois réaliser des réglages ou des chargements de logiciels.</p>\n<table><thead><tr><th>Information</th><th>Source</th><th>Usage</th></tr></thead><tbody>\n<tr><td>Alarme équipage</td><td>Écran ECAM ou EICAS</td><td>Effet de la panne vu par l'équipage</td></tr>\n<tr><td>Message de maintenance</td><td>CMS, rapport post-vol</td><td>Équipement ou liaison suspectés, code de panne</td></tr>\n<tr><td>Code de panne interne</td><td>Mémoire de l'équipement (BITE)</td><td>Détail exploité par l'atelier</td></tr>\n<tr><td>Paramètres enregistrés</td><td>Enregistreur de maintenance</td><td>Analyse de tendance, conditions d'apparition</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un message de maintenance désigne l'élément <em>suspecté</em> par le système de surveillance, pas forcément l'élément défaillant. Si un capteur ne transmet plus de données, le calculateur qui les reçoit signale la perte ; la cause peut être le capteur, son câblage, son alimentation ou le calculateur lui-même.</div>"
      },
      {
       "titre": "Le manuel de dépannage",
       "contenu": "<p>Le constructeur fournit un manuel dédié au dépannage, appelé selon les constructeurs <strong>TSM</strong> (Trouble Shooting Manual) ou <strong>FIM</strong> (Fault Isolation Manual). Il part des symptômes (message de maintenance, alarme, observation de l'équipage) et conduit le technicien à travers une <strong>procédure d'isolement de panne</strong> organisée en arbre de décision.</p>\n<p>Chaque procédure comprend en général : la description du défaut et ses causes possibles classées par probabilité, les équipements et documents nécessaires, la préparation (mise sous tension, mise en pression, configuration), puis une suite de tests. Chaque test se termine par une question à laquelle on répond par oui ou non, ce qui renvoie à l'étape suivante ou à une action corrective (remplacer tel équipement, réparer tel câblage) avec la référence de la tâche du manuel de maintenance correspondante.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> suivre une procédure d'isolement de panne. Exemple de symptôme : message « capteur de température de frein roue 3 ». 1) Ouvrir la procédure correspondant exactement au message et vérifier son applicabilité à l'avion. 2) Faire le test préliminaire : effacer le message, lancer le test du calculateur de freinage ; le message réapparaît-il ? Oui : continuer. 3) Contrôler visuellement le capteur et son connecteur : dommage ? Non : continuer. 4) Mesurer la résistance du capteur aux bornes du connecteur, à comparer aux valeurs du tableau de la procédure en fonction de la température : hors limites ? Oui : remplacer le capteur selon la tâche indiquée. 5) Refaire le test final prévu par la procédure pour confirmer la disparition du défaut. 6) Enregistrer chaque étape et la conclusion.</div>\n<p>Lorsque l'arbre de décision ne permet pas de conclure, ou que le défaut est intermittent et ne se reproduit pas au sol, l'organisme dispose de procédures : diagnostic approfondi avec le support technique, surveillance du défaut sur les vols suivants, analyse des données enregistrées.</p>"
      },
      {
       "titre": "Mesures électriques de diagnostic",
       "contenu": "<p>Beaucoup de diagnostics passent par des mesures électriques au <strong>multimètre</strong>, à réaliser avec méthode et avec les précautions prescrites (circuits hors tension pour les mesures de résistance, protection des équipements sensibles).</p>\n<table><thead><tr><th>Mesure</th><th>Conditions</th><th>Ce qu'elle révèle</th></tr></thead><tbody>\n<tr><td>Tension</td><td>Circuit sous tension, appareil en parallèle</td><td>Présence de l'alimentation, chute de tension anormale</td></tr>\n<tr><td>Continuité, résistance</td><td>Circuit hors tension, connecteurs débranchés aux deux extrémités</td><td>Fil coupé, mauvais contact, valeur d'un capteur</td></tr>\n<tr><td>Isolement</td><td>Circuit hors tension, appareil spécifique (mégohmmètre) uniquement si la tâche le prévoit</td><td>Défaut d'isolement entre fil et masse ou entre fils</td></tr>\n<tr><td>Résistance de métallisation</td><td>Micro-ohmmètre</td><td>Qualité de la liaison à la structure</td></tr>\n</tbody></table>\n<p>Pour localiser un fil coupé ou un court-circuit dans un faisceau, on procède par <strong>dichotomie</strong> : on mesure à mi-parcours (à un connecteur de traversée intermédiaire), on détermine de quel côté se trouve le défaut, puis on recommence sur la moitié concernée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on n'introduit jamais une pointe de touche directement dans un contact femelle de connecteur : elle écarte le contact et crée un faux contact futur. On utilise les adaptateurs de test prévus. De même, un mégohmmètre appliqué sans précaution sur un circuit relié à un équipement électronique peut le détruire.</div>"
      },
      {
       "titre": "Les essais après intervention",
       "contenu": "<p>Aucune intervention n'est terminée sans <strong>essai</strong> prouvant que le système fonctionne correctement. La documentation distingue plusieurs niveaux d'essais, à appliquer exactement comme prescrit par la tâche.</p>\n<table><thead><tr><th>Niveau d'essai</th><th>Objet</th><th>Exemple</th></tr></thead><tbody>\n<tr><td>Essai opérationnel</td><td>Vérifier que le système remplit sa fonction, sans mesure de performance</td><td>Les volets sortent et rentrent, les positions affichées correspondent</td></tr>\n<tr><td>Essai fonctionnel</td><td>Vérifier que les performances sont dans les tolérances, par des mesures</td><td>Temps de sortie des volets, pression de fonctionnement, débit</td></tr>\n<tr><td>Essai du système complet (system test)</td><td>Vérifier l'ensemble des fonctions et des interfaces</td><td>Test d'un système de navigation avec ses calculateurs et ses affichages</td></tr>\n<tr><td>Essai d'étanchéité</td><td>Vérifier l'absence de fuite après intervention sur un circuit</td><td>Mise en pression d'un raccord hydraulique et observation pendant une durée définie</td></tr>\n</tbody></table>\n<p>Certains essais exigent des moyens spécifiques : groupe hydraulique de parc, source d'air, banc de test des instruments anémobarométriques, équipements de test radio, ou un essai moteur. Ils peuvent aussi exiger une configuration particulière de l'avion (sur vérins pour les essais de train, alimentation électrique extérieure).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un essai qui échoue n'est pas « refait jusqu'à ce qu'il passe » : son échec est une information. On enregistre le résultat, on analyse la cause (montage, réglage, pièce neuve défectueuse) et on applique la procédure de dépannage correspondante.</div>"
      },
      {
       "titre": "Réaliser un réglage",
       "contenu": "<p>Un <strong>réglage</strong> consiste à amener une grandeur (position, course, tension, jeu, effort) dans sa tolérance en agissant sur un élément prévu à cet effet : embout fileté de biellette, butée réglable, ridoir de câble, cales, potentiomètre ou paramètre de calculateur.</p>\n<p>Les conditions du réglage sont aussi importantes que la valeur : température (la tension des câbles de commande varie fortement avec la température de la structure en aluminium), configuration (gouverne au neutre, verrouillée par des <strong>piges de réglage</strong> qui immobilisent les guignols en position de référence), alimentation (pression hydraulique présente ou non), outillage étalonné (tensiomètre, rapporteur, gabarit).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> régler la tension d'un câble de commande. 1) Relever la température ambiante de la zone et lire dans le graphique de la tâche la tension requise à cette température, avec sa tolérance. 2) Mettre en place les piges de réglage prévues. 3) Mesurer la tension avec le tensiomètre étalonné, en respectant la position de mesure (loin des poulies et des raccords) et en utilisant le patin correspondant au diamètre du câble. 4) Agir sur les ridoirs symétriquement pour garder la gouverne au neutre. 5) Retirer les piges, manœuvrer la commande sur toute sa course, puis contrôler à nouveau la tension et le neutre. 6) Freiner les ridoirs et vérifier le nombre de filets visibles. 7) Faire réaliser l'inspection indépendante exigée sur les commandes de vol.</div>\n<p>Toute valeur mesurée est inscrite sur la carte de travail, avec la référence de l'outil utilisé. Un réglage en limite de tolérance peut révéler une usure ou un problème de montage à signaler.</p>"
      }
     ],
     "points_cles": [
      "Diagnostiquer : recueillir, reproduire, comprendre, supposer, tester, corriger, vérifier, enregistrer",
      "Commencer par les vérifications simples : alimentation, disjoncteurs, connecteurs",
      "Le BITE et le CMS mémorisent et centralisent les messages de panne",
      "Un message de maintenance désigne un élément suspecté, pas forcément défaillant",
      "Le TSM ou FIM conduit l'isolement de panne par un arbre de décision",
      "On ne pique jamais un contact de connecteur avec une pointe de touche",
      "Essai opérationnel, fonctionnel et système n'ont pas le même niveau d'exigence",
      "Un réglage se fait dans des conditions définies : température, piges, outillage étalonné",
      "Valeurs mesurées et outils utilisés sont enregistrés"
     ],
     "lexique": [
      {
       "terme": "Diagnostic",
       "def": "Identification de la cause d'un dysfonctionnement à partir de ses symptômes."
      },
      {
       "terme": "BITE",
       "def": "Test intégré d'un équipement qui surveille son fonctionnement et mémorise les pannes."
      },
      {
       "terme": "CMS",
       "def": "Système de maintenance centralisé qui collecte et corrèle les messages de panne de l'avion."
      },
      {
       "terme": "Rapport post-vol",
       "def": "Synthèse des alarmes et messages de panne survenus pendant un vol."
      },
      {
       "terme": "TSM / FIM",
       "def": "Manuel de dépannage ou d'isolement de pannes, organisé en arbres de décision."
      },
      {
       "terme": "Dépose injustifiée",
       "def": "Remplacement d'un équipement qui se révèle en bon état à l'atelier."
      },
      {
       "terme": "Dichotomie",
       "def": "Méthode de localisation consistant à diviser successivement par deux la zone de recherche."
      },
      {
       "terme": "Essai fonctionnel",
       "def": "Essai qui vérifie par des mesures que les performances d'un système sont dans les tolérances."
      },
      {
       "terme": "Pige de réglage",
       "def": "Tige insérée dans des trous de référence pour immobiliser une commande en position de réglage."
      },
      {
       "terme": "Tensiomètre",
       "def": "Instrument de mesure de la tension d'un câble de commande."
      }
     ]
    },
    {
     "id": "baer-controles-non-destructifs",
     "titre": "Inspection et contrôles non destructifs",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Conduire une inspection visuelle méthodique et décrire les défauts recherchés",
      "Expliquer le principe des principales méthodes de contrôle non destructif",
      "Choisir la méthode adaptée à un matériau et à un type de défaut",
      "Situer le rôle du technicien et celui de l'opérateur certifié en CND",
      "Interpréter un rapport de contrôle non destructif"
     ],
     "sections": [
      {
       "titre": "L'inspection visuelle, premier contrôle",
       "contenu": "<p>L'<strong>inspection visuelle</strong> est de loin le contrôle le plus pratiqué en maintenance. Elle permet de détecter la majorité des dommages : corrosion, criques débouchantes visibles, déformations, impacts, rayures, fixations manquantes ou desserrées, fuites, frottements de câblages ou de tuyauteries, traces de surchauffe.</p>\n<p>Son efficacité dépend des conditions : propreté de la zone (un dépôt d'huile ou de saleté masque une crique), accès, éclairage adapté (lampe orientable, éclairage rasant pour les déformations), aides optiques (loupe de grossissement 5 à 10, miroir, boroscope), et surtout méthode et concentration de l'inspecteur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> inspecter une zone de structure. 1) Lire la tâche : zone exacte, niveau d'inspection (générale ou détaillée), défauts recherchés, préparation prescrite. 2) Préparer : accès, nettoyage si demandé, éclairage, loupe, miroir. 3) Balayer la zone selon un ordre systématique (de haut en bas, de l'avant vers l'arrière), en insistant sur les zones sensibles : bords de trous, rayons de raccordement, têtes de fixations, zones de rétention d'eau. 4) Pour chaque indication, la repérer, la mesurer, la photographier si la procédure le prévoit. 5) Comparer aux critères d'acceptation, ou ouvrir une carte de défaut. 6) Signer l'inspection uniquement pour ce qui a réellement été vu.</div>\n<p>Les indices indirects sont précieux : une traînée noire sortant d'une tête de rivet (rivet « fumant ») signale un rivet qui travaille et use son logement ; une écaille de peinture fissurée autour d'une fixation peut révéler une crique sous-jacente ; un gonflement du revêtement signale une corrosion feuilletante.</p>\n<p>Il faut enfin connaître les limites de l'œil. Une crique de fatigue fermée, longue de quelques millimètres, est très difficile à voir, surtout sous la peinture ou au bord d'une tête de fixation. C'est la raison pour laquelle les programmes d'inspection de structure, construits sur la tolérance aux dommages, prescrivent des méthodes plus sensibles là où la crique doit être trouvée tôt : chaque méthode a une <strong>taille minimale de défaut détectable</strong> avec une bonne probabilité, et l'intervalle d'inspection est calculé en fonction de cette taille et de la vitesse de propagation de la crique. Choisir une méthode moins sensible que celle qui est prescrite revient à allonger, sans le savoir, l'intervalle réel entre deux chances de détection.</p>"
      },
      {
       "titre": "Le ressuage et la magnétoscopie",
       "contenu": "<p>Lorsque l'œil ne suffit pas, on utilise des <strong>contrôles non destructifs</strong> (CND, ou NDT en anglais) : ils détectent des défauts sans altérer la pièce.</p>\n<p>Le <strong>ressuage</strong> (PT) détecte les défauts <strong>débouchants</strong> sur tout matériau non poreux. On applique un pénétrant coloré ou fluorescent qui s'infiltre par capillarité dans les fissures ; après un temps d'imprégnation, on élimine l'excès en surface, puis on applique un révélateur, poudre blanche qui « aspire » le pénétrant resté dans le défaut et le fait apparaître sous forme d'une ligne colorée ou lumineuse sous lumière ultraviolette. La surface doit être parfaitement propre et décapée : une peinture ou un dépôt bouche les fissures.</p>\n<p>La <strong>magnétoscopie</strong> (MT) ne s'applique qu'aux matériaux <strong>ferromagnétiques</strong> (aciers non inoxydables austénitiques). La pièce est aimantée ; un défaut débouchant ou très proche de la surface perturbe les lignes de champ, et des particules magnétiques (souvent fluorescentes) s'accumulent à son aplomb. Les défauts orientés parallèlement aux lignes de champ sont mal détectés : on aimante dans deux directions. La pièce doit ensuite être désaimantée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les produits de ressuage et les révélateurs contiennent des solvants inflammables et irritants ; la lumière ultraviolette exige une protection des yeux adaptée. Après contrôle, tous les résidus sont éliminés, car ils peuvent favoriser la corrosion ou contaminer des circuits.</div>"
      },
      {
       "titre": "Courants de Foucault et ultrasons",
       "contenu": "<p>Les <strong>courants de Foucault</strong> (ET) s'appliquent aux matériaux conducteurs de l'électricité. Une sonde parcourue par un courant alternatif induit dans la pièce des courants qui circulent en boucles ; un défaut (crique, corrosion, variation d'épaisseur) modifie ces courants, ce qui se traduit par une variation de l'impédance de la sonde affichée sur l'écran de l'appareil. La méthode est rapide, ne nécessite pas de décaper la peinture et permet de contrôler les bords de trous de fixations avec des sondes tournantes. Elle sert aussi à mesurer la conductivité, pour vérifier l'état métallurgique d'un alliage d'aluminium après une surchauffe.</p>\n<p>Les <strong>ultrasons</strong> (UT) s'appliquent à presque tous les matériaux, métalliques et composites. Un traducteur émet des ondes de haute fréquence (de l'ordre du mégahertz) transmises à la pièce par un couplant (gel) ; les ondes se réfléchissent sur les interfaces et sur les défauts internes. L'appareil affiche les échos en fonction du temps de parcours, donc de la profondeur. On détecte ainsi des criques internes, des délaminages de composites, des décollements de collages, et l'on mesure des épaisseurs résiduelles après corrosion.</p>\n<table><thead><tr><th>Méthode</th><th>Matériaux</th><th>Défauts détectés</th></tr></thead><tbody>\n<tr><td>Visuel (VT)</td><td>Tous</td><td>Défauts de surface visibles</td></tr>\n<tr><td>Ressuage (PT)</td><td>Non poreux</td><td>Débouchants</td></tr>\n<tr><td>Magnétoscopie (MT)</td><td>Ferromagnétiques</td><td>Débouchants et sous-cutanés</td></tr>\n<tr><td>Courants de Foucault (ET)</td><td>Conducteurs</td><td>Surface et proches de la surface, corrosion, conductivité</td></tr>\n<tr><td>Ultrasons (UT)</td><td>Presque tous</td><td>Internes, délaminages, épaisseurs</td></tr>\n<tr><td>Radiographie (RT)</td><td>Tous</td><td>Internes, volumiques, corps étrangers, eau dans les nids d'abeilles</td></tr>\n</tbody></table>"
      },
      {
       "titre": "La radiographie et les autres méthodes",
       "contenu": "<p>La <strong>radiographie</strong> (RT) consiste à traverser la pièce par des rayons X ou gamma ; un défaut ou une variation de densité apparaît sur un film ou un détecteur numérique. Elle permet de voir l'intérieur d'ensembles fermés (présence d'eau dans un panneau en nid d'abeilles, corps étranger, crique sur une pièce inaccessible). Elle présente un risque d'exposition aux rayonnements ionisants : la zone est balisée et évacuée, et les opérations sont réalisées par du personnel spécialement formé, dans le respect de la réglementation de radioprotection.</p>\n<p>D'autres méthodes sont utilisées pour les <strong>composites</strong> : le contrôle par <strong>tapotement</strong> (tap test), où un petit marteau ou une pièce de monnaie révèle par un son mat les zones délaminées ou décollées ; la <strong>thermographie</strong>, qui observe la diffusion de la chaleur dans la pièce avec une caméra infrarouge ; les ultrasons multiéléments, qui produisent des cartographies.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le tap test est l'un des rares contrôles de ce type qu'un technicien peut être autorisé à réaliser sans certification CND, dans les conditions précisées par le manuel de réparation et les procédures de l'organisme. Il ne remplace pas les ultrasons lorsque la documentation les exige.</div>"
      },
      {
       "titre": "Qualification des opérateurs et rapport de contrôle",
       "contenu": "<p>Les contrôles non destructifs exigent une compétence particulière. Les opérateurs sont <strong>qualifiés et certifiés</strong> par méthode selon une norme propre à l'aéronautique (EN 4179, équivalente à la norme américaine NAS 410), à trois niveaux : le niveau 1 réalise des contrôles sous supervision, le niveau 2 règle les appareils, réalise et interprète les contrôles et signe les résultats, le niveau 3 rédige les procédures et dirige l'activité. La certification exige formation, expérience et examen, et elle est renouvelée périodiquement, avec des contrôles d'acuité visuelle.</p>\n<p>Le technicien de bac pro n'est pas opérateur CND, mais il intervient avant et après le contrôle : il prépare la zone (accès, dépose de mastic ou de peinture si la procédure l'exige, nettoyage), repère les zones à contrôler, puis remet en état la zone selon la tâche. Il doit aussi savoir lire le rapport de contrôle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un rapport de contrôle non destructif. 1) Vérifier l'identification : aéronef, zone ou pièce (référence, numéro de série), tâche ou consigne à l'origine du contrôle. 2) Repérer la méthode et la procédure appliquées (référence du manuel CND du constructeur), l'appareil et l'étalon utilisés. 3) Lire le résultat : « aucune indication » ou description des indications (position, dimension, orientation). 4) Repérer la conclusion : acceptable, ou non acceptable selon les critères. 5) Vérifier la signature d'un opérateur certifié du niveau requis. 6) En cas d'indication, la carte de défaut renvoie à l'évaluation par le manuel de réparation ou par le bureau d'études.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un contrôle non destructif ne vaut que par sa procédure : méthode, réglage de l'appareil sur une pièce étalon, zone et sens de balayage sont définis par le constructeur pour chaque cas. Un contrôle réalisé « à peu près » ne permet aucune conclusion.</div>"
      }
     ],
     "points_cles": [
      "L'inspection visuelle détecte la majorité des dommages si elle est méthodique et bien éclairée",
      "Le ressuage détecte les défauts débouchants sur une surface parfaitement propre",
      "La magnétoscopie ne s'applique qu'aux matériaux ferromagnétiques",
      "Les courants de Foucault contrôlent les conducteurs sans décaper et mesurent la conductivité",
      "Les ultrasons révèlent les défauts internes, les délaminages et mesurent les épaisseurs",
      "La radiographie impose des mesures de radioprotection strictes",
      "Les opérateurs CND sont certifiés par méthode et par niveau selon EN 4179",
      "Le technicien prépare, repère et remet en état ; l'opérateur certifié conclut"
     ],
     "lexique": [
      {
       "terme": "CND",
       "def": "Contrôle non destructif : méthode de détection de défauts qui n'altère pas la pièce."
      },
      {
       "terme": "Ressuage",
       "def": "Méthode révélant les défauts débouchants par infiltration d'un pénétrant puis application d'un révélateur."
      },
      {
       "terme": "Magnétoscopie",
       "def": "Méthode détectant les défauts des matériaux ferromagnétiques par accumulation de particules magnétiques."
      },
      {
       "terme": "Courants de Foucault",
       "def": "Courants induits dans un conducteur, dont la perturbation révèle des défauts."
      },
      {
       "terme": "Ultrasons",
       "def": "Ondes mécaniques de haute fréquence dont les échos révèlent les défauts internes."
      },
      {
       "terme": "Couplant",
       "def": "Gel ou liquide assurant la transmission des ultrasons entre le traducteur et la pièce."
      },
      {
       "terme": "Tap test",
       "def": "Contrôle par tapotement révélant les délaminages et décollements par un son mat."
      },
      {
       "terme": "EN 4179",
       "def": "Norme de qualification et de certification du personnel CND en aéronautique."
      },
      {
       "terme": "Indication",
       "def": "Signal produit par un contrôle, à interpréter pour savoir s'il correspond à un défaut."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Option Avionique",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "baer-av-harnais-ewis",
     "titre": "Fabrication et réparation des harnais électriques (EWIS)",
     "niveau": "1re",
     "options": [
      "avionique"
     ],
     "duree": 40,
     "objectifs": [
      "Expliquer la notion d'EWIS et les exigences de sécurité associées au câblage",
      "Choisir un câble, un contact et un outillage de sertissage conformes aux données",
      "Décrire les étapes de fabrication d'un harnais et de raccordement d'un connecteur",
      "Réaliser les reprises de blindage, les épissures et les réparations prévues par le manuel de câblage",
      "Contrôler un harnais : continuité, isolement, traction, cheminement"
     ],
     "sections": [
      {
       "titre": "Le câblage, un système à part entière",
       "contenu": "<p>Un avion de transport compte plusieurs centaines de kilomètres de fils électriques. Longtemps considéré comme un simple accessoire des systèmes, le câblage est aujourd'hui traité comme un système à part entière : l'<strong>EWIS</strong> (Electrical Wiring Interconnection System). Ce terme désigne tout ce qui transporte l'énergie ou les signaux électriques entre deux équipements : fils, câbles, connecteurs, contacts, bornes, épissures, relais de traversée, disjoncteurs, colliers, gaines, supports, étiquettes.</p>\n<p>Plusieurs accidents graves, dont des incendies en vol et une explosion de réservoir, ont mis en cause un câblage dégradé : isolant fissuré par le vieillissement, frottement contre la structure, contamination par des fluides, arc électrique entre fils voisins. Les exigences de certification et d'entretien ont été renforcées en conséquence : règles de conception (séparation des circuits, protection), inspections spécifiques des zones de câblage, formation obligatoire du personnel aux bonnes pratiques EWIS.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une intervention, quelle qu'elle soit, ne doit jamais dégrader le câblage environnant. Un harnais déplacé pour un accès, un collier retiré et non reposé ou des copeaux de perçage tombés dans un faisceau suffisent à créer une panne ou un départ de feu plusieurs mois plus tard.</div>\n<p>Les règles de fabrication et de réparation sont regroupées par chaque constructeur dans un manuel de <strong>pratiques standard de câblage</strong> (chapitre ATA 20 de la documentation, souvent publié sous le nom ESPM chez Airbus ou SWPM chez Boeing). Ce manuel est la référence unique : il précise les matériaux, outillages, méthodes et contrôles autorisés.</p>"
      },
      {
       "titre": "Câbles, contacts et outillages",
       "contenu": "<p>Un <strong>fil</strong> est un conducteur isolé ; un <strong>câble</strong> peut regrouper plusieurs fils sous une même gaine, avec ou sans blindage. Les conducteurs sont en cuivre étamé, argenté ou nickelé, parfois en aluminium pour les fortes sections. Leur section est souvent désignée par la jauge américaine <strong>AWG</strong> : plus le numéro est grand, plus le fil est fin (AWG 22 environ 0,35 mm², AWG 20 environ 0,6 mm², AWG 12 environ 3,3 mm²). Les isolants modernes (polyimide, fluoropolymères, composites de ces matériaux) sont choisis pour leur tenue à la température, aux fluides et au feu.</p>\n<p>Le fil est identifié par un <strong>marquage</strong> imprimé à intervalles réguliers (en général par laser ou jet d'encre, jamais par un procédé qui entaille l'isolant), qui reprend son numéro dans le manuel de câblage.</p>\n<p>Les connexions sont réalisées par <strong>sertissage</strong> : le contact (broche mâle ou douille femelle) est déformé autour du conducteur par une pince à sertir, de manière à former une liaison mécanique et électrique étanche aux gaz. Chaque combinaison de contact et de section de fil exige une pince, un positionneur (ou tourelle) et un réglage précis, indiqués par le manuel.</p>\n<table><thead><tr><th>Élément</th><th>Ce qu'il faut vérifier avant le sertissage</th></tr></thead><tbody>\n<tr><td>Fil</td><td>Référence et section conformes, marquage, longueur</td></tr>\n<tr><td>Dénudage</td><td>Longueur prescrite, aucun brin coupé ou entaillé, isolant net</td></tr>\n<tr><td>Contact</td><td>Référence correspondant au connecteur et à la section</td></tr>\n<tr><td>Pince</td><td>Modèle et positionneur prescrits, réglage, étiquette d'étalonnage valide</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pince à sertir non étalonnée ou utilisée avec un mauvais positionneur produit un sertissage qui passe le contrôle visuel mais se desserre à l'usage, d'où des pannes intermittentes très difficiles à trouver. Le cliquet de la pince ne doit jamais être forcé ni neutralisé.</div>"
      },
      {
       "titre": "Fabriquer un harnais et câbler un connecteur",
       "contenu": "<p>La fabrication d'un harnais neuf (ou d'un tronçon de remplacement) suit le plan ou la liste de câblage, souvent sur une <strong>planche de câblage</strong> à l'échelle 1 qui matérialise le parcours, les dérivations et les longueurs.</p>\n<ol>\n<li>Préparer les fils : coupe à longueur, marquage, dénudage aux longueurs prescrites.</li>\n<li>Sertir les contacts et contrôler chaque sertissage (aspect, position du conducteur visible dans le trou d'inspection, traction si prescrite).</li>\n<li>Insérer chaque contact dans l'alvéole indiquée du connecteur avec l'outil d'insertion, jusqu'au verrouillage audible ou sensible ; vérifier le verrouillage par une légère traction.</li>\n<li>Obturer les alvéoles inutilisées par des <strong>bouchons d'étanchéité</strong> (ou des contacts munis de bouchons selon la règle du manuel), sans quoi l'étanchéité du connecteur n'est pas assurée.</li>\n<li>Former le faisceau, poser les colliers ou ligatures aux intervalles prescrits, monter les gaines de protection et l'arrière de connecteur (presse-étoupe, serre-câble).</li>\n<li>Étiqueter les connecteurs et les dérivations.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> identifier l'alvéole d'un contact. Le manuel de câblage indique par exemple : fil W123-0045-22, de la broche 7 du connecteur 12CA-A vers la broche 15 du connecteur 45VU-B. 1) Repérer physiquement le connecteur par son étiquette. 2) Lire le marquage des alvéoles sur la face d'insertion (côté arrière), et non sur la face d'accouplement où la numérotation apparaît en miroir. 3) Utiliser le plan d'alvéolage du connecteur si le marquage est illisible. 4) Après insertion, contrôler le bon raccordement par un essai de continuité broche à broche avec les adaptateurs de test.</div>"
      },
      {
       "titre": "Blindages, métallisations et protection contre les perturbations",
       "contenu": "<p>Les signaux faibles (capteurs, bus de données, audio) sont protégés des perturbations électromagnétiques par un <strong>blindage</strong> : une tresse métallique entourant les conducteurs, reliée à la masse à une ou aux deux extrémités selon le type de signal. La reprise de blindage se fait par des manchons à souder thermorétractables, des bagues serties ou des arrière-de-connecteurs spécifiques, toujours selon le manuel ; la longueur de la queue de cochon (fil de reprise) est limitée car elle réduit l'efficacité du blindage.</p>\n<p>La <strong>compatibilité électromagnétique</strong> (CEM) d'un avion repose aussi sur la <strong>séparation</strong> des faisceaux : on ne mélange pas, dans un même faisceau, des circuits de puissance et des circuits sensibles, ni les circuits redondants d'un même système critique (ce qui pourrait faire perdre les deux voies à la fois en cas de dommage). Les faisceaux portent souvent une codification indiquant leur catégorie de séparation.</p>\n<p>Les <strong>métallisations</strong> (bondings) assurent la continuité électrique entre les équipements, les éléments de structure et la masse générale. Elles écoulent les courants de défaut, les charges statiques et les effets de foudre. Elles sont réalisées par tresses, liaisons directes de surfaces nues ou fixations spécifiques, avec préparation de surface et protection anticorrosion après montage, et contrôlées au micro-ohmmètre selon les valeurs maximales prescrites.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une structure composite, la continuité électrique n'est pas assurée naturellement comme sur l'aluminium : des réseaux métalliques de retour de courant et de protection foudre sont intégrés. Toute réparation de structure composite comporte donc une restauration de cette protection, à contrôler par mesure.</div>"
      },
      {
       "titre": "Réparer un câblage",
       "contenu": "<p>Les réparations autorisées sont définies par le manuel de pratiques standard et, pour une zone donnée, peuvent être limitées par les données du constructeur (zones de carburant, zones de forte température, câblages de systèmes critiques).</p>\n<table><thead><tr><th>Dommage</th><th>Réparation possible selon le manuel</th></tr></thead><tbody>\n<tr><td>Isolant légèrement frotté, conducteur intact</td><td>Manchon de réparation thermorétractable, ou ruban de réparation lorsqu'il est autorisé</td></tr>\n<tr><td>Conducteur endommagé ou coupé</td><td>Épissure sertie étanche, ou remplacement du fil</td></tr>\n<tr><td>Contact endommagé</td><td>Extraction et remplacement du contact, avec réutilisation ou non du fil selon sa longueur</td></tr>\n<tr><td>Connecteur endommagé</td><td>Remplacement du connecteur ou de ses éléments</td></tr>\n<tr><td>Blindage endommagé</td><td>Reprise de blindage par manchon ou bague selon le cas</td></tr>\n</tbody></table>\n<p>Les <strong>épissures</strong> ont des règles précises : nombre maximal par fil et par mètre, décalage entre épissures de fils voisins dans un faisceau pour éviter une surépaisseur, distance minimale aux connecteurs et aux points de fixation, interdiction dans certaines zones.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une réparation non prévue par le manuel (fil soudé à l'étain et isolé au ruban, par exemple) est interdite. Si le manuel ne couvre pas le cas, une donnée de réparation approuvée doit être demandée au constructeur par l'intermédiaire du bureau technique.</div>"
      },
      {
       "titre": "Contrôler un harnais et l'installer",
       "contenu": "<p>Avant installation, un harnais fabriqué ou réparé est contrôlé :</p>\n<ul>\n<li>visuellement : sertissages, verrouillage des contacts, bouchons d'alvéoles, marquage, état des gaines ;</li>\n<li>électriquement : <strong>continuité</strong> de chaque liaison point à point, absence de court-circuit entre liaisons, et, si la tâche le prévoit, <strong>isolement</strong> sous tension définie ;</li>\n<li>mécaniquement : essais de traction sur échantillons de sertissage lorsque la procédure de l'organisme l'exige.</li>\n</ul>\n<p>L'installation respecte le <strong>cheminement</strong> d'origine : distance minimale aux structures, aux tuyauteries de fluides (le faisceau électrique est placé au-dessus des tuyauteries de fluides inflammables lorsqu'ils se croisent, pour ne pas recevoir de fuite), aux arêtes vives et aux pièces mobiles ; rayons de courbure minimaux ; <strong>boucles de dégagement</strong> près des connecteurs pour permettre le démontage ; colliers à coussinet adaptés au diamètre ; points bas munis de boucles d'égouttement pour que l'eau ne coule pas vers les connecteurs.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser l'inspection de fin d'intervention dans une zone de câblage. 1) Vérifier l'absence de corps étrangers : copeaux, chutes de fils, colliers coupés, outils. 2) Vérifier que tous les colliers et supports sont reposés et que le faisceau ne touche aucune arête ni tuyauterie. 3) Vérifier que les connecteurs sont accouplés, verrouillés et freinés si prescrit. 4) Contrôler l'absence de contamination par des fluides. 5) Mettre sous tension et réaliser l'essai du système concerné prévu par la tâche.</div>"
      }
     ],
     "points_cles": [
      "L'EWIS comprend tout le câblage et ses accessoires, considérés comme un système",
      "Le manuel de pratiques standard de câblage est la seule référence pour fabriquer et réparer",
      "Plus le numéro AWG est grand, plus le fil est fin",
      "Chaque sertissage exige le contact, la pince et le positionneur prescrits, étalonnés",
      "Les alvéoles inutilisées sont obturées pour garantir l'étanchéité",
      "Blindages, séparation des faisceaux et métallisations assurent la compatibilité électromagnétique",
      "Les épissures obéissent à des règles de nombre, de décalage et de zones interdites",
      "Cheminement, rayons de courbure, boucles et colliers se respectent à l'installation"
     ],
     "lexique": [
      {
       "terme": "EWIS",
       "def": "Système d'interconnexion par câblage électrique : fils, connecteurs, supports et accessoires d'un aéronef."
      },
      {
       "terme": "AWG",
       "def": "Jauge américaine des fils ; un numéro élevé correspond à une faible section."
      },
      {
       "terme": "Sertissage",
       "def": "Liaison d'un contact sur un conducteur par déformation contrôlée à l'aide d'une pince."
      },
      {
       "terme": "Positionneur",
       "def": "Accessoire de pince à sertir qui place le contact à la bonne position et fixe le réglage."
      },
      {
       "terme": "Bouchon d'alvéole",
       "def": "Obturateur placé dans une alvéole de connecteur inutilisée pour garantir l'étanchéité."
      },
      {
       "terme": "Blindage",
       "def": "Tresse ou écran métallique qui protège des conducteurs des perturbations électromagnétiques."
      },
      {
       "terme": "Épissure",
       "def": "Raccordement de deux conducteurs par un manchon serti, isolé et étanche."
      },
      {
       "terme": "Boucle d'égouttement",
       "def": "Point bas donné à un faisceau pour que l'eau s'écoule avant d'atteindre un connecteur."
      },
      {
       "terme": "CEM",
       "def": "Compatibilité électromagnétique : aptitude des équipements à fonctionner sans se perturber mutuellement."
      }
     ]
    },
    {
     "id": "baer-av-bus-logiciels",
     "titre": "Bus de données, architectures avioniques et logiciels embarqués",
     "niveau": "Tle",
     "options": [
      "avionique"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire la structure d'un mot ARINC 429 et les caractéristiques de ce bus",
      "Comparer les principaux bus et réseaux embarqués : ARINC 429, ARINC 629, MIL-STD-1553, CAN, AFDX",
      "Expliquer le principe de l'avionique modulaire intégrée",
      "Décrire la procédure de chargement et de vérification d'un logiciel embarqué",
      "Appliquer les règles de manipulation des équipements et cartes sensibles"
     ],
     "sections": [
      {
       "titre": "Pourquoi des bus de données",
       "contenu": "<p>Dans les premiers avions, chaque information circulait sur un ou plusieurs fils dédiés : une tension pour une température, un signal de synchro pour un cap. Avec la multiplication des équipements, ce câblage point à point devenait lourd et complexe. Les <strong>bus de données</strong> numériques permettent de transmettre de nombreuses informations sur une même paire de fils, sous forme de mots binaires codés.</p>\n<p>On distingue les bus selon leur organisation :</p>\n<ul>\n<li><strong>unidirectionnel</strong> : un seul émetteur, plusieurs récepteurs (jusqu'à une vingtaine) ;</li>\n<li><strong>bidirectionnel multiplexé</strong> : plusieurs équipements émettent à tour de rôle sur le même support, selon une règle d'accès ;</li>\n<li><strong>réseau commuté</strong> : les équipements sont reliés à des commutateurs qui aiguillent les messages, comme dans un réseau informatique.</li>\n</ul>\n<p>Une transmission numérique est caractérisée par son <strong>débit</strong> (en bits par seconde), son mode de codage, sa topologie et ses mécanismes de contrôle d'erreur (bit de parité, codes de contrôle).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un bus de données, une panne peut venir de l'émetteur, du récepteur ou du support (câble, connecteurs, terminaisons). Le diagnostic consiste à déterminer si les données sont émises, si elles circulent correctement et si elles sont bien reçues.</div>"
      },
      {
       "titre": "Le bus ARINC 429",
       "contenu": "<p>L'<strong>ARINC 429</strong> est le bus le plus répandu dans l'aviation civile. C'est un bus <strong>unidirectionnel</strong> : un émetteur, jusqu'à 20 récepteurs. Il utilise une paire torsadée blindée et un codage bipolaire à retour à zéro (trois niveaux de tension : haut, nul, bas). Deux débits sont normalisés : <strong>12,5 kbit/s</strong> (basse vitesse) et <strong>100 kbit/s</strong> (haute vitesse).</p>\n<p>Chaque information est transmise dans un <strong>mot de 32 bits</strong> :</p>\n<table><thead><tr><th>Bits</th><th>Champ</th><th>Rôle</th></tr></thead><tbody>\n<tr><td>1 à 8</td><td>Label</td><td>Identifie la nature de la donnée (par exemple une altitude) ; exprimé en octal</td></tr>\n<tr><td>9 et 10</td><td>SDI</td><td>Identifiant source ou destination, quand plusieurs équipements identiques existent</td></tr>\n<tr><td>11 à 28 ou 29</td><td>Données</td><td>Valeur codée en binaire (BNR), en BCD ou sous forme d'états discrets</td></tr>\n<tr><td>30 et 31</td><td>SSM</td><td>Matrice de signe et d'état : donnée valide, test fonctionnel, pas de donnée calculée, panne</td></tr>\n<tr><td>32</td><td>Parité</td><td>Parité impaire, permettant de détecter une erreur de transmission</td></tr>\n</tbody></table>\n<p>Le champ <strong>SSM</strong> est essentiel pour la maintenance : un récepteur qui reçoit une donnée dont le SSM indique un état de panne ne l'utilise pas, et l'affichage correspondant est remplacé par un drapeau d'alarme, même si le bus fonctionne parfaitement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une donnée ARINC 429 avec un analyseur de bus. 1) Brancher l'analyseur en parallèle sur la ligne à l'aide de l'adaptateur prévu, sans couper la liaison. 2) Choisir la vitesse (basse ou haute) indiquée par le manuel pour ce bus. 3) Filtrer le label recherché (par exemple le label de l'altitude barométrique, en octal). 4) Lire le SSM : si la donnée est déclarée en panne ou non calculée, le problème est en amont, dans l'émetteur ou ses entrées. 5) Si le SSM est normal, comparer la valeur décodée à la valeur attendue. 6) Si aucun mot n'est reçu, contrôler l'émetteur et le support (continuité, court-circuit, blindage).</div>"
      },
      {
       "titre": "Autres bus et réseaux embarqués",
       "contenu": "<p>Plusieurs autres technologies coexistent selon les générations d'avions et les usages.</p>\n<table><thead><tr><th>Bus ou réseau</th><th>Principe</th><th>Débit indicatif</th><th>Usage</th></tr></thead><tbody>\n<tr><td>ARINC 629</td><td>Bus bidirectionnel multiplexé, accès par fenêtres temporelles</td><td>2 Mbit/s</td><td>Notamment Boeing 777</td></tr>\n<tr><td>MIL-STD-1553</td><td>Bus bidirectionnel avec un contrôleur qui commande les échanges</td><td>1 Mbit/s</td><td>Aéronefs militaires, hélicoptères</td></tr>\n<tr><td>CAN (et ARINC 825)</td><td>Bus multimaître avec priorité des messages</td><td>Jusqu'à 1 Mbit/s</td><td>Systèmes cabine, capteurs, réseaux secondaires</td></tr>\n<tr><td>AFDX (ARINC 664 Part 7)</td><td>Réseau Ethernet commuté déterministe et redondant</td><td>100 Mbit/s</td><td>A380, A350, Boeing 787 (sous d'autres noms commerciaux)</td></tr>\n</tbody></table>\n<p>L'<strong>AFDX</strong> (Avionics Full-Duplex Switched Ethernet) adapte la technologie Ethernet aux exigences aéronautiques : chaque flux de données suit un <strong>lien virtuel</strong> dont le débit maximal est garanti, ce qui rend les délais de transmission prévisibles (déterminisme), et tout le réseau est doublé (deux réseaux A et B indépendants), le récepteur gardant le premier message valide reçu.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un réseau AFDX, les commutateurs sont des équipements remplaçables à part entière, avec leurs propres messages de panne. Les liaisons utilisent des câbles et connecteurs spécifiques (quadrax ou paires à impédance contrôlée) dont la réparation suit des règles plus strictes que le câblage classique.</div>"
      },
      {
       "titre": "L'avionique modulaire intégrée",
       "contenu": "<p>Dans les architectures classiques, dites <strong>fédérées</strong>, chaque fonction dispose de son propre calculateur : un calculateur pour les commandes de vol, un pour le carburant, un pour le freinage… L'<strong>avionique modulaire intégrée</strong> (IMA) regroupe plusieurs fonctions logicielles dans des modules de calcul partagés, reliés par un réseau. Chaque fonction s'exécute dans une partition protégée, qui garantit qu'une défaillance logicielle d'une fonction ne perturbe pas les autres.</p>\n<p>Cette architecture réduit la masse, le nombre d'équipements et facilite les évolutions par simple mise à jour de logiciel. Elle modifie aussi le travail de maintenance : un même module matériel héberge plusieurs fonctions, et l'identification d'un module remplacé passe par la vérification de sa configuration matérielle et logicielle.</p>\n<p>Les équipements sont conçus comme des <strong>LRU</strong> (Line Replaceable Units), remplaçables rapidement en escale, ou des <strong>LRM</strong> (Line Replaceable Modules), modules enfichables dans une baie commune. Leur réparation interne est réalisée en atelier spécialisé, avec le manuel de composant (CMM) et des bancs de test automatiques.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> deux équipements de même référence matérielle peuvent contenir des logiciels différents, et tous ne sont pas autorisés sur tous les avions. La configuration autorisée dépend des modifications appliquées à l'avion : il faut vérifier la combinaison matériel-logiciel avant la pose, au moyen des documents de configuration.</div>"
      },
      {
       "titre": "Charger et vérifier un logiciel embarqué",
       "contenu": "<p>Les logiciels embarqués sont des éléments de la définition approuvée de l'avion. Chacun est identifié par une <strong>référence de pièce logicielle</strong> (part number) et développé selon des exigences de sûreté très strictes (DO-178C pour l'industrie). Leur installation à bord est une tâche de maintenance à part entière.</p>\n<p>Le chargement se fait selon le cas par un chargeur de données portable branché sur une prise du poste de pilotage ou de la soute électronique, par un chargeur intégré à l'avion, ou par réseau à partir d'un serveur de maintenance de bord. Les logiciels sont livrés sur un support ou sous forme de fichiers sécurisés, accompagnés de leur document de libération.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser un chargement de logiciel. 1) Vérifier que le logiciel à charger est autorisé pour cet avion et cette configuration (modification, bulletin service ou document de configuration de l'exploitant) et que sa référence correspond. 2) Vérifier l'intégrité du support ou des fichiers (contrôle d'intégrité prévu). 3) Mettre l'avion dans la configuration prescrite (alimentation électrique stable, systèmes concernés désactivés). 4) Lancer le chargement selon la tâche, sans l'interrompre. 5) Après chargement, lire la référence logicielle effectivement installée sur l'écran de maintenance et la comparer à la référence attendue. 6) Réaliser le test du système prévu. 7) Enregistrer l'ancienne et la nouvelle référence pour la mise à jour de la configuration de l'avion.</div>\n<p>Les bases de données de navigation sont aussi chargées périodiquement, selon le cycle mondial de mise à jour des données aéronautiques de 28 jours (cycle AIRAC). Une base périmée ne doit pas être utilisée en exploitation, sauf procédures particulières de l'exploitant.</p>"
      },
      {
       "titre": "Manipuler les équipements et cartes sensibles",
       "contenu": "<p>Les équipements avioniques et surtout leurs cartes électroniques sont sensibles aux <strong>décharges électrostatiques</strong>. Une décharge peut détruire immédiatement un composant ou, plus sournoisement, le fragiliser ; la panne apparaît alors plus tard, en service. Les équipements sensibles portent un marquage spécifique (main barrée dans un triangle).</p>\n<ul>\n<li>Avant de toucher un équipement sensible, l'opérateur se relie à la masse par un <strong>bracelet antistatique</strong> connecté à un point de masse prévu.</li>\n<li>Les connecteurs d'un équipement déposé sont protégés par des capuchons conducteurs ou antistatiques.</li>\n<li>Les cartes et équipements sont transportés dans des sacs et emballages antistatiques, jamais dans un plastique ordinaire.</li>\n<li>En atelier, le poste de travail est une <strong>zone protégée</strong> (EPA) : tapis dissipatif relié à la terre, sièges et vêtements adaptés, contrôle régulier des bracelets.</li>\n</ul>\n<p>Les règles de ces zones s'appuient sur des normes internationales de maîtrise des décharges électrostatiques et sur les procédures de l'organisme.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un échange d'équipement en baie électronique, on ouvre les disjoncteurs prévus, on attend le délai de décharge si la tâche le demande, on se relie à la masse, on dépose en manœuvrant les verrous de face avant sans forcer, puis on protège immédiatement les connecteurs de l'équipement déposé, qui part à l'atelier avec son étiquette et sa description de panne.</div>"
      }
     ],
     "points_cles": [
      "Un bus numérique transmet de nombreuses données sur un même support sous forme de mots binaires",
      "ARINC 429 : unidirectionnel, 12,5 ou 100 kbit/s, mots de 32 bits avec label en octal",
      "Le SSM indique la validité de la donnée transmise",
      "AFDX : Ethernet commuté déterministe et doublé, à 100 Mbit/s",
      "L'IMA regroupe plusieurs fonctions dans des modules partagés et partitionnés",
      "La combinaison matériel-logiciel d'un équipement doit être autorisée pour l'avion",
      "Après un chargement, on lit et on enregistre la référence logicielle installée",
      "Bracelet, capuchons et emballages antistatiques protègent les équipements sensibles"
     ],
     "lexique": [
      {
       "terme": "Bus de données",
       "def": "Support de transmission numérique partagé par plusieurs équipements."
      },
      {
       "terme": "ARINC 429",
       "def": "Bus unidirectionnel de l'aviation civile transmettant des mots de 32 bits."
      },
      {
       "terme": "Label",
       "def": "Champ de 8 bits, exprimé en octal, identifiant la donnée d'un mot ARINC 429."
      },
      {
       "terme": "SSM",
       "def": "Champ d'état d'un mot ARINC 429 indiquant la validité de la donnée."
      },
      {
       "terme": "AFDX",
       "def": "Réseau Ethernet commuté, déterministe et redondant, défini par ARINC 664 Part 7."
      },
      {
       "terme": "IMA",
       "def": "Avionique modulaire intégrée : plusieurs fonctions logicielles hébergées sur des modules de calcul partagés."
      },
      {
       "terme": "LRU",
       "def": "Équipement remplaçable en ligne, déposable rapidement en escale."
      },
      {
       "terme": "Chargeur de données",
       "def": "Équipement permettant d'installer un logiciel ou une base de données dans un calculateur de bord."
      },
      {
       "terme": "Cycle AIRAC",
       "def": "Cycle mondial de 28 jours de mise à jour des données aéronautiques de navigation."
      },
      {
       "terme": "EPA",
       "def": "Zone protégée contre les décharges électrostatiques où l'on manipule les équipements sensibles."
      }
     ]
    },
    {
     "id": "baer-av-instruments-anemobaro",
     "titre": "Instruments de vol, anémobarométrie et centrales de référence",
     "niveau": "1re-Tle",
     "options": [
      "avionique"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire le circuit anémobarométrique et les grandeurs qu'il fournit",
      "Distinguer vitesse indiquée, vitesse vraie, Mach, altitude pression et altitude calée",
      "Expliquer le rôle des centrales anémométriques et inertielles",
      "Décrire la conduite d'un essai d'étanchéité et de précision du circuit Pitot-statique",
      "Identifier les risques et exigences spécifiques (RVSM, sondes chauffées, protections)"
     ],
     "sections": [
      {
       "titre": "Le circuit anémobarométrique",
       "contenu": "<p>Les instruments <strong>anémobarométriques</strong> exploitent les pressions de l'air autour de l'avion pour élaborer la vitesse, l'altitude et la vitesse verticale. Le circuit comprend :</p>\n<ul>\n<li>les <strong>sondes Pitot</strong>, qui captent la pression totale, généralement chauffées électriquement pour éviter le givrage, et munies de trous de purge ;</li>\n<li>les <strong>prises statiques</strong>, orifices affleurants placés en des points du fuselage où la pression locale est proche de la pression ambiante, souvent doublées de part et d'autre du fuselage pour compenser les effets de dérapage ;</li>\n<li>les canalisations, avec des points bas munis de <strong>purges</strong> d'eau ;</li>\n<li>les instruments ou les calculateurs qui reçoivent ces pressions ;</li>\n<li>la <strong>sonde de température totale</strong> (TAT) et les sondes d'<strong>incidence</strong>, qui complètent les données.</li>\n</ul>\n<p>Sur un avion de transport, il existe plusieurs circuits indépendants (commandant de bord, copilote, secours), pour qu'une obstruction ou une fuite n'affecte qu'une seule source.</p>\n<table><thead><tr><th>Grandeur</th><th>Pressions utilisées</th><th>Instrument classique</th></tr></thead><tbody>\n<tr><td>Vitesse indiquée</td><td>Totale et statique (différence = pression dynamique)</td><td>Anémomètre</td></tr>\n<tr><td>Altitude</td><td>Statique</td><td>Altimètre</td></tr>\n<tr><td>Vitesse verticale</td><td>Variation de la statique</td><td>Variomètre</td></tr>\n<tr><td>Nombre de Mach</td><td>Totale et statique</td><td>Machmètre</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une prise statique obstruée (ruban adhésif de protection oublié après un lavage ou une peinture) fausse l'altitude, la vitesse et la vitesse verticale à la fois. Des accidents ont été causés exactement par cet oubli. Toute protection posée est enregistrée et retirée avant la remise en service.</div>"
      },
      {
       "titre": "Vitesses et altitudes",
       "contenu": "<p>La <strong>vitesse indiquée</strong> (IAS) est déduite de la pression dynamique en supposant une masse volumique au niveau de la mer. Elle est directement liée à la portance, c'est pourquoi les vitesses de décrochage et de manœuvre sont exprimées en vitesse indiquée. Corrigée des erreurs d'installation de l'antenne, elle devient la <strong>vitesse conventionnelle</strong> (CAS). La <strong>vitesse vraie</strong> (TAS) est la vitesse réelle de l'avion par rapport à l'air : en altitude, l'air étant moins dense, elle est nettement supérieure à la vitesse indiquée.</p>\n<p>L'altimètre mesure une pression statique et l'affiche sous forme d'altitude, selon les lois de l'atmosphère standard. Le pilote règle une <strong>pression de référence</strong> (calage) :</p>\n<table><thead><tr><th>Calage</th><th>Valeur réglée</th><th>Ce qu'indique l'altimètre</th></tr></thead><tbody>\n<tr><td>QNH</td><td>Pression ramenée au niveau de la mer selon l'atmosphère standard</td><td>Altitude au-dessus du niveau de la mer ; au sol, l'altitude du terrain</td></tr>\n<tr><td>QFE</td><td>Pression au niveau du terrain</td><td>Hauteur au-dessus du terrain ; zéro au sol</td></tr>\n<tr><td>Standard</td><td>1 013,25 hPa</td><td>Niveau de vol, utilisé au-dessus de l'altitude de transition</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer une erreur d'altitude. Près du niveau de la mer, une variation de pression de 1 hPa correspond à environ 8,5 m (environ 28 ft). Si un altimètre calé à 1 013 hPa alors que le QNH est 1 023 hPa est utilisé au sol : 1) écart de calage 10 hPa ; 2) erreur ≈ 10 × 8,5 = 85 m environ ; 3) le calage étant plus faible que la pression réelle, l'altimètre indique une altitude inférieure à la réalité d'environ 85 m. Cette règle sert à vérifier la cohérence d'un altimètre lors d'un contrôle au sol.</div>"
      },
      {
       "titre": "Centrales anémométriques et inertielles",
       "contenu": "<p>Sur les avions modernes, les pressions sont converties en données numériques par une <strong>centrale anémométrique</strong> (ADC : Air Data Computer), ou par des modules de conversion placés près des sondes (ADM) qui transmettent des données numériques. La centrale calcule l'altitude, les vitesses, le Mach, la température statique et applique les corrections d'installation.</p>\n<p>L'attitude et le cap sont fournis par des <strong>références inertielles</strong>. Les anciens instruments utilisaient des gyroscopes mécaniques (horizon artificiel, conservateur de cap). Les centrales actuelles utilisent des <strong>gyrolasers</strong> ou des gyroscopes à fibre optique et des accéléromètres fixés à la structure (systèmes « strapdown ») : le calculateur intègre les rotations et les accélérations mesurées pour connaître en permanence l'attitude, le cap, la vitesse et la position. Sur de nombreux avions, centrales anémométrique et inertielle sont réunies dans un même équipement, l'<strong>ADIRU</strong>.</p>\n<p>Une centrale inertielle doit être <strong>alignée</strong> au sol avant le vol, avion immobile : elle détermine la verticale et le nord à partir de la gravité et de la rotation de la Terre, ce qui prend plusieurs minutes. Sur les petits avions et hélicoptères, on trouve des centrales d'attitude et de cap à composants MEMS (AHRS).</p>\n<p>En cas de perte des écrans principaux, l'équipage dispose d'<strong>instruments de secours</strong> indépendants : un instrument intégré de secours (vitesse, altitude, attitude sur un petit écran autonome, alimenté par une source essentielle ou une batterie dédiée) et un <strong>compas magnétique</strong>. Ce dernier est sensible aux masses métalliques et aux champs électriques voisins : après une modification d'équipements dans le poste de pilotage, ou périodiquement selon le programme, on réalise une <strong>compensation du compas</strong> (régulation) sur une aire dédiée, et l'on établit une carte de déviation affichée près de l'instrument.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> après le remplacement d'une centrale inertielle, la tâche impose souvent de vérifier l'orientation et la fixation du support (repères, cales), car une erreur de montage d'un degré fausse l'attitude affichée. Bouger l'avion (remorquage, chargement important) pendant l'alignement interrompt celui-ci.</div>"
      },
      {
       "titre": "Essai du circuit Pitot-statique",
       "contenu": "<p>Après toute intervention sur le circuit (dépose d'un instrument, d'une sonde, d'une canalisation) et lors des contrôles périodiques, on réalise un <strong>essai d'étanchéité</strong> et, selon le cas, un essai de précision. On utilise un <strong>banc de test anémobarométrique</strong> (testeur Pitot-statique) relié aux sondes par des adaptateurs étanches.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduire un essai d'étanchéité statique. 1) Préparer : identifier les prises et sondes du circuit à tester, purger l'eau, poser les adaptateurs prescrits ; obturer les prises non testées si la tâche le demande. 2) Régler le testeur et appliquer progressivement une dépression équivalente à l'altitude prescrite, en respectant les vitesses de variation maximales pour ne pas endommager les instruments. 3) Isoler le circuit et relever la perte d'altitude sur la durée prescrite (par exemple une minute). 4) Comparer à la tolérance. 5) Revenir lentement à la pression ambiante, en veillant à ne jamais appliquer au circuit Pitot une pression inférieure à celle du circuit statique, ce qui ferait indiquer une vitesse négative et peut endommager l'anémomètre. 6) Déposer les adaptateurs, vérifier qu'aucun obturateur ne reste en place, et enregistrer les résultats.</div>\n<p>Si une fuite est constatée, on la localise en isolant des tronçons du circuit et en contrôlant les raccords, souvent avec un produit détecteur de fuites compatible.</p>\n<p>Les essais de précision comparent les indications des instruments ou calculateurs aux valeurs appliquées par le banc, à plusieurs points de la plage, avec des tolérances données par le manuel.</p>"
      },
      {
       "titre": "RVSM, chauffage des sondes et protections",
       "contenu": "<p>Dans l'espace aérien à <strong>minimum de séparation verticale réduit</strong> (RVSM), entre les niveaux de vol 290 et 410, les avions ne sont séparés verticalement que de 1 000 ft. Cela exige des systèmes altimétriques très précis. Les avions autorisés à voler en RVSM font l'objet d'exigences de navigabilité et d'entretien particulières : zones critiques autour des prises statiques où les dommages, les réparations et même l'état de surface sont strictement limités, essais de précision renforcés, surveillance de la performance altimétrique.</p>\n<p>Les sondes (Pitot, statiques chauffées sur certains avions, sondes de température et d'incidence) sont <strong>réchauffées électriquement</strong> pour éviter le givrage. Au sol, ce chauffage peut porter les sondes à des températures provoquant des brûlures graves ; il est normalement réduit ou inhibé au sol, mais certains essais l'activent.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne souffle jamais dans une sonde Pitot ni dans une prise statique pour la déboucher : la surpression détruirait les instruments ou les capteurs. Le nettoyage des sondes et des canalisations se fait uniquement selon la tâche, avec les moyens prescrits, et les circuits sont débranchés des équipements lorsque la tâche l'exige.</div>\n<p>Les <strong>housses de protection</strong> posées sur les sondes au stationnement portent une flamme rouge « remove before flight » bien visible. Leur pose et leur retrait sont suivis, et l'inspection extérieure avant vol vérifie leur absence.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un avion RVSM, une simple réparation de revêtement, un rivet changé ou une retouche de peinture près d'une prise statique peut rendre l'avion inapte à ce type d'espace aérien. On consulte toujours les zones critiques définies par le constructeur avant d'intervenir dans cette région.</div>"
      }
     ],
     "points_cles": [
      "Le circuit anémobarométrique comprend sondes Pitot, prises statiques, purges, canalisations et calculateurs",
      "Une prise statique obstruée fausse altitude, vitesse et vitesse verticale",
      "La vitesse vraie est supérieure à la vitesse indiquée en altitude",
      "QNH, QFE et calage standard 1 013,25 hPa donnent des indications différentes",
      "Près du sol, 1 hPa correspond à environ 8,5 m",
      "L'ADIRU réunit centrale anémométrique et centrale inertielle ; l'alignement se fait avion immobile",
      "Lors d'un essai Pitot-statique, on respecte les vitesses de variation et l'ordre des pressions",
      "Les zones critiques RVSM autour des prises statiques limitent dommages et réparations"
     ],
     "lexique": [
      {
       "terme": "Anémobarométrique",
       "def": "Qui exploite les pressions de l'air pour élaborer vitesse, altitude et vitesse verticale."
      },
      {
       "terme": "Prise statique",
       "def": "Orifice affleurant du fuselage mesurant la pression statique de l'air."
      },
      {
       "terme": "Vitesse indiquée",
       "def": "Vitesse déduite de la pression dynamique avec la masse volumique au niveau de la mer."
      },
      {
       "terme": "Vitesse vraie",
       "def": "Vitesse réelle de l'avion par rapport à la masse d'air."
      },
      {
       "terme": "QNH",
       "def": "Calage altimétrique donnant l'altitude au-dessus du niveau de la mer."
      },
      {
       "terme": "ADC",
       "def": "Centrale anémométrique : calculateur qui élabore les données de vitesse et d'altitude."
      },
      {
       "terme": "ADIRU",
       "def": "Équipement réunissant les références anémométriques et inertielles."
      },
      {
       "terme": "Gyrolaser",
       "def": "Capteur de rotation sans pièce mobile exploitant deux faisceaux laser tournant en sens opposés."
      },
      {
       "terme": "Alignement",
       "def": "Phase d'initialisation d'une centrale inertielle au sol, avion immobile."
      },
      {
       "terme": "RVSM",
       "def": "Espace aérien à séparation verticale réduite à 1 000 ft entre les niveaux 290 et 410."
      }
     ]
    },
    {
     "id": "baer-av-radiocom-radionav",
     "titre": "Radiocommunication, radionavigation et surveillance",
     "niveau": "Tle",
     "options": [
      "avionique"
     ],
     "duree": 40,
     "objectifs": [
      "Expliquer les notions de fréquence, longueur d'onde, modulation et propagation",
      "Identifier les systèmes de communication de bord et leurs bandes de fréquences",
      "Décrire le principe des moyens de radionavigation : VOR, DME, ILS, GNSS, radioaltimètre",
      "Expliquer le rôle du transpondeur, du TCAS et de la balise de détresse",
      "Appliquer les précautions de maintenance liées aux antennes et aux émissions"
     ],
     "sections": [
      {
       "titre": "Ondes radio : fréquence, longueur d'onde et propagation",
       "contenu": "<p>Une onde radio est une onde électromagnétique qui se propage à la vitesse de la lumière, environ 300 000 km/s. Sa <strong>fréquence</strong> f (en hertz) et sa <strong>longueur d'onde</strong> λ (en mètres) sont liées par la relation λ = c / f. Une onde de 120 MHz a ainsi une longueur d'onde de 2,5 m. La taille des antennes est liée à la longueur d'onde : une antenne quart d'onde pour 120 MHz mesure environ 60 cm.</p>\n<table><thead><tr><th>Bande</th><th>Fréquences</th><th>Propagation</th><th>Exemples à bord</th></tr></thead><tbody>\n<tr><td>LF / MF</td><td>30 kHz à 3 MHz</td><td>Onde de sol, longue portée</td><td>ADF (radiocompas)</td></tr>\n<tr><td>HF</td><td>3 à 30 MHz</td><td>Réflexion sur l'ionosphère, très longue portée</td><td>Radio HF des vols océaniques</td></tr>\n<tr><td>VHF</td><td>30 à 300 MHz</td><td>Portée optique (ligne de vue)</td><td>Radio VHF, VOR, radiophare d'alignement ILS</td></tr>\n<tr><td>UHF</td><td>300 MHz à 3 GHz</td><td>Portée optique</td><td>Pente ILS, DME, transpondeur, GNSS</td></tr>\n<tr><td>SHF</td><td>3 à 30 GHz</td><td>Portée optique, directivité</td><td>Radioaltimètre, radar météo, satellites</td></tr>\n</tbody></table>\n<p>La portée des ondes en VHF et au-delà est limitée par l'horizon radio : elle augmente avec l'altitude de l'avion. Une information est transportée en <strong>modulant</strong> l'onde porteuse : en amplitude (AM, utilisée en radiotéléphonie VHF aéronautique), en fréquence (FM), en phase, ou par impulsions.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque système radio a sa bande de fréquences et ses antennes propres. Lire l'emplacement des antennes sur l'avion (dessus pour les systèmes qui regardent le ciel et les satellites, dessous pour ceux qui regardent le sol) aide à comprendre la fonction de chaque système.</div>"
      },
      {
       "titre": "Les communications",
       "contenu": "<p>L'avion dispose de plusieurs moyens de communication :</p>\n<ul>\n<li>la <strong>radio VHF</strong> (118 à 136,975 MHz), en modulation d'amplitude, pour les échanges avec le contrôle aérien et la transmission de données (liaison de données ACARS ou VDL) ; l'espacement des canaux est de 25 kHz ou, en Europe, de 8,33 kHz pour augmenter le nombre de fréquences disponibles ;</li>\n<li>la <strong>radio HF</strong>, pour les communications à très longue distance au-dessus des océans et des régions sans couverture VHF ;</li>\n<li>les <strong>communications par satellite</strong> (SATCOM), pour la voix et les données ;</li>\n<li>l'<strong>interphone</strong> et le système audio, qui relient les membres d'équipage, le personnel cabine et le personnel au sol, et le système d'annonces aux passagers ;</li>\n<li>l'<strong>enregistreur phonique</strong> du poste de pilotage (CVR), qui enregistre les conversations et les communications.</li>\n</ul>\n<p>Le pilote sélectionne les fréquences et les émetteurs par des boîtiers de commande (RMP chez Airbus) ; la chaîne audio répartit les signaux vers les casques et micros.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une antenne HF ou un coupleur d'antenne délivre en émission des tensions élevées capables de brûler gravement. On ne touche jamais une antenne pendant un essai d'émission, et la zone autour de l'antenne est surveillée. Les essais d'émission au sol se font sur des fréquences et avec des procédures qui ne perturbent pas les communications réelles.</div>"
      },
      {
       "titre": "La radionavigation classique",
       "contenu": "<p>Les moyens de radionavigation au sol permettent à l'avion de connaître sa position par rapport à des stations.</p>\n<table><thead><tr><th>Système</th><th>Fréquences</th><th>Information fournie</th></tr></thead><tbody>\n<tr><td>VOR</td><td>108 à 117,95 MHz</td><td>Relèvement magnétique de l'avion par rapport à la station (radiale)</td></tr>\n<tr><td>DME</td><td>962 à 1 213 MHz</td><td>Distance oblique entre l'avion et la station, par mesure du temps de réponse</td></tr>\n<tr><td>ILS radiophare d'alignement (localizer)</td><td>108,10 à 111,95 MHz</td><td>Écart latéral par rapport à l'axe de piste</td></tr>\n<tr><td>ILS radiophare de descente (glide)</td><td>329 à 335 MHz environ, associé au localizer</td><td>Écart vertical par rapport au plan de descente</td></tr>\n<tr><td>ADF</td><td>Environ 190 à 1 750 kHz</td><td>Direction d'une balise non directionnelle (NDB)</td></tr>\n</tbody></table>\n<p>L'<strong>ILS</strong> est le système d'atterrissage aux instruments le plus répandu : l'équipage ou le pilote automatique suit l'axe et le plan de descente jusqu'à une hauteur de décision, voire jusqu'au toucher pour les catégories d'approche les plus exigeantes. Les avions certifiés pour ces approches de précision sont soumis à des exigences d'entretien renforcées, et la panne d'un équipement peut dégrader la catégorie d'approche autorisée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une distance DME. Le DME de bord émet une impulsion d'interrogation ; la station répond après un retard fixe de 50 µs. Si le temps total mesuré est de 670 µs : 1) retirer le retard de la station : 670 - 50 = 620 µs ; 2) diviser par deux (aller-retour) : 310 µs ; 3) multiplier par la vitesse de la lumière : 310 × 10<sup>-6</sup> × 3 × 10<sup>8</sup> = 93 000 m ; 4) convertir en milles nautiques : 93 / 1,852 ≈ 50 NM. C'est une distance oblique : à la verticale de la station à 6 000 m, le DME indique environ 3,2 NM.</div>"
      },
      {
       "titre": "GNSS, radioaltimètre et radar météo",
       "contenu": "<p>Le <strong>GNSS</strong> (système mondial de navigation par satellites : GPS américain, Galileo européen et autres constellations) calcule la position en mesurant le temps de propagation des signaux d'au moins quatre satellites. Pour l'aviation, sa fiabilité est surveillée par des fonctions de contrôle d'intégrité (RAIM) ou par des systèmes d'augmentation (EGNOS en Europe), qui permettent des approches guidées verticalement sans ILS. La position GNSS est combinée à la référence inertielle et aux moyens radio par le système de gestion de vol (FMS).</p>\n<p>Le <strong>radioaltimètre</strong> mesure la hauteur réelle de l'avion au-dessus du sol en émettant vers le bas une onde dans la bande 4,2 à 4,4 GHz et en analysant l'écho. Il sert en approche et à l'atterrissage automatique, ainsi qu'à de nombreuses logiques de systèmes et d'alarmes (avertisseur de proximité du sol). Ses antennes d'émission et de réception sont placées sous le fuselage, et les longueurs de câbles font partie du réglage du système.</p>\n<p>Le <strong>radar météo</strong>, placé dans le nez de l'avion sous le radôme, détecte les précipitations et les zones de turbulence. Il émet une énergie importante en hyperfréquence.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un radar météo en émission au sol expose les personnes situées devant l'avion à un rayonnement dangereux, notamment pour les yeux, et peut enflammer des vapeurs de carburant à proximité. Il n'est mis en émission au sol que selon la procédure, avec une zone dégagée et jamais pendant un avitaillement.</div>"
      },
      {
       "titre": "Surveillance : transpondeur, TCAS et balise de détresse",
       "contenu": "<p>Le <strong>transpondeur</strong> répond aux interrogations des radars secondaires de surveillance au sol (reçues sur 1 030 MHz) par des réponses codées sur 1 090 MHz : code d'identification à quatre chiffres octaux affiché par l'équipage, altitude pression, et en mode S une adresse unique de l'avion et de nombreuses données. La fonction <strong>ADS-B</strong> diffuse en outre spontanément la position GNSS et la vitesse, utilisées par le contrôle et par les autres avions.</p>\n<p>Le <strong>TCAS</strong> (système anticollision embarqué) interroge les transpondeurs des avions voisins, calcule leur distance, leur relèvement et leur altitude relative, et génère des avis de trafic puis, si nécessaire, des avis de résolution (monter ou descendre) coordonnés avec l'autre avion.</p>\n<p>La <strong>balise de détresse</strong> (ELT) se déclenche automatiquement en cas de choc violent, ou manuellement, et émet sur 406 MHz un message identifiant l'avion, capté par les satellites du système international de recherche et de sauvetage, ainsi qu'un signal sur 121,5 MHz pour le guidage des secours.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'adresse mode S (24 bits) est attribuée à l'avion par l'État d'immatriculation et programmée dans le transpondeur ou sur sa platine. Après remplacement d'un transpondeur, on vérifie avec le testeur que l'adresse émise correspond à l'avion. De même, une balise de détresse déclenchée par erreur au sol doit être signalée immédiatement aux services de recherche pour éviter une alerte.</div>"
      },
      {
       "titre": "Antennes et maintenance des systèmes radio",
       "contenu": "<p>Les performances d'un système radio dépendent autant de l'antenne et des câbles que de l'émetteur-récepteur. Les <strong>câbles coaxiaux</strong> ont une impédance caractéristique (en général 50 Ω) ; une liaison endommagée, écrasée, trop pliée ou mal connectée crée des pertes et des réflexions qui réduisent la portée. On les contrôle par mesure du <strong>rapport d'ondes stationnaires</strong> (ROS ou VSWR) et des pertes, et, pour localiser un défaut, par réflectométrie.</p>\n<p>La pose d'une antenne exige une bonne <strong>métallisation</strong> avec la structure, qui sert de plan de masse : la surface de contact est préparée (peinture éliminée selon la tâche), la résistance de liaison mesurée, puis l'étanchéité est refaite au mastic. Un défaut d'étanchéité laisse entrer l'eau dans le connecteur et dégrade rapidement le système.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> remplacer une antenne VHF. 1) Ouvrir les disjoncteurs du système et étiqueter. 2) Déposer l'antenne en retirant le mastic périphérique et les vis, puis déconnecter le coaxial. 3) Nettoyer la zone, contrôler la corrosion et préparer la surface de contact comme prescrit. 4) Poser l'antenne neuve avec son joint, serrer les vis au couple, connecter le coaxial. 5) Mesurer la résistance de métallisation et vérifier qu'elle est inférieure à la valeur maximale. 6) Appliquer le mastic d'étanchéité et respecter son temps de polymérisation. 7) Réaliser l'essai opérationnel du système (émission et réception) prévu par la tâche, et enregistrer.</div>"
      }
     ],
     "points_cles": [
      "Longueur d'onde λ = c / f ; la taille des antennes dépend de la longueur d'onde",
      "Au-delà de la VHF, la portée est limitée à la ligne de vue",
      "Radio VHF aéronautique : 118 à 136,975 MHz en modulation d'amplitude",
      "VOR donne une radiale, DME une distance oblique, ILS des écarts d'axe et de plan",
      "Le GNSS est combiné à l'inertie et aux moyens radio par le FMS",
      "Transpondeur : interrogation 1 030 MHz, réponse 1 090 MHz ; le TCAS utilise ces mêmes signaux",
      "L'ELT émet sur 406 MHz et 121,5 MHz",
      "Radar météo et antennes HF imposent des précautions d'émission au sol",
      "Coaxiaux, métallisation et étanchéité conditionnent les performances radio"
     ],
     "lexique": [
      {
       "terme": "Longueur d'onde",
       "def": "Distance parcourue par une onde pendant une période, égale à la vitesse de la lumière divisée par la fréquence."
      },
      {
       "terme": "Modulation",
       "def": "Modification d'une onde porteuse pour lui faire transporter une information."
      },
      {
       "terme": "VOR",
       "def": "Radiophare VHF omnidirectionnel indiquant la radiale sur laquelle se trouve l'avion."
      },
      {
       "terme": "DME",
       "def": "Équipement de mesure de distance entre l'avion et une station au sol."
      },
      {
       "terme": "ILS",
       "def": "Système d'atterrissage aux instruments fournissant un guidage latéral et vertical."
      },
      {
       "terme": "Radioaltimètre",
       "def": "Équipement mesurant la hauteur réelle au-dessus du sol par réflexion d'une onde."
      },
      {
       "terme": "Transpondeur",
       "def": "Équipement répondant aux interrogations des radars secondaires par des messages codés."
      },
      {
       "terme": "TCAS",
       "def": "Système anticollision embarqué générant des avis de trafic et de résolution."
      },
      {
       "terme": "ELT",
       "def": "Balise de détresse émettant automatiquement après un accident."
      },
      {
       "terme": "ROS",
       "def": "Rapport d'ondes stationnaires, indicateur de l'adaptation d'une liaison antenne."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Option Systèmes",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "baer-sy-hydraulique",
     "titre": "Production et distribution de l'énergie hydraulique",
     "niveau": "1re",
     "options": [
      "systemes"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire l'architecture d'une installation hydraulique d'avion et sa redondance",
      "Expliquer le rôle des composants : réservoir, pompes, accumulateurs, filtres, valves, vérins",
      "Calculer des efforts, débits et vitesses de vérins",
      "Réaliser en sécurité une mise en pression, un complément et une purge",
      "Diagnostiquer une fuite, une contamination ou une surchauffe du fluide"
     ],
     "sections": [
      {
       "titre": "Pourquoi l'hydraulique et quelle architecture",
       "contenu": "<p>L'énergie hydraulique permet de transmettre de grandes puissances avec des actionneurs compacts et légers, de les commander finement et de maintenir un effort sans consommation importante. Elle actionne sur avion de transport les gouvernes, les spoilers, les volets et becs, le train d'atterrissage, l'orientation de roue avant, les freins, les inverseurs de poussée et les portes cargo.</p>\n<p>La pression nominale est le plus souvent de <strong>3 000 psi</strong> (environ 207 bar) ; certains avions récents utilisent 5 000 psi (environ 345 bar), ce qui permet de réduire la taille des tuyauteries et des actionneurs. Pour la sécurité, l'avion comporte plusieurs <strong>circuits indépendants</strong> (souvent trois), sans échange de fluide entre eux, alimentés par des pompes de natures différentes :</p>\n<table><thead><tr><th>Source</th><th>Entraînement</th><th>Rôle</th></tr></thead><tbody>\n<tr><td>Pompe entraînée par le moteur (EDP)</td><td>Boîtier d'accessoires du moteur</td><td>Source principale en fonctionnement</td></tr>\n<tr><td>Pompe électrique (EMP)</td><td>Moteur électrique</td><td>Source d'appoint, au sol ou en secours</td></tr>\n<tr><td>Groupe de transfert de puissance (PTU)</td><td>Moteur hydraulique d'un circuit entraînant une pompe d'un autre</td><td>Transfère de la puissance sans transfert de fluide</td></tr>\n<tr><td>Éolienne de secours (RAT)</td><td>Hélice déployée dans le vent relatif</td><td>Secours en cas de perte des moteurs ou de toutes les sources</td></tr>\n<tr><td>Pompe à main</td><td>Opérateur</td><td>Manœuvre de portes cargo ou mises en pression au sol, selon les avions</td></tr>\n</tbody></table>\n<p>Les actionneurs les plus critiques, comme les servocommandes de gouvernes, sont alimentés par plusieurs circuits, de sorte que la perte d'un circuit ne fasse pas perdre la commande.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque circuit est désigné par une couleur ou une lettre selon le constructeur (par exemple vert, bleu et jaune chez Airbus). Ce repère se retrouve sur les étiquettes de tuyauteries, sur les écrans de maintenance et dans toute la documentation.</div>"
      },
      {
       "titre": "Les composants d'un circuit",
       "contenu": "<p>Un circuit hydraulique comprend une partie <strong>génération</strong> (réservoir, pompes, filtres, accumulateurs, régulation) et une partie <strong>distribution et utilisation</strong> (valves, distributeurs, vérins, moteurs hydrauliques).</p>\n<ul>\n<li>Le <strong>réservoir</strong> est pressurisé (par air prélevé ou par un piston à ressort ou à pression du circuit) pour éviter la cavitation à l'entrée des pompes. Il comporte un indicateur de niveau, une soupape de sûreté, et souvent un point de prélèvement d'échantillon.</li>\n<li>Les <strong>pompes</strong> à pistons axiaux et à cylindrée variable maintiennent automatiquement la pression constante : le débit s'adapte à la demande des utilisateurs.</li>\n<li>Les <strong>filtres</strong> (pression, retour, drain de carter) retiennent les particules ; un indicateur de colmatage (bouton rouge qui sort) signale un filtre à remplacer.</li>\n<li>Les <strong>accumulateurs</strong> stockent de l'énergie sous forme de fluide comprimé contre un volume d'azote, séparés par un piston ou une membrane. Ils amortissent les pointes de pression, complètent le débit et assurent un secours (freinage de parc, par exemple).</li>\n<li>La <strong>valve de priorité</strong> réserve le fluide aux utilisateurs essentiels lorsque la pression baisse.</li>\n<li>Les <strong>soupapes de sûreté</strong> limitent la pression maximale.</li>\n<li>Les <strong>distributeurs</strong> et <strong>électrovannes</strong> orientent le fluide vers une chambre ou l'autre des vérins.</li>\n<li>Les <strong>clapets</strong> anti-retour, les restricteurs et les fusibles hydrauliques protègent le circuit et limitent les pertes en cas de rupture.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un accumulateur reste sous pression même circuit arrêté. Avant de desserrer un raccord, on décharge la pression hydraulique résiduelle comme le prescrit la tâche ; la précharge d'azote, elle, ne se libère pas ainsi et exige une procédure spécifique. Un jet de fluide sous 200 bar peut pénétrer sous la peau et provoquer des lésions graves.</div>"
      },
      {
       "titre": "Grandeurs et calculs hydrauliques",
       "contenu": "<p>Trois relations permettent de dimensionner ou de vérifier un actionneur hydraulique.</p>\n<table><thead><tr><th>Grandeur</th><th>Relation</th><th>Unités</th></tr></thead><tbody>\n<tr><td>Effort d'un vérin</td><td>F = p × S</td><td>N, Pa, m²</td></tr>\n<tr><td>Vitesse d'un vérin</td><td>v = Q / S</td><td>m/s, m³/s, m²</td></tr>\n<tr><td>Puissance hydraulique</td><td>P = p × Q</td><td>W, Pa, m³/s</td></tr>\n</tbody></table>\n<p>Dans un vérin double effet, la section active en sortie est celle du piston ; en rentrée, c'est la section annulaire (piston moins tige). Pour un même débit, le vérin rentre donc plus vite qu'il ne sort, avec un effort plus faible.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le temps de sortie d'un vérin. Données : piston de diamètre 80 mm, course 400 mm, débit disponible 20 L/min. 1) Section : S = π × 0,08² / 4 ≈ 5,03 × 10<sup>-3</sup> m². 2) Volume à remplir : V = S × course = 5,03 × 10<sup>-3</sup> × 0,4 ≈ 2,01 × 10<sup>-3</sup> m³, soit environ 2 L. 3) Temps : t = V / Q = 2,01 / 20 min ≈ 0,1 min, soit environ 6 s. 4) Puissance consommée sous 207 bar : P = 20,7 × 10<sup>6</sup> × (20 / 60 000) ≈ 6 900 W. 5) Comparer le temps calculé au temps de manœuvre spécifié dans l'essai fonctionnel : un temps nettement plus long révèle un débit insuffisant ou une fuite interne.</div>\n<p>Les <strong>pertes de charge</strong> dans les tuyauteries, raccords et filtres font chuter la pression le long du circuit ; elles augmentent avec le débit et avec la viscosité du fluide, donc lorsque le fluide est froid.</p>"
      },
      {
       "titre": "Fluides, contamination et température",
       "contenu": "<p>La qualité du fluide conditionne la vie de tous les composants. Trois types de <strong>contamination</strong> sont surveillés : les particules solides (usure, montage, poussière), l'eau (condensation, produits de nettoyage) et l'air (cavitation, mousse, fonctionnement saccadé). Le mélange avec un fluide d'une autre famille constitue une contamination chimique grave : les joints gonflent ou se dégradent, et tout le circuit peut devoir être rincé et ses joints remplacés.</p>\n<p>Des <strong>prélèvements d'échantillons</strong> sont réalisés selon le programme d'entretien : l'analyse en laboratoire mesure le niveau de particules selon une classe de propreté normalisée, la teneur en eau, l'acidité et d'autres paramètres. Les fluides à base d'esters phosphatés se dégradent en présence d'eau et de chaleur en devenant acides, ce qui attaque les composants.</p>\n<p>La <strong>température</strong> du fluide est surveillée : une élévation anormale peut révéler une fuite interne importante (fluide qui se lamine à travers une valve ou un piston usé), une pompe défaillante ou un échangeur de refroidissement obstrué.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un filtre trouvé colmaté n'est pas seulement remplacé. Selon la tâche, on examine l'élément filtrant ou on le fait analyser : la nature des particules (métal, élastomère) oriente vers le composant qui s'use, par exemple une pompe en début de dégradation.</div>"
      },
      {
       "titre": "Interventions courantes en sécurité",
       "contenu": "<p>Les interventions sur l'hydraulique combinent trois risques : la pression, les mouvements de surfaces et de trains, et le fluide lui-même.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mettre en pression un circuit au sol avec la pompe électrique. 1) Vérifier dans le poste la position des commandes (train sur bas et verrouillé, sélecteurs de volets et d'aérofreins cohérents avec la position réelle). 2) Vérifier que les goupilles de sécurité de train sont en place et que les zones de débattement des gouvernes, volets, spoilers, inverseurs et trappes sont dégagées. 3) Prévenir le personnel présent et afficher la mise en pression. 4) Vérifier le niveau du réservoir. 5) Mettre la pompe en marche et surveiller pression, niveau et alarmes. 6) Après le travail, arrêter la pompe et décharger le circuit selon la tâche.</div>\n<p>Le <strong>complément</strong> de fluide se fait avec un groupe de remplissage filtré, dans la configuration prescrite (accumulateurs gonflés, vérins dans la position indiquée), car le niveau du réservoir varie selon la position des actionneurs et la pression. La <strong>purge</strong> de l'air après une intervention se fait selon la tâche, souvent en manœuvrant plusieurs fois l'actionneur de butée à butée.</p>\n<p>Un <strong>raccord</strong> déposé est obturé immédiatement par des bouchons propres adaptés ; à la repose, les joints sont remplacés, lubrifiés avec le fluide du circuit, et les raccords serrés au couple. Un essai d'étanchéité sous pression suit toujours l'intervention.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les fluides à base d'esters phosphatés attaquent fortement les yeux et la peau, ainsi que de nombreuses peintures. Lunettes et gants adaptés sont obligatoires ; une projection dans les yeux impose un rinçage immédiat et prolongé et une consultation.</div>"
      },
      {
       "titre": "Diagnostiquer une fuite",
       "contenu": "<p>Les fuites externes sont classées selon leur débit, mesuré en gouttes par minute sur un composant sous pression, et le manuel indique pour chaque type d'élément (vérin, raccord, pompe) la fuite admissible. Un suintement léger sur une tige de vérin dynamique peut être normal ; la même fuite sur un raccord statique ne l'est pas.</p>\n<table><thead><tr><th>Symptôme</th><th>Causes possibles</th></tr></thead><tbody>\n<tr><td>Baisse de niveau sans fuite visible</td><td>Fuite interne vers un autre circuit (rare), fuite cachée dans une zone fermée, prélèvements non enregistrés</td></tr>\n<tr><td>Pression qui chute lentement à l'arrêt</td><td>Fuites internes de valves, accumulateur dégonflé</td></tr>\n<tr><td>Manœuvre lente</td><td>Débit insuffisant, fuite interne de vérin, restricteur bouché, fluide froid</td></tr>\n<tr><td>Mouvements saccadés, bruits</td><td>Air dans le circuit, cavitation de pompe, réservoir non pressurisé</td></tr>\n<tr><td>Montée en température</td><td>Fuite interne importante, pompe usée, refroidissement défaillant</td></tr>\n</tbody></table>\n<p>Pour localiser une fuite externe, on nettoie la zone, on met sous pression et on observe en partant du point haut. On ne recherche jamais une fuite à la main nue sous pression : on utilise un morceau de carton ou un chiffon propre et l'on porte des lunettes.</p>"
      }
     ],
     "points_cles": [
      "Pression nominale courante : 3 000 psi (environ 207 bar), parfois 5 000 psi",
      "Plusieurs circuits indépendants alimentés par des sources de natures différentes",
      "Le PTU transfère de la puissance entre circuits sans échange de fluide",
      "Un accumulateur reste sous pression circuit arrêté",
      "F = p × S, v = Q / S, P = p × Q ; un vérin rentre plus vite qu'il ne sort",
      "Particules, eau, air et mélange de fluides sont les contaminations à éviter",
      "Avant une mise en pression : goupilles de train, zones dégagées, personnel prévenu",
      "Le niveau se lit dans la configuration prescrite ; les fuites se jugent selon les limites du manuel"
     ],
     "lexique": [
      {
       "terme": "EDP",
       "def": "Pompe hydraulique entraînée par le moteur."
      },
      {
       "terme": "PTU",
       "def": "Groupe de transfert de puissance entre deux circuits hydrauliques sans transfert de fluide."
      },
      {
       "terme": "RAT",
       "def": "Éolienne de secours déployée en vol pour fournir de l'énergie hydraulique ou électrique."
      },
      {
       "terme": "Accumulateur",
       "def": "Réservoir où le fluide est stocké sous pression contre un volume d'azote."
      },
      {
       "terme": "Valve de priorité",
       "def": "Valve qui réserve le fluide aux utilisateurs essentiels lorsque la pression diminue."
      },
      {
       "terme": "Cavitation",
       "def": "Formation de bulles de vapeur dans un liquide en dépression, qui endommage les pompes."
      },
      {
       "terme": "Indicateur de colmatage",
       "def": "Témoin qui signale qu'un filtre est encrassé et doit être remplacé."
      },
      {
       "terme": "Fuite interne",
       "def": "Passage de fluide à l'intérieur d'un composant d'une chambre à une autre, sans écoulement à l'extérieur."
      },
      {
       "terme": "Purge",
       "def": "Opération d'élimination de l'air contenu dans un circuit hydraulique."
      }
     ]
    },
    {
     "id": "baer-sy-atterrisseurs",
     "titre": "Atterrisseurs, roues, pneumatiques et freins",
     "niveau": "1re-Tle",
     "options": [
      "systemes"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire la constitution d'un atterrisseur et le fonctionnement d'un amortisseur oléopneumatique",
      "Expliquer la séquence de manœuvre, le verrouillage et la signalisation du train",
      "Contrôler et entretenir roues et pneumatiques en sécurité",
      "Décrire les freins carbone, l'antidérapage et la mesure d'usure",
      "Décrire l'orientation de la roue avant et les précautions de remorquage"
     ],
     "sections": [
      {
       "titre": "Constitution d'un atterrisseur",
       "contenu": "<p>Un <strong>atterrisseur</strong> (train d'atterrissage) supporte l'avion au sol, absorbe l'énergie de l'atterrissage, permet le roulage, le freinage et l'orientation. Sur les avions de transport, on trouve un train avant orientable et deux ou plusieurs trains principaux ; tous sont escamotables dans des logements fermés par des trappes.</p>\n<p>Un atterrisseur principal comprend typiquement :</p>\n<ul>\n<li>la <strong>jambe</strong> (fût) articulée sur la structure, contenant l'amortisseur ;</li>\n<li>la <strong>contrefiche</strong> (ou entretoise) brisée, qui stabilise la jambe en position sortie et se replie lors de la rentrée ;</li>\n<li>le <strong>verrou</strong> de train sorti (contrefiche alignée et verrouillée) et le crochet de train rentré ;</li>\n<li>le <strong>compas</strong> (bras articulés reliant le cylindre et la tige de l'amortisseur), qui empêche la rotation de la tige ;</li>\n<li>le <strong>diabolo</strong> ou le <strong>bogie</strong> portant les roues, les freins et les capteurs ;</li>\n<li>le <strong>vérin de manœuvre</strong> et les vérins de trappes.</li>\n</ul>\n<p>Les pièces principales sont en acier à très haute résistance ou en titane ; beaucoup sont des pièces à vie limitée suivies en cycles. Leur protection anticorrosion (revêtements, peinture, graissage) est essentielle, car une piqûre de corrosion peut amorcer une crique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le train est l'un des ensembles les plus sollicités et les plus graissés de l'avion. Les tâches de lubrification des articulations, à intervalles courts, sont une barrière majeure contre l'usure et la corrosion des axes et bagues.</div>"
      },
      {
       "titre": "L'amortisseur oléopneumatique",
       "contenu": "<p>L'<strong>amortisseur oléopneumatique</strong> associe deux fonctions : un <strong>ressort</strong> d'azote comprimé, qui supporte l'avion et absorbe l'énergie, et un <strong>amortissement</strong> par laminage d'huile hydraulique à travers des orifices calibrés, qui dissipe cette énergie en chaleur et évite les rebonds. Il est rempli partiellement d'huile et gonflé à l'azote à une pression qui dépend de l'extension de la tige.</p>\n<p>Le bon état de l'amortisseur se contrôle par la mesure de l'<strong>extension</strong> (longueur de tige visible, en général notée « dimension X » ou « chrome visible ») comparée à un graphique du manuel, qui donne l'extension attendue en fonction de la masse de l'avion ou de la pression lue au manomètre. Une extension trop faible révèle un manque d'azote ou d'huile ; une extension trop grande un excès d'azote.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler et corriger le gonflage d'un amortisseur. 1) Relever la masse et le centrage de l'avion, ou la configuration prescrite. 2) Mesurer l'extension et lire la pression d'azote au manomètre de la valve de gonflage. 3) Reporter les deux valeurs sur le graphique de la tâche : le point doit se trouver dans la zone acceptable. 4) Si la pression est trop faible, compléter à l'azote sec avec un détendeur et un manomètre étalonnés, par petites quantités, en attendant la stabilisation. 5) Si le point reste hors zone après gonflage, la quantité d'huile est probablement incorrecte : appliquer la procédure complète de remise à niveau en huile et en azote. 6) Contrôler l'absence de fuite à la valve et sur la tige, puis enregistrer les valeurs.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on n'utilise jamais d'air ni d'oxygène pour gonfler un amortisseur, un accumulateur ou un pneumatique d'avion de transport, mais de l'azote sec. L'oxygène au contact de l'huile peut provoquer une explosion, et l'humidité de l'air favorise la corrosion interne.</div>"
      },
      {
       "titre": "Manœuvre, verrouillage et signalisation",
       "contenu": "<p>La <strong>rentrée</strong> du train suit une séquence : déverrouillage du train sorti, ouverture des trappes, rentrée de la jambe, verrouillage en position haute, fermeture des trappes. La <strong>sortie</strong> suit la séquence inverse. Cette séquence est assurée par des valves hydrauliques séquentielles ou par un calculateur de commande du train, qui utilise des capteurs de proximité.</p>\n<p>La rentrée est interdite au sol par une logique utilisant les capteurs de compression d'amortisseur (information sol/vol) et, au sol, par les <strong>goupilles de sécurité</strong> (ground lock pins) qui bloquent mécaniquement les contrefiches. En cas de panne de l'hydraulique, une <strong>sortie de secours</strong> par gravité est possible : les verrous sont libérés mécaniquement ou électriquement, et le train descend sous son propre poids et l'action de l'air.</p>\n<p>La <strong>signalisation</strong> présente à l'équipage, pour chaque train, l'état « verrouillé bas » (vert), « en transit ou non conforme » (rouge) ou « rentré » (indication éteinte), ainsi que l'état des trappes.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les essais de rentrée et de sortie de train (retraction tests) se font avion soulevé sur vérins, avec un groupe hydraulique de parc. On vérifie les temps de manœuvre, le fonctionnement des verrous, les jeux, l'absence d'interférence avec la structure et les câblages, la signalisation et la sortie de secours. Ce sont des opérations à haut risque : zone balisée, communication permanente entre le poste et l'extérieur.</div>\n<p>Les capteurs de proximité du train et leurs cibles se règlent selon des cotes précises ; un capteur mal réglé peut donner une fausse information « train non verrouillé » ou, plus grave, une information sol/vol erronée qui perturbe de nombreux systèmes.</p>"
      },
      {
       "titre": "Roues et pneumatiques",
       "contenu": "<p>Les <strong>roues</strong> sont en alliage d'aluminium forgé, en deux demi-jantes assemblées par des boulons. Elles portent des <strong>bouchons fusibles</strong> qui fondent en cas de surchauffe des freins pour dégonfler le pneu de façon contrôlée avant qu'il n'éclate, et une soupape de surpression.</p>\n<p>Les <strong>pneumatiques</strong> d'avion supportent des charges et des vitesses très élevées. Ils sont gonflés à l'azote à des pressions élevées (souvent plus de 10 bar sur avion de transport). La pression se contrôle <strong>pneu froid</strong>, au moins deux à trois heures après le vol, car un pneu chaud présente une pression nettement supérieure.</p>\n<table><thead><tr><th>Contrôle</th><th>Critères</th></tr></thead><tbody>\n<tr><td>Pression de gonflage</td><td>Comparée à la valeur du manuel ; un écart important impose des actions (dépose du pneu, voire de la roue voisine)</td></tr>\n<tr><td>Usure de la bande de roulement</td><td>Profondeur des rainures, apparition de la nappe de renfort</td></tr>\n<tr><td>Coupures, entailles</td><td>Profondeur et longueur comparées aux limites</td></tr>\n<tr><td>Méplats</td><td>Usure localisée due à un blocage de roue</td></tr>\n<tr><td>Hernies, décollements</td><td>Déformation localisée : dépose immédiate</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un pneu d'avion gonflé contient une énergie considérable. Une roue ou un pneu endommagé peut exploser : on s'approche d'une roue chaude ou suspecte par l'avant ou l'arrière du pneu, jamais dans l'axe des flasques. Avant de démonter une roue, on dégonfle complètement le pneu, et l'on ne retire jamais les boulons d'assemblage d'une roue gonflée.</div>"
      },
      {
       "titre": "Freins, antidérapage et orientation",
       "contenu": "<p>Les avions de transport utilisent des <strong>freins multidisques</strong> : des disques rotors entraînés par la roue alternent avec des disques stators fixes ; des pistons hydrauliques (ou des actionneurs électriques sur certains avions récents) serrent l'empilage. Les disques sont de plus en plus en <strong>carbone</strong>, plus léger que l'acier et supportant mieux les très hautes températures.</p>\n<p>L'<strong>usure</strong> des freins se contrôle par des <strong>indicateurs d'usure</strong> : des tiges solidaires du plateau de pression qui dépassent du carter, frein serré. Lorsque l'extrémité de la tige arrive au ras de son repère, le frein doit être remplacé. La mesure se fait avec le frein de parc serré et la pression prescrite.</p>\n<p>Le système <strong>antidérapage</strong> compare la vitesse de chaque roue, mesurée par un capteur (tachymètre) dans l'essieu, à la vitesse de l'avion ; lorsqu'une roue tend à se bloquer, il réduit la pression de freinage de cette roue. Le <strong>freinage automatique</strong> applique une décélération présélectionnée à l'atterrissage, ou un freinage maximal en cas de décollage interrompu.</p>\n<p>L'<strong>orientation de la roue avant</strong> est commandée par un volant au poste de pilotage et, à faible angle, par le palonnier ; elle est réalisée par des vérins ou un moteur hydraulique. Pour le remorquage, l'orientation doit être neutralisée (désactivation par un dispositif prévu, souvent avec une goupille), sans quoi la barre de remorquage ou le tracteur peuvent endommager le mécanisme.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer un remorquage. 1) Vérifier la présence des goupilles de train et la neutralisation de l'orientation de roue avant. 2) Mettre en place la barre adaptée au type d'avion, avec ses goupilles de cisaillement intactes. 3) Établir la communication entre le conducteur du tracteur et l'opérateur au poste, qui assure le freinage d'urgence avec une pression de freinage disponible. 4) Placer les surveillants d'extrémités d'ailes et de queue. 5) Respecter les angles maximaux d'orientation marqués sur le train avant ; tout dépassement est enregistré et entraîne une inspection.</div>"
      }
     ],
     "points_cles": [
      "Jambe, contrefiche, verrous, compas et vérins constituent l'atterrisseur",
      "L'amortisseur oléopneumatique combine ressort d'azote et laminage d'huile",
      "L'extension et la pression d'azote se comparent au graphique du manuel",
      "Amortisseurs, accumulateurs et pneus se gonflent à l'azote sec, jamais à l'oxygène",
      "Les goupilles de sécurité bloquent le train au sol",
      "La pression des pneus se contrôle à froid ; on ne se place pas dans l'axe d'une roue chaude",
      "Les indicateurs d'usure des freins se lisent frein serré",
      "L'orientation de roue avant est neutralisée avant un remorquage"
     ],
     "lexique": [
      {
       "terme": "Contrefiche",
       "def": "Bras articulé qui stabilise la jambe de train en position sortie."
      },
      {
       "terme": "Compas",
       "def": "Bras articulés empêchant la rotation de la tige d'amortisseur dans son cylindre."
      },
      {
       "terme": "Amortisseur oléopneumatique",
       "def": "Amortisseur combinant un ressort d'azote et un amortissement par laminage d'huile."
      },
      {
       "terme": "Goupille de sécurité",
       "def": "Goupille qui bloque mécaniquement le train au sol pour empêcher sa rentrée."
      },
      {
       "terme": "Sortie de secours",
       "def": "Sortie du train par gravité après déverrouillage, sans pression hydraulique normale."
      },
      {
       "terme": "Bouchon fusible",
       "def": "Bouchon de jante qui fond en cas de surchauffe pour dégonfler le pneu."
      },
      {
       "terme": "Indicateur d'usure",
       "def": "Tige dont la longueur visible indique l'usure restante d'un frein."
      },
      {
       "terme": "Antidérapage",
       "def": "Système qui module la pression de freinage pour éviter le blocage des roues."
      },
      {
       "terme": "Bogie",
       "def": "Chariot articulé portant quatre roues ou plus d'un train principal."
      }
     ]
    },
    {
     "id": "baer-sy-carburant-pneumatique",
     "titre": "Carburant, air prélevé, conditionnement d'air et pressurisation",
     "niveau": "Tle",
     "options": [
      "systemes"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire l'architecture d'un circuit carburant : stockage, alimentation, transfert, jaugeage, mise à l'air",
      "Appliquer les règles de sécurité des interventions en réservoir et de l'avitaillement",
      "Expliquer la production et la distribution de l'air prélevé",
      "Décrire le fonctionnement d'un groupe de conditionnement d'air et de la régulation de pressurisation",
      "Décrire les systèmes de protection contre le givre et la pluie"
     ],
     "sections": [
      {
       "titre": "Le circuit carburant",
       "contenu": "<p>Le carburant est stocké dans des <strong>réservoirs structuraux</strong> : les caissons d'aile et souvent le caisson central sont rendus étanches par des mastics et constituent eux-mêmes les réservoirs. Le circuit assure plusieurs fonctions :</p>\n<ul>\n<li><strong>alimentation</strong> des moteurs et de l'APU par des <strong>pompes de gavage</strong> immergées (pompes électriques à basse pression), avec possibilité d'aspiration par la pompe moteur en cas de panne ;</li>\n<li><strong>intercommunication</strong> (crossfeed), qui permet d'alimenter un moteur à partir des réservoirs de l'autre côté ;</li>\n<li><strong>transfert</strong> entre réservoirs pour gérer le centrage ou équilibrer les ailes ;</li>\n<li><strong>avitaillement</strong> sous pression par un raccord standard, avec arrêt automatique au niveau présélectionné ;</li>\n<li><strong>jaugeage</strong> par sondes capacitives mesurant la hauteur de carburant, corrigée par la densité, et jauges de secours manuelles (jauges magnétiques à tirette) lisibles sous l'aile ;</li>\n<li><strong>mise à l'air libre</strong> des réservoirs, pour que la pression interne reste proche de la pression extérieure, avec des réservoirs d'expansion et des dispositifs pare-flammes ;</li>\n<li>sur certains avions, <strong>vidange en vol</strong> (jettison) pour réduire rapidement la masse.</li>\n</ul>\n<p>Les réservoirs comportent des points bas munis de <strong>purges</strong> pour éliminer l'eau de condensation, qui favorise le développement de micro-organismes (« contamination microbienne ») corrosifs pour la structure. Sur les avions récents, un système d'<strong>inertage</strong> produit de l'air appauvri en oxygène, injecté dans les réservoirs pour réduire le risque d'inflammation des vapeurs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les zones où peuvent se trouver des vapeurs de carburant sont soumises à des exigences de conception et d'entretien particulières (limitations de navigabilité dites CDCCL) : un composant ou une installation électrique de réservoir ne peut être modifié, ni réparé, autrement que selon les données qui préservent ces exigences.</div>"
      },
      {
       "titre": "Intervenir en sécurité sur le carburant",
       "contenu": "<p>Le carburéacteur est inflammable ; ses vapeurs, plus lourdes que l'air, s'accumulent dans les points bas et les espaces confinés. Leur inhalation est toxique, et le contact prolongé irrite la peau.</p>\n<p>L'<strong>entrée dans un réservoir</strong> est l'une des opérations les plus dangereuses de la maintenance. Elle exige une formation spécifique et suit une procédure stricte : vidange, ventilation forcée du réservoir, mesure de la concentration de vapeurs et de la teneur en oxygène avant et pendant l'intervention, outillage et éclairage antidéflagrants, vêtements antistatiques, présence permanente d'un surveillant à l'extérieur en communication avec l'intervenant, moyens d'évacuation prévus.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer l'avion pour l'avitaillement ou une intervention sur le circuit carburant. 1) Mettre l'avion à la masse et relier le camion ou l'équipement à l'avion (liaison équipotentielle) avant toute ouverture. 2) Vérifier l'absence de sources d'ignition : radar météo en émission, essais radio HF, travaux par points chauds, appareils non protégés. 3) Disposer les extincteurs prévus et dégager les issues. 4) Respecter les règles particulières si des passagers sont à bord. 5) En fin d'opération, vérifier l'absence de fuite et la fermeture des panneaux et bouchons.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les panneaux d'accès aux réservoirs, sous l'intrados de l'aile, sont fixés par de nombreuses vis et comportent des joints. Une vis manquante ou un panneau mal serré crée une fuite et, sur certains panneaux, compromet la protection contre la foudre. Leur repose suit l'ordre et les couples de serrage du manuel.</div>"
      },
      {
       "titre": "L'air prélevé et le système pneumatique",
       "contenu": "<p>Sur la plupart des avions de transport, de l'air comprimé chaud est prélevé sur les étages de compresseur des moteurs : c'est l'<strong>air prélevé</strong> (bleed air). Deux points de prélèvement (étage intermédiaire et étage haute pression) sont utilisés selon le régime moteur. L'air est ensuite régulé en pression par des vannes et refroidi par un <strong>prérefroidisseur</strong> (échangeur air-air alimenté par l'air de la soufflante), puis distribué par des conduites isolées.</p>\n<p>L'APU et des groupes de parc au sol peuvent aussi fournir de l'air comprimé. Les utilisateurs sont : le conditionnement d'air et la pressurisation, l'antigivrage des ailes et des entrées d'air moteurs, la pressurisation des réservoirs hydrauliques, le démarrage des moteurs (démarreurs pneumatiques).</p>\n<p>Les conduites d'air chaud sont surveillées par un <strong>système de détection de fuites</strong> (câbles détecteurs de surchauffe placés le long des conduites) : une fuite d'air à plus de 200 °C dans une zone de câblage ou de structure est dangereuse et provoque la fermeture automatique des vannes concernées.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> certains avions récents n'utilisent plus d'air prélevé ; des compresseurs électriques alimentent le conditionnement d'air, et l'antigivrage des ailes est électrique. Le technicien doit donc lire l'architecture propre à chaque type avant d'appliquer ses habitudes.</div>"
      },
      {
       "titre": "Conditionnement d'air",
       "contenu": "<p>Le <strong>groupe de conditionnement d'air</strong> (pack) transforme l'air prélevé, chaud et sous pression, en air frais et sec destiné à la cabine. Il fonctionne selon un <strong>cycle à air</strong> : l'air est d'abord refroidi dans un échangeur primaire par de l'air extérieur, comprimé par le compresseur d'un <strong>turboréfrigérateur</strong> (ACM : Air Cycle Machine), refroidi à nouveau dans un échangeur principal, débarrassé de son eau, puis détendu dans la turbine de l'ACM. La détente le refroidit fortement, tout en fournissant l'énergie qui entraîne le compresseur et le ventilateur de l'ensemble.</p>\n<p>L'air froid est mélangé dans une <strong>chambre de mélange</strong> avec de l'air recirculé de la cabine (filtré par des filtres à haute efficacité), puis la température de chaque zone est ajustée par l'injection d'une petite quantité d'air chaud (trim air), sous le contrôle d'un régulateur de température.</p>\n<table><thead><tr><th>Élément</th><th>Rôle</th></tr></thead><tbody>\n<tr><td>Vanne de régulation de débit du pack</td><td>Règle le débit d'air entrant dans le groupe</td></tr>\n<tr><td>Échangeurs primaire et principal</td><td>Refroidissent l'air par l'air extérieur dynamique</td></tr>\n<tr><td>Turboréfrigérateur (ACM)</td><td>Comprime puis détend l'air pour le refroidir</td></tr>\n<tr><td>Séparateur d'eau</td><td>Élimine l'humidité condensée</td></tr>\n<tr><td>Chambre de mélange</td><td>Mélange air neuf et air recirculé</td></tr>\n<tr><td>Vannes d'air chaud de zone</td><td>Ajustent la température de chaque zone</td></tr>\n</tbody></table>\n<p>Les échangeurs encrassés réduisent les performances du pack et provoquent des surchauffes ; leur nettoyage fait partie des tâches programmées, notamment dans les environnements chauds et poussiéreux.</p>"
      },
      {
       "titre": "Pressurisation et protection contre le givre",
       "contenu": "<p>À l'altitude de croisière, l'air extérieur ne permet pas de respirer. La cabine est donc <strong>pressurisée</strong> : l'air est fourni en continu par les packs, et une <strong>vanne de décharge</strong> (outflow valve) en laisse sortir une quantité réglée par le contrôleur de pressurisation, ce qui fixe la pression cabine. L'<strong>altitude cabine</strong> est l'altitude de l'atmosphère standard correspondant à la pression cabine ; les règles de certification la limitent en général à 8 000 ft (environ 2 440 m) en exploitation normale.</p>\n<p>La <strong>pression différentielle</strong> entre l'intérieur et l'extérieur, de l'ordre de 8 psi (environ 0,55 bar) sur de nombreux avions, s'exerce sur le fuselage à chaque vol : c'est le principal cycle de fatigue de la cellule. Des <strong>soupapes de sûreté</strong> limitent la pression différentielle maximale, et une soupape de dépression empêche la pression extérieure de dépasser la pression intérieure.</p>\n<p>La <strong>protection contre le givre</strong> utilise l'air chaud (bords d'attaque des ailes, entrées d'air moteurs), le chauffage électrique (sondes, pare-brise, mâts d'évacuation des eaux usées, certaines hélices) ou des boudins pneumatiques qui se gonflent pour briser la glace sur les avions à hélices. La pluie est chassée des pare-brise par des essuie-glaces et des traitements hydrophobes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer l'effort sur une porte due à la pressurisation. Données : pression différentielle 8 psi, porte de 1,9 m × 0,9 m. 1) Convertir : 8 psi ≈ 8 × 6 895 ≈ 55 200 Pa. 2) Surface : 1,9 × 0,9 = 1,71 m². 3) Effort : F = 55 200 × 1,71 ≈ 94 400 N, soit environ 9,6 tonnes-force. 4) Conclure : c'est pourquoi les portes sont du type « bouchon » (plus grandes que leur encadrement côté intérieur) ou munies de verrous et de butées très résistants, et pourquoi une porte ne doit jamais être ouverte tant qu'un écart de pression subsiste.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pression résiduelle dans la cabine au sol, même faible, peut projeter violemment une porte et la personne qui l'ouvre. Les avions disposent d'indications de pression résiduelle ; lors des essais de pressurisation au sol, la procédure de dépressurisation complète est appliquée avant toute ouverture.</div>"
      }
     ],
     "points_cles": [
      "Les réservoirs structuraux sont des caissons étanchés au mastic",
      "Pompes de gavage, intercommunication, transfert, jaugeage et mise à l'air composent le circuit carburant",
      "Purger l'eau limite la contamination microbienne et la corrosion",
      "L'entrée en réservoir exige formation, ventilation, mesures de gaz et surveillant",
      "L'air prélevé sur les compresseurs moteur alimente conditionnement, antigivrage et démarrage",
      "Le pack refroidit l'air par compression, échange puis détente dans un turboréfrigérateur",
      "La vanne de décharge règle la pression cabine ; altitude cabine limitée en général à 8 000 ft",
      "La pression différentielle crée des efforts considérables sur portes et fuselage"
     ],
     "lexique": [
      {
       "terme": "Réservoir structural",
       "def": "Partie de la structure, comme un caisson d'aile, rendue étanche pour contenir le carburant."
      },
      {
       "terme": "Pompe de gavage",
       "def": "Pompe électrique immergée qui alimente les moteurs en carburant sous basse pression."
      },
      {
       "terme": "Crossfeed",
       "def": "Intercommunication permettant d'alimenter un moteur à partir des réservoirs de l'autre côté."
      },
      {
       "terme": "Inertage",
       "def": "Injection d'air appauvri en oxygène dans un réservoir pour réduire le risque d'inflammation."
      },
      {
       "terme": "Air prélevé",
       "def": "Air comprimé chaud prélevé sur le compresseur d'un moteur ou de l'APU."
      },
      {
       "terme": "Pack",
       "def": "Groupe de conditionnement d'air qui produit un air froid et sec pour la cabine."
      },
      {
       "terme": "ACM",
       "def": "Turboréfrigérateur : machine à cycle à air qui refroidit l'air par compression et détente."
      },
      {
       "terme": "Vanne de décharge",
       "def": "Vanne qui règle la sortie d'air de la cabine et donc sa pression."
      },
      {
       "terme": "Altitude cabine",
       "def": "Altitude standard correspondant à la pression régnant dans la cabine."
      },
      {
       "terme": "Pression différentielle",
       "def": "Écart entre la pression cabine et la pression extérieure."
      }
     ]
    },
    {
     "id": "baer-sy-commandes-vol",
     "titre": "Commandes de vol et dispositifs hypersustentateurs",
     "niveau": "Tle",
     "options": [
      "systemes"
     ],
     "duree": 40,
     "objectifs": [
      "Comparer les commandes de vol mécaniques, assistées et électriques",
      "Décrire une servocommande et ses modes de fonctionnement",
      "Décrire la transmission des volets et becs et ses protections",
      "Contrôler débattements, butées, jeux et neutres d'une gouverne",
      "Appliquer les exigences d'inspection propres aux commandes de vol"
     ],
     "sections": [
      {
       "titre": "Trois générations de commandes",
       "contenu": "<p>Les commandes de vol relient les organes du poste (manche ou mini-manche, palonnier, manette de volets, compensateur) aux gouvernes. On distingue trois architectures, souvent combinées sur un même avion.</p>\n<table><thead><tr><th>Type</th><th>Transmission</th><th>Exemples</th></tr></thead><tbody>\n<tr><td>Commandes mécaniques directes</td><td>Câbles, poulies, guignols, bielles et tubes de torsion ; l'effort du pilote déplace la gouverne, parfois aidé par des compensateurs aérodynamiques</td><td>Aviation légère, avions régionaux anciens</td></tr>\n<tr><td>Commandes mécaniques assistées</td><td>La transmission mécanique commande le distributeur d'une servocommande hydraulique, qui fournit l'effort ; une sensation artificielle est créée par ressorts et vérins</td><td>Avions de transport de générations précédentes, hélicoptères</td></tr>\n<tr><td>Commandes électriques</td><td>Le mini-manche ou le manche produit des signaux électriques ; des calculateurs élaborent les ordres envoyés aux servocommandes selon des lois de pilotage</td><td>Avions de transport récents, avions militaires</td></tr>\n</tbody></table>\n<p>Sur les commandes électriques, les gouvernes peuvent aussi être actionnées par des <strong>actionneurs électrohydrostatiques</strong> (EHA), qui intègrent leur propre pompe entraînée par un moteur électrique et ne reçoivent que de l'énergie électrique, ou par des actionneurs électromécaniques.</p>\n<p>Lorsque l'effort est fourni par une servocommande, le pilote ne ressent plus les efforts aérodynamiques sur la gouverne. Les commandes assistées comportent donc un <strong>dispositif de sensation artificielle</strong> (ressorts, parfois modulés par la vitesse) et un <strong>mécanisme de compensation</strong> qui déplace le point neutre de la sensation. Sur les commandes électriques à mini-manche, le mini-manche est simplement rappelé au neutre par des ressorts, et c'est la loi de pilotage qui assure la compensation automatique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> quelle que soit l'architecture, les commandes de vol sont classées parmi les éléments critiques : une erreur de montage peut avoir des conséquences catastrophiques dès le vol suivant. Elles font l'objet de règles particulières de réalisation et d'inspection.</div>"
      },
      {
       "titre": "La servocommande",
       "contenu": "<p>Une <strong>servocommande</strong> est un vérin hydraulique associé à un distributeur qui le pilote. Sur une commande mécanique assistée, le distributeur est actionné par une bielle d'entrée reliée à la timonerie ; le corps du vérin suit le mouvement jusqu'à refermer le distributeur : c'est un asservissement mécanique de position. Sur une commande électrique, le distributeur est une servovalve commandée par un calculateur, et un capteur de position renvoie la position du vérin.</p>\n<p>Une servocommande de gouverne possède plusieurs <strong>modes</strong> :</p>\n<ul>\n<li><strong>actif</strong> : elle déplace la gouverne selon les ordres ;</li>\n<li><strong>amorti</strong> : en cas de perte de son alimentation ou de désactivation, le fluide passe d'une chambre à l'autre à travers un orifice calibré ; la servocommande suit la gouverne déplacée par une autre servocommande, tout en amortissant ses mouvements pour éviter le flottement (vibration aéroélastique destructrice) ;</li>\n<li><strong>bloqué</strong>, sur certains actionneurs : la gouverne est maintenue en position.</li>\n</ul>\n<p>Le <strong>plan horizontal réglable</strong> est généralement entraîné par un <strong>vérin à vis à billes</strong> mû par des moteurs hydrauliques ou électriques, avec un frein et une butée mécanique. Cette pièce, fortement chargée, fait l'objet d'inspections et de lubrifications spécifiques : son usure est contrôlée par mesure de jeu.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une lubrification omise ou réalisée avec un produit non prescrit sur un vérin à vis de plan horizontal a été à l'origine d'au moins un accident mortel par usure et rupture de l'écrou. Les tâches de lubrification et de contrôle de jeu de ces mécanismes ne sont jamais secondaires.</div>"
      },
      {
       "titre": "Volets, becs et spoilers",
       "contenu": "<p>Les <strong>volets</strong> (bord de fuite) et les <strong>becs</strong> (bord d'attaque) augmentent la portance à basse vitesse. Ils sont généralement entraînés par une unité de commande centrale (moteurs hydrauliques ou électriques et réducteur) qui fait tourner des <strong>arbres de transmission</strong> le long de l'envergure ; à chaque point d'actionnement, un renvoi d'angle et un vérin à vis ou un actionneur rotatif transforment la rotation en déplacement de la surface sur ses rails.</p>\n<p>Une asymétrie entre les surfaces des deux ailes provoquerait un roulis incontrôlable. Le système est donc surveillé par des capteurs de position aux extrémités des transmissions ; en cas d'asymétrie, d'emballement ou de mouvement non commandé, des <strong>freins de bout d'aile</strong> (WTB) bloquent la transmission. Des <strong>limiteurs de couple</strong> protègent la structure en cas de blocage d'un actionneur.</p>\n<p>Les <strong>spoilers</strong> sont des panneaux de l'extrados qui se lèvent pour détruire la portance : en vol pour aider au roulis ou freiner (aérofreins), au sol pour plaquer l'avion sur la piste et augmenter l'efficacité des freins. Ils sont actionnés par des servocommandes, en général un vérin par panneau.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> après le remplacement d'un actionneur de volet, la tâche impose souvent un contrôle de synchronisation : toutes les surfaces sont amenées à une position de référence, et les écarts sont mesurés au moyen de gabarits ou d'outils de mesure prescrits, puis réglés par le calage de l'actionneur sur la transmission avant le réaccouplement.</div>"
      },
      {
       "titre": "Débattements, butées, jeux et neutres",
       "contenu": "<p>Le réglage d'une commande de vol vise plusieurs objectifs : la gouverne doit être au <strong>neutre</strong> lorsque la commande du poste est au neutre ; elle doit atteindre ses <strong>débattements</strong> maximaux prescrits dans chaque sens, limités par des <strong>butées</strong> ; le <strong>jeu</strong> (free play) entre la gouverne et son actionneur doit rester inférieur à une valeur maximale ; l'<strong>effort</strong> de manœuvre doit être dans les tolérances.</p>\n<p>Les butées sont de deux types : les butées du poste (ou de la timonerie), qui limitent la course de la commande, et les butées de gouverne (ou de l'actionneur), qui limitent la gouverne elle-même. La documentation impose souvent un <strong>jeu entre butées</strong> : la butée du poste doit être atteinte avant celle de la gouverne, pour que l'effort du pilote ou de l'actionneur ne s'exerce pas sur la structure de la gouverne.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler le débattement d'une gouverne de direction. 1) Mettre l'avion dans la configuration prescrite (alimentation hydraulique, calculateurs actifs ou non selon la tâche). 2) Installer l'outil de mesure : rapporteur à niveau fixé sur la gouverne, ou gabarit en appui sur la structure fixe et sur la gouverne, aux points de référence indiqués. 3) Mettre la commande au neutre et vérifier que l'indication est dans la tolérance du neutre. 4) Amener la commande en butée à gauche puis à droite, et relever le débattement maximal obtenu dans chaque sens. 5) Comparer aux valeurs prescrites, avec leurs tolérances. 6) Mesurer le jeu en appliquant à la gouverne l'effort défini, dans un sens puis dans l'autre, et relever le déplacement total au point de mesure indiqué. 7) Enregistrer toutes les valeurs, puis faire réaliser l'inspection indépendante.</div>\n<p>Un jeu excessif peut provenir de l'usure des bagues et axes de charnière, des rotules d'actionneur ou des fixations de l'actionneur ; il favorise le flottement et doit être corrigé avant la remise en service.</p>"
      },
      {
       "titre": "Les exigences propres aux commandes de vol",
       "contenu": "<p>Les règles d'entretien européennes demandent aux organismes de définir des procédures pour limiter le risque d'erreur sur les tâches qui touchent aux systèmes critiques, et en particulier d'imposer une <strong>inspection indépendante</strong> (ou une nouvelle inspection) lorsqu'une erreur pourrait compromettre la sécurité du vol. Les commandes de vol en sont l'exemple type.</p>\n<p>Concrètement, après toute intervention qui a perturbé une commande de vol (dépose d'une bielle, d'un câble, d'un actionneur), on vérifie :</p>\n<ul>\n<li>la présence et le <strong>freinage</strong> de toutes les fixations (goupilles, écrous freinés, fil à freiner) ;</li>\n<li>le montage correct des pièces : sens des bielles, rondelles, position des câbles dans les gorges des poulies et sous les guide-câbles ;</li>\n<li>la <strong>liberté de mouvement</strong> sur toute la course, sans point dur ni interférence ;</li>\n<li>le <strong>sens de débattement</strong> : la gouverne bouge dans le bon sens pour une action donnée du pilote ou du calculateur ;</li>\n<li>les valeurs de réglage et les essais prescrits.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le contrôle du sens de débattement se fait en observant directement la gouverne, pas seulement l'affichage du poste, car un capteur de position inversé peut afficher le bon sens alors que la gouverne bouge à l'envers. L'inspecteur indépendant refait lui-même les vérifications : il ne se contente pas de lire les valeurs notées par l'exécutant.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une commande de vol déposée ou désaccouplée est signalée dans le poste et sur la carte de travail. La remise en service n'est possible que lorsque toutes les étapes ont été signées par l'exécutant et l'inspecteur indépendant, chacun pour ce qu'il a fait ou vérifié.</div>"
      }
     ],
     "points_cles": [
      "Commandes mécaniques, mécaniques assistées et électriques coexistent selon les avions",
      "Une servocommande associe distributeur et vérin dans un asservissement de position",
      "Le mode amorti évite le flottement d'une gouverne lorsque la servocommande est inactive",
      "Le vérin à vis du PHR exige lubrification et contrôle de jeu rigoureux",
      "Volets et becs sont surveillés contre l'asymétrie et protégés par freins et limiteurs de couple",
      "Neutre, débattements, butées, jeu et effort sont contrôlés après intervention",
      "La butée du poste est atteinte avant celle de la gouverne",
      "Sens de débattement observé sur la gouverne et inspection indépendante sont obligatoires"
     ],
     "lexique": [
      {
       "terme": "Servocommande",
       "def": "Vérin hydraulique piloté par un distributeur, qui déplace une gouverne selon un ordre de position."
      },
      {
       "terme": "Mode amorti",
       "def": "Mode d'une servocommande inactive qui suit la gouverne en amortissant ses mouvements."
      },
      {
       "terme": "Flottement",
       "def": "Vibration aéroélastique d'une surface, pouvant devenir divergente et destructrice."
      },
      {
       "terme": "EHA",
       "def": "Actionneur électrohydrostatique, intégrant sa propre pompe entraînée électriquement."
      },
      {
       "terme": "Vérin à vis à billes",
       "def": "Actionneur transformant une rotation en translation par une vis et un écrou à billes."
      },
      {
       "terme": "WTB",
       "def": "Frein de bout d'aile qui bloque la transmission des volets ou becs en cas d'anomalie."
      },
      {
       "terme": "Limiteur de couple",
       "def": "Dispositif qui limite le couple transmis pour protéger la structure en cas de blocage."
      },
      {
       "terme": "Débattement",
       "def": "Amplitude angulaire de déplacement d'une gouverne de part et d'autre du neutre."
      },
      {
       "terme": "Jeu (free play)",
       "def": "Déplacement possible d'une gouverne sous un faible effort, actionneur immobile."
      }
     ]
    },
    {
     "id": "baer-sy-mise-en-oeuvre",
     "titre": "Mise en œuvre de l'aéronef : énergies de parc, APU, moteurs et vérins",
     "niveau": "1re-Tle",
     "options": [
      "systemes"
     ],
     "duree": 40,
     "objectifs": [
      "Mettre un aéronef sous tension et en énergies à partir des moyens de parc en respectant les procédures",
      "Décrire le démarrage et la surveillance de l'APU",
      "Décrire la préparation et la conduite d'un démarrage et d'un point fixe moteur",
      "Préparer une mise sur vérins et une pesée",
      "Réaliser en sécurité un complément d'oxygène et d'autres servitudes"
     ],
     "sections": [
      {
       "titre": "Mettre en œuvre un aéronef : de quoi parle-t-on",
       "contenu": "<p>La <strong>mise en œuvre</strong> regroupe les opérations qui consistent à faire fonctionner l'aéronef ou ses systèmes au sol pour la maintenance ou pour le préparer à un vol : mise sous tension, mise en pression hydraulique, démarrage de l'APU et des moteurs, essais, déplacements, mise sur vérins, servitudes (fluides, gaz, eau). Le référentiel du bac pro en fait une compétence propre à l'option Systèmes.</p>\n<p>Ces opérations exposent à des risques importants : mouvements de gouvernes et de trains, souffle et aspiration des moteurs, hélices, rayonnements, haute pression, énergie électrique. Elles exigent toujours :</p>\n<ul>\n<li>une <strong>autorisation</strong> de l'organisme pour l'opération concernée (le démarrage moteur, par exemple, est réservé à des personnes formées et habilitées sur le type) ;</li>\n<li>l'application de la <strong>procédure</strong> du manuel de maintenance et des listes de vérification associées ;</li>\n<li>une <strong>communication</strong> établie entre le poste et l'extérieur ;</li>\n<li>la vérification de l'<strong>environnement</strong> : zone dégagée, extincteurs, protections retirées, personnel informé.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant d'actionner une commande au poste, on vérifie toujours la position réelle de l'élément commandé et la zone correspondante. Les accidents de maintenance au sol viennent souvent d'une commande manœuvrée alors qu'une personne travaillait dans la zone de débattement.</div>"
      },
      {
       "titre": "Énergies de parc et mise sous tension",
       "contenu": "<p>Au sol, moteurs arrêtés, l'avion reçoit ses énergies de moyens extérieurs ou de l'APU :</p>\n<table><thead><tr><th>Énergie</th><th>Moyen de parc</th><th>Caractéristiques</th></tr></thead><tbody>\n<tr><td>Électrique</td><td>Groupe de parc (GPU) ou alimentation fixe de la passerelle</td><td>115/200 V, 400 Hz triphasé pour les avions de transport ; 28 V continu pour certains avions</td></tr>\n<tr><td>Pneumatique</td><td>Groupe de démarrage à air (ASU)</td><td>Air comprimé pour le démarrage moteur et le conditionnement</td></tr>\n<tr><td>Conditionnement</td><td>Groupe de climatisation au sol (PCA)</td><td>Air préconditionné envoyé dans les gaines de l'avion</td></tr>\n<tr><td>Hydraulique</td><td>Groupe hydraulique de parc (banc)</td><td>Pression et débit réglables, fluide compatible et filtré</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mettre l'avion sous tension avec un groupe de parc. 1) Vérifier dans le poste que les commandes sont dans la position de sécurité prescrite (sélecteurs de train, essuie-glaces, radars, moteurs, pompes) et que les disjoncteurs étiquetés pour un travail en cours sont respectés. 2) Vérifier à l'extérieur que le groupe est conforme (tension, fréquence) et que son câble est en bon état. 3) Brancher la prise de parc, groupe arrêté ou sortie coupée, puis mettre le groupe en marche. 4) Au poste, contrôler les indications d'alimentation extérieure disponible (tension, fréquence, ordre des phases surveillé par l'avion), puis connecter l'alimentation au réseau de bord. 5) Vérifier la configuration des barres et l'absence d'alarme anormale. Pour la déconnexion, appliquer la séquence inverse : déconnexion au poste avant de couper le groupe et de retirer la prise.</div>\n<p>Avant de mettre sous tension, il faut aussi se demander quels systèmes vont se réveiller : ventilateurs, pompes, radars, sondes chauffées, moteurs électriques de commandes. Une personne qui travaille dans un logement ou une baie doit être prévenue.</p>"
      },
      {
       "titre": "L'APU",
       "contenu": "<p>L'<strong>APU</strong> (Auxiliary Power Unit) est une petite turbine à gaz, généralement installée dans le cône arrière du fuselage, isolée par une cloison pare-feu. Elle fournit au sol, et en vol en secours, de l'énergie électrique (générateur) et de l'air comprimé (compresseur de charge ou prélèvement), sans dépendre des moyens de parc.</p>\n<p>Son démarrage est automatique après une simple action au poste : ouverture de la trappe d'entrée d'air, alimentation en carburant, lancement par un démarreur électrique alimenté par les batteries ou le réseau, allumage, accélération jusqu'au régime nominal. Son calculateur de régulation (ECB) surveille le régime, la température des gaz et la pression d'huile, et commande l'arrêt automatique en cas d'anomalie ou d'incendie.</p>\n<p>L'APU dispose de son propre système de <strong>détection et d'extinction d'incendie</strong>, testable depuis le poste. Au sol, sur de nombreux avions, un incendie détecté provoque l'arrêt automatique de l'APU et le déclenchement d'une alarme extérieure ; l'extinction peut être commandée depuis le poste ou depuis un panneau extérieur près du train.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'utilisation de l'APU au sol est encadrée par les règles des aéroports, qui limitent sa durée de fonctionnement pour réduire bruit et émissions et imposent l'usage des moyens de parc lorsqu'ils sont disponibles. Le technicien vérifie ces règles locales avant de démarrer l'APU pour un essai.</div>"
      },
      {
       "titre": "Démarrage et point fixe moteur",
       "contenu": "<p>Le <strong>point fixe</strong> est un essai moteur au sol, avion immobile, réalisé après certaines interventions (remplacement de moteur ou d'équipements moteur, recherche de panne, contrôle de performances). Il est conduit par une personne habilitée au démarrage moteur sur le type, assistée d'un observateur extérieur.</p>\n<p>La préparation comprend :</p>\n<ul>\n<li>le choix de l'emplacement : aire de point fixe dédiée pour les régimes élevés, orientation face au vent si prescrit, zone arrière dégagée pour le souffle ;</li>\n<li>l'inspection des entrées d'air et des tuyères (absence de corps étrangers, protections retirées), et la vérification des capots fermés et verrouillés ;</li>\n<li>la mise en place de cales adaptées, la vérification de la pression de freinage, la présence d'un moyen d'extinction ;</li>\n<li>la vérification des niveaux (huile, hydraulique) et du carburant ;</li>\n<li>l'établissement de la communication par interphone avec l'observateur, et des signaux convenus en cas de perte de communication.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> surveiller un démarrage de turbomachine. 1) Lancer le démarrage selon la procédure (automatique ou manuelle). 2) Surveiller la montée de N2, puis l'allumage, puis l'apparition du débit carburant. 3) Vérifier la montée de l'EGT et de N1 et la pression d'huile dans le délai prescrit. 4) Interrompre le démarrage selon la procédure en cas de démarrage chaud (EGT qui approche la limite), de démarrage bloqué (régime qui ne progresse plus), d'absence d'allumage dans le délai, ou de signalement de feu ou de fuite par l'observateur. 5) Enregistrer les paramètres demandés par la tâche, puis respecter le temps de refroidissement avant l'arrêt et les délais avant une nouvelle tentative.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> pendant le point fixe, personne ne s'approche de l'entrée d'air ni de la zone arrière sans accord de l'opérateur au poste ; l'approche du moteur, si elle est nécessaire (recherche de fuite), se fait au ralenti, par les zones autorisées indiquées par le manuel, avec protection auditive.</div>"
      },
      {
       "titre": "Mise sur vérins, pesée et servitudes",
       "contenu": "<p>La <strong>mise sur vérins</strong> est nécessaire pour les essais de train, les remplacements d'éléments de train ou la pesée. Elle se fait aux <strong>points de levage</strong> prévus, équipés de tampons ou d'adaptateurs, avec des vérins de capacité adaptée, dans un hangar à l'abri du vent ou dans les limites de vent prescrites. Les vérins sont manœuvrés simultanément pour garder l'avion de niveau, et leurs écrous de sécurité sont descendus au fur et à mesure. Le centre de gravité doit être dans les limites indiquées : un avion mal centré peut basculer sur sa queue.</p>\n<p>La <strong>pesée</strong> détermine la masse à vide et la position du centre de gravité. On utilise des plates-formes de pesée sous les roues ou des capteurs de force sur les vérins. L'avion est mis dans la configuration prescrite (fluides, équipements, mise de niveau à l'aide des repères de nivellement), et l'on relève les charges à chaque point pour calculer la masse et le centrage.</p>\n<p>Les <strong>servitudes</strong> comprennent aussi le remplissage des bouteilles ou du circuit d'<strong>oxygène</strong> d'équipage. L'oxygène sous pression au contact de graisses ou d'huiles peut provoquer un feu violent. On utilise des outils et des raccords dégraissés et réservés à l'oxygène, des mains propres et sans gras, on remplit lentement pour limiter l'échauffement, on interdit toute flamme dans la zone et on respecte les pressions de remplissage en fonction de la température.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la mise sur vérins, le point fixe, le remplissage d'oxygène et l'entrée en réservoir sont des opérations à haut risque : elles demandent une formation spécifique, une procédure suivie pas à pas et une équipe coordonnée. Elles ne s'improvisent jamais.</div>"
      }
     ],
     "points_cles": [
      "Mettre en œuvre un aéronef exige autorisation, procédure, communication et zone sécurisée",
      "GPU, ASU, PCA et groupe hydraulique fournissent les énergies de parc",
      "On vérifie la position des commandes et prévient le personnel avant toute mise sous tension",
      "L'APU fournit électricité et air comprimé et possède sa propre protection incendie",
      "Le point fixe se prépare : aire, FOD, cales, freins, extincteur, observateur",
      "Démarrage chaud, bloqué ou sans allumage impose l'interruption selon la procédure",
      "Mise sur vérins aux points prévus, vérins manœuvrés ensemble, écrous de sécurité descendus",
      "Oxygène : outils dégraissés, aucun corps gras, remplissage lent"
     ],
     "lexique": [
      {
       "terme": "Mise en œuvre",
       "def": "Ensemble des opérations qui font fonctionner l'aéronef ou ses systèmes au sol."
      },
      {
       "terme": "GPU",
       "def": "Groupe électrique de parc alimentant l'avion au sol."
      },
      {
       "terme": "APU",
       "def": "Groupe auxiliaire de puissance : petite turbine fournissant électricité et air comprimé."
      },
      {
       "terme": "Point fixe",
       "def": "Essai d'un moteur en fonctionnement au sol, avion immobilisé."
      },
      {
       "terme": "Démarrage chaud",
       "def": "Démarrage au cours duquel la température des gaz approche ou dépasse sa limite."
      },
      {
       "terme": "Démarrage bloqué",
       "def": "Démarrage au cours duquel le régime cesse de progresser avant le ralenti."
      },
      {
       "terme": "Point de levage",
       "def": "Point renforcé de la structure prévu pour recevoir un vérin."
      },
      {
       "terme": "Pesée",
       "def": "Mesure de la masse à vide et de la position du centre de gravité de l'aéronef."
      },
      {
       "terme": "Écrou de sécurité de vérin",
       "def": "Écrou qui suit la tige du vérin et retient la charge en cas de perte de pression."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 7 — Option Structure",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "baer-st-conception-structure",
     "titre": "Conception et repérage de la structure d'un aéronef",
     "niveau": "1re",
     "options": [
      "structure"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire la constitution d'une structure semi-monocoque et le rôle de chaque élément",
      "Expliquer le cheminement des efforts dans le fuselage et la voilure",
      "Distinguer les philosophies de conception : vie sûre, sûreté intégrée, tolérance aux dommages",
      "Identifier les éléments structuraux principaux et leur classement",
      "Localiser un élément à l'aide des stations, plans de référence, zones et repères de lisses et de cadres"
     ],
     "sections": [
      {
       "titre": "La structure semi-monocoque",
       "contenu": "<p>La structure de la plupart des avions est de type <strong>semi-monocoque</strong> : un <strong>revêtement</strong> mince, qui assure la forme aérodynamique et travaille lui-même, est raidi par une ossature d'éléments longitudinaux et transversaux.</p>\n<table><thead><tr><th>Partie</th><th>Éléments longitudinaux</th><th>Éléments transversaux</th></tr></thead><tbody>\n<tr><td>Fuselage</td><td><strong>Lisses</strong> (raidisseurs) et longerons de fuselage</td><td><strong>Cadres</strong> et cloisons (dont les cloisons étanches de pressurisation)</td></tr>\n<tr><td>Voilure</td><td><strong>Longerons</strong> avant et arrière, lisses d'extrados et d'intrados</td><td><strong>Nervures</strong></td></tr>\n<tr><td>Empennages</td><td>Longerons, lisses</td><td>Nervures</td></tr>\n</tbody></table>\n<p>Le <strong>caisson</strong> de voilure, fermé par les deux longerons et les revêtements d'extrados et d'intrados, est la pièce maîtresse de l'aile : il reprend la flexion et la torsion et sert de réservoir de carburant. Les <strong>ferrures</strong> (pièces massives usinées) assurent les liaisons concentrées : attaches voilure-fuselage, attaches de mâts moteurs, de trains, de gouvernes.</p>\n<p>Le plancher (traverses et rails de sièges), les encadrements de portes et de hublots (renforcés, car l'ouverture interrompt le revêtement et les lisses) et la <strong>quille</strong> sous le caisson central complètent la structure du fuselage.</p>\n<p>Sur les avions récents, une grande partie de cette structure est réalisée en <strong>composite</strong> : revêtements de fuselage et de voilure en carbone, parfois tronçons de fuselage enroulés d'une seule pièce, lisses co-cuites avec le revêtement. Le principe semi-monocoque demeure, mais les assemblages comportent moins de fixations, et les réparations obéissent à d'autres règles que celles des structures métalliques.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans une structure semi-monocoque, chaque élément participe à la résistance de l'ensemble. Un revêtement percé, une lisse coupée ou une nervure fissurée ne constituent pas un dommage « local » : ils modifient le cheminement des efforts dans toute la zone.</div>"
      },
      {
       "titre": "Le cheminement des efforts",
       "contenu": "<p>Comprendre comment les efforts circulent permet de juger l'importance d'un dommage et la logique d'une réparation.</p>\n<ul>\n<li>Dans l'<strong>aile</strong>, la portance répartie sur les revêtements est transmise aux nervures, puis aux longerons et au caisson, qui travaillent comme une poutre encastrée dans le fuselage. En vol, l'extrados est comprimé et l'intrados tendu ; le moment de torsion est repris par le caisson fermé.</li>\n<li>Dans le <strong>fuselage</strong>, la flexion due aux masses et aux empennages est reprise par les lisses et le revêtement (comme une poutre creuse) ; le cisaillement par le revêtement ; la <strong>pressurisation</strong> met le revêtement en tension circonférentielle et longitudinale, à la manière d'une bouteille sous pression.</li>\n<li>Les efforts concentrés (trains, moteurs) arrivent par les ferrures et sont diffusés progressivement dans la structure par des renforts.</li>\n</ul>\n<p>Les contraintes de pressurisation se calculent simplement pour un cylindre mince : la contrainte circonférentielle vaut σ = p × R / e, où p est la pression différentielle, R le rayon et e l'épaisseur du revêtement. C'est deux fois la contrainte longitudinale. Voilà pourquoi les criques de fatigue liées à la pressurisation sont souvent longitudinales, le long des rangées de rivets des jonctions de revêtement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer la contrainte de pressurisation dans un revêtement. Données : rayon du fuselage 1,95 m, épaisseur 1,6 mm, pression différentielle 0,55 bar. 1) Convertir : p = 0,55 × 10<sup>5</sup> = 55 000 Pa ; R = 1 950 mm ; e = 1,6 mm. 2) Calculer : σ = 55 000 × 1 950 / 1,6 ≈ 67 000 000 Pa, soit environ 67 MPa. 3) Comparer : c'est nettement inférieur à la limite élastique d'un 2024-T3, mais cette contrainte est appliquée et relâchée à chaque vol, ce qui en fait une source majeure de fatigue, aggravée localement autour des trous de fixations.</div>"
      },
      {
       "titre": "Philosophies de conception",
       "contenu": "<p>Trois approches de conception structurale coexistent, et chacune conditionne les tâches d'entretien.</p>\n<table><thead><tr><th>Approche</th><th>Principe</th><th>Conséquence en maintenance</th></tr></thead><tbody>\n<tr><td><strong>Vie sûre</strong> (safe life)</td><td>La pièce est conçue pour ne pas se rompre pendant une durée définie, avec une marge</td><td>Retrait obligatoire à la limite de vie (trains, certaines ferrures)</td></tr>\n<tr><td><strong>Sûreté intégrée</strong> (fail safe)</td><td>La structure comporte des chemins d'efforts multiples ; si un élément rompt, les autres reprennent la charge</td><td>Inspections pour détecter l'élément rompu avant la rupture d'un second</td></tr>\n<tr><td><strong>Tolérance aux dommages</strong> (damage tolerance)</td><td>Une crique peut exister, mais sa propagation est lente et elle sera détectée par les inspections avant d'atteindre une taille critique</td><td>Programme d'inspections structurales calculées (méthode, zone, intervalle)</td></tr>\n</tbody></table>\n<p>Les avions de transport sont aujourd'hui conçus essentiellement en tolérance aux dommages, avec des pièces en vie sûre lorsque l'inspection n'est pas praticable. Le constructeur définit en plus, pour les avions vieillissants, des programmes complémentaires : inspections de structure supplémentaires, prévention et contrôle de la corrosion, évaluation des réparations existantes, limite de validité du programme au-delà de laquelle l'avion ne peut plus voler sans nouvelles données.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une réparation modifie le comportement en fatigue de la zone et peut masquer une zone à inspecter. C'est pourquoi les réparations des avions de transport sont évaluées en tolérance aux dommages et peuvent comporter leurs propres inspections, à intégrer au programme d'entretien.</div>"
      },
      {
       "titre": "Classement des éléments structuraux",
       "contenu": "<p>Tous les éléments de structure n'ont pas la même importance pour la sécurité. Le constructeur les classe, et ce classement apparaît dans les manuels de réparation et dans le programme d'entretien.</p>\n<ul>\n<li>Les <strong>éléments structuraux principaux</strong> (PSE) contribuent de manière significative à la reprise des charges de vol, au sol ou de pressurisation, et leur défaillance pourrait entraîner une défaillance catastrophique de l'aéronef : longerons, revêtements de caisson, cadres de fuselage, ferrures de liaison.</li>\n<li>Les <strong>éléments structuraux significatifs</strong> (SSI) sont les éléments ou zones retenus pour les tâches d'inspection structurale du programme, en raison de leur sensibilité à la fatigue, à la corrosion ou aux dommages accidentels.</li>\n<li>Les <strong>structures secondaires</strong> (carénages, capotages, planchers non structuraux, aménagements) ne participent pas à la tenue principale, mais leur perte en vol peut causer des dommages (ingestion par un moteur, choc sur l'empennage).</li>\n</ul>\n<p>Le manuel de réparation précise pour chaque zone la classification et parfois des limites particulières : certaines zones n'admettent aucune réparation sans accord du constructeur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un hangar de visite lourde, les cartes d'inspection structurale indiquent la zone, l'élément, le niveau d'inspection et la méthode. Le technicien structure doit savoir passer de la carte au manuel de réparation pour savoir si un dommage trouvé est admissible, réparable selon une réparation type, ou s'il faut demander une réparation spécifique.</div>"
      },
      {
       "titre": "Se repérer sur la structure",
       "contenu": "<p>Pour décrire un dommage ou retrouver une réparation, il faut un système de repérage précis, défini par le constructeur.</p>\n<table><thead><tr><th>Repère</th><th>Définition</th></tr></thead><tbody>\n<tr><td>Station de fuselage (STA ou FS)</td><td>Distance longitudinale, mesurée depuis un plan de référence situé en avant du nez, en pouces ou en millimètres</td></tr>\n<tr><td>Ligne d'eau (WL)</td><td>Hauteur au-dessus d'un plan horizontal de référence</td></tr>\n<tr><td>Ligne de flanc (BL)</td><td>Distance latérale par rapport au plan de symétrie de l'avion</td></tr>\n<tr><td>Station de voilure (WS)</td><td>Distance le long de l'envergure, depuis une référence définie</td></tr>\n<tr><td>Numéro de cadre et de lisse</td><td>Numérotation des cadres de l'avant vers l'arrière et des lisses depuis l'axe supérieur ou inférieur, de chaque côté</td></tr>\n<tr><td>Zone et panneau d'accès</td><td>Découpage normalisé de l'avion en zones numérotées (par trois chiffres), et numérotation des panneaux d'accès par zone</td></tr>\n</tbody></table>\n<p>Le découpage en zones suit une convention commune : le premier chiffre indique une grande zone (par exemple fuselage inférieur, fuselage supérieur, empennages, groupes motopropulseurs, voilure gauche ou droite, trains, portes), les suivants des sous-zones. Les panneaux d'accès portent le numéro de leur zone complété de lettres.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> localiser un dommage sur le fuselage pour un rapport. 1) Repérer les cadres encadrant le dommage en comptant à partir d'une référence connue (porte, cadre numéroté sur la structure) ou à l'aide des marquages internes. 2) Repérer les lisses au-dessus et au-dessous. 3) Mesurer la distance du centre du dommage au cadre et à la lisse les plus proches. 4) Indiquer le côté (gauche ou droit vu du poste). 5) Rédiger : « Fuselage côté gauche, entre cadres 40 et 41, à 120 mm en arrière du cadre 40, entre lisses 22 et 23, à 35 mm au-dessus de la lisse 23 ». 6) Compléter par la station correspondante lue sur les figures du manuel de réparation.</div>"
      }
     ],
     "points_cles": [
      "Semi-monocoque : revêtement travaillant raidi par lisses, cadres, longerons et nervures",
      "Le caisson de voilure reprend flexion et torsion et sert de réservoir",
      "En vol, extrados comprimé, intrados tendu ; la pressurisation tend le revêtement du fuselage",
      "Contrainte circonférentielle d'un fuselage pressurisé : σ = p × R / e",
      "Vie sûre, sûreté intégrée et tolérance aux dommages conditionnent l'entretien",
      "Les PSE sont les éléments dont la défaillance serait catastrophique",
      "Stations, lignes d'eau, lignes de flanc, cadres, lisses et zones localisent tout point",
      "Gauche et droite s'entendent vus du poste de pilotage"
     ],
     "lexique": [
      {
       "terme": "Semi-monocoque",
       "def": "Structure dont le revêtement travaillant est raidi par une ossature longitudinale et transversale."
      },
      {
       "terme": "Lisse",
       "def": "Raidisseur longitudinal du revêtement de fuselage ou de voilure."
      },
      {
       "terme": "Cadre",
       "def": "Élément transversal de forme du fuselage."
      },
      {
       "terme": "Nervure",
       "def": "Élément transversal de la voilure qui donne le profil et transmet les efforts aux longerons."
      },
      {
       "terme": "Caisson de voilure",
       "def": "Structure fermée formée par les longerons et les revêtements, cœur résistant de l'aile."
      },
      {
       "terme": "Tolérance aux dommages",
       "def": "Conception admettant une crique à propagation lente détectable par inspection avant rupture."
      },
      {
       "terme": "Sûreté intégrée",
       "def": "Conception à chemins d'efforts multiples, tolérante à la rupture d'un élément."
      },
      {
       "terme": "PSE",
       "def": "Élément structural principal, dont la défaillance pourrait être catastrophique."
      },
      {
       "terme": "Station",
       "def": "Coordonnée longitudinale d'un point du fuselage par rapport à un plan de référence."
      },
      {
       "terme": "Zone",
       "def": "Partie de l'avion désignée par un numéro normalisé, servant à localiser équipements et inspections."
      }
     ]
    },
    {
     "id": "baer-st-reparations-metalliques",
     "titre": "Réparation des structures métalliques",
     "niveau": "1re-Tle",
     "options": [
      "structure"
     ],
     "duree": 45,
     "objectifs": [
      "Évaluer un dommage de structure métallique et choisir le traitement prévu par le manuel",
      "Réaliser un adoucissement de rayure ou de corrosion dans les limites admissibles",
      "Décrire la constitution d'une réparation par doublure et ses règles de rivetage",
      "Calculer un nombre de fixations et une implantation (pince, pas, rangées)",
      "Déposer et poser des fixations sans dégrader la structure"
     ],
     "sections": [
      {
       "titre": "De la découverte du dommage à la décision",
       "contenu": "<p>Un dommage de structure (rayure, entaille, enfoncement, crique, corrosion, trou) est d'abord <strong>caractérisé</strong> : localisation précise, nature, dimensions (longueur, largeur, profondeur), distance aux fixations et aux bords, état des éléments voisins. Le nettoyage de la zone et parfois l'élimination locale de la peinture sont nécessaires pour voir l'étendue réelle ; un contrôle non destructif peut être demandé pour vérifier l'absence de crique.</p>\n<p>Le dommage est ensuite comparé aux données du <strong>manuel de réparation structurale</strong> du constructeur, qui définit pour chaque élément et chaque zone :</p>\n<table><thead><tr><th>Catégorie</th><th>Décision</th></tr></thead><tbody>\n<tr><td>Dommage admissible</td><td>Aucune réparation structurale ; éventuellement adoucissement et protection, avec ou sans inspection ultérieure</td></tr>\n<tr><td>Dommage réparable par une réparation type</td><td>Application d'une réparation décrite dans le manuel (doublure, insertion, remplacement partiel)</td></tr>\n<tr><td>Dommage hors limites</td><td>Demande d'une réparation spécifique approuvée au constructeur ou à un organisme de conception, ou remplacement de l'élément</td></tr>\n</tbody></table>\n<p>Certaines réparations sont permanentes ; d'autres sont <strong>temporaires</strong> ou s'accompagnent d'<strong>inspections supplémentaires</strong> à intégrer au programme d'entretien, avec un délai de remplacement par une réparation définitive.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la question n'est jamais « est-ce que je sais réparer ? », mais « quelle donnée approuvée me permet de réparer ce dommage, à cet endroit ? ». Sans donnée applicable, on ne répare pas : on demande.</div>"
      },
      {
       "titre": "Adoucissement des rayures et élimination de la corrosion",
       "contenu": "<p>Une rayure, une entaille ou une piqûre de corrosion crée une concentration de contrainte. Lorsque le manuel l'autorise, on les élimine par <strong>adoucissement</strong> (blend-out) : on enlève la matière endommagée et on raccorde la zone par une forme douce, sans angle vif, avec un rapport longueur / profondeur imposé (souvent de l'ordre de 10 pour 1 ou davantage, selon le manuel), et un état de surface fin.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> adoucir une rayure sur un revêtement. 1) Mesurer l'épaisseur nominale du revêtement (donnée du manuel ou mesure par ultrasons) et la profondeur de la rayure (comparateur à pointe). 2) Vérifier que la profondeur après adoucissement restera dans la limite admissible pour la zone (par exemple un pourcentage de l'épaisseur) et que la distance aux fixations est respectée. 3) Éliminer la rayure avec les abrasifs prescrits, en suivant son sens, jusqu'à disparition complète du fond de rayure, en vérifiant à la loupe. 4) Raccorder avec le rapport longueur / profondeur imposé. 5) Mesurer la profondeur finale et l'enregistrer. 6) Contrôler l'absence de crique résiduelle si la tâche l'exige (ressuage ou courants de Foucault). 7) Restaurer la protection : traitement de conversion, primaire, peinture.</div>\n<p>Pour la <strong>corrosion</strong>, le principe est le même : on élimine tous les produits de corrosion jusqu'au métal sain, puis on mesure l'épaisseur restante. Il ne faut ni laisser de corrosion (elle reprendrait sous la peinture), ni enlever plus de matière que nécessaire. Les outils abrasifs ne doivent pas être mélangés entre métaux (un abrasif ayant servi sur l'acier incruste des particules qui corrodent l'aluminium).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un revêtement plaqué (clad), l'adoucissement enlève la couche d'aluminium pur protectrice. La zone doit recevoir une protection de remplacement, et certaines zones fixent des limites d'enlèvement plus strictes pour cette raison.</div>"
      },
      {
       "titre": "Constitution d'une réparation par doublure",
       "contenu": "<p>Lorsqu'un élément est trop endommagé, on découpe la partie atteinte et on rétablit la continuité des efforts par une pièce rapportée. La réparation la plus courante sur un revêtement est la <strong>doublure</strong> (doubler) : une pièce de tôle, souvent d'épaisseur égale ou supérieure au revêtement et du même alliage, rivetée autour de la découpe. Selon les exigences aérodynamiques, la doublure est externe (en saillie, bords chanfreinés) ou interne avec une <strong>pièce de remplissage</strong> (filler) qui comble la découpe pour rendre la surface affleurante.</p>\n<p>Les principes de conception d'une réparation type sont les suivants :</p>\n<ul>\n<li>la découpe est de forme arrondie ou à angles largement rayonnés, pour éviter les concentrations de contraintes ;</li>\n<li>la réparation doit rétablir la résistance sans être excessivement plus rigide que la structure d'origine, car une rigidité excessive attire les efforts et crée de nouvelles zones de fatigue ;</li>\n<li>les fixations sont réparties de manière à transmettre progressivement les efforts, souvent sur plusieurs rangées ;</li>\n<li>les matériaux, épaisseurs et fixations sont ceux du manuel ;</li>\n<li>la protection contre la corrosion est restaurée : traitement de surface des pièces, mastic d'interposition entre la doublure et le revêtement, fixations posées humides au mastic.</li>\n</ul>\n<p>Sur une lisse ou un cadre, la réparation type est une <strong>éclisse</strong> (splice) : un profilé de même section ou plus épais, fixé de part et d'autre de la partie endommagée ou remplacée, avec un nombre défini de fixations de chaque côté.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les pièces de réparation sont souvent fabriquées sur place : découpe, détourage, ébavurage, mise en forme, perçage. Chaque pièce fabriquée porte une identification et sa traçabilité (matière, certificat, opérateur) est conservée dans le dossier de réparation.</div>"
      },
      {
       "titre": "Implantation des fixations et calcul",
       "contenu": "<p>L'implantation des fixations respecte des règles géométriques données par le manuel. Les valeurs couramment rencontrées sont :</p>\n<table><thead><tr><th>Grandeur</th><th>Définition</th><th>Valeur courante (à vérifier dans le manuel)</th></tr></thead><tbody>\n<tr><td>Pince (edge distance)</td><td>Distance entre l'axe d'une fixation et le bord de la tôle</td><td>Au moins 2 D (D = diamètre de la fixation)</td></tr>\n<tr><td>Pas (pitch)</td><td>Distance entre axes de deux fixations d'une même rangée</td><td>Au moins 4 D, souvent 4 à 8 D</td></tr>\n<tr><td>Pas transversal</td><td>Distance entre deux rangées</td><td>Environ 3 à 4 D, rangées souvent en quinconce</td></tr>\n</tbody></table>\n<p>Le nombre de fixations est déterminé par l'effort à transmettre. Chaque fixation transmet un effort limité par la résistance au <strong>cisaillement</strong> de son fût et par la résistance à la <strong>pression diamétrale</strong> (matage) de la tôle sur le bord du trou ; on retient la plus faible des deux.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer le nombre de rivets d'une éclisse (exemple d'école ; en réparation réelle, le nombre est donné par le manuel). Données de l'exemple : tôle coupée de largeur 50 mm et d'épaisseur 1,6 mm, résistance de la tôle 440 MPa ; rivets de diamètre 4 mm dont la résistance admissible est donnée, pour l'exemple, à 2 900 N en cisaillement simple et 2 600 N en matage dans cette tôle. 1) Effort à transmettre : F = 50 × 1,6 × 440 = 35 200 N. 2) Effort admissible par rivet : on retient le plus faible, 2 600 N (matage). 3) Nombre de rivets de chaque côté de la coupure : 35 200 / 2 600 ≈ 13,5, arrondi à 14. 4) Implantation : sur deux rangées de 7, avec un pas d'au moins 4 D = 16 mm, une pince d'au moins 2 D = 8 mm, en quinconce. 5) Vérifier que la longueur d'éclisse obtenue est compatible avec l'environnement (cadres, autres fixations).</div>"
      },
      {
       "titre": "Déposer et poser les fixations",
       "contenu": "<p>La <strong>dépose d'un rivet</strong> se fait sans agrandir le trou : on pointe le centre de la tête, on perce la tête avec un foret de diamètre légèrement inférieur au fût, juste jusqu'à la base de la tête, on fait sauter la tête avec un chasse-goupille utilisé comme levier, puis on chasse le fût en soutenant la tôle par l'arrière. Un trou endommagé ou ovalisé impose une fixation de diamètre supérieur (<strong>surcote</strong>), si le manuel le permet et si la pince reste suffisante.</p>\n<p>La <strong>pose</strong> des rivets pleins suit des règles précises :</p>\n<ul>\n<li>la longueur du rivet est choisie selon l'épaisseur à serrer : la partie dépassante avant écrasement vaut environ 1,5 D ;</li>\n<li>la tête formée (bouterolle) doit avoir un diamètre d'environ 1,5 D et une hauteur d'environ 0,5 D, sans fissure ;</li>\n<li>les trous sont percés au diamètre prescrit, ébavurés, et fraisés à la bonne profondeur pour les rivets à tête fraisée, contrôlés au calibre ;</li>\n<li>les pièces sont maintenues serrées par des <strong>agrafes</strong> (clecos) pendant le perçage et le rivetage.</li>\n</ul>\n<p>D'autres fixations sont utilisées : <strong>boulons à collet serti</strong> (lockbolts), <strong>vis à collet frangible</strong> (type Hi-Lok, dont l'écrou se rompt au couple voulu), <strong>rivets aveugles</strong> structuraux posés d'un seul côté lorsque l'arrière est inaccessible. Chacune a son outillage, ses contrôles et ses conditions d'emploi.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les copeaux de perçage et les chutes de rivets tombés dans la structure sont des corps étrangers dangereux : ils peuvent bloquer une commande, endommager un câblage ou amorcer une corrosion. On protège les zones situées sous le travail, on aspire et l'on inspecte la zone avant fermeture.</div>"
      }
     ],
     "points_cles": [
      "Caractériser le dommage avant toute décision : nature, dimensions, position",
      "Dommage admissible, réparation type ou réparation spécifique selon le manuel",
      "L'adoucissement élimine totalement le défaut avec un raccordement doux et une profondeur limitée",
      "Une réparation rétablit la résistance sans rigidité excessive",
      "Pince d'au moins 2 D, pas d'au moins 4 D, valeurs à confirmer dans le manuel",
      "Effort admissible par fixation : le plus faible du cisaillement et du matage",
      "Dépose d'un rivet sans agrandir le trou ; surcote seulement si autorisée",
      "Tête formée d'environ 1,5 D de diamètre et 0,5 D de hauteur",
      "Copeaux et chutes de fixations doivent être éliminés avant fermeture"
     ],
     "lexique": [
      {
       "terme": "Adoucissement",
       "def": "Élimination d'un défaut superficiel par enlèvement de matière avec un raccordement progressif."
      },
      {
       "terme": "Doublure",
       "def": "Pièce de tôle rivetée autour d'une découpe pour rétablir la résistance d'un revêtement."
      },
      {
       "terme": "Pièce de remplissage",
       "def": "Pièce comblant une découpe pour rendre une réparation affleurante."
      },
      {
       "terme": "Éclisse",
       "def": "Profilé de réparation reliant deux tronçons d'une lisse, d'un cadre ou d'un longeron."
      },
      {
       "terme": "Pince",
       "def": "Distance entre l'axe d'une fixation et le bord de la pièce."
      },
      {
       "terme": "Pas",
       "def": "Distance entre les axes de deux fixations voisines d'une même rangée."
      },
      {
       "terme": "Matage",
       "def": "Écrasement du bord d'un trou sous la pression de la fixation."
      },
      {
       "terme": "Surcote",
       "def": "Fixation de diamètre supérieur au diamètre nominal, utilisée pour reprendre un trou endommagé."
      },
      {
       "terme": "Agrafe (cleco)",
       "def": "Fixation provisoire maintenant les pièces serrées pendant le perçage et le rivetage."
      },
      {
       "terme": "Rivet aveugle",
       "def": "Rivet posé d'un seul côté de l'assemblage."
      }
     ]
    },
    {
     "id": "baer-st-reparations-composites",
     "titre": "Fabrication et réparation des structures composites",
     "niveau": "Tle",
     "options": [
      "structure"
     ],
     "duree": 45,
     "objectifs": [
      "Décrire les constituants des composites aéronautiques : fibres, matrices, âmes, préimprégnés",
      "Décrire les procédés de mise en œuvre : stratification, moulage sous vide, cuisson",
      "Évaluer un dommage sur stratifié ou sandwich et choisir le type de réparation",
      "Décrire les étapes d'une réparation collée par biseautage et sa cuisson contrôlée",
      "Appliquer les règles d'hygiène, de sécurité et de traçabilité propres aux composites"
     ],
     "sections": [
      {
       "titre": "Les constituants des composites",
       "contenu": "<p>Un <strong>matériau composite</strong> associe des <strong>fibres</strong>, qui apportent la résistance et la rigidité, et une <strong>matrice</strong>, qui lie les fibres, leur transmet les efforts et les protège.</p>\n<table><thead><tr><th>Fibre</th><th>Qualités</th><th>Emplois</th></tr></thead><tbody>\n<tr><td>Carbone</td><td>Très rigide et résistante, légère, conductrice</td><td>Structures primaires : caissons, revêtements, gouvernes</td></tr>\n<tr><td>Verre</td><td>Bon marché, isolante, transparente aux ondes radio</td><td>Radômes, carénages, structures secondaires</td></tr>\n<tr><td>Aramide</td><td>Très résistante aux chocs, légère</td><td>Carénages, protections, blindages</td></tr>\n</tbody></table>\n<p>Les matrices sont le plus souvent des <strong>résines thermodurcissables</strong> (époxydes surtout), qui durcissent de façon irréversible par polymérisation sous l'effet de la chaleur ou d'un durcisseur ; les résines thermoplastiques se développent aussi. Les fibres sont utilisées sous forme de nappes unidirectionnelles ou de <strong>tissus</strong> (taffetas, satin), soit sèches, soit déjà imprégnées de résine : ce sont les <strong>préimprégnés</strong>, stockés au congélateur et dotés d'une durée de vie limitée hors du froid.</p>\n<p>Les structures <strong>sandwich</strong> associent deux peaux minces en composite à une <strong>âme</strong> légère (nid d'abeilles en aramide imprégné ou en aluminium, mousse) : elles sont très rigides en flexion pour une masse faible, et utilisées pour les gouvernes, les planchers, les carénages et les capots.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un stratifié est défini par la nature de chaque pli, son orientation (0°, +45°, -45°, 90°) et l'ordre d'empilement. Une réparation doit reproduire cette définition pli par pli : c'est l'information centrale de toute réparation composite.</div>"
      },
      {
       "titre": "Procédés de mise en œuvre",
       "contenu": "<p>En production, les pièces sont fabriquées par <strong>drapage</strong> de plis préimprégnés sur un moule (manuel ou par machine de placement de fibres), puis cuisson en <strong>autoclave</strong> : une enceinte qui applique simultanément la température (souvent autour de 180 °C pour les structures primaires) et une pression de plusieurs bars, la pièce étant sous vide dans une poche. D'autres procédés existent : injection de résine dans des préformes sèches, enroulement filamentaire, cuisson hors autoclave.</p>\n<p>En réparation, on utilise principalement le <strong>moulage sous vide</strong> : l'empilement est recouvert de tissus d'arrachage, de films séparateurs, de tissus de drainage, puis d'une <strong>poche à vide</strong> étanchéifiée par un mastic de poche. Le vide applique la pression atmosphérique sur la réparation et extrait l'air et les volatils. La cuisson est assurée par une <strong>couverture chauffante</strong> pilotée par un <strong>contrôleur de cuisson</strong> (hot bonder) qui suit un cycle de température programmé, mesuré par des thermocouples.</p>\n<table><thead><tr><th>Couche de la poche à vide (de la pièce vers l'extérieur)</th><th>Rôle</th></tr></thead><tbody>\n<tr><td>Tissu d'arrachage</td><td>Laisse une surface propre et texturée après retrait</td></tr>\n<tr><td>Film séparateur (perforé ou non)</td><td>Empêche le collage et règle l'évacuation de la résine</td></tr>\n<tr><td>Tissu de drainage</td><td>Absorbe la résine en excès et répartit le vide</td></tr>\n<tr><td>Bâche à vide</td><td>Enveloppe étanche</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le cycle de cuisson est enregistré par le contrôleur et l'enregistrement est joint au dossier de réparation. Une cuisson hors des tolérances de température, de vitesse de montée ou de niveau de vide peut rendre la réparation non conforme, même si son aspect est parfait.</div>"
      },
      {
       "titre": "Évaluer un dommage composite",
       "contenu": "<p>Les dommages typiques des composites sont les impacts (grêle, chute d'outil, véhicule de piste), les rayures et érosions, les brûlures, la foudre, les délaminages et décollements, l'entrée d'eau dans les sandwichs. L'aspect extérieur est trompeur : un impact peu visible peut cacher un délaminage étendu.</p>\n<p>L'évaluation suit les étapes déjà vues pour les contrôles : délimitation de la zone par tapotement ou ultrasons, mesure de l'empreinte et de la zone délaminée, recherche d'humidité dans les âmes, puis comparaison aux limites du manuel de réparation, qui distinguent selon la zone :</p>\n<ul>\n<li>les dommages admissibles sans réparation, ou avec une simple protection (remise en peinture, scellement d'une rayure) ;</li>\n<li>les réparations <strong>non structurales</strong> ou cosmétiques (remplissage à la résine chargée) ;</li>\n<li>les réparations <strong>structurales collées</strong> (par biseautage ou par recouvrement) ;</li>\n<li>les réparations <strong>boulonnées</strong> par doublure métallique ou composite, utilisées notamment sur les structures épaisses ou pour un retour rapide en service ;</li>\n<li>les dommages hors limites, qui exigent l'avis du constructeur.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'eau piégée dans un nid d'abeilles gèle en altitude, augmente de volume et décolle progressivement les peaux. Une réparation de sandwich commence toujours par la recherche et l'élimination complète de l'humidité (séchage sous vide et chaleur selon la procédure), sans quoi la réparation elle-même se décollera.</div>"
      },
      {
       "titre": "La réparation collée par biseautage",
       "contenu": "<p>La réparation structurale collée la plus courante sur un stratifié est la réparation par <strong>biseautage</strong> (scarf repair) : on usine autour de la zone endommagée une cuvette en pente douce qui met à nu chaque pli sur une certaine largeur, puis on reconstitue les plis un par un, chaque pli de réparation recouvrant le pli d'origine correspondant.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déroulement d'une réparation par biseautage sur un stratifié carbone. 1) Délimiter la zone endommagée, puis la détourer et l'éliminer. 2) Usiner le biseau avec une ponceuse à faible vitesse selon le rapport de pente prescrit par le manuel (souvent de l'ordre de 1 pour 20 à 1 pour 50) ; chaque pli apparaît sous forme d'un anneau. 3) Relever l'orientation des plis d'origine sur le biseau et préparer les plis de réparation (même matériau, même orientation, tailles croissantes), plus un ou deux plis supplémentaires de recouvrement si prescrits. 4) Nettoyer au solvant prescrit et sécher la zone. 5) Mettre en place l'adhésif film si demandé, puis les plis dans l'ordre et l'orientation exacts. 6) Réaliser la poche à vide, poser les thermocouples et la couverture chauffante. 7) Appliquer le cycle de cuisson et l'enregistrer. 8) Après démoulage, contrôler la réparation (aspect, tapotement ou ultrasons selon la procédure), restaurer la protection foudre et la peinture. 9) Constituer le dossier : matériaux et lots, cycle de cuisson, contrôles, signatures.</div>\n<p>La réparation d'un <strong>sandwich</strong> ajoute des étapes : élimination de la peau et de l'âme endommagées, remplacement de l'âme par un bouchon de nid d'abeilles de même type, orienté comme l'âme d'origine, collé avec un adhésif moussant ou un adhésif de remplissage, puis reconstitution de la peau.</p>\n<p>La qualité du collage dépend avant tout de la <strong>préparation de surface</strong> : une empreinte de doigt, une trace de silicone ou d'agent démoulant suffisent à empêcher l'adhésion. Les gants sont obligatoires et les produits siliconés sont interdits dans l'atelier composite.</p>\n<p>Les structures en carbone sont protégées contre la <strong>foudre</strong> par une couche conductrice intégrée sous la peinture, le plus souvent un grillage ou une feuille de cuivre ou de bronze expansé. Une réparation qui traverse cette couche doit la reconstituer : on pose un morceau de grillage de même nature, en recouvrement sur le grillage existant d'une largeur prescrite, avec un adhésif ou une résine de liaison, puis on vérifie la continuité électrique lorsque la procédure le demande. Une réparation structurale parfaite mais dépourvue de protection foudre laisserait la zone vulnérable : un impact de foudre pourrait y provoquer un délaminage et des brûlures étendues.</p>"
      },
      {
       "titre": "Hygiène, sécurité et environnement de l'atelier",
       "contenu": "<p>Le travail des composites présente des risques spécifiques pour la santé :</p>\n<ul>\n<li>les <strong>poussières de ponçage</strong> de carbone et de verre sont irritantes pour la peau, les yeux et les voies respiratoires ; le ponçage se fait avec aspiration à la source, protection respiratoire adaptée, lunettes et vêtements couvrants ;</li>\n<li>les poussières de carbone sont conductrices et peuvent provoquer des courts-circuits dans les équipements électriques ;</li>\n<li>les <strong>résines</strong> et leurs durcisseurs sont sensibilisants : un contact répété peut provoquer des allergies cutanées durables ; on porte des gants adaptés aux produits (souvent en nitrile) ;</li>\n<li>les solvants de nettoyage sont inflammables et nocifs.</li>\n</ul>\n<p>L'atelier de réparation composite est maintenu dans des conditions contrôlées : température et hygrométrie suivies (elles influencent le collage et la polymérisation), propreté, séparation des zones de ponçage et de drapage, stockage frigorifique des préimprégnés et adhésifs avec suivi du temps cumulé hors congélateur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour une réparation composite, la traçabilité couvre les matériaux (référence, lot, date de péremption, temps hors froid), les conditions ambiantes, le cycle de cuisson et les contrôles. Sans ces enregistrements, la réparation ne peut pas être déclarée conforme.</div>"
      }
     ],
     "points_cles": [
      "Fibres de carbone, verre ou aramide dans une matrice, le plus souvent époxyde",
      "Un stratifié est défini par la nature, l'orientation et l'ordre de ses plis",
      "Les préimprégnés ont une durée de vie limitée hors du congélateur",
      "Réparation sous poche à vide et cuisson pilotée par un contrôleur enregistreur",
      "Un impact peu visible peut cacher un délaminage étendu",
      "L'humidité doit être éliminée d'un sandwich avant réparation",
      "Réparation par biseautage : reconstitution pli par pli avec le même matériau et la même orientation",
      "Préparation de surface, gants et absence de silicone conditionnent le collage",
      "Poussières et résines imposent aspiration, protections respiratoires et cutanées"
     ],
     "lexique": [
      {
       "terme": "Matrice",
       "def": "Résine qui lie les fibres d'un composite et leur transmet les efforts."
      },
      {
       "terme": "Préimprégné",
       "def": "Tissu ou nappe de fibres déjà imprégné de résine, stocké au froid."
      },
      {
       "terme": "Sandwich",
       "def": "Structure formée de deux peaux minces collées sur une âme légère."
      },
      {
       "terme": "Nid d'abeilles",
       "def": "Âme alvéolaire hexagonale utilisée dans les structures sandwich."
      },
      {
       "terme": "Autoclave",
       "def": "Enceinte de cuisson appliquant température et pression aux pièces composites."
      },
      {
       "terme": "Poche à vide",
       "def": "Enveloppe étanche permettant d'appliquer la pression atmosphérique sur une pièce pendant la cuisson."
      },
      {
       "terme": "Contrôleur de cuisson",
       "def": "Appareil pilotant et enregistrant le cycle de température et le vide d'une réparation."
      },
      {
       "terme": "Biseautage",
       "def": "Usinage en pente douce d'un stratifié pour mettre à nu chaque pli avant réparation."
      },
      {
       "terme": "Tissu d'arrachage",
       "def": "Tissu retiré après cuisson pour laisser une surface propre et prête au collage."
      }
     ]
    },
    {
     "id": "baer-st-protection-etancheite-peinture",
     "titre": "Protection des surfaces, étanchéité et peinture",
     "niveau": "1re",
     "options": [
      "structure"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire les traitements de surface des alliages légers et des aciers",
      "Choisir et appliquer un système de protection : conversion, primaire, finition",
      "Réaliser les différents types d'étanchéité au mastic selon leur fonction",
      "Décrire les opérations de décapage et de peinture et leurs contraintes",
      "Appliquer les règles de santé, de sécurité et d'environnement liées aux produits"
     ],
     "sections": [
      {
       "titre": "Un système de protection en couches",
       "contenu": "<p>La structure métallique d'un aéronef est protégée contre la corrosion par un <strong>système</strong> de couches successives, dont chacune a un rôle :</p>\n<table><thead><tr><th>Couche</th><th>Rôle</th><th>Exemples</th></tr></thead><tbody>\n<tr><td>Traitement de surface</td><td>Créer une couche protectrice et accrocheuse sur le métal</td><td>Placage, anodisation, conversion chimique, revêtements métalliques des aciers</td></tr>\n<tr><td>Primaire</td><td>Protéger contre la corrosion (inhibiteurs) et assurer l'adhérence</td><td>Primaires époxydes</td></tr>\n<tr><td>Finition</td><td>Résister aux intempéries, aux fluides et aux UV ; aspect et couleurs</td><td>Peintures polyuréthanes</td></tr>\n<tr><td>Produits complémentaires</td><td>Protéger les zones cachées et les interstices</td><td>Mastics, produits hydrofuges anticorrosion (CIC)</td></tr>\n</tbody></table>\n<p>La protection est dégradée par les rayures, les chocs, les fluides, l'usure des peintures et surtout les interventions : chaque perçage, chaque dépose de fixation ou de pièce interrompt le système. Toute réparation se termine donc par sa reconstitution complète, conformément au manuel de réparation et au chapitre des pratiques standard.</p>\n<p>Les zones intérieures difficiles d'accès et exposées à l'humidité (fonds de fuselage sous les offices et les toilettes, logements de train, jonctions de cadres) reçoivent en plus des <strong>produits inhibiteurs de corrosion</strong> (CIC) appliqués par pulvérisation : des produits fluides qui pénètrent dans les interstices et chassent l'eau, et des produits plus épais qui laissent un film protecteur cireux. Ces produits se dégradent et sont lessivés avec le temps : leur renouvellement fait partie du programme de prévention et de contrôle de la corrosion, et ils doivent être réappliqués après toute intervention qui les a éliminés. Ils ne doivent jamais être projetés sur les capteurs, les connecteurs, les câbles de commande ou les poulies, sauf indication contraire de la documentation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une réparation structurale parfaitement rivetée, mais dont les pièces n'ont pas été traitées ou ont été posées sans mastic, deviendra un point de corrosion. La protection fait partie de la réparation, elle n'est pas une finition facultative.</div>"
      },
      {
       "titre": "Les traitements de surface",
       "contenu": "<p>Les alliages d'aluminium reçoivent plusieurs types de traitements :</p>\n<ul>\n<li>l'<strong>anodisation</strong> : traitement électrochimique en atelier qui fait croître une couche d'oxyde dure et protectrice, à partir d'acides sulfurique, tartrique-sulfurique ou chromique ; elle est appliquée aux pièces détachées neuves ou démontées ;</li>\n<li>la <strong>conversion chimique</strong> : application d'une solution qui forme en quelques minutes une couche mince, souvent irisée ou jaune selon le produit ; elle se pratique sur l'avion, au pinceau ou au tampon, pour retoucher une zone mise à nu ;</li>\n<li>le <strong>placage</strong> des tôles, déjà évoqué, qui protège par une couche d'aluminium pur.</li>\n</ul>\n<p>Les aciers reçoivent des revêtements métalliques protecteurs (cadmium historiquement, remplacé de plus en plus par des alliages de zinc-nickel), des dépôts de chrome dur sur les tiges de vérins et les axes de train, ou des phosphatations. Les alliages de titane et les aciers inoxydables ne reçoivent généralement pas de traitement anticorrosion mais sont isolés des autres métaux.</p>\n<p>De nombreux traitements et primaires utilisaient des <strong>chromates</strong> (chrome hexavalent), très efficaces contre la corrosion mais cancérogènes. Leur utilisation est soumise en Europe à des restrictions et autorisations dans le cadre du règlement REACH, et l'industrie les remplace progressivement par des produits sans chrome hexavalent. Le technicien utilise les produits prescrits par la documentation en vigueur et applique strictement les mesures de protection.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> appliquer une conversion chimique sur une zone retouchée. 1) Vérifier le produit prescrit, son lot, sa date de péremption et sa fiche de données de sécurité. 2) Dégraisser la zone au solvant prescrit. 3) Désoxyder légèrement selon la procédure (abrasif non tissé ou désoxydant). 4) Vérifier la propreté par le test de continuité du film d'eau : l'eau doit former un film continu, sans gouttelettes. 5) Appliquer la solution en gardant la surface humide pendant le temps prescrit. 6) Rincer à l'eau propre et laisser sécher sans toucher. 7) Appliquer le primaire dans le délai maximal indiqué.</div>"
      },
      {
       "titre": "L'étanchéité au mastic",
       "contenu": "<p>Les <strong>mastics</strong> d'étanchéité aéronautiques (souvent à base de polysulfure ou de polythioéther) remplissent plusieurs fonctions : étanchéité au carburant des réservoirs structuraux, étanchéité à l'air de la cabine pressurisée, protection des interstices contre l'eau et la corrosion, lissage aérodynamique. Selon la fonction, on applique différents types d'étanchéité :</p>\n<table><thead><tr><th>Type</th><th>Description</th><th>Exemple</th></tr></thead><tbody>\n<tr><td>Étanchéité d'interposition</td><td>Couche de mastic entre deux pièces assemblées</td><td>Doublure posée sur un revêtement</td></tr>\n<tr><td>Cordon (congé)</td><td>Cordon déposé le long d'un bord d'assemblage</td><td>Jonction lisse-revêtement dans un réservoir</td></tr>\n<tr><td>Étanchéité des fixations</td><td>Fixation posée « humide », enduite de mastic, ou tête recouverte</td><td>Fixations de réservoir, fixations traversant une zone exposée</td></tr>\n<tr><td>Injection</td><td>Mastic injecté dans un canal ou un vide</td><td>Canaux d'étanchéité de certaines jonctions</td></tr>\n<tr><td>Lissage aérodynamique</td><td>Remplissage des interstices externes</td><td>Pourtour de panneaux et d'antennes</td></tr>\n</tbody></table>\n<p>Les mastics ont des caractéristiques précises : consistance adaptée au mode d'application, <strong>temps d'application</strong> après mélange, temps hors poisse, temps de polymérisation complète (fonction de la température et de l'humidité). Leur application exige des surfaces parfaitement propres et sèches, souvent un promoteur d'adhérence, et le respect des formes et dimensions de cordons prescrites.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remettre en carburant un réservoir avant la polymérisation complète du mastic, ou réaliser l'essai d'étanchéité trop tôt, conduit à des fuites et à la contamination du mastic par le carburant. Les délais du manuel et de la fiche technique du produit sont impératifs.</div>"
      },
      {
       "titre": "Décapage et peinture",
       "contenu": "<p>La peinture extérieure d'un avion est refaite périodiquement, en général tous les quelques années selon l'exploitation, et localement après chaque réparation. Une remise en peinture complète comprend :</p>\n<ol>\n<li>la <strong>protection</strong> des zones à ne pas atteindre : vitrages, sondes, prises statiques, antennes, joints, pièces composites sensibles, zones de commandes de vol ;</li>\n<li>le <strong>décapage</strong> : chimique (avec des décapants compatibles avec les matériaux), mécanique (ponçage, projection de médias plastiques) ou, de plus en plus, par procédés sans décapant agressif (ponçage de la seule couche de finition) ; les pièces composites ne supportent pas les décapants chimiques ordinaires ;</li>\n<li>l'<strong>inspection</strong> de la structure mise à nu, occasion unique de détecter corrosion et criques ;</li>\n<li>la <strong>préparation</strong> : traitement de conversion, nettoyage ;</li>\n<li>l'application du <strong>primaire</strong>, puis de la <strong>finition</strong> et des marquages (immatriculation, inscriptions réglementaires, marquages de sécurité), en cabine de peinture à température et hygrométrie contrôlées ;</li>\n<li>le retrait des protections et les contrôles : épaisseurs, adhérence, aspect, présence de tous les marquages réglementaires.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les surfaces de commandes de vol (gouvernes, compensateurs) sont souvent équilibrées en masse autour de leur charnière. Une remise en peinture modifie leur masse et leur équilibrage : la documentation impose alors une vérification ou un rééquilibrage de la gouverne avant remontage.</div>\n<p>Les marquages ont aussi une fonction de sécurité : flèches de zones de non-marche, repères d'issues de secours, inscriptions des points de levage, couleurs des tuyauteries. Leur absence ou leur erreur constitue une non-conformité.</p>"
      },
      {
       "titre": "Santé, sécurité et environnement",
       "contenu": "<p>Les produits utilisés pour la protection et la peinture comptent parmi les plus dangereux de l'atelier :</p>\n<ul>\n<li>les <strong>isocyanates</strong> des peintures polyuréthanes sont de puissants sensibilisants respiratoires ; leur application par pulvérisation exige une cabine ventilée et une protection respiratoire à adduction d'air ;</li>\n<li>les <strong>chromates</strong> sont cancérogènes ; leur poussière (ponçage de primaires anciens) est aussi dangereuse que le produit liquide ;</li>\n<li>les <strong>solvants</strong> sont inflammables et nocifs ; leurs vapeurs imposent ventilation et interdiction des sources d'ignition ;</li>\n<li>les <strong>décapants</strong> chimiques sont corrosifs pour la peau et les yeux.</li>\n</ul>\n<p>La lecture de la <strong>fiche de données de sécurité</strong> précède l'utilisation : pictogrammes, mentions de danger, équipements de protection, stockage, conduite à tenir en cas d'accident. Les déchets (chiffons souillés, restes de produits, eaux de décapage, médias usés) sont triés et éliminés par des filières agréées, car ils contiennent des métaux lourds et des solvants.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un masque à cartouche filtrante ne protège pas correctement contre les isocyanates en pulvérisation ; seule la protection prescrite par l'évaluation des risques de l'entreprise doit être utilisée. Les signes d'une sensibilisation (toux, gêne respiratoire, eczéma) doivent être signalés au médecin du travail.</div>"
      }
     ],
     "points_cles": [
      "La protection est un système : traitement de surface, primaire, finition, produits complémentaires",
      "Toute réparation se termine par la reconstitution complète de la protection",
      "Anodisation en atelier, conversion chimique sur avion pour les retouches",
      "Les procédés aux chromates sont encadrés par REACH et remplacés progressivement",
      "Interposition, cordon, fixations humides, injection et lissage : des étanchéités aux fonctions différentes",
      "Temps d'application et de polymérisation des mastics sont impératifs",
      "La remise en peinture impose la vérification de l'équilibrage des gouvernes",
      "Isocyanates, chromates, solvants et décapants exigent des protections adaptées"
     ],
     "lexique": [
      {
       "terme": "Anodisation",
       "def": "Traitement électrochimique créant une couche d'oxyde protectrice sur l'aluminium."
      },
      {
       "terme": "Conversion chimique",
       "def": "Traitement formant une couche mince protectrice et accrocheuse sur l'aluminium, applicable sur avion."
      },
      {
       "terme": "Primaire",
       "def": "Première couche de peinture, inhibitrice de corrosion et support d'adhérence."
      },
      {
       "terme": "Finition",
       "def": "Couche extérieure de peinture assurant la résistance aux intempéries et l'aspect."
      },
      {
       "terme": "Étanchéité d'interposition",
       "def": "Couche de mastic placée entre deux pièces avant leur assemblage."
      },
      {
       "terme": "Temps d'application",
       "def": "Durée pendant laquelle un mastic mélangé reste utilisable."
      },
      {
       "terme": "Test du film d'eau",
       "def": "Contrôle de propreté d'une surface : l'eau doit former un film continu."
      },
      {
       "terme": "Isocyanates",
       "def": "Composants des peintures polyuréthanes, puissants sensibilisants respiratoires."
      },
      {
       "terme": "REACH",
       "def": "Règlement européen encadrant l'enregistrement, l'évaluation et l'autorisation des substances chimiques."
      },
      {
       "terme": "Équilibrage de gouverne",
       "def": "Répartition des masses d'une gouverne autour de sa charnière, à contrôler après peinture ou réparation."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 8 — Exploiter la documentation technique",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "baer-doc-tache-amm",
     "titre": "Exploiter une tâche du manuel de maintenance (AMM)",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Situer le manuel de maintenance dans l'ensemble de la documentation et retrouver une tâche par la numérotation ATA",
      "Identifier les rubriques d'une tâche et l'information que porte chacune",
      "Extraire d'une tâche les moyens à préparer : outillage, consommables, pièces, accès, configuration",
      "Repérer les avertissements, les valeurs à respecter et les étapes à enregistrer",
      "Produire une analyse écrite structurée d'une tâche, comme à l'épreuve d'exploitation de la documentation"
     ],
     "sections": [
      {
       "titre": "Le manuel de maintenance dans la documentation",
       "contenu": "<p>Le <strong>manuel de maintenance de l'aéronef</strong> (AMM : Aircraft Maintenance Manual) décrit les systèmes et la manière de les entretenir sur l'avion : descriptions et fonctionnement, opérations d'entretien courant, dépose et pose des équipements, réglages et essais, inspections, nettoyage. Il fait partie des <strong>données d'entretien</strong> du constructeur, à côté du catalogue des pièces, des manuels de câblage, du manuel de dépannage et du manuel de réparation structurale. Il est consulté sous forme électronique, et seule la <strong>révision en vigueur</strong> est utilisable.</p>\n<p>Le manuel est organisé selon la numérotation <strong>ATA</strong> (issue de la spécification ATA 100, reprise dans la spécification iSpec 2200) : un numéro en trois couples de chiffres désigne le <strong>chapitre</strong> (le système), la <strong>section</strong> (le sous-système) et le <strong>sujet</strong> (l'équipement ou l'élément).</p>\n<table><thead><tr><th>Chapitre ATA (exemples)</th><th>Système</th></tr></thead><tbody>\n<tr><td>21</td><td>Conditionnement d'air et pressurisation</td></tr>\n<tr><td>24</td><td>Production et distribution électrique</td></tr>\n<tr><td>27</td><td>Commandes de vol</td></tr>\n<tr><td>28</td><td>Carburant</td></tr>\n<tr><td>29</td><td>Hydraulique</td></tr>\n<tr><td>32</td><td>Train d'atterrissage</td></tr>\n<tr><td>34</td><td>Navigation</td></tr>\n<tr><td>52 à 57</td><td>Structure : portes, fuselage, nacelles, empennages, hublots, voilure</td></tr>\n<tr><td>71 à 80</td><td>Groupe motopropulseur</td></tr>\n</tbody></table>\n<p>Dans la présentation traditionnelle, chaque sujet est découpé en <strong>blocs de pages</strong> : description et fonctionnement, dépannage, pratiques de maintenance, entretien courant (servicing), dépose et pose, réglages et essais, inspections et contrôles, nettoyage et peinture, réparations approuvées. Dans les manuels récents, chaque <strong>tâche</strong> porte un numéro complet qui prolonge le numéro ATA par un code de fonction et un code de variante ; chez certains constructeurs, par exemple, le code de fonction 000 désigne une dépose et 400 une pose.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le numéro ATA permet de trouver l'information de la même façon sur tous les types d'aéronefs. Connaître les principaux chapitres fait gagner un temps considérable, à l'atelier comme à l'épreuve écrite.</div>"
      },
      {
       "titre": "La structure d'une tâche",
       "contenu": "<p>Une tâche de dépose, de pose ou d'essai est toujours construite selon le même schéma, que l'on retrouve d'un constructeur à l'autre avec quelques variations de présentation.</p>\n<table><thead><tr><th>Rubrique</th><th>Contenu</th><th>Ce qu'on en tire</th></tr></thead><tbody>\n<tr><td>Identification</td><td>Numéro de tâche, titre, applicabilité (effectivité)</td><td>La tâche concerne-t-elle cet avion et cette configuration ?</td></tr>\n<tr><td>Raison d'être, description</td><td>Objet de la tâche, éventuellement subtâches</td><td>Ce que la tâche couvre et ne couvre pas</td></tr>\n<tr><td>Données de référence</td><td>Autres tâches appelées (ouverture d'accès, mise en configuration, essais)</td><td>Les tâches à enchaîner</td></tr>\n<tr><td>Équipements et outillage</td><td>Outillage spécifique et standard, moyens de servitude</td><td>Ce qu'il faut sortir du magasin d'outillage</td></tr>\n<tr><td>Consommables</td><td>Produits avec leur référence</td><td>Fluides, mastics, fil à freiner, lubrifiants</td></tr>\n<tr><td>Pièces</td><td>Pièces à remplacer, avec renvoi au catalogue</td><td>Joints et pièces à usage unique à commander</td></tr>\n<tr><td>Zones et accès</td><td>Zones et panneaux à ouvrir</td><td>Préparation des accès</td></tr>\n<tr><td>Préparation</td><td>Mise en sécurité, disjoncteurs à ouvrir et étiqueter, configuration</td><td>État de l'avion avant l'intervention</td></tr>\n<tr><td>Procédure</td><td>Étapes numérotées, avec avertissements, couples, valeurs</td><td>Le déroulement</td></tr>\n<tr><td>Clôture</td><td>Essais, fermeture des accès, remise en configuration</td><td>Ce qui reste à faire avant de signer</td></tr>\n</tbody></table>\n<p>Les mentions <strong>WARNING</strong> (danger pour les personnes), <strong>CAUTION</strong> (risque pour le matériel) et <strong>NOTE</strong> (information) sont placées juste avant l'étape qu'elles concernent. Elles se lisent avant d'exécuter l'étape, jamais après.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'<strong>effectivité</strong> est le premier contrôle. Deux avions du même type peuvent avoir des équipements différents selon leurs modifications : la tâche applicable au numéro de série de l'avion n'est pas forcément la première trouvée. Un document imprimé hors système porte en général une date de validité ; au-delà, il doit être réimprimé.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<p>À l'atelier comme à l'épreuve écrite, l'exploitation d'une tâche suit une démarche constante.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une tâche du manuel de maintenance. 1) Identifier la tâche : numéro, titre, chapitre ATA et système concerné ; vérifier l'effectivité. 2) Lire la tâche en entier une première fois, sans rien noter, pour comprendre son objet. 3) Lister les moyens : outillage (en distinguant outillage spécifique et standard), consommables avec leur référence, pièces neuves obligatoires. 4) Lister les tâches appelées et les accès à ouvrir. 5) Décrire la mise en sécurité : disjoncteurs, désactivations, configuration. 6) Résumer les étapes principales de la procédure dans l'ordre, en relevant les valeurs (couples, cotes, pressions, temps) avec leurs unités. 7) Relever les WARNING et CAUTION et la raison de chacun. 8) Relever les essais de fin de tâche et les points à enregistrer ou à faire contrôler. 9) Rédiger la réponse en reprenant le vocabulaire de la tâche.</div>\n<p>À l'épreuve, les questions portent souvent sur : la localisation de l'équipement (zone, accès), le choix d'un outil ou d'un consommable, une conversion d'unités (couple en lbf·in à convertir en N·m pour une clé graduée en unités SI), la justification d'une précaution, l'ordre d'une séquence, l'essai à réaliser et sa conclusion.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une valeur de couple est souvent accompagnée d'une précision (« sur filetage lubrifié avec … », « couple d'écrou freiné non compris »). Recopier la valeur seule fait perdre l'essentiel ; la réponse doit reprendre la condition.</div>"
      },
      {
       "titre": "Exemple commenté : la tâche décrite",
       "contenu": "<p>Voici, décrite en texte, une tâche simplifiée d'un constructeur fictif, telle qu'elle pourrait figurer dans un dossier d'épreuve.</p>\n<p><strong>Tâche 29-31-41-400-801 — Pose du transmetteur de pression du circuit hydraulique A.</strong> Effectivité : tous les avions du type sauf ceux ayant reçu la modification 1234.</p>\n<table><thead><tr><th>Rubrique</th><th>Contenu de la tâche</th></tr></thead><tbody>\n<tr><td>Données de référence</td><td>Tâche 29-10-00-864-801 (dépressurisation du circuit A) ; tâche 29-10-00-863-801 (pressurisation du circuit A) ; tâche 29-31-41-000-801 (dépose)</td></tr>\n<tr><td>Outillage</td><td>Clé dynamométrique 5 à 25 N·m ; récipient de récupération de fluide ; bouchons et capuchons de protection</td></tr>\n<tr><td>Consommables</td><td>Fluide hydraulique (réf. M-01) ; chiffons non pelucheux (réf. M-07)</td></tr>\n<tr><td>Pièces</td><td>Joint torique, quantité 1, à remplacer obligatoirement</td></tr>\n<tr><td>Zone et accès</td><td>Zone 147, panneau 147AL</td></tr>\n<tr><td>Préparation</td><td>S'assurer que le circuit A est dépressurisé ; s'assurer que le disjoncteur 2CK1 est ouvert et étiqueté</td></tr>\n</tbody></table>\n<p>Procédure : (1) WARNING : porter des lunettes et des gants ; le fluide hydraulique est dangereux pour les yeux et la peau. (2) Retirer les bouchons de protection du raccord et du transmetteur. (3) Lubrifier le joint torique neuf avec le fluide M-01 et le poser sur le transmetteur. (4) CAUTION : maintenir le raccord avec une contre-clé pour ne pas tordre la tuyauterie. Poser le transmetteur et le serrer au couple de 135 à 150 lbf·in. (5) Freiner le transmetteur au fil à freiner. (6) Connecter le connecteur électrique. Clôture : fermer le disjoncteur 2CK1 ; pressuriser le circuit A ; vérifier l'absence de fuite au raccord pendant 5 minutes ; vérifier que l'indication de pression du circuit A au poste est comprise entre 2 850 et 3 150 psi ; dépressuriser ; fermer le panneau 147AL.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p>Une analyse rédigée de cette tâche, telle qu'on l'attend d'un candidat, pourrait être la suivante.</p>\n<h4>Identification</h4>\n<p>Il s'agit d'une tâche de <strong>pose</strong> (code de fonction 400 dans la convention du constructeur) d'un transmetteur de pression du circuit hydraulique A, chapitre ATA 29 (hydraulique), section 31 (indication). Elle ne s'applique pas aux avions ayant reçu la modification 1234 : avant tout, je vérifie dans le dossier de l'avion que cette modification n'est pas appliquée ; si elle l'est, je dois rechercher la tâche correspondant à la configuration modifiée.</p>\n<h4>Moyens à préparer</h4>\n<ul>\n<li>Outillage : clé dynamométrique de plage 5 à 25 N·m, étalonnée ; contre-clé ; récipient de récupération ; bouchons.</li>\n<li>Consommables : fluide hydraulique M-01 (celui du circuit, pour lubrifier le joint), chiffons non pelucheux M-07, fil à freiner.</li>\n<li>Pièce : un joint torique neuf, obligatoire.</li>\n<li>Accès : panneau 147AL en zone 147.</li>\n</ul>\n<h4>Conversion du couple</h4>\n<p>Le couple est donné en livres-pouces, et la clé est graduée en N·m. Avec 1 lbf·in ≈ 0,113 N·m : 135 lbf·in ≈ 15,3 N·m et 150 lbf·in ≈ 16,9 N·m. Je règle la clé à environ 16 N·m, au milieu de la plage, ce qui est compatible avec sa plage d'utilisation de 5 à 25 N·m.</p>\n<h4>Points de sécurité et justification</h4>\n<ul>\n<li>Circuit dépressurisé avant de toucher au raccord : le fluide sous environ 3 000 psi (environ 207 bar) pourrait provoquer une injection sous la peau.</li>\n<li>Disjoncteur ouvert et étiqueté : on intervient sur un équipement électrique, et l'étiquette évite une remise sous tension par une autre personne.</li>\n<li>Lunettes et gants : le fluide est irritant (WARNING).</li>\n<li>Contre-clé : la CAUTION protège la tuyauterie contre la torsion, qui provoquerait une fuite ou une crique.</li>\n</ul>\n<h4>Clôture et enregistrement</h4>\n<p>Après la pose, l'essai d'étanchéité de 5 minutes sous pression et la vérification de l'indication (2 850 à 3 150 psi, soit environ 196 à 217 bar) prouvent que le transmetteur est étanche et donne une mesure cohérente. J'enregistre sur la carte de travail : la référence et le numéro de série du transmetteur posé, la valeur de couple, le résultat de l'essai et la valeur de pression lue, puis la fermeture du panneau. Si l'indication est hors plage, la tâche n'est pas terminée : je ne signe pas et j'applique le dépannage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> cette même démarche est utilisée pour préparer une intervention de nuit en escale : la préparation de la liste des moyens avant d'aller à l'avion évite un aller-retour au magasin qui ferait perdre un temps précieux et inciterait à improviser.</div>"
      }
     ],
     "points_cles": [
      "L'AMM est organisé selon la numérotation ATA : chapitre, section, sujet",
      "Seule la révision en vigueur et la tâche applicable à l'avion sont utilisables",
      "Une tâche comprend identification, références, outillage, consommables, pièces, accès, préparation, procédure, clôture",
      "WARNING, CAUTION et NOTE se lisent avant l'étape concernée",
      "Une valeur se recopie avec son unité et ses conditions",
      "Les conversions d'unités (lbf·in en N·m, psi en bar) sont fréquentes",
      "Les essais de clôture et les enregistrements font partie de la tâche",
      "Une analyse écrite reprend le vocabulaire et l'ordre de la tâche"
     ],
     "lexique": [
      {
       "terme": "AMM",
       "def": "Manuel de maintenance de l'aéronef, décrivant systèmes et opérations d'entretien sur avion."
      },
      {
       "terme": "Numérotation ATA",
       "def": "Codification normalisée des systèmes de l'aéronef en chapitres, sections et sujets."
      },
      {
       "terme": "Bloc de pages",
       "def": "Partie d'un sujet consacrée à un type d'information : description, dépose-pose, essais…"
      },
      {
       "terme": "Effectivité",
       "def": "Liste des aéronefs ou configurations auxquels s'applique une information."
      },
      {
       "terme": "Code de fonction",
       "def": "Partie du numéro de tâche indiquant la nature de l'opération (dépose, pose, essai…)."
      },
      {
       "terme": "Outillage spécifique",
       "def": "Outil conçu pour une tâche ou un type d'aéronef particulier, désigné par une référence."
      },
      {
       "terme": "Consommable",
       "def": "Produit utilisé et non récupérable lors d'une tâche : fluide, mastic, fil à freiner."
      },
      {
       "terme": "Clôture",
       "def": "Ensemble des opérations de fin de tâche : essais, fermetures, remise en configuration."
      }
     ]
    },
    {
     "id": "baer-doc-catalogue-pieces",
     "titre": "Exploiter le catalogue illustré des pièces (IPC)",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Expliquer le rôle du catalogue illustré des pièces et son lien avec le manuel de maintenance",
      "Retrouver une pièce à partir d'une figure et d'un numéro d'article",
      "Interpréter la liste détaillée : indentation, quantités, effectivité, interchangeabilité",
      "Identifier les pièces de remplacement autorisées et les pièces à usage unique",
      "Rédiger une demande de pièces exacte à partir du catalogue"
     ],
     "sections": [
      {
       "titre": "Rôle et organisation du catalogue",
       "contenu": "<p>Le <strong>catalogue illustré des pièces</strong> (IPC : Illustrated Parts Catalog) recense toutes les pièces remplaçables d'un aéronef, avec leur <strong>référence</strong> (part number), leur désignation, leur quantité, leur position et les aéronefs sur lesquels elles sont montées. Il sert à identifier une pièce, à la commander et à vérifier qu'une pièce reçue est bien celle qui convient. Les équipements eux-mêmes ont leur propre liste de pièces détaillées, dans leur manuel de composant (CMM).</p>\n<p>L'IPC est organisé, comme le manuel de maintenance, selon la numérotation ATA. Chaque sujet comprend une ou plusieurs <strong>figures</strong> (vues éclatées ou d'installation) et une <strong>liste détaillée des pièces</strong> correspondante. Chaque pièce de la figure porte un <strong>numéro d'article</strong> (item), repris dans la liste.</p>\n<p>Le catalogue n'est pas un document de maintenance : il ne dit pas comment déposer ou poser une pièce, ni avec quel couple. Inversement, le manuel de maintenance renvoie au catalogue pour les références des pièces à remplacer. Les deux documents se lisent ensemble.</p>\n<p>Le catalogue est révisé régulièrement, au rythme des modifications et des changements de fournisseurs. Les révisions sont repérées par une date et un numéro, et les lignes modifiées sont signalées. Dans les systèmes électroniques, la figure et la liste sont liées : un clic sur un article de la figure ouvre la ligne correspondante, et la référence peut être transmise directement à l'outil de commande du magasin.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une pièce se désigne par sa référence exacte, jamais par sa description. « Joint torique du transmetteur » ne suffit pas : il existe des dizaines de joints de dimensions et de matériaux différents.</div>"
      },
      {
       "titre": "Lire la liste détaillée des pièces",
       "contenu": "<p>La liste détaillée se présente en colonnes. Leur titre varie selon les constructeurs, mais leur contenu est toujours comparable.</p>\n<table><thead><tr><th>Colonne</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>Figure et article</td><td>Numéro de la figure et numéro de la pièce sur la figure ; un tiret devant le numéro indique souvent une pièce non représentée sur la figure</td></tr>\n<tr><td>Référence (part number)</td><td>Référence du constructeur ou du fournisseur, éventuellement avec un code fournisseur</td></tr>\n<tr><td>Désignation (nomenclature)</td><td>Nom de la pièce, avec une <strong>indentation</strong> qui montre la hiérarchie : ensemble, sous-ensemble, pièce détachée</td></tr>\n<tr><td>Code d'effectivité</td><td>Lettre ou code renvoyant aux aéronefs ou configurations sur lesquels la pièce est montée</td></tr>\n<tr><td>Unités par ensemble</td><td>Quantité de cette pièce dans l'ensemble de niveau supérieur, ou mention « AR » (selon besoin) pour des cales ou des produits</td></tr>\n</tbody></table>\n<p>L'<strong>indentation</strong> est la clé de lecture. Un ensemble est écrit à gauche (indentation 1) ; les pièces qui le composent sont décalées d'un cran (indentation 2), et ainsi de suite. Une pièce n'est donc pas seulement décrite par sa ligne, mais aussi par l'ensemble auquel elle appartient. Si un ensemble est commandé, il est livré avec les pièces de niveau inférieur ; si l'on ne commande qu'une pièce de niveau inférieur, on vérifie qu'elle est vendue séparément (certaines pièces ne sont fournies qu'avec leur ensemble).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la quantité indiquée est la quantité par ensemble, pas pour l'avion. Si l'ensemble existe en deux exemplaires (côté gauche et côté droit), la quantité totale pour l'avion est double. À l'inverse, pour une intervention sur un seul côté, on ne commande que ce qui est nécessaire.</div>"
      },
      {
       "titre": "Effectivité et interchangeabilité",
       "contenu": "<p>Les pièces évoluent au fil des modifications : une nouvelle référence remplace l'ancienne, avec ou sans possibilité de mélange. Le catalogue l'indique par des <strong>codes d'interchangeabilité</strong> et des notes, dont la formulation dépend du constructeur. On rencontre principalement les cas suivants :</p>\n<table><thead><tr><th>Situation</th><th>Signification</th></tr></thead><tbody>\n<tr><td>Totalement interchangeable</td><td>L'ancienne et la nouvelle référence peuvent être montées indifféremment</td></tr>\n<tr><td>Interchangeable dans un sens</td><td>La nouvelle peut remplacer l'ancienne, mais l'ancienne ne peut pas remplacer la nouvelle</td></tr>\n<tr><td>Interchangeable par paire ou par ensemble</td><td>Les pièces doivent être remplacées ensemble (par exemple les deux pièces d'un assemblage)</td></tr>\n<tr><td>Non interchangeable</td><td>La pièce n'est montable que sur les avions ayant la configuration correspondante</td></tr>\n<tr><td>Pièce optionnelle ou alternative</td><td>Autre référence autorisée, souvent d'un autre fournisseur</td></tr>\n</tbody></table>\n<p>L'effectivité de chaque ligne renvoie à une liste d'avions (numéros de série du constructeur ou numéros internes de l'exploitant) ou à des conditions (« avant modification 5678 », « après bulletin service … »). Avant toute commande, on vérifie donc l'effectivité de la ligne pour l'avion concerné.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> à la réception, le magasinier et le technicien vérifient que la référence de la pièce, son marquage, son étiquette et son certificat Form 1 concordent avec la référence demandée et autorisée. Une pièce dont la référence est voisine mais différente n'est pas acceptée sans vérification de l'interchangeabilité.</div>"
      },
      {
       "titre": "Méthode de recherche d'une pièce",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> retrouver la référence d'une pièce dans le catalogue. 1) Identifier le système et le chapitre ATA de la pièce, ou partir de la référence de figure donnée par la tâche du manuel de maintenance. 2) Ouvrir la figure et repérer visuellement la pièce ; noter son numéro d'article. 3) Dans la liste détaillée, trouver la ligne de l'article ; s'il y a plusieurs lignes pour le même article (versions successives), sélectionner celle dont l'effectivité correspond à l'avion. 4) Lire l'indentation pour savoir à quel ensemble appartient la pièce. 5) Lire les notes d'interchangeabilité et les références alternatives. 6) Noter la quantité par ensemble et calculer le besoin réel. 7) Rédiger la demande : référence exacte, désignation, quantité, avion, référence de la figure et de l'article, tâche concernée.</div>\n<p>Les catalogues électroniques permettent aussi une recherche par référence : on part de la référence lue sur une pièce déposée pour retrouver sa figure, ses alternatives et ses effectivités. C'est un moyen efficace de vérifier qu'une pièce montée est conforme à la configuration de l'avion.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la référence gravée sur une pièce déposée n'est pas forcément celle à recommander : la pièce a pu être remplacée par une nouvelle référence. On se fie au catalogue à jour, pas à la pièce.</div>"
      },
      {
       "titre": "Exemple commenté",
       "contenu": "<p>Dans un dossier d'épreuve, on fournit la figure 12 du sujet 32-42-27 (fictif) : « Frein de roue de train principal — installation », vue éclatée montrant le frein (article 10), quatre écrous (article 20), quatre rondelles (article 30), un joint de raccord hydraulique (article 40) et un capteur de température (article 50). La liste détaillée est la suivante (constructeur fictif).</p>\n<table><thead><tr><th>Fig.-Article</th><th>Référence</th><th>Désignation (indentation)</th><th>Effectivité</th><th>Unités par ensemble</th></tr></thead><tbody>\n<tr><td>12-10</td><td>B7700-03</td><td>FREIN ENSEMBLE</td><td>A</td><td>1</td></tr>\n<tr><td>12-10A</td><td>B7700-05</td><td>FREIN ENSEMBLE (remplace B7700-03, interchangeable dans un sens)</td><td>A, B</td><td>1</td></tr>\n<tr><td>12-20</td><td>NUT-0815</td><td>. ÉCROU</td><td>A, B</td><td>4</td></tr>\n<tr><td>12-30</td><td>WSH-0815</td><td>. RONDELLE</td><td>A, B</td><td>4</td></tr>\n<tr><td>12-40</td><td>OR-2-114</td><td>. JOINT TORIQUE</td><td>A, B</td><td>1</td></tr>\n<tr><td>12-50</td><td>TS-410</td><td>. CAPTEUR DE TEMPÉRATURE</td><td>B</td><td>1</td></tr>\n<tr><td>-12-50A</td><td>TS-400</td><td>. CAPTEUR DE TEMPÉRATURE</td><td>A</td><td>1</td></tr>\n</tbody></table>\n<p>Notes : effectivité A = avions avant modification 2200 ; B = avions après modification 2200. L'avion à dépanner a reçu la modification 2200. On demande quelles pièces commander pour remplacer le frein d'une roue et son joint de raccord.</p>\n<h4>Analyse modèle</h4>\n<p>L'avion ayant reçu la modification 2200, il relève de l'effectivité <strong>B</strong>. Le frein de référence B7700-03 n'est applicable qu'à l'effectivité A : il est exclu. La référence <strong>B7700-05</strong> est applicable à A et B : c'est elle qu'il faut commander, quantité 1 pour une roue. Elle remplace la B7700-03 en interchangeabilité dans un sens : on pourrait la monter aussi sur un avion A, mais l'inverse est interdit.</p>\n<p>Le joint torique <strong>OR-2-114</strong> (article 40) est commun aux deux effectivités, quantité 1 ; il est à remplacer à chaque dépose selon la tâche du manuel de maintenance. Les écrous et rondelles (articles 20 et 30, quatre de chaque) sont réutilisables sauf indication contraire de la tâche : il faut vérifier si l'écrou est autofreiné et s'il doit être remplacé. Le capteur de température n'est pas à commander, car il est transféré de l'ancien frein si la tâche le prévoit ; pour l'effectivité B, sa référence est TS-410, ce qui permet de vérifier que le capteur actuellement monté est conforme.</p>\n<p>Demande de pièces : 1 × B7700-05 (frein ensemble, fig. 12-10A), 1 × OR-2-114 (joint torique, fig. 12-40), pour l'avion concerné, au titre de la tâche de remplacement du frein.</p>"
      }
     ],
     "points_cles": [
      "L'IPC identifie les pièces : référence, désignation, quantité, effectivité",
      "Le numéro d'article relie la figure et la liste détaillée",
      "L'indentation montre la hiérarchie ensemble, sous-ensemble, pièce",
      "La quantité est donnée par ensemble, pas pour l'avion",
      "L'effectivité de chaque ligne se vérifie pour l'avion concerné",
      "L'interchangeabilité peut être totale, dans un sens, par ensemble ou nulle",
      "On commande selon le catalogue à jour, pas selon la pièce déposée",
      "Une demande de pièces cite référence, quantité, avion, figure et article"
     ],
     "lexique": [
      {
       "terme": "IPC",
       "def": "Catalogue illustré des pièces d'un aéronef."
      },
      {
       "terme": "Référence (part number)",
       "def": "Identifiant unique d'une pièce attribué par le constructeur ou le fournisseur."
      },
      {
       "terme": "Numéro d'article",
       "def": "Numéro repérant une pièce sur une figure du catalogue."
      },
      {
       "terme": "Indentation",
       "def": "Décalage de la désignation montrant le niveau de la pièce dans l'ensemble."
      },
      {
       "terme": "Unités par ensemble",
       "def": "Nombre d'exemplaires d'une pièce dans l'ensemble de niveau supérieur."
      },
      {
       "terme": "Interchangeabilité",
       "def": "Possibilité de remplacer une référence par une autre, dans un ou deux sens."
      },
      {
       "terme": "Pièce alternative",
       "def": "Autre référence autorisée pour la même fonction, souvent d'un autre fournisseur."
      },
      {
       "terme": "CMM",
       "def": "Manuel de composant, décrivant l'entretien en atelier d'un équipement et ses pièces détaillées."
      }
     ]
    },
    {
     "id": "baer-doc-bulletins-consignes",
     "titre": "Analyser un bulletin service et une consigne de navigabilité",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer bulletin service, consigne de navigabilité et autres documents de suivi en service",
      "Identifier les rubriques d'un bulletin service et d'une consigne de navigabilité",
      "Déterminer l'applicabilité d'un document à un aéronef donné",
      "Calculer un délai d'application à partir des conditions d'une consigne",
      "Rédiger une analyse d'applicabilité et d'actions à réaliser"
     ],
     "sections": [
      {
       "titre": "Des documents pour faire évoluer l'aéronef en service",
       "contenu": "<p>Après la mise en service d'un type d'aéronef, le constructeur et les autorités continuent de recevoir des informations : défauts constatés, incidents, résultats d'essais. Plusieurs documents permettent d'en tirer les conséquences sur les aéronefs en service.</p>\n<table><thead><tr><th>Document</th><th>Émetteur</th><th>Caractère</th></tr></thead><tbody>\n<tr><td>Bulletin service (SB)</td><td>Constructeur de l'aéronef, du moteur ou de l'équipement</td><td>Recommandation : inspection, modification, remplacement ; certains sont classés « alerte » ou « obligatoire » par le constructeur, mais c'est la consigne qui crée l'obligation légale</td></tr>\n<tr><td>Consigne de navigabilité (AD)</td><td>Autorité responsable de la conception (EASA pour les produits certifiés en Europe), ou autorité de l'État de conception pour un produit étranger, reprise par l'EASA</td><td>Obligatoire : l'aéronef n'est pas navigable si la consigne n'est pas appliquée dans les délais</td></tr>\n<tr><td>Lettre d'information, note technique</td><td>Constructeur</td><td>Information, sans obligation</td></tr>\n<tr><td>Bulletin d'information de sécurité (SIB)</td><td>EASA</td><td>Recommandation de sécurité, sans obligation</td></tr>\n</tbody></table>\n<p>Une <strong>consigne de navigabilité</strong> est émise lorsqu'une condition dangereuse existe et est susceptible d'exister ou de se développer sur d'autres produits de même conception. Elle renvoie très souvent à un bulletin service, qui en donne les instructions techniques détaillées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le bulletin service dit comment faire ; la consigne de navigabilité rend l'action obligatoire et fixe le délai. La gestion de l'applicabilité et des délais est assurée par l'organisme de gestion du maintien de la navigabilité ; le technicien applique les instructions et enregistre précisément ce qu'il a fait.</div>"
      },
      {
       "titre": "Structure d'un bulletin service et d'une consigne",
       "contenu": "<p>Un <strong>bulletin service</strong> comprend en général trois parties.</p>\n<ul>\n<li>Les <strong>informations de planification</strong> : effectivité (numéros de série concernés), raison (problème constaté et objectif), description sommaire, conformité (recommandée, alerte), approbation, main-d'œuvre estimée, masse et centrage, pièces et outillages nécessaires, références aux documents modifiés.</li>\n<li>Les <strong>instructions d'exécution</strong> (accomplishment instructions) : étapes détaillées, figures, valeurs, essais.</li>\n<li>Les <strong>données de matériel</strong> : listes de pièces neuves, pièces déposées et leur destination, kits.</li>\n</ul>\n<p>Une <strong>consigne de navigabilité</strong> de l'EASA comprend : un numéro (année et numéro d'ordre), la date d'entrée en vigueur, le produit concerné (type, modèles, numéros de série), la raison, et surtout les <strong>actions requises</strong> avec leurs <strong>délais</strong> (compliance), exprimés en heures de vol, en cycles, en date ou par rapport à une échéance (« avant le prochain vol », « dans les 600 FC suivant la date d'entrée en vigueur »). Elle précise les éventuelles <strong>actions terminales</strong> (qui mettent fin aux inspections répétitives), les crédits pour des actions déjà réalisées avant l'entrée en vigueur, et la possibilité de demander une méthode alternative de mise en conformité (AMOC).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une consigne peut s'appliquer selon une révision précise d'un bulletin service. Appliquer une révision plus ancienne ou plus récente n'est conforme que si la consigne le prévoit. On vérifie donc toujours la révision du bulletin citée dans la consigne.</div>"
      },
      {
       "titre": "Méthode d'analyse",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une consigne de navigabilité et son bulletin. 1) Identifier la consigne : numéro, date d'entrée en vigueur, révision, produit concerné. 2) Déterminer l'<strong>applicabilité</strong> : modèle, numéro de série, configuration (pièces ou modifications installées) ; une condition non remplie rend la consigne non applicable, ce qui doit être justifié par écrit. 3) Comprendre la <strong>raison</strong> : quel danger, sur quel élément. 4) Lister les <strong>actions requises</strong> et leur nature : inspection (unique ou répétitive), modification, remplacement, limitation d'exploitation. 5) Calculer les <strong>délais</strong> à partir des données de l'aéronef (heures, cycles, dates) en appliquant les règles de la consigne (souvent « au plus tard de » ou « au premier atteint de »). 6) Identifier les instructions dans le bulletin service, à la révision citée, et les moyens nécessaires. 7) Prévoir les enregistrements : référence de la consigne et du bulletin, révision, actions réalisées, résultats, prochaine échéance si l'action est répétitive.</div>\n<p>Les deux formules de délai à ne pas confondre :</p>\n<table><thead><tr><th>Formulation</th><th>Règle</th></tr></thead><tbody>\n<tr><td>« au premier atteint de A ou B »</td><td>On retient l'échéance la plus proche</td></tr>\n<tr><td>« au plus tard de A ou B »</td><td>On retient l'échéance la plus éloignée ; cette formule laisse un délai de grâce aux aéronefs ayant déjà dépassé un seuil</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'état des consignes de navigabilité d'un aéronef est l'un des premiers documents contrôlés lors d'un examen de navigabilité ou d'un achat d'avion d'occasion. Une consigne appliquée mais mal enregistrée est considérée comme non appliquée.</div>"
      },
      {
       "titre": "Exemple commenté : les documents décrits",
       "contenu": "<p>Le dossier d'épreuve fournit une consigne de navigabilité fictive et l'extrait du bulletin service associé.</p>\n<p><strong>Consigne de navigabilité EX-2025-01 (fictive)</strong>, entrée en vigueur le 1er mars 2025. Produit : avions du type X, tous modèles, numéros de série 0100 à 0450, équipés d'un vérin de manœuvre de train avant de référence V-300-01. Raison : des criques ont été trouvées sur l'œil de tige de ce vérin ; une rupture pourrait empêcher la sortie du train avant. Actions requises : (1) avant d'atteindre 8 000 FC depuis la pose du vérin, ou dans les 500 FC suivant la date d'entrée en vigueur, au plus tard de ces deux échéances, réaliser une inspection par courants de Foucault de l'œil de tige selon le bulletin service X-32-150 révision 01 ; (2) répéter l'inspection à intervalles n'excédant pas 1 500 FC ; (3) en cas de crique, remplacer le vérin avant le prochain vol par un vérin de référence V-300-02 ; (4) le remplacement par un V-300-02 constitue une action terminale.</p>\n<p><strong>Bulletin service X-32-150 révision 01</strong> : main-d'œuvre 3 heures, accès par la case de train avant ; outillage : appareil à courants de Foucault et sonde définis par le manuel de CND ; instructions : mise en sécurité du train (goupilles), nettoyage de l'œil de tige, contrôle selon la procédure de CND, en cas d'indication remplacement du vérin selon la tâche du manuel de maintenance, enregistrement sur le formulaire joint.</p>\n<p>Données de l'avion étudié : numéro de série 0287, vérin V-300-01 posé à la construction ; au 1er mars 2025, l'avion totalise 7 900 FC ; il effectue environ 150 FC par mois.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<h4>Applicabilité</h4>\n<p>L'avion est du type X, de numéro de série 0287, compris entre 0100 et 0450, et il est équipé d'un vérin V-300-01 : la consigne lui est <strong>applicable</strong>. Si le vérin avait déjà été remplacé par un V-300-02, la consigne ne serait plus applicable à l'avion, car cette configuration constitue l'action terminale ; il faudrait l'écrire et le justifier par l'enregistrement de la pose.</p>\n<h4>Délai de la première inspection</h4>\n<p>Le vérin ayant été posé à la construction, ses cycles sont ceux de l'avion. Première échéance : 8 000 FC depuis la pose, soit à 8 000 FC. Seconde échéance : 500 FC après le 1er mars 2025, soit 7 900 + 500 = 8 400 FC. La consigne dit « au plus tard de ces deux échéances » : on retient <strong>8 400 FC</strong>. À raison de 150 FC par mois, l'avion atteindra 8 400 FC environ 3,3 mois après le 1er mars, soit vers la mi-juin 2025. Le bureau technique prévoira l'inspection avec une marge, par exemple lors d'une visite de mai.</p>\n<h4>Actions et moyens</h4>\n<p>Il s'agit d'une <strong>inspection répétitive</strong> par courants de Foucault de l'œil de tige du vérin de manœuvre du train avant, réalisée par un opérateur CND certifié, avec l'appareil et la sonde définis, selon le bulletin X-32-150 à la <strong>révision 01</strong>. Le technicien prépare l'avion (goupilles de train, accès, nettoyage de la zone) et remet en état après contrôle.</p>\n<h4>Suites possibles</h4>\n<ul>\n<li>Pas d'indication : l'inspection est enregistrée, et la suivante est due au plus tard 1 500 FC après, soit vers 9 900 FC si la première est réalisée à 8 400 FC (moins si elle est réalisée plus tôt, l'intervalle partant de l'inspection effective).</li>\n<li>Crique détectée : remplacement du vérin <strong>avant le prochain vol</strong> par un V-300-02 ; ce remplacement met fin aux inspections répétitives.</li>\n</ul>\n<h4>Enregistrements</h4>\n<p>Référence de la consigne et de sa révision, référence et révision du bulletin, date, cycles de l'avion, résultat du contrôle signé par l'opérateur certifié, identification du vérin (référence, numéro de série), prochaine échéance ou mention de l'action terminale.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> confondre « au plus tard » et « au premier atteint » donnerait ici une échéance à 8 000 FC au lieu de 8 400 FC : l'erreur serait sans danger dans ce sens, mais l'erreur inverse, sur une autre consigne, conduirait à dépasser une échéance obligatoire et à exploiter un avion non navigable.</div>"
      }
     ],
     "points_cles": [
      "Le bulletin service recommande et détaille ; la consigne de navigabilité oblige et fixe le délai",
      "L'EASA émet les consignes pour les produits dont elle est l'autorité de conception",
      "L'applicabilité se vérifie par modèle, numéro de série et configuration",
      "Les délais combinent heures, cycles et dates avec des règles précises",
      "« Au premier atteint » retient l'échéance la plus proche, « au plus tard » la plus éloignée",
      "Une action terminale met fin aux inspections répétitives",
      "La révision du bulletin citée par la consigne doit être respectée",
      "Une consigne mal enregistrée est considérée comme non appliquée"
     ],
     "lexique": [
      {
       "terme": "Bulletin service",
       "def": "Document du constructeur recommandant et décrivant une inspection, une modification ou un remplacement."
      },
      {
       "terme": "Consigne de navigabilité",
       "def": "Document obligatoire de l'autorité imposant des actions pour corriger une condition dangereuse."
      },
      {
       "terme": "Applicabilité",
       "def": "Ensemble des aéronefs et configurations concernés par un document."
      },
      {
       "terme": "Délai d'application",
       "def": "Échéance avant laquelle une action exigée doit être réalisée."
      },
      {
       "terme": "Inspection répétitive",
       "def": "Inspection à renouveler à intervalles fixés jusqu'à une action terminale."
      },
      {
       "terme": "Action terminale",
       "def": "Action qui supprime définitivement la condition dangereuse et met fin aux inspections répétitives."
      },
      {
       "terme": "AMOC",
       "def": "Méthode alternative de mise en conformité, approuvée par l'autorité."
      },
      {
       "terme": "Instructions d'exécution",
       "def": "Partie du bulletin service décrivant pas à pas les opérations à réaliser."
      }
     ]
    },
    {
     "id": "baer-doc-schemas-cablage",
     "titre": "Lire un schéma de principe et un schéma de câblage électrique",
     "niveau": "Tle",
     "options": [
      "avionique"
     ],
     "duree": 40,
     "objectifs": [
      "Distinguer schéma de principe système, schéma de câblage et listes associées",
      "Décoder les repères fonctionnels d'équipements, de connecteurs, de fils et de masses",
      "Suivre un circuit depuis sa protection jusqu'à sa masse à travers les connecteurs",
      "Établir un plan de mesures de dépannage à partir d'un schéma",
      "Rédiger une analyse de schéma claire et vérifiable"
     ],
     "sections": [
      {
       "titre": "Les documents de câblage",
       "contenu": "<p>La documentation électrique d'un aéronef comprend plusieurs familles de documents, regroupées selon les constructeurs dans un manuel de schémas (ASM ou SSM) et un manuel de câblage (AWM ou WDM).</p>\n<table><thead><tr><th>Document</th><th>Contenu</th><th>Usage</th></tr></thead><tbody>\n<tr><td>Schéma de principe système</td><td>Fonctionnement d'un système : alimentations, logiques, liaisons entre équipements, sans détail de chaque fil</td><td>Comprendre le système, raisonner en dépannage</td></tr>\n<tr><td>Schéma de câblage</td><td>Chaque fil avec son identification, chaque connecteur avec ses broches, chaque épissure et masse</td><td>Mesures, réparations, recherche d'un fil</td></tr>\n<tr><td>Liste des fils (wire list)</td><td>Pour chaque fil : identification, type, section, longueur, extrémités (connecteur et broche)</td><td>Fabrication et remplacement de fils</td></tr>\n<tr><td>Liste des équipements</td><td>Repère fonctionnel, désignation, référence, emplacement (zone, baie, panneau)</td><td>Localiser un équipement ou un connecteur</td></tr>\n<tr><td>Listes des connecteurs, épissures, masses, traversées</td><td>Emplacements et types</td><td>Localiser les points de mesure</td></tr>\n</tbody></table>\n<p>Ces documents ont leur effectivité propre : le câblage peut différer d'un avion à l'autre selon les options et les modifications. Les schémas sont associés à un numéro de chapitre ATA comme le reste de la documentation.</p>\n<p>À l'épreuve, le dossier fournit le plus souvent un extrait de schéma accompagné des lignes utiles des listes. Le candidat doit savoir passer de l'un à l'autre : un repère lu sur le schéma se retrouve dans une liste qui donne son emplacement, sa référence et ses caractéristiques. Dans les versions électroniques, ces liens sont actifs, mais le raisonnement reste identique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le schéma de principe sert à raisonner, le schéma de câblage sert à mesurer et à réparer. Un dépannage efficace commence par le premier et se poursuit avec le second.</div>"
      },
      {
       "titre": "Repères et symboles",
       "contenu": "<p>Chaque élément du câblage porte un <strong>repère fonctionnel</strong>, codé selon les règles du constructeur. On retrouve en général :</p>\n<ul>\n<li>pour un <strong>équipement</strong> (calculateur, relais, disjoncteur, capteur), un repère alphanumérique propre au système ; le disjoncteur porte en plus un repère d'emplacement sur le panneau (ligne et colonne) ;</li>\n<li>pour un <strong>connecteur</strong>, le repère de l'équipement ou de la traversée complété d'une lettre (A, B…) ; le côté fiche et le côté embase sont distingués ;</li>\n<li>pour un <strong>fil</strong>, un numéro qui identifie le circuit, le fil dans ce circuit, et souvent la section (par exemple un suffixe 22 pour AWG 22) ;</li>\n<li>pour une <strong>masse</strong>, un repère de point de masse et parfois une distinction entre masse de puissance, masse de signal et masse alternative ;</li>\n<li>pour une <strong>épissure</strong>, un repère et sa position.</li>\n</ul>\n<p>Les symboles utilisés sont normalisés : contact de relais représenté au repos (bobine non alimentée), disjoncteur, diode, résistance, masse, blindage (cercle ou pointillés autour des fils, avec indication de la reprise), paire torsadée. Les schémas indiquent souvent la position des contacts dans une condition précise, par exemple « avion au sol, sans alimentation » : il faut la lire avant d'interpréter un contact.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un relais dessiné « contact fermé » est fermé au repos, c'est-à-dire bobine non alimentée. Dès que sa bobine est alimentée, l'état s'inverse. Une grande partie des erreurs de lecture vient d'une mauvaise interprétation de l'état des relais.</div>"
      },
      {
       "titre": "Méthode de lecture et plan de mesures",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un circuit sur un schéma de câblage. 1) Identifier le schéma : numéro, titre, effectivité, révision. 2) Repérer la <strong>source</strong> (barre et disjoncteur) et la <strong>charge</strong> (équipement commandé). 3) Suivre le circuit en notant, dans l'ordre, chaque élément traversé : disjoncteur, fils, connecteurs et broches, contacts de relais ou d'interrupteurs, épissures, charge, retour à la masse. 4) Pour chaque contact, déterminer l'état dans la condition étudiée. 5) Établir le tableau des points de mesure : entre quels points, dans quelle condition (sous tension ou hors tension, connecteur branché ou débranché), et la valeur attendue. 6) Localiser chaque point à l'aide des listes (zone, panneau). 7) Rédiger la conclusion : quel résultat orienterait vers quel élément défaillant.</div>\n<p>Le plan de mesures applique les principes déjà vus en diagnostic : mesures de tension sous tension aux bornes de la charge, puis en remontant vers la source ; mesures de continuité hors tension, connecteurs débranchés, élément par élément ; utilisation des adaptateurs de test pour ne pas endommager les contacts.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de débrancher un connecteur pour une mesure, on vérifie s'il appartient à un système dont la déconnexion déclenche des messages ou impose un test ultérieur, et on le note sur la carte de travail. Chaque connecteur débranché doit être rebranché, verrouillé et, si prévu, freiné : la liste des connecteurs ouverts est une information de relève essentielle.</div>"
      },
      {
       "titre": "Exemple commenté : le schéma décrit",
       "contenu": "<p>Le dossier présente un schéma de câblage fictif simplifié : « Éclairage de la case de train principal gauche ». Il est décrit ici en texte.</p>\n<ul>\n<li>Source : barre continue 28 V « DC 2 », disjoncteur 4LG (panneau 121VU, case F12), calibre 5 A.</li>\n<li>Du disjoncteur, le fil W3301-0001-20 rejoint la broche 3 du connecteur de traversée 5000VC-A, puis le fil W3301-0002-20 rejoint la broche C1 du relais 7LG.</li>\n<li>Le relais 7LG est représenté au repos : son contact entre C1 et NO1 est ouvert. Sa bobine (bornes X1 et X2) est alimentée par la logique « porte de case de train ouverte » via le contacteur de porte 9LG ; X2 est relié à la masse GD-12.</li>\n<li>De la borne NO1 du relais, le fil W3301-0003-20 rejoint la broche 1 du connecteur de la lampe 10LG (connecteur 10LG-A). La broche 2 de ce connecteur est reliée par le fil W3301-0004-20 au point de masse GD-15.</li>\n</ul>\n<p>Listes associées : connecteur 5000VC-A dans la zone 147 ; relais 7LG dans la case de train, sur le support de relais du côté avant ; point de masse GD-15 sur le cadre arrière de la case.</p>\n<p>Plainte : « l'éclairage de la case de train gauche ne s'allume pas lorsque la porte est ouverte ». Le disjoncteur 4LG est enclenché. La lampe a été remplacée par une lampe neuve sans résultat.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<h4>Fonctionnement</h4>\n<p>Lorsque la porte de case est ouverte, le contacteur 9LG alimente la bobine du relais 7LG ; le contact C1-NO1 se ferme et le 28 V issu du disjoncteur 4LG alimente la lampe 10LG, dont le retour se fait à la masse GD-15. Le circuit de puissance de la lampe est donc : 4LG, W3301-0001, 5000VC-A broche 3, W3301-0002, relais 7LG (C1 vers NO1), W3301-0003, 10LG-A broche 1, lampe, 10LG-A broche 2, W3301-0004, GD-15.</p>\n<h4>Plan de mesures</h4>\n<table><thead><tr><th>Étape</th><th>Mesure</th><th>Condition</th><th>Valeur attendue</th><th>Interprétation si anormal</th></tr></thead><tbody>\n<tr><td>1</td><td>Tension entre 10LG-A broche 1 et broche 2 (côté câblage, connecteur débranché de la lampe)</td><td>Sous tension, porte ouverte</td><td>Environ 28 V</td><td>Si 28 V présents : défaut de connecteur ou de douille de lampe ; sinon étape 2</td></tr>\n<tr><td>2</td><td>Tension entre 10LG-A broche 1 et la structure</td><td>Idem</td><td>Environ 28 V</td><td>Si 28 V : défaut du retour de masse (fil W3301-0004 ou point GD-15) ; sinon étape 3</td></tr>\n<tr><td>3</td><td>Tension entre C1 du relais 7LG et la structure</td><td>Idem</td><td>Environ 28 V</td><td>Si absente : défaut entre 4LG et le relais (fils, traversée 5000VC-A) ; si présente : étape 4</td></tr>\n<tr><td>4</td><td>Tension entre NO1 et la structure</td><td>Idem</td><td>Environ 28 V</td><td>Si absente : relais non commandé ou contact défaillant ; vérifier la tension aux bornes X1-X2</td></tr>\n<tr><td>5</td><td>Tension entre X1 et X2 du relais</td><td>Idem</td><td>Environ 28 V</td><td>Si présente : relais défaillant ; si absente : contacteur 9LG, son câblage ou la masse GD-12</td></tr>\n</tbody></table>\n<h4>Conclusion</h4>\n<p>La lampe ayant déjà été remplacée, la recherche porte sur le câblage, le relais ou sa commande. Les mesures sont conduites de la charge vers la source, en sécurité (zone de train : goupilles en place, porte maintenue ouverte de manière sûre). L'élément défaillant identifié est remplacé ou réparé selon le manuel, puis on réalise l'essai opérationnel : lampe allumée porte ouverte, éteinte porte fermée. Les connecteurs débranchés sont rebranchés et vérifiés, et toutes les mesures sont consignées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans une analyse écrite, nommer chaque élément par son repère exact (fil, broche, connecteur, masse) rend la démarche vérifiable par n'importe quel lecteur. Un plan de mesures se présente utilement sous forme de tableau.</div>"
      }
     ],
     "points_cles": [
      "Le schéma de principe explique, le schéma de câblage permet de mesurer et de réparer",
      "Les listes de fils, d'équipements et de connecteurs localisent chaque élément",
      "Équipements, connecteurs, fils, masses et épissures ont chacun un repère",
      "Les contacts de relais sont dessinés au repos, bobine non alimentée",
      "On suit un circuit de la source à la masse en notant chaque élément traversé",
      "Le plan de mesures précise points, conditions, valeurs attendues et interprétation",
      "Les mesures se conduisent en sécurité, avec les adaptateurs de test",
      "Tout connecteur débranché est noté, rebranché, verrouillé et vérifié"
     ],
     "lexique": [
      {
       "terme": "Schéma de principe",
       "def": "Schéma expliquant le fonctionnement d'un système sans détailler chaque fil."
      },
      {
       "terme": "Schéma de câblage",
       "def": "Schéma détaillant chaque fil, connecteur, broche, épissure et masse d'un circuit."
      },
      {
       "terme": "Repère fonctionnel",
       "def": "Identifiant d'un équipement ou d'un élément de câblage dans la documentation."
      },
      {
       "terme": "Liste des fils",
       "def": "Document donnant pour chaque fil son type, sa section, sa longueur et ses extrémités."
      },
      {
       "terme": "Traversée",
       "def": "Connecteur permettant à un faisceau de passer une cloison ou de séparer deux tronçons."
      },
      {
       "terme": "Point de masse",
       "def": "Point de liaison des retours électriques à la structure."
      },
      {
       "terme": "Contact au repos",
       "def": "État d'un contact de relais lorsque sa bobine n'est pas alimentée."
      },
      {
       "terme": "Plan de mesures",
       "def": "Liste ordonnée des mesures à réaliser avec leurs conditions et valeurs attendues."
      }
     ]
    },
    {
     "id": "baer-doc-schemas-fluides",
     "titre": "Lire un schéma hydraulique ou pneumatique de système",
     "niveau": "Tle",
     "options": [
      "systemes"
     ],
     "duree": 40,
     "objectifs": [
      "Reconnaître les symboles normalisés des composants hydrauliques et pneumatiques",
      "Lire un distributeur : nombre d'orifices, nombre de positions, commande et rappel",
      "Suivre le trajet du fluide dans chaque phase de fonctionnement",
      "Déduire d'un schéma les effets d'une panne et les points de contrôle",
      "Rédiger l'analyse fonctionnelle d'un schéma de fluide"
     ],
     "sections": [
      {
       "titre": "Les schémas de fluides dans la documentation",
       "contenu": "<p>Les systèmes hydrauliques, pneumatiques, carburant et de conditionnement d'air sont décrits dans le manuel de maintenance (bloc description et fonctionnement) par des <strong>schémas de principe</strong>. Ils montrent les composants, leurs liaisons et l'état des éléments dans une condition donnée (par exemple « circuit non pressurisé, train sorti »). Les schémas des constructeurs utilisent des symboles dérivés de la norme internationale ISO 1219-1, parfois complétés par des représentations simplifiées et des couleurs (pression, retour, aspiration).</p>\n<p>Ces schémas ne donnent ni l'emplacement réel des composants, ni le cheminement des tuyauteries : ces informations se trouvent dans les figures d'installation et les listes de localisation. Ils servent à comprendre le fonctionnement, à raisonner en dépannage et à préparer une intervention (quelles vannes fermer, quels accumulateurs décharger).</p>\n<table><thead><tr><th>Ligne</th><th>Signification usuelle</th></tr></thead><tbody>\n<tr><td>Trait continu</td><td>Conduite de travail (pression ou retour)</td></tr>\n<tr><td>Trait interrompu long</td><td>Conduite de pilotage</td></tr>\n<tr><td>Trait interrompu court</td><td>Conduite de drain ou de fuite</td></tr>\n<tr><td>Point noir à un croisement</td><td>Raccordement des deux conduites ; sans point, les conduites se croisent sans communiquer</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un schéma de fluide représente toujours les composants dans un état de référence, indiqué sur le document. Pour comprendre une phase de fonctionnement, on « déplace » mentalement les distributeurs et on suit le fluide.</div>"
      },
      {
       "titre": "Les symboles essentiels",
       "contenu": "<table><thead><tr><th>Composant</th><th>Représentation normalisée (décrite)</th></tr></thead><tbody>\n<tr><td>Pompe à cylindrée fixe</td><td>Cercle avec un triangle noir pointé vers l'extérieur ; une flèche oblique traversant le cercle indique une cylindrée variable</td></tr>\n<tr><td>Moteur hydraulique</td><td>Cercle avec un triangle noir pointé vers l'intérieur</td></tr>\n<tr><td>Réservoir</td><td>Rectangle ouvert vers le haut (à l'air libre) ou fermé (pressurisé)</td></tr>\n<tr><td>Accumulateur</td><td>Ovale vertical divisé par une ligne (séparation gaz-liquide)</td></tr>\n<tr><td>Filtre</td><td>Losange traversé par une ligne pointillée</td></tr>\n<tr><td>Clapet anti-retour</td><td>Petite bille sur un siège en V : le passage est libre dans un seul sens</td></tr>\n<tr><td>Limiteur de pression</td><td>Carré avec une flèche décalée et un ressort ; il s'ouvre quand la pression dépasse le tarage</td></tr>\n<tr><td>Restricteur</td><td>Étranglement de la ligne ; avec une flèche oblique, il est réglable</td></tr>\n<tr><td>Vérin double effet</td><td>Rectangle avec piston et tige, deux orifices</td></tr>\n<tr><td>Distributeur</td><td>Suite de carrés accolés (un par position), avec flèches de passage et symboles de commande aux extrémités</td></tr>\n</tbody></table>\n<p>Un <strong>distributeur</strong> se désigne par deux nombres : le nombre d'<strong>orifices</strong> et le nombre de <strong>positions</strong>. Un distributeur 4/3 a quatre orifices (pression P, retour R ou T, utilisations A et B) et trois positions. Ses commandes sont dessinées aux extrémités : solénoïde (rectangle avec trait oblique), pilotage hydraulique, commande manuelle, et rappel par ressort. La position dessinée raccordée aux conduites est la position de repos.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un clapet anti-retour mal lu inverse tout le raisonnement. On vérifie le sens en se demandant : le fluide qui arrive de ce côté pousse-t-il la bille contre son siège (passage fermé) ou la décolle-t-il (passage ouvert) ?</div>"
      },
      {
       "titre": "Méthode d'analyse",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un schéma de fluide. 1) Lire le titre, l'effectivité et la condition de représentation. 2) Repérer la source (pompes, accumulateur) et le retour (réservoir). 3) Identifier chaque composant et sa fonction. 4) Pour chaque phase de fonctionnement (par exemple sortie, rentrée, maintien), déterminer la position de chaque distributeur et suivre le trajet du fluide sous pression jusqu'à l'utilisateur, puis le trajet du retour. 5) Repérer les protections : clapets, limiteurs, restricteurs, fusibles, et dire à quoi ils servent. 6) Pour une panne donnée, déterminer ses conséquences en reprenant le trajet. 7) En déduire les points de contrôle utiles (manomètres, prises de pression, indicateurs) et les précautions avant intervention (zones sous pression résiduelle).</div>\n<p>Le vocabulaire à employer est précis : on dit qu'un orifice est « mis en communication » avec un autre, qu'une chambre est « à la pression » ou « au retour », qu'un clapet « interdit le retour » du fluide.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de déposer un composant, le technicien identifie sur le schéma toutes les sources qui peuvent maintenir une pression dans la zone : accumulateurs, clapets anti-retour qui piègent le fluide, vérins chargés par le poids d'une gouverne ou d'une trappe. La tâche du manuel le précise, mais comprendre le schéma permet de l'appliquer avec discernement.</div>"
      },
      {
       "titre": "Exemple commenté : le schéma décrit",
       "contenu": "<p>Le dossier présente un schéma fictif simplifié : « Commande de la porte cargo ». Il est décrit ainsi, dans la condition « circuit pressurisé, porte fermée et verrouillée, distributeur au repos ».</p>\n<ul>\n<li>Une conduite pression P arrive du circuit hydraulique par un <strong>clapet anti-retour</strong> CV1 (passage libre vers la porte) puis un <strong>filtre</strong> F1.</li>\n<li>Un <strong>accumulateur</strong> ACC1 est raccordé entre CV1 et F1.</li>\n<li>La conduite rejoint l'orifice P d'un <strong>distributeur 4/3</strong> DV1 à commande par solénoïdes S1 (côté gauche) et S2 (côté droit), centré par ressorts. En position centrale, les orifices P, A, B et R sont tous fermés.</li>\n<li>En position gauche (S1 alimenté), P communique avec A et B avec R ; en position droite (S2 alimenté), P communique avec B et A avec R.</li>\n<li>L'orifice A alimente la chambre côté fond d'un <strong>vérin double effet</strong> V1 (sortie de tige = ouverture de la porte) à travers un <strong>restricteur</strong> RS1 placé en parallèle d'un clapet anti-retour CV2 qui laisse passer librement le fluide vers le vérin et oblige le fluide sortant du vérin à passer par RS1.</li>\n<li>L'orifice B alimente la chambre côté tige.</li>\n<li>Un <strong>limiteur de pression</strong> RV1, taré au-dessus de la pression du circuit, relie la chambre côté tige au retour.</li>\n<li>Le retour R rejoint le réservoir.</li>\n</ul>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<h4>Fonctionnement à l'ouverture</h4>\n<p>Pour ouvrir la porte (après déverrouillage, non représenté), S1 est alimenté : DV1 passe en position gauche. La pression P, à travers CV1 et F1, atteint l'orifice A, traverse librement CV2 et entre dans la chambre côté fond de V1 : la tige sort et la porte s'ouvre. Le fluide de la chambre côté tige est chassé par B vers R et retourne au réservoir.</p>\n<h4>Fonctionnement à la fermeture</h4>\n<p>S2 est alimenté : DV1 passe en position droite. La pression atteint B et la chambre côté tige : la tige rentre. Le fluide de la chambre côté fond sort par A ; CV2 lui interdit le passage, il doit traverser le restricteur RS1. La vitesse de fermeture est donc <strong>freinée</strong> : RS1 contrôle la descente de la porte, qui est aidée par son poids. C'est un montage classique de limitation de vitesse en sortie de vérin.</p>\n<h4>Rôle des autres composants</h4>\n<ul>\n<li>CV1 empêche le fluide de repartir vers le circuit en cas de chute de pression, ce qui conserve la pression de l'accumulateur ACC1.</li>\n<li>ACC1 fournit une réserve permettant une manœuvre même si la pression du circuit baisse momentanément.</li>\n<li>F1 protège le distributeur, sensible aux particules.</li>\n<li>RV1 protège la chambre côté tige contre une surpression, par exemple due à la dilatation thermique du fluide piégé distributeur fermé.</li>\n<li>En position centrale, tous les orifices fermés bloquent le vérin dans sa position.</li>\n</ul>\n<h4>Analyse d'une panne et précautions</h4>\n<p>Plainte : « la porte se ferme brutalement ». Le trajet de fermeture montre que la vitesse est réglée par RS1 grâce à CV2. Une fermeture brutale oriente vers un CV2 qui ne se ferme plus (bille bloquée ouverte, fluide libre à travers lui) ou vers un RS1 détérioré. Les contrôles portent donc sur ces deux éléments, après mise en sécurité de la porte (béquille ou dispositif de maintien) et dépressurisation.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur ce schéma, ACC1 et CV1 maintiennent une pression entre CV1 et le distributeur même circuit arrêté. Avant de déposer F1, DV1 ou une tuyauterie de cette partie, la pression de l'accumulateur doit être déchargée selon la tâche ; la mention de cette précaution fait partie d'une analyse complète.</div>"
      }
     ],
     "points_cles": [
      "Les schémas de fluides utilisent des symboles dérivés de la norme ISO 1219-1",
      "Le schéma est dessiné dans une condition de référence indiquée",
      "Un distributeur se désigne par nombre d'orifices / nombre de positions",
      "La position de repos est celle dessinée raccordée aux conduites",
      "On suit le fluide sous pression puis le retour, phase par phase",
      "Un restricteur associé à un clapet freine un mouvement dans un seul sens",
      "Clapets et accumulateurs peuvent piéger une pression circuit arrêté",
      "L'analyse d'une panne reprend le trajet du fluide pour cibler les composants"
     ],
     "lexique": [
      {
       "terme": "ISO 1219-1",
       "def": "Norme internationale des symboles graphiques des transmissions hydrauliques et pneumatiques."
      },
      {
       "terme": "Distributeur 4/3",
       "def": "Distributeur à quatre orifices et trois positions."
      },
      {
       "terme": "Position de repos",
       "def": "Position d'un distributeur en l'absence de commande, imposée par ses ressorts."
      },
      {
       "terme": "Clapet anti-retour",
       "def": "Composant laissant passer le fluide dans un seul sens."
      },
      {
       "terme": "Restricteur",
       "def": "Étranglement qui limite le débit et donc la vitesse d'un actionneur."
      },
      {
       "terme": "Limiteur de pression",
       "def": "Valve qui s'ouvre vers le retour lorsque la pression dépasse son tarage."
      },
      {
       "terme": "Conduite de pilotage",
       "def": "Conduite transmettant une pression de commande à un composant."
      },
      {
       "terme": "Vérin double effet",
       "def": "Vérin dont la tige est déplacée hydrauliquement dans les deux sens."
      }
     ]
    },
    {
     "id": "baer-doc-manuel-reparation-structurale",
     "titre": "Exploiter le manuel de réparation structurale (SRM)",
     "niveau": "Tle",
     "options": [
      "structure"
     ],
     "duree": 40,
     "objectifs": [
      "Situer le manuel de réparation structurale et son organisation par chapitres",
      "Identifier un élément de structure et son matériau à partir des figures d'identification",
      "Comparer un dommage aux limites de dommages admissibles",
      "Lire une réparation type : matériaux, fixations, implantation, protection, inspections",
      "Rédiger une analyse de dommage et une proposition de traitement justifiée"
     ],
     "sections": [
      {
       "titre": "Le manuel et son organisation",
       "contenu": "<p>Le <strong>manuel de réparation structurale</strong> (SRM : Structural Repair Manual) est publié par le constructeur pour chaque type d'aéronef. Il contient les données approuvées permettant d'évaluer les dommages de structure et de les réparer sans demander d'étude particulière, dans les limites qu'il définit.</p>\n<p>Il est organisé selon la numérotation ATA, avec un chapitre général et des chapitres par grande partie de structure.</p>\n<table><thead><tr><th>Chapitre</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>51</td><td>Généralités et pratiques standard : matériaux, fixations, perçage et rivetage, traitements de surface, mastics, évaluation des dommages, classification des réparations, aérodynamique</td></tr>\n<tr><td>52</td><td>Portes</td></tr>\n<tr><td>53</td><td>Fuselage</td></tr>\n<tr><td>54</td><td>Nacelles et mâts</td></tr>\n<tr><td>55</td><td>Stabilisateurs (empennages)</td></tr>\n<tr><td>56</td><td>Hublots et pare-brise</td></tr>\n<tr><td>57</td><td>Voilure</td></tr>\n</tbody></table>\n<p>Pour chaque zone ou élément, on trouve en général : une <strong>identification</strong> (figure montrant les pièces, leur matériau, leur épaisseur et leur traitement), des <strong>dommages admissibles</strong> (limites au-delà desquelles une réparation est nécessaire), et des <strong>réparations</strong> types.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le chapitre ATA 51 est la base de tout : il fixe les règles générales (pince, pas, fixations de remplacement, protections) que les réparations des autres chapitres supposent connues. Une réparation type se lit toujours avec le chapitre ATA 51.</div>"
      },
      {
       "titre": "Identification de la structure et dommages admissibles",
       "contenu": "<p>La figure d'<strong>identification</strong> donne pour chaque élément d'une zone (revêtement, lisses, cadres, cornières) son numéro de repère, sa désignation, son <strong>matériau</strong> (alliage et état, par exemple 2024-T3 plaqué), son <strong>épaisseur</strong> nominale, et parfois des notes (traitement, zone de surépaisseur usinée). Ces données permettent de choisir le matériau de réparation et de calculer les profondeurs admissibles.</p>\n<p>Les <strong>dommages admissibles</strong> sont classés par type : rayures et entailles, corrosion, enfoncements, criques, trous. Pour chaque type, la limite peut dépendre de :</p>\n<ul>\n<li>la profondeur, souvent exprimée en pourcentage de l'épaisseur ;</li>\n<li>la longueur et la largeur ;</li>\n<li>la distance aux fixations, aux bords, aux autres dommages ;</li>\n<li>la zone (certaines zones critiques n'admettent pas de dommage) ;</li>\n<li>les traitements obligatoires après évaluation (adoucissement, protection, inspection répétitive).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la profondeur admissible se calcule à partir de l'épaisseur <strong>nominale</strong> donnée par la figure d'identification, après élimination complète du défaut. Une rayure qui semble petite peut dépasser la limite une fois adoucie, et plusieurs dommages proches doivent parfois être traités comme un seul dommage.</div>"
      },
      {
       "titre": "Méthode d'exploitation",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter le manuel de réparation structurale pour un dommage. 1) Localiser précisément le dommage (côté, stations ou cadres, lisses, zone) et le décrire (type, dimensions, distance aux fixations). 2) Ouvrir le chapitre de la zone et la figure d'identification : relever l'élément, son matériau et son épaisseur. 3) Ouvrir la page des dommages admissibles de l'élément et vérifier chaque critère. 4) Si le dommage est admissible, appliquer les actions associées (adoucissement, protection, éventuelle inspection). 5) Sinon, rechercher une réparation type applicable et vérifier ses conditions d'emploi (dimensions maximales du dommage, zone, distance à d'autres réparations). 6) Lister ce qu'impose la réparation : matériau et épaisseur des pièces, fixations et diamètres, implantation, mastics, protection, inspections ultérieures, éventuelle catégorie de la réparation. 7) Si aucune donnée ne couvre le cas, rédiger une demande de réparation au constructeur avec toutes les informations.</div>\n<p>Une réparation du manuel peut être <strong>permanente</strong>, permanente avec inspections supplémentaires, ou <strong>temporaire</strong> avec une durée de validité limitée. Ces informations doivent être transmises au bureau technique pour mise à jour du programme d'entretien de l'avion.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une réparation réalisée est enregistrée dans le dossier de l'avion avec sa localisation exacte, la référence de la donnée utilisée, les mesures, les matériaux et fixations, et souvent un croquis. Ce dossier permet, des années plus tard, de savoir ce qui se trouve sous la peinture et d'évaluer un nouveau dommage voisin.</div>"
      },
      {
       "titre": "Lire une réparation type",
       "contenu": "<p>Une <strong>réparation type</strong> se présente sous forme d'une figure (vue de dessus et coupe de la réparation) accompagnée de tableaux et de notes. Pour un revêtement, la plus courante est la <strong>doublure externe</strong> : le dommage est découpé ou adouci, puis une tôle de renfort, la doublure, est fixée par-dessus avec plusieurs rangées de fixations de part et d'autre de la zone découpée. Sa lecture suit toujours le même ordre.</p>\n<table><thead><tr><th>Rubrique de la figure</th><th>Ce qu'il faut relever</th></tr></thead><tbody>\n<tr><td>Conditions d'emploi</td><td>Dimensions maximales du dommage ou de la découpe, zones exclues, distance minimale à une autre réparation ou à un cadre</td></tr>\n<tr><td>Liste des pièces</td><td>Repère, désignation, matériau et état (par exemple 2024-T3 plaqué), épaisseur, quantité</td></tr>\n<tr><td>Fixations</td><td>Type et référence des rivets ou fixations, diamètre, longueur ou grip, fixation de remplacement en cas de surdimensionnement</td></tr>\n<tr><td>Implantation</td><td>Nombre de rangées, pas entre fixations, pince (distance au bord), décalage des rangées, cotes par rapport à la découpe</td></tr>\n<tr><td>Protection et étanchéité</td><td>Traitement des chants découpés, primaire, mastic d'interposition, finition</td></tr>\n<tr><td>Notes</td><td>Catégorie de la réparation, inspections supplémentaires et leurs seuils, renvois aux pratiques standard</td></tr>\n</tbody></table>\n<p>Les valeurs de pince et de pas ne s'inventent jamais : elles sont données soit sur la figure, soit dans les pratiques standard du chapitre ATA 51. Des ordres de grandeur reviennent souvent (pince voisine de 2 D, pas de quelques D), mais seule la valeur du manuel de l'avion concerné fait foi.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une réparation type n'est applicable que si toutes ses conditions d'emploi sont respectées. Une doublure prévue pour une découpe de 50 mm ne s'utilise pas pour une découpe de 70 mm, même en ajoutant une rangée de rivets : ce serait une modification de la donnée approuvée, qui relève du constructeur.</div>"
      },
      {
       "titre": "Exemple commenté : le dommage et les données",
       "contenu": "<p>Le dossier d'épreuve décrit la situation suivante, pour un avion d'un constructeur fictif.</p>\n<p><strong>Constat</strong> : au cours d'une inspection, une rayure a été trouvée sur le revêtement du fuselage côté droit, entre les cadres 34 et 35, entre les lisses 14 et 15. Longueur 60 mm, orientée longitudinalement, profondeur mesurée 0,12 mm. Distance à la rangée de rivets la plus proche : 22 mm. Aucune autre rayure dans la zone. Rivets de la zone : diamètre 4 mm.</p>\n<p><strong>Extrait de la figure d'identification (chapitre ATA 53)</strong> : revêtement repère 1, alliage 2024-T3 plaqué, épaisseur nominale 1,6 mm.</p>\n<p><strong>Extrait des dommages admissibles du revêtement (règles fictives de l'exemple)</strong> :</p>\n<table><thead><tr><th>Critère</th><th>Limite</th></tr></thead><tbody>\n<tr><td>Profondeur après adoucissement</td><td>Au plus 10 % de l'épaisseur nominale</td></tr>\n<tr><td>Longueur</td><td>Au plus 100 mm</td></tr>\n<tr><td>Distance au bord d'un trou de fixation</td><td>Au moins 4 D, D étant le diamètre de la fixation</td></tr>\n<tr><td>Rapport longueur / profondeur de l'adoucissement</td><td>Au moins 20 pour 1</td></tr>\n<tr><td>Actions</td><td>Adoucir selon le chapitre ATA 51, contrôler l'absence de crique par courants de Foucault, restaurer la protection</td></tr>\n</tbody></table>\n<p>Au-delà de ces limites, le manuel renvoie à une réparation type par doublure externe décrite au même chapitre.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<h4>Identification</h4>\n<p>Le dommage se situe sur le revêtement repère 1 du fuselage côté droit, en 2024-T3 plaqué d'épaisseur nominale 1,6 mm. C'est un élément du revêtement pressurisé, travaillant en tension circonférentielle : une rayure orientée longitudinalement est perpendiculaire à cette tension, ce qui la rend plus sensible à l'amorçage de crique.</p>\n<h4>Comparaison aux limites</h4>\n<table><thead><tr><th>Critère</th><th>Calcul</th><th>Conclusion</th></tr></thead><tbody>\n<tr><td>Profondeur</td><td>Limite : 10 % × 1,6 = 0,16 mm ; profondeur actuelle 0,12 mm ; l'adoucissement doit enlever le fond de rayure, il faut prévoir une profondeur finale proche de 0,14 mm</td><td>Conforme si la profondeur finale reste inférieure ou égale à 0,16 mm</td></tr>\n<tr><td>Longueur</td><td>60 mm pour 100 mm maximum</td><td>Conforme</td></tr>\n<tr><td>Distance aux fixations</td><td>4 D = 4 × 4 = 16 mm ; distance mesurée 22 mm ; l'adoucissement élargira la zone de quelques millimètres</td><td>Conforme, à vérifier après adoucissement</td></tr>\n<tr><td>Adoucissement</td><td>Pour 0,14 mm de profondeur, longueur de raccordement d'au moins 20 × 0,14 = 2,8 mm de part et d'autre du fond</td><td>Réalisable</td></tr>\n</tbody></table>\n<h4>Décision et actions</h4>\n<p>Le dommage est <strong>admissible sans réparation structurale</strong>, sous réserve que les mesures après adoucissement restent dans les limites. Les actions sont : adoucir la rayure selon le chapitre ATA 51 jusqu'à disparition complète, mesurer la profondeur et la distance finales, contrôler l'absence de crique par courants de Foucault (opérateur certifié), puis restaurer la protection (conversion chimique sur la zone dont le placage a été enlevé, primaire, finition).</p>\n<p>Si, après adoucissement, la profondeur dépassait 0,16 mm ou si une crique était détectée, le dommage deviendrait non admissible : il faudrait appliquer la réparation type par doublure, en vérifiant ses conditions d'emploi, ou consulter le constructeur.</p>\n<h4>Enregistrement</h4>\n<p>Localisation (côté droit, cadres 34-35, lisses 14-15), dimensions initiales et finales, référence des pages du manuel utilisées et de leur révision, résultat du contrôle par courants de Foucault, produits de protection et lots, signatures.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> conclure « conforme » à partir de la seule profondeur initiale est une erreur fréquente. La décision porte sur l'état après élimination du défaut ; une analyse complète l'écrit explicitement et prévoit l'alternative si la mesure finale est hors limites.</div>"
      }
     ],
     "points_cles": [
      "Le SRM fournit les données approuvées d'évaluation et de réparation de la structure",
      "Chapitre 51 pour les généralités, 52 à 57 pour les parties de structure",
      "La figure d'identification donne matériau, état et épaisseur nominale",
      "Les limites de dommages portent sur profondeur, dimensions, distances et zone",
      "La profondeur admissible se juge après adoucissement complet",
      "Une réparation type a des conditions d'emploi à vérifier",
      "Réparations permanentes, avec inspections ou temporaires sont transmises au bureau technique",
      "Une analyse écrite chiffre chaque critère et prévoit l'alternative"
     ],
     "lexique": [
      {
       "terme": "SRM",
       "def": "Manuel de réparation structurale publié par le constructeur."
      },
      {
       "terme": "Figure d'identification",
       "def": "Figure du SRM donnant pour chaque élément son matériau, son état et son épaisseur."
      },
      {
       "terme": "Dommage admissible",
       "def": "Dommage dont les dimensions sont dans les limites ne nécessitant pas de réparation structurale."
      },
      {
       "terme": "Réparation type",
       "def": "Réparation décrite dans le SRM et applicable dans des conditions définies."
      },
      {
       "terme": "Épaisseur nominale",
       "def": "Épaisseur de définition d'une pièce, servant de base au calcul des limites."
      },
      {
       "terme": "Réparation temporaire",
       "def": "Réparation à durée de validité limitée, à remplacer par une réparation permanente."
      },
      {
       "terme": "Demande de réparation",
       "def": "Demande adressée au constructeur pour un dommage non couvert par le SRM."
      },
      {
       "terme": "Revêtement plaqué",
       "def": "Tôle d'alliage recouverte d'une fine couche d'aluminium pur protectrice."
      }
     ]
    }
   ]
  }
 ]
};
