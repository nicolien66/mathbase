/* Polymates — Bac pro Optique lunetterie — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-optique"] = {
 "id": "bp-optique",
 "nom": "Optique lunetterie",
 "icone": "🎓",
 "couleur": "#82b4d2",
 "intro": "Le bac pro Optique lunetterie forme des techniciens et techniciennes qui travaillent en magasin d'optique, en atelier de montage ou chez les fabricants, sous la responsabilité d'un opticien diplômé : accueil et conseil du client, prise de mesures, réalisation, contrôle et réparation des équipements. Ce cours couvre les savoirs associés de première et de terminale (optique géométrique, vision, adaptation et prise de mesures, réalisation et contrôle, sécurité, qualité et communication professionnelle) en rappelant au besoin les bases vues en seconde. Il comprend deux blocs : un cours théorique et un bloc d'analyse de documents qui montre comment exploiter ordonnances, fiches clients, catalogues verriers, bons de travail, tickets de contrôle et notices techniques, tels qu'ils sont fournis à l'épreuve écrite d'étude et de suivi de dossier.",
 "parties": [
  {
   "titre": "Partie 1 — Optique géométrique et systèmes optiques",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bopt-lumiere-reflexion-refraction",
     "titre": "Propagation de la lumière, réflexion, réfraction et prismes",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Appliquer le modèle du rayon lumineux et le principe du retour inverse",
      "Utiliser les lois de Descartes pour la réflexion et la réfraction",
      "Déterminer l'image donnée par un miroir plan et l'effet d'une rotation du miroir",
      "Calculer un angle limite et reconnaître une réflexion totale",
      "Décrire la déviation produite par une lame à faces parallèles et par un prisme",
      "Exprimer une déviation prismatique en dioptries prismatiques et l'orienter sur un équipement"
     ],
     "sections": [
      {
       "titre": "Rappels : la lumière et le modèle du rayon",
       "contenu": "<p>En seconde, les notions de source, de milieu transparent et d'indice ont été abordées. On les reprend ici en vocabulaire d'opticien. Dans un <strong>milieu homogène et isotrope</strong> (mêmes propriétés en tout point et dans toutes les directions), la lumière se propage en ligne droite : c'est la <strong>propagation rectiligne</strong>. On la représente par des <strong>rayons lumineux</strong>, droites orientées par une flèche dans le sens de propagation. Un ensemble de rayons forme un <strong>faisceau</strong>, qui peut être <strong>convergent</strong> (les rayons se rapprochent), <strong>divergent</strong> (ils s'écartent) ou <strong>parallèle</strong> (source à l'infini, par exemple un objet situé à plus de 5 à 6 m pour l'œil).</p>\n<p>La vitesse de la lumière dans le vide vaut c ≈ 3,00 × 10<sup>8</sup> m/s. Dans un milieu transparent, elle est plus faible ; l'<strong>indice de réfraction</strong> n du milieu est le rapport n = c / v, toujours supérieur ou égal à 1. Il dépend de la longueur d'onde : les verriers indiquent souvent l'indice pour une raie de référence (raie e à 546,1 nm ou raie d à 587,6 nm).</p>\n<table>\n<thead><tr><th>Milieu</th><th>Indice (valeur courante)</th><th>Intérêt pour l'opticien</th></tr></thead>\n<tbody>\n<tr><td>Air</td><td>1,000 (pris égal à 1)</td><td>Milieu entre verre et œil</td></tr>\n<tr><td>Eau, humeur aqueuse</td><td>1,333 à 1,336</td><td>Milieux de l'œil</td></tr>\n<tr><td>Cornée</td><td>1,376</td><td>Premier dioptre de l'œil</td></tr>\n<tr><td>Verre organique CR 39</td><td>1,50</td><td>Matériau organique de base</td></tr>\n<tr><td>Verre minéral crown</td><td>1,523</td><td>Matériau minéral de base</td></tr>\n<tr><td>Polycarbonate</td><td>1,59</td><td>Verres de sécurité, enfants</td></tr>\n<tr><td>Organiques haut indice</td><td>1,60 ; 1,67 ; 1,74</td><td>Verres amincis pour fortes corrections</td></tr>\n</tbody>\n</table>\n<p>Le <strong>principe du retour inverse de la lumière</strong> énonce que le trajet suivi par la lumière ne dépend pas du sens de parcours : si un rayon va de A vers B, un rayon partant de B en sens inverse suit exactement le même chemin. Ce principe est constamment utilisé en optique ophtalmique : on raisonne indifféremment depuis l'objet vers l'œil ou depuis l'œil vers l'objet.</p>"
      },
      {
       "titre": "La réflexion et le miroir plan",
       "contenu": "<p>Lorsqu'un rayon rencontre une surface réfléchissante, il est renvoyé dans le milieu d'origine. On appelle <strong>point d'incidence</strong> I le point de rencontre et <strong>normale</strong> la droite perpendiculaire à la surface en I. Les angles se mesurent toujours par rapport à la normale.</p>\n<p><strong>Lois de Descartes pour la réflexion</strong> : le rayon réfléchi est dans le <strong>plan d'incidence</strong> (plan formé par le rayon incident et la normale) ; l'angle de réflexion est égal à l'angle d'incidence, en valeur absolue : i' = −i en angles orientés.</p>\n<p>Un <strong>miroir plan</strong> donne d'un objet une image <strong>symétrique</strong> par rapport au plan du miroir : même taille, même distance au miroir, mais de l'autre côté. Pour un objet réel, l'image est <strong>virtuelle</strong> (les rayons réfléchis semblent provenir d'elle sans y passer). Le miroir plan est <strong>rigoureusement stigmatique</strong> : tout point objet donne un point image unique.</p>\n<ul>\n<li>Si le miroir se <strong>translate</strong> d'une distance d perpendiculairement à son plan, l'image se déplace de 2d dans le même sens.</li>\n<li>Si le miroir <strong>tourne</strong> d'un angle α autour d'un axe situé dans son plan, le rayon réfléchi tourne de 2α.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le miroir de présentation du magasin et les tests de vision de près utilisent le miroir plan. Dans une salle d'examen trop courte, on place le projecteur de tests derrière le client et on fait observer l'image dans un miroir : une salle de 3 m donne alors une distance optique d'environ 6 m, considérée comme l'infini pour la vision de loin.</div>"
      },
      {
       "titre": "La réfraction et l'angle limite",
       "contenu": "<p>Lorsqu'un rayon traverse la surface de séparation entre deux milieux transparents d'indices différents, il change de direction : c'est la <strong>réfraction</strong>. La surface de séparation s'appelle un <strong>dioptre</strong>.</p>\n<p><strong>Lois de Descartes pour la réfraction</strong> : le rayon réfracté est dans le plan d'incidence, et les angles vérifient n<sub>1</sub> × sin i<sub>1</sub> = n<sub>2</sub> × sin i<sub>2</sub>, où i<sub>1</sub> est l'angle d'incidence dans le milieu 1 et i<sub>2</sub> l'angle de réfraction dans le milieu 2.</p>\n<ul>\n<li>Passage vers un milieu plus réfringent (n<sub>2</sub> &gt; n<sub>1</sub>) : le rayon se rapproche de la normale.</li>\n<li>Passage vers un milieu moins réfringent (n<sub>2</sub> &lt; n<sub>1</sub>) : le rayon s'écarte de la normale. Au-delà d'un certain angle, il n'y a plus de rayon réfracté : toute la lumière est réfléchie, c'est la <strong>réflexion totale</strong>.</li>\n</ul>\n<p>L'<strong>angle limite</strong> λ, angle d'incidence au-delà duquel la réflexion est totale, vérifie sin λ = n<sub>2</sub> / n<sub>1</sub>. Pour un verre d'indice 1,50 dans l'air, sin λ = 1 / 1,50 ≈ 0,667, soit λ ≈ 41,8°.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un angle de réfraction. Un rayon arrive de l'air sur un verre d'indice 1,60 sous une incidence de 30°.<br>1. Écrire la loi : 1,00 × sin 30° = 1,60 × sin i<sub>2</sub>.<br>2. Isoler : sin i<sub>2</sub> = 0,500 / 1,60 = 0,3125.<br>3. Calculer à la calculatrice en mode degrés : i<sub>2</sub> = arcsin 0,3125 ≈ 18,2°.<br>4. Vérifier la cohérence : le verre est plus réfringent que l'air, le rayon se rapproche de la normale (18,2° &lt; 30°). Le résultat est plausible.</div>\n<p>À l'interface, une partie de la lumière est toujours réfléchie. Sous incidence normale, le <strong>facteur de réflexion</strong> d'une face vaut R = ((n − 1) / (n + 1))<sup>2</sup> : environ 4 % pour n = 1,50 et environ 6,3 % pour n = 1,67. Ces reflets, gênants pour le porteur et visibles par l'interlocuteur, justifient le traitement antireflet étudié avec les verres.</p>"
      },
      {
       "titre": "La lame à faces parallèles",
       "contenu": "<p>Une <strong>lame à faces parallèles</strong> est un milieu transparent limité par deux dioptres plans parallèles : vitre, verre neutre plan, lame de protection d'un appareil. Un rayon qui la traverse subit deux réfractions de sens opposés. Le rayon émergent est <strong>parallèle</strong> au rayon incident : la lame ne dévie pas la lumière, elle la <strong>décale</strong> latéralement. Le décalage augmente avec l'épaisseur de la lame, avec son indice et avec l'angle d'incidence ; il est nul sous incidence normale.</p>\n<p>Pour un objet observé à travers une lame, l'image est légèrement rapprochée de la lame. En incidence quasi normale, le déplacement apparent vaut environ e × (1 − 1/n), où e est l'épaisseur. Une lame de 3 mm d'indice 1,5 rapproche ainsi l'image d'environ 1 mm.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un verre « plan » (puissance nulle) se comporte comme une lame à faces parallèles : il ne dévie pas les rayons et ne modifie pas la vergence. Un verre neutre solaire ou de protection doit donc être vérifié au frontofocomètre : une puissance ou un prisme résiduel signale un défaut de fabrication.</div>"
      },
      {
       "titre": "Le prisme : déviation et dispersion",
       "contenu": "<p>Un <strong>prisme</strong> est un milieu transparent limité par deux dioptres plans non parallèles. La droite d'intersection des deux faces est l'<strong>arête</strong>, l'angle entre les faces est l'<strong>angle au sommet</strong> A, et la partie opposée à l'arête est la <strong>base</strong>. Un rayon qui traverse le prisme est <strong>dévié vers la base</strong>. L'angle entre le rayon incident et le rayon émergent est la <strong>déviation</strong> D.</p>\n<p>Formules du prisme (angles orientés, rayon dans un plan de section principale) :</p>\n<ul>\n<li>sin i = n × sin r et n × sin r' = sin i' ;</li>\n<li>A = r + r' ;</li>\n<li>D = i + i' − A.</li>\n</ul>\n<p>Pour un <strong>prisme mince</strong> (A petit, quelques degrés) traversé sous incidence faible, la déviation devient indépendante de l'incidence : D ≈ (n − 1) × A. C'est toujours le cas des prismes rencontrés en lunetterie.</p>\n<p>Un objet vu à travers un prisme paraît <strong>déplacé vers l'arête</strong> (puisque les rayons sont déviés vers la base, l'œil les prolonge en sens opposé). Le prisme <strong>disperse</strong> aussi la lumière : l'indice varie avec la longueur d'onde, le bleu est plus dévié que le rouge. Cette dispersion est caractérisée par la <strong>constringence</strong> (ou nombre d'Abbe) ν : plus ν est faible, plus le matériau est dispersif. Le CR 39 a une constringence de l'ordre de 58, le polycarbonate de l'ordre de 30 ; un porteur sensible peut percevoir des liserés colorés en regardant par le bord d'un verre fort en matériau dispersif.</p>"
      },
      {
       "titre": "La dioptrie prismatique et l'orientation des prismes",
       "contenu": "<p>En lunetterie, la puissance d'un prisme ne s'exprime pas en degrés mais en <strong>dioptries prismatiques</strong>, symbole Δ (souvent écrit « dp » sur les fiches). Un prisme de 1 Δ dévie un rayon de 1 cm sur un écran placé à 1 m. Si P est la puissance prismatique, la déviation δ vérifie tan δ = P / 100. Pour un prisme mince d'angle A, P ≈ 100 × (n − 1) × A (A en radians).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> convertir une déviation en dioptries prismatiques. Un prisme d'indice 1,50 a un angle au sommet de 4°.<br>1. Déviation du prisme mince : D ≈ (1,50 − 1) × 4° = 2°.<br>2. Conversion : P = 100 × tan 2° ≈ 100 × 0,0349 ≈ 3,5 Δ.<br>3. Contrôle de l'ordre de grandeur : 1 Δ correspond à environ 0,57° de déviation ; 2° / 0,57 ≈ 3,5 Δ. Les deux calculs concordent.</div>\n<p>Sur une ordonnance ou une fiche de montage, chaque prisme est défini par sa <strong>puissance</strong> et l'<strong>orientation de sa base</strong>, vue par l'opérateur placé face au porteur :</p>\n<table>\n<thead><tr><th>Désignation</th><th>Position de la base</th><th>Usage courant</th></tr></thead>\n<tbody>\n<tr><td>Base interne (BI)</td><td>Côté nez</td><td>Soulager un défaut de convergence en vision de près</td></tr>\n<tr><td>Base externe (BE)</td><td>Côté tempe</td><td>Compenser une tendance à la déviation vers l'intérieur</td></tr>\n<tr><td>Base supérieure (base haute)</td><td>Vers le haut</td><td>Défauts verticaux</td></tr>\n<tr><td>Base inférieure (base basse)</td><td>Vers le bas</td><td>Défauts verticaux, amincissement des progressifs</td></tr>\n</tbody>\n</table>\n<p>On utilise aussi une notation par angle de 0° à 360° (base à 90° = base haute, base à 270° = base basse), selon la convention des axes vue de face. Attention, 0° correspond à la droite de l'opérateur pour les deux yeux : la base à 0° est donc interne (côté nez) pour l'œil droit et externe (côté tempe) pour l'œil gauche.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'abréviation BI peut signifier « base interne » sur un document et « base inférieure » sur un autre. Vérifier toujours la légende de l'ordonnance ou du logiciel et, en cas de doute, demander confirmation au prescripteur plutôt que de deviner : un prisme inversé double l'effet au lieu de le compenser.</div>\n<p>Un verre correcteur ne contient pas forcément de prisme taillé : tout verre de puissance non nulle produit un <strong>effet prismatique</strong> dès que le regard passe en dehors de son centre optique. Cet effet induit, calculé par la règle de Prentice, sera étudié avec les lentilles et le centrage.</p>"
      }
     ],
     "points_cles": [
      "Dans un milieu homogène et isotrope, la lumière se propage en ligne droite ; le trajet est le même dans les deux sens (retour inverse).",
      "L'indice n = c / v caractérise un milieu ; il dépend légèrement de la longueur d'onde.",
      "Réflexion : angle de réflexion égal à l'angle d'incidence ; un miroir plan donne une image symétrique, virtuelle pour un objet réel.",
      "Réfraction : n1 sin i1 = n2 sin i2 ; réflexion totale au-delà de l'angle limite sin λ = n2 / n1 quand on passe vers un milieu moins réfringent.",
      "Chaque face d'un verre réfléchit environ 4 % de la lumière pour n = 1,5, davantage pour les hauts indices.",
      "Une lame à faces parallèles décale les rayons sans les dévier.",
      "Un prisme dévie la lumière vers sa base ; l'image paraît déplacée vers l'arête ; pour un prisme mince D ≈ (n − 1) A.",
      "1 Δ = déviation de 1 cm à 1 m ; un prisme se définit par sa puissance et l'orientation de sa base."
     ],
     "lexique": [
      {
       "terme": "Indice de réfraction",
       "def": "Rapport entre la vitesse de la lumière dans le vide et dans le milieu considéré."
      },
      {
       "terme": "Normale",
       "def": "Droite perpendiculaire à la surface au point d'incidence, à partir de laquelle on mesure les angles."
      },
      {
       "terme": "Dioptre",
       "def": "Surface de séparation entre deux milieux transparents d'indices différents."
      },
      {
       "terme": "Angle limite",
       "def": "Angle d'incidence au-delà duquel la réfraction devient impossible et la réflexion totale."
      },
      {
       "terme": "Lame à faces parallèles",
       "def": "Milieu transparent limité par deux plans parallèles ; décale les rayons sans les dévier."
      },
      {
       "terme": "Prisme",
       "def": "Milieu transparent limité par deux dioptres plans non parallèles ; dévie les rayons vers sa base."
      },
      {
       "terme": "Arête",
       "def": "Droite d'intersection des deux faces d'un prisme, opposée à la base."
      },
      {
       "terme": "Constringence",
       "def": "Nombre d'Abbe ν caractérisant la dispersion d'un matériau ; plus il est faible, plus le matériau disperse."
      },
      {
       "terme": "Dioptrie prismatique (Δ)",
       "def": "Unité de puissance prismatique : déviation de 1 cm sur un écran placé à 1 m."
      },
      {
       "terme": "Stigmatisme rigoureux",
       "def": "Propriété d'un système qui donne d'un point objet un point image unique et parfait."
      }
     ]
    },
    {
     "id": "bopt-stigmatisme-dioptres-miroirs",
     "titre": "Stigmatisme, vergence, dioptres et miroirs sphériques",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Distinguer objets et images réels ou virtuels et définir le stigmatisme",
      "Énoncer les conditions de l'approximation de Gauss",
      "Utiliser les distances algébriques et la notion de vergence",
      "Appliquer la relation de conjugaison et la formule du grandissement d'un dioptre sphérique",
      "Calculer la puissance d'un dioptre à partir de son rayon de courbure et inversement",
      "Déterminer l'image donnée par un miroir sphérique"
     ],
     "sections": [
      {
       "titre": "Objets, images et stigmatisme",
       "contenu": "<p>Un <strong>système optique</strong> (dioptre, miroir, lentille, œil, instrument) reçoit des rayons venant d'un objet et les renvoie vers un récepteur. Si tous les rayons issus d'un point A convergent, après le système, en un point unique A', on dit que A' est l'<strong>image</strong> de A et que A et A' sont <strong>conjugués</strong>. Le système est alors <strong>stigmatique</strong> pour ce couple de points.</p>\n<table>\n<thead><tr><th>Cas</th><th>Définition</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Objet réel</td><td>Les rayons incidents partent réellement de lui</td><td>Lettre d'un test de lecture</td></tr>\n<tr><td>Objet virtuel</td><td>Les rayons incidents convergent vers lui mais sont interceptés avant</td><td>Image d'un premier verre servant d'objet au second</td></tr>\n<tr><td>Image réelle</td><td>Les rayons émergents passent réellement par elle ; elle peut être recueillie sur un écran</td><td>Image sur la rétine, image d'un projecteur</td></tr>\n<tr><td>Image virtuelle</td><td>Les rayons émergents semblent provenir d'elle ; on ne peut pas la recueillir sur un écran</td><td>Image dans un miroir plan, image vue à travers une loupe</td></tr>\n</tbody>\n</table>\n<p>Le <strong>stigmatisme rigoureux</strong> n'existe que dans de rares cas (miroir plan, certains points particuliers). Les dioptres sphériques et les lentilles ne sont <strong>pas</strong> rigoureusement stigmatiques : les rayons issus d'un point ne se recoupent pas exactement au même endroit. Ce défaut s'appelle une <strong>aberration</strong>.</p>"
      },
      {
       "titre": "L'approximation de Gauss et les conventions de signe",
       "contenu": "<p>On obtient un <strong>stigmatisme approché</strong> satisfaisant lorsque les rayons sont <strong>paraxiaux</strong> : peu inclinés sur l'axe optique et proches de celui-ci. Ce sont les <strong>conditions de Gauss</strong>. Dans ces conditions, sin i ≈ tan i ≈ i (en radians), les lois de Descartes deviennent linéaires et toutes les formules de conjugaison s'appliquent. Un verre de lunettes regardé à travers la zone centrale se rapproche de ces conditions ; en regard périphérique, les aberrations réapparaissent, ce qui explique l'intérêt des verres asphériques.</p>\n<p>Les distances sont <strong>algébriques</strong> : on oriente l'axe optique dans le sens de propagation de la lumière (en général de gauche à droite sur les schémas). Une distance mesurée dans ce sens est positive, dans le sens contraire négative. On note par exemple SA la distance algébrique du sommet S du dioptre au point A. Un objet réel placé à gauche du système a donc une distance SA négative.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la <strong>vergence</strong> d'un faisceau en un point est V = n / d, où d est la distance algébrique, en mètres, du point considéré au point de convergence du faisceau et n l'indice du milieu. Elle s'exprime en <strong>dioptries</strong> (δ ou D). Un faisceau convergent a une vergence positive, un faisceau divergent une vergence négative, un faisceau parallèle une vergence nulle. Un objet réel situé à 40 cm dans l'air envoie un faisceau de vergence 1 / (−0,40) = −2,50 D.</div>"
      },
      {
       "titre": "Le dioptre sphérique : puissance et foyers",
       "contenu": "<p>Un <strong>dioptre sphérique</strong> est une portion de sphère de centre C et de rayon de courbure r = SC séparant un milieu d'indice n (côté objet) d'un milieu d'indice n' (côté image). La face d'un verre de lunettes, la face avant de la cornée sont des dioptres sphériques.</p>\n<p>Sa <strong>puissance</strong> (ou vergence propre) vaut D = (n' − n) / r, avec r en mètres. Un dioptre <strong>convergent</strong> a une puissance positive, un dioptre <strong>divergent</strong> une puissance négative.</p>\n<ul>\n<li><strong>Foyer image</strong> F' : image d'un point objet situé à l'infini sur l'axe. Distance focale image f' = SF' = n' / D.</li>\n<li><strong>Foyer objet</strong> F : point objet dont l'image est à l'infini. Distance focale objet f = SF = −n / D.</li>\n</ul>\n<p>Pour la face avant d'un verre de lunettes d'indice 1,50 dont la surface est convexe avec r = +100 mm, on obtient D = (1,50 − 1) / 0,100 = +5,00 D. Les opticiens utilisent la même relation, mesurée au <strong>sphéromètre</strong>, pour connaître la courbure d'une face : la puissance de surface est souvent exprimée pour un indice de référence de 1,523, d'où l'importance de préciser l'indice utilisé.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> retrouver un rayon de courbure à partir d'une puissance de surface. On veut une face avant de +6,00 D sur un matériau d'indice 1,60.<br>1. Écrire D = (n' − n) / r, donc r = (n' − n) / D.<br>2. Remplacer : r = (1,60 − 1) / 6,00 = 0,100 m.<br>3. Convertir : r = 100 mm. Le signe positif indique que le centre de courbure est du côté de la lumière émergente : la face est convexe.<br>4. Comparer : avec un indice de 1,50, la même puissance demanderait r = 0,50 / 6 ≈ 83 mm. Un haut indice permet donc des faces moins bombées.</div>"
      },
      {
       "titre": "Relation de conjugaison et grandissement du dioptre",
       "contenu": "<p>Dans les conditions de Gauss, un point A et son image A' par un dioptre sphérique de sommet S vérifient la <strong>relation de conjugaison au sommet</strong> :</p>\n<p><strong>n' / SA' − n / SA = D</strong>, soit, en vergences, V' = V + D.</p>\n<p>Cette écriture en vergences est la plus utile au métier : la vergence du faisceau émergent est égale à la vergence du faisceau incident augmentée de la puissance du dioptre. On peut aussi écrire des relations à partir du centre (origine en C) ou des foyers (<strong>relation de Newton</strong> : FA × F'A' = f × f').</p>\n<p>Le <strong>grandissement transversal</strong> γ = A'B' / AB compare la taille de l'image à celle de l'objet. Pour le dioptre, γ = (n × SA') / (n' × SA). Si γ est positif, l'image est droite ; s'il est négatif, elle est renversée ; si |γ| &gt; 1, elle est agrandie.</p>\n<p>On définit aussi le <strong>grandissement angulaire</strong> G = α' / α (rapport des angles d'un rayon avec l'axe avant et après le système) et le <strong>grandissement axial</strong> (rapport des petits déplacements de l'image et de l'objet le long de l'axe). Ils sont liés par la <strong>relation de Lagrange-Helmholtz</strong> : n × y × α = n' × y' × α', où y et y' sont les tailles de l'objet et de l'image.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> image par la cornée simplifiée. On assimile la face avant de l'œil à un dioptre air (n = 1) / milieu oculaire (n' = 1,336) de puissance D = +43 D. Un objet est à 25 cm devant le sommet.<br>1. Vergence incidente : V = 1 / (−0,25) = −4,00 D.<br>2. Vergence émergente : V' = V + D = −4,00 + 43 = +39,00 D.<br>3. Position de l'image : SA' = n' / V' = 1,336 / 39 ≈ 0,0343 m, soit 34,3 mm derrière le sommet.<br>4. Interprétation : la cornée seule ne forme pas l'image sur la rétine située à environ 24 mm ; c'est l'association avec le cristallin qui permet la mise au point.</div>"
      },
      {
       "titre": "Les miroirs sphériques",
       "contenu": "<p>Un <strong>miroir sphérique</strong> est une calotte de sphère réfléchissante, de sommet S et de centre C. Il est <strong>concave</strong> si sa face réfléchissante est tournée vers le centre (miroir convergent, comme un miroir grossissant de maquillage), <strong>convexe</strong> dans le cas contraire (miroir divergent, comme un rétroviseur extérieur).</p>\n<p>Dans les conditions de Gauss, le foyer F, confondu pour l'objet et l'image, est au milieu de [SC] : SF = SC / 2. La <strong>relation de conjugaison</strong> s'écrit 1 / SA' + 1 / SA = 2 / SC, et le grandissement vaut γ = −SA' / SA.</p>\n<table>\n<thead><tr><th>Position de l'objet réel (miroir concave)</th><th>Image</th></tr></thead>\n<tbody>\n<tr><td>Au-delà de C</td><td>Réelle, renversée, plus petite, entre F et C</td></tr>\n<tr><td>En C</td><td>Réelle, renversée, même taille, en C</td></tr>\n<tr><td>Entre C et F</td><td>Réelle, renversée, agrandie, au-delà de C</td></tr>\n<tr><td>En F</td><td>À l'infini</td></tr>\n<tr><td>Entre F et S</td><td>Virtuelle, droite, agrandie (miroir grossissant)</td></tr>\n</tbody>\n</table>\n<p>Le miroir sphérique n'est rigoureusement stigmatique que pour son centre (un point en C a son image en C) et pour son sommet. Pour les autres points, le stigmatisme n'est qu'approché.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la face d'un verre réfléchit une partie de la lumière comme un miroir sphérique faible. Les reflets d'une lampe dans un verre non traité, visibles par l'opticien au moment de la prise de mesures, sont de petites images formées par ces « miroirs ». Le reflet cornéen, lui, est utilisé par les appareils de centrage et par le pupillomètre pour repérer le centre de la pupille.</div>"
      },
      {
       "titre": "Lien avec les verres de lunettes",
       "contenu": "<p>Un verre de lunettes est une association de deux dioptres sphériques (ou torique et sphérique) : une <strong>face avant</strong> de puissance D<sub>1</sub>, généralement convexe, et une <strong>face arrière</strong> de puissance D<sub>2</sub>, généralement concave. Dans un premier temps, si l'épaisseur est négligeable, la puissance du verre est simplement la somme D ≈ D<sub>1</sub> + D<sub>2</sub>.</p>\n<p>Exemple : face avant +6,00 D, face arrière −8,00 D : verre d'environ −2,00 D. Pour un même résultat, le fabricant peut choisir d'autres couples (+4,00 D et −6,00 D) : c'est le choix de la <strong>base</strong> (courbure de la face avant), qui joue sur l'esthétique, l'épaisseur et les aberrations en regard latéral.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> confondre rayon de courbure en millimètres et en mètres est l'erreur la plus fréquente dans les calculs de puissance. Une face de rayon 125 mm a une puissance de 4 D pour n = 1,50 (0,50 / 0,125), et non de 0,004 D. Convertir systématiquement en mètres avant de calculer une vergence.</div>\n<p>Les sections suivantes du cours généralisent ces résultats aux lentilles minces, puis aux systèmes épais pour lesquels l'épaisseur ne peut plus être négligée : c'est le cas des verres convexes forts, dont la puissance mesurée au frontofocomètre diffère de la simple somme des puissances de faces.</p>"
      }
     ],
     "points_cles": [
      "Deux points sont conjugués lorsque l'un est l'image de l'autre ; le stigmatisme rigoureux est rare.",
      "Les conditions de Gauss (rayons paraxiaux) assurent un stigmatisme approché et justifient les formules de conjugaison.",
      "Les distances sont algébriques, orientées dans le sens de la lumière ; un objet réel a une distance négative.",
      "La vergence d'un faisceau vaut V = n / d (d en mètres), en dioptries.",
      "Puissance d'un dioptre : D = (n' − n) / r ; conjugaison en vergences : V' = V + D.",
      "Grandissement du dioptre : γ = (n SA') / (n' SA) ; relation de Lagrange-Helmholtz : n y α = n' y' α'.",
      "Miroir sphérique : SF = SC / 2, conjugaison 1 / SA' + 1 / SA = 2 / SC.",
      "Pour un verre mince, la puissance est la somme des puissances des deux faces."
     ],
     "lexique": [
      {
       "terme": "Points conjugués",
       "def": "Point objet et point image associés par un système optique."
      },
      {
       "terme": "Conditions de Gauss",
       "def": "Rayons peu inclinés et proches de l'axe, permettant un stigmatisme approché."
      },
      {
       "terme": "Rayon paraxial",
       "def": "Rayon proche de l'axe optique et peu incliné sur lui."
      },
      {
       "terme": "Vergence",
       "def": "Grandeur n / d caractérisant la convergence ou la divergence d'un faisceau, en dioptries."
      },
      {
       "terme": "Dioptrie",
       "def": "Unité de vergence et de puissance, inverse du mètre (symbole δ ou D)."
      },
      {
       "terme": "Foyer image",
       "def": "Point où convergent, après le système, les rayons parallèles à l'axe."
      },
      {
       "terme": "Grandissement transversal",
       "def": "Rapport de la taille de l'image à celle de l'objet, signe compris."
      },
      {
       "terme": "Aberration",
       "def": "Défaut d'un système optique qui empêche un stigmatisme parfait."
      },
      {
       "terme": "Sphéromètre",
       "def": "Instrument mesurant la flèche d'une surface pour en déduire sa courbure et sa puissance."
      },
      {
       "terme": "Base d'un verre",
       "def": "Courbure de la face avant choisie par le fabricant pour une plage de puissances."
      }
     ]
    },
    {
     "id": "bopt-lentilles-minces",
     "titre": "Lentilles minces sphériques et construction des images",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Identifier les formes de lentilles convergentes et divergentes et leurs éléments cardinaux",
      "Construire graphiquement l'image d'un objet par une lentille mince",
      "Appliquer la relation de conjugaison de Descartes et la formule du grandissement",
      "Calculer la vergence d'une lentille à partir de ses rayons de courbure",
      "Relier le pouvoir séparateur de l'œil à la notion d'acuité visuelle"
     ],
     "sections": [
      {
       "titre": "Formes et caractéristiques des lentilles",
       "contenu": "<p>Une <strong>lentille sphérique</strong> est un milieu transparent limité par deux dioptres dont l'un au moins est sphérique. Elle est dite <strong>mince</strong> lorsque son épaisseur est petite devant ses rayons de courbure : on peut alors confondre ses deux sommets en un point unique O, le <strong>centre optique</strong>. Tout rayon passant par O traverse la lentille sans être dévié.</p>\n<table>\n<thead><tr><th>Famille</th><th>Formes</th><th>Repère pratique</th></tr></thead>\n<tbody>\n<tr><td>Lentilles convergentes (à bords minces)</td><td>Biconvexe, plan-convexe, ménisque convergent</td><td>Plus épaisses au centre qu'au bord ; vergence positive</td></tr>\n<tr><td>Lentilles divergentes (à bords épais)</td><td>Biconcave, plan-concave, ménisque divergent</td><td>Plus épaisses au bord qu'au centre ; vergence négative</td></tr>\n</tbody>\n</table>\n<p>Les verres de lunettes ont presque toujours une forme de <strong>ménisque</strong> : face avant convexe, face arrière concave. Cette forme suit la rotation de l'œil derrière le verre et réduit les aberrations en regard latéral.</p>\n<p>Les éléments cardinaux d'une lentille mince sont le centre optique O, le <strong>foyer objet</strong> F et le <strong>foyer image</strong> F', symétriques par rapport à O lorsque la lentille baigne dans l'air. La <strong>distance focale image</strong> f' = OF' et la <strong>vergence</strong> V = 1 / f' (f' en mètres) caractérisent la lentille. Une lentille de focale +0,50 m a une vergence de +2,00 D ; une lentille de vergence −4,00 D a une focale de −0,25 m.</p>\n<p>La vergence d'une lentille mince dans l'air se calcule à partir des rayons de courbure de ses faces : V = (n − 1) × (1 / R<sub>1</sub> − 1 / R<sub>2</sub>), où R<sub>1</sub> = O C<sub>1</sub> et R<sub>2</sub> = O C<sub>2</sub> sont les rayons algébriques des faces avant et arrière. C'est la somme des puissances des deux dioptres.</p>"
      },
      {
       "titre": "Les rayons particuliers et la construction graphique",
       "contenu": "<p>Pour construire l'image B' d'un point B situé hors de l'axe, il suffit de tracer deux des trois <strong>rayons particuliers</strong> issus de B ; l'image A' de A (pied de l'objet sur l'axe) s'obtient en abaissant la perpendiculaire à l'axe depuis B'.</p>\n<ol>\n<li>Le rayon passant par le centre optique O n'est pas dévié.</li>\n<li>Le rayon incident parallèle à l'axe émerge en passant par F' (lentille convergente) ou en semblant provenir de F' (lentille divergente, F' étant alors situé du côté de l'objet).</li>\n<li>Le rayon incident passant par F (ou dirigé vers F pour une lentille divergente) émerge parallèle à l'axe.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réussir une construction à l'échelle.<br>1. Choisir une échelle qui fait tenir l'objet, la lentille et l'image (par exemple 1 cm pour 5 cm) et tracer l'axe orienté de gauche à droite.<br>2. Placer O, F et F' en respectant les signes : pour une lentille divergente, F' est à gauche de O.<br>3. Tracer l'objet AB, puis le rayon passant par O et le rayon parallèle à l'axe.<br>4. Prolonger en pointillés les rayons émergents qui divergent pour trouver une image virtuelle.<br>5. Mesurer OA' et A'B', convertir à l'échelle réelle, puis contrôler par le calcul.</div>\n<table>\n<thead><tr><th>Lentille convergente, objet réel</th><th>Image obtenue</th></tr></thead>\n<tbody>\n<tr><td>Objet au-delà de 2f</td><td>Réelle, renversée, plus petite (appareil photo, œil)</td></tr>\n<tr><td>Objet entre 2f et f</td><td>Réelle, renversée, agrandie (projecteur)</td></tr>\n<tr><td>Objet au foyer F</td><td>Rejetée à l'infini</td></tr>\n<tr><td>Objet entre F et O</td><td>Virtuelle, droite, agrandie (loupe)</td></tr>\n</tbody>\n</table>\n<p>Avec une lentille <strong>divergente</strong>, un objet réel donne toujours une image <strong>virtuelle, droite et plus petite</strong>, située entre F' et O. C'est ce que constate un client myope qui voit les objets « plus petits » à travers ses verres.</p>"
      },
      {
       "titre": "Relation de conjugaison et grandissement",
       "contenu": "<p>Dans les conditions de Gauss, pour une lentille mince dans l'air, la <strong>relation de conjugaison de Descartes</strong> (origine au centre) s'écrit :</p>\n<p><strong>1 / OA' − 1 / OA = 1 / OF' = V</strong></p>\n<p>En vergences : la vergence du faisceau émergent au niveau de la lentille est égale à celle du faisceau incident augmentée de la vergence de la lentille. Le <strong>grandissement transversal</strong> vaut γ = A'B' / AB = OA' / OA.</p>\n<p>La <strong>relation de Newton</strong>, avec origine aux foyers, s'écrit FA × F'A' = −f'<sup>2</sup> ; elle est pratique quand les positions sont repérées par rapport aux foyers.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> image d'une lettre de test par une lentille de +5,00 D. L'objet, haut de 10 mm, est à 30 cm devant la lentille.<br>1. Données : OA = −0,30 m ; V = +5,00 D.<br>2. Vergence incidente : 1 / OA = −3,33 D.<br>3. Vergence émergente : 1 / OA' = −3,33 + 5,00 = +1,67 D, d'où OA' = +0,60 m.<br>4. Grandissement : γ = 0,60 / (−0,30) = −2. L'image est réelle (OA' positif, à droite de la lentille), renversée (γ &lt; 0) et deux fois plus grande : A'B' = −20 mm.<br>5. Contrôle par construction : l'objet est entre 2f (40 cm) et f (20 cm), l'image doit être réelle, renversée et agrandie. C'est cohérent.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la valeur absolue d'une distance ne suffit pas. Oublier le signe négatif de OA pour un objet réel conduit à additionner au lieu de soustraire et donne une image fausse. Écrire toujours la donnée avec son signe avant de la remplacer dans la formule.</div>"
      },
      {
       "titre": "Association de lentilles minces accolées",
       "contenu": "<p>Lorsque deux lentilles minces sont <strong>accolées</strong> (distance nulle entre elles), le système est équivalent à une lentille mince unique dont la vergence est la somme : V = V<sub>1</sub> + V<sub>2</sub>. C'est le principe de la boîte d'essai : on superpose dans la monture d'essai un verre sphérique et un verre cylindrique, ou deux sphères, pour obtenir la correction cherchée.</p>\n<p>Ce principe sert aussi à la <strong>neutralisation</strong> manuelle d'un verre : on cherche dans la boîte d'essai le verre de signe opposé qui, accolé au verre inconnu, supprime tout mouvement de l'image lorsqu'on déplace l'ensemble devant une croix lointaine. Si un verre de −3,00 D neutralise le verre inconnu, celui-ci vaut +3,00 D. La méthode est approximative et reste un dépannage ; la mesure de référence se fait au frontofocomètre.</p>\n<p>Lorsqu'on déplace transversalement un verre devant un objet, l'image suit un mouvement caractéristique :</p>\n<ul>\n<li>verre <strong>convergent</strong> : l'image se déplace en sens <strong>inverse</strong> du verre (mouvement « contre ») ;</li>\n<li>verre <strong>divergent</strong> : l'image se déplace dans le <strong>même sens</strong> que le verre (mouvement « avec »).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> devant un client qui présente une paire sans ordonnance, l'opticien identifie immédiatement le type de correction par le mouvement des images, puis mesure précisément les verres au frontofocomètre. Ce réflexe permet aussi de repérer une inversion des verres droit et gauche lors d'un contrôle rapide.</div>"
      },
      {
       "titre": "Pouvoir séparateur de l'œil et acuité visuelle",
       "contenu": "<p>L'œil, comme tout instrument, ne peut distinguer deux points que s'ils sont vus sous un angle suffisant. Le <strong>pouvoir séparateur</strong> (ou limite de résolution angulaire) est le plus petit angle sous lequel deux points sont perçus séparés. Pour un œil normal, il est de l'ordre de <strong>1 minute d'arc</strong> (1' = 1/60 de degré, soit environ 2,9 × 10<sup>−4</sup> rad).</p>\n<p>Cette limite s'explique par la structure de la rétine : pour que deux points soient séparés, leurs images doivent tomber sur deux photorécepteurs distincts séparés par au moins un récepteur non stimulé. Au centre de la fovéa, les cônes ont un diamètre de l'ordre de 2 à 3 µm, ce qui correspond à un angle d'environ une minute.</p>\n<p>L'<strong>acuité visuelle</strong> est l'inverse de l'angle minimum de résolution exprimé en minutes : AV = 1 / α. Une acuité de 10/10 (ou 1,0) correspond à α = 1' ; une acuité de 5/10 correspond à α = 2'. Les échelles de vision de loin (échelle de Monoyer en France, dixièmes) et de près (échelle de Parinaud, notation P2, P3…) traduisent cette notion en tailles de lettres.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à 5 m, un angle de 1' correspond à un détail d'environ 1,45 mm. Une lettre de test de 10/10 est construite sur une grille de 5 × 5 de ces détails, soit une hauteur d'environ 7,3 mm à 5 m. Une lettre de 1/10 est dix fois plus haute.</div>"
      },
      {
       "titre": "Limites du modèle de la lentille mince",
       "contenu": "<p>Le modèle de la lentille mince est suffisant pour raisonner sur la plupart des verres de faible puissance. Il devient insuffisant dans trois cas fréquents en magasin :</p>\n<ul>\n<li>les <strong>verres convexes forts</strong> (au-delà d'environ +4,00 D) dont l'épaisseur au centre atteint plusieurs millimètres : la puissance réellement mesurée n'est plus la somme des puissances de faces ;</li>\n<li>les situations où la <strong>distance entre le verre et l'œil</strong> doit être prise en compte : changement de distance verre-œil, passage des lunettes aux lentilles de contact ;</li>\n<li>les <strong>instruments</strong> composés de plusieurs éléments séparés : loupes, systèmes télescopiques pour malvoyants, appareils de mesure.</li>\n</ul>\n<p>Dans ces cas, on utilise la notion de <strong>système centré</strong>, de plans principaux et de puissance frontale, qui complète ce qui précède sans le remettre en cause. Les verres <strong>astigmates</strong> (toriques), pour lesquels la vergence change selon la direction, demandent aussi une description particulière.</p>"
      }
     ],
     "points_cles": [
      "Une lentille mince est caractérisée par son centre optique O, ses foyers F et F' et sa vergence V = 1 / OF'.",
      "Les lentilles à bords minces sont convergentes, les lentilles à bords épais divergentes ; les verres de lunettes sont des ménisques.",
      "V = (n − 1)(1 / R1 − 1 / R2) pour une lentille mince dans l'air.",
      "Conjugaison : 1 / OA' − 1 / OA = V ; grandissement : γ = OA' / OA.",
      "Un objet réel vu à travers une lentille divergente donne toujours une image virtuelle, droite et réduite.",
      "Lentilles accolées : les vergences s'additionnent (principe de la boîte d'essai).",
      "Mouvement de l'image : « contre » pour un verre convergent, « avec » pour un verre divergent.",
      "Pouvoir séparateur de l'œil normal : environ 1 minute d'arc, soit une acuité de 10/10."
     ],
     "lexique": [
      {
       "terme": "Lentille mince",
       "def": "Lentille dont l'épaisseur est négligeable devant les rayons de courbure de ses faces."
      },
      {
       "terme": "Centre optique",
       "def": "Point d'une lentille mince par lequel les rayons passent sans être déviés."
      },
      {
       "terme": "Ménisque",
       "def": "Lentille à une face convexe et une face concave, forme habituelle des verres de lunettes."
      },
      {
       "terme": "Distance focale image",
       "def": "Distance algébrique OF' entre le centre optique et le foyer image."
      },
      {
       "terme": "Neutralisation",
       "def": "Détermination approximative de la puissance d'un verre en l'accolant à un verre connu de signe opposé."
      },
      {
       "terme": "Pouvoir séparateur",
       "def": "Plus petit angle sous lequel deux points sont perçus distincts."
      },
      {
       "terme": "Acuité visuelle",
       "def": "Inverse de l'angle minimum de résolution exprimé en minutes d'arc."
      },
      {
       "terme": "Échelle de Monoyer",
       "def": "Échelle de lettres utilisée en France pour mesurer l'acuité de loin en dixièmes."
      },
      {
       "terme": "Échelle de Parinaud",
       "def": "Échelle de textes de lecture graduée utilisée pour la vision de près."
      }
     ]
    },
    {
     "id": "bopt-systemes-centres",
     "titre": "Systèmes centrés, verres épais et puissance frontale",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire un système centré par ses éléments cardinaux et ses plans principaux",
      "Calculer la vergence d'une association de deux systèmes avec la formule de Gullstrand",
      "Distinguer puissance vraie, puissance frontale et puissance de surface d'un verre épais",
      "Évaluer l'effet d'une variation de la distance verre-œil sur la compensation",
      "Expliquer le fonctionnement d'une loupe et d'un système afocal utilisés en aide visuelle"
     ],
     "sections": [
      {
       "titre": "Système centré et éléments cardinaux",
       "contenu": "<p>Un <strong>système centré</strong> est une succession de dioptres (et éventuellement de miroirs) dont les centres de courbure sont alignés sur un même axe, l'axe optique. Un verre de lunettes, l'œil, un frontofocomètre, une loupe sont des systèmes centrés. Dans les conditions de Gauss, tout système centré peut être décrit par quelques points remarquables appelés <strong>éléments cardinaux</strong> :</p>\n<ul>\n<li>les <strong>foyers</strong> F (objet) et F' (image) ;</li>\n<li>les <strong>points principaux</strong> H (objet) et H' (image), conjugués avec un grandissement de +1 ; les plans perpendiculaires à l'axe qui les contiennent sont les <strong>plans principaux</strong> ;</li>\n<li>les <strong>points nodaux</strong> N et N', conjugués avec un grandissement angulaire de +1 ; ils sont confondus avec H et H' lorsque les milieux extrêmes sont identiques (verre dans l'air).</li>\n</ul>\n<p>La <strong>vergence</strong> du système vaut V = n' / H'F' = −n / HF. Un système de vergence non nulle est dit <strong>focal</strong> ; si V = 0, il est <strong>afocal</strong> : un faisceau parallèle entre et ressort parallèle (lunette astronomique, jumelles, système télescopique d'aide visuelle).</p>\n<p>Dans le cas d'une lentille mince, H et H' sont confondus avec le centre optique O. Pour un verre épais, ils sont distincts et généralement situés à l'intérieur ou près du verre ; pour un ménisque fort, ils peuvent même se trouver en dehors.</p>"
      },
      {
       "titre": "Association de deux systèmes : la formule de Gullstrand",
       "contenu": "<p>Deux systèmes de vergences V<sub>1</sub> et V<sub>2</sub>, séparés par une distance e (entre le point principal image du premier et le point principal objet du second) dans un milieu d'indice n, forment un système équivalent de vergence :</p>\n<p><strong>V = V<sub>1</sub> + V<sub>2</sub> − (e / n) × V<sub>1</sub> × V<sub>2</sub></strong></p>\n<p>C'est la <strong>relation de Gullstrand</strong>. On retrouve la somme simple des lentilles accolées lorsque e = 0. Le terme correctif devient important quand les vergences sont fortes ou la distance grande.</p>\n<p>Le système est afocal lorsque V = 0, c'est-à-dire lorsque le foyer image du premier élément coïncide avec le foyer objet du second (e = n × (1/V<sub>1</sub> + 1/V<sub>2</sub>) dans l'air). La lunette de Galilée associe ainsi un objectif convergent et un oculaire divergent : elle donne une image droite et agrandie, ce qui la rend utile en basse vision.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vergence d'un œil théorique simplifié. Cornée V<sub>1</sub> = +43 D, cristallin V<sub>2</sub> = +19 D, distance entre leurs plans principaux e = 5,7 mm dans un milieu d'indice 1,336.<br>1. Calculer e / n = 0,0057 / 1,336 ≈ 0,00427 m.<br>2. Produit V<sub>1</sub> × V<sub>2</sub> = 43 × 19 = 817.<br>3. Terme correctif : 0,00427 × 817 ≈ 3,49 D.<br>4. V = 43 + 19 − 3,49 ≈ 58,5 D. On retrouve l'ordre de grandeur classique d'environ 60 D pour l'œil au repos.</div>"
      },
      {
       "titre": "Le verre épais : puissance vraie et puissance frontale",
       "contenu": "<p>Un verre est un système de deux dioptres, de puissances de surface D<sub>1</sub> (face avant) et D<sub>2</sub> (face arrière), séparés par l'épaisseur au centre e dans un matériau d'indice n. Plusieurs « puissances » coexistent :</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Définition</th><th>Formule</th></tr></thead>\n<tbody>\n<tr><td>Puissance nominale (approchée)</td><td>Somme des puissances de faces</td><td>D<sub>1</sub> + D<sub>2</sub></td></tr>\n<tr><td>Puissance vraie (équivalente)</td><td>Vergence du système, rapportée aux plans principaux</td><td>D<sub>1</sub> + D<sub>2</sub> − (e / n) D<sub>1</sub> D<sub>2</sub></td></tr>\n<tr><td>Puissance frontale arrière (frontale image)</td><td>Inverse de la distance entre le sommet de la face arrière et le foyer image</td><td>D<sub>1</sub> / (1 − (e / n) D<sub>1</sub>) + D<sub>2</sub></td></tr>\n<tr><td>Puissance frontale avant</td><td>Inverse de la distance entre le sommet de la face avant et le foyer objet, signe changé</td><td>D<sub>2</sub> / (1 − (e / n) D<sub>2</sub>) + D<sub>1</sub></td></tr>\n</tbody>\n</table>\n<p>Par convention, la puissance d'un verre de lunettes indiquée sur l'ordonnance, sur le sachet du verrier et mesurée au <strong>frontofocomètre</strong> est la <strong>puissance frontale arrière</strong> : c'est elle qui détermine la position du foyer image par rapport à la face proche de l'œil. Le verre doit donc être posé sur l'appui du frontofocomètre par sa face arrière (face concave contre l'appui).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> puissance frontale d'un verre convexe épais. D<sub>1</sub> = +12,00 D, D<sub>2</sub> = −4,00 D, e = 6 mm, n = 1,50.<br>1. Somme simple : +8,00 D.<br>2. e / n = 0,006 / 1,50 = 0,004 m.<br>3. Terme de la face avant : 12 / (1 − 0,004 × 12) = 12 / 0,952 ≈ 12,61 D.<br>4. Frontale arrière : 12,61 − 4,00 ≈ +8,61 D.<br>5. Interprétation : l'écart de 0,61 D avec la somme simple est loin d'être négligeable ; pour un verre de +4,00 D plus mince (D<sub>1</sub> = +8,00 D, e = 4 mm), il ne serait que d'environ 0,17 D. Pour les verres négatifs, l'épaisseur au centre est faible et l'écart est souvent négligeable.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mesurer un verre posé à l'envers (face convexe sur l'appui) donne la frontale avant. Sur un verre convexe fort ou sur un double foyer, l'erreur dépasse facilement les tolérances de fabrication et conduit à refuser à tort, ou à accepter à tort, un verre.</div>"
      },
      {
       "titre": "Effet de la distance verre-œil",
       "contenu": "<p>Un verre corrige l'œil lorsque son foyer image coïncide avec le <strong>punctum remotum</strong> de l'œil, point le plus éloigné vu net sans accommoder. La puissance nécessaire dépend donc de la <strong>distance verre-œil</strong> (DVO), mesurée entre le sommet de la face arrière du verre et le sommet de la cornée, habituellement de l'ordre de 12 à 14 mm.</p>\n<p>Si l'on déplace la correction d'une distance d vers l'œil (d positif en mètres), la nouvelle puissance nécessaire vaut :</p>\n<p><strong>V<sub>c</sub> = V / (1 − d × V)</strong></p>\n<p>Cette formule sert notamment pour comparer une correction en lunettes et en lentilles de contact (d = DVO) ou pour adapter une correction lorsque la monture choisie est portée plus loin ou plus près que la monture d'essai.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> passer d'une correction lunettes à son équivalent cornéen, DVO = 12 mm.<br>1. Hypermétrope, lunettes +10,00 D : V<sub>c</sub> = 10 / (1 − 0,012 × 10) = 10 / 0,88 ≈ +11,36 D.<br>2. Myope, lunettes −10,00 D : V<sub>c</sub> = −10 / (1 + 0,12) = −10 / 1,12 ≈ −8,93 D.<br>3. Conclusion : en rapprochant la correction de l'œil, un hypermétrope a besoin de plus de puissance, un myope de moins. Pour ±4,00 D, l'écart reste inférieur à 0,25 D ; il devient significatif au-delà.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un myope fort qui choisit une monture dont les verres sont plus éloignés de ses yeux que dans la monture d'essai risque de trouver sa vision moins nette. L'opticien vérifie la DVO à la prise de mesures, la transmet au verrier pour les verres personnalisés et prévient le client lorsque la monture choisie s'écarte beaucoup des conditions de l'examen.</div>"
      },
      {
       "titre": "Loupes et aides visuelles optiques",
       "contenu": "<p>La <strong>loupe</strong> est une lentille convergente utilisée pour observer un objet placé entre son foyer objet et elle-même : l'image est virtuelle, droite et agrandie. Lorsque l'objet est au foyer, l'image est à l'infini et l'œil observe sans accommoder.</p>\n<p>On caractérise la loupe par son <strong>grossissement commercial</strong> G<sub>c</sub> = V / 4, rapport entre l'angle sous lequel on voit l'image à l'infini et l'angle sous lequel on verrait l'objet à 25 cm à l'œil nu. Une loupe de +12 D a un grossissement commercial de 3 (souvent noté « 3× »).</p>\n<table>\n<thead><tr><th>Aide visuelle</th><th>Principe</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Loupe à main</td><td>Lentille convergente tenue à distance de l'objet</td><td>Lecture ponctuelle (étiquettes, prix)</td></tr>\n<tr><td>Loupe à poser</td><td>Lentille montée sur un pied à distance fixe de la page</td><td>Lecture prolongée, personnes qui tremblent</td></tr>\n<tr><td>Verres loupes (fortes additions)</td><td>Correction de près très forte, distance de lecture courte</td><td>Basse vision, lecture rapprochée</td></tr>\n<tr><td>Système télescopique (Galilée)</td><td>Système afocal grossissant monté sur lunettes</td><td>Vision de loin ou intermédiaire en basse vision</td></tr>\n</tbody>\n</table>\n<p>Ces équipements relèvent souvent d'une prise en charge pluridisciplinaire (ophtalmologiste, orthoptiste, opticien spécialisé en basse vision). En bac professionnel, il s'agit de connaître leur principe et de savoir orienter le client.</p>"
      },
      {
       "titre": "Analyser un système optique professionnel",
       "contenu": "<p>Analyser un système optique consiste à identifier sa <strong>fonction</strong> (former une image, mesurer, éclairer, agrandir), ses <strong>sous-ensembles</strong> (optique, mécanique, électrique, électronique) et le <strong>trajet de la lumière</strong>. La démarche s'applique aux appareils du magasin :</p>\n<ul>\n<li>le <strong>frontofocomètre</strong> : une mire éclairée, un objectif collimateur et une lunette de visée ; on déplace la mire jusqu'à ce que son image par le verre étudié soit nette, et le déplacement est gradué directement en dioptries ;</li>\n<li>le <strong>projecteur de tests</strong> : une source, un condenseur, un test et un objectif qui forme une image agrandie sur un écran ;</li>\n<li>le <strong>réfracteur</strong> (ou réfracteur automatique) : des disques de lentilles sphériques, cylindriques et prismatiques que l'on associe devant chaque œil, selon le principe des vergences qui s'additionnent ;</li>\n<li>l'<strong>autoréfractomètre</strong> : il mesure la réfraction objective en analysant l'image d'une mire infrarouge réfléchie par la rétine.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> devant un appareil inconnu, suivre la lumière de la source au récepteur, nommer chaque élément et sa fonction, repérer les réglages possibles (mise au point, éclairage, axe). Cette lecture fonctionnelle prépare l'exploitation des notices techniques et le diagnostic d'une panne simple.</div>"
      }
     ],
     "points_cles": [
      "Un système centré se décrit par ses foyers, ses points principaux et ses points nodaux.",
      "Gullstrand : V = V1 + V2 − (e / n) V1 V2 ; si V = 0, le système est afocal.",
      "La puissance d'un verre indiquée et mesurée est la puissance frontale arrière.",
      "Pour un verre convexe épais, la frontale arrière dépasse nettement la somme des puissances de faces.",
      "Le verre se mesure face arrière contre l'appui du frontofocomètre.",
      "Changement de distance verre-œil : Vc = V / (1 − d V), significatif au-delà d'environ ±4 D.",
      "Grossissement commercial d'une loupe : V / 4.",
      "Analyser un appareil, c'est suivre le trajet de la lumière et nommer la fonction de chaque élément."
     ],
     "lexique": [
      {
       "terme": "Système centré",
       "def": "Ensemble de dioptres et de miroirs dont les centres sont alignés sur un même axe."
      },
      {
       "terme": "Plans principaux",
       "def": "Plans conjugués avec un grandissement de +1, à partir desquels on mesure les distances focales."
      },
      {
       "terme": "Système afocal",
       "def": "Système de vergence nulle qui transforme un faisceau parallèle en faisceau parallèle."
      },
      {
       "terme": "Relation de Gullstrand",
       "def": "Formule donnant la vergence de l'association de deux systèmes séparés."
      },
      {
       "terme": "Puissance frontale arrière",
       "def": "Inverse de la distance entre le sommet de la face arrière et le foyer image ; puissance de référence d'un verre."
      },
      {
       "terme": "Distance verre-œil (DVO)",
       "def": "Distance entre la face arrière du verre et le sommet de la cornée."
      },
      {
       "terme": "Punctum remotum",
       "def": "Point le plus éloigné vu net par l'œil sans accommoder."
      },
      {
       "terme": "Grossissement commercial",
       "def": "Grossissement d'une loupe rapporté à une vision à 25 cm, égal à V / 4."
      },
      {
       "terme": "Frontofocomètre",
       "def": "Appareil de mesure des puissances frontales, des axes et des prismes d'un verre."
      },
      {
       "terme": "Autoréfractomètre",
       "def": "Appareil mesurant automatiquement la réfraction objective de l'œil."
      }
     ]
    },
    {
     "id": "bopt-lentilles-astigmates-prismes",
     "titre": "Lentilles astigmates, transposition et effets prismatiques",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Décrire une lentille torique par ses méridiens principaux et ses focales",
      "Lire et écrire une formule sphéro-cylindrique avec la convention d'axe TABO",
      "Transposer une formule et calculer l'équivalent sphérique",
      "Calculer la puissance d'un verre torique dans une direction quelconque",
      "Appliquer la règle de Prentice pour calculer un effet prismatique induit ou un décentrement"
     ],
     "sections": [
      {
       "titre": "La lentille torique et ses méridiens principaux",
       "contenu": "<p>Une lentille <strong>astigmate</strong> n'a pas la même vergence dans toutes les directions. En lunetterie, il s'agit presque toujours d'un <strong>verre torique</strong> : une face sphérique et une face <strong>torique</strong>, surface qui possède deux courbures différentes dans deux directions perpendiculaires, comme la surface d'un ballon de rugby ou d'une bouée.</p>\n<p>Les deux directions de courbure extrême sont les <strong>méridiens principaux</strong> ; elles sont toujours perpendiculaires. Le verre a une vergence V<sub>1</sub> dans l'un et V<sub>2</sub> dans l'autre. Un faisceau parallèle ne converge pas en un point mais en deux <strong>focales</strong> : deux petits segments perpendiculaires, séparés par une zone où la tache lumineuse est la plus petite, le <strong>cercle de moindre diffusion</strong>. L'ensemble forme le <strong>conoïde de Sturm</strong>.</p>\n<p>Un <strong>cylindre</strong> est le cas particulier où la vergence est nulle dans un méridien : il n'agit que dans la direction perpendiculaire à son axe. L'<strong>axe du cylindre</strong> est le méridien de vergence nulle.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un cylindre n'a <strong>aucune</strong> puissance le long de son axe et sa puissance <strong>maximale</strong> dans la direction perpendiculaire à l'axe. Un cylindre d'axe 90° (vertical) agit donc dans le méridien horizontal.</div>"
      },
      {
       "titre": "Formule sphéro-cylindrique et convention d'axe",
       "contenu": "<p>Une correction astigmate s'écrit sous la forme <strong>sphère (cylindre) axe</strong>, par exemple +1,50 (−0,75) 170°. Elle signifie : une sphère de +1,50 D associée à un cylindre de −0,75 D dont l'axe est orienté à 170°.</p>\n<p>Les axes sont repérés selon la <strong>convention TABO</strong> : de 0° à 180°, comptés dans le sens inverse des aiguilles d'une montre, pour chaque œil, vu par l'opérateur placé face au porteur, 0° étant à droite de l'opérateur. On n'écrit jamais 0° mais 180°. L'axe 90° est vertical, l'axe 180° horizontal.</p>\n<p>La <strong>croix optique</strong> représente le verre par ses deux méridiens principaux avec leur puissance. Pour +1,50 (−0,75) 170° : méridien à 170°, puissance +1,50 D (le cylindre n'agit pas sur son axe) ; méridien à 80°, puissance +1,50 − 0,75 = +0,75 D.</p>\n<table>\n<thead><tr><th>Écriture</th><th>Méridien de l'axe</th><th>Méridien perpendiculaire</th></tr></thead>\n<tbody>\n<tr><td>−2,00 (−1,00) 180°</td><td>180° : −2,00 D</td><td>90° : −3,00 D</td></tr>\n<tr><td>+3,00 (−1,50) 45°</td><td>45° : +3,00 D</td><td>135° : +1,50 D</td></tr>\n<tr><td>0,00 (+2,00) 90°</td><td>90° : 0,00 D</td><td>180° : +2,00 D</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Transposition et équivalent sphérique",
       "contenu": "<p>Une même correction peut s'écrire avec un cylindre positif ou négatif. On passe d'une écriture à l'autre par la <strong>transposition</strong> :</p>\n<ol>\n<li>nouvelle sphère = ancienne sphère + ancien cylindre ;</li>\n<li>nouveau cylindre = ancien cylindre changé de signe ;</li>\n<li>nouvel axe = ancien axe ± 90° (pour rester entre 1° et 180°).</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> transposer −1,25 (+2,00) 15°.<br>1. Sphère : −1,25 + 2,00 = +0,75.<br>2. Cylindre : −2,00.<br>3. Axe : 15° + 90° = 105°.<br>4. Résultat : +0,75 (−2,00) 105°.<br>5. Vérification par la croix optique : dans les deux écritures, le méridien 15° vaut −1,25 + 0 = −1,25 D d'un côté et +0,75 − 2,00 = −1,25 D de l'autre ; le méridien 105° vaut +0,75 D dans les deux cas. Les écritures sont équivalentes.</div>\n<p>Les verriers et la plupart des logiciels travaillent en <strong>cylindre négatif</strong>, alors que certaines ordonnances sont rédigées en cylindre positif. La transposition est donc un geste quotidien lors de la commande.</p>\n<p>L'<strong>équivalent sphérique</strong> est la sphère qui place le cercle de moindre diffusion sur la rétine : ES = sphère + cylindre / 2. Pour +0,75 (−2,00) 105°, ES = −0,25 D. Il sert à estimer l'épaisseur ou l'esthétique d'un verre, à comparer deux corrections ou à proposer une solution provisoire, mais il ne remplace jamais la correction prescrite.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en transposant, on oublie souvent de changer l'axe de 90°. Le résultat « +0,75 (−2,00) 15° » est une autre correction, qui inverse les méridiens et donne au porteur une vision très dégradée. La vérification par la croix optique doit devenir un réflexe.</div>"
      },
      {
       "titre": "Puissance d'un verre torique dans une direction quelconque",
       "contenu": "<p>Dans une direction faisant un angle θ avec l'axe du cylindre, la puissance d'un verre sphéro-cylindrique S (C) axe vaut approximativement :</p>\n<p><strong>D<sub>θ</sub> = S + C × sin<sup>2</sup> θ</strong></p>\n<p>Pour θ = 0° (sur l'axe), on retrouve S ; pour θ = 90°, on retrouve S + C. Cette formule sert surtout à calculer la puissance dans le méridien <strong>horizontal</strong> ou <strong>vertical</strong> d'un verre à axe oblique, afin d'en déduire un effet prismatique horizontal ou vertical, ou d'estimer l'épaisseur au bord nasal ou temporal.</p>\n<p>Exemple : −1,00 (−2,00) 30°. Dans le méridien horizontal (180°), θ = 30° − 0° = 30°, sin<sup>2</sup> 30° = 0,25 : D<sub>180</sub> = −1,00 − 0,50 = −1,50 D. Dans le méridien vertical, θ = 60°, sin<sup>2</sup> 60° = 0,75 : D<sub>90</sub> = −1,00 − 1,50 = −2,50 D.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un verre torique d'axe oblique, l'épaisseur au bord n'est pas la même côté nez et côté tempe, et l'aspect du verre monté peut surprendre le client. Prévoir l'épaisseur des bords permet de conseiller une monture adaptée (forme, taille, cerclage) avant la commande.</div>"
      },
      {
       "titre": "Effet prismatique induit : la règle de Prentice",
       "contenu": "<p>Tout verre de puissance non nulle se comporte, en dehors de son centre optique, comme un prisme. La puissance de cet <strong>effet prismatique induit</strong> est donnée par la <strong>règle de Prentice</strong> :</p>\n<p><strong>P = c × D</strong>, avec P en dioptries prismatiques, c le décentrement en <strong>centimètres</strong> (distance entre le point de regard et le centre optique) et D la puissance du verre dans la direction considérée.</p>\n<ul>\n<li>Verre <strong>convergent</strong> : la base du prisme induit est dirigée vers le <strong>centre optique</strong>.</li>\n<li>Verre <strong>divergent</strong> : la base est dirigée à l'<strong>opposé</strong> du centre optique (vers le bord, plus épais).</li>\n</ul>\n<p>Cette règle explique l'importance du centrage : si les centres optiques ne sont pas en face des pupilles, le porteur subit un prisme non prescrit, qui peut provoquer fatigue, maux de tête ou vision double.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déséquilibre vertical en vision de près. OD −3,00 D, OG −1,00 D (sphères). Le porteur lit 10 mm sous les centres optiques.<br>1. Décentrement : c = 1,0 cm.<br>2. OD : P = 1,0 × 3,00 = 3 Δ. Verre divergent, regard sous le centre : base à l'opposé, donc base inférieure.<br>3. OG : P = 1,0 × 1,00 = 1 Δ base inférieure.<br>4. Déséquilibre : 3 − 1 = 2 Δ vertical. Les yeux supportent mal plus de 1 Δ environ de prisme vertical différentiel : ce porteur risque une gêne en lecture prolongée ; on en informe le prescripteur ou on envisage une solution adaptée (verres à compensation prismatique, deux paires).</div>"
      },
      {
       "titre": "Décentrement volontaire et prisme prescrit",
       "contenu": "<p>Inversement, on peut obtenir un prisme prescrit en <strong>décentrant</strong> volontairement le verre au montage : c = P / D. Pour obtenir 1 Δ base interne avec un verre de +4,00 D, il faut décentrer le centre optique de 1 / 4 = 0,25 cm = 2,5 mm vers le nez (base vers le centre pour un verre convergent : le centre optique doit être du côté nasal par rapport à la pupille).</p>\n<p>Le décentrement n'est possible que si le diamètre du verre non détouré le permet et si la puissance est suffisante : avec un verre de 0,50 D, obtenir 1 Δ demanderait 20 mm de décentrement, ce qui est irréalisable. On commande alors un <strong>prisme taillé</strong> chez le verrier.</p>\n<table>\n<thead><tr><th>Situation</th><th>Conséquence</th><th>Réponse professionnelle</th></tr></thead>\n<tbody>\n<tr><td>Écart de centrage horizontal sur verres faibles</td><td>Prisme induit faible, souvent toléré</td><td>Vérifier par rapport aux tolérances</td></tr>\n<tr><td>Écart de centrage sur verres forts</td><td>Prisme induit important</td><td>Recentrer, refaire le montage</td></tr>\n<tr><td>Anisométropie et regard en dehors du centre</td><td>Déséquilibre prismatique variable</td><td>Informer, adapter le choix des verres</td></tr>\n<tr><td>Prisme prescrit</td><td>Effet recherché</td><td>Décentrement si possible, sinon prisme taillé</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la règle de Prentice utilise la puissance dans la direction du décentrement. Pour un verre torique, il faut d'abord calculer la puissance dans le méridien horizontal (décentrement horizontal) ou vertical (décentrement vertical), et non utiliser la sphère seule.</div>"
      }
     ],
     "points_cles": [
      "Un verre torique a deux méridiens principaux perpendiculaires de vergences différentes.",
      "Un cylindre n'a aucune puissance sur son axe et toute sa puissance à 90° de l'axe.",
      "Écriture : sphère (cylindre) axe, axes TABO de 1° à 180°, vus par l'opérateur face au porteur.",
      "Transposition : sphère + cylindre, cylindre changé de signe, axe ± 90°.",
      "Équivalent sphérique : sphère + cylindre / 2.",
      "Puissance dans une direction θ par rapport à l'axe : S + C sin² θ.",
      "Règle de Prentice : P (Δ) = c (cm) × D ; base vers le centre pour un verre convergent, vers le bord pour un verre divergent.",
      "Un décentrement c = P / D permet d'obtenir un prisme prescrit si la puissance et le diamètre le permettent."
     ],
     "lexique": [
      {
       "terme": "Surface torique",
       "def": "Surface ayant deux courbures principales différentes dans deux directions perpendiculaires."
      },
      {
       "terme": "Méridiens principaux",
       "def": "Directions perpendiculaires de vergence extrême d'un verre astigmate."
      },
      {
       "terme": "Conoïde de Sturm",
       "def": "Faisceau émergent d'un système astigmate, avec deux focales et un cercle de moindre diffusion."
      },
      {
       "terme": "Axe du cylindre",
       "def": "Méridien dans lequel le cylindre n'a aucune puissance."
      },
      {
       "terme": "Convention TABO",
       "def": "Repérage des axes de 0° à 180° dans le sens trigonométrique, vu par l'opérateur."
      },
      {
       "terme": "Transposition",
       "def": "Réécriture d'une formule sphéro-cylindrique avec un cylindre de signe opposé."
      },
      {
       "terme": "Équivalent sphérique",
       "def": "Sphère moyenne égale à la sphère plus la moitié du cylindre."
      },
      {
       "terme": "Croix optique",
       "def": "Représentation des puissances des deux méridiens principaux d'un verre."
      },
      {
       "terme": "Règle de Prentice",
       "def": "Relation P = c × D donnant l'effet prismatique induit par un décentrement."
      },
      {
       "terme": "Anisométropie",
       "def": "Différence de réfraction entre les deux yeux."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Vision",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bopt-oeil-anatomie-theorique",
     "titre": "Anatomie de l'œil, annexes et œil théorique",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire les trois tuniques et les milieux transparents du globe oculaire",
      "Expliquer le rôle de la rétine, de la fovéa et des voies optiques",
      "Identifier les annexes de l'œil et leur rôle dans le port d'un équipement",
      "Utiliser le modèle de l'œil théorique et de l'œil réduit pour des calculs simples",
      "Calculer la taille d'une image rétinienne"
     ],
     "sections": [
      {
       "titre": "Le globe oculaire : trois tuniques",
       "contenu": "<p>Le <strong>globe oculaire</strong> est une sphère d'environ 24 mm de diamètre chez l'adulte emmétrope, logée dans l'<strong>orbite</strong>, cavité osseuse du crâne. Sa paroi est formée de trois enveloppes superposées, les <strong>tuniques</strong>.</p>\n<table>\n<thead><tr><th>Tunique</th><th>Constituants</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Externe (fibreuse)</td><td><strong>Sclère</strong> (blanc de l'œil) en arrière, <strong>cornée</strong> transparente en avant ; jonction appelée limbe</td><td>Protection, maintien de la forme ; la cornée est le dioptre le plus puissant de l'œil (environ 43 D)</td></tr>\n<tr><td>Moyenne (vasculaire, ou uvée)</td><td><strong>Choroïde</strong> en arrière, <strong>corps ciliaire</strong>, <strong>iris</strong> en avant</td><td>Nutrition, production de l'humeur aqueuse, accommodation (muscle ciliaire), réglage de la lumière (pupille)</td></tr>\n<tr><td>Interne (nerveuse)</td><td><strong>Rétine</strong></td><td>Transformation de la lumière en message nerveux</td></tr>\n</tbody>\n</table>\n<p>L'<strong>iris</strong> est un diaphragme coloré percé d'un orifice, la <strong>pupille</strong>, dont le diamètre varie d'environ 2 mm en forte lumière (<strong>myosis</strong>) à 7 ou 8 mm dans l'obscurité (<strong>mydriase</strong>). Une petite pupille augmente la profondeur de champ et améliore la netteté ; c'est pourquoi un presbyte lit mieux en pleine lumière.</p>\n<p>Le diamètre pupillaire varie aussi avec l'accommodation (la pupille se rétrécit en vision de près), avec l'âge (la pupille des personnes âgées est plus petite) et sous l'effet de certains médicaments. L'œil s'adapte enfin à des niveaux de lumière très différents : l'<strong>adaptation à l'obscurité</strong>, qui fait passer des cônes aux bâtonnets, demande une vingtaine de minutes ou plus, alors que l'adaptation à la lumière est rapide. Ces phénomènes expliquent l'éblouissement à la sortie d'un tunnel, la gêne de la conduite de nuit et l'intérêt des verres filtrants.</p>"
      },
      {
       "titre": "Les milieux transparents",
       "contenu": "<p>La lumière traverse successivement quatre <strong>milieux transparents</strong> avant d'atteindre la rétine :</p>\n<ol>\n<li>la <strong>cornée</strong>, d'environ 0,5 mm d'épaisseur au centre, indice 1,376, recouverte du film lacrymal ;</li>\n<li>l'<strong>humeur aqueuse</strong>, liquide de la chambre antérieure, indice 1,336, renouvelée en permanence ; son équilibre entre production et évacuation détermine la pression intraoculaire ;</li>\n<li>le <strong>cristallin</strong>, lentille biconvexe souple d'environ 4 mm d'épaisseur, suspendue par la <strong>zonule</strong> au corps ciliaire ; son indice varie d'environ 1,386 en périphérie à 1,406 au centre ; sa puissance, d'environ 19 à 20 D au repos, augmente lors de l'<strong>accommodation</strong> ;</li>\n<li>le <strong>corps vitré</strong>, gel transparent qui remplit les deux tiers postérieurs du globe, indice 1,336.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la cornée apporte environ les deux tiers de la puissance de l'œil, le cristallin le tiers restant. Seul le cristallin peut faire varier sa puissance : il est l'organe de l'accommodation. Avec l'âge, il perd sa souplesse (presbytie) et peut perdre sa transparence (cataracte).</div>"
      },
      {
       "titre": "La rétine et les voies optiques",
       "contenu": "<p>La <strong>rétine</strong> contient les <strong>photorécepteurs</strong> :</p>\n<ul>\n<li>les <strong>cônes</strong>, environ 6 millions, concentrés au centre ; ils fonctionnent en lumière du jour (vision <strong>photopique</strong>), assurent la vision des couleurs (trois types sensibles au bleu, au vert et au rouge) et la vision des détails ;</li>\n<li>les <strong>bâtonnets</strong>, environ 120 millions, majoritaires en périphérie ; très sensibles, ils fonctionnent en faible lumière (vision <strong>scotopique</strong>), ne voient pas les couleurs et détectent bien les mouvements.</li>\n</ul>\n<p>La <strong>macula</strong> est la zone centrale de la rétine ; en son centre, la <strong>fovéa</strong>, petite dépression ne contenant que des cônes très serrés, est la zone de la vision la plus fine. Quand on fixe un objet, son image se forme sur la fovéa : l'axe de fixation passe par elle. La <strong>papille</strong>, point de sortie du nerf optique, ne contient aucun photorécepteur : c'est la <strong>tache aveugle</strong>, située du côté nasal de la fovéa.</p>\n<p>Le message nerveux suit les <strong>voies optiques</strong> : nerf optique, <strong>chiasma</strong> (où les fibres venant des moitiés nasales des rétines se croisent), bandelettes optiques, relais dans le thalamus, puis <strong>cortex visuel</strong> du lobe occipital, à l'arrière du cerveau. Chaque hémisphère reçoit ainsi les informations de la moitié opposée du champ visuel, venant des deux yeux.</p>"
      },
      {
       "titre": "Les annexes de l'œil",
       "contenu": "<p>Les <strong>annexes</strong> protègent, nourrissent et mobilisent le globe :</p>\n<table>\n<thead><tr><th>Annexe</th><th>Description</th><th>Intérêt pour l'opticien</th></tr></thead>\n<tbody>\n<tr><td>Orbite et sourcils</td><td>Cavité osseuse ; arcade sourcilière au-dessus</td><td>Limite haute de la monture ; le cercle ne doit pas toucher les sourcils ni les cils</td></tr>\n<tr><td>Paupières et cils</td><td>Voiles musculo-cutanés qui ferment l'œil et étalent les larmes ; clignement environ 15 fois par minute</td><td>Distance verre-œil suffisante pour éviter le contact des cils</td></tr>\n<tr><td>Conjonctive</td><td>Muqueuse transparente qui tapisse l'intérieur des paupières et la sclère</td><td>Signe d'irritation : œil rouge à signaler</td></tr>\n<tr><td>Appareil lacrymal</td><td>Glande lacrymale, film lacrymal, voies d'évacuation vers le nez</td><td>Sécheresse oculaire, notamment devant les écrans</td></tr>\n<tr><td>Muscles oculomoteurs</td><td>Six muscles par œil : quatre droits (supérieur, inférieur, médial, latéral) et deux obliques (supérieur, inférieur)</td><td>Mouvements des yeux, convergence, vision binoculaire</td></tr>\n</tbody>\n</table>\n<p>L'œil tourne autour d'un point situé à environ 13 à 15 mm en arrière du sommet de la cornée, le <strong>centre de rotation de l'œil</strong> (CRO). Ce point est essentiel pour la conception des verres : lorsque le regard balaie le verre, c'est autour du CRO que tourne l'axe de regard.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour les verres personnalisés, certains fabricants demandent la distance verre-œil ou la distance verre-centre de rotation de l'œil, mesurées par des tablettes ou des colonnes de mesure. L'opticien doit savoir à quoi correspondent ces grandeurs pour contrôler qu'une valeur est plausible.</div>"
      },
      {
       "titre": "L'œil théorique et l'œil réduit",
       "contenu": "<p>Pour calculer, on remplace l'œil réel par des modèles. L'<strong>œil théorique de Gullstrand</strong> décrit chaque dioptre (deux faces de la cornée, deux faces du cristallin) avec ses rayons et ses indices. Il conduit à une puissance totale d'environ 58,6 D au repos et d'environ 70,6 D en accommodation maximale.</p>\n<p>Pour les calculs courants, on utilise l'<strong>œil réduit</strong> : un dioptre sphérique unique séparant l'air d'un milieu d'indice 1,336, de puissance environ +60 D. Sa distance focale image vaut f' = n' / V = 1,336 / 60 ≈ 22,3 mm, mesurée depuis le dioptre. L'œil réduit est <strong>emmétrope</strong> si la rétine est exactement à cette distance.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Valeur courante</th></tr></thead>\n<tbody>\n<tr><td>Puissance totale au repos</td><td>Environ 60 D</td></tr>\n<tr><td>Puissance de la cornée</td><td>Environ 43 D</td></tr>\n<tr><td>Puissance du cristallin au repos</td><td>Environ 19 à 20 D</td></tr>\n<tr><td>Longueur axiale de l'œil emmétrope</td><td>Environ 24 mm</td></tr>\n<tr><td>Distance point nodal – rétine</td><td>Environ 17 mm</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ces valeurs sont des moyennes. D'un œil réel à l'autre, la longueur axiale peut varier de plusieurs millimètres ; c'est justement l'origine de la plupart des amétropies. On ne s'en sert que pour raisonner et estimer des ordres de grandeur.</div>"
      },
      {
       "titre": "Taille des images rétiniennes",
       "contenu": "<p>La taille de l'image rétinienne d'un objet dépend de l'<strong>angle</strong> sous lequel l'objet est vu, appelé <strong>diamètre apparent</strong>. Les rayons passant par le point nodal ne sont pas déviés ; en prenant une distance point nodal – rétine d'environ 17 mm, on obtient :</p>\n<p><strong>taille de l'image rétinienne ≈ 17 mm × α</strong>, avec α en radians.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> taille de l'image d'une lettre de 10/10 vue à 5 m.<br>1. La lettre mesure environ 7,3 mm et elle est vue à 5 000 mm.<br>2. Angle : α ≈ 7,3 / 5 000 ≈ 1,46 × 10<sup>−3</sup> rad (environ 5 minutes d'arc).<br>3. Image : 17 × 1,46 × 10<sup>−3</sup> ≈ 0,025 mm, soit 25 µm.<br>4. Un détail de la lettre (un cinquième) mesure environ 5 µm sur la rétine, soit deux diamètres de cônes fovéolaires : on retrouve la limite du pouvoir séparateur.</div>\n<p>Le port d'un verre correcteur modifie la taille de l'image rétinienne : un verre divergent la réduit, un verre convergent l'agrandit, d'autant plus que le verre est puissant et éloigné de l'œil. On appelle <strong>grossissement de la correction</strong> le rapport entre la taille de l'image rétinienne de l'œil corrigé et celle de l'œil non corrigé. Ce phénomène explique les plaintes d'un myope fort (« je vois petit ») ou d'un hypermétrope fort (« tout paraît plus grand et plus proche ») et l'intérêt des lentilles de contact, placées plus près de l'œil, dans ces cas.</p>"
      }
     ],
     "points_cles": [
      "Le globe oculaire mesure environ 24 mm ; ses trois tuniques sont fibreuse, vasculaire et nerveuse.",
      "La cornée apporte environ 43 D, le cristallin environ 19 à 20 D au repos ; l'œil total environ 60 D.",
      "Seul le cristallin peut varier de puissance : c'est l'organe de l'accommodation.",
      "Les cônes (fovéa) assurent vision fine et couleurs ; les bâtonnets la vision nocturne et périphérique.",
      "La papille, sortie du nerf optique, forme la tache aveugle.",
      "Six muscles oculomoteurs mobilisent chaque œil autour du centre de rotation, à environ 13 à 15 mm derrière la cornée.",
      "L'œil réduit est un dioptre unique de +60 D séparant l'air d'un milieu d'indice 1,336.",
      "Taille de l'image rétinienne ≈ 17 mm × angle (rad) ; un verre correcteur modifie cette taille."
     ],
     "lexique": [
      {
       "terme": "Sclère",
       "def": "Partie blanche et opaque de la tunique externe de l'œil."
      },
      {
       "terme": "Cornée",
       "def": "Partie antérieure transparente de la tunique externe, principal dioptre de l'œil."
      },
      {
       "terme": "Uvée",
       "def": "Tunique vasculaire formée de la choroïde, du corps ciliaire et de l'iris."
      },
      {
       "terme": "Cristallin",
       "def": "Lentille biconvexe souple de l'œil, dont la puissance varie lors de l'accommodation."
      },
      {
       "terme": "Fovéa",
       "def": "Centre de la macula, zone de la vision la plus fine, riche en cônes."
      },
      {
       "terme": "Papille",
       "def": "Point de sortie du nerf optique, dépourvu de photorécepteurs."
      },
      {
       "terme": "Chiasma optique",
       "def": "Croisement partiel des fibres des nerfs optiques."
      },
      {
       "terme": "Centre de rotation de l'œil",
       "def": "Point autour duquel tourne le globe lors des mouvements du regard."
      },
      {
       "terme": "Œil réduit",
       "def": "Modèle de l'œil à un seul dioptre de +60 D environ."
      },
      {
       "terme": "Diamètre apparent",
       "def": "Angle sous lequel un objet est vu depuis l'œil."
      }
     ]
    },
    {
     "id": "bopt-ametropies-compensation",
     "titre": "Amétropies sphériques et principe de la compensation",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Définir l'emmétropie, la myopie et l'hypermétropie à partir du punctum remotum",
      "Distinguer amétropies axiles et amétropies de réfraction",
      "Calculer la puissance d'un verre compensateur à partir de la position du punctum remotum",
      "Relier la plainte d'un client et son acuité non compensée au type d'amétropie",
      "Expliquer l'effet de la compensation sur la taille des images rétiniennes"
     ],
     "sections": [
      {
       "titre": "Emmétropie, punctum remotum et punctum proximum",
       "contenu": "<p>Un œil est <strong>emmétrope</strong> lorsque, sans accommoder, il forme sur la rétine l'image nette d'un objet situé à l'infini : son foyer image est sur la rétine. Un œil qui ne vérifie pas cette condition est <strong>amétrope</strong>.</p>\n<p>Deux points caractérisent la vision d'un œil :</p>\n<ul>\n<li>le <strong>punctum remotum</strong> (PR), point le plus éloigné vu net sans accommoder ; il est conjugué de la rétine par l'œil au repos ;</li>\n<li>le <strong>punctum proximum</strong> (PP), point le plus proche vu net en accommodant au maximum.</li>\n</ul>\n<p>L'intervalle entre PR et PP est le <strong>parcours d'accommodation</strong>. On caractérise l'amétropie par la <strong>réfraction oculaire</strong> R = 1 / d<sub>PR</sub>, où d<sub>PR</sub> est la distance algébrique, en mètres, du sommet de la cornée au PR. Pour un œil emmétrope, le PR est à l'infini et R = 0.</p>\n<table>\n<thead><tr><th>Œil</th><th>Position du PR</th><th>Réfraction oculaire</th><th>Foyer image de l'œil au repos</th></tr></thead>\n<tbody>\n<tr><td>Emmétrope</td><td>À l'infini</td><td>Nulle</td><td>Sur la rétine</td></tr>\n<tr><td>Myope</td><td>Réel, à distance finie devant l'œil</td><td>Négative</td><td>En avant de la rétine</td></tr>\n<tr><td>Hypermétrope</td><td>Virtuel, derrière l'œil</td><td>Positive</td><td>En arrière de la rétine</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "La myopie",
       "contenu": "<p>L'œil <strong>myope</strong> est trop convergent pour sa longueur : l'image d'un objet éloigné se forme en avant de la rétine. Sa vision de loin est floue ; il voit net jusqu'à son PR, réel, situé à une distance finie. Un myope de −2,00 D a son PR à 50 cm, un myope de −4,00 D à 25 cm. En vision de près, il voit net sans correction ou avec peu d'effort : le myope « lit sans lunettes ».</p>\n<p>On distingue :</p>\n<ul>\n<li>la <strong>myopie axile</strong>, la plus fréquente, due à un œil trop long (environ 1 mm de longueur axiale en trop correspond à environ −3 D) ;</li>\n<li>la <strong>myopie de réfraction</strong> (ou d'indice, de courbure), due à une cornée trop bombée ou à un cristallin trop puissant, par exemple au début d'une cataracte.</li>\n</ul>\n<p>La myopie apparaît souvent dans l'enfance ou l'adolescence et progresse pendant la croissance. Sa fréquence augmente dans le monde ; le temps passé à l'extérieur, à la lumière du jour, est reconnu comme un facteur protecteur, et des verres ou lentilles de <strong>freination</strong> de la myopie existent pour les enfants.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un adolescent qui plisse les yeux pour lire le tableau, s'approche de la télévision et lit sans difficulté présente un tableau typique de myopie. L'opticien l'oriente vers un examen ophtalmologique, obligatoire pour une première correction chez un mineur de moins de 16 ans.</div>"
      },
      {
       "titre": "L'hypermétropie",
       "contenu": "<p>L'œil <strong>hypermétrope</strong> n'est pas assez convergent pour sa longueur : sans accommoder, l'image d'un objet éloigné se forme en arrière de la rétine. Son PR est <strong>virtuel</strong>, situé derrière l'œil. Pour voir net, même de loin, il doit <strong>accommoder</strong> en permanence ; de près, l'effort est encore plus grand.</p>\n<p>Chez l'enfant et le jeune adulte, l'accommodation est importante : une hypermétropie moyenne peut être totalement compensée par l'effort accommodatif, et l'acuité de loin reste bonne. Les signes sont alors indirects : <strong>fatigue visuelle</strong>, maux de tête en fin de journée, picotements, difficultés de lecture prolongée, parfois strabisme convergent chez l'enfant. Avec l'âge et la baisse de l'accommodation, l'hypermétropie se manifeste davantage et la vision de près se trouble plus tôt que chez un emmétrope.</p>\n<p>Comme la myopie, l'hypermétropie peut être <strong>axile</strong> (œil trop court, cas le plus fréquent) ou <strong>de réfraction</strong>. Le nouveau-né est habituellement hypermétrope ; l'œil s'allonge ensuite pendant la croissance (<strong>emmétropisation</strong>).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une bonne acuité de loin ne prouve pas l'absence d'hypermétropie. Un jeune client qui se plaint de fatigue en lecture et lit 10/10 de loin peut être hypermétrope. Seule une mesure de réfraction (avec, si besoin, paralysie de l'accommodation réalisée par un médecin) permet de conclure.</div>"
      },
      {
       "titre": "Principe de la compensation",
       "contenu": "<p>Compenser une amétropie, c'est placer devant l'œil un verre qui forme de l'objet à l'infini une image située au PR de l'œil. L'œil, sans accommoder, voit alors net cette image. La condition s'énonce simplement : <strong>le foyer image du verre doit coïncider avec le punctum remotum de l'œil</strong>.</p>\n<ul>\n<li>Myope : PR réel devant l'œil, le foyer image doit être devant le verre : verre <strong>divergent</strong>.</li>\n<li>Hypermétrope : PR virtuel derrière l'œil, le foyer image doit être derrière le verre : verre <strong>convergent</strong>.</li>\n</ul>\n<p>Si le verre est placé à une distance d devant la cornée, sa puissance doit être V = 1 / (d<sub>PR</sub> + d), avec d<sub>PR</sub> la distance algébrique cornée – PR et d en mètres (positive, verre devant l'œil). On en déduit la relation entre la puissance du verre V et la réfraction oculaire R : V = R / (1 + d × R).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> puissance du verre d'un myope dont le PR est à 40 cm, verre à 12 mm de la cornée.<br>1. d<sub>PR</sub> = −0,400 m ; R = 1 / (−0,400) = −2,50 D.<br>2. Distance verre – PR : −0,400 + 0,012 = −0,388 m.<br>3. Puissance : V = 1 / (−0,388) ≈ −2,58 D.<br>4. Arrondi au quart de dioptrie le plus proche pour la commande : −2,50 D. Pour un PR à 10 cm, le même calcul donne R = −10 D et V = 1 / (−0,088) ≈ −11,36 D : l'effet de la distance verre-œil n'est plus négligeable.</div>"
      },
      {
       "titre": "Acuité non compensée et plaintes du client",
       "contenu": "<p>L'<strong>acuité visuelle non compensée</strong> (sans correction) donne une première idée de l'amétropie, mais n'en mesure pas la valeur. Pour la myopie, il existe une correspondance approximative : plus la myopie est forte, plus l'acuité de loin non compensée est basse.</p>\n<table>\n<thead><tr><th>Plainte ou observation</th><th>Hypothèse à vérifier</th></tr></thead>\n<tbody>\n<tr><td>Flou de loin, bonne vision de près</td><td>Myopie</td></tr>\n<tr><td>Fatigue en lecture, maux de tête, bonne acuité de loin chez un jeune</td><td>Hypermétropie latente</td></tr>\n<tr><td>Flou de près apparu vers 40-45 ans</td><td>Presbytie, éventuellement associée à une hypermétropie</td></tr>\n<tr><td>Vision déformée ou floue à toute distance, lettres dédoublées</td><td>Astigmatisme</td></tr>\n<tr><td>Baisse de vision brutale, douleur, œil rouge, éclairs lumineux</td><td>Urgence médicale : orienter immédiatement vers un médecin</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'opticien recueille les plaintes, mesure et compare, mais il ne pose pas de diagnostic médical. Toute baisse d'acuité non expliquée par une amétropie, ou non améliorée par la correction, justifie une orientation vers l'ophtalmologiste.</div>"
      },
      {
       "titre": "Compensation et taille des images rétiniennes",
       "contenu": "<p>Le verre correcteur modifie la taille de l'image rétinienne. Pour un verre placé à une distance d de la cornée, le grossissement dû à la correction vaut approximativement 1 / (1 − d × V) pour un verre mince. Avec V = −8,00 D et d = 12 mm : 1 / (1 + 0,096) ≈ 0,91, soit une image réduite d'environ 9 %. Avec V = +8,00 D : 1 / (1 − 0,096) ≈ 1,11, soit une image agrandie d'environ 11 %.</p>\n<p>Pour une amétropie <strong>axile</strong>, un verre placé au foyer objet de l'œil (environ 15 à 17 mm devant la cornée) donne une image rétinienne de même taille que celle d'un œil emmétrope : c'est la <strong>loi de Knapp</strong>. En pratique, les verres sont portés à une distance voisine, ce qui limite les différences de taille d'image entre les deux yeux dans l'<strong>anisométropie</strong> axile.</p>\n<p>Quand les deux yeux ont des réfractions très différentes, les images rétiniennes peuvent avoir des tailles différentes : c'est l'<strong>aniséiconie</strong>, source de gêne en vision binoculaire. Le choix entre lunettes et lentilles, le choix de la monture (verres proches de l'œil) et du verre (épaisseur, courbure) permettent de la limiter.</p>\n<p>Les amétropies évoluent au cours de la vie : la myopie progresse surtout pendant la scolarité puis se stabilise en général chez le jeune adulte ; l'hypermétropie latente devient manifeste avec la baisse de l'accommodation ; vers 60 ou 70 ans, l'évolution du cristallin peut entraîner une myopisation. Ces évolutions justifient des contrôles réguliers de la vue et le renouvellement de l'équipement lorsque la correction change.</p>"
      }
     ],
     "points_cles": [
      "Œil emmétrope : PR à l'infini ; myope : PR réel devant l'œil ; hypermétrope : PR virtuel derrière l'œil.",
      "La réfraction oculaire vaut R = 1 / dPR, distance mesurée depuis la cornée.",
      "La myopie se compense avec un verre divergent, l'hypermétropie avec un verre convergent.",
      "Condition de compensation : le foyer image du verre coïncide avec le PR de l'œil.",
      "V = R / (1 + d R) ; l'effet de la distance verre-œil devient sensible pour les fortes amétropies.",
      "L'hypermétropie du sujet jeune peut être masquée par l'accommodation : bonne acuité ne signifie pas absence d'amétropie.",
      "Un verre divergent réduit l'image rétinienne, un verre convergent l'agrandit.",
      "Toute baisse d'acuité non expliquée ou non améliorée par la correction justifie une orientation médicale."
     ],
     "lexique": [
      {
       "terme": "Emmétropie",
       "def": "État d'un œil qui voit net à l'infini sans accommoder."
      },
      {
       "terme": "Amétropie",
       "def": "Défaut de réfraction : myopie, hypermétropie ou astigmatisme."
      },
      {
       "terme": "Punctum proximum",
       "def": "Point le plus proche vu net en accommodant au maximum."
      },
      {
       "terme": "Parcours d'accommodation",
       "def": "Intervalle entre le punctum remotum et le punctum proximum."
      },
      {
       "terme": "Réfraction oculaire",
       "def": "Inverse de la distance cornée – punctum remotum, en dioptries."
      },
      {
       "terme": "Myopie axile",
       "def": "Myopie due à un globe oculaire trop long."
      },
      {
       "terme": "Hypermétropie latente",
       "def": "Partie de l'hypermétropie compensée en permanence par l'accommodation."
      },
      {
       "terme": "Emmétropisation",
       "def": "Évolution de l'œil de l'enfant vers l'emmétropie pendant la croissance."
      },
      {
       "terme": "Loi de Knapp",
       "def": "Un verre placé au foyer objet de l'œil compense une amétropie axile sans modifier la taille de l'image."
      },
      {
       "terme": "Aniséiconie",
       "def": "Différence de taille entre les images perçues par les deux yeux."
      }
     ]
    },
    {
     "id": "bopt-astigmatisme-accommodation-presbytie",
     "titre": "Astigmatisme oculaire, accommodation et presbytie",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Classer les astigmatismes oculaires selon leur origine, leur axe et la position des focales",
      "Expliquer la compensation de l'astigmatisme et l'effet d'une erreur d'axe",
      "Décrire le mécanisme de l'accommodation et calculer une amplitude d'accommodation",
      "Expliquer l'apparition de la presbytie et estimer une addition",
      "Présenter les principales solutions de compensation de la presbytie"
     ],
     "sections": [
      {
       "titre": "L'astigmatisme oculaire",
       "contenu": "<p>Un œil est <strong>astigmate</strong> lorsque sa puissance n'est pas la même dans tous les méridiens. Comme pour un verre torique, l'image d'un point devient deux focales perpendiculaires : aucune distance ne donne une image parfaitement nette. L'astigmate voit flou, et de façon plus marquée certaines orientations de traits ; il se plaint aussi de fatigue, de maux de tête, de lettres « qui bavent » ou se confondent (H et N, 8 et B).</p>\n<p>L'astigmatisme est le plus souvent d'origine <strong>cornéenne</strong> : la cornée a une forme torique. Le cristallin peut aussi y contribuer (astigmatisme interne). On parle d'astigmatisme <strong>régulier</strong> quand les deux méridiens principaux sont perpendiculaires (compensable par un verre torique) et d'astigmatisme <strong>irrégulier</strong> dans le cas contraire, par exemple dans le <strong>kératocône</strong>, déformation progressive de la cornée qui relève d'un suivi médical et souvent de lentilles rigides.</p>\n<table>\n<thead><tr><th>Classement selon l'axe (cylindre négatif)</th><th>Axe</th><th>Remarque</th></tr></thead>\n<tbody>\n<tr><td>Astigmatisme direct (conforme à la règle)</td><td>Voisin de 180° (environ 160° à 20°)</td><td>Méridien vertical le plus puissant ; fréquent chez le jeune</td></tr>\n<tr><td>Astigmatisme inverse (contre la règle)</td><td>Voisin de 90° (environ 70° à 110°)</td><td>Méridien horizontal le plus puissant ; plus fréquent avec l'âge</td></tr>\n<tr><td>Astigmatisme oblique</td><td>Entre ces zones</td><td>Plus difficile à supporter</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Classement selon la position des focales et compensation",
       "contenu": "<p>Selon la position des deux focales par rapport à la rétine (œil au repos), on distingue :</p>\n<table>\n<thead><tr><th>Type</th><th>Position des focales</th><th>Exemple de formule</th></tr></thead>\n<tbody>\n<tr><td>Myopique simple</td><td>Une sur la rétine, une devant</td><td>0,00 (−1,00) 180°</td></tr>\n<tr><td>Myopique composé</td><td>Les deux devant la rétine</td><td>−2,00 (−1,00) 180°</td></tr>\n<tr><td>Hypermétropique simple</td><td>Une sur la rétine, une derrière</td><td>+1,00 (−1,00) 90°</td></tr>\n<tr><td>Hypermétropique composé</td><td>Les deux derrière la rétine</td><td>+3,00 (−1,00) 90°</td></tr>\n<tr><td>Mixte</td><td>Une devant, une derrière</td><td>+1,00 (−2,00) 180°</td></tr>\n</tbody>\n</table>\n<p>On compense l'astigmatisme régulier avec un <strong>verre torique</strong> dont les méridiens principaux sont alignés sur ceux de l'œil. La valeur et surtout l'<strong>axe</strong> doivent être respectés : si l'axe du cylindre est tourné d'un angle θ par rapport à l'axe prescrit, il subsiste un astigmatisme résiduel d'environ 2 × C × sin θ.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> effet d'une erreur d'axe. Cylindre prescrit −2,00 D, axe monté décalé de 5°.<br>1. sin 5° ≈ 0,087.<br>2. Astigmatisme résiduel : 2 × 2,00 × 0,087 ≈ 0,35 D.<br>3. Interprétation : 0,35 D d'astigmatisme résiduel est perceptible. Plus le cylindre est fort, plus l'axe doit être monté avec précision ; un écart de 5° est peu gênant sur un cylindre de 0,25 D (résiduel ≈ 0,04 D), mais pas sur un cylindre de 2,00 D.</div>"
      },
      {
       "titre": "Le mécanisme de l'accommodation",
       "contenu": "<p>L'<strong>accommodation</strong> est l'augmentation de la puissance de l'œil qui permet de voir net des objets rapprochés. Selon le modèle classique, la <strong>contraction du muscle ciliaire</strong> relâche la tension de la zonule ; le cristallin, élastique, se bombe (surtout sa face avant) et sa puissance augmente. Lorsque le muscle se relâche, la zonule se tend et le cristallin s'aplatit.</p>\n<p>L'accommodation s'accompagne de deux autres réactions, formant la <strong>triade de la vision de près</strong> : la <strong>convergence</strong> des deux yeux et le <strong>myosis</strong> (rétrécissement pupillaire). Ces réactions sont liées : un trouble de l'accommodation retentit sur la convergence, et inversement.</p>\n<p>L'<strong>amplitude d'accommodation</strong> A est l'augmentation maximale de puissance que l'œil peut produire : A = 1 / d<sub>PR</sub> − 1 / d<sub>PP</sub>, avec les distances algébriques en mètres mesurées depuis l'œil.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> amplitude d'un myope de −2,00 D dont le PP est à 10 cm.<br>1. PR à −0,50 m : 1 / d<sub>PR</sub> = −2,00 D.<br>2. PP à −0,10 m : 1 / d<sub>PP</sub> = −10,00 D.<br>3. A = −2,00 − (−10,00) = 8,00 D.<br>4. Pour un emmétrope ayant la même amplitude, le PP serait à 1 / 8 = 12,5 cm. La myopie rapproche le PP et le PR, mais ne change pas l'amplitude.</div>"
      },
      {
       "titre": "La presbytie",
       "contenu": "<p>Le cristallin perd progressivement sa souplesse dès l'enfance : l'amplitude d'accommodation diminue tout au long de la vie. Elle devient gênante lorsque le PP s'éloigne au-delà de la distance de lecture habituelle : c'est la <strong>presbytie</strong>. Elle n'est pas une amétropie mais une conséquence normale du vieillissement ; elle touche tout le monde, en général à partir de 40 à 45 ans.</p>\n<table>\n<thead><tr><th>Âge (ans)</th><th>Amplitude moyenne (ordre de grandeur)</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>Environ 14 D</td></tr>\n<tr><td>20</td><td>Environ 10 D</td></tr>\n<tr><td>30</td><td>Environ 7 D</td></tr>\n<tr><td>40</td><td>Environ 4,5 D</td></tr>\n<tr><td>45</td><td>Environ 3,5 D</td></tr>\n<tr><td>50</td><td>Environ 2,5 D</td></tr>\n<tr><td>60</td><td>Environ 1 D</td></tr>\n</tbody>\n</table>\n<p>Les signes sont caractéristiques : le client éloigne le texte pour lire (« j'ai les bras trop courts »), a besoin de plus de lumière, ressent de la fatigue en fin de journée. Un hypermétrope non corrigé devient presbyte plus tôt, car il consomme déjà une partie de son accommodation en vision de loin ; un myope faible retarde la gêne en retirant ses lunettes pour lire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour lire sans fatigue, on considère qu'un sujet ne doit utiliser qu'une partie de son amplitude (en général les deux tiers, parfois la moitié selon les auteurs) et garder le reste en réserve. L'<strong>addition</strong> est la puissance convergente supplémentaire, ajoutée à la correction de loin, qui comble la différence.</div>"
      },
      {
       "titre": "Estimer une addition",
       "contenu": "<p>Pour une distance de travail d (en mètres, prise en valeur absolue), le besoin d'accommodation d'un sujet corrigé de loin est 1 / d. L'addition théorique vaut :</p>\n<p><strong>Add = 1 / d − (2/3) × A</strong></p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> addition d'un client de 50 ans, amplitude 2,50 D, qui lit à 33 cm.<br>1. Besoin : 1 / 0,33 ≈ 3,00 D.<br>2. Accommodation utilisable confortablement : 2/3 × 2,50 ≈ 1,67 D.<br>3. Addition : 3,00 − 1,67 ≈ 1,33 D.<br>4. Proposition : essayer +1,25 D et +1,50 D en vision de près, à la distance réelle de lecture du client, et retenir la plus faible qui donne une lecture confortable du texte souhaité. Une addition trop forte rapproche excessivement la zone de netteté.</div>\n<p>L'addition se vérifie toujours par un essai en situation : la distance de lecture, la taille des caractères, l'éclairage et les besoins (écran, bricolage, partition de musique) varient d'un client à l'autre. L'addition est la même pour les deux yeux dans la grande majorité des cas ; une addition différente entre les yeux est inhabituelle et doit être vérifiée.</p>"
      },
      {
       "titre": "Solutions de compensation de la presbytie",
       "contenu": "<table>\n<thead><tr><th>Solution</th><th>Principe</th><th>Avantages</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Verres unifocaux de près</td><td>Correction VL + addition sur tout le verre</td><td>Large champ de lecture, prix modéré</td><td>Flou de loin : retirer les lunettes ou regarder au-dessus</td></tr>\n<tr><td>Verres double foyer</td><td>Zone VL en haut, segment VP visible en bas</td><td>Champs nets et larges</td><td>Saut d'image, ligne de séparation visible, pas de vision intermédiaire</td></tr>\n<tr><td>Verres progressifs</td><td>Puissance qui augmente progressivement du haut vers le bas</td><td>Vision à toutes distances, esthétique</td><td>Zones latérales de flou, adaptation nécessaire, centrage exigeant</td></tr>\n<tr><td>Verres de proximité (dégressifs)</td><td>Puissance de près en bas, qui diminue vers le haut pour la vision intermédiaire</td><td>Travail de bureau, écrans</td><td>Pas de vision de loin</td></tr>\n<tr><td>Lentilles multifocales ou monovision</td><td>Lentilles de contact</td><td>Sans lunettes</td><td>Adaptation spécialisée, compromis de qualité visuelle</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le choix dépend du mode de vie : un conducteur qui lit aussi beaucoup sera souvent orienté vers des progressifs, une personne qui travaille longtemps sur écran pourra bénéficier en plus de verres de proximité. Proposer une seconde paire adaptée à un usage précis fait partie du conseil, à condition d'expliquer clairement le besoin.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les lunettes loupes prêtes à porter vendues en grande surface ont la même puissance sur les deux verres et un écart entre centres standard. Elles ne compensent ni l'astigmatisme, ni une différence entre les deux yeux, et peuvent masquer une pathologie. Le conseil professionnel est d'inciter à un contrôle de la vue.</div>"
      }
     ],
     "points_cles": [
      "L'astigmatisme est le plus souvent cornéen ; régulier, il se compense par un verre torique.",
      "Astigmatisme direct : axe du cylindre négatif voisin de 180° ; inverse : voisin de 90°.",
      "Une erreur d'axe θ laisse un astigmatisme résiduel d'environ 2 C sin θ.",
      "L'accommodation résulte de la contraction du muscle ciliaire qui laisse bomber le cristallin.",
      "Amplitude d'accommodation : A = 1 / dPR − 1 / dPP.",
      "La presbytie apparaît vers 40-45 ans par perte d'amplitude ; ce n'est pas une amétropie.",
      "Addition estimée : 1 / d − 2/3 A, toujours vérifiée par un essai en situation.",
      "Solutions : unifocaux de près, double foyer, progressifs, verres de proximité, lentilles."
     ],
     "lexique": [
      {
       "terme": "Astigmatisme régulier",
       "def": "Astigmatisme à méridiens principaux perpendiculaires, compensable par un verre torique."
      },
      {
       "terme": "Kératocône",
       "def": "Déformation progressive conique de la cornée donnant un astigmatisme irrégulier."
      },
      {
       "terme": "Astigmatisme direct",
       "def": "Astigmatisme dont le méridien vertical est le plus puissant."
      },
      {
       "terme": "Astigmatisme mixte",
       "def": "Astigmatisme dont une focale est devant et l'autre derrière la rétine."
      },
      {
       "terme": "Accommodation",
       "def": "Augmentation de puissance du cristallin pour voir net de près."
      },
      {
       "terme": "Zonule",
       "def": "Ensemble de fibres reliant le cristallin au corps ciliaire."
      },
      {
       "terme": "Amplitude d'accommodation",
       "def": "Augmentation maximale de puissance que l'œil peut produire."
      },
      {
       "terme": "Presbytie",
       "def": "Diminution liée à l'âge de l'amplitude d'accommodation gênant la vision de près."
      },
      {
       "terme": "Addition",
       "def": "Puissance convergente ajoutée à la correction de loin pour la vision de près."
      },
      {
       "terme": "Verre progressif",
       "def": "Verre dont la puissance augmente progressivement du haut vers le bas."
      }
     ]
    },
    {
     "id": "bopt-vision-binoculaire-pathologies",
     "titre": "Vision binoculaire, pathologies et compensation inadaptée",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire les conditions et les degrés de la vision binoculaire",
      "Distinguer hétérophorie, strabisme et amblyopie",
      "Relier convergence, accommodation et effets prismatiques des verres",
      "Reconnaître les principales pathologies oculaires et les signes d'alerte",
      "Analyser les conséquences d'une compensation inadaptée ou d'un équipement mal réalisé"
     ],
     "sections": [
      {
       "titre": "La vision binoculaire : conditions et degrés",
       "contenu": "<p>La <strong>vision binoculaire</strong> est la capacité de fusionner en une perception unique les deux images, légèrement différentes, fournies par les deux yeux. Elle suppose :</p>\n<ul>\n<li>deux yeux de qualité visuelle voisine, sans grande différence de netteté ni de taille d'image ;</li>\n<li>des muscles oculomoteurs capables de diriger les deux axes visuels vers le même point ;</li>\n<li>une <strong>correspondance rétinienne normale</strong> : les deux fovéas, et des points rétiniens dits correspondants, envoient au cerveau des informations localisées dans la même direction.</li>\n</ul>\n<p>On décrit classiquement trois degrés : la <strong>perception simultanée</strong> (les deux images sont perçues en même temps), la <strong>fusion</strong> (elles sont réunies en une seule) et la <strong>vision stéréoscopique</strong> (perception du relief grâce au décalage entre les deux images). La stéréoscopie est utile pour les gestes de précision, la conduite, le sport.</p>\n<p>Chaque personne a un <strong>œil directeur</strong> (dominant), celui qu'elle utilise spontanément pour viser. Le repérer est utile pour certaines solutions comme la monovision en lentilles, ou pour choisir l'œil à privilégier en cas de compromis.</p>"
      },
      {
       "titre": "Convergence, phories et strabismes",
       "contenu": "<p>Pour regarder un objet proche, les deux yeux tournent vers le nez : c'est la <strong>convergence</strong>. Elle est liée à l'accommodation : un sujet qui accommode de 2,50 D pour lire à 40 cm converge en même temps. L'angle de convergence s'exprime souvent en dioptries prismatiques ; pour un écart pupillaire de 64 mm, regarder à 40 cm demande environ 8 Δ de convergence par œil (3,2 cm / 0,40 m).</p>\n<p>Lorsque la fusion est interrompue (un œil caché), les yeux prennent leur position de repos. S'ils dévient légèrement mais que la fusion les réaligne dès que les deux yeux voient, on parle d'<strong>hétérophorie</strong> (ou phorie) : ésophorie (tendance vers l'intérieur), exophorie (vers l'extérieur), hyperphorie (vers le haut). Une phorie bien compensée ne gêne pas ; mal compensée, elle donne fatigue, maux de tête, vision double intermittente.</p>\n<p>Si la déviation est permanente et manifeste, même les deux yeux ouverts, il s'agit d'un <strong>strabisme</strong> (hétérotropie). Chez l'enfant, le cerveau neutralise l'image de l'œil dévié, ce qui peut entraîner une <strong>amblyopie</strong> : baisse d'acuité d'un œil, non améliorée par la correction optique seule, qu'il faut traiter tôt (correction, occlusion de l'œil sain) sous contrôle médical et orthoptique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la <strong>diplopie</strong> (vision double) binoculaire d'apparition récente chez un adulte est un signe d'alerte qui impose une consultation médicale rapide. Elle ne se règle pas par un simple changement de lunettes.</div>\n<p>Les verres interviennent dans cet équilibre : un myope corrigé en lunettes converge un peu moins qu'en lentilles en vision de près (quand le regard converge, il passe du côté nasal des verres divergents, qui produisent alors un effet prismatique base interne), un hypermétrope un peu plus. Un mauvais centrage crée des prismes induits que les muscles doivent compenser.</p>"
      },
      {
       "titre": "Le champ visuel",
       "contenu": "<p>Le <strong>champ visuel</strong> est l'étendue de l'espace perçue par un œil immobile qui fixe un point. Pour un œil, il s'étend environ à 90° et plus du côté temporal, 60° du côté nasal, 50 à 60° vers le haut et 70° vers le bas ; en binoculaire, le champ horizontal total dépasse 180°, avec une zone centrale commune aux deux yeux où la vision du relief est possible.</p>\n<p>La qualité de vision n'est pas uniforme dans le champ : l'acuité est maximale au point de fixation (fovéa) et chute rapidement en périphérie, où la sensibilité au mouvement reste bonne. La tache aveugle, située à environ 15° du côté temporal du point de fixation, n'est pas perçue en vision binoculaire, car l'autre œil voit la zone correspondante.</p>\n<p>Pour l'opticien, le champ visuel intervient de deux façons. D'abord, la monture et les verres limitent le champ corrigé : un petit calibre, un cercle épais, un verre progressif à zones latérales étroites réduisent le champ net. Ensuite, certaines pathologies (glaucome, atteintes neurologiques, rétinopathies) amputent le champ visuel sans que le client s'en rende compte. Un client qui se cogne, rate des marches ou ne voit pas les voitures arriver sur le côté doit être orienté vers un médecin.</p>"
      },
      {
       "titre": "Pathologies oculaires : notions et signes d'alerte",
       "contenu": "<p>L'opticien n'est pas habilité à diagnostiquer une maladie, mais il doit en connaître les signes pour orienter sans délai. Les principales pathologies rencontrées sont :</p>\n<table>\n<thead><tr><th>Pathologie</th><th>Description</th><th>Signes pouvant alerter l'opticien</th></tr></thead>\n<tbody>\n<tr><td>Cataracte</td><td>Opacification progressive du cristallin, liée surtout à l'âge</td><td>Baisse de vision lente, éblouissement, couleurs ternes, myopisation, correction qui n'améliore plus l'acuité</td></tr>\n<tr><td>Glaucome chronique</td><td>Atteinte progressive du nerf optique, souvent liée à une pression intraoculaire élevée</td><td>Souvent aucun symptôme au début ; perte du champ visuel périphérique tardive ; antécédents familiaux</td></tr>\n<tr><td>Glaucome aigu</td><td>Blocage brutal de l'évacuation de l'humeur aqueuse</td><td>Œil rouge et très douloureux, baisse de vision, halos colorés, nausées : urgence</td></tr>\n<tr><td>DMLA</td><td>Dégénérescence maculaire liée à l'âge</td><td>Déformation des lignes droites, tache centrale, difficulté à lire et reconnaître les visages</td></tr>\n<tr><td>Rétinopathie diabétique</td><td>Atteinte des vaisseaux de la rétine chez le diabétique</td><td>Fluctuations de la vision ; surveillance annuelle du fond d'œil recommandée</td></tr>\n<tr><td>Décollement de rétine</td><td>Séparation de la rétine de la paroi de l'œil</td><td>Éclairs lumineux, pluie de « mouches », voile qui s'étend : urgence</td></tr>\n<tr><td>Conjonctivite, sécheresse oculaire</td><td>Inflammation de la conjonctive, film lacrymal insuffisant</td><td>Œil rouge, sensation de sable, larmoiement</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un client qui demande « juste des lunettes plus fortes » parce qu'il voit moins bien peut présenter une cataracte, une DMLA ou un glaucome. Si l'acuité ne remonte pas à un niveau normal avec la meilleure correction, ou si la baisse est rapide, l'opticien ne vend pas une solution optique à la place d'un avis médical : il oriente vers l'ophtalmologiste.</div>"
      },
      {
       "titre": "Incidence d'une compensation inadaptée",
       "contenu": "<p>Une correction qui ne correspond pas aux besoins réels de l'œil produit des effets prévisibles :</p>\n<table>\n<thead><tr><th>Situation</th><th>Conséquence pour le porteur</th></tr></thead>\n<tbody>\n<tr><td>Myope surcorrigé (verre trop négatif)</td><td>Le sujet accommode en permanence pour voir de loin : fatigue, maux de tête, gêne en vision de près, impression de « trop net » et d'images petites</td></tr>\n<tr><td>Myope sous-corrigé</td><td>Vision de loin insuffisante, notamment la nuit et en conduite</td></tr>\n<tr><td>Hypermétrope sous-corrigé</td><td>Effort accommodatif persistant, fatigue, presbytie précoce</td></tr>\n<tr><td>Hypermétrope surcorrigé</td><td>Flou de loin (le sujet devient artificiellement myope)</td></tr>\n<tr><td>Erreur d'axe ou de cylindre</td><td>Vision déformée, sol qui penche, inconfort, maux de tête</td></tr>\n<tr><td>Addition trop forte</td><td>Distance de lecture trop courte, champ intermédiaire réduit</td></tr>\n<tr><td>Addition trop faible</td><td>Lecture éloignée et fatigante</td></tr>\n</tbody>\n</table>\n<p>La sensibilité varie : un écart de 0,25 D est souvent perçu en vision de loin par un sujet jeune et exigeant, alors qu'il peut passer inaperçu chez un autre. Une forte variation par rapport à l'ancienne correction (changement d'axe important, cylindre augmenté de plusieurs quarts) demande une période d'adaptation ; elle doit être expliquée au client.</p>"
      },
      {
       "titre": "Incidence d'un équipement mal réalisé",
       "contenu": "<p>Même avec la bonne prescription, l'équipement peut être inadapté si la réalisation ou l'ajustage sont défectueux :</p>\n<ul>\n<li><strong>centrage horizontal erroné</strong> : prisme horizontal induit (règle de Prentice), surtout gênant sur les verres forts et lorsque le prisme est base externe pour un myope en vision de loin ;</li>\n<li><strong>hauteurs différentes entre les deux yeux</strong> : prisme vertical induit, très mal toléré (les capacités de compensation verticale sont faibles) ;</li>\n<li><strong>progressifs mal centrés en hauteur</strong> : centrage trop haut, le porteur lit en relevant le menton et voit flou de loin à travers le début de la progression ; trop bas, il manque de champ en vision de près ;</li>\n<li><strong>inversion des verres droit et gauche</strong> : erreur grossière, détectée par le contrôle final ;</li>\n<li><strong>angle pantoscopique, galbe ou distance verre-œil très différents</strong> des conditions de mesure : modification de la puissance efficace et des aberrations, notamment sur les verres forts.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une réclamation « je vois mal avec mes nouvelles lunettes ».<br>1. Écouter et faire préciser : distance concernée, œil concerné, depuis quand, en quelles circonstances.<br>2. Contrôler l'équipement au frontofocomètre : puissances, axes, centrage, prisme, comparaison avec la commande et l'ordonnance.<br>3. Contrôler l'ajustage sur le visage : hauteurs, inclinaison, distance verre-œil, symétrie.<br>4. Vérifier l'acuité avec l'équipement, œil par œil puis en binoculaire.<br>5. Conclure : erreur de réalisation (refaire), problème d'ajustage (corriger), période d'adaptation normale (expliquer, fixer un rendez-vous), ou besoin d'un nouvel avis du prescripteur.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une réclamation bien traitée fidélise le client. La traçabilité (fiche de commande, mesures, contrôle à réception, contrôle final) permet de retrouver rapidement l'origine d'un défaut et d'éviter qu'il ne se reproduise.</div>"
      }
     ],
     "points_cles": [
      "La vision binoculaire comporte perception simultanée, fusion et vision stéréoscopique.",
      "Accommodation et convergence sont liées ; la vision de près sollicite les deux.",
      "Une hétérophorie est une déviation latente compensée par la fusion ; un strabisme est une déviation manifeste.",
      "L'amblyopie de l'enfant se traite tôt, sous contrôle médical et orthoptique.",
      "Diplopie récente, œil rouge douloureux, éclairs et voile, baisse brutale : urgence médicale.",
      "Cataracte, glaucome, DMLA, rétinopathie diabétique : l'opticien repère et oriente, il ne diagnostique pas.",
      "Surcorrection d'un myope et sous-correction d'un hypermétrope provoquent un effort accommodatif inutile.",
      "Centrage, hauteurs et ajustage défectueux créent des prismes et des inconforts même avec la bonne prescription."
     ],
     "lexique": [
      {
       "terme": "Fusion",
       "def": "Réunion par le cerveau des images des deux yeux en une perception unique."
      },
      {
       "terme": "Vision stéréoscopique",
       "def": "Perception du relief grâce au décalage entre les images des deux yeux."
      },
      {
       "terme": "Œil directeur",
       "def": "Œil utilisé spontanément pour viser."
      },
      {
       "terme": "Hétérophorie",
       "def": "Déviation latente des yeux, compensée par la fusion."
      },
      {
       "terme": "Strabisme",
       "def": "Déviation manifeste et permanente d'un œil."
      },
      {
       "terme": "Amblyopie",
       "def": "Baisse d'acuité d'un œil non améliorée par la seule correction optique."
      },
      {
       "terme": "Diplopie",
       "def": "Vision double."
      },
      {
       "terme": "Cataracte",
       "def": "Opacification du cristallin."
      },
      {
       "terme": "Glaucome",
       "def": "Atteinte progressive du nerf optique souvent liée à une pression intraoculaire élevée."
      },
      {
       "terme": "DMLA",
       "def": "Dégénérescence maculaire liée à l'âge, atteinte de la vision centrale."
      }
     ]
    },
    {
     "id": "bopt-examen-de-vue",
     "titre": "Examen de vue et mesures préalables",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Situer l'examen de vue de l'opticien dans le cadre réglementaire de la santé visuelle",
      "Conduire l'entretien préalable et réaliser les mesures préalables",
      "Décrire les étapes d'une réfraction subjective monoculaire et binoculaire",
      "Utiliser le brouillage, le test bichrome et le cylindre croisé",
      "Déterminer et vérifier une addition en vision de près",
      "Conclure l'examen et orienter le client lorsque c'est nécessaire"
     ],
     "sections": [
      {
       "titre": "Le cadre de l'examen de vue",
       "contenu": "<p>En France, la prescription de verres correcteurs relève du médecin <strong>ophtalmologiste</strong> ; l'<strong>orthoptiste</strong> peut aussi intervenir dans certaines conditions fixées par les textes. L'opticien-lunetier, profession de santé réglementée par le Code de la santé publique, délivre les équipements et peut, dans des conditions précises, <strong>adapter</strong> la correction lors d'un renouvellement : ordonnance en cours de validité, client ayant atteint l'âge minimum fixé par les textes (16 ans), absence d'opposition du prescripteur. Il réalise alors un <strong>examen de réfraction</strong> et informe le prescripteur de la correction délivrée.</p>\n<p>Les durées de validité des ordonnances pour un renouvellement dépendent de l'âge du client (actuellement 5 ans de 16 à 42 ans et 3 ans à partir de 43 ans). Ces règles évoluent : il faut toujours consulter les textes en vigueur ou les consignes de l'enseigne.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'exercice de la profession d'opticien-lunetier exige un diplôme spécifique (BTS Opticien-lunetier ou titre reconnu). Le titulaire du bac professionnel travaille sous la responsabilité d'un opticien diplômé ; il doit maîtriser l'examen de vue pour l'assister, préparer la poursuite d'études et répondre à l'épreuve écrite.</div>"
      },
      {
       "titre": "L'entretien préalable",
       "contenu": "<p>L'examen commence par un <strong>entretien</strong> (anamnèse) qui guide toute la suite. Les informations recueillies sont notées sur la <strong>fiche client</strong> :</p>\n<ul>\n<li>identité, âge, profession, activités (écran, conduite de nuit, sport, bricolage) ;</li>\n<li>motif de la visite : renouvellement, gêne, perte ou casse, nouvelle activité ;</li>\n<li>plaintes précises : flou de loin ou de près, fatigue, maux de tête, éblouissement, vision double ;</li>\n<li>équipement actuel : âge, satisfaction, port permanent ou occasionnel ;</li>\n<li>antécédents : chirurgie oculaire, pathologies (diabète, hypertension, glaucome familial), traitements, date du dernier examen chez l'ophtalmologiste.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> formuler des questions ouvertes (« dans quelles situations êtes-vous gêné ? ») puis fermées pour préciser (« plutôt le soir ? »). Reformuler la demande avant de passer aux mesures : le client se sent écouté, et l'opticien évite de chercher dans la mauvaise direction.</div>"
      },
      {
       "titre": "Les mesures préalables",
       "contenu": "<p>Avant la réfraction proprement dite, plusieurs mesures objectives sont réalisées :</p>\n<table>\n<thead><tr><th>Mesure</th><th>Moyen</th><th>Intérêt</th></tr></thead>\n<tbody>\n<tr><td>Mesure de l'ancien équipement</td><td>Frontofocomètre</td><td>Point de départ, comparaison, explication des plaintes</td></tr>\n<tr><td>Acuité visuelle sans correction et avec l'ancienne correction</td><td>Projecteur de tests ou écran, échelle de Monoyer, test de près</td><td>Évaluer le besoin et l'efficacité de l'ancienne paire</td></tr>\n<tr><td>Réfraction objective</td><td>Autoréfractomètre (et kératomètre)</td><td>Valeur de départ de la réfraction subjective ; astigmatisme cornéen</td></tr>\n<tr><td>Écart pupillaire de loin</td><td>Pupillomètre</td><td>Réglage du réfracteur ou de la monture d'essai</td></tr>\n<tr><td>Œil directeur</td><td>Visée à travers un trou</td><td>Équilibre et solutions particulières</td></tr>\n</tbody>\n</table>\n<p>Les conditions de mesure doivent être maîtrisées : distance de vision de loin d'au moins 5 m (réelle ou obtenue par miroir), éclairement de la salle et luminance des tests adaptés, appareils propres et désinfectés aux points de contact (mentonnière, appui-front), client installé confortablement.</p>\n<p>Selon les plaintes, quelques tests complémentaires simples peuvent compléter le bilan : la <strong>grille d'Amsler</strong> (quadrillage dont les lignes doivent paraître droites et complètes, une déformation pouvant évoquer une atteinte maculaire), un test de <strong>vision des couleurs</strong> (planches pseudo-isochromatiques), un <strong>test de l'écran</strong> (cover test, qui consiste à cacher puis découvrir un œil pour observer un mouvement révélant une phorie ou un strabisme), ou la mesure du <strong>punctum proximum de convergence</strong>. Ces tests ne servent pas à poser un diagnostic : ils aident à repérer une situation qui justifie une orientation.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'autoréfractomètre a tendance, chez le sujet jeune, à donner un résultat trop myopique ou pas assez hypermétropique, car le client peut accommoder pendant la mesure. Sa valeur n'est jamais recopiée telle quelle : elle sert seulement de point de départ.</div>"
      },
      {
       "titre": "La réfraction subjective monoculaire",
       "contenu": "<p>La réfraction se fait d'abord œil par œil, l'autre étant occulté. Le principe directeur est d'éviter l'accommodation : on cherche la correction la plus <strong>convexe</strong> (ou la moins concave) donnant la meilleure acuité.</p>\n<ol>\n<li><strong>Brouillage</strong> : on place devant l'œil la valeur de départ augmentée de +0,75 à +1,00 D. L'œil, rendu artificiellement myope, ne peut plus accommoder utilement ; l'acuité baisse nettement.</li>\n<li><strong>Débrouillage</strong> : on diminue la sphère par paliers de 0,25 D en faisant lire, jusqu'à l'acuité maximale. On s'arrête au premier palier donnant la meilleure acuité : continuer vers le négatif ferait seulement accommoder le client et rendrait les lettres « plus petites et plus noires ».</li>\n<li><strong>Recherche de l'astigmatisme</strong> : cadran de Parent (lignes rayonnantes) ou, plus précisément, <strong>cylindre croisé de Jackson</strong> (lentille +0,25/−0,25 D ou +0,50/−0,50 D à axes perpendiculaires, retournée devant l'œil) pour affiner d'abord l'axe puis la puissance du cylindre, en maintenant l'équivalent sphérique.</li>\n<li><strong>Contrôle de la sphère</strong> : <strong>test bichrome</strong> (rouge-vert). Si les lettres sur fond rouge sont plus nettes, l'œil est encore relativement myope : on ajoute −0,25 D ; si le vert est plus net, on ajoute +0,25 D. On recherche l'égalité ou une légère préférence pour le rouge.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduite du débrouillage. Valeur de départ OD −2,00 D.<br>1. Brouillage à −1,00 D : acuité environ 3/10.<br>2. −1,25 D : 4/10 ; −1,50 D : 6/10 ; −1,75 D : 8/10 ; −2,00 D : 10/10 ; −2,25 D : 10/10 « plus contrasté ».<br>3. Retenir −2,00 D, premier palier donnant 10/10 : la préférence pour −2,25 D vient de l'accommodation.<br>4. Confirmer au test bichrome : égalité rouge-vert ou rouge légèrement préféré.</div>"
      },
      {
       "titre": "L'équilibre binoculaire et la vision de près",
       "contenu": "<p>Une fois chaque œil corrigé, on vérifie que les deux yeux sont <strong>équilibrés</strong>, c'est-à-dire qu'ils accommodent de la même façon. Une méthode courante consiste à brouiller les deux yeux de +0,50 à +0,75 D puis à dissocier les images par des prismes verticaux (un œil voit la ligne du haut, l'autre celle du bas) : on égalise la netteté en ajoutant +0,25 D à l'œil qui voit le mieux. On termine en binoculaire en débrouillant simultanément jusqu'à la meilleure acuité.</p>\n<p>Chez le presbyte, on détermine ensuite l'<strong>addition</strong> : à partir d'une valeur estimée selon l'âge ou l'ancienne paire, on fait lire un texte à la distance habituelle du client, on ajuste par paliers de 0,25 D et on vérifie l'étendue de la zone nette en rapprochant et en éloignant le texte. Le test bichrome de près ou le cylindre croisé fixe peuvent affiner le résultat.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la correction retenue n'est pas seulement celle qui donne la meilleure acuité au réfracteur. Elle doit être confortable en situation réelle : on la vérifie en monture d'essai, en vision de loin, intermédiaire et de près, en faisant marcher le client si le changement est important.</div>"
      },
      {
       "titre": "Conclure, tracer et orienter",
       "contenu": "<p>L'examen se termine par une synthèse claire au client et une trace écrite :</p>\n<ul>\n<li>comparaison avec l'ancienne correction et explication des changements (« votre astigmatisme a légèrement augmenté ») ;</li>\n<li>acuités obtenues, œil par œil et en binoculaire, de loin et de près ;</li>\n<li>information du client sur les éventuelles limites (adaptation, verre conseillé, port permanent ou non) ;</li>\n<li>enregistrement sur la fiche client et, dans le cadre d'une adaptation, information du prescripteur selon les modalités prévues.</li>\n</ul>\n<p>Certaines situations imposent une <strong>orientation médicale</strong> : acuité corrigée inférieure à la normale sans explication optique, différence d'acuité nouvelle entre les deux yeux, évolution rapide de la correction, plaintes évoquant une pathologie (douleur, rougeur, éclairs, vision double, déformation des lignes). L'opticien explique alors la démarche sans inquiéter inutilement et note l'orientation sur la fiche.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une forte augmentation de la myopie chez un adulte, ou une acuité qui ne remonte pas avec la correction, ne se « compense » pas par des verres plus forts : ces signes peuvent révéler une cataracte, un diabète déséquilibré ou une atteinte de la rétine.</div>"
      }
     ],
     "points_cles": [
      "La prescription relève du médecin ; l'opticien diplômé peut adapter lors d'un renouvellement, dans les conditions fixées par le Code de la santé publique.",
      "L'entretien préalable oriente l'examen : besoins, plaintes, antécédents, équipement actuel.",
      "Mesures préalables : ancienne paire au frontofocomètre, acuités, autoréfractomètre, écart pupillaire, œil directeur.",
      "La réfraction cherche la correction la plus convexe donnant la meilleure acuité.",
      "Brouillage puis débrouillage par paliers de 0,25 D ; arrêt au premier palier de meilleure acuité.",
      "Cylindre croisé : axe d'abord, puissance ensuite ; test bichrome : rouge plus net = ajouter du négatif.",
      "Équilibre binoculaire puis addition vérifiée à la distance de lecture réelle.",
      "Acuité corrigée insuffisante ou signes d'alerte : orientation vers l'ophtalmologiste."
     ],
     "lexique": [
      {
       "terme": "Anamnèse",
       "def": "Recueil des informations sur les besoins, plaintes et antécédents du client."
      },
      {
       "terme": "Réfraction objective",
       "def": "Mesure de l'amétropie par un appareil, sans réponse du client."
      },
      {
       "terme": "Réfraction subjective",
       "def": "Détermination de la correction à partir des réponses du client."
      },
      {
       "terme": "Brouillage",
       "def": "Ajout de verre convexe rendant l'œil myope pour bloquer l'accommodation."
      },
      {
       "terme": "Cylindre croisé de Jackson",
       "def": "Lentille sphéro-cylindrique de puissances opposées servant à affiner l'axe et la puissance d'un cylindre."
      },
      {
       "terme": "Test bichrome",
       "def": "Test rouge-vert utilisant l'aberration chromatique de l'œil pour contrôler la sphère."
      },
      {
       "terme": "Équilibre binoculaire",
       "def": "Vérification que les deux yeux corrigés sont sollicités de façon identique."
      },
      {
       "terme": "Réfracteur",
       "def": "Appareil regroupant les verres d'essai pour la réfraction subjective."
      },
      {
       "terme": "Monture d'essai",
       "def": "Monture réglable recevant les verres de la boîte d'essai."
      },
      {
       "terme": "Pupillomètre",
       "def": "Appareil de mesure des écarts pupillaires."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Équipement : choix, prise de mesures et adaptation",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bopt-montures-morphologie",
     "titre": "Montures : constituants, matériaux et morphologie du porteur",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Nommer les éléments d'une monture et les différents types de montage",
      "Lire le marquage d'une monture selon le système de mesure normalisé",
      "Comparer les matériaux de montures et leurs conséquences sur l'ajustage et la réparation",
      "Décrire les éléments de la tête et du visage qui conditionnent le choix et l'ajustage",
      "Identifier les incompatibilités entre une morphologie et une monture"
     ],
     "sections": [
      {
       "titre": "Les éléments d'une monture",
       "contenu": "<p>Une <strong>monture</strong> est composée de deux sous-ensembles reliés par des charnières : la <strong>face</strong>, qui porte les verres, et les <strong>branches</strong>, qui assurent le maintien sur la tête.</p>\n<table>\n<thead><tr><th>Élément</th><th>Description et rôle</th></tr></thead>\n<tbody>\n<tr><td>Cercles (ou entourages)</td><td>Contours qui reçoivent les verres, munis d'une rainure intérieure (le drageoir) où vient se loger le biseau du verre</td></tr>\n<tr><td>Pont</td><td>Partie qui relie les deux cercles au-dessus du nez</td></tr>\n<tr><td>Plaquettes et bras de plaquettes</td><td>Appuis nasaux réglables des montures métalliques ; sur les montures plastiques, les appuis sont souvent intégrés (pontet moulé)</td></tr>\n<tr><td>Tenons</td><td>Parties latérales de la face qui portent les charnières</td></tr>\n<tr><td>Charnières</td><td>Articulations entre tenons et branches, classiques ou flexibles (à ressort)</td></tr>\n<tr><td>Vis de fermeture et de charnière</td><td>Maintien du cercle fermé autour du verre et articulation des branches</td></tr>\n<tr><td>Branches</td><td>Tiges qui reposent sur les oreilles ; leur partie arrière, le manchon ou embout, se courbe derrière l'oreille</td></tr>\n</tbody>\n</table>\n<p>On distingue trois grands types de montage :</p>\n<ul>\n<li><strong>monture cerclée</strong> : le verre est entièrement entouré par le cercle et maintenu par un biseau ;</li>\n<li><strong>monture semi-cerclée</strong> (ou montage « nylor ») : le verre est retenu en haut par une demi-lune et en bas par un fil de nylon logé dans une rainure creusée sur la tranche du verre ;</li>\n<li><strong>monture percée</strong> (ou sans monture) : pont et tenons sont fixés directement dans des trous percés dans le verre, par vis, bagues ou systèmes de clips.</li>\n</ul>"
      },
      {
       "titre": "Le marquage normalisé",
       "contenu": "<p>Les dimensions d'une monture sont exprimées selon le <strong>système de mesure par encadrement</strong> (système « boxing », norme ISO 8624). On trace autour de chaque verre le rectangle, aux côtés horizontaux et verticaux, qui lui est circonscrit :</p>\n<ul>\n<li><strong>A</strong> : largeur du rectangle, appelée <strong>calibre</strong> ;</li>\n<li><strong>B</strong> : hauteur du rectangle ;</li>\n<li><strong>D</strong> : distance entre les deux rectangles, appelée <strong>pont</strong> (distance entre verres) ;</li>\n<li>le <strong>centre de l'encadrement</strong> (centre boxing) est l'intersection des diagonales du rectangle ; la distance entre les deux centres, égale à A + D, est l'<strong>écart entre centres</strong>.</li>\n</ul>\n<p>L'intérieur d'une branche porte généralement un marquage du type <strong>52□18 140</strong> : calibre de 52 mm, pont de 18 mm, longueur de branche de 140 mm. On y trouve aussi la référence du modèle, le code coloris et le marquage CE : montures et verres correcteurs relèvent de la réglementation des <strong>dispositifs médicaux</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'écart entre centres et le décentrement. Monture 52□18, écarts pupillaires du client : 31 mm (OD) et 32 mm (OG).<br>1. Écart entre centres : 52 + 18 = 70 mm ; demi-écart : 35 mm par œil.<br>2. Décentrement OD : 35 − 31 = 4 mm vers le nez.<br>3. Décentrement OG : 35 − 32 = 3 mm vers le nez.<br>4. Conséquence : le centre optique de chaque verre sera placé 4 et 3 mm du côté nasal du centre de l'encadrement. Plus le décentrement est grand, plus le diamètre de verre non détouré nécessaire augmente.</div>"
      },
      {
       "titre": "Les matériaux de montures",
       "contenu": "<table>\n<thead><tr><th>Matériau</th><th>Caractéristiques</th><th>Conséquences pratiques</th></tr></thead>\n<tbody>\n<tr><td>Acétate de cellulose</td><td>Matériau plastique le plus courant, découpé dans des plaques, nombreux coloris</td><td>Se met en forme à chaud ; craint les températures excessives (bulles, déformation) et certains solvants</td></tr>\n<tr><td>Propionate de cellulose</td><td>Plastique injecté, léger</td><td>Mise en forme à chaud plus délicate</td></tr>\n<tr><td>Polyamides</td><td>Plastiques injectés légers, souples, résistants</td><td>Montures sport et enfants ; réglage limité, mémoire de forme</td></tr>\n<tr><td>Résines époxy injectées</td><td>Légères, stables</td><td>Se règlent à chaud mais reviennent à leur forme si on les chauffe à nouveau</td></tr>\n<tr><td>Maillechort, monel</td><td>Alliages à base de cuivre et de nickel, faciles à souder</td><td>Montures métalliques classiques ; risque d'allergie au nickel si le revêtement s'use</td></tr>\n<tr><td>Acier inoxydable</td><td>Résistant à la corrosion, rigide</td><td>Montures fines</td></tr>\n<tr><td>Titane, bêta-titane</td><td>Très léger, résistant, bien toléré par la peau</td><td>Soudure classique impossible (réparation spécialisée) ; le bêta-titane est plus élastique</td></tr>\n<tr><td>Alliage à mémoire de forme (nickel-titane)</td><td>Reprend sa forme après déformation</td><td>Très résistant aux chocs, mais ne se règle presque pas</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> identifier le matériau avant tout réglage ou réparation. Chauffer une monture en polyamide comme un acétate, ou tenter de braser une branche en titane, conduit à une casse ou à une déformation irréversible. En cas de doute, consulter la fiche technique du fabricant.</div>\n<p>On rencontre aussi des montures en bois, en corne, en fibre de carbone ou en aluminium, qui ont chacune des contraintes particulières d'ajustage et d'entretien. Les montures haut de gamme combinent souvent plusieurs matériaux : face en acétate et branches en titane, par exemple.</p>\n<p>Les montures métalliques reçoivent un <strong>revêtement</strong> (vernis, laquage, dépôt galvanique ou sous vide) qui assure la couleur et limite la corrosion. Lorsqu'il s'use, au contact de la peau ou de la transpiration, le métal de base peut provoquer une réaction cutanée chez une personne allergique. Face à un client qui signale une allergie, on oriente le choix vers le titane, l'acier inoxydable de qualité adaptée ou certains plastiques, et l'on peut gainer les branches. Les fabricants doivent respecter la réglementation européenne qui limite le relargage du nickel par les objets en contact prolongé avec la peau.</p>"
      },
      {
       "titre": "La tête et le visage du porteur",
       "contenu": "<p>Une monture repose sur trois appuis : le <strong>nez</strong> et les deux <strong>oreilles</strong>. Son confort dépend de la morphologie du porteur, qu'il faut observer avant de conseiller :</p>\n<ul>\n<li><strong>Le nez</strong> : hauteur de la racine (entre les yeux), largeur et inclinaison des faces latérales, angle de la crête nasale (vue de profil), présence d'une bosse. Un nez fin à racine basse s'adapte mal à un pont plastique large ; des plaquettes réglables offrent plus de possibilités.</li>\n<li><strong>La largeur de la tête</strong> au niveau des tempes et des oreilles : elle détermine l'ouverture nécessaire des branches.</li>\n<li><strong>Les oreilles</strong> : position en hauteur et en profondeur, parfois différente à droite et à gauche ; elle détermine la longueur de branche utile et le point de courbure.</li>\n<li><strong>Les yeux</strong> : écart pupillaire, position par rapport au centre du visage, profondeur des orbites, longueur des cils.</li>\n<li><strong>Les sourcils et les pommettes</strong> : limites haute et basse de la face.</li>\n</ul>\n<p>Le visage est rarement parfaitement symétrique : une oreille plus haute ou un œil légèrement décalé sont fréquents. Ces asymétries se compensent à l'ajustage et se prennent en compte dans les mesures monoculaires.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chez l'enfant, la racine du nez est peu marquée et les oreilles sont basses : on privilégie des montures à pont adapté, des branches enveloppantes ou des embouts souples, et des matériaux résistants. Les fabricants proposent des gammes spécifiques avec des ponts plus bas et des calibres adaptés à l'âge.</div>"
      },
      {
       "titre": "Compatibilité entre visage et monture",
       "contenu": "<p>Le choix d'une monture répond à trois critères qui doivent être respectés ensemble : <strong>technique</strong> (compatibilité avec les verres et la correction), <strong>morphologique</strong> (confort et stabilité) et <strong>esthétique</strong> (goûts du client, harmonie avec le visage).</p>\n<table>\n<thead><tr><th>Critère morphologique</th><th>Règle pratique</th></tr></thead>\n<tbody>\n<tr><td>Largeur de la face</td><td>Voisine de la largeur du visage au niveau des tempes ; une face trop étroite serre, trop large glisse</td></tr>\n<tr><td>Pont</td><td>Appui réparti sur les faces latérales du nez sans pincer ni laisser d'espace</td></tr>\n<tr><td>Écart entre centres</td><td>Proche de l'écart pupillaire, pour limiter le décentrement et l'épaisseur</td></tr>\n<tr><td>Hauteur de la face</td><td>Compatible avec la hauteur de montage nécessaire (minimum imposé pour les progressifs)</td></tr>\n<tr><td>Longueur de branche</td><td>Courbure qui commence juste derrière le sommet de l'oreille</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une monture choisie sans tenir compte de l'écart pupillaire peut conduire à un décentrement important, donc à des verres plus épais et plus lourds, surtout pour les fortes corrections. Le conseil esthétique ne doit jamais faire oublier la contrainte technique.</div>\n<p>La morphologie du visage (rond, ovale, carré, triangulaire) fournit enfin des repères esthétiques classiques : on cherche souvent un contraste entre la forme de la monture et les lignes du visage, et une ligne supérieure de la face qui suit celle des sourcils. Ces règles restent des repères ; la décision appartient au client, éclairé par le conseil.</p>"
      }
     ],
     "points_cles": [
      "Une monture comprend une face (cercles, pont, plaquettes, tenons) et des branches reliées par des charnières.",
      "Trois types de montage : cerclé, semi-cerclé (nylor), percé.",
      "Système boxing : A = calibre, B = hauteur, D = pont ; écart entre centres = A + D.",
      "Décentrement par œil = (A + D) / 2 − écart pupillaire monoculaire.",
      "Identifier le matériau avant tout réglage : acétate à chaud, polyamide et mémoire de forme peu réglables, titane non brasable de façon classique.",
      "Trois appuis : le nez et les deux oreilles ; la morphologie conditionne le confort et la stabilité.",
      "Les asymétries du visage sont fréquentes et se compensent à l'ajustage et par des mesures monoculaires.",
      "Le choix respecte ensemble critères technique, morphologique et esthétique."
     ],
     "lexique": [
      {
       "terme": "Face",
       "def": "Partie avant de la monture qui porte les verres."
      },
      {
       "terme": "Drageoir",
       "def": "Rainure intérieure du cercle où se loge le biseau du verre."
      },
      {
       "terme": "Tenon",
       "def": "Partie latérale de la face portant la charnière."
      },
      {
       "terme": "Calibre",
       "def": "Largeur A du rectangle circonscrit au verre dans le système boxing."
      },
      {
       "terme": "Pont",
       "def": "Distance D entre les deux rectangles d'encadrement ; partie reliant les cercles."
      },
      {
       "terme": "Écart entre centres",
       "def": "Distance entre les centres des encadrements, égale à A + D."
      },
      {
       "terme": "Montage nylor",
       "def": "Montage semi-cerclé où le verre est retenu par un fil de nylon logé dans une rainure."
      },
      {
       "terme": "Acétate de cellulose",
       "def": "Matériau plastique courant des montures, mis en forme à chaud."
      },
      {
       "terme": "Bêta-titane",
       "def": "Alliage de titane léger et élastique utilisé en lunetterie."
      },
      {
       "terme": "Racine du nez",
       "def": "Partie haute du nez entre les deux yeux, zone d'appui du pont."
      }
     ]
    },
    {
     "id": "bopt-verres-materiaux-traitements",
     "titre": "Verres ophtalmiques : matériaux, géométries, traitements et filtres",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Comparer les matériaux de verres par leur indice, leur constringence, leur densité et leur résistance",
      "Distinguer les géométries de verres unifocaux et multifocaux",
      "Estimer l'épaisseur au bord ou au centre d'un verre à partir de la flèche",
      "Expliquer le rôle des principaux traitements de surface",
      "Utiliser les grandeurs photométriques et les catégories de filtres solaires"
     ],
     "sections": [
      {
       "titre": "Les matériaux de verres",
       "contenu": "<p>Les verres correcteurs sont aujourd'hui en grande majorité <strong>organiques</strong> (matières plastiques), plus légers et plus résistants aux chocs que les verres <strong>minéraux</strong>. Chaque matériau se caractérise par quatre propriétés principales.</p>\n<table>\n<thead><tr><th>Matériau (ordre de grandeur)</th><th>Indice</th><th>Constringence</th><th>Densité</th><th>Remarques</th></tr></thead>\n<tbody>\n<tr><td>Organique CR 39</td><td>1,50</td><td>≈ 58</td><td>≈ 1,32</td><td>Excellente qualité optique, épais pour les fortes puissances</td></tr>\n<tr><td>Organique 1,53 (type trivex)</td><td>1,53</td><td>≈ 45</td><td>≈ 1,1</td><td>Très léger, résistant aux chocs, perçable</td></tr>\n<tr><td>Polycarbonate</td><td>1,59</td><td>≈ 30</td><td>≈ 1,2</td><td>Très résistant aux chocs : enfants, sport, sécurité ; dispersif</td></tr>\n<tr><td>Organique 1,60</td><td>1,60</td><td>≈ 40</td><td>≈ 1,3</td><td>Bon compromis épaisseur / qualité</td></tr>\n<tr><td>Organique 1,67</td><td>1,67</td><td>≈ 32</td><td>≈ 1,35</td><td>Fortes corrections</td></tr>\n<tr><td>Organique 1,74</td><td>1,74</td><td>≈ 33</td><td>≈ 1,46</td><td>Très fortes corrections</td></tr>\n<tr><td>Minéral crown</td><td>1,523</td><td>≈ 58</td><td>≈ 2,5</td><td>Très résistant aux rayures, lourd, fragile aux chocs</td></tr>\n</tbody>\n</table>\n<p>Un indice élevé permet des faces moins courbes, donc un verre plus mince ; en contrepartie, la constringence baisse (plus d'aberration chromatique en regard latéral) et le facteur de réflexion augmente (antireflet indispensable). Le choix résulte d'un compromis entre puissance, type de monture, usage et budget.</p>"
      },
      {
       "titre": "Géométries de verres",
       "contenu": "<p>La <strong>géométrie</strong> d'un verre désigne la forme de ses surfaces et la répartition de la puissance.</p>\n<ul>\n<li><strong>Unifocal sphérique</strong> : faces sphériques (et torique pour l'astigmatisme). Simple, mais les aberrations augmentent en regard latéral et les verres forts sont bombés.</li>\n<li><strong>Unifocal asphérique</strong> : une face dont la courbure varie du centre vers le bord. Le verre est plus plat et plus mince, avec moins d'aberrations latérales et un effet de grossissement réduit ; il exige un centrage précis, en hauteur comme en largeur.</li>\n<li><strong>Double foyer</strong> : un segment de vision de près, visible, ajouté à la zone de loin.</li>\n<li><strong>Progressif</strong> : une surface complexe où la puissance augmente progressivement d'une zone de loin, en haut, vers une zone de près, en bas, le long d'un <strong>couloir de progression</strong>. Les zones latérales présentent un astigmatisme indésirable inévitable. La zone de près est décalée vers le nez (<strong>inset</strong>) pour suivre la convergence.</li>\n<li><strong>Verres de proximité</strong> (dégressifs) : optimisés pour le près et l'intermédiaire.</li>\n</ul>\n<p>Le <strong>surfaçage numérique</strong> (dit « free-form ») permet de calculer et d'usiner point par point une surface propre à chaque porteur, en tenant compte de la prescription, de la monture et des paramètres de port (distance verre-œil, angle pantoscopique, galbe). C'est la base des verres <strong>personnalisés</strong>.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les verres progressifs portent des <strong>gravures permanentes</strong> discrètes, distantes de 34 mm, qui permettent de retrouver après effacement des marquages provisoires la position de la croix de centrage et du point de référence prismatique, ainsi que l'identification du fabricant, du modèle et de l'addition. Le gabarit du fabricant sert à reconstituer ces repères.</div>"
      },
      {
       "titre": "Estimer l'épaisseur d'un verre",
       "contenu": "<p>La profondeur d'une surface sphérique sur un demi-diamètre h est sa <strong>flèche</strong> s. Elle vaut exactement s = r − √(r<sup>2</sup> − h<sup>2</sup>) et, pour des courbures modérées, s ≈ h<sup>2</sup> / (2r). Le rayon de chaque face se déduit de sa puissance : r = (n − 1) / D.</p>\n<p>Pour un verre <strong>divergent</strong>, l'épaisseur au centre est fixée par le fabricant (souvent 1 à 2 mm) et l'épaisseur au bord vaut : e<sub>bord</sub> = e<sub>centre</sub> + s<sub>arrière</sub> − s<sub>avant</sub>. Pour un verre <strong>convergent</strong>, c'est l'épaisseur au bord qui est minimale et l'épaisseur au centre qui augmente.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> épaisseur au bord d'un verre de −4,00 D, diamètre utile 60 mm, épaisseur au centre 1,5 mm, face avant +4,00 D, face arrière −8,00 D.<br>1. Indice 1,50 : r<sub>avant</sub> = 0,50 / 4 = 125 mm ; r<sub>arrière</sub> = 0,50 / 8 = 62,5 mm ; h = 30 mm.<br>2. Flèches approchées : s<sub>avant</sub> ≈ 900 / 250 = 3,6 mm ; s<sub>arrière</sub> ≈ 900 / 125 = 7,2 mm.<br>3. e<sub>bord</sub> ≈ 1,5 + 7,2 − 3,6 = 5,1 mm (le calcul exact donne environ 5,5 mm).<br>4. Même verre en indice 1,67 : r<sub>avant</sub> = 167,5 mm et r<sub>arrière</sub> ≈ 83,8 mm, flèches ≈ 2,7 et 5,4 mm : e<sub>bord</sub> ≈ 4,2 mm. Le haut indice fait gagner près d'un millimètre ; un calibre plus petit ou mieux centré en ferait gagner davantage.</div>\n<p>Ce calcul montre que l'épaisseur dépend autant du <strong>diamètre utile</strong> (donc du calibre et du décentrement) que de l'indice. Le diamètre utile minimal se calcule à partir de la plus grande distance entre le centre optique et le bord du verre détouré.</p>"
      },
      {
       "titre": "Les traitements de surface",
       "contenu": "<table>\n<thead><tr><th>Traitement</th><th>Principe</th><th>Bénéfice</th></tr></thead>\n<tbody>\n<tr><td>Durcissant</td><td>Vernis appliqué par trempage ou centrifugation</td><td>Résistance aux rayures des verres organiques</td></tr>\n<tr><td>Antireflet</td><td>Empilement de couches minces dont les épaisseurs créent des interférences destructives pour la lumière réfléchie</td><td>Moins de reflets gênants, meilleure transmission, regard visible</td></tr>\n<tr><td>Hydrophobe et oléophobe</td><td>Couche superficielle à faible adhérence</td><td>Nettoyage facilité, moins de traces</td></tr>\n<tr><td>Antistatique</td><td>Couche conductrice dans l'empilement</td><td>Moins de poussières attirées</td></tr>\n<tr><td>Filtre de la lumière bleue-violette</td><td>Réflexion ou absorption sélective d'une partie du spectre visible court</td><td>Confort annoncé devant les écrans ; teinte résiduelle légère</td></tr>\n<tr><td>Teinte, dégradé</td><td>Coloration par immersion (organiques) ou dans la masse</td><td>Confort, esthétique, filtre solaire</td></tr>\n</tbody>\n</table>\n<p>Le traitement antireflet repose sur le principe de la <strong>couche quart d'onde</strong> : une couche d'épaisseur optique égale au quart de la longueur d'onde fait interférer de façon destructive les ondes réfléchies par ses deux faces. Un empilement de plusieurs couches étend l'effet à tout le spectre visible ; il reste un léger reflet résiduel coloré (vert, bleu, doré) propre à chaque marque.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les arguments commerciaux sur les filtres de lumière bleue doivent rester prudents et conformes aux informations du fabricant. L'opticien présente un bénéfice de confort sans promettre la protection contre une maladie, ce qui relèverait d'une allégation de santé non démontrée.</div>"
      },
      {
       "titre": "Notions de photométrie",
       "contenu": "<p>La <strong>photométrie</strong> mesure la lumière telle que l'œil la perçoit. Quatre grandeurs sont à connaître :</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Unité</th><th>Signification</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Flux lumineux</td><td>lumen (lm)</td><td>Quantité de lumière émise par une source</td><td>Lampe LED de bureau : quelques centaines de lumens</td></tr>\n<tr><td>Intensité lumineuse</td><td>candela (cd)</td><td>Flux émis dans une direction donnée</td><td>Caractéristique d'une source ponctuelle</td></tr>\n<tr><td>Éclairement</td><td>lux (lx)</td><td>Flux reçu par unité de surface</td><td>Poste de travail de précision : plusieurs centaines de lux ; plein soleil : jusqu'à environ 100 000 lx</td></tr>\n<tr><td>Luminance</td><td>cd/m<sup>2</sup></td><td>« Brillance » d'une surface vue par l'œil</td><td>Écran, tests de mesure de l'acuité</td></tr>\n</tbody>\n</table>\n<p>Un verre transmet une fraction τ de la lumière qu'il reçoit, appelée <strong>facteur de transmission</strong>. Le reste est réfléchi (environ 4 % par face non traitée pour n = 1,5) ou absorbé. Le facteur de transmission dans le visible τ<sub>v</sub> est pondéré par la sensibilité de l'œil, maximale vers 555 nm (jaune-vert) en vision de jour.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> transmission d'un verre non traité. Indice 1,60, absorption négligée.<br>1. Facteur de réflexion d'une face : ((1,60 − 1) / (1,60 + 1))<sup>2</sup> = (0,60 / 2,60)<sup>2</sup> ≈ 0,053, soit 5,3 %.<br>2. Transmission après la première face : 1 − 0,053 = 0,947.<br>3. Après la seconde face : 0,947 × 0,947 ≈ 0,897, soit environ 90 %.<br>4. Avec un antireflet efficace, la transmission dépasse couramment 98 % : le gain de lumière et de contraste est réel, en particulier la nuit.</div>"
      },
      {
       "titre": "Filtres solaires et protection",
       "contenu": "<p>Les lunettes de soleil et les verres teintés sont classés en <strong>catégories</strong> selon leur facteur de transmission dans le visible (norme NF EN ISO 12312-1) :</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Transmission visible τ<sub>v</sub></th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>0</td><td>Plus de 80 % à 100 %</td><td>Confort, esthétique, faible luminosité</td></tr>\n<tr><td>1</td><td>Plus de 43 % à 80 %</td><td>Luminosité atténuée</td></tr>\n<tr><td>2</td><td>Plus de 18 % à 43 %</td><td>Luminosité moyenne</td></tr>\n<tr><td>3</td><td>Plus de 8 % à 18 %</td><td>Forte luminosité, usage le plus courant l'été</td></tr>\n<tr><td>4</td><td>Plus de 3 % à 8 %</td><td>Luminosité exceptionnelle (haute montagne, glaciers) ; <strong>interdits pour la conduite</strong></td></tr>\n</tbody>\n</table>\n<p>Indépendamment de la teinte, un verre doit filtrer les <strong>ultraviolets</strong>, nocifs pour la cornée, le cristallin et la rétine. La mention « UV 400 » indique un arrêt des rayonnements jusqu'à 400 nm. Un verre très foncé sans filtre UV est dangereux : la pupille se dilate derrière lui et laisse entrer davantage d'UV.</p>\n<ul>\n<li><strong>Verres photochromiques</strong> : ils foncent sous l'effet des UV et s'éclaircissent à l'intérieur ; ils foncent peu derrière un pare-brise qui arrête les UV et réagissent plus lentement par temps chaud.</li>\n<li><strong>Verres polarisants</strong> : ils arrêtent la lumière réfléchie horizontalement par l'eau, la route mouillée ou la neige ; ils peuvent gêner la lecture de certains écrans à cristaux liquides.</li>\n<li><strong>Verres miroités</strong> : un dépôt réfléchissant sur la face avant réduit la lumière transmise.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la catégorie de filtre doit figurer sur l'étiquette ou la notice des lunettes de soleil, avec ses restrictions d'usage. Conseiller une catégorie 4 à un conducteur est une faute professionnelle.</div>"
      }
     ],
     "points_cles": [
      "Indice élevé : verre plus mince mais constringence plus faible et reflets plus forts.",
      "Le polycarbonate et les matériaux de type 1,53 sont les plus résistants aux chocs ; le minéral est lourd et fragile aux chocs.",
      "Les verres asphériques et personnalisés exigent un centrage précis ; les progressifs portent des gravures permanentes espacées de 34 mm.",
      "Flèche d'une surface : s ≈ h² / 2r ; épaisseur au bord d'un verre négatif : e centre + s arrière − s avant.",
      "Le diamètre utile, donc le calibre et le décentrement, influence fortement l'épaisseur.",
      "L'antireflet fonctionne par interférences destructives dans des couches minces.",
      "Grandeurs photométriques : lumen, candela, lux, candela par mètre carré.",
      "Filtres solaires de catégorie 0 à 4 ; catégorie 4 interdite à la conduite ; protection UV indispensable."
     ],
     "lexique": [
      {
       "terme": "Verre organique",
       "def": "Verre en matière plastique, léger et résistant aux chocs."
      },
      {
       "terme": "Densité",
       "def": "Rapport de la masse volumique d'un matériau à celle de l'eau ; conditionne le poids du verre."
      },
      {
       "terme": "Verre asphérique",
       "def": "Verre dont une face a une courbure variable du centre vers le bord."
      },
      {
       "terme": "Couloir de progression",
       "def": "Zone d'un verre progressif où la puissance augmente du loin vers le près."
      },
      {
       "terme": "Inset",
       "def": "Décalage nasal de la zone de près d'un verre progressif."
      },
      {
       "terme": "Flèche",
       "def": "Profondeur d'une surface courbe mesurée sur un diamètre donné."
      },
      {
       "terme": "Couche quart d'onde",
       "def": "Couche mince dont l'épaisseur optique vaut le quart de la longueur d'onde, base de l'antireflet."
      },
      {
       "terme": "Facteur de transmission",
       "def": "Fraction de la lumière incidente transmise par un verre."
      },
      {
       "terme": "Éclairement",
       "def": "Flux lumineux reçu par unité de surface, en lux."
      },
      {
       "terme": "Verre photochromique",
       "def": "Verre qui fonce sous l'effet des ultraviolets."
      },
      {
       "terme": "Verre polarisant",
       "def": "Verre qui arrête la lumière réfléchie polarisée horizontalement."
      }
     ]
    },
    {
     "id": "bopt-choix-equipement-mesures",
     "titre": "Choix de l'équipement et prise de mesures",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Analyser le besoin visuel du client pour proposer un équipement adapté",
      "Justifier le choix d'un verre en fonction de la prescription, de la monture et de l'usage",
      "Mesurer les écarts pupillaires monoculaires et les hauteurs de montage",
      "Relever les paramètres de port utiles aux verres personnalisés",
      "Calculer un diamètre minimal de verre non détouré"
     ],
     "sections": [
      {
       "titre": "Analyser le besoin du client",
       "contenu": "<p>Choisir un équipement, c'est trouver la meilleure réponse à un <strong>besoin visuel</strong> dans le respect de la prescription. L'analyse croise plusieurs informations :</p>\n<ul>\n<li>la <strong>prescription</strong> : puissances, cylindre, addition, prisme, éventuelles mentions du prescripteur (verres teintés, port permanent) ;</li>\n<li>les <strong>activités</strong> : distances de travail, temps d'écran, conduite de nuit, sport, métier exposé (chantier, laboratoire) ;</li>\n<li>l'<strong>équipement actuel</strong> : ce qui plaît, ce qui gêne, habitudes (un porteur de progressifs habitué à un certain design) ;</li>\n<li>les <strong>attentes</strong> esthétiques et le <strong>budget</strong>, y compris les possibilités de prise en charge.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> depuis la réforme dite « 100 % Santé », l'opticien doit proposer au client au moins un équipement de la <strong>classe A</strong> (sans reste à charge pour un client couvert par un contrat responsable) en plus des propositions de <strong>classe B</strong> (tarifs libres), et lui remettre un <strong>devis normalisé</strong> présentant ces offres. Le conseil reste personnalisé : la classe A n'est pas une solution « au rabais », elle répond à un cahier des charges technique minimal.</div>"
      },
      {
       "titre": "Choisir les verres",
       "contenu": "<table>\n<thead><tr><th>Situation</th><th>Choix conseillé</th><th>Justification</th></tr></thead>\n<tbody>\n<tr><td>Correction forte (au-delà d'environ ±4 D)</td><td>Indice élevé, géométrie asphérique</td><td>Épaisseur, poids et aberrations réduits</td></tr>\n<tr><td>Monture percée</td><td>Matériau résistant au perçage (type 1,53, polycarbonate, 1,60 et plus selon fabricant)</td><td>Le CR 39 et le minéral risquent de se fendre autour des trous</td></tr>\n<tr><td>Monture semi-cerclée (nylor)</td><td>Épaisseur au bord suffisante pour la rainure</td><td>Un verre convexe trop mince au bord ne peut pas être rainé</td></tr>\n<tr><td>Enfant, sport</td><td>Polycarbonate ou matériau de type 1,53</td><td>Résistance aux chocs</td></tr>\n<tr><td>Presbyte actif polyvalent</td><td>Progressif, personnalisé si possible</td><td>Vision à toutes distances</td></tr>\n<tr><td>Travail prolongé sur écran</td><td>Verres de proximité ou unifocaux à la distance de l'écran, antireflet</td><td>Champ intermédiaire large, confort</td></tr>\n<tr><td>Conduite de nuit</td><td>Antireflet de qualité</td><td>Moins de reflets et de halos</td></tr>\n</tbody>\n</table>\n<p>Il faut aussi vérifier la <strong>disponibilité</strong> : chaque verre existe dans une plage de puissances (sphère, cylindre, addition) et de diamètres indiquée dans le catalogue du verrier. Un verre de stock (fabriqué à l'avance, livraison rapide) n'existe que pour des puissances courantes ; au-delà, le verre est <strong>fabriqué à la commande</strong> par surfaçage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un verre progressif exige une <strong>hauteur de montage minimale</strong> indiquée par le fabricant (distance entre la croix de centrage et le bas du verre). Une monture trop basse coupe la zone de près : le client ne pourra pas lire correctement. Vérifier cette contrainte avant de valider la monture, pas après.</div>"
      },
      {
       "titre": "Mesurer les écarts pupillaires",
       "contenu": "<p>L'<strong>écart pupillaire</strong> (EP) est la distance entre les centres des deux pupilles. Pour centrer les verres, on mesure les <strong>demi-écarts pupillaires</strong> (écarts monoculaires), du centre de chaque pupille à l'axe du nez, car les deux valeurs sont souvent différentes.</p>\n<ul>\n<li><strong>Pupillomètre</strong> : appareil posé sur le nez et le front, qui affiche les demi-écarts en vision de loin et, avec un réglage, à une distance de près. C'est la méthode de référence en magasin.</li>\n<li><strong>Réglette</strong> : l'opticien, placé à 40 cm face au client et à la même hauteur, ferme un œil et vise alternativement les pupilles. Méthode de dépannage, sensible aux erreurs de parallaxe.</li>\n<li><strong>Systèmes numériques</strong> (colonne de mesure, tablette) : ils mesurent sur une photographie du client portant la monture choisie, avec un clip de repérage.</li>\n</ul>\n<p>En vision de près, les yeux convergent : l'écart pupillaire est plus petit. Pour un EP de loin de 64 mm et une lecture à 40 cm, il est réduit d'environ 3 à 4 mm au total. On le mesure directement au pupillomètre réglé sur la distance de lecture ; pour un progressif, c'est l'inset du verre qui gère ce décalage, et l'on fournit les demi-écarts de loin.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'écart pupillaire se mesure en millimètres, au demi-millimètre près, œil par œil. Un écart total correct mais mal réparti entre les deux yeux crée quand même un prisme induit sur chaque verre.</div>"
      },
      {
       "titre": "Mesurer les hauteurs et les paramètres de port",
       "contenu": "<p>La <strong>hauteur de montage</strong> est la distance verticale entre le point de centrage et le bas du rectangle d'encadrement du verre. Elle se mesure sur la monture choisie, <strong>préalablement ajustée</strong> au visage du client.</p>\n<ol>\n<li>Ajuster la monture : bonne assise sur le nez, branches réglées, inclinaison correcte.</li>\n<li>Placer le client en <strong>posture naturelle</strong>, tête droite, regard horizontal au loin ; l'opticien se place face à lui, ses yeux à la même hauteur.</li>\n<li>Marquer au feutre fin, sur les verres de présentation, le centre de chaque pupille (pour les progressifs : centre de la pupille en vision de loin).</li>\n<li>Mesurer la hauteur de chaque marque depuis le bas du verre, et contrôler le demi-écart.</li>\n</ol>\n<p>Pour un verre unifocal, une règle pratique consiste à abaisser le centre optique d'environ 1 mm pour 2° d'<strong>angle pantoscopique</strong> par rapport à la pupille en regard horizontal, afin que l'axe optique passe par le centre de rotation de l'œil. Pour un progressif, la <strong>croix de centrage</strong> est placée devant le centre de la pupille en vision de loin.</p>\n<p>Les verres personnalisés demandent en plus les <strong>paramètres de port</strong> : <strong>distance verre-œil</strong>, <strong>angle pantoscopique</strong> (inclinaison de la face dans le plan vertical, souvent de l'ordre de 8 à 12°) et <strong>angle de galbe</strong> (courbure de la face dans le plan horizontal). Les systèmes numériques les mesurent directement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mesurer les hauteurs sur une monture non ajustée, ou avec un client qui baisse la tête ou fixe l'opticien de trop près, fausse les valeurs de plusieurs millimètres. Pour un progressif, une erreur de 2 mm en hauteur suffit à rendre l'équipement inconfortable.</div>"
      },
      {
       "titre": "Calculer le diamètre minimal du verre",
       "contenu": "<p>Le verre est livré <strong>non détouré</strong> (rond) ; il doit être assez grand pour couvrir tout le contour de la monture une fois décentré. On estime le <strong>diamètre minimal</strong> nécessaire par :</p>\n<p><strong>Ø<sub>min</sub> ≈ 2 × (distance maximale entre le point de centrage et le contour du verre détouré) + marge de détourage</strong></p>\n<p>Lorsque la monture est assez rectangulaire, on utilise souvent l'approximation Ø<sub>min</sub> ≈ A + 2 × décentrement horizontal + 2 mm. Les logiciels de commande la calculent précisément à partir de la forme numérisée par le lecteur de forme.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> diamètre minimal pour une monture 54□17, demi-écart OD 30,5 mm.<br>1. Demi-écart entre centres : (54 + 17) / 2 = 35,5 mm.<br>2. Décentrement OD : 35,5 − 30,5 = 5 mm vers le nez.<br>3. Ø<sub>min</sub> ≈ 54 + 2 × 5 + 2 = 66 mm.<br>4. Si le catalogue propose ce verre en 65 et 70 mm, on commande 70 mm. Si le verre n'existe qu'en 65 mm, on change de monture ou on demande au verrier un verre décentré ou de diamètre spécial.<br>5. Remarque : si la forme possède un coin éloigné côté tempe, c'est la diagonale qui impose le diamètre ; la mesure de la forme reste alors indispensable.</div>"
      },
      {
       "titre": "Rédiger la commande de verres",
       "contenu": "<p>La commande transmise au verrier (par logiciel le plus souvent) contient toutes les données nécessaires à la fabrication :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Identification</td><td>Référence client ou dossier, magasin, date</td></tr>\n<tr><td>Prescription</td><td>Sphère, cylindre, axe, addition, prisme et base, pour chaque œil</td></tr>\n<tr><td>Produit</td><td>Gamme, matériau (indice), géométrie, traitements, teinte</td></tr>\n<tr><td>Centrage</td><td>Demi-écarts, hauteurs</td></tr>\n<tr><td>Monture</td><td>Calibre, pont, type de montage, forme numérisée si détourage par le verrier</td></tr>\n<tr><td>Paramètres de port</td><td>Distance verre-œil, angle pantoscopique, galbe (verres personnalisés)</td></tr>\n<tr><td>Diamètre ou optimisation</td><td>Diamètre souhaité, ou demande d'amincissement selon la forme</td></tr>\n</tbody>\n</table>\n<p>Avant l'envoi, une relecture systématique compare la commande à l'ordonnance (ou à la correction retenue) : signe des puissances, transposition éventuelle, axes, droite et gauche. Beaucoup d'erreurs de réalisation proviennent d'une saisie incorrecte et non de la fabrication.</p>"
      }
     ],
     "points_cles": [
      "Le choix part du besoin visuel : prescription, activités, équipement actuel, attentes, budget.",
      "Une offre de classe A du 100 % Santé doit être proposée avec un devis normalisé.",
      "Le matériau et l'épaisseur du verre doivent être compatibles avec le type de monture (percée, nylor).",
      "Les écarts pupillaires se mesurent œil par œil, au demi-millimètre, de préférence au pupillomètre.",
      "Les hauteurs se mesurent sur la monture ajustée, client en posture naturelle, regard au loin.",
      "Progressif : croix de centrage devant le centre de la pupille en vision de loin, hauteur minimale du fabricant respectée.",
      "Diamètre minimal ≈ A + 2 × décentrement + 2 mm pour une forme simple.",
      "La commande est relue et comparée à la prescription avant envoi."
     ],
     "lexique": [
      {
       "terme": "Besoin visuel",
       "def": "Ensemble des exigences de vision liées aux activités du client."
      },
      {
       "terme": "Classe A",
       "def": "Équipement du panier 100 % Santé sans reste à charge sous conditions."
      },
      {
       "terme": "Devis normalisé",
       "def": "Document obligatoire présentant les offres d'équipement et leur prise en charge."
      },
      {
       "terme": "Demi-écart pupillaire",
       "def": "Distance entre le centre d'une pupille et l'axe du nez."
      },
      {
       "terme": "Hauteur de montage",
       "def": "Distance entre le point de centrage et le bas du rectangle d'encadrement du verre."
      },
      {
       "terme": "Croix de centrage",
       "def": "Repère d'un verre progressif à placer devant la pupille en vision de loin."
      },
      {
       "terme": "Angle pantoscopique",
       "def": "Inclinaison de la face de la monture dans le plan vertical."
      },
      {
       "terme": "Angle de galbe",
       "def": "Courbure de la face de la monture dans le plan horizontal."
      },
      {
       "terme": "Verre de stock",
       "def": "Verre fabriqué à l'avance dans des puissances courantes."
      },
      {
       "terme": "Verre non détouré",
       "def": "Verre rond livré par le fabricant avant mise à la forme de la monture."
      }
     ]
    },
    {
     "id": "bopt-ajustage-livraison-communication",
     "titre": "Préajustage, ajustage, livraison et communication avec le client",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Réaliser le préajustage d'une monture et en contrôler la géométrie",
      "Conduire l'ajustage d'un équipement sur le visage dans un ordre logique",
      "Organiser la livraison et donner les conseils d'utilisation et d'entretien",
      "Adapter sa communication aux situations professionnelles : accueil, conseil, réclamation",
      "Respecter la confidentialité des données de santé du client"
     ],
     "sections": [
      {
       "titre": "Le préajustage",
       "contenu": "<p>Le <strong>préajustage</strong> consiste à mettre la monture en état géométrique correct <strong>avant</strong> la prise de mesures et le montage. Une monture neuve peut avoir été déformée pendant le transport ou les essayages.</p>\n<ul>\n<li>Vérifier l'<strong>alignement</strong> de la face : les deux cercles dans le même plan (vue de dessus) et à la même hauteur (vue de face).</li>\n<li>Contrôler l'<strong>angle pantoscopique</strong> : identique à droite et à gauche, branches parallèles vues de profil.</li>\n<li>Contrôler l'<strong>ouverture des branches</strong> et leur symétrie : posée à l'envers sur une surface plane, la monture doit reposer sur ses deux branches et le haut de la face (test des quatre points).</li>\n<li>Vérifier la <strong>symétrie des plaquettes</strong> et leur orientation.</li>\n<li>Contrôler le serrage des vis et le bon fonctionnement des charnières.</li>\n</ul>\n<p>L'outillage comprend des <strong>pinces</strong> spécialisées (à plaquettes, à branches, à cercles, à tenons, pinces à mors protégés), un <strong>chauffe-monture</strong> (air chaud ou microbilles) pour les matériaux thermoplastiques et des tournevis adaptés.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> chauffer trop longtemps ou trop fort une monture en acétate fait apparaître des bulles et des déformations irréversibles ; un verre déjà monté peut aussi être endommagé par la chaleur (traitements qui se craquellent). Chauffer progressivement la seule zone à régler et protéger les verres.</div>"
      },
      {
       "titre": "L'ajustage sur le visage",
       "contenu": "<p>L'<strong>ajustage</strong> adapte l'équipement terminé au visage du client. Il respecte un ordre logique : on règle d'abord ce qui est en avant, puis ce qui est en arrière, car chaque réglage influence les suivants.</p>\n<ol>\n<li><strong>La face</strong> : horizontale par rapport à la ligne des yeux, angle pantoscopique et galbe adaptés, distance verre-œil correcte (les cils ne doivent pas toucher les verres).</li>\n<li><strong>L'appui nasal</strong> : plaquettes orientées pour reposer à plat sur les faces du nez (angles d'écartement, frontal et vertical), position en hauteur qui place les centres optiques ou les croix de centrage devant les pupilles.</li>\n<li><strong>L'ouverture des branches</strong> : contact léger avec les tempes sans serrer.</li>\n<li><strong>La longueur et la courbure</strong> : la courbure commence juste derrière le sommet de l'oreille ; le manchon suit la forme de l'arrière de l'oreille sans comprimer.</li>\n<li><strong>Le contrôle final</strong> : stabilité quand le client baisse la tête, absence de points de pression, hauteurs et inclinaison conformes aux mesures.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> corriger une face qui penche (verre droit plus haut que le gauche).<br>1. Vérifier d'abord la monture seule sur un plan : si elle est symétrique, l'asymétrie vient du visage (oreille plus haute).<br>2. Pour descendre le côté droit, relever légèrement la branche droite au niveau du tenon (ou abaisser la branche gauche) : l'oreille restant le point d'appui, la face bascule et le côté droit descend.<br>3. Contrôler de face, client tête droite, que la ligne des cercles est parallèle à la ligne des pupilles.<br>4. Recontrôler les hauteurs de centrage : une face corrigée doit retrouver les hauteurs mesurées.</div>"
      },
      {
       "titre": "La livraison de l'équipement",
       "contenu": "<p>La livraison est un moment clé de la relation client. Elle se prépare : l'équipement a été contrôlé, nettoyé et préajusté selon la fiche de mesures.</p>\n<ul>\n<li>Ajuster l'équipement sur le visage, puis vérifier la vision de loin, intermédiaire et de près, si possible avec une lecture et en faisant marcher le client.</li>\n<li>Pour un premier équipement progressif, expliquer l'utilisation : tourner la tête plutôt que les yeux pour regarder sur le côté, baisser les yeux (et non la tête) pour lire, prudence dans les escaliers les premiers jours.</li>\n<li>Annoncer une période d'adaptation réaliste (quelques jours pour un changement important) et proposer un rendez-vous de contrôle.</li>\n<li>Remettre les documents : facture détaillée, garanties, notice des lunettes de soleil, carte d'entretien.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> beaucoup d'enseignes appellent le client quelques jours après la livraison d'un premier progressif. Une gêne repérée tôt se règle souvent par un simple ajustage ; laissée de côté, elle devient une réclamation et parfois un abandon de l'équipement.</div>"
      },
      {
       "titre": "Conseils d'utilisation et d'entretien",
       "contenu": "<table>\n<thead><tr><th>Conseil</th><th>Raison</th></tr></thead>\n<tbody>\n<tr><td>Mettre et retirer les lunettes à deux mains</td><td>Évite de déformer la face et les charnières</td></tr>\n<tr><td>Nettoyer à l'eau tiède savonneuse, rincer, sécher avec une microfibre propre</td><td>Les poussières frottées à sec rayent les verres ; les solvants abîment traitements et montures</td></tr>\n<tr><td>Ne jamais poser les lunettes sur les verres</td><td>Rayures</td></tr>\n<tr><td>Ranger dans un étui rigide</td><td>Chocs, écrasement</td></tr>\n<tr><td>Ne pas laisser au soleil derrière un pare-brise ni près d'une source de chaleur</td><td>Déformation des montures plastiques, détérioration des traitements</td></tr>\n<tr><td>Éviter le contact avec laque, parfum, eau de mer ou chlore non rincés</td><td>Altération des traitements et corrosion</td></tr>\n<tr><td>Faire contrôler l'ajustage régulièrement</td><td>Les montures se déforment à l'usage, le centrage et le confort se dégradent</td></tr>\n</tbody>\n</table>\n<p>Les conseils sont donnés oralement au moment de la livraison, mais aussi par écrit (carte ou fiche d'entretien remise avec l'étui) : le client ne retient en moyenne qu'une partie de ce qu'on lui dit, surtout le jour où il découvre ses nouvelles lunettes. Les conseils doivent être formulés simplement, sans jargon, et adaptés à la personne : un enfant et ses parents, une personne âgée, un sportif n'ont pas les mêmes besoins. Pour un enfant, on insiste sur le cordon ou les branches enveloppantes, l'étui à l'école et le contrôle fréquent de l'ajustage, qui se dérègle vite.</p>\n<p>Pour les lunettes de soleil, rappeler la catégorie de filtre et ses limites d'usage (conduite, conduite de nuit). Pour les équipements de sport ou de protection, préciser les conditions d'emploi indiquées par le fabricant.</p>"
      },
      {
       "titre": "Communiquer en situation professionnelle",
       "contenu": "<p>La communication avec le client suit quelques principes simples. La <strong>communication verbale</strong> (les mots) s'accompagne toujours d'une <strong>communication non verbale</strong> (posture, regard, sourire, distance, ton de la voix) qui pèse souvent davantage dans l'impression du client.</p>\n<table>\n<thead><tr><th>Étape</th><th>Comportement attendu</th></tr></thead>\n<tbody>\n<tr><td>Accueil</td><td>Saluer dans les premières secondes, se rendre disponible, faire patienter avec courtoisie</td></tr>\n<tr><td>Découverte</td><td>Questions ouvertes, écoute active, reformulation du besoin</td></tr>\n<tr><td>Conseil</td><td>Argumenter par les bénéfices pour ce client ; présenter les offres de façon claire et honnête</td></tr>\n<tr><td>Objections</td><td>Les accueillir, les faire préciser, répondre par un argument adapté</td></tr>\n<tr><td>Conclusion</td><td>Résumer le choix, expliquer les délais, remettre le devis</td></tr>\n</tbody>\n</table>\n<p>Une argumentation efficace relie une <strong>caractéristique</strong> du produit à un <strong>avantage</strong>, puis à un <strong>bénéfice</strong> pour le client : « ce verre est en indice 1,67 (caractéristique), il est plus mince (avantage), vos lunettes seront plus légères et plus esthétiques avec la monture que vous aimez (bénéfice) ».</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> traiter une réclamation.<br>1. Accueillir le client à l'écart, sans l'interrompre, en montrant qu'on prend sa plainte au sérieux.<br>2. Reformuler pour vérifier la compréhension (« si je comprends bien, vous voyez flou de loin avec l'œil gauche depuis la livraison »).<br>3. Analyser objectivement : contrôle de l'équipement, de l'ajustage, de la vision.<br>4. Proposer une solution concrète et un délai, dans le cadre des garanties et des procédures de l'entreprise.<br>5. Tracer la réclamation et son traitement, puis vérifier la satisfaction du client.</div>"
      },
      {
       "titre": "Confidentialité et communication avec les professionnels de santé",
       "contenu": "<p>Les informations recueillies par l'opticien (ordonnance, réfraction, antécédents) sont des <strong>données de santé</strong>. Elles relèvent du <strong>secret professionnel</strong> et du règlement général sur la protection des données (RGPD) : elles ne sont accessibles qu'aux personnes qui en ont besoin, conservées de façon sécurisée et jamais divulguées à un tiers sans base légale. On ne commente pas la correction d'un client devant d'autres personnes.</p>\n<p>L'opticien communique aussi avec les autres professionnels : <strong>prescripteur</strong> (question sur une ordonnance ambiguë, information après adaptation), <strong>verrier</strong> (commande, réclamation de fabrication), <strong>organismes complémentaires</strong> (demande de prise en charge). Ces échanges écrits doivent être précis, datés, identifiés et conservés.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une ordonnance douteuse (signe manquant, axe absent pour un cylindre, valeurs incohérentes entre les deux yeux) ne s'interprète jamais au hasard. On contacte le prescripteur et on trace l'échange sur la fiche client.</div>"
      }
     ],
     "points_cles": [
      "Le préajustage remet la monture en géométrie correcte avant mesures et montage.",
      "L'ajustage suit un ordre logique : face, appui nasal, ouverture, longueur et courbure des branches, contrôle final.",
      "Identifier le matériau et chauffer progressivement ; protéger les verres de la chaleur.",
      "La livraison comprend vérification de la vision, explications d'utilisation, annonce de l'adaptation et suivi.",
      "Entretien : deux mains, eau savonneuse et microfibre, étui, pas de chaleur excessive.",
      "Argumenter en reliant caractéristique, avantage et bénéfice pour le client.",
      "Une réclamation se traite par l'écoute, la reformulation, l'analyse, une solution et la traçabilité.",
      "Les données du client sont des données de santé couvertes par le secret professionnel et le RGPD."
     ],
     "lexique": [
      {
       "terme": "Préajustage",
       "def": "Mise en géométrie correcte de la monture avant mesures et montage."
      },
      {
       "terme": "Ajustage",
       "def": "Adaptation de l'équipement terminé au visage du porteur."
      },
      {
       "terme": "Test des quatre points",
       "def": "Contrôle de la monture posée à l'envers sur un plan, reposant sur les branches et la face."
      },
      {
       "terme": "Chauffe-monture",
       "def": "Appareil chauffant les montures thermoplastiques pour les régler."
      },
      {
       "terme": "Manchon",
       "def": "Partie arrière de la branche qui se courbe derrière l'oreille."
      },
      {
       "terme": "Écoute active",
       "def": "Attitude d'écoute qui montre l'attention et vérifie la compréhension par la reformulation."
      },
      {
       "terme": "Reformulation",
       "def": "Reprise par le professionnel, avec ses mots, de la demande du client."
      },
      {
       "terme": "Objection",
       "def": "Réserve exprimée par le client face à une proposition."
      },
      {
       "terme": "Données de santé",
       "def": "Informations relatives à la santé d'une personne, protégées par la loi."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Réalisation, contrôle, maintenance, sécurité et qualité",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bopt-controle-equipements",
     "titre": "Contrôle des verres, des montures et des équipements",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Utiliser un frontofocomètre pour mesurer puissances, axes, centres optiques et prismes",
      "Contrôler un verre unifocal, torique et progressif à la réception",
      "Contrôler une monture neuve et un équipement terminé",
      "Comparer les résultats aux tolérances normalisées et décider de la validité",
      "Assurer la traçabilité des contrôles"
     ],
     "sections": [
      {
       "titre": "Le frontofocomètre",
       "contenu": "<p>Le <strong>frontofocomètre</strong> mesure la <strong>puissance frontale arrière</strong> d'un verre, l'orientation de ses méridiens principaux, la position de son centre optique et sa puissance prismatique en un point. Il en existe trois types :</p>\n<table>\n<thead><tr><th>Type</th><th>Lecture</th><th>Particularités</th></tr></thead>\n<tbody>\n<tr><td>À oculaire (manuel)</td><td>L'opérateur regarde la mire dans un oculaire et tourne une molette graduée en dioptries</td><td>Réglage préalable de l'oculaire à la vue de l'opérateur indispensable</td></tr>\n<tr><td>À projection</td><td>Image de la mire projetée sur un écran</td><td>Moins fatigant, lecture partagée</td></tr>\n<tr><td>Automatique</td><td>Mesure électronique, affichage et impression d'un ticket</td><td>Rapide, transposition automatique, mesure des progressifs guidée</td></tr>\n</tbody>\n</table>\n<p>Le verre est placé <strong>face arrière contre l'appui</strong>, bien à plat sur la table de mesure, la monture reposant sur la réglette horizontale. Un <strong>pointeur</strong> permet de marquer le centre optique et l'axe horizontal (trois points alignés).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mesurer un verre torique au frontofocomètre manuel.<br>1. Régler l'oculaire : molette à zéro sans verre, tourner la bague de l'oculaire jusqu'à voir le réticule net.<br>2. Poser le verre, face arrière contre l'appui ; le déplacer jusqu'à centrer la mire sur le réticule (centre optique).<br>3. Tourner la molette jusqu'à rendre nettes les lignes d'une direction ; tourner la mire pour qu'elles soient continues : lire la première puissance et l'axe.<br>4. Tourner la molette jusqu'à rendre nettes les lignes perpendiculaires : lire la seconde puissance.<br>5. Écrire la formule en cylindre négatif : sphère = puissance la plus convexe (ou la moins concave), cylindre = différence, axe = orientation des lignes nettes avec la première lecture. Exemple : −1,50 à 20° puis −2,25 à 110° donnent −1,50 (−0,75) 20°.</div>"
      },
      {
       "titre": "Contrôler un verre à la réception",
       "contenu": "<p>Chaque verre livré est contrôlé avant le montage. On compare le verre à la <strong>commande</strong> et au <strong>bon de livraison</strong> (ou à l'étiquette du sachet) :</p>\n<ul>\n<li><strong>identification</strong> : client, œil (droit ou gauche), produit, matériau, traitements, diamètre ;</li>\n<li><strong>puissances et axe</strong> mesurés au frontofocomètre ;</li>\n<li><strong>aspect</strong> : rayures, bulles, inclusions, défauts de traitement (taches, craquelures), teinte homogène et identique sur les deux verres ;</li>\n<li><strong>marquages</strong> : points de centrage, axe horizontal, repères des progressifs.</li>\n</ul>\n<p>Pour un <strong>verre progressif</strong>, la mesure se fait aux points définis par le fabricant, repérés grâce au gabarit et aux gravures : la puissance de loin au <strong>point de référence de vision de loin</strong> (cercle situé au-dessus de la croix de centrage), la puissance de près au <strong>point de référence de vision de près</strong>, le prisme au <strong>point de référence prismatique</strong> (entre les deux gravures). L'addition se mesure selon la méthode indiquée par le fabricant, qui précise sur quelle face poser le verre.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mesurer un progressif à la croix de centrage au lieu du point de référence de loin donne une puissance légèrement plus convexe, car la progression a déjà commencé. Sur un progressif, un prisme vertical identique sur les deux verres (prisme d'allègement, base inférieure) est normal : il sert à réduire l'épaisseur et ne doit pas être pris pour un défaut.</div>"
      },
      {
       "titre": "Contrôler une monture",
       "contenu": "<p>Une monture neuve est contrôlée à la réception et avant le montage :</p>\n<table>\n<thead><tr><th>Point de contrôle</th><th>Ce que l'on vérifie</th></tr></thead>\n<tbody>\n<tr><td>Conformité</td><td>Référence, coloris, calibre, pont et longueur de branche conformes au choix du client</td></tr>\n<tr><td>Aspect</td><td>Absence de rayures, de bulles, de défauts de revêtement ou de soudure</td></tr>\n<tr><td>Géométrie</td><td>Alignement de la face, symétrie, angles des branches (test des quatre points)</td></tr>\n<tr><td>Mécanique</td><td>Charnières, vis, plaquettes, fonctionnement des charnières flexibles</td></tr>\n<tr><td>Marquage</td><td>Lisibilité des dimensions, présence du marquage réglementaire</td></tr>\n</tbody>\n</table>\n<p>Pour un verre minéral, on peut aussi contrôler les <strong>tensions internes</strong> au polariscope : un verre mal trempé ou serré dans un cercle trop petit montre des franges colorées caractéristiques. Les exigences et méthodes d'essai applicables aux montures sont définies par la norme NF EN ISO 12870. Une monture qui présente un défaut est retournée au fournisseur dans le cadre de sa garantie, avec un descriptif précis.</p>"
      },
      {
       "titre": "Contrôler un équipement terminé",
       "contenu": "<p>Le <strong>contrôle final</strong> intervient après le montage et avant la livraison. Il vérifie que l'équipement est conforme à la prescription et aux mesures :</p>\n<ol>\n<li><strong>Puissances et axes</strong> de chaque verre, droit et gauche non inversés.</li>\n<li><strong>Centrage horizontal</strong> : distance entre chaque centre optique (ou croix de centrage) et l'axe de la monture, comparée au demi-écart pupillaire.</li>\n<li><strong>Centrage vertical</strong> : hauteurs comparées aux mesures ; différence de hauteur entre les deux yeux.</li>\n<li><strong>Prisme</strong> : prisme prescrit présent et correctement orienté, absence de prisme non prescrit au-delà des tolérances.</li>\n<li><strong>Montage</strong> : verre bien en place dans le drageoir, sans jeu ni contrainte, vis serrées, fil nylor tendu, perçages propres.</li>\n<li><strong>Aspect et propreté</strong> : absence d'éclat, de rayure, de trace de marquage.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer un écart de centrage par la règle de Prentice. OD −5,00 D (sphère), demi-écart mesuré 32 mm, centre optique trouvé à 30 mm de l'axe de la monture.<br>1. Écart : 32 − 30 = 2 mm, soit 0,2 cm ; le centre optique est trop côté nez.<br>2. Prisme induit au niveau de la pupille : 0,2 × 5,00 = 1,0 Δ.<br>3. Orientation : verre divergent, la pupille regarde du côté temporal du centre optique ; la base est à l'opposé du centre optique, donc base externe.<br>4. Comparer à la tolérance applicable : un prisme horizontal non prescrit de 1 Δ sur un seul œil est en général jugé excessif pour un tel verre ; on refait le montage.</div>"
      },
      {
       "titre": "Tolérances et décision de validité",
       "contenu": "<p>Aucune fabrication n'est parfaite : les normes définissent des <strong>tolérances</strong>, écarts admissibles entre la valeur commandée et la valeur mesurée.</p>\n<ul>\n<li>La série de normes <strong>NF EN ISO 8980</strong> fixe les tolérances des verres finis non détourés (puissances, axe du cylindre, addition, prisme, épaisseur, transmission).</li>\n<li>La norme <strong>NF EN ISO 21987</strong> fixe les tolérances des verres montés, notamment le centrage horizontal et vertical et les prismes non prescrits.</li>\n<li>La norme <strong>NF EN ISO 13666</strong> définit le vocabulaire de l'optique ophtalmique.</li>\n</ul>\n<p>Les tolérances sont plus serrées pour les faibles puissances que pour les fortes, et la tolérance sur l'axe dépend de la valeur du cylindre : plus le cylindre est fort, plus l'axe doit être précis. Pour le centrage, la tolérance s'exprime souvent en prisme induit admissible ou en millimètres d'écart.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la décision de validité suit trois questions : la mesure est-elle fiable (appareil réglé, verre bien posé, bon point de mesure) ? L'écart est-il dans la tolérance de la norme ou de l'entreprise ? L'écart a-t-il une conséquence pour le porteur (puissance forte, anisométropie, prisme vertical) ? Un écart dans la tolérance mais gênant pour un porteur sensible justifie parfois de refaire.</div>\n<p>Les sujets d'examen fournissent souvent un extrait de tolérances à appliquer : il faut alors utiliser exactement les valeurs données, même si elles diffèrent de celles connues par ailleurs, et citer la ligne du tableau utilisée.</p>\n<p>Une non-conformité donne lieu à une décision écrite : retour du verre au fabricant, reprise du montage ou, si l'écart est minime et sans conséquence, acceptation argumentée.</p>"
      },
      {
       "titre": "Traçabilité des contrôles",
       "contenu": "<p>Chaque contrôle est consigné : fiche de travail cochée et signée, ticket du frontofocomètre automatique agrafé ou archivé dans le logiciel, numéros de lot des verres et références de la monture. Cette <strong>traçabilité</strong> permet de :</p>\n<ul>\n<li>prouver la conformité de l'équipement délivré, assemblé à partir de dispositifs médicaux selon une prescription ;</li>\n<li>retrouver rapidement l'origine d'une erreur en cas de réclamation (commande, fabrication, montage, ajustage) ;</li>\n<li>exercer les garanties auprès des fournisseurs ;</li>\n<li>alimenter les indicateurs qualité du magasin (taux de verres refaits, causes principales).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un atelier organisé, la personne qui contrôle l'équipement final n'est idéalement pas celle qui l'a monté. Ce double regard réduit fortement les erreurs qui arrivent jusqu'au client, en particulier les inversions droite-gauche et les erreurs d'axe.</div>"
      }
     ],
     "points_cles": [
      "Le frontofocomètre mesure la puissance frontale arrière : verre posé face arrière contre l'appui.",
      "Régler l'oculaire d'un frontofocomètre manuel avant toute mesure.",
      "Un verre torique se mesure dans ses deux méridiens principaux ; la formule s'écrit ensuite en cylindre négatif.",
      "Progressif : puissance de loin au point de référence VL, prisme au point de référence prismatique, addition selon le fabricant.",
      "Le prisme d'allègement identique sur les deux progressifs est normal.",
      "Contrôle final : puissances, axes, centrages, hauteurs, prismes, montage, aspect.",
      "Tolérances : NF EN ISO 8980 (verres non détourés), NF EN ISO 21987 (verres montés), NF EN ISO 12870 (montures).",
      "Chaque contrôle est tracé pour prouver la conformité et analyser les réclamations."
     ],
     "lexique": [
      {
       "terme": "Pointeur",
       "def": "Dispositif du frontofocomètre qui marque le centre optique et l'axe horizontal."
      },
      {
       "terme": "Réticule",
       "def": "Repère gradué visible dans l'oculaire ou sur l'écran du frontofocomètre."
      },
      {
       "terme": "Point de référence de vision de loin",
       "def": "Point d'un progressif où l'on mesure la puissance de loin."
      },
      {
       "terme": "Point de référence prismatique",
       "def": "Point d'un progressif où l'on mesure le prisme, situé entre les gravures."
      },
      {
       "terme": "Prisme d'allègement",
       "def": "Prisme vertical identique sur les deux verres progressifs, destiné à réduire l'épaisseur."
      },
      {
       "terme": "Tolérance",
       "def": "Écart admissible entre la valeur commandée et la valeur mesurée."
      },
      {
       "terme": "Contrôle final",
       "def": "Vérification complète de l'équipement monté avant livraison."
      },
      {
       "terme": "Non-conformité",
       "def": "Écart à une exigence, qui donne lieu à une décision et une action."
      },
      {
       "terme": "Traçabilité",
       "def": "Possibilité de retrouver l'historique d'un équipement et de ses contrôles."
      }
     ]
    },
    {
     "id": "bopt-realisation-montage",
     "titre": "Réalisation et montage des verres",
     "niveau": "1re",
     "duree": 50,
     "objectifs": [
      "Identifier les matériels d'atelier et leur fonction dans la chaîne de réalisation",
      "Calculer les décentrements horizontal et vertical à partir des mesures et de la monture",
      "Décrire les étapes du centrage-blocage et du détourage",
      "Adapter le profil du bord du verre au type de monture",
      "Réaliser le montage en monture cerclée, semi-cerclée et percée"
     ],
     "sections": [
      {
       "titre": "Les matériels d'atelier",
       "contenu": "<p>La réalisation d'un équipement mobilise une chaîne de matériels, aujourd'hui largement automatisée et reliée au logiciel de gestion du magasin :</p>\n<table>\n<thead><tr><th>Matériel</th><th>Fonction</th></tr></thead>\n<tbody>\n<tr><td>Lecteur de forme (traceur)</td><td>Palpe le drageoir du cercle, ou lit la forme d'un gabarit ou d'un verre de présentation, et enregistre le contour numérique</td></tr>\n<tr><td>Frontofocomètre</td><td>Mesure et marque le centre optique et l'axe des verres</td></tr>\n<tr><td>Centreur-bloqueur</td><td>Positionne le verre selon les données de centrage et colle une ventouse (gland) qui servira à le tenir dans la meuleuse</td></tr>\n<tr><td>Meuleuse automatique (détoureuse)</td><td>Usine le contour du verre avec des meules diamantées ou des outils de coupe : ébauche, finition, biseau ou rainure, polissage, facettes</td></tr>\n<tr><td>Perceuse</td><td>Réalise les trous des montures percées (parfois intégrée à la meuleuse)</td></tr>\n<tr><td>Rainureuse</td><td>Creuse la rainure des montages nylor (souvent intégrée)</td></tr>\n<tr><td>Chauffe-monture, pinces, tournevis</td><td>Montage et ajustage</td></tr>\n</tbody>\n</table>\n<p>Ces machines doivent être <strong>entretenues</strong> et <strong>étalonnées</strong> selon les notices des fabricants : nettoyage du circuit d'eau de la meuleuse, contrôle de l'usure des meules, calibrage de la taille et de l'axe. Un défaut d'étalonnage produit des erreurs répétées sur tous les équipements.</p>\n<p>Dans de nombreux magasins, une partie des verres est livrée <strong>déjà détourée</strong> par le verrier (service de taillage à distance) à partir de la forme numérisée et des données de centrage transmises : l'opticien n'a plus qu'à monter et contrôler. Cette organisation déplace la responsabilité de la qualité vers les données envoyées : une forme mal lue ou un centrage mal saisi produisent un verre faux qu'aucun geste d'atelier ne pourra corriger.</p>"
      },
      {
       "titre": "Calculer les décentrements",
       "contenu": "<p>Le <strong>centrage</strong> consiste à placer le point de centrage du verre (centre optique d'un unifocal, croix de centrage d'un progressif) devant la pupille du porteur. La machine raisonne par rapport au <strong>centre de l'encadrement</strong> (centre boxing) de la forme. Il faut donc calculer, pour chaque verre, le décalage entre ce centre et le point de centrage :</p>\n<ul>\n<li><strong>décentrement horizontal</strong> = (A + D) / 2 − demi-écart pupillaire (positif : vers le nez) ;</li>\n<li><strong>décentrement vertical</strong> = hauteur de montage − B / 2 (positif : au-dessus du centre de l'encadrement).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> décentrements pour une monture A = 52, B = 40, D = 18. OD : demi-écart 31 mm, hauteur 22 mm.<br>1. Demi-écart entre centres : (52 + 18) / 2 = 35 mm.<br>2. Décentrement horizontal : 35 − 31 = 4 mm vers le nez.<br>3. Demi-hauteur du calibre : 40 / 2 = 20 mm.<br>4. Décentrement vertical : 22 − 20 = +2 mm, le point de centrage est 2 mm au-dessus du centre de l'encadrement.<br>5. Contrôle de vraisemblance : un point de centrage placé au-dessus du milieu du cercle est fréquent pour un progressif ; un décentrement nasal de 4 mm est courant pour un adulte.</div>\n<p>La plupart des centreurs-bloqueurs affichent la forme sur un écran et calculent eux-mêmes ces valeurs à partir des demi-écarts et des hauteurs saisis ; l'opérateur doit cependant savoir les retrouver pour contrôler la cohérence du résultat.</p>"
      },
      {
       "titre": "Centrage et blocage",
       "contenu": "<p>Avant le blocage, le verre est <strong>marqué</strong> : centre optique et axe horizontal pointés au frontofocomètre pour un unifocal (l'axe du cylindre étant orienté selon la prescription), repères reconstitués avec le gabarit du fabricant pour un progressif.</p>\n<ol>\n<li>Charger la forme et saisir (ou récupérer) les données de centrage.</li>\n<li>Poser le verre sur le centreur, face avant vers le haut, et aligner ses repères sur ceux affichés : point de centrage, horizontale, axe.</li>\n<li>Vérifier que la forme décentrée est entièrement contenue dans le verre (diamètre suffisant), en tenant compte du biseau.</li>\n<li>Bloquer : la ventouse adhésive est déposée sur le verre, généralement au centre de l'encadrement ou au point de centrage selon le mode choisi.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les verres à traitement hydrophobe sont très glissants. Sans adhésif spécial ou pastille de maintien, le verre peut tourner sur la ventouse pendant le détourage : le verre est alors taillé avec un axe faux. Vérifier systématiquement l'axe après détourage sur ce type de verre.</div>"
      },
      {
       "titre": "Le détourage",
       "contenu": "<p>Le <strong>détourage</strong> donne au verre la forme de la monture. La meuleuse enchaîne :</p>\n<ul>\n<li>l'<strong>ébauche</strong>, qui enlève rapidement la matière en excès ;</li>\n<li>la <strong>finition</strong>, qui réalise le profil du bord adapté à la monture ;</li>\n<li>éventuellement le <strong>polissage</strong> du bord (montures nylor et percées, où la tranche reste visible) et le <strong>chanfreinage</strong> (petites facettes de sécurité sur les arêtes).</li>\n</ul>\n<table>\n<thead><tr><th>Type de monture</th><th>Profil du bord</th><th>Réglages importants</th></tr></thead>\n<tbody>\n<tr><td>Cerclée</td><td>Biseau en V qui s'emboîte dans le drageoir</td><td>Position du biseau (suivre la face avant ou équilibrer pour un verre épais), taille</td></tr>\n<tr><td>Semi-cerclée (nylor)</td><td>Bord plat avec rainure</td><td>Profondeur et position de la rainure, polissage</td></tr>\n<tr><td>Percée</td><td>Bord plat poli, trous percés</td><td>Position, diamètre et orientation des perçages</td></tr>\n</tbody>\n</table>\n<p>La <strong>taille</strong> du verre doit correspondre exactement au contour : un verre trop grand force la monture ou ne se monte pas, un verre trop petit tourne dans le cercle et peut tomber. Les meuleuses permettent une retouche : on reprend le verre de quelques dixièmes de millimètre sans perdre le centrage, tant qu'il reste bloqué ou repositionnable sur sa ventouse.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour un premier verre d'une monture inconnue, l'opérateur règle souvent la machine pour laisser une légère surcote, contrôle sur la monture, puis retouche. Le second verre est taillé directement à la bonne valeur, ce qui garantit deux verres identiques.</div>"
      },
      {
       "titre": "Le montage selon le type de monture",
       "contenu": "<p><strong>Monture cerclée métallique</strong> : on desserre la vis de fermeture du cercle, on engage le verre en commençant par la partie nasale, on referme et on serre la vis ; le verre ne doit ni tourner ni être sous contrainte. On contrôle que le biseau est bien dans le drageoir sur tout le pourtour.</p>\n<p><strong>Monture cerclée plastique</strong> : on chauffe le cercle pour le rendre souple, on engage le verre par la partie temporale haute puis on fait le tour en appuyant, et on laisse refroidir. Certaines montures se montent à froid. On vérifie l'absence de jour entre verre et cercle.</p>\n<p><strong>Monture semi-cerclée (nylor)</strong> : on engage le haut du verre dans la demi-lune, puis on fait passer le fil de nylon dans la rainure à l'aide d'un ruban ; la tension du fil doit maintenir fermement le verre sans le déformer. Un fil usé ou trop lâche est remplacé.</p>\n<p><strong>Monture percée</strong> : on reporte la position des trous à partir de la monture ou du gabarit, on perce avec un foret adapté au matériau (en limitant l'échauffement), puis on fixe pont et tenons avec les vis, rondelles ou bagues prévues par le fabricant, sans serrage excessif qui fendrait le verre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> quel que soit le type de montage, le verre monté doit être immobile, sans contrainte, avec un axe et un centrage conformes. Le contrôle final au frontofocomètre est obligatoire avant la livraison.</div>"
      },
      {
       "titre": "Organiser le poste de réalisation",
       "contenu": "<p>Le poste de travail de l'atelier est aménagé pour la qualité, la sécurité et l'efficacité :</p>\n<ul>\n<li>un <strong>éclairage</strong> suffisant et sans reflets pour les contrôles visuels ;</li>\n<li>des <strong>bacs de travail</strong> individuels par client (« plateaux ») qui empêchent de mélanger les verres et montures de deux dossiers ;</li>\n<li>un rangement logique de l'outillage, à portée de main ;</li>\n<li>les machines installées selon leurs notices (alimentation électrique, eau, évacuation, ventilation) ;</li>\n<li>un plan de travail à bonne hauteur et un siège réglable pour limiter les troubles musculo-squelettiques.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> enchaînement type d'une réalisation.<br>1. Préparer le plateau : fiche de travail, monture préajustée, verres contrôlés.<br>2. Lire la forme et vérifier les données de centrage.<br>3. Marquer, centrer et bloquer le premier verre ; détourer ; contrôler la taille ; monter.<br>4. Répéter pour le second verre en vérifiant l'œil (droit ou gauche).<br>5. Contrôler l'équipement complet, nettoyer, préajuster, tracer sur la fiche.</div>"
      }
     ],
     "points_cles": [
      "Chaîne de réalisation : lecteur de forme, frontofocomètre, centreur-bloqueur, meuleuse, outillage de montage.",
      "Décentrement horizontal = (A + D) / 2 − demi-écart ; décentrement vertical = hauteur − B / 2.",
      "Le verre est marqué, centré selon ses repères puis bloqué sur une ventouse.",
      "Les verres hydrophobes peuvent tourner sur la ventouse : vérifier l'axe après détourage.",
      "Profil du bord : biseau pour le cerclé, rainure pour le nylor, bord poli et perçages pour le percé.",
      "Le montage diffère selon le matériau : vis de fermeture, chauffe, fil nylon, vis et bagues.",
      "Le verre monté doit être immobile, sans contrainte, avec axe et centrage conformes.",
      "Le poste est organisé par plateaux individuels pour éviter les inversions et les mélanges."
     ],
     "lexique": [
      {
       "terme": "Lecteur de forme",
       "def": "Appareil qui palpe le cercle ou un gabarit et enregistre le contour numérique."
      },
      {
       "terme": "Centreur-bloqueur",
       "def": "Appareil qui positionne le verre selon les données de centrage et y pose la ventouse."
      },
      {
       "terme": "Ventouse (gland)",
       "def": "Pièce collée sur le verre pour le maintenir pendant le détourage."
      },
      {
       "terme": "Détourage",
       "def": "Usinage du contour du verre à la forme de la monture."
      },
      {
       "terme": "Biseau",
       "def": "Profil en V du bord du verre qui s'emboîte dans le drageoir."
      },
      {
       "terme": "Rainure",
       "def": "Gorge creusée dans la tranche du verre pour recevoir le fil d'un montage nylor."
      },
      {
       "terme": "Décentrement vertical",
       "def": "Écart entre la hauteur de centrage et la mi-hauteur du calibre."
      },
      {
       "terme": "Chanfrein",
       "def": "Petite facette réalisée sur l'arête du verre pour la sécurité et l'esthétique."
      },
      {
       "terme": "Plateau de travail",
       "def": "Bac individuel regroupant tous les éléments d'un dossier client."
      }
     ]
    },
    {
     "id": "bopt-rhabillage-reparations",
     "titre": "Rhabillage, réparations et maintenance des équipements",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Diagnostiquer l'état d'un équipement rapporté par un client",
      "Réaliser un rhabillage : plaquettes, vis, manchons, fil nylor",
      "Choisir une technique de réparation adaptée au matériau et au défaut",
      "Appliquer les règles de sécurité lors d'une brasure",
      "Décider entre réparation, remplacement et envoi en atelier spécialisé"
     ],
     "sections": [
      {
       "titre": "Diagnostiquer avant d'intervenir",
       "contenu": "<p>Un client rapporte une paire « qui ne tient plus », « qui fait mal » ou qui est cassée. Avant toute intervention, l'opticien établit un <strong>diagnostic</strong> :</p>\n<ol>\n<li>Écouter la plainte et observer l'équipement porté (glissement, appui douloureux, face qui penche).</li>\n<li>Identifier la monture : marque, référence, matériau (marquage intérieur des branches), âge.</li>\n<li>Repérer les pièces usées ou cassées : plaquettes jaunies ou durcies, vis desserrées ou manquantes, manchons fendus, fil nylor détendu, charnière arrachée, soudure cassée, revêtement écaillé.</li>\n<li>Évaluer l'état des verres : rayures, traitement dégradé, éclats, correction toujours adaptée.</li>\n<li>Annoncer au client ce qui est possible, le délai, le coût éventuel et les risques (une réparation peut échouer sur une monture fragilisée).</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> toute intervention qui présente un risque pour la monture ou les verres se fait avec l'<strong>accord explicite du client</strong>, de préférence écrit (bon de dépôt ou de réparation), en précisant que l'opticien ne peut garantir le résultat sur une pièce ancienne ou fragilisée.</div>"
      },
      {
       "titre": "Le rhabillage",
       "contenu": "<p>Le <strong>rhabillage</strong> est le remplacement des petites pièces d'usure, sans réparation de la structure. C'est un service courant, souvent rapide, qui fidélise la clientèle.</p>\n<table>\n<thead><tr><th>Pièce</th><th>Signes d'usure</th><th>Intervention</th></tr></thead>\n<tbody>\n<tr><td>Plaquettes</td><td>Jaunies, durcies, fendues, glissantes</td><td>Remplacer par des plaquettes de même système de fixation (à vis, à clip, à emboîtement) ; silicone pour l'adhérence, matériaux rigides pour la durabilité</td></tr>\n<tr><td>Vis de charnière ou de cercle</td><td>Desserrées, perdues, filetage abîmé</td><td>Remplacer par une vis de même diamètre et longueur ; vis autobloquantes ou produit frein-filet adapté</td></tr>\n<tr><td>Manchons, embouts</td><td>Fendus, décolorés, irritants</td><td>Remplacer, en ramollissant si nécessaire par chauffage léger</td></tr>\n<tr><td>Fil nylor</td><td>Détendu, effiloché, cassé</td><td>Remplacer avec un fil de section adaptée à la rainure</td></tr>\n<tr><td>Ressorts de charnières flexibles</td><td>Perte d'élasticité</td><td>Remplacement de la charnière ou de la branche selon conception</td></tr>\n</tbody>\n</table>\n<p>Le rhabillage suppose un <strong>stock de pièces</strong> organisé : assortiments de vis classées par diamètre et longueur, plaquettes des principaux systèmes de fixation, manchons de différentes tailles, bobines de fil nylor de plusieurs sections, rondelles et bagues pour montures percées. L'outillage associé comprend des tournevis de précision, une pince coupe-vis, une lime fine, un porte-pièce et une loupe d'atelier. Un tiroir mal rangé fait perdre plus de temps que l'intervention elle-même : les assortiments sont étiquetés et réapprovisionnés dès qu'une case se vide.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> remplacer une vis de charnière perdue.<br>1. Identifier le diamètre de filetage et la longueur nécessaires (jauge ou assortiment de vis calibrées).<br>2. Aligner les éléments de la charnière avec un tournevis ou une broche de centrage.<br>3. Visser sans forcer ; si la vis dépasse, la couper et limer l'extrémité, ou choisir une vis plus courte.<br>4. Contrôler le fonctionnement : la branche doit s'ouvrir et se fermer avec une résistance légère et régulière.<br>5. Contrôler l'ajustage : un remplacement de vis peut modifier l'ouverture de la branche.</div>"
      },
      {
       "titre": "Nettoyage et remise en état",
       "contenu": "<p>La <strong>remise en état</strong> comprend le nettoyage complet, le resserrage, le rhabillage et un nouvel ajustage. Le nettoyage aux <strong>ultrasons</strong> est efficace pour éliminer les dépôts dans les charnières et le long des cercles, mais il ne convient pas à tous les équipements :</p>\n<ul>\n<li>à éviter ou à limiter pour les montures en bois, en corne, certains revêtements fragiles et les verres dont le traitement est déjà dégradé ;</li>\n<li>à pratiquer avec un liquide adapté, en respectant le temps indiqué par la notice de l'appareil ;</li>\n<li>suivi d'un rinçage et d'un séchage soigneux.</li>\n</ul>\n<p>Les montures en acétate peuvent être <strong>repolies</strong> pour retrouver leur brillant, en atelier, avec des pâtes et disques adaptés. Les revêtements métalliques écaillés ne se reprennent en général pas en magasin.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> proposer un nettoyage et un réajustage gratuits lors de chaque passage du client est une pratique courante de fidélisation. C'est aussi l'occasion de repérer une paire ancienne dont la correction n'est plus adaptée et de proposer un contrôle de la vue.</div>"
      },
      {
       "titre": "Les réparations",
       "contenu": "<p>Une <strong>réparation</strong> touche la structure de la monture. Les techniques dépendent du matériau :</p>\n<table>\n<thead><tr><th>Défaut</th><th>Matériau</th><th>Technique</th></tr></thead>\n<tbody>\n<tr><td>Pont ou tenon cassé</td><td>Maillechort, monel, acier</td><td>Brasage à l'argent (micro-chalumeau ou appareil à résistance), avec flux décapant, puis finition</td></tr>\n<tr><td>Casse sur monture en titane</td><td>Titane, bêta-titane</td><td>Soudure laser en atelier spécialisé ; brasage classique impossible</td></tr>\n<tr><td>Charnière arrachée</td><td>Acétate</td><td>Insertion à chaud d'une nouvelle charnière, ou charnière rapportée vissée</td></tr>\n<tr><td>Branche cassée</td><td>Tous</td><td>Remplacement par une branche d'origine commandée au fabricant</td></tr>\n<tr><td>Vis cassée dans un tenon</td><td>Métal</td><td>Extraction par perçage ou outil spécifique, puis nouvelle vis ou nouveau taraudage</td></tr>\n<tr><td>Face plastique cassée</td><td>Acétate, injecté</td><td>Réparation rarement durable : remplacement de la face ou de la monture</td></tr>\n</tbody>\n</table>\n<p>Le <strong>brasage</strong> assemble deux pièces métalliques par un métal d'apport (alliage à base d'argent) dont la température de fusion est inférieure à celle des pièces. Le flux décapant nettoie les surfaces et permet au métal d'apport de mouiller le joint. Après refroidissement, on élimine les résidus, on lime et on polit, puis on protège la zone (vernis) ; la teinte du revêtement d'origine ne peut pas toujours être retrouvée.</p>"
      },
      {
       "titre": "Sécurité pendant les réparations",
       "contenu": "<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne brase jamais une monture avec ses verres en place : la chaleur détruit les traitements et peut faire éclater ou déformer le verre. On démonte les verres, on protège les parties plastiques (plaquettes, manchons) en les retirant ou en les isolant avec une pâte ou un écran thermique, et on éloigne tout produit inflammable.</div>\n<p>Les principaux risques et les mesures de prévention associées sont :</p>\n<ul>\n<li><strong>brûlure et incendie</strong> (flamme, pièces chaudes) : poste dégagé, support réfractaire, extincteur adapté à proximité, pièces manipulées à la pince ;</li>\n<li><strong>fumées et vapeurs</strong> (flux, métal d'apport) : aspiration au poste ou ventilation efficace, consultation des fiches de données de sécurité des produits ;</li>\n<li><strong>projections</strong> (perçage, meulage, ressorts) : lunettes de protection ;</li>\n<li><strong>coupures</strong> (outils, vis coupées) : outils en bon état, gestes maîtrisés ;</li>\n<li><strong>rayonnement</strong> des appareils de soudure laser : utilisation réservée aux personnes formées, avec les protections prévues par le fabricant.</li>\n</ul>"
      },
      {
       "titre": "Réparer, remplacer ou sous-traiter",
       "contenu": "<p>La décision tient compte de plusieurs critères : faisabilité technique, coût comparé à une pièce neuve, valeur (y compris sentimentale) de la monture pour le client, délai acceptable et risque d'échec.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> décider pour une monture en titane dont le pont est cassé, verres progressifs récents en bon état.<br>1. Faisabilité en magasin : brasage classique impossible sur titane.<br>2. Options : soudure laser par un atelier spécialisé (délai, coût, résultat esthétique incertain sur le revêtement) ou commande d'une face neuve identique chez le fabricant si le modèle est encore disponible.<br>3. Contraintes : les verres progressifs détourés pour cette forme pourront être remontés dans une face identique, mais pas dans une autre monture.<br>4. Proposition : devis pour les deux options, avec délais ; prêt d'un équipement de dépannage si le client en a besoin.<br>5. Trace écrite : accord du client sur l'option choisie et réserves éventuelles.</div>\n<table>\n<thead><tr><th>Critère</th><th>Plutôt réparer</th><th>Plutôt remplacer ou sous-traiter</th></tr></thead>\n<tbody>\n<tr><td>Matériau</td><td>Métal brasable, pièce de rhabillage standard</td><td>Titane, face plastique cassée, revêtement spécial</td></tr>\n<tr><td>Coût</td><td>Inférieur nettement au prix d'une pièce neuve</td><td>Proche du prix d'une monture neuve</td></tr>\n<tr><td>Disponibilité des pièces</td><td>Pièces en stock ou commandables</td><td>Modèle arrêté, pièces introuvables</td></tr>\n<tr><td>Verres</td><td>Verres récents et coûteux à conserver</td><td>Verres usés ou correction à changer</td></tr>\n<tr><td>Délai</td><td>Intervention immédiate possible</td><td>Le client peut attendre ou dispose d'une paire de secours</td></tr>\n</tbody>\n</table>\n<p>Les réparations sous garantie du fabricant (défaut de fabrication) se distinguent des casses accidentelles, éventuellement couvertes par une garantie commerciale ou une assurance de l'enseigne. L'opticien vérifie les conditions avant de s'engager auprès du client.</p>"
      }
     ],
     "points_cles": [
      "Diagnostiquer avant d'intervenir : plainte, matériau, pièces usées, état des verres.",
      "Toute intervention risquée nécessite l'accord explicite du client, de préférence écrit.",
      "Le rhabillage remplace plaquettes, vis, manchons et fil nylor avec des pièces compatibles.",
      "Le nettoyage aux ultrasons ne convient pas à tous les matériaux ni aux traitements dégradés.",
      "Brasage à l'argent pour les métaux courants ; soudure laser en atelier spécialisé pour le titane.",
      "Jamais de brasage avec les verres montés ; protéger les parties plastiques ; ventiler.",
      "Décider entre réparation, remplacement et sous-traitance selon faisabilité, coût, délai et risque.",
      "Distinguer garantie fabricant et casse accidentelle avant de s'engager."
     ],
     "lexique": [
      {
       "terme": "Rhabillage",
       "def": "Remplacement des petites pièces d'usure d'une monture."
      },
      {
       "terme": "Brasage",
       "def": "Assemblage de pièces métalliques par un métal d'apport fondant à plus basse température."
      },
      {
       "terme": "Flux décapant",
       "def": "Produit qui nettoie le joint et favorise l'étalement du métal d'apport."
      },
      {
       "terme": "Soudure laser",
       "def": "Assemblage par fusion localisée au laser, utilisé notamment pour le titane."
      },
      {
       "terme": "Frein-filet",
       "def": "Produit ou dispositif empêchant une vis de se desserrer."
      },
      {
       "terme": "Charnière flexible",
       "def": "Charnière à ressort qui permet une ouverture au-delà de la position normale."
      },
      {
       "terme": "Bac à ultrasons",
       "def": "Appareil de nettoyage utilisant des vibrations dans un liquide."
      },
      {
       "terme": "Bon de dépôt",
       "def": "Document remis au client lors du dépôt d'un équipement en réparation."
      },
      {
       "terme": "Garantie commerciale",
       "def": "Engagement contractuel du vendeur au-delà des garanties légales."
      }
     ]
    },
    {
     "id": "bopt-sante-securite-qualite",
     "titre": "Santé-sécurité, environnement, ergonomie et démarche qualité",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les dangers propres au magasin d'optique et à son atelier et proposer des mesures de prévention",
      "Appliquer les règles d'hygiène contre les risques infectieux liés au contact avec le client",
      "Gérer les déchets et effluents de l'atelier dans le respect de l'environnement",
      "Aménager un poste de travail selon les principes de l'ergonomie",
      "Mettre en œuvre les outils de base d'une démarche qualité"
     ],
     "sections": [
      {
       "titre": "Dangers et prévention au magasin et à l'atelier",
       "contenu": "<p>La prévention distingue le <strong>danger</strong> (ce qui peut causer un dommage : une meule, un solvant), l'<strong>exposition</strong> (la présence d'une personne dans la zone de danger) et le <strong>risque</strong>, qui combine la probabilité et la gravité du dommage. L'employeur doit évaluer les risques et les consigner dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP), mis à jour régulièrement.</p>\n<table>\n<thead><tr><th>Danger</th><th>Situation</th><th>Prévention</th></tr></thead>\n<tbody>\n<tr><td>Mécanique</td><td>Meuleuse, perceuse, outils coupants, ressorts</td><td>Capots fermés pendant l'usinage, machines conformes et entretenues, lunettes de protection</td></tr>\n<tr><td>Chimique</td><td>Solvants de nettoyage, teintures de verres, flux de brasage, liquides de bac à ultrasons</td><td>Lecture de l'étiquette et de la fiche de données de sécurité, gants adaptés, ventilation, stockage fermé et étiqueté</td></tr>\n<tr><td>Thermique</td><td>Chauffe-monture, chalumeau, bains de teinture chauds</td><td>Poste dégagé, manipulation à la pince, extincteur adapté</td></tr>\n<tr><td>Électrique</td><td>Appareils sur secteur, présence d'eau à la meuleuse</td><td>Matériel vérifié, pas d'intervention sur une machine sous tension, prises protégées</td></tr>\n<tr><td>Bruit</td><td>Meuleuse en fonctionnement</td><td>Capotage, entretien, limitation de la durée d'exposition</td></tr>\n<tr><td>Rayonnement</td><td>Lampes UV de certains appareils, laser</td><td>Capots, protections fournies, formation</td></tr>\n</tbody>\n</table>\n<p>Les produits chimiques portent les <strong>pictogrammes de danger</strong> du règlement CLP (losanges à bordure rouge : inflammable, corrosif, toxique, nocif ou irritant, dangereux pour la santé à long terme, dangereux pour l'environnement…). La <strong>fiche de données de sécurité</strong> (FDS), en seize rubriques, précise les dangers, les équipements de protection et la conduite à tenir en cas d'accident.</p>"
      },
      {
       "titre": "Prévenir les risques infectieux",
       "contenu": "<p>L'opticien touche le visage de ses clients, manipule des montures essayées par d'autres personnes et utilise des appareils en contact avec le front, le menton ou les yeux. Les micro-organismes (bactéries, virus) peuvent se transmettre par les mains, les surfaces et les objets.</p>\n<ul>\n<li><strong>Hygiène des mains</strong> : lavage ou friction hydroalcoolique avant et après chaque client, en particulier avant de toucher le visage ou les yeux.</li>\n<li><strong>Désinfection des montures</strong> essayées avant remise en présentoir, avec un produit compatible avec les matériaux.</li>\n<li><strong>Désinfection des points de contact</strong> des appareils : mentonnière, appui-front, pupillomètre, monture d'essai, occulteur.</li>\n<li><strong>Équipements de réparation</strong> : nettoyer une monture rapportée avant de la travailler.</li>\n<li><strong>Vigilance</strong> devant un œil rouge, collé, qui coule : éviter les contacts, désinfecter le matériel et orienter le client vers un médecin.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un produit désinfectant inadapté (solvant, alcool fort sur certains plastiques ou revêtements) peut ternir ou fissurer une monture, ou abîmer le traitement d'un verre. Utiliser les produits validés par l'entreprise et compatibles avec les matériaux, selon le mode d'emploi.</div>"
      },
      {
       "titre": "Protéger l'environnement",
       "contenu": "<p>Le magasin produit plusieurs catégories de déchets qui doivent être triés et éliminés par les bonnes filières :</p>\n<table>\n<thead><tr><th>Déchet</th><th>Origine</th><th>Traitement</th></tr></thead>\n<tbody>\n<tr><td>Boues et eaux de détourage</td><td>Meuleuse : eau chargée de particules de matière plastique ou minérale</td><td>Filtration ou décantation selon le système installé ; boues collectées comme déchets, pas de rejet direct à l'égout sans traitement</td></tr>\n<tr><td>Chutes de verres, verres défectueux</td><td>Atelier</td><td>Collecte séparée selon les filières proposées par les fournisseurs</td></tr>\n<tr><td>Produits chimiques usagés</td><td>Teintures, solvants, liquides de nettoyage</td><td>Collecte par une entreprise agréée, jamais à l'évier</td></tr>\n<tr><td>Équipements électriques et électroniques, piles</td><td>Appareils hors service</td><td>Filière des déchets d'équipements électriques et électroniques (DEEE)</td></tr>\n<tr><td>Emballages, cartons</td><td>Livraisons</td><td>Tri et recyclage</td></tr>\n<tr><td>Lunettes usagées données par les clients</td><td>Comptoir</td><td>Collecte pour des associations ou des filières de recyclage</td></tr>\n</tbody>\n</table>\n<p>Les économies d'eau et d'énergie (circuit d'eau de la meuleuse, éclairage LED, extinction des appareils) et le choix de fournisseurs engagés font aussi partie d'une démarche responsable que les clients sont de plus en plus attentifs à reconnaître.</p>"
      },
      {
       "titre": "Ergonomie et conditions de travail",
       "contenu": "<p>L'<strong>ergonomie</strong> adapte le travail à l'homme. Dans un magasin d'optique, les principales contraintes sont les postures (penché sur la machine, debout longtemps), les gestes répétitifs et fins (vissage, ajustage à la pince), le travail sur écran et la charge mentale liée à l'affluence.</p>\n<ul>\n<li>Plan de travail à hauteur adaptée : coudes à angle droit pour le travail fin assis, éclairage localisé sans reflets.</li>\n<li>Siège réglable, repose-pieds si nécessaire, alternance des positions assise et debout.</li>\n<li>Outils adaptés à la main, entretenus, tournevis à manche ergonomique.</li>\n<li>Écran du poste de vente placé face à l'utilisateur, haut de l'écran à hauteur des yeux ou un peu en dessous, à une distance de l'ordre d'une longueur de bras.</li>\n<li>Pauses et alternance des tâches pour limiter les <strong>troubles musculo-squelettiques</strong> (TMS) du cou, des épaules, des poignets.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'opticien qui conseille ses clients sur le travail sur écran gagne à appliquer les mêmes règles à son propre poste. Un aménagement simple (rehausse d'écran, lampe d'atelier orientable) supprime souvent des douleurs installées depuis des mois.</div>"
      },
      {
       "titre": "La démarche qualité",
       "contenu": "<p>La <strong>qualité</strong> est l'aptitude d'un produit ou d'un service à satisfaire les besoins, exprimés ou implicites, du client. Dans un magasin d'optique, elle porte à la fois sur le produit (équipement conforme), sur le service (accueil, conseil, délai, suivi) et sur l'organisation (procédures, traçabilité).</p>\n<p>Une démarche qualité suit le cycle d'amélioration continue <strong>PDCA</strong> (roue de Deming) : <strong>planifier</strong> (définir objectifs et procédures), <strong>réaliser</strong>, <strong>vérifier</strong> (mesurer, contrôler), <strong>agir</strong> (corriger et améliorer), puis recommencer. Une entreprise peut faire certifier son système de management de la qualité selon la norme <strong>ISO 9001</strong>.</p>\n<table>\n<thead><tr><th>Outil</th><th>Usage en magasin d'optique</th></tr></thead>\n<tbody>\n<tr><td>QQOQCP</td><td>Décrire précisément un problème : quoi, qui, où, quand, comment, pourquoi</td></tr>\n<tr><td>Diagramme d'Ishikawa (5M)</td><td>Classer les causes possibles d'un défaut : main-d'œuvre, matériel, méthode, matière, milieu</td></tr>\n<tr><td>Diagramme de Pareto</td><td>Identifier les quelques causes qui expliquent la majorité des défauts</td></tr>\n<tr><td>Indicateurs</td><td>Taux de verres refaits, délai moyen de livraison, taux de réclamations, satisfaction</td></tr>\n<tr><td>Procédures et fiches réflexes</td><td>Standardiser la commande, le contrôle, la désinfection</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser des verres refaits. Sur un trimestre, 40 verres ont été refaits : 18 pour erreur de saisie de commande, 9 pour casse au montage, 7 pour mesures de hauteur erronées, 4 pour défaut de fabrication, 2 pour autres causes.<br>1. Classer par ordre décroissant et calculer les pourcentages : saisie 45 %, casse 22,5 %, hauteurs 17,5 %, fabrication 10 %, autres 5 %.<br>2. Pareto : saisie et casse représentent les deux tiers des cas : ce sont les priorités.<br>3. Ishikawa sur la saisie : méthode (pas de relecture), main-d'œuvre (nouveaux vendeurs), matériel (logiciel qui ne transpose pas).<br>4. Actions : relecture systématique par une seconde personne, formation, paramétrage du logiciel.<br>5. Vérifier au trimestre suivant que l'indicateur a baissé.</div>"
      },
      {
       "titre": "Qualité perçue et satisfaction du client",
       "contenu": "<p>La qualité ne se limite pas à la conformité technique. Le client juge aussi la <strong>qualité perçue</strong> : temps d'attente, clarté des explications et du devis, respect du délai annoncé, propreté du magasin, attitude de l'équipe, suivi après la vente. Une non-qualité coûte cher : verre refait, temps passé, client perdu, image dégradée.</p>\n<p>Dans un magasin d'optique, la qualité s'appuie aussi sur des <strong>procédures écrites</strong> courtes, affichées au poste concerné : relecture de la commande avant envoi, contrôle des verres à réception, contrôle final, désinfection des montures et des appareils, traitement des réclamations. Chaque procédure précise qui fait quoi, quand et avec quel enregistrement. Un nouvel arrivant s'y forme rapidement et l'équipe travaille de façon homogène, même en période d'affluence.</p>\n<p>Mesurer la satisfaction (questionnaire, avis, appels de suivi) et analyser les réclamations sont des sources d'amélioration. Chaque réclamation est une information : elle est enregistrée, analysée et suivie d'une action si sa cause peut se reproduire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la qualité est l'affaire de toute l'équipe. Le geste le plus efficace reste souvent le plus simple : relire une commande, contrôler un équipement avant livraison, noter une information sur la fiche client.</div>"
      }
     ],
     "points_cles": [
      "Danger, exposition et risque se distinguent ; l'évaluation des risques est consignée dans le document unique.",
      "Les produits chimiques se manipulent après lecture de l'étiquette CLP et de la fiche de données de sécurité.",
      "Hygiène des mains, désinfection des montures essayées et des points de contact des appareils limitent les risques infectieux.",
      "Les boues de détourage et les produits chimiques ne se rejettent pas directement à l'égout.",
      "L'ergonomie du poste réduit les troubles musculo-squelettiques.",
      "La qualité vise la satisfaction du client ; elle suit le cycle PDCA.",
      "QQOQCP, Ishikawa, Pareto et indicateurs sont les outils de base de l'amélioration.",
      "Chaque réclamation est enregistrée, analysée et suivie d'une action."
     ],
     "lexique": [
      {
       "terme": "Danger",
       "def": "Propriété d'un produit, d'une machine ou d'une situation capable de causer un dommage."
      },
      {
       "terme": "Risque",
       "def": "Combinaison de la probabilité et de la gravité d'un dommage lié à une exposition au danger."
      },
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels, obligatoire dans l'entreprise."
      },
      {
       "terme": "Fiche de données de sécurité",
       "def": "Document en seize rubriques décrivant les dangers d'un produit chimique et les précautions."
      },
      {
       "terme": "DEEE",
       "def": "Déchets d'équipements électriques et électroniques, collectés par une filière spécifique."
      },
      {
       "terme": "TMS",
       "def": "Troubles musculo-squelettiques touchant muscles, tendons et nerfs."
      },
      {
       "terme": "PDCA",
       "def": "Cycle d'amélioration continue : planifier, réaliser, vérifier, agir."
      },
      {
       "terme": "Diagramme d'Ishikawa",
       "def": "Diagramme causes-effet classant les causes selon les 5M."
      },
      {
       "terme": "Diagramme de Pareto",
       "def": "Classement des causes par importance décroissante pour fixer les priorités."
      },
      {
       "terme": "Indicateur qualité",
       "def": "Mesure chiffrée permettant de suivre la performance d'un processus."
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
     "id": "bopt-doc-ordonnance-fiche-client",
     "titre": "Lire une ordonnance et une fiche client",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Repérer les mentions obligatoires et utiles d'une ordonnance de verres correcteurs",
      "Interpréter les différentes notations d'une correction (signes, cylindres, VL et VP)",
      "Calculer une addition à partir d'une ordonnance rédigée en VL et VP",
      "Exploiter une fiche client pour relier besoins, plaintes et correction",
      "Rédiger une analyse argumentée d'un dossier client"
     ],
     "sections": [
      {
       "titre": "Le document et sa structure",
       "contenu": "<p>L'<strong>ordonnance</strong> (ou prescription) de verres correcteurs est le document de départ de tout dossier. À l'épreuve écrite, elle est souvent fournie avec une <strong>fiche client</strong> qui décrit la personne, ses activités et ses plaintes. Une ordonnance comporte habituellement :</p>\n<table>\n<thead><tr><th>Zone</th><th>Contenu</th><th>Ce qu'on vérifie</th></tr></thead>\n<tbody>\n<tr><td>En-tête</td><td>Identité du prescripteur, spécialité, numéro d'identification professionnelle, adresse</td><td>Prescripteur habilité</td></tr>\n<tr><td>Patient</td><td>Nom, prénom, âge ou date de naissance</td><td>Concordance avec le client ; âge (règles de validité et d'adaptation)</td></tr>\n<tr><td>Date</td><td>Date de rédaction</td><td>Validité au jour de la délivrance</td></tr>\n<tr><td>Correction</td><td>OD et OG : sphère, cylindre, axe ; addition ou valeurs de près ; prisme éventuel</td><td>Lisibilité, signes, cohérence</td></tr>\n<tr><td>Mentions</td><td>Type de verres, teinte, port permanent, opposition éventuelle à l'adaptation, renouvellement</td><td>Respect des consignes du prescripteur</td></tr>\n<tr><td>Signature</td><td>Signature et cachet</td><td>Authenticité</td></tr>\n</tbody>\n</table>\n<p>La <strong>fiche client</strong> regroupe : identité, profession et loisirs, équipement actuel et ses mesures, plaintes, antécédents, mesures réalisées au magasin (écarts pupillaires, hauteurs), historique des achats.</p>"
      },
      {
       "titre": "Vocabulaire et notations",
       "contenu": "<ul>\n<li><strong>OD</strong> : œil droit ; <strong>OG</strong> : œil gauche ; <strong>ODG</strong> ou <strong>OU</strong> : les deux yeux.</li>\n<li><strong>VL</strong> : vision de loin ; <strong>VI</strong> : vision intermédiaire ; <strong>VP</strong> : vision de près.</li>\n<li><strong>Sphère</strong>, <strong>cylindre</strong> et <strong>axe</strong> : écrits « −1,50 (−0,50) 170° » ou « −1,50 (−0,50 à 170°) » ou encore « −1,50 −0,50 × 170 ».</li>\n<li><strong>Plan</strong> ou <strong>0,00</strong> : aucune puissance sphérique ; la mention « neutre » a le même sens.</li>\n<li><strong>Add</strong> : addition, toujours positive, identique pour les deux yeux dans la grande majorité des cas.</li>\n<li><strong>Prisme</strong> : puissance en Δ et orientation de la base (interne, externe, supérieure, inférieure, ou angle).</li>\n</ul>\n<p>Certaines ordonnances donnent une correction de <strong>VL</strong> et une correction de <strong>VP</strong> complètes au lieu d'une addition. L'addition se calcule alors par différence des sphères (les cylindres et les axes devant être identiques) : Add = sphère VP − sphère VL.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un signe absent devant une valeur ne signifie pas « positif » avec certitude. Dans un cylindre « (0,75) 90° », il faut chercher la convention utilisée ailleurs sur l'ordonnance ; si elle n'est pas évidente, on contacte le prescripteur. Une erreur de signe sur un cylindre d'une dioptrie rend l'équipement inutilisable.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une ordonnance et une fiche client.<br>1. <strong>Identifier</strong> : le patient correspond-il au client ? Âge exact ? Date de l'ordonnance et validité au regard de l'âge et de l'usage (première délivrance, renouvellement) ?<br>2. <strong>Recopier</strong> la correction œil par œil dans un tableau, sans rien modifier, puis la <strong>transposer</strong> en cylindre négatif si nécessaire.<br>3. <strong>Calculer</strong> l'addition si l'ordonnance donne VL et VP, et l'équivalent sphérique de chaque œil.<br>4. <strong>Caractériser</strong> l'amétropie de chaque œil : myopie, hypermétropie, astigmatisme (type et direction), presbytie ; repérer une anisométropie (différence d'équivalent sphérique entre les yeux).<br>5. <strong>Croiser</strong> avec la fiche client : âge et addition cohérents ? Plaintes expliquées par l'évolution par rapport à l'ancienne paire ?<br>6. <strong>Relever</strong> les mentions particulières et les contraintes pour le choix de l'équipement.<br>7. <strong>Conclure</strong> par une phrase de synthèse justifiée.</div>\n<p>À l'écrit, la qualité de la réponse tient autant à la <strong>justification</strong> qu'au résultat : on cite la valeur de l'ordonnance utilisée, le calcul et la règle appliquée.</p>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<p>Les erreurs les plus fréquentes lors de l'exploitation d'une ordonnance et d'une fiche client sont les suivantes :</p>\n<ul>\n<li>inverser l'œil droit et l'œil gauche en recopiant, en particulier lorsque l'ordonnance est rédigée sur une seule ligne ;</li>\n<li>transposer la sphère et le cylindre mais oublier de tourner l'axe de 90°, ou obtenir un axe supérieur à 180° ;</li>\n<li>confondre une correction de près complète avec une addition, et ajouter une seconde fois l'addition ;</li>\n<li>calculer l'âge du client à la date du jour au lieu de la date de l'ordonnance, ou l'inverse, alors que la question précise la date de référence ;</li>\n<li>conclure sur une plainte sans la relier à une donnée chiffrée (évolution de la correction, addition, anisométropie) ;</li>\n<li>ignorer une mention manuscrite (« verres teintés », « pas d'adaptation ») qui conditionne la délivrance ;</li>\n<li>oublier que le prisme, s'il existe, doit être recopié avec l'orientation de sa base pour chaque œil.</li>\n</ul>\n<p>Pour s'en prémunir, on recopie systématiquement les données dans un tableau à deux colonnes (OD, OG) avant tout calcul, et l'on relit la réponse finale en la confrontant au document d'origine. Une réponse juste mais mal reliée au document perd une partie de sa valeur à l'épreuve : il faut toujours écrire « d'après l'ordonnance » ou « d'après la fiche client » suivi de la donnée exploitée.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>On dispose des deux documents suivants (données fictives).</p>\n<p><strong>Ordonnance</strong> — Docteur L., ophtalmologiste. Patiente : Mme R., née le 14/03/1974. Date : 02/09/2026. « Verres correcteurs, port permanent. VL : OD −1,50 (+0,75 à 170°) ; OG −2,00. VP : OD +0,75 (+0,75 à 170°) ; OG +0,25. »</p>\n<p><strong>Fiche client</strong> (extrait) :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Information</th></tr></thead>\n<tbody>\n<tr><td>Profession</td><td>Comptable, 7 h par jour sur deux écrans</td></tr>\n<tr><td>Loisirs</td><td>Conduite de nuit fréquente, lecture</td></tr>\n<tr><td>Équipement actuel (2022)</td><td>Unifocaux VL : OD −1,25 (−0,50) 80° ; OG −1,75</td></tr>\n<tr><td>Plaintes</td><td>« Je retire mes lunettes pour lire, je ne vois plus bien l'écran avec. Mal à la tête le soir. »</td></tr>\n<tr><td>Antécédents</td><td>Aucun ; dernier examen ophtalmologique en 2022</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Identification.</strong> Mme R. a 52 ans à la date de l'ordonnance. L'ordonnance est récente (septembre 2026), rédigée par un ophtalmologiste, avec la mention « port permanent ».</p>\n<p><strong>2. Transposition en cylindre négatif.</strong> OD VL : −1,50 (+0,75) 170° devient −1,50 + 0,75 = −0,75 ; cylindre −0,75 ; axe 170° − 90° = 80°, soit <strong>OD −0,75 (−0,75) 80°</strong>. OG VL : <strong>−2,00</strong> sphère seule.</p>\n<p><strong>3. Addition.</strong> OD : +0,75 − (−1,50) = +2,25. OG : +0,25 − (−2,00) = +2,25. Les cylindres et axes de près sont identiques à ceux de loin : l'ordonnance est cohérente. <strong>Addition +2,25</strong>, valeur plausible à 52 ans pour une lecture rapprochée, peut-être un peu forte pour le travail sur écran.</p>\n<p><strong>4. Caractérisation.</strong> OD : astigmatisme myopique simple ou composé ? Méridien 80° : −0,75 D ; méridien 170° : −1,50 D : les deux méridiens sont myopes, c'est un <strong>astigmatisme myopique composé</strong>, axe du cylindre négatif voisin de 90° : astigmatisme inverse. OG : <strong>myopie</strong> de −2,00 D. Équivalents sphériques : OD −1,13 D ; OG −2,00 D, soit une différence d'environ 0,9 D, anisométropie modérée. Cliente <strong>presbyte</strong>.</p>\n<p><strong>5. Croisement avec la fiche.</strong> La correction de loin a modérément évolué : à droite, sphère −1,25 devenue −0,75 et cylindre −0,50 devenu −0,75 au même axe (équivalent sphérique passé de −1,50 à −1,13 D) ; à gauche, −1,75 devenu −2,00. Ces variations, inférieures à une demi-dioptrie en équivalent sphérique, n'expliquent pas à elles seules les plaintes. Les plaintes s'expliquent surtout par la presbytie non compensée : la cliente retire ses lunettes pour lire (myopie faible qui rapproche le punctum remotum), ne voit plus son écran avec sa correction de loin, et souffre de fatigue en fin de journée.</p>\n<p><strong>6. Conséquences pour l'équipement.</strong> Besoin en vision de loin (conduite de nuit), intermédiaire (écrans) et de près : des verres progressifs avec antireflet de qualité sont adaptés en équipement principal ; une seconde paire de verres de proximité pour le bureau peut être proposée. Les mesures devront être monoculaires (anisométropie et port de progressifs).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne analyse va de l'ordonnance aux besoins : identification, transcription, calcul, caractérisation, croisement avec la fiche client, puis conséquences pour l'équipement. Chaque affirmation s'appuie sur une valeur citée.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans le logiciel, la correction transposée est saisie et l'ordonnance scannée est jointe au dossier. Une seconde personne relit la saisie avant la commande des verres.</div>"
      }
     ],
     "points_cles": [
      "Une ordonnance comporte prescripteur, patient, date, correction œil par œil, mentions et signature.",
      "On vérifie l'identité, l'âge, la date et la validité avant toute exploitation.",
      "La correction est recopiée sans modification, puis transposée en cylindre négatif si besoin.",
      "Addition = sphère VP − sphère VL, cylindres et axes identiques.",
      "On caractérise chaque œil : type d'amétropie, direction de l'astigmatisme, anisométropie, presbytie.",
      "La fiche client relie la correction aux plaintes et aux besoins.",
      "Un signe ou un axe douteux impose de contacter le prescripteur.",
      "Chaque conclusion cite la valeur et le calcul qui la justifient."
     ],
     "lexique": [
      {
       "terme": "Ordonnance",
       "def": "Prescription médicale écrite des verres correcteurs."
      },
      {
       "terme": "Fiche client",
       "def": "Document rassemblant identité, besoins, plaintes, mesures et historique du client."
      },
      {
       "terme": "OD, OG, ODG",
       "def": "Œil droit, œil gauche, les deux yeux."
      },
      {
       "terme": "VL, VI, VP",
       "def": "Vision de loin, intermédiaire, de près."
      },
      {
       "terme": "Plan",
       "def": "Mention indiquant une puissance sphérique nulle."
      },
      {
       "terme": "Astigmatisme myopique composé",
       "def": "Astigmatisme dont les deux méridiens sont myopes."
      },
      {
       "terme": "Anisométropie",
       "def": "Différence de réfraction entre les deux yeux."
      },
      {
       "terme": "Port permanent",
       "def": "Mention indiquant que l'équipement doit être porté en continu."
      }
     ]
    },
    {
     "id": "bopt-doc-catalogue-devis",
     "titre": "Exploiter un catalogue verrier et établir un devis",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Repérer dans un catalogue verrier les gammes, matériaux, plages de fabrication et traitements",
      "Vérifier qu'un verre est fabricable pour une prescription et un diamètre donnés",
      "Comparer plusieurs offres de verres selon des critères techniques et économiques",
      "Lire la structure d'un devis normalisé d'optique",
      "Justifier par écrit le choix d'un verre à partir des documents"
     ],
     "sections": [
      {
       "titre": "Le catalogue verrier : structure",
       "contenu": "<p>Chaque fabricant de verres publie un <strong>catalogue</strong> (papier ou intégré au logiciel de commande) accompagné d'un <strong>tarif</strong>. À l'épreuve écrite, on en fournit généralement des extraits sous forme de tableaux. On y trouve :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Gammes ou designs</td><td>Unifocaux (sphériques, asphériques), progressifs (standard, personnalisés), verres de proximité, verres solaires</td></tr>\n<tr><td>Matériaux</td><td>Indice, constringence, densité, filtration UV, compatibilité avec le perçage</td></tr>\n<tr><td>Plages de fabrication</td><td>Valeurs de sphère, de cylindre (parfois puissance maximale combinée), d'addition disponibles, pour chaque diamètre</td></tr>\n<tr><td>Diamètres</td><td>Diamètres livrables, parfois diamètre optimisé selon la forme</td></tr>\n<tr><td>Traitements et teintes</td><td>Durcissant, antireflets (plusieurs niveaux), filtres, photochromiques, polarisants</td></tr>\n<tr><td>Codes et prix</td><td>Code de commande, prix de vente conseillé ou prix d'achat, par verre ; parfois classement 100 % Santé</td></tr>\n<tr><td>Délais et conditions</td><td>Stock ou fabrication, délai indicatif, garanties</td></tr>\n</tbody>\n</table>\n<p>Les plages sont souvent présentées sous forme de grille : en ligne les sphères, en colonne les cylindres, chaque case indiquant les diamètres disponibles. Certaines plages sont exprimées en <strong>cylindre négatif</strong> uniquement, d'où la nécessité de transposer la prescription avant lecture.</p>"
      },
      {
       "titre": "Vocabulaire et pièges du catalogue",
       "contenu": "<ul>\n<li><strong>Verre de stock</strong> : fabriqué à l'avance, livré rapidement, dans une plage limitée de puissances et de diamètres.</li>\n<li><strong>Verre de fabrication</strong> (ou « surfacé ») : réalisé à la commande, plage beaucoup plus large, délai plus long.</li>\n<li><strong>Puissance combinée</strong> : somme sphère + cylindre (en cylindre négatif), parfois limitée par le fabricant.</li>\n<li><strong>Diamètre optimisé</strong> ou « aminci selon forme » : le verrier calcule l'épaisseur minimale à partir de la forme et du centrage transmis.</li>\n<li><strong>Prix unitaire</strong> : les tarifs sont presque toujours exprimés <strong>par verre</strong> ; un équipement en compte deux.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> trois erreurs reviennent souvent : lire la plage sans avoir transposé la prescription ; oublier qu'un traitement ou une teinte n'est pas disponible dans tous les matériaux ou toutes les plages ; multiplier un prix « par verre » par un seul verre, ou additionner deux fois un traitement déjà inclus dans le prix de la gamme. Lire les notes en bas de tableau, qui contiennent souvent les exceptions.</div>\n<p>Le <strong>devis normalisé</strong> remis au client présente, pour chaque offre, la monture et chaque verre (désignation, prix), les prestations éventuelles, le total, la part prise en charge par l'assurance maladie obligatoire, une estimation de la part complémentaire lorsqu'elle est connue, et le reste à charge. Il doit comporter au moins une offre de <strong>classe A</strong> du dispositif 100 % Santé.</p>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir un verre dans un catalogue.<br>1. <strong>Préparer la prescription</strong> : transposer en cylindre négatif, calculer la puissance combinée, noter l'addition.<br>2. <strong>Déterminer les contraintes</strong> : type de monture (percée, nylor, cerclée), diamètre minimal nécessaire, besoins du client (écran, conduite, sport), budget, éventuelle offre de classe A.<br>3. <strong>Présélectionner</strong> les gammes et matériaux compatibles avec ces contraintes.<br>4. <strong>Vérifier la fabricabilité</strong> pour chaque œil dans la grille : sphère, cylindre, puissance combinée, addition, diamètre.<br>5. <strong>Vérifier les options</strong> : traitement, teinte disponibles pour ce matériau et cette plage.<br>6. <strong>Chiffrer</strong> : prix par verre × 2 (ou verre droit + verre gauche s'ils diffèrent), options comprises.<br>7. <strong>Comparer</strong> et conclure en justifiant le choix par les données du catalogue.</div>\n<p>La justification doit être <strong>technique</strong> (fabricable, compatible, épaisseur, résistance) et <strong>adaptée au client</strong> (bénéfices concrets), pas seulement économique.</p>"
      },
      {
       "titre": "Comparer des offres de façon structurée",
       "contenu": "<p>Lorsque plusieurs verres conviennent techniquement, il faut les comparer selon des critères explicites plutôt que par impression. Un tableau de comparaison simple clarifie la décision et sert de support à l'explication au client :</p>\n<table>\n<thead><tr><th>Critère</th><th>Ce que l'on regarde dans le catalogue</th><th>Bénéfice pour le client</th></tr></thead>\n<tbody>\n<tr><td>Épaisseur et poids</td><td>Indice, densité, géométrie asphérique, amincissement selon forme</td><td>Confort, esthétique, choix de monture élargi</td></tr>\n<tr><td>Qualité optique</td><td>Constringence, géométrie, personnalisation</td><td>Netteté en regard latéral, moins de liserés colorés</td></tr>\n<tr><td>Résistance</td><td>Matériau, compatibilité perçage, durcissant</td><td>Sécurité, durabilité</td></tr>\n<tr><td>Traitements</td><td>Niveau d'antireflet, hydrophobe, filtres disponibles</td><td>Vision de nuit, entretien facile, confort sur écran</td></tr>\n<tr><td>Délai</td><td>Stock ou fabrication</td><td>Disponibilité de l'équipement</td></tr>\n<tr><td>Prix et prise en charge</td><td>Prix par verre, classe A ou B</td><td>Reste à charge</td></tr>\n</tbody>\n</table>\n<p>On présente en général deux ou trois offres graduées, dont l'offre de classe A, en expliquant ce que chaque niveau apporte réellement à ce client. Une offre plus chère se justifie par un bénéfice concret lié à ses besoins, jamais par la seule mention « haut de gamme ». Le client doit pouvoir comprendre la différence et choisir librement, devis en main.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p><strong>Situation</strong> (données fictives) : M. T., 34 ans, développeur, choisit une monture semi-cerclée (nylor) 54□16. Prescription : OD −5,50 (−1,25) 10° ; OG −5,00 (−1,00) 175°. Demi-écarts : 31,5 mm et 31 mm. Il travaille beaucoup sur écran et souhaite des verres « les plus fins possible ».</p>\n<p><strong>Extrait de catalogue</strong> (verres unifocaux asphériques, cylindre négatif, prix de vente conseillés par verre) :</p>\n<table>\n<thead><tr><th>Matériau</th><th>Sphère disponible</th><th>Cylindre maxi</th><th>Diamètres</th><th>Prix avec antireflet standard</th><th>Supplément antireflet haut de gamme</th></tr></thead>\n<tbody>\n<tr><td>Organique 1,50</td><td>+6,00 à −6,00</td><td>−2,00</td><td>65 / 70</td><td>60 €</td><td>30 €</td></tr>\n<tr><td>Organique 1,60</td><td>+6,00 à −8,00</td><td>−4,00</td><td>65 / 70 / 75</td><td>95 €</td><td>30 €</td></tr>\n<tr><td>Organique 1,67</td><td>+6,00 à −10,00</td><td>−4,00</td><td>65 / 70</td><td>140 €</td><td>30 €</td></tr>\n</tbody>\n</table>\n<p>Note de bas de tableau : « Puissance combinée sphère + cylindre limitée à −7,50 pour l'indice 1,50. Rainurage nylor possible dans tous les matériaux pour une épaisseur au bord supérieure ou égale à 2 mm. »</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Préparation.</strong> Les prescriptions sont déjà en cylindre négatif. Puissances combinées : OD −5,50 − 1,25 = −6,75 ; OG −6,00.</p>\n<p><strong>2. Diamètre minimal.</strong> Demi-écart entre centres : (54 + 16) / 2 = 35 mm. Décentrements : OD 3,5 mm, OG 4 mm. Ø<sub>min</sub> ≈ 54 + 2 × 4 + 2 = 64 mm (OG, le plus contraignant). Le diamètre 65 mm suffit, sous réserve de vérification sur la forme réelle.</p>\n<p><strong>3. Fabricabilité.</strong></p>\n<table>\n<thead><tr><th>Matériau</th><th>OD</th><th>OG</th><th>Conclusion</th></tr></thead>\n<tbody>\n<tr><td>1,50</td><td>Sphère et cylindre dans la plage, combinée −6,75 ≤ −7,50 en valeur absolue : possible</td><td>Possible</td><td>Fabricable, mais épais au bord</td></tr>\n<tr><td>1,60</td><td>Possible</td><td>Possible</td><td>Fabricable</td></tr>\n<tr><td>1,67</td><td>Possible</td><td>Possible</td><td>Fabricable, le plus mince</td></tr>\n</tbody>\n</table>\n<p><strong>4. Compatibilité nylor.</strong> Les verres sont fortement négatifs : le bord est épais, la condition « épaisseur au bord ≥ 2 mm » est largement remplie quel que soit le matériau. Le montage nylor est possible, et il laisse voir la tranche en bas : un indice élevé limite l'effet « cul de bouteille ».</p>\n<p><strong>5. Chiffrage avec antireflet haut de gamme</strong> (travail sur écran) : 1,50 : (60 + 30) × 2 = 180 € ; 1,60 : (95 + 30) × 2 = 250 € ; 1,67 : (140 + 30) × 2 = 340 €.</p>\n<p><strong>6. Conclusion argumentée.</strong> Le verre 1,67 répond le mieux à la demande de finesse avec une puissance combinée proche de −7 D et une tranche visible en montage nylor ; le 1,60 constitue une alternative intéressante, moins chère de 90 €, avec un gain d'épaisseur déjà net par rapport au 1,50. Le 1,50, bien que fabricable, donnerait des bords épais et visibles. On présente au client les deux options 1,67 et 1,60, en plus de l'offre de classe A obligatoire, en expliquant le bénéfice de chacune.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une réponse complète enchaîne préparation de la prescription, diamètre, fabricabilité œil par œil, contraintes de la monture, chiffrage et conclusion argumentée. La note de bas de tableau contenait ici deux conditions décisives.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le logiciel de commande signale automatiquement une puissance hors plage, mais pas toujours une incompatibilité avec le type de monture ou un diamètre trop juste. La vérification humaine reste nécessaire.</div>"
      }
     ],
     "points_cles": [
      "Un catalogue verrier présente gammes, matériaux, plages de fabrication, diamètres, traitements, codes et prix.",
      "Transposer la prescription dans la convention du catalogue avant de lire les plages.",
      "Vérifier sphère, cylindre, puissance combinée, addition et diamètre pour chaque œil.",
      "Lire les notes de bas de tableau : exceptions, conditions de montage, options non disponibles.",
      "Les prix sont généralement par verre : un équipement en compte deux.",
      "Le devis normalisé présente les offres, la prise en charge et le reste à charge, avec au moins une offre de classe A.",
      "Le choix se justifie par des critères techniques et par les bénéfices pour le client.",
      "La vérification humaine complète les contrôles automatiques du logiciel."
     ],
     "lexique": [
      {
       "terme": "Catalogue verrier",
       "def": "Document du fabricant décrivant les verres disponibles et leurs caractéristiques."
      },
      {
       "terme": "Plage de fabrication",
       "def": "Ensemble des puissances et diamètres dans lesquels un verre peut être fourni."
      },
      {
       "terme": "Puissance combinée",
       "def": "Somme de la sphère et du cylindre en notation cylindre négatif."
      },
      {
       "terme": "Verre de fabrication",
       "def": "Verre réalisé à la commande par surfaçage."
      },
      {
       "terme": "Amincissement selon forme",
       "def": "Calcul par le verrier de l'épaisseur minimale compatible avec la forme et le centrage."
      },
      {
       "terme": "Reste à charge",
       "def": "Montant qui reste payé par le client après les remboursements."
      },
      {
       "terme": "Prix de vente conseillé",
       "def": "Prix indiqué par le fabricant pour la revente au client."
      },
      {
       "terme": "Classe B",
       "def": "Équipements du dispositif 100 % Santé à tarifs libres."
      }
     ]
    },
    {
     "id": "bopt-doc-fiche-mesures-atelier",
     "titre": "Exploiter une fiche de mesures et un bon de travail d'atelier",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les rubriques d'une fiche de mesures et d'un bon de travail d'atelier",
      "Contrôler la cohérence des mesures transmises à l'atelier",
      "Calculer décentrements et diamètre minimal à partir de la fiche",
      "Repérer une anomalie et proposer l'action adaptée avant réalisation",
      "Renseigner la partie contrôle d'un bon de travail"
     ],
     "sections": [
      {
       "titre": "Le document et sa structure",
       "contenu": "<p>Le <strong>bon de travail</strong> (ou fiche atelier, fiche de montage) suit l'équipement du comptoir à l'atelier puis jusqu'à la livraison. Il est souvent imprimé depuis le logiciel et accompagne le plateau de travail. Il regroupe les informations de la <strong>fiche de mesures</strong> et les consignes de réalisation.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu habituel</th></tr></thead>\n<tbody>\n<tr><td>Identification</td><td>Numéro de dossier, nom du client, vendeur, date de commande, date de livraison promise</td></tr>\n<tr><td>Prescription</td><td>OD et OG : sphère, cylindre, axe, addition, prisme</td></tr>\n<tr><td>Verres</td><td>Fabricant, gamme, matériau, traitements, diamètre, références de commande</td></tr>\n<tr><td>Monture</td><td>Marque, modèle, coloris, A, B, D, type de montage, matériau</td></tr>\n<tr><td>Centrage</td><td>Demi-écarts de loin (et de près si besoin), hauteurs, éventuellement paramètres de port</td></tr>\n<tr><td>Consignes</td><td>Position du biseau, polissage, perçages, teinte, remarques (« client sensible à l'épaisseur »)</td></tr>\n<tr><td>Contrôles</td><td>Cases à cocher et visas : réception des verres, montage, contrôle final, livraison</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Vocabulaire et repères de cohérence",
       "contenu": "<ul>\n<li><strong>½ EP</strong> ou <strong>EP mono</strong> : demi-écart pupillaire, œil par œil ; <strong>EP</strong> : écart total.</li>\n<li><strong>H</strong> ou <strong>hauteur</strong> : hauteur de centrage par rapport au bas du verre (ou, sur certains logiciels, par rapport au bas du cercle : vérifier la référence).</li>\n<li><strong>Décentrement horizontal / vertical</strong> : décalage du point de centrage par rapport au centre de l'encadrement.</li>\n<li><strong>Ø</strong> : diamètre du verre non détouré commandé.</li>\n<li><strong>Hauteur minimale</strong> : valeur imposée par le fabricant pour un progressif.</li>\n</ul>\n<p>Quelques <strong>ordres de grandeur</strong> permettent de détecter une erreur de saisie : un écart pupillaire de loin d'adulte se situe le plus souvent entre 54 et 74 mm ; les deux demi-écarts diffèrent rarement de plus de 2 à 3 mm ; les deux hauteurs diffèrent rarement de plus de 2 mm ; une hauteur supérieure à la hauteur B du calibre est impossible.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une valeur hors des ordres de grandeur n'est pas forcément fausse (asymétrie réelle du visage), mais elle doit être <strong>vérifiée</strong> avant réalisation, en remesurant ou en interrogeant la personne qui a pris les mesures. Réaliser d'abord et vérifier ensuite coûte deux verres.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler un bon de travail avant réalisation.<br>1. <strong>Identifier</strong> le dossier et vérifier que les verres et la monture du plateau correspondent au bon (références, œil droit et gauche).<br>2. <strong>Comparer</strong> la prescription du bon à l'ordonnance ou au dossier, et aux étiquettes des verres.<br>3. <strong>Contrôler la cohérence des mesures</strong> : somme des demi-écarts égale à l'écart total, hauteurs plausibles et compatibles avec B, hauteur minimale respectée pour un progressif.<br>4. <strong>Calculer</strong> les décentrements horizontal et vertical de chaque verre.<br>5. <strong>Vérifier le diamètre</strong> : Ø<sub>min</sub> ≈ A + 2 × décentrement horizontal + 2 mm, à comparer au diamètre livré.<br>6. <strong>Lire les consignes</strong> et vérifier leur faisabilité (perçage dans le matériau, nylor avec l'épaisseur au bord).<br>7. <strong>Décider</strong> : réalisation possible, ou anomalie à signaler avec la question précise à poser.</div>\n<p>Après réalisation, l'opérateur complète la partie contrôle : valeurs mesurées au frontofocomètre, conformité du centrage, visa et date. Ces informations servent en cas de réclamation.</p>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<p>Les erreurs les plus fréquentes lors de l'exploitation d'un bon de travail sont les suivantes :</p>\n<ul>\n<li>commencer la réalisation sans vérifier que le plateau contient bien les verres et la monture du dossier, et monter les verres d'un autre client ;</li>\n<li>confondre la hauteur mesurée depuis le bas du verre et la hauteur mesurée depuis le bas du cercle (la différence correspond à la profondeur du drageoir, environ 0,5 à 1 mm) ;</li>\n<li>utiliser l'écart pupillaire total divisé par deux alors que des demi-écarts différents ont été mesurés ;</li>\n<li>oublier la hauteur minimale d'un progressif, ou ne pas la confronter à la hauteur B de la monture ;</li>\n<li>appliquer une consigne (« biseau suivant la face avant ») sans vérifier qu'elle convient à l'épaisseur du verre, ce qui peut laisser dépasser un bord épais à l'arrière ;</li>\n<li>compléter la partie contrôle de mémoire, sans mesurer, ou la laisser vide.</li>\n</ul>\n<p>Un bon de travail correctement renseigné doit permettre à n'importe quel membre de l'équipe de reprendre le dossier à n'importe quelle étape, sans avoir à interroger la personne qui l'a commencé. C'est le critère à garder en tête quand on le complète.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p><strong>Bon de travail n° 2026-0815</strong> (données fictives) — Client : M. D., 58 ans. Livraison promise : vendredi.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>OD</th><th>OG</th></tr></thead>\n<tbody>\n<tr><td>Prescription</td><td>+1,75 (−0,50) 95° Add +2,50</td><td>+2,00 Add +2,50</td></tr>\n<tr><td>Verres livrés</td><td>Progressif personnalisé 1,60, antireflet, Ø 70</td><td>Progressif personnalisé 1,60, antireflet, Ø 70</td></tr>\n<tr><td>½ EP de loin</td><td>32,0 mm</td><td>33,5 mm</td></tr>\n<tr><td>Hauteur (bas du verre)</td><td>19 mm</td><td>23 mm</td></tr>\n</tbody>\n</table>\n<p>Monture : acétate cerclée, 55□17, B = 36 mm. EP total noté : 64 mm. Hauteur minimale du progressif (catalogue) : 17 mm. Consigne : « biseau suivant la face avant ».</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Cohérence des écarts.</strong> 32,0 + 33,5 = 65,5 mm, alors que l'EP total noté est 64 mm. Écart de 1,5 mm : <strong>incohérence</strong> à vérifier (erreur de saisie d'une des valeurs ou mesures prises à des moments différents).</p>\n<p><strong>2. Hauteurs.</strong> Les deux hauteurs (19 et 23 mm) sont supérieures à la hauteur minimale de 17 mm et inférieures à B = 36 mm : elles sont compatibles avec la monture. En revanche, elles diffèrent de <strong>4 mm</strong>, ce qui est inhabituel. Une telle asymétrie peut exister (visage asymétrique, monture mal ajustée au moment de la mesure), mais pour un progressif, une erreur de 4 mm sur un œil décalerait toute la progression : le porteur lirait avec un œil dans la zone de près et l'autre dans le couloir.</p>\n<p><strong>3. Décentrements</strong> (sous réserve de confirmation des mesures). Demi-écart entre centres : (55 + 17) / 2 = 36 mm. Horizontal : OD 36 − 32 = 4 mm ; OG 36 − 33,5 = 2,5 mm, vers le nez. Vertical : B / 2 = 18 mm ; OD 19 − 18 = +1 mm ; OG 23 − 18 = +5 mm.</p>\n<p><strong>4. Diamètre.</strong> Ø<sub>min</sub> ≈ 55 + 2 × 4 + 2 = 65 mm pour l'OD dans le sens horizontal : le diamètre de 70 mm paraît suffisant. Mais cette approximation ignore les coins de la forme. Pour l'OG, le décentrement vertical de 5 mm éloigne fortement le coin inférieur temporal du point de centrage (environ 30 mm horizontalement et 23 mm verticalement, soit près de 38 mm en diagonale si la forme était rectangulaire). Il faut donc vérifier sur la forme numérisée, au centreur, que le verre couvre tout le contour : c'est un second point de contrôle avant détourage.</p>\n<p><strong>5. Prescription.</strong> OD : cylindre −0,50 axe 95°, astigmatisme inverse faible ; additions identiques, cohérentes avec l'âge.</p>\n<p><strong>6. Décision.</strong> La réalisation est <strong>suspendue</strong> : on demande une nouvelle prise de mesures sur la monture préajustée (demi-écarts au pupillomètre et hauteurs) avant de détourer des verres personnalisés coûteux. La question posée au vendeur est précise : « EP 64 ou 65,5 ? Hauteur OG 23 mm confirmée ? ». Une fois les valeurs confirmées, on renseigne le bon et on réalise.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse d'un bon de travail ne se limite pas aux calculs : elle conclut sur une décision (réaliser, suspendre, faire vérifier) et formule la question qui lève le doute.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les verres progressifs personnalisés sont calculés à partir des mesures transmises. Une erreur de mesure ne se rattrape pas au montage : il faut recommander les verres. C'est pourquoi beaucoup de magasins imposent un double contrôle des mesures pour ces produits.</div>"
      }
     ],
     "points_cles": [
      "Le bon de travail suit l'équipement du comptoir à la livraison et porte les visas de contrôle.",
      "Vérifier la correspondance entre dossier, verres, monture et ordonnance avant toute réalisation.",
      "La somme des demi-écarts doit égaler l'écart total.",
      "Les hauteurs doivent être compatibles avec B et avec la hauteur minimale du progressif.",
      "Une différence de hauteur ou de demi-écart inhabituelle se vérifie avant réalisation.",
      "Décentrements : (A + D) / 2 − ½ EP et hauteur − B / 2.",
      "Le diamètre livré doit couvrir la forme décentrée.",
      "L'analyse se conclut par une décision et une question précise."
     ],
     "lexique": [
      {
       "terme": "Bon de travail",
       "def": "Document de suivi d'un équipement de la commande à la livraison."
      },
      {
       "terme": "Fiche de mesures",
       "def": "Document regroupant écarts pupillaires, hauteurs et paramètres de port."
      },
      {
       "terme": "EP total",
       "def": "Écart pupillaire entre les centres des deux pupilles."
      },
      {
       "terme": "Hauteur minimale",
       "def": "Hauteur de montage minimale imposée par le fabricant d'un progressif."
      },
      {
       "terme": "Visa",
       "def": "Signature ou initiales attestant qu'un contrôle a été réalisé."
      },
      {
       "terme": "Ordre de grandeur",
       "def": "Valeur habituelle permettant de repérer une donnée aberrante."
      },
      {
       "terme": "Verre personnalisé",
       "def": "Verre calculé à partir des mesures propres au porteur et à sa monture."
      },
      {
       "terme": "Plateau",
       "def": "Bac regroupant les éléments d'un dossier en atelier."
      }
     ]
    },
    {
     "id": "bopt-doc-controle-tolerances",
     "titre": "Exploiter un ticket de contrôle et une grille de tolérances",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire un ticket de frontofocomètre automatique et ses abréviations",
      "Comparer les valeurs mesurées à la commande en tenant compte des conventions d'écriture",
      "Appliquer une grille de tolérances fournie pour décider de la conformité",
      "Calculer un prisme induit par un défaut de centrage à partir des mesures",
      "Rédiger une conclusion de contrôle et l'action corrective"
     ],
     "sections": [
      {
       "titre": "Les documents et leur structure",
       "contenu": "<p>Le contrôle d'un équipement s'appuie sur trois documents qu'il faut confronter :</p>\n<ul>\n<li>la <strong>commande</strong> ou le bon de travail (valeurs attendues : prescription, demi-écarts, hauteurs, prisme prescrit) ;</li>\n<li>le <strong>ticket du frontofocomètre</strong> automatique (valeurs mesurées) ou le relevé manuel ;</li>\n<li>une <strong>grille de tolérances</strong> : extrait de norme (NF EN ISO 8980 pour les verres, NF EN ISO 21987 pour les verres montés) ou grille interne de l'entreprise, fournie dans le dossier à l'épreuve.</li>\n</ul>\n<p>Un ticket comporte en général, pour chaque côté repéré <strong>R</strong> (right, droit) et <strong>L</strong> (left, gauche) : <strong>SPH</strong> (sphère), <strong>CYL</strong> (cylindre), <strong>AX</strong> ou <strong>AXIS</strong> (axe), <strong>ADD</strong> (addition pour les progressifs), <strong>PRISM</strong> ou <strong>P</strong> avec la base (<strong>BI</strong> : base in, interne ; <strong>BO</strong> : base out, externe ; <strong>BU</strong> : base up, haute ; <strong>BD</strong> : base down, basse), et <strong>PD</strong> (distances pupillaires, ici distance entre centre optique et axe de la monture lorsque l'appareil est en mode « monture »).</p>"
      },
      {
       "titre": "Vocabulaire et réglages à repérer",
       "contenu": "<p>Avant de comparer, il faut connaître les <strong>réglages</strong> de l'appareil qui figurent souvent en tête du ticket :</p>\n<table>\n<thead><tr><th>Réglage</th><th>Valeurs possibles</th><th>Conséquence</th></tr></thead>\n<tbody>\n<tr><td>Signe du cylindre</td><td>− ou + ou mixte</td><td>Transposer si la commande est dans l'autre convention</td></tr>\n<tr><td>Pas d'affichage</td><td>0,01 ; 0,12 ; 0,25 D</td><td>Une mesure à 0,01 D se compare directement ; à 0,25 D elle est déjà arrondie</td></tr>\n<tr><td>Notation des prismes</td><td>BI/BO/BU/BD ou coordonnées horizontale et verticale</td><td>Ramener à une orientation par rapport au nez</td></tr>\n<tr><td>Mode de mesure</td><td>Unifocal, progressif, lentille de contact</td><td>Un progressif mesuré en mode unifocal donne des valeurs inexploitables</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> comparer un ticket en cylindre positif à une commande en cylindre négatif sans transposer fait conclure à tort à une erreur grossière (sphère et axe « faux »). À l'inverse, un ticket identique à la commande mais pour l'œil opposé révèle une inversion des verres : toujours vérifier les repères R et L.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un ticket de contrôle.<br>1. <strong>Lire l'en-tête</strong> : signe du cylindre, pas d'affichage, mode de mesure.<br>2. <strong>Mettre en tableau</strong> pour chaque œil : valeur commandée, valeur mesurée, écart, tolérance, verdict.<br>3. <strong>Comparer les puissances</strong> : sphère, cylindre (même convention), addition.<br>4. <strong>Comparer l'axe</strong> en tenant compte de la valeur du cylindre (la tolérance dépend souvent de sa puissance) et du passage par 180° (un axe de 2° et un axe de 178° ne sont distants que de 4°).<br>5. <strong>Contrôler le centrage</strong> : écart entre la position mesurée du centre optique et le demi-écart attendu ; calculer le prisme induit avec la puissance dans le méridien horizontal ou vertical.<br>6. <strong>Conclure</strong> œil par œil, puis sur l'équipement : conforme, non conforme (avec la cause) ; proposer l'action.</div>\n<p>Les pièges les plus fréquents sont : oublier de vérifier la convention du cylindre ; comparer la position du centre optique à l'écart pupillaire total au lieu du demi-écart ; calculer le prisme induit avec la sphère seule sur un verre torique ; conclure « non conforme » sans préciser la grandeur hors tolérance ni l'action à mener ; oublier qu'une valeur égale à la limite de tolérance reste conforme.</p>\n<p>Pour les axes, on calcule l'écart par la plus petite différence angulaire : |175° − 5°| = 170°, mais l'écart réel est 180° − 170° = 10°.</p>"
      },
      {
       "titre": "Contrôler un équipement progressif à partir du ticket",
       "contenu": "<p>Le contrôle d'un verre progressif suit la même logique, avec des points de mesure particuliers que le frontofocomètre automatique guide en mode « progressif » :</p>\n<ul>\n<li>la <strong>puissance de loin</strong> se lit au point de référence de vision de loin, au-dessus de la croix de centrage ;</li>\n<li>l'<strong>addition</strong> est calculée par l'appareil à partir de la mesure au point de référence de vision de près, selon la méthode indiquée par le fabricant ;</li>\n<li>le <strong>prisme</strong> se lit au point de référence prismatique, entre les deux gravures ; un prisme vertical identique sur les deux verres (prisme d'allègement, base inférieure) est normal et ne se compte pas comme une erreur, mais une différence de prisme vertical entre les deux verres doit rester dans la tolérance ;</li>\n<li>le <strong>centrage</strong> se contrôle par la position des croix de centrage, reconstituées avec le gabarit, par rapport aux demi-écarts et aux hauteurs commandés.</li>\n</ul>\n<p>Le ticket d'un progressif comporte donc plus de lignes : puissances de loin, additions, prismes au point de référence prismatique. La méthode d'exploitation reste la même : tableau commandé – mesuré – écart – tolérance – verdict, œil par œil. On s'assure en plus que les gravures droite et gauche correspondent au bon œil, car certains designs sont asymétriques et ne peuvent pas être échangés.</p>\n<p>Enfin, un contrôle conforme n'est valable que si l'appareil est fiable : le frontofocomètre est vérifié périodiquement à l'aide de verres étalons de puissance connue, et la date de la dernière vérification figure dans le registre de l'atelier.</p>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "<p><strong>Commande</strong> (données fictives) : unifocaux organiques 1,60, monture cerclée métal.</p>\n<table>\n<thead><tr><th></th><th>OD</th><th>OG</th></tr></thead>\n<tbody>\n<tr><td>Prescription</td><td>−3,00 (−1,25) 15°</td><td>−2,75 (−1,00) 165°</td></tr>\n<tr><td>½ EP</td><td>31,0 mm</td><td>32,0 mm</td></tr>\n<tr><td>Hauteur</td><td>20 mm</td><td>20 mm</td></tr>\n</tbody>\n</table>\n<p><strong>Ticket du frontofocomètre</strong> (cylindre −, pas 0,01, mode monture) :</p>\n<table>\n<thead><tr><th></th><th>SPH</th><th>CYL</th><th>AX</th><th>PD</th><th>Prisme H</th><th>Hauteur CO</th></tr></thead>\n<tbody>\n<tr><td>R</td><td>−3,04</td><td>−1,21</td><td>12</td><td>31,0</td><td>0,00</td><td>20,0</td></tr>\n<tr><td>L</td><td>−2,73</td><td>−1,02</td><td>166</td><td>30,0</td><td>voir calcul</td><td>20,5</td></tr>\n</tbody>\n</table>\n<p><strong>Grille de tolérances interne fournie</strong> (simplifiée, à appliquer telle quelle dans l'exercice) : sphère et cylindre ± 0,12 D ; axe ± 3° pour un cylindre de 0,75 à 1,50 D ; écart de centrage horizontal ≤ 1,0 mm par œil et prisme horizontal induit ≤ 0,50 Δ par œil ; écart de hauteur entre les deux yeux ≤ 1,0 mm.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<table>\n<thead><tr><th>Contrôle</th><th>OD</th><th>OG</th></tr></thead>\n<tbody>\n<tr><td>Sphère</td><td>Écart 0,04 D : conforme</td><td>Écart 0,02 D : conforme</td></tr>\n<tr><td>Cylindre</td><td>Écart 0,04 D : conforme</td><td>Écart 0,02 D : conforme</td></tr>\n<tr><td>Axe</td><td>15° − 12° = 3° : à la limite, conforme</td><td>166° − 165° = 1° : conforme</td></tr>\n<tr><td>Centrage horizontal</td><td>31,0 / 31,0 : écart nul</td><td>30,0 au lieu de 32,0 : écart 2,0 mm, <strong>hors tolérance</strong></td></tr>\n<tr><td>Hauteurs</td><td>20,0</td><td>20,5 : différence 0,5 mm, conforme</td></tr>\n</tbody>\n</table>\n<p><strong>Prisme induit OG.</strong> Le centre optique est à 30,0 mm de l'axe de la monture au lieu de 32,0 : il est décalé de 2 mm vers le nez par rapport à la pupille. Puissance dans le méridien horizontal : l'axe 165° fait un angle de 15° avec l'horizontale, d'où D<sub>180</sub> = −2,75 + (−1,00) × sin<sup>2</sup> 15° ≈ −2,75 − 0,07 = −2,82 D. Prisme : 0,2 × 2,82 ≈ 0,56 Δ. Verre divergent, pupille du côté temporal du centre optique : base à l'opposé du centre optique, donc <strong>base externe</strong>. La valeur dépasse la tolérance de 0,50 Δ.</p>\n<p><strong>Conclusion.</strong> Le verre droit est conforme (axe à la limite de tolérance, à signaler mais acceptable). Le verre gauche est <strong>non conforme</strong> par son centrage horizontal (2 mm et 0,56 Δ base externe). Un verre détouré ne peut pas être recentré : il faut <strong>refaire le verre gauche</strong>, après avoir recherché la cause (erreur de saisie du demi-écart, verre tourné ou décalé au blocage) pour éviter qu'elle ne se reproduise.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la conclusion d'un contrôle est toujours œil par œil, chiffrée et rapportée à la tolérance fournie ; elle débouche sur une action (accepter, refaire, remonter) et sur la recherche de la cause.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le ticket du contrôle final est conservé dans le dossier. En cas de retour du client, il prouve l'état de l'équipement à la livraison et oriente immédiatement la recherche vers l'ajustage ou vers une évolution de la vue.</div>"
      }
     ],
     "points_cles": [
      "Le contrôle confronte commande, ticket de mesure et grille de tolérances.",
      "Lire d'abord l'en-tête du ticket : convention de cylindre, pas d'affichage, mode de mesure.",
      "R = droit, L = gauche ; BI interne, BO externe, BU haut, BD bas.",
      "L'écart d'axe se calcule par la plus petite différence angulaire, en tenant compte du passage par 180°.",
      "La tolérance d'axe dépend de la puissance du cylindre.",
      "Le prisme induit se calcule avec la puissance dans le méridien du décentrement.",
      "Un verre détouré mal centré ne se recentre pas : il se refait.",
      "La conclusion est chiffrée, œil par œil, et débouche sur une action et la recherche de cause."
     ],
     "lexique": [
      {
       "terme": "Ticket de frontofocomètre",
       "def": "Impression des valeurs mesurées par un frontofocomètre automatique."
      },
      {
       "terme": "R / L",
       "def": "Abréviations anglaises de droit (right) et gauche (left)."
      },
      {
       "terme": "BI / BO",
       "def": "Base in (interne) et base out (externe) d'un prisme."
      },
      {
       "terme": "BU / BD",
       "def": "Base up (supérieure) et base down (inférieure) d'un prisme."
      },
      {
       "terme": "Pas d'affichage",
       "def": "Plus petit incrément affiché par l'appareil de mesure."
      },
      {
       "terme": "Grille de tolérances",
       "def": "Tableau des écarts admissibles entre valeurs commandées et mesurées."
      },
      {
       "terme": "Mode monture",
       "def": "Mode de mesure où l'appareil repère la position des centres par rapport à la monture."
      },
      {
       "terme": "Action corrective",
       "def": "Action qui supprime la cause d'une non-conformité."
      }
     ]
    },
    {
     "id": "bopt-doc-notice-plan-technique",
     "titre": "Lire une notice technique et un plan de monture ou d'appareil",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les parties d'une notice d'utilisation et de maintenance d'un appareil",
      "Exploiter un tableau de caractéristiques, un plan de maintenance et un tableau de dépannage",
      "Lire un dessin d'ensemble, son cartouche et sa nomenclature",
      "Identifier les liaisons mécaniques d'un mécanisme simple de lunetterie",
      "Rédiger un diagnostic argumenté à partir d'une notice"
     ],
     "sections": [
      {
       "titre": "Les documents techniques et leur structure",
       "contenu": "<p>Les <strong>outils de la communication technique</strong> accompagnent chaque appareil et chaque produit : notice commerciale (présentation, arguments), notice d'emploi (installation, utilisation), notice de maintenance (entretien, réglages, dépannage), dessins et schémas. À l'épreuve, on en fournit des extraits pour faire diagnostiquer un dysfonctionnement, choisir un réglage ou expliquer un mécanisme.</p>\n<table>\n<thead><tr><th>Partie de la notice</th><th>Contenu</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Présentation</td><td>Fonctions, vue légendée de l'appareil</td><td>Nommer les éléments</td></tr>\n<tr><td>Caractéristiques techniques</td><td>Plages de mesure, précision, dimensions, alimentation, conditions d'utilisation</td><td>Vérifier qu'une tâche est réalisable</td></tr>\n<tr><td>Sécurité</td><td>Consignes, pictogrammes, risques résiduels</td><td>Prévention</td></tr>\n<tr><td>Installation et mise en service</td><td>Raccordements, calibrage initial</td><td>Préparer l'appareil</td></tr>\n<tr><td>Utilisation</td><td>Modes opératoires pas à pas</td><td>Réaliser la tâche</td></tr>\n<tr><td>Maintenance</td><td>Plan d'entretien (fréquence, opération, intervenant), étalonnage</td><td>Garder l'appareil fiable</td></tr>\n<tr><td>Dépannage</td><td>Tableau symptôme – cause probable – remède, codes d'erreur</td><td>Diagnostiquer</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Lire un dessin d'ensemble et une nomenclature",
       "contenu": "<p>Un <strong>dessin d'ensemble</strong> représente un mécanisme monté, en une ou plusieurs <strong>vues</strong> (projections orthogonales : face, dessus, gauche) ou en <strong>perspective éclatée</strong> (pièces écartées le long de leur axe de montage). Chaque pièce porte un <strong>repère</strong> (numéro dans une bulle reliée par un trait). Le <strong>cartouche</strong>, en bas à droite, indique le titre, l'échelle, la date, l'auteur. La <strong>nomenclature</strong>, au-dessus du cartouche, liste les pièces : repère, nombre, désignation, matière, observations.</p>\n<p>Pour comprendre un mécanisme, on identifie les <strong>liaisons mécaniques</strong> entre pièces, c'est-à-dire les mouvements possibles :</p>\n<table>\n<thead><tr><th>Liaison</th><th>Mouvement possible</th><th>Exemple en lunetterie</th></tr></thead>\n<tbody>\n<tr><td>Encastrement (liaison fixe)</td><td>Aucun</td><td>Tenon brasé sur le cercle, charnière insérée dans l'acétate</td></tr>\n<tr><td>Pivot</td><td>Une rotation autour d'un axe</td><td>Branche autour de la vis de charnière</td></tr>\n<tr><td>Glissière</td><td>Une translation</td><td>Piston d'une charnière flexible dans son boîtier</td></tr>\n<tr><td>Hélicoïdale</td><td>Rotation et translation liées</td><td>Vis dans un taraudage</td></tr>\n<tr><td>Rotule</td><td>Trois rotations</td><td>Plaquette articulée sur son bras (certains modèles)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un dessin, une pièce n'est pas forcément représentée à l'échelle 1 : une charnière de lunettes est souvent dessinée à l'échelle 5:1 (cinq fois plus grande). Lire l'échelle du cartouche avant de mesurer sur le dessin, et diviser la mesure par le facteur d'agrandissement.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> diagnostiquer un dysfonctionnement à l'aide d'une notice.<br>1. <strong>Décrire le symptôme</strong> précisément : quoi, depuis quand, sur quels travaux, de façon systématique ou aléatoire.<br>2. <strong>Repérer l'appareil</strong> et la fonction concernée dans la vue légendée.<br>3. <strong>Chercher le symptôme</strong> dans le tableau de dépannage et lister toutes les causes probables proposées.<br>4. <strong>Croiser</strong> chaque cause avec les informations du dossier (plan de maintenance réalisé ou non, consommables, réglages récents) pour éliminer les causes impossibles.<br>5. <strong>Retenir</strong> la cause la plus probable et appliquer le remède indiqué, en respectant les consignes de sécurité (mise hors tension, intervenant habilité).<br>6. <strong>Vérifier</strong> le résultat sur une pièce d'essai avant de reprendre la production, et tracer l'intervention.</div>\n<p>Les pièges habituels sont de s'arrêter à la première cause du tableau sans vérifier les autres, de négliger les faits datés du dossier (remplacement d'une pièce, dernier entretien), ou de proposer un remède réservé à un technicien agréé.</p>\n<p>Si le remède relève du service après-vente du fabricant (« contacter le technicien agréé »), l'opticien ne démonte pas l'appareil : il décrit le défaut et les essais réalisés.</p>"
      },
      {
       "titre": "Analyser un mécanisme : la charnière flexible",
       "contenu": "<p>Une <strong>charnière flexible</strong> permet à la branche de s'ouvrir au-delà de sa position normale puis d'y revenir, ce qui améliore le confort sur les têtes larges et la résistance aux chocs. Son dessin d'ensemble (vue éclatée) comporte typiquement les pièces suivantes :</p>\n<table>\n<thead><tr><th>Repère</th><th>Nombre</th><th>Désignation</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>1</td><td>Tenon avec œil de charnière</td><td>Partie fixe, solidaire de la face</td></tr>\n<tr><td>2</td><td>1</td><td>Boîtier logé dans la branche</td><td>Guide le coulisseau</td></tr>\n<tr><td>3</td><td>1</td><td>Coulisseau (piston) avec œil</td><td>Se translate dans le boîtier</td></tr>\n<tr><td>4</td><td>1</td><td>Ressort hélicoïdal</td><td>Rappelle le coulisseau en position</td></tr>\n<tr><td>5</td><td>1</td><td>Vis de charnière</td><td>Axe d'articulation</td></tr>\n</tbody>\n</table>\n<p>Analyse des liaisons : le tenon 1 est en <strong>encastrement</strong> avec la face ; la branche est en <strong>pivot</strong> autour de la vis 5 par l'intermédiaire de l'œil du coulisseau 3 ; le coulisseau 3 est en <strong>glissière</strong> dans le boîtier 2, encastré dans la branche ; le ressort 4 s'oppose à la sortie du coulisseau. Quand on ouvre la branche au-delà de la butée, la branche bascule sur l'arête de butée, le coulisseau sort et comprime le ressort ; relâchée, la branche revient. Un ressort fatigué ou un coulisseau grippé expliquent une branche « molle » ou bloquée : le remède indiqué par le fabricant est souvent le remplacement de la branche complète.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p><strong>Situation</strong> (données fictives) : depuis une semaine, les verres organiques détourés par la meuleuse de l'atelier sont systématiquement trop grands d'environ 0,3 mm ; les verres minéraux, rares, n'ont pas été testés. L'atelier a remplacé la semaine dernière la meule de finition. Le cahier d'atelier indique que le circuit d'eau a été nettoyé il y a un mois.</p>\n<p><strong>Extrait de la notice de la meuleuse</strong> — Plan de maintenance :</p>\n<table>\n<thead><tr><th>Opération</th><th>Fréquence</th><th>Intervenant</th></tr></thead>\n<tbody>\n<tr><td>Nettoyage du bac et du filtre à eau</td><td>Chaque semaine</td><td>Utilisateur</td></tr>\n<tr><td>Dressage des meules</td><td>Selon besoin</td><td>Utilisateur</td></tr>\n<tr><td>Calibrage de la taille et de l'axe</td><td>Après tout remplacement de meule ou d'outil, et chaque trimestre</td><td>Utilisateur</td></tr>\n<tr><td>Révision générale</td><td>Chaque année</td><td>Technicien agréé</td></tr>\n</tbody>\n</table>\n<p><strong>Tableau de dépannage</strong> (extrait) :</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Causes probables</th><th>Remède</th></tr></thead>\n<tbody>\n<tr><td>Verres systématiquement trop grands ou trop petits</td><td>1. Calibrage de taille non effectué après changement de meule. 2. Paramètre de matériau incorrect. 3. Lecture de forme erronée.</td><td>1. Effectuer le calibrage de taille. 2. Vérifier le matériau sélectionné. 3. Relire la forme.</td></tr>\n<tr><td>Bords écaillés, finition rugueuse</td><td>Meule encrassée ou usée, arrosage insuffisant</td><td>Dresser la meule, nettoyer le circuit d'eau</td></tr>\n<tr><td>Axe décalé</td><td>Verre qui glisse sur la ventouse, calibrage d'axe</td><td>Utiliser une pastille adaptée, calibrer l'axe</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Symptôme.</strong> Défaut de taille <strong>systématique</strong> (tous les verres organiques), de valeur constante (+0,3 mm), apparu il y a une semaine.</p>\n<p><strong>2. Causes possibles d'après le tableau.</strong> Calibrage de taille non fait, paramètre de matériau incorrect, lecture de forme erronée.</p>\n<p><strong>3. Élimination.</strong> Une lecture de forme erronée toucherait les montures concernées, pas tous les verres de façon identique : cause peu probable. Un mauvais paramètre de matériau produirait un défaut sur les seuls dossiers mal saisis : peu probable pour un défaut constant sur tous les verres organiques. En revanche, la meule de finition a été changée il y a une semaine, et le plan de maintenance impose un <strong>calibrage de taille après tout remplacement de meule</strong> ; le cahier d'atelier ne mentionne pas ce calibrage. La coïncidence de date et le caractère systématique désignent cette cause.</p>\n<p><strong>4. Remède.</strong> Réaliser le calibrage de taille selon la procédure de la notice (et le calibrage d'axe, prévu dans la même ligne du plan), puis détourer un verre d'essai et contrôler sa taille sur une monture de référence avant de reprendre les travaux.</p>\n<p><strong>5. Constat complémentaire.</strong> Le nettoyage du bac et du filtre est prévu chaque semaine, or il date d'un mois : sans lien avec le défaut de taille, ce retard expose à une finition dégradée. Il faut le réaliser et rétablir la fréquence.</p>\n<p><strong>6. Traçabilité.</strong> Noter dans le cahier d'atelier le remplacement de meule, le calibrage réalisé, le résultat du verre d'essai, et vérifier les équipements livrés pendant la semaine concernée (verres montés « forcés » dans des montures métalliques, risque de contraintes).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un bon diagnostic part du symptôme, liste les causes de la notice, les élimine une à une avec les faits du dossier, puis applique le remède et vérifie le résultat. Le plan de maintenance est souvent la clé.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> afficher le plan de maintenance près de la machine, avec une grille de suivi datée et signée, évite la majorité des pannes « mystérieuses » d'atelier.</div>"
      }
     ],
     "points_cles": [
      "Une notice comprend présentation, caractéristiques, sécurité, installation, utilisation, maintenance et dépannage.",
      "Le tableau de dépannage associe symptôme, causes probables et remèdes.",
      "Un dessin d'ensemble se lit avec son cartouche (échelle) et sa nomenclature (repères, désignations, matières).",
      "Les liaisons mécaniques décrivent les mouvements possibles : encastrement, pivot, glissière, hélicoïdale, rotule.",
      "Lire l'échelle avant toute mesure sur un dessin.",
      "Un diagnostic élimine les causes une à une à l'aide des faits du dossier.",
      "Le plan de maintenance impose des calibrages après remplacement d'outils.",
      "Toute intervention est vérifiée sur une pièce d'essai et tracée."
     ],
     "lexique": [
      {
       "terme": "Notice de maintenance",
       "def": "Document décrivant l'entretien, les réglages et le dépannage d'un appareil."
      },
      {
       "terme": "Dessin d'ensemble",
       "def": "Représentation d'un mécanisme monté avec le repérage de ses pièces."
      },
      {
       "terme": "Perspective éclatée",
       "def": "Vue où les pièces sont écartées le long de leur axe de montage."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre du dessin indiquant titre, échelle, date et auteur."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste des pièces d'un ensemble avec repère, nombre, désignation et matière."
      },
      {
       "terme": "Liaison pivot",
       "def": "Liaison qui n'autorise qu'une rotation autour d'un axe."
      },
      {
       "terme": "Calibrage",
       "def": "Réglage d'un appareil par rapport à une référence connue."
      },
      {
       "terme": "Dressage",
       "def": "Opération qui rend à une meule sa forme et son mordant."
      }
     ]
    }
   ]
  }
 ]
};
