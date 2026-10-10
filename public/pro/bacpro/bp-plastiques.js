/* Polymates — Bac pro Plastiques et composites — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-plastiques"] = {
 "id": "bp-plastiques",
 "nom": "Plastiques et composites",
 "icone": "🎓",
 "couleur": "#82b4d2",
 "intro": "Le bac pro Plastiques et composites forme des techniciens et techniciennes de production qui préparent, démarrent, pilotent et améliorent des fabrications de pièces en thermoplastiques ou en composites, sur des installations automatisées (injection, extrusion, soufflage, thermoformage) ou en ateliers de moulage composite, avant d'évoluer vers le réglage, l'animation d'équipe ou la qualité. Ce cours couvre les savoirs associés de première et de terminale (matières, techniques de production, outillages et périphériques, maîtrise de la production, qualité, santé-sécurité et développement durable), en reprenant au besoin les bases utiles puisque la spécialité n'a pas de seconde commune de famille de métiers. Il comprend deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre comment exploiter dossiers de fabrication, fiches de réglage, plans, fiches techniques, FDS, plans de drapage et documents de suivi qualité, tels qu'ils sont fournis à l'épreuve écrite de sciences et technologie.",
 "parties": [
  {
   "titre": "Partie 1 — Matières plastiques et composites",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpc-polymeres-structure-familles",
     "titre": "Les polymères : structure et grandes familles",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Expliquer ce qu'est un polymère à partir des notions de monomère, de macromolécule et de polymérisation",
      "Distinguer thermoplastiques, thermodurcissables et élastomères par leur structure et leur comportement à la chaleur",
      "Différencier un thermoplastique amorphe d'un thermoplastique semi-cristallin",
      "Identifier une matière par son symbole normalisé et ses principales caractéristiques",
      "Relier la famille d'une matière aux procédés de transformation qui lui conviennent"
     ],
     "sections": [
      {
       "titre": "Rappels : du monomère à la macromolécule",
       "contenu": "<p>Les bases vues en seconde sont reprises ici avec le vocabulaire de l'atelier. Une matière plastique est constituée de <strong>polymères</strong>, c'est-à-dire de très longues molécules appelées <strong>macromolécules</strong>. Chaque macromolécule résulte de l'enchaînement de milliers de petites molécules identiques, les <strong>monomères</strong>, liées les unes aux autres par des liaisons covalentes. Par exemple, l'éthylène (C<sub>2</sub>H<sub>4</sub>) est le monomère du polyéthylène, le propylène (C<sub>3</sub>H<sub>6</sub>) celui du polypropylène, le styrène celui du polystyrène.</p>\n<p>La réaction chimique qui assemble les monomères s'appelle la <strong>polymérisation</strong>. On distingue deux grands mécanismes :</p>\n<ul>\n<li>la <strong>polyaddition</strong> (ou polymérisation en chaîne) : les monomères s'ajoutent les uns aux autres sans perte de matière ; c'est le cas du polyéthylène, du polypropylène, du PVC ou du polystyrène ;</li>\n<li>la <strong>polycondensation</strong> : deux molécules différentes réagissent en libérant une petite molécule (souvent de l'eau) ; c'est le cas des polyamides (PA) et du polyéthylène téréphtalate (PET).</li>\n</ul>\n<p>Le nombre moyen de motifs dans une chaîne s'appelle le <strong>degré de polymérisation</strong>. Plus les chaînes sont longues, plus la <strong>masse molaire</strong> est élevée : la matière est alors plus résistante, mais aussi plus visqueuse à l'état fondu, donc plus difficile à injecter. C'est pour cela qu'un même polymère existe en plusieurs <strong>grades</strong> : un grade « injection » est en général plus fluide qu'un grade « extrusion » ou « soufflage ».</p>\n<p>Les polymères sont produits par l'industrie chimique, le plus souvent à partir du pétrole ou du gaz naturel, plus rarement à partir de ressources végétales (on parle alors de polymères <strong>biosourcés</strong>). Le plasturgiste les reçoit sous forme de <strong>granulés</strong>, de <strong>poudres</strong> ou, pour les composites, de <strong>résines liquides</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un polymère est une macromolécule formée par l'enchaînement de monomères. La longueur des chaînes conditionne à la fois les propriétés mécaniques de la pièce et la fluidité de la matière fondue.</div>"
      },
      {
       "titre": "Architecture des chaînes et liaisons entre chaînes",
       "contenu": "<p>Le comportement d'une matière dépend autant de la forme des chaînes que de la manière dont elles sont liées entre elles. On distingue trois architectures :</p>\n<table>\n<thead><tr><th>Architecture</th><th>Description</th><th>Conséquence</th></tr></thead>\n<tbody>\n<tr><td>Linéaire</td><td>Chaînes sans ramification, comme des fils</td><td>Les chaînes peuvent glisser et se rapprocher ; matière fusible</td></tr>\n<tr><td>Ramifiée</td><td>Chaînes portant des branches latérales</td><td>Chaînes moins compactes ; densité plus faible (cas du PE basse densité)</td></tr>\n<tr><td>Réticulée (tridimensionnelle)</td><td>Chaînes reliées entre elles par des ponts chimiques</td><td>Réseau rigide qui ne fond plus ; matière infusible</td></tr>\n</tbody>\n</table>\n<p>Entre deux chaînes non pontées, les forces en jeu sont des <strong>liaisons secondaires</strong> (forces de Van der Waals, liaisons hydrogène). Elles sont faibles : la chaleur suffit à les rompre, ce qui permet aux chaînes de glisser les unes sur les autres. En revanche, les ponts de <strong>réticulation</strong> sont des liaisons covalentes, aussi fortes que celles qui tiennent la chaîne elle-même : la chaleur ne peut pas les défaire sans détruire la matière.</p>\n<p>C'est cette différence qui fonde le classement en trois familles utilisé dans tout le métier.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> liaisons secondaires entre chaînes = matière que l'on peut refondre ; liaisons covalentes entre chaînes (réticulation) = matière que l'on ne peut plus refondre.</div>"
      },
      {
       "titre": "Les trois familles : thermoplastiques, thermodurcissables, élastomères",
       "contenu": "<p>Les <strong>thermoplastiques</strong> (TP) sont formés de chaînes linéaires ou ramifiées. Chauffés, ils se ramollissent puis deviennent pâteux ; refroidis, ils se solidifient. Ce cycle est <strong>réversible</strong> : on peut broyer et refondre une carotte d'injection pour la réutiliser. Ils représentent la très grande majorité des tonnages transformés (emballage, automobile, électroménager, bâtiment).</p>\n<p>Les <strong>thermodurcissables</strong> (TD) sont mis en œuvre à l'état de résine liquide ou de pâte. Sous l'effet d'un <strong>durcisseur</strong> ou d'un <strong>catalyseur</strong>, et souvent de la chaleur, une réaction chimique crée un réseau réticulé : c'est la <strong>réticulation</strong>, appelée aussi <strong>polymérisation</strong> ou <strong>cuisson</strong> dans les ateliers composites. La transformation est <strong>irréversible</strong>. Les résines polyesters insaturées (UP), vinylesters (VE), époxydes (EP), phénoliques (PF) et les polyuréthanes réticulés appartiennent à cette famille. Ce sont les matrices principales des composites.</p>\n<p>Les <strong>élastomères</strong> sont faiblement réticulés : leurs chaînes, très souples à température ambiante, sont reliées par quelques ponts seulement. Ils supportent de grandes déformations (plusieurs centaines de pour cent) et reprennent leur forme initiale. Le caoutchouc naturel vulcanisé, l'EPDM ou les silicones en font partie. Les <strong>élastomères thermoplastiques</strong> (TPE) combinent l'élasticité des élastomères et la mise en œuvre des thermoplastiques : ils s'injectent, souvent en bi-matière sur un support rigide (poignées « soft touch », joints).</p>\n<table>\n<thead><tr><th>Critère</th><th>Thermoplastique</th><th>Thermodurcissable</th><th>Élastomère</th></tr></thead>\n<tbody>\n<tr><td>Structure</td><td>Linéaire ou ramifiée</td><td>Fortement réticulée</td><td>Faiblement réticulée</td></tr>\n<tr><td>Effet de la chaleur</td><td>Ramollit, fond, réversible</td><td>Durcit une fois pour toutes</td><td>Ne fond pas (sauf TPE)</td></tr>\n<tr><td>État de livraison</td><td>Granulés, poudre, plaques</td><td>Résine liquide, pâte (SMC, BMC), préimprégné</td><td>Gomme, mélange cru, granulés (TPE)</td></tr>\n<tr><td>Procédés typiques</td><td>Injection, extrusion, soufflage, thermoformage, rotomoulage</td><td>Moulage au contact, infusion, RTM, compression, pultrusion</td><td>Compression, injection, extrusion</td></tr>\n<tr><td>Recyclage</td><td>Broyage et refusion possibles</td><td>Difficile (broyage en charge, valorisation énergétique)</td><td>Difficile (sauf TPE)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> « polymérisation » n'a pas le même sens partout. En chimie, c'est la fabrication de la chaîne ; dans un atelier composite, on dit « la pièce polymérise » pour parler de la réticulation de la résine. Le contexte permet de lever l'ambiguïté.</div>"
      },
      {
       "titre": "Thermoplastiques amorphes et semi-cristallins",
       "contenu": "<p>Parmi les thermoplastiques, la manière dont les chaînes s'organisent au refroidissement distingue deux catégories.</p>\n<p>Dans un <strong>thermoplastique amorphe</strong>, les chaînes restent enchevêtrées en désordre, comme un plat de spaghettis. Il ne possède pas de point de fusion net mais une <strong>température de transition vitreuse</strong> (notée <strong>Tg</strong>) : en dessous, la matière est rigide et vitreuse ; au-dessus, elle devient caoutchoutique puis visqueuse. Les amorphes sont souvent <strong>transparents</strong> à l'état naturel (PS « cristal », PMMA, PC), ont un <strong>retrait</strong> faible et régulier (de l'ordre de 0,4 à 0,8 %) et se déforment peu. Ils sont en revanche sensibles à la <strong>fissuration sous contrainte</strong> au contact de certains produits chimiques.</p>\n<p>Dans un <strong>thermoplastique semi-cristallin</strong>, une partie des chaînes se replie et s'aligne pour former des zones ordonnées appelées <strong>cristallites</strong>, noyées dans une phase amorphe. Ces matières possèdent une Tg (pour la phase amorphe) et une <strong>température de fusion</strong> (notée <strong>Tf</strong> ou Tm) pour la phase cristalline. Elles sont généralement <strong>opaques ou translucides</strong>, présentent une bonne tenue chimique et à la fatigue, mais un <strong>retrait</strong> plus important et plus variable (de l'ordre de 1 à 3 %), qui dépend des conditions de refroidissement. Le <strong>taux de cristallinité</strong> augmente quand le refroidissement est lent (moule chaud) : la pièce est alors plus rigide mais se rétracte davantage.</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Amorphe</th><th>Semi-cristallin</th></tr></thead>\n<tbody>\n<tr><td>Températures repères</td><td>Tg seulement</td><td>Tg et Tf</td></tr>\n<tr><td>Passage à l'état fondu</td><td>Ramollissement progressif</td><td>Fusion assez franche</td></tr>\n<tr><td>Aspect naturel</td><td>Souvent transparent</td><td>Opaque ou translucide</td></tr>\n<tr><td>Retrait au moulage</td><td>Faible (0,4 à 0,8 %)</td><td>Élevé (1 à 3 %)</td></tr>\n<tr><td>Exemples</td><td>PS, ABS, PMMA, PC, PVC</td><td>PE, PP, PA, POM, PET, PBT</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lorsqu'un client demande de remplacer un ABS par un PP pour réduire le coût, le moule ne peut pas être réutilisé tel quel : le PP se rétracte environ trois fois plus, les cotes de la pièce sortiraient des tolérances. Ce type de changement se décide toujours avec le bureau d'études et l'outilleur.</div>"
      },
      {
       "titre": "Désignation normalisée et principales matières",
       "contenu": "<p>Chaque polymère est désigné par un <strong>symbole</strong> normalisé (norme NF EN ISO 1043-1). Ce symbole apparaît sur les fiches techniques, les plans et les pièces elles-mêmes, où il est gravé entre chevrons, par exemple &gt;PP&lt; ou &gt;PA66-GF30&lt; (polyamide 66 renforcé de 30 % de fibres de verre). Le tableau suivant regroupe les matières les plus courantes en atelier ; les valeurs sont des ordres de grandeur, la fiche technique du grade utilisé fait foi.</p>\n<table>\n<thead><tr><th>Symbole</th><th>Nom</th><th>Structure</th><th>Masse volumique (g/cm<sup>3</sup>)</th><th>Repère thermique</th><th>Applications</th></tr></thead>\n<tbody>\n<tr><td>PE-HD / PE-BD</td><td>Polyéthylène haute / basse densité</td><td>Semi-cristallin</td><td>0,94 à 0,96 / 0,91 à 0,93</td><td>Tf ≈ 130 °C (HD), ≈ 110 °C (BD)</td><td>Flacons, bidons, films, tubes</td></tr>\n<tr><td>PP</td><td>Polypropylène</td><td>Semi-cristallin</td><td>0,90 à 0,91</td><td>Tf ≈ 160 à 165 °C</td><td>Pare-chocs, boîtiers, charnières</td></tr>\n<tr><td>PVC</td><td>Polychlorure de vinyle</td><td>Amorphe</td><td>1,35 à 1,45 (rigide)</td><td>Tg ≈ 80 °C</td><td>Profilés de fenêtre, tubes</td></tr>\n<tr><td>PS</td><td>Polystyrène</td><td>Amorphe</td><td>1,04 à 1,05</td><td>Tg ≈ 100 °C</td><td>Emballages, pots</td></tr>\n<tr><td>ABS</td><td>Acrylonitrile-butadiène-styrène</td><td>Amorphe</td><td>1,03 à 1,07</td><td>Tg ≈ 105 °C</td><td>Carters, jouets, habillages</td></tr>\n<tr><td>PMMA</td><td>Polyméthacrylate de méthyle</td><td>Amorphe</td><td>1,18 à 1,19</td><td>Tg ≈ 105 °C</td><td>Feux arrière, vitrages</td></tr>\n<tr><td>PC</td><td>Polycarbonate</td><td>Amorphe</td><td>1,20</td><td>Tg ≈ 145 à 150 °C</td><td>Visières, optiques de phares</td></tr>\n<tr><td>PA6 / PA66</td><td>Polyamides</td><td>Semi-cristallin</td><td>1,13 à 1,14</td><td>Tf ≈ 220 °C / ≈ 260 °C</td><td>Pièces techniques, engrenages</td></tr>\n<tr><td>POM</td><td>Polyoxyméthylène</td><td>Semi-cristallin</td><td>1,41</td><td>Tf ≈ 165 à 175 °C</td><td>Engrenages, clips</td></tr>\n<tr><td>PET</td><td>Polyéthylène téréphtalate</td><td>Semi-cristallin</td><td>1,33 à 1,38</td><td>Tg ≈ 75 °C, Tf ≈ 255 °C</td><td>Bouteilles, fibres</td></tr>\n</tbody>\n</table>\n<p>On classe aussi les thermoplastiques selon leur niveau de performance : les <strong>polymères de grande diffusion</strong> (PE, PP, PVC, PS), bon marché et produits en très gros volumes ; les <strong>polymères techniques</strong> (PA, POM, PC, PBT), plus résistants mécaniquement et thermiquement ; les <strong>polymères hautes performances</strong> (PEEK, PPS, PEI), réservés à l'aéronautique, au médical ou à l'électronique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour reconnaître une matière inconnue à l'atelier, on combine plusieurs indices sans jamais se fier à un seul. 1) Lire le marquage moulé sur la pièce (symbole entre chevrons). 2) Observer l'aspect : transparent naturel plutôt amorphe, toucher cireux plutôt PE ou PP. 3) Faire le test de flottaison dans l'eau : PE et PP flottent (masse volumique inférieure à 1), la plupart des autres coulent. 4) En cas de doute, demander une analyse au laboratoire (spectroscopie infrarouge, analyse thermique). Les essais à la flamme sont à proscrire hors laboratoire : ils dégagent des fumées toxiques, notamment avec le PVC.</div>"
      },
      {
       "titre": "Relier la famille de matière au procédé",
       "contenu": "<p>Le choix du procédé de transformation découle directement de la famille de la matière et de sa forme de livraison :</p>\n<ul>\n<li>un <strong>thermoplastique</strong> se transforme par fusion, mise en forme puis refroidissement : injection, extrusion, extrusion-soufflage, thermoformage d'une plaque, rotomoulage d'une poudre ;</li>\n<li>un <strong>thermodurcissable</strong> se transforme par imprégnation d'un renfort ou remplissage d'un moule, puis réticulation : moulage au contact, projection simultanée, infusion, RTM, compression de SMC ou de BMC, pultrusion, enroulement filamentaire ;</li>\n<li>un <strong>élastomère</strong> se met en forme à l'état cru puis se vulcanise dans un moule chaud ; un TPE se traite comme un thermoplastique.</li>\n</ul>\n<p>Cette logique explique les principaux réflexes de l'atelier : en injection de thermoplastique, le moule est <strong>régulé à une température inférieure</strong> à celle de la matière pour la solidifier ; en compression de thermodurcissable, le moule est au contraire <strong>chaud</strong> (souvent 140 à 160 °C pour un SMC) pour déclencher la réticulation. Une carotte de PP peut être broyée et réintroduite dans la trémie ; une chute de pièce en polyester ne le peut pas.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> chauffer davantage un thermodurcissable ne le fait pas fondre : il brûle et se dégrade en dégageant des fumées. De même, surchauffer un thermoplastique ne le rend pas « plus fluide sans risque » : au-delà de la plage conseillée, les chaînes se coupent (dégradation thermique), la pièce perd ses propriétés et peut présenter des traînées brunes ou des bulles.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> connaître la famille d'une matière permet de prévoir comment elle se transforme, comment on règle le moule, ce que l'on fait des chutes et quelles précautions prendre.</div>"
      }
     ],
     "points_cles": [
      "Un polymère est une macromolécule obtenue par polyaddition ou polycondensation de monomères",
      "Les chaînes linéaires ou ramifiées donnent des thermoplastiques, réversibles à la chaleur",
      "La réticulation donne des thermodurcissables, mis en forme une seule fois",
      "Les élastomères sont faiblement réticulés et très déformables ; les TPE se transforment comme des thermoplastiques",
      "Un amorphe n'a qu'une Tg, se rétracte peu et est souvent transparent",
      "Un semi-cristallin a une Tg et une Tf, se rétracte davantage et résiste mieux aux produits chimiques",
      "La désignation des matières suit la norme NF EN ISO 1043-1 et se retrouve gravée sur les pièces",
      "La famille de la matière détermine le procédé, la régulation du moule et le devenir des chutes"
     ],
     "lexique": [
      {
       "terme": "Monomère",
       "def": "Petite molécule qui, enchaînée des milliers de fois, forme un polymère."
      },
      {
       "terme": "Macromolécule",
       "def": "Très longue molécule constituant un polymère."
      },
      {
       "terme": "Polycondensation",
       "def": "Polymérisation qui libère une petite molécule, souvent de l'eau, à chaque liaison formée."
      },
      {
       "terme": "Réticulation",
       "def": "Création de liaisons chimiques entre chaînes formant un réseau tridimensionnel infusible."
      },
      {
       "terme": "Tg",
       "def": "Température de transition vitreuse : passage de l'état vitreux rigide à l'état caoutchoutique de la phase amorphe."
      },
      {
       "terme": "Tf",
       "def": "Température de fusion de la phase cristalline d'un semi-cristallin."
      },
      {
       "terme": "Cristallinité",
       "def": "Proportion de chaînes organisées en zones ordonnées dans un semi-cristallin."
      },
      {
       "terme": "Grade",
       "def": "Version commerciale d'un polymère, caractérisée par sa fluidité, ses additifs et son usage prévu."
      },
      {
       "terme": "TPE",
       "def": "Élastomère thermoplastique, souple comme un caoutchouc mais transformable comme un thermoplastique."
      },
      {
       "terme": "Retrait",
       "def": "Diminution des dimensions de la pièce entre l'empreinte du moule et la pièce refroidie."
      }
     ]
    },
    {
     "id": "bpc-proprietes-essais-matieres",
     "titre": "Propriétés des matières et essais de caractérisation",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Citer les principales propriétés mécaniques, thermiques, physiques et rhéologiques d'une matière plastique",
      "Interpréter une courbe de traction et en extraire module, contrainte et allongement",
      "Expliquer le principe des essais normalisés figurant sur une fiche technique matière",
      "Utiliser l'indice de fluidité pour comparer des grades et anticiper leur mise en œuvre",
      "Tenir compte de l'influence de la température, du temps et de l'humidité sur le comportement des polymères"
     ],
     "sections": [
      {
       "titre": "Pourquoi caractériser une matière",
       "contenu": "<p>Le choix d'une matière pour une pièce se fait à partir de ses <strong>propriétés</strong> : rigidité, résistance aux chocs, tenue en température, aspect, tenue chimique, prix. Ces propriétés sont mesurées par des <strong>essais normalisés</strong>, réalisés sur des <strong>éprouvettes</strong> de forme et de dimensions imposées, dans des conditions définies (température, humidité, vitesse). Les résultats sont regroupés sur la <strong>fiche technique</strong> (ou fiche de données produit) du fournisseur. Grâce à la normalisation, deux grades de deux fournisseurs différents peuvent être comparés valeur par valeur.</p>\n<p>Le technicien d'atelier n'a pas à réaliser tous ces essais, mais il doit savoir lire leurs résultats, comprendre ce qu'ils mesurent et repérer les grandeurs utiles au réglage : température de mise en œuvre, fluidité, conditions de séchage, retrait. Il réalise lui-même certains contrôles simples : mesure de masse, de dureté, d'humidité résiduelle, parfois d'indice de fluidité au laboratoire de l'entreprise.</p>\n<p>Les propriétés se classent en quatre groupes : <strong>mécaniques</strong> (comportement sous effort), <strong>thermiques</strong> (comportement à la chaleur), <strong>physiques</strong> (masse volumique, absorption d'eau, propriétés optiques et électriques) et <strong>rhéologiques</strong> (écoulement à l'état fondu).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une valeur de fiche technique n'a de sens qu'avec la norme d'essai et les conditions qui l'accompagnent. Une résistance au choc « à 23 °C » ne dit rien du comportement à −30 °C.</div>"
      },
      {
       "titre": "L'essai de traction et la courbe contrainte-déformation",
       "contenu": "<p>L'essai de traction (norme NF EN ISO 527) consiste à étirer une éprouvette en forme d'haltère à vitesse constante jusqu'à rupture, en enregistrant l'effort F (en newtons) et l'allongement. On calcule :</p>\n<ul>\n<li>la <strong>contrainte</strong> σ = F / S<sub>0</sub>, où S<sub>0</sub> est la section initiale en mm<sup>2</sup> ; σ s'exprime en mégapascals (1 MPa = 1 N/mm<sup>2</sup>) ;</li>\n<li>la <strong>déformation</strong> ε = ΔL / L<sub>0</sub>, sans unité, souvent exprimée en % ;</li>\n<li>le <strong>module d'élasticité</strong> (ou module de Young) E = σ / ε dans la partie initiale rectiligne de la courbe ; il traduit la <strong>rigidité</strong> et s'exprime en MPa.</li>\n</ul>\n<p>La courbe contrainte-déformation d'un polymère présente selon la matière plusieurs allures. Une matière <strong>fragile</strong> (PS cristal, PMMA, thermodurcissable non renforcé) casse dans le domaine élastique, avec un faible allongement (quelques %). Une matière <strong>ductile</strong> (PP, PE, PA conditionné) présente un <strong>seuil d'écoulement</strong> : la contrainte passe par un maximum, une <strong>striction</strong> apparaît, puis l'éprouvette s'allonge fortement, parfois de plusieurs centaines de pour cent, avant de rompre.</p>\n<table>\n<thead><tr><th>Matière (ordre de grandeur)</th><th>Module E (MPa)</th><th>Contrainte au seuil ou à la rupture (MPa)</th><th>Allongement à la rupture</th></tr></thead>\n<tbody>\n<tr><td>PE-BD</td><td>200 à 400</td><td>8 à 12</td><td>supérieur à 300 %</td></tr>\n<tr><td>PP homopolymère</td><td>1 300 à 1 700</td><td>30 à 35</td><td>supérieur à 50 %</td></tr>\n<tr><td>ABS</td><td>2 000 à 2 600</td><td>40 à 50</td><td>10 à 30 %</td></tr>\n<tr><td>PA66 sec</td><td>2 800 à 3 200</td><td>80 à 85</td><td>20 à 40 %</td></tr>\n<tr><td>PA66-GF30 sec</td><td>9 000 à 10 000</td><td>170 à 190</td><td>2 à 4 %</td></tr>\n<tr><td>Acier (comparaison)</td><td>210 000</td><td>300 à 1 000</td><td>10 à 30 %</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la contrainte et le module à partir d'un relevé. Une éprouvette de section 10 mm × 4 mm et de longueur utile 50 mm supporte 1 200 N pour un allongement de 0,25 mm dans la zone élastique. 1) Section S<sub>0</sub> = 10 × 4 = 40 mm<sup>2</sup>. 2) Contrainte σ = 1 200 / 40 = 30 MPa. 3) Déformation ε = 0,25 / 50 = 0,005 (soit 0,5 %). 4) Module E = 30 / 0,005 = 6 000 MPa. Cette valeur correspond à un thermoplastique chargé ou renforcé, pas à un PP non chargé.</div>"
      },
      {
       "titre": "Autres essais mécaniques : flexion, choc, dureté",
       "contenu": "<p>L'<strong>essai de flexion trois points</strong> (NF EN ISO 178) pose l'éprouvette sur deux appuis et la charge en son milieu. Il donne un <strong>module de flexion</strong>, souvent proche du module de traction, très utilisé pour comparer la rigidité de pièces minces (capots, coques).</p>\n<p>L'<strong>essai de choc</strong> mesure l'énergie absorbée par une éprouvette frappée par un pendule. Dans l'essai <strong>Charpy</strong> (NF EN ISO 179), l'éprouvette repose sur deux appuis ; dans l'essai <strong>Izod</strong> (NF EN ISO 180), elle est encastrée verticalement. L'éprouvette peut être <strong>entaillée</strong> ou non. Le résultat s'exprime en kJ/m<sup>2</sup>. L'entaille simule un angle vif ou une rayure : beaucoup de matières, ductiles sans entaille, deviennent fragiles avec entaille. C'est la raison pour laquelle on arrondit les angles intérieurs des pièces.</p>\n<p>La <strong>dureté</strong> mesure la résistance à la pénétration d'une pointe. Pour les élastomères et les thermoplastiques souples, on utilise la dureté <strong>Shore A</strong> ; pour les thermoplastiques rigides, la dureté <strong>Shore D</strong> (NF EN ISO 868). Un duromètre portatif permet un contrôle rapide en atelier, par exemple pour vérifier la dureté d'un joint en TPE ou la cuisson d'un stratifié (dureté Barcol pour les composites).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un stratifié polyester, la dureté Barcol mesurée au démoulage permet de vérifier que la résine a suffisamment polymérisé. Le fournisseur de résine indique une valeur minimale ; une mesure trop basse signale souvent un catalyseur mal dosé ou un atelier trop froid.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les polyamides absorbent l'humidité de l'air, ce qui les rend plus souples et plus résistants aux chocs. Une fiche technique donne souvent deux colonnes, « sec » (dry as moulded) et « conditionné ». Comparer un PA sec à un autre matériau conditionné fausse la comparaison.</div>"
      },
      {
       "titre": "Propriétés thermiques",
       "contenu": "<p>Les polymères sont sensibles à la température beaucoup plus que les métaux. Plusieurs grandeurs caractérisent leur comportement :</p>\n<ul>\n<li>la <strong>température de transition vitreuse</strong> Tg et la <strong>température de fusion</strong> Tf, déjà définies pour les amorphes et les semi-cristallins, mesurées par <strong>analyse calorimétrique différentielle</strong> (DSC, norme NF EN ISO 11357) ;</li>\n<li>la <strong>température de fléchissement sous charge</strong> (HDT, NF EN ISO 75) : température à laquelle une éprouvette chargée en flexion atteint une flèche donnée ; elle indique la limite d'utilisation sous effort ;</li>\n<li>la <strong>température de ramollissement Vicat</strong> (NF EN ISO 306) : température à laquelle une aiguille chargée pénètre de 1 mm dans la matière ;</li>\n<li>le <strong>coefficient de dilatation linéique</strong> α, de l'ordre de 5 à 20 × 10<sup>−5</sup> K<sup>−1</sup> pour un thermoplastique non chargé, soit environ dix fois celui de l'acier ;</li>\n<li>la <strong>conductivité thermique</strong>, très faible (environ 0,15 à 0,5 W/(m·K)), ce qui explique que les pièces épaisses refroidissent lentement dans le moule.</li>\n</ul>\n<p>On ajoute la <strong>tenue au feu</strong>, évaluée par exemple par le classement UL 94 (V-0, V-1, V-2, HB) pour les pièces électriques, et la <strong>température maximale d'utilisation en continu</strong>, liée au vieillissement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer une dilatation. Un profilé PVC de 3 m (α ≈ 7 × 10<sup>−5</sup> K<sup>−1</sup>) passe de 0 °C à 40 °C. ΔL = α × L<sub>0</sub> × Δθ = 7 × 10<sup>−5</sup> × 3 000 mm × 40 = 8,4 mm. Un tel écart impose de prévoir des jeux de dilatation à la pose.</div>"
      },
      {
       "titre": "Propriétés rhéologiques : l'indice de fluidité",
       "contenu": "<p>La <strong>rhéologie</strong> étudie l'écoulement de la matière fondue. La grandeur la plus utilisée en atelier est l'<strong>indice de fluidité</strong>, appelé <strong>MFR</strong> (melt mass-flow rate, en g/10 min) ou <strong>MVR</strong> (melt volume-flow rate, en cm<sup>3</sup>/10 min), mesuré selon la norme NF EN ISO 1133. On fait fondre la matière dans un cylindre chauffé, on la pousse avec un piston chargé d'une masse donnée à travers une filière calibrée, et on pèse ce qui s'écoule en dix minutes. Les conditions dépendent de la matière : par exemple 230 °C et 2,16 kg pour le PP, 190 °C et 2,16 kg pour le PE.</p>\n<table>\n<thead><tr><th>MFR d'un PP (230 °C / 2,16 kg)</th><th>Fluidité</th><th>Usage typique</th></tr></thead>\n<tbody>\n<tr><td>0,3 à 3 g/10 min</td><td>Faible</td><td>Extrusion de tubes, plaques, soufflage</td></tr>\n<tr><td>8 à 25 g/10 min</td><td>Moyenne</td><td>Injection de pièces courantes</td></tr>\n<tr><td>40 à 100 g/10 min</td><td>Élevée</td><td>Injection de pièces minces, emballages à parois fines</td></tr>\n</tbody>\n</table>\n<p>Un MFR élevé signifie une matière fluide, donc des chaînes plus courtes : elle remplit facilement les parois fines mais présente en général une résistance au choc plus faible. Un MFR faible signifie une matière visqueuse, qui tient bien sa forme à la sortie d'une filière : c'est ce qu'on recherche en extrusion.</p>\n<p>La viscosité des polymères fondus diminue quand la vitesse de cisaillement augmente : on dit qu'ils sont <strong>rhéofluidifiants</strong> (ou pseudoplastiques). C'est pourquoi une injection rapide facilite le remplissage. L'indice de fluidité, mesuré à faible cisaillement, ne rend donc qu'une partie du comportement en presse.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> mesurer le MFR d'une pièce broyée et le comparer à celui de la matière vierge permet de détecter une dégradation : si le MFR a fortement augmenté, les chaînes ont été coupées (surchauffe, temps de séjour trop long, matière humide pour un PA ou un PC).</div>"
      },
      {
       "titre": "Propriétés physiques et vieillissement",
       "contenu": "<p>La <strong>masse volumique</strong> ρ (en g/cm<sup>3</sup> ou kg/m<sup>3</sup>, NF EN ISO 1183) sert à calculer la masse d'une pièce à partir de son volume, donc le coût matière. Les charges minérales et les fibres de verre l'augmentent : un PP chargé de 20 % de talc atteint environ 1,05 g/cm<sup>3</sup>.</p>\n<p>L'<strong>absorption d'eau</strong> (NF EN ISO 62) est importante pour les PA, le PC, le PET, le PBT ou l'ABS. Elle conditionne le séchage avant transformation et la stabilité dimensionnelle des pièces en service.</p>\n<p>Les propriétés <strong>optiques</strong> (transmission lumineuse, voile, brillance) concernent les pièces transparentes ou d'aspect. Les propriétés <strong>électriques</strong> (résistivité, rigidité diélectrique) sont recherchées pour les isolants : la plupart des polymères sont d'excellents isolants, ce qui explique aussi qu'ils se chargent d'électricité statique et attirent les poussières.</p>\n<p>Enfin, les polymères évoluent dans le temps : c'est le <strong>vieillissement</strong>. Sous charge permanente, ils continuent de se déformer lentement : c'est le <strong>fluage</strong>. Une contrainte maintenue à déformation constante diminue : c'est la <strong>relaxation</strong>. Les ultraviolets, l'oxygène et la chaleur provoquent un vieillissement chimique (jaunissement, farinage, fragilisation), contre lequel on ajoute des <strong>stabilisants</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pièce peut passer tous les contrôles à la sortie de presse puis se déformer quelques jours plus tard par relâchement des contraintes internes ou reprise d'humidité. Les contrôles dimensionnels se font donc après un temps de stabilisation défini dans le plan de contrôle.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> rigidité (module), résistance (contrainte), ductilité (allongement), choc (kJ/m<sup>2</sup>), tenue thermique (HDT, Vicat), fluidité (MFR) et masse volumique sont les sept repères à chercher en priorité sur une fiche technique.</div>"
      }
     ],
     "points_cles": [
      "Les propriétés d'une matière sont mesurées par des essais normalisés sur éprouvettes, dans des conditions définies",
      "σ = F / S0 en MPa, ε = ΔL / L0, et le module E = σ / ε caractérise la rigidité",
      "Une matière fragile casse sans écoulement ; une matière ductile présente un seuil et une striction",
      "L'essai Charpy entaillé révèle la sensibilité aux angles vifs",
      "HDT et Vicat indiquent la limite d'usage en température ; Tg et Tf se mesurent par DSC",
      "Le MFR (g/10 min) compare la fluidité des grades : élevé pour l'injection de parois fines, faible pour l'extrusion",
      "Les polymères dilatent environ dix fois plus que l'acier et conduisent mal la chaleur",
      "Fluage, reprise d'humidité et vieillissement UV modifient les pièces dans le temps"
     ],
     "lexique": [
      {
       "terme": "Éprouvette",
       "def": "Échantillon de forme et de dimensions normalisées utilisé pour un essai."
      },
      {
       "terme": "Contrainte",
       "def": "Effort rapporté à la section, exprimé en MPa (N/mm²)."
      },
      {
       "terme": "Module d'élasticité",
       "def": "Rapport contrainte sur déformation dans le domaine élastique ; mesure la rigidité."
      },
      {
       "terme": "Striction",
       "def": "Rétrécissement localisé de la section d'une éprouvette ductile après le seuil d'écoulement."
      },
      {
       "terme": "Résilience",
       "def": "Énergie absorbée lors d'un choc, rapportée à la section, en kJ/m²."
      },
      {
       "terme": "HDT",
       "def": "Température de fléchissement sous charge, limite d'utilisation d'une matière sous effort."
      },
      {
       "terme": "MFR",
       "def": "Indice de fluidité à chaud en masse, exprimé en g/10 min, selon NF EN ISO 1133."
      },
      {
       "terme": "Rhéofluidifiant",
       "def": "Se dit d'un fluide dont la viscosité diminue quand la vitesse de cisaillement augmente."
      },
      {
       "terme": "Fluage",
       "def": "Déformation lente et continue d'un matériau soumis à une charge constante."
      },
      {
       "terme": "Dureté Shore",
       "def": "Mesure de la résistance à la pénétration d'une pointe, échelle A pour les souples, D pour les rigides."
      }
     ]
    },
    {
     "id": "bpc-preparation-matieres",
     "titre": "Additifs, charges et préparation des matières",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Identifier le rôle des principaux additifs, charges et renforts incorporés aux thermoplastiques",
      "Calculer un dosage de mélange-maître et une quantité de matière pour un ordre de fabrication",
      "Justifier le séchage d'une matière hygroscopique et en choisir les conditions",
      "Gérer l'utilisation du rebroyé dans le respect des consignes",
      "Assurer le stockage, l'identification et la traçabilité des matières"
     ],
     "sections": [
      {
       "titre": "Une matière prête à transformer : polymère et additifs",
       "contenu": "<p>Le polymère pur est rarement transformé tel quel. Le producteur ou le plasturgiste lui ajoute des <strong>additifs</strong>, en faibles proportions (de quelques ppm à quelques %), pour faciliter sa mise en œuvre ou améliorer ses propriétés d'usage. Le mélange polymère + additifs + charges éventuelles s'appelle un <strong>compound</strong> ; l'entreprise qui le fabrique est un <strong>compoundeur</strong>.</p>\n<table>\n<thead><tr><th>Additif</th><th>Rôle</th><th>Exemple d'usage</th></tr></thead>\n<tbody>\n<tr><td>Stabilisant thermique (antioxydant)</td><td>Protège la matière pendant la transformation et en service</td><td>Tous grades, indispensable au PVC</td></tr>\n<tr><td>Anti-UV</td><td>Retarde le jaunissement et la fragilisation à la lumière</td><td>Mobilier de jardin, pièces extérieures</td></tr>\n<tr><td>Plastifiant</td><td>Assouplit la matière en écartant les chaînes</td><td>PVC souple (câbles, tuyaux)</td></tr>\n<tr><td>Lubrifiant, agent de démoulage</td><td>Facilite l'écoulement et l'éjection</td><td>Pièces à démoulage difficile</td></tr>\n<tr><td>Ignifugeant</td><td>Réduit l'inflammabilité</td><td>Boîtiers électriques classés UL 94</td></tr>\n<tr><td>Antistatique</td><td>Limite l'accumulation de charges électriques</td><td>Emballages électroniques</td></tr>\n<tr><td>Agent nucléant</td><td>Accélère la cristallisation d'un semi-cristallin</td><td>PP à cycle court, PP clarifié</td></tr>\n<tr><td>Agent gonflant</td><td>Crée une structure alvéolaire</td><td>Pièces allégées, mousses</td></tr>\n<tr><td>Colorant, pigment</td><td>Donne la teinte</td><td>Toutes pièces colorées</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un même polymère existe en de nombreux grades parce que les additifs changent ses propriétés. La référence commerciale complète du grade, et non le seul symbole PP ou PA, doit figurer sur le dossier de fabrication.</div>"
      },
      {
       "titre": "Charges et renforts",
       "contenu": "<p>Les <strong>charges</strong> sont des poudres minérales (talc, carbonate de calcium, kaolin, microbilles de verre) ajoutées en proportion importante, souvent 10 à 40 % en masse. Elles abaissent le coût, augmentent la rigidité et la stabilité dimensionnelle, réduisent le retrait, mais diminuent en général la résistance au choc et augmentent la masse volumique.</p>\n<p>Les <strong>renforts</strong> sont des fibres courtes, principalement de verre, parfois de carbone, de longueur inférieure au millimètre dans les granulés classiques (fibres « courtes ») ou de quelques millimètres dans les grades à fibres longues. Ils augmentent fortement le module et la résistance. Leur désignation est normalisée : GF pour fibres de verre, CF pour fibres de carbone, MD pour charge minérale, suivi du pourcentage massique. Ainsi PP-T20 désigne un PP chargé de 20 % de talc et PA6-GF30 un PA6 renforcé de 30 % de fibres de verre.</p>\n<p>Les fibres courtes s'orientent dans le sens de l'écoulement pendant le remplissage du moule. La pièce est donc <strong>anisotrope</strong> : plus rigide et moins rétractée dans le sens des fibres que perpendiculairement. Cette différence de retrait est une cause fréquente de <strong>voilage</strong> (déformation) des pièces renforcées.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les matières renforcées de fibres de verre sont abrasives. Elles usent la vis, le clapet anti-retour, les seuils et les buses. Il faut des équipements traités (bimétalliques, aciers durcis) et une surveillance de l'usure plus fréquente.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les rebroyés de pièces renforcées ont des fibres raccourcies par le broyage et la nouvelle plastification. Leur réintroduction diminue les performances mécaniques ; elle est donc souvent limitée, voire interdite, pour les pièces techniques de sécurité.</div>"
      },
      {
       "titre": "Coloration et dosage du mélange-maître",
       "contenu": "<p>Trois solutions existent pour colorer une pièce :</p>\n<ul>\n<li>la matière <strong>précolorée</strong> (compound coloré dans la masse par le fournisseur) : teinte très régulière, mais stock coûteux car une référence par couleur ;</li>\n<li>le <strong>mélange-maître</strong> (masterbatch) : granulés très concentrés en pigments, dans un polymère support compatible, dosés en faible pourcentage (souvent 1 à 4 %) dans la matière naturelle ; c'est la solution la plus répandue ;</li>\n<li>les <strong>colorants liquides</strong> ou poudres, dosés par pompe ou en mélange préalable, plus délicats à manipuler.</li>\n</ul>\n<p>Le dosage se fait par un <strong>doseur volumétrique</strong> ou, pour plus de précision, <strong>gravimétrique</strong>, monté sur la trémie. Le taux de mélange-maître est prescrit par le fournisseur et validé par un essai de teinte comparé à un étalon (plaquette de référence), sous un éclairage normalisé.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer les quantités pour un ordre de fabrication. Commande : 20 000 pièces de 45 g, carotte de 5 g par injection, moule 1 empreinte, mélange-maître à 2 %, rebut estimé à 3 %. 1) Masse par injection = 45 + 5 = 50 g. 2) Nombre d'injections = 20 000 × 1,03 = 20 600. 3) Masse totale = 20 600 × 50 g = 1 030 kg. 4) Mélange-maître = 2 % × 1 030 = 20,6 kg. 5) Matière naturelle = 1 030 − 20,6 = 1 009,4 kg, soit 41 sacs de 25 kg à prévoir (1 025 kg). Si les carottes sont rebroyées et réintroduites, la consommation de matière vierge diminue d'autant, dans la limite autorisée.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un mélange-maître dont le polymère support n'est pas compatible avec la matière (par exemple support PE dans un PC) provoque des défauts d'aspect, des délaminations ou une baisse de résistance. Le support doit être indiqué sur la fiche du mélange-maître.</div>"
      },
      {
       "titre": "Le séchage des matières hygroscopiques",
       "contenu": "<p>Certaines matières absorbent l'humidité de l'air : on les dit <strong>hygroscopiques</strong>. C'est le cas des PA, PC, PET, PBT, PMMA, ABS. Transformées humides, elles présentent des défauts : traînées argentées en surface, bulles, et surtout, pour PA, PC, PET et PBT, une <strong>hydrolyse</strong> qui coupe les chaînes et rend les pièces fragiles sans que cela se voie toujours. Les matières non hygroscopiques (PE, PP, PS) ne posent problème qu'en cas d'humidité de surface (condensation après stockage au froid).</p>\n<p>Le séchage s'effectue dans un <strong>dessiccateur</strong> : un air chaud et très sec, obtenu par passage sur un tamis moléculaire (on parle de sécheur à <strong>air déshydraté</strong>, avec un point de rosée de l'ordre de −30 à −40 °C), traverse la trémie de séchage. Les étuves à air chaud simple suffisent pour les matières peu sensibles mais ne conviennent pas au PET ou au PA.</p>\n<table>\n<thead><tr><th>Matière</th><th>Température de séchage (ordre de grandeur)</th><th>Durée (ordre de grandeur)</th><th>Humidité résiduelle visée</th></tr></thead>\n<tbody>\n<tr><td>ABS</td><td>80 °C</td><td>2 à 4 h</td><td>inférieure à 0,1 %</td></tr>\n<tr><td>PC</td><td>120 °C</td><td>2 à 4 h</td><td>inférieure à 0,02 %</td></tr>\n<tr><td>PA6, PA66</td><td>80 °C</td><td>4 à 6 h</td><td>0,1 à 0,2 %</td></tr>\n<tr><td>PET</td><td>160 à 170 °C</td><td>4 à 6 h</td><td>inférieure à 0,005 %</td></tr>\n</tbody>\n</table>\n<p>Ces valeurs sont indicatives : la fiche technique du grade fait foi. Le temps de séjour dans la trémie de séchage doit être au moins égal à la durée de séchage : si la presse consomme 20 kg/h et que le séchage exige 4 h, la trémie doit contenir au moins 80 kg de matière.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sécher trop longtemps ou trop chaud fait jaunir et dégrade certaines matières (PA notamment). Un séchage n'est pas « mieux » parce qu'il est plus long : il doit respecter la plage indiquée.</div>"
      },
      {
       "titre": "Rebroyé, stockage et traçabilité",
       "contenu": "<p>Les carottes, pièces de démarrage et rebuts de thermoplastique peuvent être broyés dans un <strong>broyeur</strong> placé au pied de la presse ou en atelier. Le <strong>rebroyé</strong> obtenu est réintroduit dans la matière vierge selon un <strong>taux maximal</strong> défini par le client ou le dossier de fabrication (souvent de 10 à 25 %, parfois 0 % pour les pièces de sécurité ou médicales). Le rebroyé doit être propre, sec, de même matière et de même couleur, et ne pas contenir de poussières fines qui brûlent dans le fourreau.</p>\n<p>Le <strong>stockage</strong> des matières se fait dans un local propre, à l'abri des intempéries, sur palettes, les sacs fermés. Chaque contenant porte une étiquette avec la référence du grade, le fournisseur, le <strong>numéro de lot</strong> et la date de réception. On applique la règle du <strong>premier entré, premier sorti</strong> (PEPS, ou FIFO). Les résines thermodurcissables et les préimprégnés ont une <strong>durée de vie limitée</strong> et parfois une température de stockage imposée (les préimprégnés sont conservés au congélateur, vers −18 °C).</p>\n<p>La <strong>traçabilité</strong> consiste à pouvoir retrouver, pour un lot de pièces, les lots de matières utilisés, la machine, le moule, la date et l'opérateur. Elle repose sur la fiche suiveuse, l'étiquetage des emballages et l'enregistrement des numéros de lot au chargement de la trémie.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un changement de matière ou de couleur, la trémie, le sécheur, le doseur et le broyeur doivent être vidés et nettoyés. Un seul granulé d'une autre matière peut créer une inclusion visible sur une pièce transparente. La purge du fourreau se poursuit jusqu'à disparition complète de l'ancienne teinte.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> préparer une matière, c'est vérifier la référence, calculer la quantité, sécher si nécessaire, doser colorant et rebroyé, et garantir l'identification du lot jusqu'à la pièce.</div>"
      }
     ],
     "points_cles": [
      "Un compound associe polymère, additifs, charges ou renforts ; le grade exact doit être respecté",
      "Les charges minérales réduisent le coût et le retrait ; les fibres de verre augmentent rigidité et résistance",
      "Les fibres courtes rendent la pièce anisotrope et usent les équipements",
      "Le mélange-maître se dose en faible pourcentage, au doseur volumétrique ou gravimétrique",
      "Les matières hygroscopiques (PA, PC, PET, PBT, ABS, PMMA) se sèchent en dessiccateur à air déshydraté",
      "Le temps de séjour en trémie de séchage doit couvrir la durée de séchage",
      "Le rebroyé est limité à un taux maximal prescrit, propre et de même matière",
      "Stockage PEPS, étiquetage par lot et enregistrement des lots assurent la traçabilité"
     ],
     "lexique": [
      {
       "terme": "Compound",
       "def": "Mélange prêt à transformer d'un polymère avec ses additifs, charges ou renforts."
      },
      {
       "terme": "Additif",
       "def": "Produit ajouté en faible quantité pour modifier la mise en œuvre ou les propriétés d'une matière."
      },
      {
       "terme": "Charge",
       "def": "Poudre minérale incorporée pour réduire le coût ou améliorer rigidité et stabilité."
      },
      {
       "terme": "Mélange-maître",
       "def": "Granulés concentrés en pigments ou additifs, dilués dans la matière naturelle au moment de la transformation."
      },
      {
       "terme": "Hygroscopique",
       "def": "Se dit d'une matière qui absorbe l'humidité de l'air."
      },
      {
       "terme": "Hydrolyse",
       "def": "Coupure des chaînes d'un polymère par l'eau à haute température, qui fragilise les pièces."
      },
      {
       "terme": "Point de rosée",
       "def": "Température à laquelle la vapeur d'eau de l'air se condense ; plus il est bas, plus l'air est sec."
      },
      {
       "terme": "Rebroyé",
       "def": "Matière obtenue par broyage des carottes et rebuts, réutilisable dans une proportion limitée."
      },
      {
       "terme": "PEPS",
       "def": "Premier entré, premier sorti : règle de gestion des stocks qui utilise d'abord les lots les plus anciens."
      },
      {
       "terme": "Traçabilité",
       "def": "Possibilité de retrouver l'historique et l'origine des matières et des conditions de fabrication d'un lot."
      }
     ]
    },
    {
     "id": "bpc-materiaux-composites",
     "titre": "Matériaux composites : renforts, matrices et stratifiés",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Définir un matériau composite et le rôle respectif du renfort et de la matrice",
      "Distinguer les fibres de verre, de carbone, d'aramide et naturelles, et leurs formes de présentation",
      "Comparer les résines polyester, vinylester et époxyde et expliquer leur système de durcissement",
      "Calculer un taux de renfort massique ou volumique et une masse de résine à préparer",
      "Décrire un stratifié, une séquence d'empilement et une structure sandwich"
     ],
     "sections": [
      {
       "titre": "Le principe du composite",
       "contenu": "<p>Un <strong>matériau composite</strong> associe au moins deux constituants non miscibles dont les qualités se complètent. Dans les composites de structure, on associe :</p>\n<ul>\n<li>un <strong>renfort</strong>, le plus souvent fibreux, qui supporte l'essentiel des efforts et apporte rigidité et résistance ;</li>\n<li>une <strong>matrice</strong>, en général une résine thermodurcissable, qui lie les fibres, leur transmet les efforts, les protège de l'environnement et donne la forme de la pièce.</li>\n</ul>\n<p>La qualité de la liaison entre fibre et matrice, appelée <strong>interface</strong>, est assurée par un traitement de surface des fibres, l'<strong>ensimage</strong>, compatible avec la résine utilisée. Un composite associe ainsi la légèreté (masse volumique de 1,5 à 2 g/cm<sup>3</sup>) à de bonnes performances mécaniques, une excellente tenue à la corrosion et une grande liberté de forme. Ses limites sont la mise en œuvre souvent manuelle, le recyclage difficile et la sensibilité aux chocs (délaminage).</p>\n<p>Les composites sont classés en <strong>composites de grande diffusion</strong> (verre-polyester : bateaux de plaisance, cuves, panneaux, carrosseries de poids lourds) et <strong>composites hautes performances</strong> (carbone-époxyde : aéronautique, sport, automobile de course, éoliennes).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le renfort porte les efforts, la matrice les transmet et protège. Un composite n'a de bonnes propriétés que dans les directions où les fibres sont placées.</div>"
      },
      {
       "titre": "Les fibres de renfort",
       "contenu": "<table>\n<thead><tr><th>Fibre</th><th>Masse volumique (g/cm<sup>3</sup>)</th><th>Module (GPa, ordre de grandeur)</th><th>Points forts</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Verre E</td><td>2,54 à 2,6</td><td>70 à 75</td><td>Bon marché, bonne résistance, isolant</td><td>Lourde, module modeste</td></tr>\n<tr><td>Carbone haute résistance</td><td>1,75 à 1,8</td><td>230 à 240</td><td>Très rigide et légère</td><td>Coûteuse, conductrice, fragile au choc</td></tr>\n<tr><td>Aramide (Kevlar)</td><td>1,44</td><td>70 à 130</td><td>Très résistante au choc et à l'abrasion</td><td>Faible en compression, difficile à découper, sensible aux UV</td></tr>\n<tr><td>Lin, chanvre</td><td>1,4 à 1,5</td><td>30 à 60</td><td>Biosourcées, légères, amortissantes</td><td>Sensibles à l'humidité, propriétés variables</td></tr>\n</tbody>\n</table>\n<p>Les fibres sont livrées sous différentes <strong>formes</strong> :</p>\n<ul>\n<li>le <strong>roving</strong> (stratifil) : faisceau de filaments continus enroulé en bobine, utilisé en projection (après coupe), en pultrusion et en enroulement filamentaire ;</li>\n<li>le <strong>mat</strong> : fibres coupées (mat à fils coupés) ou continues réparties au hasard et liées par un liant ; propriétés identiques dans toutes les directions du plan, facile à draper ; désigné par sa masse surfacique (par exemple mat 300 ou 450 g/m<sup>2</sup>) ;</li>\n<li>le <strong>tissu</strong> : fils entrecroisés en chaîne et en trame selon une <strong>armure</strong> (taffetas, sergé, satin) ; plus résistant que le mat dans les directions des fils ;</li>\n<li>l'<strong>unidirectionnel</strong> (UD) : fibres toutes parallèles, performances maximales dans une seule direction ;</li>\n<li>le <strong>multiaxial</strong> (ou complexe cousu) : nappes UD superposées à 0°, 90°, ±45° et cousues ; souvent associé à un mat ;</li>\n<li>le <strong>préimprégné</strong> : renfort déjà imprégné de résine partiellement réactive, conservé au froid.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un tissu ou un UD posé de travers par rapport à l'orientation indiquée sur le plan de drapage peut faire chuter fortement la rigidité de la pièce dans la direction prévue. Le respect des orientations est un point de contrôle, au même titre que le nombre de plis.</div>"
      },
      {
       "titre": "Les matrices thermodurcissables et leur durcissement",
       "contenu": "<p>Les résines des composites sont livrées liquides. Leur durcissement résulte d'une réaction de réticulation <strong>exothermique</strong> (qui dégage de la chaleur).</p>\n<table>\n<thead><tr><th>Résine</th><th>Système de durcissement</th><th>Propriétés</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Polyester insaturé (UP)</td><td>Catalyseur peroxyde (PMEC) + accélérateur (sel de cobalt souvent pré-incorporé), dosage de 1 à 2 % de catalyseur</td><td>Bon marché, retrait de cuisson important, contient du styrène</td><td>Nautisme, cuves, panneaux, gelcoats</td></tr>\n<tr><td>Vinylester (VE)</td><td>Même principe que l'UP</td><td>Meilleure tenue chimique et à la fatigue</td><td>Cuves chimiques, coques performantes</td></tr>\n<tr><td>Époxyde (EP)</td><td>Durcisseur (amine, anhydride) en proportion stœchiométrique stricte, par exemple 100/30 en masse</td><td>Excellente adhérence, faible retrait, meilleures performances</td><td>Aéronautique, carbone, outillages</td></tr>\n<tr><td>Phénolique (PF)</td><td>Durcissement acide ou à chaud</td><td>Très bon comportement au feu, peu de fumées</td><td>Ferroviaire, intérieurs d'avion</td></tr>\n</tbody>\n</table>\n<p>Au cours du durcissement, la résine passe par plusieurs états : liquide, puis <strong>gel</strong> (elle ne coule plus et file lorsqu'on la touche), puis solide. Le <strong>temps de gel</strong> (pot life ou durée pratique d'utilisation) est le temps disponible pour imprégner le renfort : il diminue quand la température ou le taux de catalyseur augmentent. Après le gel, la pièce continue de durcir ; une <strong>post-cuisson</strong> (passage en étuve, par exemple quelques heures à 60 à 80 °C) permet d'atteindre les propriétés finales.</p>\n<p>La surface des pièces moulées au contact est souvent constituée d'un <strong>gelcoat</strong> : couche de résine chargée et pigmentée, de 0,4 à 0,8 mm, appliquée en premier sur le moule. Il donne l'aspect et protège le stratifié de l'eau et des UV.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> pour les résines polyester, le catalyseur (peroxyde) et l'accélérateur ne doivent jamais être mélangés directement entre eux : la réaction est violente et peut provoquer un incendie ou une explosion. Pour les époxydes, ajouter « un peu plus de durcisseur pour aller plus vite » est une erreur : le rapport de mélange est fixe et tout écart dégrade les propriétés.</div>"
      },
      {
       "titre": "Taux de renfort et calculs de matière",
       "contenu": "<p>Les propriétés d'un composite dépendent de la proportion de fibres. On utilise :</p>\n<ul>\n<li>le <strong>taux massique</strong> de fibres : T<sub>m</sub> = masse de fibres / masse totale du stratifié ;</li>\n<li>le <strong>taux volumique</strong> de fibres : V<sub>f</sub> = volume de fibres / volume total.</li>\n</ul>\n<p>Ordres de grandeur du taux massique de verre : 25 à 35 % en moulage au contact avec du mat, 45 à 60 % avec des tissus ou en infusion, 60 à 75 % en pultrusion ou enroulement. Un taux plus élevé signifie une pièce plus résistante et plus légère à résistance égale, mais exige un procédé plus maîtrisé.</p>\n<p>La <strong>loi des mélanges</strong> donne une estimation des propriétés dans la direction des fibres : E<sub>c</sub> ≈ V<sub>f</sub> × E<sub>f</sub> + (1 − V<sub>f</sub>) × E<sub>m</sub>, avec E<sub>f</sub> le module de la fibre et E<sub>m</sub> celui de la matrice. Elle ne s'applique qu'aux UD sollicités dans le sens des fibres.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer la résine pour un stratifié au contact. Pièce de 2 m<sup>2</sup>, 3 plis de mat 450 g/m<sup>2</sup>, taux massique de verre visé 30 %, catalyseur à 1,5 %. 1) Masse de verre = 2 × 3 × 450 = 2 700 g. 2) Masse totale du stratifié = 2 700 / 0,30 = 9 000 g. 3) Masse de résine = 9 000 − 2 700 = 6 300 g (rapport résine/verre de 2,33). 4) Catalyseur = 1,5 % × 6 300 = 94,5 g, soit environ 95 g. 5) On ne prépare que la quantité utilisable avant le gel, donc en plusieurs gâchées si nécessaire.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> on vérifie le taux de verre réel d'un stratifié par <strong>calcination</strong> : un échantillon pesé est chauffé au four jusqu'à brûler la résine, puis on pèse le verre restant. C'est un contrôle courant en réception de pièces ou en qualification d'un opérateur.</div>"
      },
      {
       "titre": "Stratifiés, sandwichs et composites thermoplastiques",
       "contenu": "<p>Un <strong>stratifié</strong> est un empilement de <strong>plis</strong> (couches de renfort imprégnées). La <strong>séquence d'empilement</strong> indique pour chaque pli la nature du renfort et son orientation, par exemple [0/90/±45/90/0]. Un stratifié <strong>symétrique</strong> par rapport à son plan moyen ne se déforme pas au démoulage ; un stratifié dissymétrique tend à se voiler sous l'effet du retrait.</p>\n<p>Une <strong>structure sandwich</strong> place une <strong>âme</strong> légère (mousse PVC ou PET, nid d'abeilles, balsa) entre deux <strong>peaux</strong> stratifiées. Comme une poutre en I, elle éloigne la matière du plan moyen : la rigidité en flexion augmente fortement pour une faible augmentation de masse. L'âme doit être collée sur toute sa surface, sans vide, faute de quoi la structure perd sa rigidité.</p>\n<p>Les composites à matrice thermoplastique se développent : <strong>thermoplastiques renforcés de fibres courtes</strong> injectés, <strong>GMT</strong> et <strong>LFT</strong> (fibres longues) mis en forme par compression, et <strong>organosheets</strong> (tissus imprégnés de PA ou de PP) thermoformés puis surmoulés. Ils sont refusibles, donc soudables et plus facilement recyclables, et se transforment en cycles de l'ordre de la minute.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le plan de drapage fixe le nombre de plis, leur nature, leur orientation et leur ordre. Symétrie de l'empilement et continuité du collage de l'âme sont les deux conditions d'un stratifié stable et rigide.</div>"
      }
     ],
     "points_cles": [
      "Le composite associe un renfort qui porte les efforts et une matrice qui les transmet et donne la forme",
      "Verre E pour la grande diffusion, carbone pour la rigidité et la légèreté, aramide pour le choc",
      "Roving, mat, tissu, UD, multiaxial et préimprégné sont les principales formes de renfort",
      "Le polyester durcit avec un catalyseur peroxyde dosé de 1 à 2 % ; l'époxyde avec un durcisseur en rapport fixe",
      "Catalyseur et accélérateur ne doivent jamais être mélangés directement",
      "Le temps de gel diminue quand la température ou le dosage de catalyseur augmentent",
      "Masse de résine = masse de renfort × (1 − Tm) / Tm",
      "Un stratifié symétrique ne se voile pas ; un sandwich gagne en rigidité de flexion"
     ],
     "lexique": [
      {
       "terme": "Matrice",
       "def": "Résine qui lie les fibres d'un composite et leur transmet les efforts."
      },
      {
       "terme": "Ensimage",
       "def": "Traitement de surface des fibres qui assure leur liaison avec la résine."
      },
      {
       "terme": "Roving",
       "def": "Faisceau de filaments continus enroulé en bobine, aussi appelé stratifil."
      },
      {
       "terme": "Mat",
       "def": "Nappe de fibres disposées au hasard et liées, aux propriétés identiques dans le plan."
      },
      {
       "terme": "Armure",
       "def": "Mode d'entrecroisement des fils de chaîne et de trame d'un tissu."
      },
      {
       "terme": "PMEC",
       "def": "Peroxyde de méthyléthylcétone, catalyseur courant des résines polyester."
      },
      {
       "terme": "Temps de gel",
       "def": "Durée pendant laquelle la résine catalysée reste liquide et utilisable."
      },
      {
       "terme": "Gelcoat",
       "def": "Couche de surface pigmentée appliquée en premier sur le moule pour l'aspect et la protection."
      },
      {
       "terme": "Pli",
       "def": "Couche élémentaire de renfort imprégné dans un stratifié."
      },
      {
       "terme": "Âme",
       "def": "Matériau léger placé entre les deux peaux d'une structure sandwich."
      },
      {
       "terme": "Post-cuisson",
       "def": "Chauffage complémentaire d'une pièce après durcissement pour atteindre ses propriétés finales."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Techniques de production",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpc-injection-presse-cycle",
     "titre": "Le moulage par injection : presse et cycle",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Décrire les ensembles fonctionnels d'une presse à injecter et leur rôle",
      "Expliquer le fonctionnement de la vis de plastification et du clapet anti-retour",
      "Décomposer un cycle d'injection en phases et estimer un temps de cycle",
      "Calculer une force de fermeture nécessaire et vérifier la capacité d'une presse",
      "Comparer presses hydrauliques, électriques et hybrides"
     ],
     "sections": [
      {
       "titre": "Principe et domaine d'emploi",
       "contenu": "<p>Le <strong>moulage par injection</strong> est le procédé le plus utilisé pour fabriquer des pièces thermoplastiques en grande série : boîtiers, pièces automobiles, bouchons, connecteurs, pièces médicales. Son principe est simple : la matière, en granulés, est fondue dans un cylindre chauffé, puis poussée sous forte pression dans un <strong>moule</strong> fermé et régulé en température, dont la cavité, l'<strong>empreinte</strong>, a la forme de la pièce. La matière s'y refroidit et se solidifie ; le moule s'ouvre et la pièce est éjectée.</p>\n<p>Le procédé permet des formes complexes, des tolérances serrées et des cadences élevées (de quelques secondes à quelques minutes par cycle), avec peu de reprises. En contrepartie, le moule coûte cher (de quelques milliers à plusieurs centaines de milliers d'euros) : l'injection se justifie pour des séries importantes.</p>\n<p>Il existe des variantes : <strong>bi-injection</strong> (deux matières ou deux couleurs), <strong>surmoulage</strong> d'un insert métallique ou d'une pièce plastique, <strong>injection assistée gaz</strong> ou <strong>eau</strong> pour évider les parties épaisses, <strong>injection-compression</strong>, <strong>moulage dans le moule</strong> (étiquette ou film décor placé dans l'empreinte). Les thermodurcissables (BMC) et les élastomères s'injectent aussi, avec un moule chaud.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en injection de thermoplastique, la matière est chaude et le moule relativement froid : c'est le refroidissement dans le moule qui fige la pièce et qui représente la plus grande partie du temps de cycle.</div>"
      },
      {
       "titre": "Les ensembles d'une presse à injecter",
       "contenu": "<p>Une presse à injecter comprend quatre ensembles :</p>\n<table>\n<thead><tr><th>Ensemble</th><th>Constituants</th><th>Fonction</th></tr></thead>\n<tbody>\n<tr><td>Unité d'injection (ou de plastification)</td><td>Trémie, fourreau (cylindre) avec colliers chauffants et zones régulées, vis, clapet anti-retour, buse, vérin d'injection, moteur de rotation de la vis</td><td>Fondre, homogénéiser, doser et injecter la matière</td></tr>\n<tr><td>Unité de fermeture</td><td>Plateau fixe, plateau mobile, colonnes, genouillère ou vérin de fermeture, système d'éjection</td><td>Ouvrir, fermer, verrouiller le moule et éjecter la pièce</td></tr>\n<tr><td>Groupe de puissance</td><td>Pompe hydraulique et moteur, ou servomoteurs électriques</td><td>Fournir l'énergie aux mouvements</td></tr>\n<tr><td>Commande</td><td>Automate, pupitre, capteurs de position, de pression, de température</td><td>Régler, piloter et surveiller le cycle</td></tr>\n</tbody>\n</table>\n<p>La <strong>vis de plastification</strong> se divise en trois zones : la <strong>zone d'alimentation</strong> (filets profonds, transport des granulés solides), la <strong>zone de compression</strong> (profondeur de filet décroissante, fusion de la matière par la chaleur des colliers et surtout par le frottement, appelé <strong>cisaillement</strong>), et la <strong>zone de pompage</strong> ou de dosage (filets peu profonds, homogénéisation). En tournant, la vis transporte la matière fondue vers l'avant et recule sous la pression de la matière accumulée : c'est le <strong>dosage</strong>. À l'injection, la vis avance comme un piston ; le <strong>clapet anti-retour</strong> placé à sa pointe se ferme et empêche la matière de refluer dans les filets.</p>\n<p>Le <strong>système d'éjection</strong> comporte des éjecteurs (tiges, lames, plaque dévêtisseuse) actionnés par l'éjecteur de la presse. La fermeture est assurée soit par une <strong>genouillère</strong> (système à leviers, rapide et économe), soit par un <strong>vérin</strong> central (fermeture hydraulique directe).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les presses sont désignées par leur force de fermeture en tonnes ou en kilonewtons (par exemple presse de 200 t, soit environ 2 000 kN) et par le diamètre de leur vis. Une même pièce peut être produite sur plusieurs presses à condition que la force de fermeture, la capacité d'injection, le passage entre colonnes et la course d'ouverture conviennent.</div>"
      },
      {
       "titre": "Le cycle d'injection pas à pas",
       "contenu": "<p>Un cycle automatique se déroule dans l'ordre suivant :</p>\n<ol>\n<li><strong>Fermeture</strong> du moule : rapide, puis lente en fin de course avec la <strong>sécurité moule</strong> (basse pression qui stoppe la fermeture si un objet est coincé entre les plans de joint), enfin <strong>verrouillage</strong> à pleine force.</li>\n<li><strong>Avance de l'unité d'injection</strong> : la buse vient en appui sur la bague d'injection du moule.</li>\n<li><strong>Injection dynamique</strong> (remplissage) : la vis avance à la vitesse programmée et remplit environ 95 à 98 % de l'empreinte.</li>\n<li><strong>Commutation</strong> : à une position de vis (ou une pression, ou un temps) définie, la presse passe du pilotage en vitesse au pilotage en pression.</li>\n<li><strong>Maintien</strong> (phase de compactage) : une pression plus faible est maintenue pour compenser le retrait de la matière qui refroidit, jusqu'au <strong>figeage du seuil</strong>.</li>\n<li><strong>Refroidissement</strong> : la pièce continue de refroidir dans le moule. Pendant ce temps, la vis tourne et recule pour <strong>doser</strong> la matière du cycle suivant, contre une <strong>contre-pression</strong> réglée qui améliore l'homogénéité.</li>\n<li><strong>Décompression</strong> (recul de vis sans rotation) pour éviter que la matière ne coule par la buse.</li>\n<li><strong>Ouverture</strong> du moule, <strong>éjection</strong> de la pièce, puis prise par un robot ou chute dans un convoyeur.</li>\n</ol>\n<p>La quantité de matière restant devant la vis en fin de maintien s'appelle le <strong>matelas</strong> (ou coussin). Il doit rester constant d'un cycle à l'autre : c'est un indicateur de stabilité du procédé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un matelas nul signifie que la vis est arrivée en butée : la pression de maintien ne s'applique plus à la pièce, qui présente alors des retassures ou des manques. Un matelas qui varie fortement révèle souvent un clapet anti-retour usé.</div>"
      },
      {
       "titre": "Le temps de cycle",
       "contenu": "<p>Le <strong>temps de cycle</strong> est la somme des durées des phases qui ne se recouvrent pas : temps de fermeture et de verrouillage, temps d'injection, temps de maintien, temps de refroidissement, temps d'ouverture, d'éjection et de prise. Le dosage se fait pendant le refroidissement et ne rallonge le cycle que s'il dure plus longtemps que lui.</p>\n<p>Le <strong>temps de refroidissement</strong> dépend surtout de l'<strong>épaisseur</strong> de la pièce : il est proportionnel au carré de l'épaisseur. Doubler l'épaisseur multiplie donc environ par quatre le temps de refroidissement. C'est pour cela que les concepteurs cherchent des épaisseurs faibles et régulières, typiquement de 1 à 4 mm.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une cadence. Phases relevées : fermeture et verrouillage 2,5 s, injection 1,5 s, maintien 6 s, refroidissement 14 s, ouverture, éjection et prise 4 s. Le dosage (9 s) se fait pendant le refroidissement. 1) Temps de cycle = 2,5 + 1,5 + 6 + 14 + 4 = 28 s. 2) Nombre de cycles par heure = 3 600 / 28 ≈ 128. 3) Avec un moule 4 empreintes : 128 × 4 = 512 pièces/h. 4) Pour 50 000 pièces : 50 000 / 512 ≈ 98 h de production théorique, hors arrêts.</div>"
      },
      {
       "titre": "Force de fermeture et capacité d'injection",
       "contenu": "<p>Pendant l'injection, la pression de la matière dans l'empreinte tend à ouvrir le moule. La presse doit développer une <strong>force de fermeture</strong> supérieure à cette force d'ouverture, sinon la matière s'échappe au plan de joint et forme des <strong>bavures</strong>. On calcule :</p>\n<p>F = p × S<sub>p</sub></p>\n<p>où p est la pression moyenne dans l'empreinte et S<sub>p</sub> la <strong>surface projetée</strong> de toutes les empreintes et des canaux sur le plan de joint (la surface « vue » dans le sens d'ouverture). La pression moyenne en empreinte va de 200 à 600 bar environ selon la fluidité de la matière et l'épaisseur des pièces ; les fournisseurs indiquent des valeurs de référence. On ajoute une marge de sécurité de l'ordre de 10 à 20 %.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la presse. Moule 2 empreintes, chaque pièce a une surface projetée de 150 cm<sup>2</sup>, canaux 20 cm<sup>2</sup>, pression moyenne en empreinte 350 bar. 1) S<sub>p</sub> = 2 × 150 + 20 = 320 cm<sup>2</sup>. 2) 350 bar = 35 MPa = 3 500 N/cm<sup>2</sup>. 3) F = 3 500 × 320 = 1 120 000 N = 1 120 kN. 4) Avec 15 % de marge : 1 120 × 1,15 ≈ 1 290 kN, soit une presse d'au moins 130 t environ. Une presse de 150 t (environ 1 500 kN) convient.</div>\n<p>On vérifie aussi la <strong>capacité d'injection</strong> : le volume injecté (pièces + carotte) doit se situer idéalement entre 20 et 80 % de la capacité maximale du fourreau. Trop faible, la matière séjourne longtemps dans le fourreau et se dégrade ; trop forte, le dosage devient imprécis.</p>"
      },
      {
       "titre": "Presses hydrauliques, électriques et hybrides",
       "contenu": "<p>Les <strong>presses hydrauliques</strong> utilisent une pompe et des vérins. Robustes et adaptées aux fortes forces, elles consomment davantage d'énergie et chauffent l'huile, qu'il faut refroidir. Les pompes à débit variable ou à moteur asservi réduisent cette consommation.</p>\n<p>Les <strong>presses tout électriques</strong> entraînent chaque mouvement par un servomoteur et des vis à billes ou des courroies. Elles sont précises, répétables, propres (pas d'huile), silencieuses et consomment nettement moins d'énergie ; elles sont très utilisées pour les pièces techniques, médicales et les petites pièces de précision.</p>\n<p>Les <strong>presses hybrides</strong> combinent par exemple une plastification électrique et une fermeture hydraulique. On rencontre aussi des presses <strong>verticales</strong>, pratiques pour le surmoulage d'inserts placés à la main ou par robot dans un moule à plan de joint horizontal.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les valeurs de pression affichées sur certaines presses hydrauliques sont des pressions hydrauliques et non des pressions matière. Il faut les multiplier par le <strong>rapport d'intensification</strong> de l'unité d'injection (souvent de l'ordre de 10) pour connaître la pression réelle sur la matière. Un réglage recopié d'une presse à une autre sans tenir compte de ce rapport donne des résultats faux.</div>"
      }
     ],
     "points_cles": [
      "L'injection fond la matière dans un fourreau et la pousse sous pression dans un moule régulé",
      "La vis comporte trois zones : alimentation, compression, pompage",
      "Le clapet anti-retour empêche le reflux pendant l'injection et le maintien",
      "Cycle : fermeture, injection, commutation, maintien, refroidissement avec dosage, ouverture, éjection",
      "Le matelas doit rester constant et jamais nul",
      "Le temps de refroidissement croît avec le carré de l'épaisseur",
      "Force de fermeture = pression moyenne en empreinte × surface projetée, avec une marge",
      "Les presses électriques sont plus précises et plus économes que les hydrauliques"
     ],
     "lexique": [
      {
       "terme": "Empreinte",
       "def": "Cavité du moule qui a la forme de la pièce."
      },
      {
       "terme": "Fourreau",
       "def": "Cylindre chauffé dans lequel tourne la vis de plastification."
      },
      {
       "terme": "Clapet anti-retour",
       "def": "Bague montée en bout de vis qui empêche la matière de refluer à l'injection."
      },
      {
       "terme": "Dosage",
       "def": "Préparation, par rotation et recul de la vis, de la quantité de matière du cycle suivant."
      },
      {
       "terme": "Commutation",
       "def": "Passage de la phase de remplissage pilotée en vitesse à la phase de maintien pilotée en pression."
      },
      {
       "terme": "Matelas",
       "def": "Réserve de matière restant devant la vis en fin de maintien."
      },
      {
       "terme": "Seuil",
       "def": "Passage rétréci par lequel la matière entre dans l'empreinte."
      },
      {
       "terme": "Surface projetée",
       "def": "Surface des empreintes et canaux vue dans la direction d'ouverture du moule."
      },
      {
       "terme": "Genouillère",
       "def": "Mécanisme à leviers qui ferme et verrouille le moule."
      },
      {
       "terme": "Rapport d'intensification",
       "def": "Rapport entre la pression sur la matière et la pression hydraulique dans le vérin d'injection."
      }
     ]
    },
    {
     "id": "bpc-injection-parametres-reglage",
     "titre": "Paramètres et réglage d'un procédé d'injection",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les paramètres de réglage d'une presse et leur influence sur la pièce",
      "Régler les températures matière et moule à partir des données du fournisseur",
      "Déterminer le point de commutation par la méthode de remplissage progressif",
      "Déterminer le temps de maintien par la méthode de pesée",
      "Distinguer paramètres de consigne et grandeurs mesurées pour suivre la stabilité du procédé"
     ],
     "sections": [
      {
       "titre": "Consignes, grandeurs mesurées et fenêtre de procédé",
       "contenu": "<p>Une presse se règle par des <strong>consignes</strong> (valeurs demandées : températures, vitesses, pressions, positions, temps) et se surveille par des <strong>grandeurs mesurées</strong> (valeurs réellement obtenues : température matière, pression maximale d'injection atteinte, temps de remplissage, matelas, temps de dosage, temps de cycle). Les secondes renseignent sur la stabilité : une pièce peut changer alors qu'aucune consigne n'a été modifiée, parce qu'une grandeur réelle a dérivé (matière plus humide, eau de refroidissement plus chaude, clapet usé).</p>\n<p>Pour chaque pièce, il existe une plage de réglages qui donne des pièces conformes : c'est la <strong>fenêtre de procédé</strong>. Un bon réglage se place au centre de cette fenêtre, pour tolérer les petites variations. Le réglage validé est enregistré sur la <strong>fiche de réglage</strong> et dans la mémoire de la presse ; il est accompagné de <strong>tolérances</strong> sur les paramètres sensibles.</p>\n<p>Les paramètres se regroupent en quatre familles : <strong>thermiques</strong> (fourreau, buse, moule, canaux chauds), <strong>de remplissage</strong> (dosage, vitesse, commutation), <strong>de compactage</strong> (pression et temps de maintien) et <strong>de cycle</strong> (refroidissement, mouvements, éjection).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on règle avec les consignes, on pilote avec les mesures. Un réglage n'est stable que si les grandeurs mesurées restent constantes d'un cycle à l'autre.</div>"
      },
      {
       "titre": "Les paramètres thermiques",
       "contenu": "<p>Le <strong>profil de température du fourreau</strong> se règle zone par zone, de la trémie vers la buse. On part de la plage indiquée par le fournisseur de matière. La zone sous la trémie est refroidie par eau pour éviter que les granulés ne collent. Le profil est en général croissant vers la buse ; pour les matières sensibles au cisaillement ou pour de faibles capacités utilisées, on adopte parfois un profil plat ou décroissant.</p>\n<p>La <strong>température matière réelle</strong> se mesure au pyromètre à aiguille sur une purge (injection dans le vide, unité reculée). Elle peut dépasser les consignes de quelques degrés à cause du cisaillement de la vis.</p>\n<p>La <strong>température du moule</strong>, obtenue par un <strong>thermorégulateur</strong> à eau ou à huile, influence l'aspect, le retrait, les contraintes internes et la cristallinité. Un moule plus chaud améliore la brillance et le remplissage, réduit les contraintes, mais allonge le refroidissement.</p>\n<table>\n<thead><tr><th>Matière</th><th>Température matière (ordre de grandeur)</th><th>Température moule (ordre de grandeur)</th></tr></thead>\n<tbody>\n<tr><td>PP</td><td>200 à 260 °C</td><td>20 à 60 °C</td></tr>\n<tr><td>ABS</td><td>220 à 260 °C</td><td>50 à 80 °C</td></tr>\n<tr><td>PC</td><td>280 à 310 °C</td><td>80 à 110 °C</td></tr>\n<tr><td>PA66</td><td>270 à 300 °C</td><td>60 à 90 °C</td></tr>\n<tr><td>POM</td><td>190 à 220 °C</td><td>60 à 100 °C</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le temps de séjour de la matière dans le fourreau compte autant que la température. Lors d'un arrêt prolongé, la matière stagnante se dégrade : il faut baisser les températures ou purger avant de redémarrer, en particulier avec le POM ou le PVC dont la dégradation dégage des gaz toxiques et corrosifs.</div>"
      },
      {
       "titre": "Le remplissage : dosage, vitesse et commutation",
       "contenu": "<p>La <strong>course de dosage</strong> fixe le volume préparé. Elle se calcule à partir du volume à injecter et de la section de la vis : course = volume / (π × D<sup>2</sup> / 4). On l'ajuste pour obtenir le matelas souhaité en fin de maintien.</p>\n<p>La <strong>vitesse de rotation</strong> de la vis et la <strong>contre-pression</strong> règlent la qualité de la fusion. Une contre-pression plus élevée améliore l'homogénéité et la dispersion du colorant mais allonge le dosage et chauffe la matière.</p>\n<p>La <strong>vitesse d'injection</strong> (en mm/s de course de vis, ou en cm<sup>3</sup>/s) agit sur l'aspect et le remplissage. Trop lente, la matière se fige avant la fin et laisse des manques, des lignes de soudure marquées ou des marques d'écoulement ; trop rapide, elle provoque des brûlures en fin d'écoulement (air comprimé), des jets libres ou des bavures. On peut programmer un <strong>profil de vitesse</strong> : lent au passage du seuil, rapide dans le corps de pièce, ralenti en fin de remplissage.</p>\n<p>Le <strong>point de commutation</strong> est en général réglé en position de vis. Il doit correspondre à un remplissage de 95 à 98 % de l'empreinte.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déterminer le point de commutation par remplissage progressif. 1) Régler la pression de maintien à zéro (ou au minimum) pour n'observer que la phase dynamique. 2) Placer la commutation loin (course longue) pour obtenir une pièce nettement incomplète. 3) Avancer progressivement le point de commutation, injection après injection, en conservant chaque pièce dans l'ordre. 4) S'arrêter lorsque la pièce est remplie à environ 95 à 98 %, sans bavure : c'est la position de commutation. 5) Rétablir ensuite la pression de maintien. La série de pièces obtenues, dite « courte injection », montre aussi le chemin de la matière et la position des lignes de soudure.</div>"
      },
      {
       "titre": "Le compactage : pression et temps de maintien",
       "contenu": "<p>Après la commutation, la <strong>pression de maintien</strong> pousse un complément de matière dans l'empreinte pour compenser le retrait au refroidissement. Elle s'exprime souvent en pourcentage de la pression d'injection atteinte ou en bars. Trop faible : retassures, vides, cotes trop petites, masse faible. Trop forte : bavures, pièces collant dans le moule, contraintes internes, cotes trop grandes.</p>\n<p>Le <strong>temps de maintien</strong> doit durer au moins jusqu'au <strong>figeage du seuil</strong>, c'est-à-dire jusqu'à ce que la matière soit solidifiée dans le seuil : au-delà, la pression ne transmet plus rien à la pièce. S'il est trop court, la matière encore fluide reflue de l'empreinte vers les canaux et la pièce présente des retassures près du seuil.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déterminer le temps de maintien par pesée. 1) Fixer la pression de maintien à sa valeur nominale. 2) Réaliser des pièces avec des temps de maintien croissants, par exemple 1, 2, 3, 4, 5, 6, 7 s. 3) Peser chaque pièce sans la carotte sur une balance précise. 4) Reporter la masse en fonction du temps : elle augmente puis se stabilise. 5) Le temps à partir duquel la masse ne change plus correspond au figeage du seuil ; on retient ce temps augmenté d'une marge d'environ 1 s. Exemple : masses 24,10 ; 24,42 ; 24,61 ; 24,70 ; 24,71 ; 24,71 g pour 1 à 6 s : le seuil fige vers 4 s, on règle 5 s.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la masse de la pièce est l'un des meilleurs indicateurs de stabilité. De nombreuses entreprises pèsent régulièrement une pièce par empreinte et l'enregistrent sur une carte de contrôle : une dérive de masse précède souvent une dérive de cotes.</div>"
      },
      {
       "titre": "Refroidissement, éjection et optimisation du cycle",
       "contenu": "<p>Le <strong>temps de refroidissement</strong> doit permettre d'éjecter la pièce sans la déformer. On le réduit progressivement en surveillant les déformations, les marques d'éjecteurs et la stabilité dimensionnelle après 24 h. L'efficacité du refroidissement dépend du débit et de la température de l'eau dans le moule : un circuit bouché ou un débit insuffisant crée des zones chaudes, des déformations et des écarts de cotes entre empreintes.</p>\n<p>Les <strong>mouvements</strong> (ouverture, fermeture, éjection) se règlent en vitesses et en positions avec des ralentissements en début et en fin de course pour protéger le moule. La <strong>sécurité moule</strong> doit rester réglée au plus juste : une force de fermeture basse pression trop élevée ne protège plus le moule.</p>\n<p>L'optimisation consiste à réduire le temps de cycle sans sortir de la fenêtre de procédé. On agit dans l'ordre : réduction des temps morts (mouvements, prise robot), ajustement du temps de maintien au figeage, puis réduction du refroidissement en dernier, car c'est le plus risqué pour la qualité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne modifie qu'un paramètre à la fois et on attend la stabilisation (plusieurs cycles, plus longtemps pour une température) avant de juger le résultat. Changer plusieurs réglages à la fois empêche de savoir lequel a eu un effet et peut masquer un problème.</div>"
      },
      {
       "titre": "Relations entre paramètres et qualité de la pièce",
       "contenu": "<p>Le tableau suivant résume l'effet d'une augmentation de chaque paramètre, toutes choses égales par ailleurs. Ces tendances guident la recherche de réglage ; elles doivent être confirmées par l'essai.</p>\n<table>\n<thead><tr><th>Paramètre augmenté</th><th>Effets favorables</th><th>Effets défavorables</th></tr></thead>\n<tbody>\n<tr><td>Température matière</td><td>Meilleur remplissage, soudures moins visibles</td><td>Dégradation, retrait et cycle plus longs, bavures</td></tr>\n<tr><td>Température moule</td><td>Brillance, moins de contraintes, meilleure cristallisation</td><td>Cycle plus long, retrait plus fort pour les semi-cristallins</td></tr>\n<tr><td>Vitesse d'injection</td><td>Remplissage des parois fines, aspect homogène</td><td>Brûlures, jets libres, bavures, cisaillement</td></tr>\n<tr><td>Pression de maintien</td><td>Moins de retassures, cotes plus grandes, masse plus élevée</td><td>Bavures, contraintes, pièces collées</td></tr>\n<tr><td>Temps de maintien (jusqu'au figeage)</td><td>Masse et cotes stables</td><td>Cycle plus long au-delà du figeage, sans gain</td></tr>\n<tr><td>Contre-pression</td><td>Homogénéité, dispersion du colorant</td><td>Dosage plus long, échauffement</td></tr>\n<tr><td>Temps de refroidissement</td><td>Moins de déformations à l'éjection</td><td>Productivité plus faible</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ordre classique d'un réglage est : températures, dosage, vitesse et commutation par remplissage progressif, maintien par pesée, refroidissement, puis contrôle complet de la première pièce bonne avant de lancer la série.</div>"
      }
     ],
     "points_cles": [
      "Les consignes règlent la presse, les grandeurs mesurées révèlent la stabilité du procédé",
      "Un bon réglage se situe au centre de la fenêtre de procédé et figure sur la fiche de réglage",
      "La température matière réelle se mesure au pyromètre sur une purge",
      "La commutation se fixe à 95 à 98 % de remplissage par la méthode du remplissage progressif",
      "Le temps de maintien se détermine par pesée jusqu'au figeage du seuil, plus une marge",
      "Trop peu de maintien donne des retassures ; trop de pression donne des bavures et des contraintes",
      "On ne modifie qu'un paramètre à la fois et on attend la stabilisation",
      "La masse de la pièce est un indicateur simple et sensible de dérive"
     ],
     "lexique": [
      {
       "terme": "Consigne",
       "def": "Valeur programmée sur la presse pour un paramètre."
      },
      {
       "terme": "Fenêtre de procédé",
       "def": "Plage de réglages à l'intérieur de laquelle les pièces sont conformes."
      },
      {
       "terme": "Profil de température",
       "def": "Ensemble des températures de consigne des zones du fourreau, de la trémie à la buse."
      },
      {
       "terme": "Thermorégulateur",
       "def": "Appareil qui fait circuler un fluide à température régulée dans le moule."
      },
      {
       "terme": "Contre-pression",
       "def": "Pression qui s'oppose au recul de la vis pendant le dosage."
      },
      {
       "terme": "Profil de vitesse",
       "def": "Succession de vitesses d'injection programmées selon la position de la vis."
      },
      {
       "terme": "Figeage du seuil",
       "def": "Solidification de la matière dans le seuil, qui isole l'empreinte des canaux."
      },
      {
       "terme": "Retassure",
       "def": "Creux en surface d'une zone épaisse dû au retrait non compensé."
      },
      {
       "terme": "Purge",
       "def": "Injection de matière à l'air libre, unité reculée, pour nettoyer ou mesurer la température matière."
      },
      {
       "terme": "Courte injection",
       "def": "Pièce volontairement incomplète servant à observer le remplissage."
      }
     ]
    },
    {
     "id": "bpc-extrusion-soufflage",
     "titre": "Extrusion, extrusion-soufflage et procédés dérivés",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Décrire une ligne d'extrusion et le rôle de chacun de ses éléments",
      "Expliquer l'influence de la vitesse de vis, des températures et du tirage sur le produit",
      "Calculer un débit, une masse linéique et une vitesse de tirage",
      "Décrire l'extrusion-soufflage, l'injection-soufflage et l'extrusion-gonflage de film",
      "Situer le calandrage et la coextrusion parmi les procédés continus"
     ],
     "sections": [
      {
       "titre": "Principe de l'extrusion",
       "contenu": "<p>L'<strong>extrusion</strong> est un procédé <strong>continu</strong> : la matière thermoplastique est fondue et poussée par une vis à travers une <strong>filière</strong> dont l'ouverture donne la section du produit. On obtient des <strong>profilés</strong> de grande longueur : tubes, tuyaux, profilés de fenêtres, joints, gaines de câbles, plaques, feuilles, films, monofilaments. C'est, en tonnage, l'un des premiers procédés de la plasturgie.</p>\n<p>Contrairement à l'injection, il n'y a ni moule fermé ni phase de maintien : la forme est donnée à la sortie de la filière, puis <strong>fixée</strong> par un <strong>conformateur</strong> et un refroidissement. Le produit est entraîné à vitesse constante par un <strong>tireur</strong>. Les matières utilisées sont des grades de faible indice de fluidité, assez visqueux pour garder leur forme à la sortie de la filière : PVC rigide pour les profilés et tubes, PE-HD et PP pour les tubes, PE-BD pour les films, PS et PET pour les feuilles.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en extrusion, la vis donne le débit, la filière donne la forme, le conformateur fixe les dimensions et le tireur règle l'épaisseur par l'étirage du produit.</div>"
      },
      {
       "titre": "La ligne d'extrusion",
       "contenu": "<p>Une ligne d'extrusion de tube comprend, dans l'ordre de passage de la matière :</p>\n<table>\n<thead><tr><th>Élément</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Trémie et doseurs</td><td>Alimenter la vis en matière, mélange-maître et éventuellement rebroyé</td></tr>\n<tr><td>Extrudeuse (fourreau + vis)</td><td>Fondre, homogénéiser et mettre la matière sous pression</td></tr>\n<tr><td>Filtre (grille, changeur de filtre)</td><td>Retenir les impuretés et infondus</td></tr>\n<tr><td>Tête et filière</td><td>Répartir le flux et donner la section (poinçon et filière pour un tube)</td></tr>\n<tr><td>Conformateur sous vide</td><td>Plaquer le tube encore chaud contre une douille calibrée pour fixer le diamètre extérieur</td></tr>\n<tr><td>Bacs de refroidissement</td><td>Solidifier le produit par aspersion ou immersion dans l'eau</td></tr>\n<tr><td>Tireur (à chenilles ou à courroies)</td><td>Entraîner le produit à vitesse constante</td></tr>\n<tr><td>Marqueur, scie ou coupe, enrouleur</td><td>Marquer, couper à longueur ou enrouler</td></tr>\n</tbody>\n</table>\n<p>L'extrudeuse est caractérisée par le <strong>diamètre</strong> D de la vis et sa <strong>longueur relative</strong> L/D, souvent comprise entre 25 et 35 pour les monovis. Comme en injection, la vis comporte des zones d'alimentation, de compression et de pompage ; le rapport entre la profondeur du filet en alimentation et en pompage s'appelle le <strong>taux de compression</strong>. Pour le PVC rigide, sensible à la chaleur, on emploie souvent des <strong>extrudeuses bivis</strong> qui travaillent la matière avec moins d'échauffement, alimentées directement en poudre (dry-blend).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une ligne d'extrusion tourne souvent 24 h sur 24 et ne s'arrête que pour un changement de dimension ou de matière. Le démarrage, qui génère beaucoup de déchets, est l'opération la plus délicate ; le rôle du conducteur de ligne est ensuite de surveiller les cotes en continu et de corriger les dérives.</div>"
      },
      {
       "titre": "Réglages et calculs de production",
       "contenu": "<p>Les paramètres principaux sont : le profil de température du fourreau et de la tête, la <strong>vitesse de rotation de la vis</strong> (en tr/min), dont dépend le <strong>débit</strong> (en kg/h), la <strong>vitesse de tirage</strong> (en m/min), le niveau de vide et la température de l'eau du conformateur.</p>\n<p>À débit constant, si l'on augmente la vitesse de tirage, le produit est davantage étiré : son épaisseur et sa masse par mètre diminuent. La relation fondamentale est :</p>\n<p>débit massique = masse linéique × vitesse de tirage</p>\n<p>La <strong>masse linéique</strong> (en g/m ou kg/m) se calcule à partir de la section du produit et de la masse volumique. Pour un tube de diamètre extérieur D et d'épaisseur e : section S = π × e × (D − e).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la vitesse de tirage d'un tube PE-HD 32 × 3 (diamètre extérieur 32 mm, épaisseur 3 mm), ρ = 0,95 g/cm<sup>3</sup>, débit de l'extrudeuse 120 kg/h. 1) Section S = π × 3 × (32 − 3) = π × 87 ≈ 273,3 mm<sup>2</sup> = 2,733 cm<sup>2</sup>. 2) Volume par mètre = 2,733 × 100 = 273,3 cm<sup>3</sup>. 3) Masse linéique = 273,3 × 0,95 ≈ 259,6 g/m. 4) Débit = 120 000 g/h = 2 000 g/min. 5) Vitesse de tirage = 2 000 / 259,6 ≈ 7,7 m/min. Pour 1 000 m de tube, il faut environ 130 min et 260 kg de matière.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un tube peut avoir le bon diamètre extérieur (fixé par le conformateur) et une épaisseur hors tolérance. L'épaisseur se contrôle en plusieurs points de la circonférence : une épaisseur irrégulière signale un poinçon décentré dans la filière, à recentrer à l'aide des vis de centrage.</div>"
      },
      {
       "titre": "Extrusion-gonflage de film, feuilles et calandrage",
       "contenu": "<p>L'<strong>extrusion-gonflage</strong> (ou extrusion de gaine) produit les films d'emballage en PE. La matière sort d'une filière annulaire verticale sous forme de tube mince, que l'on gonfle d'air pour former une <strong>bulle</strong>. La bulle est refroidie par un anneau de soufflage, aplatie entre des rouleaux pinceurs, puis enroulée. Le rapport entre le diamètre de la bulle et celui de la filière s'appelle le <strong>taux de gonflage</strong> (souvent de 2 à 4) ; avec la vitesse de tirage, il fixe l'épaisseur du film et l'étirage dans les deux directions.</p>\n<p>L'extrusion de <strong>feuilles et plaques</strong> utilise une <strong>filière plate</strong> (en « portemanteau ») suivie d'une <strong>calandre</strong> de trois cylindres refroidis qui fixent l'épaisseur et l'état de surface. Les feuilles de PS, PP ou PET alimentent ensuite le thermoformage.</p>\n<p>Le <strong>calandrage</strong> proprement dit consiste à laminer une pâte de matière entre plusieurs cylindres chauffés de grande largeur ; il sert surtout pour les feuilles et revêtements en PVC souple (revêtements de sol, toiles enduites).</p>\n<p>La <strong>coextrusion</strong> associe plusieurs extrudeuses dans une même filière pour produire un produit multicouche : film barrière à l'oxygène pour l'alimentaire, tube avec couche intérieure en matière recyclée et couche extérieure en matière vierge, profilé avec joint souple intégré.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> filière annulaire et soufflage d'air pour les films, filière plate et calandre pour les feuilles, plusieurs extrudeuses pour les produits multicouches.</div>"
      },
      {
       "titre": "L'extrusion-soufflage et l'injection-soufflage",
       "contenu": "<p>L'<strong>extrusion-soufflage</strong> fabrique des corps creux : flacons, bidons, réservoirs de carburant, jouets. Une tête d'extrusion verticale produit un tube de matière chaude, la <strong>paraison</strong>. Un moule en deux parties se ferme sur la paraison en la pinçant à sa base ; une canne de soufflage injecte de l'air comprimé (de l'ordre de 6 à 10 bar) qui plaque la matière contre les parois refroidies du moule. Après refroidissement, le moule s'ouvre et les <strong>chutes</strong> (talon de pincement, carotte de col) sont ébavurées puis rebroyées. Le PE-HD est la matière la plus utilisée.</p>\n<p>La paraison s'amincit davantage là où le diamètre de la pièce est grand. Pour compenser, on utilise la <strong>programmation d'épaisseur de paraison</strong> : le poinçon de la tête monte ou descend pendant l'extrusion pour faire varier l'épaisseur de la paraison selon la hauteur.</p>\n<p>L'<strong>injection-soufflage</strong> se fait en deux temps : on injecte d'abord une <strong>préforme</strong> (tube à col fini) puis on la réchauffe et on la souffle. Pour les bouteilles en PET, la préforme est en plus étirée par une tige pendant le soufflage : c'est l'<strong>injection-étirage-soufflage</strong>, qui oriente les chaînes dans deux directions et donne une bouteille légère, transparente et résistante à la pression des boissons gazeuses. Le col étant injecté, il est très précis, ce qui est indispensable pour l'étanchéité du bouchon.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'ébavureuse et la zone de coupe de paraison présentent des risques de coupure et d'écrasement ; la paraison sort à plus de 180 °C. Les interventions se font machine à l'arrêt, protections en place, avec gants adaptés à la chaleur.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un défaut fréquent en extrusion-soufflage est une soudure de pincement trop faible au fond du flacon. On le contrôle par un essai d'écrasement ou de chute, et on agit sur la température de la paraison, le dessin du pincement et la vitesse de fermeture du moule.</div>"
      }
     ],
     "points_cles": [
      "L'extrusion est un procédé continu : vis, filière, conformateur, refroidissement, tireur, coupe",
      "Les matières extrudées sont des grades peu fluides qui gardent leur forme en sortie de filière",
      "Débit massique = masse linéique × vitesse de tirage",
      "À débit constant, tirer plus vite diminue l'épaisseur",
      "L'extrusion-gonflage produit des films ; le taux de gonflage règle l'étirage transversal",
      "La coextrusion associe plusieurs matières en couches dans une même filière",
      "L'extrusion-soufflage gonfle une paraison dans un moule ; la programmation d'épaisseur compense l'étirement",
      "L'injection-étirage-soufflage du PET donne des bouteilles légères à col précis"
     ],
     "lexique": [
      {
       "terme": "Filière",
       "def": "Outil placé en sortie d'extrudeuse dont l'ouverture donne la section du produit."
      },
      {
       "terme": "Conformateur",
       "def": "Outil qui fixe les dimensions du profilé encore chaud, souvent par aspiration sous vide."
      },
      {
       "terme": "Tireur",
       "def": "Machine qui entraîne le produit extrudé à vitesse constante."
      },
      {
       "terme": "L/D",
       "def": "Rapport entre la longueur utile et le diamètre de la vis."
      },
      {
       "terme": "Masse linéique",
       "def": "Masse d'un mètre de produit extrudé, en g/m ou kg/m."
      },
      {
       "terme": "Taux de gonflage",
       "def": "Rapport entre le diamètre de la bulle et celui de la filière en extrusion de film."
      },
      {
       "terme": "Coextrusion",
       "def": "Extrusion simultanée de plusieurs matières en couches superposées."
      },
      {
       "terme": "Paraison",
       "def": "Tube de matière chaude extrudé puis soufflé dans un moule."
      },
      {
       "terme": "Préforme",
       "def": "Ébauche injectée, à col fini, destinée à être soufflée."
      },
      {
       "terme": "Calandre",
       "def": "Ensemble de cylindres qui laminent et refroidissent une feuille à épaisseur précise."
      }
     ]
    },
    {
     "id": "bpc-thermoformage-rotomoulage-compression",
     "titre": "Thermoformage, rotomoulage et compression",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Décrire les étapes du thermoformage et choisir entre formage positif et négatif",
      "Prévoir l'amincissement d'une feuille thermoformée à partir du taux d'étirage",
      "Décrire le cycle de rotomoulage et calculer une charge de poudre",
      "Expliquer le moulage par compression des SMC et BMC et ses paramètres",
      "Comparer ces procédés selon les séries, les formes et les coûts d'outillage"
     ],
     "sections": [
      {
       "titre": "Le thermoformage : principe et étapes",
       "contenu": "<p>Le <strong>thermoformage</strong> met en forme une <strong>feuille</strong> ou une <strong>plaque</strong> thermoplastique préalablement extrudée. La feuille est chauffée jusqu'à son état caoutchoutique (au-dessus de sa Tg pour un amorphe, juste sous sa Tf pour un semi-cristallin), puis plaquée sur un moule par le vide, l'air comprimé ou un poinçon. Elle refroidit au contact du moule et garde sa forme. Les bords sont ensuite <strong>détourés</strong>.</p>\n<p>On distingue le <strong>thermoformage en continu</strong> à partir de feuilles minces en bobine (pots de yaourt, barquettes, blisters, gobelets, épaisseur souvent inférieure à 2 mm, cadences très élevées) et le <strong>thermoformage de plaques</strong> épaisses, découpées à format (habillages de véhicules, bacs de douche en PMMA, carénages, coques de valises).</p>\n<p>Les étapes d'un cycle sur plaque sont : <strong>bridage</strong> de la plaque dans un cadre ; <strong>chauffage</strong> par panneaux radiants infrarouges, souvent sur les deux faces ; <strong>pré-étirage</strong> éventuel (bulle d'air ou poinçon d'assistance) ; <strong>formage</strong> par aspiration (vide) et/ou pression ; <strong>refroidissement</strong> (ventilation, brumisation) ; <strong>démoulage</strong> ; <strong>détourage</strong> par fraisage numérique ou découpe.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le thermoformage ne travaille qu'une face de la pièce : seule la face au contact du moule reproduit sa forme et son état de surface. L'épaisseur n'est pas imposée par l'outil mais résulte de l'étirage de la feuille.</div>"
      },
      {
       "titre": "Formage positif, négatif et répartition des épaisseurs",
       "contenu": "<p>Selon la forme du moule, on parle de :</p>\n<ul>\n<li><strong>formage négatif</strong> (moule femelle, en creux) : la feuille est aspirée dans la cavité ; la face extérieure de la pièce est précise ; la matière s'amincit dans le fond et les angles du fond ;</li>\n<li><strong>formage positif</strong> (moule mâle, en relief) : la feuille est tendue sur le moule ; la face intérieure est précise ; la matière s'amincit sur les flancs et en pied de pièce.</li>\n</ul>\n<p>La feuille ne fait que s'étirer : la quantité de matière reste la même. Le <strong>taux d'étirage surfacique</strong> est le rapport entre la surface développée de la pièce et la surface de feuille utilisée. L'épaisseur moyenne finale vaut donc l'épaisseur initiale divisée par ce taux. Les zones qui touchent le moule en premier refroidissent et ne s'étirent plus : l'amincissement se concentre sur les zones qui touchent en dernier.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer l'épaisseur d'un bac. Feuille ABS de 4 mm, cadre de 600 × 400 mm. Bac formé négatif de 600 × 400 mm et 150 mm de profondeur. 1) Surface de feuille = 0,60 × 0,40 = 0,24 m<sup>2</sup>. 2) Surface développée = fond 0,24 + flancs 2 × (0,60 + 0,40) × 0,15 = 0,24 + 0,30 = 0,54 m<sup>2</sup>. 3) Taux d'étirage = 0,54 / 0,24 = 2,25. 4) Épaisseur moyenne = 4 / 2,25 ≈ 1,8 mm. Dans les angles du fond, elle sera nettement inférieure ; si le cahier des charges impose 1,5 mm minimum partout, il faut un poinçon d'assistance ou une feuille plus épaisse.</div>\n<p>Les règles de conception sont : prévoir des <strong>dépouilles</strong> (environ 2 à 3° en formage négatif, 3 à 6° ou plus en positif, où la pièce se rétracte sur le moule), des rayons généreux et des <strong>trous d'aspiration</strong> fins (de l'ordre de 0,5 à 1 mm) dans les creux pour évacuer l'air.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une feuille hygroscopique (ABS, PC, PMMA) qui a pris l'humidité forme des cloques au chauffage. Les plaques se stockent emballées et, pour le PC notamment, se sèchent en étuve avant formage.</div>"
      },
      {
       "titre": "Le rotomoulage",
       "contenu": "<p>Le <strong>rotomoulage</strong> (moulage par rotation) fabrique des corps creux de grandes dimensions, sans soudure et sans contraintes : cuves, réservoirs, kayaks, bacs, mobilier urbain, jouets. Une quantité pesée de <strong>poudre</strong> (le plus souvent PE broyé finement, de l'ordre de 300 à 500 µm) est placée dans un moule creux en tôle ou en aluminium. Le cycle comporte quatre phases :</p>\n<ol>\n<li><strong>chargement</strong> de la poudre et fermeture du moule ;</li>\n<li><strong>chauffage</strong> dans un four (souvent 250 à 300 °C d'air) pendant que le moule tourne lentement selon deux axes perpendiculaires : la poudre fond et se dépose en couche régulière sur la paroi ;</li>\n<li><strong>refroidissement</strong> à l'air puis éventuellement par brumisation, toujours en rotation ;</li>\n<li><strong>démoulage</strong> de la pièce.</li>\n</ol>\n<p>Le rapport des vitesses de rotation sur les deux axes détermine la répartition de la matière. L'outillage est peu coûteux car il ne subit pas de pression ; en contrepartie, les cycles sont longs (de 20 min à plus d'une heure) et le choix des matières limité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la charge de poudre. Cuve de surface intérieure 4 m<sup>2</sup>, épaisseur visée 6 mm, PE de masse volumique 0,94 g/cm<sup>3</sup>. 1) Volume de matière = 4 m<sup>2</sup> × 0,006 m = 0,024 m<sup>3</sup> = 24 000 cm<sup>3</sup>. 2) Masse = 24 000 × 0,94 = 22 560 g, soit environ 22,6 kg de poudre à peser.</div>"
      },
      {
       "titre": "Le moulage par compression des SMC et BMC",
       "contenu": "<p>Le <strong>moulage par compression</strong> consiste à placer une charge de matière dans un moule chaud ouvert, puis à fermer le moule sous une presse hydraulique : la matière flue et remplit l'empreinte, puis réticule. Il s'applique surtout aux <strong>thermodurcissables</strong> préparés sous forme de <strong>compounds</strong> prêts à mouler :</p>\n<ul>\n<li>le <strong>SMC</strong> (sheet moulding compound) : feuille de résine polyester ou vinylester chargée, contenant des fibres de verre coupées (souvent 25 mm de long, 20 à 30 % en masse), livrée entre deux films ; on la découpe en flans que l'on empile ;</li>\n<li>le <strong>BMC</strong> (bulk moulding compound) : pâte à fibres plus courtes, moulée par compression ou par injection.</li>\n</ul>\n<p>Les paramètres principaux sont la <strong>température du moule</strong> (souvent 140 à 160 °C), la <strong>pression</strong> sur la pièce (de l'ordre de 50 à 150 bar), la <strong>vitesse de fermeture</strong> (rapide puis lente au contact), le <strong>temps de cuisson</strong> (de l'ordre de 1 min par tranche de quelques millimètres d'épaisseur, selon la formulation), ainsi que la masse et la position des flans dans le moule (le <strong>plan de chargement</strong>). Les pièces typiques sont des capots, hayons, panneaux de carrosserie de poids lourds, coffrets électriques.</p>\n<p>La compression s'applique aussi aux thermoplastiques renforcés (GMT, LFT), préchauffés puis pressés dans un moule froid, et aux élastomères.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un flan mal positionné ou trop léger provoque des manques et des lignes de soudure faibles ; une masse excessive provoque des bavures épaisses. La masse de charge est pesée à chaque cycle et le plan de chargement est affiché au poste.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les films de protection du SMC doivent être retirés avant le chargement. Un morceau de film oublié dans le moule crée un défaut de surface ou un délaminage, découvert parfois seulement à la peinture.</div>"
      },
      {
       "titre": "Comparer les procédés",
       "contenu": "<table>\n<thead><tr><th>Critère</th><th>Thermoformage</th><th>Rotomoulage</th><th>Compression SMC</th><th>Injection (rappel)</th></tr></thead>\n<tbody>\n<tr><td>Matière de départ</td><td>Feuille ou plaque</td><td>Poudre</td><td>Flans de SMC</td><td>Granulés</td></tr>\n<tr><td>Coût d'outillage</td><td>Faible à moyen</td><td>Faible</td><td>Élevé</td><td>Élevé</td></tr>\n<tr><td>Temps de cycle</td><td>Secondes à quelques minutes</td><td>20 à 60 min et plus</td><td>1 à 5 min</td><td>Secondes à 1 min</td></tr>\n<tr><td>Séries adaptées</td><td>Petites (plaques) à très grandes (feuilles)</td><td>Petites et moyennes</td><td>Moyennes</td><td>Grandes</td></tr>\n<tr><td>Formes</td><td>Coques ouvertes, une face précise</td><td>Corps creux fermés, grandes dimensions</td><td>Grandes pièces planes ou galbées, rigides</td><td>Formes complexes, nervures, clips</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le choix d'un procédé résulte d'un compromis entre forme de la pièce, matière, quantité à produire et coût de l'outillage. Les petits volumes de grandes pièces favorisent le thermoformage de plaques et le rotomoulage ; les grandes séries de pièces complexes, l'injection.</div>"
      }
     ],
     "points_cles": [
      "Le thermoformage chauffe une feuille à l'état caoutchoutique et la plaque sur un moule par vide ou pression",
      "Seule la face au contact du moule est précise ; l'épaisseur résulte de l'étirage",
      "Épaisseur moyenne = épaisseur initiale / taux d'étirage surfacique",
      "Formage négatif : amincissement au fond ; formage positif : amincissement sur les flancs",
      "Le rotomoulage fond une poudre dans un moule en rotation biaxiale ; charge = surface × épaisseur × ρ",
      "Les SMC et BMC se moulent par compression dans un moule chaud vers 140 à 160 °C",
      "Masse et plan de chargement des flans conditionnent le remplissage en compression",
      "Le choix du procédé dépend de la forme, de la matière, de la série et du coût d'outillage"
     ],
     "lexique": [
      {
       "terme": "Thermoformage",
       "def": "Mise en forme d'une feuille thermoplastique chauffée sur un moule par vide, pression ou poinçon."
      },
      {
       "terme": "Formage négatif",
       "def": "Thermoformage dans un moule en creux, qui rend précise la face extérieure."
      },
      {
       "terme": "Formage positif",
       "def": "Thermoformage sur un moule en relief, qui rend précise la face intérieure."
      },
      {
       "terme": "Taux d'étirage",
       "def": "Rapport entre la surface développée de la pièce et la surface initiale de feuille."
      },
      {
       "terme": "Poinçon d'assistance",
       "def": "Outil qui pré-étire la feuille pour mieux répartir l'épaisseur."
      },
      {
       "terme": "Détourage",
       "def": "Découpe du contour de la pièce pour retirer la zone de bridage."
      },
      {
       "terme": "Rotomoulage",
       "def": "Fabrication de corps creux par fusion d'une poudre dans un moule tournant sur deux axes."
      },
      {
       "terme": "SMC",
       "def": "Compound en feuille de résine thermodurcissable chargée et renforcée, moulé par compression."
      },
      {
       "terme": "BMC",
       "def": "Compound en pâte de résine thermodurcissable à fibres courtes, moulé par compression ou injection."
      },
      {
       "terme": "Plan de chargement",
       "def": "Document indiquant la masse, le nombre et la position des flans dans le moule."
      }
     ]
    },
    {
     "id": "bpc-procedes-composites",
     "titre": "Procédés de mise en œuvre des composites",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Décrire la préparation d'un moule composite : nettoyage, agent de démoulage, gelcoat",
      "Réaliser mentalement les étapes du moulage au contact et de la projection simultanée",
      "Expliquer le principe des procédés en moule fermé : infusion, RTM et RTM light",
      "Situer la pultrusion, l'enroulement filamentaire et le moulage de préimprégnés",
      "Choisir un procédé selon la série, la qualité visée et les contraintes d'hygiène"
     ],
     "sections": [
      {
       "titre": "Préparer le moule et le poste",
       "contenu": "<p>Quel que soit le procédé, la qualité d'une pièce composite commence par la préparation du <strong>moule</strong>. Les moules de moulage au contact sont souvent eux-mêmes en composite (verre-polyester ou époxyde avec gelcoat d'outillage), réalisés à partir d'un <strong>modèle</strong> (ou master) usiné ou stratifié. Leur surface reproduit fidèlement chaque défaut sur la pièce.</p>\n<p>Les étapes de préparation sont :</p>\n<ol>\n<li><strong>nettoyage</strong> du moule (élimination des résidus de résine et de poussières) et contrôle de l'état de surface ;</li>\n<li>application de l'<strong>agent de démoulage</strong> : cire en plusieurs couches lustrées pour un moule neuf, ou agent semi-permanent (liquide) qui permet plusieurs démoulages entre deux applications ;</li>\n<li>application du <strong>gelcoat</strong> au pinceau ou au pistolet, en épaisseur régulière contrôlée à la jauge humide (de l'ordre de 0,5 mm), puis attente de son début de durcissement (il doit coller légèrement au doigt sans tacher) avant de stratifier ;</li>\n<li>préparation du poste : renforts <strong>découpés</strong> au gabarit et repérés dans l'ordre du plan de drapage, résine et catalyseur, outils (rouleaux débulleurs, pinceaux), balance, et équipements de protection.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> stratifier sur un gelcoat encore trop frais le fait plisser (« crocodile ») ; attendre trop longtemps nuit à l'adhérence entre gelcoat et stratifié. Le bon moment se vérifie au toucher et dépend de la température de l'atelier.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un moule propre, correctement ciré et un gelcoat d'épaisseur régulière sont la condition d'un bel aspect et d'un démoulage sans arrachement.</div>"
      },
      {
       "titre": "Le moulage au contact et la projection simultanée",
       "contenu": "<p>Le <strong>moulage au contact</strong> (stratification manuelle) est le procédé le plus simple. Sur le gelcoat, l'opérateur applique une couche de résine catalysée, pose un pli de renfort, l'imprègne au pinceau ou au rouleau, puis le <strong>débulle</strong> au rouleau métallique pour chasser l'air et assurer le contact. Il répète l'opération pli après pli selon le plan de drapage, en respectant le sens des tissus et en décalant les recouvrements de plis. Après durcissement, la pièce est démoulée puis <strong>détourée</strong> et <strong>ébavurée</strong>.</p>\n<p>La <strong>projection simultanée</strong> mécanise le dépôt : un pistolet coupe le roving en fibres de 25 à 50 mm et les projette en même temps que la résine catalysée. Le stratifié est ensuite débullé au rouleau. Le procédé est rapide pour les grandes pièces (coques, piscines, cuves), mais son taux de verre reste modeste et dépend du savoir-faire de l'opérateur.</p>\n<p>Ces deux procédés en <strong>moule ouvert</strong> donnent une seule face lisse, avec une épaisseur et un taux de fibres variables. Ils demandent peu d'investissement, conviennent aux petites séries et aux très grandes pièces, mais exposent fortement les opérateurs aux vapeurs de styrène.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> stratifier un pli de mat au contact. 1) Vérifier le temps de gel de la gâchée à la température de l'atelier. 2) Peser la résine pour le pli et ajouter le catalyseur au dosage prescrit, mélanger sans incorporer d'air. 3) Encoller la surface au rouleau. 4) Poser le mat sans plis, en respectant le recouvrement prévu (souvent quelques centimètres). 5) Imprégner jusqu'à transparence du mat, sans excès de résine. 6) Débuller au rouleau métallique en partant du centre vers les bords, insister dans les angles. 7) Contrôler visuellement l'absence de zones blanches (fibres sèches) et de bulles avant de poser le pli suivant.</div>"
      },
      {
       "titre": "Les procédés en moule fermé : infusion et RTM",
       "contenu": "<p>Les procédés en <strong>moule fermé</strong> réduisent fortement les émissions de styrène, donnent des taux de fibres plus élevés et réguliers et, pour le RTM, deux faces lisses.</p>\n<p>L'<strong>infusion sous vide</strong> utilise un moule rigide et une <strong>bâche</strong> souple étanche. On empile à sec les renforts, puis un <strong>tissu d'arrachage</strong> (qui laissera une surface prête à coller), un <strong>tissu drainant</strong> (qui accélère la diffusion de la résine), des tuyaux d'alimentation et d'aspiration. La bâche est collée au moule avec un <strong>mastic d'étanchéité</strong>. On fait le vide (pression absolue très faible, de l'ordre de quelques dizaines de millibars), on vérifie l'étanchéité par un <strong>test de chute de vide</strong>, puis on ouvre l'arrivée de résine : la pression atmosphérique pousse la résine à travers les renforts jusqu'à leur imprégnation complète. On maintient le vide jusqu'au gel.</p>\n<p>Le <strong>RTM</strong> (resin transfer moulding) utilise un moule rigide en deux parties. Les renforts secs, souvent mis en forme au préalable (<strong>préformes</strong>), sont placés dans le moule ; après fermeture, la résine est injectée sous faible pression (quelques bars) par une machine doseuse-mélangeuse. Le <strong>RTM light</strong> (ou RTM léger) utilise un contre-moule semi-rigide fermé par le vide : outillage moins coûteux pour les moyennes séries.</p>\n<table>\n<thead><tr><th>Critère</th><th>Contact / projection</th><th>Infusion</th><th>RTM</th></tr></thead>\n<tbody>\n<tr><td>Faces lisses</td><td>Une</td><td>Une</td><td>Deux</td></tr>\n<tr><td>Taux massique de verre (ordre de grandeur)</td><td>25 à 35 %</td><td>50 à 65 %</td><td>40 à 60 %</td></tr>\n<tr><td>Émissions de styrène</td><td>Fortes</td><td>Faibles</td><td>Faibles</td></tr>\n<tr><td>Séries</td><td>Unitaires à petites</td><td>Petites à moyennes, grandes pièces</td><td>Moyennes</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en infusion, une fuite de vide même minime laisse entrer de l'air et crée des porosités ou des zones sèches. Il faut absolument réussir le test de chute de vide avant d'ouvrir la résine : après, il est trop tard pour reprendre la pièce.</div>"
      },
      {
       "titre": "Procédés continus et préimprégnés",
       "contenu": "<p>La <strong>pultrusion</strong> produit en continu des profilés de section constante (cornières, tubes, échelles, caillebotis, renforts de fenêtres). Des rovings et des mats sont tirés à travers un bain de résine, puis dans une <strong>filière chauffée</strong> où la résine réticule ; un tireur entraîne le profilé, une scie le coupe à longueur. Les taux de fibres sont très élevés et les propriétés maximales dans le sens de la longueur.</p>\n<p>L'<strong>enroulement filamentaire</strong> dépose des fibres imprégnées sur un <strong>mandrin</strong> en rotation, selon des angles programmés : on fabrique ainsi des tubes, réservoirs sous pression, bouteilles de gaz composite, arbres de transmission. L'angle d'enroulement est choisi selon les efforts : proche de 90° (enroulement circonférentiel) pour la pression interne, plus faible pour la flexion.</p>\n<p>Le <strong>moulage de préimprégnés</strong> est la référence en aéronautique. Les plis préimprégnés sont sortis du congélateur, laissés revenir à température ambiante dans leur emballage étanche (pour éviter la condensation), découpés, drapés à la main ou par robot dans le moule, puis mis sous vide et cuits en <strong>étuve</strong> ou en <strong>autoclave</strong> (enceinte sous pression et température, par exemple de l'ordre de 120 à 180 °C et quelques bars selon le système de résine). Le cycle de cuisson suit une courbe température-pression-temps imposée et enregistrée.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque rouleau de préimprégné est suivi par un relevé de son <strong>temps hors congélateur</strong> (out-time). Au-delà de la durée cumulée autorisée par le fabricant, il ne peut plus être utilisé pour des pièces de vol. Ce suivi fait partie de la traçabilité exigée par les clients aéronautiques.</div>"
      },
      {
       "titre": "Démoulage, finition et choix du procédé",
       "contenu": "<p>Le démoulage intervient lorsque la pièce a atteint une dureté suffisante (contrôle Barcol pour les polyesters). On utilise des cales en plastique ou en bois, jamais d'outils métalliques qui rayent le moule ; l'injection d'air comprimé par un trou prévu dans le moule facilite le décollement. La pièce est ensuite <strong>détourée</strong> (scie, disque diamanté, fraisage numérique, jet d'eau), <strong>percée</strong>, <strong>poncée</strong> et éventuellement assemblée par collage structural ou par stratification d'éléments.</p>\n<p>Le choix du procédé tient compte de la taille et de la forme de la pièce, du nombre de pièces, des performances mécaniques attendues, de l'aspect (une ou deux faces), du coût de l'outillage et de la réglementation sur les émissions de styrène, qui pousse vers les moules fermés.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la découpe et le ponçage des composites produisent des poussières de fibres et de résine irritantes pour la peau, les yeux et les voies respiratoires ; avec le carbone, ces poussières sont conductrices et peuvent endommager les équipements électriques. Ces opérations se font avec aspiration à la source et protections adaptées.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> moule ouvert pour les petites séries et les grandes pièces simples, moule fermé pour la régularité et la réduction des émissions, procédés continus pour les profilés et corps de révolution, préimprégnés pour les plus hautes performances.</div>"
      }
     ],
     "points_cles": [
      "Préparation du moule : nettoyage, agent de démoulage, gelcoat d'épaisseur contrôlée",
      "On stratifie quand le gelcoat colle légèrement sans tacher",
      "Au contact, chaque pli est imprégné puis débullé au rouleau, selon le plan de drapage",
      "L'infusion utilise le vide sous bâche ; le test de chute de vide se fait avant d'ouvrir la résine",
      "Le RTM injecte la résine dans un moule fermé rigide et donne deux faces lisses",
      "La pultrusion et l'enroulement filamentaire produisent profilés et corps de révolution à fort taux de fibres",
      "Les préimprégnés se conservent au froid, se suivent en temps hors congélateur et cuisent en étuve ou autoclave",
      "Les moules fermés réduisent les émissions de styrène et augmentent le taux de fibres"
     ],
     "lexique": [
      {
       "terme": "Agent de démoulage",
       "def": "Produit appliqué sur le moule pour empêcher la résine d'y adhérer."
      },
      {
       "terme": "Débullage",
       "def": "Élimination de l'air emprisonné dans un stratifié par passage d'un rouleau."
      },
      {
       "terme": "Projection simultanée",
       "def": "Dépôt au pistolet de fibres coupées et de résine catalysée."
      },
      {
       "terme": "Infusion",
       "def": "Imprégnation de renforts secs sous bâche par aspiration de la résine sous vide."
      },
      {
       "terme": "Tissu d'arrachage",
       "def": "Tissu posé sur le stratifié et retiré après cuisson pour laisser une surface prête à coller."
      },
      {
       "terme": "RTM",
       "def": "Moulage par injection de résine dans un moule fermé contenant les renforts secs."
      },
      {
       "terme": "Préforme",
       "def": "Ensemble de renforts secs mis en forme avant placement dans un moule fermé."
      },
      {
       "terme": "Pultrusion",
       "def": "Fabrication continue de profilés par tirage de fibres imprégnées à travers une filière chauffée."
      },
      {
       "terme": "Enroulement filamentaire",
       "def": "Dépôt de fibres imprégnées sur un mandrin tournant selon des angles programmés."
      },
      {
       "terme": "Autoclave",
       "def": "Enceinte chauffée sous pression utilisée pour cuire les pièces en préimprégnés."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Outillages, périphériques et maintenance",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpc-moules-injection",
     "titre": "Les moules d'injection",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Identifier les éléments constitutifs d'un moule d'injection et leurs fonctions",
      "Distinguer les systèmes d'alimentation : canaux froids, seuils, canaux chauds",
      "Décrire les systèmes d'éjection et de démoulage des contre-dépouilles",
      "Expliquer le rôle de la régulation et du dégazage",
      "Relier la conception du moule à la qualité des pièces et au temps de cycle"
     ],
     "sections": [
      {
       "titre": "Fonctions et architecture d'un moule",
       "contenu": "<p>Un moule d'injection doit assurer six <strong>fonctions</strong> : <strong>recevoir</strong> la matière et la conduire jusqu'aux empreintes (alimentation), <strong>donner la forme</strong> (empreintes), <strong>refroidir</strong> la pièce (régulation), <strong>évacuer l'air</strong> (dégazage), <strong>éjecter</strong> la pièce, et <strong>se positionner et se guider</strong> sur la presse.</p>\n<p>Un moule standard « deux plaques » se compose de deux parties qui se séparent au <strong>plan de joint</strong> :</p>\n<ul>\n<li>la <strong>partie fixe</strong> (côté injection), fixée sur le plateau fixe de la presse : plaque de fixation, <strong>bague de centrage</strong>, <strong>buse ou bague d'injection</strong> (où vient s'appuyer la buse de la presse), plaque porte-empreinte ;</li>\n<li>la <strong>partie mobile</strong> (côté éjection), fixée sur le plateau mobile : plaque porte-empreinte, plaque support, <strong>tasseaux</strong> (qui laissent l'espace de la batterie d'éjection), plaques éjectrices et éjecteurs, plaque de fixation.</li>\n</ul>\n<p>Le <strong>guidage</strong> et le <strong>centrage</strong> des deux parties sont assurés par des <strong>colonnes</strong> et des <strong>bagues de guidage</strong>, complétés par des centreurs coniques ou plats pour la précision. Les plaques sont souvent issues de <strong>carcasses standard</strong> du commerce, et les empreintes sont usinées dans des <strong>inserts</strong> (blocs rapportés) en acier traité.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la pièce reste en général sur la partie mobile à l'ouverture, parce que c'est de ce côté que se trouve le système d'éjection. Le noyau (forme intérieure) est donc le plus souvent côté mobile.</div>"
      },
      {
       "titre": "Le système d'alimentation",
       "contenu": "<p>La matière passe successivement par :</p>\n<ul>\n<li>la <strong>carotte</strong> : canal conique qui traverse la partie fixe depuis la buse ;</li>\n<li>les <strong>canaux d'alimentation</strong> (canaux de distribution), usinés dans le plan de joint, de section ronde ou trapézoïdale ; dans un moule multi-empreinte, ils doivent être <strong>équilibrés</strong> pour que toutes les empreintes se remplissent en même temps ;</li>\n<li>le <strong>seuil</strong> (ou point d'injection) : rétrécissement qui fait entrer la matière dans l'empreinte et facilite la séparation de la pièce.</li>\n</ul>\n<table>\n<thead><tr><th>Type de seuil</th><th>Caractéristiques</th></tr></thead>\n<tbody>\n<tr><td>Seuil latéral (en bord de pièce)</td><td>Simple à usiner, à dégrapper manuellement ou au robot ; laisse une trace en bordure</td></tr>\n<tr><td>Seuil en nappe (ou en éventail)</td><td>Répartit l'entrée sur une largeur ; limite les jets et le voilage des pièces plates</td></tr>\n<tr><td>Seuil sous-marin (tunnel)</td><td>Cisaillé automatiquement à l'éjection ; pas de reprise</td></tr>\n<tr><td>Seuil capillaire (moule trois plaques)</td><td>Petite trace au centre de la pièce ; séparation automatique</td></tr>\n<tr><td>Injection directe par carotte</td><td>Pour une seule empreinte de grosse pièce ; carotte à couper</td></tr>\n</tbody>\n</table>\n<p>L'ensemble carotte et canaux, appelé <strong>grappe</strong>, est de la matière à rebroyer. Pour l'éviter, on utilise des <strong>canaux chauds</strong> : un bloc distributeur et des buses maintenus à la température de la matière par des résistances régulées. La matière reste fondue jusqu'au seuil : pas de déchet, cycle plus court, mais moule plus coûteux et plus délicat à conduire (régulation de chaque zone, risque de fuites ou de buses bouchées).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un moule à canaux chauds, ne jamais mettre les buses en chauffe sans que le circuit de refroidissement du moule ne fonctionne, ni laisser le système chauffé longtemps sans produire : la matière se dégrade dans le distributeur. Une zone de canal chaud en défaut se repère au remplissage incomplet de l'empreinte correspondante.</div>"
      },
      {
       "titre": "La régulation thermique et le dégazage",
       "contenu": "<p>Le moule est traversé par des <strong>circuits de régulation</strong> (perçages dans les plaques et les inserts) reliés au thermorégulateur par des flexibles et des raccords rapides. Ils doivent extraire la chaleur apportée par la matière de façon <strong>uniforme</strong>. Les zones difficiles (noyaux minces, coins) reçoivent des solutions particulières : lames de séparation dans un perçage borgne, fontaines, inserts en cuivre-béryllium plus conducteurs, ou circuits conformes obtenus par fabrication additive.</p>\n<p>Le <strong>schéma de raccordement</strong> des circuits, fourni avec le moule, indique les entrées et sorties à brancher, souvent repérées par des couleurs ou des numéros. Un circuit oublié ou inversé change la répartition des températures et donc le retrait et les déformations.</p>\n<p>Le <strong>dégazage</strong> permet à l'air présent dans l'empreinte de s'échapper pendant le remplissage. On usine des <strong>évents</strong> : petites rainures au plan de joint, de très faible profondeur (de l'ordre de quelques centièmes de millimètre selon la fluidité de la matière) pour laisser passer l'air mais pas la matière. On dégaze aussi par les jeux des éjecteurs et des inserts.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> raccorder la régulation d'un moule. 1) Lire le schéma de raccordement fourni avec le moule. 2) Vérifier le bon état des flexibles et raccords. 3) Brancher chaque circuit en respectant le sens entrée-sortie et la séparation partie fixe-partie mobile. 4) Mettre en circulation et vérifier l'absence de fuite. 5) Contrôler les débits (débitmètres de la nourrice) et l'équilibre des températures sur les deux parties, au thermomètre de contact, avant de lancer la production.</div>"
      },
      {
       "titre": "L'éjection et les mouvements particuliers",
       "contenu": "<p>L'<strong>éjection</strong> pousse la pièce hors du noyau sans la déformer. La <strong>batterie d'éjection</strong> (plaques éjectrices) porte les éjecteurs et est ramenée en position par des <strong>ressorts</strong> ou des <strong>rappels</strong> (tiges de rappel qui la repoussent à la fermeture). Les principaux éjecteurs sont :</p>\n<ul>\n<li>les <strong>éjecteurs cylindriques</strong>, les plus courants, qui laissent une petite marque ronde ;</li>\n<li>les <strong>éjecteurs lames</strong> pour les nervures minces ;</li>\n<li>les <strong>éjecteurs tubulaires</strong> autour d'un bossage ;</li>\n<li>la <strong>plaque dévêtisseuse</strong>, qui pousse la pièce sur tout son contour, pour les pièces minces ou en forme de boîte ;</li>\n<li>l'<strong>éjection par air</strong> pour les pièces profondes et souples.</li>\n</ul>\n<p>Pour démouler, toutes les faces parallèles au sens d'ouverture doivent avoir une <strong>dépouille</strong> (légère inclinaison, souvent de 0,5 à 2°). Les formes qui empêchent l'ouverture directe sont des <strong>contre-dépouilles</strong> : trous latéraux, clips, filetages. On les démoule par des <strong>tiroirs</strong> (coulisseaux actionnés par des doigts inclinés ou des vérins), des <strong>cales montantes</strong> (éjecteurs inclinés), des <strong>noyaux dévissables</strong> pour les filetages, ou par déformation élastique pour les petites contre-dépouilles en matière souple.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> si la batterie d'éjection ne revient pas complètement avant la fermeture, les éjecteurs ou les tiroirs peuvent heurter la partie fixe et casser le moule. Les moules sensibles sont équipés de détecteurs de retour d'éjection reliés à la presse ; ce contrôle ne doit jamais être shunté.</div>"
      },
      {
       "titre": "Matériaux, identification et types de moules",
       "contenu": "<p>Les empreintes sont en <strong>aciers à outils</strong> prétraités ou trempés, choisis selon la série, l'abrasivité de la matière (fibres de verre) et sa corrosivité (PVC). Les moules de prototypes ou de petites séries peuvent être en aluminium. L'état de surface de l'empreinte (poli miroir, grainé, texturé) est reproduit sur la pièce ; il est désigné sur le plan par une référence de grainage ou de polissage.</p>\n<p>Chaque moule porte une <strong>plaque signalétique</strong> : numéro du moule, référence de la pièce, nombre d'empreintes, masse du moule (indispensable pour l'élingage), dimensions, course d'éjection, et souvent la référence de la presse prévue. Les empreintes et les pièces portent un <strong>numéro d'empreinte</strong> gravé et souvent un <strong>dateur</strong> qui indique le mois et l'année de fabrication.</p>\n<table>\n<thead><tr><th>Type de moule</th><th>Particularité</th></tr></thead>\n<tbody>\n<tr><td>Deux plaques</td><td>Un seul plan de joint ; le plus simple et le plus répandu</td></tr>\n<tr><td>Trois plaques</td><td>Deux plans de joint : la grappe se sépare des pièces automatiquement</td></tr>\n<tr><td>Étages (sandwich)</td><td>Deux niveaux d'empreintes pour doubler la production avec la même force de fermeture</td></tr>\n<tr><td>Bi-matière</td><td>Plateau tournant ou transfert pour injecter successivement deux matières</td></tr>\n<tr><td>Famille</td><td>Empreintes de pièces différentes d'un même ensemble ; équilibrage délicat</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en contrôle, on mesure toujours les pièces empreinte par empreinte. Si une seule empreinte d'un moule à huit empreintes est hors tolérance, on peut parfois l'obturer temporairement en attendant la retouche, avec l'accord du service qualité et du client.</div>"
      }
     ],
     "points_cles": [
      "Un moule assure l'alimentation, la forme, la régulation, le dégazage, l'éjection et le guidage",
      "La partie fixe porte la bague de centrage et la bague d'injection ; la partie mobile porte l'éjection",
      "Carotte, canaux et seuil forment l'alimentation ; les canaux d'un multi-empreinte doivent être équilibrés",
      "Les canaux chauds suppriment la grappe mais demandent une conduite rigoureuse",
      "La régulation doit être uniforme ; le schéma de raccordement est respecté",
      "Les évents laissent sortir l'air, pas la matière",
      "Les contre-dépouilles se démoulent par tiroirs, cales montantes ou noyaux dévissables",
      "La plaque signalétique donne notamment la masse du moule et le nombre d'empreintes"
     ],
     "lexique": [
      {
       "terme": "Plan de joint",
       "def": "Surface de séparation des deux parties du moule."
      },
      {
       "terme": "Carotte",
       "def": "Canal conique qui conduit la matière de la buse de la presse vers les canaux."
      },
      {
       "terme": "Grappe",
       "def": "Ensemble solidifié de la carotte et des canaux d'alimentation."
      },
      {
       "terme": "Canaux chauds",
       "def": "Système chauffé qui maintient la matière fondue jusqu'au seuil."
      },
      {
       "terme": "Évent",
       "def": "Rainure très fine qui permet l'évacuation de l'air de l'empreinte."
      },
      {
       "terme": "Batterie d'éjection",
       "def": "Ensemble des plaques éjectrices et des éjecteurs."
      },
      {
       "terme": "Dépouille",
       "def": "Inclinaison des faces parallèles au sens d'ouverture qui facilite le démoulage."
      },
      {
       "terme": "Contre-dépouille",
       "def": "Forme qui empêche le démoulage dans le sens d'ouverture."
      },
      {
       "terme": "Tiroir",
       "def": "Élément mobile du moule qui se déplace latéralement pour libérer une contre-dépouille."
      },
      {
       "terme": "Insert",
       "def": "Bloc rapporté dans une plaque, dans lequel est usinée une partie de l'empreinte."
      }
     ]
    },
    {
     "id": "bpc-peripheriques-montage-outillages",
     "titre": "Périphériques et mise en place des outillages",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les périphériques d'une cellule de production et leur fonction",
      "Préparer et organiser un changement de moule en séparant opérations internes et externes",
      "Décrire la procédure de montage d'un moule sur une presse en sécurité",
      "Vérifier la compatibilité entre un outillage et une machine",
      "Installer et valider les périphériques avant le démarrage"
     ],
     "sections": [
      {
       "titre": "La cellule de production et ses périphériques",
       "contenu": "<p>Une presse ou une ligne de transformation ne fonctionne pas seule. Elle forme avec ses <strong>périphériques</strong> une <strong>cellule de production</strong>. Les principaux périphériques sont :</p>\n<table>\n<thead><tr><th>Fonction</th><th>Périphérique</th><th>Point de réglage ou de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Alimenter en matière</td><td>Centrale matière, chargeurs aspirants, trémies</td><td>Bonne matière dans la bonne ligne, filtres propres</td></tr>\n<tr><td>Préparer la matière</td><td>Dessiccateur, doseur volumétrique ou gravimétrique, mélangeur</td><td>Température, point de rosée, taux de dosage</td></tr>\n<tr><td>Réguler le moule</td><td>Thermorégulateur à eau ou à huile, refroidisseur (groupe froid), nourrices</td><td>Température de consigne et débit</td></tr>\n<tr><td>Chauffer les canaux</td><td>Régulateur de canaux chauds</td><td>Température par zone, alarmes</td></tr>\n<tr><td>Extraire et manipuler</td><td>Robot cartésien ou poly-articulé, préhenseur, ventouses</td><td>Trajectoires, prise, détection de pièce</td></tr>\n<tr><td>Évacuer et conditionner</td><td>Convoyeur, séparateur pièces-grappes, balance, emballage</td><td>Comptage, séparation des pièces de démarrage</td></tr>\n<tr><td>Recycler</td><td>Broyeur au pied de presse</td><td>Sécurité, propreté, taux de réintroduction</td></tr>\n<tr><td>Contrôler</td><td>Caméra de vision, capteurs de pression en empreinte</td><td>Seuils d'acceptation</td></tr>\n</tbody>\n</table>\n<p>Les périphériques sont reliés à la presse par des signaux d'échange (<strong>interface</strong>, par exemple entre presse et robot selon la norme Euromap) : la presse autorise le robot à entrer quand le moule est ouvert, le robot autorise la fermeture quand il est sorti.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un défaut de pièce n'a pas toujours son origine dans la presse : un sécheur en défaut, un doseur vide ou un thermorégulateur en alarme produisent aussi des rebuts. L'inspection de la cellule fait partie du pilotage.</div>"
      },
      {
       "titre": "Le changement de série et la méthode SMED",
       "contenu": "<p>Le <strong>changement de série</strong> (changement de moule, de matière ou de couleur) immobilise la presse. Sa durée se mesure de la dernière pièce bonne de la série précédente à la première pièce bonne de la suivante. Pour la réduire, on applique la méthode <strong>SMED</strong> (single minute exchange of die, changement d'outil en moins de dix minutes), qui repose sur la distinction entre :</p>\n<ul>\n<li>les <strong>opérations internes</strong>, qui ne peuvent se faire que presse arrêtée (démonter l'ancien moule, monter le nouveau) ;</li>\n<li>les <strong>opérations externes</strong>, qui peuvent se faire pendant que la presse produit encore (préparer le moule et ses accessoires, sécher la matière, préchauffer le moule, préparer le dossier et les emballages).</li>\n</ul>\n<p>La démarche consiste à observer et chronométrer le changement, à séparer interne et externe, à convertir le plus possible d'opérations internes en externes (préchauffage du moule, brides pré-réglées), puis à simplifier les opérations internes restantes (plaques de bridage standardisées, bridage rapide magnétique ou hydraulique, multi-raccords de régulation, chariots de changement).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer un gain SMED. Avant amélioration, un changement dure 95 min, dont 40 min d'opérations qui pourraient être externes (recherche du moule, préparation des flexibles, séchage de la matière). 1) En les externalisant, l'arrêt passe à 95 − 40 = 55 min. 2) Avec un multi-raccord de régulation, on gagne encore 10 min : 45 min. 3) Pour 6 changements par semaine, le gain est de (95 − 45) × 6 = 300 min, soit 5 h de production récupérées par semaine.</div>"
      },
      {
       "titre": "Vérifier la compatibilité moule-presse",
       "contenu": "<p>Avant tout montage, on vérifie à partir de la plaque signalétique du moule et des caractéristiques de la presse :</p>\n<ul>\n<li>la <strong>force de fermeture</strong> disponible par rapport au besoin ;</li>\n<li>le <strong>passage entre colonnes</strong> et la taille des plateaux, par rapport aux dimensions du moule ;</li>\n<li>l'<strong>épaisseur du moule</strong>, comprise entre les épaisseurs mini et maxi admises par la presse ;</li>\n<li>la <strong>course d'ouverture</strong>, suffisante pour démouler et extraire la pièce ;</li>\n<li>la <strong>course d'éjection</strong> et le type d'accouplement de l'éjecteur ;</li>\n<li>le <strong>diamètre de la bague de centrage</strong> et le <strong>rayon de la buse</strong> par rapport à celui de la bague d'injection ;</li>\n<li>la <strong>capacité d'injection</strong>, les besoins en zones de canaux chauds, en circuits de régulation, en noyaux hydrauliques ou pneumatiques ;</li>\n<li>la <strong>capacité du pont roulant</strong> par rapport à la masse du moule.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le rayon de la buse de la presse doit être légèrement inférieur à celui de la bague d'injection du moule, et son orifice légèrement plus petit. Dans le cas contraire, la matière fuit entre buse et moule et forme une collerette qui empêche le démontage.</div>"
      },
      {
       "titre": "Monter un moule en sécurité",
       "contenu": "<p>Le montage d'un moule associe des risques importants : charges suspendues, écrasement entre plateaux, brûlures, chute d'objets. Il suit une procédure écrite propre à l'entreprise. Les étapes types sont :</p>\n<ol>\n<li>vérifier le dossier (référence du moule, fiche de réglage, presse prévue) et l'état du moule (dernière fiche d'intervention) ;</li>\n<li>préparer les accessoires : brides, vis, flexibles, câbles de canaux chauds, outillage d'élingage vérifié ;</li>\n<li>passer la presse en mode réglage, ouvrir au maximum, retirer l'unité d'injection ;</li>\n<li>élinguer le moule par ses anneaux de levage, avec la <strong>barrette de sécurité</strong> (bride qui solidarise les deux parties du moule) en place ;</li>\n<li>introduire le moule entre les plateaux, engager la bague de centrage dans le plateau fixe ;</li>\n<li>fermer lentement la presse sur le moule en basse pression, régler la hauteur moule si besoin ;</li>\n<li><strong>brider</strong> les deux parties sur les plateaux (bridage manuel par brides et vis, ou bridage rapide) ;</li>\n<li>retirer la barrette de sécurité et les élingues, accoupler l'éjection ;</li>\n<li>raccorder régulation, canaux chauds, noyaux, et vérifier l'absence de fuite ;</li>\n<li>régler les courses d'ouverture, d'éjection et la <strong>sécurité moule</strong> ;</li>\n<li>approcher la buse et régler la force d'appui.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la barrette de sécurité doit être en place pendant tout le levage et retirée avant la première ouverture du moule ; l'oublier en place casse le moule ou la barrette à l'ouverture. Personne ne se place sous une charge suspendue ni entre les plateaux pendant les mouvements. Le travail entre plateaux se fait presse consignée.</div>"
      },
      {
       "titre": "Le robot d'extraction : réglage et sécurité",
       "contenu": "<p>Sur la plupart des presses modernes, un <strong>robot cartésien</strong> (trois axes linéaires montés au-dessus du plateau fixe) extrait les pièces et la grappe, puis les dépose sur un convoyeur, dans un emballage ou sur un poste de reprise. Les cellules plus complexes (surmoulage d'inserts, assemblage, contrôle) utilisent des robots <strong>poly-articulés</strong> à six axes.</p>\n<p>Le réglage d'un robot au changement de série comprend :</p>\n<ul>\n<li>le montage du <strong>préhenseur</strong> propre à la pièce (ventouses, pinces pneumatiques, pinces à grappe) et le raccordement de ses circuits de vide et d'air ;</li>\n<li>le rappel du <strong>programme</strong> mémorisé pour ce moule, ou sa création par apprentissage des positions : position d'attente hors moule, descente, approche, prise, retrait, dépose ;</li>\n<li>le réglage des <strong>contrôles de prise</strong> (vacuostat sur les ventouses, détecteurs de présence) qui arrêtent le cycle si la pièce n'a pas été saisie ;</li>\n<li>la vérification de la <strong>synchronisation</strong> avec la presse : le robot ne descend que moule ouvert et éjection terminée ; la presse ne ferme que robot sorti de la zone du moule.</li>\n</ul>\n<p>Les premiers cycles se font en <strong>vitesse réduite</strong> et en mode pas à pas, sous la surveillance du régleur, avant de passer en vitesse normale.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la zone d'évolution du robot est protégée par des grilles et des portes interverrouillées. Entrer dans cette zone pendant le fonctionnement automatique expose à des chocs violents : un robot à l'arrêt peut reprendre son mouvement sans prévenir s'il attend simplement un signal de la presse. Seuls les modes réglage avec commande portative et validation à trois positions autorisent une présence dans la zone.</div>"
      },
      {
       "titre": "Installer et valider les périphériques",
       "contenu": "<p>Une fois le moule monté, on met en place les périphériques nécessaires selon la fiche de réglage : programme du robot rappelé ou créé, préhenseur monté et vérifié, convoyeur positionné, thermorégulateur réglé, doseur rempli et étalonné, sécheur en température depuis le temps requis.</p>\n<p>L'<strong>étalonnage d'un doseur volumétrique</strong> se fait en recueillant ce qu'il délivre pendant un nombre de dosages connu et en pesant. Le doseur gravimétrique se règle directement en pourcentage mais doit être vérifié périodiquement.</p>\n<p>Avant de démarrer, on vérifie l'ensemble par une <strong>liste de contrôle</strong> (check-list) de démarrage : protections en place, arrêts d'urgence fonctionnels, raccordements contrôlés, matières identifiées et étiquetées, emballages et étiquettes prêts, documents de contrôle disponibles. La préparation est validée par le responsable avant le lancement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de nombreux ateliers utilisent des chariots de préparation par moule, contenant brides, flexibles numérotés, préhenseur du robot et fiche de réglage. Cette organisation réduit les oublis et le temps d'arrêt, et facilite le travail des équipes de nuit.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> préparer en temps masqué, vérifier la compatibilité, monter en suivant la procédure, raccorder selon les schémas, valider par une check-list : c'est la chaîne d'un changement de série réussi.</div>"
      }
     ],
     "points_cles": [
      "La cellule associe presse et périphériques : alimentation, séchage, dosage, régulation, robot, convoyeur, broyeur",
      "Un défaut de pièce peut provenir d'un périphérique en défaut",
      "Le SMED sépare opérations internes et externes, puis externalise et simplifie",
      "La compatibilité moule-presse porte sur la force, les dimensions, les courses, le centrage, la buse et le levage",
      "Le rayon de buse doit être inférieur à celui de la bague d'injection",
      "La barrette de sécurité reste en place pendant le levage et se retire avant l'ouverture",
      "Doseurs et thermorégulateurs se règlent et se vérifient avant le démarrage",
      "Une check-list de démarrage valide la préparation"
     ],
     "lexique": [
      {
       "terme": "Périphérique",
       "def": "Équipement associé à la machine de transformation pour alimenter, réguler, manipuler ou contrôler."
      },
      {
       "terme": "Cellule de production",
       "def": "Ensemble cohérent formé d'une machine, de son outillage et de ses périphériques."
      },
      {
       "terme": "SMED",
       "def": "Méthode de réduction des temps de changement de série."
      },
      {
       "terme": "Opération externe",
       "def": "Opération de changement de série réalisable pendant que la machine produit."
      },
      {
       "terme": "Bridage",
       "def": "Fixation du moule sur les plateaux de la presse."
      },
      {
       "terme": "Barrette de sécurité",
       "def": "Pièce qui maintient les deux parties du moule fermées pendant les manutentions."
      },
      {
       "terme": "Sécurité moule",
       "def": "Fermeture à basse pression qui détecte un obstacle entre les plans de joint."
      },
      {
       "terme": "Nourrice",
       "def": "Répartiteur qui distribue le fluide de régulation vers plusieurs circuits."
      },
      {
       "terme": "Préhenseur",
       "def": "Outil monté sur le robot pour saisir les pièces ou les grappes."
      },
      {
       "terme": "Étalonnage",
       "def": "Vérification d'un appareil par comparaison avec une référence, ici la pesée de ce qu'il délivre."
      }
     ]
    },
    {
     "id": "bpc-maintenance-premier-niveau",
     "titre": "Maintenance de premier niveau des outillages et équipements",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Distinguer maintenance corrective, préventive systématique et conditionnelle",
      "Situer les interventions du technicien de production parmi les niveaux de maintenance",
      "Réaliser l'entretien d'un moule en fin de série et le préparer au stockage",
      "Conduire les vérifications périodiques d'une presse et de ses périphériques",
      "Rendre compte d'une intervention et participer à l'amélioration de la fiabilité"
     ],
     "sections": [
      {
       "titre": "Les formes de maintenance",
       "contenu": "<p>La <strong>maintenance</strong> est l'ensemble des actions destinées à maintenir ou rétablir un bien dans un état lui permettant d'accomplir sa fonction. La terminologie est définie par la norme NF EN 13306. On distingue :</p>\n<ul>\n<li>la <strong>maintenance corrective</strong>, réalisée après la défaillance : <strong>palliative</strong> (dépannage provisoire) ou <strong>curative</strong> (réparation durable) ;</li>\n<li>la <strong>maintenance préventive systématique</strong>, réalisée selon un échéancier (temps, nombre de cycles) : graissage hebdomadaire, changement des filtres hydrauliques toutes les N heures, révision d'un moule tous les 100 000 cycles ;</li>\n<li>la <strong>maintenance préventive conditionnelle</strong>, déclenchée par la mesure d'un paramètre qui atteint un seuil : usure de la vis mesurée, température d'huile, vibration, dérive du matelas ;</li>\n<li>la <strong>maintenance prévisionnelle</strong>, qui extrapole l'évolution d'un paramètre pour planifier l'intervention avant le seuil.</li>\n</ul>\n<p>Une défaillance d'outillage ou de presse coûte cher : arrêt de production, rebuts, retards de livraison, réparation en urgence. L'objectif est de réduire les pannes par une maintenance préventive bien ciblée et par la vigilance des équipes de production.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> corrective = après la panne ; préventive systématique = selon un échéancier ; préventive conditionnelle = selon l'état mesuré.</div>"
      },
      {
       "titre": "Le premier niveau : ce que fait le technicien de production",
       "contenu": "<p>Les interventions de maintenance sont classées en <strong>niveaux</strong> selon leur complexité, les compétences et les moyens nécessaires (classement défini dans le fascicule de documentation FD X60-000). Le technicien de production intervient au premier niveau, et parfois au deuxième selon l'organisation de l'entreprise.</p>\n<table>\n<thead><tr><th>Niveau</th><th>Exemples en plasturgie</th><th>Intervenant habituel</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Contrôles visuels, nettoyage, graissage selon consignes, purge des filtres, relevé de compteurs, remplacement de consommables accessibles sans démontage</td><td>Opérateur, technicien de production</td></tr>\n<tr><td>2</td><td>Remplacement de pièces standard (flexibles, raccords, résistances de colliers, thermocouples), réglages simples, nettoyage des circuits de régulation</td><td>Technicien formé, régleur</td></tr>\n<tr><td>3</td><td>Diagnostic de pannes, réparations par échange de sous-ensembles</td><td>Technicien de maintenance</td></tr>\n<tr><td>4 et 5</td><td>Travaux importants, rénovation, reconstruction, retouches d'empreinte en atelier spécialisé</td><td>Service maintenance, outilleur, constructeur</td></tr>\n</tbody>\n</table>\n<p>Le premier niveau s'appuie sur des <strong>gammes de maintenance</strong> affichées au poste (quoi faire, quand, avec quoi, quel critère), des <strong>check-lists</strong> journalières et une habilitation éventuelle (électrique par exemple) pour certaines tâches.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> toute intervention dans une zone dangereuse de la machine se fait après <strong>consignation</strong> : séparation des énergies (électrique, hydraulique, pneumatique), condamnation par cadenas personnel, dissipation des énergies résiduelles (accumulateurs hydrauliques, pièces chaudes), vérification de l'absence d'énergie. Un simple arrêt au pupitre n'est pas une consignation.</div>"
      },
      {
       "titre": "Entretenir un moule",
       "contenu": "<p>Le moule est l'outil le plus précieux de l'atelier. Son entretien de premier niveau comprend :</p>\n<ul>\n<li><strong>en production</strong> : nettoyage des plans de joint et des évents (dépôts de gaz de dégradation), surveillance des marques sur les pièces (bavures nouvelles, marques d'éjecteurs, rayures) qui révèlent une usure ou un choc ;</li>\n<li><strong>en fin de série</strong> : réalisation de pièces témoins (dernières pièces) conservées avec la fiche moule, purge et vidange des circuits de régulation (soufflage à l'air), nettoyage des empreintes avec un produit adapté, protection par un produit antirouille, graissage des éléments mobiles (colonnes, tiroirs, éjecteurs) avec une graisse compatible avec la température, fermeture avec barrette de sécurité ;</li>\n<li><strong>au stockage</strong> : rangement dans un lieu sec, identifié, avec la fiche d'état indiquant si le moule est « bon pour production » ou « en attente de réparation ».</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger une demande d'intervention moule. 1) Identifier le moule (numéro, référence pièce, empreinte concernée). 2) Décrire le symptôme constaté de façon factuelle : « bavure de 0,3 mm au plan de joint côté seuil, empreinte 3, apparue au cycle 45 200 ». 3) Joindre une pièce défectueuse repérée et la dernière pièce bonne. 4) Indiquer l'action provisoire (empreinte obturée, tri à 100 %, arrêt). 5) Préciser l'urgence selon le planning. 6) Transmettre à l'outillage et noter la demande dans l'historique du moule.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne jamais utiliser d'outil métallique (tournevis, cutter) pour retirer une pièce coincée dans une empreinte polie : une rayure se retrouvera sur toutes les pièces suivantes. On utilise des outils en laiton, en cuivre ou en plastique, et on chauffe éventuellement la matière.</div>"
      },
      {
       "titre": "Vérifications périodiques de la presse et des périphériques",
       "contenu": "<p>Les vérifications de premier niveau d'une presse à injecter portent typiquement sur :</p>\n<table>\n<thead><tr><th>Élément</th><th>Vérification</th><th>Fréquence type</th></tr></thead>\n<tbody>\n<tr><td>Dispositifs de sécurité</td><td>Fonctionnement des protecteurs, arrêts d'urgence, sécurités de porte</td><td>À chaque prise de poste</td></tr>\n<tr><td>Circuit hydraulique</td><td>Niveau et température d'huile, fuites, indicateur de colmatage des filtres</td><td>Journalière</td></tr>\n<tr><td>Graissage</td><td>Niveau de la centrale de graissage de la genouillère, état des colonnes</td><td>Journalière à hebdomadaire</td></tr>\n<tr><td>Chauffage du fourreau</td><td>Écart consigne-mesure par zone, colliers défaillants</td><td>Continue (alarmes)</td></tr>\n<tr><td>Refroidissement</td><td>Débits, température d'eau, état des filtres et des flexibles</td><td>Journalière</td></tr>\n<tr><td>Sécheur</td><td>Point de rosée, état des filtres à air</td><td>Hebdomadaire</td></tr>\n<tr><td>Robot</td><td>Ventouses, flexibles d'air, capteurs de présence de pièce</td><td>À chaque changement de série</td></tr>\n</tbody>\n</table>\n<p>Les relevés sont notés sur une fiche ou dans la supervision. Une valeur anormale est signalée même si la production continue : c'est elle qui déclenche la maintenance conditionnelle avant la panne.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une démarche de <strong>maintenance productive totale</strong> (TPM) confie aux équipes de production une partie de l'entretien de leurs machines (nettoyage-inspection, graissage, resserrage). Le nettoyage n'y est pas une corvée : c'est en nettoyant qu'on découvre une fuite, un flexible usé, une vis desserrée.</div>"
      },
      {
       "titre": "Diagnostiquer les dysfonctionnements courants",
       "contenu": "<p>Avant d'appeler la maintenance, le technicien de production effectue un premier diagnostic : il observe le symptôme, consulte le message d'alarme de la machine, vérifie les causes simples et accessibles, puis transmet une information précise. Le tableau suivant rassemble des cas fréquents.</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Causes possibles à vérifier au premier niveau</th><th>Suite à donner</th></tr></thead>\n<tbody>\n<tr><td>Une zone du fourreau n'atteint pas sa consigne</td><td>Collier chauffant grillé, connexion desserrée, thermocouple mal placé ou défectueux</td><td>Remplacement par un intervenant habilité ; ne pas produire avec une zone froide</td></tr>\n<tr><td>Température d'huile élevée</td><td>Débit d'eau de l'échangeur insuffisant, filtre d'eau colmaté</td><td>Vérifier le circuit d'eau, alerter si la température continue de monter</td></tr>\n<tr><td>Matelas instable</td><td>Clapet anti-retour usé, matière mal séchée, dosage irrégulier</td><td>Signaler ; contrôle de l'usure vis-clapet par la maintenance</td></tr>\n<tr><td>Moule qui ne ferme pas (sécurité moule déclenchée)</td><td>Pièce ou grappe restée dans le moule, éjecteur non revenu, réglage de sécurité trop serré</td><td>Ouvrir, inspecter, retirer l'obstacle en sécurité</td></tr>\n<tr><td>Empreinte qui ne se remplit plus</td><td>Buse de canal chaud froide ou bouchée, seuil obstrué</td><td>Vérifier le régulateur de canaux chauds, demande d'intervention outillage</td></tr>\n<tr><td>Fuite d'eau au moule</td><td>Raccord rapide défectueux, joint torique endommagé, flexible percé</td><td>Arrêter, sécher le moule pour éviter la corrosion, remplacer l'élément</td></tr>\n</tbody>\n</table>\n<p>La démarche de diagnostic va toujours du plus simple et du plus probable au plus complexe : on vérifie l'alimentation et les réglages avant de soupçonner une pièce interne.</p>"
      },
      {
       "titre": "Rendre compte et améliorer la fiabilité",
       "contenu": "<p>Chaque intervention est enregistrée : date, équipement, symptôme, cause identifiée, action réalisée, pièces changées, temps passé, intervenant. Ces données alimentent l'<strong>historique</strong> de l'équipement ou du moule. Elles permettent de calculer des indicateurs comme le <strong>MTBF</strong> (temps moyen de bon fonctionnement entre deux défaillances) et le <strong>MTTR</strong> (temps moyen de réparation), et de repérer les pannes répétitives pour les traiter à la source.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer MTBF et MTTR. Une presse a fonctionné 600 h sur un mois avec 4 pannes ayant duré 1,5 h, 0,5 h, 3 h et 1 h. 1) Temps total de réparation = 6 h. 2) MTTR = 6 / 4 = 1,5 h. 3) MTBF = temps de bon fonctionnement / nombre de pannes = (600 − 6) / 4 ≈ 148,5 h. Un MTBF qui baisse d'un mois à l'autre signale une dégradation de fiabilité.</div>\n<p>Le technicien de production contribue à l'amélioration en proposant des actions : ajout d'un point de graissage dans la gamme, remplacement préventif d'un flexible qui casse régulièrement, détrompeur sur un raccord souvent inversé, standardisation des raccords.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une maintenance bien tracée est une maintenance qui s'améliore. Décrire un symptôme avec précision fait gagner du temps au technicien de maintenance et à l'outilleur.</div>"
      }
     ],
     "points_cles": [
      "Maintenance corrective après défaillance, préventive systématique selon un échéancier, conditionnelle selon l'état",
      "Le technicien de production intervient au premier niveau, parfois au deuxième",
      "Toute intervention en zone dangereuse impose une consignation complète des énergies",
      "En fin de série, le moule est purgé, nettoyé, protégé, graissé et accompagné de pièces témoins",
      "On ne retire jamais une pièce coincée avec un outil métallique sur une empreinte polie",
      "Les vérifications quotidiennes portent d'abord sur les dispositifs de sécurité",
      "Toute intervention est enregistrée dans l'historique",
      "MTBF = temps de bon fonctionnement / nombre de pannes ; MTTR = temps de réparation / nombre de pannes"
     ],
     "lexique": [
      {
       "terme": "Maintenance corrective",
       "def": "Maintenance exécutée après la détection d'une défaillance."
      },
      {
       "terme": "Maintenance préventive systématique",
       "def": "Maintenance réalisée selon un échéancier établi en temps ou en nombre de cycles."
      },
      {
       "terme": "Maintenance conditionnelle",
       "def": "Maintenance déclenchée par la mesure d'un paramètre d'état qui atteint un seuil."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble des opérations qui mettent un équipement en sécurité en séparant et condamnant ses énergies."
      },
      {
       "terme": "Gamme de maintenance",
       "def": "Document décrivant les opérations de maintenance, leur fréquence et leurs critères."
      },
      {
       "terme": "Pièce témoin",
       "def": "Dernière pièce d'une série conservée pour juger l'état du moule."
      },
      {
       "terme": "Historique",
       "def": "Enregistrement chronologique des interventions sur un équipement."
      },
      {
       "terme": "MTBF",
       "def": "Temps moyen de bon fonctionnement entre deux défaillances."
      },
      {
       "terme": "MTTR",
       "def": "Temps moyen de réparation d'une défaillance."
      },
      {
       "terme": "TPM",
       "def": "Maintenance productive totale, démarche associant la production à l'entretien des équipements."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Maîtrise de la production, qualité, santé-sécurité et environnement",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpc-pilotage-defauts-production",
     "titre": "Démarrer, piloter, arrêter : diagnostic des défauts de pièces",
     "niveau": "Tle",
     "duree": 55,
     "objectifs": [
      "Conduire le démarrage d'une production jusqu'à la validation de la première pièce bonne",
      "Surveiller une production et identifier une dérive à partir des grandeurs mesurées",
      "Diagnostiquer les principaux défauts de pièces injectées et composites et proposer des actions correctives",
      "Appliquer une démarche de résolution méthodique en ne modifiant qu'un paramètre à la fois",
      "Arrêter une production en mettant l'installation et l'outillage en sécurité"
     ],
     "sections": [
      {
       "titre": "Le démarrage et la validation de la première pièce",
       "contenu": "<p>Le <strong>démarrage</strong> d'une production suit la préparation : moule monté et raccordé, périphériques en place, matière préparée. Les étapes sont les suivantes :</p>\n<ol>\n<li>mise en chauffe du fourreau, des canaux chauds et du moule, en respectant les temps de stabilisation ;</li>\n<li><strong>purge</strong> du fourreau jusqu'à obtenir une matière propre, homogène, de la bonne couleur, et mesure de la température matière ;</li>\n<li>chargement des paramètres de la fiche de réglage et contrôle de leur cohérence avec la presse ;</li>\n<li>premiers cycles en mode semi-automatique, en surveillant éjection, prise robot et remplissage ;</li>\n<li>passage en automatique et attente de la <strong>stabilisation thermique</strong> du moule (souvent plusieurs dizaines de cycles) ; les pièces de démarrage sont isolées dans un bac rouge ;</li>\n<li>contrôle de la <strong>première pièce bonne</strong> par empreinte selon le plan de contrôle : aspect, dimensions critiques, masse, montage éventuel ;</li>\n<li><strong>validation du démarrage</strong> par la personne habilitée (régleur, chef d'équipe, qualité), signature de la fiche de démarrage, puis lancement de la série.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> aucune pièce n'est conditionnée comme bonne avant la validation du démarrage. Les pièces de démarrage et de réglage sont séparées, identifiées et rebroyées ou jetées selon la consigne.</div>"
      },
      {
       "titre": "Piloter et surveiller la production",
       "contenu": "<p>Pendant la série, le technicien <strong>pilote</strong> la cellule : il s'assure que la production reste conforme, à la cadence prévue, en sécurité. Sa surveillance porte sur :</p>\n<ul>\n<li>les <strong>grandeurs mesurées</strong> de la presse : temps de cycle, temps de remplissage, pression d'injection atteinte, matelas, temps de dosage, températures réelles ; la plupart des presses permettent de fixer des <strong>tolérances</strong> qui déclenchent une alarme ou éjectent automatiquement les pièces suspectes ;</li>\n<li>les <strong>pièces</strong>, selon la fréquence du plan de contrôle : aspect, cotes, masse, enregistrées sur les fiches ou cartes de contrôle ;</li>\n<li>les <strong>périphériques</strong> : niveau de matière, sécheur, thermorégulateurs, robot ;</li>\n<li>les <strong>approvisionnements</strong> : matière, emballages, étiquettes, évacuation des conteneurs pleins.</li>\n</ul>\n<p>Une <strong>dérive</strong> est une évolution progressive d'une grandeur, qui précède souvent la non-conformité : matelas qui diminue, pression d'injection qui monte, cote qui se rapproche d'une limite. La détecter tôt permet d'agir avant de produire des rebuts.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> à chaque relève de poste, l'équipe sortante transmet à l'équipe entrante l'état de la production : quantités, incidents, réglages modifiés et pourquoi, pièces en attente de décision. Cette transmission orale est doublée d'une trace écrite dans le cahier de poste ou le logiciel de suivi.</div>"
      },
      {
       "titre": "Les défauts des pièces injectées",
       "contenu": "<p>Le tableau suivant présente les défauts les plus fréquents, leurs causes probables et les principales actions. Les actions se testent une à une.</p>\n<table>\n<thead><tr><th>Défaut</th><th>Description</th><th>Causes probables</th><th>Actions possibles</th></tr></thead>\n<tbody>\n<tr><td>Incomplet (manque)</td><td>Pièce non remplie</td><td>Dosage insuffisant, commutation trop tôt, matière trop froide, vitesse faible, évents bouchés</td><td>Corriger dosage ou commutation, augmenter vitesse ou température, nettoyer les évents</td></tr>\n<tr><td>Bavure</td><td>Film de matière au plan de joint ou autour des éjecteurs</td><td>Force de fermeture insuffisante, maintien trop fort, commutation trop tardive, plan de joint abîmé</td><td>Vérifier fermeture et commutation, réduire le maintien, demande d'intervention moule</td></tr>\n<tr><td>Retassure</td><td>Creux en surface des zones épaisses</td><td>Maintien trop faible ou trop court, matelas nul, moule trop chaud localement</td><td>Augmenter pression ou temps de maintien, vérifier le matelas et la régulation</td></tr>\n<tr><td>Bulle (vide)</td><td>Cavité interne dans une zone épaisse</td><td>Même causes que la retassure, ou humidité</td><td>Maintien, séchage</td></tr>\n<tr><td>Traînées argentées</td><td>Stries brillantes dans le sens de l'écoulement</td><td>Humidité, air entraîné, dégradation</td><td>Contrôler le séchage, la décompression, la température</td></tr>\n<tr><td>Brûlure (effet diesel)</td><td>Zone noire en fin d'écoulement</td><td>Air comprimé et échauffé, vitesse trop élevée, évents insuffisants</td><td>Réduire la vitesse en fin de remplissage, nettoyer ou créer des évents</td></tr>\n<tr><td>Ligne de soudure marquée</td><td>Trait à la rencontre de deux fronts de matière</td><td>Matière ou moule trop froids, vitesse faible, air piégé</td><td>Augmenter températures ou vitesse, dégazer la zone</td></tr>\n<tr><td>Jet libre</td><td>Trace sinueuse près du seuil</td><td>Vitesse trop élevée au passage du seuil</td><td>Profil de vitesse lent au départ</td></tr>\n<tr><td>Déformation (voilage)</td><td>Pièce gauchie après éjection</td><td>Refroidissement non uniforme, contraintes, orientation des fibres, éjection trop tôt</td><td>Équilibrer la régulation, allonger le refroidissement, ajuster le maintien</td></tr>\n<tr><td>Marques d'éjecteurs</td><td>Empreintes ou blanchiment au droit des éjecteurs</td><td>Pièce trop chaude ou collée, éjection trop rapide</td><td>Allonger le refroidissement, ralentir l'éjection, vérifier les dépouilles</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> corriger une bavure en augmentant la force de fermeture au maximum peut masquer un problème de commutation et user prématurément le moule et la presse. On cherche d'abord la cause : réglage, matière ou outillage.</div>"
      },
      {
       "titre": "Les défauts des pièces composites",
       "contenu": "<table>\n<thead><tr><th>Défaut</th><th>Description</th><th>Causes probables</th><th>Prévention</th></tr></thead>\n<tbody>\n<tr><td>Bulles, porosité</td><td>Air piégé dans le stratifié</td><td>Débullage insuffisant, fuite de vide en infusion, résine trop visqueuse</td><td>Débullage rigoureux, test de vide, température de l'atelier</td></tr>\n<tr><td>Zone sèche (blanche)</td><td>Fibres non imprégnées</td><td>Résine insuffisante, gel trop rapide, chemin de résine mal conçu</td><td>Quantités calculées, temps de gel adapté, plan d'infusion</td></tr>\n<tr><td>Délaminage</td><td>Séparation entre plis</td><td>Pli posé sur une couche trop durcie, pollution, choc</td><td>Respecter les délais entre plis, propreté, ponçage avant reprise</td></tr>\n<tr><td>Gelcoat plissé (crocodile)</td><td>Rides en surface</td><td>Stratification sur gelcoat trop frais</td><td>Attendre le bon état du gelcoat</td></tr>\n<tr><td>Arrachement au démoulage</td><td>Gelcoat ou stratifié resté sur le moule</td><td>Agent de démoulage insuffisant, moule abîmé</td><td>Préparation du moule, cirage</td></tr>\n<tr><td>Marquage des fibres</td><td>Texture des renforts visible en surface</td><td>Gelcoat trop mince, retrait de la résine, démoulage trop tôt</td><td>Épaisseur de gelcoat, voile de surface, post-cuisson</td></tr>\n<tr><td>Pièce collante en surface</td><td>Résine non durcie</td><td>Catalyseur mal dosé ou oublié, atelier trop froid, mélange insuffisant</td><td>Pesée, mélange, contrôle de la température</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en composite, la plupart des défauts naissent pendant la préparation et l'imprégnation : ils ne se rattrapent pas après le gel. La rigueur des pesées, des délais et du débullage est la meilleure prévention.</div>"
      },
      {
       "titre": "Une démarche de résolution méthodique",
       "contenu": "<p>Face à un défaut, l'improvisation conduit à multiplier les réglages contradictoires. On suit une démarche structurée :</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> traiter un défaut en production. 1) <strong>Protéger le client</strong> : isoler les pièces suspectes depuis le dernier contrôle bon, trier si nécessaire. 2) <strong>Caractériser</strong> le défaut : quoi, où sur la pièce, quelle empreinte, depuis quand, permanent ou aléatoire. 3) <strong>Rechercher ce qui a changé</strong> : lot de matière, réglage, périphérique, température de l'atelier, changement d'équipe. 4) <strong>Lister les causes possibles</strong> par familles (méthode des 5M : matière, milieu, méthode, machine, main-d'œuvre). 5) <strong>Agir sur la cause la plus probable</strong>, un seul paramètre à la fois, et attendre la stabilisation. 6) <strong>Vérifier</strong> l'efficacité sur plusieurs pièces. 7) <strong>Enregistrer</strong> la modification sur la fiche de réglage ou le cahier de poste, et informer la hiérarchie.</div>\n<p>Exemple : des retassures apparaissent en milieu de poste sur une pièce PA66-GF30 sans modification de réglage. Le relevé montre un matelas passé de 6 mm à 0,5 mm. La cause n'est pas une pression de maintien insuffisante mais une perte de matière en avant de vis : on vérifie le dosage, puis l'état du clapet anti-retour. Augmenter la pression de maintien n'aurait rien corrigé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un réglage modifié pour compenser une cause extérieure (matière humide, circuit d'eau bouché) doit être rétabli quand la cause est supprimée. Sinon, la fiche de réglage ne correspond plus à la réalité et le problème réapparaît au démarrage suivant.</div>"
      },
      {
       "titre": "Arrêter une production",
       "contenu": "<p>L'<strong>arrêt</strong> en fin de série suit une procédure :</p>\n<ul>\n<li>arrêter l'alimentation en matière au bon moment pour vider la trémie sans gaspiller, ou purger avec une matière de nettoyage si l'on change de matière ;</li>\n<li>pour les matières sensibles (PVC, POM, matières ignifugées), purger complètement le fourreau avec une matière stable (PE ou PP par exemple) avant refroidissement ;</li>\n<li>réaliser les pièces témoins, terminer et étiqueter le dernier conteneur, solder l'ordre de fabrication (quantités bonnes, rebuts, temps) ;</li>\n<li>reculer l'unité d'injection, arrêter le chauffage selon la consigne, fermer le moule en laissant un faible écart ou le protéger ;</li>\n<li>arrêter la régulation et purger les circuits si le moule est démonté ;</li>\n<li>nettoyer le poste et ranger les documents.</li>\n</ul>\n<p>En cas d'<strong>arrêt court</strong> (pause, attente), on baisse les températures du fourreau pour limiter la dégradation et on reprend par quelques purges avant de redémarrer.</p>"
      }
     ],
     "points_cles": [
      "Démarrage : chauffe, purge, chargement des paramètres, stabilisation, contrôle de la première pièce bonne, validation",
      "Les pièces de démarrage sont isolées et identifiées",
      "Le pilotage repose sur les grandeurs mesurées, les contrôles pièces et l'état des périphériques",
      "Une dérive précède souvent la non-conformité : la détecter tôt évite les rebuts",
      "Chaque défaut a des causes possibles de réglage, de matière ou d'outillage",
      "En composite, les défauts naissent à la préparation et à l'imprégnation et ne se rattrapent pas",
      "Démarche : protéger le client, caractériser, chercher ce qui a changé, agir sur une cause à la fois, vérifier, enregistrer",
      "L'arrêt comprend purge adaptée, pièces témoins, solde de l'ordre de fabrication et mise en sécurité"
     ],
     "lexique": [
      {
       "terme": "Première pièce bonne",
       "def": "Première pièce conforme après démarrage, contrôlée selon le plan de contrôle."
      },
      {
       "terme": "Stabilisation thermique",
       "def": "Atteinte d'un équilibre de température du moule et de la matière après démarrage."
      },
      {
       "terme": "Dérive",
       "def": "Évolution progressive d'une grandeur vers une limite de tolérance."
      },
      {
       "terme": "Bavure",
       "def": "Mince film de matière qui déborde au plan de joint ou aux jeux du moule."
      },
      {
       "terme": "Effet diesel",
       "def": "Brûlure de la matière causée par l'échauffement de l'air comprimé en fin d'écoulement."
      },
      {
       "terme": "Ligne de soudure",
       "def": "Zone de rencontre de deux fronts de matière, souvent visible et plus fragile."
      },
      {
       "terme": "Délaminage",
       "def": "Séparation de deux plis d'un stratifié."
      },
      {
       "terme": "Zone sèche",
       "def": "Partie de renfort non imprégnée de résine."
      },
      {
       "terme": "5M",
       "def": "Méthode de classement des causes : matière, milieu, méthode, machine, main-d'œuvre."
      },
      {
       "terme": "Solde d'un ordre de fabrication",
       "def": "Clôture de l'ordre avec enregistrement des quantités produites, des rebuts et des temps."
      }
     ]
    },
    {
     "id": "bpc-qualite-controle-msp",
     "titre": "Qualité, contrôle et maîtrise statistique des procédés",
     "niveau": "Tle",
     "duree": 55,
     "objectifs": [
      "Situer le contrôle dans un système de management de la qualité",
      "Choisir et utiliser les moyens de mesure adaptés aux pièces plastiques et composites",
      "Construire et interpréter une carte de contrôle moyenne-étendue",
      "Calculer et interpréter les indices de capabilité Cp et Cpk",
      "Traiter une non-conformité avec les outils de résolution de problèmes"
     ],
     "sections": [
      {
       "titre": "La qualité dans l'entreprise de plasturgie",
       "contenu": "<p>La <strong>qualité</strong> est l'aptitude d'un produit à satisfaire les exigences du client. Elle se traduit par la conformité au plan, au cahier des charges et aux normes, mais aussi par le respect des délais et des quantités. La plupart des entreprises de plasturgie sont <strong>certifiées</strong> selon la norme ISO 9001 (système de management de la qualité) et, pour les fournisseurs de l'automobile, selon le référentiel IATF 16949 ; les pièces médicales relèvent de l'ISO 13485 et l'aéronautique de l'EN 9100.</p>\n<p>Le système qualité définit qui contrôle quoi, quand, comment et avec quel moyen. Ces éléments sont rassemblés dans le <strong>plan de contrôle</strong> (ou plan de surveillance), propre à chaque pièce. On y trouve les <strong>caractéristiques</strong> à surveiller, dont certaines sont dites <strong>critiques</strong> ou <strong>spéciales</strong> (sécurité, fonction, réglementation) et repérées par un symbole sur le plan.</p>\n<p>On distingue le <strong>contrôle de réception</strong> (matières, composants), le <strong>contrôle en cours de fabrication</strong> (autocontrôle par l'opérateur, contrôle par le régleur) et le <strong>contrôle final</strong> (avant expédition). L'<strong>autocontrôle</strong> rend l'opérateur responsable de la conformité de sa production : il contrôle lui-même selon le plan et décide d'arrêter si nécessaire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la qualité ne se contrôle pas seulement à la fin, elle se construit à chaque étape. Le plan de contrôle est le document de référence pour savoir quoi contrôler, à quelle fréquence et avec quel moyen.</div>"
      },
      {
       "titre": "Moyens de contrôle et particularités des pièces plastiques",
       "contenu": "<table>\n<thead><tr><th>Caractéristique</th><th>Moyens de contrôle</th></tr></thead>\n<tbody>\n<tr><td>Dimensions</td><td>Pied à coulisse, micromètre, comparateur, jauges, calibres « entre / n'entre pas », montages de contrôle, machine à mesurer tridimensionnelle, projecteur de profil, mesure optique</td></tr>\n<tr><td>Masse</td><td>Balance de précision</td></tr>\n<tr><td>Aspect</td><td>Comparaison à une pièce étalon ou à une charte d'aspect, sous éclairage normalisé, à distance et durée définies</td></tr>\n<tr><td>Couleur</td><td>Comparaison visuelle en cabine à lumière normalisée, spectrocolorimètre</td></tr>\n<tr><td>Fonction</td><td>Montage sur pièce associée, test d'étanchéité, essai d'emboîtement ou de clipsage</td></tr>\n<tr><td>Composite</td><td>Épaisseur (jauge, ultrasons), dureté Barcol, taux de fibres par calcination, contrôle par ultrasons du délaminage</td></tr>\n</tbody>\n</table>\n<p>Les pièces plastiques imposent des précautions : elles sont <strong>déformables</strong> (un pied à coulisse trop serré écrase la cote), leurs dimensions <strong>évoluent après moulage</strong> (post-retrait, reprise d'humidité), et elles se dilatent fortement avec la température. Le plan de contrôle précise donc le délai et les conditions de mesure (par exemple après 24 h à 23 °C).</p>\n<p>Les instruments sont suivis en <strong>métrologie</strong> : chacun porte une identification et une date de validité d'étalonnage ; un instrument dont la vérification est dépassée ne doit pas être utilisé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> comparer la cote d'une pièce mesurée chaude en sortie de presse à la tolérance du plan conduit à des décisions fausses. Le contrôle « à chaud » peut servir au suivi de tendance, mais la conformité se juge dans les conditions définies par le plan de contrôle.</div>"
      },
      {
       "titre": "La maîtrise statistique des procédés et la carte de contrôle",
       "contenu": "<p>Tout procédé présente une <strong>variabilité</strong> : deux pièces ne sont jamais identiques. Cette variabilité a deux origines : des <strong>causes communes</strong>, nombreuses et faibles, toujours présentes (variation naturelle), et des <strong>causes spéciales</strong>, ponctuelles et identifiables (matière humide, circuit d'eau bouché). La <strong>maîtrise statistique des procédés</strong> (MSP, ou SPC) vise à détecter l'apparition de causes spéciales avant qu'elles ne produisent des pièces non conformes.</p>\n<p>L'outil principal est la <strong>carte de contrôle moyenne-étendue</strong> (X̄-R). À intervalles réguliers, on prélève un <strong>échantillon</strong> de n pièces consécutives (souvent n = 5), on calcule la moyenne X̄ et l'étendue R (plus grande valeur moins plus petite), et on les reporte sur deux graphiques. Les <strong>limites de contrôle</strong> sont calculées à partir des données du procédé (et non à partir des tolérances) :</p>\n<ul>\n<li>pour la moyenne : LSC = X̿ + A<sub>2</sub> × R̄ et LIC = X̿ − A<sub>2</sub> × R̄ ;</li>\n<li>pour l'étendue : LSC = D<sub>4</sub> × R̄ et LIC = D<sub>3</sub> × R̄.</li>\n</ul>\n<p>Pour n = 5 : A<sub>2</sub> = 0,577 ; D<sub>4</sub> = 2,114 ; D<sub>3</sub> = 0.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer les limites d'une carte. Sur 20 échantillons de 5 pièces, la moyenne des moyennes vaut X̿ = 24,70 g et l'étendue moyenne R̄ = 0,10 g. 1) LSC moyenne = 24,70 + 0,577 × 0,10 ≈ 24,758 g. 2) LIC moyenne = 24,70 − 0,0577 ≈ 24,642 g. 3) LSC étendue = 2,114 × 0,10 ≈ 0,211 g ; LIC étendue = 0. 4) Un prélèvement donne 24,71 ; 24,74 ; 24,69 ; 24,73 ; 24,72 : X̄ = 24,718 g et R = 0,05 g, les deux sont dans les limites : le procédé est sous contrôle.</div>"
      },
      {
       "titre": "Interpréter une carte de contrôle",
       "contenu": "<p>On réagit lorsque la carte montre un signal de cause spéciale. Les règles usuelles sont :</p>\n<ul>\n<li>un point <strong>hors limites</strong> de contrôle ;</li>\n<li>une <strong>série</strong> de 7 points consécutifs du même côté de la moyenne ;</li>\n<li>une <strong>tendance</strong> de 7 points consécutifs croissants ou décroissants ;</li>\n<li>un comportement anormal : points tous très proches de la moyenne (mesure ou calcul suspect), cycles réguliers.</li>\n</ul>\n<p>Le nombre de points retenu pour série et tendance (souvent 7) est fixé par les règles de l'entreprise. Une étendue qui augmente signifie que le procédé devient moins régulier (dispersion) ; une moyenne qui se décale signifie un <strong>déréglage</strong> (centrage).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les limites de contrôle ne sont pas les tolérances. Un point peut être hors limites de contrôle tout en restant dans la tolérance : il faut alors réagir (chercher la cause) sans forcément trier. À l'inverse, corriger le réglage à chaque petite variation à l'intérieur des limites augmente la dispersion : c'est le <strong>sur-réglage</strong>.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque action sur le procédé est notée sur la carte, à côté du point concerné (changement de lot, réglage modifié, intervention moule). C'est ce « journal de bord » qui permet ensuite de relier un signal à sa cause.</div>"
      },
      {
       "titre": "La capabilité du procédé",
       "contenu": "<p>La <strong>capabilité</strong> mesure l'aptitude d'un procédé stable à produire à l'intérieur de la tolérance. On la calcule à partir de l'<strong>écart-type</strong> σ du procédé et de l'<strong>intervalle de tolérance</strong> IT = Ts − Ti :</p>\n<ul>\n<li><strong>Cp</strong> = IT / (6σ) compare la tolérance à la dispersion, sans tenir compte du centrage ;</li>\n<li><strong>Cpk</strong> = min[(Ts − X̄) / (3σ) ; (X̄ − Ti) / (3σ)] tient compte du centrage.</li>\n</ul>\n<p>On a toujours Cpk ≤ Cp, l'égalité correspondant à un procédé parfaitement centré. Les clients exigent souvent Cpk ≥ 1,33 en production courante, et davantage pour les caractéristiques critiques ou lors de l'homologation (valeurs fixées par le client).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer Cp et Cpk. Cote 40,00 ± 0,15 mm ; procédé stable, moyenne 40,05 mm, écart-type 0,025 mm. 1) IT = 40,15 − 39,85 = 0,30 mm. 2) Cp = 0,30 / (6 × 0,025) = 0,30 / 0,15 = 2,0. 3) Côté supérieur : (40,15 − 40,05) / (3 × 0,025) = 0,10 / 0,075 ≈ 1,33. 4) Côté inférieur : (40,05 − 39,85) / 0,075 ≈ 2,67. 5) Cpk = 1,33. Le procédé est très peu dispersé mais décentré vers le haut : recentrer la cote (par la pression de maintien ou la température moule, par exemple) ferait monter le Cpk vers 2.</div>"
      },
      {
       "titre": "Traiter les non-conformités",
       "contenu": "<p>Une pièce ou un lot <strong>non conforme</strong> est identifié (étiquette rouge), isolé dans une zone dédiée et enregistré sur une <strong>fiche de non-conformité</strong>. Le service qualité décide de son devenir : <strong>rebut</strong>, <strong>retouche</strong>, <strong>tri</strong>, ou <strong>dérogation</strong> (acceptation exceptionnelle accordée par le client).</p>\n<p>On distingue la <strong>correction</strong> (traiter le produit défectueux) et l'<strong>action corrective</strong> (supprimer la cause pour éviter la récidive). Les outils de résolution de problèmes aident à trouver cette cause :</p>\n<ul>\n<li>le <strong>QQOQCP</strong> (qui, quoi, où, quand, comment, pourquoi) pour décrire le problème ;</li>\n<li>le <strong>diagramme d'Ishikawa</strong> (cause-effet, en arêtes de poisson) qui classe les causes selon les 5M ;</li>\n<li>les <strong>5 pourquoi</strong>, qui remontent de cause en cause jusqu'à la cause racine ;</li>\n<li>le <strong>diagramme de Pareto</strong>, qui classe les défauts par fréquence ou coût pour traiter d'abord les plus importants ;</li>\n<li>la démarche <strong>PDCA</strong> (planifier, faire, vérifier, agir) ou le <strong>8D</strong> pour conduire l'action jusqu'à son efficacité vérifiée.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> identifier, isoler, enregistrer, décider, corriger, puis supprimer la cause. Une non-conformité traitée sans action corrective reviendra.</div>"
      }
     ],
     "points_cles": [
      "Le plan de contrôle fixe les caractéristiques, fréquences, moyens et responsables du contrôle",
      "Les pièces plastiques se mesurent dans des conditions définies de délai et de température",
      "Un instrument non étalonné ou à date dépassée ne doit pas être utilisé",
      "La carte X̄-R détecte les causes spéciales : point hors limites, série, tendance",
      "Les limites de contrôle se calculent à partir du procédé et ne sont pas les tolérances",
      "Cp = IT / 6σ ; Cpk tient compte du centrage et vaut au plus Cp",
      "Une non-conformité est identifiée, isolée, enregistrée et fait l'objet d'une décision",
      "QQOQCP, Ishikawa, 5 pourquoi, Pareto et PDCA servent à trouver et supprimer la cause"
     ],
     "lexique": [
      {
       "terme": "Plan de contrôle",
       "def": "Document qui définit les caractéristiques à contrôler, la fréquence, le moyen et la réaction en cas d'écart."
      },
      {
       "terme": "Autocontrôle",
       "def": "Contrôle de sa propre production par l'opérateur selon le plan de contrôle."
      },
      {
       "terme": "Cause spéciale",
       "def": "Cause ponctuelle et identifiable de variation du procédé."
      },
      {
       "terme": "Carte de contrôle",
       "def": "Graphique de suivi d'une caractéristique avec des limites calculées à partir du procédé."
      },
      {
       "terme": "Étendue",
       "def": "Écart entre la plus grande et la plus petite valeur d'un échantillon."
      },
      {
       "terme": "Écart-type",
       "def": "Mesure de la dispersion des valeurs autour de la moyenne."
      },
      {
       "terme": "Capabilité",
       "def": "Aptitude d'un procédé stable à produire à l'intérieur de la tolérance."
      },
      {
       "terme": "Dérogation",
       "def": "Autorisation exceptionnelle, accordée par le client, d'utiliser un produit non conforme."
      },
      {
       "terme": "Action corrective",
       "def": "Action qui supprime la cause d'une non-conformité pour en éviter la récidive."
      },
      {
       "terme": "Diagramme de Pareto",
       "def": "Graphique qui classe les causes ou défauts par ordre d'importance décroissante."
      }
     ]
    },
    {
     "id": "bpc-organisation-amelioration-equipe",
     "titre": "Organisation de la production, indicateurs et animation d'équipe",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Situer le technicien de production dans l'organisation de l'atelier et le circuit des documents",
      "Calculer et analyser le taux de rendement synthétique d'un poste",
      "Estimer un coût de revient de pièce à partir des temps et des consommations",
      "Appliquer les outils d'amélioration continue de l'atelier : 5S, standards, management visuel",
      "Transmettre des consignes, former un opérateur et rendre compte à la hiérarchie"
     ],
     "sections": [
      {
       "titre": "L'organisation de l'atelier et le circuit des informations",
       "contenu": "<p>Dans une entreprise de plasturgie, la production s'inscrit dans une chaîne de services. Le <strong>service commercial</strong> reçoit les commandes ; le service <strong>méthodes</strong> ou <strong>industrialisation</strong> définit les gammes, les fiches de réglage et les temps ; le service <strong>ordonnancement-lancement</strong> (ou planification) établit le <strong>planning</strong> des presses et émet les <strong>ordres de fabrication</strong> (OF) ; la <strong>production</strong> réalise ; la <strong>qualité</strong> définit et vérifie les contrôles ; la <strong>maintenance</strong> et l'<strong>outillage</strong> entretiennent les équipements ; la <strong>logistique</strong> approvisionne et expédie.</p>\n<p>Le technicien de production travaille souvent en équipes successives (2×8, 3×8, ou équipes de week-end). Il peut animer une petite équipe d'opérateurs sous l'autorité d'un chef d'équipe ou d'atelier. Il reçoit l'OF et le dossier de fabrication, organise son poste, produit, et renvoie des informations : quantités, rebuts, temps, incidents. Aujourd'hui, ces échanges passent souvent par un logiciel de suivi de production (<strong>MES</strong>) relié aux presses, qui enregistre automatiquement cycles et arrêts.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ordre de fabrication déclenche la production ; le compte rendu de production (quantités, rebuts, temps, arrêts) alimente le planning, le calcul des coûts et l'amélioration.</div>"
      },
      {
       "titre": "Planifier la charge d'une presse",
       "contenu": "<p>Avant de lancer un ordre de fabrication, il faut savoir s'il tient dans le planning. La <strong>charge</strong> d'un poste est le temps de travail qu'il doit fournir ; sa <strong>capacité</strong> est le temps dont il dispose. La charge se calcule à partir de la quantité, du temps de cycle, du nombre d'empreintes, du temps de changement de série et d'un rendement prévisionnel (le TRS habituel du poste, défini ci-dessous).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la durée d'un OF. Commande de 36 000 pièces, moule 4 empreintes, cycle 24 s, changement de série 1 h, rendement prévisionnel 85 %. 1) Nombre de cycles = 36 000 / 4 = 9 000. 2) Temps théorique = 9 000 × 24 s = 216 000 s = 60 h. 3) Temps réel prévisible = 60 / 0,85 ≈ 70,6 h. 4) Avec le changement de série : ≈ 71,6 h. 5) En 3 équipes de 7 h effectives par jour (21 h), il faut environ 3,4 jours : l'OF doit démarrer au plus tard le lundi matin pour une livraison le vendredi.</div>\n<p>Le planning tient compte des priorités (dates de livraison), de la disponibilité des moules (en réparation ou non), des matières (délai de séchage, réception d'un lot), et du regroupement des séries de même matière ou de couleurs voisines (du clair vers le foncé) pour limiter les purges.</p>"
      },
      {
       "titre": "Le taux de rendement synthétique",
       "contenu": "<p>Le <strong>TRS</strong> mesure l'efficacité d'un moyen de production. Il compare le nombre de pièces bonnes réellement produites au nombre de pièces qui auraient pu l'être pendant le temps d'ouverture. Il se décompose en trois taux (norme NF E60-182) :</p>\n<ul>\n<li>le <strong>taux de disponibilité</strong> (TD) = temps de fonctionnement / temps requis ; il est réduit par les pannes, changements de série, attentes de matière ;</li>\n<li>le <strong>taux de performance</strong> (TP) = temps net / temps de fonctionnement, ou (nombre de pièces produites × temps de cycle théorique) / temps de fonctionnement ; il est réduit par les cycles plus longs que prévus et les micro-arrêts ;</li>\n<li>le <strong>taux de qualité</strong> (TQ) = pièces bonnes / pièces produites.</li>\n</ul>\n<p>TRS = TD × TP × TQ, ou directement TRS = (pièces bonnes × temps de cycle théorique) / temps requis.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un TRS sur un poste de 8 h. Temps requis 450 min (pauses déduites). Arrêts : changement de moule 40 min, panne robot 20 min. Temps de cycle théorique 30 s pour 2 empreintes. Pièces produites 1 520, dont 60 rebutées. 1) Temps de fonctionnement = 450 − 60 = 390 min ; TD = 390 / 450 ≈ 0,867. 2) Temps net = 1 520 pièces × 15 s par pièce = 22 800 s = 380 min ; TP = 380 / 390 ≈ 0,974. 3) TQ = 1 460 / 1 520 ≈ 0,961. 4) TRS = 0,867 × 0,974 × 0,961 ≈ 0,811, soit 81 %. Vérification : 1 460 × 15 s = 21 900 s = 365 min ; 365 / 450 ≈ 0,811. La première perte est la disponibilité : c'est le changement de moule qu'il faut d'abord réduire.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le temps de cycle théorique est celui de la fiche de réglage validée, pas celui du jour. Si l'on prend un cycle allongé comme référence, le taux de performance paraît bon alors qu'une perte existe.</div>"
      },
      {
       "titre": "Estimer le coût d'une pièce",
       "contenu": "<p>Le technicien participe à la maîtrise des coûts. Le <strong>coût de revient</strong> d'une pièce injectée se compose principalement :</p>\n<ul>\n<li>du <strong>coût matière</strong> : masse de matière par pièce (y compris la part de grappe non recyclée et les rebuts) × prix au kilogramme, plus le colorant ;</li>\n<li>du <strong>coût machine</strong> : temps de cycle par pièce × taux horaire de la presse (amortissement, énergie, entretien, surface) ;</li>\n<li>du <strong>coût de main-d'œuvre</strong> : temps passé par pièce × taux horaire ; une personne surveille souvent plusieurs presses ;</li>\n<li>des <strong>frais annexes</strong> : emballage, changement de série réparti sur la série, contrôle, amortissement du moule si facturé ainsi.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pièce de 45 g en PP à 1,80 euro/kg, carotte rebroyée et réutilisée, rebut 3 %, mélange-maître à 2 % à 6 euros/kg ; cycle 30 s pour 2 empreintes ; presse à 35 euros/h ; un opérateur à 30 euros/h surveille 3 presses. 1) Matière : 0,045 × 1,03 × (0,98 × 1,80 + 0,02 × 6) = 0,04635 × 1,884 ≈ 0,087 euro. 2) Temps par pièce = 15 s = 1/240 h ; machine = 35 / 240 ≈ 0,146 euro. 3) Main-d'œuvre = (30 / 3) / 240 ≈ 0,042 euro. 4) Total hors emballage et frais ≈ 0,275 euro. Gagner 2 s de cycle (cycle de 28 s, soit 14 s par pièce) réduit le coût machine et main-d'œuvre d'environ 7 %.</div>"
      },
      {
       "titre": "Les outils de l'amélioration continue",
       "contenu": "<p>L'<strong>amélioration continue</strong> consiste à progresser par petites étapes régulières, avec la participation de tous. Ses outils courants en atelier sont :</p>\n<ul>\n<li>les <strong>5S</strong> : <strong>débarrasser</strong> (garder l'utile), <strong>ranger</strong> (une place pour chaque chose), <strong>nettoyer</strong> (et inspecter), <strong>standardiser</strong> (règles écrites et visuelles), <strong>maintenir</strong> (faire vivre et auditer) ;</li>\n<li>le <strong>standard de travail</strong> : description de la meilleure façon connue de réaliser une tâche, affichée au poste avec photos ; il sert de base à la formation et à l'amélioration ;</li>\n<li>le <strong>management visuel</strong> : tableaux de suivi (production, TRS, qualité, sécurité), marquages au sol, codes couleur des bacs (rouge pour rebut, jaune pour attente de décision) ;</li>\n<li>les <strong>détrompeurs</strong> (poka-yoke) : dispositifs qui rendent une erreur impossible ou immédiatement visible (raccord de forme différente, capteur de présence d'insert) ;</li>\n<li>les <strong>points courts</strong> d'équipe, devant le tableau, pour traiter les problèmes du jour.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un chantier 5S autour d'une presse commence souvent par l'évacuation de tout ce qui n'a pas servi depuis un mois (outils, pièces anciennes, emballages). L'étape suivante consiste à tracer l'emplacement des conteneurs et des outils de réglage : le temps perdu à chercher diminue immédiatement.</div>"
      },
      {
       "titre": "Animer l'équipe et communiquer",
       "contenu": "<p>Le titulaire du bac pro peut avoir à <strong>expliquer une tâche</strong> à un opérateur, <strong>répartir le travail</strong> entre plusieurs personnes et <strong>sensibiliser</strong> l'équipe à la qualité et à la sécurité. Quelques règles guident ces situations :</p>\n<ul>\n<li>une <strong>consigne</strong> est claire, précise, vérifiable : quoi faire, comment, avec quels critères, que faire en cas de problème ; on vérifie qu'elle a été comprise en faisant reformuler ;</li>\n<li>la <strong>formation au poste</strong> suit une progression : expliquer, montrer, faire faire en accompagnant, laisser faire en vérifiant ;</li>\n<li>la <strong>répartition du travail</strong> tient compte des compétences (souvent suivies dans une matrice de polyvalence), de la charge et des priorités du planning ;</li>\n<li>le <strong>compte rendu</strong> à la hiérarchie est factuel : faits, chiffres, actions réalisées, décisions attendues.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger une consigne de poste. 1) Titre et poste concerné. 2) Objectif de la tâche en une phrase. 3) Étapes numérotées, chacune commençant par un verbe d'action. 4) Critères de réussite (par exemple : « la pièce ne présente aucune bavure au toucher »). 5) Points de sécurité. 6) Réaction en cas d'anomalie (« isoler les pièces, appeler le régleur »). 7) Date, version et validation.</div>\n<p>La communication technique emploie aussi l'<strong>anglais</strong> : notices de presses et de robots, fiches techniques de matières, échanges avec des clients ou des sites étrangers. Le vocabulaire de base (mould, injection unit, clamping force, holding pressure, cooling time, shrinkage, flash, short shot, sink mark) doit être connu.</p>"
      }
     ],
     "points_cles": [
      "L'ordre de fabrication déclenche la production ; le compte rendu alimente planning, coûts et amélioration",
      "TRS = TD × TP × TQ = pièces bonnes × temps de cycle théorique / temps requis",
      "Le temps de cycle de référence est celui de la fiche de réglage validée",
      "Coût de pièce = matière + machine + main-d'œuvre + frais annexes",
      "Les 5S, les standards, le management visuel et les détrompeurs structurent l'amélioration continue",
      "Une consigne est claire, vérifiable et indique la réaction en cas d'anomalie",
      "La formation au poste suit : expliquer, montrer, faire faire, laisser faire en vérifiant",
      "Le vocabulaire technique anglais de base est indispensable pour lire notices et fiches"
     ],
     "lexique": [
      {
       "terme": "Ordre de fabrication",
       "def": "Document qui lance la production d'une quantité de pièces à une date et sur un moyen donnés."
      },
      {
       "terme": "MES",
       "def": "Logiciel de suivi de production qui collecte en temps réel les données des machines et des postes."
      },
      {
       "terme": "TRS",
       "def": "Taux de rendement synthétique, produit des taux de disponibilité, de performance et de qualité."
      },
      {
       "terme": "Temps requis",
       "def": "Temps pendant lequel le moyen de production est prévu pour produire."
      },
      {
       "terme": "Micro-arrêt",
       "def": "Arrêt de très courte durée, souvent non enregistré, qui réduit la performance."
      },
      {
       "terme": "Coût de revient",
       "def": "Somme des coûts nécessaires pour produire une pièce."
      },
      {
       "terme": "5S",
       "def": "Méthode d'organisation du poste : débarrasser, ranger, nettoyer, standardiser, maintenir."
      },
      {
       "terme": "Standard de travail",
       "def": "Description écrite de la meilleure méthode connue pour réaliser une tâche."
      },
      {
       "terme": "Détrompeur",
       "def": "Dispositif qui empêche ou signale immédiatement une erreur."
      },
      {
       "terme": "Matrice de polyvalence",
       "def": "Tableau qui indique, pour chaque personne, les postes et tâches qu'elle maîtrise."
      }
     ]
    },
    {
     "id": "bpc-sante-securite-travail",
     "titre": "Santé et sécurité au travail en plasturgie et composites",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les dangers propres aux installations de transformation des plastiques et composites",
      "Évaluer un risque à partir de sa gravité et de sa probabilité et le reporter dans le document unique",
      "Appliquer les principes généraux de prévention en privilégiant la protection collective",
      "Repérer les risques chimiques des résines, catalyseurs et solvants et adopter les protections adaptées",
      "Appliquer les règles de sécurité des presses, robots, broyeurs et lignes d'extrusion"
     ],
     "sections": [
      {
       "titre": "Du danger au risque : la démarche de prévention",
       "contenu": "<p>Un <strong>danger</strong> est une propriété capable de causer un dommage : une pièce en mouvement, une surface à 250 °C, une vapeur toxique. Le <strong>risque</strong> naît de l'exposition d'une personne à ce danger ; il s'évalue en combinant la <strong>gravité</strong> du dommage possible et la <strong>probabilité</strong> (fréquence et durée d'exposition). L'employeur est tenu d'évaluer les risques et de les consigner dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP), mis à jour régulièrement et à chaque changement important.</p>\n<p>Les actions de prévention suivent les <strong>principes généraux de prévention</strong> du Code du travail (article L4121-2), dont les premiers sont : éviter les risques, évaluer ceux qui ne peuvent être évités, combattre les risques à la source, adapter le travail à l'homme, tenir compte de l'évolution de la technique, remplacer ce qui est dangereux par ce qui l'est moins, planifier la prévention, donner la priorité à la <strong>protection collective</strong> sur la <strong>protection individuelle</strong>, et donner les instructions appropriées aux travailleurs.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer et hiérarchiser un risque. 1) Identifier la situation dangereuse : opérateur qui retire une pièce coincée dans le moule. 2) Coter la gravité (de 1 à 4 : ici 4, écrasement grave possible) et la probabilité (de 1 à 4 : ici 2, situation occasionnelle). 3) Criticité = 4 × 2 = 8 sur 16 : risque à traiter en priorité. 4) Mesures dans l'ordre : supprimer la cause (améliorer l'éjection), protection collective (protecteur interverrouillé, intervention presse consignée), consigne et formation, EPI (gants anti-chaleur). 5) Réévaluer après mesures.</div>"
      },
      {
       "titre": "Les risques mécaniques et thermiques des machines",
       "contenu": "<p>Les presses à injecter présentent des zones dangereuses : la <strong>zone du moule</strong> (écrasement entre plateaux, la force de fermeture se compte en centaines de tonnes), la <strong>zone de la genouillère</strong>, la <strong>zone d'injection</strong> (projection de matière chaude par la buse, brûlures au contact du fourreau), la <strong>zone d'éjection</strong> et la zone d'évolution du robot. Leur sécurité est encadrée par la directive Machines et par une norme spécifique aux presses à injecter (NF EN ISO 20430, qui a remplacé l'ancienne EN 201).</p>\n<p>La zone du moule est fermée par un <strong>protecteur mobile interverrouillé</strong> : son ouverture interrompt les mouvements dangereux par plusieurs dispositifs redondants. Le carter de buse protège des projections. Les autres machines ont leurs propres dangers :</p>\n<table>\n<thead><tr><th>Équipement</th><th>Dangers principaux</th><th>Mesures typiques</th></tr></thead>\n<tbody>\n<tr><td>Broyeur</td><td>Coupure, happement par les couteaux, bruit</td><td>Trémie de forme interdisant l'accès aux couteaux, interverrouillage du capot, arrêt complet du rotor avant ouverture</td></tr>\n<tr><td>Ligne d'extrusion</td><td>Entraînement par le tireur, coupure à la scie, brûlures en tête</td><td>Carters, arrêts d'urgence à câble, gants anti-chaleur au démarrage</td></tr>\n<tr><td>Thermoformeuse</td><td>Écrasement, brûlure par les panneaux chauffants</td><td>Protecteurs, commande bimanuelle ou barrières immatérielles</td></tr>\n<tr><td>Robot</td><td>Choc, écrasement</td><td>Enceinte grillagée interverrouillée, vitesse réduite en réglage</td></tr>\n<tr><td>Manutention de moules</td><td>Chute de charge</td><td>Pont roulant et élingues vérifiés, formation à l'élingage</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> neutraliser (shunter) un dispositif de sécurité pour « gagner du temps » est une faute grave, à l'origine de nombreux accidents d'écrasement en plasturgie. Un protecteur défaillant impose l'arrêt de la machine et l'appel de la maintenance.</div>"
      },
      {
       "titre": "Les risques chimiques des résines et des produits",
       "contenu": "<p>Le risque chimique est majeur dans les ateliers composites. Les principales substances sont :</p>\n<ul>\n<li>le <strong>styrène</strong>, solvant réactif des résines polyester et vinylester : irritant, nocif par inhalation, toxique pour l'audition associé au bruit, suspecté d'effets sur la reproduction ; il fait l'objet de <strong>valeurs limites d'exposition professionnelle</strong> (VLEP) réglementaires ;</li>\n<li>les <strong>peroxydes organiques</strong> (catalyseurs) : corrosifs pour les yeux et la peau, comburants, instables à la chaleur ;</li>\n<li>les <strong>résines époxydes et leurs durcisseurs</strong> (amines) : sensibilisants cutanés, provoquant des eczémas souvent définitifs ;</li>\n<li>les <strong>isocyanates</strong> des polyuréthanes : sensibilisants respiratoires (asthme) ;</li>\n<li>l'<strong>acétone</strong> et les solvants de nettoyage : très inflammables ;</li>\n<li>les <strong>poussières</strong> de découpe et de ponçage, et les <strong>fumées de dégradation</strong> en thermoplastique (PVC surchauffé : acide chlorhydrique ; POM : formaldéhyde).</li>\n</ul>\n<p>Les dangers sont signalés par l'<strong>étiquette</strong> du produit et détaillés dans sa <strong>fiche de données de sécurité</strong> (FDS), selon le règlement européen CLP : pictogrammes (losange rouge à fond blanc), mention d'avertissement (« Danger » ou « Attention »), mentions de danger (codes H) et conseils de prudence (codes P).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le catalyseur peroxyde et l'accélérateur au cobalt ne doivent jamais être mis en contact directement ; ils se stockent séparément. Les chiffons imbibés de résine catalysée peuvent s'échauffer jusqu'à s'enflammer : on les dépose dans un conteneur métallique fermé.</div>"
      },
      {
       "titre": "Protection collective et protection individuelle",
       "contenu": "<p>Contre le risque chimique, la priorité va aux mesures collectives :</p>\n<ul>\n<li><strong>substitution</strong> : résines à faible émission de styrène, procédés en moule fermé (infusion, RTM) plutôt qu'au contact, produits de nettoyage moins dangereux ;</li>\n<li><strong>captage à la source</strong> : cabines de projection ventilées, tables aspirantes de stratification, aspiration sur les outils de ponçage, sorbonnes pour les mélanges ;</li>\n<li><strong>ventilation générale</strong> de l'atelier ;</li>\n<li><strong>organisation</strong> : limitation des quantités au poste, récipients fermés, stockage ventilé et séparé des produits incompatibles, zones à risque d'explosion signalées.</li>\n</ul>\n<p>Les <strong>équipements de protection individuelle</strong> (EPI) complètent ces mesures : <strong>gants</strong> de matière adaptée au produit (nitrile pour de nombreuses résines, à vérifier sur la FDS et changés dès qu'ils sont souillés), <strong>lunettes</strong> ou écran facial, <strong>combinaison</strong> à usage unique ou vêtements couvrants, <strong>appareil de protection respiratoire</strong> à cartouche adaptée (filtre A pour les vapeurs organiques, filtre P pour les particules, souvent combinés) lorsque le captage ne suffit pas. En transformation des thermoplastiques, les EPI usuels sont les chaussures de sécurité, les gants anti-chaleur et anti-coupure, les lunettes, et les protections auditives près des broyeurs.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les salariés exposés aux résines époxydes ou aux isocyanates bénéficient d'un suivi par la médecine du travail. Une démangeaison des mains ou une gêne respiratoire doit être signalée tôt : une sensibilisation installée est le plus souvent définitive et peut imposer un changement de poste.</div>"
      },
      {
       "titre": "Bruit, chaleur et organisation de la sécurité",
       "contenu": "<p>Le <strong>bruit</strong> est un risque fréquent dans les ateliers : broyeurs, compresseurs, soufflage d'air, éjection de pièces sur convoyeurs, ponçage des composites. Le Code du travail fixe des seuils d'action exprimés en exposition quotidienne : à partir de 80 dB(A), l'employeur met des protecteurs auditifs à disposition et informe les salariés ; à partir de 85 dB(A), le port des protecteurs est obligatoire et la zone est signalée ; 87 dB(A), en tenant compte de la protection portée, est une valeur limite à ne jamais dépasser. On réduit d'abord le bruit à la source : broyeurs insonorisés, capotage, silencieux sur les échappements d'air.</p>\n<p>La <strong>chaleur</strong> des presses et des étuves, ajoutée à la saison chaude, impose de prévoir la ventilation, l'accès à l'eau et l'adaptation des horaires. Les surfaces chaudes (fourreaux, buses, canaux chauds, moules régulés à l'huile au-delà de 100 °C) sont signalées et protégées.</p>\n<p>La sécurité est aussi une affaire d'<strong>organisation</strong> : accueil sécurité de chaque nouvel arrivant et de chaque intérimaire, formation au poste, autorisations de conduite des ponts roulants et des chariots, habilitations électriques pour les interventions sur les armoires, vérifications périodiques réglementaires des équipements de levage et des installations électriques, permis de feu pour les travaux par point chaud. Le comité social et économique et le service de santé au travail participent à cette démarche.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> beaucoup d'ateliers organisent une courte « minute sécurité » au début de chaque poste : rappel d'un risque, retour sur un presque-accident, vérification des EPI. Ce rituel entretient la vigilance sans alourdir la production.</div>"
      },
      {
       "titre": "Incendie, explosion, ergonomie et conduite à tenir",
       "contenu": "<p>Les matières plastiques sont combustibles ; les solvants, l'acétone et le styrène sont inflammables ; les poussières fines de résine ou de polymère peuvent former des atmosphères explosives. Les ateliers concernés définissent des <strong>zones ATEX</strong> où les sources d'ignition (étincelles, matériel électrique non adapté, flamme) sont interdites. Le stockage des produits inflammables se fait en armoire ou local dédié, et les extincteurs adaptés sont connus de tous.</p>\n<p>Les risques liés à l'activité physique sont aussi présents : manutention de sacs de 25 kg, de rouleaux de renfort, de conteneurs ; postures penchées au-dessus des moules composites ; gestes répétitifs aux postes de reprise. Les aides à la manutention (chargeurs aspirants, tables élévatrices, potences) et la rotation des tâches réduisent les troubles musculosquelettiques.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en cas d'accident, la conduite à tenir est : protéger (arrêter la machine, supprimer le danger), alerter (secours internes, 15, 18 ou 112), secourir dans la limite de sa formation (sauveteur secouriste du travail). Une projection de produit dans l'œil impose un rinçage immédiat et prolongé à l'eau. Tout accident, même bénin, et tout presque-accident sont déclarés pour en analyser les causes.</div>"
      }
     ],
     "points_cles": [
      "Le risque résulte de l'exposition à un danger ; il s'évalue par gravité et probabilité dans le DUERP",
      "Les principes généraux de prévention privilégient la suppression du risque et la protection collective",
      "La zone moule des presses est protégée par un protecteur mobile interverrouillé qu'on ne neutralise jamais",
      "Broyeurs, robots, lignes d'extrusion et manutention de moules ont leurs propres dangers",
      "Styrène, peroxydes, époxydes, isocyanates et solvants sont les principaux risques chimiques en composites",
      "Étiquette CLP et FDS renseignent les dangers et les protections",
      "Catalyseur et accélérateur se stockent séparément et ne se mélangent jamais directement",
      "Protéger, alerter, secourir ; déclarer les accidents et presque-accidents"
     ],
     "lexique": [
      {
       "terme": "Danger",
       "def": "Propriété intrinsèque d'un équipement, d'un produit ou d'une situation susceptible de causer un dommage."
      },
      {
       "terme": "Risque",
       "def": "Combinaison de la probabilité d'un dommage et de sa gravité, liée à l'exposition au danger."
      },
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels de l'entreprise."
      },
      {
       "terme": "Protecteur interverrouillé",
       "def": "Protecteur mobile dont l'ouverture provoque l'arrêt des mouvements dangereux."
      },
      {
       "terme": "VLEP",
       "def": "Valeur limite d'exposition professionnelle à une substance dans l'air des lieux de travail."
      },
      {
       "terme": "Sensibilisant",
       "def": "Produit pouvant provoquer une allergie qui s'aggrave à chaque nouvelle exposition."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité décrivant les dangers d'un produit et les mesures de protection."
      },
      {
       "terme": "Captage à la source",
       "def": "Aspiration des polluants au plus près de leur point d'émission."
      },
      {
       "terme": "EPI",
       "def": "Équipement de protection individuelle porté par le salarié."
      },
      {
       "terme": "ATEX",
       "def": "Atmosphère explosive : zone où gaz, vapeurs ou poussières peuvent former un mélange explosif."
      }
     ]
    },
    {
     "id": "bpc-developpement-durable-dechets",
     "titre": "Développement durable, déchets et recyclage",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Situer la plasturgie dans les enjeux environnementaux : ressources, énergie, déchets, émissions",
      "Trier et orienter les déchets d'un atelier de plasturgie et de composites",
      "Distinguer les filières de recyclage mécanique, chimique et de valorisation énergétique",
      "Identifier les leviers de réduction des consommations d'énergie et de matière à l'atelier",
      "Connaître les grandes orientations réglementaires sur les plastiques et l'économie circulaire"
     ],
     "sections": [
      {
       "titre": "Les plastiques face aux enjeux environnementaux",
       "contenu": "<p>Les matières plastiques apportent des bénéfices environnementaux réels : elles allègent les véhicules (donc réduisent leur consommation), isolent les bâtiments, protègent et conservent les aliments. Mais elles posent aussi des problèmes : elles sont majoritairement issues de ressources fossiles, leur fabrication consomme de l'énergie, et leurs déchets, mal collectés, persistent longtemps dans l'environnement et se fragmentent en <strong>microplastiques</strong>.</p>\n<p>Le <strong>développement durable</strong> cherche à concilier efficacité économique, équité sociale et préservation de l'environnement. Pour la plasturgie, il se traduit par l'<strong>économie circulaire</strong> : concevoir des produits durables et recyclables, réduire les consommations, réutiliser, recycler, et n'utiliser la valorisation énergétique et l'élimination qu'en dernier recours. Cette hiérarchie des modes de traitement des déchets est inscrite dans le Code de l'environnement : prévention, préparation en vue du réemploi, recyclage, autres valorisations (dont énergétique), élimination.</p>\n<p>L'outil d'évaluation de référence est l'<strong>analyse du cycle de vie</strong> (ACV), qui chiffre les impacts d'un produit depuis l'extraction des matières premières jusqu'à sa fin de vie. Elle permet par exemple de comparer une pièce en composite légère et une pièce en acier plus lourde mais plus facile à recycler.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le meilleur déchet est celui qu'on ne produit pas. À l'atelier, réduire les rebuts, les purges et les chutes est la première action environnementale, et c'est aussi une économie.</div>"
      },
      {
       "titre": "Les déchets de l'atelier et leur tri",
       "contenu": "<p>Un atelier de transformation produit plusieurs catégories de déchets, qu'il faut trier à la source :</p>\n<table>\n<thead><tr><th>Déchet</th><th>Catégorie</th><th>Orientation habituelle</th></tr></thead>\n<tbody>\n<tr><td>Carottes, grappes, rebuts thermoplastiques propres et triés</td><td>Non dangereux</td><td>Rebroyage et réintroduction interne, ou vente à un recycleur</td></tr>\n<tr><td>Purges, mélanges de matières, pièces souillées</td><td>Non dangereux</td><td>Recycleur spécialisé ou valorisation énergétique</td></tr>\n<tr><td>Chutes de renforts secs (verre, carbone)</td><td>Non dangereux</td><td>Filières spécifiques en développement, sinon élimination</td></tr>\n<tr><td>Chutes de stratifiés durcis, pièces composites rebutées</td><td>Non dangereux une fois polymérisés</td><td>Broyage en charge, co-traitement en cimenterie, valorisation énergétique</td></tr>\n<tr><td>Résines non polymérisées, catalyseurs, solvants usés, emballages souillés</td><td>Dangereux</td><td>Collecte par un prestataire agréé avec bordereau de suivi</td></tr>\n<tr><td>Huiles hydrauliques usagées, filtres</td><td>Dangereux</td><td>Collecte par un prestataire agréé</td></tr>\n<tr><td>Emballages carton, palettes, films</td><td>Non dangereux</td><td>Recyclage</td></tr>\n</tbody>\n</table>\n<p>Les <strong>déchets dangereux</strong> font l'objet d'un <strong>bordereau de suivi des déchets</strong> (BSD), aujourd'hui dématérialisé, qui trace le déchet du producteur jusqu'à l'installation de traitement. Le producteur du déchet reste responsable de son élimination correcte.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un reste de résine catalysée jeté dans une poubelle avec des chiffons et du papier peut s'échauffer et provoquer un incendie. On laisse durcir les petits restes en couche mince dans un récipient métallique, à l'écart des matières combustibles, avant élimination selon la consigne.</div>"
      },
      {
       "titre": "Les filières de recyclage et de valorisation",
       "contenu": "<p>Le <strong>recyclage mécanique</strong> est le plus courant pour les thermoplastiques : tri, broyage, lavage, séchage, puis <strong>régénération</strong> par extrusion en granulés. Il suppose des matières bien triées : un mélange de polymères incompatibles donne un matériau aux propriétés médiocres. Le marquage des pièces (symbole entre chevrons) et, pour les emballages, le code d'identification des résines (numéros 1 à 7 dans un triangle de flèches : 1 PET, 2 PE-HD, 3 PVC, 4 PE-BD, 5 PP, 6 PS, 7 autres) facilitent le tri.</p>\n<p>Le <strong>recyclage chimique</strong> décompose le polymère en monomères ou en produits de base (dépolymérisation du PET, pyrolyse de mélanges) pour fabriquer une matière de qualité vierge. Il est en développement industriel.</p>\n<p>Pour les <strong>composites thermodurcissables</strong>, le recyclage est difficile car la résine ne refond pas. Les voies existantes sont le broyage pour obtenir des charges, le <strong>co-traitement en cimenterie</strong> (la résine fournit de l'énergie et le verre se retrouve dans le clinker), la <strong>pyrolyse</strong> ou la <strong>solvolyse</strong> qui récupèrent les fibres, surtout intéressantes pour le carbone. Les composites à matrice thermoplastique, refusibles, offrent de meilleures perspectives.</p>\n<p>La <strong>valorisation énergétique</strong> brûle les déchets non recyclables en récupérant la chaleur. Elle vient après le recyclage dans la hiérarchie.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> intégrer de la matière recyclée dans une pièce demande des essais : fluidité et couleur variables d'un lot à l'autre, présence possible d'impuretés. Le plasturgiste vérifie l'indice de fluidité de chaque lot et adapte parfois son réglage ; certains clients imposent un taux minimal de matière recyclée, d'autres l'interdisent pour des raisons de sécurité ou de contact alimentaire.</div>"
      },
      {
       "titre": "Économiser l'énergie et la matière à l'atelier",
       "contenu": "<p>La transformation des plastiques consomme surtout de l'<strong>électricité</strong> : chauffage des fourreaux, moteurs et pompes, groupes froids, sécheurs, compresseurs. Les leviers d'économie sont nombreux :</p>\n<ul>\n<li>presses électriques ou à pompe asservie, plutôt que pompes à débit constant ;</li>\n<li><strong>calorifugeage</strong> des fourreaux par des jaquettes isolantes ;</li>\n<li>arrêt ou mise en veille des équipements pendant les arrêts ;</li>\n<li>réglage du sécheur à la consommation réelle, sans séchage excessif ;</li>\n<li>recherche des fuites d'air comprimé, souvent importantes et coûteuses ;</li>\n<li>récupération de la chaleur des groupes froids et des compresseurs ;</li>\n<li>réduction des temps de cycle, qui réduit l'énergie consommée par pièce.</li>\n</ul>\n<p>Côté matière, on réduit les rebuts et les purges, on dimensionne au plus juste les grappes ou on passe aux canaux chauds, on allège les pièces par l'<strong>éco-conception</strong> (épaisseurs optimisées, nervures plutôt que masse, mono-matière pour faciliter le recyclage).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer une économie d'énergie. Un fourreau non isolé dissipe environ 3 kW de puissance de chauffe ; une jaquette isolante réduit cette puissance de 30 %. La presse fonctionne 5 500 h par an. 1) Puissance économisée = 3 × 0,30 = 0,9 kW. 2) Énergie économisée = 0,9 × 5 500 = 4 950 kWh par an. 3) À 0,15 euro le kWh (valeur d'exemple), l'économie est d'environ 740 euros par an et par presse, sans compter la baisse de température de l'atelier.</div>"
      },
      {
       "titre": "Matières biosourcées, biodégradables et recyclées",
       "contenu": "<p>Trois notions sont souvent confondues :</p>\n<table>\n<thead><tr><th>Notion</th><th>Définition</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>Biosourcé</td><td>Issu en tout ou partie de ressources renouvelables (végétales)</td><td>PLA (amidon de maïs), PE biosourcé (canne à sucre), PA11 (huile de ricin)</td></tr>\n<tr><td>Biodégradable</td><td>Décomposable par des micro-organismes dans des conditions définies</td><td>PLA en compostage industriel, certains polyesters</td></tr>\n<tr><td>Recyclé</td><td>Issu de déchets régénérés, de production ou de consommation</td><td>PET recyclé de bouteilles, PP recyclé de pare-chocs</td></tr>\n</tbody>\n</table>\n<p>Un plastique biosourcé n'est pas forcément biodégradable : le PE biosourcé a exactement les mêmes propriétés que le PE d'origine fossile et ne se dégrade pas davantage. Inversement, certains plastiques biodégradables sont d'origine fossile. La biodégradabilité dépend des conditions : un PLA se dégrade en compostage industriel (température élevée, humidité contrôlée) mais très lentement dans la nature ou en mer. Les allégations « biodégradable » sur les emballages sont d'ailleurs encadrées en France.</p>\n<p>Pour l'atelier, ces matières se transforment avec les mêmes procédés, mais avec des précautions propres : le PLA est hygroscopique et sensible à la température, les composites à fibres naturelles craignent l'humidité, les matières recyclées varient d'un lot à l'autre.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mélanger du PLA au flux de PET recyclé perturbe fortement le recyclage du PET. Les déchets de production de matières biosourcées ou biodégradables doivent être triés séparément, comme toute autre matière.</div>"
      },
      {
       "titre": "Le cadre réglementaire",
       "contenu": "<p>Plusieurs textes encadrent l'activité, et leur contenu évolue régulièrement :</p>\n<ul>\n<li>le règlement européen <strong>REACH</strong> impose l'enregistrement des substances chimiques et peut restreindre ou soumettre à autorisation certaines d'entre elles (plastifiants, retardateurs de flamme) ;</li>\n<li>la directive européenne sur les <strong>plastiques à usage unique</strong> (directive 2019/904) interdit certains produits (pailles, couverts, cotons-tiges en plastique) et fixe des objectifs de collecte et de contenu recyclé pour les bouteilles ;</li>\n<li>en France, la loi <strong>anti-gaspillage pour une économie circulaire</strong> (AGEC, 2020) programme notamment la fin de la mise sur le marché des emballages en plastique à usage unique d'ici 2040 et renforce les filières de <strong>responsabilité élargie du producteur</strong> (REP) ;</li>\n<li>les installations de transformation peuvent relever de la réglementation des <strong>installations classées pour la protection de l'environnement</strong> (ICPE), selon les quantités transformées et stockées, avec des obligations sur les rejets atmosphériques (composés organiques volatils comme le styrène), le bruit et les déchets.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'économie circulaire n'est pas qu'une affaire de réglementation : clients et donneurs d'ordres demandent de plus en plus de contenu recyclé, de bilans carbone et de pièces recyclables. Le technicien y contribue par le tri, la réduction des rebuts et la maîtrise des consommations.</div>"
      }
     ],
     "points_cles": [
      "La hiérarchie des déchets : prévention, réemploi, recyclage, valorisation énergétique, élimination",
      "L'analyse du cycle de vie compare les impacts d'un produit de la matière première à la fin de vie",
      "Le tri à la source sépare thermoplastiques propres, composites, déchets dangereux et emballages",
      "Les déchets dangereux sont suivis par bordereau jusqu'à leur traitement",
      "Le recyclage mécanique exige un tri par matière ; le recyclage chimique est en développement",
      "Les composites thermodurcissables se valorisent surtout par broyage, cimenterie, pyrolyse ou solvolyse",
      "Isolation des fourreaux, presses électriques, chasse aux fuites d'air et réduction des cycles économisent l'énergie",
      "REACH, directive plastiques à usage unique, loi AGEC et ICPE encadrent l'activité"
     ],
     "lexique": [
      {
       "terme": "Économie circulaire",
       "def": "Modèle qui limite la consommation de ressources en prolongeant l'usage et en recyclant les produits."
      },
      {
       "terme": "Analyse du cycle de vie",
       "def": "Évaluation des impacts environnementaux d'un produit sur toute sa vie."
      },
      {
       "terme": "Microplastiques",
       "def": "Particules de plastique de moins de 5 mm issues de la fragmentation des déchets ou de produits."
      },
      {
       "terme": "Régénération",
       "def": "Transformation de déchets plastiques broyés et lavés en nouveaux granulés."
      },
      {
       "terme": "Recyclage chimique",
       "def": "Décomposition d'un polymère en molécules de base pour refabriquer une matière."
      },
      {
       "terme": "Co-traitement en cimenterie",
       "def": "Valorisation de déchets composites comme combustible et matière première dans les fours à ciment."
      },
      {
       "terme": "Bordereau de suivi des déchets",
       "def": "Document qui trace un déchet dangereux du producteur au site de traitement."
      },
      {
       "terme": "REP",
       "def": "Responsabilité élargie du producteur : obligation de financer la gestion des déchets des produits mis sur le marché."
      },
      {
       "terme": "Éco-conception",
       "def": "Conception d'un produit qui réduit ses impacts environnementaux sur tout son cycle de vie."
      },
      {
       "terme": "ICPE",
       "def": "Installation classée pour la protection de l'environnement, soumise à une réglementation spécifique."
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
     "id": "bpc-doc-dossier-fabrication-fiche-reglage",
     "titre": "Lire un dossier de fabrication et une fiche de réglage",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les documents qui composent un dossier de fabrication et leur rôle",
      "Décoder une fiche de réglage d'injection rubrique par rubrique",
      "Vérifier la cohérence d'une fiche de réglage avec la matière, le moule et la presse",
      "Extraire d'un dossier les données nécessaires à un calcul (cadence, matière, force de fermeture)",
      "Renseigner correctement un document de production"
     ],
     "sections": [
      {
       "titre": "Le dossier de fabrication : composition et usage",
       "contenu": "<p>Le <strong>dossier de fabrication</strong> rassemble tout ce qui est nécessaire pour produire une pièce de manière répétable. À l'épreuve écrite, il est souvent fourni sous la forme d'un <strong>dossier ressources</strong> de plusieurs pages, accompagné d'un dossier réponses à compléter. Il comprend en général :</p>\n<table>\n<thead><tr><th>Document</th><th>Ce qu'on y trouve</th></tr></thead>\n<tbody>\n<tr><td>Ordre de fabrication (OF)</td><td>Référence pièce, quantité, date de début et de fin, presse, moule, matière, numéro d'OF</td></tr>\n<tr><td>Plan de la pièce</td><td>Formes, cotes, tolérances, matière, caractéristiques critiques</td></tr>\n<tr><td>Fiche technique matière, FDS</td><td>Propriétés, conditions de séchage et de mise en œuvre, dangers</td></tr>\n<tr><td>Fiche moule</td><td>Nombre d'empreintes, masse, dimensions, raccordements, mouvements</td></tr>\n<tr><td>Caractéristiques de la presse</td><td>Force de fermeture, capacités, courses, dimensions</td></tr>\n<tr><td>Fiche de réglage</td><td>Paramètres validés et tolérances</td></tr>\n<tr><td>Gamme ou mode opératoire</td><td>Opérations successives, reprises, conditionnement</td></tr>\n<tr><td>Plan de contrôle et fiches d'autocontrôle</td><td>Caractéristiques à contrôler, fréquences, moyens</td></tr>\n<tr><td>Instructions de conditionnement</td><td>Type d'emballage, nombre de pièces, étiquetage</td></tr>\n</tbody>\n</table>\n<p>Ces documents portent un <strong>cartouche</strong> ou un en-tête avec la référence de la pièce, l'<strong>indice de révision</strong>, la date et la validation. Avant toute préparation, on vérifie que tous les documents se rapportent bien à la même pièce et au même indice.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un indice de plan différent entre l'OF et le plan de contrôle signale une modification récente de la pièce. Produire avec un ancien indice peut rendre toute la série non conforme. En cas de doute, on interroge le service méthodes avant de démarrer.</div>"
      },
      {
       "titre": "Structure d'une fiche de réglage d'injection",
       "contenu": "<p>La <strong>fiche de réglage</strong> (ou fiche de paramètres) est propre à un couple moule-presse. Elle se lit par blocs, dans l'ordre logique du procédé :</p>\n<ol>\n<li><strong>En-tête</strong> : référence pièce, numéro de moule, nombre d'empreintes, presse, matière (grade exact), colorant et taux, taux de rebroyé autorisé, indice et date de validation ;</li>\n<li><strong>Préparation matière</strong> : température et durée de séchage, point de rosée, doseur ;</li>\n<li><strong>Températures</strong> : zones du fourreau de la trémie à la buse, canaux chauds par zone, consignes des thermorégulateurs par circuit ;</li>\n<li><strong>Dosage</strong> : course de dosage, vitesse de rotation, contre-pression, décompression ;</li>\n<li><strong>Injection</strong> : profil de vitesse par paliers, pression limite d'injection, point de commutation ;</li>\n<li><strong>Maintien</strong> : pression(s) et temps ;</li>\n<li><strong>Refroidissement et mouvements</strong> : temps de refroidissement, vitesses et positions d'ouverture, de fermeture, d'éjection, sécurité moule ;</li>\n<li><strong>Valeurs de contrôle</strong> : temps de cycle, matelas, temps d'injection, pression maximale atteinte, masse de la grappe complète, avec tolérances ;</li>\n<li><strong>Périphériques</strong> : programme du robot, préhenseur, convoyeur.</li>\n</ol>\n<p>Les unités doivent être lues avec soin : températures en °C, pressions en bar (hydraulique ou spécifique sur la matière, selon la presse), vitesses en mm/s ou cm<sup>3</sup>/s, positions en mm, temps en s.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une fiche de réglage ne se recopie pas aveuglément : elle se vérifie par rapport à la matière (plages du fournisseur), au moule (capacité, raccordements) et à la presse (capacités et unités affichées).</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une fiche de réglage dans un sujet. 1) Lire la question et repérer la donnée cherchée (paramètre, calcul, vérification). 2) Lire l'en-tête et noter pièce, matière, nombre d'empreintes, presse. 3) Contrôler la cohérence des températures avec la fiche technique matière (plage de mise en œuvre, température moule conseillée). 4) Vérifier le séchage (matière hygroscopique ou non, durée et température). 5) Reconstituer le cycle : additionner les temps des phases qui ne se recouvrent pas et comparer au temps de cycle indiqué. 6) Vérifier le dosage (volume injecté, matelas, part de la capacité utilisée). 7) Identifier les grandeurs de surveillance et leurs tolérances. 8) Rédiger la réponse en citant la valeur, son unité et le document source.</div>\n<p>Pour vérifier un temps de cycle, on additionne en général : temps de fermeture et de verrouillage, temps d'injection (remplissage), temps de maintien, temps de refroidissement, temps d'ouverture et d'éjection. Le dosage ne compte pas s'il est plus court que le refroidissement.</p>\n<p>Pour la matière, on calcule la masse injectée par cycle (pièces + grappe) puis la consommation horaire : masse par cycle × nombre de cycles par heure.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans les sujets, la masse indiquée peut être celle d'une pièce seule ou de la grappe complète (toutes les pièces et les canaux). Une erreur à cet endroit fausse tous les calculs suivants. On relit toujours le libellé exact de la donnée.</div>"
      },
      {
       "titre": "Exemple commenté : la fiche de réglage décrite",
       "contenu": "<p>Le document suivant est une fiche de réglage, présentée ici sous forme de tableau.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Valeur</th></tr></thead>\n<tbody>\n<tr><td>Pièce</td><td>Boîtier de connecteur, réf. BX-210, indice C</td></tr>\n<tr><td>Moule</td><td>M-1452, 4 empreintes, seuils sous-marins, canal froid</td></tr>\n<tr><td>Presse</td><td>Presse électrique 110 t (environ 1 100 kN), vis de 35 mm</td></tr>\n<tr><td>Matière</td><td>PA66-GF30 noir, rebroyé autorisé 0 %</td></tr>\n<tr><td>Séchage</td><td>80 °C, 4 h, dessiccateur, point de rosée −40 °C</td></tr>\n<tr><td>Températures fourreau (trémie vers buse)</td><td>Refroidissement trémie 40 °C / 280 / 285 / 290 / 290 °C ; buse 290 °C</td></tr>\n<tr><td>Thermorégulateur</td><td>Partie fixe 80 °C, partie mobile 80 °C (eau sous pression)</td></tr>\n<tr><td>Dosage</td><td>Course 42 mm, vitesse de vis 80 tr/min, contre-pression 60 bar (spécifique)</td></tr>\n<tr><td>Injection</td><td>Vitesse 60 mm/s puis 90 mm/s, commutation à 10 mm</td></tr>\n<tr><td>Maintien</td><td>600 bar, 4,0 s</td></tr>\n<tr><td>Refroidissement</td><td>12 s</td></tr>\n<tr><td>Mouvements</td><td>Fermeture 2,0 s ; ouverture et éjection 2,5 s</td></tr>\n<tr><td>Contrôles</td><td>Temps d'injection 0,55 s ± 0,05 ; matelas 6 mm ± 1 ; cycle 21,0 s ± 0,5 ; masse grappe 38,4 g ± 0,3</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Identification.</strong> Il s'agit de la fiche de réglage de la pièce BX-210 à l'indice C, produite dans le moule M-1452 à 4 empreintes sur une presse électrique de 110 t. La matière est un polyamide 66 renforcé de 30 % de fibres de verre, sans rebroyé autorisé, ce qui est cohérent avec une pièce technique.</p>\n<p><strong>Préparation matière.</strong> Le PA66 est hygroscopique : le séchage en dessiccateur à 80 °C pendant 4 h avec un point de rosée de −40 °C est conforme aux pratiques usuelles pour cette matière. Le refroidissement de la zone trémie à 40 °C évite le collage des granulés.</p>\n<p><strong>Températures.</strong> Le profil 280 à 290 °C est croissant vers la buse et se situe dans la plage usuelle du PA66 (de l'ordre de 270 à 300 °C). La température moule de 80 °C favorise un bon état de surface malgré les fibres et une cristallisation correcte ; l'eau doit être sous pression pour ne pas bouillir si l'on monte au-delà de 90 °C.</p>\n<p><strong>Reconstitution du cycle.</strong> Fermeture 2,0 s + injection 0,55 s + maintien 4,0 s + refroidissement 12 s + ouverture et éjection 2,5 s = 21,05 s, ce qui correspond au temps de cycle de contrôle de 21,0 s ± 0,5. Le dosage se fait pendant les 12 s de refroidissement.</p>\n<p><strong>Production horaire et matière.</strong> 3 600 / 21 ≈ 171 cycles/h, soit 171 × 4 = 684 pièces/h. Consommation : 171 × 38,4 g ≈ 6,57 kg/h. Le sécheur doit donc contenir au moins 6,57 × 4 ≈ 26 kg de matière pour garantir 4 h de séchage.</p>\n<p><strong>Dosage.</strong> Volume de dosage = π × 3,5<sup>2</sup> / 4 × 4,2 ≈ 9,62 × 4,2 ≈ 40,4 cm<sup>3</sup>. Ce volume inclut le matelas de 6 mm (environ 5,8 cm<sup>3</sup>), qui reste devant la vis. La course de dosage vaut 42 / 35 = 1,2 fois le diamètre de vis : elle se situe dans la zone d'utilisation habituellement recommandée (environ 1 à 3 diamètres), ni trop faible (temps de séjour long, dégradation) ni trop forte (fusion moins homogène).</p>\n<p><strong>Surveillance.</strong> Les quatre grandeurs à surveiller sont le temps d'injection, le matelas, le temps de cycle et la masse de la grappe. Un matelas qui passerait sous 5 mm devrait déclencher une recherche (usure du clapet, abrasive avec les fibres de verre).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> à la fin de cette analyse, le technicien note sur la fiche de suivi les valeurs réellement relevées au démarrage. L'écart entre valeurs de la fiche et valeurs relevées est la première information utile en cas de problème ultérieur.</div>"
      }
     ],
     "points_cles": [
      "Le dossier de fabrication réunit OF, plan, fiches matière, moule, presse, réglage, gamme, contrôle et conditionnement",
      "Tous les documents doivent porter la même référence et le même indice",
      "La fiche de réglage se lit par blocs : en-tête, matière, températures, dosage, injection, maintien, refroidissement, contrôles",
      "Les valeurs se vérifient par rapport à la matière, au moule et à la presse",
      "Le temps de cycle se reconstitue par addition des phases qui ne se recouvrent pas",
      "Consommation horaire = masse par cycle × cycles par heure",
      "La capacité du sécheur doit couvrir la consommation pendant la durée de séchage",
      "Une réponse cite la valeur, l'unité et le document source"
     ],
     "lexique": [
      {
       "terme": "Dossier ressources",
       "def": "Ensemble des documents techniques fournis pour réaliser une étude ou une épreuve."
      },
      {
       "terme": "Indice de révision",
       "def": "Lettre ou numéro qui identifie la version d'un document ou d'un plan."
      },
      {
       "terme": "Fiche de réglage",
       "def": "Document qui consigne les paramètres validés d'un couple moule-presse et leurs tolérances."
      },
      {
       "terme": "Fiche moule",
       "def": "Document qui décrit les caractéristiques et les raccordements d'un moule."
      },
      {
       "terme": "Gamme de fabrication",
       "def": "Liste ordonnée des opérations nécessaires à la réalisation d'un produit."
      },
      {
       "terme": "Valeurs de contrôle",
       "def": "Grandeurs mesurées à surveiller avec leurs tolérances pour garantir la stabilité."
      },
      {
       "terme": "Masse de grappe",
       "def": "Masse totale injectée par cycle : toutes les pièces et les canaux."
      },
      {
       "terme": "Cartouche",
       "def": "Zone d'un document qui regroupe ses informations d'identification."
      }
     ]
    },
    {
     "id": "bpc-doc-plans-piece-moule",
     "titre": "Lire un plan de pièce et un plan de moule",
     "niveau": "1re-Tle",
     "duree": 55,
     "objectifs": [
      "Lire le cartouche, les vues et les coupes d'un dessin de définition de pièce plastique",
      "Interpréter les cotes, les tolérances dimensionnelles et géométriques et les indications propres aux pièces moulées",
      "Identifier sur un plan d'ensemble de moule les éléments repérés dans la nomenclature",
      "Décrire le trajet de la matière, la régulation et l'éjection à partir d'un plan de moule",
      "Calculer une cote d'empreinte à partir d'une cote pièce et d'un retrait"
     ],
     "sections": [
      {
       "titre": "Le dessin de définition d'une pièce plastique",
       "contenu": "<p>Le <strong>dessin de définition</strong> décrit complètement la pièce finie : formes, dimensions, tolérances, matière, aspect. Il suit les règles du dessin technique normalisé : projections orthogonales (vue de face, de dessus, de gauche…), <strong>coupes</strong> et <strong>sections</strong> pour montrer l'intérieur, <strong>vues de détail</strong> agrandies pour les petites formes (clips, nervures). Les plans actuels sont souvent accompagnés d'une maquette numérique 3D, qui fait foi pour les formes non cotées.</p>\n<p>Le <strong>cartouche</strong>, en bas à droite, indique : nom et référence de la pièce, <strong>indice</strong>, <strong>échelle</strong>, <strong>matière</strong> (symbole normalisé et parfois grade imposé), masse indicative, auteur, date, tolérances générales applicables, et parfois l'état de surface général. Un tableau des <strong>modifications</strong> retrace les indices successifs.</p>\n<p>On y trouve des <strong>indications propres aux pièces moulées</strong> :</p>\n<ul>\n<li>les <strong>dépouilles</strong> (angle et sens) et les <strong>rayons</strong> non cotés (« rayons non cotés R 0,5 ») ;</li>\n<li>la position autorisée du <strong>point d'injection</strong>, du <strong>plan de joint</strong> et des <strong>marques d'éjecteurs</strong> ;</li>\n<li>les zones d'<strong>aspect</strong> (faces visibles, grainage, brillance) ;</li>\n<li>le <strong>marquage</strong> à mouler : symbole matière entre chevrons, numéro d'empreinte, dateur, logo de recyclage ;</li>\n<li>les <strong>caractéristiques critiques</strong>, repérées par un symbole défini par le client.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la lecture d'un plan commence toujours par le cartouche : référence, indice, échelle, matière et tolérances générales conditionnent l'interprétation de tout le reste.</div>"
      },
      {
       "titre": "Cotes et tolérances",
       "contenu": "<p>Une <strong>cote tolérancée</strong> fixe la dimension nominale et les écarts admis. Par exemple 25 ± 0,1 signifie que la cote réelle doit être comprise entre 24,9 et 25,1 mm ; l'<strong>intervalle de tolérance</strong> vaut 0,2 mm. Les cotes non tolérancées individuellement relèvent des <strong>tolérances générales</strong> indiquées dans le cartouche. Pour les pièces plastiques moulées, il existe une norme spécifique de tolérances, la norme ISO 20457, qui tient compte de la matière et du procédé ; les plans peuvent aussi renvoyer à une norme interne du client.</p>\n<p>Les <strong>tolérances géométriques</strong> limitent les défauts de forme, d'orientation et de position. Elles sont inscrites dans un cadre : symbole, valeur, éventuellement références (surfaces appelées A, B, C). Les plus fréquentes sur les pièces plastiques sont :</p>\n<table>\n<thead><tr><th>Tolérance</th><th>Ce qu'elle limite</th><th>Exemple d'usage</th></tr></thead>\n<tbody>\n<tr><td>Planéité</td><td>Défaut de forme d'une surface plane</td><td>Face d'appui d'un capot, sensible au voilage</td></tr>\n<tr><td>Circularité, cylindricité</td><td>Ovalisation d'un diamètre</td><td>Logement de roulement, embout</td></tr>\n<tr><td>Perpendicularité, parallélisme</td><td>Orientation par rapport à une référence</td><td>Bossage de vissage</td></tr>\n<tr><td>Localisation</td><td>Position d'un élément par rapport aux références</td><td>Entraxe de trous de fixation</td></tr>\n<tr><td>Profil de surface</td><td>Écart d'une surface quelconque par rapport au modèle 3D</td><td>Pièces d'aspect galbées</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pièce plastique peut avoir toutes ses cotes dans les tolérances et rester non conforme à cause d'une planéité dépassée (voilage). Lire un plan, c'est lire aussi les cadres de tolérance géométrique et leurs références, et savoir dans quel montage la pièce doit être mesurée.</div>"
      },
      {
       "titre": "Le plan d'ensemble de moule et sa nomenclature",
       "contenu": "<p>Le <strong>plan d'ensemble</strong> d'un moule le représente monté, généralement en <strong>coupe</strong> passant par la carotte et par une ou deux empreintes, complétée par une vue de la partie mobile côté plan de joint. Chaque pièce y porte un <strong>repère</strong> (numéro dans une bulle) renvoyant à la <strong>nomenclature</strong>, tableau qui donne pour chaque repère : désignation, nombre, matière, traitement, référence du fournisseur pour les éléments standard.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un plan de moule. 1) Repérer le plan de joint et séparer partie fixe et partie mobile. 2) Suivre le trajet de la matière : bague d'injection, carotte, canaux, seuils, empreintes. 3) Repérer les circuits de régulation (perçages, souvent représentés en coupe par des cercles) et leurs raccords. 4) Repérer l'éjection : plaques éjectrices, éjecteurs, rappels, ressorts, accouplement à la presse. 5) Repérer le guidage (colonnes, bagues, centreurs). 6) Identifier les mouvements particuliers (tiroirs, cales montantes). 7) Pour chaque élément utile à la question, relever repère, désignation et matière dans la nomenclature.</div>\n<p>Les hachures distinguent les pièces coupées : chaque pièce a un sens ou un espacement de hachures différent de ses voisines. Les pièces pleines comme les vis, les colonnes ou les éjecteurs ne sont pas hachurées lorsqu'elles sont coupées dans leur longueur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un plan de moule, la pièce plastique elle-même est souvent représentée noircie ou avec une hachure particulière. Ne pas la confondre avec une pièce du moule : c'est elle qui permet de comprendre où se situent empreinte et noyau.</div>"
      },
      {
       "titre": "Du plan pièce aux cotes du moule : le retrait",
       "contenu": "<p>La matière se rétracte en refroidissant : la pièce est plus petite que l'empreinte. Pour obtenir la cote demandée, l'outilleur agrandit l'empreinte selon le <strong>retrait</strong> r de la matière, indiqué par le fournisseur (et parfois différent dans le sens de l'écoulement et perpendiculairement, surtout pour les matières renforcées) :</p>\n<p>cote moule = cote pièce × (1 + r)</p>\n<p>Inversement, une cote mesurée sur la pièce permet d'estimer le retrait réel : r = (cote moule − cote pièce) / cote pièce.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une cote d'empreinte. Cote pièce 120,0 mm en PP, retrait 1,6 %. 1) Cote moule = 120,0 × 1,016 = 121,92 mm. 2) Si l'on injectait la même pièce en ABS (retrait 0,5 %) dans ce moule, la pièce mesurerait 121,92 / 1,005 ≈ 121,31 mm, soit 1,3 mm de trop : c'est pourquoi on ne change pas de matière sans étude.</div>"
      },
      {
       "titre": "Exemple commenté : un plan de capot décrit",
       "contenu": "<p>Document décrit : dessin de définition d'un <strong>capot de boîtier</strong>, format A3, échelle 1:1. Cartouche : référence CP-88, indice B, matière PC/ABS noir, tolérances générales selon ISO 20457, rayons non cotés R 0,5, dépouilles 1° sauf indication. Tableau de modification : indice B, « ajout de deux nervures intérieures, modification du diamètre des bossages ». Trois vues : vue de face (face extérieure, repérée « zone A : aspect grainé »), vue de dessus, coupe A-A passant par deux bossages. Cotes principales : longueur 150 ± 0,2 ; largeur 90 ± 0,15 ; hauteur 25 ± 0,1 ; épaisseur de paroi 2 mm ; bossages de diamètre extérieur 7 mm et intérieur 2,5 + 0,1/0 mm, entraxe 130 ± 0,1. Cadre de tolérance : planéité 0,3 sur la face d'appui repérée A. Symbole de caractéristique critique sur le diamètre intérieur des bossages. Indication : « point d'injection en zone B uniquement (face intérieure), marquage &gt;PC+ABS&lt; et dateur sur face intérieure ».</p>\n<p><strong>Analyse modèle.</strong> Le plan est à l'indice B : il faut vérifier que l'OF, le moule et le plan de contrôle sont au même indice, puisque les bossages ont été modifiés. La matière est un mélange PC/ABS, amorphe, à faible retrait, hygroscopique : un séchage sera nécessaire. La face extérieure est une face d'aspect grainée : aucun éjecteur ni point d'injection ne doit y apparaître, ce que confirme l'imposition du point d'injection en face intérieure. L'épaisseur de paroi de 2 mm et les bossages de diamètre 7 mm créent des surépaisseurs locales : risque de retassures visibles côté aspect, à surveiller au démarrage. La caractéristique critique est le diamètre intérieur des bossages (2,5 à 2,6 mm), qui conditionne la tenue des vis : elle figurera dans le plan de contrôle avec un moyen adapté (tampon lisse « entre / n'entre pas » 2,5 et 2,6) et une fréquence renforcée. La planéité de 0,3 mm sur la face d'appui A impose un contrôle sur marbre avec cales ou au tridimensionnel, après stabilisation. Enfin, la pièce doit mesurer 150 mm : avec un retrait de PC/ABS de l'ordre de 0,5 à 0,7 %, la cote d'empreinte correspondante est d'environ 150,75 à 151,05 mm, information utile pour juger une éventuelle dérive.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les opérateurs disposent rarement du plan complet au poste. Ils travaillent avec une fiche d'autocontrôle qui reprend les caractéristiques extraites du plan, avec photos. Savoir revenir au plan reste indispensable pour trancher un doute.</div>"
      }
     ],
     "points_cles": [
      "Le cartouche donne référence, indice, échelle, matière et tolérances générales",
      "Les plans de pièces moulées précisent dépouilles, rayons, plan de joint, point d'injection, aspect et marquage",
      "Les pièces plastiques relèvent souvent de tolérances générales spécifiques (ISO 20457)",
      "Planéité, localisation et profil sont des tolérances géométriques fréquentes sur les pièces plastiques",
      "Sur un plan de moule, on suit la matière, la régulation, l'éjection et le guidage, repère par repère",
      "La nomenclature associe chaque repère à sa désignation, sa quantité et sa matière",
      "Cote moule = cote pièce × (1 + retrait)",
      "Une caractéristique critique du plan se retrouve dans le plan de contrôle avec un moyen et une fréquence adaptés"
     ],
     "lexique": [
      {
       "terme": "Dessin de définition",
       "def": "Plan qui décrit complètement une pièce finie et ses exigences."
      },
      {
       "terme": "Coupe",
       "def": "Représentation d'un objet après section imaginaire par un plan, pour en montrer l'intérieur."
      },
      {
       "terme": "Intervalle de tolérance",
       "def": "Écart entre la cote maximale et la cote minimale admises."
      },
      {
       "terme": "Tolérance géométrique",
       "def": "Limite imposée à un défaut de forme, d'orientation ou de position."
      },
      {
       "terme": "Référence",
       "def": "Surface ou axe à partir duquel une tolérance géométrique est mesurée."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste des éléments d'un ensemble avec repère, désignation, nombre et matière."
      },
      {
       "terme": "Repère",
       "def": "Numéro qui identifie une pièce sur un plan d'ensemble."
      },
      {
       "terme": "Bossage",
       "def": "Relief cylindrique d'une pièce plastique destiné à recevoir une vis ou un insert."
      },
      {
       "terme": "Retrait",
       "def": "Diminution relative des dimensions entre empreinte et pièce refroidie."
      }
     ]
    },
    {
     "id": "bpc-doc-fiche-technique-fds",
     "titre": "Exploiter une fiche technique matière et une fiche de données de sécurité",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Repérer la structure d'une fiche technique matière et y retrouver les données de mise en œuvre",
      "Comparer deux grades à partir de leurs valeurs normalisées",
      "Lire les 16 rubriques d'une fiche de données de sécurité et l'étiquette CLP",
      "En déduire les mesures de prévention et les EPI pour un poste",
      "Rédiger une synthèse argumentée à partir de ces documents"
     ],
     "sections": [
      {
       "titre": "La fiche technique matière : structure",
       "contenu": "<p>La <strong>fiche technique</strong> (data sheet) d'un grade est établie par le producteur ou le compoundeur. Elle est souvent en anglais. Sa structure type est :</p>\n<ul>\n<li><strong>en-tête</strong> : nom commercial du grade, symbole normalisé (par exemple PP-T20), description courte (« grade injection, chargé talc, stabilisé UV ») ;</li>\n<li><strong>propriétés physiques</strong> : masse volumique, indice de fluidité avec ses conditions, absorption d'eau, retrait de moulage (parallèle et perpendiculaire à l'écoulement) ;</li>\n<li><strong>propriétés mécaniques</strong> : module de traction, contrainte au seuil ou à la rupture, allongement, module de flexion, choc Charpy ou Izod entaillé à 23 °C et parfois à −30 °C, dureté ;</li>\n<li><strong>propriétés thermiques</strong> : HDT sous 0,45 ou 1,8 MPa, Vicat, Tf ou Tg, classement au feu ;</li>\n<li><strong>conditions de mise en œuvre</strong> : séchage, températures matière et moule, parfois vitesse d'injection et pression de maintien conseillées ;</li>\n<li><strong>mentions</strong> : conformités (contact alimentaire, normes), avertissement sur le caractère indicatif des valeurs.</li>\n</ul>\n<p>Chaque valeur est accompagnée de son <strong>unité</strong> et de la <strong>norme d'essai</strong> (ISO 527, ISO 179, ISO 1133…). Les colonnes « dry » et « cond. » distinguent l'état sec et conditionné pour les matières hygroscopiques.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur une fiche technique, on cherche d'abord la fluidité, le séchage, les températures de mise en œuvre et le retrait, qui servent au réglage ; puis le module, le choc et la HDT, qui servent à vérifier l'adéquation à l'usage.</div>"
      },
      {
       "titre": "Méthode de lecture et de comparaison de grades",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer deux grades. 1) Vérifier que les valeurs comparées sont mesurées selon la même norme, dans les mêmes conditions (température, état sec ou conditionné, charge pour le MFR). 2) Relever pour chaque critère du cahier des charges la valeur des deux grades dans un tableau. 3) Indiquer pour chaque critère le grade le plus favorable. 4) Repérer les conséquences sur la fabrication : fluidité (remplissage), retrait (compatibilité avec le moule), séchage (préparation). 5) Conclure par un choix argumenté qui distingue exigences impératives et critères de préférence.</div>\n<p>Vocabulaire anglais fréquent : <em>density</em> (masse volumique), <em>melt flow rate</em> (indice de fluidité), <em>tensile modulus</em> (module de traction), <em>stress at yield</em> (contrainte au seuil), <em>strain at break</em> (allongement à la rupture), <em>notched impact strength</em> (résilience entaillée), <em>heat deflection temperature</em> (HDT), <em>mould shrinkage</em> (retrait), <em>drying</em> (séchage), <em>melt temperature</em> (température matière), <em>mould temperature</em> (température moule).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une virgule anglaise est un séparateur de milliers : « 1,500 MPa » sur une fiche anglaise signifie mille cinq cents mégapascals, pas un virgule cinq. De même, les températures peuvent être données en °F dans certaines fiches américaines : 446 °F correspondent à 230 °C.</div>"
      },
      {
       "titre": "La fiche de données de sécurité et l'étiquette",
       "contenu": "<p>La <strong>fiche de données de sécurité</strong> (FDS) est obligatoire pour les substances et mélanges dangereux ; elle est fournie par le fournisseur, en français, et comporte <strong>16 rubriques</strong> dans un ordre imposé par le règlement REACH :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th><th>Utilité à l'atelier</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Identification du produit et du fournisseur</td><td>Vérifier qu'il s'agit du bon produit</td></tr>\n<tr><td>2</td><td>Identification des dangers (classification, étiquetage)</td><td>Connaître pictogrammes, mentions H et P</td></tr>\n<tr><td>3</td><td>Composition</td><td>Repérer les substances dangereuses (styrène, peroxyde…)</td></tr>\n<tr><td>4</td><td>Premiers secours</td><td>Conduite à tenir en cas d'accident</td></tr>\n<tr><td>5</td><td>Lutte contre l'incendie</td><td>Moyens d'extinction adaptés</td></tr>\n<tr><td>6</td><td>Dispersion accidentelle</td><td>Que faire en cas de fuite ou de renversement</td></tr>\n<tr><td>7</td><td>Manipulation et stockage</td><td>Conditions de stockage, incompatibilités</td></tr>\n<tr><td>8</td><td>Contrôle de l'exposition, protection individuelle</td><td>VLEP, ventilation, EPI (type de gants, filtre respiratoire)</td></tr>\n<tr><td>9 et 10</td><td>Propriétés physico-chimiques, stabilité et réactivité</td><td>Point éclair, réactions dangereuses</td></tr>\n<tr><td>11 et 12</td><td>Informations toxicologiques et écologiques</td><td>Effets sur la santé et l'environnement</td></tr>\n<tr><td>13</td><td>Élimination</td><td>Filière de déchets</td></tr>\n<tr><td>14 et 15</td><td>Transport, réglementation</td><td>Règles particulières</td></tr>\n<tr><td>16</td><td>Autres informations</td><td>Date de révision, signification des codes</td></tr>\n</tbody>\n</table>\n<p>L'<strong>étiquette</strong> du contenant reprend l'essentiel selon le règlement CLP : nom du produit, pictogrammes de danger, mention d'avertissement (« Danger » pour les dangers les plus graves, sinon « Attention »), mentions de danger codées H (par exemple H226 : liquide et vapeurs inflammables), conseils de prudence codés P, coordonnées du fournisseur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un produit transvasé dans un autre récipient doit être réétiqueté. Un pot non étiqueté contenant un liquide incolore (acétone, catalyseur, durcisseur) est une cause classique d'accident par erreur de produit.</div>"
      },
      {
       "titre": "Exemple commenté : comparaison de deux grades",
       "contenu": "<p>Document décrit : extraits de fiches techniques de deux grades proposés pour une boîte de rangement de jardin (pièce extérieure, choc hivernal possible, moule existant prévu pour un retrait de 1,5 %).</p>\n<table>\n<thead><tr><th>Propriété (norme)</th><th>Grade A : PP copolymère</th><th>Grade B : PP homopolymère</th></tr></thead>\n<tbody>\n<tr><td>MFR 230 °C / 2,16 kg (ISO 1133)</td><td>12 g/10 min</td><td>25 g/10 min</td></tr>\n<tr><td>Module de traction (ISO 527)</td><td>1 300 MPa</td><td>1 600 MPa</td></tr>\n<tr><td>Charpy entaillé 23 °C (ISO 179)</td><td>12 kJ/m<sup>2</sup></td><td>4 kJ/m<sup>2</sup></td></tr>\n<tr><td>Charpy entaillé −20 °C (ISO 179)</td><td>5 kJ/m<sup>2</sup></td><td>non communiqué</td></tr>\n<tr><td>Retrait de moulage</td><td>1,4 à 1,7 %</td><td>1,5 à 1,8 %</td></tr>\n<tr><td>Stabilisation UV</td><td>Oui</td><td>Non</td></tr>\n<tr><td>Séchage</td><td>Non nécessaire</td><td>Non nécessaire</td></tr>\n</tbody>\n</table>\n<p><strong>Analyse modèle.</strong> Les deux grades sont mesurés selon les mêmes normes, ce qui autorise la comparaison. La pièce est extérieure et doit résister au choc en hiver : le grade A est trois fois plus résistant au choc à 23 °C (12 contre 4 kJ/m<sup>2</sup>) et il est le seul à garantir une valeur à −20 °C ; il est en outre stabilisé UV, ce qui est indispensable pour une exposition au soleil. Le grade B est plus rigide (1 600 contre 1 300 MPa) et plus fluide (25 contre 12 g/10 min), avantages pour le remplissage et le cycle, mais ces critères sont secondaires ici. Les retraits des deux grades encadrent la valeur de 1,5 % prévue au moule : les deux sont compatibles avec l'outillage, avec une vérification des cotes au démarrage. Aucun séchage n'est nécessaire, le PP étant non hygroscopique. Conclusion : le grade A répond aux exigences impératives (choc à froid, tenue UV) ; le grade B devrait être écarté ou complété d'un mélange-maître anti-UV et ne garantirait pas la tenue au choc hivernal.</p>"
      },
      {
       "titre": "Exemple commenté : lecture d'une FDS de résine polyester",
       "contenu": "<p>Document décrit : extrait de FDS d'une résine polyester insaturée préaccélérée pour stratification. Rubrique 2 : pictogrammes flamme, point d'exclamation, danger pour la santé (silhouette) ; mention « Danger » ; H226 (liquide et vapeurs inflammables), H315 (irritation cutanée), H319 (irritation oculaire grave), H332 (nocif par inhalation), H361d (susceptible de nuire au fœtus), H372 (risque avéré d'effets graves pour les organes, organe auditif, à la suite d'expositions répétées par inhalation). Rubrique 3 : styrène, 35 à 45 %. Rubrique 7 : stocker entre 5 et 25 °C, à l'abri de la lumière, à l'écart des peroxydes et des sources d'ignition. Rubrique 8 : VLEP du styrène rappelées, ventilation par captage, gants en caoutchouc nitrile ou butyle selon durée, lunettes, appareil respiratoire à filtre A en cas de ventilation insuffisante.</p>\n<p><strong>Analyse modèle.</strong> Le produit est inflammable (H226) : il impose l'absence de sources d'ignition, un stockage ventilé à l'écart des peroxydes, et des extincteurs adaptés (rubrique 5). Il est dangereux par inhalation et contient 35 à 45 % de styrène, substance soumise à des VLEP : la priorité est la protection collective (moule fermé si possible, captage à la source au poste de stratification, ventilation générale), complétée d'un appareil respiratoire à filtre A si les mesures montrent un dépassement. La mention H361d signale un risque pour la grossesse : le poste doit être signalé à la médecine du travail et les salariées informées. Le risque pour l'audition associé au bruit justifie de réduire aussi le bruit au poste. Les EPI à prévoir sont des gants nitrile ou butyle adaptés à la durée de contact, des lunettes, des vêtements couvrants. En cas de projection dans l'œil, la rubrique 4 indique un rinçage abondant à l'eau.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les FDS sont tenues à disposition des salariés au poste ou sous forme numérique, et une notice de poste simplifiée en reprend l'essentiel. La date de révision de la FDS doit être récente : un fournisseur qui modifie sa formulation diffuse une nouvelle version.</div>"
      }
     ],
     "points_cles": [
      "La fiche technique donne propriétés et conditions de mise en œuvre d'un grade, avec unités et normes",
      "On ne compare que des valeurs mesurées selon la même norme et dans les mêmes conditions",
      "Fluidité, séchage, températures et retrait servent au réglage ; module, choc et HDT à l'usage",
      "Attention aux conventions anglaises : virgule des milliers, degrés Fahrenheit",
      "La FDS comporte 16 rubriques dans un ordre imposé ; les rubriques 2, 7 et 8 servent directement au poste",
      "L'étiquette CLP porte pictogrammes, mention d'avertissement, codes H et P",
      "Tout produit transvasé doit être réétiqueté",
      "Une analyse conclut en distinguant exigences impératives et critères de préférence"
     ],
     "lexique": [
      {
       "terme": "Fiche technique",
       "def": "Document du fournisseur donnant les propriétés et conditions de mise en œuvre d'un grade."
      },
      {
       "terme": "Grade",
       "def": "Version commerciale précise d'une matière."
      },
      {
       "terme": "Retrait parallèle",
       "def": "Retrait mesuré dans le sens de l'écoulement de la matière."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité en 16 rubriques, obligatoire pour les produits dangereux."
      },
      {
       "terme": "Mention de danger",
       "def": "Phrase codée H décrivant la nature d'un danger."
      },
      {
       "terme": "Conseil de prudence",
       "def": "Phrase codée P décrivant une mesure pour limiter le risque."
      },
      {
       "terme": "Mention d'avertissement",
       "def": "Mot « Danger » ou « Attention » indiquant le niveau de gravité."
      },
      {
       "terme": "Pictogramme de danger",
       "def": "Symbole noir dans un losange à bordure rouge signalant une catégorie de danger."
      },
      {
       "terme": "Point éclair",
       "def": "Température minimale à laquelle les vapeurs d'un liquide s'enflamment au contact d'une flamme."
      }
     ]
    },
    {
     "id": "bpc-doc-plan-drapage-mode-operatoire",
     "titre": "Lire un plan de drapage et un mode opératoire composite",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Décoder un plan de drapage : plis, renforts, orientations, zones et ordre de pose",
      "Calculer à partir d'un plan de drapage les masses de renfort et de résine à préparer",
      "Lire un mode opératoire de moulage composite et repérer ses points critiques",
      "Vérifier la cohérence entre plan de drapage, fiche technique de résine et conditions d'atelier",
      "Renseigner une fiche suiveuse de pièce composite"
     ],
     "sections": [
      {
       "titre": "Le plan de drapage : structure et vocabulaire",
       "contenu": "<p>Le <strong>plan de drapage</strong> définit la constitution du stratifié. Il se présente en deux parties : un <strong>dessin</strong> de la pièce (souvent vu à plat ou en vue développée) qui délimite les <strong>zones</strong> de renfort, et un <strong>tableau d'empilement</strong> qui liste les plis dans leur ordre de pose, du moule vers l'extérieur.</p>\n<p>Pour chaque pli, le tableau précise :</p>\n<ul>\n<li>le <strong>numéro</strong> du pli (ordre de pose) ;</li>\n<li>la <strong>référence du renfort</strong> : nature (verre, carbone), forme (mat, tissu, UD, multiaxial) et masse surfacique en g/m<sup>2</sup> ;</li>\n<li>l'<strong>orientation</strong> en degrés par rapport à un repère d'orientation (flèche 0° dessinée sur le plan et souvent matérialisée sur le moule) ;</li>\n<li>la <strong>zone</strong> concernée (pièce entière ou renfort local) et les <strong>recouvrements</strong> entre lés ;</li>\n<li>éventuellement l'<strong>âme</strong> (mousse, nid d'abeilles) avec son épaisseur et sa position dans l'empilement.</li>\n</ul>\n<p>Les <strong>renforts locaux</strong> (plis supplémentaires autour d'un trou de fixation, d'un angle, d'une zone d'appui) sont représentés par des contours hachurés sur le dessin. Les <strong>chutes de plis</strong> (terminaison progressive des renforts) sont échelonnées pour éviter une marche brutale d'épaisseur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un plan de drapage se lit comme une recette ordonnée : quoi poser (renfort), où (zone), dans quel sens (orientation), dans quel ordre (numéro), avec quel recouvrement.</div>"
      },
      {
       "titre": "Méthode de lecture et de calcul",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un plan de drapage. 1) Repérer le repère d'orientation 0° et le sens de pose (face moule). 2) Lire le tableau d'empilement pli par pli et vérifier la symétrie éventuelle par rapport au plan moyen. 3) Associer chaque pli à sa zone sur le dessin ; calculer l'aire de chaque zone (en ajoutant les recouvrements si demandé). 4) Calculer la masse de renfort pli par pli : aire × masse surfacique. 5) Additionner pour obtenir la masse totale de renfort. 6) Déduire la masse de résine à partir du taux massique de renfort visé : masse de résine = masse de renfort × (1 − T<sub>m</sub>) / T<sub>m</sub>. 7) Calculer catalyseur ou durcisseur selon le dosage de la fiche technique. 8) Estimer l'épaisseur du stratifié à partir de l'épaisseur par pli indiquée par le fournisseur.</div>\n<p>L'<strong>épaisseur</strong> d'un pli dépend du renfort et du taux de fibres. Les fournisseurs donnent des valeurs indicatives : de l'ordre de 0,7 à 0,8 mm par couche de mat 300 g/m<sup>2</sup> moulé au contact, environ 0,25 à 0,3 mm pour un tissu de verre de 300 g/m<sup>2</sup> en infusion. L'épaisseur totale est la somme des épaisseurs des plis présents dans la zone considérée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les orientations se lisent par rapport au repère 0° du plan, pas par rapport au bord du moule ni au bord du rouleau de tissu. Pour un tissu équilibré, 0° et 90° sont équivalents, mais ±45° change tout ; pour un UD, la moindre erreur d'angle réduit fortement la rigidité dans la direction prévue.</div>"
      },
      {
       "titre": "Le mode opératoire de moulage",
       "contenu": "<p>Le <strong>mode opératoire</strong> (ou instruction de travail) décrit l'enchaînement des opérations. Pour une pièce composite, il comprend en général :</p>\n<ol>\n<li>les <strong>conditions d'atelier</strong> : plage de température (souvent de l'ordre de 18 à 25 °C) et d'hygrométrie, et la consigne à appliquer en dehors de ces plages ;</li>\n<li>la <strong>préparation du moule</strong> : nettoyage, agent de démoulage (nombre de couches, temps de séchage) ;</li>\n<li>le <strong>gelcoat</strong> : référence, quantité, épaisseur humide à obtenir, moyen de contrôle ;</li>\n<li>la <strong>préparation des renforts</strong> : découpe selon gabarits numérotés ;</li>\n<li>la <strong>préparation de la résine</strong> : référence, dosage du catalyseur ou rapport de mélange, temps de gel attendu, taille maximale de gâchée ;</li>\n<li>l'<strong>imprégnation et le drapage</strong> pli par pli, avec les points de contrôle ;</li>\n<li>le <strong>durcissement</strong> : temps minimal avant démoulage, post-cuisson éventuelle ;</li>\n<li>le <strong>démoulage et la finition</strong> : détourage, perçages, ponçage ;</li>\n<li>les <strong>contrôles</strong> et l'<strong>enregistrement</strong> sur la fiche suiveuse.</li>\n</ol>\n<p>Chaque étape mentionne les <strong>EPI</strong> et les points de sécurité. Le mode opératoire est accompagné d'une <strong>fiche suiveuse</strong> qui suit la pièce et sur laquelle l'opérateur note les lots utilisés, les heures, les températures, les quantités pesées et signe chaque étape.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fiches suiveuses sont archivées avec la pièce, parfois pendant toute la durée de vie du produit (aéronautique, ferroviaire). En cas de défaut découvert chez le client, elles permettent de retrouver le lot de résine, l'opérateur et les conditions du jour.</div>"
      },
      {
       "titre": "Exemple commenté : le dossier décrit",
       "contenu": "<p>Document décrit : dossier d'un <strong>panneau de capotage</strong> plan, de 1,20 m × 0,80 m, moulé au contact en verre-polyester avec gelcoat blanc.</p>\n<p>Dessin : rectangle de 1 200 × 800 mm avec flèche 0° parallèle à la grande longueur. Deux zones de renfort local carrées de 150 × 150 mm hachurées dans deux angles opposés, repérées R1 et R2 (fixations). Note : « recouvrement entre lés : 50 mm ; sens de pose : face gelcoat vers moule ».</p>\n<table>\n<thead><tr><th>Pli</th><th>Renfort</th><th>Orientation</th><th>Zone</th></tr></thead>\n<tbody>\n<tr><td>0</td><td>Gelcoat blanc, 500 g/m<sup>2</sup></td><td>sans objet</td><td>Totale</td></tr>\n<tr><td>1</td><td>Mat verre 300 g/m<sup>2</sup></td><td>sans objet</td><td>Totale</td></tr>\n<tr><td>2</td><td>Tissu verre taffetas 500 g/m<sup>2</sup></td><td>0°/90°</td><td>Totale</td></tr>\n<tr><td>3</td><td>Mat verre 450 g/m<sup>2</sup></td><td>sans objet</td><td>Totale</td></tr>\n<tr><td>4</td><td>Mat verre 450 g/m<sup>2</sup></td><td>sans objet</td><td>R1 et R2</td></tr>\n</tbody>\n</table>\n<p>Extrait du mode opératoire : résine polyester préaccélérée, catalyseur PMEC à 1,5 % (1 % si l'atelier dépasse 25 °C), temps de gel à 20 °C : 20 à 25 min ; gâchée maximale 3 kg ; taux massique de verre visé 33 % ; démoulage après 12 h minimum à 20 °C.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Lecture.</strong> Le stratifié comporte un gelcoat, puis trois plis généraux (mat 300, tissu 500 orienté 0°/90° par rapport à la grande longueur, mat 450), et un renfort local en mat 450 dans les deux zones de fixation. Le premier pli au contact du gelcoat est un mat fin : il évite que la trame du tissu ne marque la surface (marquage des fibres).</p>\n<p><strong>Masses de renfort.</strong> Aire du panneau : 1,20 × 0,80 = 0,96 m<sup>2</sup>. Pli 1 : 0,96 × 300 = 288 g. Pli 2 : 0,96 × 500 = 480 g. Pli 3 : 0,96 × 450 = 432 g. Pli 4 : 2 × 0,15 × 0,15 × 450 = 0,045 × 450 = 20,25 g. Total ≈ 1 220 g de verre (hors recouvrements, qui ajouteraient quelques pour cent).</p>\n<p><strong>Résine.</strong> Pour un taux massique de 33 % : masse de résine = 1 220 × (1 − 0,33) / 0,33 ≈ 1 220 × 2,03 ≈ 2 477 g, soit environ 2,5 kg, en une seule gâchée possible puisque la limite est de 3 kg. En pratique, on prépare plutôt deux gâchées successives pour travailler sans risque de gel. Catalyseur à 1,5 % : 2 477 × 0,015 ≈ 37 g au total. Gelcoat : 0,96 × 500 ≈ 480 g.</p>\n<p><strong>Points critiques relevés.</strong> Le dosage du catalyseur dépend de la température de l'atelier : il faut la relever avant de préparer la résine. Le tissu doit être posé avec sa chaîne alignée sur la flèche 0°. Les renforts R1 et R2 doivent être positionnés selon le dessin, faute de quoi les fixations seraient fragiles. Le démoulage ne peut avoir lieu avant 12 h à 20 °C ; il serait plus long dans un atelier plus froid. Les vapeurs de styrène imposent le poste de stratification ventilé et les EPI prévus.</p>\n<p><strong>Fiche suiveuse à renseigner.</strong> Numéro de pièce, lots de gelcoat, résine, catalyseur et renforts, température et hygrométrie de l'atelier, heures de gelcoatage, de début et de fin de stratification, masses pesées, heure de démoulage, observations, signature.</p>"
      }
     ],
     "points_cles": [
      "Le plan de drapage associe un dessin des zones et un tableau d'empilement ordonné du moule vers l'extérieur",
      "Chaque pli est défini par son renfort, sa masse surfacique, son orientation, sa zone et ses recouvrements",
      "Les orientations se lisent par rapport au repère 0° du plan",
      "Masse de renfort = aire × masse surfacique, pli par pli et zone par zone",
      "Masse de résine = masse de renfort × (1 − Tm) / Tm, puis catalyseur selon le dosage",
      "Le mode opératoire fixe conditions d'atelier, préparation, gelcoat, résine, drapage, durcissement, démoulage et contrôles",
      "Le dosage du catalyseur peut dépendre de la température de l'atelier",
      "La fiche suiveuse enregistre lots, heures, températures et masses pour la traçabilité"
     ],
     "lexique": [
      {
       "terme": "Plan de drapage",
       "def": "Document qui définit la constitution d'un stratifié pli par pli."
      },
      {
       "terme": "Tableau d'empilement",
       "def": "Liste ordonnée des plis avec leur renfort, orientation et zone."
      },
      {
       "terme": "Repère d'orientation",
       "def": "Direction de référence 0° à partir de laquelle se mesurent les angles de pose."
      },
      {
       "terme": "Renfort local",
       "def": "Plis supplémentaires limités à une zone sollicitée de la pièce."
      },
      {
       "terme": "Lé",
       "def": "Bande de renfort découpée dans la largeur d'un rouleau."
      },
      {
       "terme": "Recouvrement",
       "def": "Chevauchement de deux lés voisins pour assurer la continuité du renfort."
      },
      {
       "terme": "Masse surfacique",
       "def": "Masse d'un mètre carré de renfort, en g/m²."
      },
      {
       "terme": "Gâchée",
       "def": "Quantité de résine préparée et catalysée en une fois."
      },
      {
       "terme": "Fiche suiveuse",
       "def": "Document qui accompagne une pièce et enregistre les conditions de sa fabrication."
      }
     ]
    },
    {
     "id": "bpc-doc-suivi-qualite-production",
     "titre": "Analyser les documents de suivi de production et de qualité",
     "niveau": "Tle",
     "duree": 55,
     "objectifs": [
      "Lire un plan de contrôle et une fiche d'autocontrôle et en déduire les actions à mener",
      "Interpréter une carte de contrôle renseignée et identifier un signal",
      "Exploiter un relevé de production pour calculer et décomposer un TRS",
      "Analyser un diagramme de Pareto des défauts et proposer des priorités",
      "Renseigner une fiche de non-conformité de façon factuelle"
     ],
     "sections": [
      {
       "titre": "Le plan de contrôle et la fiche d'autocontrôle",
       "contenu": "<p>Le <strong>plan de contrôle</strong> est un tableau dont chaque ligne correspond à une caractéristique. Ses colonnes types sont : numéro de caractéristique (renvoyant au plan de la pièce), désignation, spécification (valeur nominale et tolérance), classe (critique, majeure, mineure), moyen de contrôle, taille d'échantillon, fréquence, responsable (opérateur, régleur, laboratoire), enregistrement (fiche, carte, logiciel) et <strong>plan de réaction</strong> (que faire en cas d'écart).</p>\n<p>La <strong>fiche d'autocontrôle</strong>, au poste, reprend les caractéristiques confiées à l'opérateur avec des cases à remplir à chaque contrôle : heure, valeurs mesurées ou résultat (conforme / non conforme), visa. Elle mentionne aussi la conduite à tenir en cas de défaut.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un plan de contrôle. 1) Repérer les caractéristiques critiques. 2) Pour chacune, noter le moyen, la fréquence et l'enregistrement. 3) Comparer les relevés fournis à la spécification. 4) En cas d'écart, appliquer le plan de réaction indiqué (et non une action improvisée). 5) Vérifier que la fréquence de contrôle a été respectée (trous dans les relevés). 6) Rédiger la conclusion : caractéristiques conformes, écarts constatés, action prévue par le plan.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le plan de réaction impose généralement d'isoler les pièces produites depuis le dernier contrôle conforme. Une réponse qui se contente de « régler la presse » oublie la protection du client.</div>"
      },
      {
       "titre": "Lire une carte de contrôle renseignée",
       "contenu": "<p>Une carte de contrôle remplie comporte : l'en-tête (pièce, caractéristique, unité, taille et fréquence d'échantillon, limites de contrôle et tolérances), le tableau des mesures (heure, n valeurs, moyenne, étendue), les deux graphiques et la zone des <strong>événements</strong> (actions et changements notés au fil du poste).</p>\n<p>Document décrit : carte X̄-R de la masse d'une pièce (spécification 24,70 ± 0,20 g ; limites de contrôle des moyennes 24,642 et 24,758 g ; limite supérieure des étendues 0,211 g), échantillons de 5 pièces toutes les heures. Moyennes relevées de 6 h à 17 h : 24,70 ; 24,69 ; 24,71 ; 24,70 ; 24,68 ; 24,70 ; 24,71 ; 24,72 ; 24,73 ; 24,74 ; 24,75 ; 24,76. Étendues : toutes comprises entre 0,04 et 0,09 g. Événements : « 8 h : nouveau lot de matière » ; « 10 h 30 : température extérieure élevée, groupe froid en alarme brève ».</p>\n<p><strong>Analyse modèle.</strong> Les étendues restent faibles et sous la limite : la dispersion à court terme est stable. Les moyennes montrent à partir de 10 h une <strong>tendance</strong> : 8 points consécutifs croissants (de 24,68 à 24,76 g), soit plus que les 7 points de la règle ; le dernier point, 24,76 g, dépasse la limite supérieure de contrôle (24,758 g). Il y a donc un signal de cause spéciale, alors que la tolérance (24,90 g) n'est pas atteinte : il faut réagir mais il n'y a pas, à ce stade, de pièce non conforme. Le début de la tendance coïncide avec l'alarme du groupe froid : une eau de refroidissement plus chaude ralentit le refroidissement et peut modifier le compactage. Action : vérifier la température réelle de l'eau et du moule, rétablir le refroidissement, noter l'action sur la carte et suivre les prochains échantillons. Le changement de lot de 8 h n'a pas provoqué d'effet visible : les moyennes de 8 h à 10 h restent centrées.</p>"
      },
      {
       "titre": "Exploiter un relevé de production et le TRS",
       "contenu": "<p>Le <strong>relevé de production</strong> (ou rapport de poste) indique pour chaque poste : temps d'ouverture, arrêts avec leurs durées et causes codifiées, nombre de cycles, pièces bonnes, rebuts par type de défaut. Les tableaux de bord présentent ensuite ces données sur la semaine ou le mois.</p>\n<p>Document décrit : rapport de la presse 12 sur trois postes de 7 h 30 de temps requis chacun (total 1 350 min). Moule 2 empreintes, cycle théorique 36 s. Arrêts : changement de série 55 min, attente matière (sécheur non lancé) 40 min, réglage après défaut 25 min, micro-arrêts estimés 20 min. Cycles réalisés : 1 920. Rebuts : 160 pièces (démarrage 70, retassures 50, bavures 25, divers 15).</p>\n<p><strong>Analyse modèle.</strong> Pièces produites : 1 920 × 2 = 3 840 ; pièces bonnes : 3 840 − 160 = 3 680. Temps de fonctionnement : 1 350 − (55 + 40 + 25) = 1 230 min, les micro-arrêts n'étant pas déduits car non enregistrés comme arrêts. TD = 1 230 / 1 350 ≈ 0,911. Temps net : 1 920 × 36 s = 69 120 s = 1 152 min ; TP = 1 152 / 1 230 ≈ 0,937 (les micro-arrêts expliquent une partie de l'écart). TQ = 3 680 / 3 840 ≈ 0,958. TRS ≈ 0,911 × 0,937 × 0,958 ≈ 0,818, soit environ 82 %. Vérification : 3 680 pièces × 18 s = 66 240 s = 1 104 min ; 1 104 / 1 350 ≈ 0,818. La première perte est la disponibilité (120 min), dont 40 min évitables simplement par le lancement du séchage en temps masqué ; la qualité perd 4 %, principalement au démarrage et par retassures.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un TRS n'a d'intérêt que décomposé : c'est la décomposition qui désigne la perte à attaquer en priorité.</div>"
      },
      {
       "titre": "Le diagramme de Pareto des défauts",
       "contenu": "<p>Le <strong>diagramme de Pareto</strong> range les catégories de défauts par ordre décroissant, avec en barres le nombre (ou le coût) de chaque défaut et une courbe des <strong>pourcentages cumulés</strong>. On l'utilise pour concentrer les efforts sur les quelques causes qui représentent la plus grande part du problème (souvent environ 80 % des défauts proviennent d'environ 20 % des causes).</p>\n<p>Document décrit : rebuts du mois sur une famille de pièces, 2 000 pièces au total : retassures 760, incomplets 440, bavures 320, points noirs 240, déformations 140, divers 100.</p>\n<table>\n<thead><tr><th>Défaut</th><th>Nombre</th><th>%</th><th>% cumulé</th></tr></thead>\n<tbody>\n<tr><td>Retassures</td><td>760</td><td>38</td><td>38</td></tr>\n<tr><td>Incomplets</td><td>440</td><td>22</td><td>60</td></tr>\n<tr><td>Bavures</td><td>320</td><td>16</td><td>76</td></tr>\n<tr><td>Points noirs</td><td>240</td><td>12</td><td>88</td></tr>\n<tr><td>Déformations</td><td>140</td><td>7</td><td>95</td></tr>\n<tr><td>Divers</td><td>100</td><td>5</td><td>100</td></tr>\n</tbody>\n</table>\n<p><strong>Analyse modèle.</strong> Trois défauts (retassures, incomplets, bavures) représentent 76 % des rebuts : ce sont les priorités. Retassures et incomplets ont des causes communes possibles (dosage, matelas, commutation, maintien) : un même groupe de travail peut les traiter ensemble en vérifiant d'abord la stabilité du matelas et l'état des clapets. Les bavures orientent vers l'état des plans de joint et la force de fermeture. Les points noirs (12 %) suggèrent une dégradation de matière (temps de séjour, purges, propreté du sécheur) et seront traités ensuite.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un Pareto en nombre et un Pareto en coût peuvent donner des priorités différentes : un défaut rare sur une pièce chère ou détecté chez le client peut coûter plus qu'un défaut fréquent trié au poste.</div>"
      },
      {
       "titre": "La fiche de non-conformité",
       "contenu": "<p>La <strong>fiche de non-conformité</strong> comporte : identification (pièce, indice, OF, lot, date, poste, presse, moule), description du défaut (caractéristique concernée, valeur constatée, spécification), quantité concernée et localisation (pièces isolées, zone rouge), action immédiate, décision (rebut, tri, retouche, dérogation) et responsable, analyse des causes et action corrective, vérification d'efficacité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger la description d'une non-conformité. 1) Écrire ce qui est observé, pas ce que l'on suppose : « 12 pièces sur 50 contrôlées présentent une retassure de 0,2 mm de profondeur sur la face d'aspect, au droit du bossage n° 3, empreinte 2 ». 2) Citer la spécification : « plan CP-88 indice B, zone A, aucune retassure admise ». 3) Indiquer la période : « pièces produites entre 14 h et 15 h 10, conteneurs 18 à 20 ». 4) Indiquer l'action immédiate : « conteneurs 18 à 20 isolés, étiquette rouge, presse arrêtée, régleur prévenu ». 5) Laisser la décision au responsable qualité.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une fiche de non-conformité bien remplie est souvent la première pièce du dossier de réclamation ou du 8D envoyé au client. Une description vague (« pièces moches ») oblige à tout recommencer et fait perdre un temps précieux.</div>"
      }
     ],
     "points_cles": [
      "Le plan de contrôle précise spécification, classe, moyen, fréquence, enregistrement et plan de réaction",
      "En cas d'écart, on applique le plan de réaction et on isole les pièces depuis le dernier contrôle bon",
      "Sur une carte de contrôle, on lit d'abord les étendues (dispersion) puis les moyennes (centrage)",
      "Un signal hors limites de contrôle impose une réaction même sans pièce hors tolérance",
      "Les événements notés sur la carte aident à relier un signal à sa cause",
      "Le TRS se décompose en disponibilité, performance et qualité pour désigner la perte prioritaire",
      "Le Pareto concentre l'effort sur les quelques défauts majoritaires, en nombre ou en coût",
      "Une fiche de non-conformité décrit des faits mesurés, la spécification, la période et l'action immédiate"
     ],
     "lexique": [
      {
       "terme": "Plan de réaction",
       "def": "Conduite à tenir prévue par le plan de contrôle lorsqu'un écart est constaté."
      },
      {
       "terme": "Classe de caractéristique",
       "def": "Niveau d'importance d'une caractéristique : critique, majeure ou mineure."
      },
      {
       "terme": "Fiche d'autocontrôle",
       "def": "Document au poste où l'opérateur enregistre ses contrôles."
      },
      {
       "terme": "Tendance",
       "def": "Suite de points consécutifs croissants ou décroissants sur une carte de contrôle."
      },
      {
       "terme": "Relevé de production",
       "def": "Rapport des temps, arrêts, quantités et rebuts d'un poste ou d'une période."
      },
      {
       "terme": "Temps masqué",
       "def": "Opération réalisée pendant que la machine produit, sans allonger l'arrêt."
      },
      {
       "terme": "Pourcentage cumulé",
       "def": "Somme des pourcentages des catégories classées jusqu'à la catégorie considérée."
      },
      {
       "terme": "8D",
       "def": "Méthode structurée en huit disciplines de résolution de problème et de réponse au client."
      },
      {
       "terme": "Fiche de non-conformité",
       "def": "Document qui enregistre une non-conformité, son traitement et son analyse."
      }
     ]
    }
   ]
  }
 ]
};
