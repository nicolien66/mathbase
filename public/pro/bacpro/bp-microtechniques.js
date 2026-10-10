/* Polymates — Bac pro Microtechniques — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-microtechniques"] = {
 "id": "bp-microtechniques",
 "nom": "Microtechniques",
 "icone": "🎓",
 "couleur": "#9aa8b8",
 "intro": "Le baccalauréat professionnel Microtechniques forme des techniciens capables d'assembler, de monter, de tester, de régler et de maintenir des produits de petites dimensions et de grande précision, associant mécanique, électronique, optique et informatique : horlogerie, dispositifs médicaux, instrumentation, capteurs, connectique. Il mène aux métiers de monteur-régleur, technicien de montage, d'essais ou de service après-vente, horloger et prototypiste. Ce cours couvre les savoirs de la première et de la terminale, en prolongement du cours de seconde de la famille. Il comprend un cours théorique (produits et environnement de travail, analyse des systèmes, solutions technologiques, matériaux, fabrication et assemblage, contrôle, essais, maintenance et qualité) et un bloc d'analyse de documents, qui prépare à l'épreuve écrite de préparation d'une intervention microtechnique.",
 "parties": [
  {
   "titre": "Partie 1 — Produits microtechniques et analyse des systèmes",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmic-produits-microtechniques",
     "titre": "Les produits microtechniques et le travail à petite échelle",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Définir un produit microtechnique et le distinguer d'un produit mécanique courant.",
      "Classer un produit dans les familles et catégories décrites par le référentiel.",
      "Citer les grands secteurs utilisateurs et des exemples de produits de chacun.",
      "Utiliser les ordres de grandeur et les unités adaptées au micromètre et au milligramme.",
      "Expliquer les effets d'échelle qui imposent des précautions particulières en microtechnique.",
      "Situer les activités du technicien en microtechniques dans l'entreprise."
     ],
     "sections": [
      {
       "titre": "Qu'est-ce qu'un produit microtechnique ?",
       "contenu": "\n<p>Un <strong>produit microtechnique</strong> est un produit de petites dimensions, de grande précision et souvent de forte valeur ajoutée, qui associe dans un volume réduit plusieurs technologies : mécanique, électricité, électronique, optique, automatique et informatique. Une montre mécanique, un appareil auditif, un pousse-seringue, une tête de lecture, un capteur d'accélération de téléphone ou une pompe à insuline en sont des exemples.</p>\n<p>Ce qui caractérise ces produits n'est pas seulement la taille. C'est la combinaison de trois exigences :</p>\n<ul>\n<li>la <strong>miniaturisation</strong> : des pièces de quelques millimètres, voire de quelques dixièmes de millimètre ;</li>\n<li>la <strong>précision</strong> : des tolérances qui se comptent en micromètres (µm), parfois en dixièmes de micromètre ;</li>\n<li>l'<strong>intégration</strong> : plusieurs fonctions techniques (détecter, traiter, actionner, afficher, communiquer) réunies dans un même boîtier.</li>\n</ul>\n<p>Le cours de seconde a présenté le dessin, la cotation, les matériaux et les procédés dans le cadre général de la mécanique. En première et terminale, ces savoirs sont appliqués et approfondis à l'échelle microtechnique, où chaque détail (un grain de poussière, une trace de doigt, une décharge électrostatique) peut rendre un produit inutilisable.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un produit microtechnique se reconnaît à trois traits : petites dimensions, grande précision et intégration de plusieurs technologies dans un faible volume.</div>"
      },
      {
       "titre": "Familles et catégories de produits",
       "contenu": "\n<p>Le référentiel du baccalauréat professionnel distingue deux grandes <strong>familles</strong> :</p>\n<ul>\n<li>les <strong>produits micromécaniques</strong>, où la fonction est assurée essentiellement par des pièces mécaniques : mouvement d'horlogerie, micro-réducteur, instrument d'écriture de précision, petits outillages, pièces de connectique ;</li>\n<li>les <strong>produits microtechniques</strong> au sens large, qui associent la mécanique à d'autres technologies.</li>\n</ul>\n<p>Dans cette seconde famille, on distingue trois <strong>catégories</strong> :</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Principe</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>Systèmes mécatroniques</td><td>Mécanique pilotée par une électronique et un logiciel</td><td>Objectif d'appareil photo à mise au point automatique, pousse-seringue, serrure électronique, tête d'impression</td></tr>\n<tr><td>Microsystèmes (MEMS)</td><td>Structures mécaniques gravées dans le silicium avec leur électronique</td><td>Accéléromètre et gyroscope de téléphone, capteur de pression, micro-miroirs de vidéoprojecteur</td></tr>\n<tr><td>Systèmes à base de nanotechnologies</td><td>Matériaux ou structures dont une dimension est inférieure à 100 nm</td><td>Revêtements fonctionnels, certains capteurs biologiques</td></tr>\n</tbody>\n</table>\n<p>Le sigle <strong>MEMS</strong> (de l'anglais Micro-Electro-Mechanical Systems) désigne les microsystèmes électromécaniques. Ils sont fabriqués par les procédés de la microélectronique (photolithographie, gravure) et non par usinage. Le technicien de bac pro les intègre plus souvent qu'il ne les fabrique : il les reçoit sous forme de composants à monter sur une carte.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans une entreprise de dispositifs médicaux, le même technicien peut monter le sous-ensemble mécanique d'une pompe (vis, écrou, piston), poser la carte électronique, raccorder le moteur et réaliser le test final sur banc. C'est cette polyvalence que vise le diplôme.</div>"
      },
      {
       "titre": "Secteurs d'activité et entreprises",
       "contenu": "\n<p>Les microtechniques irriguent de nombreux secteurs. En France, des pôles historiques se trouvent dans l'Arc jurassien (Besançon, Haut-Doubs) autour de l'horlogerie et de la micromécanique, dans la vallée de l'Arve (Haute-Savoie) pour le décolletage, et dans les régions grenobloise et francilienne pour les microsystèmes et l'optique.</p>\n<table>\n<thead><tr><th>Secteur</th><th>Produits typiques</th><th>Exigence dominante</th></tr></thead>\n<tbody>\n<tr><td>Horlogerie, bijouterie</td><td>Mouvements, boîtes, bracelets</td><td>Précision, aspect, durabilité</td></tr>\n<tr><td>Médical</td><td>Implants, instruments, pompes, aides auditives</td><td>Biocompatibilité, propreté, traçabilité</td></tr>\n<tr><td>Aéronautique, spatial, défense</td><td>Capteurs, gyroscopes, connecteurs</td><td>Fiabilité, tenue aux vibrations et aux températures</td></tr>\n<tr><td>Automobile</td><td>Capteurs, injecteurs, micromoteurs</td><td>Grande série, coût, fiabilité</td></tr>\n<tr><td>Optique, photonique</td><td>Objectifs, fibres, instruments de mesure</td><td>Centrage, propreté des surfaces optiques</td></tr>\n<tr><td>Télécommunications, informatique</td><td>Connectique, micro-haut-parleurs, disques</td><td>Miniaturisation, coût</td></tr>\n<tr><td>Instrumentation, métrologie</td><td>Comparateurs, palpeurs, balances</td><td>Exactitude, stabilité</td></tr>\n</tbody>\n</table>\n<p>Les entreprises vont de l'atelier artisanal de quelques personnes (horlogerie de réparation, prototypage) au grand groupe industriel. Beaucoup sont des <strong>sous-traitants</strong> qui fabriquent des pièces ou des sous-ensembles pour un <strong>donneur d'ordre</strong>, c'est-à-dire l'entreprise qui commercialise le produit final.</p>"
      },
      {
       "titre": "Ordres de grandeur et unités",
       "contenu": "\n<p>Travailler en microtechnique impose d'avoir en tête des ordres de grandeur précis. Les unités utilisées sont celles du Système international, avec leurs sous-multiples :</p>\n<table>\n<thead><tr><th>Unité</th><th>Symbole</th><th>Valeur</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>millimètre</td><td>mm</td><td>10<sup>-3</sup> m</td><td>Diamètre d'un axe de montre : 0,1 à 1 mm</td></tr>\n<tr><td>micromètre</td><td>µm</td><td>10<sup>-6</sup> m</td><td>Cheveu : 50 à 80 µm ; tolérance courante : 2 à 10 µm</td></tr>\n<tr><td>nanomètre</td><td>nm</td><td>10<sup>-9</sup> m</td><td>Épaisseur d'un traitement antireflet : 100 nm</td></tr>\n<tr><td>milligramme</td><td>mg</td><td>10<sup>-6</sup> kg</td><td>Masse d'une petite vis d'horlogerie : quelques mg</td></tr>\n<tr><td>millinewton-mètre</td><td>mN·m</td><td>10<sup>-3</sup> N·m</td><td>Couple d'un micromoteur : 0,1 à 50 mN·m</td></tr>\n</tbody>\n</table>\n<p>Dans les ateliers, on entend souvent parler de « centième » (0,01 mm = 10 µm) et de « micron » (ancien nom du micromètre). Ces termes d'usage sont tolérés à l'oral, mais l'écrit technique emploie les symboles normalisés : mm et µm.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> convertir une tolérance en micromètres. Une cote est notée 0,8 ± 0,005 mm. On multiplie par 1 000 pour passer des millimètres aux micromètres : 0,005 mm = 5 µm. L'intervalle de tolérance vaut donc 2 × 5 = 10 µm. Rapporté au diamètre, cela représente 10 / 800 = 1,25 % de la cote : une exigence très sévère, qui exclut un contrôle au pied à coulisse (résolution 10 à 20 µm) et impose un micromètre ou un moyen optique.</div>"
      },
      {
       "titre": "Les effets d'échelle",
       "contenu": "\n<p>Quand on réduit la taille d'un objet, toutes ses propriétés ne diminuent pas au même rythme. Si l'on divise toutes les dimensions par 10 :</p>\n<ul>\n<li>les <strong>surfaces</strong> sont divisées par 100 ;</li>\n<li>les <strong>volumes</strong>, donc les masses et les forces d'inertie, sont divisés par 1 000.</li>\n</ul>\n<p>Conséquence : à petite échelle, les <strong>effets de surface</strong> (frottement, adhérence, capillarité, forces électrostatiques) deviennent prépondérants devant les effets de volume (poids, inertie). Une pièce de quelques milligrammes peut rester collée à une brucelle par électricité statique ou par un film d'huile ; une goutte d'huile de trop dans un pivot freine un mouvement entier.</p>\n<p>Autres conséquences pratiques :</p>\n<ul>\n<li>une <strong>poussière</strong> de 20 µm, invisible à l'œil nu, peut bloquer un engrenage dont le jeu est de 10 µm ;</li>\n<li>la <strong>dilatation thermique</strong> devient significative : une pièce en laiton de 10 mm s'allonge d'environ 0,2 µm par degré, ce qui compte pour une mesure au micromètre ;</li>\n<li>la <strong>main</strong> n'est plus un outil direct : on manipule à la brucelle, sous loupe ou binoculaire, avec des gestes très contrôlés.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une erreur fréquente consiste à croire qu'un produit miniature est « plus fragile » uniquement mécaniquement. Les principales causes de rebut en microtechnique sont la contamination (poussières, traces de doigts, huiles), les décharges électrostatiques et les manipulations inadaptées, bien avant la rupture mécanique.</div>"
      },
      {
       "titre": "Le technicien en microtechniques et ses activités",
       "contenu": "\n<p>Le référentiel des activités professionnelles décrit quatre activités principales :</p>\n<table>\n<thead><tr><th>Activité</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Assemblage et montage</td><td>Préparer les moyens, assembler, monter, contrôler et tester les produits en sortie de poste</td></tr>\n<tr><td>Fabrications microtechniques particulières</td><td>Préparer et produire des pièces ou sous-ensembles à l'unité ou en très petite série, participer à la réalisation de maquettes et de prototypes</td></tr>\n<tr><td>Tests, validation, contrôle de conformité</td><td>Vérifier les caractéristiques d'un produit et renseigner les documents de résultats</td></tr>\n<tr><td>Maintenance</td><td>Établir un diagnostic, réaliser la maintenance ou la réparation, notamment en service après-vente</td></tr>\n</tbody>\n</table>\n<p>S'y ajoutent trois <strong>préoccupations transversales</strong> : la démarche de progrès (qualité), la sécurité des personnes, des biens et de l'environnement, et l'animation d'une petite équipe (organiser, rendre compte, former un nouvel arrivant).</p>\n<p>L'épreuve écrite de technologie du diplôme, intitulée « préparation d'une intervention microtechnique », s'appuie sur l'étude d'un système réel : il faut en analyser le fonctionnement, justifier des solutions techniques et rédiger une procédure de montage, de démontage, de mesure ou de réglage. Les savoirs de ce cours sont organisés pour y préparer.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les intitulés de poste sont variés : monteur-régleur, opérateur ou technicien en microtechniques, horloger, technicien SAV, technicien d'essais, prototypiste. Après quelques années, l'évolution vers chef d'équipe, technicien méthodes ou technicien qualité est fréquente, de même que la poursuite d'études en BTS Conception et industrialisation en microtechniques.</div>"
      }
     ],
     "points_cles": [
      "Un produit microtechnique associe miniaturisation, précision et intégration de plusieurs technologies.",
      "Le référentiel distingue produits micromécaniques et produits microtechniques (mécatronique, microsystèmes, nanotechnologies).",
      "Les MEMS sont des microsystèmes gravés dans le silicium, intégrés comme composants.",
      "Les tolérances s'expriment en micromètres : 1 µm = 0,001 mm.",
      "À petite échelle, les effets de surface (frottement, adhérence, électrostatique) dominent les effets de volume.",
      "Contamination, décharges électrostatiques et manipulations sont les premières causes de rebut.",
      "Le technicien assemble, fabrique à l'unité, teste et maintient des produits microtechniques.",
      "La qualité, la sécurité et l'animation d'équipe sont des préoccupations transversales du métier."
     ],
     "lexique": [
      {
       "terme": "Produit microtechnique",
       "def": "Produit de petites dimensions et de grande précision intégrant plusieurs technologies (mécanique, électronique, optique, informatique)."
      },
      {
       "terme": "Micromécanique",
       "def": "Mécanique des pièces de très petites dimensions réalisées avec une grande précision."
      },
      {
       "terme": "Mécatronique",
       "def": "Association de la mécanique, de l'électronique et de l'informatique dans un même système."
      },
      {
       "terme": "MEMS",
       "def": "Microsystème électromécanique réalisé par les techniques de la microélectronique."
      },
      {
       "terme": "Micromètre (µm)",
       "def": "Millionième de mètre, soit un millième de millimètre."
      },
      {
       "terme": "Effet d'échelle",
       "def": "Modification de l'importance relative des phénomènes physiques lorsque la taille d'un objet change."
      },
      {
       "terme": "Donneur d'ordre",
       "def": "Entreprise qui commande la fabrication d'une pièce ou d'un sous-ensemble à un sous-traitant."
      },
      {
       "terme": "Sous-traitant",
       "def": "Entreprise qui réalise une fabrication ou une prestation pour le compte d'un donneur d'ordre."
      },
      {
       "terme": "Prototype",
       "def": "Premier exemplaire d'un produit, réalisé pour vérifier sa conception avant la fabrication en série."
      }
     ]
    },
    {
     "id": "bmic-environnement-travail",
     "titre": "Maîtriser l'environnement de travail : propreté, électrostatique et risques spécifiques",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Expliquer les mécanismes des décharges électrostatiques et appliquer les règles d'une zone protégée.",
      "Décrire les classes de propreté et les règles de comportement en salle propre.",
      "Identifier les risques chimiques des produits utilisés en microtechnique et exploiter leur étiquetage.",
      "Prévenir les troubles musculosquelettiques et la fatigue visuelle du travail sous binoculaire.",
      "Trier les déchets propres à l'activité selon la réglementation."
     ],
     "sections": [
      {
       "titre": "Protéger le produit et protéger l'opérateur",
       "contenu": "\n<p>Le cours de seconde a présenté l'évaluation des risques, les équipements de protection et les règles générales de sécurité à l'atelier. En microtechnique, la démarche de prévention a une double dimension :</p>\n<ul>\n<li><strong>protéger l'opérateur</strong> contre des risques spécifiques : produits chimiques (solvants, colles, flux de brasure), rayonnements laser et ultraviolets, postures prolongées, fatigue visuelle ;</li>\n<li><strong>protéger le produit</strong> contre des agressions invisibles : décharges électrostatiques, particules, contamination organique, humidité.</li>\n</ul>\n<p>Les deux protections se conjuguent : la blouse et les gants qui protègent la pièce des contaminations protègent aussi la peau des produits chimiques ; le bracelet antistatique protège le composant, mais il doit comporter une résistance de sécurité pour protéger l'opérateur.</p>"
      },
      {
       "titre": "Les décharges électrostatiques",
       "contenu": "\n<p>Tout frottement entre deux matériaux (semelle sur le sol, manche sur la table, ruban adhésif qu'on déroule) sépare des charges électriques : c'est la <strong>triboélectricité</strong>. Un opérateur qui marche sur un sol isolant peut se charger à plusieurs milliers de volts. Au contact d'un composant, cette charge s'écoule brutalement : c'est une <strong>décharge électrostatique</strong> (DES, en anglais ESD).</p>\n<p>L'être humain ne ressent une décharge qu'à partir de quelques milliers de volts environ, alors que de nombreux composants (circuits CMOS, MOSFET, diodes laser, têtes de lecture) sont endommagés par quelques dizaines à quelques centaines de volts. Les dégâts sont souvent <strong>latents</strong> : le composant fonctionne au test, puis tombe en panne chez le client.</p>\n<p>Les règles d'une <strong>zone protégée contre les DES</strong> (en anglais EPA) sont définies par la norme NF EN 61340-5-1 :</p>\n<ul>\n<li>délimitation et signalisation de la zone ;</li>\n<li>plan de travail dissipatif relié à la terre par un point de mise à la terre commun ;</li>\n<li><strong>bracelet</strong> relié à la terre par un cordon intégrant une résistance de sécurité (typiquement 1 MΩ), testé à chaque prise de poste ;</li>\n<li>sol dissipatif et chaussures ou talonnettes conductrices ;</li>\n<li>blouse dissipative fermée ;</li>\n<li>emballages adaptés : sachets blindés, mousses conductrices, bacs dissipatifs ;</li>\n<li>élimination des isolants inutiles (gobelets, classeurs plastique, papier bulle ordinaire) ou neutralisation par ioniseur.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un bracelet porté sur la manche, un cordon débranché ou un sachet rose « antistatique » utilisé comme blindage sont des erreurs courantes. Le sachet rose évite seulement de créer des charges ; seul un sachet blindé (aspect métallisé gris) protège le composant d'un champ ou d'une décharge extérieure.</div>"
      },
      {
       "titre": "La salle propre et la maîtrise de la contamination",
       "contenu": "\n<p>Une <strong>salle propre</strong> est un local où la concentration de particules dans l'air est maîtrisée, ainsi que la température, l'humidité et la surpression. La norme NF EN ISO 14644-1 définit des classes de propreté de ISO 1 (la plus propre) à ISO 9, selon le nombre maximal de particules par mètre cube d'air pour différentes tailles de particules. À titre indicatif, une salle de classe ISO 5 admet au plus 3 520 particules de taille supérieure ou égale à 0,5 µm par mètre cube, alors que l'air d'un bureau ordinaire en contient des millions.</p>\n<p>Le premier pollueur d'une salle propre est l'<strong>opérateur</strong> : squames de peau, cheveux, fibres textiles, gouttelettes. Le comportement est donc codifié :</p>\n<ul>\n<li>passage par un sas d'habillage, dans un ordre défini (charlotte, masque, combinaison, surbottes, gants) ;</li>\n<li>pas de maquillage, de parfum, de bijoux ;</li>\n<li>pas de papier ordinaire, de crayon à papier, de carton ;</li>\n<li>gestes lents, pas de course, portes fermées ;</li>\n<li>nettoyage du poste selon un protocole et avec des lingettes adaptées.</li>\n</ul>\n<p>Hors salle propre, les ateliers de montage microtechnique travaillent souvent sous <strong>hotte à flux laminaire</strong> : un flux d'air filtré balaie le poste et repousse les particules.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer un poste de montage sensible. 1. Tester le bracelet et le tapis sur le testeur du poste et noter le résultat. 2. Nettoyer le plan de travail et les outils avec le produit prescrit. 3. Retirer tout objet inutile du poste. 4. Mettre en route le flux laminaire ou l'ioniseur et vérifier son fonctionnement. 5. Disposer pièces et outils dans l'ordre de la gamme, dans leurs contenants. 6. Enfiler doigtiers ou gants juste avant de commencer.</div>"
      },
      {
       "titre": "Les risques chimiques",
       "contenu": "\n<p>Le montage et la maintenance utilisent de nombreux produits : solvants de dégraissage (alcool isopropylique, nettoyants spécifiques), colles (cyanoacrylates, époxydes, colles à polymérisation UV), flux de brasure, huiles et graisses, produits de nettoyage par ultrasons. Leur étiquette porte des <strong>pictogrammes de danger</strong> du règlement européen CLP (losanges à bord rouge) et des mentions de danger (codes H) et conseils de prudence (codes P).</p>\n<table>\n<thead><tr><th>Produit</th><th>Dangers fréquents</th><th>Prévention</th></tr></thead>\n<tbody>\n<tr><td>Alcool isopropylique</td><td>Inflammable, irritant pour les yeux, vapeurs</td><td>Petites quantités, flacons fermés, loin des sources de chaleur</td></tr>\n<tr><td>Cyanoacrylate</td><td>Colle la peau en quelques secondes, irritant</td><td>Gants nitrile, lunettes, ventilation</td></tr>\n<tr><td>Époxyde bicomposant</td><td>Sensibilisant cutané (allergies)</td><td>Gants, pas de contact cutané, nettoyage des outils</td></tr>\n<tr><td>Fumées de flux de brasure</td><td>Irritation respiratoire, asthme professionnel</td><td>Aspiration des fumées au poste</td></tr>\n<tr><td>Colles UV et lampe UV</td><td>Sensibilisant, rayonnement nocif pour les yeux</td><td>Écran filtrant, lunettes anti-UV</td></tr>\n</tbody>\n</table>\n<p>Pour chaque produit, la <strong>fiche de données de sécurité</strong> (FDS), fournie par le fournisseur, précise les dangers, les équipements de protection, les conditions de stockage et l'élimination. Elle doit être disponible au poste ou consultable rapidement.</p>\n<p>Quelques règles pratiques s'appliquent à tous les produits : n'utiliser que les quantités nécessaires à la journée, dans des flacons doseurs ou des distributeurs fermés et étiquetés avec le nom du produit et ses pictogrammes ; ne jamais transvaser un produit dans un contenant alimentaire ; refermer les flacons après usage pour limiter les vapeurs ; stocker les produits inflammables dans une armoire ventilée prévue à cet effet ; se laver les mains avant les pauses. Les <strong>bacs de nettoyage par ultrasons</strong> chauffent et agitent le bain, ce qui augmente l'émission de vapeurs : ils sont couverts et placés sous aspiration lorsqu'ils contiennent un solvant. Enfin, les gants doivent être choisis selon le produit manipulé, car aucun gant ne protège contre tous les solvants : la FDS indique le matériau adapté (nitrile, butyle, etc.).</p>"
      },
      {
       "titre": "Ergonomie du travail de précision",
       "contenu": "\n<p>Le travail sous <strong>loupe binoculaire</strong> ou microscope, pendant des heures, avec des gestes très fins, expose à des <strong>troubles musculosquelettiques</strong> (TMS) de la nuque, des épaules, des poignets, et à la <strong>fatigue visuelle</strong>. La prévention repose sur :</p>\n<ul>\n<li>un poste réglable : hauteur du plan de travail, siège à assise et dossier réglables, repose-pieds ;</li>\n<li>des <strong>appuis d'avant-bras</strong> qui stabilisent les mains et soulagent les épaules ;</li>\n<li>le réglage de la binoculaire : écartement des oculaires, correction dioptrique de chaque œil, hauteur et inclinaison pour garder la tête droite ;</li>\n<li>un éclairage suffisant et sans reflet, souvent annulaire à DEL ;</li>\n<li>des <strong>pauses</strong> régulières et des exercices de relâchement visuel (regarder au loin).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans les ateliers d'horlogerie et de montage médical, il est courant d'alterner les postes au cours de la journée (montage sous binoculaire, contrôle, conditionnement) pour varier les postures. Un nouvel arrivant se voit expliquer le réglage de son poste avant tout geste de production.</div>"
      },
      {
       "titre": "Environnement et déchets",
       "contenu": "\n<p>L'activité produit des déchets à trier selon leur nature :</p>\n<ul>\n<li><strong>déchets dangereux</strong> : chiffons et lingettes souillés de solvants ou de colles, résidus de produits, huiles usagées, bains de nettoyage, piles et batteries ; ils sont collectés dans des contenants identifiés et éliminés par une filière agréée ;</li>\n<li><strong>déchets d'équipements électriques et électroniques</strong> (DEEE) : cartes, composants, appareils rebutés, qui relèvent d'une filière de collecte spécifique ;</li>\n<li><strong>métaux</strong> : copeaux et chutes de laiton, d'or ou de titane, souvent valorisés, voire récupérés pour leur valeur (métaux précieux) ;</li>\n<li><strong>déchets non dangereux</strong> : emballages propres, papiers.</li>\n</ul>\n<p>Les directives européennes RoHS (restriction de certaines substances dangereuses dans les équipements électriques et électroniques, dont le plomb des brasures) et le règlement REACH (enregistrement et restriction des substances chimiques) influencent le choix des produits et des procédés. C'est pourquoi on utilise majoritairement des brasures sans plomb en électronique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en microtechnique, les règles de propreté, de protection contre l'électrostatique et de sécurité chimique ne sont pas des formalités : elles conditionnent à la fois la santé de l'opérateur et la fiabilité du produit livré au client.</div>"
      }
     ],
     "points_cles": [
      "La prévention protège à la fois l'opérateur et le produit.",
      "Une décharge électrostatique imperceptible peut détruire ou fragiliser un composant.",
      "Une zone protégée contre les DES suit la norme NF EN 61340-5-1 : bracelet testé, plan dissipatif, emballages blindés.",
      "Les salles propres sont classées de ISO 1 à ISO 9 selon la norme NF EN ISO 14644-1.",
      "L'opérateur est la première source de contamination d'une salle propre.",
      "Pictogrammes CLP et fiche de données de sécurité renseignent sur les dangers chimiques.",
      "Poste réglable, appuis d'avant-bras et pauses préviennent TMS et fatigue visuelle.",
      "Déchets dangereux, DEEE et métaux suivent des filières de collecte spécifiques."
     ],
     "lexique": [
      {
       "terme": "Triboélectricité",
       "def": "Apparition de charges électriques par frottement ou séparation de deux matériaux."
      },
      {
       "terme": "Décharge électrostatique",
       "def": "Écoulement brutal d'une charge électrique accumulée vers un objet de potentiel différent."
      },
      {
       "terme": "Zone protégée DES",
       "def": "Zone aménagée pour éviter l'accumulation et la décharge brutale de charges électrostatiques."
      },
      {
       "terme": "Matériau dissipatif",
       "def": "Matériau qui écoule lentement les charges électriques vers la terre."
      },
      {
       "terme": "Salle propre",
       "def": "Local dont la concentration en particules dans l'air est maîtrisée et classée."
      },
      {
       "terme": "Flux laminaire",
       "def": "Écoulement d'air filtré régulier qui balaie un poste de travail pour en chasser les particules."
      },
      {
       "terme": "Fiche de données de sécurité",
       "def": "Document du fournisseur décrivant les dangers d'un produit et les mesures de prévention."
      },
      {
       "terme": "TMS",
       "def": "Troubles musculosquelettiques : affections des muscles, tendons et nerfs liées aux gestes et postures."
      },
      {
       "terme": "DEEE",
       "def": "Déchets d'équipements électriques et électroniques, soumis à une filière de collecte spécifique."
      },
      {
       "terme": "RoHS",
       "def": "Directive européenne limitant certaines substances dangereuses dans les équipements électriques et électroniques."
      }
     ]
    },
    {
     "id": "bmic-analyse-fonctionnelle",
     "titre": "Analyse fonctionnelle et structurelle d'un système microtechnique",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Exprimer le besoin auquel répond un produit et formuler ses fonctions de service.",
      "Lire et compléter un diagramme des interactions et un diagramme FAST.",
      "Décomposer un système en chaîne d'information et chaîne d'énergie.",
      "Associer à chaque fonction technique le composant qui la réalise.",
      "Lire un diagramme de blocs d'un modèle SysML simple."
     ],
     "sections": [
      {
       "titre": "Du besoin aux fonctions",
       "contenu": "\n<p>Avant de monter, de régler ou de dépanner un produit, il faut comprendre <strong>à quoi il sert</strong> et <strong>comment il le fait</strong>. C'est l'objet de l'<strong>analyse fonctionnelle</strong>, démarche normalisée (la norme NF EN 16271 traite de l'expression fonctionnelle du besoin et du cahier des charges fonctionnel) qui part du besoin de l'utilisateur pour arriver aux composants.</p>\n<p>On distingue deux points de vue :</p>\n<ul>\n<li>l'<strong>analyse fonctionnelle externe</strong> : le produit est vu comme une boîte noire ; on décrit ce qu'il doit faire pour l'utilisateur et son environnement ;</li>\n<li>l'<strong>analyse fonctionnelle interne</strong> (ou structurelle) : on ouvre la boîte ; on décrit comment les sous-ensembles et les composants réalisent les fonctions.</li>\n</ul>\n<p>Le <strong>besoin</strong> s'exprime en répondant à trois questions : à qui le produit rend-il service ? sur quoi agit-il ? dans quel but ? Pour un pousse-seringue médical : il rend service au personnel soignant et au patient, il agit sur le piston d'une seringue, dans le but d'injecter un médicament à un débit précis et constant.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une fonction s'écrit toujours avec un verbe à l'infinitif suivi d'un complément : « injecter le médicament à débit constant », « afficher le volume restant ». Elle décrit un résultat attendu, jamais une solution technique.</div>"
      },
      {
       "titre": "Le diagramme des interactions et le cahier des charges",
       "contenu": "\n<p>Le <strong>diagramme des interactions</strong> (souvent appelé « diagramme pieuvre ») place le produit au centre, entouré des <strong>éléments du milieu extérieur</strong> : utilisateur, énergie, environnement, normes, objets sur lesquels il agit. Chaque trait relie le produit à un ou deux éléments et représente une fonction :</p>\n<ul>\n<li>une <strong>fonction principale</strong> relie deux éléments extérieurs à travers le produit (le produit permet à l'utilisateur d'agir sur quelque chose) ;</li>\n<li>une <strong>fonction contrainte</strong> relie le produit à un seul élément auquel il doit s'adapter (résister à l'eau, respecter une norme, être alimenté par une pile).</li>\n</ul>\n<p>Chaque fonction est ensuite caractérisée dans le <strong>cahier des charges fonctionnel</strong> (CdCF) par des critères, des niveaux et une flexibilité :</p>\n<table>\n<thead><tr><th>Fonction</th><th>Critère</th><th>Niveau</th><th>Flexibilité</th></tr></thead>\n<tbody>\n<tr><td>FP1 : injecter le médicament à débit constant</td><td>Débit réglable</td><td>0,1 à 200 mL/h</td><td>Précision ± 2 %</td></tr>\n<tr><td>FC1 : s'adapter aux seringues du marché</td><td>Volumes acceptés</td><td>10, 20, 50 mL</td><td>Aucune</td></tr>\n<tr><td>FC2 : fonctionner sans réseau électrique</td><td>Autonomie sur batterie</td><td>8 h à 5 mL/h</td><td>Minimum</td></tr>\n<tr><td>FC3 : alerter en cas d'occlusion</td><td>Délai de déclenchement</td><td>Selon pression seuil</td><td>Réglable</td></tr>\n</tbody>\n</table>\n<p>Ces niveaux servent ensuite de référence lors des essais : un produit est conforme lorsqu'il atteint chaque niveau dans sa flexibilité. C'est le lien direct entre l'analyse fonctionnelle et le contrôle de conformité.</p>"
      },
      {
       "titre": "Le diagramme FAST",
       "contenu": "\n<p>Le diagramme <strong>FAST</strong> (Function Analysis System Technique) décompose une fonction de service en <strong>fonctions techniques</strong> de plus en plus précises, jusqu'aux <strong>solutions constructives</strong>. Il se lit :</p>\n<ul>\n<li>de gauche à droite en répondant à la question « comment ? » ;</li>\n<li>de droite à gauche en répondant à « pourquoi ? » ;</li>\n<li>verticalement, les fonctions placées l'une sous l'autre sont réalisées en même temps (« et »).</li>\n</ul>\n<p>Exemple pour le pousse-seringue, fonction « pousser le piston à vitesse constante » :</p>\n<table>\n<thead><tr><th>Fonction technique</th><th>Sous-fonction</th><th>Solution constructive</th></tr></thead>\n<tbody>\n<tr><td>Fournir l'énergie mécanique</td><td>Convertir l'énergie électrique en rotation</td><td>Moteur pas à pas</td></tr>\n<tr><td>Adapter la vitesse</td><td>Réduire la vitesse et augmenter le couple</td><td>Réducteur à engrenages</td></tr>\n<tr><td>Transformer le mouvement</td><td>Passer de la rotation à la translation</td><td>Système vis-écrou</td></tr>\n<tr><td>Guider le chariot</td><td>Assurer une translation rectiligne</td><td>Deux colonnes et douilles à billes</td></tr>\n<tr><td>Contrôler la position</td><td>Mesurer le déplacement du chariot</td><td>Potentiomètre linéaire</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> compléter un FAST à partir d'un dessin d'ensemble. 1. Repérer l'entrée d'énergie (moteur, pile, ressort) et la sortie (pièce qui agit sur l'extérieur). 2. Suivre le chemin de l'énergie pièce par pièce, de l'entrée vers la sortie. 3. À chaque changement de nature du mouvement ou de la grandeur (vitesse, couple, rotation, translation), écrire une fonction technique. 4. Noter en face le repère et la désignation de la nomenclature. 5. Relire de droite à gauche : chaque solution doit répondre au « pourquoi ? » de la fonction qui la précède.</div>"
      },
      {
       "titre": "Chaîne d'information et chaîne d'énergie",
       "contenu": "\n<p>Tout système automatisé, du plus gros au plus petit, peut être décrit par deux chaînes fonctionnelles qui coopèrent.</p>\n<p>La <strong>chaîne d'information</strong> élabore les ordres à partir des consignes et des mesures :</p>\n<ul>\n<li><strong>acquérir</strong> : capteurs, boutons, codeurs ;</li>\n<li><strong>traiter</strong> : microcontrôleur, carte électronique, logiciel ;</li>\n<li><strong>communiquer</strong> : afficheur, voyant, buzzer, liaison sans fil ou filaire.</li>\n</ul>\n<p>La <strong>chaîne d'énergie</strong> agit sur la matière d'œuvre :</p>\n<ul>\n<li><strong>alimenter</strong> : pile, batterie, alimentation secteur, ressort moteur ;</li>\n<li><strong>distribuer</strong> (ou moduler) : transistor, pont en H, driver de moteur, relais ;</li>\n<li><strong>convertir</strong> : moteur, électroaimant, actionneur piézoélectrique ;</li>\n<li><strong>transmettre</strong> : réducteur, vis-écrou, accouplement, came ;</li>\n<li><strong>agir</strong> : effecteur qui modifie la matière d'œuvre (piston, aiguille, lentille déplacée).</li>\n</ul>\n<p>Les deux chaînes sont reliées : la chaîne d'information envoie des <strong>ordres</strong> au distributeur et reçoit des <strong>comptes rendus</strong> des capteurs placés sur la chaîne d'énergie.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne pas confondre « distribuer » et « transmettre ». Distribuer porte sur l'énergie électrique (ou pneumatique) avant conversion : on autorise ou on module son passage. Transmettre porte sur l'énergie mécanique après conversion : on l'adapte et on l'achemine jusqu'à l'effecteur.</div>"
      },
      {
       "titre": "Analyse structurelle : du système aux composants",
       "contenu": "\n<p>L'<strong>analyse structurelle</strong> décrit l'organisation matérielle du produit : sous-ensembles, pièces, liaisons entre elles. Elle s'appuie sur le dessin d'ensemble, la nomenclature et l'éclaté, et produit généralement :</p>\n<ul>\n<li>la liste des <strong>sous-ensembles</strong> (ou modules), chacun associé à une fonction technique ;</li>\n<li>les <strong>classes d'équivalence</strong> : groupes de pièces sans mouvement relatif entre elles pendant le fonctionnement, qui seront étudiés dans le chapitre consacré à la modélisation des mécanismes ;</li>\n<li>le repérage des <strong>interfaces</strong> : surfaces de contact, connecteurs, câbles, éléments de fixation.</li>\n</ul>\n<p>Dans un produit microtechnique, l'organisation est souvent modulaire : un module mécanique (bloc moteur-réducteur), un module électronique (carte principale), un module d'interface homme-machine (clavier et afficheur), un boîtier. Cette modularité facilite le montage et surtout la maintenance : on remplace un module défectueux au lieu de réparer composant par composant.</p>\n<table>\n<thead><tr><th>Module</th><th>Fonction technique</th><th>Chaîne</th></tr></thead>\n<tbody>\n<tr><td>Bloc batterie et chargeur</td><td>Alimenter</td><td>Énergie</td></tr>\n<tr><td>Carte de commande moteur</td><td>Distribuer</td><td>Énergie</td></tr>\n<tr><td>Moteur pas à pas et réducteur</td><td>Convertir, transmettre</td><td>Énergie</td></tr>\n<tr><td>Capteur de force sur le poussoir</td><td>Acquérir</td><td>Information</td></tr>\n<tr><td>Microcontrôleur</td><td>Traiter</td><td>Information</td></tr>\n<tr><td>Afficheur et alarme sonore</td><td>Communiquer</td><td>Information</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Lire un modèle SysML simple",
       "contenu": "\n<p>Les bureaux d'études décrivent de plus en plus les systèmes avec le langage graphique <strong>SysML</strong> (Systems Modeling Language). Le technicien n'a pas à le produire, mais il doit savoir lire les diagrammes les plus courants :</p>\n<table>\n<thead><tr><th>Diagramme</th><th>Ce qu'il montre</th><th>Équivalent classique</th></tr></thead>\n<tbody>\n<tr><td>Cas d'utilisation (uc)</td><td>Les acteurs et les services rendus</td><td>Bête à cornes, diagramme des interactions</td></tr>\n<tr><td>Exigences (req)</td><td>Les exigences chiffrées et leurs liens</td><td>Cahier des charges fonctionnel</td></tr>\n<tr><td>Définition de blocs (bdd)</td><td>La décomposition du système en blocs</td><td>Nomenclature, arborescence</td></tr>\n<tr><td>Bloc interne (ibd)</td><td>Les flux (énergie, information, matière) entre blocs</td><td>Chaînes d'énergie et d'information</td></tr>\n<tr><td>États (stm)</td><td>Les états du système et les transitions</td><td>Grafcet</td></tr>\n<tr><td>Séquence (sd)</td><td>Les échanges ordonnés dans le temps</td><td>Chronogramme</td></tr>\n</tbody>\n</table>\n<p>Dans un diagramme de blocs internes, les blocs sont des rectangles reliés par des <strong>ports</strong> (petits carrés sur le bord) et des connecteurs fléchés qui indiquent la nature du flux : énergie électrique, couple, signal, donnée. Suivre ces flèches revient à suivre la chaîne d'énergie ou d'information.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un dépannage, le technicien remonte la chaîne fonctionnelle à partir du symptôme. Si le poussoir ne bouge pas, il vérifie dans l'ordre : l'alimentation, l'ordre envoyé par la carte, la sortie du driver, le moteur, puis la transmission. L'analyse fonctionnelle devient alors un outil de diagnostic.</div>"
      }
     ],
     "points_cles": [
      "Une fonction s'écrit avec un verbe à l'infinitif et décrit un résultat, pas une solution.",
      "Le diagramme des interactions distingue fonctions principales et fonctions contraintes.",
      "Le cahier des charges fonctionnel chiffre chaque fonction par un critère, un niveau et une flexibilité.",
      "Le FAST se lit « comment ? » vers la droite et « pourquoi ? » vers la gauche.",
      "Chaîne d'information : acquérir, traiter, communiquer.",
      "Chaîne d'énergie : alimenter, distribuer, convertir, transmettre, agir.",
      "L'analyse structurelle associe chaque module ou composant à une fonction technique.",
      "Les diagrammes SysML bdd et ibd décrivent la structure et les flux d'un système."
     ],
     "lexique": [
      {
       "terme": "Analyse fonctionnelle",
       "def": "Démarche qui décrit un produit par les fonctions qu'il doit remplir plutôt que par ses solutions."
      },
      {
       "terme": "Fonction de service",
       "def": "Action attendue du produit pour répondre au besoin de l'utilisateur."
      },
      {
       "terme": "Fonction contrainte",
       "def": "Fonction qui impose au produit de s'adapter à un élément de son environnement."
      },
      {
       "terme": "Fonction technique",
       "def": "Action interne au produit, choisie par le concepteur pour réaliser une fonction de service."
      },
      {
       "terme": "FAST",
       "def": "Diagramme qui décompose une fonction de service en fonctions techniques puis en solutions constructives."
      },
      {
       "terme": "Chaîne d'énergie",
       "def": "Ensemble des fonctions qui alimentent, distribuent, convertissent et transmettent l'énergie jusqu'à l'effecteur."
      },
      {
       "terme": "Chaîne d'information",
       "def": "Ensemble des fonctions qui acquièrent, traitent et communiquent les informations."
      },
      {
       "terme": "Effecteur",
       "def": "Élément terminal de la chaîne d'énergie qui agit directement sur la matière d'œuvre."
      },
      {
       "terme": "SysML",
       "def": "Langage graphique normalisé de modélisation des systèmes."
      },
      {
       "terme": "Matière d'œuvre",
       "def": "Ce sur quoi agit le système et dont il modifie l'état (position, forme, information)."
      }
     ]
    },
    {
     "id": "bmic-modelisation-mecanismes",
     "titre": "Modéliser un mécanisme : liaisons et schéma cinématique",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Identifier les classes d'équivalence d'un mécanisme à partir d'un dessin d'ensemble.",
      "Reconnaître les liaisons mécaniques normalisées et leurs degrés de liberté.",
      "Construire le graphe des liaisons d'un mécanisme simple.",
      "Lire et tracer un schéma cinématique minimal.",
      "Justifier la modélisation d'un mécanisme simple, comme le demande l'épreuve écrite."
     ],
     "sections": [
      {
       "titre": "Pourquoi modéliser ?",
       "contenu": "\n<p>Un dessin d'ensemble de produit microtechnique comporte des dizaines de pièces, des vis, des goupilles, des roulements miniatures. Pour comprendre <strong>comment le mécanisme bouge</strong>, il faut simplifier : c'est le rôle de la <strong>modélisation cinématique</strong>. On ne garde que ce qui détermine les mouvements : les groupes de pièces qui bougent ensemble et la façon dont ces groupes sont reliés.</p>\n<p>Cette modélisation sert à :</p>\n<ul>\n<li>comprendre le fonctionnement avant un montage ou un démontage ;</li>\n<li>repérer les mouvements à régler ou à contrôler (jeu, course, ébat) ;</li>\n<li>justifier une solution technique (pourquoi un roulement ici, une glissière là) ;</li>\n<li>préparer un calcul de vitesse ou d'effort.</li>\n</ul>\n<p>L'épreuve écrite du diplôme peut demander d'« analyser et justifier la modélisation d'un dispositif mécanique simple » : il s'agit de vérifier qu'un schéma proposé correspond bien au mécanisme réel, ou de le compléter.</p>\n<p>La modélisation repose sur des <strong>hypothèses simplificatrices</strong> qu'il faut connaître : les pièces sont supposées indéformables, les contacts géométriquement parfaits et les jeux nuls. Dans la réalité d'un produit microtechnique, les jeux de quelques micromètres et les déformations élastiques des pièces fines ne sont pas négligeables ; le modèle sert à comprendre le principe, et le réglage au montage permet ensuite de tenir compte des écarts réels.</p>"
      },
      {
       "titre": "Les classes d'équivalence",
       "contenu": "\n<p>Une <strong>classe d'équivalence cinématique</strong> est un ensemble de pièces qui n'ont aucun mouvement relatif entre elles pendant le fonctionnement. Elles sont encastrées les unes dans les autres (vissées, collées, chassées, soudées) et se comportent comme un seul solide.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rechercher les classes d'équivalence. 1. Repérer la pièce fixe principale (bâti, platine, boîtier) : elle forme la première classe, souvent notée 0. 2. Lui rattacher toutes les pièces qui lui sont fixées sans mouvement possible : vis, piliers, paliers chassés, couvercles. 3. Repérer chaque pièce mobile et lui rattacher les pièces qui lui sont solidaires (pignon chassé sur un axe, goupille, bague). 4. Exclure les éléments déformables (ressorts, joints) et les éléments roulants (billes, aiguilles) : ils n'appartiennent à aucune classe. 5. Colorier chaque classe d'une couleur différente sur le dessin et dresser la liste des repères par classe.</div>\n<p>Exemple sur un micro-réducteur à deux étages : classe 0 = carter, couvercle, vis de fermeture, paliers ; classe 1 = arbre moteur et pignon d'entrée ; classe 2 = axe intermédiaire, roue et pignon intermédiaires ; classe 3 = arbre de sortie et roue de sortie.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une bague intérieure de roulement est solidaire de l'arbre, la bague extérieure du logement ; le roulement « complet » n'est donc dans aucune classe. De même, une vis de réglage bloquée par un contre-écrou appartient à la classe qu'elle règle, pas à celle qu'elle touche.</div>"
      },
      {
       "titre": "Les liaisons normalisées",
       "contenu": "\n<p>Deux classes d'équivalence en contact forment une <strong>liaison</strong>. On la caractérise par ses <strong>degrés de liberté</strong> : les mouvements possibles parmi les six mouvements élémentaires (trois translations Tx, Ty, Tz et trois rotations Rx, Ry, Rz). La norme NF EN ISO 3952 définit les symboles des liaisons.</p>\n<table>\n<thead><tr><th>Liaison</th><th>Translations</th><th>Rotations</th><th>Exemple en microtechnique</th></tr></thead>\n<tbody>\n<tr><td>Encastrement (complète)</td><td>0</td><td>0</td><td>Pignon chassé sur son axe</td></tr>\n<tr><td>Pivot</td><td>0</td><td>1</td><td>Axe de roue guidé dans deux paliers</td></tr>\n<tr><td>Glissière</td><td>1</td><td>0</td><td>Chariot sur guidage à billes</td></tr>\n<tr><td>Hélicoïdale</td><td>1 (liée à la rotation)</td><td>1</td><td>Vis de mise au point, vis-écrou de pousse-seringue</td></tr>\n<tr><td>Pivot glissant</td><td>1</td><td>1</td><td>Tige de poussoir dans un alésage</td></tr>\n<tr><td>Rotule (sphérique)</td><td>0</td><td>3</td><td>Bille dans un logement conique</td></tr>\n<tr><td>Appui plan</td><td>2</td><td>1</td><td>Platine posée sur une autre</td></tr>\n<tr><td>Linéaire annulaire (sphère-cylindre)</td><td>1</td><td>3</td><td>Bille dans un alésage</td></tr>\n<tr><td>Linéaire rectiligne (cylindre-plan)</td><td>2</td><td>2</td><td>Galet sur une came plate</td></tr>\n<tr><td>Ponctuelle (sphère-plan)</td><td>2</td><td>3</td><td>Touche de palpeur sur une surface</td></tr>\n</tbody>\n</table>\n<p>Pour identifier une liaison, on observe les <strong>surfaces de contact</strong> : un cylindre long dans un alésage donne un pivot glissant ; si un épaulement ou un circlip bloque la translation, on obtient un pivot. Un filetage donne une liaison hélicoïdale, caractérisée par son <strong>pas</strong> p : pour un tour de rotation, la translation vaut p.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une liaison se nomme d'après les mouvements qu'elle autorise, et non d'après la forme des pièces. Un même pivot peut être réalisé par deux roulements, par deux paliers lisses ou par deux pierres d'horlogerie.</div>"
      },
      {
       "titre": "Le graphe des liaisons",
       "contenu": "\n<p>Le <strong>graphe des liaisons</strong> représente chaque classe d'équivalence par un cercle numéroté et chaque liaison par un trait portant son nom et son axe. Pour le micro-réducteur précédent :</p>\n<table>\n<thead><tr><th>Liaison</th><th>Nature</th><th>Caractéristique</th></tr></thead>\n<tbody>\n<tr><td>0 - 1</td><td>Pivot d'axe A</td><td>Arbre moteur</td></tr>\n<tr><td>0 - 2</td><td>Pivot d'axe B</td><td>Axe intermédiaire</td></tr>\n<tr><td>0 - 3</td><td>Pivot d'axe C</td><td>Arbre de sortie</td></tr>\n<tr><td>1 - 2</td><td>Engrenage (linéaire rectiligne idéalisée)</td><td>Pignon d'entrée / roue intermédiaire</td></tr>\n<tr><td>2 - 3</td><td>Engrenage</td><td>Pignon intermédiaire / roue de sortie</td></tr>\n</tbody>\n</table>\n<p>Le graphe fait apparaître des <strong>chaînes ouvertes</strong> (une suite de liaisons qui ne se referme pas, comme un bras articulé) et des <strong>chaînes fermées</strong> ou boucles (comme ici 0-1-2-0). Les boucles sont fréquentes dans les mécanismes de transmission et imposent des conditions géométriques (entraxes, parallélismes) qui expliquent les tolérances serrées des platines d'horlogerie.</p>"
      },
      {
       "titre": "Le schéma cinématique",
       "contenu": "\n<p>Le <strong>schéma cinématique minimal</strong> traduit le graphe en dessin : chaque liaison est représentée par son symbole normalisé, placé à sa position réelle, et les symboles d'une même classe sont reliés par des traits de même couleur. Le bâti est signalé par des hachures.</p>\n<p>Règles de tracé :</p>\n<ul>\n<li>respecter les positions relatives et les orientations des axes ;</li>\n<li>choisir la vue qui montre le mieux les mouvements (souvent la vue de face du dessin d'ensemble) ;</li>\n<li>dessiner les engrenages par leurs cercles primitifs tangents ou par le symbole normalisé ;</li>\n<li>indiquer le mouvement d'entrée et de sortie par des flèches.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un schéma cinématique proposé. 1. Compter les classes d'équivalence sur le dessin et sur le schéma : le nombre doit être identique. 2. Pour chaque liaison du schéma, retrouver sur le dessin les surfaces de contact correspondantes. 3. Vérifier que les degrés de liberté du symbole correspondent à ce que permettent ces surfaces et les arrêts (épaulements, circlips, écrous). 4. Vérifier les positions : axes parallèles ou concourants, ordre des pièces. 5. Rédiger la justification : « la liaison entre 2 et 0 est une pivot d'axe B, car l'axe 2 est guidé par deux pierres chassées dans 0 et arrêté en translation par ses deux épaulements ».</div>"
      },
      {
       "titre": "Mobilités et réglages",
       "contenu": "\n<p>L'analyse des degrés de liberté permet de repérer les <strong>mobilités utiles</strong> (les mouvements que le mécanisme doit transmettre) et les <strong>mobilités internes</strong> (une pièce qui tourne sur elle-même sans conséquence sur la sortie, comme une bille). Elle met aussi en évidence les endroits où un <strong>réglage</strong> est nécessaire.</p>\n<p>En microtechnique, la notion d'<strong>ébat</strong> est essentielle : c'est le petit jeu axial volontairement laissé à un axe entre ses deux paliers pour qu'il tourne librement. Trop faible, l'axe se coince lors d'une dilatation ou d'un serrage ; trop fort, l'engrènement se dégrade et le mouvement devient imprécis. Les ébats courants en horlogerie sont de l'ordre de quelques centièmes de millimètre et se contrôlent à la brucelle en soulevant légèrement l'axe sous binoculaire, ou au comparateur.</p>\n<p>De même, un <strong>jeu d'engrènement</strong> (jeu entre les dentures) trop faible provoque un blocage, trop fort une perte de précision au changement de sens (hystérésis). Sur une liaison hélicoïdale, le jeu axial de l'écrou se traduit par un retard au changement de sens : on le compense par un écrou rattrapant le jeu ou par un ressort de précharge.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une ligne de montage d'objectifs photo, chaque bague de mise au point est montée avec une graisse amortissante et un rattrapage de jeu ; le technicien vérifie la rotation au couple-mètre et l'absence de « point dur » sur toute la course.</div>"
      }
     ],
     "points_cles": [
      "Une classe d'équivalence regroupe les pièces sans mouvement relatif entre elles.",
      "Ressorts, joints et éléments roulants n'appartiennent à aucune classe d'équivalence.",
      "Une liaison se caractérise par ses degrés de liberté parmi trois translations et trois rotations.",
      "Les symboles des liaisons sont normalisés par la norme NF EN ISO 3952.",
      "Le graphe des liaisons relie les classes ; il fait apparaître chaînes ouvertes et boucles.",
      "Le schéma cinématique place chaque symbole à sa position réelle avec des couleurs par classe.",
      "Justifier une liaison, c'est citer les surfaces de contact et les arrêts qui la réalisent.",
      "L'ébat et le jeu d'engrènement conditionnent le bon fonctionnement d'un mécanisme miniature."
     ],
     "lexique": [
      {
       "terme": "Classe d'équivalence",
       "def": "Ensemble de pièces sans mouvement relatif entre elles pendant le fonctionnement."
      },
      {
       "terme": "Degré de liberté",
       "def": "Mouvement élémentaire (translation ou rotation) autorisé par une liaison."
      },
      {
       "terme": "Liaison pivot",
       "def": "Liaison autorisant uniquement une rotation autour d'un axe."
      },
      {
       "terme": "Liaison hélicoïdale",
       "def": "Liaison où la translation est liée à la rotation par le pas du filetage."
      },
      {
       "terme": "Graphe des liaisons",
       "def": "Représentation des classes d'équivalence et des liaisons qui les relient."
      },
      {
       "terme": "Schéma cinématique",
       "def": "Dessin simplifié d'un mécanisme utilisant les symboles normalisés des liaisons."
      },
      {
       "terme": "Ébat",
       "def": "Jeu axial volontaire laissé à un axe entre ses paliers pour garantir sa libre rotation."
      },
      {
       "terme": "Jeu d'engrènement",
       "def": "Jeu entre les dents de deux roues engrenées, mesuré sur le cercle primitif."
      },
      {
       "terme": "Bâti",
       "def": "Classe d'équivalence fixe servant de référence aux mouvements."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Solutions technologiques des produits microtechniques",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmic-guidages-precision",
     "titre": "Guidages de précision en rotation et en translation",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Citer les solutions de guidage en rotation utilisées en microtechnique et leurs domaines d'emploi.",
      "Justifier le choix entre palier lisse, pierre d'horlogerie et roulement miniature.",
      "Décrire les guidages en translation de précision.",
      "Expliquer le principe et les avantages des guidages flexibles.",
      "Identifier les règles de montage et de lubrification des guidages miniatures."
     ],
     "sections": [
      {
       "titre": "Le rôle d'un guidage",
       "contenu": "\n<p>Un <strong>guidage</strong> réalise une liaison pivot (guidage en rotation) ou glissière (guidage en translation) entre deux pièces. En microtechnique, il doit remplir quatre exigences souvent contradictoires :</p>\n<ul>\n<li><strong>précision</strong> : le mouvement doit rester sur son axe à quelques micromètres près (faux-rond, battement, rectitude) ;</li>\n<li><strong>faible frottement</strong> : les énergies disponibles sont minuscules (un ressort de montre, une pile bouton) ;</li>\n<li><strong>durée de vie</strong> : des millions de tours ou de cycles sans entretien ;</li>\n<li><strong>encombrement</strong> : quelques millimètres cubes.</li>\n</ul>\n<p>Le choix d'une solution repose sur la charge à supporter, la vitesse, la précision attendue, l'environnement (vide, médical, température) et le coût. Les guidages de base (paliers lisses, roulements) ont été vus en seconde dans le cadre de l'assemblage ; on étudie ici les solutions propres à la petite échelle et les critères de choix.</p>"
      },
      {
       "titre": "Guidage en rotation par contact lisse",
       "contenu": "\n<p>Le <strong>palier lisse</strong> est la solution la plus simple : un arbre tourne dans un alésage. En microtechnique, on rencontre :</p>\n<ul>\n<li>les <strong>coussinets</strong> en bronze fritté imprégné d'huile ou en polymère technique (PTFE chargé, polyimide, POM), économiques et autolubrifiants, pour les micromoteurs et petits réducteurs ;</li>\n<li>les <strong>pierres d'horlogerie</strong> : bagues percées en rubis synthétique (corindon, oxyde d'aluminium Al<sub>2</sub>O<sub>3</sub>), extrêmement dures et polies, dans lesquelles tourne un <strong>pivot</strong> en acier trempé poli. Le couple acier poli / rubis présente un très faible coefficient de frottement et une usure quasi nulle ;</li>\n<li>les <strong>pierres à contre-pivot</strong> et les <strong>pivots coniques</strong> (de type « pivot de compteur »), où l'axe s'appuie sur une pointe, pour les instruments très sensibles (galvanomètres, boussoles).</li>\n</ul>\n<p>Le guidage par pierres est le standard de l'horlogerie mécanique : un mouvement de montre courant en compte une vingtaine, d'où l'indication « 21 rubis » ou « 25 jewels » gravée sur les platines.</p>\n<table>\n<thead><tr><th>Solution</th><th>Atouts</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Coussinet fritté</td><td>Coût, autolubrification, silence</td><td>Usure, jeu croissant avec le temps</td></tr>\n<tr><td>Coussinet polymère</td><td>Sans lubrifiant, compatible médical</td><td>Faible charge, dilatation importante</td></tr>\n<tr><td>Pierre rubis et pivot acier</td><td>Frottement très faible, usure quasi nulle</td><td>Charges très faibles, chocs (fragilité)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la pierre d'horlogerie n'est pas un ornement : elle est choisie pour sa dureté (9 sur l'échelle de Mohs) et son poli, qui garantissent un frottement faible et constant pendant des décennies.</div>"
      },
      {
       "titre": "Guidage en rotation par roulements miniatures",
       "contenu": "\n<p>Un <strong>roulement miniature</strong> a un diamètre d'alésage inférieur à 10 mm ; certains descendent à 1 mm, voire moins. On trouve des roulements rigides à billes (à une rangée), des roulements à billes à contact oblique pour les broches et les têtes de mesure, et des roulements à collerette (bague extérieure épaulée) qui simplifient l'arrêt axial dans un logement.</p>\n<p>La désignation suit en général la nomenclature ISO des séries de dimensions : par exemple un roulement rigide 693 a un alésage de 3 mm et un diamètre extérieur de 8 mm, sa largeur dépendant de la version ; le suffixe ZZ indique deux flasques métalliques, 2RS deux joints. Les fabricants ajoutent des suffixes de jeu interne et de classe de précision : il faut toujours lire le catalogue du fabricant pour les interpréter.</p>\n<p>Le montage classique utilise deux roulements :</p>\n<ul>\n<li>un roulement <strong>arrêté axialement</strong> sur l'arbre et dans le logement, qui positionne l'arbre ;</li>\n<li>un roulement <strong>libre axialement</strong> dans son logement, qui absorbe les dilatations.</li>\n</ul>\n<p>Pour supprimer tout jeu (broche de mesure, tête de lecture), on monte deux roulements à contact oblique <strong>préchargés</strong> par un ressort ou une rondelle élastique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un roulement miniature se monte en appuyant uniquement sur la bague qui est ajustée serrée. Pousser sur la bague extérieure pour emmancher la bague intérieure sur l'arbre fait passer l'effort par les billes : elles marquent les chemins de roulement (empreintes appelées faux effet Brinell) et le roulement devient bruyant et dur dès la mise en service.</div>"
      },
      {
       "titre": "Guidages en translation de précision",
       "contenu": "\n<p>Les guidages en translation rencontrés sur les produits et les équipements microtechniques sont :</p>\n<table>\n<thead><tr><th>Solution</th><th>Principe</th><th>Emploi</th></tr></thead>\n<tbody>\n<tr><td>Colonne et bague lisse</td><td>Tige rectifiée dans une douille en bronze ou polymère</td><td>Poussoirs, chariots peu chargés, petite course</td></tr>\n<tr><td>Douille à billes</td><td>Billes recirculant entre une colonne et une douille</td><td>Chariot de pousse-seringue, table de positionnement</td></tr>\n<tr><td>Glissière à billes ou à rouleaux croisés</td><td>Éléments roulants entre deux rails rectifiés en V</td><td>Platines micrométriques, tables de microscope</td></tr>\n<tr><td>Rail miniature à recirculation</td><td>Patin à billes sur un rail profilé de 5 à 15 mm de large</td><td>Axes de machines de montage, imprimantes 3D</td></tr>\n<tr><td>Queue d'aronde</td><td>Glissement entre deux surfaces en V, rattrapage par lardon</td><td>Réglages manuels, microscopes</td></tr>\n</tbody>\n</table>\n<p>Un guidage en translation se caractérise par sa <strong>course</strong>, sa <strong>rectitude</strong> (écart du mouvement par rapport à une droite idéale, en micromètres sur la course) et son <strong>jeu</strong>. Pour éviter l'arc-boutement d'un guidage lisse, la longueur de guidage doit rester grande devant le diamètre : on retient habituellement un rapport longueur/diamètre d'au moins 1,5 à 2.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir un guidage en translation. 1. Lister les exigences du cahier des charges : course, charge, vitesse, précision, environnement. 2. Éliminer les solutions incompatibles (une queue d'aronde pour un mouvement motorisé rapide, une douille à billes en milieu poussiéreux sans protection). 3. Comparer les solutions restantes sur le frottement et la précision : le roulement l'emporte sur le glissement. 4. Vérifier l'encombrement disponible. 5. Rédiger la justification en reprenant chaque critère, par exemple : « une glissière à rouleaux croisés est retenue, car la course de 10 mm, la rectitude de 2 µm et l'absence de jeu exigée excluent un guidage lisse ».</div>"
      },
      {
       "titre": "Les guidages flexibles",
       "contenu": "\n<p>Un <strong>guidage flexible</strong> obtient le mouvement par la <strong>déformation élastique</strong> d'une partie amincie de la pièce, au lieu d'un glissement ou d'un roulement. Les formes de base sont :</p>\n<ul>\n<li>la <strong>lame flexible</strong> : une lame mince encastrée qui fléchit ;</li>\n<li>le <strong>col circulaire</strong> (ou articulation à col) : un amincissement local qui se comporte comme une charnière ;</li>\n<li>la <strong>table à lames parallèles</strong> : deux lames identiques qui guident une translation quasi rectiligne sur une petite course.</li>\n</ul>\n<p>Avantages : <strong>aucun jeu, aucun frottement, aucune usure, aucune lubrification</strong>, une répétabilité submicrométrique, la possibilité de fabriquer le guidage d'une seule pièce par électroérosion à fil. Ces qualités en font la solution des instruments de mesure, des positionneurs piézoélectriques, des MEMS (qui sont presque tous à guidages flexibles) et de certains organes réglants de montres récentes.</p>\n<p>Limites : <strong>course faible</strong> (quelques dixièmes de millimètre à quelques millimètres), une <strong>raideur</strong> qui crée une force de rappel à vaincre, et un risque de rupture en <strong>fatigue</strong> si la contrainte admissible est dépassée.</p>\n<p>La raideur k d'un guidage flexible s'exprime en N/mm : la force nécessaire F pour obtenir un déplacement x vaut F = k × x. Avec une table à lames de raideur 0,5 N/mm, un déplacement de 0,2 mm demande une force de 0,1 N.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les platines de positionnement à lames flexibles se manipulent avec des précautions particulières : un choc ou une surcharge, même brève, peut déformer plastiquement les lames. On les transporte toujours bridées par leur vis de blocage de transport, qu'on ne retire qu'après installation.</div>"
      },
      {
       "titre": "Lubrification et propreté des guidages",
       "contenu": "\n<p>À petite échelle, la lubrification est une affaire de <strong>quantité</strong> plus que de produit. Une goutte trop grosse s'étale par capillarité, attire les poussières et freine le mouvement ; une goutte absente provoque l'usure. Les horlogers et monteurs utilisent :</p>\n<ul>\n<li>des <strong>huiles et graisses spécifiques</strong> (huiles horlogères synthétiques, graisses pour mécanismes miniatures), choisies selon la vitesse et la pression ;</li>\n<li>des <strong>huiliers</strong> (tiges fines calibrées) ou des distributeurs automatiques qui déposent une quantité dosée ;</li>\n<li>des <strong>épilames</strong> : traitements de surface qui empêchent l'huile de s'étaler et la maintiennent au point de contact.</li>\n</ul>\n<p>Les pierres d'horlogerie comportent souvent une <strong>creusure</strong> (réservoir d'huile) et un <strong>contre-pivot</strong> qui retient l'huile par capillarité. Les roulements miniatures sont livrés graissés ou huilés en usine : ne pas les nettoyer au solvant sans raison, car on retire le lubrifiant d'origine.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mélanger deux lubrifiants ou appliquer un lubrifiant non prévu par la documentation peut provoquer une réaction chimique, un gommage ou un gonflement des joints polymères. La gamme de montage précise toujours la référence et le point d'application : on s'y conforme strictement.</div>"
      }
     ],
     "points_cles": [
      "Un guidage de précision doit concilier précision, faible frottement, durée de vie et faible encombrement.",
      "Les pierres d'horlogerie en rubis synthétique associées à des pivots en acier poli offrent un frottement faible et constant.",
      "Un roulement miniature a un alésage inférieur à 10 mm ; sa désignation se lit dans le catalogue du fabricant.",
      "Un roulement se monte en appuyant sur la bague ajustée serrée, jamais à travers les billes.",
      "La rectitude et le jeu caractérisent un guidage en translation.",
      "Les guidages flexibles n'ont ni jeu, ni frottement, ni usure, mais une course faible et une raideur.",
      "Pour un guidage flexible, F = k × x.",
      "La lubrification se fait en quantité dosée, avec le produit prescrit par la gamme."
     ],
     "lexique": [
      {
       "terme": "Palier lisse",
       "def": "Guidage en rotation où l'arbre glisse dans un alésage."
      },
      {
       "terme": "Pierre d'horlogerie",
       "def": "Bague en rubis synthétique servant de palier à un pivot en acier."
      },
      {
       "terme": "Pivot",
       "def": "Extrémité amincie et polie d'un axe, qui tourne dans un palier."
      },
      {
       "terme": "Roulement miniature",
       "def": "Roulement dont le diamètre d'alésage est inférieur à 10 mm."
      },
      {
       "terme": "Précharge",
       "def": "Effort axial appliqué à un montage de roulements pour supprimer le jeu interne."
      },
      {
       "terme": "Rectitude",
       "def": "Écart d'un mouvement ou d'une surface par rapport à une droite idéale."
      },
      {
       "terme": "Guidage flexible",
       "def": "Guidage obtenu par déformation élastique d'une partie amincie d'une pièce."
      },
      {
       "terme": "Raideur",
       "def": "Rapport entre la force appliquée et le déplacement obtenu, en N/mm."
      },
      {
       "terme": "Épilame",
       "def": "Traitement de surface qui empêche l'étalement d'une huile."
      },
      {
       "terme": "Arc-boutement",
       "def": "Blocage d'un guidage en translation lorsque l'effort est appliqué trop loin de l'axe du guidage."
      }
     ]
    },
    {
     "id": "bmic-transmission-mouvement",
     "titre": "Transmettre et transformer le mouvement",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Identifier les caractéristiques d'un engrenage : module, nombre de dents, diamètre primitif, entraxe.",
      "Calculer le rapport de transmission d'un train d'engrenages simple.",
      "Relier vitesse, couple, puissance et rendement dans une transmission.",
      "Calculer la vitesse de translation produite par un système vis-écrou.",
      "Décrire les autres transmissions utilisées en microtechnique : courroies crantées, cames, roues à friction."
     ],
     "sections": [
      {
       "titre": "Grandeurs de base d'une transmission",
       "contenu": "\n<p>Une transmission relie un élément moteur à un élément récepteur. Pour une rotation, on utilise :</p>\n<ul>\n<li>la <strong>vitesse angulaire</strong> ω en radians par seconde (rad/s), ou la <strong>fréquence de rotation</strong> N en tours par minute (tr/min), avec ω = 2π × N / 60 ;</li>\n<li>le <strong>couple</strong> C en newtons-mètres (N·m), ou en millinewtons-mètres (mN·m) pour les micromoteurs ;</li>\n<li>la <strong>puissance</strong> P en watts (W) : P = C × ω.</li>\n</ul>\n<p>Pour une translation, on utilise la vitesse V en m/s (ou mm/s), la force F en N, et P = F × V.</p>\n<p>Une transmission réelle n'est pas parfaite : une partie de la puissance est perdue en frottement. Le <strong>rendement</strong> η (êta) est le rapport entre la puissance de sortie et la puissance d'entrée : η = P<sub>s</sub> / P<sub>e</sub>, toujours inférieur à 1. Pour plusieurs étages en série, les rendements se multiplient.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un réducteur diminue la vitesse et augmente le couple dans le même rapport, aux pertes près. Il ne crée pas de puissance : il l'adapte.</div>"
      },
      {
       "titre": "Les engrenages : vocabulaire et dimensions",
       "contenu": "\n<p>Un <strong>engrenage</strong> est formé de deux roues dentées qui engrènent ; la plus petite s'appelle le <strong>pignon</strong>. On distingue les engrenages <strong>parallèles</strong> (axes parallèles, dentures droites ou hélicoïdales), <strong>concourants</strong> (roues coniques, axes qui se coupent) et <strong>gauches</strong> (roue et vis sans fin, axes orthogonaux non concourants).</p>\n<p>Pour deux roues à denture droite de profil normalisé, la grandeur commune est le <strong>module</strong> m, en millimètres. Deux roues ne peuvent engrener que si elles ont le même module.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Symbole</th><th>Formule</th></tr></thead>\n<tbody>\n<tr><td>Diamètre primitif</td><td>d</td><td>d = m × z</td></tr>\n<tr><td>Pas (sur le cercle primitif)</td><td>p</td><td>p = π × m</td></tr>\n<tr><td>Saillie (dent normale)</td><td>ha</td><td>ha = m</td></tr>\n<tr><td>Creux (dent normale)</td><td>hf</td><td>hf = 1,25 × m</td></tr>\n<tr><td>Diamètre de tête</td><td>da</td><td>da = d + 2m</td></tr>\n<tr><td>Entraxe</td><td>a</td><td>a = (d<sub>1</sub> + d<sub>2</sub>) / 2 = m × (z<sub>1</sub> + z<sub>2</sub>) / 2</td></tr>\n</tbody>\n</table>\n<p>En microtechnique, les modules descendent couramment à 0,1 mm, et jusqu'à quelques centièmes de millimètre en horlogerie. Les dentures horlogères utilisent souvent un profil dérivé de la <strong>cycloïde</strong>, mieux adapté aux pignons de très petit nombre de dents (6 à 12) que le profil en développante de cercle de la mécanique générale ; leurs dimensions sont définies par les normes de l'industrie horlogère suisse (NIHS).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'entraxe d'un engrenage miniature est une cote critique. Un écart de quelques micromètres sur la position d'un trou de palier dans la platine peut provoquer un coincement (entraxe trop court) ou un saut de dent (entraxe trop long). C'est pourquoi ces trous sont tolérés très serrés et contrôlés sur machine optique ou tridimensionnelle.</div>"
      },
      {
       "titre": "Rapport de transmission d'un train d'engrenages",
       "contenu": "\n<p>Pour un engrenage simple, le <strong>rapport de transmission</strong> r s'écrit :</p>\n<p>r = N<sub>sortie</sub> / N<sub>entrée</sub> = z<sub>menante</sub> / z<sub>menée</sub></p>\n<p>Un engrenage extérieur inverse le sens de rotation. Une roue intermédiaire (roue « parasite ») ne modifie pas le rapport, mais rétablit le sens.</p>\n<p>Pour un <strong>train d'engrenages</strong> à plusieurs étages, le rapport global est le produit des rapports de chaque étage :</p>\n<p>r = (produit des nombres de dents des roues menantes) / (produit des nombres de dents des roues menées)</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la vitesse de sortie d'un micro-réducteur. Données : moteur à 12 000 tr/min ; étage 1 : pignon de 10 dents menant une roue de 50 dents ; étage 2 : pignon de 12 dents (solidaire de la roue de 50) menant une roue de 60 dents. 1. Rapport de l'étage 1 : 10 / 50 = 0,2. 2. Rapport de l'étage 2 : 12 / 60 = 0,2. 3. Rapport global : 0,2 × 0,2 = 0,04 (soit une réduction de 25). 4. Vitesse de sortie : 12 000 × 0,04 = 480 tr/min. 5. Sens : deux engrenages extérieurs, donc deux inversions : la sortie tourne dans le même sens que le moteur.</div>\n<p>Les <strong>trains épicycloïdaux</strong> (ou planétaires) sont très utilisés dans les micromoteurs à réducteur intégré : un planétaire central, des satellites portés par un porte-satellites, une couronne à denture intérieure. Ils offrent un grand rapport de réduction dans un faible volume et un arbre de sortie coaxial à l'arbre moteur. Leur rapport se lit sur la fiche technique du motoréducteur.</p>"
      },
      {
       "titre": "Couple, puissance et rendement dans un réducteur",
       "contenu": "\n<p>En reprenant l'exemple précédent, supposons que le moteur délivre un couple de 2 mN·m et que chaque étage a un rendement de 0,9.</p>\n<ul>\n<li>Rendement global : η = 0,9 × 0,9 = 0,81.</li>\n<li>Puissance d'entrée : ω<sub>e</sub> = 2π × 12 000 / 60 ≈ 1 257 rad/s ; P<sub>e</sub> = 0,002 × 1 257 ≈ 2,5 W.</li>\n<li>Puissance de sortie : P<sub>s</sub> = 0,81 × 2,5 ≈ 2,0 W.</li>\n<li>Couple de sortie : C<sub>s</sub> = C<sub>e</sub> × η / r = 0,002 × 0,81 / 0,04 ≈ 0,0405 N·m, soit environ 40 mN·m.</li>\n</ul>\n<p>Le couple a été multiplié par environ 20, et non par 25, à cause des pertes. Les fiches de motoréducteurs indiquent toujours le rendement et le <strong>couple maximal admissible en sortie</strong> : au-delà, les dentures de petit module risquent de se rompre.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lorsqu'un client se plaint qu'un appareil « force » ou consomme trop, le technicien SAV mesure souvent le courant absorbé par le moteur. Pour un moteur à courant continu, le courant est proportionnel au couple : un courant anormalement élevé à vide signale un frottement excessif dans la transmission (lubrifiant gommé, corps étranger, dent abîmée).</div>"
      },
      {
       "titre": "Transformer une rotation en translation : la vis-écrou",
       "contenu": "\n<p>Le système <strong>vis-écrou</strong> réalise une liaison hélicoïdale. Pour un filet simple, à chaque tour de vis l'écrou avance d'un pas p. Si la vis tourne à N tr/min :</p>\n<p>V = N × p (en mm/min si p est en mm)</p>\n<p>Exemple : vis de pas 0,5 mm tournant à 6 tr/min : V = 6 × 0,5 = 3 mm/min. Pour une seringue dont le piston a une section de 3,1 cm², le débit vaut 3,1 cm² × 0,3 cm/min ≈ 0,93 mL/min, soit environ 56 mL/h.</p>\n<p>On distingue :</p>\n<ul>\n<li>la vis-écrou à <strong>glissement</strong> (filet trapézoïdal ou métrique), simple, souvent <strong>irréversible</strong> : un effort sur l'écrou ne fait pas tourner la vis, ce qui assure un maintien en position sans frein ;</li>\n<li>la <strong>vis à billes</strong> (ou à rouleaux), où des billes circulent entre la vis et l'écrou : rendement élevé (supérieur à 0,9), faible usure, mais réversible ;</li>\n<li>la <strong>vis micrométrique</strong>, rectifiée et de pas fin (0,5 mm ou 0,25 mm), utilisée pour les réglages et les instruments de mesure.</li>\n</ul>\n<p>Un filet à <strong>plusieurs entrées</strong> avance de n × p par tour, n étant le nombre d'entrées : il faut lire le « pas réel » (ou pas de l'hélice) sur la documentation.</p>"
      },
      {
       "titre": "Autres transmissions miniatures",
       "contenu": "\n<table>\n<thead><tr><th>Solution</th><th>Principe</th><th>Points forts</th><th>Points faibles</th></tr></thead>\n<tbody>\n<tr><td>Courroie crantée</td><td>Courroie à dents engrenant sur des poulies dentées</td><td>Pas de glissement, grand entraxe, silencieuse</td><td>Tension à régler, allongement, usure</td></tr>\n<tr><td>Roues à friction</td><td>Roulement sans glissement de deux roues pressées</td><td>Pas de jeu, silencieuse, réglage continu possible</td><td>Glissement si effort excessif</td></tr>\n<tr><td>Roue et vis sans fin</td><td>Vis à un ou plusieurs filets engrenant une roue</td><td>Grande réduction en un étage, souvent irréversible</td><td>Rendement faible (0,3 à 0,7)</td></tr>\n<tr><td>Came et suiveur</td><td>Profil qui impose une loi de mouvement au suiveur</td><td>Mouvement complexe, synchronisation</td><td>Usure du profil, effort de rappel</td></tr>\n<tr><td>Croix de Malte</td><td>Entraînement intermittent par une roue à fentes</td><td>Mouvement pas à pas mécanique</td><td>Chocs, vitesse limitée</td></tr>\n</tbody>\n</table>\n<p>Pour une courroie crantée ou une transmission par roues à friction, le rapport s'exprime avec les diamètres : r = d<sub>menante</sub> / d<sub>menée</sub>. Pour une roue et vis sans fin : r = n<sub>filets</sub> / z<sub>roue</sub> ; une vis à un filet et une roue de 40 dents donnent r = 1/40.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une transmission irréversible (roue et vis sans fin, vis-écrou à petit angle) bloque la sortie quand le moteur est arrêté. C'est souvent voulu (maintien de position), mais c'est dangereux lors d'un démontage : une charge peut rester sous tension. Il faut décharger le mécanisme avant d'ouvrir.</div>"
      }
     ],
     "points_cles": [
      "P = C × ω en rotation, P = F × V en translation ; ω = 2π × N / 60.",
      "Le rendement η = Ps / Pe est inférieur à 1 ; les rendements d'étages successifs se multiplient.",
      "Deux roues n'engrènent que si elles ont le même module ; d = m × z.",
      "Le rapport d'un train d'engrenages est le produit des rapports de chaque étage.",
      "Un réducteur diminue la vitesse et augmente le couple, aux pertes près.",
      "Vis-écrou : V = N × p, à multiplier par le nombre d'entrées du filet.",
      "Une vis-écrou à glissement est souvent irréversible, une vis à billes est réversible.",
      "L'entraxe est une cote critique pour le fonctionnement d'un engrenage miniature."
     ],
     "lexique": [
      {
       "terme": "Module",
       "def": "Grandeur normalisée qui fixe la taille des dents d'une roue dentée ; d = m × z."
      },
      {
       "terme": "Pignon",
       "def": "La plus petite des deux roues d'un engrenage."
      },
      {
       "terme": "Diamètre primitif",
       "def": "Diamètre du cercle sur lequel les deux roues roulent sans glisser."
      },
      {
       "terme": "Entraxe",
       "def": "Distance entre les axes de deux roues engrenées."
      },
      {
       "terme": "Rapport de transmission",
       "def": "Rapport entre la vitesse de sortie et la vitesse d'entrée d'une transmission."
      },
      {
       "terme": "Rendement",
       "def": "Rapport entre la puissance de sortie et la puissance d'entrée."
      },
      {
       "terme": "Train épicycloïdal",
       "def": "Train d'engrenages comportant un planétaire, des satellites et une couronne, à sortie coaxiale."
      },
      {
       "terme": "Pas",
       "def": "Distance parcourue par l'écrou pour un tour de vis, pour un filet à une entrée."
      },
      {
       "terme": "Irréversibilité",
       "def": "Propriété d'une transmission qu'on ne peut pas entraîner par sa sortie."
      },
      {
       "terme": "Couple",
       "def": "Effet de rotation d'une action mécanique, en N·m."
      }
     ]
    },
    {
     "id": "bmic-actionneurs",
     "titre": "Actionneurs et motorisation miniature",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Décrire le principe et les caractéristiques des moteurs à courant continu, pas à pas et sans balais.",
      "Exploiter les grandeurs d'une fiche de micromoteur : tension, courant, couple, vitesse, constantes.",
      "Expliquer le rôle d'un driver et la commande par modulation de largeur d'impulsion.",
      "Citer les actionneurs non tournants : électroaimants, piézoélectriques, vibreurs, alliages à mémoire de forme.",
      "Justifier le choix d'un actionneur en fonction du besoin."
     ],
     "sections": [
      {
       "titre": "Rôle de l'actionneur dans la chaîne d'énergie",
       "contenu": "\n<p>L'<strong>actionneur</strong> réalise la fonction « convertir » de la chaîne d'énergie : il transforme une énergie, le plus souvent électrique, en énergie mécanique (rotation ou translation). Dans un produit microtechnique alimenté par une pile ou une batterie, l'actionneur est souvent le premier consommateur d'énergie : son choix conditionne l'autonomie.</p>\n<p>Les critères de choix sont :</p>\n<ul>\n<li>le <strong>type de mouvement</strong> : rotation continue, positionnement angulaire précis, translation courte ou longue ;</li>\n<li>le <strong>couple</strong> ou la <strong>force</strong> et la <strong>vitesse</strong> requis ;</li>\n<li>la <strong>précision de position</strong> et la nécessité ou non d'un capteur de retour ;</li>\n<li>l'<strong>alimentation</strong> disponible (tension, courant maximal) ;</li>\n<li>l'<strong>encombrement</strong>, la <strong>masse</strong>, le <strong>bruit</strong>, la <strong>durée de vie</strong> et le coût.</li>\n</ul>"
      },
      {
       "titre": "Le moteur à courant continu",
       "contenu": "\n<p>Le <strong>moteur à courant continu</strong> (moteur CC) comprend un <strong>stator</strong> à aimants permanents et un <strong>rotor</strong> bobiné alimenté par un <strong>collecteur</strong> et des <strong>balais</strong>. En microtechnique, on utilise beaucoup les moteurs à <strong>rotor sans fer</strong> (bobinage en cloche) : inertie très faible, accélérations rapides, rendement élevé (jusqu'à 80 à 90 %), pas de couple de détente.</p>\n<p>Les relations à connaître :</p>\n<ul>\n<li>le couple est proportionnel au courant : C = k<sub>t</sub> × I, où k<sub>t</sub> est la <strong>constante de couple</strong> (en mN·m/A) ;</li>\n<li>la vitesse à vide est proportionnelle à la tension : la <strong>constante de vitesse</strong> k<sub>n</sub> s'exprime en tr/min par volt ;</li>\n<li>le moteur échauffe son bobinage par effet Joule : P<sub>J</sub> = R × I².</li>\n</ul>\n<p>La courbe caractéristique couple-vitesse d'un moteur CC est une droite descendante : vitesse maximale à vide (couple nul), couple maximal au démarrage (vitesse nulle, appelé couple de démarrage ou de blocage). Le constructeur indique un <strong>couple nominal</strong> admissible en continu, nettement inférieur au couple de démarrage, pour limiter l'échauffement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un moteur CC sur fiche technique. Besoin : couple de 3 mN·m en continu. Fiche : tension nominale 6 V, constante de couple 7 mN·m/A, couple nominal 4,5 mN·m, courant à vide 15 mA. 1. Couple demandé inférieur au couple nominal : 3 &lt; 4,5 mN·m, le moteur convient thermiquement. 2. Courant nécessaire : I = C / k<sub>t</sub> + I<sub>0</sub> = 3 / 7 + 0,015 ≈ 0,43 + 0,015 ≈ 0,44 A. 3. Comparer au courant que l'alimentation peut fournir. 4. Conclure en citant les deux vérifications.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un moteur CC bloqué (mécanisme coincé) absorbe son courant de démarrage en permanence et peut brûler en quelques secondes. Lors d'un essai, il faut toujours limiter le courant de l'alimentation de laboratoire et couper dès qu'un blocage apparaît.</div>"
      },
      {
       "titre": "Le moteur pas à pas",
       "contenu": "\n<p>Le <strong>moteur pas à pas</strong> tourne par incréments angulaires fixes, appelés <strong>pas</strong>, à chaque impulsion de commande. Un moteur de 200 pas par tour avance de 360 / 200 = 1,8° par pas. Les moteurs miniatures à aimant permanent (type « can-stack ») ont souvent 20 ou 24 pas par tour, soit 18° ou 15°.</p>\n<p>Avantages : <strong>positionnement en boucle ouverte</strong> (sans capteur : on compte les impulsions), couple de maintien à l'arrêt, commande numérique simple. Limites : risque de <strong>perte de pas</strong> si le couple résistant dépasse le couple disponible (la position réelle n'est alors plus connue), vibrations à certaines vitesses (résonance), consommation même à l'arrêt.</p>\n<p>La commande en <strong>micropas</strong> divise chaque pas en 2, 4, 8 ou davantage en modulant les courants des bobines : le mouvement est plus doux et la résolution meilleure, mais la précision réelle d'un micropas dépend de la charge.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une fréquence d'impulsions. Une vis de pas 0,5 mm est entraînée directement par un moteur de 200 pas par tour en commande au demi-pas. Avance par impulsion : 0,5 / 400 = 0,00125 mm = 1,25 µm. Pour une vitesse d'avance de 3 mm/min = 0,05 mm/s, il faut 0,05 / 0,00125 = 40 impulsions par seconde, soit 40 Hz.</div>"
      },
      {
       "titre": "Le moteur sans balais et la commande électronique",
       "contenu": "\n<p>Le <strong>moteur sans balais</strong> (brushless, ou moteur EC à commutation électronique) inverse l'architecture du moteur CC : les aimants sont sur le rotor, les bobines sur le stator. La commutation est assurée par une électronique, guidée par des <strong>capteurs à effet Hall</strong> ou par la mesure de la force contre-électromotrice. Pas d'usure de balais, durée de vie de plusieurs dizaines de milliers d'heures, vitesses élevées : c'est la solution des micro-turbines, ventilateurs, pompes médicales et outils dentaires.</p>\n<p>Tous ces moteurs sont pilotés par un <strong>driver</strong> (ou variateur), qui réalise la fonction « distribuer ». Pour faire varier la vitesse d'un moteur CC, le driver utilise la <strong>modulation de largeur d'impulsion</strong> (MLI, en anglais PWM) : la tension est hachée à fréquence fixe (souvent plusieurs dizaines de kilohertz), et le <strong>rapport cyclique</strong> α (durée à l'état haut divisée par la période) fixe la tension moyenne : U<sub>moy</sub> = α × U.</p>\n<p>Un <strong>pont en H</strong>, composé de quatre transistors, permet d'inverser le sens du courant et donc le sens de rotation.</p>\n<table>\n<thead><tr><th>Moteur</th><th>Point fort</th><th>Point faible</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>CC à balais</td><td>Commande simple, coût</td><td>Usure des balais, parasites</td><td>Jouet, petite pompe</td></tr>\n<tr><td>CC sans fer</td><td>Faible inertie, rendement</td><td>Prix</td><td>Instrumentation, robotique fine</td></tr>\n<tr><td>Pas à pas</td><td>Position sans capteur</td><td>Perte de pas, vibrations</td><td>Pousse-seringue, imprimante</td></tr>\n<tr><td>Sans balais</td><td>Durée de vie, vitesse</td><td>Électronique de commande</td><td>Outil dentaire, ventilateur</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Actionneurs linéaires et actionneurs particuliers",
       "contenu": "\n<ul>\n<li><strong>Électroaimant</strong> (ou solénoïde) : une bobine attire un noyau mobile ; course de quelques millimètres, mouvement tout ou rien. Utilisé pour les verrous, les vannes, les éjecteurs.</li>\n<li><strong>Actionneur piézoélectrique</strong> : certains cristaux et céramiques (titano-zirconate de plomb, PZT) se déforment sous tension. Les déplacements sont minuscules (de l'ordre de 0,1 % de la longueur de l'empilement, soit quelques dizaines de micromètres) mais très précis et très rapides, avec des forces importantes. Les <strong>moteurs piézoélectriques</strong> à ondes ou à inertie produisent une rotation ou une translation continue : on les trouve dans les autofocus d'objectifs et les platines de positionnement. Ils nécessitent des tensions de commande élevées, parfois plusieurs dizaines à centaines de volts.</li>\n<li><strong>Vibreur</strong> : petit moteur à masse excentrée ou actionneur linéaire résonant, qui produit le retour vibratoire des téléphones et montres connectées.</li>\n<li><strong>Alliage à mémoire de forme</strong> (nickel-titane) : un fil qui se raccourcit de quelques pour cent lorsqu'on le chauffe par passage de courant. Actionneur silencieux et très compact, mais lent.</li>\n<li><strong>Ressort moteur</strong> : en horlogerie mécanique, le barillet stocke l'énergie dans un ressort spiral armé par le remontage ; c'est l'actionneur de la montre.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un actionneur piézoélectrique est un condensateur qui reste chargé après coupure de l'alimentation. Avant toute intervention, il faut le décharger selon la procédure du fabricant ; un contact avec ses bornes peut provoquer une décharge désagréable et détruire l'électronique voisine.</div>"
      },
      {
       "titre": "Justifier un choix d'actionneur",
       "contenu": "\n<p>À l'épreuve écrite comme en entreprise, justifier un actionneur revient à confronter le cahier des charges aux caractéristiques du composant. La justification doit être <strong>chiffrée</strong> et <strong>argumentée</strong>.</p>\n<p>Exemple de rédaction : « Le moteur pas à pas a été retenu pour entraîner la vis du pousse-seringue, car il permet de connaître la position du piston sans capteur, par simple comptage des impulsions. Avec 400 demi-pas par tour et une vis de pas 0,5 mm, la résolution de déplacement est de 1,25 µm, ce qui est très inférieur à la précision de débit demandée. Le couple de maintien empêche en outre le piston de reculer sous la pression du liquide lorsque le moteur est à l'arrêt. »</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> au test final, on vérifie souvent la consommation de l'actionneur dans des conditions définies (à vide, en charge nominale). Une consommation hors fourchette révèle un défaut de montage de la transmission bien plus souvent qu'un moteur défectueux : avant de remplacer le moteur, il faut le désaccoupler et le tester seul.</div>"
      }
     ],
     "points_cles": [
      "L'actionneur réalise la fonction convertir de la chaîne d'énergie.",
      "Moteur CC : C = kt × I ; la vitesse à vide est proportionnelle à la tension.",
      "Le couple nominal, admissible en continu, est bien inférieur au couple de démarrage.",
      "Un moteur pas à pas positionne en boucle ouverte, mais peut perdre des pas en surcharge.",
      "Le moteur sans balais a une commutation électronique et une grande durée de vie.",
      "La MLI fixe la tension moyenne : Umoy = α × U ; un pont en H inverse le sens.",
      "Les actionneurs piézoélectriques produisent des déplacements très faibles mais très précis.",
      "Un choix d'actionneur se justifie de façon chiffrée à partir du cahier des charges."
     ],
     "lexique": [
      {
       "terme": "Actionneur",
       "def": "Composant qui convertit une énergie, souvent électrique, en énergie mécanique."
      },
      {
       "terme": "Constante de couple",
       "def": "Rapport entre le couple d'un moteur CC et le courant qui le traverse, en mN·m/A."
      },
      {
       "terme": "Couple nominal",
       "def": "Couple qu'un moteur peut fournir en continu sans échauffement excessif."
      },
      {
       "terme": "Pas angulaire",
       "def": "Angle de rotation d'un moteur pas à pas pour une impulsion de commande."
      },
      {
       "terme": "Perte de pas",
       "def": "Décalage entre la position commandée et la position réelle d'un moteur pas à pas surchargé."
      },
      {
       "terme": "Driver",
       "def": "Circuit qui distribue l'énergie au moteur selon les ordres de la commande."
      },
      {
       "terme": "MLI",
       "def": "Modulation de largeur d'impulsion : hachage de la tension pour en régler la valeur moyenne."
      },
      {
       "terme": "Rapport cyclique",
       "def": "Rapport entre la durée à l'état haut et la période d'un signal MLI."
      },
      {
       "terme": "Piézoélectricité",
       "def": "Propriété de certains matériaux de se déformer sous l'effet d'une tension, et inversement."
      },
      {
       "terme": "Pont en H",
       "def": "Montage de quatre interrupteurs électroniques permettant d'inverser le sens du courant dans un moteur."
      }
     ]
    },
    {
     "id": "bmic-capteurs-electronique",
     "titre": "Capteurs et électronique embarquée",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Classer les capteurs selon la nature de leur signal de sortie.",
      "Décrire le principe des capteurs courants en microtechnique : contact, optique, effet Hall, codeur, jauge, MEMS.",
      "Exploiter les caractéristiques d'un capteur : étendue de mesure, sensibilité, résolution, précision.",
      "Identifier les blocs d'une carte électronique embarquée et leurs composants.",
      "Reconnaître les composants montés en surface et leurs boîtiers usuels."
     ],
     "sections": [
      {
       "titre": "Le capteur dans la chaîne d'information",
       "contenu": "\n<p>Le <strong>capteur</strong> réalise la fonction « acquérir » : il transforme une <strong>grandeur physique</strong> (position, force, température, lumière, pression) en un <strong>signal électrique</strong> exploitable par la carte de traitement. On distingue trois types de signaux de sortie :</p>\n<table>\n<thead><tr><th>Type</th><th>Signal</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Tout ou rien (TOR)</td><td>Deux états : 0 ou 1</td><td>Microrupteur de fin de course, fourche optique</td></tr>\n<tr><td>Analogique</td><td>Tension ou courant variant continûment avec la grandeur</td><td>Potentiomètre, thermistance, jauge de déformation</td></tr>\n<tr><td>Numérique</td><td>Suite d'impulsions ou trame de données</td><td>Codeur incrémental, accéléromètre MEMS avec bus I2C ou SPI</td></tr>\n</tbody>\n</table>\n<p>Un capteur est souvent associé à un <strong>conditionneur</strong> qui adapte son signal : amplification, filtrage, conversion analogique-numérique. Dans les capteurs intégrés modernes, tout est réuni dans un seul boîtier de quelques millimètres.</p>"
      },
      {
       "titre": "Principaux capteurs des produits microtechniques",
       "contenu": "\n<ul>\n<li><strong>Microrupteur</strong> : contact mécanique actionné par une lame ; simple, mais sujet aux <strong>rebonds</strong> (plusieurs fermetures parasites en quelques millisecondes) que le logiciel doit filtrer.</li>\n<li><strong>Fourche optique</strong> et <strong>capteur réflexif</strong> : une diode électroluminescente infrarouge éclaire un phototransistor ; l'interruption ou la réflexion du faisceau signale la présence d'un objet ou le passage d'un repère.</li>\n<li><strong>Capteur à effet Hall</strong> : délivre une tension proportionnelle au champ magnétique ; il détecte un aimant sans contact (position d'un clapet, commutation des moteurs sans balais).</li>\n<li><strong>Codeur incrémental</strong> : un disque ou une règle graduée lus optiquement ou magnétiquement produisent deux signaux carrés décalés d'un quart de période (voies A et B) ; on compte les fronts pour connaître le déplacement et l'ordre des fronts pour le sens.</li>\n<li><strong>Codeur absolu</strong> : fournit directement un code unique pour chaque position, même après une coupure d'alimentation.</li>\n<li><strong>Potentiomètre</strong> (rotatif ou linéaire) : diviseur de tension dont la sortie est proportionnelle à la position du curseur.</li>\n<li><strong>Jauge de déformation</strong> : résistance collée sur un corps d'épreuve, dont la valeur varie avec l'allongement ; montée en pont de Wheatstone, elle mesure une force ou une pression.</li>\n<li><strong>Thermistance</strong> (CTN, CTP) et <strong>sonde platine</strong> (Pt100, Pt1000) : résistance variant avec la température.</li>\n<li><strong>Capteurs MEMS</strong> : accéléromètres, gyroscopes, capteurs de pression et microphones gravés dans le silicium, avec sortie numérique.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la résolution d'un codeur. Un codeur incrémental de 500 traits par tour est monté sur l'arbre d'un moteur entraînant une vis de pas 1 mm. En comptant tous les fronts des voies A et B (comptage par 4), on obtient 2 000 points par tour. Résolution en déplacement : 1 / 2 000 = 0,0005 mm = 0,5 µm par point.</div>"
      },
      {
       "titre": "Caractéristiques métrologiques d'un capteur",
       "contenu": "\n<table>\n<thead><tr><th>Caractéristique</th><th>Définition</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Étendue de mesure</td><td>Plage de la grandeur que le capteur peut mesurer</td><td>0 à 10 N</td></tr>\n<tr><td>Sensibilité</td><td>Variation de la sortie pour une variation unitaire de l'entrée</td><td>2 mV/N</td></tr>\n<tr><td>Résolution</td><td>Plus petite variation détectable</td><td>0,01 N</td></tr>\n<tr><td>Linéarité</td><td>Écart maximal par rapport à une droite idéale</td><td>± 0,1 % de la pleine échelle</td></tr>\n<tr><td>Hystérésis</td><td>Différence de sortie selon que la grandeur monte ou descend</td><td>0,05 % PE</td></tr>\n<tr><td>Temps de réponse</td><td>Durée pour atteindre la valeur finale à un pourcentage donné</td><td>1 ms à 90 %</td></tr>\n</tbody>\n</table>\n<p>La sensibilité permet de passer du signal à la grandeur : avec une sensibilité de 2 mV/N, une tension de 13 mV correspond à 6,5 N. Pour un capteur linéaire avec décalage (offset), on écrit U = U<sub>0</sub> + s × G, où U<sub>0</sub> est la tension à grandeur nulle et s la sensibilité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne pas confondre résolution et précision. Un afficheur à quatre décimales peut afficher des valeurs avec une très bonne résolution tout en étant faux de plusieurs pour cent si le capteur n'est pas étalonné. La précision se vérifie par comparaison avec un étalon.</div>"
      },
      {
       "titre": "Architecture d'une carte électronique embarquée",
       "contenu": "\n<p>La plupart des produits microtechniques actuels contiennent une ou plusieurs <strong>cartes électroniques</strong>. On y retrouve toujours les mêmes blocs fonctionnels :</p>\n<table>\n<thead><tr><th>Bloc</th><th>Rôle</th><th>Composants typiques</th></tr></thead>\n<tbody>\n<tr><td>Alimentation</td><td>Fournir des tensions stables (3,3 V, 5 V) à partir de la pile ou de la batterie</td><td>Régulateur linéaire, convertisseur à découpage, condensateurs de filtrage</td></tr>\n<tr><td>Traitement</td><td>Exécuter le programme, gérer les entrées et sorties</td><td>Microcontrôleur, quartz ou résonateur, mémoire</td></tr>\n<tr><td>Interfaces d'entrée</td><td>Adapter les signaux des capteurs</td><td>Résistances, amplificateurs opérationnels, filtres</td></tr>\n<tr><td>Interfaces de puissance</td><td>Commander les actionneurs</td><td>Transistors MOSFET, drivers de moteur intégrés</td></tr>\n<tr><td>Communication</td><td>Échanger avec l'utilisateur ou d'autres appareils</td><td>Afficheur, module radio, connecteur USB</td></tr>\n<tr><td>Gestion de l'énergie</td><td>Charger la batterie, mettre en veille</td><td>Circuit de charge, superviseur de tension</td></tr>\n</tbody>\n</table>\n<p>Le <strong>microcontrôleur</strong> est un circuit intégré qui réunit processeur, mémoires, convertisseurs analogique-numérique, temporisateurs et ports de communication. Il dialogue avec les capteurs numériques par des <strong>bus série</strong> : I2C (deux fils, horloge et données), SPI (quatre fils, plus rapide) ou UART (liaison série asynchrone). Un <strong>quartz</strong> cadence son horloge ; en horlogerie électronique, un quartz à 32 768 Hz (2<sup>15</sup> Hz) sert de base de temps, la division successive par 2 donnant exactement une impulsion par seconde.</p>"
      },
      {
       "titre": "Composants montés en surface",
       "contenu": "\n<p>Les cartes microtechniques utilisent presque exclusivement des <strong>CMS</strong> (composants montés en surface, en anglais SMD) : ils sont brasés directement sur des plages de cuivre (pastilles) de la face du circuit imprimé, sans traverser la carte.</p>\n<table>\n<thead><tr><th>Boîtier</th><th>Composants</th><th>Dimensions indicatives</th></tr></thead>\n<tbody>\n<tr><td>0603, 0402, 0201 (code impérial)</td><td>Résistances, condensateurs</td><td>0402 : environ 1,0 × 0,5 mm</td></tr>\n<tr><td>SOT-23</td><td>Transistors, petits régulateurs</td><td>Environ 3 × 1,3 mm, 3 à 6 broches</td></tr>\n<tr><td>SOIC, TSSOP</td><td>Circuits intégrés à broches latérales</td><td>Pas de 1,27 mm ou 0,65 mm</td></tr>\n<tr><td>QFN</td><td>Circuits intégrés sans broches, pastilles sous le boîtier</td><td>Pas de 0,5 mm ou 0,4 mm</td></tr>\n<tr><td>BGA</td><td>Processeurs, mémoires, billes de brasure sous le boîtier</td><td>Pas de 0,8 mm à 0,4 mm</td></tr>\n</tbody>\n</table>\n<p>Les résistances CMS sont souvent marquées par un code à trois ou quatre chiffres : « 472 » signifie 47 × 10² = 4 700 Ω = 4,7 kΩ. Les condensateurs céramiques CMS ne portent généralement aucun marquage : leur valeur se lit dans la nomenclature de la carte, d'où l'importance des repères (R12, C7, U3) sérigraphiés.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur une carte, chaque composant porte un repère topologique : R pour les résistances, C pour les condensateurs, L pour les inductances, D pour les diodes, Q ou T pour les transistors, U ou IC pour les circuits intégrés, J ou X pour les connecteurs, Y pour les quartz. Ce repère fait le lien entre la carte, le schéma et la nomenclature.</div>"
      },
      {
       "titre": "Mesures sur une carte et précautions",
       "contenu": "\n<p>Le technicien effectue des mesures simples sur les cartes pour les tester ou les dépanner :</p>\n<ul>\n<li>au <strong>multimètre</strong> : tensions d'alimentation sur les points de test, continuité d'une piste, valeur d'une résistance hors tension ;</li>\n<li>à l'<strong>oscilloscope</strong> : présence et forme d'un signal (horloge du quartz, signal MLI d'un moteur, trames d'un bus série) ;</li>\n<li>sur <strong>banc de test</strong> : la carte est posée sur un lit d'aiguilles qui contacte des points de test et un programme vérifie automatiquement les tensions et les fonctions.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les composants électroniques, en particulier les circuits intégrés CMOS et les MOSFET, peuvent être détruits par une décharge électrostatique de quelques centaines de volts, imperceptible pour l'opérateur. Toute manipulation de carte se fait en zone protégée contre les décharges électrostatiques, avec bracelet relié à la terre, selon les règles vues avec la maîtrise de l'environnement de travail.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une carte réparée doit être identifiée et tracée : on note dans le dossier de l'appareil le repère du composant remplacé, la référence du composant neuf et le résultat du test après réparation. Dans le médical et l'aéronautique, seules les réparations prévues par le fabricant sont autorisées.</div>"
      }
     ],
     "points_cles": [
      "Le capteur réalise la fonction acquérir et délivre un signal TOR, analogique ou numérique.",
      "Un codeur incrémental donne déplacement et sens grâce à deux voies décalées d'un quart de période.",
      "Étendue de mesure, sensibilité, résolution et linéarité caractérisent un capteur.",
      "La résolution n'est pas la précision : seule une comparaison à un étalon établit la précision.",
      "Une carte embarquée comprend alimentation, traitement, interfaces d'entrée et de puissance, communication.",
      "Le microcontrôleur dialogue avec les capteurs numériques par bus I2C, SPI ou UART.",
      "Les CMS sont brasés en surface ; leurs repères topologiques relient carte, schéma et nomenclature.",
      "Toute manipulation de carte se fait en zone protégée contre les décharges électrostatiques."
     ],
     "lexique": [
      {
       "terme": "Capteur",
       "def": "Composant qui transforme une grandeur physique en signal électrique."
      },
      {
       "terme": "Signal TOR",
       "def": "Signal tout ou rien, ne prenant que deux états."
      },
      {
       "terme": "Codeur incrémental",
       "def": "Capteur de position délivrant des impulsions à compter, sur deux voies décalées."
      },
      {
       "terme": "Effet Hall",
       "def": "Apparition d'une tension dans un conducteur placé dans un champ magnétique et parcouru par un courant."
      },
      {
       "terme": "Sensibilité",
       "def": "Rapport entre la variation du signal de sortie et la variation de la grandeur mesurée."
      },
      {
       "terme": "Résolution",
       "def": "Plus petite variation de la grandeur que le capteur ou l'instrument peut distinguer."
      },
      {
       "terme": "Microcontrôleur",
       "def": "Circuit intégré réunissant processeur, mémoires et périphériques d'entrées-sorties."
      },
      {
       "terme": "CMS",
       "def": "Composant monté en surface, brasé directement sur les pastilles du circuit imprimé."
      },
      {
       "terme": "Bus I2C",
       "def": "Liaison série à deux fils (horloge et données) reliant un microcontrôleur à des périphériques."
      },
      {
       "terme": "Repère topologique",
       "def": "Identifiant d'un composant sur une carte (R12, C7, U3), commun au schéma et à la nomenclature."
      }
     ]
    },
    {
     "id": "bmic-optique",
     "titre": "Optique et optoélectronique appliquées",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Décrire les composants optiques usuels : lentilles, miroirs, prismes, filtres, fibres.",
      "Utiliser les relations des lentilles minces pour calculer une position d'image et un grandissement.",
      "Expliquer les exigences de centrage, de propreté et de montage des composants optiques.",
      "Citer les sources et détecteurs de lumière utilisés dans les produits microtechniques.",
      "Appliquer les règles de sécurité liées aux lasers selon leur classe."
     ],
     "sections": [
      {
       "titre": "L'optique dans les produits microtechniques",
       "contenu": "\n<p>De nombreux produits microtechniques contiennent une fonction optique : objectif d'appareil photo ou de caméra, loupe et microscope, lecteur de code, capteur de présence, instrument de mesure à faisceau laser, endoscope médical, coupleur de fibres pour les télécommunications. Le technicien doit savoir identifier les composants, comprendre leur rôle et surtout les <strong>manipuler et monter sans les dégrader</strong>, car une rayure ou une trace de doigt sur une surface optique suffit à rendre un instrument inutilisable.</p>\n<p>La lumière se propage en ligne droite dans un milieu homogène. À la surface de séparation entre deux milieux, elle est en partie <strong>réfléchie</strong> et en partie <strong>réfractée</strong> (déviée). L'<strong>indice de réfraction</strong> n d'un milieu caractérise cette déviation : n = 1 pour le vide (et pratiquement pour l'air), environ 1,5 pour un verre optique courant. La loi de Snell-Descartes s'écrit n<sub>1</sub> × sin i<sub>1</sub> = n<sub>2</sub> × sin i<sub>2</sub>.</p>\n<p>Lorsque la lumière passe d'un milieu plus réfringent vers un milieu moins réfringent (du verre vers l'air), elle peut être entièrement renvoyée si l'angle d'incidence dépasse un angle limite : c'est la <strong>réflexion totale</strong>. Ce phénomène explique le fonctionnement des fibres optiques et des prismes de renvoi, qui réfléchissent la lumière sans aucun traitement métallique. Il explique aussi pourquoi une goutte d'huile ou de colle sur la face d'un prisme peut « faire disparaître » une partie de l'image : la réflexion totale cesse là où l'air est remplacé par un liquide.</p>"
      },
      {
       "titre": "Composants optiques usuels",
       "contenu": "\n<table>\n<thead><tr><th>Composant</th><th>Fonction</th><th>Exemple d'usage</th></tr></thead>\n<tbody>\n<tr><td>Lentille convergente</td><td>Concentrer la lumière, former une image réelle</td><td>Objectif, condenseur</td></tr>\n<tr><td>Lentille divergente</td><td>Étaler la lumière, corriger un défaut</td><td>Groupe de correction d'un zoom</td></tr>\n<tr><td>Doublet achromatique</td><td>Deux lentilles collées qui corrigent les défauts de couleur</td><td>Objectif de qualité</td></tr>\n<tr><td>Miroir plan ou sphérique</td><td>Renvoyer ou focaliser le faisceau</td><td>Renvoi d'angle, télescope</td></tr>\n<tr><td>Prisme</td><td>Dévier le faisceau, redresser une image, disperser les couleurs</td><td>Jumelles, viseur</td></tr>\n<tr><td>Lame séparatrice</td><td>Diviser un faisceau en deux</td><td>Microscope à caméra</td></tr>\n<tr><td>Filtre</td><td>Ne laisser passer qu'une partie du spectre</td><td>Filtre infrarouge devant un capteur d'image</td></tr>\n<tr><td>Fibre optique</td><td>Guider la lumière par réflexion totale</td><td>Endoscope, éclairage, télécommunications</td></tr>\n<tr><td>Diaphragme</td><td>Limiter le faisceau, régler la quantité de lumière</td><td>Objectif photo</td></tr>\n</tbody>\n</table>\n<p>Les surfaces des lentilles reçoivent souvent un <strong>traitement antireflet</strong> : un empilement de couches minces (de l'ordre de 100 nm chacune) déposées sous vide, qui réduit les pertes par réflexion. Ce traitement est fragile : il se raye et s'abîme avec un solvant inadapté.</p>"
      },
      {
       "titre": "Lentilles minces : relations utiles",
       "contenu": "\n<p>Une lentille mince convergente est caractérisée par sa <strong>distance focale</strong> f' (en mm) ou par sa <strong>vergence</strong> V = 1 / f' (en dioptries, δ, avec f' en mètres). Avec les conventions algébriques habituelles (distances mesurées depuis le centre optique O, positives dans le sens de la lumière), la relation de conjugaison s'écrit :</p>\n<p>1 / OA' - 1 / OA = 1 / f'</p>\n<p>où A est l'objet et A' son image. Le <strong>grandissement</strong> vaut γ = A'B' / AB = OA' / OA.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la position d'une image. Une lentille de focale f' = 25 mm forme l'image d'un objet placé à 100 mm devant elle (OA = -100 mm). 1. Écrire la relation : 1 / OA' = 1 / f' + 1 / OA = 1 / 25 - 1 / 100 = 4 / 100 - 1 / 100 = 3 / 100. 2. En déduire OA' = 100 / 3 ≈ 33,3 mm : l'image est réelle, derrière la lentille. 3. Grandissement : γ = 33,3 / (-100) ≈ -0,33 : l'image est renversée et trois fois plus petite. 4. Interprétation : pour une caméra, le capteur d'image doit être placé à 33,3 mm de la lentille ; la mise au point consiste à ajuster cette distance.</div>\n<p>Pour une <strong>loupe</strong>, l'objet est placé entre le foyer et la lentille ; on en voit une image droite et agrandie. Le grossissement commercial d'une loupe vaut G = 250 / f' (f' en mm), 250 mm étant la distance conventionnelle de vision distincte : une loupe de focale 25 mm grossit 10 fois.</p>"
      },
      {
       "titre": "Monter et régler un ensemble optique",
       "contenu": "\n<p>La qualité d'un système optique dépend autant du montage que des composants. Les principales exigences sont :</p>\n<ul>\n<li>le <strong>centrage</strong> : l'axe optique de chaque lentille doit coïncider avec l'axe mécanique du barillet, à quelques micromètres près ; un décentrement crée un flou dissymétrique ;</li>\n<li>l'<strong>inclinaison</strong> (basculement) : une lentille montée de travers dégrade l'image ;</li>\n<li>la <strong>position axiale</strong> : les distances entre lentilles sont définies par des bagues entretoises calibrées ;</li>\n<li>l'<strong>absence de contrainte</strong> : une bague de serrage trop serrée déforme la lentille et crée de la biréfringence (double image) ;</li>\n<li>la <strong>propreté</strong> : aucune poussière, empreinte ou trace de colle sur les surfaces utiles.</li>\n</ul>\n<p>Les lentilles sont tenues dans un <strong>barillet</strong> par une bague filetée, par sertissage du bord du barillet ou par collage avec une colle optique à polymérisation par ultraviolets. Les réglages courants sont la <strong>mise au point</strong> (déplacement axial d'un groupe), le <strong>centrage</strong> d'une lentille sur un banc de centrage, et l'<strong>alignement</strong> d'un faisceau laser à l'aide de vis de réglage et de mires.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne touche jamais une surface optique avec les doigts. Les composants se manipulent par la tranche, avec des gants ou des doigtiers non poudrés, et se nettoient uniquement selon la procédure du fabricant : soufflage à l'air sec filtré d'abord, puis, si nécessaire, papier optique et solvant prescrit, en un seul passage sans frotter.</div>"
      },
      {
       "titre": "Sources et détecteurs de lumière",
       "contenu": "\n<table>\n<thead><tr><th>Composant</th><th>Principe</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>DEL (LED)</td><td>Émission de lumière par une jonction semi-conductrice</td><td>Éclairage, signalisation, émetteur de fourche optique</td></tr>\n<tr><td>Diode laser</td><td>Lumière cohérente, faisceau fin et directif</td><td>Mesure de distance, lecture de code, pointeur, télécommunications</td></tr>\n<tr><td>Photodiode</td><td>Courant proportionnel à l'éclairement reçu</td><td>Mesure de lumière rapide, réception de fibre</td></tr>\n<tr><td>Phototransistor</td><td>Photodiode avec amplification intégrée</td><td>Détection de présence, fourche optique</td></tr>\n<tr><td>Capteur d'image CMOS</td><td>Matrice de millions de photodiodes (pixels)</td><td>Caméra, contrôle par vision</td></tr>\n</tbody>\n</table>\n<p>Une DEL se commande en <strong>courant</strong> : on place une résistance en série pour le limiter. Pour une alimentation de 3,3 V, une DEL rouge de tension directe 2,0 V et un courant souhaité de 10 mA : R = (3,3 - 2,0) / 0,010 = 130 Ω. La <strong>longueur d'onde</strong> λ, en nanomètres, caractérise la couleur : environ 470 nm pour le bleu, 530 nm pour le vert, 630 nm pour le rouge, plus de 780 nm pour l'infrarouge, invisible.</p>"
      },
      {
       "titre": "Sécurité laser",
       "contenu": "\n<p>Les lasers sont classés selon leur dangerosité par la norme NF EN 60825-1 en classes 1, 1M, 2, 2M, 3R, 3B et 4. La classe figure sur une étiquette obligatoire de l'appareil.</p>\n<table>\n<thead><tr><th>Classe</th><th>Risque</th><th>Précautions</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Sans danger en utilisation normale (laser faible ou enfermé)</td><td>Ne pas ouvrir le capotage</td></tr>\n<tr><td>1M, 2M</td><td>Dangereux si observé avec un instrument d'optique (loupe, binoculaire)</td><td>Ne pas regarder le faisceau à travers une optique</td></tr>\n<tr><td>2</td><td>Visible, faible puissance : le réflexe de clignement protège l'œil</td><td>Ne pas fixer le faisceau</td></tr>\n<tr><td>3R</td><td>Risque faible mais réel pour l'œil en vision directe</td><td>Éviter l'exposition directe</td></tr>\n<tr><td>3B</td><td>Dangereux pour l'œil, y compris par réflexion spéculaire</td><td>Lunettes adaptées, zone contrôlée</td></tr>\n<tr><td>4</td><td>Dangereux pour l'œil et la peau, même par réflexion diffuse ; risque d'incendie</td><td>Zone laser fermée, lunettes, personnel formé</td></tr>\n</tbody>\n</table>\n<p>Les machines de soudage ou de marquage laser utilisées en microtechnique contiennent souvent un laser de classe 4 enfermé dans une enceinte qui rend l'ensemble de classe 1 ; les verrouillages de porte ne doivent jamais être neutralisés.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors de l'alignement d'un faisceau en atelier, l'opérateur retire montre, bague et bracelet (surfaces réfléchissantes), porte les lunettes prescrites pour la longueur d'onde utilisée, travaille faisceau sous le niveau des yeux et utilise des cartes de visualisation pour repérer un faisceau infrarouge invisible.</div>"
      }
     ],
     "points_cles": [
      "À la surface entre deux milieux, la lumière est réfléchie et réfractée : n1 × sin i1 = n2 × sin i2.",
      "Relation de conjugaison : 1/OA' - 1/OA = 1/f' ; grandissement γ = OA'/OA.",
      "Une loupe de focale f' (en mm) grossit 250/f' fois.",
      "Le montage optique exige centrage, inclinaison maîtrisée, position axiale, absence de contrainte et propreté.",
      "Une surface optique ne se touche jamais et se nettoie selon la procédure du fabricant.",
      "Une DEL se commande en courant, avec une résistance série R = (U - Ud) / I.",
      "Les lasers sont classés de 1 à 4 selon la norme NF EN 60825-1.",
      "Les verrouillages d'une enceinte laser ne doivent jamais être neutralisés."
     ],
     "lexique": [
      {
       "terme": "Indice de réfraction",
       "def": "Grandeur sans unité qui caractérise la déviation de la lumière en entrant dans un milieu."
      },
      {
       "terme": "Distance focale",
       "def": "Distance entre le centre optique d'une lentille et son foyer image."
      },
      {
       "terme": "Vergence",
       "def": "Inverse de la distance focale exprimée en mètres, en dioptries."
      },
      {
       "terme": "Grandissement",
       "def": "Rapport entre la taille de l'image et la taille de l'objet."
      },
      {
       "terme": "Barillet",
       "def": "Pièce mécanique tubulaire qui maintient et positionne les lentilles."
      },
      {
       "terme": "Centrage",
       "def": "Coïncidence de l'axe optique d'une lentille avec l'axe mécanique de sa monture."
      },
      {
       "terme": "Traitement antireflet",
       "def": "Empilement de couches minces qui réduit la réflexion à la surface d'un composant optique."
      },
      {
       "terme": "Photodiode",
       "def": "Composant semi-conducteur qui produit un courant proportionnel à la lumière reçue."
      },
      {
       "terme": "Longueur d'onde",
       "def": "Grandeur, exprimée en nanomètres, qui caractérise la couleur d'un rayonnement lumineux."
      },
      {
       "terme": "Classe laser",
       "def": "Catégorie de dangerosité d'un laser définie par la norme NF EN 60825-1."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Matériaux, fabrication et assemblage",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmic-materiaux-micro",
     "titre": "Matériaux et traitements de surface des produits microtechniques",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Citer les matériaux métalliques propres aux microtechniques et justifier leur emploi.",
      "Décrire les matériaux non métalliques utilisés : céramiques, rubis, silicium, polymères techniques.",
      "Expliquer le rôle des traitements de surface : protection, frottement, aspect, conductivité.",
      "Lire une désignation normalisée de matériau ou de traitement sur un dessin ou une nomenclature.",
      "Identifier les contraintes de compatibilité : corrosion galvanique, biocompatibilité, magnétisme."
     ],
     "sections": [
      {
       "titre": "Des exigences particulières",
       "contenu": "\n<p>Le cours de seconde a présenté les grandes familles de matériaux (aciers, alliages d'aluminium et de cuivre, polymères) et leurs traitements thermiques. En microtechnique, le choix d'un matériau répond à des exigences supplémentaires :</p>\n<ul>\n<li>l'<strong>usinabilité</strong> à très petite échelle : le matériau doit donner des copeaux courts et des arêtes nettes sans bavure ;</li>\n<li>la <strong>stabilité dimensionnelle</strong> : pas de déformation dans le temps, faible dilatation ;</li>\n<li>la <strong>tenue à la corrosion</strong>, y compris au contact de la peau (sueur) ou des liquides biologiques ;</li>\n<li>des propriétés fonctionnelles : <strong>amagnétisme</strong>, <strong>élasticité</strong> pour les ressorts, <strong>conductivité</strong> pour les contacts, <strong>biocompatibilité</strong> pour le médical ;</li>\n<li>l'<strong>aspect</strong> pour les pièces visibles (horlogerie, bijouterie, instruments).</li>\n</ul>\n<p>La <strong>désignation normalisée</strong> d'un matériau figure dans la nomenclature ou le cartouche ; savoir la lire permet de retrouver ses propriétés dans une fiche technique et de choisir les outils, les lubrifiants et les précautions adaptés.</p>"
      },
      {
       "titre": "Les matériaux métalliques",
       "contenu": "\n<table>\n<thead><tr><th>Matériau</th><th>Exemple de désignation</th><th>Propriétés clés</th><th>Emplois</th></tr></thead>\n<tbody>\n<tr><td>Laiton de décolletage</td><td>CuZn39Pb3 (CW614N)</td><td>Très bonne usinabilité grâce au plomb, bonne conductivité, facile à dorer</td><td>Platines et ponts d'horlogerie, connecteurs, axes peu chargés</td></tr>\n<tr><td>Maillechort</td><td>CuNi18Zn20</td><td>Aspect argenté, bonne tenue à la corrosion, amagnétique</td><td>Ponts, pièces décoratives, ressorts de contact</td></tr>\n<tr><td>Cuivre-béryllium</td><td>CuBe2</td><td>Après durcissement structural, très élastique et conducteur</td><td>Ressorts de contact, membranes, connecteurs</td></tr>\n<tr><td>Acier au carbone trempé</td><td>C100 et aciers de décolletage</td><td>Dureté élevée après trempe, polissable</td><td>Pivots, axes, pignons</td></tr>\n<tr><td>Acier inoxydable austénitique</td><td>X2CrNiMo17-12-2 (316L)</td><td>Tenue à la corrosion, peu magnétique, biocompatibilité reconnue pour certains usages</td><td>Boîtes de montre, instruments chirurgicaux</td></tr>\n<tr><td>Acier inoxydable martensitique</td><td>X20Cr13</td><td>Durcissable par trempe, magnétique</td><td>Outils, lames, axes inoxydables durs</td></tr>\n<tr><td>Titane et alliages</td><td>Ti grade 2, Ti-6Al-4V (grade 5)</td><td>Léger, très résistant à la corrosion, biocompatible</td><td>Implants, boîtes de montre, pièces aéronautiques</td></tr>\n<tr><td>Alliages de métaux précieux</td><td>Or 18 carats (750 millièmes)</td><td>Aspect, inaltérabilité</td><td>Boîtes, cadrans, contacts électriques</td></tr>\n</tbody>\n</table>\n<p>Pour les ressorts spiraux d'horlogerie, on utilise des alliages spéciaux à base de fer-nickel dont le module d'élasticité varie très peu avec la température, ce qui stabilise la marche de la montre ; certaines manufactures emploient aujourd'hui des spiraux en silicium.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le laiton au plomb se prête très bien à l'usinage, mais la réglementation européenne sur les substances (RoHS pour les équipements électriques et électroniques, REACH en général) limite les teneurs en plomb dans certains produits et prévoit des exemptions à durée limitée. Le choix d'un laiton « sans plomb » doit être vérifié dans la documentation du donneur d'ordre ; ce n'est pas au monteur de substituer un matériau.</div>\n<p>Pour lire une désignation normalisée d'alliage, on retient quelques règles. Les alliages de cuivre se désignent par leurs éléments principaux suivis de leur teneur en pourcentage : CuZn39Pb3 contient environ 39 % de zinc et 3 % de plomb, le reste étant du cuivre ; ils ont aussi un code numérique européen (CW614N). Les aciers inoxydables commencent par la lettre X, suivie de la teneur en carbone en centièmes de pour cent, puis des symboles et teneurs des principaux éléments d'alliage : X2CrNiMo17-12-2 contient 0,02 % de carbone, 17 % de chrome, 12 % de nickel et 2 % de molybdène. Dans l'industrie, on emploie aussi des appellations commerciales ou américaines (316L, 304) ; la nomenclature les rapproche souvent de la désignation européenne.</p>"
      },
      {
       "titre": "Céramiques, cristaux et silicium",
       "contenu": "\n<ul>\n<li><strong>Rubis et saphir synthétiques</strong> : formes cristallines de l'oxyde d'aluminium (corindon), d'une dureté de 9 sur l'échelle de Mohs. Le rubis, coloré par du chrome, sert aux pierres d'horlogerie et aux buses ; le saphir incolore aux glaces de montre inrayables et aux hublots optiques.</li>\n<li><strong>Céramiques techniques</strong> (alumine, zircone) : très dures, isolantes, inertes chimiquement ; utilisées pour des lunettes de montre, des guides-fils, des billes de roulements hybrides, des substrats de circuits.</li>\n<li><strong>Silicium monocristallin</strong> : matériau de base des MEMS et des circuits intégrés ; il est élastique jusqu'à la rupture (pas de déformation plastique), léger et amagnétique, mais fragile au choc.</li>\n<li><strong>Verres optiques</strong> : verres de compositions variées (crown, flint) choisis pour leur indice et leur dispersion.</li>\n</ul>\n<p>Ces matériaux ne se travaillent pas comme les métaux : ils s'usinent par meulage diamant, gravure chimique ou laser, et se montent par chassage contrôlé, sertissage ou collage, jamais par déformation.</p>"
      },
      {
       "titre": "Les polymères techniques",
       "contenu": "\n<table>\n<thead><tr><th>Polymère</th><th>Sigle</th><th>Atouts</th><th>Emplois</th></tr></thead>\n<tbody>\n<tr><td>Polyoxyméthylène</td><td>POM</td><td>Bon frottement, stabilité dimensionnelle</td><td>Roues dentées injectées, cames, glissières</td></tr>\n<tr><td>Polycarbonate</td><td>PC</td><td>Transparent, résistant au choc</td><td>Boîtiers, fenêtres d'afficheurs</td></tr>\n<tr><td>Polyamide chargé</td><td>PA66 GF30</td><td>Rigidité, résistance mécanique</td><td>Supports, boîtiers, corps de connecteurs</td></tr>\n<tr><td>Polyétheréthercétone</td><td>PEEK</td><td>Haute température, stérilisable, biocompatible selon grade</td><td>Pièces médicales, isolants</td></tr>\n<tr><td>Polytétrafluoroéthylène</td><td>PTFE</td><td>Frottement très faible, inerte</td><td>Bagues de glissement, isolants</td></tr>\n<tr><td>Polymère à cristaux liquides</td><td>LCP</td><td>Fluidité permettant d'injecter des parois très fines</td><td>Connecteurs miniatures</td></tr>\n</tbody>\n</table>\n<p>Les polymères ont une dilatation thermique dix fois plus forte que les aciers et absorbent parfois l'humidité (cas du polyamide) : une roue en polyamide peut grossir de plusieurs dixièmes de pour cent en atmosphère humide. Le concepteur prévoit des jeux adaptés ; le monteur, lui, respecte les conditions de stockage et de conditionnement des pièces.</p>"
      },
      {
       "titre": "Traitements et revêtements de surface",
       "contenu": "\n<p>Un <strong>traitement de surface</strong> modifie la surface d'une pièce sans changer le matériau de cœur. En microtechnique, les épaisseurs se comptent en micromètres et doivent être prises en compte dans les cotes.</p>\n<table>\n<thead><tr><th>Traitement</th><th>Principe</th><th>Épaisseur typique</th><th>But</th></tr></thead>\n<tbody>\n<tr><td>Dépôt électrolytique (galvanoplastie)</td><td>Dépôt d'un métal (nickel, or, rhodium, argent) par électrolyse</td><td>0,2 à 10 µm</td><td>Protection, aspect, conductivité des contacts</td></tr>\n<tr><td>Nickel chimique</td><td>Dépôt nickel-phosphore sans courant, épaisseur régulière</td><td>2 à 25 µm</td><td>Dureté, corrosion, pièces de forme complexe</td></tr>\n<tr><td>Anodisation de l'aluminium</td><td>Oxydation électrolytique de la surface, colorable</td><td>5 à 25 µm</td><td>Corrosion, aspect, isolation</td></tr>\n<tr><td>Dépôt sous vide PVD</td><td>Vaporisation d'un matériau (nitrure de titane, carbone amorphe) déposé sur la pièce</td><td>1 à 5 µm</td><td>Dureté, frottement, couleur</td></tr>\n<tr><td>Passivation de l'inox</td><td>Traitement chimique renforçant la couche d'oxyde de chrome</td><td>Quelques nanomètres</td><td>Corrosion, exigence médicale</td></tr>\n<tr><td>Décors horlogers</td><td>Perlage, côtes, anglage, polissage</td><td>Sans apport</td><td>Aspect, ébavurage</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> tenir compte d'un revêtement dans une cote. Un axe doit mesurer 1,000 mm de diamètre après un dépôt de nickel chimique de 5 µm d'épaisseur. Le dépôt s'ajoute sur tout le pourtour, donc deux fois sur le diamètre : 2 × 0,005 = 0,010 mm. L'axe doit être usiné à 1,000 - 0,010 = 0,990 mm. Le dessin de définition précise toujours si la cote s'entend avant ou après traitement : c'est la première chose à vérifier.</div>"
      },
      {
       "titre": "Compatibilités à surveiller",
       "contenu": "\n<p>Plusieurs incompatibilités sont fréquentes dans les produits microtechniques :</p>\n<ul>\n<li><strong>Corrosion galvanique</strong> : deux métaux de potentiels électrochimiques différents, en contact en présence d'humidité, forment une pile ; le moins noble se corrode. Exemple : vis en acier inoxydable dans un boîtier en aluminium non protégé.</li>\n<li><strong>Magnétisme</strong> : un aimant de haut-parleur ou de fermoir peut aimanter un spiral en acier et dérégler une montre ; les pièces proches des capteurs magnétiques doivent être amagnétiques.</li>\n<li><strong>Biocompatibilité</strong> : pour un dispositif médical, seuls les matériaux évalués selon la série de normes ISO 10993 et prévus dans le dossier du fabricant peuvent être utilisés ; une simple graisse non qualifiée peut rendre un lot non conforme.</li>\n<li><strong>Allergie au nickel</strong> : la réglementation européenne limite la libération de nickel des objets en contact prolongé avec la peau (boîtes de montre, bracelets).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les pièces traitées (dorées, rhodiées, PVD) se manipulent avec des doigtiers et se stockent dans des boîtes à compartiments ou des blisters. Une rayure sur un revêtement de 0,5 µm ne se reprend pas : la pièce part au rebut, ce qui coûte cher sur des séries de pièces de luxe.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en microtechnique, le matériau et son traitement font partie de la définition de la pièce au même titre que ses cotes. Une substitution, même apparemment équivalente, doit toujours être validée par le bureau d'études.</div>"
      }
     ],
     "points_cles": [
      "Usinabilité, stabilité, corrosion, amagnétisme, élasticité et biocompatibilité guident le choix des matériaux.",
      "Le laiton CuZn39Pb3 est le matériau de base du décolletage et des platines d'horlogerie.",
      "Le cuivre-béryllium est choisi pour son élasticité et sa conductivité dans les contacts.",
      "Rubis et saphir synthétiques sont du corindon de dureté 9 sur l'échelle de Mohs.",
      "Les polymères se dilatent beaucoup plus que les métaux et peuvent absorber l'humidité.",
      "L'épaisseur d'un revêtement compte deux fois sur un diamètre.",
      "Deux métaux différents en contact humide peuvent provoquer une corrosion galvanique.",
      "Aucune substitution de matériau ou de lubrifiant sans validation du bureau d'études."
     ],
     "lexique": [
      {
       "terme": "Usinabilité",
       "def": "Aptitude d'un matériau à être usiné facilement, avec des copeaux courts et un bon état de surface."
      },
      {
       "terme": "Maillechort",
       "def": "Alliage de cuivre, de nickel et de zinc, d'aspect argenté."
      },
      {
       "terme": "Durcissement structural",
       "def": "Traitement thermique qui durcit certains alliages par précipitation de fines particules."
      },
      {
       "terme": "Corindon",
       "def": "Oxyde d'aluminium cristallisé dont le rubis et le saphir sont des variétés."
      },
      {
       "terme": "Galvanoplastie",
       "def": "Dépôt d'un métal sur une pièce par électrolyse."
      },
      {
       "terme": "PVD",
       "def": "Dépôt physique en phase vapeur : revêtement mince réalisé sous vide."
      },
      {
       "terme": "Anodisation",
       "def": "Oxydation électrolytique contrôlée de la surface de l'aluminium."
      },
      {
       "terme": "Corrosion galvanique",
       "def": "Corrosion du métal le moins noble de deux métaux en contact en présence d'un électrolyte."
      },
      {
       "terme": "Biocompatibilité",
       "def": "Aptitude d'un matériau à être en contact avec le corps humain sans effet nocif."
      },
      {
       "terme": "Amagnétique",
       "def": "Qui n'est pas attiré par un aimant et ne s'aimante pas."
      }
     ]
    },
    {
     "id": "bmic-fabrication-micromecanique",
     "titre": "Procédés de fabrication micromécanique",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Décrire les procédés de fabrication de pièces micromécaniques et leurs domaines d'emploi.",
      "Expliquer le principe du décolletage et du micro-usinage sur machine à commande numérique.",
      "Décrire l'électroérosion, la découpe laser, l'étampage et la micro-injection.",
      "Situer les procédés issus de la microélectronique et la fabrication additive.",
      "Choisir un procédé adapté à une pièce, à une quantité et à une précision données."
     ],
     "sections": [
      {
       "titre": "Fabriquer à l'unité ou en très petite série",
       "contenu": "\n<p>Le technicien en microtechniques n'est pas un spécialiste de la production en grande série : le référentiel lui confie des <strong>fabrications micromécaniques particulières</strong>, c'est-à-dire des pièces à l'unité, des pièces de rechange, des éléments de maquette ou de prototype, des outillages simples. Il doit cependant connaître l'ensemble des procédés pour comprendre l'origine des pièces qu'il assemble, interpréter leurs défauts et dialoguer avec les services de production.</p>\n<p>Le cours de seconde a présenté les procédés de la mécanique générale (tournage, fraisage, perçage, découpage, pliage, soudage). Ce chapitre se concentre sur ce qui change à petite échelle : des outils de quelques dixièmes de millimètre, des fréquences de rotation très élevées, des efforts minuscules et des tolérances de quelques micromètres.</p>\n<table>\n<thead><tr><th>Quantité</th><th>Procédés privilégiés</th></tr></thead>\n<tbody>\n<tr><td>Unité, prototype</td><td>Micro-usinage commande numérique, électroérosion à fil, fabrication additive, travail manuel d'horloger</td></tr>\n<tr><td>Petite et moyenne série</td><td>Décolletage, électroérosion, découpe laser</td></tr>\n<tr><td>Grande série</td><td>Décolletage multibroche, étampage, micro-injection, procédés de la microélectronique</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Le décolletage",
       "contenu": "\n<p>Le <strong>décolletage</strong> est un tournage automatique de pièces de révolution à partir d'une <strong>barre</strong> (de 0,5 à quelques dizaines de millimètres de diamètre). Il produit des axes, vis, pivots, douilles, contacts de connecteurs, à des cadences de quelques secondes par pièce.</p>\n<p>Le <strong>tour à poupée mobile</strong> (dit de type suisse) est la machine de référence des pièces fines et longues : la barre avance à travers un <strong>canon de guidage</strong> placé tout près de l'outil, si bien que la matière est toujours soutenue au point de coupe. On obtient des pièces longues et fines (rapport longueur/diamètre supérieur à 10) sans flexion. Les machines actuelles à commande numérique comportent une broche principale, une contre-broche qui reprend la pièce pour usiner l'arrière, et des outils tournants qui réalisent fraisages et perçages transversaux.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un tour à poupée mobile, c'est la barre qui se déplace axialement à travers le canon, alors que l'outil reste au voisinage du canon. Cette disposition explique la précision obtenue sur des pièces longues de très petit diamètre.</div>\n<p>Les pièces décolletées présentent des défauts caractéristiques à connaître au contrôle et au montage : <strong>bavure</strong> au tronçonnage, <strong>téton</strong> de séparation au centre de la face arrière, rayures d'outil, copeaux restés dans les perçages borgnes. Les pièces sont ensuite <strong>dégraissées</strong>, <strong>ébavurées</strong> (tonneau, sablage, électrochimie) et éventuellement traitées.</p>"
      },
      {
       "titre": "Le micro-usinage par enlèvement de matière",
       "contenu": "\n<p>Le <strong>micro-usinage</strong> regroupe le micro-fraisage et le micro-perçage sur centres d'usinage de haute précision. Les outils en carbure monobloc descendent à des diamètres de 0,1 mm, voire moins. Pour obtenir une vitesse de coupe correcte avec un si petit diamètre, il faut une fréquence de rotation très élevée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la fréquence de rotation d'une micro-fraise. La vitesse de coupe recommandée par le fabricant pour une fraise carbure dans le laiton est Vc = 100 m/min ; le diamètre de l'outil est D = 0,5 mm. 1. Appliquer N = 1 000 × Vc / (π × D). 2. N = 1 000 × 100 / (3,14 × 0,5) ≈ 63 700 tr/min. 3. Comparer à la broche disponible : une broche de 60 000 tr/min maximum impose de réduire légèrement Vc. 4. Calculer l'avance par minute : avec 2 dents et une avance de 2 µm par dent, Vf = N × z × fz = 60 000 × 2 × 0,002 = 240 mm/min.</div>\n<p>À cette échelle, l'épaisseur du copeau devient comparable au <strong>rayon d'arête</strong> de l'outil (quelques micromètres) : si l'avance par dent est trop faible, l'outil frotte au lieu de couper et s'use très vite ; si elle est trop forte, il casse. Les réglages se font à partir des abaques du fabricant d'outils, avec des essais.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une micro-fraise de 0,2 mm casse sans bruit ni signe visible à l'œil nu. Avant chaque reprise, on contrôle l'outil à la loupe ou au système de mesure laser de la machine ; un outil cassé non détecté produit une série de pièces non conformes.</div>"
      },
      {
       "titre": "Électroérosion, laser et procédés sans contact",
       "contenu": "\n<ul>\n<li><strong>Électroérosion à fil</strong> : un fil de laiton ou de molybdène de 0,02 à 0,3 mm de diamètre, parcouru par des décharges électriques, découpe une pièce conductrice plongée dans de l'eau désionisée. Aucun effort de coupe, angles vifs intérieurs limités seulement par le rayon du fil, matériaux trempés usinables. Procédé roi des poinçons, matrices, guidages flexibles et pièces plates d'horlogerie.</li>\n<li><strong>Électroérosion par enfonçage</strong> : une électrode de forme reproduit son empreinte dans la pièce (moules de micro-injection).</li>\n<li><strong>Découpe et ablation laser</strong> : un laser à impulsions courtes ou ultracourtes découpe des tôles minces, perce des micro-trous, grave et marque sans contact. Les lasers femtoseconde limitent la zone affectée thermiquement.</li>\n<li><strong>Usinage électrochimique</strong> : dissolution contrôlée du métal, sans usure de l'outil, utilisée pour l'ébavurage fin et certaines formes.</li>\n</ul>\n<p>Ces procédés ne créent pas d'effort mécanique sur la pièce, ce qui est essentiel pour les pièces très fines qui se déformeraient sous un outil coupant.</p>"
      },
      {
       "titre": "Procédés de grande série : étampage et micro-injection",
       "contenu": "\n<p>L'<strong>étampage</strong> (ou découpage fin) découpe des pièces plates dans une bande de métal mince à l'aide d'un outil à suivre : la bande avance pas à pas et subit successivement perçages, découpages, pliages et frappes. On produit ainsi des ponts d'horlogerie, des contacts, des grilles de connexion, à des centaines de coups par minute. La qualité dépend du <strong>jeu poinçon-matrice</strong>, de l'ordre de quelques pour cent de l'épaisseur de la tôle.</p>\n<p>La <strong>micro-injection</strong> plastique produit des roues dentées, des boîtiers de connecteurs et des pièces médicales de quelques milligrammes. Le polymère fondu est injecté sous haute pression dans un moule de précision. Les défauts typiques sont les <strong>retassures</strong> (creux dus au retrait), les <strong>bavures</strong> au plan de joint, les <strong>manques</strong> de matière et les <strong>marques d'éjecteurs</strong>.</p>\n<p>Le <strong>moulage par injection de poudre métallique</strong> (MIM) injecte un mélange de poudre métallique et de liant, puis élimine le liant et fritte la pièce : on obtient des pièces métalliques complexes en grande série, avec un retrait d'environ 15 à 20 % à maîtriser.</p>"
      },
      {
       "titre": "Procédés de la microélectronique et fabrication additive",
       "contenu": "\n<p>Les MEMS et certaines pièces horlogères sont fabriqués par les techniques de la microélectronique :</p>\n<ul>\n<li>la <strong>photolithographie</strong> : une résine photosensible est insolée à travers un masque, puis développée ; elle protège les zones à conserver ;</li>\n<li>la <strong>gravure</strong> sèche (par plasma, comme la gravure ionique réactive profonde, DRIE) ou humide, qui creuse le silicium là où la résine a été retirée ;</li>\n<li>le procédé <strong>LIGA</strong> et ses variantes UV, qui combinent lithographie et électroformage pour obtenir des pièces métalliques (nickel, or) aux flancs parfaitement droits : roues d'échappement, micro-engrenages.</li>\n</ul>\n<p>La <strong>fabrication additive</strong> construit une pièce couche par couche. Pour les microtechniques, on retient surtout la stéréolithographie et les procédés à micro-gouttes de résine (pièces polymères très fines pour maquettes et prototypes) et la fusion laser sur lit de poudre métallique (implants, pièces de géométrie complexe). La résolution atteint quelques dizaines de micromètres, ce qui impose souvent une reprise d'usinage des surfaces fonctionnelles.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour un prototype d'objectif, le technicien imprime d'abord le barillet en résine pour valider l'assemblage et l'encombrement, puis usine les pièces définitives en aluminium. La maquette imprimée sert aussi à rédiger la gamme de montage avant l'arrivée des vraies pièces.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le choix d'un procédé dépend de la forme de la pièce, du matériau, de la quantité, de la précision et du coût. Une même pièce peut changer de procédé entre le prototype et la série.</div>"
      }
     ],
     "points_cles": [
      "Le technicien réalise surtout des fabrications à l'unité ou en très petite série.",
      "Le décolletage sur tour à poupée mobile produit des pièces longues et fines grâce au canon de guidage.",
      "N = 1 000 × Vc / (π × D) impose des fréquences de rotation très élevées pour les micro-outils.",
      "L'électroérosion à fil découpe sans effort des matériaux conducteurs, même trempés.",
      "Le laser découpe, perce et marque sans contact.",
      "Étampage et micro-injection sont les procédés de grande série des pièces plates et plastiques.",
      "Photolithographie, gravure et LIGA fabriquent MEMS et micro-engrenages métalliques.",
      "La fabrication additive sert aux maquettes, prototypes et pièces complexes."
     ],
     "lexique": [
      {
       "terme": "Décolletage",
       "def": "Tournage automatique de pièces de révolution à partir d'une barre."
      },
      {
       "terme": "Tour à poupée mobile",
       "def": "Tour dans lequel la barre avance à travers un canon de guidage proche de l'outil."
      },
      {
       "terme": "Canon de guidage",
       "def": "Bague qui soutient la barre au voisinage immédiat de l'outil."
      },
      {
       "terme": "Électroérosion",
       "def": "Enlèvement de matière par décharges électriques entre une électrode et la pièce."
      },
      {
       "terme": "Étampage",
       "def": "Découpage et formage de pièces minces à la presse dans un outil à suivre."
      },
      {
       "terme": "Micro-injection",
       "def": "Moulage par injection de pièces plastiques de très petite masse."
      },
      {
       "terme": "Photolithographie",
       "def": "Transfert d'un motif sur une résine photosensible par insolation à travers un masque."
      },
      {
       "terme": "LIGA",
       "def": "Procédé associant lithographie et électroformage pour fabriquer des micro-pièces métalliques."
      },
      {
       "terme": "Fabrication additive",
       "def": "Fabrication d'une pièce par ajout de matière couche par couche."
      },
      {
       "terme": "Retassure",
       "def": "Creux en surface d'une pièce moulée dû au retrait de la matière."
      }
     ]
    },
    {
     "id": "bmic-assemblage-montage",
     "titre": "Techniques d'assemblage et de montage microtechniques",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Choisir et utiliser l'outillage de montage microtechnique.",
      "Décrire les assemblages par chassage, sertissage, vissage miniature, collage, brasage et soudage laser.",
      "Calculer un serrage d'ajustement et appliquer un couple de vissage prescrit.",
      "Organiser un montage selon une gamme et en assurer l'autocontrôle.",
      "Repérer les défauts de montage typiques et leurs causes."
     ],
     "sections": [
      {
       "titre": "Préparer les moyens d'assemblage",
       "contenu": "\n<p>La première tâche de l'activité d'assemblage est de <strong>préparer les moyens</strong> : documents, pièces, outillages, produits et poste. Un montage microtechnique se prépare comme une intervention chirurgicale : tout est prêt et vérifié avant le premier geste.</p>\n<ul>\n<li><strong>Documents</strong> : ordre de fabrication, gamme ou fiche d'instruction à l'indice en vigueur, dessin d'ensemble, nomenclature, fiches de contrôle.</li>\n<li><strong>Pièces</strong> : vérification des références, des quantités et du statut (pièces contrôlées, libérées par la qualité), de la propreté.</li>\n<li><strong>Outillages</strong> : présence, état, validité d'étalonnage des outils de mesure et des tournevis dynamométriques.</li>\n<li><strong>Produits</strong> : lubrifiants, colles, solvants prescrits, avec leur date de péremption.</li>\n<li><strong>Poste</strong> : propreté, protection contre les décharges électrostatiques, éclairage, binoculaire réglée.</li>\n</ul>\n<p>L'outillage courant du monteur comprend : <strong>brucelles</strong> (pinces fines en acier inoxydable amagnétique, en laiton ou à embouts plastiques), tournevis d'horloger à lames interchangeables, <strong>potence</strong> à chasser et outils à sertir, porte-pièces et <strong>montages</strong> de positionnement, huiliers, presse à levier ou presse électrique avec contrôle de force, loupe et binoculaire.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une brucelle à pointes désalignées fait « sauter » les pièces, qui sont souvent perdues. Les pointes s'entretiennent à la pierre fine, et on ne les utilise jamais comme tournevis ou levier. Une brucelle en acier magnétisée attire les petites pièces en acier : on la démagnétise régulièrement.</div>"
      },
      {
       "titre": "Assemblages par déformation : chassage et sertissage",
       "contenu": "\n<p>Le <strong>chassage</strong> consiste à emmancher en force une pièce dans une autre grâce à un <strong>ajustement serré</strong> : pierre d'horlogerie dans une platine, pignon sur un axe, goupille dans un trou. Le serrage, différence entre le diamètre de l'arbre et celui de l'alésage, crée l'effort de maintien.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le serrage d'un chassage. Alésage de la platine : 0,800 mm, tolérance +0,004 / 0 ; diamètre de la pierre : 0,810 mm, tolérance 0 / -0,003. 1. Serrage maximal : arbre maxi - alésage mini = 0,810 - 0,800 = 0,010 mm = 10 µm. 2. Serrage minimal : arbre mini - alésage maxi = 0,807 - 0,804 = 0,003 mm = 3 µm. 3. Le serrage est compris entre 3 et 10 µm : l'assemblage est toujours serré. 4. Au montage, on chasse avec la potence munie d'un tasseau plat, perpendiculairement, sans à-coup, et on contrôle la hauteur de la pierre par rapport à la platine.</div>\n<p>Le <strong>sertissage</strong> déforme une partie d'une pièce (une lèvre, un bord) pour en emprisonner une autre : verre de montre ou lentille dans un barillet, rivet, contact électrique sur un fil. Il est rapide, ne demande aucun produit, mais n'est pas démontable sans destruction.</p>\n<p>Le <strong>rivetage</strong> et le <strong>bouterollage</strong> (écrasement de l'extrémité d'un axe) sont des variantes utilisées pour fixer des axes sur des platines.</p>"
      },
      {
       "titre": "Vissage miniature",
       "contenu": "\n<p>Les vis miniatures (filetages M1 à M2, et filetages horlogers encore plus fins) se serrent avec un <strong>couple</strong> très faible, exprimé en centinewtons-mètres (cN·m) : 1 cN·m = 0,01 N·m. Un serrage excessif arrache le filetage ou casse la vis ; un serrage insuffisant laisse la vis se desserrer sous les vibrations.</p>\n<ul>\n<li>On utilise des <strong>tournevis dynamométriques</strong> ou des visseuses électriques à couple réglé, étalonnés périodiquement.</li>\n<li>Le couple prescrit figure sur la gamme ; il dépend du diamètre, des matériaux et de la présence d'un frein filet.</li>\n<li>Pour les assemblages à plusieurs vis (couvercle, pont), on serre en <strong>croix</strong> et en deux passes pour plaquer la pièce uniformément.</li>\n<li>Un <strong>frein filet</strong> (adhésif anaérobie) ou une goutte de vernis témoin peuvent être prescrits ; le vernis témoin révèle aussi un démontage non autorisé.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les visseuses électriques de production enregistrent pour chaque vis le couple et l'angle atteints ; une vis qui n'atteint pas le couple dans la fenêtre d'angle attendue (vis absente, taraudage abîmé, pièce mal positionnée) déclenche une alarme et le produit est écarté.</div>"
      },
      {
       "titre": "Collage",
       "contenu": "\n<p>Le <strong>collage</strong> est très utilisé en microtechnique : il assemble des matériaux différents (verre sur métal, aimant sur acier), sans échauffement ni déformation, et assure parfois l'étanchéité. Les adhésifs courants sont :</p>\n<table>\n<thead><tr><th>Adhésif</th><th>Durcissement</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Cyanoacrylate</td><td>Quelques secondes, au contact de l'humidité</td><td>Petites pièces, fixation rapide</td></tr>\n<tr><td>Époxyde bicomposant</td><td>Minutes à heures, accéléré par la chaleur</td><td>Assemblages résistants, aimants, structures</td></tr>\n<tr><td>Colle à polymérisation UV</td><td>Quelques secondes sous lampe UV</td><td>Optique, positionnement puis fixation</td></tr>\n<tr><td>Adhésif anaérobie</td><td>En absence d'air entre pièces métalliques</td><td>Freinage de vis, collage de bagues</td></tr>\n<tr><td>Silicone</td><td>À l'humidité, lent</td><td>Étanchéité, souplesse</td></tr>\n</tbody>\n</table>\n<p>La réussite d'un collage dépend de la <strong>préparation de surface</strong> (dégraissage, parfois activation), du <strong>dosage</strong> (une quantité minuscule, déposée par seringue ou aiguille), du <strong>temps ouvert</strong> (durée pendant laquelle on peut encore positionner) et des conditions de <strong>polymérisation</strong> (temps, température, intensité UV).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le cyanoacrylate dégage des vapeurs qui se redéposent sous forme de voile blanc sur les surfaces voisines (effet de « blooming ») : il est proscrit à proximité des optiques et des contacts. Une colle époxyde mal mélangée ne durcira jamais complètement, même après des jours.</div>"
      },
      {
       "titre": "Brasage et soudage laser",
       "contenu": "\n<p>Le <strong>brasage tendre</strong> assemble des pièces par un métal d'apport (alliage étain-argent-cuivre sans plomb, fondant vers 217 à 220 °C) qui fond à une température inférieure à celle des pièces. C'est la technique de liaison des composants électroniques. En production, les cartes sont brasées par refusion en four ; le technicien brase à la main pour la reprise, la réparation ou le prototype, avec une station de brasage à température régulée, du fil d'apport avec flux et, pour les CMS, une pane fine ou de l'air chaud.</p>\n<p>Une brasure correcte est lisse, brillante ou légèrement satinée (alliages sans plomb), avec un ménisque concave qui mouille bien la pastille et la patte du composant. Les défauts à reconnaître sont : brasure sèche ou granuleuse (soudure froide), pont entre deux pattes, manque de mouillage, composant soulevé (effet « pierre tombale »), billes d'étain.</p>\n<p>Le <strong>soudage laser</strong> fond localement les métaux par un faisceau focalisé, avec une zone affectée thermiquement très réduite. Il assemble des boîtiers de capteurs étanches, des ressorts, des fils fins, des implants. Il se pratique sur une machine dédiée, en enceinte de classe 1.</p>\n<p>Pour une reprise de brasure manuelle sur une carte, l'ordre des gestes compte : protéger la zone de travail contre les décharges électrostatiques, régler la température de la panne selon l'alliage (souvent entre 320 et 380 °C pour les brasures sans plomb, en suivant la fiche du fabricant de la station), nettoyer la panne sur l'éponge ou la laine de laiton, appliquer un peu de flux, chauffer simultanément la pastille et la patte, apporter le fil d'apport sur le joint et non sur la panne, retirer le fil puis la panne, laisser refroidir sans bouger. On termine par l'inspection sous binoculaire et, si la procédure l'exige, le nettoyage des résidus de flux. Un chauffage trop long décolle les pastilles du circuit imprimé et peut détruire le composant.</p>"
      },
      {
       "titre": "Conduire et autocontrôler un montage",
       "contenu": "\n<p>Le montage suit la <strong>gamme de montage</strong> ou la fiche d'instruction : ordre des opérations, outillages, produits, couples, réglages et points de contrôle. L'opérateur pratique l'<strong>autocontrôle</strong> : il vérifie lui-même son travail aux étapes prévues et enregistre les résultats.</p>\n<table>\n<thead><tr><th>Défaut constaté</th><th>Causes possibles</th></tr></thead>\n<tbody>\n<tr><td>Rotation dure après montage</td><td>Ébat nul, pierre mal chassée, lubrifiant en excès, poussière</td></tr>\n<tr><td>Jeu excessif</td><td>Pièce manquante (rondelle, entretoise), pièce non conforme</td></tr>\n<tr><td>Vis qui « tourne fou »</td><td>Filetage arraché par serrage excessif</td></tr>\n<tr><td>Pièce marquée ou rayée</td><td>Outil inadapté, brucelle abîmée, absence de protection</td></tr>\n<tr><td>Fonctionnement intermittent</td><td>Brasure défectueuse, connecteur mal enfiché, fil pincé</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> tout montage microtechnique se termine par un contrôle en sortie de poste. Une anomalie détectée au poste coûte quelques minutes ; détectée au test final, elle coûte un démontage ; détectée chez le client, elle coûte un retour, une réparation et une perte de confiance.</div>"
      }
     ],
     "points_cles": [
      "Documents, pièces, outillages, produits et poste sont préparés et vérifiés avant le montage.",
      "Le serrage d'un chassage se calcule entre le serrage minimal et le serrage maximal.",
      "Le sertissage déforme une pièce pour en emprisonner une autre, sans démontage possible.",
      "Les vis miniatures se serrent au couple prescrit, en cN·m, avec un outil étalonné.",
      "Préparation de surface, dosage, temps ouvert et polymérisation font la réussite d'un collage.",
      "Une brasure correcte mouille bien la pastille et la patte du composant, avec un ménisque concave.",
      "L'autocontrôle se fait aux étapes prévues par la gamme et s'enregistre.",
      "Plus un défaut est détecté tard, plus il coûte cher."
     ],
     "lexique": [
      {
       "terme": "Chassage",
       "def": "Emmanchement en force d'une pièce dans une autre grâce à un ajustement serré."
      },
      {
       "terme": "Serrage",
       "def": "Différence positive entre le diamètre de l'arbre et celui de l'alésage."
      },
      {
       "terme": "Sertissage",
       "def": "Assemblage par déformation d'une pièce qui en emprisonne une autre."
      },
      {
       "terme": "Brucelles",
       "def": "Pinces fines utilisées pour saisir les petites pièces."
      },
      {
       "terme": "Potence",
       "def": "Outil à colonne permettant de chasser ou d'extraire des pièces avec précision."
      },
      {
       "terme": "Tournevis dynamométrique",
       "def": "Tournevis qui limite ou indique le couple de serrage appliqué."
      },
      {
       "terme": "Temps ouvert",
       "def": "Durée pendant laquelle une colle permet encore d'ajuster la position des pièces."
      },
      {
       "terme": "Brasage tendre",
       "def": "Assemblage par un métal d'apport fondant à basse température, sans fusion des pièces."
      },
      {
       "terme": "Autocontrôle",
       "def": "Contrôle réalisé par l'opérateur sur son propre travail, aux étapes prévues."
      },
      {
       "terme": "Gamme de montage",
       "def": "Document qui décrit l'ordre des opérations de montage et leurs conditions."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Contrôler, tester, maintenir et améliorer",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmic-metrologie",
     "titre": "Métrologie et contrôle dimensionnel à l'échelle micro",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer erreur, incertitude, résolution et justesse d'une mesure.",
      "Choisir un moyen de mesure adapté à la tolérance à contrôler.",
      "Décrire les moyens de mesure sans contact et les machines de mesure utilisées en microtechnique.",
      "Prendre en compte la température et les conditions de mesure.",
      "Gérer le suivi métrologique des instruments d'un atelier."
     ],
     "sections": [
      {
       "titre": "Mesurer, c'est estimer",
       "contenu": "\n<p>En seconde, on a appris à lire une cotation et à contrôler une pièce avec les instruments courants. À l'échelle micro, une question devient centrale : <strong>quelle confiance accorder à la valeur lue ?</strong> Aucune mesure n'est parfaite. La valeur lue s'écarte de la valeur vraie d'une <strong>erreur</strong> que l'on ne connaît jamais exactement. On l'encadre par l'<strong>incertitude de mesure</strong> U : le résultat s'écrit x ± U, avec un niveau de confiance (souvent 95 %).</p>\n<p>L'incertitude a de nombreuses origines, regroupées par la méthode des « 5 M » appliquée à la mesure :</p>\n<ul>\n<li>le <strong>moyen</strong> : résolution, justesse, usure de l'instrument ;</li>\n<li>la <strong>méthode</strong> : mode opératoire, nombre de mesures, points de mesure ;</li>\n<li>la <strong>main-d'œuvre</strong> : habileté, force d'appui, lecture ;</li>\n<li>le <strong>milieu</strong> : température, vibrations, propreté ;</li>\n<li>la <strong>matière</strong> : défauts de forme, état de surface, déformation de la pièce sous la touche.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la résolution est le plus petit écart qu'affiche l'instrument ; l'incertitude est l'intervalle dans lequel se trouve probablement la valeur vraie. Un micromètre numérique de résolution 1 µm peut avoir une incertitude de 2 à 3 µm.</div>"
      },
      {
       "titre": "Choisir un moyen de mesure adapté",
       "contenu": "\n<p>Règle pratique : l'incertitude de mesure doit être petite devant l'<strong>intervalle de tolérance</strong> (IT) à vérifier. On recherche couramment un rapport IT / (2U) d'au moins 4, et idéalement de 10 dans les entreprises exigeantes. Sinon, une part importante des pièces se trouve dans une zone de doute où l'on ne peut conclure.</p>\n<table>\n<thead><tr><th>Instrument</th><th>Résolution usuelle</th><th>Incertitude indicative</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Pied à coulisse numérique</td><td>0,01 mm</td><td>20 à 30 µm</td><td>Contrôle grossier, ébauches</td></tr>\n<tr><td>Micromètre d'extérieur</td><td>1 µm</td><td>2 à 4 µm</td><td>Diamètres d'axes, épaisseurs</td></tr>\n<tr><td>Comparateur numérique sur support</td><td>1 µm</td><td>2 à 3 µm</td><td>Hauteurs, faux-ronds, ébats</td></tr>\n<tr><td>Palpeur inductif (comparateur électronique)</td><td>0,1 µm</td><td>Inférieure au micromètre en conditions maîtrisées</td><td>Mesures par comparaison à une cale étalon</td></tr>\n<tr><td>Machine de mesure optique (vision)</td><td>0,1 à 1 µm</td><td>2 à 5 µm</td><td>Contours de pièces plates, positions de trous</td></tr>\n<tr><td>Machine tridimensionnelle à palpeur</td><td>0,1 µm</td><td>1 à 3 µm</td><td>Formes complexes, tolérances géométriques</td></tr>\n</tbody>\n</table>\n<p>Les valeurs d'incertitude de ce tableau sont des ordres de grandeur : la valeur réelle se lit sur le certificat d'étalonnage de l'instrument et dépend des conditions d'emploi.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'un instrument convient. Cote à contrôler : 1,200 ± 0,005 mm, soit IT = 10 µm. 1. Micromètre d'incertitude U = 3 µm : IT / 2U = 10 / 6 ≈ 1,7, insuffisant. 2. Palpeur inductif étalonné sur cale, U = 0,5 µm : IT / 2U = 10 / 1 = 10, satisfaisant. 3. Conclusion : le contrôle se fait par comparaison au palpeur inductif ; le micromètre ne sert qu'à un contrôle de dégrossissage.</div>"
      },
      {
       "titre": "Mesure sans contact et machines de mesure",
       "contenu": "\n<p>Les pièces microtechniques sont souvent trop petites ou trop souples pour supporter la force d'un palpeur. On recourt à la <strong>mesure sans contact</strong> :</p>\n<ul>\n<li>le <strong>projecteur de profil</strong> agrandit l'ombre de la pièce (x10 à x100) sur un écran gradué, où l'on compare le contour à un calque ;</li>\n<li>la <strong>machine de mesure par vision</strong> associe une caméra, un objectif de précision, un éclairage (par transparence, annulaire, coaxial) et des platines motorisées ; un logiciel détecte les contours et calcule diamètres, distances et positions ;</li>\n<li>le <strong>microscope de mesure</strong> et la <strong>binoculaire avec réticule</strong> pour des contrôles visuels et dimensionnels ;</li>\n<li>les <strong>capteurs confocaux chromatiques</strong> et l'<strong>interférométrie</strong> pour les hauteurs, planéités et états de surface au nanomètre.</li>\n</ul>\n<p>La <strong>machine à mesurer tridimensionnelle</strong> (MMT) palpe des points de la pièce dans l'espace et reconstruit les éléments géométriques (plans, cylindres, cercles) pour vérifier les tolérances de forme, d'orientation et de position définies selon le système ISO GPS (norme NF EN ISO 1101). Des MMT à palpeurs microscopiques, à faible force de contact, permettent de mesurer des micro-pièces.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur une machine de vision, le résultat dépend fortement de l'éclairage et de la mise au point : un contour éclairé différemment se « déplace » de plusieurs micromètres. Le programme de mesure fixe ces réglages ; on ne les modifie pas sans validation.</div>"
      },
      {
       "titre": "États de surface",
       "contenu": "\n<p>L'état de surface influe sur le frottement, l'étanchéité, l'aspect et la tenue d'un revêtement. Il se mesure au <strong>rugosimètre</strong> (palpeur à pointe diamant qui suit la surface) ou par des moyens optiques. Le paramètre le plus courant est <strong>Ra</strong>, écart moyen arithmétique du profil par rapport à sa ligne moyenne, exprimé en micromètres. On utilise aussi <strong>Rz</strong>, hauteur maximale du profil, plus sensible aux défauts isolés.</p>\n<table>\n<thead><tr><th>Surface</th><th>Ra indicatif</th></tr></thead>\n<tbody>\n<tr><td>Tournage fin</td><td>0,8 à 1,6 µm</td></tr>\n<tr><td>Rectification</td><td>0,2 à 0,4 µm</td></tr>\n<tr><td>Pivot poli d'horlogerie</td><td>Inférieur à 0,05 µm</td></tr>\n<tr><td>Surface optique polie</td><td>De l'ordre du nanomètre</td></tr>\n</tbody>\n</table>\n<p>Les spécifications d'état de surface sur les dessins suivent la norme NF EN ISO 21920-1 (qui remplace l'ancienne NF EN ISO 1302 depuis 2021) ; on rencontre encore de nombreux dessins à l'ancienne norme, dont l'indication reste lisible de la même façon pour Ra et Rz.</p>"
      },
      {
       "titre": "Conditions de mesure",
       "contenu": "\n<p>La <strong>température de référence</strong> des mesures dimensionnelles est fixée à 20 °C (norme NF EN ISO 1). Une pièce mesurée à une autre température n'a pas sa dimension de référence. La variation de longueur vaut ΔL = α × L × Δθ, où α est le coefficient de dilatation linéique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer l'effet de la température. Une pièce en aluminium (α ≈ 23 × 10<sup>-6</sup> /°C) de 20 mm est mesurée juste après usinage à 26 °C. ΔL = 23 × 10<sup>-6</sup> × 20 × 6 ≈ 0,0028 mm, soit près de 3 µm. Pour une tolérance de ± 5 µm, cet écart n'est pas négligeable : il faut laisser la pièce se stabiliser au laboratoire avant de mesurer, et éviter de la tenir longtemps dans la main.</div>\n<p>Autres précautions : nettoyer les pièces et les touches de mesure, laisser instruments et étalons à la même température, mesurer sans choc ni vibration, répéter la mesure pour vérifier la <strong>répétabilité</strong>, vérifier le zéro sur une cale étalon avant une série.</p>\n<p>La <strong>force de mesure</strong> mérite une attention particulière à l'échelle micro. Un micromètre appuie sur la pièce avec une force de quelques newtons, limitée par son cliquet ou sa friction ; un comparateur exerce environ un newton. Sur une lame mince, un ressort, un tube à paroi fine ou une pièce en polymère, cette force suffit à déformer la pièce de plusieurs micromètres : la mesure est alors fausse et la pièce peut être marquée. On choisit dans ce cas un palpeur à faible force, une touche de grand rayon qui répartit l'appui, ou une mesure sans contact. De même, la <strong>méthode</strong> de mesure doit être fixée : nombre et position des points de mesure, orientation de la pièce, ordre des opérations. Deux opérateurs qui mesurent différemment la même pièce obtiendront des résultats différents, même avec des instruments parfaits.</p>"
      },
      {
       "titre": "Le suivi métrologique des instruments",
       "contenu": "\n<p>Un instrument de mesure dérive avec le temps (usure, choc, vieillissement). L'entreprise organise une <strong>fonction métrologie</strong> qui assure :</p>\n<ul>\n<li>l'<strong>identification</strong> de chaque instrument (numéro unique) et son inscription dans un fichier de suivi ;</li>\n<li>l'<strong>étalonnage</strong> périodique : comparaison avec un étalon de référence raccordé aux étalons nationaux, qui donne un certificat avec les écarts constatés et l'incertitude ;</li>\n<li>la <strong>vérification</strong> : décision de conformité de l'instrument par rapport à une erreur maximale tolérée ;</li>\n<li>l'<strong>étiquetage</strong> indiquant l'état et la date de la prochaine vérification ;</li>\n<li>la mise à l'écart des instruments non conformes ou à échéance dépassée.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> si un instrument est trouvé hors tolérance lors de son étalonnage, la qualité recherche toutes les pièces contrôlées avec lui depuis le dernier étalonnage valide : c'est la raison pour laquelle on note le numéro de l'instrument sur la fiche de contrôle. Avant d'utiliser un instrument, l'opérateur vérifie toujours son étiquette.</div>"
      }
     ],
     "points_cles": [
      "Un résultat de mesure s'écrit x ± U : l'incertitude encadre la valeur vraie.",
      "Résolution et incertitude sont deux notions différentes.",
      "On choisit un moyen de mesure tel que IT / 2U soit au moins égal à 4.",
      "La mesure sans contact (vision, projecteur, confocal) évite de déformer les micro-pièces.",
      "La MMT vérifie les tolérances géométriques ISO GPS.",
      "Ra et Rz caractérisent l'état de surface ; la norme NF EN ISO 21920-1 remplace la NF EN ISO 1302.",
      "La température de référence des mesures est 20 °C ; ΔL = α × L × Δθ.",
      "Tout instrument est identifié, étalonné périodiquement et étiqueté."
     ],
     "lexique": [
      {
       "terme": "Incertitude de mesure",
       "def": "Intervalle autour du résultat dans lequel la valeur vraie se trouve avec un niveau de confiance donné."
      },
      {
       "terme": "Erreur de mesure",
       "def": "Écart entre la valeur mesurée et la valeur vraie, jamais connue exactement."
      },
      {
       "terme": "Répétabilité",
       "def": "Aptitude à donner des résultats voisins pour des mesures répétées dans les mêmes conditions."
      },
      {
       "terme": "Étalonnage",
       "def": "Comparaison d'un instrument à un étalon de référence pour établir ses écarts et son incertitude."
      },
      {
       "terme": "Étalon",
       "def": "Objet ou instrument de référence dont la valeur est connue avec une faible incertitude."
      },
      {
       "terme": "Palpeur inductif",
       "def": "Capteur de déplacement électronique utilisé pour les mesures par comparaison au micromètre près."
      },
      {
       "terme": "Machine de mesure par vision",
       "def": "Instrument qui mesure des pièces sans contact à partir d'images numériques."
      },
      {
       "terme": "MMT",
       "def": "Machine à mesurer tridimensionnelle qui palpe des points pour reconstruire la géométrie d'une pièce."
      },
      {
       "terme": "Ra",
       "def": "Écart moyen arithmétique du profil de rugosité, en micromètres."
      },
      {
       "terme": "Coefficient de dilatation",
       "def": "Allongement relatif d'un matériau par degré de température."
      }
     ]
    },
    {
     "id": "bmic-essais-reglages",
     "titre": "Tester, régler et valider un produit microtechnique",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer contrôle, essai, test et vérification de conformité.",
      "Décrire l'organisation d'un banc de test et ses éléments.",
      "Conduire un réglage en suivant une procédure et en exploitant les mesures.",
      "Utiliser l'oscilloscope pour vérifier des signaux de commande et de capteurs.",
      "Renseigner un procès-verbal d'essai et conclure sur la conformité d'un produit."
     ],
     "sections": [
      {
       "titre": "Contrôle, essai, test : de quoi parle-t-on ?",
       "contenu": "\n<p>Le référentiel consacre une activité entière aux <strong>tests, à la validation et au contrôle de conformité</strong>. Les termes ont des sens précis :</p>\n<table>\n<thead><tr><th>Terme</th><th>Ce qu'on vérifie</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Contrôle</td><td>La conformité d'une caractéristique à une spécification</td><td>Diamètre d'un axe, présence d'une vis</td></tr>\n<tr><td>Test</td><td>Le bon fonctionnement d'une fonction dans des conditions définies</td><td>Allumage de l'afficheur, réponse d'un capteur</td></tr>\n<tr><td>Essai</td><td>Le comportement du produit dans des conditions représentatives, parfois sévères</td><td>Endurance, chute, température, étanchéité</td></tr>\n<tr><td>Réglage</td><td>L'ajustement d'un paramètre pour obtenir une performance</td><td>Ébat, tension de courroie, marche d'une montre, gain d'un capteur</td></tr>\n<tr><td>Validation</td><td>L'aptitude du produit à l'usage prévu</td><td>Essais de qualification d'un nouveau modèle</td></tr>\n</tbody>\n</table>\n<p>En production, chaque produit passe un <strong>test final</strong> (ou test de sortie) qui vérifie ses fonctions principales. Les <strong>essais</strong> plus longs ou destructifs se font sur échantillons, lors de la qualification d'un modèle ou périodiquement.</p>"
      },
      {
       "titre": "Le banc de test",
       "contenu": "\n<p>Un <strong>banc de test</strong> réunit les moyens nécessaires pour solliciter le produit et mesurer ses réponses :</p>\n<ul>\n<li>une <strong>alimentation</strong> réglable avec limitation de courant ;</li>\n<li>des <strong>moyens de sollicitation</strong> : générateur de signaux, charge mécanique (frein, masse, ressort étalonné), source de lumière, enceinte climatique, pot vibrant ;</li>\n<li>des <strong>instruments de mesure</strong> : multimètre, oscilloscope, couplemètre, capteur de force, chronocomparateur, débitmètre ;</li>\n<li>un <strong>montage d'accueil</strong> qui positionne le produit et le connecte rapidement (connecteurs à ressort, lit d'aiguilles) ;</li>\n<li>un <strong>logiciel</strong> qui enchaîne les étapes, compare les mesures aux limites et enregistre les résultats.</li>\n</ul>\n<p>Sur un banc automatisé, l'opérateur place le produit, lance le cycle et lit le verdict « bon » ou « mauvais ». Il doit néanmoins comprendre chaque étape pour interpréter un échec et vérifier que le banc lui-même fonctionne : on passe régulièrement un <strong>produit étalon</strong> connu bon (et parfois un produit connu mauvais) pour s'assurer que le banc donne le bon verdict.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un test « bon » n'est valable que si le banc est en état. Un connecteur usé, un câble coupé ou un instrument hors étalonnage peut déclarer conformes des produits défectueux, ou rejeter des produits bons. La vérification du banc en début de poste fait partie du travail.</div>"
      },
      {
       "titre": "Réaliser un réglage",
       "contenu": "\n<p>Un <strong>réglage</strong> agit sur un élément ajustable (vis, excentrique, cale, potentiomètre, paramètre logiciel) pour amener une grandeur dans sa tolérance. Il suit toujours une démarche rigoureuse.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduire un réglage. 1. Identifier dans la documentation la grandeur à régler, sa valeur cible et sa tolérance (par exemple : jeu axial de l'arbre de sortie 0,02 à 0,05 mm). 2. Identifier l'élément de réglage et son effet (vis de butée : visser diminue le jeu). 3. Mesurer l'état initial avec un moyen adapté et noter la valeur. 4. Agir par petites corrections, en mesurant après chaque action. 5. Viser le milieu de la tolérance plutôt que la limite. 6. Bloquer le réglage (contre-écrou, vernis, colle) et mesurer à nouveau : le blocage peut déplacer le réglage. 7. Enregistrer la valeur finale.</div>\n<p>Exemple d'horlogerie : le réglage de la <strong>marche</strong> d'une montre mécanique (avance ou retard en secondes par jour) se fait sur un <strong>chronocomparateur</strong>, qui écoute le tic-tac par un microphone et affiche la marche, l'amplitude du balancier et le défaut de repère. On mesure dans plusieurs positions (cadran en haut, en bas, couronne en haut, etc.) car la marche varie avec la position. Le réglage s'effectue en déplaçant la raquette ou en agissant sur les masselottes du balancier selon le mouvement.</p>\n<p>Exemple mécatronique : l'étalonnage d'un capteur de force consiste à appliquer des masses connues, relever la sortie et calculer le gain et l'offset que le logiciel enregistre dans la mémoire du produit.</p>"
      },
      {
       "titre": "Utiliser l'oscilloscope",
       "contenu": "\n<p>L'<strong>oscilloscope</strong> affiche l'évolution d'une tension en fonction du temps. Il permet de vérifier des signaux que le multimètre ne peut pas voir : impulsions de commande d'un moteur pas à pas, signal MLI, voies A et B d'un codeur, horloge d'un microcontrôleur, trames d'un bus.</p>\n<p>Réglages de base :</p>\n<ul>\n<li>le <strong>calibre vertical</strong> (volts par division) et le <strong>calibre horizontal</strong> (base de temps, secondes par division) ;</li>\n<li>le <strong>couplage</strong> : DC pour voir la composante continue, AC pour ne voir que les variations ;</li>\n<li>le <strong>déclenchement</strong> (trigger) : niveau et front qui stabilisent l'affichage d'un signal répétitif.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mesurer un signal MLI. L'écran montre un signal carré de 0 à 12 V ; base de temps 10 µs/div ; une période occupe 5 divisions, l'état haut 2 divisions. 1. Période : T = 5 × 10 = 50 µs, donc fréquence f = 1 / T = 20 kHz. 2. Rapport cyclique : α = 2 / 5 = 0,4. 3. Tension moyenne appliquée au moteur : 0,4 × 12 = 4,8 V. 4. Comparer à la valeur attendue pour la vitesse commandée.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la masse de la sonde d'un oscilloscope de table est reliée à la terre du secteur. La brancher sur un point du circuit qui n'est pas à la masse crée un court-circuit. On repère toujours le point de masse du circuit avant de raccorder la pince de masse.</div>"
      },
      {
       "titre": "Essais de qualification et d'environnement",
       "contenu": "\n<p>Avant la mise en production d'un nouveau produit ou d'une modification, des <strong>essais de qualification</strong> vérifient la tenue aux conditions d'emploi et de transport :</p>\n<table>\n<thead><tr><th>Essai</th><th>Sollicitation</th><th>Défauts révélés</th></tr></thead>\n<tbody>\n<tr><td>Endurance</td><td>Cycles de fonctionnement répétés (des milliers à des millions)</td><td>Usure, desserrage, fatigue</td></tr>\n<tr><td>Chocs et chutes</td><td>Chute sur surface dure, chocs calibrés</td><td>Pièces décrochées, pierres cassées, brasures fissurées</td></tr>\n<tr><td>Vibrations</td><td>Pot vibrant, balayage en fréquence</td><td>Résonances, desserrages, fils cassés</td></tr>\n<tr><td>Climatique</td><td>Chaud, froid, cycles thermiques, humidité</td><td>Dérives, condensation, dilatations différentielles</td></tr>\n<tr><td>Étanchéité</td><td>Surpression ou dépression d'air, immersion</td><td>Joints défectueux, fuites</td></tr>\n<tr><td>Compatibilité électromagnétique</td><td>Perturbations rayonnées et conduites</td><td>Dysfonctionnements, émissions excessives</td></tr>\n</tbody>\n</table>\n<p>Ces essais suivent des normes ou des spécifications propres au secteur (horlogerie, médical, automobile, aéronautique), citées dans le plan d'essais.</p>\n<p>Le technicien d'essais ne se contente pas de lancer le programme : il prépare les <strong>éprouvettes</strong> (produits identifiés, mesurés avant essai), vérifie le montage du produit sur le moyen d'essai (un produit mal fixé sur un pot vibrant subit des sollicitations différentes de celles prévues), surveille le déroulement, consigne tout événement (arrêt, alarme, bruit) avec l'heure, puis réalise les mesures et les examens après essai. La comparaison avant-après est l'essentiel du résultat : dérive d'une caractéristique, apparition d'un jeu, fissure observée sous binoculaire. Un essai interrompu ou perturbé doit être signalé tel quel dans le procès-verbal, jamais « arrangé » : c'est souvent l'incident imprévu qui révèle la faiblesse du produit.</p>"
      },
      {
       "titre": "Renseigner un procès-verbal et conclure",
       "contenu": "\n<p>Chaque test ou essai donne lieu à un enregistrement : fiche de test, <strong>procès-verbal</strong> (PV) d'essai ou enregistrement informatique. Il comporte :</p>\n<ul>\n<li>l'identification du produit (référence, numéro de série ou de lot) ;</li>\n<li>la procédure appliquée et son indice ;</li>\n<li>les moyens utilisés et leurs numéros (pour la traçabilité métrologique) ;</li>\n<li>les conditions (température, tension d'alimentation) ;</li>\n<li>les valeurs mesurées en face des limites ;</li>\n<li>la conclusion : conforme ou non conforme, la date et le nom de l'opérateur.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un produit non conforme au test n'est jamais « retesté jusqu'à ce qu'il passe ». Il est identifié par une étiquette rouge, isolé dans une zone dédiée et orienté vers l'analyse ou la retouche selon la procédure. Retester sans comprendre, c'est risquer de livrer un défaut intermittent.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> conclure sur la conformité, c'est comparer chaque valeur mesurée à sa limite, en tenant compte de l'incertitude de mesure ; une seule caractéristique hors tolérance rend le produit non conforme.</div>"
      }
     ],
     "points_cles": [
      "Contrôle, test, essai, réglage et validation ont des sens distincts.",
      "Un banc de test associe alimentation, sollicitations, mesures, montage d'accueil et logiciel.",
      "Le banc est vérifié régulièrement avec un produit étalon.",
      "Un réglage se fait par petites corrections mesurées, en visant le milieu de la tolérance, puis se bloque et se remesure.",
      "À l'oscilloscope : f = 1/T et α = durée à l'état haut / période.",
      "La masse de la sonde d'oscilloscope est reliée à la terre : attention aux courts-circuits.",
      "Les essais de qualification vérifient la tenue en endurance, chocs, vibrations, climat, étanchéité.",
      "Un produit non conforme est identifié, isolé et analysé, jamais retesté au hasard."
     ],
     "lexique": [
      {
       "terme": "Test final",
       "def": "Vérification des fonctions principales d'un produit en fin de fabrication."
      },
      {
       "terme": "Essai",
       "def": "Mise du produit dans des conditions définies, parfois sévères, pour observer son comportement."
      },
      {
       "terme": "Banc de test",
       "def": "Ensemble de moyens permettant de solliciter un produit et de mesurer ses réponses."
      },
      {
       "terme": "Produit étalon",
       "def": "Produit aux caractéristiques connues servant à vérifier le bon fonctionnement d'un banc."
      },
      {
       "terme": "Chronocomparateur",
       "def": "Appareil qui mesure la marche et l'amplitude d'une montre mécanique par analyse acoustique."
      },
      {
       "terme": "Marche",
       "def": "Avance ou retard d'une montre, exprimé en secondes par jour."
      },
      {
       "terme": "Oscilloscope",
       "def": "Instrument qui affiche l'évolution d'une tension en fonction du temps."
      },
      {
       "terme": "Déclenchement",
       "def": "Réglage de l'oscilloscope qui fixe le moment de début d'affichage pour stabiliser l'image."
      },
      {
       "terme": "Procès-verbal d'essai",
       "def": "Document qui enregistre les conditions, les résultats et la conclusion d'un essai."
      },
      {
       "terme": "Qualification",
       "def": "Ensemble d'essais démontrant qu'un produit ou un procédé satisfait aux exigences."
      }
     ]
    },
    {
     "id": "bmic-diagnostic-maintenance",
     "titre": "Diagnostiquer et remettre en état un produit microtechnique",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Situer la maintenance des produits microtechniques dans l'organisation du service après-vente.",
      "Conduire un diagnostic méthodique du symptôme à la cause.",
      "Exploiter un arbre de défaillances et un tableau de dépannage.",
      "Organiser une remise en état : démontage, nettoyage, remplacement, remontage, essais.",
      "Assurer la traçabilité et le compte rendu d'une intervention."
     ],
     "sections": [
      {
       "titre": "La maintenance des produits microtechniques",
       "contenu": "\n<p>Le référentiel décrit une maintenance des produits microtechniques réalisée <strong>chez le fabricant</strong> ou dans un centre agréé, le plus souvent dans le cadre du <strong>service après-vente</strong> (SAV). Le produit revient du client avec une description de panne plus ou moins précise ; le technicien doit établir un diagnostic, remettre le produit en état et le restituer conforme.</p>\n<p>On distingue :</p>\n<ul>\n<li>la <strong>maintenance corrective</strong> : intervention après une défaillance (montre arrêtée, pompe en alarme) ;</li>\n<li>la <strong>maintenance préventive</strong> : intervention programmée avant la défaillance, selon un intervalle de temps ou d'utilisation (révision complète d'une montre mécanique tous les quelques années, remplacement périodique de la batterie et des joints d'un appareil médical selon le manuel du fabricant) ;</li>\n<li>l'<strong>échange standard</strong> : remplacement d'un module complet par un module neuf ou reconditionné, le module défectueux étant réparé ensuite ou rebuté.</li>\n</ul>\n<p>La notion de <strong>niveau de maintenance</strong> précise ce qu'un intervenant est autorisé à faire : le client remplace une pile ; le revendeur change un bracelet ou un joint ; le centre SAV démonte, remplace des modules, règle ; seul l'atelier du fabricant intervient sur certains sous-ensembles critiques.</p>"
      },
      {
       "titre": "La démarche de diagnostic",
       "contenu": "\n<p>Le <strong>diagnostic</strong> consiste à identifier la cause d'une défaillance à partir de ses symptômes. Il suit une démarche structurée, qui évite de démonter au hasard et de remplacer des pièces bonnes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> diagnostiquer une défaillance. 1. <strong>Identifier le produit</strong> : référence, numéro de série, version, historique des interventions. 2. <strong>Recueillir les symptômes</strong> : description du client, codes d'erreur mémorisés, conditions d'apparition (toujours, de temps en temps, après une chute, à froid). 3. <strong>Constater</strong> le défaut soi-même par un test : un défaut non reproduit n'est pas diagnostiqué. 4. <strong>Formuler des hypothèses</strong> à partir de l'analyse fonctionnelle : quelles fonctions, quels composants peuvent produire ce symptôme ? 5. <strong>Tester les hypothèses</strong> de la plus probable et la plus facile à vérifier vers la moins probable, par mesures, observations et substitutions. 6. <strong>Localiser</strong> l'élément défaillant et <strong>identifier la cause</strong> (pourquoi il a défailli). 7. <strong>Valider</strong> : après réparation, le symptôme a disparu et tous les tests sont bons.</div>\n<p>La distinction entre <strong>mode de défaillance</strong> (la façon dont l'élément ne remplit plus sa fonction : rupture, blocage, dérive), <strong>cause</strong> (choc, corrosion, usure, défaut de montage) et <strong>effet</strong> (ce que voit l'utilisateur) est essentielle : remplacer une pièce cassée sans traiter la cause, c'est préparer le retour du produit.</p>"
      },
      {
       "titre": "Outils d'aide au diagnostic",
       "contenu": "\n<p>Le technicien dispose de plusieurs outils documentaires :</p>\n<ul>\n<li>le <strong>tableau de dépannage</strong> du manuel de service, qui associe symptômes, causes probables et actions ;</li>\n<li>l'<strong>arbre de défaillances</strong> (ou arbre des causes) qui part de l'événement indésirable et le décompose en causes possibles reliées par des portes logiques « ET » et « OU » ;</li>\n<li>les <strong>organigrammes de dépannage</strong> qui enchaînent des tests à réponse oui/non ;</li>\n<li>les <strong>logiciels de diagnostic</strong> qui lisent les journaux d'erreurs et les compteurs internes des produits électroniques.</li>\n</ul>\n<table>\n<thead><tr><th>Symptôme</th><th>Causes probables</th><th>Vérifications</th></tr></thead>\n<tbody>\n<tr><td>Le moteur ne tourne pas</td><td>Batterie déchargée ; connecteur débranché ; driver défaillant ; moteur coupé ; transmission bloquée</td><td>Tension batterie ; continuité du câble ; signal de commande à l'oscilloscope ; résistance du bobinage ; rotation manuelle à vide</td></tr>\n<tr><td>Alarme d'occlusion intempestive</td><td>Capteur de force déréglé ; frottement anormal du chariot ; seringue non conforme</td><td>Valeur du capteur à vide ; effort de déplacement du chariot ; essai avec seringue étalon</td></tr>\n<tr><td>Montre qui retarde fortement</td><td>Huile gommée ; spiral magnétisé ; choc ayant déformé le spiral</td><td>Amplitude au chronocomparateur ; test au détecteur de magnétisme ; observation du spiral à la binoculaire</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la substitution (remplacer un module par un module connu bon pour voir si le défaut disparaît) est efficace, mais elle a des limites : elle peut endommager le module de test si la cause est en amont (un court-circuit qui a détruit le premier driver détruira le second). On vérifie d'abord les alimentations et l'absence de court-circuit.</div>"
      },
      {
       "titre": "Remettre en état",
       "contenu": "\n<p>La remise en état suit la documentation du fabricant. Ses étapes habituelles :</p>\n<ol>\n<li><strong>Démontage</strong> selon la procédure, en rangeant les pièces dans l'ordre (plateau à compartiments, boîte à casiers), en photographiant ou en notant les positions et les réglages d'origine.</li>\n<li><strong>Nettoyage</strong> : machine à laver horlogère ou bac à ultrasons avec les bains prescrits, séchage, en tenant à l'écart les pièces qui ne supportent pas le traitement (pièces collées, aimants, composants électroniques).</li>\n<li><strong>Examen</strong> de chaque pièce sous binoculaire : usure des pivots, état des dentures, fissures, corrosion.</li>\n<li><strong>Remplacement</strong> des pièces défectueuses et des pièces d'usure systématiquement changées (joints, ressorts, pile) par des pièces d'origine.</li>\n<li><strong>Remontage et lubrification</strong> selon la gamme, avec les produits et les quantités prescrits.</li>\n<li><strong>Réglages</strong> et <strong>tests</strong> complets, comme pour un produit neuf, et essais complémentaires si l'intervention l'exige (étanchéité après ouverture d'une boîte de montre).</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans le médical, un appareil remis en état doit satisfaire aux mêmes contrôles que l'appareil neuf, et l'intervention est enregistrée dans le dossier de l'appareil. Une modification non prévue par le fabricant, même pour « améliorer », est interdite : elle engage la responsabilité de celui qui l'a faite.</div>"
      },
      {
       "titre": "Coût, délai et devis",
       "contenu": "\n<p>Le SAV est une activité économique : le client attend un délai court et un prix raisonnable. Après le diagnostic, le technicien prépare souvent un <strong>devis</strong> qui détaille les pièces à remplacer, le temps de main-d'œuvre et le délai. Le client accepte ou refuse avant la réparation (hors garantie). Sous garantie, le diagnostic doit aussi établir si la panne relève de la garantie ou d'une mauvaise utilisation (choc, oxydation après immersion d'un produit non étanche), en s'appuyant sur des constats objectifs : traces de choc, indicateurs d'humidité, scellés rompus.</p>\n<p>Le temps passé est enregistré par type d'intervention ; ces données servent à fixer des <strong>forfaits</strong> de réparation et à repérer les pannes les plus fréquentes.</p>\n<p>La relation avec le client fait partie du travail. À la réception, on note précisément l'état du produit (rayures, chocs, pièces manquantes, accessoires fournis) en présence du client ou à l'ouverture du colis, pour éviter toute contestation ultérieure. Le devis est rédigé en termes compréhensibles : on explique la panne constatée et l'intervention proposée sans jargon inutile. Si la réparation n'est pas économiquement justifiée (coût proche du prix d'un produit neuf), on le signale et on propose une alternative. À la restitution, on indique ce qui a été fait, les éventuelles recommandations d'usage (recharger la batterie complètement, éviter tel produit de nettoyage) et la durée de la garantie de réparation. Un client bien informé accepte mieux un délai ou un coût, et revient vers l'entreprise.</p>"
      },
      {
       "titre": "Traçabilité et retour d'expérience",
       "contenu": "\n<p>Toute intervention donne lieu à un <strong>compte rendu</strong> : identification du produit, symptômes déclarés et constatés, diagnostic, pièces remplacées (avec leurs références et lots), réglages, résultats des tests, nom de l'intervenant, date. Ce compte rendu est remis au client sous une forme simplifiée et archivé en détail.</p>\n<p>Au-delà de la réparation, le SAV est une source précieuse d'informations pour l'entreprise. Les défaillances sont <strong>codées</strong> et compilées : si un même composant revient en panne sur plusieurs produits d'un même lot, la qualité ouvre une analyse, qui peut conduire à une modification du produit, du procédé ou du fournisseur. Le technicien de SAV participe ainsi à la <strong>démarche de progrès</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un bon diagnostic va jusqu'à la cause, une bonne réparation remet le produit dans l'état du neuf, et un bon compte rendu permet à l'entreprise d'éviter que la panne se reproduise.</div>"
      }
     ],
     "points_cles": [
      "La maintenance des produits microtechniques se fait le plus souvent en SAV, chez le fabricant ou un centre agréé.",
      "On distingue maintenance corrective, préventive et échange standard.",
      "Un défaut doit être constaté et reproduit avant d'être diagnostiqué.",
      "Les hypothèses se testent de la plus probable et la plus simple vers la moins probable.",
      "Mode de défaillance, cause et effet sont trois notions distinctes.",
      "Tableaux de dépannage, arbres de défaillances et logiciels de diagnostic aident à localiser la panne.",
      "La remise en état suit la documentation du fabricant, avec des pièces d'origine et des tests complets.",
      "Le compte rendu assure la traçabilité et alimente la démarche de progrès."
     ],
     "lexique": [
      {
       "terme": "Service après-vente",
       "def": "Service qui prend en charge les produits après leur vente : réparation, révision, assistance."
      },
      {
       "terme": "Diagnostic",
       "def": "Identification de la cause d'une défaillance à partir de ses symptômes."
      },
      {
       "terme": "Défaillance",
       "def": "Cessation de l'aptitude d'un élément à accomplir sa fonction."
      },
      {
       "terme": "Mode de défaillance",
       "def": "Manière dont un élément cesse de remplir sa fonction (rupture, blocage, dérive)."
      },
      {
       "terme": "Maintenance corrective",
       "def": "Maintenance effectuée après la détection d'une défaillance."
      },
      {
       "terme": "Maintenance préventive",
       "def": "Maintenance effectuée selon un intervalle prédéterminé pour réduire le risque de défaillance."
      },
      {
       "terme": "Échange standard",
       "def": "Remplacement d'un module défectueux par un module neuf ou reconditionné."
      },
      {
       "terme": "Arbre de défaillances",
       "def": "Représentation des combinaisons de causes pouvant conduire à un événement indésirable."
      },
      {
       "terme": "Substitution",
       "def": "Technique de diagnostic consistant à remplacer un élément suspect par un élément connu bon."
      },
      {
       "terme": "Traçabilité",
       "def": "Possibilité de retrouver l'historique, l'utilisation ou la localisation d'un produit ou d'une intervention."
      }
     ]
    },
    {
     "id": "bmic-qualite-progres",
     "titre": "Qualité, maîtrise statistique et démarche de progrès",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Situer les exigences des systèmes de management de la qualité propres aux secteurs microtechniques.",
      "Renseigner et interpréter une carte de contrôle de maîtrise statistique des procédés.",
      "Calculer et interpréter les indicateurs de capabilité Cp et Cpk.",
      "Mettre en œuvre les outils de résolution de problèmes : Pareto, Ishikawa, 5 pourquoi, PDCA.",
      "Lire une analyse des modes de défaillance (AMDEC) et participer à un groupe de progrès."
     ],
     "sections": [
      {
       "titre": "La qualité dans les entreprises microtechniques",
       "contenu": "\n<p>La <strong>qualité</strong> est l'aptitude d'un produit à satisfaire les exigences du client. Dans les secteurs microtechniques, ces exigences sont formalisées par des <strong>systèmes de management de la qualité</strong> certifiés :</p>\n<table>\n<thead><tr><th>Référentiel</th><th>Secteur</th><th>Points marquants</th></tr></thead>\n<tbody>\n<tr><td>ISO 9001</td><td>Tous secteurs</td><td>Approche processus, satisfaction client, amélioration continue</td></tr>\n<tr><td>ISO 13485</td><td>Dispositifs médicaux</td><td>Maîtrise documentaire stricte, validation des procédés, traçabilité complète</td></tr>\n<tr><td>IATF 16949</td><td>Automobile</td><td>Prévention des défauts, maîtrise statistique, outils imposés par les constructeurs</td></tr>\n<tr><td>EN 9100</td><td>Aéronautique, spatial, défense</td><td>Gestion des risques, maîtrise de la configuration, prévention des contrefaçons</td></tr>\n</tbody>\n</table>\n<p>Pour le technicien, ces référentiels se traduisent concrètement par : travailler avec des documents à jour et approuvés, enregistrer les contrôles, signaler toute non-conformité, ne pas modifier un procédé validé sans autorisation, assurer la traçabilité des lots et des numéros de série.</p>\n<p>Le cours de seconde a présenté le suivi d'une production ; on approfondit ici les outils statistiques et les méthodes d'amélioration que le technicien utilise en terminale et en entreprise.</p>"
      },
      {
       "titre": "La maîtrise statistique des procédés",
       "contenu": "\n<p>Tout procédé présente une <strong>variabilité</strong> : deux pièces successives ne sont jamais identiques. On distingue :</p>\n<ul>\n<li>les <strong>causes communes</strong> : nombreuses petites variations aléatoires, inhérentes au procédé ;</li>\n<li>les <strong>causes spéciales</strong> : événements identifiables (usure d'outil, changement de lot matière, dérive thermique) qui décalent ou dispersent les résultats.</li>\n</ul>\n<p>La <strong>maîtrise statistique des procédés</strong> (MSP, en anglais SPC) surveille le procédé pour détecter les causes spéciales avant qu'elles produisent des pièces hors tolérance. L'outil principal est la <strong>carte de contrôle moyenne-étendue</strong> : à intervalles réguliers, on prélève un petit échantillon (par exemple 5 pièces consécutives), on calcule sa moyenne et son étendue (plus grande valeur moins plus petite), et on les reporte sur deux graphiques comportant une ligne centrale et des <strong>limites de contrôle</strong> calculées à partir du procédé lui-même.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les limites de contrôle ne sont pas les limites de tolérance. Les limites de tolérance viennent du dessin (ce que veut le client) ; les limites de contrôle viennent du procédé (ce qu'il fait normalement). Un point hors limites de contrôle signale une cause spéciale, même si toutes les pièces sont encore dans la tolérance.</div>\n<p>Règles d'interprétation courantes : un point hors limites ; une série de 7 points consécutifs du même côté de la ligne centrale ; 7 points consécutifs en augmentation ou en diminution (tendance). Dans ces cas, on arrête, on recherche la cause, on corrige et on note l'action sur la carte.</p>"
      },
      {
       "titre": "La capabilité",
       "contenu": "\n<p>La <strong>capabilité</strong> mesure l'aptitude d'un procédé à produire dans la tolérance. On compare l'intervalle de tolérance IT à la dispersion du procédé, estimée par 6σ (σ étant l'écart-type) :</p>\n<ul>\n<li><strong>Cp</strong> = IT / 6σ : capabilité potentielle, si le procédé était parfaitement centré ;</li>\n<li><strong>Cpk</strong> = min (TS - m ; m - TI) / 3σ : capabilité réelle, qui tient compte du décentrage de la moyenne m par rapport aux tolérances supérieure TS et inférieure TI.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer Cp et Cpk. Cote 2,000 ± 0,010 mm : TI = 1,990 ; TS = 2,010 ; IT = 0,020 mm. Mesures sur 50 pièces : moyenne m = 2,004 mm, écart-type σ = 0,002 mm. 1. Cp = 0,020 / (6 × 0,002) = 0,020 / 0,012 ≈ 1,67. 2. TS - m = 0,006 ; m - TI = 0,014 ; le minimum est 0,006. 3. Cpk = 0,006 / (3 × 0,002) = 1,00. 4. Interprétation : la dispersion est satisfaisante (Cp élevé), mais le procédé est décentré vers la tolérance supérieure ; recentrer la moyenne sur 2,000 mm ramènerait Cpk à 1,67.</div>\n<p>Les exigences varient selon les clients ; une valeur de Cpk d'au moins 1,33 est une référence fréquente, et les secteurs exigeants demandent davantage pour les caractéristiques critiques.</p>"
      },
      {
       "titre": "Outils de résolution de problèmes",
       "contenu": "\n<table>\n<thead><tr><th>Outil</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Diagramme de Pareto</td><td>Classer les défauts par fréquence ou coût pour traiter d'abord les plus importants (souvent 20 % des causes expliquent 80 % des défauts)</td></tr>\n<tr><td>Diagramme d'Ishikawa (causes-effet)</td><td>Rechercher toutes les causes possibles d'un effet, classées selon les 5 M : matière, milieu, méthode, matériel, main-d'œuvre</td></tr>\n<tr><td>5 pourquoi</td><td>Remonter à la cause racine en demandant « pourquoi ? » à chaque réponse</td></tr>\n<tr><td>QQOQCP</td><td>Décrire précisément un problème : quoi, qui, où, quand, comment, pourquoi (ou combien)</td></tr>\n<tr><td>PDCA (roue de Deming)</td><td>Conduire une amélioration : planifier, réaliser, vérifier, agir et standardiser</td></tr>\n</tbody>\n</table>\n<p>Exemple de 5 pourquoi sur des pompes rejetées au test pour bruit : pourquoi le bruit ? le réducteur grince. Pourquoi ? une roue frotte contre le carter. Pourquoi ? l'axe est trop long. Pourquoi ? le lot d'axes reçu est hors tolérance. Pourquoi n'a-t-il pas été détecté ? le contrôle de réception est fait sur un seul échantillon par lot. L'action porte alors sur le contrôle de réception et le fournisseur, pas seulement sur le tri des pompes.</p>\n<p>Ces outils s'enchaînent naturellement dans une démarche PDCA. <strong>Planifier</strong> : décrire le problème avec le QQOQCP, mesurer sa fréquence, hiérarchiser avec le Pareto, rechercher les causes avec l'Ishikawa et les 5 pourquoi, choisir une action. <strong>Réaliser</strong> : mettre en place l'action, à petite échelle d'abord si possible (un poste, une équipe, un lot). <strong>Vérifier</strong> : mesurer de nouveau l'indicateur et comparer à la situation de départ ; une action qui ne change pas l'indicateur n'a pas traité la bonne cause. <strong>Agir</strong> : si l'action est efficace, la standardiser en modifiant la gamme, la fiche de contrôle ou la formation, puis choisir le problème suivant. Le cycle recommence : c'est le principe de l'amélioration continue, représenté par une roue qui monte une pente, avec une cale (la standardisation) qui l'empêche de redescendre.</p>"
      },
      {
       "titre": "L'AMDEC",
       "contenu": "\n<p>L'<strong>AMDEC</strong> (analyse des modes de défaillance, de leurs effets et de leur criticité) est une méthode préventive : on recense, pour chaque élément du produit ou chaque étape du procédé, les modes de défaillance possibles, leurs causes et leurs effets, puis on les note selon trois critères :</p>\n<ul>\n<li><strong>G</strong> : gravité de l'effet ;</li>\n<li><strong>F</strong> (ou O) : fréquence d'apparition de la cause ;</li>\n<li><strong>D</strong> : difficulté de détection avant que le défaut atteigne le client.</li>\n</ul>\n<p>La <strong>criticité</strong> C = G × F × D permet de hiérarchiser les risques ; au-delà d'un seuil fixé par l'entreprise, des actions sont obligatoires.</p>\n<table>\n<thead><tr><th>Étape</th><th>Mode de défaillance</th><th>Effet</th><th>Cause</th><th>G</th><th>F</th><th>D</th><th>C</th><th>Action</th></tr></thead>\n<tbody>\n<tr><td>Chassage de la pierre</td><td>Pierre trop enfoncée</td><td>Ébat nul, blocage</td><td>Butée de potence mal réglée</td><td>7</td><td>3</td><td>4</td><td>84</td><td>Tasseau à butée fixe et contrôle de hauteur systématique</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le technicien participe aux groupes de progrès en apportant sa connaissance du terrain : il signale les difficultés de montage, les défauts récurrents, les détrompeurs manquants. Une proposition simple, comme un montage qui empêche de placer une pièce à l'envers, supprime souvent un mode de défaillance entier.</div>"
      },
      {
       "titre": "Gérer une non-conformité",
       "contenu": "\n<p>Une <strong>non-conformité</strong> est le non-respect d'une exigence. Sa gestion suit des étapes définies :</p>\n<ol>\n<li><strong>Identifier</strong> le produit non conforme (étiquette) et l'<strong>isoler</strong> pour éviter son utilisation.</li>\n<li><strong>Enregistrer</strong> la non-conformité : description, quantité, lot, constat.</li>\n<li><strong>Décider</strong> de son traitement, par une personne habilitée : retouche, réparation, dérogation acceptée par le client, déclassement ou rebut.</li>\n<li><strong>Corriger</strong> immédiatement (action curative) puis rechercher la cause et mettre en place une <strong>action corrective</strong> pour éviter qu'elle se reproduise.</li>\n<li><strong>Vérifier l'efficacité</strong> de l'action.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'action curative traite le produit défectueux ; l'action corrective traite la cause ; l'action préventive traite un risque avant qu'il se réalise. La démarche de progrès vise à passer du curatif au préventif.</div>"
      }
     ],
     "points_cles": [
      "ISO 9001, ISO 13485, IATF 16949 et EN 9100 encadrent la qualité selon les secteurs.",
      "La MSP distingue causes communes et causes spéciales de variabilité.",
      "Les limites de contrôle viennent du procédé, les limites de tolérance du dessin.",
      "Cp = IT / 6σ ; Cpk = min (TS - m ; m - TI) / 3σ.",
      "Pareto hiérarchise, Ishikawa recense les causes, les 5 pourquoi remontent à la cause racine.",
      "Le PDCA structure toute démarche d'amélioration.",
      "Dans l'AMDEC, la criticité C = G × F × D hiérarchise les risques.",
      "Action curative sur le produit, corrective sur la cause, préventive sur le risque."
     ],
     "lexique": [
      {
       "terme": "MSP",
       "def": "Maîtrise statistique des procédés : surveillance d'un procédé par des outils statistiques."
      },
      {
       "terme": "Carte de contrôle",
       "def": "Graphique de suivi d'une caractéristique avec une ligne centrale et des limites de contrôle."
      },
      {
       "terme": "Cause spéciale",
       "def": "Cause identifiable de variation qui perturbe un procédé."
      },
      {
       "terme": "Écart-type",
       "def": "Indicateur statistique de la dispersion des valeurs autour de leur moyenne."
      },
      {
       "terme": "Capabilité",
       "def": "Aptitude d'un procédé à produire dans les tolérances spécifiées."
      },
      {
       "terme": "Diagramme d'Ishikawa",
       "def": "Diagramme en arêtes de poisson classant les causes possibles d'un effet selon les 5 M."
      },
      {
       "terme": "PDCA",
       "def": "Cycle d'amélioration : planifier, réaliser, vérifier, agir."
      },
      {
       "terme": "AMDEC",
       "def": "Analyse des modes de défaillance, de leurs effets et de leur criticité."
      },
      {
       "terme": "Non-conformité",
       "def": "Non-satisfaction d'une exigence spécifiée."
      },
      {
       "terme": "Action corrective",
       "def": "Action visant à éliminer la cause d'une non-conformité pour éviter qu'elle se reproduise."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Documents de définition du système",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bmic-doc-dossier-technique",
     "titre": "Exploiter le dossier technique d'un système microtechnique",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les documents qui composent un dossier technique et leur rôle.",
      "Lire un dessin d'ensemble avec sa nomenclature et son éclaté.",
      "Suivre une chaîne de transmission sur un dessin d'ensemble.",
      "Rédiger l'analyse fonctionnelle et structurelle d'un sous-ensemble à partir du dossier.",
      "Éviter les erreurs de lecture les plus fréquentes."
     ],
     "sections": [
      {
       "titre": "Le dossier technique à l'épreuve écrite",
       "contenu": "\n<p>L'épreuve écrite de technologie du diplôme, « préparation d'une intervention microtechnique », s'appuie sur un système réel ou sa description. Le candidat reçoit généralement un <strong>dossier technique</strong> (DT), à consulter, et un <strong>dossier réponses</strong> (DR), à compléter. Le dossier technique rassemble :</p>\n<table>\n<thead><tr><th>Document</th><th>Ce qu'il apporte</th></tr></thead>\n<tbody>\n<tr><td>Présentation du système</td><td>Usage, contexte, photographie ou description, caractéristiques principales</td></tr>\n<tr><td>Extraits du cahier des charges</td><td>Fonctions et performances attendues</td></tr>\n<tr><td>Diagrammes fonctionnels (FAST, SysML)</td><td>Organisation fonctionnelle</td></tr>\n<tr><td>Dessin d'ensemble et nomenclature</td><td>Structure mécanique, pièces, matériaux</td></tr>\n<tr><td>Éclaté ou vue en perspective</td><td>Compréhension spatiale et ordre de montage</td></tr>\n<tr><td>Schémas électriques, chronogrammes, grafcets</td><td>Fonctionnement de la commande</td></tr>\n<tr><td>Fiches techniques de composants</td><td>Caractéristiques des moteurs, capteurs, roulements</td></tr>\n<tr><td>Extraits de procédures ou de gammes</td><td>Modes opératoires existants</td></tr>\n</tbody>\n</table>\n<p>Le premier travail est de <strong>repérer</strong> ces documents et leur numérotation (DT1, DT2…), pour savoir où chercher chaque information.</p>"
      },
      {
       "titre": "Structure et vocabulaire du dessin d'ensemble",
       "contenu": "\n<p>Le <strong>dessin d'ensemble</strong> représente le mécanisme assemblé, à une échelle souvent agrandie en microtechnique (5:1 ou 10:1). Ses éléments :</p>\n<ul>\n<li>le <strong>cartouche</strong> : titre, échelle, format, auteur, date, indice de révision, méthode de projection (symbole européen) ;</li>\n<li>les <strong>vues</strong> et <strong>coupes</strong> : la coupe principale montre généralement l'empilage des pièces le long des axes ;</li>\n<li>les <strong>repères</strong> : chaque pièce est désignée par un numéro placé au bout d'une ligne de repère terminée par un point sur la pièce ;</li>\n<li>la <strong>nomenclature</strong> : tableau qui donne, pour chaque repère, le nombre, la désignation, la matière et des observations (référence fournisseur, traitement).</li>\n</ul>\n<p>Les pièces de révolution pleines (axes, vis, goupilles) ne sont pas hachurées dans le sens de leur longueur ; deux pièces voisines coupées ont des hachures d'orientation ou d'espacement différents : c'est ainsi qu'on distingue les frontières entre pièces.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'échelle d'un dessin microtechnique est rarement 1:1. Une pièce qui paraît mesurer 40 mm sur un dessin à l'échelle 10:1 mesure en réalité 4 mm. Les cotes inscrites sont toujours les dimensions réelles, quelle que soit l'échelle ; on ne mesure jamais sur le dessin.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un dossier technique de système. 1. Lire la présentation et le cahier des charges : à quoi sert le système, quelles performances ? 2. Lire le cartouche du dessin d'ensemble : échelle, vues, indice. 3. Repérer l'entrée d'énergie (moteur, ressort) et la sortie (effecteur). 4. Suivre la chaîne de transmission d'une pièce à l'autre à l'aide des repères et de la nomenclature, en surlignant chaque pièce traversée. 5. Identifier le bâti et les classes d'équivalence. 6. Pour chaque liaison, repérer les surfaces de contact et les éléments de guidage et d'arrêt. 7. Relever les éléments de réglage (vis, cales, excentriques) et les composants achetés (roulements, moteurs, capteurs). 8. Confronter à l'éclaté pour l'ordre de montage. 9. Rédiger les réponses en citant systématiquement les repères.</div>\n<p>Un réflexe utile : construire au brouillon un tableau « repère / désignation / classe d'équivalence / fonction ». Il sert à presque toutes les questions : FAST, schéma cinématique, procédure de démontage, choix d'outillage.</p>"
      },
      {
       "titre": "Exemple : le document",
       "contenu": "\n<p>Le dossier décrit un <strong>motoréducteur de vanne de dosage</strong> pour un analyseur de laboratoire. Fonction : faire tourner le boisseau d'une vanne de 0 à 90° avec une précision de ± 1°. Dessin d'ensemble à l'échelle 5:1, coupe A-A passant par les trois axes.</p>\n<table>\n<thead><tr><th>Rep.</th><th>Nb</th><th>Désignation</th><th>Matière</th><th>Observations</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>1</td><td>Carter</td><td>PA66 GF30</td><td>Injecté</td></tr>\n<tr><td>2</td><td>1</td><td>Couvercle</td><td>PA66 GF30</td><td></td></tr>\n<tr><td>3</td><td>1</td><td>Moteur pas à pas</td><td></td><td>20 pas/tour, réf. fournisseur</td></tr>\n<tr><td>4</td><td>1</td><td>Pignon moteur z = 10, m = 0,3</td><td>POM</td><td>Chassé sur l'arbre moteur</td></tr>\n<tr><td>5</td><td>1</td><td>Roue intermédiaire z = 60, m = 0,3</td><td>POM</td><td>Monobloc avec rep. 6</td></tr>\n<tr><td>6</td><td>1</td><td>Pignon intermédiaire z = 12, m = 0,3</td><td>POM</td><td></td></tr>\n<tr><td>7</td><td>1</td><td>Axe intermédiaire Ø 1,5</td><td>X20Cr13</td><td>Chassé dans 1, libre dans 5-6</td></tr>\n<tr><td>8</td><td>1</td><td>Roue de sortie z = 72, m = 0,3</td><td>POM</td><td>Chassée sur 9</td></tr>\n<tr><td>9</td><td>1</td><td>Arbre de sortie Ø 3</td><td>X2CrNiMo17-12-2</td><td>Méplat d'entraînement du boisseau</td></tr>\n<tr><td>10</td><td>2</td><td>Roulement rigide à billes 3 × 7</td><td></td><td>Avec flasques</td></tr>\n<tr><td>11</td><td>1</td><td>Anneau élastique pour arbre Ø 3</td><td>Acier</td><td></td></tr>\n<tr><td>12</td><td>1</td><td>Aimant</td><td>NdFeB</td><td>Collé sur 8</td></tr>\n<tr><td>13</td><td>1</td><td>Capteur à effet Hall</td><td></td><td>Sur carte rep. 14</td></tr>\n<tr><td>14</td><td>1</td><td>Carte électronique</td><td></td><td>Fixée sur 2 par 2 vis rep. 15</td></tr>\n<tr><td>15</td><td>4</td><td>Vis à tôle pour plastique Ø 1,8</td><td>Acier zingué</td><td>2 fixent la carte, 2 le couvercle ; couple 8 cN·m</td></tr>\n</tbody>\n</table>\n<p>Sur la coupe, l'arbre 9 est guidé par les deux roulements 10, logés l'un dans le carter 1, l'autre dans le couvercle 2 ; l'anneau 11 est en appui contre la bague intérieure du roulement côté carter ; un épaulement de 9 bute contre l'autre roulement. Le capteur 13 se trouve en face de l'aimant 12 lorsque l'arbre est en position 0°.</p>"
      },
      {
       "titre": "Exemple : analyse commentée",
       "contenu": "\n<p><strong>Chaîne de transmission.</strong> L'énergie entre par le moteur 3, dont l'arbre porte le pignon 4. Le pignon 4 entraîne la roue 5, solidaire du pignon 6 (pièce monobloc tournant librement sur l'axe fixe 7). Le pignon 6 entraîne la roue 8, chassée sur l'arbre de sortie 9, dont le méplat entraîne le boisseau de la vanne.</p>\n<p><strong>Rapport de réduction.</strong> r = (10 × 12) / (60 × 72) = 120 / 4 320 = 1/36. Un pas moteur vaut 360 / 20 = 18° ; en sortie, il correspond à 18 / 36 = 0,5°. La précision demandée de ± 1° est donc compatible avec la résolution, à condition que le jeu cumulé des deux engrenages reste inférieur à l'écart restant ; c'est un point à surveiller au montage.</p>\n<p><strong>Classes d'équivalence.</strong> Bâti : 1, 2, 7, 3 (corps du moteur), 14, 15, 13. Classe moteur : arbre du moteur et 4. Classe intermédiaire : 5-6. Classe de sortie : 8, 9, 12, 11 et les bagues intérieures des roulements 10.</p>\n<p><strong>Liaisons.</strong> La liaison sortie/bâti est une pivot : deux roulements à billes assurent le guidage en rotation ; la translation est arrêtée dans un sens par l'anneau élastique 11 et dans l'autre par l'épaulement de l'arbre 9. La liaison 5-6/bâti est une pivot glissant sur l'axe 7, dont la translation est limitée par le carter et le couvercle : il faut un ébat axial pour que l'ensemble tourne librement.</p>\n<p><strong>Fonction du capteur.</strong> Le moteur pas à pas fonctionne en boucle ouverte ; le couple aimant 12 et capteur 13 détecte la position 0° à la mise sous tension : c'est une <strong>prise d'origine</strong>, à partir de laquelle la position est connue par comptage des pas.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> cette lecture sert directement à préparer le démontage : on retire d'abord les vis 15 et le couvercle 2 avec la carte 14 (attention au capteur, manipulation en zone protégée contre les décharges électrostatiques), puis on extrait la classe intermédiaire, puis l'anneau 11 avant de sortir l'arbre 9.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne analyse cite toujours les repères, s'appuie sur ce que montre le dessin (surfaces, arrêts, matériaux) et relie chaque constat à une fonction ou à une conséquence pratique.</div>"
      },
      {
       "titre": "Pièges fréquents",
       "contenu": "\n<ul>\n<li>Lire les dimensions sur le dessin au lieu des cotes ou de la nomenclature, en oubliant l'échelle.</li>\n<li>Confondre deux pièces voisines parce que leurs hachures n'ont pas été observées attentivement.</li>\n<li>Oublier une pièce monobloc (roue et pignon d'une seule pièce) et compter une classe de trop.</li>\n<li>Placer un roulement entier dans une classe d'équivalence.</li>\n<li>Calculer un rapport de réduction en inversant roues menantes et menées.</li>\n<li>Répondre sans citer les repères, ce qui rend la réponse invérifiable.</li>\n<li>Négliger les observations de la nomenclature, qui contiennent souvent l'information décisive (« chassé », « collé », couple de serrage).</li>\n</ul>"
      }
     ],
     "points_cles": [
      "Le dossier technique rassemble présentation, cahier des charges, dessins, schémas et fiches de composants.",
      "Le cartouche donne l'échelle : les cotes inscrites sont toujours des dimensions réelles.",
      "La nomenclature associe chaque repère à un nombre, une désignation, une matière et des observations.",
      "On suit la chaîne de transmission du moteur à l'effecteur en citant les repères.",
      "Un tableau repère / désignation / classe / fonction prépare la plupart des réponses.",
      "Le rapport de réduction se calcule avec les roues menantes au numérateur.",
      "Les observations de la nomenclature précisent les modes d'assemblage et les couples.",
      "Chaque constat est relié à une fonction ou à une conséquence pour l'intervention."
     ],
     "lexique": [
      {
       "terme": "Dossier technique",
       "def": "Ensemble des documents décrivant un système, fournis pour l'étude."
      },
      {
       "terme": "Dossier réponses",
       "def": "Document à compléter par le candidat lors de l'épreuve."
      },
      {
       "terme": "Dessin d'ensemble",
       "def": "Représentation d'un mécanisme assemblé avec le repérage de toutes ses pièces."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste des pièces d'un ensemble avec leur repère, nombre, désignation et matière."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre d'un dessin regroupant titre, échelle, auteur, date et indice."
      },
      {
       "terme": "Éclaté",
       "def": "Vue en perspective montrant les pièces écartées les unes des autres dans l'ordre de montage."
      },
      {
       "terme": "Indice de révision",
       "def": "Lettre ou numéro qui identifie la version d'un document."
      },
      {
       "terme": "Prise d'origine",
       "def": "Opération qui établit une position de référence à partir de laquelle les déplacements sont comptés."
      },
      {
       "terme": "Pièce monobloc",
       "def": "Pièce réalisée d'un seul tenant qui assure plusieurs fonctions."
      }
     ]
    },
    {
     "id": "bmic-doc-schema-electronique",
     "titre": "Lire un schéma électronique et l'implantation d'une carte",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Reconnaître les symboles normalisés des composants usuels sur un schéma.",
      "Identifier les blocs fonctionnels d'un schéma structurel.",
      "Faire le lien entre schéma, nomenclature et plan d'implantation grâce aux repères topologiques.",
      "Prévoir les tensions et signaux attendus en des points de test.",
      "Préparer une vérification ou un dépannage à partir du schéma."
     ],
     "sections": [
      {
       "titre": "Les documents d'une carte électronique",
       "contenu": "\n<p>Une carte électronique est décrite par plusieurs documents complémentaires :</p>\n<table>\n<thead><tr><th>Document</th><th>Contenu</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Schéma structurel</td><td>Composants représentés par leurs symboles et reliés par des fils logiques (équipotentielles)</td><td>Comprendre le fonctionnement, prévoir les signaux</td></tr>\n<tr><td>Schéma fonctionnel (synoptique)</td><td>Blocs fonctionnels et flux entre eux</td><td>Vue d'ensemble, diagnostic</td></tr>\n<tr><td>Nomenclature de la carte</td><td>Repère, valeur, boîtier, référence fabricant de chaque composant</td><td>Approvisionnement, remplacement</td></tr>\n<tr><td>Plan d'implantation (sérigraphie)</td><td>Position et orientation des composants sur la carte</td><td>Localiser un composant ou un point de test</td></tr>\n<tr><td>Plan de câblage</td><td>Liaisons entre la carte et les autres éléments (moteur, capteurs, batterie)</td><td>Montage, raccordement</td></tr>\n</tbody>\n</table>\n<p>Le <strong>schéma structurel</strong> ne représente pas la disposition physique : deux composants voisins sur le schéma peuvent être éloignés sur la carte. Le lien entre les deux se fait par le <strong>repère topologique</strong>.</p>"
      },
      {
       "titre": "Symboles et conventions",
       "contenu": "\n<p>Les symboles suivent la norme internationale CEI 60617 ; on rencontre aussi des symboles d'usage américain dans les fiches des fabricants (résistance en zigzag au lieu d'un rectangle).</p>\n<table>\n<thead><tr><th>Composant</th><th>Description du symbole</th><th>Repère</th></tr></thead>\n<tbody>\n<tr><td>Résistance</td><td>Rectangle allongé (norme CEI) ou zigzag</td><td>R</td></tr>\n<tr><td>Condensateur</td><td>Deux traits parallèles ; l'un courbe ou marqué + s'il est polarisé</td><td>C</td></tr>\n<tr><td>Diode</td><td>Triangle pointant vers un trait (la cathode)</td><td>D</td></tr>\n<tr><td>DEL</td><td>Symbole de diode avec deux flèches sortantes</td><td>D ou LED</td></tr>\n<tr><td>Transistor MOSFET</td><td>Grille, drain, source ; flèche indiquant le canal N ou P</td><td>Q ou T</td></tr>\n<tr><td>Circuit intégré</td><td>Rectangle avec broches numérotées et nommées</td><td>U ou IC</td></tr>\n<tr><td>Quartz</td><td>Petit rectangle entre deux traits</td><td>Y ou X</td></tr>\n<tr><td>Moteur</td><td>Cercle contenant la lettre M</td><td>M</td></tr>\n<tr><td>Masse</td><td>Trait horizontal ou triangle pointé vers le bas</td><td>GND</td></tr>\n</tbody>\n</table>\n<p>Conventions importantes : les points de jonction (petit point plein) indiquent une connexion entre fils qui se croisent ; sans point, les fils se croisent sans contact. Les <strong>étiquettes de réseau</strong> (noms comme VBAT, 3V3, SDA, STEP) relient des points portant le même nom sans fil dessiné. Les alimentations sont souvent indiquées par une flèche ou une barre portant leur nom.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> deux fils qui se croisent sans point de jonction ne sont pas reliés. À l'inverse, deux points portant la même étiquette (par exemple 3V3) sont reliés même s'ils sont dessinés aux deux extrémités de la feuille. Oublier cette convention conduit à des diagnostics faux.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un schéma structurel. 1. Repérer l'alimentation d'entrée (batterie, connecteur) et suivre sa distribution : régulateurs, tensions produites, condensateurs de découplage. 2. Repérer le circuit de traitement (microcontrôleur) et son horloge. 3. Repérer les entrées : chaque capteur, sa résistance de tirage ou son conditionnement, la broche du microcontrôleur qui le lit. 4. Repérer les sorties de puissance : drivers, transistors, connecteurs d'actionneurs. 5. Repérer les communications : bus, afficheur, connecteur de programmation. 6. Délimiter chaque bloc au crayon et nommer sa fonction (alimenter, traiter, acquérir, distribuer, communiquer). 7. Pour chaque point utile, noter la grandeur attendue : tension continue, signal carré, niveau logique.</div>\n<p>Pour les composants inconnus, on consulte la fiche technique du fabricant à partir de la référence relevée dans la nomenclature : elle donne le brochage et le schéma d'application typique, que le concepteur reproduit souvent presque à l'identique.</p>\n<p>Sur la carte elle-même, la <strong>sérigraphie</strong> (marquage blanc sur le vernis) reprend les repères et les contours des composants. Le repérage de la broche 1 des circuits intégrés se fait par un point, un chanfrein ou une encoche sur le boîtier, et par un point ou un angle coupé sur la sérigraphie ; les autres broches se comptent ensuite dans le sens inverse des aiguilles d'une montre, vu de dessus. Les diodes portent un trait côté cathode, les condensateurs polarisés un signe + ou une bande. Sur les cartes très denses, la sérigraphie est parfois absente faute de place : seul le plan d'implantation permet alors de localiser un composant, d'où l'intérêt de l'avoir sous les yeux pendant tout dépannage.</p>"
      },
      {
       "titre": "Exemple : le document",
       "contenu": "\n<p>Le schéma décrit la carte de commande du motoréducteur de vanne. Il est présenté ici sous forme de description et de tableaux.</p>\n<p><strong>Bloc alimentation</strong> : le connecteur J1 reçoit 12 V. Le régulateur U1 (régulateur linéaire 3,3 V) produit la tension 3V3, avec C1 = 10 µF en entrée et C2 = 10 µF en sortie. La diode D1, placée en série juste après J1, protège contre l'inversion de polarité.</p>\n<p><strong>Bloc traitement</strong> : le microcontrôleur U2 est alimenté en 3V3, avec un condensateur C3 = 100 nF au plus près de chaque broche d'alimentation. Le connecteur J4 permet sa programmation.</p>\n<p><strong>Bloc commande moteur</strong> : le driver de moteur pas à pas U3 reçoit de U2 les signaux STEP (une impulsion par pas), DIR (sens) et EN (validation, actif à l'état bas). Ses sorties sont reliées au connecteur J2 du moteur. La résistance R5 fixe le courant maximal par bobine.</p>\n<p><strong>Bloc capteur</strong> : le capteur à effet Hall U4, alimenté en 3V3, a une sortie à collecteur ouvert reliée à une broche d'entrée de U2, avec une résistance de tirage R3 = 10 kΩ vers 3V3. La DEL D2 en série avec R4 = 130 Ω signale la mise sous tension.</p>\n<table>\n<thead><tr><th>Point de test</th><th>Réseau</th><th>Valeur attendue</th></tr></thead>\n<tbody>\n<tr><td>TP1</td><td>12 V après D1</td><td>Environ 11,3 V (12 V moins la chute de la diode)</td></tr>\n<tr><td>TP2</td><td>3V3</td><td>3,3 V ± 2 %</td></tr>\n<tr><td>TP3</td><td>STEP</td><td>Impulsions 0 / 3,3 V pendant un déplacement, 0 V au repos</td></tr>\n<tr><td>TP4</td><td>Sortie capteur Hall</td><td>3,3 V aimant absent, proche de 0 V aimant en face</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple : analyse commentée",
       "contenu": "\n<p><strong>Organisation fonctionnelle.</strong> J1, D1 et U1 réalisent la fonction alimenter ; U2 traite ; U4 avec R3 acquiert la position d'origine ; U3 distribue l'énergie au moteur ; D2 communique l'état sous tension. On retrouve exactement la chaîne d'information et la chaîne d'énergie du système.</p>\n<p><strong>Rôle de R3.</strong> Une sortie à collecteur ouvert ne peut que relier la ligne à la masse ; sans résistance de tirage, la ligne serait « flottante » quand l'aimant est absent. R3 impose 3,3 V au repos ; le capteur tire la ligne à 0 V quand l'aimant est détecté. La logique est donc inversée : 0 signifie « position origine atteinte ».</p>\n<p><strong>Vérification de R4.</strong> Avec une DEL de tension directe 2,0 V : I = (3,3 - 2,0) / 130 ≈ 10 mA, valeur courante pour une DEL de signalisation.</p>\n<p><strong>Préparation d'un dépannage.</strong> Symptôme : le moteur ne tourne jamais et la DEL D2 est allumée. L'alimentation 3V3 est donc présente (D2 allumée). On vérifie dans l'ordre : TP1 (alimentation 12 V de U3), les impulsions sur TP3 lors d'une commande (si absentes, problème de U2 ou du logiciel), le niveau de EN (doit être à 0 pour valider U3), puis les sorties de U3 vers J2 et la continuité des bobines du moteur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fiches de dépannage de SAV sont souvent construites exactement ainsi : une liste de points de test avec la valeur attendue et la conclusion à tirer de chaque écart. Le schéma permet de les comprendre et de les compléter quand un cas nouveau se présente.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> lire un schéma, c'est découper la carte en blocs fonctionnels, puis prévoir pour chaque point utile la grandeur attendue ; le dépannage consiste ensuite à comparer le mesuré à l'attendu en suivant le chemin du signal.</div>"
      },
      {
       "titre": "Pièges fréquents",
       "contenu": "\n<ul>\n<li>Confondre schéma structurel et plan d'implantation : chercher un composant sur la carte à l'emplacement où il est dessiné sur le schéma.</li>\n<li>Oublier qu'un signal peut être actif à l'état bas (souvent noté avec une barre au-dessus du nom, ou un suffixe N ou un symbole #).</li>\n<li>Mesurer une résistance sur la carte sous tension, ou en parallèle d'autres composants sans en tenir compte.</li>\n<li>Inverser l'orientation d'une diode ou d'un condensateur polarisé au remplacement : le plan d'implantation indique la cathode ou le +.</li>\n<li>Mesurer avec la pointe de touche en glissant et créer un court-circuit entre deux broches voisines d'un boîtier à pas fin.</li>\n</ul>"
      }
     ],
     "points_cles": [
      "Schéma structurel, synoptique, nomenclature, plan d'implantation et plan de câblage décrivent une carte.",
      "Les symboles suivent la norme CEI 60617 ; les fiches fabricants utilisent parfois des symboles américains.",
      "Sans point de jonction, deux fils qui se croisent ne sont pas reliés.",
      "Deux points portant la même étiquette de réseau sont reliés.",
      "Le repère topologique relie schéma, nomenclature et carte.",
      "On découpe le schéma en blocs : alimenter, traiter, acquérir, distribuer, communiquer.",
      "Pour chaque point de test, on prévoit la valeur attendue avant de mesurer.",
      "Une sortie à collecteur ouvert nécessite une résistance de tirage."
     ],
     "lexique": [
      {
       "terme": "Schéma structurel",
       "def": "Schéma représentant tous les composants d'une carte et leurs connexions."
      },
      {
       "terme": "Synoptique",
       "def": "Schéma fonctionnel simplifié représentant les blocs et leurs liaisons."
      },
      {
       "terme": "Équipotentielle",
       "def": "Ensemble de points reliés électriquement, donc au même potentiel."
      },
      {
       "terme": "Étiquette de réseau",
       "def": "Nom donné à une liaison sur un schéma, qui relie tous les points portant ce nom."
      },
      {
       "terme": "Plan d'implantation",
       "def": "Plan montrant la position et l'orientation des composants sur la carte."
      },
      {
       "terme": "Point de test",
       "def": "Pastille prévue sur une carte pour faciliter une mesure."
      },
      {
       "terme": "Condensateur de découplage",
       "def": "Condensateur placé près d'un circuit intégré pour stabiliser sa tension d'alimentation."
      },
      {
       "terme": "Résistance de tirage",
       "def": "Résistance qui impose un niveau logique par défaut à une ligne."
      },
      {
       "terme": "Collecteur ouvert",
       "def": "Type de sortie qui ne peut que relier la ligne à la masse."
      },
      {
       "terme": "Actif à l'état bas",
       "def": "Se dit d'un signal dont l'état actif correspond au niveau logique 0."
      }
     ]
    },
    {
     "id": "bmic-doc-fiche-composant",
     "titre": "Exploiter une fiche technique pour choisir un composant",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire la structure type d'une fiche technique de composant.",
      "Distinguer valeurs nominales, valeurs maximales absolues et valeurs typiques.",
      "Extraire d'une fiche les données nécessaires à une vérification.",
      "Comparer plusieurs références et justifier un choix de façon chiffrée.",
      "Rédiger une justification de choix argumentée."
     ],
     "sections": [
      {
       "titre": "Rôle de la fiche technique",
       "contenu": "\n<p>La <strong>fiche technique</strong> (en anglais datasheet) est le document du fabricant qui décrit un composant acheté : moteur, réducteur, roulement, capteur, circuit intégré, ressort, connecteur. Elle engage le fabricant sur les performances annoncées dans des conditions précisées.</p>\n<p>L'épreuve écrite du diplôme peut demander d'« identifier et justifier le choix d'un composant à partir de ses caractéristiques ». En entreprise, le technicien l'utilise pour vérifier une pièce reçue, trouver un composant de remplacement, régler un produit ou comprendre une panne.</p>\n<p>Structure habituelle :</p>\n<ul>\n<li>en-tête : référence, famille, description courte, principales caractéristiques et applications ;</li>\n<li><strong>tableau des caractéristiques</strong> : électriques, mécaniques, thermiques ;</li>\n<li><strong>valeurs maximales absolues</strong> (absolute maximum ratings) ;</li>\n<li><strong>courbes</strong> : couple-vitesse, réponse en fréquence, dérive en température ;</li>\n<li>plan d'encombrement coté et brochage ou repérage des fils ;</li>\n<li>conditions de montage, de stockage, de manipulation ;</li>\n<li><strong>codification</strong> des variantes (comment construire la référence complète).</li>\n</ul>"
      },
      {
       "titre": "Vocabulaire des valeurs",
       "contenu": "\n<table>\n<thead><tr><th>Terme</th><th>Signification</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Valeur nominale</td><td>Valeur de fonctionnement prévue en continu</td><td>Dimensionnement normal</td></tr>\n<tr><td>Valeur typique (typ.)</td><td>Valeur la plus probable, sans garantie</td><td>Estimation</td></tr>\n<tr><td>Valeur minimale et maximale (min., max.)</td><td>Limites garanties par le fabricant</td><td>Vérification d'un cas défavorable</td></tr>\n<tr><td>Valeur maximale absolue</td><td>Limite au-delà de laquelle le composant peut être détruit</td><td>À ne jamais atteindre, même brièvement</td></tr>\n<tr><td>Tolérance</td><td>Écart admissible sur une valeur (± 5 %)</td><td>Dispersion entre composants</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une valeur maximale absolue n'est pas une valeur de fonctionnement. Un capteur dont la tension maximale absolue est de 6 V ne doit pas être alimenté à 6 V : il est spécifié pour fonctionner, par exemple, entre 2,7 et 5,5 V. Dimensionner à la limite absolue, c'est accepter des défaillances.</div>\n<p>Il faut aussi lire les <strong>conditions de mesure</strong> associées à chaque valeur : une constante de couple donnée à 25 °C, une durée de vie de roulement donnée pour une charge et une vitesse précises, une précision de capteur donnée sur une plage de température limitée.</p>"
      },
      {
       "titre": "Méthode de lecture et de choix",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir un composant à partir de fiches techniques. 1. Extraire du cahier des charges les exigences chiffrées : couple, vitesse, tension disponible, encombrement, durée de vie, environnement. 2. Calculer les grandeurs dérivées nécessaires (couple au moteur à partir du couple en sortie, vitesse d'entrée à partir de la vitesse de sortie et du rapport). 3. Dans chaque fiche, relever les valeurs correspondantes, en vérifiant les unités et les conditions. 4. Éliminer les références qui ne satisfont pas une exigence obligatoire. 5. Comparer les références restantes sur les critères secondaires (marge, consommation, coût, encombrement). 6. Rédiger la justification en reprenant chaque critère avec ses deux valeurs : exigence et caractéristique.</div>\n<p>Une bonne pratique est de garder une <strong>marge</strong> : on ne fait pas travailler un moteur à 100 % de son couple nominal, ni un roulement à sa charge limite. Les marges usuelles dépendent du secteur ; la documentation de l'entreprise les fixe souvent.</p>\n<p>La lecture des <strong>courbes</strong> complète celle des tableaux. Sur la caractéristique couple-vitesse d'un moteur, on place le point de fonctionnement demandé (couple, vitesse) : il doit se trouver sous la droite de la tension d'alimentation et dans la zone de fonctionnement continu, souvent grisée ou délimitée par le couple nominal ; la zone au-delà n'est admise qu'en régime intermittent. Pour un capteur, la courbe de dérive en température indique l'erreur supplémentaire hors de 25 °C. Pour un roulement, les tableaux de charge dynamique de base permettent au bureau d'études de calculer une durée de vie. Enfin, la <strong>codification</strong> de la référence est à lire avec soin : un seul caractère différent peut changer la tension du bobinage, le type de connecteur ou la longueur d'arbre, et une commande erronée immobilise une production.</p>"
      },
      {
       "titre": "Exemple : le document",
       "contenu": "\n<p>Le motoréducteur de l'analyseur doit être remplacé par une version à courant continu avec réducteur planétaire et codeur. Exigences : vitesse de sortie au moins 15 tr/min, couple de sortie en continu 60 mN·m, alimentation 12 V, diamètre maximal 16 mm, rendement global le plus élevé possible pour limiter l'échauffement.</p>\n<p>Extrait de la fiche du moteur (valeurs à 25 °C) :</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Moteur M-12</th></tr></thead>\n<tbody>\n<tr><td>Tension nominale</td><td>12 V</td></tr>\n<tr><td>Vitesse à vide</td><td>8 000 tr/min</td></tr>\n<tr><td>Couple nominal (max. en continu)</td><td>3,0 mN·m</td></tr>\n<tr><td>Vitesse au couple nominal</td><td>6 500 tr/min</td></tr>\n<tr><td>Constante de couple</td><td>14 mN·m/A</td></tr>\n<tr><td>Diamètre</td><td>16 mm</td></tr>\n</tbody>\n</table>\n<p>Extrait de la fiche des réducteurs planétaires de diamètre 16 mm compatibles :</p>\n<table>\n<thead><tr><th>Réduction</th><th>Nombre d'étages</th><th>Rendement max.</th><th>Couple max. en continu en sortie</th></tr></thead>\n<tbody>\n<tr><td>19:1</td><td>2</td><td>0,80</td><td>0,10 N·m</td></tr>\n<tr><td>84:1</td><td>3</td><td>0,70</td><td>0,30 N·m</td></tr>\n<tr><td>370:1</td><td>4</td><td>0,60</td><td>0,30 N·m</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple : analyse commentée",
       "contenu": "\n<p><strong>Vitesse de sortie.</strong> Au couple nominal, le moteur tourne à 6 500 tr/min. Avec 19:1 : 6 500 / 19 ≈ 342 tr/min ; avec 84:1 : 6 500 / 84 ≈ 77 tr/min ; avec 370:1 : 6 500 / 370 ≈ 17,6 tr/min. Les trois dépassent 15 tr/min.</p>\n<p><strong>Couple disponible en sortie</strong> (moteur au couple nominal) : C<sub>s</sub> = C<sub>m</sub> × i × η, où i est la réduction.</p>\n<ul>\n<li>19:1 : 3,0 × 19 × 0,80 ≈ 45,6 mN·m, inférieur aux 60 mN·m exigés : <strong>éliminé</strong>.</li>\n<li>84:1 : 3,0 × 84 × 0,70 ≈ 176 mN·m, supérieur à 60 mN·m ; le réducteur admet 300 mN·m : <strong>convient</strong>.</li>\n<li>370:1 : 3,0 × 370 × 0,60 ≈ 666 mN·m ; mais le réducteur n'admet que 300 mN·m en continu : il conviendrait pour 60 mN·m, mais avec un rendement plus faible.</li>\n</ul>\n<p><strong>Couple demandé au moteur avec la réduction 84:1</strong> : C<sub>m</sub> = 60 / (84 × 0,70) ≈ 1,02 mN·m, soit environ un tiers du couple nominal : bonne marge thermique. Courant correspondant (hors courant à vide) : 1,02 / 14 ≈ 0,073 A.</p>\n<p><strong>Rédaction de la justification.</strong> « Le réducteur 84:1 est retenu. Il fournit une vitesse de sortie d'environ 77 tr/min, supérieure aux 15 tr/min exigés, et un couple de sortie disponible de 176 mN·m pour 60 mN·m demandés, sans dépasser le couple admissible du réducteur (300 mN·m). Le moteur ne travaille qu'au tiers de son couple nominal, ce qui limite l'échauffement. Son rendement de 0,70 est meilleur que celui du réducteur 370:1 (0,60), qui conviendrait aussi mais consommerait davantage pour le même service. Le réducteur 19:1 est écarté car son couple de sortie de 45,6 mN·m est insuffisant. »</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le choix d'une nouvelle référence n'est jamais décidé seul par le technicien : il propose, chiffres à l'appui, et le bureau d'études valide, car un changement de composant modifie le dossier du produit et peut nécessiter de nouveaux essais.</div>"
      },
      {
       "titre": "Pièges fréquents",
       "contenu": "\n<ul>\n<li>Confondre le couple de démarrage (ou de blocage), très élevé, avec le couple nominal admissible en continu.</li>\n<li>Oublier le rendement du réducteur dans le calcul du couple de sortie.</li>\n<li>Mélanger les unités : mN·m, cN·m et N·m (1 N·m = 100 cN·m = 1 000 mN·m).</li>\n<li>Retenir la valeur typique comme une garantie.</li>\n<li>Négliger les conditions de mesure (température, tension) indiquées en tête de tableau.</li>\n<li>Oublier de vérifier l'encombrement et la compatibilité mécanique (diamètre d'arbre, fixation, connecteur).</li>\n<li>Justifier sans chiffres : « ce moteur est plus puissant » n'est pas une justification.</li>\n<li>Utiliser une fiche d'une ancienne version : les fabricants mettent à jour leurs fiches, et la date ou l'indice figure généralement en pied de page.</li>\n<li>Oublier qu'un composant de remplacement doit aussi être compatible avec la commande existante : tension, courant, connecteur et sens de rotation.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une justification de choix complète cite pour chaque critère l'exigence et la valeur du composant, conclut critère par critère, puis explique pourquoi les autres solutions sont écartées.</div>"
      }
     ],
     "points_cles": [
      "La fiche technique engage le fabricant sur des performances dans des conditions précisées.",
      "Valeur nominale, typique, min./max. et maximale absolue ont des sens différents.",
      "Une valeur maximale absolue ne doit jamais être atteinte en fonctionnement.",
      "On calcule d'abord les grandeurs dérivées du cahier des charges, puis on compare.",
      "Couple de sortie d'un motoréducteur : Cs = Cm × i × η.",
      "On élimine d'abord les références qui ne satisfont pas une exigence obligatoire.",
      "On garde une marge par rapport aux valeurs admissibles.",
      "Une justification est chiffrée, critère par critère, et explique les rejets."
     ],
     "lexique": [
      {
       "terme": "Fiche technique",
       "def": "Document du fabricant décrivant les caractéristiques et conditions d'emploi d'un composant."
      },
      {
       "terme": "Valeur nominale",
       "def": "Valeur de fonctionnement prévue en service continu."
      },
      {
       "terme": "Valeur typique",
       "def": "Valeur la plus probable d'une caractéristique, non garantie."
      },
      {
       "terme": "Valeur maximale absolue",
       "def": "Limite au-delà de laquelle le composant risque d'être détruit."
      },
      {
       "terme": "Motoréducteur",
       "def": "Ensemble d'un moteur et d'un réducteur assemblés."
      },
      {
       "terme": "Réduction",
       "def": "Rapport entre la vitesse d'entrée et la vitesse de sortie d'un réducteur (inverse du rapport de transmission)."
      },
      {
       "terme": "Couple de démarrage",
       "def": "Couple fourni par un moteur à vitesse nulle, sous tension nominale."
      },
      {
       "terme": "Marge",
       "def": "Écart volontaire entre la sollicitation réelle et la limite admissible."
      },
      {
       "terme": "Plan d'encombrement",
       "def": "Dessin coté donnant les dimensions extérieures et les fixations d'un composant."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Documents d'intervention et de suivi",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bmic-doc-chronogramme-procedure",
     "titre": "Des documents de fonctionnement à la procédure d'intervention",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Lire un chronogramme et un grafcet décrivant le cycle d'un système.",
      "Déterminer l'état des actionneurs et des capteurs à chaque phase du fonctionnement.",
      "Identifier les conditions de sécurité et les états à obtenir avant une intervention.",
      "Rédiger une procédure chronologique et détaillée de démontage, de montage, de mesure ou de réglage.",
      "Vérifier la cohérence d'une procédure avec la documentation."
     ],
     "sections": [
      {
       "titre": "Ce que demande l'épreuve",
       "contenu": "\n<p>La définition de l'épreuve écrite prévoit que le candidat exploite des <strong>documents fonctionnels ou temporels</strong> pour définir les conditions de fonctionnement de chaque phase, puis en déduise une <strong>procédure détaillée et chronologique</strong> de montage, de démontage, de mesure ou de réglage. C'est le cœur de la préparation d'une intervention : avant de toucher au produit, on sait dans quel état il doit être, dans quel ordre agir et quoi vérifier.</p>\n<p>Les documents temporels les plus courants sont :</p>\n<ul>\n<li>le <strong>chronogramme</strong> : graphique qui représente l'évolution de plusieurs signaux (capteurs, ordres, actionneurs) en fonction du temps, sur des lignes superposées ;</li>\n<li>le <strong>grafcet</strong> (norme NF EN 60848) : graphe qui décrit la succession des étapes d'un fonctionnement séquentiel, les actions associées et les conditions de passage (transitions) ;</li>\n<li>le <strong>diagramme d'états</strong> SysML, proche du grafcet dans son esprit ;</li>\n<li>le <strong>tableau de phases</strong> : liste des phases avec l'état de chaque élément.</li>\n</ul>"
      },
      {
       "titre": "Lire un chronogramme et un grafcet",
       "contenu": "\n<p>Sur un <strong>chronogramme</strong>, chaque ligne représente un signal ; un niveau haut signifie actif (1), un niveau bas inactif (0), sauf indication contraire. On lit verticalement pour connaître l'état de tous les signaux à un instant, horizontalement pour voir l'évolution d'un signal. Les flèches ou les traits pointillés verticaux indiquent les relations de cause à effet (le front montant d'un capteur déclenche l'arrêt d'un moteur).</p>\n<p>Un <strong>grafcet</strong> comporte :</p>\n<ul>\n<li>des <strong>étapes</strong> (carrés numérotés, l'étape initiale en double carré), active ou inactive ;</li>\n<li>des <strong>actions</strong> (rectangles à droite des étapes), exécutées tant que l'étape est active ;</li>\n<li>des <strong>transitions</strong> (petits traits horizontaux sur les liaisons) portant une <strong>réceptivité</strong> : condition logique qui, lorsqu'elle est vraie et que l'étape précédente est active, fait évoluer le grafcet ;</li>\n<li>des liaisons orientées, de haut en bas par défaut.</li>\n</ul>\n<p>Notations utiles : une barre au-dessus d'une variable signifie « non » ; ↑a désigne le front montant de a ; « 2 s/X3 » désigne une temporisation de 2 secondes après l'activation de l'étape 3.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une action n'est maintenue que tant que son étape est active. Si le moteur doit tourner pendant les étapes 2 et 3, l'action doit figurer dans les deux étapes (ou être mémorisée). Lire un grafcet en supposant que l'action « continue » après le changement d'étape conduit à des procédures fausses.</div>"
      },
      {
       "titre": "Méthode : de la description fonctionnelle à la procédure",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger une procédure d'intervention. 1. Identifier le but : démonter quel élément ? mesurer quelle grandeur ? régler quel paramètre ? 2. Dans les documents temporels, repérer la phase où le système est dans l'état requis (moteur arrêté, origine atteinte, ressort détendu, alimentation coupée). 3. Définir l'état initial à obtenir et les conditions de sécurité : consignation de l'énergie électrique, décharge des énergies mécaniques (ressort, inertie), protection contre les décharges électrostatiques. 4. Dans le dossier technique, déterminer l'ordre des opérations : ce qui doit être retiré avant quoi, sans forcer. 5. Pour chaque opération, préciser : le verbe d'action, la pièce (repère), l'outil, la valeur (couple, cote, quantité de lubrifiant) et le contrôle associé. 6. Terminer par les vérifications finales et la remise en service. 7. Relire la procédure en se demandant si un opérateur qui ne connaît pas le produit pourrait l'appliquer sans erreur.</div>\n<p>Une procédure se présente généralement sous forme de tableau numéroté : n°, opération, repères concernés, outillage ou moyen, valeurs et points de contrôle, sécurité.</p>"
      },
      {
       "titre": "Exemple : le document",
       "contenu": "\n<p>Le motoréducteur de vanne fonctionne selon le cycle suivant, décrit par un grafcet de fonctionnement normal :</p>\n<table>\n<thead><tr><th>Étape</th><th>Action</th><th>Réceptivité vers l'étape suivante</th></tr></thead>\n<tbody>\n<tr><td>0 (initiale)</td><td>Aucune (driver désactivé, EN = 1)</td><td>Mise sous tension et ordre de prise d'origine</td></tr>\n<tr><td>1</td><td>Moteur sens anti-horaire, vitesse lente (EN = 0, DIR = 0, STEP actif)</td><td>Capteur Hall actif (sortie à 0)</td></tr>\n<tr><td>2</td><td>Moteur arrêté, compteur de pas remis à zéro</td><td>Ordre d'ouverture</td></tr>\n<tr><td>3</td><td>Moteur sens horaire, 180 pas (soit 90° en sortie)</td><td>Compteur = 180</td></tr>\n<tr><td>4</td><td>Moteur arrêté, maintenu sous couple (EN = 0)</td><td>Ordre de fermeture</td></tr>\n<tr><td>5</td><td>Moteur sens anti-horaire, 180 pas</td><td>Compteur = 0, retour à l'étape 2</td></tr>\n</tbody>\n</table>\n<p>Le chronogramme associé montre qu'à l'étape 4 le signal EN reste à 0 : le driver alimente les bobines pour maintenir la vanne ouverte contre la pression du fluide. Le dossier technique indique par ailleurs que le boisseau de la vanne est rappelé vers la fermeture par un ressort de torsion lorsque le moteur n'est plus alimenté.</p>\n<p>Demande : rédiger la procédure de remplacement de la roue intermédiaire 5-6, puis de vérification du positionnement à 90°.</p>"
      },
      {
       "titre": "Exemple : analyse et procédure modèle",
       "contenu": "\n<p><strong>Analyse des états.</strong> L'intervention doit se faire vanne fermée et ressort détendu : c'est l'état obtenu à l'étape 2 (moteur arrêté en position origine). Si l'on coupe l'alimentation à l'étape 4, le ressort ramène brutalement la vanne et entraîne tout le train d'engrenages en sens inverse, ce qui peut endommager les dentures en plastique. On commande donc la fermeture et on attend l'étape 2 avant de couper.</p>\n<table>\n<thead><tr><th>N°</th><th>Opération</th><th>Repères</th><th>Moyens</th><th>Valeurs et contrôles</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Commander la fermeture, attendre l'arrêt en position origine</td><td>Système</td><td>Interface de commande</td><td>Vanne fermée, moteur arrêté</td></tr>\n<tr><td>2</td><td>Couper et consigner l'alimentation 12 V, débrancher J1</td><td>J1</td><td>Cadenas ou étiquette de consignation</td><td>Absence de tension vérifiée sur TP1</td></tr>\n<tr><td>3</td><td>Se raccorder à la terre, poser le produit sur le plan dissipatif</td><td></td><td>Bracelet testé</td><td>Testeur de bracelet : bon</td></tr>\n<tr><td>4</td><td>Dévisser les 2 vis du couvercle et les 2 vis de carte, retirer le couvercle avec la carte</td><td>15, 2, 14</td><td>Tournevis cruciforme taille 0</td><td>Ne pas tirer sur les fils du moteur ; ranger les vis</td></tr>\n<tr><td>5</td><td>Extraire la roue intermédiaire défectueuse en la tirant suivant l'axe</td><td>5-6, 7</td><td>Brucelles à embouts plastiques</td><td>Ne pas déplacer l'axe 7 chassé</td></tr>\n<tr><td>6</td><td>Nettoyer l'axe et le logement, examiner les dentures voisines</td><td>7, 4, 8</td><td>Soufflette, binoculaire</td><td>Aucun débris, dentures 4 et 8 intactes</td></tr>\n<tr><td>7</td><td>Déposer le lubrifiant prescrit sur l'axe, monter la roue neuve</td><td>7, 5-6</td><td>Huilier, graisse prescrite</td><td>Quantité selon la gamme ; engrènement correct avec 4 et 8</td></tr>\n<tr><td>8</td><td>Reposer couvercle et carte, serrer les 4 vis</td><td>2, 14, 15</td><td>Tournevis dynamométrique</td><td>8 cN·m, serrage en croix</td></tr>\n<tr><td>9</td><td>Vérifier la rotation libre en faisant tourner l'arbre de sortie à la main sur 90°</td><td>9</td><td>Manuel</td><td>Pas de point dur ; ébat de 5-6 présent</td></tr>\n<tr><td>10</td><td>Rebrancher, mettre sous tension, lancer une prise d'origine</td><td>J1</td><td>Interface</td><td>Arrêt sur le capteur Hall</td></tr>\n<tr><td>11</td><td>Commander une ouverture, mesurer l'angle de sortie</td><td>9</td><td>Rapporteur à vernier ou disque gradué sur l'arbre</td><td>90° ± 1°</td></tr>\n<tr><td>12</td><td>Réaliser 3 cycles complets, renseigner la fiche d'intervention</td><td></td><td>Fiche</td><td>Pas de perte de pas, pas de bruit anormal</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une procédure rédigée par un technicien est relue et testée par un collègue avant d'être diffusée ; les remarques de terrain (vis difficiles d'accès, pièce qui tombe au démontage) sont intégrées dans la version suivante, avec un nouvel indice.</div>"
      },
      {
       "titre": "Pièges fréquents",
       "contenu": "\n<ul>\n<li>Oublier les énergies résiduelles : ressort armé, condensateur chargé, inertie, pression d'un fluide.</li>\n<li>Couper l'alimentation dans une phase où le système est maintenu sous couple.</li>\n<li>Écrire des opérations vagues (« démonter le réducteur ») au lieu d'opérations précises avec repères, outils et valeurs.</li>\n<li>Omettre les contrôles intermédiaires et ne vérifier qu'à la fin.</li>\n<li>Oublier la remise en service et les essais fonctionnels.</li>\n<li>Ne pas respecter l'ordre imposé par la structure : vouloir sortir une pièce avant d'avoir retiré celle qui la bloque.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne procédure part de l'état du système donné par les documents temporels, sécurise toutes les énergies, suit l'ordre imposé par la structure et associe à chaque opération un repère, un moyen, une valeur et un contrôle.</div>"
      }
     ],
     "points_cles": [
      "Chronogramme, grafcet, diagramme d'états et tableau de phases décrivent le fonctionnement dans le temps.",
      "Le grafcet suit la norme NF EN 60848 : étapes, actions, transitions et réceptivités.",
      "Une action n'est maintenue que tant que son étape est active.",
      "La procédure part de l'état du système à obtenir avant l'intervention.",
      "Toutes les énergies, électriques et mécaniques, sont consignées ou déchargées.",
      "Chaque opération précise verbe, repère, outil, valeur et contrôle.",
      "La procédure se termine par la remise en service et des essais fonctionnels.",
      "Une procédure est relue, testée et identifiée par un indice."
     ],
     "lexique": [
      {
       "terme": "Chronogramme",
       "def": "Représentation de l'évolution de plusieurs signaux en fonction du temps."
      },
      {
       "terme": "Grafcet",
       "def": "Outil graphique normalisé décrivant le comportement séquentiel d'un système."
      },
      {
       "terme": "Étape",
       "def": "Situation stable d'un grafcet à laquelle sont associées des actions."
      },
      {
       "terme": "Transition",
       "def": "Passage possible entre étapes, franchi lorsque sa réceptivité est vraie."
      },
      {
       "terme": "Réceptivité",
       "def": "Condition logique associée à une transition."
      },
      {
       "terme": "Front montant",
       "def": "Passage d'un signal de l'état 0 à l'état 1."
      },
      {
       "terme": "Procédure",
       "def": "Description ordonnée et détaillée des opérations d'une intervention."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble des opérations qui mettent et maintiennent un équipement hors énergie en sécurité."
      },
      {
       "terme": "Énergie résiduelle",
       "def": "Énergie stockée qui subsiste après coupure de l'alimentation (ressort, condensateur, pression)."
      }
     ]
    },
    {
     "id": "bmic-doc-controle-suivi",
     "titre": "Exploiter les documents de contrôle et de suivi qualité",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les documents de contrôle et de suivi utilisés en production et en SAV.",
      "Lire une fiche de contrôle et conclure sur la conformité d'un produit.",
      "Analyser une carte de contrôle et détecter une dérive.",
      "Exploiter un relevé de défauts pour proposer des actions de progrès.",
      "Rédiger un compte rendu écrit clair et exploitable."
     ],
     "sections": [
      {
       "titre": "Les documents de contrôle et de suivi",
       "contenu": "\n<p>Le référentiel associe à l'épreuve écrite la compétence « renseigner des documents et rendre compte par écrit ». Les documents concernés sont nombreux :</p>\n<table>\n<thead><tr><th>Document</th><th>Contenu</th><th>Qui le renseigne</th></tr></thead>\n<tbody>\n<tr><td>Fiche de contrôle (ou gamme de contrôle)</td><td>Liste des caractéristiques à contrôler, moyens, limites, fréquence</td><td>Opérateur, contrôleur</td></tr>\n<tr><td>Fiche d'autocontrôle</td><td>Résultats des contrôles faits au poste</td><td>Opérateur</td></tr>\n<tr><td>Carte de contrôle</td><td>Suivi statistique d'une caractéristique dans le temps</td><td>Opérateur, technicien</td></tr>\n<tr><td>Relevé de défauts</td><td>Comptage des défauts par type, par période</td><td>Poste de test, qualité</td></tr>\n<tr><td>Fiche de non-conformité</td><td>Description d'un écart, décision, actions</td><td>Opérateur, qualité</td></tr>\n<tr><td>Fiche d'intervention SAV</td><td>Symptômes, diagnostic, pièces, tests, temps</td><td>Technicien SAV</td></tr>\n</tbody>\n</table>\n<p>Tous ont en commun d'être des <strong>enregistrements</strong> : ils prouvent ce qui a été fait. Ils doivent être lisibles, complets, datés, signés et ne jamais être corrigés par effacement (on barre d'un trait, on écrit la valeur correcte et on paraphe).</p>\n<p>De plus en plus, ces enregistrements sont saisis directement dans un logiciel de suivi de production ou de gestion de la qualité, à partir d'une tablette au poste ou des instruments de mesure connectés, qui transmettent eux-mêmes les valeurs. La logique reste la même : le logiciel affiche les limites, colore les valeurs hors tolérance et peut bloquer la suite des opérations tant qu'une non-conformité n'a pas été traitée. Le technicien doit donc savoir interpréter ces écrans exactement comme un document papier, et vérifier que l'instrument connecté est bien celui qui est déclaré. Dans tous les cas, la durée de conservation des enregistrements est fixée par l'entreprise et par les exigences du secteur ; elle peut être de nombreuses années pour un dispositif médical ou une pièce aéronautique.</p>"
      },
      {
       "titre": "Lire une fiche de contrôle",
       "contenu": "\n<p>Une fiche de contrôle comporte en général : l'identification du produit et de l'opération, un tableau des caractéristiques (numéro, désignation, valeur nominale, tolérances, moyen de contrôle, fréquence), la <strong>classe</strong> de chaque caractéristique, et une zone de résultats.</p>\n<p>La <strong>classification des caractéristiques</strong> indique leur importance : on rencontre souvent les classes « critique » (sécurité ou fonction vitale), « majeure » (fonction) et « mineure » (aspect), avec des symboles propres à chaque entreprise ou client. Une caractéristique critique est contrôlée à 100 % ; une mineure peut l'être par prélèvement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conclure sur une fiche de contrôle. 1. Vérifier l'identification : référence, indice, numéro de lot ou de série. 2. Pour chaque caractéristique, calculer les limites (nominale ± tolérance) si elles ne sont pas écrites. 3. Comparer chaque valeur mesurée aux limites ; marquer conforme (C) ou non conforme (NC). 4. Vérifier que le moyen utilisé est celui prescrit et qu'il est identifié. 5. Conclure globalement : une seule caractéristique NC rend la pièce ou le produit NC. 6. Si NC : identifier, isoler, rédiger la fiche de non-conformité.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une valeur égale à une limite est conforme (la tolérance inclut ses bornes), mais elle doit alerter : le procédé produit en bord de tolérance. Une valeur mesurée tout près d'une limite, à l'intérieur de l'incertitude de mesure, ne permet pas de conclure avec certitude ; la règle de décision de l'entreprise s'applique.</div>"
      },
      {
       "titre": "Exemple : le document",
       "contenu": "\n<p>Atelier de décolletage, arbre de sortie rep. 9 du motoréducteur. Caractéristique suivie sur carte de contrôle : diamètre de portée de roulement Ø 3 mm, tolérance 0 / -0,006 mm (limites 2,994 et 3,000 mm). Prélèvement de 5 pièces toutes les heures, mesure au palpeur inductif étalonné. Limites de contrôle calculées sur la période de référence : moyenne, ligne centrale 2,9970 mm, limite supérieure 2,9985 mm, limite inférieure 2,9955 mm ; étendue, limite supérieure 0,0028 mm.</p>\n<table>\n<thead><tr><th>Heure</th><th>Moyenne (mm)</th><th>Étendue (mm)</th></tr></thead>\n<tbody>\n<tr><td>8 h</td><td>2,9968</td><td>0,0012</td></tr>\n<tr><td>9 h</td><td>2,9971</td><td>0,0010</td></tr>\n<tr><td>10 h</td><td>2,9973</td><td>0,0014</td></tr>\n<tr><td>11 h</td><td>2,9974</td><td>0,0011</td></tr>\n<tr><td>12 h</td><td>2,9976</td><td>0,0013</td></tr>\n<tr><td>13 h</td><td>2,9978</td><td>0,0012</td></tr>\n<tr><td>14 h</td><td>2,9980</td><td>0,0015</td></tr>\n<tr><td>15 h</td><td>2,9983</td><td>0,0013</td></tr>\n</tbody>\n</table>\n<p>Relevé de défauts du test final du motoréducteur sur un mois (1 200 produits testés) : bruit anormal 18 ; prise d'origine non trouvée 7 ; angle hors tolérance 5 ; consommation excessive 3 ; défaut d'aspect 2.</p>"
      },
      {
       "titre": "Exemple : analyse commentée",
       "contenu": "\n<p><strong>Carte de contrôle.</strong> Toutes les moyennes sont entre les limites de contrôle et toutes les pièces sont dans la tolérance. Pourtant, les huit moyennes augmentent régulièrement, de 2,9968 à 2,9983 mm : c'est une <strong>tendance</strong> (au moins 7 points consécutifs en augmentation). Une cause spéciale agit. L'étendue reste stable, donc la dispersion n'a pas changé : le procédé se décale sans se dérégler. Pour un diamètre extérieur tourné, une augmentation progressive est typique de l'<strong>usure de l'outil</strong> (ou d'un échauffement de la machine). À ce rythme (environ 0,0002 mm par heure), la limite de contrôle supérieure sera franchie dans l'heure et la tolérance supérieure de 3,000 mm approchée peu après.</p>\n<p>Décision : arrêter, contrôler l'arête de l'outil, appliquer une correction d'usure ou changer la plaquette selon la procédure, recentrer sur 2,9970 mm, noter l'action sur la carte à 15 h, et vérifier les prochains prélèvements.</p>\n<p><strong>Relevé de défauts.</strong> Classés par ordre décroissant, les défauts forment le diagramme de Pareto suivant :</p>\n<table>\n<thead><tr><th>Défaut</th><th>Nombre</th><th>Pourcentage</th><th>Cumul</th></tr></thead>\n<tbody>\n<tr><td>Bruit anormal</td><td>18</td><td>51 %</td><td>51 %</td></tr>\n<tr><td>Prise d'origine non trouvée</td><td>7</td><td>20 %</td><td>71 %</td></tr>\n<tr><td>Angle hors tolérance</td><td>5</td><td>14 %</td><td>86 %</td></tr>\n<tr><td>Consommation excessive</td><td>3</td><td>9 %</td><td>94 %</td></tr>\n<tr><td>Aspect</td><td>2</td><td>6 %</td><td>100 %</td></tr>\n</tbody>\n</table>\n<p>Total : 35 défauts sur 1 200 produits, soit environ 2,9 %. Les deux premiers types représentent plus des deux tiers des défauts : l'effort de progrès doit commencer par le bruit anormal. On peut proposer un diagramme d'Ishikawa sur le bruit (matière : roues hors tolérance ; méthode : quantité de graisse ; moyen : chassage de la roue 8 ; main-d'œuvre : ébat de la roue 5-6 non vérifié ; milieu : poussières) et vérifier en priorité le lien avec les arbres de sortie produits en fin de dérive.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> ce type d'analyse est présenté en réunion de groupe de progrès. Le technicien y apporte des faits : chiffres, photos des pièces, mesures. « Je pense que c'est la graisse » n'a de poids qu'accompagné d'un constat vérifiable.</div>"
      },
      {
       "titre": "Rédiger un compte rendu",
       "contenu": "\n<p>Rendre compte par écrit est une compétence évaluée. Un compte rendu technique efficace répond aux questions : quoi, où, quand, constat, cause, action, résultat, suite à donner. Il utilise des phrases courtes, des valeurs chiffrées avec unités et les repères des pièces.</p>\n<p>Exemple modèle de compte rendu sur la carte de contrôle : « Le 12 mars, poste de décolletage n° 3, arbre de sortie rep. 9. La carte de contrôle du diamètre Ø 3 0/-0,006 montre une tendance croissante de la moyenne sur huit prélèvements consécutifs (2,9968 à 2,9983 mm), étendue stable. Les pièces restent conformes. Cause probable : usure de l'outil de finition. Action à 15 h 10 : changement de plaquette et recentrage ; moyenne du prélèvement suivant : 2,9969 mm. Les pièces produites entre 14 h et 15 h ont été recontrôlées à 100 % : toutes conformes. Proposition : avancer la fréquence de changement de plaquette de 8 h à 6 h de production. »</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un compte rendu doit permettre à un lecteur absent de comprendre la situation, de vérifier les faits et de décider. Il distingue clairement ce qui est constaté, ce qui est supposé et ce qui a été fait.</div>"
      },
      {
       "titre": "Pièges fréquents",
       "contenu": "\n<ul>\n<li>Confondre limites de contrôle et limites de tolérance, et conclure « tout va bien » parce que les pièces sont conformes.</li>\n<li>Ne regarder que le dernier point d'une carte de contrôle au lieu de son évolution.</li>\n<li>Oublier l'étendue : un procédé peut rester centré tout en se dispersant davantage.</li>\n<li>Calculer les pourcentages d'un Pareto sur le nombre de produits au lieu du nombre total de défauts, sans le préciser.</li>\n<li>Rédiger un compte rendu sans valeurs, sans date ou sans repères.</li>\n<li>Corriger une valeur par effacement sur un enregistrement qualité.</li>\n</ul>"
      }
     ],
     "points_cles": [
      "Fiches de contrôle, cartes de contrôle, relevés de défauts et fiches d'intervention sont des enregistrements.",
      "Un enregistrement ne se corrige jamais par effacement.",
      "Les caractéristiques sont classées selon leur importance, qui fixe la fréquence de contrôle.",
      "Une seule caractéristique non conforme rend le produit non conforme.",
      "Sur une carte de contrôle, une tendance signale une cause spéciale même si les pièces sont conformes.",
      "L'étendue renseigne sur la dispersion, la moyenne sur le centrage.",
      "Le Pareto oriente l'effort vers les défauts les plus fréquents.",
      "Un compte rendu distingue constats, hypothèses et actions, avec des valeurs chiffrées."
     ],
     "lexique": [
      {
       "terme": "Enregistrement",
       "def": "Document qui apporte la preuve d'une activité réalisée ou d'un résultat obtenu."
      },
      {
       "terme": "Fiche de contrôle",
       "def": "Document listant les caractéristiques à contrôler, les moyens, les limites et les fréquences."
      },
      {
       "terme": "Classe de caractéristique",
       "def": "Niveau d'importance d'une caractéristique (critique, majeure, mineure)."
      },
      {
       "terme": "Tendance",
       "def": "Suite de points consécutifs évoluant toujours dans le même sens sur une carte de contrôle."
      },
      {
       "terme": "Étendue",
       "def": "Différence entre la plus grande et la plus petite valeur d'un échantillon."
      },
      {
       "terme": "Diagramme de Pareto",
       "def": "Diagramme en barres classant les causes ou défauts par importance décroissante avec leur cumul."
      },
      {
       "terme": "Correction d'usure",
       "def": "Compensation de l'usure d'un outil dans le programme de la machine."
      },
      {
       "terme": "Compte rendu",
       "def": "Écrit qui rapporte de façon structurée des faits, des actions et leurs résultats."
      },
      {
       "terme": "Fiche de non-conformité",
       "def": "Document qui décrit un écart, la décision prise et les actions engagées."
      }
     ]
    }
   ]
  }
 ]
};
