/* Polymates — Bac pro Maintenance nautique — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-nautique"] = {
 "id": "bp-nautique",
 "nom": "Maintenance nautique",
 "icone": "🎓",
 "couleur": "#82b4d2",
 "intro": "Le bac pro Maintenance nautique forme des techniciens et techniciennes de chantier naval, de concession ou d'atelier portuaire, capables de prendre en charge un bateau de plaisance ou un équipement, de diagnostiquer une panne, d'entretenir, réparer et installer, puis de restituer le bateau au client : mécanicien de marine, technicien de maintenance nautique, électricien et électronicien de bord, stratifieur en réparation. Ce cours de première et de terminale, construit sur le référentiel de 2023, reprend brièvement les bases utiles (architecture du bateau, matériaux, organisation et sécurité du chantier) puis approfondit la motorisation thermique, l'électricité, l'électronique et la propulsion électrique, la coque, le gréement, les circuits de bord et la réglementation de la plaisance. Il comprend deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre, exemples commentés à l'appui, comment exploiter ordres de réparation et devis, plans d'entretien et manuels d'atelier, schémas électriques, vues éclatées, fiches techniques et fiches de données de sécurité, courbes moteur et rapports d'essai.",
 "parties": [
  {
   "titre": "Partie 1 — L'embarcation, ses matériaux et l'organisation de l'intervention",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmn-embarcation-architecture-flottabilite",
     "titre": "Architecture de l'embarcation, flottabilité et stabilité",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Nommer les parties d'une coque et d'un pont avec le vocabulaire maritime",
      "Distinguer les grandes familles d'embarcations et leurs systèmes",
      "Appliquer le principe d'Archimède pour relier masse, volume immergé et tirant d'eau",
      "Situer le centre de gravité et le centre de carène et expliquer la stabilité",
      "Prévoir l'effet d'un ajout ou d'un déplacement de masse à bord"
     ],
     "sections": [
      {
       "titre": "Les bases : l'embarcation vue comme un système",
       "contenu": "<p>Pour intervenir sur un bateau, il faut d'abord le voir comme un ensemble de sous-systèmes. Ce premier point fixe le vocabulaire utilisé dans tout le cours. Une <strong>embarcation</strong> (ou navire de plaisance) est un flotteur qui doit remplir quatre fonctions principales : <strong>flotter</strong>, <strong>se déplacer</strong>, <strong>se diriger</strong> et <strong>assurer la vie et la sécurité à bord</strong>. Chaque fonction est réalisée par un ou plusieurs sous-ensembles.</p>\n<table>\n<thead><tr><th>Fonction</th><th>Sous-ensembles qui la réalisent</th><th>Exemples d'interventions</th></tr></thead>\n<tbody>\n<tr><td>Flotter, résister à la mer</td><td>Ensemble coque-pont, passe-coques, hublots</td><td>Carénage, réparation de stratifié, étanchéité</td></tr>\n<tr><td>Se déplacer</td><td>Groupe motopropulseur, transmission, hélice ; gréement et voiles</td><td>Entretien moteur, remplacement d'embase, contrôle du gréement</td></tr>\n<tr><td>Se diriger</td><td>Barre, safran, direction, pilote automatique, propulseur d'étrave</td><td>Purge de direction hydraulique, réglage de câbles</td></tr>\n<tr><td>Vivre et naviguer en sécurité</td><td>Énergies auxiliaires, électronique, circuits d'eau et de gaz, accastillage</td><td>Installation d'un traceur, contrôle d'une installation gaz</td></tr>\n</tbody>\n</table>\n<p>Cette approche fonctionnelle sert à toutes les étapes du métier : comprendre une demande client, localiser une panne, préparer une intervention.</p>"
      },
      {
       "titre": "Vocabulaire de la coque et du pont",
       "contenu": "<p>Le vocabulaire maritime est imposé par l'usage et par les documents constructeurs. Un technicien doit l'employer sans hésitation, à l'oral comme à l'écrit.</p>\n<ul>\n<li>L'<strong>étrave</strong> est l'avant de la coque ; le <strong>tableau arrière</strong> est la paroi plane qui ferme l'arrière et reçoit souvent le moteur hors-bord ou l'embase.</li>\n<li><strong>Bâbord</strong> est le côté gauche en regardant vers l'avant, <strong>tribord</strong> le côté droit.</li>\n<li>Les <strong>œuvres vives</strong> sont la partie immergée de la coque ; les <strong>œuvres mortes</strong> la partie émergée. La limite entre les deux est la <strong>ligne de flottaison</strong>.</li>\n<li>La <strong>quille</strong> est l'axe longitudinal bas de la coque ; sur un voilier, le <strong>lest</strong> (fonte ou plomb) abaisse le centre de gravité.</li>\n<li>Le <strong>franc-bord</strong> est la hauteur entre la flottaison et le pont ; le <strong>tirant d'eau</strong> est la profondeur entre la flottaison et le point le plus bas.</li>\n<li>Le <strong>bau</strong> est la largeur maximale ; la <strong>longueur de coque</strong> est mesurée selon une norme (ISO 8666), à ne pas confondre avec la longueur hors-tout qui inclut les appendices.</li>\n<li>Le <strong>cockpit</strong> est l'espace ouvert de pilotage ; il doit être <strong>autovideur</strong> sur de nombreux bateaux, c'est-à-dire évacuer l'eau par gravité par des dalots.</li>\n<li>Les <strong>fonds</strong> (ou la <strong>cale</strong>) sont la partie basse intérieure où se rassemblent les eaux, aspirées par la <strong>pompe de cale</strong>.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un ordre de réparation, « côté gauche » est ambigu (vu de l'avant ou de l'arrière ?). Écrire systématiquement bâbord ou tribord évite de remplacer le mauvais feu de navigation ou de démonter le mauvais flap.</div>"
      },
      {
       "titre": "Les grandes familles d'embarcations",
       "contenu": "<p>Le technicien intervient sur des supports variés, chacun ayant ses points de vigilance.</p>\n<table>\n<thead><tr><th>Famille</th><th>Caractéristiques</th><th>Points de maintenance typiques</th></tr></thead>\n<tbody>\n<tr><td>Semi-rigide</td><td>Coque rigide en composite ou aluminium et flotteurs gonflables en PVC ou hypalon</td><td>Étanchéité des flotteurs, valves, collages, moteur hors-bord</td></tr>\n<tr><td>Bateau à moteur open ou cabine</td><td>Coque planante, motorisation hors-bord, in-bord ou en Z</td><td>Moteur, embase, direction, trim, électricité</td></tr>\n<tr><td>Vedette, yacht</td><td>Coque planante ou semi-planante, souvent deux moteurs in-bord diesel</td><td>Lignes d'arbre, groupe électrogène, réseaux, confort</td></tr>\n<tr><td>Voilier monocoque</td><td>Quille lestée, gréement, moteur auxiliaire in-bord ou saildrive</td><td>Gréement, voiles, accastillage, quille, moteur auxiliaire</td></tr>\n<tr><td>Multicoque</td><td>Deux (catamaran) ou trois (trimaran) coques, grande surface de pont</td><td>Deux moteurs, bras de liaison, trampoline, nombreux équipements</td></tr>\n<tr><td>Véhicule nautique à moteur (VNM, « jet »)</td><td>Propulsion par turbine (hydrojet)</td><td>Turbine, grille d'aspiration, moteur à forte puissance massique</td></tr>\n</tbody>\n</table>\n<p>On distingue aussi les coques <strong>à déplacement</strong>, qui restent enfoncées et dont la vitesse est limitée par la vague qu'elles créent, et les coques <strong>planantes</strong>, qui s'élèvent sur l'eau grâce à la portance hydrodynamique au-delà d'une certaine vitesse. Une coque semi-planante est intermédiaire.</p>"
      },
      {
       "titre": "Flottabilité : le principe d'Archimède",
       "contenu": "<p>Une embarcation flotte parce qu'elle subit une force verticale vers le haut appelée <strong>poussée d'Archimède</strong>. Son intensité est égale au poids du volume d'eau déplacé :</p>\n<p><strong>F<sub>A</sub> = ρ × V × g</strong>, avec F<sub>A</sub> en newtons (N), ρ la masse volumique de l'eau en kg/m³, V le volume immergé (ou <strong>volume de carène</strong>) en m³ et g ≈ 9,81 N/kg.</p>\n<p>À l'équilibre, la poussée compense exactement le poids P = m × g de l'embarcation. On en déduit V = m / ρ. La masse de l'embarcation en charge s'appelle le <strong>déplacement</strong>.</p>\n<table>\n<thead><tr><th>Milieu</th><th>Masse volumique moyenne</th><th>Conséquence</th></tr></thead>\n<tbody>\n<tr><td>Eau douce (lac, rivière)</td><td>1 000 kg/m³</td><td>Le bateau s'enfonce un peu plus</td></tr>\n<tr><td>Eau de mer</td><td>environ 1 025 kg/m³</td><td>Le bateau flotte un peu plus haut</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le volume immergé d'un bateau de 2 400 kg en mer, puis en eau douce.<br>1. Écrire l'équilibre : ρ × V × g = m × g, donc V = m / ρ.<br>2. En mer : V = 2 400 / 1 025 ≈ 2,34 m³.<br>3. En eau douce : V = 2 400 / 1 000 = 2,40 m³.<br>4. Interpréter : 60 litres de carène en plus en eau douce, soit quelques millimètres de tirant d'eau supplémentaires. Pour un ajout de matériel, le même calcul donne le volume supplémentaire immergé : 150 kg de batteries et de réservoir plein enfoncent la coque d'environ 0,15 m³ en mer.</div>"
      },
      {
       "titre": "Centre de gravité, centre de carène et stabilité",
       "contenu": "<p>Le poids s'applique au <strong>centre de gravité G</strong>, point où l'on peut considérer toute la masse concentrée. La poussée d'Archimède s'applique au <strong>centre de carène C</strong>, centre géométrique du volume immergé. Bateau droit et au repos, G et C sont sur la même verticale.</p>\n<p>Quand le bateau gîte (s'incline sur le côté), la forme du volume immergé change : C se déplace vers le côté qui s'enfonce. Le poids et la poussée ne sont plus alignés et forment un <strong>couple de redressement</strong> si la nouvelle position de C ramène le bateau. Le point d'intersection de la verticale passant par C avec l'axe de symétrie du bateau, pour de petites inclinaisons, est le <strong>métacentre M</strong>. Le bateau est stable si M est au-dessus de G : la distance <strong>GM</strong> (hauteur métacentrique) doit être positive.</p>\n<ul>\n<li>Abaisser G (lest, batteries posées bas, réservoir dans les fonds) augmente la stabilité.</li>\n<li>Monter des masses en hauteur (radar sur arceau, mât plus lourd, annexe sur le toit) diminue GM.</li>\n<li>Les liquides libres (cale pleine d'eau, réservoir à moitié plein sans cloisons) se déplacent vers le côté qui gîte et réduisent la stabilité.</li>\n</ul>\n<p>Le <strong>moment</strong> d'une force par rapport à un point est M = F × d (en N·m), d étant la distance perpendiculaire entre la ligne d'action et le point. Le couple de redressement vaut P × GZ, où GZ est le bras de levier horizontal entre G et la verticale de C.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> flottabilité et stabilité sont deux notions différentes. La flottabilité dépend du volume immergé, la stabilité dépend de la position relative de G et de C. Un bateau peut très bien flotter et être instable.</div>"
      },
      {
       "titre": "Assiette et répartition des masses",
       "contenu": "<p>L'<strong>assiette</strong> est l'inclinaison longitudinale du bateau : il peut être « sur le nez » (avant enfoncé) ou « sur le cul » (arrière enfoncé). Une modification de masse à l'arrière, comme le remplacement d'un hors-bord par un modèle plus lourd, déplace G vers l'arrière et modifie l'assiette, donc le comportement en navigation : difficulté à déjauger, tableau qui embarque de l'eau, consommation en hausse.</p>\n<p>Pour estimer le nouveau centre de gravité longitudinal après une modification, on utilise la somme des moments :</p>\n<p><strong>x<sub>G</sub> = (m<sub>1</sub> × x<sub>1</sub> + m<sub>2</sub> × x<sub>2</sub> + …) / (m<sub>1</sub> + m<sub>2</sub> + …)</strong></p>\n<p>Exemple : un bateau de 1 200 kg a son G à 2,60 m du tableau arrière. On ajoute à 0,20 m du tableau un moteur plus lourd de 40 kg. Nouveau x<sub>G</sub> = (1 200 × 2,60 + 40 × 0,20) / 1 240 = (3 120 + 8) / 1 240 ≈ 2,52 m. G recule de 8 cm, ce qui est sensible sur une petite coque planante.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'une remotorisation, le vendeur vérifie la puissance et la masse maximales indiquées sur la plaque constructeur. Le technicien contrôle ensuite au premier essai la hauteur de l'anti-cavitation par rapport au fond de coque, l'assiette au repos et le déjaugeage. Une remarque écrite sur l'ordre de réparation protège l'entreprise si le client a imposé un moteur hors préconisations.</div>"
      },
      {
       "titre": "Forces au chantier : levage et calage",
       "contenu": "<p>Les notions de poids et de centre de gravité servent aussi à terre. Pour sortir un bateau de l'eau avec un <strong>portique élévateur</strong> (travel-lift) ou une grue, les sangles doivent encadrer le centre de gravité ; sinon, le bateau bascule dans les sangles. Les constructeurs repèrent souvent les points de sanglage par un pictogramme sur la coque.</p>\n<p>Une fois au sec, l'embarcation repose sur un <strong>ber</strong> ou sur des <strong>tins</strong> et des <strong>épontilles</strong> (étais réglables). Le poids doit être repris principalement par la quille ou par les zones renforcées de la coque ; les épontilles ne font que maintenir l'équilibre latéral. Un voilier lesté repose sur sa quille, les épontilles assurent l'équilibre.</p>\n<ul>\n<li>Ne jamais placer une épontille sur une zone non renforcée (déformation, fissure du gelcoat).</li>\n<li>Ne jamais retirer une épontille sans en avoir placé une autre à proximité.</li>\n<li>Tenir compte de la prise au vent du bateau au sec, surtout pour un voilier mâté.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un bateau sur remorque ou sur ber n'est pas un objet stable par nature. Avant de monter à bord pour travailler, vérifier le calage. Un bateau qui se couche entraîne des blessures graves et des dégâts considérables.</div>"
      }
     ],
     "points_cles": [
      "Une embarcation remplit quatre fonctions : flotter, se déplacer, se diriger, assurer la vie et la sécurité à bord.",
      "Bâbord est à gauche et tribord à droite en regardant vers l'avant.",
      "Les œuvres vives sont immergées, les œuvres mortes émergées, séparées par la ligne de flottaison.",
      "La poussée d'Archimède vaut ρ × V × g ; à l'équilibre le volume immergé vaut m / ρ.",
      "L'eau de mer (environ 1 025 kg/m³) porte un peu plus que l'eau douce (1 000 kg/m³).",
      "Un bateau est stable si le métacentre M est au-dessus du centre de gravité G.",
      "Ajouter des masses en hauteur ou laisser des liquides libres diminue la stabilité.",
      "Le nouveau centre de gravité se calcule par la somme des moments divisée par la masse totale.",
      "Au chantier, les sangles encadrent le centre de gravité et les épontilles ne font que maintenir l'équilibre."
     ],
     "lexique": [
      {
       "terme": "Œuvres vives",
       "def": "Partie de la coque située sous la ligne de flottaison."
      },
      {
       "terme": "Œuvres mortes",
       "def": "Partie de la coque située au-dessus de la ligne de flottaison."
      },
      {
       "terme": "Tirant d'eau",
       "def": "Profondeur entre la ligne de flottaison et le point le plus bas de l'embarcation."
      },
      {
       "terme": "Franc-bord",
       "def": "Hauteur entre la ligne de flottaison et le pont."
      },
      {
       "terme": "Déplacement",
       "def": "Masse de l'embarcation, égale à la masse d'eau qu'elle déplace."
      },
      {
       "terme": "Centre de carène",
       "def": "Point d'application de la poussée d'Archimède, centre du volume immergé."
      },
      {
       "terme": "Métacentre",
       "def": "Point au-dessus duquel ne doit pas se trouver le centre de gravité pour que le bateau soit stable."
      },
      {
       "terme": "Assiette",
       "def": "Inclinaison longitudinale de l'embarcation par rapport à sa flottaison de référence."
      },
      {
       "terme": "Épontille",
       "def": "Étai réglable qui maintient latéralement un bateau posé au sec."
      },
      {
       "terme": "Portique élévateur",
       "def": "Engin roulant à sangles qui sort les bateaux de l'eau et les déplace au chantier, appelé aussi travel-lift."
      }
     ]
    },
    {
     "id": "bmn-materiaux-construction-nautique",
     "titre": "Matériaux de construction nautique et comportement en milieu marin",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Identifier les matériaux d'une coque et d'un pont : composites, aluminium, acier, bois",
      "Décrire la constitution d'un stratifié et d'un sandwich",
      "Expliquer le rôle de la résine, du renfort, du gelcoat et de l'âme",
      "Reconnaître les principales dégradations : osmose, délaminage, corrosion",
      "Choisir un matériau ou un produit compatible avec le milieu marin"
     ],
     "sections": [
      {
       "titre": "Panorama des matériaux d'une embarcation",
       "contenu": "<p>La très grande majorité des bateaux de plaisance construits depuis les années 1970 ont une coque en <strong>matériau composite</strong>, c'est-à-dire l'association d'une <strong>résine</strong> (la matrice, qui donne la forme et colle l'ensemble) et d'un <strong>renfort</strong> en fibres (qui apporte la résistance mécanique). On rencontre aussi l'aluminium, l'acier, le bois et, pour les flotteurs de semi-rigides, des tissus enduits.</p>\n<table>\n<thead><tr><th>Matériau</th><th>Où le trouve-t-on ?</th><th>Atouts</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Composite verre-polyester</td><td>Coques et ponts de série</td><td>Moulage en série, faible entretien, coût modéré</td><td>Sensible à l'osmose, aux chocs ponctuels</td></tr>\n<tr><td>Composite verre ou carbone-époxy</td><td>Voiliers de course, pièces techniques, réparations</td><td>Très résistant, léger, bonne étanchéité</td><td>Coût, mise en œuvre exigeante</td></tr>\n<tr><td>Alliage d'aluminium</td><td>Coques de semi-rigides, bateaux de travail, voiliers de voyage, mâts</td><td>Léger, résistant aux chocs, recyclable</td><td>Corrosion galvanique au contact d'autres métaux</td></tr>\n<tr><td>Acier</td><td>Péniches, grandes unités, quilles</td><td>Robuste, soudable partout</td><td>Lourd, corrosion à surveiller en permanence</td></tr>\n<tr><td>Bois (massif, contreplaqué marine, bois moulé)</td><td>Bateaux classiques, aménagements intérieurs, ponts en teck</td><td>Esthétique, réparable</td><td>Pourriture, entretien régulier</td></tr>\n<tr><td>Tissu PVC ou hypalon (CSM)</td><td>Flotteurs de semi-rigides et d'annexes</td><td>Souple, léger</td><td>Vieillissement aux UV ; l'hypalon résiste mieux que le PVC</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Les résines et les renforts",
       "contenu": "<p>La résine utilisée en construction de série est le plus souvent une <strong>résine polyester insaturé</strong>. Elle durcit (on dit qu'elle <strong>polymérise</strong>) après ajout d'un <strong>catalyseur</strong>, généralement un peroxyde organique (PMEC), dosé de l'ordre de 1 à 2 % selon la fiche technique et la température. Il existe plusieurs qualités : <strong>orthophtalique</strong> (courante), <strong>isophtalique</strong> (meilleure tenue à l'eau), et la <strong>vinylester</strong>, plus résistante à l'osmose, souvent utilisée pour les premières couches sous le gelcoat.</p>\n<p>La <strong>résine époxy</strong> est un système à deux composants (base et durcisseur) mélangés dans un rapport précis, en masse ou en volume. Elle adhère très bien sur un support existant, ce qui en fait la résine de référence en réparation et en traitement de l'osmose.</p>\n<table>\n<thead><tr><th>Renfort</th><th>Description</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Mat de verre</td><td>Fibres courtes orientées au hasard, liées par un liant soluble dans le styrène</td><td>Premières couches, liaison entre tissus, polyester uniquement en général</td></tr>\n<tr><td>Tissu (taffetas, roving)</td><td>Fibres continues tissées à 0° et 90°</td><td>Résistance dans deux directions</td></tr>\n<tr><td>Multiaxial (biaxial, triaxial)</td><td>Couches de fibres continues cousues, par exemple à +45° et -45°</td><td>Zones très sollicitées, réparations structurelles</td></tr>\n<tr><td>Fibre de carbone</td><td>Très rigide et légère</td><td>Mâts, safrans, renforts locaux</td></tr>\n<tr><td>Fibre d'aramide</td><td>Très résistante aux chocs et à l'arrachement</td><td>Zones exposées aux impacts</td></tr>\n</tbody>\n</table>\n<p>Le <strong>grammage</strong> d'un renfort s'exprime en g/m² (par exemple un mat 300 g/m² ou un biaxial 600 g/m²). Le <strong>taux de fibre</strong> est la proportion de fibres dans le stratifié : plus il est élevé, plus le stratifié est résistant pour une même masse. Un stratifié au contact manuel a un taux de fibre plus faible qu'une pièce réalisée sous vide ou par infusion.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la résine polyester n'adhère pas correctement sur un stratifié époxy durci. On peut réparer un bateau polyester avec de l'époxy, mais pas l'inverse. En cas de doute sur la nature de la coque, la réparation se fait à l'époxy.</div>"
      },
      {
       "titre": "Stratifié, gelcoat et sandwich",
       "contenu": "<p>Une coque de série est fabriquée dans un <strong>moule femelle</strong>. On y projette d'abord le <strong>gelcoat</strong>, couche de résine pigmentée de quelques dixièmes de millimètre qui donne l'aspect brillant et protège le stratifié des UV et de l'eau. Viennent ensuite les couches de renfort imprégnées de résine : c'est le <strong>stratifié</strong> (on dit aussi la stratification).</p>\n<p>Pour gagner en rigidité sans alourdir, on réalise un <strong>sandwich</strong> : deux peaux de stratifié séparées par une <strong>âme</strong> légère. L'âme peut être en <strong>mousse PVC</strong> à cellules fermées, en <strong>balsa</strong> (bois très léger posé debout, fibres perpendiculaires aux peaux) ou en nid d'abeilles. Le sandwich multiplie la rigidité en flexion, comme une poutre en I.</p>\n<ul>\n<li>Coque monolithique : stratifié plein, fréquent sous la flottaison.</li>\n<li>Coque sandwich : fréquente pour les ponts, les roufs et les bordés de grandes unités.</li>\n<li>Contre-moule : pièce moulée collée à l'intérieur de la coque qui forme les varangues, les fonds et les supports d'aménagement.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans un sandwich, les peaux travaillent en traction et compression, l'âme travaille en cisaillement. Toute entrée d'eau dans l'âme (perçage non étanché, fissure) est grave : le balsa pourrit, la mousse se décolle, le panneau perd sa rigidité.</div>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> percer proprement un pont en sandwich pour fixer un équipement.<br>1. Repérer l'emplacement et vérifier l'absence de câbles ou de renforts dessous.<br>2. Percer au diamètre de la vis, puis surpercer à un diamètre nettement supérieur (par exemple 3 fois).<br>3. Creuser l'âme autour du trou sur quelques millimètres avec un foret coudé ou une tige tordue montée sur perceuse.<br>4. Obturer le dessous, remplir le trou de résine époxy chargée.<br>5. Après durcissement, repercer au diamètre de la vis : la fixation traverse alors un bouchon étanche et résistant à l'écrasement.<br>6. Poser l'équipement avec un mastic d'étanchéité adapté.</div>"
      },
      {
       "titre": "Les métaux en milieu marin",
       "contenu": "<p>L'eau de mer est un <strong>électrolyte</strong> : elle conduit le courant grâce aux sels dissous. Deux métaux différents reliés électriquement et plongés dans l'eau de mer forment une pile : le métal le moins noble (l'<strong>anode</strong>) se dissout au profit du plus noble (la <strong>cathode</strong>). C'est la <strong>corrosion galvanique</strong>.</p>\n<table>\n<thead><tr><th>Du plus noble (protégé)…</th><th>…au moins noble (attaqué)</th></tr></thead>\n<tbody>\n<tr><td>Graphite, carbone ; titane ; acier inoxydable passif ; bronze, laiton, cuivre</td><td>Plomb ; acier ordinaire ; alliages d'aluminium ; zinc ; magnésium</td></tr>\n</tbody>\n</table>\n<p>Conséquences pratiques : une vis inox dans un mât en aluminium doit être isolée (pâte isolante, rondelle plastique) ; une hélice en bronze sur une embase en aluminium impose une protection ; un mât carbone ne doit pas recevoir de pièces aluminium sans isolation.</p>\n<ul>\n<li>Les <strong>aciers inoxydables</strong> courants à bord sont de nuances austénitiques, souvent désignées A2 (type 304) et A4 (type 316). L'A4, qui contient du molybdène, résiste mieux à l'eau de mer et est préféré pour l'accastillage et la visserie extérieure.</li>\n<li>L'inox se protège par une couche passive d'oxyde de chrome. Privé d'oxygène (sous un joint, dans un presse-étoupe, dans une fissure), il peut subir une <strong>corrosion caverneuse</strong>.</li>\n<li>Les alliages d'aluminium de la série 5000 (aluminium-magnésium, par exemple 5083) sont utilisés pour les coques, la série 6000 pour les profilés comme les mâts.</li>\n<li>Les <strong>anodes sacrificielles</strong> en zinc, en aluminium ou en magnésium sont volontairement les moins nobles : elles se dissolvent à la place des pièces à protéger.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un carénage, le technicien note l'usure des anodes. Une anode consommée à plus de la moitié est remplacée. Une anode intacte au bout d'une saison n'est pas forcément une bonne nouvelle : elle peut être peinte, mal reliée électriquement ou d'un alliage inadapté à l'eau douce.</div>"
      },
      {
       "titre": "Le bois et les flotteurs souples",
       "contenu": "<p>Le bois reste présent sur presque tous les bateaux : <strong>contreplaqué marine</strong> des cloisons et des planchers, <strong>teck</strong> des ponts et des caillebotis, bois massif des bateaux traditionnels. Le contreplaqué marine est fabriqué avec des plis sans défauts et une colle résistante à l'eau. Sa principale menace est l'humidité stagnante, qui entraîne la <strong>pourriture</strong> : bois noirci, mou, qui s'enfonce sous la pointe d'un tournevis.</p>\n<p>Les flotteurs des semi-rigides sont faits de tissu polyester enduit de <strong>PVC</strong> ou d'<strong>hypalon</strong> (un caoutchouc synthétique). Les assemblages du PVC sont souvent soudés à chaud en usine, ceux de l'hypalon sont collés. En réparation, on utilise une colle bicomposant spécifique au matériau ; une colle pour PVC ne tient pas sur l'hypalon et inversement. Le test d'identification le plus simple consiste à consulter la plaque constructeur ou la notice.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les solvants de nettoyage et de collage des flotteurs sont inflammables et nocifs. On travaille dans un local ventilé, loin de toute flamme, avec gants adaptés, en suivant la fiche de données de sécurité du produit.</div>"
      },
      {
       "titre": "Dégradations des composites : osmose et délaminage",
       "contenu": "<p>L'<strong>osmose</strong> est la dégradation d'un stratifié polyester immergé longtemps. L'eau traverse très lentement le gelcoat, réagit avec des composants mal polymérisés de la résine et forme un liquide acide sous pression. Il apparaît des <strong>cloques</strong> sur les œuvres vives ; si on en perce une, il s'en échappe un liquide à odeur piquante. À un stade avancé, les fibres se décollent de la résine.</p>\n<p>Le diagnostic se fait bateau au sec, après un temps de séchage : inspection visuelle, mesure à l'<strong>humidimètre</strong> (appareil qui indique un taux d'humidité relatif du stratifié), sondage au maillet. Le traitement consiste à enlever le gelcoat (pelage ou sablage), à laisser sécher la coque plusieurs semaines voire plusieurs mois en contrôlant l'humidité, puis à reconstituer une barrière à l'époxy.</p>\n<p>Le <strong>délaminage</strong> est le décollement de couches de stratifié entre elles, ou des peaux d'un sandwich par rapport à l'âme. Causes typiques : choc (échouage, collision), surcharge locale, défaut de fabrication, entrée d'eau dans l'âme. On le détecte au son : un léger coup de maillet produit un son mat ou creux sur la zone délaminée, alors qu'une zone saine sonne clair.</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Cause probable</th><th>Contrôle</th></tr></thead>\n<tbody>\n<tr><td>Cloques sous la flottaison</td><td>Osmose ou cloquage de peinture</td><td>Percer une cloque, humidimètre</td></tr>\n<tr><td>Fissures en étoile dans le gelcoat</td><td>Choc ponctuel</td><td>Sondage au maillet de la zone</td></tr>\n<tr><td>Fissures parallèles près d'un renfort</td><td>Flexion répétée, structure trop souple</td><td>Examen de la structure intérieure</td></tr>\n<tr><td>Pont qui « plie » sous le pied</td><td>Âme dégradée, délaminage</td><td>Sondage, humidimètre, carottage</td></tr>\n</tbody>\n</table>"
      }
     ],
     "points_cles": [
      "Un composite associe une résine (matrice) et un renfort en fibres.",
      "Le polyester est la résine de série ; l'époxy est la résine de référence en réparation.",
      "On peut réparer du polyester à l'époxy, mais pas l'inverse.",
      "Le gelcoat protège le stratifié ; l'âme d'un sandwich travaille en cisaillement et doit rester sèche.",
      "Deux métaux différents dans l'eau de mer forment une pile : le moins noble se corrode.",
      "L'inox A4 (316) est préféré à l'A2 (304) en milieu marin.",
      "Les anodes sacrificielles se dissolvent à la place des pièces à protéger et se remplacent à mi-usure.",
      "L'osmose donne des cloques sur les œuvres vives ; le délaminage se détecte au son mat sous le maillet."
     ],
     "lexique": [
      {
       "terme": "Composite",
       "def": "Matériau associant une résine et un renfort en fibres."
      },
      {
       "terme": "Gelcoat",
       "def": "Couche de résine pigmentée formant la surface extérieure d'une pièce moulée."
      },
      {
       "terme": "Stratifié",
       "def": "Empilement de couches de renfort imprégnées de résine et durcies."
      },
      {
       "terme": "Âme",
       "def": "Matériau léger placé entre les deux peaux d'un sandwich."
      },
      {
       "terme": "Polymérisation",
       "def": "Réaction chimique de durcissement d'une résine."
      },
      {
       "terme": "Grammage",
       "def": "Masse d'un renfort par unité de surface, en g/m²."
      },
      {
       "terme": "Corrosion galvanique",
       "def": "Dissolution du métal le moins noble de deux métaux reliés électriquement dans un électrolyte."
      },
      {
       "terme": "Anode sacrificielle",
       "def": "Pièce en métal peu noble qui se corrode à la place des pièces à protéger."
      },
      {
       "terme": "Osmose",
       "def": "Dégradation d'un stratifié polyester par pénétration lente d'eau, visible sous forme de cloques."
      },
      {
       "terme": "Délaminage",
       "def": "Décollement des couches d'un stratifié ou des peaux d'un sandwich."
      }
     ]
    },
    {
     "id": "bmn-prise-en-charge-restitution",
     "titre": "Prise en charge, organisation et restitution d'une intervention",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Conduire l'accueil d'un client et la réception d'une embarcation ou d'un équipement",
      "Collecter les informations utiles : identification du bateau, historique, demande",
      "Établir les documents de prise en charge : ordre de réparation, devis, commande",
      "Organiser l'intervention dans le temps et dans l'espace du chantier",
      "Restituer l'embarcation et expliquer l'intervention au client"
     ],
     "sections": [
      {
       "titre": "Le déroulement d'une intervention dans une entreprise nautique",
       "contenu": "<p>Une entreprise de maintenance nautique (chantier, concession, atelier portuaire, base nautique) traite chaque intervention selon un enchaînement stable, que l'on retrouve dans le référentiel du diplôme : <strong>prise en charge</strong>, <strong>diagnostic</strong>, <strong>intervention</strong>, <strong>restitution</strong>. Le technicien de bac pro participe à toutes ces étapes, en autonomie pour les plus courantes et sous la responsabilité du chef d'atelier pour les autres.</p>\n<table>\n<thead><tr><th>Étape</th><th>Ce qui se passe</th><th>Documents associés</th></tr></thead>\n<tbody>\n<tr><td>Prise en charge</td><td>Accueil, recueil de la demande, identification, constat contradictoire, devis</td><td>Fiche de réception, ordre de réparation, devis</td></tr>\n<tr><td>Diagnostic</td><td>Essais, contrôles et mesures, recherche de cause</td><td>Fiche de diagnostic, relevés, rapport d'outil de diagnostic</td></tr>\n<tr><td>Intervention</td><td>Commande de pièces, réparation, installation, réglages, contrôle qualité</td><td>Bon de commande, méthode constructeur, fiche de contrôle</td></tr>\n<tr><td>Restitution</td><td>Essai, explication au client, facture, mise à jour du suivi</td><td>Facture, carnet d'entretien, rapport d'intervention</td></tr>\n</tbody>\n</table>\n<p>Une particularité du nautisme est la <strong>saisonnalité</strong> : l'activité d'hivernage et de remise en service se concentre à l'automne et au printemps, alors que la saison estivale est dominée par les dépannages urgents. Une bonne organisation consiste à lisser la charge, par exemple en proposant des forfaits d'hivernage réservés à l'avance.</p>"
      },
      {
       "titre": "Accueillir le client et identifier l'embarcation",
       "contenu": "<p>L'accueil se fait au comptoir, au téléphone, au ponton ou directement à bord. Le technicien adopte une attitude professionnelle : se présenter, écouter sans interrompre, reformuler la demande avec les mots du métier, vérifier qu'il a bien compris. Dans les zones touristiques, une partie de la clientèle est étrangère : savoir décrire une panne et une intervention en anglais simple fait partie du métier.</p>\n<p>L'identification du support est indispensable pour commander les bonnes pièces et appliquer la bonne méthode.</p>\n<ul>\n<li><strong>Embarcation</strong> : marque, modèle, année, numéro d'identification de la coque (souvent appelé <strong>numéro CIN</strong> ou HIN, gravé sur le tableau arrière à tribord), numéro d'immatriculation, nom du bateau.</li>\n<li><strong>Moteur</strong> : marque, modèle, puissance, numéro de série lu sur la plaque du moteur, nombre d'heures de fonctionnement au compteur.</li>\n<li><strong>Équipements</strong> : référence et numéro de série (électronique, pilote, guindeau, groupe électrogène).</li>\n<li><strong>Historique</strong> : dernières interventions, contrat d'entretien, garantie en cours.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduire le recueil de la demande pour une panne décrite par un client.<br>1. Faire décrire le symptôme : « Que se passe-t-il exactement ? »<br>2. Préciser les conditions : moteur froid ou chaud, au ralenti ou en charge, en mer formée ou calme, depuis quand.<br>3. Rechercher les événements récents : plein de carburant, échouage, intervention d'un tiers, hivernage.<br>4. Noter les réponses sur la fiche de réception, avec les mots du client entre guillemets puis la traduction technique.<br>5. Reformuler et faire valider : « Si je comprends bien, le moteur cale au passage de la marche avant, à chaud, depuis votre dernier plein. »</div>"
      },
      {
       "titre": "Le constat de réception et l'ordre de réparation",
       "contenu": "<p>Avant toute intervention, on réalise un <strong>constat contradictoire</strong> de l'état du bateau en présence du client : rayures, chocs sur la coque, équipements manquants, niveau de carburant, présence d'objets de valeur. Il protège l'entreprise et le client en cas de litige. Une série de photos datées complète utilement le constat.</p>\n<p>L'<strong>ordre de réparation</strong> (OR) est le document qui formalise la demande. Il précise l'identité du client, l'identification du bateau et des moteurs, les travaux demandés, les conditions (délai, devis préalable ou non, essai en mer autorisé ou non, lieu de restitution) et porte la signature du client. Sans OR signé, l'entreprise s'expose à un refus de paiement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un OR qui indique seulement « voir moteur » ne permet ni de chiffrer, ni de facturer, ni de défendre l'entreprise. Il faut écrire le symptôme, la demande précise et, si un diagnostic est nécessaire, son coût ou sa durée maximale autorisée.</div>\n<p>Pour un essai en mer, le technicien doit savoir utiliser les commandes de l'embarcation, mais il ne navigue que dans le cadre fixé par l'entreprise : chef de bord titulaire du titre requis, conditions météo vérifiées, armement de sécurité présent à bord.</p>"
      },
      {
       "titre": "Devis, commandes et approvisionnement",
       "contenu": "<p>Le <strong>devis</strong> est une proposition chiffrée détaillée : main-d'œuvre (nombre d'heures et taux horaire), pièces et ingrédients (huiles, résines, peintures, petites fournitures), prestations annexes (manutention, levage, stockage, transport), taxes. Une fois accepté et signé par le client, il engage les deux parties. Il précise une durée de validité.</p>\n<p>Pour chiffrer, on s'appuie sur des <strong>barèmes de temps</strong> du constructeur ou de l'entreprise, sur le catalogue des pièces et sur l'expérience. Il faut penser aux pièces à usage unique qui accompagnent une opération : joints, écrous autofreinés, rondelles d'étanchéité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un devis simple de remplacement d'une turbine de pompe à eau de mer.<br>1. Main-d'œuvre : 1,5 h au taux de 68 € HT/h, soit 1,5 × 68 = 102,00 € HT.<br>2. Pièces : turbine 38,50 € HT ; joint de couvercle 6,20 € HT ; total pièces 44,70 € HT.<br>3. Total HT : 102,00 + 44,70 = 146,70 €.<br>4. TVA à 20 % : 146,70 × 0,20 = 29,34 €.<br>5. Total TTC : 146,70 + 29,34 = 176,04 €.<br>Les prix sont des exemples ; dans l'entreprise, ils proviennent du tarif en vigueur.</div>\n<p>Les commandes de pièces sont passées auprès du distributeur ou du constructeur avec la référence exacte, trouvée dans le catalogue de pièces détachées à partir du numéro de série. Le délai de livraison conditionne le planning : une pièce manquante immobilise le bateau et l'emplacement au chantier.</p>"
      },
      {
       "titre": "Organiser l'intervention et l'espace de travail",
       "contenu": "<p>Un chantier nautique gère des contraintes que l'on trouve rarement ailleurs : marées, disponibilité du portique élévateur, places à terre limitées, météo pour les travaux de peinture ou de stratification. Le <strong>planning</strong> d'atelier affecte chaque intervention à un technicien, à un créneau et à un emplacement (ponton, aire de carénage, hangar, atelier moteur).</p>\n<ul>\n<li>Regrouper les interventions sur un même bateau pour limiter les manutentions.</li>\n<li>Commencer par les travaux qui conditionnent les autres : par exemple la stratification avant la peinture, le démontage avant la commande de pièces si le diagnostic l'impose.</li>\n<li>Prévoir les temps de séchage et de polymérisation, qui dépendent de la température.</li>\n<li>Réserver le levage avec le port ou le service de manutention.</li>\n</ul>\n<p>Le poste de travail est préparé avant de commencer : protections (housses de siège, protection du pont), outillage, produits, bacs de récupération, éclairage, ventilation. À la fin, le poste est remis en état et les déchets sont triés.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans beaucoup d'ateliers, un tableau de suivi affiche chaque bateau présent, son emplacement, l'état d'avancement (attente devis, attente pièces, en cours, terminé, à restituer) et la date promise au client. Mettre à jour ce tableau fait partie du travail du technicien.</div>"
      },
      {
       "titre": "Restituer l'embarcation au client",
       "contenu": "<p>La restitution est le moment où le client juge la qualité du travail. Elle se prépare : bateau propre, protections retirées, niveaux faits, aucun outil oublié à bord, documents prêts.</p>\n<ol>\n<li>Contrôler soi-même le résultat : essai de fonctionnement, absence de fuite, réglages conformes.</li>\n<li>Compléter les documents de suivi : carnet d'entretien, rapport d'intervention, prochaine échéance (vidange, anodes, turbine).</li>\n<li>Présenter l'intervention au client avec des mots simples, en montrant les pièces remplacées s'il le souhaite.</li>\n<li>Réaliser un essai avec lui si nécessaire et lui expliquer l'utilisation d'un nouvel équipement.</li>\n<li>Expliquer la facture ligne par ligne et la comparer au devis ; un écart doit être justifié et avoir été accepté.</li>\n<li>Encaisser selon la procédure de l'entreprise.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la facture reprend le devis accepté. Tout travail supplémentaire découvert en cours d'intervention doit faire l'objet d'un accord du client avant d'être réalisé, de préférence écrit (avenant au devis, courriel).</div>\n<p>Signaler au client les points relevés pendant l'intervention mais non traités (anode usée, câble de direction dur, gelcoat fissuré) est un service qui l'informe et peut déboucher sur une nouvelle intervention. On parle de <strong>préconisation</strong>.</p>"
      }
     ],
     "points_cles": [
      "Une intervention suit quatre étapes : prise en charge, diagnostic, intervention, restitution.",
      "L'identification du bateau, du moteur et des équipements passe par les plaques et les numéros de série.",
      "Le constat contradictoire et l'ordre de réparation signé protègent client et entreprise.",
      "Un devis détaille main-d'œuvre, pièces, ingrédients et prestations annexes, en HT puis en TTC.",
      "Le planning tient compte des marées, du levage, de la météo et des temps de polymérisation.",
      "Tout travail supplémentaire exige l'accord préalable du client.",
      "La restitution comprend contrôle, mise à jour du suivi, explication, facture et préconisations."
     ],
     "lexique": [
      {
       "terme": "Ordre de réparation",
       "def": "Document signé par le client qui décrit les travaux demandés et les conditions de l'intervention."
      },
      {
       "terme": "Constat contradictoire",
       "def": "Relevé de l'état du bateau fait en présence du client à la réception."
      },
      {
       "terme": "Devis",
       "def": "Proposition chiffrée et détaillée de travaux, qui engage les deux parties une fois signée."
      },
      {
       "terme": "Numéro CIN",
       "def": "Numéro d'identification de la coque gravé sur le bateau, appelé aussi HIN."
      },
      {
       "terme": "Hivernage",
       "def": "Ensemble des opérations de mise à l'abri et de protection d'un bateau et de ses moteurs pour la période d'inactivité."
      },
      {
       "terme": "Préconisation",
       "def": "Conseil écrit ou oral donné au client sur une intervention à prévoir."
      },
      {
       "terme": "Barème de temps",
       "def": "Temps de main-d'œuvre de référence pour une opération donnée."
      },
      {
       "terme": "Planning d'atelier",
       "def": "Outil qui répartit les interventions entre techniciens, créneaux et emplacements."
      }
     ]
    },
    {
     "id": "bmn-sante-securite-environnement-chantier",
     "titre": "Santé, sécurité et environnement au chantier nautique",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Repérer les dangers propres aux activités de maintenance nautique",
      "Appliquer les règles de sécurité pour le levage, le calage et le travail à bord",
      "Se protéger des risques chimiques liés aux résines, solvants et peintures",
      "Prévenir les risques d'incendie et d'explosion liés aux carburants et au gaz",
      "Gérer les déchets et les rejets d'un chantier dans le respect de l'environnement"
     ],
     "sections": [
      {
       "titre": "Danger, risque et démarche de prévention",
       "contenu": "<p>Un <strong>danger</strong> est une propriété capable de causer un dommage (une résine toxique, une charge suspendue, une batterie). Le <strong>risque</strong> apparaît lorsqu'une personne est exposée à ce danger ; on l'évalue en combinant la gravité possible du dommage et la probabilité qu'il survienne. L'entreprise consigne cette évaluation dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP).</p>\n<p>La prévention suit un ordre de priorité : supprimer le danger si possible, sinon le réduire à la source, puis mettre en place des <strong>protections collectives</strong> (aspiration, garde-corps, balisage), et en dernier lieu fournir des <strong>équipements de protection individuelle</strong> (EPI) : gants, lunettes, masque, chaussures de sécurité, combinaison.</p>\n<table>\n<thead><tr><th>Activité</th><th>Dangers principaux</th></tr></thead>\n<tbody>\n<tr><td>Levage et manutention de bateaux</td><td>Chute ou basculement de la charge, écrasement</td></tr>\n<tr><td>Travail à bord au sec</td><td>Chute de hauteur depuis le pont ou l'échelle</td></tr>\n<tr><td>Stratification, ponçage, peinture</td><td>Produits chimiques, poussières, solvants inflammables</td></tr>\n<tr><td>Moteurs et carburants</td><td>Incendie, explosion de vapeurs d'essence, brûlures, pièces en rotation</td></tr>\n<tr><td>Électricité de bord et de quai</td><td>Électrisation par le 230 V, court-circuit et incendie sur batteries</td></tr>\n<tr><td>Travail au ponton ou à bord à flot</td><td>Chute à l'eau, hypothermie, noyade</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Levage, calage et travail en hauteur",
       "contenu": "<p>La manutention des bateaux se fait au <strong>portique élévateur</strong>, à la grue, au chariot à bateaux ou à la remorque. La conduite de ces engins est réservée à des personnes formées et autorisées par l'employeur (autorisation de conduite, souvent appuyée sur un certificat CACES pour les engins concernés). Le technicien peut aider à la manœuvre en suivant les ordres du conducteur.</p>\n<ul>\n<li>Ne jamais stationner sous un bateau suspendu ni entre le bateau et un obstacle.</li>\n<li>Vérifier la position des sangles par rapport aux repères constructeur, aux passe-coques, aux sondes et à l'arbre d'hélice.</li>\n<li>Au sec, contrôler le calage avant de monter à bord : ber adapté, épontilles en appui sur des zones renforcées, cales de bois sous la quille.</li>\n<li>Monter à bord par une échelle attachée, posée sur un sol stable, dépassant le pont d'environ un mètre.</li>\n<li>Utiliser un échafaudage ou une plateforme pour les travaux sur la coque en hauteur.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un vent fort sur un voilier mâté posé au sec crée un effort latéral important sur les épontilles. Par grand vent annoncé, on vérifie le calage, on serre les épontilles et on peut affaler les voiles d'avant enroulées qui offrent de la prise au vent.</div>"
      },
      {
       "titre": "Le risque chimique : résines, solvants, peintures",
       "contenu": "<p>Les produits utilisés en maintenance nautique sont nombreux et souvent dangereux : résines polyester (qui libèrent du <strong>styrène</strong>), résines époxy (fortement <strong>sensibilisantes</strong> : elles peuvent provoquer des allergies cutanées définitives), catalyseurs peroxydes (corrosifs et comburants), solvants (acétone, diluants), peintures antifouling (contenant des <strong>biocides</strong>), décapants, carburants et huiles.</p>\n<p>Chaque produit est accompagné d'une <strong>fiche de données de sécurité</strong> (FDS) et son emballage porte des <strong>pictogrammes de danger</strong> du règlement CLP (losanges à bord rouge) et des <strong>mentions de danger</strong> codées H (par exemple H317 : peut provoquer une allergie cutanée).</p>\n<table>\n<thead><tr><th>Opération</th><th>Protection collective</th><th>EPI usuels</th></tr></thead>\n<tbody>\n<tr><td>Stratification polyester</td><td>Ventilation, aspiration des vapeurs</td><td>Gants nitrile, lunettes, combinaison, masque à cartouche pour vapeurs organiques si nécessaire</td></tr>\n<tr><td>Mise en œuvre d'époxy</td><td>Ventilation</td><td>Gants nitrile changés régulièrement, manches longues, lunettes</td></tr>\n<tr><td>Ponçage de stratifié ou d'antifouling</td><td>Ponceuse avec aspiration intégrée</td><td>Masque filtrant contre les poussières (FFP3 recommandé pour l'antifouling), lunettes, combinaison jetable</td></tr>\n<tr><td>Application de peinture</td><td>Local ou zone ventilée</td><td>Masque à cartouche adapté, gants, lunettes</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'allergie à l'époxy est définitive. Une seule règle : aucun contact de la résine avec la peau. On ne nettoie jamais ses mains au solvant, qui aggrave la pénétration ; on utilise un nettoyant adapté et l'on change de gants dès qu'ils sont souillés.</div>"
      },
      {
       "titre": "Incendie et explosion : carburants, gaz et batteries",
       "contenu": "<p>Le feu a besoin de trois éléments : un <strong>combustible</strong>, un <strong>comburant</strong> (l'oxygène de l'air) et une <strong>source d'énergie</strong> (étincelle, flamme, point chaud). C'est le triangle du feu. Supprimer un des trois éléments empêche ou éteint le feu.</p>\n<ul>\n<li>Les vapeurs d'<strong>essence</strong> sont plus lourdes que l'air et s'accumulent dans les fonds. Un simple contact électrique peut les enflammer. Avant le démarrage d'un moteur in-bord essence, on ventile le compartiment moteur avec l'extracteur prévu, pendant la durée indiquée par l'étiquette du constructeur.</li>\n<li>Le <strong>gaz de pétrole liquéfié</strong> (butane, propane) est lui aussi plus lourd que l'air. Une fuite dans la cabine s'accumule dans les fonds et peut exploser.</li>\n<li>Les <strong>batteries au plomb</strong> en charge dégagent de l'hydrogène, explosif ; leur compartiment doit être ventilé. Un court-circuit franc sur une batterie provoque un échauffement violent des câbles et des outils.</li>\n<li>Les <strong>batteries lithium</strong> peuvent s'emballer thermiquement si elles sont endommagées, surchargées ou mal gérées.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> intervenir en sécurité sur un circuit carburant essence.<br>1. Moteur arrêté et froid, clé retirée, coupe-batterie ouvert.<br>2. Ventiler le compartiment, interdire toute flamme et toute source d'étincelle à proximité.<br>3. Placer un extincteur adapté à portée de main.<br>4. Fermer la vanne de réservoir, prévoir un bac et des chiffons absorbants.<br>5. Intervenir, puis contrôler l'absence de fuite circuit sous pression (pompe d'amorçage) avant de rétablir l'alimentation électrique.<br>6. Évacuer les chiffons imbibés dans un conteneur fermé prévu à cet effet.</div>"
      },
      {
       "titre": "Risque électrique et travail sur l'eau",
       "contenu": "<p>Le courant de quai en 230 V alternatif est dangereux pour l'homme, d'autant plus en milieu humide. Les interventions sur les installations électriques exigent une <strong>habilitation électrique</strong> correspondant aux opérations réalisées et au domaine de tension, délivrée par l'employeur après formation. Avant toute intervention sur le circuit 230 V du bord, on débranche le cordon de quai et on coupe le convertisseur et le groupe électrogène.</p>\n<p>Le travail au ponton ou à bord à flot expose à la chute à l'eau. Dans une eau froide, le choc thermique et l'hypothermie peuvent rendre la nage impossible en quelques minutes. Le port d'un gilet de sauvetage adapté est la règle sur les pontons et en annexe, ainsi que pour les essais en mer. On évite de travailler seul au ponton.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour un essai en mer, l'équipe vérifie la météo, le plein, l'armement de sécurité présent à bord et prévient l'atelier de l'heure de départ et de retour prévue. Un technicien qui ne revient pas à l'heure annoncée doit déclencher une vérification.</div>"
      },
      {
       "titre": "Protéger l'environnement : rejets et déchets",
       "contenu": "<p>Les activités d'un chantier peuvent polluer directement le milieu marin. Les eaux de lavage d'une coque contiennent des résidus d'antifouling (biocides et métaux comme le cuivre) toxiques pour la faune et la flore. Le carénage se fait donc sur une <strong>aire de carénage</strong> équipée d'un système de récupération et de traitement des eaux, et non sur une cale de mise à l'eau ou une plage. Les ports et les communes peuvent prendre des règlements locaux qui précisent ces interdictions.</p>\n<table>\n<thead><tr><th>Déchet</th><th>Classement</th><th>Filière</th></tr></thead>\n<tbody>\n<tr><td>Huiles usagées, filtres à huile</td><td>Dangereux</td><td>Bidon de récupération, collecteur agréé</td></tr>\n<tr><td>Batteries au plomb, batteries lithium</td><td>Dangereux</td><td>Reprise par le distributeur ou collecteur spécialisé</td></tr>\n<tr><td>Résines non durcies, pots de peinture souillés, solvants</td><td>Dangereux</td><td>Fûts identifiés, collecteur agréé</td></tr>\n<tr><td>Chiffons et absorbants souillés d'hydrocarbures</td><td>Dangereux</td><td>Conteneur fermé, collecteur agréé</td></tr>\n<tr><td>Fusées de détresse périmées</td><td>Dangereux (pyrotechnique)</td><td>Filière de reprise spécifique, jamais à la poubelle</td></tr>\n<tr><td>Chutes de stratifié durci, emballages propres</td><td>Non dangereux</td><td>Bennes de tri de l'entreprise</td></tr>\n</tbody>\n</table>\n<p>Les déchets dangereux sont suivis par un <strong>bordereau de suivi des déchets</strong> qui assure leur traçabilité jusqu'à l'installation de traitement. En fin de vie, les bateaux de plaisance sont pris en charge par une filière de déconstruction organisée en France par un éco-organisme.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> vider une cale huileuse au port avec la pompe de cale est une pollution. On pompe l'eau mazouteuse dans un récipient ou avec une station de pompage prévue à cet effet, puis on traite la cause de la fuite.</div>"
      }
     ],
     "points_cles": [
      "Le risque naît de l'exposition d'une personne à un danger ; il est évalué dans le document unique.",
      "Priorité à la suppression du danger et aux protections collectives, les EPI viennent en dernier.",
      "On ne stationne jamais sous un bateau suspendu et on vérifie le calage avant de monter à bord.",
      "La résine époxy est sensibilisante : aucun contact avec la peau.",
      "Vapeurs d'essence et gaz butane ou propane sont plus lourds que l'air et s'accumulent dans les fonds.",
      "Le travail sur le 230 V exige une habilitation électrique et la déconnexion de toutes les sources.",
      "Le carénage se fait sur une aire équipée de récupération des eaux.",
      "Les déchets dangereux sont triés et suivis par bordereau jusqu'à leur traitement."
     ],
     "lexique": [
      {
       "terme": "Danger",
       "def": "Propriété d'un produit, d'un équipement ou d'une situation capable de causer un dommage."
      },
      {
       "terme": "Risque",
       "def": "Combinaison de la gravité et de la probabilité d'un dommage lié à l'exposition à un danger."
      },
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels, obligatoire dans toute entreprise."
      },
      {
       "terme": "EPI",
       "def": "Équipement de protection individuelle porté par le salarié."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité d'un produit chimique, en 16 rubriques."
      },
      {
       "terme": "Sensibilisant",
       "def": "Produit qui peut provoquer une allergie durable après un ou plusieurs contacts."
      },
      {
       "terme": "Aire de carénage",
       "def": "Zone équipée pour le nettoyage des coques avec récupération et traitement des eaux."
      },
      {
       "terme": "Habilitation électrique",
       "def": "Reconnaissance par l'employeur de la capacité d'une personne à réaliser des opérations d'ordre électrique en sécurité."
      },
      {
       "terme": "Bordereau de suivi des déchets",
       "def": "Document qui assure la traçabilité d'un déchet dangereux jusqu'à son traitement."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Motorisation thermique et transmissions",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmn-moteurs-thermiques-marins",
     "titre": "Moteurs thermiques marins : architectures et caractéristiques",
     "niveau": "1re",
     "duree": 50,
     "objectifs": [
      "Distinguer les configurations de motorisation : hors-bord, in-bord, in-bord à embase, hydrojet",
      "Expliquer les cycles à deux temps et à quatre temps, à essence et diesel",
      "Exploiter les grandeurs caractéristiques : cylindrée, rapport volumétrique, couple, puissance",
      "Lire et interpréter des courbes de couple, de puissance et de consommation",
      "Choisir une motorisation compatible avec une embarcation"
     ],
     "sections": [
      {
       "titre": "Les configurations de motorisation",
       "contenu": "<p>Le <strong>groupe motopropulseur</strong> regroupe le moteur et la transmission jusqu'au propulseur (hélice ou turbine). Sur un bateau de plaisance, on rencontre quatre grandes configurations.</p>\n<table>\n<thead><tr><th>Configuration</th><th>Description</th><th>Bateaux concernés</th></tr></thead>\n<tbody>\n<tr><td>Hors-bord</td><td>Ensemble compact moteur, transmission et hélice fixé sur le tableau arrière ; essence, quatre temps pour la plupart des modèles récents</td><td>Semi-rigides, open, petits bateaux à moteur, annexes</td></tr>\n<tr><td>In-bord à ligne d'arbre</td><td>Moteur à l'intérieur de la coque, inverseur puis arbre traversant la coque jusqu'à l'hélice ; souvent diesel</td><td>Vedettes, voiliers, bateaux de travail</td></tr>\n<tr><td>In-bord à embase (Z-drive ou sterndrive)</td><td>Moteur intérieur, embase en Z articulée fixée au tableau qui porte l'hélice et assure la direction</td><td>Cabin-cruisers, bateaux de ski nautique</td></tr>\n<tr><td>Saildrive</td><td>Moteur intérieur, embase verticale traversant le fond de coque</td><td>Voiliers, catamarans</td></tr>\n<tr><td>Hydrojet</td><td>Le moteur entraîne une turbine qui aspire l'eau sous la coque et la projette à l'arrière</td><td>Véhicules nautiques à moteur, bateaux de faible tirant d'eau</td></tr>\n</tbody>\n</table>\n<p>À ces configurations s'ajoutent les motorisations électriques et hybrides, traitées avec l'électricité de bord.</p>"
      },
      {
       "titre": "Rappel du fonctionnement : cycles quatre temps et deux temps",
       "contenu": "<p>Un <strong>moteur à combustion interne</strong> transforme l'énergie chimique d'un carburant en énergie mécanique. Le <strong>piston</strong> se déplace dans le <strong>cylindre</strong> entre le <strong>point mort haut</strong> (PMH) et le <strong>point mort bas</strong> (PMB) ; la <strong>bielle</strong> et le <strong>vilebrequin</strong> transforment ce mouvement alternatif en rotation.</p>\n<p>Le <strong>moteur à quatre temps</strong> réalise un cycle en deux tours de vilebrequin : admission, compression, combustion-détente, échappement. Les soupapes, commandées par un ou plusieurs <strong>arbres à cames</strong> entraînés par courroie ou chaîne, ouvrent et ferment les conduits.</p>\n<p>Le <strong>moteur à deux temps</strong> réalise un cycle en un seul tour : les transferts de gaz se font par des lumières dans le cylindre, découvertes par le piston. Simple et léger, il a longtemps dominé le hors-bord. Les modèles à carburateur, polluants et gourmands, ont laissé place aux quatre temps et aux deux temps à injection directe. La lubrification se fait par l'huile mélangée au carburant ou injectée par une pompe doseuse.</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Moteur essence (allumage commandé)</th><th>Moteur diesel (allumage par compression)</th></tr></thead>\n<tbody>\n<tr><td>Inflammation du mélange</td><td>Étincelle de la bougie</td><td>Auto-inflammation du gazole injecté dans l'air très comprimé</td></tr>\n<tr><td>Rapport volumétrique usuel</td><td>Environ 9 à 11</td><td>Environ 15 à 22</td></tr>\n<tr><td>Atouts à bord</td><td>Léger, puissance massique élevée</td><td>Couple à bas régime, sobriété, gazole moins dangereux à stocker</td></tr>\n<tr><td>Risque spécifique</td><td>Vapeurs d'essence explosives</td><td>Désamorçage du circuit, pollution bactérienne du gazole</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Grandeurs géométriques : cylindrée et rapport volumétrique",
       "contenu": "<p>La <strong>cylindrée unitaire</strong> est le volume balayé par le piston entre PMB et PMH : V<sub>u</sub> = (π × D² / 4) × C, avec D l'<strong>alésage</strong> (diamètre du cylindre) et C la <strong>course</strong> du piston. La <strong>cylindrée totale</strong> vaut V<sub>u</sub> multipliée par le nombre de cylindres.</p>\n<p>Le <strong>rapport volumétrique</strong> ε compare le volume total au PMB au volume de la chambre de combustion v au PMH : ε = (V<sub>u</sub> + v) / v. Plus il est élevé, meilleur est le rendement, dans la limite du cliquetis pour l'essence.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la cylindrée d'un diesel marin trois cylindres, alésage 84 mm, course 90 mm.<br>1. Convertir en centimètres : D = 8,4 cm ; C = 9,0 cm.<br>2. Surface du piston : π × 8,4² / 4 ≈ 55,42 cm².<br>3. Cylindrée unitaire : 55,42 × 9,0 ≈ 498,8 cm³.<br>4. Cylindrée totale : 3 × 498,8 ≈ 1 496 cm³, soit environ 1,5 litre.<br>5. Si la chambre de combustion mesure 25 cm³, ε = (498,8 + 25) / 25 ≈ 21, valeur cohérente avec un diesel.</div>"
      },
      {
       "titre": "Couple, puissance et régime",
       "contenu": "<p>Le <strong>couple</strong> C (en N·m) mesure l'effort de rotation fourni par le vilebrequin. La <strong>puissance</strong> P (en watts) est le produit du couple par la vitesse angulaire : <strong>P = C × ω</strong>, avec ω = 2 × π × N / 60, N étant le <strong>régime</strong> en tours par minute (tr/min).</p>\n<p>Dans le nautisme, la puissance est souvent exprimée en chevaux (ch) : 1 ch ≈ 0,736 kW. Les plaques et les notices indiquent fréquemment les deux valeurs. La puissance annoncée par le constructeur est mesurée selon une norme précise, par exemple à l'arbre d'hélice ou au vilebrequin : il faut lire la notice pour savoir laquelle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> retrouver la puissance d'un moteur qui fournit 180 N·m à 3 000 tr/min.<br>1. ω = 2 × π × 3 000 / 60 ≈ 314,2 rad/s.<br>2. P = 180 × 314,2 ≈ 56 556 W ≈ 56,6 kW.<br>3. En chevaux : 56,6 / 0,736 ≈ 77 ch.</div>\n<p>Les <strong>courbes caractéristiques</strong> fournies par les constructeurs représentent, en fonction du régime, le couple, la puissance et souvent la <strong>consommation</strong>. Pour un moteur marin, on trouve aussi la <strong>courbe d'hélice</strong> : la puissance absorbée par une hélice augmente à peu près comme le cube du régime. Le moteur doit atteindre son <strong>régime maximal recommandé</strong> à pleins gaz, bateau chargé normalement : c'est le critère principal du choix de l'hélice.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un moteur qui n'atteint pas sa plage de régime maximal à pleins gaz est surchargé (hélice trop grande ou bateau trop lourd) ; un moteur qui la dépasse est en surrégime (hélice trop petite). Dans les deux cas, l'hélice est à revoir.</div>"
      },
      {
       "titre": "Consommation et autonomie",
       "contenu": "<p>La consommation d'un moteur marin s'exprime en <strong>litres par heure</strong> (L/h) à un régime donné. Elle croît très vite avec le régime : un moteur à 75 % de son régime maximal consomme nettement moins qu'à pleins gaz pour une perte de vitesse souvent modérée. La <strong>consommation spécifique</strong>, en g/kWh, permet de comparer le rendement de moteurs différents ; un diesel moderne est plus sobre qu'un moteur à essence de même puissance.</p>\n<p>L'<strong>autonomie</strong> se calcule à partir de la capacité utile du réservoir et de la consommation au régime de croisière. Les marins appliquent la règle du tiers : un tiers du carburant pour l'aller, un tiers pour le retour, un tiers de réserve.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer l'autonomie d'une vedette.<br>Données : réservoir 400 L, consommation au régime de croisière 32 L/h, vitesse 18 nœuds.<br>1. Durée de navigation : 400 / 32 = 12,5 h.<br>2. Distance théorique : 12,5 × 18 = 225 milles.<br>3. En gardant un tiers en réserve : 225 × 2 / 3 = 150 milles utilisables, soit un rayon d'action d'environ 75 milles aller-retour.</div>"
      },
      {
       "titre": "Adapter une motorisation à une embarcation",
       "contenu": "<p>Le choix d'un moteur ne se limite pas à la puissance. La <strong>plaque constructeur</strong> du bateau, imposée par la réglementation européenne sur les bateaux de plaisance, indique la <strong>puissance maximale</strong> admissible ; la dépasser rend le bateau non conforme et peut annuler l'assurance. Il faut aussi vérifier :</p>\n<ul>\n<li>la <strong>hauteur d'arbre</strong> du hors-bord (arbre court, long ou extra-long) par rapport à la hauteur du tableau arrière ;</li>\n<li>la masse du moteur, qui modifie l'assiette ;</li>\n<li>le sens de rotation de l'hélice, surtout en bimoteur (hélices contrarotatives) ;</li>\n<li>le type de commande (mécanique par câbles ou électronique) et la compatibilité des instruments ;</li>\n<li>la capacité de l'alternateur pour le bilan électrique du bord ;</li>\n<li>la réglementation sur le permis : au-delà de 6 ch (4,5 kW), la conduite d'un bateau à moteur en mer exige le permis plaisance.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'une remotorisation d'un hors-bord, la plaque anti-cavitation du moteur doit se trouver au niveau du fond de coque ou légèrement au-dessus, selon la préconisation du constructeur. Un moteur monté trop bas freine et projette de l'eau ; trop haut, l'hélice aspire de l'air et ventile dans les virages.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la puissance figurant sur le capot d'un hors-bord peut correspondre à un modèle bridé ou débridé selon les marchés. Seule la référence complète lue sur la plaque du moteur permet de connaître la puissance réelle et les pièces adaptées.</div>"
      }
     ],
     "points_cles": [
      "On distingue hors-bord, in-bord à ligne d'arbre, in-bord à embase, saildrive et hydrojet.",
      "Le quatre temps fait un cycle en deux tours, le deux temps en un tour.",
      "Le diesel s'allume par compression, avec un rapport volumétrique plus élevé que l'essence.",
      "Cylindrée unitaire = π × D² / 4 × course ; la cylindrée totale tient compte du nombre de cylindres.",
      "P = C × ω avec ω = 2πN / 60 ; 1 ch ≈ 0,736 kW.",
      "À pleins gaz, le moteur doit atteindre sa plage de régime maximal : c'est le critère du choix d'hélice.",
      "La consommation croît fortement avec le régime ; l'autonomie se calcule avec une réserve d'un tiers.",
      "La puissance installée ne doit pas dépasser la puissance maximale de la plaque constructeur."
     ],
     "lexique": [
      {
       "terme": "Groupe motopropulseur",
       "def": "Ensemble du moteur et de la transmission jusqu'au propulseur."
      },
      {
       "terme": "Embase",
       "def": "Ensemble de transmission immergé qui porte l'hélice sur un hors-bord, un Z-drive ou un saildrive."
      },
      {
       "terme": "Alésage",
       "def": "Diamètre intérieur d'un cylindre."
      },
      {
       "terme": "Course",
       "def": "Distance parcourue par le piston entre le point mort haut et le point mort bas."
      },
      {
       "terme": "Cylindrée",
       "def": "Volume balayé par le ou les pistons."
      },
      {
       "terme": "Rapport volumétrique",
       "def": "Rapport entre le volume du cylindre au PMB et le volume de la chambre au PMH."
      },
      {
       "terme": "Couple",
       "def": "Effort de rotation fourni par le moteur, en newtons-mètres."
      },
      {
       "terme": "Régime",
       "def": "Vitesse de rotation du moteur, en tours par minute."
      },
      {
       "terme": "Hydrojet",
       "def": "Propulsion par une turbine qui projette un jet d'eau vers l'arrière."
      }
     ]
    },
    {
     "id": "bmn-alimentation-allumage-injection",
     "titre": "Alimentation en carburant, allumage et gestion électronique du moteur",
     "niveau": "1re",
     "duree": 50,
     "objectifs": [
      "Décrire un circuit de carburant marin, du réservoir à l'injecteur",
      "Expliquer le fonctionnement de l'injection essence et de l'injection diesel",
      "Décrire un système d'allumage à essence et ses contrôles",
      "Identifier les capteurs et actionneurs de la gestion électronique d'un moteur",
      "Réaliser les opérations courantes : purge, remplacement de filtres, contrôle de pression"
     ],
     "sections": [
      {
       "titre": "Le circuit de carburant à bord",
       "contenu": "<p>Le circuit de carburant d'un bateau part d'un <strong>réservoir</strong> fixe (ou nourrice portable pour les petits hors-bord) et comprend : la <strong>mise à l'air libre</strong> (évent qui laisse entrer l'air quand le niveau baisse), la <strong>nable de remplissage</strong> sur le pont, une <strong>vanne d'arrêt</strong>, un <strong>préfiltre décanteur</strong> qui sépare l'eau du carburant, des tuyaux conformes à l'usage marin, puis le circuit propre au moteur (pompe, filtre, injecteurs ou carburateur). Le diesel comprend aussi un <strong>circuit de retour</strong> vers le réservoir.</p>\n<ul>\n<li>Les tuyaux de carburant d'un bateau doivent être d'un type adapté et résistant au feu ; ils portent un marquage normalisé.</li>\n<li>Le réservoir est relié à la masse pour évacuer l'électricité statique lors du remplissage.</li>\n<li>Sur les hors-bord avec nourrice, une <strong>poire d'amorçage</strong> à clapets permet de remplir le circuit à la main ; elle a un sens de montage indiqué par une flèche.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'essence contenant de l'éthanol (comme le SP95-E10) absorbe l'humidité. Au-delà d'une certaine quantité d'eau, l'éthanol et l'eau se séparent et tombent au fond du réservoir : c'est la séparation de phase. Le moteur aspire alors un mélange qui le fait caler. Pour un stockage long, on suit la préconisation du constructeur : carburant adapté, stabilisant, réservoir plein ou vide selon le cas.</div>"
      },
      {
       "titre": "Alimentation et injection des moteurs à essence",
       "contenu": "<p>Les anciens moteurs utilisent un <strong>carburateur</strong> qui dose le carburant par dépression. Les moteurs actuels utilisent l'<strong>injection électronique</strong> : un calculateur commande l'ouverture d'injecteurs électromagnétiques alimentés en essence sous pression.</p>\n<p>Sur de nombreux hors-bord quatre temps, l'essence est d'abord aspirée par une pompe basse pression puis envoyée dans un petit réservoir intermédiaire appelé <strong>séparateur de vapeur</strong>, qui contient une pompe électrique haute pression. Ce montage évite les bulles de vapeur dans un moteur très chaud et compact. Dans le moteur à <strong>injection directe</strong>, le carburant est injecté directement dans la chambre de combustion, à une pression bien plus élevée.</p>\n<p>La quantité injectée dépend du <strong>temps d'injection</strong> (durée d'ouverture de l'injecteur, en millisecondes) calculé par le calculateur à partir de la quantité d'air admise. Le but est d'obtenir un mélange proche du <strong>rapport stœchiométrique</strong> (environ 14,7 g d'air pour 1 g d'essence), enrichi en pleine charge.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler la pression d'alimentation d'une injection essence.<br>1. Rechercher la valeur et la méthode dans la documentation du constructeur (point de mesure, régime, tolérance).<br>2. Moteur arrêté, dépressuriser le circuit selon la procédure, protéger avec un chiffon.<br>3. Brancher le manomètre sur la valve de test prévue.<br>4. Mettre le contact pour faire tourner la pompe, lire la pression, puis moteur au ralenti.<br>5. Comparer à la valeur constructeur : pression faible = filtre colmaté, pompe faible ou régulateur défaillant ; pression trop élevée = régulateur ou retour bouché.<br>6. Dépressuriser, déposer le manomètre, vérifier l'absence de fuite.</div>"
      },
      {
       "titre": "L'allumage des moteurs à essence",
       "contenu": "<p>L'<strong>allumage</strong> produit au bon moment une étincelle à la bougie. La tension nécessaire, de plusieurs milliers de volts, est obtenue par une <strong>bobine</strong>, transformateur dont le circuit primaire est coupé brutalement par le calculateur. L'<strong>avance à l'allumage</strong> déclenche l'étincelle avant le PMH pour que la pression maximale soit atteinte juste après ; elle augmente avec le régime.</p>\n<p>Sur un hors-bord, l'énergie est souvent produite par un <strong>volant magnétique</strong> : des aimants tournent devant des bobinages qui alimentent l'allumage et chargent la batterie. Les moteurs récents disposent d'une bobine par cylindre placée sur la bougie (bobine crayon).</p>\n<table>\n<thead><tr><th>Contrôle</th><th>Outil</th><th>Interprétation</th></tr></thead>\n<tbody>\n<tr><td>État de la bougie</td><td>Visuel, jauge d'épaisseur</td><td>Électrodes beiges : combustion correcte ; noires et sèches : mélange riche ; humides : défaut d'allumage ou noyage</td></tr>\n<tr><td>Présence de l'étincelle</td><td>Éclateur réglable</td><td>Étincelle bleue franche à l'écartement prévu</td></tr>\n<tr><td>Résistance des bobines</td><td>Ohmmètre</td><td>Comparer aux valeurs constructeur, primaire et secondaire</td></tr>\n<tr><td>Calage de l'allumage</td><td>Lampe stroboscopique ou outil de diagnostic</td><td>Avance conforme au régime de contrôle</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne jamais tester une étincelle en tenant le fil à la main ou en approchant la bougie d'une zone où peuvent se trouver des vapeurs d'essence. Sur un moteur électronique, faire tourner le démarreur bougie débranchée sans précaution peut aussi détériorer la bobine.</div>"
      },
      {
       "titre": "L'injection diesel et la purge du circuit",
       "contenu": "<p>Dans un diesel, le gazole est injecté finement pulvérisé dans l'air chaud comprimé. Les moteurs anciens utilisent une <strong>pompe d'injection</strong> mécanique (en ligne ou rotative) et des injecteurs mécaniques à ressort. Les moteurs récents utilisent l'<strong>injection à rampe commune</strong> (common rail) : une pompe haute pression alimente une rampe où le gazole est stocké à une pression très élevée (plusieurs centaines à plus de deux mille bars selon les moteurs), et des injecteurs pilotés par le calculateur dosent chaque injection.</p>\n<p>Le circuit basse pression comprend une <strong>pompe d'alimentation</strong> (souvent avec un levier d'amorçage manuel) et un <strong>filtre à gazole</strong> fin. La présence d'air dans le circuit empêche le moteur de démarrer : il faut alors <strong>purger</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> purger un circuit diesel après remplacement du filtre (moteur à pompe mécanique).<br>1. Vérifier le niveau de gazole et ouvrir la vanne de réservoir.<br>2. Remplir si possible le filtre neuf de gazole propre avant de le poser.<br>3. Desserrer la vis de purge du filtre, actionner la pompe d'amorçage jusqu'à ce que le gazole sorte sans bulles, resserrer.<br>4. Recommencer à la vis de purge de la pompe d'injection si la notice le prévoit.<br>5. Lancer le moteur par séquences courtes ; s'il ne démarre pas, desserrer légèrement les raccords d'injecteurs pour chasser l'air, en se protégeant des projections.<br>6. Contrôler l'absence de fuite moteur tournant et essuyer.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un circuit common rail, on n'ouvre jamais un raccord haute pression moteur tournant : un jet de gazole à cette pression traverse la peau. Toute intervention se fait après l'arrêt et le temps de chute de pression indiqué par le constructeur, avec une propreté absolue.</div>"
      },
      {
       "titre": "Gestion électronique : capteurs, calculateur, actionneurs",
       "contenu": "<p>Le <strong>calculateur</strong> moteur (ECU) reçoit les informations des <strong>capteurs</strong>, applique des cartographies enregistrées et commande les <strong>actionneurs</strong>. Il surveille aussi le fonctionnement et enregistre des <strong>codes défauts</strong> en cas d'anomalie.</p>\n<table>\n<thead><tr><th>Capteur</th><th>Information fournie</th><th>Principe courant</th></tr></thead>\n<tbody>\n<tr><td>Capteur de régime et de position vilebrequin</td><td>Régime, position des pistons</td><td>Inductif ou à effet Hall devant une cible dentée</td></tr>\n<tr><td>Capteur de pression d'admission</td><td>Charge du moteur</td><td>Piézorésistif, tension variable</td></tr>\n<tr><td>Capteur de position du papillon</td><td>Demande du pilote</td><td>Potentiomètre</td></tr>\n<tr><td>Sonde de température de culasse ou de liquide</td><td>Température moteur</td><td>Thermistance (CTN)</td></tr>\n<tr><td>Capteur de pression d'huile</td><td>Lubrification</td><td>Mano-contact ou capteur analogique</td></tr>\n<tr><td>Sonde d'eau dans le gazole</td><td>Présence d'eau dans le préfiltre</td><td>Électrodes</td></tr>\n</tbody>\n</table>\n<p>Les actionneurs sont les injecteurs, les bobines, la pompe à carburant, le moteur pas à pas ou la vanne de ralenti, et parfois le papillon motorisé. En cas de défaut grave (surchauffe, manque de pression d'huile), le calculateur passe en <strong>mode dégradé</strong> : il limite le régime et déclenche une alarme sonore.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les ateliers agréés disposent de l'outil de diagnostic du constructeur, relié au moteur par une prise dédiée. Il permet de lire les codes défauts, les paramètres en temps réel, l'historique des heures passées à chaque plage de régime et de réaliser des tests d'actionneurs. Cet historique sert aussi à vérifier qu'un moteur sous garantie n'a pas été utilisé hors des conditions prévues.</div>"
      },
      {
       "titre": "Démarche face à un moteur qui ne démarre pas",
       "contenu": "<p>Un moteur thermique a besoin de trois conditions pour démarrer : une <strong>rotation suffisante</strong> au démarreur, un <strong>carburant</strong> correctement dosé et, pour l'essence, une <strong>étincelle</strong> au bon moment (pour le diesel, une <strong>compression</strong> suffisante et éventuellement un préchauffage). La démarche consiste à vérifier ces conditions dans l'ordre, du plus simple au plus long à contrôler.</p>\n<table>\n<thead><tr><th>Constat</th><th>Hypothèses à examiner en premier</th></tr></thead>\n<tbody>\n<tr><td>Le démarreur ne tourne pas</td><td>Commande hors point mort (sécurité de démarrage), coupe-circuit d'urgence retiré, batterie déchargée, coupe-batterie ouvert, cosse oxydée</td></tr>\n<tr><td>Le démarreur tourne lentement</td><td>Batterie faible, connexions résistantes, démarreur usé</td></tr>\n<tr><td>Le moteur tourne normalement mais ne part pas (essence)</td><td>Vanne ou évent de réservoir fermé, poire d'amorçage, filtre, pompe, absence d'étincelle, code défaut</td></tr>\n<tr><td>Le moteur tourne normalement mais ne part pas (diesel)</td><td>Air dans le circuit, filtre colmaté, eau dans le gazole, préchauffage, électrovanne d'arrêt</td></tr>\n</tbody>\n</table>\n<p>Sur un bateau, deux sécurités sont souvent oubliées : le <strong>coupe-circuit</strong> à cordon (le pilote l'attache à son poignet ; s'il tombe à l'eau, le moteur s'arrête) et le <strong>contacteur de point mort</strong> qui interdit le démarrage avec une vitesse engagée. Les vérifier avant toute recherche approfondie fait gagner du temps et évite de démonter inutilement.</p>"
      }
     ],
     "points_cles": [
      "Le circuit carburant comprend réservoir, évent, vanne, préfiltre décanteur, pompe, filtre et injecteurs.",
      "L'essence avec éthanol peut subir une séparation de phase en présence d'eau.",
      "L'injection essence vise un mélange proche de 14,7 g d'air pour 1 g d'essence.",
      "L'avance à l'allumage augmente avec le régime ; la bougie renseigne sur la combustion.",
      "Un diesel ne démarre pas avec de l'air dans le circuit : il faut purger.",
      "On n'ouvre jamais un circuit haute pression common rail moteur tournant.",
      "Le calculateur lit des capteurs, commande des actionneurs et enregistre des codes défauts.",
      "Un défaut grave entraîne un mode dégradé avec limitation de régime et alarme."
     ],
     "lexique": [
      {
       "terme": "Préfiltre décanteur",
       "def": "Filtre placé avant le moteur qui sépare l'eau et les impuretés du carburant."
      },
      {
       "terme": "Séparateur de vapeur",
       "def": "Petit réservoir intermédiaire d'un hors-bord qui élimine les bulles de vapeur et loge la pompe haute pression."
      },
      {
       "terme": "Temps d'injection",
       "def": "Durée d'ouverture d'un injecteur, qui fixe la quantité de carburant injectée."
      },
      {
       "terme": "Avance à l'allumage",
       "def": "Angle de vilebrequin avant le PMH auquel l'étincelle est produite."
      },
      {
       "terme": "Rampe commune",
       "def": "Système d'injection diesel où le gazole est stocké à très haute pression dans une rampe alimentant tous les injecteurs."
      },
      {
       "terme": "Purge",
       "def": "Opération qui chasse l'air d'un circuit de carburant ou de liquide."
      },
      {
       "terme": "Calculateur",
       "def": "Boîtier électronique qui gère le moteur à partir des informations des capteurs."
      },
      {
       "terme": "Code défaut",
       "def": "Code enregistré par le calculateur lors d'une anomalie détectée."
      },
      {
       "terme": "Mode dégradé",
       "def": "Fonctionnement limité imposé par le calculateur pour protéger le moteur."
      }
     ]
    },
    {
     "id": "bmn-refroidissement-lubrification-echappement",
     "titre": "Refroidissement, lubrification et échappement des moteurs marins",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Distinguer le refroidissement direct et le refroidissement indirect par échangeur",
      "Décrire le circuit d'eau de mer et ses organes : prise d'eau, filtre, pompe à turbine, coude d'échappement",
      "Expliquer le rôle et le contrôle du circuit de lubrification",
      "Identifier les risques liés à l'échappement humide et au siphonnage",
      "Réaliser les contrôles et entretiens courants de ces circuits"
     ],
     "sections": [
      {
       "titre": "Pourquoi refroidir et comment",
       "contenu": "<p>Une grande partie de l'énergie du carburant se transforme en chaleur. Sans refroidissement, les pièces se dilatent, l'huile perd ses qualités et le moteur serre. Les moteurs marins ont un avantage : ils disposent d'une réserve d'eau illimitée sous la coque. Deux principes sont utilisés.</p>\n<table>\n<thead><tr><th>Principe</th><th>Fonctionnement</th><th>Où le trouve-t-on ?</th></tr></thead>\n<tbody>\n<tr><td>Refroidissement direct (ou à eau brute)</td><td>L'eau de mer aspirée circule directement dans le bloc moteur puis est rejetée</td><td>Hors-bord, petits in-bord anciens</td></tr>\n<tr><td>Refroidissement indirect (ou à échangeur)</td><td>Un circuit fermé de liquide de refroidissement circule dans le moteur ; il est refroidi dans un <strong>échangeur</strong> par l'eau de mer, qui ne touche pas le bloc</td><td>In-bord diesel et essence modernes</td></tr>\n</tbody>\n</table>\n<p>Le refroidissement indirect protège le moteur de la corrosion et du dépôt de sel, et permet une température de fonctionnement plus élevée et plus stable, régulée par un <strong>thermostat</strong>. Le refroidissement direct est plus simple, mais le moteur doit fonctionner à une température plus basse pour limiter la précipitation du sel, et le rinçage à l'eau douce après usage en mer est indispensable.</p>"
      },
      {
       "titre": "Le circuit d'eau de mer",
       "contenu": "<p>Sur un in-bord, l'eau de mer suit le trajet suivant : <strong>passe-coque</strong> et <strong>vanne</strong> de prise d'eau, <strong>filtre à eau de mer</strong> (crépine à couvercle transparent), <strong>pompe à eau de mer</strong>, refroidisseurs éventuels (huile, carburant, air de suralimentation), échangeur, puis <strong>coude d'échappement</strong> où l'eau est injectée dans les gaz avant d'être rejetée avec eux.</p>\n<p>La pompe à eau de mer est généralement une <strong>pompe à turbine</strong> (on dit aussi rouet ou impeller) : un rotor en caoutchouc à pales souples tourne dans un corps excentré. Les pales se déforment et chassent l'eau. Cette pompe est auto-amorçante, mais la turbine se détruit en quelques dizaines de secondes si elle tourne à sec, car l'eau assure aussi sa lubrification.</p>\n<p>Sur un hors-bord, la pompe est logée dans l'embase, juste au-dessus de l'hélice ; l'eau entre par des grilles latérales. Un <strong>témoin de circulation</strong> (petit jet d'eau à l'arrière du capot) indique à l'utilisateur que la pompe débite.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> remplacer la turbine d'une pompe à eau de mer d'un in-bord.<br>1. Fermer la vanne de prise d'eau, moteur arrêté.<br>2. Déposer le couvercle de la pompe et le joint.<br>3. Extraire la turbine avec une pince ou un extracteur adapté sans rayer le corps.<br>4. Vérifier le corps et le couvercle : une rayure profonde ou une usure en marche d'escalier impose le remplacement de la pièce.<br>5. Retrouver tous les morceaux de pales manquants : ils se logent souvent à l'entrée de l'échangeur.<br>6. Lubrifier la turbine neuve avec le produit préconisé (souvent du liquide vaisselle ou de la graisse silicone), l'introduire en tournant dans le sens de rotation pour coucher les pales du bon côté.<br>7. Poser un joint neuf, le couvercle, ouvrir la vanne et vérifier le débit à l'échappement au démarrage.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un moteur hors-bord ou un in-bord ne doit jamais être démarré au sec sans alimentation en eau : on utilise un <strong>dispositif de rinçage</strong> (oreilles de rinçage sur les prises d'eau d'un hors-bord, raccord de rinçage prévu par le constructeur) ou un bac d'eau. Sinon, la turbine est détruite en quelques secondes.</div>"
      },
      {
       "titre": "Le circuit d'eau douce et l'échangeur",
       "contenu": "<p>Le circuit fermé comprend une <strong>pompe à eau douce</strong> centrifuge entraînée par courroie, le <strong>thermostat</strong>, l'échangeur avec son <strong>vase d'expansion</strong> et son bouchon taré. Le liquide de refroidissement est un mélange d'eau et d'antigel à base de glycol, avec des additifs anticorrosion ; sa protection contre le gel se mesure au <strong>réfractomètre</strong> ou au densimètre.</p>\n<p>L'échangeur est un faisceau de tubes dans lesquels circule l'eau de mer, baigné par l'eau douce (ou l'inverse selon les modèles). Avec le temps, les tubes s'entartrent ou se bouchent avec des débris (algues, morceaux de turbine), ce qui fait monter la température. On le démonte, on le nettoie selon la méthode constructeur et on remplace les joints. Il contient souvent une <strong>anode</strong> à contrôler.</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Causes possibles côté eau de mer</th><th>Causes possibles côté eau douce</th></tr></thead>\n<tbody>\n<tr><td>Surchauffe progressive</td><td>Filtre encrassé, turbine usée, échangeur entartré</td><td>Niveau bas, thermostat bloqué fermé, courroie détendue</td></tr>\n<tr><td>Surchauffe brutale avec alarme</td><td>Vanne fermée, sac plastique sur la prise d'eau, turbine détruite</td><td>Fuite importante, pompe à eau douce défaillante</td></tr>\n<tr><td>Moteur qui ne monte pas en température</td><td>Sans objet</td><td>Thermostat bloqué ouvert</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "L'échappement humide et le risque de siphonnage",
       "contenu": "<p>Sur un in-bord, les gaz d'échappement sont refroidis par l'injection de l'eau de mer dans le <strong>coude d'échappement</strong> (ou coude mélangeur). Le mélange passe ensuite dans un <strong>water-lock</strong> (pot d'échappement à réserve d'eau) puis dans un tuyau qui remonte en <strong>col de cygne</strong> avant le passe-coque de sortie.</p>\n<p>Si le moteur est installé près ou sous la flottaison, l'eau de mer peut remonter par le circuit de refroidissement par effet de siphon, une fois le moteur arrêté, et remplir l'échappement puis les cylindres : c'est le <strong>siphonnage</strong>. Le moteur peut alors subir un coup d'eau (bielle tordue) au démarrage suivant. On l'évite par un <strong>clapet anti-siphon</strong> (casse-vide) placé au point haut de la boucle d'injection d'eau, au-dessus de la flottaison.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un moteur qui a démarré difficilement après de nombreux essais au démarreur est un cas classique de remplissage d'eau : l'eau de mer pompée par la turbine s'accumule dans le water-lock sans être expulsée faute de gaz. Le technicien contrôle l'huile (aspect laiteux), le clapet anti-siphon et le nombre de tentatives de démarrage avant de conclure.</div>"
      },
      {
       "titre": "La lubrification",
       "contenu": "<p>La lubrification réduit les frottements, évacue une partie de la chaleur, protège de la corrosion et transporte les impuretés jusqu'au filtre. Dans un quatre temps, l'huile est stockée dans le <strong>carter</strong>, aspirée par une <strong>pompe à huile</strong>, filtrée puis envoyée sous pression aux paliers du vilebrequin, à l'arbre à cames et au turbocompresseur. Un <strong>clapet de décharge</strong> limite la pression.</p>\n<p>Le choix de l'huile se fait selon la préconisation du constructeur : <strong>grade de viscosité</strong> SAE (par exemple 10W-30, où le premier nombre suivi de W concerne le comportement à froid) et <strong>norme de performance</strong>. Pour les hors-bord, il existe des normes spécifiques : NMMA FC-W pour les quatre temps et TC-W3 pour les deux temps.</p>\n<ul>\n<li>Le niveau se contrôle moteur arrêté depuis quelques minutes, bateau à plat, jauge essuyée puis replongée.</li>\n<li>Sur un in-bord, la vidange se fait souvent par aspiration par le tube de jauge, faute d'accès au bouchon de carter.</li>\n<li>L'embase d'un hors-bord ou d'un Z-drive contient une huile spécifique pour engrenages : on la vidange par le bouchon bas et on la remplit par le bas jusqu'à débordement au bouchon haut.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une huile d'embase d'aspect laiteux indique une entrée d'eau, généralement par un joint à lèvre de l'arbre d'hélice endommagé (souvent par un fil de pêche enroulé). Il faut remplacer les joints et tester l'étanchéité de l'embase avant de refaire le plein d'huile.</div>"
      },
      {
       "titre": "Hivernage des circuits",
       "contenu": "<p>Dans les régions où il gèle, l'eau restée dans un circuit peut faire éclater un bloc moteur, un échangeur ou une pompe. L'hivernage des circuits comprend généralement :</p>\n<ol>\n<li>la vidange de l'huile moteur à chaud et le remplacement du filtre, pour ne pas laisser d'huile acide dans le moteur pendant l'hiver ;</li>\n<li>le contrôle de la protection antigel du circuit d'eau douce ;</li>\n<li>le rinçage du circuit d'eau de mer à l'eau douce puis son remplissage par un produit antigel adapté, aspiré par la pompe, ou sa vidange complète selon la préconisation ;</li>\n<li>la dépose de la turbine (ou son contrôle) pour qu'elle ne reste pas déformée tout l'hiver ;</li>\n<li>la protection du moteur selon la notice (brouillard d'huile dans l'admission pour certains moteurs essence, obturation des entrées).</li>\n</ol>\n<p>Chaque constructeur publie sa procédure, qui prime sur les habitudes de l'atelier. La même démarche, à l'envers, constitue la <strong>remise en service</strong> au printemps.</p>"
      }
     ],
     "points_cles": [
      "Le refroidissement direct fait circuler l'eau de mer dans le moteur ; l'indirect utilise un échangeur.",
      "Le circuit d'eau de mer va de la prise d'eau au coude d'échappement en passant par filtre, pompe et échangeur.",
      "Une turbine qui tourne à sec est détruite en quelques secondes ; les morceaux perdus doivent être retrouvés.",
      "Le thermostat régule la température du circuit d'eau douce.",
      "Le clapet anti-siphon empêche l'eau de mer de remplir le moteur après l'arrêt.",
      "Les huiles se choisissent par grade SAE et norme ; FC-W et TC-W3 concernent les hors-bord.",
      "Une huile d'embase laiteuse signale une entrée d'eau par les joints de l'arbre d'hélice.",
      "L'hivernage protège les circuits contre le gel et la corrosion selon la procédure constructeur."
     ],
     "lexique": [
      {
       "terme": "Échangeur",
       "def": "Appareil où l'eau de mer refroidit le liquide du circuit fermé sans se mélanger à lui."
      },
      {
       "terme": "Turbine (impeller)",
       "def": "Rotor en caoutchouc à pales souples de la pompe à eau de mer."
      },
      {
       "terme": "Thermostat",
       "def": "Vanne thermique qui régule la température du moteur en dosant le passage vers l'échangeur."
      },
      {
       "terme": "Coude d'échappement",
       "def": "Pièce où l'eau de mer est injectée dans les gaz d'échappement pour les refroidir."
      },
      {
       "terme": "Water-lock",
       "def": "Pot d'échappement qui retient l'eau pour qu'elle ne revienne pas vers le moteur."
      },
      {
       "terme": "Clapet anti-siphon",
       "def": "Clapet placé au point haut d'un circuit qui laisse entrer l'air pour casser l'effet de siphon."
      },
      {
       "terme": "Grade SAE",
       "def": "Classification de la viscosité d'une huile à froid et à chaud."
      },
      {
       "terme": "Réfractomètre",
       "def": "Appareil qui mesure la concentration en antigel d'un liquide de refroidissement."
      }
     ]
    },
    {
     "id": "bmn-transmissions-helices",
     "titre": "Transmissions, lignes d'arbre et hélices",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Décrire les organes de transmission : inverseur, ligne d'arbre, embase, saildrive",
      "Expliquer la transmission du mouvement par engrenages et calculer un rapport de réduction",
      "Caractériser une hélice : diamètre, pas, nombre de pales, sens de rotation",
      "Calculer une vitesse théorique et un recul d'hélice",
      "Contrôler l'alignement d'une ligne d'arbre et l'étanchéité au passage de coque"
     ],
     "sections": [
      {
       "titre": "Rôle de la transmission et rapport de réduction",
       "contenu": "<p>La transmission adapte le mouvement du moteur aux besoins de l'hélice. Elle remplit trois fonctions : <strong>réduire la vitesse</strong> de rotation (une hélice est plus efficace en tournant moins vite avec un plus grand diamètre), <strong>inverser le sens</strong> de rotation pour la marche arrière et assurer un <strong>point mort</strong>, et <strong>transmettre la poussée</strong> de l'hélice à la coque.</p>\n<p>Le <strong>rapport de réduction</strong> r s'exprime souvent sous la forme 2,0:1, ce qui signifie que le moteur fait 2 tours quand l'hélice en fait 1. Pour un train d'engrenages : N<sub>sortie</sub> = N<sub>entrée</sub> × Z<sub>menant</sub> / Z<sub>mené</sub>, avec Z les nombres de dents. Si l'on néglige les pertes, la puissance se conserve : le couple est multiplié par le rapport de réduction.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le régime et le couple à l'hélice.<br>Données : moteur 3 200 tr/min, couple 150 N·m ; inverseur à pignon menant de 17 dents et roue menée de 39 dents ; rendement 0,96.<br>1. Rapport de réduction : r = 39 / 17 ≈ 2,29, soit 2,29:1.<br>2. Régime de l'hélice : 3 200 / 2,29 ≈ 1 397 tr/min.<br>3. Couple à l'hélice : 150 × 2,29 × 0,96 ≈ 330 N·m.<br>4. Vérification de puissance : moteur 150 × 2π × 3 200 / 60 ≈ 50,3 kW ; hélice 330 × 2π × 1 397 / 60 ≈ 48,3 kW, soit 96 %.</div>"
      },
      {
       "titre": "Inverseur et ligne d'arbre",
       "contenu": "<p>L'<strong>inverseur</strong> (ou inverseur-réducteur) est fixé à l'arrière du moteur in-bord. Il contient des engrenages et un dispositif d'embrayage : <strong>crabots</strong> ou <strong>cônes</strong> sur les petits inverseurs mécaniques, <strong>embrayages multidisques hydrauliques</strong> sur les modèles puissants. Il possède sa propre huile, à contrôler selon la notice.</p>\n<p>La <strong>ligne d'arbre</strong> transmet la rotation de l'inverseur à l'hélice. Elle comprend :</p>\n<ul>\n<li>un <strong>accouplement</strong> (plateau rigide ou flexible) entre l'inverseur et l'arbre ;</li>\n<li>l'<strong>arbre d'hélice</strong> en acier inoxydable ou en alliage spécifique ;</li>\n<li>le <strong>presse-étoupe</strong> ou le <strong>joint d'arbre</strong>, qui assure l'étanchéité au passage de la coque ;</li>\n<li>le <strong>tube d'étambot</strong> et, à l'extérieur, une ou plusieurs <strong>paliers hydrolubrifiés</strong> (bagues hydrolubes) parfois portés par une <strong>chaise d'arbre</strong> ;</li>\n<li>l'hélice, montée sur un cône avec clavette, écrou et goupille ou écrou freiné.</li>\n</ul>\n<p>Le moteur repose sur des <strong>silentblocs</strong> (supports élastiques) qui filtrent les vibrations. L'alignement entre l'inverseur et l'arbre est essentiel : un défaut provoque vibrations, usure des paliers et fuite au presse-étoupe.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler l'alignement moteur-arbre, bateau à flot (la coque se déforme légèrement au sec).<br>1. Désaccoupler les deux plateaux.<br>2. Rapprocher les faces sans forcer et mesurer l'écart à la jauge d'épaisseur en quatre points à 90°.<br>3. L'écart maximal entre deux points opposés doit rester inférieur à la tolérance du constructeur, souvent de l'ordre de quelques centièmes de millimètre.<br>4. Corriger en réglant la hauteur et la position latérale des silentblocs, puis recontrôler.<br>5. Réaccoupler avec la visserie et le couple de serrage prévus.</div>"
      },
      {
       "titre": "Embases de hors-bord, de Z-drive et saildrive",
       "contenu": "<p>Dans une <strong>embase</strong>, l'arbre moteur vertical entraîne, par un <strong>couple conique</strong> (pignon et deux couronnes avant et arrière), l'arbre d'hélice horizontal. Un <strong>crabot</strong> coulissant, commandé par la tringlerie d'inversion, solidarise l'une ou l'autre couronne avec l'arbre d'hélice : marche avant, point mort ou marche arrière. Le passage des vitesses se fait au ralenti, sans forcer.</p>\n<p>Le <strong>trim</strong> règle l'angle du moteur ou de l'embase par rapport au tableau arrière : rentré, il fait plonger l'étrave, utile au déjaugeage ; sorti, il relève l'étrave et réduit la surface mouillée à vitesse élevée. Le <strong>tilt</strong> relève complètement le moteur pour l'échouage ou le stockage. Ces mouvements sont réalisés par des vérins hydrauliques alimentés par une pompe électrique, ou à la main sur les petits moteurs.</p>\n<p>Le <strong>saildrive</strong> traverse le fond de coque par une ouverture étanchée par une <strong>membrane</strong> en caoutchouc. Cette membrane est un élément de sécurité : sa durée de vie est fixée par le constructeur (souvent en années) et elle se remplace bateau au sec en levant le moteur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un Z-drive, le <strong>soufflet</strong> en caoutchouc qui protège le cardan et l'articulation de l'embase est le seul obstacle entre la mer et l'intérieur de la coque. Un soufflet craquelé ou percé peut couler un bateau au port. Son contrôle fait partie de toute visite au sec.</div>"
      },
      {
       "titre": "Caractéristiques d'une hélice",
       "contenu": "<p>Une hélice se définit d'abord par deux dimensions, gravées en général sur le moyeu, souvent en pouces : le <strong>diamètre</strong> (cercle décrit par l'extrémité des pales) et le <strong>pas</strong>, distance théorique dont l'hélice avancerait en un tour si elle se vissait dans un solide. Une hélice marquée 14 × 19 a un diamètre de 14 pouces et un pas de 19 pouces (1 pouce = 25,4 mm).</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Effet</th></tr></thead>\n<tbody>\n<tr><td>Pas plus grand</td><td>Vitesse de pointe potentiellement plus élevée, mais régime maximal plus faible et accélérations plus molles</td></tr>\n<tr><td>Diamètre plus grand</td><td>Meilleure poussée pour les bateaux lourds et lents</td></tr>\n<tr><td>Nombre de pales (2, 3, 4…)</td><td>Plus de pales : moins de vibrations, meilleure accroche, légère perte de vitesse de pointe</td></tr>\n<tr><td>Sens de rotation</td><td>Hélice à droite (tourne dans le sens horaire vue de l'arrière en marche avant) ou à gauche</td></tr>\n<tr><td>Matériau</td><td>Aluminium (économique), inox (rigide, performant), bronze (in-bord), composite</td></tr>\n</tbody>\n</table>\n<p>Règle pratique : en général, augmenter le pas de 1 pouce diminue le régime maximal d'environ 150 à 200 tr/min ; il faut vérifier sur les données du constructeur. La <strong>cavitation</strong> est la formation de bulles de vapeur sur les pales lorsque la pression y devient trop faible ; leur implosion arrache le métal. La <strong>ventilation</strong> est l'aspiration d'air de surface par l'hélice, qui perd brutalement sa poussée.</p>"
      },
      {
       "titre": "Vitesse théorique et recul",
       "contenu": "<p>La <strong>vitesse théorique</strong> est la vitesse qu'aurait le bateau si l'hélice avançait exactement de son pas à chaque tour. La vitesse réelle est plus faible : l'écart relatif est le <strong>recul</strong> (ou glissement), exprimé en pourcentage. Un recul de 10 à 15 % est courant sur une coque planante rapide ; il est bien plus élevé sur un bateau lourd.</p>\n<p><strong>V<sub>théorique</sub> (m/min) = pas (m) × N<sub>hélice</sub> (tr/min)</strong> ; 1 nœud = 1 mille marin par heure = 1 852 m/h.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le recul d'une hélice de hors-bord.<br>Données : pas 19 pouces, régime moteur 5 600 tr/min, réduction de l'embase 2,08:1, vitesse mesurée au GPS 36 nœuds.<br>1. Pas en mètres : 19 × 0,0254 = 0,4826 m.<br>2. Régime hélice : 5 600 / 2,08 ≈ 2 692 tr/min.<br>3. Vitesse théorique : 0,4826 × 2 692 ≈ 1 299 m/min, soit 1 299 × 60 = 77 940 m/h.<br>4. En nœuds : 77 940 / 1 852 ≈ 42,1 nœuds.<br>5. Recul : (42,1 - 36) / 42,1 ≈ 0,145, soit environ 14,5 %.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le technicien règle le choix de l'hélice par un essai : bateau en charge habituelle, trim réglé, pleins gaz. On note régime et vitesse GPS. Si le régime est sous la plage recommandée, on diminue le pas ; s'il la dépasse, on l'augmente. Les résultats sont consignés dans le rapport d'essai remis au client.</div>"
      },
      {
       "titre": "Étanchéité au passage de l'arbre",
       "contenu": "<p>Le <strong>presse-étoupe</strong> traditionnel comprime des tresses (étoupe graphitée ou synthétique) autour de l'arbre au moyen d'un fouloir. Il doit laisser passer quelques gouttes d'eau par minute lorsque l'arbre tourne, pour se refroidir et se lubrifier ; il doit être étanche à l'arrêt. Trop serré, il chauffe et use l'arbre ; trop desserré, il fuit.</p>\n<p>Les <strong>joints à face tournante</strong> (ou joints secs) remplacent souvent le presse-étoupe : une bague tournante solidaire de l'arbre appuie sur une face fixe, maintenue par un soufflet. Ils ne fuient pas en fonctionnement normal mais exigent une purge d'air à la mise à l'eau sur certains modèles et un remplacement périodique du soufflet.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> toute ouverture dans la coque sous la flottaison (passe-coques, arbre, saildrive, sondes) est un risque de voie d'eau. Ces points se contrôlent à chaque mise à l'eau et figurent dans toute liste de contrôle de remise en service.</div>"
      }
     ],
     "points_cles": [
      "La transmission réduit le régime, inverse le sens de rotation et transmet la poussée.",
      "Le régime est divisé et le couple multiplié par le rapport de réduction, aux pertes près.",
      "L'alignement moteur-arbre se contrôle bateau à flot, à la jauge d'épaisseur entre plateaux.",
      "Dans une embase, un couple conique et un crabot assurent marche avant, point mort et marche arrière.",
      "Soufflets de Z-drive et membranes de saildrive sont des éléments de sécurité à contrôler.",
      "Une hélice se définit par son diamètre et son pas, généralement en pouces.",
      "Recul = (vitesse théorique - vitesse réelle) / vitesse théorique.",
      "Le presse-étoupe doit goutter légèrement en rotation et être étanche à l'arrêt."
     ],
     "lexique": [
      {
       "terme": "Inverseur",
       "def": "Boîte placée derrière un moteur in-bord qui assure réduction, marche avant, point mort et marche arrière."
      },
      {
       "terme": "Ligne d'arbre",
       "def": "Ensemble des pièces qui transmettent la rotation de l'inverseur à l'hélice à travers la coque."
      },
      {
       "terme": "Presse-étoupe",
       "def": "Dispositif d'étanchéité à tresses autour de l'arbre d'hélice."
      },
      {
       "terme": "Silentbloc",
       "def": "Support élastique qui fixe le moteur et absorbe les vibrations."
      },
      {
       "terme": "Pas",
       "def": "Distance théorique dont une hélice avance en un tour."
      },
      {
       "terme": "Recul",
       "def": "Écart relatif entre la vitesse théorique liée au pas et la vitesse réelle."
      },
      {
       "terme": "Cavitation",
       "def": "Formation et implosion de bulles de vapeur sur les pales, qui érodent le métal."
      },
      {
       "terme": "Ventilation",
       "def": "Aspiration d'air de surface par l'hélice, qui lui fait perdre sa poussée."
      },
      {
       "terme": "Trim",
       "def": "Réglage de l'angle du moteur hors-bord ou de l'embase par rapport au tableau arrière."
      },
      {
       "terme": "Crabot",
       "def": "Pièce à dents frontales qui solidarise un arbre et une roue pour engager une marche."
      }
     ]
    },
    {
     "id": "bmn-maintenance-diagnostic-motorisation",
     "titre": "Maintenance préventive et diagnostic du groupe motopropulseur",
     "niveau": "Tle",
     "duree": 55,
     "objectifs": [
      "Distinguer maintenance préventive systématique, préventive conditionnelle et corrective",
      "Exploiter un plan d'entretien constructeur et organiser une révision",
      "Conduire une démarche de diagnostic structurée, du constat à la cause",
      "Mettre en œuvre les mesures moteur : compression, étanchéité des cylindres, pressions, températures",
      "Rechercher les incidences d'une panne sur les systèmes voisins"
     ],
     "sections": [
      {
       "titre": "Les formes de maintenance",
       "contenu": "<p>La <strong>maintenance</strong> regroupe toutes les actions qui maintiennent ou rétablissent un bien dans un état lui permettant d'accomplir sa fonction. On distingue :</p>\n<table>\n<thead><tr><th>Forme</th><th>Déclenchement</th><th>Exemples nautiques</th></tr></thead>\n<tbody>\n<tr><td>Préventive systématique</td><td>Échéance fixe : heures de fonctionnement, durée calendaire</td><td>Vidange toutes les 100 h ou chaque année ; remplacement de la turbine tous les deux ans ; membrane de saildrive selon l'âge</td></tr>\n<tr><td>Préventive conditionnelle</td><td>Seuil atteint lors d'une surveillance</td><td>Anode à mi-usure ; pression d'huile en baisse ; jeu de gouvernail mesuré au-delà de la tolérance</td></tr>\n<tr><td>Corrective</td><td>Après une défaillance</td><td>Remplacement d'une pompe de cale en panne ; réparation d'une hélice tordue</td></tr>\n</tbody>\n</table>\n<p>La maintenance corrective peut être <strong>palliative</strong> (dépannage provisoire qui permet de rentrer au port) ou <strong>curative</strong> (réparation définitive). Dans le nautisme, la préventive a une importance particulière : une panne en mer peut mettre en danger l'équipage, et le moteur d'un voilier est aussi un moyen de sécurité.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les échéances d'entretien sont en général exprimées « en heures ou en durée, la première atteinte ». Un bateau qui navigue peu doit tout de même être entretenu chaque année : l'huile vieillit, les caoutchoucs durcissent, les anodes s'usent même au port.</div>"
      },
      {
       "titre": "Exploiter un plan d'entretien",
       "contenu": "<p>Le <strong>plan d'entretien</strong> du constructeur, dans le manuel du propriétaire ou le manuel d'atelier, se présente comme un tableau : en lignes, les opérations ; en colonnes, les échéances (première révision après rodage, puis toutes les 100 h, 200 h, 300 h, annuelle, etc.). Une croix ou une lettre précise l'opération : C (contrôler), R (remplacer), N (nettoyer), G (graisser), A (ajuster).</p>\n<p>Pour un hors-bord quatre temps, une révision annuelle ou de 100 h comprend en général : vidange et filtre à huile moteur, vidange de l'huile d'embase, remplacement des bougies et du filtre à carburant, contrôle de la turbine, graissage des points prévus (pivot, axe d'hélice, tringlerie), contrôle des anodes, du trim, de la batterie, du jeu aux soupapes selon la périodicité, et lecture des codes défauts.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une révision à partir du plan d'entretien.<br>1. Relever les heures au compteur et la date de la dernière révision dans le carnet d'entretien.<br>2. Déterminer l'échéance atteinte (par exemple 300 h) et lister toutes les opérations des colonnes concernées.<br>3. Rechercher les références des pièces et ingrédients à partir du numéro de série : kit d'entretien, huiles, joints.<br>4. Vérifier les rappels ou notes techniques publiés par le constructeur pour ce modèle.<br>5. Estimer le temps à partir des barèmes et établir le devis.<br>6. Après l'intervention, cocher chaque opération réalisée sur la fiche de révision et mettre à jour le carnet.</div>\n<p>Le respect du plan d'entretien, prouvé par le carnet tamponné et les factures, conditionne souvent le maintien de la <strong>garantie</strong> du constructeur.</p>"
      },
      {
       "titre": "La démarche de diagnostic",
       "contenu": "<p>Le <strong>diagnostic</strong> consiste à identifier la cause d'un dysfonctionnement à partir de ses symptômes. Une démarche structurée évite de remplacer des pièces au hasard, ce qui coûte cher au client et à l'image de l'entreprise.</p>\n<ol>\n<li><strong>Constater</strong> : recueillir la plainte du client, reproduire le dysfonctionnement si possible (essai à quai ou en mer), noter précisément les conditions.</li>\n<li><strong>Analyser le système</strong> : identifier les fonctions et les éléments en jeu à l'aide des schémas et de la documentation.</li>\n<li><strong>Émettre des hypothèses</strong> : lister les causes possibles.</li>\n<li><strong>Hiérarchiser</strong> les hypothèses selon leur probabilité (pannes fréquentes sur ce modèle, historique) et la facilité du contrôle (accessibilité, coût, temps).</li>\n<li><strong>Contrôler</strong> : choisir et réaliser les mesures qui valident ou éliminent chaque hypothèse ; comparer aux valeurs constructeur.</li>\n<li><strong>Conclure</strong> sur l'élément défectueux et la cause de sa défaillance.</li>\n<li><strong>Rechercher les incidences</strong> sur les éléments voisins et <strong>proposer l'intervention</strong>.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer l'élément défaillant sans chercher la cause conduit souvent à une nouvelle panne. Une turbine détruite peut venir d'une vanne laissée fermée ; un démarreur grillé peut venir d'une batterie trop faible qui a obligé à insister ; une hélice abîmée peut révéler un moteur réglé trop bas.</div>"
      },
      {
       "titre": "Les mesures sur le moteur",
       "contenu": "<p>Plusieurs mesures permettent d'évaluer l'état mécanique d'un moteur sans le démonter.</p>\n<table>\n<thead><tr><th>Mesure</th><th>Matériel</th><th>Ce qu'elle révèle</th></tr></thead>\n<tbody>\n<tr><td>Compression</td><td>Compressiomètre vissé à la place de la bougie ou de l'injecteur (adaptateur spécifique en diesel)</td><td>Pression maximale atteinte dans chaque cylindre ; on compare la valeur aux données constructeur et les cylindres entre eux</td></tr>\n<tr><td>Étanchéité des cylindres</td><td>Testeur de fuite : on injecte de l'air comprimé dans le cylindre au PMH compression et on mesure le pourcentage de fuite</td><td>Localise la fuite : bruit à l'admission (soupape d'admission), à l'échappement (soupape d'échappement), au reniflard (segments), bulles dans le circuit d'eau (joint de culasse)</td></tr>\n<tr><td>Pression d'huile</td><td>Manomètre sur le point de mesure prévu</td><td>Usure des paliers, pompe défaillante, huile inadaptée</td></tr>\n<tr><td>Températures</td><td>Thermomètre infrarouge, sondes</td><td>Échauffement anormal d'un cylindre, d'un échangeur, d'un palier</td></tr>\n<tr><td>Régime</td><td>Compte-tours de l'outil de diagnostic ou tachymètre optique</td><td>Vérification du régime maximal atteint et du ralenti</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> interpréter un relevé de compression sur un moteur quatre cylindres essence.<br>Relevé : cylindre 1 = 11,5 bar ; cylindre 2 = 11,2 bar ; cylindre 3 = 7,8 bar ; cylindre 4 = 11,4 bar. Données constructeur : 10 à 13 bar, écart maximal entre cylindres 1 bar.<br>1. Comparer chaque valeur à la plage : le cylindre 3 est hors tolérance.<br>2. Calculer l'écart maxi : 11,5 - 7,8 = 3,7 bar, très supérieur à 1 bar.<br>3. Test complémentaire : injecter un peu d'huile dans le cylindre 3 et refaire la mesure. Si la compression remonte nettement, les segments sont en cause ; si elle ne change pas, ce sont les soupapes ou le joint de culasse.<br>4. Confirmer au testeur de fuite avant de proposer une intervention.</div>"
      },
      {
       "titre": "Diagnostic assisté par l'outil constructeur",
       "contenu": "<p>Sur les moteurs à gestion électronique, l'outil de diagnostic donne accès aux codes défauts et aux paramètres. Un code défaut ne désigne pas forcément une pièce défectueuse : il signale qu'un signal est hors de sa plage normale. Par exemple, un code « tension capteur de température trop haute » peut venir de la sonde, du faisceau coupé ou d'un connecteur oxydé.</p>\n<ul>\n<li>Relever tous les codes, présents (actifs) et mémorisés (historiques), avec leur nombre d'occurrences et les heures moteur associées.</li>\n<li>Consulter la procédure de diagnostic associée au code dans la documentation.</li>\n<li>Lire les paramètres en temps réel et les comparer aux valeurs attendues dans les mêmes conditions.</li>\n<li>Réaliser les tests d'actionneurs proposés (injecteur, pompe, ventilateur) pour isoler un élément.</li>\n<li>Après réparation, effacer les codes, refaire un essai et vérifier qu'ils ne réapparaissent pas.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en milieu marin, beaucoup de pannes électroniques sont en réalité des pannes de connectique : oxydation des broches, faisceau frotté contre une arête, masse desserrée. Le technicien commence par un contrôle visuel des connecteurs et des masses avant de mettre en cause un calculateur.</div>"
      },
      {
       "titre": "Incidences d'une panne et rapport de diagnostic",
       "contenu": "<p>Une défaillance a souvent des conséquences sur d'autres éléments. Après une surchauffe, par exemple, il faut contrôler la planéité de la culasse, l'état du joint de culasse, le coude d'échappement et les tuyaux en caoutchouc qui ont pu cuire. Après une entrée d'eau dans le moteur, il faut vidanger plusieurs fois, contrôler les bielles et le démarreur. Après un échouage sur l'embase, il faut vérifier la rectitude de l'arbre d'hélice, l'état du couple conique et les fixations du moteur.</p>\n<p>Le diagnostic se conclut par un <strong>rapport</strong> clair destiné au chef d'atelier et au client : symptôme constaté, contrôles réalisés avec les valeurs mesurées et les valeurs attendues, élément défectueux, cause probable, incidences, intervention proposée avec son coût et son délai. Ce rapport sert de base au devis et justifie la facture.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une valeur mesurée n'a de sens que comparée à une valeur de référence, dans les mêmes conditions (moteur chaud ou froid, régime, unité). Un rapport de diagnostic indique toujours les deux.</div>"
      }
     ],
     "points_cles": [
      "La maintenance est préventive systématique, préventive conditionnelle ou corrective.",
      "Les échéances sont exprimées en heures ou en durée, la première atteinte faisant foi.",
      "Le plan d'entretien liste les opérations par échéance avec des codes : contrôler, remplacer, nettoyer, graisser.",
      "Le diagnostic suit l'ordre : constater, analyser, émettre et hiérarchiser des hypothèses, contrôler, conclure.",
      "La compression se compare à la plage constructeur et entre cylindres ; le testeur de fuite localise la fuite.",
      "Un code défaut signale un signal anormal, pas forcément une pièce défectueuse.",
      "En milieu marin, connecteurs oxydés et masses desserrées sont des causes fréquentes.",
      "Le rapport de diagnostic donne les mesures, les valeurs de référence, la cause, les incidences et l'intervention proposée."
     ],
     "lexique": [
      {
       "terme": "Maintenance préventive systématique",
       "def": "Maintenance réalisée selon un échéancier fixe en heures ou en durée."
      },
      {
       "terme": "Maintenance préventive conditionnelle",
       "def": "Maintenance déclenchée par l'atteinte d'un seuil lors d'une surveillance."
      },
      {
       "terme": "Maintenance corrective",
       "def": "Maintenance réalisée après une défaillance."
      },
      {
       "terme": "Plan d'entretien",
       "def": "Tableau constructeur des opérations à réaliser à chaque échéance."
      },
      {
       "terme": "Hypothèse",
       "def": "Cause possible d'un dysfonctionnement, à valider ou à éliminer par un contrôle."
      },
      {
       "terme": "Compressiomètre",
       "def": "Manomètre qui mesure la pression maximale atteinte dans un cylindre au démarreur."
      },
      {
       "terme": "Testeur de fuite",
       "def": "Appareil qui mesure le pourcentage de fuite d'air d'un cylindre mis sous pression."
      },
      {
       "terme": "Incidence",
       "def": "Conséquence d'une panne sur d'autres éléments du système."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Énergie électrique, électronique et propulsion électrique",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmn-electricite-bord-batteries",
     "titre": "Électricité de bord : lois de base, batteries et bilan énergétique",
     "niveau": "1re",
     "duree": 50,
     "objectifs": [
      "Utiliser les grandeurs électriques et les lois d'Ohm et de Joule dans des situations de bord",
      "Décrire l'architecture d'un réseau de bord en très basse tension continue",
      "Comparer les technologies de batteries : plomb ouvert, AGM, gel, lithium fer phosphate",
      "Évaluer l'état de charge et l'état de santé d'une batterie",
      "Établir un bilan énergétique et dimensionner un parc de batteries"
     ],
     "sections": [
      {
       "titre": "Grandeurs et lois de base",
       "contenu": "<p>L'électricité d'un bateau de plaisance fonctionne principalement en <strong>courant continu</strong> sous <strong>12 V</strong> ou <strong>24 V</strong> (parfois 48 V). Les grandeurs utiles sont :</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Symbole</th><th>Unité</th><th>Appareil de mesure et branchement</th></tr></thead>\n<tbody>\n<tr><td>Tension</td><td>U</td><td>volt (V)</td><td>Voltmètre en dérivation, aux bornes de l'élément</td></tr>\n<tr><td>Intensité</td><td>I</td><td>ampère (A)</td><td>Ampèremètre en série, ou pince ampèremétrique autour d'un seul conducteur</td></tr>\n<tr><td>Résistance</td><td>R</td><td>ohm (Ω)</td><td>Ohmmètre, circuit hors tension</td></tr>\n<tr><td>Puissance</td><td>P</td><td>watt (W)</td><td>Calculée ou wattmètre</td></tr>\n<tr><td>Énergie</td><td>E</td><td>wattheure (Wh)</td><td>Calculée ou contrôleur de batterie</td></tr>\n<tr><td>Quantité d'électricité (capacité)</td><td>Q</td><td>ampère-heure (Ah)</td><td>Contrôleur de batterie à shunt</td></tr>\n</tbody>\n</table>\n<p>Les relations à maîtriser sont la <strong>loi d'Ohm</strong> U = R × I, la puissance <strong>P = U × I</strong>, l'énergie <strong>E = P × t</strong> et la quantité d'électricité <strong>Q = I × t</strong>. L'effet Joule, P = R × I², explique l'échauffement des câbles et des connexions résistantes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le courant consommé par un réfrigérateur de bord de 60 W en 12 V et son énergie journalière.<br>1. I = P / U = 60 / 12 = 5 A lorsqu'il fonctionne.<br>2. Le compresseur fonctionne environ 40 % du temps, soit 0,4 × 24 = 9,6 h par jour.<br>3. Quantité d'électricité : Q = 5 × 9,6 = 48 Ah par jour.<br>4. Énergie : E = 60 × 9,6 = 576 Wh par jour.</div>"
      },
      {
       "titre": "Architecture d'un réseau de bord",
       "contenu": "<p>Un bateau habitable comporte en général deux circuits de batteries séparés :</p>\n<ul>\n<li>la <strong>batterie moteur</strong> (ou de démarrage), qui fournit un courant très fort pendant quelques secondes au démarreur ;</li>\n<li>le <strong>parc de servitude</strong>, qui alimente les consommateurs du bord (éclairage, électronique, pompes, réfrigérateur) par des décharges longues.</li>\n</ul>\n<p>Chaque circuit possède un <strong>coupe-batterie</strong>. Les consommateurs sont alimentés par un <strong>tableau électrique</strong> (ou tableau de distribution) équipé de disjoncteurs ou de fusibles, d'interrupteurs et souvent d'un voltmètre. Le retour se fait par des conducteurs négatifs reliés à une <strong>barre de masse</strong> commune, elle-même reliée au négatif batterie.</p>\n<p>Les sources de recharge sont l'<strong>alternateur</strong> du moteur, le <strong>chargeur de quai</strong> alimenté en 230 V, les <strong>panneaux solaires</strong> avec leur régulateur, parfois une <strong>éolienne</strong>, un hydrogénérateur ou un <strong>groupe électrogène</strong>. Un <strong>répartiteur de charge</strong> ou un <strong>coupleur</strong> distribue le courant de charge entre les parcs sans les mettre en parallèle de façon permanente, pour que la batterie moteur reste disponible même si le parc de servitude est vide.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à bord d'un bateau, la coque n'est pas utilisée comme conducteur de retour, contrairement à l'automobile. Le retour se fait par un câble négatif dédié, ce qui limite les risques de corrosion électrolytique.</div>"
      },
      {
       "titre": "Les technologies de batteries",
       "contenu": "<p>Une batterie est un ensemble d'<strong>éléments</strong> (ou cellules) reliés en série. Sa <strong>capacité</strong> C en ampères-heures indique la quantité d'électricité qu'elle peut fournir dans des conditions normalisées (souvent en 20 heures, notée C20). Une batterie de démarrage est aussi caractérisée par son <strong>courant de démarrage</strong> à froid (en A, par exemple selon la norme EN).</p>\n<table>\n<thead><tr><th>Technologie</th><th>Tension nominale (12 V)</th><th>Atouts</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Plomb ouvert (électrolyte liquide)</td><td>6 éléments de 2 V</td><td>Économique, tolérante</td><td>Entretien du niveau, dégagement d'hydrogène, décharge profonde limitée</td></tr>\n<tr><td>Plomb étanche AGM (électrolyte absorbé)</td><td>6 éléments de 2 V</td><td>Sans entretien, supporte les inclinaisons</td><td>Sensible aux surcharges, tension de charge précise</td></tr>\n<tr><td>Plomb gel</td><td>6 éléments de 2 V</td><td>Bonne tenue aux cycles</td><td>Courant de charge limité</td></tr>\n<tr><td>Lithium fer phosphate (LiFePO4)</td><td>4 éléments de 3,2 V, soit 12,8 V</td><td>Légère, décharge profonde possible, tension stable, charge rapide</td><td>Coût, nécessité d'un système de gestion (BMS), charge interdite par grand froid</td></tr>\n</tbody>\n</table>\n<p>Une batterie au plomb ne devrait pas être déchargée régulièrement au-delà de 50 % de sa capacité sous peine de vieillissement rapide. Une batterie lithium accepte en général des décharges plus profondes selon les données du fabricant. Le <strong>BMS</strong> (battery management system) d'une batterie lithium surveille la tension de chaque cellule, la température et le courant, et coupe la batterie en cas d'anomalie.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer un parc au plomb par du lithium ne consiste pas à changer seulement les batteries. Il faut adapter le chargeur, l'alternateur (protection contre la coupure brutale du BMS, limitation de courant), le régulateur solaire et le contrôleur de batterie, en suivant les préconisations du fabricant.</div>"
      },
      {
       "titre": "État de charge et état de santé",
       "contenu": "<p>L'<strong>état de charge</strong> (SOC) indique la proportion de la capacité encore disponible. Pour une batterie au plomb, il peut être estimé par la <strong>tension au repos</strong>, mesurée après plusieurs heures sans charge ni décharge :</p>\n<table>\n<thead><tr><th>Tension au repos (batterie plomb 12 V)</th><th>État de charge approximatif</th></tr></thead>\n<tbody>\n<tr><td>12,7 V et plus</td><td>100 %</td></tr>\n<tr><td>12,4 V</td><td>environ 75 %</td></tr>\n<tr><td>12,2 V</td><td>environ 50 %</td></tr>\n<tr><td>12,0 V</td><td>environ 25 %</td></tr>\n<tr><td>11,8 V et moins</td><td>déchargée</td></tr>\n</tbody>\n</table>\n<p>Ces valeurs varient selon la technologie et la température ; il faut consulter la documentation du fabricant. Pour une batterie lithium, la tension varie très peu sur une grande plage de charge : on utilise un <strong>contrôleur de batterie</strong> à <strong>shunt</strong>, qui compte les ampères-heures entrants et sortants.</p>\n<p>L'<strong>état de santé</strong> (SOH) indique la capacité restante par rapport à la capacité neuve. On l'évalue avec un <strong>testeur de batterie</strong> électronique (mesure de conductance) ou par un essai de décharge à courant constant.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> au retour d'hivernage, beaucoup de clients se plaignent de batteries « mortes ». Le technicien recharge complètement, laisse reposer, teste la batterie, puis recherche une consommation parasite (courant de fuite) avec une pince ampèremétrique de précision tous consommateurs coupés. Une alarme, une pompe de cale automatique ou un mauvais coupe-batterie expliquent souvent la décharge.</div>"
      },
      {
       "titre": "Bilan énergétique et dimensionnement du parc",
       "contenu": "<p>Le <strong>bilan énergétique</strong> recense tous les consommateurs du bord, leur puissance et leur durée d'utilisation quotidienne. Il permet de dimensionner le parc de servitude et les moyens de recharge.</p>\n<table>\n<thead><tr><th>Consommateur</th><th>Puissance (W)</th><th>Courant en 12 V (A)</th><th>Durée par jour (h)</th><th>Ah par jour</th></tr></thead>\n<tbody>\n<tr><td>Réfrigérateur</td><td>60</td><td>5</td><td>9,6</td><td>48</td></tr>\n<tr><td>Feux de navigation à LED</td><td>12</td><td>1</td><td>8</td><td>8</td></tr>\n<tr><td>Traceur et sondeur</td><td>36</td><td>3</td><td>10</td><td>30</td></tr>\n<tr><td>Pilote automatique</td><td>48</td><td>4</td><td>8</td><td>32</td></tr>\n<tr><td>Éclairage intérieur à LED</td><td>18</td><td>1,5</td><td>4</td><td>6</td></tr>\n<tr><td>Instruments et VHF en veille</td><td>12</td><td>1</td><td>12</td><td>12</td></tr>\n<tr><td><strong>Total</strong></td><td></td><td></td><td></td><td><strong>136</strong></td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dimensionner le parc à partir de ce bilan, pour 2 jours d'autonomie sans recharge.<br>1. Besoin : 136 Ah × 2 jours = 272 Ah.<br>2. Avec des batteries au plomb déchargées au maximum à 50 % : capacité nécessaire = 272 / 0,5 = 544 Ah, par exemple 5 batteries de 110 Ah (550 Ah).<br>3. Avec du lithium utilisable à 80 % selon le fabricant : 272 / 0,8 = 340 Ah, par exemple 2 batteries de 200 Ah.<br>4. Vérifier ensuite que les moyens de recharge peuvent restituer environ 136 Ah par jour, rendement de charge compris.</div>\n<p>Les montages en <strong>série</strong> additionnent les tensions (deux batteries de 12 V donnent 24 V, même capacité) ; les montages en <strong>parallèle</strong> additionnent les capacités (même tension). On n'associe que des batteries identiques, de même technologie, même capacité et même âge.</p>"
      },
      {
       "titre": "Mesurer correctement sur un circuit de bord",
       "contenu": "<p>Le <strong>multimètre</strong> est l'outil de base du technicien. Une mesure fausse conduit à un diagnostic faux : il faut choisir le bon calibre, le bon branchement et le bon moment.</p>\n<ul>\n<li>Pour mesurer une <strong>tension</strong>, les pointes se placent aux bornes de l'élément, circuit en fonctionnement. Une tension de 12,6 V mesurée sur un circuit à vide ne prouve rien : un contact oxydé ne se révèle que lorsqu'un courant passe.</li>\n<li>La <strong>mesure de chute de tension</strong> consiste à mesurer la tension entre deux points d'un même conducteur (par exemple entre le positif batterie et l'entrée de l'appareil) pendant que l'appareil fonctionne. Une valeur supérieure à quelques dixièmes de volt signale une connexion ou un câble résistant.</li>\n<li>Pour mesurer un <strong>courant</strong> élevé, on utilise une <strong>pince ampèremétrique</strong> à effet Hall, compatible avec le courant continu, refermée autour d'un seul conducteur.</li>\n<li>La <strong>mesure de résistance</strong> et le <strong>test de continuité</strong> se font toujours hors tension, l'élément isolé du circuit.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> laisser les cordons du multimètre dans les douilles de mesure de courant puis mesurer une tension aux bornes d'une batterie revient à faire un court-circuit à travers l'appareil. Le fusible interne fond au mieux, l'appareil est détruit au pire.</div>"
      }
     ],
     "points_cles": [
      "U = R × I ; P = U × I ; E = P × t ; Q = I × t.",
      "Le voltmètre se branche en dérivation, l'ampèremètre en série ; l'ohmmètre hors tension.",
      "Un bord comporte une batterie moteur et un parc de servitude séparés, chacun avec son coupe-batterie.",
      "Le retour se fait par un câble négatif dédié, jamais par la coque.",
      "Une batterie au plomb ne se décharge pas régulièrement au-delà de 50 %.",
      "Une batterie lithium exige un BMS et des chargeurs adaptés.",
      "La tension au repos estime l'état de charge d'une batterie au plomb ; le shunt compte les Ah.",
      "Le bilan énergétique dimensionne le parc et les moyens de recharge.",
      "Série : les tensions s'additionnent ; parallèle : les capacités s'additionnent."
     ],
     "lexique": [
      {
       "terme": "Capacité",
       "def": "Quantité d'électricité qu'une batterie peut fournir, en ampères-heures."
      },
      {
       "terme": "Parc de servitude",
       "def": "Ensemble des batteries qui alimentent les consommateurs du bord."
      },
      {
       "terme": "Coupe-batterie",
       "def": "Interrupteur de forte section qui isole une batterie du circuit."
      },
      {
       "terme": "Répartiteur de charge",
       "def": "Dispositif qui distribue le courant de charge entre plusieurs parcs sans les relier en permanence."
      },
      {
       "terme": "BMS",
       "def": "Système électronique de gestion qui surveille et protège une batterie lithium."
      },
      {
       "terme": "Shunt",
       "def": "Résistance calibrée de très faible valeur qui permet de mesurer le courant d'une batterie."
      },
      {
       "terme": "État de charge",
       "def": "Part de la capacité encore disponible dans une batterie."
      },
      {
       "terme": "État de santé",
       "def": "Capacité restante d'une batterie comparée à sa capacité neuve."
      },
      {
       "terme": "Bilan énergétique",
       "def": "Recensement des consommations électriques quotidiennes du bord."
      }
     ]
    },
    {
     "id": "bmn-installation-electrique-charge-quai",
     "titre": "Installation électrique du bord : câblage, protection, charge et courant de quai",
     "niveau": "1re-Tle",
     "duree": 55,
     "objectifs": [
      "Choisir la section d'un câble en tenant compte du courant et de la chute de tension",
      "Choisir et placer les protections : fusibles, disjoncteurs, protections différentielles",
      "Décrire les dispositifs de charge : alternateur, chargeur, régulateur solaire, convertisseur",
      "Expliquer les règles de sécurité de l'installation 230 V et du courant de quai",
      "Prévenir la corrosion électrolytique liée aux installations électriques"
     ],
     "sections": [
      {
       "titre": "Câbles et connexions en milieu marin",
       "contenu": "<p>Les installations électriques des bateaux de plaisance sont encadrées par des normes internationales, notamment l'<strong>ISO 10133</strong> pour les systèmes à très basse tension en courant continu et l'<strong>ISO 13297</strong> pour les systèmes en courant alternatif. Les règles qui suivent en reprennent l'esprit ; pour un chantier, c'est le texte en vigueur de la norme et la notice du fabricant qui font foi.</p>\n<ul>\n<li>Les conducteurs sont <strong>multibrins souples</strong> (les vibrations cassent un conducteur rigide), de préférence en <strong>cuivre étamé</strong> qui résiste mieux à la corrosion.</li>\n<li>Les couleurs sont normalisées : positif généralement en rouge, négatif en noir ou jaune selon la norme appliquée ; il faut suivre celle du bateau et la documentation.</li>\n<li>Les cosses sont <strong>serties</strong> avec la pince adaptée à leur taille, puis protégées par une gaine thermorétractable, de préférence à colle.</li>\n<li>Les câbles sont fixés à intervalles réguliers, protégés aux passages de cloisons et cheminent au-dessus des fonds et loin des sources de chaleur.</li>\n<li>Toute connexion est accessible et repérée : un repérage aux deux extrémités facilite le dépannage.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une connexion mal sertie ou oxydée présente une résistance de quelques dixièmes d'ohm seulement. Sous 100 A au démarreur, elle dissipe pourtant P = R × I², soit plusieurs centaines de watts : elle chauffe, fond l'isolant et peut provoquer un incendie.</div>"
      },
      {
       "titre": "Déterminer la section d'un câble",
       "contenu": "<p>La section d'un câble se choisit selon deux critères : l'<strong>intensité admissible</strong> (pour que le câble ne chauffe pas excessivement) et la <strong>chute de tension</strong> (pour que l'appareil reçoive une tension suffisante). En 12 V, c'est souvent la chute de tension qui impose la section, car les longueurs sont grandes.</p>\n<p>La résistance d'un conducteur est R = ρ × L / S, avec ρ la résistivité du cuivre (environ 0,0175 Ω·mm²/m), L la longueur en mètres et S la section en mm². En courant continu, le courant fait l'aller et le retour : la longueur à prendre en compte est le double de la distance entre la source et l'appareil. On obtient : <strong>S = ρ × 2 × L × I / ΔU</strong>.</p>\n<p>Les recommandations usuelles limitent la chute de tension à <strong>3 %</strong> pour les circuits sensibles (électronique, feux de navigation, pompes) et à <strong>10 %</strong> au maximum pour les circuits secondaires ; vérifier les valeurs dans la norme appliquée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déterminer la section d'alimentation d'un guindeau de 1 000 W en 12 V, situé à 9 m des batteries, avec une chute de tension maximale de 10 %.<br>1. Courant : I = 1 000 / 12 ≈ 83 A.<br>2. Chute admissible : ΔU = 0,10 × 12 = 1,2 V.<br>3. Longueur aller-retour : 2 × 9 = 18 m.<br>4. Section : S = 0,0175 × 18 × 83 / 1,2 ≈ 21,8 mm².<br>5. Choisir la section normalisée supérieure, 25 mm², puis vérifier que l'intensité admissible de ce câble, dans les conditions de pose, dépasse 83 A. Le fabricant du guindeau impose souvent sa propre section minimale, qui prime si elle est supérieure.</div>"
      },
      {
       "titre": "Protections des circuits",
       "contenu": "<p>Une <strong>protection contre les surintensités</strong> (fusible ou disjoncteur) protège le <strong>câble</strong> contre l'échauffement en cas de surcharge ou de court-circuit. Elle se place au plus près de la source, en tête de chaque circuit, et son calibre est inférieur ou égal à l'intensité admissible du câble qu'elle protège.</p>\n<table>\n<thead><tr><th>Protection</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Fusible de forte puissance (type ANL, MEGA, ou fusible de borne)</td><td>Départ batterie, protection des câbles principaux</td></tr>\n<tr><td>Fusible à lame</td><td>Circuits de faible puissance du tableau</td></tr>\n<tr><td>Disjoncteur magnéto-thermique</td><td>Circuits du tableau 12 V ou 230 V, réarmable</td></tr>\n<tr><td>Dispositif différentiel 30 mA</td><td>Protection des personnes sur le circuit 230 V</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le fusible protège le câble, pas l'appareil. Remplacer un fusible qui fond par un calibre supérieur supprime la protection du câble et crée un risque d'incendie. On recherche d'abord la cause : court-circuit, appareil défaillant, surcharge.</div>\n<p>Les composants électriques installés dans un compartiment où des vapeurs d'essence peuvent s'accumuler doivent être <strong>protégés contre l'inflammation</strong> (norme ISO 8846) : démarreur, alternateur, pompe de cale, ventilateur d'extraction prévus pour cet usage.</p>"
      },
      {
       "titre": "Les sources de charge",
       "contenu": "<p>L'<strong>alternateur</strong> produit un courant alternatif triphasé, redressé par un pont de diodes et régulé autour de 14 V environ pour un réseau 12 V. Son <strong>régulateur</strong> standard est conçu pour la batterie moteur ; pour charger efficacement un grand parc de servitude ou un parc lithium, on ajoute souvent un régulateur externe ou un <strong>chargeur DC-DC</strong> (convertisseur de courant continu en courant continu) qui adapte la courbe de charge.</p>\n<p>Les chargeurs modernes appliquent une <strong>courbe de charge</strong> en plusieurs phases : phase à courant constant (bulk), phase d'absorption à tension constante, puis phase d'entretien (floating) à tension réduite. Les tensions dépendent de la technologie de batterie et se paramètrent sur le chargeur.</p>\n<p>Les <strong>panneaux solaires</strong> se raccordent par un <strong>régulateur</strong> de type PWM ou, plus performant, <strong>MPPT</strong> (qui recherche le point de puissance maximale du panneau). Le <strong>convertisseur</strong> (onduleur) produit du 230 V alternatif à partir des batteries ; le <strong>combiné chargeur-convertisseur</strong> assure les deux fonctions et bascule automatiquement sur le courant de quai lorsqu'il est disponible.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler un circuit de charge par alternateur.<br>1. Batterie chargée, mesurer la tension au repos aux bornes (par exemple 12,6 V).<br>2. Démarrer le moteur et le stabiliser à environ 1 500 tr/min : la tension doit monter dans la plage indiquée par le constructeur (souvent 13,8 à 14,4 V).<br>3. Allumer des consommateurs puissants : la tension doit rester dans la plage ; mesurer le courant de charge à la pince.<br>4. Mesurer la chute de tension entre la borne B+ de l'alternateur et le positif batterie, puis entre le carter et le négatif batterie, moteur en charge : chaque valeur doit rester faible (quelques dixièmes de volt au plus).<br>5. Une tension trop basse oriente vers la courroie, le régulateur ou les connexions ; une tension trop haute vers le régulateur.</div>"
      },
      {
       "titre": "Le circuit 230 V et le courant de quai",
       "contenu": "<p>Le <strong>courant de quai</strong> arrive à bord par un cordon branché sur la borne du ponton et une <strong>prise de quai</strong> étanche. L'installation 230 V du bord comprend ensuite un dispositif de coupure et de protection, une protection différentielle, puis les circuits (prises, chauffe-eau, chargeur, climatisation).</p>\n<ul>\n<li>Le circuit 230 V est séparé physiquement du circuit très basse tension et clairement repéré.</li>\n<li>Le <strong>conducteur de protection</strong> (vert et jaune) relie les masses métalliques des appareils à la terre du quai.</li>\n<li>Toutes les sources 230 V (quai, groupe, convertisseur) doivent être interverrouillées pour ne jamais être connectées simultanément au même circuit.</li>\n<li>Le cordon de quai se branche d'abord côté bateau puis côté borne, et se débranche dans l'ordre inverse, pour ne jamais manipuler une fiche sous tension qui pend vers l'eau.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un défaut d'isolement sur un appareil 230 V d'un bateau peut mettre l'eau du port sous tension autour de la coque. Des accidents mortels de nageurs par électrocution ont été rapportés dans des ports. Aucune intervention 230 V sans habilitation adaptée, et jamais de neutralisation d'une protection différentielle qui disjoncte.</div>"
      },
      {
       "titre": "Corrosion électrolytique et isolement galvanique",
       "contenu": "<p>La <strong>corrosion électrolytique</strong> est provoquée par un courant électrique extérieur qui traverse des pièces métalliques immergées : fuite de courant du réseau de bord vers une pièce en contact avec l'eau, ou courant venant d'autres bateaux par le conducteur de protection du quai. Elle est beaucoup plus rapide que la corrosion galvanique : une anode ou une embase peut être attaquée en quelques semaines.</p>\n<p>Le conducteur de protection relie le bateau à tous les autres bateaux branchés au même ponton : leurs pièces immergées forment alors une grande pile. Pour couper ce chemin sans supprimer la protection des personnes, on installe un <strong>isolateur galvanique</strong> (qui bloque les faibles tensions continues tout en laissant passer un courant de défaut) ou, mieux, un <strong>transformateur d'isolement</strong>.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour rechercher une fuite de courant vers l'eau, le technicien mesure le potentiel des pièces immergées avec une électrode de référence argent / chlorure d'argent plongée près de la coque et un voltmètre, d'abord tout coupé, puis en remettant les circuits un par un. Une variation importante à la mise sous tension d'un circuit désigne le coupable.</div>"
      }
     ],
     "points_cles": [
      "Câbles multibrins, cuivre étamé, cosses serties et gainées, repérage aux deux extrémités.",
      "S = ρ × 2 × L × I / ΔU, avec ρ ≈ 0,0175 Ω·mm²/m pour le cuivre.",
      "Chute de tension limitée à environ 3 % pour les circuits sensibles et 10 % au maximum ailleurs.",
      "Le fusible protège le câble ; il se place au plus près de la source.",
      "Les équipements électriques en compartiment essence doivent être protégés contre l'inflammation.",
      "Les chargeurs appliquent une courbe en plusieurs phases paramétrée selon la technologie de batterie.",
      "Les sources 230 V ne doivent jamais être connectées simultanément ; la protection différentielle 30 mA protège les personnes.",
      "Un isolateur galvanique ou un transformateur d'isolement limite la corrosion par le conducteur de protection du quai."
     ],
     "lexique": [
      {
       "terme": "Chute de tension",
       "def": "Perte de tension dans un câble due à sa résistance."
      },
      {
       "terme": "Section",
       "def": "Surface de la coupe d'un conducteur, en mm²."
      },
      {
       "terme": "Sertissage",
       "def": "Fixation d'une cosse sur un conducteur par écrasement contrôlé."
      },
      {
       "terme": "Disjoncteur différentiel",
       "def": "Appareil qui coupe le circuit lorsqu'un courant de fuite vers la terre dépasse son seuil."
      },
      {
       "terme": "Régulateur MPPT",
       "def": "Régulateur solaire qui recherche le point de puissance maximale du panneau."
      },
      {
       "terme": "Convertisseur",
       "def": "Appareil qui produit du courant alternatif 230 V à partir des batteries, appelé aussi onduleur."
      },
      {
       "terme": "Courant de quai",
       "def": "Alimentation électrique 230 V fournie par la borne du ponton."
      },
      {
       "terme": "Corrosion électrolytique",
       "def": "Corrosion accélérée par un courant électrique extérieur traversant des pièces immergées."
      },
      {
       "terme": "Isolateur galvanique",
       "def": "Dispositif placé sur le conducteur de protection qui bloque les faibles courants continus."
      },
      {
       "terme": "Transformateur d'isolement",
       "def": "Transformateur qui sépare électriquement l'installation du bord du réseau du quai."
      }
     ]
    },
    {
     "id": "bmn-electronique-navigation-reseaux",
     "titre": "Électronique de navigation et réseaux embarqués",
     "niveau": "Tle",
     "duree": 55,
     "objectifs": [
      "Décrire le rôle et le principe des principaux équipements électroniques de navigation",
      "Expliquer la structure d'un réseau NMEA 2000 et la différence avec NMEA 0183",
      "Préparer et réaliser l'installation d'un capteur ou d'un afficheur",
      "Paramétrer un équipement : calibrations, sources de données, identifiant MMSI",
      "Diagnostiquer un défaut de communication sur un réseau embarqué"
     ],
     "sections": [
      {
       "titre": "Les équipements de navigation",
       "contenu": "<p>L'électronique de navigation a profondément changé le métier : une part croissante des interventions consiste à installer, raccorder et paramétrer des équipements.</p>\n<table>\n<thead><tr><th>Équipement</th><th>Fonction</th><th>Principe</th></tr></thead>\n<tbody>\n<tr><td>Récepteur GNSS (GPS)</td><td>Position, vitesse et route fond, heure</td><td>Réception des signaux de satellites de positionnement</td></tr>\n<tr><td>Traceur de cartes</td><td>Affichage de la position sur carte électronique, routes, points</td><td>Écran multifonction relié aux capteurs</td></tr>\n<tr><td>Sondeur</td><td>Profondeur sous la sonde</td><td>Mesure du temps d'aller-retour d'une impulsion ultrasonore</td></tr>\n<tr><td>Loch</td><td>Vitesse surface (par rapport à l'eau)</td><td>Roue à aubes ou capteur ultrasonique sous la coque</td></tr>\n<tr><td>Anémomètre-girouette</td><td>Vitesse et direction du vent apparent</td><td>Moulinet et girouette en tête de mât</td></tr>\n<tr><td>Compas électronique</td><td>Cap magnétique</td><td>Capteur magnétique (magnétomètre)</td></tr>\n<tr><td>Radar</td><td>Détection des obstacles et des côtes, de jour comme de nuit</td><td>Émission et réception d'ondes radio réfléchies</td></tr>\n<tr><td>AIS</td><td>Identification des navires équipés, position, route, vitesse</td><td>Échange automatique de messages par VHF</td></tr>\n<tr><td>VHF à ASN</td><td>Communications radio, alerte de détresse numérique</td><td>Radio en bande VHF marine, appel sélectif numérique sur le canal 70</td></tr>\n<tr><td>Pilote automatique</td><td>Tenir un cap ou une route</td><td>Calculateur, compas, capteur d'angle de barre, actionneur</td></tr>\n</tbody>\n</table>\n<p>Le principe du sondeur est une application directe de la relation distance = vitesse × temps : la vitesse du son dans l'eau de mer est d'environ 1 500 m/s. Un écho reçu 8 ms après l'émission correspond à un aller-retour de 1 500 × 0,008 = 12 m, donc une profondeur de 6 m sous la sonde. L'<strong>offset</strong> (décalage) paramétré dans le sondeur permet d'afficher la profondeur sous la quille ou sous la surface.</p>"
      },
      {
       "titre": "Réseaux de données : NMEA 0183 et NMEA 2000",
       "contenu": "<p>Les équipements échangent des données selon des normes publiées par la NMEA (association américaine des fabricants d'électronique marine).</p>\n<table>\n<thead><tr><th>Critère</th><th>NMEA 0183</th><th>NMEA 2000</th></tr></thead>\n<tbody>\n<tr><td>Architecture</td><td>Liaison série point à point : un émetteur (talker) vers un ou plusieurs récepteurs (listeners)</td><td>Réseau en bus : tous les appareils partagent le même câble</td></tr>\n<tr><td>Débit</td><td>4 800 bauds en standard, 38 400 bauds en version haute vitesse (AIS)</td><td>250 kbit/s, basé sur le bus CAN</td></tr>\n<tr><td>Format des données</td><td>Phrases texte, par exemple une phrase commençant par GPRMC pour la position</td><td>Messages binaires identifiés par un numéro (PGN)</td></tr>\n<tr><td>Câblage</td><td>Paires de fils à raccorder une par une</td><td>Câbles et connecteurs standardisés, alimentation par le bus</td></tr>\n</tbody>\n</table>\n<p>Un réseau NMEA 2000 comprend une <strong>dorsale</strong> (backbone) faite de câbles et de <strong>tés</strong>, deux <strong>résistances de terminaison</strong> de 120 Ω à chaque extrémité de la dorsale, une <strong>alimentation</strong> 12 V injectée par un câble spécifique, et des <strong>dérivations</strong> (drop cables) courtes vers chaque appareil. Les marques ont parfois leur propre version (connecteurs différents) compatible avec la norme au moyen d'adaptateurs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un réseau NMEA 2000 a exactement deux terminaisons, une à chaque bout de la dorsale. Hors tension, la résistance mesurée entre les deux fils de données vaut donc environ 60 Ω (deux résistances de 120 Ω en parallèle). Une mesure de 120 Ω signale une terminaison manquante ; 40 Ω, une terminaison en trop.</div>"
      },
      {
       "titre": "Installer un équipement électronique",
       "contenu": "<p>Une installation réussie se prépare : lecture de la notice d'installation, choix des emplacements avec le client, vérification de la compatibilité avec l'existant (protocoles, versions de logiciel), bilan électrique.</p>\n<ul>\n<li>Un <strong>compas</strong> électronique ou magnétique s'installe loin des masses métalliques, des haut-parleurs et des câbles parcourus par de forts courants, à la distance de sécurité indiquée par chaque fabricant.</li>\n<li>Une <strong>sonde</strong> de sondeur traversante se monte dans une zone où l'eau s'écoule sans turbulence, loin de l'hélice, avec un mastic d'étanchéité adapté et une cale de mise à niveau si la coque est inclinée. Les sondes intérieures (montées dans un puits rempli d'huile ou collées) évitent de percer la coque mais ne conviennent qu'à certaines constructions.</li>\n<li>Une <strong>antenne VHF</strong> se place le plus haut possible ; la portée dépend surtout de la hauteur des antennes. Le câble coaxial ne doit pas être écrasé ni coudé brutalement.</li>\n<li>Une <strong>antenne GPS</strong> doit avoir une vue dégagée du ciel et ne pas être placée dans le faisceau du radar.</li>\n<li>Un <strong>radar</strong> s'installe à une hauteur qui place le faisceau au-dessus des têtes de l'équipage, en respectant les distances de sécurité d'exposition indiquées par le fabricant.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> raccorder un nouvel afficheur multifonction sur un réseau NMEA 2000 existant.<br>1. Couper l'alimentation du réseau.<br>2. Repérer la dorsale et ses deux terminaisons ; insérer un té à l'emplacement le plus proche de l'afficheur, sans dépasser la longueur maximale de dérivation indiquée.<br>3. Raccorder l'afficheur par un câble de dérivation ; alimenter l'afficheur par son propre câble protégé si sa consommation l'exige.<br>4. Vérifier la résistance entre les fils de données : environ 60 Ω.<br>5. Remettre sous tension, vérifier dans le menu de l'afficheur la liste des appareils détectés, puis choisir les sources de données (position, cap, profondeur).<br>6. Mettre à jour les logiciels si le fabricant le recommande et noter les versions dans le rapport d'intervention.</div>"
      },
      {
       "titre": "Paramétrages et calibrations",
       "contenu": "<p>Une installation n'est terminée qu'après les réglages, souvent réalisés lors d'un essai en mer :</p>\n<ul>\n<li><strong>Loch</strong> : calibration de la vitesse surface par comparaison avec la vitesse fond GPS, en l'absence de courant ou par allers-retours sur une même base.</li>\n<li><strong>Compas</strong> : procédure d'autocalibration (cercles lents en eau calme) pour compenser les perturbations magnétiques du bord.</li>\n<li><strong>Sondeur</strong> : réglage de l'offset (profondeur de la sonde sous la flottaison ou distance à la quille).</li>\n<li><strong>Pilote automatique</strong> : réglage du capteur d'angle de barre, sens de l'actionneur, gain selon le bateau.</li>\n<li><strong>VHF ASN et AIS</strong> : saisie du <strong>MMSI</strong>, identifiant à neuf chiffres attribué au navire par l'administration (en France, à la suite de la licence radio). Il ne se modifie pas librement : une erreur de saisie peut nécessiter un retour chez le fabricant.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un récepteur GPS non relié à la VHF ASN n'envoie pas la position du bateau dans l'alerte de détresse. Lors de l'installation, on vérifie que la VHF reçoit bien la position et l'heure (affichées à l'écran).</div>"
      },
      {
       "titre": "Diagnostiquer un défaut de communication",
       "contenu": "<p>Un équipement qui « n'affiche rien » peut être en panne, mal alimenté, mal paramétré ou privé de données. La démarche suit l'ordre logique des couches : alimentation, câblage, réseau, paramétrage.</p>\n<table>\n<thead><tr><th>Contrôle</th><th>Comment</th><th>Résultat attendu</th></tr></thead>\n<tbody>\n<tr><td>Alimentation de l'appareil</td><td>Tension au connecteur, appareil en fonctionnement</td><td>Tension proche de la tension batterie, sans chute à la mise en marche</td></tr>\n<tr><td>Alimentation du bus NMEA 2000</td><td>Tension entre les fils d'alimentation du bus à l'appareil le plus éloigné</td><td>Dans la plage indiquée par la norme et le fabricant (souvent au-dessus de 9 V)</td></tr>\n<tr><td>Terminaisons</td><td>Résistance entre fils de données, hors tension</td><td>Environ 60 Ω</td></tr>\n<tr><td>Détection</td><td>Liste des appareils dans le menu réseau d'un afficheur</td><td>L'appareil apparaît avec sa version de logiciel</td></tr>\n<tr><td>Sources de données</td><td>Menu de sélection des sources</td><td>Une seule source choisie par donnée (deux GPS peuvent créer des conflits)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la majorité des pannes de réseau rencontrées en atelier tiennent à un connecteur mal vissé ou oxydé, à une terminaison oubliée après un ajout, ou à une dérivation trop longue. Le technicien garde dans sa caisse un câble de test, une terminaison et un té pour isoler rapidement le tronçon en cause.</div>"
      },
      {
       "titre": "Le pilote automatique",
       "contenu": "<p>Le <strong>pilote automatique</strong> est un système asservi : il compare en permanence le cap réel (fourni par le compas) au cap de consigne et commande un actionneur pour corriger l'écart. Il comprend un <strong>calculateur</strong>, un <strong>compas</strong> (souvent avec capteurs de mouvement), un <strong>capteur d'angle de barre</strong> qui renseigne la position du safran ou du moteur, une <strong>télécommande</strong> ou un afficheur, et un <strong>actionneur</strong> adapté à la direction :</p>\n<table>\n<thead><tr><th>Direction du bateau</th><th>Actionneur courant</th></tr></thead>\n<tbody>\n<tr><td>Barre franche (petit voilier)</td><td>Vérin électrique de barre franche</td></tr>\n<tr><td>Barre à roue à drosses</td><td>Moteur avec embrayage agissant sur le secteur ou la roue, ou vérin linéaire sur la mèche</td></tr>\n<tr><td>Direction hydraulique</td><td>Pompe hydraulique réversible raccordée au circuit de direction</td></tr>\n</tbody>\n</table>\n<p>L'actionneur se choisit selon le déplacement du bateau et la taille du safran, d'après les tableaux du fabricant. Il est fixé sur une structure capable de reprendre ses efforts et alimenté par un câble dimensionné pour son courant maximal, qui peut être élevé en mer formée. En mode route, le pilote suit une route du traceur ; il faut alors expliquer au client qu'il reste responsable de la veille.</p>"
      }
     ],
     "points_cles": [
      "Le sondeur mesure le temps d'aller-retour d'une impulsion ultrasonore ; le son va à environ 1 500 m/s dans l'eau de mer.",
      "Le loch donne la vitesse surface, le GPS la vitesse fond.",
      "NMEA 0183 est une liaison série point à point ; NMEA 2000 est un bus CAN à 250 kbit/s.",
      "Un réseau NMEA 2000 a une dorsale, deux terminaisons de 120 Ω et une alimentation unique.",
      "Résistance entre fils de données hors tension : environ 60 Ω.",
      "Compas loin des masses métalliques, antenne VHF le plus haut possible, GPS avec vue du ciel.",
      "Le MMSI s'enregistre dans la VHF ASN et l'AIS ; la VHF doit recevoir la position GPS.",
      "Un diagnostic réseau vérifie dans l'ordre : alimentation, câblage, terminaisons, détection, sources."
     ],
     "lexique": [
      {
       "terme": "GNSS",
       "def": "Système de positionnement par satellites, dont le GPS est l'exemple le plus connu."
      },
      {
       "terme": "Sondeur",
       "def": "Appareil qui mesure la profondeur par écho ultrasonore."
      },
      {
       "terme": "Loch",
       "def": "Capteur qui mesure la vitesse du bateau par rapport à l'eau."
      },
      {
       "terme": "AIS",
       "def": "Système d'identification automatique qui échange par VHF l'identité, la position et la route des navires."
      },
      {
       "terme": "ASN",
       "def": "Appel sélectif numérique : fonction d'une VHF qui envoie des appels et des alertes numériques."
      },
      {
       "terme": "MMSI",
       "def": "Identifiant numérique à neuf chiffres d'une station radio maritime."
      },
      {
       "terme": "Dorsale",
       "def": "Câble principal d'un réseau NMEA 2000 sur lequel se branchent les dérivations."
      },
      {
       "terme": "Terminaison",
       "def": "Résistance de 120 Ω placée à chaque extrémité de la dorsale."
      },
      {
       "terme": "PGN",
       "def": "Numéro qui identifie le type d'un message sur un réseau NMEA 2000."
      },
      {
       "terme": "Offset",
       "def": "Valeur de décalage paramétrée pour corriger l'affichage d'un capteur."
      }
     ]
    },
    {
     "id": "bmn-propulsion-electrique-hybride",
     "titre": "Propulsion électrique et hybride",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Décrire l'architecture d'une propulsion électrique et d'une propulsion hybride",
      "Expliquer le rôle du moteur électrique, du contrôleur et de la batterie de traction",
      "Calculer une autonomie et un temps de recharge",
      "Identifier les domaines de tension et les exigences d'habilitation",
      "Appliquer une démarche de mise en sécurité avant intervention"
     ],
     "sections": [
      {
       "titre": "Pourquoi la propulsion électrique se développe",
       "contenu": "<p>La propulsion électrique se développe dans le nautisme : annexes et petits bateaux de location, navettes portuaires, bateaux sur les plans d'eau où le thermique est limité ou interdit, voiliers qui remplacent leur moteur auxiliaire, vedettes hybrides. Ses atouts sont le silence, l'absence d'émissions locales, un entretien réduit et un couple disponible immédiatement. Sa limite principale est l'<strong>énergie embarquée</strong> : une batterie stocke beaucoup moins d'énergie par kilogramme que le carburant, ce qui limite l'autonomie à vitesse élevée.</p>\n<table>\n<thead><tr><th>Architecture</th><th>Principe</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Électrique pure</td><td>Batterie de traction, contrôleur, moteur électrique, hélice</td><td>Hors-bord électrique, pod électrique d'un voilier</td></tr>\n<tr><td>Hybride parallèle</td><td>Un moteur électrique est accouplé à la transmission d'un moteur thermique ; l'un, l'autre ou les deux propulsent</td><td>Vedette pouvant manœuvrer au port en électrique</td></tr>\n<tr><td>Hybride série</td><td>Un groupe électrogène recharge la batterie ; seul le moteur électrique entraîne l'hélice</td><td>Catamaran de croisière, navette</td></tr>\n</tbody>\n</table>\n<p>Certains voiliers utilisent aussi l'<strong>hydrogénération</strong> : en navigation à la voile, l'hélice entraînée par l'écoulement fait tourner le moteur électrique en générateur et recharge la batterie.</p>"
      },
      {
       "titre": "Les composants de la chaîne de traction",
       "contenu": "<p>La chaîne de traction électrique comprend :</p>\n<ul>\n<li>la <strong>batterie de traction</strong>, le plus souvent au lithium, avec son <strong>BMS</strong> ; elle est caractérisée par sa tension nominale (de 24 V à plusieurs centaines de volts) et son énergie en kWh ;</li>\n<li>le <strong>contrôleur</strong> (ou variateur), qui transforme le courant de la batterie pour piloter la vitesse et le couple du moteur ; pour un moteur synchrone à aimants, il produit un courant alternatif de fréquence variable ;</li>\n<li>le <strong>moteur électrique</strong>, souvent synchrone à aimants permanents (sans balais), à haut rendement ;</li>\n<li>la <strong>transmission</strong> : directe, par réducteur, ou dans un pod immergé ;</li>\n<li>le <strong>chargeur</strong>, alimenté par le quai, et éventuellement des panneaux solaires ou un groupe électrogène ;</li>\n<li>le <strong>système de refroidissement</strong> du moteur et du contrôleur, parfois par l'eau de mer à travers un échangeur ;</li>\n<li>l'<strong>interface pilote</strong> : manette, afficheur de l'état de charge, de l'autonomie et des alarmes.</li>\n</ul>\n<p>Le rendement global d'une chaîne électrique (batterie, contrôleur, moteur) est élevé, souvent supérieur à 80 %, alors qu'un moteur thermique transforme en travail une part bien plus faible de l'énergie de son carburant. Mais l'hélice et la coque fixent la puissance nécessaire : la physique de la carène reste la même.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la puissance d'un moteur électrique s'exprime en kW, l'énergie d'une batterie en kWh. Un moteur de 10 kW alimenté par une batterie de 20 kWh fonctionne environ 2 heures à pleine puissance, et beaucoup plus longtemps à puissance réduite.</div>"
      },
      {
       "titre": "Autonomie et recharge",
       "contenu": "<p>Comme pour un moteur thermique, la puissance absorbée par l'hélice augmente très vite avec la vitesse. Réduire légèrement la vitesse augmente fortement l'autonomie : c'est encore plus sensible en électrique, où la réserve d'énergie est limitée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer l'autonomie et le temps de recharge d'un bateau électrique.<br>Données : batterie 48 V, 300 Ah ; profondeur de décharge utilisable recommandée 80 % ; puissance absorbée 4 kW à 5 nœuds ; chargeur de quai 48 V, 50 A ; rendement de charge 0,9.<br>1. Énergie de la batterie : E = 48 × 300 = 14 400 Wh = 14,4 kWh.<br>2. Énergie utilisable : 14,4 × 0,8 = 11,52 kWh.<br>3. Durée de navigation : 11,52 / 4 = 2,88 h, soit environ 2 h 50 min.<br>4. Distance : 2,88 × 5 ≈ 14,4 milles.<br>5. Recharge de 80 % de la capacité : 0,8 × 300 = 240 Ah ; en tenant compte du rendement, 240 / 0,9 ≈ 267 Ah ; durée ≈ 267 / 50 ≈ 5,3 h. En pratique, la fin de charge est plus lente : prévoir davantage.</div>\n<p>L'afficheur d'autonomie d'un système électrique calcule en temps réel la durée restante à partir de l'état de charge et de la consommation instantanée. Le technicien explique au client que cette valeur change dès qu'il modifie la vitesse.</p>"
      },
      {
       "titre": "Domaines de tension et habilitation",
       "contenu": "<p>La réglementation française classe les installations selon leur tension. En courant continu, la <strong>très basse tension</strong> (TBT) va jusqu'à 120 V, la <strong>basse tension</strong> (BT) de 120 V à 1 500 V. En courant alternatif, la TBT va jusqu'à 50 V et la BT de 50 V à 1 000 V. Au-delà de certains seuils, le contact avec des parties actives est dangereux même en TBT dans un environnement humide.</p>\n<table>\n<thead><tr><th>Exemple</th><th>Tension</th><th>Domaine</th></tr></thead>\n<tbody>\n<tr><td>Réseau de bord classique</td><td>12 V ou 24 V continu</td><td>TBT</td></tr>\n<tr><td>Hors-bord électrique de faible puissance</td><td>24 V ou 48 V continu</td><td>TBT</td></tr>\n<tr><td>Propulsion électrique de forte puissance</td><td>Plusieurs centaines de volts continus</td><td>BT</td></tr>\n<tr><td>Courant de quai</td><td>230 V alternatif</td><td>BT</td></tr>\n</tbody>\n</table>\n<p>Travailler sur ces installations exige une <strong>habilitation électrique</strong> adaptée, délivrée par l'employeur à l'issue d'une formation conforme aux normes de la série NF C 18-5xx. Le symbole d'habilitation indique le domaine de tension et le type d'opérations autorisées (par exemple travaux hors tension, interventions, essais). Un élève ou un technicien non habilité ne réalise aucune opération sur les parties actives d'une chaîne de traction.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une batterie ne se « coupe » pas : même déconnectée du circuit, elle reste chargée et dangereuse à ses bornes. Un court-circuit sur une batterie lithium de forte capacité libère une énergie considérable et peut provoquer un incendie difficile à éteindre.</div>"
      },
      {
       "titre": "Mise en sécurité avant intervention",
       "contenu": "<p>Avant toute intervention sur une propulsion électrique de puissance, le technicien habilité applique la procédure de <strong>consignation</strong> du constructeur, qui suit en général ces étapes :</p>\n<ol>\n<li><strong>Identifier</strong> l'installation et les sources d'énergie (batterie de traction, chargeur, groupe, solaire).</li>\n<li><strong>Séparer</strong> : arrêter le système, débrancher le quai, ouvrir le sectionneur ou retirer le dispositif de coupure de service prévu.</li>\n<li><strong>Condamner</strong> en position ouverte (cadenas personnel) et signaler.</li>\n<li><strong>Attendre</strong> le temps de décharge des condensateurs du contrôleur indiqué par le constructeur.</li>\n<li><strong>Vérifier l'absence de tension</strong> (VAT) avec un appareil adapté, contrôlé avant et après la mesure.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les ateliers qui travaillent sur des propulsions électriques délimitent une zone d'intervention balisée, disposent d'outils isolés, de gants isolants contrôlés, d'un tapis isolant et d'un moyen d'extinction adapté. Le bateau électrique en charge au chantier est surveillé et éloigné des autres matériels inflammables.</div>\n<p>Les opérations courantes de maintenance d'une propulsion électrique sont toutefois moins nombreuses que sur un moteur thermique : contrôle des connexions et de leur serrage, contrôle de l'isolement, mise à jour des logiciels, entretien de l'embase ou du pod (huile, joints, anodes), contrôle de l'hélice et du circuit de refroidissement, contrôle de l'état de santé de la batterie.</p>"
      },
      {
       "titre": "Contrôle d'isolement et diagnostic",
       "contenu": "<p>Les systèmes de puissance sont souvent <strong>isolés</strong> de la masse du bateau : aucun pôle n'est relié à la masse. Un <strong>contrôleur permanent d'isolement</strong> surveille la résistance entre les pôles et la masse et déclenche une alarme si elle devient trop faible (par exemple à cause d'humidité dans un connecteur ou d'un câble blessé). La mesure se fait avec un <strong>mégohmmètre</strong> (appareil qui mesure des résistances très élevées sous une tension d'essai) par une personne habilitée, selon la méthode constructeur.</p>\n<p>Le diagnostic s'appuie, comme sur un moteur thermique moderne, sur les <strong>codes défauts</strong> lus à l'afficheur ou avec le logiciel du constructeur : surintensité, surchauffe du contrôleur, défaut de cellule signalé par le BMS, défaut de communication. La démarche reste la même : constater, émettre des hypothèses, contrôler, conclure.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un système électrique, la première chose à vérifier est souvent la plus simple : état de charge, sectionneur, coupe-circuit à cordon, connecteurs. La seconde est la température : un contrôleur qui chauffe limite sa puissance pour se protéger.</div>"
      }
     ],
     "points_cles": [
      "On distingue propulsion électrique pure, hybride parallèle et hybride série.",
      "La chaîne de traction associe batterie et BMS, contrôleur, moteur électrique, transmission et chargeur.",
      "Énergie de batterie (Wh) = tension (V) × capacité (Ah) ; durée = énergie utilisable / puissance.",
      "Réduire légèrement la vitesse augmente fortement l'autonomie.",
      "En continu, la TBT va jusqu'à 120 V et la BT de 120 à 1 500 V.",
      "Intervenir sur une chaîne de traction exige une habilitation électrique adaptée.",
      "Consignation : identifier, séparer, condamner, attendre la décharge, vérifier l'absence de tension.",
      "Une batterie reste dangereuse même déconnectée du circuit.",
      "Le contrôleur permanent d'isolement surveille la résistance entre pôles et masse."
     ],
     "lexique": [
      {
       "terme": "Batterie de traction",
       "def": "Batterie qui fournit l'énergie de la propulsion électrique."
      },
      {
       "terme": "Contrôleur",
       "def": "Électronique de puissance qui pilote la vitesse et le couple du moteur électrique."
      },
      {
       "terme": "Hybride série",
       "def": "Architecture où un groupe électrogène recharge la batterie et seul le moteur électrique propulse."
      },
      {
       "terme": "Hybride parallèle",
       "def": "Architecture où moteur thermique et moteur électrique peuvent entraîner la même transmission."
      },
      {
       "terme": "Hydrogénération",
       "def": "Production d'électricité par l'hélice entraînée par l'écoulement de l'eau en navigation à la voile."
      },
      {
       "terme": "Consignation",
       "def": "Procédure qui met une installation en sécurité et empêche sa remise sous tension pendant l'intervention."
      },
      {
       "terme": "VAT",
       "def": "Vérification d'absence de tension réalisée avec un appareil adapté."
      },
      {
       "terme": "Mégohmmètre",
       "def": "Appareil qui mesure une résistance d'isolement sous une tension d'essai."
      },
      {
       "terme": "Pod",
       "def": "Nacelle immergée qui contient le moteur électrique et porte l'hélice."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Coque, gréement, circuits de bord et réglementation",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmn-reparation-composites-carenage",
     "titre": "Réparation des composites, gelcoat et traitement de la coque",
     "niveau": "1re-Tle",
     "duree": 55,
     "objectifs": [
      "Évaluer un dommage sur un stratifié et choisir le type de réparation",
      "Préparer une zone à réparer : détourage, chanfrein, ponçage, dégraissage",
      "Réaliser une stratification de réparation en respectant les dosages et les conditions",
      "Réparer un gelcoat et rétablir l'aspect de surface",
      "Conduire un carénage complet et choisir un système de peinture de coque"
     ],
     "sections": [
      {
       "titre": "Évaluer le dommage",
       "contenu": "<p>Avant de réparer, il faut connaître l'étendue réelle du dommage, souvent plus grande que ce que montre la surface. On examine les deux faces quand c'est possible, on <strong>sonde au maillet</strong> autour de l'impact pour délimiter la zone délaminée, on mesure l'humidité si une entrée d'eau est possible, et on identifie la construction (monolithique ou sandwich, nature de l'âme, épaisseur).</p>\n<table>\n<thead><tr><th>Niveau de dommage</th><th>Description</th><th>Réparation</th></tr></thead>\n<tbody>\n<tr><td>Superficiel</td><td>Rayure, éclat, fissure limitée au gelcoat</td><td>Réparation de gelcoat</td></tr>\n<tr><td>Stratifié touché sans perte de structure</td><td>Fissures dans les premières couches, petit délaminage</td><td>Ouverture, élimination des parties endommagées, restratification locale</td></tr>\n<tr><td>Structurel</td><td>Trou, rupture du stratifié, âme écrasée ou humide, renfort décollé</td><td>Réparation structurelle selon la méthode constructeur ou d'un bureau d'études, souvent à l'époxy et avec des tissus multiaxiaux</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour un sinistre pris en charge par une assurance, un expert maritime examine le bateau avant les travaux. Le chantier établit un devis détaillé, conserve des photos avant, pendant et après la réparation, et ne commence qu'après accord. La qualité de ces photos et du rapport conditionne le règlement.</div>"
      },
      {
       "titre": "Préparer la zone à réparer",
       "contenu": "<p>La réussite d'une réparation dépend surtout de la <strong>préparation</strong> : la nouvelle résine doit adhérer à un support sain, sec, propre et rugueux.</p>\n<ol>\n<li><strong>Éliminer</strong> tout ce qui est endommagé : stratifié fissuré, délaminé, âme humide ou pourrie, jusqu'à retrouver un matériau sain.</li>\n<li><strong>Chanfreiner</strong> les bords en pente douce, pour que les couches de réparation se recouvrent progressivement et transmettent les efforts. La règle usuelle est une pente de l'ordre de 1 pour 12 (12 mm de chanfrein par millimètre d'épaisseur) ; certaines méthodes demandent davantage.</li>\n<li><strong>Sécher</strong> si nécessaire, en contrôlant à l'humidimètre.</li>\n<li><strong>Poncer</strong> au grain prescrit pour créer une accroche mécanique.</li>\n<li><strong>Dépoussiérer</strong> et <strong>dégraisser</strong> avec le solvant préconisé, sur chiffon propre, sans recontaminer la surface.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la largeur d'un chanfrein et préparer le découpage des tissus.<br>Données : stratifié de 6 mm d'épaisseur, trou de 40 mm de diamètre, pente 1 pour 12.<br>1. Longueur du chanfrein : 6 × 12 = 72 mm de chaque côté du trou.<br>2. Diamètre de la zone chanfreinée : 40 + 2 × 72 = 184 mm.<br>3. Les tissus sont découpés en disques de tailles croissantes ou décroissantes, de 40 mm jusqu'à environ 184 mm, en assez grand nombre pour reconstituer l'épaisseur d'origine (selon le grammage et l'épaisseur obtenue par couche).<br>4. On termine par une ou deux couches qui débordent légèrement de la zone chanfreinée.</div>"
      },
      {
       "titre": "Stratifier une réparation",
       "contenu": "<p>La stratification de réparation se fait le plus souvent au <strong>contact</strong> (imprégnation au pinceau et au rouleau débulleur) et, pour les réparations soignées, sous <strong>vide</strong> (un film étanche plaqué par aspiration presse les couches et retire l'excès de résine).</p>\n<ul>\n<li>Respecter strictement le <strong>rapport de mélange</strong> de la résine (en masse ou en volume selon la fiche technique) et mélanger longuement en raclant les bords du pot.</li>\n<li>Respecter la <strong>durée de vie en pot</strong> (pot life) : au-delà, le mélange commence à durcir et ne s'imprègne plus correctement. Une grande quantité dans un pot chauffe et durcit plus vite qu'en couche mince.</li>\n<li>Travailler dans la plage de <strong>température</strong> et d'<strong>hygrométrie</strong> indiquée par le fabricant ; en dessous, la polymérisation est incomplète.</li>\n<li>Imprégner les tissus sans excès, chasser les bulles au rouleau débulleur ; une bulle est un point faible.</li>\n<li>Pour l'époxy, éliminer avant ponçage le film gras (appelé blush ou exsudat d'amine) qui peut se former en surface, par lavage à l'eau.</li>\n</ul>\n<table>\n<thead><tr><th>Défaut constaté</th><th>Cause probable</th></tr></thead>\n<tbody>\n<tr><td>Résine restée collante après le délai</td><td>Erreur de dosage, mélange insuffisant, température trop basse</td></tr>\n<tr><td>Zones blanches dans le stratifié</td><td>Tissu mal imprégné (sec)</td></tr>\n<tr><td>Cloques ou bulles</td><td>Débullage insuffisant, support humide</td></tr>\n<tr><td>Décollement de la réparation</td><td>Support mal préparé, contaminé ou trop lisse ; polyester sur époxy</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ajouter du durcisseur à une résine époxy pour « accélérer » ne fonctionne pas : le rapport est stœchiométrique, tout écart donne une résine mal polymérisée, molle ou cassante. Pour durcir plus vite, on choisit un durcisseur rapide ou on chauffe la zone, selon la fiche technique.</div>"
      },
      {
       "titre": "Réparer le gelcoat",
       "contenu": "<p>Le gelcoat de réparation est une résine pigmentée, souvent présentée avec un additif (paraffine) qui permet le durcissement à l'air libre ; sinon, la surface reste collante et il faut la couvrir d'un film. La teinte d'un bateau ancien a jauni : on ajuste la couleur par petites touches de pâtes colorantes, en comparant sur un échantillon durci.</p>\n<ol>\n<li>Ouvrir l'éclat ou la fissure en V avec une fraise pour éliminer les parties fragiles et donner une accroche.</li>\n<li>Dégraisser, puis appliquer le gelcoat catalysé en léger excès.</li>\n<li>Après durcissement, poncer à l'eau en grains de plus en plus fins (par exemple de P400 à P1500 ou au-delà), en restant sur la zone.</li>\n<li>Lustrer avec une polish de plus en plus fine à la polisseuse, puis protéger.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une fissure en étoile dans le gelcoat est souvent le signe d'un choc ou d'une flexion du stratifié. Reboucher le gelcoat sans traiter la cause (renfort manquant, délaminage) fait réapparaître la fissure.</div>"
      },
      {
       "titre": "Le carénage et les peintures de coque",
       "contenu": "<p>Le <strong>carénage</strong> est l'entretien des œuvres vives : nettoyage, contrôle et remise en peinture. Il se fait en général une fois par an pour un bateau qui reste à flot. Les organismes marins (algues, balanes, moules) qui colonisent la coque forment des <strong>salissures</strong> qui freinent le bateau et augmentent la consommation.</p>\n<ol>\n<li>Sortie de l'eau et <strong>lavage haute pression</strong> sur l'aire de carénage, dès la sortie, avant que les salissures ne sèchent.</li>\n<li>Contrôle : anodes, passe-coques et vannes, hélice, arbre et paliers, safran et jeu de mèche, état du gelcoat ou de la peinture, cloques.</li>\n<li>Ponçage léger de l'ancien antifouling pour égrener et accrocher, avec aspiration et EPI.</li>\n<li>Retouches de primaire sur les zones mises à nu.</li>\n<li>Application de l'<strong>antifouling</strong> en respectant le nombre de couches, les temps de recouvrement et le délai avant remise à l'eau indiqués par le fabricant.</li>\n</ol>\n<table>\n<thead><tr><th>Type d'antifouling</th><th>Principe</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Matrice dure</td><td>Les biocides migrent d'un film qui reste en place</td><td>Bateaux rapides, coques qui sortent souvent</td></tr>\n<tr><td>Érodable (autopolissant)</td><td>Le film s'use lentement en navigation et renouvelle la surface active</td><td>Usage général, pas d'accumulation des couches</td></tr>\n<tr><td>Sans biocide (silicone, revêtements anti-adhérents)</td><td>Les organismes adhèrent mal et se détachent en navigation ou au nettoyage</td><td>Bateaux rapides, zones sensibles</td></tr>\n</tbody>\n</table>\n<p>Les antifoulings sont des <strong>produits biocides</strong> soumis à une réglementation européenne : seuls des produits autorisés peuvent être vendus et utilisés. Les antifoulings à base de cuivre sont incompatibles avec les coques et les embases en aluminium, sauf produits spécifiquement prévus par leur fabricant.</p>"
      },
      {
       "titre": "Traiter l'osmose et protéger une coque neuve",
       "contenu": "<p>Le traitement curatif de l'osmose suit une séquence longue : enlèvement du gelcoat (pelage mécanique ou sablage), ouverture des cloques, lavage à l'eau douce haute pression pour éliminer les acides, <strong>séchage</strong> contrôlé régulièrement à l'humidimètre (parfois plusieurs mois, éventuellement accéléré par des tapis chauffants ou une tente de séchage), puis reconstitution d'une <strong>barrière époxy</strong> de plusieurs couches avec enduit de lissage, et enfin antifouling.</p>\n<p>En prévention, certains propriétaires font appliquer un <strong>traitement préventif</strong> (barrière époxy sur gelcoat sain, préparé par ponçage) sur un bateau neuf ou peu âgé. Le technicien suit alors le système complet d'un même fabricant, car les produits sont prévus pour fonctionner ensemble.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer la quantité de peinture pour un carénage.<br>Données : surface des œuvres vives d'environ 28 m² ; antifouling au rendement pratique de 8 m² par litre et par couche ; 2 couches, plus une couche supplémentaire sur 20 % de la surface (flottaison, bords d'attaque).<br>1. Surface totale peinte : 28 × 2 + 28 × 0,2 = 61,6 m².<br>2. Volume : 61,6 / 8 = 7,7 L.<br>3. Conditionnement en pots de 2,5 L : 7,7 / 2,5 = 3,08, soit 4 pots, ou 3 pots de 2,5 L et 1 pot de 0,75 L selon disponibilité.</div>"
      }
     ],
     "points_cles": [
      "Délimiter le dommage au maillet et à l'humidimètre avant de chiffrer la réparation.",
      "Éliminer tout matériau endommagé, chanfreiner (de l'ordre de 1 pour 12), sécher, poncer, dégraisser.",
      "Respecter rapport de mélange, durée de vie en pot, température et hygrométrie de la fiche technique.",
      "Le rapport d'une époxy ne se modifie jamais pour accélérer le durcissement.",
      "Le gelcoat se répare en V, puis se ponce à l'eau et se lustre ; il faut traiter la cause d'une fissure.",
      "Le carénage comprend lavage, contrôles des œuvres vives et application d'antifouling sur aire équipée.",
      "Les antifoulings sont des biocides réglementés ; le cuivre est incompatible avec l'aluminium.",
      "Le traitement de l'osmose exige un séchage contrôlé avant la barrière époxy."
     ],
     "lexique": [
      {
       "terme": "Chanfrein",
       "def": "Bord taillé en pente douce autour d'une zone à réparer."
      },
      {
       "terme": "Stratification au contact",
       "def": "Mise en œuvre manuelle de tissus imprégnés au pinceau et au rouleau."
      },
      {
       "terme": "Stratification sous vide",
       "def": "Méthode où un film étanche plaque les couches par aspiration pendant le durcissement."
      },
      {
       "terme": "Durée de vie en pot",
       "def": "Temps pendant lequel une résine mélangée reste utilisable."
      },
      {
       "terme": "Rouleau débulleur",
       "def": "Rouleau rainuré qui chasse l'air d'un stratifié frais."
      },
      {
       "terme": "Carénage",
       "def": "Entretien des œuvres vives : nettoyage, contrôles et peinture."
      },
      {
       "terme": "Antifouling",
       "def": "Peinture ou revêtement qui limite la fixation des organismes marins sur la coque."
      },
      {
       "terme": "Barrière époxy",
       "def": "Ensemble de couches époxy qui limitent la pénétration de l'eau dans le stratifié."
      },
      {
       "terme": "Salissures",
       "def": "Organismes marins fixés sur la coque, appelés aussi fouling."
      }
     ]
    },
    {
     "id": "bmn-greement-accastillage",
     "titre": "Gréement, voiles et accastillage",
     "niveau": "1re",
     "duree": 50,
     "objectifs": [
      "Nommer les éléments du gréement dormant et du gréement courant",
      "Décrire les efforts supportés par le mât et le gréement",
      "Contrôler un gréement et repérer les signes d'usure ou de rupture imminente",
      "Régler un gréement dormant selon une méthode de base",
      "Entretenir et installer l'accastillage de pont"
     ],
     "sections": [
      {
       "titre": "Le gréement d'un voilier",
       "contenu": "<p>Le <strong>gréement</strong> est l'ensemble des éléments qui portent et manœuvrent les voiles. On distingue :</p>\n<ul>\n<li>l'<strong>espar</strong> principal, le <strong>mât</strong>, souvent en aluminium (parfois en carbone ou en bois), et la <strong>bôme</strong>, espar horizontal qui tient le bas de la grand-voile ;</li>\n<li>le <strong>gréement dormant</strong>, fixe, qui tient le mât : <strong>étai</strong> vers l'avant, <strong>pataras</strong> vers l'arrière, <strong>haubans</strong> et <strong>bas-haubans</strong> sur les côtés, écartés par des <strong>barres de flèche</strong> ;</li>\n<li>le <strong>gréement courant</strong>, mobile, qui manœuvre les voiles : <strong>drisses</strong> pour hisser, <strong>écoutes</strong> pour border, bosses de ris, hale-bas, etc.</li>\n</ul>\n<p>Le mât repose sur l'<strong>emplanture</strong>, soit sur le pont (mât posé, avec une épontille ou une cloison qui transmet l'effort à la quille), soit sur la quille (mât traversant). Les haubans sont reliés à la coque par les <strong>cadènes</strong>, pièces métalliques boulonnées sur une structure renforcée, et réglés par des <strong>ridoirs</strong> (manchon à deux filetages inversés).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le mât travaille en compression : le gréement dormant le maintient comme les haubans d'une antenne. La rupture d'un seul hauban au vent peut suffire à faire tomber le mât.</div>"
      },
      {
       "titre": "Matériaux du gréement et terminaisons",
       "contenu": "<table>\n<thead><tr><th>Élément</th><th>Matériau courant</th><th>Remarques</th></tr></thead>\n<tbody>\n<tr><td>Haubans, étai</td><td>Câble inox 1 × 19 (19 fils torsadés)</td><td>Peu d'allongement, rigide ; aussi en tige monotoron (rod) ou en fibre synthétique sur les bateaux performants</td></tr>\n<tr><td>Drisses, écoutes</td><td>Cordages en polyester tressé, ou en fibres à haut module (polyéthylène haute performance, aramide)</td><td>Choix selon allongement admis, résistance et prise en main</td></tr>\n<tr><td>Terminaisons de câble</td><td>Embouts sertis à la presse (sertissage par roulage ou par martelage), embouts mécaniques démontables</td><td>Le sertissage exige une machine et un contrôle dimensionnel</td></tr>\n<tr><td>Manilles, ridoirs, axes</td><td>Inox, bronze</td><td>Axes bloqués par goupilles fendues ou anneaux brisés</td></tr>\n</tbody>\n</table>\n<p>La <strong>charge de rupture</strong> d'un câble dépend de son diamètre et de sa construction ; elle est donnée par le fabricant en daN ou en kN. Une terminaison, une manille ou un ridoir doit avoir une résistance au moins égale à celle du câble. Le <strong>coefficient de sécurité</strong> choisi par l'architecte tient compte des chocs et de la fatigue.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'inox casse souvent sans prévenir, par fatigue ou par corrosion cachée dans l'embout. Un seul fil cassé sur un câble 1 × 19, une fissure sur un embout serti ou une trace de rouille qui coule de l'embout imposent le remplacement du hauban.</div>"
      },
      {
       "titre": "Contrôler un gréement",
       "contenu": "<p>Le contrôle du gréement se fait mât posé (au chantier) ou mât en place, en montant en tête de mât avec un harnais sur une drisse de sécurité, en appliquant la procédure de l'entreprise. Il est systématique avant une navigation hauturière, après un incident et lors de l'achat d'un bateau d'occasion.</p>\n<table>\n<thead><tr><th>Zone</th><th>Points à contrôler</th></tr></thead>\n<tbody>\n<tr><td>Tête de mât</td><td>Réas (poulies intégrées), axes, fixations des étais et haubans, feux et antennes, girouette</td></tr>\n<tr><td>Barres de flèche</td><td>Fixation sur le mât, angle, protection des extrémités, blocage du câble</td></tr>\n<tr><td>Câbles et embouts</td><td>Fils cassés, coques, rouille, fissures des embouts, déformation</td></tr>\n<tr><td>Ridoirs, cadènes</td><td>Filetage, goupillage, alignement avec le hauban, fissures, infiltration d'eau autour des cadènes</td></tr>\n<tr><td>Pied de mât, emplanture</td><td>Corrosion de l'aluminium au contact de l'inox, état de l'épontille ou de la cloison, enfoncement du pont</td></tr>\n<tr><td>Enrouleur de génois</td><td>Rotation libre, état du tambour, fixation sur l'étai</td></tr>\n</tbody>\n</table>\n<p>Beaucoup d'assureurs et de professionnels recommandent un remplacement du gréement dormant au bout d'une durée de l'ordre d'une dizaine d'années ou après un grand nombre de milles, même sans défaut visible ; les conditions des contrats varient et doivent être vérifiées.</p>"
      },
      {
       "titre": "Régler un gréement dormant",
       "contenu": "<p>Le réglage assure que le mât est droit latéralement, présente la quête (inclinaison vers l'arrière) et le cintrage prévus, et que les haubans ont une <strong>tension</strong> suffisante pour que le mât ne se déplace pas sous voile.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réglage de base au port d'un gréement en tête à barres de flèche poussantes.<br>1. Détendre légèrement tous les ridoirs pour libérer le mât.<br>2. Régler la quête avec l'étai et le pataras selon la valeur indiquée par l'architecte ou le maître voilier.<br>3. Centrer le mât latéralement : hisser une drisse et mesurer la distance jusqu'aux cadènes de bâbord et de tribord ; elles doivent être égales. Tendre les haubans à égalité des deux bords.<br>4. Tendre les bas-haubans pour que le mât soit rectiligne latéralement, en visant le long de la gorge.<br>5. Mesurer la tension avec un tensiomètre et l'ajuster à la valeur prescrite, souvent exprimée en pourcentage de la charge de rupture du câble.<br>6. Goupiller ou bloquer tous les ridoirs, protéger les goupilles.<br>7. Vérifier en navigation, par vent moyen : le hauban sous le vent ne doit pas être complètement mou.</div>\n<p>Un ridoir se règle en tournant le corps, en tenant le câble pour qu'il ne vrille pas. Le filetage doit être graissé avec un produit adapté pour éviter le grippage de l'inox (phénomène où les filets se soudent à froid).</p>"
      },
      {
       "titre": "Voiles et enrouleurs",
       "contenu": "<p>Les voiles modernes sont en tissu polyester (dacron) pour la croisière, ou en laminés et membranes à base de fibres à haut module pour les bateaux performants. Leurs ennemis sont les UV, le faseyement prolongé (battement) et le frottement. Une voile d'avant sur enrouleur porte une <strong>bande anti-UV</strong> sur le bord qui reste exposé une fois enroulée.</p>\n<p>Le technicien de maintenance nautique ne réalise pas les réparations de voilerie, réservées au maître voilier, mais il contrôle et entretient les systèmes : enrouleurs de génois et de grand-voile, rails et chariots, lattes et leurs fixations, systèmes de prise de ris. Il sait aussi déposer et reposer une voile et repérer un dommage à signaler.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors de l'hivernage d'un voilier, l'atelier propose souvent la dépose des voiles, leur rinçage à l'eau douce, leur contrôle par un voilier partenaire et leur stockage au sec. Les drisses sont remplacées par des messagers (fines cordelettes) pour éviter leur usure par le soleil et le vent.</div>"
      },
      {
       "titre": "L'accastillage de pont",
       "contenu": "<p>L'<strong>accastillage</strong> regroupe les équipements de pont qui servent à manœuvrer et à amarrer : winchs, bloqueurs, poulies, rails d'écoute, taquets, chandeliers et filières, balcons, guindeau, davier.</p>\n<ul>\n<li>Un <strong>winch</strong> multiplie l'effort exercé sur la manivelle. Son entretien consiste à le démonter, nettoyer les engrenages et les cliquets (linguets), remplacer les ressorts usés, graisser légèrement avec la graisse prévue et huiler les cliquets. Un linguet mal remonté peut laisser le tambour tourner à l'envers sous charge.</li>\n<li>Un <strong>guindeau</strong> électrique remonte le mouillage. Il est alimenté par un câble de forte section, protégé par un disjoncteur ou un fusible adapté, et commandé par un relais ou un inverseur. Le barbotin doit correspondre au diamètre et au type de la chaîne.</li>\n<li>Les pièces d'accastillage soumises à de forts efforts sont fixées avec des <strong>contre-plaques</strong> (plaques de répartition) sous le pont, et étanchées avec un mastic adapté.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la plupart des infiltrations d'eau dans un pont sandwich viennent d'une pièce d'accastillage mal étanchée. Avant de reposer une pièce, on applique la méthode de perçage protégé de l'âme et on remplace le mastic, sans resserrer par-dessus un joint ancien.</div>"
      },
      {
       "titre": "Mâter et démâter en sécurité",
       "contenu": "<p>Le <strong>démâtage</strong> (dépose du mât) et le <strong>mâtage</strong> (repose) se font à la grue, bateau à quai ou au sec. Ce sont des opérations de levage à part entière, réalisées par une équipe coordonnée par un responsable.</p>\n<ol>\n<li>Préparer : déposer les voiles et la bôme, repérer et débrancher les câbles électriques au pied du mât (feux, antennes, instruments), repérer les réglages des ridoirs (nombre de tours ou marquage) pour les retrouver au remâtage.</li>\n<li>Élinguer le mât sous les barres de flèche, au-dessus de son centre de gravité, avec une sangle qui ne peut pas glisser, et prévoir un bout de retenue au pied.</li>\n<li>Mettre en légère tension à la grue, puis libérer l'étai, les haubans et le pataras dans l'ordre prévu.</li>\n<li>Lever lentement, guider le pied à la main sans jamais se placer sous le mât, poser sur des tréteaux protégés.</li>\n</ol>\n<p>Au remâtage, on contrôle l'état des connecteurs électriques et on étanche le passage des câbles dans le pont ; on règle ensuite le gréement et on vérifie le fonctionnement de tous les feux et instruments avant la restitution.</p>"
      }
     ],
     "points_cles": [
      "Le gréement dormant (étai, pataras, haubans) tient le mât ; le gréement courant manœuvre les voiles.",
      "Les haubans sont reliés aux cadènes par des ridoirs, à goupiller après réglage.",
      "Fil cassé, embout fissuré ou rouille qui coule de l'embout imposent le remplacement du câble.",
      "Une terminaison ou une manille doit résister au moins autant que le câble.",
      "Le mât doit être centré, droit latéralement et réglé à la tension prescrite au tensiomètre.",
      "Les filetages inox se graissent pour éviter le grippage.",
      "Un winch s'entretient par démontage, nettoyage, graissage léger et huilage des linguets.",
      "L'accastillage chargé se fixe avec contre-plaques et s'étanche avec soin."
     ],
     "lexique": [
      {
       "terme": "Gréement dormant",
       "def": "Ensemble des câbles fixes qui maintiennent le mât."
      },
      {
       "terme": "Gréement courant",
       "def": "Ensemble des cordages mobiles qui manœuvrent les voiles."
      },
      {
       "terme": "Hauban",
       "def": "Câble qui tient latéralement le mât."
      },
      {
       "terme": "Étai",
       "def": "Câble qui tient le mât vers l'avant."
      },
      {
       "terme": "Cadène",
       "def": "Pièce fixée à la structure de la coque où s'attache un hauban."
      },
      {
       "terme": "Ridoir",
       "def": "Manchon à filetages inversés qui règle la tension d'un hauban."
      },
      {
       "terme": "Barre de flèche",
       "def": "Espar transversal qui écarte les haubans du mât."
      },
      {
       "terme": "Winch",
       "def": "Treuil manuel ou électrique qui démultiplie l'effort sur un cordage."
      },
      {
       "terme": "Guindeau",
       "def": "Treuil de mouillage qui remonte la chaîne et l'ancre."
      },
      {
       "terme": "Grippage",
       "def": "Soudure à froid de deux filetages inox qui bloque l'assemblage."
      }
     ]
    },
    {
     "id": "bmn-circuits-bord-direction",
     "titre": "Circuits de bord et systèmes de direction",
     "niveau": "Tle",
     "duree": 55,
     "objectifs": [
      "Décrire les circuits d'eau douce, d'eaux usées et d'assèchement d'un bateau",
      "Appliquer les règles de sécurité d'une installation de gaz à bord",
      "Expliquer le fonctionnement des directions mécaniques et hydrauliques",
      "Réaliser une purge de direction hydraulique et un contrôle de jeu",
      "Installer et contrôler les passe-coques et vannes"
     ],
     "sections": [
      {
       "titre": "Passe-coques et vannes",
       "contenu": "<p>Tout circuit qui prend ou rejette de l'eau à la mer traverse la coque par un <strong>passe-coque</strong>, généralement muni d'une <strong>vanne</strong> (quart de tour le plus souvent). Sous la flottaison ou près d'elle, ce sont des points critiques : la rupture d'un passe-coque ou d'un tuyau suffit à couler un bateau.</p>\n<ul>\n<li>Les matériaux doivent résister à la corrosion : bronze de qualité marine, composites techniques prévus pour cet usage. Le laiton ordinaire, qui contient beaucoup de zinc, peut subir une <strong>dézincification</strong> : il devient rose et friable et casse sans prévenir.</li>\n<li>On n'associe pas des métaux différents sans précaution (vanne en bronze sur passe-coque en inox, par exemple).</li>\n<li>Les tuyaux raccordés sous la flottaison sont fixés par <strong>deux colliers</strong> inox, vis opposées.</li>\n<li>Chaque vanne doit être accessible et manœuvrable ; on la manœuvre régulièrement pour éviter le grippage.</li>\n<li>Une <strong>pinoche</strong> (cône de bois tendre) de la bonne taille est attachée près de chaque passe-coque pour boucher une voie d'eau en urgence.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> remplacer un passe-coque, bateau au sec.<br>1. Déposer le tuyau et la vanne, desserrer l'écrou intérieur et chasser l'ancien passe-coque.<br>2. Nettoyer la portée, contrôler l'état du stratifié autour du trou ; s'il s'agit d'un sandwich, protéger l'âme comme pour tout perçage.<br>3. Prévoir une contre-plaque intérieure si la construction l'exige.<br>4. Poser le passe-coque neuf avec un mastic d'étanchéité adapté sur la collerette, serrer l'écrou sans écraser complètement le mastic, puis terminer le serrage après la prise si le fabricant le préconise.<br>5. Remonter une vanne compatible (même filetage, mêmes matériaux), le tuyau avec deux colliers.<br>6. Contrôler l'étanchéité à la remise à l'eau et noter l'intervention.</div>"
      },
      {
       "titre": "Assèchement : pompes de cale",
       "contenu": "<p>Les eaux qui pénètrent dans la coque (pluie, embruns, fuite de presse-étoupe) s'accumulent dans les fonds. L'<strong>assèchement</strong> est assuré par des pompes de cale manuelles et électriques. Les exigences d'équipement dépendent de la catégorie de conception du bateau et des normes applicables.</p>\n<ul>\n<li>La <strong>pompe électrique immergée</strong> (centrifuge) est commandée par un <strong>contacteur à flotteur</strong> ou un capteur électronique qui la déclenche automatiquement, et par un interrupteur manuel au tableau. Elle est souvent alimentée directement par la batterie, avant le coupe-batterie, pour fonctionner bateau inoccupé ; elle reste protégée par son propre fusible.</li>\n<li>La <strong>pompe manuelle</strong> à membrane, manœuvrable depuis le cockpit, assure le secours en cas de panne électrique.</li>\n<li>Le tuyau de refoulement forme une boucle au-dessus de la flottaison ou comporte un clapet pour éviter le retour de l'eau de mer.</li>\n<li>Une <strong>crépine</strong> protège l'aspiration contre les débris.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un client signale que sa pompe de cale se déclenche souvent au port. Avant de changer le contacteur, le technicien cherche d'où vient l'eau : goûter (eau douce ou salée ?), contrôler le presse-étoupe, les passe-coques, le réservoir d'eau douce, les hublots. Une pompe qui se déclenche souvent est un symptôme, pas une panne.</div>"
      },
      {
       "titre": "Eau douce et eaux usées",
       "contenu": "<p>Le circuit d'<strong>eau douce</strong> comprend un ou plusieurs réservoirs avec nable de remplissage et évent, un <strong>groupe d'eau</strong> (pompe électrique à membrane avec pressostat qui démarre quand on ouvre un robinet), un <strong>vase d'expansion</strong> qui évite les démarrages trop fréquents, un <strong>chauffe-eau</strong> chauffé par le circuit de refroidissement du moteur et par une résistance 230 V, et les tuyauteries vers les robinets et la douche.</p>\n<p>Les <strong>eaux grises</strong> (évier, lavabo, douche) et les <strong>eaux noires</strong> (toilettes) sont soit rejetées à la mer selon la réglementation, soit stockées dans un <strong>réservoir à eaux noires</strong> vidé à une station de pompage portuaire. Des règles fixent les conditions de rejet en fonction de la distance à la côte et des zones (ports, zones de mouillage, zones protégées) : le technicien doit connaître celles qui s'appliquent et conseiller le client.</p>\n<table>\n<thead><tr><th>Élément</th><th>Panne fréquente</th><th>Contrôle ou action</th></tr></thead>\n<tbody>\n<tr><td>Groupe d'eau</td><td>Démarre seul toutes les quelques minutes</td><td>Rechercher une fuite sur le circuit ou un clapet de pompe défaillant</td></tr>\n<tr><td>Groupe d'eau</td><td>Tourne sans débiter</td><td>Réservoir vide, prise d'air à l'aspiration, filtre bouché</td></tr>\n<tr><td>Toilettes marines manuelles</td><td>Remplissage de la cuvette par siphonnage</td><td>Contrôler la boucle anti-siphon et son clapet</td></tr>\n<tr><td>Réservoir à eaux noires</td><td>Odeurs</td><td>Évent bouché ou filtre d'évent saturé, tuyaux poreux</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "L'installation de gaz",
       "contenu": "<p>Le gaz (butane ou propane) alimente la cuisinière et parfois un chauffe-eau. Les installations sont encadrées par une norme internationale (ISO 10239 pour les installations de gaz de pétrole liquéfié des petits navires). Le gaz étant plus lourd que l'air, toute fuite descend dans les fonds : c'est un risque d'explosion majeur.</p>\n<ul>\n<li>Les bouteilles sont stockées dans un <strong>coffre étanche vers l'intérieur du bateau</strong>, avec une évacuation par le bas vers l'extérieur, au-dessus de la flottaison.</li>\n<li>Un <strong>détendeur</strong> abaisse la pression de la bouteille à la pression d'utilisation de l'appareil.</li>\n<li>Les tuyauteries fixes sont en cuivre ou en tube adapté ; les <strong>flexibles</strong> sont aussi courts que possible, conformes, et remplacés avant leur date limite d'utilisation gravée.</li>\n<li>Une <strong>vanne</strong> d'arrêt ou une électrovanne commandée depuis la cuisine permet de couper le gaz à la sortie de la bouteille.</li>\n<li>Chaque brûleur est équipé d'un <strong>thermocouple</strong> qui coupe le gaz si la flamme s'éteint.</li>\n<li>Un <strong>détecteur de gaz</strong> placé bas dans les fonds peut commander la fermeture de l'électrovanne.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une fuite de gaz ne se recherche jamais à la flamme. On utilise un produit moussant de détection de fuite sur les raccords, ou un contrôle d'étanchéité par manomètre : on ouvre la bouteille pour mettre le circuit en pression, on la referme, et la pression ne doit pas baisser pendant la durée de contrôle préconisée.</div>"
      },
      {
       "titre": "Les systèmes de direction",
       "contenu": "<p>La direction transmet l'action du barreur au <strong>safran</strong> (gouvernail) ou à l'organe de propulsion orientable (hors-bord, embase).</p>\n<table>\n<thead><tr><th>Type</th><th>Principe</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Barre franche</td><td>Levier fixé directement sur la mèche du safran</td><td>Petits voiliers</td></tr>\n<tr><td>Barre à roue à drosses</td><td>Câbles et poulies entre la roue et un secteur fixé sur la mèche</td><td>Voiliers moyens et grands</td></tr>\n<tr><td>Direction mécanique à câble</td><td>Câble push-pull (rotatif ou à crémaillère) qui pousse et tire le moteur</td><td>Petits bateaux à moteur, hors-bord jusqu'à une certaine puissance</td></tr>\n<tr><td>Direction hydraulique</td><td>Pompe actionnée par la roue, tuyaux, vérin sur le moteur ou le secteur</td><td>Bateaux à moteur puissants, bimoteurs, vedettes</td></tr>\n<tr><td>Direction électronique</td><td>Commande électrique de vérins ou d'actionneurs</td><td>Moteurs récents de forte puissance, systèmes de manœuvre par joystick</td></tr>\n</tbody>\n</table>\n<p>Le <strong>safran</strong> tourne autour de sa <strong>mèche</strong>, guidée par des <strong>paliers</strong> ; leur usure crée un jeu qui fait cogner le safran. Les directions à câble se contrôlent sur toute leur course : un câble dur, qui accroche ou qui présente de la corrosion sous sa gaine doit être remplacé, car il peut se bloquer.</p>"
      },
      {
       "titre": "Purger et contrôler une direction hydraulique",
       "contenu": "<p>Une direction hydraulique fonctionne avec une huile spécifique. La présence d'air rend la direction spongieuse : le volant fait plusieurs tours sans effet ou la direction « revient ». Il faut alors <strong>purger</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> purger une direction hydraulique de hors-bord (principe général, la notice du fabricant prime).<br>1. Identifier l'huile prescrite et préparer un réservoir de remplissage relié à la pompe de barre, des tuyaux transparents et un bac.<br>2. Remplir la pompe de barre jusqu'au niveau et maintenir le réservoir de remplissage alimenté pendant toute l'opération pour ne jamais aspirer d'air.<br>3. Brancher un tuyau transparent sur la vis de purge du vérin côté tribord, l'ouvrir, tourner la barre vers tribord jusqu'à ce que l'huile sorte sans bulles, refermer.<br>4. Faire la même chose côté bâbord.<br>5. Effectuer plusieurs allers-retours de butée à butée ; compléter le niveau.<br>6. Contrôler : nombre de tours de barre de butée à butée conforme à la notice, absence de fuite aux raccords et aux joints du vérin, direction ferme.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la direction est un organe de sécurité. Après toute intervention, on contrôle le fonctionnement sur toute la course, le serrage et le goupillage des fixations, et l'on réalise un essai avant de restituer le bateau. Une direction qui se bloque à grande vitesse est un accident grave.</div>"
      }
     ],
     "points_cles": [
      "Passe-coques et vannes sous la flottaison sont des points critiques : matériaux adaptés, deux colliers, vannes manœuvrables.",
      "Le laiton ordinaire peut se dézincifier et casser sans prévenir.",
      "Une pompe de cale qui se déclenche souvent est un symptôme : il faut chercher l'origine de l'eau.",
      "Le groupe d'eau fonctionne avec un pressostat ; un démarrage seul signale une fuite.",
      "Le gaz est plus lourd que l'air : coffre étanche vers l'intérieur et évacuation par le bas vers l'extérieur.",
      "Une fuite de gaz se recherche au produit moussant ou par contrôle de pression, jamais à la flamme.",
      "Directions : barre franche, à drosses, à câble, hydraulique, électronique.",
      "Une direction hydraulique spongieuse doit être purgée selon la notice, puis contrôlée sur toute sa course."
     ],
     "lexique": [
      {
       "terme": "Passe-coque",
       "def": "Raccord étanche qui traverse la coque pour une prise ou un rejet d'eau."
      },
      {
       "terme": "Dézincification",
       "def": "Corrosion sélective du zinc dans un laiton, qui le rend poreux et fragile."
      },
      {
       "terme": "Pinoche",
       "def": "Cône de bois tendre servant à boucher une voie d'eau en urgence."
      },
      {
       "terme": "Groupe d'eau",
       "def": "Pompe électrique avec pressostat qui met sous pression le circuit d'eau douce."
      },
      {
       "terme": "Eaux noires",
       "def": "Eaux usées provenant des toilettes."
      },
      {
       "terme": "Eaux grises",
       "def": "Eaux usées provenant de l'évier, du lavabo et de la douche."
      },
      {
       "terme": "Détendeur",
       "def": "Appareil qui abaisse la pression du gaz à la pression d'utilisation."
      },
      {
       "terme": "Thermocouple",
       "def": "Capteur de flamme qui coupe le gaz d'un brûleur éteint."
      },
      {
       "terme": "Mèche",
       "def": "Axe autour duquel pivote le safran."
      },
      {
       "terme": "Drosse",
       "def": "Câble qui transmet le mouvement de la roue de barre au secteur du safran."
      }
     ]
    },
    {
     "id": "bmn-reglementation-plaisance-conformite",
     "titre": "Réglementation de la plaisance, conformité et responsabilité du réparateur",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Expliquer le marquage CE des bateaux de plaisance et les catégories de conception",
      "Lire une plaque constructeur et en tirer les limites d'utilisation",
      "Connaître les principes de l'armement de sécurité selon la zone de navigation",
      "Distinguer les formalités administratives d'un bateau : immatriculation, titre de navigation, permis",
      "Mesurer les responsabilités du réparateur et les règles de la garantie"
     ],
     "sections": [
      {
       "titre": "Le marquage CE des bateaux de plaisance",
       "contenu": "<p>Dans l'Union européenne, les bateaux de plaisance d'une longueur de coque comprise entre 2,5 m et 24 m, les véhicules nautiques à moteur, les moteurs de propulsion et certains composants sont soumis à la <strong>directive 2013/53/UE</strong> relative aux bateaux de plaisance et aux véhicules nautiques à moteur. Elle fixe des <strong>exigences essentielles</strong> de sécurité, de protection de la santé, de l'environnement (émissions sonores et gazeuses des moteurs) et d'information du consommateur. Les <strong>normes harmonisées</strong> (ISO de la série des petits navires) donnent les moyens techniques de les respecter.</p>\n<p>Un bateau conforme porte le <strong>marquage CE</strong>, un <strong>numéro d'identification</strong> (CIN) et une <strong>plaque constructeur</strong> ; il est livré avec un <strong>manuel du propriétaire</strong> et une <strong>déclaration UE de conformité</strong>.</p>\n<table>\n<thead><tr><th>Catégorie de conception</th><th>Conditions pour lesquelles le bateau est conçu</th></tr></thead>\n<tbody>\n<tr><td>A</td><td>Vent pouvant dépasser la force 8 et vagues de hauteur significative supérieure à 4 m, à l'exclusion des conditions anormales</td></tr>\n<tr><td>B</td><td>Vent jusqu'à force 8 et vagues jusqu'à 4 m de hauteur significative</td></tr>\n<tr><td>C</td><td>Vent jusqu'à force 6 et vagues jusqu'à 2 m de hauteur significative</td></tr>\n<tr><td>D</td><td>Vent jusqu'à force 4 et vagues jusqu'à 0,3 m, avec des vagues occasionnelles de 0,5 m au maximum</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la catégorie de conception décrit les conditions de vent et de mer que le bateau peut affronter. Elle ne fixe pas, à elle seule, la distance à laquelle il peut s'éloigner d'un abri : celle-ci dépend aussi de l'armement de sécurité embarqué.</div>"
      },
      {
       "titre": "Lire la plaque constructeur",
       "contenu": "<p>La plaque constructeur est fixée de façon permanente et lisible, généralement près du poste de barre. Elle indique notamment :</p>\n<ul>\n<li>le nom du constructeur et le marquage CE ;</li>\n<li>la catégorie de conception ;</li>\n<li>le <strong>nombre maximal de personnes</strong> recommandé par le constructeur ;</li>\n<li>la <strong>charge maximale</strong> recommandée (personnes, équipements, carburant, eau, bagages), en kg ;</li>\n<li>pour les bateaux à moteur, la <strong>puissance maximale</strong> admissible et souvent la masse maximale du moteur.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier si une remotorisation et un équipement supplémentaire restent compatibles avec la plaque.<br>Plaque : catégorie C, 6 personnes, charge maximale 620 kg, puissance maximale 110 kW.<br>Projet du client : moteur de 115 ch ; il navigue avec 5 personnes de 75 kg en moyenne, 90 kg de carburant, 40 kg d'équipements et souhaite ajouter un réservoir d'appoint de 60 kg plein.<br>1. Puissance : 115 ch × 0,736 ≈ 84,6 kW, inférieure à 110 kW : conforme.<br>2. Charge : 5 × 75 + 90 + 40 + 60 = 565 kg, inférieure à 620 kg : conforme, mais la marge n'est que de 55 kg.<br>3. Conclusion à transmettre au client : la configuration est admissible ; avec une sixième personne de 75 kg, la charge atteindrait 640 kg et dépasserait la limite.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une modification importante d'un bateau (changement de motorisation au-delà de la puissance maximale, modification de structure) peut le rendre non conforme. Le réparateur qui réalise une telle modification engage sa responsabilité ; il doit refuser ou faire valider la modification selon les procédures prévues.</div>"
      },
      {
       "titre": "Armement de sécurité et zones de navigation",
       "contenu": "<p>En France, les règles d'équipement de sécurité des navires de plaisance figurent dans la <strong>Division 240</strong> du règlement annexé à l'arrêté du 23 novembre 1987 relatif à la sécurité des navires. Elle définit un matériel d'armement adapté à la distance d'éloignement d'un abri :</p>\n<table>\n<thead><tr><th>Zone</th><th>Distance d'un abri</th><th>Idée générale de l'équipement</th></tr></thead>\n<tbody>\n<tr><td>Basique</td><td>Jusqu'à 2 milles</td><td>Équipements individuels de flottabilité, moyen de repérage lumineux, extincteur selon motorisation, moyens d'assèchement, de remorquage et de mouillage selon le cas</td></tr>\n<tr><td>Côtier</td><td>Jusqu'à 6 milles</td><td>Équipement basique complété, notamment par des feux de détresse, un compas, des cartes et un dispositif de remontée à bord</td></tr>\n<tr><td>Hauturier</td><td>Au-delà de 6 milles</td><td>Équipement côtier complété, notamment par un radeau de survie, une VHF fixe, une balise de détresse, des moyens de positionnement et de communication adaptés</td></tr>\n</tbody>\n</table>\n<p>Ces listes évoluent : le technicien qui conseille un client consulte le texte en vigueur sur le site du ministère chargé de la mer. Les engins pyrotechniques et les radeaux ont des dates de péremption ou de révision à respecter ; les extincteurs doivent être entretenus selon les préconisations.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors de la préparation d'un bateau pour la saison, l'atelier propose une vérification de l'armement : dates des feux à main et des fusées, révision du radeau par une station agréée, état des gilets automatiques (cartouche et pastille), extincteurs. Le technicien ne délivre pas de certificat de conformité réglementaire, mais il signale par écrit les éléments périmés ou manquants.</div>"
      },
      {
       "titre": "Formalités administratives et titres de conduite",
       "contenu": "<p>Un bateau de plaisance en mer est en principe <strong>immatriculé</strong> auprès de l'administration (un numéro est attribué et doit être porté sur la coque). Selon ses caractéristiques et son usage, il peut aussi être soumis à la <strong>francisation</strong>, qui donne le droit de porter le pavillon français, et à une taxe annuelle. Les seuils et les modalités ont évolué ces dernières années ; il faut toujours se référer à l'information officielle en vigueur.</p>\n<p>Pour conduire un bateau à moteur dont la puissance dépasse 6 ch (4,5 kW), un <strong>permis plaisance</strong> est obligatoire : l'option côtière pour naviguer jusqu'à 6 milles d'un abri, avec une extension hauturière au-delà ; l'option eaux intérieures pour les fleuves, rivières et lacs, avec une extension grande plaisance pour les grands bateaux.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un technicien qui réalise un essai en mer conduit le bateau du client. Il doit être titulaire du titre requis pour ce bateau et cette zone, et naviguer dans les conditions prévues par l'entreprise et par l'assurance du chantier.</div>"
      },
      {
       "titre": "Responsabilités du réparateur et garanties",
       "contenu": "<p>Le réparateur professionnel est tenu à une <strong>obligation de résultat</strong> pour les travaux qu'il réalise : la réparation doit être conforme et efficace. Il a aussi un <strong>devoir de conseil</strong> : informer le client des défauts constatés, des risques d'une solution demandée, des préconisations. Une réserve écrite sur l'ordre de réparation ou la facture conserve la trace de ce conseil.</p>\n<ul>\n<li>Pendant les travaux, le bateau est sous la <strong>garde</strong> du chantier, qui doit le conserver en bon état et l'assurer.</li>\n<li>Les pièces neuves vendues bénéficient de la <strong>garantie légale de conformité</strong> et de la garantie contre les vices cachés, en plus d'une éventuelle garantie commerciale du fabricant.</li>\n<li>Une intervention sous <strong>garantie constructeur</strong> suit la procédure du constructeur : constat, accord préalable, pièces retournées, temps barémés.</li>\n<li>Les moteurs et bateaux font parfois l'objet de <strong>campagnes de rappel</strong> ; le concessionnaire vérifie à chaque passage si le numéro de série est concerné.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans le doute, on écrit. Une préconisation non suivie par le client, un refus de devis, une pièce fournie par le client, une limite de la réparation : tout ce qui est noté et signé protège l'entreprise et informe honnêtement le client.</div>"
      },
      {
       "titre": "Environnement : moteurs, rejets et fin de vie",
       "contenu": "<p>La directive européenne sur les bateaux de plaisance limite les émissions gazeuses et sonores des moteurs neufs mis sur le marché. Ces limites expliquent la quasi-disparition des hors-bord deux temps à carburateur et la généralisation de l'injection.</p>\n<p>D'autres règles protègent le milieu : interdiction de rejeter des hydrocarbures, règles de rejet des eaux noires, encadrement des antifoulings biocides, gestion des déchets dangereux du bord et du chantier. Enfin, les bateaux de plaisance hors d'usage sont pris en charge par une <strong>filière de responsabilité élargie du producteur</strong>, financée par une éco-contribution et organisée par un éco-organisme agréé, qui assure la collecte et la déconstruction.</p>\n<p>Le technicien relaie ces règles auprès des clients : il conseille un moteur moins polluant lors d'une remotorisation, oriente vers les stations de pompage et explique la démarche de déconstruction d'un bateau en fin de vie.</p>"
      }
     ],
     "points_cles": [
      "La directive 2013/53/UE encadre les bateaux de plaisance de 2,5 à 24 m, les VNM et les moteurs.",
      "Les catégories de conception A, B, C, D décrivent les conditions de vent et de mer prévues.",
      "La plaque constructeur fixe nombre de personnes, charge maximale et puissance maximale.",
      "La Division 240 définit l'armement de sécurité selon la zone : basique (2 milles), côtier (6 milles), hauturier.",
      "Un permis plaisance est obligatoire au-delà de 6 ch (4,5 kW).",
      "Le réparateur a une obligation de résultat et un devoir de conseil.",
      "Toute réserve ou préconisation non suivie se note par écrit.",
      "Les bateaux hors d'usage relèvent d'une filière de déconstruction organisée par un éco-organisme."
     ],
     "lexique": [
      {
       "terme": "Marquage CE",
       "def": "Marquage par lequel le fabricant déclare la conformité aux exigences européennes applicables."
      },
      {
       "terme": "Catégorie de conception",
       "def": "Classe A, B, C ou D définissant les conditions de vent et de mer pour lesquelles un bateau est conçu."
      },
      {
       "terme": "Plaque constructeur",
       "def": "Plaque fixée à bord indiquant catégorie, nombre de personnes, charge et puissance maximales."
      },
      {
       "terme": "Division 240",
       "def": "Texte réglementaire français fixant notamment l'armement de sécurité des navires de plaisance."
      },
      {
       "terme": "Abri",
       "def": "Lieu où un navire peut se mettre en sécurité et d'où l'on compte la distance de navigation."
      },
      {
       "terme": "Francisation",
       "def": "Formalité qui confère à un navire le droit de porter le pavillon français."
      },
      {
       "terme": "Obligation de résultat",
       "def": "Obligation pour le professionnel d'obtenir le résultat promis."
      },
      {
       "terme": "Devoir de conseil",
       "def": "Obligation d'informer le client des risques et des solutions adaptées."
      },
      {
       "terme": "Campagne de rappel",
       "def": "Opération du constructeur pour corriger un défaut sur une série de produits."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Analyse de documents professionnels",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bmn-doc-ordre-reparation-devis-facture",
     "titre": "Lire un dossier client : ordre de réparation, devis et facture",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier la structure et les rubriques d'un ordre de réparation, d'un devis et d'une facture",
      "Extraire d'un dossier client les informations utiles à l'intervention",
      "Vérifier la cohérence entre la demande, le devis et la facture",
      "Contrôler les calculs : main-d'œuvre, pièces, remises, TVA",
      "Rédiger une réponse argumentée à partir de ces documents"
     ],
     "sections": [
      {
       "titre": "Les documents du dossier client",
       "contenu": "<p>Dans un sujet d'étude ou à l'atelier, le <strong>dossier client</strong> rassemble les documents commerciaux et techniques liés à une intervention. Ils se répondent : le devis chiffre la demande de l'ordre de réparation, la facture reprend le devis accepté, le carnet d'entretien garde la trace de l'intervention.</p>\n<table>\n<thead><tr><th>Document</th><th>Rôle</th><th>Rubriques principales</th></tr></thead>\n<tbody>\n<tr><td>Ordre de réparation (OR)</td><td>Formaliser la demande et l'accord du client</td><td>Numéro et date, coordonnées du client, identification du bateau et des moteurs, heures moteur, travaux demandés, observations à la réception, conditions (devis, essai, délai), signature</td></tr>\n<tr><td>Devis</td><td>Chiffrer les travaux avant accord</td><td>Numéro, date, durée de validité, lignes de main-d'œuvre (temps, taux), lignes de pièces (référence, désignation, quantité, prix unitaire, remise), totaux HT, TVA, TTC, bon pour accord</td></tr>\n<tr><td>Facture</td><td>Constater la vente et demander le paiement</td><td>Mentions légales du vendeur, numéro unique, date, lignes réellement réalisées, totaux, conditions et date de paiement</td></tr>\n<tr><td>Carnet d'entretien</td><td>Historique du bateau et des moteurs</td><td>Dates, heures moteur, opérations, cachet de l'atelier</td></tr>\n</tbody>\n</table>\n<p>Vocabulaire à maîtriser : <strong>HT</strong> (hors taxes), <strong>TTC</strong> (toutes taxes comprises), <strong>TVA</strong> (taxe sur la valeur ajoutée, au taux normal de 20 % pour ces prestations en France métropolitaine), <strong>remise</strong> (réduction en pourcentage sur un prix), <strong>forfait</strong> (prix global pour une opération), <strong>ingrédients</strong> (huiles, graisses, produits consommés), <strong>taux horaire</strong>.</p>"
      },
      {
       "titre": "Méthode de lecture",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un dossier client en cinq étapes.<br>1. <strong>Identifier</strong> : client, bateau (modèle, CIN), moteur (modèle, numéro de série, heures). Noter toute incohérence (heures moteur inférieures à la dernière intervention, modèle différent entre OR et devis).<br>2. <strong>Comprendre la demande</strong> : relire les travaux demandés et les observations ; séparer ce qui est demandé de ce qui est seulement constaté.<br>3. <strong>Relier chaque ligne</strong> du devis à un élément de la demande ; repérer les lignes sans justification et les demandes non chiffrées.<br>4. <strong>Contrôler les calculs</strong> : quantité × prix unitaire, remises, totaux, TVA.<br>5. <strong>Conclure</strong> par écrit : ce qui est conforme, ce qui doit être corrigé ou validé par le client.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la remise s'applique au prix HT de la ligne concernée, avant la TVA. Calculer la TVA sur le montant avant remise, ou appliquer la remise au total TTC sans le préciser, conduit à des erreurs fréquentes dans les copies.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le document étudié est un ordre de réparation suivi d'un devis, établis par un atelier de maintenance nautique.</p>\n<h4>Ordre de réparation n° 2417 du 14 mars</h4>\n<ul>\n<li>Client : M. Durand. Bateau : open de 6,20 m, CIN porté sur la fiche. Moteur : hors-bord quatre temps 115 ch, 312 heures au compteur.</li>\n<li>Dernière révision au carnet : 205 heures, il y a deux ans.</li>\n<li>Travaux demandés : « Révision annuelle. Le moteur vibre à haut régime depuis un échouage en septembre. »</li>\n<li>Observations à la réception : hélice aluminium 15 × 17 avec deux pales tordues en bout, anode de tableau consommée à environ 70 %.</li>\n<li>Conditions : devis préalable demandé ; essai en mer autorisé.</li>\n</ul>\n<h4>Devis n° D-2417</h4>\n<table>\n<thead><tr><th>Réf.</th><th>Désignation</th><th>Qté</th><th>PU HT</th><th>Remise</th><th>Montant HT</th></tr></thead>\n<tbody>\n<tr><td>MO</td><td>Révision 300 h selon plan d'entretien</td><td>3,0 h</td><td>70,00</td><td></td><td>210,00</td></tr>\n<tr><td>MO</td><td>Contrôle rectitude arbre d'hélice et essai</td><td>1,0 h</td><td>70,00</td><td></td><td>70,00</td></tr>\n<tr><td>KIT-300</td><td>Kit révision 300 h (filtres, bougies, joints)</td><td>1</td><td>186,00</td><td>10 %</td><td>167,40</td></tr>\n<tr><td>HUI-4T</td><td>Huile moteur 10W-30, bidon 1 L</td><td>6</td><td>12,50</td><td></td><td>75,00</td></tr>\n<tr><td>HUI-EMB</td><td>Huile d'embase, tube</td><td>1</td><td>18,90</td><td></td><td>18,90</td></tr>\n<tr><td>HEL-1517</td><td>Hélice aluminium 15 × 17</td><td>1</td><td>215,00</td><td>10 %</td><td>193,50</td></tr>\n<tr><td></td><td><strong>Total HT</strong></td><td></td><td></td><td></td><td>734,80</td></tr>\n<tr><td></td><td>TVA 20 %</td><td></td><td></td><td></td><td>146,96</td></tr>\n<tr><td></td><td><strong>Total TTC</strong></td><td></td><td></td><td></td><td>881,76</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Identification.</strong> Le moteur affiche 312 heures ; la dernière révision a eu lieu à 205 heures il y a deux ans. Une révision annuelle a donc été sautée, et l'échéance de 300 heures est dépassée : le choix d'une révision 300 h est cohérent avec le plan d'entretien.</p>\n<p><strong>2. Demande.</strong> Deux demandes distinctes : la révision et la vibration à haut régime. L'observation des pales tordues explique probablement la vibration, mais l'échouage peut aussi avoir faussé l'arbre d'hélice : la ligne de contrôle de rectitude est donc justifiée. L'anode consommée à 70 % est constatée mais ne figure pas au devis.</p>\n<p><strong>3. Correspondance des lignes.</strong> Révision : main-d'œuvre, kit, huile moteur, huile d'embase. Vibration : contrôle de l'arbre et hélice neuve. Manque : l'anode de tableau (préconisation à proposer) et, si le plan d'entretien le prévoit, la turbine de pompe à eau à cette échéance. La quantité d'huile (6 L) doit être vérifiée dans la notice : la contenance du carter avec filtre est la donnée de référence.</p>\n<p><strong>4. Calculs.</strong> Kit : 186,00 × 0,90 = 167,40 € ; hélice : 215,00 × 0,90 = 193,50 € ; huile : 6 × 12,50 = 75,00 €. Somme HT : 210,00 + 70,00 + 167,40 + 75,00 + 18,90 + 193,50 = 734,80 €. TVA : 734,80 × 0,20 = 146,96 €. TTC : 881,76 €. Les calculs sont exacts.</p>\n<p><strong>5. Conclusion rédigée.</strong> « Le devis répond aux deux demandes du client et ses calculs sont justes. Il faut y ajouter en option le remplacement de l'anode de tableau, consommée à 70 %, et vérifier si la turbine de pompe à eau figure à l'échéance de 300 heures. Le client doit être informé que, si le contrôle révèle un arbre faussé, un devis complémentaire lui sera soumis avant toute réparation de l'embase. »</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne analyse ne se contente pas de vérifier les calculs. Elle relie chaque ligne à une demande, détecte les oublis et prévoit les suites possibles du diagnostic.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les logiciels de gestion d'atelier génèrent automatiquement devis et factures, mais les erreurs de saisie (mauvaise référence, quantité, remise appliquée deux fois) restent fréquentes. Le technicien qui relit le devis avant envoi évite des litiges et des pertes pour l'entreprise.</div>"
      },
      {
       "titre": "Les pièges de lecture",
       "contenu": "<ul>\n<li><strong>Confondre constat et demande</strong> : l'anode usée est constatée, pas commandée. On ne la remplace pas sans accord ; on la propose.</li>\n<li><strong>Oublier les unités</strong> : un temps de 0,5 h correspond à 30 min, pas à 50 min ; 1 h 15 min s'écrit 1,25 h.</li>\n<li><strong>Lire trop vite les références</strong> : une hélice 15 × 17 et une hélice 15 × 19 n'ont pas le même pas ; une erreur de référence change les performances du bateau.</li>\n<li><strong>Ignorer la durée de validité</strong> du devis : au-delà, les prix peuvent être révisés.</li>\n<li><strong>Négliger les conditions de l'OR</strong> : un essai en mer non autorisé par le client ne doit pas être réalisé, même s'il serait utile.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> convertir des temps pour un devis.<br>1. 1 h 45 min = 1 + 45 / 60 = 1,75 h.<br>2. 2 h 20 min = 2 + 20 / 60 ≈ 2,33 h.<br>3. Au taux de 70 € HT/h : 1,75 × 70 = 122,50 € HT et 2,33 × 70 ≈ 163,10 € HT (ou 163,33 € HT si l'on garde la valeur exacte 2 + 1/3).</div>"
      },
      {
       "titre": "Les autres pièces du dossier : bon de commande et carnet d'entretien",
       "contenu": "<p>Un sujet peut aussi fournir un <strong>bon de commande</strong> de pièces adressé à un fournisseur, ou une page de <strong>carnet d'entretien</strong>. Leur lecture suit la même logique de cohérence.</p>\n<table>\n<thead><tr><th>Document</th><th>Ce qu'on vérifie</th><th>Erreur typique à repérer</th></tr></thead>\n<tbody>\n<tr><td>Bon de commande fournisseur</td><td>Références identiques à celles du devis, quantités suffisantes, adresse de livraison, délai compatible avec le planning</td><td>Référence d'hélice au mauvais pas ; joint oublié ; délai de livraison postérieur à la date promise au client</td></tr>\n<tr><td>Carnet d'entretien</td><td>Suite logique des dates et des heures moteur, opérations cochées, cachet de l'atelier</td><td>Heures moteur qui diminuent d'une révision à l'autre (compteur remplacé ou erreur de saisie) ; échéance sautée</td></tr>\n<tr><td>Facture finale</td><td>Lignes identiques au devis accepté, travaux complémentaires validés par écrit</td><td>Ligne ajoutée sans accord du client ; remise du devis oubliée</td></tr>\n</tbody>\n</table>\n<p>Dans une réponse écrite, chaque anomalie relevée est citée avec sa source (« ligne 6 du devis », « carnet, révision de mai ») et suivie de la correction proposée. Cette rigueur montre que l'analyse s'appuie sur les documents et non sur une impression.</p>"
      }
     ],
     "points_cles": [
      "OR, devis, facture et carnet d'entretien se répondent et doivent être cohérents.",
      "Identifier d'abord le client, le bateau, le moteur et ses heures.",
      "Séparer ce qui est demandé de ce qui est seulement constaté.",
      "Relier chaque ligne du devis à une demande et repérer les oublis.",
      "La remise s'applique au HT de la ligne, la TVA au total HT après remises.",
      "Les temps se convertissent en heures décimales : 45 min = 0,75 h.",
      "Une conclusion rédigée indique ce qui est conforme, ce qui manque et les suites possibles."
     ],
     "lexique": [
      {
       "terme": "HT",
       "def": "Montant hors taxes."
      },
      {
       "terme": "TTC",
       "def": "Montant toutes taxes comprises."
      },
      {
       "terme": "TVA",
       "def": "Taxe sur la valeur ajoutée, calculée sur le montant HT."
      },
      {
       "terme": "Remise",
       "def": "Réduction exprimée en pourcentage d'un prix HT."
      },
      {
       "terme": "Forfait",
       "def": "Prix global fixé à l'avance pour une opération."
      },
      {
       "terme": "Ingrédients",
       "def": "Produits consommés lors d'une intervention : huiles, graisses, nettoyants."
      },
      {
       "terme": "Durée de validité",
       "def": "Période pendant laquelle les prix d'un devis sont garantis."
      },
      {
       "terme": "Bon pour accord",
       "def": "Mention manuscrite accompagnant la signature du client qui accepte un devis."
      }
     ]
    },
    {
     "id": "bmn-doc-plan-entretien-manuel-atelier",
     "titre": "Exploiter un plan d'entretien et une méthode de manuel d'atelier",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Repérer l'organisation d'un manuel d'atelier et d'un manuel du propriétaire",
      "Lire un tableau de plan d'entretien et en déduire les opérations d'une échéance",
      "Extraire d'une méthode les valeurs de réglage, couples de serrage et ingrédients",
      "Identifier les avertissements de sécurité et les opérations critiques",
      "Rédiger une gamme d'intervention à partir de la documentation"
     ],
     "sections": [
      {
       "titre": "Structure de la documentation constructeur",
       "contenu": "<p>Les constructeurs de moteurs et d'équipements publient deux types de documents principaux. Le <strong>manuel du propriétaire</strong> est destiné à l'utilisateur : description, utilisation, entretien de base, plan d'entretien. Le <strong>manuel d'atelier</strong> (ou manuel de service) est destiné aux professionnels : caractéristiques techniques, méthodes de dépose et de repose, valeurs de contrôle, schémas, diagnostic.</p>\n<table>\n<thead><tr><th>Rubrique du manuel d'atelier</th><th>Ce qu'on y trouve</th></tr></thead>\n<tbody>\n<tr><td>Informations générales</td><td>Identification des numéros de série, précautions, outillage spécial, ingrédients</td></tr>\n<tr><td>Caractéristiques</td><td>Tableaux de valeurs : jeux, pressions, résistances, couples de serrage</td></tr>\n<tr><td>Entretien périodique</td><td>Plan d'entretien et méthodes des opérations courantes</td></tr>\n<tr><td>Sections par système</td><td>Alimentation, électricité, moteur, embase, trim, avec vues éclatées et méthodes</td></tr>\n<tr><td>Diagnostic</td><td>Tableaux symptôme, cause, remède ; procédures liées aux codes défauts</td></tr>\n</tbody>\n</table>\n<p>Les méthodes utilisent des <strong>pictogrammes</strong> et des mentions d'avertissement hiérarchisées : <strong>DANGER</strong> (risque de blessure grave ou de mort), <strong>AVERTISSEMENT</strong> (risque de blessure), <strong>ATTENTION</strong> (risque de dommage matériel), <strong>NOTE</strong> (information utile). Leur vocabulaire exact varie d'un constructeur à l'autre.</p>"
      },
      {
       "titre": "Méthode de lecture",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> passer de la documentation à une gamme d'intervention.<br>1. <strong>Vérifier l'applicabilité</strong> : modèle, plage de numéros de série, année. Une méthode pour un autre numéro de série peut comporter d'autres valeurs.<br>2. <strong>Lire le plan d'entretien</strong> : repérer la colonne de l'échéance et lister les opérations avec leur code (contrôler, remplacer, nettoyer, graisser, régler).<br>3. <strong>Lire chaque méthode en entier avant de commencer</strong>, en repérant les outils spéciaux, les pièces à usage unique, les ingrédients et les avertissements.<br>4. <strong>Relever les valeurs</strong> : couples de serrage avec leur unité, jeux, quantités d'huile, produits de freinage ou d'étanchéité.<br>5. <strong>Ordonner</strong> les opérations dans une gamme logique (moteur chaud pour la vidange, embase moteur relevé, etc.).<br>6. <strong>Prévoir les contrôles finaux</strong> : niveaux, fuites, essai, codes défauts effacés.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un couple de serrage peut être exprimé en N·m, en kgf·m ou en lbf·ft. Conversions utiles : 1 kgf·m ≈ 9,81 N·m ; 1 lbf·ft ≈ 1,356 N·m. Une confusion d'unité peut casser une vis ou laisser un assemblage desserré. Vérifier aussi si la vis doit être huilée ou sèche : cela change le serrage obtenu.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le document est un extrait du plan d'entretien d'un hors-bord quatre temps et la méthode de vidange de l'huile d'embase.</p>\n<h4>Extrait du plan d'entretien</h4>\n<table>\n<thead><tr><th>Opération</th><th>Premières 20 h</th><th>Toutes les 100 h ou chaque année</th><th>Toutes les 300 h ou tous les 3 ans</th></tr></thead>\n<tbody>\n<tr><td>Huile moteur et filtre</td><td>R</td><td>R</td><td>R</td></tr>\n<tr><td>Huile d'embase</td><td>R</td><td>R</td><td>R</td></tr>\n<tr><td>Bougies</td><td></td><td>C</td><td>R</td></tr>\n<tr><td>Filtre à carburant du séparateur de vapeur</td><td></td><td></td><td>R</td></tr>\n<tr><td>Turbine de pompe à eau</td><td></td><td>C</td><td>R</td></tr>\n<tr><td>Anodes</td><td>C</td><td>C</td><td>C</td></tr>\n<tr><td>Points de graissage</td><td>G</td><td>G</td><td>G</td></tr>\n</tbody>\n</table>\n<p>Légende : C = contrôler et remplacer si nécessaire ; R = remplacer ; G = graisser.</p>\n<h4>Méthode : vidange de l'huile d'embase</h4>\n<ol>\n<li>Placer le moteur en position verticale (abaissé).</li>\n<li>Placer un bac sous l'embase. Déposer le bouchon de vidange inférieur, puis le bouchon de niveau supérieur.</li>\n<li>Examiner l'huile : une huile laiteuse indique une entrée d'eau ; des particules métalliques fines sur l'aimant du bouchon sont normales en petite quantité, des éclats indiquent une usure anormale des engrenages.</li>\n<li>Remplir par l'orifice inférieur avec l'huile pour engrenages prescrite (spécification indiquée dans le tableau des ingrédients) jusqu'à ce qu'elle s'écoule par l'orifice supérieur. Contenance : 0,98 L.</li>\n<li>Remonter le bouchon supérieur avec un joint neuf, puis le bouchon inférieur avec un joint neuf. Couple de serrage : 9 N·m.</li>\n</ol>\n<p>ATTENTION : ne pas remplir par l'orifice supérieur, une poche d'air empêcherait le remplissage complet.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p>Situation : le moteur du client totalise 310 heures et la dernière révision, faite à 210 heures, date d'un an.</p>\n<p><strong>1. Choix de l'échéance.</strong> 310 heures dépassent l'échéance de 300 heures : on applique la colonne « toutes les 300 h ou tous les 3 ans », qui regroupe les opérations des 100 heures et les remplacements supplémentaires. On remarque aussi que l'échéance annuelle est atteinte : les deux conduisent ici à la même révision.</p>\n<p><strong>2. Liste des opérations.</strong> Remplacer : huile moteur et filtre, huile d'embase, bougies, filtre à carburant du séparateur de vapeur, turbine de pompe à eau. Contrôler : anodes. Graisser : points de graissage.</p>\n<p><strong>3. Pièces et ingrédients pour l'embase.</strong> Environ 1 L d'huile pour engrenages à la spécification prescrite (contenance 0,98 L, prévoir un tube d'un litre), deux joints de bouchon neufs. Outils : tournevis ou clé adaptée, clé dynamométrique réglée à 9 N·m, bac.</p>\n<p><strong>4. Points critiques relevés.</strong> Le remplissage se fait par le bas jusqu'au débordement par le haut ; le bouchon supérieur se remonte en premier pour créer une dépression qui retient l'huile pendant le retrait de la pompe. L'examen de l'huile est un contrôle à part entière : son résultat doit figurer dans le rapport.</p>\n<p><strong>5. Conversion d'unité.</strong> Si la clé disponible est graduée en kgf·m : 9 / 9,81 ≈ 0,92 kgf·m. En lbf·ft : 9 / 1,356 ≈ 6,6 lbf·ft.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la colonne d'échéance la plus élevée atteinte inclut les opérations des colonnes inférieures, sauf indication contraire de la documentation. On n'oublie pas les codes « C » : un contrôle non noté est considéré comme non fait.</div>"
      },
      {
       "titre": "Les pièges de lecture",
       "contenu": "<ul>\n<li><strong>Lire la mauvaise ligne ou la mauvaise colonne</strong> : on suit la ligne avec une règle, surtout dans les tableaux denses.</li>\n<li><strong>Oublier la condition « ou »</strong> : « 100 h ou chaque année » signifie la première échéance atteinte.</li>\n<li><strong>Négliger les pièces à usage unique</strong> : joints, écrous autofreinés, goupilles ; elles figurent souvent seulement dans les notes de la méthode.</li>\n<li><strong>Confondre contenance totale et quantité de vidange</strong> : sur un moteur, une partie de l'huile reste dans le circuit ; on complète au niveau de la jauge.</li>\n<li><strong>Utiliser une méthode d'un autre modèle</strong> : les valeurs de couple et de contenance changent d'un moteur à l'autre, parfois d'une série à l'autre du même modèle.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les documentations constructeur sont souvent consultées en ligne, sur un portail réservé aux concessionnaires. Elles sont mises à jour régulièrement par des bulletins techniques : la version imprimée gardée dans l'atelier peut être périmée. On vérifie la date de révision du document avant une intervention importante.</div>"
      },
      {
       "titre": "Autres extraits fréquents : caractéristiques et tableau de diagnostic",
       "contenu": "<p>Les sujets fournissent souvent deux autres types d'extraits du manuel d'atelier.</p>\n<p>Le <strong>tableau des caractéristiques</strong> regroupe des valeurs de contrôle. Par exemple, pour un moteur hors-bord : jeu aux soupapes à froid, admission 0,15 à 0,25 mm et échappement 0,25 à 0,35 mm ; écartement des électrodes de bougie 0,8 à 0,9 mm ; régime de ralenti 700 à 800 tr/min au point mort. Chaque valeur s'accompagne d'une condition (moteur froid, au point mort, après mise en température) qu'il faut respecter pour que la mesure soit comparable.</p>\n<p>Le <strong>tableau de diagnostic</strong> se présente en trois colonnes : symptôme, cause possible, remède. Exemple d'extrait :</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Cause possible</th><th>Remède</th></tr></thead>\n<tbody>\n<tr><td>Alarme de surchauffe</td><td>Prise d'eau obstruée ; turbine usée ; thermostat défectueux</td><td>Nettoyer ; remplacer la turbine ; contrôler et remplacer le thermostat</td></tr>\n<tr><td>Régime maximal trop bas</td><td>Hélice de pas trop grand ; carène sale ; trim mal réglé</td><td>Choisir une hélice adaptée ; caréner ; régler le trim</td></tr>\n<tr><td>Ralenti instable</td><td>Prise d'air ; injecteur encrassé ; bougie usée</td><td>Contrôler l'étanchéité de l'admission ; nettoyer ou remplacer</td></tr>\n</tbody>\n</table>\n<p>Ce tableau ne donne pas l'ordre des contrôles : c'est au technicien de hiérarchiser les causes selon le contexte (historique, facilité de contrôle). Dans une copie, on reprend les causes du tableau puis on justifie l'ordre choisi.</p>"
      }
     ],
     "points_cles": [
      "Le manuel du propriétaire vise l'utilisateur ; le manuel d'atelier vise le professionnel.",
      "Vérifier d'abord l'applicabilité : modèle et plage de numéros de série.",
      "Le plan d'entretien se lit par échéance et par code : contrôler, remplacer, graisser.",
      "Lire toute la méthode avant de commencer et relever outils, pièces à usage unique et ingrédients.",
      "1 kgf·m ≈ 9,81 N·m et 1 lbf·ft ≈ 1,356 N·m.",
      "L'huile d'embase se remplit par le bas jusqu'au débordement par le haut.",
      "Les avertissements DANGER, AVERTISSEMENT, ATTENTION sont hiérarchisés.",
      "La documentation évolue par bulletins : vérifier la version utilisée."
     ],
     "lexique": [
      {
       "terme": "Manuel d'atelier",
       "def": "Documentation technique du constructeur destinée aux professionnels."
      },
      {
       "terme": "Manuel du propriétaire",
       "def": "Documentation remise à l'utilisateur pour l'utilisation et l'entretien courant."
      },
      {
       "terme": "Échéance",
       "def": "Moment où une opération d'entretien doit être faite, en heures ou en durée."
      },
      {
       "terme": "Couple de serrage",
       "def": "Moment de serrage prescrit pour une vis ou un écrou, en N·m."
      },
      {
       "terme": "Pièce à usage unique",
       "def": "Pièce qui doit être remplacée à chaque démontage."
      },
      {
       "terme": "Gamme d'intervention",
       "def": "Liste ordonnée des opérations, outils, valeurs et contrôles d'une intervention."
      },
      {
       "terme": "Bulletin technique",
       "def": "Document du constructeur qui corrige ou complète la documentation existante."
      },
      {
       "terme": "Applicabilité",
       "def": "Ensemble des modèles et numéros de série auxquels s'applique une méthode."
      }
     ]
    },
    {
     "id": "bmn-doc-schema-electrique-bord",
     "titre": "Lire un schéma électrique de bord",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Distinguer schéma unifilaire, schéma développé et schéma de câblage",
      "Reconnaître les symboles normalisés et les repérages des conducteurs",
      "Suivre un circuit de la source au récepteur et retour",
      "Exploiter un schéma pour localiser une panne et choisir les points de mesure",
      "Vérifier la cohérence des protections et des sections indiquées"
     ],
     "sections": [
      {
       "titre": "Les types de schémas",
       "contenu": "<p>Un bateau peut être accompagné de plusieurs types de documents électriques :</p>\n<table>\n<thead><tr><th>Type</th><th>Représentation</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Schéma unifilaire (ou synoptique)</td><td>Un seul trait représente un ensemble de conducteurs ; il montre l'architecture</td><td>Comprendre l'organisation : batteries, coupe-batteries, tableaux, sources de charge</td></tr>\n<tr><td>Schéma développé</td><td>Chaque conducteur est dessiné ; les circuits sont représentés de façon fonctionnelle, sans tenir compte de la position réelle</td><td>Comprendre le fonctionnement et dépanner un circuit</td></tr>\n<tr><td>Schéma de câblage (ou d'implantation)</td><td>Position réelle des appareils, connecteurs, couleurs et repères des fils</td><td>Installer, retrouver un fil à bord</td></tr>\n</tbody>\n</table>\n<p>Les moteurs disposent de leur propre schéma de faisceau, où chaque fil est désigné par sa <strong>couleur</strong> (souvent abrégée, par exemple R pour rouge, B pour noir ou bleu selon le constructeur : la légende fait foi) et chaque connecteur par un repère et un numéro de broche.</p>"
      },
      {
       "titre": "Symboles et repérages",
       "contenu": "<p>Les symboles sont normalisés (série de normes CEI 60617 pour les symboles graphiques), mais les constructeurs de bateaux utilisent parfois des variantes : une <strong>légende</strong> accompagne normalement le schéma.</p>\n<table>\n<thead><tr><th>Élément</th><th>Représentation usuelle</th></tr></thead>\n<tbody>\n<tr><td>Batterie</td><td>Traits parallèles alternativement longs (+) et courts (-)</td></tr>\n<tr><td>Fusible</td><td>Rectangle traversé par le conducteur</td></tr>\n<tr><td>Disjoncteur</td><td>Contact avec un symbole de déclenchement</td></tr>\n<tr><td>Interrupteur, coupe-batterie</td><td>Contact ouvert dessiné en position repos</td></tr>\n<tr><td>Relais</td><td>Rectangle (bobine) relié par un trait pointillé au contact qu'il commande</td></tr>\n<tr><td>Lampe</td><td>Cercle avec une croix</td></tr>\n<tr><td>Moteur électrique</td><td>Cercle avec la lettre M</td></tr>\n<tr><td>Masse, retour négatif</td><td>Barre de masse ou symbole de masse</td></tr>\n</tbody>\n</table>\n<p>Les conducteurs portent souvent un repère avec leur section, par exemple « 12 - 2,5 » pour le circuit 12 en 2,5 mm². Les circuits sont numérotés comme sur le tableau électrique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un schéma, les contacts sont dessinés au repos, c'est-à-dire bobine du relais non alimentée et interrupteur non actionné. Un contact « normalement fermé » est donc dessiné fermé, même s'il est ouvert en fonctionnement.</div>"
      },
      {
       "titre": "Méthode de lecture",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un schéma et l'utiliser pour un diagnostic.<br>1. <strong>Lire le cartouche et la légende</strong> : bateau, version, date, symboles, codes de couleur.<br>2. <strong>Repérer les sources</strong> (batteries, alternateur, chargeur) et les <strong>protections principales</strong>.<br>3. <strong>Suivre le circuit concerné</strong> au crayon, depuis le positif de la batterie, à travers les protections et les commandes, jusqu'au récepteur, puis le retour jusqu'au négatif.<br>4. <strong>Lister les éléments traversés</strong> dans l'ordre : ce sont les causes possibles d'une panne.<br>5. <strong>Choisir les points de mesure</strong> : tensions par rapport au négatif en plusieurs points, en fonctionnement, en partant du récepteur ou de la source selon l'accessibilité.<br>6. <strong>Interpréter</strong> : la panne se situe entre le dernier point où la tension est correcte et le premier où elle est absente ou anormale.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le document est le schéma développé du circuit de pompe de cale d'un voilier de 10 m, décrit ici élément par élément.</p>\n<ul>\n<li><strong>Source</strong> : parc de servitude 12 V. Un fil rouge de 4 mm², repéré P1, part de la borne positive de la batterie, <strong>en amont du coupe-batterie</strong>, vers un porte-fusible F1 de 10 A situé dans le coffre batterie.</li>\n<li>Après F1, le fil P1 rejoint un <strong>commutateur à trois positions</strong> S1 placé au tableau : position « MANU » (marche forcée), position « ARRÊT », position « AUTO ».</li>\n<li>En position « MANU », S1 relie P1 directement au fil P2 (marron, 2,5 mm²) qui alimente le <strong>moteur de la pompe</strong> M1 dans les fonds.</li>\n<li>En position « AUTO », S1 relie P1 au fil P3 (marron et blanc, 2,5 mm²) qui va au <strong>contacteur à flotteur</strong> K1 ; la sortie de K1 rejoint P2 par une jonction étanche J1 dans les fonds.</li>\n<li>Le retour de M1 se fait par un fil noir N1 de 2,5 mm² jusqu'à la <strong>barre de masse</strong> du tableau, reliée au négatif batterie.</li>\n<li>Une <strong>lampe témoin</strong> H1 au tableau est branchée entre P2 et la masse : elle s'allume quand la pompe est alimentée.</li>\n<li>Distance batterie - pompe : 6 m environ ; courant nominal de la pompe : 4 A.</li>\n</ul>\n<p>Situation : le client indique que la pompe fonctionne en position « MANU » mais jamais en « AUTO », même avec de l'eau dans les fonds.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Ce que le symptôme élimine.</strong> En « MANU », le courant passe par P1, F1, S1, P2, M1, N1. Puisque la pompe fonctionne, la source, le fusible, le fil P2, le moteur et le retour sont bons. La panne se trouve dans ce qui n'est utilisé qu'en « AUTO » : la position « AUTO » de S1, le fil P3, le contacteur K1, la jonction J1.</p>\n<p><strong>2. Hiérarchisation.</strong> Le contacteur à flotteur, dans les fonds humides, est le plus exposé : flotteur bloqué par des débris, contacts oxydés. Vient ensuite la jonction J1, également dans les fonds. La position « AUTO » du commutateur et le fil P3 sont moins probables.</p>\n<p><strong>3. Mesures proposées</strong>, commutateur en « AUTO », flotteur soulevé à la main :</p>\n<table>\n<thead><tr><th>Point de mesure (par rapport à la masse)</th><th>Valeur attendue</th><th>Si la valeur est absente</th></tr></thead>\n<tbody>\n<tr><td>Entrée de K1 (fil P3)</td><td>Environ 12,5 V</td><td>Défaut de S1 en position AUTO ou du fil P3</td></tr>\n<tr><td>Sortie de K1, flotteur levé</td><td>Environ 12,5 V</td><td>K1 défectueux ou flotteur bloqué</td></tr>\n<tr><td>Fil P2 après J1, flotteur levé</td><td>Environ 12,5 V</td><td>Jonction J1 coupée ou oxydée</td></tr>\n</tbody>\n</table>\n<p><strong>4. Vérification de la conception.</strong> Le fusible de 10 A protège un fil de 4 mm² puis des fils de 2,5 mm² : un fil de 2,5 mm² supporte nettement plus de 10 A, la protection est cohérente. Chute de tension : S = 0,0175 × 2 × 6 × 4 / ΔU ; avec 2,5 mm², ΔU = 0,0175 × 12 × 4 / 2,5 ≈ 0,34 V, soit environ 2,8 % de 12 V : acceptable. Le branchement en amont du coupe-batterie est volontaire : la pompe automatique doit fonctionner bateau fermé.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un symptôme qui apparaît dans un mode et pas dans l'autre désigne les éléments propres au mode défaillant. Le schéma permet de les isoler avant même de prendre un outil.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur de nombreux bateaux d'occasion, le schéma ne correspond plus à l'installation réelle après plusieurs ajouts. Le technicien met à jour le schéma au fil de ses interventions et repère les fils qu'il pose : c'est un gain de temps considérable pour la suite.</div>"
      },
      {
       "titre": "Lire le schéma unifilaire d'un bord",
       "contenu": "<p>Le schéma unifilaire sert surtout à vérifier l'architecture de l'installation. Exemple décrit : deux batteries (moteur 75 Ah et servitude 2 × 110 Ah en parallèle), chacune reliée à son propre coupe-batterie ; l'alternateur charge la batterie moteur et, par un coupleur, le parc de servitude ; un chargeur de quai à deux sorties alimente les deux parcs ; le tableau 12 V est alimenté par le parc de servitude via un fusible de 80 A ; la pompe de cale automatique est branchée en amont du coupe-batterie de servitude.</p>\n<p>Questions à se poser devant un tel schéma :</p>\n<ul>\n<li>Chaque source et chaque départ principal sont-ils protégés au plus près de la batterie ?</li>\n<li>La batterie moteur reste-t-elle disponible si le parc de servitude est vide ? Ici oui, grâce au coupleur qui sépare les parcs quand la tension baisse.</li>\n<li>Les équipements qui doivent fonctionner bateau fermé (pompe de cale, alarme) sont-ils bien en amont du coupe-batterie, avec leur propre fusible ?</li>\n<li>Les batteries associées en parallèle sont-elles identiques ?</li>\n<li>Le 230 V apparaît-il séparé, avec sa propre protection différentielle ?</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un schéma unifilaire ne montre pas les retours négatifs ni les sections exactes. Il ne suffit pas pour dépanner un circuit : il faut le schéma développé ou le schéma de câblage correspondant.</div>"
      }
     ],
     "points_cles": [
      "Le schéma unifilaire montre l'architecture, le développé le fonctionnement, le câblage la position réelle.",
      "La légende et le cartouche se lisent en premier : symboles et codes de couleur varient.",
      "Les contacts sont dessinés au repos.",
      "On suit un circuit du positif de la source au récepteur, puis le retour au négatif.",
      "Les éléments traversés sont les causes possibles d'une panne.",
      "La panne se situe entre le dernier point de tension correcte et le premier point anormal.",
      "Un symptôme présent dans un seul mode désigne les éléments propres à ce mode.",
      "Le schéma permet aussi de vérifier protections et sections."
     ],
     "lexique": [
      {
       "terme": "Schéma unifilaire",
       "def": "Schéma où un seul trait représente un ensemble de conducteurs."
      },
      {
       "terme": "Schéma développé",
       "def": "Schéma fonctionnel où chaque conducteur est dessiné."
      },
      {
       "terme": "Schéma de câblage",
       "def": "Schéma qui montre la position réelle des appareils et des fils."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre d'un document technique qui indique titre, version, date et auteur."
      },
      {
       "terme": "Relais",
       "def": "Interrupteur commandé électriquement par une bobine."
      },
      {
       "terme": "Contacteur à flotteur",
       "def": "Interrupteur actionné par le niveau d'eau qui commande la pompe de cale."
      },
      {
       "terme": "Barre de masse",
       "def": "Barre de connexion commune des retours négatifs."
      },
      {
       "terme": "Repère de conducteur",
       "def": "Code inscrit sur un fil qui l'identifie sur le schéma."
      }
     ]
    },
    {
     "id": "bmn-doc-vue-eclatee-nomenclature",
     "titre": "Lire une vue éclatée, une nomenclature et un catalogue de pièces",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire l'organisation d'une vue éclatée et de sa nomenclature",
      "Identifier une pièce et sa référence à partir d'un repère",
      "Tenir compte des numéros de série, des variantes et des pièces remplacées",
      "Déduire de la vue éclatée un ordre de démontage et de remontage",
      "Établir une liste de pièces à commander"
     ],
     "sections": [
      {
       "titre": "Le document et son vocabulaire",
       "contenu": "<p>Une <strong>vue éclatée</strong> est un dessin en perspective où les pièces d'un sous-ensemble sont représentées écartées les unes des autres, dans l'ordre et l'axe de leur montage. Des traits fins (lignes d'axe) relient les pièces à leur position. Chaque pièce porte un <strong>repère</strong> (numéro dans une bulle ou au bout d'une ligne de rappel).</p>\n<p>La vue est accompagnée d'une <strong>nomenclature</strong> : un tableau qui donne, pour chaque repère, la <strong>référence</strong> (numéro de pièce du constructeur), la <strong>désignation</strong>, la <strong>quantité</strong> utilisée dans le sous-ensemble et souvent des <strong>remarques</strong> (numéros de série concernés, pièce faisant partie d'un kit, pièce remplacée par une nouvelle référence).</p>\n<table>\n<thead><tr><th>Terme</th><th>Sens</th></tr></thead>\n<tbody>\n<tr><td>Repère</td><td>Numéro qui relie une pièce du dessin à une ligne de la nomenclature</td></tr>\n<tr><td>Référence</td><td>Code unique de la pièce chez le constructeur, à utiliser pour commander</td></tr>\n<tr><td>Kit ou ensemble</td><td>Lot de pièces vendu sous une seule référence (kit de joints, kit de turbine)</td></tr>\n<tr><td>Remplacement de référence</td><td>Ancienne référence remplacée par une nouvelle, parfois modifiée</td></tr>\n<tr><td>Plage de numéros de série</td><td>Moteurs auxquels une pièce s'applique</td></tr>\n</tbody>\n</table>\n<p>Ces documents sont aujourd'hui surtout consultés dans des <strong>catalogues électroniques</strong> : on saisit le modèle et le numéro de série, le logiciel affiche les vues correspondantes et permet d'ajouter les pièces au panier de commande.</p>\n<p>Certaines pièces dessinées sur la vue ne sont pas vendues séparément : la nomenclature les signale alors par une mention du type « non vendu seul » ou renvoie au repère de l'ensemble qui les contient. D'autres apparaissent en plusieurs variantes selon la version du moteur (arbre long ou court, rotation normale ou inverse, couleur) ; la désignation ou la colonne des remarques précise la variante. Enfin, les vis et écrous standard portent parfois une référence normalisée (diamètre, longueur, classe de qualité, matériau) que l'on peut trouver chez un fournisseur de visserie, à condition de respecter exactement le matériau : une vis en acier ordinaire à la place d'une vis inox se corrode en quelques semaines en eau de mer.</p>"
      },
      {
       "titre": "Méthode de lecture",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> passer d'une pièce défectueuse à une commande juste.<br>1. Relever sur le moteur le <strong>modèle complet</strong> et le <strong>numéro de série</strong>.<br>2. Choisir la vue éclatée du sous-ensemble concerné et vérifier qu'elle s'applique à ce numéro de série.<br>3. Repérer la pièce sur le dessin et lire son repère.<br>4. Lire dans la nomenclature la ligne correspondante : référence, désignation, quantité, remarques.<br>5. Vérifier si la pièce existe seulement dans un kit, ou si sa référence a été remplacée.<br>6. Ajouter les pièces associées : joints, rondelles, écrous autofreinés, goupilles, que la nomenclature donne avec leurs propres repères.<br>7. Établir la liste de commande : référence, désignation, quantité, et la relire.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la quantité de la nomenclature est celle utilisée dans le sous-ensemble, pas forcément celle à commander. Si une vis repère 12 apparaît en quantité 4 et qu'une seule est abîmée, on en commande une ; à l'inverse, si les quatre joints toriques d'un ensemble doivent être remplacés, on en commande quatre.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le document est la vue éclatée de la pompe à eau d'une embase de hors-bord, avec sa nomenclature. Le dessin montre de bas en haut, le long de l'arbre de transmission vertical : la plaque d'usure posée sur le carter d'embase avec son joint, la clavette sur l'arbre, la turbine, le corps de pompe muni d'une chemise en acier inoxydable, puis le couvercle supérieur fixé par quatre vis, et le tube d'eau qui monte vers le moteur avec son passe-tube en caoutchouc.</p>\n<table>\n<thead><tr><th>Rep.</th><th>Référence</th><th>Désignation</th><th>Qté</th><th>Remarques</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>PE-1101</td><td>Plaque d'usure</td><td>1</td><td>Comprise dans le kit rep. 10</td></tr>\n<tr><td>2</td><td>PE-1102</td><td>Joint de plaque</td><td>1</td><td>Compris dans le kit rep. 10</td></tr>\n<tr><td>3</td><td>PE-1103</td><td>Clavette de turbine</td><td>1</td><td>Comprise dans le kit rep. 10</td></tr>\n<tr><td>4</td><td>PE-1104-B</td><td>Turbine</td><td>1</td><td>Remplace PE-1104-A</td></tr>\n<tr><td>5</td><td>PE-1105</td><td>Corps de pompe</td><td>1</td><td></td></tr>\n<tr><td>6</td><td>PE-1106</td><td>Chemise de pompe</td><td>1</td><td>Comprise dans le kit rep. 10</td></tr>\n<tr><td>7</td><td>PE-1107</td><td>Vis de couvercle</td><td>4</td><td>Freinage préconisé</td></tr>\n<tr><td>8</td><td>PE-1108</td><td>Passe-tube d'eau</td><td>1</td><td></td></tr>\n<tr><td>9</td><td>PE-1109</td><td>Joint torique de tube</td><td>1</td><td></td></tr>\n<tr><td>10</td><td>PE-K110</td><td>Kit de réparation de pompe à eau</td><td>1</td><td>Comprend rep. 1, 2, 3, 4, 6</td></tr>\n</tbody>\n</table>\n<p>Situation : pendant une révision, le technicien constate que la turbine a perdu deux pales, que la chemise est rayée et que le passe-tube est durci. Les références ci-dessus sont fictives et servent seulement à l'exemple.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Pièces à remplacer.</strong> Turbine (rep. 4), chemise (rep. 6) et passe-tube (rep. 8). La plaque d'usure (rep. 1) doit être contrôlée : avec une chemise rayée, elle est probablement marquée elle aussi.</p>\n<p><strong>2. Choix entre pièces séparées et kit.</strong> Le kit rep. 10 contient la plaque, le joint, la clavette, la turbine et la chemise. Il couvre donc en une seule référence la turbine et la chemise à remplacer, plus les pièces associées qui doivent être neuves au remontage (joint, clavette). C'est le choix logique, souvent moins cher que les pièces séparées.</p>\n<p><strong>3. Pièces hors kit.</strong> Le passe-tube (rep. 8) et le joint torique du tube (rep. 9) ne sont pas dans le kit : on les ajoute.</p>\n<p><strong>4. Référence remplacée.</strong> La turbine PE-1104-A est remplacée par la PE-1104-B. Si l'atelier a encore la PE-1104-A en stock, il faut vérifier auprès du constructeur si elle reste utilisable ; en cas de doute, on monte la nouvelle.</p>\n<p><strong>5. Liste de commande.</strong></p>\n<table>\n<thead><tr><th>Référence</th><th>Désignation</th><th>Qté</th></tr></thead>\n<tbody>\n<tr><td>PE-K110</td><td>Kit de réparation de pompe à eau</td><td>1</td></tr>\n<tr><td>PE-1108</td><td>Passe-tube d'eau</td><td>1</td></tr>\n<tr><td>PE-1109</td><td>Joint torique de tube</td><td>1</td></tr>\n</tbody>\n</table>\n<p><strong>6. Ordre de remontage déduit de la vue.</strong> Joint et plaque d'usure, clavette, turbine engagée en tournant dans le sens de rotation de l'arbre, corps avec chemise, couvercle et vis serrées au couple avec le produit de freinage préconisé, puis tube d'eau avec passe-tube et joint neufs. Enfin, recherche des morceaux de pales manquants dans le circuit de refroidissement.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la colonne « Remarques » est souvent la plus importante. Elle signale les kits, les remplacements de référence et les plages de numéros de série.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une erreur de commande immobilise le bateau plusieurs jours, coûte des frais de retour et mécontente le client. Beaucoup d'ateliers font vérifier la liste de commande par le magasinier, qui compare les références au numéro de série dans le catalogue électronique.</div>"
      },
      {
       "titre": "Déduire une gamme de démontage d'une vue éclatée",
       "contenu": "<p>La vue éclatée ne dit pas seulement quoi commander : elle montre l'ordre dans lequel les pièces s'empilent. En règle générale, on démonte en partant des pièces les plus extérieures, le long de l'axe de montage, et on remonte dans l'ordre inverse. Les éléments que la vue ne montre pas, mais que la méthode impose, viennent s'y ajouter.</p>\n<p>Pour la pompe à eau étudiée, la gamme de démontage complète comprend des opérations préalables qui ne figurent pas sur le dessin de la pompe : mettre le moteur en sécurité (coupe-circuit retiré, bougies débranchées), déposer l'hélice, déposer l'embase après avoir désaccouplé la tringlerie d'inversion. Ces opérations se trouvent dans la vue éclatée de l'embase et dans la méthode.</p>\n<table>\n<thead><tr><th>Ordre</th><th>Opération</th><th>Point de contrôle</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Déposer les 4 vis du couvercle (rep. 7)</td><td>État des filetages, produit de freinage</td></tr>\n<tr><td>2</td><td>Déposer le corps de pompe (rep. 5) avec la chemise (rep. 6)</td><td>Rayures de la chemise</td></tr>\n<tr><td>3</td><td>Déposer la turbine (rep. 4) et la clavette (rep. 3)</td><td>Pales manquantes, durcissement</td></tr>\n<tr><td>4</td><td>Déposer la plaque d'usure (rep. 1) et le joint (rep. 2)</td><td>Rayures, déformation</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une vue éclatée ne montre pas les couples de serrage, les produits d'étanchéité ou de freinage, ni le sens de montage de certaines pièces. Ces informations se trouvent dans la méthode du manuel d'atelier ; une gamme rédigée sans elle est incomplète.</div>"
      }
     ],
     "points_cles": [
      "La vue éclatée montre les pièces écartées dans l'ordre et l'axe de montage.",
      "Le repère relie le dessin à la nomenclature ; la référence sert à commander.",
      "Toujours partir du modèle complet et du numéro de série.",
      "La colonne remarques signale kits, remplacements de référence et applicabilité.",
      "La quantité de la nomenclature n'est pas forcément la quantité à commander.",
      "Ajouter les pièces associées à usage unique : joints, clavettes, écrous.",
      "La vue éclatée donne aussi l'ordre de démontage et de remontage."
     ],
     "lexique": [
      {
       "terme": "Vue éclatée",
       "def": "Dessin en perspective des pièces d'un ensemble écartées dans l'ordre de montage."
      },
      {
       "terme": "Nomenclature",
       "def": "Tableau listant les pièces d'un ensemble avec repère, référence, désignation et quantité."
      },
      {
       "terme": "Repère",
       "def": "Numéro qui relie une pièce du dessin à une ligne de la nomenclature."
      },
      {
       "terme": "Référence",
       "def": "Code unique d'une pièce chez le constructeur."
      },
      {
       "terme": "Kit",
       "def": "Lot de pièces vendu sous une seule référence."
      },
      {
       "terme": "Plaque d'usure",
       "def": "Plaque remplaçable sur laquelle frotte la turbine d'une pompe à eau."
      },
      {
       "terme": "Chemise",
       "def": "Manchon remplaçable qui forme la paroi intérieure d'un corps de pompe ou d'un cylindre."
      },
      {
       "terme": "Catalogue électronique",
       "def": "Logiciel de consultation des vues éclatées et de commande des pièces."
      }
     ]
    },
    {
     "id": "bmn-doc-fiche-technique-fds",
     "titre": "Exploiter une fiche technique produit et une fiche de données de sécurité",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Distinguer fiche technique et fiche de données de sécurité et savoir quand utiliser chacune",
      "Extraire d'une fiche technique les conditions de mise en œuvre d'une résine ou d'une peinture",
      "Repérer dans une FDS les dangers, les protections et la conduite à tenir",
      "Calculer des quantités et des temps à partir des données d'une fiche",
      "Rédiger un mode opératoire sûr à partir des deux documents"
     ],
     "sections": [
      {
       "titre": "Deux documents complémentaires",
       "contenu": "<p>Pour chaque produit (résine, gelcoat, peinture, antifouling, mastic, solvant), le fabricant fournit deux documents différents :</p>\n<table>\n<thead><tr><th>Document</th><th>Objet</th><th>Contenu typique</th></tr></thead>\n<tbody>\n<tr><td>Fiche technique (FT)</td><td>Bien utiliser le produit</td><td>Description, supports compatibles, préparation, rapport de mélange, durée de vie en pot, conditions d'application, épaisseurs, rendement, temps de séchage et de recouvrement, nettoyage des outils</td></tr>\n<tr><td>Fiche de données de sécurité (FDS)</td><td>Protéger les personnes et l'environnement</td><td>16 rubriques réglementaires : identification, dangers, composition, premiers secours, incendie, déversement, manipulation et stockage, protections individuelles, propriétés, stabilité, toxicologie, écotoxicologie, élimination, transport, réglementation, autres informations</td></tr>\n</tbody>\n</table>\n<p>La FDS est obligatoire pour les produits dangereux et doit être accessible aux salariés. Les rubriques les plus utiles au poste de travail sont la <strong>rubrique 2</strong> (identification des dangers, pictogrammes, mentions H et conseils P), la <strong>rubrique 4</strong> (premiers secours), la <strong>rubrique 7</strong> (manipulation et stockage), la <strong>rubrique 8</strong> (contrôle de l'exposition et protections individuelles) et la <strong>rubrique 13</strong> (élimination).</p>\n<p>Vocabulaire : <strong>mention de danger</strong> (phrase codée H, par exemple H226 liquide et vapeurs inflammables), <strong>conseil de prudence</strong> (phrase codée P), <strong>point d'éclair</strong> (température à partir de laquelle les vapeurs s'enflamment au contact d'une flamme), <strong>extrait sec</strong> (part de la peinture qui reste après évaporation des solvants).</p>"
      },
      {
       "titre": "Méthode de lecture",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une application à partir de la FT et de la FDS.<br>1. Vérifier sur la FT que le produit convient au <strong>support</strong> (polyester, époxy, aluminium, ancien antifouling) et à l'<strong>usage</strong>.<br>2. Relever les <strong>conditions</strong> : température mini et maxi de l'air et du support, hygrométrie, écart au point de rosée.<br>3. Relever le <strong>rapport de mélange</strong>, la <strong>durée de vie en pot</strong>, les <strong>temps de recouvrement</strong> mini et maxi, le délai avant remise à l'eau.<br>4. Calculer la <strong>quantité</strong> à partir du rendement et de la surface.<br>5. Lire la FDS rubriques 2, 7, 8 : dangers, ventilation, EPI précis (type de gants, de filtre).<br>6. Lire les rubriques 4 et 13 : premiers secours, élimination des restes et emballages.<br>7. Rédiger un mode opératoire court qui réunit ces informations.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les temps de séchage d'une fiche technique sont donnés pour une température de référence (souvent 20 °C). Par temps froid, ils s'allongent fortement ; par temps chaud, la durée de vie en pot raccourcit. Lire le tableau en fonction de la température réelle du chantier.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le document réunit des extraits de la fiche technique et de la FDS d'un système de résine époxy de stratification (base et durcisseur) utilisé pour une réparation sur une coque polyester. Le produit est fictif, les valeurs sont représentatives.</p>\n<h4>Extrait de la fiche technique</h4>\n<table>\n<thead><tr><th>Caractéristique</th><th>Valeur</th></tr></thead>\n<tbody>\n<tr><td>Rapport de mélange</td><td>100 / 25 en masse (base / durcisseur)</td></tr>\n<tr><td>Durée de vie en pot (100 g à 20 °C)</td><td>25 min</td></tr>\n<tr><td>Température d'application</td><td>15 à 30 °C, support au moins 3 °C au-dessus du point de rosée</td></tr>\n<tr><td>Hors poussière à 20 °C</td><td>4 h</td></tr>\n<tr><td>Recouvrement sans ponçage à 20 °C</td><td>entre 4 h et 24 h ; au-delà, ponçage obligatoire</td></tr>\n<tr><td>Durcissement complet à 20 °C</td><td>7 jours</td></tr>\n<tr><td>Consommation indicative</td><td>environ 1 kg de mélange par kg de tissu en stratification au contact</td></tr>\n</tbody>\n</table>\n<h4>Extraits de la FDS du durcisseur</h4>\n<ul>\n<li>Rubrique 2 : pictogrammes « corrosion » et « point d'exclamation » ; mentions H314 (provoque des brûlures de la peau et de graves lésions des yeux), H317 (peut provoquer une allergie cutanée).</li>\n<li>Rubrique 4 : en cas de contact avec la peau, enlever les vêtements contaminés et laver abondamment à l'eau ; en cas de projection dans les yeux, rincer avec précaution pendant plusieurs minutes et consulter un médecin.</li>\n<li>Rubrique 8 : gants en caoutchouc nitrile, lunettes de protection étanches, vêtements à manches longues ; ventilation adaptée.</li>\n<li>Rubrique 13 : éliminer les restes non durcis comme déchets dangereux ; les mélanges complètement durcis peuvent suivre la filière indiquée par la réglementation locale.</li>\n</ul>\n<p>Situation : réparation nécessitant 0,8 kg de tissu biaxial, réalisée sur un bateau au sec sous un hangar où la température est de 14 °C le matin et de 19 °C l'après-midi.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Compatibilité.</strong> Une résine époxy convient à une réparation sur coque polyester : elle adhère bien sur un polyester préparé.</p>\n<p><strong>2. Conditions.</strong> Le matin, 14 °C est sous le minimum de 15 °C : la polymérisation risque d'être incomplète. Il faut stratifier l'après-midi, ou chauffer la zone et le hangar, en vérifiant aussi le point de rosée pour éviter la condensation sur le support.</p>\n<p><strong>3. Quantités.</strong> Environ 0,8 kg de mélange pour 0,8 kg de tissu. Avec un rapport 100 / 25 en masse, le mélange compte 100 parts de base pour 125 parts au total : base = 0,8 × 100 / 125 = 0,64 kg ; durcisseur = 0,8 × 25 / 125 = 0,16 kg. On prépare en plusieurs petits mélanges, car la durée de vie en pot n'est que de 25 min pour 100 g à 20 °C, et elle diminue quand la masse mélangée augmente.</p>\n<p><strong>4. Enchaînement.</strong> Si une couche de finition ou un enduit doit suivre, on l'applique entre 4 h et 24 h après la stratification à 20 °C ; au-delà, on ponce. À une température plus basse, ces délais s'allongent. Le bateau ne sera sollicité qu'après le durcissement complet indiqué, soit environ une semaine à 20 °C.</p>\n<p><strong>5. Sécurité.</strong> Le durcisseur est corrosif et sensibilisant : gants nitrile, lunettes étanches, manches longues, ventilation. Une bouteille de rinçage oculaire est placée à proximité. Les restes non durcis et les pots souillés vont dans le fût des déchets dangereux.</p>\n<p><strong>6. Mode opératoire rédigé.</strong> « Stratifier l'après-midi à 15 °C minimum ; peser 0,64 kg de base et 0,16 kg de durcisseur en quatre mélanges successifs de 200 g ; porter gants nitrile, lunettes étanches et manches longues ; recouvrir entre 4 h et 24 h ; éliminer les restes en déchets dangereux. »</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la fiche technique dit comment réussir le travail, la FDS dit comment le faire sans danger. Une réponse complète s'appuie sur les deux.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les FDS sont rangées dans un classeur ou un dossier numérique accessible à tous près de la zone de stockage des produits. Lors d'un accident (projection, malaise), on emporte la FDS du produit en cause pour la remettre aux secours.</div>"
      },
      {
       "titre": "Particularités d'une fiche d'antifouling et pièges de lecture",
       "contenu": "<p>La fiche technique d'un <strong>antifouling</strong> comporte des rubriques propres : supports et anciens antifoulings compatibles, nombre de couches recommandé, épaisseur de film sec visée (en µm), rendement théorique (en m²/L), délais de recouvrement et délai minimal et maximal avant <strong>remise à l'eau</strong>, type d'eau (mer, eau douce), incompatibilités (par exemple l'aluminium pour les produits au cuivre). Sa FDS précise la présence de biocides et les précautions de ponçage et d'élimination.</p>\n<p>Le <strong>rendement théorique</strong> se calcule à partir de l'extrait sec en volume et de l'épaisseur sèche visée : rendement (m²/L) = extrait sec en volume (%) × 10 / épaisseur sèche (µm). Par exemple, 50 % d'extrait sec et 40 µm sec donnent 50 × 10 / 40 = 12,5 m²/L. Le <strong>rendement pratique</strong> est plus faible à cause des pertes (rouleau, bac, surface rugueuse) : les fabricants conseillent souvent de majorer la quantité.</p>\n<ul>\n<li><strong>Confondre FT et FDS</strong> : une question sur les EPI se traite avec la FDS, une question sur le délai de recouvrement avec la FT.</li>\n<li><strong>Ignorer les unités du rapport de mélange</strong> : un rapport en masse et un rapport en volume ne donnent pas les mêmes quantités.</li>\n<li><strong>Lire les pictogrammes sans les mentions H</strong> : un même pictogramme couvre plusieurs dangers différents.</li>\n<li><strong>Oublier la date de révision</strong> de la FDS : une version ancienne peut ne plus correspondre à la composition du produit.</li>\n</ul>"
      }
     ],
     "points_cles": [
      "La fiche technique explique la mise en œuvre ; la FDS explique les dangers et les protections.",
      "La FDS comporte 16 rubriques ; les rubriques 2, 4, 7, 8 et 13 sont essentielles au poste.",
      "Les mentions H décrivent les dangers, les conseils P les précautions.",
      "Les temps de la fiche technique sont donnés à une température de référence.",
      "Un rapport 100 / 25 en masse signifie 100 parts de base pour 25 de durcisseur, soit 125 au total.",
      "Préparer de petits mélanges quand la durée de vie en pot est courte.",
      "Respecter température minimale, point de rosée et fenêtre de recouvrement."
     ],
     "lexique": [
      {
       "terme": "Fiche technique",
       "def": "Document du fabricant qui décrit les caractéristiques et la mise en œuvre d'un produit."
      },
      {
       "terme": "Mention de danger",
       "def": "Phrase codée H qui décrit la nature d'un danger."
      },
      {
       "terme": "Conseil de prudence",
       "def": "Phrase codée P qui indique une mesure de prévention ou de réaction."
      },
      {
       "terme": "Point d'éclair",
       "def": "Température à partir de laquelle les vapeurs d'un liquide peuvent s'enflammer au contact d'une flamme."
      },
      {
       "terme": "Point de rosée",
       "def": "Température à laquelle la vapeur d'eau de l'air se condense sur une surface."
      },
      {
       "terme": "Temps de recouvrement",
       "def": "Délai minimal et maximal pour appliquer une nouvelle couche."
      },
      {
       "terme": "Extrait sec",
       "def": "Part d'une peinture qui reste après évaporation des solvants."
      },
      {
       "terme": "Rendement",
       "def": "Surface couverte par une quantité donnée de produit, par exemple en m² par litre."
      }
     ]
    },
    {
     "id": "bmn-doc-courbes-moteur-rapport-essai",
     "titre": "Analyser des courbes moteur et un rapport d'essai en mer",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Lire les courbes de couple, de puissance et de consommation d'un moteur marin",
      "Relier la plage de régime maximal recommandée au choix de l'hélice",
      "Exploiter un relevé d'essai en mer : régime, vitesse, consommation, trim",
      "Calculer des grandeurs dérivées : consommation au mille, recul, autonomie",
      "Formuler une conclusion et une préconisation argumentées"
     ],
     "sections": [
      {
       "titre": "Les documents de performance",
       "contenu": "<p>Les constructeurs de moteurs publient des <strong>courbes caractéristiques</strong> et des fiches de performances. Les constructeurs de bateaux et les magazines publient des <strong>relevés d'essai</strong>. À l'atelier, le technicien réalise lui-même des essais pour valider un choix d'hélice, une remotorisation ou une réparation.</p>\n<table>\n<thead><tr><th>Document</th><th>Axes ou colonnes</th><th>Ce qu'on y cherche</th></tr></thead>\n<tbody>\n<tr><td>Courbes de couple et de puissance</td><td>Abscisse : régime (tr/min) ; ordonnées : couple (N·m), puissance (kW ou ch)</td><td>Régime de couple maximal, puissance maximale, plage d'utilisation</td></tr>\n<tr><td>Courbe de consommation</td><td>Abscisse : régime ; ordonnée : consommation (L/h) ou consommation spécifique (g/kWh)</td><td>Régime économique, consommation de croisière</td></tr>\n<tr><td>Courbe d'hélice</td><td>Puissance absorbée par une hélice théorique selon le régime</td><td>Écart entre puissance disponible et puissance absorbée à chaque régime</td></tr>\n<tr><td>Relevé d'essai</td><td>Régime, vitesse GPS, consommation, trim, conditions</td><td>Performances réelles du bateau équipé</td></tr>\n</tbody>\n</table>\n<p>Vocabulaire : <strong>plage de régime maximal recommandée</strong> (ou plage de pleins gaz, wide open throttle), <strong>régime de croisière</strong>, <strong>déjaugeage</strong> (passage au planing), <strong>consommation au mille</strong> (L/mille), <strong>charge</strong> du bateau lors de l'essai.</p>"
      },
      {
       "titre": "Méthode de lecture",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une courbe ou un tableau de performances.<br>1. Lire le titre, les axes, les unités et les conditions (charge, carburant, hélice, température).<br>2. Relever les valeurs remarquables : couple maximal et son régime, puissance maximale et son régime, plage de pleins gaz recommandée.<br>3. Pour un relevé d'essai, calculer les grandeurs dérivées : consommation au mille = consommation horaire / vitesse ; recul si l'on connaît pas et réduction.<br>4. Comparer le régime atteint à pleins gaz à la plage recommandée.<br>5. Repérer le régime où la consommation au mille est la plus faible une fois le bateau déjaugé : c'est le meilleur régime de croisière.<br>6. Conclure : conformité, anomalies, préconisations.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la consommation horaire la plus faible n'est pas la plus économique pour parcourir une distance. Au ralenti, le bateau consomme peu par heure mais avance très lentement ; juste avant le déjaugeage, il consomme beaucoup pour une vitesse faible. On compare toujours les litres par mille.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le document est le rapport d'essai d'une coque open de 6,50 m équipée d'un hors-bord de 150 ch, réalisé par l'atelier après remotorisation. Données moteur (fiche constructeur) : plage de régime maximal recommandée 5 000 à 6 000 tr/min ; réduction de l'embase 2,00:1. Hélice montée : inox 3 pales, 14,5 × 21 pouces. Conditions : mer belle, vent faible, 2 personnes, réservoir à moitié plein (charge habituelle du client : 4 personnes et réservoir plein).</p>\n<table>\n<thead><tr><th>Régime (tr/min)</th><th>Vitesse GPS (nœuds)</th><th>Consommation (L/h)</th><th>Trim</th><th>Observations</th></tr></thead>\n<tbody>\n<tr><td>1 000</td><td>4,0</td><td>2,0</td><td>Rentré</td><td>Déplacement</td></tr>\n<tr><td>2 500</td><td>8,5</td><td>11,0</td><td>Rentré</td><td>Bateau cabré, sillage important</td></tr>\n<tr><td>3 500</td><td>20,0</td><td>18,0</td><td>Neutre</td><td>Déjaugé</td></tr>\n<tr><td>4 000</td><td>25,0</td><td>23,0</td><td>Légèrement sorti</td><td></td></tr>\n<tr><td>4 500</td><td>29,5</td><td>30,0</td><td>Sorti</td><td></td></tr>\n<tr><td>5 000</td><td>33,5</td><td>40,0</td><td>Sorti</td><td></td></tr>\n<tr><td>5 250 (pleins gaz)</td><td>35,0</td><td>47,0</td><td>Sorti</td><td>Régime maximal atteint</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Régime à pleins gaz.</strong> 5 250 tr/min est dans la plage recommandée (5 000 à 6 000), mais dans le bas de cette plage, et l'essai a été fait avec un bateau peu chargé. Avec la charge habituelle (4 personnes, plein), le régime baissera, probablement sous 5 000 tr/min : le moteur serait alors surchargé.</p>\n<p><strong>2. Consommation au mille.</strong></p>\n<table>\n<thead><tr><th>Régime</th><th>Calcul</th><th>L/mille</th></tr></thead>\n<tbody>\n<tr><td>2 500</td><td>11,0 / 8,5</td><td>1,29</td></tr>\n<tr><td>3 500</td><td>18,0 / 20,0</td><td>0,90</td></tr>\n<tr><td>4 000</td><td>23,0 / 25,0</td><td>0,92</td></tr>\n<tr><td>4 500</td><td>30,0 / 29,5</td><td>1,02</td></tr>\n<tr><td>5 250</td><td>47,0 / 35,0</td><td>1,34</td></tr>\n</tbody>\n</table>\n<p>Le meilleur régime de croisière se situe entre 3 500 et 4 000 tr/min (environ 0,9 L par mille pour 20 à 25 nœuds). À 2 500 tr/min, juste avant le déjaugeage, la consommation au mille est mauvaise : c'est un régime à éviter en navigation.</p>\n<p><strong>3. Recul à pleins gaz.</strong> Pas : 21 × 0,0254 = 0,5334 m. Régime hélice : 5 250 / 2,00 = 2 625 tr/min. Vitesse théorique : 0,5334 × 2 625 × 60 / 1 852 ≈ 45,4 nœuds. Recul : (45,4 - 35,0) / 45,4 ≈ 0,23, soit environ 23 %, valeur élevée pour cette vitesse : l'hélice semble trop « longue » (pas trop grand) pour ce bateau, ou mal adaptée (ventilation dans les virages à vérifier).</p>\n<p><strong>4. Conclusion et préconisation.</strong> « Le moteur atteint 5 250 tr/min à pleins gaz avec une charge réduite, en bas de la plage recommandée. En charge normale, il risque de ne pas atteindre 5 000 tr/min. Il est préconisé d'essayer une hélice de pas 19 pouces (un ou deux pouces de moins), qui devrait faire remonter le régime maximal d'environ 300 à 400 tr/min selon la règle pratique usuelle, puis de refaire l'essai en charge habituelle. Le régime de croisière conseillé au client est de 3 500 à 4 000 tr/min. »</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un essai n'a de valeur que si ses conditions sont connues. Une conclusion sur le choix de l'hélice doit tenir compte de la charge réelle d'utilisation.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les ateliers conservent un jeu d'hélices d'essai de pas différents pour les moteurs qu'ils vendent le plus. L'essai comparatif, noté dans un rapport remis au client, justifie le choix final et évite les retours.</div>"
      },
      {
       "titre": "Les pièges de lecture",
       "contenu": "<ul>\n<li><strong>Confondre puissance au vilebrequin et à l'hélice</strong> : la fiche indique laquelle ; les pertes de transmission font la différence.</li>\n<li><strong>Lire une courbe sans ses unités</strong> : ch ou kW, L/h ou g/kWh changent complètement la valeur lue.</li>\n<li><strong>Oublier la réduction de l'embase</strong> dans le calcul de la vitesse théorique : on obtiendrait une vitesse deux fois trop grande.</li>\n<li><strong>Comparer des essais faits dans des conditions différentes</strong> (charge, mer, carène sale ou propre) sans le signaler.</li>\n<li><strong>Extrapoler au-delà des données</strong> : une règle pratique donne un ordre de grandeur, seul un nouvel essai le confirme.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer une autonomie à partir du relevé.<br>Réservoir de 200 L, régime de croisière 4 000 tr/min (23 L/h, 25 nœuds), réserve d'un tiers.<br>1. Carburant utilisable : 200 × 2 / 3 ≈ 133 L.<br>2. Durée : 133 / 23 ≈ 5,8 h.<br>3. Distance : 5,8 × 25 = 145 milles, soit un rayon d'action d'environ 72 milles aller-retour.</div>"
      },
      {
       "titre": "Lire les courbes de couple et de puissance",
       "contenu": "<p>Les courbes de couple et de puissance d'un moteur sont tracées sur le même graphique, régime en abscisse. Exemple décrit d'un diesel marin de 75 ch : la courbe de couple monte de 160 N·m à 1 000 tr/min jusqu'à un maximum d'environ 205 N·m vers 2 000 tr/min, reste presque plate jusqu'à 2 600 tr/min puis redescend à 175 N·m à 3 000 tr/min, régime maximal. La courbe de puissance croît régulièrement jusqu'à environ 55 kW à 3 000 tr/min. Une troisième courbe, la courbe d'hélice théorique, part de presque zéro et rejoint la puissance maximale au régime maximal en suivant une forme en « loi cubique ».</p>\n<p>Ce qu'on en tire :</p>\n<ul>\n<li>Le moteur offre un couple élevé sur une large plage, ce qui est favorable aux bateaux lourds ou aux voiliers au moteur contre la mer.</li>\n<li>Vérification à 3 000 tr/min : P = 175 × 2 × π × 3 000 / 60 ≈ 55 kW, soit environ 75 ch : la lecture est cohérente.</li>\n<li>Entre la courbe de puissance disponible et la courbe d'hélice, l'écart représente la réserve de puissance à un régime donné. Elle est grande à mi-régime : c'est ce qui permet d'accélérer ; elle devient nulle au régime maximal si l'hélice est bien choisie.</li>\n<li>Le régime de croisière d'un diesel se choisit souvent quelques centaines de tours sous le régime maximal, là où la consommation spécifique est la plus favorable, selon les recommandations du constructeur.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> vérifier une lecture de courbe par le calcul P = C × ω est un bon réflexe : une incohérence révèle souvent une erreur d'unité ou de lecture d'échelle.</div>"
      }
     ],
     "points_cles": [
      "Une courbe se lit avec ses axes, ses unités et ses conditions.",
      "Le régime à pleins gaz en charge habituelle doit se situer dans la plage recommandée.",
      "Consommation au mille = consommation horaire / vitesse.",
      "Le meilleur régime de croisière minimise les litres par mille une fois déjaugé.",
      "La vitesse théorique tient compte du pas et de la réduction de l'embase.",
      "Un recul élevé oriente vers une hélice inadaptée.",
      "Une conclusion d'essai donne les conditions, les valeurs, l'écart et la préconisation."
     ],
     "lexique": [
      {
       "terme": "Courbe caractéristique",
       "def": "Courbe du couple, de la puissance ou de la consommation en fonction du régime."
      },
      {
       "terme": "Plage de régime maximal",
       "def": "Intervalle de régime que le moteur doit atteindre à pleins gaz."
      },
      {
       "terme": "Régime de croisière",
       "def": "Régime d'utilisation prolongée offrant un bon compromis vitesse et consommation."
      },
      {
       "terme": "Déjaugeage",
       "def": "Passage d'une coque planante du mode déplacement au mode planing."
      },
      {
       "terme": "Consommation au mille",
       "def": "Quantité de carburant consommée pour parcourir un mille marin."
      },
      {
       "terme": "Rapport d'essai",
       "def": "Document qui consigne les conditions et résultats d'un essai."
      },
      {
       "terme": "Courbe d'hélice",
       "def": "Courbe de la puissance absorbée par une hélice en fonction du régime."
      },
      {
       "terme": "Nœud",
       "def": "Unité de vitesse égale à un mille marin par heure, soit 1 852 m/h."
      }
     ]
    }
   ]
  }
 ]
};
