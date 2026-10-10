/* Polymates — Bac pro Photographie — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-photographie"] = {
 "id": "bp-photographie",
 "nom": "Photographie",
 "icone": "🎓",
 "couleur": "#82b4d2",
 "intro": "Le bac pro Photographie forme des techniciens de l'image capables de concevoir, réaliser, traiter et livrer des photographies et de courtes séquences animées : photographe de studio ou de reportage, assistant photographe, opérateur de laboratoire, retoucheur, technicien de la chaîne graphique. Ce cours de première et de terminale, fondé sur le référentiel en vigueur, couvre les savoirs technologiques du métier : sciences appliquées à l'image (optique, photométrie, couleur), matériels, techniques de prise de vue, chaîne numérique et restitution, démarche de projet et cadre juridique. Il est organisé en deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre, exemples commentés à l'appui, comment exploiter cahiers des charges, fiches techniques, schémas d'éclairage et métadonnées, devis et cessions de droits, spécifications de livraison et photographies à analyser.",
 "parties": [
  {
   "titre": "Partie 1 — Sciences appliquées à l'image : optique, lumière et couleur",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpho-optique-geometrique",
     "titre": "Optique géométrique : de la lumière à l'image",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire la propagation de la lumière et appliquer les lois de la réflexion et de la réfraction",
      "Construire l'image d'un objet donnée par une lentille mince convergente",
      "Utiliser la relation de conjugaison et le grandissement pour calculer une distance ou une taille d'image",
      "Relier la focale, le format du capteur et l'angle de champ",
      "Expliquer le rôle du diaphragme et la signification du nombre d'ouverture"
     ],
     "sections": [
      {
       "titre": "La lumière, matière première du photographe",
       "contenu": "<p>Photographier, c'est enregistrer de la lumière. En seconde, la lumière a été présentée comme une onde électromagnétique ; en photographie, on retient surtout qu'elle se propage <strong>en ligne droite</strong> dans un milieu homogène et transparent (air, verre), à une vitesse d'environ 300 000 km/s dans le vide. Ce trajet rectiligne est représenté par un <strong>rayon lumineux</strong> ; un ensemble de rayons forme un <strong>faisceau</strong>.</p>\n<p>La lumière visible ne représente qu'une petite partie du spectre électromagnétique : les longueurs d'onde comprises entre environ <strong>380 nm</strong> (violet) et <strong>780 nm</strong> (rouge). En dessous se trouvent les ultraviolets, au-dessus les infrarouges. Les capteurs d'appareils photo sont naturellement sensibles à une partie des infrarouges ; un filtre placé devant le capteur les bloque pour obtenir des couleurs fidèles.</p>\n<p>L'optique géométrique, qui raisonne en rayons, suffit à comprendre le fonctionnement d'un objectif : comment il forme une image, pourquoi elle est nette ou floue, pourquoi elle est plus ou moins grande. Le caractère ondulatoire de la lumière ne réapparaît que pour expliquer la <strong>diffraction</strong> aux très petites ouvertures et les effets du filtre polarisant.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la sténopé (camera obscura) prouve la propagation rectiligne : un simple trou dans une boîte noire projette sur la face opposée une image renversée du sujet. L'objectif ne fait qu'améliorer ce principe en rendant l'image à la fois nette et lumineuse.</div>"
      },
      {
       "titre": "Réflexion et réfraction",
       "contenu": "<p>Lorsqu'un rayon rencontre la surface de séparation entre deux milieux, une partie de la lumière est renvoyée : c'est la <strong>réflexion</strong>. Sur une surface lisse (miroir, carrosserie vernie, vitre), la réflexion est <strong>spéculaire</strong> : l'angle de réflexion est égal à l'angle d'incidence, tous deux mesurés par rapport à la <strong>normale</strong> (droite perpendiculaire à la surface). Sur une surface rugueuse (papier, tissu, mur mat), la lumière est renvoyée dans toutes les directions : c'est la réflexion <strong>diffuse</strong>.</p>\n<p>Cette distinction est fondamentale en studio : un objet brillant ne montre pas sa couleur mais le reflet des sources et du décor ; un objet mat montre sa matière. Éclairer une bouteille, une montre ou une voiture consiste d'abord à décider ce qui va s'y refléter.</p>\n<p>L'autre partie de la lumière peut traverser le second milieu en changeant de direction : c'est la <strong>réfraction</strong>. Elle obéit à la loi de Snell-Descartes :</p>\n<p><strong>n<sub>1</sub> × sin i<sub>1</sub> = n<sub>2</sub> × sin i<sub>2</sub></strong></p>\n<p>où n est l'<strong>indice de réfraction</strong> du milieu (air : 1,00 ; eau : 1,33 ; verre optique courant : de 1,5 à 1,9). Plus l'indice est élevé, plus le rayon est dévié. C'est la réfraction qui permet aux lentilles de dévier la lumière et de former une image.</p>\n<p>L'indice d'un verre varie légèrement avec la longueur d'onde : le bleu est un peu plus dévié que le rouge. C'est la <strong>dispersion</strong>, responsable de l'arc-en-ciel avec un prisme, mais aussi des franges colorées (aberration chromatique) dans un objectif.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour photographier un produit derrière une vitrine, le photographe place l'axe de l'objectif bien perpendiculaire à la vitre, colle le pare-soleil contre le verre ou tend un tissu noir derrière lui : il supprime ainsi les reflets spéculaires de la rue et de sa propre silhouette.</div>"
      },
      {
       "titre": "Les lentilles minces et la construction d'une image",
       "contenu": "<p>Une <strong>lentille</strong> est un bloc de verre limité par deux faces, dont l'une au moins est courbe. Une lentille à bords minces est <strong>convergente</strong> : elle fait converger un faisceau de rayons parallèles en un point. Une lentille à bords épais est <strong>divergente</strong>. Un objectif photographique est un assemblage de plusieurs lentilles (de 5 à plus de 20), mais l'ensemble se comporte globalement comme une lentille convergente.</p>\n<p>Une lentille est caractérisée par :</p>\n<ul>\n<li>son <strong>centre optique</strong> O, point traversé par les rayons sans déviation ;</li>\n<li>son <strong>axe optique</strong>, droite passant par O, perpendiculaire à la lentille ;</li>\n<li>son <strong>foyer image</strong> F', point où convergent les rayons arrivant parallèlement à l'axe ;</li>\n<li>sa <strong>distance focale</strong> f' = OF', exprimée en millimètres en photographie (50 mm, 85 mm…). Sa <strong>vergence</strong> C = 1/f' s'exprime en dioptries (δ) avec f' en mètres.</li>\n</ul>\n<p>Pour construire l'image A'B' d'un objet AB perpendiculaire à l'axe, on trace à partir du point B deux des trois rayons particuliers :</p>\n<ol>\n<li>le rayon passant par le centre optique O n'est pas dévié ;</li>\n<li>le rayon parallèle à l'axe ressort en passant par le foyer image F' ;</li>\n<li>le rayon passant par le foyer objet F ressort parallèle à l'axe.</li>\n</ol>\n<p>Leur point d'intersection est B', image de B. Pour un sujet situé au-delà du foyer objet, l'image est <strong>réelle</strong> (on peut la recueillir sur un écran ou un capteur) et <strong>renversée</strong>. C'est toujours le cas en photographie ; le viseur ou l'écran redresse ensuite l'image pour l'utilisateur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un schéma, les distances sont <em>algébriques</em> : on les compte positivement dans le sens de la lumière (de gauche à droite) à partir du centre optique. La distance de l'objet OA est donc négative. Oublier ce signe est l'erreur la plus fréquente dans la relation de conjugaison.</div>"
      },
      {
       "titre": "Relation de conjugaison et grandissement",
       "contenu": "<p>La position de l'image se calcule avec la <strong>relation de conjugaison</strong> (formule de Descartes) :</p>\n<p><strong>1/OA' − 1/OA = 1/f'</strong></p>\n<p>Le <strong>grandissement</strong> γ (gamma) compare la taille de l'image à celle de l'objet :</p>\n<p><strong>γ = A'B'/AB = OA'/OA</strong></p>\n<p>Un grandissement négatif signifie que l'image est renversée. En photographie on parle souvent de <strong>rapport de reproduction</strong>, en valeur absolue : 1:10 signifie que l'image sur le capteur est dix fois plus petite que le sujet ; 1:1 signifie qu'elle est grandeur nature (c'est la définition de la macrophotographie au sens strict).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le tirage pour un sujet proche. Données : objectif de focale f' = 100 mm, sujet à 50 cm de l'objectif. 1) On écrit les grandeurs en mm avec leur signe : OA = −500 mm ; f' = 100 mm. 2) Relation de conjugaison : 1/OA' = 1/f' + 1/OA = 1/100 − 1/500 = 5/500 − 1/500 = 4/500. 3) OA' = 500/4 = 125 mm. Le capteur doit être à 125 mm du centre optique, soit 25 mm de plus que pour un sujet à l'infini : c'est le <strong>tirage</strong> supplémentaire que réalise la bague de mise au point. 4) Grandissement : γ = 125 / (−500) = −0,25. L'image est renversée et quatre fois plus petite : rapport de reproduction 1:4. Un objet de 8 cm de haut mesure 2 cm sur le capteur.</div>\n<p>Quand le sujet est très loin (paysage, « infini »), 1/OA tend vers zéro et OA' = f' : le capteur est placé dans le plan focal. Plus le sujet se rapproche, plus l'image s'éloigne de l'objectif. C'est pourquoi un objectif ne peut pas faire le point en dessous d'une <strong>distance minimale de mise au point</strong> : sa bague ne permet pas d'allonger davantage le tirage. Les bagues allonge et les soufflets prolongent ce tirage pour la macrophotographie.</p>"
      },
      {
       "titre": "Focale, format du capteur et angle de champ",
       "contenu": "<p>L'<strong>angle de champ</strong> est l'angle sous lequel l'objectif « voit » la scène. Il dépend de deux éléments : la focale et la taille du capteur (le <strong>format</strong>). Pour un sujet à l'infini, on a approximativement :</p>\n<p><strong>tan(α/2) = d / (2 × f')</strong></p>\n<p>où d est la diagonale du capteur et α l'angle de champ diagonal. À format égal, une focale courte donne un grand angle de champ ; une focale longue, un angle étroit.</p>\n<p>On appelle <strong>focale normale</strong> une focale à peu près égale à la diagonale du format : environ 43 mm pour le format 24 × 36 mm (plein format), ce qui explique que le « 50 mm » soit l'objectif standard. Elle donne un angle d'environ 45°, proche d'une vision humaine attentive.</p>\n<table>\n<thead><tr><th>Format</th><th>Dimensions du capteur</th><th>Diagonale</th><th>Coefficient de conversion</th><th>Focale normale</th></tr></thead>\n<tbody>\n<tr><td>Moyen format numérique courant</td><td>environ 44 × 33 mm</td><td>environ 55 mm</td><td>environ 0,8</td><td>environ 55 mm</td></tr>\n<tr><td>Plein format (24 × 36)</td><td>36 × 24 mm</td><td>43,3 mm</td><td>1</td><td>45 à 50 mm</td></tr>\n<tr><td>APS-C</td><td>environ 23,5 × 15,6 mm</td><td>environ 28 mm</td><td>environ 1,5 (1,6 selon les marques)</td><td>environ 30 mm</td></tr>\n<tr><td>Micro 4/3</td><td>17,3 × 13 mm</td><td>21,6 mm</td><td>2</td><td>environ 25 mm</td></tr>\n</tbody>\n</table>\n<p>Le <strong>coefficient de conversion</strong> (ou « crop factor ») permet de comparer les cadrages : un 50 mm monté sur un APS-C donne le même champ qu'un 75 mm environ sur un plein format. Il ne modifie pas la focale réelle de l'objectif, qui reste une propriété physique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la perspective (rapport de taille entre premier plan et arrière-plan) ne dépend pas de la focale mais de la <strong>position du point de vue</strong>. Un grand-angle « déforme » un visage uniquement parce qu'il oblige à s'en approcher. Pour un portrait, on recule et on choisit une focale plus longue (85 à 135 mm en plein format).</div>"
      },
      {
       "titre": "Le diaphragme et le nombre d'ouverture",
       "contenu": "<p>Le <strong>diaphragme</strong> est un ensemble de lamelles qui forme une ouverture de diamètre réglable à l'intérieur de l'objectif. Il dose la quantité de lumière qui atteint le capteur et agit sur la netteté en profondeur.</p>\n<p>Son réglage est exprimé par le <strong>nombre d'ouverture</strong> N (noté f/N sur les objectifs) :</p>\n<p><strong>N = f' / D</strong></p>\n<p>où D est le diamètre de la pupille d'entrée. Un objectif de 50 mm dont la pupille mesure 25 mm est ouvert à f/2. Plus N est petit, plus l'ouverture est grande et plus il entre de lumière.</p>\n<p>La série normalisée des ouvertures est : 1 – 1,4 – 2 – 2,8 – 4 – 5,6 – 8 – 11 – 16 – 22 – 32. On passe d'une valeur à la suivante en multipliant par √2 ≈ 1,4, ce qui divise la surface de l'ouverture par 2. Chaque cran correspond donc à un <strong>diaphragme</strong> (ou « stop », ou 1 IL) : deux fois moins de lumière quand on ferme d'un cran.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> compter les diaphragmes entre deux ouvertures. Passer de f/2,8 à f/8 : 2,8 → 4 → 5,6 → 8, soit trois crans. La quantité de lumière est divisée par 2 × 2 × 2 = 8. Vérification par le calcul : (8 / 2,8)<sup>2</sup> ≈ 8,2, arrondi à 8 car les valeurs gravées sont arrondies.</div>\n<p>L'<strong>ouverture maximale</strong> d'un objectif (la plus petite valeur de N) caractérise sa <strong>luminosité</strong> : un 85 mm f/1,4 est plus lumineux qu'un 85 mm f/1,8. Un objectif lumineux permet de photographier en faible lumière et de créer un flou d'arrière-plan prononcé, mais il est plus lourd, plus cher et plus délicat à utiliser à pleine ouverture.</p>\n<p>Fermer le diaphragme n'améliore pas indéfiniment l'image : au-delà de f/11 à f/16 en plein format, la <strong>diffraction</strong> (étalement de la lumière sur les bords de l'ouverture) diminue le piqué. Chaque objectif possède une <strong>ouverture optimale</strong>, souvent située deux à trois crans au-dessus de l'ouverture maximale.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> petit nombre (f/1,4, f/2) = grande ouverture = beaucoup de lumière = faible profondeur de champ. Grand nombre (f/16, f/22) = petite ouverture = peu de lumière = grande profondeur de champ, mais risque de diffraction.</div>"
      }
     ],
     "points_cles": [
      "La lumière se propage en ligne droite dans un milieu homogène ; le visible s'étend d'environ 380 à 780 nm.",
      "Réflexion spéculaire sur une surface lisse (reflets), réflexion diffuse sur une surface mate (matière).",
      "La réfraction obéit à n1 sin i1 = n2 sin i2 ; la dispersion explique les aberrations chromatiques.",
      "Un objectif se comporte comme une lentille convergente qui donne une image réelle et renversée.",
      "Relation de conjugaison : 1/OA' − 1/OA = 1/f' ; grandissement : γ = OA'/OA, distances algébriques.",
      "L'angle de champ dépend de la focale et du format ; la focale normale est proche de la diagonale du capteur.",
      "La perspective dépend du point de vue, pas de la focale.",
      "N = f'/D ; la série 1,4 – 2 – 2,8 – 4 – 5,6 – 8 – 11 – 16 progresse d'un diaphragme à chaque cran.",
      "Au-delà de f/11 à f/16 en plein format, la diffraction réduit le piqué."
     ],
     "lexique": [
      {
       "terme": "Normale",
       "def": "Droite perpendiculaire à une surface au point d'incidence, à partir de laquelle on mesure les angles."
      },
      {
       "terme": "Indice de réfraction",
       "def": "Nombre sans unité caractérisant un milieu transparent ; plus il est grand, plus la lumière y est déviée."
      },
      {
       "terme": "Foyer image",
       "def": "Point de l'axe optique où convergent les rayons arrivant parallèlement à l'axe."
      },
      {
       "terme": "Distance focale",
       "def": "Distance entre le centre optique et le foyer image, exprimée en millimètres en photographie."
      },
      {
       "terme": "Grandissement",
       "def": "Rapport entre la taille de l'image et celle de l'objet ; négatif si l'image est renversée."
      },
      {
       "terme": "Tirage",
       "def": "Distance entre l'objectif et le plan du capteur ; elle augmente quand le sujet se rapproche."
      },
      {
       "terme": "Angle de champ",
       "def": "Angle de la portion de scène enregistrée, fonction de la focale et du format du capteur."
      },
      {
       "terme": "Coefficient de conversion",
       "def": "Rapport entre la diagonale du plein format et celle d'un capteur plus petit."
      },
      {
       "terme": "Nombre d'ouverture",
       "def": "Rapport N = f'/D entre la focale et le diamètre de la pupille d'entrée, noté f/N."
      },
      {
       "terme": "Diffraction",
       "def": "Étalement de la lumière au passage d'une petite ouverture, qui réduit le piqué aux grands nombres d'ouverture."
      }
     ]
    },
    {
     "id": "bpho-nettete-profondeur-champ",
     "titre": "Netteté, profondeur de champ et aberrations",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Définir le cercle de confusion et expliquer ce qu'est une image « nette »",
      "Identifier les variables qui agissent sur la profondeur de champ",
      "Calculer une distance hyperfocale et les limites de netteté d'une prise de vue",
      "Reconnaître les principales aberrations optiques et leurs corrections",
      "Choisir une stratégie de netteté adaptée au sujet et à l'intention"
     ],
     "sections": [
      {
       "titre": "Une seule distance est rigoureusement nette",
       "contenu": "<p>La relation de conjugaison montre qu'à une position du capteur correspond une seule distance de sujet parfaitement nette : le <strong>plan de mise au point</strong>. Un point situé devant ou derrière ce plan forme son image avant ou après le capteur ; sur le capteur, il n'est pas un point mais une petite tache circulaire.</p>\n<p>Tant que cette tache reste plus petite qu'une certaine taille, l'œil ne la distingue pas d'un point : la zone paraît nette. Cette taille limite est le <strong>cercle de confusion</strong> admissible, noté c. Il dépend du format du capteur et des conditions d'observation de l'image (taille du tirage, distance de lecture).</p>\n<table>\n<thead><tr><th>Format</th><th>Cercle de confusion usuel</th></tr></thead>\n<tbody>\n<tr><td>Plein format 24 × 36</td><td>0,03 mm</td></tr>\n<tr><td>APS-C</td><td>environ 0,02 mm</td></tr>\n<tr><td>Micro 4/3</td><td>environ 0,015 mm</td></tr>\n<tr><td>Chambre 4 × 5 pouces</td><td>environ 0,1 mm</td></tr>\n</tbody>\n</table>\n<p>Ces valeurs correspondent à un tirage d'environ 20 × 30 cm regardé à 25 à 30 cm. Pour un très grand tirage ou un recadrage important, il faut retenir un cercle plus petit, donc être plus exigeant.</p>\n<p>La <strong>profondeur de champ</strong> (PdC) est la zone, devant et derrière le plan de mise au point, dans laquelle les points donnent une tache inférieure au cercle de confusion. Elle n'est pas symétrique : à distance moyenne, elle s'étend environ deux fois plus loin derrière le plan de mise au point que devant (règle approximative du tiers devant, deux tiers derrière). En très gros plan, elle devient presque symétrique.</p>"
      },
      {
       "titre": "Les trois variables de la profondeur de champ",
       "contenu": "<p>Trois réglages modifient la profondeur de champ :</p>\n<table>\n<thead><tr><th>Variable</th><th>Pour augmenter la PdC</th><th>Pour diminuer la PdC</th></tr></thead>\n<tbody>\n<tr><td>Ouverture (N)</td><td>fermer (f/11, f/16)</td><td>ouvrir (f/1,8, f/2,8)</td></tr>\n<tr><td>Distance de mise au point</td><td>s'éloigner du sujet</td><td>se rapprocher du sujet</td></tr>\n<tr><td>Focale</td><td>focale plus courte</td><td>focale plus longue</td></tr>\n</tbody>\n</table>\n<p>Pour un sujet nettement plus proche que l'hyperfocale, la profondeur de champ totale vaut approximativement :</p>\n<p><strong>PdC ≈ 2 × N × c × d<sup>2</sup> / f'<sup>2</sup></strong></p>\n<p>avec d la distance de mise au point. La distance intervient au carré, tout comme la focale : se rapprocher deux fois divise la PdC par quatre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer la PdC d'un portrait serré. Données : plein format (c = 0,03 mm), 85 mm à f/2, mise au point sur l'œil à 2 m. 1) Tout en mm : d = 2 000 mm, f' = 85 mm. 2) PdC ≈ 2 × 2 × 0,03 × 2 000<sup>2</sup> / 85<sup>2</sup> = 0,12 × 4 000 000 / 7 225 ≈ 66 mm. 3) Conclusion : environ 6,6 cm de netteté ; si le modèle tourne la tête de trois quarts, l'œil le plus éloigné peut sortir de la zone nette. On ferme à f/4 (PdC ≈ 13 cm) ou l'on place la mise au point exactement sur l'œil le plus proche.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> à cadrage identique, un petit capteur donne plus de profondeur de champ qu'un grand, parce qu'il impose une focale plus courte pour obtenir le même champ. C'est l'une des raisons pour lesquelles un smartphone produit rarement un flou d'arrière-plan naturel et le simule par calcul.</div>"
      },
      {
       "titre": "La distance hyperfocale",
       "contenu": "<p>La <strong>distance hyperfocale</strong> H est la distance de mise au point qui donne une netteté s'étendant de H/2 jusqu'à l'infini. C'est le réglage qui maximise la profondeur de champ en paysage et en photographie de rue.</p>\n<p><strong>H ≈ f'<sup>2</sup> / (N × c)</strong></p>\n<p>Une fois H connue, les limites de netteté pour une mise au point à la distance d s'obtiennent par :</p>\n<ul>\n<li>limite proche : <strong>d<sub>p</sub> = H × d / (H + d)</strong></li>\n<li>limite éloignée : <strong>d<sub>e</sub> = H × d / (H − d)</strong> (infini si d ≥ H)</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une hyperfocale et des limites de netteté. Données : plein format, 50 mm, f/8, c = 0,03 mm. 1) H = 50<sup>2</sup> / (8 × 0,03) = 2 500 / 0,24 ≈ 10 400 mm, soit environ 10,4 m. 2) En faisant le point à 10,4 m, la netteté va de 5,2 m à l'infini. 3) Mise au point à 3 m : d<sub>p</sub> = 10,4 × 3 / 13,4 ≈ 2,33 m ; d<sub>e</sub> = 10,4 × 3 / 7,4 ≈ 4,22 m. La zone nette s'étend de 2,33 à 4,22 m : 0,67 m devant, 1,22 m derrière, ce qui confirme la répartition un tiers / deux tiers.</div>\n<p>Sur le terrain, on utilise une application de calcul ou l'échelle de profondeur de champ gravée sur certains objectifs. Mais un photographe doit savoir refaire le calcul pour justifier un réglage à l'épreuve écrite ou vérifier un résultat surprenant.</p>"
      },
      {
       "titre": "Mettre au point avec précision",
       "contenu": "<p>La <strong>mise au point</strong> consiste à placer le plan de netteté à la distance du sujet principal. Elle peut être manuelle (bague de l'objectif, loupe de visée, aide au <strong>focus peaking</strong> qui surligne en couleur les contours nets) ou automatique (<strong>autofocus</strong>, dont le fonctionnement est détaillé avec les boîtiers).</p>\n<p>Règles professionnelles :</p>\n<ul>\n<li>en portrait, la mise au point se fait sur l'œil le plus proche de l'objectif ;</li>\n<li>en nature morte et en packshot, sur l'élément porteur d'information (logo, étiquette) ou au tiers avant de l'objet ;</li>\n<li>en paysage, à l'hyperfocale ou sur un élément du premier tiers de la scène ;</li>\n<li>en reportage, on présélectionne parfois une distance et une ouverture pour travailler sans regarder dans le viseur (mise au point par zone).</li>\n</ul>\n<p>Lorsque la profondeur de champ est insuffisante même diaphragme fermé (macrophotographie, objets profonds), on recourt à l'<strong>empilement de mises au point</strong> (focus stacking) : une série de vues avec des plans de netteté décalés, assemblées par logiciel en ne gardant que les zones nettes. On peut aussi incliner le plan de netteté avec un objectif à bascule (règle de Scheimpflug).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en packshot de bijoux, un studio réalise couramment 10 à 30 vues par produit en empilement de mises au point, sur un rail micrométrique, avec un éclairage strictement fixe. Le moindre mouvement de l'objet entre deux vues rend l'assemblage inutilisable.</div>"
      },
      {
       "titre": "Les aberrations optiques",
       "contenu": "<p>Une lentille réelle ne fait pas converger parfaitement tous les rayons : les défauts qui en résultent sont les <strong>aberrations</strong>. Les opticiens les réduisent en associant des lentilles de formes et de verres différents, mais aucun objectif n'en est totalement exempt.</p>\n<table>\n<thead><tr><th>Aberration</th><th>Effet visible</th><th>Remède</th></tr></thead>\n<tbody>\n<tr><td>Aberration sphérique</td><td>image douce, halo à pleine ouverture</td><td>fermer d'un ou deux crans ; lentilles asphériques</td></tr>\n<tr><td>Coma</td><td>points lumineux en forme de comète dans les angles</td><td>fermer ; objectif mieux corrigé (astrophotographie)</td></tr>\n<tr><td>Astigmatisme et courbure de champ</td><td>bords flous alors que le centre est net</td><td>fermer ; objectif à champ plan pour la reproduction</td></tr>\n<tr><td>Distorsion en barillet</td><td>lignes droites bombées vers l'extérieur (grand-angle)</td><td>correction logicielle par profil d'objectif</td></tr>\n<tr><td>Distorsion en coussinet</td><td>lignes droites creusées vers le centre (téléobjectif, zoom en position longue)</td><td>correction logicielle par profil d'objectif</td></tr>\n<tr><td>Aberration chromatique</td><td>franges colorées (magenta, vert) sur les contours contrastés</td><td>verres à faible dispersion (ED, apochromatiques) ; correction logicielle</td></tr>\n<tr><td>Vignetage</td><td>assombrissement des angles</td><td>fermer ; correction logicielle</td></tr>\n</tbody>\n</table>\n<p>Les logiciels de développement des fichiers bruts disposent de <strong>profils d'objectifs</strong> qui corrigent automatiquement la distorsion, le vignetage et les aberrations chromatiques latérales. Beaucoup d'appareils hybrides appliquent même ces corrections au moment de la prise de vue.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en photographie d'architecture ou de reproduction d'œuvres, une distorsion non corrigée fausse les proportions. Il faut l'éliminer par profil ou choisir une optique peu distordante ; ne pas la confondre avec la convergence des verticales, qui provient de l'inclinaison de l'appareil.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la plupart des aberrations diminuent quand on ferme le diaphragme, tandis que la diffraction augmente. L'ouverture optimale est le compromis entre ces deux phénomènes.</div>"
      },
      {
       "titre": "Choisir sa netteté selon l'intention",
       "contenu": "<p>La profondeur de champ n'est pas seulement un paramètre technique : c'est un choix d'écriture. Elle hiérarchise l'information en indiquant au spectateur ce qu'il doit regarder.</p>\n<ul>\n<li><strong>Faible profondeur de champ</strong> : isole le sujet de son environnement (portrait, détail d'un produit, mode). Le flou d'arrière-plan doit être harmonieux ; on parle de qualité de <strong>bokeh</strong>, qui dépend notamment du nombre et de la forme des lamelles du diaphragme.</li>\n<li><strong>Grande profondeur de champ</strong> : restitue un contexte complet (paysage, architecture, reportage, photographie de groupe, packshot catalogue où tout l'objet doit être lisible).</li>\n</ul>\n<p>Dans un cahier des charges, cette exigence apparaît souvent sous une forme indirecte : « produit entièrement net », « ambiance », « fond flou pour incrustation du texte ». Le photographe traduit alors ces mots en ouverture, distance et focale.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déduire un réglage d'une demande. 1) Identifier ce qui doit être net (tout l'objet ? seulement le visage ?). 2) Mesurer ou estimer la profondeur de cette zone. 3) Choisir la focale imposée par le cadrage et le point de vue. 4) Calculer l'ouverture nécessaire (formule approchée ou application), puis vérifier qu'elle ne dépasse pas la limite de diffraction. 5) Si c'est le cas, envisager l'empilement de mises au point ou une bascule de plan de netteté.</div>"
      }
     ],
     "points_cles": [
      "Une seule distance est rigoureusement nette ; la netteté apparente dépend du cercle de confusion.",
      "Cercle de confusion usuel : 0,03 mm en plein format, plus petit pour un petit capteur.",
      "La PdC augmente quand on ferme, quand on s'éloigne et quand la focale raccourcit.",
      "Formule approchée : PdC ≈ 2 N c d² / f'², valable loin de l'hyperfocale.",
      "Hyperfocale : H ≈ f'² / (N c) ; mise au point à H, netteté de H/2 à l'infini.",
      "À distance moyenne, la PdC se répartit environ un tiers devant, deux tiers derrière le plan de mise au point.",
      "Les aberrations diminuent en fermant ; la diffraction augmente : il existe une ouverture optimale.",
      "Distorsion, vignetage et aberration chromatique latérale se corrigent par profil d'objectif.",
      "L'empilement de mises au point dépasse les limites de la PdC en macro et en packshot."
     ],
     "lexique": [
      {
       "terme": "Plan de mise au point",
       "def": "Plan du sujet dont l'image se forme exactement sur le capteur."
      },
      {
       "terme": "Cercle de confusion",
       "def": "Diamètre maximal de la tache image que l'œil confond avec un point."
      },
      {
       "terme": "Profondeur de champ",
       "def": "Zone de la scène, devant et derrière le plan de mise au point, qui paraît nette."
      },
      {
       "terme": "Hyperfocale",
       "def": "Distance de mise au point donnant une netteté de sa moitié jusqu'à l'infini."
      },
      {
       "terme": "Focus peaking",
       "def": "Aide à la mise au point manuelle qui surligne en couleur les contours nets dans le viseur."
      },
      {
       "terme": "Empilement de mises au point",
       "def": "Assemblage de plusieurs vues à plans de netteté décalés pour étendre la zone nette."
      },
      {
       "terme": "Aberration chromatique",
       "def": "Défaut lié à la dispersion du verre, visible sous forme de franges colorées."
      },
      {
       "terme": "Distorsion",
       "def": "Déformation des lignes droites en barillet ou en coussinet."
      },
      {
       "terme": "Vignetage",
       "def": "Assombrissement progressif des angles de l'image."
      },
      {
       "terme": "Bokeh",
       "def": "Qualité esthétique des zones floues d'une image."
      }
     ]
    },
    {
     "id": "bpho-photometrie-exposition",
     "titre": "Photométrie et paramètres d'exposition",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Définir le flux lumineux, l'intensité lumineuse, l'éclairement et la luminance avec leurs unités",
      "Appliquer la loi de l'inverse du carré de la distance à un éclairage",
      "Expliquer l'exposition à partir de l'ouverture, du temps de pose et de la sensibilité",
      "Raisonner en indices de lumination (IL) et trouver des couples d'exposition équivalents",
      "Anticiper les effets secondaires de chaque paramètre (flou, profondeur de champ, bruit)"
     ],
     "sections": [
      {
       "titre": "Les grandeurs photométriques",
       "contenu": "<p>La <strong>photométrie</strong> mesure la lumière telle que l'œil humain la perçoit. Quatre grandeurs, avec leurs unités du Système international, permettent de décrire une source et la scène qu'elle éclaire.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Ce qu'elle décrit</th><th>Unité</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Flux lumineux Φ</td><td>quantité totale de lumière émise par une source, dans toutes les directions</td><td>lumen (lm)</td><td>panneau LED de 5 000 lm</td></tr>\n<tr><td>Intensité lumineuse I</td><td>flux émis dans une direction donnée, par unité d'angle solide</td><td>candela (cd)</td><td>une bougie émet environ 1 cd</td></tr>\n<tr><td>Éclairement E</td><td>flux reçu par une surface, par mètre carré</td><td>lux (lx) = lm/m<sup>2</sup></td><td>bureau : 300 à 500 lx ; plein soleil : de l'ordre de 100 000 lx</td></tr>\n<tr><td>Luminance L</td><td>lumière renvoyée ou émise par une surface dans une direction, telle qu'on la voit</td><td>candela par mètre carré (cd/m<sup>2</sup>)</td><td>écran de retouche calibré : environ 80 à 120 cd/m<sup>2</sup></td></tr>\n</tbody>\n</table>\n<p>Pour le photographe, deux grandeurs comptent particulièrement : l'<strong>éclairement</strong>, qui caractérise la lumière qui arrive sur le sujet (c'est ce que mesure un posemètre en lumière incidente), et la <strong>luminance</strong>, qui caractérise la lumière renvoyée par le sujet vers l'appareil (c'est ce que mesure la cellule de l'appareil, en lumière réfléchie).</p>\n<p>La luminance d'une surface dépend de l'éclairement reçu et de son <strong>facteur de réflexion</strong> : une neige fraîche renvoie environ 90 % de la lumière, un velours noir quelques pour cent, une peau claire environ 35 %. La scène « moyenne » de référence est le <strong>gris moyen à 18 %</strong>.</p>"
      },
      {
       "titre": "La loi de l'inverse du carré de la distance",
       "contenu": "<p>Pour une source de petite taille par rapport à la distance (ampoule nue, flash cobra, réflecteur standard), l'éclairement reçu par le sujet diminue avec le carré de la distance :</p>\n<p><strong>E = I / d<sup>2</sup></strong> (E en lux, I en candelas, d en mètres)</p>\n<p>Doubler la distance divise l'éclairement par 4, soit une perte de <strong>2 diaphragmes</strong>. Multiplier la distance par 1,4 (√2) le divise par 2, soit 1 diaphragme.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> corriger une exposition après déplacement d'une source. Situation : un flash de studio placé à 2 m du modèle donne une exposition correcte à f/8. On recule le flash à 4 m. 1) Rapport des distances : 4 / 2 = 2. 2) Rapport des éclairements : 1 / 2<sup>2</sup> = 1/4. 3) Un quart de la lumière = 2 diaphragmes de moins. 4) Nouvelle ouverture : f/8 → f/5,6 → f/4. On peut aussi conserver f/8 et augmenter la puissance du flash de 2 IL (par exemple de 1/8 à 1/2 de sa puissance).</div>\n<p>Cette loi a une conséquence pratique majeure : la <strong>chute de lumière</strong> dans la profondeur de la scène. Avec une source proche, un sujet à 1 m et un fond à 2 m, le fond reçoit 4 fois moins de lumière et devient beaucoup plus sombre. Avec la même source placée à 4 m du sujet et 5 m du fond, l'écart n'est plus que de (5/4)<sup>2</sup> ≈ 1,6, soit moins d'un diaphragme. En éloignant la lumière (et en augmentant sa puissance), on obtient un éclairage plus homogène ; en la rapprochant, un fond qui plonge dans l'ombre.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la loi ne s'applique pas strictement aux grandes sources (grande boîte à lumière très proche, ciel couvert, mur de lumière) ni aux sources dont le faisceau est concentré par une lentille (projecteur Fresnel, découpe). Elle reste un bon ordre de grandeur pour raisonner, mais la mesure au posemètre fait foi.</div>"
      },
      {
       "titre": "Le triangle d'exposition",
       "contenu": "<p>L'<strong>exposition</strong> est la quantité de lumière reçue par le capteur. Elle dépend de la luminance de la scène et de trois réglages :</p>\n<ul>\n<li>l'<strong>ouverture</strong> du diaphragme (nombre N), qui règle le débit de lumière ;</li>\n<li>le <strong>temps de pose</strong> (ou vitesse d'obturation, t), qui règle la durée pendant laquelle la lumière atteint le capteur ;</li>\n<li>la <strong>sensibilité</strong> (ISO), qui règle l'amplification du signal du capteur.</li>\n</ul>\n<p>Les séries normalisées progressent toutes par pas d'un diaphragme :</p>\n<table>\n<thead><tr><th>Paramètre</th><th>Série (1 IL entre deux valeurs)</th><th>Effet secondaire</th></tr></thead>\n<tbody>\n<tr><td>Ouverture</td><td>f/1,4 – 2 – 2,8 – 4 – 5,6 – 8 – 11 – 16 – 22</td><td>profondeur de champ, piqué, diffraction</td></tr>\n<tr><td>Temps de pose (s)</td><td>1 – 1/2 – 1/4 – 1/8 – 1/15 – 1/30 – 1/60 – 1/125 – 1/250 – 1/500 – 1/1000</td><td>flou de bougé, flou de mouvement ou figé</td></tr>\n<tr><td>Sensibilité (ISO)</td><td>100 – 200 – 400 – 800 – 1600 – 3200 – 6400</td><td>bruit numérique, perte de plage dynamique</td></tr>\n</tbody>\n</table>\n<p>Les appareils proposent aussi des pas d'un tiers de diaphragme (par exemple 1/125 – 1/160 – 1/200 – 1/250, ou f/5,6 – 6,3 – 7,1 – 8).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> gagner un diaphragme de lumière sur un paramètre permet d'en perdre un sur un autre sans changer l'exposition. C'est la <strong>loi de réciprocité</strong> : f/8 à 1/125 donne la même exposition que f/5,6 à 1/250 ou que f/11 à 1/60.</div>\n<p>Le choix entre ces couples équivalents n'est jamais neutre : il se fait en fonction de l'effet secondaire recherché ou à éviter. Pour éviter le <strong>flou de bougé</strong> à main levée, une règle pratique en plein format impose un temps de pose au plus égal à 1/focale (1/100 s avec un 100 mm), assouplie de plusieurs crans par un stabilisateur d'image. Pour figer un sportif, il faut souvent 1/1000 s ou moins ; pour filer l'eau d'une cascade, une ou plusieurs secondes sur trépied.</p>"
      },
      {
       "titre": "Les indices de lumination (IL)",
       "contenu": "<p>L'<strong>indice de lumination</strong> (IL, en anglais EV pour <em>exposure value</em>) résume en un seul nombre tous les couples ouverture-temps de pose qui donnent la même exposition :</p>\n<p><strong>IL = log<sub>2</sub>(N<sup>2</sup> / t)</strong> (t en secondes)</p>\n<p>Par convention, IL 0 correspond à f/1 pendant 1 s. Chaque augmentation de 1 IL correspond à deux fois moins de lumière admise. Les cellules et posemètres affichent souvent la mesure directement en IL pour 100 ISO.</p>\n<table>\n<thead><tr><th>Situation (100 ISO)</th><th>IL approximatif</th><th>Exemple de réglage</th></tr></thead>\n<tbody>\n<tr><td>Plein soleil, sujet en lumière directe</td><td>15</td><td>f/16 à 1/125 s</td></tr>\n<tr><td>Ciel couvert lumineux</td><td>12 à 13</td><td>f/8 à 1/60 à 1/125 s</td></tr>\n<tr><td>Intérieur lumineux près d'une fenêtre</td><td>8 à 9</td><td>f/2,8 à 1/30 s</td></tr>\n<tr><td>Rue éclairée la nuit</td><td>4 à 6</td><td>f/2 à 1/4 s environ</td></tr>\n</tbody>\n</table>\n<p>La première ligne illustre la <strong>règle du f/16 ensoleillé</strong> : en plein soleil, à f/16, le temps de pose correct est à peu près l'inverse de la sensibilité (1/100 s à 100 ISO, arrondi à 1/125 s). C'est un repère utile pour vérifier qu'une mesure de cellule n'est pas aberrante.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> trouver un couple équivalent en changeant de sensibilité. Mesure : f/5,6 à 1/60 s à 100 ISO, mais le sujet bouge et il faut au moins 1/250 s. 1) De 1/60 à 1/250 : 1/60 → 1/125 → 1/250, soit 2 IL de lumière perdue. 2) On ne peut pas ouvrir davantage sans perdre la profondeur de champ voulue. 3) On compense par la sensibilité : 100 → 200 → 400 ISO (+2 IL). 4) Réglage final : f/5,6 à 1/250 s à 400 ISO.</div>"
      },
      {
       "titre": "La sensibilité et le bruit",
       "contenu": "<p>Un capteur numérique a une sensibilité « native » (souvent 64, 100 ou 200 ISO selon les modèles), qui donne la meilleure qualité d'image. Monter en ISO n'augmente pas la quantité de lumière reçue : l'appareil <strong>amplifie</strong> le signal électrique. Cette amplification rend aussi plus visible le <strong>bruit numérique</strong>, qui apparaît sous forme de grain irrégulier, surtout dans les ombres :</p>\n<ul>\n<li>le <strong>bruit de luminance</strong>, grain gris comparable au grain argentique ;</li>\n<li>le <strong>bruit de chrominance</strong>, taches colorées aléatoires, plus gênant.</li>\n</ul>\n<p>Les grands photosites (gros capteur, définition modérée) captent plus de lumière et produisent moins de bruit à sensibilité égale. Les logiciels de développement, notamment ceux qui utilisent des algorithmes d'apprentissage, réduisent efficacement le bruit, au prix d'une perte de détails fins si l'on force le traitement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un photographe de mariage travaille couramment entre 1 600 et 6 400 ISO dans une église sans flash autorisé : il préfère un bruit maîtrisé au développement à un visage flou. À l'inverse, un studio de packshot reste à la sensibilité native et apporte toute la lumière nécessaire par les flashs.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sous-exposer à faible ISO puis éclaircir fortement au développement produit souvent plus de bruit qu'une exposition correcte à ISO plus élevé. Le bon réflexe est d'exposer correctement à la prise de vue, puis de régler la sensibilité en fonction des contraintes de temps de pose et d'ouverture.</div>"
      }
     ],
     "points_cles": [
      "Flux en lumens, intensité en candelas, éclairement en lux, luminance en cd/m².",
      "Le posemètre en lumière incidente mesure l'éclairement ; la cellule de l'appareil mesure la luminance.",
      "Loi de l'inverse du carré : doubler la distance d'une source ponctuelle coûte 2 diaphragmes.",
      "Éloigner la source rend l'éclairage plus homogène dans la profondeur de la scène.",
      "Exposition = ouverture + temps de pose + sensibilité, chaque série progressant par diaphragme.",
      "Loi de réciprocité : des couples différents donnent la même exposition mais des effets secondaires différents.",
      "IL = log2(N²/t) ; règle du f/16 ensoleillé : f/16 et 1/ISO en plein soleil.",
      "Monter en ISO amplifie le signal et le bruit ; exposer correctement reste prioritaire."
     ],
     "lexique": [
      {
       "terme": "Lumen",
       "def": "Unité de flux lumineux (lm), quantité totale de lumière émise par une source."
      },
      {
       "terme": "Candela",
       "def": "Unité d'intensité lumineuse (cd), lumière émise dans une direction donnée."
      },
      {
       "terme": "Lux",
       "def": "Unité d'éclairement (lx), égale à un lumen par mètre carré."
      },
      {
       "terme": "Luminance",
       "def": "Lumière émise ou renvoyée par une surface dans une direction, en cd/m²."
      },
      {
       "terme": "Facteur de réflexion",
       "def": "Pourcentage de la lumière reçue renvoyée par une surface."
      },
      {
       "terme": "Gris moyen",
       "def": "Surface de référence renvoyant 18 % de la lumière, sur laquelle sont étalonnées les cellules."
      },
      {
       "terme": "Loi de réciprocité",
       "def": "Principe selon lequel des couples ouverture-temps de pose équivalents donnent la même exposition."
      },
      {
       "terme": "Indice de lumination",
       "def": "Nombre (IL ou EV) qui résume tous les couples d'exposition équivalents."
      },
      {
       "terme": "Sensibilité ISO",
       "def": "Réglage de l'amplification du signal du capteur."
      },
      {
       "terme": "Bruit numérique",
       "def": "Variations aléatoires de luminosité ou de couleur des pixels, accrues par l'amplification."
      }
     ]
    },
    {
     "id": "bpho-colorimetrie-temperature",
     "titre": "Colorimétrie, température de couleur et balance des blancs",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Expliquer la perception des couleurs à partir du spectre visible",
      "Distinguer synthèse additive et synthèse soustractive et citer leurs usages",
      "Utiliser la température de couleur et le mired pour caractériser et corriger une source",
      "Régler une balance des blancs adaptée à la situation de prise de vue",
      "Lire une représentation graphique d'espace colorimétrique et comparer des gamuts"
     ],
     "sections": [
      {
       "titre": "Spectre et perception des couleurs",
       "contenu": "<p>Une lumière blanche, comme celle du soleil, contient toutes les longueurs d'onde du visible. Décomposée par un prisme, elle forme un <strong>spectre continu</strong> allant du violet (vers 400 nm) au rouge (vers 700 nm), en passant par le bleu, le vert, le jaune et l'orangé.</p>\n<p>Un objet ne possède pas de couleur en soi : il <strong>absorbe</strong> une partie des longueurs d'onde qu'il reçoit et <strong>renvoie</strong> les autres. Une pomme rouge éclairée en lumière blanche renvoie surtout le rouge ; éclairée par une lumière verte pure, elle paraît presque noire. La couleur perçue dépend donc à la fois de l'objet, de la source et de l'observateur.</p>\n<p>L'œil possède trois types de <strong>cônes</strong>, sensibles respectivement aux courtes (bleu), moyennes (vert) et longues (rouge) longueurs d'onde. Le cerveau reconstitue toutes les couleurs à partir de ces trois signaux : c'est le principe de la <strong>trichromie</strong>, que reproduisent le capteur photographique, l'écran et l'imprimante.</p>\n<p>Une couleur se décrit par trois attributs :</p>\n<ul>\n<li>la <strong>teinte</strong> (rouge, jaune, bleu…), liée à la longueur d'onde dominante ;</li>\n<li>la <strong>saturation</strong>, pureté de la couleur, de la teinte vive au gris ;</li>\n<li>la <strong>luminosité</strong> (ou clarté), du sombre au clair.</li>\n</ul>\n<p>Ces trois attributs sont ceux du mode TSL (teinte, saturation, luminosité) des logiciels de retouche.</p>"
      },
      {
       "titre": "Synthèse additive et synthèse soustractive",
       "contenu": "<p>La <strong>synthèse additive</strong> crée les couleurs en <em>ajoutant</em> des lumières. Ses trois primaires sont le <strong>rouge, le vert et le bleu</strong> (RVB, en anglais RGB). Leur mélange à parts égales donne du blanc ; l'absence de lumière donne du noir. Elle est utilisée par tout ce qui émet de la lumière : écrans, projecteurs, et elle décrit aussi le fonctionnement du capteur (filtres rouges, verts et bleus).</p>\n<p>La <strong>synthèse soustractive</strong> crée les couleurs en <em>retirant</em> des longueurs d'onde à une lumière blanche, par des encres ou des filtres. Ses trois primaires sont le <strong>cyan, le magenta et le jaune</strong> (CMJ, en anglais CMY). Leur superposition donne théoriquement du noir ; en pratique un brun sombre, d'où l'ajout d'une encre noire (N, ou K pour <em>key</em>) : c'est la quadrichromie <strong>CMJN</strong> de l'imprimerie.</p>\n<table>\n<thead><tr><th>Primaire additive</th><th>Couleur complémentaire (primaire soustractive)</th><th>Relation</th></tr></thead>\n<tbody>\n<tr><td>Rouge</td><td>Cyan</td><td>cyan = vert + bleu = blanc − rouge</td></tr>\n<tr><td>Vert</td><td>Magenta</td><td>magenta = rouge + bleu = blanc − vert</td></tr>\n<tr><td>Bleu</td><td>Jaune</td><td>jaune = rouge + vert = blanc − bleu</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque couleur a sa <strong>complémentaire</strong>, qui la neutralise. Pour corriger une dominante, on ajoute sa complémentaire : une image trop verte se corrige vers le magenta, une image trop jaune vers le bleu. Les curseurs « température » (bleu-jaune) et « teinte » (vert-magenta) des logiciels reposent sur ces deux axes.</div>"
      },
      {
       "titre": "La température de couleur",
       "contenu": "<p>Les sources dites « blanches » n'ont pas toutes la même couleur : une bougie est orangée, un ciel couvert légèrement bleuté. On caractérise cette nuance par la <strong>température de couleur</strong>, exprimée en <strong>kelvins (K)</strong>. Elle correspond à la température à laquelle il faudrait chauffer un corps noir théorique pour qu'il émette une lumière de même couleur. Paradoxe à retenir : plus la température est basse, plus la lumière est chaude (orangée) ; plus elle est haute, plus la lumière est froide (bleutée).</p>\n<table>\n<thead><tr><th>Source</th><th>Température de couleur approximative</th></tr></thead>\n<tbody>\n<tr><td>Flamme de bougie</td><td>1 800 à 2 000 K</td></tr>\n<tr><td>Lampe domestique « blanc chaud »</td><td>2 700 à 3 000 K</td></tr>\n<tr><td>Lampe halogène de studio (tungstène)</td><td>3 200 K</td></tr>\n<tr><td>Lumière du jour à midi, flash électronique</td><td>5 500 à 6 000 K</td></tr>\n<tr><td>Ciel couvert</td><td>6 500 à 7 500 K</td></tr>\n<tr><td>Ombre sous un ciel bleu</td><td>8 000 à 10 000 K et plus</td></tr>\n</tbody>\n</table>\n<p>Pour corriger une source avec des filtres (gélatines placées devant les projecteurs ou sur les fenêtres), on travaille en <strong>mired</strong> : mired = 1 000 000 / T(K). L'écart en mired, contrairement à l'écart en kelvins, correspond à une correction visuelle constante quelle que soit la source de départ. Les gélatines orange (de type CTO) augmentent la valeur en mired et réchauffent ; les gélatines bleues (de type CTB) la diminuent et refroidissent.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une correction en mired. Situation : faire correspondre une lampe à 3 200 K avec la lumière du jour à 5 600 K. 1) Mired de la lampe : 1 000 000 / 3 200 ≈ 312. 2) Mired visé : 1 000 000 / 5 600 ≈ 179. 3) Correction : 179 − 312 = −133 mired. 4) Il faut une gélatine bleue d'environ −130 mired, valeur que l'on retrouve dans le catalogue du fabricant de filtres (en indiquant aussi la perte de lumière du filtre, souvent supérieure à un diaphragme).</div>\n<p>Certaines sources n'ont pas un spectre continu : tubes fluorescents, LED bon marché, lampes à vapeur de sodium. Leur rendu est mesuré par l'<strong>indice de rendu des couleurs</strong> (IRC, ou CRI) sur 100 ; pour la photographie, on recherche un IRC supérieur ou égal à 95. Un mauvais IRC provoque des couleurs ternes ou des dominantes vertes ou magenta impossibles à corriger par la seule température de couleur.</p>"
      },
      {
       "titre": "La balance des blancs",
       "contenu": "<p>L'œil s'adapte automatiquement à la couleur de la lumière ; le capteur, lui, enregistre fidèlement la dominante. La <strong>balance des blancs</strong> indique à l'appareil quelle source éclaire la scène, pour qu'un objet blanc ou gris soit rendu neutre.</p>\n<p>Les modes disponibles :</p>\n<ul>\n<li><strong>automatique</strong> : pratique en reportage, mais variable d'une image à l'autre et souvent incapable de conserver la chaleur d'un coucher de soleil ;</li>\n<li><strong>préréglages</strong> (soleil, ombre, nuageux, tungstène, fluorescent, flash) ;</li>\n<li><strong>réglage en kelvins</strong>, par exemple 3 200 K en studio tungstène ;</li>\n<li><strong>balance personnalisée</strong> : on photographie une carte gris neutre sous la lumière de la scène et l'appareil s'étalonne dessus. C'est la méthode la plus exacte.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en packshot pour un catalogue de vêtements, la couleur du produit engage la responsabilité du photographe : un pull bleu marine rendu bleu roi entraîne des retours clients. Le studio photographie une charte de couleur au début de chaque série, sous l'éclairage exact de la prise de vue, et s'en sert pour régler la balance et le profil au développement.</div>\n<p>En fichier brut (RAW), la balance des blancs n'est qu'une indication enregistrée dans les métadonnées : elle reste modifiable sans perte au développement. En JPEG, elle est appliquée définitivement aux pixels ; la corriger ensuite dégrade l'image.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en <strong>lumière mixte</strong> (fenêtre à 5 600 K et lampes à 3 000 K dans la même pièce), aucune balance des blancs ne peut rendre les deux zones neutres. Il faut harmoniser les sources : gélatine sur les lampes, gélatine sur la fenêtre, extinction d'une des deux, ou choisir volontairement laquelle restera colorée.</div>"
      },
      {
       "titre": "Représenter les couleurs : espaces colorimétriques et gamut",
       "contenu": "<p>Pour décrire les couleurs de façon objective, la Commission internationale de l'éclairage (<strong>CIE</strong>) a défini en 1931 un <strong>diagramme de chromaticité</strong>. Il a la forme d'un fer à cheval : sur le bord courbe se trouvent les couleurs spectrales pures, avec leurs longueurs d'onde ; la droite qui ferme le fer à cheval en bas est la ligne des pourpres ; le blanc se situe vers le centre. Ce diagramme représente toutes les couleurs perceptibles par un observateur moyen.</p>\n<p>Le <strong>gamut</strong> d'un appareil (écran, imprimante) ou d'un espace de travail est l'ensemble des couleurs qu'il peut reproduire. Sur le diagramme, le gamut d'un espace RVB est un triangle dont les sommets sont ses trois primaires ; le gamut d'une imprimante est une forme irrégulière à six côtés environ.</p>\n<table>\n<thead><tr><th>Espace</th><th>Étendue</th><th>Usage principal</th></tr></thead>\n<tbody>\n<tr><td>sRGB</td><td>le plus restreint</td><td>web, réseaux sociaux, écrans standard, tirages de minilab grand public</td></tr>\n<tr><td>Adobe RGB (1998)</td><td>plus étendu, surtout dans les verts et les cyans</td><td>préparation pour l'impression de qualité</td></tr>\n<tr><td>ProPhoto RGB</td><td>très étendu, dépasse le visible</td><td>espace de travail en 16 bits pour le développement</td></tr>\n<tr><td>CMJN (selon le papier et la presse)</td><td>souvent plus restreint que le sRGB dans certains bleus et verts vifs, plus étendu dans certains cyans et jaunes</td><td>impression offset et presses numériques</td></tr>\n</tbody>\n</table>\n<p>D'autres représentations sont utilisées : l'espace <strong>L*a*b*</strong> (CIELAB), qui sépare la clarté L* de deux axes de couleur a* (vert-rouge) et b* (bleu-jaune) et sert de référence indépendante des appareils ; et la représentation en trois dimensions, qui montre le volume du gamut à toutes les clartés.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer deux gamuts sur un schéma. 1) Repérer le type de représentation (diagramme xy en fer à cheval, plan a*b*, vue 3D). 2) Identifier chaque tracé grâce à la légende. 3) Repérer les zones où un tracé dépasse l'autre : ce sont les couleurs reproductibles par l'un et pas par l'autre. 4) Conclure sur la conséquence pratique : les couleurs hors gamut de la destination devront être converties, avec une perte de saturation ou de nuance.</div>"
      }
     ],
     "points_cles": [
      "La couleur perçue dépend de l'objet, de la source et de l'observateur.",
      "Synthèse additive RVB pour la lumière (écran, capteur) ; synthèse soustractive CMJ plus noir pour l'encre.",
      "Rouge/cyan, vert/magenta, bleu/jaune sont des couples complémentaires.",
      "Plus la température de couleur est basse, plus la lumière est chaude ; tungstène 3 200 K, jour 5 500 K environ.",
      "Les corrections de filtres se calculent en mired = 1 000 000 / T.",
      "Un IRC d'au moins 95 est recherché pour les sources de prise de vue.",
      "La balance personnalisée sur carte grise est la méthode la plus exacte ; en RAW, la balance reste modifiable.",
      "Le gamut est l'ensemble des couleurs reproductibles ; sRGB < Adobe RGB < ProPhoto RGB."
     ],
     "lexique": [
      {
       "terme": "Trichromie",
       "def": "Reconstitution de toutes les couleurs à partir de trois primaires."
      },
      {
       "terme": "Synthèse additive",
       "def": "Création des couleurs par addition de lumières rouge, verte et bleue."
      },
      {
       "terme": "Synthèse soustractive",
       "def": "Création des couleurs par absorption de longueurs d'onde avec des encres ou filtres cyan, magenta et jaune."
      },
      {
       "terme": "Couleur complémentaire",
       "def": "Couleur qui, ajoutée à une autre, la neutralise vers le gris ou le blanc."
      },
      {
       "terme": "Température de couleur",
       "def": "Nuance d'une source blanche exprimée en kelvins, du chaud (bas) au froid (haut)."
      },
      {
       "terme": "Mired",
       "def": "Unité de correction des couleurs de source égale à 1 000 000 divisé par la température en kelvins."
      },
      {
       "terme": "IRC",
       "def": "Indice de rendu des couleurs, sur 100, qui évalue la fidélité des couleurs sous une source."
      },
      {
       "terme": "Balance des blancs",
       "def": "Réglage qui neutralise la dominante de couleur de la source."
      },
      {
       "terme": "Gamut",
       "def": "Ensemble des couleurs qu'un appareil ou un espace peut reproduire."
      },
      {
       "terme": "CIELAB",
       "def": "Espace colorimétrique de référence indépendant des appareils, à axes L*, a* et b*."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Les matériels de prise de vue et d'éclairage",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpho-boitiers-capteurs",
     "titre": "Les appareils de prise de vue : visée, obturation, capteur, autofocus",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Identifier les organes d'un appareil de prise de vue et leur rôle",
      "Comparer les systèmes de visée et d'obturation et leurs conséquences pratiques",
      "Expliquer le fonctionnement d'un capteur numérique et de sa matrice de filtres",
      "Décrire le fonctionnement de l'autofocus et de la stabilisation",
      "Choisir un boîtier et des cartes mémoire adaptés à une commande"
     ],
     "sections": [
      {
       "titre": "Les familles d'appareils",
       "contenu": "<p>Tous les appareils comportent les mêmes fonctions : un objectif qui forme l'image, un diaphragme et un obturateur qui dosent la lumière, une surface sensible qui l'enregistre et un système de visée qui permet de cadrer. Ils se distinguent par la façon dont ces fonctions sont réalisées.</p>\n<table>\n<thead><tr><th>Famille</th><th>Principe de visée</th><th>Points forts</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Reflex</td><td>miroir et pentaprisme : on voit à travers l'objectif</td><td>visée optique sans décalage, grande autonomie</td><td>encombrement, bruit et vibration du miroir ; gamme en fin de renouvellement chez les grands fabricants</td></tr>\n<tr><td>Hybride (sans miroir)</td><td>viseur électronique ou écran, image issue du capteur</td><td>aperçu de l'exposition et de la balance, autofocus sur tout le champ, compacité, déclenchement silencieux</td><td>consommation électrique, léger décalage d'affichage</td></tr>\n<tr><td>Moyen format numérique</td><td>électronique ou reflex selon les modèles</td><td>grand capteur, très haute définition, rendu des tons</td><td>prix, poids, rapidité moindre</td></tr>\n<tr><td>Chambre technique</td><td>verre dépoli à l'arrière, image renversée</td><td>mouvements de décentrement et de bascule, très grand format</td><td>lenteur, trépied obligatoire</td></tr>\n</tbody>\n</table>\n<p>La <strong>chambre</strong> est dite <strong>déformable</strong> : l'avant (porte-objectif) et l'arrière (porte-dos ou dos numérique) sont reliés par un soufflet et peuvent se déplacer l'un par rapport à l'autre. Ces mouvements, utilisés en architecture et en nature morte, sont étudiés avec le redressement des perspectives.</p>"
      },
      {
       "titre": "L'obturateur",
       "contenu": "<p>L'<strong>obturateur</strong> règle le temps de pose. On en distingue trois types.</p>\n<ul>\n<li>L'<strong>obturateur à rideaux</strong> (ou plan focal), placé juste devant le capteur : un premier rideau découvre le capteur, un second le recouvre. Aux temps de pose courts, le second rideau part avant que le premier ait fini sa course : une simple fente balaie le capteur.</li>\n<li>L'<strong>obturateur central</strong>, intégré à l'objectif (chambres, certains moyens formats, compacts) : des lamelles s'ouvrent puis se referment. Toute l'image est exposée en même temps.</li>\n<li>L'<strong>obturateur électronique</strong> : le capteur est simplement activé puis lu. Il est silencieux et sans vibration, mais sur la plupart des capteurs la lecture se fait ligne par ligne, ce qui provoque l'effet de <strong>rolling shutter</strong> : un sujet rapide paraît penché, une hélice déformée, et un éclairage à LED ou à tubes peut produire des bandes.</li>\n</ul>\n<p>Le type d'obturateur conditionne l'usage du flash. Avec un obturateur à rideaux, l'éclair doit se produire quand le capteur est entièrement découvert. Le temps de pose le plus court qui le permet est la <strong>vitesse de synchronisation</strong> X, souvent comprise entre 1/160 et 1/250 s. Au-delà, une bande noire apparaît sur l'image. Un obturateur central synchronise le flash à toutes les vitesses.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en studio, dépasser la vitesse de synchronisation est l'erreur de débutant la plus courante : la partie inférieure ou supérieure de l'image est noire. Certains flashs proposent une synchronisation à haute vitesse (HSS) qui émet une série d'éclairs rapprochés, mais au prix d'une forte perte de puissance.</div>"
      },
      {
       "titre": "Le capteur numérique",
       "contenu": "<p>Le <strong>capteur</strong> est une puce de silicium couverte de millions de <strong>photosites</strong>. Chacun convertit la lumière reçue en charge électrique pendant la pose, puis cette charge est mesurée et convertie en valeur numérique par un convertisseur analogique-numérique.</p>\n<p>Deux technologies existent :</p>\n<ul>\n<li>le <strong>CCD</strong>, où les charges sont transférées de proche en proche vers un point de lecture unique : longtemps réputé pour la qualité de ses couleurs, il est aujourd'hui réservé à des usages particuliers ;</li>\n<li>le <strong>CMOS</strong>, où chaque photosite possède son propre circuit d'amplification : plus rapide, moins gourmand en énergie, il équipe désormais la quasi-totalité des appareils. Les variantes rétroéclairées (BSI) et empilées (stacked) améliorent la sensibilité et la vitesse de lecture.</li>\n</ul>\n<p>Un photosite ne mesure qu'une quantité de lumière, pas une couleur. Pour obtenir la couleur, le capteur est recouvert d'une <strong>matrice de filtres colorés</strong>, le plus souvent de type <strong>Bayer</strong> : chaque groupe de quatre photosites comporte un filtre rouge, un bleu et deux verts (l'œil étant plus sensible au vert). Chaque pixel final est calculé par <strong>dématriçage</strong>, à partir des valeurs de ses voisins. Ce calcul est réalisé par l'appareil pour un JPEG, ou par le logiciel de développement pour un fichier brut.</p>\n<p>Devant la matrice se trouvent un filtre bloquant les infrarouges et, sur certains modèles, un <strong>filtre passe-bas</strong> (anti-moiré) qui adoucit légèrement l'image pour éviter les motifs parasites sur les tissus fins. Les capteurs sans ce filtre gagnent en piqué mais exigent une vigilance sur les textiles et les trames.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la <strong>définition</strong> du capteur (nombre de pixels, par exemple 6 000 × 4 000 = 24 millions) ne détermine pas seule la qualité. La taille des photosites agit sur le bruit et la <strong>plage dynamique</strong> (écart entre les plus faibles et les plus fortes lumières enregistrables, souvent 12 à 15 IL sur un bon capteur à sensibilité native).</div>"
      },
      {
       "titre": "L'autofocus",
       "contenu": "<p>L'<strong>autofocus</strong> (AF) règle automatiquement la mise au point. Deux principes de mesure coexistent :</p>\n<table>\n<thead><tr><th>Principe</th><th>Fonctionnement</th><th>Caractéristiques</th></tr></thead>\n<tbody>\n<tr><td>Détection de phase</td><td>la lumière issue de deux côtés de l'objectif est comparée ; le décalage entre les deux images indique dans quel sens et de combien déplacer la mise au point</td><td>rapide, adapté au suivi d'un sujet en mouvement ; module séparé sur les reflex, photosites dédiés sur le capteur des hybrides</td></tr>\n<tr><td>Détection de contraste</td><td>l'appareil déplace la mise au point et cherche la position où le contraste de l'image est maximal</td><td>très précis mais plus lent ; il « pompe » de part et d'autre du point</td></tr>\n</tbody>\n</table>\n<p>Les hybrides actuels combinent les deux (AF hybride) et ajoutent la <strong>reconnaissance de sujets</strong> (visage, œil, animal, véhicule) qui pilote automatiquement le collimateur.</p>\n<p>Les modes de fonctionnement :</p>\n<ul>\n<li><strong>AF ponctuel</strong> (AF-S, One Shot) : la mise au point est verrouillée dès qu'elle est atteinte ; pour les sujets statiques ;</li>\n<li><strong>AF continu</strong> (AF-C, AI Servo) : la mise au point est recalculée en permanence ; pour les sujets en mouvement ;</li>\n<li>choix des <strong>zones</strong> : point unique, zone, suivi sur tout le champ.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> configurer l'autofocus pour un reportage sportif. 1) AF continu. 2) Zone dynamique ou suivi, initialisé sur le joueur visé. 3) Reconnaissance de sujet « humain » ou « œil ». 4) Rafale et priorité au déclenchement ou à la mise au point selon l'enjeu. 5) Éventuellement, dissocier l'autofocus du déclencheur (bouton AF-ON au pouce) pour garder la main sur le moment où l'appareil fait le point.</div>\n<p>L'autofocus peine en faible lumière, sur des surfaces sans contraste (mur uni, ciel) et derrière une vitre ou un grillage. En studio, on prévoit une lampe pilote suffisante ou l'on passe en mise au point manuelle.</p>"
      },
      {
       "titre": "La stabilisation d'image",
       "contenu": "<p>La <strong>stabilisation</strong> compense les petits mouvements de l'appareil tenu à main levée. Des capteurs de mouvement (gyroscopes) détectent les rotations et les translations, et un mécanisme déplace en sens inverse :</p>\n<ul>\n<li>soit un groupe de lentilles de l'objectif (stabilisation <strong>optique</strong>) ;</li>\n<li>soit le capteur lui-même (stabilisation <strong>sur le capteur</strong>, souvent sur 5 axes) ;</li>\n<li>soit les deux, coordonnés.</li>\n</ul>\n<p>Les fabricants annoncent un gain de 4 à 8 IL : un temps de pose de 1/8 s peut ainsi devenir utilisable là où 1/125 s était nécessaire. La stabilisation ne fige pas un <strong>sujet</strong> qui bouge : elle ne corrige que le bougé du photographe.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur trépied, certains systèmes de stabilisation cherchent à corriger un mouvement inexistant et créent un léger flou. Il faut suivre la notice : beaucoup de systèmes récents détectent le trépied, mais la règle prudente reste de désactiver la stabilisation pour une pose longue sur pied.</div>"
      },
      {
       "titre": "Cartes mémoire et fiabilité de l'enregistrement",
       "contenu": "<p>Les images sont enregistrées sur des <strong>cartes mémoire</strong>. Les formats les plus courants sont la carte <strong>SD</strong> (SDHC jusqu'à 32 Go, SDXC au-delà), déclinée en bus UHS-I ou UHS-II, et la carte <strong>CFexpress</strong>, beaucoup plus rapide, sur les boîtiers professionnels.</p>\n<p>Deux indications comptent pour le choix :</p>\n<ul>\n<li>la <strong>capacité</strong>, en gigaoctets ;</li>\n<li>le <strong>débit</strong>, notamment le débit d'écriture minimal garanti, indiqué par des classes : U1, U3 ou V30, V60, V90 (le nombre indique un débit minimal en mégaoctets par seconde, par exemple 90 Mo/s pour V90). Une rafale en RAW ou une vidéo à haut débit exigent une carte rapide, sous peine de saturation de la mémoire tampon.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un mariage ou un événement non reproductible, le photographe utilise un boîtier à double emplacement de carte en mode <strong>sauvegarde</strong> (chaque image écrite sur les deux cartes), formate les cartes dans l'appareil avant chaque prestation, ne les efface jamais avant d'avoir vérifié deux copies des fichiers, et préfère plusieurs cartes moyennes à une seule très grosse carte.</div>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer le nombre de cartes pour une journée. Boîtier de 24 millions de pixels, RAW compressé sans perte d'environ 25 Mo, 1 500 vues prévues. 1) Volume : 1 500 × 25 = 37 500 Mo ≈ 37,5 Go. 2) Ajouter une marge de 30 % : environ 49 Go. 3) Prévoir par exemple deux cartes de 64 Go en double écriture, plus une carte de secours.</div>"
      }
     ],
     "points_cles": [
      "Reflex : visée optique par miroir ; hybride : visée électronique issue du capteur ; chambre : mouvements et grand format.",
      "Obturateur à rideaux limité par la vitesse de synchronisation flash ; obturateur central synchronisé à toutes les vitesses.",
      "L'obturateur électronique peut provoquer l'effet de rolling shutter et des bandes sous LED.",
      "Le capteur CMOS domine ; la matrice de Bayer (R, V, V, B) impose un dématriçage.",
      "La plage dynamique d'un bon capteur atteint 12 à 15 IL à sensibilité native.",
      "AF à détection de phase rapide, AF à détection de contraste précis ; AF-S pour l'immobile, AF-C pour le mouvement.",
      "La stabilisation corrige le bougé du photographe, pas le mouvement du sujet.",
      "Choisir les cartes selon la capacité et le débit d'écriture garanti (V30, V60, V90) ; double écriture pour les événements."
     ],
     "lexique": [
      {
       "terme": "Hybride",
       "def": "Appareil à objectifs interchangeables sans miroir, à visée électronique."
      },
      {
       "terme": "Chambre déformable",
       "def": "Appareil dont l'avant et l'arrière, reliés par un soufflet, peuvent être décentrés et basculés."
      },
      {
       "terme": "Vitesse de synchronisation",
       "def": "Temps de pose le plus court permettant d'exposer tout le capteur à l'éclair d'un flash."
      },
      {
       "terme": "Rolling shutter",
       "def": "Déformation due à la lecture ligne par ligne du capteur avec un obturateur électronique."
      },
      {
       "terme": "Photosite",
       "def": "Élément sensible du capteur qui convertit la lumière en charge électrique."
      },
      {
       "terme": "Matrice de Bayer",
       "def": "Mosaïque de filtres rouges, verts et bleus placée sur le capteur."
      },
      {
       "terme": "Dématriçage",
       "def": "Calcul des trois composantes de couleur de chaque pixel à partir des photosites voisins."
      },
      {
       "terme": "Plage dynamique",
       "def": "Écart, en IL, entre les plus faibles et les plus fortes luminances enregistrables."
      },
      {
       "terme": "AF continu",
       "def": "Mode d'autofocus qui recalcule la mise au point en permanence pour suivre un sujet mobile."
      },
      {
       "terme": "Stabilisation",
       "def": "Système qui compense les mouvements de l'appareil par déplacement de lentilles ou du capteur."
      }
     ]
    },
    {
     "id": "bpho-objectifs-filtres",
     "titre": "Les objectifs et les filtres",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Classer les objectifs selon leur focale et leur usage professionnel",
      "Lire les inscriptions d'un objectif et en déduire ses caractéristiques",
      "Comparer focales fixes et zooms, et choisir un objectif pour une commande",
      "Expliquer la lumière polarisée et l'action du filtre polarisant",
      "Calculer la compensation d'exposition d'un filtre neutre ou d'un multiplicateur de focale"
     ],
     "sections": [
      {
       "titre": "Classer les objectifs par focale",
       "contenu": "<p>Les objectifs se classent d'après leur angle de champ, donc d'après leur focale rapportée au format. Les valeurs ci-dessous concernent le plein format 24 × 36 ; pour un autre format, on applique le coefficient de conversion.</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Focales (plein format)</th><th>Angle diagonal</th><th>Usages typiques</th></tr></thead>\n<tbody>\n<tr><td>Fisheye</td><td>8 à 16 mm</td><td>jusqu'à 180°</td><td>effets, vues immersives, intérieurs exigus</td></tr>\n<tr><td>Ultra grand-angle</td><td>12 à 20 mm</td><td>environ 120° à 95°</td><td>architecture intérieure, paysage spectaculaire</td></tr>\n<tr><td>Grand-angle</td><td>24 à 35 mm</td><td>environ 84° à 63°</td><td>reportage, paysage, immobilier</td></tr>\n<tr><td>Standard</td><td>40 à 60 mm</td><td>environ 55° à 40°</td><td>usage général, reportage, nature morte</td></tr>\n<tr><td>Téléobjectif court</td><td>85 à 135 mm</td><td>environ 28° à 18°</td><td>portrait, détail, mode</td></tr>\n<tr><td>Téléobjectif</td><td>200 à 600 mm et plus</td><td>12° et moins</td><td>sport, animalier, spectacle</td></tr>\n</tbody>\n</table>\n<p>Le fisheye ne corrige pas la courbure des lignes : il donne une projection volontairement sphérique. Les grands-angles ordinaires, dits <strong>rectilinéaires</strong>, conservent les lignes droites, mais étirent les sujets placés dans les angles.</p>\n<p>On distingue aussi les objectifs <strong>macro</strong>, conçus pour atteindre un rapport de reproduction de 1:1 avec une excellente planéité de champ (souvent en 50, 60, 90, 100 mm), et les objectifs à <strong>décentrement et bascule</strong>, qui reproduisent à petite échelle les mouvements de la chambre.</p>"
      },
      {
       "titre": "Lire un objectif",
       "contenu": "<p>Les inscriptions d'un objectif se lisent de façon codifiée. Par exemple : « 24-70 mm 1:2,8 » ou « 70-300 mm f/4,5-5,6 » ou « 100 mm f/2,8 Macro IS ».</p>\n<ul>\n<li><strong>24-70 mm</strong> : plage de focales d'un <strong>zoom</strong> (une seule valeur pour une focale fixe).</li>\n<li><strong>1:2,8</strong> ou <strong>f/2,8</strong> : ouverture maximale. Une seule valeur pour un zoom signifie une <strong>ouverture constante</strong> sur toute la plage ; deux valeurs (f/4,5-5,6) signifient que l'ouverture maximale diminue quand on allonge la focale (<strong>ouverture glissante</strong>).</li>\n<li><strong>Macro</strong> : rapport de reproduction élevé, généralement 1:1.</li>\n<li>Sigles propres à chaque marque : stabilisation (IS, VR, OSS…), motorisation de l'autofocus, verres spéciaux (ED, asphériques), tropicalisation.</li>\n<li><strong>Diamètre de filetage</strong> (par exemple ⌀ 77 mm), qui détermine la taille des filtres vissants.</li>\n<li><strong>Distance minimale de mise au point</strong>, gravée ou indiquée sur la fiche technique, avec le rapport de reproduction maximal.</li>\n</ul>\n<p>Enfin, l'objectif doit correspondre à la <strong>monture</strong> du boîtier (système d'attache mécanique et électronique propre à chaque fabricant) et couvrir le <strong>format</strong> du capteur : un objectif conçu pour APS-C produit un fort vignetage, voire un cercle d'image visible, sur un plein format.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un zoom à ouverture glissante change d'exposition quand on zoome en mode manuel, et le flou d'arrière-plan maximal diminue en position longue. En studio, en vidéo ou en reportage de spectacle, on lui préfère un zoom à ouverture constante.</div>"
      },
      {
       "titre": "Focale fixe ou zoom : faire un choix argumenté",
       "contenu": "<p>Le choix d'un objectif découle de la commande : sujet, distance possible, lumière, rendu attendu, budget et poids transportable.</p>\n<table>\n<thead><tr><th>Critère</th><th>Focale fixe</th><th>Zoom</th></tr></thead>\n<tbody>\n<tr><td>Luminosité</td><td>souvent f/1,2 à f/2</td><td>généralement f/2,8 au mieux</td></tr>\n<tr><td>Piqué et distorsion</td><td>souvent meilleurs</td><td>excellents sur les modèles récents de haut de gamme</td></tr>\n<tr><td>Polyvalence</td><td>impose de se déplacer</td><td>recadrage sans changer de place ni d'objectif</td></tr>\n<tr><td>Poids et encombrement</td><td>léger individuellement</td><td>un zoom remplace plusieurs fixes</td></tr>\n<tr><td>Usages types</td><td>portrait, faible lumière, faible profondeur de champ</td><td>reportage, événementiel, mariage, voyage</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une configuration fréquente en mariage associe deux boîtiers : l'un avec un 24-70 mm f/2,8 pour les scènes de groupe et l'ambiance, l'autre avec un 70-200 mm f/2,8 pour la cérémonie, où l'on ne peut pas s'approcher. Une focale fixe lumineuse (35 mm ou 85 mm f/1,4) complète l'ensemble pour les portraits du couple et la soirée.</div>\n<p>Le <strong>multiplicateur de focale</strong> (téléconvertisseur), placé entre boîtier et objectif, allonge la focale (×1,4 ou ×2) mais réduit la luminosité d'autant : 1 IL pour un ×1,4, 2 IL pour un ×2. Un 300 mm f/4 devient un 420 mm f/5,6 avec un ×1,4.</p>"
      },
      {
       "titre": "La lumière polarisée et le filtre polarisant",
       "contenu": "<p>La lumière naturelle vibre dans toutes les directions perpendiculaires à sa direction de propagation. Après certaines réflexions (sur l'eau, le verre, une feuille vernie, une peinture) ou après diffusion par le ciel, elle vibre préférentiellement dans une direction : elle est <strong>polarisée</strong>.</p>\n<p>Un <strong>filtre polarisant</strong> ne laisse passer que la lumière qui vibre dans une direction donnée. En le faisant tourner sur sa monture, on peut donc éteindre une grande partie de la lumière polarisée, c'est-à-dire :</p>\n<ul>\n<li>atténuer ou supprimer les <strong>reflets</strong> sur l'eau, les vitres, les feuilles, les surfaces peintes ou vernies (pas sur le métal nu, dont la réflexion ne polarise pas la lumière) ;</li>\n<li>assombrir un <strong>ciel bleu</strong> et faire ressortir les nuages, avec un effet maximal dans la direction perpendiculaire au soleil ;</li>\n<li>augmenter la <strong>saturation</strong> des couleurs en supprimant le voile de reflets.</li>\n</ul>\n<p>Sur les appareils à autofocus et à mesure par l'objectif, on utilise un polarisant <strong>circulaire</strong>. Il absorbe environ 1,5 à 2 IL, compensés automatiquement par la cellule.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> éliminer un reflet sur une vitrine. 1) Se placer de biais par rapport à la vitre : l'effet du polarisant est maximal pour un angle d'incidence d'environ 55° avec la normale au verre (angle de Brewster) et devient nul face à la vitre. 2) Visser le filtre et le faire tourner lentement en observant le viseur. 3) S'arrêter quand le reflet est minimal. 4) Vérifier l'exposition, réduite par le filtre. En studio, pour supprimer les reflets d'un tableau, on place aussi des filtres polarisants devant les sources : c'est la <strong>polarisation croisée</strong>.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> avec un ultra grand-angle, le polarisant assombrit le ciel de manière inégale (bande sombre au milieu du ciel), car l'angle par rapport au soleil varie fortement dans le champ.</div>"
      },
      {
       "titre": "Filtres neutres, dégradés et de protection",
       "contenu": "<p>Les <strong>filtres gris neutres</strong> (ND, <em>neutral density</em>) réduisent la quantité de lumière sans modifier les couleurs. Ils permettent d'allonger le temps de pose (filer l'eau ou les nuages, effacer les passants) ou d'ouvrir le diaphragme en plein soleil (portrait à f/1,4, vidéo à temps de pose imposé).</p>\n<p>Ils sont désignés de deux façons : par leur <strong>facteur</strong> (ND8 divise la lumière par 8) ou par leur <strong>densité optique</strong> (0,9). Une densité de 0,3 correspond à 1 IL.</p>\n<table>\n<thead><tr><th>Désignation par facteur</th><th>Densité</th><th>Atténuation</th></tr></thead>\n<tbody>\n<tr><td>ND2</td><td>0,3</td><td>1 IL</td></tr>\n<tr><td>ND4</td><td>0,6</td><td>2 IL</td></tr>\n<tr><td>ND8</td><td>0,9</td><td>3 IL</td></tr>\n<tr><td>ND64</td><td>1,8</td><td>6 IL</td></tr>\n<tr><td>ND1000</td><td>3,0</td><td>environ 10 IL</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un temps de pose avec un ND1000. Mesure sans filtre : 1/60 s à f/11. 1) Le filtre retire 10 IL, soit une lumière divisée par environ 1 000. 2) Nouveau temps : 1/60 × 1 000 ≈ 16,7 s. 3) On arrondit à 15 s ou on choisit 16 s en mode pose B avec un déclencheur à distance. 4) On compose et fait la mise au point avant de visser le filtre, presque opaque à l'œil.</div>\n<p>Les <strong>filtres dégradés</strong> (GND) sont sombres sur une moitié et transparents sur l'autre ; ils équilibrent un ciel lumineux et un sol sombre en paysage. Ils sont aujourd'hui souvent remplacés par le bracketing d'exposition et la fusion au développement, sauf quand le sujet bouge.</p>\n<p>Le filtre <strong>UV ou de protection</strong> n'a presque plus d'effet optique sur un capteur numérique ; il protège la lentille frontale des projections, mais un filtre de mauvaise qualité dégrade le contraste et provoque des reflets parasites. Le <strong>pare-soleil</strong>, lui, est toujours utile : il supprime la lumière parasite qui voile l'image.</p>\n<p>L'entretien des optiques fait partie du métier : poussières chassées à la poire soufflante avant tout contact, nettoyage des lentilles avec un liquide adapté et un chiffon microfibre propre, bouchons avant et arrière remis dès que l'objectif est démonté, rangement au sec avec des sachets déshydratants pour éviter les moisissures. Le capteur, lui, se nettoie avec la fonction de vibration du boîtier, puis à la poire ; un nettoyage par contact se fait avec des outils spécifiques, sinon par un service technique.</p>"
      }
     ],
     "points_cles": [
      "En plein format : grand-angle 24-35 mm, standard 40-60 mm, téléobjectif court 85-135 mm, téléobjectif au-delà.",
      "Une seule ouverture inscrite sur un zoom signifie une ouverture constante.",
      "Un objectif doit correspondre à la monture et couvrir le format du capteur.",
      "Multiplicateur ×1,4 : −1 IL ; ×2 : −2 IL.",
      "Le polarisant supprime les reflets non métalliques et assombrit le ciel à 90° du soleil ; il retire 1,5 à 2 IL.",
      "La polarisation croisée (sources et objectif filtrés) supprime les reflets en reproduction d'œuvres.",
      "Filtre ND : densité 0,3 = 1 IL ; ND1000 ≈ 10 IL.",
      "Le pare-soleil améliore toujours le contraste en supprimant la lumière parasite."
     ],
     "lexique": [
      {
       "terme": "Rectilinéaire",
       "def": "Qualifie un objectif qui conserve les lignes droites de la scène."
      },
      {
       "terme": "Zoom",
       "def": "Objectif à focale variable."
      },
      {
       "terme": "Ouverture constante",
       "def": "Ouverture maximale identique sur toute la plage de focales d'un zoom."
      },
      {
       "terme": "Monture",
       "def": "Système d'attache mécanique et électronique entre objectif et boîtier, propre à chaque fabricant."
      },
      {
       "terme": "Multiplicateur de focale",
       "def": "Groupe optique placé entre boîtier et objectif qui allonge la focale et réduit la luminosité."
      },
      {
       "terme": "Lumière polarisée",
       "def": "Lumière qui vibre préférentiellement dans une seule direction."
      },
      {
       "terme": "Polarisation croisée",
       "def": "Technique associant des filtres polarisants sur les sources et sur l'objectif pour supprimer les reflets."
      },
      {
       "terme": "Filtre gris neutre",
       "def": "Filtre qui réduit la lumière sans modifier les couleurs."
      },
      {
       "terme": "Densité optique",
       "def": "Mesure logarithmique de l'atténuation d'un filtre ; 0,3 correspond à 1 IL."
      },
      {
       "terme": "Pare-soleil",
       "def": "Accessoire qui empêche la lumière parasite d'atteindre la lentille frontale."
      }
     ]
    },
    {
     "id": "bpho-sources-flash",
     "titre": "Sources de lumière, flashs et façonneurs",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Comparer les sources continues et les flashs selon leurs caractéristiques techniques",
      "Calculer une ouverture à partir du nombre guide d'un flash",
      "Décrire les modes d'un flash de reportage (TTL, manuel, synchronisation, haute vitesse)",
      "Choisir un façonneur de lumière en fonction de la qualité de lumière recherchée",
      "Appliquer les règles de sécurité liées au matériel d'éclairage"
     ],
     "sections": [
      {
       "titre": "Les sources continues",
       "contenu": "<p>Une <strong>source continue</strong> éclaire en permanence : on voit directement l'effet produit, ce qui facilite l'apprentissage et rend la source indispensable en vidéo.</p>\n<table>\n<thead><tr><th>Source</th><th>Température de couleur</th><th>Avantages</th><th>Inconvénients</th></tr></thead>\n<tbody>\n<tr><td>Halogène (tungstène)</td><td>3 200 K</td><td>spectre continu, excellent rendu des couleurs, faible coût</td><td>forte chaleur, consommation élevée, rendement faible</td></tr>\n<tr><td>Tubes fluorescents de studio</td><td>3 200 ou 5 600 K selon les tubes</td><td>lumière douce, peu de chaleur</td><td>risque de dominante verte, encombrement</td></tr>\n<tr><td>LED</td><td>fixe, bicolore (réglable environ de 3 200 à 5 600 K) ou couleur RVB</td><td>faible chaleur, faible consommation, fonctionnement sur batterie, réglage précis</td><td>qualité de spectre très variable selon les modèles (vérifier IRC et TLCI)</td></tr>\n<tr><td>HMI (lampe à iodures métalliques)</td><td>environ 5 600 K</td><td>très forte puissance, équivalent lumière du jour</td><td>prix, ballast nécessaire, temps de chauffe</td></tr>\n</tbody>\n</table>\n<p>Pour la photographie fixe, une source continue impose souvent une sensibilité élevée ou un temps de pose long, car sa puissance utile reste très inférieure à celle d'un flash. Elle est en revanche idéale pour les sujets réfléchissants (on voit les reflets), pour la vidéo et pour le travail hybride photo-vidéo.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> certaines LED et tubes pilotés par variateur produisent un scintillement invisible à l'œil mais qui crée des bandes sur l'image avec l'obturateur électronique ou en vidéo. On le vérifie toujours par un essai à plusieurs temps de pose.</div>"
      },
      {
       "titre": "Le flash de reportage et le nombre guide",
       "contenu": "<p>Le <strong>flash de reportage</strong> (ou flash cobra), fixé sur la griffe de l'appareil ou déporté, produit un éclair très bref (de l'ordre du millième de seconde ou moins) d'une température de couleur proche de la lumière du jour.</p>\n<p>Sa puissance est exprimée par le <strong>nombre guide</strong> (NG), donné pour 100 ISO, en mètres, et pour une position de zoom de la tête indiquée par le fabricant :</p>\n<p><strong>NG = d × N</strong> donc <strong>N = NG / d</strong></p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une ouverture au flash en mode manuel. Données : flash de NG 40 (100 ISO, m), sujet à 5 m, appareil réglé à 100 ISO. 1) N = 40 / 5 = 8 : on règle f/8. 2) Le sujet se trouve finalement à 7 m : N = 40 / 7 ≈ 5,7, on règle f/5,6. 3) On passe à 400 ISO (+2 IL) : le nombre guide est multiplié par 2 (racine carrée de 4), soit NG 80. À 7 m : N = 80 / 7 ≈ 11, on règle f/11. 4) On vérifie sur l'histogramme : le nombre guide est une valeur mesurée par le fabricant dans des conditions idéales, souvent optimiste en intérieur sombre ou en extérieur sans murs réfléchissants.</div>\n<p>Les modes du flash :</p>\n<ul>\n<li><strong>TTL</strong> (<em>through the lens</em>) : un pré-éclair est mesuré à travers l'objectif et le flash dose automatiquement sa puissance. Une <strong>correction d'exposition au flash</strong> permet d'en ajuster l'intensité (par exemple −1 IL en débouchage).</li>\n<li><strong>Manuel</strong> : la puissance est fixée par l'opérateur (1/1, 1/2, 1/4… jusqu'à 1/128), chaque division par deux correspondant à 1 IL. Résultat constant d'une vue à l'autre.</li>\n<li><strong>Synchronisation sur le second rideau</strong> : l'éclair intervient à la fin de la pose, ce qui place la traînée de mouvement derrière le sujet.</li>\n<li><strong>Synchronisation haute vitesse</strong> (HSS) : permet de dépasser la vitesse de synchronisation au prix d'une puissance fortement réduite.</li>\n</ul>\n<p>Un flash utilisé en direct, dans l'axe de l'objectif, donne une lumière plate et dure, avec une ombre portée derrière le sujet et un risque d'yeux rouges. On l'améliore en l'orientant vers un plafond ou un mur clair (<strong>flash indirect</strong>), en le déportant hors de l'appareil, ou en l'utilisant en <strong>débouchage</strong> (lumière d'appoint) à puissance réduite face à une lumière principale naturelle.</p>"
      },
      {
       "titre": "Le flash de studio",
       "contenu": "<p>En studio, on utilise des flashs plus puissants, de deux types :</p>\n<ul>\n<li>la <strong>torche autonome</strong> (monobloc), qui réunit dans un même boîtier l'alimentation et la tête ;</li>\n<li>le <strong>générateur</strong> relié à plusieurs <strong>torches</strong> par des câbles, qui permet une puissance plus élevée et un pilotage centralisé.</li>\n</ul>\n<p>Leur puissance est exprimée en <strong>joules</strong> (J, ou watts-seconde Ws) : 250, 500, 1 000 J, etc. Ce chiffre indique l'énergie stockée, pas la lumière réellement produite, qui dépend aussi du réflecteur et du rendement du flash. Pour comparer deux flashs, on se fie plutôt à l'ouverture obtenue à une distance donnée avec un réflecteur standard.</p>\n<p>Caractéristiques à connaître :</p>\n<ul>\n<li>la <strong>plage de réglage</strong> de puissance (par exemple sur 9 ou 10 IL, par pas de 1/10 d'IL) ;</li>\n<li>la <strong>lampe pilote</strong>, source continue placée au centre du tube, qui permet de prévisualiser l'éclairage ;</li>\n<li>le <strong>temps de recyclage</strong>, délai nécessaire pour recharger les condensateurs entre deux éclairs ;</li>\n<li>la <strong>durée de l'éclair</strong>, exprimée en t0,5 ou en t0,1 (durée pendant laquelle l'intensité est supérieure à 50 % ou à 10 % du maximum) : un éclair court fige les projections de liquide ou les cheveux en mouvement ;</li>\n<li>la <strong>stabilité de couleur</strong> d'un éclair à l'autre, essentielle en série de packshots ;</li>\n<li>le <strong>déclenchement</strong> : câble de synchronisation, cellule photoélectrique (asservissement à un autre flash) ou, le plus souvent, émetteur radio fixé sur l'appareil.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en studio au flash, c'est l'<strong>ouverture</strong> qui règle l'exposition de l'éclair (et la puissance du flash). Le temps de pose, tant qu'il reste inférieur ou égal à la vitesse de synchronisation, n'agit que sur la lumière ambiante (lampes pilotes, lumière du jour).</div>"
      },
      {
       "titre": "Les façonneurs de lumière",
       "contenu": "<p>Un <strong>façonneur</strong> modifie la forme, la direction et la qualité de la lumière d'une source. La règle fondamentale est la suivante : plus la source est <strong>grande par rapport au sujet</strong> (et donc plus elle est proche), plus la lumière est <strong>douce</strong> (ombres progressives, peu de contraste) ; plus elle est petite ou éloignée, plus la lumière est <strong>dure</strong> (ombres nettes, fort contraste).</p>\n<table>\n<thead><tr><th>Façonneur</th><th>Qualité de lumière</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Réflecteur standard</td><td>dure, faisceau large</td><td>éclairage de fond, effets</td></tr>\n<tr><td>Nid d'abeille (grille)</td><td>resserre le faisceau, limite les débordements</td><td>contre-jour sur les cheveux, tache de lumière sur le fond</td></tr>\n<tr><td>Snoot (cône)</td><td>faisceau très étroit</td><td>accent sur un détail</td></tr>\n<tr><td>Beauty dish (bol beauté)</td><td>intermédiaire, ombres définies mais modelées</td><td>portrait beauté, maquillage</td></tr>\n<tr><td>Boîte à lumière carrée ou rectangulaire</td><td>douce, bords maîtrisés</td><td>portrait, nature morte, packshot</td></tr>\n<tr><td>Octabox</td><td>douce, reflet rond dans les yeux</td><td>portrait, mode</td></tr>\n<tr><td>Strip box (boîte allongée)</td><td>douce, en bande</td><td>reflets linéaires sur les bouteilles, liserés</td></tr>\n<tr><td>Parapluie (réflexion ou diffusion)</td><td>douce, peu dirigée</td><td>éclairage rapide et large, groupes</td></tr>\n<tr><td>Réflecteur pliable, panneau blanc</td><td>renvoie la lumière</td><td>débouchage des ombres</td></tr>\n<tr><td>Drapeau noir, coupe-flux</td><td>retire de la lumière</td><td>ajouter du contraste, protéger l'objectif</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour photographier une bouteille de vin, un studio utilise deux strip boxes placées de part et d'autre, légèrement en arrière, pour dessiner un liseré lumineux sur chaque bord du verre ; un panneau noir derrière la bouteille et des drapeaux pour supprimer les reflets parasites ; puis une petite source avec nid d'abeille pour faire ressortir l'étiquette.</div>"
      },
      {
       "titre": "Mesurer et travailler en sécurité",
       "contenu": "<p>L'éclairage au flash se mesure avec un <strong>flashmètre</strong> (posemètre capable de mesurer un éclair), utilisé en lumière incidente, calotte blanche dirigée vers l'appareil ou vers la source mesurée. On mesure chaque source séparément (les autres éteintes) pour régler les <strong>rapports d'éclairage</strong>, puis l'ensemble.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> régler un écart d'un diaphragme entre lumière principale et débouchage en portrait. 1) Placer la lumière principale et la mesurer seule : f/11. 2) Placer la lumière de débouchage côté ombre et la mesurer seule : on vise 1 IL de moins, soit f/8. 3) Ajuster la puissance du débouchage jusqu'à lire f/8. 4) Allumer les deux sources et mesurer côté éclairé : la valeur augmente légèrement (quelques dixièmes de diaphragme) car les deux lumières s'additionnent. 5) Régler l'appareil sur cette mesure d'ensemble, à la vitesse de synchronisation ou en dessous, 100 ISO, puis contrôler sur l'écran et l'histogramme.</div>\n<p>La sécurité fait partie de la compétence professionnelle :</p>\n<ul>\n<li><strong>Risque électrique</strong> : les générateurs et les torches contiennent des condensateurs qui restent chargés après l'arrêt. On ne démonte jamais une tête, on débranche avant de changer un tube ou une lampe pilote, on vérifie l'état des câbles et on évite les multiprises surchargées.</li>\n<li><strong>Risque de brûlure et d'incendie</strong> : lampes halogènes et lampes pilotes chauffent fortement ; on ne pose pas de gélatine ou de tissu directement dessus et on laisse refroidir avant de ranger.</li>\n<li><strong>Chute de matériel</strong> : pieds lestés par des sacs de sable, perches et girafes équilibrées par un contrepoids, câbles fixés au sol ou signalés.</li>\n<li><strong>Éblouissement</strong> : prévenir le modèle avant les éclairs, en particulier les enfants, et ne pas déclencher un flash puissant à très courte distance des yeux.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un tournage ou une prise de vue en extérieur, les batteries au lithium des flashs et des panneaux LED doivent être transportées, chargées et stockées selon les consignes du fabricant ; une batterie gonflée ou chaude est retirée du service.</div>"
      }
     ],
     "points_cles": [
      "Sources continues : halogène 3 200 K, LED bicolore ou RVB, HMI 5 600 K ; vérifier IRC et scintillement.",
      "Nombre guide : NG = d × N, donné à 100 ISO ; quadrupler la sensibilité double le NG.",
      "TTL : dosage automatique avec correction possible ; manuel : résultat constant, réglage par puissance.",
      "La puissance d'un flash de studio s'exprime en joules ; elle ne suffit pas à comparer la lumière produite.",
      "En studio au flash, l'ouverture règle l'éclair ; le temps de pose agit sur la lumière ambiante.",
      "Plus la source est grande par rapport au sujet, plus la lumière est douce.",
      "Le flashmètre en lumière incidente permet de régler source par source les rapports d'éclairage.",
      "Risques : condensateurs chargés, brûlures, chute de pieds, éblouissement, batteries lithium."
     ],
     "lexique": [
      {
       "terme": "Source continue",
       "def": "Éclairage permanent, dont l'effet est visible avant la prise de vue."
      },
      {
       "terme": "Nombre guide",
       "def": "Indice de puissance d'un flash égal au produit de la distance par le nombre d'ouverture, pour 100 ISO."
      },
      {
       "terme": "TTL",
       "def": "Mode de mesure du flash à travers l'objectif, par pré-éclair."
      },
      {
       "terme": "Flash indirect",
       "def": "Éclair dirigé vers une surface réfléchissante qui renvoie une lumière plus douce."
      },
      {
       "terme": "Générateur",
       "def": "Alimentation de studio qui stocke l'énergie et la distribue à plusieurs torches."
      },
      {
       "terme": "Lampe pilote",
       "def": "Source continue intégrée à une tête de flash pour prévisualiser l'éclairage."
      },
      {
       "terme": "Temps de recyclage",
       "def": "Délai de recharge d'un flash entre deux éclairs."
      },
      {
       "terme": "Façonneur",
       "def": "Accessoire qui modifie la forme, la direction et la douceur de la lumière d'une source."
      },
      {
       "terme": "Débouchage",
       "def": "Lumière d'appoint qui éclaircit les ombres créées par la lumière principale."
      },
      {
       "terme": "Flashmètre",
       "def": "Posemètre capable de mesurer la lumière d'un éclair."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Les techniques de prise de vue",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpho-mesure-lumiere-histogramme",
     "titre": "Mesurer la lumière : cellule, posemètre, histogramme et sensitométrie",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Distinguer mesure en lumière réfléchie et mesure en lumière incidente",
      "Choisir un mode de mesure et un mode d'exposition adaptés à la situation",
      "Corriger l'exposition face à un sujet très clair ou très sombre",
      "Tracer et interpréter une courbe caractéristique",
      "Lire un histogramme et en déduire une correction"
     ],
     "sections": [
      {
       "titre": "Lumière réfléchie et lumière incidente",
       "contenu": "<p>Il existe deux façons de mesurer la lumière pour déterminer l'exposition.</p>\n<p>La <strong>mesure en lumière réfléchie</strong> évalue la luminance du sujet, c'est-à-dire la lumière qu'il renvoie vers l'appareil. C'est le principe de la cellule intégrée au boîtier. Elle est pratique, mais elle repose sur une hypothèse : la scène mesurée est supposée renvoyer en moyenne 18 % de la lumière (gris moyen). La cellule propose donc toujours un réglage qui rendrait la zone mesurée gris moyen.</p>\n<p>La <strong>mesure en lumière incidente</strong> évalue l'éclairement reçu par le sujet, à l'aide d'un <strong>posemètre</strong> à calotte blanche placé à la position du sujet, calotte dirigée vers l'appareil. Elle ne dépend pas de la couleur ni de la clarté du sujet : un mannequin en robe blanche et un autre en costume noir reçoivent la même mesure s'ils sont éclairés de la même façon, et chacun sera rendu avec sa vraie valeur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en lumière réfléchie, une scène de neige ou une robe de mariée qui remplit le cadre conduit à une image <strong>sous-exposée</strong> (la neige devient grise) ; un sujet noir sur fond noir conduit à une image <strong>surexposée</strong>. Il faut corriger : environ +1 à +2 IL pour un sujet très clair, −1 à −2 IL pour un sujet très sombre, ou mesurer en lumière incidente.</div>\n<p>Une alternative en lumière réfléchie consiste à mesurer une <strong>carte grise à 18 %</strong> placée dans la lumière du sujet : elle remplace le sujet par une surface conforme à l'hypothèse de la cellule.</p>"
      },
      {
       "titre": "Modes de mesure et modes d'exposition",
       "contenu": "<p>La cellule de l'appareil propose plusieurs <strong>modes de mesure</strong>, qui diffèrent par la zone du cadre prise en compte :</p>\n<table>\n<thead><tr><th>Mode de mesure</th><th>Zone mesurée</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Matricielle (évaluative, multizone)</td><td>tout le cadre découpé en zones, analysé par l'appareil, souvent en lien avec le point d'autofocus</td><td>situations courantes, reportage rapide</td></tr>\n<tr><td>Pondérée centrale</td><td>tout le cadre, avec une forte prépondérance du centre</td><td>portrait centré, habitudes argentiques</td></tr>\n<tr><td>Spot (ponctuelle)</td><td>une très petite zone (1 à 5 % du cadre)</td><td>contre-jour, spectacle, mesure précise d'une zone choisie</td></tr>\n</tbody>\n</table>\n<p>Les <strong>modes d'exposition</strong> déterminent qui choisit l'ouverture et le temps de pose :</p>\n<ul>\n<li><strong>M (manuel)</strong> : le photographe règle tout ; l'exposition reste fixe même si le cadrage change. Indispensable en studio au flash, en panoramique, en série de packshots.</li>\n<li><strong>A ou Av (priorité ouverture)</strong> : le photographe choisit l'ouverture (donc la profondeur de champ), l'appareil calcule le temps de pose. Mode le plus utilisé en portrait et en paysage.</li>\n<li><strong>S ou Tv (priorité vitesse)</strong> : le photographe choisit le temps de pose (figer ou filer), l'appareil calcule l'ouverture. Sport, animalier.</li>\n<li><strong>P (programme)</strong> : l'appareil choisit un couple, que l'on peut décaler.</li>\n</ul>\n<p>Dans les modes automatiques, la <strong>correction d'exposition</strong> (bouton ±) décale le résultat proposé par la cellule. La <strong>mémorisation d'exposition</strong> (AE-L) permet de mesurer une zone puis de recadrer. Le <strong>bracketing</strong> réalise automatiquement plusieurs vues encadrant l'exposition (par exemple −1, 0, +1 IL), utiles en cas de doute ou pour une fusion HDR.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en reportage dans une salle de spectacle, la scène est éclairée par des projecteurs et la salle est noire. La mesure matricielle surexpose les visages des artistes. Le photographe passe en mesure spot sur le visage, ou en mode manuel après une première mesure, et contrôle les hautes lumières sur l'écran.</div>"
      },
      {
       "titre": "La sensitométrie et la courbe caractéristique",
       "contenu": "<p>La <strong>sensitométrie</strong> étudie la réponse d'une surface sensible à la lumière. Elle se représente par une <strong>courbe caractéristique</strong> :</p>\n<ul>\n<li>en abscisse, le <strong>logarithme de la lumination</strong> (log H), c'est-à-dire la quantité de lumière reçue (éclairement × temps), sur une échelle logarithmique où un pas de 0,3 correspond à 1 IL ;</li>\n<li>en ordonnée, la <strong>densité</strong> obtenue (noircissement d'un film) ou, en numérique, la valeur du signal ou du niveau de pixel.</li>\n</ul>\n<p>Pour un film argentique négatif, la courbe a une forme en S allongé :</p>\n<ol>\n<li>le <strong>voile de base</strong> : densité minimale même sans lumière ;</li>\n<li>le <strong>pied</strong> : zone de faible pente, où les ombres sont enregistrées avec peu de séparation ;</li>\n<li>la <strong>partie rectiligne</strong> : zone où les écarts de lumière sont fidèlement traduits en écarts de densité ; sa pente est le <strong>gamma</strong> (contraste) ;</li>\n<li>l'<strong>épaule</strong> : zone où les hautes lumières se tassent progressivement.</li>\n</ol>\n<p>Un capteur numérique a une réponse différente : il est presque <strong>linéaire</strong> (deux fois plus de lumière donne deux fois plus de signal) jusqu'à la <strong>saturation</strong> des photosites, au-delà de laquelle toute information est perdue (blanc pur). Il n'a pas d'épaule douce : une haute lumière brûlée est irrécupérable, alors qu'une ombre sous-exposée conserve de l'information, accompagnée de bruit. L'appareil ou le logiciel applique ensuite une courbe de tons pour obtenir un rendu agréable.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> interpréter une courbe caractéristique fournie. 1) Repérer les axes et leurs unités. 2) Situer le voile, le pied, la partie rectiligne et l'épaule. 3) Calculer le gamma : pente de la partie rectiligne, par exemple une montée de densité de 0,6 pour un écart de log H de 1,0 donne γ = 0,6. 4) Mesurer la latitude utile : largeur, en log H, de la zone exploitable, puis la convertir en IL en divisant par 0,3 (1,8 / 0,3 = 6 IL). 5) Conclure : un gamma élevé donne un rendu contrasté, une large latitude tolère mieux les erreurs d'exposition.</div>"
      },
      {
       "titre": "Lire un histogramme",
       "contenu": "<p>L'<strong>histogramme</strong> est la représentation graphique de la répartition des pixels selon leur luminosité. En abscisse, les niveaux de 0 (noir) à 255 (blanc) pour une image codée sur 8 bits ; en ordonnée, le nombre de pixels de chaque niveau. Il s'affiche sur l'écran de l'appareil, dans le viseur électronique et dans les logiciels de traitement, globalement ou par couche rouge, verte et bleue.</p>\n<table>\n<thead><tr><th>Forme observée</th><th>Interprétation</th><th>Action</th></tr></thead>\n<tbody>\n<tr><td>Courbe tassée à gauche, « coupée » contre le bord</td><td>sous-exposition, ombres bouchées</td><td>augmenter l'exposition, sauf intention de silhouette</td></tr>\n<tr><td>Courbe tassée à droite, pic contre le bord droit</td><td>surexposition, hautes lumières brûlées</td><td>réduire l'exposition</td></tr>\n<tr><td>Courbe étroite au centre</td><td>image peu contrastée (brume, lumière diffuse)</td><td>normal si voulu ; sinon renforcer le contraste au traitement</td></tr>\n<tr><td>Courbe touchant les deux bords</td><td>contraste de la scène supérieur à la plage dynamique</td><td>déboucher les ombres, bracketing, ou choisir quoi sacrifier</td></tr>\n<tr><td>Une seule couche coupée à droite</td><td>saturation d'une couleur (ciel bleu, rouge vif)</td><td>réduire légèrement l'exposition ou la saturation</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> il n'existe pas d'histogramme idéal. Une scène de neige doit avoir un histogramme décalé à droite ; un portrait en clair-obscur, un histogramme décalé à gauche. On vérifie surtout qu'aucune zone importante n'est écrêtée, aidé par l'alerte de surexposition (zones clignotantes).</div>\n<p>En fichier brut, une technique consiste à <strong>exposer à droite</strong> : exposer le plus possible sans écrêter les hautes lumières importantes, puis assombrir au développement. On place ainsi plus d'information dans la partie riche du signal et l'on réduit le bruit dans les ombres. Attention : l'histogramme affiché par l'appareil est calculé sur l'aperçu JPEG, légèrement plus prudent que le fichier brut.</p>"
      },
      {
       "titre": "Exposer en lumière naturelle et en extérieur",
       "contenu": "<p>En extérieur, le photographe ne contrôle pas la source, mais il choisit le moment, l'orientation du sujet et les moyens de corriger.</p>\n<ul>\n<li><strong>Plein soleil haut</strong> (milieu de journée) : lumière dure, ombres verticales sous les yeux, contraste souvent supérieur à la plage dynamique. On cherche l'ombre, on place le sujet dos au soleil, on utilise un diffuseur ou un débouchage.</li>\n<li><strong>Heure dorée</strong> (peu après le lever ou avant le coucher du soleil) : lumière rasante, chaude et douce, ombres longues qui révèlent les reliefs.</li>\n<li><strong>Heure bleue</strong> (juste après le coucher du soleil) : ciel encore lumineux et bleu profond, qui équilibre les éclairages artificiels urbains.</li>\n<li><strong>Ciel couvert</strong> : grande source diffuse, idéale pour le portrait et les couleurs saturées, mais lumière froide (corriger la balance des blancs).</li>\n<li><strong>Contre-jour</strong> : silhouette si l'on expose pour le ciel ; détail du sujet si l'on expose pour lui, avec un ciel brûlé, sauf débouchage au flash ou au réflecteur.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> équilibrer un contre-jour au flash de débouchage. 1) Mesurer et régler l'exposition pour le fond (ciel, paysage) en mode manuel : par exemple f/8 à 1/200 s à 100 ISO, en restant à la vitesse de synchronisation ou en dessous. 2) Régler le flash en TTL avec une correction de −1 à −1,7 IL, ou en manuel par le nombre guide (N = NG / d). 3) Faire un essai : le visage doit paraître naturellement éclairé, sans aspect « flashé ». 4) Si le fond est trop clair, réduire le temps de pose ou fermer, puis recompenser la puissance du flash.</div>\n<p>La <strong>règle du f/16 ensoleillé</strong> et la lecture de l'histogramme permettent de contrôler rapidement que la mesure de la cellule n'est pas faussée par une grande zone claire ou sombre.</p>"
      }
     ],
     "points_cles": [
      "La cellule mesure la lumière réfléchie et ramène la zone mesurée au gris moyen à 18 %.",
      "Le posemètre en lumière incidente mesure l'éclairement, indépendamment de la clarté du sujet.",
      "Sujet très clair : corriger vers le plus ; sujet très sombre : corriger vers le moins.",
      "Mesure matricielle pour le courant, pondérée centrale pour un sujet centré, spot pour une zone précise.",
      "Modes M, A (priorité ouverture), S (priorité vitesse), P ; correction, mémorisation et bracketing.",
      "Courbe caractéristique : voile, pied, partie rectiligne (gamma), épaule ; 0,3 en log H = 1 IL.",
      "Le capteur numérique est linéaire jusqu'à la saturation : une haute lumière brûlée est perdue.",
      "L'histogramme se lit selon la scène ; on vérifie surtout l'absence d'écrêtage des zones importantes.",
      "En extérieur, on choisit le moment, l'orientation et les moyens de débouchage."
     ],
     "lexique": [
      {
       "terme": "Lumière réfléchie",
       "def": "Lumière renvoyée par le sujet vers l'appareil, mesurée par la cellule."
      },
      {
       "terme": "Lumière incidente",
       "def": "Lumière reçue par le sujet, mesurée au posemètre à calotte."
      },
      {
       "terme": "Mesure spot",
       "def": "Mesure limitée à une très petite zone du cadre."
      },
      {
       "terme": "Correction d'exposition",
       "def": "Décalage volontaire, en IL, de l'exposition calculée par l'appareil."
      },
      {
       "terme": "Bracketing",
       "def": "Série automatique de vues à expositions décalées."
      },
      {
       "terme": "Courbe caractéristique",
       "def": "Graphique de la réponse d'une surface sensible en fonction du logarithme de la lumination."
      },
      {
       "terme": "Gamma",
       "def": "Pente de la partie rectiligne de la courbe caractéristique, qui exprime le contraste."
      },
      {
       "terme": "Histogramme",
       "def": "Graphique de répartition des pixels selon leur niveau de luminosité."
      },
      {
       "terme": "Écrêtage",
       "def": "Perte d'information dans les noirs ou les blancs, visible contre les bords de l'histogramme."
      },
      {
       "terme": "Exposer à droite",
       "def": "Technique consistant à exposer au maximum sans brûler les hautes lumières utiles, puis à corriger au développement."
      }
     ]
    },
    {
     "id": "bpho-eclairage-studio-objets",
     "titre": "Éclairer en studio : volume, matière, objets brillants et transparents",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Nommer le rôle de chaque source dans un dispositif d'éclairage",
      "Représenter un éclairage par un schéma normalisé vu de dessus",
      "Choisir la direction et la qualité de lumière pour révéler un volume ou une matière",
      "Mettre en œuvre les techniques d'éclairage des objets brillants et transparents",
      "Réaliser un packshot sur fond blanc conforme aux exigences d'un site marchand"
     ],
     "sections": [
      {
       "titre": "Le rôle de chaque source",
       "contenu": "<p>Un éclairage de studio se construit <strong>source par source</strong>, chacune ayant une fonction précise. Le vocabulaire est le même en nature morte, en portrait et en vidéo.</p>\n<table>\n<thead><tr><th>Source</th><th>Fonction</th><th>Position habituelle</th></tr></thead>\n<tbody>\n<tr><td>Lumière principale (clé)</td><td>donne la direction dominante, crée le modelé et les ombres</td><td>de côté et en hauteur, souvent entre 30° et 60° de l'axe</td></tr>\n<tr><td>Débouchage</td><td>éclaircit les ombres sans créer d'ombres nouvelles</td><td>près de l'axe de l'objectif ou côté opposé à la principale ; souvent un simple réflecteur</td></tr>\n<tr><td>Contre-jour (ou lumière de découpe)</td><td>détache le sujet du fond par un liseré lumineux</td><td>derrière le sujet, opposée à l'appareil</td></tr>\n<tr><td>Lumière de fond</td><td>règle la valeur et le dégradé du fond</td><td>derrière le sujet, dirigée vers le fond</td></tr>\n<tr><td>Lumière d'effet (accent)</td><td>met en valeur un détail (étiquette, texture, cheveux)</td><td>variable, souvent avec snoot ou nid d'abeille</td></tr>\n</tbody>\n</table>\n<p>Le <strong>rapport d'éclairage</strong>, écart en diaphragmes entre la zone éclairée par la principale et la zone d'ombre, détermine le contraste : 1 IL donne un rendu doux et commercial, 2 à 3 IL un rendu plus dramatique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> construire un éclairage. 1) Analyser le sujet (forme, matière, couleur, brillance) et l'intention (catalogue neutre, ambiance, luxe). 2) Placer l'appareil et cadrer : le point de vue détermine ce qui se reflète. 3) Allumer seulement la principale et la placer jusqu'à obtenir le modelé voulu. 4) Ajouter le débouchage et régler le rapport au flashmètre. 5) Ajouter contre-jour, fond, accents, un par un, en vérifiant à chaque fois l'image. 6) Retirer toute source qui ne sert à rien. 7) Noter le dispositif sur un schéma d'éclairage pour pouvoir le reproduire.</div>"
      },
      {
       "titre": "Le schéma d'éclairage",
       "contenu": "<p>Le <strong>schéma d'éclairage</strong> est un plan vu de dessus du plateau de prise de vue. Il permet de préparer une séance, de la reproduire à l'identique (série de produits, campagne en plusieurs jours) et de communiquer avec un assistant. Il est demandé à l'épreuve écrite et dans le dossier de projet.</p>\n<p>Il comporte :</p>\n<ul>\n<li>le <strong>sujet</strong>, au centre, avec son orientation ;</li>\n<li>l'<strong>appareil</strong>, symbolisé avec son axe de visée, et la focale utilisée ;</li>\n<li>chaque <strong>source</strong>, avec son façonneur (boîte à lumière dessinée par un rectangle, parapluie par un arc, nid d'abeille, snoot…), sa direction (flèche) et sa hauteur indiquée en note ;</li>\n<li>les <strong>réflecteurs, drapeaux, diffuseurs</strong> ;</li>\n<li>le <strong>fond</strong> et sa distance au sujet ;</li>\n<li>les <strong>distances</strong> principales et, dans une légende, les réglages : puissance ou ouverture mesurée de chaque source, réglages de l'appareil.</li>\n</ul>\n<p>On le complète souvent par une vue de côté lorsque la hauteur des sources est déterminante (éclairage en plongée d'un produit à plat, lumière de dessous à travers une table de prise de vue translucide).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un schéma sans légende n'a presque aucune valeur. Les symboles ne sont pas normalisés par une norme officielle unique : chaque studio ou logiciel a les siens. On indique donc toujours la signification de chaque symbole et les valeurs mesurées.</div>"
      },
      {
       "titre": "Révéler le volume et la matière",
       "contenu": "<p>La direction de la lumière par rapport à l'axe de visée décide de ce que l'image montre du sujet.</p>\n<table>\n<thead><tr><th>Direction</th><th>Effet</th></tr></thead>\n<tbody>\n<tr><td>Frontale (dans l'axe)</td><td>peu d'ombres visibles, volume aplati, couleurs restituées ; rendu informatif mais plat</td></tr>\n<tr><td>Trois-quarts (environ 45°)</td><td>équilibre entre volume et lisibilité ; la plus utilisée</td></tr>\n<tr><td>Latérale (90°)</td><td>une moitié claire, une moitié sombre ; volume très marqué</td></tr>\n<tr><td>Rasante</td><td>la lumière effleure la surface : chaque relief projette une ombre ; la <strong>matière</strong> (grain du cuir, trame d'un tissu, texture d'un pain) est révélée</td></tr>\n<tr><td>Contre-jour</td><td>contours lumineux, transparence, silhouette</td></tr>\n<tr><td>Zénithale (du dessus)</td><td>lumière naturelle « de plafond » ; pour les produits posés et l'alimentaire</td></tr>\n</tbody>\n</table>\n<p>La qualité de la lumière agit avec sa direction : une source dure et rasante exagère une texture (utile pour une pierre, cruel pour une peau) ; une source douce et rasante la montre avec délicatesse.</p>\n<p>Le volume se lit grâce aux <strong>valeurs</strong> : une forme ronde éclairée de côté présente une zone de lumière, un dégradé (la demi-teinte), une zone d'ombre propre et une ombre portée. Supprimer complètement les ombres revient à supprimer le volume.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour un catalogue de chaussures en cuir, le studio associe une grande boîte à lumière en trois-quarts haut, qui donne la forme générale, et une petite source rasante avec nid d'abeille, qui fait apparaître le grain du cuir et les surpiqûres sur le flanc de la chaussure.</div>"
      },
      {
       "titre": "Les objets brillants",
       "contenu": "<p>Un objet brillant (métal poli, verre, laque, plastique vernis, bijou) se comporte comme un miroir : on n'y voit pas l'éclairage mais le <strong>reflet de ce qui l'entoure</strong>. Éclairer un objet brillant revient donc à construire son environnement.</p>\n<p>Principes :</p>\n<ul>\n<li>une grande source diffusante, vue en reflet, donne un reflet large et doux ; une petite source donne un point brillant dur ;</li>\n<li>les zones qui ne reflètent rien de lumineux paraissent noires : on dessine la forme en alternant surfaces claires (diffuseurs éclairés) et surfaces sombres (panneaux noirs) ;</li>\n<li>un <strong>dégradé</strong> de lumière dans le reflet (diffuseur éclairé de façon inégale) donne une impression de volume et de qualité ;</li>\n<li>la position de l'appareil est déterminante : on contrôle les reflets en se déplaçant d'un centimètre ;</li>\n<li>l'appareil et le photographe se reflètent dans les surfaces bombées : on les cache derrière un panneau percé ou un tissu noir.</li>\n</ul>\n<p>Pour les petits objets très réfléchissants (couverts, bijoux), on utilise une <strong>tente de diffusion</strong> ou un cylindre de diffuseur entourant l'objet, l'objectif passant par une fente. Pour les métaux, le polarisant est inefficace : le contrôle passe uniquement par l'environnement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les traces de doigts, la poussière et les micro-rayures sont spectaculairement visibles sur un objet brillant en gros plan. On manipule avec des gants de coton, on nettoie juste avant la prise de vue et on prévoit le temps de retouche correspondant dans le devis.</div>"
      },
      {
       "titre": "Les objets transparents",
       "contenu": "<p>Le verre et les liquides ne se photographient pas par la lumière qu'ils reçoivent mais par la lumière qui les <strong>traverse</strong> et par leurs <strong>contours</strong>, qui réfractent et réfléchissent la lumière. Deux techniques de base existent.</p>\n<table>\n<thead><tr><th>Technique</th><th>Dispositif</th><th>Résultat</th></tr></thead>\n<tbody>\n<tr><td>Fond clair (champ clair)</td><td>l'objet est placé devant un fond lumineux (diffuseur éclairé par l'arrière) ; des panneaux noirs hors champ, de chaque côté</td><td>l'objet apparaît sur fond blanc avec des <strong>contours sombres</strong> qui dessinent sa forme</td></tr>\n<tr><td>Fond sombre (champ sombre)</td><td>l'objet est placé devant un fond noir ; des sources ou diffuseurs éclairés sont placés derrière et sur les côtés, hors champ</td><td>l'objet apparaît sur fond noir avec des <strong>contours lumineux</strong></td></tr>\n</tbody>\n</table>\n<p>Dans le cas du fond clair, la largeur du contour sombre se règle par la taille de la zone lumineuse derrière l'objet : un fond lumineux à peine plus large que l'objet donne des contours noirs épais ; un fond très large les affine jusqu'à les faire disparaître.</p>\n<p>Un liquide coloré (vin, parfum) paraît noir s'il n'est pas éclairé par l'arrière. On place souvent derrière la bouteille un petit réflecteur ou une carte blanche découpée à sa forme, invisible de face, pour rendre au liquide sa couleur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> photographier un verre à pied sur fond clair. 1) Placer un diffuseur à 1 m environ derrière le verre et l'éclairer par l'arrière avec un flash. 2) Cadrer avec un téléobjectif court pour limiter la portion de fond visible. 3) Placer deux panneaux noirs à gauche et à droite, juste hors champ. 4) Ajuster la distance des panneaux jusqu'à obtenir un contour sombre régulier. 5) Ajouter éventuellement une strip box en haut pour un reflet sur le buvant. 6) Exposer pour que le fond soit blanc sans brûler les contours.</div>"
      },
      {
       "titre": "Le packshot sur fond blanc",
       "contenu": "<p>Le <strong>packshot</strong> est la photographie d'un produit seul, destinée à un catalogue, un emballage ou un site marchand. Les places de marché en ligne demandent fréquemment un fond blanc pur (valeur RVB 255, 255, 255), un produit occupant une large part de l'image, sans texte ni accessoire non fourni. Ces exigences varient selon les plateformes : elles sont toujours lues dans le cahier des charges du client.</p>\n<p>Pour obtenir un fond blanc pur à la prise de vue, sans détourage long :</p>\n<ul>\n<li>on éclaire le fond séparément du produit ;</li>\n<li>on règle la lumière du fond environ 1 à 1,5 IL au-dessus de celle du produit, mesurée au flashmètre ;</li>\n<li>on éloigne le produit du fond pour éviter que la lumière du fond ne déborde sur ses contours (halo, perte de contraste) ;</li>\n<li>on utilise une <strong>table de prise de vue</strong> en plexiglas opalin, éclairée par en dessous, pour supprimer les ombres portées, ou l'on garde une légère ombre de contact pour asseoir le produit.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un produit blanc sur fond blanc doit garder ses contours : on réduit l'écart de lumière entre fond et produit et l'on ajoute des panneaux noirs latéraux pour dessiner les bords. Un produit noir demande au contraire plus de lumière et des reflets bien placés pour montrer sa forme.</div>"
      }
     ],
     "points_cles": [
      "Principale, débouchage, contre-jour, fond, accent : chaque source a une fonction.",
      "On construit un éclairage source par source et on retire ce qui est inutile.",
      "Le schéma d'éclairage vu de dessus, légendé et chiffré, permet de reproduire une séance.",
      "La lumière rasante révèle la matière ; la direction et la qualité de lumière construisent le volume.",
      "Un objet brillant reflète son environnement : on l'éclaire en construisant ce qu'il reflète.",
      "Verre sur fond clair : contours sombres ; verre sur fond sombre : contours lumineux.",
      "Packshot sur fond blanc : fond éclairé séparément, 1 à 1,5 IL au-dessus du produit, produit éloigné du fond.",
      "Les exigences d'image des plateformes se lisent dans le cahier des charges du client."
     ],
     "lexique": [
      {
       "terme": "Lumière principale",
       "def": "Source qui donne la direction dominante et le modelé."
      },
      {
       "terme": "Rapport d'éclairage",
       "def": "Écart en diaphragmes entre les zones éclairées et les zones d'ombre."
      },
      {
       "terme": "Schéma d'éclairage",
       "def": "Plan vu de dessus, légendé, du dispositif de prise de vue."
      },
      {
       "terme": "Lumière rasante",
       "def": "Lumière qui effleure une surface et révèle ses reliefs."
      },
      {
       "terme": "Demi-teinte",
       "def": "Zone de transition entre la lumière et l'ombre propre d'un volume."
      },
      {
       "terme": "Ombre portée",
       "def": "Ombre projetée par l'objet sur une autre surface."
      },
      {
       "terme": "Tente de diffusion",
       "def": "Enceinte en matériau diffusant entourant un petit objet brillant."
      },
      {
       "terme": "Fond clair",
       "def": "Technique d'éclairage des transparents par un fond lumineux, qui donne des contours sombres."
      },
      {
       "terme": "Packshot",
       "def": "Photographie d'un produit seul, à vocation commerciale."
      },
      {
       "terme": "Table de prise de vue",
       "def": "Plateau translucide incurvé, éclairable par-dessous, pour photographier les objets sans ombre."
      }
     ]
    },
    {
     "id": "bpho-portrait-identite",
     "titre": "Photographier l'humain : portrait, direction de modèle et photo d'identité",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Choisir focale, point de vue et cadrage pour un portrait",
      "Identifier et mettre en place les schémas d'éclairage classiques du portrait",
      "Diriger un modèle en tenant compte de la dimension relationnelle de la séance",
      "Réaliser une photographie d'identité conforme aux exigences des titres officiels",
      "Adapter la séance au public : enfants, groupes, personnes peu à l'aise"
     ],
     "sections": [
      {
       "titre": "Focale, point de vue et cadrage",
       "contenu": "<p>Le portrait est le genre photographique le plus pratiqué par les studios de proximité : portraits individuels et de famille, photographies scolaires, portraits professionnels, mariages, photographies d'identité. Il repose sur trois choix techniques.</p>\n<p>La <strong>distance</strong>, donc la <strong>focale</strong> : un visage photographié de près au grand-angle a un nez agrandi et des oreilles réduites. En plein format, on choisit en général un 85 à 135 mm pour un portrait serré, un 50 à 85 mm pour un plan taille, un 35 mm pour un portrait en situation (dans un atelier, un bureau).</p>\n<p>La <strong>hauteur de l'appareil</strong> : à hauteur des yeux pour un portrait neutre ; légèrement au-dessus pour affiner le bas du visage et le cou ; en contre-plongée pour donner de l'importance au sujet, avec le risque de montrer le dessous du menton.</p>\n<p>Le <strong>cadrage</strong>, désigné par l'échelle des plans :</p>\n<table>\n<thead><tr><th>Plan</th><th>Limite du cadre</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Très gros plan</td><td>une partie du visage</td><td>beauté, émotion</td></tr>\n<tr><td>Gros plan</td><td>le visage entier</td><td>portrait intime, identité</td></tr>\n<tr><td>Plan rapproché (poitrine)</td><td>sous les épaules ou à mi-poitrine</td><td>portrait professionnel, réseaux professionnels</td></tr>\n<tr><td>Plan taille (plan américain en cinéma : mi-cuisses)</td><td>la taille ou les cuisses</td><td>mode, gestuelle des mains</td></tr>\n<tr><td>Plan en pied</td><td>la personne entière</td><td>mode, mariage, mise en situation</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on évite de couper un sujet au niveau d'une articulation (poignet, genou, cheville, coude) : l'image donne l'impression d'une amputation. On coupe au milieu d'un segment (milieu de cuisse, milieu du bras).</div>"
      },
      {
       "titre": "Les éclairages classiques du portrait",
       "contenu": "<p>Les éclairages de portrait sont désignés par la forme de l'ombre que la lumière principale dessine sur le visage. Les noms viennent de l'usage anglo-saxon et du cinéma.</p>\n<table>\n<thead><tr><th>Éclairage</th><th>Position de la principale</th><th>Signe distinctif</th><th>Effet</th></tr></thead>\n<tbody>\n<tr><td>Papillon (ou « Paramount »)</td><td>face au visage, au-dessus de l'appareil</td><td>petite ombre symétrique sous le nez, en forme de papillon</td><td>glamour, beauté, pommettes soulignées</td></tr>\n<tr><td>En boucle (loop)</td><td>environ 30 à 45° de côté, un peu au-dessus</td><td>ombre du nez en petite boucle vers la joue, sans rejoindre l'ombre de la joue</td><td>naturel, flatteur pour la plupart des visages</td></tr>\n<tr><td>Rembrandt</td><td>environ 45° de côté et au-dessus</td><td>triangle de lumière sur la joue côté ombre, sous l'œil</td><td>caractère, profondeur, référence picturale</td></tr>\n<tr><td>Latéral (split)</td><td>à 90°</td><td>visage partagé en deux moitiés claire et sombre</td><td>dramatique, mystère</td></tr>\n</tbody>\n</table>\n<p>On distingue aussi l'<strong>éclairage large</strong> (la principale éclaire le côté du visage tourné vers l'appareil, ce qui élargit le visage) et l'<strong>éclairage étroit</strong> (elle éclaire le côté opposé, ce qui l'affine).</p>\n<p>Les <strong>reflets dans les yeux</strong> donnent vie au regard : leur forme trahit le façonneur (rond pour une octabox, rectangulaire pour une boîte, anneau pour un flash annulaire). On veille à n'en avoir qu'un par œil, placé vers « 10 h » ou « 2 h ».</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> installer un portrait professionnel classique. 1) Fond gris à 1,5 m derrière le modèle, assis sur un tabouret, épaules de trois-quarts, visage vers l'appareil. 2) Principale : boîte à lumière de 90 cm environ, à 45° et légèrement au-dessus des yeux, distance d'environ 1,2 m. 3) Réflecteur blanc du côté opposé pour déboucher, rapport d'environ 1 à 1,5 IL. 4) Contre-jour avec nid d'abeille pour détacher les cheveux du fond. 5) Lumière de fond pour créer un léger halo derrière la tête. 6) 85 mm, f/5,6 à f/8, 1/125 s, 100 ISO, mise au point sur l'œil le plus proche.</div>"
      },
      {
       "titre": "La relation au modèle",
       "contenu": "<p>Le portrait réussi dépend autant de la <strong>relation</strong> que de la technique. La plupart des clients d'un studio ne sont pas des modèles et se trouvent peu photogéniques. Le photographe doit les mettre en confiance, les guider et rester attentif à leurs réactions.</p>\n<ul>\n<li><strong>Accueil</strong> : présenter le déroulé de la séance, recueillir les attentes (usage des images, tenue, ce que la personne aime ou n'aime pas d'elle-même).</li>\n<li><strong>Direction</strong> : donner des consignes simples et positives, en montrant le geste plutôt qu'en le décrivant ; utiliser des repères concrets (« regardez ma main », « rapprochez le menton de moi ») ; éviter les consignes floues comme « soyez naturel ».</li>\n<li><strong>Rythme</strong> : commencer par des images faciles, montrer une ou deux réussites sur l'écran pour rassurer, alterner pose et moments de détente.</li>\n<li><strong>Respect</strong> : demander avant de toucher un vêtement ou une mèche de cheveux, ou mieux, faire le geste en miroir ; préserver l'intimité (cabine pour se changer) ; ne jamais commenter négativement le physique.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour une séance de portraits de collaborateurs en entreprise (vingt personnes en une matinée), le photographe installe un éclairage fixe, mesure une fois pour toutes, et consacre ses trois à quatre minutes par personne à la mise en confiance et à la pose. Il fait valider par chaque personne l'image retenue sur un écran d'ordinateur avant qu'elle reparte.</div>\n<p>Avec les <strong>enfants</strong>, on se met à leur hauteur, on joue, on accepte le mouvement (temps de pose court, flash ou lumière abondante). Avec les <strong>groupes</strong>, on organise les personnes en lignes décalées, les têtes à des hauteurs variées, et l'on ferme suffisamment le diaphragme pour que tous les plans soient nets ; on réalise plusieurs vues pour éviter les yeux fermés.</p>"
      },
      {
       "titre": "La photographie d'identité",
       "contenu": "<p>La <strong>photographie d'identité</strong> destinée aux titres officiels français (carte nationale d'identité, passeport, permis de conduire, titre de séjour) doit respecter des exigences précises fixées par l'administration, qui s'appuient sur la norme internationale <strong>ISO/IEC 19794-5</strong> relative aux images faciales utilisées en biométrie. Une photographie non conforme entraîne le rejet du dossier : c'est une prestation où l'erreur se paie immédiatement en réclamation.</p>\n<table>\n<thead><tr><th>Critère</th><th>Exigence</th></tr></thead>\n<tbody>\n<tr><td>Format</td><td>35 mm de large × 45 mm de haut</td></tr>\n<tr><td>Taille du visage</td><td>de 32 à 36 mm du bas du menton au sommet du crâne (hors cheveux)</td></tr>\n<tr><td>Fond</td><td>uni, clair (bleu clair, gris clair) ; le blanc est interdit</td></tr>\n<tr><td>Pose</td><td>de face, tête droite, regard vers l'objectif, yeux ouverts et visibles</td></tr>\n<tr><td>Expression</td><td>neutre, bouche fermée</td></tr>\n<tr><td>Éclairage</td><td>exposition correcte, contraste correct, sans ombre portée sur le visage ni sur le fond, sans reflet</td></tr>\n<tr><td>Lunettes</td><td>monture fine ne masquant pas les yeux, verres non teintés, aucun reflet ; souvent plus simple de les retirer</td></tr>\n<tr><td>Tête</td><td>nue (pas de couvre-chef)</td></tr>\n<tr><td>Qualité</td><td>image nette, couleur recommandée, tirage sans pliure ni trace ; photographie récente et ressemblante</td></tr>\n</tbody>\n</table>\n<p>Une partie des démarches se fait aujourd'hui en ligne : les studios et cabines agréés fournissent alors une <strong>photo numérique sécurisée</strong>, transmise à l'administration et associée à un code que le client reporte dans sa demande. Le photographe doit vérifier les conditions d'agrément en vigueur auprès de l'administration et de son organisation professionnelle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler une photographie d'identité avant tirage. 1) Superposer le gabarit de contrôle (calque ou fonction du logiciel) : format 35 × 45 mm, visage entre 32 et 36 mm. 2) Vérifier l'axe : yeux horizontaux, visage centré. 3) Vérifier le fond : uni, clair, sans ombre derrière la tête (éclairer le fond séparément ou éloigner le client du fond). 4) Vérifier les yeux : ouverts, sans reflet sur les lunettes, sans yeux rouges. 5) Vérifier l'expression : neutre, bouche fermée. 6) Imprimer à l'échelle exacte, sans redimensionnement par le pilote d'impression.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la retouche d'une photographie d'identité est strictement limitée : on peut corriger l'exposition, le contraste et la couleur, mais pas modifier les traits du visage, effacer un grain de beauté ou une cicatrice. Une image modifiée peut faire échouer la reconnaissance biométrique et engager la responsabilité du photographe.</div>"
      },
      {
       "titre": "Le portrait et le droit",
       "contenu": "<p>Toute personne reconnaissable sur une photographie dispose d'un <strong>droit à l'image</strong>. Pour un portrait de commande, la personne consent à être photographiée, mais l'usage des images doit correspondre à ce qui a été convenu : un portrait de famille ne peut pas être exposé en vitrine ou publié sur le site du studio sans une autorisation écrite spécifique, précisant les supports et la durée.</p>\n<p>Pour un <strong>mineur</strong>, l'autorisation est donnée par les titulaires de l'autorité parentale. Pour un portrait réalisé en entreprise, l'autorisation de chaque salarié est recueillie pour les usages prévus (site internet, plaquette, réseaux sociaux).</p>\n<p>Le photographe, de son côté, est l'auteur de l'image : le client qui commande un portrait n'acquiert pas automatiquement le droit de la reproduire librement. Les règles détaillées du droit à l'image et du droit d'auteur, ainsi que les modèles d'autorisation, sont traités avec le cadre juridique de l'activité.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en portrait, deux droits coexistent : celui de la personne photographiée sur son image, celui du photographe sur son œuvre. Une séance professionnelle se termine toujours par des écrits clairs sur l'usage qui sera fait des images, par chacun.</div>"
      }
     ],
     "points_cles": [
      "En plein format, 85 à 135 mm pour un portrait serré : la distance évite la déformation du visage.",
      "On ne coupe pas le cadre au niveau d'une articulation.",
      "Papillon, en boucle, Rembrandt, latéral : éclairages nommés d'après l'ombre sur le visage.",
      "Éclairage large ou étroit selon le côté du visage éclairé ; un seul reflet par œil.",
      "La direction de modèle passe par l'accueil, des consignes concrètes, le rythme et le respect.",
      "Photo d'identité : 35 × 45 mm, visage de 32 à 36 mm, fond uni clair non blanc, expression neutre bouche fermée.",
      "La retouche d'une photo d'identité ne modifie jamais les traits du visage.",
      "Droit à l'image du sujet et droit d'auteur du photographe coexistent : tout usage se formalise par écrit."
     ],
     "lexique": [
      {
       "terme": "Échelle des plans",
       "def": "Classement des cadrages selon la portion du sujet visible, du très gros plan au plan en pied."
      },
      {
       "terme": "Éclairage papillon",
       "def": "Lumière principale frontale et haute créant une ombre symétrique sous le nez."
      },
      {
       "terme": "Éclairage Rembrandt",
       "def": "Lumière à environ 45° qui laisse un triangle de lumière sur la joue côté ombre."
      },
      {
       "terme": "Éclairage large",
       "def": "Éclairage du côté du visage tourné vers l'appareil, qui élargit le visage."
      },
      {
       "terme": "Éclairage étroit",
       "def": "Éclairage du côté du visage opposé à l'appareil, qui affine le visage."
      },
      {
       "terme": "Reflet oculaire",
       "def": "Petit reflet de la source dans l'œil, qui donne vie au regard."
      },
      {
       "terme": "Direction de modèle",
       "def": "Ensemble des consignes données au sujet pour obtenir pose et expression."
      },
      {
       "terme": "ISO/IEC 19794-5",
       "def": "Norme internationale relative aux images faciales utilisées en biométrie, base des exigences des photos d'identité."
      },
      {
       "terme": "Photo numérique sécurisée",
       "def": "Photographie d'identité transmise directement à l'administration par un studio ou une cabine agréés."
      }
     ]
    },
    {
     "id": "bpho-perspective-scheimpflug-macro",
     "titre": "Redresser les perspectives, basculer le plan de netteté, photographier en macro",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Expliquer l'origine de la convergence des verticales et les moyens de la corriger",
      "Utiliser le décentrement d'une chambre ou d'un objectif spécialisé",
      "Énoncer et appliquer la règle de Scheimpflug",
      "Calculer un rapport de reproduction et la correction d'exposition en macrophotographie",
      "Organiser une prise de vue rapprochée : matériel, éclairage, profondeur de champ"
     ],
     "sections": [
      {
       "titre": "La convergence des verticales",
       "contenu": "<p>Lorsqu'on photographie un bâtiment depuis le sol en inclinant l'appareil vers le haut pour le cadrer en entier, ses arêtes verticales se rapprochent vers le haut de l'image : c'est la <strong>convergence des verticales</strong> (ou fuyantes verticales). Le bâtiment semble basculer en arrière.</p>\n<p>Ce phénomène n'est pas un défaut de l'objectif : il résulte de la perspective, parce que le capteur n'est plus parallèle à la façade. La règle est simple : <strong>des lignes parallèles dans la réalité restent parallèles sur l'image seulement si elles sont parallèles au plan du capteur</strong>.</p>\n<p>Pour garder les verticales droites, il faut donc maintenir le capteur vertical (appareil de niveau, contrôlé au niveau à bulle ou à l'horizon électronique). Mais alors le haut du bâtiment sort du cadre et le bas de l'image est occupé par le sol. Trois solutions existent :</p>\n<ol>\n<li>reculer ou monter (point de vue en hauteur : fenêtre d'un immeuble en face, perche, drone dans le respect de la réglementation) ;</li>\n<li>utiliser un appareil ou un objectif permettant le <strong>décentrement</strong> ;</li>\n<li>photographier avec une focale plus courte, appareil de niveau, puis <strong>redresser par logiciel</strong> et recadrer.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le redressement logiciel étire le haut de l'image : il fait perdre de la définition, déforme les proportions si l'on corrige trop, et rogne une partie du cadre. Il faut prévoir de la marge autour du sujet à la prise de vue. Les photographes d'architecture laissent souvent une convergence très légère, jugée plus naturelle qu'une correction totale pour un point de vue très bas.</div>"
      },
      {
       "titre": "Le décentrement",
       "contenu": "<p>Un objectif projette une image circulaire, le <strong>cercle d'image</strong>, dont le capteur n'occupe d'ordinaire que la partie centrale. Si le cercle d'image est nettement plus grand que le capteur, on peut <strong>déplacer l'objectif parallèlement au capteur</strong> (ou le capteur parallèlement à l'objectif) pour enregistrer une autre partie de ce cercle : c'est le <strong>décentrement</strong>.</p>\n<p>Décentrer l'objectif vers le haut permet de cadrer le sommet du bâtiment tout en gardant le capteur vertical : les verticales restent parallèles. Le décentrement latéral permet de photographier un miroir ou une vitrine de face sans s'y refléter, en se plaçant légèrement sur le côté.</p>\n<table>\n<thead><tr><th>Matériel</th><th>Mouvements</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Chambre technique (monorail ou chambre de terrain)</td><td>décentrements et bascules à l'avant et à l'arrière, de grande amplitude</td><td>architecture, nature morte haut de gamme, reproduction</td></tr>\n<tr><td>Objectif à décentrement et bascule pour reflex ou hybride</td><td>décentrement d'environ ±10 à ±12 mm et bascule d'environ ±8 à ±10° selon les modèles</td><td>architecture, intérieurs, produit, paysage</td></tr>\n<tr><td>Correction logicielle</td><td>aucune à la prise de vue</td><td>solution économique, avec perte de qualité</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> photographier une façade avec un objectif à décentrement. 1) Installer l'appareil sur trépied, parfaitement de niveau (bulle et horizon électronique). 2) Cadrer la façade de face ; constater que le haut est coupé. 3) Décentrer l'objectif vers le haut jusqu'à faire entrer le sommet, en conservant une marge. 4) Contrôler les angles de l'image : un décentrement excessif fait apparaître du vignetage ou une baisse de netteté au bord du cercle d'image. 5) Fermer à f/8 ou f/11 et mesurer l'exposition après le décentrement (la mesure peut être faussée en position décentrée).</div>"
      },
      {
       "titre": "La règle de Scheimpflug",
       "contenu": "<p>En temps normal, le plan de netteté est parallèle au capteur. Pour photographier nettement un plan incliné (une table vue en plongée, un paysage du premier plan jusqu'à l'horizon, une façade vue en biais), il faudrait une profondeur de champ énorme. La <strong>bascule</strong> permet d'incliner le plan de netteté lui-même.</p>\n<p>La <strong>règle de Scheimpflug</strong> énonce que le plan du sujet net, le plan de l'objectif (plan principal) et le plan du capteur se coupent selon une <strong>même droite</strong>. Lorsqu'on bascule l'objectif par rapport au capteur, le plan de netteté pivote et s'incline dans la scène.</p>\n<p>On peut l'expliquer par un schéma vu de côté : trois droites représentent le capteur (vertical), l'objectif (légèrement incliné vers l'avant) et le sujet (le plateau d'une table, presque horizontal). Prolongées, ces trois droites convergent en un point situé sous l'appareil : c'est la trace de la droite d'intersection commune. Une petite bascule de l'objectif suffit à amener le plan de netteté le long du plateau.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour photographier en plongée une table dressée (assiettes du premier plan jusqu'aux verres du fond) avec une chambre, le photographe bascule l'avant de quelques degrés vers le bas. Le plan de netteté se couche le long de la nappe : tout le décor est net à f/16, alors qu'il aurait fallu un diaphragme impossible, avec une forte diffraction, sans bascule.</div>\n<p>La bascule peut aussi servir à l'inverse : incliner le plan de netteté contre le sujet réduit la zone nette à une bande étroite. C'est l'effet dit de « maquette » (miniature) sur les vues urbaines en plongée, et une façon d'isoler un détail en portrait ou en mode.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le décentrement (déplacement parallèle) agit sur la <strong>perspective et le cadrage</strong> ; la bascule (rotation) agit sur l'<strong>orientation du plan de netteté</strong>. Les deux mouvements se combinent mais ne se remplacent pas.</div>"
      },
      {
       "titre": "La macrophotographie : rapport de reproduction et tirage",
       "contenu": "<p>La <strong>macrophotographie</strong> désigne au sens strict la prise de vue avec un rapport de reproduction compris entre 1:1 (grandeur nature sur le capteur) et environ 10:1. Entre 1:10 et 1:1, on parle de <strong>photographie rapprochée</strong> (proxiphotographie). Ces deux domaines concernent le packshot de petits objets (bijoux, montres, cosmétiques), la photographie scientifique et naturaliste, la reproduction de documents.</p>\n<p>Pour s'approcher, plusieurs moyens existent :</p>\n<ul>\n<li>l'<strong>objectif macro</strong>, qui atteint 1:1 avec une correction optimisée pour la courte distance ;</li>\n<li>les <strong>bagues allonge</strong> et le <strong>soufflet</strong>, qui augmentent le tirage : le grandissement obtenu à l'infini est d'environ G = tirage ajouté / focale ;</li>\n<li>les <strong>bonnettes</strong> (lentilles additionnelles vissées à l'avant), exprimées en dioptries, simples mais moins performantes ;</li>\n<li>l'objectif inversé, monté à l'envers par une bague spéciale, pour des grandissements supérieurs à 1:1.</li>\n</ul>\n<p>La <strong>distance de travail</strong> (entre l'avant de l'objectif et le sujet) augmente avec la focale de l'objectif macro : environ 15 cm à 1:1 pour un 100 mm, quelques centimètres pour un 50 mm. Une distance de travail plus grande facilite l'éclairage et évite d'effrayer un insecte.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un grandissement avec une bague allonge. Données : objectif de 50 mm réglé sur l'infini, bague de 25 mm. 1) G = 25 / 50 = 0,5. 2) Rapport de reproduction : 1:2. 3) Un insecte de 18 mm mesure 9 mm sur le capteur ; sur un capteur de 36 mm de large, il occupe le quart de la largeur. 4) Pour atteindre 1:1, il faudrait 50 mm de tirage supplémentaire (deux bagues de 25 mm).</div>"
      },
      {
       "titre": "Exposition et profondeur de champ en macro",
       "contenu": "<p>Quand le tirage augmente, la lumière se répartit sur une image plus grande : l'éclairement du capteur diminue. L'ouverture <strong>effective</strong> est plus petite que l'ouverture affichée :</p>\n<p><strong>N<sub>effectif</sub> ≈ N × (1 + G)</strong> et la quantité de lumière est divisée par <strong>(1 + G)<sup>2</sup></strong></p>\n<p>(approximation valable pour un objectif de construction symétrique).</p>\n<table>\n<thead><tr><th>Rapport de reproduction</th><th>G</th><th>Facteur (1 + G)<sup>2</sup></th><th>Correction</th></tr></thead>\n<tbody>\n<tr><td>1:4</td><td>0,25</td><td>1,56</td><td>environ +2/3 IL</td></tr>\n<tr><td>1:2</td><td>0,5</td><td>2,25</td><td>environ +1,2 IL</td></tr>\n<tr><td>1:1</td><td>1</td><td>4</td><td>+2 IL</td></tr>\n<tr><td>2:1</td><td>2</td><td>9</td><td>environ +3,2 IL</td></tr>\n</tbody>\n</table>\n<p>Avec la mesure par l'objectif (cellule de l'appareil, flash TTL), cette correction est prise en compte automatiquement. Elle doit être appliquée à la main avec un posemètre à main ou un flash en mode manuel.</p>\n<p>La profondeur de champ devient extrêmement faible : pour un grandissement G, elle vaut approximativement <strong>2 × N × c × (1 + G) / G<sup>2</sup></strong>. À 1:1, f/11 et c = 0,03 mm : 2 × 11 × 0,03 × 2 / 1 ≈ 1,3 mm. Elle ne dépend presque plus de la focale : à grandissement égal, un 50 mm et un 100 mm macro donnent la même zone nette.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> fermer à f/22 ou f/32 en macro paraît la solution pour gagner de la profondeur de champ, mais l'ouverture effective atteint alors f/45 à f/64 à 1:1 : la diffraction rend toute l'image molle. La solution professionnelle est l'empilement de mises au point à une ouverture modérée (f/5,6 à f/8) sur un rail micrométrique.</div>\n<p>Pour l'éclairage, on utilise des diffuseurs proches du sujet, un flash annulaire ou deux petits flashs déportés de part et d'autre de l'objectif, et un trépied stable avec déclenchement retardé ou à distance. En extérieur, un écran contre le vent est souvent indispensable.</p>"
      }
     ],
     "points_cles": [
      "Les verticales restent parallèles seulement si le capteur est parallèle à la façade.",
      "Le décentrement déplace l'objectif parallèlement au capteur dans un cercle d'image plus grand.",
      "Le redressement logiciel fait perdre de la définition et rogne l'image : prévoir de la marge.",
      "Règle de Scheimpflug : plans du sujet, de l'objectif et du capteur se coupent sur une même droite.",
      "Décentrement : perspective et cadrage ; bascule : orientation du plan de netteté.",
      "Macro au sens strict : de 1:1 à environ 10:1 ; rapprochée : de 1:10 à 1:1.",
      "Avec une bague allonge, G ≈ tirage ajouté / focale.",
      "Correction d'exposition en macro : lumière divisée par (1 + G)², soit +2 IL à 1:1.",
      "À 1:1, la profondeur de champ se mesure en millimètres : on préfère l'empilement de mises au point à la fermeture extrême."
     ],
     "lexique": [
      {
       "terme": "Convergence des verticales",
       "def": "Rapprochement des lignes verticales d'un sujet quand l'appareil est incliné."
      },
      {
       "terme": "Cercle d'image",
       "def": "Zone circulaire éclairée et nette projetée par un objectif."
      },
      {
       "terme": "Décentrement",
       "def": "Déplacement de l'objectif ou du dos parallèlement au plan du capteur."
      },
      {
       "terme": "Bascule",
       "def": "Rotation de l'objectif ou du dos qui incline le plan de netteté."
      },
      {
       "terme": "Règle de Scheimpflug",
       "def": "Condition de netteté d'un plan incliné : plans du sujet, de l'objectif et du capteur concourants."
      },
      {
       "terme": "Proxiphotographie",
       "def": "Prise de vue rapprochée entre 1:10 et 1:1."
      },
      {
       "terme": "Bague allonge",
       "def": "Tube sans optique qui augmente le tirage pour s'approcher du sujet."
      },
      {
       "terme": "Bonnette",
       "def": "Lentille additionnelle vissée devant l'objectif pour réduire la distance de mise au point."
      },
      {
       "terme": "Distance de travail",
       "def": "Distance entre l'avant de l'objectif et le sujet à la mise au point."
      },
      {
       "terme": "Ouverture effective",
       "def": "Ouverture réelle tenant compte du tirage, plus petite que l'ouverture affichée en macro."
      }
     ]
    },
    {
     "id": "bpho-images-animees",
     "titre": "Les images animées : tourner, synchroniser et monter",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Caractériser un format vidéo : définition, cadence, codec, débit, échantillonnage",
      "Régler un appareil hybride pour la vidéo (temps d'obturation, filtres, profils)",
      "Distinguer les types de plans et de mouvements de caméra",
      "Régler un moniteur et utiliser les aides à l'exposition et à la mise au point",
      "Décrire les procédures de synchronisation son-image et de montage simple",
      "Réaliser l'animation d'un objet en rotation pour le web"
     ],
     "sections": [
      {
       "titre": "Caractériser un format vidéo",
       "contenu": "<p>Les photographes sont de plus en plus sollicités pour des images animées : courtes vidéos pour les réseaux sociaux, film d'entreprise, clip de mariage, packshot animé. Un fichier vidéo se décrit par plusieurs paramètres.</p>\n<table>\n<thead><tr><th>Paramètre</th><th>Définition</th><th>Valeurs courantes</th></tr></thead>\n<tbody>\n<tr><td>Définition</td><td>nombre de pixels de chaque image</td><td>Full HD 1 920 × 1 080 ; UHD (« 4K ») 3 840 × 2 160 ; 4K DCI 4 096 × 2 160 au cinéma</td></tr>\n<tr><td>Rapport d'image</td><td>proportion largeur / hauteur</td><td>16:9 (télévision, web) ; 9:16 (vertical, réseaux sociaux) ; 1:1</td></tr>\n<tr><td>Cadence</td><td>nombre d'images par seconde (i/s)</td><td>25 i/s en Europe (télévision) ; 24 i/s pour le rendu cinéma ; 50 ou 100 i/s pour un ralenti</td></tr>\n<tr><td>Balayage</td><td>progressif (p) ou entrelacé (i)</td><td>le progressif (1080p, 2160p) est la norme actuelle</td></tr>\n<tr><td>Codec</td><td>méthode de compression</td><td>H.264 (AVC) et H.265 (HEVC) pour la diffusion ; ProRes, intra-image, pour le montage exigeant</td></tr>\n<tr><td>Conteneur</td><td>type de fichier qui contient image, son et métadonnées</td><td>MP4, MOV</td></tr>\n<tr><td>Débit</td><td>quantité de données par seconde</td><td>de quelques Mb/s (web) à plusieurs centaines de Mb/s (tournage)</td></tr>\n<tr><td>Échantillonnage et profondeur</td><td>précision de la couleur</td><td>4:2:0 8 bits (grand public) ; 4:2:2 10 bits (professionnel, étalonnage)</td></tr>\n</tbody>\n</table>\n<p>Un codec <strong>inter-image</strong> (Long GOP) ne stocke entièrement qu'une image sur plusieurs et code seulement les différences pour les autres : fichiers légers mais lourds à monter. Un codec <strong>intra-image</strong> code chaque image entièrement : fichiers plus gros, montage plus fluide.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer la place occupée par un tournage. Débit 100 Mb/s (mégabits par seconde), 40 minutes de rushes. 1) Convertir en mégaoctets par seconde : 100 / 8 = 12,5 Mo/s. 2) Durée en secondes : 40 × 60 = 2 400 s. 3) Volume : 12,5 × 2 400 = 30 000 Mo, soit environ 30 Go. 4) Vérifier que la carte supporte ce débit en écriture : classe V30 au minimum (30 Mo/s).</div>"
      },
      {
       "titre": "Régler l'appareil pour la vidéo",
       "contenu": "<p>En vidéo, le temps d'obturation ne sert plus d'abord à doser la lumière : il détermine le <strong>flou de mouvement</strong> de chaque image, qui rend le mouvement fluide à la lecture. La <strong>règle des 180°</strong> (héritée de l'obturateur rotatif des caméras de cinéma) recommande un temps d'obturation égal à environ <strong>1/(2 × cadence)</strong> : 1/50 s à 25 i/s, 1/48 ou 1/50 s à 24 i/s, 1/100 s à 50 i/s.</p>\n<p>Puisque le temps d'obturation est fixé et que l'ouverture est choisie pour la profondeur de champ, l'exposition en plein jour se règle avec des <strong>filtres gris neutres</strong>, souvent un ND variable. La sensibilité complète le réglage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sous un éclairage alimenté par le secteur (50 Hz en France), certaines sources scintillent 100 fois par seconde. Un temps d'obturation qui n'est pas un sous-multiple de cette fréquence (1/60 s par exemple) fait apparaître des bandes lumineuses défilantes. En Europe, on reste sur 1/50 s ou 1/100 s en intérieur.</div>\n<p>Autres réglages :</p>\n<ul>\n<li><strong>balance des blancs</strong> fixe (jamais automatique, qui varie pendant un plan) ;</li>\n<li><strong>mise au point</strong> manuelle ou autofocus continu bien paramétré, avec une vitesse de transition douce ;</li>\n<li><strong>profil d'image</strong> : standard pour une diffusion rapide, ou profil <strong>logarithmique</strong> (log) qui conserve une plage dynamique maximale mais donne une image terne, à <strong>étalonner</strong> au montage avec une table de correspondance (LUT) ;</li>\n<li><strong>stabilisation</strong> ou support : trépied à tête fluide, stabilisateur motorisé (gimbal), épaulière.</li>\n</ul>"
      },
      {
       "titre": "Plans, mouvements et raccords",
       "contenu": "<p>Un film se construit en <strong>plans</strong>, segments continus entre deux coupes. L'échelle des plans est celle du portrait (du très gros plan au plan d'ensemble), complétée par le <strong>plan général</strong> qui situe le lieu.</p>\n<p>Les <strong>mouvements de caméra</strong> :</p>\n<ul>\n<li><strong>panoramique</strong> : rotation de la caméra sur son axe, horizontale ou verticale, depuis un point fixe ;</li>\n<li><strong>travelling</strong> : déplacement de la caméra (avant, arrière, latéral), sur rail, chariot, stabilisateur ou drone ;</li>\n<li><strong>zoom</strong> : variation de focale sans déplacement, qui modifie le cadre sans changer la perspective ;</li>\n<li><strong>plan fixe</strong> : caméra immobile, le mouvement vient du sujet.</li>\n</ul>\n<p>Pour qu'un montage soit compréhensible, les plans doivent se <strong>raccorder</strong> : continuité des gestes, des regards, de la lumière et des accessoires d'un plan à l'autre. La <strong>règle des 180°</strong> du montage (à ne pas confondre avec celle de l'obturateur) impose de rester du même côté d'un axe imaginaire reliant deux personnages qui se parlent, sinon ils semblent changer de place à l'écran.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour une vidéo de présentation d'un artisan de 60 secondes, le photographe tourne une interview en plan rapproché (deux appareils : face et trois-quarts), puis des plans d'illustration de 5 à 10 secondes chacun : plan général de l'atelier, gros plans des mains, du geste, des outils, du produit fini. Ces plans de coupe permettent au montage de couper l'interview sans saut visible.</div>"
      },
      {
       "titre": "Moniteurs et aides au tournage",
       "contenu": "<p>L'écran de l'appareil ou un <strong>moniteur de terrain</strong> externe sert à cadrer, mais aussi à contrôler l'exposition et la netteté. Son réglage conditionne la justesse du jugement : un écran trop lumineux en extérieur fait sous-exposer, un écran trop sombre fait surexposer.</p>\n<p>Les réglages de base d'un moniteur : <strong>luminosité</strong> (niveau du noir), <strong>contraste</strong> (niveau du blanc), <strong>chrominance</strong> (saturation), éventuellement application d'une <strong>LUT</strong> d'affichage pour visualiser une image log avec un contraste normal. On les règle à l'aide d'une <strong>mire</strong> de barres de couleur.</p>\n<p>Les aides à l'exposition et à la mise au point :</p>\n<table>\n<thead><tr><th>Aide</th><th>Principe</th></tr></thead>\n<tbody>\n<tr><td>Zébras</td><td>hachures sur les zones dépassant un niveau choisi (par exemple 95 à 100 % pour repérer les blancs brûlés, environ 70 % pour la peau selon les usages)</td></tr>\n<tr><td>Fausses couleurs</td><td>chaque plage de luminosité est affichée dans une couleur conventionnelle (le code est fourni par le fabricant)</td></tr>\n<tr><td>Forme d'onde</td><td>graphique de la luminosité de l'image de gauche à droite, plus précis que l'histogramme</td></tr>\n<tr><td>Focus peaking et loupe</td><td>surlignage des contours nets et agrandissement temporaire</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Le son, la synchronisation et le montage",
       "contenu": "<p>Le son des micros intégrés aux appareils est rarement exploitable. On utilise un micro externe (micro-canon sur l'appareil ou sur perche, micro-cravate sans fil pour une interview) et souvent un <strong>enregistreur séparé</strong>, à une fréquence d'échantillonnage de <strong>48 kHz</strong>, standard de la vidéo.</p>\n<p>Lorsque l'image et le son sont enregistrés séparément, il faut les <strong>synchroniser</strong> au montage. Les procédures :</p>\n<ol>\n<li>le <strong>clap</strong> : un bruit sec et visible au début de chaque prise sert de repère commun ;</li>\n<li>la synchronisation par <strong>forme d'onde audio</strong> : le logiciel compare le son témoin enregistré par l'appareil et le son de l'enregistreur, et les aligne automatiquement ;</li>\n<li>le <strong>code temporel</strong> (timecode) commun, transmis par un générateur à tous les appareils, sur les tournages plus importants.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> organiser un montage simple. 1) Copier les rushes et les sons sur deux supports (sauvegarde). 2) Classer dans une arborescence : projet, rushes, sons, musiques, graphismes, exports. 3) Dérusher : visionner, nommer et marquer les bonnes prises. 4) Synchroniser image et son. 5) Monter sur la ligne de temps : d'abord le récit (interview), puis les plans de coupe, puis la musique. 6) Étalonner (exposition, couleur, application de LUT). 7) Mixer le son (niveaux, voix au-dessus de la musique). 8) Exporter selon le cahier des charges de diffusion (codec, définition, débit, format vertical ou horizontal, sous-titres).</div>\n<p>Les logiciels de montage vont des applications simples, adaptées aux réseaux sociaux, aux logiciels professionnels qui intègrent étalonnage et mixage. Le choix dépend de la durée du film, du nombre de pistes et du niveau d'étalonnage attendu.</p>"
      },
      {
       "titre": "Animer un objet dans l'espace",
       "contenu": "<p>Le commerce en ligne utilise des <strong>vues à 360°</strong> : l'internaute fait tourner le produit à l'écran. Il s'agit d'une suite de photographies fixes, prises pendant que l'objet tourne sur un <strong>plateau tournant</strong> motorisé, piloté par logiciel avec le déclenchement de l'appareil.</p>\n<ul>\n<li>le nombre de vues détermine la fluidité : 24 vues (une tous les 15°), 36 vues (tous les 10°) ou 72 vues (tous les 5°) ;</li>\n<li>l'éclairage doit rester parfaitement constant et ne pas créer de reflet qui « saute » d'une vue à l'autre ;</li>\n<li>l'objet est centré sur l'axe de rotation, sans quoi il semble osciller ;</li>\n<li>l'exposition, la balance des blancs et la mise au point sont en manuel pour toute la série ;</li>\n<li>l'export se fait en séquence d'images intégrée par un lecteur web, ou en courte vidéo en boucle.</li>\n</ul>\n<p>D'autres formes d'animation à partir d'images fixes existent : l'<strong>animation image par image</strong> (stop motion), où l'on déplace l'objet légèrement entre chaque vue, et l'<strong>image animée en boucle</strong>, photographie dans laquelle une seule zone bouge.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en image animée comme en photographie, la cohérence d'une série repose sur des réglages manuels fixes. Tout automatisme (exposition, balance, autofocus) crée des variations visibles d'une image à l'autre.</div>"
      }
     ],
     "points_cles": [
      "Une vidéo se décrit par sa définition, son rapport d'image, sa cadence, son codec, son conteneur, son débit et son échantillonnage.",
      "En Europe, 25 i/s ; règle des 180° : temps d'obturation d'environ 1/(2 × cadence).",
      "L'exposition en vidéo se règle avec des filtres ND, l'obturation étant fixée.",
      "Sous éclairage secteur 50 Hz, rester à 1/50 ou 1/100 s pour éviter les bandes.",
      "Profil log : plage dynamique maximale, étalonnage indispensable avec une LUT.",
      "Panoramique, travelling, zoom, plan fixe ; raccords et règle des 180° du montage.",
      "Zébras, fausses couleurs, forme d'onde et focus peaking aident au tournage.",
      "Son à 48 kHz ; synchronisation par clap, forme d'onde ou timecode.",
      "Vue à 360° : plateau tournant, 24 à 72 vues, réglages manuels fixes."
     ],
     "lexique": [
      {
       "terme": "Cadence",
       "def": "Nombre d'images enregistrées ou diffusées par seconde."
      },
      {
       "terme": "Codec",
       "def": "Procédé de compression et de décompression de la vidéo."
      },
      {
       "terme": "Débit",
       "def": "Quantité de données par seconde, en Mb/s, qui conditionne la qualité et le poids du fichier."
      },
      {
       "terme": "Règle des 180°",
       "def": "Recommandation d'un temps d'obturation égal à la moitié de la durée d'une image ; au montage, interdiction de franchir l'axe entre deux personnages."
      },
      {
       "terme": "Profil log",
       "def": "Courbe d'enregistrement qui conserve une plage dynamique maximale au prix d'une image terne."
      },
      {
       "terme": "LUT",
       "def": "Table de correspondance qui transforme les couleurs et le contraste d'une image."
      },
      {
       "terme": "Travelling",
       "def": "Mouvement de caméra par déplacement de celle-ci."
      },
      {
       "terme": "Zébras",
       "def": "Hachures affichées sur les zones dépassant un niveau de luminosité choisi."
      },
      {
       "terme": "Dérushage",
       "def": "Visionnage et tri des prises de vue avant montage."
      },
      {
       "terme": "Timecode",
       "def": "Code temporel commun inscrit dans les fichiers pour synchroniser plusieurs appareils."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — La chaîne numérique et la restitution des images",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpho-image-numerique",
     "titre": "L'image numérique : définition, résolution, codage et formats",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Distinguer définition, résolution et taille d'une image",
      "Calculer une taille d'impression ou une résolution, et décider d'un rééchantillonnage",
      "Différencier image matricielle et image vectorielle",
      "Expliquer la profondeur de codage et calculer le poids d'un fichier non compressé",
      "Choisir un format de fichier et un mode de compression adaptés à l'usage"
     ],
     "sections": [
      {
       "titre": "Définition, résolution et taille",
       "contenu": "<p>Une image numérique matricielle est une grille de <strong>pixels</strong> (de l'anglais <em>picture element</em>), petits carrés de couleur uniforme. Trois notions, souvent confondues, la décrivent.</p>\n<ul>\n<li>La <strong>définition</strong> est le nombre de pixels de l'image : par exemple 6 000 × 4 000 pixels, soit 24 millions de pixels (24 Mpx). C'est la quantité d'information réellement disponible.</li>\n<li>La <strong>résolution</strong> est la densité de pixels sur un support physique, exprimée en <strong>pixels par pouce</strong> (ppp ou ppi ; 1 pouce = 2,54 cm). Elle n'a de sens qu'au moment d'imprimer ou d'afficher.</li>\n<li>La <strong>taille</strong> (ou dimension) est la mesure physique de l'image imprimée, en centimètres.</li>\n</ul>\n<p>Ces trois grandeurs sont liées par la relation :</p>\n<p><strong>taille (en pouces) = définition (en pixels) / résolution (en ppp)</strong>, soit <strong>taille (cm) = pixels / ppp × 2,54</strong></p>\n<p>Ordres de grandeur de résolution d'impression :</p>\n<table>\n<thead><tr><th>Usage</th><th>Résolution habituelle</th></tr></thead>\n<tbody>\n<tr><td>Impression de qualité vue de près (tirage photo, magazine, livre)</td><td>240 à 300 ppp</td></tr>\n<tr><td>Affiche vue à 1 ou 2 m</td><td>100 à 150 ppp</td></tr>\n<tr><td>Bâche, panneau grand format vu de loin</td><td>de 20 à 75 ppp environ</td></tr>\n<tr><td>Écran (web)</td><td>la résolution n'intervient pas ; seule compte la définition en pixels</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une taille d'impression. Image de 6 000 × 4 000 px, imprimeur demandant 300 ppp. 1) Largeur : 6 000 / 300 = 20 pouces ; 20 × 2,54 = 50,8 cm. 2) Hauteur : 4 000 / 300 = 13,33 pouces ; 13,33 × 2,54 ≈ 33,9 cm. 3) Conclusion : un tirage 30 × 45 cm est possible sans rééchantillonnage ; pour un 60 × 90 cm, la résolution tomberait à environ 170 ppp, acceptable pour un tirage vu à un mètre. Calcul inverse : résolution = pixels / taille en pouces = 6 000 / (90 / 2,54) ≈ 169 ppp.</div>\n<p>Pour l'affichage, seul le nombre de pixels compte. Un écran Full HD affiche 1 920 × 1 080 pixels, un écran « 4K » 3 840 × 2 160 pixels ; une image plus grande que l'écran est simplement réduite à l'affichage. La valeur de 72 ppp, encore inscrite par défaut dans de nombreux fichiers destinés au web, n'a aucun effet sur leur affichage : elle n'est qu'une étiquette. C'est pourquoi un client qui demande « une image en 300 ppp » pour un site internet doit être interrogé sur ce qu'il veut réellement : souvent, une définition suffisante en pixels.</p>\n<p>La définition utile d'une image dépend aussi de la qualité optique : un capteur de 45 Mpx associé à un objectif médiocre, à un léger flou de bougé ou à une diffraction marquée ne fournit pas plus de détails réels qu'un capteur de 24 Mpx bien exploité.</p>"
      },
      {
       "titre": "Le rééchantillonnage",
       "contenu": "<p>Modifier la définition d'une image s'appelle le <strong>rééchantillonnage</strong>. Il est réalisé par <strong>interpolation</strong> : le logiciel calcule les nouveaux pixels à partir des pixels voisins.</p>\n<ul>\n<li><strong>Sous-échantillonner</strong> (réduire le nombre de pixels) supprime de l'information de façon définitive ; c'est normal pour le web. On applique ensuite une légère accentuation.</li>\n<li><strong>Suréchantillonner</strong> (augmenter le nombre de pixels) n'ajoute aucun détail réel : il invente des pixels intermédiaires. Les algorithmes récents, dont certains s'appuient sur l'apprentissage automatique, donnent de bons résultats pour un agrandissement modéré, mais ne remplacent pas une prise de vue à la bonne définition.</li>\n</ul>\n<p>Les méthodes d'interpolation : <strong>au plus proche voisin</strong> (rapide, effet d'escalier, utile pour des captures d'écran), <strong>bilinéaire</strong>, <strong>bicubique</strong> (la plus utilisée pour les photographies, avec des variantes « plus lisse » pour agrandir et « plus net » pour réduire).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans la boîte de dialogue de taille d'image d'un logiciel de retouche, changer la résolution de 72 à 300 ppp avec l'option « rééchantillonnage » cochée multiplie le nombre de pixels par plus de 17 et dégrade l'image ; la même opération sans rééchantillonnage ne modifie aucun pixel et réduit seulement la taille d'impression. Il faut toujours savoir laquelle des deux on réalise.</div>"
      },
      {
       "titre": "Image matricielle et image vectorielle",
       "contenu": "<p>Une <strong>image matricielle</strong> (ou bitmap) décrit l'image pixel par pixel. C'est le cas de toutes les photographies. Agrandie au-delà de sa définition, elle se pixellise ou devient floue.</p>\n<p>Une <strong>image vectorielle</strong> décrit l'image par des formes géométriques (points, lignes, courbes, aplats) définies mathématiquement. Elle peut être agrandie à l'infini sans perte. Elle convient aux logos, pictogrammes, textes, plans, mais ne peut pas représenter une photographie.</p>\n<table>\n<thead><tr><th>Critère</th><th>Matricielle</th><th>Vectorielle</th></tr></thead>\n<tbody>\n<tr><td>Contenu</td><td>photographies, images à dégradés complexes</td><td>logos, typographie, illustrations à aplats</td></tr>\n<tr><td>Agrandissement</td><td>limité par la définition</td><td>illimité</td></tr>\n<tr><td>Formats courants</td><td>JPEG, TIFF, PNG, PSD, RAW, HEIF, WebP</td><td>SVG, AI, EPS, PDF vectoriel</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour une affiche associant une photographie et le logo d'un client, le photographe demande le logo en format vectoriel (fichier AI, EPS, SVG ou PDF). Un logo récupéré en petite image sur le site internet du client deviendrait flou une fois agrandi sur l'affiche.</div>"
      },
      {
       "titre": "La profondeur de codage et le poids des fichiers",
       "contenu": "<p>Chaque pixel d'une image en couleur est décrit par trois valeurs (rouge, vert, bleu) appelées <strong>couches</strong>. La <strong>profondeur de codage</strong> (ou profondeur d'échantillonnage) indique le nombre de bits utilisés pour chaque couche, donc le nombre de niveaux possibles :</p>\n<table>\n<thead><tr><th>Profondeur par couche</th><th>Niveaux par couche</th><th>Couleurs possibles en RVB</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>8 bits</td><td>2<sup>8</sup> = 256</td><td>environ 16,7 millions</td><td>diffusion, JPEG, impression finale</td></tr>\n<tr><td>12 ou 14 bits</td><td>4 096 ou 16 384</td><td>plusieurs milliards</td><td>fichiers bruts des appareils</td></tr>\n<tr><td>16 bits</td><td>65 536</td><td>plusieurs milliers de milliards</td><td>retouche, fichiers maîtres</td></tr>\n</tbody>\n</table>\n<p>Travailler en 16 bits évite l'apparition de <strong>postérisation</strong> (cassures en paliers dans les dégradés, comme un ciel) lorsqu'on applique des corrections importantes.</p>\n<p>Le <strong>poids</strong> d'un fichier non compressé se calcule ainsi :</p>\n<p><strong>poids (octets) = largeur (px) × hauteur (px) × nombre de couches × profondeur (bits) / 8</strong></p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le poids d'une image. Image 6 000 × 4 000 px en RVB 8 bits. 1) Nombre de pixels : 24 000 000. 2) Octets par pixel : 3 couches × 8 bits / 8 = 3 octets. 3) Poids : 24 000 000 × 3 = 72 000 000 octets, soit 72 Mo (environ 68,7 Mio si l'on compte 1 Mio = 1 048 576 octets, convention utilisée par certains logiciels). 4) En 16 bits, le poids double : 144 Mo. 5) En CMJN 8 bits (4 couches) : 96 Mo.</div>"
      },
      {
       "titre": "Formats de fichiers et compression",
       "contenu": "<p>La <strong>compression</strong> réduit le poids d'un fichier. Elle est :</p>\n<ul>\n<li><strong>non destructive</strong> (sans perte) : l'image décompressée est identique à l'originale (LZW ou ZIP dans le TIFF, compression du PNG) ; gain modéré ;</li>\n<li><strong>destructive</strong> (avec perte) : une partie de l'information jugée peu visible est supprimée définitivement (JPEG, HEIF, WebP avec perte) ; gain important, mais chaque nouvel enregistrement en JPEG dégrade un peu plus l'image, et une compression forte crée des <strong>artefacts</strong> (blocs de 8 × 8 pixels, halos autour des contours).</li>\n</ul>\n<table>\n<thead><tr><th>Format</th><th>Compression</th><th>Profondeur</th><th>Particularités</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>RAW (CR3, NEF, ARW…) et DNG</td><td>aucune ou sans perte (parfois avec perte légère au choix)</td><td>12 à 14 bits</td><td>données du capteur non dématricées ; format propriétaire, sauf le DNG ouvert</td><td>prise de vue, archivage du négatif numérique</td></tr>\n<tr><td>TIFF</td><td>aucune, LZW ou ZIP</td><td>8 ou 16 bits</td><td>calques possibles, profils, métadonnées</td><td>fichier maître, livraison à l'imprimeur</td></tr>\n<tr><td>PSD</td><td>sans perte</td><td>8, 16 ou 32 bits</td><td>calques, masques, réglages</td><td>travail de retouche</td></tr>\n<tr><td>JPEG</td><td>avec perte, niveau réglable</td><td>8 bits</td><td>universel, léger</td><td>diffusion, envoi client, web</td></tr>\n<tr><td>PNG</td><td>sans perte</td><td>8 ou 16 bits</td><td>transparence</td><td>web, graphismes, détourages</td></tr>\n<tr><td>HEIF, WebP, AVIF</td><td>avec ou sans perte</td><td>8 à 10 bits ou plus selon le format</td><td>plus efficaces que le JPEG à qualité égale</td><td>smartphones, web</td></tr>\n<tr><td>PDF</td><td>variable</td><td>variable</td><td>conteneur de mise en page, peut mêler matriciel et vectoriel</td><td>épreuves, livraison de documents imprimables</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on travaille et on archive dans un format sans perte (RAW, TIFF, PSD), en 16 bits si l'on retouche fortement ; on ne produit un JPEG qu'à la fin, pour une destination précise, à partir du fichier maître.</div>"
      }
     ],
     "points_cles": [
      "Définition = nombre de pixels ; résolution = densité en ppp ; taille = pixels / ppp × 2,54 cm.",
      "300 ppp pour un tirage vu de près ; moins pour une affiche ou une bâche vues de loin.",
      "Le suréchantillonnage n'ajoute pas de détail réel.",
      "Changer la résolution sans rééchantillonner ne modifie aucun pixel.",
      "Photographie = matriciel ; logo et texte = de préférence vectoriel.",
      "8 bits = 256 niveaux par couche ; 16 bits évitent la postérisation en retouche.",
      "Poids non compressé = L × H × couches × bits / 8.",
      "Compression sans perte (TIFF LZW/ZIP, PNG) ou avec perte (JPEG) ; ne pas réenregistrer plusieurs fois un JPEG.",
      "On archive en RAW et en TIFF ou PSD, on livre en JPEG ou TIFF selon la destination."
     ],
     "lexique": [
      {
       "terme": "Pixel",
       "def": "Plus petit élément d'une image matricielle, de couleur uniforme."
      },
      {
       "terme": "Définition",
       "def": "Nombre de pixels d'une image en largeur et en hauteur."
      },
      {
       "terme": "Résolution",
       "def": "Nombre de pixels par pouce sur le support imprimé ou affiché."
      },
      {
       "terme": "Rééchantillonnage",
       "def": "Modification du nombre de pixels d'une image par interpolation."
      },
      {
       "terme": "Interpolation",
       "def": "Calcul de nouveaux pixels à partir des pixels voisins."
      },
      {
       "terme": "Image vectorielle",
       "def": "Image décrite par des formes géométriques, agrandissable sans perte."
      },
      {
       "terme": "Profondeur de codage",
       "def": "Nombre de bits utilisés pour coder chaque couche d'un pixel."
      },
      {
       "terme": "Postérisation",
       "def": "Apparition de paliers visibles dans un dégradé par manque de niveaux."
      },
      {
       "terme": "Compression destructive",
       "def": "Réduction de poids qui supprime définitivement une partie de l'information."
      },
      {
       "terme": "DNG",
       "def": "Format ouvert de fichier brut, alternative aux formats propriétaires des fabricants."
      }
     ]
    },
    {
     "id": "bpho-flux-production-numerique",
     "titre": "Le flux de production numérique : poste de travail, catalogage, développement et sauvegarde",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les composants d'un poste de traitement d'images et leur rôle",
      "Organiser l'ingestion, le nommage et le catalogage des fichiers",
      "Renseigner et exploiter les métadonnées EXIF, IPTC et XMP",
      "Développer un fichier brut de manière non destructive selon le résultat attendu",
      "Mettre en place une stratégie de sauvegarde et de sécurisation des données"
     ],
     "sections": [
      {
       "titre": "Le poste de traitement des images",
       "contenu": "<p>Le traitement des images exige un ordinateur dimensionné pour manipuler des fichiers lourds. Ses composants principaux :</p>\n<table>\n<thead><tr><th>Composant</th><th>Rôle</th><th>Critère pour la photographie</th></tr></thead>\n<tbody>\n<tr><td>Processeur (CPU)</td><td>exécute les calculs</td><td>nombre de cœurs et fréquence : export, fusion, empilement</td></tr>\n<tr><td>Mémoire vive (RAM)</td><td>stocke temporairement les données en cours de traitement</td><td>16 Go au minimum, 32 Go ou plus pour les fichiers à calques et la vidéo</td></tr>\n<tr><td>Carte graphique (GPU)</td><td>gère l'affichage et accélère de nombreux traitements</td><td>de plus en plus sollicitée (réduction de bruit, masques automatiques, vidéo)</td></tr>\n<tr><td>Carte mère</td><td>relie tous les composants</td><td>nombre et type de connecteurs (USB-C, Thunderbolt, emplacements de stockage)</td></tr>\n<tr><td>Stockage interne</td><td>système, logiciels, travaux en cours</td><td>SSD (de préférence NVMe) pour la rapidité</td></tr>\n<tr><td>Écran</td><td>affichage et jugement des images</td><td>dalle de type IPS, gamut proche de l'Adobe RGB, uniformité, calibrable</td></tr>\n<tr><td>Périphériques de saisie</td><td>souris, clavier, tablette graphique</td><td>la tablette à stylet sensible à la pression facilite la retouche locale</td></tr>\n</tbody>\n</table>\n<p>Le poste s'inscrit souvent dans un <strong>réseau</strong> : connexion filaire (Ethernet) pour les transferts lourds, serveur de stockage en réseau (<strong>NAS</strong>) partagé entre plusieurs postes, accès internet pour les livraisons et la sauvegarde distante.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'environnement de retouche est contrôlé : murs et bureau de teinte neutre, lumière ambiante faible et constante, pas de fenêtre dans le dos ni face à l'écran, cabine ou lampe de visualisation normalisée pour comparer tirage et écran. L'entretien comprend le dépoussiérage, les mises à jour du système et des pilotes, la vérification de l'espace disque et de l'état des disques.</div>"
      },
      {
       "titre": "Ingestion, nommage et arborescence",
       "contenu": "<p>L'<strong>ingestion</strong> est la copie des fichiers de la carte vers l'ordinateur. Elle se fait avec un lecteur de cartes rapide, de préférence par le logiciel de catalogage qui peut, en une seule opération, copier, renommer, appliquer des métadonnées et créer une copie de sauvegarde.</p>\n<p>Une <strong>arborescence</strong> claire et constante permet de retrouver n'importe quel fichier des années plus tard. Une organisation fréquente : année, puis dossier par travail daté et nommé.</p>\n<p>Exemple : <em>2026 / 2026-10-08_DUPONT-Mariage / RAW</em>, <em>TIFF</em>, <em>JPEG-client</em>, <em>Video</em>, <em>Documents</em> (devis, autorisations, cahier des charges).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir une règle de nommage des fichiers. 1) Commencer par la date à l'envers (AAAAMMJJ), qui assure un tri chronologique. 2) Ajouter un identifiant court du client ou du projet. 3) Ajouter un numéro séquentiel à 4 chiffres. 4) Éviter les espaces, les accents et les caractères spéciaux, mal gérés par certains systèmes et serveurs. 5) Ne pas inclure d'information susceptible de changer (statut « final », « v2 ») dans le nom des fichiers bruts. Exemple : 20261008_DUPONT_0412.CR3.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> déplacer ou renommer des dossiers directement dans l'explorateur de fichiers, sans passer par le logiciel de catalogage, rompt le lien entre le catalogue et les fichiers : ceux-ci apparaissent « manquants ». Toute réorganisation se fait depuis le logiciel.</div>"
      },
      {
       "titre": "Les métadonnées et le catalogage",
       "contenu": "<p>Les <strong>métadonnées</strong> sont les informations enregistrées avec l'image, mais distinctes des pixels.</p>\n<table>\n<thead><tr><th>Type</th><th>Contenu</th><th>Origine</th></tr></thead>\n<tbody>\n<tr><td>EXIF</td><td>données techniques : date et heure, boîtier, objectif, focale, ouverture, temps de pose, sensibilité, mode de mesure, flash, coordonnées GPS éventuelles</td><td>inscrites automatiquement par l'appareil</td></tr>\n<tr><td>IPTC</td><td>données descriptives et juridiques : auteur, mentions de droit d'auteur (copyright), coordonnées, titre, légende, mots-clés, lieu, instructions et conditions d'utilisation</td><td>renseignées par le photographe ou l'agence</td></tr>\n<tr><td>XMP</td><td>format d'enregistrement qui peut contenir les deux précédentes et les réglages de développement</td><td>logiciels ; dans le fichier ou dans un fichier annexe (.xmp)</td></tr>\n</tbody>\n</table>\n<p>Les métadonnées IPTC sont essentielles pour la protection et la diffusion : une image transmise à un journal ou à une agence doit porter le nom de l'auteur, la mention de droits et une légende exacte (qui, quoi, où, quand). Un <strong>modèle de métadonnées</strong> appliqué à l'ingestion évite de les oublier.</p>\n<p>Le <strong>catalogage</strong> consiste à organiser les images dans une base de données : notes (étoiles), étiquettes de couleur, drapeaux de sélection, mots-clés hiérarchisés, collections. Il permet le <strong>tri</strong> (première sélection), puis la <strong>sélection</strong> finale à livrer, et la recherche rapide dans des dizaines de milliers d'images.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les coordonnées GPS et certaines informations EXIF peuvent révéler le domicile d'une personne ou l'emplacement d'un lieu sensible. À l'export pour le web, on choisit les métadonnées conservées : on garde l'auteur et le droit d'auteur, on retire la localisation si elle n'est pas nécessaire.</div>"
      },
      {
       "titre": "Développer un fichier brut",
       "contenu": "<p>Le fichier <strong>brut</strong> (RAW) contient les données du capteur, non dématricées, avec une profondeur de 12 ou 14 bits. Il doit être <strong>développé</strong> par un logiciel qui effectue le dématriçage et applique les réglages. Le développement est <strong>non destructif</strong> : le fichier original n'est jamais modifié ; le logiciel enregistre une liste d'instructions, et l'image n'est calculée qu'à l'affichage et à l'export.</p>\n<p>Ordre de travail recommandé :</p>\n<ol>\n<li><strong>Profil</strong> de rendu de l'appareil ou profil personnalisé issu d'une charte, et <strong>corrections d'objectif</strong> (distorsion, vignetage, aberrations chromatiques).</li>\n<li><strong>Balance des blancs</strong>, à la pipette sur une zone neutre ou par valeur en kelvins.</li>\n<li><strong>Exposition</strong> globale, puis récupération des hautes lumières et des ombres, points blancs et noirs, en surveillant l'histogramme.</li>\n<li><strong>Contraste</strong> et courbe de tonalité.</li>\n<li><strong>Couleur</strong> : saturation, réglages par teinte (TSL), étalonnage.</li>\n<li><strong>Détails</strong> : réduction du bruit, accentuation de capture modérée.</li>\n<li><strong>Corrections géométriques</strong> : redressement de l'horizon, des verticales, recadrage.</li>\n<li><strong>Retouches locales</strong> : masques (pinceau, dégradé, sélection automatique du sujet ou du ciel), suppression de poussières.</li>\n</ol>\n<p>Les réglages communs à une série (même lumière, même boîtier) se <strong>synchronisent</strong> d'une image à toutes les autres, puis sont ajustés individuellement. Les retouches lourdes (détourage, compositing, retouche de peau, nettoyage d'un produit) se font ensuite dans un logiciel de retouche par <strong>calques</strong> et <strong>masques</strong>, sur un fichier TIFF ou PSD 16 bits.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la retouche doit rester fidèle à la commande et au réel quand l'image a une valeur d'information (reportage de presse, documentation, photographie d'identité). En publicité, les modifications sont plus libres mais encadrées par le droit de la consommation ; certaines images commerciales retouchées pour modifier la silhouette d'un mannequin doivent ainsi porter une mention spécifique.</div>"
      },
      {
       "titre": "Exporter pour une destination",
       "contenu": "<p>L'<strong>export</strong> produit un fichier adapté à une destination à partir du fichier maître. Chaque destination a ses paramètres :</p>\n<table>\n<thead><tr><th>Destination</th><th>Format</th><th>Définition et résolution</th><th>Espace couleur</th></tr></thead>\n<tbody>\n<tr><td>Web, réseaux sociaux</td><td>JPEG qualité 70 à 85 %, ou WebP</td><td>souvent 2 000 à 2 500 px sur le grand côté, selon la plateforme</td><td>sRGB</td></tr>\n<tr><td>Tirage en laboratoire</td><td>JPEG qualité maximale ou TIFF</td><td>dimension finale à 300 ppp</td><td>sRGB ou Adobe RGB selon le laboratoire</td></tr>\n<tr><td>Impression offset (catalogue)</td><td>TIFF ou PDF</td><td>taille finale à 300 ppp</td><td>RVB avec profil, ou CMJN selon le profil fourni par l'imprimeur</td></tr>\n<tr><td>Archivage</td><td>RAW ou DNG, TIFF 16 bits</td><td>définition maximale</td><td>espace large (Adobe RGB ou ProPhoto RGB)</td></tr>\n</tbody>\n</table>\n<p>Les logiciels permettent d'enregistrer des <strong>préréglages d'export</strong> qui fixent ces paramètres, le renommage, l'accentuation de sortie (écran ou papier) et un éventuel filigrane, ce qui évite les erreurs répétitives.</p>"
      },
      {
       "titre": "Sauvegarder et sécuriser les données",
       "contenu": "<p>Les fichiers sont le capital du photographe et ceux du client : une perte de données peut entraîner une mise en cause de sa responsabilité. Une stratégie de sauvegarde repose sur la <strong>règle 3-2-1</strong> : au moins <strong>3 copies</strong> des données, sur <strong>2 supports</strong> de nature différente, dont <strong>1 hors du lieu de travail</strong> (stockage distant en ligne ou disque conservé dans un autre lieu).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un système de disques en miroir (RAID 1) protège contre la panne d'un disque, mais ce n'est pas une sauvegarde : une suppression accidentelle, un rançongiciel ou un incendie touchent les deux disques en même temps. De même, un service de synchronisation en ligne reproduit immédiatement une suppression.</div>\n<p>La sécurisation passe aussi par :</p>\n<ul>\n<li>des <strong>mises à jour</strong> régulières du système d'exploitation et des logiciels, installés depuis les sources officielles ; la désinstallation des logiciels inutiles ;</li>\n<li>un <strong>antivirus</strong> et la prudence face aux pièces jointes et aux liens ;</li>\n<li>des <strong>mots de passe</strong> robustes et différents, une authentification à deux facteurs pour les services en ligne ;</li>\n<li>le <strong>chiffrement</strong> des disques portables, qui contiennent souvent des images de personnes ;</li>\n<li>la <strong>vérification</strong> périodique que les sauvegardes peuvent être relues ;</li>\n<li>le respect de la protection des <strong>données personnelles</strong> : fichiers clients, images de personnes identifiables, durée de conservation.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> sécuriser un reportage de mariage. 1) À la prise de vue : double écriture sur deux cartes. 2) Le soir même : ingestion sur le disque de travail avec copie simultanée sur un disque externe. 3) Ne formater les cartes qu'après vérification des deux copies. 4) Sauvegarde automatique nocturne sur le NAS. 5) Copie hebdomadaire hors site (service en ligne ou disque conservé ailleurs). 6) Après livraison : archivage des RAW, des fichiers retouchés et des documents contractuels, pour la durée convenue avec le client.</div>"
      }
     ],
     "points_cles": [
      "Poste de retouche : processeur, 16 à 32 Go de RAM ou plus, GPU, SSD, écran calibrable à large gamut.",
      "L'environnement de retouche est neutre et sa lumière constante.",
      "Ingestion par le logiciel de catalogage, arborescence constante, nommage daté sans espace ni accent.",
      "EXIF : données techniques automatiques ; IPTC : auteur, droits, légende, mots-clés ; XMP : format d'enregistrement.",
      "Le développement RAW est non destructif ; ordre : profil, balance, exposition, contraste, couleur, détails, géométrie, local.",
      "Chaque destination impose format, définition, résolution et espace couleur.",
      "Règle 3-2-1 : trois copies, deux supports, une hors site ; le RAID n'est pas une sauvegarde.",
      "Mises à jour, antivirus, mots de passe, chiffrement et protection des données personnelles."
     ],
     "lexique": [
      {
       "terme": "Mémoire vive",
       "def": "Mémoire temporaire de l'ordinateur où sont chargées les données en cours de traitement."
      },
      {
       "terme": "NAS",
       "def": "Serveur de stockage relié au réseau, partagé entre plusieurs postes."
      },
      {
       "terme": "Ingestion",
       "def": "Copie organisée des fichiers de la carte mémoire vers le système de stockage."
      },
      {
       "terme": "EXIF",
       "def": "Métadonnées techniques inscrites automatiquement par l'appareil."
      },
      {
       "terme": "IPTC",
       "def": "Métadonnées descriptives et juridiques renseignées par le photographe."
      },
      {
       "terme": "XMP",
       "def": "Format d'enregistrement de métadonnées, intégré au fichier ou dans un fichier annexe."
      },
      {
       "terme": "Catalogage",
       "def": "Organisation des images dans une base de données avec notes, mots-clés et collections."
      },
      {
       "terme": "Développement non destructif",
       "def": "Traitement qui enregistre des instructions sans modifier le fichier d'origine."
      },
      {
       "terme": "Calque",
       "def": "Couche superposée d'un fichier de retouche, modifiable indépendamment."
      },
      {
       "terme": "Règle 3-2-1",
       "def": "Principe de sauvegarde : trois copies, deux supports différents, une copie hors site."
      }
     ]
    },
    {
     "id": "bpho-gestion-couleur",
     "titre": "La gestion de la couleur : calibrage, profils ICC et conversions",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Expliquer pourquoi une chaîne numérique doit être calibrée et caractérisée",
      "Calibrer un écran et définir ses paramètres cibles",
      "Créer ou utiliser des profils ICC d'entrée, d'affichage et de sortie",
      "Paramétrer les couleurs d'un logiciel de retouche et choisir entre attribuer et convertir",
      "Choisir une intention de rendu et réaliser une épreuve à l'écran"
     ],
     "sections": [
      {
       "titre": "Pourquoi gérer la couleur",
       "contenu": "<p>Chaque appareil de la chaîne (appareil photo, scanner, écran, imprimante) a sa propre façon de produire ou d'interpréter les couleurs. La même valeur RVB, par exemple R 200, V 30, B 40, donne un rouge différent sur deux écrans, et un troisième rouge une fois imprimée. Sans gestion de la couleur, le photographe retouche une image sur un écran qui ment, et le client reçoit un tirage qui ne ressemble ni à la scène ni à l'écran.</p>\n<p>La <strong>gestion de la couleur</strong> repose sur un principe simple : décrire le comportement de chaque appareil par rapport à un espace de référence indépendant (l'espace CIELAB ou CIE XYZ, appelé <strong>espace de connexion des profils</strong>). Cette description est un <strong>profil ICC</strong> (du nom de l'International Color Consortium). Connaissant le profil de la source et celui de la destination, le système calcule les valeurs à envoyer pour que la couleur perçue soit la même, dans la limite des gamuts.</p>\n<p>Deux opérations sont à distinguer :</p>\n<ul>\n<li>le <strong>calibrage</strong> : régler l'appareil pour l'amener dans un état stable et connu (luminance, point blanc, courbe de réponse) ;</li>\n<li>la <strong>caractérisation</strong> (ou profilage) : mesurer le comportement de l'appareil ainsi calibré et l'enregistrer dans un profil ICC.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un profil n'est valable que pour l'état de l'appareil au moment de la mesure. Un écran vieillit, une imprimante change d'encre ou de papier : le calibrage et le profilage doivent être refaits régulièrement (par exemple tous les mois pour un écran de retouche).</div>"
      },
      {
       "titre": "Calibrer et profiler un écran",
       "contenu": "<p>L'écran se calibre avec une <strong>sonde</strong> : un colorimètre (mesure à travers des filtres) ou un spectrophotomètre (mesure du spectre complet, utilisable aussi pour les impressions). Le logiciel affiche une série de plages de couleur que la sonde, posée sur la dalle, mesure.</p>\n<table>\n<thead><tr><th>Paramètre cible</th><th>Valeur habituelle</th><th>Remarque</th></tr></thead>\n<tbody>\n<tr><td>Point blanc</td><td>D65 (environ 6 500 K)</td><td>D50 (environ 5 000 K) dans certains ateliers orientés impression, pour comparer avec la cabine de lecture</td></tr>\n<tr><td>Luminance du blanc</td><td>80 à 120 cd/m<sup>2</sup></td><td>plus faible pour une préparation à l'impression ; un écran réglé trop lumineux fait livrer des images trop sombres</td></tr>\n<tr><td>Gamma (courbe de réponse)</td><td>2,2</td><td>ou courbe L* selon les logiciels</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calibrer un écran de retouche. 1) Allumer l'écran au moins 30 minutes avant pour qu'il soit stabilisé. 2) Réinitialiser les réglages d'usine, désactiver les modes automatiques (luminosité adaptative, mode lecture). 3) Fixer les cibles dans le logiciel : D65, 100 cd/m<sup>2</sup>, gamma 2,2. 4) Poser la sonde au centre de la dalle, inclinée comme l'écran, à l'abri de la lumière ambiante. 5) Suivre les instructions pour régler luminosité et éventuellement gains RVB. 6) Laisser le logiciel mesurer les plages et générer le profil ICC, qui est automatiquement déclaré au système. 7) Noter la date et programmer le prochain calibrage.</div>\n<p>Un écran haut de gamme peut être <strong>calibré matériellement</strong> : les corrections sont écrites dans l'écran lui-même, sur une précision supérieure à celle de la carte graphique, ce qui évite la postérisation des dégradés.</p>\n<p>La comparaison entre écran et tirage n'a de sens que dans de bonnes conditions d'observation : les tirages sont examinés dans une <strong>cabine de lecture</strong> ou sous une lampe à lumière normalisée D50, d'éclairement constant, et non sous l'éclairage ordinaire du bureau ou près d'une fenêtre. La luminance de l'écran est ajustée pour que le blanc de l'écran et le blanc du papier dans la cabine paraissent de clarté voisine. La plupart des logiciels de calibrage proposent enfin une <strong>vérification</strong> : la sonde mesure des plages de référence et indique l'écart de couleur (noté ΔE) entre la valeur attendue et la valeur affichée ; un écart moyen faible confirme que le profil est fiable.</p>"
      },
      {
       "titre": "Les profils d'entrée et les chartes",
       "contenu": "<p>Pour l'appareil photo et le scanner, on utilise des <strong>chartes</strong> de couleur, dont les plages ont des valeurs connues et mesurées :</p>\n<ul>\n<li>la charte à 24 plages (type ColorChecker), avec des couleurs de peau, de ciel, de feuillage, des primaires et une gamme de gris ; elle sert à créer un profil d'appareil sous une lumière donnée ou simplement à contrôler la balance et la fidélité ;</li>\n<li>les chartes de type IT8, plus détaillées, pour profiler un scanner ;</li>\n<li>la carte gris neutre, pour la balance des blancs et l'exposition.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en reproduction d'œuvres pour un musée, le photographe intègre une charte et une échelle de gris dans une première vue, sous l'éclairage exact de la prise de vue. Le logiciel de développement crée un profil personnalisé à partir de cette vue, appliqué ensuite à toute la série. Les valeurs mesurées sur la charte dans l'image finale servent de contrôle et de preuve de fidélité pour le client.</div>\n<p>Pour un scanner, on numérise la charte IT8 avec les réglages qui seront utilisés (toutes corrections automatiques désactivées), puis le logiciel compare les valeurs obtenues aux valeurs de référence fournies avec la charte et crée le profil.</p>"
      },
      {
       "titre": "Espaces de travail, attribution et conversion",
       "contenu": "<p>Le logiciel de retouche travaille dans un <strong>espace de travail</strong> RVB (sRGB, Adobe RGB, ProPhoto RGB) défini dans ses paramètres de couleur, avec un espace CMJN par défaut et des <strong>règles de gestion</strong> pour les fichiers ouverts. Le réglage recommandé consiste à <strong>conserver les profils incorporés</strong> et à demander un avertissement en cas de profil absent ou différent.</p>\n<p>Deux opérations sont souvent confondues :</p>\n<table>\n<thead><tr><th>Opération</th><th>Ce qui change</th><th>Effet visible</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Attribuer un profil</td><td>l'étiquette qui indique comment interpréter les valeurs ; les valeurs RVB ne changent pas</td><td>l'apparence change</td><td>réparer un fichier sans profil ou mal étiqueté</td></tr>\n<tr><td>Convertir en profil</td><td>les valeurs RVB ou CMJN sont recalculées</td><td>l'apparence est conservée (dans la limite du gamut)</td><td>préparer une image pour une destination (web, imprimeur)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une image en Adobe RGB envoyée sans conversion vers un site web ou un service qui ignore les profils est interprétée comme du sRGB : elle paraît terne et désaturée. Pour toute diffusion numérique, on <strong>convertit</strong> en sRGB et on incorpore le profil.</div>\n<p>La conversion en <strong>CMJN</strong> se fait avec le profil fourni par l'imprimeur, qui correspond au procédé et au papier (par exemple les profils européens de référence pour l'offset sur papier couché, de la famille FOGRA). En l'absence de consigne, on livre en RVB avec profil incorporé et l'on laisse l'imprimeur convertir, après accord écrit.</p>"
      },
      {
       "titre": "Intentions de rendu et épreuvage",
       "contenu": "<p>Lorsque le gamut de destination est plus petit que celui de la source, certaines couleurs ne peuvent pas être reproduites. L'<strong>intention de rendu</strong> indique comment les traiter :</p>\n<table>\n<thead><tr><th>Intention</th><th>Principe</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Perceptive</td><td>comprime l'ensemble des couleurs pour faire entrer le gamut source dans la destination, en conservant les relations entre couleurs</td><td>photographies riches en couleurs saturées</td></tr>\n<tr><td>Colorimétrique relative</td><td>conserve à l'identique les couleurs dans le gamut, ramène les autres à la limite ; adapte le blanc du papier</td><td>la plupart des photographies, couleurs de marque</td></tr>\n<tr><td>Colorimétrique absolue</td><td>comme la relative, mais simule aussi la teinte du blanc du papier</td><td>épreuvage d'un papier sur un autre</td></tr>\n<tr><td>Saturation</td><td>privilégie la vivacité au détriment de l'exactitude</td><td>graphiques, schémas</td></tr>\n</tbody>\n</table>\n<p>L'option de <strong>compensation du point noir</strong>, généralement activée avec l'intention relative, adapte le noir de la source au noir le plus profond de la destination et préserve le détail des ombres.</p>\n<p>L'<strong>épreuvage à l'écran</strong> (soft proofing) simule sur l'écran calibré le rendu de l'image sur une imprimante et un papier donnés, à l'aide de leur profil. L'<strong>alerte de gamut</strong> colore les zones non reproductibles.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une image pour un tirage jet d'encre sur papier mat. 1) Vérifier que l'écran est calibré récemment. 2) Activer l'épreuvage avec le profil ICC de l'imprimante pour ce papier précis. 3) Comparer les intentions perceptive et colorimétrique relative, compensation du point noir activée. 4) Constater la baisse de contraste et de saturation propre au papier mat ; corriger sur un calque de réglage dédié (contraste, saturation de certaines teintes, éclaircissement des ombres). 5) Imprimer en faisant gérer les couleurs par le logiciel, la gestion des couleurs du pilote d'imprimante désactivée. 6) Contrôler le tirage sec sous une lumière normalisée D50.</div>"
      }
     ],
     "points_cles": [
      "Chaque appareil interprète les couleurs à sa façon ; les profils ICC les relient à un espace de référence.",
      "Calibrer = régler dans un état connu ; caractériser = mesurer et créer le profil.",
      "Écran de retouche : D65, 80 à 120 cd/m², gamma 2,2, recalibré régulièrement.",
      "Chartes à 24 plages pour les appareils, IT8 pour les scanners, carte grise pour la balance.",
      "Attribuer change l'apparence sans changer les valeurs ; convertir change les valeurs en conservant l'apparence.",
      "Diffusion web : convertir en sRGB et incorporer le profil.",
      "Intentions : perceptive, colorimétrique relative, absolue, saturation ; compensation du point noir.",
      "Épreuvage à l'écran avec le profil imprimante-papier ; un seul gestionnaire des couleurs à l'impression.",
      "Les tirages se contrôlent sous lumière normalisée D50."
     ],
     "lexique": [
      {
       "terme": "Profil ICC",
       "def": "Fichier qui décrit le comportement colorimétrique d'un appareil par rapport à un espace de référence."
      },
      {
       "terme": "Calibrage",
       "def": "Réglage d'un appareil dans un état stable et connu."
      },
      {
       "terme": "Caractérisation",
       "def": "Mesure du comportement d'un appareil calibré et création de son profil."
      },
      {
       "terme": "Sonde",
       "def": "Colorimètre ou spectrophotomètre servant à mesurer les couleurs affichées ou imprimées."
      },
      {
       "terme": "Point blanc",
       "def": "Couleur du blanc de référence d'un écran ou d'un éclairage, par exemple D65 ou D50."
      },
      {
       "terme": "Espace de travail",
       "def": "Espace colorimétrique dans lequel le logiciel de retouche traite les images."
      },
      {
       "terme": "Conversion de profil",
       "def": "Recalcul des valeurs d'une image pour conserver son apparence dans un autre espace."
      },
      {
       "terme": "Intention de rendu",
       "def": "Règle de traitement des couleurs hors gamut lors d'une conversion."
      },
      {
       "terme": "Compensation du point noir",
       "def": "Option qui adapte le noir de la source au noir de la destination."
      },
      {
       "terme": "Épreuvage à l'écran",
       "def": "Simulation à l'écran du rendu d'une image sur un procédé d'impression donné."
      }
     ]
    },
    {
     "id": "bpho-impression-restitution",
     "titre": "La restitution des images : procédés d'impression, supports et diffusion",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire le fonctionnement des principaux procédés d'impression photographique",
      "Comparer les procédés selon la qualité, le coût, la rapidité et la pérennité",
      "Choisir un papier et des encres adaptés à une commande",
      "Préparer un fichier pour l'impression : taille, résolution, fonds perdus, accentuation",
      "Intégrer les contraintes environnementales de la restitution"
     ],
     "sections": [
      {
       "titre": "L'impression jet d'encre",
       "contenu": "<p>Le <strong>jet d'encre</strong> projette sur le papier des gouttelettes d'encre de quelques picolitres, à travers des milliers de buses réparties sur une tête d'impression. Deux technologies de tête existent : <strong>piézoélectrique</strong> (un cristal se déforme sous l'effet d'une tension et éjecte la goutte) et <strong>thermique</strong> (une résistance chauffe l'encre et forme une bulle qui chasse la goutte).</p>\n<p>Les imprimantes photographiques utilisent de 8 à 12 encres : cyan, magenta, jaune, noir, complétées par des encres claires (cyan clair, magenta clair), plusieurs gris et parfois des encres qui élargissent le gamut (rouge, orange, vert, violet). Le noir existe en deux versions : <strong>noir photo</strong> pour les papiers brillants, <strong>noir mat</strong> pour les papiers mats.</p>\n<table>\n<thead><tr><th>Type d'encre</th><th>Composition</th><th>Avantages</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Encres à colorants</td><td>colorants dissous dans un liquide</td><td>couleurs éclatantes, rendu brillant homogène, coût faible</td><td>pérennité moindre à la lumière et à l'ozone</td></tr>\n<tr><td>Encres pigmentaires</td><td>fines particules solides en suspension</td><td>grande pérennité, noir profond sur papier mat</td><td>risque de reflets bronzés ou d'irrégularités de brillance sur papier brillant (corrigés par un vernis sur certains modèles)</td></tr>\n</tbody>\n</table>\n<p>Les <strong>traceurs</strong> sont des imprimantes jet d'encre grand format, alimentées en rouleaux de 44 à 64 pouces de large ou plus, utilisées pour les tirages d'exposition, les affiches et la signalétique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une imprimante jet d'encre inutilisée pendant plusieurs semaines peut voir ses buses se boucher. On imprime régulièrement, on lance un test de buses avant un travail important et on évite les nettoyages répétés inutiles, qui consomment beaucoup d'encre.</div>"
      },
      {
       "titre": "Les autres procédés de restitution",
       "contenu": "<table>\n<thead><tr><th>Procédé</th><th>Principe</th><th>Points forts</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Sublimation thermique</td><td>un ruban portant des panneaux de colorant jaune, magenta, cyan et une couche protectrice est chauffé point par point ; le colorant passe à l'état gazeux et se fixe dans le papier</td><td>rapidité, tirage sec et protégé immédiatement, faible coût de maintenance</td><td>tirages événementiels, bornes, photos d'identité, formats fixes de 10 × 15 à 15 × 20 cm environ</td></tr>\n<tr><td>Minilab argentique</td><td>un faisceau laser ou LED expose un papier photographique couleur, développé ensuite dans des bains chimiques</td><td>tirages véritablement photographiques, gros volumes, coût unitaire bas</td><td>laboratoires, tirages grand public et professionnels</td></tr>\n<tr><td>Minilab sec (jet d'encre)</td><td>imprimantes jet d'encre de production à alimentation en rouleaux</td><td>pas de chimie, installation simple</td><td>magasins photo, grande distribution</td></tr>\n<tr><td>Laser (électrophotographie)</td><td>un tambour chargé électriquement attire une poudre (toner), fixée sur le papier par chauffage</td><td>rapidité, coût faible en bureautique</td><td>épreuves, documents, devis, planches-contacts de travail</td></tr>\n<tr><td>Presse numérique</td><td>impression sans plaque, à toner ou à encre liquide, sur machine de production</td><td>petites et moyennes séries personnalisées</td><td>livres photo, albums, cartes, catalogues en petit tirage</td></tr>\n<tr><td>Offset</td><td>impression par plaques et blanchets, en quadrichromie</td><td>très rentable en grandes séries</td><td>catalogues, magazines, affiches en grand nombre</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un studio de portraits scolaires utilise la sublimation thermique pour livrer sur place des tirages aux familles, sous-traite à un laboratoire équipé de minilab les volumes importants de tirages de classe, et confie l'album de fin d'année à un imprimeur sur presse numérique. Chaque destinataire lui fournit son propre cahier des charges de fichiers.</div>"
      },
      {
       "titre": "Les papiers et la pérennité",
       "contenu": "<p>Le papier influence autant le rendu que l'imprimante. Ses caractéristiques :</p>\n<ul>\n<li>la <strong>surface</strong> : brillante, satinée, lustrée (perlée), mate, texturée ;</li>\n<li>le <strong>support</strong> : papier enduit de résine (RC), plus économique ; papier baryté, à couche de sulfate de baryum, rendu proche du tirage argentique traditionnel ; papiers « beaux-arts » à base de coton ou d'alpha-cellulose, sans acide ;</li>\n<li>le <strong>grammage</strong>, en g/m<sup>2</sup> (de 180 à plus de 300 g/m<sup>2</sup> pour les papiers photographiques), et l'épaisseur ;</li>\n<li>la <strong>teinte du blanc</strong> et la présence d'<strong>azurants optiques</strong>, qui rendent le blanc plus éclatant mais dont l'effet diminue avec le temps, provoquant un jaunissement relatif ;</li>\n<li>le <strong>gamut</strong> et la <strong>densité maximale</strong> du noir : plus élevés sur les papiers brillants, plus faibles sur les papiers mats.</li>\n</ul>\n<p>La <strong>pérennité</strong> d'un tirage dépend du couple encre-papier et des conditions de conservation : lumière (surtout les ultraviolets), température, humidité, polluants (ozone). Des laboratoires indépendants publient des estimations de durée de vie en exposition pour les couples encre-papier des principaux fabricants. Pour une vente de tirages d'art, le photographe informe son client du procédé utilisé et des conditions d'exposition recommandées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour un tirage destiné à durer (collection, exposition, vente d'œuvres), on associe encres pigmentaires et papier sans acide et sans azurants optiques ; on protège le tirage par un encadrement avec verre anti-UV, à l'abri du soleil direct et de l'humidité.</div>"
      },
      {
       "titre": "Préparer un fichier pour l'impression",
       "contenu": "<p>Un fichier « prêt à imprimer » respecte plusieurs règles fixées par le prestataire d'impression :</p>\n<ul>\n<li><strong>dimensions</strong> finales exactes et <strong>résolution</strong> adaptée à la distance de vision ;</li>\n<li><strong>fonds perdus</strong> : quand l'image va jusqu'au bord du document, elle doit déborder de quelques millimètres (souvent 3 à 5 mm) au-delà du format final pour éviter un liseré blanc après la coupe ; les textes et éléments importants restent à l'intérieur d'une marge de sécurité ;</li>\n<li><strong>traits de coupe</strong> si l'imprimeur les demande ;</li>\n<li><strong>espace colorimétrique</strong> et <strong>profil</strong> imposés (RVB avec profil, CMJN selon un profil donné) ;</li>\n<li><strong>format de fichier</strong> imposé (TIFF, JPEG qualité maximale, PDF) ;</li>\n<li><strong>accentuation de sortie</strong>, réglée selon le support (plus forte pour un papier mat, qui adoucit l'image) et appliquée sur l'image à sa taille finale.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une photographie pour une couverture de brochure au format A4 (210 × 297 mm), à fond perdu, fonds perdus de 3 mm. 1) Format avec fonds perdus : 216 × 303 mm. 2) En pouces : 216 / 25,4 ≈ 8,50 ; 303 / 25,4 ≈ 11,93. 3) À 300 ppp : 8,50 × 300 ≈ 2 551 px et 11,93 × 300 ≈ 3 579 px. 4) Recadrer l'image à ce rapport, puis la redimensionner à 2 551 × 3 579 px. 5) Vérifier qu'aucun élément important n'est à moins de 5 mm du bord final. 6) Convertir selon le profil demandé par l'imprimeur et appliquer l'accentuation de sortie. 7) Enregistrer en TIFF ou dans le format demandé et joindre une épreuve de contrôle.</div>\n<p>Avant le lancement d'une impression importante, le client valide un <strong>bon à tirer</strong> (BAT), épreuve qui engage les deux parties sur le rendu attendu. Une <strong>épreuve contractuelle</strong> certifiée, imprimée selon une norme de référence, sert de base de comparaison au conducteur de la presse.</p>"
      },
      {
       "titre": "La diffusion numérique et les enjeux environnementaux",
       "contenu": "<p>Une grande partie des images n'est jamais imprimée : elle est diffusée sur des sites, des réseaux sociaux, des galeries en ligne de livraison au client, des écrans en point de vente ou en projection. Les paramètres d'export (sRGB, définition adaptée, compression maîtrisée, métadonnées d'auteur) ont été vus avec le flux de production. S'y ajoutent :</p>\n<ul>\n<li>la <strong>présentation</strong> : galerie privée protégée par mot de passe, diaporama, planche-contact numérique pour la sélection ;</li>\n<li>la <strong>protection</strong> : filigrane discret pour les épreuves de sélection, définition limitée pour les images publiées en ligne, mention de droits dans les métadonnées ;</li>\n<li>l'<strong>adaptation aux formats</strong> des plateformes (vertical, carré, horizontal), qui doit être anticipée dès la prise de vue.</li>\n</ul>\n<p>La restitution a aussi un impact environnemental que le professionnel doit réduire :</p>\n<ul>\n<li>les <strong>bains chimiques</strong> des minilabs argentiques sont des déchets dangereux : ils sont collectés par une filière agréée, jamais rejetés à l'évier ;</li>\n<li>les <strong>cartouches</strong> d'encre et de toner usagées sont reprises par le fabricant ou une filière de recyclage ;</li>\n<li>les <strong>chutes de papier</strong> et les tirages ratés sont triés ; les tests sont réalisés en petit format ;</li>\n<li>le <strong>stockage numérique</strong> consomme de l'énergie : on trie et on supprime les fichiers inutiles, on évite de multiplier les copies non nécessaires.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les fiches de données de sécurité des produits chimiques de laboratoire (révélateurs, blanchiment-fixage) imposent le port de gants et de lunettes, la ventilation du local et des conditions de stockage. Elles doivent être disponibles sur le poste de travail.</div>"
      }
     ],
     "points_cles": [
      "Jet d'encre piézoélectrique ou thermique ; 8 à 12 encres ; noir photo et noir mat.",
      "Encres pigmentaires : pérennité ; encres à colorants : éclat, durée de vie moindre.",
      "Sublimation : rapide et sec ; minilab : papier photographique et chimie ; presse numérique : livres et petites séries.",
      "Papier : surface, support (RC, baryté, coton), grammage, azurants optiques, gamut et noir maximal.",
      "Tirage durable : pigments, papier sans acide sans azurants, protection anti-UV.",
      "Fichier prêt à imprimer : dimensions, résolution, fonds perdus de 3 à 5 mm, profil, format, accentuation de sortie.",
      "Le bon à tirer engage client et prestataire sur le rendu.",
      "Chimie, cartouches, papiers et stockage numérique ont un impact environnemental à réduire."
     ],
     "lexique": [
      {
       "terme": "Tête piézoélectrique",
       "def": "Tête jet d'encre où un cristal déformé par une tension éjecte les gouttes."
      },
      {
       "terme": "Encre pigmentaire",
       "def": "Encre composée de particules solides en suspension, très résistante à la lumière."
      },
      {
       "terme": "Sublimation thermique",
       "def": "Procédé où un colorant chauffé passe à l'état gazeux et se fixe dans le papier."
      },
      {
       "terme": "Minilab",
       "def": "Machine de laboratoire qui expose et développe des tirages en série."
      },
      {
       "terme": "Papier baryté",
       "def": "Papier photographique à couche de sulfate de baryum, au rendu traditionnel."
      },
      {
       "terme": "Azurant optique",
       "def": "Additif qui rend le blanc du papier plus éclatant mais dont l'effet diminue avec le temps."
      },
      {
       "terme": "Grammage",
       "def": "Masse du papier par unité de surface, en g/m²."
      },
      {
       "terme": "Fonds perdus",
       "def": "Débord de l'image au-delà du format final, éliminé à la coupe."
      },
      {
       "terme": "Accentuation de sortie",
       "def": "Renforcement de netteté adapté au support, appliqué à la taille finale."
      },
      {
       "terme": "Bon à tirer",
       "def": "Épreuve validée par le client qui autorise le lancement de l'impression."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Le projet photographique et son cadre juridique",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpho-demarche-projet-commande",
     "titre": "La démarche de projet : de la commande à la proposition argumentée",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Distinguer les champs de la photographie et leurs exigences propres",
      "Analyser une commande pour en extraire contexte, cible, message et contraintes",
      "Mener une recherche documentaire et construire une planche de tendances",
      "Formuler plusieurs hypothèses et les tester par des expérimentations",
      "Organiser la production : planning, équipe, matériel, budget prévisionnel",
      "Présenter et justifier ses choix techniques et esthétiques devant un client ou un jury"
     ],
     "sections": [
      {
       "titre": "Les champs de la photographie",
       "contenu": "<p>Une image n'est jamais produite pour elle-même : elle répond à une <strong>fonction</strong>. Identifier le champ auquel appartient une commande permet de connaître ses codes, ses contraintes et ses destinataires.</p>\n<table>\n<thead><tr><th>Champ</th><th>Fonction principale</th><th>Exemples de commandes</th><th>Exigences dominantes</th></tr></thead>\n<tbody>\n<tr><td>Publicité</td><td>faire désirer un produit, une marque</td><td>campagne d'affichage, packshot, visuel de réseaux sociaux</td><td>respect de la charte graphique, maîtrise totale de l'image, espace réservé au texte</td></tr>\n<tr><td>Illustration</td><td>accompagner un texte, une idée</td><td>couverture de livre, page de magazine, image d'un rapport annuel</td><td>sens, lisibilité, adaptation à la mise en page</td></tr>\n<tr><td>Reportage, presse</td><td>informer, témoigner</td><td>actualité, événement, sujet de société</td><td>véracité, réactivité, légende exacte, retouche limitée</td></tr>\n<tr><td>Photographie d'entreprise</td><td>présenter une organisation</td><td>portraits de collaborateurs, locaux, savoir-faire</td><td>cohérence de série, image valorisante et crédible</td></tr>\n<tr><td>Photographie sociale et de proximité</td><td>conserver un souvenir, un événement privé</td><td>mariage, portrait de famille, photographie scolaire</td><td>relation client, fiabilité, délais</td></tr>\n<tr><td>Photographie technique et scientifique</td><td>documenter avec exactitude</td><td>reproduction d'œuvres, constat, imagerie de laboratoire</td><td>fidélité des couleurs et des dimensions, protocole reproductible</td></tr>\n</tbody>\n</table>\n<p>Une même photographie peut changer de champ selon son usage : une image de reportage achetée par une marque pour une campagne devient une image publicitaire, ce qui modifie les autorisations nécessaires et la valeur des droits cédés.</p>"
      },
      {
       "titre": "Analyser la commande",
       "contenu": "<p>La démarche de projet commence par un <strong>processus d'investigation</strong>. Le client exprime sa demande dans un <strong>cahier des charges</strong> (ou brief), plus ou moins complet. Le photographe doit en extraire et hiérarchiser les informations, puis compléter ce qui manque par des questions.</p>\n<ul>\n<li><strong>Contexte</strong> : qui est le client, son secteur, son histoire, ses images précédentes.</li>\n<li><strong>Objectif</strong> : lancer un produit, recruter, informer, vendre en ligne.</li>\n<li><strong>Cible</strong> : à qui s'adressent les images (âge, catégorie sociale, professionnels ou particuliers).</li>\n<li><strong>Message et ton</strong> : ce que l'image doit faire ressentir (luxe, proximité, dynamisme, sérieux).</li>\n<li><strong>Concurrence</strong> : les images des concurrents, pour s'en distinguer ou respecter des codes du secteur.</li>\n<li><strong>Contraintes techniques</strong> : supports de diffusion, formats, nombre d'images, orientation, espace pour le texte, fichiers à livrer.</li>\n<li><strong>Contraintes esthétiques</strong> : charte graphique, couleurs, références imposées.</li>\n<li><strong>Contraintes de production</strong> : lieu, date, disponibilité des produits ou des personnes, autorisations.</li>\n<li><strong>Budget et délais</strong>.</li>\n<li><strong>Usages et droits</strong> : supports, territoires, durée d'exploitation des images.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> faire une lecture critériée d'un cahier des charges. 1) Lire une première fois en entier sans rien noter. 2) Relire en surlignant d'une couleur différente : objectif et cible, contraintes techniques, contraintes esthétiques, contraintes de production, budget-délais-droits. 3) Reporter chaque information dans un tableau à ces cinq colonnes, sous forme de mots-clés. 4) Repérer les cases vides : ce sont les questions à poser au client. 5) Repérer les contradictions (budget incompatible avec le nombre d'images, délai incompatible avec la saison). 6) Rédiger en trois lignes la reformulation de la demande et la faire valider.</div>"
      },
      {
       "titre": "Rechercher et chercher des idées",
       "contenu": "<p>La <strong>recherche documentaire</strong> rassemble des références : images d'auteurs, campagnes existantes, œuvres d'art, films, matières, couleurs, lieux. Elle s'appuie sur des sources variées (livres, expositions, sites d'agences et de photographes, magazines) et doit être <strong>classée</strong> : par thème, par technique, par ambiance lumineuse, avec la source de chaque document.</p>\n<p>Les idées se construisent ensuite par plusieurs techniques de créativité :</p>\n<ul>\n<li>le <strong>remue-méninges</strong> : produire beaucoup d'idées sans les juger, puis trier ;</li>\n<li>les <strong>associations</strong> d'idées à partir des mots-clés de la commande (champ lexical, contraires, métaphores) ;</li>\n<li>la <strong>planche de tendances</strong> (moodboard) : assemblage d'images, de couleurs et de matières qui définit l'ambiance visée, support de dialogue avec le client et l'équipe.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une référence inspire, elle ne se copie pas. Reproduire de près l'image d'un autre auteur expose à une action en contrefaçon. La planche de tendances est un outil interne ; si elle est transmise au client, elle reste un document de travail mentionnant les auteurs des images.</div>"
      },
      {
       "titre": "Hypothèses, expérimentations et choix",
       "contenu": "<p>Le <strong>processus d'élaboration</strong> transforme les idées en propositions réalisables. Pour chaque piste retenue (en général deux ou trois), le photographe formalise :</p>\n<ul>\n<li>un <strong>croquis</strong> ou une <strong>esquisse</strong> du cadrage et de la composition, qui montre aussi l'emplacement du texte éventuel ;</li>\n<li>un <strong>schéma d'éclairage</strong> et les choix de lumière ;</li>\n<li>les choix techniques : boîtier, focale, point de vue, profondeur de champ, fond, accessoires ;</li>\n<li>les intentions : ce que chaque choix apporte au message.</li>\n</ul>\n<p>Les <strong>expérimentations</strong> (essais d'éclairage, de cadrage, de matières, d'accessoires) permettent de vérifier la faisabilité et l'effet produit. Elles sont conservées et commentées : elles font partie du dossier de projet présenté à l'examen.</p>\n<p>L'<strong>analyse critique</strong> des essais compare chaque piste au cahier des charges : répond-elle à l'objectif ? respecte-t-elle les contraintes ? est-elle réalisable dans le budget et les délais ? Elle débouche sur un choix argumenté.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour une campagne de confiturier artisanal, un photographe présente trois pistes : nature morte « nature » en lumière de fenêtre sur bois brut ; mise en scène au petit-déjeuner avec personnages ; packshot graphique sur aplats de couleur reprenant la charte. Il apporte pour chacune un croquis, une image test et une estimation de coût. Le client retient la première pour les affiches et la troisième pour la boutique en ligne.</div>"
      },
      {
       "titre": "Organiser la production et estimer le budget",
       "contenu": "<p>Une fois la piste validée, la production s'organise :</p>\n<ul>\n<li><strong>planning</strong> (ou rétroplanning à partir de la date de livraison) : repérages, préparation, prise de vue, post-production, validation, livraison ;</li>\n<li><strong>équipe</strong> : assistant, styliste, coiffeur-maquilleur, accessoiriste, modèles ;</li>\n<li><strong>matériel</strong> : liste à cocher, location éventuelle, vérification et charge des batteries la veille ;</li>\n<li><strong>lieu</strong> : studio ou décor naturel, repérage (lumière selon l'heure, alimentation électrique, accès), autorisations ;</li>\n<li><strong>documents</strong> : autorisations de droit à l'image des personnes, autorisations de lieu, contrat avec le client.</li>\n</ul>\n<p>Le <strong>budget prévisionnel</strong> rassemble les coûts : temps de préparation, de prise de vue (souvent compté en demi-journées ou journées), de post-production ; frais techniques (location de studio, de matériel) ; frais de production (déplacements, accessoires, rémunération des modèles et intervenants) ; et la <strong>rémunération des droits d'auteur</strong>, calculée selon l'usage des images. Le <strong>suivi budgétaire</strong> compare ensuite les dépenses réelles au prévisionnel.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir un budget prévisionnel simple. 1) Lister les postes : préparation, prise de vue, post-production, frais techniques, frais de production, droits. 2) Estimer les quantités (nombre de demi-journées, d'images retouchées, de kilomètres). 3) Appliquer les tarifs (internes ou des prestataires). 4) Totaliser par poste, puis ajouter une marge pour les aléas. 5) Comparer au budget du client ; si l'écart est trop grand, proposer des ajustements (moins d'images, une seule journée, réutilisation d'un décor) plutôt que de travailler à perte.</div>"
      },
      {
       "titre": "Présenter et argumenter",
       "contenu": "<p>La proposition est présentée au client, puis, à l'examen, au jury de la soutenance du projet. Une présentation efficace :</p>\n<ol>\n<li>rappelle la demande et la reformulation validée ;</li>\n<li>montre la démarche : références, pistes, essais ;</li>\n<li>présente la proposition retenue et les images ;</li>\n<li>justifie chaque choix technique (lumière, focale, profondeur de champ, traitement) par son effet sur le message et sa réponse aux contraintes ;</li>\n<li>indique les limites et les améliorations possibles.</li>\n</ol>\n<p>L'argumentation s'adresse à un interlocuteur précis : un client non spécialiste attend des bénéfices concrets (« le fond flou laisse la place au slogan »), un jury attend un vocabulaire technique exact. Dans les deux cas, on écoute les remarques et on les prend en compte plutôt que de défendre son travail coûte que coûte.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque choix doit pouvoir répondre à la question « pourquoi ? » en citant le cahier des charges. Un choix esthétique justifié seulement par le goût personnel est un point faible en présentation comme à l'examen.</div>"
      }
     ],
     "points_cles": [
      "Publicité, illustration, reportage, entreprise, photographie sociale, technique : chaque champ a ses codes et ses contraintes.",
      "Le cahier des charges est lu de manière critériée : objectif, cible, contraintes techniques, esthétiques, de production, budget-délais-droits.",
      "Les informations manquantes deviennent des questions au client ; la reformulation est validée.",
      "La recherche documentaire est classée et sourcée ; une référence inspire mais ne se copie pas.",
      "Chaque piste est formalisée par croquis, schéma d'éclairage et choix techniques, puis testée.",
      "La production s'organise : planning, équipe, matériel, lieu, autorisations.",
      "Le budget prévisionnel inclut temps, frais et rémunération des droits ; il fait l'objet d'un suivi.",
      "Chaque choix présenté est justifié par la commande."
     ],
     "lexique": [
      {
       "terme": "Cahier des charges",
       "def": "Document par lequel le client exprime sa demande, ses objectifs et ses contraintes."
      },
      {
       "terme": "Cible",
       "def": "Public auquel les images sont destinées."
      },
      {
       "terme": "Lecture critériée",
       "def": "Lecture d'un document en classant les informations selon des critères définis."
      },
      {
       "terme": "Planche de tendances",
       "def": "Assemblage d'images, couleurs et matières qui définit une ambiance visuelle."
      },
      {
       "terme": "Piste",
       "def": "Hypothèse de réponse créative à une commande."
      },
      {
       "terme": "Croquis",
       "def": "Dessin rapide du cadrage et de la composition prévus."
      },
      {
       "terme": "Repérage",
       "def": "Visite préalable d'un lieu pour en évaluer la lumière, l'espace et les contraintes."
      },
      {
       "terme": "Rétroplanning",
       "def": "Planning construit à rebours à partir de la date de livraison."
      },
      {
       "terme": "Budget prévisionnel",
       "def": "Estimation chiffrée de l'ensemble des coûts d'un projet avant sa réalisation."
      }
     ]
    },
    {
     "id": "bpho-droit-image-auteur",
     "titre": "Le cadre juridique : droit à l'image, droit d'auteur et cession de droits",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Repérer les situations qui exigent une autorisation de la personne photographiée",
      "Expliquer les conditions de protection d'une photographie par le droit d'auteur",
      "Distinguer droits moraux et droits patrimoniaux, et connaître leur durée",
      "Rédiger ou contrôler les clauses essentielles d'une cession de droits",
      "Identifier les obligations liées aux données personnelles et à l'archivage"
     ],
     "sections": [
      {
       "titre": "Le droit à l'image des personnes",
       "contenu": "<p>Chaque personne a droit au respect de sa vie privée (article 9 du Code civil). La jurisprudence en a déduit un <strong>droit à l'image</strong> : toute personne peut s'opposer à la captation et à la diffusion de son image sans son consentement, dès lors qu'elle est <strong>reconnaissable</strong>. Le Code pénal sanctionne en outre le fait de fixer ou de transmettre, sans consentement, l'image d'une personne se trouvant dans un <strong>lieu privé</strong> (article 226-1).</p>\n<p>Le droit à l'image connaît des limites, liées à la liberté d'expression et au droit à l'information, toujours appréciées au cas par cas par les juges et sous réserve du respect de la <strong>dignité</strong> de la personne :</p>\n<ul>\n<li>l'image d'une personne impliquée dans un <strong>événement d'actualité</strong>, publiée pour en rendre compte ;</li>\n<li>l'image d'une <strong>personnalité publique</strong> dans l'exercice de sa fonction ou de son activité publique ;</li>\n<li>l'image d'une <strong>foule</strong> ou d'un groupe dans lequel aucune personne n'est isolée ni mise en valeur ;</li>\n<li>l'illustration d'un <strong>sujet d'intérêt général</strong>, si l'image est en rapport avec le sujet et ne détourne pas son sens.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ces limites ne s'appliquent pas à un usage <strong>publicitaire ou commercial</strong>. Une personne reconnaissable dans une image utilisée pour vendre un produit ou promouvoir une entreprise doit toujours avoir donné une autorisation écrite précise, même si elle a été photographiée dans la rue lors d'un événement public.</div>\n<p>Pour un <strong>mineur</strong>, l'autorisation est donnée par les titulaires de l'autorité parentale (en pratique les deux parents) ; l'avis de l'enfant est recueilli selon son âge et sa maturité. Les <strong>biens</strong> (maison, voiture, animal) ne bénéficient pas d'un droit à l'image comparable : leur propriétaire ne peut s'opposer à une photographie que si elle lui cause un trouble anormal. En revanche, un bâtiment récent ou une œuvre d'art installée dans l'espace public peut être protégé par le <strong>droit d'auteur de son créateur</strong>.</p>"
      },
      {
       "titre": "L'autorisation de droit à l'image",
       "contenu": "<p>L'autorisation est un écrit (formulaire, contrat, courriel explicite) qui doit permettre de prouver le consentement et d'en connaître l'étendue. Elle précise :</p>\n<table>\n<thead><tr><th>Élément</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Identité de la personne (et de ses représentants légaux pour un mineur)</td><td>nom, prénom, adresse, signature</td></tr>\n<tr><td>Identité du photographe et du bénéficiaire</td><td>studio, client utilisateur des images</td></tr>\n<tr><td>Circonstances de la prise de vue</td><td>date, lieu, objet de la séance</td></tr>\n<tr><td>Supports autorisés</td><td>site internet, réseaux sociaux, brochure, affichage</td></tr>\n<tr><td>Durée et territoire</td><td>3 ans, France</td></tr>\n<tr><td>Contrepartie</td><td>rémunération, ou mention d'une autorisation à titre gracieux</td></tr>\n<tr><td>Limites éventuelles</td><td>pas d'association à un sujet politique ou religieux, pas de modification du visage</td></tr>\n</tbody>\n</table>\n<p>Un modèle professionnel rémunéré par l'intermédiaire d'une agence de mannequins relève de règles particulières (contrat de travail, rémunération des droits d'exploitation de son image) ; les conditions sont définies avec l'agence.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour une séance de portraits de salariés destinée au site d'une société, le photographe fournit au client un modèle d'autorisation et le fait signer à chaque personne avant la prise de vue. Le salarié qui refuse n'est pas photographié ; celui qui quitte l'entreprise peut demander le retrait de son portrait selon les termes convenus.</div>"
      },
      {
       "titre": "La photographie, œuvre protégée par le droit d'auteur",
       "contenu": "<p>Le Code de la propriété intellectuelle (CPI) protège les <strong>œuvres de l'esprit</strong>, parmi lesquelles les œuvres photographiques. L'auteur jouit sur son œuvre, <strong>du seul fait de sa création</strong>, d'un droit de propriété incorporelle exclusif (article L111-1). Aucune formalité n'est nécessaire : ni dépôt, ni mention, ni enregistrement.</p>\n<p>La seule condition est l'<strong>originalité</strong> : l'image doit porter l'<strong>empreinte de la personnalité</strong> de son auteur, qui se manifeste par des choix libres et créatifs (cadrage, angle, lumière, moment, mise en scène, traitement). Une photographie purement technique, sans aucun choix, peut se voir refuser la protection ; en cas de litige, c'est au photographe de démontrer ses choix.</p>\n<p>Pour prouver la date de création et la qualité d'auteur, plusieurs moyens existent : conservation des fichiers bruts originaux et de leurs métadonnées, publication datée, dépôt auprès d'un organisme (enveloppe Soleau de l'INPI, dépôt auprès d'un commissaire de justice ou d'une société d'auteurs), horodatage électronique.</p>\n<p>Une œuvre peut avoir plusieurs auteurs. Le CPI distingue :</p>\n<ul>\n<li>l'<strong>œuvre de collaboration</strong>, créée par plusieurs personnes physiques ensemble, qui en sont coauteurs ;</li>\n<li>l'<strong>œuvre collective</strong>, créée à l'initiative d'une personne (souvent une entreprise) qui l'édite sous son nom, les contributions se fondant dans l'ensemble (un catalogue, un magazine) ;</li>\n<li>l'<strong>œuvre composite</strong>, qui incorpore une œuvre préexistante sans la collaboration de son auteur (photographie d'une sculpture, photomontage intégrant l'image d'un autre) : il faut l'autorisation de l'auteur de l'œuvre première.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la commande d'une photographie, même payée, ne transfère pas les droits d'auteur au client. Le contrat de commande et la cession de droits sont deux choses différentes : sans cession écrite, le client n'a pas le droit d'exploiter l'image au-delà de ce qui a été convenu.</div>"
      },
      {
       "titre": "Droits moraux et droits patrimoniaux",
       "contenu": "<p>Le droit d'auteur comprend deux catégories de droits.</p>\n<table>\n<thead><tr><th></th><th>Droits moraux</th><th>Droits patrimoniaux</th></tr></thead>\n<tbody>\n<tr><td>Contenu</td><td>droit de divulgation (décider de rendre l'œuvre publique) ; droit à la paternité (être cité comme auteur) ; droit au respect de l'œuvre (s'opposer à une modification ou à une utilisation qui la dénature) ; droit de retrait et de repentir</td><td>droit de reproduction (fixer l'œuvre sur un support : tirage, impression, fichier) ; droit de représentation (communiquer l'œuvre au public : exposition, site internet, télévision)</td></tr>\n<tr><td>Caractères</td><td>perpétuels, inaliénables (ne peuvent pas être cédés), imprescriptibles</td><td>cessibles, temporaires</td></tr>\n<tr><td>Durée</td><td>sans limite</td><td>toute la vie de l'auteur et 70 ans après sa mort ; l'œuvre entre ensuite dans le <strong>domaine public</strong></td></tr>\n</tbody>\n</table>\n<p>Conséquences pratiques : un client ne peut pas publier une photographie sans le nom de son auteur, sauf accord de celui-ci ; il ne peut pas la recadrer, la retoucher ou l'incruster dans un montage qui la dénature sans autorisation.</p>\n<p>La loi prévoit des <strong>exceptions</strong> (article L122-5 du CPI) où une œuvre divulguée peut être utilisée sans autorisation, par exemple la représentation privée dans le cercle de famille, la copie strictement réservée à l'usage privé du copiste, la parodie, ou certaines utilisations à des fins d'information ou d'enseignement dans des conditions strictes. Ces exceptions s'interprètent de manière restrictive.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une image trouvée sur internet n'est pas « libre de droits » parce qu'elle est accessible. Il faut toujours identifier son auteur et les conditions de sa licence avant toute réutilisation, y compris dans une planche de tendances diffusée ou un document commercial.</div>"
      },
      {
       "titre": "La cession des droits et sa facturation",
       "contenu": "<p>Le photographe peut <strong>céder</strong> tout ou partie de ses droits patrimoniaux. La loi impose que chacun des droits cédés fasse l'objet d'une mention distincte et que le domaine d'exploitation soit délimité <strong>quant à son étendue et à sa destination, quant au lieu et quant à la durée</strong> (article L131-3 du CPI). Une clause trop générale (« cession de tous droits pour tous supports et pour toujours ») est contestable. Tout ce qui n'est pas expressément cédé reste à l'auteur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger ou vérifier une clause de cession. 1) Identifier les images concernées (référence, nombre). 2) Préciser les droits cédés : reproduction, représentation, ou les deux. 3) Préciser les supports et usages : site internet du client, réseaux sociaux, catalogue imprimé à 5 000 exemplaires, affichage. 4) Préciser le territoire (France, Union européenne, monde) et la durée (par exemple 3 ans à compter de la livraison). 5) Préciser l'exclusivité ou non. 6) Indiquer la rémunération des droits, distincte de celle de la prestation de prise de vue. 7) Rappeler l'obligation de mentionner le nom de l'auteur et l'interdiction de modifier l'image sans accord.</div>\n<p>La rémunération de l'auteur est en principe <strong>proportionnelle</strong> aux recettes provenant de l'exploitation ; elle peut être <strong>forfaitaire</strong> dans les cas prévus par la loi, notamment lorsque la base de calcul proportionnelle ne peut pas être déterminée, ce qui est fréquent pour la photographie de commande. Le prix d'une cession dépend de l'usage (publicitaire ou rédactionnel), du support, du tirage ou de l'audience, de la taille de reproduction, du territoire, de la durée et de l'exclusivité. Des organisations professionnelles publient des grilles indicatives.</p>\n<p>Le <strong>devis</strong> et la <strong>facture</strong> font donc apparaître séparément la prestation technique (prise de vue, post-production, frais) et la <strong>cession de droits</strong>, avec le rappel de son étendue. Les règles fiscales et sociales applicables à ces différentes lignes dépendent du statut du photographe et de la nature de l'activité ; elles sont vérifiées auprès des organismes compétents.</p>"
      },
      {
       "titre": "Statut du photographe, données personnelles et archivage",
       "contenu": "<p>Le photographe indépendant exerce sous deux grands cadres, parfois combinés :</p>\n<ul>\n<li>comme <strong>artiste-auteur</strong>, lorsqu'il crée des œuvres originales et vit de la cession de ses droits ou de la vente de ses œuvres ; il relève alors du régime social des artistes-auteurs ;</li>\n<li>comme <strong>artisan photographe</strong> (ou commerçant), lorsqu'il réalise des prestations de services et des ventes : photographies d'identité, tirages, portraits de studio, reportages d'événements privés ; il est immatriculé comme entreprise artisanale.</li>\n</ul>\n<p>La frontière entre ces activités et leurs conséquences sociales et fiscales sont précisées par la réglementation et évoluent : on se renseigne auprès des organismes compétents et des organisations professionnelles. Le photographe peut aussi être <strong>salarié</strong> (studio, entreprise, journal) ; sauf contrat contraire et régimes particuliers comme celui des journalistes, il reste auteur de ses images.</p>\n<p>Les photographies de personnes identifiables, les fichiers clients et les autorisations sont des <strong>données personnelles</strong> au sens du Règlement général sur la protection des données (<strong>RGPD</strong>). Le photographe qui les conserve est responsable de leur traitement :</p>\n<ul>\n<li>il ne collecte que les données nécessaires et informe les personnes de l'usage qui en est fait ;</li>\n<li>il fixe une <strong>durée de conservation</strong> proportionnée (par exemple durée de la relation commerciale et des obligations légales) ;</li>\n<li>il assure la <strong>sécurité</strong> des fichiers (accès protégés, sauvegardes, chiffrement des supports mobiles) ;</li>\n<li>il répond aux demandes d'accès, de rectification et d'effacement des personnes.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un studio de photographie scolaire conserve les fichiers des élèves le temps de la commande des familles et des éventuelles réimpressions annoncées dans les conditions de vente, puis les supprime. Les galeries en ligne de commande sont protégées par un code remis aux seules familles concernées.</div>"
      }
     ],
     "points_cles": [
      "Toute personne reconnaissable dispose d'un droit à l'image fondé sur le respect de la vie privée (article 9 du Code civil).",
      "Actualité, personnalité publique en fonction, foule, sujet d'intérêt général : limites appréciées au cas par cas, jamais pour un usage publicitaire.",
      "L'autorisation écrite précise personnes, supports, durée, territoire, contrepartie ; pour un mineur, les titulaires de l'autorité parentale signent.",
      "Une photographie originale est protégée dès sa création, sans formalité (article L111-1 du CPI).",
      "Droits moraux perpétuels et inaliénables ; droits patrimoniaux cessibles, jusqu'à 70 ans après la mort de l'auteur.",
      "La commande ne vaut pas cession : la cession est écrite, droit par droit, avec étendue, destination, lieu et durée (L131-3).",
      "Devis et facture distinguent la prestation et la cession de droits.",
      "Photos de personnes et fichiers clients sont des données personnelles soumises au RGPD."
     ],
     "lexique": [
      {
       "terme": "Droit à l'image",
       "def": "Droit d'une personne de s'opposer à la captation et à la diffusion de son image sans consentement."
      },
      {
       "terme": "Originalité",
       "def": "Condition de protection d'une œuvre, qui doit porter l'empreinte de la personnalité de son auteur."
      },
      {
       "terme": "Droit moral",
       "def": "Ensemble des droits perpétuels et inaliénables de l'auteur : divulgation, paternité, respect, retrait."
      },
      {
       "terme": "Droit de reproduction",
       "def": "Droit patrimonial de fixer matériellement l'œuvre sur un support."
      },
      {
       "terme": "Droit de représentation",
       "def": "Droit patrimonial de communiquer l'œuvre au public."
      },
      {
       "terme": "Domaine public",
       "def": "Statut d'une œuvre dont les droits patrimoniaux ont expiré."
      },
      {
       "terme": "Œuvre composite",
       "def": "Œuvre nouvelle incorporant une œuvre préexistante sans la collaboration de son auteur."
      },
      {
       "terme": "Cession de droits",
       "def": "Contrat par lequel l'auteur transfère des droits patrimoniaux pour un usage délimité."
      },
      {
       "terme": "Rémunération forfaitaire",
       "def": "Rémunération fixe des droits, admise dans les cas prévus par la loi."
      },
      {
       "terme": "RGPD",
       "def": "Règlement européen encadrant le traitement des données personnelles."
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
     "id": "bpho-doc-cahier-des-charges",
     "titre": "Exploiter un cahier des charges et un dossier ressource",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier la structure d'un cahier des charges photographique et d'un dossier ressource d'examen",
      "Extraire et hiérarchiser les contraintes en les classant par nature",
      "Traduire des exigences exprimées en langage courant en choix techniques",
      "Repérer les incohérences et les informations manquantes",
      "Rédiger une analyse de faisabilité argumentée"
     ],
     "sections": [
      {
       "titre": "Le document et sa place à l'épreuve",
       "contenu": "<p>L'épreuve écrite d'étude technique d'une production photographique part d'un <strong>dossier ressource</strong> : un ensemble de documents décrivant une commande réelle ou réaliste (présentation du client, cahier des charges, images de référence, plans de lieux, fiches techniques, extraits de contrats, tarifs). Le candidat répond à un questionnaire qui lui demande de choisir des moyens de production, d'organiser le travail et de traiter la faisabilité, la gestion des droits et la diffusion des images.</p>\n<p>Le document central est le <strong>cahier des charges</strong> (ou brief). Il n'existe pas de modèle normalisé unique en photographie : chaque agence ou client a le sien. On y retrouve néanmoins presque toujours les mêmes rubriques :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Ce qu'on y cherche</th></tr></thead>\n<tbody>\n<tr><td>Présentation du client</td><td>activité, valeurs, positionnement (haut de gamme, populaire), image existante</td></tr>\n<tr><td>Contexte et objectif</td><td>pourquoi le client commande des images maintenant (lancement, refonte de site, événement)</td></tr>\n<tr><td>Cible</td><td>destinataires des images</td></tr>\n<tr><td>Livrables</td><td>nombre d'images, sujets, formats, orientations, fichiers</td></tr>\n<tr><td>Contraintes graphiques</td><td>charte, couleurs, typographie, emplacement du texte, références</td></tr>\n<tr><td>Conditions de production</td><td>lieu, date, produits, personnes, accès</td></tr>\n<tr><td>Diffusion et droits</td><td>supports, durée, territoire, exclusivité</td></tr>\n<tr><td>Budget et calendrier</td><td>enveloppe, étapes de validation, date de livraison</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> au début de l'épreuve, il faut parcourir l'<strong>ensemble</strong> du dossier ressource avant de répondre à la première question. Une contrainte décisive (date de livraison, interdiction de flash, format vertical) se trouve souvent dans un document annexe et non dans le cahier des charges lui-même.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un cahier des charges. 1) <strong>Survoler</strong> le dossier : lister les documents, leur nature et leur rôle. 2) <strong>Lire</strong> le cahier des charges en entier. 3) <strong>Classer</strong> chaque information dans un tableau à cinq entrées : objectif et cible ; contraintes techniques (formats, définition, nombre d'images) ; contraintes esthétiques (ambiance, couleurs, références) ; contraintes de production (lieu, date, personnes, matériel) ; budget, délais et droits. 4) <strong>Traduire</strong> chaque exigence en conséquence technique (« produit entièrement net » donne une profondeur de champ importante ou un empilement de mises au point). 5) <strong>Croiser</strong> les contraintes pour repérer les incompatibilités. 6) <strong>Lister</strong> les informations manquantes et formuler les questions au client. 7) <strong>Conclure</strong> sur la faisabilité : faisable, faisable sous conditions, ou non faisable en l'état, avec propositions.</div>\n<p>La traduction des exigences est le cœur du travail. Quelques correspondances fréquentes :</p>\n<table>\n<thead><tr><th>Exigence exprimée par le client</th><th>Traduction technique possible</th></tr></thead>\n<tbody>\n<tr><td>« Ambiance chaleureuse, naturelle »</td><td>lumière douce et directionnelle type fenêtre, balance des blancs légèrement chaude, matières naturelles</td></tr>\n<tr><td>« Laisser de la place pour le texte »</td><td>cadrage décentré, zone uniforme ou floue d'une surface définie, faible profondeur de champ</td></tr>\n<tr><td>« Visuels pour bannière web et affiche »</td><td>cadrage large permettant plusieurs recadrages (horizontal très allongé et vertical), définition suffisante pour l'affiche</td></tr>\n<tr><td>« Fond blanc, conforme aux places de marché »</td><td>fond éclairé séparément, blanc pur, produit centré occupant une large part de l'image</td></tr>\n<tr><td>« Couleurs fidèles au produit »</td><td>charte de couleur, balance personnalisée, profil, contrôle sur le produit réel</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier ressource présente la commande suivante, résumée ici sous forme de tableau.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu du cahier des charges</th></tr></thead>\n<tbody>\n<tr><td>Client</td><td>« Savonnerie des Monts », petite entreprise artisanale de savons et cosmétiques solides, vendus en boutique, sur les marchés et sur son site</td></tr>\n<tr><td>Objectif</td><td>lancer une gamme de 6 savons « Plantes des prés » en mai ; refaire les images de la boutique en ligne</td></tr>\n<tr><td>Cible</td><td>femmes et hommes de 25 à 50 ans, sensibles au naturel et au local</td></tr>\n<tr><td>Livrables</td><td>6 packshots (un par savon) sur fond blanc pour la boutique en ligne, carrés, 2 000 × 2 000 px minimum ; 1 image d'ambiance de la gamme pour une affiche 40 × 60 cm verticale et pour une bannière web 1 920 × 600 px</td></tr>\n<tr><td>Ambiance</td><td>« naturelle, lumineuse, artisanale » ; fleurs séchées, bois clair, lin ; pas de mannequin</td></tr>\n<tr><td>Charte</td><td>vert sauge et blanc cassé ; logo et slogan à placer en haut de l'affiche</td></tr>\n<tr><td>Production</td><td>savons disponibles à partir du 10 avril ; prise de vue au studio du photographe</td></tr>\n<tr><td>Diffusion</td><td>site internet, réseaux sociaux, affiche en boutique et sur les marchés ; durée non précisée</td></tr>\n<tr><td>Calendrier et budget</td><td>livraison le 20 avril au plus tard ; budget global de 900 € hors taxes</td></tr>\n</tbody>\n</table>\n<p>Une annexe précise que les savons mesurent 8 × 6 × 3 cm, qu'ils ont une surface mate gravée du nom de la plante et que deux d'entre eux sont blancs.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Objectif et cible.</strong> Il s'agit d'images commerciales (champ publicitaire et e-commerce) destinées à un public attaché au naturel. Le message à transmettre est l'authenticité artisanale : les images doivent paraître simples et sincères, sans effet spectaculaire.</p>\n<p><strong>2. Contraintes techniques.</strong> Packshots carrés de 2 000 px au moins : un boîtier de 24 Mpx (4 000 px de hauteur) suffit largement, avec marge de recadrage. Pour l'affiche 40 × 60 cm à 300 ppp, il faut environ 4 724 × 7 087 px (40 / 2,54 × 300 et 60 / 2,54 × 300), soit près de 33 Mpx en vertical sans recadrage. À 150 ppp, suffisants pour une affiche vue à un mètre, 2 362 × 3 543 px suffisent. La même image doit aussi fournir une bannière très allongée (rapport 3,2:1) : il faut composer une image d'ambiance large, où le sujet peut être recadré à la fois en vertical et en bandeau. Une seule prise de vue peut difficilement servir aux deux : il est plus sûr de prévoir deux variantes de cadrage de la même mise en scène.</p>\n<p><strong>3. Contraintes esthétiques.</strong> « Lumineuse, naturelle » se traduit par une grande source douce latérale, type fenêtre, et un débouchage léger. La surface mate gravée sera révélée par une lumière plus rasante pour les packshots, afin que le nom de la plante soit lisible. Pour les deux savons blancs sur fond blanc, il faudra réduire l'écart entre le fond et le produit et dessiner les bords avec des panneaux sombres. Le haut de l'affiche doit rester clair et uniforme pour le logo et le slogan.</p>\n<p><strong>4. Contraintes de production.</strong> Savons disponibles le 10 avril, livraison le 20 : dix jours, dont un week-end, pour la prise de vue, la retouche et la validation. C'est réaliste si la prise de vue a lieu dès le 11 ou le 12 avril et que le client valide une sélection sous 48 heures.</p>\n<p><strong>5. Budget et droits.</strong> 900 € HT pour 7 images, accessoires compris, constituent un budget serré mais envisageable pour une demi-journée à une journée de studio. La rubrique diffusion ne précise ni la durée ni le territoire : c'est une information indispensable pour rédiger la cession de droits.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le photographe répondrait au client par un courriel de reformulation listant ses questions : durée d'utilisation souhaitée des images, possibilité de réaliser deux cadrages pour l'affiche et la bannière, fourniture des accessoires (fleurs séchées, linge) ou achat à prévoir dans le budget, personne chargée de valider la sélection.</div>\n<p><strong>Conclusion de faisabilité.</strong> La commande est faisable sous conditions : préciser la durée et le territoire de diffusion pour la cession de droits, accepter deux cadrages de l'image d'ambiance, garantir une validation rapide. Matériel proposé : boîtier de 24 Mpx minimum (ou plus haute définition pour l'affiche), objectif macro de 90 à 100 mm pour les packshots, flashs de studio avec grande boîte à lumière et strip box, table de prise de vue, panneaux blancs et noirs, charte de couleur pour garantir le vert sauge de la charte.</p>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<p>Les erreurs les plus fréquentes dans l'exploitation d'un cahier des charges sont les suivantes :</p>\n<ul>\n<li>répondre à une question sans avoir lu les annexes, où se trouvent souvent les dimensions, les dates ou les restrictions ;</li>\n<li>recopier les exigences du client au lieu de les <strong>traduire</strong> en choix techniques ;</li>\n<li>oublier de vérifier la compatibilité des formats demandés entre eux (vertical, carré, bandeau) ;</li>\n<li>calculer une définition sans préciser la résolution retenue et sa justification ;</li>\n<li>conclure « faisable » sans réserve alors qu'une information manque (droits, délais, validation) ;</li>\n<li>proposer un matériel surdimensionné sans rapport avec le budget, ou insuffisant pour la qualité demandée.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une réponse d'examen doit toujours relier la solution à la contrainte qui la justifie. « J'utilise un objectif macro » ne suffit pas ; « j'utilise un objectif macro de 100 mm car les savons mesurent 8 cm et leur gravure doit être lisible, ce qui impose un rapport de reproduction élevé et une bonne distance de travail pour éclairer » montre la démarche.</div>"
      }
     ],
     "points_cles": [
      "Le dossier ressource se parcourt en entier avant de répondre.",
      "Un cahier des charges contient client, objectif, cible, livrables, charte, production, diffusion, budget et calendrier.",
      "Les informations se classent en cinq familles : objectif-cible, technique, esthétique, production, budget-délais-droits.",
      "Chaque exigence se traduit en conséquence technique.",
      "Les formats demandés doivent être vérifiés entre eux et par le calcul de définition.",
      "Une information manquante (durée, territoire, validation) devient une question au client.",
      "La conclusion de faisabilité est nuancée : faisable, sous conditions, ou non en l'état.",
      "Toute solution proposée est justifiée par la contrainte qu'elle satisfait."
     ],
     "lexique": [
      {
       "terme": "Dossier ressource",
       "def": "Ensemble des documents décrivant la commande, fourni à l'épreuve écrite."
      },
      {
       "terme": "Brief",
       "def": "Autre nom du cahier des charges d'une commande créative."
      },
      {
       "terme": "Livrable",
       "def": "Élément concret à remettre au client : image, fichier, tirage."
      },
      {
       "terme": "Charte graphique",
       "def": "Ensemble des règles visuelles d'une marque : couleurs, typographies, logo, usages."
      },
      {
       "terme": "Bannière",
       "def": "Image très allongée placée en en-tête d'un site ou d'une page."
      },
      {
       "terme": "Faisabilité",
       "def": "Capacité à réaliser une commande dans les conditions techniques, de délai et de budget fixées."
      },
      {
       "terme": "Reformulation",
       "def": "Résumé de la demande par le prestataire, soumis à la validation du client."
      }
     ]
    },
    {
     "id": "bpho-doc-fiches-techniques",
     "titre": "Lire les fiches techniques des matériels de prise de vue et d'éclairage",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Repérer la structure et le vocabulaire d'une fiche technique de boîtier, d'objectif ou de flash",
      "Sélectionner les caractéristiques utiles au regard d'une contrainte de prise de vue",
      "Interpréter une courbe de fonction de transfert de modulation (FTM)",
      "Comparer deux matériels par un tableau de critères pondérés",
      "Justifier le choix d'un équipement par le calcul"
     ],
     "sections": [
      {
       "titre": "Structure d'une fiche technique",
       "contenu": "<p>Une <strong>fiche technique</strong> (ou fiche de spécifications) présente les caractéristiques mesurables d'un matériel. Elle est rédigée par le fabricant, souvent en tableau, et sert à comparer des produits, à vérifier une compatibilité ou à justifier un choix. On la distingue de la <strong>brochure commerciale</strong>, qui met en avant des arguments de vente, et de la <strong>notice d'utilisation</strong>, qui explique les réglages et les précautions.</p>\n<table>\n<thead><tr><th>Matériel</th><th>Rubriques principales</th></tr></thead>\n<tbody>\n<tr><td>Boîtier</td><td>type de capteur, format et définition, plage de sensibilités, obturateur (temps de pose, vitesse de synchronisation), autofocus (nombre de collimateurs, détection de sujets, sensibilité en IL), stabilisation, cadence de rafale, vidéo (définition, cadence, codec, échantillonnage), viseur, écran, cartes, connectique, autonomie, poids, tropicalisation</td></tr>\n<tr><td>Objectif</td><td>focale, ouverture maximale et minimale, monture et format couvert, formule optique (nombre de lentilles et de groupes, verres spéciaux), angle de champ, distance minimale de mise au point, grandissement maximal, nombre de lamelles du diaphragme, stabilisation, diamètre de filetage, dimensions, poids</td></tr>\n<tr><td>Flash de studio</td><td>énergie en joules, plage de puissance en IL, temps de recyclage, durée d'éclair (t0,5 ou t0,1), température de couleur et stabilité, lampe pilote, modes (synchronisation haute vitesse, stroboscopique), alimentation (secteur ou batterie, nombre d'éclairs), monture des façonneurs, poids</td></tr>\n<tr><td>Source LED</td><td>puissance électrique, éclairement à une distance donnée (lux à 1 m), température de couleur réglable, IRC et TLCI, angle du faisceau, alimentation, ventilation (bruit en vidéo)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les valeurs d'une fiche sont mesurées dans les conditions choisies par le fabricant (distance, réflecteur, mode). Deux fiches ne sont comparables que si ces conditions sont les mêmes : un éclairement « à 1 m avec réflecteur » ne se compare pas à un éclairement « à 1 m sans réflecteur ».</div>"
      },
      {
       "titre": "Lire une courbe FTM d'objectif",
       "contenu": "<p>Les fabricants d'objectifs publient des courbes de <strong>fonction de transfert de modulation</strong> (FTM, en anglais MTF). Elles indiquent la capacité de l'objectif à restituer le contraste de motifs fins, du centre au bord de l'image.</p>\n<ul>\n<li>En abscisse : la distance au centre de l'image, en millimètres (de 0 à environ 21,6 mm, demi-diagonale du plein format).</li>\n<li>En ordonnée : le contraste restitué, de 0 à 1 (ou de 0 à 100 %).</li>\n<li>Plusieurs courbes : en général pour des motifs de 10 paires de lignes par millimètre (traduisant le <strong>contraste</strong> général) et de 30 paires de lignes par millimètre (traduisant le <strong>piqué</strong>, la finesse des détails).</li>\n<li>Pour chaque fréquence, deux tracés : <strong>sagittal</strong> (lignes orientées vers le centre) et <strong>méridional</strong> ou tangentiel (lignes perpendiculaires), souvent en trait plein et en pointillés.</li>\n<li>Les courbes sont données à pleine ouverture et parfois à f/8.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> interpréter une FTM. 1) Vérifier l'ouverture et la focale (pour un zoom, une courbe par focale). 2) Plus les courbes sont hautes, meilleur est l'objectif : au-dessus de 0,8 pour 10 pl/mm, le contraste est excellent ; au-dessus de 0,6 pour 30 pl/mm, le piqué est très bon. 3) Observer la chute vers la droite : une forte baisse indique des bords moins nets. 4) Observer l'écart entre sagittal et méridional : un grand écart signale de l'astigmatisme et un flou d'arrière-plan moins harmonieux. 5) Comparer pleine ouverture et f/8 : un objectif dont les courbes remontent beaucoup en fermant gagne à être diaphragmé.</div>\n<p>La FTM ne dit rien de la distorsion, du vignetage, des aberrations chromatiques ni de la résistance au contre-jour. Elle se complète par des tests indépendants et par l'essai.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Une compagnie de danse commande des photographies de ses danseurs en saut, sur fond noir, en studio. L'image doit figer les cheveux et les tissus. Le studio dispose d'une heure de plateau et ne peut pas installer plus de trois torches. Le dossier contient l'extrait de deux fiches techniques de torches autonomes (fabricants anonymisés) :</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Torche A</th><th>Torche B</th></tr></thead>\n<tbody>\n<tr><td>Énergie maximale</td><td>500 J</td><td>400 J</td></tr>\n<tr><td>Plage de puissance</td><td>9 IL, par pas de 0,1 IL</td><td>5 IL, par pas de 0,1 IL</td></tr>\n<tr><td>Recyclage à pleine puissance</td><td>0,9 s</td><td>1,5 s</td></tr>\n<tr><td>Durée d'éclair t0,1 à pleine puissance</td><td>1/800 s</td><td>1/450 s</td></tr>\n<tr><td>Durée d'éclair t0,1 à puissance minimale</td><td>1/10 000 s (mode « figer » activé)</td><td>1/1 600 s</td></tr>\n<tr><td>Stabilité de couleur sur la plage de puissance</td><td>± 75 K</td><td>± 200 K</td></tr>\n<tr><td>Ouverture obtenue à 3 m, 100 ISO, réflecteur standard, pleine puissance</td><td>f/22</td><td>f/16 1/2</td></tr>\n<tr><td>Alimentation</td><td>batterie, 400 éclairs à pleine puissance</td><td>secteur</td></tr>\n<tr><td>Prix de location à la journée</td><td>45 €</td><td>25 €</td></tr>\n</tbody>\n</table>\n<p>Le schéma d'éclairage prévu place deux strip boxes en contre-jour latéral, à 3 m du danseur, et une boîte octogonale de face à 3 m. Les essais montrent que les façonneurs et le fond noir imposent environ 2 IL de perte par rapport au réflecteur standard. L'exposition visée est f/8 à 100 ISO.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Identifier la contrainte décisive.</strong> Figer un danseur en saut, cheveux et tissus compris, exige une durée d'éclair très courte : on vise une durée t0,1 de l'ordre de 1/2 000 s ou moins. En studio, la vitesse d'obturation (1/125 s par exemple) ne fige rien : c'est la durée de l'éclair qui fige, car le fond noir et l'absence de lumière ambiante font que seule la lumière de l'éclair impressionne le capteur.</p>\n<p><strong>2. Calculer la puissance nécessaire.</strong> À pleine puissance et à 3 m, la torche A donne f/22 avec réflecteur standard. Avec les façonneurs (−2 IL), on obtient f/11. On vise f/8, soit 1 IL de moins : la torche sera réglée environ 1 IL sous sa pleine puissance. Pour la torche B : f/16 1/2 moins 2 IL donne environ f/8 1/2 ; on vise f/8, soit environ 1/2 IL sous la pleine puissance.</p>\n<p><strong>3. En déduire la durée d'éclair.</strong> Sur la plupart des torches, la durée d'éclair raccourcit quand on baisse la puissance, mais la fiche ne donne que les valeurs extrêmes. Torche B : à 1/2 IL sous sa pleine puissance, sa durée reste proche de 1/450 s, insuffisante pour figer des cheveux en mouvement. Torche A : à 1 IL sous sa pleine puissance, la durée se situe entre 1/800 s et 1/10 000 s ; il faut vérifier dans la notice la valeur réelle à cette puissance, ou rapprocher les sources et monter la sensibilité à 200 ou 400 ISO pour baisser davantage la puissance et raccourcir l'éclair.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> raisonnement de réglage pour la torche A. 1) Passer à 400 ISO (+2 IL) : la puissance nécessaire baisse de 2 IL supplémentaires, soit 3 IL sous la pleine puissance. 2) Activer le mode « figer ». 3) Vérifier dans la notice la durée t0,1 à ce niveau (on s'attend à une valeur nettement plus courte que 1/800 s). 4) Contrôler sur un essai en agrandissant les cheveux et le bas de la robe à 100 %. 5) Accepter le léger supplément de bruit à 400 ISO, facilement maîtrisé sur fond noir.</div>\n<p><strong>4. Critères secondaires.</strong> La stabilité de couleur de A (± 75 K) garantit une série homogène malgré les variations de puissance ; celle de B (± 200 K) obligerait à corriger image par image. Le recyclage de A (0,9 s à pleine puissance, beaucoup moins à puissance réduite) permet de suivre les sauts successifs ; avec B, une rafale est impossible. L'alimentation sur batterie de A supprime les câbles au sol, appréciable avec des danseurs en mouvement.</p>\n<p><strong>5. Conclusion.</strong> La torche A est la seule compatible avec la contrainte principale. Le surcoût de location (3 × 20 € = 60 € pour la journée) est justifié par la qualité du résultat et par le gain de temps sur un plateau limité à une heure.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les loueurs professionnels fournissent sur demande les fiches techniques complètes et les tableaux de durée d'éclair par niveau de puissance. Les demander avant une prise de vue délicate évite de découvrir sur le plateau que le matériel ne convient pas.</div>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<p>Les erreurs les plus fréquentes dans l'exploitation des fiches techniques sont les suivantes :</p>\n<ul>\n<li>comparer des matériels sur un seul chiffre « vedette » (les joules, les mégapixels) au lieu du critère réellement déterminant pour la prise de vue ;</li>\n<li>confondre durée d'éclair et vitesse d'obturation ;</li>\n<li>confondre t0,5 et t0,1 : la durée t0,5, plus flatteuse, est souvent deux à trois fois plus courte que la t0,1 pour un même éclair ;</li>\n<li>oublier la compatibilité : monture d'objectif, monture des façonneurs, protocole de déclenchement radio, format des cartes ;</li>\n<li>ignorer les conditions de mesure indiquées en petits caractères ;</li>\n<li>conclure sans chiffrer : le calcul (ouverture obtenue, perte des façonneurs, gain de sensibilité) transforme une impression en argument.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un tableau comparatif utile ne contient que les critères liés à la commande, éventuellement pondérés selon leur importance, et se termine par une conclusion qui cite la contrainte décisive.</div>"
      }
     ],
     "points_cles": [
      "Fiche technique (valeurs mesurées), brochure (arguments de vente) et notice (utilisation) sont trois documents différents.",
      "Les valeurs ne se comparent qu'à conditions de mesure identiques.",
      "FTM : 10 pl/mm pour le contraste, 30 pl/mm pour le piqué ; courbes hautes et plates = bon objectif.",
      "L'écart sagittal-méridional révèle l'astigmatisme.",
      "En studio sur fond noir, c'est la durée de l'éclair qui fige le mouvement.",
      "t0,1 est plus exigeante et plus réaliste que t0,5.",
      "Monter la sensibilité permet de baisser la puissance et souvent de raccourcir l'éclair.",
      "Stabilité de couleur, recyclage et alimentation départagent les matériels compatibles.",
      "Toute conclusion de choix est chiffrée et rattachée à la contrainte principale."
     ],
     "lexique": [
      {
       "terme": "Fiche technique",
       "def": "Document du fabricant présentant les caractéristiques mesurables d'un matériel."
      },
      {
       "terme": "FTM",
       "def": "Fonction de transfert de modulation, courbe du contraste restitué par un objectif du centre au bord."
      },
      {
       "terme": "Paires de lignes par millimètre",
       "def": "Unité de finesse des motifs de test utilisés pour mesurer un objectif."
      },
      {
       "terme": "Sagittal",
       "def": "Orientation des motifs de test dirigés vers le centre de l'image."
      },
      {
       "terme": "Méridional",
       "def": "Orientation des motifs de test perpendiculaire à la direction du centre."
      },
      {
       "terme": "Durée t0,1",
       "def": "Durée pendant laquelle l'intensité d'un éclair dépasse 10 % de son maximum."
      },
      {
       "terme": "Stabilité de couleur",
       "def": "Variation maximale de température de couleur d'un flash selon la puissance ou d'un éclair à l'autre."
      },
      {
       "terme": "Critère pondéré",
       "def": "Critère de comparaison affecté d'un coefficient selon son importance pour la commande."
      }
     ]
    },
    {
     "id": "bpho-doc-schema-eclairage-exif",
     "titre": "Exploiter un schéma d'éclairage, une fiche de prise de vue et des métadonnées",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire un schéma d'éclairage et en déduire l'aspect de l'image obtenue",
      "Exploiter une fiche de prise de vue pour reproduire ou contrôler une séance",
      "Lire les métadonnées EXIF d'une série d'images",
      "Diagnostiquer l'origine d'un défaut d'image en croisant ces documents",
      "Proposer des corrections chiffrées"
     ],
     "sections": [
      {
       "titre": "Les documents et leur vocabulaire",
       "contenu": "<p>Trois documents permettent de décrire une prise de vue après coup ou de la préparer :</p>\n<ul>\n<li>le <strong>schéma d'éclairage</strong>, vue de dessus du plateau, avec le sujet, l'appareil, les sources, leurs façonneurs, les réflecteurs et drapeaux, les distances et une légende ;</li>\n<li>la <strong>fiche de prise de vue</strong> (ou fiche technique de séance) : client, date, sujet, matériel utilisé, réglages de l'appareil, puissance ou mesure de chaque source, balance des blancs, remarques ; elle sert à reproduire une séance à l'identique ou à compléter une série plusieurs mois plus tard ;</li>\n<li>les <strong>métadonnées EXIF</strong> de chaque fichier, inscrites par l'appareil, que l'on consulte dans le logiciel de catalogage : date et heure, boîtier, objectif, focale, ouverture, temps de pose, sensibilité, mode d'exposition, mode de mesure, correction d'exposition, flash déclenché ou non, balance des blancs, distance de mise au point sur certains appareils.</li>\n</ul>\n<p>Lire un schéma d'éclairage, c'est être capable de prévoir l'image : où seront les ombres, quel sera le contraste, comment le sujet se détachera du fond. Le raisonnement inverse (déduire l'éclairage d'une image) est également demandé.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un schéma d'éclairage. 1) Repérer l'axe de visée et la focale. 2) Identifier la lumière principale : sa direction par rapport à l'axe (frontale, trois-quarts, latérale, contre-jour) et sa hauteur. 3) Évaluer sa qualité : taille du façonneur et distance au sujet, donc lumière douce ou dure. 4) Repérer le débouchage et le rapport annoncé. 5) Repérer contre-jour, fond et accents. 6) Prévoir l'image : côté éclairé du visage ou de l'objet, forme des ombres, valeur du fond. 7) Vérifier la cohérence avec la fiche de prise de vue (mesures, réglages).</div>"
      },
      {
       "titre": "Les indices d'un défaut et leurs causes",
       "contenu": "<p>Le diagnostic d'un défaut part de son aspect, puis se vérifie dans les métadonnées et la fiche de prise de vue.</p>\n<table>\n<thead><tr><th>Défaut observé</th><th>Causes possibles</th><th>Indices à vérifier dans les documents</th></tr></thead>\n<tbody>\n<tr><td>Bande noire en haut ou en bas de l'image au flash</td><td>temps de pose plus court que la vitesse de synchronisation</td><td>temps de pose EXIF comparé à la vitesse X du boîtier</td></tr>\n<tr><td>Image entièrement floue, contours dédoublés</td><td>flou de bougé</td><td>temps de pose long par rapport à la focale, stabilisation, absence de flash</td></tr>\n<tr><td>Sujet flou, arrière-plan net (ou l'inverse)</td><td>erreur de mise au point, profondeur de champ trop faible</td><td>ouverture, focale, distance, point AF utilisé</td></tr>\n<tr><td>Traînées ou fantôme autour d'un sujet au flash</td><td>lumière ambiante forte avec un temps de pose long</td><td>temps de pose, présence de sources continues sur le schéma</td></tr>\n<tr><td>Dominante de couleur dans une zone de l'image</td><td>lumière mixte</td><td>balance des blancs EXIF, sources présentes dans le décor</td></tr>\n<tr><td>Bandes horizontales sous éclairage artificiel</td><td>scintillement de la source avec un obturateur électronique ou un temps court</td><td>type d'obturateur, temps de pose</td></tr>\n<tr><td>Bruit important</td><td>sensibilité élevée, sous-exposition éclaircie au développement</td><td>ISO, correction d'exposition, histogramme</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un défaut peut avoir plusieurs causes combinées. On ne s'arrête pas à la première explication plausible : on vérifie qu'elle est compatible avec toutes les données disponibles (par exemple, un flou de bougé est peu probable à 1/250 s avec un 50 mm et un flash comme source principale).</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "<p>Un photographe assistant a réalisé seul une série de portraits d'un chef cuisinier dans la cuisine de son restaurant. Le client se plaint de trois images. Le dossier comporte le schéma d'éclairage, décrit ici, et un extrait des métadonnées.</p>\n<p><strong>Schéma d'éclairage (vue de dessus).</strong> Le chef se tient devant le passe-plat, à 3 m d'un mur carrelé blanc. L'appareil est face à lui à 1,5 m. Une boîte à lumière de 60 × 90 cm avec flash de studio est placée à gauche de l'appareil, à 45°, à 1,5 m du chef, en hauteur. Un réflecteur blanc est à droite du chef. Aucune lumière n'est dirigée vers le fond. La légende signale que la cuisine est éclairée par des tubes fluorescents au plafond, laissés allumés pour l'ambiance. Le boîtier utilisé a une vitesse de synchronisation de 1/250 s.</p>\n<table>\n<thead><tr><th>Métadonnée</th><th>Image 1</th><th>Image 2</th><th>Image 3</th></tr></thead>\n<tbody>\n<tr><td>Objectif et focale</td><td>24-70 mm à 35 mm</td><td>24-70 mm à 50 mm</td><td>85 mm</td></tr>\n<tr><td>Mode</td><td>manuel</td><td>manuel</td><td>priorité ouverture</td></tr>\n<tr><td>Ouverture</td><td>f/8</td><td>f/5,6</td><td>f/1,8</td></tr>\n<tr><td>Temps de pose</td><td>1/320 s</td><td>1/30 s</td><td>1/250 s</td></tr>\n<tr><td>Sensibilité</td><td>200 ISO</td><td>800 ISO</td><td>100 ISO</td></tr>\n<tr><td>Flash</td><td>déclenché</td><td>déclenché</td><td>déclenché</td></tr>\n<tr><td>Balance des blancs</td><td>flash (5 500 K)</td><td>flash (5 500 K)</td><td>flash (5 500 K)</td></tr>\n<tr><td>Point AF</td><td>visage</td><td>visage</td><td>collimateur bas (mains)</td></tr>\n</tbody>\n</table>\n<p>Réclamations du client : image 1, « une bande noire en bas » ; image 2, « fond verdâtre et contour flou autour des bras qui bougent » ; image 3, « les mains sont nettes, mais pas les yeux ».</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Image 1.</strong> Le temps de pose de 1/320 s est plus court que la vitesse de synchronisation de 1/250 s. Au moment de l'éclair, le second rideau de l'obturateur masquait déjà une partie du capteur : la zone correspondante n'a reçu que la lumière ambiante, faible, d'où la bande noire. Correction : revenir à 1/250 s ou moins ; l'exposition au flash n'en sera pas modifiée.</p>\n<p><strong>Image 2.</strong> Deux défauts, une même origine : la lumière ambiante des tubes fluorescents. À 1/30 s et 800 ISO, l'exposition à la lumière ambiante devient importante. (a) Le fond, non éclairé par le flash, n'est éclairé que par les tubes, de spectre discontinu avec une dominante verte ; la balance réglée pour le flash ne la neutralise pas. (b) Les bras en mouvement sont figés par l'éclair, mais la lumière continue enregistre aussi leur déplacement pendant 1/30 s : un contour flou s'ajoute à l'image nette (effet de « fantôme »). Correction : temps de pose de 1/160 à 1/250 s et sensibilité ramenée à 200 ISO, ce qui réduit de plusieurs IL la part de la lumière ambiante ; si l'ambiance de cuisine doit rester visible, éclairer le fond par une seconde source avec une gélatine verte (de type « plus vert ») pour harmoniser flash et tubes, puis neutraliser l'ensemble par la balance des blancs.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier par le calcul le défaut de l'image 3. Données : 85 mm, f/1,8, sujet à 1,5 m, c = 0,03 mm. 1) PdC ≈ 2 × N × c × d<sup>2</sup> / f'<sup>2</sup> = 2 × 1,8 × 0,03 × 1 500<sup>2</sup> / 85<sup>2</sup>. 2) = 0,108 × 2 250 000 / 7 225 ≈ 34 mm. 3) La zone nette ne fait qu'environ 3,4 cm. 4) Or l'autofocus a pris le collimateur bas, sur les mains, placées devant le corps, à 20 ou 30 cm en avant du visage. Les yeux sont hors de la zone nette.</div>\n<p><strong>Image 3 (suite).</strong> Le passage en priorité ouverture et à f/1,8 s'écarte du réglage prévu (f/8 en manuel) : pour ouvrir de plus de 4 IL, il a fallu baisser d'autant la puissance du flash, et l'appareil choisit seul un temps de pose d'après la lumière ambiante, ce qui rend la série irrégulière. Correction : passer en mode manuel, f/5,6 à f/8 comme prévu sur le schéma, mise au point sur l'œil le plus proche avec la détection de l'œil, et fermer suffisamment pour que mains et visage soient nets, ou demander au chef de tenir ses mains plus près du plan du visage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour éviter ces erreurs, beaucoup de studios utilisent une liste de vérification au début de toute séance au flash : mode manuel, temps de pose au plus égal à la synchronisation, sensibilité de base, balance réglée, mesure au flashmètre, image test contrôlée à 100 % sur l'écran de l'ordinateur en prise de vue connectée.</div>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<p>Les erreurs les plus fréquentes lors de l'exploitation de ces documents sont les suivantes :</p>\n<ul>\n<li>lire le schéma d'éclairage sans repérer la position de l'appareil, et inverser gauche et droite de l'image ;</li>\n<li>oublier les sources continues présentes dans le décor (fenêtres, éclairages du lieu), qui ne figurent pas toujours sur le schéma mais apparaissent dans la légende ;</li>\n<li>attribuer un flou à la mise au point alors qu'il s'agit d'un bougé, ou l'inverse, sans vérifier le temps de pose et la focale ;</li>\n<li>oublier que les métadonnées affichent souvent la focale réelle, et non l'équivalent plein format, sur un petit capteur ;</li>\n<li>proposer une correction qui en crée une autre (ouvrir pour réduire le bruit sans tenir compte de la profondeur de champ) ;</li>\n<li>conclure sans relier chaque défaut à une donnée précise du document.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un diagnostic complet se présente toujours en trois temps : <strong>constat</strong> (ce qu'on voit), <strong>cause</strong> (prouvée par une donnée du document ou un calcul), <strong>correction</strong> (réglage chiffré).</div>"
      }
     ],
     "points_cles": [
      "Schéma d'éclairage, fiche de prise de vue et EXIF décrivent une séance et permettent de la reproduire.",
      "Lire un schéma, c'est prévoir l'image : ombres, contraste, détachement du fond.",
      "Bande noire au flash : temps de pose plus court que la vitesse de synchronisation.",
      "Fantôme et dominante au flash : lumière ambiante trop présente ; on raccourcit le temps de pose et baisse la sensibilité.",
      "À grande ouverture, quelques centimètres d'écart entre mains et visage suffisent à rendre les yeux flous.",
      "Le mode priorité ouverture avec un flash de studio donne des résultats imprévisibles : on travaille en manuel.",
      "Un défaut peut avoir plusieurs causes ; chaque hypothèse est vérifiée sur toutes les données.",
      "Diagnostic en trois temps : constat, cause prouvée, correction chiffrée."
     ],
     "lexique": [
      {
       "terme": "Fiche de prise de vue",
       "def": "Document qui consigne matériel, réglages et mesures d'une séance pour pouvoir la reproduire."
      },
      {
       "terme": "Métadonnées EXIF",
       "def": "Données techniques de prise de vue inscrites automatiquement dans le fichier."
      },
      {
       "terme": "Collimateur",
       "def": "Zone du cadre utilisée par l'autofocus pour faire la mise au point."
      },
      {
       "terme": "Fantôme",
       "def": "Contour flou qui s'ajoute à l'image figée par l'éclair quand la lumière ambiante est forte."
      },
      {
       "terme": "Prise de vue connectée",
       "def": "Prise de vue où l'appareil transmet chaque image à un ordinateur pour contrôle immédiat."
      },
      {
       "terme": "Lumière ambiante",
       "def": "Lumière présente sur le lieu en dehors des sources installées par le photographe."
      },
      {
       "terme": "Diagnostic",
       "def": "Identification argumentée de la cause d'un défaut à partir d'indices."
      }
     ]
    },
    {
     "id": "bpho-doc-devis-cession-autorisation",
     "titre": "Analyser un devis, une cession de droits et une autorisation de droit à l'image",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Reconnaître la structure et les mentions d'un devis de prestation photographique",
      "Vérifier les calculs et la cohérence d'un devis avec la commande",
      "Contrôler la conformité d'une clause de cession de droits",
      "Contrôler une autorisation de droit à l'image",
      "Rédiger des propositions de correction précises"
     ],
     "sections": [
      {
       "titre": "Les documents contractuels de la commande",
       "contenu": "<p>Une commande photographique professionnelle s'appuie sur plusieurs documents, qui se complètent :</p>\n<table>\n<thead><tr><th>Document</th><th>Rôle</th><th>Qui le rédige, qui le signe</th></tr></thead>\n<tbody>\n<tr><td>Devis</td><td>proposition chiffrée détaillée ; une fois accepté (signature, mention « bon pour accord »), il engage les deux parties</td><td>rédigé par le photographe, signé par le client</td></tr>\n<tr><td>Bon de commande</td><td>commande émise par le client, souvent avec ses propres conditions</td><td>rédigé et signé par le client</td></tr>\n<tr><td>Contrat de commande et de cession</td><td>précise les obligations de chacun et les droits cédés</td><td>signé par les deux parties</td></tr>\n<tr><td>Autorisation de droit à l'image</td><td>consentement des personnes photographiées à l'usage de leur image</td><td>signée par chaque personne ou ses représentants légaux</td></tr>\n<tr><td>Facture</td><td>constate la prestation réalisée et la somme due</td><td>émise par le photographe après la prestation</td></tr>\n</tbody>\n</table>\n<p>Un devis comporte notamment : la date et la durée de validité de l'offre ; l'identification complète du prestataire (nom ou dénomination, adresse, numéro d'immatriculation) et du client ; la description précise de chaque prestation avec quantité, unité et prix unitaire ; les totaux hors taxes, le taux et le montant de la TVA éventuelle, le total toutes taxes comprises ; les conditions de paiement (acompte, délai) ; et, en photographie, l'étendue des droits cédés. Les mentions obligatoires précises dépendent du statut du prestataire et sont à vérifier auprès des organismes compétents.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en photographie de commande, le devis sépare toujours la <strong>prestation technique</strong> (préparation, prise de vue, post-production, frais) et la <strong>cession de droits</strong>, dont l'étendue est décrite. C'est à la fois une exigence de clarté pour le client et une protection pour l'auteur.</div>"
      },
      {
       "titre": "Méthode de contrôle",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler un devis et ses annexes. 1) <strong>Identifier</strong> les parties, la date, la validité. 2) <strong>Comparer</strong> chaque ligne au cahier des charges : nombre d'images, livrables, délais, lieux. 3) <strong>Recalculer</strong> chaque ligne (quantité × prix unitaire), puis les totaux. 4) <strong>Contrôler la clause de cession</strong> : droits mentionnés distinctement, supports et usages, territoire, durée, exclusivité, rémunération distincte, mention du nom de l'auteur. 5) <strong>Contrôler les autorisations</strong> : une par personne reconnaissable, supports, durée, signature des représentants légaux pour un mineur. 6) <strong>Lister</strong> les anomalies par ordre de gravité (risque juridique, erreur de montant, imprécision) et proposer une rédaction corrigée.</div>\n<p>Quelques repères pour juger une clause de cession :</p>\n<table>\n<thead><tr><th>Rédaction</th><th>Appréciation</th></tr></thead>\n<tbody>\n<tr><td>« Cession de tous droits, pour tous supports, pour le monde entier, sans limitation de durée »</td><td>trop générale : le domaine d'exploitation n'est pas délimité ; risque de nullité et perte de valeur pour l'auteur</td></tr>\n<tr><td>« Droits de reproduction et de représentation sur le site internet et les réseaux sociaux du client, pour la France, pendant 3 ans à compter de la livraison, à titre non exclusif »</td><td>conforme : droits nommés, destination, lieu et durée précisés</td></tr>\n<tr><td>« Le client pourra utiliser les photos comme il le souhaite »</td><td>imprécise ; à remplacer par une liste d'usages</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "<p>Une entreprise de travaux publics commande des images pour son nouveau site internet et une plaquette imprimée à 2 000 exemplaires. Le cahier des charges demande 30 portraits individuels de salariés et 20 photographies de chantier montrant les équipes au travail, livrées sous trois semaines. Le photographe a établi le devis suivant.</p>\n<table>\n<thead><tr><th>Désignation</th><th>Quantité</th><th>Unité</th><th>Prix unitaire HT</th><th>Total HT</th></tr></thead>\n<tbody>\n<tr><td>Préparation, repérage du chantier</td><td>0,5</td><td>jour</td><td>400 €</td><td>200 €</td></tr>\n<tr><td>Prise de vue (portraits au siège et chantier)</td><td>1</td><td>jour</td><td>650 €</td><td>650 €</td></tr>\n<tr><td>Post-production, retouche et export</td><td>40</td><td>image</td><td>12 €</td><td>480 €</td></tr>\n<tr><td>Frais de déplacement</td><td>120</td><td>km</td><td>0,60 €</td><td>82 €</td></tr>\n<tr><td>Cession de droits : tous droits, tous supports, monde, durée illimitée</td><td>1</td><td>forfait</td><td>300 €</td><td>300 €</td></tr>\n<tr><td><strong>Total HT</strong></td><td></td><td></td><td></td><td><strong>1 712 €</strong></td></tr>\n</tbody>\n</table>\n<p>Le devis est daté, mais ne mentionne ni durée de validité ni conditions de paiement. Il est accompagné d'un modèle d'autorisation de droit à l'image ainsi rédigé : « Je soussigné(e) … autorise l'entreprise à utiliser mon image. Date et signature. »</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Cohérence avec la commande.</strong> Le cahier des charges demande 30 + 20 = 50 images ; le devis n'en prévoit que 40 en post-production. Soit le photographe propose de réduire la commande, et il doit le dire explicitement, soit la ligne doit passer à 50 images, soit 600 € HT. Par ailleurs, réaliser 30 portraits au siège et 20 images de chantier en une seule journée suppose que les deux lieux soient proches et les personnes disponibles : il faut le vérifier lors du repérage et l'inscrire dans le planning.</p>\n<p><strong>2. Calculs.</strong> Ligne des frais de déplacement : 120 × 0,60 = 72 €, et non 82 €. Total corrigé à quantités inchangées : 200 + 650 + 480 + 72 + 300 = 1 702 € HT. Avec 50 images : 200 + 650 + 600 + 72 + 300 = 1 822 € HT, hors révision du prix des droits.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> recalcul systématique. Pour chaque ligne, multiplier quantité et prix unitaire, puis comparer au total affiché. Additionner ensuite les totaux de lignes et comparer au total général. Une erreur, même faible, fait perdre la confiance du client et peut créer un litige : elle doit être signalée avec la valeur corrigée.</div>\n<p><strong>3. Clause de cession.</strong> « Tous droits, tous supports, monde, durée illimitée » ne délimite pas le domaine d'exploitation : elle ne respecte pas l'exigence de la loi selon laquelle chaque droit cédé est mentionné distinctement et délimité quant à son étendue, sa destination, son lieu et sa durée. Elle est en outre défavorable au photographe, qui cède pour 300 € une exploitation sans limite. Rédaction proposée : « Cession non exclusive des droits de reproduction et de représentation des 50 images livrées, pour le site internet de l'entreprise, ses comptes de réseaux sociaux et une plaquette imprimée à 2 000 exemplaires, pour la France, pendant 5 ans à compter de la livraison. Toute autre utilisation fera l'objet d'un accord préalable. Mention obligatoire du nom du photographe ; aucune modification des images sans son accord. »</p>\n<p><strong>4. Autorisation de droit à l'image.</strong> Le modèle est insuffisant : il ne précise ni les images concernées, ni les supports, ni la durée, ni le territoire, ni la contrepartie. Il faut le compléter : identité de la personne, date et lieu de la séance, supports (site, réseaux sociaux, plaquette), durée identique à celle de la cession, gratuité ou rémunération, possibilité de retrait selon les conditions convenues. Pour les photographies de chantier, chaque salarié reconnaissable doit signer ; les personnes qui refusent sont cadrées de dos, rendues non reconnaissables ou écartées du champ.</p>\n<p><strong>5. Mentions manquantes.</strong> Ajouter la durée de validité de l'offre, les conditions de paiement (par exemple acompte à la signature, solde à la livraison), le délai de livraison de trois semaines, le traitement de la TVA selon le régime applicable et le total toutes taxes comprises.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un chantier, la prise de vue impose aussi de respecter les règles de sécurité du site : accueil sécurité, port des équipements de protection individuelle (casque, chaussures de sécurité, gilet haute visibilité) par le photographe, et images montrant des salariés eux-mêmes correctement équipés. Une photographie montrant un ouvrier sans casque ne serait pas publiable par le client.</div>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<p>Les erreurs les plus fréquentes lors de l'analyse des documents contractuels sont les suivantes :</p>\n<ul>\n<li>contrôler le total général sans recalculer chaque ligne ;</li>\n<li>ne pas comparer le devis au cahier des charges (quantités, délais, livrables) ;</li>\n<li>accepter une clause de cession générale sous prétexte qu'elle « simplifie » ;</li>\n<li>confondre cession de droits d'auteur (droits du photographe) et autorisation de droit à l'image (droit des personnes photographiées) ;</li>\n<li>oublier les représentants légaux pour un mineur, ou se contenter d'une autorisation orale ;</li>\n<li>proposer une correction vague (« préciser la clause ») au lieu d'une rédaction précise.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la durée de l'autorisation de droit à l'image doit couvrir la durée de la cession de droits : si le client peut exploiter les images cinq ans, mais que les salariés n'ont autorisé l'usage de leur image que pour deux ans, le client s'expose à un litige à partir de la troisième année.</div>"
      }
     ],
     "points_cles": [
      "Devis, bon de commande, contrat de cession, autorisation et facture ont des rôles distincts.",
      "Le devis détaille quantités, unités, prix unitaires, totaux, validité et conditions de paiement.",
      "La prestation technique et la cession de droits apparaissent sur des lignes séparées.",
      "Chaque ligne est recalculée et le devis comparé au cahier des charges.",
      "Une cession conforme nomme les droits et précise destination, lieu, durée et exclusivité.",
      "Une autorisation de droit à l'image précise images, supports, durée, territoire et contrepartie.",
      "La durée des autorisations doit couvrir celle de la cession.",
      "Une correction se formule par une rédaction précise, pas par une remarque vague."
     ],
     "lexique": [
      {
       "terme": "Devis",
       "def": "Proposition chiffrée et détaillée d'une prestation, qui engage les parties une fois acceptée."
      },
      {
       "terme": "Bon pour accord",
       "def": "Mention manuscrite accompagnant la signature du client qui accepte un devis."
      },
      {
       "terme": "Hors taxes",
       "def": "Montant calculé avant application de la TVA."
      },
      {
       "terme": "Acompte",
       "def": "Somme versée à la commande, à valoir sur le prix total."
      },
      {
       "terme": "Clause de cession",
       "def": "Partie du contrat qui délimite les droits d'auteur transférés au client."
      },
      {
       "terme": "Non exclusif",
       "def": "Qualifie une cession qui laisse l'auteur libre de céder les mêmes droits à d'autres."
      },
      {
       "terme": "Représentant légal",
       "def": "Personne habilitée à consentir au nom d'un mineur, en principe les titulaires de l'autorité parentale."
      }
     ]
    },
    {
     "id": "bpho-doc-specifications-livraison",
     "titre": "Exploiter des spécifications de livraison et la fiche d'information d'un fichier",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire un cahier technique d'imprimeur ou les spécifications d'une plateforme",
      "Extraire les caractéristiques d'un fichier image depuis sa fiche d'information et son histogramme",
      "Comparer point par point un fichier et des spécifications",
      "Calculer recadrage, définition et résolution effective pour un format donné",
      "Établir la liste ordonnée des opérations de préparation avant livraison"
     ],
     "sections": [
      {
       "titre": "Les documents et leur vocabulaire",
       "contenu": "<p>Avant toute livraison, le photographe confronte ses fichiers aux exigences du destinataire. Ces exigences se trouvent dans :</p>\n<ul>\n<li>le <strong>cahier technique</strong> (ou spécifications techniques) de l'imprimeur, de l'agence de communication ou de l'éditeur : format, fonds perdus, résolution, mode colorimétrique et profil, format de fichier, taux d'encrage, nommage, mode de transfert ;</li>\n<li>les <strong>règles des plateformes</strong> de diffusion (places de marché, réseaux sociaux, banques d'images) : définition minimale ou maximale, rapport d'image, poids maximal, fond, contenu interdit, métadonnées ;</li>\n<li>le <strong>bon à tirer</strong> et l'<strong>épreuve contractuelle</strong>, pour l'impression.</li>\n</ul>\n<p>Le fichier, lui, se décrit par sa <strong>fiche d'information</strong>, affichée par le logiciel de retouche ou de catalogage : définition, résolution inscrite, taille d'impression correspondante, mode (RVB, CMJN, niveaux de gris), profondeur, profil incorporé, format et compression, poids, métadonnées. L'<strong>histogramme</strong> complète la description en montrant la répartition des tons et un éventuel écrêtage.</p>\n<p>Un terme propre à l'impression offset doit être connu : le <strong>taux d'encrage total</strong> (TAC), somme maximale des pourcentages de cyan, magenta, jaune et noir en un point. Un noir obtenu avec 100 % de chaque encre atteindrait 400 % ; les imprimeurs le limitent (souvent autour de 300 % ou moins selon le papier), sous peine de maculage et de séchage trop lent. Le profil CMJN fourni par l'imprimeur applique automatiquement cette limite lors de la conversion.</p>"
      },
      {
       "titre": "Méthode de comparaison pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer un fichier à des spécifications. 1) Construire un tableau à trois colonnes : critère, exigence, valeur du fichier. 2) Y reporter chaque exigence du cahier technique, dans l'ordre du document. 3) Relever la valeur correspondante dans la fiche d'information (en recalculant si nécessaire : taille, résolution effective). 4) Indiquer pour chaque ligne « conforme » ou « non conforme ». 5) Pour chaque non-conformité, indiquer l'opération corrective et l'outil. 6) Ordonner les opérations : recadrage et rééchantillonnage, retouche éventuelle, conversion colorimétrique, accentuation de sortie, enregistrement au format demandé, nommage, contrôle final.</div>\n<p>L'ordre des opérations compte : on recadre et on redimensionne avant d'accentuer (l'accentuation se règle pour la taille finale) ; on convertit en CMJN à la fin, à partir d'un fichier maître RVB 16 bits conservé ; on enregistre une copie sans jamais écraser le maître.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la <strong>résolution effective</strong> d'une image est celle qu'elle aura une fois placée à sa taille finale : pixels disponibles après recadrage divisés par la dimension finale en pouces. La valeur « 72 ppp » ou « 300 ppp » inscrite dans le fichier ne renseigne pas sur la qualité ; seul ce calcul le fait.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "<p>Un magazine régional achète une photographie de paysage pour l'ouvrir en double page. Le dossier contient deux documents.</p>\n<p><strong>Extrait du cahier technique de l'imprimeur.</strong></p>\n<table>\n<thead><tr><th>Critère</th><th>Exigence</th></tr></thead>\n<tbody>\n<tr><td>Format de la double page fini</td><td>420 × 297 mm</td></tr>\n<tr><td>Fonds perdus</td><td>5 mm sur chaque bord extérieur</td></tr>\n<tr><td>Résolution effective</td><td>300 ppp à la taille finale (tolérance : 250 ppp minimum)</td></tr>\n<tr><td>Mode et profil</td><td>CMJN, profil fourni pour offset sur papier couché</td></tr>\n<tr><td>Taux d'encrage total</td><td>300 % maximum</td></tr>\n<tr><td>Format de fichier</td><td>TIFF non compressé ou LZW, 8 bits, sans calques</td></tr>\n<tr><td>Nommage</td><td>numéro de page_nom du photographe.tif</td></tr>\n<tr><td>Recommandation</td><td>aucun élément important à moins de 10 mm du pli central</td></tr>\n</tbody>\n</table>\n<p><strong>Fiche d'information du fichier livré par le photographe.</strong> Fichier « IMG_4521.tif » ; 5 472 × 3 648 pixels ; résolution inscrite 72 ppp ; mode RVB ; profil Adobe RGB (1998) ; 16 bits par couche ; 2 calques (image et calque de réglage de courbes) ; compression ZIP. L'histogramme montre une courbe bien répartie, mais la couche rouge touche le bord droit dans la zone du soleil couchant. La miniature montre un lac au premier plan, des montagnes et, exactement au centre de l'image, une petite chapelle qui constitue le sujet principal.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Format et définition.</strong> Format avec fonds perdus : (420 + 2 × 5) × (297 + 2 × 5) = 430 × 307 mm. Le rapport largeur / hauteur est de 430 / 307 ≈ 1,40, alors que l'image a un rapport de 5 472 / 3 648 = 1,50. Il faut donc recadrer en largeur : en gardant toute la hauteur (3 648 px), la largeur utile est 3 648 × 1,40 ≈ 5 110 px.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la résolution effective après recadrage. 1) Hauteur finale en pouces : 307 / 25,4 ≈ 12,09 pouces. 2) Résolution effective : 3 648 / 12,09 ≈ 302 ppp. 3) Vérification sur la largeur : 5 110 / (430 / 25,4) = 5 110 / 16,93 ≈ 302 ppp. 4) Conclusion : conforme à l'exigence de 300 ppp, sans rééchantillonnage notable. On peut régler la taille d'image à 430 × 307 mm à 300 ppp avec un rééchantillonnage minime.</div>\n<p><strong>2. Composition et pli central.</strong> La chapelle, sujet principal, se trouve exactement au milieu de l'image, donc dans le pli de la double page : elle serait coupée et partiellement avalée par la reliure. Le recadrage de 5 472 à 5 110 px offre une marge de 362 px, qui permet de décaler la chapelle d'au plus 181 px environ, soit 181 / 302 × 25,4 ≈ 15 mm : c'est juste suffisant pour l'écarter de 10 mm du pli, mais il faut vérifier que la chapelle elle-même, si elle est large, ne reste pas à cheval. Si ce n'est pas le cas, il faut proposer une autre image ou une mise en page sur une page simple, en avertissant le client.</p>\n<p><strong>3. Couleur.</strong> Le fichier est en RVB Adobe RGB : il doit être converti avec le profil CMJN de l'imprimeur, intention colorimétrique relative ou perceptive selon l'épreuvage à l'écran, compensation du point noir activée. L'écrêtage de la couche rouge dans le soleil couchant indique des rouges-orangés très saturés, probablement hors du gamut CMJN : l'épreuvage permettra d'évaluer la perte et de la limiter par une légère désaturation locale avant conversion.</p>\n<p><strong>4. Format de fichier.</strong> Non-conformités : 16 bits (exigé 8 bits), 2 calques (exigé sans calques), compression ZIP (exigé non compressé ou LZW), nom de fichier non conforme. Le fichier livré doit être une copie aplatie, en 8 bits, TIFF LZW, nommée selon la règle (par exemple « 12-13_NomDuPhotographe.tif »).</p>\n<p><strong>5. Ordre des opérations.</strong> Sur une copie du fichier maître : recadrage à 1,40 avec décalage du sujet ; épreuvage et corrections locales ; aplatissement ; dimensionnement à 430 × 307 mm à 300 ppp ; conversion en CMJN avec le profil fourni ; passage en 8 bits ; accentuation de sortie modérée pour papier couché ; enregistrement en TIFF LZW ; nommage ; contrôle final de la fiche d'information et des métadonnées d'auteur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le photographe joint à sa livraison une épreuve écran au format PDF ou JPEG légère, une note précisant le profil de conversion utilisé et la mention de crédit à faire figurer près de la photographie. En cas de doute sur le pli, il demande la maquette de mise en page avant de livrer.</div>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<p>Les erreurs les plus fréquentes lors de la préparation d'un fichier selon des spécifications sont les suivantes :</p>\n<ul>\n<li>se fier à la résolution inscrite dans le fichier au lieu de calculer la résolution effective ;</li>\n<li>oublier les fonds perdus dans le calcul du format ;</li>\n<li>recadrer sans tenir compte du pli central d'une double page ou des zones réservées au texte ;</li>\n<li>attribuer un profil CMJN au lieu de convertir, ce qui modifie fortement les couleurs ;</li>\n<li>convertir le fichier maître lui-même et perdre la version RVB 16 bits ;</li>\n<li>livrer un fichier à calques ou dans une compression non acceptée par la chaîne de l'imprimeur ;</li>\n<li>oublier les métadonnées d'auteur et de droits dans le fichier livré.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une non-conformité découverte par l'imprimeur retarde toute la publication. Un contrôle point par point, sous forme de tableau, est plus rapide que la reprise d'une erreur après la mise en page.</div>"
      }
     ],
     "points_cles": [
      "Le cahier technique fixe format, fonds perdus, résolution, mode, profil, taux d'encrage, format de fichier et nommage.",
      "La fiche d'information du fichier et l'histogramme décrivent ce qui est réellement livré.",
      "On compare dans un tableau critère, exigence, valeur, conformité, correction.",
      "Résolution effective = pixels après recadrage / dimension finale en pouces.",
      "Une double page impose de tenir le sujet à l'écart du pli central.",
      "La conversion CMJN se fait avec le profil de l'imprimeur, sur une copie, après épreuvage.",
      "Ordre : recadrage, corrections, aplatissement, dimensionnement, conversion, 8 bits, accentuation, enregistrement, nommage, contrôle.",
      "Le fichier livré conserve les métadonnées d'auteur et de droits."
     ],
     "lexique": [
      {
       "terme": "Cahier technique",
       "def": "Document du destinataire qui fixe les caractéristiques des fichiers à livrer."
      },
      {
       "terme": "Fiche d'information",
       "def": "Affichage des caractéristiques d'un fichier : définition, mode, profil, profondeur, format."
      },
      {
       "terme": "Résolution effective",
       "def": "Résolution réelle d'une image placée à sa taille finale."
      },
      {
       "terme": "Taux d'encrage total",
       "def": "Somme maximale des pourcentages des quatre encres en un point de l'impression."
      },
      {
       "terme": "Pli central",
       "def": "Ligne de reliure d'une double page, où une partie de l'image disparaît."
      },
      {
       "terme": "Aplatissement",
       "def": "Fusion de tous les calques d'un fichier en une seule image."
      },
      {
       "terme": "Crédit photographique",
       "def": "Mention du nom de l'auteur à proximité de la photographie publiée."
      }
     ]
    },
    {
     "id": "bpho-doc-etude-critique-images",
     "titre": "Étude critique : situer, analyser et comparer des photographies",
     "niveau": "1re-Tle",
     "duree": 55,
     "objectifs": [
      "Situer une photographie dans l'histoire des techniques et des courants",
      "Conduire une analyse d'image en trois temps : contexte, dénotation, connotation",
      "Employer le vocabulaire de l'analyse plastique et photographique",
      "Construire une analyse comparative organisée autour d'axes",
      "Rédiger une conclusion qui relie la forme au message"
     ],
     "sections": [
      {
       "titre": "Le document à analyser et l'épreuve",
       "contenu": "<p>L'épreuve écrite d'étude critique de photographies et d'autres œuvres des arts visuels comporte deux parties d'égale valeur : l'une interroge l'influence des contextes historiques, culturels, techniques et socio-économiques sur la création ; l'autre demande une <strong>analyse comparative</strong> d'au moins deux documents iconographiques, dont au moins une photographie, de la naissance de la photographie à nos jours.</p>\n<p>Le document est une reproduction accompagnée d'un <strong>cartel</strong> : nom de l'auteur, titre, date, technique (tirage argentique, épreuve au charbon, impression jet d'encre…), dimensions, lieu de conservation ou de publication. Le cartel est la première source d'information : il permet de situer l'image avant même de la décrire.</p>\n<p>Pour situer une image, il faut disposer de repères. Les plus utiles sont présentés dans le tableau suivant ; ils ne se récitent pas, ils servent à éclairer une analyse.</p>\n<table>\n<thead><tr><th>Période</th><th>Repères techniques</th><th>Courants, auteurs, usages</th></tr></thead>\n<tbody>\n<tr><td>1820-1850</td><td>premières images fixées par Nicéphore Niépce (vers 1826-1827) ; daguerréotype, image unique sur plaque, rendu public en 1839 ; calotype de Talbot, procédé négatif-positif</td><td>portraits, vues d'architecture ; long temps de pose</td></tr>\n<tr><td>1850-1880</td><td>négatif au collodion humide sur verre, tirages sur papier albuminé</td><td>portrait d'atelier (Nadar), photographie de voyage, premiers reportages de guerre</td></tr>\n<tr><td>1880-1914</td><td>plaques sèches au gélatino-bromure, instantané ; appareil Kodak à rouleau (1888) ; autochrome des frères Lumière, premier procédé couleur commercialisé (1907)</td><td>chronophotographie (Muybridge, Marey) ; pictorialisme, qui imite la peinture ; photographie amateur</td></tr>\n<tr><td>1914-1945</td><td>appareils petit format à film 35 mm (Leica, 1925) ; film couleur inversible (années 1930) ; presse illustrée</td><td>photographie pure américaine (Stieglitz, Strand, Weston) ; Nouvelle Vision et Nouvelle Objectivité en Europe (Moholy-Nagy, Renger-Patzsch, August Sander) ; surréalisme (Man Ray) ; photographie documentaire de la Farm Security Administration (Dorothea Lange, Walker Evans) ; essor du photojournalisme</td></tr>\n<tr><td>1945-1970</td><td>reflex 24 × 36, téléobjectifs, flash électronique</td><td>photographie humaniste française (Cartier-Bresson, Doisneau, Ronis, Boubat) ; agence Magnum (1947) ; mode et publicité ; photographie de rue américaine (Robert Frank, Winogrand, Friedlander, Diane Arbus)</td></tr>\n<tr><td>1970-2000</td><td>automatismes, autofocus ; premiers capteurs numériques</td><td>couleur reconnue comme art (William Eggleston, Stephen Shore) ; « New Topographics » ; école de Düsseldorf autour de Bernd et Hilla Becher (Gursky, Struth, Ruff, Höfer) ; photographie mise en scène (Cindy Sherman, Jeff Wall)</td></tr>\n<tr><td>Depuis 2000</td><td>numérique généralisé, smartphone, diffusion en ligne, images générées ou modifiées par calcul</td><td>pratiques contemporaines : très grands formats, séries, photographie et installation, interrogation de la vérité de l'image</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Méthode d'analyse d'une image",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une photographie en trois temps. 1) <strong>Contextualiser</strong> : auteur, date, technique, genre (portrait, paysage, nature morte, reportage, mode, publicité, architecture, photographie scientifique), conditions de production (commande, projet personnel, publication), contexte historique et socio-économique. 2) <strong>Dénoter</strong> : décrire objectivement ce qui est montré et comment, du général au détail ; plans, cadrage, angle de prise de vue, composition et lignes de force, lumière (direction, qualité, contraste), couleur ou noir et blanc, netteté et profondeur de champ, flou de mouvement, valeurs, matières. 3) <strong>Connoter</strong> : interpréter les significations suggérées par ces choix ; symboles, figures de style visuelles (métaphore, opposition, répétition, ellipse), rapport avec la légende ou le texte d'accompagnement, effet produit sur le spectateur. Conclure en reliant la forme au message.</div>\n<p>Le vocabulaire doit être précis. Quelques termes indispensables :</p>\n<table>\n<thead><tr><th>Domaine</th><th>Vocabulaire</th></tr></thead>\n<tbody>\n<tr><td>Cadrage</td><td>horizontal, vertical, carré ; plan d'ensemble, plan moyen, gros plan ; hors-champ</td></tr>\n<tr><td>Angle</td><td>vue frontale, plongée, contre-plongée, vue zénithale</td></tr>\n<tr><td>Composition</td><td>lignes de force, diagonale, règle des tiers, symétrie, premier plan, arrière-plan, rythme, répétition</td></tr>\n<tr><td>Lumière</td><td>lumière naturelle ou artificielle, contre-jour, clair-obscur, lumière douce ou dure, contraste</td></tr>\n<tr><td>Temps</td><td>instantané, pose longue, flou de mouvement, « instant décisif »</td></tr>\n</tbody>\n</table>\n<p>La <strong>polysémie</strong> d'une image (le fait qu'elle puisse avoir plusieurs sens) est réduite par la <strong>légende</strong>, qui oriente la lecture. Une même photographie peut ainsi servir des messages opposés selon le texte qui l'accompagne : l'analyse doit en tenir compte.</p>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "<p>Le sujet propose de comparer deux photographies en noir et blanc prises à Paris.</p>\n<p><strong>Document 1.</strong> Henri Cartier-Bresson, <em>Derrière la gare Saint-Lazare</em>, Paris, 1932, épreuve gélatino-argentique. Description : un homme en manteau sombre et chapeau saute au-dessus d'une étendue d'eau qui inonde un terrain vague ; il est saisi en l'air, le talon à quelques centimètres de la surface, juste avant de toucher l'eau. Son reflet inversé se dessine dans l'eau sous lui. Au sol, une échelle couchée et des débris forment des lignes. À l'arrière-plan, une palissade porte des affiches où une silhouette de danseuse semble elle aussi bondir. Plus loin, des grilles et la silhouette floue de bâtiments. La lumière est grise et diffuse.</p>\n<p><strong>Document 2.</strong> Robert Doisneau, <em>Le Baiser de l'Hôtel de Ville</em>, Paris, 1950, épreuve gélatino-argentique. Description : dans une rue animée, un jeune couple s'embrasse en marchant au milieu des passants, vers le centre de l'image ; le jeune homme entoure les épaules de la jeune femme. Au premier plan, des silhouettes plus ou moins floues ; à l'arrière-plan, la terrasse d'un café, des voitures et la façade de l'Hôtel de Ville de Paris, hors de la zone de netteté. Le couple, net, se détache des passants indifférents.</p>\n<p>Le dossier précise que l'image de Doisneau a été réalisée pour une commande du magazine américain <em>Life</em> sur les amoureux de Paris, et que l'on a appris des décennies plus tard que le couple était composé de deux jeunes comédiens auxquels le photographe avait demandé de rejouer leur baiser.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Introduction.</strong> Ces deux images, prises à Paris à dix-huit ans d'écart, sont devenues des icônes de la photographie dite <strong>humaniste</strong> française, attentive à la vie quotidienne de la rue. Elles semblent toutes deux saisir un instant fugitif. La comparaison permet pourtant de distinguer deux rapports au réel : l'un fondé sur l'attente de l'instant, l'autre sur sa mise en scène. On les étudiera selon trois axes : la saisie du temps, la composition, le rapport à la vérité.</p>\n<p><strong>1. La saisie du temps.</strong> Chez Cartier-Bresson, la photographie repose sur une fraction de seconde : le pied suspendu au-dessus de l'eau crée une tension, car le spectateur sait que l'instant suivant sera un éclaboussement. Le petit appareil 35 mm, léger et discret, permet cette réactivité ; Cartier-Bresson théorisera plus tard la notion d'« instant décisif ». Chez Doisneau, le mouvement est aussi présent (le couple marche, les passants circulent) mais il est plus fluide : le flou des premiers plans traduit l'agitation de la ville, tandis que le couple semble hors du temps.</p>\n<p><strong>2. La composition.</strong> Le document 1 est construit sur des correspondances : l'homme et son reflet forment une symétrie verticale ; le sauteur répond à la danseuse de l'affiche ; les cercles dans l'eau et les lignes de l'échelle rythment le premier plan. L'image est un jeu de rimes visuelles, héritier de la géométrie des avant-gardes. Le document 2 est construit sur une opposition : un couple net, isolé par la faible profondeur de champ et sa position centrale, au milieu d'une foule floue et indifférente. L'arrière-plan identifiable (l'Hôtel de Ville) ancre l'image dans un Paris reconnaissable, ce qui contribuera à son succès comme image-symbole de la ville.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans une analyse comparative, chaque paragraphe traite les deux images à la fois, autour d'un même axe. Juxtaposer deux analyses séparées puis ajouter une conclusion comparative est une erreur de méthode.</div>\n<p><strong>3. Le rapport à la vérité.</strong> L'image de Cartier-Bresson est une prise de vue sur le vif : sa force vient de la coïncidence entre l'ordre de la composition et le hasard de l'instant. L'image de Doisneau, que tout spectateur lit comme un instantané, est en réalité une scène rejouée pour répondre à une commande de presse. Cette révélation ne retire rien à sa qualité plastique, mais elle interroge le statut de la photographie : la ressemblance avec un instantané ne garantit pas la spontanéité. Elle rappelle aussi que la publication dans un magazine, avec une légende, oriente la lecture.</p>\n<p><strong>Conclusion.</strong> Les deux photographies partagent un regard tendre sur la ville et le noir et blanc de la presse illustrée de leur époque. La première affirme la photographie comme art de l'instant et de la géométrie ; la seconde montre que la photographie humaniste construisait aussi des images idéales, répondant aux attentes d'un public international. Cette tension entre document et mise en scène reste d'actualité à l'ère des images retouchées et générées par calcul.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la culture photographique n'est pas qu'un savoir scolaire. Un photographe qui sait expliquer à un client qu'une campagne s'inspire de la photographie humaniste, de la couleur d'Eggleston ou de la frontalité de l'école de Düsseldorf argumente sa proposition et se distingue de ses concurrents.</div>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<p>Les erreurs les plus fréquentes dans une étude critique de photographies sont les suivantes :</p>\n<ul>\n<li>passer directement à l'interprétation sans décrire précisément l'image ;</li>\n<li>décrire sans interpréter : une liste de constats ne constitue pas une analyse ;</li>\n<li>interpréter sans justification : chaque sens proposé doit s'appuyer sur un élément visible ;</li>\n<li>ignorer le cartel (date, technique, commande), qui conditionne pourtant la lecture ;</li>\n<li>plaquer des repères historiques récités, sans lien avec l'image étudiée ;</li>\n<li>juxtaposer deux analyses au lieu de comparer selon des axes communs ;</li>\n<li>employer un vocabulaire vague (« belle lumière », « bien cadré ») au lieu des termes techniques.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne doit jamais inventer une information absente du dossier (nom du modèle, conditions de prise de vue, intention de l'auteur). En cas d'incertitude, on formule une hypothèse argumentée : « le flou des premiers plans laisse supposer un temps de pose relativement long ou un déplacement rapide des passants ».</div>"
      }
     ],
     "points_cles": [
      "L'étude critique comporte une partie sur les contextes de la création et une analyse comparative d'au moins deux documents.",
      "Le cartel (auteur, titre, date, technique, publication) est la première source d'information.",
      "Repères : daguerréotype 1839, Kodak 1888, autochrome 1907, Leica 1925, photographie humaniste après 1945, couleur reconnue dans les années 1970, école de Düsseldorf, numérique.",
      "Analyse en trois temps : contextualisation, dénotation, connotation, puis rapport forme-message.",
      "La légende réduit la polysémie de l'image et oriente sa lecture.",
      "Une comparaison s'organise en axes traitant les deux images ensemble.",
      "Chaque interprétation s'appuie sur un élément visible ; aucune information n'est inventée.",
      "Le vocabulaire technique précis remplace les jugements de goût."
     ],
     "lexique": [
      {
       "terme": "Cartel",
       "def": "Notice accompagnant une œuvre : auteur, titre, date, technique, dimensions, lieu."
      },
      {
       "terme": "Dénotation",
       "def": "Description objective de ce que montre l'image et de la manière dont elle le montre."
      },
      {
       "terme": "Connotation",
       "def": "Ensemble des significations suggérées par les choix formels de l'image."
      },
      {
       "terme": "Polysémie",
       "def": "Propriété d'une image de pouvoir être lue de plusieurs façons."
      },
      {
       "terme": "Photographie humaniste",
       "def": "Courant français d'après-guerre attentif à la vie quotidienne et aux gens ordinaires."
      },
      {
       "terme": "Instant décisif",
       "def": "Expression associée à Cartier-Bresson, désignant le moment où forme et événement coïncident."
      },
      {
       "terme": "Pictorialisme",
       "def": "Courant de la fin du XIXe siècle qui rapprochait la photographie de la peinture."
      },
      {
       "terme": "Épreuve gélatino-argentique",
       "def": "Tirage sur papier à couche de gélatine contenant des sels d'argent."
      },
      {
       "terme": "Lignes de force",
       "def": "Lignes principales qui structurent la composition et guident le regard."
      }
     ]
    }
   ]
  }
 ]
};
