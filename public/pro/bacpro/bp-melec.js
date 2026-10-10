/* Polymates — Bac pro Métiers de l'électricité et de ses environnements connectés (MELEC) — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-melec"] = {
 "id": "bp-melec",
 "nom": "MELEC (électricité et environnements connectés)",
 "icone": "🎓",
 "couleur": "#e6c27e",
 "intro": "Le baccalauréat professionnel Métiers de l'électricité et de ses environnements connectés (MELEC) forme des électriciens capables de préparer, réaliser, mettre en service et maintenir des installations électriques et communicantes dans les réseaux, les infrastructures, les bâtiments résidentiels, tertiaires et industriels, et les systèmes énergétiques autonomes. Il mène aux métiers d'électricien, d'installateur, de tableautier, d'installateur domotique, de technicien fibre et réseaux ou de technicien de maintenance et de dépannage. Ce cours couvre les connaissances associées de la première et de la terminale, en prolongement du cours de seconde de la famille des métiers des transitions numérique et énergétique. Il comprend un cours théorique (énergie et protections, conversion et usages de l'énergie, chaîne d'information et bâtiment connecté, organisation, mise en service et maintenance) et un bloc d'analyse de documents consacré aux documents professionnels exploités lors de la préparation des opérations.",
 "parties": [
  {
   "titre": "Partie 1 — Distribuer l'énergie électrique en sécurité",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmel-reseaux-energie",
     "titre": "Production, transport et distribution de l'énergie électrique",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire l'organisation du système électrique français, de la centrale au point de livraison.",
      "Classer les tensions selon les domaines normalisés et associer chaque niveau de tension à un réseau.",
      "Expliquer pourquoi l'énergie est transportée en haute tension et identifier les pertes en ligne.",
      "Identifier les moyens de production centralisés et décentralisés et leurs contraintes.",
      "Repérer les éléments d'un raccordement au réseau public de distribution."
     ],
     "sections": [
      {
       "titre": "Le système électrique : une chaîne d'énergie à grande échelle",
       "contenu": "\n<p>L'électricien intervient en bout de chaîne, dans les bâtiments et les installations industrielles. Mais l'énergie qu'il distribue a parcouru auparavant un long chemin. Ce chemin forme le <strong>système électrique</strong> : l'ensemble des moyens de production, des lignes et des postes qui acheminent l'énergie jusqu'aux consommateurs, en temps réel, car l'électricité se stocke très difficilement en grande quantité.</p>\n<p>On distingue quatre grandes fonctions :</p>\n<ul>\n<li>la <strong>production</strong> : transformation d'une énergie primaire (nucléaire, hydraulique, vent, soleil, gaz…) en énergie électrique ;</li>\n<li>le <strong>transport</strong> : acheminement sur de longues distances en très haute tension, assuré en France par RTE (Réseau de transport d'électricité) ;</li>\n<li>la <strong>distribution</strong> : acheminement local en moyenne puis basse tension jusqu'aux clients, assuré principalement par Enedis et par des entreprises locales de distribution sur certaines communes ;</li>\n<li>la <strong>consommation</strong> : utilisation de l'énergie par les récepteurs des clients (moteurs, éclairage, chauffage, électronique…).</li>\n</ul>\n<p>Le réseau français est interconnecté avec les réseaux des pays voisins. Cette interconnexion européenne permet d'échanger de l'énergie et de s'entraider en cas d'incident. Elle impose une fréquence commune de <strong>50 Hz</strong>, qui doit rester très stable : un écart de fréquence révèle un déséquilibre entre production et consommation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à chaque instant, la production doit être égale à la consommation augmentée des pertes. C'est le gestionnaire du réseau de transport qui veille à cet équilibre en pilotant les centrales et les échanges aux frontières.</div>\n"
      },
      {
       "titre": "Les domaines de tension",
       "contenu": "\n<p>Les tensions sont classées en <strong>domaines de tension</strong>. Cette classification, reprise par la réglementation du travail et par la norme NF C 18-510 sur les opérations électriques, sert à définir les règles de sécurité et les habilitations. Elle dépend de la valeur de la tension nominale et du type de courant.</p>\n<table>\n<thead><tr><th>Domaine</th><th>Courant alternatif</th><th>Courant continu lisse</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>TBT (très basse tension)</td><td>U ≤ 50 V</td><td>U ≤ 120 V</td><td>Commande en 24 V, éclairage de piscine en TBTS</td></tr>\n<tr><td>BTA (basse tension A)</td><td>50 V &lt; U ≤ 500 V</td><td>120 V &lt; U ≤ 750 V</td><td>Réseau 230/400 V des bâtiments</td></tr>\n<tr><td>BTB (basse tension B)</td><td>500 V &lt; U ≤ 1 000 V</td><td>750 V &lt; U ≤ 1 500 V</td><td>Certaines installations industrielles, champs photovoltaïques</td></tr>\n<tr><td>HTA (haute tension A)</td><td>1 kV &lt; U ≤ 50 kV</td><td>1,5 kV &lt; U ≤ 75 kV</td><td>Réseau de distribution 20 kV</td></tr>\n<tr><td>HTB (haute tension B)</td><td>U &gt; 50 kV</td><td>U &gt; 75 kV</td><td>Réseaux de transport 63, 90, 225 et 400 kV</td></tr>\n</tbody>\n</table>\n<p>Dans le langage courant, on parle encore de « moyenne tension » pour la HTA. Les documents techniques et les titres d'habilitation, eux, utilisent toujours les symboles normalisés BT, HTA, HTB.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne pas confondre la tension entre phases (400 V) et la tension entre phase et neutre (230 V) d'un réseau triphasé. Les deux appartiennent au domaine BTA, mais un contact entre deux phases expose à une tension plus élevée qu'un contact phase-neutre.</div>\n"
      },
      {
       "titre": "Pourquoi transporter en très haute tension",
       "contenu": "\n<p>Une ligne électrique a une <strong>résistance</strong> non nulle. Le courant qui la parcourt l'échauffe : c'est l'<strong>effet Joule</strong>. La puissance perdue dans une ligne de résistance R parcourue par un courant I vaut :</p>\n<p><strong>P<sub>pertes</sub> = R × I²</strong> (en monophasé, pour un conducteur ; en triphasé, on multiplie par 3).</p>\n<p>Pour une puissance transportée donnée, le courant est inversement proportionnel à la tension (P = U × I × cos φ en monophasé). Si l'on multiplie la tension par 10, le courant est divisé par 10 et les pertes par Joule sont divisées par 100. C'est la raison pour laquelle l'énergie est élevée à 225 kV ou 400 kV en sortie de centrale grâce à des <strong>transformateurs élévateurs</strong>, puis abaissée progressivement par des <strong>transformateurs abaisseurs</strong> à l'approche des consommateurs.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer les pertes de deux solutions de transport.<br>On veut transporter 10 MW sur une ligne triphasée de résistance 2 Ω par conducteur, avec cos φ = 1.<br>1. En 20 kV : I = P / (√3 × U) = 10 000 000 / (1,732 × 20 000) ≈ 289 A. Pertes = 3 × R × I² = 3 × 2 × 289² ≈ 501 000 W, soit environ 0,5 MW (5 % de la puissance).<br>2. En 63 kV : I = 10 000 000 / (1,732 × 63 000) ≈ 92 A. Pertes = 3 × 2 × 92² ≈ 50 800 W, soit environ 0,05 MW (0,5 %).<br>3. Conclusion : multiplier la tension par environ 3 divise les pertes par environ 10 (rapport des carrés des tensions).</div>\n<p>À l'échelle nationale, les pertes sur les réseaux de transport et de distribution représentent quelques pourcents de l'énergie consommée. Les réduire est un enjeu d'<strong>efficacité énergétique</strong> : chaque kilowattheure perdu doit être produit quand même.</p>\n<p>La haute tension a aussi un coût : isolateurs de grande taille, distances de sécurité importantes, pylônes hauts. Le choix d'un niveau de tension est donc un compromis entre pertes, coût de construction et contraintes d'environnement (emprise au sol, impact visuel, enfouissement).</p>\n"
      },
      {
       "titre": "Architecture des réseaux : du poste source au client",
       "contenu": "\n<p>Le réseau est organisé en plusieurs niveaux reliés par des <strong>postes</strong> (ensembles d'appareils de coupure, de protection et de transformation).</p>\n<ol>\n<li><strong>Réseau de grand transport et d'interconnexion</strong> (400 kV et 225 kV) : il relie les grands centres de production entre eux et aux pays voisins. Sa structure est <strong>maillée</strong> : chaque nœud est relié à plusieurs autres, ce qui permet de contourner une ligne en défaut.</li>\n<li><strong>Réseau de répartition</strong> (63 kV et 90 kV) : il alimente les grands clients industriels et les postes sources régionaux.</li>\n<li><strong>Poste source</strong> (HTB/HTA) : il abaisse la tension vers 20 kV et alimente les départs du réseau de distribution.</li>\n<li><strong>Réseau HTA</strong> (le plus souvent 20 kV) : en zone urbaine, il est en général souterrain et exploité en <strong>coupure d'artère</strong> (une boucle ouverte en un point, qu'on peut refermer pour réalimenter en cas de défaut) ; en zone rurale, il est souvent aérien et <strong>arborescent</strong> (structure en antenne).</li>\n<li><strong>Poste de distribution publique HTA/BT</strong> : un transformateur abaisse la tension à 230/400 V. Il peut être en cabine maçonnée, préfabriqué au sol ou installé sur poteau en zone rurale.</li>\n<li><strong>Réseau BT</strong> (230/400 V) : il dessert les clients par des câbles souterrains ou des réseaux aériens torsadés, jusqu'au branchement.</li>\n</ol>\n<p>Les clients importants (industries, grands bâtiments tertiaires, hôpitaux) sont souvent raccordés directement en HTA et possèdent leur <strong>poste de livraison</strong> privé : ils exploitent eux-mêmes leur transformateur HTA/BT. Les plus grands sites peuvent être raccordés en HTB.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un hôpital raccordé en HTA, l'électricien de maintenance intervient côté basse tension, en aval du transformateur, sur le tableau général basse tension (TGBT). Les manœuvres dans la cellule HTA sont réservées au personnel titulaire d'une habilitation haute tension adaptée.</div>\n"
      },
      {
       "titre": "Moyens de production centralisés et décentralisés",
       "contenu": "\n<p>Les <strong>moyens de production centralisés</strong> sont de grandes unités de plusieurs centaines de mégawatts, raccordées au réseau de transport :</p>\n<table>\n<thead><tr><th>Type de centrale</th><th>Énergie primaire</th><th>Principe</th><th>Caractéristique d'exploitation</th></tr></thead>\n<tbody>\n<tr><td>Nucléaire</td><td>Fission de l'uranium</td><td>Chaleur → vapeur → turbine → alternateur</td><td>Production de base, très peu émettrice de CO<sub>2</sub></td></tr>\n<tr><td>Thermique à flamme</td><td>Gaz, fioul, charbon, biomasse</td><td>Combustion → vapeur ou gaz chauds → turbine → alternateur</td><td>Démarrage rapide pour les turbines à gaz, émissions de CO<sub>2</sub></td></tr>\n<tr><td>Hydraulique de barrage</td><td>Énergie potentielle de l'eau</td><td>Chute d'eau → turbine → alternateur</td><td>Très modulable, sert aux pointes de consommation</td></tr>\n<tr><td>Station de transfert d'énergie par pompage (STEP)</td><td>Eau pompée entre deux bassins</td><td>Pompage en heures creuses, turbinage en pointe</td><td>Moyen de stockage de grande capacité</td></tr>\n</tbody>\n</table>\n<p>Les <strong>moyens de production décentralisés</strong> (ou locaux) sont de puissance plus faible et raccordés au réseau de distribution, voire directement dans les installations des clients : parcs éoliens, centrales photovoltaïques au sol ou en toiture, petite hydraulique, cogénération, méthanisation. Leur développement transforme le réseau : l'énergie ne circule plus seulement du haut vers le bas, elle peut remonter du réseau BT vers le réseau HTA lorsque la production locale dépasse la consommation locale.</p>\n<p>Les productions éolienne et solaire sont dites <strong>intermittentes</strong> : elles dépendent du vent et de l'ensoleillement et ne sont pas pilotables à la demande. Leur intégration nécessite des prévisions météorologiques, des moyens de flexibilité (stockage, pilotage de la consommation) et des protections adaptées (découplage des installations de production en cas de défaut sur le réseau).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> presque toutes les centrales, sauf le photovoltaïque, produisent l'électricité avec un <strong>alternateur</strong> entraîné en rotation. Le photovoltaïque produit directement du courant continu, converti en alternatif par un <strong>onduleur</strong>.</div>\n"
      },
      {
       "titre": "Continuité de service et qualité de la tension",
       "contenu": "\n<p>Le gestionnaire de réseau s'engage sur la <strong>continuité de service</strong> (nombre et durée des coupures) et sur la <strong>qualité de la tension</strong> livrée. En basse tension, la tension nominale est de 230 V entre phase et neutre et de 400 V entre phases ; elle peut varier dans une plage de plus ou moins 10 % autour de la valeur nominale, conformément à la norme NF EN 50160 qui décrit les caractéristiques de la tension fournie.</p>\n<p>Les principales perturbations sont :</p>\n<ul>\n<li>les <strong>coupures</strong> longues ou brèves (ces dernières sont souvent dues aux réenclenchements automatiques après un défaut fugitif sur une ligne aérienne) ;</li>\n<li>les <strong>creux de tension</strong> : baisse brutale de la tension pendant quelques dizaines de millisecondes, qui peut faire décrocher des contacteurs ou réinitialiser des automates ;</li>\n<li>les <strong>surtensions</strong> d'origine atmosphérique (foudre) ou de manœuvre ;</li>\n<li>les <strong>harmoniques</strong> : déformations de l'onde sinusoïdale produites par les récepteurs électroniques ;</li>\n<li>les <strong>déséquilibres</strong> entre phases, lorsque les charges monophasées sont mal réparties.</li>\n</ul>\n<p>Pour les sites sensibles, l'installateur prévoit des solutions complémentaires : <strong>alimentation sans interruption</strong> (ASI, ou onduleur de secours) pour l'informatique, <strong>groupe électrogène</strong> pour les secours longs, <strong>parafoudres</strong> pour limiter les surtensions, filtres contre les harmoniques.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une panne « fantôme » sur une machine (arrêt inexpliqué, défaut automate effacé au redémarrage) peut provenir d'un creux de tension du réseau et non d'un défaut de l'équipement. Avant de remplacer un matériel, il faut penser à enregistrer la tension d'alimentation.</div>\n"
      },
      {
       "titre": "Le raccordement d'un client au réseau public",
       "contenu": "\n<p>Le <strong>branchement</strong> est la partie du réseau qui relie le réseau public à l'installation du client. Il appartient au réseau public de distribution jusqu'au <strong>point de livraison</strong>, matérialisé en basse tension par les bornes aval de l'appareil général de commande et de protection (AGCP), c'est-à-dire du disjoncteur de branchement.</p>\n<p>Selon la puissance demandée, le raccordement est réalisé :</p>\n<ul>\n<li>en <strong>basse tension jusqu'à 36 kVA</strong> : cas des logements et des petits commerces, en monophasé ou en triphasé, avec un compteur communicant et un disjoncteur de branchement différentiel (souvent 500 mA, de type S, c'est-à-dire sélectif) ;</li>\n<li>en <strong>basse tension au-delà de 36 kVA</strong> et jusqu'à environ 250 kVA : cas des moyennes surfaces, des immeubles de bureaux, des ateliers, avec un comptage spécifique ;</li>\n<li>en <strong>HTA</strong> au-delà : le client dispose d'un poste de livraison avec ses propres transformateurs.</li>\n</ul>\n<p>La démarche de raccordement d'une installation neuve passe par une demande auprès du gestionnaire de réseau, une étude technique et, pour les installations de consommation neuves, la fourniture d'une <strong>attestation de conformité</strong> visée par le Consuel avant la mise sous tension.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour une extension d'atelier, le chargé d'affaires vérifie d'abord si la puissance souscrite et le branchement existants suffisent. Si la nouvelle puissance dépasse la limite du branchement, il faut prévoir une modification du raccordement, ce qui demande souvent plusieurs semaines de délai : c'est une information à recueillir dès la préparation de l'opération.</div>\n"
      }
     ],
     "points_cles": [
      "Le système électrique comprend production, transport, distribution et consommation, en équilibre permanent.",
      "Domaines de tension en alternatif : TBT ≤ 50 V, BTA jusqu'à 500 V, BTB jusqu'à 1 000 V, HTA jusqu'à 50 kV, HTB au-delà.",
      "Les pertes par effet Joule sont proportionnelles au carré du courant : transporter en haute tension les réduit fortement.",
      "Le réseau de transport est maillé ; le réseau HTA urbain est en coupure d'artère, le rural est arborescent.",
      "Les postes sources abaissent la HTB en HTA ; les postes HTA/BT livrent le 230/400 V.",
      "La production décentralisée et intermittente rend les flux d'énergie bidirectionnels sur le réseau de distribution.",
      "La tension BT livrée peut varier de plus ou moins 10 % autour de 230/400 V.",
      "Le point de livraison BT se situe aux bornes aval du disjoncteur de branchement."
     ],
     "lexique": [
      {
       "terme": "Domaine de tension",
       "def": "Classe de tensions (TBT, BTA, BTB, HTA, HTB) servant de référence aux règles de sécurité électrique."
      },
      {
       "terme": "Poste source",
       "def": "Poste qui abaisse la tension du réseau de répartition (HTB) vers la tension de distribution (HTA)."
      },
      {
       "terme": "Coupure d'artère",
       "def": "Exploitation d'une boucle HTA ouverte en un point, permettant de réalimenter une portion de réseau en défaut par l'autre extrémité."
      },
      {
       "terme": "Réseau maillé",
       "def": "Réseau dont chaque nœud est relié à plusieurs autres, offrant plusieurs chemins à l'énergie."
      },
      {
       "terme": "Production décentralisée",
       "def": "Production de faible puissance raccordée au réseau de distribution ou dans une installation privée."
      },
      {
       "terme": "Intermittence",
       "def": "Caractère d'une production qui dépend de conditions naturelles (vent, soleil) et ne peut pas être commandée à la demande."
      },
      {
       "terme": "Creux de tension",
       "def": "Baisse brève et brutale de la tension d'alimentation, souvent due à un défaut sur le réseau."
      },
      {
       "terme": "Point de livraison",
       "def": "Limite entre le réseau public et l'installation privée du client."
      },
      {
       "terme": "AGCP",
       "def": "Appareil général de commande et de protection : disjoncteur de branchement placé en tête d'une installation BT."
      },
      {
       "terme": "STEP",
       "def": "Station de transfert d'énergie par pompage : centrale hydraulique réversible servant au stockage de masse."
      }
     ]
    },
    {
     "id": "bmel-puissances-triphase",
     "titre": "Puissances en alternatif et réseaux triphasés",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Distinguer puissance active, réactive et apparente et leurs unités.",
      "Calculer les puissances d'un récepteur monophasé ou triphasé à partir de U, I et cos φ.",
      "Appliquer le théorème de Boucherot à un ensemble de récepteurs.",
      "Dimensionner une batterie de condensateurs pour relever le facteur de puissance.",
      "Identifier les effets d'un déséquilibre et des harmoniques sur une installation."
     ],
     "sections": [
      {
       "titre": "Le déphasage entre tension et courant",
       "contenu": "\n<p>En courant alternatif sinusoïdal, la tension et le courant varient à la même fréquence mais ne passent pas forcément par zéro au même instant. L'écart entre les deux, exprimé en degrés ou en radians, est le <strong>déphasage</strong>, noté φ (phi).</p>\n<ul>\n<li>Un récepteur <strong>résistif</strong> (radiateur, chauffe-eau, lampe à incandescence) ne crée pas de déphasage : φ = 0.</li>\n<li>Un récepteur <strong>inductif</strong> (moteur, transformateur, ancien ballast ferromagnétique) fait que le courant est en retard sur la tension : φ &gt; 0.</li>\n<li>Un récepteur <strong>capacitif</strong> (condensateur, certaines alimentations électroniques à vide) fait que le courant est en avance : φ &lt; 0.</li>\n</ul>\n<p>Les valeurs utilisées dans les calculs sont les <strong>valeurs efficaces</strong> (U et I) que mesurent les multimètres et les pinces ampèremétriques en position AC. Pour une grandeur sinusoïdale, la valeur maximale vaut la valeur efficace multipliée par √2 : le réseau 230 V atteint environ 325 V en crête.</p>\n<p>La représentation par <strong>vecteurs de Fresnel</strong> permet de visualiser ce déphasage : on trace le vecteur tension horizontal, puis le vecteur courant tourné de l'angle φ. Projeté sur l'axe de la tension, le courant donne sa composante <strong>active</strong> (I × cos φ) ; projeté sur l'axe perpendiculaire, il donne sa composante <strong>réactive</strong> (I × sin φ).</p>\n"
      },
      {
       "titre": "Puissances active, réactive et apparente",
       "contenu": "\n<p>Un récepteur alternatif met en jeu trois puissances :</p>\n<table>\n<thead><tr><th>Puissance</th><th>Symbole et unité</th><th>Monophasé</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Active</td><td>P en watts (W)</td><td>P = U × I × cos φ</td><td>Puissance réellement transformée en travail, chaleur ou lumière ; c'est elle qui est facturée en kWh</td></tr>\n<tr><td>Réactive</td><td>Q en voltampères réactifs (var)</td><td>Q = U × I × sin φ</td><td>Puissance échangée en permanence avec les champs magnétiques (moteurs) ou électriques (condensateurs), sans travail utile</td></tr>\n<tr><td>Apparente</td><td>S en voltampères (VA)</td><td>S = U × I</td><td>Puissance qui dimensionne les câbles, les transformateurs et les protections</td></tr>\n</tbody>\n</table>\n<p>Ces trois puissances forment le <strong>triangle des puissances</strong> : S² = P² + Q², avec P = S × cos φ et Q = S × sin φ, donc tan φ = Q / P.</p>\n<p>Le rapport P / S est le <strong>facteur de puissance</strong>. En régime sinusoïdal pur, il est égal à cos φ. Un facteur de puissance proche de 1 signifie que l'installation absorbe peu de courant « inutile ».</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la puissance active P est celle qu'on paie ; la puissance apparente S est celle qui fait chauffer les câbles. À puissance active égale, plus le cos φ est faible, plus le courant appelé est élevé.</div>\n"
      },
      {
       "titre": "Le réseau triphasé : tensions et couplages",
       "contenu": "\n<p>Un réseau <strong>triphasé</strong> comporte trois phases (L1, L2, L3) dont les tensions ont la même valeur efficace et sont décalées de 120° l'une par rapport à l'autre, et le plus souvent un neutre N. On distingue :</p>\n<ul>\n<li>les <strong>tensions simples</strong> V, entre une phase et le neutre : 230 V ;</li>\n<li>les <strong>tensions composées</strong> U, entre deux phases : 400 V, avec U = V × √3.</li>\n</ul>\n<p>Un récepteur triphasé comporte trois éléments identiques qui peuvent être couplés de deux façons :</p>\n<ul>\n<li>en <strong>étoile</strong> (symbole Y) : chaque élément est soumis à la tension simple V ; le courant dans l'élément est égal au courant de ligne ;</li>\n<li>en <strong>triangle</strong> (symbole Δ) : chaque élément est soumis à la tension composée U ; le courant dans l'élément vaut le courant de ligne divisé par √3.</li>\n</ul>\n<p>Le choix du couplage dépend de la tension que chaque élément peut supporter. C'est la plaque signalétique qui l'indique : un moteur marqué 230/400 V se couple en étoile sur un réseau 400 V entre phases ; un moteur 400/690 V se couple en triangle sur ce même réseau.</p>\n<p>Quel que soit le couplage, les puissances d'un récepteur triphasé équilibré s'écrivent avec la tension composée U et le courant de ligne I :</p>\n<p><strong>P = √3 × U × I × cos φ</strong> ; <strong>Q = √3 × U × I × sin φ</strong> ; <strong>S = √3 × U × I</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'erreur la plus fréquente consiste à utiliser 230 V avec √3, ou 400 V sans √3. Avec √3, on utilise la tension entre phases (400 V) ; avec la tension simple (230 V), on multiplie par 3 : P = 3 × V × I × cos φ, ce qui donne exactement le même résultat.</div>\n"
      },
      {
       "titre": "Le théorème de Boucherot",
       "contenu": "\n<p>Une installation alimente plusieurs récepteurs de natures différentes. Pour connaître la puissance totale appelée, on applique le <strong>théorème de Boucherot</strong> : la puissance active totale est la somme des puissances actives, et la puissance réactive totale est la somme algébrique des puissances réactives (les puissances réactives des condensateurs sont négatives). En revanche, <strong>les puissances apparentes ne s'additionnent pas</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> bilan de puissance d'un atelier alimenté en 400 V triphasé.<br>Récepteurs : un moteur de 11 kW (puissance absorbée) avec cos φ = 0,85 ; un four résistif de 15 kW ; un éclairage LED de 3 kW avec cos φ = 0,95.<br>1. Puissances actives : P = 11 + 15 + 3 = 29 kW.<br>2. Puissances réactives : moteur : tan φ = 0,62, Q = 11 × 0,62 = 6,8 kvar ; four : Q = 0 ; éclairage : tan φ = 0,33, Q = 3 × 0,33 = 1,0 kvar. Total : Q = 7,8 kvar.<br>3. Puissance apparente : S = √(29² + 7,8²) = √(841 + 61) ≈ 30,0 kVA.<br>4. Facteur de puissance global : 29 / 30,0 ≈ 0,97.<br>5. Courant de ligne : I = S / (√3 × U) = 30 000 / (1,732 × 400) ≈ 43 A.</div>\n<p>Ce bilan sert à choisir la section du câble d'alimentation, le calibre de la protection et à vérifier que la puissance souscrite auprès du fournisseur est suffisante. Dans la pratique, on applique en plus des <strong>coefficients d'utilisation</strong> (un moteur ne fonctionne pas toujours à pleine charge) et de <strong>simultanéité</strong> (tous les récepteurs ne fonctionnent pas en même temps).</p>\n"
      },
      {
       "titre": "Relever le facteur de puissance",
       "contenu": "\n<p>Un mauvais facteur de puissance a plusieurs inconvénients : courant plus élevé donc pertes plus fortes, câbles et transformateurs surdimensionnés, et, pour les clients raccordés au-delà de 36 kVA, facturation possible de l'énergie réactive au-delà d'un seuil fixé par le contrat d'acheminement.</p>\n<p>Pour y remédier, on installe une <strong>batterie de condensateurs</strong> qui fournit localement l'énergie réactive consommée par les moteurs : c'est la <strong>compensation de l'énergie réactive</strong>. La puissance réactive à installer se calcule avec :</p>\n<p><strong>Q<sub>C</sub> = P × (tan φ<sub>1</sub> − tan φ<sub>2</sub>)</strong>, où φ<sub>1</sub> est le déphasage avant compensation et φ<sub>2</sub> le déphasage visé.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul d'une batterie de compensation.<br>Une installation absorbe P = 80 kW avec cos φ<sub>1</sub> = 0,75. On vise cos φ<sub>2</sub> = 0,95.<br>1. tan φ<sub>1</sub> : φ<sub>1</sub> = arccos 0,75 ≈ 41,4°, tan φ<sub>1</sub> ≈ 0,88.<br>2. tan φ<sub>2</sub> : φ<sub>2</sub> = arccos 0,95 ≈ 18,2°, tan φ<sub>2</sub> ≈ 0,33.<br>3. Q<sub>C</sub> = 80 × (0,88 − 0,33) = 80 × 0,55 = 44 kvar. On choisit la valeur normalisée immédiatement supérieure dans le catalogue du constructeur.<br>4. Gain sur le courant : avant, S = 80 / 0,75 ≈ 107 kVA ; après, S = 80 / 0,95 ≈ 84 kVA. Le courant appelé baisse d'environ 21 %.</div>\n<p>La compensation peut être <strong>fixe</strong> (un condensateur dédié à un gros moteur, raccordé en aval de son contacteur) ou <strong>automatique</strong> : une batterie à gradins, pilotée par un régulateur varmétrique, enclenche le nombre de gradins nécessaires selon la charge. On l'installe en général au tableau général basse tension.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un condensateur reste chargé après sa mise hors tension. Les batteries comportent des résistances de décharge, mais il faut respecter le temps d'attente indiqué par le constructeur et vérifier l'absence de tension avant toute intervention.</div>\n"
      },
      {
       "titre": "Déséquilibre et harmoniques",
       "contenu": "\n<p>Dans un bâtiment, de nombreux récepteurs sont monophasés (prises, éclairage, petits équipements). S'ils sont mal répartis sur les trois phases, l'installation est <strong>déséquilibrée</strong> : une phase est plus chargée que les autres et un courant circule dans le neutre. On répartit donc les circuits de façon homogène lors de la conception du tableau et on vérifie l'équilibre par des mesures à la pince sur chaque phase.</p>\n<p>Les récepteurs électroniques (alimentations à découpage des ordinateurs, drivers de LED, variateurs de vitesse, chargeurs) absorbent un courant non sinusoïdal. Ce courant déformé se décompose en une somme de courants sinusoïdaux de fréquences multiples de 50 Hz : les <strong>harmoniques</strong> (rang 3 à 150 Hz, rang 5 à 250 Hz, etc.). Le <strong>taux de distorsion harmonique</strong> (THD) mesure l'importance de cette déformation.</p>\n<p>Conséquences : échauffement des câbles et des transformateurs, déclenchements intempestifs, vieillissement des condensateurs de compensation et surtout <strong>surcharge du neutre</strong>, car les harmoniques de rang 3 des trois phases s'additionnent dans le neutre au lieu de s'annuler. Dans les bâtiments de bureaux très équipés, le courant de neutre peut dépasser le courant de phase : la norme d'installation impose alors de dimensionner le neutre en conséquence.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un audit, le technicien utilise un <strong>analyseur de réseau</strong> raccordé sur le départ à étudier pendant plusieurs jours. Il enregistre tensions, courants, puissances, cos φ, THD et courant de neutre, puis exploite les courbes pour proposer une compensation, un rééquilibrage des circuits ou un filtre d'harmoniques.</div>\n<p>Pour distinguer les deux notions, on retient que le <strong>cos φ</strong> mesure le seul déphasage du courant fondamental, alors que le <strong>facteur de puissance</strong> tient compte aussi de la déformation : en présence d'harmoniques, le facteur de puissance est inférieur au cos φ.</p>\n"
      }
     ],
     "points_cles": [
      "P en W, Q en var, S en VA ; S² = P² + Q² et le facteur de puissance vaut P / S.",
      "En triphasé : P = √3 × U × I × cos φ avec U tension entre phases et I courant de ligne.",
      "U = V × √3 : 400 V entre phases pour 230 V entre phase et neutre.",
      "Un élément couplé en étoile reçoit la tension simple, en triangle la tension composée.",
      "Boucherot : on additionne les P et les Q, jamais les S.",
      "Compensation : Qc = P × (tan φ1 − tan φ2), avec une batterie fixe ou automatique.",
      "Un déséquilibre fait circuler du courant dans le neutre ; on répartit les circuits monophasés sur les trois phases.",
      "Les harmoniques de rang 3 s'additionnent dans le neutre et peuvent le surcharger."
     ],
     "lexique": [
      {
       "terme": "Déphasage φ",
       "def": "Décalage angulaire entre la tension et le courant d'un récepteur alternatif."
      },
      {
       "terme": "Puissance réactive",
       "def": "Puissance échangée avec les champs magnétiques ou électriques, exprimée en var, sans travail utile."
      },
      {
       "terme": "Puissance apparente",
       "def": "Produit de la tension et du courant efficaces, en VA, qui dimensionne le matériel."
      },
      {
       "terme": "Facteur de puissance",
       "def": "Rapport de la puissance active à la puissance apparente."
      },
      {
       "terme": "Tension composée",
       "def": "Tension entre deux phases d'un réseau triphasé (400 V en BT)."
      },
      {
       "terme": "Tension simple",
       "def": "Tension entre une phase et le neutre (230 V en BT)."
      },
      {
       "terme": "Théorème de Boucherot",
       "def": "Règle d'addition des puissances actives et réactives d'un ensemble de récepteurs."
      },
      {
       "terme": "Batterie de condensateurs",
       "def": "Ensemble de condensateurs fournissant de l'énergie réactive pour relever le facteur de puissance."
      },
      {
       "terme": "Harmonique",
       "def": "Composante sinusoïdale d'un courant ou d'une tension de fréquence multiple de la fréquence du réseau."
      },
      {
       "terme": "THD",
       "def": "Taux de distorsion harmonique : mesure de la déformation d'un signal par rapport à une sinusoïde."
      }
     ]
    },
    {
     "id": "bmel-schemas-liaison-terre",
     "titre": "Les schémas de liaison à la terre",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décoder les deux lettres d'un schéma de liaison à la terre (TT, TN, IT).",
      "Décrire le parcours d'un courant de défaut dans chaque schéma.",
      "Calculer une tension de contact et vérifier la condition de protection en schéma TT.",
      "Choisir le dispositif de protection adapté à chaque schéma.",
      "Citer les domaines d'emploi privilégiés de chaque schéma."
     ],
     "sections": [
      {
       "titre": "Rôle d'un schéma de liaison à la terre",
       "contenu": "\n<p>Le cours de seconde a présenté le contact indirect : une personne touche une masse métallique mise accidentellement sous tension par un défaut d'isolement. La manière dont l'installation est reliée à la terre détermine ce qui se passe alors. C'est le <strong>schéma de liaison à la terre</strong> (SLT), aussi appelé <strong>régime de neutre</strong>.</p>\n<p>Un SLT est désigné par deux lettres :</p>\n<table>\n<thead><tr><th>Lettre</th><th>Position</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Première lettre : T</td><td>Situation du neutre de la source (transformateur)</td><td>Neutre relié directement à la terre</td></tr>\n<tr><td>Première lettre : I</td><td>Situation du neutre de la source</td><td>Neutre isolé de la terre ou relié par une impédance élevée</td></tr>\n<tr><td>Deuxième lettre : T</td><td>Situation des masses de l'installation</td><td>Masses reliées à une prise de terre locale</td></tr>\n<tr><td>Deuxième lettre : N</td><td>Situation des masses</td><td>Masses reliées au neutre (par le conducteur de protection)</td></tr>\n</tbody>\n</table>\n<p>On obtient ainsi trois familles : <strong>TT</strong>, <strong>TN</strong> (avec ses variantes TN-C, TN-S et TN-C-S) et <strong>IT</strong>. Les trois assurent la sécurité des personnes lorsqu'elles sont correctement mises en œuvre ; elles diffèrent par la valeur du courant de défaut, par la protection utilisée et par la continuité de service.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la protection contre les contacts indirects repose toujours sur deux éléments indissociables : la <strong>mise à la terre des masses</strong> par un conducteur de protection (PE, vert-jaune) et un <strong>dispositif de coupure automatique</strong> adapté au schéma.</div>\n"
      },
      {
       "titre": "Le schéma TT",
       "contenu": "\n<p>Le schéma TT est imposé pour les installations alimentées directement par le réseau public basse tension : logements, petits commerces, petits ateliers. Le neutre du transformateur de distribution est relié à la terre au poste ; les masses de l'installation sont reliées à la <strong>prise de terre</strong> du bâtiment (boucle à fond de fouille, piquets).</p>\n<p>En cas de défaut d'isolement, le courant de défaut I<sub>d</sub> part de la phase, traverse la masse, le conducteur de protection, la prise de terre de l'installation (résistance R<sub>A</sub>), le sol, puis la prise de terre du neutre au poste (résistance R<sub>B</sub>) et revient au transformateur. Les résistances des prises de terre étant de plusieurs ohms, le courant de défaut est faible (quelques ampères à quelques dizaines d'ampères) : il ne fait pas réagir un disjoncteur magnéto-thermique, mais il peut porter les masses à une tension dangereuse.</p>\n<p>La protection est donc assurée par des <strong>dispositifs différentiels à courant résiduel</strong> (DDR). La condition à respecter est :</p>\n<p><strong>R<sub>A</sub> × I<sub>Δn</sub> ≤ U<sub>L</sub></strong>, avec I<sub>Δn</sub> la sensibilité du différentiel et U<sub>L</sub> la tension limite conventionnelle de contact (50 V dans les locaux secs).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la protection en schéma TT.<br>Données : prise de terre mesurée R<sub>A</sub> = 60 Ω ; différentiel de branchement I<sub>Δn</sub> = 500 mA ; U<sub>L</sub> = 50 V.<br>1. Tension de contact maximale en cas de défaut juste en dessous du seuil : R<sub>A</sub> × I<sub>Δn</sub> = 60 × 0,5 = 30 V.<br>2. Comparaison : 30 V ≤ 50 V, la condition est respectée.<br>3. Résistance maximale admissible pour ce différentiel : R<sub>A max</sub> = 50 / 0,5 = 100 Ω. C'est la valeur de référence utilisée pour les logements.<br>4. Avec un différentiel 30 mA en tête d'un circuit, R<sub>A max</sub> = 50 / 0,03 ≈ 1 667 Ω : la condition est beaucoup plus facile à satisfaire, d'où la généralisation des différentiels haute sensibilité.</div>\n<p>Avantages : simplicité, aucun calcul de longueur de câble pour la protection des personnes, détection des défauts dès les faibles courants (ce qui limite aussi les risques d'incendie). Inconvénient : un défaut provoque la coupure immédiate du circuit concerné, et une mauvaise sélectivité entre différentiels peut couper toute l'installation.</p>\n"
      },
      {
       "titre": "Le schéma TN",
       "contenu": "\n<p>En schéma TN, le neutre de la source est relié à la terre et les masses sont reliées au neutre. On le rencontre dans les installations alimentées par un poste HTA/BT privé (industrie, grands bâtiments tertiaires).</p>\n<p>Un défaut d'isolement entre une phase et une masse devient un véritable <strong>court-circuit phase-neutre</strong> : le courant de défaut ne passe plus par le sol, il revient par les conducteurs. Il est donc élevé (plusieurs centaines d'ampères à plusieurs kiloampères) et il est coupé par les dispositifs de protection contre les surintensités : disjoncteurs (déclencheur magnétique) ou fusibles.</p>\n<p>Il existe plusieurs variantes :</p>\n<ul>\n<li><strong>TN-C</strong> : neutre et conducteur de protection sont confondus en un seul conducteur, le <strong>PEN</strong>. Ce conducteur ne doit jamais être coupé, et ce schéma est interdit pour les sections inférieures à 10 mm² en cuivre et pour les canalisations mobiles ;</li>\n<li><strong>TN-S</strong> : neutre N et conducteur de protection PE sont séparés sur toute l'installation ;</li>\n<li><strong>TN-C-S</strong> : TN-C en amont (gros câbles), puis séparation en TN-S en aval. Une fois séparés, N et PE ne doivent plus jamais être réunis.</li>\n</ul>\n<p>La difficulté du TN est de garantir que la protection coupe assez vite. Le courant de défaut dépend de l'<strong>impédance de la boucle de défaut</strong>, donc de la longueur et de la section des câbles. Le concepteur vérifie, à l'aide de tableaux ou de logiciels de calcul, que la <strong>longueur maximale</strong> de chaque canalisation n'est pas dépassée. Si elle l'est, on augmente la section, on choisit un disjoncteur à seuil magnétique plus bas (courbe B) ou on ajoute un différentiel.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en TN-C, un différentiel ne fonctionne pas puisque le courant de défaut revient par le PEN, qui passe dans le tore. De plus, la coupure accidentelle du PEN met toutes les masses en aval à un potentiel dangereux. Un PEN se raccorde d'abord sur la borne de terre, puis on ponte vers la borne neutre.</div>\n"
      },
      {
       "titre": "Le schéma IT",
       "contenu": "\n<p>En schéma IT, le neutre de la source est <strong>isolé</strong> de la terre (ou relié par une impédance élevée) et les masses sont reliées à une prise de terre. Lors d'un premier défaut d'isolement, le courant de défaut ne trouve presque pas de chemin de retour : il est très faible et la tension de contact reste inoffensive. <strong>L'installation peut continuer à fonctionner</strong>.</p>\n<p>Ce premier défaut doit cependant être signalé, recherché et éliminé rapidement, car un <strong>deuxième défaut</strong> sur une autre phase créerait un court-circuit entre phases à travers les masses. C'est pourquoi le schéma IT impose :</p>\n<ul>\n<li>un <strong>contrôleur permanent d'isolement</strong> (CPI), qui mesure en continu l'isolement du réseau par rapport à la terre et déclenche une alarme sonore et visuelle au premier défaut ;</li>\n<li>un <strong>limiteur de surtension</strong> entre le neutre du transformateur et la terre ;</li>\n<li>un personnel d'entretien compétent, capable de localiser le défaut, souvent avec un <strong>système de recherche de défaut</strong> (injection d'un signal basse fréquence détecté par des tores ou une pince) ;</li>\n<li>des protections qui coupent au deuxième défaut, dans les mêmes conditions qu'en TN.</li>\n</ul>\n<p>Le schéma IT est choisi quand une coupure serait dangereuse ou très coûteuse : blocs opératoires des hôpitaux, process industriels continus (chimie, verrerie, sidérurgie), navires, éclairage de sécurité.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans une usine en schéma IT, l'alarme du CPI retentit à 3 h du matin. L'équipe d'astreinte ne coupe pas la production : elle relève la valeur d'isolement affichée, utilise le système de recherche de défaut pour identifier le départ concerné, puis programme l'intervention de réparation à l'arrêt planifié suivant, en surveillant l'isolement d'ici là.</div>\n"
      },
      {
       "titre": "Comparer et choisir un schéma",
       "contenu": "\n<p>Le choix du SLT dépend du mode d'alimentation, de la nature des locaux et des exigences de continuité de service. Le tableau ci-dessous résume les caractéristiques essentielles.</p>\n<table>\n<thead><tr><th>Critère</th><th>TT</th><th>TN</th><th>IT</th></tr></thead>\n<tbody>\n<tr><td>Courant de premier défaut</td><td>Faible à moyen</td><td>Élevé (court-circuit)</td><td>Très faible</td></tr>\n<tr><td>Protection des personnes</td><td>Dispositifs différentiels</td><td>Disjoncteurs ou fusibles (et différentiels en TN-S)</td><td>Signalisation au premier défaut par CPI, coupure au second</td></tr>\n<tr><td>Coupure au premier défaut</td><td>Oui</td><td>Oui</td><td>Non</td></tr>\n<tr><td>Contraintes de conception</td><td>Faibles</td><td>Vérification des longueurs maximales</td><td>Vérification des longueurs, CPI, personnel qualifié</td></tr>\n<tr><td>Risque d'incendie</td><td>Faible</td><td>Plus élevé (courants de défaut forts)</td><td>Faible au premier défaut</td></tr>\n<tr><td>Emplois typiques</td><td>Réseau public BT, logements</td><td>Industrie et tertiaire avec poste privé</td><td>Hôpitaux, process continus</td></tr>\n</tbody>\n</table>\n<p>Une même installation peut combiner plusieurs schémas : par exemple, un bâtiment en TN-S avec un îlot en IT créé par un <strong>transformateur d'isolement</strong> pour les salles d'opération.</p>\n"
      },
      {
       "titre": "Prise de terre et liaisons équipotentielles",
       "contenu": "\n<p>Quel que soit le schéma, la qualité du réseau de terre conditionne la sécurité. Il comprend :</p>\n<ul>\n<li>la <strong>prise de terre</strong> : conducteur en contact avec le sol, de préférence une boucle en fond de fouille posée à la construction, complétée si nécessaire par des piquets ;</li>\n<li>le <strong>conducteur de terre</strong>, qui relie la prise de terre à la <strong>barrette de mesure</strong> (ou borne principale de terre), démontable pour permettre la mesure ;</li>\n<li>le <strong>conducteur principal de protection</strong> et les conducteurs de protection de chaque circuit ;</li>\n<li>la <strong>liaison équipotentielle principale</strong>, qui relie à la borne principale les canalisations métalliques entrant dans le bâtiment (eau, gaz, chauffage) et les éléments conducteurs de la structure ;</li>\n<li>les <strong>liaisons équipotentielles supplémentaires</strong>, par exemple dans les salles d'eau, qui relient entre eux les éléments conducteurs accessibles simultanément.</li>\n</ul>\n<p>La valeur de la prise de terre varie selon la nature du sol (argile humide : faible résistivité ; roche ou sable sec : forte résistivité) et selon la saison. On la mesure à la mise en service puis lors des vérifications périodiques.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'équipotentialité réduit la différence de potentiel entre éléments touchés simultanément ; la mise à la terre et la coupure automatique limitent la durée du défaut. Ces deux mesures se complètent.</div>\n"
      }
     ],
     "points_cles": [
      "Première lettre : liaison du neutre de la source (T relié, I isolé) ; deuxième lettre : liaison des masses (T terre, N neutre).",
      "TT : courant de défaut limité par les prises de terre, protection par différentiel, condition RA × IΔn ≤ UL.",
      "Avec un différentiel 500 mA et UL = 50 V, la prise de terre doit être au plus de 100 Ω.",
      "TN : le défaut devient un court-circuit coupé par disjoncteur ou fusible ; il faut vérifier les longueurs maximales.",
      "En TN-C, le PEN ne doit jamais être coupé et les différentiels sont inopérants.",
      "IT : pas de coupure au premier défaut, surveillance par CPI et recherche rapide du défaut.",
      "L'IT est choisi lorsque la continuité de service est vitale (hôpitaux, process continus).",
      "La liaison équipotentielle principale relie les canalisations métalliques à la borne principale de terre."
     ],
     "lexique": [
      {
       "terme": "SLT",
       "def": "Schéma de liaison à la terre : mode de raccordement du neutre de la source et des masses à la terre."
      },
      {
       "terme": "Masse",
       "def": "Partie conductrice accessible d'un matériel, normalement hors tension, pouvant le devenir en cas de défaut."
      },
      {
       "terme": "PE",
       "def": "Conducteur de protection, de couleur vert-jaune, reliant les masses à la terre."
      },
      {
       "terme": "PEN",
       "def": "Conducteur assurant à la fois les fonctions de neutre et de protection en schéma TN-C."
      },
      {
       "terme": "Tension limite conventionnelle UL",
       "def": "Tension de contact maximale admise sans danger pendant une durée illimitée, 50 V en local sec."
      },
      {
       "terme": "CPI",
       "def": "Contrôleur permanent d'isolement qui signale le premier défaut en schéma IT."
      },
      {
       "terme": "Boucle de défaut",
       "def": "Chemin parcouru par le courant de défaut depuis la source jusqu'au retour à celle-ci."
      },
      {
       "terme": "Barrette de mesure",
       "def": "Borne démontable reliant le conducteur de terre à la borne principale, permettant de mesurer la prise de terre."
      },
      {
       "terme": "Liaison équipotentielle",
       "def": "Liaison électrique mettant au même potentiel des éléments conducteurs."
      },
      {
       "terme": "Transformateur d'isolement",
       "def": "Transformateur à enroulements séparés permettant de créer un réseau isolé de la terre."
      }
     ]
    },
    {
     "id": "bmel-habilitation-consignation",
     "titre": "Habilitation électrique et consignation",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Décoder un symbole d'habilitation et déterminer les opérations qu'il autorise.",
      "Identifier les acteurs d'une opération électrique et leurs responsabilités.",
      "Dérouler les étapes d'une consignation en basse tension et rédiger les documents associés.",
      "Choisir les équipements de protection et les outils adaptés à une opération.",
      "Distinguer travaux hors tension, travaux au voisinage et interventions basse tension."
     ],
     "sections": [
      {
       "titre": "Le cadre réglementaire et normatif",
       "contenu": "\n<p>Le cours de seconde a présenté les dangers du courant et les grands principes de prévention. En première et terminale, il s'agit d'organiser concrètement les opérations électriques en sécurité. Deux sources s'imposent :</p>\n<ul>\n<li>le <strong>Code du travail</strong>, qui oblige l'employeur à ne confier des opérations sur ou au voisinage des installations électriques qu'à des travailleurs <strong>habilités</strong>, après une formation adaptée ;</li>\n<li>la norme <strong>NF C 18-510</strong>, qui définit les prescriptions de sécurité pour les opérations sur les ouvrages et installations électriques et dans un environnement électrique, et les symboles d'habilitation.</li>\n</ul>\n<p>L'<strong>habilitation</strong> est la reconnaissance, par l'employeur, de la capacité d'une personne à accomplir en sécurité les tâches qui lui sont confiées. Elle s'obtient après une formation sanctionnée par un avis, et se matérialise par un <strong>titre d'habilitation</strong> signé par l'employeur et par le salarié, qui précise les symboles, le domaine de tension, les ouvrages concernés et les éventuelles limites. Elle n'est pas un diplôme : elle est liée à l'employeur et doit être renouvelée (la norme recommande un recyclage selon une périodicité définie, de l'ordre de trois ans).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un élève ou un apprenti en formation doit lui aussi disposer d'une habilitation adaptée, délivrée par le chef d'établissement ou par l'employeur, avant de réaliser des opérations sur des installations électriques.</div>\n"
      },
      {
       "titre": "Lire un symbole d'habilitation",
       "contenu": "\n<p>Un symbole d'habilitation se compose d'une ou deux lettres, d'un chiffre ou d'une lettre complémentaire et, éventuellement, d'un attribut.</p>\n<table>\n<thead><tr><th>Caractère</th><th>Valeurs</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Première lettre</td><td>B, H</td><td>Domaine de tension : B pour TBT et BT, H pour HTA et HTB</td></tr>\n<tr><td>Caractère suivant</td><td>0</td><td>Exécutant ou chargé de chantier de travaux d'ordre <strong>non électrique</strong> (peintre, maçon) dans un environnement électrique</td></tr>\n<tr><td></td><td>1, 2</td><td>Travaux d'ordre électrique : 1 = exécutant, 2 = chargé de travaux</td></tr>\n<tr><td></td><td>C</td><td>Chargé de consignation</td></tr>\n<tr><td></td><td>R</td><td>Chargé d'intervention BT générale (dépannage, raccordement, essais, mesures)</td></tr>\n<tr><td></td><td>S</td><td>Chargé d'intervention BT élémentaire (remplacement à l'identique d'un fusible, d'une lampe, d'un accessoire ; raccordement sur un circuit protégé de faible calibre)</td></tr>\n<tr><td></td><td>E</td><td>Opérations spécifiques : essai, vérification, mesurage, manœuvre</td></tr>\n<tr><td>Attribut</td><td>V, T, N, X, Essai…</td><td>V : travaux au voisinage ; T : travaux sous tension ; Essai, Mesurage, Vérification, Manœuvre : précision des opérations E</td></tr>\n</tbody>\n</table>\n<p>Exemples courants pour un électricien : <strong>B1V</strong> (exécutant pouvant travailler au voisinage), <strong>B2V</strong> (chargé de travaux), <strong>BR</strong> (intervention générale : dépannage), <strong>BC</strong> (consignation), <strong>BE Mesurage</strong> ou <strong>BE Vérification</strong>, <strong>H0V</strong> (travaux non électriques au voisinage de la HTA). La norme a été complétée par d'autres symboles pour des cas particuliers, notamment pour les installations photovoltaïques et les véhicules électriques : on les trouve dans l'édition en vigueur de la norme et dans les recueils de prescriptions.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un titre BR n'autorise pas à réaliser des travaux, et un titre B2 n'autorise pas à consigner si le symbole BC n'est pas aussi indiqué. Chaque opération correspond à un symbole précis : il faut vérifier son titre avant d'accepter une tâche.</div>\n"
      },
      {
       "titre": "Les acteurs d'une opération",
       "contenu": "\n<p>Une opération électrique bien organisée répartit clairement les responsabilités :</p>\n<ul>\n<li>l'<strong>employeur</strong> organise le travail, délivre les habilitations et fournit les équipements ;</li>\n<li>le <strong>chargé d'exploitation électrique</strong> représente l'exploitant de l'installation : il autorise l'accès et les opérations sur l'installation ;</li>\n<li>le <strong>chargé de consignation</strong> (BC) réalise la consignation et la remet au chargé de travaux par une <strong>attestation de consignation</strong> ;</li>\n<li>le <strong>chargé de travaux</strong> (B2, B2V) dirige les travaux, assure la sécurité de son équipe, définit la zone de travail ; à la fin, il remet un <strong>avis de fin de travail</strong> ;</li>\n<li>l'<strong>exécutant</strong> (B1, B1V) réalise les travaux selon les instructions reçues ;</li>\n<li>le <strong>chargé d'intervention</strong> (BR) réalise seul des interventions de dépannage, de mesure ou d'essai et peut consigner pour son propre compte.</li>\n</ul>\n<p>Les échanges entre ces acteurs se font par des <strong>documents écrits</strong> (ou des messages enregistrés) : autorisation de travail, attestation de consignation, avis de fin de travail. Ils évitent les malentendus du type « je croyais que c'était coupé ».</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un chantier de rénovation d'un TGBT dans une usine, le chargé d'exploitation de l'usine délivre l'autorisation de travail ; le chef d'équipe de l'entreprise d'électricité, titulaire B2V et BC, consigne le départ, remplit l'attestation de consignation, puis dirige deux électriciens B1V. À la fin, il remplit l'avis de fin de travail avant toute remise sous tension.</div>\n"
      },
      {
       "titre": "La consignation en basse tension",
       "contenu": "\n<p>La <strong>consignation</strong> est l'ensemble des opérations destinées à mettre et maintenir en sécurité un ouvrage électrique, afin d'y travailler hors tension. Elle comporte des étapes dont l'ordre est impératif :</p>\n<ol>\n<li><strong>Séparation</strong> de l'ouvrage de toute source d'énergie, par un organe de séparation dont la position d'ouverture est sûre (sectionneur, interrupteur-sectionneur, disjoncteur apte au sectionnement). On n'oublie aucune source : réseau, groupe électrogène, onduleur, production photovoltaïque, condensateurs, retours par les circuits de commande ;</li>\n<li><strong>Condamnation</strong> en position d'ouverture : cadenas personnel, dispositif de blocage, et <strong>signalisation</strong> par une pancarte indiquant que l'appareil est consigné et qu'il ne doit pas être manœuvré ;</li>\n<li><strong>Identification</strong> de l'ouvrage sur le lieu de travail, pour être certain que c'est bien l'ouvrage consigné sur lequel on va intervenir (repérage des câbles, schémas à jour) ;</li>\n<li><strong>Vérification d'absence de tension</strong> (VAT) sur chaque conducteur, y compris le neutre, au plus près du lieu de travail ;</li>\n<li><strong>Mise à la terre et en court-circuit</strong> (MALT-CC) des conducteurs : en basse tension, elle est exigée lorsqu'il existe un risque de tension induite, de réalimentation ou de présence de condensateurs ou de câbles de grande longueur.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser une VAT correcte.<br>1. Utiliser un <strong>vérificateur d'absence de tension</strong> conforme à sa norme (et non un multimètre ou un tournevis testeur), adapté au domaine de tension.<br>2. Porter les équipements de protection individuelle : gants isolants, écran facial ou lunettes, vêtement couvrant non propagateur de flamme.<br>3. Tester le VAT sur une source connue sous tension (ou sur son autotest prévu par le fabricant) juste avant la vérification.<br>4. Vérifier l'absence de tension entre tous les conducteurs actifs pris deux à deux et entre chacun et la terre (en triphasé avec neutre : L1-L2, L2-L3, L1-L3, L1-N, L2-N, L3-N, puis chaque conducteur et la terre).<br>5. Tester de nouveau le VAT sur une source connue pour s'assurer qu'il n'est pas tombé en panne pendant la vérification.</div>\n<p>À la fin des travaux, la <strong>déconsignation</strong> suit l'ordre inverse : retrait du personnel et des outils, retrait des MALT-CC, retrait des condamnations et de la signalisation, puis remise sous tension après accord du chargé d'exploitation.</p>\n"
      },
      {
       "titre": "Voisinage, interventions et équipements de protection",
       "contenu": "\n<p>Lorsque des pièces nues sous tension sont proches de la zone de travail, on parle de <strong>travail au voisinage</strong>. La norme définit autour des pièces nues des <strong>zones d'environnement</strong> dont l'étendue dépend de la tension ; en basse tension, la <strong>zone 4</strong> correspond à la proximité immédiate (moins de 30 cm environ) d'une pièce nue sous tension. Pour y travailler, il faut être habilité avec l'attribut V, ou supprimer le voisinage en consignant, en isolant les pièces nues par des nappes ou protecteurs isolants, ou en éloignant le travail.</p>\n<p>Les <strong>interventions BT</strong> (BR) se pratiquent parfois sous tension pour la recherche de défaut et les mesures : elles exigent des équipements adaptés et une analyse préalable des risques. Dès que le défaut est localisé, la réparation se fait hors tension, après consignation.</p>\n<p>Équipements à utiliser :</p>\n<ul>\n<li><strong>équipements de protection individuelle</strong> (EPI) : gants isolants de la classe adaptée (classe 00 ou 0 en basse tension), vérifiés par gonflage avant usage ; écran facial anti-UV contre les arcs ; vêtement de travail couvrant ; chaussures isolantes si nécessaire ;</li>\n<li><strong>équipements individuels de sécurité</strong> (EIS) : outils isolés ou isolants, VAT, cadenas de consignation, pancartes ;</li>\n<li><strong>équipements collectifs</strong> : nappes isolantes, balisage de la zone, tapis isolant.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un défaut de court-circuit dans un tableau BT de forte puissance peut produire un arc électrique avec projection de métal fondu et brûlures graves, même sans contact direct. Les protections du visage et du corps ne sont pas facultatives lors d'une VAT ou d'une mesure dans un TGBT.</div>\n"
      },
      {
       "titre": "Préparer une opération en sécurité",
       "contenu": "\n<p>La sécurité électrique se prépare avant d'arriver sur le lieu de l'opération. Lors de la préparation, le technicien :</p>\n<ul>\n<li>recueille les schémas à jour et identifie toutes les sources d'alimentation de l'ouvrage, y compris les sources de secours et les productions locales ;</li>\n<li>vérifie les habilitations nécessaires et les titres des intervenants ;</li>\n<li>prévoit le matériel de consignation (cadenas en nombre suffisant, pancartes, dispositifs de blocage adaptés aux appareils) ;</li>\n<li>contrôle l'état et la date de vérification des EPI, du VAT et des appareils de mesure ;</li>\n<li>organise la coordination avec l'exploitant : date et heure de coupure, information des usagers, équipements sensibles à arrêter proprement (informatique, process, froid alimentaire) ;</li>\n<li>prévoit les mesures en cas d'accident : numéros d'urgence, présence d'un sauveteur secouriste du travail, conduite à tenir en cas d'électrisation.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la règle de base est de travailler <strong>hors tension</strong>. Le voisinage et l'intervention sous tension sont des exceptions encadrées, qui exigent une habilitation adaptée, une analyse des risques et des équipements spécifiques.</div>\n"
      }
     ],
     "points_cles": [
      "L'habilitation est délivrée par l'employeur après formation ; elle se matérialise par un titre signé.",
      "B pour TBT et BT, H pour HTA et HTB ; 0 non électricien, 1 exécutant, 2 chargé de travaux, C consignation, R intervention générale, S élémentaire, E opérations spécifiques.",
      "L'attribut V autorise le travail au voisinage des pièces nues sous tension.",
      "Les échanges entre acteurs se font par écrit : attestation de consignation, avis de fin de travail.",
      "Consignation : séparation, condamnation, identification, VAT, MALT-CC si nécessaire.",
      "La VAT se fait avec un VAT normalisé, testé avant et après, sur tous les conducteurs.",
      "Les gants isolants se vérifient avant chaque usage ; l'écran facial protège des arcs.",
      "La règle est le travail hors tension ; le voisinage et l'intervention sous tension sont des exceptions encadrées."
     ],
     "lexique": [
      {
       "terme": "Habilitation",
       "def": "Reconnaissance par l'employeur de la capacité d'une personne à accomplir en sécurité des opérations électriques définies."
      },
      {
       "terme": "Titre d'habilitation",
       "def": "Document signé précisant les symboles et le domaine d'habilitation d'un salarié."
      },
      {
       "terme": "Chargé d'exploitation électrique",
       "def": "Personne représentant l'exploitant, qui autorise l'accès et les opérations sur l'installation."
      },
      {
       "terme": "Chargé de consignation",
       "def": "Personne habilitée à effectuer la consignation d'un ouvrage."
      },
      {
       "terme": "Attestation de consignation",
       "def": "Document par lequel le chargé de consignation certifie que l'ouvrage est consigné."
      },
      {
       "terme": "Avis de fin de travail",
       "def": "Document par lequel le chargé de travaux déclare les travaux terminés et le personnel retiré."
      },
      {
       "terme": "Condamnation",
       "def": "Blocage d'un organe de séparation en position d'ouverture, par exemple par cadenas."
      },
      {
       "terme": "VAT",
       "def": "Vérification d'absence de tension, ou appareil servant à la réaliser."
      },
      {
       "terme": "MALT-CC",
       "def": "Mise à la terre et en court-circuit des conducteurs d'un ouvrage consigné."
      },
      {
       "terme": "Zone de voisinage",
       "def": "Espace autour des pièces nues sous tension où le travail exige des précautions particulières."
      },
      {
       "terme": "EPI",
       "def": "Équipement de protection individuelle porté par le travailleur."
      }
     ]
    },
    {
     "id": "bmel-dimensionnement-protections",
     "titre": "Dimensionner les canalisations et choisir les protections",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Déterminer le courant d'emploi d'un circuit à partir de la puissance des récepteurs.",
      "Appliquer la règle IB ≤ In ≤ Iz pour choisir le calibre d'une protection et la section d'un câble.",
      "Utiliser des facteurs de correction liés au mode de pose, à la température et au groupement.",
      "Vérifier la chute de tension d'une canalisation.",
      "Choisir un disjoncteur selon sa courbe, son pouvoir de coupure et la sélectivité."
     ],
     "sections": [
      {
       "titre": "La démarche de dimensionnement",
       "contenu": "\n<p>Dans un logement, les sections et calibres sont fixés par des tableaux simples (vus en seconde). Dans le tertiaire et l'industrie, chaque circuit doit être <strong>dimensionné</strong> : on calcule le courant qu'il transporte et on en déduit la section du câble et les caractéristiques de sa protection. Cette démarche, décrite par la norme d'installation NF C 15-100 et son guide de calcul UTE C 15-105, suit toujours le même ordre :</p>\n<ol>\n<li>calculer le <strong>courant d'emploi</strong> I<sub>B</sub> ;</li>\n<li>choisir le <strong>courant assigné</strong> I<sub>n</sub> de la protection ;</li>\n<li>déterminer le <strong>courant admissible</strong> I<sub>z</sub> requis et la <strong>section</strong> du câble selon les conditions de pose ;</li>\n<li>vérifier la <strong>chute de tension</strong> ;</li>\n<li>vérifier la protection contre les <strong>courts-circuits</strong> (pouvoir de coupure, contraintes thermiques) et contre les <strong>contacts indirects</strong> (longueurs maximales en TN et IT) ;</li>\n<li>vérifier la <strong>sélectivité</strong> avec les protections amont.</li>\n</ol>\n<p>Dans les bureaux d'études, ces calculs sont réalisés avec des logiciels spécialisés. Le technicien doit néanmoins savoir lire leurs notes de calcul, vérifier un résultat et refaire un calcul simple sur le chantier, par exemple lors de l'ajout d'un circuit.</p>\n"
      },
      {
       "titre": "Du courant d'emploi au calibre de la protection",
       "contenu": "\n<p>Le <strong>courant d'emploi</strong> I<sub>B</sub> est le courant que le circuit transporte en fonctionnement normal. On le calcule à partir de la puissance des récepteurs :</p>\n<ul>\n<li>en monophasé : I<sub>B</sub> = P / (V × cos φ) ;</li>\n<li>en triphasé : I<sub>B</sub> = P / (√3 × U × cos φ).</li>\n</ul>\n<p>Pour un moteur, la puissance indiquée sur la plaque est la puissance <strong>utile</strong> (mécanique) : il faut la diviser par le rendement pour obtenir la puissance absorbée, ou lire directement le courant nominal sur la plaque.</p>\n<p>La protection contre les surcharges doit respecter la règle fondamentale :</p>\n<p><strong>I<sub>B</sub> ≤ I<sub>n</sub> ≤ I<sub>z</sub></strong></p>\n<p>Le calibre de la protection doit être supérieur ou égal au courant d'emploi (sinon elle déclenche en fonctionnement normal) et inférieur ou égal au courant que le câble peut supporter en permanence (sinon le câble pourrait surchauffer sans que la protection réagisse). Pour les disjoncteurs, cette règle suffit ; pour les fusibles de type gG, on applique un coefficient supplémentaire car leur courant de fonctionnement est plus élevé.</p>\n<p>Les calibres de disjoncteurs sont normalisés : 2, 3, 6, 10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125 A et au-delà. On retient le calibre normalisé immédiatement supérieur à I<sub>B</sub>.</p>\n"
      },
      {
       "titre": "Choisir la section : courant admissible et facteurs de correction",
       "contenu": "\n<p>Le <strong>courant admissible</strong> I<sub>z</sub> d'un câble est le courant qu'il peut transporter en permanence sans que son isolant dépasse sa température maximale (70 °C pour le PVC, 90 °C pour le polyéthylène réticulé PR). Il dépend :</p>\n<ul>\n<li>de la <strong>nature de l'âme</strong> (cuivre ou aluminium) et de l'<strong>isolant</strong> (PVC ou PR) ;</li>\n<li>du <strong>mode de pose</strong> : sous conduit encastré, sur chemin de câbles perforé, enterré… Chaque mode de pose est associé à une <strong>méthode de référence</strong> (désignée par une lettre dans les tableaux de la norme) ;</li>\n<li>de la <strong>température ambiante</strong> ;</li>\n<li>du <strong>groupement</strong> de plusieurs circuits côte à côte, qui se chauffent mutuellement.</li>\n</ul>\n<p>On calcule d'abord un courant fictif I'<sub>z</sub> = I<sub>n</sub> / K, où K est le produit des facteurs de correction (K = K<sub>1</sub> × K<sub>2</sub> × K<sub>3</sub>…), puis on cherche dans le tableau de la méthode de référence la plus petite section dont le courant admissible est supérieur ou égal à I'<sub>z</sub>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> section d'un départ pour un moteur.<br>Données : moteur triphasé 400 V, courant nominal plaque 28 A. Câble cuivre isolé PR, posé sur chemin de câbles perforé avec 4 autres circuits jointifs, température ambiante 40 °C. Facteurs lus dans les tableaux de la norme (valeurs de l'exemple) : température K<sub>1</sub> = 0,91 ; groupement K<sub>2</sub> = 0,75.<br>1. I<sub>B</sub> = 28 A.<br>2. Calibre normalisé immédiatement supérieur : I<sub>n</sub> = 32 A.<br>3. K = 0,91 × 0,75 ≈ 0,68.<br>4. I'<sub>z</sub> = 32 / 0,68 ≈ 47 A.<br>5. Dans le tableau correspondant au mode de pose, on choisit la première section dont le courant admissible est au moins 47 A (selon les tableaux, 6 mm² ou 10 mm²).<br>6. On note le résultat provisoire, puis on vérifie la chute de tension et la protection contre les courts-circuits.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les valeurs de courant admissible diffèrent selon les tableaux, les éditions de la norme et les conditions de pose. Il faut toujours travailler avec les tableaux fournis dans le dossier ou ceux de la norme en vigueur, jamais avec des valeurs retenues de mémoire.</div>\n"
      },
      {
       "titre": "Vérifier la chute de tension",
       "contenu": "\n<p>Le courant qui circule dans un câble provoque une <strong>chute de tension</strong> : la tension aux bornes du récepteur est inférieure à la tension au départ du tableau. Une chute excessive nuit au fonctionnement (démarrage difficile d'un moteur, baisse de flux lumineux) et augmente les pertes.</p>\n<p>Pour les installations alimentées directement par le réseau public BT, la norme NF C 15-100 limite la chute de tension, entre l'origine de l'installation et le point d'utilisation, à <strong>3 % pour l'éclairage</strong> et <strong>5 % pour les autres usages</strong>. Lorsque l'installation est alimentée par un poste HTA/BT privé, les limites sont portées à 6 % et 8 %.</p>\n<p>Une formule simplifiée (en négligeant la réactance des petits câbles) permet une vérification rapide :</p>\n<ul>\n<li>en triphasé : ΔU = √3 × ρ × L × I<sub>B</sub> × cos φ / S ;</li>\n<li>en monophasé : ΔU = 2 × ρ × L × I<sub>B</sub> × cos φ / S ;</li>\n</ul>\n<p>avec ρ la résistivité du conducteur à chaud (environ 0,0225 Ω·mm²/m pour le cuivre), L la longueur en mètres et S la section en mm². On exprime ensuite ΔU en pourcentage de la tension nominale.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> chute de tension du départ moteur précédent.<br>Données : L = 60 m, I<sub>B</sub> = 28 A, cos φ = 0,85, section provisoire 6 mm², cuivre.<br>1. ΔU = 1,732 × 0,0225 × 60 × 28 × 0,85 / 6 ≈ 9,3 V.<br>2. En pourcentage : 9,3 / 400 ≈ 2,3 %.<br>3. Si la chute amont (du point de livraison jusqu'au tableau divisionnaire) est de 1,5 %, la chute totale vaut 3,8 %, inférieure à 5 % : la section de 6 mm² convient de ce point de vue.<br>4. Si la chute totale avait dépassé la limite, on aurait retenu la section supérieure.</div>\n"
      },
      {
       "titre": "Courts-circuits : pouvoir de coupure et courbes de déclenchement",
       "contenu": "\n<p>Un <strong>court-circuit</strong> produit un courant très élevé, limité seulement par l'impédance de la source et des câbles. Plus on est proche du transformateur, plus le <strong>courant de court-circuit présumé</strong> (I<sub>cc</sub>) est important : il peut atteindre plusieurs dizaines de kiloampères au TGBT d'un gros bâtiment, alors qu'il n'est que de quelques kiloampères au fond d'une installation domestique.</p>\n<p>Le disjoncteur choisi doit avoir un <strong>pouvoir de coupure</strong> (PdC, souvent noté I<sub>cu</sub> pour les disjoncteurs industriels) au moins égal au courant de court-circuit présumé à l'endroit où il est installé. Sinon, il risque d'être détruit sans couper le défaut. Une technique autorisée, la <strong>filiation</strong> (ou coordination), permet d'installer en aval un disjoncteur de pouvoir de coupure plus faible, à condition que l'association avec l'appareil amont soit garantie par les tableaux du constructeur.</p>\n<p>Les disjoncteurs modulaires ont une <strong>courbe de déclenchement</strong> qui fixe le seuil du déclencheur magnétique :</p>\n<table>\n<thead><tr><th>Courbe</th><th>Seuil magnétique</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>B</td><td>3 à 5 × I<sub>n</sub></td><td>Grandes longueurs de câble, circuits à faible courant d'appel, schéma TN ou IT pour respecter les longueurs maximales</td></tr>\n<tr><td>C</td><td>5 à 10 × I<sub>n</sub></td><td>Usage général (prises, éclairage, petits moteurs)</td></tr>\n<tr><td>D</td><td>10 à 20 × I<sub>n</sub></td><td>Récepteurs à fort courant d'appel (transformateurs, gros moteurs)</td></tr>\n</tbody>\n</table>\n<p>Pour les départs moteurs, on utilise souvent un <strong>disjoncteur-moteur</strong> (magnéto-thermique réglable au courant du moteur) ou l'association d'un disjoncteur magnétique seul, d'un contacteur et d'un relais thermique.</p>\n"
      },
      {
       "titre": "La sélectivité des protections",
       "contenu": "\n<p>Une installation comporte plusieurs niveaux de protection en série : disjoncteur général, protections des départs du TGBT, protections des tableaux divisionnaires, protections terminales. La <strong>sélectivité</strong> consiste à faire en sorte qu'en cas de défaut, <strong>seule la protection située immédiatement en amont du défaut</strong> déclenche. Le reste de l'installation continue d'être alimenté.</p>\n<ul>\n<li><strong>Sélectivité ampèremétrique</strong> : les seuils de déclenchement de l'appareil amont sont nettement supérieurs à ceux de l'appareil aval.</li>\n<li><strong>Sélectivité chronométrique</strong> : l'appareil amont est temporisé ; il laisse à l'appareil aval le temps de couper.</li>\n<li><strong>Sélectivité des différentiels</strong> : l'appareil amont doit avoir une sensibilité au moins deux fois plus élevée (en valeur de I<sub>Δn</sub>) et un temps de fonctionnement plus long (différentiel de type S, sélectif, ou retardé) que l'appareil aval.</li>\n</ul>\n<p>Les constructeurs publient des <strong>tableaux de sélectivité</strong> indiquant, pour chaque couple d'appareils, si la sélectivité est totale ou partielle (valable seulement jusqu'à une certaine valeur de courant).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un immeuble de bureaux, un défaut sur une prise d'un plateau fait déclencher le disjoncteur général du TGBT : tout l'immeuble est privé d'électricité. L'analyse montre que le différentiel général n'était pas sélectif. Le remplacement par un différentiel de type S, associé à des différentiels 30 mA instantanés sur les départs terminaux, rétablit la sélectivité.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une protection bien choisie protège le câble (I<sub>n</sub> ≤ I<sub>z</sub>), résiste au court-circuit (PdC ≥ I<sub>cc</sub>), protège les personnes (différentiel ou longueur maximale) et ne coupe que ce qui est nécessaire (sélectivité).</div>\n"
      }
     ],
     "points_cles": [
      "Ordre de la démarche : IB, In, Iz et section, chute de tension, courts-circuits, contacts indirects, sélectivité.",
      "Règle de protection contre les surcharges : IB ≤ In ≤ Iz.",
      "Le courant admissible dépend de l'âme, de l'isolant, du mode de pose, de la température et du groupement.",
      "On calcule I'z = In / K avec K le produit des facteurs de correction, puis on lit la section dans le tableau.",
      "Chute de tension maximale sur réseau public : 3 % pour l'éclairage, 5 % pour les autres usages.",
      "Le pouvoir de coupure doit être au moins égal au courant de court-circuit présumé au point d'installation.",
      "Courbes B, C, D : seuils magnétiques croissants, à choisir selon le courant d'appel et les longueurs.",
      "La sélectivité limite la coupure au seul départ en défaut."
     ],
     "lexique": [
      {
       "terme": "Courant d'emploi IB",
       "def": "Courant transporté par un circuit en fonctionnement normal."
      },
      {
       "terme": "Courant assigné In",
       "def": "Calibre d'un appareil de protection, courant qu'il supporte en permanence."
      },
      {
       "terme": "Courant admissible Iz",
       "def": "Courant maximal qu'un câble peut transporter en permanence sans échauffement excessif."
      },
      {
       "terme": "Méthode de référence",
       "def": "Mode de pose type utilisé dans les tableaux de la norme pour lire le courant admissible."
      },
      {
       "terme": "Facteur de correction",
       "def": "Coefficient réduisant le courant admissible selon la température, le groupement ou le sol."
      },
      {
       "terme": "Chute de tension",
       "def": "Différence entre la tension au départ et à l'arrivée d'une canalisation, due à son impédance."
      },
      {
       "terme": "Pouvoir de coupure",
       "def": "Courant de court-circuit maximal qu'un appareil peut interrompre sans dommage."
      },
      {
       "terme": "Filiation",
       "def": "Association d'appareils permettant d'utiliser en aval un disjoncteur de pouvoir de coupure inférieur au courant de court-circuit présumé."
      },
      {
       "terme": "Sélectivité",
       "def": "Coordination des protections pour que seule celle située juste en amont du défaut déclenche."
      },
      {
       "terme": "Courbe de déclenchement",
       "def": "Caractéristique fixant le seuil du déclencheur magnétique d'un disjoncteur (B, C, D)."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Convertir et utiliser l'énergie",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmel-transformateurs",
     "titre": "Les transformateurs",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Expliquer le principe de fonctionnement d'un transformateur.",
      "Exploiter le rapport de transformation pour calculer tensions et courants.",
      "Lire la plaque signalétique d'un transformateur monophasé ou triphasé.",
      "Calculer le rendement d'un transformateur à partir de ses pertes.",
      "Choisir un transformateur de commande, de sécurité ou d'isolement selon l'usage."
     ],
     "sections": [
      {
       "titre": "Principe et constitution",
       "contenu": "\n<p>Le <strong>transformateur</strong> est une machine statique (sans pièce en mouvement) qui modifie la valeur d'une tension alternative en conservant sa fréquence. Il est présent partout : poste de distribution HTA/BT, alimentation des circuits de commande d'une armoire, éclairage en très basse tension, chargeurs…</p>\n<p>Il est constitué :</p>\n<ul>\n<li>d'un <strong>circuit magnétique</strong> feuilleté, formé de tôles d'acier au silicium isolées entre elles pour limiter les courants de Foucault ;</li>\n<li>d'un <strong>enroulement primaire</strong> de N<sub>1</sub> spires, raccordé à la source ;</li>\n<li>d'un <strong>enroulement secondaire</strong> de N<sub>2</sub> spires, qui alimente la charge.</li>\n</ul>\n<p>Le courant alternatif dans le primaire crée un flux magnétique variable qui circule dans le circuit magnétique et traverse le secondaire. D'après la loi de l'induction (loi de Faraday), ce flux variable fait apparaître une tension aux bornes du secondaire. Un transformateur ne fonctionne donc <strong>qu'en alternatif</strong> : en continu, le flux ne varie pas et aucune tension n'est induite, tandis que le primaire, qui n'oppose plus que sa faible résistance, serait parcouru par un courant destructeur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un transformateur est réversible. Si l'on alimente le secondaire d'un transformateur 230 V / 24 V par un générateur 24 V, on retrouve 230 V sur le primaire. C'est un danger réel lors de la consignation d'une installation comportant un groupe électrogène ou une production locale raccordée en aval.</div>\n"
      },
      {
       "titre": "Rapport de transformation",
       "contenu": "\n<p>Pour un transformateur parfait (sans pertes), les tensions sont proportionnelles aux nombres de spires et les courants leur sont inversement proportionnels. On définit le <strong>rapport de transformation</strong> :</p>\n<p><strong>m = U<sub>2</sub> / U<sub>1</sub> = N<sub>2</sub> / N<sub>1</sub> = I<sub>1</sub> / I<sub>2</sub></strong></p>\n<ul>\n<li>m &lt; 1 : transformateur <strong>abaisseur</strong> (cas le plus courant en installation) ;</li>\n<li>m &gt; 1 : transformateur <strong>élévateur</strong> (sortie de centrale, certains onduleurs) ;</li>\n<li>m = 1 : transformateur d'<strong>isolement</strong>, qui ne change pas la tension mais sépare galvaniquement deux circuits.</li>\n</ul>\n<p>Comme la puissance apparente se conserve au premier ordre (S<sub>1</sub> ≈ S<sub>2</sub>), un transformateur abaisseur fournit au secondaire un courant plus élevé que celui qu'il absorbe au primaire.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> transformateur de commande d'une armoire.<br>Plaque : 400 V / 24 V, 250 VA.<br>1. Rapport de transformation : m = 24 / 400 = 0,06.<br>2. Courant secondaire nominal : I<sub>2</sub> = S / U<sub>2</sub> = 250 / 24 ≈ 10,4 A.<br>3. Courant primaire nominal : I<sub>1</sub> = S / U<sub>1</sub> = 250 / 400 ≈ 0,63 A (on vérifie : I<sub>1</sub> = m × I<sub>2</sub> = 0,06 × 10,4 ≈ 0,63 A).<br>4. Bilan des bobines de contacteurs et voyants alimentés : si la somme des puissances de maintien dépasse 250 VA, ou si les appels de courant à la fermeture des contacteurs sont trop importants, il faut choisir le calibre supérieur.</div>\n"
      },
      {
       "titre": "Lire une plaque signalétique",
       "contenu": "\n<p>La plaque signalétique d'un transformateur donne les informations nécessaires à son choix et à son raccordement. Pour un transformateur triphasé de distribution, on y trouve par exemple :</p>\n<table>\n<thead><tr><th>Indication</th><th>Exemple</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Puissance assignée</td><td>630 kVA</td><td>Puissance apparente que le transformateur peut fournir en permanence</td></tr>\n<tr><td>Tensions assignées</td><td>20 kV / 410 V</td><td>Tension primaire et tension secondaire à vide (légèrement supérieure à 400 V pour compenser la chute en charge)</td></tr>\n<tr><td>Couplage</td><td>Dyn11</td><td>Primaire en triangle (D), secondaire en étoile (y) avec neutre sorti (n), indice horaire 11</td></tr>\n<tr><td>Tension de court-circuit</td><td>u<sub>cc</sub> = 4 %</td><td>Sert à calculer le courant de court-circuit au secondaire et la chute de tension en charge</td></tr>\n<tr><td>Fréquence</td><td>50 Hz</td><td>Fréquence d'utilisation</td></tr>\n<tr><td>Mode de refroidissement</td><td>ONAN</td><td>Huile minérale, circulation naturelle, air naturel</td></tr>\n<tr><td>Prises de réglage</td><td>± 2,5 %</td><td>Permettent d'ajuster la tension secondaire hors tension</td></tr>\n</tbody>\n</table>\n<p>Le couplage <strong>Dyn11</strong> est le plus répandu pour la distribution basse tension : le neutre sorti au secondaire permet d'alimenter des récepteurs monophasés en 230 V, et le primaire en triangle limite la propagation de certains harmoniques vers le réseau HTA.</p>\n<p>Le courant de court-circuit maximal au secondaire se calcule approximativement par I<sub>cc</sub> ≈ I<sub>n</sub> / u<sub>cc</sub>. Pour un transformateur de 630 kVA sous 410 V, I<sub>n</sub> = 630 000 / (1,732 × 410) ≈ 887 A, d'où I<sub>cc</sub> ≈ 887 / 0,04 ≈ 22 kA. Cette valeur guide le choix du pouvoir de coupure du disjoncteur général.</p>\n<p>On distingue aussi les transformateurs <strong>immergés</strong> dans l'huile, les plus courants en extérieur, et les transformateurs <strong>secs enrobés</strong> dans une résine, préférés à l'intérieur des bâtiments et dans les établissements recevant du public pour limiter le risque d'incendie.</p>\n"
      },
      {
       "titre": "Pertes et rendement",
       "contenu": "\n<p>Un transformateur réel présente deux types de pertes :</p>\n<ul>\n<li>les <strong>pertes fer</strong> (ou pertes à vide), dues à l'aimantation alternée du circuit magnétique (hystérésis et courants de Foucault). Elles dépendent de la tension et de la fréquence, et sont pratiquement constantes dès que le transformateur est sous tension, même sans charge ;</li>\n<li>les <strong>pertes cuivre</strong> (ou pertes en charge), dues à l'effet Joule dans les enroulements. Elles varient comme le carré du courant : à demi-charge, elles valent le quart des pertes à pleine charge.</li>\n</ul>\n<p>Le <strong>rendement</strong> est le rapport de la puissance active fournie à la puissance active absorbée :</p>\n<p><strong>η = P<sub>2</sub> / P<sub>1</sub> = P<sub>2</sub> / (P<sub>2</sub> + P<sub>fer</sub> + P<sub>cuivre</sub>)</strong></p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rendement d'un transformateur de distribution.<br>Données constructeur : pertes à vide 0,8 kW, pertes en charge à charge nominale 6,5 kW. Le transformateur fournit 400 kW (cos φ = 0,9) à 75 % de sa charge nominale.<br>1. Pertes fer : 0,8 kW (constantes).<br>2. Pertes cuivre à 75 % de charge : 6,5 × 0,75² = 6,5 × 0,5625 ≈ 3,7 kW.<br>3. Puissance absorbée : 400 + 0,8 + 3,7 = 404,5 kW.<br>4. Rendement : η = 400 / 404,5 ≈ 0,989, soit 98,9 %.</div>\n<p>Le rendement des gros transformateurs est excellent (plus de 98 %), mais les pertes à vide existent 24 heures sur 24. C'est pourquoi la réglementation européenne sur l'écoconception impose des niveaux de pertes maximaux aux transformateurs neufs, et pourquoi on évite de laisser sous tension des transformateurs inutilisés.</p>\n"
      },
      {
       "titre": "Transformateurs spéciaux de l'installation",
       "contenu": "\n<p>L'électricien rencontre plusieurs familles de petits transformateurs, chacune répondant à une norme et à un usage précis :</p>\n<table>\n<thead><tr><th>Type</th><th>Caractéristique</th><th>Usage typique</th></tr></thead>\n<tbody>\n<tr><td>Transformateur de commande</td><td>Isolement renforcé, tenue aux appels de courant des bobines</td><td>Alimentation des circuits de commande d'une armoire (24 V, 48 V, 110 V, 230 V)</td></tr>\n<tr><td>Transformateur de sécurité</td><td>Enroulements séparés par une isolation double ou renforcée, tension secondaire TBT</td><td>Création d'une très basse tension de sécurité (TBTS) : éclairage de piscine, prises de rasoir</td></tr>\n<tr><td>Transformateur d'isolement</td><td>Rapport 1, séparation galvanique</td><td>Îlot en schéma IT d'une salle d'opération, alimentation d'appareils de mesure</td></tr>\n<tr><td>Autotransformateur</td><td>Un seul enroulement à prise intermédiaire, pas de séparation galvanique</td><td>Adaptation de tension, démarrage de moteurs ; ne convient pas pour la sécurité</td></tr>\n<tr><td>Transformateur de courant (TC)</td><td>Secondaire délivrant un courant proportionnel (par exemple 5 A ou 1 A)</td><td>Comptage et mesure sur les gros départs</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> il ne faut jamais ouvrir le circuit secondaire d'un transformateur de courant lorsque le primaire est parcouru par un courant. Une tension très élevée apparaîtrait aux bornes du secondaire. Avant de débrancher un appareil de mesure, on court-circuite le secondaire du TC à l'aide du bornier prévu à cet effet.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'une modification d'armoire, le technicien ajoute trois contacteurs et deux voyants. Avant le câblage, il recalcule le bilan du transformateur de commande (puissance de maintien et d'appel des bobines). Le transformateur de 160 VA existant étant insuffisant, il le remplace par un modèle de 250 VA et adapte la protection du secondaire.</div>\n"
      },
      {
       "titre": "Raccordement et protection",
       "contenu": "\n<p>Un transformateur se raccorde selon les indications de sa plaque à bornes. Les petits transformateurs monophasés disposent souvent de plusieurs bornes primaires (par exemple 0 – 230 – 400 V) : on choisit la borne correspondant à la tension du réseau disponible.</p>\n<p>Le transformateur doit être protégé :</p>\n<ul>\n<li>au <strong>primaire</strong>, par un disjoncteur ou des fusibles capables de supporter le courant d'appel à la mise sous tension, qui peut atteindre plusieurs fois, voire une dizaine de fois, le courant nominal pendant quelques millisecondes : on choisit des fusibles de type aM ou un disjoncteur de courbe D ;</li>\n<li>au <strong>secondaire</strong>, par un disjoncteur ou des fusibles protégeant les circuits alimentés contre les surcharges et les courts-circuits.</li>\n</ul>\n<p>Dans un circuit de commande, une borne du secondaire est généralement reliée au conducteur de protection : un défaut d'isolement d'un fil de commande vers une masse provoque alors un court-circuit qui fait déclencher la protection, au lieu de provoquer une mise en marche intempestive d'un actionneur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un transformateur se choisit par sa puissance apparente (en VA ou kVA), ses tensions primaire et secondaire, son couplage, sa catégorie (commande, sécurité, isolement) et son mode de refroidissement.</div>\n"
      }
     ],
     "points_cles": [
      "Le transformateur modifie une tension alternative sans changer sa fréquence et ne fonctionne pas en continu.",
      "Rapport de transformation : m = U2 / U1 = N2 / N1 = I1 / I2.",
      "La puissance assignée est une puissance apparente, en VA ou kVA.",
      "Le couplage Dyn11 est le plus répandu pour la distribution BT avec neutre sorti.",
      "Icc au secondaire ≈ In / ucc : la tension de court-circuit sert à choisir le pouvoir de coupure.",
      "Pertes fer constantes, pertes cuivre proportionnelles au carré du courant.",
      "Seul un transformateur de sécurité permet de créer une TBTS ; un autotransformateur ne sépare pas les circuits.",
      "Ne jamais ouvrir le secondaire d'un transformateur de courant en service."
     ],
     "lexique": [
      {
       "terme": "Rapport de transformation",
       "def": "Rapport entre la tension secondaire et la tension primaire d'un transformateur."
      },
      {
       "terme": "Circuit magnétique feuilleté",
       "def": "Empilement de tôles isolées qui canalise le flux en limitant les courants de Foucault."
      },
      {
       "terme": "Couplage",
       "def": "Mode de connexion des enroulements d'un transformateur triphasé (étoile, triangle, zigzag)."
      },
      {
       "terme": "Tension de court-circuit ucc",
       "def": "Pourcentage de la tension primaire qui fait circuler le courant nominal au secondaire en court-circuit."
      },
      {
       "terme": "Pertes fer",
       "def": "Pertes dans le circuit magnétique, pratiquement constantes sous tension."
      },
      {
       "terme": "Pertes cuivre",
       "def": "Pertes par effet Joule dans les enroulements, proportionnelles au carré du courant."
      },
      {
       "terme": "TBTS",
       "def": "Très basse tension de sécurité, obtenue par une source de sécurité et des circuits séparés de la terre."
      },
      {
       "terme": "Transformateur de courant",
       "def": "Transformateur de mesure délivrant un courant secondaire proportionnel au courant primaire."
      },
      {
       "terme": "Courant d'appel",
       "def": "Pointe de courant brève à la mise sous tension d'un transformateur ou d'un moteur."
      },
      {
       "terme": "ONAN",
       "def": "Code de refroidissement : huile minérale à circulation naturelle, air à circulation naturelle."
      }
     ]
    },
    {
     "id": "bmel-moteur-asynchrone",
     "titre": "Le moteur asynchrone triphasé et ses démarrages",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Expliquer le principe du champ tournant et du glissement.",
      "Exploiter la plaque signalétique d'un moteur pour choisir son couplage et calculer ses grandeurs.",
      "Décrire les schémas de puissance et de commande d'un démarrage direct et d'une inversion de sens.",
      "Comparer les procédés de démarrage et justifier un choix.",
      "Choisir et régler les protections d'un départ moteur."
     ],
     "sections": [
      {
       "titre": "Principe de fonctionnement",
       "contenu": "\n<p>Le <strong>moteur asynchrone triphasé</strong> est le moteur le plus utilisé dans l'industrie et le bâtiment : pompes, ventilateurs, convoyeurs, compresseurs, portails, centrales de traitement d'air. Il est robuste, peu coûteux et demande très peu d'entretien.</p>\n<p>Il comporte deux parties :</p>\n<ul>\n<li>le <strong>stator</strong>, partie fixe, qui porte trois enroulements décalés dans l'espace. Alimentés par un réseau triphasé, ils créent un <strong>champ magnétique tournant</strong> ;</li>\n<li>le <strong>rotor</strong>, partie tournante, le plus souvent « à cage d'écureuil » : des barres conductrices en aluminium ou en cuivre reliées à leurs extrémités par deux anneaux.</li>\n</ul>\n<p>Le champ tournant balaie les barres du rotor et y induit des courants. Ces courants, placés dans le champ magnétique, subissent des forces qui entraînent le rotor dans le sens du champ. Le rotor tourne toujours un peu moins vite que le champ : s'il tournait à la même vitesse, il n'y aurait plus de variation de flux, plus de courant induit et donc plus de couple. D'où le nom de moteur <strong>asynchrone</strong>.</p>\n<p>La vitesse du champ tournant, appelée <strong>vitesse de synchronisme</strong>, vaut :</p>\n<p><strong>n<sub>s</sub> = 60 × f / p</strong> (en tr/min), avec f la fréquence en Hz et p le nombre de <strong>paires de pôles</strong>.</p>\n<p>Sur un réseau 50 Hz : p = 1 donne 3 000 tr/min, p = 2 donne 1 500 tr/min, p = 3 donne 1 000 tr/min, p = 4 donne 750 tr/min. L'écart relatif entre la vitesse de synchronisme et la vitesse réelle n est le <strong>glissement</strong> : g = (n<sub>s</sub> − n) / n<sub>s</sub>, de l'ordre de 2 à 6 % à charge nominale.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour inverser le sens de rotation d'un moteur asynchrone triphasé, il suffit de permuter deux phases de l'alimentation.</div>\n"
      },
      {
       "titre": "La plaque signalétique et le couplage",
       "contenu": "\n<p>La plaque signalétique, fixée sur la carcasse, rassemble les caractéristiques <strong>nominales</strong> du moteur. Exemple :</p>\n<table>\n<thead><tr><th>Indication</th><th>Valeur</th><th>Exploitation</th></tr></thead>\n<tbody>\n<tr><td>Tensions</td><td>230 V Δ / 400 V Y</td><td>Sur un réseau 400 V entre phases : couplage étoile</td></tr>\n<tr><td>Courants</td><td>26,5 A / 15,3 A</td><td>En étoile sous 400 V, courant nominal 15,3 A : valeur de réglage du relais thermique</td></tr>\n<tr><td>Puissance</td><td>7,5 kW</td><td>Puissance <strong>utile</strong> mécanique disponible sur l'arbre</td></tr>\n<tr><td>Vitesse</td><td>1 455 tr/min</td><td>Moteur à 2 paires de pôles (n<sub>s</sub> = 1 500 tr/min), glissement 3 %</td></tr>\n<tr><td>cos φ</td><td>0,83</td><td>Facteur de puissance à charge nominale</td></tr>\n<tr><td>Classe de rendement</td><td>IE3</td><td>Classe d'efficacité énergétique selon la norme CEI 60034-30-1</td></tr>\n<tr><td>IP / IK, classe d'isolation</td><td>IP55, classe F</td><td>Protection contre poussières et jets d'eau ; température maximale de l'isolant</td></tr>\n</tbody>\n</table>\n<p>Le <strong>couplage</strong> se réalise sur la plaque à bornes à l'aide de barrettes : trois barrettes horizontales reliant W2, U2 et V2 pour l'étoile ; trois barrettes verticales (U1-W2, V1-U2, W1-V2) pour le triangle. La règle est simple : <strong>chaque enroulement supporte la plus petite des deux tensions de la plaque</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter la plaque ci-dessus sur un réseau 400 V.<br>1. Couplage : chaque enroulement supporte 230 V. Sur 400 V entre phases, on couple en étoile pour que chaque enroulement reçoive 400 / √3 = 230 V.<br>2. Puissance absorbée : P<sub>a</sub> = √3 × U × I × cos φ = 1,732 × 400 × 15,3 × 0,83 ≈ 8 800 W.<br>3. Rendement : η = P<sub>u</sub> / P<sub>a</sub> = 7 500 / 8 800 ≈ 0,85, soit 85 %.<br>4. Couple utile : C<sub>u</sub> = P<sub>u</sub> / Ω, avec Ω = 2π × n / 60 = 2 × 3,14 × 1 455 / 60 ≈ 152 rad/s. C<sub>u</sub> = 7 500 / 152 ≈ 49 N·m.</div>\n"
      },
      {
       "titre": "Le démarrage direct et l'inversion de sens",
       "contenu": "\n<p>Le <strong>démarrage direct</strong> consiste à appliquer directement la tension nominale au stator. C'est le procédé le plus simple et le plus économique, mais le courant de démarrage atteint <strong>5 à 8 fois le courant nominal</strong> pendant quelques secondes, ce qui provoque une chute de tension sur l'installation et un démarrage brutal pour la mécanique.</p>\n<p>Un départ moteur comprend deux schémas :</p>\n<ul>\n<li>le <strong>circuit de puissance</strong> : sectionneur porte-fusibles ou disjoncteur, contacteur, relais thermique (ou disjoncteur-moteur qui réunit sectionnement, protection magnétique et thermique), puis le moteur ;</li>\n<li>le <strong>circuit de commande</strong>, alimenté en très basse tension par un transformateur : bouton d'arrêt (contact à ouverture), bouton de marche (contact à fermeture), contact d'auto-maintien du contacteur, contact du relais thermique, bobine du contacteur.</li>\n</ul>\n<p>Pour l'<strong>inversion du sens de marche</strong>, on utilise deux contacteurs : KM1 pour le sens avant, KM2 pour le sens arrière, qui croise deux phases. Les deux contacteurs ne doivent jamais être fermés en même temps, sous peine de court-circuit entre phases. On réalise donc un <strong>verrouillage électrique</strong> (contact à ouverture de KM2 en série avec la bobine de KM1, et inversement) complété par un <strong>verrouillage mécanique</strong> monté entre les deux contacteurs.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le verrouillage électrique seul ne suffit pas : en cas de soudure d'un contact de puissance, le contacteur resterait fermé alors que sa bobine n'est plus alimentée. Le verrouillage mécanique empêche physiquement la fermeture simultanée.</div>\n"
      },
      {
       "titre": "Les démarrages à courant réduit",
       "contenu": "\n<p>Lorsque l'appel de courant du démarrage direct est gênant (moteur de forte puissance, branchement de faible puissance, machine entraînée fragile), on utilise un procédé qui réduit la tension au démarrage.</p>\n<table>\n<thead><tr><th>Procédé</th><th>Principe</th><th>Courant et couple au démarrage</th><th>Remarques</th></tr></thead>\n<tbody>\n<tr><td>Étoile-triangle</td><td>Démarrage en étoile, puis passage en triangle après temporisation</td><td>Divisés par 3 par rapport au direct</td><td>Le moteur doit pouvoir fonctionner en triangle sur le réseau (plaque 400 V Δ / 690 V Y sur un réseau 400 V) ; coupure brève au changement de couplage</td></tr>\n<tr><td>Démarreur progressif (électronique)</td><td>Montée progressive de la tension par gradateur à thyristors</td><td>Réglables (rampe de tension, limitation de courant)</td><td>Démarrage et arrêt en douceur, idéal pour pompes (évite les coups de bélier) et convoyeurs ; vitesse non réglable en régime établi</td></tr>\n<tr><td>Variateur de fréquence</td><td>Alimentation à fréquence et tension variables</td><td>Courant proche du nominal, couple élevé</td><td>Permet en plus de régler la vitesse en permanence</td></tr>\n</tbody>\n</table>\n<p>Le démarrage étoile-triangle utilise trois contacteurs : KM1 (ligne), KM2 (étoile) et KM3 (triangle), avec un verrouillage entre KM2 et KM3. Il est de moins en moins installé dans les réalisations neuves au profit des démarreurs électroniques, mais on le rencontre fréquemment en maintenance.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une pompe de relevage de 15 kW provoque des coups de bélier dans la tuyauterie à chaque arrêt. Le remplacement du démarrage direct par un démarreur progressif, réglé avec une rampe d'arrêt de 10 secondes, supprime le phénomène et réduit les contraintes sur les clapets.</div>\n"
      },
      {
       "titre": "Protéger un départ moteur",
       "contenu": "\n<p>Un moteur doit être protégé contre :</p>\n<ul>\n<li>les <strong>courts-circuits</strong>, par des fusibles de type aM (accompagnement moteur, qui supportent le courant de démarrage) ou par le déclencheur magnétique d'un disjoncteur ;</li>\n<li>les <strong>surcharges</strong>, par un relais thermique ou le déclencheur thermique d'un disjoncteur-moteur, réglé au courant nominal du moteur lu sur la plaque (pour le couplage utilisé) ;</li>\n<li>la <strong>marche en monophasé</strong> (perte d'une phase), détectée par les relais thermiques différentiels ou les relais électroniques ;</li>\n<li>les échauffements anormaux, par des <strong>sondes thermiques</strong> (thermistances CTP) noyées dans les bobinages et reliées à un relais de contrôle, pour les moteurs à démarrages fréquents ou mal ventilés.</li>\n</ul>\n<p>La <strong>classe de déclenchement</strong> du relais thermique (classe 10, 20 ou 30) indique le temps maximal de déclenchement à 7,2 fois le courant de réglage. Une classe 10 convient aux démarrages normaux ; une classe 20 ou 30 aux démarrages longs (ventilateur de grande inertie, broyeur).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> composer le départ du moteur 7,5 kW précédent.<br>1. Courant nominal en étoile sous 400 V : 15,3 A.<br>2. Disjoncteur-moteur : choisir un modèle dont la plage de réglage thermique contient 15,3 A (par exemple 13 à 18 A) et régler sur 15,3 A.<br>3. Contacteur : choisir un calibre en catégorie d'emploi AC-3 (moteur à cage, coupure en marche) au moins égal au courant nominal, ici 18 A.<br>4. Câble : dimensionner avec I<sub>n</sub> égal au réglage, selon la démarche de dimensionnement des canalisations.<br>5. Commande : prévoir un transformateur de commande et vérifier la tension de bobine du contacteur (par exemple 24 V AC).</div>\n"
      },
      {
       "titre": "Mettre en service et contrôler un moteur",
       "contenu": "\n<p>Avant la première mise sous tension d'un départ moteur, on réalise une série de vérifications :</p>\n<ol>\n<li>contrôle visuel du câblage, du serrage des bornes et des barrettes de couplage ;</li>\n<li>mesure de l'<strong>isolement</strong> des enroulements par rapport à la masse, moteur déconnecté du variateur s'il y en a un ;</li>\n<li>vérification de la continuité du conducteur de protection jusqu'à la carcasse ;</li>\n<li>essai de la commande à vide (puissance consignée ou fusibles retirés) : marche, arrêt, arrêt d'urgence, verrouillages ;</li>\n<li>essai en puissance : contrôle du <strong>sens de rotation</strong> par une impulsion brève (moteur désaccouplé si possible), mesure des trois courants de ligne à la pince, comparaison avec la plaque, vérification de l'équilibre entre phases.</li>\n</ol>\n<p>Un écart important entre les trois courants révèle un défaut d'alimentation ou d'enroulement ; un courant supérieur au nominal à charge normale peut révéler une tension trop basse, un couplage erroné ou un problème mécanique (roulement grippé, désalignement).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un moteur couplé en triangle alors qu'il aurait dû l'être en étoile reçoit une tension √3 fois trop élevée par enroulement : il chauffe rapidement et le relais thermique déclenche. Le contrôle du couplage fait partie des premiers points à vérifier.</div>\n"
      }
     ],
     "points_cles": [
      "Le stator crée un champ tournant ; le rotor tourne un peu moins vite : c'est le glissement.",
      "Vitesse de synchronisme : ns = 60 × f / p ; à 50 Hz, 1 500 tr/min pour 2 paires de pôles.",
      "Chaque enroulement supporte la plus petite tension de la plaque : 230/400 V sur réseau 400 V = étoile.",
      "La puissance de plaque est la puissance utile ; P absorbée = √3 × U × I × cos φ.",
      "Le démarrage direct appelle 5 à 8 fois le courant nominal.",
      "L'inversion de sens se fait en permutant deux phases, avec verrouillages électrique et mécanique.",
      "L'étoile-triangle divise courant et couple de démarrage par 3 ; le démarreur progressif adoucit démarrage et arrêt.",
      "Le relais thermique se règle au courant nominal de plaque correspondant au couplage utilisé."
     ],
     "lexique": [
      {
       "terme": "Champ tournant",
       "def": "Champ magnétique créé par trois enroulements alimentés en triphasé, qui tourne à la vitesse de synchronisme."
      },
      {
       "terme": "Rotor à cage",
       "def": "Rotor formé de barres conductrices court-circuitées par deux anneaux."
      },
      {
       "terme": "Glissement",
       "def": "Écart relatif entre vitesse de synchronisme et vitesse réelle du rotor."
      },
      {
       "terme": "Paire de pôles",
       "def": "Ensemble d'un pôle nord et d'un pôle sud ; leur nombre fixe la vitesse de synchronisme."
      },
      {
       "terme": "Auto-maintien",
       "def": "Contact du contacteur câblé en parallèle du bouton marche pour maintenir la bobine alimentée."
      },
      {
       "terme": "Verrouillage",
       "def": "Dispositif électrique ou mécanique interdisant la fermeture simultanée de deux contacteurs."
      },
      {
       "terme": "Démarreur progressif",
       "def": "Appareil électronique qui augmente progressivement la tension au démarrage d'un moteur."
      },
      {
       "terme": "Fusible aM",
       "def": "Fusible d'accompagnement moteur, protégeant contre les courts-circuits en tolérant les pointes de démarrage."
      },
      {
       "terme": "Catégorie AC-3",
       "def": "Catégorie d'emploi des contacteurs pour la commande de moteurs à cage."
      },
      {
       "terme": "Classe de déclenchement",
       "def": "Temps maximal de déclenchement d'un relais thermique à 7,2 fois le courant de réglage."
      }
     ]
    },
    {
     "id": "bmel-eclairage",
     "titre": "Éclairage : grandeurs, sources et gestion",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Définir et utiliser les grandeurs photométriques : flux, éclairement, intensité, luminance.",
      "Comparer les sources lumineuses selon leur efficacité, leur rendu des couleurs et leur durée de vie.",
      "Estimer le nombre de luminaires nécessaires pour éclairer un local.",
      "Décrire les principaux systèmes de gestion de l'éclairage (détection, gradation, DALI).",
      "Prendre en compte les contraintes électriques propres aux luminaires LED."
     ],
     "sections": [
      {
       "titre": "Les grandeurs photométriques",
       "contenu": "\n<p>L'éclairage représente une part importante de la consommation électrique des bâtiments tertiaires. Le technicien doit savoir lire une étude d'éclairage et vérifier qu'une installation fournit la lumière attendue. Il utilise pour cela des <strong>grandeurs photométriques</strong>, qui tiennent compte de la sensibilité de l'œil humain.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Symbole et unité</th><th>Définition simple</th><th>Ordre de grandeur</th></tr></thead>\n<tbody>\n<tr><td>Flux lumineux</td><td>Φ en lumens (lm)</td><td>Quantité totale de lumière émise par une source</td><td>Tube LED de 1,20 m : environ 2 000 lm</td></tr>\n<tr><td>Intensité lumineuse</td><td>I en candelas (cd)</td><td>Lumière émise dans une direction donnée</td><td>Utilisée dans les courbes photométriques des luminaires</td></tr>\n<tr><td>Éclairement</td><td>E en lux (lx)</td><td>Flux reçu par unité de surface : E = Φ / S</td><td>Bureau : 500 lx ; couloir : 100 lx ; plein soleil : jusqu'à 100 000 lx</td></tr>\n<tr><td>Luminance</td><td>L en cd/m²</td><td>Lumière renvoyée par une surface vers l'œil ; liée à la sensation de brillance et à l'éblouissement</td><td>Utilisée pour l'éclairage public et l'éblouissement</td></tr>\n<tr><td>Efficacité lumineuse</td><td>en lm/W</td><td>Flux émis par watt consommé</td><td>LED actuelles : plus de 100 lm/W</td></tr>\n</tbody>\n</table>\n<p>Les niveaux d'éclairement à atteindre selon l'activité sont donnés par la norme NF EN 12464-1 (éclairage des lieux de travail intérieurs). Le Code du travail fixe par ailleurs des valeurs minimales d'éclairement. On mesure l'éclairement avec un <strong>luxmètre</strong>, cellule posée sur le plan de travail.</p>\n"
      },
      {
       "titre": "Qualité de la lumière",
       "contenu": "\n<p>La quantité de lumière ne suffit pas : sa qualité influence le confort visuel, la santé et la sécurité.</p>\n<ul>\n<li>La <strong>température de couleur</strong>, en kelvins (K), caractérise la teinte de la lumière blanche : environ 2 700 à 3 000 K pour un blanc chaud (ambiance d'habitation, restauration), 4 000 K pour un blanc neutre (bureaux, écoles), 5 000 à 6 500 K pour un blanc froid (industrie, certains commerces).</li>\n<li>L'<strong>indice de rendu des couleurs</strong> (IRC, ou Ra) indique la fidélité avec laquelle une source restitue les couleurs, sur une échelle de 0 à 100. Un IRC d'au moins 80 est généralement exigé dans les lieux de travail ; les activités de contrôle des couleurs (imprimerie, peinture) demandent 90 et plus.</li>\n<li>L'<strong>éblouissement</strong> est limité par le choix de luminaires à optiques adaptées. Il est évalué par l'indice UGR dans les études d'éclairage.</li>\n<li>L'<strong>uniformité</strong> est le rapport entre l'éclairement minimal et l'éclairement moyen sur la zone de travail.</li>\n<li>Le <strong>papillotement</strong> (variation rapide et invisible du flux) peut provoquer fatigue et maux de tête : il dépend de la qualité de l'alimentation électronique des LED.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un luminaire se choisit par son flux, son efficacité, sa température de couleur, son IRC, son indice de protection (IP), sa résistance aux chocs (IK) et sa compatibilité avec le système de gestion prévu.</div>\n"
      },
      {
       "titre": "Les sources et les luminaires LED",
       "contenu": "\n<p>Les sources lumineuses ont beaucoup évolué. Les lampes à incandescence et halogènes classiques ont été retirées du marché européen pour leur faible efficacité ; les tubes fluorescents et lampes à décharge sont progressivement remplacés. La <strong>LED</strong> (diode électroluminescente) est aujourd'hui la technologie dominante en neuf comme en rénovation.</p>\n<table>\n<thead><tr><th>Source</th><th>Efficacité lumineuse indicative</th><th>Points forts</th><th>Points faibles</th></tr></thead>\n<tbody>\n<tr><td>Halogène</td><td>15 à 25 lm/W</td><td>Excellent rendu des couleurs</td><td>Très faible efficacité, forte chaleur</td></tr>\n<tr><td>Fluorescente (tube)</td><td>60 à 100 lm/W</td><td>Bonne efficacité</td><td>Contient du mercure, sensible aux allumages fréquents</td></tr>\n<tr><td>Iodures métalliques</td><td>70 à 110 lm/W</td><td>Fortes puissances (halls, stades)</td><td>Temps de rallumage à chaud, contient du mercure</td></tr>\n<tr><td>LED</td><td>Plus de 100 lm/W</td><td>Efficacité, durée de vie, allumage instantané, gradation facile</td><td>Sensibilité à la chaleur et à la qualité de l'alimentation</td></tr>\n</tbody>\n</table>\n<p>Un luminaire LED comporte un module de LED et un <strong>driver</strong> (alimentation électronique) qui convertit la tension du réseau en courant continu régulé. La durée de vie d'une LED s'exprime par un code du type <strong>L80 à 50 000 h</strong> : après 50 000 heures, le flux est encore au moins égal à 80 % du flux initial.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les drivers de LED absorbent à la mise sous tension un courant d'appel très bref mais très élevé. Lorsque beaucoup de luminaires sont raccordés sur un même circuit, ce courant peut faire déclencher le disjoncteur ou souder les contacts d'un relais. Les fiches techniques des constructeurs indiquent le nombre maximal de luminaires par disjoncteur selon sa courbe et son calibre : il faut les respecter.</div>\n"
      },
      {
       "titre": "Estimer le nombre de luminaires",
       "contenu": "\n<p>Les études d'éclairage sont réalisées par logiciel, mais une méthode simplifiée permet de vérifier un ordre de grandeur. Le flux total nécessaire se calcule par :</p>\n<p><strong>Φ<sub>total</sub> = E × S / (U × M)</strong></p>\n<p>avec E l'éclairement visé (lx), S la surface (m²), U le <strong>facteur d'utilance</strong> (part du flux des luminaires qui atteint réellement le plan de travail, qui dépend de la forme du local, des couleurs des parois et du luminaire) et M le <strong>facteur de maintenance</strong> (qui tient compte de la baisse du flux et de l'encrassement au fil du temps).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> éclairage d'une salle de cours.<br>Données : salle de 8 m × 7 m ; éclairement visé 500 lx ; utilance estimée 0,6 ; facteur de maintenance 0,8 ; dalles LED de 3 400 lm et 28 W.<br>1. Surface : S = 8 × 7 = 56 m².<br>2. Flux total : Φ = 500 × 56 / (0,6 × 0,8) = 28 000 / 0,48 ≈ 58 300 lm.<br>3. Nombre de luminaires : 58 300 / 3 400 ≈ 17,2, arrondi à 18 pour obtenir une implantation régulière (par exemple 3 rangées de 6).<br>4. Puissance installée : 18 × 28 = 504 W, soit 9 W/m² environ.<br>5. Vérification à la réception : mesure au luxmètre en plusieurs points de la salle.</div>\n<p>On complète par l'éclairage du tableau (luminaires asymétriques dédiés) et on répartit les luminaires en rangées parallèles aux fenêtres pour pouvoir commander séparément la rangée proche des baies.</p>\n"
      },
      {
       "titre": "Gérer l'éclairage",
       "contenu": "\n<p>La <strong>gestion de l'éclairage</strong> consiste à n'éclairer que lorsque c'est nécessaire et seulement autant que nécessaire. Elle combine plusieurs fonctions :</p>\n<ul>\n<li><strong>détection de présence ou d'absence</strong> : un détecteur à infrarouge passif (sensible au mouvement de la chaleur corporelle) ou à hyperfréquence allume ou éteint l'éclairage. En détection d'absence, l'allumage reste manuel et l'extinction automatique, ce qui économise davantage ;</li>\n<li><strong>gradation selon la lumière du jour</strong> : un capteur de luminosité réduit le flux des luminaires proches des fenêtres quand l'apport naturel est suffisant ;</li>\n<li><strong>programmation horaire</strong> : extinction générale le soir, scénarios selon l'occupation ;</li>\n<li><strong>scénarios</strong> : présélection de niveaux d'éclairage (projection, réunion, ménage).</li>\n</ul>\n<p>Pour la gradation, plusieurs interfaces existent : <strong>1-10 V</strong> (signal analogique sur deux fils séparés), <strong>DALI</strong> (protocole numérique) et, de plus en plus, des solutions sans fil. Le protocole <strong>DALI</strong> (Digital Addressable Lighting Interface, normalisé par la CEI 62386) relie les luminaires par une ligne de deux fils non polarisée : une ligne DALI peut commander jusqu'à 64 appareils, chacun possédant une adresse, regroupés en 16 groupes avec 16 scènes. Chaque luminaire peut être commandé individuellement et renvoyer son état (lampe en défaut, par exemple).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un plateau de bureaux rénové, l'électricien raccorde les luminaires DALI en boucle avec un câble à cinq conducteurs (phase, neutre, terre et deux fils DALI). Le paramétrage (adressage, groupes, scènes, temporisation des détecteurs) est ensuite réalisé par logiciel. Le dossier des ouvrages exécutés doit contenir la table d'adressage pour faciliter la maintenance.</div>\n"
      },
      {
       "titre": "Réglementation et efficacité énergétique de l'éclairage",
       "contenu": "\n<p>Plusieurs textes encadrent l'éclairage des bâtiments :</p>\n<ul>\n<li>le <strong>Code du travail</strong> impose un éclairage suffisant des locaux de travail et des circulations ;</li>\n<li>la <strong>réglementation environnementale</strong> des bâtiments neufs (RE2020) et la réglementation thermique des bâtiments existants prennent en compte la consommation d'éclairage dans la performance énergétique du bâtiment, ce qui pousse à choisir des luminaires efficaces et pilotés ;</li>\n<li>la réglementation sur les nuisances lumineuses limite les horaires et l'orientation de l'éclairage extérieur et des enseignes ;</li>\n<li>le <strong>règlement européen d'écoconception</strong> fixe des performances minimales pour les sources lumineuses mises sur le marché.</li>\n</ul>\n<p>Le remplacement d'un éclairage fluorescent par un éclairage LED piloté permet souvent de diviser la consommation d'éclairage par deux ou plus. Ce type d'opération peut être éligible aux certificats d'économies d'énergie (CEE), selon des fiches d'opérations standardisées dont les conditions évoluent régulièrement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en rénovation, remplacer seulement les tubes fluorescents par des tubes LED « compatibles » sans modifier le luminaire peut poser des problèmes de compatibilité avec le ballast, de garantie et de conformité du luminaire. La solution la plus sûre est le remplacement du luminaire complet ou l'utilisation d'un kit de rénovation prévu par le fabricant.</div>\n<p>L'électricien est aussi amené à installer l'<strong>éclairage de sécurité</strong>, qui permet l'évacuation en cas de coupure de l'éclairage normal. Ce domaine relève de règles particulières, présentées avec les systèmes de sécurité incendie.</p>\n"
      }
     ],
     "points_cles": [
      "Flux en lumens, éclairement en lux (E = Φ / S), intensité en candelas, luminance en cd/m².",
      "La norme NF EN 12464-1 donne les éclairements à atteindre, par exemple 500 lx dans un bureau.",
      "Température de couleur en kelvins, IRC de 0 à 100 : au moins 80 dans les lieux de travail en général.",
      "Les LED dépassent 100 lm/W ; leur durée de vie s'exprime en code Lxx à un nombre d'heures.",
      "Le courant d'appel des drivers limite le nombre de luminaires par disjoncteur.",
      "Flux total nécessaire : Φ = E × S / (U × M).",
      "La gestion combine détection, gradation selon la lumière du jour, horaires et scénarios.",
      "DALI : bus numérique de deux fils, 64 adresses, 16 groupes, 16 scènes par ligne."
     ],
     "lexique": [
      {
       "terme": "Flux lumineux",
       "def": "Quantité totale de lumière émise par une source, en lumens."
      },
      {
       "terme": "Éclairement",
       "def": "Flux lumineux reçu par unité de surface, en lux."
      },
      {
       "terme": "Luminance",
       "def": "Intensité lumineuse renvoyée par une surface par unité de surface apparente, en cd/m²."
      },
      {
       "terme": "Efficacité lumineuse",
       "def": "Rapport du flux émis à la puissance consommée, en lm/W."
      },
      {
       "terme": "Température de couleur",
       "def": "Teinte d'une lumière blanche exprimée en kelvins."
      },
      {
       "terme": "IRC",
       "def": "Indice de rendu des couleurs, aptitude d'une source à restituer fidèlement les couleurs."
      },
      {
       "terme": "Driver",
       "def": "Alimentation électronique qui fournit un courant régulé aux LED."
      },
      {
       "terme": "Facteur d'utilance",
       "def": "Part du flux des luminaires qui atteint le plan utile."
      },
      {
       "terme": "Facteur de maintenance",
       "def": "Coefficient tenant compte de la perte de flux et de l'encrassement dans le temps."
      },
      {
       "terme": "DALI",
       "def": "Protocole numérique normalisé de commande et de gradation des luminaires."
      }
     ]
    },
    {
     "id": "bmel-convertisseurs-variateurs",
     "titre": "Convertisseurs statiques et variation de vitesse",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Identifier les quatre familles de convertisseurs statiques et leurs usages.",
      "Décrire la structure interne d'un variateur de fréquence.",
      "Expliquer le principe de la commande U/f et ses conséquences sur la vitesse et le couple.",
      "Paramétrer un variateur à partir de la plaque moteur et du cahier des charges.",
      "Appliquer les règles d'installation liées à la compatibilité électromagnétique et à la sécurité."
     ],
     "sections": [
      {
       "titre": "Les convertisseurs statiques",
       "contenu": "\n<p>L'énergie disponible (réseau alternatif 50 Hz, batterie, panneau photovoltaïque) n'a pas toujours la forme dont le récepteur a besoin. Les <strong>convertisseurs statiques</strong> transforment cette énergie à l'aide de composants électroniques de puissance utilisés en interrupteurs : diodes, thyristors, transistors IGBT ou MOSFET.</p>\n<table>\n<thead><tr><th>Conversion</th><th>Nom du convertisseur</th><th>Exemples d'application</th></tr></thead>\n<tbody>\n<tr><td>Alternatif → continu</td><td>Redresseur</td><td>Chargeur de batterie, alimentation d'automate, étage d'entrée d'un variateur</td></tr>\n<tr><td>Continu → alternatif</td><td>Onduleur</td><td>Onduleur photovoltaïque, ASI, étage de sortie d'un variateur</td></tr>\n<tr><td>Continu → continu</td><td>Hacheur</td><td>Alimentation à découpage, régulateur de charge, commande de moteur à courant continu</td></tr>\n<tr><td>Alternatif → alternatif (même fréquence)</td><td>Gradateur</td><td>Variateur de lumière, démarreur progressif, régulation de résistances chauffantes</td></tr>\n</tbody>\n</table>\n<p>Ces convertisseurs ont un très bon rendement (souvent plus de 95 %) car leurs composants fonctionnent en commutation : ils sont soit complètement passants, soit complètement bloqués. En contrepartie, ils produisent des fronts de tension très raides et des courants non sinusoïdaux, sources de perturbations électromagnétiques et d'harmoniques.</p>\n"
      },
      {
       "titre": "Structure d'un variateur de fréquence",
       "contenu": "\n<p>Le <strong>variateur de fréquence</strong> (ou variateur de vitesse pour moteur asynchrone) alimente le moteur avec une tension dont on peut faire varier la fréquence et la valeur. Il comprend trois étages :</p>\n<ol>\n<li>un <strong>redresseur</strong> à diodes, qui transforme la tension alternative du réseau en tension continue ;</li>\n<li>un <strong>bus continu</strong> filtré par des condensateurs ; sous un réseau 400 V, sa tension est d'environ 560 V (valeur crête de la tension composée : 400 × √2) ;</li>\n<li>un <strong>onduleur</strong> à transistors IGBT qui reconstitue un système triphasé de fréquence variable par <strong>modulation de largeur d'impulsions</strong> (MLI, ou PWM en anglais) : la tension de sortie est une suite d'impulsions rectangulaires dont la largeur varie, et le courant dans les bobinages du moteur, lissé par leur inductance, devient presque sinusoïdal.</li>\n</ol>\n<p>Une carte de contrôle gère la commande des transistors, les protections (surintensité, surtension et sous-tension du bus, échauffement du moteur et du variateur) et les entrées-sorties : entrées logiques (marche, sens, vitesses présélectionnées), entrée analogique de consigne (0-10 V ou 4-20 mA), sorties relais (défaut, vitesse atteinte), port de communication (Modbus, Ethernet).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les condensateurs du bus continu restent chargés à une tension dangereuse plusieurs minutes après la mise hors tension du variateur. Avant toute intervention sur le bornier de puissance, il faut attendre le délai indiqué par le constructeur (souvent 5 à 15 minutes) et vérifier l'absence de tension sur le bus continu avec un appareil adapté.</div>\n"
      },
      {
       "titre": "La commande U/f et ses effets",
       "contenu": "\n<p>La vitesse du moteur asynchrone est liée à la fréquence : n<sub>s</sub> = 60 × f / p. En faisant varier la fréquence, on fait varier la vitesse. Mais le flux magnétique dans le moteur dépend du rapport entre la tension et la fréquence. Pour conserver le flux nominal, et donc le couple disponible, le variateur fait varier la tension proportionnellement à la fréquence : c'est la <strong>loi U/f constant</strong>.</p>\n<p>Pour un moteur 400 V / 50 Hz, le rapport vaut 400 / 50 = 8 V/Hz. À 25 Hz, le variateur fournit environ 200 V. Au-delà de 50 Hz, la tension ne peut plus augmenter (elle est limitée par le réseau) : le moteur fonctionne en <strong>survitesse</strong> à flux réduit et son couple disponible diminue.</p>\n<p>Les variateurs modernes proposent aussi un <strong>contrôle vectoriel de flux</strong> qui calcule en temps réel le flux et le couple du moteur. Il offre un couple élevé aux basses vitesses et une meilleure précision de vitesse : il est préféré pour les levages, les convoyeurs chargés et les machines à fort couple de démarrage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la fréquence nécessaire pour une vitesse donnée.<br>Un ventilateur entraîné par un moteur de 1 460 tr/min (plaque, 50 Hz, 2 paires de pôles) doit tourner à 1 000 tr/min.<br>1. Glissement nominal : n<sub>s</sub> = 1 500 tr/min, glissement en vitesse 40 tr/min.<br>2. En négligeant la variation du glissement, la vitesse de synchronisme visée est environ 1 000 + 40 = 1 040 tr/min.<br>3. Fréquence : f = n<sub>s</sub> × p / 60 = 1 040 × 2 / 60 ≈ 34,7 Hz.<br>4. Tension appliquée par le variateur en loi U/f : 8 × 34,7 ≈ 278 V.<br>5. Gain énergétique : pour un ventilateur, la puissance varie environ comme le cube de la vitesse. À 2/3 de la vitesse, la puissance absorbée tombe à environ (2/3)³ ≈ 0,30, soit 30 % de la puissance à pleine vitesse.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur les pompes et ventilateurs, la variation de vitesse remplace avantageusement le réglage par vanne ou registre : c'est l'une des actions d'efficacité énergétique les plus rentables dans le bâtiment et l'industrie.</div>\n"
      },
      {
       "titre": "Paramétrer un variateur",
       "contenu": "\n<p>Le paramétrage se fait par le clavier du variateur, par un terminal déporté ou par un logiciel sur ordinateur. Les paramètres sont regroupés en menus ; leur nom et leur code varient selon les constructeurs, mais on retrouve toujours les mêmes fonctions.</p>\n<table>\n<thead><tr><th>Groupe</th><th>Paramètres</th><th>Origine de la valeur</th></tr></thead>\n<tbody>\n<tr><td>Données moteur</td><td>Tension, fréquence, courant, vitesse, puissance, cos φ nominaux</td><td>Plaque signalétique du moteur</td></tr>\n<tr><td>Protection thermique</td><td>Courant thermique moteur</td><td>Courant nominal de plaque</td></tr>\n<tr><td>Vitesses</td><td>Fréquence minimale (petite vitesse) et maximale (grande vitesse)</td><td>Cahier des charges de la machine</td></tr>\n<tr><td>Rampes</td><td>Temps d'accélération et de décélération</td><td>Inertie de la charge, confort, contraintes mécaniques</td></tr>\n<tr><td>Commande</td><td>Source de la marche (bornier, clavier, réseau), source de la consigne, vitesses présélectionnées</td><td>Schéma de câblage et analyse fonctionnelle</td></tr>\n<tr><td>Type d'arrêt</td><td>Arrêt sur rampe, arrêt en roue libre, freinage par injection de courant continu</td><td>Sécurité et process</td></tr>\n</tbody>\n</table>\n<p>Beaucoup de variateurs proposent une fonction d'<strong>autoréglage</strong> (ou auto-apprentissage) : à l'arrêt, le variateur mesure les caractéristiques électriques du moteur pour optimiser son contrôle. On la lance après avoir saisi les données de plaque.</p>\n<p>Une décélération trop rapide sur une charge à forte inertie fait fonctionner le moteur en <strong>génératrice</strong> : l'énergie remonte vers le bus continu, dont la tension augmente jusqu'au défaut « surtension bus ». On allonge alors la rampe ou l'on ajoute une <strong>résistance de freinage</strong> qui dissipe cette énergie.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> après le remplacement d'un variateur défectueux, le technicien ne recopie pas les paramètres de mémoire : il récupère la sauvegarde des paramètres (fichier du logiciel constructeur ou carte mémoire) ou la fiche de paramétrage du dossier technique, puis la met à jour si une valeur a été modifiée lors de la remise en service.</div>\n"
      },
      {
       "titre": "Installer un variateur : CEM et protections",
       "contenu": "\n<p>Les commutations rapides de l'onduleur produisent des <strong>perturbations électromagnétiques</strong> conduites (par les câbles) et rayonnées. La <strong>compatibilité électromagnétique</strong> (CEM) est l'aptitude d'un équipement à fonctionner sans perturber son environnement et sans être perturbé. Les règles d'installation sont décrites dans la notice du variateur ; les principales sont :</p>\n<ul>\n<li>utiliser un <strong>câble moteur blindé</strong>, dont le blindage est raccordé à la masse sur 360° aux deux extrémités (colliers ou presse-étoupes CEM) ;</li>\n<li>séparer les câbles de puissance des câbles de commande et de communication (distance minimale, croisement à angle droit) ;</li>\n<li>monter le variateur sur une <strong>plaque de fond métallique non peinte</strong> reliée à la terre, qui sert de plan de masse ;</li>\n<li>installer le filtre réseau prévu par le constructeur lorsque l'environnement l'exige ;</li>\n<li>respecter la longueur maximale de câble moteur, au-delà de laquelle on ajoute une self ou un filtre de sortie.</li>\n</ul>\n<p>Côté protection des personnes, les variateurs produisent des <strong>courants de fuite</strong> vers la terre (par les filtres et les capacités des câbles) qui comportent des composantes continues et haute fréquence. Un différentiel classique de type AC peut ne pas les détecter ou déclencher de manière intempestive : la notice précise le type de différentiel à utiliser (souvent type B pour les variateurs triphasés, ou type F pour certains variateurs monophasés).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> il ne faut jamais mesurer l'isolement d'un moteur avec un mégohmmètre sans l'avoir déconnecté du variateur : la tension d'essai peut détruire l'électronique de sortie. De même, on ne place pas de contacteur entre le variateur et le moteur sauf si la notice le prévoit, et jamais pour couper en charge.</div>\n"
      },
      {
       "titre": "Autres moteurs commandés électroniquement",
       "contenu": "\n<p>Le moteur asynchrone n'est pas le seul moteur rencontré. L'électronique de puissance permet d'utiliser d'autres technologies :</p>\n<ul>\n<li>le <strong>moteur synchrone à aimants permanents</strong> : le rotor porte des aimants et tourne exactement à la vitesse du champ. Plus compact et plus efficace que l'asynchrone, il équipe les véhicules électriques, les circulateurs de chauffage haute efficacité et les servomoteurs. Il ne peut fonctionner qu'avec un variateur adapté ;</li>\n<li>le <strong>moteur à courant continu</strong> : commandé par un hacheur, il est encore présent dans les petits équipements et quelques anciennes machines ;</li>\n<li>le <strong>moteur pas à pas</strong> : il avance d'un angle fixe à chaque impulsion de commande, ce qui permet un positionnement sans capteur (vannes motorisées, petits axes) ;</li>\n<li>le <strong>servomoteur</strong> : moteur associé à un capteur de position (codeur) et à un variateur en boucle fermée, pour les positionnements précis en automatisme.</li>\n</ul>\n<p>Pour tous ces moteurs, la démarche du technicien reste la même : lire la plaque et la notice, vérifier la compatibilité moteur-variateur, paramétrer, contrôler les grandeurs à la mise en service et enregistrer les réglages dans le dossier de l'installation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la classe de rendement d'un moteur (IE2, IE3, IE4) et l'utilisation d'un variateur sur les charges à débit variable sont deux leviers majeurs pour réduire la consommation des moteurs, qui représentent une grande part de l'électricité consommée par l'industrie.</div>\n"
      }
     ],
     "points_cles": [
      "Redresseur, onduleur, hacheur et gradateur : les quatre familles de convertisseurs statiques.",
      "Un variateur de fréquence comprend redresseur, bus continu (environ 560 V sous 400 V) et onduleur MLI.",
      "La loi U/f constant conserve le flux et le couple ; au-delà de 50 Hz, le couple disponible diminue.",
      "Les données de plaque moteur sont les premiers paramètres à saisir, suivies des vitesses et des rampes.",
      "Une décélération trop rapide provoque un défaut de surtension du bus : rampe plus longue ou résistance de freinage.",
      "Câble moteur blindé raccordé sur 360°, séparation puissance-commande, plan de masse : règles de base de la CEM.",
      "Le type de différentiel compatible avec un variateur est imposé par sa notice (souvent type B en triphasé).",
      "Attendre la décharge du bus continu et vérifier l'absence de tension avant d'intervenir."
     ],
     "lexique": [
      {
       "terme": "Convertisseur statique",
       "def": "Dispositif électronique qui modifie la forme de l'énergie électrique sans pièce en mouvement."
      },
      {
       "terme": "IGBT",
       "def": "Transistor de puissance utilisé comme interrupteur rapide dans les onduleurs."
      },
      {
       "terme": "Bus continu",
       "def": "Étage intermédiaire d'un variateur, en tension continue filtrée par des condensateurs."
      },
      {
       "terme": "MLI",
       "def": "Modulation de largeur d'impulsions : technique de création d'une tension alternative par impulsions de largeur variable."
      },
      {
       "terme": "Loi U/f",
       "def": "Commande qui fait varier la tension proportionnellement à la fréquence pour garder le flux constant."
      },
      {
       "terme": "Contrôle vectoriel",
       "def": "Mode de commande calculant flux et couple en temps réel pour de meilleures performances à basse vitesse."
      },
      {
       "terme": "Rampe",
       "def": "Durée programmée pour passer de l'arrêt à la vitesse maximale, ou l'inverse."
      },
      {
       "terme": "Résistance de freinage",
       "def": "Résistance qui dissipe l'énergie renvoyée par le moteur lors des décélérations."
      },
      {
       "terme": "CEM",
       "def": "Compatibilité électromagnétique : capacité à fonctionner sans perturber ni être perturbé."
      },
      {
       "terme": "Autoréglage",
       "def": "Fonction du variateur qui mesure les caractéristiques du moteur pour optimiser sa commande."
      }
     ]
    },
    {
     "id": "bmel-production-locale-irve",
     "titre": "Production photovoltaïque, stockage et recharge des véhicules électriques",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Exploiter les caractéristiques électriques d'un module photovoltaïque et leur variation avec la température.",
      "Vérifier la compatibilité entre une chaîne de modules et un onduleur.",
      "Distinguer les modes de valorisation de l'énergie produite : vente totale, autoconsommation avec vente du surplus, autoconsommation collective.",
      "Décrire les éléments d'un système de stockage par batteries et ses grandeurs.",
      "Identifier les exigences d'une infrastructure de recharge de véhicules électriques."
     ],
     "sections": [
      {
       "titre": "Caractéristiques électriques d'un module photovoltaïque",
       "contenu": "\n<p>Le cours de seconde a présenté les éléments d'une installation photovoltaïque. Pour réaliser ou contrôler une installation, il faut maintenant exploiter la <strong>fiche technique</strong> d'un module. Ses valeurs sont données dans les <strong>conditions d'essai standard</strong> (STC) : éclairement de 1 000 W/m², température des cellules de 25 °C et spectre lumineux normalisé.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Symbole</th><th>Exemple</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Puissance crête</td><td>P<sub>max</sub> (Wc)</td><td>420 Wc</td><td>Puissance maximale en conditions STC</td></tr>\n<tr><td>Tension en circuit ouvert</td><td>V<sub>oc</sub></td><td>37,5 V</td><td>Tension à vide, la plus élevée du module</td></tr>\n<tr><td>Courant de court-circuit</td><td>I<sub>sc</sub></td><td>14,0 A</td><td>Courant maximal, bornes court-circuitées</td></tr>\n<tr><td>Tension au point de puissance maximale</td><td>V<sub>mpp</sub></td><td>31,5 V</td><td>Tension de fonctionnement optimale</td></tr>\n<tr><td>Courant au point de puissance maximale</td><td>I<sub>mpp</sub></td><td>13,3 A</td><td>Courant de fonctionnement optimal</td></tr>\n<tr><td>Coefficient de température de V<sub>oc</sub></td><td>β</td><td>−0,26 %/°C</td><td>Variation de la tension avec la température</td></tr>\n<tr><td>Tension maximale du système</td><td>—</td><td>1 500 V DC</td><td>Tension maximale admise entre bornes et cadre</td></tr>\n</tbody>\n</table>\n<p>Le courant produit est presque proportionnel à l'éclairement ; la tension varie peu avec l'éclairement mais <strong>diminue quand la température augmente</strong>. Par un matin d'hiver froid et ensoleillé, la tension à vide d'une chaîne est donc plus élevée qu'en conditions STC : c'est ce cas défavorable qui sert à vérifier la tenue de l'onduleur.</p>\n"
      },
      {
       "titre": "Associer modules et onduleur",
       "contenu": "\n<p>Les modules sont reliés <strong>en série</strong> pour former une <strong>chaîne</strong> (les tensions s'additionnent) ; plusieurs chaînes identiques peuvent être reliées <strong>en parallèle</strong> (les courants s'additionnent). L'onduleur raccordé au réseau comporte un ou plusieurs <strong>trackers MPPT</strong> (suivi du point de puissance maximale), qui ajustent en permanence le point de fonctionnement pour extraire le maximum de puissance.</p>\n<p>Le dimensionnement vérifie trois conditions, à partir des fiches du module et de l'onduleur :</p>\n<ol>\n<li>la tension à vide maximale de la chaîne, à la température minimale du site, reste inférieure à la tension d'entrée maximale de l'onduleur ;</li>\n<li>la tension de fonctionnement de la chaîne, à la température maximale des cellules, reste dans la plage MPPT de l'onduleur ;</li>\n<li>le courant de la chaîne (ou des chaînes en parallèle) reste inférieur au courant d'entrée maximal admis par le tracker.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier une chaîne de 12 modules sur un onduleur.<br>Module : V<sub>oc</sub> = 37,5 V ; β = −0,26 %/°C ; I<sub>sc</sub> = 14,0 A. Onduleur : tension d'entrée maximale 600 V ; courant maximal par tracker 16 A. Température minimale du site retenue : −10 °C.<br>1. Écart de température par rapport aux STC : −10 − 25 = −35 °C.<br>2. Variation de V<sub>oc</sub> : −0,26 % × (−35) = +9,1 %.<br>3. V<sub>oc</sub> d'un module à −10 °C : 37,5 × 1,091 ≈ 40,9 V.<br>4. V<sub>oc</sub> de la chaîne : 12 × 40,9 ≈ 491 V, inférieure à 600 V : condition respectée.<br>5. Courant : une seule chaîne, I<sub>sc</sub> = 14,0 A, inférieur à 16 A : condition respectée.<br>6. On vérifierait de même que la tension MPP à chaud reste dans la plage MPPT indiquée par l'onduleur.</div>\n<p>Les règles de conception et de protection des installations photovoltaïques raccordées au réseau sont regroupées dans le guide UTE C 15-712-1 : choix des câbles et connecteurs pour courant continu, interrupteurs-sectionneurs DC, parafoudres côté continu et côté alternatif, protection des chaînes en parallèle, liaison équipotentielle des cadres, signalétique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un champ photovoltaïque éclairé produit une tension dès qu'il reçoit de la lumière : on ne peut pas le « consigner » en ouvrant un disjoncteur. Le courant continu entretient aussi facilement un arc électrique. On ne débranche jamais un connecteur DC en charge : on coupe d'abord côté alternatif, puis on ouvre l'interrupteur-sectionneur DC.</div>\n"
      },
      {
       "titre": "Valoriser l'énergie produite",
       "contenu": "\n<p>Une installation photovoltaïque raccordée au réseau peut fonctionner selon plusieurs modèles :</p>\n<ul>\n<li><strong>vente totale</strong> : toute l'énergie produite est injectée sur le réseau et vendue ;</li>\n<li><strong>autoconsommation avec vente du surplus</strong> : le bâtiment consomme d'abord sa production ; seule l'énergie non consommée sur le moment est injectée et vendue ;</li>\n<li><strong>autoconsommation totale</strong> : aucune injection ; l'onduleur limite sa production à la consommation instantanée (fonction d'<strong>injection zéro</strong>) ;</li>\n<li><strong>autoconsommation collective</strong> : plusieurs consommateurs proches partagent la production d'une ou plusieurs installations, selon des règles de répartition gérées par une personne morale organisatrice et le gestionnaire du réseau.</li>\n</ul>\n<p>Deux indicateurs mesurent l'intérêt de l'autoconsommation :</p>\n<ul>\n<li>le <strong>taux d'autoconsommation</strong> : part de la production consommée sur place ;</li>\n<li>le <strong>taux d'autoproduction</strong> (ou de couverture) : part de la consommation couverte par la production locale.</li>\n</ul>\n<p>Pour augmenter le taux d'autoconsommation, on déplace les consommations vers les heures ensoleillées : programmation du chauffe-eau, recharge du véhicule en milieu de journée, gestionnaire d'énergie qui pilote les charges selon la production mesurée.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les conditions tarifaires d'achat du surplus, les primes à l'investissement et les démarches de raccordement évoluent régulièrement. L'installateur s'appuie sur les informations à jour du gestionnaire de réseau et des pouvoirs publics avant de chiffrer une offre. Pour bénéficier des aides publiques, le client doit en général faire appel à une entreprise titulaire d'une qualification reconnue (signe RGE).</div>\n"
      },
      {
       "titre": "Le stockage par batteries",
       "contenu": "\n<p>Un <strong>système de stockage</strong> permet de conserver l'énergie produite en journée pour l'utiliser plus tard, ou d'assurer une alimentation de secours. Il comprend des batteries, un <strong>système de gestion des batteries</strong> (BMS) qui surveille la tension et la température de chaque élément, et un convertisseur (onduleur hybride ou onduleur-chargeur).</p>\n<p>Les grandeurs essentielles d'une batterie sont :</p>\n<ul>\n<li>la <strong>capacité énergétique</strong>, en kWh, produit de la tension nominale par la capacité en ampères-heures (Ah) ;</li>\n<li>la <strong>profondeur de décharge</strong> (DoD) autorisée : part de la capacité réellement utilisable sans dégrader la batterie ;</li>\n<li>la <strong>puissance</strong> de charge et de décharge, en kW ;</li>\n<li>le <strong>nombre de cycles</strong> garantis et le <strong>rendement</strong> aller-retour.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> énergie utilisable d'une batterie domestique.<br>Données : batterie lithium-fer-phosphate 51,2 V, 100 Ah, profondeur de décharge 90 %, rendement aller-retour 92 %.<br>1. Capacité nominale : 51,2 × 100 = 5 120 Wh, soit 5,12 kWh.<br>2. Énergie utilisable : 5,12 × 0,9 ≈ 4,6 kWh.<br>3. Énergie restituée en tenant compte du rendement : 4,6 × 0,92 ≈ 4,2 kWh.<br>4. Si la consommation du soir est de 6 kWh, la batterie en couvre environ 70 % ; le reste est pris au réseau.</div>\n<p>Les batteries lithium imposent des précautions : local ou emplacement ventilé et protégé, respect des distances et des températures indiquées par le fabricant, protection contre les courts-circuits côté continu, signalétique. Lors de la mise en service, on paramètre le type de batterie, les seuils de charge et de décharge et le mode de fonctionnement (autoconsommation, secours, pilotage tarifaire).</p>\n"
      },
      {
       "titre": "Les infrastructures de recharge de véhicules électriques",
       "contenu": "\n<p>Une <strong>infrastructure de recharge pour véhicules électriques</strong> (IRVE) comprend les points de recharge, leurs circuits d'alimentation, leurs protections et éventuellement un système de supervision. La norme internationale définit quatre <strong>modes de recharge</strong> :</p>\n<table>\n<thead><tr><th>Mode</th><th>Description</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Mode 1</td><td>Prise domestique sans dispositif de contrôle</td><td>Petits véhicules légers ; à éviter pour les voitures</td></tr>\n<tr><td>Mode 2</td><td>Prise domestique ou industrielle avec un boîtier de contrôle et de protection intégré au câble</td><td>Recharge occasionnelle lente</td></tr>\n<tr><td>Mode 3</td><td>Borne dédiée (boîtier mural ou borne) avec communication entre la borne et le véhicule</td><td>Recharge normale en courant alternatif, de 3,7 kW à 22 kW</td></tr>\n<tr><td>Mode 4</td><td>Chargeur en courant continu, le convertisseur est dans la borne</td><td>Recharge rapide sur les aires de service</td></tr>\n</tbody>\n</table>\n<p>En courant alternatif, la puissance dépend du courant et du nombre de phases : 7,4 kW en monophasé 32 A, 11 kW en triphasé 16 A, 22 kW en triphasé 32 A (à condition que le chargeur embarqué du véhicule l'accepte). La prise standardisée en Europe côté borne est la <strong>prise de type 2</strong>.</p>\n<p>Les exigences essentielles sont :</p>\n<ul>\n<li>un <strong>circuit dédié</strong> par point de recharge, avec sa propre protection contre les surintensités ;</li>\n<li>une protection différentielle 30 mA adaptée aux courants de défaut à composante continue que peut produire le véhicule : différentiel de type B, ou type A associé à un dispositif de détection des courants continus, selon les indications du fabricant de la borne ;</li>\n<li>la vérification préalable de la puissance disponible, avec si nécessaire un <strong>délestage</strong> ou une gestion dynamique de la charge qui réduit la puissance de recharge quand le reste du bâtiment consomme beaucoup ;</li>\n<li>pour les points de recharge d'une puissance supérieure à 3,7 kW, l'installation par un professionnel titulaire d'une <strong>qualification IRVE</strong>, exigée par la réglementation.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une borne de recharge est un récepteur de forte puissance utilisé pendant de longues durées. Le dimensionnement du circuit et la gestion de la puissance disponible sont aussi importants que la pose de la borne elle-même.</div>\n"
      }
     ],
     "points_cles": [
      "Les caractéristiques d'un module sont données en conditions STC : 1 000 W/m² et 25 °C.",
      "La tension d'un module augmente quand la température baisse : on vérifie l'onduleur à la température minimale.",
      "Chaîne en série : les tensions s'additionnent ; chaînes en parallèle : les courants s'additionnent.",
      "Le guide UTE C 15-712-1 regroupe les règles des installations photovoltaïques raccordées au réseau.",
      "Un champ PV éclairé est toujours sous tension ; on ne déconnecte jamais un connecteur DC en charge.",
      "Taux d'autoconsommation et taux d'autoproduction mesurent l'intérêt d'une installation en autoconsommation.",
      "Énergie utilisable d'une batterie : capacité × profondeur de décharge, puis rendement.",
      "IRVE en mode 3 : circuit dédié, différentiel adapté aux défauts continus, gestion de puissance, qualification au-delà de 3,7 kW."
     ],
     "lexique": [
      {
       "terme": "STC",
       "def": "Conditions d'essai standard des modules : 1 000 W/m², 25 °C, spectre normalisé."
      },
      {
       "terme": "Wc",
       "def": "Watt-crête : puissance d'un module en conditions STC."
      },
      {
       "terme": "Voc",
       "def": "Tension en circuit ouvert d'un module ou d'une chaîne."
      },
      {
       "terme": "MPPT",
       "def": "Suivi du point de puissance maximale réalisé par l'onduleur."
      },
      {
       "terme": "Chaîne",
       "def": "Ensemble de modules photovoltaïques reliés en série."
      },
      {
       "terme": "Autoconsommation",
       "def": "Consommation sur place de l'énergie produite par une installation locale."
      },
      {
       "terme": "BMS",
       "def": "Système électronique de gestion et de protection des éléments d'une batterie."
      },
      {
       "terme": "Profondeur de décharge",
       "def": "Part de la capacité d'une batterie utilisable sans la dégrader."
      },
      {
       "terme": "IRVE",
       "def": "Infrastructure de recharge pour véhicules électriques."
      },
      {
       "terme": "Mode 3",
       "def": "Recharge en courant alternatif sur borne dédiée communiquant avec le véhicule."
      },
      {
       "terme": "Délestage",
       "def": "Coupure ou réduction temporaire de certaines charges pour ne pas dépasser la puissance disponible."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Chaîne d'information et environnements connectés",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmel-automatismes",
     "titre": "Capteurs, automates programmables et GRAFCET",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Situer capteurs, unité de traitement et pré-actionneurs dans la chaîne d'information et d'énergie d'un système automatisé.",
      "Choisir et raccorder un détecteur TOR (PNP ou NPN) ou un capteur analogique (4-20 mA, 0-10 V).",
      "Décrire l'architecture d'un automate programmable et le cycle de scrutation.",
      "Lire et compléter un GRAFCET simple : étapes, transitions, réceptivités, actions.",
      "Traduire une équation logique simple en langage à contacts."
     ],
     "sections": [
      {
       "titre": "La chaîne d'information d'un système automatisé",
       "contenu": "\n<p>Un système automatisé (portail, ventilation, station de pompage, convoyeur, éclairage piloté) se décrit en deux chaînes. La <strong>chaîne d'information</strong> acquiert des informations (capteurs, boutons), les traite (automate, module domotique, régulateur) et communique (voyants, écran, réseau). La <strong>chaîne d'énergie</strong> alimente, distribue (pré-actionneurs : contacteurs, relais, variateurs, électrovannes), convertit (actionneurs : moteurs, vérins, résistances) et transmet l'énergie à la matière d'œuvre.</p>\n<p>Le lien entre les deux chaînes se fait par les <strong>ordres</strong> envoyés par l'unité de traitement aux pré-actionneurs. Dans une armoire électrique, on distingue ainsi le circuit de <strong>commande</strong> (souvent en 24 V continu) et le circuit de <strong>puissance</strong> (230/400 V).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> lors d'un dépannage, identifier dans quelle chaîne se situe le défaut (information ou énergie) permet de choisir les bonnes mesures : signaux 24 V et états d'entrées de l'automate d'un côté, tensions et courants de puissance de l'autre.</div>\n"
      },
      {
       "titre": "Capteurs et détecteurs",
       "contenu": "\n<p>Un <strong>détecteur</strong> délivre une information <strong>tout ou rien</strong> (TOR) : présence ou absence, seuil atteint ou non. Un <strong>capteur analogique</strong> délivre un signal proportionnel à une grandeur (température, pression, niveau, débit).</p>\n<table>\n<thead><tr><th>Technologie</th><th>Principe</th><th>Usage typique</th></tr></thead>\n<tbody>\n<tr><td>Interrupteur de position (fin de course)</td><td>Contact mécanique actionné par l'objet</td><td>Position ouverte ou fermée d'un portail</td></tr>\n<tr><td>Détecteur inductif</td><td>Détection des objets métalliques sans contact, à faible distance</td><td>Position d'une pièce métallique, comptage</td></tr>\n<tr><td>Détecteur capacitif</td><td>Détection de tous matériaux, y compris liquides et poudres</td><td>Niveau dans une trémie</td></tr>\n<tr><td>Détecteur photoélectrique</td><td>Faisceau lumineux interrompu ou réfléchi</td><td>Cellules de sécurité de portail, comptage de colis</td></tr>\n<tr><td>Détecteur à infrarouge passif</td><td>Variation du rayonnement thermique</td><td>Détection de présence pour l'éclairage, alarme</td></tr>\n<tr><td>Sonde de température Pt100</td><td>Résistance variant avec la température</td><td>Régulation de chauffage, surveillance de process</td></tr>\n</tbody>\n</table>\n<p>Les détecteurs électroniques à trois fils (alimentation + et −, sortie) existent en deux versions :</p>\n<ul>\n<li><strong>PNP</strong> : la sortie fournit le + 24 V à la charge quand le détecteur est actif. C'est le cas le plus courant en Europe, avec des entrées d'automate de type « logique positive » ;</li>\n<li><strong>NPN</strong> : la sortie relie la charge au 0 V quand le détecteur est actif.</li>\n</ul>\n<p>Les capteurs analogiques transmettent le plus souvent un signal <strong>4-20 mA</strong> (le 4 mA correspond au début d'échelle, ce qui permet de détecter une rupture de câble : un courant nul signale un défaut) ou <strong>0-10 V</strong>, plus sensible aux parasites et aux chutes de tension sur de grandes longueurs.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> convertir un signal 4-20 mA en grandeur physique.<br>Un capteur de pression a une étendue de mesure de 0 à 10 bar, signal 4-20 mA. On mesure 13,6 mA.<br>1. Étendue du signal : 20 − 4 = 16 mA pour 10 bar, soit 0,625 bar par mA.<br>2. Signal utile : 13,6 − 4 = 9,6 mA.<br>3. Pression : 9,6 × 0,625 = 6 bar.<br>4. Vérification : à 4 mA on a 0 bar, à 20 mA on a 10 bar ; 6 bar est bien dans l'étendue.</div>\n"
      },
      {
       "titre": "L'automate programmable industriel",
       "contenu": "\n<p>L'<strong>automate programmable industriel</strong> (API) est un calculateur robuste conçu pour l'environnement industriel. Il comprend :</p>\n<ul>\n<li>une <strong>alimentation</strong> (souvent 24 V continu) ;</li>\n<li>une <strong>unité centrale</strong> (processeur et mémoires) qui exécute le programme ;</li>\n<li>des <strong>modules d'entrées</strong> TOR et analogiques, reliés aux capteurs ;</li>\n<li>des <strong>modules de sorties</strong> à relais (polyvalentes, pour courant alternatif ou continu) ou à transistors (rapides, en 24 V continu), reliées aux pré-actionneurs ;</li>\n<li>des <strong>ports de communication</strong> (Ethernet, liaison série) pour la programmation, la supervision et le dialogue avec d'autres équipements.</li>\n</ul>\n<p>L'automate fonctionne selon un <strong>cycle de scrutation</strong> répété en permanence, de l'ordre de quelques millisecondes : lecture de toutes les entrées et mémorisation de leur état, exécution du programme, mise à jour de toutes les sorties. Une information plus brève qu'un cycle peut donc ne pas être vue : on utilise alors des entrées rapides ou des modules de comptage.</p>\n<p>Dans le bâtiment, on rencontre aussi des <strong>modules logiques programmables</strong> (petits automates à écran intégré) et des contrôleurs de GTB qui reprennent les mêmes principes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'arrêt d'urgence et les fonctions de sécurité des machines ne doivent pas dépendre uniquement du programme d'un automate standard. Ils sont réalisés par câblage direct (contact à ouverture coupant l'alimentation des pré-actionneurs) ou par un module ou automate de sécurité dédié, conçu selon les normes de sécurité des machines.</div>\n"
      },
      {
       "titre": "Décrire le fonctionnement avec le GRAFCET",
       "contenu": "\n<p>Le <strong>GRAFCET</strong> (graphe fonctionnel de commande étape-transition, normalisé par la NF EN 60848) décrit le comportement attendu d'un système séquentiel. Il se compose :</p>\n<ul>\n<li>d'<strong>étapes</strong>, représentées par des carrés numérotés ; l'étape initiale, active au démarrage, a un double carré ;</li>\n<li>d'<strong>actions</strong> associées aux étapes, écrites dans des rectangles à droite de l'étape (par exemple « KM1 » pour commander un contacteur) ;</li>\n<li>de <strong>transitions</strong>, traits horizontaux entre les étapes, auxquelles est associée une <strong>réceptivité</strong> : condition logique qui doit être vraie pour franchir la transition (par exemple « dcy · fc_ouvert », départ cycle ET fin de course d'ouverture) ;</li>\n<li>de <strong>liaisons orientées</strong> qui relient étapes et transitions, de haut en bas sauf indication contraire par une flèche.</li>\n</ul>\n<p>Règle d'évolution essentielle : une transition est franchie lorsque l'étape qui la précède est active <strong>et</strong> que sa réceptivité est vraie ; l'étape suivante devient alors active et la précédente est désactivée.</p>\n<p>Exemple : cycle d'un portail coulissant.</p>\n<table>\n<thead><tr><th>Étape</th><th>Action</th><th>Réceptivité pour quitter l'étape</th></tr></thead>\n<tbody>\n<tr><td>0 (initiale) : portail fermé, attente</td><td>Aucune</td><td>Commande d'ouverture (télécommande ou bouton)</td></tr>\n<tr><td>1 : ouverture</td><td>KM1 (moteur sens ouverture) et feu clignotant</td><td>Fin de course « ouvert » actionné</td></tr>\n<tr><td>2 : temporisation</td><td>Lancement d'une temporisation de 30 s</td><td>Fin de la temporisation</td></tr>\n<tr><td>3 : fermeture</td><td>KM2 (moteur sens fermeture) et feu clignotant</td><td>Fin de course « fermé » actionné : retour à l'étape 0</td></tr>\n</tbody>\n</table>\n<p>Dans la réalité, on ajoute une divergence : si la cellule photoélectrique est coupée pendant la fermeture, le portail se rouvre. Le GRAFCET s'enrichit alors d'une transition supplémentaire qui ramène de l'étape 3 vers l'étape 1.</p>\n"
      },
      {
       "titre": "Programmer : du GRAFCET au langage à contacts",
       "contenu": "\n<p>La norme CEI 61131-3 définit plusieurs langages de programmation des automates : le <strong>langage à contacts</strong> (LD, ou ladder), les <strong>blocs fonctionnels</strong> (FBD), le <strong>texte structuré</strong> (ST) et le <strong>diagramme fonctionnel en séquence</strong> (SFC), proche du GRAFCET. Le langage à contacts, qui ressemble à un schéma électrique tourné de 90°, reste très utilisé en maintenance car il est lisible par les électriciens.</p>\n<p>Dans un réseau ladder, on retrouve :</p>\n<ul>\n<li>des <strong>contacts</strong> à fermeture (vrai quand l'entrée ou le bit est à 1) et à ouverture (vrai quand il est à 0) ;</li>\n<li>des <strong>bobines</strong> qui pilotent une sortie ou un bit interne ;</li>\n<li>des blocs fonctions : temporisations, compteurs, comparaisons.</li>\n</ul>\n<p>Des contacts en série réalisent une fonction ET ; des contacts en parallèle réalisent une fonction OU.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> programmer une marche-arrêt avec auto-maintien.<br>Cahier des charges : un bouton marche S1 (entrée I0.1, contact à fermeture) démarre une pompe KM1 (sortie Q0.0) ; un bouton arrêt S0 (entrée I0.0, câblé avec un contact à ouverture) et le contact du relais thermique F2 (entrée I0.2, contact à ouverture) l'arrêtent.<br>1. Équation : KM1 = (S1 + KM1) · S0 · F2, où S0 et F2 valent 1 quand tout est normal (contacts à ouverture fermés).<br>2. Réseau ladder : en parallèle, un contact à fermeture I0.1 et un contact à fermeture Q0.0 (auto-maintien) ; en série, un contact à fermeture I0.0 et un contact à fermeture I0.2 ; puis la bobine Q0.0.<br>3. Remarque : on programme I0.0 avec un contact à fermeture parce que le bouton physique est câblé à ouverture. Ainsi, une rupture du fil d'arrêt provoque l'arrêt : c'est une sécurité positive.<br>4. Test : forcer chaque entrée et observer l'état de la sortie dans le logiciel en mode visualisation.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un site, la modification d'un programme d'automate se fait toujours après sauvegarde de la version en service. La nouvelle version est datée, commentée et archivée dans le dossier technique, et la modification est signalée à l'exploitant.</div>\n"
      },
      {
       "titre": "Raccorder et tester les entrées-sorties",
       "contenu": "\n<p>La mise en service d'un automate commence par le <strong>test des entrées-sorties</strong>, avant même de lancer le programme complet :</p>\n<ol>\n<li>vérifier l'alimentation 24 V et la polarité des communs d'entrées et de sorties ;</li>\n<li>actionner chaque capteur et contrôler l'allumage de la LED de l'entrée correspondante sur l'automate et dans le logiciel ;</li>\n<li>forcer chaque sortie, puissance consignée ou machine en sécurité, et vérifier que le bon pré-actionneur réagit ;</li>\n<li>vérifier les entrées analogiques en comparant la valeur lue à une mesure de référence (calibrateur ou appareil étalon) ;</li>\n<li>consigner les résultats dans une fiche de tests (liste des entrées-sorties avec repère, adresse, désignation et case de validation).</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> forcer une sortie d'automate met réellement en marche l'actionneur associé. Avant tout forçage, il faut s'assurer que personne ne se trouve dans la zone dangereuse et que le mouvement commandé ne peut rien endommager.</div>\n"
      }
     ],
     "points_cles": [
      "La chaîne d'information acquiert, traite et communique ; la chaîne d'énergie alimente, distribue, convertit et transmet.",
      "Un détecteur TOR donne un état ; un capteur analogique donne une valeur, souvent en 4-20 mA.",
      "En 4-20 mA, un courant nul révèle une coupure du câble.",
      "Un détecteur PNP fournit le + 24 V à l'entrée lorsqu'il est actif.",
      "L'automate lit les entrées, exécute le programme puis écrit les sorties, en boucle.",
      "Une transition GRAFCET est franchie si l'étape amont est active et la réceptivité vraie.",
      "En ladder : contacts en série = ET, contacts en parallèle = OU.",
      "Les fonctions de sécurité ne reposent pas sur le seul programme d'un automate standard."
     ],
     "lexique": [
      {
       "terme": "TOR",
       "def": "Tout ou rien : information à deux états."
      },
      {
       "terme": "Détecteur PNP",
       "def": "Détecteur électronique dont la sortie fournit le potentiel positif à la charge lorsqu'il est actif."
      },
      {
       "terme": "4-20 mA",
       "def": "Signal analogique en courant, où 4 mA correspond au début et 20 mA à la fin de l'étendue de mesure."
      },
      {
       "terme": "API",
       "def": "Automate programmable industriel."
      },
      {
       "terme": "Cycle de scrutation",
       "def": "Boucle de lecture des entrées, exécution du programme et mise à jour des sorties d'un automate."
      },
      {
       "terme": "GRAFCET",
       "def": "Graphe normalisé décrivant le fonctionnement séquentiel d'un système par étapes et transitions."
      },
      {
       "terme": "Réceptivité",
       "def": "Condition logique associée à une transition du GRAFCET."
      },
      {
       "terme": "Langage à contacts",
       "def": "Langage de programmation graphique des automates proche d'un schéma électrique."
      },
      {
       "terme": "Forçage",
       "def": "Action d'imposer manuellement l'état d'une entrée ou d'une sortie d'automate pour un test."
      },
      {
       "terme": "Sécurité positive",
       "def": "Conception où une rupture ou une perte d'alimentation conduit à l'état le plus sûr."
      }
     ]
    },
    {
     "id": "bmel-reseaux-communication",
     "titre": "Réseaux de communication : adressage IP, câblage structuré et fibre optique",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Configurer l'adresse IP, le masque et la passerelle d'un équipement connecté.",
      "Déterminer si deux équipements appartiennent au même réseau.",
      "Décrire l'architecture d'un câblage structuré tertiaire et les tests de recette associés.",
      "Identifier les éléments d'un raccordement en fibre optique et calculer un bilan de liaison.",
      "Situer les bus de terrain (Modbus) parmi les réseaux d'un bâtiment ou d'une installation."
     ],
     "sections": [
      {
       "titre": "Les couches d'un réseau",
       "contenu": "\n<p>Les équipements électriques sont de plus en plus souvent <strong>communicants</strong> : compteurs, onduleurs photovoltaïques, bornes de recharge, variateurs, automates, caméras, contrôleurs d'éclairage. L'électricien doit savoir les raccorder et les rendre accessibles sur le réseau.</p>\n<p>Pour organiser la communication, on décrit un réseau en <strong>couches</strong> superposées, chacune rendant un service à la suivante. Le modèle de référence OSI en compte sept ; en pratique, on retient quatre niveaux :</p>\n<table>\n<thead><tr><th>Niveau</th><th>Rôle</th><th>Exemples</th><th>Matériel associé</th></tr></thead>\n<tbody>\n<tr><td>Physique</td><td>Transmettre des bits sur un support</td><td>Câble cuivre catégorie 6, fibre optique, radio</td><td>Câbles, connecteurs, panneaux de brassage</td></tr>\n<tr><td>Liaison</td><td>Échanger des trames entre équipements voisins, identifiés par leur adresse MAC</td><td>Ethernet, Wi-Fi</td><td>Commutateur (switch)</td></tr>\n<tr><td>Réseau</td><td>Acheminer les paquets entre réseaux, grâce à l'adresse IP</td><td>IPv4, IPv6</td><td>Routeur</td></tr>\n<tr><td>Application</td><td>Fournir le service à l'utilisateur</td><td>HTTP (pages web), Modbus TCP, protocoles des caméras</td><td>Logiciels des équipements</td></tr>\n</tbody>\n</table>\n<p>Cette organisation aide au dépannage : on vérifie d'abord la couche physique (voyant de lien, test du câble), puis la liaison et l'adressage, enfin l'application.</p>\n"
      },
      {
       "titre": "Adressage IPv4",
       "contenu": "\n<p>En IPv4, chaque équipement d'un réseau reçoit une <strong>adresse IP</strong> de 32 bits, écrite en quatre nombres de 0 à 255 séparés par des points (par exemple 192.168.10.25). Elle est associée à un <strong>masque de sous-réseau</strong> qui indique quelle partie de l'adresse identifie le réseau et quelle partie identifie l'hôte. Le masque 255.255.255.0, noté aussi /24, signifie que les trois premiers nombres désignent le réseau.</p>\n<p>Deux équipements peuvent communiquer directement s'ils sont dans le <strong>même réseau</strong>, c'est-à-dire si leurs adresses ont la même partie réseau. Sinon, les paquets doivent passer par la <strong>passerelle par défaut</strong>, en général le routeur.</p>\n<p>Certaines plages sont réservées aux réseaux privés (réseaux internes d'une entreprise ou d'une habitation) : 10.0.0.0/8, 172.16.0.0/12 et 192.168.0.0/16. Dans un réseau /24, la première adresse (terminée par 0) désigne le réseau et la dernière (terminée par 255) est l'adresse de diffusion : il reste 254 adresses utilisables.</p>\n<p>L'adresse peut être <strong>fixe</strong> (saisie manuellement, indispensable pour les équipements qu'on doit toujours retrouver : automate, caméra, onduleur, imprimante) ou attribuée automatiquement par un serveur <strong>DHCP</strong> (postes de travail, téléphones).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> intégrer un onduleur photovoltaïque au réseau d'un bâtiment.<br>Données : réseau du site 192.168.1.0/24 ; routeur 192.168.1.1 ; le DHCP distribue les adresses de 192.168.1.100 à 192.168.1.199.<br>1. Choisir une adresse fixe hors de la plage DHCP pour éviter les conflits : par exemple 192.168.1.50.<br>2. Masque : 255.255.255.0.<br>3. Passerelle : 192.168.1.1, pour que l'onduleur accède au portail de supervision sur internet.<br>4. Vérifier que l'adresse est libre (commande ping depuis un poste avant le raccordement : aucune réponse attendue).<br>5. Après configuration, tester avec ping depuis un poste, puis ouvrir l'interface web de l'onduleur.<br>6. Noter l'adresse dans le plan d'adressage du dossier technique.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> deux équipements configurés avec la même adresse IP provoquent un conflit : ils deviennent inaccessibles de façon aléatoire. Il faut toujours tenir à jour le <strong>plan d'adressage</strong> et ne jamais choisir une adresse « au hasard ».</div>\n"
      },
      {
       "titre": "Commutateurs, VLAN et alimentation par le câble",
       "contenu": "\n<p>Le <strong>commutateur</strong> (switch) relie les équipements d'un même réseau et envoie chaque trame uniquement vers le port du destinataire. Les commutateurs administrables offrent des fonctions utiles dans le bâtiment :</p>\n<ul>\n<li>les <strong>VLAN</strong> (réseaux locaux virtuels) : un même commutateur physique est partagé en plusieurs réseaux logiques séparés, par exemple un VLAN bureautique, un VLAN pour la GTB, un VLAN pour la vidéoprotection. Cette séparation améliore la sécurité et les performances ;</li>\n<li>le <strong>PoE</strong> (Power over Ethernet) : le commutateur fournit l'alimentation électrique par le câble réseau aux caméras, points d'accès Wi-Fi, téléphones IP ou luminaires connectés. Il faut vérifier le <strong>budget PoE</strong> total du commutateur (somme des puissances fournies) et la classe de puissance demandée par chaque appareil ;</li>\n<li>la supervision des ports (état de lien, débit, erreurs) qui facilite le diagnostic.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors de l'installation de douze caméras PoE de 12 W chacune, le technicien vérifie que le commutateur choisi peut fournir au moins 144 W au total, en plus de la classe PoE de chaque port. Un commutateur dont le budget PoE n'est que de 120 W laisserait une ou deux caméras sans alimentation.</div>\n"
      },
      {
       "titre": "Le câblage structuré des bâtiments tertiaires",
       "contenu": "\n<p>Le <strong>câblage structuré</strong> (ou câblage VDI : voix, données, images) est un réseau de câbles cuivre et fibre installé une fois pour toutes, indépendamment des applications. Son architecture est hiérarchisée :</p>\n<ol>\n<li>le <strong>répartiteur général</strong> (local technique principal), où arrivent les opérateurs et d'où partent les liaisons vers les étages ;</li>\n<li>les <strong>rocades</strong> (câbles de liaison verticale, souvent en fibre optique) entre le répartiteur général et les <strong>sous-répartiteurs</strong> d'étage ;</li>\n<li>le <strong>câblage horizontal</strong> en cuivre (paires torsadées) depuis le panneau de brassage du sous-répartiteur jusqu'aux <strong>prises terminales</strong> RJ45 des bureaux ;</li>\n<li>les <strong>cordons de brassage</strong> qui relient, dans la baie, le panneau de brassage aux commutateurs.</li>\n</ol>\n<p>Pour le cuivre, la longueur du <strong>lien permanent</strong> (du panneau à la prise) est limitée à 90 m, et celle du <strong>canal</strong> complet, cordons compris, à 100 m. Les composants sont choisis par <strong>catégorie</strong> (catégorie 6 ou 6A, par exemple) et l'ensemble installé doit atteindre la <strong>classe</strong> de performance correspondante (classe E ou EA).</p>\n<p>À la fin des travaux, chaque lien est testé avec un <strong>certificateur</strong> de câblage qui mesure la longueur, la continuité et l'ordre des paires (plan de câblage), l'affaiblissement et la diaphonie (perturbation d'une paire sur l'autre). Le <strong>rapport de recette</strong> issu de ces mesures est remis au client avec le plan de repérage des prises.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le rayon de courbure trop serré, le détorsadage excessif des paires au raccordement ou un serre-câble trop serré dégradent les performances d'un câble catégorie 6A et font échouer la certification. Il faut respecter les consignes du fabricant du système de câblage.</div>\n"
      },
      {
       "titre": "La fibre optique",
       "contenu": "\n<p>La <strong>fibre optique</strong> transmet l'information sous forme de lumière dans un fil de verre très fin. Elle offre des débits très élevés sur de grandes distances et est insensible aux perturbations électromagnétiques. On distingue :</p>\n<ul>\n<li>la fibre <strong>multimode</strong> (cœur de 50 µm, catégories OM3, OM4…), utilisée sur des distances de quelques centaines de mètres dans les bâtiments et les campus ;</li>\n<li>la fibre <strong>monomode</strong> (cœur d'environ 9 µm, catégorie OS2), utilisée sur les longues distances et dans les réseaux des opérateurs, notamment le FTTH (fibre jusqu'à l'abonné).</li>\n</ul>\n<p>Dans un logement raccordé en FTTH, la fibre de l'opérateur arrive d'un point de branchement optique (PBO) situé dans la rue ou sur le palier, jusqu'au <strong>dispositif de terminaison intérieur optique</strong> (DTIO) ou à la <strong>prise terminale optique</strong> (PTO) installée dans le logement, à proximité du tableau de communication.</p>\n<p>Les fibres sont raccordées par <strong>soudure par fusion</strong> (à l'aide d'une soudeuse qui aligne et fond les deux fibres) ou par connecteurs. Chaque élément introduit une perte de puissance lumineuse, appelée <strong>affaiblissement</strong>, exprimée en décibels (dB).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> bilan de liaison d'une rocade fibre.<br>Données (valeurs de l'exemple, à remplacer par celles du cahier des charges) : fibre multimode de 300 m avec un affaiblissement linéique de 3 dB/km à 850 nm ; 2 paires de connecteurs à 0,5 dB chacune ; 2 soudures à 0,1 dB chacune.<br>1. Fibre : 0,3 km × 3 dB/km = 0,9 dB.<br>2. Connecteurs : 2 × 0,5 = 1,0 dB.<br>3. Soudures : 2 × 0,1 = 0,2 dB.<br>4. Affaiblissement total estimé : 0,9 + 1,0 + 0,2 = 2,1 dB.<br>5. À la recette, on mesure l'affaiblissement réel avec une source et un photomètre, et on le compare à ce budget ; un réflectomètre permet en plus de localiser précisément une soudure ou un connecteur défectueux.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne regarde jamais l'extrémité d'une fibre ou d'un connecteur, même si aucune lumière n'est visible : les lasers des équipements utilisent des longueurs d'onde invisibles qui peuvent endommager l'œil. Les débris de fibre, très fins, se piquent dans la peau et sont récupérés dans un récipient dédié.</div>\n"
      },
      {
       "titre": "Les bus de terrain",
       "contenu": "\n<p>Dans les installations techniques, de nombreux équipements communiquent par des <strong>bus de terrain</strong>, plus simples et plus robustes qu'un réseau informatique. Le plus répandu dans l'électricité et le génie climatique est <strong>Modbus</strong> :</p>\n<ul>\n<li><strong>Modbus RTU</strong> fonctionne sur une liaison série RS-485 : une paire torsadée blindée relie en série (chaîne) un maître et des esclaves adressés de 1 à 247 (le nombre d'équipements sur un même segment est limité par la charge électrique du bus, classiquement 32 sans répéteur), avec une résistance de terminaison aux deux extrémités du bus. Tous les équipements doivent avoir la même vitesse de transmission et le même format de trame ;</li>\n<li><strong>Modbus TCP</strong> utilise le réseau Ethernet et l'adressage IP ; chaque équipement est identifié par son adresse IP.</li>\n</ul>\n<p>Le maître (automate, superviseur, passerelle) interroge chaque esclave (compteur d'énergie, variateur, centrale de mesure) et lit des <strong>registres</strong> dont la signification est donnée par la <strong>table d'échange</strong> du constructeur (par exemple : registre 3 000 = tension L1-N, en dixièmes de volt).</p>\n<p>D'autres bus existent selon les domaines : KNX dans le bâtiment, BACnet en GTB, DALI pour l'éclairage, M-Bus pour les compteurs, Profinet ou EtherNet/IP dans l'industrie.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour faire communiquer un équipement, il faut toujours renseigner les mêmes informations : support et connectique, protocole, adresse, paramètres de communication, et table des données échangées. Ces éléments doivent figurer dans le dossier technique.</div>\n"
      }
     ],
     "points_cles": [
      "On dépanne un réseau couche par couche : physique, liaison, adressage, application.",
      "Une adresse IPv4 s'accompagne d'un masque ; deux équipements de même partie réseau communiquent directement.",
      "Les équipements à retrouver (automate, caméra, onduleur) reçoivent une adresse fixe hors de la plage DHCP.",
      "Les VLAN séparent logiquement les réseaux ; le PoE alimente les équipements par le câble dans la limite du budget du commutateur.",
      "Câblage horizontal cuivre : 90 m de lien permanent et 100 m de canal au maximum.",
      "La recette d'un câblage structuré se fait au certificateur et donne lieu à un rapport.",
      "Fibre multimode pour les courtes distances, monomode pour les longues et le FTTH.",
      "Modbus RTU : bus RS-485 maître-esclaves avec résistances de terminaison ; Modbus TCP : sur Ethernet."
     ],
     "lexique": [
      {
       "terme": "Adresse IP",
       "def": "Identifiant numérique d'un équipement sur un réseau IP."
      },
      {
       "terme": "Masque de sous-réseau",
       "def": "Valeur qui sépare, dans l'adresse IP, la partie réseau de la partie hôte."
      },
      {
       "terme": "Passerelle par défaut",
       "def": "Routeur vers lequel un équipement envoie les paquets destinés à un autre réseau."
      },
      {
       "terme": "DHCP",
       "def": "Service qui attribue automatiquement les adresses IP aux équipements."
      },
      {
       "terme": "VLAN",
       "def": "Réseau local virtuel créé par configuration d'un commutateur."
      },
      {
       "terme": "PoE",
       "def": "Alimentation électrique d'un équipement par son câble Ethernet."
      },
      {
       "terme": "Lien permanent",
       "def": "Partie fixe du câblage horizontal, du panneau de brassage à la prise terminale."
      },
      {
       "terme": "Certificateur",
       "def": "Appareil qui teste et certifie les performances d'un lien de câblage."
      },
      {
       "terme": "Affaiblissement",
       "def": "Perte de puissance d'un signal le long d'une liaison, en décibels."
      },
      {
       "terme": "PTO",
       "def": "Prise terminale optique installée chez l'abonné en FTTH."
      },
      {
       "terme": "Table d'échange",
       "def": "Liste des registres et données accessibles d'un équipement communicant."
      }
     ]
    },
    {
     "id": "bmel-batiment-communicant",
     "titre": "Bâtiment communicant : KNX, GTB et gestion de l'énergie",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire la topologie et l'adressage d'une installation KNX.",
      "Expliquer le principe de la programmation d'un bus de terrain du bâtiment par objets de communication.",
      "Situer la gestion technique du bâtiment (GTB) et ses niveaux d'architecture.",
      "Identifier les obligations réglementaires de pilotage et de suivi des consommations dans le tertiaire.",
      "Proposer des fonctions de gestion d'énergie adaptées à un bâtiment."
     ],
     "sections": [
      {
       "titre": "Du câblage traditionnel au bus",
       "contenu": "\n<p>Dans une installation traditionnelle, chaque organe de commande agit directement sur la puissance : l'interrupteur coupe la phase de la lampe, le thermostat coupe l'alimentation du convecteur. Toute modification de fonctionnement suppose de recâbler.</p>\n<p>Dans une installation <strong>communicante</strong>, on sépare la commande et la puissance. Les capteurs (boutons-poussoirs, détecteurs, sondes, stations météo) et les actionneurs (modules de sortie qui commutent ou font varier l'éclairage, motorisent les volets, pilotent le chauffage) sont tous reliés à un <strong>bus</strong> sur lequel ils échangent des messages. Le fonctionnement est défini par programmation : il peut évoluer sans modifier le câblage.</p>\n<p>Le cours de seconde a présenté la domotique grand public et les objets connectés. Dans le tertiaire et le résidentiel haut de gamme, on utilise des systèmes normalisés et interopérables, dont le plus répandu en Europe est <strong>KNX</strong>, normalisé notamment par l'ISO/CEI 14543-3.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un système communicant ouvert et normalisé permet d'associer des produits de fabricants différents et de faire intervenir n'importe quel intégrateur formé, ce qui protège le client sur le long terme.</div>\n"
      },
      {
       "titre": "Topologie et adressage KNX",
       "contenu": "\n<p>Le support le plus courant est la <strong>paire torsadée KNX</strong> (TP) : un câble à paire blindée, de couleur verte en général, qui transporte à la fois les données et l'alimentation des participants, sous une tension continue d'environ 30 V fournie par une <strong>alimentation KNX</strong> avec self de découplage. Il existe aussi des supports radio et IP.</p>\n<p>L'installation est organisée de façon hiérarchique :</p>\n<ul>\n<li>la <strong>ligne</strong> : jusqu'à 64 participants raccordés à une même alimentation (davantage avec des répéteurs) ;</li>\n<li>la <strong>zone</strong> : plusieurs lignes reliées par des <strong>coupleurs de ligne</strong> à une ligne principale ;</li>\n<li>l'installation : plusieurs zones reliées par des <strong>coupleurs de zone</strong> à une ligne de zone, souvent réalisée aujourd'hui en IP.</li>\n</ul>\n<p>Chaque appareil possède une <strong>adresse physique</strong> unique de la forme zone.ligne.participant, par exemple 1.2.15 : quinzième participant de la ligne 2 de la zone 1. Elle sert à identifier l'appareil pour le programmer.</p>\n<p>Les échanges fonctionnels utilisent des <strong>adresses de groupe</strong>, souvent écrites en trois niveaux (par exemple 1/0/3 : groupe principal 1 « éclairage », groupe médian 0 « rez-de-chaussée », sous-groupe 3 « salle de réunion marche-arrêt »). Un bouton-poussoir envoie un télégramme vers une adresse de groupe ; tous les actionneurs dont un objet de communication est associé à cette adresse réagissent.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le câble bus est un circuit de très basse tension qui cohabite avec le 230 V dans les boîtes et les tableaux. Il faut respecter les règles de séparation (gaine conservée jusqu'au raccordement, isolement suffisant, distance avec les conducteurs de puissance) prévues par le constructeur et par la norme d'installation.</div>\n"
      },
      {
       "titre": "Programmer une installation KNX",
       "contenu": "\n<p>La programmation se fait avec le logiciel de l'association KNX, <strong>ETS</strong>, dans lequel on importe les bases de données des produits fournies par les fabricants. Chaque produit propose des <strong>objets de communication</strong> (par exemple, pour une voie d'actionneur d'éclairage : « commutation », « état », « variation relative », « valeur de luminosité ») et des <strong>paramètres</strong> (temporisation d'extinction, comportement à la coupure du bus…).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser la commande d'un éclairage de salle de réunion.<br>1. Créer la structure du bâtiment dans ETS (bâtiment, étage, pièce) et y placer les produits : un bouton-poussoir double, un actionneur 4 voies, un détecteur de présence.<br>2. Attribuer les adresses physiques selon la topologie (par exemple 1.1.10, 1.1.11, 1.1.12).<br>3. Créer les adresses de groupe : 1/0/3 « Salle réunion - marche/arrêt » et 1/0/4 « Salle réunion - état ».<br>4. Associer : objet « commutation » de la touche gauche du bouton-poussoir → 1/0/3 ; objet « commutation » de la voie A de l'actionneur → 1/0/3 ; objet « état » de la voie A → 1/0/4 ; objet « état » (retour LED) du bouton-poussoir → 1/0/4.<br>5. Paramétrer le détecteur (extinction après 15 min d'absence) et l'associer à 1/0/3.<br>6. Télécharger : appuyer sur le bouton de programmation de chaque appareil pour charger son adresse physique, puis télécharger l'application.<br>7. Tester chaque fonction et exporter le projet ETS pour le remettre avec le dossier des ouvrages exécutés.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sans le fichier du projet ETS, une installation KNX devient très difficile à faire évoluer. Les contrats prévoient donc de remettre ce fichier au client à la réception. L'intégrateur le conserve aussi, avec la date de la dernière version.</div>\n"
      },
      {
       "titre": "La gestion technique du bâtiment",
       "contenu": "\n<p>La <strong>gestion technique du bâtiment</strong> (GTB) supervise et pilote l'ensemble des équipements techniques d'un bâtiment : chauffage, ventilation et climatisation, éclairage, stores, production d'eau chaude, comptages, alarmes techniques. Son architecture comporte trois niveaux :</p>\n<table>\n<thead><tr><th>Niveau</th><th>Fonction</th><th>Équipements</th></tr></thead>\n<tbody>\n<tr><td>Terrain</td><td>Mesurer et agir</td><td>Sondes, compteurs, actionneurs, variateurs, vannes motorisées, bus KNX, Modbus, DALI</td></tr>\n<tr><td>Automatisme</td><td>Réguler et commander localement</td><td>Automates et régulateurs de GTB, passerelles de protocole</td></tr>\n<tr><td>Supervision</td><td>Visualiser, archiver, alerter, analyser</td><td>Poste de supervision ou serveur web : synoptiques, courbes, alarmes, rapports</td></tr>\n</tbody>\n</table>\n<p>Les protocoles les plus utilisés en GTB sont <strong>BACnet</strong> (normalisé pour l'automatisation des bâtiments), Modbus, KNX et LON. Des <strong>passerelles</strong> traduisent les données d'un protocole à l'autre.</p>\n<p>L'électricien intervient sur le niveau terrain (câblage, raccordement des bus, mise en service des équipements), contribue à l'automatisme (vérification des points, tests) et participe à la recette de la supervision en contrôlant, point par point, la cohérence entre l'état réel des équipements et ce qui s'affiche : c'est le <strong>pointage</strong> des entrées-sorties.</p>\n"
      },
      {
       "titre": "Obligations réglementaires dans le tertiaire",
       "contenu": "\n<p>Plusieurs textes poussent au pilotage et au suivi des consommations dans les bâtiments tertiaires :</p>\n<ul>\n<li>le <strong>dispositif éco-énergie tertiaire</strong> (issu de la loi ELAN et de son décret d'application de 2019) impose aux bâtiments à usage tertiaire de plus de 1 000 m² de réduire leur consommation d'énergie finale par rapport à une année de référence : −40 % en 2030, −50 % en 2040, −60 % en 2050. Les consommations doivent être déclarées chaque année sur une plateforme nationale ;</li>\n<li>le <strong>décret « BACS »</strong> de 2020 (systèmes d'automatisation et de contrôle des bâtiments) impose d'équiper certains bâtiments tertiaires d'un système capable de suivre, enregistrer et analyser les consommations, de détecter les pertes d'efficacité et d'arrêter ou de moduler les équipements. Il s'applique d'abord aux bâtiments dont les systèmes de chauffage ou de climatisation dépassent une puissance nominale élevée, puis le seuil a été abaissé par un décret ultérieur pour une échéance plus lointaine ;</li>\n<li>la <strong>réglementation environnementale RE2020</strong> pour les bâtiments neufs, qui reprend l'obligation, apparue avec la réglementation thermique précédente, d'équiper les logements neufs d'un dispositif de mesure ou d'estimation des consommations par usage.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les seuils de puissance et les échéances des obligations réglementaires évoluent. Avant de conseiller un client, il faut vérifier les textes en vigueur (publications officielles et guides du ministère chargé de l'énergie) plutôt que de s'appuyer sur un chiffre retenu de mémoire.</div>\n"
      },
      {
       "titre": "Fonctions de gestion de l'énergie",
       "contenu": "\n<p>Un système de gestion de l'énergie s'appuie sur trois piliers : <strong>mesurer</strong>, <strong>analyser</strong>, <strong>agir</strong>.</p>\n<ul>\n<li><strong>Mesurer</strong> : compteurs divisionnaires par usage (éclairage, chauffage-climatisation, prises, informatique, IRVE) et par zone, communicants en Modbus ou M-Bus, ou par impulsions. On respecte un plan de comptage qui permet de répartir les consommations.</li>\n<li><strong>Analyser</strong> : courbes de charge, comparaison entre périodes, consommation hors occupation (nuit, week-end), indicateurs ramenés à la surface (kWh/m²/an), alarmes en cas de dérive.</li>\n<li><strong>Agir</strong> : programmation horaire selon l'occupation, réduit de chauffage la nuit, extinction générale de l'éclairage, délestage des charges non prioritaires pour rester sous la puissance souscrite, pilotage des usages flexibles (chauffe-eau, recharge des véhicules) selon les tarifs ou la production photovoltaïque.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> repérer un gisement d'économies sur une courbe de charge.<br>Un bureau de 800 m² consomme 18 kW en moyenne la nuit et le week-end, alors qu'il est inoccupé ; en journée, il consomme 60 kW.<br>1. Calcul de la consommation hors occupation : environ 128 heures par semaine hors occupation × 18 kW ≈ 2 300 kWh par semaine.<br>2. Analyse des comptages par usage : la ventilation et l'éclairage des circulations fonctionnent en continu.<br>3. Action : programmer l'arrêt de la ventilation hors occupation (en respectant les débits minimaux réglementaires) et une extinction générale de l'éclairage avec dérogation par bouton.<br>4. Vérification : nouvelle mesure de la puissance de nuit après modification et calcul de l'économie réelle.</div>\n<p>L'électricien du bâtiment communicant joue ainsi un rôle de conseil auprès de l'exploitant : il traduit les données mesurées en actions concrètes.</p>\n"
      }
     ],
     "points_cles": [
      "Une installation communicante sépare commande et puissance ; le fonctionnement est défini par programmation.",
      "KNX TP : bus en paire torsadée sous environ 30 V continu, alimentation dédiée, jusqu'à 64 participants par ligne.",
      "Adresse physique zone.ligne.participant ; adresse de groupe en trois niveaux pour les fonctions.",
      "La programmation KNX se fait avec ETS ; le projet doit être remis au client.",
      "La GTB comporte trois niveaux : terrain, automatisme, supervision.",
      "Le dispositif éco-énergie tertiaire vise −40 % en 2030, −50 % en 2040 et −60 % en 2050 pour les bâtiments de plus de 1 000 m².",
      "Le décret BACS impose des systèmes d'automatisation et de contrôle dans certains bâtiments tertiaires.",
      "Gestion de l'énergie : mesurer, analyser, agir, puis vérifier le résultat."
     ],
     "lexique": [
      {
       "terme": "Bus",
       "def": "Support de communication partagé par plusieurs équipements qui échangent des messages."
      },
      {
       "terme": "KNX",
       "def": "Système normalisé de communication pour l'automatisation des bâtiments."
      },
      {
       "terme": "Adresse physique",
       "def": "Identifiant unique d'un appareil KNX selon la topologie (zone.ligne.participant)."
      },
      {
       "terme": "Adresse de groupe",
       "def": "Adresse fonctionnelle reliant les objets de communication qui doivent interagir."
      },
      {
       "terme": "Objet de communication",
       "def": "Donnée échangée par un appareil sur le bus (commande, état, valeur)."
      },
      {
       "terme": "ETS",
       "def": "Logiciel de conception et de programmation des installations KNX."
      },
      {
       "terme": "GTB",
       "def": "Gestion technique du bâtiment : supervision et pilotage des équipements techniques."
      },
      {
       "terme": "BACnet",
       "def": "Protocole de communication normalisé pour l'automatisation et la GTB."
      },
      {
       "terme": "BACS",
       "def": "Systèmes d'automatisation et de contrôle des bâtiments, objet d'une obligation réglementaire."
      },
      {
       "terme": "Courbe de charge",
       "def": "Évolution de la puissance appelée au cours du temps."
      },
      {
       "terme": "Pointage",
       "def": "Vérification point par point de la cohérence entre l'état réel des équipements et la supervision."
      }
     ]
    },
    {
     "id": "bmel-surete-securite",
     "titre": "Systèmes de sûreté et de sécurité incendie",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Distinguer sûreté (malveillance) et sécurité (protection des personnes contre l'incendie et la panique).",
      "Décrire la constitution d'un système d'alarme intrusion et d'un contrôle d'accès.",
      "Identifier les éléments d'une installation de vidéoprotection et ses contraintes réglementaires.",
      "Décrire l'organisation d'un système de sécurité incendie et le rôle de l'éclairage de sécurité.",
      "Appliquer les précautions d'intervention sur des systèmes de sécurité en service."
     ],
     "sections": [
      {
       "titre": "Sûreté et sécurité : deux finalités",
       "contenu": "\n<p>Dans le langage professionnel, on distingue :</p>\n<ul>\n<li>la <strong>sûreté</strong>, qui protège les biens et les personnes contre les actes de malveillance : alarme intrusion, contrôle d'accès, vidéoprotection ;</li>\n<li>la <strong>sécurité</strong>, qui protège les personnes contre l'incendie et la panique : détection incendie, alarme d'évacuation, désenfumage, éclairage de sécurité.</li>\n</ul>\n<p>Les deux familles de systèmes sont de plus en plus intégrées au bâtiment communicant, mais elles obéissent à des règles différentes : les systèmes de sécurité incendie relèvent d'une réglementation obligatoire (Code de la construction et de l'habitation, règlement de sécurité des établissements recevant du public, Code du travail) et de normes spécifiques, et leur installation et leur maintenance sont souvent confiées à des entreprises spécialisées et certifiées. L'électricien MELEC y participe en réalisant les alimentations, les câblages et certaines mises en service, dans le respect des documents du fabricant et du concepteur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en cas de conflit, la sécurité des personnes l'emporte toujours sur la sûreté. Par exemple, une porte contrôlée doit pouvoir être ouverte de l'intérieur pour l'évacuation, même si cela affaiblit la protection contre l'intrusion.</div>\n"
      },
      {
       "titre": "L'alarme intrusion",
       "contenu": "\n<p>Un système d'<strong>alarme intrusion</strong> détecte une présence non autorisée et déclenche une alerte. Il comprend :</p>\n<ul>\n<li>une <strong>centrale</strong> qui gère les zones, les modes de mise en service (totale, partielle) et les alarmes ;</li>\n<li>des <strong>détecteurs</strong> : contacts d'ouverture (contacts magnétiques sur portes et fenêtres), détecteurs de mouvement infrarouge passif ou bitechnologie, détecteurs de bris de vitre, barrières infrarouges extérieures ;</li>\n<li>des <strong>organes de commande</strong> : claviers, badges, télécommandes, application ;</li>\n<li>des <strong>moyens d'alerte</strong> : sirènes intérieure et extérieure, transmetteur vers un centre de télésurveillance ou vers le téléphone de l'utilisateur ;</li>\n<li>une <strong>alimentation secourue</strong> par batterie.</li>\n</ul>\n<p>Les liaisons filaires utilisent souvent des <strong>boucles équilibrées</strong> : la centrale mesure en permanence la résistance de chaque boucle. Une valeur normale indique le repos, une autre valeur l'alarme, et une coupure ou un court-circuit du câble provoque une alarme d'<strong>autoprotection</strong> (sabotage). Les systèmes sont classés en <strong>grades</strong> de sécurité (de 1 à 4) selon le niveau de risque, d'après la série de normes NF EN 50131.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> implanter les détecteurs d'un local commercial.<br>1. Lister les accès (porte d'entrée vitrée, porte de réserve, fenêtre de bureau) et les zones à protéger (surface de vente, réserve, bureau avec coffre).<br>2. Prévoir un contact d'ouverture sur chaque accès et un détecteur de bris de vitre pour la vitrine.<br>3. Placer les détecteurs de mouvement en angle, orientés de façon à couper les trajets probables d'un intrus, hors du champ direct des sources de chaleur (radiateurs, bouches de soufflage) et des fenêtres ensoleillées.<br>4. Définir les zones et les temporisations d'entrée et de sortie pour la porte principale.<br>5. Placer la centrale et le transmetteur dans une zone protégée, à l'abri de la vue depuis l'extérieur.<br>6. Consigner l'implantation sur le plan et la programmation sur la fiche de mise en service.</div>\n"
      },
      {
       "titre": "Le contrôle d'accès",
       "contenu": "\n<p>Le <strong>contrôle d'accès</strong> autorise ou refuse le passage d'une personne selon son identifiant, l'heure et la zone. Une installation comporte :</p>\n<ul>\n<li>des <strong>lecteurs</strong> (badge, code, biométrie, lecture de plaque d'immatriculation) ;</li>\n<li>des <strong>unités de traitement locales</strong> qui décident de l'ouverture et mémorisent les droits ;</li>\n<li>des <strong>organes de verrouillage</strong> : ventouses électromagnétiques, gâches électriques, serrures motorisées ;</li>\n<li>des capteurs d'état de porte et des boutons de sortie ;</li>\n<li>un <strong>logiciel de gestion</strong> des badges et des droits, souvent sur le réseau IP du site.</li>\n</ul>\n<p>Le choix de l'organe de verrouillage est essentiel :</p>\n<table>\n<thead><tr><th>Organe</th><th>Comportement en cas de coupure d'alimentation</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Ventouse électromagnétique</td><td>Porte libérée (à manque de courant)</td><td>Portes sur issues de secours, à condition de prévoir un déverrouillage d'urgence</td></tr>\n<tr><td>Gâche à émission de courant</td><td>Porte reste verrouillée</td><td>Locaux à protéger sans contrainte d'évacuation</td></tr>\n<tr><td>Gâche à rupture de courant</td><td>Porte libérée</td><td>Portes devant s'ouvrir en cas de coupure</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une porte sur un chemin d'évacuation ne doit jamais rester bloquée en cas de coupure ou d'alarme incendie. Les dispositifs de verrouillage de ces portes sont asservis au système de sécurité incendie et complétés par un boîtier de déverrouillage manuel d'urgence, selon des règles précises qu'il faut vérifier dans les documents du concepteur.</div>\n"
      },
      {
       "titre": "La vidéoprotection",
       "contenu": "\n<p>Un système de <strong>vidéoprotection</strong> comprend des <strong>caméras</strong> (aujourd'hui principalement IP, alimentées en PoE), un <strong>enregistreur</strong> réseau (NVR) ou un serveur, des postes d'exploitation et le réseau qui les relie, de préférence séparé du réseau bureautique (VLAN dédié).</p>\n<p>Le choix d'une caméra dépend de l'objectif : <strong>détecter</strong> une présence, <strong>observer</strong> une scène, <strong>reconnaître</strong> une personne connue ou <strong>identifier</strong> une personne inconnue. Plus l'objectif est exigeant, plus il faut de pixels sur la cible, ce qui conditionne la résolution, l'objectif (focale) et la distance. On tient compte aussi de l'éclairage (vision nocturne infrarouge), du contre-jour et de l'indice de protection pour l'extérieur.</p>\n<p>La vidéoprotection est encadrée juridiquement :</p>\n<ul>\n<li>un système filmant un lieu ouvert au public ou la voie publique nécessite une <strong>autorisation préfectorale</strong> ;</li>\n<li>les images de personnes sont des données personnelles soumises au <strong>RGPD</strong> : information des personnes filmées par des panneaux, durée de conservation limitée, accès restreint aux images ;</li>\n<li>dans les locaux de travail, les caméras ne doivent pas filmer en permanence les salariés à leur poste ni les zones de pause, et les représentants du personnel doivent être informés.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'installateur remet au client la liste des caméras avec leurs adresses IP, leurs identifiants d'administration modifiés (jamais les mots de passe d'usine) et la durée d'enregistrement paramétrée. Il rappelle au client ses propres obligations administratives, qui relèvent de l'exploitant du système.</div>\n"
      },
      {
       "titre": "Le système de sécurité incendie",
       "contenu": "\n<p>Le <strong>système de sécurité incendie</strong> (SSI) regroupe les matériels qui collectent les informations liées à un incendie et commandent les fonctions de mise en sécurité du bâtiment. Il est défini par la réglementation et les normes de la série NF S 61-9xx. On distingue :</p>\n<ul>\n<li>le <strong>système de détection incendie</strong> (SDI) : détecteurs automatiques (de fumée optiques, de chaleur, de flamme), déclencheurs manuels (boîtiers rouges « bris de glace ») et équipement de contrôle et de signalisation (ECS) ;</li>\n<li>le <strong>système de mise en sécurité incendie</strong> (SMSI) : le centralisateur de mise en sécurité incendie (CMSI) commande l'alarme générale (diffuseurs sonores et lumineux), le compartimentage (fermeture des portes coupe-feu par libération de ventouses), le désenfumage (ouverture des exutoires et volets, démarrage des ventilateurs), l'arrêt de certaines installations techniques et le déverrouillage des issues.</li>\n</ul>\n<p>Les SSI sont classés en catégories, de A (la plus complète, avec détection automatique et mise en sécurité automatique) à E, selon le type et la taille de l'établissement. Les dispositifs actionnés de sécurité (DAS) fonctionnent en <strong>sécurité positive</strong> lorsque c'est possible : la coupure de l'alimentation provoque leur mise en position de sécurité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> intervenir sur un SSI en service (couper une ligne de détecteurs, déconnecter un câble) peut mettre hors service la protection de tout un bâtiment ou déclencher une évacuation. Toute intervention se fait avec l'accord de l'exploitant, après mise en mode essai ou hors service de la zone concernée selon la procédure du fabricant, et donne lieu à une inscription au registre de sécurité.</div>\n"
      },
      {
       "titre": "L'éclairage de sécurité",
       "contenu": "\n<p>L'<strong>éclairage de sécurité</strong> permet, en cas de défaillance de l'éclairage normal, l'évacuation sûre des personnes et l'intervention des secours. Il comprend :</p>\n<ul>\n<li>l'<strong>éclairage d'évacuation</strong>, qui balise les cheminements, les changements de direction, les obstacles et les issues ;</li>\n<li>l'<strong>éclairage d'ambiance</strong> (ou anti-panique), qui assure un éclairement minimal dans les locaux recevant de nombreuses personnes.</li>\n</ul>\n<p>Il est le plus souvent réalisé par des <strong>blocs autonomes d'éclairage de sécurité</strong> (BAES) conformes à la norme NF C 71-800, qui contiennent leur propre batterie et basculent automatiquement en fonctionnement de secours lors de la coupure de l'éclairage normal du local. Les blocs à système automatique de test intégré (SATI) réalisent eux-mêmes leurs tests périodiques et signalent leurs défauts par un voyant. Dans les grands bâtiments, on trouve aussi des installations à source centralisée.</p>\n<p>Règles d'installation à retenir :</p>\n<ul>\n<li>le BAES est alimenté par le même circuit que l'éclairage normal du local, en amont de sa commande, pour basculer précisément quand cet éclairage est défaillant ;</li>\n<li>une <strong>télécommande de mise au repos</strong> permet, lors d'une coupure volontaire, d'éteindre les blocs pour ne pas décharger les batteries ;</li>\n<li>les canalisations et les blocs sont installés selon les règles du règlement de sécurité applicable à l'établissement.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les systèmes de sécurité (SSI, éclairage de sécurité) font l'objet de vérifications périodiques obligatoires. Le technicien consigne ses interventions et les anomalies constatées dans le <strong>registre de sécurité</strong> de l'établissement.</div>\n"
      }
     ],
     "points_cles": [
      "Sûreté : contre la malveillance ; sécurité : contre l'incendie et la panique. La sécurité des personnes prime.",
      "Une alarme intrusion comprend centrale, détecteurs, commandes, moyens d'alerte et alimentation secourue.",
      "Les boucles équilibrées détectent l'alarme mais aussi la coupure ou le court-circuit du câble (autoprotection).",
      "Une porte d'issue de secours doit être libérée en cas de coupure ou d'alarme incendie.",
      "La vidéoprotection est soumise à autorisation pour les lieux ouverts au public et au RGPD pour les images.",
      "Le SSI associe la détection (SDI avec ECS) et la mise en sécurité (SMSI avec CMSI).",
      "Les DAS fonctionnent si possible en sécurité positive.",
      "Les BAES sont alimentés en amont de la commande de l'éclairage normal du local."
     ],
     "lexique": [
      {
       "terme": "Sûreté",
       "def": "Protection contre les actes de malveillance."
      },
      {
       "terme": "Boucle équilibrée",
       "def": "Liaison de détecteur surveillée par mesure de résistance, détectant alarme et sabotage."
      },
      {
       "terme": "Autoprotection",
       "def": "Détection d'une tentative de sabotage d'un élément du système d'alarme."
      },
      {
       "terme": "Ventouse électromagnétique",
       "def": "Organe de verrouillage maintenant une porte fermée tant qu'il est alimenté."
      },
      {
       "terme": "NVR",
       "def": "Enregistreur vidéo réseau qui stocke les flux des caméras IP."
      },
      {
       "terme": "SSI",
       "def": "Système de sécurité incendie, regroupant détection et mise en sécurité."
      },
      {
       "terme": "ECS",
       "def": "Équipement de contrôle et de signalisation qui reçoit les informations des détecteurs."
      },
      {
       "terme": "CMSI",
       "def": "Centralisateur de mise en sécurité incendie qui commande les dispositifs de sécurité."
      },
      {
       "terme": "DAS",
       "def": "Dispositif actionné de sécurité : porte coupe-feu, exutoire, volet de désenfumage…"
      },
      {
       "terme": "BAES",
       "def": "Bloc autonome d'éclairage de sécurité doté de sa propre batterie."
      },
      {
       "terme": "Registre de sécurité",
       "def": "Document où sont consignées les vérifications et interventions sur les installations de sécurité."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Organiser, mettre en service et maintenir",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmel-organiser-operation",
     "titre": "Préparer et organiser une opération",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Recenser les informations nécessaires à la préparation d'une opération.",
      "Établir une liste de matériels et d'outillage à partir d'un dossier.",
      "Planifier les tâches d'une petite équipe en tenant compte des habilitations et des autres corps d'état.",
      "Identifier les documents de prévention d'un chantier (plan de prévention, PPSPS).",
      "Organiser un chantier écoresponsable : gestion des déchets, économie de matière, nuisances."
     ],
     "sections": [
      {
       "titre": "Ce que recouvre la préparation",
       "contenu": "\n<p>Les compétences visées par le référentiel commencent par <strong>analyser les conditions de l'opération et son contexte</strong> puis <strong>organiser l'opération</strong>. Ces deux temps, souvent sous-estimés, déterminent la réussite d'un chantier : une opération mal préparée se traduit par des allers-retours chez le fournisseur, des attentes, des malfaçons et des risques supplémentaires.</p>\n<p>Une opération peut être une installation neuve, une rénovation, une extension, une mise en service, une opération de maintenance ou un dépannage. Dans tous les cas, la préparation répond à des questions simples :</p>\n<ul>\n<li><strong>Quoi ?</strong> L'objet précis de l'opération, ses limites, le résultat attendu par le client.</li>\n<li><strong>Où ?</strong> Le site, les accès, les locaux, les contraintes (site occupé, hauteur, zone ATEX, ERP ouvert au public).</li>\n<li><strong>Quand ?</strong> Les délais, les horaires possibles, les périodes de coupure autorisées, l'enchaînement avec les autres corps d'état.</li>\n<li><strong>Qui ?</strong> Les intervenants, leurs compétences et leurs habilitations, les interlocuteurs côté client.</li>\n<li><strong>Avec quoi ?</strong> Le matériel à poser, l'outillage, les appareils de mesure, les moyens d'accès et de levage, les équipements de protection.</li>\n<li><strong>Comment ?</strong> Les modes opératoires, les règles de l'art, les procédures de sécurité, les contrôles à réaliser.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la préparation s'appuie sur des documents (dossier technique, CCTP, plans, notices, devis) et sur une <strong>visite préalable</strong> du site lorsque c'est possible. Ce qui n'est pas noté pendant la visite est souvent oublié le jour du chantier.</div>\n"
      },
      {
       "titre": "Recenser les matériels et l'outillage",
       "contenu": "\n<p>La liste des matériels se construit à partir des plans et des schémas. On procède par ouvrage ou par local, en réalisant un <strong>quantitatif</strong> : on compte les appareils (prises, points lumineux, interrupteurs, luminaires) et on mesure les longueurs de câbles et de conduits sur les plans à l'échelle, en ajoutant les remontées et descentes verticales et une marge pour les chutes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir le quantitatif de câble d'un circuit de prises de bureau.<br>Données : plan au 1/100 ; le tableau est à 1,80 m du sol ; les prises sont à 0,30 m du sol ; le cheminement se fait en faux plafond à 2,70 m.<br>1. Mesurer sur le plan la longueur horizontale du cheminement : 9,2 cm sur le plan, soit 9,2 m réels à l'échelle 1/100.<br>2. Ajouter la remontée du tableau au faux plafond : 2,70 − 1,80 = 0,90 m.<br>3. Ajouter la descente du faux plafond à la première prise : 2,70 − 0,30 = 2,40 m.<br>4. Ajouter les liaisons entre les 4 prises du circuit en goulotte : 3 × 1,50 m = 4,50 m.<br>5. Total : 9,2 + 0,9 + 2,4 + 4,5 = 17,0 m ; avec une marge de 10 % pour les raccordements et les chutes : environ 18,7 m, arrondi à 19 m de câble 3G2,5 mm².<br>6. Reporter la quantité dans la liste, avec la référence du câble prévue au CCTP.</div>\n<p>À la liste des matériels s'ajoutent :</p>\n<ul>\n<li>l'<strong>outillage</strong> courant et spécifique (perforateur, cintreuse, aiguille tire-fils, sertisseuse, outil de raccordement réseau, soudeuse optique) ;</li>\n<li>les <strong>appareils de mesure</strong> : multimètre, pince ampèremétrique, VAT, contrôleur d'installation, certificateur réseau, avec leur date de vérification ;</li>\n<li>les <strong>moyens d'accès</strong> : plateforme individuelle roulante, échafaudage roulant, nacelle (qui nécessite une autorisation de conduite) ;</li>\n<li>les <strong>consommables</strong> : colliers, chevilles, embouts, étiquettes de repérage.</li>\n</ul>\n<p>On compare ensuite la liste au stock et aux commandes en cours, et on anticipe les <strong>délais d'approvisionnement</strong>, parfois longs pour les tableaux, les onduleurs ou les équipements spécifiques.</p>\n"
      },
      {
       "titre": "Planifier les tâches et répartir l'équipe",
       "contenu": "\n<p>Le <strong>planning</strong> place les tâches dans le temps en tenant compte de leur durée et de leurs <strong>antériorités</strong> (une tâche qui ne peut commencer qu'après une autre). Pour un chantier simple, on utilise un <strong>diagramme de Gantt</strong> : chaque ligne est une tâche, représentée par une barre dont la longueur correspond à sa durée.</p>\n<table>\n<thead><tr><th>Tâche</th><th>Durée</th><th>Antériorité</th><th>Intervenant</th></tr></thead>\n<tbody>\n<tr><td>A : traçage et pose des supports</td><td>0,5 jour</td><td>—</td><td>Électricien B1V</td></tr>\n<tr><td>B : pose des chemins de câbles</td><td>1 jour</td><td>A</td><td>2 électriciens</td></tr>\n<tr><td>C : tirage des câbles</td><td>1 jour</td><td>B</td><td>2 électriciens</td></tr>\n<tr><td>D : pose et raccordement du tableau divisionnaire</td><td>1 jour</td><td>A</td><td>Électricien B2V</td></tr>\n<tr><td>E : raccordement des appareils</td><td>1 jour</td><td>C, D, et passage du plaquiste</td><td>2 électriciens</td></tr>\n<tr><td>F : raccordement au TGBT (coupure du départ)</td><td>0,5 jour</td><td>D, autorisation de l'exploitant</td><td>Chargé de travaux B2V et BC</td></tr>\n<tr><td>G : essais et mise en service</td><td>0,5 jour</td><td>E, F</td><td>Technicien BR, BE Essai</td></tr>\n</tbody>\n</table>\n<p>La lecture du tableau montre que D peut être réalisée en parallèle de B et C par une autre personne, ce qui raccourcit la durée totale. Le planning fait aussi apparaître les <strong>points d'arrêt</strong> : les tâches qui dépendent d'un autre corps d'état (plaquiste, plombier, menuisier) ou de l'exploitant (coupure autorisée seulement un samedi, par exemple).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la répartition des tâches doit respecter les habilitations : on ne confie pas le raccordement au TGBT en exploitation à un intervenant qui n'a ni l'habilitation ni l'expérience requises, même si le planning est serré.</div>\n"
      },
      {
       "titre": "Coactivité et documents de prévention",
       "contenu": "\n<p>Sur la plupart des chantiers, plusieurs entreprises travaillent en même temps : c'est la <strong>coactivité</strong>. Les risques d'une entreprise peuvent toucher les salariés d'une autre (chute d'objet depuis une nacelle, poussières, remise sous tension inattendue). La réglementation prévoit des documents de coordination :</p>\n<table>\n<thead><tr><th>Situation</th><th>Document</th><th>Contenu essentiel</th></tr></thead>\n<tbody>\n<tr><td>Opération de bâtiment ou de génie civil avec plusieurs entreprises</td><td>Plan général de coordination (PGC), établi par le coordonnateur SPS, et <strong>PPSPS</strong> (plan particulier de sécurité et de protection de la santé) rédigé par chaque entreprise</td><td>Organisation du chantier, risques liés à la coactivité, mesures de prévention de l'entreprise, secours</td></tr>\n<tr><td>Intervention d'une entreprise extérieure dans un établissement en activité (usine, hôpital, bureaux)</td><td><strong>Plan de prévention</strong> établi entre l'entreprise utilisatrice et l'entreprise extérieure après une inspection commune</td><td>Risques d'interférence, mesures prises par chacun, consignes du site, permis spécifiques</td></tr>\n<tr><td>Travaux par points chauds, en espace confiné, en zone ATEX</td><td><strong>Permis</strong> spécifiques délivrés par l'établissement</td><td>Mesures particulières, durée de validité, surveillance</td></tr>\n</tbody>\n</table>\n<p>Le technicien doit connaître ces documents, les lire avant de commencer et appliquer les mesures qui le concernent. Le Code du travail fixe les seuils (durée, nature des travaux dangereux) à partir desquels le plan de prévention doit être écrit ; dans le doute, on se renseigne auprès de son responsable.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant d'intervenir dans la chaufferie d'un hôpital, le chef d'équipe participe à l'inspection commune avec le service technique. Le plan de prévention mentionne la présence de canalisations chaudes, la nécessité d'un permis de feu pour les perçages au chalumeau (non prévus ici) et l'interdiction de couper un départ sans accord du responsable de l'exploitation électrique de l'hôpital.</div>\n"
      },
      {
       "titre": "Organiser le poste de travail et le chantier",
       "contenu": "\n<p>L'organisation du poste de travail vise la sécurité, la qualité et l'efficacité :</p>\n<ul>\n<li>délimiter et baliser la zone de travail, surtout dans les lieux occupés ;</li>\n<li>organiser le stockage des matériels à l'abri, sans encombrer les circulations et les issues de secours ;</li>\n<li>disposer d'une alimentation de chantier protégée par un différentiel 30 mA (coffret de chantier) ;</li>\n<li>prévoir l'éclairage du poste, les protections collectives (garde-corps de plateforme) et l'accès sécurisé aux zones en hauteur ;</li>\n<li>maintenir le chantier propre au fur et à mesure, ce qui réduit les risques de chute et facilite les contrôles.</li>\n</ul>\n<p>Le suivi quotidien s'appuie sur des documents simples : fiche de suivi d'avancement, bons de livraison vérifiés à la réception, relevé des écarts constatés par rapport aux plans (qui alimenteront le dossier des ouvrages exécutés).</p>\n"
      },
      {
       "titre": "Un chantier écoresponsable",
       "contenu": "\n<p>Le référentiel demande de <strong>réaliser une installation de manière écoresponsable</strong>. Cela concerne trois domaines :</p>\n<ul>\n<li><strong>Réduire les déchets à la source</strong> : quantitatifs précis, commandes ajustées, réutilisation des chutes de câbles et de conduits, emballages consignés ou repris par le fournisseur.</li>\n<li><strong>Trier et faire traiter les déchets</strong> : chutes de câbles (le cuivre se recycle et se revend), métaux, plastiques, cartons, gravats, et déchets dangereux. Les équipements électriques et électroniques usagés (luminaires, lampes, appareillages, onduleurs, batteries) relèvent de filières de reprise organisées par des <strong>éco-organismes</strong> agréés : ils ne doivent jamais être jetés avec les déchets ordinaires.</li>\n<li><strong>Limiter les nuisances</strong> : bruit, poussières (aspiration à la source lors du perçage, qui protège aussi la santé de l'électricien), déplacements de véhicules (regroupement des livraisons, covoiturage).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> organiser le tri sur un chantier de rénovation d'éclairage.<br>1. Recenser les déchets prévus : 120 luminaires fluorescents déposés, tubes fluorescents, câbles anciens, cartons d'emballage des nouveaux luminaires.<br>2. Identifier la filière de chaque déchet : luminaires et tubes vers le point de collecte de l'éco-organisme (les tubes, qui contiennent du mercure, dans un contenant dédié qui évite la casse) ; câbles en benne métaux ; cartons en benne papier-carton.<br>3. Prévoir les contenants sur le chantier et leur enlèvement.<br>4. Conserver les bordereaux ou justificatifs de reprise, à transmettre au client si le marché l'exige.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans les bâtiments anciens, des matériaux contenant de l'amiante peuvent se trouver dans les faux plafonds, les dalles de sol, les conduits ou certains anciens tableaux. Avant de percer ou de démonter, il faut consulter le repérage amiante fourni par le maître d'ouvrage ; en cas de doute, on arrête le travail et on alerte son responsable.</div>\n"
      }
     ],
     "points_cles": [
      "Préparer une opération, c'est répondre à quoi, où, quand, qui, avec quoi et comment.",
      "Le quantitatif se réalise sur plans à l'échelle, en ajoutant les parcours verticaux et une marge.",
      "Les délais d'approvisionnement de certains équipements doivent être anticipés.",
      "Le diagramme de Gantt place les tâches selon leurs durées et leurs antériorités.",
      "La répartition des tâches tient compte des habilitations de chacun.",
      "PGC et PPSPS sur les chantiers de bâtiment, plan de prévention dans un établissement en activité.",
      "Les DEEE (luminaires, lampes, onduleurs, batteries) sont repris par des filières d'éco-organismes agréés.",
      "Le repérage amiante doit être consulté avant toute intervention destructive dans un bâtiment ancien."
     ],
     "lexique": [
      {
       "terme": "Quantitatif",
       "def": "Relevé détaillé des quantités de matériels nécessaires à un ouvrage."
      },
      {
       "terme": "Antériorité",
       "def": "Tâche qui doit être terminée avant qu'une autre puisse commencer."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Représentation des tâches d'un projet par des barres sur une échelle de temps."
      },
      {
       "terme": "Coactivité",
       "def": "Présence simultanée de plusieurs entreprises sur un même site."
      },
      {
       "terme": "PPSPS",
       "def": "Plan particulier de sécurité et de protection de la santé rédigé par chaque entreprise d'un chantier coordonné."
      },
      {
       "terme": "Plan de prévention",
       "def": "Document définissant les mesures de prévention lors de l'intervention d'une entreprise extérieure dans un établissement."
      },
      {
       "terme": "Coordonnateur SPS",
       "def": "Personne chargée de la coordination sécurité et protection de la santé sur un chantier de bâtiment."
      },
      {
       "terme": "DEEE",
       "def": "Déchets d'équipements électriques et électroniques, soumis à une filière de collecte spécifique."
      },
      {
       "terme": "Éco-organisme",
       "def": "Organisme agréé chargé d'organiser la collecte et le traitement de certaines catégories de déchets."
      },
      {
       "terme": "Point d'arrêt",
       "def": "Étape d'un planning qui dépend d'une validation ou de l'intervention d'un tiers."
      }
     ]
    },
    {
     "id": "bmel-mesures-mise-en-service",
     "titre": "Mesures de contrôle, mise en service et réception",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Réaliser dans le bon ordre les mesures de contrôle d'une installation avant sa mise sous tension.",
      "Interpréter les résultats de continuité, d'isolement, de prise de terre et d'essai des différentiels.",
      "Valider le fonctionnement d'une installation et consigner les résultats dans un procès-verbal.",
      "Situer le rôle du Consuel et des vérifications réglementaires.",
      "Participer à la réception des travaux et à la levée des réserves."
     ],
     "sections": [
      {
       "titre": "Contrôler avant de mettre sous tension",
       "contenu": "\n<p>Le référentiel distingue trois compétences successives : <strong>contrôler les grandeurs caractéristiques</strong> de l'installation, <strong>régler et paramétrer</strong> ses matériels, puis <strong>valider son fonctionnement</strong>. La première étape commence avant toute mise sous tension, par un <strong>examen visuel</strong> :</p>\n<ul>\n<li>conformité du matériel installé au dossier (références, calibres, sections, repérage) ;</li>\n<li>présence et continuité visuelle des conducteurs de protection, des liaisons équipotentielles ;</li>\n<li>serrage des connexions (au couple prescrit par le fabricant pour les jeux de barres et les gros câbles) ;</li>\n<li>indices de protection adaptés aux locaux, obturation des entrées de câbles ;</li>\n<li>présence des schémas, des étiquettes de repérage et des avertissements.</li>\n</ul>\n<p>Puis viennent les <strong>mesures hors tension</strong>, dans un ordre logique : d'abord la continuité des conducteurs de protection (car les autres mesures et la sécurité en dépendent), puis l'isolement, puis, installation sous tension, la prise de terre ou l'impédance de boucle, les essais des différentiels et la vérification de l'ordre des phases.</p>\n<p>Ces mesures sont réalisées avec un <strong>contrôleur d'installation</strong> multifonction conforme à la série de normes NF EN 61557, qui regroupe mesure de continuité, d'isolement, de terre, de boucle et test des différentiels.</p>\n"
      },
      {
       "titre": "Continuité et isolement",
       "contenu": "\n<p>La <strong>mesure de continuité</strong> vérifie que chaque masse et chaque borne de terre des prises est bien reliée à la borne principale de terre, avec une résistance faible. Elle se fait avec un courant de mesure d'au moins 200 mA, en compensant au préalable la résistance des cordons de mesure. Une valeur élevée révèle une connexion desserrée, un conducteur interrompu ou une section insuffisante. Dans les logements, l'organisme de contrôle retient en pratique une valeur maximale de l'ordre de 2 Ω entre une borne de terre et la borne principale.</p>\n<p>La <strong>mesure de résistance d'isolement</strong> vérifie qu'aucun courant de fuite notable ne circule entre conducteurs actifs, ni entre conducteurs actifs et la terre. Elle s'effectue <strong>hors tension</strong>, sous une tension continue d'essai fixée par la norme selon la tension de l'installation (500 V en courant continu pour les circuits 230/400 V, 250 V pour les circuits en TBTS ou TBTP). La valeur mesurée doit être supérieure à la valeur minimale fixée par la norme d'installation pour la tension considérée, de l'ordre du mégohm.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mesurer l'isolement d'un tableau divisionnaire neuf.<br>1. Consigner le tableau (séparation, condamnation, VAT).<br>2. Déconnecter ou protéger les matériels sensibles à la tension d'essai : variateurs, alimentations électroniques, parafoudres, détecteurs, horloges électroniques (ou mesurer en amont de ces matériels).<br>3. Fermer tous les appareils de protection et de commande du tableau pour que la mesure englobe tous les circuits.<br>4. Relier ensemble les conducteurs actifs (phases et neutre) et mesurer l'isolement entre cet ensemble et la terre, sous 500 V DC.<br>5. Si possible, mesurer aussi entre conducteurs actifs, matériels d'utilisation débranchés.<br>6. Comparer la valeur obtenue au minimum normatif ; une valeur insuffisante conduit à rechercher le circuit en défaut en ouvrant les départs un par un.<br>7. Reconnecter les matériels déconnectés et noter les résultats dans le procès-verbal.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la mesure d'isolement applique plusieurs centaines de volts : elle ne se fait jamais sous tension, ni en touchant les conducteurs testés, et elle peut détruire les matériels électroniques non déconnectés. Après la mesure, les câbles longs peuvent rester chargés : les appareils récents les déchargent automatiquement, mais il faut attendre la fin de la décharge.</div>\n"
      },
      {
       "titre": "Prise de terre, boucle de défaut et différentiels",
       "contenu": "\n<p>En schéma TT, on mesure la <strong>résistance de la prise de terre</strong>. Deux méthodes sont courantes :</p>\n<ul>\n<li>la méthode à deux <strong>piquets auxiliaires</strong> (ou méthode des 62 %), précise, réalisée barrette de terre ouverte, installation hors tension ;</li>\n<li>la <strong>mesure de boucle</strong> phase-terre, réalisée sous tension sans planter de piquet, qui donne une valeur par excès (elle inclut la terre du neutre au poste), souvent suffisante pour vérifier la condition de protection.</li>\n</ul>\n<p>La valeur mesurée est comparée à la valeur maximale déduite de la condition R<sub>A</sub> × I<sub>Δn</sub> ≤ U<sub>L</sub>. En schéma TN, on mesure l'<strong>impédance de boucle de défaut</strong> pour vérifier que le courant de défaut sera suffisant pour faire déclencher la protection dans le temps exigé.</p>\n<p>Les <strong>dispositifs différentiels</strong> sont testés de deux façons : par leur bouton test (qui vérifie seulement la mécanique) et, surtout, par le contrôleur, qui injecte un courant de défaut et mesure :</p>\n<ul>\n<li>le <strong>courant de déclenchement</strong>, qui doit être compris entre la moitié et la totalité de I<sub>Δn</sub> ;</li>\n<li>le <strong>temps de déclenchement</strong> à I<sub>Δn</sub>, comparé au temps maximal admis pour le type de différentiel (instantané ou sélectif).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> interpréter un test de différentiel 30 mA de type A instantané.<br>Résultats : déclenchement en rampe à 22 mA ; temps à 30 mA : 18 ms.<br>1. Le courant de déclenchement doit être compris entre 15 mA (la moitié) et 30 mA : 22 mA convient.<br>2. Le temps mesuré (18 ms) est très inférieur au temps maximal admis pour un différentiel instantané à I<sub>Δn</sub> (de l'ordre de 300 ms) : le résultat est conforme.<br>3. Si le différentiel déclenchait à 12 mA, il serait trop sensible et provoquerait des déclenchements intempestifs ; s'il ne déclenchait pas à 30 mA, il devrait être remplacé immédiatement.</div>\n"
      },
      {
       "titre": "Mettre en service et valider le fonctionnement",
       "contenu": "\n<p>Une fois les contrôles réalisés, la mise sous tension se fait <strong>progressivement</strong>, de l'amont vers l'aval : arrivée générale, puis chaque départ l'un après l'autre, en vérifiant à chaque étape les tensions (valeurs, ordre des phases sur les circuits triphasés) et l'absence d'anomalie (odeur, échauffement, bruit).</p>\n<p>Viennent ensuite les <strong>réglages et paramétrages</strong> : réglage des protections (seuils thermiques et magnétiques des disjoncteurs de puissance selon la note de calcul, réglage des relais thermiques), paramétrage des variateurs, des horloges, des détecteurs, des automates, des équipements communicants.</p>\n<p>La <strong>validation du fonctionnement</strong> consiste à vérifier, fonction par fonction, que l'installation répond au cahier des charges : chaque commande agit sur le bon récepteur, les scénarios programmés se déroulent correctement, les sécurités (arrêt d'urgence, fins de course, asservissements incendie) réagissent, les mesures (courants, puissances) sont cohérentes avec les prévisions.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la validation se fait avec une <strong>fiche d'essais</strong> préparée à partir de l'analyse fonctionnelle : une ligne par fonction, le résultat attendu, le résultat obtenu, la conformité et les observations. Cette fiche, signée, devient une pièce du dossier remis au client et protège l'entreprise en cas de litige.</div>\n"
      },
      {
       "titre": "Attestation de conformité et vérifications réglementaires",
       "contenu": "\n<p>Pour qu'une installation de consommation <strong>neuve</strong> (ou entièrement rénovée avec mise hors tension par le gestionnaire de réseau) soit raccordée au réseau public, l'installateur établit une <strong>attestation de conformité</strong> et la fait viser par le <strong>Consuel</strong> (Comité national pour la sécurité des usagers de l'électricité). Le Consuel peut réaliser une visite de contrôle avant de viser l'attestation. Il existe plusieurs modèles d'attestation selon la nature de l'installation (habitation réalisée par un professionnel ou par un particulier, locaux non résidentiels, installations de production) : l'installateur doit utiliser le bon modèle.</p>\n<p>Dans les établissements employant des travailleurs, le <strong>Code du travail</strong> impose des <strong>vérifications initiales</strong> à la mise en service ou après une modification importante, puis des <strong>vérifications périodiques</strong>, réalisées par un organisme accrédité ou une personne qualifiée. Les établissements recevant du public sont aussi soumis à des vérifications prévues par leur règlement de sécurité. Les rapports de vérification listent les <strong>non-conformités</strong> à corriger : leur levée est souvent confiée à l'électricien de maintenance.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'autocontrôle de l'installateur ne remplace pas les vérifications réglementaires, mais il les prépare : une installation mesurée et documentée par l'entreprise passe le contrôle sans surprise.</div>\n"
      },
      {
       "titre": "Réception des travaux et dossier des ouvrages exécutés",
       "contenu": "\n<p>La <strong>réception</strong> est l'acte par lequel le maître d'ouvrage accepte les travaux, avec ou sans <strong>réserves</strong>. Elle est préparée par les <strong>opérations préalables à la réception</strong> (OPR) : visite contradictoire des ouvrages avec le maître d'œuvre, au cours de laquelle on liste les défauts, oublis ou finitions à reprendre.</p>\n<p>Les réserves sont consignées dans un procès-verbal avec un délai de levée. L'entreprise réalise les reprises puis fait constater la <strong>levée des réserves</strong>. La réception fait démarrer les garanties légales (garantie de parfait achèvement d'un an, garantie de bon fonctionnement pour les équipements dissociables, garantie décennale pour les ouvrages qui compromettent la solidité ou l'usage du bâtiment).</p>\n<p>L'entreprise remet le <strong>dossier des ouvrages exécutés</strong> (DOE), qui comprend notamment :</p>\n<ul>\n<li>les plans et schémas <strong>conformes à l'exécution</strong>, intégrant toutes les modifications réalisées sur le chantier ;</li>\n<li>les notes de calcul, les fiches techniques et notices des matériels installés ;</li>\n<li>les procès-verbaux d'essais et de mesures, les rapports de recette (câblage, fibre) ;</li>\n<li>les sauvegardes des paramétrages et des programmes (variateurs, automates, projet KNX) ;</li>\n<li>les consignes d'exploitation et de maintenance.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un DOE contenant les plans « de principe » au lieu des plans réellement exécutés est une source majeure d'erreurs et d'accidents lors des interventions futures. Il faut reporter au fur et à mesure, sur un jeu de plans de chantier, chaque modification réalisée.</div>\n"
      }
     ],
     "points_cles": [
      "Ordre des contrôles : examen visuel, continuité, isolement, puis sous tension terre ou boucle, différentiels, ordre des phases.",
      "La continuité se mesure avec au moins 200 mA, cordons compensés.",
      "L'isolement se mesure hors tension sous 500 V DC pour les circuits 230/400 V, matériels sensibles déconnectés.",
      "En TT, la prise de terre se compare à UL / IΔn ; en TN, on vérifie l'impédance de boucle.",
      "Un différentiel doit déclencher entre IΔn/2 et IΔn, dans le temps maximal admis pour son type.",
      "La mise sous tension se fait progressivement de l'amont vers l'aval, puis on règle, paramètre et valide chaque fonction.",
      "L'attestation de conformité visée par le Consuel est nécessaire au raccordement d'une installation neuve.",
      "OPR, réserves, levée des réserves et DOE conforme à l'exécution concluent l'opération."
     ],
     "lexique": [
      {
       "terme": "Contrôleur d'installation",
       "def": "Appareil multifonction mesurant continuité, isolement, terre, boucle et différentiels."
      },
      {
       "terme": "Continuité",
       "def": "Mesure vérifiant la liaison électrique de faible résistance des conducteurs de protection."
      },
      {
       "terme": "Résistance d'isolement",
       "def": "Résistance entre conducteurs ou entre conducteurs et terre, mesurée sous tension continue d'essai."
      },
      {
       "terme": "Impédance de boucle",
       "def": "Impédance du circuit parcouru par un courant de défaut, qui conditionne sa valeur."
      },
      {
       "terme": "Consuel",
       "def": "Organisme qui vise les attestations de conformité des installations électriques neuves."
      },
      {
       "terme": "Vérification initiale",
       "def": "Contrôle réglementaire d'une installation à sa mise en service ou après modification importante."
      },
      {
       "terme": "OPR",
       "def": "Opérations préalables à la réception : visite contradictoire des ouvrages avant réception."
      },
      {
       "terme": "Réserve",
       "def": "Défaut ou manque constaté à la réception que l'entreprise doit corriger."
      },
      {
       "terme": "DOE",
       "def": "Dossier des ouvrages exécutés remis au client à la fin des travaux."
      },
      {
       "terme": "Fiche d'essais",
       "def": "Document listant les fonctions testées, les résultats attendus et obtenus."
      }
     ]
    },
    {
     "id": "bmel-diagnostic-depannage",
     "titre": "Diagnostiquer un dysfonctionnement et remplacer un matériel",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Conduire un diagnostic selon une démarche structurée, du symptôme à la cause.",
      "Choisir les mesures adaptées et les réaliser en sécurité, sous ou hors tension.",
      "Localiser un défaut par la méthode des mesures successives ou de la dichotomie.",
      "Remplacer un matériel à l'identique ou par un équivalent en vérifiant sa compatibilité.",
      "Rédiger un compte rendu d'intervention exploitable par la maintenance."
     ],
     "sections": [
      {
       "titre": "Une démarche en étapes",
       "contenu": "\n<p>Face à une installation en panne, l'improvisation coûte cher : remplacements inutiles, temps perdu, risques pour l'intervenant. Le <strong>diagnostic</strong> suit une démarche structurée, qui prolonge celle présentée en seconde :</p>\n<ol>\n<li><strong>Prendre en compte la demande</strong> : écouter l'utilisateur, relever précisément le <strong>symptôme</strong> (ce qui est constaté), les circonstances (depuis quand, après quel événement, de façon permanente ou aléatoire) et les actions déjà tentées ;</li>\n<li><strong>Constater le dysfonctionnement</strong> soi-même, si c'est possible sans danger, et observer : voyants, messages de défaut, odeur, bruit, traces d'échauffement ;</li>\n<li><strong>Analyser le fonctionnement</strong> à l'aide du dossier technique : schémas, GRAFCET, notice. On délimite la partie de l'installation concernée et on liste les <strong>causes possibles</strong> ;</li>\n<li><strong>Classer les hypothèses</strong> par probabilité et par facilité de vérification ;</li>\n<li><strong>Vérifier les hypothèses</strong> par des essais et des mesures, jusqu'à localiser l'élément défaillant ;</li>\n<li><strong>Identifier la cause</strong> de la défaillance (et pas seulement l'élément défaillant), pour éviter qu'elle se reproduise ;</li>\n<li><strong>Remettre en état</strong>, essayer, et rendre compte.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on distingue le <strong>symptôme</strong> (la pompe ne démarre pas), la <strong>défaillance</strong> (le contacteur ne se ferme pas), l'<strong>élément défaillant</strong> (la bobine du contacteur est coupée) et la <strong>cause</strong> (bobine 24 V alimentée par erreur en 230 V lors d'une modification).</div>\n"
      },
      {
       "titre": "Les outils de l'analyse",
       "contenu": "\n<p>Plusieurs outils aident à organiser la réflexion :</p>\n<ul>\n<li>le <strong>diagramme causes-effet</strong> (ou d'Ishikawa) range les causes possibles en familles, souvent les « 5 M » : matière, matériel, méthode, main-d'œuvre, milieu ;</li>\n<li>l'<strong>arbre de défaillance</strong> part de l'événement indésirable et descend vers les causes élémentaires reliées par des portes ET et OU ;</li>\n<li>le <strong>logigramme de dépannage</strong>, fourni par certains constructeurs ou construit par l'équipe de maintenance, enchaîne questions et vérifications (oui ou non) jusqu'à la cause ;</li>\n<li>l'<strong>historique</strong> des interventions sur l'équipement, dans la GMAO (gestion de maintenance assistée par ordinateur) ou le carnet de maintenance, révèle les pannes répétitives ;</li>\n<li>les <strong>codes de défaut</strong> des appareils électroniques (variateurs, onduleurs, centrales) et leur table de correspondance dans la notice.</li>\n</ul>\n<p>La lecture du schéma reste l'outil principal. On suit le trajet de l'énergie (puissance) ou de l'information (commande) depuis la source jusqu'au récepteur, et on note les points accessibles où une mesure permettra de trancher.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer un fusible ou réarmer un disjoncteur sans rechercher pourquoi il a fonctionné est une faute : si le défaut est toujours présent, la protection agira de nouveau, parfois avec un arc dangereux ; si le défaut est intermittent, il reviendra.</div>\n"
      },
      {
       "titre": "Mesurer pour localiser",
       "contenu": "\n<p>Deux familles de mesures sont utilisées, chacune avec ses conditions de sécurité :</p>\n<table>\n<thead><tr><th>Mesure</th><th>Conditions</th><th>Ce qu'elle révèle</th></tr></thead>\n<tbody>\n<tr><td>Tension (voltmètre)</td><td>Sous tension, habilitation BR, EPI, cordons et appareil de catégorie de mesure adaptée</td><td>Présence ou absence d'alimentation à un point, contact ouvert, chute de tension anormale</td></tr>\n<tr><td>Courant (pince ampèremétrique)</td><td>Sous tension, sans ouvrir le circuit</td><td>Surcharge, déséquilibre, consommation nulle d'un récepteur, courant de fuite (pince de fuite)</td></tr>\n<tr><td>Continuité, résistance (ohmmètre)</td><td>Hors tension, circuit isolé de ses dérivations</td><td>Conducteur coupé, contact défectueux, bobine coupée ou en court-circuit</td></tr>\n<tr><td>Isolement (mégohmmètre)</td><td>Hors tension, consignation, électronique déconnectée</td><td>Défaut d'isolement d'un câble, d'un moteur, d'un récepteur</td></tr>\n<tr><td>Température (thermographie infrarouge)</td><td>Sous charge, à distance, en respectant le voisinage</td><td>Connexion desserrée, surcharge, déséquilibre</td></tr>\n</tbody>\n</table>\n<p>Pour localiser un défaut sur une chaîne de contacts ou de conducteurs, on applique la <strong>méthode des mesures successives</strong> : on mesure la tension point par point le long du circuit, depuis la source ; le défaut se trouve entre le dernier point où la tension est présente et le premier point où elle est absente. Sur une chaîne longue, la <strong>dichotomie</strong> (ou demi-coupure) est plus rapide : on mesure au milieu de la chaîne, puis au milieu de la moitié en défaut, et ainsi de suite.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> localiser une coupure dans un circuit de commande en 24 V AC.<br>Circuit : transformateur → disjoncteur de commande Q2 → arrêt d'urgence S0 → bouton arrêt S1 → bouton marche S2 (en parallèle avec l'auto-maintien KM1) → contact du relais thermique F1 → bobine KM1 → retour commun.<br>Symptôme : la pompe ne démarre pas, le voyant « sous tension » est allumé.<br>1. Mesure entre la sortie de Q2 et le commun : 24 V présents.<br>2. Dichotomie : mesure en sortie de S1 (milieu de la chaîne) : 24 V présents, le défaut est en aval.<br>3. Appui maintenu sur S2, mesure en sortie de F1 : 0 V. Mesure en entrée de F1 : 24 V. Le contact de F1 est ouvert.<br>4. Constat : le relais thermique F1 a déclenché. Il ne faut pas réarmer immédiatement : on cherche la cause de la surcharge (mesure de courant moteur, état de la pompe, réglage du relais par rapport à la plaque).<br>5. Cause trouvée : roue de la pompe partiellement bloquée par un dépôt. Après nettoyage et réarmement, le courant mesuré est conforme à la plaque.</div>\n"
      },
      {
       "titre": "Remplacer un matériel électrique",
       "contenu": "\n<p>Une fois l'élément défaillant identifié, le technicien le remplace. Deux cas se présentent :</p>\n<ul>\n<li>le <strong>remplacement à l'identique</strong> : même fabricant, même référence. C'est le cas le plus simple, mais il faut vérifier que la référence n'a pas évolué (version, tension de bobine, calibre) ;</li>\n<li>le <strong>remplacement par un équivalent</strong> : le matériel d'origine n'est plus disponible ou un autre fabricant est imposé. Il faut alors vérifier toutes les caractéristiques : électriques (tension, calibre, pouvoir de coupure, courbe, catégorie d'emploi, sensibilité et type de différentiel), mécaniques (encombrement, fixation, raccordement), fonctionnelles (contacts auxiliaires, paramètres, communication) et normatives (marquage, indice de protection).</li>\n</ul>\n<p>Le remplacement se fait <strong>hors tension</strong> après consignation, en respectant le repérage des conducteurs (photo et étiquetage avant démontage), les couples de serrage et les consignes du fabricant. Il est suivi des essais nécessaires : contrôle de continuité de la protection, réglage ou paramétrage, essai fonctionnel, mesures de courant.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le remplacement d'un variateur obsolète par un modèle récent d'une autre gamme nécessite de réécrire la correspondance des bornes de commande, de reparamétrer intégralement le variateur et, s'il est communicant, de mettre à jour la configuration de l'automate ou de la supervision. Ce n'est plus un simple remplacement : on prépare l'intervention comme une petite modification, avec mise à jour du schéma.</div>\n"
      },
      {
       "titre": "Maintenance et niveaux d'intervention",
       "contenu": "\n<p>Le diagnostic s'inscrit dans la politique de maintenance du site. On rappelle les grands types de maintenance vus en seconde : <strong>corrective</strong> (après défaillance) et <strong>préventive</strong> (systématique, selon un échéancier, ou conditionnelle, selon l'état mesuré). En première et terminale, on précise :</p>\n<ul>\n<li>la maintenance <strong>corrective palliative</strong> (dépannage provisoire qui permet de redémarrer) et <strong>curative</strong> (réparation définitive) ;</li>\n<li>la maintenance <strong>prévisionnelle</strong>, qui exploite l'évolution de paramètres mesurés (température, vibrations, isolement, courant) pour anticiper une défaillance ;</li>\n<li>les <strong>niveaux de maintenance</strong> (de 1, réglages simples par l'opérateur, à 5, rénovation ou reconstruction) qui définissent qui peut intervenir, avec quels moyens et quelles connaissances.</li>\n</ul>\n<p>Les indicateurs les plus utilisés sont la <strong>MTBF</strong> (moyenne des temps de bon fonctionnement entre deux défaillances) et la <strong>MTTR</strong> (moyenne des temps techniques de réparation). Un dépannage efficace et bien documenté réduit la MTTR ; l'analyse des causes et les actions préventives augmentent la MTBF.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer MTBF et MTTR.<br>Sur une période de 2 000 heures d'ouverture, une centrale de traitement d'air est tombée en panne 4 fois ; les temps de réparation ont été de 2 h, 3 h, 1 h et 2 h.<br>1. Temps total d'arrêt : 2 + 3 + 1 + 2 = 8 h.<br>2. Temps de bon fonctionnement : 2 000 − 8 = 1 992 h.<br>3. MTBF = 1 992 / 4 = 498 h.<br>4. MTTR = 8 / 4 = 2 h.<br>5. Interprétation : une panne en moyenne toutes les 500 heures environ ; l'analyse des causes de ces quatre pannes permettra de cibler une action préventive.</div>\n"
      },
      {
       "titre": "Rendre compte de l'intervention",
       "contenu": "\n<p>Une intervention n'est terminée qu'une fois le compte rendu rédigé. Le <strong>compte rendu d'intervention</strong> (ou bon d'intervention complété) mentionne :</p>\n<ul>\n<li>l'identification de l'équipement et du demandeur, la date et la durée ;</li>\n<li>le symptôme signalé et le constat ;</li>\n<li>les mesures réalisées et leurs résultats ;</li>\n<li>l'élément défaillant et la cause identifiée ;</li>\n<li>les actions réalisées, les pièces remplacées (références) et les réglages modifiés ;</li>\n<li>les essais de remise en service et leur résultat ;</li>\n<li>les recommandations : action préventive, surveillance, modification à prévoir, mise à jour du dossier technique.</li>\n</ul>\n<p>Le compte rendu alimente l'historique et la GMAO ; il sert à facturer et à justifier l'intervention auprès du client. On l'accompagne d'une explication orale à l'utilisateur, adaptée à son niveau, avec les consignes éventuelles (ne pas surcharger une prise multiple, signaler tout nouveau déclenchement).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un compte rendu du type « dépannage effectué, RAS » est inexploitable. La personne qui interviendra la fois suivante sur le même équipement doit pouvoir comprendre ce qui a été trouvé et fait, sans avoir à tout recommencer.</div>\n"
      }
     ],
     "points_cles": [
      "Démarche : prise en compte de la demande, constat, analyse, hypothèses, vérification, cause, remise en état, compte rendu.",
      "Symptôme, défaillance, élément défaillant et cause sont quatre notions différentes.",
      "Diagramme d'Ishikawa, arbre de défaillance, logigramme et historique structurent l'analyse.",
      "Les mesures de tension et de courant se font sous tension avec habilitation et EPI ; continuité et isolement hors tension.",
      "Méthode des mesures successives ou dichotomie pour localiser un défaut sur une chaîne.",
      "On ne réarme pas une protection sans avoir recherché la cause de son déclenchement.",
      "Un remplacement par un équivalent impose de vérifier toutes les caractéristiques électriques, mécaniques et fonctionnelles.",
      "MTBF : temps moyen entre défaillances ; MTTR : temps moyen de réparation."
     ],
     "lexique": [
      {
       "terme": "Symptôme",
       "def": "Manifestation observable d'un dysfonctionnement."
      },
      {
       "terme": "Défaillance",
       "def": "Cessation de l'aptitude d'un bien à accomplir sa fonction requise."
      },
      {
       "terme": "Diagramme d'Ishikawa",
       "def": "Outil classant les causes possibles d'un problème en familles (5 M)."
      },
      {
       "terme": "Dichotomie",
       "def": "Méthode de localisation qui divise à chaque mesure la zone de recherche par deux."
      },
      {
       "terme": "Thermographie infrarouge",
       "def": "Mesure à distance des températures permettant de repérer les échauffements anormaux."
      },
      {
       "terme": "GMAO",
       "def": "Gestion de maintenance assistée par ordinateur."
      },
      {
       "terme": "Maintenance palliative",
       "def": "Dépannage provisoire permettant de remettre un équipement en fonctionnement en attendant la réparation."
      },
      {
       "terme": "Maintenance prévisionnelle",
       "def": "Maintenance fondée sur l'évolution de paramètres mesurés pour anticiper une défaillance."
      },
      {
       "terme": "MTBF",
       "def": "Moyenne des temps de bon fonctionnement entre défaillances."
      },
      {
       "terme": "MTTR",
       "def": "Moyenne des temps techniques de réparation."
      },
      {
       "terme": "Compte rendu d'intervention",
       "def": "Document décrivant constat, mesures, causes, actions et recommandations d'une intervention."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Documents de conception et d'exécution",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bmel-doc-cctp-dpgf",
     "titre": "Le CCTP et la décomposition du prix du lot électricité",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Situer le CCTP et la DPGF parmi les pièces d'un marché de travaux.",
      "Repérer dans un CCTP les exigences techniques, normatives et les limites de prestation.",
      "Extraire d'un CCTP les informations utiles à la préparation d'une opération.",
      "Contrôler la cohérence entre CCTP, plans et DPGF.",
      "Rédiger une analyse structurée d'un extrait de CCTP."
     ],
     "sections": [
      {
       "titre": "Le CCTP dans le dossier de marché",
       "contenu": "\n<p>Pour un chantier de bâtiment, le maître d'ouvrage (le client) fait concevoir le projet par un maître d'œuvre (architecte, bureau d'études). Les travaux sont découpés en <strong>lots</strong> (gros œuvre, plomberie, électricité courants forts, courants faibles…) et chaque lot fait l'objet d'un dossier de consultation des entreprises. On y trouve en particulier :</p>\n<ul>\n<li>le <strong>CCAP</strong> (cahier des clauses administratives particulières) : délais, pénalités, modalités de paiement, de réception ;</li>\n<li>le <strong>CCTP</strong> (cahier des clauses techniques particulières) : description précise des ouvrages à réaliser, des matériels, des performances attendues et des règles d'exécution ;</li>\n<li>les <strong>plans</strong> et <strong>schémas</strong> de conception ;</li>\n<li>la <strong>DPGF</strong> (décomposition du prix global et forfaitaire) ou le <strong>BPU</strong> et le <strong>DQE</strong> (bordereau des prix unitaires et détail quantitatif estimatif) : cadre de réponse chiffrée de l'entreprise.</li>\n</ul>\n<p>Le CCTP est un document <strong>contractuel</strong> : ce qui y est écrit engage l'entreprise. En cas de contradiction entre pièces, le CCAP précise l'ordre de priorité ; le plus souvent, les pièces écrites priment sur les plans.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à l'épreuve comme en entreprise, le CCTP répond à la question « quoi et avec quel niveau de qualité ? ». Les plans répondent à « où ? ». La DPGF répond à « combien ? ».</div>\n"
      },
      {
       "titre": "Structure et vocabulaire d'un CCTP électricité",
       "contenu": "\n<p>Un CCTP de lot électricité suit généralement ce plan :</p>\n<ol>\n<li><strong>Généralités</strong> : objet du lot, description du bâtiment, classement (logement, ERP de telle catégorie, code du travail), documents de référence (normes, réglementation, DTU), limites de prestations avec les autres lots, documents à fournir (plans d'exécution, notes de calcul, DOE) ;</li>\n<li><strong>Bases de calcul</strong> : schéma de liaison à la terre, chutes de tension admises, réserves de puissance et de place dans les tableaux, niveaux d'éclairement ;</li>\n<li><strong>Description des ouvrages</strong>, article par article : origine de l'installation, TGBT et tableaux divisionnaires, canalisations, appareillage, éclairage, éclairage de sécurité, prises, alimentations spécifiques (CVC, ascenseur, IRVE), réseau de terre, courants faibles (VDI, alarme, contrôle d'accès, SSI) ;</li>\n<li><strong>Essais et réception</strong> : mesures, autocontrôles, recette, formation des utilisateurs.</li>\n</ol>\n<p>Quelques expressions reviennent souvent et ont un sens précis :</p>\n<table>\n<thead><tr><th>Expression</th><th>Sens</th></tr></thead>\n<tbody>\n<tr><td>« Fourniture, pose et raccordement »</td><td>L'entreprise achète, installe et raccorde le matériel</td></tr>\n<tr><td>« Type X ou techniquement équivalent »</td><td>Une référence est citée en exemple ; l'entreprise peut proposer un équivalent, à justifier par fiche technique</td></tr>\n<tr><td>« Dû par le présent lot » / « Hors lot »</td><td>Prestation à la charge du lot électricité / d'un autre lot</td></tr>\n<tr><td>« En attente »</td><td>Alimentation laissée prête à raccorder pour un autre lot (par exemple pour un équipement de climatisation)</td></tr>\n<tr><td>« Suivant plans » / « Suivant note de calcul »</td><td>Les quantités ou caractéristiques sont données par le document cité</td></tr>\n<tr><td>« Réserve de 20 % »</td><td>Espace et puissance disponibles pour des extensions futures</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un CCTP en vue de préparer l'opération.<br>1. Lire d'abord les généralités : type de bâtiment, réglementation applicable, limites de prestations. Surligner tout ce qui est « hors lot » ou « dû par le présent lot ».<br>2. Repérer l'article qui correspond à l'ouvrage étudié (par exemple « Tableau divisionnaire du R+1 ») et en dresser la liste des exigences : matériel, caractéristiques chiffrées, normes, repérage, réserve.<br>3. Pour chaque exigence chiffrée, noter l'unité et vérifier qu'elle est cohérente (calibre en A, section en mm², éclairement en lx, indice IP).<br>4. Relever les exigences d'exécution : mode de pose, hauteurs, cheminements, coordination avec les autres lots.<br>5. Relever les essais et documents exigés à la fin.<br>6. Croiser avec les plans : chaque élément décrit doit apparaître sur un plan, et inversement.<br>7. Croiser avec la DPGF : chaque élément décrit doit avoir une ligne de prix.<br>8. Lister les incohérences, imprécisions ou oublis : ce sont des questions à poser au maître d'œuvre par écrit.</div>\n<p>Cette lecture aboutit à une liste claire des tâches, des matériels et des contrôles. Elle permet aussi d'identifier les <strong>prestations oubliées</strong> par le concepteur, qui devront faire l'objet d'un devis complémentaire si elles sont nécessaires.</p>\n"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "\n<ul>\n<li><strong>Confondre « type » et obligation</strong> : une référence citée « ou techniquement équivalent » n'impose pas la marque, mais l'équivalent doit présenter au moins les mêmes caractéristiques, et il doit être validé par le maître d'œuvre.</li>\n<li><strong>Oublier les généralités</strong> : une exigence écrite une seule fois en début de document (par exemple « tous les câbles seront de type sans halogène » ou « tous les équipements seront repérés par étiquettes gravées ») s'applique à tous les articles.</li>\n<li><strong>Ignorer les limites de prestations</strong> : percements, saignées, rebouchages, trappes de visite, socles en béton, alimentation des équipements d'autres lots… Leur répartition entre lots est souvent source de litige.</li>\n<li><strong>Prendre une quantité de DPGF pour argent comptant</strong> : dans un marché à prix global et forfaitaire, l'entreprise doit vérifier les quantités ; une erreur de quantité qu'elle n'a pas signalée reste à sa charge.</li>\n<li><strong>Négliger la référence à une norme ou à une édition</strong> : la mention d'une norme impose toutes ses prescriptions, même si elles ne sont pas recopiées.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> à l'épreuve, une réponse qui recopie le CCTP sans l'exploiter ne vaut rien. Il faut extraire, reformuler, chiffrer et justifier : « le CCTP impose X (article 3.4), ce qui implique Y pour notre opération ».</div>\n"
      },
      {
       "titre": "Exemple commenté : extrait de CCTP",
       "contenu": "\n<p>Le document analysé est un extrait de CCTP d'une opération de réhabilitation d'un bâtiment de bureaux (ERP de 5<sup>e</sup> catégorie au rez-de-chaussée, bureaux à l'étage), lot 08 « Électricité courants forts et faibles ». Il est reproduit ci-dessous sous forme de tableau.</p>\n<table>\n<thead><tr><th>Article</th><th>Contenu de l'extrait</th></tr></thead>\n<tbody>\n<tr><td>1.3 Limites de prestations</td><td>Les percements de diamètre inférieur à 50 mm et leurs rebouchages sont dus par le présent lot. Les trémies et saignées dans les murs porteurs sont dues par le lot 02 Gros œuvre. L'alimentation des unités de climatisation est due par le présent lot jusqu'à un interrupteur de proximité ; le raccordement de l'unité est dû par le lot 10 CVC.</td></tr>\n<tr><td>2.1 Bases de calcul</td><td>Schéma TT. Chute de tension maximale : 3 % éclairage, 5 % autres usages. Réserve de 20 % disponible dans chaque tableau.</td></tr>\n<tr><td>3.4 Tableau divisionnaire R+1 (TD1)</td><td>Fourniture, pose et raccordement d'un coffret métallique IP30 IK07, type X ou techniquement équivalent. Interrupteur général 4 × 63 A. Départs suivant schéma unifilaire. Protection différentielle 30 mA de type A pour tous les circuits de prises ; type F pour les circuits alimentant les postes informatiques. Repérage de tous les départs par étiquettes gravées. Parafoudre de type 2 en tête.</td></tr>\n<tr><td>3.9 Éclairage des bureaux</td><td>Luminaires LED dalle 600 × 600, 3 400 lm minimum, 4 000 K, IRC supérieur ou égal à 80, UGR inférieur à 19, driver DALI. Éclairement moyen à maintenir : 500 lx sur le plan de travail. Gestion par détecteurs de présence et d'absence avec gradation selon la lumière du jour, suivant plans.</td></tr>\n<tr><td>5.2 Essais</td><td>L'entreprise réalisera les mesures de continuité, d'isolement, de prise de terre et les essais des dispositifs différentiels, consignés dans un procès-verbal remis au maître d'œuvre avant les OPR.</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Analyse modèle de l'extrait",
       "contenu": "\n<p><strong>Contexte et réglementation.</strong> Le bâtiment comporte un ERP de 5<sup>e</sup> catégorie et des bureaux : les règles du Code du travail et du règlement de sécurité des ERP s'appliquent en plus de la norme d'installation. Le schéma TT impose une protection des personnes par dispositifs différentiels ; la valeur de la prise de terre sera à mesurer et à comparer à la condition R<sub>A</sub> × I<sub>Δn</sub> ≤ 50 V.</p>\n<p><strong>Limites de prestations.</strong> Notre lot réalise les petits percements (moins de 50 mm) et leurs rebouchages : il faut prévoir l'outillage et les matériaux de rebouchage, et le temps correspondant. Les saignées dans les murs porteurs sont à demander au gros œuvre : à intégrer au planning comme point d'arrêt. Pour la climatisation, nous posons la ligne et l'interrupteur de proximité, mais nous ne raccordons pas l'unité : la limite est l'interrupteur.</p>\n<p><strong>Tableau TD1.</strong> Exigences relevées : coffret métallique IP30 IK07, interrupteur général tétrapolaire 63 A, départs selon unifilaire, différentiels 30 mA type A pour les prises et type F pour l'informatique, parafoudre de type 2, étiquettes gravées, 20 % de réserve (exigence des généralités, à appliquer aussi au TD1). Pour la commande, le coffret doit donc être choisi avec 20 % de modules libres après implantation de tous les départs.</p>\n<p><strong>Éclairage.</strong> Le choix du luminaire doit respecter toutes les caractéristiques : flux au moins égal à 3 400 lm, 4 000 K, IRC d'au moins 80, UGR inférieur à 19, driver DALI. Un luminaire « équivalent » de 3 200 lm ne serait pas conforme. L'éclairement de 500 lx est un résultat à vérifier au luxmètre à la réception. La gestion par détecteurs et la gradation imposent un câblage DALI (deux conducteurs supplémentaires) et un paramétrage à prévoir dans le temps de mise en service.</p>\n<p><strong>Essais.</strong> Le procès-verbal doit être remis avant les OPR : la date des mesures doit donc précéder la visite de réception dans le planning.</p>\n<p><strong>Points à clarifier par écrit.</strong> Le CCTP ne précise pas le type de différentiel pour les circuits d'éclairage DALI ni pour l'alimentation de la climatisation : question à poser au maître d'œuvre, en s'appuyant sur les notices des fabricants.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les questions à la maîtrise d'œuvre se posent par écrit (courriel, fiche de demande d'information) et leurs réponses sont conservées : elles complètent le CCTP et protègent l'entreprise en cas de désaccord ultérieur.</div>\n"
      }
     ],
     "points_cles": [
      "CCAP pour l'administratif, CCTP pour le technique, plans pour la localisation, DPGF pour le prix.",
      "Le CCTP est contractuel ; les généralités s'appliquent à tous les articles.",
      "« Type X ou techniquement équivalent » autorise un équivalent justifié et validé.",
      "Les limites de prestations entre lots se lisent dans les généralités et dans chaque article.",
      "On croise toujours CCTP, plans et DPGF pour détecter oublis et incohérences.",
      "Toute caractéristique chiffrée du CCTP devient un critère de choix ou de contrôle.",
      "Les questions au maître d'œuvre se posent et se conservent par écrit.",
      "Analyser, c'est extraire, reformuler et tirer les conséquences pour l'opération."
     ],
     "lexique": [
      {
       "terme": "Maître d'ouvrage",
       "def": "Personne ou organisme pour le compte duquel les travaux sont réalisés."
      },
      {
       "terme": "Maître d'œuvre",
       "def": "Concepteur qui dirige et contrôle l'exécution des travaux pour le maître d'ouvrage."
      },
      {
       "terme": "Lot",
       "def": "Partie des travaux confiée à une entreprise selon sa spécialité."
      },
      {
       "terme": "CCTP",
       "def": "Cahier des clauses techniques particulières décrivant les ouvrages et leurs exigences."
      },
      {
       "terme": "CCAP",
       "def": "Cahier des clauses administratives particulières d'un marché."
      },
      {
       "terme": "DPGF",
       "def": "Décomposition du prix global et forfaitaire : cadre de chiffrage de l'offre."
      },
      {
       "terme": "Techniquement équivalent",
       "def": "Matériel d'une autre référence présentant au moins les mêmes caractéristiques."
      },
      {
       "terme": "Limites de prestations",
       "def": "Répartition précise des tâches entre les différents lots."
      },
      {
       "terme": "En attente",
       "def": "Alimentation laissée prête au raccordement d'un équipement d'un autre lot."
      },
      {
       "terme": "Demande d'information",
       "def": "Question écrite adressée au maître d'œuvre pour lever une ambiguïté du dossier."
      }
     ]
    },
    {
     "id": "bmel-doc-plans-unifilaire",
     "titre": "Plan d'implantation et schéma unifilaire de distribution",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Lire un plan d'implantation électrique : symboles, repères de circuits, cartouche, échelle.",
      "Lire un schéma unifilaire de tableau : arrivée, protections, départs, caractéristiques.",
      "Relier un point du plan au départ correspondant du schéma unifilaire.",
      "Vérifier la cohérence des caractéristiques d'un départ (calibre, section, différentiel, longueur).",
      "Exploiter ces documents pour répondre à une question de préparation ou de dépannage."
     ],
     "sections": [
      {
       "titre": "Deux documents complémentaires",
       "contenu": "\n<p>Le cours de seconde a présenté les grandes familles de plans et de schémas. Dans un dossier tertiaire ou industriel, deux documents sont exploités ensemble en permanence :</p>\n<ul>\n<li>le <strong>plan d'implantation</strong> (ou plan d'exécution électrique) : vue de dessus du bâtiment, à l'échelle (souvent 1/50 ou 1/100), sur laquelle sont placés les appareils (luminaires, prises, commandes, détecteurs, tableaux, chemins de câbles), avec le <strong>repère du circuit</strong> qui les alimente ;</li>\n<li>le <strong>schéma unifilaire</strong> : représentation de la distribution électrique dans laquelle chaque canalisation, quel que soit son nombre de conducteurs, est dessinée par un seul trait. Il montre l'arborescence depuis l'origine de l'installation (TGBT) jusqu'aux tableaux divisionnaires et à leurs départs, avec toutes les caractéristiques des protections et des câbles.</li>\n</ul>\n<p>Le lien entre les deux est le <strong>repère de départ</strong> : sur le plan, une prise porte par exemple l'indication « TD1-12 » ; sur l'unifilaire du tableau TD1, le départ 12 donne la protection et le câble de ce circuit.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le plan répond à « où est l'appareil et par où passe le câble ? » ; l'unifilaire répond à « d'où vient l'énergie et comment le circuit est-il protégé ? ».</div>\n"
      },
      {
       "titre": "Structure et vocabulaire du plan d'implantation",
       "contenu": "\n<p>Un plan d'implantation comporte :</p>\n<ul>\n<li>un <strong>cartouche</strong> (en bas à droite) : nom du projet, maître d'ouvrage, maître d'œuvre, entreprise, titre du plan, niveau (RDC, R+1), échelle, numéro de plan, <strong>indice de révision</strong> et date. L'indice (A, B, C…) indique la version : on travaille toujours avec le dernier indice ;</li>\n<li>une <strong>légende</strong> des symboles utilisés, conforme aux symboles normalisés mais souvent complétée par des symboles propres au bureau d'études ;</li>\n<li>le fond de plan architectural (murs, portes, cotes, noms et surfaces des locaux) ;</li>\n<li>les appareils, avec des annotations : repère de circuit, hauteur de pose (par exemple « h = 1,10 m »), indice de protection, référence de luminaire ;</li>\n<li>les cheminements principaux (chemins de câbles en faux plafond, goulottes, colonnes montantes) ;</li>\n<li>des renvois vers d'autres plans (coupes, détails, plans des courants faibles).</li>\n</ul>\n<p>Les courants forts (éclairage, prises, alimentations) et les courants faibles (VDI, alarme, SSI, contrôle d'accès) font souvent l'objet de plans séparés, pour rester lisibles.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mesurer une longueur sur un plan imprimé n'est fiable que si le plan est imprimé à son échelle réelle. Un plan A1 imprimé en A3 n'est plus au 1/100. On vérifie avec une cote connue (largeur d'une porte, cote indiquée sur le plan) avant de mesurer.</div>\n"
      },
      {
       "titre": "Structure et vocabulaire du schéma unifilaire",
       "contenu": "\n<p>Un schéma unifilaire de tableau se lit de haut en bas :</p>\n<ol>\n<li>l'<strong>arrivée</strong> : provenance (par exemple « depuis TGBT départ D7 »), câble d'alimentation (type, section, longueur), appareil de tête (interrupteur-sectionneur ou disjoncteur général), parafoudre ;</li>\n<li>les <strong>jeux de barres</strong> ou peignes de répartition, avec éventuellement des différentiels de groupe ;</li>\n<li>les <strong>départs</strong>, chacun décrit par une colonne de caractéristiques.</li>\n</ol>\n<p>Sous chaque départ, un tableau donne en général les informations suivantes :</p>\n<table>\n<thead><tr><th>Ligne</th><th>Exemple</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Repère</td><td>TD1-12</td><td>Identifiant du départ, reporté sur le plan et sur l'étiquette</td></tr>\n<tr><td>Désignation</td><td>Prises bureaux 1.04 à 1.06</td><td>Usage et localisation</td></tr>\n<tr><td>Protection</td><td>Disjoncteur 1P+N 20 A courbe C, PdC 6 kA</td><td>Nombre de pôles, calibre, courbe, pouvoir de coupure</td></tr>\n<tr><td>Différentiel</td><td>30 mA type A (groupe de 4 départs)</td><td>Sensibilité, type, départs protégés</td></tr>\n<tr><td>Câble</td><td>U1000 R2V 3G2,5</td><td>Type de câble, nombre de conducteurs (G : avec vert-jaune) et section en mm²</td></tr>\n<tr><td>Longueur</td><td>32 m</td><td>Longueur de la canalisation</td></tr>\n<tr><td>Puissance, I<sub>B</sub></td><td>2,5 kW ; 12 A</td><td>Puissance prévue et courant d'emploi</td></tr>\n<tr><td>Chute de tension</td><td>ΔU cumulée 2,1 %</td><td>Résultat de la note de calcul depuis l'origine</td></tr>\n<tr><td>Phase</td><td>L2</td><td>Phase de raccordement, pour l'équilibrage</td></tr>\n</tbody>\n</table>\n<p>Les colonnes vides marquées « réserve » ou « disponible » correspondent à la réserve exigée par le CCTP.</p>\n"
      },
      {
       "titre": "Méthode de lecture croisée",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter ensemble plan et unifilaire.<br>1. Vérifier les cartouches : même projet, même niveau, derniers indices de révision.<br>2. Sur le plan, repérer l'appareil ou la zone concernée par la question et relever son repère de circuit.<br>3. Sur l'unifilaire du tableau indiqué, retrouver le départ, puis relever toutes ses caractéristiques.<br>4. Remonter l'arborescence : différentiel de groupe, appareil de tête du tableau, départ du TGBT qui l'alimente. On obtient ainsi la liste des appareils à manœuvrer pour consigner le circuit.<br>5. Vérifier la cohérence du départ : I<sub>B</sub> ≤ I<sub>n</sub> ; section compatible avec le calibre ; type de différentiel adapté aux récepteurs ; chute de tension dans la limite.<br>6. Revenir au plan pour estimer la longueur et le cheminement du câble, et identifier les autres appareils du même circuit.<br>7. Rédiger la réponse en citant les repères et les valeurs relevées.</div>\n<p>Cette lecture croisée est indispensable aussi bien pour préparer une modification (quel départ est disponible ? la protection amont supportera-t-elle la nouvelle charge ?) que pour un dépannage (quels locaux sont privés de courant si tel différentiel déclenche ?).</p>\n"
      },
      {
       "titre": "Exemple commenté : extension d'un bureau",
       "contenu": "\n<p><strong>Situation.</strong> Le client souhaite ajouter dans le bureau 1.05 une imprimante multifonction de 1 800 W, au plus près de la prise existante. On dispose de deux documents.</p>\n<p><strong>Document 1 : extrait du plan d'implantation R+1</strong>, échelle 1/50, indice C. Dans le bureau 1.05 (surface 14 m²), on trouve trois prises 2P+T repérées « TD1-12 » à 0,30 m du sol, deux prises repérées « TD1-14 (informatique) », un poste de travail VDI, quatre dalles LED repérées « TD1-3 » commandées par un détecteur. Le tableau TD1 est situé dans le local technique à l'extrémité du couloir ; un chemin de câbles en faux plafond longe le couloir.</p>\n<p><strong>Document 2 : extrait de l'unifilaire du TD1</strong>, indice C.</p>\n<table>\n<thead><tr><th>Repère</th><th>Désignation</th><th>Protection</th><th>Différentiel</th><th>Câble</th><th>Longueur</th><th>I<sub>B</sub></th><th>ΔU cumulée</th></tr></thead>\n<tbody>\n<tr><td>TD1-12</td><td>Prises bureaux 1.04 à 1.06</td><td>1P+N 20 A C</td><td>Groupe 30 mA type A (départs 11 à 14)</td><td>3G2,5</td><td>32 m</td><td>12 A</td><td>2,1 %</td></tr>\n<tr><td>TD1-14</td><td>Prises informatique bureaux 1.04 à 1.06</td><td>1P+N 16 A C</td><td>Groupe 30 mA type A (départs 11 à 14)</td><td>3G2,5</td><td>34 m</td><td>10 A</td><td>2,0 %</td></tr>\n<tr><td>TD1-19</td><td>Réserve</td><td>Emplacement libre (2 modules)</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>\n<tr><td>TD1-20</td><td>Réserve</td><td>Emplacement libre (2 modules)</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Analyse modèle de l'exemple",
       "contenu": "\n<p><strong>Identification.</strong> Les prises du bureau 1.05 sont sur les départs TD1-12 (usage général) et TD1-14 (informatique), tous deux protégés par un différentiel de groupe 30 mA type A commun aux départs 11 à 14. Les deux documents sont à l'indice C : ils sont cohérents.</p>\n<p><strong>Calcul de la charge supplémentaire.</strong> L'imprimante absorbe 1 800 W sous 230 V, soit I ≈ 1 800 / 230 ≈ 7,8 A en pointe (pendant le chauffage du fixateur). Sur TD1-12, le courant d'emploi prévu est de 12 A : en ajoutant 7,8 A, on atteint environ 19,8 A, très proche du calibre de 20 A. Le risque de déclenchement en période de forte utilisation est réel, et le circuit dessert déjà trois bureaux. Sur TD1-14, on atteindrait 17,8 A, au-delà du calibre de 16 A : solution à exclure.</p>\n<p><strong>Solution proposée.</strong> Créer un circuit dédié à partir d'un emplacement de réserve (TD1-19) : disjoncteur 1P+N 16 A courbe C, câble 3G2,5, une prise dans le bureau 1.05. Le différentiel de groupe existant ne protège que les départs 11 à 14 : il faut prévoir un différentiel 30 mA pour le nouveau départ (par exemple un disjoncteur différentiel), de type adapté à l'alimentation électronique de l'imprimante selon sa notice. La longueur sera voisine de celle du TD1-12 (environ 32 m), par le chemin de câbles du couloir ; la chute de tension devra être vérifiée, mais avec une section de 2,5 mm² et un courant plus faible que celui de TD1-12, elle restera du même ordre que celle de ce départ, donc inférieure à 5 %.</p>\n<p><strong>Conséquences pour la préparation.</strong> L'utilisation d'un emplacement de réserve doit être signalée au client, car elle réduit la réserve exigée de 20 %. Le raccordement au TD1 se fera après consignation du tableau ou au voisinage selon l'organisation retenue. Les documents (plan et unifilaire) passeront à l'indice D avec le nouveau départ TD1-19 et l'étiquette sera ajoutée dans le tableau.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une modification, même petite, n'est terminée que lorsque l'unifilaire, le plan et le repérage du tableau sont mis à jour. Sinon, le prochain intervenant consignera un départ en se fiant à un document faux.</div>\n"
      }
     ],
     "points_cles": [
      "Le plan situe les appareils et les cheminements ; l'unifilaire décrit la distribution et les protections.",
      "Le repère de départ relie un appareil du plan au départ du tableau.",
      "Toujours vérifier projet, niveau et indice de révision dans les cartouches.",
      "On ne mesure sur un plan qu'après avoir contrôlé l'échelle avec une cote connue.",
      "Chaque départ de l'unifilaire indique protection, différentiel, câble, longueur, IB et chute de tension.",
      "Remonter l'arborescence donne la liste des appareils à consigner.",
      "Une charge ajoutée se vérifie par rapport au calibre et au courant d'emploi existant du départ.",
      "Toute modification entraîne la mise à jour des documents et du repérage."
     ],
     "lexique": [
      {
       "terme": "Plan d'implantation",
       "def": "Vue en plan à l'échelle situant les appareils électriques et leurs circuits."
      },
      {
       "terme": "Schéma unifilaire",
       "def": "Schéma de distribution où chaque canalisation est représentée par un seul trait."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre d'identification d'un plan : projet, titre, échelle, indice, date."
      },
      {
       "terme": "Indice de révision",
       "def": "Lettre ou numéro indiquant la version d'un plan."
      },
      {
       "terme": "Repère de départ",
       "def": "Identifiant d'un circuit commun au plan, au schéma et à l'étiquette du tableau."
      },
      {
       "terme": "Différentiel de groupe",
       "def": "Dispositif différentiel protégeant plusieurs départs."
      },
      {
       "terme": "Jeu de barres",
       "def": "Ensemble de barres conductrices qui distribue l'énergie aux départs d'un tableau."
      },
      {
       "terme": "Réserve",
       "def": "Emplacement ou puissance laissés disponibles pour des extensions."
      },
      {
       "terme": "Arborescence",
       "def": "Organisation hiérarchique des tableaux et des départs depuis l'origine de l'installation."
      },
      {
       "terme": "U1000 R2V",
       "def": "Désignation d'un câble rigide d'usage courant pour installations fixes, tension assignée 1 000 V."
      }
     ]
    },
    {
     "id": "bmel-doc-schema-developpe",
     "titre": "Le schéma développé d'un équipement automatisé",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Se repérer dans un dossier de schémas multi-folios : sommaire, cartouche, colonnes, renvois.",
      "Identifier les appareils par leur repère et retrouver leurs contacts sur les différents folios.",
      "Lire le circuit de puissance et le circuit de commande d'un départ moteur.",
      "Exploiter le bornier et la nomenclature associés au schéma.",
      "Utiliser le schéma pour expliquer un fonctionnement ou préparer un dépannage."
     ],
     "sections": [
      {
       "titre": "Le dossier de schémas d'une armoire",
       "contenu": "\n<p>Une armoire de commande (station de pompage, centrale de traitement d'air, convoyeur, portail industriel) est livrée avec un <strong>dossier de schémas</strong> réalisé avec un logiciel de schématique électrique. Il se compose de plusieurs dizaines de pages appelées <strong>folios</strong>, chacun consacré à une fonction :</p>\n<ul>\n<li>page de garde et <strong>sommaire</strong> des folios ;</li>\n<li><strong>alimentation</strong> : arrivée, sectionnement, répartition, transformateur de commande, alimentation 24 V continu ;</li>\n<li><strong>puissance</strong> : un ou plusieurs folios par départ moteur ou récepteur ;</li>\n<li><strong>commande</strong> : circuits de commande, arrêts d'urgence, sécurités ;</li>\n<li><strong>automate</strong> : un folio par carte d'entrées ou de sorties, avec l'adresse de chaque voie et ce qui y est raccordé ;</li>\n<li><strong>borniers</strong> : liste des bornes et des câbles extérieurs ;</li>\n<li><strong>nomenclature</strong> : liste de tous les appareils avec repère, désignation, fabricant et référence ;</li>\n<li>parfois le plan d'implantation des appareils dans l'armoire et le plan de perçage de la porte.</li>\n</ul>\n<p>Contrairement à l'unifilaire de distribution, le <strong>schéma développé</strong> représente <strong>tous les conducteurs</strong> et décompose chaque appareil en ses éléments (bobine, contacts de puissance, contacts auxiliaires), placés là où ils agissent dans le circuit, même s'ils appartiennent physiquement au même boîtier.</p>\n"
      },
      {
       "titre": "Repérage des appareils, des folios et des renvois",
       "contenu": "\n<p>Chaque appareil porte un <strong>repère d'identification</strong> composé d'une ou plusieurs lettres indiquant sa fonction et d'un numéro. La norme NF EN 81346-2 définit les lettres de classe ; dans la pratique, on rencontre encore beaucoup les anciens usages. Quelques exemples courants :</p>\n<table>\n<thead><tr><th>Repère</th><th>Appareil</th></tr></thead>\n<tbody>\n<tr><td>Q</td><td>Sectionneur, interrupteur, disjoncteur, contacteur de puissance (selon les usages, KM pour les contacteurs)</td></tr>\n<tr><td>F</td><td>Fusible, relais de protection, parafoudre</td></tr>\n<tr><td>K, KA, KM</td><td>Relais, contacteur auxiliaire, contacteur</td></tr>\n<tr><td>S</td><td>Bouton-poussoir, sélecteur, interrupteur de commande</td></tr>\n<tr><td>B</td><td>Capteur, détecteur</td></tr>\n<tr><td>M</td><td>Moteur</td></tr>\n<tr><td>T</td><td>Transformateur, alimentation</td></tr>\n<tr><td>P, H</td><td>Voyant, signalisation, appareil de mesure</td></tr>\n<tr><td>X</td><td>Bornier, connecteur</td></tr>\n</tbody>\n</table>\n<p>Chaque folio est divisé en <strong>colonnes</strong> numérotées (souvent de 0 à 9). Un élément est donc localisé par « folio.colonne », par exemple 12.4. Ce système permet deux types d'indications :</p>\n<ul>\n<li>les <strong>renvois de potentiel</strong> : une ligne qui sort d'un folio est terminée par une flèche avec un repère du type « 21.0 », indiquant qu'elle continue au folio 21, colonne 0 ;</li>\n<li>les <strong>tableaux de contacts</strong> sous chaque bobine : sous la bobine de KM1 (folio 21, colonne 3), un petit tableau indique où se trouvent ses contacts, par exemple « 1-2 : 12.2 ; 3-4 : 12.2 ; 5-6 : 12.3 ; 13-14 : 21.2 ; 21-22 : 22.5 ».</li>\n</ul>\n<p>Les <strong>numéros de fils</strong> ou de <strong>potentiels</strong> (par exemple 24V, 0V, 101, 102…) sont reportés sur les manchons de repérage des conducteurs dans l'armoire : ils permettent de suivre physiquement un fil.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un schéma développé, les contacts sont toujours représentés dans l'état « repos » : appareils non alimentés, non actionnés. Un contact à ouverture dessiné fermé s'ouvrira quand l'appareil sera actionné.</div>\n"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un départ dans un dossier de schémas.<br>1. Lire la page de garde et le cartouche : équipement, révision, date. Repérer le sommaire.<br>2. Dans la nomenclature, trouver le récepteur concerné (par exemple M2, pompe 2) et son repère de départ.<br>3. Sur le folio de puissance, suivre l'énergie de haut en bas : alimentation (renvoi depuis le folio d'alimentation), protection (disjoncteur-moteur Q2 et son réglage), contacteur KM2, bornier X1, câble, moteur M2. Noter les sections et les références.<br>4. Repérer, sous le contacteur KM2, le renvoi vers sa bobine (par exemple 22.3).<br>5. Sur le folio de commande, lire la ligne de la bobine de KM2 : conditions en série (arrêt d'urgence, contact du disjoncteur-moteur, sortie automate ou contacts de commande, sécurités).<br>6. Si la bobine est commandée par une sortie d'automate, aller au folio de la carte de sorties pour lire l'adresse (par exemple %Q0.3) et, si besoin, à la carte d'entrées pour les capteurs liés.<br>7. Consulter le bornier pour identifier les bornes et les câbles qui sortent de l'armoire vers le terrain.<br>8. Résumer le fonctionnement en une ou deux phrases et lister les points de mesure utiles.</div>\n"
      },
      {
       "titre": "Les pièges de lecture",
       "contenu": "\n<ul>\n<li><strong>Oublier l'état de repos</strong> : interpréter un contact dessiné ouvert comme « toujours ouvert ».</li>\n<li><strong>Confondre repère d'appareil et numéro de borne</strong> : 13-14 désigne les bornes d'un contact auxiliaire à fermeture du contacteur, pas un autre appareil.</li>\n<li><strong>Négliger les renvois</strong> : un potentiel qui « disparaît » en bord de folio continue ailleurs ; ne pas suivre le renvoi fait perdre une partie du circuit (par exemple un arrêt d'urgence commun à plusieurs départs).</li>\n<li><strong>Travailler sur une révision périmée</strong> : le schéma papier de l'armoire peut ne pas correspondre à la version modifiée. On compare la révision du cartouche avec celle du dossier de maintenance.</li>\n<li><strong>Confondre bornier d'armoire et bornier d'appareil</strong> : X1:12 est la borne 12 du bornier X1 de l'armoire, à distinguer des bornes U1, V1, W1 du moteur.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> certains circuits restent sous tension même lorsque le sectionneur général de l'armoire est ouvert : alimentations extérieures (éclairage d'armoire, prise de service, contacts de report d'alarme alimentés par une autre armoire). Ils sont normalement signalés sur le schéma et par une étiquette ; leur présence doit être identifiée avant toute consignation.</div>\n"
      },
      {
       "titre": "Exemple commenté : départ d'une pompe de relevage",
       "contenu": "\n<p>Le document est un extrait de dossier de schémas d'une armoire de poste de relevage des eaux pluviales, révision B. On en donne une description fidèle.</p>\n<p><strong>Folio 12 « Puissance pompe 1 ».</strong> Renvoi d'alimentation L1, L2, L3, PE depuis le folio 10. Disjoncteur-moteur Q11, réglage thermique 9 A, contact auxiliaire 13-14 renvoyé en 21.1. Contacteur KM11 (contacts 1-2, 3-4, 5-6). Bornes X1:1, X1:2, X1:3 et X1:PE. Câble W11 « 4G2,5 » vers moteur M11, 4 kW, 400 V, 8,3 A, couplage étoile.</p>\n<p><strong>Folio 21 « Commande pompes ».</strong> Potentiel 24 V AC venant de 11.8 (transformateur T1). Ligne de la pompe 1, de gauche à droite : contact à ouverture de l'arrêt d'urgence S0 (11-12) ; contact 13-14 de Q11 ; sélecteur S11 trois positions « Manu - 0 - Auto » ; en position Manu, liaison directe ; en position Auto, contact de sortie automate K11 (relais d'interface) ; contact à ouverture 21-22 du contacteur KM12 (pompe 2) ; bobine KM11 ; retour 0 V. Sous KM11, tableau de contacts : 1-2, 3-4, 5-6 en 12.2 et 12.3 ; 13-14 en 23.2 (retour de marche vers l'automate) ; 21-22 en 21.6.</p>\n<p><strong>Folio 30 « Automate - entrées ».</strong> %I0.0 : flotteur niveau bas B1 ; %I0.1 : flotteur niveau haut B2 ; %I0.2 : flotteur trop-plein B3 ; %I0.4 : retour marche KM11.</p>\n<p><strong>Bornier X1.</strong> Bornes 1 à 3 : puissance M11 ; bornes 20 à 22 : flotteurs B1 à B3 (câble W30 vers la fosse).</p>\n"
      },
      {
       "titre": "Analyse modèle de l'exemple",
       "contenu": "\n<p><strong>Circuit de puissance.</strong> La pompe 1 (M11, 4 kW, 8,3 A) est alimentée par l'intermédiaire du disjoncteur-moteur Q11, qui assure le sectionnement, la protection contre les courts-circuits et la protection thermique. Le réglage de 9 A est légèrement supérieur au courant nominal de 8,3 A : il serait plus juste de le régler à 8,3 A, valeur de plaque, pour protéger efficacement le moteur. Le contacteur KM11 commande la marche. Le câble 4G2,5 (trois phases et PE) sort de l'armoire par les bornes X1:1 à X1:3 et X1:PE.</p>\n<p><strong>Circuit de commande.</strong> La bobine de KM11 est alimentée si toutes les conditions en série sont réunies : arrêt d'urgence non actionné, disjoncteur-moteur Q11 fermé (son contact 13-14 est fermé lorsqu'il est enclenché), et soit le sélecteur en Manu, soit le sélecteur en Auto avec le relais K11 commandé par l'automate. Le contact à ouverture 21-22 de KM12 empêche la pompe 1 de démarrer si la pompe 2 est déjà en marche : les deux pompes fonctionnent en alternance et ne peuvent pas tourner ensemble. Ce choix est cohérent si la puissance disponible est limitée, mais il interdit le fonctionnement simultané en cas de forte pluie : à signaler à l'exploitant si les débits l'exigent.</p>\n<p><strong>Information vers l'automate.</strong> Le contact 13-14 de KM11 renvoie l'état de marche sur l'entrée %I0.4 : l'automate peut ainsi détecter une discordance (ordre de marche donné, mais pas de retour) et générer une alarme.</p>\n<p><strong>Points de mesure en cas de non-démarrage en Auto.</strong> Présence du 24 V AC en amont de S0 ; continuité à travers S0 et Q11 ; position du sélecteur ; état de la sortie automate et du relais K11 ; état de KM12 ; tension aux bornes de la bobine KM11. Les entrées %I0.0 et %I0.1 permettent de vérifier si l'automate « voit » bien les niveaux de la fosse.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en dépannage, le technicien annote son tirage papier du schéma au fur et à mesure (tensions relevées, état des contacts). Ces annotations accélèrent le raisonnement et servent ensuite à rédiger le compte rendu d'intervention.</div>\n"
      }
     ],
     "points_cles": [
      "Un dossier de schémas est organisé en folios : alimentation, puissance, commande, automate, borniers, nomenclature.",
      "Le schéma développé représente tous les conducteurs et décompose chaque appareil en éléments.",
      "Un élément se localise par folio et colonne ; les renvois indiquent où un potentiel se poursuit.",
      "Le tableau de contacts sous une bobine donne l'emplacement de tous ses contacts.",
      "Les contacts sont dessinés à l'état de repos.",
      "On lit la puissance de la source au récepteur, puis la ligne de commande de la bobine.",
      "Bornier et nomenclature complètent le schéma pour le câblage et les références.",
      "Certains circuits peuvent rester sous tension après ouverture du sectionneur général."
     ],
     "lexique": [
      {
       "terme": "Folio",
       "def": "Page d'un dossier de schémas, consacrée à une fonction."
      },
      {
       "terme": "Schéma développé",
       "def": "Schéma représentant tous les conducteurs, chaque appareil étant décomposé en ses éléments."
      },
      {
       "terme": "Repère d'identification",
       "def": "Lettres et numéro désignant un appareil dans le schéma et dans l'armoire."
      },
      {
       "terme": "Renvoi",
       "def": "Indication folio et colonne où se poursuit un conducteur ou un potentiel."
      },
      {
       "terme": "Tableau de contacts",
       "def": "Liste, sous une bobine, des contacts de l'appareil et de leur emplacement."
      },
      {
       "terme": "Potentiel",
       "def": "Repère commun à tous les conducteurs reliés électriquement au même point."
      },
      {
       "terme": "Bornier",
       "def": "Ensemble de bornes assurant les liaisons entre l'armoire et l'extérieur."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste des appareils avec repères, désignations et références."
      },
      {
       "terme": "Relais d'interface",
       "def": "Relais placé entre une sortie d'automate et un circuit de commande."
      },
      {
       "terme": "État de repos",
       "def": "État d'un appareil non alimenté et non actionné, convention de représentation des contacts."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Documents d'équipement et de vérification",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bmel-doc-notice-constructeur",
     "titre": "Fiche technique et notice d'installation d'un équipement",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer fiche technique, notice d'installation, notice d'utilisation et déclaration de conformité.",
      "Repérer dans une notice les prescriptions d'installation qui s'imposent à l'installateur.",
      "Extraire les données nécessaires au choix des protections, des câbles et au paramétrage.",
      "Comparer les caractéristiques d'un équipement aux exigences d'un cahier des charges.",
      "Rédiger une analyse argumentée d'une notice dans le cadre d'une préparation d'opération."
     ],
     "sections": [
      {
       "titre": "Les documents du fabricant",
       "contenu": "\n<p>Chaque équipement installé (variateur, onduleur, borne de recharge, centrale d'alarme, luminaire, tableau préassemblé) est accompagné de plusieurs documents du fabricant :</p>\n<table>\n<thead><tr><th>Document</th><th>Destinataire</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Fiche technique (ou fiche produit)</td><td>Prescripteur, acheteur</td><td>Caractéristiques résumées sur une ou deux pages : performances, dimensions, références, options</td></tr>\n<tr><td>Notice d'installation</td><td>Installateur</td><td>Consignes de sécurité, conditions d'installation, raccordement, protections à prévoir, mise en service, paramétrage</td></tr>\n<tr><td>Notice d'utilisation</td><td>Utilisateur</td><td>Fonctionnement, signalisations, entretien courant</td></tr>\n<tr><td>Manuel de programmation ou de communication</td><td>Intégrateur, technicien</td><td>Liste détaillée des paramètres, table d'échange, codes de défaut</td></tr>\n<tr><td>Déclaration UE de conformité</td><td>Toute personne qui la demande</td><td>Engagement du fabricant sur le respect des directives européennes applicables, justifiant le marquage CE</td></tr>\n</tbody>\n</table>\n<p>La notice d'installation n'est pas un conseil : <strong>ses prescriptions font partie des conditions de conformité</strong> de l'installation et de la garantie du matériel. La norme d'installation elle-même renvoie souvent aux instructions du fabricant.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en cas de différence entre une habitude de chantier et la notice, c'est la notice qui fait foi, dans le respect de la norme d'installation. Si la notice et la norme semblent se contredire, on applique la plus exigeante et on interroge le fabricant.</div>\n"
      },
      {
       "titre": "Structure et vocabulaire d'une notice d'installation",
       "contenu": "\n<p>Les notices d'installation suivent une organisation assez constante :</p>\n<ol>\n<li><strong>Consignes de sécurité</strong> : pictogrammes (danger électrique, surface chaude, lire la notice), qualification requise de l'installateur, opérations interdites ;</li>\n<li><strong>Caractéristiques techniques</strong> : tension et fréquence d'alimentation, courant et puissance, indice de protection IP et résistance aux chocs IK, températures de fonctionnement, catégorie de surtension, dimensions et masse ;</li>\n<li><strong>Conditions d'installation</strong> : emplacement, hauteur, distances libres pour la ventilation, exposition (soleil, pluie), fixation ;</li>\n<li><strong>Raccordement électrique</strong> : schéma de raccordement, section des conducteurs admise par les bornes, couple de serrage, protections à prévoir en amont (calibre, courbe, type de différentiel) ;</li>\n<li><strong>Raccordements de communication</strong> : bornes de commande, bus, réseau, adressage ;</li>\n<li><strong>Mise en service et paramétrage</strong> : séquence de première mise sous tension, réglages obligatoires, vérifications ;</li>\n<li><strong>Diagnostic</strong> : signification des voyants et codes de défaut ;</li>\n<li><strong>Maintenance</strong>, fin de vie et recyclage.</li>\n</ol>\n<p>Le vocabulaire est celui des normes : <strong>valeurs assignées</strong> (valeurs fixées par le fabricant pour le fonctionnement), <strong>plage de fonctionnement</strong>, <strong>déclassement</strong> (réduction du courant ou de la puissance admissible au-delà d'une température ou d'une altitude), <strong>catégorie de surtension</strong> (aptitude à supporter les surtensions selon l'emplacement dans l'installation).</p>\n"
      },
      {
       "titre": "Méthode d'exploitation d'une notice",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> extraire d'une notice ce qui est utile à la préparation.<br>1. Vérifier que la notice correspond exactement à la référence et à la version du matériel livré (plaque signalétique, numéro de version de la notice).<br>2. Lire en entier les consignes de sécurité et noter les qualifications ou habilitations exigées.<br>3. Relever les conditions d'emplacement et les comparer au site (IP, températures, distances, hauteur).<br>4. Relever les exigences de raccordement : protections amont imposées, sections minimales et maximales, couples, type de câble. Vérifier leur compatibilité avec la puissance disponible et le tableau existant.<br>5. Noter les paramètres obligatoires à la mise en service et les informations à recueillir auprès du client (puissance souscrite, mode de fonctionnement souhaité, réseau informatique).<br>6. Repérer le tableau des codes de défaut : il servira lors des essais et du dépannage.<br>7. Synthétiser dans une fiche de préparation : liste du matériel complémentaire, réglages, contrôles à réaliser.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les fiches techniques commerciales indiquent souvent les performances maximales (puissance « jusqu'à 22 kW », débit « jusqu'à 1 Gbit/s »). Les conditions réelles dépendent de l'alimentation disponible, du véhicule, du câblage ou de la configuration : on se fie à la notice et aux caractéristiques assignées, pas aux arguments commerciaux.</div>\n"
      },
      {
       "titre": "Exemple commenté : notice d'une borne de recharge",
       "contenu": "\n<p><strong>Situation.</strong> Un client, propriétaire d'une maison individuelle alimentée en monophasé avec une puissance souscrite de 9 kVA (disjoncteur de branchement réglé à 45 A), demande l'installation d'une borne de recharge murale pour son véhicule électrique, dans un garage non chauffé. On dispose d'un extrait de la notice d'installation de la borne retenue, décrit ci-dessous.</p>\n<table>\n<thead><tr><th>Rubrique de la notice</th><th>Indications</th></tr></thead>\n<tbody>\n<tr><td>Installateur</td><td>Installation réservée à un électricien qualifié pour les infrastructures de recharge.</td></tr>\n<tr><td>Alimentation</td><td>230 V monophasé ou 400 V triphasé, 50 Hz. Courant de charge réglable de 6 A à 32 A par sélecteur interne ou par l'application de configuration.</td></tr>\n<tr><td>Protections amont à prévoir</td><td>Disjoncteur dédié de calibre adapté au courant de charge réglé, courbe C. Dispositif différentiel 30 mA de type A ; la borne intègre une détection des courants de défaut continus de 6 mA.</td></tr>\n<tr><td>Raccordement</td><td>Bornes acceptant des conducteurs de 2,5 à 16 mm². Couple de serrage : 2,5 N·m. Section à déterminer selon le courant et la longueur.</td></tr>\n<tr><td>Environnement</td><td>IP54, IK08. Température de fonctionnement de −25 °C à +50 °C. Fixation murale entre 0,90 m et 1,40 m du sol (hauteur de la prise de charge).</td></tr>\n<tr><td>Gestion de puissance</td><td>Entrée pour tore de mesure du courant général : la borne réduit son courant de charge pour que le courant total ne dépasse pas une valeur paramétrée.</td></tr>\n<tr><td>Mise en service</td><td>Régler le courant maximal de charge, le seuil de gestion de puissance, puis réaliser un essai avec le simulateur de véhicule ou un véhicule.</td></tr>\n<tr><td>Codes de défaut</td><td>Voyant rouge fixe : défaut de terre ou défaut différentiel interne ; rouge clignotant : surchauffe ; orange : charge réduite par la gestion de puissance.</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Analyse modèle de l'exemple",
       "contenu": "\n<p><strong>Qualification.</strong> La borne doit être installée par un électricien titulaire d'une qualification IRVE. Le courant de charge pouvant dépasser 16 A (soit 3,7 kW), cette exigence de la notice rejoint l'obligation réglementaire.</p>\n<p><strong>Puissance disponible.</strong> Le branchement est en monophasé avec un disjoncteur de branchement réglé à 45 A. Si la borne était réglée à 32 A (7,4 kW), il ne resterait que 13 A pour le reste de la maison pendant la recharge : les déclenchements du disjoncteur de branchement seraient probables le soir, quand la cuisson et le chauffage fonctionnent. Deux solutions : régler la borne à un courant plus faible (16 A, soit 3,7 kW, ce qui suffit souvent pour une recharge nocturne) ou utiliser la <strong>gestion de puissance</strong> prévue par la notice, avec un tore sur l'arrivée générale et un seuil réglé à 45 A. La seconde solution permet de charger à 32 A quand la maison consomme peu ; elle est à proposer au client.</p>\n<p><strong>Protections.</strong> Circuit dédié depuis le tableau, disjoncteur courbe C de calibre adapté au courant réglé (32 A si la borne est réglée à 32 A) ; différentiel 30 mA de type A, admis ici parce que la borne intègre une détection des courants continus de 6 mA (sinon, un type B serait nécessaire). On vérifie que ce choix est cohérent avec la norme d'installation en vigueur.</p>\n<p><strong>Câble.</strong> La section est à déterminer selon le courant et la longueur (calcul du courant admissible et de la chute de tension) ; elle doit rester dans la plage acceptée par les bornes, 2,5 à 16 mm². Le serrage se fait au couple de 2,5 N·m avec un tournevis dynamométrique, car un serrage insuffisant provoque des échauffements lors des longues recharges.</p>\n<p><strong>Environnement.</strong> Le garage non chauffé reste dans la plage −25 °C à +50 °C ; l'IP54 convient à un local abrité. La borne sera fixée de façon que la prise soit entre 0,90 m et 1,40 m du sol, près de l'emplacement de stationnement.</p>\n<p><strong>Mise en service.</strong> Paramètres à régler : courant maximal de charge et seuil de gestion de puissance ; essai avec simulateur ou véhicule ; explication des voyants au client (le voyant orange signale une charge réduite volontairement, ce n'est pas une panne).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'installateur remet au client une fiche de mise en service mentionnant les réglages effectués (courant maximal, seuil de délestage), les mesures réalisées et la notice d'utilisation. Ces informations évitent des appels inutiles lorsque la charge est réduite par la gestion de puissance.</div>\n"
      }
     ],
     "points_cles": [
      "Fiche technique, notices d'installation et d'utilisation, manuel de programmation et déclaration de conformité ont des rôles distincts.",
      "Les prescriptions de la notice d'installation conditionnent la conformité et la garantie.",
      "On vérifie d'abord que la notice correspond à la référence et à la version du matériel.",
      "On relève emplacement, protections amont, sections, couples, paramètres et codes de défaut.",
      "Les performances commerciales maximales ne remplacent pas les caractéristiques assignées.",
      "La puissance disponible du branchement conditionne le réglage d'un équipement de forte puissance.",
      "Le type de différentiel dépend des dispositifs intégrés à l'équipement, selon sa notice.",
      "Les réglages réalisés sont consignés et expliqués au client."
     ],
     "lexique": [
      {
       "terme": "Fiche technique",
       "def": "Document résumant les caractéristiques d'un produit."
      },
      {
       "terme": "Notice d'installation",
       "def": "Document du fabricant précisant les conditions d'installation, de raccordement et de mise en service."
      },
      {
       "terme": "Déclaration UE de conformité",
       "def": "Document par lequel le fabricant atteste le respect des directives européennes applicables."
      },
      {
       "terme": "Valeur assignée",
       "def": "Valeur d'une grandeur fixée par le fabricant pour un fonctionnement spécifié."
      },
      {
       "terme": "Déclassement",
       "def": "Réduction des performances admissibles au-delà de certaines conditions (température, altitude)."
      },
      {
       "terme": "Catégorie de surtension",
       "def": "Classe d'aptitude d'un matériel à supporter les surtensions selon sa position dans l'installation."
      },
      {
       "terme": "IK",
       "def": "Indice de résistance d'un matériel aux chocs mécaniques."
      },
      {
       "terme": "Couple de serrage",
       "def": "Effort de rotation à appliquer à une vis de borne, en N·m."
      },
      {
       "terme": "Gestion de puissance",
       "def": "Fonction qui limite la puissance d'un équipement pour ne pas dépasser la puissance disponible."
      },
      {
       "terme": "Code de défaut",
       "def": "Signal (voyant, numéro) indiquant la nature d'un défaut détecté par un équipement."
      }
     ]
    },
    {
     "id": "bmel-doc-rapport-verification",
     "titre": "Rapport de vérification et procès-verbal de mesures",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Décrire la structure d'un rapport de vérification périodique des installations électriques.",
      "Interpréter les observations et les résultats de mesures qu'il contient.",
      "Hiérarchiser les non-conformités selon le risque et proposer des actions correctives.",
      "Exploiter un procès-verbal de mesures pour valider ou invalider une installation.",
      "Rédiger un plan d'actions de levée des observations."
     ],
     "sections": [
      {
       "titre": "Pourquoi et par qui les installations sont vérifiées",
       "contenu": "\n<p>Les installations électriques des lieux de travail doivent être vérifiées lors de leur mise en service (vérification initiale), après une modification de structure, puis <strong>périodiquement</strong>. Ces vérifications sont prévues par le Code du travail et ses arrêtés d'application ; elles sont confiées à des organismes accrédités ou à des personnes qualifiées appartenant à l'entreprise. Les établissements recevant du public, les immeubles de grande hauteur et certaines installations particulières ont des obligations complémentaires.</p>\n<p>Le vérificateur ne répare pas : il constate. Son travail aboutit à un <strong>rapport de vérification</strong>, remis au chef d'établissement, qui doit le conserver et faire lever les observations. L'électricien de maintenance ou l'entreprise d'électricité intervient ensuite pour réaliser les travaux de mise en conformité, puis rend compte des actions menées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le rapport de vérification est un outil de travail pour l'électricien. Savoir le lire permet de chiffrer les travaux, de les planifier et de les prioriser selon les risques.</div>\n"
      },
      {
       "titre": "Structure d'un rapport de vérification",
       "contenu": "\n<p>Les rapports varient selon les organismes, mais ils comportent toujours les mêmes rubriques :</p>\n<ol>\n<li><strong>Renseignements généraux</strong> : établissement, date de la visite, nom du vérificateur, type de vérification (initiale, périodique), textes de référence, personnes présentes ;</li>\n<li><strong>Description de l'installation</strong> : alimentation (tension, puissance, raccordement), schéma de liaison à la terre, tableaux et locaux vérifiés, installations de sécurité, documents consultés (schémas, registre) ;</li>\n<li><strong>Limites de la vérification</strong> : parties non vérifiées (locaux inaccessibles, équipements non mis hors tension) ;</li>\n<li><strong>Liste des observations</strong> : chaque non-conformité est décrite, localisée (local, tableau, départ) et associée à l'article de référence ; elle est souvent assortie d'un code de priorité ou d'une mention indiquant si elle est nouvelle ou déjà signalée lors d'une visite précédente ;</li>\n<li><strong>Résultats de mesures et d'essais</strong> : prises de terre, continuités, isolements, essais des différentiels, avec la valeur mesurée et la valeur de référence ;</li>\n<li><strong>Synthèse</strong> : nombre d'observations, rappel des observations non levées.</li>\n</ol>\n<p>Une observation <strong>réitérée</strong> (déjà signalée à la visite précédente et toujours présente) est un signal d'alerte : elle montre que l'établissement n'a pas traité le risque.</p>\n"
      },
      {
       "titre": "Méthode d'exploitation",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> transformer un rapport en plan d'actions.<br>1. Lire les renseignements généraux et la description : SLT, tableaux, locaux. Identifier les limites de la vérification (ce qui n'a pas été vu).<br>2. Pour chaque observation, reformuler le constat en langage simple et identifier le danger : contact direct, contact indirect, incendie, défaut de coupure d'urgence, défaut de documentation.<br>3. Classer les observations : danger immédiat pour les personnes (à traiter sans délai, avec mesure conservatoire si besoin), risque important (à planifier rapidement), non-conformité documentaire ou mineure.<br>4. Pour chaque observation, définir l'action corrective, le matériel nécessaire, les conditions d'intervention (consignation, coupure à programmer avec l'exploitant) et la durée estimée.<br>5. Exploiter les mesures : comparer chaque valeur à sa référence et repérer les valeurs proches de la limite, qui méritent une surveillance.<br>6. Rédiger le plan d'actions sous forme de tableau et le soumettre au client.<br>7. Après travaux, rédiger un compte rendu de levée des observations avec les mesures de contrôle réalisées.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lever une observation ne consiste pas à faire disparaître le symptôme. Par exemple, pour un différentiel qui ne déclenche pas au test, il ne suffit pas de le réarmer : il faut le remplacer, puis tester le nouveau différentiel et consigner le résultat. Une observation n'est levée que si la cause est traitée et le résultat vérifié.</div>\n"
      },
      {
       "titre": "Exemple commenté : extrait de rapport",
       "contenu": "\n<p>Le document est un extrait de rapport de vérification périodique d'un atelier de maintenance d'une collectivité (alimentation en basse tension par le réseau public, 400 V triphasé, schéma TT, un TGBT et deux tableaux divisionnaires TD-Atelier et TD-Bureaux). Il est reproduit de façon fidèle ci-dessous.</p>\n<p><strong>Observations</strong></p>\n<table>\n<thead><tr><th>N°</th><th>Localisation</th><th>Constat</th><th>Statut</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>TD-Atelier</td><td>Absence de plastron sur le tableau : bornes des disjoncteurs accessibles au toucher.</td><td>Nouvelle</td></tr>\n<tr><td>2</td><td>TD-Atelier, départ 7 (prises 16 A établi)</td><td>Dispositif différentiel 30 mA ne déclenchant pas au test par injection de courant.</td><td>Nouvelle</td></tr>\n<tr><td>3</td><td>Atelier, touret à meuler</td><td>Câble d'alimentation souple détérioré, gaine extérieure fendue sur 10 cm.</td><td>Nouvelle</td></tr>\n<tr><td>4</td><td>TGBT</td><td>Schémas des tableaux absents ou non à jour.</td><td>Réitérée</td></tr>\n<tr><td>5</td><td>Local chaufferie</td><td>Luminaire IP20 installé dans un local présentant des risques de projection d'eau.</td><td>Nouvelle</td></tr>\n<tr><td>6</td><td>TD-Bureaux</td><td>Absence de repérage des départs.</td><td>Réitérée</td></tr>\n</tbody>\n</table>\n<p><strong>Mesures</strong></p>\n<table>\n<thead><tr><th>Mesure</th><th>Valeur mesurée</th><th>Référence</th></tr></thead>\n<tbody>\n<tr><td>Résistance de la prise de terre</td><td>42 Ω</td><td>Condition R<sub>A</sub> × I<sub>Δn</sub> ≤ 50 V avec le différentiel de plus grande sensibilité nominale installé en tête (300 mA)</td></tr>\n<tr><td>Isolement TD-Atelier, départ 3 (compresseur)</td><td>0,4 MΩ</td><td>Valeur minimale de la norme pour un circuit 400 V</td></tr>\n<tr><td>Différentiel général TD-Bureaux 300 mA type S</td><td>Déclenchement à 210 mA</td><td>Entre 150 et 300 mA</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Analyse modèle de l'extrait",
       "contenu": "\n<p><strong>Lecture des mesures.</strong> Avec un différentiel de tête de 300 mA, la condition en TT impose R<sub>A</sub> ≤ 50 / 0,3 ≈ 167 Ω. La prise de terre de 42 Ω respecte largement cette condition. Le différentiel général du TD-Bureaux déclenche à 210 mA, entre la moitié et la totalité de son seuil : il est conforme. En revanche, l'isolement du départ 3 (0,4 MΩ) est inférieur à la valeur minimale exigée pour un circuit 400 V : un défaut d'isolement est en cours d'apparition sur le circuit du compresseur (câble, boîte de raccordement ou moteur) ; il faut le rechercher en mesurant séparément le câble et le moteur.</p>\n<p><strong>Classement et plan d'actions.</strong></p>\n<table>\n<thead><tr><th>Priorité</th><th>Obs.</th><th>Danger</th><th>Action corrective</th><th>Conditions</th></tr></thead>\n<tbody>\n<tr><td>Immédiate</td><td>2</td><td>Les prises de l'établi ne sont plus protégées contre les contacts indirects par un 30 mA</td><td>Mesure conservatoire : interdire l'usage des prises (consignation du départ 7) ; remplacer le différentiel, tester par injection et consigner le résultat</td><td>Consignation du départ 7</td></tr>\n<tr><td>Immédiate</td><td>1</td><td>Contact direct avec des pièces nues sous tension</td><td>Fourniture et pose d'un plastron adapté au coffret ; en attendant, balisage et fermeture à clé de l'accès au tableau</td><td>Travail au voisinage ou consignation du tableau</td></tr>\n<tr><td>Immédiate</td><td>3</td><td>Contact direct avec les conducteurs du câble, risque d'électrisation de l'utilisateur</td><td>Mise hors service du touret, remplacement du câble souple complet (pas de ruban isolant)</td><td>Appareil débranché</td></tr>\n<tr><td>Rapide</td><td>Mesure départ 3</td><td>Défaut d'isolement naissant, risque de déclenchement et d'incendie</td><td>Recherche du défaut (câble ou moteur), réparation, nouvelle mesure</td><td>Consignation du départ 3, arrêt du compresseur à programmer</td></tr>\n<tr><td>Rapide</td><td>5</td><td>Pénétration d'eau dans le luminaire, contact indirect et court-circuit</td><td>Remplacement par un luminaire d'indice IP adapté aux projections d'eau</td><td>Consignation du circuit d'éclairage de la chaufferie</td></tr>\n<tr><td>Planifiée</td><td>4 et 6</td><td>Erreurs de consignation et de dépannage dues à une documentation absente</td><td>Relevé des tableaux, établissement des schémas, repérage des départs par étiquettes</td><td>Relevé possible sous tension en respectant le voisinage ; vérification des repères par manœuvres programmées</td></tr>\n</tbody>\n</table>\n<p><strong>Commentaire.</strong> Les observations 4 et 6 sont réitérées : elles ne présentent pas de danger immédiat, mais elles augmentent le risque lors de toute intervention, y compris celles du plan d'actions. On recommande au client de les traiter dans le même chantier, car le relevé des tableaux sera de toute façon nécessaire pour consigner correctement les départs concernés.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> à la fin des travaux, l'entreprise remet un compte rendu de levée des observations : pour chaque numéro, l'action réalisée, la date, les mesures de contrôle (par exemple « différentiel remplacé, essai à 30 mA : déclenchement à 21 mA en 24 ms »). Ce document sera présenté au vérificateur lors de la visite suivante.</div>\n"
      }
     ],
     "points_cles": [
      "Les installations des lieux de travail font l'objet de vérifications initiales et périodiques réglementaires.",
      "Le vérificateur constate ; l'électricien réalise les travaux de levée des observations.",
      "Un rapport comprend renseignements généraux, description, limites, observations, mesures et synthèse.",
      "Une observation réitérée signale un risque non traité.",
      "On classe les observations selon le danger : immédiat, important, documentaire ou mineur.",
      "Un danger immédiat appelle une mesure conservatoire avant la réparation.",
      "Chaque mesure se compare à sa référence ; une valeur proche de la limite se surveille.",
      "Une observation n'est levée qu'après traitement de la cause et vérification du résultat."
     ],
     "lexique": [
      {
       "terme": "Vérification périodique",
       "def": "Contrôle réglementaire régulier de l'état de conformité d'une installation."
      },
      {
       "terme": "Organisme accrédité",
       "def": "Organisme reconnu compétent pour réaliser des vérifications réglementaires."
      },
      {
       "terme": "Observation",
       "def": "Non-conformité constatée et décrite dans un rapport de vérification."
      },
      {
       "terme": "Observation réitérée",
       "def": "Non-conformité déjà signalée lors d'une précédente vérification et non corrigée."
      },
      {
       "terme": "Limites de vérification",
       "def": "Parties d'installation que le vérificateur n'a pas pu contrôler."
      },
      {
       "terme": "Mesure conservatoire",
       "def": "Action immédiate et provisoire supprimant un danger en attendant la réparation."
      },
      {
       "terme": "Plan d'actions",
       "def": "Tableau listant les actions correctives, leur priorité, leurs conditions et leurs délais."
      },
      {
       "terme": "Levée d'observation",
       "def": "Correction d'une non-conformité justifiée par un contrôle."
      },
      {
       "terme": "Plastron",
       "def": "Panneau de protection d'un tableau qui empêche l'accès aux parties sous tension."
      },
      {
       "terme": "Procès-verbal de mesures",
       "def": "Document consignant les mesures réalisées, leurs valeurs et leurs références."
      }
     ]
    }
   ]
  }
 ]
};
